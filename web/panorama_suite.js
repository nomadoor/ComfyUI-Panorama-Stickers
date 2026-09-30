import * as hs from "../../scripts/app.js";
import { app as sr } from "../../scripts/app.js";
import { api as mn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function nc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Nt = {}, ca = [], Nr = () => {
}, Zh = () => !1, Ks = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ws = (e) => e.startsWith("onUpdate:"), yn = Object.assign, rc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yb = Object.prototype.hasOwnProperty, ht = (e, t) => Yb.call(e, t), qe = Array.isArray, fa = (e) => xo(e) === "[object Map]", Qh = (e) => xo(e) === "[object Set]", fd = (e) => xo(e) === "[object Date]", Xe = (e) => typeof e == "function", zt = (e) => typeof e == "string", Mr = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", ep = (e) => (vt(e) || Xe(e)) && Xe(e.then) && Xe(e.catch), tp = Object.prototype.toString, xo = (e) => tp.call(e), qb = (e) => xo(e).slice(8, -1), np = (e) => xo(e) === "[object Object]", ic = (e) => zt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, to = /* @__PURE__ */ nc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ys = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Xb = /-\w/g, Pn = Ys(
  (e) => e.replace(Xb, (t) => t.slice(1).toUpperCase())
), Jb = /\B([A-Z])/g, Ti = Ys(
  (e) => e.replace(Jb, "-$1").toLowerCase()
), qs = Ys((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wl = Ys(
  (e) => e ? `on${qs(e)}` : ""
), vr = (e, t) => !Object.is(e, t), ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, rp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, ac = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dd;
const Xs = () => dd || (dd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ut(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = zt(r) ? ty(r) : Ut(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (zt(e) || vt(e))
    return e;
}
const Zb = /;(?![^(]*\))/g, Qb = /:([^]+)/, ey = /\/\*[^]*?\*\//g;
function ty(e) {
  const t = {};
  return e.replace(ey, "").split(Zb).forEach((n) => {
    if (n) {
      const r = n.split(Qb);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (zt(e))
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
const ny = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ry = /* @__PURE__ */ nc(ny);
function ip(e) {
  return !!e || e === "";
}
function iy(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = oc(e[r], t[r]);
  return n;
}
function oc(e, t) {
  if (e === t) return !0;
  let n = fd(e), r = fd(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Mr(e), r = Mr(t), n || r)
    return e === t;
  if (n = qe(e), r = qe(t), n || r)
    return n && r ? iy(e, t) : !1;
  if (n = vt(e), r = vt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), h = t.hasOwnProperty(c);
      if (f && !h || !f && h || !oc(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ap = (e) => !!(e && e.__v_isRef === !0), ct = (e) => zt(e) ? e : e == null ? "" : qe(e) || vt(e) && (e.toString === tp || !Xe(e.toString)) ? ap(e) ? ct(e.value) : JSON.stringify(e, op, 2) : String(e), op = (e, t) => ap(t) ? op(e, t.value) : fa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Yl(r, o) + " =>"] = a, n),
    {}
  )
} : Qh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Yl(n))
} : Mr(t) ? Yl(t) : vt(t) && !qe(t) && !np(t) ? String(t) : t, Yl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Mr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
class ay {
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
function oy() {
  return Fn;
}
let Mt;
const ql = /* @__PURE__ */ new WeakSet();
class sp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ql.has(this) && (ql.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || up(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hd(this), cp(this);
    const t = Mt, n = lr;
    Mt = this, lr = !0;
    try {
      return this.fn();
    } finally {
      fp(this), Mt = t, lr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        uc(t);
      this.deps = this.depsTail = void 0, hd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ql.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Su(this) && this.run();
  }
  get dirty() {
    return Su(this);
  }
}
let lp = 0, no, ro;
function up(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ro, ro = e;
    return;
  }
  e.next = no, no = e;
}
function sc() {
  lp++;
}
function lc() {
  if (--lp > 0)
    return;
  if (ro) {
    let t = ro;
    for (ro = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; no; ) {
    let t = no;
    for (no = void 0; t; ) {
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
function cp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), uc(r), sy(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function Su(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (dp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function dp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === uo) || (e.globalVersion = uo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Su(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = lr;
  Mt = e, lr = !0;
  try {
    cp(e);
    const a = e.fn(e._value);
    (t.version === 0 || vr(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Mt = n, lr = r, fp(e), e.flags &= -3;
  }
}
function uc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      uc(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function sy(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lr = !0;
const hp = [];
function Yr() {
  hp.push(lr), lr = !1;
}
function qr() {
  const e = hp.pop();
  lr = e === void 0 ? !0 : e;
}
function hd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Mt;
    Mt = void 0;
    try {
      t();
    } finally {
      Mt = n;
    }
  }
}
let uo = 0;
class ly {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !lr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new ly(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, pp(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Mt.depsTail, n.nextDep = void 0, Mt.depsTail.nextDep = n, Mt.depsTail = n, Mt.deps === n && (Mt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, uo++, this.notify(t);
  }
  notify(t) {
    sc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      lc();
    }
  }
}
function pp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        pp(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const wu = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ Symbol(
  ""
), ku = /* @__PURE__ */ Symbol(
  ""
), co = /* @__PURE__ */ Symbol(
  ""
);
function hn(e, t, n) {
  if (lr && Mt) {
    let r = wu.get(e);
    r || wu.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new cc()), a.map = r, a.key = n), a.track();
  }
}
function Br(e, t, n, r, a, o) {
  const c = wu.get(e);
  if (!c) {
    uo++;
    return;
  }
  const f = (h) => {
    h && h.trigger();
  };
  if (sc(), t === "clear")
    c.forEach(f);
  else {
    const h = qe(e), g = h && ic(n);
    if (h && n === "length") {
      const y = Number(r);
      c.forEach((x, S) => {
        (S === "length" || S === co || !Mr(S) && S >= y) && f(x);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), g && f(c.get(co)), t) {
        case "add":
          h ? g && f(c.get("length")) : (f(c.get(Si)), fa(e) && f(c.get(ku)));
          break;
        case "delete":
          h || (f(c.get(Si)), fa(e) && f(c.get(ku)));
          break;
        case "set":
          fa(e) && f(c.get(Si));
          break;
      }
  }
  lc();
}
function Zi(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (hn(t, "iterate", co), /* @__PURE__ */ Qn(e) ? t : t.map(ur));
}
function Js(e) {
  return hn(e = /* @__PURE__ */ dt(e), "iterate", co), e;
}
function gr(e, t) {
  return /* @__PURE__ */ Xr(e) ? _a(/* @__PURE__ */ wi(e) ? ur(t) : t) : ur(t);
}
const uy = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xl(this, Symbol.iterator, (e) => gr(this, e));
  },
  concat(...e) {
    return Zi(this).concat(
      ...e.map((t) => qe(t) ? Zi(t) : t)
    );
  },
  entries() {
    return Xl(this, "entries", (e) => (e[1] = gr(this, e[1]), e));
  },
  every(e, t) {
    return Rr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Rr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => gr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Rr(
      this,
      "find",
      e,
      t,
      (n) => gr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Rr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Rr(
      this,
      "findLast",
      e,
      t,
      (n) => gr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Rr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Rr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jl(this, "includes", e);
  },
  indexOf(...e) {
    return Jl(this, "indexOf", e);
  },
  join(e) {
    return Zi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Rr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Va(this, "pop");
  },
  push(...e) {
    return Va(this, "push", e);
  },
  reduce(e, ...t) {
    return pd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return pd(this, "reduceRight", e, t);
  },
  shift() {
    return Va(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Rr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Va(this, "splice", e);
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
    return Va(this, "unshift", e);
  },
  values() {
    return Xl(this, "values", (e) => gr(this, e));
  }
};
function Xl(e, t, n) {
  const r = Js(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ Qn(e) && (a._next = a.next, a.next = () => {
    const o = a._next();
    return o.done || (o.value = n(o.value)), o;
  }), a;
}
const cy = Array.prototype;
function Rr(e, t, n, r, a, o) {
  const c = Js(e), f = c !== e && !/* @__PURE__ */ Qn(e), h = c[t];
  if (h !== cy[t]) {
    const x = h.apply(e, o);
    return f ? ur(x) : x;
  }
  let g = n;
  c !== e && (f ? g = function(x, S) {
    return n.call(this, gr(e, x), S, e);
  } : n.length > 2 && (g = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const y = h.call(c, g, r);
  return f && a ? a(y) : y;
}
function pd(e, t, n, r) {
  const a = Js(e), o = a !== e && !/* @__PURE__ */ Qn(e);
  let c = n, f = !1;
  a !== e && (o ? (f = r.length === 0, c = function(g, y, x) {
    return f && (f = !1, g = gr(e, g)), n.call(this, g, gr(e, y), x, e);
  }) : n.length > 3 && (c = function(g, y, x) {
    return n.call(this, g, y, x, e);
  }));
  const h = a[t](c, ...r);
  return f ? gr(e, h) : h;
}
function Jl(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  hn(r, "iterate", co);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ hc(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : a;
}
function Va(e, t, n = []) {
  Yr(), sc();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return lc(), qr(), r;
}
const fy = /* @__PURE__ */ nc("__proto__,__v_isRef,__isVue"), mp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Mr)
);
function dy(e) {
  Mr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return hn(t, "has", e), t.hasOwnProperty(e);
}
class gp {
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
      return r === (a ? o ? Sy : _p : o ? vp : yp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = qe(t);
    if (!a) {
      let h;
      if (c && (h = uy[n]))
        return h;
      if (n === "hasOwnProperty")
        return dy;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : r
    );
    if ((Mr(n) ? mp.has(n) : fy(n)) || (a || hn(t, "get", n), o))
      return f;
    if (/* @__PURE__ */ gn(f)) {
      const h = c && ic(n) ? f : f.value;
      return a && vt(h) ? /* @__PURE__ */ Mu(h) : h;
    }
    return vt(f) ? a ? /* @__PURE__ */ Mu(f) : /* @__PURE__ */ Ma(f) : f;
  }
}
class bp extends gp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    const c = qe(t) && ic(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ Xr(o);
      if (!/* @__PURE__ */ Qn(r) && !/* @__PURE__ */ Xr(r) && (o = /* @__PURE__ */ dt(o), r = /* @__PURE__ */ dt(r)), !c && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(r))
        return g || (o.value = r), !0;
    }
    const f = c ? Number(n) < t.length : ht(t, n), h = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ gn(t) ? t : a
    );
    return t === /* @__PURE__ */ dt(a) && (f ? vr(r, o) && Br(t, "set", n, r) : Br(t, "add", n, r)), h;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && Br(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Mr(n) || !mp.has(n)) && hn(t, "has", n), r;
  }
  ownKeys(t) {
    return hn(
      t,
      "iterate",
      qe(t) ? "length" : Si
    ), Reflect.ownKeys(t);
  }
}
class hy extends gp {
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
const py = /* @__PURE__ */ new bp(), my = /* @__PURE__ */ new hy(), gy = /* @__PURE__ */ new bp(!0);
const Nu = (e) => e, Wo = (e) => Reflect.getPrototypeOf(e);
function by(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = /* @__PURE__ */ dt(a), c = fa(o), f = e === "entries" || e === Symbol.iterator && c, h = e === "keys" && c, g = a[e](...r), y = n ? Nu : t ? _a : ur;
    return !t && hn(
      o,
      "iterate",
      h ? ku : Si
    ), yn(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = g.next();
          return S ? { value: x, done: S } : {
            value: f ? [y(x[0]), y(x[1])] : y(x),
            done: S
          };
        }
      }
    );
  };
}
function Yo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yy(e, t) {
  const n = {
    get(a) {
      const o = this.__v_raw, c = /* @__PURE__ */ dt(o), f = /* @__PURE__ */ dt(a);
      e || (vr(a, f) && hn(c, "get", a), hn(c, "get", f));
      const { has: h } = Wo(c), g = t ? Nu : e ? _a : ur;
      if (h.call(c, a))
        return g(o.get(a));
      if (h.call(c, f))
        return g(o.get(f));
      o !== c && o.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && hn(/* @__PURE__ */ dt(a), "iterate", Si), a.size;
    },
    has(a) {
      const o = this.__v_raw, c = /* @__PURE__ */ dt(o), f = /* @__PURE__ */ dt(a);
      return e || (vr(a, f) && hn(c, "has", a), hn(c, "has", f)), a === f ? o.has(a) : o.has(a) || o.has(f);
    },
    forEach(a, o) {
      const c = this, f = c.__v_raw, h = /* @__PURE__ */ dt(f), g = t ? Nu : e ? _a : ur;
      return !e && hn(h, "iterate", Si), f.forEach((y, x) => a.call(o, g(y), g(x), c));
    }
  };
  return yn(
    n,
    e ? {
      add: Yo("add"),
      set: Yo("set"),
      delete: Yo("delete"),
      clear: Yo("clear")
    } : {
      add(a) {
        const o = /* @__PURE__ */ dt(this), c = Wo(o), f = /* @__PURE__ */ dt(a), h = !t && !/* @__PURE__ */ Qn(a) && !/* @__PURE__ */ Xr(a) ? f : a;
        return c.has.call(o, h) || vr(a, h) && c.has.call(o, a) || vr(f, h) && c.has.call(o, f) || (o.add(h), Br(o, "add", h, h)), this;
      },
      set(a, o) {
        !t && !/* @__PURE__ */ Qn(o) && !/* @__PURE__ */ Xr(o) && (o = /* @__PURE__ */ dt(o));
        const c = /* @__PURE__ */ dt(this), { has: f, get: h } = Wo(c);
        let g = f.call(c, a);
        g || (a = /* @__PURE__ */ dt(a), g = f.call(c, a));
        const y = h.call(c, a);
        return c.set(a, o), g ? vr(o, y) && Br(c, "set", a, o) : Br(c, "add", a, o), this;
      },
      delete(a) {
        const o = /* @__PURE__ */ dt(this), { has: c, get: f } = Wo(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ dt(a), h = c.call(o, a)), f && f.call(o, a);
        const g = o.delete(a);
        return h && Br(o, "delete", a, void 0), g;
      },
      clear() {
        const a = /* @__PURE__ */ dt(this), o = a.size !== 0, c = a.clear();
        return o && Br(
          a,
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
  ].forEach((a) => {
    n[a] = by(a, e, t);
  }), n;
}
function fc(e, t) {
  const n = yy(e, t);
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    ht(n, a) && a in r ? n : r,
    a,
    o
  );
}
const vy = {
  get: /* @__PURE__ */ fc(!1, !1)
}, _y = {
  get: /* @__PURE__ */ fc(!1, !0)
}, xy = {
  get: /* @__PURE__ */ fc(!0, !1)
};
const yp = /* @__PURE__ */ new WeakMap(), vp = /* @__PURE__ */ new WeakMap(), _p = /* @__PURE__ */ new WeakMap(), Sy = /* @__PURE__ */ new WeakMap();
function wy(e) {
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
function ky(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wy(qb(e));
}
// @__NO_SIDE_EFFECTS__
function Ma(e) {
  return /* @__PURE__ */ Xr(e) ? e : dc(
    e,
    !1,
    py,
    vy,
    yp
  );
}
// @__NO_SIDE_EFFECTS__
function Ny(e) {
  return dc(
    e,
    !1,
    gy,
    _y,
    vp
  );
}
// @__NO_SIDE_EFFECTS__
function Mu(e) {
  return dc(
    e,
    !0,
    my,
    xy,
    _p
  );
}
function dc(e, t, n, r, a) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ky(e);
  if (o === 0)
    return e;
  const c = a.get(e);
  if (c)
    return c;
  const f = new Proxy(
    e,
    o === 2 ? r : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return /* @__PURE__ */ Xr(e) ? /* @__PURE__ */ wi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function hc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function My(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && rp(e, "__v_skip", !0), e;
}
const ur = (e) => vt(e) ? /* @__PURE__ */ Ma(e) : e, _a = (e) => vt(e) ? /* @__PURE__ */ Mu(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return Py(e, !1);
}
function Py(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new Ay(e, t);
}
class Ay {
  constructor(t, n) {
    this.dep = new cc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : ur(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Qn(t) || /* @__PURE__ */ Xr(t);
    t = r ? t : /* @__PURE__ */ dt(t), vr(t, n) && (this._rawValue = t, this._value = r ? t : ur(t), this.dep.trigger());
  }
}
function pt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const Cy = {
  get: (e, t, n) => t === "__v_raw" ? e : pt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ gn(a) && !/* @__PURE__ */ gn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function xp(e) {
  return /* @__PURE__ */ wi(e) ? e : new Proxy(e, Cy);
}
class Iy {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new cc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return up(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return dp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ty(e, t, n = !1) {
  let r, a;
  return Xe(e) ? r = e : (r = e.get, a = e.set), new Iy(r, a, n);
}
const qo = {}, As = /* @__PURE__ */ new WeakMap();
let _i;
function Ey(e, t = !1, n = _i) {
  if (n) {
    let r = As.get(n);
    r || As.set(n, r = []), r.push(e);
  }
}
function Dy(e, t, n = Nt) {
  const { immediate: r, deep: a, once: o, scheduler: c, augmentJob: f, call: h } = n, g = (T) => a ? T : /* @__PURE__ */ Qn(T) || a === !1 || a === 0 ? Kr(T, 1) : Kr(T);
  let y, x, S, M, b = !1, O = !1;
  if (/* @__PURE__ */ gn(e) ? (x = () => e.value, b = /* @__PURE__ */ Qn(e)) : /* @__PURE__ */ wi(e) ? (x = () => g(e), b = !0) : qe(e) ? (O = !0, b = e.some((T) => /* @__PURE__ */ wi(T) || /* @__PURE__ */ Qn(T)), x = () => e.map((T) => {
    if (/* @__PURE__ */ gn(T))
      return T.value;
    if (/* @__PURE__ */ wi(T))
      return g(T);
    if (Xe(T))
      return h ? h(T, 2) : T();
  })) : Xe(e) ? t ? x = h ? () => h(e, 2) : e : x = () => {
    if (S) {
      Yr();
      try {
        S();
      } finally {
        qr();
      }
    }
    const T = _i;
    _i = y;
    try {
      return h ? h(e, 3, [M]) : e(M);
    } finally {
      _i = T;
    }
  } : x = Nr, t && a) {
    const T = x, F = a === !0 ? 1 / 0 : a;
    x = () => Kr(T(), F);
  }
  const z = oy(), L = () => {
    y.stop(), z && z.active && rc(z.effects, y);
  };
  if (o && t) {
    const T = t;
    t = (...F) => {
      T(...F), L();
    };
  }
  let P = O ? new Array(e.length).fill(qo) : qo;
  const $ = (T) => {
    if (!(!(y.flags & 1) || !y.dirty && !T))
      if (t) {
        const F = y.run();
        if (a || b || (O ? F.some((B, U) => vr(B, P[U])) : vr(F, P))) {
          S && S();
          const B = _i;
          _i = y;
          try {
            const U = [
              F,
              // pass undefined as the old value when it's changed for the first time
              P === qo ? void 0 : O && P[0] === qo ? [] : P,
              M
            ];
            P = F, h ? h(t, 3, U) : (
              // @ts-expect-error
              t(...U)
            );
          } finally {
            _i = B;
          }
        }
      } else
        y.run();
  };
  return f && f($), y = new sp(x), y.scheduler = c ? () => c($, !1) : $, M = (T) => Ey(T, !1, y), S = y.onStop = () => {
    const T = As.get(y);
    if (T) {
      if (h)
        h(T, 4);
      else
        for (const F of T) F();
      As.delete(y);
    }
  }, t ? r ? $(!0) : P = y.run() : c ? c($.bind(null, !0), !0) : y.run(), L.pause = y.pause.bind(y), L.resume = y.resume.bind(y), L.stop = L, L;
}
function Kr(e, t = 1 / 0, n) {
  if (t <= 0 || !vt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ gn(e))
    Kr(e.value, t, n);
  else if (qe(e))
    for (let r = 0; r < e.length; r++)
      Kr(e[r], t, n);
  else if (Qh(e) || fa(e))
    e.forEach((r) => {
      Kr(r, t, n);
    });
  else if (np(e)) {
    for (const r in e)
      Kr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Kr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function So(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    Zs(a, t, n);
  }
}
function Pr(e, t, n, r) {
  if (Xe(e)) {
    const a = So(e, t, n, r);
    return a && ep(a) && a.catch((o) => {
      Zs(o, t, n);
    }), a;
  }
  if (qe(e)) {
    const a = [];
    for (let o = 0; o < e.length; o++)
      a.push(Pr(e[o], t, n, r));
    return a;
  }
}
function Zs(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Nt;
  if (t) {
    let f = t.parent;
    const h = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const y = f.ec;
      if (y) {
        for (let x = 0; x < y.length; x++)
          if (y[x](e, h, g) === !1)
            return;
      }
      f = f.parent;
    }
    if (o) {
      Yr(), So(o, null, 10, [
        e,
        h,
        g
      ]), qr();
      return;
    }
  }
  Oy(e, n, a, r, c);
}
function Oy(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Mn = [];
let mr = -1;
const da = [];
let oi = null, aa = 0;
const Sp = /* @__PURE__ */ Promise.resolve();
let Cs = null;
function pc(e) {
  const t = Cs || Sp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fy(e) {
  let t = mr + 1, n = Mn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Mn[r], o = fo(a);
    o < e || o === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function mc(e) {
  if (!(e.flags & 1)) {
    const t = fo(e), n = Mn[Mn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fo(n) ? Mn.push(e) : Mn.splice(Fy(t), 0, e), e.flags |= 1, wp();
  }
}
function wp() {
  Cs || (Cs = Sp.then(Np));
}
function Ry(e) {
  qe(e) ? da.push(...e) : oi && e.id === -1 ? oi.splice(aa + 1, 0, e) : e.flags & 1 || (da.push(e), e.flags |= 1), wp();
}
function md(e, t, n = mr + 1) {
  for (; n < Mn.length; n++) {
    const r = Mn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Mn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function kp(e) {
  if (da.length) {
    const t = [...new Set(da)].sort(
      (n, r) => fo(n) - fo(r)
    );
    if (da.length = 0, oi) {
      oi.push(...t);
      return;
    }
    for (oi = t, aa = 0; aa < oi.length; aa++) {
      const n = oi[aa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    oi = null, aa = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Np(e) {
  try {
    for (mr = 0; mr < Mn.length; mr++) {
      const t = Mn[mr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), So(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; mr < Mn.length; mr++) {
      const t = Mn[mr];
      t && (t.flags &= -2);
    }
    mr = -1, Mn.length = 0, kp(), Cs = null, (Mn.length || da.length) && Np();
  }
}
let Un = null, Mp = null;
function Is(e) {
  const t = Un;
  return Un = e, Mp = e && e.type.__scopeId || null, t;
}
function Pp(e, t = Un, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && Pd(-1);
    const o = Is(t);
    let c;
    try {
      c = e(...a);
    } finally {
      Is(o), r._d && Pd(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ki(e, t) {
  if (Un === null)
    return e;
  const n = rl(Un), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, c, f, h = Nt] = t[a];
    o && (Xe(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Kr(c), r.push({
      dir: o,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: h
    }));
  }
  return e;
}
function gi(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let c = 0; c < a.length; c++) {
    const f = a[c];
    o && (f.oldValue = o[c].value);
    let h = f.dir[r];
    h && (Yr(), Pr(h, n, 8, [
      e.el,
      f,
      e,
      t
    ]), qr());
  }
}
function Ly(e, t) {
  if (pn) {
    let n = pn.provides;
    const r = pn.parent && pn.parent.provides;
    r === n && (n = pn.provides = Object.create(r)), n[e] = t;
  }
}
function ms(e, t, n = !1) {
  const r = Rv();
  if (r || ha) {
    let a = ha ? ha._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Xe(t) ? t.call(r && r.proxy) : t;
  }
}
const $y = /* @__PURE__ */ Symbol.for("v-scx"), zy = () => ms($y);
function Ni(e, t, n) {
  return Ap(e, t, n);
}
function Ap(e, t, n = Nt) {
  const { immediate: r, deep: a, flush: o, once: c } = n, f = yn({}, n), h = t && r || !t && o !== "post";
  let g;
  if (po) {
    if (o === "sync") {
      const M = zy();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!h) {
      const M = () => {
      };
      return M.stop = Nr, M.resume = Nr, M.pause = Nr, M;
    }
  }
  const y = pn;
  f.call = (M, b, O) => Pr(M, y, b, O);
  let x = !1;
  o === "post" ? f.scheduler = (M) => {
    On(M, y && y.suspense);
  } : o !== "sync" && (x = !0, f.scheduler = (M, b) => {
    b ? M() : mc(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), x && (M.flags |= 2, y && (M.id = y.uid, M.i = y));
  };
  const S = Dy(e, t, f);
  return po && (g ? g.push(S) : h && S()), S;
}
function Vy(e, t, n) {
  const r = this.proxy, a = zt(e) ? e.includes(".") ? Cp(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Xe(t) ? o = t : (o = t.handler, n = t);
  const c = wo(this), f = Ap(a, o.bind(r), n);
  return c(), f;
}
function Cp(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const jy = /* @__PURE__ */ Symbol("_vte"), Hy = (e) => e.__isTeleport, Uy = /* @__PURE__ */ Symbol("_leaveCb");
function gc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, gc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ip(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ts = /* @__PURE__ */ new WeakMap();
function io(e, t, n, r, a = !1) {
  if (qe(e)) {
    e.forEach(
      (O, z) => io(
        O,
        t && (qe(t) ? t[z] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (ao(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && io(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? rl(r.component) : r.el, c = a ? null : o, { i: f, r: h } = e, g = t && t.r, y = f.refs === Nt ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ dt(x), M = x === Nt ? Zh : (O) => gd(y, O) ? !1 : ht(S, O), b = (O, z) => !(z && gd(y, z));
  if (g != null && g !== h) {
    if (bd(t), zt(g))
      y[g] = null, M(g) && (x[g] = null);
    else if (/* @__PURE__ */ gn(g)) {
      const O = t;
      b(g, O.k) && (g.value = null), O.k && (y[O.k] = null);
    }
  }
  if (Xe(h))
    So(h, f, 12, [c, y]);
  else {
    const O = zt(h), z = /* @__PURE__ */ gn(h);
    if (O || z) {
      const L = () => {
        if (e.f) {
          const P = O ? M(h) ? x[h] : y[h] : b() || !e.k ? h.value : y[e.k];
          if (a)
            qe(P) && rc(P, o);
          else if (qe(P))
            P.includes(o) || P.push(o);
          else if (O)
            y[h] = [o], M(h) && (x[h] = y[h]);
          else {
            const $ = [o];
            b(h, e.k) && (h.value = $), e.k && (y[e.k] = $);
          }
        } else O ? (y[h] = c, M(h) && (x[h] = c)) : z && (b(h, e.k) && (h.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const P = () => {
          L(), Ts.delete(e);
        };
        P.id = -1, Ts.set(e, P), On(P, n);
      } else
        bd(e), L();
    }
  }
}
function bd(e) {
  const t = Ts.get(e);
  t && (t.flags |= 8, Ts.delete(e));
}
Xs().requestIdleCallback;
Xs().cancelIdleCallback;
const ao = (e) => !!e.type.__asyncLoader, Tp = (e) => e.type.__isKeepAlive;
function Gy(e, t) {
  Ep(e, "a", t);
}
function By(e, t) {
  Ep(e, "da", t);
}
function Ep(e, t, n = pn) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Qs(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Tp(a.parent.vnode) && Ky(r, t, n, a), a = a.parent;
  }
}
function Ky(e, t, n, r) {
  const a = Qs(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Dp(() => {
    rc(r[t], a);
  }, n);
}
function Qs(e, t, n = pn, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...c) => {
      Yr();
      const f = wo(n), h = Pr(t, n, e, c);
      return f(), qr(), h;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const Jr = (e) => (t, n = pn) => {
  (!po || e === "sp") && Qs(e, (...r) => t(...r), n);
}, Wy = Jr("bm"), bc = Jr("m"), Yy = Jr(
  "bu"
), qy = Jr("u"), el = Jr(
  "bum"
), Dp = Jr("um"), Xy = Jr(
  "sp"
), Jy = Jr("rtg"), Zy = Jr("rtc");
function Qy(e, t = pn) {
  Qs("ec", e, t);
}
const ev = "components", Op = /* @__PURE__ */ Symbol.for("v-ndc");
function tv(e) {
  return zt(e) ? nv(ev, e, !1) || e : e || Op;
}
function nv(e, t, n = !0, r = !1) {
  const a = Un || pn;
  if (a) {
    const o = a.type;
    {
      const f = jv(
        o,
        !1
      );
      if (f && (f === t || f === Pn(t) || f === qs(Pn(t))))
        return o;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      yd(a[e] || o[e], t) || // global registration
      yd(a.appContext[e], t)
    );
    return !c && r ? o : c;
  }
}
function yd(e, t) {
  return e && (e[t] || e[Pn(t)] || e[qs(Pn(t))]);
}
function $t(e, t, n, r) {
  let a;
  const o = n, c = qe(e);
  if (c || zt(e)) {
    const f = c && /* @__PURE__ */ wi(e);
    let h = !1, g = !1;
    f && (h = !/* @__PURE__ */ Qn(e), g = /* @__PURE__ */ Xr(e), e = Js(e)), a = new Array(e.length);
    for (let y = 0, x = e.length; y < x; y++)
      a[y] = t(
        h ? g ? _a(ur(e[y])) : ur(e[y]) : e[y],
        y,
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
      for (let h = 0, g = f.length; h < g; h++) {
        const y = f[h];
        a[h] = t(e[y], y, h, o);
      }
    }
  else
    a = [];
  return a;
}
const Pu = (e) => e ? tm(e) ? rl(e) : Pu(e.parent) : null, oo = (
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
    $parent: (e) => Pu(e.parent),
    $root: (e) => Pu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Rp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      mc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pc.bind(e.proxy)),
    $watch: (e) => Vy.bind(e)
  })
), Zl = (e, t) => e !== Nt && !e.__isScriptSetup && ht(e, t), rv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: o, accessCache: c, type: f, appContext: h } = e;
    if (t[0] !== "$") {
      const S = c[t];
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
        if (Zl(r, t))
          return c[t] = 1, r[t];
        if (a !== Nt && ht(a, t))
          return c[t] = 2, a[t];
        if (ht(o, t))
          return c[t] = 3, o[t];
        if (n !== Nt && ht(n, t))
          return c[t] = 4, n[t];
        Au && (c[t] = 0);
      }
    }
    const g = oo[t];
    let y, x;
    if (g)
      return t === "$attrs" && hn(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (y = f.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== Nt && ht(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      x = h.config.globalProperties, ht(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return Zl(a, t) ? (a[t] = n, !0) : r !== Nt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: c }
  }, f) {
    let h;
    return !!(n[f] || e !== Nt && f[0] !== "$" && ht(e, f) || Zl(t, f) || ht(o, f) || ht(r, f) || ht(oo, f) || ht(a.config.globalProperties, f) || (h = c.__cssModules) && h[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vd(e) {
  return qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Au = !0;
function iv(e) {
  const t = Rp(e), n = e.proxy, r = e.ctx;
  Au = !1, t.beforeCreate && _d(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: c,
    watch: f,
    provide: h,
    inject: g,
    // lifecycle
    created: y,
    beforeMount: x,
    mounted: S,
    beforeUpdate: M,
    updated: b,
    activated: O,
    deactivated: z,
    beforeDestroy: L,
    beforeUnmount: P,
    destroyed: $,
    unmounted: T,
    render: F,
    renderTracked: B,
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
  if (g && av(g, r, null), c)
    for (const A in c) {
      const we = c[A];
      Xe(we) && (r[A] = we.bind(n));
    }
  if (a) {
    const A = a.call(n, n);
    vt(A) && (e.data = /* @__PURE__ */ Ma(A));
  }
  if (Au = !0, o)
    for (const A in o) {
      const we = o[A], Ce = Xe(we) ? we.bind(n, n) : Xe(we.get) ? we.get.bind(n, n) : Nr, Me = !Xe(we) && Xe(we.set) ? we.set.bind(n) : Nr, G = kt({
        get: Ce,
        set: Me
      });
      Object.defineProperty(r, A, {
        enumerable: !0,
        configurable: !0,
        get: () => G.value,
        set: (Ve) => G.value = Ve
      });
    }
  if (f)
    for (const A in f)
      Fp(f[A], r, n, A);
  if (h) {
    const A = Xe(h) ? h.call(n) : h;
    Reflect.ownKeys(A).forEach((we) => {
      Ly(we, A[we]);
    });
  }
  y && _d(y, e, "c");
  function ke(A, we) {
    qe(we) ? we.forEach((Ce) => A(Ce.bind(n))) : we && A(we.bind(n));
  }
  if (ke(Wy, x), ke(bc, S), ke(Yy, M), ke(qy, b), ke(Gy, O), ke(By, z), ke(Qy, le), ke(Zy, B), ke(Jy, U), ke(el, P), ke(Dp, T), ke(Xy, oe), qe(I))
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
  F && e.render === Nr && (e.render = F), Y != null && (e.inheritAttrs = Y), ie && (e.components = ie), J && (e.directives = J), oe && Ip(e);
}
function av(e, t, n = Nr) {
  qe(e) && (e = Cu(e));
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
      set: (c) => o.value = c
    }) : t[r] = o;
  }
}
function _d(e, t, n) {
  Pr(
    qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fp(e, t, n, r) {
  let a = r.includes(".") ? Cp(n, r) : () => n[r];
  if (zt(e)) {
    const o = t[e];
    Xe(o) && Ni(a, o);
  } else if (Xe(e))
    Ni(a, e.bind(n));
  else if (vt(e))
    if (qe(e))
      e.forEach((o) => Fp(o, t, n, r));
    else {
      const o = Xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Xe(o) && Ni(a, o, e);
    }
}
function Rp(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = o.get(t);
  let h;
  return f ? h = f : !a.length && !n && !r ? h = t : (h = {}, a.length && a.forEach(
    (g) => Es(h, g, c, !0)
  ), Es(h, t, c)), vt(t) && o.set(t, h), h;
}
function Es(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Es(e, o, n, !0), a && a.forEach(
    (c) => Es(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = ov[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const ov = {
  data: xd,
  props: Sd,
  emits: Sd,
  // objects
  methods: Xa,
  computed: Xa,
  // lifecycle
  beforeCreate: Nn,
  created: Nn,
  beforeMount: Nn,
  mounted: Nn,
  beforeUpdate: Nn,
  updated: Nn,
  beforeDestroy: Nn,
  beforeUnmount: Nn,
  destroyed: Nn,
  unmounted: Nn,
  activated: Nn,
  deactivated: Nn,
  errorCaptured: Nn,
  serverPrefetch: Nn,
  // assets
  components: Xa,
  directives: Xa,
  // watch
  watch: lv,
  // provide / inject
  provide: xd,
  inject: sv
};
function xd(e, t) {
  return t ? e ? function() {
    return yn(
      Xe(e) ? e.call(this, this) : e,
      Xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sv(e, t) {
  return Xa(Cu(e), Cu(t));
}
function Cu(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Nn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xa(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sd(e, t) {
  return e ? qe(e) && qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    vd(e),
    vd(t ?? {})
  ) : t;
}
function lv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Nn(e[r], t[r]);
  return n;
}
function Lp() {
  return {
    app: null,
    config: {
      isNativeTag: Zh,
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
let uv = 0;
function cv(e, t) {
  return function(r, a = null) {
    Xe(r) || (r = yn({}, r)), a != null && !vt(a) && (a = null);
    const o = Lp(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let h = !1;
    const g = o.app = {
      _uid: uv++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: Uv,
      get config() {
        return o.config;
      },
      set config(y) {
      },
      use(y, ...x) {
        return c.has(y) || (y && Xe(y.install) ? (c.add(y), y.install(g, ...x)) : Xe(y) && (c.add(y), y(g, ...x))), g;
      },
      mixin(y) {
        return o.mixins.includes(y) || o.mixins.push(y), g;
      },
      component(y, x) {
        return x ? (o.components[y] = x, g) : o.components[y];
      },
      directive(y, x) {
        return x ? (o.directives[y] = x, g) : o.directives[y];
      },
      mount(y, x, S) {
        if (!h) {
          const M = g._ceVNode || ze(r, a);
          return M.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(M, y, S), h = !0, g._container = y, y.__vue_app__ = g, rl(M.component);
        }
      },
      onUnmount(y) {
        f.push(y);
      },
      unmount() {
        h && (Pr(
          f,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(y, x) {
        return o.provides[y] = x, g;
      },
      runWithContext(y) {
        const x = ha;
        ha = g;
        try {
          return y();
        } finally {
          ha = x;
        }
      }
    };
    return g;
  };
}
let ha = null;
const fv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pn(t)}Modifiers`] || e[`${Ti(t)}Modifiers`];
function dv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Nt;
  let a = n;
  const o = t.startsWith("update:"), c = o && fv(r, t.slice(7));
  c && (c.trim && (a = n.map((y) => zt(y) ? y.trim() : y)), c.number && (a = n.map(ac)));
  let f, h = r[f = Wl(t)] || // also try camelCase event handler (#2249)
  r[f = Wl(Pn(t))];
  !h && o && (h = r[f = Wl(Ti(t))]), h && Pr(
    h,
    e,
    6,
    a
  );
  const g = r[f + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Pr(
      g,
      e,
      6,
      a
    );
  }
}
const hv = /* @__PURE__ */ new WeakMap();
function $p(e, t, n = !1) {
  const r = n ? hv : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let c = {}, f = !1;
  if (!Xe(e)) {
    const h = (g) => {
      const y = $p(g, t, !0);
      y && (f = !0, yn(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !o && !f ? (vt(e) && r.set(e, null), null) : (qe(o) ? o.forEach((h) => c[h] = null) : yn(c, o), vt(e) && r.set(e, c), c);
}
function tl(e, t) {
  return !e || !Ks(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, Ti(t)) || ht(e, t));
}
function wd(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [o],
    slots: c,
    attrs: f,
    emit: h,
    render: g,
    renderCache: y,
    props: x,
    data: S,
    setupState: M,
    ctx: b,
    inheritAttrs: O
  } = e, z = Is(e);
  let L, P;
  try {
    if (n.shapeFlag & 4) {
      const T = a || r, F = T;
      L = br(
        g.call(
          F,
          T,
          y,
          x,
          M,
          S,
          b
        )
      ), P = f;
    } else {
      const T = t;
      L = br(
        T.length > 1 ? T(
          x,
          { attrs: f, slots: c, emit: h }
        ) : T(
          x,
          null
        )
      ), P = t.props ? f : pv(f);
    }
  } catch (T) {
    so.length = 0, Zs(T, e, 1), L = ze(ui);
  }
  let $ = L;
  if (P && O !== !1) {
    const T = Object.keys(P), { shapeFlag: F } = $;
    T.length && F & 7 && (o && T.some(Ws) && (P = mv(
      P,
      o
    )), $ = xa($, P, !1, !0));
  }
  return n.dirs && ($ = xa($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && gc($, n.transition), L = $, Is(z), L;
}
const pv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ks(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ws(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function gv(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: c, children: f, patchFlag: h } = t, g = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return r ? kd(r, c, g) : !!c;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        const S = y[x];
        if (zp(c, r, S) && !tl(g, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? kd(r, c, g) : !0 : !!c;
  return !1;
}
function kd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (zp(t, e, o) && !tl(n, o))
      return !0;
  }
  return !1;
}
function zp(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && vt(r) && vt(a) ? !oc(r, a) : r !== a;
}
function bv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Vp = {}, jp = () => Object.create(Vp), Hp = (e) => Object.getPrototypeOf(e) === Vp;
function yv(e, t, n, r = !1) {
  const a = {}, o = jp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Up(e, t, a, o);
  for (const c in e.propsOptions[0])
    c in a || (a[c] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ Ny(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function vv(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: c }
  } = e, f = /* @__PURE__ */ dt(a), [h] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const y = e.vnode.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        let S = y[x];
        if (tl(e.emitsOptions, S))
          continue;
        const M = t[S];
        if (h)
          if (ht(o, S))
            M !== o[S] && (o[S] = M, g = !0);
          else {
            const b = Pn(S);
            a[b] = Iu(
              h,
              f,
              b,
              M,
              e,
              !1
            );
          }
        else
          M !== o[S] && (o[S] = M, g = !0);
      }
    }
  } else {
    Up(e, t, a, o) && (g = !0);
    let y;
    for (const x in f)
      (!t || // for camelCase
      !ht(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ti(x)) === x || !ht(t, y))) && (h ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[y] !== void 0) && (a[x] = Iu(
        h,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete a[x]);
    if (o !== f)
      for (const x in o)
        (!t || !ht(t, x)) && (delete o[x], g = !0);
  }
  g && Br(e.attrs, "set", "");
}
function Up(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let h in t) {
      if (to(h))
        continue;
      const g = t[h];
      let y;
      a && ht(a, y = Pn(h)) ? !o || !o.includes(y) ? n[y] = g : (f || (f = {}))[y] = g : tl(e.emitsOptions, h) || (!(h in r) || g !== r[h]) && (r[h] = g, c = !0);
    }
  if (o) {
    const h = /* @__PURE__ */ dt(n), g = f || Nt;
    for (let y = 0; y < o.length; y++) {
      const x = o[y];
      n[x] = Iu(
        a,
        h,
        x,
        g[x],
        e,
        !ht(g, x)
      );
    }
  }
  return c;
}
function Iu(e, t, n, r, a, o) {
  const c = e[n];
  if (c != null) {
    const f = ht(c, "default");
    if (f && r === void 0) {
      const h = c.default;
      if (c.type !== Function && !c.skipFactory && Xe(h)) {
        const { propsDefaults: g } = a;
        if (n in g)
          r = g[n];
        else {
          const y = wo(a);
          r = g[n] = h.call(
            null,
            t
          ), y();
        }
      } else
        r = h;
      a.ce && a.ce._setProp(n, r);
    }
    c[
      0
      /* shouldCast */
    ] && (o && !f ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ti(n)) && (r = !0));
  }
  return r;
}
const _v = /* @__PURE__ */ new WeakMap();
function Gp(e, t, n = !1) {
  const r = n ? _v : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, c = {}, f = [];
  let h = !1;
  if (!Xe(e)) {
    const y = (x) => {
      h = !0;
      const [S, M] = Gp(x, t, !0);
      yn(c, S), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!o && !h)
    return vt(e) && r.set(e, ca), ca;
  if (qe(o))
    for (let y = 0; y < o.length; y++) {
      const x = Pn(o[y]);
      Nd(x) && (c[x] = Nt);
    }
  else if (o)
    for (const y in o) {
      const x = Pn(y);
      if (Nd(x)) {
        const S = o[y], M = c[x] = qe(S) || Xe(S) ? { type: S } : yn({}, S), b = M.type;
        let O = !1, z = !0;
        if (qe(b))
          for (let L = 0; L < b.length; ++L) {
            const P = b[L], $ = Xe(P) && P.name;
            if ($ === "Boolean") {
              O = !0;
              break;
            } else $ === "String" && (z = !1);
          }
        else
          O = Xe(b) && b.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = O, M[
          1
          /* shouldCastTrue */
        ] = z, (O || ht(M, "default")) && f.push(x);
      }
    }
  const g = [c, f];
  return vt(e) && r.set(e, g), g;
}
function Nd(e) {
  return e[0] !== "$" && !to(e);
}
const yc = (e) => e === "_" || e === "_ctx" || e === "$stable", vc = (e) => qe(e) ? e.map(br) : [br(e)], xv = (e, t, n) => {
  if (t._n)
    return t;
  const r = Pp((...a) => vc(t(...a)), n);
  return r._c = !1, r;
}, Bp = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (yc(a)) continue;
    const o = e[a];
    if (Xe(o))
      t[a] = xv(a, o, r);
    else if (o != null) {
      const c = vc(o);
      t[a] = () => c;
    }
  }
}, Kp = (e, t) => {
  const n = vc(t);
  e.slots.default = () => n;
}, Wp = (e, t, n) => {
  for (const r in t)
    (n || !yc(r)) && (e[r] = t[r]);
}, Sv = (e, t, n) => {
  const r = e.slots = jp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Wp(r, t, n), n && rp(r, "_", a, !0)) : Bp(t, r);
  } else t && Kp(e, t);
}, wv = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, c = Nt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? o = !1 : Wp(a, t, n) : (o = !t.$stable, Bp(t, a)), c = t;
  } else t && (Kp(e, t), c = { default: 1 });
  if (o)
    for (const f in a)
      !yc(f) && c[f] == null && delete a[f];
}, On = Av;
function kv(e) {
  return Nv(e);
}
function Nv(e, t) {
  const n = Xs();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: c,
    createText: f,
    createComment: h,
    setText: g,
    setElementText: y,
    parentNode: x,
    nextSibling: S,
    setScopeId: M = Nr,
    insertStaticContent: b
  } = e, O = (R, j, te, _e = null, pe = null, D = null, Q = void 0, ee = null, de = !!j.dynamicChildren) => {
    if (R === j)
      return;
    R && !ja(R, j) && (_e = Yt(R), Ve(R, pe, D, !0), R = null), j.patchFlag === -2 && (de = !1, j.dynamicChildren = null);
    const { type: ne, ref: Pe, shapeFlag: ve } = j;
    switch (ne) {
      case nl:
        z(R, j, te, _e);
        break;
      case ui:
        L(R, j, te, _e);
        break;
      case eu:
        R == null && P(j, te, _e, Q);
        break;
      case ot:
        ie(
          R,
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
          R,
          j,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        ) : ve & 6 ? J(
          R,
          j,
          te,
          _e,
          pe,
          D,
          Q,
          ee,
          de
        ) : (ve & 64 || ve & 128) && ne.process(
          R,
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
    Pe != null && pe ? io(Pe, R && R.ref, D, j || R, !j) : Pe == null && R && R.ref != null && io(R.ref, null, D, R, !0);
  }, z = (R, j, te, _e) => {
    if (R == null)
      r(
        j.el = f(j.children),
        te,
        _e
      );
    else {
      const pe = j.el = R.el;
      j.children !== R.children && g(pe, j.children);
    }
  }, L = (R, j, te, _e) => {
    R == null ? r(
      j.el = h(j.children || ""),
      te,
      _e
    ) : j.el = R.el;
  }, P = (R, j, te, _e) => {
    [R.el, R.anchor] = b(
      R.children,
      j,
      te,
      _e,
      R.el,
      R.anchor
    );
  }, $ = ({ el: R, anchor: j }, te, _e) => {
    let pe;
    for (; R && R !== j; )
      pe = S(R), r(R, te, _e), R = pe;
    r(j, te, _e);
  }, T = ({ el: R, anchor: j }) => {
    let te;
    for (; R && R !== j; )
      te = S(R), a(R), R = te;
    a(j);
  }, F = (R, j, te, _e, pe, D, Q, ee, de) => {
    if (j.type === "svg" ? Q = "svg" : j.type === "math" && (Q = "mathml"), R == null)
      B(
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
      const ne = R.el && R.el._isVueCE ? R.el : null;
      try {
        ne && ne._beginPatch(), oe(
          R,
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
  }, B = (R, j, te, _e, pe, D, Q, ee) => {
    let de, ne;
    const { props: Pe, shapeFlag: ve, transition: Ie, dirs: d } = R;
    if (de = R.el = c(
      R.type,
      D,
      Pe && Pe.is,
      Pe
    ), ve & 8 ? y(de, R.children) : ve & 16 && le(
      R.children,
      de,
      null,
      _e,
      pe,
      Ql(R, D),
      Q,
      ee
    ), d && gi(R, null, _e, "created"), U(de, R, R.scopeId, Q, _e), Pe) {
      for (const Le in Pe)
        Le !== "value" && !to(Le) && o(de, Le, null, Pe[Le], D, _e);
      "value" in Pe && o(de, "value", null, Pe.value, D), (ne = Pe.onVnodeBeforeMount) && dr(ne, _e, R);
    }
    d && gi(R, null, _e, "beforeMount");
    const Oe = Mv(pe, Ie);
    Oe && Ie.beforeEnter(de), r(de, j, te), ((ne = Pe && Pe.onVnodeMounted) || Oe || d) && On(() => {
      try {
        ne && dr(ne, _e, R), Oe && Ie.enter(de), d && gi(R, null, _e, "mounted");
      } finally {
      }
    }, pe);
  }, U = (R, j, te, _e, pe) => {
    if (te && M(R, te), _e)
      for (let D = 0; D < _e.length; D++)
        M(R, _e[D]);
    if (pe) {
      let D = pe.subTree;
      if (j === D || Jp(D.type) && (D.ssContent === j || D.ssFallback === j)) {
        const Q = pe.vnode;
        U(
          R,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          pe.parent
        );
      }
    }
  }, le = (R, j, te, _e, pe, D, Q, ee, de = 0) => {
    for (let ne = de; ne < R.length; ne++) {
      const Pe = R[ne] = ee ? Gr(R[ne]) : br(R[ne]);
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
  }, oe = (R, j, te, _e, pe, D, Q) => {
    const ee = j.el = R.el;
    let { patchFlag: de, dynamicChildren: ne, dirs: Pe } = j;
    de |= R.patchFlag & 16;
    const ve = R.props || Nt, Ie = j.props || Nt;
    let d;
    if (te && bi(te, !1), (d = Ie.onVnodeBeforeUpdate) && dr(d, te, j, R), Pe && gi(j, R, te, "beforeUpdate"), te && bi(te, !0), (ve.innerHTML && Ie.innerHTML == null || ve.textContent && Ie.textContent == null) && y(ee, ""), ne ? I(
      R.dynamicChildren,
      ne,
      ee,
      te,
      _e,
      Ql(j, pe),
      D
    ) : Q || we(
      R,
      j,
      ee,
      null,
      te,
      _e,
      Ql(j, pe),
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
      de & 1 && R.children !== j.children && y(ee, j.children);
    } else !Q && ne == null && Y(ee, ve, Ie, te, pe);
    ((d = Ie.onVnodeUpdated) || Pe) && On(() => {
      d && dr(d, te, j, R), Pe && gi(j, R, te, "updated");
    }, _e);
  }, I = (R, j, te, _e, pe, D, Q) => {
    for (let ee = 0; ee < j.length; ee++) {
      const de = R[ee], ne = j[ee], Pe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ja(de, ne) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 198) ? x(de.el) : (
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
  }, Y = (R, j, te, _e, pe) => {
    if (j !== te) {
      if (j !== Nt)
        for (const D in j)
          !to(D) && !(D in te) && o(
            R,
            D,
            j[D],
            null,
            pe,
            _e
          );
      for (const D in te) {
        if (to(D)) continue;
        const Q = te[D], ee = j[D];
        Q !== ee && D !== "value" && o(R, D, ee, Q, pe, _e);
      }
      "value" in te && o(R, "value", j.value, te.value, pe);
    }
  }, ie = (R, j, te, _e, pe, D, Q, ee, de) => {
    const ne = j.el = R ? R.el : f(""), Pe = j.anchor = R ? R.anchor : f("");
    let { patchFlag: ve, dynamicChildren: Ie, slotScopeIds: d } = j;
    d && (ee = ee ? ee.concat(d) : d), R == null ? (r(ne, te, _e), r(Pe, te, _e), le(
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
    R.dynamicChildren && R.dynamicChildren.length === Ie.length ? (I(
      R.dynamicChildren,
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
    (j.key != null || pe && j === pe.subTree) && Yp(
      R,
      j,
      !0
      /* shallow */
    )) : we(
      R,
      j,
      te,
      Pe,
      pe,
      D,
      Q,
      ee,
      de
    );
  }, J = (R, j, te, _e, pe, D, Q, ee, de) => {
    j.slotScopeIds = ee, R == null ? j.shapeFlag & 512 ? pe.ctx.activate(
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
    ) : fe(R, j, de);
  }, he = (R, j, te, _e, pe, D, Q) => {
    const ee = R.component = Fv(
      R,
      _e,
      pe
    );
    if (Tp(R) && (ee.ctx.renderer = nn), Lv(ee, !1, Q), ee.asyncDep) {
      if (pe && pe.registerDep(ee, ke, Q), !R.el) {
        const de = ee.subTree = ze(ui);
        L(null, de, j, te), R.placeholder = de.el;
      }
    } else
      ke(
        ee,
        R,
        j,
        te,
        pe,
        D,
        Q
      );
  }, fe = (R, j, te) => {
    const _e = j.component = R.component;
    if (gv(R, j, te))
      if (_e.asyncDep && !_e.asyncResolved) {
        A(_e, j, te);
        return;
      } else
        _e.next = j, _e.update();
    else
      j.el = R.el, _e.vnode = j;
  }, ke = (R, j, te, _e, pe, D, Q) => {
    const ee = () => {
      if (R.isMounted) {
        let { next: ve, bu: Ie, u: d, parent: Oe, vnode: Le } = R;
        {
          const ae = qp(R);
          if (ae) {
            ve && (ve.el = Le.el, A(R, ve, Q)), ae.asyncDep.then(() => {
              On(() => {
                R.isUnmounted || ne();
              }, pe);
            });
            return;
          }
        }
        let Ge = ve, Ze;
        bi(R, !1), ve ? (ve.el = Le.el, A(R, ve, Q)) : ve = Le, Ie && ps(Ie), (Ze = ve.props && ve.props.onVnodeBeforeUpdate) && dr(Ze, Oe, ve, Le), bi(R, !0);
        const gt = wd(R), rt = R.subTree;
        R.subTree = gt, O(
          rt,
          gt,
          // parent may have changed if it's in a teleport
          x(rt.el),
          // anchor may have changed if it's in a fragment
          Yt(rt),
          R,
          pe,
          D
        ), ve.el = gt.el, Ge === null && bv(R, gt.el), d && On(d, pe), (Ze = ve.props && ve.props.onVnodeUpdated) && On(
          () => dr(Ze, Oe, ve, Le),
          pe
        );
      } else {
        let ve;
        const { el: Ie, props: d } = j, { bm: Oe, m: Le, parent: Ge, root: Ze, type: gt } = R, rt = ao(j);
        bi(R, !1), Oe && ps(Oe), !rt && (ve = d && d.onVnodeBeforeMount) && dr(ve, Ge, j), bi(R, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(
            gt,
            R.parent ? R.parent.type : void 0
          );
          const ae = R.subTree = wd(R);
          O(
            null,
            ae,
            te,
            _e,
            R,
            pe,
            D
          ), j.el = ae.el;
        }
        if (Le && On(Le, pe), !rt && (ve = d && d.onVnodeMounted)) {
          const ae = j;
          On(
            () => dr(ve, Ge, ae),
            pe
          );
        }
        (j.shapeFlag & 256 || Ge && ao(Ge.vnode) && Ge.vnode.shapeFlag & 256) && R.a && On(R.a, pe), R.isMounted = !0, j = te = _e = null;
      }
    };
    R.scope.on();
    const de = R.effect = new sp(ee);
    R.scope.off();
    const ne = R.update = de.run.bind(de), Pe = R.job = de.runIfDirty.bind(de);
    Pe.i = R, Pe.id = R.uid, de.scheduler = () => mc(Pe), bi(R, !0), ne();
  }, A = (R, j, te) => {
    j.component = R;
    const _e = R.vnode.props;
    R.vnode = j, R.next = null, vv(R, j.props, _e, te), wv(R, j.children, te), Yr(), md(R), qr();
  }, we = (R, j, te, _e, pe, D, Q, ee, de = !1) => {
    const ne = R && R.children, Pe = R ? R.shapeFlag : 0, ve = j.children, { patchFlag: Ie, shapeFlag: d } = j;
    if (Ie > 0) {
      if (Ie & 128) {
        Me(
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
    d & 8 ? (Pe & 16 && je(ne, pe, D), ve !== ne && y(te, ve)) : Pe & 16 ? d & 16 ? Me(
      ne,
      ve,
      te,
      _e,
      pe,
      D,
      Q,
      ee,
      de
    ) : je(ne, pe, D, !0) : (Pe & 8 && y(te, ""), d & 16 && le(
      ve,
      te,
      _e,
      pe,
      D,
      Q,
      ee,
      de
    ));
  }, Ce = (R, j, te, _e, pe, D, Q, ee, de) => {
    R = R || ca, j = j || ca;
    const ne = R.length, Pe = j.length, ve = Math.min(ne, Pe);
    let Ie;
    for (Ie = 0; Ie < ve; Ie++) {
      const d = j[Ie] = de ? Gr(j[Ie]) : br(j[Ie]);
      O(
        R[Ie],
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
      R,
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
  }, Me = (R, j, te, _e, pe, D, Q, ee, de) => {
    let ne = 0;
    const Pe = j.length;
    let ve = R.length - 1, Ie = Pe - 1;
    for (; ne <= ve && ne <= Ie; ) {
      const d = R[ne], Oe = j[ne] = de ? Gr(j[ne]) : br(j[ne]);
      if (ja(d, Oe))
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
      const d = R[ve], Oe = j[Ie] = de ? Gr(j[Ie]) : br(j[Ie]);
      if (ja(d, Oe))
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
            j[ne] = de ? Gr(j[ne]) : br(j[ne]),
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
        Ve(R[ne], pe, D, !0), ne++;
    else {
      const d = ne, Oe = ne, Le = /* @__PURE__ */ new Map();
      for (ne = Oe; ne <= Ie; ne++) {
        const at = j[ne] = de ? Gr(j[ne]) : br(j[ne]);
        at.key != null && Le.set(at.key, ne);
      }
      let Ge, Ze = 0;
      const gt = Ie - Oe + 1;
      let rt = !1, ae = 0;
      const Et = new Array(gt);
      for (ne = 0; ne < gt; ne++) Et[ne] = 0;
      for (ne = d; ne <= ve; ne++) {
        const at = R[ne];
        if (Ze >= gt) {
          Ve(at, pe, D, !0);
          continue;
        }
        let _n;
        if (at.key != null)
          _n = Le.get(at.key);
        else
          for (Ge = Oe; Ge <= Ie; Ge++)
            if (Et[Ge - Oe] === 0 && ja(at, j[Ge])) {
              _n = Ge;
              break;
            }
        _n === void 0 ? Ve(at, pe, D, !0) : (Et[_n - Oe] = ne + 1, _n >= ae ? ae = _n : rt = !0, O(
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
      const er = rt ? Pv(Et) : ca;
      for (Ge = er.length - 1, ne = gt - 1; ne >= 0; ne--) {
        const at = Oe + ne, _n = j[at], V = j[at + 1], me = at + 1 < Pe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          V.el || Xp(V)
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
        ) : rt && (Ge < 0 || ne !== er[Ge] ? G(_n, te, me, 2) : Ge--);
      }
    }
  }, G = (R, j, te, _e, pe = null) => {
    const { el: D, type: Q, transition: ee, children: de, shapeFlag: ne } = R;
    if (ne & 6) {
      G(R.component.subTree, j, te, _e);
      return;
    }
    if (ne & 128) {
      R.suspense.move(j, te, _e);
      return;
    }
    if (ne & 64) {
      Q.move(R, j, te, nn);
      return;
    }
    if (Q === ot) {
      r(D, j, te);
      for (let ve = 0; ve < de.length; ve++)
        G(de[ve], j, te, _e);
      r(R.anchor, j, te);
      return;
    }
    if (Q === eu) {
      $(R, j, te);
      return;
    }
    if (_e !== 2 && ne & 1 && ee)
      if (_e === 0)
        ee.beforeEnter(D), r(D, j, te), On(() => ee.enter(D), pe);
      else {
        const { leave: ve, delayLeave: Ie, afterLeave: d } = ee, Oe = () => {
          R.ctx.isUnmounted ? a(D) : r(D, j, te);
        }, Le = () => {
          D._isLeaving && D[Uy](
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
  }, Ve = (R, j, te, _e = !1, pe = !1) => {
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
    } = R;
    if (ve === -2 && (pe = !1), ee != null && (Yr(), io(ee, null, te, R, !0), qr()), d != null && (j.renderCache[d] = void 0), Pe & 256) {
      j.ctx.deactivate(R);
      return;
    }
    const Le = Pe & 1 && Ie, Ge = !ao(R);
    let Ze;
    if (Ge && (Ze = Q && Q.onVnodeBeforeUnmount) && dr(Ze, j, R), Pe & 6)
      We(R.component, te, _e);
    else {
      if (Pe & 128) {
        R.suspense.unmount(te, _e);
        return;
      }
      Le && gi(R, null, j, "beforeUnmount"), Pe & 64 ? R.type.remove(
        R,
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
      ) : (D === ot && ve & 384 || !pe && Pe & 16) && je(de, j, te), _e && mt(R);
    }
    const gt = Oe != null && d == null;
    (Ge && (Ze = Q && Q.onVnodeUnmounted) || Le || gt) && On(() => {
      Ze && dr(Ze, j, R), Le && gi(R, null, j, "unmounted"), gt && (R.el = null);
    }, te);
  }, mt = (R) => {
    const { type: j, el: te, anchor: _e, transition: pe } = R;
    if (j === ot) {
      et(te, _e);
      return;
    }
    if (j === eu) {
      T(R);
      return;
    }
    const D = () => {
      a(te), pe && !pe.persisted && pe.afterLeave && pe.afterLeave();
    };
    if (R.shapeFlag & 1 && pe && !pe.persisted) {
      const { leave: Q, delayLeave: ee } = pe, de = () => Q(te, D);
      ee ? ee(R.el, D, de) : de();
    } else
      D();
  }, et = (R, j) => {
    let te;
    for (; R !== j; )
      te = S(R), a(R), R = te;
    a(j);
  }, We = (R, j, te) => {
    const { bum: _e, scope: pe, job: D, subTree: Q, um: ee, m: de, a: ne } = R;
    Md(de), Md(ne), _e && ps(_e), pe.stop(), D && (D.flags |= 8, Ve(Q, R, j, te)), ee && On(ee, j), On(() => {
      R.isUnmounted = !0;
    }, j);
  }, je = (R, j, te, _e = !1, pe = !1, D = 0) => {
    for (let Q = D; Q < R.length; Q++)
      Ve(R[Q], j, te, _e, pe);
  }, Yt = (R) => {
    if (R.shapeFlag & 6)
      return Yt(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const j = S(R.anchor || R.el), te = j && j[jy];
    return te ? S(te) : j;
  };
  let An = !1;
  const vn = (R, j, te) => {
    let _e;
    R == null ? j._vnode && (Ve(j._vnode, null, null, !0), _e = j._vnode.component) : O(
      j._vnode || null,
      R,
      j,
      null,
      null,
      null,
      te
    ), j._vnode = R, An || (An = !0, md(_e), kp(), An = !1);
  }, nn = {
    p: O,
    um: Ve,
    m: G,
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
    createApp: cv(vn)
  };
}
function Ql({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Mv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yp(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (qe(r) && qe(a))
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      let f = a[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[o] = Gr(a[o]), f.el = c.el), !n && f.patchFlag !== -2 && Yp(c, f)), f.type === nl && (f.patchFlag === -1 && (f = a[o] = Gr(f)), f.el = c.el), f.type === ui && !f.el && (f.el = c.el);
    }
}
function Pv(e) {
  const t = e.slice(), n = [0];
  let r, a, o, c, f;
  const h = e.length;
  for (r = 0; r < h; r++) {
    const g = e[r];
    if (g !== 0) {
      if (a = n[n.length - 1], e[a] < g) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, c = n.length - 1; o < c; )
        f = o + c >> 1, e[n[f]] < g ? o = f + 1 : c = f;
      g < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, c = n[o - 1]; o-- > 0; )
    n[o] = c, c = t[c];
  return n;
}
function qp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qp(t);
}
function Md(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xp(t.subTree) : null;
}
const Jp = (e) => e.__isSuspense;
function Av(e, t) {
  t && t.pendingBranch ? qe(e) ? t.effects.push(...e) : t.effects.push(e) : Ry(e);
}
const ot = /* @__PURE__ */ Symbol.for("v-fgt"), nl = /* @__PURE__ */ Symbol.for("v-txt"), ui = /* @__PURE__ */ Symbol.for("v-cmt"), eu = /* @__PURE__ */ Symbol.for("v-stc"), so = [];
let Gn = null;
function Ne(e = !1) {
  so.push(Gn = e ? null : []);
}
function Cv() {
  so.pop(), Gn = so[so.length - 1] || null;
}
let ho = 1;
function Pd(e, t = !1) {
  ho += e, e < 0 && Gn && t && (Gn.hasOnce = !0);
}
function Zp(e) {
  return e.dynamicChildren = ho > 0 ? Gn || ca : null, Cv(), ho > 0 && Gn && Gn.push(e), e;
}
function Ae(e, t, n, r, a, o) {
  return Zp(
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
  return Zp(
    ze(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Qp(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ja(e, t) {
  return e.type === t.type && e.key === t.key;
}
const em = ({ key: e }) => e ?? null, gs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? zt(e) || /* @__PURE__ */ gn(e) || Xe(e) ? { i: Un, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, a = null, o = e === ot ? 0 : 1, c = !1, f = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && em(t),
    ref: t && gs(t),
    scopeId: Mp,
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
  return f ? (_c(h, n), o & 128 && e.normalize(h)) : n && (h.shapeFlag |= zt(n) ? 8 : 16), ho > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Gn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Gn.push(h), h;
}
const ze = Iv;
function Iv(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === Op) && (e = ui), Qp(e)) {
    const f = xa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _c(f, n), ho > 0 && !o && Gn && (f.shapeFlag & 6 ? Gn[Gn.indexOf(e)] = f : Gn.push(f)), f.patchFlag = -2, f;
  }
  if (Hv(e) && (e = e.__vccOpts), t) {
    t = Tv(t);
    let { class: f, style: h } = t;
    f && !zt(f) && (t.class = ft(f)), vt(h) && (/* @__PURE__ */ hc(h) && !qe(h) && (h = yn({}, h)), t.style = Ut(h));
  }
  const c = zt(e) ? 1 : Jp(e) ? 128 : Hy(e) ? 64 : vt(e) ? 4 : Xe(e) ? 2 : 0;
  return X(
    e,
    t,
    n,
    r,
    a,
    c,
    o,
    !0
  );
}
function Tv(e) {
  return e ? /* @__PURE__ */ hc(e) || Hp(e) ? yn({}, e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
  const { props: a, ref: o, patchFlag: c, children: f, transition: h } = e, g = t ? si(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && em(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? qe(o) ? o.concat(gs(t)) : [o, gs(t)] : gs(t)
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
    patchFlag: t && e.type !== ot ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && xa(e.ssContent),
    ssFallback: e.ssFallback && xa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && r && gc(
    y,
    h.clone(y)
  ), y;
}
function Ev(e = " ", t = 0) {
  return ze(nl, null, e, t);
}
function Rt(e = "", t = !1) {
  return t ? (Ne(), Ei(ui, null, e)) : ze(ui, null, e);
}
function br(e) {
  return e == null || typeof e == "boolean" ? ze(ui) : qe(e) ? ze(
    ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qp(e) ? Gr(e) : ze(nl, null, String(e));
}
function Gr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function _c(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), _c(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Hp(t) ? t._ctx = Un : a === 3 && Un && (Un.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Xe(t) ? (t = { default: t, _ctx: Un }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ev(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function si(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = ft([t.class, r.class]));
      else if (a === "style")
        t.style = Ut([t.style, r.style]);
      else if (Ks(a)) {
        const o = t[a], c = r[a];
        c && o !== c && !(qe(o) && o.includes(c)) ? t[a] = o ? [].concat(o, c) : c : c == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ws(a) && (t[a] = c);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function dr(e, t, n, r = null) {
  Pr(e, t, 7, [
    n,
    r
  ]);
}
const Dv = Lp();
let Ov = 0;
function Fv(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || Dv, o = {
    uid: Ov++,
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
    scope: new ay(
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
    propsOptions: Gp(r, a),
    emitsOptions: $p(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Nt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Nt,
    data: Nt,
    props: Nt,
    attrs: Nt,
    slots: Nt,
    refs: Nt,
    setupState: Nt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = dv.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Rv = () => pn || Un;
let Ds, Tu;
{
  const e = Xs(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((c) => c(o)) : a[0](o);
    };
  };
  Ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pn = n
  ), Tu = t(
    "__VUE_SSR_SETTERS__",
    (n) => po = n
  );
}
const wo = (e) => {
  const t = pn;
  return Ds(e), e.scope.on(), () => {
    e.scope.off(), Ds(t);
  };
}, Ad = () => {
  pn && pn.scope.off(), Ds(null);
};
function tm(e) {
  return e.vnode.shapeFlag & 4;
}
let po = !1;
function Lv(e, t = !1, n = !1) {
  t && Tu(t);
  const { props: r, children: a } = e.vnode, o = tm(e);
  yv(e, r, o, t), Sv(e, a, n || t);
  const c = o ? $v(e, t) : void 0;
  return t && Tu(!1), c;
}
function $v(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rv);
  const { setup: r } = n;
  if (r) {
    Yr();
    const a = e.setupContext = r.length > 1 ? Vv(e) : null, o = wo(e), c = So(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = ep(c);
    if (qr(), o(), (f || e.sp) && !ao(e) && Ip(e), f) {
      if (c.then(Ad, Ad), t)
        return c.then((h) => {
          Cd(e, h);
        }).catch((h) => {
          Zs(h, e, 0);
        });
      e.asyncDep = c;
    } else
      Cd(e, c);
  } else
    nm(e);
}
function Cd(e, t, n) {
  Xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = xp(t)), nm(e);
}
function nm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Nr);
  {
    const a = wo(e);
    Yr();
    try {
      iv(e);
    } finally {
      qr(), a();
    }
  }
}
const zv = {
  get(e, t) {
    return hn(e, "get", ""), e[t];
  }
};
function Vv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, zv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function rl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xp(My(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in oo)
        return oo[n](e);
    },
    has(t, n) {
      return n in t || n in oo;
    }
  })) : e.proxy;
}
function jv(e, t = !0) {
  return Xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hv(e) {
  return Xe(e) && "__vccOpts" in e;
}
const kt = (e, t) => /* @__PURE__ */ Ty(e, t, po), Uv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Eu;
const Id = typeof window < "u" && window.trustedTypes;
if (Id)
  try {
    Eu = /* @__PURE__ */ Id.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rm = Eu ? (e) => Eu.createHTML(e) : (e) => e, Gv = "http://www.w3.org/2000/svg", Bv = "http://www.w3.org/1998/Math/MathML", Vr = typeof document < "u" ? document : null, Td = Vr && /* @__PURE__ */ Vr.createElement("template"), Kv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Vr.createElementNS(Gv, e) : t === "mathml" ? Vr.createElementNS(Bv, e) : n ? Vr.createElement(e, { is: n }) : Vr.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Vr.createTextNode(e),
  createComment: (e) => Vr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Vr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, o) {
    const c = n ? n.previousSibling : t.lastChild;
    if (a && (a === o || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === o || !(a = a.nextSibling)); )
        ;
    else {
      Td.innerHTML = rm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Td.content;
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
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Wv = /* @__PURE__ */ Symbol("_vtc");
function Yv(e, t, n) {
  const r = e[Wv];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Os = /* @__PURE__ */ Symbol("_vod"), im = /* @__PURE__ */ Symbol("_vsh"), ko = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Os] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ha(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ha(e, !0), r.enter(e)) : r.leave(e, () => {
      Ha(e, !1);
    }) : Ha(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ha(e, t);
  }
};
function Ha(e, t) {
  e.style.display = t ? e[Os] : "none", e[im] = !t;
}
const qv = /* @__PURE__ */ Symbol(""), Xv = /(?:^|;)\s*display\s*:/;
function Jv(e, t, n) {
  const r = e.style, a = zt(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (zt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && bs(r, f, "");
        }
      else
        for (const c in t)
          n[c] == null && bs(r, c, "");
    for (const c in n)
      c === "display" && (o = !0), bs(r, c, n[c]);
  } else if (a) {
    if (t !== n) {
      const c = r[qv];
      c && (n += ";" + c), r.cssText = n, o = Xv.test(n);
    }
  } else t && e.removeAttribute("style");
  Os in e && (e[Os] = o ? r.display : "", e[im] && (r.display = "none"));
}
const Ed = /\s*!important$/;
function bs(e, t, n) {
  if (qe(n))
    n.forEach((r) => bs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Zv(e, t);
    Ed.test(n) ? e.setProperty(
      Ti(r),
      n.replace(Ed, ""),
      "important"
    ) : e[r] = n;
  }
}
const Dd = ["Webkit", "Moz", "ms"], tu = {};
function Zv(e, t) {
  const n = tu[t];
  if (n)
    return n;
  let r = Pn(t);
  if (r !== "filter" && r in e)
    return tu[t] = r;
  r = qs(r);
  for (let a = 0; a < Dd.length; a++) {
    const o = Dd[a] + r;
    if (o in e)
      return tu[t] = o;
  }
  return t;
}
const Od = "http://www.w3.org/1999/xlink";
function Fd(e, t, n, r, a, o = ry(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Od, t.slice(6, t.length)) : e.setAttributeNS(Od, t, n) : n == null || o && !ip(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Mr(n) ? String(n) : n
  );
}
function Rd(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rm(n) : n);
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
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ip(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(a || t);
}
function oa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Qv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ld = /* @__PURE__ */ Symbol("_vei");
function e1(e, t, n, r, a = null) {
  const o = e[Ld] || (e[Ld] = {}), c = o[t];
  if (r && c)
    c.value = r;
  else {
    const [f, h] = t1(t);
    if (r) {
      const g = o[t] = i1(
        r,
        a
      );
      oa(e, f, g, h);
    } else c && (Qv(e, f, c, h), o[t] = void 0);
  }
}
const $d = /(?:Once|Passive|Capture)$/;
function t1(e) {
  let t;
  if ($d.test(e)) {
    t = {};
    let r;
    for (; r = e.match($d); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ti(e.slice(2)), t];
}
let nu = 0;
const n1 = /* @__PURE__ */ Promise.resolve(), r1 = () => nu || (n1.then(() => nu = 0), nu = Date.now());
function i1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Pr(
      a1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = r1(), n;
}
function a1(e, t) {
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
const zd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, o1 = (e, t, n, r, a, o) => {
  const c = a === "svg";
  t === "class" ? Yv(e, r, c) : t === "style" ? Jv(e, n, r) : Ks(t) ? Ws(t) || e1(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : s1(e, t, r, c)) ? (Rd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fd(e, t, r, c, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (l1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !zt(r))) ? Rd(e, Pn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Fd(e, t, r, c));
};
function s1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zd(t) && Xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return zd(t) && zt(n) ? !1 : t in e;
}
function l1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Pn(t);
  return Array.isArray(n) ? n.some((a) => Pn(a) === r) : Object.keys(n).some((a) => Pn(a) === r);
}
const Vd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return qe(t) ? (n) => ps(t, n) : t;
};
function u1(e) {
  e.target.composing = !0;
}
function jd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ru = /* @__PURE__ */ Symbol("_assign");
function Hd(e, t, n) {
  return t && (e = e.trim()), n && (e = ac(e)), e;
}
const Ud = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[ru] = Vd(a);
    const o = r || a.props && a.props.type === "number";
    oa(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ru](Hd(e.value, n, o));
    }), (n || o) && oa(e, "change", () => {
      e.value = Hd(e.value, n, o);
    }), t || (oa(e, "compositionstart", u1), oa(e, "compositionend", jd), oa(e, "change", jd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: o } }, c) {
    if (e[ru] = Vd(c), e.composing) return;
    const f = (o || e.type === "number") && !/^0\d/.test(e.value) ? ac(e.value) : e.value, h = t ?? "";
    if (f === h)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === h) || (e.value = h);
  }
}, c1 = ["ctrl", "shift", "alt", "meta"], f1 = {
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
  exact: (e, t) => c1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...o) => {
    for (let c = 0; c < t.length; c++) {
      const f = f1[t[c]];
      if (f && f(a, t)) return;
    }
    return e(a, ...o);
  }));
}, d1 = /* @__PURE__ */ yn({ patchProp: o1 }, Kv);
let Gd;
function h1() {
  return Gd || (Gd = kv(d1));
}
const xc = ((...e) => {
  const t = h1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = m1(r);
    if (!a) return;
    const o = t._component;
    !Xe(o) && !o.render && !o.template && (o.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const c = n(a, !1, p1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), c;
  }, t;
});
function p1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function m1(e) {
  return zt(e) ? document.querySelector(e) : e;
}
function W(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function g1(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Gt = Math.PI / 180, Ar = 180 / Math.PI;
function Mi(e, t, n) {
  return { x: e, y: t, z: n };
}
function Sa(e, t) {
  return Mi(e.x + t.x, e.y + t.y, e.z + t.z);
}
function wa(e, t) {
  return Mi(e.x * t, e.y * t, e.z * t);
}
function pa(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Sc(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Mi(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const n = e * Gt, r = t * Gt, a = Math.cos(r);
  return Mi(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ln(e, t, n = 0) {
  const r = Number(e || 0) * Gt, a = Number(t || 0) * Gt, o = n * Gt, c = Math.cos(r), f = Math.sin(r), h = Math.cos(a), g = Math.sin(a), y = Math.cos(o), x = Math.sin(o);
  return {
    right: Mi(
      c * y - f * g * x,
      h * x,
      -f * y - c * g * x
    ),
    up: Mi(
      -c * x - f * g * y,
      h * y,
      f * x - c * g * y
    ),
    fwd: Mi(f * h, g, c * h)
  };
}
const jt = Math.PI / 180, am = Math.PI * 2, Du = 2048;
function wt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function il(e, t, n) {
  return { x: e, y: t, z: n };
}
function Bd(e, t) {
  return il(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Kd(e, t) {
  return il(e.x * t, e.y * t, e.z * t);
}
function iu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function b1(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return il(e.x / t, e.y / t, e.z / t);
}
function y1(e, t) {
  const n = (Number(e || 0) - 0.5) * am, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return il(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Wd(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Number(n || 1)), c = Math.max(512, Du), f = Math.min(1, c / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: o,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Yd(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function au(e, t, n) {
  const r = Yd(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Yd(e, e.FRAGMENT_SHADER, n);
  } catch (c) {
    throw e.deleteShader(r), c;
  }
  const o = e.createProgram();
  if (e.attachShader(o, r), e.attachShader(o, a), e.linkProgram(o), e.deleteShader(r), e.deleteShader(a), !e.getProgramParameter(o, e.LINK_STATUS)) {
    const c = e.getProgramInfoLog(o) || "program link failed";
    throw e.deleteProgram(o), new Error(c);
  }
  return o;
}
const ou = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, om = `
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
}`, v1 = `#version 300 es
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

${om}

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
}`, _1 = `#version 300 es
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

${om}

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
}`, x1 = `#version 300 es
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
function Ua(e, t, n) {
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
function S1(e) {
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
function w1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, o = null, c = null, f = null, h = null, g = null, y = null, x = null, S = null, M = !1, b = Wd(1, 1, 1), O = null, z = null, L = null, P = null, $ = null;
  const T = /* @__PURE__ */ new Map();
  let F = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, B = {
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
    if (M) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = au(n, ou, v1), a = au(n, ou, _1), o = au(n, ou, x1), O = {
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
      }, c = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, c), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), f = le(n.REPEAT, n.CLAMP_TO_EDGE), h = le(n.REPEAT, n.CLAMP_TO_EDGE), g = le(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function I() {
    var D;
    if (n) {
      try {
        c && n.deleteBuffer(c), f && n.deleteTexture(f), h && n.deleteTexture(h), g && n.deleteTexture(g), T.forEach((Q) => {
          Me(Q);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), o && n.deleteProgram(o), (D = n.getExtension("WEBGL_lose_context")) == null || D.loseContext();
      } catch {
      }
      n = null, r = null, a = null, o = null, c = null, f = null, h = null, g = null, T.clear(), y = null, x = null, S = null, B = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, U = {
        paint: !1,
        mask: !1
      }, P = null, $ = null, M = !1;
    }
  }
  function Y(D, Q, ee = 1) {
    b = Wd(D, Q, ee), (t.width !== b.width || t.height !== b.height) && (t.width = b.width, t.height = b.height);
  }
  function ie(D) {
    D === "background" ? y = null : D === "paint" ? x = null : S = null, B[D] && (B[D].width = 0, B[D].height = 0);
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
    if (P || (P = document.createElement("canvas"), $ = P.getContext("2d")), !$)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const d of Ie) {
      const Oe = Math.max(0, Math.floor(Number(d.x || 0))), Le = Math.max(0, Math.floor(Number(d.y || 0))), Ge = Math.min(Pe - Oe, Math.ceil(Number(d.w || 0))), Ze = Math.min(ve - Le, Math.ceil(Number(d.h || 0)));
      if (!(Ge <= 0 || Ze <= 0)) {
        if (P.width !== Ge || P.height !== Ze) {
          if (P.width = Ge, P.height = Ze, $ = P.getContext("2d"), !$)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          $.clearRect(0, 0, Ge, Ze);
        $.drawImage(Q, Oe, Le, Ge, Ze, 0, 0, Ge, Ze), n.texSubImage2D(n.TEXTURE_2D, 0, Oe, Le, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ke(D, Q, ee, de, ne = null, Pe = !1) {
    if (!oe()) return !1;
    if (!ee)
      return ie(D), !1;
    const ve = String(de ?? ""), Ie = D === "background" ? y : D === "paint" ? x : S, d = B[D], Oe = Number(ee.width || ee.videoWidth || ee.naturalWidth || 0), Le = Number(ee.height || ee.videoHeight || ee.naturalHeight || 0), Ge = d.width !== Oe || d.height !== Le;
    if (Ie === ve && !Ge && !(Array.isArray(ne) && ne.length)) return !0;
    if (!(Oe > 0) || !(Le > 0))
      return ie(D), !1;
    if (n.bindTexture(n.TEXTURE_2D, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Pe ? 1 : 0), !(Array.isArray(ne) && ne.length ? fe(Q, ee, ne, d, Pe) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ee), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ie(D), !1;
      d.width = Oe, d.height = Le;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), D === "background" ? y = ve : D === "paint" ? x = ve : S = ve, !0;
  }
  function A(D, Q) {
    return ke("background", f, D, Q, null, !0);
  }
  function we(D, Q, ee = null) {
    return ke("paint", h, D, Q, ee, !0);
  }
  function Ce(D, Q, ee = null) {
    return ke("mask", g, D, Q, ee, !0);
  }
  function Me(D) {
    D != null && D.texture && n && n.deleteTexture(D.texture);
  }
  function G(D = /* @__PURE__ */ new Set()) {
    T.forEach((Q, ee) => {
      D.has(ee) || (Me(Q), T.delete(ee));
    });
  }
  function Ve(D) {
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
      !(ee != null && ee.assetId) || !(ee != null && ee.source) || (Q.add(String(ee.assetId)), Ve(ee));
    }), G(Q), !0;
  }
  function et() {
    return oe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function We(D) {
    n.useProgram(D), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function je(D, Q = {}) {
    if (!y) return null;
    n.disable(n.BLEND), We(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(O.background, 0), n.uniform2f(O.viewport, Math.max(1, b.width), Math.max(1, b.height)), n.uniform1i(O.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ee = Ua(D, b.width, b.height) || {
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
    const ee = U.paint && x != null, de = U.mask && S != null;
    if (!ee && !de) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), We(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(z.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(z.mask, 1), n.uniform1i(z.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ne = Ua(D, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(z.yaw, Number(ne.yawDeg || 0) * jt), n.uniform1f(z.pitch, Number(ne.pitchDeg || 0) * jt), n.uniform1f(z.roll, Number(ne.rollDeg || 0) * jt), n.uniform1f(z.hFov, wt(Number(ne.hFovDeg || 90), 0.1, 179) * jt), n.uniform1f(z.vFov, wt(Number(ne.vFovDeg || 60), 0.1, 179) * jt), n.uniform1f(z.paintOpacity, wt(Number(Q.paintOpacity ?? 1), 0, 1)), n.uniform1f(z.maskOpacity, wt(Number(Q.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(z.hasPaint, ee ? 1 : 0), n.uniform1i(z.hasMask, de ? 1 : 0), n.uniform1i(z.showMaskTint, Q.showMaskTint === !1 ? 0 : 1), n.uniform3f(z.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function An(D, Q) {
    var d, Oe, Le, Ge, Ze, gt, rt;
    const ee = Array.isArray(D == null ? void 0 : D.objects) ? D.objects : [];
    if (!ee.length) {
      J(), G(/* @__PURE__ */ new Set());
      return;
    }
    const de = (Q == null ? void 0 : Q.mode) === "unwrap" ? 0 : (Q == null ? void 0 : Q.mode) === "cutout" ? 2 : 1, ne = Ua(Q, b.width, b.height) || {
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
          const er = Ve({
            assetId: Et,
            source: ae.source,
            revision: ae.revision
          });
          if (!er) continue;
          const at = S1({
            yawDeg: ((Oe = ae == null ? void 0 : ae.transform) == null ? void 0 : Oe.yawDeg) || 0,
            pitchDeg: ((Le = ae == null ? void 0 : ae.transform) == null ? void 0 : Le.pitchDeg) || 0,
            rollDeg: ((Ge = ae == null ? void 0 : ae.transform) == null ? void 0 : Ge.rollDeg) || 0,
            hFovDeg: ((Ze = ae == null ? void 0 : ae.transform) == null ? void 0 : Ze.hFovDeg) || 30,
            vFovDeg: ((gt = ae == null ? void 0 : ae.transform) == null ? void 0 : gt.vFovDeg) || 30,
            crop: ((rt = ae == null ? void 0 : ae.params) == null ? void 0 : rt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ae == null ? void 0 : ae.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), We(o), n.uniform1i(L.texture, 0), n.uniform1i(L.mode, de), n.uniform3f(L.viewRight, Pe.right.x, Pe.right.y, Pe.right.z), n.uniform3f(L.viewUp, Pe.up.x, Pe.up.y, Pe.up.z), n.uniform3f(L.viewFwd, Pe.fwd.x, Pe.fwd.y, Pe.fwd.z), n.uniform1f(L.viewHfov, wt(Number(ne.hFovDeg || 90), 0.1, 179) * jt), n.uniform1f(L.viewVfov, wt(Number(ne.vFovDeg || 60), 0.1, 179) * jt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, er), n.uniform3f(L.stickerRight, at.right.x, at.right.y, at.right.z), n.uniform3f(L.stickerUp, at.up.x, at.up.y, at.up.z), n.uniform3f(L.stickerFwd, at.fwd.x, at.fwd.y, at.fwd.z), n.uniform1f(L.stickerTanX, Math.max(1e-6, at.tanX)), n.uniform1f(L.stickerTanY, Math.max(1e-6, at.tanY)), n.uniform4f(
            L.crop,
            wt(Number(at.crop.x0 ?? 0), 0, 1),
            wt(Number(at.crop.y0 ?? 0), 0, 1),
            wt(Number(at.crop.x1 ?? 1), 0, 1),
            wt(Number(at.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(L.opacity, at.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
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
    G(Ie), J();
  }
  function vn(D) {
    return !et() || !y ? null : (je({
      mode: "panorama",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      fovDeg: (D == null ? void 0 : D.fovDeg) || 100
    }, D), t);
  }
  function nn(D) {
    return !et() || !y ? null : (je({ mode: "unwrap" }, D), t);
  }
  function sn(D) {
    return !et() || !y ? null : (je({
      mode: "cutout",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      rollDeg: (D == null ? void 0 : D.rollDeg) || 0,
      hFovDeg: (D == null ? void 0 : D.hFovDeg) || 90,
      vFovDeg: (D == null ? void 0 : D.vFovDeg) || 60
    }, D), t);
  }
  function R(D = {}) {
    if (!oe()) return !1;
    const Q = Object.prototype.hasOwnProperty.call(D, "backgroundSource"), ee = Object.prototype.hasOwnProperty.call(D, "paintSource"), de = Object.prototype.hasOwnProperty.call(D, "maskSource"), ne = Object.prototype.hasOwnProperty.call(D, "textures"), Pe = Object.prototype.hasOwnProperty.call(D, "scene");
    return Q && A(D.backgroundSource, D.backgroundRevision ?? ""), ee && we(D.paintSource, D.paintRevision ?? ""), de && Ce(D.maskSource, D.maskRevision ?? ""), ne && (mt(D.textures || []), F.textures = D.textures || []), Pe && (F.scene = D.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "objectPass") && (F.objectPass = D.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "backgroundOpacity") && (F.backgroundOpacity = Number(D.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(D, "showMaskTint") && (F.showMaskTint = D.showMaskTint === !0), Object.prototype.hasOwnProperty.call(D, "coverageDeg") && (F.coverageDeg = Number(D.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function j(D = {}) {
    return !oe() || (Y(D.width, D.height, D.dpr || 1), !et()) || !R(D) ? null : (y && je(D.view, {
      ...D,
      backgroundOpacity: Number(D.backgroundOpacity ?? F.backgroundOpacity ?? 1),
      coverageDeg: Number(D.coverageDeg || F.coverageDeg || 360) === 180 ? 180 : 360
    }), An(
      F.objectPass || { objects: [] },
      D.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function te(D = {}) {
    return R(D);
  }
  function _e(D, Q, ee) {
    const de = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || b.sourceWidth || b.width || 1)), ne = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || b.sourceHeight || b.height || 1)), Pe = Number(Q), ve = Number(ee);
    if (!Number.isFinite(Pe) || !Number.isFinite(ve)) return null;
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return { u: (Pe / de % 1 + 1) % 1, v: wt(ve / ne, 0, 1) };
    const Ie = Ua(D, de, ne);
    if (!Ie) return null;
    const d = Ln(Ie.yawDeg, Ie.pitchDeg, Ie.rollDeg), Oe = (Pe - de * 0.5) / (de * 0.5) * Math.tan(wt(Ie.hFovDeg, 1, 179) * jt * 0.5), Le = (ne * 0.5 - ve) / (ne * 0.5) * Math.tan(wt(Ie.vFovDeg, 0.1, 179) * jt * 0.5), Ge = b1(Bd(Bd(Kd(d.right, Oe), Kd(d.up, Le)), d.fwd));
    return {
      u: (Math.atan2(Ge.x, Ge.z) / am + 0.5 + 1) % 1,
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
    const Pe = Ua(D, de, ne);
    if (!Pe)
      return { x: de * 0.5, y: ne * 0.5, visible: !1 };
    const ve = Ln(Pe.yawDeg, Pe.pitchDeg, Pe.rollDeg), Ie = y1(Q, ee), d = iu(Ie, ve.right), Oe = iu(Ie, ve.up), Le = iu(Ie, ve.fwd);
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
function qd(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function k1() {
  const e = /* @__PURE__ */ new Map();
  function t(c) {
    return c != null ? String(c) : "default";
  }
  function n(c, f, h) {
    const g = t(c);
    let y = e.get(g) || null;
    if (!y) {
      const M = document.createElement("canvas"), b = M.getContext("2d");
      if (!b) return null;
      y = {
        id: g,
        canvas: M,
        ctx: b,
        width: 0,
        height: 0
      }, e.set(g, y);
    }
    const x = qd(f), S = qd(h);
    return y.width !== x && (y.canvas.width = x, y.width = x), y.height !== S && (y.canvas.height = S, y.height = S), y;
  }
  function r(c) {
    return e.get(t(c)) || null;
  }
  function a(c) {
    const f = r(c);
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
const N1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), M1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function sm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function P1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function A1(e = {}) {
  const t = M1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? sm(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function C1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!N1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? sm(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: P1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function I1(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => C1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const o = Number((r == null ? void 0 : r.zIndex) || 0), c = Number((a == null ? void 0 : a.zIndex) || 0);
      return o - c;
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function ka(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: A1((e == null ? void 0 : e.background) || {}),
    objectPass: I1((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function T1(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function wc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? T1(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function E1(e, t, n = {}) {
  return e ? wc({
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
function D1(e, t, n = {}) {
  return e ? wc({
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
function O1(e, t, n = {}) {
  return e ? wc({
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
function lm(e = {}) {
  const t = [], n = E1(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = D1(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((o, c) => {
    const f = O1(
      (o == null ? void 0 : o.source) || null,
      (o == null ? void 0 : o.revision) || "",
      {
        id: String((o == null ? void 0 : o.id) || `raster_layer_${c}`),
        zIndex: Number((o == null ? void 0 : o.zIndex) ?? (o == null ? void 0 : o.z_index) ?? 90),
        opacity: Number((o == null ? void 0 : o.opacity) ?? 1),
        visible: (o == null ? void 0 : o.visible) !== !1,
        transform: (o == null ? void 0 : o.transform) || null,
        params: (o == null ? void 0 : o.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((o, c) => {
    const f = Number((o == null ? void 0 : o.zIndex) || 0), h = Number((c == null ? void 0 : c.zIndex) || 0);
    return f !== h ? f - h : String((o == null ? void 0 : o.id) || "").localeCompare(String((c == null ? void 0 : c.id) || ""));
  });
}
function kc(e, t) {
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
function um(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, o = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], c = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return ka({
    stateRevision: r,
    background: {
      type: "erp_image",
      source: t,
      revision: c,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: kc(a, o)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Ja(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = kc(t, n), a = lm({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return ka({
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
function F1(e = {}) {
  var o, c, f, h, g, y, x, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const M = ka(e), b = Array.isArray((o = M.objectPass) == null ? void 0 : o.objects) ? M.objectPass.objects : [], O = {
      stickers: b.filter(($) => $.type === "sticker").map(($) => {
        var T, F, B, U, le, oe, I, Y, ie, J, he, fe, ke;
        return {
          id: $.id,
          assetId: String(((T = $ == null ? void 0 : $.params) == null ? void 0 : T.assetId) || ((F = $ == null ? void 0 : $.params) == null ? void 0 : F.asset_id) || ($ == null ? void 0 : $.id) || ""),
          yawDeg: Number(((B = $ == null ? void 0 : $.transform) == null ? void 0 : B.yawDeg) ?? ((U = $ == null ? void 0 : $.params) == null ? void 0 : U.yawDeg) ?? 0),
          pitchDeg: Number(((le = $ == null ? void 0 : $.transform) == null ? void 0 : le.pitchDeg) ?? ((oe = $ == null ? void 0 : $.params) == null ? void 0 : oe.pitchDeg) ?? 0),
          rollDeg: Number(((I = $ == null ? void 0 : $.transform) == null ? void 0 : I.rollDeg) ?? ((Y = $ == null ? void 0 : $.params) == null ? void 0 : Y.rollDeg) ?? 0),
          hFovDeg: Number(((ie = $ == null ? void 0 : $.transform) == null ? void 0 : ie.hFovDeg) ?? ((J = $ == null ? void 0 : $.params) == null ? void 0 : J.hFovDeg) ?? 30),
          vFovDeg: Number(((he = $ == null ? void 0 : $.transform) == null ? void 0 : he.vFovDeg) ?? ((fe = $ == null ? void 0 : $.params) == null ? void 0 : fe.vFovDeg) ?? 30),
          crop: ((ke = $ == null ? void 0 : $.params) == null ? void 0 : ke.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number(($ == null ? void 0 : $.opacity) ?? 1),
          visible: ($ == null ? void 0 : $.visible) !== !1,
          zIndex: Number(($ == null ? void 0 : $.zIndex) ?? 0)
        };
      }),
      selectedId: ((c = M.objectPass) == null ? void 0 : c.selectedId) ?? null,
      hoveredId: ((f = M.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, z = b.filter(($) => $.type === "sticker").map(($) => {
      var T, F;
      return {
        assetId: String(((T = $ == null ? void 0 : $.params) == null ? void 0 : T.assetId) || ((F = $ == null ? void 0 : $.params) == null ? void 0 : F.asset_id) || ($ == null ? void 0 : $.id) || ""),
        source: $.source || null,
        revision: String(($ == null ? void 0 : $.revision) || "")
      };
    }).filter(($) => $.assetId && $.source), L = b.find(($) => $.type === "paint") || null, P = b.find(($) => $.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((h = M.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((y = M.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (L == null ? void 0 : L.source) || null,
      paintRevision: String((L == null ? void 0 : L.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: z,
      scene: O,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((x = M.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = ka({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...kc(t, n),
        ...lm({
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
function R1(e) {
  let t = null;
  function n(o = {}) {
    const c = F1(o);
    return e.syncState({
      stateRevision: c.stateRevision,
      backgroundSource: c.backgroundSource,
      backgroundRevision: c.backgroundRevision,
      coverageDeg: c.coverageDeg,
      paintSource: c.paintSource,
      paintRevision: c.paintRevision,
      maskSource: c.maskSource,
      maskRevision: c.maskRevision,
      textures: c.textures,
      scene: c.scene,
      objectPass: c.objectPass,
      backgroundOpacity: c.backgroundOpacity,
      showMaskTint: c.showMaskTint
    }) ? (t = c, !0) : !1;
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
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (z) => w1(z), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => k1(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (z) => R1(z), a = t(e), o = (e == null ? void 0 : e.targetCanvas) || null, c = n();
  let f = null;
  const h = r({
    syncState(z = {}) {
      if (typeof a.syncState == "function") {
        const L = { ...z }, P = a.syncState(L);
        return P && (f = L, P);
      }
      return f = { ...z }, !0;
    }
  });
  function g(z = {}) {
    return h.sync(z);
  }
  function y(z = {}, L = {}) {
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
  function x(z, L, P = {}, $ = {}) {
    if (!L) return !1;
    const T = Math.min(1, Math.max(0.1, Number($.renderScale ?? 1))), F = y(P, {
      ...$,
      width: Math.max(1, Math.round(L.w * T)),
      height: Math.max(1, Math.round(L.h * T))
    });
    return F ? z ? (z.canvas && F === z.canvas || z.drawImage(F, L.x, L.y, L.w, L.h), !0) : !!o && F === o : !1;
  }
  function S(z, L = {}, P = {}) {
    const $ = Number(P.width || 0), T = Number(P.height || 0);
    if (!($ > 0) || !(T > 0)) return null;
    const F = c.ensureTarget(z, $, T);
    if (!F) return null;
    const B = y(L, {
      ...P,
      width: $,
      height: T
    });
    return B ? (F.ctx.clearRect(0, 0, F.canvas.width, F.canvas.height), F.ctx.drawImage(B, 0, 0, F.canvas.width, F.canvas.height), F.canvas) : null;
  }
  function M(z) {
    c.clearTarget(z);
  }
  function b() {
    var z;
    c.dispose(), (z = a.dispose) == null || z.call(a), f = null;
  }
  function O() {
    f = null, h.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: g,
    renderView: y,
    renderToContext: x,
    renderToTarget: S,
    clearTarget: M,
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
function L1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Xd(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const o = n.getImageData(0, 0, r, a).data;
  let c = r, f = a, h = -1, g = -1;
  for (let x = 0; x < a; x += 1)
    for (let S = 0; S < r; S += 1)
      o[(x * r + S) * 4 + 3] <= t || (S < c && (c = S), x < f && (f = x), S > h && (h = S), x > g && (g = x));
  return h < c || g < f ? null : {
    minX: c,
    minY: f,
    maxX: h,
    maxY: g,
    width: h - c + 1,
    height: g - f + 1,
    aspect: Number(((h - c + 1) / Math.max(1, g - f + 1)).toFixed(4))
  };
}
function Nc(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function jr(e, t, n) {
  if (!e) return sa(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function It(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let su = null, lu = null, Jd = null, Zd = null, Ft = null, Ga = null, kn = null, ii = null;
function $1() {
  if (lu) return lu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), lu = n, n;
}
function uu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  su = jr(su, n, r);
  const a = su;
  It(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Zd !== a.ctx && (Jd = a.ctx.createPattern($1(), "repeat"), Zd = a.ctx), a.ctx.fillStyle = Jd, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function z1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function V1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function j1(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function H1(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Tt = /* @__PURE__ */ new Map(), Mc = 128;
function U1(e, t, n, r, a, o) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), h = `${c}:${f.toFixed(2)}:${n}:${r}:${a}:${o.toFixed(3)}`;
  if (Tt.has(h)) {
    const P = Tt.get(h);
    return Tt.delete(h), Tt.set(h, P), P;
  }
  Tt.size >= Mc && Tt.delete(Tt.keys().next().value);
  const g = c * 2 + 2, y = c + 1, x = Nc(g, g), S = x.getContext("2d"), M = f * c, b = c + 1, O = `rgba(${n},${r},${a},${o})`, z = `rgba(${n},${r},${a},0)`, L = S.createRadialGradient(y, y, M, y, y, b);
  return L.addColorStop(0, O), L.addColorStop(1, z), S.fillStyle = L, S.fillRect(0, 0, g, g), Tt.set(h, x), x;
}
function G1(e, t, n, r, a, o, c) {
  const { r: f, g: h, b: g, a: y } = r, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, a), b = Math.max(0, Math.min(0.99, o)), O = Math.max(0, Math.min(1, c ?? 0)), z = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${h}:${g}:${y.toFixed(3)}:${M.toFixed(2)}:${b.toFixed(2)}:${O.toFixed(2)}`;
  if (Tt.has(z)) {
    const le = Tt.get(z);
    return Tt.delete(z), Tt.set(z, le), le;
  }
  Tt.size >= Mc && Tt.delete(Tt.keys().next().value);
  const L = Nc(x, S), P = L.getContext("2d"), $ = P.createImageData(x, S), T = $.data, F = Math.max(0, e - t), B = Math.max(0, Math.min(1, n)), U = 1 + M;
  for (let le = 0; le < S; le++)
    for (let oe = 0; oe < x; oe++) {
      const I = oe + 0.5 - e, Y = le + 0.5 - t, ie = Math.max(Math.abs(I) - F, 0), he = Math.hypot(ie, Y) / t;
      if (he >= 1) continue;
      const fe = he <= B ? 1 : Math.max(0, (1 - he) / Math.max(1e-4, 1 - B)), ke = 1 - he, A = 1 + M * (1 - ke) * (1 - ke), we = 1 - b * ke * ke, Ce = A * we / U;
      let Me = 1;
      if (O > 0) {
        const mt = Math.floor((Y + t) / 1.5), et = Math.floor((I + e) / 8), We = Pi(ma(mt * 41 + 500, et * 19 + 300));
        Me = 1 - O * 0.42 * We;
      }
      const G = Math.round(255 * Math.min(1, y * fe * Ce * Me));
      if (G <= 0) continue;
      const Ve = (le * x + oe) * 4;
      T[Ve] = f, T[Ve + 1] = h, T[Ve + 2] = g, T[Ve + 3] = G;
    }
  return P.putImageData($, 0, 0), Tt.set(z, L), L;
}
function ma(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Pi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function B1(e, t, n, r, a, o, c) {
  const f = e + 0.5 - n, h = t + 0.5 - r, g = Math.max(0, n - r), y = Math.max(Math.abs(f) - g, 0), x = Math.hypot(y, h) / r;
  if (x >= 1) return 0;
  const S = Pi(ma(e * 17 + 3, t * 13 + 7)), M = x + o * 0.22 * (S - 0.5);
  if (M >= 1) return 0;
  const b = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), O = K1(e, t, f, h, n, r), z = o * 0.55;
  if (O < z) return 0;
  const P = 0.45 + 0.55 * ((O - z) / Math.max(1e-4, 1 - z));
  return Math.round(255 * Math.min(1, c * b * P));
}
function K1(e, t, n, r, a, o) {
  const c = Math.floor((n + a) / 3), f = Math.floor((r + o) / 2), h = Pi(ma(c * 13 + 700, f * 17 + 400)), g = Math.floor((n + a) / 1.5), y = Math.floor((r + o) / 1.5), x = Pi(ma(g * 23 + 800, y * 29 + 500)), S = Pi(ma(e * 3 + 100, t * 5 + 200));
  return h * 0.55 + x * 0.3 + S * 0.15;
}
function W1(e, t, n, r, a) {
  const { r: o, g: c, b: f, a: h } = r, g = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), S = `crayon:${g}:${y}:${n.toFixed(2)}:${o}:${c}:${f}:${h.toFixed(3)}:${x.toFixed(2)}`;
  if (Tt.has(S)) {
    const P = Tt.get(S);
    return Tt.delete(S), Tt.set(S, P), P;
  }
  Tt.size >= Mc && Tt.delete(Tt.keys().next().value);
  const M = Nc(g, y), b = M.getContext("2d"), O = b.createImageData(g, y), z = O.data, L = Math.max(0, Math.min(1, n));
  for (let P = 0; P < y; P++)
    for (let $ = 0; $ < g; $++) {
      const T = B1($, P, e, t, L, x, h);
      if (T <= 0) continue;
      const F = (P * g + $) * 4;
      z[F] = o, z[F + 1] = c, z[F + 2] = f, z[F + 3] = T;
    }
  return b.putImageData(O, 0, 0), Tt.set(S, M), M;
}
function cm(e, t, n) {
  var O, z;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = j1(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = Y1(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), h = Number(((O = t == null ? void 0 : t.angle) == null ? void 0 : O.value) ?? 0), g = H1(t, a), y = String(((z = t == null ? void 0 : t.targetSpace) == null ? void 0 : z.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", S = t == null ? void 0 : t.scatter, M = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let b;
  if (r === "chisel") {
    const L = a * f, P = a, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    b = G1(L, P, o, c, $, T, F);
  } else if (r === "crayon") {
    const L = a * f, P = a, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    b = W1(L, P, o, c, $);
  } else
    b = U1(a, o, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: b, radiusPx: a, spacingPx: g, desc: n, aspect: f, angle: h, stampKind: r, scatter: M, latitudeCorrection: x };
}
function Y1(e) {
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
function q1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function Qd(e, t, n, r, a) {
  const o = e.angle, c = e.desc.width;
  function f(g, y) {
    o === 0 ? e.ctx.drawImage(e.stampTex, g - a, y - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(g, y), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const h = o === 0 ? a : a * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - h < 0 && f(t + c, n), t + h > c && f(t - c, n);
}
function Pc(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: g, count: y } = e.scatter, x = g * e.radiusPx * a, S = ma(t, n);
    for (let M = 0; M < y; M++) {
      const b = Pi(S + M * 2) * Math.PI * 2, O = Math.sqrt(Pi(S + M * 2 + 1)) * x, z = t + Math.cos(b) * O, L = n + Math.sin(b) * O, P = Math.max(0.5, e.radiusPx * a * 0.48), $ = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, F = P * e.aspect * T;
      Qd(e, z, L, P, F);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * a), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, h = o * e.aspect * f;
  Qd(e, t, n, o, h);
}
function eh(e, t, n) {
  const r = V1(t);
  if (!e || r.length === 0) return;
  const a = n.width, o = n.height, c = cm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let M = Number(r[S].u || 0) * a;
    const b = Number(r[S].v || 0) * o;
    S > 0 && Math.abs(M - f[S - 1].x) > a * 0.5 && (M += M < f[S - 1].x ? a : -a), f.push({ x: M, y: b });
  }
  if (Pc(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let h = f[0], g = f[0], y = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const M = f[S], b = { x: (g.x + M.x) * 0.5, y: (g.y + M.y) * 0.5 };
    S === 1 ? x = mo(c, y.x, y.y, b.x, b.y, x) : x = Fs(c, h, y, b, M, x), h = g, g = M, y = b;
  }
  f.length === 2 ? mo(c, y.x, y.y, g.x, g.y, x) : Fs(c, h, y, g, g, x), e.restore();
}
function ys(e, t, n) {
  var x;
  const r = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, o = n.height, c = q1(t), f = [];
  let h = 1 / 0, g = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const M = z1(r[S]);
    let b = Number(M.x || 0) * a;
    S > 0 && Math.abs(b - f[S - 1].x) > a * 0.5 && (b += b < f[S - 1].x ? a : -a), f.push({ x: b, y: Number(M.y || 0) * o }), b < h && (h = b), b > g && (g = b);
  }
  function y(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + S, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, y(0), h < 0 && y(a), g > a && y(-a), e.restore();
}
function Xo(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    ys(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? eh(e, t, n) : (Ga = jr(Ga, n.width, n.height), It(Ga), eh(Ga.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Ga.canvas, 0, 0), e.restore());
}
function yi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function mo(e, t, n, r, a, o) {
  const c = r - t, f = a - n, h = Math.hypot(c, f);
  if (h < 1e-9) return o;
  let g = e.spacingPx - o;
  for (; g <= h; ) {
    const y = g / h;
    Pc(e, t + c * y, n + f * y, 1), g += e.spacingPx;
  }
  return h - g + e.spacingPx;
}
function Fs(e, t, n, r, a, o) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, h = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, g = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, y = 0, x = f, S = x + h, M = S + g, b = S - x, O = 16;
  let z = o, L = n.x, P = n.y;
  for (let $ = 1; $ <= O; $++) {
    const T = x + b * $ / O, F = ((x - T) * t.x + (T - y) * n.x) / (x - y), B = ((x - T) * t.y + (T - y) * n.y) / (x - y), U = ((S - T) * n.x + (T - x) * r.x) / (S - x), le = ((S - T) * n.y + (T - x) * r.y) / (S - x), oe = ((M - T) * r.x + (T - S) * a.x) / (M - S), I = ((M - T) * r.y + (T - S) * a.y) / (M - S), Y = ((S - T) * F + (T - y) * U) / (S - y), ie = ((S - T) * B + (T - y) * le) / (S - y), J = ((M - T) * U + (T - x) * oe) / (M - x), he = ((M - T) * le + (T - x) * I) / (M - x), fe = ((S - T) * Y + (T - x) * J) / (S - x), ke = ((S - T) * ie + (T - x) * he) / (S - x);
    z = mo(e, L, P, fe, ke, z), L = fe, P = ke;
  }
  return z;
}
function X1(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const o = e.descriptor, c = o.width, f = n * o.height, h = e.activeStroke;
  let g = t * c;
  if (h && Math.abs(g - h.prev.x) > c * 0.5 && (g += g < h.prev.x ? c : -c), !h) {
    const M = cm(a, r, o), b = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), O = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), z = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Pc(M, g, f, 1), e.activeStroke = {
      pprev: { x: g, y: f },
      prev: { x: g, y: f },
      lastMidX: g,
      lastMidY: f,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: b,
      velocityWidthFactor: O,
      distSinceStamp: 0,
      isEraser: z,
      layerKind: L,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (h.prev.x + g) * 0.5, x = (h.prev.y + f) * 0.5;
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
  h.pointCount === 1 ? h.distSinceStamp = mo(S, h.lastMidX, h.lastMidY, y, x, h.distSinceStamp) : h.distSinceStamp = Fs(
    S,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: y, y: x },
    { x: g, y: f },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: g, y: f }, h.lastMidX = y, h.lastMidY = x, h.pointCount++, e.displayDirty = !0;
}
function Ou(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), o = sa(t, n), c = {
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
  let g = null, y = "", x = null;
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
  function M(I) {
    let Y = a.get(I);
    return Y || (Y = S(I), a.set(I, Y)), Y;
  }
  function b(I) {
    return y === "mask" ? c : g ? M(g) : f;
  }
  function O(I) {
    var ke;
    const Y = !x || x.length !== I.length || I.some((A, we) => A !== x[we]), ie = y === "paint" && ((ke = g ? a.get(g) : f) == null ? void 0 : ke.activeStroke) || null;
    let J = c.displayDirty || f.displayDirty || Y;
    for (const A of I) {
      const we = a.get(A);
      if (we != null && we.displayDirty) {
        J = !0;
        break;
      }
    }
    if (ie && (J = !0), !J) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const A of I) {
      const we = a.get(A);
      we && (we.displayDirty = !1);
    }
    x = [...I];
    const he = h.ctx;
    It(h);
    const fe = !!(ie != null && ie.isEraser);
    for (const A of I) {
      const we = a.get(A);
      if (!we) continue;
      const Me = g === we.actionGroupId && y === "paint" ? we.activeStroke : null;
      if (fe)
        Ft = jr(Ft, t, n), It(Ft), Ft.ctx.drawImage(we.committedPaint.canvas, 0, 0), yi(Ft.ctx, o.canvas), he.drawImage(Ft.canvas, 0, 0);
      else if (he.drawImage(we.committedPaint.canvas, 0, 0), Me) {
        const G = we.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Me.strokeOpacity ?? 1));
        he.save(), he.globalAlpha = G, he.drawImage(o.canvas, 0, 0), he.restore();
      }
    }
  }
  function z(I) {
    var ie, J, he, fe, ke;
    for (const A of a.values())
      It(A.committedPaint), It(A.currentStroke), A.activeStroke = null, A.displayDirty = !0;
    It(c.committedMask), It(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, x = null;
    const Y = [
      ...Array.isArray((J = (ie = I == null ? void 0 : I.painting) == null ? void 0 : ie.paint) == null ? void 0 : J.strokes) ? I.painting.paint.strokes : [],
      ...Array.isArray((fe = (he = I == null ? void 0 : I.painting) == null ? void 0 : he.mask) == null ? void 0 : fe.strokes) ? I.painting.mask.strokes : []
    ];
    for (const A of Y) {
      if (((ke = A == null ? void 0 : A.targetSpace) == null ? void 0 : ke.kind) !== "ERP_GLOBAL") continue;
      const we = String((A == null ? void 0 : A.layerKind) || "paint"), Me = String((A == null ? void 0 : A.toolKind) || "pen") === "eraser";
      if (we === "mask") {
        const G = c.descriptor;
        Me ? (Ft = jr(Ft, G.width, G.height), It(Ft), Xo(Ft.ctx, A, G), yi(c.committedMask.ctx, Ft.canvas)) : Xo(c.committedMask.ctx, A, G);
        continue;
      }
      if (Me) {
        Ft = jr(Ft, r.width, r.height), It(Ft), Xo(Ft.ctx, A, r);
        for (const G of a.values())
          yi(G.committedPaint.ctx, Ft.canvas), G.displayDirty = !0;
      } else {
        const G = String((A == null ? void 0 : A.actionGroupId) || "__default__"), Ve = M(G), mt = Ve.descriptor;
        Xo(Ve.committedPaint.ctx, A, mt), Ve.displayDirty = !0;
      }
    }
    O([...a.keys()]);
  }
  function L(I, Y) {
    y = String((I == null ? void 0 : I.layerKind) || "");
    const ie = String((I == null ? void 0 : I.toolKind) || "") === "eraser";
    if (y === "mask")
      g = null, It(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const J = ie ? f : M(String((I == null ? void 0 : I.actionGroupId) || "__default__"));
      g = ie ? "" : String((I == null ? void 0 : I.actionGroupId) || "__default__"), It(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    }
  }
  function P(I, Y) {
    var we;
    const ie = String((I == null ? void 0 : I.layerKind) || "paint"), J = String((I == null ? void 0 : I.toolKind) || "") === "eraser", he = ie === "mask" ? c : J ? f : M(String((I == null ? void 0 : I.actionGroupId) || g || "__default__")), fe = he.activeStroke, ke = he.descriptor;
    if (fe && fe.pointCount > 1) {
      const Ce = he.currentStroke.ctx;
      Ce.globalCompositeOperation = "source-over";
      const Me = {
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
      fe.pointCount === 2 ? mo(Me, fe.lastMidX, fe.lastMidY, fe.prev.x, fe.prev.y, fe.distSinceStamp) : Fs(Me, fe.pprev, { x: fe.lastMidX, y: fe.lastMidY }, fe.prev, fe.prev, fe.distSinceStamp);
    }
    he.lassoPreviewActive && (It(he.currentStroke), ys(he.currentStroke.ctx, I, ke), he.lassoPreviewActive = !1);
    const A = ie === "mask" ? c.committedMask : he.committedPaint;
    if (J && ie === "paint")
      for (const Ce of a.values())
        yi(Ce.committedPaint.ctx, he.currentStroke.canvas), Ce.displayDirty = !0;
    else if (J)
      yi(A.ctx, he.currentStroke.canvas);
    else {
      const Ce = Math.max(0, Math.min(1, (fe == null ? void 0 : fe.strokeOpacity) ?? 1));
      A.ctx.save(), A.ctx.globalAlpha = Ce, A.ctx.drawImage(he.currentStroke.canvas, 0, 0), A.ctx.restore();
    }
    L1() && (String((I == null ? void 0 : I.toolKind) || ""), String((ke == null ? void 0 : ke.kind) || ""), Number((ke == null ? void 0 : ke.width) || 0), Number((ke == null ? void 0 : ke.height) || 0), String(((we = I == null ? void 0 : I.targetSpace) == null ? void 0 : we.viewMode) || ""), Number((I == null ? void 0 : I.aspect) ?? 1), Xd(he.currentStroke.canvas), Xd(A.canvas), void 0), It(he.currentStroke), he.activeStroke = null, he.displayDirty = !0, g = null, y = "", O([...a.keys()]);
  }
  function $(I) {
    if (y === "mask")
      It(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (y === "paint" && !g)
      It(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (g) {
      const Y = a.get(g);
      Y && (It(Y.currentStroke), Y.activeStroke = null, Y.lassoPreviewActive = !1, Y.displayDirty = !0);
    }
    g = null, y = "", O([...a.keys()]);
  }
  function T(I, Y) {
    var J;
    if (y = String((I == null ? void 0 : I.layerKind) || ""), String(((J = I == null ? void 0 : I.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        It(c.currentStroke), ys(c.currentStroke.ctx, I, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const he = String((I == null ? void 0 : I.toolKind) || "") === "eraser", fe = he ? f : M(String((I == null ? void 0 : I.actionGroupId) || g || "__default__"));
        g = he ? "" : String((I == null ? void 0 : I.actionGroupId) || g || "__default__"), It(fe.currentStroke), ys(fe.currentStroke.ctx, I, fe.descriptor), fe.lassoPreviewActive = !0, fe.displayDirty = !0;
      }
      O([...a.keys()]);
    }
  }
  function F(I) {
    return O(I ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function B(I) {
    return a.get(String(I)) ?? null;
  }
  function U() {
    return [...a.keys()];
  }
  function le(I) {
    var ke;
    const Y = a.get(String(I));
    if (!Y) return null;
    const ie = y === "paint" && g === Y.actionGroupId, J = y === "paint" && ((ke = g ? a.get(g) : f) == null ? void 0 : ke.activeStroke) || null;
    if (J != null && J.isEraser)
      return kn = jr(kn, t, n), It(kn), kn.ctx.drawImage(Y.committedPaint.canvas, 0, 0), yi(kn.ctx, o.canvas), kn.canvas;
    const he = ie ? Y.activeStroke : null;
    if (!he) return Y.committedPaint.canvas;
    kn = jr(kn, t, n), It(kn), kn.ctx.drawImage(Y.committedPaint.canvas, 0, 0);
    const fe = Y.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, he.strokeOpacity ?? 1));
    return kn.ctx.save(), kn.ctx.globalAlpha = fe, kn.ctx.drawImage(o.canvas, 0, 0), kn.ctx.restore(), kn.canvas;
  }
  function oe() {
    return ii = jr(ii, t, n), It(ii), uu(ii.ctx, c.committedMask.canvas), y === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Ft = jr(Ft, t, n), It(Ft), Ft.ctx.drawImage(c.committedMask.canvas, 0, 0), yi(Ft.ctx, o.canvas), It(ii), uu(ii.ctx, Ft.canvas)) : uu(ii.ctx, o.canvas)), ii.canvas;
  }
  return {
    rebuildCommitted: z,
    beginStroke: L,
    appendStrokePoint: X1,
    updateActiveStroke: T,
    commitActiveStroke: P,
    cancelActiveStroke: $,
    getErpTarget: F,
    ensureTarget: b,
    getGroupTarget: B,
    getGroupDisplayCanvas: le,
    getMaskDisplayCanvas: oe,
    getAllGroupIds: U
  };
}
const Fu = 3;
function Ba(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ac(e, t = 0) {
  const n = Ba(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ba(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const a = Ba(e == null ? void 0 : e.wheelDelta);
  if (a != null) return Math.sign(-a);
  const o = Ba(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Ba(t) || 0);
}
function fm(e) {
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
const th = Math.PI / 180, nh = 0.12, J1 = Fu, Z1 = 35, Q1 = 140, Za = 100, e_ = 20, rh = 0.8;
function t_(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), o = W(Number(e || Za), 1, 179) * th;
  return 2 * Math.atan(Math.tan(o * 0.5) * (a / r)) / th;
}
function Cc(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Za })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, h = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function g(P, $ = null) {
    f && f(P, $);
  }
  function y(P, $, T = null, F = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(P || 0), h.drag.lastY = Number($ || 0), h.drag.lastTs = Number(F || performance.now()), h.drag.pointerId = T, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], g("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: T }), !0;
  }
  function x(P, $, T = "pano", F = performance.now()) {
    if (!h.drag.active) return !1;
    const B = Number(F || performance.now()), U = Number(P), le = Number($), oe = U - h.drag.lastX, I = le - h.drag.lastY;
    h.drag.lastX = U, h.drag.lastY = le, h.drag.lastTs = B;
    const Y = r() || { x: 1, y: 1 }, ie = Number(Y.x || 1), J = Number(Y.y || 1), he = { ...t() };
    let fe = 0, ke = 0;
    if (T === "unwrap") {
      const we = a() || { w: 1, h: 1 }, Ce = Math.max(1, Number(we.w || 1)), Me = Math.max(1, Number(we.h || 1)), G = oe / Ce, Ve = I / Me;
      fe = -G * 360 * ie, ke = Ve * 180 * J;
    } else {
      const we = o() || { w: 0, h: 0 }, Ce = Math.max(1, Number(we.w || 0)), Me = Math.max(1, Number(we.h || 0));
      if (Ce > 1 && Me > 1) {
        const G = W(Number(he.fov || Za), 1, 179), Ve = W(t_(G, Ce, Me), 0.1, 179);
        fe = -(oe / Ce) * G * ie, ke = I / Me * Ve * J;
      } else
        fe = -oe * nh * ie, ke = I * nh * J;
    }
    he.yaw = Ht(Number(he.yaw || 0) + fe), he.pitch = W(Number(he.pitch || 0) + ke, -89.9, 89.9), n(he), h.velHistory.push({ ts: B, yaw: he.yaw, pitch: he.pitch });
    let A = 0;
    for (; A < h.velHistory.length - 1 && h.velHistory[A].ts < B - 100; ) A++;
    return A > 0 && h.velHistory.splice(0, A), h.inertia.active = !1, h.inertia.lastTs = B, c(), g("drag", { phase: "move", dx: oe, dy: I, dYaw: fe, dPitch: ke }), !0;
  }
  function S(P = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const $ = Number(P || performance.now());
    h.drag.lastTs = $;
    const T = h.velHistory.filter((B) => $ - B.ts <= 80);
    if (T.length >= 2) {
      const B = T[0], U = T.at(-1), le = Math.max(1e-3, (U.ts - B.ts) / 1e3);
      let oe = U.yaw - B.yaw;
      oe > 180 && (oe -= 360), oe < -180 && (oe += 360), h.inertia.vx = oe / le, h.inertia.vy = (U.pitch - B.pitch) / le;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const F = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = F > e_, h.inertia.lastTs = $, g("drag", { phase: "end", speed: F, inertiaActive: h.inertia.active }), !0;
  }
  function M(P = performance.now()) {
    if (!h.inertia.active) return !1;
    const $ = Number(P || performance.now()), T = Math.max(1e-3, ($ - (h.inertia.lastTs || $)) / 1e3);
    h.inertia.lastTs = $;
    const F = { ...t() };
    F.yaw = Ht(Number(F.yaw || 0) + h.inertia.vx * T), F.pitch = W(Number(F.pitch || 0) + h.inertia.vy * T, -89.9, 89.9);
    const B = Math.exp(-5.5 * T);
    return h.inertia.vx *= B, h.inertia.vy *= B, Math.abs(h.inertia.vx) < rh && Math.abs(h.inertia.vy) < rh && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(F), c(), h.inertia.active;
  }
  function b() {
    const P = h.drag.active || h.inertia.active || h.inertia.vx !== 0 || h.inertia.vy !== 0;
    return h.drag.active = !1, h.drag.pointerId = null, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.velHistory = [], P;
  }
  function O(P) {
    const $ = Math.sign(Number(P || 0));
    if (!$) return !1;
    const T = { ...t() }, F = Number(T.fov || Za);
    return T.fov = W(F + $ * J1, Z1, Q1), n(T), c(), g("wheel", { deltaSign: $, fovBefore: F, fovAfter: T.fov }), !0;
  }
  function z(P, $ = 0) {
    return O(Ac(P, $));
  }
  function L() {
    n({ yaw: 0, pitch: 0, fov: Za }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, c();
  }
  return {
    state: h,
    startDrag: y,
    moveDrag: x,
    endDrag: S,
    stepInertia: M,
    stopMotion: b,
    applyWheel: O,
    applyWheelEvent: z,
    resetView: L
  };
}
function Rs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const Cr = 1, Ir = 179, Ru = 85;
function al(e) {
  const t = ((Je(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function dm(e, t) {
  let n = Je(e, 0) - Je(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function hm(e, t, { shiftKey: n = !1 } = {}) {
  let r = Je(e, 0) + Je(t, 0) * Ar;
  return n && (r = Math.round(r / 15) * 15), al(r);
}
function Je(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Di(e = {}) {
  const t = W(Je(e.hFOV_deg || 90, 90), Cr, Ir), n = W(Je(e.vFOV_deg || 60, 60), Cr, Ir), r = Math.tan(t * Gt * 0.5), a = Math.tan(n * Gt * 0.5);
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
function Ic(e, t) {
  const n = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, Je(t, 1)), o = Math.min(n, r * a);
  return { width: o, height: o / a };
}
function Tc(e, t) {
  const n = Math.max(1e-12, Je(t, 1)), r = Math.max(1e-6, Je((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, Je((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = W(2 * Math.atan(r / (2 * n)) * Ar, Cr, Ir), c = W(2 * Math.atan(a / (2 * n)) * Ar, Cr, Ir);
  return { hFOV_deg: o, vFOV_deg: c };
}
function n_(e, t, n) {
  const r = Je(e == null ? void 0 : e.x, 0), a = Je(e == null ? void 0 : e.y, 0), o = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Di(t), h = Math.max(1e-12, Je(n, 1)), g = 2 * h * f.tanHalfX, y = 2 * h * f.tanHalfY;
  return {
    x: r + (o - g) * 0.5,
    y: a + (c - y) * 0.5,
    w: g,
    h: y,
    focalPx: h
  };
}
function Lu(e, t, n = Ru) {
  const r = Math.max(1e-12, Je(t, 1)), a = W(Je(n, Ru), 1, 89.999), o = r * Math.tan(a * Gt), c = Math.max(1, Je((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Je((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, o),
    halfH: Math.min(f * 0.5, o)
  };
}
function pm(e, t, n) {
  const r = Math.max(1e-12, Je(t, 1));
  return {
    x: (Je(n == null ? void 0 : n.x, 0) - Je(e == null ? void 0 : e.x, 0)) / r,
    y: -(Je(n == null ? void 0 : n.y, 0) - Je(e == null ? void 0 : e.y, 0)) / r
  };
}
function vs(e, t) {
  const n = W(Je(e, 60), Cr, Ir), r = Math.max(1e-6, Je(t, 1));
  return W(
    2 * Math.atan(Math.tan(n * Gt * 0.5) * r) * Ar,
    Cr,
    Ir
  );
}
function ih(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function r_(e, t) {
  const n = ih(e, 1), r = ih(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, o = Math.max(1, Math.round(n * a)), c = Math.max(1, Math.round(r * a)), f = (g, y) => y ? f(y, g % y) : g, h = f(o, c) || 1;
  return `${Math.max(1, Math.round(o / h))}:${Math.max(1, Math.round(c / h))}`;
}
function Ci(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Gt, n = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Gt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function xi(e) {
  const t = Ci(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (r == null ? void 0 : r[0]) || r_(t, 1);
}
function mm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = xi(t), t;
}
function gm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: a = 100,
  frameFovDeg: o = null
} = {}) {
  const c = o == null || String(o).trim() === "" ? NaN : Number(o), f = Number.isFinite(c) ? W(c, Cr, Ir) : W(Math.min(42, Je(a, 100) * 0.42), 8, 96);
  return mm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Je(t, 0),
    pitch_deg: W(Je(n, 0), -89.9, 89.9),
    roll_deg: al(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Hr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : xi(e);
}
function bm(e, t) {
  const n = Di(e), r = Je(t, 1);
  if (!(r > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * r) * Ar, o = 2 * Math.atan(n.tanHalfY * r) * Ar;
  return a < Cr || a > Ir || o < Cr || o > Ir ? null : { hFOV_deg: a, vFOV_deg: o };
}
function ym(e, t, n = Fu) {
  const r = Math.sign(Je(t, 0)), a = Math.abs(Je(n, Fu));
  if (!r || !(a > 0)) return null;
  const o = Di(e), c = o.hFovDeg + r * a;
  if (c < Cr || c > Ir) return null;
  const f = Math.tan(c * Gt * 0.5);
  return bm(e, f / o.tanHalfX);
}
function vm(e, t) {
  const n = Di(e), r = Ln(n.yawDeg, n.pitchDeg, n.rollDeg), a = Je(t == null ? void 0 : t.x, 0), o = Je(t == null ? void 0 : t.y, 0);
  return Sc(Sa(Sa(r.fwd, wa(r.right, a)), wa(r.up, o)));
}
const Ec = 0.28;
function i_(e) {
  const t = e && typeof e == "object" ? e : {}, n = W(Number(t.x0 ?? 0), 0, 1), r = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), o = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, o),
    x1: Math.max(n, a),
    y1: Math.max(r, o)
  };
}
function a_(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), r = e.type === "external_image" || e.source_kind === "external_image", a = n || (r ? String(e.id || "").trim() : ""), o = t.includeHidden === !0, c = e.visible === !1, f = o && r && c;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: W(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: W(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: i_(e.crop),
    opacity: f ? Ec : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function ol(e, t = {}) {
  var o;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((c) => a_(c, { includeHidden: r })).filter((c) => c && (r || c.visible !== !1)).sort((c, f) => Number(c.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((o = e == null ? void 0 : e.active) == null ? void 0 : o.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function _m(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || ol(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, o = [], c = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var b;
    const h = String((f == null ? void 0 : f.assetId) || "").trim(), g = h || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!g || c.has(g)) return;
    const y = h ? a[h] : null, x = t(g, y, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const S = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), M = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || S <= 0 || M <= 0 || (c.add(g), o.push({
      assetId: g,
      source: x,
      revision: String(((b = n.revisionFor) == null ? void 0 : b.call(n, g, y, x)) ?? [
        g,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), o;
}
function go(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function o_(e, t = 360) {
  return go(e, t);
}
function Sr(e) {
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
function xm({
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
  let c = null, f = !1, h = !1;
  const g = () => c || e(), y = () => o(n(g()));
  return {
    model: () => n(g()),
    refresh() {
      return h ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return h || c ? !1 : (c = e(), f = !1, y(), !0);
    },
    updateGesture(x) {
      if (h) return !1;
      c || this.beginGesture();
      const S = t(c, x);
      return S.changed ? (c = S.state, f = !0, r(c), y(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && f;
    },
    commitGesture() {
      if (h || !c) return !1;
      const x = f;
      return x && a(c), c = null, f = !1, r(null), y(), x;
    },
    cancelGesture() {
      return h || !c ? !1 : (c = null, f = !1, r(null), y(), !0);
    },
    apply(x) {
      if (h) return !1;
      c && this.commitGesture();
      const S = t(e(), x);
      return S.changed ? (a(S.state), y(), !0) : !1;
    },
    destroy() {
      if (h) return;
      h = !0;
      const x = c != null;
      c = null, f = !1, x && r(null);
    }
  };
}
const Ls = Math.PI / 180, wr = 180 / Math.PI, s_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), l_ = 260;
function ah(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Sm(e, t) {
  return t ? Sm(t, e % t) : e;
}
function u_(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / o * a)), f = Math.max(1, Math.round(t / o * a)), h = Sm(c, f) || 1;
  return `${Math.round(c / h)}:${Math.round(f / h)}`;
}
function bo(e, t) {
  const n = ah(e), r = ah(t);
  if (n == null || r == null) return null;
  const a = n / r;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: r, ratio: a, label: u_(n, r) };
}
function Ii(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function wm(e) {
  const t = Ii(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Hr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Dc(e, t, n = s_) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), h = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), g = (z, L, P) => {
    const $ = z + L, T = Math.max(0, P - 1), F = $ > T && $ > 0 ? T / $ : 1;
    return [z * F, L * F];
  }, [y, x] = g(h, c, r), [S, M] = g(o, f, a), b = {
    x: y,
    y: S,
    w: Math.max(1, r - y - x),
    h: Math.max(1, a - S - M)
  }, O = Ic(b, t);
  return {
    x: b.x + (b.w - O.width) * 0.5,
    y: b.y + (b.h - O.height) * 0.5,
    w: O.width,
    h: O.height,
    safeRect: b
  };
}
function c_(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = Dc({ width: n, height: r }, 1), o = W(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(o * Ls * 0.5)), f = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, h = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, g = vm(h, pm(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), y = f_(g, Ln(
    h.yaw_deg,
    h.pitch_deg,
    h.roll_deg
  ).right), x = Tc({ width: a.w, height: a.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: x.hFOV_deg
  };
}
function km(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * wr),
    pitch: W(Math.asin(W(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * wr, -89.9, 89.9)
  };
}
function f_(e, t) {
  const n = km(e), r = Ln(n.yaw, n.pitch, 0), a = pa(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * a,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * a,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * a
  }, c = Math.hypot(o.x, o.y, o.z);
  if (!(c > 1e-8)) return { ...n, roll: 0 };
  const f = {
    x: o.x / c,
    y: o.y / c,
    z: o.z / c
  };
  return {
    ...n,
    roll: al(Math.atan2(
      pa(f, r.up),
      pa(f, r.right)
    ) * wr)
  };
}
function Nm(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = Dc({ width: n, height: r }, Ci(e)), o = Ai(a, e), c = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, f = vm(e, pm(
    c,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), h = km(f);
  return {
    yaw: h.yaw,
    pitch: h.pitch,
    fov: W(2 * Math.atan(n / (2 * o)) * wr, 1, 179)
  };
}
function d_(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Ai(t, n), h = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(c, a - c) * 2
  }, { halfW: g, halfH: y } = Lu(h, f), x = {
    x: o - g,
    y: c - y,
    w: g * 2,
    h: y * 2
  }, S = x.x <= 0 && x.y <= 0 && x.x + x.w >= r && x.y + x.h >= a, M = r / a, b = Math.tan(Ru * Ls), O = M >= 1 ? b : b * M, z = M >= 1 ? b / M : b;
  return {
    focalPx: f,
    rect: x,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(g / f) * wr,
      vFOV_deg: 2 * Math.atan(y / f) * wr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(O) * wr,
        vFOV_deg: 2 * Math.atan(z) * wr
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
function h_(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(a) && a > 0) {
    const c = Ai(n, e);
    return Tc(Ic(n, t), c);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: vs(o, t) };
}
function oh(e, t, n, { preserveOrientation: r = !1, safeRect: a = null } = {}) {
  let o = bo(t, n);
  if (!o) return e;
  const c = Ci(e) >= 1;
  r && o.ratio >= 1 !== c && (o = bo(o.height, o.width));
  const f = h_(e, o.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...f, aspect_id: o.label };
}
function Mm(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ii(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), a = gm({
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
    const a = (Array.isArray(e.shots) ? e.shots : []).filter((c) => c !== r), o = ((n = a[0]) == null ? void 0 : n.id) == null ? null : String(a[0].id);
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
    return Qi(e, (r) => oh(
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
      const o = String(Hr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = o ? bo(o[1], o[2]) : bo(Ci(r), 1);
      return c ? oh(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Qi(e, (a) => {
      const o = al(r), c = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(c - o) <= 1e-12) return a;
      const f = { ...a, roll_deg: o };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Qi(e, (r) => {
    const a = bm(r, t.scale);
    return a ? { ...r, ...a } : r;
  }) : t.type === "step-fov" ? Qi(e, (r) => {
    const a = ym(r, t.direction);
    return a ? { ...r, ...a } : r;
  }) : t.type === "pan-camera" ? Qi(e, (r) => {
    const a = Cm(t.startShot || r, t);
    return Math.abs(Number(a.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Pm({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: a = !1,
  allowAlt: o = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const f = o && a ? "alt" : r ? "shift" : "";
  if (!f || !e || !t) return null;
  const h = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, g = {
    x: h.x + h.w * 0.5,
    y: h.y + h.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - g.x, Number(t.y || 0) - g.y);
  if (f === "shift" && y < Math.min(h.w, h.h) * c) return null;
  const x = Math.atan2(Number(t.y || 0) - g.y, Number(t.x || 0) - g.x);
  return {
    source: f,
    frame: h,
    center: g,
    startRollDeg: Number(n || 0),
    lastAngle: x,
    accumulatedRad: 0
  };
}
function Am(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + dm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: a },
    rollDeg: hm(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Cm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, c = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ls, h = Math.cos(f), g = Math.sin(f), y = o / n, x = -c / n, S = y * h - x * g, M = y * g + x * h, b = Number(e.pitch_deg || 0) * Ls, O = Math.max(0.25, Math.abs(Math.cos(b)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(S) / O * wr),
    pitch_deg: W(Number(e.pitch_deg || 0) - Math.atan(M) * wr, -90, 90)
  };
}
function p_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return xm({
    readState: e,
    reduce: Mm,
    projectModel: wm,
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
}), m_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, g_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: m_(t[2])
})), b_ = {
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
}, sh = Object.fromEntries(
  Object.entries(b_).map(([e, t]) => [e, {
    name: t.name,
    elements: g_(t.body)
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
      return Object.prototype.hasOwnProperty.call(sh, r) ? sh[r] : null;
    });
    return (r, a) => n.value ? (Ne(), Ae("svg", {
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
      (Ne(!0), Ae(ot, null, $t(n.value.elements, (o, c) => (Ne(), Ae(ot, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${c}`
      }, [
        o.tag === "path" ? (Ne(), Ae("path", si({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Ne(), Ae("circle", si({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Ne(), Ae("rect", si({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Ne(), Ae("line", si({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Ne(), Ae("polyline", si({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Ne(), Ae("polygon", si({
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
    return (r, a) => (Ne(), Ei(tv(e.tag), si({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Pp(() => [
        ze(en, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, y_ = ["aria-expanded", "disabled"], v_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, __ = ["data-aspect", "disabled", "onClick"], x_ = { class: "pano-cutout-aspect-custom" }, S_ = ["disabled"], w_ = ["disabled"], k_ = ["data-custom-width", "data-custom-height", "disabled"], Im = {
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
    ]), o = /* @__PURE__ */ bn("1"), c = /* @__PURE__ */ bn("1"), f = /* @__PURE__ */ bn(null), h = kt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), g = kt(() => {
      const O = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], z = String(n.model.aspectLabel || "");
      return O.length ? O.map((L) => {
        const P = typeof L == "string" ? L : String((L == null ? void 0 : L.value) || ""), $ = typeof L == "string" ? L : String((L == null ? void 0 : L.label) || P);
        return {
          ...typeof L == "object" && L ? L : {},
          value: P,
          label: $,
          active: z ? P === z : (L == null ? void 0 : L.active) === !0
        };
      }) : a.map((L) => ({
        ...L,
        active: L.value === z
      }));
    }), y = kt(() => {
      var z;
      const O = String(n.model.aspectLabel || "").trim();
      return O || String(((z = g.value.find((L) => L.active === !0)) == null ? void 0 : z.label) || "Aspect");
    });
    Ni(y, (O) => {
      const z = String(O || "").match(/^([0-9.]+):([0-9.]+)$/);
      z && (o.value = z[1], c.value = z[2]);
    }, { immediate: !0 });
    function x(O) {
      r("action", O);
    }
    function S(O) {
      var z;
      n.model.aspectOpen === !0 && ((z = f.value) != null && z.contains(O.target) || x({ type: "close-aspect" }));
    }
    bc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), el(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function M(O) {
      const [z, L] = String(O.value || "").split(":");
      x({
        type: "set-aspect",
        width: z,
        height: L,
        preserveOrientation: !0
      });
    }
    function b() {
      x({
        type: "set-aspect",
        width: o.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (O, z) => (Ne(), Ae("div", {
      ref_key: "rootElement",
      ref: f,
      class: ft(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Ne(), Ei(tn, {
        key: 0,
        icon: e.model.aspectIcon || pt(Ee).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: h.value },
        onClick: z[0] || (z[0] = (L) => x({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Ne(), Ae("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: h.value,
        onClick: z[1] || (z[1] = (L) => x({ type: "toggle-aspect" }))
      }, [
        ze(en, {
          icon: e.model.aspectIcon || pt(Ee).aspect
        }, null, 8, ["icon"]),
        X("span", null, ct(y.value), 1),
        ze(en, {
          icon: pt(Ee).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, y_)),
      ki(X("div", v_, [
        (Ne(!0), Ae(ot, null, $t(g.value, (L) => (Ne(), Ae("button", {
          key: L.value,
          class: ft(["pano-btn pano-frame-aspect-choice", { active: L.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": L.value,
          disabled: h.value,
          onClick: (P) => M(L)
        }, ct(L.label), 11, __))), 128)),
        X("div", x_, [
          ki(X("input", {
            "onUpdate:modelValue": z[2] || (z[2] = (L) => o.value = L),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: h.value
          }, null, 8, S_), [
            [Ud, o.value]
          ]),
          z[4] || (z[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          ki(X("input", {
            "onUpdate:modelValue": z[3] || (z[3] = (L) => c.value = L),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: h.value
          }, null, 8, w_), [
            [Ud, c.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": c.value,
            disabled: h.value,
            onClick: b
          }, "Apply", 8, k_)
        ])
      ], 512), [
        [ko, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, N_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, M_ = {
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
    return (r, a) => (Ne(), Ae("div", {
      class: ft(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Kn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Kn(() => {
      }, ["stop"]))
    }, [
      ze(tn, {
        icon: pt(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = Kn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", N_, [
        a[3] || (a[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Ne(!0), Ae(ot, null, $t(pt(n), (o) => (Ne(), Ae("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, P_ = { class: "pano-cutout-node-surface" }, A_ = ["title", "disabled"], C_ = { class: "value" }, I_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, T_ = {
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
    return (r, a) => (Ne(), Ae("div", P_, [
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
          ze(en, {
            icon: pt(Ee).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        ze(tn, {
          icon: e.model.hasShot ? pt(Ee).delete : pt(Ee).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        ze(Im, {
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
          ze(en, {
            icon: pt(Ee).roll
          }, null, 8, ["icon"]),
          X("span", C_, ct(e.model.rollLabel || "0.0°"), 1)
        ], 40, A_),
        ze(tn, {
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
        ze(M_)
      ], 32),
      e.model.hasShot === !1 ? (Ne(), Ae("div", I_, " Choose a view · + Add Frame ")) : Rt("", !0)
    ]));
  }
}, Tm = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = /* @__PURE__ */ bn(null);
    let o, c = !1;
    function f() {
      if (!c) return { active: !1, intent: void 0 };
      const x = o;
      return o = void 0, c = !1, { active: !0, intent: x };
    }
    function h(x) {
      const S = a.value;
      return S instanceof HTMLInputElement ? (o = x, c = !0, S.value = "", S.click(), !0) : !1;
    }
    function g(x) {
      var O, z;
      const { active: S, intent: M } = f();
      if (!S) return;
      const b = ((z = (O = x.target) == null ? void 0 : O.files) == null ? void 0 : z[0]) || null;
      if (b) {
        r("file-selected", { intent: M, file: b });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function y() {
      const { active: x, intent: S } = f();
      x && r("file-cancelled", { intent: S });
    }
    return t({ open: h }), (x, S) => (Ne(), Ae("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: g,
      onCancel: y
    }, null, 544));
  }
}, E_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, D_ = {
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
    return (r, a) => (Ne(), Ae("div", {
      class: ft(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Kn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Kn(() => {
      }, ["stop"]))
    }, [
      ze(tn, {
        icon: pt(Ee).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: a[0] || (a[0] = Kn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", E_, [
        a[3] || (a[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Ne(!0), Ae(ot, null, $t(pt(n), (o) => (Ne(), Ae("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, O_ = { class: "pano-stickers-node-surface" }, F_ = ["disabled"], R_ = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, L_ = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, $_ = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ bn(null);
    function r(c) {
      var f;
      (f = t.onAction) == null || f.call(t, c);
    }
    function a() {
      var c, f;
      (f = (c = n.value) == null ? void 0 : c.open) == null || f.call(c, "add");
    }
    function o(c) {
      r({ type: "add-image-file", file: (c == null ? void 0 : c.file) || null });
    }
    return (c, f) => (Ne(), Ae("div", O_, [
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
          ze(en, {
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
          ze(en, {
            icon: pt(Ee).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, F_),
        ze(tn, {
          icon: e.model.locked ? pt(Ee).lock_closed : pt(Ee).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (h) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        ze(tn, {
          icon: pt(Ee).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (h) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        ze(tn, {
          icon: pt(Ee).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (h) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        ze(tn, {
          icon: e.model.isExternalSelection ? pt(Ee).back_initial : pt(Ee).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (h) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        ze(D_)
      ], 32),
      e.model.hasStickers === !1 ? (Ne(), Ae("div", R_, " Add Image to place a sticker ")) : Rt("", !0),
      e.model.dropActive === !0 ? (Ne(), Ae("div", L_, "Drop image to add")) : Rt("", !0),
      ze(Tm, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512)
    ]));
  }
}, _s = "sticker_image_1", Em = "external_image";
function xs(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), a = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * a) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function cu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Oc(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Fc(e) {
  return String((e == null ? void 0 : e.id) || "") === _s || String((e == null ? void 0 : e.source_kind) || "") === Em;
}
const Dm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Om(e) {
  return !Fc(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Dm.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), a = Number(e.initial_pose[t]);
    return [t, Number.isFinite(a) ? a : Number.isFinite(r) ? r : n];
  }));
}
function Fm(e) {
  const t = Om(e);
  return t ? Dm.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Rm(e, t = {}) {
  var T, F, B;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((U) => String((U == null ? void 0 : U.id) || "") === _s);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const U = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === _s;
    return {
      state: {
        ...e,
        stickers: n.filter((le, oe) => oe !== r),
        active: U ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const a = Number(t.linkId), o = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== a || String(c.source_state_hash || "") !== o, h = Number(t.imageWidth || 0), g = Number(t.imageHeight || 0), y = h > 0 && g > 0, x = Math.max(1, h), S = Math.max(1, g), M = t.pose && typeof t.pose == "object" ? t.pose : {}, b = f ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, O = Math.min(179, Math.max(0.1, Number(b)));
  if (!f) {
    if (!y) return { state: e, changed: !1 };
    const U = xs(O, x, S), le = Number(((F = c == null ? void 0 : c.initial_pose) == null ? void 0 : F.hFOV_deg) ?? O), oe = xs(le, x, S), I = Number(((B = c == null ? void 0 : c.initial_pose) == null ? void 0 : B.vFOV_deg) ?? oe);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - U) <= 1e-6 && Math.abs(I - oe) <= 1e-6 ? { state: e, changed: !1 } : {
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
  const z = n.reduce((U, le) => Math.max(U, Number((le == null ? void 0 : le.z_index) || 0)), -1), L = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: O,
    vFOV_deg: y ? xs(O, x, S) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || O),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, P = {
    ...c || {},
    id: _s,
    source_kind: Em,
    source_link_id: a,
    source_state_hash: o,
    ...L,
    initial_pose: { ...L },
    visible: !0,
    z_index: z + 1
  }, $ = r >= 0 ? n.map((U, le) => le === r ? P : U) : [...n, P];
  return { state: { ...e, stickers: $ }, changed: !0 };
}
function Rc(e) {
  const t = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: cu(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: cu(o.z_index),
    item: o
  })), a = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: cu(o.z_index),
    item: o
  }));
  return [...t, ...r, ...a].sort((o, c) => o.z_index - c.z_index);
}
function Lm(e) {
  const t = Oc(e), n = Fc(t), r = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).some((f) => f && f.visible !== !1), a = Rc(e), o = t ? a.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Fm(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: o >= 0 && o < a.length - 1,
    canMoveBackward: o > 0
  };
}
function z_(e) {
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
function lh(e, t) {
  const n = Oc(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = z_(e), a = String(n.id || ""), o = Rc(r), c = o.findIndex((h) => h.type === "sticker" && h.id === a);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === o.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = o.splice(c, 1);
  return t === "front" ? o.push(f) : o.unshift(f), o.forEach((h, g) => {
    h.item.z_index = g;
  }), { state: r, changed: !0 };
}
function V_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function j_(e, t = {}) {
  var r, a;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Rm(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, c = String(o.stickerId || "").trim(), f = String(o.assetId || "").trim();
    if (!c || !f || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === c))
      return { state: e, changed: !1 };
    const g = Rc(e).reduce((S, M) => Math.max(S, Number(M.z_index || 0)), -1), y = 30, x = {
      id: c,
      asset_id: f,
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: y,
      vFOV_deg: xs(y, o.imageWidth, o.imageHeight),
      rot_deg: 0,
      z_index: g + 1
    };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [f]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], x],
        active: { ...e.active || {}, selected_sticker_id: c }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !(Array.isArray(e.stickers) ? e.stickers : []).some((c) => String((c == null ? void 0 : c.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Oc(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, locked: o } : c)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = Om(n);
    return !o || !Fm(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, ...o } : c)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return lh(e, "front");
  if (t.type === "send-back") return lh(e, "back");
  if (t.type === "delete-selected") {
    if (Fc(n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((h) => h === n ? { ...h, visible: !1 } : h)
        },
        changed: !0
      };
    const o = e.stickers.filter((h) => h !== n), c = ((a = o[0]) == null ? void 0 : a.id) == null ? null : String(o[0].id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return f.assets = V_(f), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, c = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], f = {};
    return c.forEach((h) => {
      const g = Number(o[h]);
      Number.isFinite(g) && Math.abs(g - Number(n[h] || 0)) > 1e-12 && (f[h] = g);
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
function H_(e = {}) {
  return xm({
    ...e,
    reduce: j_,
    projectModel: Lm
  });
}
const uh = 24;
function U_(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ch(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function G_(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r, r += 1) {
    const o = t[r], c = t[a];
    o.y > e.y != c.y > e.y && e.x < (c.x - o.x) * (e.y - o.y) / (c.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function $u(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => ch(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], a = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: a * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ch(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : G_(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function $m(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((a) => (Array.isArray(a) ? a : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function zm(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Vm(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1))
  };
}
function jm(e) {
  return Ln(
    Number((e == null ? void 0 : e.yawDeg) ?? (e == null ? void 0 : e.yaw) ?? 0),
    Number((e == null ? void 0 : e.pitchDeg) ?? (e == null ? void 0 : e.pitch) ?? 0),
    0
  );
}
function B_(e, t, n) {
  const { width: r, height: a } = Vm(n), { right: o, up: c, fwd: f } = jm(t), h = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * Gt, g = 2 * Math.atan(Math.tan(h * 0.5) * (a / r)), y = (Number((e == null ? void 0 : e.x) || 0) - r * 0.5) / (r * 0.5) * Math.tan(h * 0.5), x = (a * 0.5 - Number((e == null ? void 0 : e.y) || 0)) / (a * 0.5) * Math.tan(g * 0.5);
  return Sc(Sa(Sa(wa(o, y), wa(c, x)), f));
}
function Ka(e, t, n) {
  const { width: r, height: a } = Vm(n), { right: o, up: c, fwd: f } = jm(t), h = pa(e, o), g = pa(e, c), y = pa(e, f), x = 1e-4;
  if (!Number.isFinite(y)) return null;
  const S = Math.max(y, x), M = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * Gt, b = 2 * Math.atan(Math.tan(M * 0.5) * (a / r)), O = r * 0.5 / Math.tan(M * 0.5), z = a * 0.5 / Math.tan(b * 0.5), L = Math.max(r, a) * 2;
  return {
    x: W(r * 0.5 + h / S * O, -L, r + L),
    y: W(a * 0.5 - g / S * z, -L, a + L),
    rawZ: y
  };
}
function K_(e) {
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
function vi(e, t, n) {
  return Sc(Sa(
    Sa(e.centerDir, wa(e.right, t)),
    wa(e.up, n)
  ));
}
function Hm(e, t, n) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = K_(e), a = Ka(r.centerDir, t, n);
  if (!a) return { visible: !1 };
  const o = [
    vi(r, -r.tanX, r.tanY),
    vi(r, r.tanX, r.tanY),
    vi(r, r.tanX, -r.tanY),
    vi(r, -r.tanX, -r.tanY)
  ].map((M) => Ka(M, t, n)), c = Array.from({ length: 4 }, (M, b) => {
    const O = [];
    for (let z = 0; z <= 28; z += 1) {
      const L = z / 28;
      let P, $;
      b === 0 ? (P = -r.tanX + 2 * r.tanX * L, $ = r.tanY) : b === 1 ? (P = r.tanX, $ = r.tanY - 2 * r.tanY * L) : b === 2 ? (P = r.tanX - 2 * r.tanX * L, $ = -r.tanY) : (P = -r.tanX, $ = -r.tanY + 2 * r.tanY * L);
      const T = Ka(vi(r, P, $), t, n);
      T && O.push({ x: T.x, y: T.y });
    }
    return O;
  }), f = Ka(vi(r, 0, r.tanY), t, n), h = Ka(
    vi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t,
    n
  ), g = [a, ...o, f, h];
  if (g.some((M) => !M || !Number.isFinite(M.x) || !Number.isFinite(M.y)))
    return { visible: !1 };
  if (!g.some((M) => M.rawZ > 1e-4)) return { visible: !1 };
  const y = h.x - f.x, x = h.y - f.y, S = Math.hypot(y, x) || 1;
  return {
    center: { x: a.x, y: a.y },
    corners: o.map((M) => ({ x: M.x, y: M.y })),
    boundaryEdges: c,
    rotateStemBase: { x: f.x, y: f.y },
    rotateHandle: {
      x: f.x + y / S * uh,
      y: f.y + x / S * uh
    },
    visible: !0
  };
}
function fh(e, t, n, r, a) {
  const o = (Array.isArray(e) ? e : []).filter((f) => f && f.visible !== !1).map((f) => ({ item: f, geometry: Hm(f, r, a) })).filter((f) => f.geometry.visible).sort((f, h) => {
    var g, y;
    return Number(((g = h.item) == null ? void 0 : g.z_index) || 0) - Number(((y = f.item) == null ? void 0 : y.z_index) || 0);
  }), c = o.find((f) => {
    var h;
    return String(((h = f.item) == null ? void 0 : h.id) || "") === String(t || "");
  });
  if (c) {
    const f = $u(c.geometry, n);
    if (f.kind === "scale" || f.kind === "rotate") return { ...c, hit: f };
  }
  for (const f of o) {
    const h = $u(f.geometry, n);
    if (h.kind !== "none") return { ...f, hit: h };
  }
  return null;
}
function W_(e, t, n, r) {
  const a = B_(t, n, r);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(a.x, a.z) * Ar),
    pitch_deg: Math.asin(W(a.y, -1, 1)) * Ar
  };
}
function Y_(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: W(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: W(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function q_(e, t, n, r = !1) {
  const a = (Number(n || 0) - Number(t || 0)) * Ar;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - a;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Jo = null;
function Lc() {
  return Jo || (Jo = new Promise((e) => {
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
  }), Jo);
}
function Jn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function X_(e, t = 1024) {
  const n = Math.max(1, Math.round(Jn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Jn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function J_(e, t, n) {
  const r = Jn(t), a = Jn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || a < 1) return null;
  const c = Jn(o.u0), f = Jn(o.v0), h = Jn(o.u1), g = Jn(o.v1);
  if (h <= c || g <= f) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + h) * 0.5 + Jn(y.du)) * r,
    centerY: ((f + g) * 0.5 + Jn(y.dv)) * a,
    width: (h - c) * r,
    height: (g - f) * a,
    rotationRad: Jn(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Jn(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function Z_(e, t, n) {
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
function Q_() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, c] of e) {
        if (e.size <= 16) break;
        c.settled && (c.image.onload = null, c.image.onerror = null, e.delete(o));
      }
  }
  function r(o, c) {
    let f = e.get(o);
    if (f)
      return e.delete(o), e.set(o, f), !f.settled && typeof c == "function" && f.listeners.add(c), f.image;
    const h = new Image();
    f = { image: h, listeners: new Set(typeof c == "function" ? [c] : []), settled: !1 }, e.set(o, f);
    const g = () => {
      f.settled = !0;
      const y = [...f.listeners];
      f.listeners.clear(), y.forEach((x) => x()), n();
    };
    return h.onload = g, h.onerror = g, h.src = o, n(), h;
  }
  function a(o, c, f, h = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const g = String(o.rasterDataUrl || "").trim(), y = J_(o, c, f);
    if (!g.startsWith("data:") || !y) return null;
    const x = Z_(o, c, f), S = String((o == null ? void 0 : o.id) || "").trim() || x, M = t.get(S);
    if ((M == null ? void 0 : M.revision) === x) return { source: M.source, revision: x };
    const b = r(g, h), O = Number(b.naturalWidth || b.width || 0), z = Number(b.naturalHeight || b.height || 0);
    if (!b.complete || O < 1 || z < 1) return null;
    const L = document.createElement("canvas");
    L.width = Math.max(1, Math.round(c)), L.height = Math.max(1, Math.round(f));
    const P = L.getContext("2d");
    return P ? (y.wrapOffsets.forEach(($) => {
      P.save(), P.translate(y.centerX + $, y.centerY), P.rotate(y.rotationRad), P.scale(y.scale, y.scale), P.drawImage(
        b,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), P.restore();
    }), t.set(S, { revision: x, source: L }), { source: L, revision: x }) : null;
  }
  return {
    get: a,
    retain(o = []) {
      const c = new Set(Array.from(o, (f) => String(f || "").trim()).filter(Boolean));
      for (const f of t.keys())
        c.has(f) || t.delete(f);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function ex(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function tx(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function nx({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), a = Math.max(1, Math.trunc(Number(t || 32)));
  function o(x) {
    if (!x) return;
    x.entry.listeners.delete(x);
    const S = r.get(x.owner);
    (S == null ? void 0 : S.get(x.key)) === x && S.delete(x.key);
  }
  function c(x, S, M, b) {
    if (!x || typeof b != "function" || M.settled) return;
    let O = r.get(x);
    O || (O = /* @__PURE__ */ new Map(), r.set(x, O));
    const z = O.get(S);
    if ((z == null ? void 0 : z.entry) === M) {
      z.callback = b;
      return;
    }
    o(z);
    const L = { owner: x, key: S, entry: M, callback: b };
    O.set(S, L), M.listeners.add(L);
  }
  function f(x, S) {
    x.settled || (x.settled = !0, x.image.onload = null, x.image.onerror = null, !S && n.get(x.key) === x && n.delete(x.key), [...x.listeners].forEach((M) => {
      o(M);
      try {
        M.callback(x.image, S);
      } catch {
      }
    }), h(a));
  }
  function h(x) {
    if (!(n.size <= x))
      for (const [S, M] of n) {
        if (n.size <= x) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(S));
      }
  }
  function g(x, S, M, b = null) {
    const O = String(S || ""), z = String(M || "");
    if (!O || !z) return null;
    let L = n.get(O);
    if (L)
      n.delete(O), n.set(O, L);
    else {
      h(a - 1);
      const $ = e || globalThis.Image;
      if (typeof $ != "function") return null;
      const T = new $();
      L = { key: O, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(O, L), T.onload = () => f(L, !0), T.onerror = () => f(L, !1), T.src = z;
    }
    return L.settled || L.image.complete && Number(L.image.naturalWidth || L.image.width || 0) > 0 || c(x, O, L, b), L.image;
  }
  function y(x) {
    const S = r.get(x);
    S && ([...S.values()].forEach(o), r.delete(x), h(a));
  }
  return { get: g, disposeOwner: y };
}
function $s(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function sl(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = $s(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function dh(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    $s(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function rx(e, t = "") {
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
function hh(e, t, n, r = ["erp_image", "bg_erp"]) {
  const a = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || a === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
function ix(e, t = [], n = null) {
  var a;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const c = [(a = e == null ? void 0 : e.ui) == null ? void 0 : a[o], e == null ? void 0 : e[o]];
    for (const f of c)
      if (Array.isArray(f))
        for (const h of f) {
          const g = r(h);
          if (g && (/\.mp4(\?|$)/i.test(g) || String((h == null ? void 0 : h.format) || "").toLowerCase() === "video/mp4"))
            return g;
        }
  }
  return "";
}
function ax({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var b;
  const r = ((b = e == null ? void 0 : e.createElement) == null ? void 0 : b.call(e, "video")) || null;
  if (!r || !t) return null;
  const a = typeof n == "function" ? n : () => {
  };
  let o = !1, c = 0;
  const f = typeof r.requestVideoFrameCallback == "function", h = () => {
    o || !f || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !o && (a(), h());
    }));
  }, g = () => {
    if (!o) {
      a();
      try {
        Promise.resolve(r.play()).then(h).catch(() => {
        });
      } catch {
      }
    }
  }, y = () => a(), x = () => {
    a(), h();
  }, S = () => a();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", g, { once: !0 }), r.addEventListener("canplay", g, { once: !0 }), f || r.addEventListener("timeupdate", y), r.addEventListener("play", x), r.addEventListener("pause", S), r.src = t, r.load(), { video: r, destroy: () => {
    var O, z;
    o || (o = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", g), r.removeEventListener("canplay", g), r.removeEventListener("timeupdate", y), r.removeEventListener("play", x), r.removeEventListener("pause", S), r.pause(), (O = r.removeAttribute) == null || O.call(r, "src"), (z = r.load) == null || z.call(r));
  } };
}
function yt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function ox() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function sx(e) {
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
function lx(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function ux(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = yt(e.t, 0), r = yt(e.widthScale, null), a = yt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = yt(e.u, null), c = yt(e.v, null);
    if (o == null || c == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = yt(e.u, null), c = yt(e.v, null);
    if (o == null || c == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: c,
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
    const o = ux(a, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function cx(e, t, n, r) {
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
  const c = Zo(e.rawPoints, t, 1), f = Zo(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: o,
    rawPoints: c || o.map((h) => ({ ...h })),
    processedPoints: f || o.map((h) => ({ ...h }))
  };
}
function fx(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = lx(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = cx(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const o = yt(e.size, null), c = yt(e.opacity, null);
  if (o == null || c == null) return null;
  const f = String(e.id || "").trim(), h = String(e.actionGroupId || "").trim();
  if (!f || !h) return null;
  const g = yt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    x = {
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
    opacity: Math.max(0, Math.min(1, c)),
    hardness: yt(e.hardness, null),
    flow: yt(e.flow, null),
    spacing: yt(e.spacing, null),
    createdAt: Math.trunc(yt(e.createdAt, 0)),
    color: x,
    radiusModel: y,
    radiusValue: g == null ? null : Math.max(0, g),
    geometry: a
  };
}
function ph(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = fx(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function dx(e) {
  if (!e || typeof e != "object") return null;
  const t = yt(e.u0, null), n = yt(e.v0, null), r = yt(e.u1, null), a = yt(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const o = (f) => Math.max(0, Math.min(1, f)), c = { u0: o(t), v0: o(n), u1: o(r), v1: o(a) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function hx(e) {
  const t = e || {};
  return {
    du: yt(t.du, 0) ?? 0,
    dv: yt(t.dv, 0) ?? 0,
    rot_deg: yt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, yt(t.scale, 1) ?? 1)
  };
}
function px(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const o = dx(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, yt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: a,
    transform: hx(e.transform)
  } : null;
}
function mx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = px(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function ga(e) {
  const t = ox();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: sx(e.groups),
    paint: ph(e.paint, "paint"),
    mask: ph(e.mask, "mask"),
    raster_objects: mx(e.raster_objects)
  };
}
const gx = 2, bx = ["sky", "world"], yx = ["input", "output", "temp"];
function Wt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function At(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function zu(e, t) {
  const n = At(e, t);
  return n !== null && n > 0 ? n : t;
}
function Bn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function lo(e) {
  const t = At(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function mh(e, t) {
  return typeof e == "boolean" ? e : t;
}
function $c(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => At(n, null));
  return t.includes(null) ? null : t;
}
function vx(e) {
  const t = Wt(e) ? e : {};
  return {
    position: $c(t.position) || [0, 0, 0],
    yaw_deg: At(t.yaw_deg, 0),
    pitch_deg: Bn(At(t.pitch_deg, 0), -90, 90),
    roll_deg: At(t.roll_deg, 0),
    hFOV_deg: Bn(At(t.hFOV_deg, 90), 0.1, 179)
  };
}
function Um(e) {
  const t = Wt(e) ? e : {};
  return {
    position: $c(t.position) || [0, 0, 0],
    yaw_deg: At(t.yaw_deg, 0),
    pitch_deg: Bn(At(t.pitch_deg, 0), -90, 90),
    roll_deg: At(t.roll_deg, 0),
    scale: zu(t.scale, 1)
  };
}
function _x(e) {
  const t = Wt(e) ? e : {};
  return {
    yaw_deg: At(t.yaw_deg, 0),
    pitch_deg: Bn(At(t.pitch_deg, 0), -90, 90),
    roll_deg: At(t.roll_deg, 0),
    hFOV_deg: Bn(At(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Bn(At(t.vFOV_deg, 20), 0.1, 179)
  };
}
function xx(e) {
  return Bn(At(e, 1), 0, 1);
}
function Sx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => At(n, null));
    if (!t.includes(null) && t[0] >= 0 && t[0] <= 1 && t[2] >= 0 && t[2] <= 1)
      return t;
  }
  return "auto";
}
function wx(e) {
  if (!Wt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = $c(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function kx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const a of Array.isArray(e) ? e : []) {
    if (!Wt(a)) continue;
    const o = lo(a.frame);
    if (o === null) continue;
    const c = { frame: o, value: t(a.value), easing: Sx(a.easing) }, f = n ? wx(a.handles) : null;
    f && (c.handles = f), r.set(o, c);
  }
  return [...r.keys()].sort((a, o) => a - o).map((a) => r.get(a));
}
function zs(e, t, n) {
  const r = Wt(e) ? e : {};
  return {
    value: t(r.value),
    keyframes: kx(r.keyframes, t, n)
  };
}
function Gm(e) {
  const t = Wt(e) ? e : {}, n = lo(t.start), r = lo(t.in), a = lo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: a === null ? null : Math.max(1, a)
  };
}
function Nx(e) {
  const t = Wt(e) ? e : {}, n = Bn(At(t.x0, 0), 0, 1), r = Bn(At(t.y0, 0), 0, 1), a = Bn(At(t.x1, 1), 0, 1), o = Bn(At(t.y1, 1), 0, 1);
  return { x0: Math.min(n, a), y0: Math.min(r, o), x1: Math.max(n, a), y1: Math.max(r, o) };
}
function Mx(e) {
  return Wt(e) ? e.kind === "port" ? { kind: "port" } : e.kind !== "file" ? null : typeof e.filename == "string" && e.filename.trim() ? {
    kind: "file",
    filename: e.filename,
    subfolder: typeof e.subfolder == "string" ? e.subfolder : "",
    storage: yx.includes(e.storage) ? e.storage : "input"
  } : typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null : null;
}
function Px(e) {
  const t = Mx(e.source);
  if (!t) return null;
  const n = bx.includes(e.placement) ? e.placement : "sky", r = n === "world";
  return {
    id: e.id,
    placement: n,
    source: t,
    clip: Gm(e.clip),
    visible: mh(e.visible, !0),
    locked: mh(e.locked, !1),
    crop: Nx(e.crop),
    transform: zs(e.transform, r ? Um : _x, r),
    opacity: zs(e.opacity, xx, !1)
  };
}
function Ax(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const c = Wt(o) ? Px(o) : null;
    if (c) {
      if (c.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(c);
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
function Vu(e) {
  const t = Wt(e.timeline) ? e.timeline : {}, n = Wt(e.camera) ? e.camera : {}, r = Wt(e.scene) ? e.scene : {}, a = lo(t.length);
  return {
    version: gx,
    timeline: {
      fps: zu(t.fps, 24),
      length: a !== null && a >= 1 ? a : null
    },
    camera: {
      aspect: zu(n.aspect, 1),
      transform: zs(n.transform, vx, !0)
    },
    scene: {
      clip: Gm(r.clip),
      transform: zs(r.transform, Um, !0)
    },
    stickers: Ax(e.stickers),
    painting: ga(e.painting),
    painting_layer: Wt(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Cx(e, t) {
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
function Ix(e) {
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
function Tx(e) {
  const t = Wt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Wt) : [];
  return n.sort((r, a) => At(r.z_index, 0) - At(a.z_index, 0)), Vu({
    camera: Ix(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Cx(r, t),
      visible: r.visible,
      locked: r.locked,
      crop: r.crop,
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
function Ex(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Vu({});
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
  return n === 1 ? Tx(t) : Vu(t);
}
let Qo = { text: null, parsed: null };
function Qt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ju(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Dx({
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
    painting: ga(null),
    painting_layer: null,
    ui_settings: ju(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ox(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function Fx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function Rx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Lx(e) {
  return Array.isArray(e) ? e.map((t) => mm(t)) : [];
}
function $x(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), a = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], o = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: o };
}
function Bm(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Dx(n), a = String(e || "").trim();
  if (!a) return r;
  try {
    let o = null;
    if (Qo.text === a ? o = Qo.parsed : (o = JSON.parse(a), Qo = { text: a, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Fx(o.assets),
      stickers: Rx(o.stickers),
      shots: Lx(o.shots),
      painting: ga(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: ju(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return c && (f.ui_settings = ju({ ...f.ui_settings, ...c })), f.output_preset = Ox(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Qt(n.coverage), delete f.editor_history, f;
  } catch {
    return Qo = { text: a, parsed: null }, r;
  }
}
function gh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function zx(e) {
  return Ex({ ...e, version: 1 });
}
const Vs = "state_json";
function Wr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function Vx(e) {
  var c, f;
  const t = Wr(e, Vs);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Bm(n, {
    coverage: (c = Wr(e, "coverage")) == null ? void 0 : c.value
  }), a = Mm(r, { type: "add-frame" });
  if (!a.changed) return !1;
  const o = JSON.stringify(a.state);
  return t.value = o, (f = t.callback) == null || f.call(t, o), !0;
}
function zc(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Wr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var c, f, h, g, y, x, S, M, b;
    const o = r ? r(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (g = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || g.call(h), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (b = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || b.call(M, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function jx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function bh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Hx(e) {
  var y, x, S, M, b, O;
  if (!e) return;
  const t = Wr(e, "coverage"), n = Wr(e, "bg_color"), r = Wr(e, Vs), a = Wr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && jx(o) && (bh(c) || c === ""))) return;
  let g = "360";
  if (bh(c))
    try {
      g = String(Qt((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      g = "360";
    }
  t.value = g, (x = t.callback) == null || x.call(t, g), n.value = o, (S = n.callback) == null || S.call(n, o), r.value = c, (M = r.callback) == null || M.call(r, c), a && (a.value = f, (b = a.callback) == null || b.call(a, f)), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
}
function Ss(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, c;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Hu(e, t, n) {
  var o, c;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (a) {
    a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", a.options = { ...a.options || {}, hidden: !1 }, typeof a.__panoComputeSizeBeforeHide == "function" && (a.computeSize = a.__panoComputeSizeBeforeHide), delete a.__panoComputeSizeBeforeHide, (o = a.element) != null && o.style && (a.element.style.display = ""), (c = a.parentEl) != null && c.style && (a.parentEl.style.display = "");
    const f = typeof a.computeSize == "function" ? a.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (a.computeSize = () => {
      var h;
      return [Math.max(120, Number(((h = e == null ? void 0 : e.size) == null ? void 0 : h[0]) || 0) - 20), 30];
    }), a;
  }
  return a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a;
}
async function Ux(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, a]) => a)) : await Promise.all(r.map(([, a]) => a)), r.forEach(([a, o]) => {
        n.get(a) === o && n.delete(a);
      });
    }
}
function Uu(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = o.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, o);
  const f = () => {
    var h, g;
    ((g = (h = e.__panoPendingStickerUploads) == null ? void 0 : h.get) == null ? void 0 : g.call(h, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), o;
}
async function Km(e, t = {}) {
  var r;
  await Ux(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const a of n) await a();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function Gx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Km(e), n ? n.apply(this, r) : this.value;
  };
}
function Bx(e) {
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
function Kx(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((a) => String((a == null ? void 0 : a.name) || "") === "image" && String((a == null ? void 0 : a.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function yh(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: a,
  attachStickers: o,
  attachCutout: c,
  enableStickersPreview: f
}) {
  if (!(e != null && e.prototype)) return;
  function h(g) {
    var S;
    const y = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === y) return;
    Bx(g), zc(g, t), Ss(g, Vs);
    const x = Wr(g, Vs);
    if (Gx(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const M = x.callback;
      x.callback = (b) => {
        var z;
        const O = M ? M(b) : void 0;
        return (z = g.setDirtyCanvas) == null || z.call(g, !0, !1), O;
      };
    }
    if (n === "PanoramaStickers") {
      const M = Wr(g, "bg_color");
      M && (M.value == null || String(M.value).trim() === "" || String(M.value).toLowerCase() === "#000000") && (M.value = "#00ff00", (S = M.callback) == null || S.call(M, "#00ff00")), Hu(g, r, () => a(g, "stickers")), f && (o(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => a(g, "stickers")
      }), g.__panoStickersNodeSurface && Ss(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = y;
      return;
    }
    Hu(g, r, () => a(g, "cutout")), c(g, {
      buttonText: r,
      onOpen: () => a(g, "cutout")
    }), g.__panoCutoutNodeSurface && Ss(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = y;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const y = e.prototype[g];
    e.prototype[g] = function() {
      const x = y ? y.apply(this, arguments) : void 0;
      return g === "onNodeCreated" && n === "PanoramaCutout" && Vx(this), g === "onConfigure" && n === "PanoramaStickers" && this.widgets && Hx(this), (g === "onNodeCreated" || this.widgets) && h(this), x;
    };
  }
}
function Wx(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return Kx(this), r;
  };
}
function Yx(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: a
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !c && f < 40) {
      a(o);
      return;
    }
    zc(e, t);
    const h = (g = e) => n(g, "stickers", { readOnly: !0, hideSidebar: !1 });
    Hu(e, "Open Preview", () => h(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: h
    }), e.__panoPreviewNodeSurface && Ss(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(o);
}
function qx({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: a,
  requestFrame: o,
  enableStickersPreview: c = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, h) {
      const g = String((h == null ? void 0 : h.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && yh(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && yh(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c
      }), Rs(g) && Wx(f);
    },
    nodeCreated(f) {
      const h = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      zc(f, e), Rs(h) && Yx(f, { app: e, openEditor: t, attachPreview: a, requestFrame: o });
    }
  };
}
const Xx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function kr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Xx.test(String(e.name || "")) : !1;
}
function Vc(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => kr(n)) : !1;
}
function Jx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, a = (h) => {
    var g, y, x;
    (g = h == null ? void 0 : h.preventDefault) == null || g.call(h), (y = h == null ? void 0 : h.stopPropagation) == null || y.call(h), (x = h == null ? void 0 : h.stopImmediatePropagation) == null || x.call(h);
  }, o = (h) => {
    if (Vc(h == null ? void 0 : h.dataTransfer)) {
      a(h);
      try {
        h.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, c = (h) => {
    var g;
    h != null && h.relatedTarget && ((g = e.contains) != null && g.call(e, h.relatedTarget)) || n(!1);
  }, f = (h) => {
    var y;
    const g = Array.from(((y = h == null ? void 0 : h.dataTransfer) == null ? void 0 : y.files) || []).find((x) => kr(x));
    if (!g) {
      n(!1);
      return;
    }
    a(h), n(!1), r(g);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function Gu(e, t = {}) {
  var c, f, h, g;
  if (!kr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), a = t.revokeObjectURL || ((g = (h = globalThis.URL) == null ? void 0 : h.revokeObjectURL) == null ? void 0 : g.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const y = await new Promise((x, S) => {
      const M = new n();
      M.onload = () => x(M), M.onerror = () => S(new Error("image load failed")), M.src = o;
    });
    return {
      image: y,
      width: Math.max(1, Number(y.naturalWidth || y.width || 1)),
      height: Math.max(1, Number(y.naturalHeight || y.height || 1))
    };
  } finally {
    a == null || a(o);
  }
}
async function ws(e, { fetchApi: t } = {}) {
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
const Qa = /* @__PURE__ */ new WeakMap();
function Wm(e, t) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Qa.get(e);
  n || (n = [], Qa.set(e, n));
  const r = { handler: t };
  n.push(r);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const o = Qa.get(e);
    if (!o) return;
    const c = o.indexOf(r);
    c >= 0 && o.splice(c, 1), o.length === 0 && Qa.delete(e);
  };
}
function eo(e, ...t) {
  const n = Qa.get(e), r = n == null ? void 0 : n[n.length - 1];
  return r ? (r.handler(...t), !0) : !1;
}
const vh = /* @__PURE__ */ new WeakSet(), _h = /* @__PURE__ */ new WeakSet();
let xh = 0;
function Bu(e) {
  if (!e || typeof e != "object" || _h.has(e)) return e;
  const t = String(e.type || "preview");
  return xh += 1, e.type = `${t}:pano-${xh}`, _h.add(e), e;
}
function js(e) {
  if (!e || typeof e != "object" || vh.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, vh.add(e), e;
}
function Ym(e, t) {
  var r, a;
  if (!t || ((a = (r = js(t)) == null ? void 0 : r.onRemove) == null || a.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Zx({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, a = null, o = !1;
  return { schedule: (h) => o || r || typeof e != "function" ? !1 : (a = h, r = e(() => {
    r = 0;
    const g = a;
    a = null, o || n == null || n(g);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, a = null);
  } };
}
const { app: Lt } = hs, jc = nx();
function Ku() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (hs == null ? void 0 : hs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Qx = Math.PI / 180, eS = {}, tS = { Nu: 24, Nv: 14 }, nS = 10, rS = "pano_suite.ui_settings.v1", iS = 120;
function Sh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(rS)) || "").trim();
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
function aS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Wa(e) {
  var n, r, a, o, c;
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
    styleTransform: String(((c = e.style) == null ? void 0 : c.transform) || "")
  };
}
function oS() {
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
function Wu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, a) => {
    const o = Number(r), c = Number(a);
    return !Number.isFinite(o) || !Number.isFinite(c) ? null : [o, c];
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
function qm(e) {
  const t = Wu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function sS(e, t, n) {
  qm(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Yu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Hc(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Xm(e) {
  return Rs(Hc(e));
}
function wh(e = null) {
  var o, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((c = (o = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, a].join("|");
}
function Jm(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = "dom", o = Yu(e);
      this.activeBackend = o;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (o === a && o !== "none" && c === r && f === h) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = h, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && ks(e), qS(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Yu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ks(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      ks(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function lS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ks(e, t = {}) {
  var r, a, o, c, f;
  if (!e) return;
  qu.unregister(e), lS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (f = (c = n.root) == null ? void 0 : c.remove) == null || f.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((g) => {
      if (g === (n == null ? void 0 : n.widget)) return !0;
      const y = String((g == null ? void 0 : g.name) || ""), x = String((g == null ? void 0 : g.type) || ""), S = Ku();
      return y === S || x === S || y === "pano_preview" || x === "pano_preview" ? !0 : y === "preview" && x === "pano_preview";
    }).forEach((g) => PS(e, g));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function fu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function uS(e, t = "#00ff00") {
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
function cS(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ba(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Zn(e) {
  var f, h;
  const t = cS(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = ba(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((h = ba(e, "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === a)
    return o.parsed;
  const c = uS(t, r);
  return c.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: a, parsed: c }, c;
}
function ba(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Zm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function fS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Qm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function eg(e, t, n = null) {
  var a, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = fS(e == null ? void 0 : e.graph, n)), r;
}
function dS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function tg(e, t = []) {
  const n = dS(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function kh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Hs(e, t) {
  const n = kh(e), r = kh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function hS(e, t = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = tg(e, t).map((g) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(g))).filter((g) => g >= 0), o = n.map((g, y) => ({ input: g, idx: y })).filter(({ input: g }) => String((g == null ? void 0 : g.type) || "").toUpperCase() === "IMAGE").map(({ idx: g }) => g), c = [.../* @__PURE__ */ new Set([...a, ...o])], f = [];
  for (const g of c) {
    const y = eg(e, g);
    if ((y == null ? void 0 : y.id) != null) {
      f.push(String(y.id));
      continue;
    }
    const x = (h = n[g]) == null ? void 0 : h.link;
    if (x == null) continue;
    const S = Zm(e == null ? void 0 : e.graph, x), { originId: M } = Qm(S);
    M != null && f.push(String(M));
  }
  return [...new Set(f)];
}
const qu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = mn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var g, y, x, S, M;
        if (!o) return;
        const c = Hs(r, o == null ? void 0 : o.id);
        hS(o, ["erp_image", "bg_erp"]).some((b) => Hs(r, b)), !(String(o.__panoPreviewMode || "") === "cutout" && !c) && (rg(o), (y = (g = o.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (x = o.setDirtyCanvas) == null || x.call(o, !0, !0), (M = (S = o.graph) == null ? void 0 : S.setDirtyCanvas) == null || M.call(S, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Us(e) {
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
function pS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function mS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: a, subfolder: o };
}
function gS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function bS(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (pS(t)) return [t];
  const { filename: n, subfolder: r } = mS(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((o) => Us({
    filename: n,
    subfolder: r,
    type: o
  }));
  return gS([...a, t]);
}
function yS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Us({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function yo(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Hs(o, a)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const c of o)
      if (Hs(c, a)) return t[c];
  }
  return null;
}
function Xu(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || yo(e == null ? void 0 : e.id), a = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(a) ? a[0] : a;
}
function _r(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return _r(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Us({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = _r(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Us(e);
}
function Nh(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function ng(e) {
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
function Uc(e, t) {
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
function vS(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((c) => t.push(c));
  }, a = (o, c = 0) => {
    !o || c > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), a(o.output, c + 1), a(o.ui, c + 1), a(o.data, c + 1), a(o.result, c + 1));
  };
  return a(e, 0), t;
}
function _S(e, t) {
  try {
    e.__panoOwnOutputRev = ex(e.__panoOwnOutputRev);
    const n = vS(t);
    let r = "";
    for (const a of n)
      if (r = _r(a), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Uc(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ya(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function Mh(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!sl(e, "background"))
    return ya(e), null;
  const a = yo(r), o = ix(a, t, _r);
  if (!o)
    return ya(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Uc(o, c), h = `${t.join("|")}:${f}`, g = e.__panoOwnOutputVideoCache;
  if (g != null && g.video && g.key === h) return g.video;
  ya(e);
  const y = ax({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: h, ...y }, y.video) : null;
}
function xS(e, t = []) {
  var g, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = tg(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), o = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), c = [.../* @__PURE__ */ new Set([...a, ...o])];
  for (const x of c) {
    const S = n[x], M = S == null ? void 0 : S.link;
    if (M == null) continue;
    const b = Zm(e.graph, M), { originId: O, originSlot: z } = Qm(b);
    if (O == null) continue;
    const L = eg(e, x, O);
    if (!L) continue;
    const P = Number(z || 0), $ = yo((L == null ? void 0 : L.id) ?? O), T = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (T.length) {
      const le = [];
      P >= 0 && P < T.length && le.push(T[P]), le.push(...T);
      for (const oe of le) {
        const I = _r(oe);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(L) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const le = [];
      P >= 0 && P < F.length && le.push(F[P]), le.push(...F);
      for (const oe of le) {
        const I = _r(oe);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const B = Array.isArray(L == null ? void 0 : L.imgs) ? L.imgs : [];
    if (B.length) {
      const le = [];
      P >= 0 && P < B.length && le.push(B[P]), le.push(...B);
      for (const oe of le) {
        const I = _r(oe);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const U = (g = L == null ? void 0 : L.widgets) == null ? void 0 : g.find((le) => String((le == null ? void 0 : le.name) || "").toLowerCase() === "image");
    if (U) {
      let le = _r(U.value);
      if (le && !le.includes("/") && !le.includes(":") && (L.comfyClass === "LoadImage" || L.type === "LoadImage") && (le = mn.apiURL(`/view?filename=${encodeURIComponent(le)}&type=input&subfolder=`)), le)
        return String((S == null ? void 0 : S.name) || ""), { src: le, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = sl(e, "background") ? yo(e == null ? void 0 : e.id) : null, h = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && h.push(...f.pano_input_images), Array.isArray((y = f == null ? void 0 : f.ui) == null ? void 0 : y.pano_input_images) && h.push(...f.ui.pano_input_images), h.length > 0)
    for (const x of h) {
      const S = _r(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function SS(e, t = [], n = {}) {
  const r = xS(e, t), a = String((r == null ? void 0 : r.src) || "").trim();
  if (!a) return null;
  const o = bS(a);
  if (!o.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", h = e.__panoLinkedInputImageCache.get(f);
  if (h && h.srcRaw === a && h.img) return h.img;
  if (h && h.pendingSrcRaw === a && h.pendingImg)
    return c && h.img && (h.img.complete || h.img.naturalWidth || h.img.width) ? h.img : h.pendingImg;
  const g = new Image(), y = h || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = a, y.pendingResolvedSrc = "", y.pendingImg = g, e.__panoLinkedInputImageCache.set(f, y);
  let x = -1;
  const S = () => {
    var b, O, z, L;
    if (x += 1, x >= o.length) {
      if (((O = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : O.call(b, f)) === y && y.pendingImg === g && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (L = (z = e.__panoLinkedInputImageCache) == null ? void 0 : z.delete) == null || L.call(z, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const M = o[x];
    y.pendingResolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M, b, O;
    ((b = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : b.call(M, f)) === y && y.pendingImg === g && (y.srcRaw = a, y.resolvedSrc = String(y.pendingResolvedSrc || g.src || ""), y.img = g, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || g.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
  }, g.onerror = (M) => {
    var b, O, z, L;
    if (x + 1 < o.length) {
      S();
      return;
    }
    if (((O = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : O.call(b, f)) === y && y.pendingImg === g && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (L = (z = e.__panoLinkedInputImageCache) == null ? void 0 : z.delete) == null || L.call(z, f);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, S(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : g;
}
function Ph(e, t = [], n = null, r = {}) {
  const a = SS(e, t, r);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function rg(e) {
  var t, n, r, a;
  if (e) {
    jc.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    try {
      (a = (r = e.__panoPreviewImageCache) == null ? void 0 : r.clear) == null || a.call(r);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function wS(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function kS(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function ig(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ya(e, t, n = "") {
  const r = ig(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < iS ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function du(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / a, f = r / o, h = Math.min(c, f);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function NS(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), g = Math.max(Math.round(34 * n), f + Math.round(14 * n)), y = r + (o - h) * 0.5, x = a + (c - g) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, x, h, g, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + h * 0.5, x + g * 0.5 + 0.5), e.restore();
}
function ea(e, t, n = "Connect ERP image") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Connect ERP image"), r.style.display = t ? "flex" : "none");
}
function MS(e) {
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
function PS(e, t) {
  return Ym(e, t);
}
function ag(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let o = yS(n);
  if (!o && (r != null && r.external)) {
    if (!sl(e, "external-sticker")) return null;
    const M = e.__panoLastExecutedOutput || yo(e == null ? void 0 : e.id), b = ((S = M == null ? void 0 : M.ui) == null ? void 0 : S.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const O of Array.isArray(b) ? b : [b])
      if (o = _r(O), o) break;
  }
  if (!o) return null;
  const c = Xu(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", h = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, g = r != null && r.external ? Uc(o, h) : o, y = tx(o, f, h);
  return jc.get(e, y, g, (M, b) => {
    var O, z;
    b && (r != null && r.external && eo(e, "image-loaded"), (z = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null || z.call(O));
  }) || null;
}
function AS(e, t) {
  return ol(t, {
    selectedId: null,
    hoveredId: null
  });
}
function CS(e, t, n) {
  return _m(
    t,
    (r, a, o) => ag(e, r, a, o),
    { scene: n }
  );
}
function IS(e, t) {
  var x, S, M, b;
  const n = FS(e, t), r = RS(t), a = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) ? t.painting.groups : [], o = new Map(
    a.filter((O) => O && typeof O == "object").map((O) => [String((O == null ? void 0 : O.actionGroupId) || (O == null ? void 0 : O.id) || "").trim(), Number((O == null ? void 0 : O.z_index) || 0)])
  ), c = n ? r.map((O) => {
    const z = n.getGroupDisplayCanvas(O);
    return z ? {
      id: `paint_group:${O}`,
      source: z,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${O}`,
      zIndex: Number(o.get(O) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (b = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || b.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = Q_()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var O, z;
    return (z = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : z.call(O);
  });
  const h = X_(t == null ? void 0 : t.output_preset), g = f.filter((O) => (O == null ? void 0 : O.visible) !== !1 && String((O == null ? void 0 : O.layerKind) || "paint") === "paint").map((O) => String((O == null ? void 0 : O.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(g);
  const y = f.map((O) => {
    const z = e.__panoRasterObjectSurfaceCache.get(
      O,
      h.width,
      h.height,
      e.__panoRasterObjectReady
    );
    return z ? {
      id: `raster:${String((O == null ? void 0 : O.id) || "")}`,
      source: z.source,
      revision: z.revision,
      zIndex: Number((O == null ? void 0 : O.z_index) || 0),
      opacity: 1,
      visible: (O == null ? void 0 : O.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function hu(e, t, n, r = "") {
  const a = AS(e, t), o = CS(e, t, a), c = IS(e, t), f = ng(n), h = sg(n), g = Ja({
    stateRevision: [
      "runtime_cutout_scene",
      f,
      h.width,
      h.height,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      String(r || ""),
      Array.isArray(o) ? o.map((y) => `${String((y == null ? void 0 : y.assetId) || "")}:${String((y == null ? void 0 : y.revision) || "")}`).join(",") : "",
      Array.isArray(c) ? c.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${String((y == null ? void 0 : y.revision) || "")}:${Number((y == null ? void 0 : y.zIndex) || 0)}`).join(",") : ""
    ].join("|"),
    backgroundSource: n,
    backgroundRevision: f,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: a,
    textures: o,
    rasterEntries: c,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = No()), e.__panoRuntimeCore.syncState(g), e.__panoRuntimeCore;
}
function og(e, t, n, r) {
  const a = fu(e, t.right), o = fu(e, t.up), c = fu(e, t.fwd);
  if (c <= 1e-4) return null;
  const f = o / c / r, h = a / c / r;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function TS(e, t, n, r) {
  var o, c, f, h, g, y;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const x = r.convertEventToCanvasOffset(t);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((h = e == null ? void 0 : e.pos) == null ? void 0 : h[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const a = DS(e, t, r);
  return a || null;
}
function ES(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), c = (t == null ? void 0 : t.ds) || ((S = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : S.ds);
  if (!o || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const h = Array.isArray(c.offset) ? c.offset : [0, 0], g = (n - Number(o.left || 0)) / f - Number(h[0] || 0), y = (r - Number(o.top || 0)) / f - Number(h[1] || 0);
  return !Number.isFinite(g) || !Number.isFinite(y) ? null : { x: g, y };
}
function DS(e, t, n) {
  var a, o;
  const r = ES(t, n || (Lt == null ? void 0 : Lt.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function OS(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function FS(e, t) {
  var g, y, x, S, M, b, O, z, L, P, $, T;
  const n = (y = (g = t == null ? void 0 : t.painting) == null ? void 0 : g.paint) == null ? void 0 : y.strokes, r = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!a && !o) return null;
  const c = OS(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Ou(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((b = t == null ? void 0 : t.painting) == null ? void 0 : b.raster_objects) || null
  };
  return (((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.paint) !== h.paint || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.mask) !== h.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== h.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== h.rasterObjects) && (e.__panoPreviewPaintRevision = h, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function RS(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function sg(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function LS(e, t, n, r) {
  const a = Hm(t, n, r);
  if (!a.visible) return null;
  const o = U_(t);
  return e.save(), $m(e, a.boundaryEdges, { selected: !0 }), zm(e, a, { accent: o }), e.restore(), a;
}
function $S(e, t, n, r = null) {
  var M, b, O, z, L, P, $, T, F, B, U, le, oe, I, Y, ie;
  const a = String(e.__panoPreviewMode || "stickers");
  ig(e, a);
  const o = Zn(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (O = (b = (M = e.__panoCutoutNodeSurface) == null ? void 0 : M.session) == null ? void 0 : b.refresh) == null || O.call(b)) : a === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (P = (L = (z = e.__panoStickersNodeSurface) == null ? void 0 : z.session) == null ? void 0 : L.refresh) == null || P.call(L));
  const c = t.parentElement, f = 1, h = Math.max(1, Number((c == null ? void 0 : c.clientWidth) || t.clientWidth || 0)), g = Math.max(1, Number((c == null ? void 0 : c.clientHeight) || t.clientHeight || 0)), y = Math.max(64, Math.round(h * f)), x = Math.max(64, Math.round(g * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const J = MS(o), he = Mh(
        e,
        ["pano_input_videos"],
        () => {
          var We, je;
          return (je = (We = e.__panoDomPreview) == null ? void 0 : We.requestDraw) == null ? void 0 : je.call(We);
        }
      ) || Ph(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var We, je;
          return (je = (We = e.__panoDomPreview) == null ? void 0 : We.requestDraw) == null ? void 0 : je.call(We);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = Nh(he);
      (t.width !== y || t.height !== x) && (t.width = y, t.height = x);
      const ke = { x: 0, y: 0, w: y, h: x }, A = sg(he), we = fe ? W(Number(A.width / A.height), 0.05, 20) : 1, Ce = J ? Sr(J) : null, Me = W(Number((Ce == null ? void 0 : Ce.aspect) || we || 1), 0.05, 20), G = Dc(ke, Me);
      e.__panoCutoutNodeFrame = G, du(t, ke), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, y, x);
      let Ve = "none", mt = "Connect ERP image", et = "";
      if (et = String((he == null ? void 0 : he.currentSrc) || (he == null ? void 0 : he.src) || ""), J)
        if (he && !fe)
          Ve = "loading";
        else if (fe) {
          const We = hu(e, o, he, (J == null ? void 0 : J.id) || ""), je = d_({ width: y, height: x }, G, J), Yt = je.rect, An = Sr(je.shot);
          let vn = !0;
          if (je.fallback) {
            const R = je.fallback.rect, j = Sr(je.fallback.shot);
            vn = We.renderToContext(
              S,
              R,
              j,
              { width: R.w, height: R.h, dpr: 1 }
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
            G,
            Sr(J),
            { width: G.w, height: G.h, dpr: 1 }
          )), (!vn || !nn || !sn) && (Ve = "empty", mt = "Open editor or run node");
        } else
          Ve = "empty", mt = "Connect ERP image";
      else {
        const We = e.__panoLastCutoutShot;
        if (We ? (e.__panoPreviewView = Nm(We, { width: y, height: x }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), fe) {
          const je = hu(e, o, he, "zero_shot_viewer"), Yt = ((T = ($ = r == null ? void 0 : r.state) == null ? void 0 : $.drag) == null ? void 0 : T.active) === !0 || ((B = (F = r == null ? void 0 : r.state) == null ? void 0 : F.inertia) == null ? void 0 : B.active) === !0 ? 0.5 : 1;
          je.renderToContext(
            S,
            ke,
            go(e.__panoPreviewView, o == null ? void 0 : o.coverage),
            { width: ke.w, height: ke.h, dpr: 1, renderScale: Yt }
          ) || (Ve = "empty", mt = "Open editor or run node");
        } else he ? Ve = "loading" : (Ve = "empty", mt = "Connect ERP image");
      }
      J && (e.__panoLastCutoutShot = { ...J }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, y, x), S.rect(G.x, G.y, G.w, G.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(G.x + 0.5, G.y + 0.5, Math.max(0, G.w - 1), Math.max(0, G.h - 1)), S.restore()), Ve === "loading" ? (ea(e, !1), Ya(e, !0, et)) : Ve === "empty" ? (ea(e, !0, mt), Ya(e, !1, "")) : (ea(e, !1), Ya(e, !1, ""));
    } else {
      ea(e, !1), (t.width !== y || t.height !== x) && (t.width = y, t.height = x);
      const J = { x: 0, y: 0, w: y, h: x };
      S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, y, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const he = Mh(
        e,
        ["pano_input_videos"],
        () => {
          var Ce, Me;
          return (Me = (Ce = e.__panoDomPreview) == null ? void 0 : Ce.requestDraw) == null ? void 0 : Me.call(Ce);
        }
      ) || Ph(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Ce, Me;
          return (Me = (Ce = e.__panoDomPreview) == null ? void 0 : Ce.requestDraw) == null ? void 0 : Me.call(Ce);
        },
        { preserveReadyWhilePending: !1 }
      ), fe = he || null, ke = !he || Nh(fe), A = go(e.__panoPreviewView, o == null ? void 0 : o.coverage);
      let we = !1;
      if (ke) {
        const Me = hu(e, o, fe, he ? "stickers_surface|background:input" : "stickers_surface|background:none"), G = US(e) || ((le = (U = r == null ? void 0 : r.state) == null ? void 0 : U.drag) == null ? void 0 : le.active) === !0 || ((I = (oe = r == null ? void 0 : r.state) == null ? void 0 : oe.inertia) == null ? void 0 : I.active) === !0 || ((Y = e.__panoStickerDrag) == null ? void 0 : Y.active) === !0;
        we = Me.renderToContext(
          S,
          J,
          A,
          { width: J.w, height: J.h, dpr: 1, renderScale: G ? 0.5 : 1 }
        );
      }
      if (ke && we)
        Ya(e, !1, "");
      else {
        const Ce = !!he && !ke;
        Ya(e, Ce, String((fe == null ? void 0 : fe.currentSrc) || (fe == null ? void 0 : fe.src) || "")), Ce && NS(S, J, du(t, J)), ea(e, !1);
      }
      if (!he && we) {
        const Ce = W(Number(A.fovDeg || 100), 1, 179) * Qx, Me = Math.tan(Ce * 0.5) * (J.h / Math.max(1, J.w)), G = Ln(Number(A.yawDeg || 0), Number(A.pitchDeg || 0), 0);
        VS(S, J, G, Me, du(t, J));
      }
      if (we) {
        ea(e, !1);
        const Ce = String(((ie = o == null ? void 0 : o.active) == null ? void 0 : ie.selected_sticker_id) || ""), Me = (Array.isArray(o == null ? void 0 : o.stickers) ? o.stickers : []).find((G) => String((G == null ? void 0 : G.id) || "") === Ce && (G == null ? void 0 : G.visible) !== !1);
        e.__panoSelectedStickerGeometry = Me ? LS(S, Me, A, { width: y, height: x }) : null;
      } else
        e.__panoSelectedStickerGeometry = null;
    }
}
function zS(e, t, n, r, a, o, c = tS) {
  const f = Zn(e), h = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = No());
  const g = ng(o), y = um({
    stateRevision: [
      "runtime_bg_only",
      g,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: o,
    backgroundRevision: g,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(y)) return;
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
function Ah(e, t, n, r, a, o, c = 1) {
  let f = !1;
  e.strokeStyle = o, e.lineWidth = c, e.beginPath();
  for (const h of t) {
    const g = og(h, n, r, a);
    if (!g) {
      f = !1;
      continue;
    }
    f ? e.lineTo(g.x, g.y) : (e.moveTo(g.x, g.y), f = !0);
  }
  e.stroke();
}
function VS(e, t, n, r, a = 1) {
  e.save();
  const o = "#3f3f46", c = "rgba(250, 250, 250, 0.86)";
  for (let g = -75; g <= 75; g += 15) {
    const y = [];
    for (let x = -180; x <= 180; x += 4) y.push(Rn(x, g));
    Ah(e, y, n, t, r, g === 0 ? c : o, g === 0 ? 1.5 : 1);
  }
  for (let g = -180; g <= 180; g += 15) {
    const y = [];
    for (let x = -89; x <= 89; x += 4) y.push(Rn(g, x));
    Ah(e, y, n, t, r, o, g % 90 === 0 ? 1.3 : 1);
  }
  const f = [
    { name: "Front", dir: Rn(0, 0) },
    { name: "Right", dir: Rn(90, 0) },
    { name: "Back", dir: Rn(180, 0) },
    { name: "Left", dir: Rn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const h = Math.max(9, Math.round(11 * a));
  e.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((g) => {
    const y = og(g.dir, n, t, r);
    y && e.fillText(g.name, y.x, y.y + 24 * a);
  }), e.restore();
}
function jS(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function HS(e) {
  const t = jS(e);
  t.dragging = !1, t.hqFrames = nS;
}
function Ju(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function US(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Zu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function GS(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && o >= r.height - n;
}
function qn(e, t) {
  return GS(e, t) ? !1 : (Zu(e), !0);
}
function Ch() {
  var n;
  const e = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function BS(e) {
  var n;
  if (!e) return;
  const t = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function KS(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !qm(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function WS(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, c;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Ih(e, t = null, n = 0, r = 0, a = !0) {
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
      e.__panoUserResized = !0, Ju(e, 150), t == null || t(), a && YS(e, 180, t);
    }
  };
}
function YS(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function qa(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function qS(e, t = {}) {
  var _n;
  const n = t.__allowStandalone === !0, r = Xm(e);
  if (r && !n) {
    Hc(e);
    return;
  }
  r && KS(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), String(t.__panoForcedPath || "").trim();
  const c = {
    signature: wh(e)
  }, f = "dom", h = c.signature || wh(e);
  if (Number(e.__panoRebindGeneration || 0), Yu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Wu(e), e.__panoFrontendSig = h, e.__panoStickersPath = f, (_n = e.__panoDomPreview) != null && _n.widget || (e.__panoLegacyPreviewHooked && ks(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const g = t.noPreview === !0, y = g ? 0 : 56, x = g ? 0 : l_, S = document.createElement("div");
  if (oS(), S.className = "pano-node-preview-dom", S.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), g && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
    "width:100%",
    g ? "height:auto" : "height:100%",
    x > 0 ? `min-height:${x}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), g) {
    const V = js(Bu(
      e.addDOMWidget(Ku(), "preview", S, Ih(e, null))
    ));
    qa(e), e.__panoDomPreview = { widget: V, root: S, requestDraw: () => {
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
  ].join(";"), O.textContent = "Connect ERP image", M.appendChild(b), M.appendChild(O), S.appendChild(M);
  const z = fm(S), L = document.createElement("div");
  L && (L.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", L.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(L)), sS(e, 120, 120), qa(e);
  let P = null;
  try {
    WS(e, y, () => {
      var V, me;
      return (me = (V = e.__panoDomPreview) == null ? void 0 : V.requestDraw) == null ? void 0 : me.call(V);
    }), P = js(Bu(e.addDOMWidget(
      Ku(),
      "preview",
      S,
      Ih(
        e,
        () => {
          var V, me;
          return (me = (V = e.__panoDomPreview) == null ? void 0 : V.requestDraw) == null ? void 0 : me.call(V);
        },
        y,
        x,
        !1
      )
    )));
  } catch {
    return;
  }
  const $ = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    $.destroyed || ($.needsDraw = !0, !$.inTick && !$.raf && ($.raf = requestAnimationFrame(mt)));
  }, F = /* @__PURE__ */ Ma(a ? { ...Lm(Zn(e)), importing: !1, dropActive: !1 } : {
    ...wm(Zn(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((V) => ({ value: V, label: V }))
  });
  let B = null;
  const U = (a ? H_ : p_)({
    readState: () => Zn(e),
    publishLiveState: (V) => {
      V ? (B = V, e.__panoLiveStateOverride = V) : (e.__panoLiveStateOverride === B && (e.__panoLiveStateOverride = null), B = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: (V) => {
      var re, it, He, bt;
      const me = ba(e, "state_json");
      if (!me) return;
      const Te = JSON.stringify(V);
      me.value = Te, (re = me.callback) == null || re.call(me, Te), e.__panoStateCache = null, (it = e.setDirtyCanvas) == null || it.call(e, !0, !0), (bt = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || bt.call(He, !0, !0);
    },
    onChange: (V) => Object.assign(F, V)
  }), le = (V = "sync", me = null) => {
    if (!a || !U || U.hasGestureChanges()) return !1;
    const Te = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((Sn) => String((Sn == null ? void 0 : Sn.name) || "") === "sticker_image") : null, re = (Te == null ? void 0 : Te.link) ?? null;
    if (re == null)
      return U.apply({ type: "sync-external", value: { connected: !1 } });
    if (!sl(e, "external-sticker")) return !1;
    const it = Xu(e, "pano_sticker_input_pose", me), He = Array.isArray(it) ? it[0] : it, bt = String(Xu(e, "pano_sticker_input_state_hash", me) ?? ""), Ot = e.__panoPreviewView || { yaw: 0, pitch: 0 }, qt = Zn(e), ln = (Array.isArray(qt == null ? void 0 : qt.stickers) ? qt.stickers : []).find((Sn) => String((Sn == null ? void 0 : Sn.id) || "") === "sticker_image_1"), Dt = ag(e, "sticker_image_1", null, { external: !0 }), ci = He && typeof He == "object" ? He : ln || { yaw_deg: Ot.yaw, pitch_deg: Ot.pitch, hFOV_deg: 30, rot_deg: 0 };
    return U.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: re,
        stateHash: bt,
        pose: ci,
        imageWidth: Number((Dt == null ? void 0 : Dt.naturalWidth) || (Dt == null ? void 0 : Dt.width) || 0),
        imageHeight: Number((Dt == null ? void 0 : Dt.naturalHeight) || (Dt == null ? void 0 : Dt.height) || 0)
      }
    });
  }, oe = a ? Wm(e, le) : () => {
  };
  let I = 0;
  const Y = async (V) => {
    if (!a || !U || !kr(V)) return !1;
    const me = `asset_${Math.random().toString(16).slice(2, 10)}`, Te = `st_${Math.random().toString(16).slice(2, 10)}`, re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    I += 1, F.importing = !0;
    const it = Uu(e, `add:${me}`, async () => {
      const He = await Gu(V), bt = await ws(V, {
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
    var V;
    return he && (clearTimeout(he), he = null), fe ? (fe = !1, ((V = U == null ? void 0 : U.commitGesture) == null ? void 0 : V.call(U)) ?? !1) : !1;
  }, A = () => {
    var re, it, He;
    const V = ke(), me = (ie == null ? void 0 : ie.pointerId) ?? (J == null ? void 0 : J.pointerId);
    if (ie = null, J = null, e.__panoStickerDrag = null, me != null) {
      try {
        (re = b.hasPointerCapture) != null && re.call(b, me) && ((it = b.releasePointerCapture) == null || it.call(b, me));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Te = ((He = U == null ? void 0 : U.commitGesture) == null ? void 0 : He.call(U)) ?? !1;
    return V || Te;
  }, we = () => {
    var re, it, He;
    const V = ke(), me = ie == null ? void 0 : ie.pointerId;
    if (ie = null, e.__panoStickerDrag = null, me != null) {
      try {
        (re = b.hasPointerCapture) != null && re.call(b, me) && ((it = b.releasePointerCapture) == null || it.call(b, me));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Te = ((He = U == null ? void 0 : U.cancelGesture) == null ? void 0 : He.call(U)) ?? !1;
    return V || Te;
  }, Ce = () => A();
  U && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Ce));
  let Me = null, G = !1;
  if (L && U)
    try {
      Lc(), Me = xc(a ? $_ : T_, {
        model: F,
        onAction: (V) => {
          var re, it;
          if ((V == null ? void 0 : V.type) === "open-editor") {
            A(), a || (F.aspectOpen = !1), (re = e.__panoOpenEditor) == null || re.call(e);
            return;
          }
          if (a) {
            if ((V == null ? void 0 : V.type) === "add-image-file") {
              Y(V.file);
              return;
            }
            U.apply(V) && T();
            return;
          }
          if ((V == null ? void 0 : V.type) === "toggle-aspect") {
            F.aspectOpen = !F.aspectOpen;
            return;
          }
          if ((V == null ? void 0 : V.type) === "close-aspect") {
            F.aspectOpen = !1;
            return;
          }
          let me = V;
          if ((V == null ? void 0 : V.type) === "add-frame") {
            const He = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            me = {
              ...V,
              ...c_(He, {
                width: b.width,
                height: b.height
              })
            };
          } else if ((V == null ? void 0 : V.type) === "delete-frame") {
            const He = Ii(Zn(e));
            He && (e.__panoPreviewView = Nm(He, {
              width: b.width,
              height: b.height
            }));
          }
          const Te = ((it = e.__panoCutoutNodeFrame) == null ? void 0 : it.safeRect) || null;
          F.aspectOpen = !1, U.apply({ ...me, safeRect: Te }) && T();
        }
      }), Me.mount(L), G = !0;
    } catch {
      Me = null, G = !1;
    }
  const Ve = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Ju(e, 150), T();
  }) : null;
  Ve == null || Ve.observe(M);
  const mt = (V) => {
    var Te, re;
    $.raf = 0, $.inTick = !0;
    let me = !1;
    try {
      me = et.stepInertia(V), ($.needsDraw || me) && ($.needsDraw = !1, (Te = e.flags) != null && Te.collapsed || $S(e, b, null, et));
    } finally {
      $.inTick = !1;
    }
    (me || $.needsDraw) && !$.raf && ($.raf = requestAnimationFrame(mt)), aS() && (!e.__panoDebugLastTs || V - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = V, e.__panoPreviewMode, Wu(e), Wa(S), Wa(M), Wa(b), Wa(S.parentElement), Wa((re = S.parentElement) == null ? void 0 : re.parentElement), Number(b.width || 0), Number(b.height || 0), void 0);
  }, et = Cc({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (V) => {
      e.__panoPreviewView = V;
    },
    getViewportSize: () => {
      const V = b.getBoundingClientRect();
      return {
        w: Math.max(1, Number(V.width || b.clientWidth || 0)),
        h: Math.max(1, Number(V.height || b.clientHeight || 0))
      };
    },
    getInvert: () => {
      const V = Sh();
      return {
        x: V.invert_view_x ? -1 : 1,
        y: V.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), We = a ? M : S, je = (V) => {
    const me = b.getBoundingClientRect();
    return {
      x: (Number(V.clientX) - me.left) * (b.width / Math.max(1, me.width)),
      y: (Number(V.clientY) - me.top) * (b.height / Math.max(1, me.height))
    };
  }, Yt = (V) => {
    var re, it;
    if (!a || !o) return;
    const me = Zn(e), Te = fh(
      me == null ? void 0 : me.stickers,
      String(((re = me == null ? void 0 : me.active) == null ? void 0 : re.selected_sticker_id) || ""),
      je(V),
      go(e.__panoPreviewView, me == null ? void 0 : me.coverage),
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
  b.addEventListener("pointerdown", (V) => {
    var bt, Ot, qt, ln, Dt, ci, xn, Sn, Pa, Aa, Ca;
    if (!qn(V, We) || V.button !== 0) return;
    if (!a) {
      const Cn = Ii(Zn(e)), Wn = e.__panoCutoutNodeFrame;
      if (!Cn) {
        (bt = S.focus) == null || bt.call(S, { preventScroll: !0 }), (Ot = b.setPointerCapture) == null || Ot.call(b, V.pointerId), b.style.cursor = "grabbing", et.startDrag(V.clientX, V.clientY, V.pointerId);
        return;
      }
      if (Cn.locked === !0 || !Wn || !U) return;
      const Mo = je(V);
      let fi;
      if (V.shiftKey) {
        const $n = Pm({
          frame: Wn,
          point: Mo,
          startRollDeg: Number(Cn.roll_deg ?? Cn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!$n) return;
        fi = { kind: "roll", pointerId: V.pointerId, rollGesture: $n };
      } else {
        const $n = ((qt = Zn(e)) == null ? void 0 : qt.ui_settings) || Sh();
        fi = {
          kind: "pan",
          pointerId: V.pointerId,
          startPoint: Mo,
          startShot: { ...Cn },
          focalPx: Ai(Wn, Cn),
          invertX: $n.invert_view_x === !0,
          invertY: $n.invert_view_y === !0
        };
      }
      A(), (ln = S.focus) == null || ln.call(S, { preventScroll: !0 }), (Dt = b.setPointerCapture) == null || Dt.call(b, V.pointerId), b.style.cursor = "grabbing", U.beginGesture(), ie = fi;
      return;
    }
    if (!o) return;
    const me = je(V), Te = Zn(e), re = String(((ci = Te == null ? void 0 : Te.active) == null ? void 0 : ci.selected_sticker_id) || ""), it = go(e.__panoPreviewView, Te == null ? void 0 : Te.coverage), He = fh(
      Te == null ? void 0 : Te.stickers,
      re,
      me,
      it,
      { width: b.width, height: b.height }
    );
    if ((xn = S.focus) == null || xn.call(S, { preventScroll: !0 }), He && U) {
      if (et.stopMotion(), A(), String(((Sn = He.item) == null ? void 0 : Sn.id) || "") !== re && U.apply({ type: "select-sticker", id: He.item.id }), ((Pa = He.item) == null ? void 0 : Pa.locked) === !0) {
        T();
        return;
      }
      const Cn = me, Wn = He.geometry.center;
      J = {
        active: !0,
        kind: He.hit.kind,
        pointerId: V.pointerId,
        startPoint: Cn,
        startCenter: { ...Wn },
        startSticker: { ...He.item },
        startDistance: Math.max(1, Math.hypot(Cn.x - Wn.x, Cn.y - Wn.y)),
        startAngle: Math.atan2(Cn.y - Wn.y, Cn.x - Wn.x),
        camera: it,
        viewport: { width: b.width, height: b.height }
      }, e.__panoStickerDrag = J, U.beginGesture(), (Aa = b.setPointerCapture) == null || Aa.call(b, V.pointerId), b.style.cursor = He.hit.kind === "rotate" ? "grabbing" : He.hit.kind === "move" ? "move" : He.hit.cursor, T();
      return;
    }
    (Ca = b.setPointerCapture) == null || Ca.call(b, V.pointerId), b.style.cursor = "grabbing", et.startDrag(V.clientX, V.clientY, V.pointerId);
  }), b.addEventListener("pointermove", (V) => {
    if (!a) {
      if (!ie) {
        if (!et.state.drag.active) return;
        qn(V, We), et.moveDrag(V.clientX, V.clientY, "pano");
        return;
      }
      if (ie.pointerId !== V.pointerId || !U) return;
      if (qn(V, We), ie.kind === "pan") {
        const Te = je(V);
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
      const me = Am(ie.rollGesture, je(V), V);
      if (!me) return;
      ie.rollGesture = me.gesture, U.updateGesture({ type: "set-roll", value: me.rollDeg });
      return;
    }
    if (!J && !et.state.drag.active) {
      Yt(V);
      return;
    }
    if (J) {
      if (J.pointerId !== V.pointerId || !U) return;
      qn(V, We);
      const me = je(V);
      let Te = J.startSticker;
      if (J.kind === "move")
        Te = W_(
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
        Te = Y_(J.startSticker, J.startDistance, re);
      } else if (J.kind === "rotate") {
        const re = Math.atan2(me.y - J.startCenter.y, me.x - J.startCenter.x);
        Te = q_(J.startSticker, J.startAngle, re, V.shiftKey === !0);
      }
      U.updateGesture({ type: "set-transform", value: Te }), T();
      return;
    }
    !o || !et.state.drag.active || (qn(V, We), et.moveDrag(V.clientX, V.clientY, "pano"));
  });
  const An = () => {
    var me, Te;
    if (!ie && !J) {
      if (!et.state.drag.active) return;
      et.endDrag(), b.style.cursor = "grab", T();
      return;
    }
    if (!U) return;
    const V = (ie == null ? void 0 : ie.pointerId) ?? (J == null ? void 0 : J.pointerId);
    ie = null, J = null, e.__panoStickerDrag = null;
    try {
      (me = b.hasPointerCapture) != null && me.call(b, V) && ((Te = b.releasePointerCapture) == null || Te.call(b, V));
    } catch {
    }
    U.cancelGesture(), b.style.cursor = "grab", T();
  }, vn = (V, me = !1) => {
    var Te, re, it, He;
    if (!a) {
      if (!ie) {
        if (!et.state.drag.active) return;
        qn(V, We), (Te = b.releasePointerCapture) == null || Te.call(b, V.pointerId), b.style.cursor = "grab", et.endDrag(), T();
        return;
      }
      if (ie.pointerId !== V.pointerId || !U) return;
      qn(V, We), ie = null, (re = b.releasePointerCapture) == null || re.call(b, V.pointerId), b.style.cursor = "grab", me ? U.cancelGesture() : U.commitGesture(), Yt(V), T();
      return;
    }
    if (J) {
      if (J.pointerId !== V.pointerId || !U) return;
      qn(V, We), J = null, e.__panoStickerDrag = null, (it = b.releasePointerCapture) == null || it.call(b, V.pointerId), b.style.cursor = "grab", me ? U.cancelGesture() : U.commitGesture(), T();
      return;
    }
    !o || !et.state.drag.active || (qn(V, We), (He = b.releasePointerCapture) == null || He.call(b, V.pointerId), b.style.cursor = "grab", et.endDrag(), HS(e), T());
  };
  b.addEventListener("pointerup", vn), b.addEventListener("pointercancel", (V) => vn(V, !0)), b.addEventListener("lostpointercapture", An), b.addEventListener("pointerleave", (V) => {
    !a && ie || J || et.state.drag.active && vn(V);
  });
  const nn = (V) => {
    const me = document.activeElement;
    if (me !== S && !S.contains(me)) return;
    if (V.key === "Escape" && (ie || J) && U) {
      An(), Zu(V);
      return;
    }
    if (!a || V.key !== "Delete" && V.key !== "Backspace" || !U) return;
    const Te = V.target, re = String((Te == null ? void 0 : Te.tagName) || "").toUpperCase();
    re === "INPUT" || re === "TEXTAREA" || Te != null && Te.isContentEditable || F.canDelete === !0 && (A(), U.apply({ type: "delete-selected" }) && T(), Zu(V));
  };
  window.addEventListener("keydown", nn, !0);
  const sn = Zx({
    requestFrame: (V) => requestAnimationFrame(V),
    cancelFrame: (V) => cancelAnimationFrame(V),
    restore: (V) => BS(V)
  }), R = (V) => {
    var Te, re, it, He, bt, Ot;
    if (!qn(V, We)) return;
    if (!a) {
      const qt = Ii(Zn(e));
      if (qt && qt.locked !== !0 && U) {
        const ln = Ac(V);
        ln !== 0 && (fe || (A(), U.beginGesture(), fe = !0), U.updateGesture({
          type: "step-fov",
          direction: ln
        }) ? (he && clearTimeout(he), he = setTimeout(ke, 180), T()) : U.hasGestureChanges() || (U.cancelGesture(), fe = !1));
      } else if (!qt) {
        const ln = Ch();
        et.applyWheelEvent(V) && T(), sn.schedule(ln);
      }
      (Te = V.preventDefault) == null || Te.call(V), (re = V.stopPropagation) == null || re.call(V), (it = V.stopImmediatePropagation) == null || it.call(V);
      return;
    }
    if (!o) return;
    const me = Ch();
    et.applyWheelEvent(V) && T(), (He = V.preventDefault) == null || He.call(V), (bt = V.stopPropagation) == null || bt.call(V), (Ot = V.stopImmediatePropagation) == null || Ot.call(V), sn.schedule(me);
  }, j = a ? [M, b] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((V) => {
    j.forEach((me) => me.addEventListener(V, R, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((V) => {
    b.addEventListener(V, (me) => qn(me, We)), M.addEventListener(V, (me) => qn(me, We));
  });
  const te = ba(e, "state_json");
  let _e = null, pe = null;
  te && !te.__panoPreviewPatchedCb && (_e = te.callback, pe = (V) => {
    const me = _e ? _e(V) : void 0;
    return T(), me;
  }, te.callback = pe, te.__panoPreviewPatchedCb = pe);
  const D = ba(e, "bg_color");
  let Q = null, ee = null;
  D && !D.__panoPreviewPatchedCb && (Q = D.callback, ee = (V) => {
    const me = Q ? Q(V) : void 0;
    return T(), me;
  }, D.callback = ee, D.__panoPreviewPatchedCb = ee);
  const de = e.onRemoved, ne = e.onResize, Pe = e.onExecuted, ve = e.onDragOver, Ie = e.onDragDrop;
  let d = null;
  const Oe = () => {
    a && (F.dropActive = !0, d && clearTimeout(d), d = setTimeout(() => {
      d = null, F.dropActive = !1;
    }, 140));
  }, Le = a ? function(V) {
    return (ve ? ve.apply(this, arguments) : !1) === !0 ? !0 : Vc(V == null ? void 0 : V.dataTransfer) ? (Oe(), !0) : !1;
  } : null, Ge = a ? function(V) {
    var re;
    if ((Ie ? Ie.apply(this, arguments) : !1) === !0) return !0;
    const Te = Array.from(((re = V == null ? void 0 : V.dataTransfer) == null ? void 0 : re.files) || []).find((it) => kr(it));
    return Te ? (d && clearTimeout(d), d = null, F.dropActive = !1, Y(Te), !0) : !1;
  } : null;
  a && (e.onDragOver = Le, e.onDragDrop = Ge);
  const Ze = a ? Jx(S, {
    onActive: (V) => {
      if (V) {
        Oe();
        return;
      }
      d && clearTimeout(d), d = null, F.dropActive = !1;
    },
    onDrop: (V) => {
      Y(V);
    }
  }) : () => {
  }, gt = function(V) {
    _S(e, V), e.__panoLastExecutedOutput = V || null, rg(e), rx(e), le("executed", V), qa(e), T();
    const me = Pe ? Pe.apply(this, arguments) : void 0;
    return qa(e), me;
  };
  e.onExecuted = gt;
  const rt = e.onConnectionsChange, ae = function(V, me) {
    const Te = hh(e, V, me, ["sticker_image"]), re = hh(
      e,
      V,
      me,
      ["erp_image", "bg_erp"]
    ), it = arguments, He = rt ? rt.apply(this, it) : void 0, bt = () => {
      $.destroyed || ((re || Te) && (re && (dh(e, "background"), wS(e)), Te && (dh(e, "external-sticker"), e.__panoLastExecutedOutput = null, kS(e))), Te && le("connection-change"), qa(e), T());
    };
    return bt(), queueMicrotask(bt), He;
  };
  e.onConnectionsChange = ae;
  const Et = function() {
    const V = ne ? ne.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Ju(this, 150), T(), V;
  };
  e.onResize = Et;
  const er = function() {
    return at(), qu.unregister(this), de ? de.apply(this, arguments) : void 0;
  };
  e.onRemoved = er;
  const at = () => {
    var V, me, Te, re, it, He, bt, Ot, qt, ln, Dt;
    $.destroyed = !0, (V = Ve == null ? void 0 : Ve.disconnect) == null || V.call(Ve), a ? A() : we(), b.removeEventListener("lostpointercapture", An), Ze(), z(), window.removeEventListener("keydown", nn, !0), (Te = (me = e.__panoStateFlushers) == null ? void 0 : me.delete) == null || Te.call(me, Ce), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (re = U == null ? void 0 : U.destroy) == null || re.call(U), (it = Me == null ? void 0 : Me.unmount) == null || it.call(Me), (bt = (He = e.__panoRuntimeCore) == null ? void 0 : He.dispose) == null || bt.call(He), e.__panoRuntimeCore = null, (qt = (Ot = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ot.dispose) == null || qt.call(Ot), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, oe(), sn.dispose(), d && clearTimeout(d), d = null, jc.disposeOwner(e), ya(e), $.raf && cancelAnimationFrame($.raf), $.raf = 0, ((ln = e.__panoCutoutNodeSurface) == null ? void 0 : ln.session) === U && (e.__panoCutoutNodeSurface = null), ((Dt = e.__panoStickersNodeSurface) == null ? void 0 : Dt.session) === U && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Et && (e.onResize = ne), e.onExecuted === gt && (e.onExecuted = Pe), e.onConnectionsChange === ae && (e.onConnectionsChange = rt), pe && (te == null ? void 0 : te.callback) === pe && (te.callback = _e), pe && (te == null ? void 0 : te.__panoPreviewPatchedCb) === pe && delete te.__panoPreviewPatchedCb, ee && (D == null ? void 0 : D.callback) === ee && (D.callback = Q), ee && (D == null ? void 0 : D.__panoPreviewPatchedCb) === ee && delete D.__panoPreviewPatchedCb, e.onDragOver === Le && (e.onDragOver = ve), e.onDragDrop === Ge && (e.onDragDrop = Ie), e.onRemoved === er && (e.onRemoved = de);
  };
  e.__panoDomRestore = at, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = U && G && !a ? { session: U, model: F } : null, e.__panoStickersNodeSurface = U && G && a ? { session: U, model: F } : null, e.__panoDomPreview = {
    widget: P,
    root: S,
    canvas: b,
    requestDraw: T,
    state: $,
    emptyHintEl: O,
    nodeSurface: e.__panoCutoutNodeSurface
  }, qu.register(e), le("attach"), T();
}
function Th(e, t = {}) {
  Jm(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Eh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Xm(e) && !n) {
    Hc(e);
    return;
  }
  Jm(e).attach(t);
}
function XS(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function JS(e, t = 1, n = Du) {
  const r = Number(t), a = Number.isFinite(r) && r > 0 ? r : 1, o = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(o) ? o : 0) * a, h = Math.max(0, Number.isFinite(c) ? c : 0) * a, g = Number(n), y = Number.isFinite(g) && g > 0 ? g : Du, x = Math.max(f, h), S = x > 0 ? Math.min(1, y / x) : 1;
  return {
    width: Math.max(1, Math.round(f * S)),
    height: Math.max(1, Math.round(h * S))
  };
}
function ZS({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const a = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let c = !1, f = null;
  const h = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, g = () => {
    const b = h();
    return b === f || (f = b, a(b)), b;
  }, y = () => g();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", y), g(), { toggle: async () => {
    var b;
    if (c || !e || !t) return !1;
    if (h()) {
      try {
        await ((b = t.exitFullscreen) == null ? void 0 : b.call(t));
      } catch {
      }
      return c ? !1 : (g(), h());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), c) return !1;
        if (h())
          return g(), !0;
      } catch {
      }
    return c || (o(), g()), !1;
  }, isActive: h, destroy: () => {
    var b, O, z;
    if (!c) {
      if (c = !0, (b = t == null ? void 0 : t.removeEventListener) == null || b.call(t, "fullscreenchange", y), h())
        try {
          const L = (O = t.exitFullscreen) == null ? void 0 : O.call(t);
          (z = L == null ? void 0 : L.catch) == null || z.call(L, () => {
          });
        } catch {
        }
      f = !1, a(!1);
    }
  } };
}
const QS = { class: "pano-preview-node-surface" }, ew = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Ne(), Ae("div", QS, [
      ze(tn, {
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
}, es = 140, tw = 180, Dh = 40, pu = 10;
function Oh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Fh(e, t) {
  const n = Oh(e), r = Oh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Rh(e) {
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
function va(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return va(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Rh({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = va(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Rh(e);
}
function lg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function nw(e) {
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
function Qu(e) {
  var a;
  const t = (a = sr) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Fh(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Fh(o, n)) return t[o];
  return null;
}
function rw(e) {
  var r, a;
  const t = Qu(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const c of o) {
        const f = va(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function iw(e, t = "erp_image") {
  var b, O, z, L, P, $, T, F, B, U, le, oe;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((I) => String((I == null ? void 0 : I.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const I = n.find((Y) => String((Y == null ? void 0 : Y.type) || "").toUpperCase() === "IMAGE" && (Y == null ? void 0 : Y.link) != null);
    (I == null ? void 0 : I.link) != null && (r = I.link);
  }
  if (r == null) return "";
  const o = ((O = (b = e == null ? void 0 : e.graph) == null ? void 0 : b.links) == null ? void 0 : O[r]) || ((P = (L = (z = sr) == null ? void 0 : z.graph) == null ? void 0 : L.links) == null ? void 0 : P[r]);
  if (!o) return "";
  const c = Number(o.origin_id);
  if (!Number.isFinite(c)) return "";
  const f = (F = (T = ($ = sr) == null ? void 0 : $.graph) == null ? void 0 : T.getNodeById) == null ? void 0 : F.call(T, c), h = Qu(c), g = Qu(e == null ? void 0 : e.id), y = [
    (B = g == null ? void 0 : g.ui) == null ? void 0 : B.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    h == null ? void 0 : h.images,
    (U = h == null ? void 0 : h.ui) == null ? void 0 : U.pano_input_images,
    h == null ? void 0 : h.pano_input_images
  ];
  for (const I of y)
    if (Array.isArray(I))
      for (const Y of I) {
        const ie = va(Y);
        if (ie) return ie;
      }
  let x = [];
  try {
    x = typeof ((le = sr) == null ? void 0 : le.getNodeImageUrls) == "function" ? sr.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const I of x) {
      const Y = va(I);
      if (Y) return Y;
    }
  if (f) {
    const I = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const Y of I) {
      const ie = va(Y);
      if (ie) return ie;
    }
  }
  const S = (oe = f == null ? void 0 : f.widgets) == null ? void 0 : oe.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image"), M = String((S == null ? void 0 : S.value) || "").trim();
  return M ? mn.apiURL(`/view?filename=${encodeURIComponent(M)}&type=input&subfolder=`) : "";
}
function Lh(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function $h(e, t, n, r, a, o) {
  var S, M, b;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !lg(o) || n <= 1 || r <= 1) {
    Lh(t, n, r);
    return;
  }
  const c = Ln(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Gt * 0.5), h = Number(((b = (M = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : M.call(S, (O) => (O == null ? void 0 : O.name) === "coverage")) == null ? void 0 : b.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = No());
  const g = nw(o), y = um({
    stateRevision: [
      "standalone_preview_scene",
      g,
      h
    ].join("|"),
    backgroundSource: o,
    backgroundRevision: g,
    coverageDeg: h,
    scene: ol(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(y) && (() => {
    const O = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      o_(a, h),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return O ? (t.drawImage(O, 0, 0, n, r), !0) : !1;
  })() || (zS(e, t, { x: 0, y: 0, w: n, h: r }, c, f, o, eS), Lh(t, n, r));
}
function zh(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class aw {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Cc({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ht(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: W(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: W(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, o, c, f;
        const r = (o = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : o.call(a);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
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
    const n = ((o = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : o.call(a, (c) => (c == null ? void 0 : c.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...c) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
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
        `min-height:${es}px`,
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
          return es;
        },
        getHeight() {
          return es;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = js(Bu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const o = r ? r(a) || {} : {};
          return {
            ...o,
            minHeight: Math.max(es, Number(o.minHeight || 0)),
            minWidth: Math.max(tw, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, a, o, c;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Lc(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ma({ fullscreen: !1 }), this.fullscreenController = ZS({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, h;
          return (h = (f = this.options).onOpen) == null ? void 0 : h.call(f, this.node);
        }
      }), this.surfaceApp = xc(ew, {
        model: this.surfaceModel,
        onAction: (f) => {
          var h, g;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((g = (h = this.fullscreenController) == null ? void 0 : h.toggle) == null || g.call(h));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, h;
          return (h = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : h.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (a = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || a.call(r), this.surfaceApp = null, (c = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || c.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var a;
    (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = fm(n), t.addEventListener("pointerdown", (o) => {
      var c, f, h;
      o.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (h = o.stopImmediatePropagation) == null || h.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    });
    const r = (o) => {
      var c, f;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (f = o.stopImmediatePropagation) == null || f.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var c;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var c;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o);
    }), n.addEventListener("keydown", (o) => {
      var c;
      XS(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !lg(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var c;
      const a = t.localPoint(r);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return zh(a.x, a.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - o.x, a.y - o.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var c;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(r);
      if (!a) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - o.x, a.y - o.y, "pano"), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var h, g, y, x, S, M;
      const o = TS(this, n, r, a), c = t.getLegacyPreviewRect();
      if (!o || !zh(o.x, o.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((h = t.view) == null ? void 0 : h.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((g = t.view) == null ? void 0 : g.fov) || 100), f && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (x = n == null ? void 0 : n.preventDefault) == null || x.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, o, c;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - pu * 2), n = Math.max(60, Number(((c = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : c[1]) || 0) - Dh - pu);
    return { x: pu, y: Dh, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), $h(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = JS(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var a, o, c;
    const t = rw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const h = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, g = () => this.requestDraw();
      f.addEventListener("loadedmetadata", h), f.addEventListener("canplay", h), f.addEventListener("timeupdate", g), f.addEventListener("play", g), f.addEventListener("pause", g), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", h), f.removeEventListener("canplay", h), f.removeEventListener("timeupdate", g), f.removeEventListener("play", g), f.removeEventListener("pause", g);
      };
      return;
    }
    const n = iw(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), $h(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (a = this.node).setDirtyCanvas) == null || o.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, a, o, c, f, h, g, y, x, S, M, b, O, z, L, P, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null, (c = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || c.call(o), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (g = (h = this.surfaceApp) == null ? void 0 : h.unmount) == null || g.call(h), this.surfaceApp = null, (x = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || x.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (b = (M = this.root) == null ? void 0 : M.remove) == null || b.call(M);
    } catch {
    }
    try {
      Ym(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((L = (z = (O = this.node) == null ? void 0 : O.widgets) == null ? void 0 : z.find) == null ? void 0 : L.call(z, (T) => (T == null ? void 0 : T.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), ($ = (P = this.node.__panoStandaloneCore) == null ? void 0 : P.dispose) == null || $.call(P), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function ow(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new aw(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function ug(e, t, n) {
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
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function Gc(e) {
  return !!(e != null && e.prototype);
}
function vo(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function sw(e, t = {}) {
  Gc(e) || ow(e, {
    ...t,
    onOpen: vo(e, t.onOpen)
  });
}
function lw(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Gc(e)) {
    Eh(e, {
      ...r,
      onOpen: vo(e, t.onOpen)
    });
    return;
  }
  ug(e, "stickers_node_preview", (a) => {
    Eh(a, {
      ...r,
      onOpen: vo(a, t.onOpen)
    });
  });
}
function uw(e, t = {}) {
  if (!Gc(e)) {
    Th(e, {
      ...t,
      onOpen: vo(e, t.onOpen)
    });
    return;
  }
  ug(e, "cutout_preview", (n) => {
    Th(n, {
      ...t,
      onOpen: vo(n, t.onOpen)
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
}, Lr = "pen";
function Vh(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function cw(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const o = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(g) {
    if (r.splice(0, r.length), a = -1, !g || typeof g != "object" || !Array.isArray(g.entries) || (g.entries.forEach((x) => {
      r.push(String(x || ""));
    }), !r.length)) return;
    const y = Number(g.index);
    Number.isInteger(y) ? y === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, y)) : a = r.length - 1;
  }
  function h(g) {
    r[a] !== g && (r.splice(a + 1), r.push(g), r.length > o && r.shift(), a = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(g) {
      h(String(g || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const g = a - 1;
      return g < 0 || g >= r.length ? null : (a = g, r[a]);
    },
    redo() {
      const g = a + 1;
      return g < 0 || g >= r.length ? null : (a = g, r[a]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const g = r.length, y = Math.max(0, g - c), x = a >= 0 ? Math.max(0, Math.min(a, y)) : y, S = r.slice(x, x + c), M = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - x));
      return {
        version: 1,
        entries: S,
        index: M
      };
    },
    hydrate: f
  };
}
function jh(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function fw(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Hh(e = {}, t = 0) {
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
  return n === "sticker" ? (r.transform = fw((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function dw(e = {}) {
  var r, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return ka({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: jh((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((o, c) => Hh(o, c)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = jh((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((o, c) => Hh(o, c)).filter(Boolean);
  return ka({
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
function _o(e = {}) {
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
function Gs(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function hw(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || No((e == null ? void 0 : e.coreOptions) || {});
  let r = null, a = "";
  function o(x) {
    var S;
    return JSON.stringify({
      stateRevision: (x == null ? void 0 : x.stateRevision) || "",
      background: (x == null ? void 0 : x.background) || null,
      objects: Array.isArray((S = x == null ? void 0 : x.objectPass) == null ? void 0 : S.objects) ? x.objectPass.objects.map((M) => ({
        id: (M == null ? void 0 : M.id) || "",
        type: (M == null ? void 0 : M.type) || "",
        revision: (M == null ? void 0 : M.revision) || "",
        visible: (M == null ? void 0 : M.visible) !== !1,
        opacity: Number((M == null ? void 0 : M.opacity) ?? 1),
        zIndex: Number((M == null ? void 0 : M.zIndex) ?? 0),
        transform: (M == null ? void 0 : M.transform) || null,
        params: (M == null ? void 0 : M.params) || null
      })) : [],
      overlay: (x == null ? void 0 : x.overlay) || {}
    });
  }
  function c(x = {}) {
    const S = dw(x), M = o(S);
    return a === M || !n.syncState(S) ? !1 : (r = S, a = M, !0);
  }
  function f(x = {}, S = {}) {
    if (!r) return null;
    const M = _o(x), b = Gs(S);
    return n.renderToTarget(t, M, b);
  }
  function h(x, S, M = {}, b = {}) {
    if (!x || !S || !r) return !1;
    const O = _o(M), z = Gs({
      ...b,
      width: Number((S == null ? void 0 : S.w) || (b == null ? void 0 : b.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (b == null ? void 0 : b.height) || 1)
    });
    return n.renderToContext(x, S, O, z);
  }
  function g() {
    var x;
    r = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function y() {
    var x;
    g(), (x = n.dispose) == null || x.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: c,
    renderFrame: f,
    renderToContext: h,
    snapshotScene: () => r,
    clearScene: g,
    dispose: y
  };
}
function pw(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((o) => {
      o ? r(o) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function mw(e, t = {}) {
  var h, g;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = _o((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = (t == null ? void 0 : t.output) || ((h = t == null ? void 0 : t.camera) == null ? void 0 : h.output) || ((g = t == null ? void 0 : t.view) == null ? void 0 : g.output) || null, a = Gs(
    r || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), o = e.renderFrame(n, a);
  if (!o) throw new Error("Panorama scene camera render returned null.");
  const c = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return pw(o, c, f);
}
function gw(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let o = _o((n == null ? void 0 : n.view) || {}), c = !1, f = 0;
  function h() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), M = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), b = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), O = Gs({ width: S, height: M, dpr: b });
    return r.width = Math.max(1, Math.round(O.width * O.dpr)), r.height = Math.max(1, Math.round(O.height * O.dpr)), r.style.width = `${O.width}px`, r.style.height = `${O.height}px`, O;
  }
  function g() {
    if (c || !a) return !1;
    const S = h();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.width, r.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: r.width, h: r.height },
      o,
      { ...S, width: r.width, height: r.height, dpr: 1 }
    );
  }
  function y() {
    c || f || (f = requestAnimationFrame(() => {
      f = 0, g();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => y()) : null;
  return x == null || x.observe(t), y(), {
    canvas: r,
    setView(S) {
      o = _o(S || {}), y();
    },
    getView() {
      return { ...o };
    },
    present: g,
    requestRender: y,
    unmount() {
      c = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), r.remove();
    }
  };
}
function bw(e = {}) {
  const t = hw({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(Sr(n), r);
    },
    renderShotToContext(n, r, a, o = {}) {
      return t.renderToContext(n, r, Sr(a), o);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? Sr(r.shot) : r == null ? void 0 : r.view;
      return gw(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: Sr(n.shot) } : n;
      return mw(t, r);
    }
  };
}
function ts(e) {
  if (!e || typeof e != "object") return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) t[n] = Array.isArray(r) ? [...r] : r;
  return t;
}
const ua = 1e-6;
function ns(e, t) {
  const n = e.keyframes;
  if (!n.length) return ts(e.value);
  if (t <= n[0].frame + ua) return ts(n[0].value);
  const r = n[n.length - 1];
  if (t >= r.frame - ua) return ts(r.value);
  let a = 0;
  for (; n[a + 1].frame <= t + ua; ) a += 1;
  const o = n[a];
  if (Math.abs(t - o.frame) <= ua || o.easing === "hold") return ts(o.value);
  throw new Error(`Keyframe easing ${JSON.stringify(o.easing)} is not implemented yet.`);
}
function Uh(e, t) {
  return t - (e.start - e.in);
}
function Gh(e, t) {
  return t >= e.start - ua && (e.duration === null || t < e.start + e.duration - ua);
}
function yw(e, t) {
  const n = Number(t), { camera: r, scene: a } = e, o = Uh(a.clip, n);
  return {
    frame: n,
    camera: { ...ns(r.transform, n), aspect: r.aspect },
    scene: {
      active: Gh(a.clip, n),
      clip_frame: o,
      ...ns(a.transform, o)
    },
    stickers: e.stickers.map((c) => {
      const f = Uh(c.clip, n);
      return {
        id: c.id,
        placement: c.placement,
        active: c.visible && Gh(c.clip, n),
        clip_frame: f,
        ...ns(c.transform, f),
        opacity: ns(c.opacity, f)
      };
    })
  };
}
function cg(e, t, n = 0) {
  const { right: r, up: a, fwd: o } = Ln(e, t, n);
  return [
    [r.x, a.x, -o.x],
    [r.y, a.y, -o.y],
    [-r.z, -a.z, o.z]
  ];
}
function fg(e) {
  const [[t, n, r], [a, o, c], [f, h, g]] = e, y = t + o + g;
  if (y > 0) {
    const S = 0.5 / Math.sqrt(y + 1);
    return { x: (h - c) * S, y: (r - f) * S, z: (a - n) * S, w: 0.25 / S };
  }
  if (t > o && t > g) {
    const S = 2 * Math.sqrt(1 + t - o - g);
    return { x: 0.25 * S, y: (n + a) / S, z: (r + f) / S, w: (h - c) / S };
  }
  if (o > g) {
    const S = 2 * Math.sqrt(1 + o - t - g);
    return { x: (n + a) / S, y: 0.25 * S, z: (c + h) / S, w: (r - f) / S };
  }
  const x = 2 * Math.sqrt(1 + g - t - o);
  return { x: (r + f) / x, y: (c + h) / x, z: 0.25 * x, w: (a - n) / x };
}
function vw(e, t, n) {
  const r = t / n, a = Math.tan(e.hFOV_deg * 0.5 * Gt);
  return {
    quaternion: fg(cg(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(a / r) * Ar,
    aspect: r
  };
}
function _w(e, t, { media: n, zIndex: r, paintLayers: a }) {
  const o = yw(e, t), c = [];
  e.stickers.forEach((f, h) => {
    const g = o.stickers[h];
    if (f.placement !== "sky") return;
    const y = f.source.kind === "port" && !f.visible;
    if (!g.active && !y) return;
    const x = n(f);
    if (!x) return;
    const S = Math.tan(g.hFOV_deg * 0.5 * Gt), M = Math.tan(g.vFOV_deg * 0.5 * Gt), { crop: b } = f;
    c.push({
      kind: "sticker",
      id: f.id,
      media: x.media,
      revision: x.revision,
      opacity: y ? Ec : g.opacity,
      zIndex: r(f),
      quaternion: fg(cg(g.yaw_deg, g.pitch_deg, g.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * b.x0 - 1) * S,
        x1: (2 * b.x1 - 1) * S,
        y0: (1 - 2 * b.y1) * M,
        y1: (1 - 2 * b.y0) * M
      }
    });
  });
  for (const f of a) c.push({ kind: "erp", ...f });
  return c.sort((f, h) => f.zIndex - h.zIndex);
}
function xw({ onReady: e, onFailed: t }) {
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
function Sw(e = {}) {
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
function ww({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: o,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: h
}) {
  var $, T;
  const g = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
    visible: g,
    activePane: g ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: g ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (F, B) => ({ index: B, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!g) return y;
  const x = (($ = t.find((F) => a(e.paintColor, F.color))) == null ? void 0 : $.id) || "", S = !x, M = o(e.customPaintColor), b = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), O = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), z = e.brushSizes[O] ?? 10, L = h(), P = Array.from({ length: 8 }, (F, B) => e.customPaintHistory[B] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: b,
    alphaText: `${b}%`,
    historyEntries: P.map((F, B) => ({
      index: B,
      color: F ? { cssColor: r(F, 1) } : null
    })),
    sizeValue: z,
    sizeText: String(z),
    sizeFill: `${Math.max(0, Math.min(100, (z - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function kw({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function Nw({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: o,
  params: c,
  notes: f,
  visibilityRows: h,
  uiSettings: g,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || a === "stroke" || o.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: h,
    uiSettings: t ? null : g,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Mw({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: o,
  anyLocked: c,
  selectedLocked: f,
  activeAspect: h,
  cutoutAspectOpen: g,
  isExternalSticker: y,
  isStickerHidden: x,
  canRestoreSelectedToInitial: S,
  iconSet: M
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let b = [];
  if (n.length > 1)
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (b = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f }
    ], y(t) || (b.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), b.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), y(t)) {
      const B = S(), U = x(t);
      b.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: B ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !B
      }), b.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: U ? "Show" : "Hide",
        tip: U ? "Show input image" : "Hide input image",
        icon: U ? M.eye : M.eye_dashed
      });
    }
    b.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed }), y(t) || b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f });
  } else
    b = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!g,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((B) => ({ value: B, label: B, active: h === B }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  const O = a.corners.map((B) => ({ x: Number(B == null ? void 0 : B.x), y: Number(B == null ? void 0 : B.y) })).filter((B) => Number.isFinite(B.x) && Number.isFinite(B.y));
  if (!O.length) return { visible: !1, left: 0, top: 0, items: [] };
  const z = O.map((B) => B.x), L = O.map((B) => B.y), P = Math.min(...z), $ = Math.max(...z), T = Math.min(...L), F = Math.max(...L);
  return {
    visible: !0,
    left: (P + $) * 0.5,
    top: F + 18,
    items: b,
    anchor: { minX: P, maxX: $, minY: T, maxY: F }
  };
}
const Pw = { class: "pano-floating-right" }, Aw = ["data-settled"], Cw = ["data-ready", "data-settled"], Iw = ["aria-label", "data-tip"], Tw = {
  key: 1,
  class: "pano-camera-preview-label"
}, Ew = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ae(ot, null, [
      X("div", Pw, [
        (Ne(!0), Ae(ot, null, $t(e.buttons, (r) => (Ne(), Ei(tn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ki(X("div", {
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
          e.previewToggle.visible ? (Ne(), Ae("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            ze(en, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Iw)) : Rt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ne(), Ae("div", Tw, ct(e.preview.label || "Preview unavailable"), 1)) : Rt("", !0)
        ], 14, Cw)
      ], 8, Aw), [
        [ko, e.preview.visible]
      ])
    ], 64));
  }
}, Dw = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Ow = ["y2", "transform"], Fw = ["transform"], Rw = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, o) => o * 15), r = kt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, o) => ki((Ne(), Ae("div", {
      class: ft(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Ne(), Ae("svg", Dw, [
        o[1] || (o[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Ne(!0), Ae(ot, null, $t(pt(n), (c) => (Ne(), Ae("line", {
          key: c,
          class: ft(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, Ow))), 128)),
        X("g", { transform: r.value }, [...o[0] || (o[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Fw),
        o[2] || (o[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ko, e.model.visible === !0]
    ]);
  }
}, Lw = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ae("div", {
      class: ft(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      ze(Im, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      ze(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      ze(Rw, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, $w = ["aria-label"], zw = { class: "pano-canvas-confirm-title" }, Vw = { class: "pano-canvas-confirm-text" }, jw = { class: "pano-canvas-confirm-actions" }, Hw = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Uw = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ bn(null), r = /* @__PURE__ */ bn(null);
    let a = null;
    function o() {
      const x = r.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function c(x) {
      const S = r.value;
      if (!S) return;
      const M = S.querySelector(`[data-action='${x}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var O;
      const x = r.value;
      if (!x) return;
      const S = x.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const b = o()[0] || x;
      (O = b == null ? void 0 : b.focus) == null || O.call(b);
    }
    function h() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function g(x) {
      var L;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const S = o(), M = r.value;
      if (!S.length) {
        x.preventDefault(), (L = M == null ? void 0 : M.focus) == null || L.call(M);
        return;
      }
      const b = S[0], O = S[S.length - 1], z = document.activeElement;
      if (x.shiftKey) {
        (z === b || z === M || !(M != null && M.contains(z))) && (x.preventDefault(), O.focus());
        return;
      }
      (z === O || !(M != null && M.contains(z))) && (x.preventDefault(), b.focus());
    }
    function y(x) {
      x.target === n.value && c("confirm-cancel");
    }
    return Ni(() => t.model.visible, (x, S) => {
      if (x) {
        a = document.activeElement, pc(() => {
          f();
        });
        return;
      }
      S && h();
    }, { immediate: !0 }), el(() => {
      h();
    }), (x, S) => e.model.visible === !0 ? (Ne(), Ae("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Kn(y, ["self"])
    }, [
      X("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: g
      }, [
        X("div", zw, ct(e.model.title), 1),
        X("div", Vw, ct(e.model.text), 1),
        X("div", jw, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", Hw, ct(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, $w)
    ], 512)) : Rt("", !0);
  }
}, Gw = ["data-paint-pane"], Bw = ["hidden"], Kw = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Ww = ["aria-pressed", "disabled"], Yw = ["hidden"], qw = { class: "pano-paint-color-pop-head" }, Xw = { class: "pano-paint-color-field" }, Jw = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Zw = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Qw = { class: "pano-paint-color-field" }, ek = { class: "pano-paint-alpha-wrap" }, tk = ["value"], nk = { "data-paint-alpha-value": "" }, rk = ["hidden"], ik = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, ak = ["data-paint-history-index", "aria-label", "disabled"], ok = ["data-paint-footer"], sk = ["data-paint-group"], lk = ["hidden"], uk = ["value", "disabled"], ck = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, fk = ["hidden"], dk = {
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
    return (r, a) => (Ne(), Ae("div", {
      class: ft(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ne(!0), Ae(ot, null, $t(e.panes, (o) => {
        var c;
        return Ne(), Ae("div", {
          key: o.key,
          class: ft(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Ne(), Ae("div", {
            key: 0,
            class: ft(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ne(!0), Ae(ot, null, $t(e.paintSwatches, (f) => (Ne(), Ae("button", {
              key: f.id,
              class: ft(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Ut(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Kw))), 128)),
            X("button", {
              class: ft(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ut({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Ww),
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
              X("div", qw, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ut({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", Xw, [
                X("div", Jw, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ut({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", Zw, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ut({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", Qw, [
                a[1] || (a[1] = X("span", null, "Opacity", -1)),
                X("div", ek, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, tk),
                  X("span", nk, ct(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", ik, [
                  (Ne(!0), Ae(ot, null, $t(e.state.historyEntries || [], (f) => (Ne(), Ae("button", {
                    key: f.index,
                    class: ft(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Ut(n(f.color))
                  }, null, 14, ak))), 128))
                ])
              ], 8, rk)
            ], 12, Yw)
          ], 10, Bw)) : Rt("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Ne(!0), Ae(ot, null, $t(o.tools, (f) => {
                var h;
                return Ne(), Ei(tn, {
                  key: `${o.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((h = e.state.activeTools) == null ? void 0 : h[o.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, sk),
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
              }, null, 12, uk),
              X("span", ck, ct(e.state.sizeText || "10"), 1)
            ], 10, lk),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[o.key]) ?? !o.clearHidden)
            }, [
              ze(tn, {
                icon: pt(Ee).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, fk)
          ], 8, ok)
        ], 10, Gw);
      }), 128))
    ], 2));
  }
}, hk = {
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
    return t({ getRefs: o }), (c, f) => (Ne(), Ae(ot, null, [
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
}, pk = {
  key: 0,
  class: "pano-cutout-menu"
}, mk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, gk = ["data-aspect"], bk = ["data-action", "aria-label", "data-tip", "disabled"], yk = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ae("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ut({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ne(!0), Ae(ot, null, $t(e.model.items || [], (r) => (Ne(), Ae(ot, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Ne(), Ae("div", pk, [
          X("button", mk, [
            ze(en, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: ft(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ne(!0), Ae(ot, null, $t(r.choices || [], (a) => (Ne(), Ae("button", {
              key: a.value,
              class: ft(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ct(a.label), 11, gk))), 128))
          ], 2)
        ])) : (Ne(), Ae("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          ze(en, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, bk))
      ], 64))), 128))
    ], 4));
  }
}, vk = {
  class: "pano-side",
  "data-side": ""
}, _k = { class: "pano-side-head" }, xk = { class: "pano-side-title" }, Sk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, wk = {
  key: 0,
  class: "pano-side-scroll"
}, kk = { class: "pano-inspector" }, Nk = { class: "pano-ui-row pano-coverage-row" }, Mk = ["data-selected"], Pk = ["aria-pressed", "disabled"], Ak = ["aria-pressed", "disabled"], Ck = {
  key: 0,
  class: "pano-section-title"
}, Ik = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Tk = {
  class: "pano-picker",
  "data-picker": "selection"
}, Ek = ["disabled"], Dk = { class: "pano-picker-label" }, Ok = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Fk = ["hidden"], Rk = ["data-selection-id"], Lk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, $k = {
  key: 2,
  class: "pano-state-actions"
}, zk = ["disabled"], Vk = ["data-key"], jk = ["min", "max", "step", "value", "disabled", "data-param-key"], Hk = ["min", "max", "step", "value", "disabled", "data-param-key"], Uk = { class: "pano-visibility-section" }, Gk = { class: "pano-visibility-stack" }, Bk = ["data-visibility-row"], Kk = { class: "pano-visibility-name" }, Wk = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, Yk = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], qk = ["open"], Xk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Jk = { class: "pano-ui-settings-body" }, Zk = { class: "pano-ui-row" }, Qk = ["data-selected"], eN = ["aria-pressed"], tN = ["aria-pressed"], nN = { class: "pano-ui-row" }, rN = ["data-selected"], iN = ["aria-pressed"], aN = ["aria-pressed"], oN = { class: "pano-ui-row" }, sN = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, lN = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, uN = { class: "pano-picker-label" }, cN = ["hidden"], fN = ["data-quality"], dN = {
  key: 1,
  class: "pano-side-footer"
}, hN = ["data-action"], pN = {
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
    function a(o, c) {
      return (c == null ? void 0 : c.paramsDisabled) === !0 || (o == null ? void 0 : o.enabled) === !1;
    }
    return (o, c) => {
      var f, h, g, y, x;
      return Ne(), Ae("div", vk, [
        X("div", _k, [
          X("div", xk, [
            X("span", Sk, [
              ze(en, {
                icon: pt(Ee).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, ct(e.nodeTitle), 1)
          ]),
          c[0] || (c[0] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        c[13] || (c[13] = X("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Ne(), Ae("div", wk, [
          X("div", kk, [
            c[12] || (c[12] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", Nk, [
              c[1] || (c[1] = X("label", null, "Coverage", -1)),
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
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, Pk),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, Ak)
              ], 8, Mk)
            ]),
            e.model.transformTitle !== !1 ? (Ne(), Ae("div", Ck, [...c[2] || (c[2] = [
              X("span", null, "Transform", -1)
            ])])) : Rt("", !0),
            e.model.selectionPicker ? (Ne(), Ae("div", Ik, [
              X("label", null, ct(e.model.selectionPicker.label), 1),
              X("div", Tk, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", Dk, [
                    e.model.selectionPicker.currentIcon ? (Ne(), Ae("span", Ok, [
                      ze(en, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Rt("", !0),
                    X("span", null, ct(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  c[3] || (c[3] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Ek),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ne(!0), Ae(ot, null, $t(e.model.selectionPicker.items || [], (S) => (Ne(), Ae("button", {
                    key: S.id,
                    type: "button",
                    class: ft(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Ne(), Ae("span", Lk, [
                      ze(en, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Rt("", !0),
                    X("span", null, ct(S.label), 1)
                  ], 10, Rk))), 128))
                ], 8, Fk)
              ])
            ])) : Rt("", !0),
            e.model.copyStateButton ? (Ne(), Ae("div", $k, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                ze(en, {
                  icon: pt(Ee).copy
                }, null, 8, ["icon"]),
                X("span", null, ct(e.model.copyStateButton.label), 1)
              ], 8, zk)
            ])) : Rt("", !0),
            X("div", {
              class: ft(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ne(!0), Ae(ot, { key: 0 }, $t(e.model.notes, (S) => (Ne(), Ae("div", {
                key: S,
                class: "pano-param-note"
              }, ct(S), 1))), 128)) : (Ne(!0), Ae(ot, { key: 1 }, $t(e.model.params || [], (S) => (Ne(), Ae("div", {
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
                }, null, 12, jk),
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
                }, null, 8, Hk)
              ], 8, Vk))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ne(), Ae(ot, { key: 3 }, [
              c[5] || (c[5] = X("div", { class: "pano-divider" }, null, -1)),
              X("div", Uk, [
                c[4] || (c[4] = X("div", { class: "pano-section-title" }, [
                  X("span", null, "Layers")
                ], -1)),
                X("div", Gk, [
                  (Ne(!0), Ae(ot, null, $t(e.model.visibilityRows, (S) => (Ne(), Ae("div", {
                    key: S.key,
                    class: ft(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    X("span", Kk, [
                      X("span", Wk, [
                        ze(en, {
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
                      ze(en, {
                        icon: S.visible === !0 ? pt(Ee).eye : pt(Ee).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, Yk)
                  ], 10, Bk))), 128))
                ])
              ])
            ], 64)) : Rt("", !0),
            e.model.uiSettings ? (Ne(), Ae("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                c[6] || (c[6] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", Xk, [
                  ze(en, {
                    icon: pt(Ee).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", Jk, [
                X("div", Zk, [
                  c[7] || (c[7] = X("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, eN),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, tN)
                  ], 8, Qk)
                ]),
                X("div", nN, [
                  c[8] || (c[8] = X("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, iN),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, aN)
                  ], 8, rN)
                ]),
                X("div", oN, [
                  c[10] || (c[10] = X("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  X("div", sN, [
                    X("button", lN, [
                      X("span", uN, ct(e.model.uiSettings.qualityLabel), 1),
                      c[9] || (c[9] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    X("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ne(!0), Ae(ot, null, $t(e.model.uiSettings.qualityOptions || [], (S) => (Ne(), Ae("button", {
                        key: S.value,
                        type: "button",
                        class: ft(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ct(S.label), 11, fN))), 128))
                    ], 8, cN)
                  ])
                ]),
                c[11] || (c[11] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, qk)) : Rt("", !0)
          ])
        ])) : Rt("", !0),
        (e.model.footerButtons || []).length ? (Ne(), Ae("div", dN, [
          (Ne(!0), Ae(ot, null, $t(e.model.footerButtons, (S) => (Ne(), Ae("button", {
            key: S.action,
            class: ft(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ct(S.label), 11, hN))), 128))
        ])) : Rt("", !0)
      ]);
    };
  }
}, mN = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ae("div", {
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
}, gN = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, bN = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ne(), Ae("div", gN, [
      (Ne(!0), Ae(ot, null, $t(e.buttons, (r) => ki((Ne(), Ei(tn, {
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
        [ko, r.visible !== !1]
      ])), 128))
    ]));
  }
}, yN = ["data-video-ready"], vN = { class: "pano-video-transport-shell" }, _N = { class: "pano-video-controls-left" }, xN = { class: "pano-video-filmstrip" }, SN = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, wN = ["src", "onLoad"], kN = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, NN = ["max", "value", "disabled"], MN = { class: "pano-video-controls-right" }, PN = ["data-has-audio"], AN = { class: "pano-video-volume-pop" }, CN = ["value", "disabled"], IN = {
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
    }), c = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = kt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Ee.loop_off : Ee.loop;
    }), h = kt(() => {
      var F, B;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), g = kt(() => {
      var F, B, U;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Ee.volume : ((B = t.state) == null ? void 0 : B.muted) === !0 || Number(((U = t.state) == null ? void 0 : U.volume) ?? 1) <= 0 ? Ee.volume_muted : Ee.volume2;
    }), y = kt(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), x = kt(() => ({ left: `${y.value}%` })), S = kt(() => {
      var le, oe;
      const F = (le = t.state) == null ? void 0 : le.volumePct, B = Number(((oe = t.state) == null ? void 0 : oe.volume) ?? 1) * 100, U = Number(F ?? B ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, U))}%`
      };
    }), M = kt(() => {
      var U, le;
      const B = [
        String(((U = t.state) == null ? void 0 : U.currentTimeLabel) || "0:00"),
        String(((le = t.state) == null ? void 0 : le.durationLabel) || "0:00")
      ].reduce((oe, I) => Math.max(oe, I.length), 4);
      return `${Math.max(4, B)}ch`;
    }), b = kt(() => ({ "--pano-video-time-ch": M.value })), O = kt(() => {
      var U, le;
      const F = Array.isArray((U = t.state) == null ? void 0 : U.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const B = Math.max(7, Number(((le = t.state) == null ? void 0 : le.thumbnailCount) || 9));
      return Array.from({ length: B }, (oe, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), z = /* @__PURE__ */ bn(/* @__PURE__ */ new Set()), L = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), P = (F) => z.value.has(L(F)), $ = (F) => {
      const B = new Set(z.value);
      B.add(L(F)), z.value = B;
    };
    Ni(O, (F) => {
      const B = new Set(F.map(L)), U = /* @__PURE__ */ new Set();
      for (const le of z.value)
        B.has(le) && U.add(le);
      z.value = U;
    }, { immediate: !0 });
    const T = kt(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, B) => (Ne(), Ae("div", {
      class: ft(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ut(T.value)
    }, [
      B[1] || (B[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", vN, [
        X("div", _N, [
          ze(tn, {
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
        X("div", xN, [
          X("div", SN, [
            (Ne(!0), Ae(ot, null, $t(O.value, (U) => (Ne(), Ae("div", {
              key: L(U),
              class: ft(["pano-video-thumb", {
                "is-placeholder": !U.src,
                "is-loaded": U.src && P(U)
              }])
            }, [
              U.src ? (Ne(), Ae("img", {
                key: 0,
                src: U.src,
                alt: "",
                draggable: "false",
                onLoad: (le) => $(U)
              }, null, 40, wN)) : (Ne(), Ae("span", kN))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Ut(x.value),
            "aria-hidden": "true"
          }, [...B[0] || (B[0] = [
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
          }, null, 8, NN)
        ]),
        X("div", MN, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ut(b.value)
          }, ct(e.state.durationLabel || "0:00"), 5),
          ze(tn, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: o.value,
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
            X("div", AN, [
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
              }, null, 12, CN)
            ]),
            ze(tn, {
              "extra-class": "pano-video-control",
              icon: g.value,
              label: h.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, PN)
        ])
      ])
    ], 14, yN));
  }
}, TN = { class: "pano-floating-top" }, EN = ["data-selected", "data-view-count"], DN = ["data-view", "aria-pressed", "aria-label", "disabled"], ON = { class: "label" }, FN = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Ne(), Ae("div", TN, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ne(!0), Ae(ot, null, $t(e.buttons, (a) => ki((Ne(), Ae("button", {
            key: a.key,
            class: ft(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            ze(en, {
              icon: a.icon
            }, null, 8, ["icon"]),
            X("span", ON, ct(a.label), 1)
          ], 10, DN)), [
            [ko, a.visible !== !1]
          ])), 128))
        ], 8, EN)
      ]);
    };
  }
};
function dg(e = "stickers") {
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
const RN = ["aria-label"], LN = { class: "pano-stage-wrap" }, $N = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, zN = {
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
    let o = "", c = !1, f = null;
    const h = /* @__PURE__ */ bn(null), g = /* @__PURE__ */ bn(null), y = /* @__PURE__ */ bn(null);
    function x() {
      var I, Y;
      return ((Y = (I = y.value) == null ? void 0 : I.getRefs) == null ? void 0 : Y.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(I) {
      var Y, ie;
      return ((ie = (Y = g.value) == null ? void 0 : Y.open) == null ? void 0 : ie.call(Y, I)) === !0;
    }
    function M(I) {
      a("image-file-selected", I);
    }
    function b(I) {
      a("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: S });
    const O = kt(() => r.readOnly === !0), z = kt(() => r.shellPreset || dg(r.type)), L = kt(() => {
      var Y, ie, J;
      const I = String((((Y = r.uiState) == null ? void 0 : Y.stageStatus) === "failed" ? (ie = r.uiState) == null ? void 0 : ie.stageStatusDetail : (J = r.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Re-run the node to refresh it." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), P = kt(() => {
      var Y;
      const I = Array.isArray((Y = z.value) == null ? void 0 : Y.floatingButtons) ? z.value.floatingButtons.slice() : [];
      return O.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ee.fullscreen
      }), I;
    });
    function $() {
      const I = h.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((Y) => Y instanceof HTMLElement ? !Y.hidden && Y.tabIndex >= 0 && Y.offsetParent !== null : !1) : [];
    }
    function T() {
      var ie;
      const Y = $()[0] || h.value;
      (ie = Y == null ? void 0 : Y.focus) == null || ie.call(Y);
    }
    function F() {
      var I;
      f != null && f.isConnected && ((I = f.focus) == null || I.call(f)), f = null;
    }
    function B(I) {
      var Y, ie, J, he;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const fe = $();
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
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function le() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function oe(I) {
      document.removeEventListener("keydown", B), I ? (f || (f = document.activeElement), U(), document.addEventListener("keydown", B), pc(() => {
        T();
      })) : (le(), F());
    }
    return bc(() => {
      oe(r.open);
    }), el(() => {
      le(), document.removeEventListener("keydown", B), F();
    }), Ni(() => r.open, (I) => {
      oe(I);
    }), (I, Y) => e.open ? (Ne(), Ae("div", {
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
        X("div", LN, [
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
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Ne(), Ae("div", $N, ct(L.value), 1)) : Rt("", !0),
          Y[4] || (Y[4] = X("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          ze(hk, {
            ref_key: "paintOverlaysRef",
            ref: y
          }, null, 512),
          ze(Tm, {
            ref_key: "imageFilePickerRef",
            ref: g,
            onFileSelected: M,
            onFileCancelled: b
          }, null, 512),
          O.value ? Rt("", !0) : (Ne(), Ae(ot, { key: 1 }, [
            ze(bN, {
              buttons: e.uiState.toolButtons || z.value.toolButtons || []
            }, null, 8, ["buttons"]),
            ze(Lw, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            ze(dk, {
              "paint-swatches": e.paintSwatches,
              panes: z.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          ze(IN, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          ze(FN, {
            buttons: e.uiState.viewButtons || z.value.viewButtons || []
          }, null, 8, ["buttons"]),
          ze(Ew, {
            buttons: e.uiState.floatingButtons || P.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          ze(yk, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          ze(mN, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          ze(Uw, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Rt("", !0) : (Ne(), Ei(pN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, RN)
    ])) : Rt("", !0);
  }
}, yr = "loading", Na = "ready", xr = "failed";
function hg(e, t = "") {
  return e && (e.__panoLoadState = yr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function pg(e, t = "") {
  return e && (e.__panoLoadState = Na, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function mg(e, t = "") {
  return e && (e.__panoLoadState = xr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ec(e, t) {
  return e ? e.__panoLoadState === xr ? xr : typeof t == "function" && t(e) ? Na : yr : Na;
}
function tc(e) {
  return ec(e) === xr;
}
function VN({ presented: e, background: t = Na, stickers: n = [] } = {}) {
  if (!e) return { status: yr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], a = t === yr, o = r.includes(yr);
  if (a && o) return { status: yr, detail: "mixed" };
  if (a) return { status: yr, detail: "background" };
  if (o) return { status: yr, detail: "stickers" };
  const c = t === xr, f = r.includes(xr);
  return c && f ? { status: xr, detail: "mixed" } : c ? { status: xr, detail: "background" } : f ? { status: xr, detail: "stickers" } : { status: Na, detail: "" };
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
function Bh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function jN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Kh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function HN(e, t, n = null) {
  var a, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = jN(e == null ? void 0 : e.graph, n)), r;
}
function UN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function GN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function BN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function KN({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
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
      for (const B of T) {
        const U = a(B);
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
    const B = String(T.filename || "").trim();
    return B ? na(t, {
      filename: B,
      subfolder: String(T.subfolder || ""),
      type: String(T.storage || "input")
    }) : "";
  }, c = (T) => {
    const F = e == null ? void 0 : e.nodeOutputs;
    if (!F || T == null) return null;
    const B = String(T);
    return F instanceof Map ? F.get(T) || F.get(B) || F.get(Number(B)) || null : F[T] || F[B] || null;
  }, f = (T, F) => {
    var U;
    const B = c(T == null ? void 0 : T.id);
    return Array.isArray((U = B == null ? void 0 : B.ui) == null ? void 0 : U[F]) ? B.ui[F] : Array.isArray(B == null ? void 0 : B[F]) ? B[F] : [];
  }, h = (T, F) => {
    const B = c(T == null ? void 0 : T.id);
    return B != null && B.ui && Object.prototype.hasOwnProperty.call(B.ui, F) ? B.ui[F] : B && Object.prototype.hasOwnProperty.call(B, F) ? B[F] : null;
  }, g = (T, F) => {
    const B = h(T, "pano_sticker_input_state_hash"), U = Array.isArray(B) ? B[0] : B;
    return String(U ?? "").trim() || BN(F);
  }, y = (T) => {
    const F = [], B = /* @__PURE__ */ new Set();
    for (const U of T || []) {
      const le = a(U);
      !le || B.has(le) || (B.add(le), F.push(le));
    }
    return F;
  }, x = (T, F) => {
    var le;
    const B = [];
    Array.isArray(T == null ? void 0 : T.images) && T.images.length && B.push(T.images), Array.isArray((le = T == null ? void 0 : T.ui) == null ? void 0 : le.images) && T.ui.images.length && B.push(T.ui.images);
    const U = [];
    for (const oe of B)
      F >= 0 && F < oe.length && U.push(oe[F]), U.push(...oe);
    return U;
  }, S = (T, F) => {
    var Ce;
    const B = String(F || "").trim();
    if (!B) return { src: "", sourceType: "", inputName: "" };
    const U = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs : [], le = U.findIndex((Me) => String((Me == null ? void 0 : Me.name) || "") === B);
    if (le < 0) return { src: "", sourceType: "", inputName: B };
    const oe = U[le], I = oe == null ? void 0 : oe.link;
    if (I == null) return { src: "", sourceType: "", inputName: B };
    const { originId: Y, originSlot: ie } = Kh(Bh(T == null ? void 0 : T.graph, I));
    if (Y == null) return { src: "", sourceType: "", inputName: B };
    const J = HN(T, le, Y);
    if (!J) return { src: "", sourceType: "", inputName: B };
    const he = Number(ie || 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const Me = [];
      he >= 0 && he < fe.length && Me.push(fe[he]), Me.push(...fe);
      const G = y(Me);
      if (G.length)
        return { src: G[0], srcCandidates: G, sourceType: "appNodeImageUrls", inputName: B };
    }
    const ke = y(x(c((J == null ? void 0 : J.id) ?? Y), he));
    if (ke.length)
      return { src: ke[0], srcCandidates: ke, sourceType: "nodeOutputs", inputName: B };
    const A = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (A.length) {
      const Me = [];
      he >= 0 && he < A.length && Me.push(A[he]), Me.push(...A);
      const G = y(Me);
      if (G.length)
        return { src: G[0], srcCandidates: G, sourceType: "nodeImgs", inputName: B };
    }
    const we = (Ce = J == null ? void 0 : J.widgets) == null ? void 0 : Ce.find((Me) => String((Me == null ? void 0 : Me.name) || "").toLowerCase() === "image");
    if (we) {
      let Me = a(we.value);
      if (Me && !Me.includes("/") && !Me.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Me = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Me)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Me)}&type=input&subfolder=`), Me) return { src: Me, sourceType: "widget", inputName: B };
    }
    return { src: "", sourceType: "", inputName: B };
  }, M = (T, F = []) => {
    const B = Array.isArray(F) ? F : [F];
    for (const U of B) {
      const le = S(T, U);
      if (String((le == null ? void 0 : le.src) || "").trim()) return le;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, b = (T) => {
    const F = String(T || "").trim();
    if (!F) return [];
    if (UN(F)) return [F];
    const { filename: B, subfolder: U } = GN(F);
    return B ? y([
      na(t, { filename: B, subfolder: U, type: "temp" }),
      na(t, { filename: B, subfolder: U, type: "output" }),
      na(t, { filename: B, subfolder: U, type: "input" }),
      F
    ]) : [F];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (T) => {
      var F, B;
      try {
        (B = (F = T == null ? void 0 : T.__panoLinkedInputImageCache) == null ? void 0 : F.forEach) == null || B.call(F, (U, le, oe) => {
          var I;
          U != null && U.img && ((I = r == null ? void 0 : r.isImageLoadFailed) != null && I.call(r, U.img)) && oe.delete(le);
        });
      } catch {
      }
    },
    externalStateHash: g,
    invalidateUiImage: (T, F) => {
      var B;
      (B = T == null ? void 0 : T.delete) == null || B.call(T, `__ui__${String(F || "")}`);
    },
    linkedValue: (T, F) => {
      var oe, I, Y, ie;
      const B = String(F || ""), U = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs.find((J) => String((J == null ? void 0 : J.name) || "") === B) : null;
      if ((U == null ? void 0 : U.link) != null) {
        const { originId: J, originSlot: he } = Kh(Bh(T == null ? void 0 : T.graph, U.link)), fe = c(J), ke = [
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
      const le = Array.isArray(T == null ? void 0 : T.widgets) ? T.widgets.find((J) => String((J == null ? void 0 : J.name) || "") === B) : null;
      return String((le == null ? void 0 : le.value) || "");
    },
    loadPreferredExactLinkedImage: (T, F = [], B = null, U = "") => {
      var Ve;
      const le = Array.isArray(F) ? F : [F], oe = M(T, le), Y = (Array.isArray(oe == null ? void 0 : oe.srcCandidates) && oe.srcCandidates.length ? oe.srcCandidates : [oe == null ? void 0 : oe.src]).map((mt) => String(mt || "").trim()).filter(Boolean);
      if (!Y.length) return null;
      const ie = y(Y.flatMap((mt) => b(mt)));
      if (!ie.length) return null;
      T.__panoLinkedInputImageCache || (T.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(U || le.join("|") || "image_exact"), he = Y.join(`
`), fe = T.__panoLinkedInputImageCache.get(J);
      if (fe && fe.srcRaw === he && fe.img) return fe.img;
      const ke = n || globalThis.Image;
      if (typeof ke != "function") return null;
      const A = new ke();
      (Ve = r == null ? void 0 : r.markImageLoading) == null || Ve.call(r, A, he);
      const we = { srcRaw: he, resolvedSrc: "", img: A };
      T.__panoLinkedInputImageCache.set(J, we);
      let Ce = -1;
      const Me = (mt) => {
        var et, We, je;
        mt === "ready" ? (et = r == null ? void 0 : r.markImageReady) == null || et.call(r, A, he) : (We = r == null ? void 0 : r.markImageFailed) == null || We.call(r, A, he), B == null || B(A), (je = T.setDirtyCanvas) == null || je.call(T, !0, !0);
      }, G = () => {
        if (Ce += 1, Ce >= ie.length) {
          Me("failed");
          return;
        }
        we.resolvedSrc = ie[Ce], A.src = we.resolvedSrc;
      };
      return A.onload = () => Me("ready"), A.onerror = () => {
        if (Ce + 1 < ie.length) {
          G();
          return;
        }
        Me("failed");
      }, G(), A;
    },
    output: c,
    resolvePreferredExactLinkedSource: M,
    source: a,
    uiImage: (T, F, B, U = null) => {
      var he, fe, ke;
      const le = f(T, F)[0] || null, oe = a(le);
      if (!oe) return null;
      const I = `__ui__${F}`, Y = (he = B == null ? void 0 : B.get) == null ? void 0 : he.call(B, I);
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
      }, J.src = oe, (ke = B == null ? void 0 : B.set) == null || ke.call(B, I, J), J;
    },
    uiList: f,
    uiValue: h
  };
}
const WN = "state_json", rs = "sticker_image_1", YN = "external_image", is = "pano_sticker_input_images", qN = !0, Ns = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], jn = Math.PI / 180, Ur = 180 / Math.PI, mu = 1, XN = "rgb(255, 221, 87)", JN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, ZN = 64, Wh = 40, gu = 16, QN = 0.45, Yh = 180, eM = 160, Bs = 24, tM = 4, nM = 4, as = /* @__PURE__ */ new Map(), qh = /* @__PURE__ */ new Map(), li = /* @__PURE__ */ new Map(), rM = 12, or = KN({
  app: sr,
  api: mn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: tc,
    markImageFailed: mg,
    markImageLoading: hg,
    markImageReady: pg
  }
}), iM = or.assetSource, aM = or.source, bu = or.uiImage, oM = or.invalidateUiImage, sM = or.resolvePreferredExactLinkedSource, yu = or.loadPreferredExactLinkedImage;
function os(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function lM(e) {
  return 1 - Math.pow(1 - e, 3);
}
function uM(e, t, n) {
  const r = W((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function cM(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = li.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (li.delete(t), li.set(t, n), n);
}
function fM(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (li.delete(n), li.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); li.size > rM; ) {
      const a = li.keys().next().value;
      if (!a) break;
      li.delete(a);
    }
}
function dM(e) {
  return e * e * e;
}
function ll(e, t, n) {
  return { x: e, y: t, z: n };
}
function ss(e, t) {
  return ll(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ls(e, t) {
  return ll(e.x * t, e.y * t, e.z * t);
}
function $r(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Xh(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ll(e.x / t, e.y / t, e.z / t);
}
function us(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * Ur),
    pitch: W(Math.asin(W(e.y, -1, 1)) * Ur, -90, 90)
  };
}
function zr(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const o = t[r].x, c = t[r].y, f = t[a].x, h = t[a].y;
    c > e.y != h > e.y && e.x < (f - o) * (e.y - c) / (h - c || 1e-6) + o && (n = !n);
  }
  return n;
}
function ai(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function vu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return ai(e, t);
  const h = W((o * r + c * a) / f, 0, 1), g = Number(t.x || 0) + r * h, y = Number(t.y || 0) + a * h, x = Number(e.x || 0) - g, S = Number(e.y || 0) - y;
  return x * x + S * S;
}
function Xn(e, t, n) {
  return e + (t - e) * n;
}
function hr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function hM(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let cs = { fillStyle: "", url: "" };
function pM(e, t, n) {
  if (cs.url && cs.fillStyle === String(e || ""))
    return cs.url;
  const r = hM(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Bs}" height="${Bs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return cs = { fillStyle: String(e || ""), url: r }, r;
}
function Ms(e, t, n = 0.015) {
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
function mM(e) {
  return Ns.some((t) => Ms(e, t.color));
}
function _u(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), o = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: o, g: o, b: o };
  const c = Math.floor(r * 6), f = r * 6 - c, h = o * (1 - a), g = o * (1 - f * a), y = o * (1 - (1 - f) * a);
  switch (c % 6) {
    case 0:
      return { r: o, g: y, b: h };
    case 1:
      return { r: g, g: o, b: h };
    case 2:
      return { r: h, g: o, b: y };
    case 3:
      return { r: h, g, b: o };
    case 4:
      return { r: y, g: h, b: o };
    default:
      return { r: o, g: h, b: g };
  }
}
function xu(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), o = Math.min(t, n, r), c = a - o;
  let f = 0;
  c > 1e-6 && (a === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const h = a <= 1e-6 ? 0 : c / a;
  return { h: f, s: h, v: a };
}
function ra(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const gg = "pano_suite.ui_settings.v1", bg = "pano_suite.node_grid_visibility.v1";
let la = null, pr = null;
function Ps(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function gM() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(gg)) || "").trim();
    if (!t) return la ? Ps(la) : null;
    const n = JSON.parse(t), r = Ps(n);
    return la = r, r;
  } catch {
    return la ? Ps(la) : null;
  }
}
function bM(e) {
  var n;
  const t = Ps(e);
  la = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(gg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function yg() {
  var e;
  if (pr && typeof pr == "object")
    return pr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(bg)) || "").trim();
    if (!t)
      return pr = {}, pr;
    const n = JSON.parse(t);
    return pr = n && typeof n == "object" ? n : {}, pr;
  } catch {
    return pr = {}, pr;
  }
}
function yM(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = yg()[n];
  return typeof a == "boolean" ? a : !!t;
}
function vM(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = yg();
  r[n] = !!t, pr = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(bg, JSON.stringify(r));
  } catch {
  }
}
function _M(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Jh(e) {
  const { paintCount: t, maskCount: n } = _M(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, o = 0;
  return r.forEach((c) => {
    String((c == null ? void 0 : c.layerKind) || "paint") === "mask" ? o += 1 : a += 1;
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
function fs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function xM(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
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
function SM(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function wM(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function kM(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function NM(e, t, n = {}) {
  var ld;
  await Km(e, { tolerateOperationFailure: !0 }), or.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, c = xM(e, t);
  await Lc();
  const f = fs(e, "output_preset"), h = fs(e, "coverage"), g = fs(e, "bg_color"), y = fs(e, WN), x = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return yu(
      e,
      i,
      () => ye(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = x();
    return kM(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return wM(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : SM(s, i);
  }, b = Bm(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((g == null ? void 0 : g.value) || "#00ff00"),
    coverage: Qt(h == null ? void 0 : h.value),
    sharedUiSettings: gM()
  });
  e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = 0, t === "cutout" && (b.shots = Array.isArray(b.shots) ? b.shots.slice(0, 1) : [], b.shots.length || (b.active.selected_shot_id = null));
  const O = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(b.shots) ? b.shots : [], s = String(((l = b == null ? void 0 : b.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, z = O ? Sf(O, !1) : { width: 220, height: 132 }, L = dg(t), P = /* @__PURE__ */ Ma({
    stageStatus: yr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (L.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (L.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(L.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: hr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: hr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      label: O ? "Loading preview" : "Add Frame to preview"
    }
  }), $ = document.createElement("div");
  document.body.appendChild($);
  const T = ({ intent: i, file: s } = {}) => {
    if (kr(s)) {
      if (i === "add") {
        Tf(s);
        return;
      }
      i === "replace" && db(s);
    }
  }, F = ({ intent: i } = {}) => {
  }, B = xc(zN, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: c,
    shellPreset: L,
    paintSwatches: Ns.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: hr(i.color, 1)
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
    U = B.mount($);
  } catch (i) {
    try {
      B.unmount();
    } catch {
    }
    throw $.remove(), i;
  }
  const le = $.querySelector(".pano-modal-overlay"), oe = $.querySelector(".pano-modal"), I = oe == null ? void 0 : oe.querySelector("[data-stage-overlay]"), Y = oe == null ? void 0 : oe.querySelector("[data-stage-background]"), ie = oe == null ? void 0 : oe.querySelector(".pano-stage-wrap"), J = ((ld = U == null ? void 0 : U.getPaintOverlayRefs) == null ? void 0 : ld.call(U)) || {}, he = J.cursor || null, fe = J.sizePreview || null, ke = J.sizeSample || null;
  if (!le || !oe || !I || !Y || !ie || !he || !fe || !ke)
    throw B.unmount(), $.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = I.getContext("2d"), we = No(), Ce = t === "cutout" ? bw({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, Me = oe.querySelector("[data-side]"), G = oe.querySelector("[data-video-element]"), Ve = oe.querySelector(".pano-floating-right"), mt = oe.querySelector(".pano-floating-top"), et = oe.querySelector("[data-tool-rail]"), We = oe.querySelector("[data-frame-rail]"), je = oe.querySelector("[data-frame-roll-knob]"), Yt = oe.querySelector("[data-paint-dock]"), An = oe.querySelector(".pano-video-transport"), vn = oe.querySelector("[data-selection-menu]"), nn = oe.querySelector("[data-tooltip]"), sn = oe.querySelector("[data-camera-preview-host]"), R = oe.querySelector("[data-paint-color-row]"), j = oe.querySelector("[data-paint-color-pop]"), te = oe.querySelector("[data-paint-color-sv]"), _e = oe.querySelector("[data-paint-color-sv-cursor]"), pe = oe.querySelector("[data-paint-hue-strip]"), D = oe.querySelector("[data-paint-hue-handle]");
  let Q = 0, ee = 0;
  ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", Y.style.opacity = "0", a && (Me == null || Me.remove(), oe.classList.add("pano-modal-readonly"));
  const de = () => {
    if (!d.customPaintSessionStart) return;
    if (Ms(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (mM(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(d.customPaintColor),
      ...d.customPaintHistory.filter((s) => !Ms(s, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, ne = (i = !1) => {
    !j || j.hidden || (i ? de() : d.customPaintSessionStart = null, j.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, Pe = () => {
    j && (j.hidden && (d.customPaintSessionStart = Hn(d.customPaintColor)), j.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  oe.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || pi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (oe.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ne(!0), t === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, tt(), ye()), (s = P.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const ve = t === "stickers" ? b.active.selected_sticker_id : b.active.selected_shot_id, Ie = JSON.stringify(gh(b)), d = {
    mode: "pano",
    selectedId: ve,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Qt(b.coverage),
    historyController: cw(80, { entries: [Ie], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Lr,
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
    showGrid: yM(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ou(),
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
  }, Et = t === "stickers" && !r ? xw({ onReady: () => ye(), onFailed: () => ye() }) : null, er = () => !!Et && !Et.failed;
  let at = { key: null, sceneState: null };
  const _n = Number.parseFloat(
    getComputedStyle(oe).getPropertyValue("--pano-float-radius")
  ) || 10, V = (i) => {
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
    const i = (k = ie == null ? void 0 : ie.getBoundingClientRect) == null ? void 0 : k.call(ie), s = (C = Ve == null ? void 0 : Ve.getBoundingClientRect) == null ? void 0 : C.call(Ve), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, _ = u > 0 ? u + 14 + 12 : 72, v = Math.max(280, Math.floor(l - _ * 2)), w = d.fullscreen ? Math.min(1200, v) : v;
    P.videoTransport.shellMaxWidthPx = w;
  }, ln = () => {
    Ot || (Ot = window.requestAnimationFrame(() => {
      Ot = 0, qt();
    }));
  }, Dt = () => {
    const i = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, ci = (i) => {
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
  xn == null || xn.observe(ie), Ve && (xn == null || xn.observe(Ve)), bt.push(() => {
    var i;
    Ot && (window.cancelAnimationFrame(Ot), Ot = 0), (i = xn == null ? void 0 : xn.disconnect) == null || i.call(xn);
  }), ln();
  const Sn = () => {
    re.thumbnailJobId += 1, re.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = He;
  }, Pa = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      Sn();
      return;
    }
    const p = cM(u);
    if (p) {
      re.thumbnailSrc = u, P.videoTransport.thumbnails = p.thumbnails, P.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    if (re.thumbnailSrc === u && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++re.thumbnailJobId;
    re.thumbnailSrc = u, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = He;
    const _ = document.createElement("video");
    if (_.preload = "auto", _.muted = !0, _.playsInline = !0, _.crossOrigin = "anonymous", !await new Promise((ce) => {
      let ge = !1;
      const ue = (Se) => {
        ge || (ge = !0, ce(Se));
      };
      _.addEventListener("loadedmetadata", () => ue(!0), { once: !0 }), _.addEventListener("canplay", () => ue(!0), { once: !0 }), _.addEventListener("error", () => ue(!1), { once: !0 }), _.src = u, _.load();
    }) || re.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(_.videoWidth || 0)), k = Math.max(1, Number(_.videoHeight || 0));
    if (w < 1 || k < 1) return;
    const C = Math.max(0, Number(_.duration || s || 0)), N = document.createElement("canvas"), E = 46, H = Math.max(72, Math.round(w / k * E));
    N.width = H, N.height = E;
    const Z = N.getContext("2d");
    if (!Z) return;
    const K = [], q = (ce) => new Promise((ge) => {
      let ue = !1;
      const Se = () => {
        ue || (ue = !0, ge());
      };
      _.addEventListener("seeked", Se, { once: !0 }), _.addEventListener("error", Se, { once: !0 });
      try {
        _.currentTime = ce;
      } catch {
        Se();
      }
    });
    for (let ce = 0; ce < He; ce += 1) {
      if (re.thumbnailJobId !== m) return;
      const ge = ce / (He - 1), ue = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * ge)) : 0;
      if (await q(ue), re.thumbnailJobId !== m) return;
      Z.clearRect(0, 0, H, E), Z.drawImage(_, 0, 0, H, E), K.push({
        id: `thumb-${ce}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: ue,
        label: yl(ue)
      });
    }
    re.thumbnailJobId === m && (P.videoTransport.thumbnails = K, P.videoTransport.thumbnailCount = K.length || He, fM(u, {
      thumbnails: K,
      thumbnailCount: K.length || He,
      duration: C,
      fps: l
    }));
  }, Aa = (i) => {
    const s = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * s));
  }, Ca = (i) => {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return null;
    const s = Number(G.videoWidth || 0), l = Number(G.videoHeight || 0), u = document.createElement("canvas");
    u.width = s, u.height = l, u.__panoFrameIdx = Number(u.__panoFrameIdx || 0) + 1;
    const p = u.getContext("2d");
    if (!p) return null;
    for (p.drawImage(G, 0, 0, s, l), re.frameCache.set(i, u), re.frameCacheOrder = re.frameCacheOrder.filter((m) => m !== i), re.frameCacheOrder.push(i); re.frameCacheOrder.length > it; ) {
      const m = re.frameCacheOrder.shift();
      m != null && re.frameCache.delete(m);
    }
    return u;
  }, Cn = (i, s = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), u = Number(i.height || 0);
    if (l < 1 || u < 1) return !1;
    (rt.width !== l || rt.height !== u) && (rt.width = l, rt.height = u);
    const p = rt.getContext("2d");
    return p ? (p.clearRect(0, 0, l, u), p.drawImage(i, 0, 0, l, u), rt.__panoFrameIdx = Number(rt.__panoFrameIdx || 0) + 1, s != null && (re.presentedTime = Number(s || 0)), !0) : !1;
  }, Wn = (i) => {
    const s = Aa(i), l = re.frameCache.get(s) || null;
    return l ? (re.currentFrameNumber = s, Cn(l, i)) : !1;
  };
  if (bt.push(() => {
    Sn();
  }), G instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof G.requestVideoFrameCallback != "function" || G.__panoFramePumpActive) return;
      G.__panoFramePumpActive = !0;
      const v = (w, k) => {
        G.__panoFramePumpActive = !1;
        const C = Number((k == null ? void 0 : k.mediaTime) ?? G.currentTime ?? 0), N = Aa(C), E = Dt();
        re.mode === "scrub" ? Math.abs(C - Number(re.editorTime || 0)) <= E && (Ca(N), Wn(re.editorTime), ae.backgroundDirty = !0, ae.dirty = !0, cr({
          ready: !0,
          playing: !1,
          visible: Er(),
          currentTime: re.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), ye({ cause: "frame_view", localOnly: !0 })) : (re.editorTime = C, re.presentedTime = C, re.requestedTime = null, re.currentFrameNumber = N, Ca(N), re.frameCounter += 1, G.dataset.panoFrameIdx = String(re.frameCounter), ae.backgroundDirty = !0, ae.dirty = !0, cr({
          ready: !0,
          playing: !G.paused && !G.ended,
          visible: Er(),
          currentTime: C,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), ye({ cause: "frame_view", localOnly: !0 })), ae.running && (!G.paused || re.mode === "scrub") && i();
      };
      try {
        G.requestVideoFrameCallback(v);
      } catch {
        G.__panoFramePumpActive = !1;
      }
    }, s = () => {
      re.pendingPlaybackResume && (re.pendingPlaybackResume = !1, re.mode = "playback", re.requestedTime = null, zi() && (ae.backgroundDirty = !0, ae.dirty = !0), G.play().catch(() => {
      }));
    }, l = () => {
      re.editorTime = Number(G.currentTime || 0), Number(G.readyState || 0) >= 2 && zi() && (ae.backgroundDirty = !0, ae.dirty = !0), Vi(), i(), ye({ cause: "frame_view", localOnly: !0 });
    }, u = () => {
      re.mode = "playback", re.seeking = !1, re.requestedTime = null, Vi(), i(), ye({ cause: "frame_view", localOnly: !0 });
    }, p = () => {
      re.mode === "playback" && zi() && (ae.backgroundDirty = !0, ae.dirty = !0), Vi(), ye({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      cr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Er(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? P.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const v = re.seeking || re.pendingPlaybackResume || re.mode === "scrub";
      if (re.seeking = !1, !v) {
        re.requestedTime = null, i();
        return;
      }
      const w = Number(re.requestedTime ?? re.editorTime ?? 0), k = Number(G.currentTime || 0);
      if (Math.abs(k - w) > Dt()) {
        vl(w);
        return;
      }
      re.mode === "scrub" && (zi(), ae.backgroundDirty = !0, ae.dirty = !0, ye({ cause: "frame_view", localOnly: !0 })), re.requestedTime = null, s(), i();
    };
    G.addEventListener("loadedmetadata", l), G.addEventListener("loadeddata", l), G.addEventListener("canplay", l), G.addEventListener("play", u), G.addEventListener("pause", p), G.addEventListener("volumechange", m), G.addEventListener("seeked", _), bt.push(() => G.removeEventListener("loadedmetadata", l)), bt.push(() => G.removeEventListener("loadeddata", l)), bt.push(() => G.removeEventListener("canplay", l)), bt.push(() => G.removeEventListener("play", u)), bt.push(() => G.removeEventListener("pause", p)), bt.push(() => G.removeEventListener("volumechange", m)), bt.push(() => G.removeEventListener("seeked", _));
  }
  function Mo() {
    P.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === d.primaryTool : l ? i.key === d.paintTool : u ? i.key === d.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function fi(i) {
    return Vc(i == null ? void 0 : i.dataTransfer);
  }
  function $n(i) {
    const s = !!i;
    Te.active !== s && (Te.active = s, ie.classList.toggle("drop-active", s));
  }
  function ul(i, s, l = d.viewFov, u = 140, p = 620) {
    const m = g1(d.viewYaw, i), _ = s - d.viewPitch, v = l - d.viewFov, w = Math.hypot(m, _) + Math.abs(v) * 0.6, k = Math.round(W(u + w * 2.2, u, p));
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
  Yg();
  function Tr() {
    return t === "stickers" ? b.stickers : b.shots;
  }
  function un() {
    const i = b.painting || (b.painting = ga(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function vg(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = b.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? b.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const _ of s) {
      const v = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !v || u.has(v) || (u.add(v), l.push(v));
    }
    return l;
  }
  function _g() {
    return vg("paint");
  }
  function Ia(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Ta(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function Xt(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Ea(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function cl() {
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
  function Bc(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = un();
    let p = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? cl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(p)), p;
  }
  function xg(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), u = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - u) % 1 + 1) % 1,
        v: W(l - p, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: W(l - p, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: W(l + p, 0, 1)
      },
      {
        u: ((s - u) % 1 + 1) % 1,
        v: W(l + p, 0, 1)
      }
    ];
  }
  function Sg() {
    const i = new Set(_g()), l = un().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: cl(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, p) => Number((u == null ? void 0 : u.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), b.painting.groups = l, l;
  }
  function wg(i, s, l) {
    var K;
    const u = (q) => (Number(q || 0) % 1 + 1) % 1, p = [];
    for (const q of l) {
      const ce = q == null ? void 0 : q.geometry, ge = (ce == null ? void 0 : ce.geometryKind) === "lasso_fill" ? ce == null ? void 0 : ce.points : (ce == null ? void 0 : ce.processedPoints) || (ce == null ? void 0 : ce.rawPoints) || (ce == null ? void 0 : ce.points) || [];
      Array.isArray(ge) && p.push(...ge);
    }
    if (!p.length) return null;
    const m = u(((K = p[0]) == null ? void 0 : K.u) || 0);
    let _ = 0, v = 0;
    p.forEach((q) => {
      const ce = u((q == null ? void 0 : q.u) || 0);
      _ += m + Yn(ce, m), v += Number((q == null ? void 0 : q.v) || 0);
    });
    const w = (_ / p.length % 1 + 1) % 1;
    let k = 1 / 0, C = -1 / 0, N = 1 / 0, E = -1 / 0;
    p.forEach((q) => {
      const ce = u((q == null ? void 0 : q.u) || 0), ge = Yn(ce, w);
      k = Math.min(k, ge), C = Math.max(C, ge);
      const ue = Number((q == null ? void 0 : q.v) || 0);
      N = Math.min(N, ue), E = Math.max(E, ue);
    });
    const H = l.reduce((q, ce) => {
      const ge = ri(String((ce == null ? void 0 : ce.toolKind) || "pen")), ue = Dn[ge] || Dn[Lr], Se = Math.max(1, Number((ce == null ? void 0 : ce.size) || 10)) * Math.max(0.1, Number((ue == null ? void 0 : ue.sizeScale) ?? 1));
      return Math.max(q, Se);
    }, 0), Z = Math.max(35e-4, H / 2048);
    return {
      centerUv: { u: ((w + (k + C) * 0.5) % 1 + 1) % 1, v: W((N + E) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - k) * 0.5 + Z,
      halfH: (E - N) * 0.5 + Z,
      uvPad: Z
    };
  }
  function Zr(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const p = un().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === u);
    if (!p) return null;
    const m = l || tr(u, s);
    return p.frame = wg(u, s, m), p.frame;
  }
  function Oi() {
    var u;
    const i = (Array.isArray(b.stickers) ? b.stickers : []).map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = Sg().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((u = b.painting) == null ? void 0 : u.raster_objects) ? b.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function fl(i = !0) {
    var l, u, p, m, _, v;
    const s = Oi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((u = (l = d.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), k = String(((m = (p = d.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), C = String(((v = (_ = d.interaction) == null ? void 0 : _.stroke) == null ? void 0 : v.toolKind) || "").trim();
      w && k === "paint" && C !== "eraser" && !s.includes(w) && s.push(w);
    }
    return s;
  }
  function dl(i = !0) {
    var v, w, k, C, N, E;
    const s = Oi();
    if (!i) return s;
    const l = String(((w = (v = d.interaction) == null ? void 0 : v.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), u = String(((C = (k = d.interaction) == null ? void 0 : k.stroke) == null ? void 0 : C.layerKind) || "").trim(), p = String(((E = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!l || u !== "paint" || p === "eraser" || s.some((H) => H.type === "strokeGroup" && String(H.actionGroupId || "") === l))
      return s;
    const m = Ct();
    let _ = s.reduce((H, Z) => Math.max(H, Number((Z == null ? void 0 : Z.z_index) || 0)), -1) + 1;
    return m && Bt(m) && String(m.actionGroupId || "") === l && (_ = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: _,
        item: null
      }
    ].sort((H, Z) => Number((H == null ? void 0 : H.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0));
  }
  function kg() {
    return un().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Ri(Ia("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Ng() {
    var i;
    return (Array.isArray((i = b.painting) == null ? void 0 : i.raster_objects) ? b.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Fi(Ta((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Kc(i = d.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function Mg() {
    var s, l, u, p;
    let i = null;
    try {
      const m = fl(), _ = ((p = (u = (l = (s = d.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : p.canvas) || null;
      _ && (i = {
        source: _,
        revision: `${Ki()}:${Po()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Po() {
    var p, m, _, v, w, k, C;
    const i = d.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Kc(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const N = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, E = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), H = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((v = N == null ? void 0 : N.points) == null ? void 0 : v.length) ?? 0, Z = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${E || "paint"}_${s}_live${Z}_${H}_${d.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), u = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((C = i == null ? void 0 : i.item) == null ? void 0 : C.id) || "");
    return `_${s}_${l || u || "active"}_${d.livePaintInteractionRevision}`;
  }
  function hl() {
    const i = Array.isArray(b.shots) ? b.shots : [], s = Array.isArray(b.stickers) ? b.stickers : [];
    return [...i, ...s];
  }
  function zn(i) {
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
    const l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Ta(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function cn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = Xt(i.rasterObjectId || i.id || "");
    return !!s && !!Fi(Ta(s));
  }
  function Ri(i) {
    const s = Ea(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = un().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: Ia("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Bt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Ri(Ia(l, s));
  }
  function tr(i, s = null) {
    const l = Ea(i, s), u = String(l.actionGroupId || "").trim();
    return u ? qi(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === u) : [];
  }
  function Pg(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${d.mode}:${La()}`;
    if (d.mode === "frame") {
      const m = Ue(), _ = String((m == null ? void 0 : m.id) || ""), v = m ? Kt(m) : null;
      return `${p}:frame:${_}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Ao(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: W(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function Yn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function pl(i, s = null, l = null) {
    var k;
    const u = Ea(i, s), p = Array.isArray(l) ? l : tr(u.actionGroupId, u.layerKind), m = [];
    if (p.forEach((C) => {
      const N = (C == null ? void 0 : C.geometry) || null, E = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(E) && m.push(...E);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let v = 0, w = 0;
    return m.forEach((C) => {
      v += _ + Yn(Number((C == null ? void 0 : C.u) || 0), _), w += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: W(w / m.length, 0, 1)
    };
  }
  function Co(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), _ = Yn(Number(i.u || 0), p), v = Number(i.v || 0) - m, w = Number(u || 0) * jn, k = Math.cos(w), C = Math.sin(w), N = Math.max(0.02, Number(l || 1)), E = (_ * k - v * C) * N, H = (_ * C + v * k) * N;
    return {
      ...i,
      u: ((p + E) % 1 + 1) % 1,
      v: W(m + H, 0, 1)
    };
  }
  function Wc(i, s, l, u = null, p = null, m = null) {
    const _ = Ea(i, p), v = String(_.actionGroupId || "").trim();
    if (!v) return !1;
    const w = qi(_.layerKind), k = Array.isArray(u) ? new Map(u.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let C = !1;
    if (w.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== v) return;
      const E = (k == null ? void 0 : k.get(String((N == null ? void 0 : N.id) || ""))) || N, H = N == null ? void 0 : N.geometry, Z = E == null ? void 0 : E.geometry;
      !H || !Z || (Array.isArray(Z.points) && (H.points = Z.points.map((K) => Ao(K, s, l)), C = !0), Array.isArray(Z.rawPoints) && (H.rawPoints = Z.rawPoints.map((K) => Ao(K, s, l)), C = !0), Array.isArray(Z.processedPoints) && (H.processedPoints = Z.processedPoints.map((K) => Ao(K, s, l)), C = !0));
    }), C && m) {
      const N = un().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === v);
      N && (N.frame = null);
    }
    return C;
  }
  function Yc(i, s = 1, l = 0, u = null, p = null, m = null) {
    const _ = Ea(i, p), v = String(_.actionGroupId || "").trim();
    if (!v) return !1;
    const w = qi(_.layerKind), k = Array.isArray(u) ? u : tr(v, _.layerKind), C = Array.isArray(k) ? new Map(k.map((H) => [String((H == null ? void 0 : H.id) || ""), H])) : null, N = (m == null ? void 0 : m.centerUv) ?? pl(v, _.layerKind, k);
    let E = !1;
    if (w.forEach((H) => {
      if (String((H == null ? void 0 : H.actionGroupId) || "").trim() !== v) return;
      const Z = (C == null ? void 0 : C.get(String((H == null ? void 0 : H.id) || ""))) || H, K = H == null ? void 0 : H.geometry, q = Z == null ? void 0 : Z.geometry;
      !K || !q || (Array.isArray(q.points) && (K.points = q.points.map((ce) => Co(ce, N, s, l)), E = !0), Array.isArray(q.rawPoints) && (K.rawPoints = q.rawPoints.map((ce) => Co(ce, N, s, l)), E = !0), Array.isArray(q.processedPoints) && (K.processedPoints = q.processedPoints.map((ce) => Co(ce, N, s, l)), E = !0));
    }), E && m) {
      const H = un().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === v);
      H && (H.frame = null);
    }
    return E;
  }
  function qc(i, s, l, u = null) {
    const p = Xt(i);
    if (!p) return !1;
    const m = In().find((C) => String((C == null ? void 0 : C.id) || "").trim() === p);
    if (!m) return !1;
    const _ = u && typeof u == "object" ? u : m, v = (_ == null ? void 0 : _.transform) || {}, w = Number(v.du || 0) + Number(s || 0), k = W(Number(v.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = k, !0;
  }
  function Ag(i, s = 1, l = null) {
    const u = Xt(i);
    if (!u) return !1;
    const p = In().find((k) => String((k == null ? void 0 : k.id) || "").trim() === u);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, _ = (m == null ? void 0 : m.transform) || {}, v = Math.max(0.01, Number(_.scale || 1)), w = W(v * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = w, !0;
  }
  function Ct() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const s = Ri(i);
    if (s) return s;
    const l = Fi(i);
    return l || (t === "cutout" ? hl().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : Tr().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function nr() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const p = String(u || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(d.selectedId || "") ? Ct() : Ri(p) || Fi(p) || (t === "cutout" ? hl().find((_) => String((_ == null ? void 0 : _.id) || "") === p) : Tr().find((_) => String((_ == null ? void 0 : _.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function ml(i = null) {
    const s = Array.isArray(i) ? i : nr();
    if (!s || s.length < 2) return null;
    const l = s.map((k) => Zt(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), p = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), m = Math.min(...u), _ = Math.max(...u), v = Math.min(...p), w = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + _) * 0.5, y: (v + w) * 0.5 },
      corners: [
        { x: m, y: v },
        { x: _, y: v },
        { x: _, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + _) * 0.5, y: v, a: { x: m, y: v }, b: { x: _, y: v } },
        { edge: "right", x: _, y: (v + w) * 0.5, a: { x: _, y: v }, b: { x: _, y: w } },
        { edge: "bottom", x: (m + _) * 0.5, y: w, a: { x: _, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (v + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + _) * 0.5, y: v },
      rotateHandle: { x: (m + _) * 0.5, y: v - 30 }
    };
  }
  function Xc(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(d.selectedIds) && d.selectedIds.includes(s);
  }
  function Io() {
    const i = Ct();
    return i ? Bt(i) || cn(i) ? "stroke" : zn(i) ? "frame" : "image" : null;
  }
  function wn(i) {
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = un().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (cn(i)) {
      const s = Xt(i.rasterObjectId || i.id || ""), l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function gl(i = null) {
    const s = Array.isArray(i) ? i : nr();
    return s.length > 0 && s.every((l) => wn(l));
  }
  function Cg(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), p = un().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (cn(i)) {
      const u = Xt(i.rasterObjectId || i.id || ""), p = In().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function Ig() {
    if (r) return;
    const i = nr();
    if (!i.length) return;
    const s = !gl(i);
    let l = !1;
    i.forEach((u) => {
      Cg(u, s) && (l = !0);
    }), l && (st(), ut(), tt(), Ke(), ye());
  }
  function Li(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && _t(i) ? b.active.selected_sticker_id = i.id || null : b.active.selected_sticker_id = null, i && zn(i) ? b.active.selected_shot_id = i.id || null : i ? zn(i) || (b.active.selected_shot_id = b.active.selected_shot_id) : b.active.selected_shot_id = null;
  }
  function Tg(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const v = String((_ == null ? void 0 : _.id) || "").trim();
      !v || u.has(v) || (u.add(v), l.push(v));
    }), d.selectedIds = l;
    const p = String(s || "").trim();
    d.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = Ct();
    b.active.selected_sticker_id = m && _t(m) && m.id || null, m && zn(m) ? b.active.selected_shot_id = m.id || null : l.length || (b.active.selected_shot_id = null);
  }
  function Jc() {
    const i = (Array.isArray(b.shots) ? b.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(b.stickers) ? b.stickers : []).map((l, u) => {
      var m, _;
      const p = Jt(l) ? String(l.id || rs) : String(((_ = (m = b.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : _.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Eg(i) {
    return i === "frame" ? Ee.camera : i === "stroke" ? Ee.paintbrush_vertical_tool : Ee.image;
  }
  function bl(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Eg(i.kind)
    };
  }
  function Zc() {
    return cl();
  }
  function Jt(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === rs || String(i.source_kind || "") === YN;
  }
  function $i(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Dg(i) {
    return Jt(i) && $i(i) ? Ec : 1;
  }
  function Og() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function Fg() {
    return String(Og() || "") === "lasso_fill";
  }
  function Rg() {
    if (r) return;
    const i = Ct();
    !i || !Jt(i) || (i.visible = $i(i), rn(), st(), ut(), Ke(), tt(), ye());
  }
  function Lg() {
    if (r || t !== "stickers") return;
    const i = Ct();
    if (!i || !Jt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = _l(is, () => {
      ye();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = ji(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), st(), ut(), Ke(), tt(), ye();
  }
  function $g(i) {
    if (!i || !Jt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = _l(is, () => {
      ye();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = ji(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function zg() {
    const i = Ct();
    if (!i || !Jt(i)) return !1;
    const s = $g(i);
    if (!s) return !1;
    const l = (u, p) => Math.abs(Number(u || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Qc(i) {
    return or.uiList(e, i);
  }
  function ef(i) {
    return or.uiValue(e, i);
  }
  function tf() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Rs(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Vg() {
    const { metaKey: i } = tf(), s = ef(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Qr(i) {
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
  function yl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function cr(i = {}) {
    const s = Number(i.currentTime ?? re.editorTime ?? 0), l = Number(i.duration ?? P.videoTransport.duration ?? 0), u = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!P.videoTransport.ready, p = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!P.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(G instanceof HTMLVideoElement ? G.muted : P.videoTransport.muted), v = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : G instanceof HTMLVideoElement ? G.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : ci(G), k = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: u,
      playing: p,
      visible: m,
      loop: k,
      currentTime: Number.isFinite(s) ? s : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, s / l * 100)) : 0,
      currentTimeLabel: yl(s),
      durationLabel: yl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(i.mode || re.mode || "playback"),
      hasAudio: w,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? P.videoTransport.thumbnailCount ?? He))
    });
  }
  function Er() {
    return !!(G instanceof HTMLVideoElement && G.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function jg() {
    cr({
      visible: Er()
    });
  }
  function zi() {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return !1;
    const i = Number(G.videoWidth || 0), s = Number(G.videoHeight || 0);
    (rt.width !== i || rt.height !== s) && (rt.width = i, rt.height = s);
    const l = rt.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(G, 0, 0, i, s), rt.__panoFrameIdx = Number(rt.__panoFrameIdx || 0) + 1, re.presentedTime = Number(re.editorTime || G.currentTime || 0), !0) : !1;
  }
  function nf() {
    return re.mode === "scrub" && Number(rt.width || 0) > 0 && Number(rt.height || 0) > 0 && Number(rt.__panoFrameIdx || 0) > 0 ? rt : G instanceof HTMLVideoElement && Number(G.videoWidth || 0) > 0 && Number(G.videoHeight || 0) > 0 && Number(G.readyState || 0) >= 2 ? G : null;
  }
  function vl(i) {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return;
    const s = Math.max(0, Number(i || 0));
    if (re.requestedTime = s, !re.seeking && !(Math.abs(Number(G.currentTime || 0) - s) <= 5e-4)) {
      re.seeking = !0;
      try {
        G.currentTime = s;
      } catch {
        re.seeking = !1;
      }
    }
  }
  function Vi() {
    if (!(G instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = tf(), s = Qc(i)[0] || null, l = aM(s), u = Vg(), p = Math.max(0, Number((u == null ? void 0 : u.frames) || 0)), m = Math.max(1, Number((u == null ? void 0 : u.fps) || 24)), _ = Number((u == null ? void 0 : u.duration) || (p > 0 ? p / m : 0)), v = !!(u != null && u.has_audio) || ci(G);
    return l && G.dataset.panoSrc !== l ? (G.pause(), G.dataset.panoSrc = l, G.dataset.panoFrameIdx = "0", G.loop = !!P.videoTransport.loop, G.muted = !!P.videoTransport.muted, G.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), G.src = l, G.load(), Pa(l, _, m)) : !l && G.getAttribute("src") && (G.pause(), G.removeAttribute("src"), G.load(), Sn()), G.loop !== !!P.videoTransport.loop && (G.loop = !!P.videoTransport.loop), l && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Pa(l, _, m), l || Sn(), cr({
      ready: !!l,
      playing: !G.paused && !G.ended,
      visible: !!l && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: re.editorTime,
      duration: _,
      frameCount: p,
      fps: m,
      mode: re.mode,
      hasAudio: v,
      loop: !!G.loop,
      muted: !!G.muted,
      volume: Number(G.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), l || null;
  }
  function Hg(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const u = i[0];
      if (u && typeof u == "object" && !Array.isArray(u)) return u;
    }
    if (Array.isArray(s) && s.length > 0) {
      const u = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (u && typeof u == "object" && !Array.isArray(u))
        return {
          yaw_deg: Number(u.yaw_deg || 0),
          pitch_deg: Number(u.pitch_deg || 0),
          hFOV_deg: Number(u.hFOV_deg || 30),
          rot_deg: Number(u.roll_deg || 0)
        };
    }
    return null;
  }
  function _l(i, s = null) {
    return bu(e, i, Le, s || (() => ye()));
  }
  function rf(i = null) {
    return _l(is, i);
  }
  function ji(i, s, l) {
    const u = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = W(Number(i || 30), 0.1, 179) * jn, _ = 2 * Math.atan(Math.tan(m * 0.5) * (p / u));
    return W(_ * Ur, 0.1, 179);
  }
  function Ug(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const u = l.version;
      let p = null;
      if (typeof u == "number" && Number.isInteger(u) ? p = u : typeof u == "string" && /^\d+$/.test(u) && (p = Number.parseInt(u, 10)), p !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const _ = Number(m.yaw_deg), v = Number(m.pitch_deg), w = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![_, v, w, k].every((H) => Number.isFinite(H))) return null;
      let C = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const N = {
        yaw_deg: C,
        pitch_deg: W(v, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(k, 0.1, 179)
      }, E = Number(l.source_aspect);
      return Number.isFinite(E) && E > 0 && (N.source_aspect = E), N;
    } catch {
      return null;
    }
  }
  function af(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Ci(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: W(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Gg(i) {
    var v;
    if (!i || typeof i != "object") return af(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const w = W(p, 0.1, 179) * jn, k = W(m, 0.1, 179) * jn, C = Math.tan(k * 0.5);
      if (Math.abs(C) > 1e-6) {
        const N = Math.tan(w * 0.5) / C;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (i != null && i.asset_id && ((v = b == null ? void 0 : b.assets) != null && v[i.asset_id])) {
      const w = b.assets[i.asset_id], k = Number((w == null ? void 0 : w.w) || 0), C = Number((w == null ? void 0 : w.h) || 0);
      k > 0 && C > 0 && (_ = k / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: W(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function Bg(i) {
    return or.linkedValue(e, i);
  }
  function Kg(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Ug(s);
    if (u) {
      const _ = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), v = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: ji(u.hFOV_deg, _, v),
        rot_deg: Number(u.roll_deg || 0)
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
  function of(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : null, l = (s == null ? void 0 : s.link) ?? null, u = rf(() => {
      eo(e, "image-loaded");
    }), p = Hg(ef("pano_sticker_input_pose"), null), m = Bg("sticker_state"), _ = or.externalStateHash(e, m), v = l == null ? null : Kg(p, m, u), w = Rm(b, {
      connected: l != null,
      linkId: l,
      stateHash: _,
      pose: v,
      imageWidth: Number((u == null ? void 0 : u.naturalWidth) || (u == null ? void 0 : u.width) || 0),
      imageHeight: Number((u == null ? void 0 : u.naturalHeight) || (u == null ? void 0 : u.height) || 0)
    });
    w.changed && (b.stickers = w.state.stickers, b.active = w.state.active, l == null && d.selectedId === rs && (d.selectedId = null, d.selectedIds = []), ut(), Ke(), tt()), ye();
  }
  function Da(i = {}) {
    const l = i.preservePanelValues !== !1 ? Ct() : null;
    l && (d.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Hr(l)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, b.active.selected_sticker_id = null, b.active.selected_shot_id = null;
  }
  function Wg() {
    if (t !== "cutout") return;
    const i = Ue();
    i && (d.selectedId = String(i.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function xl() {
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
  function sf() {
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
  function Dr() {
    var l;
    const i = !!Ue();
    d.mode === "frame" && !i && (d.mode = "pano"), d.outputPreviewRect = null, P.viewButtons.forEach((u) => {
      const p = u.key === d.mode;
      u.pressed = p ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && d.mode === "frame" ? Ue() : null;
    P.frameRail.visible = !!s, P.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.visible = !!s && !r && s.locked !== !0, P.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), P.frameRollKnob.displayValue = ra(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((l = d.interaction) == null ? void 0 : l.kind) === "roll_frame", P.frameRollKnob.armed = !!s && d.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = s ? Hr(s) : "", P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(Hr(s)) === u
    })), s || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!Ue(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = d.mode !== "frame", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame), sf(), zf() ? xt(d.pointerPos) : V(d.mode === "pano" ? "grab" : "default");
  }
  function Yg() {
    const s = hf({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Sl() {
    return Ln(d.viewYaw, d.viewPitch, 0);
  }
  function Oa(i) {
    const { right: s, up: l, fwd: u } = Sl(), p = $r(i, s), m = $r(i, l), _ = $r(i, u);
    if (_ <= 1e-5) return null;
    const v = I.width, w = I.height, k = d.viewFov * jn, C = 2 * Math.atan(Math.tan(k / 2) * (w / v)), N = v / 2 / Math.tan(k / 2), E = w / 2 / Math.tan(C / 2);
    return {
      x: v / 2 + p / _ * N,
      y: w / 2 - m / _ * E,
      z: _
    };
  }
  function wl(i, s) {
    const { right: l, up: u, fwd: p } = Sl(), m = I.width, _ = I.height, v = d.viewFov * jn, w = 2 * Math.atan(Math.tan(v / 2) * (_ / m)), k = (i - m / 2) / (m / 2) * Math.tan(v / 2), C = (_ / 2 - s) / (_ / 2) * Math.tan(w / 2), N = ss(ss(ls(l, k), ls(u, C)), p);
    return Xh(N);
  }
  function ei() {
    const i = I.width, s = I.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const v = s, w = v * l;
      return { x: (i - w) * 0.5, y: 0, w, h: v };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function kl(i) {
    var _;
    if (i && typeof i == "object" && (Jt(i) || i.external === !0))
      return rf(() => {
        eo(e, "image-loaded");
      });
    const s = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Le.get(s);
    if (l) return l;
    const u = (_ = b.assets) == null ? void 0 : _[s], p = iM(u);
    if (!p) return null;
    const m = new Image();
    return hg(m, p), m.onload = () => {
      pg(m, p), ye();
    }, m.onerror = () => {
      mg(m, p), ye();
    }, m.src = p, Le.set(s, m), m;
  }
  function lf(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = Ge.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ge.set(l, p), p;
  }
  function qg(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ze.get(s);
    if (l) return l.ready ? l : null;
    const u = lf(i, () => {
      const C = Ze.get(s);
      C && (C.ready = !1), ye({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const p = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (p < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = p, _.height = m;
    const v = _.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, p, m), v.drawImage(u, 0, 0, p, m);
    const w = v.getImageData(0, 0, p, m).data, k = { canvas: _, width: p, height: m, alpha: w, ready: !0 };
    return Ze.set(s, k), k;
  }
  function Xg(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), _ = Yn(Number(i.u || 0), p), v = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), k = Number(u || 0) * jn, C = Math.cos(k), N = Math.sin(k), E = _ / w, H = v / w, Z = E * C + H * N, K = -E * N + H * C;
    return {
      ...i,
      u: ((p + Z) % 1 + 1) % 1,
      v: m + K
    };
  }
  function Jg(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, _ = Xg(
      m,
      p,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), v = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(v > 1e-6) || !(w > 1e-6)) return null;
    const k = Yn(Number(_.u || 0), Number(l.u0 || 0)) / v, C = (Number(_.v || 0) - Number(l.v0 || 0)) / w;
    if (k < 0 || k > 1 || C < 0 || C > 1) return 0;
    const N = qg(i);
    if (!N) return null;
    const E = W(Math.floor(k * N.width), 0, N.width - 1), H = W(Math.floor(C * N.height), 0, N.height - 1);
    return Number(N.alpha[(H * N.width + E) * 4 + 3] || 0);
  }
  function uf(i, s, l, u = null) {
    if (!(s != null && s.visible) || !zr(l, s.corners)) return !1;
    const p = u || ir(l, performance.now()), m = Jg(i, p);
    return m === null ? !0 : m > 8;
  }
  function Zg() {
    var u, p, m, _, v, w, k, C;
    const i = ((p = (u = d.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : p.call(u, fl(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : v.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((C = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : C.height) || 1024));
    return { width: s, height: l };
  }
  function Qg() {
    var H, Z, K;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = Vn(), u = `${Po()}:${l.width}:${l.height}`;
    if (((H = d._activePaintEraserPreviewInfo) == null ? void 0 : H.cacheKey) === u)
      return d._activePaintEraserPreviewInfo.value || null;
    const p = dn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const q = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Tl(q, p.targetSpace, !0);
    }
    const _ = Ra(l.width, l.height, { readback: !0 });
    if (!Mf(_, p, { w: l.width, h: l.height })) return null;
    const v = ((K = (Z = _.ctx) == null ? void 0 : Z.getImageData(0, 0, l.width, l.height)) == null ? void 0 : K.data) || null;
    if (!v) return null;
    let w = l.width, k = l.height, C = -1, N = -1;
    for (let q = 0; q < l.height; q += 1)
      for (let ce = 0; ce < l.width; ce += 1)
        v[(q * l.width + ce) * 4 + 3] <= 8 || (ce < w && (w = ce), q < k && (k = q), ce > C && (C = ce), q > N && (N = q));
    if (C < w || N < k)
      return d._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const E = {
      surface: _,
      bounds: { minX: w, minY: k, maxX: C, maxY: N },
      key: `${u}:${w}:${k}:${C}:${N}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: u, value: E }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function Hi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function e0(i, s, l) {
    var u, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, _ = ((p = i.item) == null ? void 0 : p.transform) || {}, v = Number(m.u0 || 0) + Number(_.du || 0), w = Number(m.u1 || 0) + Number(_.du || 0), k = Number(m.v0 || 0) + Number(_.dv || 0), C = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - v >= 1 || v < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = tr(i.actionGroupId, "paint"), _ = Zr(i.actionGroupId, "paint", m);
      if (!_) return null;
      const v = _.centerUv.u - _.halfW, w = _.centerUv.u + _.halfW, k = _.centerUv.v - _.halfH, C = _.centerUv.v + _.halfH;
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
  function t0(i, s, l) {
    if (!i || !s) return !1;
    const u = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: l - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], p = u(i), m = u(s);
    return p.some((_) => m.some((v) => !(_.maxX < v.minX || v.maxX < _.minX || _.maxY < v.minY || v.maxY < _.minY)));
  }
  function n0(i, s, l) {
    var Se, $e, Be, nt, xe, se, be;
    if (!i || !s || !((Se = l == null ? void 0 : l.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || p < 1) return i;
    const m = e0(s, u, p);
    if (m && !t0(m, l.bounds, u)) return i;
    const _ = String((($e = s.item) == null ? void 0 : $e.id) || s.id || ""), v = ((Be = s.item) == null ? void 0 : Be.transform) || {}, w = `${l.key}:${_}:${u}:${p}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, k = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(w)) return k.get(w);
    const C = W(Math.floor(Number(((nt = l.bounds) == null ? void 0 : nt.minX) || 0)), 0, Math.max(0, u - 1)), N = W(Math.floor(Number(((xe = l.bounds) == null ? void 0 : xe.minY) || 0)), 0, Math.max(0, p - 1)), E = W(Math.ceil(Number(((se = l.bounds) == null ? void 0 : se.maxX) || 0)), C, Math.max(0, u - 1)), H = W(Math.ceil(Number(((be = l.bounds) == null ? void 0 : be.maxY) || 0)), N, Math.max(0, p - 1)), Z = Math.max(1, E - C + 1), K = Math.max(1, H - N + 1), q = Ra(u, p, { readback: !0 });
    q.ctx.clearRect(0, 0, u, p), q.ctx.drawImage(i, 0, 0);
    const ce = q.ctx.getImageData(C, N, Z, K);
    q.ctx.save(), q.ctx.globalCompositeOperation = "destination-out", q.ctx.drawImage(l.surface.canvas, 0, 0), q.ctx.restore();
    const ge = q.ctx.getImageData(C, N, Z, K);
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
  function cf(i, s = null) {
    const l = Xt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const p = lf(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: _ } = Zg(), v = (i == null ? void 0 : i.transform) || {}, w = [
      l,
      m,
      _,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      La()
    ].join(":"), k = gt.get(w);
    if (k) return k;
    gt.size > 64 && gt.clear();
    const C = document.createElement("canvas");
    C.width = m, C.height = _;
    const N = C.getContext("2d");
    if (!N) return null;
    const E = Number(u.u0 || 0) * m, H = Number(u.v0 || 0) * _, Z = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), K = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * _), q = E + Z * 0.5 + Number(v.du || 0) * m, ce = H + K * 0.5 + Number(v.dv || 0) * _, ge = Number(v.rot_deg || 0) * jn, ue = Math.max(0.01, Number(v.scale || 1));
    for (const Se of [-m, 0, m])
      N.save(), N.translate(q + Se, ce), N.rotate(ge), N.scale(ue, ue), N.drawImage(p, -Z * 0.5, -K * 0.5, Z, K), N.restore();
    return gt.set(w, C), C;
  }
  function r0() {
    return ol(b, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function i0(i) {
    return _m(
      b,
      (s, l, u) => kl(u || s),
      { scene: i }
    );
  }
  function ff(i, s, l, u, p = "modal_object_view") {
    if (!i || !s || !l) return !1;
    String((l == null ? void 0 : l.mode) || "");
    const m = ti(u);
    if (bf(s, l))
      return h0(
        s,
        l,
        m && d.showPanorama ? u : null,
        `${p}_bg_gl`
      );
    const v = Oo(), w = Fo(v), k = d.showObjects ? Fa() : Gi([]), N = Ja({
      stateRevision: [
        p,
        m ? Qr(u) : "no_bg",
        Array.isArray(w) ? w.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        k.length ? k.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? u : null,
      backgroundRevision: m ? `${p}:${Qr(u)}` : "",
      coverageDeg: Qt(b.coverage),
      scene: v,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), E = we;
    if (!E.syncState(N)) return !1;
    const Z = E.renderToTarget(`${p}_direct`, l, {
      width: s.w,
      height: s.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Z ? (i.drawImage(Z, s.x, s.y, s.w, s.h), !0) : !1;
  }
  async function Nl(i, s) {
    const l = await new Promise((v) => i.toBlob(v, "image/png")), u = new FormData();
    u.append("image", l, s), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const p = await mn.fetchApi("/upload/image", { method: "POST", body: u });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), _ = String((m == null ? void 0 : m.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let To = null, Eo = !1;
  function a0() {
    const i = Jh(b.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const s = b.painting_layer, l = Ki();
    return !s || typeof s != "object" || String(s.revision || "") !== l || i.totalPaintCount > 0 && !s.paint || i.totalMaskCount > 0 && !s.mask;
  }
  function df() {
    const i = String(e.id ?? "0"), s = as.get(i);
    if (Eo && s) return s;
    const l = (async () => {
      var m, _, v, w, k, C, N, E, H, Z, K, q;
      const u = Ki(), p = Jh(b.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        b.painting_layer !== null && (b.painting_layer = null, To = u, En());
        return;
      }
      if (To !== u && !Eo) {
        Eo = !0;
        try {
          zo();
          const ce = fl(!1), ge = ((_ = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, ce)) || null, ue = ((v = ge == null ? void 0 : ge.displayPaint) == null ? void 0 : v.canvas) || null, Se = ((w = ge == null ? void 0 : ge.committedMask) == null ? void 0 : w.canvas) || null, $e = Math.max(1, Number(((k = ge == null ? void 0 : ge.descriptor) == null ? void 0 : k.width) || (ue == null ? void 0 : ue.width) || (Se == null ? void 0 : Se.width) || 2048)), Be = Math.max(1, Number(((C = ge == null ? void 0 : ge.descriptor) == null ? void 0 : C.height) || (ue == null ? void 0 : ue.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!ue && p.totalPaintCount > 0 || !Se && p.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((N = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== $e || Number(((E = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.height) || 0) !== Be) && (d._paintLayerSyncBlankSurface = Ra($e, Be)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, $e, Be));
          const nt = ue || p.totalPaintCount > 0 && ((H = d._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null, xe = Se || p.totalMaskCount > 0 && ((Z = d._paintLayerSyncBlankSurface) == null ? void 0 : Z.canvas) || null;
          if (!nt && !xe) return;
          let se = null, be = null;
          const Fe = [];
          if (p.totalPaintCount > 0) {
            se = await Nl(nt, `pano_paint_${i}.png`);
            for (const Re of ce) {
              const De = String(Re || "").trim();
              if (!De) continue;
              const Ye = ((q = (K = d.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : q.call(K, De)) || null;
              if (!Ye) continue;
              const lt = De.replace(/[^a-zA-Z0-9_-]+/g, "_"), Qe = await Nl(Ye, `pano_group_${i}_${lt}.png`);
              Qe && Fe.push({
                id: De,
                actionGroupId: De,
                image: Qe
              });
            }
          }
          p.totalMaskCount > 0 && (be = await Nl(xe, `pano_mask_${i}.png`)), u === Ki() && (b.painting_layer = {
            paint: se,
            mask: be,
            groups: Fe,
            revision: u
          }, To = u, En());
        } catch (ce) {
          throw ce;
        } finally {
          Eo = !1;
        }
      }
    })();
    return as.set(i, l), l.finally(() => {
      as.get(i) === l && as.delete(i);
    }), l;
  }
  function di() {
    if (t === "cutout") {
      const v = nf();
      if (v) return v;
      const w = yu(
        e,
        ["erp_image", "bg_erp"],
        () => ye(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !tc(w) ? w : bu(e, "pano_input_images", Le, () => ye()) || w || null;
    }
    const i = nf();
    if (i) return i;
    const s = bu(e, "pano_input_images", Le, () => ye());
    if (s && !tc(s)) return s;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((v) => String((v == null ? void 0 : v.name) || "")) : [], u = l.includes("erp_image"), p = l.includes("bg_erp");
    let m = [];
    return r && (u || p) ? m = u ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], yu(e, m, () => ye(), `background:${m.join("|")}`) || s || null;
  }
  function ti(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function o0() {
    let i = Na;
    const s = [];
    if (d.showPanorama) {
      const l = di();
      i = ec(l, ti);
    }
    if (d.showObjects) {
      const l = Array.isArray(b.stickers) ? b.stickers : [];
      for (const u of l) {
        if ((u == null ? void 0 : u.visible) === !1) continue;
        const p = kl(u);
        s.push(ec(p, ti));
      }
    }
    return VN({
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
  function Ml(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(W(i.y, -1, 1))
    };
  }
  function Pl(i, s = null) {
    const { lon: l, lat: u } = Ml(i), p = ei();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const _ = p.y + (0.5 - u / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function Do(i) {
    const s = Ln(
      Number(i.yaw_deg || 0),
      Number(i.pitch_deg || 0),
      Number(i.rot_deg || i.roll_deg || 0)
    ), l = Math.tan(W(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * jn), u = Math.tan(W(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * jn);
    return {
      centerDir: s.fwd,
      right: s.right,
      up: s.up,
      tanX: l,
      tanY: u
    };
  }
  function ni(i, s, l) {
    return Xh(ss(ss(i.centerDir, ls(i.right, s)), ls(i.up, l)));
  }
  function hf(i) {
    const s = Do(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: p }) => ni(s, u * s.tanX, p * s.tanY));
  }
  function pf(i, s, l) {
    const u = Do(i), p = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return ni(u, p, m);
  }
  function mf(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: W((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function s0(i) {
    var w, k, C, N;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), p = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.du) || 0), _ = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((E) => Ao(Co(E, l, u, p), m, _));
  }
  function l0(i) {
    const s = Xt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${d.mode}:${La()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (d.mode === "frame") {
      const m = Ue(), _ = m ? Kt(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function u0(i) {
    const s = String((i == null ? void 0 : i.id) || ""), u = [
      zn(i) ? "frame" : _t(i) ? "sticker" : "item",
      s,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Hr(i)
    ].join(":");
    if (d.mode === "frame") {
      const p = Ue(), m = p ? Kt(p) : null;
      return `${u}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function c0() {
    var s;
    const i = String(((s = b.ui_settings) == null ? void 0 : s.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function gf() {
    var i;
    return !!Y && !!((i = we == null ? void 0 : we.isSupported) != null && i.call(we));
  }
  function bf(i, s) {
    return !gf() || t !== "stickers" && t !== "cutout" || String((s == null ? void 0 : s.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function Oo() {
    return d.showObjects ? r0() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Fo(i) {
    return !d.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : i0(i);
  }
  function yf() {
    var i, s;
    return ((s = (i = d.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function f0() {
    return yf() ? `${El()}:mask_display` : "";
  }
  function Gi(i) {
    if (!d.showMask) return i;
    const s = yf();
    if (!s) return i;
    const l = f0(), u = i.reduce((_, v) => Math.max(_, Number((v == null ? void 0 : v.zIndex) || 0)), -1), p = (Array.isArray(b.stickers) ? b.stickers : []).reduce((_, v) => Math.max(_, Number((v == null ? void 0 : v.z_index) || 0)), -1), m = Math.max(u, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Fa() {
    var u, p;
    const i = dl(!0), s = Qg(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const _ = String(m.actionGroupId || m.id || "");
        if (!_) continue;
        const v = ((p = (u = d.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : p.call(u, _)) || null;
        if (!v) continue;
        l.push({
          id: `paint_group:${_}`,
          source: v,
          revision: `${El()}:${_}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const _ = m.item || null, v = Xt((_ == null ? void 0 : _.id) || m.id || "");
        if (!v) continue;
        const w = cf(_, () => ye());
        if (!w) continue;
        const k = n0(w, m, s), C = (_ == null ? void 0 : _.transform) || {};
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
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return Gi(l);
  }
  function d0(i, s = "modal_bg_gl") {
    const l = Oo(), u = Fo(l), p = ti(i), m = p ? Qr(i) : "none", _ = d.showObjects ? Fa() : Gi([]), v = null, w = [
      s,
      m,
      Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((k) => String((k == null ? void 0 : k.id) || "")).join(",") : "none",
      Array.isArray(u) ? u.map((k) => `${String((k == null ? void 0 : k.assetId) || "")}:${String((k == null ? void 0 : k.revision) || "")}`).join(",") : "none",
      _.length ? _.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${String((k == null ? void 0 : k.revision) || "")}:${Number((k == null ? void 0 : k.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: Ja({
        stateRevision: w,
        backgroundSource: p ? i : null,
        backgroundRevision: p ? `${s}:${m}` : "",
        coverageDeg: Qt(b.coverage),
        scene: l,
        textures: u,
        paintSource: v,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: p || u.length > 0 || _.length > 0
    };
  }
  function Al() {
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
  function h0(i, s, l, u = "modal_bg_gl") {
    var k;
    if (!bf(i, s)) return !1;
    if (!ae.backgroundDirty && ae.backgroundWasVisible) return !0;
    const { descriptor: p, hasContent: m } = d0(l, u);
    if (!m || !we.syncState(p))
      return Al(), !1;
    const v = we.renderToTarget("modal_pano", s, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (k = Y == null ? void 0 : Y.getContext) == null ? void 0 : k.call(Y, "2d");
    return !v || !w ? (Al(), !1) : (w.clearRect(0, 0, Y.width, Y.height), w.drawImage(v, 0, 0, Y.width, Y.height), ae.backgroundWasVisible = !0, ae.backgroundDirty = !1, !0);
  }
  function p0() {
    return (d.showObjects ? Fa() : Gi([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function m0() {
    if (!ae.backgroundDirty && ae.backgroundWasVisible) return;
    const i = di(), s = p0(), l = new Map((b.stickers || []).map((E) => [String((E == null ? void 0 : E.id) || ""), E])), u = (E) => {
      const H = kl(l.get(E.id));
      return H ? { media: H, revision: Qr(H) } : null;
    }, p = { ...b.assets };
    for (const E of b.stickers || []) {
      const H = String((E == null ? void 0 : E.asset_id) || "");
      H && !p[H] && Le.has(H) && (p[H] = { type: "comfy_image", filename: H });
    }
    const m = JSON.stringify([b.stickers, Object.keys(p)]);
    at.key !== m && (at = { key: m, sceneState: zx({ ...b, assets: p, painting: null }) });
    const _ = d.showObjects ? _w(at.sceneState, 0, {
      media: u,
      zIndex: (E) => {
        var H;
        return Number(((H = l.get(E.id)) == null ? void 0 : H.z_index) || 0);
      },
      paintLayers: s
    }) : s.map((E) => ({ kind: "erp", ...E })), v = d.showPanorama && ti(i) ? { media: i, revision: Qr(i), coverage: Qt(b.coverage) } : null, w = Y.width, k = Y.height, C = Et.render({
      width: w,
      height: k,
      camera: vw({ yaw_deg: d.viewYaw, pitch_deg: d.viewPitch, roll_deg: 0, hFOV_deg: d.viewFov }, w, k),
      background: v,
      layers: _
    }), N = Y.getContext("2d");
    N.clearRect(0, 0, w, k), !v && !_.length ? (N.fillStyle = "#070707", N.fillRect(0, 0, w, k)) : C && N.drawImage(C, 0, 0, w, k), ae.backgroundWasVisible = !!C, ae.backgroundDirty = !1;
  }
  function g0(i = !1) {
    const s = I.width, l = I.height, u = ei();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || (A.fillStyle = "#070707", A.fillRect(0, 0, s, l), A.fillStyle = "#070707", A.fillRect(u.x, u.y, u.w, u.h)), zo(), ff(
      A,
      { x: u.x, y: u.y, w: u.w, h: u.h },
      { mode: "unwrap" },
      di(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const _ = u.x + u.w * m / 16;
        A.beginPath(), A.moveTo(_, u.y), A.lineTo(_, u.y + u.h), A.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const _ = u.y + u.h * m / 8;
        A.beginPath(), A.moveTo(u.x, _), A.lineTo(u.x + u.w, _), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(u.x, u.y + u.h / 2), A.lineTo(u.x + u.w, u.y + u.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const p = u.y + u.h * 0.57;
      A.fillText("Left", u.x + u.w * 0.25, p), A.fillText("Front", u.x + u.w * 0.5, p), A.fillText("Right", u.x + u.w * 0.75, p), A.fillText("Back", u.x + 38, p), A.fillText("Back", u.x + u.w - 38, p);
    }
  }
  function vf(i, s, l = 1) {
    let u = !1;
    A.strokeStyle = s, A.lineWidth = l, A.beginPath();
    for (const p of i) {
      const m = Oa(p);
      if (!m) {
        u = !1;
        continue;
      }
      u ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), u = !0);
    }
    A.stroke();
  }
  function b0(i = !1) {
    const s = I.width, l = I.height;
    if (i || (er() || gf() ? A.clearRect(0, 0, s, l) : (A.fillStyle = "#070707", A.fillRect(0, 0, s, l))), zo(), er() ? m0() : ff(
      A,
      { x: 0, y: 0, w: s, h: l },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: Qt(b.coverage)
      },
      di(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push(Rn(p, _));
        vf(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push(Rn(_, p));
        vf(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", u.forEach((p) => {
        const m = Oa(p.dir);
        m && A.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function y0(i, s = null, l = null, u = null) {
    if (d.mode === "frame") {
      const p = s || Ue();
      if (!p) return [];
      const m = l || Kt(p);
      return Q0(i, p, m);
    }
    return Pf(i, u);
  }
  function Ro(i, s = null, l = null, u = null, p = null) {
    if (!i) return null;
    if (d.mode === "unwrap") {
      const _ = Pf([i], p);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const m = Bi(i);
    return m ? Or(m, s, l, u) : null;
  }
  function v0(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = tr(l, i.layerKind), p = Zr(l, i.layerKind, u), m = (p == null ? void 0 : p.centerUv) || pl(l, i.layerKind, u), _ = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, v = [], w = d.mode === "frame" ? Ue() : null, k = w ? Kt(w) : null;
    for (const ue of u) {
      const Se = (ue == null ? void 0 : ue.geometry) || null, $e = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Be = y0($e, w, k, _).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
      if (!Be.length) continue;
      const nt = ri(String((ue == null ? void 0 : ue.toolKind) || "pen")), xe = Dn[nt] || Dn[Lr];
      v.push({
        points: Be,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ue == null ? void 0 : ue.size) || 10) * Math.max(0.1, Number((xe == null ? void 0 : xe.sizeScale) ?? 1)) + 10),
        layerKind: String((ue == null ? void 0 : ue.layerKind) || i.layerKind || "paint")
      });
    }
    const C = Ro(m, null, w, k, _);
    if (!C) {
      const ue = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, ue), ue;
    }
    const E = xg(p).map((ue) => Ro(ue, C.x, w, k, _)).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y)).map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) }));
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
  function _0(i, s) {
    const l = d.mode === "frame" ? Ue() : null, u = l ? Kt(l) : null, p = mf(i), m = d.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, _ = Ro(p, null, l, u, m), w = s0(i).map((E) => Ro(E, (_ == null ? void 0 : _.x) ?? null, l, u, m)).filter((E) => Number.isFinite(E == null ? void 0 : E.x) && Number.isFinite(E == null ? void 0 : E.y));
    if (!Array.isArray(w) || w.length < 4) {
      const E = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(s, E), E;
    }
    const k = w.slice(0, 4).map((E) => ({ x: Number((E == null ? void 0 : E.x) || 0), y: Number((E == null ? void 0 : E.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: k.reduce((E, H) => E + Number(H.x || 0), 0) / k.length,
        y: k.reduce((E, H) => E + Number(H.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return d._strokeGeomCache.set(s, N), N;
  }
  function Or(i, s = null, l = null, u = null, p = {}) {
    if (d.mode === "frame") {
      const Se = l || Ue(), $e = u || Kt(Se);
      if (!Se || !$e) return null;
      const Be = Se ? $a(Se, i) : null;
      return Be ? {
        x: Number($e.x || 0) + Number(Be.x || 0) * Number($e.w || 0),
        y: Number($e.y || 0) + Number(Be.y || 0) * Number($e.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return Pl(i, s);
    const { right: m, up: _, fwd: v } = Sl(), w = $r(i, m), k = $r(i, _), C = $r(i, v), N = 1e-4;
    if (!Number.isFinite(C) || C <= N && !(p != null && p.clipBehind)) return null;
    const E = Math.max(C, N), H = I.width, Z = I.height, K = d.viewFov * jn, q = 2 * Math.atan(Math.tan(K / 2) * (Z / Math.max(H, 1))), ce = H / 2 / Math.tan(K / 2), ge = Z / 2 / Math.tan(q / 2), ue = Math.max(H, Z) * 2;
    return {
      x: W(H / 2 + w / E * ce, -ue, H + ue),
      y: W(Z / 2 - k / E * ge, -ue, Z + ue),
      z: E,
      rawZ: C,
      clipped: C <= N
    };
  }
  function x0(i, s = []) {
    if (d.mode !== "pano" || _t(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? uM(0.035, 0.2, Math.min(...l)) : 1;
  }
  function S0(i) {
    const s = Rn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "frame" ? Ue() : null, u = l ? Kt(l) : null, p = d.mode === "pano" && (_t(i) || zn(i)), m = p ? { clipBehind: !0 } : null, _ = Or(s, null, l, u, m);
    if (!_) return { visible: !1 };
    const v = Do(i), k = hf(i).map((se) => Or(se, _.x, l, u, m)).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
    if (k.length < 4) return { visible: !1 };
    const C = ni(v, 0, v.tanY), N = ni(v, 0, v.tanY + Math.max(v.tanY * 0.43, 0.053)), E = Or(C, _.x, l, u, m);
    if (!E) return { visible: !1 };
    const H = Or(N, (E == null ? void 0 : E.x) ?? _.x, l, u, m), Z = ((H == null ? void 0 : H.x) ?? E.x) - E.x, K = ((H == null ? void 0 : H.y) ?? E.y) - E.y, q = Math.hypot(Z, K) || 1, ce = {
      x: E.x + Z / q * 30,
      y: E.y + K / q * 30
    }, ge = Or(ni(v, 0, v.tanY), _.x, l, u, m), ue = Or(ni(v, v.tanX, 0), _.x, l, u, m), Se = Or(ni(v, 0, -v.tanY), _.x, l, u, m), $e = Or(ni(v, -v.tanX, 0), _.x, l, u, m);
    if (!ge || !ue || !Se || !$e) return { visible: !1 };
    const Be = [
      _,
      ...k,
      E,
      H,
      ge,
      ue,
      Se,
      $e
    ];
    if (p && !Be.some((se) => Number((se == null ? void 0 : se.rawZ) ?? (se == null ? void 0 : se.z)) > 1e-4)) return { visible: !1 };
    const nt = x0(i, Be), xe = [
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
        x: $e.x,
        y: $e.y,
        a: { x: k[3].x, y: k[3].y },
        b: { x: k[0].x, y: k[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
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
      const p = String(i.actionGroupId || i.id || "").trim(), m = Pg(p, i.layerKind), _ = d._strokeGeomCache.get(m);
      return _ || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), v0(i, m));
    }
    if (cn(i)) {
      const p = l0(i), m = d._strokeGeomCache.get(p);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), _0(i, p));
    }
    const s = u0(i), l = d._strokeGeomCache.get(s);
    if (l) return l;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const u = S0(i);
    return d._strokeGeomCache.set(s, u), u;
  }
  function Lo(i, s, l, u = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const _ = m / l;
      let v = 0, w = 0;
      s === 0 ? (v = _, w = 0) : s === 1 ? (v = 1, w = _) : s === 2 ? (v = 1 - _, w = 1) : (v = 0, w = 1 - _);
      const k = pf(i, v, w), C = d.mode === "unwrap" ? Pl(k, u) : Oa(k);
      C && p.push(C);
    }
    return p;
  }
  function w0(i, s) {
    const l = Rn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), u = d.mode === "unwrap" ? Pl(l) : null, p = u ? u.x : null, m = d.mode === "pano" ? 28 : 20, _ = [
      Lo(i, 0, m, p),
      Lo(i, 1, m, p),
      Lo(i, 2, m, p),
      Lo(i, 3, m, p)
    ];
    $m(A, _, { selected: s });
  }
  function k0() {
    const i = [...Array.isArray(b.shots) ? b.shots : []], s = [...Array.isArray(b.stickers) ? b.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function Cl() {
    const i = [...Array.isArray(b.shots) ? b.shots : []];
    return [...[...Array.isArray(b.stickers) ? b.stickers : []].sort((l, u) => Number(u.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function $o(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function _f(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const p = W(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * p;
    const _ = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", v = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = s ? 3.2 : 2.6;
    $o(A, u), A.fillStyle = v, A.fill(), A.strokeStyle = _, A.lineWidth = w, A.stroke(), A.save(), A.strokeStyle = _, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const k = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], C = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = s ? 12 : 9;
    k.forEach((E) => {
      const Z = k.find((ge) => (ge == null ? void 0 : ge.edge) === C[E == null ? void 0 : E.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, K = Z.x - E.x, q = Z.y - E.y, ce = Math.hypot(K, q) || 1;
      A.beginPath(), A.moveTo(E.x, E.y), A.lineTo(E.x + K / ce * N, E.y + q / ce * N), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function N0(i, s, l, u) {
    const p = W(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (zn(i)) {
      _f(s, l, u);
      return;
    }
    if (_t(i)) {
      const _ = A.globalAlpha;
      A.globalAlpha = _ * Dg(i) * p, d.mode === "frame" ? (A.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = l ? 2 : 1, $o(A, s.corners), A.stroke()) : w0(i, l), A.globalAlpha = _;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * p, A.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", $o(A, s.corners), A.fill(), A.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = l ? 2.8 : 1.9, $o(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function xf(i, s, l) {
    if (_t(i)) {
      zm(A, s, { accent: l });
      return;
    }
    A.fillStyle = l, s.corners.forEach((u) => {
      A.beginPath(), A.arc(u.x, u.y, 6.5, 0, Math.PI * 2), A.fill();
    }), zn(i) && (A.strokeStyle = l, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var C, N, E, H;
      const p = (((C = u.b) == null ? void 0 : C.x) ?? u.x) - (((N = u.a) == null ? void 0 : N.x) ?? u.x), m = (((E = u.b) == null ? void 0 : E.y) ?? u.y) - (((H = u.a) == null ? void 0 : H.y) ?? u.y), _ = Math.hypot(p, m) || 1, v = p / _, w = m / _, k = 10;
      A.beginPath(), A.moveTo(u.x - v * k, u.y - w * k), A.lineTo(u.x + v * k, u.y + w * k), A.stroke();
    }), A.lineCap = "butt"), Bt(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = l, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function M0() {
    var v;
    const [i, s] = c0(), l = d.mode === "frame" ? [] : nr(), u = l.length > 1, p = t === "cutout" ? k0() : Tr(), m = p.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${zn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== p || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: p,
      orderKey: m,
      sorted: [...p]
    });
    const _ = d._sortedItemsCache.sorted;
    for (const w of _) {
      const k = d.mode !== "frame" && !u && Xc(w);
      if (d.mode === "frame" && !k || !d.showObjects && !zn(w)) continue;
      const C = _t(w), N = zn(w), E = wn(w);
      if (!C && !N)
        continue;
      const H = Zt(w);
      if (t !== "stickers" && !H.visible)
        continue;
      const Z = W(Number((H == null ? void 0 : H.visibilityAlpha) ?? 1), 0, 1);
      if (Z <= 0.01) continue;
      const K = N && t === "cutout" && d.mode === "pano" ? W(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= K, N0(w, H, k, E), k && H.visible) {
        const q = E ? "#ff4d4f" : C && Jt(w) ? "#f59e0b" : "#0070f3", ce = A.globalAlpha;
        A.globalAlpha = ce * Z, xf(w, H, q), A.globalAlpha = ce;
      }
      A.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !Ue() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const w = d.cutoutPanoFrameVisual, k = W(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= k, _f(w.geom, w.selected, w.locked), w.selected && xf(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (u) {
      const w = ml(l);
      if (w != null && w.visible) {
        const k = gl(l) ? "#ff4d4f" : "#0070f3";
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
        for (let N = 1; N < k.corners.length; N += 1) A.lineTo(k.corners[N].x, k.corners[N].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, k.corners.forEach((N) => {
          A.beginPath(), A.arc(N.x, N.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((v = d.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const w = Gf(d.interaction.start, d.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
    d.hqFrames && i >= 40 && s >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ye());
  }
  function P0(i) {
    const s = Sr(i), l = W(Number((s == null ? void 0 : s.aspect) || 1), 0.05, 20), u = 320;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function Sf(i, s = !1) {
    const l = W(Ci(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function A0(i) {
    if (!sn || !i) return !1;
    const s = sn.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || sn.clientWidth || 0)), u = Math.round(Number(s.clientHeight || sn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function C0() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function I0(i, s = {}) {
    if (!i) return "";
    const l = di(), u = l && ti(l) ? Qr(l) : "no_bg", p = P0(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      El(),
      C0(),
      Po(),
      u,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${p.width}x${p.height}`,
      String(s.quality || "balanced")
    ].join("|");
  }
  function T0() {
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
    const s = di();
    if (!i || !Ce || !Oe) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (Z = Ce == null ? void 0 : Ce.clearScene) == null || Z.call(Ce), (K = Oe == null ? void 0 : Oe.requestRender) == null || K.call(Oe);
      return;
    }
    const l = Sf(i, !!d.outputPreviewExpanded);
    P.cameraPreview.width = l.width, P.cameraPreview.height = l.height, P.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const u = Oo(), p = Fo(u), m = ti(s), _ = m ? Qr(s) : "none", v = d.showObjects ? Fa() : Gi([]), w = Ja({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(u == null ? void 0 : u.stickers) ? u.stickers.map((q) => String((q == null ? void 0 : q.id) || "")).join(",") : "none",
        Array.isArray(p) ? p.map((q) => `${String((q == null ? void 0 : q.assetId) || "")}:${String((q == null ? void 0 : q.revision) || "")}`).join(",") : "none",
        v.length ? v.map((q) => `${String((q == null ? void 0 : q.id) || "")}:${String((q == null ? void 0 : q.revision) || "")}:${Number((q == null ? void 0 : q.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        Qt(b.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? s : null,
      backgroundRevision: m ? `cutout_preview:${_}` : "",
      coverageDeg: Qt(b.coverage),
      scene: u,
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
    Ce.syncScene(w), Oe.setView(Sr(i));
    const C = A0(l), N = C ? Oe.present() : !1;
    C || Oe.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = C && N ? "" : "Loading preview", P.cameraPreview.settled = C && N && ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame;
  }
  function E0(i, s, l, u = {}) {
    if (!Ce || !l) return !1;
    const p = di(), m = Oo(), _ = Fo(m), v = ti(p), w = d.showObjects ? Fa() : Gi([]);
    return v || _.length > 0 || w.length > 0 ? (Ce.syncScene(Ja({
      stateRevision: I0(l, u),
      backgroundSource: v && d.showPanorama ? p : null,
      backgroundRevision: v ? `cutout_frame:${Qr(p)}` : "",
      coverageDeg: Qt(b.coverage),
      scene: m,
      textures: _,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), Ce.renderShotToContext(i, s, l, u)) : !1;
  }
  function Il(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return pf(i, l, u);
  }
  function Bi(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return ll(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function D0(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function O0(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: fn(i, "widthScale", 1),
      pressureLike: fn(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function F0(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Tl(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (u) {
      let K = null;
      i.forEach((q) => {
        const ce = Number((q == null ? void 0 : q.u) || 0), ge = Number((q == null ? void 0 : q.v) || 0), ue = (ce % 1 + 1) % 1, Se = K == null ? ue : K + Yn(ue, (K % 1 + 1) % 1);
        p.set(q, { x: Se, y: ge }), K = Se;
      });
    }
    const m = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : p.get(K) || D0(K), _ = (K, q, ce, ge = {}) => {
      const ue = u ? (Number(q) % 1 + 1) % 1 : Number(q), Se = O0(K, ue, ce, ge);
      return p.set(Se, { x: Number(q), y: Number(ce) }), Se;
    }, v = (K, q, ce) => {
      const ge = m(K), ue = m(q);
      return _(K, Xn(ge.x, ue.x, ce), Xn(ge.y, ue.y, ce), {
        t: Xn(Number((K == null ? void 0 : K.t) || 0), Number((q == null ? void 0 : q.t) || 0), ce),
        widthScale: Xn(fn(K, "widthScale", 1), fn(q, "widthScale", 1), ce),
        pressureLike: Xn(fn(K, "pressureLike", 1), fn(q, "pressureLike", 1), ce)
      });
    };
    if (i.length === 1) {
      const K = m(i[0]);
      return [_(i[0], K.x, K.y)];
    }
    const w = F0(s, l), k = (K, q) => {
      const ce = [0];
      for (let se = 1; se < K.length; se += 1) {
        const be = m(K[se - 1]), Fe = m(K[se]);
        ce.push(ce[se - 1] + Math.hypot(Fe.x - be.x, Fe.y - be.y));
      }
      const ge = ce[ce.length - 1] || 0;
      if (ge <= 1e-8) {
        const se = K[0], be = m(se);
        return [_(se, be.x, be.y)];
      }
      const ue = [];
      let Se = 0;
      for (let se = 0; se <= ge + 1e-9; se += q) {
        for (; Se < ce.length - 2 && ce[Se + 1] < se; ) Se += 1;
        const be = ce[Se], Fe = ce[Se + 1], Re = Math.max(1e-8, Fe - be);
        ue.push(v(K[Se], K[Se + 1], W((se - be) / Re, 0, 1)));
      }
      const $e = K[K.length - 1], Be = m($e), nt = ue[ue.length - 1], xe = nt ? m(nt) : null;
      return (!xe || Math.hypot(xe.x - Be.x, xe.y - Be.y) > q * 0.35) && ue.push(_($e, Be.x, Be.y)), ue;
    }, C = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const q = m(K[0]), ce = [_(K[0], q.x, q.y)];
      for (let Se = 0; Se < K.length - 1; Se += 1) {
        const $e = K[Se], Be = K[Se + 1], nt = m($e), xe = m(Be), se = _(
          $e,
          nt.x * 0.75 + xe.x * 0.25,
          nt.y * 0.75 + xe.y * 0.25,
          {
            t: Number($e.t || 0) * 0.75 + Number(Be.t || 0) * 0.25,
            widthScale: fn($e, "widthScale", 1) * 0.75 + fn(Be, "widthScale", 1) * 0.25,
            pressureLike: fn($e, "pressureLike", 1) * 0.75 + fn(Be, "pressureLike", 1) * 0.25
          }
        ), be = _(
          $e,
          nt.x * 0.25 + xe.x * 0.75,
          nt.y * 0.25 + xe.y * 0.75,
          {
            t: Number($e.t || 0) * 0.25 + Number(Be.t || 0) * 0.75,
            widthScale: fn($e, "widthScale", 1) * 0.25 + fn(Be, "widthScale", 1) * 0.75,
            pressureLike: fn($e, "pressureLike", 1) * 0.25 + fn(Be, "pressureLike", 1) * 0.75
          }
        );
        ce.push(se, be);
      }
      const ge = K[K.length - 1], ue = m(ge);
      return ce.push(_(ge, ue.x, ue.y)), ce;
    }, N = k(i, w);
    if (N.length < 3) return N;
    const E = l ? 2 : 1;
    let H = N.slice();
    for (let K = 0; K < E; K += 1) H = C(H);
    return k(H, Math.max(w * 0.75, 55e-5));
  }
  function fn(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function R0(i) {
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
  function Ra(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const p = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, u.width, u.height), p.imageSmoothingEnabled = !0), { canvas: u, ctx: p };
  }
  function La() {
    const i = Vo();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ki() {
    const i = Vo();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function El() {
    const i = Po(), s = Ki();
    return i ? `${s}:${i}` : s;
  }
  function L0() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function $0() {
    d.paintCompositeRevision += 1;
  }
  function z0() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function wf() {
    var i, s;
    d.paintEngineRevisionKey = null, (s = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, b), d.paintEngineRevisionKey = La();
  }
  function kf() {
    b.painting_layer !== null && (b.painting_layer = null), To = "";
  }
  function rn() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, z0(), ae.backgroundDirty = !0, ae.dirty = !0;
  }
  function rr({ rebuildPaintEngine: i = !1 } = {}) {
    kf(), L0(), rn(), i && wf();
  }
  function Wi() {
    kf(), $0(), rn();
  }
  function zo() {
    var u;
    const i = Vo(), s = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== s && (d.paintEngine = Ou(i), d.paintEngineDescriptorKey = s, d.paintEngineRevisionKey = "");
    const l = La();
    d.paintEngineRevisionKey !== l && (d.paintEngineRevisionKey = l, (u = d.paintEngine) == null || u.rebuildCommitted(b));
  }
  function Vo() {
    const i = Math.max(1, M(Number((b == null ? void 0 : b.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Vn() {
    return Vo();
  }
  function V0(i, s, l, u, p = null) {
    const m = R0(i), _ = fn(s, "widthScale", 1) * fn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * _) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * jn) * l * _) : Math.max(0.5, m.value / (2 * Math.PI) * l * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function j0(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, _ = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * _ : 1, u === "mask") {
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
  function H0(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function U0(i, s, l, u, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), j0(i, l, p);
    const _ = (v) => H0(i, v, m);
    if (s.length === 1) {
      _(s[0]), i.restore();
      return;
    }
    for (let v = 0; v < s.length - 1; v += 1) {
      const w = s[v], k = s[v + 1];
      if (!w || !k) continue;
      const C = Number(w.x || 0), N = Number(w.y || 0), E = Number(k.x || 0), H = Number(k.y || 0), Z = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), K = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(N) || !Number.isFinite(E) || !Number.isFinite(H) || !Number.isFinite(Z) || !Number.isFinite(K)) continue;
      const q = E - C, ce = H - N, ge = Math.hypot(q, ce);
      if (!Number.isFinite(ge) || ge < 1e-6) {
        _(w);
        continue;
      }
      if (ge > Math.max(u.w, u.h) * 0.5) continue;
      const ue = Math.max(0.5, Math.min(Z, K)), Se = Math.max(0.35, Math.min(ue * 0.4, 2.25)), $e = Math.max(1, Math.ceil(ge / Se));
      for (let Be = 0; Be <= $e; Be += 1) {
        const nt = Be / $e;
        _({
          x: Xn(C, E, nt),
          y: Xn(N, H, nt),
          radiusPx: Xn(Z, K, nt)
        });
      }
    }
    _(s[s.length - 1]), i.restore();
  }
  function G0(i, s, l, u) {
    U0(i, s, l, u, { preview: !1 });
  }
  function B0(i, s, l, u, p) {
    var v, w, k, C;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", _ = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = s[0]) == null ? void 0 : v[m]) || 0) * u.w, Number(((w = s[0]) == null ? void 0 : w[_]) || 0) * u.h);
    for (let N = 1; N < s.length; N += 1)
      i.lineTo(Number(((k = s[N]) == null ? void 0 : k[m]) || 0) * u.w, Number(((C = s[N]) == null ? void 0 : C[_]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Nf(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function K0(i, s) {
    const l = Nf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: V0(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Mf(i, s, l = null) {
    var v, w, k, C;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((k = s == null ? void 0 : s.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((C = s == null ? void 0 : s.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return B0(i.ctx, Nf(p), p, u), !0;
    const _ = K0(p, u);
    return _.length ? (G0(i.ctx, _, p, u), !0) : !1;
  }
  function W0(i, s, l, u = 8) {
    const p = new Uint8Array(s * l), m = [], _ = new Int32Array(s * l), v = new Int32Array(s * l);
    for (let w = 0; w < l; w += 1)
      for (let k = 0; k < s; k += 1) {
        const C = w * s + k;
        if (p[C] || i[C] <= u) continue;
        let N = 0, E = 0;
        _[E] = k, v[E] = w, E += 1, p[C] = 1;
        const H = [];
        let Z = k, K = w, q = k, ce = w;
        for (; N < E; ) {
          const ge = _[N], ue = v[N];
          N += 1, H.push({ x: ge, y: ue }), ge < Z && (Z = ge), ue < K && (K = ue), ge > q && (q = ge), ue > ce && (ce = ue);
          const Se = [
            [(ge - 1 + s) % s, ue],
            [(ge + 1) % s, ue],
            [ge, ue - 1],
            [ge, ue + 1]
          ];
          for (const [$e, Be] of Se) {
            if (Be < 0 || Be >= l) continue;
            const nt = Be * s + $e;
            p[nt] || i[nt] <= u || (p[nt] = 1, _[E] = $e, v[E] = Be, E += 1);
          }
        }
        m.push({ pixels: H, minX: Z, minY: K, maxX: q, maxY: ce });
      }
    return m;
  }
  function Y0(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, k) => w - k);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let u = -1, p = 0;
    for (let w = 0; w < l.length; w += 1) {
      const k = l[w], N = (w === l.length - 1 ? l[0] + s : l[w + 1]) - k - 1;
      N > u && (u = N, p = w);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let _ = 1 / 0, v = -1 / 0;
    for (const w of l) {
      const k = (w - m + s) % s;
      _ = Math.min(_, k), v = Math.max(v, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, v - _ + 1)
    };
  }
  function q0(i, s, l = {}) {
    var k;
    const u = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || u < 1 || p < 1) return [];
    const _ = m.getImageData(0, 0, u, p), v = new Uint8Array(u * p);
    for (let C = 0; C < v.length; C += 1) v[C] = _.data[C * 4 + 3];
    return W0(v, u, p, 8).map((C, N) => {
      const E = Y0(C, u);
      if (!E) return null;
      const H = Number(E.widthPx || 0), Z = C.maxY - C.minY + 1, K = Number(E.startX || 0), q = document.createElement("canvas");
      q.width = H, q.height = Z;
      const ce = q.getContext("2d");
      if (!ce) return null;
      const ge = ce.createImageData(H, Z);
      return C.pixels.forEach(({ x: ue, y: Se }) => {
        const $e = (Se * u + ue) * 4, Be = (Number(ue || 0) - K + u) % u, nt = ((Se - C.minY) * H + Be) * 4;
        ge.data[nt + 0] = _.data[$e + 0], ge.data[nt + 1] = _.data[$e + 1], ge.data[nt + 2] = _.data[$e + 2], ge.data[nt + 3] = _.data[$e + 3];
      }), ce.putImageData(ge, 0, 0), {
        id: ia("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + N * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / p,
          u1: H / u,
          v1: (C.maxY + 1) / p
        },
        rasterDataUrl: q.toDataURL("image/png"),
        transform: {
          du: K / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function $a(i, s) {
    if (!i || !s) return null;
    const l = Do(i), u = $r(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const p = $r(s, l.right) / u, m = $r(s, l.up) / u;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function X0(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const l = ei();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Oa(Bi(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Pf(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const u = ei();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, _ = s == null ? m : Number(s || 0) + Yn(m, s);
        return {
          x: u.x + _ * u.w,
          y: u.y + Number(p.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => Oa(Bi(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function J0(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], p = i[(l + 1) % i.length];
      if (!u || !p || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(u.x), Number(p.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function Z0(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const p of i) {
      const m = Bi(p), _ = $a(s, m);
      if (!_) return [];
      u.push({
        x: Number(l.x || 0) + Number(_.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(_.y || 0) * Number(l.h || 0)
      });
    }
    return J0(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function Q0(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const p of i) {
      const m = Bi(p), _ = $a(s, m);
      _ && u.push({
        x: Number(l.x || 0) + Number(_.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(_.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function eb() {
    var H;
    const i = Ue(), s = Rl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, u = Math.max(1, Number(s.focalPx || 1)), p = l.x + l.w * 0.5, m = l.y + l.h * 0.5, { halfW: _, halfH: v } = Lu(
      { width: I.width, height: I.height },
      u
    ), w = { x: p - _, y: m - v, w: _ * 2, h: v * 2 }, k = {
      ...i,
      hFOV_deg: 2 * Math.atan(_ / u) * Ur,
      vFOV_deg: 2 * Math.atan(v / u) * Ur
    }, C = tb(l);
    A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, I.width, I.height);
    const N = d.interaction ? "draft" : String(((H = b.ui_settings) == null ? void 0 : H.preview_quality) || "balanced");
    return E0(A, w, k, { quality: N }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(w.x, w.y, w.w, w.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, I.width, I.height), A.roundRect(l.x, l.y, l.w, l.h, C), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = XN, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, C - 1)), A.stroke(), A.restore(), !0;
  }
  function tb(i) {
    const s = Math.max(1e-6, Number(ae.frameCanvasScale || 1));
    return Math.min(_n * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Fr() {
    var s;
    const i = d.mode === "frame" ? Ue() : null;
    P.frameRollKnob.visible = !!i && !r && i.locked !== !0, P.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), P.frameRollKnob.displayValue = ra(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!i && d.altModifier === !0;
  }
  function nb() {
    var w, k;
    if (((w = d.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, s = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let l;
    if (d.mode === "frame") {
      const C = Ue(), N = Kt(C);
      l = Z0(s, C, N);
    } else
      l = X0(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), _ = Math.round(Number(p.g || 0) * 255), v = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let C = 1; C < l.length; C++) A.lineTo(Number(l[C].x || 0), Number(l[C].y || 0));
    A.closePath(), u ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${_},${v},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function rb() {
    const i = d.frameRollOverlayVisual, s = W(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Kt(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * jn, m = Math.hypot(l.w, l.h) * 0.55, _ = Math.cos(p) * m, v = Math.sin(p) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(l.x, l.y, l.w, l.h), A.clip(), A.translate(u.x, u.y), A.rotate(p);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    A.beginPath();
    for (let k = -m; k <= m; k += w)
      A.moveTo(k, -m), A.lineTo(k, m);
    for (let k = -m; k <= m; k += w)
      A.moveTo(-m, k), A.lineTo(m, k);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(u.x - _, u.y - v), A.lineTo(u.x + _, u.y + v), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function ib() {
    return t !== "cutout" || !Ue() ? 0 : QN;
  }
  function ab() {
    const i = W(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const s = Ue(), l = s ? Zt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((_) => ({ x: Number(_.x || 0), y: Number(_.y || 0) })) : null;
    l != null && l.visible && u && (d.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (d.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Xc(s),
      locked: wn(s)
    });
    const p = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : p ? d.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, I.width, I.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let _ = 1; _ < 4; _ += 1) A.lineTo(m[_].x, m[_].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function ob() {
    d.mode === "frame" ? (ae.frameSafeRect = Pb(), eb()) : d.mode === "unwrap" ? g0(!1) : b0(!1), ab(), t === "cutout" && T0(), M0(), Fr(), nb(), rb(), P.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && tt(), ae.hasPresentedFrame || (ae.hasPresentedFrame = !0, Y.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame && d.mode !== "frame");
    const i = o0();
    P.stageStatus = i.status, P.stageStatusDetail = i.detail, i.status === yr ? (ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", i.detail)) : (ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind"));
  }
  function sb(i = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function lb() {
    e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Mg();
  }
  function ye(i = {}) {
    var v, w, k, C, N, E, H, Z, K, q;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), p = String(((v = d.interaction) == null ? void 0 : v.kind) || "");
    (!s || p === "view" || p === "pan_frame" || sb() || !!((w = d.viewTween) != null && w.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (ae.backgroundDirty = !0), s && Kc() && (d.livePaintInteractionRevision += 1, ae.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (xl(), Dr()), lb(), l && ((C = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || C.call(k), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), l && !s && ((H = (E = e.graph) == null ? void 0 : E.setDirtyCanvas) == null || H.call(E, !0, !0), (q = (K = (Z = sr) == null ? void 0 : Z.canvas) == null ? void 0 : K.setDirty) == null || q.call(K, !0, !0)), ae.dirty = !0;
  }
  function Af() {
    const i = I.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return I.width !== s || I.height !== l || Y.width !== s || Y.height !== l ? (I.width = s, I.height = l, Y.width = s, Y.height = l, ae.backgroundDirty = !0, ae.dirty = !0, t === "cutout" && (ae.pendingStableLayoutFrames = Math.max(Number(ae.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function ub(i = performance.now()) {
    var m, _;
    ae.lastTickTs = i;
    const s = d.mode === "frame" && ((m = d.interaction) == null ? void 0 : m.kind) === "roll_frame" ? d.interaction : null;
    s != null && s.shot && (d.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = l, d.frameRollOverlayStartTs = i), Math.abs(Number(d.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const v = W(
        (i - Number(d.frameRollOverlayStartTs || i)) / eM,
        0,
        1
      );
      d.frameRollOverlayAlpha = Xn(
        Number(d.frameRollOverlayFrom || 0),
        l,
        os(v)
      ), v >= 1 && (d.frameRollOverlayAlpha = l, l === 0 && (d.frameRollOverlayVisual = null)), ae.dirty = !0;
    }
    const u = ib();
    if (Math.abs(u - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = u, d.cutoutPanoDimStartTs = i), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const v = W(
        (i - Number(d.cutoutPanoDimStartTs || i)) / Yh,
        0,
        1
      );
      d.cutoutPanoDimAlpha = Xn(
        Number(d.cutoutPanoDimFrom || 0),
        u,
        os(v)
      ), v >= 1 && (d.cutoutPanoDimAlpha = u), v >= 1 && u === 0 && (d.cutoutPanoDimCorners = null), ae.dirty = !0;
    }
    const p = t === "cutout" && Ue() ? 1 : 0;
    if (Math.abs(p - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = p, d.cutoutPanoFrameStartTs = i), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const v = W(
        (i - Number(d.cutoutPanoFrameStartTs || i)) / Yh,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = Xn(
        Number(d.cutoutPanoFrameFrom || 0),
        p,
        os(v)
      ), v >= 1 && (d.cutoutPanoFrameAlpha = p, p === 0 && (d.cutoutPanoFrameVisual = null)), ae.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const v = Math.max(1, Number(d.outputPreviewAnimDurationMs)), w = W((i - Number(d.outputPreviewAnimStartTs || 0)) / v, 0, 1), C = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? lM(w) : dM(w);
      d.outputPreviewAnim = Xn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, C), ae.dirty = !0, w >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((_ = d.viewTween) != null && _.active) {
      const v = d.viewTween, w = W((i - v.startTs) / v.durationMs, 0, 1), k = os(w);
      d.viewYaw = Ht(v.startYaw + v.deltaYaw * k), d.viewPitch = v.startPitch + (v.targetPitch - v.startPitch) * k, d.viewFov = v.startFov + (v.targetFov - v.startFov) * k, ae.backgroundDirty = !0, ae.dirty = !0, w >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(an.state.inertia.vx || 0), d.viewInertia.vy = Number(an.state.inertia.vy || 0), d.viewInertia.active = !!an.state.inertia.active, an.stepInertia(i) && (d.viewInertia.vx = Number(an.state.inertia.vx || 0), d.viewInertia.vy = Number(an.state.inertia.vy || 0), d.viewInertia.active = !!an.state.inertia.active, ae.backgroundDirty = !0, ae.dirty = !0), (ae.dirty || i - ae.lastSizeCheckTs >= 220) && (Af(), ae.lastSizeCheckTs = i), ae.pendingStableLayoutFrames > 0 && (ae.pendingStableLayoutFrames -= 1, ae.dirty = !0), ae.dirty) {
      if (ae.pendingStableLayoutFrames > 0)
        return;
      ae.dirty = !1, ob();
    }
  }
  function Cf(i = performance.now()) {
    if (ae.running)
      try {
        ub(i);
      } catch (s) {
        const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
        ae.tickErrorSignature !== l && (ae.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), P.stageStatus = xr, P.stageStatusDetail = "frame", ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind");
      } finally {
        ae.running && (ae.rafId = requestAnimationFrame(Cf));
      }
  }
  function cb() {
    ae.running = !1, ae.rafId && cancelAnimationFrame(ae.rafId), ae.rafId = 0;
  }
  function st() {
    r || (d.historyController.commitActionGroup(JSON.stringify(gh(b))), jl());
  }
  function Dl(i) {
    if (r) return;
    const s = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (jl(), !s) return;
    const l = JSON.parse(s);
    Object.keys(b).forEach((u) => delete b[u]), Object.assign(b, l), d.selectedId = t === "stickers" || t === "cutout" ? b.active.selected_sticker_id : b.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], rr(), Tn(), Ke(), En(), ye({ cause: "cutout_frame" });
  }
  function If() {
    var l, u;
    const i = Array.isArray((l = d.historyController) == null ? void 0 : l.entries) ? d.historyController.entries : [], s = Number((u = d.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Tn() {
    Mo();
    const i = ww({
      editor: d,
      swatches: Ns,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: hr,
      colorsApproximatelyEqual: Ms,
      rgb01ToHsv: xu,
      hsv01ToRgb: _u,
      getBrushPresetIdForTool: ri,
      isActiveLassoTool: Fg
    });
    if (Object.assign(P.paintDock, i), jg(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    ee && (clearTimeout(ee), ee = 0), R && (!i.colorEnabled && j && !j.hidden && (ee = window.setTimeout(() => {
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
      aspect_id: Hr(i)
    }, Ke());
  }
  function Ke() {
    var Be, nt, xe, se;
    if (a) return;
    b.ui_settings = b.ui_settings || {};
    const i = Sw(b.ui_settings);
    if (o) {
      P.sidePanel = kw({
        coverage: b.coverage,
        uiSettings: i,
        normalizeCoverageValue: Qt
      });
      return;
    }
    const s = Ct(), l = t === "cutout" && d.mode === "frame" ? Ue() : null, u = l || s, p = l ? [l] : nr(), m = l ? "shot" : Io();
    p.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: Hr(u)
    });
    const _ = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), v = m === "stroke" ? null : u, w = v || _, k = !!v && !wn(v);
    d.panelWasEnabled = k, xl();
    let C = null;
    if (l) {
      const be = bl({ item: l, kind: "shot", label: "Frame" });
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
      t === "stickers" ? Tr().forEach((De, Ye) => {
        var on, Pt;
        if (!De) return;
        const lt = Jt(De) ? String(De.id || rs) : String(((Pt = (on = b.assets) == null ? void 0 : on[De.asset_id]) == null ? void 0 : Pt.name) || De.asset_id || De.id), Qe = `${Ye + 1}. ${lt}${Jt(De) && $i(De) ? " (hidden)" : ""}`, St = bl({ item: De, label: Qe, kind: "image" });
        be.push({ id: De.id, label: St.label, icon: St.icon, item: De, kind: "image" });
      }) : Jc().forEach((De) => {
        if (!(De != null && De.item)) return;
        const Ye = bl(De);
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
    const N = [], E = (be, Fe, Re, De, Ye) => {
      const lt = W(Number(w[be] || 0), Re, De);
      N.push({
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
    const Z = Array.isArray((nt = (Be = b == null ? void 0 : b.painting) == null ? void 0 : Be.paint) == null ? void 0 : nt.strokes) ? b.painting.paint.strokes.length : 0, K = Array.isArray((se = (xe = b == null ? void 0 : b.painting) == null ? void 0 : xe.mask) == null ? void 0 : se.strokes) ? b.painting.mask.strokes.length : 0, q = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((be) => String((be == null ? void 0 : be.name) || "")) : [], ce = sM(
      e,
      q.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ge = !!String((ce == null ? void 0 : ce.src) || "").trim() || Qc("pano_input_images").length > 0, ue = Array.isArray(Tr()) && Tr().length > 0 || Z > 0, Se = K > 0, $e = [
      { key: "mask", label: "Mask", icon: Ee.circle_dashed_tool, visible: !!d.showMask, enabled: Se },
      { key: "objects", label: "Paint / Images", icon: Ee.image, visible: !!d.showObjects, enabled: ue },
      { key: "panorama", label: "Panorama", icon: Ee.globe, visible: !!d.showPanorama, enabled: ge }
    ].map((be) => ({
      ...be,
      ariaLabel: `Toggle ${be.label.toLowerCase()}`,
      tip: be.visible ? "Hide" : "Show"
    }));
    P.sidePanel = Nw({
      coverage: b.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: k,
      selectedKind: m,
      selectedItems: p,
      params: N,
      notes: H,
      visibilityRows: $e,
      uiSettings: i,
      normalizeCoverageValue: Qt
    });
  }
  async function Tf(i) {
    if (r || t !== "stickers" && t !== "cutout" || !kr(i)) return;
    const s = ds("asset"), l = Uu(e, `add:${s}`, async () => {
      try {
        const { image: u } = await Gu(i);
        Le.set(s, u);
        const p = ds("st");
        b.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ji(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: Zc()
        }), Li(b.stickers[b.stickers.length - 1]), Fl(), Ke(), tt(), ye();
        const m = await ws(i, {
          fetchApi: (w, k) => mn.fetchApi(w, k)
        });
        if (!(Array.isArray(b.stickers) ? b.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === s).length) return;
        b.assets[s] = m, Ui(), st(), ut(), Ke(), tt(), ye();
      } catch (u) {
        delete b.assets[s], Le.delete(s);
        const p = Array.isArray(b.stickers) ? b.stickers : [], m = p.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") === s);
        throw m.length && (b.stickers = p.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") !== s), m.some((_) => String((_ == null ? void 0 : _.id) || "") === String(d.selectedId || "")) && Li(null), Ke(), tt(), ye(), ut()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function fb() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add");
  }
  async function db(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Ct();
    if (!s || !_t(s) || Jt(s) || !kr(i)) return;
    const l = String(s.id || ""), u = ds("asset"), p = Uu(e, `replace:${l}:${u}`, async () => {
      var C;
      const m = (Array.isArray(b.stickers) ? b.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === l) || null;
      if (!m || !_t(m) || Jt(m)) return;
      const _ = String(m.asset_id || ""), v = _ ? dn(((C = b.assets) == null ? void 0 : C[_]) || null) : null, w = Number(m.vFOV_deg || 0), k = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: N } = await Gu(i);
        Le.set(u, N), m.asset_id = u, m.vFOV_deg = ji(
          Number(m.hFOV_deg || 30),
          Number(N.naturalWidth || N.width || 1),
          Number(N.naturalHeight || N.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, rn(), Ke(), tt(), ye();
        const E = await ws(i, {
          fetchApi: (Z, K) => mn.fetchApi(Z, K)
        }), H = (Array.isArray(b.stickers) ? b.stickers : []).find((Z) => String((Z == null ? void 0 : Z.id) || "") === l) || null;
        if (!H || String(H.asset_id || "") !== u) return;
        b.assets[u] = E, Ui(), st(), ut(), Ke(), tt(), ye();
      } catch (N) {
        delete b.assets[u], Le.delete(u);
        const E = (Array.isArray(b.stickers) ? b.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        throw E && String(E.asset_id || "") === u && (_ && v && (b.assets[_] = v), E.asset_id = _, E.vFOV_deg = w, E.crop = k ? { ...k } : null), rn(), ut(), Ke(), tt(), ye(), N;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function hb() {
    var s;
    if (r) return;
    const i = Ct();
    !i || !_t(i) || Jt(i) || (s = U == null ? void 0 : U.openImagePicker) == null || s.call(U, "replace");
  }
  async function pb() {
    if (r || t !== "stickers") return;
    const i = b.assets && typeof b.assets == "object" ? b.assets : {}, s = Object.entries(i).filter(([, u]) => {
      const p = String((u == null ? void 0 : u.type) || "").toLowerCase(), m = String((u == null ? void 0 : u.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [u, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const _ = await fetch(m).then((N) => N.blob()), v = String(_.type || "image/png").split("/")[1] || "png", w = String((p == null ? void 0 : p.name) || `${u}.${v}`), k = new File([_], w, { type: _.type || "image/png" }), C = await ws(k, {
          fetchApi: (N, E) => mn.fetchApi(N, E)
        });
        b.assets[u] = {
          ...C,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ut(), ye());
  }
  function mb() {
    if (r || t !== "cutout") return;
    const i = Ue();
    if (i) {
      Li(i), d.mode = "pano", ul(
        Ht(Number(i.yaw_deg || 0)),
        W(Number(i.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ke(), tt(), ye({ cause: "cutout_frame" });
      return;
    }
    const s = gm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    b.shots = [s], Li(s), Fl(), d.mode = "pano", st(), ut(), Ke(), tt(), ye({ cause: "cutout_frame" });
  }
  function gb() {
    r || t !== "cutout" || (b.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, b.active.selected_shot_id = null, st(), ut(), Ke(), tt(), ye());
  }
  function bb() {
    const i = Array.isArray(b.stickers) ? b.stickers : [], s = [];
    for (const l of i)
      Jt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Ef(i, s, l = "Clear") {
    return new Promise((u) => {
      P.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: u
      };
    });
  }
  async function yb() {
    var l, u;
    if (r || !await Ef(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    b.painting = ga(null), rr();
    const s = bb();
    if (t === "stickers")
      b.stickers = s, b.assets = {}, d.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, Ui();
    else {
      const p = $x(b.shots, b.active.selected_shot_id);
      b.stickers = s, b.assets = {}, b.shots = p.shots, d.selectedId = p.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = null, b.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Ui();
    }
    st(), ut(), Ke(), tt(), ye();
  }
  async function vb(i) {
    var m, _, v, w;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = qi(s);
    if (!(!u.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = d.interaction) == null ? void 0 : _.layerKind) === s) || !await Ef(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((v = d.interaction) == null ? void 0 : v.kind) === "draw" && ((w = d.interaction) == null ? void 0 : w.layerKind) === s) {
        const k = Vn();
        k && d.paintEngine.cancelActiveStroke(k), d.interaction = null;
      }
      u.length = 0, b.painting.raster_objects = In().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== s), s === "paint" && (un().length = 0), rr(), st(), ut(), Ke(), tt(), Tn(), ye();
    }
  }
  function _b() {
    if (r) return;
    const i = Ct();
    if (!i || !_t(i) || Jt(i)) return;
    const s = JSON.parse(JSON.stringify(i));
    s.id = ds("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = Zc(), b.stickers.push(s), b.active.selected_sticker_id = s.id, d.selectedId = s.id, d.selectedIds = [s.id], rn(), st(), ut(), tt(), Ke(), ye();
  }
  function Df() {
    var l, u, p, m, _, v;
    if (r) return;
    const i = nr(), s = Ct();
    if (!(!s && i.length === 0) && !i.some((w) => wn(w))) {
      if (i.length > 1) {
        const w = new Set(i.filter((N) => Bt(N)).map((N) => String(N.actionGroupId || N.id || ""))), k = new Set(i.filter((N) => cn(N)).map((N) => Xt(N.rasterObjectId || N.id || ""))), C = new Set(i.filter(_t).map((N) => String(N.id || "")));
        w.size > 0 && (b.painting.paint.strokes = (Array.isArray((u = (l = b.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? b.painting.paint.strokes : []).filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || ""))), b.painting.groups = un().filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), rr()), k.size > 0 && (b.painting.raster_objects = In().filter((N) => !k.has(String((N == null ? void 0 : N.id) || ""))), Wi()), C.size > 0 && (b.stickers = (Array.isArray(b.stickers) ? b.stickers : []).filter((N) => C.has(String((N == null ? void 0 : N.id) || "")) ? Jt(N) ? ($i(N) || (N.visible = !1), !0) : !1 : !0), Ui(), rn()), d.selectedId = null, d.selectedIds = [], st(), ut(), Ke(), tt(), ye();
        return;
      }
      if (Bt(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        b.painting.paint.strokes = (Array.isArray((m = (p = b.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? b.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), b.painting.groups = un().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), rr(), d.selectedId = null, d.selectedIds = [], st(), ut(), Ke(), tt(), ye();
        return;
      }
      if (cn(s)) {
        const w = Xt(s.rasterObjectId || s.id || "");
        b.painting.raster_objects = In().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Wi(), d.selectedId = null, d.selectedIds = [], st(), ut(), Ke(), tt(), ye();
        return;
      }
      if (t === "stickers" || _t(s)) {
        if (Jt(s)) {
          if ($i(s)) return;
          s.visible = !1, rn(), st(), ut(), Ke(), tt(), ye();
          return;
        }
        b.stickers = b.stickers.filter((w) => w.id !== s.id), Ui(), rn(), d.selectedId = ((_ = b.stickers[0]) == null ? void 0 : _.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((v = b.stickers[0]) == null ? void 0 : v.id) || null, st(), ut(), Ke(), tt(), ye();
        return;
      }
      gb();
    }
  }
  function Ol(i, s) {
    const l = ae.frameSafeRect;
    if (!i || !l || d.mode !== "frame") return !1;
    const u = mu * Ai(l, i), p = Tc(Ic(l, s), u);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Of(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const v = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(v)) {
        const [C, N] = v.split(":").map((E) => Number(E));
        if (Number.isFinite(C) && Number.isFinite(N)) return C >= N;
      }
      const w = Number(i.hFOV_deg || 64), k = Number(i.vFOV_deg || 40);
      return Math.abs(w - k) > 1e-6 ? w >= k : Ci(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== u && ([p, m] = [m, p]);
    const _ = p / m;
    if (!Ol(i, _)) {
      const v = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = v, i.hFOV_deg = vs(v, _);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function xb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = bo(s, l);
    if (!u) return !1;
    const p = u.ratio;
    if (!Ol(i, p)) {
      const m = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = vs(m, p);
    }
    return i.aspect_id = u.label, !0;
  }
  function Ff(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Di(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, u);
    if (!Ol(i, p)) {
      const m = W(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = vs(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, _] = s.split(":");
      i.aspect_id = `${_}:${m}`;
    } else
      i.aspect_id = xi(i);
  }
  function Rf() {
    Oi().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Sb() {
    if (r) return;
    const i = nr();
    if (!Ct() || i.length === 0 || i.some((v) => wn(v))) return;
    Rf();
    const l = Oi(), u = new Set(i.map((v) => _t(v) ? `sticker:${String(v.id || "")}` : cn(v) ? `rasterObject:${Xt(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), p = [], m = [];
    if (l.forEach((v) => {
      var k, C;
      const w = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((C = v.item) == null ? void 0 : C.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(w) ? p.push(v) : m.push(v);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((v, w) => {
      v.type === "sticker" && v.item && (v.item.z_index = w), v.type === "strokeGroup" && v.item && (v.item.z_index = w), v.type === "rasterObject" && v.item && (v.item.z_index = w);
    }), rn(), st(), ut(), tt(), ye();
  }
  function wb() {
    if (r) return;
    const i = nr();
    if (!Ct() || i.length === 0 || i.some((v) => wn(v))) return;
    Rf();
    const l = Oi(), u = new Set(i.map((v) => _t(v) ? `sticker:${String(v.id || "")}` : cn(v) ? `rasterObject:${Xt(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), p = [], m = [];
    if (l.forEach((v) => {
      var k, C;
      const w = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((C = v.item) == null ? void 0 : C.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(w) ? p.push(v) : m.push(v);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((v, w) => {
      v.type === "sticker" && v.item && (v.item.z_index = w), v.type === "strokeGroup" && v.item && (v.item.z_index = w), v.type === "rasterObject" && v.item && (v.item.z_index = w);
    }), rn(), st(), ut(), tt(), ye();
  }
  function kb() {
    r || (b.projection_model = "pinhole_rectilinear", b.alpha_mode = "straight", f && (b.output_preset = M(Number(b.output_preset || 2048))), h && (b.coverage = Qt(h.value)), g && (b.bg_color = String(g.value || b.bg_color || "#00ff00")), En(), e.setDirtyCanvas(!0, !0));
  }
  function En() {
    var s;
    if (r) return;
    b.coverage = Qt(b.coverage);
    const i = JSON.stringify(b);
    y && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Lf = () => En();
  r || (e.__panoFlushStateBeforeQueue = Lf);
  function jo() {
    b.ui_settings = bM(b.ui_settings), r || En();
  }
  function ut() {
    var i;
    r || (En(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Nb() {
    r || a0() && df().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Mb(i = {}) {
    var u, p, m, _, v, w, k, C, N, E;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || p.call(u), (_ = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || _.call(m), (v = e.setDirtyCanvas) == null || v.call(e, !0, !1)), l && ((k = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || k.call(w, !0, !0), (E = (N = (C = sr) == null ? void 0 : C.canvas) == null ? void 0 : N.setDirty) == null || E.call(N, !0, !0));
  }
  function Fl() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", Tn(), Ke());
  }
  function hi(i) {
    const s = I.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * I.width,
      y: (i.clientY - s.top) / s.height * I.height
    };
  }
  function Ho(i) {
    const s = I.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function $f() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function Ue() {
    if (t !== "cutout") return null;
    const i = Array.isArray(b.shots) ? b.shots : [];
    if (!i.length) return null;
    const s = String(b.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function Pb() {
    var H, Z, K, q, ce;
    if (!I) return null;
    const i = (H = I.getBoundingClientRect) == null ? void 0 : H.call(I), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? I.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? I.height / i.height : 1;
    ae.frameCanvasScale = Math.min(s, l);
    let u = 24, p = 24;
    const m = Math.max(u + 1, I.width - 24);
    let _ = Math.max(p + 1, I.height - 24);
    const v = (Z = et == null ? void 0 : et.getBoundingClientRect) == null ? void 0 : Z.call(et), w = (K = We == null ? void 0 : We.getBoundingClientRect) == null ? void 0 : K.call(We);
    let k = 24;
    v && i && v.width > 0 && v.height > 0 && (k = Math.max(k, (v.right - i.left) * s + Wh)), w && i && w.width > 0 && w.height > 0 && ((q = P.frameRail) == null ? void 0 : q.visible) === !0 && (k = Math.max(k, (i.right - w.left) * s + Wh)), u = Math.max(u, k);
    const C = Math.min(m, I.width - k);
    let N = 24;
    const E = (ce = mt == null ? void 0 : mt.getBoundingClientRect) == null ? void 0 : ce.call(mt);
    if (E && i && E.width > 0 && E.height > 0 && (N = Math.max(N, (E.bottom - i.top) * l + gu)), [Yt, An].forEach((ge) => {
      var $e;
      if (!ge || !i) return;
      const ue = getComputedStyle(ge);
      if (ue.display === "none" || ue.visibility === "hidden" || Number(ue.opacity) <= 0) return;
      const Se = ($e = ge.getBoundingClientRect) == null ? void 0 : $e.call(ge);
      !Se || Se.width <= 0 || Se.height <= 0 || (N = Math.max(N, (i.bottom - Se.top) * l + gu));
    }), Ve && i) {
      const ge = getComputedStyle(Ve);
      ge.display !== "none" && ge.visibility !== "hidden" && Number(ge.opacity) > 0 && (N = Math.max(N, (ZN + gu) * l));
    }
    return p = Math.max(p, N), _ = Math.max(p + 1, Math.min(_, I.height - N)), {
      x: u,
      y: p,
      w: Math.max(1, C - u),
      h: Math.max(1, _ - p)
    };
  }
  function Rl(i = Ue()) {
    if (!i || !I) return null;
    const s = ae.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return n_(s, i, mu * Ai(s, i));
  }
  function Kt(i = Ue()) {
    const s = Rl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Ll() {
    return t === "cutout" && !!Ue();
  }
  function ir(i, s = performance.now()) {
    if (d.mode === "unwrap") {
      const m = ei(), _ = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: W(v, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = wl(i.x, i.y), { lon: u, lat: p } = Ml(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function ar(i, s, l = performance.now()) {
    const u = Kt(s);
    if (!u) return null;
    const p = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Il(s, p);
    if (!m) return null;
    const { lon: _, lat: v } = Ml(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - v / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Ab(i, s) {
    const l = Ue();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, p = ym(l, s);
    if (!p) return !1;
    if (u) {
      const m = mu * Ai(
        ae.frameSafeRect || { w: I.width, h: I.height },
        p
      ), _ = Lu({ width: I.width, height: I.height }, m);
      if (_.halfW < I.width * 0.5 - 1e-6 || _.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, st(), ut(), Ke());
    }, 180), Ke(), !0;
  }
  function Cb() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, st(), ut(), Ke(), !0) : !1;
  }
  function za() {
    const i = d.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && pi(), d.interaction = null, Hi(), Dr(), Ke(), xt(d.pointerPos), ye({ localOnly: !0 }), !0;
  }
  function Ib(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function ri(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Lr : Dn[s] ? s : d.activeBrushPresetId || Lr;
  }
  function zf() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && ($f() || Ll());
  }
  function Vf() {
    var i;
    return zf() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Uo(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return d.pointerPos = { x: l, y: u, inside: p }, _;
  }
  function Tb() {
    var C, N;
    if (!Vf()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool, l = ri(s), u = Dn[l] || Dn[Lr], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(u.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), v = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(d.paintColor), w = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : W(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : W(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: _,
      fillStyle: hr(v, w),
      strokeStyle: hr(v, k),
      x: Number(((C = d.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((N = d.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function Eb() {
    var E, H, Z;
    const i = Tb();
    if (!he) return;
    if (!i) {
      he.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", p = 0, m = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let C = Number(i.hotspotX ?? s * 0.5), N = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Bs, l = Bs, u = "0", _ = "0", v = "none", C = tM, N = nM, m = pM(i.fillStyle, k, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const K = Math.max(1, Number(((E = i.preset) == null ? void 0 : E.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * K), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, p = Number(((Z = (H = i.preset) == null ? void 0 : H.angle) == null ? void 0 : Z.value) || 0) * Ur;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    he.style.display = "block", he.style.width = `${Math.round(s)}px`, he.style.height = `${Math.round(l)}px`, he.style.borderRadius = u, he.style.border = _, he.style.boxShadow = v, he.style.background = m, he.style.backgroundRepeat = "no-repeat", he.style.backgroundPosition = "center", he.style.backgroundSize = "contain", he.style.transform = `translate(${Math.round(i.x - C)}px, ${Math.round(i.y - N)}px) rotate(${p}deg)`;
  }
  function Db() {
    var ge;
    if (!fe || !ke) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool;
    if (s === "lasso_fill") return;
    const l = ri(s), u = Dn[l] || Dn[Lr], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(u.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), v = s === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(d.paintColor), k = i === "mask" ? hr(w, 0.22) : v ? "rgba(255,255,255,0.14)" : hr(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), C = i === "mask" ? hr(w, 0.96) : v ? "rgba(255,255,255,0.72)" : hr(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, E = _ * 2, H = "999px", Z = 0, K = k;
    const q = "rgba(222, 222, 222, 0.72)", ce = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ue = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      N = Math.max(16, _ * 2 * ue), E = Math.max(10, _ * 2), H = `${Math.min(8, E * 0.42)}px`, Z = Number(((ge = u == null ? void 0 : u.angle) == null ? void 0 : ge.value) || 0) * Ur;
    } else s === "brush" ? K = `radial-gradient(circle at 50% 50%, ${C} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (N = Math.max(18, _ * 1.8), E = N, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : v && (K = "rgba(255,255,255,0.12)");
    ke.style.width = `${Math.round(N)}px`, ke.style.height = `${Math.round(E)}px`, ke.style.borderRadius = H, ke.style.background = K, ke.style.border = `1px solid ${q}`, ke.style.boxShadow = `0 0 0 1px ${ce}`, ke.style.transform = `rotate(${Z}deg)`, Q && (clearTimeout(Q), Q = 0), fe.classList.remove("fade-out"), fe.classList.add("show");
  }
  function Go() {
    !fe || !fe.classList.contains("show") || (fe.classList.add("fade-out"), Q && clearTimeout(Q), Q = window.setTimeout(() => {
      fe.classList.remove("show", "fade-out"), Q = 0;
    }, 180));
  }
  function jf(i, s, l, u) {
    const p = ri(s), m = Dn[p] || Dn[Lr], _ = d.brushSizes[p] ?? 10, v = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), w = Ib(u, v), k = l.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), C = {
      id: ia(i),
      actionGroupId: ia("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((N) => ({ ...N })),
        points: k.map((N) => ({ ...N }))
      }
    };
    return Vh(C, m), Number(m.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function Hf(i, s, l, u) {
    const p = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = ri(s), _ = Dn[m] || Dn[Lr], v = {
      id: ia(i),
      actionGroupId: ia("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
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
    return Vh(v, _), Number(_.aspect ?? 1), Number(v.aspect ?? 1), String(v.stampKind || ""), { ...v.targetSpace }, v;
  }
  function qi(i) {
    const s = b.painting || (b.painting = ga(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function Ob(i, s, l = performance.now()) {
    let u;
    if (d.mode === "frame") {
      const k = Ue();
      if (!k || (u = ar(s, k, l), !u)) return !1;
    } else
      u = ir(s, l);
    if (!u) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, _ = p[p.length - 1];
    if (_) {
      const k = Math.abs(Number(u.u ?? u.x ?? 0) - Number(_.u ?? _.x ?? 0)), C = Math.abs(Number(u.v ?? u.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (k < 15e-4 && C < 15e-4) return !1;
    }
    const v = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...v }), m.push({ ...v });
    const w = Vn();
    if (w) {
      const k = d.paintEngine.ensureTarget(w);
      d.paintEngine.appendStrokePoint(k, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Fb(i, s, l = performance.now()) {
    var _, v;
    let u;
    if (d.mode === "frame") {
      const w = Ue();
      if (!w) return !1;
      u = ar(s, w, l);
    } else
      u = ir(s, l);
    const p = (v = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : v.points;
    if (!u || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const w = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && k < 15e-4) return !1;
    }
    return p.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Rb(i) {
    var ue, Se, $e, Be, nt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    zo();
    const l = Vn(), u = Ra(l.width, l.height);
    if (!Mf(u, s, { w: l.width, h: l.height })) return !1;
    const p = ((Se = (ue = u.ctx) == null ? void 0 : ue.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Se.data) || null;
    if (!p) return !1;
    const m = new Map(un().map((xe) => [String((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "").trim(), xe ? { ...xe } : null])), _ = [], v = [], w = [...In().filter((xe) => String((xe == null ? void 0 : xe.layerKind) || "paint") !== "paint")];
    let k = !1, C = Oi().reduce((xe, se) => Math.max(xe, Number((se == null ? void 0 : se.z_index) || 0)), -1) + 1;
    function N(xe, se, be, Fe = 8) {
      let Re = se, De = be, Ye = -1, lt = -1;
      for (let Qe = 0; Qe < be; Qe += 1)
        for (let St = 0; St < se; St += 1)
          xe[(Qe * se + St) * 4 + 3] <= Fe || (St < Re && (Re = St), Qe < De && (De = Qe), St > Ye && (Ye = St), Qe > lt && (lt = Qe));
      return Ye < Re || lt < De ? null : { minX: Re, minY: De, maxX: Ye, maxY: lt };
    }
    const E = N(p, l.width, l.height, 8);
    if (!E) return !1;
    function H(xe, se) {
      return !xe || !se ? !1 : !(xe.maxX < se.minX || se.maxX < xe.minX || xe.maxY < se.minY || se.maxY < xe.minY);
    }
    function Z(xe, se) {
      const be = Zr((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "", "paint", se);
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
      const se = Ra(l.width, l.height, { readback: !0 });
      se.ctx.drawImage(xe, 0, 0);
      const be = se.ctx.getImageData(0, 0, l.width, l.height);
      se.ctx.save(), se.ctx.globalCompositeOperation = "destination-out", se.ctx.drawImage(u.canvas, 0, 0), se.ctx.restore();
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
      const Fe = Number(be == null ? void 0 : be.z_index), Re = q0(xe, se, be).map((De, Ye) => ({
        ...De,
        z_index: Number.isFinite(Fe) ? Fe + Ye * 1e-3 : C + Ye * 1e-3
      }));
      return Re.length && (C = Math.max(C, ...Re.map((De) => Number((De == null ? void 0 : De.z_index) || 0))) + 1), Re;
    }
    for (const xe of un()) {
      const se = String((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "").trim();
      if (!se) continue;
      const be = tr(se, "paint");
      if (!q(Z(xe, be))) {
        v.push(xe), _.push(...be);
        continue;
      }
      const Fe = ((Be = ($e = d.paintEngine) == null ? void 0 : $e.getGroupTarget) == null ? void 0 : Be.call($e, se)) || null, Re = ((nt = Fe == null ? void 0 : Fe.committedPaint) == null ? void 0 : nt.canvas) || null;
      if (!Re) {
        v.push(xe), _.push(...be);
        continue;
      }
      const De = ce(Re);
      if (!De.touched || !De.canvas) {
        v.push(xe), _.push(...be);
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
      const se = cf(xe, null);
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
    return k ? (b.painting.paint.strokes = _, b.painting.groups = v.sort((xe, se) => Number((xe == null ? void 0 : xe.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), b.painting.raster_objects = w.sort((xe, se) => Number((xe == null ? void 0 : xe.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), Da({ preservePanelValues: !1 }), !0) : !1;
  }
  function Lb(i) {
    var _, v, w, k, C;
    if ((((v = (_ = i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : v.rawPoints) || ((k = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      $l(i);
      const N = Vn();
      N && (String(((C = i.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(N) : d.paintEngine.commitActiveStroke(i.stroke, N)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = jf(i.layerKind, l.toolKind, [], u);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = Vn();
    m && d.paintEngine.beginStroke(p, m);
  }
  function $b(i) {
    var _, v;
    if ((((v = (_ = i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : v.points) || []).length >= 3) {
      $l(i);
      const w = Vn();
      w && d.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = Hf(i.layerKind, l.toolKind, [], u);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = Vn();
    m && d.paintEngine.beginStroke(p, m);
  }
  function $l(i) {
    var m, _, v, w;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Tl(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Rb(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && Bc((v = i.stroke) == null ? void 0 : v.actionGroupId), qi(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Tl(p, i.stroke.targetSpace, !0), u && Bc((w = i.stroke) == null ? void 0 : w.actionGroupId), qi(i.layerKind).push(i.stroke), !0);
  }
  function Uf(i) {
    var l;
    if (t === "cutout" && d.mode === "frame") {
      const u = Ue(), p = Kt(u);
      if (!u || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const _ = ar(i, u, performance.now()), v = _ ? Bi(_) : null;
      if (v)
        for (const k of Cl()) {
          if (!_t(k)) continue;
          const C = $a(k, v);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const N = Zt(k);
            if (N != null && N.visible) return { item: k, geom: N };
          }
        }
      const w = dl(!1).slice().sort((k, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0));
      for (const k of w) {
        if (k.type === "strokeGroup") {
          const E = Ri(Ia("paint", k.actionGroupId || k.id || ""));
          if (!E) continue;
          const H = Zt(E);
          if (!(H != null && H.visible)) continue;
          const Z = Array.isArray(H.strokePaths) ? H.strokePaths : [];
          for (const K of Z) {
            const q = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!q.length) continue;
            if (K.closed && q.length >= 3 && zr(i, q)) return { item: E, geom: H };
            const ce = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let ge = 0; ge < q.length - 1; ge += 1)
              if (vu(i, q[ge], q[ge + 1]) <= ce * ce) return { item: E, geom: H };
            if (q.length === 1 && ai(i, q[0]) <= ce * ce) return { item: E, geom: H };
          }
          continue;
        }
        if (k.type === "rasterObject") {
          const E = Fi(Ta(((l = k.item) == null ? void 0 : l.id) || k.id || ""));
          if (!E) continue;
          const H = Zt(E);
          if (uf(E, H, i, _)) return { item: E, geom: H };
          continue;
        }
        const C = k.item;
        if (!C || !_t(C) || !v) continue;
        const N = $a(C, v);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const E = Zt(C);
          if (E != null && E.visible) return { item: C, geom: E };
        }
      }
      return null;
    }
    const s = [
      ...dl(!1).slice().sort((u, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var p;
        return u.type === "strokeGroup" ? Ri(Ia("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? Fi(Ta(((p = u.item) == null ? void 0 : p.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? Cl().filter((u) => zn(u)) : []
    ];
    for (const u of s) {
      if (Bt(u)) {
        const m = Zt(u);
        if (!(m != null && m.visible)) continue;
        const _ = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const v of _) {
          const w = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
          if (!w.length) continue;
          if (v.closed && w.length >= 3 && zr(i, w)) return { item: u, geom: m };
          const k = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < w.length - 1; C += 1)
            if (vu(i, w[C], w[C + 1]) <= k * k) return { item: u, geom: m };
          if (w.length === 1 && ai(i, w[0]) <= k * k) return { item: u, geom: m };
        }
        continue;
      }
      if (cn(u)) {
        const m = Zt(u);
        if (!(m != null && m.visible)) continue;
        if (uf(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const p = Zt(u);
      if (p.visible && zr(i, p.corners))
        return { item: u, geom: p };
    }
    return null;
  }
  function zl(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (_t(l)) return $u(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((_) => ai(_, s) <= 121);
      if (p >= 0) {
        const _ = i.corners[p], v = _.x - i.center.x, w = _.y - i.center.y, k = v * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const _ of m) {
        const v = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
        if (_.closed && v.length >= 3 && zr(s, v)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
        for (let k = 0; k < v.length - 1; k += 1)
          if (vu(s, v[k], v[k + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return zr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => ai(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], _ = m.x - i.center.x, v = m.y - i.center.y, w = _ * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: w };
      }
      return zr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => ai(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const u = i.corners.findIndex((p) => ai(p, s) <= 121);
    if (u >= 0) {
      const p = i.corners[u], m = p.x - i.center.x, _ = p.y - i.center.y, v = m * _ >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: v };
    }
    return ai(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : zr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function Gf(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function zb(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Vb(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => zb(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!zr({ x: l, y: u }, s.corners);
  }
  function xt(i) {
    if (Eb(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? V("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? V("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? V("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? V(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? V("grabbing") : V("default");
      return;
    }
    if (Vf()) {
      V("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !r) {
        V(JN);
        return;
      }
      if (d.primaryTool !== "cursor") {
        V("default");
        return;
      }
      V("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      V("default");
      return;
    }
    const s = Ct(), l = s ? Zt(s) : null, u = s ? wn(s) : !1, p = u ? { kind: "none", cursor: "default" } : zl(l, i, s);
    if (!u && p.kind !== "none") {
      V(p.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && Uf(i)) {
      V("default");
      return;
    }
    V(d.mode === "pano" ? "grab" : "default");
  }
  function tt() {
    var w, k;
    if (!vn) return;
    if (d.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Ct(), s = nr();
    if (!i && s.length === 0 || d.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Io(), u = Mw({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? ml(s) : Zt(i),
      allLocked: gl(s),
      anyLocked: s.some((C) => wn(C)),
      selectedLocked: wn(i),
      activeAspect: Hr(i),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: Jt,
      isStickerHidden: $i,
      canRestoreSelectedToInitial: zg,
      iconSet: Ee
    });
    if (!u.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const p = (C, N, { requireFitsBelow: E = !0 } = {}) => {
      var Se, $e, Be;
      const Z = Number((Se = u.anchor) == null ? void 0 : Se.minX), K = Number(($e = u.anchor) == null ? void 0 : $e.maxX), q = Number((Be = u.anchor) == null ? void 0 : Be.maxY);
      if (![Z, K, q].every(Number.isFinite)) return null;
      const ce = Math.max(14, I.width - C - 14), ge = W((Z + K) * 0.5 - C * 0.5, 14, ce), ue = q + 18;
      return !Number.isFinite(ge) || !Number.isFinite(ue) || E && ue + N > I.height - 14 ? null : { left: ge, top: ue };
    }, m = Math.max(1, Number(((w = d.menuSize) == null ? void 0 : w.w) || 220)), _ = Math.max(1, Number(((k = d.menuSize) == null ? void 0 : k.h) || 40)), v = p(m, _, { requireFitsBelow: !1 });
    if (!v) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: v.left,
      top: v.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!vn || P.selectionMenu.visible !== !0) return;
      const C = vn.getBoundingClientRect(), N = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, E = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      d.menuSize = { w: N, h: E, measured: !0 };
      const H = p(N, E);
      if (!H) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = H.left, P.selectionMenu.top = H.top;
    });
  }
  function pi() {
    me.timer && (clearTimeout(me.timer), me.timer = 0), me.target = null, P.tooltip.visible = !1;
  }
  function jb(i) {
    if (!nn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    P.tooltip.text = s, P.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var K, q;
      if (me.target !== l || !nn || !(l != null && l.isConnected)) return;
      const u = ie.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, _ = 12, v = Math.round(Number(((K = nn.getBoundingClientRect()) == null ? void 0 : K.width) || 0)) || 100, w = Math.round(Number(((q = nn.getBoundingClientRect()) == null ? void 0 : q.height) || 0)) || 24, k = !!l.closest(".pano-floating-left"), C = !!l.closest(".pano-frame-rail"), N = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let E = "", H = p.left - u.left + p.width * 0.5 - v * 0.5, Z = p.top - u.top - w - _;
      if (k)
        E = "tool-rail", H = p.right - u.left + 10, Z = p.top - u.top + p.height * 0.5 - w * 0.5, H = W(H, m, Math.max(m, u.width - v - m)), Z = W(Z, m, Math.max(m, u.height - w - m));
      else if (C)
        E = "frame-rail", H = p.left - u.left - v - 10, Z = p.top - u.top + p.height * 0.5 - w * 0.5, H = W(H, m, Math.max(m, u.width - v - m)), Z = W(Z, m, Math.max(m, u.height - w - m));
      else if (N) {
        E = "footer";
        const ce = l.closest(".pano-paint-footer"), ge = ce ? ce.getBoundingClientRect() : p;
        H = ge.left - u.left + ge.width * 0.5 - v * 0.5, Z = ge.bottom - u.top + 5, H = W(H, m, Math.max(m, u.width - v - m)), Z = Math.max(m, Z);
      }
      H = W(H, m, Math.max(m, u.width - v - m)), Z = Math.max(m, Z), P.tooltip.left = H, P.tooltip.top = Z, P.tooltip.variant = E, P.tooltip.visible = !0;
    });
  }
  const an = Cc({
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
    getUnwrapRect: ei,
    onInteraction: () => {
      ae.backgroundDirty = !0, ae.dirty = !0;
    }
  });
  function Hb(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += dm(s, i.lastAngle), i.lastAngle = s;
    const u = hm(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((_) => _.key === "roll_deg");
    p && (p.value = u, p.displayValue = ra(u), p.fillPct = (u + 180) / 360 * 100), Fr(), Vl(i), ye({ localOnly: !0 });
  }
  function Ub(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = Am(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((_) => _.key === "roll_deg");
    p && (p.value = u.rollDeg, p.displayValue = ra(u.rollDeg), p.fillPct = (u.rollDeg + 180) / 360 * 100), Fr(), Vl(i), ye({ localOnly: !0 });
  }
  const Bf = (i, s) => {
    const l = hi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Vl(i) {
    var _, v;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    me.timer && (clearTimeout(me.timer), me.timer = 0), me.target = null;
    const s = Kt(i.shot), l = (_ = I.getBoundingClientRect) == null ? void 0 : _.call(I), u = (v = ie.getBoundingClientRect) == null ? void 0 : v.call(ie);
    if (!s || !l || !u || I.width <= 0 || I.height <= 0) return;
    const p = l.width / I.width, m = l.height / I.height;
    P.tooltip.text = `${ra(i.shot.roll_deg)}°`, P.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * p, P.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  je == null || je.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || d.mode !== "frame") return;
    const s = Ue();
    if (!s || s.locked === !0) return;
    const l = Kt(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Bf(i, u);
    d.interaction = {
      kind: "roll_frame",
      shot: s,
      center: u,
      lastAngle: p,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = je.setPointerCapture) == null || m.call(je, i.pointerId), i.preventDefault(), Fr(), Vl(d.interaction), ye({ localOnly: !0 });
  }), je == null || je.addEventListener("pointermove", (i) => {
    var s;
    ((s = d.interaction) == null ? void 0 : s.kind) !== "roll_frame" || d.interaction.source !== "knob" || Hb(
      d.interaction,
      Bf(i, d.interaction.center),
      i
    );
  });
  const Gb = () => {
    const i = d.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (st(), ut(), Ke()), d.interaction = null, pi(), Dr(), Fr(), ye());
  };
  je == null || je.addEventListener("pointerup", Gb), je == null || je.addEventListener("pointercancel", () => za()), je == null || je.addEventListener("lostpointercapture", () => {
    var i;
    ((i = d.interaction) == null ? void 0 : i.source) === "knob" && za();
  }), je == null || je.addEventListener("dblclick", (i) => {
    const s = d.mode === "frame" && !r ? Ue() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, st(), ut(), Ke(), Fr(), ye(), i.preventDefault());
  }), I.onpointerdown = (i) => {
    const s = hi(i);
    if (Uo(s, !0), d.viewTween = null, an.state.inertia.active = !1, an.state.inertia.vx = 0, an.state.inertia.vy = 0, i.button === 1) {
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
        const v = d.mode === "unwrap" ? s : Ho(i);
        d.interaction = { kind: "view", last: v, lastTs: performance.now() }, an.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      xt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (d.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const v = Ue(), w = Kt(v);
      if (!v || v.locked === !0 || !w) return;
      const k = Pm({
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
      }, I.setPointerCapture(i.pointerId), i.preventDefault(), Fr(), ye({ localOnly: !0 });
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
        const v = Ho(i);
        d.interaction = { kind: "view", last: v, lastTs: performance.now() }, an.startDrag(v.x, v.y, i.pointerId, performance.now()), xt(s), I.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && ($f() || Ll())) {
      const v = d.primaryTool === "mask" ? "mask" : "paint", w = d.primaryTool === "mask" ? d.maskTool : d.paintTool, k = d.mode === "frame" && Ll() ? Ue() : null, C = { kind: "ERP_GLOBAL" }, N = k ? ar(s, k, performance.now()) : ir(s, performance.now());
      if (!N) {
        xt(s);
        return;
      }
      d.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: ia("live"),
        stroke: w === "lasso_fill" ? Hf(v, w, [N], C) : jf(v, w, [N], C)
      }, Hi();
      const E = Vn();
      if (E)
        if (d.paintEngine.beginStroke(d.interaction.stroke, E), d.interaction.kind === "paint_stroke") {
          const H = d.paintEngine.ensureTarget(E), Z = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), K = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          d.paintEngine.appendStrokePoint(H, Z, K, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, E);
      xt(s), I.setPointerCapture(i.pointerId), ye();
      return;
    }
    const l = nr(), u = Ct(), p = l.length > 1 ? ml(l) : u ? Zt(u) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: s, current: s }, xt(s), I.setPointerCapture(i.pointerId), ye({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (p != null && p.visible)) {
      if ((l.some((w) => wn(w)) ? { kind: "none" } : zl(p, s)).kind === "move") {
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
              var C, N;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Bt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: dn(tr(w.actionGroupId, w.layerKind)),
            frameSnapshot: dn(Zr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var C, N;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: pl(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => cn(w)).map((w) => ({
            id: Xt(w.rasterObjectId || w.id || ""),
            snapshot: dn(In().find((k) => String((k == null ? void 0 : k.id) || "") === Xt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var C, N;
              const k = Zt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: mf(w)
          }))
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (p != null && p.visible)) {
      const v = wn(u) ? { kind: "none" } : zl(p, s, u);
      if (v.kind === "scale") {
        d.interaction = Bt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: dn(tr(u.actionGroupId, u.layerKind)),
          frameSnapshot: dn(Zr(u.actionGroupId, u.layerKind)),
          cursor: v.cursor
        } : cn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: dn(In().find((w) => String((w == null ? void 0 : w.id) || "") === Xt(u.rasterObjectId || u.id || ""))),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: v.cursor
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        d.interaction = {
          kind: v.kind,
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        d.interaction = Bt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: p.center,
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x),
          snapshot: dn(tr(u.actionGroupId, u.layerKind)),
          frameSnapshot: dn(Zr(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: p.center,
          startRot: Number(u.rot_deg || u.roll_deg || 0),
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x)
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (Bt(u)) {
          const w = d.mode === "frame" ? (() => {
            const k = Ue();
            return k ? ar(s, k, performance.now()) : null;
          })() : ir(s, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: w,
            snapshot: dn(tr(u.actionGroupId, u.layerKind)),
            frameSnapshot: dn(Zr(u.actionGroupId, u.layerKind))
          }, xt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        if (cn(u)) {
          const w = d.mode === "frame" ? (() => {
            const k = Ue();
            return k ? ar(s, k, performance.now()) : null;
          })() : ir(s, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: w,
            snapshot: dn(In().find((k) => String((k == null ? void 0 : k.id) || "") === Xt(u.rasterObjectId || u.id || "")))
          }, xt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - p.center.x, y: s.y - p.center.y }
        }, xt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = Uf(s);
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
          return w ? ar(s, w, performance.now()) : null;
        })() : ir(s, performance.now()) : null,
        snapshot: Bt(m.item) ? dn(tr(m.item.actionGroupId, m.item.layerKind)) : cn(m.item) ? dn(In().find((w) => String((w == null ? void 0 : w.id) || "") === Xt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Bt(m.item) ? dn(Zr(m.item.actionGroupId, m.item.layerKind)) : null
      }, xt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!d.selectedId;
    if (_ && (st(), En()), Da(), _ && Ke(), tt(), ye(), d.mode === "pano") {
      const v = Ho(i);
      d.interaction = { kind: "view", last: v, lastTs: performance.now() }, an.startDrag(v.x, v.y, i.pointerId, performance.now()), xt(s), I.setPointerCapture(i.pointerId);
    }
  }, I.onpointermove = (i) => {
    var u, p, m, _, v, w, k, C, N, E, H, Z, K, q, ce, ge, ue, Se, $e, Be, nt, xe;
    const s = hi(i);
    if (Uo(s, !0), !d.interaction) {
      xt(s);
      return;
    }
    xt(s);
    const l = d.interaction;
    if (l.kind === "paint_stroke") {
      const se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let be = !1;
      se.forEach((Fe) => {
        const Re = hi(Fe);
        if (d.mode === "frame") {
          const De = Ue(), Ye = De ? Kt(De) : null;
          if (Ye) {
            const lt = (Re.x - Ye.x) / Math.max(1, Ye.w), Qe = (Re.y - Ye.y) / Math.max(1, Ye.h);
            if (!(lt >= 0 && lt <= 1 && Qe >= 0 && Qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Lb(l));
          }
        }
        Ob(l, Re, performance.now()) && (be = !0);
      }), be && ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let be = !1;
      if (se.forEach((Fe) => {
        const Re = hi(Fe);
        if (d.mode === "frame") {
          const De = Ue(), Ye = De ? Kt(De) : null;
          if (Ye) {
            const lt = (Re.x - Ye.x) / Math.max(1, Ye.w), Qe = (Re.y - Ye.y) / Math.max(1, Ye.h);
            if (!(lt >= 0 && lt <= 1 && Qe >= 0 && Qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, $b(l));
          }
        }
        Fb(l, Re, performance.now()) && (be = !0);
      }), be) {
        const Fe = Vn();
        Fe && d.paintEngine.updateActiveStroke(l.stroke, Fe), ye({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const se = performance.now(), be = d.mode === "unwrap" ? s : Ho(i);
      an.moveDrag(be.x, be.y, d.mode === "unwrap" ? "unwrap" : "pano", se), l.lastTs = se, l.last = be, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const se = Rl(l.shot);
      if (!se || !l.shot) return;
      const be = s.x - l.last.x, Fe = s.y - l.last.y, Re = Cm(l.shot, {
        dx: be,
        dy: Fe,
        focalPx: se.focalPx,
        invertX: ((u = b.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((p = b.ui_settings) == null ? void 0 : p.invert_view_y) === !0
      });
      l.shot.yaw_deg = Re.yaw_deg, l.shot.pitch_deg = Re.pitch_deg, l.changed = l.changed || Math.abs(be) > 0 || Math.abs(Fe) > 0, l.last = s, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      Ub(l, s, i);
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
        }, Ye = Il(Fe, De);
        if (!Ye) return;
        const lt = us(Ye);
        l.item.yaw_deg = lt.yaw, l.item.pitch_deg = lt.pitch;
      } else if (d.mode === "unwrap") {
        const Fe = ei(), Re = W((se - Fe.x) / Math.max(Fe.w, 1), 0, 1), De = W((be - Fe.y) / Math.max(Fe.h, 1), 0, 1);
        l.item.yaw_deg = Ht(Re * 360 - 180), l.item.pitch_deg = W(90 - De * 180, -90, 90);
      } else {
        const Fe = wl(se, be), Re = us(Fe);
        l.item.yaw_deg = Re.yaw, l.item.pitch_deg = Re.pitch;
      }
      _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const se = d.mode === "frame" ? (() => {
        const Re = Ue();
        return Re ? ar(s, Re, performance.now()) : null;
      })() : ir(s, performance.now());
      if (!se || !l.startUv) return;
      const be = Yn(Number(se.u || 0), Number(l.startUv.u || 0)), Fe = Number(se.v || 0) - Number(l.startUv.v || 0);
      Wc((m = l.item) == null ? void 0 : m.actionGroupId, be, Fe, l.snapshot, (_ = l.item) == null ? void 0 : _.layerKind, l.frameSnapshot) && (rr({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const se = d.mode === "frame" ? (() => {
        const Re = Ue();
        return Re ? ar(s, Re, performance.now()) : null;
      })() : ir(s, performance.now());
      if (!se || !l.startUv) return;
      const be = Yn(Number(se.u || 0), Number(l.startUv.u || 0)), Fe = Number(se.v || 0) - Number(l.startUv.v || 0);
      qc(((v = l.item) == null ? void 0 : v.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", be, Fe, l.snapshot) && (Wi(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Ag(((k = l.item) == null ? void 0 : k.rasterObjectId) || ((C = l.item) == null ? void 0 : C.id) || "", be, l.snapshot) && (Wi(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const se = s.x - Number(((N = l.offset) == null ? void 0 : N.x) || 0), be = s.y - Number(((E = l.offset) == null ? void 0 : E.y) || 0);
      let Fe = !1, Re = !1, De = !1;
      const Ye = se - Number(((H = l.startCenter) == null ? void 0 : H.x) || se), lt = be - Number(((Z = l.startCenter) == null ? void 0 : Z.y) || be);
      for (const Qe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const St = (t === "cutout" ? hl() : Tr()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(Qe.id || ""));
        if (!St || !_t(St)) continue;
        const on = {
          x: Number(((K = Qe.center) == null ? void 0 : K.x) || 0) + Ye,
          y: Number(((q = Qe.center) == null ? void 0 : q.y) || 0) + lt
        };
        if (d.mode === "frame" && t === "cutout") {
          const Pt = Ue(), Vt = Kt(Pt);
          if (!Pt || !Vt) continue;
          const mi = {
            x: W((on.x - Vt.x) / Math.max(1, Vt.w), 0, 1),
            y: W((on.y - Vt.y) / Math.max(1, Vt.h), 0, 1)
          }, ud = Il(Pt, mi);
          if (!ud) continue;
          const cd = us(ud);
          St.yaw_deg = cd.yaw, St.pitch_deg = cd.pitch;
        } else if (d.mode === "unwrap") {
          const Pt = ei(), Vt = W((on.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), mi = W((on.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          St.yaw_deg = Ht(Vt * 360 - 180), St.pitch_deg = W(90 - mi * 180, -90, 90);
        } else {
          const Pt = wl(on.x, on.y), Vt = us(Pt);
          St.yaw_deg = Vt.yaw, St.pitch_deg = Vt.pitch;
        }
        Fe = !0;
      }
      for (const Qe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const St = {
          x: Number(((ce = Qe.center) == null ? void 0 : ce.x) || 0) + Ye,
          y: Number(((ge = Qe.center) == null ? void 0 : ge.y) || 0) + lt
        }, on = d.mode === "frame" ? (() => {
          const Vt = Ue();
          return Vt ? ar(St, Vt, performance.now()) : null;
        })() : ir(St, performance.now()), Pt = Qe.centerUv || null;
        if (on && Pt) {
          const Vt = Yn(Number(on.u || 0), Number(Pt.u || 0)), mi = Number(on.v || 0) - Number(Pt.v || 0);
          Wc(Qe.id, Vt, mi, Qe.snapshot, Qe.layerKind, Qe.frameSnapshot) && (Fe = !0, Re = !0);
        }
      }
      for (const Qe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const St = {
          x: Number(((ue = Qe.center) == null ? void 0 : ue.x) || 0) + Ye,
          y: Number(((Se = Qe.center) == null ? void 0 : Se.y) || 0) + lt
        }, on = d.mode === "frame" ? (() => {
          const Vt = Ue();
          return Vt ? ar(St, Vt, performance.now()) : null;
        })() : ir(St, performance.now()), Pt = Qe.centerUv || null;
        if (on && Pt) {
          const Vt = Yn(Number(on.u || 0), Number(Pt.u || 0)), mi = Number(on.v || 0) - Number(Pt.v || 0);
          qc(Qe.id, Vt, mi, Qe.snapshot) && (Fe = !0, De = !0);
        }
      }
      Fe && (Re ? rr({ rebuildPaintEngine: !1 }) : De ? Wi() : rn(), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Yc(($e = l.item) == null ? void 0 : $e.actionGroupId, be, 0, l.snapshot, (Be = l.item) == null ? void 0 : Be.layerKind, l.frameSnapshot) && (rr({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let se = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * Ur;
      i.shiftKey && (se = Math.round(se / 45) * 45), Yc((nt = l.item) == null ? void 0 : nt.actionGroupId, 1, se, l.snapshot, (xe = l.item) == null ? void 0 : xe.layerKind, l.frameSnapshot) && (rr({ rebuildPaintEngine: !1 }), ye({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * be, 1, 179), l.item.vFOV_deg = W(l.startVFOV * be, 1, 179), l.item.aspect_id = xi(l.item), _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * be, 1, 179), l.item.aspect_id = xi(l.item), _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const be = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.vFOV_deg = W(l.startVFOV * be, 1, 179), l.item.aspect_id = xi(l.item), _t(l.item) && rn(), ye({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let be = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * Ur, Fe = l.startRot - be;
      i.shiftKey && (Fe = Math.round(Fe / 45) * 45);
      const Re = _t(l.item) ? "rot_deg" : "roll_deg";
      l.item[Re] = Fe, _t(l.item) && rn(), ye({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var s, l, u, p, m, _, v, w;
    const i = d.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Hi();
        const k = $l(d.interaction), C = !!d.interaction._hasCommittedSegments;
        if (k || C) {
          rr();
          const N = String(((u = d.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (N) {
            const H = un().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === N);
            H && (H.frame = null);
          }
          const E = Vn();
          E && (k ? String(((p = d.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(E), wf()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, E) : d.paintEngine.cancelActiveStroke(E)), st(), En(), Ke(), tt(), e.setDirtyCanvas(!0, !0), ye();
        } else {
          const N = Vn();
          N && d.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const k = Gf(d.interaction.start, d.interaction.current), N = [
          ...t === "cutout" ? Cl().filter((E) => !zn(E)) : [...Tr()],
          ...kg(),
          ...Ng()
        ].filter((E) => Vb(k, Zt(E)));
        Tg(N, ((_ = N[N.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && N.length && (d.cutoutAspectOpen = !1), Ke(), tt(), ye();
      } else if (((v = d.interaction) == null ? void 0 : v.kind) === "pan_frame" || ((w = d.interaction) == null ? void 0 : w.kind) === "roll_frame")
        d.interaction.changed && (st(), ut(), Ke());
      else if (d.interaction && d.interaction.kind !== "view") {
        let k = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (k = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? rr({ rebuildPaintEngine: !0 }) : Wi()), st(), En(), e.setDirtyCanvas(!0, !0), Yi(), d.hqFrames = 1, tt(), ye();
      }
      d.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && pi(), Hi(), i && i.kind === "view" && an.endDrag(performance.now()), Dr(), tt(), xt(d.pointerPos), ye();
    }
  }, I.onpointercancel = () => {
    var i, s, l;
    if (!za()) {
      if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && an.endDrag(performance.now()), ((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Hi();
        const u = Vn();
        u && d.paintEngine.cancelActiveStroke(u);
      }
      d.interaction = null, Hi(), Dr(), xt(d.pointerPos), ye({ localOnly: !0 });
    }
  }, I.onlostpointercapture = () => {
    za();
  }, I.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, I.onmousemove = (i) => {
    const s = hi(i), l = Uo(s, !0);
    d.interaction || (xt(s), l && d.mode === "frame" && d.primaryTool === "cursor" && ye({ localOnly: !0 }));
  }, I.onmouseleave = () => {
    Uo(d.pointerPos, !1), xt(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && ye({ localOnly: !0 });
  }, I.onwheel = (i) => {
    if (d.mode === "frame") {
      const s = hi(i), l = Ac(i);
      l && Ab(s, l) && ye({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && (an.applyWheelEvent(i) && ye({ localOnly: !0 }), i.preventDefault());
  }, I.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), $n(!0));
  }, I.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Te.depth = 0, $n(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((p) => kr(p));
    l && Tf(l);
  };
  const Kf = (i) => {
    t !== "stickers" && t !== "cutout" || r || fi(i) && (Te.depth += 1, $n(!0), i.preventDefault());
  }, Wf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Te.active && fi(i) && $n(!0), Te.active && i.preventDefault());
  }, Yf = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Te.active) return;
    Te.depth = Math.max(0, Te.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Te.depth === 0 || s) && $n(!1);
  }, qf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Te.depth = 0, $n(!1), fi(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Kf, !0), window.addEventListener("dragover", Wf, !0), window.addEventListener("dragleave", Yf, !0), window.addEventListener("drop", qf, !0);
  function jl() {
    const { canUndo: i, canRedo: s } = If();
    ta(P.toolButtons, "value", "undo", { disabled: !i }), ta(P.toolButtons, "value", "redo", { disabled: !s });
  }
  const Xf = (i, s, l = !1) => {
    var w;
    const u = t === "cutout" && d.mode === "frame" ? Ue() : null, p = u || Ct(), m = u ? "shot" : Io();
    if (!p || m === "stroke" || wn(p)) return;
    const _ = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((k) => k.key === i);
    if (!_ || _.enabled === !1) return;
    let v = Number(s);
    Number.isNaN(v) && (v = 0), v = W(v, Number(_.min), Number(_.max)), i === "yaw_deg" && (v = Ht(v)), p[i] = v, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = xi(p)), Ke(), ye(), l && st();
  };
  Me == null || Me.addEventListener("click", async (i) => {
    var u, p, m, _, v, w, k, C, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const E = Qt(s.getAttribute("data-coverage"));
      if (E === Qt(b.coverage)) return;
      b.coverage = E, d.coverage = E, h && (h.value = String(E)), o ? ae.backgroundDirty = !0 : (En(), Mb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ke(), tt(), ye();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (u = P.sidePanel) == null ? void 0 : u.selectionPicker) != null && p.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const E = String(s.getAttribute("data-selection-id") || "");
      let H = null;
      E && (t === "stickers" ? H = Tr().find((Z) => String((Z == null ? void 0 : Z.id) || "") === E) || null : H = ((m = Jc().find((Z) => {
        var K;
        return String(((K = Z == null ? void 0 : Z.item) == null ? void 0 : K.id) || "") === E;
      })) == null ? void 0 : m.item) || null), Li(H || null), H && !Bt(H) && ul(
        Ht(Number(H.yaw_deg || 0)),
        W(Number(H.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ke(), tt(), ye();
      return;
    }
    if (l === "copy-state-inline") {
      const E = Ct(), H = Io();
      if (!E || H === "stroke" || nr().length > 1) return;
      const Z = JSON.stringify(t === "cutout" && H !== "image" ? af(E) : Gg(E));
      try {
        await navigator.clipboard.writeText(Z), (_ = P.sidePanel) != null && _.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
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
      b.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", jo(), Ke(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), ye();
      return;
    }
    if (l === "set-invert-y") {
      b.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", jo(), Ke(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ye();
      return;
    }
    if (l === "toggle-quality-picker") {
      (k = P.sidePanel) != null && k.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (l === "set-quality") {
      const E = String(s.getAttribute("data-quality") || "balanced");
      b.ui_settings.preview_quality = E === "draft" || E === "high" ? E : "balanced", jo(), Ke(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), ye();
      return;
    }
    if (l === "ui-reset-defaults") {
      b.ui_settings.invert_view_x = !1, b.ui_settings.invert_view_y = !1, b.ui_settings.preview_quality = "balanced", jo(), Ke(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), ye();
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
    l === "save-close" && (kb(), Ji());
  }), Me == null || Me.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Xf(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Me == null || Me.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Xf(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Hl = () => sf();
  Hl(), oe.addEventListener("click", (i) => {
    var v, w, k, C;
    if ((w = (v = i.target) == null ? void 0 : v.matches) != null && w.call(v, "[data-confirm-overlay]")) {
      const N = (k = P.confirmDialog) == null ? void 0 : k.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const N = d.mode;
      d.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (N !== "frame" && (ae.frameSafeRect = null), Ke(), tt()), Fl(), Dr(), ye();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const N = String(l.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = N, (N === "paint" || N === "mask") && Da({ preservePanelValues: !0 }), Tn(), Ke(), tt(), ye();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const N = String(l.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && l.disabled) return;
        N === "undo" ? Dl(-1) : N === "redo" ? Dl(1) : N === "clear" ? yb() : N === "add" || N === "add-image" ? fb() : N === "add-or-look" && mb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const N = String(l.getAttribute("data-paint-tool") || "pen");
        d.paintTool = N, Da({ preservePanelValues: !0 }), Dn[N] && (d.activeBrushPresetId = N), Tn(), Ke(), tt(), ye();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Da({ preservePanelValues: !0 }), Tn(), Ke(), tt(), ye();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const N = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        vb(N);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const N = Ns.find((E) => E.id === l.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        d.paintColor = Hn(N.color), ne(!0), Tn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? ne(!0) : Pe(), Tn();
        return;
      }
    }
    const u = String(((C = l == null ? void 0 : l.getAttribute) == null ? void 0 : C.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      if (Vi(), G.paused) {
        re.mode = "playback", re.pendingPlaybackResume = !1, re.resumeAfterScrub = !1;
        const N = Number(P.videoTransport.duration || G.duration || 0), E = Number(G.currentTime || re.editorTime || 0), H = N > 0 && E >= N - 1e-3 ? 0 : Number(re.editorTime || E || 0), Z = Math.max(Dt(), 0.04);
        re.editorTime = H, Math.abs(E - H) > Z ? (re.seeking = !1, re.pendingPlaybackResume = !0, vl(H)) : G.play().catch(() => {
        });
      } else
        G.pause(), re.mode = "scrub", re.resumeAfterScrub = !1, re.pendingPlaybackResume = !1, re.editorTime = Number(G.currentTime || 0), zi();
      cr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Er(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode
      }), ye({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (u === "video-audio-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const N = !G.muted;
      G.muted = N, !N && Number(G.volume || 0) <= 0 && (G.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), cr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Er(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      const N = !P.videoTransport.loop;
      P.videoTransport.loop = N, G.loop = N, cr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Er(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: N,
        muted: G.muted,
        volume: Number(G.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (u === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const N = d.mode === "frame" ? Ue() : null;
        if (!N || N.locked === !0) return;
        Of(N, String(l.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, Yi(), st(), ut(), Dr(), ye();
        return;
      }
      if (u === "frame-aspect-custom") {
        const N = d.mode === "frame" ? Ue() : null, E = l.getAttribute("data-custom-width"), H = l.getAttribute("data-custom-height");
        if (!N || !xb(N, E, H)) return;
        P.frameRail.aspectOpen = !1, Yi(), st(), ut(), Dr(), ye();
        return;
      }
      if (u === "frame-rotate-90") {
        const N = d.mode === "frame" ? Ue() : null;
        if (!N || N.locked === !0) return;
        Ff(N), P.frameRail.aspectOpen = !1, Yi(), st(), ut(), Dr(), ye();
        return;
      }
      if (u === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, tt(), ye();
        return;
      }
      if (u === "aspect-set") {
        const N = Ct();
        if (!N) return;
        const E = String(l.getAttribute("data-aspect") || "1:1");
        Of(N, E), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Yi(), st(), ut(), tt(), ye();
        return;
      }
      if (u === "rotate-90") {
        const N = Ct();
        if (!N) return;
        Ff(N), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Yi(), st(), ut(), tt(), ye();
        return;
      }
      if (u === "bring-front") {
        Sb();
        return;
      }
      if (u === "send-back") {
        wb();
        return;
      }
      if (u === "duplicate") {
        _b();
        return;
      }
      if (u === "replace-image") {
        hb();
        return;
      }
      if (u === "toggle-lock") {
        Ig();
        return;
      }
      if (u === "back-initial") {
        Lg();
        return;
      }
      if (u === "toggle-visible") {
        Rg();
        return;
      }
      if (u === "delete") {
        Df();
        return;
      }
    }
    if (u === "reset-view") {
      if (d.mode === "frame") return;
      ul(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, vM(e == null ? void 0 : e.id, d.showGrid), Hl(), ye();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Wb();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const N = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = N, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = N ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), td(), ye();
      return;
    }
    const p = i.target.closest("[data-paint-history-index]");
    if (!p) return;
    const m = Number(p.getAttribute("data-paint-history-index")), _ = d.customPaintHistory[m];
    _ && (d.customPaintColor = Hn(_), d.paintColor = Hn(_), Tn());
  }), oe.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(G instanceof HTMLVideoElement)) return;
      Vi();
      const m = W(Number(s.value || 0), 0, Number(P.videoTransport.duration || 0));
      re.mode = "scrub", !re.seeking && !G.paused && !G.ended && (re.resumeAfterScrub = !0, G.pause()), re.editorTime = m, Wn(m), cr({
        ready: !!G.getAttribute("src"),
        playing: !1,
        visible: Er(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(rt.__panoFrameIdx || 0) > 0 && (ae.backgroundDirty = !0, ae.dirty = !0, ye({ cause: "frame_view", localOnly: !0 })), vl(m);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(G instanceof HTMLVideoElement)) return;
      const m = W(Number(l.value || 0), 0, 1);
      G.volume = m, G.muted = m <= 1e-4, cr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Er(),
        currentTime: re.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: re.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: G.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), _ = ri(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[_] = m, Tn(), Db();
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
      if (!(G instanceof HTMLVideoElement)) return;
      re.pendingPlaybackResume = !!re.resumeAfterScrub, re.resumeAfterScrub = !1, re.pendingPlaybackResume || (re.mode = "scrub"), re.seeking || (re.pendingPlaybackResume ? (re.pendingPlaybackResume = !1, re.mode = "playback", G.play().catch(() => {
      })) : (zi(), ye({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Go();
  }), oe.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Go();
  }), oe.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Go();
  }), oe.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Go();
  }), oe.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !oe.contains(s) || me.target !== s && (me.target = s, me.timer && clearTimeout(me.timer), me.timer = window.setTimeout(() => {
      me.target === s && jb(s);
    }, 220));
  }), oe.addEventListener("pointerout", (i) => {
    var u, p;
    const s = i.target.closest("[data-tip]");
    !s || me.target !== s || (i.relatedTarget instanceof Element ? (p = (u = i.relatedTarget).closest) == null ? void 0 : p.call(u, "[data-tip]") : null) === s || pi();
  }), oe.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || pi();
  });
  const Bb = (i, s) => {
    var v;
    if (!te) return;
    const l = te.getBoundingClientRect(), u = W((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - W((s - l.top) / Math.max(1, l.height), 0, 1), m = xu(d.customPaintColor), _ = { ..._u(m.h, u, p), a: Number(((v = d.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    d.customPaintColor = Hn(_), d.paintColor = Hn(_), Tn();
  }, Kb = (i) => {
    var m;
    if (!pe) return;
    const s = pe.getBoundingClientRect(), l = W((i - s.left) / Math.max(1, s.width), 0, 1), u = xu(d.customPaintColor), p = { ..._u(l, u.s, u.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = Hn(p), d.paintColor = Hn(p), Tn();
  }, Jf = (i, s) => {
    const l = i.pointerId;
    s(i);
    const u = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  te && (te.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Jf(i, (s) => Bb(s.clientX, s.clientY));
  }), pe && (pe.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Jf(i, (s) => Kb(s.clientX));
  }), oe.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (p = P.confirmDialog) == null ? void 0 : p.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const Zf = () => {
    const i = !!d.fullscreen;
    ta(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ee.fullscreen_close : Ee.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Bo = (i) => {
    const s = !!i;
    d.fullscreen !== s && (d.fullscreen = s, oe.classList.toggle("pano-modal-fullscreen", s), s ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Hl(), Zf(), ln(), ye());
  }, Qf = () => document.fullscreenElement === le, Wb = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Bo(!d.fullscreen);
        return;
      }
      Qf() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = le.requestFullscreen) == null ? void 0 : i.call(le));
    } catch {
      Bo(!d.fullscreen);
    }
  }, ed = () => {
    document.fullscreenEnabled && Bo(Qf());
  };
  document.addEventListener("fullscreenchange", ed), Zf();
  const td = () => {
    const i = !!d.outputPreviewExpanded;
    P.outputPreviewToggle.icon = i ? Ee.fullscreen_close : Ee.fullscreen, P.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  td();
  const Ul = e.onExecuted, Gl = e.onConnectionsChange;
  let Bl = null, Kl = null, nd = null, rd = () => {
  };
  !r && t === "stickers" && (nd = (i = "sync") => {
    of(i);
  }, rd = Wm(e, nd), Bl = function(...s) {
    typeof Ul == "function" && Ul.apply(this, s), oM(Le, is), eo(this, "executed");
  }, e.onExecuted = Bl, Kl = function(...s) {
    typeof Gl == "function" && Gl.apply(this, s), eo(this, "connections");
  }, e.onConnectionsChange = Kl), r || qh.set(String(e.id ?? "0"), () => df());
  let Xi = null;
  const Ji = async () => Xi || (Xi = (async () => {
    var i, s, l, u, p, m, _, v, w, k, C;
    return qh.delete(String(e.id ?? "0")), Cb(), r || En(), document.fullscreenElement === le && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", ed), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Lf && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || p.call(u, !0, !0), (v = (_ = (m = sr) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || v.call(_, !0, !0), pi(), cb(), G instanceof HTMLVideoElement && G.pause(), bt.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (w = we == null ? void 0 : we.dispose) == null || w.call(we), Et == null || Et.dispose(), (k = Oe == null ? void 0 : Oe.unmount) == null || k.call(Oe), (C = Ce == null ? void 0 : Ce.dispose) == null || C.call(Ce), $n(!1), window.removeEventListener("keydown", id, !0), window.removeEventListener("keydown", ad, !0), window.removeEventListener("keydown", Ko, !0), window.removeEventListener("keyup", Ko, !0), window.removeEventListener("blur", od), window.removeEventListener("keydown", sd, !0), window.removeEventListener("dragenter", Kf, !0), window.removeEventListener("dragover", Wf, !0), window.removeEventListener("dragleave", Yf, !0), window.removeEventListener("drop", qf, !0), !r && t === "stickers" && (e.onExecuted === Bl && (e.onExecuted = Ul), e.onConnectionsChange === Kl && (e.onConnectionsChange = Gl), rd()), B.unmount(), $.remove(), Nb(), Xi = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Xi = null, !1)), Xi), id = (i) => {
    var s, l, u, p, m;
    if (i.key === "Escape") {
      if (za()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === le) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Bo(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Ji();
    }
  }, ad = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const _ = i.target, v = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || _ != null && _.isContentEditable || !Ct() || (Df(), i.preventDefault(), i.stopPropagation());
  }, Ko = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    d.marqueeModifier === s && d.altModifier === l || (d.marqueeModifier = s, d.altModifier = l, Fr(), xt(d.pointerPos));
  }, od = () => {
    d.marqueeModifier = !1, d.altModifier = !1, Fr(), xt(d.pointerPos);
  }, sd = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, p = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = If();
    i.shiftKey && !_ || !i.shiftKey && !m || (Dl(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", id, !0), window.addEventListener("keydown", ad, !0), window.addEventListener("keydown", Ko, !0), window.addEventListener("keyup", Ko, !0), window.addEventListener("blur", od), window.addEventListener("keydown", sd, !0), le.addEventListener("pointerdown", (i) => {
    i.target === le && Ji();
  });
  function fr(i, s, { rollbackState: l = !1 } = {}) {
    let u = "";
    try {
      l && (u = JSON.stringify(b)), s();
    } catch (p) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(b).forEach((_) => delete b[_]), Object.assign(b, m), r || En();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      P.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  fr("cutout-focus", Wg), !r && t === "stickers" && fr("external-sticker-sync", () => of("open"), { rollbackState: !0 }), pb().catch((i) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), fr("history", st), fr("undo-redo", jl), fr("paint-ui", Tn), fr("side-panel", Ke), fr("look-at-frame", xl), fr("video-source", Vi), fr("canvas-size", Af), fr("cursor", () => xt(d.pointerPos)), ye(), ae.rafId = requestAnimationFrame(Cf);
}
sr.registerExtension(qx({
  app: sr,
  openEditor: NM,
  attachStickers: lw,
  attachCutout: uw,
  attachPreview: sw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: qN
}));
