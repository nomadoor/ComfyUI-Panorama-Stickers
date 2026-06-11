import * as vo from "../../scripts/app.js";
import { app as hn } from "../../scripts/app.js";
import { api as Qt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Kl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const rt = {}, vi = [], jn = () => {
}, Qf = () => !1, Zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qo = (e) => e.startsWith("onUpdate:"), Wt = Object.assign, Wl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, fg = Object.prototype.hasOwnProperty, Ze = (e, t) => fg.call(e, t), Le = Array.isArray, _i = (e) => wa(e) === "[object Map]", ed = (e) => wa(e) === "[object Set]", Iu = (e) => wa(e) === "[object Date]", je = (e) => typeof e == "function", St = (e) => typeof e == "string", Vn = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", td = (e) => (tt(e) || je(e)) && je(e.then) && je(e.catch), nd = Object.prototype.toString, wa = (e) => nd.call(e), dg = (e) => wa(e).slice(8, -1), rd = (e) => wa(e) === "[object Object]", Yl = (e) => St(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ta = /* @__PURE__ */ Kl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, hg = /-\w/g, en = es(
  (e) => e.replace(hg, (t) => t.slice(1).toUpperCase())
), pg = /\B([A-Z])/g, Wr = es(
  (e) => e.replace(pg, "-$1").toLowerCase()
), ts = es((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zs = es(
  (e) => e ? `on${ts(e)}` : ""
), zn = (e, t) => !Object.is(e, t), Qs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, id = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, mg = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Eu;
const ns = () => Eu || (Eu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
  if (Le(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = St(i) ? vg(i) : kt(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (St(e) || tt(e))
    return e;
}
const gg = /;(?![^(]*\))/g, bg = /:([^]+)/, yg = /\/\*[^]*?\*\//g;
function vg(e) {
  const t = {};
  return e.replace(yg, "").split(gg).forEach((n) => {
    if (n) {
      const i = n.split(bg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ht(e) {
  let t = "";
  if (St(e))
    t = e;
  else if (Le(e))
    for (let n = 0; n < e.length; n++) {
      const i = ht(e[n]);
      i && (t += i + " ");
    }
  else if (tt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const _g = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xg = /* @__PURE__ */ Kl(_g);
function ad(e) {
  return !!e || e === "";
}
function wg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = ql(e[i], t[i]);
  return n;
}
function ql(e, t) {
  if (e === t) return !0;
  let n = Iu(e), i = Iu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Vn(e), i = Vn(t), n || i)
    return e === t;
  if (n = Le(e), i = Le(t), n || i)
    return n && i ? wg(e, t) : !1;
  if (n = tt(e), i = tt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const f in e) {
      const d = e.hasOwnProperty(f), m = t.hasOwnProperty(f);
      if (d && !m || !d && m || !ql(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const od = (e) => !!(e && e.__v_isRef === !0), gt = (e) => St(e) ? e : e == null ? "" : Le(e) || tt(e) && (e.toString === nd || !je(e.toString)) ? od(e) ? gt(e.value) : JSON.stringify(e, sd, 2) : String(e), sd = (e, t) => od(t) ? sd(e, t.value) : _i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[el(i, l) + " =>"] = a, n),
    {}
  )
} : ed(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => el(n))
} : Vn(t) ? el(t) : tt(t) && !Le(t) && !rd(t) ? String(t) : t, el = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Vn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let on;
class Sg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = on, !t && on && (this.index = (on.scopes || (on.scopes = [])).push(
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
      const n = on;
      try {
        return on = this, t();
      } finally {
        on = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = on, on = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (on = this.prevScope, this.prevScope = void 0);
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
function Ng() {
  return on;
}
let at;
const tl = /* @__PURE__ */ new WeakSet();
class ld {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, on && on.active && on.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, tl.has(this) && (tl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ud(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Du(this), fd(this);
    const t = at, n = An;
    at = this, An = !0;
    try {
      return this.fn();
    } finally {
      dd(this), at = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Zl(t);
      this.deps = this.depsTail = void 0, Du(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? tl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let cd = 0, na, ra;
function ud(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ra, ra = e;
    return;
  }
  e.next = na, na = e;
}
function Xl() {
  cd++;
}
function Jl() {
  if (--cd > 0)
    return;
  if (ra) {
    let t = ra;
    for (ra = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; na; ) {
    let t = na;
    for (na = void 0; t; ) {
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
function fd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function dd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Zl(i), Mg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Sl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ha) || (e.globalVersion = ha, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Sl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = at, i = An;
  at = e, An = !0;
  try {
    fd(e);
    const a = e.fn(e._value);
    (t.version === 0 || zn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    at = n, An = i, dd(e), e.flags &= -3;
  }
}
function Zl(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Zl(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Mg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const pd = [];
function rr() {
  pd.push(An), An = !1;
}
function ir() {
  const e = pd.pop();
  An = e === void 0 ? !0 : e;
}
function Du(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = at;
    at = void 0;
    try {
      t();
    } finally {
      at = n;
    }
  }
}
let ha = 0;
class kg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!at || !An || at === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== at)
      n = this.activeLink = new kg(at, this), at.deps ? (n.prevDep = at.depsTail, at.depsTail.nextDep = n, at.depsTail = n) : at.deps = at.depsTail = n, md(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = at.depsTail, n.nextDep = void 0, at.depsTail.nextDep = n, at.depsTail = n, at.deps === n && (at.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, ha++, this.notify(t);
  }
  notify(t) {
    Xl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Jl();
    }
  }
}
function md(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        md(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Nl = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ Symbol(
  ""
), Ml = /* @__PURE__ */ Symbol(
  ""
), pa = /* @__PURE__ */ Symbol(
  ""
);
function Bt(e, t, n) {
  if (An && at) {
    let i = Nl.get(e);
    i || Nl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ql()), a.map = i, a.key = n), a.track();
  }
}
function er(e, t, n, i, a, l) {
  const f = Nl.get(e);
  if (!f) {
    ha++;
    return;
  }
  const d = (m) => {
    m && m.trigger();
  };
  if (Xl(), t === "clear")
    f.forEach(d);
  else {
    const m = Le(e), y = m && Yl(n);
    if (m && n === "length") {
      const _ = Number(i);
      f.forEach((p, w) => {
        (w === "length" || w === pa || !Vn(w) && w >= _) && d(p);
      });
    } else
      switch ((n !== void 0 || f.has(void 0)) && d(f.get(n)), y && d(f.get(pa)), t) {
        case "add":
          m ? y && d(f.get("length")) : (d(f.get(Fr)), _i(e) && d(f.get(Ml)));
          break;
        case "delete":
          m || (d(f.get(Fr)), _i(e) && d(f.get(Ml)));
          break;
        case "set":
          _i(e) && d(f.get(Fr));
          break;
      }
  }
  Jl();
}
function ui(e) {
  const t = /* @__PURE__ */ Je(e);
  return t === e ? t : (Bt(t, "iterate", pa), /* @__PURE__ */ xn(e) ? t : t.map(Cn));
}
function rs(e) {
  return Bt(e = /* @__PURE__ */ Je(e), "iterate", pa), e;
}
function Fn(e, t) {
  return /* @__PURE__ */ ar(e) ? Pi(/* @__PURE__ */ Lr(e) ? Cn(t) : t) : Cn(t);
}
const Pg = {
  __proto__: null,
  [Symbol.iterator]() {
    return nl(this, Symbol.iterator, (e) => Fn(this, e));
  },
  concat(...e) {
    return ui(this).concat(
      ...e.map((t) => Le(t) ? ui(t) : t)
    );
  },
  entries() {
    return nl(this, "entries", (e) => (e[1] = Fn(this, e[1]), e));
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
      (n) => n.map((i) => Fn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Wn(
      this,
      "find",
      e,
      t,
      (n) => Fn(this, n),
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
      (n) => Fn(this, n),
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
    return rl(this, "includes", e);
  },
  indexOf(...e) {
    return rl(this, "indexOf", e);
  },
  join(e) {
    return ui(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return rl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Vi(this, "pop");
  },
  push(...e) {
    return Vi(this, "push", e);
  },
  reduce(e, ...t) {
    return Ru(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ru(this, "reduceRight", e, t);
  },
  shift() {
    return Vi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Wn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Vi(this, "splice", e);
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
    return Vi(this, "unshift", e);
  },
  values() {
    return nl(this, "values", (e) => Fn(this, e));
  }
};
function nl(e, t, n) {
  const i = rs(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ xn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const Ag = Array.prototype;
function Wn(e, t, n, i, a, l) {
  const f = rs(e), d = f !== e && !/* @__PURE__ */ xn(e), m = f[t];
  if (m !== Ag[t]) {
    const p = m.apply(e, l);
    return d ? Cn(p) : p;
  }
  let y = n;
  f !== e && (d ? y = function(p, w) {
    return n.call(this, Fn(e, p), w, e);
  } : n.length > 2 && (y = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const _ = m.call(f, y, i);
  return d && a ? a(_) : _;
}
function Ru(e, t, n, i) {
  const a = rs(e), l = a !== e && !/* @__PURE__ */ xn(e);
  let f = n, d = !1;
  a !== e && (l ? (d = i.length === 0, f = function(y, _, p) {
    return d && (d = !1, y = Fn(e, y)), n.call(this, y, Fn(e, _), p, e);
  }) : n.length > 3 && (f = function(y, _, p) {
    return n.call(this, y, _, p, e);
  }));
  const m = a[t](f, ...i);
  return d ? Fn(e, m) : m;
}
function rl(e, t, n) {
  const i = /* @__PURE__ */ Je(e);
  Bt(i, "iterate", pa);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ nc(n[0]) ? (n[0] = /* @__PURE__ */ Je(n[0]), i[t](...n)) : a;
}
function Vi(e, t, n = []) {
  rr(), Xl();
  const i = (/* @__PURE__ */ Je(e))[t].apply(e, n);
  return Jl(), ir(), i;
}
const Cg = /* @__PURE__ */ Kl("__proto__,__v_isRef,__isVue"), gd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vn)
);
function Tg(e) {
  Vn(e) || (e = String(e));
  const t = /* @__PURE__ */ Je(this);
  return Bt(t, "has", e), t.hasOwnProperty(e);
}
class bd {
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
      return i === (a ? l ? jg : xd : l ? _d : vd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const f = Le(t);
    if (!a) {
      let m;
      if (f && (m = Pg[n]))
        return m;
      if (n === "hasOwnProperty")
        return Tg;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Kt(t) ? t : i
    );
    if ((Vn(n) ? gd.has(n) : Cg(n)) || (a || Bt(t, "get", n), l))
      return d;
    if (/* @__PURE__ */ Kt(d)) {
      const m = f && Yl(n) ? d : d.value;
      return a && tt(m) ? /* @__PURE__ */ Pl(m) : m;
    }
    return tt(d) ? a ? /* @__PURE__ */ Pl(d) : /* @__PURE__ */ is(d) : d;
  }
}
class yd extends bd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const f = Le(t) && Yl(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ ar(l);
      if (!/* @__PURE__ */ xn(i) && !/* @__PURE__ */ ar(i) && (l = /* @__PURE__ */ Je(l), i = /* @__PURE__ */ Je(i)), !f && /* @__PURE__ */ Kt(l) && !/* @__PURE__ */ Kt(i))
        return y || (l.value = i), !0;
    }
    const d = f ? Number(n) < t.length : Ze(t, n), m = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Kt(t) ? t : a
    );
    return t === /* @__PURE__ */ Je(a) && (d ? zn(i, l) && er(t, "set", n, i) : er(t, "add", n, i)), m;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && er(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Vn(n) || !gd.has(n)) && Bt(t, "has", n), i;
  }
  ownKeys(t) {
    return Bt(
      t,
      "iterate",
      Le(t) ? "length" : Fr
    ), Reflect.ownKeys(t);
  }
}
class Ig extends bd {
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
const Eg = /* @__PURE__ */ new yd(), Dg = /* @__PURE__ */ new Ig(), Rg = /* @__PURE__ */ new yd(!0);
const kl = (e) => e, Xa = (e) => Reflect.getPrototypeOf(e);
function Og(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ Je(a), f = _i(l), d = e === "entries" || e === Symbol.iterator && f, m = e === "keys" && f, y = a[e](...i), _ = n ? kl : t ? Pi : Cn;
    return !t && Bt(
      l,
      "iterate",
      m ? Ml : Fr
    ), Wt(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = y.next();
          return w ? { value: p, done: w } : {
            value: d ? [_(p[0]), _(p[1])] : _(p),
            done: w
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
function Fg(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, f = /* @__PURE__ */ Je(l), d = /* @__PURE__ */ Je(a);
      e || (zn(a, d) && Bt(f, "get", a), Bt(f, "get", d));
      const { has: m } = Xa(f), y = t ? kl : e ? Pi : Cn;
      if (m.call(f, a))
        return y(l.get(a));
      if (m.call(f, d))
        return y(l.get(d));
      l !== f && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Bt(/* @__PURE__ */ Je(a), "iterate", Fr), a.size;
    },
    has(a) {
      const l = this.__v_raw, f = /* @__PURE__ */ Je(l), d = /* @__PURE__ */ Je(a);
      return e || (zn(a, d) && Bt(f, "has", a), Bt(f, "has", d)), a === d ? l.has(a) : l.has(a) || l.has(d);
    },
    forEach(a, l) {
      const f = this, d = f.__v_raw, m = /* @__PURE__ */ Je(d), y = t ? kl : e ? Pi : Cn;
      return !e && Bt(m, "iterate", Fr), d.forEach((_, p) => a.call(l, y(_), y(p), f));
    }
  };
  return Wt(
    n,
    e ? {
      add: Ja("add"),
      set: Ja("set"),
      delete: Ja("delete"),
      clear: Ja("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ Je(this), f = Xa(l), d = /* @__PURE__ */ Je(a), m = !t && !/* @__PURE__ */ xn(a) && !/* @__PURE__ */ ar(a) ? d : a;
        return f.has.call(l, m) || zn(a, m) && f.has.call(l, a) || zn(d, m) && f.has.call(l, d) || (l.add(m), er(l, "add", m, m)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ xn(l) && !/* @__PURE__ */ ar(l) && (l = /* @__PURE__ */ Je(l));
        const f = /* @__PURE__ */ Je(this), { has: d, get: m } = Xa(f);
        let y = d.call(f, a);
        y || (a = /* @__PURE__ */ Je(a), y = d.call(f, a));
        const _ = m.call(f, a);
        return f.set(a, l), y ? zn(l, _) && er(f, "set", a, l) : er(f, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ Je(this), { has: f, get: d } = Xa(l);
        let m = f.call(l, a);
        m || (a = /* @__PURE__ */ Je(a), m = f.call(l, a)), d && d.call(l, a);
        const y = l.delete(a);
        return m && er(l, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Je(this), l = a.size !== 0, f = a.clear();
        return l && er(
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
    n[a] = Og(a, e, t);
  }), n;
}
function ec(e, t) {
  const n = Fg(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    l
  );
}
const Lg = {
  get: /* @__PURE__ */ ec(!1, !1)
}, zg = {
  get: /* @__PURE__ */ ec(!1, !0)
}, $g = {
  get: /* @__PURE__ */ ec(!0, !1)
};
const vd = /* @__PURE__ */ new WeakMap(), _d = /* @__PURE__ */ new WeakMap(), xd = /* @__PURE__ */ new WeakMap(), jg = /* @__PURE__ */ new WeakMap();
function Vg(e) {
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
function Hg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vg(dg(e));
}
// @__NO_SIDE_EFFECTS__
function is(e) {
  return /* @__PURE__ */ ar(e) ? e : tc(
    e,
    !1,
    Eg,
    Lg,
    vd
  );
}
// @__NO_SIDE_EFFECTS__
function Ug(e) {
  return tc(
    e,
    !1,
    Rg,
    zg,
    _d
  );
}
// @__NO_SIDE_EFFECTS__
function Pl(e) {
  return tc(
    e,
    !0,
    Dg,
    $g,
    xd
  );
}
function tc(e, t, n, i, a) {
  if (!tt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = Hg(e);
  if (l === 0)
    return e;
  const f = a.get(e);
  if (f)
    return f;
  const d = new Proxy(
    e,
    l === 2 ? i : n
  );
  return a.set(e, d), d;
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
function nc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Je(t) : e;
}
function Bg(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && id(e, "__v_skip", !0), e;
}
const Cn = (e) => tt(e) ? /* @__PURE__ */ is(e) : e, Pi = (e) => tt(e) ? /* @__PURE__ */ Pl(e) : e;
// @__NO_SIDE_EFFECTS__
function Kt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Io(e) {
  return Gg(e, !1);
}
function Gg(e, t) {
  return /* @__PURE__ */ Kt(e) ? e : new Kg(e, t);
}
class Kg {
  constructor(t, n) {
    this.dep = new Ql(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Je(t), this._value = n ? t : Cn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ xn(t) || /* @__PURE__ */ ar(t);
    t = i ? t : /* @__PURE__ */ Je(t), zn(t, n) && (this._rawValue = t, this._value = i ? t : Cn(t), this.dep.trigger());
  }
}
function Rr(e) {
  return /* @__PURE__ */ Kt(e) ? e.value : e;
}
const Wg = {
  get: (e, t, n) => t === "__v_raw" ? e : Rr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Kt(a) && !/* @__PURE__ */ Kt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function wd(e) {
  return /* @__PURE__ */ Lr(e) ? e : new Proxy(e, Wg);
}
class Yg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ql(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ha - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    at !== this)
      return ud(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function qg(e, t, n = !1) {
  let i, a;
  return je(e) ? i = e : (i = e.get, a = e.set), new Yg(i, a, n);
}
const Za = {}, Eo = /* @__PURE__ */ new WeakMap();
let Er;
function Xg(e, t = !1, n = Er) {
  if (n) {
    let i = Eo.get(n);
    i || Eo.set(n, i = []), i.push(e);
  }
}
function Jg(e, t, n = rt) {
  const { immediate: i, deep: a, once: l, scheduler: f, augmentJob: d, call: m } = n, y = (C) => a ? C : /* @__PURE__ */ xn(C) || a === !1 || a === 0 ? tr(C, 1) : tr(C);
  let _, p, w, A, T = !1, M = !1;
  if (/* @__PURE__ */ Kt(e) ? (p = () => e.value, T = /* @__PURE__ */ xn(e)) : /* @__PURE__ */ Lr(e) ? (p = () => y(e), T = !0) : Le(e) ? (M = !0, T = e.some((C) => /* @__PURE__ */ Lr(C) || /* @__PURE__ */ xn(C)), p = () => e.map((C) => {
    if (/* @__PURE__ */ Kt(C))
      return C.value;
    if (/* @__PURE__ */ Lr(C))
      return y(C);
    if (je(C))
      return m ? m(C, 2) : C();
  })) : je(e) ? t ? p = m ? () => m(e, 2) : e : p = () => {
    if (w) {
      rr();
      try {
        w();
      } finally {
        ir();
      }
    }
    const C = Er;
    Er = _;
    try {
      return m ? m(e, 3, [A]) : e(A);
    } finally {
      Er = C;
    }
  } : p = jn, t && a) {
    const C = p, R = a === !0 ? 1 / 0 : a;
    p = () => tr(C(), R);
  }
  const $ = Ng(), z = () => {
    _.stop(), $ && $.active && Wl($.effects, _);
  };
  if (l && t) {
    const C = t;
    t = (...R) => {
      C(...R), z();
    };
  }
  let F = M ? new Array(e.length).fill(Za) : Za;
  const I = (C) => {
    if (!(!(_.flags & 1) || !_.dirty && !C))
      if (t) {
        const R = _.run();
        if (a || T || (M ? R.some((J, ne) => zn(J, F[ne])) : zn(R, F))) {
          w && w();
          const J = Er;
          Er = _;
          try {
            const ne = [
              R,
              // pass undefined as the old value when it's changed for the first time
              F === Za ? void 0 : M && F[0] === Za ? [] : F,
              A
            ];
            F = R, m ? m(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            Er = J;
          }
        }
      } else
        _.run();
  };
  return d && d(I), _ = new ld(p), _.scheduler = f ? () => f(I, !1) : I, A = (C) => Xg(C, !1, _), w = _.onStop = () => {
    const C = Eo.get(_);
    if (C) {
      if (m)
        m(C, 4);
      else
        for (const R of C) R();
      Eo.delete(_);
    }
  }, t ? i ? I(!0) : F = _.run() : f ? f(I.bind(null, !0), !0) : _.run(), z.pause = _.pause.bind(_), z.resume = _.resume.bind(_), z.stop = z, z;
}
function tr(e, t = 1 / 0, n) {
  if (t <= 0 || !tt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Kt(e))
    tr(e.value, t, n);
  else if (Le(e))
    for (let i = 0; i < e.length; i++)
      tr(e[i], t, n);
  else if (ed(e) || _i(e))
    e.forEach((i) => {
      tr(i, t, n);
    });
  else if (rd(e)) {
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
function Sa(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    as(a, t, n);
  }
}
function Hn(e, t, n, i) {
  if (je(e)) {
    const a = Sa(e, t, n, i);
    return a && td(a) && a.catch((l) => {
      as(l, t, n);
    }), a;
  }
  if (Le(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Hn(e[l], t, n, i));
    return a;
  }
}
function as(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: f } = t && t.appContext.config || rt;
  if (t) {
    let d = t.parent;
    const m = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const _ = d.ec;
      if (_) {
        for (let p = 0; p < _.length; p++)
          if (_[p](e, m, y) === !1)
            return;
      }
      d = d.parent;
    }
    if (l) {
      rr(), Sa(l, null, 10, [
        e,
        m,
        y
      ]), ir();
      return;
    }
  }
  Zg(e, n, a, i, f);
}
function Zg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Zt = [];
let On = -1;
const xi = [];
let mr = null, pi = 0;
const Sd = /* @__PURE__ */ Promise.resolve();
let Do = null;
function rc(e) {
  const t = Do || Sd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qg(e) {
  let t = On + 1, n = Zt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Zt[i], l = ma(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function ic(e) {
  if (!(e.flags & 1)) {
    const t = ma(e), n = Zt[Zt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ma(n) ? Zt.push(e) : Zt.splice(Qg(t), 0, e), e.flags |= 1, Nd();
  }
}
function Nd() {
  Do || (Do = Sd.then(kd));
}
function e0(e) {
  Le(e) ? xi.push(...e) : mr && e.id === -1 ? mr.splice(pi + 1, 0, e) : e.flags & 1 || (xi.push(e), e.flags |= 1), Nd();
}
function Ou(e, t, n = On + 1) {
  for (; n < Zt.length; n++) {
    const i = Zt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Zt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Md(e) {
  if (xi.length) {
    const t = [...new Set(xi)].sort(
      (n, i) => ma(n) - ma(i)
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
const ma = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kd(e) {
  try {
    for (On = 0; On < Zt.length; On++) {
      const t = Zt[On];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Sa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; On < Zt.length; On++) {
      const t = Zt[On];
      t && (t.flags &= -2);
    }
    On = -1, Zt.length = 0, Md(), Do = null, (Zt.length || xi.length) && kd();
  }
}
let pn = null, Pd = null;
function Ro(e) {
  const t = pn;
  return pn = e, Pd = e && e.type.__scopeId || null, t;
}
function Ad(e, t = pn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Wu(-1);
    const l = Ro(t);
    let f;
    try {
      f = e(...a);
    } finally {
      Ro(l), i._d && Wu(1);
    }
    return f;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function ac(e, t) {
  if (pn === null)
    return e;
  const n = cs(pn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, f, d, m = rt] = t[a];
    l && (je(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && tr(f), i.push({
      dir: l,
      instance: n,
      value: f,
      oldValue: void 0,
      arg: d,
      modifiers: m
    }));
  }
  return e;
}
function Pr(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    l && (d.oldValue = l[f].value);
    let m = d.dir[i];
    m && (rr(), Hn(m, n, 8, [
      e.el,
      d,
      e,
      t
    ]), ir());
  }
}
function t0(e, t) {
  if (Gt) {
    let n = Gt.provides;
    const i = Gt.parent && Gt.parent.provides;
    i === n && (n = Gt.provides = Object.create(i)), n[e] = t;
  }
}
function _o(e, t, n = !1) {
  const i = tb();
  if (i || Si) {
    let a = Si ? Si._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && je(t) ? t.call(i && i.proxy) : t;
  }
}
const n0 = /* @__PURE__ */ Symbol.for("v-scx"), r0 = () => _o(n0);
function wi(e, t, n) {
  return Cd(e, t, n);
}
function Cd(e, t, n = rt) {
  const { immediate: i, deep: a, flush: l, once: f } = n, d = Wt({}, n), m = t && i || !t && l !== "post";
  let y;
  if (ba) {
    if (l === "sync") {
      const A = r0();
      y = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!m) {
      const A = () => {
      };
      return A.stop = jn, A.resume = jn, A.pause = jn, A;
    }
  }
  const _ = Gt;
  d.call = (A, T, M) => Hn(A, _, T, M);
  let p = !1;
  l === "post" ? d.scheduler = (A) => {
    an(A, _ && _.suspense);
  } : l !== "sync" && (p = !0, d.scheduler = (A, T) => {
    T ? A() : ic(A);
  }), d.augmentJob = (A) => {
    t && (A.flags |= 4), p && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const w = Jg(e, t, d);
  return ba && (y ? y.push(w) : m && w()), w;
}
function i0(e, t, n) {
  const i = this.proxy, a = St(e) ? e.includes(".") ? Td(i, e) : () => i[e] : e.bind(i, i);
  let l;
  je(t) ? l = t : (l = t.handler, n = t);
  const f = Na(this), d = Cd(a, l.bind(i), n);
  return f(), d;
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
const a0 = /* @__PURE__ */ Symbol("_vte"), o0 = (e) => e.__isTeleport, s0 = /* @__PURE__ */ Symbol("_leaveCb");
function oc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, oc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Id(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Fu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Oo = /* @__PURE__ */ new WeakMap();
function ia(e, t, n, i, a = !1) {
  if (Le(e)) {
    e.forEach(
      (M, $) => ia(
        M,
        t && (Le(t) ? t[$] : t),
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
  const l = i.shapeFlag & 4 ? cs(i.component) : i.el, f = a ? null : l, { i: d, r: m } = e, y = t && t.r, _ = d.refs === rt ? d.refs = {} : d.refs, p = d.setupState, w = /* @__PURE__ */ Je(p), A = p === rt ? Qf : (M) => Fu(_, M) ? !1 : Ze(w, M), T = (M, $) => !($ && Fu(_, $));
  if (y != null && y !== m) {
    if (Lu(t), St(y))
      _[y] = null, A(y) && (p[y] = null);
    else if (/* @__PURE__ */ Kt(y)) {
      const M = t;
      T(y, M.k) && (y.value = null), M.k && (_[M.k] = null);
    }
  }
  if (je(m))
    Sa(m, d, 12, [f, _]);
  else {
    const M = St(m), $ = /* @__PURE__ */ Kt(m);
    if (M || $) {
      const z = () => {
        if (e.f) {
          const F = M ? A(m) ? p[m] : _[m] : T() || !e.k ? m.value : _[e.k];
          if (a)
            Le(F) && Wl(F, l);
          else if (Le(F))
            F.includes(l) || F.push(l);
          else if (M)
            _[m] = [l], A(m) && (p[m] = _[m]);
          else {
            const I = [l];
            T(m, e.k) && (m.value = I), e.k && (_[e.k] = I);
          }
        } else M ? (_[m] = f, A(m) && (p[m] = f)) : $ && (T(m, e.k) && (m.value = f), e.k && (_[e.k] = f));
      };
      if (f) {
        const F = () => {
          z(), Oo.delete(e);
        };
        F.id = -1, Oo.set(e, F), an(F, n);
      } else
        Lu(e), z();
    }
  }
}
function Lu(e) {
  const t = Oo.get(e);
  t && (t.flags |= 8, Oo.delete(e));
}
ns().requestIdleCallback;
ns().cancelIdleCallback;
const aa = (e) => !!e.type.__asyncLoader, Ed = (e) => e.type.__isKeepAlive;
function l0(e, t) {
  Dd(e, "a", t);
}
function c0(e, t) {
  Dd(e, "da", t);
}
function Dd(e, t, n = Gt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (os(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Ed(a.parent.vnode) && u0(i, t, n, a), a = a.parent;
  }
}
function u0(e, t, n, i) {
  const a = os(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Od(() => {
    Wl(i[t], a);
  }, n);
}
function os(e, t, n = Gt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...f) => {
      rr();
      const d = Na(n), m = Hn(t, n, e, f);
      return d(), ir(), m;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const or = (e) => (t, n = Gt) => {
  (!ba || e === "sp") && os(e, (...i) => t(...i), n);
}, f0 = or("bm"), Rd = or("m"), d0 = or(
  "bu"
), h0 = or("u"), sc = or(
  "bum"
), Od = or("um"), p0 = or(
  "sp"
), m0 = or("rtg"), g0 = or("rtc");
function b0(e, t = Gt) {
  os("ec", e, t);
}
const y0 = "components", Fd = /* @__PURE__ */ Symbol.for("v-ndc");
function v0(e) {
  return St(e) ? _0(y0, e, !1) || e : e || Fd;
}
function _0(e, t, n = !0, i = !1) {
  const a = pn || Gt;
  if (a) {
    const l = a.type;
    {
      const d = ob(
        l,
        !1
      );
      if (d && (d === t || d === en(t) || d === ts(en(t))))
        return l;
    }
    const f = (
      // local registration
      // check instance[type] first which is resolved for options API
      zu(a[e] || l[e], t) || // global registration
      zu(a.appContext[e], t)
    );
    return !f && i ? l : f;
  }
}
function zu(e, t) {
  return e && (e[t] || e[en(t)] || e[ts(en(t))]);
}
function zt(e, t, n, i) {
  let a;
  const l = n, f = Le(e);
  if (f || St(e)) {
    const d = f && /* @__PURE__ */ Lr(e);
    let m = !1, y = !1;
    d && (m = !/* @__PURE__ */ xn(e), y = /* @__PURE__ */ ar(e), e = rs(e)), a = new Array(e.length);
    for (let _ = 0, p = e.length; _ < p; _++)
      a[_] = t(
        m ? y ? Pi(Cn(e[_])) : Cn(e[_]) : e[_],
        _,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, l);
  } else if (tt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, m) => t(d, m, void 0, l)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let m = 0, y = d.length; m < y; m++) {
        const _ = d[m];
        a[m] = t(e[_], _, m, l);
      }
    }
  else
    a = [];
  return a;
}
const Al = (e) => e ? rh(e) ? cs(e) : Al(e.parent) : null, oa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Wt(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => zd(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ic(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rc.bind(e.proxy)),
    $watch: (e) => i0.bind(e)
  })
), il = (e, t) => e !== rt && !e.__isScriptSetup && Ze(e, t), x0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: f, type: d, appContext: m } = e;
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
            return l[t];
        }
      else {
        if (il(i, t))
          return f[t] = 1, i[t];
        if (a !== rt && Ze(a, t))
          return f[t] = 2, a[t];
        if (Ze(l, t))
          return f[t] = 3, l[t];
        if (n !== rt && Ze(n, t))
          return f[t] = 4, n[t];
        Cl && (f[t] = 0);
      }
    }
    const y = oa[t];
    let _, p;
    if (y)
      return t === "$attrs" && Bt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (_ = d.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== rt && Ze(n, t))
      return f[t] = 4, n[t];
    if (
      // global properties
      p = m.config.globalProperties, Ze(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return il(a, t) ? (a[t] = n, !0) : i !== rt && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: f }
  }, d) {
    let m;
    return !!(n[d] || e !== rt && d[0] !== "$" && Ze(e, d) || il(t, d) || Ze(l, d) || Ze(i, d) || Ze(oa, d) || Ze(a.config.globalProperties, d) || (m = f.__cssModules) && m[d]);
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
let Cl = !0;
function w0(e) {
  const t = zd(e), n = e.proxy, i = e.ctx;
  Cl = !1, t.beforeCreate && ju(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: f,
    watch: d,
    provide: m,
    inject: y,
    // lifecycle
    created: _,
    beforeMount: p,
    mounted: w,
    beforeUpdate: A,
    updated: T,
    activated: M,
    deactivated: $,
    beforeDestroy: z,
    beforeUnmount: F,
    destroyed: I,
    unmounted: C,
    render: R,
    renderTracked: J,
    renderTriggered: ne,
    errorCaptured: te,
    serverPrefetch: xe,
    // public API
    expose: P,
    inheritAttrs: de,
    // assets
    components: ue,
    directives: ce,
    filters: j
  } = t;
  if (y && S0(y, i, null), f)
    for (const ge in f) {
      const X = f[ge];
      je(X) && (i[ge] = X.bind(n));
    }
  if (a) {
    const ge = a.call(n, n);
    tt(ge) && (e.data = /* @__PURE__ */ is(ge));
  }
  if (Cl = !0, l)
    for (const ge in l) {
      const X = l[ge], ve = je(X) ? X.bind(n, n) : je(X.get) ? X.get.bind(n, n) : jn, Me = !je(X) && je(X.set) ? X.set.bind(n) : jn, Re = xt({
        get: ve,
        set: Me
      });
      Object.defineProperty(i, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ve) => Re.value = Ve
      });
    }
  if (d)
    for (const ge in d)
      Ld(d[ge], i, n, ge);
  if (m) {
    const ge = je(m) ? m.call(n) : m;
    Reflect.ownKeys(ge).forEach((X) => {
      t0(X, ge[X]);
    });
  }
  _ && ju(_, e, "c");
  function be(ge, X) {
    Le(X) ? X.forEach((ve) => ge(ve.bind(n))) : X && ge(X.bind(n));
  }
  if (be(f0, p), be(Rd, w), be(d0, A), be(h0, T), be(l0, M), be(c0, $), be(b0, te), be(g0, J), be(m0, ne), be(sc, F), be(Od, C), be(p0, xe), Le(P))
    if (P.length) {
      const ge = e.exposed || (e.exposed = {});
      P.forEach((X) => {
        Object.defineProperty(ge, X, {
          get: () => n[X],
          set: (ve) => n[X] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === jn && (e.render = R), de != null && (e.inheritAttrs = de), ue && (e.components = ue), ce && (e.directives = ce), xe && Id(e);
}
function S0(e, t, n = jn) {
  Le(e) && (e = Tl(e));
  for (const i in e) {
    const a = e[i];
    let l;
    tt(a) ? "default" in a ? l = _o(
      a.from || i,
      a.default,
      !0
    ) : l = _o(a.from || i) : l = _o(a), /* @__PURE__ */ Kt(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (f) => l.value = f
    }) : t[i] = l;
  }
}
function ju(e, t, n) {
  Hn(
    Le(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ld(e, t, n, i) {
  let a = i.includes(".") ? Td(n, i) : () => n[i];
  if (St(e)) {
    const l = t[e];
    je(l) && wi(a, l);
  } else if (je(e))
    wi(a, e.bind(n));
  else if (tt(e))
    if (Le(e))
      e.forEach((l) => Ld(l, t, n, i));
    else {
      const l = je(e.handler) ? e.handler.bind(n) : t[e.handler];
      je(l) && wi(a, l, e);
    }
}
function zd(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: f }
  } = e.appContext, d = l.get(t);
  let m;
  return d ? m = d : !a.length && !n && !i ? m = t : (m = {}, a.length && a.forEach(
    (y) => Fo(m, y, f, !0)
  ), Fo(m, t, f)), tt(t) && l.set(t, m), m;
}
function Fo(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && Fo(e, l, n, !0), a && a.forEach(
    (f) => Fo(e, f, n, !0)
  );
  for (const f in t)
    if (!(i && f === "expose")) {
      const d = N0[f] || n && n[f];
      e[f] = d ? d(e[f], t[f]) : t[f];
    }
  return e;
}
const N0 = {
  data: Vu,
  props: Hu,
  emits: Hu,
  // objects
  methods: Xi,
  computed: Xi,
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
  components: Xi,
  directives: Xi,
  // watch
  watch: k0,
  // provide / inject
  provide: Vu,
  inject: M0
};
function Vu(e, t) {
  return t ? e ? function() {
    return Wt(
      je(e) ? e.call(this, this) : e,
      je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function M0(e, t) {
  return Xi(Tl(e), Tl(t));
}
function Tl(e) {
  if (Le(e)) {
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
function Xi(e, t) {
  return e ? Wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hu(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Wt(
    /* @__PURE__ */ Object.create(null),
    $u(e),
    $u(t ?? {})
  ) : t;
}
function k0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Wt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Jt(e[i], t[i]);
  return n;
}
function $d() {
  return {
    app: null,
    config: {
      isNativeTag: Qf,
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
let P0 = 0;
function A0(e, t) {
  return function(i, a = null) {
    je(i) || (i = Wt({}, i)), a != null && !tt(a) && (a = null);
    const l = $d(), f = /* @__PURE__ */ new WeakSet(), d = [];
    let m = !1;
    const y = l.app = {
      _uid: P0++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: lb,
      get config() {
        return l.config;
      },
      set config(_) {
      },
      use(_, ...p) {
        return f.has(_) || (_ && je(_.install) ? (f.add(_), _.install(y, ...p)) : je(_) && (f.add(_), _(y, ...p))), y;
      },
      mixin(_) {
        return l.mixins.includes(_) || l.mixins.push(_), y;
      },
      component(_, p) {
        return p ? (l.components[_] = p, y) : l.components[_];
      },
      directive(_, p) {
        return p ? (l.directives[_] = p, y) : l.directives[_];
      },
      mount(_, p, w) {
        if (!m) {
          const A = y._ceVNode || Ge(i, a);
          return A.appContext = l, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(A, _, w), m = !0, y._container = _, _.__vue_app__ = y, cs(A.component);
        }
      },
      onUnmount(_) {
        d.push(_);
      },
      unmount() {
        m && (Hn(
          d,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(_, p) {
        return l.provides[_] = p, y;
      },
      runWithContext(_) {
        const p = Si;
        Si = y;
        try {
          return _();
        } finally {
          Si = p;
        }
      }
    };
    return y;
  };
}
let Si = null;
const C0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${en(t)}Modifiers`] || e[`${Wr(t)}Modifiers`];
function T0(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || rt;
  let a = n;
  const l = t.startsWith("update:"), f = l && C0(i, t.slice(7));
  f && (f.trim && (a = n.map((_) => St(_) ? _.trim() : _)), f.number && (a = n.map(mg)));
  let d, m = i[d = Zs(t)] || // also try camelCase event handler (#2249)
  i[d = Zs(en(t))];
  !m && l && (m = i[d = Zs(Wr(t))]), m && Hn(
    m,
    e,
    6,
    a
  );
  const y = i[d + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Hn(
      y,
      e,
      6,
      a
    );
  }
}
const I0 = /* @__PURE__ */ new WeakMap();
function jd(e, t, n = !1) {
  const i = n ? I0 : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let f = {}, d = !1;
  if (!je(e)) {
    const m = (y) => {
      const _ = jd(y, t, !0);
      _ && (d = !0, Wt(f, _));
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !d ? (tt(e) && i.set(e, null), null) : (Le(l) ? l.forEach((m) => f[m] = null) : Wt(f, l), tt(e) && i.set(e, f), f);
}
function ss(e, t) {
  return !e || !Zo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Wr(t)) || Ze(e, t));
}
function Uu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: f,
    attrs: d,
    emit: m,
    render: y,
    renderCache: _,
    props: p,
    data: w,
    setupState: A,
    ctx: T,
    inheritAttrs: M
  } = e, $ = Ro(e);
  let z, F;
  try {
    if (n.shapeFlag & 4) {
      const C = a || i, R = C;
      z = Ln(
        y.call(
          R,
          C,
          _,
          p,
          A,
          w,
          T
        )
      ), F = d;
    } else {
      const C = t;
      z = Ln(
        C.length > 1 ? C(
          p,
          { attrs: d, slots: f, emit: m }
        ) : C(
          p,
          null
        )
      ), F = t.props ? d : E0(d);
    }
  } catch (C) {
    sa.length = 0, as(C, e, 1), z = Ge(_r);
  }
  let I = z;
  if (F && M !== !1) {
    const C = Object.keys(F), { shapeFlag: R } = I;
    C.length && R & 7 && (l && C.some(Qo) && (F = D0(
      F,
      l
    )), I = Ai(I, F, !1, !0));
  }
  return n.dirs && (I = Ai(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && oc(I, n.transition), z = I, Ro($), z;
}
const E0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, D0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!Qo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function R0(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: f, children: d, patchFlag: m } = t, y = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return i ? Bu(i, f, y) : !!f;
    if (m & 8) {
      const _ = t.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        const w = _[p];
        if (Vd(f, i, w) && !ss(y, w))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === f ? !1 : i ? f ? Bu(i, f, y) : !0 : !!f;
  return !1;
}
function Bu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (Vd(t, e, l) && !ss(n, l))
      return !0;
  }
  return !1;
}
function Vd(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && tt(i) && tt(a) ? !ql(i, a) : i !== a;
}
function O0({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Hd = {}, Ud = () => Object.create(Hd), Bd = (e) => Object.getPrototypeOf(e) === Hd;
function F0(e, t, n, i = !1) {
  const a = {}, l = Ud();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gd(e, t, a, l);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Ug(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function L0(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: f }
  } = e, d = /* @__PURE__ */ Je(a), [m] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const _ = e.vnode.dynamicProps;
      for (let p = 0; p < _.length; p++) {
        let w = _[p];
        if (ss(e.emitsOptions, w))
          continue;
        const A = t[w];
        if (m)
          if (Ze(l, w))
            A !== l[w] && (l[w] = A, y = !0);
          else {
            const T = en(w);
            a[T] = Il(
              m,
              d,
              T,
              A,
              e,
              !1
            );
          }
        else
          A !== l[w] && (l[w] = A, y = !0);
      }
    }
  } else {
    Gd(e, t, a, l) && (y = !0);
    let _;
    for (const p in d)
      (!t || // for camelCase
      !Ze(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = Wr(p)) === p || !Ze(t, _))) && (m ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[p] = Il(
        m,
        d,
        p,
        void 0,
        e,
        !0
      )) : delete a[p]);
    if (l !== d)
      for (const p in l)
        (!t || !Ze(t, p)) && (delete l[p], y = !0);
  }
  y && er(e.attrs, "set", "");
}
function Gd(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let f = !1, d;
  if (t)
    for (let m in t) {
      if (ta(m))
        continue;
      const y = t[m];
      let _;
      a && Ze(a, _ = en(m)) ? !l || !l.includes(_) ? n[_] = y : (d || (d = {}))[_] = y : ss(e.emitsOptions, m) || (!(m in i) || y !== i[m]) && (i[m] = y, f = !0);
    }
  if (l) {
    const m = /* @__PURE__ */ Je(n), y = d || rt;
    for (let _ = 0; _ < l.length; _++) {
      const p = l[_];
      n[p] = Il(
        a,
        m,
        p,
        y[p],
        e,
        !Ze(y, p)
      );
    }
  }
  return f;
}
function Il(e, t, n, i, a, l) {
  const f = e[n];
  if (f != null) {
    const d = Ze(f, "default");
    if (d && i === void 0) {
      const m = f.default;
      if (f.type !== Function && !f.skipFactory && je(m)) {
        const { propsDefaults: y } = a;
        if (n in y)
          i = y[n];
        else {
          const _ = Na(a);
          i = y[n] = m.call(
            null,
            t
          ), _();
        }
      } else
        i = m;
      a.ce && a.ce._setProp(n, i);
    }
    f[
      0
      /* shouldCast */
    ] && (l && !d ? i = !1 : f[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Wr(n)) && (i = !0));
  }
  return i;
}
const z0 = /* @__PURE__ */ new WeakMap();
function Kd(e, t, n = !1) {
  const i = n ? z0 : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, f = {}, d = [];
  let m = !1;
  if (!je(e)) {
    const _ = (p) => {
      m = !0;
      const [w, A] = Kd(p, t, !0);
      Wt(f, w), A && d.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!l && !m)
    return tt(e) && i.set(e, vi), vi;
  if (Le(l))
    for (let _ = 0; _ < l.length; _++) {
      const p = en(l[_]);
      Gu(p) && (f[p] = rt);
    }
  else if (l)
    for (const _ in l) {
      const p = en(_);
      if (Gu(p)) {
        const w = l[_], A = f[p] = Le(w) || je(w) ? { type: w } : Wt({}, w), T = A.type;
        let M = !1, $ = !0;
        if (Le(T))
          for (let z = 0; z < T.length; ++z) {
            const F = T[z], I = je(F) && F.name;
            if (I === "Boolean") {
              M = !0;
              break;
            } else I === "String" && ($ = !1);
          }
        else
          M = je(T) && T.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = M, A[
          1
          /* shouldCastTrue */
        ] = $, (M || Ze(A, "default")) && d.push(p);
      }
    }
  const y = [f, d];
  return tt(e) && i.set(e, y), y;
}
function Gu(e) {
  return e[0] !== "$" && !ta(e);
}
const lc = (e) => e === "_" || e === "_ctx" || e === "$stable", cc = (e) => Le(e) ? e.map(Ln) : [Ln(e)], $0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ad((...a) => cc(t(...a)), n);
  return i._c = !1, i;
}, Wd = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (lc(a)) continue;
    const l = e[a];
    if (je(l))
      t[a] = $0(a, l, i);
    else if (l != null) {
      const f = cc(l);
      t[a] = () => f;
    }
  }
}, Yd = (e, t) => {
  const n = cc(t);
  e.slots.default = () => n;
}, qd = (e, t, n) => {
  for (const i in t)
    (n || !lc(i)) && (e[i] = t[i]);
}, j0 = (e, t, n) => {
  const i = e.slots = Ud();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (qd(i, t, n), n && id(i, "_", a, !0)) : Wd(t, i);
  } else t && Yd(e, t);
}, V0 = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, f = rt;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? l = !1 : qd(a, t, n) : (l = !t.$stable, Wd(t, a)), f = t;
  } else t && (Yd(e, t), f = { default: 1 });
  if (l)
    for (const d in a)
      !lc(d) && f[d] == null && delete a[d];
}, an = K0;
function H0(e) {
  return U0(e);
}
function U0(e, t) {
  const n = ns();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: f,
    createText: d,
    createComment: m,
    setText: y,
    setElementText: _,
    parentNode: p,
    nextSibling: w,
    setScopeId: A = jn,
    insertStaticContent: T
  } = e, M = (u, O, Z, le = null, E = null, B = null, W = void 0, U = null, ee = !!O.dynamicChildren) => {
    if (u === O)
      return;
    u && !Hi(u, O) && (le = Yt(u), Ve(u, E, B, !0), u = null), O.patchFlag === -2 && (ee = !1, O.dynamicChildren = null);
    const { type: q, ref: he, shapeFlag: V } = O;
    switch (q) {
      case ls:
        $(u, O, Z, le);
        break;
      case _r:
        z(u, O, Z, le);
        break;
      case xo:
        u == null && F(O, Z, le, W);
        break;
      case qe:
        ue(
          u,
          O,
          Z,
          le,
          E,
          B,
          W,
          U,
          ee
        );
        break;
      default:
        V & 1 ? R(
          u,
          O,
          Z,
          le,
          E,
          B,
          W,
          U,
          ee
        ) : V & 6 ? ce(
          u,
          O,
          Z,
          le,
          E,
          B,
          W,
          U,
          ee
        ) : (V & 64 || V & 128) && q.process(
          u,
          O,
          Z,
          le,
          E,
          B,
          W,
          U,
          ee,
          sn
        );
    }
    he != null && E ? ia(he, u && u.ref, B, O || u, !O) : he == null && u && u.ref != null && ia(u.ref, null, B, u, !0);
  }, $ = (u, O, Z, le) => {
    if (u == null)
      i(
        O.el = d(O.children),
        Z,
        le
      );
    else {
      const E = O.el = u.el;
      O.children !== u.children && y(E, O.children);
    }
  }, z = (u, O, Z, le) => {
    u == null ? i(
      O.el = m(O.children || ""),
      Z,
      le
    ) : O.el = u.el;
  }, F = (u, O, Z, le) => {
    [u.el, u.anchor] = T(
      u.children,
      O,
      Z,
      le,
      u.el,
      u.anchor
    );
  }, I = ({ el: u, anchor: O }, Z, le) => {
    let E;
    for (; u && u !== O; )
      E = w(u), i(u, Z, le), u = E;
    i(O, Z, le);
  }, C = ({ el: u, anchor: O }) => {
    let Z;
    for (; u && u !== O; )
      Z = w(u), a(u), u = Z;
    a(O);
  }, R = (u, O, Z, le, E, B, W, U, ee) => {
    if (O.type === "svg" ? W = "svg" : O.type === "math" && (W = "mathml"), u == null)
      J(
        O,
        Z,
        le,
        E,
        B,
        W,
        U,
        ee
      );
    else {
      const q = u.el && u.el._isVueCE ? u.el : null;
      try {
        q && q._beginPatch(), xe(
          u,
          O,
          E,
          B,
          W,
          U,
          ee
        );
      } finally {
        q && q._endPatch();
      }
    }
  }, J = (u, O, Z, le, E, B, W, U) => {
    let ee, q;
    const { props: he, shapeFlag: V, transition: _e, dirs: Ne } = u;
    if (ee = u.el = f(
      u.type,
      B,
      he && he.is,
      he
    ), V & 8 ? _(ee, u.children) : V & 16 && te(
      u.children,
      ee,
      null,
      le,
      E,
      al(u, B),
      W,
      U
    ), Ne && Pr(u, null, le, "created"), ne(ee, u, u.scopeId, W, le), he) {
      for (const Ee in he)
        Ee !== "value" && !ta(Ee) && l(ee, Ee, null, he[Ee], B, le);
      "value" in he && l(ee, "value", null, he.value, B), (q = he.onVnodeBeforeMount) && In(q, le, u);
    }
    Ne && Pr(u, null, le, "beforeMount");
    const Ae = B0(E, _e);
    Ae && _e.beforeEnter(ee), i(ee, O, Z), ((q = he && he.onVnodeMounted) || Ae || Ne) && an(() => {
      try {
        q && In(q, le, u), Ae && _e.enter(ee), Ne && Pr(u, null, le, "mounted");
      } finally {
      }
    }, E);
  }, ne = (u, O, Z, le, E) => {
    if (Z && A(u, Z), le)
      for (let B = 0; B < le.length; B++)
        A(u, le[B]);
    if (E) {
      let B = E.subTree;
      if (O === B || Qd(B.type) && (B.ssContent === O || B.ssFallback === O)) {
        const W = E.vnode;
        ne(
          u,
          W,
          W.scopeId,
          W.slotScopeIds,
          E.parent
        );
      }
    }
  }, te = (u, O, Z, le, E, B, W, U, ee = 0) => {
    for (let q = ee; q < u.length; q++) {
      const he = u[q] = U ? Qn(u[q]) : Ln(u[q]);
      M(
        null,
        he,
        O,
        Z,
        le,
        E,
        B,
        W,
        U
      );
    }
  }, xe = (u, O, Z, le, E, B, W) => {
    const U = O.el = u.el;
    let { patchFlag: ee, dynamicChildren: q, dirs: he } = O;
    ee |= u.patchFlag & 16;
    const V = u.props || rt, _e = O.props || rt;
    let Ne;
    if (Z && Ar(Z, !1), (Ne = _e.onVnodeBeforeUpdate) && In(Ne, Z, O, u), he && Pr(O, u, Z, "beforeUpdate"), Z && Ar(Z, !0), (V.innerHTML && _e.innerHTML == null || V.textContent && _e.textContent == null) && _(U, ""), q ? P(
      u.dynamicChildren,
      q,
      U,
      Z,
      le,
      al(O, E),
      B
    ) : W || X(
      u,
      O,
      U,
      null,
      Z,
      le,
      al(O, E),
      B,
      !1
    ), ee > 0) {
      if (ee & 16)
        de(U, V, _e, Z, E);
      else if (ee & 2 && V.class !== _e.class && l(U, "class", null, _e.class, E), ee & 4 && l(U, "style", V.style, _e.style, E), ee & 8) {
        const Ae = O.dynamicProps;
        for (let Ee = 0; Ee < Ae.length; Ee++) {
          const ze = Ae[Ee], Qe = V[ze], ct = _e[ze];
          (ct !== Qe || ze === "value") && l(U, ze, Qe, ct, E, Z);
        }
      }
      ee & 1 && u.children !== O.children && _(U, O.children);
    } else !W && q == null && de(U, V, _e, Z, E);
    ((Ne = _e.onVnodeUpdated) || he) && an(() => {
      Ne && In(Ne, Z, O, u), he && Pr(O, u, Z, "updated");
    }, le);
  }, P = (u, O, Z, le, E, B, W) => {
    for (let U = 0; U < O.length; U++) {
      const ee = u[U], q = O[U], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ee.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ee.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Hi(ee, q) || // - In the case of a component, it could contain anything.
        ee.shapeFlag & 198) ? p(ee.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Z
        )
      );
      M(
        ee,
        q,
        he,
        null,
        le,
        E,
        B,
        W,
        !0
      );
    }
  }, de = (u, O, Z, le, E) => {
    if (O !== Z) {
      if (O !== rt)
        for (const B in O)
          !ta(B) && !(B in Z) && l(
            u,
            B,
            O[B],
            null,
            E,
            le
          );
      for (const B in Z) {
        if (ta(B)) continue;
        const W = Z[B], U = O[B];
        W !== U && B !== "value" && l(u, B, U, W, E, le);
      }
      "value" in Z && l(u, "value", O.value, Z.value, E);
    }
  }, ue = (u, O, Z, le, E, B, W, U, ee) => {
    const q = O.el = u ? u.el : d(""), he = O.anchor = u ? u.anchor : d("");
    let { patchFlag: V, dynamicChildren: _e, slotScopeIds: Ne } = O;
    Ne && (U = U ? U.concat(Ne) : Ne), u == null ? (i(q, Z, le), i(he, Z, le), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      Z,
      he,
      E,
      B,
      W,
      U,
      ee
    )) : V > 0 && V & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === _e.length ? (P(
      u.dynamicChildren,
      _e,
      Z,
      E,
      B,
      W,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || E && O === E.subTree) && Xd(
      u,
      O,
      !0
      /* shallow */
    )) : X(
      u,
      O,
      Z,
      he,
      E,
      B,
      W,
      U,
      ee
    );
  }, ce = (u, O, Z, le, E, B, W, U, ee) => {
    O.slotScopeIds = U, u == null ? O.shapeFlag & 512 ? E.ctx.activate(
      O,
      Z,
      le,
      W,
      ee
    ) : j(
      O,
      Z,
      le,
      E,
      B,
      W,
      ee
    ) : se(u, O, ee);
  }, j = (u, O, Z, le, E, B, W) => {
    const U = u.component = eb(
      u,
      le,
      E
    );
    if (Ed(u) && (U.ctx.renderer = sn), nb(U, !1, W), U.asyncDep) {
      if (E && E.registerDep(U, be, W), !u.el) {
        const ee = U.subTree = Ge(_r);
        z(null, ee, O, Z), u.placeholder = ee.el;
      }
    } else
      be(
        U,
        u,
        O,
        Z,
        E,
        B,
        W
      );
  }, se = (u, O, Z) => {
    const le = O.component = u.component;
    if (R0(u, O, Z))
      if (le.asyncDep && !le.asyncResolved) {
        ge(le, O, Z);
        return;
      } else
        le.next = O, le.update();
    else
      O.el = u.el, le.vnode = O;
  }, be = (u, O, Z, le, E, B, W) => {
    const U = () => {
      if (u.isMounted) {
        let { next: V, bu: _e, u: Ne, parent: Ae, vnode: Ee } = u;
        {
          const Xe = Jd(u);
          if (Xe) {
            V && (V.el = Ee.el, ge(u, V, W)), Xe.asyncDep.then(() => {
              an(() => {
                u.isUnmounted || q();
              }, E);
            });
            return;
          }
        }
        let ze = V, Qe;
        Ar(u, !1), V ? (V.el = Ee.el, ge(u, V, W)) : V = Ee, _e && Qs(_e), (Qe = V.props && V.props.onVnodeBeforeUpdate) && In(Qe, Ae, V, Ee), Ar(u, !0);
        const ct = Uu(u), Ce = u.subTree;
        u.subTree = ct, M(
          Ce,
          ct,
          // parent may have changed if it's in a teleport
          p(Ce.el),
          // anchor may have changed if it's in a fragment
          Yt(Ce),
          u,
          E,
          B
        ), V.el = ct.el, ze === null && O0(u, ct.el), Ne && an(Ne, E), (Qe = V.props && V.props.onVnodeUpdated) && an(
          () => In(Qe, Ae, V, Ee),
          E
        );
      } else {
        let V;
        const { el: _e, props: Ne } = O, { bm: Ae, m: Ee, parent: ze, root: Qe, type: ct } = u, Ce = aa(O);
        Ar(u, !1), Ae && Qs(Ae), !Ce && (V = Ne && Ne.onVnodeBeforeMount) && In(V, ze, O), Ar(u, !0);
        {
          Qe.ce && Qe.ce._hasShadowRoot() && Qe.ce._injectChildStyle(
            ct,
            u.parent ? u.parent.type : void 0
          );
          const Xe = u.subTree = Uu(u);
          M(
            null,
            Xe,
            Z,
            le,
            u,
            E,
            B
          ), O.el = Xe.el;
        }
        if (Ee && an(Ee, E), !Ce && (V = Ne && Ne.onVnodeMounted)) {
          const Xe = O;
          an(
            () => In(V, ze, Xe),
            E
          );
        }
        (O.shapeFlag & 256 || ze && aa(ze.vnode) && ze.vnode.shapeFlag & 256) && u.a && an(u.a, E), u.isMounted = !0, O = Z = le = null;
      }
    };
    u.scope.on();
    const ee = u.effect = new ld(U);
    u.scope.off();
    const q = u.update = ee.run.bind(ee), he = u.job = ee.runIfDirty.bind(ee);
    he.i = u, he.id = u.uid, ee.scheduler = () => ic(he), Ar(u, !0), q();
  }, ge = (u, O, Z) => {
    O.component = u;
    const le = u.vnode.props;
    u.vnode = O, u.next = null, L0(u, O.props, le, Z), V0(u, O.children, Z), rr(), Ou(u), ir();
  }, X = (u, O, Z, le, E, B, W, U, ee = !1) => {
    const q = u && u.children, he = u ? u.shapeFlag : 0, V = O.children, { patchFlag: _e, shapeFlag: Ne } = O;
    if (_e > 0) {
      if (_e & 128) {
        Me(
          q,
          V,
          Z,
          le,
          E,
          B,
          W,
          U,
          ee
        );
        return;
      } else if (_e & 256) {
        ve(
          q,
          V,
          Z,
          le,
          E,
          B,
          W,
          U,
          ee
        );
        return;
      }
    }
    Ne & 8 ? (he & 16 && pt(q, E, B), V !== q && _(Z, V)) : he & 16 ? Ne & 16 ? Me(
      q,
      V,
      Z,
      le,
      E,
      B,
      W,
      U,
      ee
    ) : pt(q, E, B, !0) : (he & 8 && _(Z, ""), Ne & 16 && te(
      V,
      Z,
      le,
      E,
      B,
      W,
      U,
      ee
    ));
  }, ve = (u, O, Z, le, E, B, W, U, ee) => {
    u = u || vi, O = O || vi;
    const q = u.length, he = O.length, V = Math.min(q, he);
    let _e;
    for (_e = 0; _e < V; _e++) {
      const Ne = O[_e] = ee ? Qn(O[_e]) : Ln(O[_e]);
      M(
        u[_e],
        Ne,
        Z,
        null,
        E,
        B,
        W,
        U,
        ee
      );
    }
    q > he ? pt(
      u,
      E,
      B,
      !0,
      !1,
      V
    ) : te(
      O,
      Z,
      le,
      E,
      B,
      W,
      U,
      ee,
      V
    );
  }, Me = (u, O, Z, le, E, B, W, U, ee) => {
    let q = 0;
    const he = O.length;
    let V = u.length - 1, _e = he - 1;
    for (; q <= V && q <= _e; ) {
      const Ne = u[q], Ae = O[q] = ee ? Qn(O[q]) : Ln(O[q]);
      if (Hi(Ne, Ae))
        M(
          Ne,
          Ae,
          Z,
          null,
          E,
          B,
          W,
          U,
          ee
        );
      else
        break;
      q++;
    }
    for (; q <= V && q <= _e; ) {
      const Ne = u[V], Ae = O[_e] = ee ? Qn(O[_e]) : Ln(O[_e]);
      if (Hi(Ne, Ae))
        M(
          Ne,
          Ae,
          Z,
          null,
          E,
          B,
          W,
          U,
          ee
        );
      else
        break;
      V--, _e--;
    }
    if (q > V) {
      if (q <= _e) {
        const Ne = _e + 1, Ae = Ne < he ? O[Ne].el : le;
        for (; q <= _e; )
          M(
            null,
            O[q] = ee ? Qn(O[q]) : Ln(O[q]),
            Z,
            Ae,
            E,
            B,
            W,
            U,
            ee
          ), q++;
      }
    } else if (q > _e)
      for (; q <= V; )
        Ve(u[q], E, B, !0), q++;
    else {
      const Ne = q, Ae = q, Ee = /* @__PURE__ */ new Map();
      for (q = Ae; q <= _e; q++) {
        const $t = O[q] = ee ? Qn(O[q]) : Ln(O[q]);
        $t.key != null && Ee.set($t.key, q);
      }
      let ze, Qe = 0;
      const ct = _e - Ae + 1;
      let Ce = !1, Xe = 0;
      const ln = new Array(ct);
      for (q = 0; q < ct; q++) ln[q] = 0;
      for (q = Ne; q <= V; q++) {
        const $t = u[q];
        if (Qe >= ct) {
          Ve($t, E, B, !0);
          continue;
        }
        let cn;
        if ($t.key != null)
          cn = Ee.get($t.key);
        else
          for (ze = Ae; ze <= _e; ze++)
            if (ln[ze - Ae] === 0 && Hi($t, O[ze])) {
              cn = ze;
              break;
            }
        cn === void 0 ? Ve($t, E, B, !0) : (ln[cn - Ae] = q + 1, cn >= Xe ? Xe = cn : Ce = !0, M(
          $t,
          O[cn],
          Z,
          null,
          E,
          B,
          W,
          U,
          ee
        ), Qe++);
      }
      const bt = Ce ? G0(ln) : vi;
      for (ze = bt.length - 1, q = ct - 1; q >= 0; q--) {
        const $t = Ae + q, cn = O[$t], Ma = O[$t + 1], Ii = $t + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ma.el || Zd(Ma)
        ) : le;
        ln[q] === 0 ? M(
          null,
          cn,
          Z,
          Ii,
          E,
          B,
          W,
          U,
          ee
        ) : Ce && (ze < 0 || q !== bt[ze] ? Re(cn, Z, Ii, 2) : ze--);
      }
    }
  }, Re = (u, O, Z, le, E = null) => {
    const { el: B, type: W, transition: U, children: ee, shapeFlag: q } = u;
    if (q & 6) {
      Re(u.component.subTree, O, Z, le);
      return;
    }
    if (q & 128) {
      u.suspense.move(O, Z, le);
      return;
    }
    if (q & 64) {
      W.move(u, O, Z, sn);
      return;
    }
    if (W === qe) {
      i(B, O, Z);
      for (let V = 0; V < ee.length; V++)
        Re(ee[V], O, Z, le);
      i(u.anchor, O, Z);
      return;
    }
    if (W === xo) {
      I(u, O, Z);
      return;
    }
    if (le !== 2 && q & 1 && U)
      if (le === 0)
        U.beforeEnter(B), i(B, O, Z), an(() => U.enter(B), E);
      else {
        const { leave: V, delayLeave: _e, afterLeave: Ne } = U, Ae = () => {
          u.ctx.isUnmounted ? a(B) : i(B, O, Z);
        }, Ee = () => {
          B._isLeaving && B[s0](
            !0
            /* cancelled */
          ), V(B, () => {
            Ae(), Ne && Ne();
          });
        };
        _e ? _e(B, Ae, Ee) : Ee();
      }
    else
      i(B, O, Z);
  }, Ve = (u, O, Z, le = !1, E = !1) => {
    const {
      type: B,
      props: W,
      ref: U,
      children: ee,
      dynamicChildren: q,
      shapeFlag: he,
      patchFlag: V,
      dirs: _e,
      cacheIndex: Ne,
      memo: Ae
    } = u;
    if (V === -2 && (E = !1), U != null && (rr(), ia(U, null, Z, u, !0), ir()), Ne != null && (O.renderCache[Ne] = void 0), he & 256) {
      O.ctx.deactivate(u);
      return;
    }
    const Ee = he & 1 && _e, ze = !aa(u);
    let Qe;
    if (ze && (Qe = W && W.onVnodeBeforeUnmount) && In(Qe, O, u), he & 6)
      wt(u.component, Z, le);
    else {
      if (he & 128) {
        u.suspense.unmount(Z, le);
        return;
      }
      Ee && Pr(u, null, O, "beforeUnmount"), he & 64 ? u.type.remove(
        u,
        O,
        Z,
        sn,
        le
      ) : q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== qe || V > 0 && V & 64) ? pt(
        q,
        O,
        Z,
        !1,
        !0
      ) : (B === qe && V & 384 || !E && he & 16) && pt(ee, O, Z), le && ot(u);
    }
    const ct = Ae != null && Ne == null;
    (ze && (Qe = W && W.onVnodeUnmounted) || Ee || ct) && an(() => {
      Qe && In(Qe, O, u), Ee && Pr(u, null, O, "unmounted"), ct && (u.el = null);
    }, Z);
  }, ot = (u) => {
    const { type: O, el: Z, anchor: le, transition: E } = u;
    if (O === qe) {
      Nt(Z, le);
      return;
    }
    if (O === xo) {
      C(u);
      return;
    }
    const B = () => {
      a(Z), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (u.shapeFlag & 1 && E && !E.persisted) {
      const { leave: W, delayLeave: U } = E, ee = () => W(Z, B);
      U ? U(u.el, B, ee) : ee();
    } else
      B();
  }, Nt = (u, O) => {
    let Z;
    for (; u !== O; )
      Z = w(u), a(u), u = Z;
    a(O);
  }, wt = (u, O, Z) => {
    const { bum: le, scope: E, job: B, subTree: W, um: U, m: ee, a: q } = u;
    Ku(ee), Ku(q), le && Qs(le), E.stop(), B && (B.flags |= 8, Ve(W, u, O, Z)), U && an(U, O), an(() => {
      u.isUnmounted = !0;
    }, O);
  }, pt = (u, O, Z, le = !1, E = !1, B = 0) => {
    for (let W = B; W < u.length; W++)
      Ve(u[W], O, Z, le, E);
  }, Yt = (u) => {
    if (u.shapeFlag & 6)
      return Yt(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const O = w(u.anchor || u.el), Z = O && O[a0];
    return Z ? w(Z) : O;
  };
  let qt = !1;
  const gn = (u, O, Z) => {
    let le;
    u == null ? O._vnode && (Ve(O._vnode, null, null, !0), le = O._vnode.component) : M(
      O._vnode || null,
      u,
      O,
      null,
      null,
      null,
      Z
    ), O._vnode = u, qt || (qt = !0, Ou(le), Md(), qt = !1);
  }, sn = {
    p: M,
    um: Ve,
    m: Re,
    r: ot,
    mt: j,
    mc: te,
    pc: X,
    pbc: P,
    n: Yt,
    o: e
  };
  return {
    render: gn,
    hydrate: void 0,
    createApp: A0(gn)
  };
}
function al({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ar({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function B0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xd(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Le(i) && Le(a))
    for (let l = 0; l < i.length; l++) {
      const f = i[l];
      let d = a[l];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[l] = Qn(a[l]), d.el = f.el), !n && d.patchFlag !== -2 && Xd(f, d)), d.type === ls && (d.patchFlag === -1 && (d = a[l] = Qn(d)), d.el = f.el), d.type === _r && !d.el && (d.el = f.el);
    }
}
function G0(e) {
  const t = e.slice(), n = [0];
  let i, a, l, f, d;
  const m = e.length;
  for (i = 0; i < m; i++) {
    const y = e[i];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, f = n.length - 1; l < f; )
        d = l + f >> 1, e[n[d]] < y ? l = d + 1 : f = d;
      y < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, f = n[l - 1]; l-- > 0; )
    n[l] = f, f = t[f];
  return n;
}
function Jd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jd(t);
}
function Ku(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Zd(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Zd(t.subTree) : null;
}
const Qd = (e) => e.__isSuspense;
function K0(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : e0(e);
}
const qe = /* @__PURE__ */ Symbol.for("v-fgt"), ls = /* @__PURE__ */ Symbol.for("v-txt"), _r = /* @__PURE__ */ Symbol.for("v-cmt"), xo = /* @__PURE__ */ Symbol.for("v-stc"), sa = [];
let mn = null;
function Se(e = !1) {
  sa.push(mn = e ? null : []);
}
function W0() {
  sa.pop(), mn = sa[sa.length - 1] || null;
}
let ga = 1;
function Wu(e, t = !1) {
  ga += e, e < 0 && mn && t && (mn.hasOnce = !0);
}
function eh(e) {
  return e.dynamicChildren = ga > 0 ? mn || vi : null, W0(), ga > 0 && mn && mn.push(e), e;
}
function Pe(e, t, n, i, a, l) {
  return eh(
    ae(
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
function Ti(e, t, n, i, a) {
  return eh(
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
function th(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Hi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nh = ({ key: e }) => e ?? null, wo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? St(e) || /* @__PURE__ */ Kt(e) || je(e) ? { i: pn, r: e, k: t, f: !!n } : e : null);
function ae(e, t = null, n = null, i = 0, a = null, l = e === qe ? 0 : 1, f = !1, d = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nh(t),
    ref: t && wo(t),
    scopeId: Pd,
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
  return d ? (uc(m, n), l & 128 && e.normalize(m)) : n && (m.shapeFlag |= St(n) ? 8 : 16), ga > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  mn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && mn.push(m), m;
}
const Ge = Y0;
function Y0(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === Fd) && (e = _r), th(e)) {
    const d = Ai(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && uc(d, n), ga > 0 && !l && mn && (d.shapeFlag & 6 ? mn[mn.indexOf(e)] = d : mn.push(d)), d.patchFlag = -2, d;
  }
  if (sb(e) && (e = e.__vccOpts), t) {
    t = q0(t);
    let { class: d, style: m } = t;
    d && !St(d) && (t.class = ht(d)), tt(m) && (/* @__PURE__ */ nc(m) && !Le(m) && (m = Wt({}, m)), t.style = kt(m));
  }
  const f = St(e) ? 1 : Qd(e) ? 128 : o0(e) ? 64 : tt(e) ? 4 : je(e) ? 2 : 0;
  return ae(
    e,
    t,
    n,
    i,
    a,
    f,
    l,
    !0
  );
}
function q0(e) {
  return e ? /* @__PURE__ */ nc(e) || Bd(e) ? Wt({}, e) : e : null;
}
function Ai(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: f, children: d, transition: m } = e, y = t ? gr(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && nh(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Le(l) ? l.concat(wo(t)) : [l, wo(t)] : wo(t)
    ) : l,
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
    patchFlag: t && e.type !== qe ? f === -1 ? 16 : f | 16 : f,
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
    ssContent: e.ssContent && Ai(e.ssContent),
    ssFallback: e.ssFallback && Ai(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && i && oc(
    _,
    m.clone(_)
  ), _;
}
function X0(e = " ", t = 0) {
  return Ge(ls, null, e, t);
}
function J0(e, t) {
  const n = Ge(xo, null, e);
  return n.staticCount = t, n;
}
function It(e = "", t = !1) {
  return t ? (Se(), Ti(_r, null, e)) : Ge(_r, null, e);
}
function Ln(e) {
  return e == null || typeof e == "boolean" ? Ge(_r) : Le(e) ? Ge(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : th(e) ? Qn(e) : Ge(ls, null, String(e));
}
function Qn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ai(e);
}
function uc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Le(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), uc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Bd(t) ? t._ctx = pn : a === 3 && pn && (pn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else je(t) ? (t = { default: t, _ctx: pn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [X0(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = ht([t.class, i.class]));
      else if (a === "style")
        t.style = kt([t.style, i.style]);
      else if (Zo(a)) {
        const l = t[a], f = i[a];
        f && l !== f && !(Le(l) && l.includes(f)) ? t[a] = l ? [].concat(l, f) : f : f == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qo(a) && (t[a] = f);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function In(e, t, n, i = null) {
  Hn(e, t, 7, [
    n,
    i
  ]);
}
const Z0 = $d();
let Q0 = 0;
function eb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Z0, l = {
    uid: Q0++,
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
    scope: new Sg(
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
    propsOptions: Kd(i, a),
    emitsOptions: jd(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: rt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: rt,
    data: rt,
    props: rt,
    attrs: rt,
    slots: rt,
    refs: rt,
    setupState: rt,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = T0.bind(null, l), e.ce && e.ce(l), l;
}
let Gt = null;
const tb = () => Gt || pn;
let Lo, El;
{
  const e = ns(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((f) => f(l)) : a[0](l);
    };
  };
  Lo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Gt = n
  ), El = t(
    "__VUE_SSR_SETTERS__",
    (n) => ba = n
  );
}
const Na = (e) => {
  const t = Gt;
  return Lo(e), e.scope.on(), () => {
    e.scope.off(), Lo(t);
  };
}, Yu = () => {
  Gt && Gt.scope.off(), Lo(null);
};
function rh(e) {
  return e.vnode.shapeFlag & 4;
}
let ba = !1;
function nb(e, t = !1, n = !1) {
  t && El(t);
  const { props: i, children: a } = e.vnode, l = rh(e);
  F0(e, i, l, t), j0(e, a, n || t);
  const f = l ? rb(e, t) : void 0;
  return t && El(!1), f;
}
function rb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, x0);
  const { setup: i } = n;
  if (i) {
    rr();
    const a = e.setupContext = i.length > 1 ? ab(e) : null, l = Na(e), f = Sa(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = td(f);
    if (ir(), l(), (d || e.sp) && !aa(e) && Id(e), d) {
      if (f.then(Yu, Yu), t)
        return f.then((m) => {
          qu(e, m);
        }).catch((m) => {
          as(m, e, 0);
        });
      e.asyncDep = f;
    } else
      qu(e, f);
  } else
    ih(e);
}
function qu(e, t, n) {
  je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : tt(t) && (e.setupState = wd(t)), ih(e);
}
function ih(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || jn);
  {
    const a = Na(e);
    rr();
    try {
      w0(e);
    } finally {
      ir(), a();
    }
  }
}
const ib = {
  get(e, t) {
    return Bt(e, "get", ""), e[t];
  }
};
function ab(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ib),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wd(Bg(e.exposed)), {
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
function ob(e, t = !0) {
  return je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sb(e) {
  return je(e) && "__vccOpts" in e;
}
const xt = (e, t) => /* @__PURE__ */ qg(e, t, ba), lb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dl;
const Xu = typeof window < "u" && window.trustedTypes;
if (Xu)
  try {
    Dl = /* @__PURE__ */ Xu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ah = Dl ? (e) => Dl.createHTML(e) : (e) => e, cb = "http://www.w3.org/2000/svg", ub = "http://www.w3.org/1998/Math/MathML", Jn = typeof document < "u" ? document : null, Ju = Jn && /* @__PURE__ */ Jn.createElement("template"), fb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Jn.createElementNS(cb, e) : t === "mathml" ? Jn.createElementNS(ub, e) : n ? Jn.createElement(e, { is: n }) : Jn.createElement(e);
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
    const f = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      Ju.innerHTML = ah(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Ju.content;
      if (i === "svg" || i === "mathml") {
        const m = d.firstChild;
        for (; m.firstChild; )
          d.appendChild(m.firstChild);
        d.removeChild(m);
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
}, db = /* @__PURE__ */ Symbol("_vtc");
function hb(e, t, n) {
  const i = e[db];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zo = /* @__PURE__ */ Symbol("_vod"), oh = /* @__PURE__ */ Symbol("_vsh"), fc = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[zo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ui(e, t);
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
  e.style.display = t ? e[zo] : "none", e[oh] = !t;
}
const pb = /* @__PURE__ */ Symbol(""), mb = /(?:^|;)\s*display\s*:/;
function gb(e, t, n) {
  const i = e.style, a = St(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (St(t))
        for (const f of t.split(";")) {
          const d = f.slice(0, f.indexOf(":")).trim();
          n[d] == null && So(i, d, "");
        }
      else
        for (const f in t)
          n[f] == null && So(i, f, "");
    for (const f in n)
      f === "display" && (l = !0), So(i, f, n[f]);
  } else if (a) {
    if (t !== n) {
      const f = i[pb];
      f && (n += ";" + f), i.cssText = n, l = mb.test(n);
    }
  } else t && e.removeAttribute("style");
  zo in e && (e[zo] = l ? i.display : "", e[oh] && (i.display = "none"));
}
const Zu = /\s*!important$/;
function So(e, t, n) {
  if (Le(n))
    n.forEach((i) => So(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = bb(e, t);
    Zu.test(n) ? e.setProperty(
      Wr(i),
      n.replace(Zu, ""),
      "important"
    ) : e[i] = n;
  }
}
const Qu = ["Webkit", "Moz", "ms"], ol = {};
function bb(e, t) {
  const n = ol[t];
  if (n)
    return n;
  let i = en(t);
  if (i !== "filter" && i in e)
    return ol[t] = i;
  i = ts(i);
  for (let a = 0; a < Qu.length; a++) {
    const l = Qu[a] + i;
    if (l in e)
      return ol[t] = l;
  }
  return t;
}
const ef = "http://www.w3.org/1999/xlink";
function tf(e, t, n, i, a, l = xg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ef, t.slice(6, t.length)) : e.setAttributeNS(ef, t, n) : n == null || l && !ad(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Vn(n) ? String(n) : n
  );
}
function nf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ah(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const d = l === "OPTION" ? e.getAttribute("value") || "" : e.value, m = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== m || !("_value" in e)) && (e.value = m), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = ad(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  f && e.removeAttribute(a || t);
}
function yb(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function vb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const rf = /* @__PURE__ */ Symbol("_vei");
function _b(e, t, n, i, a = null) {
  const l = e[rf] || (e[rf] = {}), f = l[t];
  if (i && f)
    f.value = i;
  else {
    const [d, m] = xb(t);
    if (i) {
      const y = l[t] = Nb(
        i,
        a
      );
      yb(e, d, y, m);
    } else f && (vb(e, d, f, m), l[t] = void 0);
  }
}
const af = /(?:Once|Passive|Capture)$/;
function xb(e) {
  let t;
  if (af.test(e)) {
    t = {};
    let i;
    for (; i = e.match(af); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Wr(e.slice(2)), t];
}
let sl = 0;
const wb = /* @__PURE__ */ Promise.resolve(), Sb = () => sl || (wb.then(() => sl = 0), sl = Date.now());
function Nb(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Hn(
      Mb(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Sb(), n;
}
function Mb(e, t) {
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
const of = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kb = (e, t, n, i, a, l) => {
  const f = a === "svg";
  t === "class" ? hb(e, i, f) : t === "style" ? gb(e, n, i) : Zo(t) ? Qo(t) || _b(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pb(e, t, i, f)) ? (nf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tf(e, t, i, f, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ab(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !St(i))) ? nf(e, en(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), tf(e, t, i, f));
};
function Pb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && of(t) && je(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return of(t) && St(n) ? !1 : t in e;
}
function Ab(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = en(t);
  return Array.isArray(n) ? n.some((a) => en(a) === i) : Object.keys(n).some((a) => en(a) === i);
}
const Cb = ["ctrl", "shift", "alt", "meta"], Tb = {
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
  exact: (e, t) => Cb.some((n) => e[`${n}Key`] && !t.includes(n))
}, sh = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let f = 0; f < t.length; f++) {
      const d = Tb[t[f]];
      if (d && d(a, t)) return;
    }
    return e(a, ...l);
  }));
}, Ib = /* @__PURE__ */ Wt({ patchProp: kb }, fb);
let sf;
function Eb() {
  return sf || (sf = H0(Ib));
}
const Db = ((...e) => {
  const t = Eb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ob(i);
    if (!a) return;
    const l = t._component;
    !je(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = n(a, !1, Rb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, t;
});
function Rb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ob(e) {
  return St(e) ? document.querySelector(e) : e;
}
const mt = Math.PI / 180, lh = Math.PI * 2, Fb = 2048;
function nt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function xr(e, t, n) {
  return { x: e, y: t, z: n };
}
function $o(e, t) {
  return xr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function yi(e, t) {
  return xr(e.x * t, e.y * t, e.z * t);
}
function No(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function lf(e, t) {
  return xr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ji(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return xr(e.x / t, e.y / t, e.z / t);
}
function Lb(e, t) {
  const n = Number(e || 0) * mt, i = Number(t || 0) * mt, a = Math.cos(i);
  return xr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Mo(e, t, n = 0) {
  const i = Lb(e, t);
  let a = xr(0, 1, 0);
  Math.abs(No(i, a)) > 0.999 && (a = xr(0, 0, 1));
  let l = Ji(lf(a, i)), f = Ji(lf(i, l));
  const d = Number(n || 0) * mt, m = Math.cos(d), y = Math.sin(d), _ = $o(yi(l, m), yi(f, y)), p = $o(yi(l, -y), yi(f, m));
  return l = Ji(_), f = Ji(p), { fwd: i, right: l, up: f };
}
function zb(e, t) {
  const n = (Number(e || 0) - 0.5) * lh, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return xr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function cf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), f = Math.max(512, Fb), d = Math.min(1, f / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function uf(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function ll(e, t, n) {
  const i = uf(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = uf(e, e.FRAGMENT_SHADER, n);
  } catch (f) {
    throw e.deleteShader(i), f;
  }
  const l = e.createProgram();
  if (e.attachShader(l, i), e.attachShader(l, a), e.linkProgram(l), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(l, e.LINK_STATUS)) {
    const f = e.getProgramInfoLog(l) || "program link failed";
    throw e.deleteProgram(l), new Error(f);
  }
  return l;
}
const cl = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, $b = `#version 300 es
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
}`, jb = `#version 300 es
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
}`, Vb = `#version 300 es
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
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(nt(i, 1, 179) * mt * 0.5) * (n / Math.max(t, 1))) / mt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: nt(i, 1, 179),
    vFovDeg: nt(a, 0.1, 179)
  };
}
function Hb(e) {
  const t = Mo(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(nt(Number(e.hFovDeg), 0.1, 179) * 0.5 * mt),
    tanY: Math.tan(nt(Number(e.vFovDeg), 0.1, 179) * 0.5 * mt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: nt(Number(e.opacity ?? 1), 0, 1)
  };
}
function Ub(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, f = null, d = null, m = null, y = null, _ = null, p = null, w = null, A = !1, T = cf(1, 1, 1), M = null, $ = null, z = null, F = null, I = null;
  const C = /* @__PURE__ */ new Map();
  let R = {
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
  }, ne = {
    paint: !1,
    mask: !1
  };
  function te(E = null, B = null) {
    const W = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, W), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, E ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, B ?? n.CLAMP_TO_EDGE), W;
  }
  function xe() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = ll(n, cl, $b), a = ll(n, cl, jb), l = ll(n, cl, Vb), M = {
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
      }, $ = {
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
      ]), n.STATIC_DRAW), d = te(n.REPEAT, n.CLAMP_TO_EDGE), m = te(n.REPEAT, n.CLAMP_TO_EDGE), y = te(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function P() {
    var E;
    if (n) {
      try {
        f && n.deleteBuffer(f), d && n.deleteTexture(d), m && n.deleteTexture(m), y && n.deleteTexture(y), C.forEach((B) => {
          Me(B);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (E = n.getExtension("WEBGL_lose_context")) == null || E.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, f = null, d = null, m = null, y = null, C.clear(), _ = null, p = null, w = null, J = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, ne = {
        paint: !1,
        mask: !1
      }, F = null, I = null, A = !1;
    }
  }
  function de(E, B, W = 1) {
    T = cf(E, B, W), (t.width !== T.width || t.height !== T.height) && (t.width = T.width, t.height = T.height);
  }
  function ue(E) {
    E === "background" ? _ = null : E === "paint" ? p = null : w = null, J[E] && (J[E].width = 0, J[E].height = 0);
  }
  function ce() {
    ne.paint = !1, ne.mask = !1;
  }
  function j(E) {
    ce(), E === "paint" ? ne.paint = !0 : E === "mask" && (ne.mask = !0);
  }
  function se(E, B, W = [], U = { width: 0, height: 0 }, ee = !1) {
    if (!n || !E || !B) return !1;
    const q = Number(B.width || B.videoWidth || B.naturalWidth || 0), he = Number(B.height || B.videoHeight || B.naturalHeight || 0);
    if (!(q > 1) || !(he > 1)) return !1;
    const V = Array.isArray(W) ? W.filter((_e) => _e && _e.w > 0 && _e.h > 0) : [];
    if (!V.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ee ? 1 : 0), U.width !== q || U.height !== he)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, B), U.width = q, U.height = he, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (F || (F = document.createElement("canvas"), I = F.getContext("2d")), !I)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, B), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const _e of V) {
      const Ne = Math.max(0, Math.floor(Number(_e.x || 0))), Ae = Math.max(0, Math.floor(Number(_e.y || 0))), Ee = Math.min(q - Ne, Math.ceil(Number(_e.w || 0))), ze = Math.min(he - Ae, Math.ceil(Number(_e.h || 0)));
      if (!(Ee <= 0 || ze <= 0)) {
        if (F.width !== Ee || F.height !== ze) {
          if (F.width = Ee, F.height = ze, I = F.getContext("2d"), !I)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, B), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          I.clearRect(0, 0, Ee, ze);
        I.drawImage(B, Ne, Ae, Ee, ze, 0, 0, Ee, ze), n.texSubImage2D(n.TEXTURE_2D, 0, Ne, Ae, n.RGBA, n.UNSIGNED_BYTE, F);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function be(E, B, W, U, ee = null, q = !1) {
    if (!xe()) return !1;
    if (!W)
      return ue(E), !1;
    const he = String(U ?? ""), V = E === "background" ? _ : E === "paint" ? p : w, _e = J[E], Ne = Number(W.width || W.videoWidth || W.naturalWidth || 0), Ae = Number(W.height || W.videoHeight || W.naturalHeight || 0), Ee = _e.width !== Ne || _e.height !== Ae;
    if (V === he && !Ee && !(Array.isArray(ee) && ee.length)) return !0;
    if (!(Ne > 0) || !(Ae > 0))
      return ue(E), !1;
    if (n.bindTexture(n.TEXTURE_2D, B), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, q ? 1 : 0), !(Array.isArray(ee) && ee.length ? se(B, W, ee, _e, q) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, W), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ue(E), !1;
      _e.width = Ne, _e.height = Ae;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), E === "background" ? _ = he : E === "paint" ? p = he : w = he, !0;
  }
  function ge(E, B) {
    return be("background", d, E, B, null, !0);
  }
  function X(E, B, W = null) {
    return be("paint", m, E, B, W, !0);
  }
  function ve(E, B, W = null) {
    return be("mask", y, E, B, W, !0);
  }
  function Me(E) {
    E != null && E.texture && n && n.deleteTexture(E.texture);
  }
  function Re(E = /* @__PURE__ */ new Set()) {
    C.forEach((B, W) => {
      E.has(W) || (Me(B), C.delete(W));
    });
  }
  function Ve(E) {
    if (!n || !(E != null && E.assetId) || !(E != null && E.source)) return null;
    const B = String(E.assetId), W = String(E.revision ?? ""), U = E.source, ee = Number(U.width || U.naturalWidth || U.videoWidth || 0), q = Number(U.height || U.naturalHeight || U.videoHeight || 0);
    if (ee <= 0 || q <= 0) return null;
    let he = C.get(B);
    if (he || (he = {
      texture: te(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, C.set(B, he)), he.revision !== W || he.width !== ee || he.height !== q) {
      if (n.bindTexture(n.TEXTURE_2D, he.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, U), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), he.revision = W, he.width = ee, he.height = q;
    }
    return he.texture;
  }
  function ot(E = []) {
    if (!xe()) return !1;
    const B = /* @__PURE__ */ new Set();
    return E.forEach((W) => {
      !(W != null && W.assetId) || !(W != null && W.source) || (B.add(String(W.assetId)), Ve(W));
    }), Re(B), !0;
  }
  function Nt() {
    return xe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function wt(E) {
    n.useProgram(E), n.bindBuffer(n.ARRAY_BUFFER, f), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function pt(E, B = {}) {
    if (!_) return null;
    n.disable(n.BLEND), wt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(M.background, 0), n.uniform2f(M.viewport, Math.max(1, T.width), Math.max(1, T.height)), n.uniform1i(M.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const W = Bi(E, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(M.yaw, Number(W.yawDeg || 0) * mt), n.uniform1f(M.pitch, Number(W.pitchDeg || 0) * mt), n.uniform1f(M.roll, Number(W.rollDeg || 0) * mt), n.uniform1f(M.hFov, nt(Number(W.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(M.vFov, nt(Number(W.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f(M.opacity, nt(Number(B.backgroundOpacity ?? 1), 0, 1));
    const U = Number((E == null ? void 0 : E.coverageDeg) || (B == null ? void 0 : B.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(M.coverage, U), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Yt(E, B = {}) {
    const W = ne.paint && p != null, U = ne.mask && w != null;
    if (!W && !U) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), wt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, m), n.uniform1i($.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i($.mask, 1), n.uniform1i($.mode, (E == null ? void 0 : E.mode) === "unwrap" ? 0 : (E == null ? void 0 : E.mode) === "cutout" ? 2 : 1);
    const ee = Bi(E, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f($.yaw, Number(ee.yawDeg || 0) * mt), n.uniform1f($.pitch, Number(ee.pitchDeg || 0) * mt), n.uniform1f($.roll, Number(ee.rollDeg || 0) * mt), n.uniform1f($.hFov, nt(Number(ee.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f($.vFov, nt(Number(ee.vFovDeg || 60), 0.1, 179) * mt), n.uniform1f($.paintOpacity, nt(Number(B.paintOpacity ?? 1), 0, 1)), n.uniform1f($.maskOpacity, nt(Number(B.maskOpacity ?? 0.55), 0, 1)), n.uniform1i($.hasPaint, W ? 1 : 0), n.uniform1i($.hasMask, U ? 1 : 0), n.uniform1i($.showMaskTint, B.showMaskTint === !1 ? 0 : 1), n.uniform3f($.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function qt(E, B) {
    var _e, Ne, Ae, Ee, ze, Qe, ct;
    const W = Array.isArray(E == null ? void 0 : E.objects) ? E.objects : [];
    if (!W.length) {
      ce(), Re(/* @__PURE__ */ new Set());
      return;
    }
    const U = (B == null ? void 0 : B.mode) === "unwrap" ? 0 : (B == null ? void 0 : B.mode) === "cutout" ? 2 : 1, ee = Bi(B, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, q = Mo(ee.yawDeg, ee.pitchDeg, ee.rollDeg), he = W.slice().sort((Ce, Xe) => Number((Ce == null ? void 0 : Ce.zIndex) || 0) - Number((Xe == null ? void 0 : Xe.zIndex) || 0)), V = /* @__PURE__ */ new Set();
    ce();
    for (const Ce of he)
      if (!(!Ce || Ce.visible === !1)) {
        if (Ce.type === "sticker") {
          const Xe = String(((_e = Ce == null ? void 0 : Ce.params) == null ? void 0 : _e.assetId) || (Ce == null ? void 0 : Ce.id) || "");
          if (!Xe) continue;
          V.add(Xe);
          const ln = Ve({
            assetId: Xe,
            source: Ce.source,
            revision: Ce.revision
          });
          if (!ln) continue;
          const bt = Hb({
            yawDeg: ((Ne = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ne.yawDeg) || 0,
            pitchDeg: ((Ae = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ae.pitchDeg) || 0,
            rollDeg: ((Ee = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Ee.rollDeg) || 0,
            hFovDeg: ((ze = Ce == null ? void 0 : Ce.transform) == null ? void 0 : ze.hFovDeg) || 30,
            vFovDeg: ((Qe = Ce == null ? void 0 : Ce.transform) == null ? void 0 : Qe.vFovDeg) || 30,
            crop: ((ct = Ce == null ? void 0 : Ce.params) == null ? void 0 : ct.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ce == null ? void 0 : Ce.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), wt(l), n.uniform1i(z.texture, 0), n.uniform1i(z.mode, U), n.uniform3f(z.viewRight, q.right.x, q.right.y, q.right.z), n.uniform3f(z.viewUp, q.up.x, q.up.y, q.up.z), n.uniform3f(z.viewFwd, q.fwd.x, q.fwd.y, q.fwd.z), n.uniform1f(z.viewHfov, nt(Number(ee.hFovDeg || 90), 0.1, 179) * mt), n.uniform1f(z.viewVfov, nt(Number(ee.vFovDeg || 60), 0.1, 179) * mt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, ln), n.uniform3f(z.stickerRight, bt.right.x, bt.right.y, bt.right.z), n.uniform3f(z.stickerUp, bt.up.x, bt.up.y, bt.up.z), n.uniform3f(z.stickerFwd, bt.fwd.x, bt.fwd.y, bt.fwd.z), n.uniform1f(z.stickerTanX, Math.max(1e-6, bt.tanX)), n.uniform1f(z.stickerTanY, Math.max(1e-6, bt.tanY)), n.uniform4f(
            z.crop,
            nt(Number(bt.crop.x0 ?? 0), 0, 1),
            nt(Number(bt.crop.y0 ?? 0), 0, 1),
            nt(Number(bt.crop.x1 ?? 1), 0, 1),
            nt(Number(bt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(z.opacity, bt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ce.type === "paint" || Ce.type === "raster") {
          if (!X(Ce.source, Ce.revision ?? "")) continue;
          j("paint"), Yt(B, {
            paintOpacity: Number(Ce.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Ce.type === "mask") {
          if (!ve(Ce.source, Ce.revision ?? "")) continue;
          j("mask"), Yt(B, {
            paintOpacity: 0,
            maskOpacity: Number(Ce.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Re(V), ce();
  }
  function gn(E) {
    return !Nt() || !_ ? null : (pt({
      mode: "panorama",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      fovDeg: (E == null ? void 0 : E.fovDeg) || 100
    }, E), t);
  }
  function sn(E) {
    return !Nt() || !_ ? null : (pt({ mode: "unwrap" }, E), t);
  }
  function Un(E) {
    return !Nt() || !_ ? null : (pt({
      mode: "cutout",
      yawDeg: (E == null ? void 0 : E.yawDeg) || 0,
      pitchDeg: (E == null ? void 0 : E.pitchDeg) || 0,
      rollDeg: (E == null ? void 0 : E.rollDeg) || 0,
      hFovDeg: (E == null ? void 0 : E.hFovDeg) || 90,
      vFovDeg: (E == null ? void 0 : E.vFovDeg) || 60
    }, E), t);
  }
  function u(E = {}) {
    if (!xe() || (de(E.width, E.height, E.dpr || 1), !Nt())) return null;
    const B = Object.prototype.hasOwnProperty.call(E, "backgroundSource"), W = Object.prototype.hasOwnProperty.call(E, "paintSource"), U = Object.prototype.hasOwnProperty.call(E, "maskSource"), ee = Object.prototype.hasOwnProperty.call(E, "textures"), q = Object.prototype.hasOwnProperty.call(E, "scene");
    return B && ge(E.backgroundSource, E.backgroundRevision ?? ""), W && X(E.paintSource, E.paintRevision ?? ""), U && ve(E.maskSource, E.maskRevision ?? ""), ee && (ot(E.textures || []), R.textures = E.textures || []), q && (R.scene = E.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "objectPass") && (R.objectPass = E.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(E, "backgroundOpacity") && (R.backgroundOpacity = Number(E.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(E, "showMaskTint") && (R.showMaskTint = E.showMaskTint === !0), Object.prototype.hasOwnProperty.call(E, "coverageDeg") && (R.coverageDeg = Number(E.coverageDeg || 360) === 180 ? 180 : 360), _ && pt(E.view, {
      ...E,
      backgroundOpacity: Number(E.backgroundOpacity ?? R.backgroundOpacity ?? 1),
      coverageDeg: Number(E.coverageDeg || R.coverageDeg || 360) === 180 ? 180 : 360
    }), qt(
      R.objectPass || { objects: [] },
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
  function Z(E, B, W) {
    const U = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || T.sourceWidth || T.width || 1)), ee = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || T.sourceHeight || T.height || 1)), q = Number(B), he = Number(W);
    if (!Number.isFinite(q) || !Number.isFinite(he)) return null;
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return { u: (q / U % 1 + 1) % 1, v: nt(he / ee, 0, 1) };
    const V = Bi(E, U, ee);
    if (!V) return null;
    const _e = Mo(V.yawDeg, V.pitchDeg, V.rollDeg), Ne = (q - U * 0.5) / (U * 0.5) * Math.tan(nt(V.hFovDeg, 1, 179) * mt * 0.5), Ae = (ee * 0.5 - he) / (ee * 0.5) * Math.tan(nt(V.vFovDeg, 0.1, 179) * mt * 0.5), Ee = Ji($o($o(yi(_e.right, Ne), yi(_e.up, Ae)), _e.fwd));
    return {
      u: (Math.atan2(Ee.x, Ee.z) / lh + 0.5 + 1) % 1,
      v: nt(0.5 - Math.asin(nt(Ee.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function le(E, B, W) {
    const U = Math.max(1, Number((E == null ? void 0 : E.viewportWidth) || T.sourceWidth || T.width || 1)), ee = Math.max(1, Number((E == null ? void 0 : E.viewportHeight) || T.sourceHeight || T.height || 1));
    if ((E == null ? void 0 : E.mode) === "unwrap")
      return {
        x: (Number(B || 0) % 1 + 1) % 1 * U,
        y: nt(Number(W || 0), 0, 1) * ee,
        visible: !0
      };
    const q = Bi(E, U, ee);
    if (!q)
      return { x: U * 0.5, y: ee * 0.5, visible: !1 };
    const he = Mo(q.yawDeg, q.pitchDeg, q.rollDeg), V = zb(B, W), _e = No(V, he.right), Ne = No(V, he.up), Ae = No(V, he.fwd);
    if (Ae <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ee = U * 0.5 + _e / Ae * (U * 0.5 / Math.tan(nt(q.hFovDeg, 1, 179) * mt * 0.5)), ze = ee * 0.5 - Ne / Ae * (ee * 0.5 / Math.tan(nt(q.vFovDeg, 0.1, 179) * mt * 0.5));
    return { x: Ee, y: ze, visible: Ee >= 0 && Ee <= U && ze >= 0 && ze <= ee };
  }
  return {
    init: xe,
    dispose: P,
    setViewport: de,
    setBackgroundErp: ge,
    setPaintErp: X,
    setMaskErp: ve,
    renderPanorama: gn,
    renderUnwrap: sn,
    renderCutout: Un,
    renderScene: u,
    syncState: O,
    screenToErpUv: Z,
    erpUvToScreen: le,
    getCanvas() {
      return t;
    },
    isSupported() {
      return xe();
    },
    getViewport() {
      return { ...T };
    }
  };
}
function ff(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Bb() {
  const e = /* @__PURE__ */ new Map();
  function t(f) {
    return f != null ? String(f) : "default";
  }
  function n(f, d, m) {
    const y = t(f);
    let _ = e.get(y) || null;
    if (!_) {
      const A = document.createElement("canvas"), T = A.getContext("2d");
      if (!T) return null;
      _ = {
        id: y,
        canvas: A,
        ctx: T,
        width: 0,
        height: 0
      }, e.set(y, _);
    }
    const p = ff(d), w = ff(m);
    return _.width !== p && (_.canvas.width = p, _.width = p), _.height !== w && (_.canvas.height = w, _.height = w), _;
  }
  function i(f) {
    return e.get(t(f)) || null;
  }
  function a(f) {
    const d = i(f);
    d && d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height);
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
const Gb = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), Kb = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function ch(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Wb(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function Yb(e = {}) {
  const t = Kb.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? ch(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function qb(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Gb.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? ch(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Wb(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Xb(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => qb(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), f = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== f ? l - f : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Ci(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: Yb((e == null ? void 0 : e.background) || {}),
    objectPass: Xb((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function Jb(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function dc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? Jb(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Zb(e, t, n = {}) {
  return e ? dc({
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
function Qb(e, t, n = {}) {
  return e ? dc({
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
function ey(e, t, n = {}) {
  return e ? dc({
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
function uh(e = {}) {
  const t = [], n = Zb(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = Qb(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, f) => {
    const d = ey(
      (l == null ? void 0 : l.source) || null,
      (l == null ? void 0 : l.revision) || "",
      {
        id: String((l == null ? void 0 : l.id) || `raster_layer_${f}`),
        zIndex: Number((l == null ? void 0 : l.zIndex) ?? (l == null ? void 0 : l.z_index) ?? 90),
        opacity: Number((l == null ? void 0 : l.opacity) ?? 1),
        visible: (l == null ? void 0 : l.visible) !== !1,
        transform: (l == null ? void 0 : l.transform) || null,
        params: (l == null ? void 0 : l.params) || {}
      }
    );
    d && t.push(d);
  }), t.sort((l, f) => {
    const d = Number((l == null ? void 0 : l.zIndex) || 0), m = Number((f == null ? void 0 : f.zIndex) || 0);
    return d !== m ? d - m : String((l == null ? void 0 : l.id) || "").localeCompare(String((f == null ? void 0 : f.id) || ""));
  });
}
function hc(e, t) {
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
function us(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], f = String((e == null ? void 0 : e.backgroundRevision) || [
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
      objects: hc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Zi(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = hc(t, n), a = uh({
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
function ty(e = {}) {
  var l, f, d, m, y, _, p, w;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Ci(e), T = Array.isArray((l = A.objectPass) == null ? void 0 : l.objects) ? A.objectPass.objects : [], M = {
      stickers: T.filter((I) => I.type === "sticker").map((I) => {
        var C, R, J, ne, te, xe, P, de, ue, ce, j, se, be;
        return {
          id: I.id,
          assetId: String(((C = I == null ? void 0 : I.params) == null ? void 0 : C.assetId) || ((R = I == null ? void 0 : I.params) == null ? void 0 : R.asset_id) || (I == null ? void 0 : I.id) || ""),
          yawDeg: Number(((J = I == null ? void 0 : I.transform) == null ? void 0 : J.yawDeg) ?? ((ne = I == null ? void 0 : I.params) == null ? void 0 : ne.yawDeg) ?? 0),
          pitchDeg: Number(((te = I == null ? void 0 : I.transform) == null ? void 0 : te.pitchDeg) ?? ((xe = I == null ? void 0 : I.params) == null ? void 0 : xe.pitchDeg) ?? 0),
          rollDeg: Number(((P = I == null ? void 0 : I.transform) == null ? void 0 : P.rollDeg) ?? ((de = I == null ? void 0 : I.params) == null ? void 0 : de.rollDeg) ?? 0),
          hFovDeg: Number(((ue = I == null ? void 0 : I.transform) == null ? void 0 : ue.hFovDeg) ?? ((ce = I == null ? void 0 : I.params) == null ? void 0 : ce.hFovDeg) ?? 30),
          vFovDeg: Number(((j = I == null ? void 0 : I.transform) == null ? void 0 : j.vFovDeg) ?? ((se = I == null ? void 0 : I.params) == null ? void 0 : se.vFovDeg) ?? 30),
          crop: ((be = I == null ? void 0 : I.params) == null ? void 0 : be.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((I == null ? void 0 : I.opacity) ?? 1),
          visible: (I == null ? void 0 : I.visible) !== !1,
          zIndex: Number((I == null ? void 0 : I.zIndex) ?? 0)
        };
      }),
      selectedId: ((f = A.objectPass) == null ? void 0 : f.selectedId) ?? null,
      hoveredId: ((d = A.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, $ = T.filter((I) => I.type === "sticker").map((I) => {
      var C, R;
      return {
        assetId: String(((C = I == null ? void 0 : I.params) == null ? void 0 : C.assetId) || ((R = I == null ? void 0 : I.params) == null ? void 0 : R.asset_id) || (I == null ? void 0 : I.id) || ""),
        source: I.source || null,
        revision: String((I == null ? void 0 : I.revision) || "")
      };
    }).filter((I) => I.assetId && I.source), z = T.find((I) => I.type === "paint") || null, F = T.find((I) => I.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((m = A.background) == null ? void 0 : m.source) || null,
      backgroundRevision: String(((y = A.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((_ = A.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (z == null ? void 0 : z.source) || null,
      paintRevision: String((z == null ? void 0 : z.revision) || ""),
      maskSource: (F == null ? void 0 : F.source) || null,
      maskRevision: String((F == null ? void 0 : F.revision) || ""),
      textures: $,
      scene: M,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((p = A.background) == null ? void 0 : p.opacity) ?? 1),
      showMaskTint: ((w = e == null ? void 0 : e.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Ci({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...hc(t, n),
        ...uh({
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
function ny(e) {
  let t = null;
  function n(l = {}) {
    const f = ty(l);
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
function Vr(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : ($) => Ub($), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Bb(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : ($) => ny($), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, f = n();
  let d = null;
  const m = i({
    syncState($ = {}) {
      if (typeof a.syncState == "function") {
        const z = { ...$ }, F = a.syncState(z);
        return F && (d = z, F);
      }
      return d = { ...$ }, !0;
    }
  });
  function y($ = {}) {
    return m.sync($);
  }
  function _($ = {}, z = {}) {
    return d ? a.renderScene({
      ...d,
      view: $,
      width: z.width,
      height: z.height,
      dpr: z.dpr,
      backgroundOpacity: z.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: z.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function p($, z, F = {}, I = {}) {
    if (!z) return !1;
    const C = _(F, {
      ...I,
      width: z.w,
      height: z.h
    });
    return C ? $ ? ($.canvas && C === $.canvas || $.drawImage(C, z.x, z.y, z.w, z.h), !0) : !!l && C === l : !1;
  }
  function w($, z = {}, F = {}) {
    const I = Number(F.width || 0), C = Number(F.height || 0);
    if (!(I > 0) || !(C > 0)) return null;
    const R = f.ensureTarget($, I, C);
    if (!R) return null;
    const J = _(z, {
      ...F,
      width: I,
      height: C
    });
    return J ? (R.ctx.clearRect(0, 0, R.canvas.width, R.canvas.height), R.ctx.drawImage(J, 0, 0, R.canvas.width, R.canvas.height), R.canvas) : null;
  }
  function A($) {
    f.clearTarget($);
  }
  function T() {
    var $;
    f.dispose(), ($ = a.dispose) == null || $.call(a), d = null;
  }
  function M() {
    d = null, m.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: _,
    renderToContext: p,
    renderToTarget: w,
    clearTarget: A,
    snapshotState: m.snapshot,
    clearState: M,
    dispose: T
  };
}
function mi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function ry() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function df(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let f = i, d = a, m = -1, y = -1;
  for (let p = 0; p < a; p += 1)
    for (let w = 0; w < i; w += 1)
      l[(p * i + w) * 4 + 3] <= t || (w < f && (f = w), p < d && (d = p), w > m && (m = w), p > y && (y = p));
  return m < f || y < d ? null : {
    minX: f,
    minY: d,
    maxX: m,
    maxY: y,
    width: m - f + 1,
    height: y - d + 1,
    aspect: Number(((m - f + 1) / Math.max(1, y - d + 1)).toFixed(4))
  };
}
function pc(e, t) {
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
function ft(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let ul = null, fl = null, hf = null, pf = null, _t = null, Gi = null, Xt = null, hr = null;
function iy() {
  if (fl) return fl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), fl = n, n;
}
function dl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  ul = Zn(ul, n, i);
  const a = ul;
  ft(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", pf !== a.ctx && (hf = a.ctx.createPattern(iy(), "repeat"), pf = a.ctx), a.ctx.fillStyle = hf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function ay(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function oy(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function sy(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function ly(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const dt = /* @__PURE__ */ new Map(), mc = 128;
function cy(e, t, n, i, a, l) {
  const f = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), m = `${f}:${d.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (dt.has(m)) {
    const F = dt.get(m);
    return dt.delete(m), dt.set(m, F), F;
  }
  dt.size >= mc && dt.delete(dt.keys().next().value);
  const y = f * 2 + 2, _ = f + 1, p = pc(y, y), w = p.getContext("2d"), A = d * f, T = f + 1, M = `rgba(${n},${i},${a},${l})`, $ = `rgba(${n},${i},${a},0)`, z = w.createRadialGradient(_, _, A, _, _, T);
  return z.addColorStop(0, M), z.addColorStop(1, $), w.fillStyle = z, w.fillRect(0, 0, y, y), dt.set(m, p), p;
}
function uy(e, t, n, i, a, l, f) {
  const { r: d, g: m, b: y, a: _ } = i, p = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), T = Math.max(0, Math.min(0.99, l)), M = Math.max(0, Math.min(1, f ?? 0)), $ = `chisel:${p}:${w}:${n.toFixed(2)}:${d}:${m}:${y}:${_.toFixed(3)}:${A.toFixed(2)}:${T.toFixed(2)}:${M.toFixed(2)}`;
  if (dt.has($)) {
    const te = dt.get($);
    return dt.delete($), dt.set($, te), te;
  }
  dt.size >= mc && dt.delete(dt.keys().next().value);
  const z = pc(p, w), F = z.getContext("2d"), I = F.createImageData(p, w), C = I.data, R = Math.max(0, e - t), J = Math.max(0, Math.min(1, n)), ne = 1 + A;
  for (let te = 0; te < w; te++)
    for (let xe = 0; xe < p; xe++) {
      const P = xe + 0.5 - e, de = te + 0.5 - t, ue = Math.max(Math.abs(P) - R, 0), j = Math.hypot(ue, de) / t;
      if (j >= 1) continue;
      const se = j <= J ? 1 : Math.max(0, (1 - j) / Math.max(1e-4, 1 - J)), be = 1 - j, ge = 1 + A * (1 - be) * (1 - be), X = 1 - T * be * be, ve = ge * X / ne;
      let Me = 1;
      if (M > 0) {
        const ot = Math.floor((de + t) / 1.5), Nt = Math.floor((P + e) / 8), wt = zr(Ni(ot * 41 + 500, Nt * 19 + 300));
        Me = 1 - M * 0.42 * wt;
      }
      const Re = Math.round(255 * Math.min(1, _ * se * ve * Me));
      if (Re <= 0) continue;
      const Ve = (te * p + xe) * 4;
      C[Ve] = d, C[Ve + 1] = m, C[Ve + 2] = y, C[Ve + 3] = Re;
    }
  return F.putImageData(I, 0, 0), dt.set($, z), z;
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
function fy(e, t, n, i, a, l, f) {
  const d = e + 0.5 - n, m = t + 0.5 - i, y = Math.max(0, n - i), _ = Math.max(Math.abs(d) - y, 0), p = Math.hypot(_, m) / i;
  if (p >= 1) return 0;
  const w = zr(Ni(e * 17 + 3, t * 13 + 7)), A = p + l * 0.22 * (w - 0.5);
  if (A >= 1) return 0;
  const T = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), M = dy(e, t, d, m, n, i), $ = l * 0.55;
  if (M < $) return 0;
  const F = 0.45 + 0.55 * ((M - $) / Math.max(1e-4, 1 - $));
  return Math.round(255 * Math.min(1, f * T * F));
}
function dy(e, t, n, i, a, l) {
  const f = Math.floor((n + a) / 3), d = Math.floor((i + l) / 2), m = zr(Ni(f * 13 + 700, d * 17 + 400)), y = Math.floor((n + a) / 1.5), _ = Math.floor((i + l) / 1.5), p = zr(Ni(y * 23 + 800, _ * 29 + 500)), w = zr(Ni(e * 3 + 100, t * 5 + 200));
  return m * 0.55 + p * 0.3 + w * 0.15;
}
function hy(e, t, n, i, a) {
  const { r: l, g: f, b: d, a: m } = i, y = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, Math.min(1, a)), w = `crayon:${y}:${_}:${n.toFixed(2)}:${l}:${f}:${d}:${m.toFixed(3)}:${p.toFixed(2)}`;
  if (dt.has(w)) {
    const F = dt.get(w);
    return dt.delete(w), dt.set(w, F), F;
  }
  dt.size >= mc && dt.delete(dt.keys().next().value);
  const A = pc(y, _), T = A.getContext("2d"), M = T.createImageData(y, _), $ = M.data, z = Math.max(0, Math.min(1, n));
  for (let F = 0; F < _; F++)
    for (let I = 0; I < y; I++) {
      const C = fy(I, F, e, t, z, p, m);
      if (C <= 0) continue;
      const R = (F * y + I) * 4;
      $[R] = l, $[R + 1] = f, $[R + 2] = d, $[R + 3] = C;
    }
  return T.putImageData(M, 0, 0), dt.set(w, A), A;
}
function fh(e, t, n) {
  var M, $;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = sy(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), f = py(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), m = Number(((M = t == null ? void 0 : t.angle) == null ? void 0 : M.value) ?? 0), y = ly(t, a), _ = String((($ = t == null ? void 0 : t.targetSpace) == null ? void 0 : $.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", w = t == null ? void 0 : t.scatter, A = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let T;
  if (i === "chisel") {
    const z = a * d, F = a, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), C = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    T = uy(z, F, l, f, I, C, R);
  } else if (i === "crayon") {
    const z = a * d, F = a, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    T = hy(z, F, l, f, I);
  } else
    T = cy(a, l, f.r, f.g, f.b, f.a);
  return { ctx: e, stampTex: T, radiusPx: a, spacingPx: y, desc: n, aspect: d, angle: m, stampKind: i, scatter: A, latitudeCorrection: p };
}
function py(e) {
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
function my(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function mf(e, t, n, i, a) {
  const l = e.angle, f = e.desc.width;
  function d(y, _) {
    l === 0 ? e.ctx.drawImage(e.stampTex, y - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(y, _), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const m = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - m < 0 && d(t + f, n), t + m > f && d(t - f, n);
}
function gc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: y, count: _ } = e.scatter, p = y * e.radiusPx * a, w = Ni(t, n);
    for (let A = 0; A < _; A++) {
      const T = zr(w + A * 2) * Math.PI * 2, M = Math.sqrt(zr(w + A * 2 + 1)) * p, $ = t + Math.cos(T) * M, z = n + Math.sin(T) * M, F = Math.max(0.5, e.radiusPx * a * 0.48), I = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, C = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, R = F * e.aspect * C;
      mf(e, $, z, F, R);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), f = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(f)) : 1, m = l * e.aspect * d;
  mf(e, t, n, l, m);
}
function gf(e, t, n) {
  const i = oy(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, f = fh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let w = 0; w < i.length; w++) {
    let A = Number(i[w].u || 0) * a;
    const T = Number(i[w].v || 0) * l;
    w > 0 && Math.abs(A - d[w - 1].x) > a * 0.5 && (A += A < d[w - 1].x ? a : -a), d.push({ x: A, y: T });
  }
  if (gc(f, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let m = d[0], y = d[0], _ = d[0], p = 0;
  for (let w = 1; w < d.length; w++) {
    const A = d[w], T = { x: (y.x + A.x) * 0.5, y: (y.y + A.y) * 0.5 };
    w === 1 ? p = ya(f, _.x, _.y, T.x, T.y, p) : p = jo(f, m, _, T, A, p), m = y, y = A, _ = T;
  }
  d.length === 2 ? ya(f, _.x, _.y, y.x, y.y, p) : jo(f, m, _, y, y, p), e.restore();
}
function ko(e, t, n) {
  var p;
  const i = Array.isArray((p = t == null ? void 0 : t.geometry) == null ? void 0 : p.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, f = my(t), d = [];
  let m = 1 / 0, y = -1 / 0;
  for (let w = 0; w < i.length; w++) {
    const A = ay(i[w]);
    let T = Number(A.x || 0) * a;
    w > 0 && Math.abs(T - d[w - 1].x) > a * 0.5 && (T += T < d[w - 1].x ? a : -a), d.push({ x: T, y: Number(A.y || 0) * l }), T < m && (m = T), T > y && (y = T);
  }
  function _(w) {
    e.beginPath(), e.moveTo(d[0].x + w, d[0].y);
    for (let A = 1; A < d.length; A++) e.lineTo(d[A].x + w, d[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = f, _(0), m < 0 && _(a), y > a && _(-a), e.restore();
}
function Qa(e, t, n) {
  var f;
  if (String(((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.geometryKind) || "") === "lasso_fill") {
    ko(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? gf(e, t, n) : (Gi = Zn(Gi, n.width, n.height), ft(Gi), gf(Gi.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(Gi.canvas, 0, 0), e.restore());
}
function Cr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ya(e, t, n, i, a, l) {
  const f = i - t, d = a - n, m = Math.hypot(f, d);
  if (m < 1e-9) return l;
  let y = e.spacingPx - l;
  for (; y <= m; ) {
    const _ = y / m;
    gc(e, t + f * _, n + d * _, 1), y += e.spacingPx;
  }
  return m - y + e.spacingPx;
}
function jo(e, t, n, i, a, l) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, m = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, p = d, w = p + m, A = w + y, T = w - p, M = 16;
  let $ = l, z = n.x, F = n.y;
  for (let I = 1; I <= M; I++) {
    const C = p + T * I / M, R = ((p - C) * t.x + (C - _) * n.x) / (p - _), J = ((p - C) * t.y + (C - _) * n.y) / (p - _), ne = ((w - C) * n.x + (C - p) * i.x) / (w - p), te = ((w - C) * n.y + (C - p) * i.y) / (w - p), xe = ((A - C) * i.x + (C - w) * a.x) / (A - w), P = ((A - C) * i.y + (C - w) * a.y) / (A - w), de = ((w - C) * R + (C - _) * ne) / (w - _), ue = ((w - C) * J + (C - _) * te) / (w - _), ce = ((A - C) * ne + (C - p) * xe) / (A - p), j = ((A - C) * te + (C - p) * P) / (A - p), se = ((w - C) * de + (C - p) * ce) / (w - p), be = ((w - C) * ue + (C - p) * j) / (w - p);
    $ = ya(e, z, F, se, be, $), z = se, F = be;
  }
  return $;
}
function gy(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, f = l.width, d = n * l.height, m = e.activeStroke;
  let y = t * f;
  if (m && Math.abs(y - m.prev.x) > f * 0.5 && (y += y < m.prev.x ? f : -f), !m) {
    const A = fh(a, i, l), T = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), M = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), $ = String((i == null ? void 0 : i.toolKind) || "") === "eraser", z = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", gc(A, y, d, 1), e.activeStroke = {
      pprev: { x: y, y: d },
      prev: { x: y, y: d },
      lastMidX: y,
      lastMidY: d,
      stampTex: A.stampTex,
      radiusPx: A.radiusPx,
      spacingPx: A.spacingPx,
      aspect: A.aspect,
      angle: A.angle,
      stampKind: A.stampKind,
      scatter: A.scatter,
      latitudeCorrection: A.latitudeCorrection,
      strokeOpacity: T,
      velocityWidthFactor: M,
      distSinceStamp: 0,
      isEraser: $,
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const _ = (m.prev.x + y) * 0.5, p = (m.prev.y + d) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
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
  m.pointCount === 1 ? m.distSinceStamp = ya(w, m.lastMidX, m.lastMidY, _, p, m.distSinceStamp) : m.distSinceStamp = jo(
    w,
    m.pprev,
    { x: m.lastMidX, y: m.lastMidY },
    { x: _, y: p },
    { x: y, y: d },
    m.distSinceStamp
  ), m.pprev = m.prev, m.prev = { x: y, y: d }, m.lastMidX = _, m.lastMidY = p, m.pointCount++, e.displayDirty = !0;
}
function Rl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = mi(t, n), f = {
    descriptor: i,
    committedMask: mi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: mi(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, m = mi(t, n);
  let y = null, _ = "", p = null;
  function w(P) {
    return {
      actionGroupId: P,
      descriptor: i,
      committedPaint: mi(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(P) {
    let de = a.get(P);
    return de || (de = w(P), a.set(P, de)), de;
  }
  function T(P) {
    return _ === "mask" ? f : y ? A(y) : d;
  }
  function M(P) {
    var be;
    const de = !p || p.length !== P.length || P.some((ge, X) => ge !== p[X]), ue = _ === "paint" && ((be = y ? a.get(y) : d) == null ? void 0 : be.activeStroke) || null;
    let ce = f.displayDirty || d.displayDirty || de;
    for (const ge of P) {
      const X = a.get(ge);
      if (X != null && X.displayDirty) {
        ce = !0;
        break;
      }
    }
    if (ue && (ce = !0), !ce) return;
    f.displayDirty = !1, d.displayDirty = !1;
    for (const ge of P) {
      const X = a.get(ge);
      X && (X.displayDirty = !1);
    }
    p = [...P];
    const j = m.ctx;
    ft(m);
    const se = !!(ue != null && ue.isEraser);
    for (const ge of P) {
      const X = a.get(ge);
      if (!X) continue;
      const Me = y === X.actionGroupId && _ === "paint" ? X.activeStroke : null;
      if (se)
        _t = Zn(_t, t, n), ft(_t), _t.ctx.drawImage(X.committedPaint.canvas, 0, 0), Cr(_t.ctx, l.canvas), j.drawImage(_t.canvas, 0, 0);
      else if (j.drawImage(X.committedPaint.canvas, 0, 0), Me) {
        const Re = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Me.strokeOpacity ?? 1));
        j.save(), j.globalAlpha = Re, j.drawImage(l.canvas, 0, 0), j.restore();
      }
    }
  }
  function $(P) {
    var ue, ce, j, se, be;
    for (const ge of a.values())
      ft(ge.committedPaint), ft(ge.currentStroke), ge.activeStroke = null, ge.displayDirty = !0;
    ft(f.committedMask), ft(f.currentStroke), f.activeStroke = null, f.displayDirty = !0, d.displayDirty = !0, p = null;
    const de = [
      ...Array.isArray((ce = (ue = P == null ? void 0 : P.painting) == null ? void 0 : ue.paint) == null ? void 0 : ce.strokes) ? P.painting.paint.strokes : [],
      ...Array.isArray((se = (j = P == null ? void 0 : P.painting) == null ? void 0 : j.mask) == null ? void 0 : se.strokes) ? P.painting.mask.strokes : []
    ];
    for (const ge of de) {
      if (((be = ge == null ? void 0 : ge.targetSpace) == null ? void 0 : be.kind) !== "ERP_GLOBAL") continue;
      const X = String((ge == null ? void 0 : ge.layerKind) || "paint"), Me = String((ge == null ? void 0 : ge.toolKind) || "pen") === "eraser";
      if (X === "mask") {
        const Re = f.descriptor;
        Me ? (_t = Zn(_t, Re.width, Re.height), ft(_t), Qa(_t.ctx, ge, Re), Cr(f.committedMask.ctx, _t.canvas)) : Qa(f.committedMask.ctx, ge, Re);
        continue;
      }
      if (Me) {
        _t = Zn(_t, i.width, i.height), ft(_t), Qa(_t.ctx, ge, i);
        for (const Re of a.values())
          Cr(Re.committedPaint.ctx, _t.canvas), Re.displayDirty = !0;
      } else {
        const Re = String((ge == null ? void 0 : ge.actionGroupId) || "__default__"), Ve = A(Re), ot = Ve.descriptor;
        Qa(Ve.committedPaint.ctx, ge, ot), Ve.displayDirty = !0;
      }
    }
    M([...a.keys()]);
  }
  function z(P, de) {
    _ = String((P == null ? void 0 : P.layerKind) || "");
    const ue = String((P == null ? void 0 : P.toolKind) || "") === "eraser";
    if (_ === "mask")
      y = null, ft(f.currentStroke), f.activeStroke = null, f.displayDirty = !0;
    else {
      const ce = ue ? d : A(String((P == null ? void 0 : P.actionGroupId) || "__default__"));
      y = ue ? "" : String((P == null ? void 0 : P.actionGroupId) || "__default__"), ft(ce.currentStroke), ce.activeStroke = null, ce.displayDirty = !0;
    }
  }
  function F(P, de) {
    var X;
    const ue = String((P == null ? void 0 : P.layerKind) || "paint"), ce = String((P == null ? void 0 : P.toolKind) || "") === "eraser", j = ue === "mask" ? f : ce ? d : A(String((P == null ? void 0 : P.actionGroupId) || y || "__default__")), se = j.activeStroke, be = j.descriptor;
    if (se && se.pointCount > 1) {
      const ve = j.currentStroke.ctx;
      ve.globalCompositeOperation = "source-over";
      const Me = {
        ctx: ve,
        stampTex: se.stampTex,
        radiusPx: se.radiusPx,
        spacingPx: se.spacingPx,
        desc: be,
        aspect: se.aspect,
        angle: se.angle,
        stampKind: se.stampKind,
        scatter: se.scatter,
        latitudeCorrection: se.latitudeCorrection
      };
      se.pointCount === 2 ? ya(Me, se.lastMidX, se.lastMidY, se.prev.x, se.prev.y, se.distSinceStamp) : jo(Me, se.pprev, { x: se.lastMidX, y: se.lastMidY }, se.prev, se.prev, se.distSinceStamp);
    }
    j.lassoPreviewActive && (ft(j.currentStroke), ko(j.currentStroke.ctx, P, be), j.lassoPreviewActive = !1);
    const ge = ue === "mask" ? f.committedMask : j.committedPaint;
    if (ce && ue === "paint")
      for (const ve of a.values())
        Cr(ve.committedPaint.ctx, j.currentStroke.canvas), ve.displayDirty = !0;
    else if (ce)
      Cr(ge.ctx, j.currentStroke.canvas);
    else {
      const ve = Math.max(0, Math.min(1, (se == null ? void 0 : se.strokeOpacity) ?? 1));
      ge.ctx.save(), ge.ctx.globalAlpha = ve, ge.ctx.drawImage(j.currentStroke.canvas, 0, 0), ge.ctx.restore();
    }
    ry() && (String((P == null ? void 0 : P.toolKind) || ""), String((be == null ? void 0 : be.kind) || ""), Number((be == null ? void 0 : be.width) || 0), Number((be == null ? void 0 : be.height) || 0), String(((X = P == null ? void 0 : P.targetSpace) == null ? void 0 : X.viewMode) || ""), Number((P == null ? void 0 : P.aspect) ?? 1), df(j.currentStroke.canvas), df(ge.canvas), void 0), ft(j.currentStroke), j.activeStroke = null, j.displayDirty = !0, y = null, _ = "", M([...a.keys()]);
  }
  function I(P) {
    if (_ === "mask")
      ft(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (_ === "paint" && !y)
      ft(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (y) {
      const de = a.get(y);
      de && (ft(de.currentStroke), de.activeStroke = null, de.lassoPreviewActive = !1, de.displayDirty = !0);
    }
    y = null, _ = "", M([...a.keys()]);
  }
  function C(P, de) {
    var ce;
    if (_ = String((P == null ? void 0 : P.layerKind) || ""), String(((ce = P == null ? void 0 : P.geometry) == null ? void 0 : ce.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        ft(f.currentStroke), ko(f.currentStroke.ctx, P, f.descriptor), f.lassoPreviewActive = !0, f.displayDirty = !0;
      else {
        const j = String((P == null ? void 0 : P.toolKind) || "") === "eraser", se = j ? d : A(String((P == null ? void 0 : P.actionGroupId) || y || "__default__"));
        y = j ? "" : String((P == null ? void 0 : P.actionGroupId) || y || "__default__"), ft(se.currentStroke), ko(se.currentStroke.ctx, P, se.descriptor), se.lassoPreviewActive = !0, se.displayDirty = !0;
      }
      M([...a.keys()]);
    }
  }
  function R(P) {
    return M(P ?? [...a.keys()]), {
      displayPaint: m,
      committedMask: f.committedMask,
      descriptor: i
    };
  }
  function J(P) {
    return a.get(String(P)) ?? null;
  }
  function ne() {
    return [...a.keys()];
  }
  function te(P) {
    var be;
    const de = a.get(String(P));
    if (!de) return null;
    const ue = _ === "paint" && y === de.actionGroupId, ce = _ === "paint" && ((be = y ? a.get(y) : d) == null ? void 0 : be.activeStroke) || null;
    if (ce != null && ce.isEraser)
      return Xt = Zn(Xt, t, n), ft(Xt), Xt.ctx.drawImage(de.committedPaint.canvas, 0, 0), Cr(Xt.ctx, l.canvas), Xt.canvas;
    const j = ue ? de.activeStroke : null;
    if (!j) return de.committedPaint.canvas;
    Xt = Zn(Xt, t, n), ft(Xt), Xt.ctx.drawImage(de.committedPaint.canvas, 0, 0);
    const se = de.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, j.strokeOpacity ?? 1));
    return Xt.ctx.save(), Xt.ctx.globalAlpha = se, Xt.ctx.drawImage(l.canvas, 0, 0), Xt.ctx.restore(), Xt.canvas;
  }
  function xe() {
    return hr = Zn(hr, t, n), ft(hr), dl(hr.ctx, f.committedMask.canvas), _ === "mask" && f.activeStroke && (f.activeStroke.isEraser ? (_t = Zn(_t, t, n), ft(_t), _t.ctx.drawImage(f.committedMask.canvas, 0, 0), Cr(_t.ctx, l.canvas), ft(hr), dl(hr.ctx, _t.canvas)) : dl(hr.ctx, l.canvas)), hr.canvas;
  }
  return {
    rebuildCommitted: $,
    beginStroke: z,
    appendStrokePoint: gy,
    updateActiveStroke: C,
    commitActiveStroke: F,
    cancelActiveStroke: I,
    getErpTarget: R,
    ensureTarget: T,
    getGroupTarget: J,
    getGroupDisplayCanvas: te,
    getMaskDisplayCanvas: xe,
    getAllGroupIds: ne
  };
}
function K(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function hl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Lt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function by(e, t) {
  let n = Lt(t) - Lt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const bf = Math.PI / 180, yf = 0.12, yy = 3, vy = 35, _y = 140, Qi = 100, xy = 20, vf = 0.8;
function wy(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = K(Number(e || Qi), 1, 179) * bf;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / bf;
}
function Sy(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function fs(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Qi })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), f = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, m = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(z, F = null) {
    d && d(z, F);
  }
  function _(z, F, I = null, C = performance.now()) {
    return m.drag.active = !0, m.drag.lastX = Number(z || 0), m.drag.lastY = Number(F || 0), m.drag.lastTs = Number(C || performance.now()), m.drag.pointerId = I, m.inertia.active = !1, m.inertia.vx = 0, m.inertia.vy = 0, m.inertia.lastTs = m.drag.lastTs, m.velHistory = [], y("drag", { phase: "start", x: m.drag.lastX, y: m.drag.lastY, pointerId: I }), !0;
  }
  function p(z, F, I = "pano", C = performance.now()) {
    if (!m.drag.active) return !1;
    const R = Number(C || performance.now()), J = Number(z), ne = Number(F), te = J - m.drag.lastX, xe = ne - m.drag.lastY;
    m.drag.lastX = J, m.drag.lastY = ne, m.drag.lastTs = R;
    const P = i() || { x: 1, y: 1 }, de = Number(P.x || 1), ue = Number(P.y || 1), ce = { ...t() };
    let j = 0, se = 0;
    if (I === "unwrap") {
      const ge = a() || { w: 1, h: 1 }, X = Math.max(1, Number(ge.w || 1)), ve = Math.max(1, Number(ge.h || 1)), Me = te / X, Re = xe / ve;
      j = -Me * 360 * de, se = Re * 180 * ue;
    } else {
      const ge = l() || { w: 0, h: 0 }, X = Math.max(1, Number(ge.w || 0)), ve = Math.max(1, Number(ge.h || 0));
      if (X > 1 && ve > 1) {
        const Me = K(Number(ce.fov || Qi), 1, 179), Re = K(wy(Me, X, ve), 0.1, 179);
        j = -(te / X) * Me * de, se = xe / ve * Re * ue;
      } else
        j = -te * yf * de, se = xe * yf * ue;
    }
    ce.yaw = Lt(Number(ce.yaw || 0) + j), ce.pitch = K(Number(ce.pitch || 0) + se, -89.9, 89.9), n(ce), m.velHistory.push({ ts: R, yaw: ce.yaw, pitch: ce.pitch });
    let be = 0;
    for (; be < m.velHistory.length - 1 && m.velHistory[be].ts < R - 100; ) be++;
    return be > 0 && m.velHistory.splice(0, be), m.inertia.active = !1, m.inertia.lastTs = R, f(), y("drag", { phase: "move", dx: te, dy: xe, dYaw: j, dPitch: se }), !0;
  }
  function w(z = performance.now()) {
    if (!m.drag.active) return !1;
    m.drag.active = !1;
    const F = Number(z || performance.now());
    m.drag.lastTs = F;
    const I = m.velHistory.filter((R) => F - R.ts <= 80);
    if (I.length >= 2) {
      const R = I[0], J = I.at(-1), ne = Math.max(1e-3, (J.ts - R.ts) / 1e3);
      let te = J.yaw - R.yaw;
      te > 180 && (te -= 360), te < -180 && (te += 360), m.inertia.vx = te / ne, m.inertia.vy = (J.pitch - R.pitch) / ne;
    } else
      m.inertia.vx = 0, m.inertia.vy = 0;
    m.velHistory = [];
    const C = Math.hypot(m.inertia.vx, m.inertia.vy);
    return m.inertia.active = C > xy, m.inertia.lastTs = F, y("drag", { phase: "end", speed: C, inertiaActive: m.inertia.active }), !0;
  }
  function A(z = performance.now()) {
    if (!m.inertia.active) return !1;
    const F = Number(z || performance.now()), I = Math.max(1e-3, (F - (m.inertia.lastTs || F)) / 1e3);
    m.inertia.lastTs = F;
    const C = { ...t() };
    C.yaw = Lt(Number(C.yaw || 0) + m.inertia.vx * I), C.pitch = K(Number(C.pitch || 0) + m.inertia.vy * I, -89.9, 89.9);
    const R = Math.exp(-5.5 * I);
    return m.inertia.vx *= R, m.inertia.vy *= R, Math.abs(m.inertia.vx) < vf && Math.abs(m.inertia.vy) < vf && (m.inertia.vx = 0, m.inertia.vy = 0, m.inertia.active = !1), n(C), f(), m.inertia.active;
  }
  function T(z) {
    const F = Math.sign(Number(z || 0));
    if (!F) return !1;
    const I = { ...t() }, C = Number(I.fov || Qi);
    return I.fov = K(C + F * yy, vy, _y), n(I), f(), y("wheel", { deltaSign: F, fovBefore: C, fovAfter: I.fov }), !0;
  }
  function M(z) {
    return T(Math.sign(Sy(z)));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: Qi }), m.inertia.active = !1, m.inertia.vx = 0, m.inertia.vy = 0, f();
  }
  return {
    state: m,
    startDrag: _,
    moveDrag: p,
    endDrag: w,
    stepInertia: A,
    applyWheel: T,
    applyWheelEvent: M,
    resetView: $
  };
}
function Vo(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const _f = Math.PI / 180;
function Ki(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Ny(e) {
  const t = e || {}, n = Ki(t.yaw_deg, 0), i = Ki(t.pitch_deg, 0), a = Ki(t.roll_deg ?? t.rot_deg, 0), l = hl(Ki(t.hFOV_deg, 90), 1, 179), f = hl(Ki(t.vFOV_deg, 60), 1, 179), d = Math.tan(l * _f * 0.5) / Math.max(1e-6, Math.tan(f * _f * 0.5)), m = hl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: f,
    aspect: m
  };
}
const dh = 0.28;
function My(e) {
  const t = e && typeof e == "object" ? e : {}, n = K(Number(t.x0 ?? 0), 0, 1), i = K(Number(t.y0 ?? 0), 0, 1), a = K(Number(t.x1 ?? 1), 0, 1), l = K(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function ky(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, f = e.visible === !1, d = l && i && f;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: K(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: K(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: My(e.crop),
    opacity: d ? dh : K(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function ds(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((f) => ky(f, { includeHidden: i })).filter((f) => f && (i || f.visible !== !1)).sort((f, d) => Number(f.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function hh(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || ds(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], f = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var T;
    const m = String((d == null ? void 0 : d.assetId) || "").trim(), y = m || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!y || f.has(y)) return;
    const _ = m ? a[m] : null, p = t(y, _, d);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const w = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), A = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || w <= 0 || A <= 0 || (f.add(y), l.push({
      assetId: y,
      source: p,
      revision: String(((T = n.revisionFor) == null ? void 0 : T.call(n, y, _, p)) ?? [
        y,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), l;
}
function bc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: K(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Py(e, t = 360) {
  return bc(e, t);
}
function vr(e) {
  const t = Ny(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: K(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: K(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: lt } = vo;
function Ol() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (vo == null ? void 0 : vo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Hr = Math.PI / 180, Ho = {}, Ay = { Nu: 24, Nv: 14 }, Cy = 10, Ty = 120;
function Iy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Wi(e) {
  var n, i, a, l, f;
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
    styleTransform: String(((f = e.style) == null ? void 0 : f.transform) || "")
  };
}
function Ey() {
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
    const l = Number(i), f = Number(a);
    return !Number.isFinite(l) || !Number.isFinite(f) ? null : [l, f];
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
function ph(e) {
  const t = Ur(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function mh(e, t, n) {
  ph(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function Fl(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function gh(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Dy(e) {
  return Vo(gh(e));
}
function $r(e = null) {
  var l, f;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((f = (l = lt == null ? void 0 : lt.canvas) == null ? void 0 : l.constructor) == null ? void 0 : f.name) || "");
  return [t, i, n, a].join("|");
}
function bh(e, t = null) {
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
const la = {
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
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, yh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function yh(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : bh(i, e).chosenPath, l = Fl(e);
      this.activeBackend = l;
      const f = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (l === a && l !== "none" && f === i && d === m) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = m, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && Mi(e, { keepMonitor: i === "stickers" }), wv(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Fl(e);
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
function Ry(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Mi(e, t = {}) {
  var i, a, l, f, d;
  if (!e) return;
  Bo.unregister(e), Ry(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (d = (f = n.root) == null ? void 0 : f.remove) == null || d.call(f);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((m) => {
      if (m === (n == null ? void 0 : n.widget)) return !1;
      const y = String((m == null ? void 0 : m.name) || ""), _ = String((m == null ? void 0 : m.type) || ""), p = Ol();
      return !(y === p || _ === p || y === "pano_preview" || _ === "pano_preview" || y === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || la.unregister(e);
}
function Br(e, t, n) {
  return { x: e, y: t, z: n };
}
function xf(e, t) {
  return Br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function eo(e, t) {
  return Br(e.x * t, e.y * t, e.z * t);
}
function pl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function wf(e, t) {
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
function yc(e, t, n = 0) {
  const i = Dr(e, t), a = Br(0, 1, 0);
  let l = wf(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = Br(1, 0, 0)), l = to(l);
  let f = to(wf(i, l));
  const d = n * Hr, m = Math.cos(d), y = Math.sin(d), _ = xf(eo(l, m), eo(f, y)), p = xf(eo(l, -y), eo(f, m));
  return { fwd: i, right: to(_), up: to(p) };
}
function Oy(e, t = "#00ff00") {
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
function Fy(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = va(e, "state_json")) == null ? void 0 : n.value) || "");
}
function vc(e) {
  var d, m;
  const t = Fy(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = va(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((m = va(e, "coverage")) == null ? void 0 : m.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const f = Oy(t, i);
  return f.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: f }, f;
}
function va(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Sf(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function vh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Ly(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function _h(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function xh(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const f = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = f ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(f.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = Ly(e == null ? void 0 : e.graph, n)), i;
}
function zy(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function _c(e, t = []) {
  const n = zy(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function Nf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Uo(e, t) {
  const n = Nf(e), i = Nf(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function $y(e, t = ["erp_image", "bg_erp"]) {
  var m;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = _c(e, t).map((y) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(y))).filter((y) => y >= 0), l = n.map((y, _) => ({ input: y, idx: _ })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), f = [.../* @__PURE__ */ new Set([...a, ...l])], d = [];
  for (const y of f) {
    const _ = xh(e, y);
    if ((_ == null ? void 0 : _.id) != null) {
      d.push(String(_.id));
      continue;
    }
    const p = (m = n[y]) == null ? void 0 : m.link;
    if (p == null) continue;
    const w = vh(e == null ? void 0 : e.graph, p), { originId: A } = _h(w);
    A != null && d.push(String(A));
  }
  return [...new Set(d)];
}
const Bo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Qt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var y, _, p, w, A;
        if (!l) return;
        const f = Uo(i, l == null ? void 0 : l.id);
        $y(l, ["erp_image", "bg_erp"]).some((T) => Uo(i, T)), !(String(l.__panoPreviewMode || "") === "cutout" && !f) && (zl(l), (_ = (y = l.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || _.call(y), (p = l.setDirtyCanvas) == null || p.call(l, !0, !0), (A = (w = l.graph) == null ? void 0 : w.setDirtyCanvas) == null || A.call(w, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
      });
    }, Qt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Qt) != null && e.removeEventListener) || (Qt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Go(e) {
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
  return typeof ((l = Qt) == null ? void 0 : l.apiURL) == "function" ? Qt.apiURL(a) : a;
}
function jy(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Vy(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Hy(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Uy(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (jy(t)) return [t];
  const { filename: n, subfolder: i } = Vy(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => Go({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Hy([...a, t]);
}
function By(e) {
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
function Mf(e) {
  const t = lt == null ? void 0 : lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Uo(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const f of l)
      if (Uo(f, a)) return t[f];
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
      return Go({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = nr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Go(e);
}
function Gy(e) {
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
function Ky(e, t) {
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
function Wy(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((f) => t.push(f));
  }, a = (l, f = 0) => {
    !l || f > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, f + 1), a(l.ui, f + 1), a(l.data, f + 1), a(l.result, f + 1));
  };
  return a(e, 0), t;
}
function Yy(e, t) {
  try {
    const n = Wy(t);
    let i = "";
    for (const a of n)
      if (i = nr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Ky(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function qy(e, t = []) {
  var y, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = _c(e, t).map((p) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(p))).filter((p) => p >= 0), l = n.map((p, w) => ({ input: p, idx: w })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), f = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const p of f) {
    const w = n[p], A = w == null ? void 0 : w.link;
    if (A == null) continue;
    const T = vh(e.graph, A), { originId: M, originSlot: $ } = _h(T);
    if (M == null) continue;
    const z = xh(e, p, M);
    if (!z) continue;
    const F = Number($ || 0), I = Mf((z == null ? void 0 : z.id) ?? M), C = Array.isArray(I == null ? void 0 : I.images) ? I.images : [];
    if (C.length) {
      const te = [];
      F >= 0 && F < C.length && te.push(C[F]), te.push(...C);
      for (const xe of te) {
        const P = nr(xe);
        if (P)
          return String((w == null ? void 0 : w.name) || ""), { src: P, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (lt == null ? void 0 : lt.getNodeImageUrls) == "function" ? lt.getNodeImageUrls(z) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const te = [];
      F >= 0 && F < R.length && te.push(R[F]), te.push(...R);
      for (const xe of te) {
        const P = nr(xe);
        if (P)
          return String((w == null ? void 0 : w.name) || ""), { src: P, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const J = Array.isArray(z == null ? void 0 : z.imgs) ? z.imgs : [];
    if (J.length) {
      const te = [];
      F >= 0 && F < J.length && te.push(J[F]), te.push(...J);
      for (const xe of te) {
        const P = nr(xe);
        if (P)
          return String((w == null ? void 0 : w.name) || ""), { src: P, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ne = (y = z == null ? void 0 : z.widgets) == null ? void 0 : y.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image");
    if (ne) {
      let te = nr(ne.value);
      if (te && !te.includes("/") && !te.includes(":") && (z.comfyClass === "LoadImage" || z.type === "LoadImage") && (te = Qt.apiURL(`/view?filename=${encodeURIComponent(te)}&type=input&subfolder=`)), te)
        return String((w == null ? void 0 : w.name) || ""), { src: te, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const d = Mf(e == null ? void 0 : e.id), m = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && m.push(...d.pano_input_images), Array.isArray((_ = d == null ? void 0 : d.ui) == null ? void 0 : _.pano_input_images) && m.push(...d.ui.pano_input_images), m.length > 0)
    for (const p of m) {
      const w = nr(p);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Xy(e, t = [], n = {}) {
  const i = qy(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = Uy(a);
  if (!l.length) return null;
  const f = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", m = e.__panoLinkedInputImageCache.get(d);
  if (m && m.srcRaw === a && m.img) return m.img;
  if (m && m.pendingSrcRaw === a && m.pendingImg)
    return f && m.img && (m.img.complete || m.img.naturalWidth || m.img.width) ? m.img : m.pendingImg;
  const y = new Image(), _ = m || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = y, e.__panoLinkedInputImageCache.set(d, _);
  let p = -1;
  const w = () => {
    var T, M, $, z;
    if (p += 1, p >= l.length) {
      if (((M = (T = e.__panoLinkedInputImageCache) == null ? void 0 : T.get) == null ? void 0 : M.call(T, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (z = ($ = e.__panoLinkedInputImageCache) == null ? void 0 : $.delete) == null || z.call($, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const A = l[p];
    _.pendingResolvedSrc = A, y.src = A;
  };
  return y.onload = () => {
    var A, T, M;
    ((T = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : T.call(A, d)) === _ && _.pendingImg === y && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || y.src || ""), _.img = y, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || y.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0);
  }, y.onerror = (A) => {
    var T, M, $, z;
    if (p + 1 < l.length) {
      w();
      return;
    }
    if (((M = (T = e.__panoLinkedInputImageCache) == null ? void 0 : T.get) == null ? void 0 : M.call(T, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (z = ($ = e.__panoLinkedInputImageCache) == null ? void 0 : $.delete) == null || z.call($, d);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, w(), f && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : y;
}
function Ll(e, t = [], n = null, i = {}) {
  const a = Xy(e, t, i);
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
function wh(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Tr(e, t, n = "") {
  const i = wh(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Ty ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function $l(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), f = n / a, d = i / l, m = Math.min(f, d);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function Jy(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), f = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || f <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), m = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), y = Math.max(Math.round(34 * n), d + Math.round(14 * n)), _ = i + (l - m) * 0.5, p = a + (f - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, p, m, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + m * 0.5, p + y * 0.5 + 0.5), e.restore();
}
function no(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function Zy(e) {
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
function Sh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), l = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), f = Number(t) > 0 ? Number(t) : 1;
  let d = a, m = a / f;
  return m > l && (m = l, d = l * f), {
    x: n + (a - d) * 0.5,
    y: i + (l - m) * 0.5,
    w: d,
    h: m
  };
}
function Qy(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || l <= 1) return !1;
  const f = Sh(n, a / l);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, f.x, f.y, f.w, f.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(f.x, f.y, f.w, f.h)), e.restore(), !0;
}
function ev(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var d;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let f = 22;
    try {
      const m = typeof l.computeSize == "function" ? l.computeSize(((d = Ur(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(m) && Number.isFinite(Number(m[1])) && (f = Number(m[1]));
    } catch {
      f = 22;
    }
    a += f;
  }), a;
}
function Po(e) {
  const n = ev(e) + 2, i = 8, a = Ur(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), f = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return f < 40 || l < 80 ? null : { x: i, y: n, w: l, h: f };
}
function Nh(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = By(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const f = e.__panoPreviewImageCache.get(i);
  if (f && f.src === a) return f.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var m, y, _;
    (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function tv(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, f) => Number((l == null ? void 0 : l.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function jl(e, t) {
  return ds(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Vl(e, t, n) {
  return hh(t, (i, a) => Nh(e, i, a), { scene: n });
}
function nv(e, t) {
  var f;
  const n = Ph(e, t);
  if (!n) return [];
  const i = Ah(t), a = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], l = new Map(
    a.filter((d) => d && typeof d == "object").map((d) => [String((d == null ? void 0 : d.actionGroupId) || (d == null ? void 0 : d.id) || "").trim(), Number((d == null ? void 0 : d.z_index) || 0)])
  );
  return i.map((d) => {
    const m = n.getGroupDisplayCanvas(d);
    return m ? {
      id: `paint_group:${d}`,
      source: m,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${d}`,
      zIndex: Number(l.get(d) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function rv(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, f = (d) => {
    const m = d.x - a, y = d.y - l, _ = Math.hypot(m, y) || 1;
    return { x: d.x + m / _ * i, y: d.y + y / _ * i };
  };
  return [f(e), f(t), f(n)];
}
function kf(e, t, n, i, a, l, f, d) {
  const m = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(m) < 1e-6) return;
  const [y, _, p] = rv(l, f, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(_.x, _.y), e.lineTo(p.x, p.y), e.closePath(), e.clip();
  const w = (l.x * (i.y - a.y) + f.x * (a.y - n.y) + d.x * (n.y - i.y)) / m, A = (l.x * (a.x - i.x) + f.x * (n.x - a.x) + d.x * (i.x - n.x)) / m, T = (l.x * (i.x * a.y - a.x * i.y) + f.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / m, M = (l.y * (i.y - a.y) + f.y * (a.y - n.y) + d.y * (n.y - i.y)) / m, $ = (l.y * (a.x - i.x) + f.y * (n.x - a.x) + d.y * (i.x - n.x)) / m, z = (l.y * (i.x * a.y - a.x * i.y) + f.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / m;
  e.transform(w, M, A, $, T, z), e.drawImage(t, 0, 0), e.restore();
}
function Mh(e, t, n, i) {
  const a = pl(e, t.right), l = pl(e, t.up), f = pl(e, t.fwd);
  if (f <= 1e-4) return null;
  const d = l / f / i, m = a / f / i;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function kh(e, t, n, i, a, l, f, d = 12, m = 9) {
  var j;
  const y = K(Number(f.hFOV_deg || 30), 1, 179) * Hr, _ = K(Number(f.vFOV_deg || 30), 1, 179) * Hr, p = Math.tan(y * 0.5), w = Math.tan(_ * 0.5), A = f.crop || {}, T = K(Number(A.x0 ?? 0), 0, 1), M = K(Number(A.y0 ?? 0), 0, 1), $ = K(Number(A.x1 ?? 1), 0, 1), z = K(Number(A.y1 ?? 1), 0, 1), F = Math.max(1e-4, $ - T), I = Math.max(1e-4, z - M), C = yc(Number(f.yaw_deg || 0), Number(f.pitch_deg || 0), Number(f.rot_deg || f.roll_deg || 0)), R = [], J = [], ne = [], te = [];
  for (let se = 0; se <= m; se++) {
    const be = se / m, X = (1 - (M + be * I) * 2) * w;
    for (let ve = 0; ve <= d; ve++) {
      const Me = ve / d, Ve = ((T + Me * F) * 2 - 1) * p, ot = C.fwd.x + C.right.x * Ve + C.up.x * X, Nt = C.fwd.y + C.right.y * Ve + C.up.y * X, wt = C.fwd.z + C.right.z * Ve + C.up.z * X, pt = Math.hypot(ot, Nt, wt) || 1e-8, Yt = ot / pt, qt = Nt / pt, gn = wt / pt, sn = Yt * i.right.x + qt * i.right.y + gn * i.right.z, Un = Yt * i.up.x + qt * i.up.y + gn * i.up.z, u = Yt * i.fwd.x + qt * i.fwd.y + gn * i.fwd.z;
      if (u <= 1e-4)
        R[se] || (R[se] = []), J[se] || (J[se] = []), R[se][ve] = null, J[se][ve] = null;
      else {
        const O = Un / u / a, Z = sn / u / a;
        R[se] || (R[se] = []), J[se] || (J[se] = []), R[se][ve] = n.x + n.w * 0.5 + Z * n.h * 0.5, J[se][ve] = n.y + n.h * 0.5 - O * n.h * 0.5;
      }
      ne[se] || (ne[se] = []), te[se] || (te[se] = []), ne[se][ve] = Me, te[se][ve] = be;
    }
  }
  const xe = (j = l.assets) == null ? void 0 : j[f.asset_id], P = Nh(t, f.asset_id, xe);
  if (!P || !P.complete || !P.naturalWidth) return;
  const de = Number(P.naturalWidth || P.width || 1), ue = Number(P.naturalHeight || P.height || 1), ce = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = ce;
  for (let se = 0; se < m; se++)
    for (let be = 0; be < d; be++) {
      const ge = R[se][be], X = J[se][be], ve = R[se][be + 1], Me = J[se][be + 1], Re = R[se + 1][be], Ve = J[se + 1][be], ot = R[se + 1][be + 1], Nt = J[se + 1][be + 1];
      if (ge === null || ve === null || Re === null || ot === null) continue;
      const wt = ne[se][be] * de, pt = te[se][be] * ue, Yt = ne[se][be + 1] * de, qt = te[se][be + 1] * ue, gn = ne[se + 1][be] * de, sn = te[se + 1][be] * ue, Un = ne[se + 1][be + 1] * de, u = te[se + 1][be + 1] * ue;
      kf(e, P, { x: wt, y: pt }, { x: Yt, y: qt }, { x: Un, y: u }, { x: ge, y: X }, { x: ve, y: Me }, { x: ot, y: Nt }), kf(e, P, { x: wt, y: pt }, { x: Un, y: u }, { x: gn, y: sn }, { x: ge, y: X }, { x: ot, y: Nt }, { x: Re, y: Ve });
    }
}
function iv(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = vc(e), a = Po(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = yc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), f = Math.tan(Number(e.__panoPreviewView.fov || 100) * Hr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = Ll(
    e,
    _c(e, ["erp_image", "bg_erp"]),
    () => {
      var C, R, J;
      (R = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null || R.call(C), (J = e.setDirtyCanvas) == null || J.call(e, !0, !1);
    }
  ), m = !!(d && d.complete && (d.naturalWidth || d.width)), y = Ih(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = y || _, w = Ho, A = jl(e, i), T = Vl(e, i, A), M = bc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let $ = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Vr()), m) {
    const C = us({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(T) ? T.map((ne) => `${String((ne == null ? void 0 : ne.assetId) || "")}:${String((ne == null ? void 0 : ne.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: A,
      textures: T,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), J = e.__panoRuntimeCore.syncState(C) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", M, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    $ = !!J, J && t.drawImage(J, a.x, a.y, a.w, a.h);
  }
  const z = p ? 8 : 12, F = p ? 6 : 9, I = tv(e, i);
  if (!m || I.length === 0) {
    const C = $l(t == null ? void 0 : t.canvas, a);
    Ch(t, a, l, f, C);
  }
  !$ && m && Ko(e, t, a, l, f, d, w), !$ && I.length > 0 && I.forEach((C) => kh(t, e, a, l, f, i, C, z, F)), t.restore();
}
function av(e, t, n, i, a = "preview_scene", l = "") {
  const f = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return us({
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
function Ao(e, t, n, i) {
  var l, f, d, m, y, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const p = i.convertEventToCanvasOffset(t);
      if (Array.isArray(p) && p.length >= 2)
        return {
          x: Number(p[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(p[1]) - Number(((m = e == null ? void 0 : e.pos) == null ? void 0 : m[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((_ = e == null ? void 0 : e.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = sv(e, t, i);
  return a || null;
}
function ov(e, t) {
  var p, w;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a), f = (t == null ? void 0 : t.ds) || ((w = lt == null ? void 0 : lt.canvas) == null ? void 0 : w.ds);
  if (!l || !f) return null;
  const d = Number(f.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const m = Array.isArray(f.offset) ? f.offset : [0, 0], y = (n - Number(l.left || 0)) / d - Number(m[0] || 0), _ = (i - Number(l.top || 0)) / d - Number(m[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(_) ? null : { x: y, y: _ };
}
function sv(e, t, n) {
  var a, l;
  const i = ov(t, n || (lt == null ? void 0 : lt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function ro(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), Ur(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", mh(e, 320, 180), gi(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var w, A;
    const p = t ? t.apply(this, arguments) : void 0;
    try {
      const T = arguments[0];
      T && !((w = this.flags) != null && w.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), iv(this, T, i));
    } catch {
    }
    return p;
  }, e.onResize = function() {
    var w;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Wo(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), Eh(this, 220, null), p;
  };
  const i = fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (p) => {
      e.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = Po(e);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      Th(e), (p = e.setDirtyCanvas) == null || p.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(p, w, A) {
    var T;
    try {
      if (!((T = this.flags) != null && T.collapsed)) {
        const M = Ao(this, p, w, A) || { x: 0, y: 0 }, $ = Ur(this), z = Number(($ == null ? void 0 : $[0]) || 0), F = Number(($ == null ? void 0 : $[1]) || 0);
        if (M.x >= z - 20 && M.y >= F - 20)
          return a ? a.apply(this, arguments) : void 0;
        const C = Po(this);
        if (Sf(M.x, M.y, C))
          return (p == null ? void 0 : p.button) === 0 && i.startDrag(M.x, M.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(p, w, A) {
    try {
      const T = Ao(this, p, w, A);
      if (i.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return i.endDrag(), !0;
        const M = T || i.state.drag;
        return i.moveDrag(M.x, M.y, "pano"), !0;
      }
    } catch {
    }
    return l ? l.apply(this, arguments) : void 0;
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
  const m = e.onMouseWheel;
  e.onMouseWheel = function(p, w, A) {
    var T, M;
    try {
      if ((T = this.flags) != null && T.collapsed) return m ? m.apply(this, arguments) : void 0;
      const $ = Ao(this, p, w, A), z = Po(this);
      if (!$ || !Sf($.x, $.y, z)) return m ? m.apply(this, arguments) : void 0;
      const F = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return i.applyWheel(Math.sign(F)) && ((M = this.setDirtyCanvas) == null || M.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return m ? m.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = f, e.onMouseLeave = d, e.onMouseWheel = m, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = _, e.onRemoved = function() {
    return _(), la.unregister(this), Bo.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function lv(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Ph(e, t) {
  var y, _, p, w, A, T, M, $, z, F, I, C;
  const n = (_ = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes, i = (w = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const f = lv(e, t), d = `${f.width}x${f.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = Rl(f), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) || null
  };
  return (((M = e.__panoPreviewPaintRevision) == null ? void 0 : M.paint) !== m.paint || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.mask) !== m.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== m.groups || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.rasterObjects) !== m.rasterObjects) && (e.__panoPreviewPaintRevision = m, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Ah(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function cv(e, t) {
  const n = Ph(e, t);
  if (!n) return null;
  const i = Ah(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function uv(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = nr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const f = new Image();
  return f.onload = () => {
    var m;
    n == null || n(), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
  }, f.onerror = () => {
    var m;
    ((m = e.__panoPaintingLayerImageCache) == null ? void 0 : m.img) === f && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, f.src = a, e.__panoPaintingLayerImageCache = { src: a, img: f }, f;
}
function Pf(e, t) {
  var l, f;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = uv(e, t, () => {
      var m, y;
      return (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : y.call(m);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = cv(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function fv(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function dv(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function hv(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const f = fv(n);
  if (f.width === i && f.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const m = dv(e, l, f.width, f.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    m.clearRect(0, 0, f.width, f.height), m.drawImage(n, 0, 0, f.width, f.height);
    const y = m.getImageData(0, 0, f.width, f.height).data, _ = t.getImageData(0, 0, i, a), p = _.data, w = Math.max(0, f.width - 1), A = Math.max(0, f.height - 1);
    for (let T = 0; T < a; T += 1) {
      const M = (T + 0.5) * f.height / a - 0.5, $ = K(Math.floor(M), 0, A), z = K($ + 1, 0, A), F = K(M - $, 0, 1);
      for (let I = 0; I < i; I += 1) {
        const C = (I + 0.5) * f.width / i - 0.5, R = K(Math.floor(C), 0, w), J = K(R + 1, 0, w), ne = K(C - R, 0, 1);
        let te = 0, xe = 0, P = 0, de = 0;
        const ue = (se, be, ge) => {
          const X = (be * f.width + se) * 4, ve = (y[X + 3] || 0) / 255;
          te += ve * ge, xe += (y[X] || 0) / 255 * ve * ge, P += (y[X + 1] || 0) / 255 * ve * ge, de += (y[X + 2] || 0) / 255 * ve * ge;
        };
        if (ue(R, $, (1 - ne) * (1 - F)), ue(J, $, ne * (1 - F)), ue(R, z, (1 - ne) * F), ue(J, z, ne * F), te <= 1e-6) continue;
        const ce = (T * i + I) * 4, j = 1 - te;
        p[ce] = Math.round(K((xe + p[ce] / 255 * j) * 255, 0, 255)), p[ce + 1] = Math.round(K((P + p[ce + 1] / 255 * j) * 255, 0, 255)), p[ce + 2] = Math.round(K((de + p[ce + 2] / 255 * j) * 255, 0, 255)), p[ce + 3] = 255;
      }
    }
    t.putImageData(_, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function Af(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let m = e.__panoPreviewBgPaint;
  if (!m || m.__revKey !== d || m.width !== a || m.height !== l) {
    (!m || m.width !== a || m.height !== l) && (m = document.createElement("canvas"), m.width = a, m.height = l, e.__panoPreviewBgPaint = m);
    const y = m.getContext("2d");
    y.clearRect(0, 0, a, l), y.drawImage(t, 0, 0, a, l), hv(e, y, n, a, l, "__panoPreviewOverlayScratch"), m.__revKey = d;
  }
  return m;
}
function pv(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  wh(e, a);
  const l = vc(e), f = t.parentElement, d = 1, m = Math.max(1, Number((f == null ? void 0 : f.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((f == null ? void 0 : f.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(m * d)), p = Math.max(64, Math.round(y * d)), w = t.getContext("2d");
  if (w)
    if (a === "cutout") {
      const A = Zy(l), T = Ll(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var te, xe;
          return (xe = (te = e.__panoDomPreview) == null ? void 0 : te.requestDraw) == null ? void 0 : xe.call(te);
        },
        { preserveReadyWhilePending: !1 }
      ), M = !!(T && T.complete && (T.naturalWidth || T.width));
      (t.width !== _ || t.height !== p) && (t.width = _, t.height = p);
      const $ = { x: 0, y: 0, w: _, h: p }, z = M ? K(Number((T.naturalWidth || T.width) / Math.max(1, Number(T.naturalHeight || T.height || 1))), 0.05, 20) : 1, F = A ? vr(A) : null, I = K(Number((F == null ? void 0 : F.aspect) || z || 1), 0.05, 20), C = Sh($, I);
      $l(t, $), w.setTransform(1, 0, 0, 1, 0, 0), w.fillStyle = "#070707", w.fillRect(0, 0, _, p);
      let R = "none", J = "Open editor and add frame", ne = "";
      if (ne = String((T == null ? void 0 : T.src) || ""), A)
        if (T && !M)
          R = "loading";
        else if (M) {
          const te = jl(e, l), xe = Vl(e, l, te), P = nv(e, l), de = Zi({
            stateRevision: [
              "runtime_cutout_scene",
              String(T.currentSrc || T.src || ""),
              Number(T.naturalWidth || T.width || 0),
              Number(T.naturalHeight || T.height || 0),
              Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(xe) ? xe.map((ce) => `${String((ce == null ? void 0 : ce.assetId) || "")}:${String((ce == null ? void 0 : ce.revision) || "")}`).join(",") : "",
              Array.isArray(P) ? P.map((ce) => `${String((ce == null ? void 0 : ce.id) || "")}:${String((ce == null ? void 0 : ce.revision) || "")}:${Number((ce == null ? void 0 : ce.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: T,
            backgroundRevision: String(T.currentSrc || T.src || ""),
            coverageDeg: Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
            scene: te,
            textures: xe,
            rasterEntries: P,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Vr()), e.__panoRuntimeCore.syncState(de), e.__panoRuntimeCore.renderToContext(
            w,
            C,
            vr(A),
            { width: C.w, height: C.h, dpr: 1 }
          ) || (R = "empty", J = "Open editor or run node");
        } else
          R = "empty", J = "Connect ERP image";
      else {
        if (M) {
          const te = Pf(e, l), xe = te != null && te.source ? Af(e, T, te.source, te.revision || "") : T;
          Qy(w, xe, $, 0.44);
        }
        R = "empty", J = "Open editor and add frame";
      }
      R === "loading" ? (no(e, !1), Tr(e, !0, ne)) : R === "empty" ? (no(e, !0, J), Tr(e, !1, "")) : (no(e, !1), Tr(e, !1, ""));
    } else {
      no(e, !1), (t.width !== _ || t.height !== p) && (t.width = _, t.height = p);
      const A = { x: 0, y: 0, w: _, h: p }, T = $l(t, A);
      w.setTransform(1, 0, 0, 1, 0, 0), w.clearRect(0, 0, _, p), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const M = yc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), $ = Math.tan(Number(e.__panoPreviewView.fov || 100) * Hr * 0.5), z = Ll(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ue, ce;
          return (ce = (ue = e.__panoDomPreview) == null ? void 0 : ue.requestDraw) == null ? void 0 : ce.call(ue);
        }
      ), F = !!(z && z.complete && (z.naturalWidth || z.width));
      w.fillStyle = "#1a1a1e", w.fillRect(0, 0, _, p);
      const I = jl(e, l), C = Vl(e, l, I), R = bc(e.__panoPreviewView, l == null ? void 0 : l.coverage), J = Pf(e, l), ne = (J == null ? void 0 : J.source) || null, te = F && ne ? Af(e, z, ne, (J == null ? void 0 : J.revision) || "") : z, xe = te !== z ? String(te.__revKey || "") : z ? [
        String(z.currentSrc || z.src || ""),
        Number(z.naturalWidth || z.width || 0),
        Number(z.naturalHeight || z.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Vr());
      let P = !1;
      if (F) {
        const ce = e.__panoDomRuntimeCore.syncState(
          av(te, l, I, C, "runtime_dom_scene", xe)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", R, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        ce && (w.drawImage(ce, A.x, A.y, A.w, A.h), P = !0);
      }
      const de = I.stickers;
      if (F && P)
        Tr(e, !1, "");
      else if (F)
        Ko(e, w, A, M, $, te, Ho), Tr(e, !1, "");
      else if (ne)
        Ko(e, w, A, M, $, ne, Ho), Tr(e, !!z && !F, String((z == null ? void 0 : z.src) || ""));
      else {
        const ue = !!z && !F;
        Tr(e, ue, String((z == null ? void 0 : z.src) || "")), ue && Jy(w, A, T);
      }
      if ((!F || de.length === 0) && Ch(w, A, M, $, T), !P && de.length > 0) {
        const ue = Ih(e), ce = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, j = ue || ce, se = j ? 8 : 12, be = j ? 6 : 9;
        de.forEach((ge) => kh(w, e, A, M, $, l, ge, se, be));
      } else if (!z || !F) {
        const ue = Math.max(14, Math.round(16 * T));
        w.fillStyle = "rgba(212,212,216,0.85)", w.font = `600 ${ue}px Plus Jakarta Sans, Geist, sans-serif`, w.textAlign = "center", w.fillText("Open editor to add stickers", _ * 0.5, p * 0.5 + 24 * T);
      }
    }
}
function Ko(e, t, n, i, a, l, f = Ay) {
  const d = vc(e), m = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Vr());
  const y = Gy(l), _ = us({
    stateRevision: [
      "runtime_bg_only",
      y,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: y,
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(_)) return;
  const w = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(m.yaw || 0),
    pitchDeg: Number(m.pitch || 0),
    fovDeg: Number(m.fov || 100),
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
function Cf(e, t, n, i, a, l, f = 1) {
  let d = !1;
  e.strokeStyle = l, e.lineWidth = f, e.beginPath();
  for (const m of t) {
    const y = Mh(m, n, i, a);
    if (!y) {
      d = !1;
      continue;
    }
    d ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), d = !0);
  }
  e.stroke();
}
function Ch(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", f = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const _ = [];
    for (let p = -180; p <= 180; p += 15) _.push(Dr(p, y));
    Cf(e, _, n, t, i, y === 0 ? f : l, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const _ = [];
    for (let p = -89; p <= 89; p += 15) _.push(Dr(y, p));
    Cf(e, _, n, t, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, y % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: Dr(0, 0) },
    { name: "Right", dir: Dr(90, 0) },
    { name: "Back", dir: Dr(180, 0) },
    { name: "Left", dir: Dr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const m = Math.max(9, Math.round(11 * a));
  e.font = `500 ${m}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((y) => {
    const _ = Mh(y.dir, n, t, i);
    _ && e.fillText(y.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function mv(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Th(e) {
  const t = mv(e);
  t.dragging = !1, t.hqFrames = Cy;
}
function Wo(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Ih(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function gv(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function bv(e, t, n = 20) {
  var f;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (f = t.getBoundingClientRect) == null ? void 0 : f.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function fi(e, t) {
  return bv(e, t) ? !1 : (gv(e), !0);
}
function yv() {
  var n;
  const e = (n = lt == null ? void 0 : lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function vv(e) {
  var n;
  if (!e) return;
  const t = (n = lt == null ? void 0 : lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function _v(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !ph(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function xv(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, f;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0));
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
      e.__panoUserResized = !0, Wo(e, 150), t == null || t(), Eh(e, 180, t);
    }
  };
}
function Eh(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function gi(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function wv(e, t = {}) {
  var ge;
  const n = t.__allowStandalone === !0, i = Dy(e);
  if (i && !n) {
    gh(e);
    return;
  }
  i && _v(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", Bo.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, f = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || la.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), m = a ? bh(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: $r(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (m.chosenPath = d, m.reason = "controller_target_backend");
  const y = a ? m.chosenPath : "dom", _ = m.signature || $r(e);
  if (Number(e.__panoRebindGeneration || 0), Fl(e), e == null || e.id, e.__panoPreviewMode, m.reason, m.frontendVersionRaw, e.addDOMWidget, Ur(e), e.__panoFrontendSig = _, e.__panoStickersPath = y, a && la.register(e), a && y === "legacy_draw") {
    if (l) return;
    Mi(e, { keepMonitor: !0 }), ro(e);
    return;
  }
  if ((ge = e.__panoDomPreview) != null && ge.widget) return;
  if (e.__panoLegacyPreviewHooked && Mi(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && ro(e);
    return;
  }
  const p = t.noPreview === !0, w = a || p ? 0 : 56, A = document.createElement("div");
  if (Ey(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
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
    const X = e.addDOMWidget(Ol(), "preview", A, Tf(e, null));
    gi(e), e.__panoDomPreview = { widget: X, root: A, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const T = document.createElement("div");
  T.style.cssText = [
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
  const $ = document.createElement("div");
  $.style.cssText = [
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
  ].join(";"), $.textContent = "Open editor and add frame", T.appendChild(M), T.appendChild($), A.appendChild(T), mh(e, 120, 120), gi(e);
  let z = null;
  try {
    xv(e, w, () => {
      var X, ve;
      return (ve = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : ve.call(X);
    }), z = e.addDOMWidget(
      Ol(),
      "preview",
      A,
      Tf(e, () => {
        var X, ve;
        return (ve = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : ve.call(X);
      }, w)
    );
  } catch {
    a && ro(e);
    return;
  }
  const F = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, I = () => {
    F.needsDraw = !0, F.raf || (F.raf = requestAnimationFrame(J));
  }, C = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Wo(e, 150), I();
  }) : null;
  C == null || C.observe(T);
  const R = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const X = 3, ve = (Me) => {
      requestAnimationFrame(() => {
        var Ve;
        const Re = !!(A != null && A.isConnected && (T != null && T.isConnected) && (M != null && M.isConnected) && Number(T.clientHeight || 0) > 0 && Number(M.clientHeight || 0) > 0);
        if (!Re && Me < X) {
          ve(Me + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((T == null ? void 0 : T.clientHeight) || 0), Number((M == null ? void 0 : M.clientHeight) || 0), !Re) {
          if (l) {
            e.__panoPreviewMode, Number((T == null ? void 0 : T.clientHeight) || 0), Number((M == null ? void 0 : M.clientHeight) || 0);
            return;
          }
          Mi(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", ro(e), (Ve = e.setDirtyCanvas) == null || Ve.call(e, !0, !0);
        }
      });
    };
    ve(1);
  }, J = (X) => {
    var Me, Re, Ve;
    F.raf = 0;
    const ve = ne.stepInertia(X);
    (F.needsDraw || ve) && (F.needsDraw = !1, (Me = e.flags) != null && Me.collapsed || pv(e, M, null, ne), (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !1)), (ve || F.needsDraw) && (F.raf = requestAnimationFrame(J)), Iy() && (!e.__panoDebugLastTs || X - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = X, e.__panoPreviewMode, Ur(e), Wi(A), Wi(T), Wi(M), Wi(A.parentElement), Wi((Ve = A.parentElement) == null ? void 0 : Ve.parentElement), Number(M.width || 0), Number(M.height || 0), void 0);
  }, ne = fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (X) => {
      e.__panoPreviewView = X;
    },
    onInteraction: () => {
      I();
    }
  });
  M.addEventListener("pointerdown", (X) => {
    var ve, Me;
    fi(X, T) && f && X.button === 0 && ((ve = A.focus) == null || ve.call(A), (Me = M.setPointerCapture) == null || Me.call(M, X.pointerId), M.style.cursor = "grabbing", ne.startDrag(X.clientX, X.clientY, X.pointerId));
  }), M.addEventListener("pointermove", (X) => {
    !f || !ne.state.drag.active || (fi(X, T), ne.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const te = (X) => {
    var ve;
    !f || !ne.state.drag.active || (fi(X, T), (ve = M.releasePointerCapture) == null || ve.call(M, X.pointerId), M.style.cursor = "grab", ne.endDrag(), Th(e), I());
  };
  M.addEventListener("pointerup", te), M.addEventListener("pointercancel", te), M.addEventListener("pointerleave", (X) => {
    ne.state.drag.active && te(X);
  });
  const xe = (X) => {
    var Me, Re, Ve;
    if (!fi(X, T) || !f) return;
    const ve = yv();
    ne.applyWheelEvent(X) && I(), (Me = X.preventDefault) == null || Me.call(X), (Re = X.stopPropagation) == null || Re.call(X), (Ve = X.stopImmediatePropagation) == null || Ve.call(X), requestAnimationFrame(() => {
      var ot, Nt;
      vv(ve), (Nt = (ot = lt == null ? void 0 : lt.canvas) == null ? void 0 : ot.setDirty) == null || Nt.call(ot, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    T.addEventListener(X, xe, { passive: !1, capture: !0 }), M.addEventListener(X, xe, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    M.addEventListener(X, (ve) => fi(ve, T)), T.addEventListener(X, (ve) => fi(ve, T));
  });
  const P = va(e, "state_json");
  if (P && !P.__panoPreviewPatchedCb) {
    P.__panoPreviewPatchedCb = !0;
    const X = P.callback;
    P.callback = (ve) => {
      const Me = X ? X(ve) : void 0;
      return I(), Me;
    };
  }
  const de = va(e, "bg_color");
  if (de && !de.__panoPreviewPatchedCb) {
    de.__panoPreviewPatchedCb = !0;
    const X = de.callback;
    de.callback = (ve) => {
      const Me = X ? X(ve) : void 0;
      return I(), Me;
    };
  }
  const ue = e.onRemoved, ce = e.onResize, j = e.onExecuted;
  e.onExecuted = function(X) {
    Yy(e, X), zl(e), gi(e), I();
    const ve = j ? j.apply(this, arguments) : void 0;
    return gi(e), ve;
  };
  const se = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return zl(e), gi(e), I(), se ? se.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var ve;
    const X = ce ? ce.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Wo(this, 150), I(), (ve = this.setDirtyCanvas) == null || ve.call(this, !0, !1), X;
  }, e.onRemoved = function() {
    return be(), la.unregister(this), Bo.unregister(this), ue ? ue.apply(this, arguments) : void 0;
  };
  const be = () => {
    var X;
    F.raf && cancelAnimationFrame(F.raf), (X = C == null ? void 0 : C.disconnect) == null || X.call(C), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = ce, e.onExecuted = j, e.onConnectionsChange = se, e.onRemoved = ue;
  };
  e.__panoDomRestore = be, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: z, root: A, canvas: M, requestDraw: I, state: F, emptyHintEl: $ }, R(), I();
}
function If(e, t = {}) {
  yh(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Yo = Math.PI / 180;
function Gr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Ef(e, t) {
  return Gr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function io(e, t) {
  return Gr(e.x * t, e.y * t, e.z * t);
}
function Df(e, t) {
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
function Sv(e, t) {
  const n = e * Yo, i = t * Yo, a = Math.cos(i);
  return Gr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Nv(e, t, n = 0) {
  const i = Sv(e, t), a = Gr(0, 1, 0);
  let l = Df(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = Gr(1, 0, 0)), l = ao(l);
  const f = ao(Df(i, l)), d = n * Yo, m = Math.cos(d), y = Math.sin(d), _ = Ef(io(l, m), io(f, y)), p = Ef(io(l, -y), io(f, m));
  return { fwd: i, right: ao(_), up: ao(p) };
}
const oo = 140, Mv = 180, Rf = 40, ml = 10;
function Of(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Ff(e, t) {
  const n = Of(e), i = Of(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Lf(e) {
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
  return typeof ((l = Qt) == null ? void 0 : l.apiURL) == "function" ? Qt.apiURL(a) : a;
}
function ki(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ki(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Lf({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Lf(e);
}
function Dh(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function kv(e) {
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
      if (Ff(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (Ff(l, n)) return t[l];
  return null;
}
function Pv(e) {
  var i, a;
  const t = Hl(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const f of l) {
        const d = ki(f);
        if (d && /\.mp4(\?|$)/i.test(d) || d && String((f == null ? void 0 : f.format) || "").toLowerCase() === "video/mp4") return d;
      }
  return "";
}
function Av(e, t = "erp_image") {
  var T, M, $, z, F, I, C, R, J, ne, te, xe;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((P) => String((P == null ? void 0 : P.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const P = n.find((de) => String((de == null ? void 0 : de.type) || "").toUpperCase() === "IMAGE" && (de == null ? void 0 : de.link) != null);
    (P == null ? void 0 : P.link) != null && (i = P.link);
  }
  if (i == null) return "";
  const l = ((M = (T = e == null ? void 0 : e.graph) == null ? void 0 : T.links) == null ? void 0 : M[i]) || ((F = (z = ($ = hn) == null ? void 0 : $.graph) == null ? void 0 : z.links) == null ? void 0 : F[i]);
  if (!l) return "";
  const f = Number(l.origin_id);
  if (!Number.isFinite(f)) return "";
  const d = (R = (C = (I = hn) == null ? void 0 : I.graph) == null ? void 0 : C.getNodeById) == null ? void 0 : R.call(C, f), m = Hl(f), y = Hl(e == null ? void 0 : e.id), _ = [
    m == null ? void 0 : m.images,
    (J = m == null ? void 0 : m.ui) == null ? void 0 : J.pano_input_images,
    m == null ? void 0 : m.pano_input_images,
    (ne = y == null ? void 0 : y.ui) == null ? void 0 : ne.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const P of _)
    if (Array.isArray(P))
      for (const de of P) {
        const ue = ki(de);
        if (ue) return ue;
      }
  let p = [];
  try {
    p = typeof ((te = hn) == null ? void 0 : te.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(d) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const P of p) {
      const de = ki(P);
      if (de) return de;
    }
  if (d) {
    const P = Array.isArray(d == null ? void 0 : d.imgs) ? d.imgs : [];
    for (const de of P) {
      const ue = ki(de);
      if (ue) return ue;
    }
  }
  const w = (xe = d == null ? void 0 : d.widgets) == null ? void 0 : xe.find((P) => String((P == null ? void 0 : P.name) || "").toLowerCase() === "image"), A = String((w == null ? void 0 : w.value) || "").trim();
  return A ? Qt.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function zf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function $f(e, t, n, i, a, l) {
  var w, A, T;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Dh(l) || n <= 1 || i <= 1) {
    zf(t, n, i);
    return;
  }
  const f = Nv(Number(a.yaw || 0), Number(a.pitch || 0), 0), d = Math.tan(Number(a.fov || 100) * Yo * 0.5), m = Number(((T = (A = (w = e == null ? void 0 : e.widgets) == null ? void 0 : w.find) == null ? void 0 : A.call(w, (M) => (M == null ? void 0 : M.name) === "coverage")) == null ? void 0 : T.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = Vr());
  const y = kv(l), _ = us({
    stateRevision: [
      "standalone_preview_scene",
      y,
      m
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: y,
    coverageDeg: m,
    scene: ds(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(_) && (() => {
    const M = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Py(a, m),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return M ? (t.drawImage(M, 0, 0, n, i), !0) : !1;
  })() || (Ko(e, t, { x: 0, y: 0, w: n, h: i }, f, d, l, Ho), zf(t, n, i));
}
function jf(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Cv {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = fs({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Lt(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: K(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: K(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, l, f, d;
        const i = (l = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : l.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((f = this.canvas) == null ? void 0 : f.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((d = this.canvas) == null ? void 0 : d.clientHeight) || 0))
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
      const f = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), f;
    }, this.node.onConnectionsChange = function() {
      const f = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), f;
    }, this.node.onResize = function() {
      const f = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), f;
    }, this.node.onRemoved = function() {
      const f = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), f;
    };
    const n = ((l = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : l.call(a, (f) => (f == null ? void 0 : f.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...f) => {
      const d = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...f) : void 0;
      return t.requestDraw(), d;
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
            minWidth: Math.max(Mv, Number(l.minWidth || 0))
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
      var l, f, d;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const i = (a) => {
      var l, f;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
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
    !(this.img instanceof HTMLVideoElement) || !Dh(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var f;
      const a = t.localPoint(i);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const l = t.getLegacyPreviewRect();
      return jf(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (f = this.setDirtyCanvas) == null || f.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var f;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const l = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - l.x, a.y - l.y, "pano"), (f = this.setDirtyCanvas) == null || f.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var y, _, p, w, A, T;
      const l = Ao(this, n, i, a), f = t.getLegacyPreviewRect();
      if (!l || !jf(l.x, l.y, f))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const d = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const m = t.controller.applyWheel(Math.sign(d));
      return Number(((_ = t.view) == null ? void 0 : _.fov) || 100), m && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (T = n == null ? void 0 : n.stopImmediatePropagation) == null || T.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, f;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - ml * 2), n = Math.max(60, Number(((f = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : f[1]) || 0) - Rf - ml);
    return { x: ml, y: Rf, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), $f(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, l, f;
    const t = Pv(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const d = document.createElement("video");
      d.muted = !0, d.loop = !0, d.playsInline = !0, d.crossOrigin = "anonymous";
      const m = () => {
        this.imgSrc === t && (this.img = d, this.videoPaused || d.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      d.addEventListener("loadedmetadata", m), d.addEventListener("canplay", m), d.addEventListener("timeupdate", y), d.addEventListener("play", y), d.addEventListener("pause", y), d.src = t, d.load(), this.mediaCleanup = () => {
        d.pause(), d.removeEventListener("loadedmetadata", m), d.removeEventListener("canplay", m), d.removeEventListener("timeupdate", y), d.removeEventListener("play", y), d.removeEventListener("pause", y);
      };
      return;
    }
    const n = Av(this.node, this.imageInputName);
    if (!n) {
      (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? ($f(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, l, f, d, m, y, _, p, w, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null;
    try {
      (d = (f = this.root) == null ? void 0 : f.remove) == null || d.call(f);
    } catch {
    }
    if (Array.isArray((m = this.node) == null ? void 0 : m.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((T) => T !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((p = (_ = (y = this.node) == null ? void 0 : y.widgets) == null ? void 0 : _.find) == null ? void 0 : p.call(_, (T) => (T == null ? void 0 : T.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (w = this.node.__panoStandaloneCore) == null ? void 0 : w.dispose) == null || A.call(w), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function Tv(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Cv(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Iv(e, t, n) {
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
  const l = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const d = l ? l.apply(this, arguments) : void 0;
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
function Ul(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Ev(e, t = {}) {
  Rh(e) || Tv(e, {
    ...t,
    onOpen: Ul(e, t.onOpen)
  });
}
function Dv(e, t = {}) {
  if (!Rh(e)) {
    If(e, {
      ...t,
      onOpen: Ul(e, t.onOpen)
    });
    return;
  }
  Iv(e, "cutout_preview", (n) => {
    If(n, {
      ...t,
      onOpen: Ul(n, t.onOpen)
    });
  });
}
const rn = {
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
function Vf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Rv(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), f = Math.max(1, Number(n || 8));
  function d(y) {
    if (i.splice(0, i.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((p) => {
      i.push(String(p || ""));
    }), !i.length)) return;
    const _ = Number(y.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function m(y) {
    i[a] !== y && (i.splice(a + 1), i.push(y), i.length > l && i.shift(), a = i.length - 1);
  }
  return d(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      m(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = i.length, _ = Math.max(0, y - f), p = a >= 0 ? Math.max(0, Math.min(a, _)) : _, w = i.slice(p, p + f), A = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - p));
      return {
        version: 1,
        entries: w,
        index: A
      };
    },
    hydrate: d
  };
}
function et(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Ov() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Fv(e) {
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
function Lv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function zv(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = et(e.t, 0), i = et(e.widthScale, null), a = et(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const l = et(e.u, null), f = et(e.v, null);
    if (l == null || f == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (l % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, f)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const l = et(e.u, null), f = et(e.v, null);
    if (l == null || f == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: l,
      v: f,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  return null;
}
function so(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = zv(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function $v(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const m = so(e.points, t, 3);
    return m ? { geometryKind: a, points: m } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = so(e.points, t, 1);
  if (!l) return null;
  const f = so(e.rawPoints, t, 1), d = so(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: f || l.map((m) => ({ ...m })),
    processedPoints: d || l.map((m) => ({ ...m }))
  };
}
function jv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Lv(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = $v(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = et(e.size, null), f = et(e.opacity, null);
  if (l == null || f == null) return null;
  const d = String(e.id || "").trim(), m = String(e.actionGroupId || "").trim();
  if (!d || !m) return null;
  const y = et(e.radiusValue, null), _ = String(e.radiusModel || "").trim() || null;
  let p = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    p = {
      r: Math.max(0, Math.min(1, et(w.r, 0))),
      g: Math.max(0, Math.min(1, et(w.g, 0))),
      b: Math.max(0, Math.min(1, et(w.b, 0))),
      a: Math.max(0, Math.min(1, et(w.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: m,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, l),
    opacity: Math.max(0, Math.min(1, f)),
    hardness: et(e.hardness, null),
    flow: et(e.flow, null),
    spacing: et(e.spacing, null),
    createdAt: Math.trunc(et(e.createdAt, 0)),
    color: p,
    radiusModel: _,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Hf(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = jv(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function Vv(e) {
  if (!e || typeof e != "object") return null;
  const t = et(e.u0, null), n = et(e.v0, null), i = et(e.u1, null), a = et(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (d) => Math.max(0, Math.min(1, d)), f = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return f.u1 <= f.u0 || f.v1 <= f.v0 ? null : f;
}
function Hv(e) {
  const t = e || {};
  return {
    du: et(t.du, 0) ?? 0,
    dv: et(t.dv, 0) ?? 0,
    rot_deg: et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, et(t.scale, 1) ?? 1)
  };
}
function Uv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = Vv(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: Hv(e.transform)
  } : null;
}
function Bv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = Uv(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ca(e) {
  const t = Ov();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Fv(e.groups),
    paint: Hf(e.paint, "paint"),
    mask: Hf(e.mask, "mask"),
    raster_objects: Bv(e.raster_objects)
  };
}
function Uf(e = {}) {
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
    hFovDeg: K(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: K(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Bf(e = {}, t = 0) {
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
function Kv(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Ci({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Uf((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, f) => Bf(l, f)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Uf((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, f) => Bf(l, f)).filter(Boolean);
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
function _a(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: K(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: K(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: K(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: K(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function qo(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Wv(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Vr((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(p) {
    var w;
    return JSON.stringify({
      stateRevision: (p == null ? void 0 : p.stateRevision) || "",
      background: (p == null ? void 0 : p.background) || null,
      objects: Array.isArray((w = p == null ? void 0 : p.objectPass) == null ? void 0 : w.objects) ? p.objectPass.objects.map((A) => ({
        id: (A == null ? void 0 : A.id) || "",
        type: (A == null ? void 0 : A.type) || "",
        revision: (A == null ? void 0 : A.revision) || "",
        visible: (A == null ? void 0 : A.visible) !== !1,
        opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
        zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0),
        transform: (A == null ? void 0 : A.transform) || null,
        params: (A == null ? void 0 : A.params) || null
      })) : [],
      overlay: (p == null ? void 0 : p.overlay) || {}
    });
  }
  function f(p = {}) {
    const w = Kv(p), A = l(w);
    return a === A || !n.syncState(w) ? !1 : (i = w, a = A, !0);
  }
  function d(p = {}, w = {}) {
    if (!i) return null;
    const A = _a(p), T = qo(w);
    return n.renderToTarget(t, A, T);
  }
  function m(p, w, A = {}, T = {}) {
    if (!p || !w || !i) return !1;
    const M = _a(A), $ = qo({
      ...T,
      width: Number((w == null ? void 0 : w.w) || (T == null ? void 0 : T.width) || 1),
      height: Number((w == null ? void 0 : w.h) || (T == null ? void 0 : T.height) || 1)
    });
    return n.renderToContext(p, w, M, $);
  }
  function y() {
    var p;
    i = null, a = "", (p = n.clearState) == null || p.call(n);
  }
  function _() {
    var p;
    y(), (p = n.dispose) == null || p.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: f,
    renderFrame: d,
    renderToContext: m,
    snapshotScene: () => i,
    clearScene: y,
    dispose: _
  };
}
function Yv(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function qv(e, t = {}) {
  var m, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = _a((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((m = t == null ? void 0 : t.camera) == null ? void 0 : m.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = qo(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const f = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return Yv(l, f, d);
}
function Xv(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = _a((n == null ? void 0 : n.view) || {}), f = !1, d = 0;
  function m() {
    const w = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), T = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), M = qo({ width: w, height: A, dpr: T });
    return i.width = Math.max(1, Math.round(M.width * M.dpr)), i.height = Math.max(1, Math.round(M.height * M.dpr)), i.style.width = `${M.width}px`, i.style.height = `${M.height}px`, M;
  }
  function y() {
    if (f || !a) return !1;
    const w = m();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...w, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    f || d || (d = requestAnimationFrame(() => {
      d = 0, y();
    }));
  }
  const p = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return p == null || p.observe(t), _(), {
    canvas: i,
    setView(w) {
      l = _a(w || {}), _();
    },
    getView() {
      return { ...l };
    },
    present: y,
    requestRender: _,
    unmount() {
      f = !0, d && cancelAnimationFrame(d), p == null || p.disconnect(), i.remove();
    }
  };
}
function Jv(e = {}) {
  const t = Wv({
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
      return Xv(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: vr(n.shot) } : n;
      return qv(t, i);
    }
  };
}
function Yi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function Zv(e = {}) {
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
function Qv({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: f,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: m
}) {
  var I, C;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", _ = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (R, J) => ({ index: J, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return _;
  const p = ((I = t.find((R) => a(e.paintColor, R.color))) == null ? void 0 : I.id) || "", w = !p, A = l(e.customPaintColor), T = Math.round(Math.max(0, Math.min(1, Number(((C = e.customPaintColor) == null ? void 0 : C.a) ?? 1))) * 100), M = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), $ = e.brushSizes[M] ?? 10, z = m(), F = Array.from({ length: 8 }, (R, J) => e.customPaintHistory[J] || null);
  return {
    ..._,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: p,
    customColorActive: w,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...f(A.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    alphaValue: T,
    alphaText: `${T}%`,
    historyEntries: F.map((R, J) => ({
      index: J,
      color: R ? { cssColor: i(R, 1) } : null
    })),
    sizeValue: $,
    sizeText: String($),
    sizeFill: `${Math.max(0, Math.min(100, ($ - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function e1({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function t1({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: f,
  notes: d,
  visibilityRows: m,
  uiSettings: y,
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
    params: f,
    notes: d,
    paramsDisabled: !i,
    visibilityRows: m,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function n1({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: m,
  isExternalSticker: y,
  isStickerHidden: _,
  canRestoreSelectedToInitial: p,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let A = [];
  if (n.length > 1)
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (i === "stroke")
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], y(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), y(t)) {
      const I = p(), C = _(t);
      A.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: I ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !I
      }), A.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: C ? "Show" : "Hide",
        tip: C ? "Show input image" : "Hide input image",
        icon: C ? w.eye : w.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed }), y(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!m,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((I) => ({ value: I, label: I, active: d === I }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const T = a.corners.map((I) => I.x), M = a.corners.map((I) => I.y), $ = Math.min(...T), z = Math.max(...T), F = Math.max(...M);
  return {
    visible: !0,
    left: ($ + z) * 0.5,
    top: F + 18,
    items: A,
    anchor: { minX: $, maxX: z, maxY: F }
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
}), r1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, i1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: r1(t[2])
})), a1 = {
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
}, Gf = Object.fromEntries(
  Object.entries(a1).map(([e, t]) => [e, {
    name: t.name,
    elements: i1(t.body)
  }])
), vn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = xt(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Gf, i) ? Gf[i] : null;
    });
    return (i, a) => n.value ? (Se(), Pe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ht(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Se(!0), Pe(qe, null, zt(n.value.elements, (l, f) => (Se(), Pe(qe, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${f}`
      }, [
        l.tag === "path" ? (Se(), Pe("path", gr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Se(), Pe("circle", gr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Se(), Pe("rect", gr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Se(), Pe("line", gr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Se(), Pe("polyline", gr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Se(), Pe("polygon", gr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : It("", !0)
      ], 64))), 128))
    ], 2)) : It("", !0);
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
    const t = e, n = xt(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Se(), Ti(v0(e.tag), gr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Ad(() => [
        Ge(vn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, o1 = { class: "pano-floating-right" }, s1 = ["data-settled"], l1 = ["data-ready", "data-settled"], c1 = ["aria-label", "data-tip"], u1 = {
  key: 1,
  class: "pano-camera-preview-label"
}, f1 = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Se(), Pe(qe, null, [
      ae("div", o1, [
        (Se(!0), Pe(qe, null, zt(e.buttons, (i) => (Se(), Ti(jr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ac(ae("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ae("div", {
          class: ht(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: kt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ae("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Se(), Pe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ge(vn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, c1)) : It("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Se(), Pe("div", u1, gt(e.preview.label || "Preview unavailable"), 1)) : It("", !0)
        ], 14, l1)
      ], 8, s1), [
        [fc, e.preview.visible]
      ])
    ], 64));
  }
}, d1 = ["aria-label"], h1 = { class: "pano-canvas-confirm-title" }, p1 = { class: "pano-canvas-confirm-text" }, m1 = { class: "pano-canvas-confirm-actions" }, g1 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, b1 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Io(null), i = /* @__PURE__ */ Io(null);
    let a = null;
    function l() {
      const p = i.value;
      return p ? Array.from(p.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function f(p) {
      const w = i.value;
      if (!w) return;
      const A = w.querySelector(`[data-action='${p}']`);
      A instanceof HTMLButtonElement && A.click();
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
      const T = l()[0] || p;
      (M = T == null ? void 0 : T.focus) == null || M.call(T);
    }
    function m() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(p) {
      var z;
      if (p.defaultPrevented) return;
      if (p.key === "Escape") {
        p.preventDefault(), p.stopPropagation(), f("confirm-cancel");
        return;
      }
      if (p.key !== "Tab") return;
      const w = l(), A = i.value;
      if (!w.length) {
        p.preventDefault(), (z = A == null ? void 0 : A.focus) == null || z.call(A);
        return;
      }
      const T = w[0], M = w[w.length - 1], $ = document.activeElement;
      if (p.shiftKey) {
        ($ === T || $ === A || !(A != null && A.contains($))) && (p.preventDefault(), M.focus());
        return;
      }
      ($ === M || !(A != null && A.contains($))) && (p.preventDefault(), T.focus());
    }
    function _(p) {
      p.target === n.value && f("confirm-cancel");
    }
    return wi(() => t.model.visible, (p, w) => {
      if (p) {
        a = document.activeElement, rc(() => {
          d();
        });
        return;
      }
      w && m();
    }, { immediate: !0 }), sc(() => {
      m();
    }), (p, w) => e.model.visible === !0 ? (Se(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: sh(_, ["self"])
    }, [
      ae("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        ae("div", h1, gt(e.model.title), 1),
        ae("div", p1, gt(e.model.text), 1),
        ae("div", m1, [
          w[0] || (w[0] = ae("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ae("button", g1, gt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, d1)
    ], 512)) : It("", !0);
  }
}, y1 = ["data-paint-pane"], v1 = ["hidden"], _1 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], x1 = ["aria-pressed", "disabled"], w1 = ["hidden"], S1 = { class: "pano-paint-color-pop-head" }, N1 = { class: "pano-paint-color-field" }, M1 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, k1 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, P1 = { class: "pano-paint-color-field" }, A1 = { class: "pano-paint-alpha-wrap" }, C1 = ["value"], T1 = { "data-paint-alpha-value": "" }, I1 = ["hidden"], E1 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, D1 = ["data-paint-history-index", "aria-label", "disabled"], R1 = ["data-paint-footer"], O1 = ["data-paint-group"], F1 = ["hidden"], L1 = ["value", "disabled"], z1 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, $1 = ["hidden"], j1 = {
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
    return (i, a) => (Se(), Pe("div", {
      class: ht(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Se(!0), Pe(qe, null, zt(e.panes, (l) => {
        var f;
        return Se(), Pe("div", {
          key: l.key,
          class: ht(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Se(), Pe("div", {
            key: 0,
            class: ht(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Se(!0), Pe(qe, null, zt(e.paintSwatches, (d) => (Se(), Pe("button", {
              key: d.id,
              class: ht(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: kt(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, _1))), 128)),
            ae("button", {
              class: ht(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: kt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, x1),
            ae("div", {
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
              ae("div", S1, [
                ae("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: kt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ae("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ae("div", N1, [
                ae("div", M1, [
                  ae("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: kt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ae("div", k1, [
                  ae("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: kt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ae("label", P1, [
                a[1] || (a[1] = ae("span", null, "Opacity", -1)),
                ae("div", A1, [
                  ae("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, C1),
                  ae("span", T1, gt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ae("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ae("div", E1, [
                  (Se(!0), Pe(qe, null, zt(e.state.historyEntries || [], (d) => (Se(), Pe("button", {
                    key: d.index,
                    class: ht(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: kt(n(d.color))
                  }, null, 14, D1))), 128))
                ])
              ], 8, I1)
            ], 12, w1)
          ], 10, v1)) : It("", !0),
          ae("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ae("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Se(!0), Pe(qe, null, zt(l.tools, (d) => {
                var m;
                return Se(), Ti(jr, {
                  key: `${l.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((m = e.state.activeTools) == null ? void 0 : m[l.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, O1),
            ae("div", {
              class: ht(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ae("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: kt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, L1),
              ae("span", z1, gt(e.state.sizeText || "10"), 1)
            ], 10, F1),
            ae("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((f = e.state.clearVisible) == null ? void 0 : f[l.key]) ?? !l.clearHidden)
            }, [
              Ge(jr, {
                icon: Rr(De).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, $1)
          ], 8, R1)
        ], 10, y1);
      }), 128))
    ], 2));
  }
}, V1 = {
  key: 0,
  class: "pano-cutout-menu"
}, H1 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, U1 = ["data-aspect"], B1 = ["data-action", "aria-label", "data-tip", "disabled"], G1 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Se(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: kt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Se(!0), Pe(qe, null, zt(e.model.items || [], (i) => (Se(), Pe(qe, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Se(), Pe("div", V1, [
          ae("button", H1, [
            Ge(vn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ae("div", {
            class: ht(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Se(!0), Pe(qe, null, zt(i.choices || [], (a) => (Se(), Pe("button", {
              key: a.value,
              class: ht(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, gt(a.label), 11, U1))), 128))
          ], 2)
        ])) : (Se(), Pe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          Ge(vn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, B1))
      ], 64))), 128))
    ], 4));
  }
}, K1 = {
  class: "pano-side",
  "data-side": ""
}, W1 = { class: "pano-side-head" }, Y1 = { class: "pano-side-title" }, q1 = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, X1 = {
  key: 0,
  class: "pano-side-scroll"
}, J1 = { class: "pano-inspector" }, Z1 = { class: "pano-ui-row pano-coverage-row" }, Q1 = ["data-selected"], e_ = ["aria-pressed", "disabled"], t_ = ["aria-pressed", "disabled"], n_ = {
  key: 0,
  class: "pano-section-title"
}, r_ = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, i_ = {
  class: "pano-picker",
  "data-picker": "selection"
}, a_ = ["disabled"], o_ = { class: "pano-picker-label" }, s_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, l_ = ["hidden"], c_ = ["data-selection-id"], u_ = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, f_ = {
  key: 2,
  class: "pano-state-actions"
}, d_ = ["disabled"], h_ = ["data-key"], p_ = ["min", "max", "step", "value", "disabled", "data-param-key"], m_ = ["min", "max", "step", "value", "disabled", "data-param-key"], g_ = { class: "pano-visibility-section" }, b_ = { class: "pano-visibility-stack" }, y_ = ["data-visibility-row"], v_ = { class: "pano-visibility-name" }, __ = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, x_ = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], w_ = ["open"], S_ = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, N_ = { class: "pano-ui-settings-body" }, M_ = { class: "pano-ui-row" }, k_ = ["data-selected"], P_ = ["aria-pressed"], A_ = ["aria-pressed"], C_ = { class: "pano-ui-row" }, T_ = ["data-selected"], I_ = ["aria-pressed"], E_ = ["aria-pressed"], D_ = { class: "pano-ui-row" }, R_ = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, O_ = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, F_ = { class: "pano-picker-label" }, L_ = ["hidden"], z_ = ["data-quality"], $_ = {
  key: 1,
  class: "pano-side-footer"
}, j_ = ["data-action"], V_ = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = xt(() => {
      const l = t.model;
      return !l || typeof l != "object" ? !1 : Object.keys(l).length > 0 && !!l.coverage;
    });
    function i(l) {
      return { "--v": `${Number((l == null ? void 0 : l.fillPct) || 0)}%` };
    }
    function a(l, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (l == null ? void 0 : l.enabled) === !1;
    }
    return (l, f) => {
      var d, m, y, _, p;
      return Se(), Pe("div", K1, [
        ae("div", W1, [
          ae("div", Y1, [
            ae("span", q1, [
              Ge(vn, {
                icon: Rr(De).globe
              }, null, 8, ["icon"])
            ]),
            ae("span", null, gt(e.nodeTitle), 1)
          ]),
          f[0] || (f[0] = ae("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[13] || (f[13] = ae("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Se(), Pe("div", X1, [
          ae("div", J1, [
            f[12] || (f[12] = ae("div", { class: "pano-section-title" }, [
              ae("span", null, "Scene")
            ], -1)),
            ae("div", Z1, [
              f[1] || (f[1] = ae("label", null, "Coverage", -1)),
              ae("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                ae("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((m = e.model.coverage) == null ? void 0 : m.value) === 360 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "360", 8, e_),
                ae("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "180", 8, t_)
              ], 8, Q1)
            ]),
            e.model.transformTitle !== !1 ? (Se(), Pe("div", n_, [...f[2] || (f[2] = [
              ae("span", null, "Transform", -1)
            ])])) : It("", !0),
            e.model.selectionPicker ? (Se(), Pe("div", r_, [
              ae("label", null, gt(e.model.selectionPicker.label), 1),
              ae("div", i_, [
                ae("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ae("span", o_, [
                    e.model.selectionPicker.currentIcon ? (Se(), Pe("span", s_, [
                      Ge(vn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : It("", !0),
                    ae("span", null, gt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[3] || (f[3] = ae("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, a_),
                ae("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Se(!0), Pe(qe, null, zt(e.model.selectionPicker.items || [], (w) => (Se(), Pe("button", {
                    key: w.id,
                    type: "button",
                    class: ht(["pano-picker-item", { active: w.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": w.id
                  }, [
                    w.icon ? (Se(), Pe("span", u_, [
                      Ge(vn, {
                        icon: w.icon
                      }, null, 8, ["icon"])
                    ])) : It("", !0),
                    ae("span", null, gt(w.label), 1)
                  ], 10, c_))), 128))
                ], 8, l_)
              ])
            ])) : It("", !0),
            e.model.copyStateButton ? (Se(), Pe("div", f_, [
              ae("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ge(vn, {
                  icon: Rr(De).copy
                }, null, 8, ["icon"]),
                ae("span", null, gt(e.model.copyStateButton.label), 1)
              ], 8, d_)
            ])) : It("", !0),
            ae("div", {
              class: ht(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Se(!0), Pe(qe, { key: 0 }, zt(e.model.notes, (w) => (Se(), Pe("div", {
                key: w,
                class: "pano-param-note"
              }, gt(w), 1))), 128)) : (Se(!0), Pe(qe, { key: 1 }, zt(e.model.params || [], (w) => (Se(), Pe("div", {
                key: w.key,
                class: "pano-field",
                "data-key": w.key
              }, [
                ae("label", null, gt(w.label), 1),
                ae("input", {
                  type: "range",
                  min: w.min,
                  max: w.max,
                  step: w.step,
                  value: w.value,
                  disabled: a(w, e.model),
                  style: kt(i(w)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": w.key
                }, null, 12, p_),
                ae("input", {
                  type: "number",
                  min: w.min,
                  max: w.max,
                  step: w.step,
                  value: w.displayValue,
                  disabled: a(w, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": w.key
                }, null, 8, m_)
              ], 8, h_))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Se(), Pe(qe, { key: 3 }, [
              f[5] || (f[5] = ae("div", { class: "pano-divider" }, null, -1)),
              ae("div", g_, [
                f[4] || (f[4] = ae("div", { class: "pano-section-title" }, [
                  ae("span", null, "Layers")
                ], -1)),
                ae("div", b_, [
                  (Se(!0), Pe(qe, null, zt(e.model.visibilityRows, (w) => (Se(), Pe("div", {
                    key: w.key,
                    class: ht(["pano-visibility-row", { "is-hidden": w.visible === !1, "is-disabled": w.enabled === !1 }]),
                    "data-visibility-row": w.key
                  }, [
                    ae("span", v_, [
                      ae("span", __, [
                        Ge(vn, {
                          icon: w.icon
                        }, null, 8, ["icon"])
                      ]),
                      ae("span", null, gt(w.label), 1)
                    ]),
                    ae("button", {
                      class: ht(["pano-visibility-toggle", { active: w.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": w.key,
                      "aria-label": w.ariaLabel,
                      "aria-pressed": w.visible === !0 ? "true" : "false",
                      "data-tip": w.tip,
                      disabled: w.enabled === !1
                    }, [
                      Ge(vn, {
                        icon: w.visible === !0 ? Rr(De).eye : Rr(De).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, x_)
                  ], 10, y_))), 128))
                ])
              ])
            ], 64)) : It("", !0),
            e.model.uiSettings ? (Se(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ae("summary", null, [
                f[6] || (f[6] = ae("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ae("span", S_, [
                  Ge(vn, {
                    icon: Rr(De).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ae("div", N_, [
                ae("div", M_, [
                  f[7] || (f[7] = ae("label", null, "Drag X", -1)),
                  ae("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ae("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, P_),
                    ae("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, A_)
                  ], 8, k_)
                ]),
                ae("div", C_, [
                  f[8] || (f[8] = ae("label", null, "Drag Y", -1)),
                  ae("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ae("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, I_),
                    ae("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, E_)
                  ], 8, T_)
                ]),
                ae("div", D_, [
                  f[10] || (f[10] = ae("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ae("div", R_, [
                    ae("button", O_, [
                      ae("span", F_, gt(e.model.uiSettings.qualityLabel), 1),
                      f[9] || (f[9] = ae("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ae("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Se(!0), Pe(qe, null, zt(e.model.uiSettings.qualityOptions || [], (w) => (Se(), Pe("button", {
                        key: w.value,
                        type: "button",
                        class: ht(["pano-picker-item", { active: w.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": w.value
                      }, gt(w.label), 11, z_))), 128))
                    ], 8, L_)
                  ])
                ]),
                f[11] || (f[11] = ae("div", { class: "pano-ui-row" }, [
                  ae("span"),
                  ae("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, w_)) : It("", !0)
          ])
        ])) : It("", !0),
        (e.model.footerButtons || []).length ? (Se(), Pe("div", $_, [
          (Se(!0), Pe(qe, null, zt(e.model.footerButtons, (w) => (Se(), Pe("button", {
            key: w.action,
            class: ht(["pano-btn", { "pano-btn-primary": w.primary === !0 }]),
            type: "button",
            "data-action": w.action
          }, gt(w.label), 11, j_))), 128))
        ])) : It("", !0)
      ]);
    };
  }
}, H_ = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Se(), Pe("div", {
      class: ht(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: kt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, gt(e.model.text || ""), 7));
  }
}, U_ = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, B_ = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Se(), Pe("div", U_, [
      (Se(!0), Pe(qe, null, zt(e.buttons, (i) => ac((Se(), Ti(jr, {
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
        [fc, i.visible !== !1]
      ])), 128))
    ]));
  }
}, G_ = ["data-video-ready"], K_ = { class: "pano-video-transport-shell" }, W_ = { class: "pano-video-controls-left" }, Y_ = { class: "pano-video-filmstrip" }, q_ = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, X_ = ["src", "onLoad"], J_ = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Z_ = ["max", "value", "disabled"], Q_ = { class: "pano-video-controls-right" }, ex = ["data-has-audio"], tx = { class: "pano-video-volume-pop" }, nx = ["value", "disabled"], rx = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = xt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? "Pause" : "Play";
    }), i = xt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? "Pause video" : "Play video";
    }), a = xt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? De.pause : De.play;
    }), l = xt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? "Enable loop" : "Disable loop";
    }), f = xt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), d = xt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? De.loop_off : De.loop;
    }), m = xt(() => {
      var R, J;
      return ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((J = t.state) == null ? void 0 : J.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), y = xt(() => {
      var R, J, ne;
      return ((R = t.state) == null ? void 0 : R.hasAudio) !== !0 ? De.volume : ((J = t.state) == null ? void 0 : J.muted) === !0 || Number(((ne = t.state) == null ? void 0 : ne.volume) ?? 1) <= 0 ? De.volume_muted : De.volume2;
    }), _ = xt(() => {
      var R;
      return Math.max(0, Math.min(100, Number(((R = t.state) == null ? void 0 : R.progressPct) || 0)));
    }), p = xt(() => ({ left: `${_.value}%` })), w = xt(() => {
      var te, xe;
      const R = (te = t.state) == null ? void 0 : te.volumePct, J = Number(((xe = t.state) == null ? void 0 : xe.volume) ?? 1) * 100, ne = Number(R ?? J ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, ne))}%`
      };
    }), A = xt(() => {
      var ne, te;
      const J = [
        String(((ne = t.state) == null ? void 0 : ne.currentTimeLabel) || "0:00"),
        String(((te = t.state) == null ? void 0 : te.durationLabel) || "0:00")
      ].reduce((xe, P) => Math.max(xe, P.length), 4);
      return `${Math.max(4, J)}ch`;
    }), T = xt(() => ({ "--pano-video-time-ch": A.value })), M = xt(() => {
      var ne, te;
      const R = Array.isArray((ne = t.state) == null ? void 0 : ne.thumbnails) ? t.state.thumbnails : [];
      if (R.length) return R;
      const J = Math.max(7, Number(((te = t.state) == null ? void 0 : te.thumbnailCount) || 9));
      return Array.from({ length: J }, (xe, P) => ({
        id: `placeholder-${P}`,
        src: "",
        label: ""
      }));
    }), $ = /* @__PURE__ */ Io(/* @__PURE__ */ new Set()), z = (R) => String((R == null ? void 0 : R.id) || (R == null ? void 0 : R.src) || (R == null ? void 0 : R.label) || ""), F = (R) => $.value.has(z(R)), I = (R) => {
      const J = new Set($.value);
      J.add(z(R)), $.value = J;
    };
    wi(M, (R) => {
      const J = new Set(R.map(z)), ne = /* @__PURE__ */ new Set();
      for (const te of $.value)
        J.has(te) && ne.add(te);
      $.value = ne;
    }, { immediate: !0 });
    const C = xt(() => {
      var R;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((R = t.state) == null ? void 0 : R.shellMaxWidthPx) || 640))}px`
      };
    });
    return (R, J) => (Se(), Pe("div", {
      class: ht(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: kt(C.value)
    }, [
      J[1] || (J[1] = ae("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ae("div", K_, [
        ae("div", W_, [
          Ge(jr, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ae("div", {
            class: "pano-video-time pano-video-time-start",
            style: kt(T.value)
          }, gt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ae("div", Y_, [
          ae("div", q_, [
            (Se(!0), Pe(qe, null, zt(M.value, (ne) => (Se(), Pe("div", {
              key: z(ne),
              class: ht(["pano-video-thumb", {
                "is-placeholder": !ne.src,
                "is-loaded": ne.src && F(ne)
              }])
            }, [
              ne.src ? (Se(), Pe("img", {
                key: 0,
                src: ne.src,
                alt: "",
                draggable: "false",
                onLoad: (te) => I(ne)
              }, null, 40, X_)) : (Se(), Pe("span", J_))
            ], 2))), 128))
          ]),
          ae("div", {
            class: "pano-video-playhead",
            style: kt(p.value),
            "aria-hidden": "true"
          }, [...J[0] || (J[0] = [
            ae("span", { class: "pano-video-playhead-line" }, null, -1),
            ae("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ae("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, Z_)
        ]),
        ae("div", Q_, [
          ae("div", {
            class: "pano-video-time pano-video-time-end",
            style: kt(T.value)
          }, gt(e.state.durationLabel || "0:00"), 5),
          Ge(jr, {
            "extra-class": "pano-video-control",
            icon: d.value,
            label: l.value,
            tip: f.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ae("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ae("div", tx, [
              ae("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: kt(w.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, nx)
            ]),
            Ge(jr, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: m.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, ex)
        ])
      ])
    ], 14, G_));
  }
}, ix = { class: "pano-floating-top" }, ax = ["data-selected", "data-view-count"], ox = ["data-view", "aria-pressed", "aria-label", "disabled"], sx = { class: "label" }, lx = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Se(), Pe("div", ix, [
        ae("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Se(!0), Pe(qe, null, zt(e.buttons, (a) => ac((Se(), Pe("button", {
            key: a.key,
            class: ht(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            Ge(vn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ae("span", sx, gt(a.label), 1)
          ], 10, ox)), [
            [fc, a.visible !== !1]
          ])), 128))
        ], 8, ax)
      ]);
    };
  }
};
function Oh(e = "stickers") {
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
const cx = ["aria-label"], ux = { class: "pano-stage-wrap" }, fx = {
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
    let a = "", l = !1, f = null;
    const d = /* @__PURE__ */ Io(null), m = xt(() => n.readOnly === !0), y = xt(() => n.shellPreset || Oh(n.type)), _ = xt(() => {
      var I;
      const F = Array.isArray((I = y.value) == null ? void 0 : I.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return m.value && F.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: De.fullscreen
      }), F;
    });
    function p() {
      const F = d.value;
      return F ? Array.from(F.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((I) => I instanceof HTMLElement ? !I.hidden && I.tabIndex >= 0 && I.offsetParent !== null : !1) : [];
    }
    function w() {
      var C;
      const I = p()[0] || d.value;
      (C = I == null ? void 0 : I.focus) == null || C.call(I);
    }
    function A() {
      var F;
      f != null && f.isConnected && ((F = f.focus) == null || F.call(f)), f = null;
    }
    function T(F) {
      var I, C, R, J;
      if (!F.defaultPrevented) {
        if (F.key === "Tab") {
          const ne = p();
          if (!ne.length) {
            F.preventDefault(), (C = (I = d.value) == null ? void 0 : I.focus) == null || C.call(I);
            return;
          }
          const te = ne[0], xe = ne[ne.length - 1], P = document.activeElement;
          if (F.shiftKey) {
            (P === te || P === d.value || !((R = d.value) != null && R.contains(P))) && (F.preventDefault(), xe.focus());
            return;
          }
          (P === xe || !((J = d.value) != null && J.contains(P))) && (F.preventDefault(), te.focus());
          return;
        }
        F.key === "Escape" && i("close");
      }
    }
    function M() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function $() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function z(F) {
      document.removeEventListener("keydown", T), F ? (f || (f = document.activeElement), M(), document.addEventListener("keydown", T), rc(() => {
        w();
      })) : ($(), A());
    }
    return Rd(() => {
      z(n.open);
    }), sc(() => {
      $(), document.removeEventListener("keydown", T), A();
    }), wi(() => n.open, (F) => {
      z(F);
    }), (F, I) => e.open ? (Se(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: I[0] || (I[0] = sh((C) => i("close"), ["self"]))
    }, [
      ae("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ae("div", ux, [
          I[1] || (I[1] = J0('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          m.value ? It("", !0) : (Se(), Pe(qe, { key: 0 }, [
            Ge(B_, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ge(j1, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ge(rx, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Ge(lx, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ge(f1, {
            buttons: e.uiState.floatingButtons || _.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ge(G1, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ge(H_, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ge(b1, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? It("", !0) : (Se(), Ti(V_, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, cx)
    ])) : It("", !0);
  }
}, Xo = "state_json", Ir = "sticker_image_1", gl = "external_image", bl = "pano_sticker_input_images", Co = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Tt = Math.PI / 180, br = 180 / Math.PI, Jo = 24, dx = 4, hx = 4, lo = /* @__PURE__ */ new Map(), Kf = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), px = 12;
function Ft(e) {
  return Number(e) === 180 ? 180 : 360;
}
function mx(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function gx(e) {
  return 1 - Math.pow(1 - e, 3);
}
function bx(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = yr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (yr.delete(t), yr.set(t, n), n);
}
function yx(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (yr.delete(n), yr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); yr.size > px; ) {
      const a = yr.keys().next().value;
      if (!a) break;
      yr.delete(a);
    }
}
function vx(e) {
  return e * e * e;
}
function $n(e, t, n) {
  return { x: e, y: t, z: n };
}
function uo(e, t) {
  return $n(e.x + t.x, e.y + t.y, e.z + t.z);
}
function fo(e, t) {
  return $n(e.x * t, e.y * t, e.z * t);
}
function Pn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ho(e, t) {
  return $n(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function di(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return $n(e.x / t, e.y / t, e.z / t);
}
function En(e, t) {
  const n = e * Tt, i = t * Tt, a = Math.cos(i);
  return $n(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function po(e) {
  return {
    yaw: Lt(Math.atan2(e.x, e.z) * br),
    pitch: K(Math.asin(K(e.y, -1, 1)) * br, -90, 90)
  };
}
function qn(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, f = t[i].y, d = t[a].x, m = t[a].y;
    f > e.y != m > e.y && e.x < (d - l) * (e.y - f) / (m - f || 1e-6) + l && (n = !n);
  }
  return n;
}
function pr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function yl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), f = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return pr(e, t);
  const m = K((l * i + f * a) / d, 0, 1), y = Number(t.x || 0) + i * m, _ = Number(t.y || 0) + a * m, p = Number(e.x || 0) - y, w = Number(e.y || 0) - _;
  return p * p + w * w;
}
function Xn(e, t, n) {
  return e + (t - e) * n;
}
function Dn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${K(n, 0, 1)})`;
}
function _x(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let mo = { fillStyle: "", url: "" };
function xx(e, t, n) {
  if (mo.url && mo.fillStyle === String(e || ""))
    return mo.url;
  const i = _x(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Jo}" height="${Jo}" viewBox="0 0 24 24" fill="none">
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
    r: K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: K(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Ut(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function wx(e) {
  return Co.some((t) => To(e, t.color));
}
function vl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = K(Number(t), 0, 1), l = K(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const f = Math.floor(i * 6), d = i * 6 - f, m = l * (1 - a), y = l * (1 - d * a), _ = l * (1 - (1 - d) * a);
  switch (f % 6) {
    case 0:
      return { r: l, g: _, b: m };
    case 1:
      return { r: y, g: l, b: m };
    case 2:
      return { r: m, g: l, b: _ };
    case 3:
      return { r: m, g: y, b: l };
    case 4:
      return { r: _, g: m, b: l };
    default:
      return { r: l, g: m, b: y };
  }
}
function _l(e) {
  const t = K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), f = a - l;
  let d = 0;
  f > 1e-6 && (a === t ? d = ((n - i) / f + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / f + 2) / 6 : d = ((t - n) / f + 4) / 6);
  const m = a <= 1e-6 ? 0 : f / a;
  return { h: d, s: m, v: a };
}
function Sx(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Wf(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Nx(e, t) {
  const n = Wf(e, 1), i = Wf(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), f = Math.max(1, Math.round(i * a)), d = (p, w) => w ? d(w, p % w) : p, m = d(l, f) || 1, y = Math.max(1, Math.round(l / m)), _ = Math.max(1, Math.round(f / m));
  return `${y}:${_}`;
}
function ea(e) {
  const t = K(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Tt, n = K(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Tt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Mx(e) {
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
  const t = ea(e);
  return Mx(t) || Nx(t, 1);
}
function Fh(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Or(t), t;
}
function qi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Or(e);
}
let go = null;
function kx() {
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
const Lh = "pano_suite.ui_settings.v1", zh = "pano_suite.node_grid_visibility.v1";
let bi = null, Rn = null, bo = { text: null, parsed: null };
function ua(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Px() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Lh)) || "").trim();
    if (!t) return bi ? ua(bi) : null;
    const n = JSON.parse(t), i = ua(n);
    return bi = i, i;
  } catch {
    return bi ? ua(bi) : null;
  }
}
function Ax(e) {
  var n;
  const t = ua(e);
  bi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Lh, JSON.stringify(t));
  } catch {
  }
  return t;
}
function $h() {
  var e;
  if (Rn && typeof Rn == "object")
    return Rn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(zh)) || "").trim();
    if (!t)
      return Rn = {}, Rn;
    const n = JSON.parse(t);
    return Rn = n && typeof n == "object" ? n : {}, Rn;
  } catch {
    return Rn = {}, Rn;
  }
}
function Cx(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = $h()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Tx(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = $h();
  i[n] = !!t, Rn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(zh, JSON.stringify(i));
  } catch {
  }
}
function Ix(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Ex(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Dx(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Yf(e) {
  const { paintCount: t, maskCount: n } = Dx(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, l = 0;
  return i.forEach((f) => {
    String((f == null ? void 0 : f.layerKind) || "paint") === "mask" ? l += 1 : a += 1;
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
function qf(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Rx(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Fh(t)) : [];
}
function Ox(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Px(), l = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ft(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: ca(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, f = String(e || "").trim();
  if (!f) return l;
  try {
    let d = null;
    if (bo.text === f ? d = bo.parsed : (d = JSON.parse(f), bo = { text: f, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return l;
    const m = {
      ...l,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Ix(d.assets),
      stickers: Ex(d.stickers),
      shots: Rx(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ca(d.painting),
      painting_layer: d.painting_layer && typeof d.painting_layer == "object" ? d.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(d.ui_settings && d.ui_settings.invert_view_x),
        invert_view_y: !!(d.ui_settings && d.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const y = String(((_ = d.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: d.active && typeof d.active == "object" ? { ...d.active } : { ...l.active }
    };
    return a && (m.ui_settings = ua({ ...m.ui_settings, ...a })), m.output_preset = Gl(t, Number(m.output_preset || l.output_preset)), m.bg_color = String(n || m.bg_color || l.bg_color), m.coverage = Ft(i), delete m.editor_history, m;
  } catch {
    return bo = { text: f, parsed: null }, l;
  }
}
function _n(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function xc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = _n(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var l, f, d, m, y, _, p, w, A, T;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || f.call(l), (m = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || m.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (p = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || p.call(_, !0, !0), (T = (A = (w = hn) == null ? void 0 : w.canvas) == null ? void 0 : A.setDirty) == null || T.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Fx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Xf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Lx(e) {
  var A, T, M, $, z;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = _n(e, "coverage"), n = _n(e, "bg_color"), i = _n(e, Xo), a = _n(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const l = String(t.value ?? "").trim(), f = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && Fx(l) && (Xf(f) || f === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Xf(f))
    try {
      const F = JSON.parse(f);
      y = String(Ft(F == null ? void 0 : F.coverage));
    } catch {
      y = "360";
    }
  const _ = l, p = f, w = d;
  t.value = y, (A = t.callback) == null || A.call(t, y), n.value = _, (T = n.callback) == null || T.call(n, _), i.value = p, (M = i.callback) == null || M.call(i, p), a && (a.value = w, ($ = a.callback) == null || $.call(a, w)), (z = e.setDirtyCanvas) == null || z.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function zx(e, t) {
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
function $x(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, f;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (f = i.parentEl) != null && f.style && (i.parentEl.style.display = "none")));
  });
}
function Bl(e, t, n) {
  var l, f;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (l = a.element) != null && l.style && (a.element.style.display = ""), (f = a.parentEl) != null && f.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Gl(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function jh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function jx(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Vh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Vx(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const f = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = f ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(f.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = jx(e == null ? void 0 : e.graph, n)), i;
}
function xa(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = Qt) == null ? void 0 : a.apiURL) == "function" ? Qt.apiURL(i) : i;
}
function Hx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Ux(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Bx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Hh(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Hx(t)) return [t];
  const { filename: n, subfolder: i } = Ux(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => xa({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Bx([...a, t]);
}
function Gx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? xa({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function fa(e) {
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
      return xa({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = Kr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : xa(e);
}
function Kx(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const l of n)
    !Array.isArray(l) || !l.length || (t >= 0 && t < l.length && i.push(l[t]), i.push(...l));
  return i;
}
function xl(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = Kr(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function Jf(e, t, n, i = null) {
  var p;
  const a = fa(e == null ? void 0 : e.id), l = Array.isArray((p = a == null ? void 0 : a.ui) == null ? void 0 : p[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], f = Array.isArray(l) && l.length ? l[0] : null, d = Kr(f);
  if (!d) return null;
  const m = `__ui__${t}`, y = n.get(m);
  if (y && y.__panoSrc === d) return y;
  const _ = new Image();
  return _.__panoSrc = d, _.onload = () => {
    typeof i == "function" && i(_);
  }, _.src = d, n.set(m, _), _;
}
function Wx(e, t) {
  var F, I;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((C) => String((C == null ? void 0 : C.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const l = i[a], f = l == null ? void 0 : l.link;
  if (f == null) return { src: "", sourceType: "", inputName: n };
  const d = jh(e.graph, f), { originId: m, originSlot: y } = Vh(d);
  if (m == null) return { src: "", sourceType: "", inputName: n };
  const _ = Vx(e, a, m), p = Number(y || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((F = hn) == null ? void 0 : F.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(_) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const C = [];
    p >= 0 && p < w.length && C.push(w[p]), C.push(...w);
    const R = xl(C);
    if (R.length) return { src: R[0], srcCandidates: R, sourceType: "appNodeImageUrls", inputName: n };
  }
  const A = fa((_ == null ? void 0 : _.id) ?? m), T = Kx(A, p), M = xl(T);
  if (M.length) return { src: M[0], srcCandidates: M, sourceType: "nodeOutputs", inputName: n };
  const $ = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if ($.length) {
    const C = [];
    p >= 0 && p < $.length && C.push($[p]), C.push(...$);
    const R = xl(C);
    if (R.length) return { src: R[0], srcCandidates: R, sourceType: "nodeImgs", inputName: n };
  }
  const z = (I = _ == null ? void 0 : _.widgets) == null ? void 0 : I.find((C) => String((C == null ? void 0 : C.name) || "").toLowerCase() === "image");
  if (z) {
    let C = Kr(z.value);
    if (C && !C.includes("/") && !C.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (C = Qt.apiURL(`/view?filename=${encodeURIComponent(C)}&type=input&subfolder=`)), C) return { src: C, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Yx(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const l = Hh(a);
  if (!l.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = String(t || "image"), d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === a && d.img) return d.img;
  const m = new Image(), y = { srcRaw: a, resolvedSrc: "", img: m };
  e.__panoLinkedInputImageCache.set(f, y);
  let _ = -1;
  const p = () => {
    var A, T;
    if (_ += 1, _ >= l.length) {
      try {
        (T = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || T.call(A, f);
      } catch {
      }
      return;
    }
    const w = l[_];
    y.resolvedSrc = w, m.src = w;
  };
  return m.onload = () => {
    var w;
    i == null || i(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, m.onerror = () => {
    var w, A;
    if (_ + 1 < l.length) {
      p();
      return;
    }
    try {
      (A = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || A.call(w, f);
    } catch {
    }
  }, p(), m;
}
function qx(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((T) => String(T || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(t || "image"), f = a.join(`
`), d = e.__panoLinkedInputImageCache.get(l);
  if (d && d.srcRaw === f && d.img) return d.img;
  const m = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((T) => {
    Hh(T).forEach((M) => {
      const $ = String(M || "").trim();
      !$ || y.has($) || (y.add($), m.push($));
    });
  }), !m.length) return null;
  const _ = new Image(), p = { srcRaw: f, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(l, p);
  let w = -1;
  const A = () => {
    var M, $;
    if (w += 1, w >= m.length) {
      try {
        ($ = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || $.call(M, l);
      } catch {
      }
      return;
    }
    const T = m[w];
    p.resolvedSrc = T, _.src = T;
  };
  return _.onload = () => {
    var T;
    i == null || i(), (T = e.setDirtyCanvas) == null || T.call(e, !0, !0);
  }, _.onerror = () => {
    var T, M;
    if (w + 1 < m.length) {
      A();
      return;
    }
    try {
      (M = (T = e.__panoLinkedInputImageCache) == null ? void 0 : T.delete) == null || M.call(T, l);
    } catch {
    }
  }, A(), _;
}
function Uh(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = Wx(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function wl(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], l = Uh(e, a), f = String(i || a.join("|") || "image_exact"), d = Array.isArray(l == null ? void 0 : l.srcCandidates) ? l.srcCandidates : [];
  if (d.length) return qx(e, f, d, n);
  const m = String((l == null ? void 0 : l.src) || "").trim();
  return m ? Yx(e, f, m, n) : null;
}
async function da(e, t, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, f = zx(e, t);
  await kx();
  const d = _n(e, "output_preset"), m = _n(e, "coverage"), y = _n(e, "bg_color"), _ = _n(e, Xo), p = Ox(
    String((_ == null ? void 0 : _.value) || ""),
    Gl(d == null ? void 0 : d.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Ft(m == null ? void 0 : m.value)
  );
  e.__panoLiveStateOverride = p, e.__panoLiveStateVersion = 0, t === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(p.shots) ? p.shots : [], o = String(((s = p == null ? void 0 : p.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((c) => String((c == null ? void 0 : c.id) || "") === o) || r[0] || null;
  })() : null, A = w ? Xc(w, !1) : { width: 220, height: 132 }, T = Oh(t), M = /* @__PURE__ */ is({
    viewButtons: (T.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (T.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(T.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: De.fullscreen, disabled: !1 }] : []
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
      width: A.width,
      height: A.height,
      label: w ? "Loading preview" : "Add Frame to preview"
    }
  }), $ = document.createElement("div");
  document.body.appendChild($);
  const z = Db(fx, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: f,
    shellPreset: T,
    paintSwatches: Co.map((r) => ({
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
    z.mount($);
  } catch (r) {
    try {
      z.unmount();
    } catch {
    }
    throw $.remove(), r;
  }
  const F = $.querySelector(".pano-modal-overlay"), I = $.querySelector(".pano-modal"), C = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), R = I == null ? void 0 : I.querySelector("[data-stage-background]"), J = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!F || !I || !C || !R || !J)
    throw z.unmount(), $.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ne = document.createElement("div");
  ne.setAttribute("aria-hidden", "true"), ne.style.position = "absolute", ne.style.left = "0", ne.style.top = "0", ne.style.pointerEvents = "none", ne.style.zIndex = "12", ne.style.display = "none", ne.style.willChange = "transform,width,height,background,border-radius", J == null || J.appendChild(ne);
  const te = document.createElement("div");
  te.className = "pano-paint-size-preview", te.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", te.appendChild(xe), J == null || J.appendChild(te);
  const P = C.getContext("2d"), de = Vr(), ue = t === "cutout" ? Jv({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ce = I.querySelector("[data-side]"), j = I.querySelector("[data-video-element]"), se = I.querySelector(".pano-floating-right"), be = I.querySelector("[data-selection-menu]"), ge = I.querySelector("[data-tooltip]"), X = I.querySelector("[data-camera-preview-host]"), ve = I.querySelector("[data-paint-color-row]"), Me = I.querySelector("[data-paint-color-pop]"), Re = I.querySelector("[data-paint-color-sv]"), Ve = I.querySelector("[data-paint-color-sv-cursor]"), ot = I.querySelector("[data-paint-hue-strip]"), Nt = I.querySelector("[data-paint-hue-handle]");
  let wt = 0, pt = 0;
  J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", R.style.opacity = "0", a && (ce == null || ce.remove(), I.classList.add("pano-modal-readonly"));
  const Yt = () => {
    if (!u.customPaintSessionStart) return;
    if (To(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (wx(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const r = [
      dn(u.customPaintColor),
      ...u.customPaintHistory.filter((o) => !To(o, u.customPaintColor))
    ];
    u.customPaintHistory = r.slice(0, 8), u.customPaintSessionStart = null;
  }, qt = (r = !1) => {
    !Me || Me.hidden || (r ? Yt() : u.customPaintSessionStart = null, Me.hidden = !0, M.paintDock.colorPopOpen = !1);
  }, gn = () => {
    Me && (Me.hidden && (u.customPaintSessionStart = dn(u.customPaintColor)), Me.hidden = !1, M.paintDock.colorPopOpen = !0);
  };
  I.addEventListener("pointerdown", (r) => {
    Wa(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), qt(!0), t === "cutout" && u.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, Ue(), pe())));
  });
  const sn = t === "stickers" ? p.active.selected_sticker_id : p.active.selected_shot_id, Un = JSON.stringify(qf(p)), u = {
    mode: "pano",
    selectedId: sn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Ft(p.coverage),
    historyController: Rv(80, { entries: [Un], index: 0 }),
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
    showGrid: Cx(e == null ? void 0 : e.id, !0),
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
  }, O = ue && X ? ue.mount(X, { shot: null }) : null;
  t === "stickers" && (u.selectedId = null, p.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const Z = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), W = document.createElement("canvas");
  W.__panoFrameIdx = 0;
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
  }, ee = (r) => {
    const o = String(r || "default");
    C.style.cursor !== o && (C.style.cursor = o);
  }, q = {
    timer: 0,
    target: null
  }, he = {
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
  }, _e = 4, Ne = 9, Ae = [];
  let Ee = 0;
  const ze = () => {
    var S, k;
    const r = (S = J == null ? void 0 : J.getBoundingClientRect) == null ? void 0 : S.call(J), o = (k = se == null ? void 0 : se.getBoundingClientRect) == null ? void 0 : k.call(se), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), c = o ? Math.max(0, Number(o.width || 0)) : 0, v = c > 0 ? c + 14 + 12 : 72, b = Math.max(280, Math.floor(s - v * 2)), x = u.fullscreen ? Math.min(1200, b) : b;
    M.videoTransport.shellMaxWidthPx = x;
  }, Qe = () => {
    Ee || (Ee = window.requestAnimationFrame(() => {
      Ee = 0, ze();
    }));
  }, ct = () => {
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
  }, Xe = typeof ResizeObserver < "u" ? new ResizeObserver(() => Qe()) : null;
  Xe == null || Xe.observe(J), se && (Xe == null || Xe.observe(se)), Ae.push(() => {
    var r;
    Ee && (window.cancelAnimationFrame(Ee), Ee = 0), (r = Xe == null ? void 0 : Xe.disconnect) == null || r.call(Xe);
  }), Qe();
  const ln = () => {
    V.thumbnailJobId += 1, V.thumbnailSrc = "", M.videoTransport.thumbnails = [], M.videoTransport.thumbnailCount = Ne;
  }, bt = async (r, o, s) => {
    const c = String(r || "").trim();
    if (!c) {
      ln();
      return;
    }
    const h = bx(c);
    if (h) {
      V.thumbnailSrc = c, M.videoTransport.thumbnails = h.thumbnails, M.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (V.thumbnailSrc === c && Array.isArray(M.videoTransport.thumbnails) && M.videoTransport.thumbnails.length)
      return;
    const g = ++V.thumbnailJobId;
    V.thumbnailSrc = c, M.videoTransport.thumbnails = [], M.videoTransport.thumbnailCount = Ne;
    const v = document.createElement("video");
    if (v.preload = "auto", v.muted = !0, v.playsInline = !0, v.crossOrigin = "anonymous", !await new Promise((re) => {
      let fe = !1;
      const ie = (me) => {
        fe || (fe = !0, re(me));
      };
      v.addEventListener("loadedmetadata", () => ie(!0), { once: !0 }), v.addEventListener("canplay", () => ie(!0), { once: !0 }), v.addEventListener("error", () => ie(!1), { once: !0 }), v.src = c, v.load();
    }) || V.thumbnailJobId !== g) return;
    const x = Math.max(1, Number(v.videoWidth || 0)), S = Math.max(1, Number(v.videoHeight || 0));
    if (x < 1 || S < 1) return;
    const k = Math.max(0, Number(v.duration || o || 0)), N = document.createElement("canvas"), D = 46, L = Math.max(72, Math.round(x / S * D));
    N.width = L, N.height = D;
    const Q = N.getContext("2d");
    if (!Q) return;
    const H = [], G = (re) => new Promise((fe) => {
      let ie = !1;
      const me = () => {
        ie || (ie = !0, fe());
      };
      v.addEventListener("seeked", me, { once: !0 }), v.addEventListener("error", me, { once: !0 });
      try {
        v.currentTime = re;
      } catch {
        me();
      }
    });
    for (let re = 0; re < Ne; re += 1) {
      if (V.thumbnailJobId !== g) return;
      const fe = re / (Ne - 1), ie = k > 0 ? Math.max(0, Math.min(k - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), k * fe)) : 0;
      if (await G(ie), V.thumbnailJobId !== g) return;
      Q.clearRect(0, 0, L, D), Q.drawImage(v, 0, 0, L, D), H.push({
        id: `thumb-${re}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: ie,
        label: Ss(ie)
      });
    }
    V.thumbnailJobId === g && (M.videoTransport.thumbnails = H, M.videoTransport.thumbnailCount = H.length || Ne, yx(c, {
      thumbnails: H,
      thumbnailCount: H.length || Ne,
      duration: k,
      fps: s
    }));
  }, $t = (r) => {
    const o = Math.max(1, Number(M.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, cn = (r) => {
    if (!(j instanceof HTMLVideoElement) || Number(j.videoWidth || 0) < 1 || Number(j.videoHeight || 0) < 1) return null;
    const o = Number(j.videoWidth || 0), s = Number(j.videoHeight || 0), c = document.createElement("canvas");
    c.width = o, c.height = s, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const h = c.getContext("2d");
    if (!h) return null;
    for (h.drawImage(j, 0, 0, o, s), V.frameCache.set(r, c), V.frameCacheOrder = V.frameCacheOrder.filter((g) => g !== r), V.frameCacheOrder.push(r); V.frameCacheOrder.length > _e; ) {
      const g = V.frameCacheOrder.shift();
      g != null && V.frameCache.delete(g);
    }
    return c;
  }, Ma = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), c = Number(r.height || 0);
    if (s < 1 || c < 1) return !1;
    (W.width !== s || W.height !== c) && (W.width = s, W.height = c);
    const h = W.getContext("2d");
    return h ? (h.clearRect(0, 0, s, c), h.drawImage(r, 0, 0, s, c), W.__panoFrameIdx = Number(W.__panoFrameIdx || 0) + 1, o != null && (V.presentedTime = Number(o || 0)), !0) : !1;
  }, Ii = (r) => {
    const o = $t(r), s = V.frameCache.get(o) || null;
    return s ? (V.currentFrameNumber = o, Ma(s, r)) : !1;
  };
  if (Ae.push(() => {
    ln();
  }), j instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof j.requestVideoFrameCallback != "function" || j.__panoFramePumpActive) return;
      j.__panoFramePumpActive = !0;
      const b = (x, S) => {
        j.__panoFramePumpActive = !1;
        const k = Number((S == null ? void 0 : S.mediaTime) ?? j.currentTime ?? 0), N = $t(k), D = ct();
        V.mode === "scrub" ? Math.abs(k - Number(V.editorTime || 0)) <= D && (cn(N), Ii(V.editorTime), U.backgroundDirty = !0, U.dirty = !0, Tn({
          ready: !0,
          playing: !1,
          visible: Gn(),
          currentTime: V.editorTime,
          duration: M.videoTransport.duration,
          frameCount: M.videoTransport.frameCount,
          fps: M.videoTransport.fps,
          mode: "scrub"
        }), pe({ cause: "frame_view", localOnly: !0 })) : (V.editorTime = k, V.presentedTime = k, V.requestedTime = null, V.currentFrameNumber = N, cn(N), V.frameCounter += 1, j.dataset.panoFrameIdx = String(V.frameCounter), U.backgroundDirty = !0, U.dirty = !0, Tn({
          ready: !0,
          playing: !j.paused && !j.ended,
          visible: Gn(),
          currentTime: k,
          duration: M.videoTransport.duration,
          frameCount: M.videoTransport.frameCount,
          fps: M.videoTransport.fps,
          mode: "playback"
        }), pe({ cause: "frame_view", localOnly: !0 })), U.running && (!j.paused || V.mode === "scrub") && r();
      };
      try {
        j.requestVideoFrameCallback(b);
      } catch {
        j.__panoFramePumpActive = !1;
      }
    }, o = () => {
      V.pendingPlaybackResume && (V.pendingPlaybackResume = !1, V.mode = "playback", V.requestedTime = null, Qr() && (U.backgroundDirty = !0, U.dirty = !0), j.play().catch(() => {
      }));
    }, s = () => {
      V.editorTime = Number(j.currentTime || 0), Number(j.readyState || 0) >= 2 && Qr() && (U.backgroundDirty = !0, U.dirty = !0), ei(), r(), pe({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      V.mode = "playback", V.seeking = !1, V.requestedTime = null, ei(), r(), pe({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      V.mode === "playback" && Qr() && (U.backgroundDirty = !0, U.dirty = !0), ei(), pe({ cause: "frame_view", localOnly: !0 });
    }, g = () => {
      Tn({
        ready: !!j.getAttribute("src"),
        playing: !j.paused && !j.ended,
        visible: Gn(),
        currentTime: V.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: V.mode,
        hasAudio: M.videoTransport.hasAudio,
        muted: j.muted,
        volume: Number(j.volume ?? M.videoTransport.volume ?? 1)
      });
    }, v = () => {
      const b = V.seeking || V.pendingPlaybackResume || V.mode === "scrub";
      if (V.seeking = !1, !b) {
        V.requestedTime = null, r();
        return;
      }
      const x = Number(V.requestedTime ?? V.editorTime ?? 0), S = Number(j.currentTime || 0);
      if (Math.abs(S - x) > ct()) {
        Ns(x);
        return;
      }
      V.mode === "scrub" && (Qr(), U.backgroundDirty = !0, U.dirty = !0, pe({ cause: "frame_view", localOnly: !0 })), V.requestedTime = null, o(), r();
    };
    j.addEventListener("loadedmetadata", s), j.addEventListener("loadeddata", s), j.addEventListener("canplay", s), j.addEventListener("play", c), j.addEventListener("pause", h), j.addEventListener("volumechange", g), j.addEventListener("seeked", v), Ae.push(() => j.removeEventListener("loadedmetadata", s)), Ae.push(() => j.removeEventListener("loadeddata", s)), Ae.push(() => j.removeEventListener("canplay", s)), Ae.push(() => j.removeEventListener("play", c)), Ae.push(() => j.removeEventListener("pause", h)), Ae.push(() => j.removeEventListener("volumechange", g)), Ae.push(() => j.removeEventListener("seeked", v));
  }
  function Bh() {
    M.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", c = r.attr === "data-mask-tool";
      r.active = o ? r.value === u.primaryTool : s ? r.key === u.paintTool : c ? r.key === u.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function hs(r) {
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
    he.active !== o && (he.active = o, J.classList.toggle("drop-active", o));
  }
  function ps(r, o, s = u.viewFov, c = 140, h = 620) {
    const g = by(u.viewYaw, r), v = o - u.viewPitch, b = s - u.viewFov, x = Math.hypot(g, v) + Math.abs(b) * 0.6, S = Math.round(K(c + x * 2.2, c, h));
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
    }, u.viewInertia.active = !1, u.viewInertia.vx = 0, u.viewInertia.vy = 0, pe();
  }
  xp();
  function Bn() {
    return t === "stickers" ? p.stickers : p.shots;
  }
  function jt() {
    const r = p.painting || (p.painting = ca(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Gh(r = "paint") {
    var h, g;
    const o = Array.isArray((g = (h = p.painting) == null ? void 0 : h[r]) == null ? void 0 : g.strokes) ? p.painting[r].strokes : [], s = [], c = /* @__PURE__ */ new Set();
    for (const v of o) {
      const b = String((v == null ? void 0 : v.actionGroupId) || "").trim();
      !b || c.has(b) || (c.add(b), s.push(b));
    }
    return s;
  }
  function Kh() {
    return Gh("paint");
  }
  function Ei(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Di(r) {
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
    const c = s.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function ms() {
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
  function wc(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const c = jt();
    let h = c.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? ms() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, c.push(h)), h;
  }
  function Wh(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), c = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - c) % 1 + 1) % 1,
        v: K(s - h, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: K(s - h, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: K(s + h, 0, 1)
      },
      {
        u: ((o - c) % 1 + 1) % 1,
        v: K(s + h, 0, 1)
      }
    ];
  }
  function Yh() {
    const r = new Set(Kh()), s = jt().filter((c) => r.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return r.forEach((c) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === c) || s.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: ms(),
        locked: !1,
        frame: null
      });
    }), s.sort((c, h) => Number((c == null ? void 0 : c.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), p.painting.groups = s, s;
  }
  function qh(r, o, s) {
    var H;
    const c = (G) => (Number(G || 0) % 1 + 1) % 1, h = [];
    for (const G of s) {
      const re = G == null ? void 0 : G.geometry, fe = (re == null ? void 0 : re.geometryKind) === "lasso_fill" ? re == null ? void 0 : re.points : (re == null ? void 0 : re.processedPoints) || (re == null ? void 0 : re.rawPoints) || (re == null ? void 0 : re.points) || [];
      Array.isArray(fe) && h.push(...fe);
    }
    if (!h.length) return null;
    const g = c(((H = h[0]) == null ? void 0 : H.u) || 0);
    let v = 0, b = 0;
    h.forEach((G) => {
      const re = c((G == null ? void 0 : G.u) || 0);
      v += g + bn(re, g), b += Number((G == null ? void 0 : G.v) || 0);
    });
    const x = (v / h.length % 1 + 1) % 1;
    let S = 1 / 0, k = -1 / 0, N = 1 / 0, D = -1 / 0;
    h.forEach((G) => {
      const re = c((G == null ? void 0 : G.u) || 0), fe = bn(re, x);
      S = Math.min(S, fe), k = Math.max(k, fe);
      const ie = Number((G == null ? void 0 : G.v) || 0);
      N = Math.min(N, ie), D = Math.max(D, ie);
    });
    const L = s.reduce((G, re) => {
      const fe = dr(String((re == null ? void 0 : re.toolKind) || "pen")), ie = rn[fe] || rn[Yn], me = Math.max(1, Number((re == null ? void 0 : re.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(G, me);
    }, 0), Q = Math.max(35e-4, L / 2048);
    return {
      centerUv: { u: ((x + (S + k) * 0.5) % 1 + 1) % 1, v: K((N + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (k - S) * 0.5 + Q,
      halfH: (D - N) * 0.5 + Q,
      uvPad: Q
    };
  }
  function sr(r, o, s) {
    const c = String(r || "").trim();
    if (!c) return null;
    const h = jt().find((v) => String((v == null ? void 0 : v.actionGroupId) || "") === c);
    if (!h) return null;
    const g = s || wn(c, o);
    return h.frame = qh(c, o, g), h.frame;
  }
  function Yr() {
    var c;
    const r = (Array.isArray(p.stickers) ? p.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Yh().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((c = p.painting) == null ? void 0 : c.raster_objects) ? p.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, g) => Number(h.z_index || 0) - Number(g.z_index || 0));
  }
  function gs(r = !0) {
    var s, c, h, g, v, b;
    const o = Yr().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((c = (s = u.interaction) == null ? void 0 : s.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), S = String(((g = (h = u.interaction) == null ? void 0 : h.stroke) == null ? void 0 : g.layerKind) || "").trim(), k = String(((b = (v = u.interaction) == null ? void 0 : v.stroke) == null ? void 0 : b.toolKind) || "").trim();
      x && S === "paint" && k !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function bs(r = !0) {
    var b, x, S, k, N, D;
    const o = Yr();
    if (!r) return o;
    const s = String(((x = (b = u.interaction) == null ? void 0 : b.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), c = String(((k = (S = u.interaction) == null ? void 0 : S.stroke) == null ? void 0 : k.layerKind) || "").trim(), h = String(((D = (N = u.interaction) == null ? void 0 : N.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!s || c !== "paint" || h === "eraser" || o.some((L) => L.type === "strokeGroup" && String(L.actionGroupId || "") === s))
      return o;
    const g = it();
    let v = o.reduce((L, Q) => Math.max(L, Number((Q == null ? void 0 : Q.z_index) || 0)), -1) + 1;
    return g && Pt(g) && String(g.actionGroupId || "") === s && (v = Number(g.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: v,
        item: null
      }
    ].sort((L, Q) => Number((L == null ? void 0 : L.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0));
  }
  function Xh() {
    return jt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => Xr(Ei("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Jh() {
    var r;
    return (Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => qr(Di((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Sc(r = u.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, c = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || c;
    }
    return !1;
  }
  function Zh() {
    var o, s, c, h;
    let r = null;
    try {
      const g = gs(), v = ((h = (c = (s = (o = u.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, g)) == null ? void 0 : c.displayPaint) == null ? void 0 : h.canvas) || null;
      v && (r = {
        source: v,
        revision: `${ii()}:${ka()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function ka() {
    var h, g, v, b, x, S, k;
    const r = u.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Sc(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, D = String(((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.layerKind) || ""), L = ((v = N == null ? void 0 : N.rawPoints) == null ? void 0 : v.length) ?? ((b = N == null ? void 0 : N.points) == null ? void 0 : b.length) ?? 0, Q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${D || "paint"}_${o}_live${Q}_${L}_${u.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), c = String(((S = r == null ? void 0 : r.item) == null ? void 0 : S.rasterObjectId) || ((k = r == null ? void 0 : r.item) == null ? void 0 : k.id) || "");
    return `_${o}_${s || c || "active"}_${u.livePaintInteractionRevision}`;
  }
  function ys() {
    const r = Array.isArray(p.shots) ? p.shots : [], o = Array.isArray(p.stickers) ? p.stickers : [];
    return [...r, ...o];
  }
  function un(r) {
    return !!r && Array.isArray(p.shots) && p.shots.includes(r);
  }
  function yt(r) {
    return !!r && Array.isArray(p.stickers) && p.stickers.includes(r);
  }
  function tn() {
    var r;
    return Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : [];
  }
  function qr(r) {
    const o = At(r);
    if (!o) return null;
    const s = tn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Di(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Vt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = At(r.rasterObjectId || r.id || "");
    return !!o && !!qr(Di(o));
  }
  function Xr(r) {
    const o = Ri(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const c = jt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return c ? {
      ...c,
      id: Ei("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Pt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!Xr(Ei(s, o));
  }
  function wn(r, o = null) {
    const s = Ri(r, o), c = String(s.actionGroupId || "").trim();
    return c ? si(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === c) : [];
  }
  function Qh(r, o = "paint") {
    var g, v, b;
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${u.mode}:${$i()}`;
    if (u.mode === "frame") {
      const x = Be(), S = String((x == null ? void 0 : x.id) || ""), k = x ? Ct(x) : null;
      return `${h}:frame:${S}:${Math.round(Number((k == null ? void 0 : k.x) || 0))}:${Math.round(Number((k == null ? void 0 : k.y) || 0))}:${Math.round(Number((k == null ? void 0 : k.w) || 0))}:${Math.round(Number((k == null ? void 0 : k.h) || 0))}:${Math.round(Number(((g = u.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((v = u.frameView) == null ? void 0 : v.panX) || 0))}:${Math.round(Number(((b = u.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Pa(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: K(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function bn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function vs(r, o = null, s = null) {
    var S;
    const c = Ri(r, o), h = Array.isArray(s) ? s : wn(c.actionGroupId, c.layerKind), g = [];
    if (h.forEach((k) => {
      const N = (k == null ? void 0 : k.geometry) || null, D = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(D) && g.push(...D);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const v = Number(((S = g[0]) == null ? void 0 : S.u) || 0);
    let b = 0, x = 0;
    return g.forEach((k) => {
      b += v + bn(Number((k == null ? void 0 : k.u) || 0), v), x += Number((k == null ? void 0 : k.v) || 0);
    }), {
      u: (b / g.length % 1 + 1) % 1,
      v: K(x / g.length, 0, 1)
    };
  }
  function Aa(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), v = bn(Number(r.u || 0), h), b = Number(r.v || 0) - g, x = Number(c || 0) * Tt, S = Math.cos(x), k = Math.sin(x), N = Math.max(0.02, Number(s || 1)), D = (v * S - b * k) * N, L = (v * k + b * S) * N;
    return {
      ...r,
      u: ((h + D) % 1 + 1) % 1,
      v: K(g + L, 0, 1)
    };
  }
  function Nc(r, o, s, c = null, h = null, g = null) {
    const v = Ri(r, h), b = String(v.actionGroupId || "").trim();
    if (!b) return !1;
    const x = si(v.layerKind), S = Array.isArray(c) ? new Map(c.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let k = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== b) return;
      const D = (S == null ? void 0 : S.get(String((N == null ? void 0 : N.id) || ""))) || N, L = N == null ? void 0 : N.geometry, Q = D == null ? void 0 : D.geometry;
      !L || !Q || (Array.isArray(Q.points) && (L.points = Q.points.map((H) => Pa(H, o, s)), k = !0), Array.isArray(Q.rawPoints) && (L.rawPoints = Q.rawPoints.map((H) => Pa(H, o, s)), k = !0), Array.isArray(Q.processedPoints) && (L.processedPoints = Q.processedPoints.map((H) => Pa(H, o, s)), k = !0));
    }), k && g) {
      const N = jt().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === b);
      N && (N.frame = null);
    }
    return k;
  }
  function Mc(r, o = 1, s = 0, c = null, h = null, g = null) {
    const v = Ri(r, h), b = String(v.actionGroupId || "").trim();
    if (!b) return !1;
    const x = si(v.layerKind), S = Array.isArray(c) ? c : wn(b, v.layerKind), k = Array.isArray(S) ? new Map(S.map((L) => [String((L == null ? void 0 : L.id) || ""), L])) : null, N = (g == null ? void 0 : g.centerUv) ?? vs(b, v.layerKind, S);
    let D = !1;
    if (x.forEach((L) => {
      if (String((L == null ? void 0 : L.actionGroupId) || "").trim() !== b) return;
      const Q = (k == null ? void 0 : k.get(String((L == null ? void 0 : L.id) || ""))) || L, H = L == null ? void 0 : L.geometry, G = Q == null ? void 0 : Q.geometry;
      !H || !G || (Array.isArray(G.points) && (H.points = G.points.map((re) => Aa(re, N, o, s)), D = !0), Array.isArray(G.rawPoints) && (H.rawPoints = G.rawPoints.map((re) => Aa(re, N, o, s)), D = !0), Array.isArray(G.processedPoints) && (H.processedPoints = G.processedPoints.map((re) => Aa(re, N, o, s)), D = !0));
    }), D && g) {
      const L = jt().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === b);
      L && (L.frame = null);
    }
    return D;
  }
  function kc(r, o, s, c = null) {
    const h = At(r);
    if (!h) return !1;
    const g = tn().find((k) => String((k == null ? void 0 : k.id) || "").trim() === h);
    if (!g) return !1;
    const v = c && typeof c == "object" ? c : g, b = (v == null ? void 0 : v.transform) || {}, x = Number(b.du || 0) + Number(o || 0), S = K(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = x, g.transform.dv = S, !0;
  }
  function ep(r, o = 1, s = null) {
    const c = At(r);
    if (!c) return !1;
    const h = tn().find((S) => String((S == null ? void 0 : S.id) || "").trim() === c);
    if (!h) return !1;
    const g = s && typeof s == "object" ? s : h, v = (g == null ? void 0 : g.transform) || {}, b = Math.max(0.01, Number(v.scale || 1)), x = K(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = x, !0;
  }
  function it() {
    const r = String(u.selectedId || "");
    if (!r) return null;
    const o = Xr(r);
    if (o) return o;
    const s = qr(r);
    return s || (t === "cutout" ? ys().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null : Bn().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null);
  }
  function Sn() {
    const r = Array.isArray(u.selectedIds) && u.selectedIds.length ? u.selectedIds : u.selectedId ? [u.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((c) => {
      const h = String(c || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const g = h === String(u.selectedId || "") ? it() : Xr(h) || qr(h) || (t === "cutout" ? ys().find((v) => String((v == null ? void 0 : v.id) || "") === h) : Bn().find((v) => String((v == null ? void 0 : v.id) || "") === h));
      g && o.push(g);
    }), o;
  }
  function _s(r = null) {
    const o = Array.isArray(r) ? r : Sn();
    if (!o || o.length < 2) return null;
    const s = o.map((S) => Dt(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const c = s.flatMap((S) => S.corners.map((k) => Number((k == null ? void 0 : k.x) || 0))), h = s.flatMap((S) => S.corners.map((k) => Number((k == null ? void 0 : k.y) || 0))), g = Math.min(...c), v = Math.max(...c), b = Math.min(...h), x = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (g + v) * 0.5, y: (b + x) * 0.5 },
      corners: [
        { x: g, y: b },
        { x: v, y: b },
        { x: v, y: x },
        { x: g, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (g + v) * 0.5, y: b, a: { x: g, y: b }, b: { x: v, y: b } },
        { edge: "right", x: v, y: (b + x) * 0.5, a: { x: v, y: b }, b: { x: v, y: x } },
        { edge: "bottom", x: (g + v) * 0.5, y: x, a: { x: v, y: x }, b: { x: g, y: x } },
        { edge: "left", x: g, y: (b + x) * 0.5, a: { x: g, y: x }, b: { x: g, y: b } }
      ],
      rotateStemBase: { x: (g + v) * 0.5, y: b },
      rotateHandle: { x: (g + v) * 0.5, y: b - 30 }
    };
  }
  function tp(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(u.selectedIds) && u.selectedIds.includes(o);
  }
  function Ca() {
    const r = it();
    return r ? Pt(r) || Vt(r) ? "stroke" : un(r) ? "frame" : "image" : null;
  }
  function lr(r) {
    if (!r || typeof r != "object") return !1;
    if (Pt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = jt().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Vt(r)) {
      const o = At(r.rasterObjectId || r.id || ""), s = tn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function xs(r = null) {
    const o = Array.isArray(r) ? r : Sn();
    return o.length > 0 && o.every((s) => lr(s));
  }
  function np(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Pt(r)) {
      const c = String(r.actionGroupId || r.id || "").trim(), h = jt().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === c);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Vt(r)) {
      const c = At(r.rasterObjectId || r.id || ""), h = tn().find((g) => String((g == null ? void 0 : g.id) || "").trim() === c);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function rp() {
    if (i) return;
    const r = Sn();
    if (!r.length) return;
    const o = !xs(r);
    let s = !1;
    r.forEach((c) => {
      np(c, o) && (s = !0);
    }), s && (st(), vt(), Ue(), pe());
  }
  function Sr(r) {
    u.selectedId = (r == null ? void 0 : r.id) || null, u.selectedIds = r != null && r.id ? [r.id] : [], r && yt(r) ? p.active.selected_sticker_id = r.id || null : p.active.selected_sticker_id = null, r && un(r) ? p.active.selected_shot_id = r.id || null : r ? un(r) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function ip(r, o = null) {
    const s = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((v) => {
      const b = String((v == null ? void 0 : v.id) || "").trim();
      !b || c.has(b) || (c.add(b), s.push(b));
    }), u.selectedIds = s;
    const h = String(o || "").trim();
    u.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const g = it();
    p.active.selected_sticker_id = g && yt(g) && g.id || null, g && un(g) ? p.active.selected_shot_id = g.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function Pc() {
    const r = (Array.isArray(p.shots) ? p.shots : []).map((s, c) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${c + 1}`)
    })), o = (Array.isArray(p.stickers) ? p.stickers : []).map((s, c) => {
      var g, v;
      const h = Et(s) ? String(s.id || Ir) : String(((v = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : v.name) || s.asset_id || s.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function ap(r) {
    return r === "frame" ? De.camera : r === "stroke" ? De.paintbrush_vertical_tool : De.image;
  }
  function Ac(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: ap(r.kind)
    };
  }
  function Cc() {
    return ms();
  }
  function Et(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Ir || String(r.source_kind || "") === gl;
  }
  function Jr(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function op(r) {
    return Et(r) && Jr(r) ? dh : 1;
  }
  function sp() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function lp() {
    return String(sp() || "") === "lasso_fill";
  }
  function cp() {
    if (i) return;
    const r = it();
    !r || !Et(r) || (r.visible = Jr(r), Rt(), st(), vt(), He(), Ue(), pe());
  }
  function up() {
    if (i || t !== "stickers") return;
    const r = it();
    if (!r || !Et(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Ms(bl, () => {
      pe();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Nr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), st(), vt(), He(), Ue(), pe();
  }
  function fp(r) {
    if (!r || !Et(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, c = Ms(bl, () => {
      pe();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (s.vFOV_deg = Nr(
      s.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), s;
  }
  function dp() {
    const r = it();
    if (!r || !Et(r)) return !1;
    const o = fp(r);
    if (!o) return !1;
    const s = (c, h) => Math.abs(Number(c || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function ws(r) {
    var s;
    const o = fa(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function Tc(r) {
    const o = fa(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function Ic() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Vo(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function hp() {
    const { metaKey: r } = Ic(), o = Tc(r);
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
  function Ss(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), c = o % 60;
    return `${s}:${String(c).padStart(2, "0")}`;
  }
  function Tn(r = {}) {
    const o = Number(r.currentTime ?? V.editorTime ?? 0), s = Number(r.duration ?? M.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!M.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!M.videoTransport.playing, g = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!M.videoTransport.visible, v = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(j instanceof HTMLVideoElement ? j.muted : M.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : j instanceof HTMLVideoElement ? j.volume : M.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Ce(j), S = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!M.videoTransport.loop;
    Object.assign(M.videoTransport, {
      ready: c,
      playing: h,
      visible: g,
      loop: S,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Ss(o),
      durationLabel: Ss(s),
      frameCount: Math.max(0, Number(r.frameCount ?? M.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? M.videoTransport.fps ?? 24)),
      mode: String(r.mode || V.mode || "playback"),
      hasAudio: x,
      muted: v,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : M.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? M.videoTransport.thumbnailCount ?? Ne))
    });
  }
  function Gn() {
    return !!(j instanceof HTMLVideoElement && j.getAttribute("src") && u.primaryTool !== "paint" && u.primaryTool !== "mask");
  }
  function pp() {
    Tn({
      visible: Gn()
    });
  }
  function Qr() {
    if (!(j instanceof HTMLVideoElement) || Number(j.videoWidth || 0) < 1 || Number(j.videoHeight || 0) < 1) return !1;
    const r = Number(j.videoWidth || 0), o = Number(j.videoHeight || 0);
    (W.width !== r || W.height !== o) && (W.width = r, W.height = o);
    const s = W.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(j, 0, 0, r, o), W.__panoFrameIdx = Number(W.__panoFrameIdx || 0) + 1, V.presentedTime = Number(V.editorTime || j.currentTime || 0), !0) : !1;
  }
  function Ec() {
    return V.mode === "scrub" && Number(W.width || 0) > 0 && Number(W.height || 0) > 0 && Number(W.__panoFrameIdx || 0) > 0 ? W : j instanceof HTMLVideoElement && Number(j.videoWidth || 0) > 0 && Number(j.videoHeight || 0) > 0 && Number(j.readyState || 0) >= 2 ? j : null;
  }
  function Ns(r) {
    if (!(j instanceof HTMLVideoElement) || Number(j.videoWidth || 0) < 1 || Number(j.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (V.requestedTime = o, !V.seeking && !(Math.abs(Number(j.currentTime || 0) - o) <= 5e-4)) {
      V.seeking = !0;
      try {
        j.currentTime = o;
      } catch {
        V.seeking = !1;
      }
    }
  }
  function ei() {
    if (!(j instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = Ic(), o = ws(r)[0] || null, s = o && typeof o == "object" ? xa(o) : Kr(o), c = hp(), h = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), g = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), v = Number((c == null ? void 0 : c.duration) || (h > 0 ? h / g : 0)), b = !!(c != null && c.has_audio) || Ce(j);
    return s && j.dataset.panoSrc !== s ? (j.pause(), j.dataset.panoSrc = s, j.dataset.panoFrameIdx = "0", j.loop = !!M.videoTransport.loop, j.muted = !!M.videoTransport.muted, j.volume = Math.max(0, Math.min(1, Number(M.videoTransport.volume ?? 1))), j.src = s, j.load(), bt(s, v, g)) : !s && j.getAttribute("src") && (j.pause(), j.removeAttribute("src"), j.load(), ln()), j.loop !== !!M.videoTransport.loop && (j.loop = !!M.videoTransport.loop), s && (!Array.isArray(M.videoTransport.thumbnails) || M.videoTransport.thumbnails.length === 0) && bt(s, v, g), s || ln(), Tn({
      ready: !!s,
      playing: !j.paused && !j.ended,
      visible: !!s && u.primaryTool !== "paint" && u.primaryTool !== "mask",
      currentTime: V.editorTime,
      duration: v,
      frameCount: h,
      fps: g,
      mode: V.mode,
      hasAudio: b,
      loop: !!j.loop,
      muted: !!j.muted,
      volume: Number(j.volume ?? M.videoTransport.volume ?? 1),
      thumbnailCount: M.videoTransport.thumbnailCount
    }), s || null;
  }
  function mp(r, o = null) {
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
  function Ms(r, o = null) {
    const s = ws(r), c = Array.isArray(s) && s.length ? s[0] : null, h = Kr(c);
    if (!h) return null;
    const g = `__ui__${r}`, v = Z.get(g);
    if (v && v.__panoSrc === h) return v;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof o == "function" ? o(b) : pe();
    }, b.src = h, Z.set(g, b), b;
  }
  function Dc(r = null) {
    const o = wl(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Ms(bl, r);
  }
  function Rc(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let c = 0; c < o.length; c += 1)
      s ^= o.charCodeAt(c), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Nr(r, o, s) {
    const c = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), g = K(Number(r || 30), 0.1, 179) * Tt, v = 2 * Math.atan(Math.tan(g * 0.5) * (h / c));
    return K(v * br, 0.1, 179);
  }
  function gp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const c = s.version;
      let h = null;
      if (typeof c == "number" && Number.isInteger(c) ? h = c : typeof c == "string" && /^\d+$/.test(c) && (h = Number.parseInt(c, 10)), h !== 1) return null;
      const g = s.pose;
      if (!g || typeof g != "object") return null;
      const v = Number(g.yaw_deg), b = Number(g.pitch_deg), x = Number(g.roll_deg), S = Number(g.hFOV_deg);
      if (![v, b, x, S].every((L) => Number.isFinite(L))) return null;
      let k = ((v + 180) % 360 + 360) % 360 - 180;
      Object.is(k, -0) && (k = 0);
      const N = {
        yaw_deg: k,
        pitch_deg: K(b, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: K(S, 0.1, 179)
      }, D = Number(s.source_aspect);
      return Number.isFinite(D) && D > 0 && (N.source_aspect = D), N;
    } catch {
      return null;
    }
  }
  function Oc(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), g = ea(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Lt(Number.isFinite(o) ? o : 0),
        pitch_deg: K(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: K(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function bp(r) {
    var b;
    if (!r || typeof r != "object") return Oc(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), g = Number(r == null ? void 0 : r.vFOV_deg);
    let v = 1;
    if (Number.isFinite(h) && Number.isFinite(g)) {
      const x = K(h, 0.1, 179) * Tt, S = K(g, 0.1, 179) * Tt, k = Math.tan(S * 0.5);
      if (Math.abs(k) > 1e-6) {
        const N = Math.tan(x * 0.5) / k;
        Number.isFinite(N) && N > 0 && (v = N);
      }
    }
    if (r != null && r.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[r.asset_id])) {
      const x = p.assets[r.asset_id], S = Number((x == null ? void 0 : x.w) || 0), k = Number((x == null ? void 0 : x.h) || 0);
      S > 0 && k > 0 && (v = S / k);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Lt(Number.isFinite(o) ? o : 0),
        pitch_deg: K(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: K(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: v
    };
  }
  function yp(r) {
    var c, h, g, v, b;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = jh(e.graph, s), { originId: S, originSlot: k } = Vh(x), N = fa(S), D = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (c = N == null ? void 0 : N.data) == null ? void 0 : c.output,
        (h = N == null ? void 0 : N.data) == null ? void 0 : h.result,
        (g = N == null ? void 0 : N.ui) == null ? void 0 : g.output,
        (v = N == null ? void 0 : N.ui) == null ? void 0 : v.result
      ];
      for (const L of D) {
        if (!Array.isArray(L)) continue;
        const Q = Number(k || 0), H = L[Q];
        if (typeof H == "string" && H.trim()) return H;
      }
    }
    return String(((b = _n(e, r)) == null ? void 0 : b.value) || "");
  }
  function vp(r, o, s) {
    const c = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : gp(o);
    if (c) {
      const v = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || c.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Nr(c.hFOV_deg, v, b),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(u.viewYaw || 0),
      pitch_deg: Number(u.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Nr(30, h, g),
      rot_deg: 0
    };
  }
  function Fc(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((L) => String((L == null ? void 0 : L.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, c = Dc(() => {
      var L;
      (L = e.__panoExternalStickerSync) == null || L.call(e, "image-loaded");
    }), h = mp(Tc("pano_sticker_input_pose"), null), g = yp("sticker_state"), v = Rc(h && typeof h == "object" ? JSON.stringify(h) : g), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], x = b.findIndex((L) => String((L == null ? void 0 : L.id) || "") === Ir);
    if (s == null) {
      x >= 0 && (b.splice(x, 1), u.selectedId === Ir && (u.selectedId = null, u.selectedIds = [], p.active.selected_sticker_id = null), vt(), He(), Ue(), pe());
      return;
    }
    const S = b.reduce((L, Q) => Math.max(L, Number((Q == null ? void 0 : Q.z_index) || 0)), -1);
    let k = x >= 0 ? b[x] : null;
    const N = !k || Number(k.source_link_id ?? -1) !== Number(s) || String(k.source_state_hash || "") !== v;
    k || (k = {
      id: Ir,
      source_kind: gl
    }, b.push(k)), k.id = Ir, k.source_kind = gl, k.source_link_id = Number(s), k.source_state_hash = v, k.visible = k.visible !== !1;
    let D = !1;
    if (N) {
      const L = vp(h, g, c);
      Object.assign(k, L, {
        initial_pose: { ...L },
        visible: !0,
        z_index: S + 1
      }), D = !0;
    } else if (c && (c.complete || c.naturalWidth || c.width)) {
      const L = Nr(
        Number(k.hFOV_deg || 30),
        Number(c.naturalWidth || c.width || 1),
        Number(c.naturalHeight || c.height || 1)
      );
      Math.abs(Number(k.vFOV_deg || 0) - L) > 1e-6 && (k.vFOV_deg = L, D = !0);
    }
    D && (vt(), He(), Ue()), pe();
  }
  function ti(r = {}) {
    const s = r.preservePanelValues !== !1 ? it() : null;
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
  function _p() {
    if (t !== "cutout") return;
    const r = Be();
    r && Sr(r);
  }
  function ks() {
    if (t !== "cutout") return;
    const r = Be();
    Yi(M.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? De.camera : De.plus_circle
    });
  }
  function Ta() {
    const r = !!Be();
    u.mode === "frame" && !r && (u.mode = "pano"), u.outputPreviewRect = null, M.viewButtons.forEach((o) => {
      const s = o.key === u.mode;
      o.pressed = s ? "true" : "false", o.visible = !(o.key === "frame" && t !== "cutout"), o.disabled = o.key === "frame" ? !r : !1;
    }), M.outputPreviewToggle.visible = t === "cutout" && !!Be(), t === "cutout" && M.cameraPreview && (M.cameraPreview.visible = !0, M.cameraPreview.expanded = !!u.outputPreviewExpanded, M.cameraPreview.settled = M.cameraPreview.settled === !0 && U.pendingStableLayoutFrames <= 0 && U.hasPresentedFrame), uu() ? ut(u.pointerPos) : ee(u.mode === "pano" ? "grab" : "default");
  }
  function xp() {
    const o = Uc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Ps() {
    const r = En(u.viewYaw, u.viewPitch);
    let o = $n(0, 1, 0);
    Math.abs(Pn(r, o)) > 0.999 && (o = $n(0, 0, 1));
    const s = di(ho(o, r)), c = di(ho(r, s));
    return { right: s, up: c, fwd: r };
  }
  function Oi(r) {
    const { right: o, up: s, fwd: c } = Ps(), h = Pn(r, o), g = Pn(r, s), v = Pn(r, c);
    if (v <= 1e-5) return null;
    const b = C.width, x = C.height, S = u.viewFov * Tt, k = 2 * Math.atan(Math.tan(S / 2) * (x / b)), N = b / 2 / Math.tan(S / 2), D = x / 2 / Math.tan(k / 2);
    return {
      x: b / 2 + h / v * N,
      y: x / 2 - g / v * D,
      z: v
    };
  }
  function As(r, o) {
    const { right: s, up: c, fwd: h } = Ps(), g = C.width, v = C.height, b = u.viewFov * Tt, x = 2 * Math.atan(Math.tan(b / 2) * (v / g)), S = (r - g / 2) / (g / 2) * Math.tan(b / 2), k = (v / 2 - o) / (v / 2) * Math.tan(x / 2), N = uo(uo(fo(s, S), fo(c, k)), h);
    return di(N);
  }
  function cr() {
    const r = C.width, o = C.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const b = o, x = b * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: b };
    }
    const h = r, g = h / s;
    return { x: 0, y: (o - g) * 0.5, w: h, h: g };
  }
  function Lc(r) {
    var v;
    if (r && typeof r == "object" && (Et(r) || r.external === !0))
      return Dc(() => {
        var b;
        (b = e.__panoExternalStickerSync) == null || b.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = Z.get(o);
    if (s) return s;
    const c = (v = p.assets) == null ? void 0 : v[o], h = Gx(c);
    if (!h) return null;
    const g = new Image();
    return g.onload = () => pe(), g.src = h, Z.set(o, g), g;
  }
  function zc(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = le.get(s);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = s, le.set(s, h), h;
  }
  function wp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = E.get(o);
    if (s) return s.ready ? s : null;
    const c = zc(r, () => {
      const k = E.get(o);
      k && (k.ready = !1), pe({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const h = Number(c.naturalWidth || c.width || 0), g = Number(c.naturalHeight || c.height || 0);
    if (h < 1 || g < 1) return null;
    const v = document.createElement("canvas");
    v.width = h, v.height = g;
    const b = v.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, g), b.drawImage(c, 0, 0, h, g);
    const x = b.getImageData(0, 0, h, g).data, S = { canvas: v, width: h, height: g, alpha: x, ready: !0 };
    return E.set(o, S), S;
  }
  function Sp(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), g = Number((o == null ? void 0 : o.v) || 0), v = bn(Number(r.u || 0), h), b = Number(r.v || 0) - g, x = Math.max(0.02, Number(s || 1)), S = Number(c || 0) * Tt, k = Math.cos(S), N = Math.sin(S), D = v / x, L = b / x, Q = D * k + L * N, H = -D * N + L * k;
    return {
      ...r,
      u: ((h + Q) % 1 + 1) % 1,
      v: g + H
    };
  }
  function Np(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const c = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(o.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(c.dv || 0)
    }, v = Sp(
      g,
      h,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(x > 1e-6)) return null;
    const S = bn(Number(v.u || 0), Number(s.u0 || 0)) / b, k = (Number(v.v || 0) - Number(s.v0 || 0)) / x;
    if (S < 0 || S > 1 || k < 0 || k > 1) return 0;
    const N = wp(r);
    if (!N) return null;
    const D = K(Math.floor(S * N.width), 0, N.width - 1), L = K(Math.floor(k * N.height), 0, N.height - 1);
    return Number(N.alpha[(L * N.width + D) * 4 + 3] || 0);
  }
  function $c(r, o, s, c = null) {
    if (!(o != null && o.visible) || !qn(s, o.corners)) return !1;
    const h = c || Mn(s, performance.now()), g = Np(r, h);
    return g === null ? !0 : g > 8;
  }
  function Mp() {
    var c, h, g, v, b, x, S, k;
    const r = ((h = (c = u.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : h.call(c, gs(!1))) || null, o = Math.max(1, Number(((g = r == null ? void 0 : r.descriptor) == null ? void 0 : g.width) || ((b = (v = r == null ? void 0 : r.displayPaint) == null ? void 0 : v.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((k = (S = r == null ? void 0 : r.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : k.height) || 1024));
    return { width: o, height: s };
  }
  function kp() {
    var L, Q, H;
    const r = u.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = fn(), c = `${ka()}:${s.width}:${s.height}`;
    if (((L = u._activePaintEraserPreviewInfo) == null ? void 0 : L.cacheKey) === c)
      return u._activePaintEraserPreviewInfo.value || null;
    const h = Ut(o), g = (h == null ? void 0 : h.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const G = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = Fs(G, h.targetSpace, !0);
    }
    const v = zi(s.width, s.height, { readback: !0 });
    if (!eu(v, h, { w: s.width, h: s.height })) return null;
    const b = ((H = (Q = v.ctx) == null ? void 0 : Q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : H.data) || null;
    if (!b) return null;
    let x = s.width, S = s.height, k = -1, N = -1;
    for (let G = 0; G < s.height; G += 1)
      for (let re = 0; re < s.width; re += 1)
        b[(G * s.width + re) * 4 + 3] <= 8 || (re < x && (x = re), G < S && (S = G), re > k && (k = re), G > N && (N = G));
    if (k < x || N < S)
      return u._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const D = {
      surface: v,
      bounds: { minX: x, minY: S, maxX: k, maxY: N },
      key: `${c}:${x}:${S}:${k}:${N}`
    };
    return u._activePaintEraserPreviewInfo = { cacheKey: c, value: D }, u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function Fi() {
    u._activePaintEraserPreviewInfo = null, u._liveEraserPreviewCanvasCache = null;
  }
  function Pp(r, o, s) {
    var c, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((c = r.item) != null && c.bbox)) {
      const g = r.item.bbox, v = ((h = r.item) == null ? void 0 : h.transform) || {}, b = Number(g.u0 || 0) + Number(v.du || 0), x = Number(g.u1 || 0) + Number(v.du || 0), S = Number(g.v0 || 0) + Number(v.dv || 0), k = Number(g.v1 || 0) + Number(v.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(K(S, 0, 1) * s),
        maxY: Math.ceil(K(k, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const g = wn(r.actionGroupId, "paint"), v = sr(r.actionGroupId, "paint", g);
      if (!v) return null;
      const b = v.centerUv.u - v.halfW, x = v.centerUv.u + v.halfW, S = v.centerUv.v - v.halfH, k = v.centerUv.v + v.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(K(S, 0, 1) * s),
        maxY: Math.ceil(K(k, 0, 1) * s),
        wraps: x - b >= 1 || b < 0 || x > 1
      };
    }
    return null;
  }
  function Ap(r, o, s) {
    if (!r || !o) return !1;
    const c = (v) => v.wraps ? [
      { minX: 0, maxX: v.maxX, minY: v.minY, maxY: v.maxY, wraps: !1 },
      { minX: v.minX, maxX: s - 1, minY: v.minY, maxY: v.maxY, wraps: !1 }
    ] : [v], h = c(r), g = c(o);
    return h.some((v) => g.some((b) => !(v.maxX < b.minX || b.maxX < v.minX || v.maxY < b.minY || b.maxY < v.minY)));
  }
  function Cp(r, o, s) {
    var me, Te, $e, ke, Y, oe, ye;
    if (!r || !o || !((me = s == null ? void 0 : s.surface) != null && me.canvas) || o.type !== "rasterObject") return r;
    const c = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (c < 1 || h < 1) return r;
    const g = Pp(o, c, h);
    if (g && !Ap(g, s.bounds, c)) return r;
    const v = String(((Te = o.item) == null ? void 0 : Te.id) || o.id || ""), b = (($e = o.item) == null ? void 0 : $e.transform) || {}, x = `${s.key}:${v}:${c}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = u._liveEraserPreviewCanvasCache instanceof Map ? u._liveEraserPreviewCanvasCache : u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(x)) return S.get(x);
    const k = K(Math.floor(Number(((ke = s.bounds) == null ? void 0 : ke.minX) || 0)), 0, Math.max(0, c - 1)), N = K(Math.floor(Number(((Y = s.bounds) == null ? void 0 : Y.minY) || 0)), 0, Math.max(0, h - 1)), D = K(Math.ceil(Number(((oe = s.bounds) == null ? void 0 : oe.maxX) || 0)), k, Math.max(0, c - 1)), L = K(Math.ceil(Number(((ye = s.bounds) == null ? void 0 : ye.maxY) || 0)), N, Math.max(0, h - 1)), Q = Math.max(1, D - k + 1), H = Math.max(1, L - N + 1), G = zi(c, h, { readback: !0 });
    G.ctx.clearRect(0, 0, c, h), G.ctx.drawImage(r, 0, 0);
    const re = G.ctx.getImageData(k, N, Q, H);
    G.ctx.save(), G.ctx.globalCompositeOperation = "destination-out", G.ctx.drawImage(s.surface.canvas, 0, 0), G.ctx.restore();
    const fe = G.ctx.getImageData(k, N, Q, H);
    let ie = !1;
    for (let we = 0; we < Q * H; we += 1) {
      const Ie = re.data[we * 4 + 3], Oe = fe.data[we * 4 + 3];
      if (Ie > Oe) {
        ie = !0;
        break;
      }
    }
    return ie ? (S.size > 64 && S.clear(), S.set(x, G.canvas), G.canvas) : (S.set(x, r), r);
  }
  function jc(r, o = null) {
    const s = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.bbox) || null;
    if (!s || !c) return null;
    const h = zc(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: g, height: v } = Mp(), b = (r == null ? void 0 : r.transform) || {}, x = [
      s,
      g,
      v,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      $i()
    ].join(":"), S = B.get(x);
    if (S) return S;
    B.size > 64 && B.clear();
    const k = document.createElement("canvas");
    k.width = g, k.height = v;
    const N = k.getContext("2d");
    if (!N) return null;
    const D = Number(c.u0 || 0) * g, L = Number(c.v0 || 0) * v, Q = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * g), H = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * v), G = D + Q * 0.5 + Number(b.du || 0) * g, re = L + H * 0.5 + Number(b.dv || 0) * v, fe = Number(b.rot_deg || 0) * Tt, ie = Math.max(0.01, Number(b.scale || 1));
    for (const me of [-g, 0, g])
      N.save(), N.translate(G + me, re), N.rotate(fe), N.scale(ie, ie), N.drawImage(h, -Q * 0.5, -H * 0.5, Q, H), N.restore();
    return B.set(x, k), k;
  }
  function Tp() {
    return ds(p, {
      selectedId: u.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ip(r) {
    return hh(
      p,
      (o, s, c) => Lc(c || o),
      { scene: r }
    );
  }
  function Vc(r, o, s, c, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const g = ur(c);
    if (Wc(o, s))
      return jp(
        o,
        s,
        g && u.showPanorama ? c : null,
        `${h}_bg_gl`
      );
    const b = Ra(), x = Oa(b), S = u.showObjects ? Fa() : Li([]), N = Zi({
      stateRevision: [
        h,
        g ? Zr(c) : "no_bg",
        Array.isArray(x) ? x.map((H) => `${String((H == null ? void 0 : H.assetId) || "")}:${String((H == null ? void 0 : H.revision) || "")}`).join(",") : "none",
        S.length ? S.map((H) => `${String((H == null ? void 0 : H.id) || "")}:${String((H == null ? void 0 : H.revision) || "")}:${Number((H == null ? void 0 : H.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: g && u.showPanorama ? c : null,
      backgroundRevision: g ? `${h}:${Zr(c)}` : "",
      coverageDeg: Ft(p.coverage),
      scene: b,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), D = de;
    if (!D.syncState(N)) return !1;
    const Q = D.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Q ? (r.drawImage(Q, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Cs(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const c = await Qt.fetchApi("/upload/image", { method: "POST", body: s });
    if (!c || c.status !== 200)
      throw new Error(`upload failed (${(c == null ? void 0 : c.status) || "no-response"})`);
    const h = await c.json(), g = String((h == null ? void 0 : h.name) || "").trim();
    if (!g)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function Ts(r, o) {
    const s = await new Promise((b) => r.toBlob(b, "image/png")), c = new FormData();
    c.append("image", s, o), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const h = await Qt.fetchApi("/upload/image", { method: "POST", body: c });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const g = await h.json(), v = String((g == null ? void 0 : g.name) || "").trim();
    if (!v) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: v,
      subfolder: String((g == null ? void 0 : g.subfolder) || "panorama_stickers"),
      storage: String((g == null ? void 0 : g.type) || "input")
    };
  }
  let Ia = null, Ea = !1;
  function Ep() {
    const r = Yf(p.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = p.painting_layer, s = ii();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Hc() {
    const r = String(e.id ?? "0"), o = lo.get(r);
    if (Ea && o) return o;
    const s = (async () => {
      var g, v, b, x, S, k, N, D, L, Q, H, G;
      const c = ii(), h = Yf(p.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ia = c, yn());
        return;
      }
      if (Ia !== c && !Ea) {
        Ea = !0;
        try {
          ja();
          const re = gs(!1), fe = ((v = (g = u.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : v.call(g, re)) || null, ie = ((b = fe == null ? void 0 : fe.displayPaint) == null ? void 0 : b.canvas) || null, me = ((x = fe == null ? void 0 : fe.committedMask) == null ? void 0 : x.canvas) || null, Te = Math.max(1, Number(((S = fe == null ? void 0 : fe.descriptor) == null ? void 0 : S.width) || (ie == null ? void 0 : ie.width) || (me == null ? void 0 : me.width) || 2048)), $e = Math.max(1, Number(((k = fe == null ? void 0 : fe.descriptor) == null ? void 0 : k.height) || (ie == null ? void 0 : ie.height) || (me == null ? void 0 : me.height) || 1024));
          (!ie && h.totalPaintCount > 0 || !me && h.totalMaskCount > 0) && ((!u._paintLayerSyncBlankSurface || Number(((N = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Te || Number(((D = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== $e) && (u._paintLayerSyncBlankSurface = zi(Te, $e)), u._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Te, $e));
          const ke = ie || h.totalPaintCount > 0 && ((L = u._paintLayerSyncBlankSurface) == null ? void 0 : L.canvas) || null, Y = me || h.totalMaskCount > 0 && ((Q = u._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!ke && !Y) return;
          let oe = null, ye = null;
          const we = [];
          if (h.totalPaintCount > 0) {
            oe = await Ts(ke, `pano_paint_${r}.png`);
            for (const Ie of re) {
              const Oe = String(Ie || "").trim();
              if (!Oe) continue;
              const Fe = ((G = (H = u.paintEngine) == null ? void 0 : H.getGroupDisplayCanvas) == null ? void 0 : G.call(H, Oe)) || null;
              if (!Fe) continue;
              const Ke = Oe.replace(/[^a-zA-Z0-9_-]+/g, "_"), We = await Ts(Fe, `pano_group_${r}_${Ke}.png`);
              We && we.push({
                id: Oe,
                actionGroupId: Oe,
                image: We
              });
            }
          }
          h.totalMaskCount > 0 && (ye = await Ts(Y, `pano_mask_${r}.png`)), c === ii() && (p.painting_layer = {
            paint: oe,
            mask: ye,
            groups: we,
            revision: c
          }, Ia = c, yn());
        } catch (re) {
          throw re;
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
      const b = Ec();
      if (b) return b;
      const x = wl(
        e,
        ["erp_image", "bg_erp"],
        () => pe(),
        "background:cutout:erp_image|bg_erp"
      );
      return x || Jf(e, "pano_input_images", Z, () => pe()) || null;
    }
    const r = Ec();
    if (r) return r;
    const o = Jf(e, "pano_input_images", Z, () => pe());
    if (o) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], c = s.includes("erp_image"), h = s.includes("bg_erp");
    let g = [];
    return i && (c || h) ? g = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : g = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], wl(e, g, () => pe(), `background:${g.join("|")}`);
  }
  function ur(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Dp() {
    if (!U.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (u.showPanorama) {
      const s = Mr();
      r = !!s && !ur(s);
    }
    if (u.showObjects) {
      const s = Array.isArray(p.stickers) ? p.stickers : [];
      for (const c of s) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const h = Lc(c);
        if (h && !ur(h)) {
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
      r.has(o) || (delete p.assets[o], Z.delete(o));
    });
  }
  function Is(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(K(r.y, -1, 1))
    };
  }
  function Es(r, o = null) {
    const { lon: s, lat: c } = Is(r), h = cr();
    let g = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const v = h.y + (0.5 - c / Math.PI) * h.h;
    if (o !== null) {
      for (; g - o > h.w / 2; ) g -= h.w;
      for (; g - o < -h.w / 2; ) g += h.w;
    }
    return { x: g, y: v, z: 1 };
  }
  function Da(r) {
    const o = En(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = $n(0, 1, 0);
    Math.abs(Pn(o, s)) > 0.999 && (s = $n(0, 0, 1));
    const c = di(ho(s, o)), h = di(ho(o, c)), g = Math.tan(K(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Tt), v = Math.tan(K(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Tt), b = Number(r.rot_deg || r.roll_deg || 0) * Tt, x = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: c,
      up: h,
      tanX: g,
      tanY: v,
      cr: x,
      sr: S
    };
  }
  function fr(r, o, s) {
    const c = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return di(uo(uo(r.centerDir, fo(r.right, c)), fo(r.up, h)));
  }
  function Uc(r) {
    const o = Da(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: h }) => fr(o, c * o.tanX, h * o.tanY));
  }
  function Bc(r, o, s) {
    const c = Da(r), h = (o * 2 - 1) * c.tanX, g = (1 - s * 2) * c.tanY;
    return fr(c, h, g);
  }
  function Gc(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: K((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Rp(r) {
    var x, S, k, N;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), h = Number(((S = r == null ? void 0 : r.transform) == null ? void 0 : S.rot_deg) || 0), g = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.du) || 0), v = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((D) => Pa(Aa(D, s, c, h), g, v));
  }
  function Op(r) {
    const o = At((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, c = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${u.mode}:${$i()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (u.mode === "frame") {
      const g = Be(), v = g ? Ct(g) : null;
      return `${h}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Fp(r) {
    const o = String((r == null ? void 0 : r.id) || ""), c = [
      un(r) ? "frame" : yt(r) ? "sticker" : "item",
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
      const h = Be(), g = h ? Ct(h) : null;
      return `${c}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Lp() {
    var o;
    const r = String(((o = p.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? u.hqFrames && u.hqFrames > 0 ? [28, 20] : u.interaction ? [12, 9] : [20, 14] : r === "high" ? u.hqFrames && u.hqFrames > 0 ? [48, 36] : u.interaction ? [20, 14] : [36, 26] : u.hqFrames && u.hqFrames > 0 ? [40, 30] : u.interaction ? [16, 12] : [28, 20];
  }
  function Kc() {
    var r;
    return !!R && !!((r = de == null ? void 0 : de.isSupported) != null && r.call(de));
  }
  function Wc(r, o) {
    return !Kc() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function Ra() {
    return u.showObjects ? Tp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Oa(r) {
    return !u.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Ip(r);
  }
  function Yc() {
    var r, o;
    return ((o = (r = u.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function zp() {
    return Yc() ? `${Ls()}:mask_display` : "";
  }
  function Li(r) {
    if (!u.showMask) return r;
    const o = Yc();
    if (!o) return r;
    const s = zp(), c = r.reduce((v, b) => Math.max(v, Number((b == null ? void 0 : b.zIndex) || 0)), -1), h = (Array.isArray(p.stickers) ? p.stickers : []).reduce((v, b) => Math.max(v, Number((b == null ? void 0 : b.z_index) || 0)), -1), g = Math.max(c, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: g + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function Fa() {
    var c, h;
    const r = bs(!0), o = kp(), s = [];
    for (const g of r) {
      if ((g == null ? void 0 : g.type) === "strokeGroup") {
        const v = String(g.actionGroupId || g.id || "");
        if (!v) continue;
        const b = ((h = (c = u.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : h.call(c, v)) || null;
        if (!b) continue;
        s.push({
          id: `paint_group:${v}`,
          source: b,
          revision: `${Ls()}:${v}`,
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((g == null ? void 0 : g.type) === "rasterObject") {
        const v = g.item || null, b = At((v == null ? void 0 : v.id) || g.id || "");
        if (!b) continue;
        const x = jc(v, () => pe());
        if (!x) continue;
        const S = Cp(x, g, o), k = (v == null ? void 0 : v.transform) || {};
        s.push({
          id: `raster:${b}`,
          source: S,
          revision: [
            ii(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(k.du || 0).toFixed(6),
            Number(k.dv || 0).toFixed(6),
            Number(k.rot_deg || 0).toFixed(3),
            Number(k.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((g == null ? void 0 : g.z_index) || 0),
          opacity: 1,
          visible: (v == null ? void 0 : v.visible) !== !1
        });
      }
    }
    return Li(s);
  }
  function $p(r, o = "modal_bg_gl") {
    const s = Ra(), c = Oa(s), h = ur(r), g = h ? Zr(r) : "none", v = u.showObjects ? Fa() : Li([]), b = null, x = [
      o,
      g,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      v.length ? v.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${String((S == null ? void 0 : S.revision) || "")}:${Number((S == null ? void 0 : S.zIndex) || 0)}`).join(",") : "paint:none",
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Zi({
        stateRevision: x,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${g}` : "",
        coverageDeg: Ft(p.coverage),
        scene: s,
        textures: c,
        paintSource: b,
        paintRevision: "",
        rasterEntries: v,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || c.length > 0 || v.length > 0
    };
  }
  function Ds() {
    if (!R) return;
    const r = R.getContext("webgl2");
    if (r)
      r.viewport(0, 0, R.width, R.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = R.getContext("2d");
      o && (o.clearRect(0, 0, R.width, R.height), o.fillStyle = "#070707", o.fillRect(0, 0, R.width, R.height));
    }
    U.backgroundWasVisible = !1, U.backgroundDirty = !1;
  }
  function jp(r, o, s, c = "modal_bg_gl") {
    var S;
    if (!Wc(r, o)) return !1;
    if (!U.backgroundDirty && U.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: g } = $p(s, c);
    if (!g || !de.syncState(h))
      return Ds(), !1;
    const b = de.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (S = R == null ? void 0 : R.getContext) == null ? void 0 : S.call(R, "2d");
    return !b || !x ? (Ds(), !1) : (x.clearRect(0, 0, R.width, R.height), x.drawImage(b, 0, 0, R.width, R.height), U.backgroundWasVisible = !0, U.backgroundDirty = !1, !0);
  }
  function Vp(r = !1) {
    const o = C.width, s = C.height, c = cr();
    if (P.globalAlpha = 1, P.lineWidth = 1, r || (P.fillStyle = "#070707", P.fillRect(0, 0, o, s), P.fillStyle = "#070707", P.fillRect(c.x, c.y, c.w, c.h)), ja(), Vc(
      P,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      Mr(),
      "modal_unwrap"
    ), u.showGrid && !u.fullscreen) {
      P.strokeStyle = "#3f3f46";
      for (let g = 0; g <= 16; g += 1) {
        const v = c.x + c.w * g / 16;
        P.beginPath(), P.moveTo(v, c.y), P.lineTo(v, c.y + c.h), P.stroke();
      }
      for (let g = 0; g <= 8; g += 1) {
        const v = c.y + c.h * g / 8;
        P.beginPath(), P.moveTo(c.x, v), P.lineTo(c.x + c.w, v), P.stroke();
      }
      P.strokeStyle = "rgba(250, 250, 250, 0.86)", P.lineWidth = 1.2, P.beginPath(), P.moveTo(c.x, c.y + c.h / 2), P.lineTo(c.x + c.w, c.y + c.h / 2), P.stroke(), P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center";
      const h = c.y + c.h * 0.57;
      P.fillText("Left", c.x + c.w * 0.25, h), P.fillText("Front", c.x + c.w * 0.5, h), P.fillText("Right", c.x + c.w * 0.75, h), P.fillText("Back", c.x + 38, h), P.fillText("Back", c.x + c.w - 38, h);
    }
  }
  function qc(r, o, s = 1) {
    let c = !1;
    P.strokeStyle = o, P.lineWidth = s, P.beginPath();
    for (const h of r) {
      const g = Oi(h);
      if (!g) {
        c = !1;
        continue;
      }
      c ? P.lineTo(g.x, g.y) : (P.moveTo(g.x, g.y), c = !0);
    }
    P.stroke();
  }
  function Hp(r = !1) {
    const o = C.width, s = C.height;
    if (r || (Kc() ? P.clearRect(0, 0, o, s) : (P.fillStyle = "#070707", P.fillRect(0, 0, o, s))), ja(), Vc(
      P,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: u.viewYaw,
        pitchDeg: u.viewPitch,
        fovDeg: u.viewFov,
        coverageDeg: Ft(p.coverage)
      },
      Mr(),
      "modal_pano"
    ), u.showGrid && !u.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const g = [];
        for (let v = -89; v <= 89; v += 4) g.push(En(h, v));
        qc(g, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const g = [];
        for (let v = -180; v <= 180; v += 4) g.push(En(v, h));
        qc(g, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: En(-90, 0) },
        { name: "Front", dir: En(0, 0) },
        { name: "Right", dir: En(90, 0) },
        { name: "Back", dir: En(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", c.forEach((h) => {
        const g = Oi(h.dir);
        g && P.fillText(h.name, g.x, g.y + 24);
      });
    }
  }
  function Up(r, o = null, s = null, c = null) {
    if (u.mode === "frame") {
      const h = o || Be();
      if (!h) return [];
      const g = s || Ct(h);
      return Mm(r, h, g);
    }
    return tu(r, c);
  }
  function La(r, o = null, s = null, c = null, h = null) {
    if (!r) return null;
    if (u.mode === "unwrap") {
      const v = tu([r], h);
      return v[0] ? { x: v[0].x, y: v[0].y, z: 1 } : null;
    }
    const g = ri(r);
    return g ? Kn(g, o, s, c) : null;
  }
  function Bp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), c = wn(s, r.layerKind), h = sr(s, r.layerKind, c), g = (h == null ? void 0 : h.centerUv) || vs(s, r.layerKind, c), v = u.mode === "unwrap" ? Number((g == null ? void 0 : g.u) || 0) : null, b = [], x = u.mode === "frame" ? Be() : null, S = x ? Ct(x) : null;
    for (const ie of c) {
      const me = (ie == null ? void 0 : ie.geometry) || null, Te = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], $e = Up(Te, x, S, v).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
      if (!$e.length) continue;
      const ke = dr(String((ie == null ? void 0 : ie.toolKind) || "pen")), Y = rn[ke] || rn[Yn];
      b.push({
        points: $e,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((Y == null ? void 0 : Y.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || r.layerKind || "paint")
      });
    }
    const k = La(g, null, x, S, v);
    if (!k) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ie), ie;
    }
    const D = Wh(h).map((ie) => La(ie, k.x, x, S, v)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (D.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ie), ie;
    }
    const L = (ie, me) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: ie,
      b: me
    }), Q = L(D[0], D[1]), H = L(D[1], D[2]), G = L(D[2], D[3]), re = L(D[3], D[0]), fe = {
      kind: "strokeGroup",
      center: { x: Number(k.x || 0), y: Number(k.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...H },
        { edge: "bottom", ...G },
        { edge: "left", ...re }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return u._strokeGeomCache.set(o, fe), fe;
  }
  function Gp(r, o) {
    const s = u.mode === "frame" ? Be() : null, c = s ? Ct(s) : null, h = Gc(r), g = u.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, v = La(h, null, s, c, g), x = Rp(r).map((D) => La(D, (v == null ? void 0 : v.x) ?? null, s, c, g)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(x) || x.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return u._strokeGeomCache.set(o, D), D;
    }
    const S = x.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: S.reduce((D, L) => D + Number(L.x || 0), 0) / S.length,
        y: S.reduce((D, L) => D + Number(L.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return u._strokeGeomCache.set(o, N), N;
  }
  function Kn(r, o = null, s = null, c = null) {
    if (u.mode === "frame") {
      const fe = s || Be(), ie = c || Ct(fe);
      if (!fe || !ie) return null;
      const me = fe ? ji(fe, r) : null;
      return me ? {
        x: Number(ie.x || 0) + Number(me.x || 0) * Number(ie.w || 0),
        y: Number(ie.y || 0) + Number(me.y || 0) * Number(ie.h || 0),
        z: 1
      } : null;
    }
    if (u.mode === "unwrap") return Es(r, o);
    const { right: h, up: g, fwd: v } = Ps(), b = Pn(r, h), x = Pn(r, g), S = Pn(r, v), k = C.width, N = C.height, D = u.viewFov * Tt, L = 2 * Math.atan(Math.tan(D / 2) * (N / Math.max(k, 1))), Q = k / 2 / Math.tan(D / 2), H = N / 2 / Math.tan(L / 2), G = Math.max(S, 1e-4), re = Math.max(k, N) * 2;
    return {
      x: K(k / 2 + b / G * Q, -re, k + re),
      y: K(N / 2 - x / G * H, -re, N + re),
      z: G
    };
  }
  function Kp(r) {
    const o = En(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = u.mode === "frame" ? Be() : null, c = s ? Ct(s) : null, h = Kn(o, null, s, c);
    if (!h) return { visible: !1 };
    const g = Da(r), b = Uc(r).map((Te) => Kn(Te, h.x, s, c)).filter((Te) => Number.isFinite(Te == null ? void 0 : Te.x) && Number.isFinite(Te == null ? void 0 : Te.y));
    if (b.length < 4) return { visible: !1 };
    const x = fr(g, 0, g.tanY), S = fr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), k = Kn(x, h.x, s, c);
    if (!k) return { visible: !1 };
    const N = Kn(S, (k == null ? void 0 : k.x) ?? h.x, s, c), D = ((N == null ? void 0 : N.x) ?? k.x) - k.x, L = ((N == null ? void 0 : N.y) ?? k.y) - k.y, Q = Math.hypot(D, L) || 1, H = {
      x: k.x + D / Q * 30,
      y: k.y + L / Q * 30
    }, G = Kn(fr(g, 0, g.tanY), h.x, s, c), re = Kn(fr(g, g.tanX, 0), h.x, s, c), fe = Kn(fr(g, 0, -g.tanY), h.x, s, c), ie = Kn(fr(g, -g.tanX, 0), h.x, s, c);
    if (!G || !re || !fe || !ie) return { visible: !1 };
    const me = [
      {
        edge: "top",
        x: G.x,
        y: G.y,
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
        x: fe.x,
        y: fe.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: ie.x,
        y: ie.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((Te) => ({ x: Te.x, y: Te.y })),
      edgeMidpoints: me,
      rotateStemBase: { x: k.x, y: k.y },
      rotateHandle: H,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Dt(r) {
    if (Pt(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), g = Qh(h, r.layerKind), v = u._strokeGeomCache.get(g);
      return v || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Bp(r, g));
    }
    if (Vt(r)) {
      const h = Op(r), g = u._strokeGeomCache.get(h);
      return g || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Gp(r, h));
    }
    const o = Fp(r), s = u._strokeGeomCache.get(o);
    if (s) return s;
    u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear();
    const c = Kp(r);
    return u._strokeGeomCache.set(o, c), c;
  }
  function za(r, o, s, c = null) {
    const h = [];
    for (let g = 0; g <= s; g += 1) {
      const v = g / s;
      let b = 0, x = 0;
      o === 0 ? (b = v, x = 0) : o === 1 ? (b = 1, x = v) : o === 2 ? (b = 1 - v, x = 1) : (b = 0, x = 1 - v);
      const S = Bc(r, b, x), k = u.mode === "unwrap" ? Es(S, c) : Oi(S);
      k && h.push(k);
    }
    return h;
  }
  function Wp(r, o) {
    const s = En(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = u.mode === "unwrap" ? Es(s) : null, h = c ? c.x : null, g = u.mode === "pano" ? 28 : 20, v = [
      za(r, 0, g, h),
      za(r, 1, g, h),
      za(r, 2, g, h),
      za(r, 3, g, h)
    ];
    P.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", P.lineWidth = o ? 2 : 1, P.beginPath();
    let b = !1;
    for (const x of v)
      for (const S of x)
        b ? P.lineTo(S.x, S.y) : (P.moveTo(S.x, S.y), b = !0);
    P.closePath(), P.stroke();
  }
  function Yp() {
    const r = [...Array.isArray(p.shots) ? p.shots : []], o = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, c) => Number(s.z_index || 0) - Number(c.z_index || 0));
    return [...r, ...o];
  }
  function Rs() {
    const r = [...Array.isArray(p.shots) ? p.shots : []];
    return [...[...Array.isArray(p.stickers) ? p.stickers : []].sort((s, c) => Number(c.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function $a(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function qp(r, o, s) {
    const c = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (c.length < 4) return;
    const h = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", v = o ? 3.2 : 2.6, b = o ? 4.4 : 3.4, x = o ? 24 : 20;
    $a(P, c), P.fillStyle = g, P.fill(), P.strokeStyle = h, P.lineWidth = v, P.stroke(), P.save(), P.strokeStyle = h, P.lineWidth = b, P.lineCap = "round";
    for (let D = 0; D < 4; D += 1) {
      const L = c[D], Q = c[(D + 3) % 4], H = c[(D + 1) % 4], G = L.x - Q.x, re = L.y - Q.y, fe = Math.hypot(G, re) || 1, ie = H.x - L.x, me = H.y - L.y, Te = Math.hypot(ie, me) || 1;
      P.beginPath(), P.moveTo(L.x, L.y), P.lineTo(L.x - G / fe * x, L.y - re / fe * x), P.moveTo(L.x, L.y), P.lineTo(L.x + ie / Te * x, L.y + me / Te * x), P.stroke();
    }
    const S = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], k = {
      x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
      y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
    }, N = o ? 12 : 9;
    S.forEach((D) => {
      const L = k.x - D.x, Q = k.y - D.y, H = Math.hypot(L, Q) || 1;
      P.beginPath(), P.moveTo(D.x, D.y), P.lineTo(D.x + L / H * N, D.y + Q / H * N), P.stroke();
    }), P.restore();
  }
  function Xp(r, o, s, c) {
    if (un(r)) {
      qp(o, s, c);
      return;
    }
    if (yt(r)) {
      const h = P.globalAlpha;
      P.globalAlpha = op(r), u.mode === "frame" ? (P.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = s ? 2 : 1, $a(P, o.corners), P.stroke()) : Wp(r, s), P.globalAlpha = h;
      return;
    }
    P.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", $a(P, o.corners), P.fill(), P.strokeStyle = s ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = s ? 2.8 : 1.9, $a(P, o.corners), P.stroke();
  }
  function Jp(r, o, s) {
    P.fillStyle = s, o.corners.forEach((c) => {
      P.beginPath(), P.arc(c.x, c.y, 6.5, 0, Math.PI * 2), P.fill();
    }), un(r) && (P.strokeStyle = s, P.lineCap = "round", P.lineWidth = 4, o.edgeMidpoints.forEach((c) => {
      var k, N, D, L;
      const h = (((k = c.b) == null ? void 0 : k.x) ?? c.x) - (((N = c.a) == null ? void 0 : N.x) ?? c.x), g = (((D = c.b) == null ? void 0 : D.y) ?? c.y) - (((L = c.a) == null ? void 0 : L.y) ?? c.y), v = Math.hypot(h, g) || 1, b = h / v, x = g / v, S = 10;
      P.beginPath(), P.moveTo(c.x - b * S, c.y - x * S), P.lineTo(c.x + b * S, c.y + x * S), P.stroke();
    }), P.lineCap = "butt"), Pt(r) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), P.lineTo(o.rotateHandle.x, o.rotateHandle.y), P.stroke(), P.fillStyle = s, P.beginPath(), P.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function Zp() {
    var b;
    const [r, o] = Lp(), s = Sn(), c = s.length > 1, h = t === "cutout" ? Yp() : Bn(), g = h.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${un(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!u._sortedItemsCache || u._sortedItemsCache.src !== h || u._sortedItemsCache.orderKey !== g) && (u._sortedItemsCache = {
      src: h,
      orderKey: g,
      sorted: [...h]
    });
    const v = u._sortedItemsCache.sorted;
    for (const x of v) {
      const S = !c && tp(x);
      if (u.mode === "frame" && !S || !u.showObjects && !un(x)) continue;
      const k = yt(x), N = un(x), D = lr(x);
      if (!k && !N)
        continue;
      const L = Dt(x);
      if (!(t !== "stickers" && !L.visible) && (Xp(x, L, S, D), S && L.visible)) {
        const Q = D ? "#ff4d4f" : k && Et(x) ? "#f59e0b" : "#0070f3";
        Jp(x, L, Q);
      }
    }
    if (c) {
      const x = _s(s);
      if (x != null && x.visible) {
        const S = xs(s) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(x.corners[0].x, x.corners[0].y);
        for (let k = 1; k < x.corners.length; k += 1) P.lineTo(x.corners[k].x, x.corners[k].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = S, x.corners.forEach((k) => {
          P.beginPath(), P.arc(k.x, k.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      }
    } else
      s.forEach((x) => {
        if (!Pt(x) && !Vt(x)) return;
        const S = Dt(x);
        if (!(S != null && S.visible)) return;
        const k = lr(x) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(S.corners[0].x, S.corners[0].y);
        for (let N = 1; N < S.corners.length; N += 1) P.lineTo(S.corners[N].x, S.corners[N].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = k, S.corners.forEach((N) => {
          P.beginPath(), P.arc(N.x, N.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      });
    if (((b = u.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const x = mu(u.interaction.start, u.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), P.fill(), P.stroke(), P.restore();
    }
    u.hqFrames && r >= 40 && o >= 30 && (u.hqFrames -= 1, u.hqFrames > 0 && pe());
  }
  function Qp(r) {
    const o = vr(r), s = K(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), c = 320;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Xc(r, o = !1) {
    const s = K(ea(r), 0.05, 20), c = o ? 320 : 220;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function em(r) {
    if (!X || !r) return !1;
    const o = X.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || X.clientWidth || 0)), c = Math.round(Number(o.clientHeight || X.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(c - Number(r.height || 0)) <= 1;
  }
  function tm() {
    return `obj:${Number(u.objectVisualRevision || 0)}`;
  }
  function nm(r, o = {}) {
    if (!r) return "";
    const s = Mr(), c = s && ur(s) ? Zr(s) : "no_bg", h = Qp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      Ls(),
      tm(),
      ka(),
      c,
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function rm() {
    var D, L, Q, H;
    if (u.outputPreviewRect = null, M.outputPreviewToggle.visible = u.mode !== "frame" && !!Be(), t !== "cutout" || !M.cameraPreview) return;
    if (u.mode === "frame") {
      M.cameraPreview.visible = !1, M.cameraPreview.settled = !1;
      return;
    }
    const r = Be();
    if (!r) {
      M.cameraPreview.visible = !0, M.cameraPreview.ready = !1, M.cameraPreview.settled = !1, M.cameraPreview.expanded = !!u.outputPreviewExpanded, M.cameraPreview.width = 220, M.cameraPreview.height = 132, M.cameraPreview.label = "Add Frame to preview", (D = ue == null ? void 0 : ue.clearScene) == null || D.call(ue), (L = O == null ? void 0 : O.requestRender) == null || L.call(O);
      return;
    }
    M.cameraPreview.visible = !0;
    const o = Mr();
    if (!r || !ue || !O) {
      M.cameraPreview.ready = !1, M.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", M.cameraPreview.expanded = !!u.outputPreviewExpanded, M.cameraPreview.settled = !1, M.cameraPreview.width = 220, M.cameraPreview.height = 132, (Q = ue == null ? void 0 : ue.clearScene) == null || Q.call(ue), (H = O == null ? void 0 : O.requestRender) == null || H.call(O);
      return;
    }
    const s = Xc(r, !!u.outputPreviewExpanded);
    M.cameraPreview.width = s.width, M.cameraPreview.height = s.height, M.cameraPreview.expanded = !!u.outputPreviewExpanded;
    const c = Ra(), h = Oa(c), g = ur(o), v = g ? Zr(o) : "none", b = u.showObjects ? Fa() : Li([]), x = Zi({
      stateRevision: [
        "cutout_preview_camera",
        v,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((G) => String((G == null ? void 0 : G.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((G) => `${String((G == null ? void 0 : G.assetId) || "")}:${String((G == null ? void 0 : G.revision) || "")}`).join(",") : "none",
        b.length ? b.map((G) => `${String((G == null ? void 0 : G.id) || "")}:${String((G == null ? void 0 : G.revision) || "")}:${Number((G == null ? void 0 : G.zIndex) || 0)}`).join(",") : "paint:none",
        u.showPanorama ? "panorama:1" : "panorama:0",
        u.showObjects ? "objects:1" : "objects:0",
        u.showMask ? "showMask:1" : "showMask:0",
        Ft(p.coverage)
      ].join("|"),
      backgroundSource: g && u.showPanorama ? o : null,
      backgroundRevision: g ? `cutout_preview:${v}` : "",
      coverageDeg: Ft(p.coverage),
      scene: c,
      textures: h,
      rasterEntries: b,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(g || h.length > 0 || b.length > 0)) {
      M.cameraPreview.ready = !1, M.cameraPreview.label = "Connect ERP image", M.cameraPreview.settled = !1, ue.clearScene(), O.requestRender();
      return;
    }
    if (u.showPanorama && !g && h.length === 0 && b.length === 0) {
      M.cameraPreview.ready = !1, M.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", M.cameraPreview.settled = !1, ue.clearScene(), O.requestRender();
      return;
    }
    ue.syncScene(x), O.setView(vr(r));
    const k = em(s), N = k ? O.present() : !1;
    k || O.requestRender(), M.cameraPreview.ready = !0, M.cameraPreview.label = k && N ? "" : "Loading preview", M.cameraPreview.settled = k && N && U.pendingStableLayoutFrames <= 0 && U.hasPresentedFrame;
  }
  function im(r, o, s, c = {}) {
    if (!ue || !s) return !1;
    const h = Mr(), g = Ra(), v = Oa(g), b = ur(h), x = u.showObjects ? Fa() : Li([]);
    return b || v.length > 0 || x.length > 0 ? (ue.syncScene(Zi({
      stateRevision: nm(s, c),
      backgroundSource: b && u.showPanorama ? h : null,
      backgroundRevision: b ? `cutout_frame:${Zr(h)}` : "",
      coverageDeg: Ft(p.coverage),
      scene: g,
      textures: v,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), ue.renderShotToContext(r, o, s, c)) : !1;
  }
  function Os(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), c = Number(o.y || 0);
    return Bc(r, s, c);
  }
  function ri(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, c = Math.cos(s);
    return $n(c * Math.sin(o), Math.sin(s), c * Math.cos(o));
  }
  function am(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function om(r, o, s, c = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Ht(r, "widthScale", 1),
      pressureLike: Ht(r, "pressureLike", 1)
    }, ...c, u: o, v: s };
  }
  function sm(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Fs(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const c = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (c) {
      let H = null;
      r.forEach((G) => {
        const re = Number((G == null ? void 0 : G.u) || 0), fe = Number((G == null ? void 0 : G.v) || 0), ie = (re % 1 + 1) % 1, me = H == null ? ie : H + bn(ie, (H % 1 + 1) % 1);
        h.set(G, { x: me, y: fe }), H = me;
      });
    }
    const g = (H) => !H || typeof H != "object" ? { x: 0, y: 0 } : h.get(H) || am(H), v = (H, G, re, fe = {}) => {
      const ie = c ? (Number(G) % 1 + 1) % 1 : Number(G), me = om(H, ie, re, fe);
      return h.set(me, { x: Number(G), y: Number(re) }), me;
    }, b = (H, G, re) => {
      const fe = g(H), ie = g(G);
      return v(H, Xn(fe.x, ie.x, re), Xn(fe.y, ie.y, re), {
        t: Xn(Number((H == null ? void 0 : H.t) || 0), Number((G == null ? void 0 : G.t) || 0), re),
        widthScale: Xn(Ht(H, "widthScale", 1), Ht(G, "widthScale", 1), re),
        pressureLike: Xn(Ht(H, "pressureLike", 1), Ht(G, "pressureLike", 1), re)
      });
    };
    if (r.length === 1) {
      const H = g(r[0]);
      return [v(r[0], H.x, H.y)];
    }
    const x = sm(o, s), S = (H, G) => {
      const re = [0];
      for (let oe = 1; oe < H.length; oe += 1) {
        const ye = g(H[oe - 1]), we = g(H[oe]);
        re.push(re[oe - 1] + Math.hypot(we.x - ye.x, we.y - ye.y));
      }
      const fe = re[re.length - 1] || 0;
      if (fe <= 1e-8) {
        const oe = H[0], ye = g(oe);
        return [v(oe, ye.x, ye.y)];
      }
      const ie = [];
      let me = 0;
      for (let oe = 0; oe <= fe + 1e-9; oe += G) {
        for (; me < re.length - 2 && re[me + 1] < oe; ) me += 1;
        const ye = re[me], we = re[me + 1], Ie = Math.max(1e-8, we - ye);
        ie.push(b(H[me], H[me + 1], K((oe - ye) / Ie, 0, 1)));
      }
      const Te = H[H.length - 1], $e = g(Te), ke = ie[ie.length - 1], Y = ke ? g(ke) : null;
      return (!Y || Math.hypot(Y.x - $e.x, Y.y - $e.y) > G * 0.35) && ie.push(v(Te, $e.x, $e.y)), ie;
    }, k = (H) => {
      if (!Array.isArray(H) || H.length < 3) return H ? H.slice() : [];
      const G = g(H[0]), re = [v(H[0], G.x, G.y)];
      for (let me = 0; me < H.length - 1; me += 1) {
        const Te = H[me], $e = H[me + 1], ke = g(Te), Y = g($e), oe = v(
          Te,
          ke.x * 0.75 + Y.x * 0.25,
          ke.y * 0.75 + Y.y * 0.25,
          {
            t: Number(Te.t || 0) * 0.75 + Number($e.t || 0) * 0.25,
            widthScale: Ht(Te, "widthScale", 1) * 0.75 + Ht($e, "widthScale", 1) * 0.25,
            pressureLike: Ht(Te, "pressureLike", 1) * 0.75 + Ht($e, "pressureLike", 1) * 0.25
          }
        ), ye = v(
          Te,
          ke.x * 0.25 + Y.x * 0.75,
          ke.y * 0.25 + Y.y * 0.75,
          {
            t: Number(Te.t || 0) * 0.25 + Number($e.t || 0) * 0.75,
            widthScale: Ht(Te, "widthScale", 1) * 0.25 + Ht($e, "widthScale", 1) * 0.75,
            pressureLike: Ht(Te, "pressureLike", 1) * 0.25 + Ht($e, "pressureLike", 1) * 0.75
          }
        );
        re.push(oe, ye);
      }
      const fe = H[H.length - 1], ie = g(fe);
      return re.push(v(fe, ie.x, ie.y)), re;
    }, N = S(r, x);
    if (N.length < 3) return N;
    const D = s ? 2 : 1;
    let L = N.slice();
    for (let H = 0; H < D; H += 1) L = k(L);
    return S(L, Math.max(x * 0.75, 55e-5));
  }
  function Ht(r, o, s = 1) {
    const c = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(c) ? Math.max(0, c) : s;
  }
  function lm(r) {
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
  function zi(r, o, s = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const h = c.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, c.width, c.height), h.imageSmoothingEnabled = !0), { canvas: c, ctx: h };
  }
  function $i() {
    const r = Va();
    return `${String(u.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function ii() {
    const r = Va();
    return `${String(u.paintStrokeRevision)}:${String(u.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function Ls() {
    const r = ka(), o = ii();
    return r ? `${o}:${r}` : o;
  }
  function cm() {
    u.paintStrokeRevision += 1, u.paintCompositeRevision += 1;
  }
  function um() {
    u.paintCompositeRevision += 1;
  }
  function fm() {
    u._sortedItemsCache = null, u._strokeGeomCache.clear();
  }
  function Jc() {
    var r, o;
    u.paintEngineRevisionKey = null, (o = (r = u.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, p), u.paintEngineRevisionKey = $i();
  }
  function Zc() {
    p.painting_layer !== null && (p.painting_layer = null), Ia = "";
  }
  function Rt() {
    u.objectVisualRevision = Number(u.objectVisualRevision || 0) + 1, fm(), U.backgroundDirty = !0, U.dirty = !0;
  }
  function Nn({ rebuildPaintEngine: r = !1 } = {}) {
    Zc(), cm(), Rt(), r && Jc();
  }
  function ai() {
    Zc(), um(), Rt();
  }
  function ja() {
    var c;
    const r = Va(), o = `${r.width}x${r.height}`;
    u.paintEngineDescriptorKey !== o && (u.paintEngine = Rl(r), u.paintEngineDescriptorKey = o, u.paintEngineRevisionKey = "");
    const s = $i();
    u.paintEngineRevisionKey !== s && (u.paintEngineRevisionKey = s, (c = u.paintEngine) == null || c.rebuildCommitted(p));
  }
  function Va() {
    const r = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function fn() {
    return Va();
  }
  function dm(r, o, s, c, h = null) {
    const g = lm(r), v = Ht(o, "widthScale", 1) * Ht(o, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * v) : g.model === "world_angle" ? h ? Math.max(0.5, g.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Tt) * s * v) : Math.max(0.5, g.value / (2 * Math.PI) * s * v) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * v);
  }
  function hm(r, o, s = {}) {
    const c = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), g = s.preview === !0, v = g ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * v : 1, c === "mask") {
      r.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = g ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${x})`;
  }
  function pm(r, o, s) {
    const c = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(c) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), c, 0, Math.PI * 2), r.fill());
  }
  function mm(r, o, s, c, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const g = Math.max(c.w, c.h) * 0.25;
    r.save(), hm(r, s, h);
    const v = (b) => pm(r, b, g);
    if (o.length === 1) {
      v(o[0]), r.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const x = o[b], S = o[b + 1];
      if (!x || !S) continue;
      const k = Number(x.x || 0), N = Number(x.y || 0), D = Number(S.x || 0), L = Number(S.y || 0), Q = Math.max(0.5, Math.min(g, Number(x.radiusPx || 0.5))), H = Math.max(0.5, Math.min(g, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(k) || !Number.isFinite(N) || !Number.isFinite(D) || !Number.isFinite(L) || !Number.isFinite(Q) || !Number.isFinite(H)) continue;
      const G = D - k, re = L - N, fe = Math.hypot(G, re);
      if (!Number.isFinite(fe) || fe < 1e-6) {
        v(x);
        continue;
      }
      if (fe > Math.max(c.w, c.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(Q, H)), me = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Te = Math.max(1, Math.ceil(fe / me));
      for (let $e = 0; $e <= Te; $e += 1) {
        const ke = $e / Te;
        v({
          x: Xn(k, D, ke),
          y: Xn(N, L, ke),
          radiusPx: Xn(Q, H, ke)
        });
      }
    }
    v(o[o.length - 1]), r.restore();
  }
  function gm(r, o, s, c) {
    mm(r, o, s, c, { preview: !1 });
  }
  function bm(r, o, s, c, h) {
    var b, x, S, k;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const g = "u", v = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((b = o[0]) == null ? void 0 : b[g]) || 0) * c.w, Number(((x = o[0]) == null ? void 0 : x[v]) || 0) * c.h);
    for (let N = 1; N < o.length; N += 1)
      r.lineTo(Number(((S = o[N]) == null ? void 0 : S[g]) || 0) * c.w, Number(((k = o[N]) == null ? void 0 : k[v]) || 0) * c.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Qc(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function ym(r, o) {
    const s = Qc(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: dm(r, c, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function eu(r, o, s = null) {
    var b, x, S, k;
    if (!(r != null && r.ctx) || !o) return !1;
    const c = s || { w: Number(((b = r.canvas) == null ? void 0 : b.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill")
      return bm(r.ctx, Qc(h), h, c), !0;
    const v = ym(h, c);
    return v.length ? (gm(r.ctx, v, h, c), !0) : !1;
  }
  function vm(r, o, s, c = 8) {
    const h = new Uint8Array(o * s), g = [], v = new Int32Array(o * s), b = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let S = 0; S < o; S += 1) {
        const k = x * o + S;
        if (h[k] || r[k] <= c) continue;
        let N = 0, D = 0;
        v[D] = S, b[D] = x, D += 1, h[k] = 1;
        const L = [];
        let Q = S, H = x, G = S, re = x;
        for (; N < D; ) {
          const fe = v[N], ie = b[N];
          N += 1, L.push({ x: fe, y: ie }), fe < Q && (Q = fe), ie < H && (H = ie), fe > G && (G = fe), ie > re && (re = ie);
          const me = [
            [(fe - 1 + o) % o, ie],
            [(fe + 1) % o, ie],
            [fe, ie - 1],
            [fe, ie + 1]
          ];
          for (const [Te, $e] of me) {
            if ($e < 0 || $e >= s) continue;
            const ke = $e * o + Te;
            h[ke] || r[ke] <= c || (h[ke] = 1, v[D] = Te, b[D] = $e, D += 1);
          }
        }
        g.push({ pixels: L, minX: Q, minY: H, maxX: G, maxY: re });
      }
    return g;
  }
  function _m(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, S) => x - S);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let c = -1, h = 0;
    for (let x = 0; x < s.length; x += 1) {
      const S = s[x], N = (x === s.length - 1 ? s[0] + o : s[x + 1]) - S - 1;
      N > c && (c = N, h = x);
    }
    const g = (s[(h + 1) % s.length] + o) % o;
    let v = 1 / 0, b = -1 / 0;
    for (const x of s) {
      const S = (x - g + o) % o;
      v = Math.min(v, S), b = Math.max(b, S);
    }
    return {
      startX: g,
      widthPx: Math.max(1, b - v + 1)
    };
  }
  function xm(r, o, s = {}) {
    var S;
    const c = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), g = (S = r == null ? void 0 : r.getContext) == null ? void 0 : S.call(r, "2d");
    if (!g || c < 1 || h < 1) return [];
    const v = g.getImageData(0, 0, c, h), b = new Uint8Array(c * h);
    for (let k = 0; k < b.length; k += 1) b[k] = v.data[k * 4 + 3];
    return vm(b, c, h, 8).map((k, N) => {
      const D = _m(k, c);
      if (!D) return null;
      const L = Number(D.widthPx || 0), Q = k.maxY - k.minY + 1, H = Number(D.startX || 0), G = document.createElement("canvas");
      G.width = L, G.height = Q;
      const re = G.getContext("2d");
      if (!re) return null;
      const fe = re.createImageData(L, Q);
      return k.pixels.forEach(({ x: ie, y: me }) => {
        const Te = (me * c + ie) * 4, $e = (Number(ie || 0) - H + c) % c, ke = ((me - k.minY) * L + $e) * 4;
        fe.data[ke + 0] = v.data[Te + 0], fe.data[ke + 1] = v.data[Te + 1], fe.data[ke + 2] = v.data[Te + 2], fe.data[ke + 3] = v.data[Te + 3];
      }), re.putImageData(fe, 0, 0), {
        id: hi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: k.minY / h,
          u1: L / c,
          v1: (k.maxY + 1) / h
        },
        rasterDataUrl: G.toDataURL("image/png"),
        transform: {
          du: H / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ji(r, o) {
    if (!r || !o) return null;
    const s = Da(r), c = Pn(o, s.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const h = Pn(o, s.right) / c, g = Pn(o, s.up) / c, v = h * s.cr + g * s.sr, b = -h * s.sr + g * s.cr;
    return {
      x: (v / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function wm(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (u.mode === "unwrap") {
      const s = cr();
      return r.map((c) => ({
        x: s.x + Number(c.u || 0) * s.w,
        y: s.y + Number(c.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Oi(ri(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function tu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (u.mode === "unwrap") {
      const c = cr();
      return r.map((h) => {
        const g = (Number(h.u || 0) % 1 + 1) % 1, v = o == null ? g : Number(o || 0) + bn(g, o);
        return {
          x: c.x + v * c.w,
          y: c.y + Number(h.v || 0) * c.h
        };
      });
    }
    const s = r.map((c) => Oi(ri(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Sm(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const c = r[s], h = r[(s + 1) % r.length];
      if (!c || !h || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(c.x), Number(h.y) - Number(c.y)) > o) return !1;
    }
    return !0;
  }
  function Nm(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const c = [];
    for (const h of r) {
      const g = ri(h), v = ji(o, g);
      if (!v) return [];
      c.push({
        x: Number(s.x || 0) + Number(v.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(v.y || 0) * Number(s.h || 0)
      });
    }
    return Sm(c, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? c : [];
  }
  function Mm(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const c = [];
    for (const h of r) {
      const g = ri(h), v = ji(o, g);
      v && c.push({
        x: Number(s.x || 0) + Number(v.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(v.y || 0) * Number(s.h || 0)
      });
    }
    return c;
  }
  function km() {
    var h;
    const r = Be(), o = Ct(r);
    if (!r || !o) return !1;
    P.save(), P.fillStyle = "#050505", P.fillRect(0, 0, C.width, C.height), P.shadowColor = "rgba(0, 0, 0, 0.45)", P.shadowBlur = 24, P.shadowOffsetX = 0, P.shadowOffsetY = 10, P.fillStyle = "rgba(14, 14, 14, 1)", P.fillRect(o.x, o.y, o.w, o.h), P.restore(), P.save(), P.beginPath(), P.rect(o.x, o.y, o.w, o.h), P.clip();
    const s = u.interaction ? "draft" : String(((h = p.ui_settings) == null ? void 0 : h.preview_quality) || "balanced");
    return im(P, o, r, { quality: s }) === !0 || (P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(o.x, o.y, o.w, o.h)), P.restore(), P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.12)", P.lineWidth = 1, P.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), P.restore(), !0;
  }
  function Pm() {
    var x, S;
    if (((x = u.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = u.interaction.stroke, o = (S = r == null ? void 0 : r.geometry) == null ? void 0 : S.points;
    let s;
    if (u.mode === "frame") {
      const k = Be(), N = Ct(k);
      s = Nm(o, k, N);
    } else
      s = wm(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const c = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(h.r || 0) * 255), v = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let k = 1; k < s.length; k++) P.lineTo(Number(s[k].x || 0), Number(s[k].y || 0));
    P.closePath(), c ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${g},${v},${b},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function Am() {
    u.mode === "frame" ? km() : u.mode === "unwrap" ? Vp(!1) : Hp(!1), t === "cutout" && rm(), Zp(), Pm(), M.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && Ue(), U.hasPresentedFrame || (U.hasPresentedFrame = !0, R.style.opacity = "1"), t === "cutout" && M.cameraPreview && (M.cameraPreview.settled = U.pendingStableLayoutFrames <= 0 && U.hasPresentedFrame && u.mode !== "frame");
    const r = Dp();
    r ? (J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", r)) : (J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind"));
  }
  function Cm(r = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Tm() {
    e.__panoLiveStateOverride = p, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Zh();
  }
  function pe(r = {}) {
    var b, x, S, k, N, D, L, Q, H, G;
    const o = !!r.localOnly, s = r.externalSync === !0, c = String(r.cause || ""), h = String(((b = u.interaction) == null ? void 0 : b.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Cm() || !!((x = u.viewTween) != null && x.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (U.backgroundDirty = !0), o && Sc() && (u.livePaintInteractionRevision += 1, U.backgroundDirty = !0), (!o || c === "selection" || c === "mode" || c === "cutout_frame") && (ks(), Ta()), Tm(), s && ((k = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || k.call(S), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && ((L = (D = e.graph) == null ? void 0 : D.setDirtyCanvas) == null || L.call(D, !0, !0), (G = (H = (Q = hn) == null ? void 0 : Q.canvas) == null ? void 0 : H.setDirty) == null || G.call(H, !0, !0)), U.dirty = !0;
  }
  function nu() {
    const r = C.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return C.width !== o || C.height !== s || R.width !== o || R.height !== s ? (C.width = o, C.height = s, R.width = o, R.height = s, U.backgroundDirty = !0, U.dirty = !0, t === "cutout" && (U.pendingStableLayoutFrames = Math.max(Number(U.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function zs(r = performance.now()) {
    var o;
    if (U.running) {
      if (U.lastTickTs = r, u.outputPreviewAnim !== u.outputPreviewAnimTo) {
        const s = Math.max(1, Number(u.outputPreviewAnimDurationMs)), c = K((r - Number(u.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? gx(c) : vx(c);
        u.outputPreviewAnim = Xn(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, g), U.dirty = !0, c >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
      }
      if ((o = u.viewTween) != null && o.active) {
        const s = u.viewTween, c = K((r - s.startTs) / s.durationMs, 0, 1), h = mx(c);
        u.viewYaw = Lt(s.startYaw + s.deltaYaw * h), u.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * h, u.viewFov = s.startFov + (s.targetFov - s.startFov) * h, U.backgroundDirty = !0, U.dirty = !0, c >= 1 && (u.viewTween = null);
      }
      if (u.viewInertia.vx = Number(Ot.state.inertia.vx || 0), u.viewInertia.vy = Number(Ot.state.inertia.vy || 0), u.viewInertia.active = !!Ot.state.inertia.active, Ot.stepInertia(r) && (u.viewInertia.vx = Number(Ot.state.inertia.vx || 0), u.viewInertia.vy = Number(Ot.state.inertia.vy || 0), u.viewInertia.active = !!Ot.state.inertia.active, U.backgroundDirty = !0, U.dirty = !0), (U.dirty || r - U.lastSizeCheckTs >= 220) && (nu(), U.lastSizeCheckTs = r), U.pendingStableLayoutFrames > 0 && (U.pendingStableLayoutFrames -= 1, U.dirty = !0), U.dirty) {
        if (U.pendingStableLayoutFrames > 0) {
          U.rafId = requestAnimationFrame(zs);
          return;
        }
        U.dirty = !1, Am();
      }
      U.rafId = requestAnimationFrame(zs);
    }
  }
  function Im() {
    U.running = !1, U.rafId && cancelAnimationFrame(U.rafId), U.rafId = 0;
  }
  function st() {
    i || (u.historyController.commitActionGroup(JSON.stringify(qf(p))), Gs());
  }
  function $s(r) {
    if (i) return;
    const o = r < 0 ? u.historyController.undo() : u.historyController.redo();
    if (Gs(), !o) return;
    const s = JSON.parse(o);
    Object.keys(p).forEach((c) => delete p[c]), Object.assign(p, s), u.selectedId = t === "stickers" || t === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, u.selectedIds = u.selectedId ? [u.selectedId] : [], Nn(), nn(), He(), yn(), pe({ cause: "cutout_frame" });
  }
  function ru() {
    var s, c;
    const r = Array.isArray((s = u.historyController) == null ? void 0 : s.entries) ? u.historyController.entries : [], o = Number((c = u.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function nn() {
    Bh();
    const r = Qv({
      editor: u,
      swatches: Co,
      paintColorPopOpen: Me ? !Me.hidden : !1,
      colorToCss: Dn,
      colorsApproximatelyEqual: To,
      rgb01ToHsv: _l,
      hsv01ToRgb: vl,
      getBrushPresetIdForTool: dr,
      isActiveLassoTool: lp
    });
    if (Object.assign(M.paintDock, r), pp(), !r.visible) {
      Me && (Me.hidden = !0);
      return;
    }
    pt && (clearTimeout(pt), pt = 0), ve && (!r.colorEnabled && Me && !Me.hidden && (pt = window.setTimeout(() => {
      Me.hidden = !0, M.paintDock.colorPopOpen = !1, pt = 0;
    }, 170)), Me && (Me.style.setProperty("--picker-hue-color", r.pickerHueColor), Me.style.setProperty("--picker-sat", r.pickerSat), Me.style.setProperty("--picker-val", r.pickerVal), Me.style.setProperty("--picker-hue", r.pickerHue)), Ve && (Ve.style.left = r.pickerSvLeft, Ve.style.top = r.pickerSvTop), Nt && (Nt.style.left = r.pickerHueLeft));
  }
  function js() {
    const r = it();
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
    var me, Te, $e, ke;
    if (a) return;
    p.ui_settings = p.ui_settings || {};
    const r = Zv(p.ui_settings);
    if (l) {
      M.sidePanel = e1({
        coverage: p.coverage,
        uiSettings: r,
        normalizeCoverageValue: Ft
      });
      return;
    }
    const o = it(), s = Sn(), c = Ca();
    s.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && c !== "stroke" && (u.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (c === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (c === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: qi(o)
    });
    const h = u.panelLastValues || (t === "stickers" || c === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = c === "stroke" ? null : o, v = g || h, b = !!g;
    u.panelWasEnabled = b, ks();
    let x = null;
    if (t === "stickers" || t === "cutout") {
      const Y = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Bn().forEach((we, Ie) => {
        var We, Ye;
        if (!we) return;
        const Oe = Et(we) ? String(we.id || Ir) : String(((Ye = (We = p.assets) == null ? void 0 : We[we.asset_id]) == null ? void 0 : Ye.name) || we.asset_id || we.id), Fe = `${Ie + 1}. ${Oe}${Et(we) && Jr(we) ? " (hidden)" : ""}`, Ke = Ac({ item: we, label: Fe, kind: "image" });
        Y.push({ id: we.id, label: Ke.label, icon: Ke.icon, item: we, kind: "image" });
      }) : Pc().forEach((we) => {
        if (!(we != null && we.item)) return;
        const Ie = Ac(we);
        Y.push({ id: we.item.id, label: Ie.label, icon: Ie.icon, item: we.item, kind: we.kind });
      });
      const oe = (g == null ? void 0 : g.id) || "", ye = Y.find((we) => we.id === oe) || Y[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: Y.length <= 1,
        currentLabel: ye.label,
        currentIcon: ye.icon || null,
        items: Y.map((we) => ({
          id: we.id,
          label: we.label,
          icon: we.icon || null,
          active: we.id === oe
        }))
      };
    }
    const S = [], k = (Y, oe, ye, we, Ie) => {
      const Oe = K(Number(v[Y] || 0), ye, we);
      S.push({
        key: Y,
        label: oe,
        min: ye,
        max: we,
        step: Ie,
        value: Oe,
        displayValue: Sx(Oe),
        fillPct: K((Oe - ye) / Math.max(1e-6, we - ye) * 100, 0, 100),
        enabled: b && !i
      });
    }, N = [];
    s.length > 1 ? (N.push(`Selected objects: ${s.length}`), N.push("Multi-selection supports z-order and delete.")) : (k("yaw_deg", "Yaw", -180, 180, 0.1), k("pitch_deg", "Pitch", -90, 90, 0.1), k("hFOV_deg", "H FOV", 1, 179, 0.1), k("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || c === "image" ? k("rot_deg", "Rotation", -180, 180, 0.1) : k("roll_deg", "Roll", -180, 180, 0.1));
    const D = Array.isArray((Te = (me = p == null ? void 0 : p.painting) == null ? void 0 : me.paint) == null ? void 0 : Te.strokes) ? p.painting.paint.strokes.length : 0, L = Array.isArray((ke = ($e = p == null ? void 0 : p.painting) == null ? void 0 : $e.mask) == null ? void 0 : ke.strokes) ? p.painting.mask.strokes.length : 0, Q = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((Y) => String((Y == null ? void 0 : Y.name) || "")) : [], H = Uh(
      e,
      Q.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), G = !!String((H == null ? void 0 : H.src) || "").trim() || ws("pano_input_images").length > 0, re = Array.isArray(Bn()) && Bn().length > 0 || D > 0, fe = L > 0, ie = [
      { key: "mask", label: "Mask", icon: De.circle_dashed_tool, visible: !!u.showMask, enabled: fe },
      { key: "objects", label: "Paint / Images", icon: De.image, visible: !!u.showObjects, enabled: re },
      { key: "panorama", label: "Panorama", icon: De.globe, visible: !!u.showPanorama, enabled: G }
    ].map((Y) => ({
      ...Y,
      ariaLabel: `Toggle ${Y.label.toLowerCase()}`,
      tip: Y.visible ? "Hide" : "Show"
    }));
    M.sidePanel = t1({
      coverage: p.coverage,
      readOnly: i,
      selectionPicker: x,
      enabled: b,
      selectedKind: c,
      selectedItems: s,
      params: S,
      notes: N,
      visibilityRows: ie,
      uiSettings: r,
      normalizeCoverageValue: Ft
    });
  }
  function Ha(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function iu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !Ha(r)) return;
    const o = yo("asset"), s = URL.createObjectURL(r);
    try {
      const c = await new Promise((v, b) => {
        const x = new Image();
        x.onload = () => v(x), x.onerror = () => b(new Error("image load failed")), x.src = s;
      });
      Z.set(o, c);
      const h = yo("st");
      p.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Nr(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0,
        z_index: Cc()
      }), Sr(p.stickers[p.stickers.length - 1]), Vs(), st(), He(), Ue(), pe();
      const g = (async () => {
        const v = await Cs(r, String(r.name || o));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (p.assets[o] = v, ni(), vt(), He(), Ue(), pe());
      })();
      co.set(o, g);
      try {
        await g;
      } finally {
        co.delete(o);
      }
    } catch {
      delete p.assets[o], Z.delete(o);
      const c = Array.isArray(p.stickers) ? p.stickers : [], h = c.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
      h.length && (p.stickers = c.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), h.some((g) => {
        var v;
        return String((g == null ? void 0 : g.id) || "") === String(((v = u.selection) == null ? void 0 : v.id) || "");
      }) && Sr(null), He(), Ue(), pe());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function au(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var c;
      const s = (c = o.files) == null ? void 0 : c[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Em() {
    i || t !== "stickers" && t !== "cutout" || au((r) => {
      iu(r);
    });
  }
  async function Dm(r) {
    var S;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = it();
    if (!o || !yt(o) || Et(o) || !Ha(r)) return;
    const s = String(o.id || ""), c = String(o.asset_id || ""), h = c ? Ut(((S = p.assets) == null ? void 0 : S[c]) || null) : null, g = Number(o.vFOV_deg || 0), v = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = yo("asset"), x = URL.createObjectURL(r);
    try {
      const k = await new Promise((D, L) => {
        const Q = new Image();
        Q.onload = () => D(Q), Q.onerror = () => L(new Error("image load failed")), Q.src = x;
      });
      Z.set(b, k), o.asset_id = b, o.vFOV_deg = Nr(
        Number(o.hFOV_deg || 30),
        Number(k.naturalWidth || k.width || 1),
        Number(k.naturalHeight || k.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Rt(), st(), He(), Ue(), pe();
      const N = (async () => {
        const D = await Cs(r, String(r.name || b));
        (Array.isArray(p.stickers) ? p.stickers : []).some((H) => String((H == null ? void 0 : H.id) || "") === s && String((H == null ? void 0 : H.asset_id) || "") === b) && (p.assets[b] = D, ni(), vt(), He(), Ue(), pe());
      })();
      co.set(b, N);
      try {
        await N;
      } finally {
        co.delete(b);
      }
    } catch {
      delete p.assets[b], Z.delete(b);
      const k = (Array.isArray(p.stickers) ? p.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === s) || null;
      k && String(k.asset_id || "") === b && (c && h && (p.assets[c] = h), k.asset_id = c, k.vFOV_deg = g, k.crop = v ? { ...v } : null), Rt(), He(), Ue(), pe();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Rm() {
    if (i) return;
    const r = it();
    !r || !yt(r) || Et(r) || au((o) => {
      Dm(o);
    });
  }
  async function Om() {
    if (i || t !== "stickers") return;
    const r = p.assets && typeof p.assets == "object" ? p.assets : {}, o = Object.entries(r).filter(([, c]) => {
      const h = String((c == null ? void 0 : c.type) || "").toLowerCase(), g = String((c == null ? void 0 : c.value) || "");
      return h === "dataurl" && g.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [c, h] of o)
      try {
        const g = String((h == null ? void 0 : h.value) || "");
        if (!g) continue;
        const v = await fetch(g).then((N) => N.blob()), b = String(v.type || "image/png").split("/")[1] || "png", x = String((h == null ? void 0 : h.name) || `${c}.${b}`), S = new File([v], x, { type: v.type || "image/png" }), k = await Cs(S, x);
        p.assets[c] = {
          ...k,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (vt(), pe());
  }
  function Fm() {
    if (i || t !== "cutout") return;
    const r = Be();
    if (r) {
      Sr(r), u.mode = "pano", ps(
        Lt(Number(r.yaw_deg || 0)),
        K(Number(r.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), He(), Ue(), pe({ cause: "cutout_frame" });
      return;
    }
    const o = Mr(), s = ur(o), c = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (C == null ? void 0 : C.width) || 1
    )), h = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (C == null ? void 0 : C.height) || 1
    )), g = Math.max(0.1, c / h), v = K(Number(u.viewFov || 90), 1, 179), b = K(Math.min(42, v * 0.42), 8, 96), x = K(br * (2 * Math.atan(Math.tan(b * Tt * 0.5) / Math.max(0.1, g))), 6, 72), S = Fh({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Lt(Number(u.viewYaw || 0)),
      pitch_deg: K(Number(u.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: b,
      vFOV_deg: x,
      locked: !1
    });
    p.shots = [S], Sr(S), Vs(), u.mode = "pano", st(), vt(), He(), Ue(), pe({ cause: "cutout_frame" });
  }
  function Lm() {
    i || t === "cutout" && (p.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, p.active.selected_shot_id = null, st(), vt(), He(), pe());
  }
  function zm() {
    const r = Array.isArray(p.stickers) ? p.stickers : [], o = [];
    for (const s of r)
      Et(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function ou(r, o, s = "Clear") {
    return new Promise((c) => {
      M.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: c
      };
    });
  }
  async function $m() {
    var s, c;
    if (i || !await ou(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ca(null), Nn();
    const o = zm();
    t === "stickers" ? (p.stickers = o, p.assets = {}, u.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], p.active.selected_sticker_id = ((c = o[0]) == null ? void 0 : c.id) || null, ni()) : (p.stickers = o, p.assets = {}, p.shots = [], u.selectedId = null, u.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, ni()), st(), vt(), He(), Ue(), pe();
  }
  async function jm(r) {
    var g, v, b, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", c = si(o);
    if (!(!c.length && !(((g = u.interaction) == null ? void 0 : g.kind) === "draw" && ((v = u.interaction) == null ? void 0 : v.layerKind) === o) || !await ou(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = u.interaction) == null ? void 0 : b.kind) === "draw" && ((x = u.interaction) == null ? void 0 : x.layerKind) === o) {
        const S = fn();
        S && u.paintEngine.cancelActiveStroke(S), u.interaction = null;
      }
      c.length = 0, p.painting.raster_objects = tn().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (jt().length = 0), Nn(), st(), vt(), He(), Ue(), nn(), pe();
    }
  }
  function Vm() {
    if (i) return;
    const r = it();
    if (!r || !yt(r) || Et(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = yo("st"), o.yaw_deg = Lt((o.yaw_deg || 0) + 8), o.z_index = Cc(), p.stickers.push(o), p.active.selected_sticker_id = o.id, u.selectedId = o.id, u.selectedIds = [o.id], Rt(), st(), vt(), Ue(), He(), pe();
  }
  function su() {
    var s, c, h, g, v, b;
    if (i) return;
    const r = Sn(), o = it();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((N) => Pt(N)).map((N) => String(N.actionGroupId || N.id || ""))), S = new Set(r.filter((N) => Vt(N)).map((N) => At(N.rasterObjectId || N.id || ""))), k = new Set(r.filter(yt).map((N) => String(N.id || "")));
        x.size > 0 && (p.painting.paint.strokes = (Array.isArray((c = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : c.strokes) ? p.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), p.painting.groups = jt().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), Nn()), S.size > 0 && (p.painting.raster_objects = tn().filter((N) => !S.has(String((N == null ? void 0 : N.id) || ""))), ai()), k.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((N) => k.has(String((N == null ? void 0 : N.id) || "")) ? Et(N) ? (Jr(N) || (N.visible = !1), !0) : !1 : !0), ni(), Rt()), u.selectedId = null, u.selectedIds = [], st(), vt(), He(), Ue(), pe();
        return;
      }
      if (Pt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (h = p.painting) == null ? void 0 : h.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== x), p.painting.groups = jt().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== x), Nn(), u.selectedId = null, u.selectedIds = [], st(), vt(), He(), Ue(), pe();
        return;
      }
      if (Vt(o)) {
        const x = At(o.rasterObjectId || o.id || "");
        p.painting.raster_objects = tn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== x), ai(), u.selectedId = null, u.selectedIds = [], st(), vt(), He(), Ue(), pe();
        return;
      }
      if (t === "stickers" || yt(o)) {
        if (Et(o)) {
          if (Jr(o)) return;
          o.visible = !1, Rt(), st(), vt(), He(), Ue(), pe();
          return;
        }
        p.stickers = p.stickers.filter((x) => x.id !== o.id), ni(), Rt(), u.selectedId = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], p.active.selected_sticker_id = ((b = p.stickers[0]) == null ? void 0 : b.id) || null, st(), vt(), He(), Ue(), pe();
        return;
      }
      Lm();
    }
  }
  function Hm(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const D = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(D)) {
        const [H, G] = D.split(":").map((re) => Number(re));
        if (Number.isFinite(H) && Number.isFinite(G)) return H >= G;
      }
      const L = Number(r.hFOV_deg || 64), Q = Number(r.vFOV_deg || 40);
      return Math.abs(L - Q) > 1e-6 ? L >= Q : ea(r) >= 1;
    })();
    let [h, g] = s[String(o)] || s["1:1"];
    h >= g !== c && ([h, g] = [g, h]);
    const v = h / g, b = K(Number(r.hFOV_deg || 64), 1, 179), x = K(Number(r.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * x)), k = K(S * Math.sqrt(v), 1, 179), N = K(S / Math.sqrt(v), 1, 179);
    r.hFOV_deg = k, r.vFOV_deg = N, r.aspect_id = String(o);
  }
  function Um(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), s = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = s, r.vFOV_deg = o, r.aspect_id = Or(r);
  }
  function lu() {
    Yr().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Bm() {
    if (i) return;
    const r = Sn();
    if (!it() || r.length === 0) return;
    lu();
    const s = Yr(), c = new Set(r.map((b) => yt(b) ? `sticker:${String(b.id || "")}` : Vt(b) ? `rasterObject:${At(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], g = [];
    if (s.forEach((b) => {
      var S, k;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((k = b.item) == null ? void 0 : k.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(x) ? h.push(b) : g.push(b);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...g, ...h].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Rt(), st(), vt(), Ue(), pe();
  }
  function Gm() {
    if (i) return;
    const r = Sn();
    if (!it() || r.length === 0) return;
    lu();
    const s = Yr(), c = new Set(r.map((b) => yt(b) ? `sticker:${String(b.id || "")}` : Vt(b) ? `rasterObject:${At(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], g = [];
    if (s.forEach((b) => {
      var S, k;
      const x = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((k = b.item) == null ? void 0 : k.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(x) ? h.push(b) : g.push(b);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...g].forEach((b, x) => {
      b.type === "sticker" && b.item && (b.item.z_index = x), b.type === "strokeGroup" && b.item && (b.item.z_index = x), b.type === "rasterObject" && b.item && (b.item.z_index = x);
    }), Rt(), st(), vt(), Ue(), pe();
  }
  function Km() {
    i || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", d && (p.output_preset = Gl(d.value, Number(p.output_preset || 2048))), m && (p.coverage = Ft(m.value)), y && (p.bg_color = String(y.value || p.bg_color || "#00ff00")), yn(), e.setDirtyCanvas(!0, !0));
  }
  function yn() {
    var o;
    if (i) return;
    p.coverage = Ft(p.coverage);
    const r = JSON.stringify(p);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function Ua() {
    p.ui_settings = Ax(p.ui_settings), i || yn();
  }
  function vt() {
    var r;
    i || (yn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Wm() {
    i || Ep() && Hc().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Ym(r = {}) {
    var c, h, g, v, b, x, S, k, N, D;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || h.call(c), (v = (g = e.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || v.call(g), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), s && ((S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (D = (N = (k = hn) == null ? void 0 : k.canvas) == null ? void 0 : N.setDirty) == null || D.call(N, !0, !0));
  }
  function Vs() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", nn(), He());
  }
  function oi(r) {
    const o = C.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * C.width,
      y: (r.clientY - o.top) / o.height * C.height
    };
  }
  function Ba(r) {
    const o = C.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function cu() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function Be() {
    if (t !== "cutout") return null;
    const r = Array.isArray(p.shots) ? p.shots : [];
    if (!r.length) return null;
    const o = String(p.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Ct(r = Be()) {
    var v, b, x;
    if (!r || !C) return null;
    const o = {
      x: 24,
      y: 24,
      w: Math.max(1, Number(C.width || 0) - 48),
      h: Math.max(1, Number(C.height || 0) - 48)
    }, s = K(ea(r), 0.1, 10);
    let c = o.w, h = Math.max(1, Math.round(c / s));
    h > o.h && (h = o.h, c = Math.max(1, Math.round(h * s)));
    const g = Math.max(0.1, Number(((v = u.frameView) == null ? void 0 : v.zoom) || 1));
    return c *= g, h *= g, {
      x: Math.round(o.x + (o.w - c) * 0.5 + Number(((b = u.frameView) == null ? void 0 : b.panX) || 0)),
      y: Math.round(o.y + (o.h - h) * 0.5 + Number(((x = u.frameView) == null ? void 0 : x.panY) || 0)),
      w: Math.max(1, Math.round(c)),
      h: Math.max(1, Math.round(h))
    };
  }
  function Hs() {
    return t === "cutout" && !!Be();
  }
  function Mn(r, o = performance.now()) {
    if (u.mode === "unwrap") {
      const g = cr(), v = (r.x - g.x) / Math.max(1, g.w), b = (r.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (v % 1 + 1) % 1,
        v: K(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = As(r.x, r.y), { lon: c, lat: h } = Is(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: K(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function kn(r, o, s = performance.now()) {
    const c = Ct(o);
    if (!c) return null;
    const h = {
      x: (Number(r.x) - c.x) / Math.max(1, c.w),
      y: (Number(r.y) - c.y) / Math.max(1, c.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const g = Os(o, h);
    if (!g) return null;
    const { lon: v, lat: b } = Is(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (v / (2 * Math.PI) + 0.5 + 1) % 1,
      v: K(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function qm(r, o) {
    var S;
    const s = Be(), c = Ct(s);
    if (!s || !c) return !1;
    const h = Math.max(0.1, Number(((S = u.frameView) == null ? void 0 : S.zoom) || 1)), g = K(h * Number(o), 0.25, 12);
    if (Math.abs(g - h) < 1e-6) return !1;
    const v = (Number(r.x) - c.x) / Math.max(1e-6, c.w), b = (Number(r.y) - c.y) / Math.max(1e-6, c.h);
    u.frameView.zoom = g;
    const x = Ct(s);
    return x ? (u.frameView.panX += Number(r.x) - (x.x + x.w * v), u.frameView.panY += Number(r.y) - (x.y + x.h * b), !0) : !1;
  }
  function Xm(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function dr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? Yn : rn[o] ? o : u.activeBrushPresetId || Yn;
  }
  function uu() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (cu() || Hs());
  }
  function fu() {
    var r;
    return uu() && ((r = u.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function Ga(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), c = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, g = u.pointerPos || { x: 0, y: 0, inside: !1 }, v = g.inside !== h || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - c) > 0.01;
    return u.pointerPos = { x: s, y: c, inside: h }, v;
  }
  function Jm() {
    var k, N;
    if (!fu()) return null;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool, s = dr(o), c = rn[s] || rn[Yn], h = Number(u.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), v = Math.max(3, g * 0.5), b = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : dn(u.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : K(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : K(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: c,
      radius: v,
      fillStyle: Dn(b, x),
      strokeStyle: Dn(b, S),
      x: Number(((k = u.pointerPos) == null ? void 0 : k.x) || 0),
      y: Number(((N = u.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: v,
      hotspotY: v
    };
  }
  function Zm() {
    var D, L, Q;
    const r = Jm();
    if (!ne) return;
    if (!r) {
      ne.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, c = "999px", h = 0, g = r.fillStyle, v = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let k = Number(r.hotspotX ?? o * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = Jo, s = Jo, c = "0", v = "0", b = "none", k = dx, N = hx, g = xx(r.fillStyle, S, x);
    else if (r.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const H = Math.max(1, Number(((D = r.preset) == null ? void 0 : D.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * H), s = Math.max(6, r.radius * 2), c = `${Math.min(6, s * 0.42)}px`, h = Number(((Q = (L = r.preset) == null ? void 0 : L.angle) == null ? void 0 : Q.value) || 0) * br;
    } else r.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    ne.style.display = "block", ne.style.width = `${Math.round(o)}px`, ne.style.height = `${Math.round(s)}px`, ne.style.borderRadius = c, ne.style.border = v, ne.style.boxShadow = b, ne.style.background = g, ne.style.backgroundRepeat = "no-repeat", ne.style.backgroundPosition = "center", ne.style.backgroundSize = "contain", ne.style.transform = `translate(${Math.round(r.x - k)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function Qm() {
    var fe;
    if (!te || !xe) return;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool;
    if (o === "lasso_fill") return;
    const s = dr(o), c = rn[s] || rn[Yn], h = Number(u.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), v = Math.max(6, g * 0.5), b = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : dn(u.paintColor), S = r === "mask" ? Dn(x, 0.22) : b ? "rgba(255,255,255,0.14)" : Dn(x, K(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), k = r === "mask" ? Dn(x, 0.96) : b ? "rgba(255,255,255,0.72)" : Dn(x, K(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = v * 2, D = v * 2, L = "999px", Q = 0, H = S;
    const G = "rgba(222, 222, 222, 0.72)", re = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ie = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      N = Math.max(16, v * 2 * ie), D = Math.max(10, v * 2), L = `${Math.min(8, D * 0.42)}px`, Q = Number(((fe = c == null ? void 0 : c.angle) == null ? void 0 : fe.value) || 0) * br;
    } else o === "brush" ? H = `radial-gradient(circle at 50% 50%, ${k} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, v * 1.8), D = N, H = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${k} 43%, ${k} 58%, rgba(0,0,0,0) 59%)`) : b && (H = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(N)}px`, xe.style.height = `${Math.round(D)}px`, xe.style.borderRadius = L, xe.style.background = H, xe.style.border = `1px solid ${G}`, xe.style.boxShadow = `0 0 0 1px ${re}`, xe.style.transform = `rotate(${Q}deg)`, wt && (clearTimeout(wt), wt = 0), te.classList.remove("fade-out"), te.classList.add("show");
  }
  function Ka() {
    !te || !te.classList.contains("show") || (te.classList.add("fade-out"), wt && clearTimeout(wt), wt = window.setTimeout(() => {
      te.classList.remove("show", "fade-out"), wt = 0;
    }, 180));
  }
  function du(r, o, s, c) {
    const h = dr(o), g = rn[h] || rn[Yn], v = u.brushSizes[h] ?? 10, b = Math.max(1, v) * Math.max(0.1, g.sizeScale ?? 1), x = Xm(c, b), S = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), k = {
      id: hi(r),
      actionGroupId: hi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((N) => ({ ...N })),
        points: S.map((N) => ({ ...N }))
      }
    };
    return Vf(k, g), Number(g.aspect ?? 1), Number(k.aspect ?? 1), String(k.stampKind || ""), Number(k.size || 0), String(k.radiusModel || ""), Number(k.radiusValue || 0), { ...k.targetSpace }, k;
  }
  function hu(r, o, s, c) {
    const h = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), g = dr(o), v = rn[g] || rn[Yn], b = {
      id: hi(r),
      actionGroupId: hi("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((x) => ({ ...x }))
      }
    };
    return Vf(b, v), Number(v.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function si(r) {
    const o = p.painting || (p.painting = ca(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function eg(r, o, s = performance.now()) {
    let c;
    if (u.mode === "frame") {
      const S = Be();
      if (!S || (c = kn(o, S, s), !c)) return !1;
    } else
      c = Mn(o, s);
    if (!c) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, g = r.stroke.geometry.points, v = h[h.length - 1];
    if (v) {
      const S = Math.abs(Number(c.u ?? c.x ?? 0) - Number(v.u ?? v.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (S < 15e-4 && k < 15e-4) return !1;
    }
    const b = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), g.push({ ...b });
    const x = fn();
    if (x) {
      const S = u.paintEngine.ensureTarget(x);
      u.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), r.stroke);
    }
    return !0;
  }
  function tg(r, o, s = performance.now()) {
    var v, b;
    let c;
    if (u.mode === "frame") {
      const x = Be();
      if (!x) return !1;
      c = kn(o, x, s);
    } else
      c = Mn(o, s);
    const h = (b = (v = r == null ? void 0 : r.stroke) == null ? void 0 : v.geometry) == null ? void 0 : b.points;
    if (!c || !Array.isArray(h)) return !1;
    const g = h[h.length - 1];
    if (g) {
      const x = Math.abs(Number(c.u ?? c.x ?? 0) - Number(g.u ?? g.x ?? 0)), S = Math.abs(Number(c.v ?? c.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (x < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ng(r) {
    var ie, me, Te, $e, ke;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    ja();
    const s = fn(), c = zi(s.width, s.height);
    if (!eu(c, o, { w: s.width, h: s.height })) return !1;
    const h = ((me = (ie = c.ctx) == null ? void 0 : ie.getImageData(0, 0, s.width, s.height)) == null ? void 0 : me.data) || null;
    if (!h) return !1;
    const g = new Map(jt().map((Y) => [String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim(), Y ? { ...Y } : null])), v = [], b = [], x = [...tn().filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") !== "paint")];
    let S = !1, k = Yr().reduce((Y, oe) => Math.max(Y, Number((oe == null ? void 0 : oe.z_index) || 0)), -1) + 1;
    function N(Y, oe, ye, we = 8) {
      let Ie = oe, Oe = ye, Fe = -1, Ke = -1;
      for (let We = 0; We < ye; We += 1)
        for (let Ye = 0; Ye < oe; Ye += 1)
          Y[(We * oe + Ye) * 4 + 3] <= we || (Ye < Ie && (Ie = Ye), We < Oe && (Oe = We), Ye > Fe && (Fe = Ye), We > Ke && (Ke = We));
      return Fe < Ie || Ke < Oe ? null : { minX: Ie, minY: Oe, maxX: Fe, maxY: Ke };
    }
    const D = N(h, s.width, s.height, 8);
    if (!D) return !1;
    function L(Y, oe) {
      return !Y || !oe ? !1 : !(Y.maxX < oe.minX || oe.maxX < Y.minX || Y.maxY < oe.minY || oe.maxY < Y.minY);
    }
    function Q(Y, oe) {
      const ye = sr((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "", "paint", oe);
      if (!ye) return null;
      const we = ye.centerUv.u - ye.halfW, Ie = ye.centerUv.u + ye.halfW, Oe = ye.centerUv.v - ye.halfH, Fe = ye.centerUv.v + ye.halfH, Ke = s.width, We = s.height;
      return {
        minX: Math.floor((we % 1 + 1) % 1 * Ke),
        maxX: Math.ceil((Ie % 1 + 1) % 1 * Ke),
        minY: Math.floor(K(Oe, 0, 1) * We),
        maxY: Math.ceil(K(Fe, 0, 1) * We),
        wraps: Ie - we >= 1 || we < 0 || Ie > 1
      };
    }
    function H(Y) {
      const oe = (Y == null ? void 0 : Y.bbox) || null;
      if (!oe) return null;
      const ye = (Y == null ? void 0 : Y.transform) || {}, we = s.width, Ie = s.height, Oe = Number(oe.u0 || 0) + Number(ye.du || 0), Fe = Number(oe.u1 || 0) + Number(ye.du || 0), Ke = Number(oe.v0 || 0) + Number(ye.dv || 0), We = Number(oe.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((Oe % 1 + 1) % 1 * we),
        maxX: Math.ceil((Fe % 1 + 1) % 1 * we),
        minY: Math.floor(K(Ke, 0, 1) * Ie),
        maxY: Math.ceil(K(We, 0, 1) * Ie),
        wraps: Fe - Oe >= 1 || Oe < 0 || Fe > 1
      };
    }
    function G(Y) {
      return Y ? Y.wraps ? L(D, { minX: 0, maxX: Y.maxX, minY: Y.minY, maxY: Y.maxY }) || L(D, { minX: Y.minX, maxX: s.width - 1, minY: Y.minY, maxY: Y.maxY }) : L(D, Y) : !0;
    }
    function re(Y) {
      if (!Y) return { touched: !1, canvas: null };
      const oe = zi(s.width, s.height, { readback: !0 });
      oe.ctx.drawImage(Y, 0, 0);
      const ye = oe.ctx.getImageData(0, 0, s.width, s.height);
      oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(c.canvas, 0, 0), oe.ctx.restore();
      const we = oe.ctx.getImageData(0, 0, s.width, s.height);
      for (let Ie = 0; Ie < s.width * s.height; Ie += 1) {
        if (h[Ie * 4 + 3] <= 8) continue;
        const Fe = ye.data[Ie * 4 + 3], Ke = we.data[Ie * 4 + 3];
        if (Fe > Ke)
          return { touched: !0, canvas: oe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function fe(Y, oe, ye) {
      const we = Number(ye == null ? void 0 : ye.z_index), Ie = xm(Y, oe, ye).map((Oe, Fe) => ({
        ...Oe,
        z_index: Number.isFinite(we) ? we + Fe * 1e-3 : k + Fe * 1e-3
      }));
      return Ie.length && (k = Math.max(k, ...Ie.map((Oe) => Number((Oe == null ? void 0 : Oe.z_index) || 0))) + 1), Ie;
    }
    for (const Y of jt()) {
      const oe = String((Y == null ? void 0 : Y.actionGroupId) || (Y == null ? void 0 : Y.id) || "").trim();
      if (!oe) continue;
      const ye = wn(oe, "paint");
      if (!G(Q(Y, ye))) {
        b.push(Y), v.push(...ye);
        continue;
      }
      const we = (($e = (Te = u.paintEngine) == null ? void 0 : Te.getGroupTarget) == null ? void 0 : $e.call(Te, oe)) || null, Ie = ((ke = we == null ? void 0 : we.committedPaint) == null ? void 0 : ke.canvas) || null;
      if (!Ie) {
        b.push(Y), v.push(...ye);
        continue;
      }
      const Oe = re(Ie);
      if (!Oe.touched || !Oe.canvas) {
        b.push(Y), v.push(...ye);
        continue;
      }
      S = !0;
      const Fe = fe(Oe.canvas, "paint", g.get(oe) || Y || {});
      x.push(...Fe);
    }
    for (const Y of tn().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") === "paint")) {
      if (!G(H(Y))) {
        x.push(Y);
        continue;
      }
      const oe = jc(Y, null);
      if (!oe) {
        x.push(Y);
        continue;
      }
      const ye = re(oe);
      if (!ye.touched || !ye.canvas) {
        x.push(Y);
        continue;
      }
      S = !0;
      const we = fe(ye.canvas, "paint", Y);
      x.push(...we);
    }
    return S ? (p.painting.paint.strokes = v, p.painting.groups = b.sort((Y, oe) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), p.painting.raster_objects = x.sort((Y, oe) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), ti({ preservePanelValues: !1 }), !0) : !1;
  }
  function rg(r) {
    var v, b, x, S, k;
    if ((((b = (v = r.stroke) == null ? void 0 : v.geometry) == null ? void 0 : b.rawPoints) || ((S = (x = r.stroke) == null ? void 0 : x.geometry) == null ? void 0 : S.points) || []).length >= 1) {
      Us(r);
      const N = fn();
      N && (String(((k = r.stroke) == null ? void 0 : k.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(N) : u.paintEngine.commitActiveStroke(r.stroke, N)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, h = du(r.layerKind, s.toolKind, [], c);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const g = fn();
    g && u.paintEngine.beginStroke(h, g);
  }
  function ig(r) {
    var v, b;
    if ((((b = (v = r.stroke) == null ? void 0 : v.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      Us(r);
      const x = fn();
      x && u.paintEngine.commitActiveStroke(r.stroke, x), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, h = hu(r.layerKind, s.toolKind, [], c);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const g = fn();
    g && u.paintEngine.beginStroke(h, g);
  }
  function Us(r) {
    var g, v, b, x;
    const o = ((g = r == null ? void 0 : r.stroke) == null ? void 0 : g.geometry) || null;
    if (!o) return !1;
    const s = String(((v = r == null ? void 0 : r.stroke) == null ? void 0 : v.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Fs(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), ng(r);
    const c = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (c && wc((b = r.stroke) == null ? void 0 : b.actionGroupId), si(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = Fs(h, r.stroke.targetSpace, !0), c && wc((x = r.stroke) == null ? void 0 : x.actionGroupId), si(r.layerKind).push(r.stroke), !0);
  }
  function pu(r) {
    var s;
    if (t === "cutout" && u.mode === "frame") {
      const c = Be(), h = Ct(c);
      if (!c || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const v = kn(r, c, performance.now()), b = v ? ri(v) : null;
      if (b)
        for (const S of Rs()) {
          if (!yt(S)) continue;
          const k = ji(S, b);
          if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
            const N = Dt(S);
            if (N != null && N.visible) return { item: S, geom: N };
          }
        }
      const x = bs(!1).slice().sort((S, k) => Number((k == null ? void 0 : k.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of x) {
        if (S.type === "strokeGroup") {
          const D = Xr(Ei("paint", S.actionGroupId || S.id || ""));
          if (!D) continue;
          const L = Dt(D);
          if (!(L != null && L.visible)) continue;
          const Q = Array.isArray(L.strokePaths) ? L.strokePaths : [];
          for (const H of Q) {
            const G = Array.isArray(H == null ? void 0 : H.points) ? H.points : [];
            if (!G.length) continue;
            if (H.closed && G.length >= 3 && qn(r, G)) return { item: D, geom: L };
            const re = Math.max(8, Number((H == null ? void 0 : H.lineWidth) || 0) * 0.5 + 6);
            for (let fe = 0; fe < G.length - 1; fe += 1)
              if (yl(r, G[fe], G[fe + 1]) <= re * re) return { item: D, geom: L };
            if (G.length === 1 && pr(r, G[0]) <= re * re) return { item: D, geom: L };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const D = qr(Di(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!D) continue;
          const L = Dt(D);
          if ($c(D, L, r, v)) return { item: D, geom: L };
          continue;
        }
        const k = S.item;
        if (!k || !yt(k) || !b) continue;
        const N = ji(k, b);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const D = Dt(k);
          if (D != null && D.visible) return { item: k, geom: D };
        }
      }
      return null;
    }
    const o = [
      ...bs(!1).slice().sort((c, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var h;
        return c.type === "strokeGroup" ? Xr(Ei("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? qr(Di(((h = c.item) == null ? void 0 : h.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? Rs().filter((c) => un(c)) : []
    ];
    for (const c of o) {
      if (Pt(c)) {
        const g = Dt(c);
        if (!(g != null && g.visible)) continue;
        const v = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const b of v) {
          const x = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!x.length) continue;
          if (b.closed && x.length >= 3 && qn(r, x)) return { item: c, geom: g };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < x.length - 1; k += 1)
            if (yl(r, x[k], x[k + 1]) <= S * S) return { item: c, geom: g };
          if (x.length === 1 && pr(r, x[0]) <= S * S) return { item: c, geom: g };
        }
        continue;
      }
      if (Vt(c)) {
        const g = Dt(c);
        if (!(g != null && g.visible)) continue;
        if ($c(c, g, r)) return { item: c, geom: g };
        continue;
      }
      const h = Dt(c);
      if (h.visible && qn(r, h.corners))
        return { item: c, geom: h };
    }
    return null;
  }
  function Bs(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const c = r.corners.findIndex((g) => pr(g, o) <= 121);
      if (c >= 0) {
        const g = r.corners[c], v = g.x - r.center.x, b = g.y - r.center.y, x = v * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: x };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const g of h) {
        const v = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && v.length >= 3 && qn(o, v)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < v.length - 1; x += 1)
          if (yl(o, v[x], v[x + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return qn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const c = r.corners.findIndex((h) => pr(h, o) <= 121);
      if (c >= 0) {
        const h = r.corners[c], g = h.x - r.center.x, v = h.y - r.center.y, b = g * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: b };
      }
      return qn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const c = r.edgeMidpoints.find((h) => pr(h, o) <= 169);
      if (c) {
        const h = c.edge === "left" || c.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
      }
    }
    const s = r.corners.findIndex((c) => pr(c, o) <= 121);
    if (s >= 0) {
      const c = r.corners[s], h = c.x - r.center.x, g = c.y - r.center.y, v = h * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: v };
    }
    return pr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : qn(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
  }
  function mu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function ag(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function og(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => ag(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, c = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!qn({ x: s, y: c }, o.corners);
  }
  function ut(r) {
    if (Zm(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? ee("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? ee("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? ee("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? ee(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? ee("grabbing") : ee("default");
      return;
    }
    if (fu()) {
      ee("none");
      return;
    }
    if (u.mode === "frame" && u.primaryTool !== "cursor") {
      ee("default");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      ee("default");
      return;
    }
    const o = it(), s = o ? Dt(o) : null, c = o ? lr(o) : !1, h = c ? { kind: "none", cursor: "default" } : Bs(s, r);
    if (!c && h.kind !== "none") {
      ee(h.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && pu(r)) {
      ee("default");
      return;
    }
    ee(u.mode === "pano" ? "grab" : "default");
  }
  function Ue() {
    var h, g;
    if (!be) return;
    const r = it(), o = Sn();
    if (!r && o.length === 0 || u.interaction) {
      M.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Ca(), c = n1({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? _s(o) : Dt(r),
      allLocked: xs(o),
      selectedLocked: lr(r),
      activeAspect: qi(r),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: Et,
      isStickerHidden: Jr,
      canRestoreSelectedToInitial: dp,
      iconSet: De
    });
    if (!c.visible) {
      M.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    M.selectionMenu = {
      visible: !0,
      left: ((h = M.selectionMenu) == null ? void 0 : h.left) ?? c.left ?? 0,
      top: ((g = M.selectionMenu) == null ? void 0 : g.top) ?? c.top ?? 0,
      items: c.items
    }, requestAnimationFrame(() => {
      var D, L, Q;
      if (!be || M.selectionMenu.visible !== !0) return;
      const v = be.getBoundingClientRect(), b = Math.round(Number((v == null ? void 0 : v.width) || 0)) || 220, x = Math.round(Number((v == null ? void 0 : v.height) || 0)) || 40, S = 14;
      let k = K((Number(((D = c.anchor) == null ? void 0 : D.minX) || 0) + Number(((L = c.anchor) == null ? void 0 : L.maxX) || 0)) * 0.5 - b * 0.5, S, C.width - b - S), N = Number(((Q = c.anchor) == null ? void 0 : Q.maxY) || 0) + 18;
      if (!Number.isFinite(k) || !Number.isFinite(N) || N + x > C.height - S) {
        M.selectionMenu.visible = !1;
        return;
      }
      M.selectionMenu.left = k, M.selectionMenu.top = N;
    });
  }
  function Wa() {
    q.timer && (clearTimeout(q.timer), q.timer = 0), q.target = null, M.tooltip.visible = !1, M.tooltip.text = "", M.tooltip.variant = "";
  }
  function sg(r) {
    if (!ge || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    M.tooltip.text = o, M.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var Q, H;
      if (q.target !== s || !ge || !(s != null && s.isConnected)) return;
      const c = J.getBoundingClientRect(), h = s.getBoundingClientRect(), g = 8, v = 12, b = Math.round(Number(((Q = ge.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, x = Math.round(Number(((H = ge.getBoundingClientRect()) == null ? void 0 : H.height) || 0)) || 24, S = !!s.closest(".pano-floating-left"), k = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let N = "", D = h.left - c.left + h.width * 0.5 - b * 0.5, L = h.top - c.top - x - v;
      if (S)
        N = "tool-rail", D = h.right - c.left + 10, L = h.top - c.top + h.height * 0.5 - x * 0.5, D = K(D, g, Math.max(g, c.width - b - g)), L = K(L, g, Math.max(g, c.height - x - g));
      else if (k) {
        N = "footer";
        const G = s.closest(".pano-paint-footer"), re = G ? G.getBoundingClientRect() : h;
        D = re.left - c.left + re.width * 0.5 - b * 0.5, L = re.bottom - c.top + 5, D = K(D, g, Math.max(g, c.width - b - g)), L = Math.max(g, L);
      }
      D = K(D, g, Math.max(g, c.width - b - g)), L = Math.max(g, L), M.tooltip.left = D, M.tooltip.top = L, M.tooltip.variant = N, M.tooltip.visible = !0;
    });
  }
  const Ot = fs({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (r) => {
      u.viewYaw = Lt(Number(r.yaw || 0)), u.viewPitch = K(Number(r.pitch || 0), -89.9, 89.9), u.viewFov = K(Number(r.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || C.clientWidth || 0)),
        h: Math.max(1, Number(r.height || C.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = p.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = p.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: cr,
    onInteraction: () => {
      U.backgroundDirty = !0, U.dirty = !0;
    }
  });
  C.onpointerdown = (r) => {
    const o = oi(r);
    if (Ga(o, !0), u.viewTween = null, Ot.state.inertia.active = !1, Ot.state.inertia.vx = 0, Ot.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), u.mode === "frame")
        u.interaction = { kind: "pan_frame", last: o };
      else {
        const b = u.mode === "unwrap" ? o : Ba(r);
        u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ot.startDrag(b.x, b.y, r.pointerId, performance.now());
      }
      ut(o), C.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (u.mode === "pano") {
        const b = Ba(r);
        u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ot.startDrag(b.x, b.y, r.pointerId, performance.now()), ut(o), C.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (Me && !Me.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (cu() || Hs())) {
      const b = u.primaryTool === "mask" ? "mask" : "paint", x = u.primaryTool === "mask" ? u.maskTool : u.paintTool, S = u.mode === "frame" && Hs() ? Be() : null, k = { kind: "ERP_GLOBAL" }, N = S ? kn(o, S, performance.now()) : Mn(o, performance.now());
      if (!N) {
        ut(o);
        return;
      }
      u.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: hi("live"),
        stroke: x === "lasso_fill" ? hu(b, x, [N], k) : du(b, x, [N], k)
      }, Fi();
      const D = fn();
      if (D)
        if (u.paintEngine.beginStroke(u.interaction.stroke, D), u.interaction.kind === "paint_stroke") {
          const L = u.paintEngine.ensureTarget(D), Q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), H = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          u.paintEngine.appendStrokePoint(L, Q, H, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, D);
      ut(o), C.setPointerCapture(r.pointerId), pe();
      return;
    }
    const s = Sn(), c = it(), h = s.length > 1 ? _s(s) : c ? Dt(c) : null;
    if (u.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      u.interaction = { kind: "marquee_select", start: o, current: o }, ut(o), C.setPointerCapture(r.pointerId), pe({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((x) => lr(x)) ? { kind: "none" } : Bs(h, o)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((x) => yt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var k, N;
              const S = Dt(x);
              return S != null && S.visible ? { x: Number(((k = S.center) == null ? void 0 : k.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => Pt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Ut(wn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Ut(sr(x.actionGroupId, x.layerKind)),
            center: (() => {
              var k, N;
              const S = Dt(x);
              return S != null && S.visible ? { x: Number(((k = S.center) == null ? void 0 : k.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: vs(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => Vt(x)).map((x) => ({
            id: At(x.rasterObjectId || x.id || ""),
            snapshot: Ut(tn().find((S) => String((S == null ? void 0 : S.id) || "") === At(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var k, N;
              const S = Dt(x);
              return S != null && S.visible ? { x: Number(((k = S.center) == null ? void 0 : k.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Gc(x)
          }))
        }, ut(o), C.setPointerCapture(r.pointerId);
        return;
      }
    } else if (c && (h != null && h.visible)) {
      const b = lr(c) ? { kind: "none" } : Bs(h, o);
      if (b.kind === "scale") {
        u.interaction = Pt(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Ut(wn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Ut(sr(c.actionGroupId, c.layerKind)),
          cursor: b.cursor
        } : Vt(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Ut(tn().find((x) => String((x == null ? void 0 : x.id) || "") === At(c.rasterObjectId || c.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: b.cursor
        }, ut(o), C.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        u.interaction = {
          kind: b.kind,
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, ut(o), C.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        u.interaction = Pt(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Ut(wn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Ut(sr(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: h.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ut(o), C.setPointerCapture(r.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Pt(c)) {
          const x = u.mode === "frame" ? (() => {
            const S = Be();
            return S ? kn(o, S, performance.now()) : null;
          })() : Mn(o, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: x,
            snapshot: Ut(wn(c.actionGroupId, c.layerKind)),
            frameSnapshot: Ut(sr(c.actionGroupId, c.layerKind))
          }, ut(o), C.setPointerCapture(r.pointerId);
          return;
        }
        if (Vt(c)) {
          const x = u.mode === "frame" ? (() => {
            const S = Be();
            return S ? kn(o, S, performance.now()) : null;
          })() : Mn(o, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: x,
            snapshot: Ut(tn().find((S) => String((S == null ? void 0 : S.id) || "") === At(c.rasterObjectId || c.id || "")))
          }, ut(o), C.setPointerCapture(r.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: c,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ut(o), C.setPointerCapture(r.pointerId);
        return;
      }
    }
    const g = pu(o);
    if (g) {
      const b = u.selectedId !== g.item.id;
      if (b && u.selectedId && (st(), yn()), Sr(g.item), t === "cutout" && b && (u.cutoutAspectOpen = !1), b && He(), Ue(), pe(), lr(g.item)) {
        ut(o);
        return;
      }
      u.interaction = {
        kind: Pt(g.item) ? "move_stroke_group" : Vt(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: o.x - g.geom.center.x, y: o.y - g.geom.center.y },
        startUv: Pt(g.item) || Vt(g.item) ? u.mode === "frame" ? (() => {
          const x = Be();
          return x ? kn(o, x, performance.now()) : null;
        })() : Mn(o, performance.now()) : null,
        snapshot: Pt(g.item) ? Ut(wn(g.item.actionGroupId, g.item.layerKind)) : Vt(g.item) ? Ut(tn().find((x) => String((x == null ? void 0 : x.id) || "") === At(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: Pt(g.item) ? Ut(sr(g.item.actionGroupId, g.item.layerKind)) : null
      }, ut(o), C.setPointerCapture(r.pointerId);
      return;
    }
    const v = !!u.selectedId;
    if (v && (st(), yn()), ti(), v && He(), Ue(), pe(), u.mode === "pano") {
      const b = Ba(r);
      u.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ot.startDrag(b.x, b.y, r.pointerId, performance.now()), ut(o), C.setPointerCapture(r.pointerId);
    }
  }, C.onpointermove = (r) => {
    var c, h, g, v, b, x, S, k, N, D, L, Q, H, G, re, fe, ie, me, Te, $e;
    const o = oi(r);
    if (Ga(o, !0), !u.interaction) {
      ut(o);
      return;
    }
    ut(o);
    const s = u.interaction;
    if (s.kind === "paint_stroke") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let Y = !1;
      ke.forEach((oe) => {
        const ye = oi(oe);
        if (u.mode === "frame") {
          const we = Be(), Ie = we ? Ct(we) : null;
          if (Ie) {
            const Oe = (ye.x - Ie.x) / Math.max(1, Ie.w), Fe = (ye.y - Ie.y) / Math.max(1, Ie.h);
            if (!(Oe >= 0 && Oe <= 1 && Fe >= 0 && Fe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, rg(s));
          }
        }
        eg(s, ye, performance.now()) && (Y = !0);
      }), Y && pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ke = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let Y = !1;
      if (ke.forEach((oe) => {
        const ye = oi(oe);
        if (u.mode === "frame") {
          const we = Be(), Ie = we ? Ct(we) : null;
          if (Ie) {
            const Oe = (ye.x - Ie.x) / Math.max(1, Ie.w), Fe = (ye.y - Ie.y) / Math.max(1, Ie.h);
            if (!(Oe >= 0 && Oe <= 1 && Fe >= 0 && Fe <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, ig(s));
          }
        }
        tg(s, ye, performance.now()) && (Y = !0);
      }), Y) {
        const oe = fn();
        oe && u.paintEngine.updateActiveStroke(s.stroke, oe), pe({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ke = performance.now(), Y = u.mode === "unwrap" ? o : Ba(r);
      Ot.moveDrag(Y.x, Y.y, u.mode === "unwrap" ? "unwrap" : "pano", ke), s.lastTs = ke, s.last = Y, pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      u.frameView.panX += o.x - s.last.x, u.frameView.panY += o.y - s.last.y, s.last = o, pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const ke = o.x - s.offset.x, Y = o.y - s.offset.y;
      if (u.mode === "frame" && t === "cutout") {
        const oe = Be(), ye = Ct(oe);
        if (!oe || !ye) return;
        const we = {
          x: K((ke - ye.x) / Math.max(1, ye.w), 0, 1),
          y: K((Y - ye.y) / Math.max(1, ye.h), 0, 1)
        }, Ie = Os(oe, we);
        if (!Ie) return;
        const Oe = po(Ie);
        s.item.yaw_deg = Oe.yaw, s.item.pitch_deg = Oe.pitch;
      } else if (u.mode === "unwrap") {
        const oe = cr(), ye = K((ke - oe.x) / Math.max(oe.w, 1), 0, 1), we = K((Y - oe.y) / Math.max(oe.h, 1), 0, 1);
        s.item.yaw_deg = Lt(ye * 360 - 180), s.item.pitch_deg = K(90 - we * 180, -90, 90);
      } else {
        const oe = As(ke, Y), ye = po(oe);
        s.item.yaw_deg = ye.yaw, s.item.pitch_deg = ye.pitch;
      }
      yt(s.item) && Rt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const ke = u.mode === "frame" ? (() => {
        const ye = Be();
        return ye ? kn(o, ye, performance.now()) : null;
      })() : Mn(o, performance.now());
      if (!ke || !s.startUv) return;
      const Y = bn(Number(ke.u || 0), Number(s.startUv.u || 0)), oe = Number(ke.v || 0) - Number(s.startUv.v || 0);
      Nc((c = s.item) == null ? void 0 : c.actionGroupId, Y, oe, s.snapshot, (h = s.item) == null ? void 0 : h.layerKind, s.frameSnapshot) && (Nn({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ke = u.mode === "frame" ? (() => {
        const ye = Be();
        return ye ? kn(o, ye, performance.now()) : null;
      })() : Mn(o, performance.now());
      if (!ke || !s.startUv) return;
      const Y = bn(Number(ke.u || 0), Number(s.startUv.u || 0)), oe = Number(ke.v || 0) - Number(s.startUv.v || 0);
      kc(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((v = s.item) == null ? void 0 : v.id) || "", Y, oe, s.snapshot) && (ai(), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      ep(((b = s.item) == null ? void 0 : b.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", Y, s.snapshot) && (ai(), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ke = o.x - Number(((S = s.offset) == null ? void 0 : S.x) || 0), Y = o.y - Number(((k = s.offset) == null ? void 0 : k.y) || 0);
      let oe = !1, ye = !1, we = !1;
      const Ie = ke - Number(((N = s.startCenter) == null ? void 0 : N.x) || ke), Oe = Y - Number(((D = s.startCenter) == null ? void 0 : D.y) || Y);
      for (const Fe of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ke = (t === "cutout" ? ys() : Bn()).find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === String(Fe.id || ""));
        if (!Ke || !yt(Ke)) continue;
        const We = {
          x: Number(((L = Fe.center) == null ? void 0 : L.x) || 0) + Ie,
          y: Number(((Q = Fe.center) == null ? void 0 : Q.y) || 0) + Oe
        };
        if (u.mode === "frame" && t === "cutout") {
          const Ye = Be(), Mt = Ct(Ye);
          if (!Ye || !Mt) continue;
          const kr = {
            x: K((We.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: K((We.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, Cu = Os(Ye, kr);
          if (!Cu) continue;
          const Tu = po(Cu);
          Ke.yaw_deg = Tu.yaw, Ke.pitch_deg = Tu.pitch;
        } else if (u.mode === "unwrap") {
          const Ye = cr(), Mt = K((We.x - Ye.x) / Math.max(Ye.w, 1), 0, 1), kr = K((We.y - Ye.y) / Math.max(Ye.h, 1), 0, 1);
          Ke.yaw_deg = Lt(Mt * 360 - 180), Ke.pitch_deg = K(90 - kr * 180, -90, 90);
        } else {
          const Ye = As(We.x, We.y), Mt = po(Ye);
          Ke.yaw_deg = Mt.yaw, Ke.pitch_deg = Mt.pitch;
        }
        oe = !0;
      }
      for (const Fe of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ke = {
          x: Number(((H = Fe.center) == null ? void 0 : H.x) || 0) + Ie,
          y: Number(((G = Fe.center) == null ? void 0 : G.y) || 0) + Oe
        }, We = u.mode === "frame" ? (() => {
          const Mt = Be();
          return Mt ? kn(Ke, Mt, performance.now()) : null;
        })() : Mn(Ke, performance.now()), Ye = Fe.centerUv || null;
        if (We && Ye) {
          const Mt = bn(Number(We.u || 0), Number(Ye.u || 0)), kr = Number(We.v || 0) - Number(Ye.v || 0);
          Nc(Fe.id, Mt, kr, Fe.snapshot, Fe.layerKind, Fe.frameSnapshot) && (oe = !0, ye = !0);
        }
      }
      for (const Fe of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ke = {
          x: Number(((re = Fe.center) == null ? void 0 : re.x) || 0) + Ie,
          y: Number(((fe = Fe.center) == null ? void 0 : fe.y) || 0) + Oe
        }, We = u.mode === "frame" ? (() => {
          const Mt = Be();
          return Mt ? kn(Ke, Mt, performance.now()) : null;
        })() : Mn(Ke, performance.now()), Ye = Fe.centerUv || null;
        if (We && Ye) {
          const Mt = bn(Number(We.u || 0), Number(Ye.u || 0)), kr = Number(We.v || 0) - Number(Ye.v || 0);
          kc(Fe.id, Mt, kr, Fe.snapshot) && (oe = !0, we = !0);
        }
      }
      oe && (ye ? Nn({ rebuildPaintEngine: !1 }) : we ? ai() : Rt(), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Mc((ie = s.item) == null ? void 0 : ie.actionGroupId, Y, 0, s.snapshot, (me = s.item) == null ? void 0 : me.layerKind, s.frameSnapshot) && (Nn({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ke = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * br;
      r.shiftKey && (ke = Math.round(ke / 45) * 45), Mc((Te = s.item) == null ? void 0 : Te.actionGroupId, 1, ke, s.snapshot, ($e = s.item) == null ? void 0 : $e.layerKind, s.frameSnapshot) && (Nn({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = K(s.startHFOV * Y, 1, 179), s.item.vFOV_deg = K(s.startVFOV * Y, 1, 179), s.item.aspect_id = Or(s.item), yt(s.item) && Rt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = K(s.startHFOV * Y, 1, 179), s.item.aspect_id = Or(s.item), yt(s.item) && Rt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const Y = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = K(s.startVFOV * Y, 1, 179), s.item.aspect_id = Or(s.item), yt(s.item) && Rt(), pe({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let Y = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * br, oe = s.startRot - Y;
      r.shiftKey && (oe = Math.round(oe / 45) * 45);
      const ye = yt(s.item) ? "rot_deg" : "roll_deg";
      s.item[ye] = oe, yt(s.item) && Rt(), pe({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var o, s, c, h, g, v;
    const r = u.interaction;
    if (((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Fi();
      const b = Us(u.interaction), x = !!u.interaction._hasCommittedSegments;
      if (b || x) {
        Nn();
        const S = String(((c = u.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
        if (S) {
          const N = jt().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === S);
          N && (N.frame = null);
        }
        const k = fn();
        k && (b ? String(((h = u.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(k), Jc()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, k) : u.paintEngine.cancelActiveStroke(k)), st(), yn(), He(), Ue(), e.setDirtyCanvas(!0, !0), pe();
      } else {
        const S = fn();
        S && u.paintEngine.cancelActiveStroke(S);
      }
    } else if (((g = u.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const b = mu(u.interaction.start, u.interaction.current), S = [
        ...t === "cutout" ? Rs().filter((k) => !un(k)) : [...Bn()],
        ...Xh(),
        ...Jh()
      ].filter((k) => og(b, Dt(k)));
      ip(S, ((v = S[S.length - 1]) == null ? void 0 : v.id) || null), t === "cutout" && S.length && (u.cutoutAspectOpen = !1), He(), Ue(), pe();
    } else if (u.interaction && u.interaction.kind !== "view" && u.interaction.kind !== "pan_frame") {
      let b = !1;
      (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (b = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (b = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (b = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? Nn({ rebuildPaintEngine: !0 }) : ai()), st(), yn(), e.setDirtyCanvas(!0, !0), js(), u.hqFrames = 1, Ue(), pe();
    }
    u.interaction = null, Fi(), r && r.kind === "view" && Ot.endDrag(performance.now()), Ta(), Ue(), ut(u.pointerPos), pe();
  }, C.onpointercancel = () => {
    var r, o, s;
    if (((r = u.interaction) == null ? void 0 : r.kind) === "view" && Ot.endDrag(performance.now()), ((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      Fi();
      const c = fn();
      c && u.paintEngine.cancelActiveStroke(c);
    }
    u.interaction = null, Fi(), Ta(), ut(u.pointerPos), pe({ localOnly: !0 });
  }, C.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, C.onmousemove = (r) => {
    const o = oi(r);
    Ga(o, !0), !u.interaction && ut(o);
  }, C.onmouseleave = () => {
    Ga(u.pointerPos, !1), ut(u.pointerPos);
  }, C.onwheel = (r) => {
    if (u.mode === "frame") {
      const o = oi(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      qm(o, s) && pe({ localOnly: !0 }), r.preventDefault();
      return;
    }
    u.mode === "pano" && (Ot.applyWheelEvent(r) && pe({ localOnly: !0 }), r.preventDefault());
  }, C.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), wr(!0));
  }, C.ondrop = (r) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), he.depth = 0, wr(!1);
    const s = Array.from(((c = r.dataTransfer) == null ? void 0 : c.files) || []).find((h) => Ha(h));
    s && iu(s);
  };
  const gu = (r) => {
    t !== "stickers" && t !== "cutout" || i || hs(r) && (he.depth += 1, wr(!0), r.preventDefault());
  }, bu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!he.active && hs(r) && wr(!0), he.active && r.preventDefault());
  }, yu = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !he.active) return;
    he.depth = Math.max(0, he.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (he.depth === 0 || o) && wr(!1);
  }, vu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (he.depth = 0, wr(!1), hs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", gu, !0), window.addEventListener("dragover", bu, !0), window.addEventListener("dragleave", yu, !0), window.addEventListener("drop", vu, !0);
  function Gs() {
    const { canUndo: r, canRedo: o } = ru();
    Yi(M.toolButtons, "value", "undo", { disabled: !r }), Yi(M.toolButtons, "value", "redo", { disabled: !o });
  }
  const _u = (r, o, s = !1) => {
    var b;
    const c = it(), h = Ca();
    if (!c || h === "stroke") return;
    const g = (((b = M.sidePanel) == null ? void 0 : b.params) || []).find((x) => x.key === r);
    if (!g || g.enabled === !1) return;
    let v = Number(o);
    Number.isNaN(v) && (v = 0), v = K(v, Number(g.min), Number(g.max)), r === "yaw_deg" && (v = Lt(v)), c[r] = v, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (c.aspect_id = Or(c)), He(), pe(), s && st();
  };
  ce == null || ce.addEventListener("click", async (r) => {
    var c, h, g, v, b, x, S, k, N;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const D = Ft(o.getAttribute("data-coverage"));
      if (D === Ft(p.coverage)) return;
      p.coverage = D, u.coverage = D, m && (m.value = String(D)), l ? U.backgroundDirty = !0 : (yn(), Ym({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), He(), Ue(), pe();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (c = M.sidePanel) == null ? void 0 : c.selectionPicker) != null && h.disabled) return;
      M.sidePanel.selectionPicker.open = !M.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      M.sidePanel.selectionPicker.open = !1;
      const D = String(o.getAttribute("data-selection-id") || "");
      let L = null;
      D && (t === "stickers" ? L = Bn().find((Q) => String((Q == null ? void 0 : Q.id) || "") === D) || null : L = ((g = Pc().find((Q) => {
        var H;
        return String(((H = Q == null ? void 0 : Q.item) == null ? void 0 : H.id) || "") === D;
      })) == null ? void 0 : g.item) || null), Sr(L || null), L && !Pt(L) && ps(
        Lt(Number(L.yaw_deg || 0)),
        K(Number(L.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), He(), Ue(), pe();
      return;
    }
    if (s === "copy-state-inline") {
      const D = it(), L = Ca();
      if (!D || L === "stroke" || Sn().length > 1) return;
      const Q = JSON.stringify(t === "cutout" && L !== "image" ? Oc(D) : bp(D));
      try {
        await navigator.clipboard.writeText(Q), (v = M.sidePanel) != null && v.copyStateButton && (M.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var H;
          (H = M.sidePanel) != null && H.copyStateButton && (M.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const D = String(o.getAttribute("data-visibility") || "");
      D === "panorama" ? u.showPanorama = !u.showPanorama : D === "objects" ? u.showObjects = !u.showObjects : D === "mask" && (u.showMask = !u.showMask), He(), pe();
      return;
    }
    if (s === "set-invert-x") {
      p.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", Ua(), He(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), pe();
      return;
    }
    if (s === "set-invert-y") {
      p.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", Ua(), He(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), pe();
      return;
    }
    if (s === "toggle-quality-picker") {
      (S = M.sidePanel) != null && S.uiSettings && (M.sidePanel.uiSettings.qualityOpen = !M.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const D = String(o.getAttribute("data-quality") || "balanced");
      p.ui_settings.preview_quality = D === "draft" || D === "high" ? D : "balanced", Ua(), He(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), pe();
      return;
    }
    if (s === "ui-reset-defaults") {
      p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Ua(), He(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), pe();
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
    s === "save-close" && (Km(), ci());
  }), ce == null || ce.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && _u(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ce == null || ce.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && _u(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const Ks = () => {
    const r = !!u.showGrid;
    Yi(M.floatingButtons, "action", "toggle-grid", {
      icon: r ? De.eye : De.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  Ks(), I.addEventListener("click", (r) => {
    var b, x, S, k;
    if ((x = (b = r.target) == null ? void 0 : b.matches) != null && x.call(b, "[data-confirm-overlay]")) {
      const N = (S = M.confirmDialog) == null ? void 0 : S.resolve;
      M.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      u.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && u.mode === "frame" && it() && un(it()) && (ti({ preservePanelValues: !0 }), He(), Ue()), Vs(), Ta(), pe();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = N, (N === "paint" || N === "mask") && ti({ preservePanelValues: !0 }), nn(), He(), Ue(), pe();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? $s(-1) : N === "redo" ? $s(1) : N === "clear" ? $m() : N === "add" || N === "add-image" ? Em() : N === "add-or-look" && Fm();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        u.paintTool = N, ti({ preservePanelValues: !0 }), rn[N] && (u.activeBrushPresetId = N), nn(), He(), Ue(), pe();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ti({ preservePanelValues: !0 }), nn(), He(), Ue(), pe();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const N = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        jm(N);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const N = Co.find((D) => D.id === s.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        u.paintColor = dn(N.color), qt(!0), nn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), Me && !Me.hidden ? qt(!0) : gn(), nn();
        return;
      }
    }
    const c = String(((k = s == null ? void 0 : s.getAttribute) == null ? void 0 : k.call(s, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(j instanceof HTMLVideoElement)) return;
      if (ei(), j.paused) {
        V.mode = "playback", V.pendingPlaybackResume = !1, V.resumeAfterScrub = !1;
        const N = Number(M.videoTransport.duration || j.duration || 0), D = Number(j.currentTime || V.editorTime || 0), L = N > 0 && D >= N - 1e-3 ? 0 : Number(V.editorTime || D || 0), Q = Math.max(ct(), 0.04);
        V.editorTime = L, Math.abs(D - L) > Q ? (V.seeking = !1, V.pendingPlaybackResume = !0, Ns(L)) : j.play().catch(() => {
        });
      } else
        j.pause(), V.mode = "scrub", V.resumeAfterScrub = !1, V.pendingPlaybackResume = !1, V.editorTime = Number(j.currentTime || 0), Qr();
      Tn({
        ready: !!j.getAttribute("src"),
        playing: !j.paused && !j.ended,
        visible: Gn(),
        currentTime: V.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: V.mode
      }), pe({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(j instanceof HTMLVideoElement) || !M.videoTransport.hasAudio) return;
      const N = !j.muted;
      j.muted = N, !N && Number(j.volume || 0) <= 0 && (j.volume = Math.max(0.01, Number(M.videoTransport.volume || 1))), Tn({
        ready: !!j.getAttribute("src"),
        playing: !j.paused && !j.ended,
        visible: Gn(),
        currentTime: V.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: V.mode,
        hasAudio: M.videoTransport.hasAudio,
        muted: j.muted,
        volume: Number(j.volume ?? M.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(j instanceof HTMLVideoElement)) return;
      const N = !M.videoTransport.loop;
      M.videoTransport.loop = N, j.loop = N, Tn({
        ready: !!j.getAttribute("src"),
        playing: !j.paused && !j.ended,
        visible: Gn(),
        currentTime: V.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: V.mode,
        hasAudio: M.videoTransport.hasAudio,
        loop: N,
        muted: j.muted,
        volume: Number(j.volume ?? M.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (c === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, Ue(), pe();
        return;
      }
      if (c === "aspect-set") {
        const N = it();
        if (!N) return;
        const D = String(s.getAttribute("data-aspect") || "1:1");
        Hm(N, D), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, js(), st(), vt(), Ue(), pe();
        return;
      }
      if (c === "rotate-90") {
        const N = it();
        if (!N) return;
        Um(N), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, js(), st(), vt(), Ue(), pe();
        return;
      }
      if (c === "bring-front") {
        Bm();
        return;
      }
      if (c === "send-back") {
        Gm();
        return;
      }
      if (c === "duplicate") {
        Vm();
        return;
      }
      if (c === "replace-image") {
        Rm();
        return;
      }
      if (c === "toggle-lock") {
        rp();
        return;
      }
      if (c === "back-initial") {
        up();
        return;
      }
      if (c === "toggle-visible") {
        cp();
        return;
      }
      if (c === "delete") {
        su();
        return;
      }
    }
    if (c === "reset-view") {
      ps(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      u.showGrid = !u.showGrid, Tx(e == null ? void 0 : e.id, u.showGrid), Ks(), pe();
      return;
    }
    if (c === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), ug();
      return;
    }
    if (c === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const N = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = N, u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = N ? 1 : 0, u.outputPreviewAnimStartTs = performance.now(), Mu(), pe();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const g = Number(h.getAttribute("data-paint-history-index")), v = u.customPaintHistory[g];
    v && (u.customPaintColor = dn(v), u.paintColor = dn(v), nn());
  }), I.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(j instanceof HTMLVideoElement)) return;
      ei();
      const g = K(Number(o.value || 0), 0, Number(M.videoTransport.duration || 0));
      V.mode = "scrub", !V.seeking && !j.paused && !j.ended && (V.resumeAfterScrub = !0, j.pause()), V.editorTime = g, Ii(g), Tn({
        ready: !!j.getAttribute("src"),
        playing: !1,
        visible: Gn(),
        currentTime: g,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: "scrub"
      }), Number(W.__panoFrameIdx || 0) > 0 && (U.backgroundDirty = !0, U.dirty = !0, pe({ cause: "frame_view", localOnly: !0 })), Ns(g);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(j instanceof HTMLVideoElement)) return;
      const g = K(Number(s.value || 0), 0, 1);
      j.volume = g, j.muted = g <= 1e-4, Tn({
        ready: !!j.getAttribute("src"),
        playing: !j.paused && !j.ended,
        visible: Gn(),
        currentTime: V.editorTime,
        duration: M.videoTransport.duration,
        frameCount: M.videoTransport.frameCount,
        fps: M.videoTransport.fps,
        mode: V.mode,
        hasAudio: M.videoTransport.hasAudio,
        muted: j.muted,
        volume: g
      });
      return;
    }
    const c = r.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const g = Math.max(1, Math.min(120, Math.round(Number(c.value)))), v = dr(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[v] = g, nn(), Qm();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const g = { ...u.customPaintColor, a: K(Number(h.value) / 100, 0, 1) };
      u.customPaintColor = dn(g), u.paintColor = dn(g), nn();
    }
  }), I.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(j instanceof HTMLVideoElement)) return;
      V.pendingPlaybackResume = !!V.resumeAfterScrub, V.resumeAfterScrub = !1, V.pendingPlaybackResume || (V.mode = "scrub"), V.seeking || (V.pendingPlaybackResume ? (V.pendingPlaybackResume = !1, V.mode = "playback", j.play().catch(() => {
      })) : (Qr(), pe({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), I.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), I.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), I.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && Ka();
  }), I.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !I.contains(o) || q.target !== o && (q.target = o, q.timer && clearTimeout(q.timer), q.timer = window.setTimeout(() => {
      q.target === o && sg(o);
    }, 220));
  }), I.addEventListener("pointerout", (r) => {
    var c, h;
    const o = r.target.closest("[data-tip]");
    !o || q.target !== o || (r.relatedTarget instanceof Element ? (h = (c = r.relatedTarget).closest) == null ? void 0 : h.call(c, "[data-tip]") : null) === o || Wa();
  }), I.addEventListener("pointerdown", () => {
    Wa();
  });
  const lg = (r, o) => {
    var b;
    if (!Re) return;
    const s = Re.getBoundingClientRect(), c = K((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - K((o - s.top) / Math.max(1, s.height), 0, 1), g = _l(u.customPaintColor), v = { ...vl(g.h, c, h), a: Number(((b = u.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    u.customPaintColor = dn(v), u.paintColor = dn(v), nn();
  }, cg = (r) => {
    var g;
    if (!ot) return;
    const o = ot.getBoundingClientRect(), s = K((r - o.left) / Math.max(1, o.width), 0, 1), c = _l(u.customPaintColor), h = { ...vl(s, c.s, c.v), a: Number(((g = u.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    u.customPaintColor = dn(h), u.paintColor = dn(h), nn();
  }, xu = (r, o) => {
    const s = r.pointerId;
    o(r);
    const c = (g) => {
      g.pointerId === s && o(g);
    }, h = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Re && (Re.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), xu(r, (o) => lg(o.clientX, o.clientY));
  }), ot && (ot.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), xu(r, (o) => cg(o.clientX));
  }), I.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", c = (h = M.confirmDialog) == null ? void 0 : h.resolve;
    M.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(s);
  });
  const wu = () => {
    const r = !!u.fullscreen;
    Yi(M.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? De.fullscreen_close : De.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, Ya = (r) => {
    const o = !!r;
    u.fullscreen !== o && (u.fullscreen = o, I.classList.toggle("pano-modal-fullscreen", o), o ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), Ks(), wu(), Qe(), pe());
  }, Su = () => document.fullscreenElement === F, ug = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        Ya(!u.fullscreen);
        return;
      }
      Su() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = F.requestFullscreen) == null ? void 0 : r.call(F));
    } catch {
      Ya(!u.fullscreen);
    }
  }, Nu = () => {
    document.fullscreenEnabled && Ya(Su());
  };
  document.addEventListener("fullscreenchange", Nu), wu();
  const Mu = () => {
    const r = !!u.outputPreviewExpanded;
    M.outputPreviewToggle.icon = r ? De.fullscreen_close : De.fullscreen, M.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", M.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  Mu();
  const Ws = e.onExecuted, Ys = e.onConnectionsChange;
  let qs = null, Xs = null, Js = null;
  !i && t === "stickers" && (Js = (r = "sync") => {
    Fc(r);
  }, e.__panoExternalStickerSync = Js, qs = function(...o) {
    var s;
    typeof Ws == "function" && Ws.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = qs, Xs = function(...o) {
    var s;
    typeof Ys == "function" && Ys.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Xs), i || Kf.set(String(e.id ?? "0"), () => Hc());
  let li = null;
  const ci = async () => li || (li = (async () => {
    var r, o, s, c, h, g, v, b, x, S, k;
    return Kf.delete(String(e.id ?? "0")), i || yn(), document.fullscreenElement === F && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Nu), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || h.call(c, !0, !0), (b = (v = (g = hn) == null ? void 0 : g.canvas) == null ? void 0 : v.setDirty) == null || b.call(v, !0, !0), Wa(), Im(), j instanceof HTMLVideoElement && j.pause(), Ae.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (x = de == null ? void 0 : de.dispose) == null || x.call(de), (S = O == null ? void 0 : O.unmount) == null || S.call(O), (k = ue == null ? void 0 : ue.dispose) == null || k.call(ue), wr(!1), window.removeEventListener("keydown", ku, !0), window.removeEventListener("keydown", Pu, !0), window.removeEventListener("keydown", qa, !0), window.removeEventListener("keyup", qa, !0), window.removeEventListener("keydown", Au, !0), window.removeEventListener("dragenter", gu, !0), window.removeEventListener("dragover", bu, !0), window.removeEventListener("dragleave", yu, !0), window.removeEventListener("drop", vu, !0), !i && t === "stickers" && (e.onExecuted === qs && (e.onExecuted = Ws), e.onConnectionsChange === Xs && (e.onConnectionsChange = Ys), e.__panoExternalStickerSync === Js && (e.__panoExternalStickerSync = null)), z.unmount(), $.remove(), Wm(), li = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), li = null, !1)), li), ku = (r) => {
    var o, s, c, h;
    if (r.key === "Escape") {
      if (u.fullscreen && document.fullscreenElement === F) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (c = r.stopImmediatePropagation) == null || c.call(r), Ya(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), ci();
    }
  }, Pu = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), c = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || c === 46) && !(o === "Backspace" || s === "Backspace" || c === 8)) return;
    const v = r.target, b = ((v == null ? void 0 : v.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || v != null && v.isContentEditable || !it() || (su(), r.preventDefault(), r.stopPropagation());
  }, qa = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    u.marqueeModifier !== o && (u.marqueeModifier = o, ut(u.pointerPos));
  }, Au = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const c = r.target, h = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: g, canRedo: v } = ru();
    r.shiftKey && !v || !r.shiftKey && !g || ($s(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", ku, !0), window.addEventListener("keydown", Pu, !0), window.addEventListener("keydown", qa, !0), window.addEventListener("keyup", qa, !0), window.addEventListener("keydown", Au, !0), F.addEventListener("pointerdown", (r) => {
    r.target === F && ci();
  }), _p(), !i && t === "stickers" && Fc("open"), Om(), st(), Gs(), nn(), He(), ks(), ei(), nu(), ut(u.pointerPos), pe(), U.rafId = requestAnimationFrame(zs);
}
function Zf(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (y) => {
    var _, p;
    try {
      (_ = y.__panoDomRestore) == null || _.call(y);
    } catch {
    }
    try {
      (p = y.__panoLegacyRestore) == null || p.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function l(y) {
    var A;
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    a(y), n === "PanoramaStickers" && Lx(y), xc(y), $x(y, Xo);
    const w = _n(y, Xo);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const T = w.callback;
      w.callback = (M) => {
        var z;
        const $ = T ? T(M) : void 0;
        return (z = y.setDirtyCanvas) == null || z.call(y, !0, !1), $;
      };
    }
    if (n === "PanoramaStickers") {
      const T = _n(y, "bg_color");
      T && (T.value == null || String(T.value).trim() === "" || String(T.value).toLowerCase() === "#000000") && (T.value = "#00ff00", (A = T.callback) == null || A.call(T, "#00ff00")), Bl(y, i, () => da(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
        return;
      }
    }
    Bl(y, i, () => da(y, "cutout")), Dv(y, {
      buttonText: i,
      onOpen: () => da(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
  }
  const f = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return l(this), y;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = d ? d.apply(this, arguments) : void 0;
    return this.widgets && l(this), y;
  };
  const m = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = m ? m.apply(this, arguments) : void 0;
    return this.widgets && l(this), y;
  };
}
function Xx(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function Jx(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    xc(e), Bl(e, "Open Preview", () => da(e, "stickers", { readOnly: !0, hideSidebar: !1 })), Ev(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (l) => da(l, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
hn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Zf(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Zf(e, t, "PanoramaCutout", "Open Cutout Editor"), Vo(n) && Xx(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    xc(e), Vo(t) && Jx(e);
  }
});
