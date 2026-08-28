import * as gs from "../../scripts/app.js";
import { app as nr } from "../../scripts/app.js";
import { api as bn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function tc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const kt = {}, da = [], wr = () => {
}, Bh = () => !1, Qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), xn = Object.assign, nc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fb = Object.prototype.hasOwnProperty, ht = (e, t) => Fb.call(e, t), Xe = Array.isArray, ha = (e) => _o(e) === "[object Map]", Gh = (e) => _o(e) === "[object Set]", ld = (e) => _o(e) === "[object Date]", Ze = (e) => typeof e == "function", Vt = (e) => typeof e == "string", kr = (e) => typeof e == "symbol", yt = (e) => e !== null && typeof e == "object", Kh = (e) => (yt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Wh = Object.prototype.toString, _o = (e) => Wh.call(e), Rb = (e) => _o(e).slice(8, -1), Yh = (e) => _o(e) === "[object Object]", rc = (e) => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, eo = /* @__PURE__ */ tc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Lb = /-\w/g, Pn = tl(
  (e) => e.replace(Lb, (t) => t.slice(1).toUpperCase())
), zb = /\B([A-Z])/g, Ti = tl(
  (e) => e.replace(zb, "-$1").toLowerCase()
), nl = tl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xl = tl(
  (e) => e ? `on${nl(e)}` : ""
), mr = (e, t) => !Object.is(e, t), bs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qh = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, ic = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ud;
const rl = () => ud || (ud = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bt(e) {
  if (Xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = Vt(r) ? Hb(r) : Bt(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (Vt(e) || yt(e))
    return e;
}
const $b = /;(?![^(]*\))/g, jb = /:([^]+)/, Vb = /\/\*[^]*?\*\//g;
function Hb(e) {
  const t = {};
  return e.replace(Vb, "").split($b).forEach((n) => {
    if (n) {
      const r = n.split(jb);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (Vt(e))
    t = e;
  else if (Xe(e))
    for (let n = 0; n < e.length; n++) {
      const r = ft(e[n]);
      r && (t += r + " ");
    }
  else if (yt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ub = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bb = /* @__PURE__ */ tc(Ub);
function Xh(e) {
  return !!e || e === "";
}
function Gb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = ac(e[r], t[r]);
  return n;
}
function ac(e, t) {
  if (e === t) return !0;
  let n = ld(e), r = ld(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = kr(e), r = kr(t), n || r)
    return e === t;
  if (n = Xe(e), r = Xe(t), n || r)
    return n && r ? Gb(e, t) : !1;
  if (n = yt(e), r = yt(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), h = t.hasOwnProperty(c);
      if (f && !h || !f && h || !ac(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Jh = (e) => !!(e && e.__v_isRef === !0), ct = (e) => Vt(e) ? e : e == null ? "" : Xe(e) || yt(e) && (e.toString === Wh || !Ze(e.toString)) ? Jh(e) ? ct(e.value) : JSON.stringify(e, Zh, 2) : String(e), Zh = (e, t) => Jh(t) ? Zh(e, t.value) : ha(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Jl(r, o) + " =>"] = a, n),
    {}
  )
} : Gh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jl(n))
} : kr(t) ? Jl(t) : yt(t) && !Xe(t) && !Yh(t) ? String(t) : t, Jl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    kr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let On;
class Kb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = On, !t && On && (this.index = (On.scopes || (On.scopes = [])).push(
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
      const n = On;
      try {
        return On = this, t();
      } finally {
        On = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = On, On = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (On = this.prevScope, this.prevScope = void 0);
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
function Wb() {
  return On;
}
let Mt;
const Zl = /* @__PURE__ */ new WeakSet();
class Qh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, On && On.active && On.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zl.has(this) && (Zl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, cd(this), np(this);
    const t = Mt, n = rr;
    Mt = this, rr = !0;
    try {
      return this.fn();
    } finally {
      rp(this), Mt = t, rr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        lc(t);
      this.deps = this.depsTail = void 0, cd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Nu(this) && this.run();
  }
  get dirty() {
    return Nu(this);
  }
}
let ep = 0, to, no;
function tp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = no, no = e;
    return;
  }
  e.next = to, to = e;
}
function oc() {
  ep++;
}
function sc() {
  if (--ep > 0)
    return;
  if (no) {
    let t = no;
    for (no = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; to; ) {
    let t = to;
    for (to = void 0; t; ) {
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
function np(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function rp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), lc(r), Yb(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function Nu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ip(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ip(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === lo) || (e.globalVersion = lo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Nu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = rr;
  Mt = e, rr = !0;
  try {
    np(e);
    const a = e.fn(e._value);
    (t.version === 0 || mr(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Mt = n, rr = r, rp(e), e.flags &= -3;
  }
}
function lc(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      lc(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Yb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let rr = !0;
const ap = [];
function Br() {
  ap.push(rr), rr = !1;
}
function Gr() {
  const e = ap.pop();
  rr = e === void 0 ? !0 : e;
}
function cd(e) {
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
let lo = 0;
class qb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class uc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !rr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new qb(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, op(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Mt.depsTail, n.nextDep = void 0, Mt.depsTail.nextDep = n, Mt.depsTail = n, Mt.deps === n && (Mt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, lo++, this.notify(t);
  }
  notify(t) {
    oc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      sc();
    }
  }
}
function op(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        op(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Mu = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ Symbol(
  ""
), Pu = /* @__PURE__ */ Symbol(
  ""
), uo = /* @__PURE__ */ Symbol(
  ""
);
function mn(e, t, n) {
  if (rr && Mt) {
    let r = Mu.get(e);
    r || Mu.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new uc()), a.map = r, a.key = n), a.track();
  }
}
function jr(e, t, n, r, a, o) {
  const c = Mu.get(e);
  if (!c) {
    lo++;
    return;
  }
  const f = (h) => {
    h && h.trigger();
  };
  if (oc(), t === "clear")
    c.forEach(f);
  else {
    const h = Xe(e), g = h && rc(n);
    if (h && n === "length") {
      const v = Number(r);
      c.forEach((x, S) => {
        (S === "length" || S === uo || !kr(S) && S >= v) && f(x);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), g && f(c.get(uo)), t) {
        case "add":
          h ? g && f(c.get("length")) : (f(c.get(_i)), ha(e) && f(c.get(Pu)));
          break;
        case "delete":
          h || (f(c.get(_i)), ha(e) && f(c.get(Pu)));
          break;
        case "set":
          ha(e) && f(c.get(_i));
          break;
      }
  }
  sc();
}
function Qi(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (mn(t, "iterate", uo), /* @__PURE__ */ Yn(e) ? t : t.map(ir));
}
function il(e) {
  return mn(e = /* @__PURE__ */ dt(e), "iterate", uo), e;
}
function dr(e, t) {
  return /* @__PURE__ */ Kr(e) ? _a(/* @__PURE__ */ xi(e) ? ir(t) : t) : ir(t);
}
const Xb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ql(this, Symbol.iterator, (e) => dr(this, e));
  },
  concat(...e) {
    return Qi(this).concat(
      ...e.map((t) => Xe(t) ? Qi(t) : t)
    );
  },
  entries() {
    return Ql(this, "entries", (e) => (e[1] = dr(this, e[1]), e));
  },
  every(e, t) {
    return Er(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Er(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => dr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Er(
      this,
      "find",
      e,
      t,
      (n) => dr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Er(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Er(
      this,
      "findLast",
      e,
      t,
      (n) => dr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Er(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Er(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return eu(this, "includes", e);
  },
  indexOf(...e) {
    return eu(this, "indexOf", e);
  },
  join(e) {
    return Qi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return eu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Er(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return La(this, "pop");
  },
  push(...e) {
    return La(this, "push", e);
  },
  reduce(e, ...t) {
    return fd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fd(this, "reduceRight", e, t);
  },
  shift() {
    return La(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Er(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return La(this, "splice", e);
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
    return La(this, "unshift", e);
  },
  values() {
    return Ql(this, "values", (e) => dr(this, e));
  }
};
function Ql(e, t, n) {
  const r = il(e), a = r[t]();
  return r !== e && !/* @__PURE__ */ Yn(e) && (a._next = a.next, a.next = () => {
    const o = a._next();
    return o.done || (o.value = n(o.value)), o;
  }), a;
}
const Jb = Array.prototype;
function Er(e, t, n, r, a, o) {
  const c = il(e), f = c !== e && !/* @__PURE__ */ Yn(e), h = c[t];
  if (h !== Jb[t]) {
    const x = h.apply(e, o);
    return f ? ir(x) : x;
  }
  let g = n;
  c !== e && (f ? g = function(x, S) {
    return n.call(this, dr(e, x), S, e);
  } : n.length > 2 && (g = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const v = h.call(c, g, r);
  return f && a ? a(v) : v;
}
function fd(e, t, n, r) {
  const a = il(e), o = a !== e && !/* @__PURE__ */ Yn(e);
  let c = n, f = !1;
  a !== e && (o ? (f = r.length === 0, c = function(g, v, x) {
    return f && (f = !1, g = dr(e, g)), n.call(this, g, dr(e, v), x, e);
  }) : n.length > 3 && (c = function(g, v, x) {
    return n.call(this, g, v, x, e);
  }));
  const h = a[t](c, ...r);
  return f ? dr(e, h) : h;
}
function eu(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  mn(r, "iterate", uo);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ dc(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : a;
}
function La(e, t, n = []) {
  Br(), oc();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return sc(), Gr(), r;
}
const Zb = /* @__PURE__ */ tc("__proto__,__v_isRef,__isVue"), sp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kr)
);
function Qb(e) {
  kr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return mn(t, "has", e), t.hasOwnProperty(e);
}
class lp {
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
      return r === (a ? o ? uy : dp : o ? fp : cp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Xe(t);
    if (!a) {
      let h;
      if (c && (h = Xb[n]))
        return h;
      if (n === "hasOwnProperty")
        return Qb;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ yn(t) ? t : r
    );
    if ((kr(n) ? sp.has(n) : Zb(n)) || (a || mn(t, "get", n), o))
      return f;
    if (/* @__PURE__ */ yn(f)) {
      const h = c && rc(n) ? f : f.value;
      return a && yt(h) ? /* @__PURE__ */ Cu(h) : h;
    }
    return yt(f) ? a ? /* @__PURE__ */ Cu(f) : /* @__PURE__ */ ka(f) : f;
  }
}
class up extends lp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    const c = Xe(t) && rc(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Yn(r) && !/* @__PURE__ */ Kr(r) && (o = /* @__PURE__ */ dt(o), r = /* @__PURE__ */ dt(r)), !c && /* @__PURE__ */ yn(o) && !/* @__PURE__ */ yn(r))
        return g || (o.value = r), !0;
    }
    const f = c ? Number(n) < t.length : ht(t, n), h = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ yn(t) ? t : a
    );
    return t === /* @__PURE__ */ dt(a) && (f ? mr(r, o) && jr(t, "set", n, r) : jr(t, "add", n, r)), h;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && jr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!kr(n) || !sp.has(n)) && mn(t, "has", n), r;
  }
  ownKeys(t) {
    return mn(
      t,
      "iterate",
      Xe(t) ? "length" : _i
    ), Reflect.ownKeys(t);
  }
}
class ey extends lp {
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
const ty = /* @__PURE__ */ new up(), ny = /* @__PURE__ */ new ey(), ry = /* @__PURE__ */ new up(!0);
const Au = (e) => e, qo = (e) => Reflect.getPrototypeOf(e);
function iy(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = /* @__PURE__ */ dt(a), c = ha(o), f = e === "entries" || e === Symbol.iterator && c, h = e === "keys" && c, g = a[e](...r), v = n ? Au : t ? _a : ir;
    return !t && mn(
      o,
      "iterate",
      h ? Pu : _i
    ), xn(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = g.next();
          return S ? { value: x, done: S } : {
            value: f ? [v(x[0]), v(x[1])] : v(x),
            done: S
          };
        }
      }
    );
  };
}
function Xo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ay(e, t) {
  const n = {
    get(a) {
      const o = this.__v_raw, c = /* @__PURE__ */ dt(o), f = /* @__PURE__ */ dt(a);
      e || (mr(a, f) && mn(c, "get", a), mn(c, "get", f));
      const { has: h } = qo(c), g = t ? Au : e ? _a : ir;
      if (h.call(c, a))
        return g(o.get(a));
      if (h.call(c, f))
        return g(o.get(f));
      o !== c && o.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && mn(/* @__PURE__ */ dt(a), "iterate", _i), a.size;
    },
    has(a) {
      const o = this.__v_raw, c = /* @__PURE__ */ dt(o), f = /* @__PURE__ */ dt(a);
      return e || (mr(a, f) && mn(c, "has", a), mn(c, "has", f)), a === f ? o.has(a) : o.has(a) || o.has(f);
    },
    forEach(a, o) {
      const c = this, f = c.__v_raw, h = /* @__PURE__ */ dt(f), g = t ? Au : e ? _a : ir;
      return !e && mn(h, "iterate", _i), f.forEach((v, x) => a.call(o, g(v), g(x), c));
    }
  };
  return xn(
    n,
    e ? {
      add: Xo("add"),
      set: Xo("set"),
      delete: Xo("delete"),
      clear: Xo("clear")
    } : {
      add(a) {
        const o = /* @__PURE__ */ dt(this), c = qo(o), f = /* @__PURE__ */ dt(a), h = !t && !/* @__PURE__ */ Yn(a) && !/* @__PURE__ */ Kr(a) ? f : a;
        return c.has.call(o, h) || mr(a, h) && c.has.call(o, a) || mr(f, h) && c.has.call(o, f) || (o.add(h), jr(o, "add", h, h)), this;
      },
      set(a, o) {
        !t && !/* @__PURE__ */ Yn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ dt(o));
        const c = /* @__PURE__ */ dt(this), { has: f, get: h } = qo(c);
        let g = f.call(c, a);
        g || (a = /* @__PURE__ */ dt(a), g = f.call(c, a));
        const v = h.call(c, a);
        return c.set(a, o), g ? mr(o, v) && jr(c, "set", a, o) : jr(c, "add", a, o), this;
      },
      delete(a) {
        const o = /* @__PURE__ */ dt(this), { has: c, get: f } = qo(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ dt(a), h = c.call(o, a)), f && f.call(o, a);
        const g = o.delete(a);
        return h && jr(o, "delete", a, void 0), g;
      },
      clear() {
        const a = /* @__PURE__ */ dt(this), o = a.size !== 0, c = a.clear();
        return o && jr(
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
    n[a] = iy(a, e, t);
  }), n;
}
function cc(e, t) {
  const n = ay(e, t);
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    ht(n, a) && a in r ? n : r,
    a,
    o
  );
}
const oy = {
  get: /* @__PURE__ */ cc(!1, !1)
}, sy = {
  get: /* @__PURE__ */ cc(!1, !0)
}, ly = {
  get: /* @__PURE__ */ cc(!0, !1)
};
const cp = /* @__PURE__ */ new WeakMap(), fp = /* @__PURE__ */ new WeakMap(), dp = /* @__PURE__ */ new WeakMap(), uy = /* @__PURE__ */ new WeakMap();
function cy(e) {
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
function fy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cy(Rb(e));
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  return /* @__PURE__ */ Kr(e) ? e : fc(
    e,
    !1,
    ty,
    oy,
    cp
  );
}
// @__NO_SIDE_EFFECTS__
function dy(e) {
  return fc(
    e,
    !1,
    ry,
    sy,
    fp
  );
}
// @__NO_SIDE_EFFECTS__
function Cu(e) {
  return fc(
    e,
    !0,
    ny,
    ly,
    dp
  );
}
function fc(e, t, n, r, a) {
  if (!yt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = fy(e);
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
function xi(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ xi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function dc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function hy(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && qh(e, "__v_skip", !0), e;
}
const ir = (e) => yt(e) ? /* @__PURE__ */ ka(e) : e, _a = (e) => yt(e) ? /* @__PURE__ */ Cu(e) : e;
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return py(e, !1);
}
function py(e, t) {
  return /* @__PURE__ */ yn(e) ? e : new my(e, t);
}
class my {
  constructor(t, n) {
    this.dep = new uc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : ir(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Yn(t) || /* @__PURE__ */ Kr(t);
    t = r ? t : /* @__PURE__ */ dt(t), mr(t, n) && (this._rawValue = t, this._value = r ? t : ir(t), this.dep.trigger());
  }
}
function pt(e) {
  return /* @__PURE__ */ yn(e) ? e.value : e;
}
const gy = {
  get: (e, t, n) => t === "__v_raw" ? e : pt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ yn(a) && !/* @__PURE__ */ yn(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function hp(e) {
  return /* @__PURE__ */ xi(e) ? e : new Proxy(e, gy);
}
class by {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new uc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = lo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return tp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ip(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function yy(e, t, n = !1) {
  let r, a;
  return Ze(e) ? r = e : (r = e.get, a = e.set), new by(r, a, n);
}
const Jo = {}, Ds = /* @__PURE__ */ new WeakMap();
let bi;
function vy(e, t = !1, n = bi) {
  if (n) {
    let r = Ds.get(n);
    r || Ds.set(n, r = []), r.push(e);
  }
}
function _y(e, t, n = kt) {
  const { immediate: r, deep: a, once: o, scheduler: c, augmentJob: f, call: h } = n, g = (I) => a ? I : /* @__PURE__ */ Yn(I) || a === !1 || a === 0 ? Vr(I, 1) : Vr(I);
  let v, x, S, M, b = !1, O = !1;
  if (/* @__PURE__ */ yn(e) ? (x = () => e.value, b = /* @__PURE__ */ Yn(e)) : /* @__PURE__ */ xi(e) ? (x = () => g(e), b = !0) : Xe(e) ? (O = !0, b = e.some((I) => /* @__PURE__ */ xi(I) || /* @__PURE__ */ Yn(I)), x = () => e.map((I) => {
    if (/* @__PURE__ */ yn(I))
      return I.value;
    if (/* @__PURE__ */ xi(I))
      return g(I);
    if (Ze(I))
      return h ? h(I, 2) : I();
  })) : Ze(e) ? t ? x = h ? () => h(e, 2) : e : x = () => {
    if (S) {
      Br();
      try {
        S();
      } finally {
        Gr();
      }
    }
    const I = bi;
    bi = v;
    try {
      return h ? h(e, 3, [M]) : e(M);
    } finally {
      bi = I;
    }
  } : x = wr, t && a) {
    const I = x, R = a === !0 ? 1 / 0 : a;
    x = () => Vr(I(), R);
  }
  const j = Wb(), z = () => {
    v.stop(), j && j.active && nc(j.effects, v);
  };
  if (o && t) {
    const I = t;
    t = (...R) => {
      I(...R), z();
    };
  }
  let P = O ? new Array(e.length).fill(Jo) : Jo;
  const $ = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (t) {
        const R = v.run();
        if (a || b || (O ? R.some((G, H) => mr(G, P[H])) : mr(R, P))) {
          S && S();
          const G = bi;
          bi = v;
          try {
            const H = [
              R,
              // pass undefined as the old value when it's changed for the first time
              P === Jo ? void 0 : O && P[0] === Jo ? [] : P,
              M
            ];
            P = R, h ? h(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            bi = G;
          }
        }
      } else
        v.run();
  };
  return f && f($), v = new Qh(x), v.scheduler = c ? () => c($, !1) : $, M = (I) => vy(I, !1, v), S = v.onStop = () => {
    const I = Ds.get(v);
    if (I) {
      if (h)
        h(I, 4);
      else
        for (const R of I) R();
      Ds.delete(v);
    }
  }, t ? r ? $(!0) : P = v.run() : c ? c($.bind(null, !0), !0) : v.run(), z.pause = v.pause.bind(v), z.resume = v.resume.bind(v), z.stop = z, z;
}
function Vr(e, t = 1 / 0, n) {
  if (t <= 0 || !yt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ yn(e))
    Vr(e.value, t, n);
  else if (Xe(e))
    for (let r = 0; r < e.length; r++)
      Vr(e[r], t, n);
  else if (Gh(e) || ha(e))
    e.forEach((r) => {
      Vr(r, t, n);
    });
  else if (Yh(e)) {
    for (const r in e)
      Vr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Vr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xo(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    al(a, t, n);
  }
}
function Nr(e, t, n, r) {
  if (Ze(e)) {
    const a = xo(e, t, n, r);
    return a && Kh(a) && a.catch((o) => {
      al(o, t, n);
    }), a;
  }
  if (Xe(e)) {
    const a = [];
    for (let o = 0; o < e.length; o++)
      a.push(Nr(e[o], t, n, r));
    return a;
  }
}
function al(e, t, n, r = !0) {
  const a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: c } = t && t.appContext.config || kt;
  if (t) {
    let f = t.parent;
    const h = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const v = f.ec;
      if (v) {
        for (let x = 0; x < v.length; x++)
          if (v[x](e, h, g) === !1)
            return;
      }
      f = f.parent;
    }
    if (o) {
      Br(), xo(o, null, 10, [
        e,
        h,
        g
      ]), Gr();
      return;
    }
  }
  xy(e, n, a, r, c);
}
function xy(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Mn = [];
let fr = -1;
const pa = [];
let ni = null, sa = 0;
const pp = /* @__PURE__ */ Promise.resolve();
let Os = null;
function hc(e) {
  const t = Os || pp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sy(e) {
  let t = fr + 1, n = Mn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Mn[r], o = co(a);
    o < e || o === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function pc(e) {
  if (!(e.flags & 1)) {
    const t = co(e), n = Mn[Mn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= co(n) ? Mn.push(e) : Mn.splice(Sy(t), 0, e), e.flags |= 1, mp();
  }
}
function mp() {
  Os || (Os = pp.then(bp));
}
function wy(e) {
  Xe(e) ? pa.push(...e) : ni && e.id === -1 ? ni.splice(sa + 1, 0, e) : e.flags & 1 || (pa.push(e), e.flags |= 1), mp();
}
function dd(e, t, n = fr + 1) {
  for (; n < Mn.length; n++) {
    const r = Mn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Mn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function gp(e) {
  if (pa.length) {
    const t = [...new Set(pa)].sort(
      (n, r) => co(n) - co(r)
    );
    if (pa.length = 0, ni) {
      ni.push(...t);
      return;
    }
    for (ni = t, sa = 0; sa < ni.length; sa++) {
      const n = ni[sa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ni = null, sa = 0;
  }
}
const co = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bp(e) {
  try {
    for (fr = 0; fr < Mn.length; fr++) {
      const t = Mn[fr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; fr < Mn.length; fr++) {
      const t = Mn[fr];
      t && (t.flags &= -2);
    }
    fr = -1, Mn.length = 0, gp(), Os = null, (Mn.length || pa.length) && bp();
  }
}
let jn = null, yp = null;
function Fs(e) {
  const t = jn;
  return jn = e, yp = e && e.type.__scopeId || null, t;
}
function vp(e, t = jn, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && kd(-1);
    const o = Fs(t);
    let c;
    try {
      c = e(...a);
    } finally {
      Fs(o), r._d && kd(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Si(e, t) {
  if (jn === null)
    return e;
  const n = cl(jn), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, c, f, h = kt] = t[a];
    o && (Ze(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Vr(c), r.push({
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
function hi(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let c = 0; c < a.length; c++) {
    const f = a[c];
    o && (f.oldValue = o[c].value);
    let h = f.dir[r];
    h && (Br(), Nr(h, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Gr());
  }
}
function ky(e, t) {
  if (gn) {
    let n = gn.provides;
    const r = gn.parent && gn.parent.provides;
    r === n && (n = gn.provides = Object.create(r)), n[e] = t;
  }
}
function ys(e, t, n = !1) {
  const r = wv();
  if (r || ma) {
    let a = ma ? ma._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ze(t) ? t.call(r && r.proxy) : t;
  }
}
const Ny = /* @__PURE__ */ Symbol.for("v-scx"), My = () => ys(Ny);
function wi(e, t, n) {
  return _p(e, t, n);
}
function _p(e, t, n = kt) {
  const { immediate: r, deep: a, flush: o, once: c } = n, f = xn({}, n), h = t && r || !t && o !== "post";
  let g;
  if (ho) {
    if (o === "sync") {
      const M = My();
      g = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!h) {
      const M = () => {
      };
      return M.stop = wr, M.resume = wr, M.pause = wr, M;
    }
  }
  const v = gn;
  f.call = (M, b, O) => Nr(M, v, b, O);
  let x = !1;
  o === "post" ? f.scheduler = (M) => {
    Dn(M, v && v.suspense);
  } : o !== "sync" && (x = !0, f.scheduler = (M, b) => {
    b ? M() : pc(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), x && (M.flags |= 2, v && (M.id = v.uid, M.i = v));
  };
  const S = _y(e, t, f);
  return ho && (g ? g.push(S) : h && S()), S;
}
function Py(e, t, n) {
  const r = this.proxy, a = Vt(e) ? e.includes(".") ? xp(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ze(t) ? o = t : (o = t.handler, n = t);
  const c = So(this), f = _p(a, o.bind(r), n);
  return c(), f;
}
function xp(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const Ay = /* @__PURE__ */ Symbol("_vte"), Cy = (e) => e.__isTeleport, Ty = /* @__PURE__ */ Symbol("_leaveCb");
function mc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, mc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Sp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Rs = /* @__PURE__ */ new WeakMap();
function ro(e, t, n, r, a = !1) {
  if (Xe(e)) {
    e.forEach(
      (O, j) => ro(
        O,
        t && (Xe(t) ? t[j] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (io(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ro(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? cl(r.component) : r.el, c = a ? null : o, { i: f, r: h } = e, g = t && t.r, v = f.refs === kt ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ dt(x), M = x === kt ? Bh : (O) => hd(v, O) ? !1 : ht(S, O), b = (O, j) => !(j && hd(v, j));
  if (g != null && g !== h) {
    if (pd(t), Vt(g))
      v[g] = null, M(g) && (x[g] = null);
    else if (/* @__PURE__ */ yn(g)) {
      const O = t;
      b(g, O.k) && (g.value = null), O.k && (v[O.k] = null);
    }
  }
  if (Ze(h))
    xo(h, f, 12, [c, v]);
  else {
    const O = Vt(h), j = /* @__PURE__ */ yn(h);
    if (O || j) {
      const z = () => {
        if (e.f) {
          const P = O ? M(h) ? x[h] : v[h] : b() || !e.k ? h.value : v[e.k];
          if (a)
            Xe(P) && nc(P, o);
          else if (Xe(P))
            P.includes(o) || P.push(o);
          else if (O)
            v[h] = [o], M(h) && (x[h] = v[h]);
          else {
            const $ = [o];
            b(h, e.k) && (h.value = $), e.k && (v[e.k] = $);
          }
        } else O ? (v[h] = c, M(h) && (x[h] = c)) : j && (b(h, e.k) && (h.value = c), e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          z(), Rs.delete(e);
        };
        P.id = -1, Rs.set(e, P), Dn(P, n);
      } else
        pd(e), z();
    }
  }
}
function pd(e) {
  const t = Rs.get(e);
  t && (t.flags |= 8, Rs.delete(e));
}
rl().requestIdleCallback;
rl().cancelIdleCallback;
const io = (e) => !!e.type.__asyncLoader, wp = (e) => e.type.__isKeepAlive;
function Iy(e, t) {
  kp(e, "a", t);
}
function Ey(e, t) {
  kp(e, "da", t);
}
function kp(e, t, n = gn) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ol(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      wp(a.parent.vnode) && Dy(r, t, n, a), a = a.parent;
  }
}
function Dy(e, t, n, r) {
  const a = ol(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Np(() => {
    nc(r[t], a);
  }, n);
}
function ol(e, t, n = gn, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...c) => {
      Br();
      const f = So(n), h = Nr(t, n, e, c);
      return f(), Gr(), h;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const qr = (e) => (t, n = gn) => {
  (!ho || e === "sp") && ol(e, (...r) => t(...r), n);
}, Oy = qr("bm"), gc = qr("m"), Fy = qr(
  "bu"
), Ry = qr("u"), sl = qr(
  "bum"
), Np = qr("um"), Ly = qr(
  "sp"
), zy = qr("rtg"), $y = qr("rtc");
function jy(e, t = gn) {
  ol("ec", e, t);
}
const Vy = "components", Mp = /* @__PURE__ */ Symbol.for("v-ndc");
function Hy(e) {
  return Vt(e) ? Uy(Vy, e, !1) || e : e || Mp;
}
function Uy(e, t, n = !0, r = !1) {
  const a = jn || gn;
  if (a) {
    const o = a.type;
    {
      const f = Av(
        o,
        !1
      );
      if (f && (f === t || f === Pn(t) || f === nl(Pn(t))))
        return o;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      md(a[e] || o[e], t) || // global registration
      md(a.appContext[e], t)
    );
    return !c && r ? o : c;
  }
}
function md(e, t) {
  return e && (e[t] || e[Pn(t)] || e[nl(Pn(t))]);
}
function jt(e, t, n, r) {
  let a;
  const o = n, c = Xe(e);
  if (c || Vt(e)) {
    const f = c && /* @__PURE__ */ xi(e);
    let h = !1, g = !1;
    f && (h = !/* @__PURE__ */ Yn(e), g = /* @__PURE__ */ Kr(e), e = il(e)), a = new Array(e.length);
    for (let v = 0, x = e.length; v < x; v++)
      a[v] = t(
        h ? g ? _a(ir(e[v])) : ir(e[v]) : e[v],
        v,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, o);
  } else if (yt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, h) => t(f, h, void 0, o)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let h = 0, g = f.length; h < g; h++) {
        const v = f[h];
        a[h] = t(e[v], v, h, o);
      }
    }
  else
    a = [];
  return a;
}
const Tu = (e) => e ? Wp(e) ? cl(e) : Tu(e.parent) : null, ao = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Tu(e.parent),
    $root: (e) => Tu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ap(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      pc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hc.bind(e.proxy)),
    $watch: (e) => Py.bind(e)
  })
), tu = (e, t) => e !== kt && !e.__isScriptSetup && ht(e, t), By = {
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
        if (tu(r, t))
          return c[t] = 1, r[t];
        if (a !== kt && ht(a, t))
          return c[t] = 2, a[t];
        if (ht(o, t))
          return c[t] = 3, o[t];
        if (n !== kt && ht(n, t))
          return c[t] = 4, n[t];
        Iu && (c[t] = 0);
      }
    }
    const g = ao[t];
    let v, x;
    if (g)
      return t === "$attrs" && mn(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (v = f.__cssModules) && (v = v[t])
    )
      return v;
    if (n !== kt && ht(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      x = h.config.globalProperties, ht(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return tu(a, t) ? (a[t] = n, !0) : r !== kt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: o, type: c }
  }, f) {
    let h;
    return !!(n[f] || e !== kt && f[0] !== "$" && ht(e, f) || tu(t, f) || ht(o, f) || ht(r, f) || ht(ao, f) || ht(a.config.globalProperties, f) || (h = c.__cssModules) && h[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function gd(e) {
  return Xe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Iu = !0;
function Gy(e) {
  const t = Ap(e), n = e.proxy, r = e.ctx;
  Iu = !1, t.beforeCreate && bd(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: c,
    watch: f,
    provide: h,
    inject: g,
    // lifecycle
    created: v,
    beforeMount: x,
    mounted: S,
    beforeUpdate: M,
    updated: b,
    activated: O,
    deactivated: j,
    beforeDestroy: z,
    beforeUnmount: P,
    destroyed: $,
    unmounted: I,
    render: R,
    renderTracked: G,
    renderTriggered: H,
    errorCaptured: se,
    serverPrefetch: ie,
    // public API
    expose: T,
    inheritAttrs: q,
    // assets
    components: re,
    directives: J,
    filters: de
  } = t;
  if (g && Ky(g, r, null), c)
    for (const A in c) {
      const xe = c[A];
      Ze(xe) && (r[A] = xe.bind(n));
    }
  if (a) {
    const A = a.call(n, n);
    yt(A) && (e.data = /* @__PURE__ */ ka(A));
  }
  if (Iu = !0, o)
    for (const A in o) {
      const xe = o[A], Ae = Ze(xe) ? xe.bind(n, n) : Ze(xe.get) ? xe.get.bind(n, n) : wr, Ne = !Ze(xe) && Ze(xe.set) ? xe.set.bind(n) : wr, U = wt({
        get: Ae,
        set: Ne
      });
      Object.defineProperty(r, A, {
        enumerable: !0,
        configurable: !0,
        get: () => U.value,
        set: (je) => U.value = je
      });
    }
  if (f)
    for (const A in f)
      Pp(f[A], r, n, A);
  if (h) {
    const A = Ze(h) ? h.call(n) : h;
    Reflect.ownKeys(A).forEach((xe) => {
      ky(xe, A[xe]);
    });
  }
  v && bd(v, e, "c");
  function we(A, xe) {
    Xe(xe) ? xe.forEach((Ae) => A(Ae.bind(n))) : xe && A(xe.bind(n));
  }
  if (we(Oy, x), we(gc, S), we(Fy, M), we(Ry, b), we(Iy, O), we(Ey, j), we(jy, se), we($y, G), we(zy, H), we(sl, P), we(Np, I), we(Ly, ie), Xe(T))
    if (T.length) {
      const A = e.exposed || (e.exposed = {});
      T.forEach((xe) => {
        Object.defineProperty(A, xe, {
          get: () => n[xe],
          set: (Ae) => n[xe] = Ae,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === wr && (e.render = R), q != null && (e.inheritAttrs = q), re && (e.components = re), J && (e.directives = J), ie && Sp(e);
}
function Ky(e, t, n = wr) {
  Xe(e) && (e = Eu(e));
  for (const r in e) {
    const a = e[r];
    let o;
    yt(a) ? "default" in a ? o = ys(
      a.from || r,
      a.default,
      !0
    ) : o = ys(a.from || r) : o = ys(a), /* @__PURE__ */ yn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (c) => o.value = c
    }) : t[r] = o;
  }
}
function bd(e, t, n) {
  Nr(
    Xe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Pp(e, t, n, r) {
  let a = r.includes(".") ? xp(n, r) : () => n[r];
  if (Vt(e)) {
    const o = t[e];
    Ze(o) && wi(a, o);
  } else if (Ze(e))
    wi(a, e.bind(n));
  else if (yt(e))
    if (Xe(e))
      e.forEach((o) => Pp(o, t, n, r));
    else {
      const o = Ze(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ze(o) && wi(a, o, e);
    }
}
function Ap(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = o.get(t);
  let h;
  return f ? h = f : !a.length && !n && !r ? h = t : (h = {}, a.length && a.forEach(
    (g) => Ls(h, g, c, !0)
  ), Ls(h, t, c)), yt(t) && o.set(t, h), h;
}
function Ls(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Ls(e, o, n, !0), a && a.forEach(
    (c) => Ls(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = Wy[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const Wy = {
  data: yd,
  props: vd,
  emits: vd,
  // objects
  methods: Ya,
  computed: Ya,
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
  components: Ya,
  directives: Ya,
  // watch
  watch: qy,
  // provide / inject
  provide: yd,
  inject: Yy
};
function yd(e, t) {
  return t ? e ? function() {
    return xn(
      Ze(e) ? e.call(this, this) : e,
      Ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Yy(e, t) {
  return Ya(Eu(e), Eu(t));
}
function Eu(e) {
  if (Xe(e)) {
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
function Ya(e, t) {
  return e ? xn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vd(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xn(
    /* @__PURE__ */ Object.create(null),
    gd(e),
    gd(t ?? {})
  ) : t;
}
function qy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Nn(e[r], t[r]);
  return n;
}
function Cp() {
  return {
    app: null,
    config: {
      isNativeTag: Bh,
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
let Xy = 0;
function Jy(e, t) {
  return function(r, a = null) {
    Ze(r) || (r = xn({}, r)), a != null && !yt(a) && (a = null);
    const o = Cp(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let h = !1;
    const g = o.app = {
      _uid: Xy++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: Tv,
      get config() {
        return o.config;
      },
      set config(v) {
      },
      use(v, ...x) {
        return c.has(v) || (v && Ze(v.install) ? (c.add(v), v.install(g, ...x)) : Ze(v) && (c.add(v), v(g, ...x))), g;
      },
      mixin(v) {
        return o.mixins.includes(v) || o.mixins.push(v), g;
      },
      component(v, x) {
        return x ? (o.components[v] = x, g) : o.components[v];
      },
      directive(v, x) {
        return x ? (o.directives[v] = x, g) : o.directives[v];
      },
      mount(v, x, S) {
        if (!h) {
          const M = g._ceVNode || $e(r, a);
          return M.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(M, v, S), h = !0, g._container = v, v.__vue_app__ = g, cl(M.component);
        }
      },
      onUnmount(v) {
        f.push(v);
      },
      unmount() {
        h && (Nr(
          f,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(v, x) {
        return o.provides[v] = x, g;
      },
      runWithContext(v) {
        const x = ma;
        ma = g;
        try {
          return v();
        } finally {
          ma = x;
        }
      }
    };
    return g;
  };
}
let ma = null;
const Zy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pn(t)}Modifiers`] || e[`${Ti(t)}Modifiers`];
function Qy(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || kt;
  let a = n;
  const o = t.startsWith("update:"), c = o && Zy(r, t.slice(7));
  c && (c.trim && (a = n.map((v) => Vt(v) ? v.trim() : v)), c.number && (a = n.map(ic)));
  let f, h = r[f = Xl(t)] || // also try camelCase event handler (#2249)
  r[f = Xl(Pn(t))];
  !h && o && (h = r[f = Xl(Ti(t))]), h && Nr(
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
    e.emitted[f] = !0, Nr(
      g,
      e,
      6,
      a
    );
  }
}
const ev = /* @__PURE__ */ new WeakMap();
function Tp(e, t, n = !1) {
  const r = n ? ev : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let c = {}, f = !1;
  if (!Ze(e)) {
    const h = (g) => {
      const v = Tp(g, t, !0);
      v && (f = !0, xn(c, v));
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !o && !f ? (yt(e) && r.set(e, null), null) : (Xe(o) ? o.forEach((h) => c[h] = null) : xn(c, o), yt(e) && r.set(e, c), c);
}
function ll(e, t) {
  return !e || !Qs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, Ti(t)) || ht(e, t));
}
function _d(e) {
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
    renderCache: v,
    props: x,
    data: S,
    setupState: M,
    ctx: b,
    inheritAttrs: O
  } = e, j = Fs(e);
  let z, P;
  try {
    if (n.shapeFlag & 4) {
      const I = a || r, R = I;
      z = hr(
        g.call(
          R,
          I,
          v,
          x,
          M,
          S,
          b
        )
      ), P = f;
    } else {
      const I = t;
      z = hr(
        I.length > 1 ? I(
          x,
          { attrs: f, slots: c, emit: h }
        ) : I(
          x,
          null
        )
      ), P = t.props ? f : tv(f);
    }
  } catch (I) {
    oo.length = 0, al(I, e, 1), z = $e(ai);
  }
  let $ = z;
  if (P && O !== !1) {
    const I = Object.keys(P), { shapeFlag: R } = $;
    I.length && R & 7 && (o && I.some(el) && (P = nv(
      P,
      o
    )), $ = xa($, P, !1, !0));
  }
  return n.dirs && ($ = xa($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && mc($, n.transition), z = $, Fs(j), z;
}
const tv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, nv = (e, t) => {
  const n = {};
  for (const r in e)
    (!el(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function rv(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: c, children: f, patchFlag: h } = t, g = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return r ? xd(r, c, g) : !!c;
    if (h & 8) {
      const v = t.dynamicProps;
      for (let x = 0; x < v.length; x++) {
        const S = v[x];
        if (Ip(c, r, S) && !ll(g, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? xd(r, c, g) : !0 : !!c;
  return !1;
}
function xd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (Ip(t, e, o) && !ll(n, o))
      return !0;
  }
  return !1;
}
function Ip(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && yt(r) && yt(a) ? !ac(r, a) : r !== a;
}
function iv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Ep = {}, Dp = () => Object.create(Ep), Op = (e) => Object.getPrototypeOf(e) === Ep;
function av(e, t, n, r = !1) {
  const a = {}, o = Dp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fp(e, t, a, o);
  for (const c in e.propsOptions[0])
    c in a || (a[c] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ dy(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function ov(e, t, n, r) {
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
      const v = e.vnode.dynamicProps;
      for (let x = 0; x < v.length; x++) {
        let S = v[x];
        if (ll(e.emitsOptions, S))
          continue;
        const M = t[S];
        if (h)
          if (ht(o, S))
            M !== o[S] && (o[S] = M, g = !0);
          else {
            const b = Pn(S);
            a[b] = Du(
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
    Fp(e, t, a, o) && (g = !0);
    let v;
    for (const x in f)
      (!t || // for camelCase
      !ht(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ti(x)) === x || !ht(t, v))) && (h ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[v] !== void 0) && (a[x] = Du(
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
  g && jr(e.attrs, "set", "");
}
function Fp(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let h in t) {
      if (eo(h))
        continue;
      const g = t[h];
      let v;
      a && ht(a, v = Pn(h)) ? !o || !o.includes(v) ? n[v] = g : (f || (f = {}))[v] = g : ll(e.emitsOptions, h) || (!(h in r) || g !== r[h]) && (r[h] = g, c = !0);
    }
  if (o) {
    const h = /* @__PURE__ */ dt(n), g = f || kt;
    for (let v = 0; v < o.length; v++) {
      const x = o[v];
      n[x] = Du(
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
function Du(e, t, n, r, a, o) {
  const c = e[n];
  if (c != null) {
    const f = ht(c, "default");
    if (f && r === void 0) {
      const h = c.default;
      if (c.type !== Function && !c.skipFactory && Ze(h)) {
        const { propsDefaults: g } = a;
        if (n in g)
          r = g[n];
        else {
          const v = So(a);
          r = g[n] = h.call(
            null,
            t
          ), v();
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
const sv = /* @__PURE__ */ new WeakMap();
function Rp(e, t, n = !1) {
  const r = n ? sv : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, c = {}, f = [];
  let h = !1;
  if (!Ze(e)) {
    const v = (x) => {
      h = !0;
      const [S, M] = Rp(x, t, !0);
      xn(c, S), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!o && !h)
    return yt(e) && r.set(e, da), da;
  if (Xe(o))
    for (let v = 0; v < o.length; v++) {
      const x = Pn(o[v]);
      Sd(x) && (c[x] = kt);
    }
  else if (o)
    for (const v in o) {
      const x = Pn(v);
      if (Sd(x)) {
        const S = o[v], M = c[x] = Xe(S) || Ze(S) ? { type: S } : xn({}, S), b = M.type;
        let O = !1, j = !0;
        if (Xe(b))
          for (let z = 0; z < b.length; ++z) {
            const P = b[z], $ = Ze(P) && P.name;
            if ($ === "Boolean") {
              O = !0;
              break;
            } else $ === "String" && (j = !1);
          }
        else
          O = Ze(b) && b.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = O, M[
          1
          /* shouldCastTrue */
        ] = j, (O || ht(M, "default")) && f.push(x);
      }
    }
  const g = [c, f];
  return yt(e) && r.set(e, g), g;
}
function Sd(e) {
  return e[0] !== "$" && !eo(e);
}
const bc = (e) => e === "_" || e === "_ctx" || e === "$stable", yc = (e) => Xe(e) ? e.map(hr) : [hr(e)], lv = (e, t, n) => {
  if (t._n)
    return t;
  const r = vp((...a) => yc(t(...a)), n);
  return r._c = !1, r;
}, Lp = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (bc(a)) continue;
    const o = e[a];
    if (Ze(o))
      t[a] = lv(a, o, r);
    else if (o != null) {
      const c = yc(o);
      t[a] = () => c;
    }
  }
}, zp = (e, t) => {
  const n = yc(t);
  e.slots.default = () => n;
}, $p = (e, t, n) => {
  for (const r in t)
    (n || !bc(r)) && (e[r] = t[r]);
}, uv = (e, t, n) => {
  const r = e.slots = Dp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? ($p(r, t, n), n && qh(r, "_", a, !0)) : Lp(t, r);
  } else t && zp(e, t);
}, cv = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, c = kt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? o = !1 : $p(a, t, n) : (o = !t.$stable, Lp(t, a)), c = t;
  } else t && (zp(e, t), c = { default: 1 });
  if (o)
    for (const f in a)
      !bc(f) && c[f] == null && delete a[f];
}, Dn = mv;
function fv(e) {
  return dv(e);
}
function dv(e, t) {
  const n = rl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: c,
    createText: f,
    createComment: h,
    setText: g,
    setElementText: v,
    parentNode: x,
    nextSibling: S,
    setScopeId: M = wr,
    insertStaticContent: b
  } = e, O = (L, V, te, ye = null, he = null, D = null, Q = void 0, ee = null, fe = !!V.dynamicChildren) => {
    if (L === V)
      return;
    L && !za(L, V) && (ye = qt(L), je(L, he, D, !0), L = null), V.patchFlag === -2 && (fe = !1, V.dynamicChildren = null);
    const { type: ne, ref: Me, shapeFlag: ge } = V;
    switch (ne) {
      case ul:
        j(L, V, te, ye);
        break;
      case ai:
        z(L, V, te, ye);
        break;
      case ru:
        L == null && P(V, te, ye, Q);
        break;
      case ot:
        re(
          L,
          V,
          te,
          ye,
          he,
          D,
          Q,
          ee,
          fe
        );
        break;
      default:
        ge & 1 ? R(
          L,
          V,
          te,
          ye,
          he,
          D,
          Q,
          ee,
          fe
        ) : ge & 6 ? J(
          L,
          V,
          te,
          ye,
          he,
          D,
          Q,
          ee,
          fe
        ) : (ge & 64 || ge & 128) && ne.process(
          L,
          V,
          te,
          ye,
          he,
          D,
          Q,
          ee,
          fe,
          nn
        );
    }
    Me != null && he ? ro(Me, L && L.ref, D, V || L, !V) : Me == null && L && L.ref != null && ro(L.ref, null, D, L, !0);
  }, j = (L, V, te, ye) => {
    if (L == null)
      r(
        V.el = f(V.children),
        te,
        ye
      );
    else {
      const he = V.el = L.el;
      V.children !== L.children && g(he, V.children);
    }
  }, z = (L, V, te, ye) => {
    L == null ? r(
      V.el = h(V.children || ""),
      te,
      ye
    ) : V.el = L.el;
  }, P = (L, V, te, ye) => {
    [L.el, L.anchor] = b(
      L.children,
      V,
      te,
      ye,
      L.el,
      L.anchor
    );
  }, $ = ({ el: L, anchor: V }, te, ye) => {
    let he;
    for (; L && L !== V; )
      he = S(L), r(L, te, ye), L = he;
    r(V, te, ye);
  }, I = ({ el: L, anchor: V }) => {
    let te;
    for (; L && L !== V; )
      te = S(L), a(L), L = te;
    a(V);
  }, R = (L, V, te, ye, he, D, Q, ee, fe) => {
    if (V.type === "svg" ? Q = "svg" : V.type === "math" && (Q = "mathml"), L == null)
      G(
        V,
        te,
        ye,
        he,
        D,
        Q,
        ee,
        fe
      );
    else {
      const ne = L.el && L.el._isVueCE ? L.el : null;
      try {
        ne && ne._beginPatch(), ie(
          L,
          V,
          he,
          D,
          Q,
          ee,
          fe
        );
      } finally {
        ne && ne._endPatch();
      }
    }
  }, G = (L, V, te, ye, he, D, Q, ee) => {
    let fe, ne;
    const { props: Me, shapeFlag: ge, transition: Ce, dirs: d } = L;
    if (fe = L.el = c(
      L.type,
      D,
      Me && Me.is,
      Me
    ), ge & 8 ? v(fe, L.children) : ge & 16 && se(
      L.children,
      fe,
      null,
      ye,
      he,
      nu(L, D),
      Q,
      ee
    ), d && hi(L, null, ye, "created"), H(fe, L, L.scopeId, Q, ye), Me) {
      for (const Re in Me)
        Re !== "value" && !eo(Re) && o(fe, Re, null, Me[Re], D, ye);
      "value" in Me && o(fe, "value", null, Me.value, D), (ne = Me.onVnodeBeforeMount) && sr(ne, ye, L);
    }
    d && hi(L, null, ye, "beforeMount");
    const De = hv(he, Ce);
    De && Ce.beforeEnter(fe), r(fe, V, te), ((ne = Me && Me.onVnodeMounted) || De || d) && Dn(() => {
      try {
        ne && sr(ne, ye, L), De && Ce.enter(fe), d && hi(L, null, ye, "mounted");
      } finally {
      }
    }, he);
  }, H = (L, V, te, ye, he) => {
    if (te && M(L, te), ye)
      for (let D = 0; D < ye.length; D++)
        M(L, ye[D]);
    if (he) {
      let D = he.subTree;
      if (V === D || Up(D.type) && (D.ssContent === V || D.ssFallback === V)) {
        const Q = he.vnode;
        H(
          L,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          he.parent
        );
      }
    }
  }, se = (L, V, te, ye, he, D, Q, ee, fe = 0) => {
    for (let ne = fe; ne < L.length; ne++) {
      const Me = L[ne] = ee ? $r(L[ne]) : hr(L[ne]);
      O(
        null,
        Me,
        V,
        te,
        ye,
        he,
        D,
        Q,
        ee
      );
    }
  }, ie = (L, V, te, ye, he, D, Q) => {
    const ee = V.el = L.el;
    let { patchFlag: fe, dynamicChildren: ne, dirs: Me } = V;
    fe |= L.patchFlag & 16;
    const ge = L.props || kt, Ce = V.props || kt;
    let d;
    if (te && pi(te, !1), (d = Ce.onVnodeBeforeUpdate) && sr(d, te, V, L), Me && hi(V, L, te, "beforeUpdate"), te && pi(te, !0), (ge.innerHTML && Ce.innerHTML == null || ge.textContent && Ce.textContent == null) && v(ee, ""), ne ? T(
      L.dynamicChildren,
      ne,
      ee,
      te,
      ye,
      nu(V, he),
      D
    ) : Q || xe(
      L,
      V,
      ee,
      null,
      te,
      ye,
      nu(V, he),
      D,
      !1
    ), fe > 0) {
      if (fe & 16)
        q(ee, ge, Ce, te, he);
      else if (fe & 2 && ge.class !== Ce.class && o(ee, "class", null, Ce.class, he), fe & 4 && o(ee, "style", ge.style, Ce.style, he), fe & 8) {
        const De = V.dynamicProps;
        for (let Re = 0; Re < De.length; Re++) {
          const Ue = De[Re], et = ge[Ue], gt = Ce[Ue];
          (gt !== et || Ue === "value") && o(ee, Ue, et, gt, he, te);
        }
      }
      fe & 1 && L.children !== V.children && v(ee, V.children);
    } else !Q && ne == null && q(ee, ge, Ce, te, he);
    ((d = Ce.onVnodeUpdated) || Me) && Dn(() => {
      d && sr(d, te, V, L), Me && hi(V, L, te, "updated");
    }, ye);
  }, T = (L, V, te, ye, he, D, Q) => {
    for (let ee = 0; ee < V.length; ee++) {
      const fe = L[ee], ne = V[ee], Me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        fe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (fe.type === ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !za(fe, ne) || // - In the case of a component, it could contain anything.
        fe.shapeFlag & 198) ? x(fe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      O(
        fe,
        ne,
        Me,
        null,
        ye,
        he,
        D,
        Q,
        !0
      );
    }
  }, q = (L, V, te, ye, he) => {
    if (V !== te) {
      if (V !== kt)
        for (const D in V)
          !eo(D) && !(D in te) && o(
            L,
            D,
            V[D],
            null,
            he,
            ye
          );
      for (const D in te) {
        if (eo(D)) continue;
        const Q = te[D], ee = V[D];
        Q !== ee && D !== "value" && o(L, D, ee, Q, he, ye);
      }
      "value" in te && o(L, "value", V.value, te.value, he);
    }
  }, re = (L, V, te, ye, he, D, Q, ee, fe) => {
    const ne = V.el = L ? L.el : f(""), Me = V.anchor = L ? L.anchor : f("");
    let { patchFlag: ge, dynamicChildren: Ce, slotScopeIds: d } = V;
    d && (ee = ee ? ee.concat(d) : d), L == null ? (r(ne, te, ye), r(Me, te, ye), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      te,
      Me,
      he,
      D,
      Q,
      ee,
      fe
    )) : ge > 0 && ge & 64 && Ce && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren && L.dynamicChildren.length === Ce.length ? (T(
      L.dynamicChildren,
      Ce,
      te,
      he,
      D,
      Q,
      ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || he && V === he.subTree) && jp(
      L,
      V,
      !0
      /* shallow */
    )) : xe(
      L,
      V,
      te,
      Me,
      he,
      D,
      Q,
      ee,
      fe
    );
  }, J = (L, V, te, ye, he, D, Q, ee, fe) => {
    V.slotScopeIds = ee, L == null ? V.shapeFlag & 512 ? he.ctx.activate(
      V,
      te,
      ye,
      Q,
      fe
    ) : de(
      V,
      te,
      ye,
      he,
      D,
      Q,
      fe
    ) : ce(L, V, fe);
  }, de = (L, V, te, ye, he, D, Q) => {
    const ee = L.component = Sv(
      L,
      ye,
      he
    );
    if (wp(L) && (ee.ctx.renderer = nn), kv(ee, !1, Q), ee.asyncDep) {
      if (he && he.registerDep(ee, we, Q), !L.el) {
        const fe = ee.subTree = $e(ai);
        z(null, fe, V, te), L.placeholder = fe.el;
      }
    } else
      we(
        ee,
        L,
        V,
        te,
        he,
        D,
        Q
      );
  }, ce = (L, V, te) => {
    const ye = V.component = L.component;
    if (rv(L, V, te))
      if (ye.asyncDep && !ye.asyncResolved) {
        A(ye, V, te);
        return;
      } else
        ye.next = V, ye.update();
    else
      V.el = L.el, ye.vnode = V;
  }, we = (L, V, te, ye, he, D, Q) => {
    const ee = () => {
      if (L.isMounted) {
        let { next: ge, bu: Ce, u: d, parent: De, vnode: Re } = L;
        {
          const oe = Vp(L);
          if (oe) {
            ge && (ge.el = Re.el, A(L, ge, Q)), oe.asyncDep.then(() => {
              Dn(() => {
                L.isUnmounted || ne();
              }, he);
            });
            return;
          }
        }
        let Ue = ge, et;
        pi(L, !1), ge ? (ge.el = Re.el, A(L, ge, Q)) : ge = Re, Ce && bs(Ce), (et = ge.props && ge.props.onVnodeBeforeUpdate) && sr(et, De, ge, Re), pi(L, !0);
        const gt = _d(L), at = L.subTree;
        L.subTree = gt, O(
          at,
          gt,
          // parent may have changed if it's in a teleport
          x(at.el),
          // anchor may have changed if it's in a fragment
          qt(at),
          L,
          he,
          D
        ), ge.el = gt.el, Ue === null && iv(L, gt.el), d && Dn(d, he), (et = ge.props && ge.props.onVnodeUpdated) && Dn(
          () => sr(et, De, ge, Re),
          he
        );
      } else {
        let ge;
        const { el: Ce, props: d } = V, { bm: De, m: Re, parent: Ue, root: et, type: gt } = L, at = io(V);
        pi(L, !1), De && bs(De), !at && (ge = d && d.onVnodeBeforeMount) && sr(ge, Ue, V), pi(L, !0);
        {
          et.ce && et.ce._hasShadowRoot() && et.ce._injectChildStyle(
            gt,
            L.parent ? L.parent.type : void 0
          );
          const oe = L.subTree = _d(L);
          O(
            null,
            oe,
            te,
            ye,
            L,
            he,
            D
          ), V.el = oe.el;
        }
        if (Re && Dn(Re, he), !at && (ge = d && d.onVnodeMounted)) {
          const oe = V;
          Dn(
            () => sr(ge, Ue, oe),
            he
          );
        }
        (V.shapeFlag & 256 || Ue && io(Ue.vnode) && Ue.vnode.shapeFlag & 256) && L.a && Dn(L.a, he), L.isMounted = !0, V = te = ye = null;
      }
    };
    L.scope.on();
    const fe = L.effect = new Qh(ee);
    L.scope.off();
    const ne = L.update = fe.run.bind(fe), Me = L.job = fe.runIfDirty.bind(fe);
    Me.i = L, Me.id = L.uid, fe.scheduler = () => pc(Me), pi(L, !0), ne();
  }, A = (L, V, te) => {
    V.component = L;
    const ye = L.vnode.props;
    L.vnode = V, L.next = null, ov(L, V.props, ye, te), cv(L, V.children, te), Br(), dd(L), Gr();
  }, xe = (L, V, te, ye, he, D, Q, ee, fe = !1) => {
    const ne = L && L.children, Me = L ? L.shapeFlag : 0, ge = V.children, { patchFlag: Ce, shapeFlag: d } = V;
    if (Ce > 0) {
      if (Ce & 128) {
        Ne(
          ne,
          ge,
          te,
          ye,
          he,
          D,
          Q,
          ee,
          fe
        );
        return;
      } else if (Ce & 256) {
        Ae(
          ne,
          ge,
          te,
          ye,
          he,
          D,
          Q,
          ee,
          fe
        );
        return;
      }
    }
    d & 8 ? (Me & 16 && Ve(ne, he, D), ge !== ne && v(te, ge)) : Me & 16 ? d & 16 ? Ne(
      ne,
      ge,
      te,
      ye,
      he,
      D,
      Q,
      ee,
      fe
    ) : Ve(ne, he, D, !0) : (Me & 8 && v(te, ""), d & 16 && se(
      ge,
      te,
      ye,
      he,
      D,
      Q,
      ee,
      fe
    ));
  }, Ae = (L, V, te, ye, he, D, Q, ee, fe) => {
    L = L || da, V = V || da;
    const ne = L.length, Me = V.length, ge = Math.min(ne, Me);
    let Ce;
    for (Ce = 0; Ce < ge; Ce++) {
      const d = V[Ce] = fe ? $r(V[Ce]) : hr(V[Ce]);
      O(
        L[Ce],
        d,
        te,
        null,
        he,
        D,
        Q,
        ee,
        fe
      );
    }
    ne > Me ? Ve(
      L,
      he,
      D,
      !0,
      !1,
      ge
    ) : se(
      V,
      te,
      ye,
      he,
      D,
      Q,
      ee,
      fe,
      ge
    );
  }, Ne = (L, V, te, ye, he, D, Q, ee, fe) => {
    let ne = 0;
    const Me = V.length;
    let ge = L.length - 1, Ce = Me - 1;
    for (; ne <= ge && ne <= Ce; ) {
      const d = L[ne], De = V[ne] = fe ? $r(V[ne]) : hr(V[ne]);
      if (za(d, De))
        O(
          d,
          De,
          te,
          null,
          he,
          D,
          Q,
          ee,
          fe
        );
      else
        break;
      ne++;
    }
    for (; ne <= ge && ne <= Ce; ) {
      const d = L[ge], De = V[Ce] = fe ? $r(V[Ce]) : hr(V[Ce]);
      if (za(d, De))
        O(
          d,
          De,
          te,
          null,
          he,
          D,
          Q,
          ee,
          fe
        );
      else
        break;
      ge--, Ce--;
    }
    if (ne > ge) {
      if (ne <= Ce) {
        const d = Ce + 1, De = d < Me ? V[d].el : ye;
        for (; ne <= Ce; )
          O(
            null,
            V[ne] = fe ? $r(V[ne]) : hr(V[ne]),
            te,
            De,
            he,
            D,
            Q,
            ee,
            fe
          ), ne++;
      }
    } else if (ne > Ce)
      for (; ne <= ge; )
        je(L[ne], he, D, !0), ne++;
    else {
      const d = ne, De = ne, Re = /* @__PURE__ */ new Map();
      for (ne = De; ne <= Ce; ne++) {
        const Ge = V[ne] = fe ? $r(V[ne]) : hr(V[ne]);
        Ge.key != null && Re.set(Ge.key, ne);
      }
      let Ue, et = 0;
      const gt = Ce - De + 1;
      let at = !1, oe = 0;
      const Xt = new Array(gt);
      for (ne = 0; ne < gt; ne++) Xt[ne] = 0;
      for (ne = d; ne <= ge; ne++) {
        const Ge = L[ne];
        if (et >= gt) {
          je(Ge, he, D, !0);
          continue;
        }
        let Pt;
        if (Ge.key != null)
          Pt = Re.get(Ge.key);
        else
          for (Ue = De; Ue <= Ce; Ue++)
            if (Xt[Ue - De] === 0 && za(Ge, V[Ue])) {
              Pt = Ue;
              break;
            }
        Pt === void 0 ? je(Ge, he, D, !0) : (Xt[Pt - De] = ne + 1, Pt >= oe ? oe = Pt : at = !0, O(
          Ge,
          V[Pt],
          te,
          null,
          he,
          D,
          Q,
          ee,
          fe
        ), et++);
      }
      const Nt = at ? pv(Xt) : da;
      for (Ue = Nt.length - 1, ne = gt - 1; ne >= 0; ne--) {
        const Ge = De + ne, Pt = V[Ge], E = V[Ge + 1], Se = Ge + 1 < Me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          E.el || Hp(E)
        ) : ye;
        Xt[ne] === 0 ? O(
          null,
          Pt,
          te,
          Se,
          he,
          D,
          Q,
          ee,
          fe
        ) : at && (Ue < 0 || ne !== Nt[Ue] ? U(Pt, te, Se, 2) : Ue--);
      }
    }
  }, U = (L, V, te, ye, he = null) => {
    const { el: D, type: Q, transition: ee, children: fe, shapeFlag: ne } = L;
    if (ne & 6) {
      U(L.component.subTree, V, te, ye);
      return;
    }
    if (ne & 128) {
      L.suspense.move(V, te, ye);
      return;
    }
    if (ne & 64) {
      Q.move(L, V, te, nn);
      return;
    }
    if (Q === ot) {
      r(D, V, te);
      for (let ge = 0; ge < fe.length; ge++)
        U(fe[ge], V, te, ye);
      r(L.anchor, V, te);
      return;
    }
    if (Q === ru) {
      $(L, V, te);
      return;
    }
    if (ye !== 2 && ne & 1 && ee)
      if (ye === 0)
        ee.beforeEnter(D), r(D, V, te), Dn(() => ee.enter(D), he);
      else {
        const { leave: ge, delayLeave: Ce, afterLeave: d } = ee, De = () => {
          L.ctx.isUnmounted ? a(D) : r(D, V, te);
        }, Re = () => {
          D._isLeaving && D[Ty](
            !0
            /* cancelled */
          ), ge(D, () => {
            De(), d && d();
          });
        };
        Ce ? Ce(D, De, Re) : Re();
      }
    else
      r(D, V, te);
  }, je = (L, V, te, ye = !1, he = !1) => {
    const {
      type: D,
      props: Q,
      ref: ee,
      children: fe,
      dynamicChildren: ne,
      shapeFlag: Me,
      patchFlag: ge,
      dirs: Ce,
      cacheIndex: d,
      memo: De
    } = L;
    if (ge === -2 && (he = !1), ee != null && (Br(), ro(ee, null, te, L, !0), Gr()), d != null && (V.renderCache[d] = void 0), Me & 256) {
      V.ctx.deactivate(L);
      return;
    }
    const Re = Me & 1 && Ce, Ue = !io(L);
    let et;
    if (Ue && (et = Q && Q.onVnodeBeforeUnmount) && sr(et, V, L), Me & 6)
      Ye(L.component, te, ye);
    else {
      if (Me & 128) {
        L.suspense.unmount(te, ye);
        return;
      }
      Re && hi(L, null, V, "beforeUnmount"), Me & 64 ? L.type.remove(
        L,
        V,
        te,
        nn,
        ye
      ) : ne && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ne.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (D !== ot || ge > 0 && ge & 64) ? Ve(
        ne,
        V,
        te,
        !1,
        !0
      ) : (D === ot && ge & 384 || !he && Me & 16) && Ve(fe, V, te), ye && mt(L);
    }
    const gt = De != null && d == null;
    (Ue && (et = Q && Q.onVnodeUnmounted) || Re || gt) && Dn(() => {
      et && sr(et, V, L), Re && hi(L, null, V, "unmounted"), gt && (L.el = null);
    }, te);
  }, mt = (L) => {
    const { type: V, el: te, anchor: ye, transition: he } = L;
    if (V === ot) {
      nt(te, ye);
      return;
    }
    if (V === ru) {
      I(L);
      return;
    }
    const D = () => {
      a(te), he && !he.persisted && he.afterLeave && he.afterLeave();
    };
    if (L.shapeFlag & 1 && he && !he.persisted) {
      const { leave: Q, delayLeave: ee } = he, fe = () => Q(te, D);
      ee ? ee(L.el, D, fe) : fe();
    } else
      D();
  }, nt = (L, V) => {
    let te;
    for (; L !== V; )
      te = S(L), a(L), L = te;
    a(V);
  }, Ye = (L, V, te) => {
    const { bum: ye, scope: he, job: D, subTree: Q, um: ee, m: fe, a: ne } = L;
    wd(fe), wd(ne), ye && bs(ye), he.stop(), D && (D.flags |= 8, je(Q, L, V, te)), ee && Dn(ee, V), Dn(() => {
      L.isUnmounted = !0;
    }, V);
  }, Ve = (L, V, te, ye = !1, he = !1, D = 0) => {
    for (let Q = D; Q < L.length; Q++)
      je(L[Q], V, te, ye, he);
  }, qt = (L) => {
    if (L.shapeFlag & 6)
      return qt(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const V = S(L.anchor || L.el), te = V && V[Ay];
    return te ? S(te) : V;
  };
  let An = !1;
  const Sn = (L, V, te) => {
    let ye;
    L == null ? V._vnode && (je(V._vnode, null, null, !0), ye = V._vnode.component) : O(
      V._vnode || null,
      L,
      V,
      null,
      null,
      null,
      te
    ), V._vnode = L, An || (An = !0, dd(ye), gp(), An = !1);
  }, nn = {
    p: O,
    um: je,
    m: U,
    r: mt,
    mt: de,
    mc: se,
    pc: xe,
    pbc: T,
    n: qt,
    o: e
  };
  return {
    render: Sn,
    hydrate: void 0,
    createApp: Jy(Sn)
  };
}
function nu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jp(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (Xe(r) && Xe(a))
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      let f = a[o];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[o] = $r(a[o]), f.el = c.el), !n && f.patchFlag !== -2 && jp(c, f)), f.type === ul && (f.patchFlag === -1 && (f = a[o] = $r(f)), f.el = c.el), f.type === ai && !f.el && (f.el = c.el);
    }
}
function pv(e) {
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
function Vp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Vp(t);
}
function wd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Hp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Hp(t.subTree) : null;
}
const Up = (e) => e.__isSuspense;
function mv(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : wy(e);
}
const ot = /* @__PURE__ */ Symbol.for("v-fgt"), ul = /* @__PURE__ */ Symbol.for("v-txt"), ai = /* @__PURE__ */ Symbol.for("v-cmt"), ru = /* @__PURE__ */ Symbol.for("v-stc"), oo = [];
let Vn = null;
function ke(e = !1) {
  oo.push(Vn = e ? null : []);
}
function gv() {
  oo.pop(), Vn = oo[oo.length - 1] || null;
}
let fo = 1;
function kd(e, t = !1) {
  fo += e, e < 0 && Vn && t && (Vn.hasOnce = !0);
}
function Bp(e) {
  return e.dynamicChildren = fo > 0 ? Vn || da : null, gv(), fo > 0 && Vn && Vn.push(e), e;
}
function Pe(e, t, n, r, a, o) {
  return Bp(
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
function Ii(e, t, n, r, a) {
  return Bp(
    $e(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Gp(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function za(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Kp = ({ key: e }) => e ?? null, vs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Vt(e) || /* @__PURE__ */ yn(e) || Ze(e) ? { i: jn, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, a = null, o = e === ot ? 0 : 1, c = !1, f = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kp(t),
    ref: t && vs(t),
    scopeId: yp,
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
    ctx: jn
  };
  return f ? (vc(h, n), o & 128 && e.normalize(h)) : n && (h.shapeFlag |= Vt(n) ? 8 : 16), fo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Vn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Vn.push(h), h;
}
const $e = bv;
function bv(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === Mp) && (e = ai), Gp(e)) {
    const f = xa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vc(f, n), fo > 0 && !o && Vn && (f.shapeFlag & 6 ? Vn[Vn.indexOf(e)] = f : Vn.push(f)), f.patchFlag = -2, f;
  }
  if (Cv(e) && (e = e.__vccOpts), t) {
    t = yv(t);
    let { class: f, style: h } = t;
    f && !Vt(f) && (t.class = ft(f)), yt(h) && (/* @__PURE__ */ dc(h) && !Xe(h) && (h = xn({}, h)), t.style = Bt(h));
  }
  const c = Vt(e) ? 1 : Up(e) ? 128 : Cy(e) ? 64 : yt(e) ? 4 : Ze(e) ? 2 : 0;
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
function yv(e) {
  return e ? /* @__PURE__ */ dc(e) || Op(e) ? xn({}, e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
  const { props: a, ref: o, patchFlag: c, children: f, transition: h } = e, g = t ? ri(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && Kp(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Xe(o) ? o.concat(vs(t)) : [o, vs(t)] : vs(t)
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
  return h && r && mc(
    v,
    h.clone(v)
  ), v;
}
function vv(e = " ", t = 0) {
  return $e(ul, null, e, t);
}
function zt(e = "", t = !1) {
  return t ? (ke(), Ii(ai, null, e)) : $e(ai, null, e);
}
function hr(e) {
  return e == null || typeof e == "boolean" ? $e(ai) : Xe(e) ? $e(
    ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gp(e) ? $r(e) : $e(ul, null, String(e));
}
function $r(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function vc(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), vc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Op(t) ? t._ctx = jn : a === 3 && jn && (jn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ze(t) ? (t = { default: t, _ctx: jn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [vv(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ri(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = ft([t.class, r.class]));
      else if (a === "style")
        t.style = Bt([t.style, r.style]);
      else if (Qs(a)) {
        const o = t[a], c = r[a];
        c && o !== c && !(Xe(o) && o.includes(c)) ? t[a] = o ? [].concat(o, c) : c : c == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !el(a) && (t[a] = c);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function sr(e, t, n, r = null) {
  Nr(e, t, 7, [
    n,
    r
  ]);
}
const _v = Cp();
let xv = 0;
function Sv(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || _v, o = {
    uid: xv++,
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
    scope: new Kb(
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
    propsOptions: Rp(r, a),
    emitsOptions: Tp(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: kt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: kt,
    data: kt,
    props: kt,
    attrs: kt,
    slots: kt,
    refs: kt,
    setupState: kt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Qy.bind(null, o), e.ce && e.ce(o), o;
}
let gn = null;
const wv = () => gn || jn;
let zs, Ou;
{
  const e = rl(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((c) => c(o)) : a[0](o);
    };
  };
  zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => gn = n
  ), Ou = t(
    "__VUE_SSR_SETTERS__",
    (n) => ho = n
  );
}
const So = (e) => {
  const t = gn;
  return zs(e), e.scope.on(), () => {
    e.scope.off(), zs(t);
  };
}, Nd = () => {
  gn && gn.scope.off(), zs(null);
};
function Wp(e) {
  return e.vnode.shapeFlag & 4;
}
let ho = !1;
function kv(e, t = !1, n = !1) {
  t && Ou(t);
  const { props: r, children: a } = e.vnode, o = Wp(e);
  av(e, r, o, t), uv(e, a, n || t);
  const c = o ? Nv(e, t) : void 0;
  return t && Ou(!1), c;
}
function Nv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, By);
  const { setup: r } = n;
  if (r) {
    Br();
    const a = e.setupContext = r.length > 1 ? Pv(e) : null, o = So(e), c = xo(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Kh(c);
    if (Gr(), o(), (f || e.sp) && !io(e) && Sp(e), f) {
      if (c.then(Nd, Nd), t)
        return c.then((h) => {
          Md(e, h);
        }).catch((h) => {
          al(h, e, 0);
        });
      e.asyncDep = c;
    } else
      Md(e, c);
  } else
    Yp(e);
}
function Md(e, t, n) {
  Ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : yt(t) && (e.setupState = hp(t)), Yp(e);
}
function Yp(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || wr);
  {
    const a = So(e);
    Br();
    try {
      Gy(e);
    } finally {
      Gr(), a();
    }
  }
}
const Mv = {
  get(e, t) {
    return mn(e, "get", ""), e[t];
  }
};
function Pv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hp(hy(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ao)
        return ao[n](e);
    },
    has(t, n) {
      return n in t || n in ao;
    }
  })) : e.proxy;
}
function Av(e, t = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Cv(e) {
  return Ze(e) && "__vccOpts" in e;
}
const wt = (e, t) => /* @__PURE__ */ yy(e, t, ho), Tv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fu;
const Pd = typeof window < "u" && window.trustedTypes;
if (Pd)
  try {
    Fu = /* @__PURE__ */ Pd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qp = Fu ? (e) => Fu.createHTML(e) : (e) => e, Iv = "http://www.w3.org/2000/svg", Ev = "http://www.w3.org/1998/Math/MathML", Fr = typeof document < "u" ? document : null, Ad = Fr && /* @__PURE__ */ Fr.createElement("template"), Dv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Fr.createElementNS(Iv, e) : t === "mathml" ? Fr.createElementNS(Ev, e) : n ? Fr.createElement(e, { is: n }) : Fr.createElement(e);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Fr.createTextNode(e),
  createComment: (e) => Fr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Fr.querySelector(e),
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
      Ad.innerHTML = qp(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Ad.content;
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
}, Ov = /* @__PURE__ */ Symbol("_vtc");
function Fv(e, t, n) {
  const r = e[Ov];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const $s = /* @__PURE__ */ Symbol("_vod"), Xp = /* @__PURE__ */ Symbol("_vsh"), wo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[$s] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $a(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), $a(e, !0), r.enter(e)) : r.leave(e, () => {
      $a(e, !1);
    }) : $a(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $a(e, t);
  }
};
function $a(e, t) {
  e.style.display = t ? e[$s] : "none", e[Xp] = !t;
}
const Rv = /* @__PURE__ */ Symbol(""), Lv = /(?:^|;)\s*display\s*:/;
function zv(e, t, n) {
  const r = e.style, a = Vt(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (Vt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && _s(r, f, "");
        }
      else
        for (const c in t)
          n[c] == null && _s(r, c, "");
    for (const c in n)
      c === "display" && (o = !0), _s(r, c, n[c]);
  } else if (a) {
    if (t !== n) {
      const c = r[Rv];
      c && (n += ";" + c), r.cssText = n, o = Lv.test(n);
    }
  } else t && e.removeAttribute("style");
  $s in e && (e[$s] = o ? r.display : "", e[Xp] && (r.display = "none"));
}
const Cd = /\s*!important$/;
function _s(e, t, n) {
  if (Xe(n))
    n.forEach((r) => _s(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = $v(e, t);
    Cd.test(n) ? e.setProperty(
      Ti(r),
      n.replace(Cd, ""),
      "important"
    ) : e[r] = n;
  }
}
const Td = ["Webkit", "Moz", "ms"], iu = {};
function $v(e, t) {
  const n = iu[t];
  if (n)
    return n;
  let r = Pn(t);
  if (r !== "filter" && r in e)
    return iu[t] = r;
  r = nl(r);
  for (let a = 0; a < Td.length; a++) {
    const o = Td[a] + r;
    if (o in e)
      return iu[t] = o;
  }
  return t;
}
const Id = "http://www.w3.org/1999/xlink";
function Ed(e, t, n, r, a, o = Bb(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Id, t.slice(6, t.length)) : e.setAttributeNS(Id, t, n) : n == null || o && !Xh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : kr(n) ? String(n) : n
  );
}
function Dd(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? qp(n) : n);
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
    f === "boolean" ? n = Xh(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(a || t);
}
function la(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function jv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Od = /* @__PURE__ */ Symbol("_vei");
function Vv(e, t, n, r, a = null) {
  const o = e[Od] || (e[Od] = {}), c = o[t];
  if (r && c)
    c.value = r;
  else {
    const [f, h] = Hv(t);
    if (r) {
      const g = o[t] = Gv(
        r,
        a
      );
      la(e, f, g, h);
    } else c && (jv(e, f, c, h), o[t] = void 0);
  }
}
const Fd = /(?:Once|Passive|Capture)$/;
function Hv(e) {
  let t;
  if (Fd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Fd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ti(e.slice(2)), t];
}
let au = 0;
const Uv = /* @__PURE__ */ Promise.resolve(), Bv = () => au || (Uv.then(() => au = 0), au = Date.now());
function Gv(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Nr(
      Kv(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Bv(), n;
}
function Kv(e, t) {
  if (Xe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return t;
}
const Rd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Wv = (e, t, n, r, a, o) => {
  const c = a === "svg";
  t === "class" ? Fv(e, r, c) : t === "style" ? zv(e, n, r) : Qs(t) ? el(t) || Vv(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yv(e, t, r, c)) ? (Dd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ed(e, t, r, c, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Vt(r))) ? Dd(e, Pn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ed(e, t, r, c));
};
function Yv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rd(t) && Ze(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Rd(t) && Vt(n) ? !1 : t in e;
}
function qv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Pn(t);
  return Array.isArray(n) ? n.some((a) => Pn(a) === r) : Object.keys(n).some((a) => Pn(a) === r);
}
const Ld = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (n) => bs(t, n) : t;
};
function Xv(e) {
  e.target.composing = !0;
}
function zd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ou = /* @__PURE__ */ Symbol("_assign");
function $d(e, t, n) {
  return t && (e = e.trim()), n && (e = ic(e)), e;
}
const jd = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[ou] = Ld(a);
    const o = r || a.props && a.props.type === "number";
    la(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ou]($d(e.value, n, o));
    }), (n || o) && la(e, "change", () => {
      e.value = $d(e.value, n, o);
    }), t || (la(e, "compositionstart", Xv), la(e, "compositionend", zd), la(e, "change", zd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: o } }, c) {
    if (e[ou] = Ld(c), e.composing) return;
    const f = (o || e.type === "number") && !/^0\d/.test(e.value) ? ic(e.value) : e.value, h = t ?? "";
    if (f === h)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === h) || (e.value = h);
  }
}, Jv = ["ctrl", "shift", "alt", "meta"], Zv = {
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
  exact: (e, t) => Jv.some((n) => e[`${n}Key`] && !t.includes(n))
}, Hn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((a, ...o) => {
    for (let c = 0; c < t.length; c++) {
      const f = Zv[t[c]];
      if (f && f(a, t)) return;
    }
    return e(a, ...o);
  }));
}, Qv = /* @__PURE__ */ xn({ patchProp: Wv }, Dv);
let Vd;
function e1() {
  return Vd || (Vd = fv(Qv));
}
const _c = ((...e) => {
  const t = e1().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = n1(r);
    if (!a) return;
    const o = t._component;
    !Ze(o) && !o.render && !o.template && (o.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const c = n(a, !1, t1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), c;
  }, t;
});
function t1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function n1(e) {
  return Vt(e) ? document.querySelector(e) : e;
}
const Ot = Math.PI / 180, Jp = Math.PI * 2, r1 = 2048;
function St(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function oi(e, t, n) {
  return { x: e, y: t, z: n };
}
function js(e, t) {
  return oi(e.x + t.x, e.y + t.y, e.z + t.z);
}
function fa(e, t) {
  return oi(e.x * t, e.y * t, e.z * t);
}
function xs(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Hd(e, t) {
  return oi(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function qa(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return oi(e.x / t, e.y / t, e.z / t);
}
function i1(e, t) {
  const n = Number(e || 0) * Ot, r = Number(t || 0) * Ot, a = Math.cos(r);
  return oi(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ss(e, t, n = 0) {
  const r = i1(e, t);
  let a = oi(0, 1, 0);
  Math.abs(xs(r, a)) > 0.999 && (a = oi(0, 0, 1));
  let o = qa(Hd(a, r)), c = qa(Hd(r, o));
  const f = Number(n || 0) * Ot, h = Math.cos(f), g = Math.sin(f), v = js(fa(o, h), fa(c, g)), x = js(fa(o, -g), fa(c, h));
  return o = qa(v), c = qa(x), { fwd: r, right: o, up: c };
}
function a1(e, t) {
  const n = (Number(e || 0) - 0.5) * Jp, r = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(r);
  return oi(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ud(e, t, n = 1) {
  const r = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Number(n || 1)), c = Math.max(512, r1), f = Math.min(1, c / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: o,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Bd(e, t, n) {
  const r = e.createShader(t);
  if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(r) || "shader compile failed";
    throw e.deleteShader(r), new Error(a);
  }
  return r;
}
function su(e, t, n) {
  const r = Bd(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Bd(e, e.FRAGMENT_SHADER, n);
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
const lu = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, o1 = `#version 300 es
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
}`, s1 = `#version 300 es
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
}`, l1 = `#version 300 es
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
function ja(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const r = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(St(r, 1, 179) * Ot * 0.5) * (n / Math.max(t, 1))) / Ot);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: St(r, 1, 179),
    vFovDeg: St(a, 0.1, 179)
  };
}
function u1(e) {
  const t = Ss(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(St(Number(e.hFovDeg), 0.1, 179) * 0.5 * Ot),
    tanY: Math.tan(St(Number(e.vFovDeg), 0.1, 179) * 0.5 * Ot),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: St(Number(e.opacity ?? 1), 0, 1)
  };
}
function c1(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, o = null, c = null, f = null, h = null, g = null, v = null, x = null, S = null, M = !1, b = Ud(1, 1, 1), O = null, j = null, z = null, P = null, $ = null;
  const I = /* @__PURE__ */ new Map();
  let R = {
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
  }, H = {
    paint: !1,
    mask: !1
  };
  function se(D = null, Q = null) {
    const ee = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, ee), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, D ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, Q ?? n.CLAMP_TO_EDGE), ee;
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
      }), n ? (r = su(n, lu, o1), a = su(n, lu, s1), o = su(n, lu, l1), O = {
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
      }, j = {
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
      ]), n.STATIC_DRAW), f = se(n.REPEAT, n.CLAMP_TO_EDGE), h = se(n.REPEAT, n.CLAMP_TO_EDGE), g = se(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function T() {
    var D;
    if (n) {
      try {
        c && n.deleteBuffer(c), f && n.deleteTexture(f), h && n.deleteTexture(h), g && n.deleteTexture(g), I.forEach((Q) => {
          Ne(Q);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), o && n.deleteProgram(o), (D = n.getExtension("WEBGL_lose_context")) == null || D.loseContext();
      } catch {
      }
      n = null, r = null, a = null, o = null, c = null, f = null, h = null, g = null, I.clear(), v = null, x = null, S = null, G = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, H = {
        paint: !1,
        mask: !1
      }, P = null, $ = null, M = !1;
    }
  }
  function q(D, Q, ee = 1) {
    b = Ud(D, Q, ee), (t.width !== b.width || t.height !== b.height) && (t.width = b.width, t.height = b.height);
  }
  function re(D) {
    D === "background" ? v = null : D === "paint" ? x = null : S = null, G[D] && (G[D].width = 0, G[D].height = 0);
  }
  function J() {
    H.paint = !1, H.mask = !1;
  }
  function de(D) {
    J(), D === "paint" ? H.paint = !0 : D === "mask" && (H.mask = !0);
  }
  function ce(D, Q, ee = [], fe = { width: 0, height: 0 }, ne = !1) {
    if (!n || !D || !Q) return !1;
    const Me = Number(Q.width || Q.videoWidth || Q.naturalWidth || 0), ge = Number(Q.height || Q.videoHeight || Q.naturalHeight || 0);
    if (!(Me > 1) || !(ge > 1)) return !1;
    const Ce = Array.isArray(ee) ? ee.filter((d) => d && d.w > 0 && d.h > 0) : [];
    if (!Ce.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ne ? 1 : 0), fe.width !== Me || fe.height !== ge)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), fe.width = Me, fe.height = ge, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), $ = P.getContext("2d")), !$)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const d of Ce) {
      const De = Math.max(0, Math.floor(Number(d.x || 0))), Re = Math.max(0, Math.floor(Number(d.y || 0))), Ue = Math.min(Me - De, Math.ceil(Number(d.w || 0))), et = Math.min(ge - Re, Math.ceil(Number(d.h || 0)));
      if (!(Ue <= 0 || et <= 0)) {
        if (P.width !== Ue || P.height !== et) {
          if (P.width = Ue, P.height = et, $ = P.getContext("2d"), !$)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          $.clearRect(0, 0, Ue, et);
        $.drawImage(Q, De, Re, Ue, et, 0, 0, Ue, et), n.texSubImage2D(n.TEXTURE_2D, 0, De, Re, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function we(D, Q, ee, fe, ne = null, Me = !1) {
    if (!ie()) return !1;
    if (!ee)
      return re(D), !1;
    const ge = String(fe ?? ""), Ce = D === "background" ? v : D === "paint" ? x : S, d = G[D], De = Number(ee.width || ee.videoWidth || ee.naturalWidth || 0), Re = Number(ee.height || ee.videoHeight || ee.naturalHeight || 0), Ue = d.width !== De || d.height !== Re;
    if (Ce === ge && !Ue && !(Array.isArray(ne) && ne.length)) return !0;
    if (!(De > 0) || !(Re > 0))
      return re(D), !1;
    if (n.bindTexture(n.TEXTURE_2D, Q), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Me ? 1 : 0), !(Array.isArray(ne) && ne.length ? ce(Q, ee, ne, d, Me) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ee), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), re(D), !1;
      d.width = De, d.height = Re;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), D === "background" ? v = ge : D === "paint" ? x = ge : S = ge, !0;
  }
  function A(D, Q) {
    return we("background", f, D, Q, null, !0);
  }
  function xe(D, Q, ee = null) {
    return we("paint", h, D, Q, ee, !0);
  }
  function Ae(D, Q, ee = null) {
    return we("mask", g, D, Q, ee, !0);
  }
  function Ne(D) {
    D != null && D.texture && n && n.deleteTexture(D.texture);
  }
  function U(D = /* @__PURE__ */ new Set()) {
    I.forEach((Q, ee) => {
      D.has(ee) || (Ne(Q), I.delete(ee));
    });
  }
  function je(D) {
    if (!n || !(D != null && D.assetId) || !(D != null && D.source)) return null;
    const Q = String(D.assetId), ee = String(D.revision ?? ""), fe = D.source, ne = Number(fe.width || fe.naturalWidth || fe.videoWidth || 0), Me = Number(fe.height || fe.naturalHeight || fe.videoHeight || 0);
    if (ne <= 0 || Me <= 0) return null;
    let ge = I.get(Q);
    if (ge || (ge = {
      texture: se(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, I.set(Q, ge)), ge.revision !== ee || ge.width !== ne || ge.height !== Me) {
      if (n.bindTexture(n.TEXTURE_2D, ge.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, fe), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ge.revision = ee, ge.width = ne, ge.height = Me;
    }
    return ge.texture;
  }
  function mt(D = []) {
    if (!ie()) return !1;
    const Q = /* @__PURE__ */ new Set();
    return D.forEach((ee) => {
      !(ee != null && ee.assetId) || !(ee != null && ee.source) || (Q.add(String(ee.assetId)), je(ee));
    }), U(Q), !0;
  }
  function nt() {
    return ie() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ye(D) {
    n.useProgram(D), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ve(D, Q = {}) {
    if (!v) return null;
    n.disable(n.BLEND), Ye(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(O.background, 0), n.uniform2f(O.viewport, Math.max(1, b.width), Math.max(1, b.height)), n.uniform1i(O.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ee = ja(D, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(O.yaw, Number(ee.yawDeg || 0) * Ot), n.uniform1f(O.pitch, Number(ee.pitchDeg || 0) * Ot), n.uniform1f(O.roll, Number(ee.rollDeg || 0) * Ot), n.uniform1f(O.hFov, St(Number(ee.hFovDeg || 90), 0.1, 179) * Ot), n.uniform1f(O.vFov, St(Number(ee.vFovDeg || 60), 0.1, 179) * Ot), n.uniform1f(O.opacity, St(Number(Q.backgroundOpacity ?? 1), 0, 1));
    const fe = Number((D == null ? void 0 : D.coverageDeg) || (Q == null ? void 0 : Q.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(O.coverage, fe), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function qt(D, Q = {}) {
    const ee = H.paint && x != null, fe = H.mask && S != null;
    if (!ee && !fe) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ye(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(j.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(j.mask, 1), n.uniform1i(j.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ne = ja(D, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(j.yaw, Number(ne.yawDeg || 0) * Ot), n.uniform1f(j.pitch, Number(ne.pitchDeg || 0) * Ot), n.uniform1f(j.roll, Number(ne.rollDeg || 0) * Ot), n.uniform1f(j.hFov, St(Number(ne.hFovDeg || 90), 0.1, 179) * Ot), n.uniform1f(j.vFov, St(Number(ne.vFovDeg || 60), 0.1, 179) * Ot), n.uniform1f(j.paintOpacity, St(Number(Q.paintOpacity ?? 1), 0, 1)), n.uniform1f(j.maskOpacity, St(Number(Q.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(j.hasPaint, ee ? 1 : 0), n.uniform1i(j.hasMask, fe ? 1 : 0), n.uniform1i(j.showMaskTint, Q.showMaskTint === !1 ? 0 : 1), n.uniform3f(j.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function An(D, Q) {
    var d, De, Re, Ue, et, gt, at;
    const ee = Array.isArray(D == null ? void 0 : D.objects) ? D.objects : [];
    if (!ee.length) {
      J(), U(/* @__PURE__ */ new Set());
      return;
    }
    const fe = (Q == null ? void 0 : Q.mode) === "unwrap" ? 0 : (Q == null ? void 0 : Q.mode) === "cutout" ? 2 : 1, ne = ja(Q, b.width, b.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Me = Ss(ne.yawDeg, ne.pitchDeg, ne.rollDeg), ge = ee.slice().sort((oe, Xt) => Number((oe == null ? void 0 : oe.zIndex) || 0) - Number((Xt == null ? void 0 : Xt.zIndex) || 0)), Ce = /* @__PURE__ */ new Set();
    J();
    for (const oe of ge)
      if (!(!oe || oe.visible === !1)) {
        if (oe.type === "sticker") {
          const Xt = String(((d = oe == null ? void 0 : oe.params) == null ? void 0 : d.assetId) || (oe == null ? void 0 : oe.id) || "");
          if (!Xt) continue;
          Ce.add(Xt);
          const Nt = je({
            assetId: Xt,
            source: oe.source,
            revision: oe.revision
          });
          if (!Nt) continue;
          const Ge = u1({
            yawDeg: ((De = oe == null ? void 0 : oe.transform) == null ? void 0 : De.yawDeg) || 0,
            pitchDeg: ((Re = oe == null ? void 0 : oe.transform) == null ? void 0 : Re.pitchDeg) || 0,
            rollDeg: ((Ue = oe == null ? void 0 : oe.transform) == null ? void 0 : Ue.rollDeg) || 0,
            hFovDeg: ((et = oe == null ? void 0 : oe.transform) == null ? void 0 : et.hFovDeg) || 30,
            vFovDeg: ((gt = oe == null ? void 0 : oe.transform) == null ? void 0 : gt.vFovDeg) || 30,
            crop: ((at = oe == null ? void 0 : oe.params) == null ? void 0 : at.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (oe == null ? void 0 : oe.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ye(o), n.uniform1i(z.texture, 0), n.uniform1i(z.mode, fe), n.uniform3f(z.viewRight, Me.right.x, Me.right.y, Me.right.z), n.uniform3f(z.viewUp, Me.up.x, Me.up.y, Me.up.z), n.uniform3f(z.viewFwd, Me.fwd.x, Me.fwd.y, Me.fwd.z), n.uniform1f(z.viewHfov, St(Number(ne.hFovDeg || 90), 0.1, 179) * Ot), n.uniform1f(z.viewVfov, St(Number(ne.vFovDeg || 60), 0.1, 179) * Ot), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Nt), n.uniform3f(z.stickerRight, Ge.right.x, Ge.right.y, Ge.right.z), n.uniform3f(z.stickerUp, Ge.up.x, Ge.up.y, Ge.up.z), n.uniform3f(z.stickerFwd, Ge.fwd.x, Ge.fwd.y, Ge.fwd.z), n.uniform1f(z.stickerTanX, Math.max(1e-6, Ge.tanX)), n.uniform1f(z.stickerTanY, Math.max(1e-6, Ge.tanY)), n.uniform4f(
            z.crop,
            St(Number(Ge.crop.x0 ?? 0), 0, 1),
            St(Number(Ge.crop.y0 ?? 0), 0, 1),
            St(Number(Ge.crop.x1 ?? 1), 0, 1),
            St(Number(Ge.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(z.opacity, Ge.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (oe.type === "paint" || oe.type === "raster") {
          if (!xe(oe.source, oe.revision ?? "")) continue;
          de("paint"), qt(Q, {
            paintOpacity: Number(oe.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (oe.type === "mask") {
          if (!Ae(oe.source, oe.revision ?? "")) continue;
          de("mask"), qt(Q, {
            paintOpacity: 0,
            maskOpacity: Number(oe.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    U(Ce), J();
  }
  function Sn(D) {
    return !nt() || !v ? null : (Ve({
      mode: "panorama",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      fovDeg: (D == null ? void 0 : D.fovDeg) || 100
    }, D), t);
  }
  function nn(D) {
    return !nt() || !v ? null : (Ve({ mode: "unwrap" }, D), t);
  }
  function un(D) {
    return !nt() || !v ? null : (Ve({
      mode: "cutout",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      rollDeg: (D == null ? void 0 : D.rollDeg) || 0,
      hFovDeg: (D == null ? void 0 : D.hFovDeg) || 90,
      vFovDeg: (D == null ? void 0 : D.vFovDeg) || 60
    }, D), t);
  }
  function L(D = {}) {
    if (!ie()) return !1;
    const Q = Object.prototype.hasOwnProperty.call(D, "backgroundSource"), ee = Object.prototype.hasOwnProperty.call(D, "paintSource"), fe = Object.prototype.hasOwnProperty.call(D, "maskSource"), ne = Object.prototype.hasOwnProperty.call(D, "textures"), Me = Object.prototype.hasOwnProperty.call(D, "scene");
    return Q && A(D.backgroundSource, D.backgroundRevision ?? ""), ee && xe(D.paintSource, D.paintRevision ?? ""), fe && Ae(D.maskSource, D.maskRevision ?? ""), ne && (mt(D.textures || []), R.textures = D.textures || []), Me && (R.scene = D.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "objectPass") && (R.objectPass = D.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "backgroundOpacity") && (R.backgroundOpacity = Number(D.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(D, "showMaskTint") && (R.showMaskTint = D.showMaskTint === !0), Object.prototype.hasOwnProperty.call(D, "coverageDeg") && (R.coverageDeg = Number(D.coverageDeg || 360) === 180 ? 180 : 360), !0;
  }
  function V(D = {}) {
    return !ie() || (q(D.width, D.height, D.dpr || 1), !nt()) || !L(D) ? null : (v && Ve(D.view, {
      ...D,
      backgroundOpacity: Number(D.backgroundOpacity ?? R.backgroundOpacity ?? 1),
      coverageDeg: Number(D.coverageDeg || R.coverageDeg || 360) === 180 ? 180 : 360
    }), An(
      R.objectPass || { objects: [] },
      D.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function te(D = {}) {
    return L(D);
  }
  function ye(D, Q, ee) {
    const fe = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || b.sourceWidth || b.width || 1)), ne = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || b.sourceHeight || b.height || 1)), Me = Number(Q), ge = Number(ee);
    if (!Number.isFinite(Me) || !Number.isFinite(ge)) return null;
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return { u: (Me / fe % 1 + 1) % 1, v: St(ge / ne, 0, 1) };
    const Ce = ja(D, fe, ne);
    if (!Ce) return null;
    const d = Ss(Ce.yawDeg, Ce.pitchDeg, Ce.rollDeg), De = (Me - fe * 0.5) / (fe * 0.5) * Math.tan(St(Ce.hFovDeg, 1, 179) * Ot * 0.5), Re = (ne * 0.5 - ge) / (ne * 0.5) * Math.tan(St(Ce.vFovDeg, 0.1, 179) * Ot * 0.5), Ue = qa(js(js(fa(d.right, De), fa(d.up, Re)), d.fwd));
    return {
      u: (Math.atan2(Ue.x, Ue.z) / Jp + 0.5 + 1) % 1,
      v: St(0.5 - Math.asin(St(Ue.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function he(D, Q, ee) {
    const fe = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || b.sourceWidth || b.width || 1)), ne = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || b.sourceHeight || b.height || 1));
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return {
        x: (Number(Q || 0) % 1 + 1) % 1 * fe,
        y: St(Number(ee || 0), 0, 1) * ne,
        visible: !0
      };
    const Me = ja(D, fe, ne);
    if (!Me)
      return { x: fe * 0.5, y: ne * 0.5, visible: !1 };
    const ge = Ss(Me.yawDeg, Me.pitchDeg, Me.rollDeg), Ce = a1(Q, ee), d = xs(Ce, ge.right), De = xs(Ce, ge.up), Re = xs(Ce, ge.fwd);
    if (Re <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ue = fe * 0.5 + d / Re * (fe * 0.5 / Math.tan(St(Me.hFovDeg, 1, 179) * Ot * 0.5)), et = ne * 0.5 - De / Re * (ne * 0.5 / Math.tan(St(Me.vFovDeg, 0.1, 179) * Ot * 0.5));
    return { x: Ue, y: et, visible: Ue >= 0 && Ue <= fe && et >= 0 && et <= ne };
  }
  return {
    init: ie,
    dispose: T,
    setViewport: q,
    setBackgroundErp: A,
    setPaintErp: xe,
    setMaskErp: Ae,
    renderPanorama: Sn,
    renderUnwrap: nn,
    renderCutout: un,
    renderScene: V,
    syncState: te,
    screenToErpUv: ye,
    erpUvToScreen: he,
    getCanvas() {
      return t;
    },
    isSupported() {
      return ie();
    },
    getViewport() {
      return { ...b };
    }
  };
}
function Gd(e, t = 1, n = 16384) {
  const r = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function f1() {
  const e = /* @__PURE__ */ new Map();
  function t(c) {
    return c != null ? String(c) : "default";
  }
  function n(c, f, h) {
    const g = t(c);
    let v = e.get(g) || null;
    if (!v) {
      const M = document.createElement("canvas"), b = M.getContext("2d");
      if (!b) return null;
      v = {
        id: g,
        canvas: M,
        ctx: b,
        width: 0,
        height: 0
      }, e.set(g, v);
    }
    const x = Gd(f), S = Gd(h);
    return v.width !== x && (v.canvas.width = x, v.width = x), v.height !== S && (v.canvas.height = S, v.height = S), v;
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
const d1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), h1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Zp(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function p1(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function m1(e = {}) {
  const t = h1.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Zp(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function g1(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!d1.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Zp(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: p1(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function b1(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((r) => g1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const o = Number((r == null ? void 0 : r.zIndex) || 0), c = Number((a == null ? void 0 : a.zIndex) || 0);
      return o - c;
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Sa(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: m1((e == null ? void 0 : e.background) || {}),
    objectPass: b1((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function y1(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function xc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), r = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? y1(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function v1(e, t, n = {}) {
  return e ? xc({
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
function _1(e, t, n = {}) {
  return e ? xc({
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
function x1(e, t, n = {}) {
  return e ? xc({
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
function Qp(e = {}) {
  const t = [], n = v1(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), r = _1(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), r && t.push(r), a.forEach((o, c) => {
    const f = x1(
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
function Sc(e, t) {
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
function em(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, r = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, o = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], c = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Sa({
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
      objects: Sc(a, o)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function Xa(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], r = Sc(t, n), a = Qp({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Sa({
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
function S1(e = {}) {
  var o, c, f, h, g, v, x, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const M = Sa(e), b = Array.isArray((o = M.objectPass) == null ? void 0 : o.objects) ? M.objectPass.objects : [], O = {
      stickers: b.filter(($) => $.type === "sticker").map(($) => {
        var I, R, G, H, se, ie, T, q, re, J, de, ce, we;
        return {
          id: $.id,
          assetId: String(((I = $ == null ? void 0 : $.params) == null ? void 0 : I.assetId) || ((R = $ == null ? void 0 : $.params) == null ? void 0 : R.asset_id) || ($ == null ? void 0 : $.id) || ""),
          yawDeg: Number(((G = $ == null ? void 0 : $.transform) == null ? void 0 : G.yawDeg) ?? ((H = $ == null ? void 0 : $.params) == null ? void 0 : H.yawDeg) ?? 0),
          pitchDeg: Number(((se = $ == null ? void 0 : $.transform) == null ? void 0 : se.pitchDeg) ?? ((ie = $ == null ? void 0 : $.params) == null ? void 0 : ie.pitchDeg) ?? 0),
          rollDeg: Number(((T = $ == null ? void 0 : $.transform) == null ? void 0 : T.rollDeg) ?? ((q = $ == null ? void 0 : $.params) == null ? void 0 : q.rollDeg) ?? 0),
          hFovDeg: Number(((re = $ == null ? void 0 : $.transform) == null ? void 0 : re.hFovDeg) ?? ((J = $ == null ? void 0 : $.params) == null ? void 0 : J.hFovDeg) ?? 30),
          vFovDeg: Number(((de = $ == null ? void 0 : $.transform) == null ? void 0 : de.vFovDeg) ?? ((ce = $ == null ? void 0 : $.params) == null ? void 0 : ce.vFovDeg) ?? 30),
          crop: ((we = $ == null ? void 0 : $.params) == null ? void 0 : we.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number(($ == null ? void 0 : $.opacity) ?? 1),
          visible: ($ == null ? void 0 : $.visible) !== !1,
          zIndex: Number(($ == null ? void 0 : $.zIndex) ?? 0)
        };
      }),
      selectedId: ((c = M.objectPass) == null ? void 0 : c.selectedId) ?? null,
      hoveredId: ((f = M.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, j = b.filter(($) => $.type === "sticker").map(($) => {
      var I, R;
      return {
        assetId: String(((I = $ == null ? void 0 : $.params) == null ? void 0 : I.assetId) || ((R = $ == null ? void 0 : $.params) == null ? void 0 : R.asset_id) || ($ == null ? void 0 : $.id) || ""),
        source: $.source || null,
        revision: String(($ == null ? void 0 : $.revision) || "")
      };
    }).filter(($) => $.assetId && $.source), z = b.find(($) => $.type === "paint") || null, P = b.find(($) => $.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((h = M.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((v = M.background) == null ? void 0 : v.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (z == null ? void 0 : z.source) || null,
      paintRevision: String((z == null ? void 0 : z.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: j,
      scene: O,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((x = M.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], r = e.layers || {}, a = Sa({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...Sc(t, n),
        ...Qp({
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
function w1(e) {
  let t = null;
  function n(o = {}) {
    const c = S1(o);
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
function ko(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (j) => c1(j), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => f1(), r = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (j) => w1(j), a = t(e), o = (e == null ? void 0 : e.targetCanvas) || null, c = n();
  let f = null;
  const h = r({
    syncState(j = {}) {
      if (typeof a.syncState == "function") {
        const z = { ...j }, P = a.syncState(z);
        return P && (f = z, P);
      }
      return f = { ...j }, !0;
    }
  });
  function g(j = {}) {
    return h.sync(j);
  }
  function v(j = {}, z = {}) {
    return f ? a.renderScene({
      ...f,
      view: j,
      width: z.width,
      height: z.height,
      dpr: z.dpr,
      backgroundOpacity: z.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: z.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function x(j, z, P = {}, $ = {}) {
    if (!z) return !1;
    const I = Math.min(1, Math.max(0.1, Number($.renderScale ?? 1))), R = v(P, {
      ...$,
      width: Math.max(1, Math.round(z.w * I)),
      height: Math.max(1, Math.round(z.h * I))
    });
    return R ? j ? (j.canvas && R === j.canvas || j.drawImage(R, z.x, z.y, z.w, z.h), !0) : !!o && R === o : !1;
  }
  function S(j, z = {}, P = {}) {
    const $ = Number(P.width || 0), I = Number(P.height || 0);
    if (!($ > 0) || !(I > 0)) return null;
    const R = c.ensureTarget(j, $, I);
    if (!R) return null;
    const G = v(z, {
      ...P,
      width: $,
      height: I
    });
    return G ? (R.ctx.clearRect(0, 0, R.canvas.width, R.canvas.height), R.ctx.drawImage(G, 0, 0, R.canvas.width, R.canvas.height), R.canvas) : null;
  }
  function M(j) {
    c.clearTarget(j);
  }
  function b() {
    var j;
    c.dispose(), (j = a.dispose) == null || j.call(a), f = null;
  }
  function O() {
    f = null, h.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: g,
    renderView: v,
    renderToContext: x,
    renderToTarget: S,
    clearTarget: M,
    snapshotState: h.snapshot,
    clearState: O,
    dispose: b
  };
}
function ua(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function k1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Kd(e, t = 8) {
  var v;
  const n = (v = e == null ? void 0 : e.getContext) == null ? void 0 : v.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
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
function wc(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Rr(e, t, n) {
  if (!e) return ua(t, n);
  const r = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== a) && (e.canvas.width = r, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function Et(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let uu = null, cu = null, Wd = null, Yd = null, Lt = null, Va = null, kn = null, ei = null;
function N1() {
  if (cu) return cu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), cu = n, n;
}
function fu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  uu = Rr(uu, n, r);
  const a = uu;
  Et(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Yd !== a.ctx && (Wd = a.ctx.createPattern(N1(), "repeat"), Yd = a.ctx), a.ctx.fillStyle = Wd, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function M1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function P1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function A1(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function C1(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Dt = /* @__PURE__ */ new Map(), kc = 128;
function T1(e, t, n, r, a, o) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), h = `${c}:${f.toFixed(2)}:${n}:${r}:${a}:${o.toFixed(3)}`;
  if (Dt.has(h)) {
    const P = Dt.get(h);
    return Dt.delete(h), Dt.set(h, P), P;
  }
  Dt.size >= kc && Dt.delete(Dt.keys().next().value);
  const g = c * 2 + 2, v = c + 1, x = wc(g, g), S = x.getContext("2d"), M = f * c, b = c + 1, O = `rgba(${n},${r},${a},${o})`, j = `rgba(${n},${r},${a},0)`, z = S.createRadialGradient(v, v, M, v, v, b);
  return z.addColorStop(0, O), z.addColorStop(1, j), S.fillStyle = z, S.fillRect(0, 0, g, g), Dt.set(h, x), x;
}
function I1(e, t, n, r, a, o, c) {
  const { r: f, g: h, b: g, a: v } = r, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, a), b = Math.max(0, Math.min(0.99, o)), O = Math.max(0, Math.min(1, c ?? 0)), j = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${h}:${g}:${v.toFixed(3)}:${M.toFixed(2)}:${b.toFixed(2)}:${O.toFixed(2)}`;
  if (Dt.has(j)) {
    const se = Dt.get(j);
    return Dt.delete(j), Dt.set(j, se), se;
  }
  Dt.size >= kc && Dt.delete(Dt.keys().next().value);
  const z = wc(x, S), P = z.getContext("2d"), $ = P.createImageData(x, S), I = $.data, R = Math.max(0, e - t), G = Math.max(0, Math.min(1, n)), H = 1 + M;
  for (let se = 0; se < S; se++)
    for (let ie = 0; ie < x; ie++) {
      const T = ie + 0.5 - e, q = se + 0.5 - t, re = Math.max(Math.abs(T) - R, 0), de = Math.hypot(re, q) / t;
      if (de >= 1) continue;
      const ce = de <= G ? 1 : Math.max(0, (1 - de) / Math.max(1e-4, 1 - G)), we = 1 - de, A = 1 + M * (1 - we) * (1 - we), xe = 1 - b * we * we, Ae = A * xe / H;
      let Ne = 1;
      if (O > 0) {
        const mt = Math.floor((q + t) / 1.5), nt = Math.floor((T + e) / 8), Ye = ki(ga(mt * 41 + 500, nt * 19 + 300));
        Ne = 1 - O * 0.42 * Ye;
      }
      const U = Math.round(255 * Math.min(1, v * ce * Ae * Ne));
      if (U <= 0) continue;
      const je = (se * x + ie) * 4;
      I[je] = f, I[je + 1] = h, I[je + 2] = g, I[je + 3] = U;
    }
  return P.putImageData($, 0, 0), Dt.set(j, z), z;
}
function ga(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function ki(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function E1(e, t, n, r, a, o, c) {
  const f = e + 0.5 - n, h = t + 0.5 - r, g = Math.max(0, n - r), v = Math.max(Math.abs(f) - g, 0), x = Math.hypot(v, h) / r;
  if (x >= 1) return 0;
  const S = ki(ga(e * 17 + 3, t * 13 + 7)), M = x + o * 0.22 * (S - 0.5);
  if (M >= 1) return 0;
  const b = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), O = D1(e, t, f, h, n, r), j = o * 0.55;
  if (O < j) return 0;
  const P = 0.45 + 0.55 * ((O - j) / Math.max(1e-4, 1 - j));
  return Math.round(255 * Math.min(1, c * b * P));
}
function D1(e, t, n, r, a, o) {
  const c = Math.floor((n + a) / 3), f = Math.floor((r + o) / 2), h = ki(ga(c * 13 + 700, f * 17 + 400)), g = Math.floor((n + a) / 1.5), v = Math.floor((r + o) / 1.5), x = ki(ga(g * 23 + 800, v * 29 + 500)), S = ki(ga(e * 3 + 100, t * 5 + 200));
  return h * 0.55 + x * 0.3 + S * 0.15;
}
function O1(e, t, n, r, a) {
  const { r: o, g: c, b: f, a: h } = r, g = Math.max(2, Math.ceil(e) * 2), v = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), S = `crayon:${g}:${v}:${n.toFixed(2)}:${o}:${c}:${f}:${h.toFixed(3)}:${x.toFixed(2)}`;
  if (Dt.has(S)) {
    const P = Dt.get(S);
    return Dt.delete(S), Dt.set(S, P), P;
  }
  Dt.size >= kc && Dt.delete(Dt.keys().next().value);
  const M = wc(g, v), b = M.getContext("2d"), O = b.createImageData(g, v), j = O.data, z = Math.max(0, Math.min(1, n));
  for (let P = 0; P < v; P++)
    for (let $ = 0; $ < g; $++) {
      const I = E1($, P, e, t, z, x, h);
      if (I <= 0) continue;
      const R = (P * g + $) * 4;
      j[R] = o, j[R + 1] = c, j[R + 2] = f, j[R + 3] = I;
    }
  return b.putImageData(O, 0, 0), Dt.set(S, M), M;
}
function tm(e, t, n) {
  var O, j;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), a = A1(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = F1(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), h = Number(((O = t == null ? void 0 : t.angle) == null ? void 0 : O.value) ?? 0), g = C1(t, a), v = String(((j = t == null ? void 0 : t.targetSpace) == null ? void 0 : j.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && v !== "unwrap", S = t == null ? void 0 : t.scatter, M = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let b;
  if (r === "chisel") {
    const z = a * f, P = a, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), I = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    b = I1(z, P, o, c, $, I, R);
  } else if (r === "crayon") {
    const z = a * f, P = a, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    b = O1(z, P, o, c, $);
  } else
    b = T1(a, o, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: b, radiusPx: a, spacingPx: g, desc: n, aspect: f, angle: h, stampKind: r, scatter: M, latitudeCorrection: x };
}
function F1(e) {
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
function R1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function qd(e, t, n, r, a) {
  const o = e.angle, c = e.desc.width;
  function f(g, v) {
    o === 0 ? e.ctx.drawImage(e.stampTex, g - a, v - r, a * 2, r * 2) : (e.ctx.save(), e.ctx.translate(g, v), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -a, -r, a * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const h = o === 0 ? a : a * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - h < 0 && f(t + c, n), t + h > c && f(t - c, n);
}
function Nc(e, t, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: g, count: v } = e.scatter, x = g * e.radiusPx * a, S = ga(t, n);
    for (let M = 0; M < v; M++) {
      const b = ki(S + M * 2) * Math.PI * 2, O = Math.sqrt(ki(S + M * 2 + 1)) * x, j = t + Math.cos(b) * O, z = n + Math.sin(b) * O, P = Math.max(0.5, e.radiusPx * a * 0.48), $ = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, I = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, R = P * e.aspect * I;
      qd(e, j, z, P, R);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * a), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, h = o * e.aspect * f;
  qd(e, t, n, o, h);
}
function Xd(e, t, n) {
  const r = P1(t);
  if (!e || r.length === 0) return;
  const a = n.width, o = n.height, c = tm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let M = Number(r[S].u || 0) * a;
    const b = Number(r[S].v || 0) * o;
    S > 0 && Math.abs(M - f[S - 1].x) > a * 0.5 && (M += M < f[S - 1].x ? a : -a), f.push({ x: M, y: b });
  }
  if (Nc(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let h = f[0], g = f[0], v = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const M = f[S], b = { x: (g.x + M.x) * 0.5, y: (g.y + M.y) * 0.5 };
    S === 1 ? x = po(c, v.x, v.y, b.x, b.y, x) : x = Vs(c, h, v, b, M, x), h = g, g = M, v = b;
  }
  f.length === 2 ? po(c, v.x, v.y, g.x, g.y, x) : Vs(c, h, v, g, g, x), e.restore();
}
function ws(e, t, n) {
  var x;
  const r = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const a = n.width, o = n.height, c = R1(t), f = [];
  let h = 1 / 0, g = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const M = M1(r[S]);
    let b = Number(M.x || 0) * a;
    S > 0 && Math.abs(b - f[S - 1].x) > a * 0.5 && (b += b < f[S - 1].x ? a : -a), f.push({ x: b, y: Number(M.y || 0) * o }), b < h && (h = b), b > g && (g = b);
  }
  function v(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + S, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, v(0), h < 0 && v(a), g > a && v(-a), e.restore();
}
function Zo(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    ws(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Xd(e, t, n) : (Va = Rr(Va, n.width, n.height), Et(Va), Xd(Va.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Va.canvas, 0, 0), e.restore());
}
function mi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function po(e, t, n, r, a, o) {
  const c = r - t, f = a - n, h = Math.hypot(c, f);
  if (h < 1e-9) return o;
  let g = e.spacingPx - o;
  for (; g <= h; ) {
    const v = g / h;
    Nc(e, t + c * v, n + f * v, 1), g += e.spacingPx;
  }
  return h - g + e.spacingPx;
}
function Vs(e, t, n, r, a, o) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, h = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, g = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, v = 0, x = f, S = x + h, M = S + g, b = S - x, O = 16;
  let j = o, z = n.x, P = n.y;
  for (let $ = 1; $ <= O; $++) {
    const I = x + b * $ / O, R = ((x - I) * t.x + (I - v) * n.x) / (x - v), G = ((x - I) * t.y + (I - v) * n.y) / (x - v), H = ((S - I) * n.x + (I - x) * r.x) / (S - x), se = ((S - I) * n.y + (I - x) * r.y) / (S - x), ie = ((M - I) * r.x + (I - S) * a.x) / (M - S), T = ((M - I) * r.y + (I - S) * a.y) / (M - S), q = ((S - I) * R + (I - v) * H) / (S - v), re = ((S - I) * G + (I - v) * se) / (S - v), J = ((M - I) * H + (I - x) * ie) / (M - x), de = ((M - I) * se + (I - x) * T) / (M - x), ce = ((S - I) * q + (I - x) * J) / (S - x), we = ((S - I) * re + (I - x) * de) / (S - x);
    j = po(e, z, P, ce, we, j), z = ce, P = we;
  }
  return j;
}
function L1(e, t, n, r) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const o = e.descriptor, c = o.width, f = n * o.height, h = e.activeStroke;
  let g = t * c;
  if (h && Math.abs(g - h.prev.x) > c * 0.5 && (g += g < h.prev.x ? c : -c), !h) {
    const M = tm(a, r, o), b = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), O = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), j = String((r == null ? void 0 : r.toolKind) || "") === "eraser", z = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Nc(M, g, f, 1), e.activeStroke = {
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
      isEraser: j,
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const v = (h.prev.x + g) * 0.5, x = (h.prev.y + f) * 0.5;
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
  h.pointCount === 1 ? h.distSinceStamp = po(S, h.lastMidX, h.lastMidY, v, x, h.distSinceStamp) : h.distSinceStamp = Vs(
    S,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: v, y: x },
    { x: g, y: f },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: g, y: f }, h.lastMidX = v, h.lastMidY = x, h.pointCount++, e.displayDirty = !0;
}
function Ru(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), o = ua(t, n), c = {
    descriptor: r,
    committedMask: ua(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: ua(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = ua(t, n);
  let g = null, v = "", x = null;
  function S(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: ua(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(T) {
    let q = a.get(T);
    return q || (q = S(T), a.set(T, q)), q;
  }
  function b(T) {
    return v === "mask" ? c : g ? M(g) : f;
  }
  function O(T) {
    var we;
    const q = !x || x.length !== T.length || T.some((A, xe) => A !== x[xe]), re = v === "paint" && ((we = g ? a.get(g) : f) == null ? void 0 : we.activeStroke) || null;
    let J = c.displayDirty || f.displayDirty || q;
    for (const A of T) {
      const xe = a.get(A);
      if (xe != null && xe.displayDirty) {
        J = !0;
        break;
      }
    }
    if (re && (J = !0), !J) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const A of T) {
      const xe = a.get(A);
      xe && (xe.displayDirty = !1);
    }
    x = [...T];
    const de = h.ctx;
    Et(h);
    const ce = !!(re != null && re.isEraser);
    for (const A of T) {
      const xe = a.get(A);
      if (!xe) continue;
      const Ne = g === xe.actionGroupId && v === "paint" ? xe.activeStroke : null;
      if (ce)
        Lt = Rr(Lt, t, n), Et(Lt), Lt.ctx.drawImage(xe.committedPaint.canvas, 0, 0), mi(Lt.ctx, o.canvas), de.drawImage(Lt.canvas, 0, 0);
      else if (de.drawImage(xe.committedPaint.canvas, 0, 0), Ne) {
        const U = xe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ne.strokeOpacity ?? 1));
        de.save(), de.globalAlpha = U, de.drawImage(o.canvas, 0, 0), de.restore();
      }
    }
  }
  function j(T) {
    var re, J, de, ce, we;
    for (const A of a.values())
      Et(A.committedPaint), Et(A.currentStroke), A.activeStroke = null, A.displayDirty = !0;
    Et(c.committedMask), Et(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, x = null;
    const q = [
      ...Array.isArray((J = (re = T == null ? void 0 : T.painting) == null ? void 0 : re.paint) == null ? void 0 : J.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((ce = (de = T == null ? void 0 : T.painting) == null ? void 0 : de.mask) == null ? void 0 : ce.strokes) ? T.painting.mask.strokes : []
    ];
    for (const A of q) {
      if (((we = A == null ? void 0 : A.targetSpace) == null ? void 0 : we.kind) !== "ERP_GLOBAL") continue;
      const xe = String((A == null ? void 0 : A.layerKind) || "paint"), Ne = String((A == null ? void 0 : A.toolKind) || "pen") === "eraser";
      if (xe === "mask") {
        const U = c.descriptor;
        Ne ? (Lt = Rr(Lt, U.width, U.height), Et(Lt), Zo(Lt.ctx, A, U), mi(c.committedMask.ctx, Lt.canvas)) : Zo(c.committedMask.ctx, A, U);
        continue;
      }
      if (Ne) {
        Lt = Rr(Lt, r.width, r.height), Et(Lt), Zo(Lt.ctx, A, r);
        for (const U of a.values())
          mi(U.committedPaint.ctx, Lt.canvas), U.displayDirty = !0;
      } else {
        const U = String((A == null ? void 0 : A.actionGroupId) || "__default__"), je = M(U), mt = je.descriptor;
        Zo(je.committedPaint.ctx, A, mt), je.displayDirty = !0;
      }
    }
    O([...a.keys()]);
  }
  function z(T, q) {
    v = String((T == null ? void 0 : T.layerKind) || "");
    const re = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (v === "mask")
      g = null, Et(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const J = re ? f : M(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      g = re ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Et(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    }
  }
  function P(T, q) {
    var xe;
    const re = String((T == null ? void 0 : T.layerKind) || "paint"), J = String((T == null ? void 0 : T.toolKind) || "") === "eraser", de = re === "mask" ? c : J ? f : M(String((T == null ? void 0 : T.actionGroupId) || g || "__default__")), ce = de.activeStroke, we = de.descriptor;
    if (ce && ce.pointCount > 1) {
      const Ae = de.currentStroke.ctx;
      Ae.globalCompositeOperation = "source-over";
      const Ne = {
        ctx: Ae,
        stampTex: ce.stampTex,
        radiusPx: ce.radiusPx,
        spacingPx: ce.spacingPx,
        desc: we,
        aspect: ce.aspect,
        angle: ce.angle,
        stampKind: ce.stampKind,
        scatter: ce.scatter,
        latitudeCorrection: ce.latitudeCorrection
      };
      ce.pointCount === 2 ? po(Ne, ce.lastMidX, ce.lastMidY, ce.prev.x, ce.prev.y, ce.distSinceStamp) : Vs(Ne, ce.pprev, { x: ce.lastMidX, y: ce.lastMidY }, ce.prev, ce.prev, ce.distSinceStamp);
    }
    de.lassoPreviewActive && (Et(de.currentStroke), ws(de.currentStroke.ctx, T, we), de.lassoPreviewActive = !1);
    const A = re === "mask" ? c.committedMask : de.committedPaint;
    if (J && re === "paint")
      for (const Ae of a.values())
        mi(Ae.committedPaint.ctx, de.currentStroke.canvas), Ae.displayDirty = !0;
    else if (J)
      mi(A.ctx, de.currentStroke.canvas);
    else {
      const Ae = Math.max(0, Math.min(1, (ce == null ? void 0 : ce.strokeOpacity) ?? 1));
      A.ctx.save(), A.ctx.globalAlpha = Ae, A.ctx.drawImage(de.currentStroke.canvas, 0, 0), A.ctx.restore();
    }
    k1() && (String((T == null ? void 0 : T.toolKind) || ""), String((we == null ? void 0 : we.kind) || ""), Number((we == null ? void 0 : we.width) || 0), Number((we == null ? void 0 : we.height) || 0), String(((xe = T == null ? void 0 : T.targetSpace) == null ? void 0 : xe.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Kd(de.currentStroke.canvas), Kd(A.canvas), void 0), Et(de.currentStroke), de.activeStroke = null, de.displayDirty = !0, g = null, v = "", O([...a.keys()]);
  }
  function $(T) {
    if (v === "mask")
      Et(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (v === "paint" && !g)
      Et(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (g) {
      const q = a.get(g);
      q && (Et(q.currentStroke), q.activeStroke = null, q.lassoPreviewActive = !1, q.displayDirty = !0);
    }
    g = null, v = "", O([...a.keys()]);
  }
  function I(T, q) {
    var J;
    if (v = String((T == null ? void 0 : T.layerKind) || ""), String(((J = T == null ? void 0 : T.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        Et(c.currentStroke), ws(c.currentStroke.ctx, T, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const de = String((T == null ? void 0 : T.toolKind) || "") === "eraser", ce = de ? f : M(String((T == null ? void 0 : T.actionGroupId) || g || "__default__"));
        g = de ? "" : String((T == null ? void 0 : T.actionGroupId) || g || "__default__"), Et(ce.currentStroke), ws(ce.currentStroke.ctx, T, ce.descriptor), ce.lassoPreviewActive = !0, ce.displayDirty = !0;
      }
      O([...a.keys()]);
    }
  }
  function R(T) {
    return O(T ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function G(T) {
    return a.get(String(T)) ?? null;
  }
  function H() {
    return [...a.keys()];
  }
  function se(T) {
    var we;
    const q = a.get(String(T));
    if (!q) return null;
    const re = v === "paint" && g === q.actionGroupId, J = v === "paint" && ((we = g ? a.get(g) : f) == null ? void 0 : we.activeStroke) || null;
    if (J != null && J.isEraser)
      return kn = Rr(kn, t, n), Et(kn), kn.ctx.drawImage(q.committedPaint.canvas, 0, 0), mi(kn.ctx, o.canvas), kn.canvas;
    const de = re ? q.activeStroke : null;
    if (!de) return q.committedPaint.canvas;
    kn = Rr(kn, t, n), Et(kn), kn.ctx.drawImage(q.committedPaint.canvas, 0, 0);
    const ce = q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, de.strokeOpacity ?? 1));
    return kn.ctx.save(), kn.ctx.globalAlpha = ce, kn.ctx.drawImage(o.canvas, 0, 0), kn.ctx.restore(), kn.canvas;
  }
  function ie() {
    return ei = Rr(ei, t, n), Et(ei), fu(ei.ctx, c.committedMask.canvas), v === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Lt = Rr(Lt, t, n), Et(Lt), Lt.ctx.drawImage(c.committedMask.canvas, 0, 0), mi(Lt.ctx, o.canvas), Et(ei), fu(ei.ctx, Lt.canvas)) : fu(ei.ctx, o.canvas)), ei.canvas;
  }
  return {
    rebuildCommitted: j,
    beginStroke: z,
    appendStrokePoint: L1,
    updateActiveStroke: I,
    commitActiveStroke: P,
    cancelActiveStroke: $,
    getErpTarget: R,
    ensureTarget: b,
    getGroupTarget: G,
    getGroupDisplayCanvas: se,
    getMaskDisplayCanvas: ie,
    getAllGroupIds: H
  };
}
function W(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function du(e, t, n) {
  const r = Number(e);
  return Number.isFinite(r) ? Math.max(Number(t), Math.min(Number(n), r)) : Number(t);
}
function Ut(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function z1(e, t) {
  let n = Ut(t) - Ut(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Lu = 3;
function Ha(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Mc(e, t = 0) {
  const n = Ha(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ha(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const a = Ha(e == null ? void 0 : e.wheelDelta);
  if (a != null) return Math.sign(-a);
  const o = Ha(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Ha(t) || 0);
}
function nm(e) {
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
const Jd = Math.PI / 180, Zd = 0.12, $1 = Lu, j1 = 35, V1 = 140, Ja = 100, H1 = 20, Qd = 0.8;
function U1(e, t, n) {
  const r = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), o = W(Number(e || Ja), 1, 179) * Jd;
  return 2 * Math.atan(Math.tan(o * 0.5) * (a / r)) / Jd;
}
function Pc(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ja })), n = typeof e.setView == "function" ? e.setView : (() => {
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
  function v(P, $, I = null, R = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(P || 0), h.drag.lastY = Number($ || 0), h.drag.lastTs = Number(R || performance.now()), h.drag.pointerId = I, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], g("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: I }), !0;
  }
  function x(P, $, I = "pano", R = performance.now()) {
    if (!h.drag.active) return !1;
    const G = Number(R || performance.now()), H = Number(P), se = Number($), ie = H - h.drag.lastX, T = se - h.drag.lastY;
    h.drag.lastX = H, h.drag.lastY = se, h.drag.lastTs = G;
    const q = r() || { x: 1, y: 1 }, re = Number(q.x || 1), J = Number(q.y || 1), de = { ...t() };
    let ce = 0, we = 0;
    if (I === "unwrap") {
      const xe = a() || { w: 1, h: 1 }, Ae = Math.max(1, Number(xe.w || 1)), Ne = Math.max(1, Number(xe.h || 1)), U = ie / Ae, je = T / Ne;
      ce = -U * 360 * re, we = je * 180 * J;
    } else {
      const xe = o() || { w: 0, h: 0 }, Ae = Math.max(1, Number(xe.w || 0)), Ne = Math.max(1, Number(xe.h || 0));
      if (Ae > 1 && Ne > 1) {
        const U = W(Number(de.fov || Ja), 1, 179), je = W(U1(U, Ae, Ne), 0.1, 179);
        ce = -(ie / Ae) * U * re, we = T / Ne * je * J;
      } else
        ce = -ie * Zd * re, we = T * Zd * J;
    }
    de.yaw = Ut(Number(de.yaw || 0) + ce), de.pitch = W(Number(de.pitch || 0) + we, -89.9, 89.9), n(de), h.velHistory.push({ ts: G, yaw: de.yaw, pitch: de.pitch });
    let A = 0;
    for (; A < h.velHistory.length - 1 && h.velHistory[A].ts < G - 100; ) A++;
    return A > 0 && h.velHistory.splice(0, A), h.inertia.active = !1, h.inertia.lastTs = G, c(), g("drag", { phase: "move", dx: ie, dy: T, dYaw: ce, dPitch: we }), !0;
  }
  function S(P = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const $ = Number(P || performance.now());
    h.drag.lastTs = $;
    const I = h.velHistory.filter((G) => $ - G.ts <= 80);
    if (I.length >= 2) {
      const G = I[0], H = I.at(-1), se = Math.max(1e-3, (H.ts - G.ts) / 1e3);
      let ie = H.yaw - G.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), h.inertia.vx = ie / se, h.inertia.vy = (H.pitch - G.pitch) / se;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const R = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = R > H1, h.inertia.lastTs = $, g("drag", { phase: "end", speed: R, inertiaActive: h.inertia.active }), !0;
  }
  function M(P = performance.now()) {
    if (!h.inertia.active) return !1;
    const $ = Number(P || performance.now()), I = Math.max(1e-3, ($ - (h.inertia.lastTs || $)) / 1e3);
    h.inertia.lastTs = $;
    const R = { ...t() };
    R.yaw = Ut(Number(R.yaw || 0) + h.inertia.vx * I), R.pitch = W(Number(R.pitch || 0) + h.inertia.vy * I, -89.9, 89.9);
    const G = Math.exp(-5.5 * I);
    return h.inertia.vx *= G, h.inertia.vy *= G, Math.abs(h.inertia.vx) < Qd && Math.abs(h.inertia.vy) < Qd && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(R), c(), h.inertia.active;
  }
  function b() {
    const P = h.drag.active || h.inertia.active || h.inertia.vx !== 0 || h.inertia.vy !== 0;
    return h.drag.active = !1, h.drag.pointerId = null, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.velHistory = [], P;
  }
  function O(P) {
    const $ = Math.sign(Number(P || 0));
    if (!$) return !1;
    const I = { ...t() }, R = Number(I.fov || Ja);
    return I.fov = W(R + $ * $1, j1, V1), n(I), c(), g("wheel", { deltaSign: $, fovBefore: R, fovAfter: I.fov }), !0;
  }
  function j(P, $ = 0) {
    return O(Mc(P, $));
  }
  function z() {
    n({ yaw: 0, pitch: 0, fov: Ja }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, c();
  }
  return {
    state: h,
    startDrag: v,
    moveDrag: x,
    endDrag: S,
    stepInertia: M,
    stopMotion: b,
    applyWheel: O,
    applyWheelEvent: j,
    resetView: z
  };
}
function Hs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const eh = Math.PI / 180;
function Ua(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function B1(e) {
  const t = e || {}, n = Ua(t.yaw_deg, 0), r = Ua(t.pitch_deg, 0), a = Ua(t.roll_deg ?? t.rot_deg, 0), o = du(Ua(t.hFOV_deg, 90), 1, 179), c = du(Ua(t.vFOV_deg, 60), 1, 179), f = Math.tan(o * eh * 0.5) / Math.max(1e-6, Math.tan(c * eh * 0.5)), h = du(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: o,
    vfov: c,
    aspect: h
  };
}
const rm = 0.28;
function G1(e) {
  const t = e && typeof e == "object" ? e : {}, n = W(Number(t.x0 ?? 0), 0, 1), r = W(Number(t.y0 ?? 0), 0, 1), a = W(Number(t.x1 ?? 1), 0, 1), o = W(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, o),
    x1: Math.max(n, a),
    y1: Math.max(r, o)
  };
}
function K1(e, t = {}) {
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
    crop: G1(e.crop),
    opacity: f ? rm : W(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: r
  };
}
function fl(e, t = {}) {
  var o;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.includeHidden === !0;
  return {
    stickers: n.map((c) => K1(c, { includeHidden: r })).filter((c) => c && (r || c.visible !== !1)).sort((c, f) => Number(c.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((o = e == null ? void 0 : e.active) == null ? void 0 : o.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function im(e, t, n = {}) {
  if (typeof t != "function") return [];
  const r = n.scene || fl(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, o = [], c = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var b;
    const h = String((f == null ? void 0 : f.assetId) || "").trim(), g = h || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!g || c.has(g)) return;
    const v = h ? a[h] : null, x = t(g, v, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const S = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), M = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || S <= 0 || M <= 0 || (c.add(g), o.push({
      assetId: g,
      source: x,
      revision: String(((b = n.revisionFor) == null ? void 0 : b.call(n, g, v, x)) ?? [
        g,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), o;
}
function mo(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: W(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function W1(e, t = 360) {
  return mo(e, t);
}
function vr(e) {
  const t = B1(e || {});
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
const _n = Math.PI / 180, Wr = 180 / Math.PI;
function Yr(e, t, n) {
  return { x: e, y: t, z: n };
}
function si(e, t) {
  return Yr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function _r(e, t) {
  return Yr(e.x * t, e.y * t, e.z * t);
}
function Ni(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Us(e, t) {
  return Yr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Hr(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Yr(e.x / t, e.y / t, e.z / t);
}
function am(e, t) {
  const n = e * _n, r = t * _n, a = Math.cos(r);
  return Yr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function No(e, t, n = 0) {
  const r = am(e, t), a = Yr(0, 1, 0);
  let o = Us(a, r);
  Math.hypot(o.x, o.y, o.z) < 1e-6 && (o = Yr(1, 0, 0)), o = Hr(o);
  const c = Hr(Us(r, o)), f = n * _n, h = Math.cos(f), g = Math.sin(f), v = si(_r(o, h), _r(c, g)), x = si(_r(o, -g), _r(c, h));
  return { fwd: r, right: Hr(v), up: Hr(x) };
}
const Mr = 1, Pr = 179, zu = 85;
function dl(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function om(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function sm(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * Wr;
  return n && (r = Math.round(r / 15) * 15), dl(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Na(e = {}) {
  const t = W(Qe(e.hFOV_deg, 90), Mr, Pr), n = W(Qe(e.vFOV_deg, 60), Mr, Pr), r = Math.tan(t * _n * 0.5), a = Math.tan(n * _n * 0.5);
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
function Mi(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Na(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    r / (2 * a.tanHalfY)
  ));
}
function Ac(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, Qe(t, 1)), o = Math.min(n, r * a);
  return { width: o, height: o / a };
}
function Cc(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = W(2 * Math.atan(r / (2 * n)) * Wr, Mr, Pr), c = W(2 * Math.atan(a / (2 * n)) * Wr, Mr, Pr);
  return { hFOV_deg: o, vFOV_deg: c };
}
function Y1(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), a = Qe(e == null ? void 0 : e.y, 0), o = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Na(t), h = Math.max(1e-12, Qe(n, 1)), g = 2 * h * f.tanHalfX, v = 2 * h * f.tanHalfY;
  return {
    x: r + (o - g) * 0.5,
    y: a + (c - v) * 0.5,
    w: g,
    h: v,
    focalPx: h
  };
}
function $u(e, t, n = zu) {
  const r = Math.max(1e-12, Qe(t, 1)), a = W(Qe(n, zu), 1, 89.999), o = r * Math.tan(a * _n), c = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, o),
    halfH: Math.min(f * 0.5, o)
  };
}
function lm(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function ks(e, t) {
  const n = W(Qe(e, 60), Mr, Pr), r = Math.max(1e-6, Qe(t, 1));
  return W(
    2 * Math.atan(Math.tan(n * _n * 0.5) * r) * Wr,
    Mr,
    Pr
  );
}
function th(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function q1(e, t) {
  const n = th(e, 1), r = th(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, o = Math.max(1, Math.round(n * a)), c = Math.max(1, Math.round(r * a)), f = (g, v) => v ? f(v, g % v) : g, h = f(o, c) || 1;
  return `${Math.max(1, Math.round(o / h))}:${Math.max(1, Math.round(c / h))}`;
}
function Pi(e) {
  const t = W(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * _n, n = W(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * _n;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function vi(e) {
  const t = Pi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (r == null ? void 0 : r[0]) || q1(t, 1);
}
function um(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = vi(t), t;
}
function cm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: a = 100,
  frameFovDeg: o = null
} = {}) {
  const c = o == null || String(o).trim() === "" ? NaN : Number(o), f = Number.isFinite(c) ? W(c, Mr, Pr) : W(Math.min(42, Qe(a, 100) * 0.42), 8, 96);
  return um({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: W(Qe(n, 0), -89.9, 89.9),
    roll_deg: dl(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Lr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : vi(e);
}
function fm(e, t) {
  const n = Na(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * r) * Wr, o = 2 * Math.atan(n.tanHalfY * r) * Wr;
  return a < Mr || a > Pr || o < Mr || o > Pr ? null : { hFOV_deg: a, vFOV_deg: o };
}
function dm(e, t, n = Lu) {
  const r = Math.sign(Qe(t, 0)), a = Math.abs(Qe(n, Lu));
  if (!r || !(a > 0)) return null;
  const o = Na(e), c = o.hFovDeg + r * a;
  if (c < Mr || c > Pr) return null;
  const f = Math.tan(c * _n * 0.5);
  return fm(e, f / o.tanHalfX);
}
function hm(e, t) {
  const n = Na(e), r = No(n.yawDeg, n.pitchDeg, n.rollDeg), a = Qe(t == null ? void 0 : t.x, 0), o = Qe(t == null ? void 0 : t.y, 0);
  return Hr(si(si(r.fwd, _r(r.right, a)), _r(r.up, o)));
}
function pm({
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
  const g = () => c || e(), v = () => o(n(g()));
  return {
    model: () => n(g()),
    refresh() {
      return h ? this.model() : (v(), this.model());
    },
    beginGesture() {
      return h || c ? !1 : (c = e(), f = !1, v(), !0);
    },
    updateGesture(x) {
      if (h) return !1;
      c || this.beginGesture();
      const S = t(c, x);
      return S.changed ? (c = S.state, f = !0, r(c), v(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && f;
    },
    commitGesture() {
      if (h || !c) return !1;
      const x = f;
      return x && a(c), c = null, f = !1, r(null), v(), x;
    },
    cancelGesture() {
      return h || !c ? !1 : (c = null, f = !1, r(null), v(), !0);
    },
    apply(x) {
      if (h) return !1;
      c && this.commitGesture();
      const S = t(e(), x);
      return S.changed ? (a(S.state), v(), !0) : !1;
    },
    destroy() {
      if (h) return;
      h = !0;
      const x = c != null;
      c = null, f = !1, x && r(null);
    }
  };
}
const Bs = Math.PI / 180, xr = 180 / Math.PI, X1 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), J1 = 260;
function nh(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function mm(e, t) {
  return t ? mm(t, e % t) : e;
}
function Z1(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, a = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / o * a)), f = Math.max(1, Math.round(t / o * a)), h = mm(c, f) || 1;
  return `${Math.round(c / h)}:${Math.round(f / h)}`;
}
function go(e, t) {
  const n = nh(e), r = nh(t);
  if (n == null || r == null) return null;
  const a = n / r;
  return !Number.isFinite(a) || a <= 0 ? null : { width: n, height: r, ratio: a, label: Z1(n, r) };
}
function Ai(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((a) => String((a == null ? void 0 : a.id) || "") === n) || t[0] || null;
}
function gm(e) {
  const t = Ai(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Lr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Tc(e, t, n = X1) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), h = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), g = (j, z, P) => {
    const $ = j + z, I = Math.max(0, P - 1), R = $ > I && $ > 0 ? I / $ : 1;
    return [j * R, z * R];
  }, [v, x] = g(h, c, r), [S, M] = g(o, f, a), b = {
    x: v,
    y: S,
    w: Math.max(1, r - v - x),
    h: Math.max(1, a - S - M)
  }, O = Ac(b, t);
  return {
    x: b.x + (b.w - O.width) * 0.5,
    y: b.y + (b.h - O.height) * 0.5,
    w: O.width,
    h: O.height,
    safeRect: b
  };
}
function Q1(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = Tc({ width: n, height: r }, 1), o = W(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(o * Bs * 0.5)), f = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, h = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, g = hm(h, lm(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), v = e_(g, No(
    h.yaw_deg,
    h.pitch_deg,
    h.roll_deg
  ).right), x = Cc({ width: a.w, height: a.h }, c);
  return {
    type: "add-frame",
    yawDeg: v.yaw,
    pitchDeg: v.pitch,
    rollDeg: v.roll,
    frameFovDeg: x.hFOV_deg
  };
}
function bm(e) {
  return {
    yaw: Ut(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * xr),
    pitch: W(Math.asin(W(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * xr, -89.9, 89.9)
  };
}
function e_(e, t) {
  const n = bm(e), r = No(n.yaw, n.pitch, 0), a = Ni(t, e), o = {
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
    roll: dl(Math.atan2(
      Ni(f, r.up),
      Ni(f, r.right)
    ) * xr)
  };
}
function ym(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), a = Tc({ width: n, height: r }, Pi(e)), o = Mi(a, e), c = { x: a.x + a.w * 0.5, y: a.y + a.h * 0.5 }, f = hm(e, lm(
    c,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), h = bm(f);
  return {
    yaw: h.yaw,
    pitch: h.pitch,
    fov: W(2 * Math.atan(n / (2 * o)) * xr, 1, 179)
  };
}
function t_(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), a = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Mi(t, n), h = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(c, a - c) * 2
  }, { halfW: g, halfH: v } = $u(h, f), x = {
    x: o - g,
    y: c - v,
    w: g * 2,
    h: v * 2
  }, S = x.x <= 0 && x.y <= 0 && x.x + x.w >= r && x.y + x.h >= a, M = r / a, b = Math.tan(zu * Bs), O = M >= 1 ? b : b * M, j = M >= 1 ? b / M : b;
  return {
    focalPx: f,
    rect: x,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(g / f) * xr,
      vFOV_deg: 2 * Math.atan(v / f) * xr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: a },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(O) * xr,
        vFOV_deg: 2 * Math.atan(j) * xr
      }
    }
  };
}
function ea(e, t) {
  const n = Ai(e);
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
function n_(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), a = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(a) && a > 0) {
    const c = Mi(n, e);
    return Cc(Ac(n, t), c);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ks(o, t) };
}
function rh(e, t, n, { preserveOrientation: r = !1, safeRect: a = null } = {}) {
  let o = go(t, n);
  if (!o) return e;
  const c = Pi(e) >= 1;
  r && o.ratio >= 1 !== c && (o = go(o.height, o.width));
  const f = n_(e, o.ratio, a);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...f, aspect_id: o.label };
}
function vm(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ai(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), a = cm({
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
    const r = Ai(e);
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
    return ea(e, (r) => rh(
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
      const o = String(Lr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = o ? go(o[1], o[2]) : go(Pi(r), 1);
      return c ? rh(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? ea(e, (a) => {
      const o = dl(r), c = Number(a.roll_deg ?? a.rot_deg ?? 0);
      if (Math.abs(c - o) <= 1e-12) return a;
      const f = { ...a, roll_deg: o };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? ea(e, (r) => {
    const a = fm(r, t.scale);
    return a ? { ...r, ...a } : r;
  }) : t.type === "step-fov" ? ea(e, (r) => {
    const a = dm(r, t.direction);
    return a ? { ...r, ...a } : r;
  }) : t.type === "pan-camera" ? ea(e, (r) => {
    const a = Sm(t.startShot || r, t);
    return Math.abs(Number(a.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(a.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: a.yaw_deg, pitch_deg: a.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function _m({
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
  }, v = Math.hypot(Number(t.x || 0) - g.x, Number(t.y || 0) - g.y);
  if (f === "shift" && v < Math.min(h.w, h.h) * c) return null;
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
function xm(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), a = Number(e.accumulatedRad || 0) + om(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: a },
    rollDeg: sm(e.startRollDeg, a, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Sm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, a = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, c = Number(t.dy || 0) * a, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * Bs, h = Math.cos(f), g = Math.sin(f), v = o / n, x = -c / n, S = v * h - x * g, M = v * g + x * h, b = Number(e.pitch_deg || 0) * Bs, O = Math.max(0.25, Math.abs(Math.cos(b)));
  return {
    ...e,
    yaw_deg: Ut(Number(e.yaw_deg || 0) - Math.atan(S) / O * xr),
    pitch_deg: W(Number(e.pitch_deg || 0) - Math.atan(M) * xr, -90, 90)
  };
}
function r_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return pm({
    readState: e,
    reduce: vm,
    projectModel: gm,
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
}), i_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, a_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: i_(t[2])
})), o_ = {
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
}, ih = Object.fromEntries(
  Object.entries(o_).map(([e, t]) => [e, {
    name: t.name,
    elements: a_(t.body)
  }])
), en = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = wt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(ih, r) ? ih[r] : null;
    });
    return (r, a) => n.value ? (ke(), Pe("svg", {
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
      (ke(!0), Pe(ot, null, jt(n.value.elements, (o, c) => (ke(), Pe(ot, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${c}`
      }, [
        o.tag === "path" ? (ke(), Pe("path", ri({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (ke(), Pe("circle", ri({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (ke(), Pe("rect", ri({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (ke(), Pe("line", ri({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (ke(), Pe("polyline", ri({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (ke(), Pe("polygon", ri({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : zt("", !0)
      ], 64))), 128))
    ], 2)) : zt("", !0);
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
    const t = e, n = wt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, a) => (ke(), Ii(Hy(e.tag), ri({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: vp(() => [
        $e(en, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, s_ = ["aria-expanded", "disabled"], l_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, u_ = ["data-aspect", "disabled", "onClick"], c_ = { class: "pano-cutout-aspect-custom" }, f_ = ["disabled"], d_ = ["disabled"], h_ = ["data-custom-width", "data-custom-height", "disabled"], wm = {
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
    ]), o = /* @__PURE__ */ vn("1"), c = /* @__PURE__ */ vn("1"), f = /* @__PURE__ */ vn(null), h = wt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), g = wt(() => {
      const O = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], j = String(n.model.aspectLabel || "");
      return O.length ? O.map((z) => {
        const P = typeof z == "string" ? z : String((z == null ? void 0 : z.value) || ""), $ = typeof z == "string" ? z : String((z == null ? void 0 : z.label) || P);
        return {
          ...typeof z == "object" && z ? z : {},
          value: P,
          label: $,
          active: j ? P === j : (z == null ? void 0 : z.active) === !0
        };
      }) : a.map((z) => ({
        ...z,
        active: z.value === j
      }));
    }), v = wt(() => {
      var j;
      const O = String(n.model.aspectLabel || "").trim();
      return O || String(((j = g.value.find((z) => z.active === !0)) == null ? void 0 : j.label) || "Aspect");
    });
    wi(v, (O) => {
      const j = String(O || "").match(/^([0-9.]+):([0-9.]+)$/);
      j && (o.value = j[1], c.value = j[2]);
    }, { immediate: !0 });
    function x(O) {
      r("action", O);
    }
    function S(O) {
      var j;
      n.model.aspectOpen === !0 && ((j = f.value) != null && j.contains(O.target) || x({ type: "close-aspect" }));
    }
    gc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), sl(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function M(O) {
      const [j, z] = String(O.value || "").split(":");
      x({
        type: "set-aspect",
        width: j,
        height: z,
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
    return (O, j) => (ke(), Pe("div", {
      ref_key: "rootElement",
      ref: f,
      class: ft(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ke(), Ii(tn, {
        key: 0,
        icon: e.model.aspectIcon || pt(Te).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: h.value },
        onClick: j[0] || (j[0] = (z) => x({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ke(), Pe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: h.value,
        onClick: j[1] || (j[1] = (z) => x({ type: "toggle-aspect" }))
      }, [
        $e(en, {
          icon: e.model.aspectIcon || pt(Te).aspect
        }, null, 8, ["icon"]),
        X("span", null, ct(v.value), 1),
        $e(en, {
          icon: pt(Te).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, s_)),
      Si(X("div", l_, [
        (ke(!0), Pe(ot, null, jt(g.value, (z) => (ke(), Pe("button", {
          key: z.value,
          class: ft(["pano-btn pano-frame-aspect-choice", { active: z.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": z.value,
          disabled: h.value,
          onClick: (P) => M(z)
        }, ct(z.label), 11, u_))), 128)),
        X("div", c_, [
          Si(X("input", {
            "onUpdate:modelValue": j[2] || (j[2] = (z) => o.value = z),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: h.value
          }, null, 8, f_), [
            [jd, o.value]
          ]),
          j[4] || (j[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          Si(X("input", {
            "onUpdate:modelValue": j[3] || (j[3] = (z) => c.value = z),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: h.value
          }, null, 8, d_), [
            [jd, c.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": c.value,
            disabled: h.value,
            onClick: b
          }, "Apply", 8, h_)
        ])
      ], 512), [
        [wo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, p_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, m_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ vn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, a) => (ke(), Pe("div", {
      class: ft(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Hn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Hn(() => {
      }, ["stop"]))
    }, [
      $e(tn, {
        icon: pt(Te).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: a[0] || (a[0] = Hn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", p_, [
        a[3] || (a[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ke(!0), Pe(ot, null, jt(pt(n), (o) => (ke(), Pe("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, g_ = { class: "pano-cutout-node-surface" }, b_ = ["title", "disabled"], y_ = { class: "value" }, v_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, __ = {
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
    return (r, a) => (ke(), Pe("div", g_, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: a[4] || (a[4] = Hn(() => {
        }, ["stop"])),
        onWheel: a[5] || (a[5] = Hn(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (o) => n({ type: "open-editor" }))
        }, [
          $e(en, {
            icon: pt(Te).fullscreen
          }, null, 8, ["icon"]),
          a[6] || (a[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        $e(tn, {
          icon: e.model.hasShot ? pt(Te).delete : pt(Te).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: a[1] || (a[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        $e(wm, {
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
          onDblclick: a[2] || (a[2] = Hn((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          $e(en, {
            icon: pt(Te).roll
          }, null, 8, ["icon"]),
          X("span", y_, ct(e.model.rollLabel || "0.0°"), 1)
        ], 40, b_),
        $e(tn, {
          icon: pt(Te).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: a[3] || (a[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        $e(m_)
      ], 32),
      e.model.hasShot === !1 ? (ke(), Pe("div", v_, " Choose a view · + Add Frame ")) : zt("", !0)
    ]));
  }
}, km = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = /* @__PURE__ */ vn(null);
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
      var O, j;
      const { active: S, intent: M } = f();
      if (!S) return;
      const b = ((j = (O = x.target) == null ? void 0 : O.files) == null ? void 0 : j[0]) || null;
      if (b) {
        r("file-selected", { intent: M, file: b });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function v() {
      const { active: x, intent: S } = f();
      x && r("file-cancelled", { intent: S });
    }
    return t({ open: h }), (x, S) => (ke(), Pe("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: g,
      onCancel: v
    }, null, 544));
  }
}, x_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, S_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ vn(!1), n = Object.freeze([
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
    return (r, a) => (ke(), Pe("div", {
      class: ft(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: a[1] || (a[1] = Hn(() => {
      }, ["stop"])),
      onWheel: a[2] || (a[2] = Hn(() => {
      }, ["stop"]))
    }, [
      $e(tn, {
        icon: pt(Te).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: a[0] || (a[0] = Hn((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", x_, [
        a[3] || (a[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ke(!0), Pe(ot, null, jt(pt(n), (o) => (ke(), Pe("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, ct(o[0]), 1),
          X("span", null, ct(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, w_ = { class: "pano-stickers-node-surface" }, k_ = ["disabled"], N_ = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, M_ = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, P_ = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ vn(null);
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
    return (c, f) => (ke(), Pe("div", w_, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Hn(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Hn(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (h) => r({ type: "open-editor" }))
        }, [
          $e(en, {
            icon: pt(Te).fullscreen
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
          $e(en, {
            icon: pt(Te).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, k_),
        $e(tn, {
          icon: e.model.locked ? pt(Te).lock_closed : pt(Te).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (h) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        $e(tn, {
          icon: pt(Te).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (h) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        $e(tn, {
          icon: pt(Te).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (h) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        $e(tn, {
          icon: e.model.isExternalSelection ? pt(Te).back_initial : pt(Te).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (h) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        $e(S_)
      ], 32),
      e.model.hasStickers === !1 ? (ke(), Pe("div", N_, " Add Image to place a sticker ")) : zt("", !0),
      e.model.dropActive === !0 ? (ke(), Pe("div", M_, "Drop image to add")) : zt("", !0),
      $e(km, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512)
    ]));
  }
}, Ns = "sticker_image_1", Nm = "external_image";
function Ms(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), a = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * a) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function hu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ic(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Ec(e) {
  return String((e == null ? void 0 : e.id) || "") === Ns || String((e == null ? void 0 : e.source_kind) || "") === Nm;
}
const Mm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Pm(e) {
  return !Ec(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Mm.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), a = Number(e.initial_pose[t]);
    return [t, Number.isFinite(a) ? a : Number.isFinite(r) ? r : n];
  }));
}
function Am(e) {
  const t = Pm(e);
  return t ? Mm.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Cm(e, t = {}) {
  var I, R, G;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((H) => String((H == null ? void 0 : H.id) || "") === Ns);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const H = String(((I = e.active) == null ? void 0 : I.selected_sticker_id) || "") === Ns;
    return {
      state: {
        ...e,
        stickers: n.filter((se, ie) => ie !== r),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const a = Number(t.linkId), o = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== a || String(c.source_state_hash || "") !== o, h = Number(t.imageWidth || 0), g = Number(t.imageHeight || 0), v = h > 0 && g > 0, x = Math.max(1, h), S = Math.max(1, g), M = t.pose && typeof t.pose == "object" ? t.pose : {}, b = f ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, O = Math.min(179, Math.max(0.1, Number(b)));
  if (!f) {
    if (!v) return { state: e, changed: !1 };
    const H = Ms(O, x, S), se = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.hFOV_deg) ?? O), ie = Ms(se, x, S), T = Number(((G = c == null ? void 0 : c.initial_pose) == null ? void 0 : G.vFOV_deg) ?? ie);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(T - ie) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((q, re) => re === r ? {
          ...q,
          vFOV_deg: H,
          initial_pose: q.initial_pose && typeof q.initial_pose == "object" ? { ...q.initial_pose, vFOV_deg: ie } : q.initial_pose
        } : q)
      },
      changed: !0
    };
  }
  const j = n.reduce((H, se) => Math.max(H, Number((se == null ? void 0 : se.z_index) || 0)), -1), z = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: O,
    vFOV_deg: v ? Ms(O, x, S) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || O),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, P = {
    ...c || {},
    id: Ns,
    source_kind: Nm,
    source_link_id: a,
    source_state_hash: o,
    ...z,
    initial_pose: { ...z },
    visible: !0,
    z_index: j + 1
  }, $ = r >= 0 ? n.map((H, se) => se === r ? P : H) : [...n, P];
  return { state: { ...e, stickers: $ }, changed: !0 };
}
function Dc(e) {
  const t = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: hu(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: hu(o.z_index),
    item: o
  })), a = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: hu(o.z_index),
    item: o
  }));
  return [...t, ...r, ...a].sort((o, c) => o.z_index - c.z_index);
}
function Tm(e) {
  const t = Ic(e), n = Ec(t), r = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).some((f) => f && f.visible !== !1), a = Dc(e), o = t ? a.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Am(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: o >= 0 && o < a.length - 1,
    canMoveBackward: o > 0
  };
}
function A_(e) {
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
function ah(e, t) {
  const n = Ic(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = A_(e), a = String(n.id || ""), o = Dc(r), c = o.findIndex((h) => h.type === "sticker" && h.id === a);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === o.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = o.splice(c, 1);
  return t === "front" ? o.push(f) : o.unshift(f), o.forEach((h, g) => {
    h.item.z_index = g;
  }), { state: r, changed: !0 };
}
function C_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function T_(e, t = {}) {
  var r, a;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Cm(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, c = String(o.stickerId || "").trim(), f = String(o.assetId || "").trim();
    if (!c || !f || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === c))
      return { state: e, changed: !1 };
    const g = Dc(e).reduce((S, M) => Math.max(S, Number(M.z_index || 0)), -1), v = 30, x = {
      id: c,
      asset_id: f,
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: v,
      vFOV_deg: Ms(v, o.imageWidth, o.imageHeight),
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
  const n = Ic(e);
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
    const o = Pm(n);
    return !o || !Am(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, ...o } : c)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return ah(e, "front");
  if (t.type === "send-back") return ah(e, "back");
  if (t.type === "delete-selected") {
    if (Ec(n))
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
    return f.assets = C_(f), { state: f, changed: !0 };
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
function I_(e = {}) {
  return pm({
    ...e,
    reduce: T_,
    projectModel: Tm
  });
}
function E_(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function oh(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function D_(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r, r += 1) {
    const o = t[r], c = t[a];
    o.y > e.y != c.y > e.y && e.x < (c.x - o.x) * (e.y - o.y) / (c.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function ju(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => oh(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], a = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: a * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return oh(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : D_(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Im(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((a) => (Array.isArray(a) ? a : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Em(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 6.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 10, 0, Math.PI * 2), e.fill());
}
function Dm(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1))
  };
}
function Om(e) {
  return No(
    Number((e == null ? void 0 : e.yawDeg) ?? (e == null ? void 0 : e.yaw) ?? 0),
    Number((e == null ? void 0 : e.pitchDeg) ?? (e == null ? void 0 : e.pitch) ?? 0),
    0
  );
}
function O_(e, t, n) {
  const { width: r, height: a } = Dm(n), { right: o, up: c, fwd: f } = Om(t), h = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * _n, g = 2 * Math.atan(Math.tan(h * 0.5) * (a / r)), v = (Number((e == null ? void 0 : e.x) || 0) - r * 0.5) / (r * 0.5) * Math.tan(h * 0.5), x = (a * 0.5 - Number((e == null ? void 0 : e.y) || 0)) / (a * 0.5) * Math.tan(g * 0.5);
  return Hr(si(si(_r(o, v), _r(c, x)), f));
}
function Ba(e, t, n) {
  const { width: r, height: a } = Dm(n), { right: o, up: c, fwd: f } = Om(t), h = Ni(e, o), g = Ni(e, c), v = Ni(e, f), x = 1e-4;
  if (!Number.isFinite(v)) return null;
  const S = Math.max(v, x), M = W(Number((t == null ? void 0 : t.fovDeg) ?? (t == null ? void 0 : t.fov) ?? 100), 1, 179) * _n, b = 2 * Math.atan(Math.tan(M * 0.5) * (a / r)), O = r * 0.5 / Math.tan(M * 0.5), j = a * 0.5 / Math.tan(b * 0.5), z = Math.max(r, a) * 2;
  return {
    x: W(r * 0.5 + h / S * O, -z, r + z),
    y: W(a * 0.5 - g / S * j, -z, a + z),
    rawZ: v
  };
}
function F_(e) {
  const t = am(Number((e == null ? void 0 : e.yaw_deg) || 0), Number((e == null ? void 0 : e.pitch_deg) || 0));
  let n = Yr(0, 1, 0);
  Math.abs(Ni(t, n)) > 0.999 && (n = Yr(0, 0, 1));
  const r = Hr(Us(n, t)), a = Hr(Us(t, r)), o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) * _n;
  return {
    centerDir: t,
    right: r,
    up: a,
    tanX: Math.tan(W(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * _n * 0.5),
    tanY: Math.tan(W(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * _n * 0.5),
    cosRotation: Math.cos(o),
    sinRotation: Math.sin(o)
  };
}
function gi(e, t, n) {
  const r = t * e.cosRotation - n * e.sinRotation, a = t * e.sinRotation + n * e.cosRotation;
  return Hr(si(
    si(e.centerDir, _r(e.right, r)),
    _r(e.up, a)
  ));
}
function Fm(e, t, n) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = F_(e), a = Ba(r.centerDir, t, n);
  if (!a) return { visible: !1 };
  const o = [
    gi(r, -r.tanX, r.tanY),
    gi(r, r.tanX, r.tanY),
    gi(r, r.tanX, -r.tanY),
    gi(r, -r.tanX, -r.tanY)
  ].map((M) => Ba(M, t, n)), c = Array.from({ length: 4 }, (M, b) => {
    const O = [];
    for (let j = 0; j <= 28; j += 1) {
      const z = j / 28;
      let P, $;
      b === 0 ? (P = -r.tanX + 2 * r.tanX * z, $ = r.tanY) : b === 1 ? (P = r.tanX, $ = r.tanY - 2 * r.tanY * z) : b === 2 ? (P = r.tanX - 2 * r.tanX * z, $ = -r.tanY) : (P = -r.tanX, $ = -r.tanY + 2 * r.tanY * z);
      const I = Ba(gi(r, P, $), t, n);
      I && O.push({ x: I.x, y: I.y });
    }
    return O;
  }), f = Ba(gi(r, 0, r.tanY), t, n), h = Ba(
    gi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t,
    n
  ), g = [a, ...o, f, h];
  if (g.some((M) => !M || !Number.isFinite(M.x) || !Number.isFinite(M.y)))
    return { visible: !1 };
  if (!g.some((M) => M.rawZ > 1e-4)) return { visible: !1 };
  const v = h.x - f.x, x = h.y - f.y, S = Math.hypot(v, x) || 1;
  return {
    center: { x: a.x, y: a.y },
    corners: o.map((M) => ({ x: M.x, y: M.y })),
    boundaryEdges: c,
    rotateStemBase: { x: f.x, y: f.y },
    rotateHandle: {
      x: f.x + v / S * 30,
      y: f.y + x / S * 30
    },
    visible: !0
  };
}
function sh(e, t, n, r, a) {
  const o = (Array.isArray(e) ? e : []).filter((f) => f && f.visible !== !1).map((f) => ({ item: f, geometry: Fm(f, r, a) })).filter((f) => f.geometry.visible).sort((f, h) => {
    var g, v;
    return Number(((g = h.item) == null ? void 0 : g.z_index) || 0) - Number(((v = f.item) == null ? void 0 : v.z_index) || 0);
  }), c = o.find((f) => {
    var h;
    return String(((h = f.item) == null ? void 0 : h.id) || "") === String(t || "");
  });
  if (c) {
    const f = ju(c.geometry, n);
    if (f.kind === "scale" || f.kind === "rotate") return { ...c, hit: f };
  }
  for (const f of o) {
    const h = ju(f.geometry, n);
    if (h.kind !== "none") return { ...f, hit: h };
  }
  return null;
}
function R_(e, t, n, r) {
  const a = O_(t, n, r);
  return {
    ...e,
    yaw_deg: Ut(Math.atan2(a.x, a.z) * Wr),
    pitch_deg: Math.asin(W(a.y, -1, 1)) * Wr
  };
}
function L_(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: W(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: W(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function z_(e, t, n, r = !1) {
  const a = (Number(n || 0) - Number(t || 0)) * Wr;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - a;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Qo = null;
function Oc() {
  return Qo || (Qo = new Promise((e) => {
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
  }), Qo);
}
function Kn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function $_(e, t = 1024) {
  const n = Math.max(1, Math.round(Kn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Kn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function j_(e, t, n) {
  const r = Kn(t), a = Kn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || a < 1) return null;
  const c = Kn(o.u0), f = Kn(o.v0), h = Kn(o.u1), g = Kn(o.v1);
  if (h <= c || g <= f) return null;
  const v = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + h) * 0.5 + Kn(v.du)) * r,
    centerY: ((f + g) * 0.5 + Kn(v.dv)) * a,
    width: (h - c) * r,
    height: (g - f) * a,
    rotationRad: Kn(v.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Kn(v.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function V_(e, t, n) {
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
function H_() {
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
      const v = [...f.listeners];
      f.listeners.clear(), v.forEach((x) => x()), n();
    };
    return h.onload = g, h.onerror = g, h.src = o, n(), h;
  }
  function a(o, c, f, h = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const g = String(o.rasterDataUrl || "").trim(), v = j_(o, c, f);
    if (!g.startsWith("data:") || !v) return null;
    const x = V_(o, c, f), S = String((o == null ? void 0 : o.id) || "").trim() || x, M = t.get(S);
    if ((M == null ? void 0 : M.revision) === x) return { source: M.source, revision: x };
    const b = r(g, h), O = Number(b.naturalWidth || b.width || 0), j = Number(b.naturalHeight || b.height || 0);
    if (!b.complete || O < 1 || j < 1) return null;
    const z = document.createElement("canvas");
    z.width = Math.max(1, Math.round(c)), z.height = Math.max(1, Math.round(f));
    const P = z.getContext("2d");
    return P ? (v.wrapOffsets.forEach(($) => {
      P.save(), P.translate(v.centerX + $, v.centerY), P.rotate(v.rotationRad), P.scale(v.scale, v.scale), P.drawImage(
        b,
        -v.width * 0.5,
        -v.height * 0.5,
        v.width,
        v.height
      ), P.restore();
    }), t.set(S, { revision: x, source: z }), { source: z, revision: x }) : null;
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
function U_(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function B_(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function G_({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
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
    const j = O.get(S);
    if ((j == null ? void 0 : j.entry) === M) {
      j.callback = b;
      return;
    }
    o(j);
    const z = { owner: x, key: S, entry: M, callback: b };
    O.set(S, z), M.listeners.add(z);
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
    const O = String(S || ""), j = String(M || "");
    if (!O || !j) return null;
    let z = n.get(O);
    if (z)
      n.delete(O), n.set(O, z);
    else {
      h(a - 1);
      const $ = e || globalThis.Image;
      if (typeof $ != "function") return null;
      const I = new $();
      z = { key: O, image: I, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(O, z), I.onload = () => f(z, !0), I.onerror = () => f(z, !1), I.src = j;
    }
    return z.settled || z.image.complete && Number(z.image.naturalWidth || z.image.width || 0) > 0 || c(x, O, z, b), z.image;
  }
  function v(x) {
    const S = r.get(x);
    S && ([...S.values()].forEach(o), r.delete(x), h(a));
  }
  return { get: g, disposeOwner: v };
}
function Gs(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function hl(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = Gs(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function lh(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    Gs(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function K_(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    Gs(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = Gs(e);
  Object.keys(r).forEach((a) => {
    r[a] = !0;
  });
}
function uh(e, t, n, r = ["erp_image", "bg_erp"]) {
  const a = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || a === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
function W_(e, t = [], n = null) {
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
function Y_({
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
  }, v = () => a(), x = () => {
    a(), h();
  }, S = () => a();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", g, { once: !0 }), r.addEventListener("canplay", g, { once: !0 }), f || r.addEventListener("timeupdate", v), r.addEventListener("play", x), r.addEventListener("pause", S), r.src = t, r.load(), { video: r, destroy: () => {
    var O, j;
    o || (o = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", g), r.removeEventListener("canplay", g), r.removeEventListener("timeupdate", v), r.removeEventListener("play", x), r.removeEventListener("pause", S), r.pause(), (O = r.removeAttribute) == null || O.call(r, "src"), (j = r.load) == null || j.call(r));
  } };
}
function bt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function q_() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function X_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const o = bt(r.z_index ?? r.zIndex, t.length);
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
function J_(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Z_(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = bt(e.t, 0), r = bt(e.widthScale, null), a = bt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = bt(e.u, null), c = bt(e.v, null);
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
    const o = bt(e.u, null), c = bt(e.v, null);
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
function es(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const a of e) {
    const o = Z_(a, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function Q_(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const h = es(e.points, t, 3);
    return h ? { geometryKind: a, points: h } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const o = es(e.points, t, 1);
  if (!o) return null;
  const c = es(e.rawPoints, t, 1), f = es(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: o,
    rawPoints: c || o.map((h) => ({ ...h })),
    processedPoints: f || o.map((h) => ({ ...h }))
  };
}
function ex(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = J_(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), a = Q_(e.geometry, n, r, t === "paint");
  if (!a) return null;
  const o = bt(e.size, null), c = bt(e.opacity, null);
  if (o == null || c == null) return null;
  const f = String(e.id || "").trim(), h = String(e.actionGroupId || "").trim();
  if (!f || !h) return null;
  const g = bt(e.radiusValue, null), v = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, bt(S.r, 0))),
      g: Math.max(0, Math.min(1, bt(S.g, 0))),
      b: Math.max(0, Math.min(1, bt(S.b, 0))),
      a: Math.max(0, Math.min(1, bt(S.a, 1)))
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
    hardness: bt(e.hardness, null),
    flow: bt(e.flow, null),
    spacing: bt(e.spacing, null),
    createdAt: Math.trunc(bt(e.createdAt, 0)),
    color: x,
    radiusModel: v,
    radiusValue: g == null ? null : Math.max(0, g),
    geometry: a
  };
}
function ch(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const a = ex(r, t);
    a && n.strokes.push(a);
  }
  return n;
}
function tx(e) {
  if (!e || typeof e != "object") return null;
  const t = bt(e.u0, null), n = bt(e.v0, null), r = bt(e.u1, null), a = bt(e.v1, null);
  if (t == null || n == null || r == null || a == null) return null;
  const o = (f) => Math.max(0, Math.min(1, f)), c = { u0: o(t), v0: o(n), u1: o(r), v1: o(a) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function nx(e) {
  const t = e || {};
  return {
    du: bt(t.du, 0) ?? 0,
    dv: bt(t.dv, 0) ?? 0,
    rot_deg: bt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, bt(t.scale, 1) ?? 1)
  };
}
function rx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const o = tx(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, bt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: a,
    transform: nx(e.transform)
  } : null;
}
function ix(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const a = rx(r, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function so(e) {
  const t = q_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: X_(e.groups),
    paint: ch(e.paint, "paint"),
    mask: ch(e.mask, "mask"),
    raster_objects: ix(e.raster_objects)
  };
}
let ts = { text: null, parsed: null };
function ln(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Vu(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function ax({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: ln(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: so(null),
    painting_layer: null,
    ui_settings: Vu(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function ox(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function sx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function lx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function ux(e) {
  return Array.isArray(e) ? e.map((t) => um(t)) : [];
}
function cx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), a = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], o = String((a == null ? void 0 : a.id) || "") || null;
  return { shots: [a], selectedShotId: o };
}
function Rm(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = ax(n), a = String(e || "").trim();
  if (!a) return r;
  try {
    let o = null;
    if (ts.text === a ? o = ts.parsed : (o = JSON.parse(a), ts = { text: a, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: sx(o.assets),
      stickers: lx(o.stickers),
      shots: ux(o.shots),
      painting: so(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Vu(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return c && (f.ui_settings = Vu({ ...f.ui_settings, ...c })), f.output_preset = ox(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = ln(n.coverage), delete f.editor_history, f;
  } catch {
    return ts = { text: a, parsed: null }, r;
  }
}
function fh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
const Ks = "state_json";
function Ur(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function fx(e) {
  var c, f;
  const t = Ur(e, Ks);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Rm(n, {
    coverage: (c = Ur(e, "coverage")) == null ? void 0 : c.value
  }), a = vm(r, { type: "add-frame" });
  if (!a.changed) return !1;
  const o = JSON.stringify(a.state);
  return t.value = o, (f = t.callback) == null || f.call(t, o), !0;
}
function Fc(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Ur(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var c, f, h, g, v, x, S, M, b;
    const o = r ? r(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (g = (h = e.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || g.call(h), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), (S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (b = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || b.call(M, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function dx(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function dh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function hx(e) {
  var v, x, S, M, b, O;
  if (!e) return;
  const t = Ur(e, "coverage"), n = Ur(e, "bg_color"), r = Ur(e, Ks), a = Ur(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && dx(o) && (dh(c) || c === ""))) return;
  let g = "360";
  if (dh(c))
    try {
      g = String(ln((v = JSON.parse(c)) == null ? void 0 : v.coverage));
    } catch {
      g = "360";
    }
  t.value = g, (x = t.callback) == null || x.call(t, g), n.value = o, (S = n.callback) == null || S.call(n, o), r.value = c, (M = r.callback) == null || M.call(r, c), a && (a.value = f, (b = a.callback) == null || b.call(a, f)), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
}
function Ps(e, t) {
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
async function px(e, { tolerateOperationFailure: t = !1 } = {}) {
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
async function Lm(e, t = {}) {
  var r;
  await px(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const a of n) await a();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function mx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Lm(e), n ? n.apply(this, r) : this.value;
  };
}
function gx(e) {
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
function hh(e, {
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
    const v = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === v) return;
    gx(g), Fc(g, t), Ps(g, Ks);
    const x = Ur(g, Ks);
    if (mx(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const M = x.callback;
      x.callback = (b) => {
        var j;
        const O = M ? M(b) : void 0;
        return (j = g.setDirtyCanvas) == null || j.call(g, !0, !1), O;
      };
    }
    if (n === "PanoramaStickers") {
      const M = Ur(g, "bg_color");
      M && (M.value == null || String(M.value).trim() === "" || String(M.value).toLowerCase() === "#000000") && (M.value = "#00ff00", (S = M.callback) == null || S.call(M, "#00ff00")), Hu(g, r, () => a(g, "stickers")), f && (o(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => a(g, "stickers")
      }), g.__panoStickersNodeSurface && Ps(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = v;
      return;
    }
    Hu(g, r, () => a(g, "cutout")), c(g, {
      buttonText: r,
      onOpen: () => a(g, "cutout")
    }), g.__panoCutoutNodeSurface && Ps(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = v;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const v = e.prototype[g];
    e.prototype[g] = function() {
      const x = v ? v.apply(this, arguments) : void 0;
      return g === "onNodeCreated" && n === "PanoramaCutout" && fx(this), g === "onConfigure" && n === "PanoramaStickers" && this.widgets && hx(this), (g === "onNodeCreated" || this.widgets) && h(this), x;
    };
  }
}
function bx(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
}
function yx(e, {
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
    Fc(e, t);
    const h = (g = e) => n(g, "stickers", { readOnly: !0, hideSidebar: !1 });
    Hu(e, "Open Preview", () => h(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: h
    }), e.__panoPreviewNodeSurface && Ps(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(o);
}
function vx({
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
      (g === "PanoramaStickers" || g === "Panorama Stickers") && hh(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && hh(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c
      }), Hs(g) && bx(f);
    },
    nodeCreated(f) {
      const h = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      Fc(f, e), Hs(h) && yx(f, { app: e, openEditor: t, attachPreview: a, requestFrame: o });
    }
  };
}
const _x = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Sr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : _x.test(String(e.name || "")) : !1;
}
function Rc(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Sr(n)) : !1;
}
function xx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, a = (h) => {
    var g, v, x;
    (g = h == null ? void 0 : h.preventDefault) == null || g.call(h), (v = h == null ? void 0 : h.stopPropagation) == null || v.call(h), (x = h == null ? void 0 : h.stopImmediatePropagation) == null || x.call(h);
  }, o = (h) => {
    if (Rc(h == null ? void 0 : h.dataTransfer)) {
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
    var v;
    const g = Array.from(((v = h == null ? void 0 : h.dataTransfer) == null ? void 0 : v.files) || []).find((x) => Sr(x));
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
async function Bu(e, t = {}) {
  var c, f, h, g;
  if (!Sr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), a = t.revokeObjectURL || ((g = (h = globalThis.URL) == null ? void 0 : h.revokeObjectURL) == null ? void 0 : g.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const v = await new Promise((x, S) => {
      const M = new n();
      M.onload = () => x(M), M.onerror = () => S(new Error("image load failed")), M.src = o;
    });
    return {
      image: v,
      width: Math.max(1, Number(v.naturalWidth || v.width || 1)),
      height: Math.max(1, Number(v.naturalHeight || v.height || 1))
    };
  } finally {
    a == null || a(o);
  }
}
async function As(e, { fetchApi: t } = {}) {
  if (!Sr(e)) throw new TypeError("A supported image file is required.");
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
const Za = /* @__PURE__ */ new WeakMap();
function zm(e, t) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Za.get(e);
  n || (n = [], Za.set(e, n));
  const r = { handler: t };
  n.push(r);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const o = Za.get(e);
    if (!o) return;
    const c = o.indexOf(r);
    c >= 0 && o.splice(c, 1), o.length === 0 && Za.delete(e);
  };
}
function Qa(e, ...t) {
  const n = Za.get(e), r = n == null ? void 0 : n[n.length - 1];
  return r ? (r.handler(...t), !0) : !1;
}
const ph = /* @__PURE__ */ new WeakSet();
function Ws(e) {
  if (!e || typeof e != "object" || ph.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, ph.add(e), e;
}
function $m(e, t) {
  var r, a;
  if (!t || ((a = (r = Ws(t)) == null ? void 0 : r.onRemove) == null || a.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Sx({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, a = null, o = !1;
  return { schedule: (h) => o || r || typeof e != "function" ? !1 : (a = h, r = e(() => {
    r = 0;
    const g = a;
    a = null, o || n == null || n(g);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, a = null);
  } };
}
const { app: $t } = gs, Lc = G_();
function Gu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (gs == null ? void 0 : gs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Ys = Math.PI / 180, wx = {}, kx = { Nu: 24, Nv: 14 }, Nx = 10, Mx = "pano_suite.ui_settings.v1", Px = 120;
function mh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1,
    preview_quality: "balanced"
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Mx)) || "").trim();
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
function Ax() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ga(e) {
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
function Cx() {
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
function Ku(e) {
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
function jm(e) {
  const t = Ku(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Tx(e, t, n) {
  jm(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Wu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function zc(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Vm(e) {
  return Hs(zc(e));
}
function gh(e = null) {
  var o, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((c = (o = $t == null ? void 0 : $t.canvas) == null ? void 0 : o.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, a].join("|");
}
function Hm(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = "dom", o = Wu(e);
      this.activeBackend = o;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (o === a && o !== "none" && c === r && f === h) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = h, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && Cs(e), vS(e, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Wu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Cs(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Cs(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Ix(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Cs(e, t = {}) {
  var r, a, o, c, f;
  if (!e) return;
  Yu.unregister(e), Ix(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const v = String((g == null ? void 0 : g.name) || ""), x = String((g == null ? void 0 : g.type) || ""), S = Gu();
      return v === S || x === S || v === "pano_preview" || x === "pano_preview" ? !0 : v === "preview" && x === "pano_preview";
    }).forEach((g) => Jx(e, g));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function Ci(e, t, n) {
  return { x: e, y: t, z: n };
}
function bh(e, t) {
  return Ci(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ns(e, t) {
  return Ci(e.x * t, e.y * t, e.z * t);
}
function pu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function yh(e, t) {
  return Ci(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function rs(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ci(e.x / t, e.y / t, e.z / t);
}
function yi(e, t) {
  const n = e * Ys, r = t * Ys, a = Math.cos(r);
  return Ci(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ex(e, t, n = 0) {
  const r = yi(e, t), a = Ci(0, 1, 0);
  let o = yh(a, r);
  Math.hypot(o.x, o.y, o.z) < 1e-6 && (o = Ci(1, 0, 0)), o = rs(o);
  let c = rs(yh(r, o));
  const f = n * Ys, h = Math.cos(f), g = Math.sin(f), v = bh(ns(o, h), ns(c, g)), x = bh(ns(o, -g), ns(c, h));
  return { fwd: r, right: rs(v), up: rs(x) };
}
function Dx(e, t = "#00ff00") {
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
function Ox(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ba(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Wn(e) {
  var f, h;
  const t = Ox(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = ba(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((h = ba(e, "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === a)
    return o.parsed;
  const c = Dx(t, r);
  return c.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: a, parsed: c }, c;
}
function ba(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Um(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function Fx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Bm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Gm(e, t, n = null) {
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
  return !r && n != null && (r = Fx(e == null ? void 0 : e.graph, n)), r;
}
function Rx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Km(e, t = []) {
  const n = Rx(e), r = [];
  return t.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : t;
}
function vh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function qs(e, t) {
  const n = vh(e), r = vh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Lx(e, t = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Km(e, t).map((g) => n.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(g))).filter((g) => g >= 0), o = n.map((g, v) => ({ input: g, idx: v })).filter(({ input: g }) => String((g == null ? void 0 : g.type) || "").toUpperCase() === "IMAGE").map(({ idx: g }) => g), c = [.../* @__PURE__ */ new Set([...a, ...o])], f = [];
  for (const g of c) {
    const v = Gm(e, g);
    if ((v == null ? void 0 : v.id) != null) {
      f.push(String(v.id));
      continue;
    }
    const x = (h = n[g]) == null ? void 0 : h.link;
    if (x == null) continue;
    const S = Um(e == null ? void 0 : e.graph, x), { originId: M } = Bm(S);
    M != null && f.push(String(M));
  }
  return [...new Set(f)];
}
const Yu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = bn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var g, v, x, S, M;
        if (!o) return;
        const c = qs(r, o == null ? void 0 : o.id);
        Lx(o, ["erp_image", "bg_erp"]).some((b) => qs(r, b)), !(String(o.__panoPreviewMode || "") === "cutout" && !c) && (Ym(o), (v = (g = o.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || v.call(g), (x = o.setDirtyCanvas) == null || x.call(o, !0, !0), (M = (S = o.graph) == null ? void 0 : S.setDirtyCanvas) == null || M.call(S, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function Xs(e) {
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
  return typeof ((o = bn) == null ? void 0 : o.apiURL) == "function" ? bn.apiURL(a) : a;
}
function zx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function $x(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: a, subfolder: o };
}
function jx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Vx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (zx(t)) return [t];
  const { filename: n, subfolder: r } = $x(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((o) => Xs({
    filename: n,
    subfolder: r,
    type: o
  }));
  return jx([...a, t]);
}
function Hx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Xs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function bo(e) {
  const t = $t == null ? void 0 : $t.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const a = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (qs(o, a)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const c of o)
      if (qs(c, a)) return t[c];
  }
  return null;
}
function qu(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || bo(e == null ? void 0 : e.id), a = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(a) ? a[0] : a;
}
function gr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return gr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Xs({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = gr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Xs(e);
}
function _h(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Wm(e) {
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
function $c(e, t) {
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
function Ux(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((c) => t.push(c));
  }, a = (o, c = 0) => {
    !o || c > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), a(o.output, c + 1), a(o.ui, c + 1), a(o.data, c + 1), a(o.result, c + 1));
  };
  return a(e, 0), t;
}
function Bx(e, t) {
  try {
    e.__panoOwnOutputRev = U_(e.__panoOwnOutputRev);
    const n = Ux(t);
    let r = "";
    for (const a of n)
      if (r = gr(a), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), $c(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ya(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function xh(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!hl(e, "background"))
    return ya(e), null;
  const a = bo(r), o = W_(a, t, gr);
  if (!o)
    return ya(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = $c(o, c), h = `${t.join("|")}:${f}`, g = e.__panoOwnOutputVideoCache;
  if (g != null && g.video && g.key === h) return g.video;
  ya(e);
  const v = Y_({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return v ? (e.__panoOwnOutputVideoCache = { key: h, ...v }, v.video) : null;
}
function Gx(e, t = []) {
  var g, v;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Km(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), o = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), c = [.../* @__PURE__ */ new Set([...a, ...o])];
  for (const x of c) {
    const S = n[x], M = S == null ? void 0 : S.link;
    if (M == null) continue;
    const b = Um(e.graph, M), { originId: O, originSlot: j } = Bm(b);
    if (O == null) continue;
    const z = Gm(e, x, O);
    if (!z) continue;
    const P = Number(j || 0), $ = bo((z == null ? void 0 : z.id) ?? O), I = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (I.length) {
      const se = [];
      P >= 0 && P < I.length && se.push(I[P]), se.push(...I);
      for (const ie of se) {
        const T = gr(ie);
        if (T)
          return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof ($t == null ? void 0 : $t.getNodeImageUrls) == "function" ? $t.getNodeImageUrls(z) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const se = [];
      P >= 0 && P < R.length && se.push(R[P]), se.push(...R);
      for (const ie of se) {
        const T = gr(ie);
        if (T)
          return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const G = Array.isArray(z == null ? void 0 : z.imgs) ? z.imgs : [];
    if (G.length) {
      const se = [];
      P >= 0 && P < G.length && se.push(G[P]), se.push(...G);
      for (const ie of se) {
        const T = gr(ie);
        if (T)
          return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const H = (g = z == null ? void 0 : z.widgets) == null ? void 0 : g.find((se) => String((se == null ? void 0 : se.name) || "").toLowerCase() === "image");
    if (H) {
      let se = gr(H.value);
      if (se && !se.includes("/") && !se.includes(":") && (z.comfyClass === "LoadImage" || z.type === "LoadImage") && (se = bn.apiURL(`/view?filename=${encodeURIComponent(se)}&type=input&subfolder=`)), se)
        return String((S == null ? void 0 : S.name) || ""), { src: se, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = hl(e, "background") ? bo(e == null ? void 0 : e.id) : null, h = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && h.push(...f.pano_input_images), Array.isArray((v = f == null ? void 0 : f.ui) == null ? void 0 : v.pano_input_images) && h.push(...f.ui.pano_input_images), h.length > 0)
    for (const x of h) {
      const S = gr(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Kx(e, t = [], n = {}) {
  const r = Gx(e, t), a = String((r == null ? void 0 : r.src) || "").trim();
  if (!a) return null;
  const o = Vx(a);
  if (!o.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", h = e.__panoLinkedInputImageCache.get(f);
  if (h && h.srcRaw === a && h.img) return h.img;
  if (h && h.pendingSrcRaw === a && h.pendingImg)
    return c && h.img && (h.img.complete || h.img.naturalWidth || h.img.width) ? h.img : h.pendingImg;
  const g = new Image(), v = h || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  v.pendingSrcRaw = a, v.pendingResolvedSrc = "", v.pendingImg = g, e.__panoLinkedInputImageCache.set(f, v);
  let x = -1;
  const S = () => {
    var b, O, j, z;
    if (x += 1, x >= o.length) {
      if (((O = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : O.call(b, f)) === v && v.pendingImg === g && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
        try {
          (z = (j = e.__panoLinkedInputImageCache) == null ? void 0 : j.delete) == null || z.call(j, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const M = o[x];
    v.pendingResolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M, b, O;
    ((b = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : b.call(M, f)) === v && v.pendingImg === g && (v.srcRaw = a, v.resolvedSrc = String(v.pendingResolvedSrc || g.src || ""), v.img = g, v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null), String(v.pendingResolvedSrc || v.resolvedSrc || g.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0);
  }, g.onerror = (M) => {
    var b, O, j, z;
    if (x + 1 < o.length) {
      S();
      return;
    }
    if (((O = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : O.call(b, f)) === v && v.pendingImg === g && (v.pendingSrcRaw = "", v.pendingResolvedSrc = "", v.pendingImg = null, !v.img))
      try {
        (z = (j = e.__panoLinkedInputImageCache) == null ? void 0 : j.delete) == null || z.call(j, f);
      } catch {
      }
    String(v.pendingResolvedSrc || v.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, S(), c && v.img && (v.img.complete || v.img.naturalWidth || v.img.width) ? v.img : g;
}
function Sh(e, t = [], n = null, r = {}) {
  const a = Kx(e, t, r);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function Ym(e) {
  var t, n, r, a;
  if (e) {
    Lc.disposeOwner(e);
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
function Wx(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function Yx(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function qm(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ka(e, t, n = "") {
  const r = qm(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < Px ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function mu(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / a, f = r / o, h = Math.min(c, f);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function qx(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), g = Math.max(Math.round(34 * n), f + Math.round(14 * n)), v = r + (o - h) * 0.5, x = a + (c - g) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(v, x, h, g, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", v + h * 0.5, x + g * 0.5 + 0.5), e.restore();
}
function ta(e, t, n = "Connect ERP image") {
  var a;
  const r = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Connect ERP image"), r.style.display = t ? "flex" : "none");
}
function Xx(e) {
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
function Jx(e, t) {
  return $m(e, t);
}
function Xm(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let o = Hx(n);
  if (!o && (r != null && r.external)) {
    if (!hl(e, "external-sticker")) return null;
    const M = e.__panoLastExecutedOutput || bo(e == null ? void 0 : e.id), b = ((S = M == null ? void 0 : M.ui) == null ? void 0 : S.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const O of Array.isArray(b) ? b : [b])
      if (o = gr(O), o) break;
  }
  if (!o) return null;
  const c = qu(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", h = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, g = r != null && r.external ? $c(o, h) : o, v = B_(o, f, h);
  return Lc.get(e, v, g, (M, b) => {
    var O, j;
    b && (r != null && r.external && Qa(e, "image-loaded"), (j = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null || j.call(O));
  }) || null;
}
function Zx(e, t) {
  return fl(t, {
    selectedId: null,
    hoveredId: null
  });
}
function Qx(e, t, n) {
  return im(
    t,
    (r, a, o) => Xm(e, r, a, o),
    { scene: n }
  );
}
function eS(e, t) {
  var x, S, M, b;
  const n = aS(e, t), r = oS(t), a = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) ? t.painting.groups : [], o = new Map(
    a.filter((O) => O && typeof O == "object").map((O) => [String((O == null ? void 0 : O.actionGroupId) || (O == null ? void 0 : O.id) || "").trim(), Number((O == null ? void 0 : O.z_index) || 0)])
  ), c = n ? r.map((O) => {
    const j = n.getGroupDisplayCanvas(O);
    return j ? {
      id: `paint_group:${O}`,
      source: j,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${O}`,
      zIndex: Number(o.get(O) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (b = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || b.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = H_()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var O, j;
    return (j = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : j.call(O);
  });
  const h = $_(t == null ? void 0 : t.output_preset), g = f.filter((O) => (O == null ? void 0 : O.visible) !== !1 && String((O == null ? void 0 : O.layerKind) || "paint") === "paint").map((O) => String((O == null ? void 0 : O.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(g);
  const v = f.map((O) => {
    const j = e.__panoRasterObjectSurfaceCache.get(
      O,
      h.width,
      h.height,
      e.__panoRasterObjectReady
    );
    return j ? {
      id: `raster:${String((O == null ? void 0 : O.id) || "")}`,
      source: j.source,
      revision: j.revision,
      zIndex: Number((O == null ? void 0 : O.z_index) || 0),
      opacity: 1,
      visible: (O == null ? void 0 : O.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...v];
}
function gu(e, t, n, r = "") {
  const a = Zx(e, t), o = Qx(e, t, a), c = eS(e, t), f = Wm(n), h = Zm(n), g = Xa({
    stateRevision: [
      "runtime_cutout_scene",
      f,
      h.width,
      h.height,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      String(r || ""),
      Array.isArray(o) ? o.map((v) => `${String((v == null ? void 0 : v.assetId) || "")}:${String((v == null ? void 0 : v.revision) || "")}`).join(",") : "",
      Array.isArray(c) ? c.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${String((v == null ? void 0 : v.revision) || "")}:${Number((v == null ? void 0 : v.zIndex) || 0)}`).join(",") : ""
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
  return e.__panoRuntimeCore || (e.__panoRuntimeCore = ko()), e.__panoRuntimeCore.syncState(g), e.__panoRuntimeCore;
}
function Jm(e, t, n, r) {
  const a = pu(e, t.right), o = pu(e, t.up), c = pu(e, t.fwd);
  if (c <= 1e-4) return null;
  const f = o / c / r, h = a / c / r;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function tS(e, t, n, r) {
  var o, c, f, h, g, v;
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
      y: Number(t.canvasY) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[1]) || 0)
    };
  const a = rS(e, t, r);
  return a || null;
}
function nS(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), c = (t == null ? void 0 : t.ds) || ((S = $t == null ? void 0 : $t.canvas) == null ? void 0 : S.ds);
  if (!o || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const h = Array.isArray(c.offset) ? c.offset : [0, 0], g = (n - Number(o.left || 0)) / f - Number(h[0] || 0), v = (r - Number(o.top || 0)) / f - Number(h[1] || 0);
  return !Number.isFinite(g) || !Number.isFinite(v) ? null : { x: g, y: v };
}
function rS(e, t, n) {
  var a, o;
  const r = nS(t, n || ($t == null ? void 0 : $t.canvas));
  return r ? {
    x: r.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function iS(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function aS(e, t) {
  var g, v, x, S, M, b, O, j, z, P, $, I;
  const n = (v = (g = t == null ? void 0 : t.painting) == null ? void 0 : g.paint) == null ? void 0 : v.strokes, r = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!a && !o) return null;
  const c = iS(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Ru(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((b = t == null ? void 0 : t.painting) == null ? void 0 : b.raster_objects) || null
  };
  return (((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.paint) !== h.paint || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.mask) !== h.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== h.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== h.rasterObjects) && (e.__panoPreviewPaintRevision = h, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function oS(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Zm(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function sS(e, t, n, r) {
  const a = Fm(t, n, r);
  if (!a.visible) return null;
  const o = E_(t);
  return e.save(), Im(e, a.boundaryEdges, { selected: !0 }), Em(e, a, { accent: o }), e.restore(), a;
}
function lS(e, t, n, r = null) {
  var M, b, O, j, z, P, $, I, R, G, H, se, ie, T, q, re;
  const a = String(e.__panoPreviewMode || "stickers");
  qm(e, a);
  const o = Wn(e);
  a === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (O = (b = (M = e.__panoCutoutNodeSurface) == null ? void 0 : M.session) == null ? void 0 : b.refresh) == null || O.call(b)) : a === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (P = (z = (j = e.__panoStickersNodeSurface) == null ? void 0 : j.session) == null ? void 0 : z.refresh) == null || P.call(z));
  const c = t.parentElement, f = 1, h = Math.max(1, Number((c == null ? void 0 : c.clientWidth) || t.clientWidth || 0)), g = Math.max(1, Number((c == null ? void 0 : c.clientHeight) || t.clientHeight || 0)), v = Math.max(64, Math.round(h * f)), x = Math.max(64, Math.round(g * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const J = Xx(o), de = xh(
        e,
        ["pano_input_videos"],
        () => {
          var Ye, Ve;
          return (Ve = (Ye = e.__panoDomPreview) == null ? void 0 : Ye.requestDraw) == null ? void 0 : Ve.call(Ye);
        }
      ) || Sh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Ye, Ve;
          return (Ve = (Ye = e.__panoDomPreview) == null ? void 0 : Ye.requestDraw) == null ? void 0 : Ve.call(Ye);
        },
        { preserveReadyWhilePending: !1 }
      ), ce = _h(de);
      (t.width !== v || t.height !== x) && (t.width = v, t.height = x);
      const we = { x: 0, y: 0, w: v, h: x }, A = Zm(de), xe = ce ? W(Number(A.width / A.height), 0.05, 20) : 1, Ae = J ? vr(J) : null, Ne = W(Number((Ae == null ? void 0 : Ae.aspect) || xe || 1), 0.05, 20), U = Tc(we, Ne);
      e.__panoCutoutNodeFrame = U, mu(t, we), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, v, x);
      let je = "none", mt = "Connect ERP image", nt = "";
      if (nt = String((de == null ? void 0 : de.currentSrc) || (de == null ? void 0 : de.src) || ""), J)
        if (de && !ce)
          je = "loading";
        else if (ce) {
          const Ye = gu(e, o, de, (J == null ? void 0 : J.id) || ""), Ve = t_({ width: v, height: x }, U, J), qt = Ve.rect, An = vr(Ve.shot);
          let Sn = !0;
          if (Ve.fallback) {
            const L = Ve.fallback.rect, V = vr(Ve.fallback.shot);
            Sn = Ye.renderToContext(
              S,
              L,
              V,
              { width: L.w, height: L.h, dpr: 1 }
            );
          }
          const nn = Ye.renderToContext(
            S,
            qt,
            An,
            { width: qt.w, height: qt.h, dpr: 1 }
          );
          let un = !0;
          Ve.fallback && (un = Ye.renderToContext(
            S,
            U,
            vr(J),
            { width: U.w, height: U.h, dpr: 1 }
          )), (!Sn || !nn || !un) && (je = "empty", mt = "Open editor or run node");
        } else
          je = "empty", mt = "Connect ERP image";
      else {
        const Ye = e.__panoLastCutoutShot;
        if (Ye ? (e.__panoPreviewView = ym(Ye, { width: v, height: x }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), ce) {
          const Ve = gu(e, o, de, "zero_shot_viewer"), qt = ((I = ($ = r == null ? void 0 : r.state) == null ? void 0 : $.drag) == null ? void 0 : I.active) === !0 || ((G = (R = r == null ? void 0 : r.state) == null ? void 0 : R.inertia) == null ? void 0 : G.active) === !0 ? 0.5 : 1;
          Ve.renderToContext(
            S,
            we,
            mo(e.__panoPreviewView, o == null ? void 0 : o.coverage),
            { width: we.w, height: we.h, dpr: 1, renderScale: qt }
          ) || (je = "empty", mt = "Open editor or run node");
        } else de ? je = "loading" : (je = "empty", mt = "Connect ERP image");
      }
      J && (e.__panoLastCutoutShot = { ...J }, S.save(), S.fillStyle = "rgba(0,0,0,0.58)", S.beginPath(), S.rect(0, 0, v, x), S.rect(U.x, U.y, U.w, U.h), S.fill("evenodd"), S.restore(), S.save(), S.strokeStyle = "rgba(255,221,87,0.72)", S.lineWidth = 2, S.strokeRect(U.x + 0.5, U.y + 0.5, Math.max(0, U.w - 1), Math.max(0, U.h - 1)), S.restore()), je === "loading" ? (ta(e, !1), Ka(e, !0, nt)) : je === "empty" ? (ta(e, !0, mt), Ka(e, !1, "")) : (ta(e, !1), Ka(e, !1, ""));
    } else {
      ta(e, !1), (t.width !== v || t.height !== x) && (t.width = v, t.height = x);
      const J = { x: 0, y: 0, w: v, h: x };
      S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, v, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const de = xh(
        e,
        ["pano_input_videos"],
        () => {
          var Ae, Ne;
          return (Ne = (Ae = e.__panoDomPreview) == null ? void 0 : Ae.requestDraw) == null ? void 0 : Ne.call(Ae);
        }
      ) || Sh(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Ae, Ne;
          return (Ne = (Ae = e.__panoDomPreview) == null ? void 0 : Ae.requestDraw) == null ? void 0 : Ne.call(Ae);
        },
        { preserveReadyWhilePending: !1 }
      ), ce = de || null, we = !de || _h(ce), A = mo(e.__panoPreviewView, o == null ? void 0 : o.coverage);
      let xe = !1;
      if (we) {
        const Ne = gu(e, o, ce, de ? "stickers_surface|background:input" : "stickers_surface|background:none"), U = hS(e) || ((se = (H = r == null ? void 0 : r.state) == null ? void 0 : H.drag) == null ? void 0 : se.active) === !0 || ((T = (ie = r == null ? void 0 : r.state) == null ? void 0 : ie.inertia) == null ? void 0 : T.active) === !0 || ((q = e.__panoStickerDrag) == null ? void 0 : q.active) === !0;
        xe = Ne.renderToContext(
          S,
          J,
          A,
          { width: J.w, height: J.h, dpr: 1, renderScale: U ? 0.5 : 1 }
        );
      }
      if (we && xe)
        Ka(e, !1, "");
      else {
        const Ae = !!de && !we;
        Ka(e, Ae, String((ce == null ? void 0 : ce.currentSrc) || (ce == null ? void 0 : ce.src) || "")), Ae && qx(S, J, mu(t, J)), ta(e, !1);
      }
      if (!de && xe) {
        const Ae = W(Number(A.fovDeg || 100), 1, 179) * Ys, Ne = Math.tan(Ae * 0.5) * (J.h / Math.max(1, J.w)), U = Ex(Number(A.yawDeg || 0), Number(A.pitchDeg || 0), 0);
        cS(S, J, U, Ne, mu(t, J));
      }
      if (xe) {
        ta(e, !1);
        const Ae = String(((re = o == null ? void 0 : o.active) == null ? void 0 : re.selected_sticker_id) || ""), Ne = (Array.isArray(o == null ? void 0 : o.stickers) ? o.stickers : []).find((U) => String((U == null ? void 0 : U.id) || "") === Ae && (U == null ? void 0 : U.visible) !== !1);
        e.__panoSelectedStickerGeometry = Ne ? sS(S, Ne, A, { width: v, height: x }) : null;
      } else
        e.__panoSelectedStickerGeometry = null;
    }
}
function uS(e, t, n, r, a, o, c = kx) {
  const f = Wn(e), h = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = ko());
  const g = Wm(o), v = em({
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
  if (!e.__panoBackgroundCore.syncState(v)) return;
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
function wh(e, t, n, r, a, o, c = 1) {
  let f = !1;
  e.strokeStyle = o, e.lineWidth = c, e.beginPath();
  for (const h of t) {
    const g = Jm(h, n, r, a);
    if (!g) {
      f = !1;
      continue;
    }
    f ? e.lineTo(g.x, g.y) : (e.moveTo(g.x, g.y), f = !0);
  }
  e.stroke();
}
function cS(e, t, n, r, a = 1) {
  e.save();
  const o = "#3f3f46", c = "rgba(250, 250, 250, 0.86)";
  for (let g = -75; g <= 75; g += 15) {
    const v = [];
    for (let x = -180; x <= 180; x += 4) v.push(yi(x, g));
    wh(e, v, n, t, r, g === 0 ? c : o, g === 0 ? 1.5 : 1);
  }
  for (let g = -180; g <= 180; g += 15) {
    const v = [];
    for (let x = -89; x <= 89; x += 4) v.push(yi(g, x));
    wh(e, v, n, t, r, o, g % 90 === 0 ? 1.3 : 1);
  }
  const f = [
    { name: "Front", dir: yi(0, 0) },
    { name: "Right", dir: yi(90, 0) },
    { name: "Back", dir: yi(180, 0) },
    { name: "Left", dir: yi(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const h = Math.max(9, Math.round(11 * a));
  e.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((g) => {
    const v = Jm(g.dir, n, t, r);
    v && e.fillText(g.name, v.x, v.y + 24 * a);
  }), e.restore();
}
function fS(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function dS(e) {
  const t = fS(e);
  t.dragging = !1, t.hqFrames = Nx;
}
function Xu(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function hS(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function Ju(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function pS(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const a = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return a >= r.width - n && o >= r.height - n;
}
function Bn(e, t) {
  return pS(e, t) ? !1 : (Ju(e), !0);
}
function kh() {
  var n;
  const e = (n = $t == null ? void 0 : $t.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function mS(e) {
  var n;
  if (!e) return;
  const t = (n = $t == null ? void 0 : $t.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function gS(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !jm(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function bS(e, t = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, c;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Nh(e, t = null, n = 0, r = 0, a = !0) {
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
      e.__panoUserResized = !0, Xu(e, 150), t == null || t(), a && yS(e, 180, t);
    }
  };
}
function yS(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Wa(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function vS(e, t = {}) {
  var Pt;
  const n = t.__allowStandalone === !0, r = Vm(e);
  if (r && !n) {
    zc(e);
    return;
  }
  r && gS(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), String(t.__panoForcedPath || "").trim();
  const c = {
    signature: gh(e)
  }, f = "dom", h = c.signature || gh(e);
  if (Number(e.__panoRebindGeneration || 0), Wu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Ku(e), e.__panoFrontendSig = h, e.__panoStickersPath = f, (Pt = e.__panoDomPreview) != null && Pt.widget || (e.__panoLegacyPreviewHooked && Cs(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const g = t.noPreview === !0, v = g ? 0 : 56, x = g ? 0 : J1, S = document.createElement("div");
  if (Cx(), S.className = "pano-node-preview-dom", S.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), g && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
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
    const E = Ws(
      e.addDOMWidget(Gu(), "preview", S, Nh(e, null))
    );
    Wa(e), e.__panoDomPreview = { widget: E, root: S, requestDraw: () => {
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
  const j = nm(S), z = document.createElement("div");
  z && (z.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(z)), Tx(e, 120, 120), Wa(e);
  let P = null;
  try {
    bS(e, v, () => {
      var E, Se;
      return (Se = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : Se.call(E);
    }), P = Ws(e.addDOMWidget(
      Gu(),
      "preview",
      S,
      Nh(
        e,
        () => {
          var E, Se;
          return (Se = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : Se.call(E);
        },
        v,
        x,
        !1
      )
    ));
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
  }, I = () => {
    $.destroyed || ($.needsDraw = !0, !$.inTick && !$.raf && ($.raf = requestAnimationFrame(mt)));
  }, R = /* @__PURE__ */ ka(a ? { ...Tm(Wn(e)), importing: !1, dropActive: !1 } : {
    ...gm(Wn(e)),
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((E) => ({ value: E, label: E }))
  });
  let G = null;
  const H = (a ? I_ : r_)({
    readState: () => Wn(e),
    publishLiveState: (E) => {
      E ? (G = E, e.__panoLiveStateOverride = E) : (e.__panoLiveStateOverride === G && (e.__panoLiveStateOverride = null), G = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, I();
    },
    commitState: (E) => {
      var Le, Je, Ke, Ft;
      const Se = ba(e, "state_json");
      if (!Se) return;
      const Ie = JSON.stringify(E);
      Se.value = Ie, (Le = Se.callback) == null || Le.call(Se, Ie), e.__panoStateCache = null, (Je = e.setDirtyCanvas) == null || Je.call(e, !0, !0), (Ft = (Ke = e.graph) == null ? void 0 : Ke.setDirtyCanvas) == null || Ft.call(Ke, !0, !0);
    },
    onChange: (E) => Object.assign(R, E)
  }), se = (E = "sync", Se = null) => {
    if (!a || !H || H.hasGestureChanges()) return !1;
    const Ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((Fn) => String((Fn == null ? void 0 : Fn.name) || "") === "sticker_image") : null, Le = (Ie == null ? void 0 : Ie.link) ?? null;
    if (Le == null)
      return H.apply({ type: "sync-external", value: { connected: !1 } });
    if (!hl(e, "external-sticker")) return !1;
    const Je = qu(e, "pano_sticker_input_pose", Se), Ke = Array.isArray(Je) ? Je[0] : Je, Ft = String(qu(e, "pano_sticker_input_state_hash", Se) ?? ""), Gt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Kt = Wn(e), Ct = (Array.isArray(Kt == null ? void 0 : Kt.stickers) ? Kt.stickers : []).find((Fn) => String((Fn == null ? void 0 : Fn.id) || "") === "sticker_image_1"), Tt = Xm(e, "sticker_image_1", null, { external: !0 }), li = Ke && typeof Ke == "object" ? Ke : Ct || { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return H.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Le,
        stateHash: Ft,
        pose: li,
        imageWidth: Number((Tt == null ? void 0 : Tt.naturalWidth) || (Tt == null ? void 0 : Tt.width) || 0),
        imageHeight: Number((Tt == null ? void 0 : Tt.naturalHeight) || (Tt == null ? void 0 : Tt.height) || 0)
      }
    });
  }, ie = a ? zm(e, se) : () => {
  };
  let T = 0;
  const q = async (E) => {
    if (!a || !H || !Sr(E)) return !1;
    const Se = `asset_${Math.random().toString(16).slice(2, 10)}`, Ie = `st_${Math.random().toString(16).slice(2, 10)}`, Le = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    T += 1, R.importing = !0;
    const Je = Uu(e, `add:${Se}`, async () => {
      const Ke = await Bu(E), Ft = await As(E, {
        fetchApi: (Gt, Kt) => bn.fetchApi(Gt, Kt)
      });
      return A(), H.apply({
        type: "add-sticker",
        value: {
          stickerId: Ie,
          assetId: Se,
          asset: Ft,
          imageWidth: Ke.width,
          imageHeight: Ke.height,
          yaw_deg: Number(Le.yaw || 0),
          pitch_deg: Number(Le.pitch || 0)
        }
      });
    });
    try {
      return await Je;
    } catch {
      return !1;
    } finally {
      T = Math.max(0, T - 1), R.importing = T > 0, I();
    }
  };
  let re = null, J = null, de = null, ce = !1;
  const we = () => {
    var E;
    return de && (clearTimeout(de), de = null), ce ? (ce = !1, ((E = H == null ? void 0 : H.commitGesture) == null ? void 0 : E.call(H)) ?? !1) : !1;
  }, A = () => {
    var Le, Je, Ke;
    const E = we(), Se = (re == null ? void 0 : re.pointerId) ?? (J == null ? void 0 : J.pointerId);
    if (re = null, J = null, e.__panoStickerDrag = null, Se != null) {
      try {
        (Le = b.hasPointerCapture) != null && Le.call(b, Se) && ((Je = b.releasePointerCapture) == null || Je.call(b, Se));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ie = ((Ke = H == null ? void 0 : H.commitGesture) == null ? void 0 : Ke.call(H)) ?? !1;
    return E || Ie;
  }, xe = () => {
    var Le, Je, Ke;
    const E = we(), Se = re == null ? void 0 : re.pointerId;
    if (re = null, e.__panoStickerDrag = null, Se != null) {
      try {
        (Le = b.hasPointerCapture) != null && Le.call(b, Se) && ((Je = b.releasePointerCapture) == null || Je.call(b, Se));
      } catch {
      }
      b.style.cursor = "grab";
    }
    const Ie = ((Ke = H == null ? void 0 : H.cancelGesture) == null ? void 0 : Ke.call(H)) ?? !1;
    return E || Ie;
  }, Ae = () => A();
  H && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Ae));
  let Ne = null, U = !1;
  if (z && H)
    try {
      Oc(), Ne = _c(a ? P_ : __, {
        model: R,
        onAction: (E) => {
          var Le, Je;
          if ((E == null ? void 0 : E.type) === "open-editor") {
            A(), a || (R.aspectOpen = !1), (Le = e.__panoOpenEditor) == null || Le.call(e);
            return;
          }
          if (a) {
            if ((E == null ? void 0 : E.type) === "add-image-file") {
              q(E.file);
              return;
            }
            H.apply(E) && I();
            return;
          }
          if ((E == null ? void 0 : E.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((E == null ? void 0 : E.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let Se = E;
          if ((E == null ? void 0 : E.type) === "add-frame") {
            const Ke = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Se = {
              ...E,
              ...Q1(Ke, {
                width: b.width,
                height: b.height
              })
            };
          } else if ((E == null ? void 0 : E.type) === "delete-frame") {
            const Ke = Ai(Wn(e));
            Ke && (e.__panoPreviewView = ym(Ke, {
              width: b.width,
              height: b.height
            }));
          }
          const Ie = ((Je = e.__panoCutoutNodeFrame) == null ? void 0 : Je.safeRect) || null;
          R.aspectOpen = !1, H.apply({ ...Se, safeRect: Ie }) && I();
        }
      }), Ne.mount(z), U = !0;
    } catch {
      Ne = null, U = !1;
    }
  const je = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Xu(e, 150), I();
  }) : null;
  je == null || je.observe(M);
  const mt = (E) => {
    var Ie, Le;
    $.raf = 0, $.inTick = !0;
    let Se = !1;
    try {
      Se = nt.stepInertia(E), ($.needsDraw || Se) && ($.needsDraw = !1, (Ie = e.flags) != null && Ie.collapsed || lS(e, b, null, nt));
    } finally {
      $.inTick = !1;
    }
    (Se || $.needsDraw) && !$.raf && ($.raf = requestAnimationFrame(mt)), Ax() && (!e.__panoDebugLastTs || E - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = E, e.__panoPreviewMode, Ku(e), Ga(S), Ga(M), Ga(b), Ga(S.parentElement), Ga((Le = S.parentElement) == null ? void 0 : Le.parentElement), Number(b.width || 0), Number(b.height || 0), void 0);
  }, nt = Pc({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (E) => {
      e.__panoPreviewView = E;
    },
    getViewportSize: () => {
      const E = b.getBoundingClientRect();
      return {
        w: Math.max(1, Number(E.width || b.clientWidth || 0)),
        h: Math.max(1, Number(E.height || b.clientHeight || 0))
      };
    },
    getInvert: () => {
      const E = mh();
      return {
        x: E.invert_view_x ? -1 : 1,
        y: E.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      I();
    }
  }), Ye = a ? M : S, Ve = (E) => {
    const Se = b.getBoundingClientRect();
    return {
      x: (Number(E.clientX) - Se.left) * (b.width / Math.max(1, Se.width)),
      y: (Number(E.clientY) - Se.top) * (b.height / Math.max(1, Se.height))
    };
  }, qt = (E) => {
    var Le, Je;
    if (!a || !o) return;
    const Se = Wn(e), Ie = sh(
      Se == null ? void 0 : Se.stickers,
      String(((Le = Se == null ? void 0 : Se.active) == null ? void 0 : Le.selected_sticker_id) || ""),
      Ve(E),
      mo(e.__panoPreviewView, Se == null ? void 0 : Se.coverage),
      { width: b.width, height: b.height }
    );
    if (!Ie) {
      b.style.cursor = "grab";
      return;
    }
    if (((Je = Ie.item) == null ? void 0 : Je.locked) === !0) {
      b.style.cursor = "default";
      return;
    }
    b.style.cursor = Ie.hit.cursor || "default";
  };
  b.addEventListener("pointerdown", (E) => {
    var Ft, Gt, Kt, Ct, Tt, li, Ei, Fn, Mo, Ma, Po;
    if (!Bn(E, Ye) || E.button !== 0) return;
    if (!a) {
      const cn = Ai(Wn(e)), rn = e.__panoCutoutNodeFrame;
      if (!cn) {
        (Ft = S.focus) == null || Ft.call(S, { preventScroll: !0 }), (Gt = b.setPointerCapture) == null || Gt.call(b, E.pointerId), b.style.cursor = "grabbing", nt.startDrag(E.clientX, E.clientY, E.pointerId);
        return;
      }
      if (cn.locked === !0 || !rn || !H) return;
      const Di = Ve(E);
      let Rn;
      if (E.shiftKey) {
        const Rt = _m({
          frame: rn,
          point: Di,
          startRollDeg: Number(cn.roll_deg ?? cn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Rt) return;
        Rn = { kind: "roll", pointerId: E.pointerId, rollGesture: Rt };
      } else {
        const Rt = ((Kt = Wn(e)) == null ? void 0 : Kt.ui_settings) || mh();
        Rn = {
          kind: "pan",
          pointerId: E.pointerId,
          startPoint: Di,
          startShot: { ...cn },
          focalPx: Mi(rn, cn),
          invertX: Rt.invert_view_x === !0,
          invertY: Rt.invert_view_y === !0
        };
      }
      A(), (Ct = S.focus) == null || Ct.call(S, { preventScroll: !0 }), (Tt = b.setPointerCapture) == null || Tt.call(b, E.pointerId), b.style.cursor = "grabbing", H.beginGesture(), re = Rn;
      return;
    }
    if (!o) return;
    const Se = Ve(E), Ie = Wn(e), Le = String(((li = Ie == null ? void 0 : Ie.active) == null ? void 0 : li.selected_sticker_id) || ""), Je = mo(e.__panoPreviewView, Ie == null ? void 0 : Ie.coverage), Ke = sh(
      Ie == null ? void 0 : Ie.stickers,
      Le,
      Se,
      Je,
      { width: b.width, height: b.height }
    );
    if ((Ei = S.focus) == null || Ei.call(S, { preventScroll: !0 }), Ke && H) {
      if (nt.stopMotion(), A(), String(((Fn = Ke.item) == null ? void 0 : Fn.id) || "") !== Le && H.apply({ type: "select-sticker", id: Ke.item.id }), ((Mo = Ke.item) == null ? void 0 : Mo.locked) === !0) {
        I();
        return;
      }
      const cn = Se, rn = Ke.geometry.center;
      J = {
        active: !0,
        kind: Ke.hit.kind,
        pointerId: E.pointerId,
        startPoint: cn,
        startCenter: { ...rn },
        startSticker: { ...Ke.item },
        startDistance: Math.max(1, Math.hypot(cn.x - rn.x, cn.y - rn.y)),
        startAngle: Math.atan2(cn.y - rn.y, cn.x - rn.x),
        camera: Je,
        viewport: { width: b.width, height: b.height }
      }, e.__panoStickerDrag = J, H.beginGesture(), (Ma = b.setPointerCapture) == null || Ma.call(b, E.pointerId), b.style.cursor = Ke.hit.kind === "rotate" ? "grabbing" : Ke.hit.kind === "move" ? "move" : Ke.hit.cursor, I();
      return;
    }
    (Po = b.setPointerCapture) == null || Po.call(b, E.pointerId), b.style.cursor = "grabbing", nt.startDrag(E.clientX, E.clientY, E.pointerId);
  }), b.addEventListener("pointermove", (E) => {
    if (!a) {
      if (!re) {
        if (!nt.state.drag.active) return;
        Bn(E, Ye), nt.moveDrag(E.clientX, E.clientY, "pano");
        return;
      }
      if (re.pointerId !== E.pointerId || !H) return;
      if (Bn(E, Ye), re.kind === "pan") {
        const Ie = Ve(E);
        H.updateGesture({
          type: "pan-camera",
          startShot: re.startShot,
          dx: Ie.x - re.startPoint.x,
          dy: Ie.y - re.startPoint.y,
          focalPx: re.focalPx,
          invertX: re.invertX,
          invertY: re.invertY
        });
        return;
      }
      const Se = xm(re.rollGesture, Ve(E), E);
      if (!Se) return;
      re.rollGesture = Se.gesture, H.updateGesture({ type: "set-roll", value: Se.rollDeg });
      return;
    }
    if (!J && !nt.state.drag.active) {
      qt(E);
      return;
    }
    if (J) {
      if (J.pointerId !== E.pointerId || !H) return;
      Bn(E, Ye);
      const Se = Ve(E);
      let Ie = J.startSticker;
      if (J.kind === "move")
        Ie = R_(
          J.startSticker,
          {
            x: J.startCenter.x + Se.x - J.startPoint.x,
            y: J.startCenter.y + Se.y - J.startPoint.y
          },
          J.camera,
          J.viewport
        );
      else if (J.kind === "scale") {
        const Le = Math.hypot(Se.x - J.startCenter.x, Se.y - J.startCenter.y);
        Ie = L_(J.startSticker, J.startDistance, Le);
      } else if (J.kind === "rotate") {
        const Le = Math.atan2(Se.y - J.startCenter.y, Se.x - J.startCenter.x);
        Ie = z_(J.startSticker, J.startAngle, Le, E.shiftKey === !0);
      }
      H.updateGesture({ type: "set-transform", value: Ie }), I();
      return;
    }
    !o || !nt.state.drag.active || (Bn(E, Ye), nt.moveDrag(E.clientX, E.clientY, "pano"));
  });
  const An = () => {
    var Se, Ie;
    if (!re && !J) {
      if (!nt.state.drag.active) return;
      nt.endDrag(), b.style.cursor = "grab", I();
      return;
    }
    if (!H) return;
    const E = (re == null ? void 0 : re.pointerId) ?? (J == null ? void 0 : J.pointerId);
    re = null, J = null, e.__panoStickerDrag = null;
    try {
      (Se = b.hasPointerCapture) != null && Se.call(b, E) && ((Ie = b.releasePointerCapture) == null || Ie.call(b, E));
    } catch {
    }
    H.cancelGesture(), b.style.cursor = "grab", I();
  }, Sn = (E, Se = !1) => {
    var Ie, Le, Je, Ke;
    if (!a) {
      if (!re) {
        if (!nt.state.drag.active) return;
        Bn(E, Ye), (Ie = b.releasePointerCapture) == null || Ie.call(b, E.pointerId), b.style.cursor = "grab", nt.endDrag(), I();
        return;
      }
      if (re.pointerId !== E.pointerId || !H) return;
      Bn(E, Ye), re = null, (Le = b.releasePointerCapture) == null || Le.call(b, E.pointerId), b.style.cursor = "grab", Se ? H.cancelGesture() : H.commitGesture(), qt(E), I();
      return;
    }
    if (J) {
      if (J.pointerId !== E.pointerId || !H) return;
      Bn(E, Ye), J = null, e.__panoStickerDrag = null, (Je = b.releasePointerCapture) == null || Je.call(b, E.pointerId), b.style.cursor = "grab", Se ? H.cancelGesture() : H.commitGesture(), I();
      return;
    }
    !o || !nt.state.drag.active || (Bn(E, Ye), (Ke = b.releasePointerCapture) == null || Ke.call(b, E.pointerId), b.style.cursor = "grab", nt.endDrag(), dS(e), I());
  };
  b.addEventListener("pointerup", Sn), b.addEventListener("pointercancel", (E) => Sn(E, !0)), b.addEventListener("lostpointercapture", An), b.addEventListener("pointerleave", (E) => {
    !a && re || J || nt.state.drag.active && Sn(E);
  });
  const nn = (E) => {
    const Se = document.activeElement;
    if (Se !== S && !S.contains(Se)) return;
    if (E.key === "Escape" && (re || J) && H) {
      An(), Ju(E);
      return;
    }
    if (!a || E.key !== "Delete" && E.key !== "Backspace" || !H) return;
    const Ie = E.target, Le = String((Ie == null ? void 0 : Ie.tagName) || "").toUpperCase();
    Le === "INPUT" || Le === "TEXTAREA" || Ie != null && Ie.isContentEditable || R.canDelete === !0 && (A(), H.apply({ type: "delete-selected" }) && I(), Ju(E));
  };
  window.addEventListener("keydown", nn, !0);
  const un = Sx({
    requestFrame: (E) => requestAnimationFrame(E),
    cancelFrame: (E) => cancelAnimationFrame(E),
    restore: (E) => mS(E)
  }), L = (E) => {
    var Ie, Le, Je, Ke, Ft, Gt;
    if (!Bn(E, Ye)) return;
    if (!a) {
      const Kt = Ai(Wn(e));
      if (Kt && Kt.locked !== !0 && H) {
        const Ct = Mc(E);
        Ct !== 0 && (ce || (A(), H.beginGesture(), ce = !0), H.updateGesture({
          type: "step-fov",
          direction: Ct
        }) ? (de && clearTimeout(de), de = setTimeout(we, 180), I()) : H.hasGestureChanges() || (H.cancelGesture(), ce = !1));
      } else if (!Kt) {
        const Ct = kh();
        nt.applyWheelEvent(E) && I(), un.schedule(Ct);
      }
      (Ie = E.preventDefault) == null || Ie.call(E), (Le = E.stopPropagation) == null || Le.call(E), (Je = E.stopImmediatePropagation) == null || Je.call(E);
      return;
    }
    if (!o) return;
    const Se = kh();
    nt.applyWheelEvent(E) && I(), (Ke = E.preventDefault) == null || Ke.call(E), (Ft = E.stopPropagation) == null || Ft.call(E), (Gt = E.stopImmediatePropagation) == null || Gt.call(E), un.schedule(Se);
  }, V = a ? [M, b] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((E) => {
    V.forEach((Se) => Se.addEventListener(E, L, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((E) => {
    b.addEventListener(E, (Se) => Bn(Se, Ye)), M.addEventListener(E, (Se) => Bn(Se, Ye));
  });
  const te = ba(e, "state_json");
  let ye = null, he = null;
  te && !te.__panoPreviewPatchedCb && (ye = te.callback, he = (E) => {
    const Se = ye ? ye(E) : void 0;
    return I(), Se;
  }, te.callback = he, te.__panoPreviewPatchedCb = he);
  const D = ba(e, "bg_color");
  let Q = null, ee = null;
  D && !D.__panoPreviewPatchedCb && (Q = D.callback, ee = (E) => {
    const Se = Q ? Q(E) : void 0;
    return I(), Se;
  }, D.callback = ee, D.__panoPreviewPatchedCb = ee);
  const fe = e.onRemoved, ne = e.onResize, Me = e.onExecuted, ge = e.onDragOver, Ce = e.onDragDrop;
  let d = null;
  const De = () => {
    a && (R.dropActive = !0, d && clearTimeout(d), d = setTimeout(() => {
      d = null, R.dropActive = !1;
    }, 140));
  }, Re = a ? function(E) {
    return (ge ? ge.apply(this, arguments) : !1) === !0 ? !0 : Rc(E == null ? void 0 : E.dataTransfer) ? (De(), !0) : !1;
  } : null, Ue = a ? function(E) {
    var Le;
    if ((Ce ? Ce.apply(this, arguments) : !1) === !0) return !0;
    const Ie = Array.from(((Le = E == null ? void 0 : E.dataTransfer) == null ? void 0 : Le.files) || []).find((Je) => Sr(Je));
    return Ie ? (d && clearTimeout(d), d = null, R.dropActive = !1, q(Ie), !0) : !1;
  } : null;
  a && (e.onDragOver = Re, e.onDragDrop = Ue);
  const et = a ? xx(S, {
    onActive: (E) => {
      if (E) {
        De();
        return;
      }
      d && clearTimeout(d), d = null, R.dropActive = !1;
    },
    onDrop: (E) => {
      q(E);
    }
  }) : () => {
  }, gt = function(E) {
    Bx(e, E), e.__panoLastExecutedOutput = E || null, Ym(e), K_(e), se("executed", E), Wa(e), I();
    const Se = Me ? Me.apply(this, arguments) : void 0;
    return Wa(e), Se;
  };
  e.onExecuted = gt;
  const at = e.onConnectionsChange, oe = function(E, Se) {
    const Ie = uh(e, E, Se, ["sticker_image"]), Le = uh(
      e,
      E,
      Se,
      ["erp_image", "bg_erp"]
    ), Je = arguments, Ke = at ? at.apply(this, Je) : void 0, Ft = () => {
      $.destroyed || ((Le || Ie) && (Le && (lh(e, "background"), Wx(e)), Ie && (lh(e, "external-sticker"), e.__panoLastExecutedOutput = null, Yx(e))), Ie && se("connection-change"), Wa(e), I());
    };
    return Ft(), queueMicrotask(Ft), Ke;
  };
  e.onConnectionsChange = oe;
  const Xt = function() {
    const E = ne ? ne.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Xu(this, 150), I(), E;
  };
  e.onResize = Xt;
  const Nt = function() {
    return Ge(), Yu.unregister(this), fe ? fe.apply(this, arguments) : void 0;
  };
  e.onRemoved = Nt;
  const Ge = () => {
    var E, Se, Ie, Le, Je, Ke, Ft, Gt, Kt, Ct, Tt;
    $.destroyed = !0, (E = je == null ? void 0 : je.disconnect) == null || E.call(je), a ? A() : xe(), b.removeEventListener("lostpointercapture", An), et(), j(), window.removeEventListener("keydown", nn, !0), (Ie = (Se = e.__panoStateFlushers) == null ? void 0 : Se.delete) == null || Ie.call(Se, Ae), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Le = H == null ? void 0 : H.destroy) == null || Le.call(H), (Je = Ne == null ? void 0 : Ne.unmount) == null || Je.call(Ne), (Ft = (Ke = e.__panoRuntimeCore) == null ? void 0 : Ke.dispose) == null || Ft.call(Ke), e.__panoRuntimeCore = null, (Kt = (Gt = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Gt.dispose) == null || Kt.call(Gt), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ie(), un.dispose(), d && clearTimeout(d), d = null, Lc.disposeOwner(e), ya(e), $.raf && cancelAnimationFrame($.raf), $.raf = 0, ((Ct = e.__panoCutoutNodeSurface) == null ? void 0 : Ct.session) === H && (e.__panoCutoutNodeSurface = null), ((Tt = e.__panoStickersNodeSurface) == null ? void 0 : Tt.session) === H && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Xt && (e.onResize = ne), e.onExecuted === gt && (e.onExecuted = Me), e.onConnectionsChange === oe && (e.onConnectionsChange = at), he && (te == null ? void 0 : te.callback) === he && (te.callback = ye), he && (te == null ? void 0 : te.__panoPreviewPatchedCb) === he && delete te.__panoPreviewPatchedCb, ee && (D == null ? void 0 : D.callback) === ee && (D.callback = Q), ee && (D == null ? void 0 : D.__panoPreviewPatchedCb) === ee && delete D.__panoPreviewPatchedCb, e.onDragOver === Re && (e.onDragOver = ge), e.onDragDrop === Ue && (e.onDragDrop = Ce), e.onRemoved === Nt && (e.onRemoved = fe);
  };
  e.__panoDomRestore = Ge, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = H && U && !a ? { session: H, model: R } : null, e.__panoStickersNodeSurface = H && U && a ? { session: H, model: R } : null, e.__panoDomPreview = {
    widget: P,
    root: S,
    canvas: b,
    requestDraw: I,
    state: $,
    emptyHintEl: O,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Yu.register(e), se("attach"), I();
}
function Mh(e, t = {}) {
  Hm(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Ph(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Vm(e) && !n) {
    zc(e);
    return;
  }
  Hm(e).attach(t);
}
function _S(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function xS(e, t = 1) {
  const n = Number(t), r = Number.isFinite(n) && n > 0 ? n : 1, a = Number(e == null ? void 0 : e.width), o = Number(e == null ? void 0 : e.height);
  return {
    width: Math.max(1, Math.round((Number.isFinite(a) ? a : 0) * r)),
    height: Math.max(1, Math.round((Number.isFinite(o) ? o : 0) * r))
  };
}
function SS({
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
  }, v = () => g();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", v), g(), { toggle: async () => {
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
    var b, O, j;
    if (!c) {
      if (c = !0, (b = t == null ? void 0 : t.removeEventListener) == null || b.call(t, "fullscreenchange", v), h())
        try {
          const z = (O = t.exitFullscreen) == null ? void 0 : O.call(t);
          (j = z == null ? void 0 : z.catch) == null || j.call(z, () => {
          });
        } catch {
        }
      f = !1, a(!1);
    }
  } };
}
const wS = { class: "pano-preview-node-surface" }, kS = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ke(), Pe("div", wS, [
      $e(tn, {
        icon: e.model.fullscreen ? pt(Te).fullscreen_close : pt(Te).fullscreen,
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
}, is = 140, NS = 180, Ah = 40, bu = 10;
function Ch(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Th(e, t) {
  const n = Ch(e), r = Ch(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ih(e) {
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
  return typeof ((o = bn) == null ? void 0 : o.apiURL) == "function" ? bn.apiURL(a) : a;
}
function va(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return va(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Ih({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ih(e);
}
function Qm(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function MS(e) {
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
function Zu(e) {
  var a;
  const t = (a = nr) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Th(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Th(o, n)) return t[o];
  return null;
}
function PS(e) {
  var r, a;
  const t = Zu(e == null ? void 0 : e.id), n = [
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
function AS(e, t = "erp_image") {
  var b, O, j, z, P, $, I, R, G, H, se, ie;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const a = n.find((T) => String((T == null ? void 0 : T.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const T = n.find((q) => String((q == null ? void 0 : q.type) || "").toUpperCase() === "IMAGE" && (q == null ? void 0 : q.link) != null);
    (T == null ? void 0 : T.link) != null && (r = T.link);
  }
  if (r == null) return "";
  const o = ((O = (b = e == null ? void 0 : e.graph) == null ? void 0 : b.links) == null ? void 0 : O[r]) || ((P = (z = (j = nr) == null ? void 0 : j.graph) == null ? void 0 : z.links) == null ? void 0 : P[r]);
  if (!o) return "";
  const c = Number(o.origin_id);
  if (!Number.isFinite(c)) return "";
  const f = (R = (I = ($ = nr) == null ? void 0 : $.graph) == null ? void 0 : I.getNodeById) == null ? void 0 : R.call(I, c), h = Zu(c), g = Zu(e == null ? void 0 : e.id), v = [
    (G = g == null ? void 0 : g.ui) == null ? void 0 : G.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    h == null ? void 0 : h.images,
    (H = h == null ? void 0 : h.ui) == null ? void 0 : H.pano_input_images,
    h == null ? void 0 : h.pano_input_images
  ];
  for (const T of v)
    if (Array.isArray(T))
      for (const q of T) {
        const re = va(q);
        if (re) return re;
      }
  let x = [];
  try {
    x = typeof ((se = nr) == null ? void 0 : se.getNodeImageUrls) == "function" ? nr.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const T of x) {
      const q = va(T);
      if (q) return q;
    }
  if (f) {
    const T = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const q of T) {
      const re = va(q);
      if (re) return re;
    }
  }
  const S = (ie = f == null ? void 0 : f.widgets) == null ? void 0 : ie.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image"), M = String((S == null ? void 0 : S.value) || "").trim();
  return M ? bn.apiURL(`/view?filename=${encodeURIComponent(M)}&type=input&subfolder=`) : "";
}
function Eh(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Dh(e, t, n, r, a, o) {
  var S, M, b;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Qm(o) || n <= 1 || r <= 1) {
    Eh(t, n, r);
    return;
  }
  const c = No(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * _n * 0.5), h = Number(((b = (M = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : M.call(S, (O) => (O == null ? void 0 : O.name) === "coverage")) == null ? void 0 : b.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = ko());
  const g = MS(o), v = em({
    stateRevision: [
      "standalone_preview_scene",
      g,
      h
    ].join("|"),
    backgroundSource: o,
    backgroundRevision: g,
    coverageDeg: h,
    scene: fl(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(v) && (() => {
    const O = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      W1(a, h),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return O ? (t.drawImage(O, 0, 0, n, r), !0) : !1;
  })() || (uS(e, t, { x: 0, y: 0, w: n, h: r }, c, f, o, wx), Eh(t, n, r));
}
function Oh(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class CS {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Pc({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ut(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${is}px`,
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
          return is;
        },
        getHeight() {
          return is;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Ws(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      ), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const o = r ? r(a) || {} : {};
          return {
            ...o,
            minHeight: Math.max(is, Number(o.minHeight || 0)),
            minWidth: Math.max(NS, Number(o.minWidth || 0))
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
      return Oc(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ka({ fullscreen: !1 }), this.fullscreenController = SS({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, h;
          return (h = (f = this.options).onOpen) == null ? void 0 : h.call(f, this.node);
        }
      }), this.surfaceApp = _c(kS, {
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
    (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = nm(n), t.addEventListener("pointerdown", (o) => {
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
      _S(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Qm(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Oh(a.x, a.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - o.x, a.y - o.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var h, g, v, x, S, M;
      const o = tS(this, n, r, a), c = t.getLegacyPreviewRect();
      if (!o || !Oh(o.x, o.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((h = t.view) == null ? void 0 : h.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((g = t.view) == null ? void 0 : g.fov) || 100), f && ((v = this.setDirtyCanvas) == null || v.call(this, !0, !1)), (x = n == null ? void 0 : n.preventDefault) == null || x.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, o, c;
    const t = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - bu * 2), n = Math.max(60, Number(((c = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : c[1]) || 0) - Ah - bu);
    return { x: bu, y: Ah, w: t, h: n };
  }
  drawLegacy(t) {
    var r, a;
    if (!t || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), Dh(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = xS(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var a, o, c;
    const t = PS(this.node);
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
    const n = AS(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Dh(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (a = this.node).setDirtyCanvas) == null || o.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, a, o, c, f, h, g, v, x, S, M, b, O, j, z, P, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null, (c = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || c.call(o), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (g = (h = this.surfaceApp) == null ? void 0 : h.unmount) == null || g.call(h), this.surfaceApp = null, (x = (v = this.surfaceHost) == null ? void 0 : v.remove) == null || x.call(v), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (b = (M = this.root) == null ? void 0 : M.remove) == null || b.call(M);
    } catch {
    }
    try {
      $m(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((z = (j = (O = this.node) == null ? void 0 : O.widgets) == null ? void 0 : j.find) == null ? void 0 : z.call(j, (I) => (I == null ? void 0 : I.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), ($ = (P = this.node.__panoStandaloneCore) == null ? void 0 : P.dispose) == null || $.call(P), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function TS(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new CS(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function eg(e, t, n) {
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
function jc(e) {
  return !!(e != null && e.prototype);
}
function yo(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function IS(e, t = {}) {
  jc(e) || TS(e, {
    ...t,
    onOpen: yo(e, t.onOpen)
  });
}
function ES(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!jc(e)) {
    Ph(e, {
      ...r,
      onOpen: yo(e, t.onOpen)
    });
    return;
  }
  eg(e, "stickers_node_preview", (a) => {
    Ph(a, {
      ...r,
      onOpen: yo(a, t.onOpen)
    });
  });
}
function DS(e, t = {}) {
  if (!jc(e)) {
    Mh(e, {
      ...t,
      onOpen: yo(e, t.onOpen)
    });
    return;
  }
  eg(e, "cutout_preview", (n) => {
    Mh(n, {
      ...t,
      onOpen: yo(n, t.onOpen)
    });
  });
}
const En = {
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
}, Dr = "pen";
function Fh(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function OS(e = 80, t = null, n = 8) {
  const r = [];
  let a = -1;
  const o = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(g) {
    if (r.splice(0, r.length), a = -1, !g || typeof g != "object" || !Array.isArray(g.entries) || (g.entries.forEach((x) => {
      r.push(String(x || ""));
    }), !r.length)) return;
    const v = Number(g.index);
    Number.isInteger(v) ? v === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, v)) : a = r.length - 1;
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
      const g = r.length, v = Math.max(0, g - c), x = a >= 0 ? Math.max(0, Math.min(a, v)) : v, S = r.slice(x, x + c), M = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - x));
      return {
        version: 1,
        entries: S,
        index: M
      };
    },
    hydrate: f
  };
}
function Rh(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function FS(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: W(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: W(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Lh(e = {}, t = 0) {
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
  return n === "sticker" ? (r.transform = FS((e == null ? void 0 : e.transform) || e), r.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (r.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, r.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), r;
}
function RS(e = {}) {
  var r, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Sa({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Rh((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((r = e == null ? void 0 : e.objectPass) == null ? void 0 : r.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((o, c) => Lh(o, c)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Rh((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((o, c) => Lh(o, c)).filter(Boolean);
  return Sa({
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
function vo(e = {}) {
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
function Js(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function LS(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || ko((e == null ? void 0 : e.coreOptions) || {});
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
    const S = RS(x), M = o(S);
    return a === M || !n.syncState(S) ? !1 : (r = S, a = M, !0);
  }
  function f(x = {}, S = {}) {
    if (!r) return null;
    const M = vo(x), b = Js(S);
    return n.renderToTarget(t, M, b);
  }
  function h(x, S, M = {}, b = {}) {
    if (!x || !S || !r) return !1;
    const O = vo(M), j = Js({
      ...b,
      width: Number((S == null ? void 0 : S.w) || (b == null ? void 0 : b.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (b == null ? void 0 : b.height) || 1)
    });
    return n.renderToContext(x, S, O, j);
  }
  function g() {
    var x;
    r = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function v() {
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
    dispose: v
  };
}
function zS(e, t, n) {
  return new Promise((r, a) => {
    e.toBlob((o) => {
      o ? r(o) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function $S(e, t = {}) {
  var h, g;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = vo((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), r = (t == null ? void 0 : t.output) || ((h = t == null ? void 0 : t.camera) == null ? void 0 : h.output) || ((g = t == null ? void 0 : t.view) == null ? void 0 : g.output) || null, a = Js(
    r || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), o = e.renderFrame(n, a);
  if (!o) throw new Error("Panorama scene camera render returned null.");
  const c = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return zS(o, c, f);
}
function jS(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const r = document.createElement("canvas");
  r.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), r.style.width = "100%", r.style.height = "100%", r.style.display = "block", t.appendChild(r);
  const a = r.getContext("2d");
  let o = vo((n == null ? void 0 : n.view) || {}), c = !1, f = 0;
  function h() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || r.clientWidth || 1), M = Number((n == null ? void 0 : n.height) || t.clientHeight || r.clientHeight || 1), b = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), O = Js({ width: S, height: M, dpr: b });
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
  function v() {
    c || f || (f = requestAnimationFrame(() => {
      f = 0, g();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => v()) : null;
  return x == null || x.observe(t), v(), {
    canvas: r,
    setView(S) {
      o = vo(S || {}), v();
    },
    getView() {
      return { ...o };
    },
    present: g,
    requestRender: v,
    unmount() {
      c = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), r.remove();
    }
  };
}
function VS(e = {}) {
  const t = LS({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, r = {}) {
      return t.renderFrame(vr(n), r);
    },
    renderShotToContext(n, r, a, o = {}) {
      return t.renderToContext(n, r, vr(a), o);
    },
    mount(n, r = {}) {
      const a = r != null && r.shot ? vr(r.shot) : r == null ? void 0 : r.view;
      return jS(t, n, { ...r, view: a });
    },
    exportFrame(n = {}) {
      const r = n != null && n.shot ? { ...n, camera: vr(n.shot) } : n;
      return $S(t, r);
    }
  };
}
function na(e, t, n, r) {
  const a = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function HS(e = {}) {
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
function US({
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
  var $, I;
  const g = e.primaryTool === "paint" || e.primaryTool === "mask", v = {
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
    historyEntries: Array.from({ length: 8 }, (R, G) => ({ index: G, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!g) return v;
  const x = (($ = t.find((R) => a(e.paintColor, R.color))) == null ? void 0 : $.id) || "", S = !x, M = o(e.customPaintColor), b = Math.round(Math.max(0, Math.min(1, Number(((I = e.customPaintColor) == null ? void 0 : I.a) ?? 1))) * 100), O = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), j = e.brushSizes[O] ?? 10, z = h(), P = Array.from({ length: 8 }, (R, G) => e.customPaintHistory[G] || null);
  return {
    ...v,
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
    historyEntries: P.map((R, G) => ({
      index: G,
      color: R ? { cssColor: r(R, 1) } : null
    })),
    sizeValue: j,
    sizeText: String(j),
    sizeFill: `${Math.max(0, Math.min(100, (j - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function BS({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function GS({
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
  normalizeCoverageValue: v
}) {
  return {
    coverage: { value: v(e), disabled: !!t },
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
function KS({
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
  isExternalSticker: v,
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
    ], v(t) || (b.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), b.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), v(t)) {
      const G = S(), H = x(t);
      b.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: G ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !G
      }), b.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? M.eye : M.eye_dashed
      });
    }
    b.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed }), v(t) || b.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f });
  } else
    b = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!g,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((G) => ({ value: G, label: G, active: h === G }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  const O = a.corners.map((G) => ({ x: Number(G == null ? void 0 : G.x), y: Number(G == null ? void 0 : G.y) })).filter((G) => Number.isFinite(G.x) && Number.isFinite(G.y));
  if (!O.length) return { visible: !1, left: 0, top: 0, items: [] };
  const j = O.map((G) => G.x), z = O.map((G) => G.y), P = Math.min(...j), $ = Math.max(...j), I = Math.min(...z), R = Math.max(...z);
  return {
    visible: !0,
    left: (P + $) * 0.5,
    top: R + 18,
    items: b,
    anchor: { minX: P, maxX: $, minY: I, maxY: R }
  };
}
const WS = { class: "pano-floating-right" }, YS = ["data-settled"], qS = ["data-ready", "data-settled"], XS = ["aria-label", "data-tip"], JS = {
  key: 1,
  class: "pano-camera-preview-label"
}, ZS = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Pe(ot, null, [
      X("div", WS, [
        (ke(!0), Pe(ot, null, jt(e.buttons, (r) => (ke(), Ii(tn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Si(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: ft(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Bt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = X("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (ke(), Pe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            $e(en, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, XS)) : zt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ke(), Pe("div", JS, ct(e.preview.label || "Preview unavailable"), 1)) : zt("", !0)
        ], 14, qS)
      ], 8, YS), [
        [wo, e.preview.visible]
      ])
    ], 64));
  }
}, QS = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, ew = ["y2", "transform"], tw = ["transform"], nw = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, o) => o * 15), r = wt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, o) => Si((ke(), Pe("div", {
      class: ft(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ke(), Pe("svg", QS, [
        o[1] || (o[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ke(!0), Pe(ot, null, jt(pt(n), (c) => (ke(), Pe("line", {
          key: c,
          class: ft(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, ew))), 128)),
        X("g", { transform: r.value }, [...o[0] || (o[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, tw),
        o[2] || (o[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [wo, e.model.visible === !0]
    ]);
  }
}, rw = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Pe("div", {
      class: ft(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      $e(wm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      $e(tn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      $e(nw, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, iw = ["aria-label"], aw = { class: "pano-canvas-confirm-title" }, ow = { class: "pano-canvas-confirm-text" }, sw = { class: "pano-canvas-confirm-actions" }, lw = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, uw = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ vn(null), r = /* @__PURE__ */ vn(null);
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
      var z;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const S = o(), M = r.value;
      if (!S.length) {
        x.preventDefault(), (z = M == null ? void 0 : M.focus) == null || z.call(M);
        return;
      }
      const b = S[0], O = S[S.length - 1], j = document.activeElement;
      if (x.shiftKey) {
        (j === b || j === M || !(M != null && M.contains(j))) && (x.preventDefault(), O.focus());
        return;
      }
      (j === O || !(M != null && M.contains(j))) && (x.preventDefault(), b.focus());
    }
    function v(x) {
      x.target === n.value && c("confirm-cancel");
    }
    return wi(() => t.model.visible, (x, S) => {
      if (x) {
        a = document.activeElement, hc(() => {
          f();
        });
        return;
      }
      S && h();
    }, { immediate: !0 }), sl(() => {
      h();
    }), (x, S) => e.model.visible === !0 ? (ke(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Hn(v, ["self"])
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
        X("div", aw, ct(e.model.title), 1),
        X("div", ow, ct(e.model.text), 1),
        X("div", sw, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", lw, ct(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, iw)
    ], 512)) : zt("", !0);
  }
}, cw = ["data-paint-pane"], fw = ["hidden"], dw = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], hw = ["aria-pressed", "disabled"], pw = ["hidden"], mw = { class: "pano-paint-color-pop-head" }, gw = { class: "pano-paint-color-field" }, bw = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, yw = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, vw = { class: "pano-paint-color-field" }, _w = { class: "pano-paint-alpha-wrap" }, xw = ["value"], Sw = { "data-paint-alpha-value": "" }, ww = ["hidden"], kw = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Nw = ["data-paint-history-index", "aria-label", "disabled"], Mw = ["data-paint-footer"], Pw = ["data-paint-group"], Aw = ["hidden"], Cw = ["value", "disabled"], Tw = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Iw = ["hidden"], Ew = {
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
    return (r, a) => (ke(), Pe("div", {
      class: ft(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ke(!0), Pe(ot, null, jt(e.panes, (o) => {
        var c;
        return ke(), Pe("div", {
          key: o.key,
          class: ft(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (ke(), Pe("div", {
            key: 0,
            class: ft(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ke(!0), Pe(ot, null, jt(e.paintSwatches, (f) => (ke(), Pe("button", {
              key: f.id,
              class: ft(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Bt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, dw))), 128)),
            X("button", {
              class: ft(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Bt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, hw),
            X("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Bt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              X("div", mw, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Bt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", gw, [
                X("div", bw, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Bt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", yw, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Bt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", vw, [
                a[1] || (a[1] = X("span", null, "Opacity", -1)),
                X("div", _w, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, xw),
                  X("span", Sw, ct(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", kw, [
                  (ke(!0), Pe(ot, null, jt(e.state.historyEntries || [], (f) => (ke(), Pe("button", {
                    key: f.index,
                    class: ft(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Bt(n(f.color))
                  }, null, 14, Nw))), 128))
                ])
              ], 8, ww)
            ], 12, pw)
          ], 10, fw)) : zt("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (ke(!0), Pe(ot, null, jt(o.tools, (f) => {
                var h;
                return ke(), Ii(tn, {
                  key: `${o.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((h = e.state.activeTools) == null ? void 0 : h[o.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Pw),
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
                style: Bt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Cw),
              X("span", Tw, ct(e.state.sizeText || "10"), 1)
            ], 10, Aw),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[o.key]) ?? !o.clearHidden)
            }, [
              $e(tn, {
                icon: pt(Te).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Iw)
          ], 8, Mw)
        ], 10, cw);
      }), 128))
    ], 2));
  }
}, Dw = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ vn(null), r = /* @__PURE__ */ vn(null), a = /* @__PURE__ */ vn(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: a.value
      };
    }
    return t({ getRefs: o }), (c, f) => (ke(), Pe(ot, null, [
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
}, Ow = {
  key: 0,
  class: "pano-cutout-menu"
}, Fw = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Rw = ["data-aspect"], Lw = ["data-action", "aria-label", "data-tip", "disabled"], zw = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Bt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ke(!0), Pe(ot, null, jt(e.model.items || [], (r) => (ke(), Pe(ot, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ke(), Pe("div", Ow, [
          X("button", Fw, [
            $e(en, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: ft(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ke(!0), Pe(ot, null, jt(r.choices || [], (a) => (ke(), Pe("button", {
              key: a.value,
              class: ft(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ct(a.label), 11, Rw))), 128))
          ], 2)
        ])) : (ke(), Pe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          $e(en, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, Lw))
      ], 64))), 128))
    ], 4));
  }
}, $w = {
  class: "pano-side",
  "data-side": ""
}, jw = { class: "pano-side-head" }, Vw = { class: "pano-side-title" }, Hw = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Uw = {
  key: 0,
  class: "pano-side-scroll"
}, Bw = { class: "pano-inspector" }, Gw = { class: "pano-ui-row pano-coverage-row" }, Kw = ["data-selected"], Ww = ["aria-pressed", "disabled"], Yw = ["aria-pressed", "disabled"], qw = {
  key: 0,
  class: "pano-section-title"
}, Xw = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Jw = {
  class: "pano-picker",
  "data-picker": "selection"
}, Zw = ["disabled"], Qw = { class: "pano-picker-label" }, ek = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, tk = ["hidden"], nk = ["data-selection-id"], rk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, ik = {
  key: 2,
  class: "pano-state-actions"
}, ak = ["disabled"], ok = ["data-key"], sk = ["min", "max", "step", "value", "disabled", "data-param-key"], lk = ["min", "max", "step", "value", "disabled", "data-param-key"], uk = { class: "pano-visibility-section" }, ck = { class: "pano-visibility-stack" }, fk = ["data-visibility-row"], dk = { class: "pano-visibility-name" }, hk = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, pk = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], mk = ["open"], gk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, bk = { class: "pano-ui-settings-body" }, yk = { class: "pano-ui-row" }, vk = ["data-selected"], _k = ["aria-pressed"], xk = ["aria-pressed"], Sk = { class: "pano-ui-row" }, wk = ["data-selected"], kk = ["aria-pressed"], Nk = ["aria-pressed"], Mk = { class: "pano-ui-row" }, Pk = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Ak = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, Ck = { class: "pano-picker-label" }, Tk = ["hidden"], Ik = ["data-quality"], Ek = {
  key: 1,
  class: "pano-side-footer"
}, Dk = ["data-action"], Ok = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = wt(() => {
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
      var f, h, g, v, x;
      return ke(), Pe("div", $w, [
        X("div", jw, [
          X("div", Vw, [
            X("span", Hw, [
              $e(en, {
                icon: pt(Te).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, ct(e.nodeTitle), 1)
          ]),
          c[0] || (c[0] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        c[13] || (c[13] = X("div", { class: "pano-divider" }, null, -1)),
        n.value ? (ke(), Pe("div", Uw, [
          X("div", Bw, [
            c[12] || (c[12] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", Gw, [
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
                }, "360", 8, Ww),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, Yw)
              ], 8, Kw)
            ]),
            e.model.transformTitle !== !1 ? (ke(), Pe("div", qw, [...c[2] || (c[2] = [
              X("span", null, "Transform", -1)
            ])])) : zt("", !0),
            e.model.selectionPicker ? (ke(), Pe("div", Xw, [
              X("label", null, ct(e.model.selectionPicker.label), 1),
              X("div", Jw, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", Qw, [
                    e.model.selectionPicker.currentIcon ? (ke(), Pe("span", ek, [
                      $e(en, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : zt("", !0),
                    X("span", null, ct(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  c[3] || (c[3] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Zw),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ke(!0), Pe(ot, null, jt(e.model.selectionPicker.items || [], (S) => (ke(), Pe("button", {
                    key: S.id,
                    type: "button",
                    class: ft(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (ke(), Pe("span", rk, [
                      $e(en, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : zt("", !0),
                    X("span", null, ct(S.label), 1)
                  ], 10, nk))), 128))
                ], 8, tk)
              ])
            ])) : zt("", !0),
            e.model.copyStateButton ? (ke(), Pe("div", ik, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                $e(en, {
                  icon: pt(Te).copy
                }, null, 8, ["icon"]),
                X("span", null, ct(e.model.copyStateButton.label), 1)
              ], 8, ak)
            ])) : zt("", !0),
            X("div", {
              class: ft(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ke(!0), Pe(ot, { key: 0 }, jt(e.model.notes, (S) => (ke(), Pe("div", {
                key: S,
                class: "pano-param-note"
              }, ct(S), 1))), 128)) : (ke(!0), Pe(ot, { key: 1 }, jt(e.model.params || [], (S) => (ke(), Pe("div", {
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
                  style: Bt(r(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, sk),
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
                }, null, 8, lk)
              ], 8, ok))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (ke(), Pe(ot, { key: 3 }, [
              c[5] || (c[5] = X("div", { class: "pano-divider" }, null, -1)),
              X("div", uk, [
                c[4] || (c[4] = X("div", { class: "pano-section-title" }, [
                  X("span", null, "Layers")
                ], -1)),
                X("div", ck, [
                  (ke(!0), Pe(ot, null, jt(e.model.visibilityRows, (S) => (ke(), Pe("div", {
                    key: S.key,
                    class: ft(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    X("span", dk, [
                      X("span", hk, [
                        $e(en, {
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
                      $e(en, {
                        icon: S.visible === !0 ? pt(Te).eye : pt(Te).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, pk)
                  ], 10, fk))), 128))
                ])
              ])
            ], 64)) : zt("", !0),
            e.model.uiSettings ? (ke(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                c[6] || (c[6] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", gk, [
                  $e(en, {
                    icon: pt(Te).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", bk, [
                X("div", yk, [
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
                    }, "Normal", 8, _k),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, xk)
                  ], 8, vk)
                ]),
                X("div", Sk, [
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
                    }, "Normal", 8, kk),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, Nk)
                  ], 8, wk)
                ]),
                X("div", Mk, [
                  c[10] || (c[10] = X("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  X("div", Pk, [
                    X("button", Ak, [
                      X("span", Ck, ct(e.model.uiSettings.qualityLabel), 1),
                      c[9] || (c[9] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    X("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (ke(!0), Pe(ot, null, jt(e.model.uiSettings.qualityOptions || [], (S) => (ke(), Pe("button", {
                        key: S.value,
                        type: "button",
                        class: ft(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ct(S.label), 11, Ik))), 128))
                    ], 8, Tk)
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
            ], 8, mk)) : zt("", !0)
          ])
        ])) : zt("", !0),
        (e.model.footerButtons || []).length ? (ke(), Pe("div", Ek, [
          (ke(!0), Pe(ot, null, jt(e.model.footerButtons, (S) => (ke(), Pe("button", {
            key: S.action,
            class: ft(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ct(S.label), 11, Dk))), 128))
        ])) : zt("", !0)
      ]);
    };
  }
}, Fk = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Pe("div", {
      class: ft(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Bt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ct(e.model.text || ""), 7));
  }
}, Rk = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Lk = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ke(), Pe("div", Rk, [
      (ke(!0), Pe(ot, null, jt(e.buttons, (r) => Si((ke(), Ii(tn, {
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
        [wo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, zk = ["data-video-ready"], $k = { class: "pano-video-transport-shell" }, jk = { class: "pano-video-controls-left" }, Vk = { class: "pano-video-filmstrip" }, Hk = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, Uk = ["src", "onLoad"], Bk = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Gk = ["max", "value", "disabled"], Kk = { class: "pano-video-controls-right" }, Wk = ["data-has-audio"], Yk = { class: "pano-video-volume-pop" }, qk = ["value", "disabled"], Xk = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = wt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? "Pause" : "Play";
    }), r = wt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? "Pause video" : "Play video";
    }), a = wt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.playing) === !0 ? Te.pause : Te.play;
    }), o = wt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = wt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = wt(() => {
      var R;
      return ((R = t.state) == null ? void 0 : R.loop) === !1 ? Te.loop_off : Te.loop;
    }), h = wt(() => {
      var R, G;
      return ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), g = wt(() => {
      var R, G, H;
      return ((R = t.state) == null ? void 0 : R.hasAudio) !== !0 ? Te.volume : ((G = t.state) == null ? void 0 : G.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? Te.volume_muted : Te.volume2;
    }), v = wt(() => {
      var R;
      return Math.max(0, Math.min(100, Number(((R = t.state) == null ? void 0 : R.progressPct) || 0)));
    }), x = wt(() => ({ left: `${v.value}%` })), S = wt(() => {
      var se, ie;
      const R = (se = t.state) == null ? void 0 : se.volumePct, G = Number(((ie = t.state) == null ? void 0 : ie.volume) ?? 1) * 100, H = Number(R ?? G ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), M = wt(() => {
      var H, se;
      const G = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((se = t.state) == null ? void 0 : se.durationLabel) || "0:00")
      ].reduce((ie, T) => Math.max(ie, T.length), 4);
      return `${Math.max(4, G)}ch`;
    }), b = wt(() => ({ "--pano-video-time-ch": M.value })), O = wt(() => {
      var H, se;
      const R = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (R.length) return R;
      const G = Math.max(7, Number(((se = t.state) == null ? void 0 : se.thumbnailCount) || 9));
      return Array.from({ length: G }, (ie, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), j = /* @__PURE__ */ vn(/* @__PURE__ */ new Set()), z = (R) => String((R == null ? void 0 : R.id) || (R == null ? void 0 : R.src) || (R == null ? void 0 : R.label) || ""), P = (R) => j.value.has(z(R)), $ = (R) => {
      const G = new Set(j.value);
      G.add(z(R)), j.value = G;
    };
    wi(O, (R) => {
      const G = new Set(R.map(z)), H = /* @__PURE__ */ new Set();
      for (const se of j.value)
        G.has(se) && H.add(se);
      j.value = H;
    }, { immediate: !0 });
    const I = wt(() => {
      var R;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((R = t.state) == null ? void 0 : R.shellMaxWidthPx) || 640))}px`
      };
    });
    return (R, G) => (ke(), Pe("div", {
      class: ft(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Bt(I.value)
    }, [
      G[1] || (G[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", $k, [
        X("div", jk, [
          $e(tn, {
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
            style: Bt(b.value)
          }, ct(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", Vk, [
          X("div", Hk, [
            (ke(!0), Pe(ot, null, jt(O.value, (H) => (ke(), Pe("div", {
              key: z(H),
              class: ft(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && P(H)
              }])
            }, [
              H.src ? (ke(), Pe("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (se) => $(H)
              }, null, 40, Uk)) : (ke(), Pe("span", Bk))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Bt(x.value),
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
          }, null, 8, Gk)
        ]),
        X("div", Kk, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Bt(b.value)
          }, ct(e.state.durationLabel || "0:00"), 5),
          $e(tn, {
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
            X("div", Yk, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Bt(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, qk)
            ]),
            $e(tn, {
              "extra-class": "pano-video-control",
              icon: g.value,
              label: h.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Wk)
        ])
      ])
    ], 14, zk));
  }
}, Jk = { class: "pano-floating-top" }, Zk = ["data-selected", "data-view-count"], Qk = ["data-view", "aria-pressed", "aria-label", "disabled"], eN = { class: "label" }, tN = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ke(), Pe("div", Jk, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ke(!0), Pe(ot, null, jt(e.buttons, (a) => Si((ke(), Pe("button", {
            key: a.key,
            class: ft(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            $e(en, {
              icon: a.icon
            }, null, 8, ["icon"]),
            X("span", eN, ct(a.label), 1)
          ], 10, Qk)), [
            [wo, a.visible !== !1]
          ])), 128))
        ], 8, Zk)
      ]);
    };
  }
};
function tg(e = "stickers") {
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
const nN = ["aria-label"], rN = { class: "pano-stage-wrap" }, iN = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, aN = {
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
    const h = /* @__PURE__ */ vn(null), g = /* @__PURE__ */ vn(null), v = /* @__PURE__ */ vn(null);
    function x() {
      var T, q;
      return ((q = (T = v.value) == null ? void 0 : T.getRefs) == null ? void 0 : q.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(T) {
      var q, re;
      return ((re = (q = g.value) == null ? void 0 : q.open) == null ? void 0 : re.call(q, T)) === !0;
    }
    function M(T) {
      a("image-file-selected", T);
    }
    function b(T) {
      a("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: S });
    const O = wt(() => r.readOnly === !0), j = wt(() => r.shellPreset || tg(r.type)), z = wt(() => {
      var q, re, J;
      const T = String((((q = r.uiState) == null ? void 0 : q.stageStatus) === "failed" ? (re = r.uiState) == null ? void 0 : re.stageStatusDetail : (J = r.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Re-run the node to refresh it." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), P = wt(() => {
      var q;
      const T = Array.isArray((q = j.value) == null ? void 0 : q.floatingButtons) ? j.value.floatingButtons.slice() : [];
      return O.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Te.fullscreen
      }), T;
    });
    function $() {
      const T = h.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((q) => q instanceof HTMLElement ? !q.hidden && q.tabIndex >= 0 && q.offsetParent !== null : !1) : [];
    }
    function I() {
      var re;
      const q = $()[0] || h.value;
      (re = q == null ? void 0 : q.focus) == null || re.call(q);
    }
    function R() {
      var T;
      f != null && f.isConnected && ((T = f.focus) == null || T.call(f)), f = null;
    }
    function G(T) {
      var q, re, J, de;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const ce = $();
          if (!ce.length) {
            T.preventDefault(), (re = (q = h.value) == null ? void 0 : q.focus) == null || re.call(q);
            return;
          }
          const we = ce[0], A = ce[ce.length - 1], xe = document.activeElement;
          if (T.shiftKey) {
            (xe === we || xe === h.value || !((J = h.value) != null && J.contains(xe))) && (T.preventDefault(), A.focus());
            return;
          }
          (xe === A || !((de = h.value) != null && de.contains(xe))) && (T.preventDefault(), we.focus());
          return;
        }
        T.key === "Escape" && a("close");
      }
    }
    function H() {
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function se() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function ie(T) {
      document.removeEventListener("keydown", G), T ? (f || (f = document.activeElement), H(), document.addEventListener("keydown", G), hc(() => {
        I();
      })) : (se(), R());
    }
    return gc(() => {
      ie(r.open);
    }), sl(() => {
      se(), document.removeEventListener("keydown", G), R();
    }), wi(() => r.open, (T) => {
      ie(T);
    }), (T, q) => e.open ? (ke(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: q[0] || (q[0] = Hn((re) => a("close"), ["self"]))
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
        X("div", rN, [
          q[1] || (q[1] = X("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          q[2] || (q[2] = X("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          q[3] || (q[3] = X("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ke(), Pe("div", iN, ct(z.value), 1)) : zt("", !0),
          q[4] || (q[4] = X("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          $e(Dw, {
            ref_key: "paintOverlaysRef",
            ref: v
          }, null, 512),
          $e(km, {
            ref_key: "imageFilePickerRef",
            ref: g,
            onFileSelected: M,
            onFileCancelled: b
          }, null, 512),
          O.value ? zt("", !0) : (ke(), Pe(ot, { key: 1 }, [
            $e(Lk, {
              buttons: e.uiState.toolButtons || j.value.toolButtons || []
            }, null, 8, ["buttons"]),
            $e(rw, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            $e(Ew, {
              "paint-swatches": e.paintSwatches,
              panes: j.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          $e(Xk, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          $e(tN, {
            buttons: e.uiState.viewButtons || j.value.viewButtons || []
          }, null, 8, ["buttons"]),
          $e(ZS, {
            buttons: e.uiState.floatingButtons || P.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          $e(zw, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          $e(Fk, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          $e(uw, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? zt("", !0) : (ke(), Ii(Ok, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, nN)
    ])) : zt("", !0);
  }
}, pr = "loading", wa = "ready", br = "failed";
function ng(e, t = "") {
  return e && (e.__panoLoadState = pr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function rg(e, t = "") {
  return e && (e.__panoLoadState = wa, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ig(e, t = "") {
  return e && (e.__panoLoadState = br, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Qu(e, t) {
  return e ? e.__panoLoadState === br ? br : typeof t == "function" && t(e) ? wa : pr : wa;
}
function ec(e) {
  return Qu(e) === br;
}
function oN({ presented: e, background: t = wa, stickers: n = [] } = {}) {
  if (!e) return { status: pr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], a = t === pr, o = r.includes(pr);
  if (a && o) return { status: pr, detail: "mixed" };
  if (a) return { status: pr, detail: "background" };
  if (o) return { status: pr, detail: "stickers" };
  const c = t === br, f = r.includes(br);
  return c && f ? { status: br, detail: "mixed" } : c ? { status: br, detail: "background" } : f ? { status: br, detail: "stickers" } : { status: wa, detail: "" };
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
function zh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function sN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
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
function lN(e, t, n = null) {
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
  return !r && n != null && (r = sN(e == null ? void 0 : e.graph, n)), r;
}
function uN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function cN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function fN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function dN({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const a = (I) => {
    if (!I) return "";
    if (typeof I == "string") return String(I || "").trim();
    if (Array.isArray(I)) {
      if (I.length === 0) return "";
      if (I.length === 1) return a(I[0]);
      const R = String(I[0] || "").trim();
      if (R)
        return ra(t, {
          filename: R,
          subfolder: String(I[1] || "").trim(),
          type: String(I[2] || "output").trim() || "output"
        });
      for (const G of I) {
        const H = a(G);
        if (H) return H;
      }
      return "";
    }
    return typeof (I == null ? void 0 : I.src) == "string" && I.src ? I.src : typeof (I == null ? void 0 : I.url) == "string" && I.url ? I.url : ra(t, I);
  }, o = (I) => {
    if (!I || typeof I != "object") return "";
    const R = String(I.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(I.value || "");
    if (R !== "comfy_image") return "";
    const G = String(I.filename || "").trim();
    return G ? ra(t, {
      filename: G,
      subfolder: String(I.subfolder || ""),
      type: String(I.storage || "input")
    }) : "";
  }, c = (I) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || I == null) return null;
    const G = String(I);
    return R instanceof Map ? R.get(I) || R.get(G) || R.get(Number(G)) || null : R[I] || R[G] || null;
  }, f = (I, R) => {
    var H;
    const G = c(I == null ? void 0 : I.id);
    return Array.isArray((H = G == null ? void 0 : G.ui) == null ? void 0 : H[R]) ? G.ui[R] : Array.isArray(G == null ? void 0 : G[R]) ? G[R] : [];
  }, h = (I, R) => {
    const G = c(I == null ? void 0 : I.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, R) ? G.ui[R] : G && Object.prototype.hasOwnProperty.call(G, R) ? G[R] : null;
  }, g = (I, R) => {
    const G = h(I, "pano_sticker_input_state_hash"), H = Array.isArray(G) ? G[0] : G;
    return String(H ?? "").trim() || fN(R);
  }, v = (I) => {
    const R = [], G = /* @__PURE__ */ new Set();
    for (const H of I || []) {
      const se = a(H);
      !se || G.has(se) || (G.add(se), R.push(se));
    }
    return R;
  }, x = (I, R) => {
    var se;
    const G = [];
    Array.isArray(I == null ? void 0 : I.images) && I.images.length && G.push(I.images), Array.isArray((se = I == null ? void 0 : I.ui) == null ? void 0 : se.images) && I.ui.images.length && G.push(I.ui.images);
    const H = [];
    for (const ie of G)
      R >= 0 && R < ie.length && H.push(ie[R]), H.push(...ie);
    return H;
  }, S = (I, R) => {
    var Ae;
    const G = String(R || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const H = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : [], se = H.findIndex((Ne) => String((Ne == null ? void 0 : Ne.name) || "") === G);
    if (se < 0) return { src: "", sourceType: "", inputName: G };
    const ie = H[se], T = ie == null ? void 0 : ie.link;
    if (T == null) return { src: "", sourceType: "", inputName: G };
    const { originId: q, originSlot: re } = $h(zh(I == null ? void 0 : I.graph, T));
    if (q == null) return { src: "", sourceType: "", inputName: G };
    const J = lN(I, se, q);
    if (!J) return { src: "", sourceType: "", inputName: G };
    const de = Number(re || 0);
    let ce = [];
    try {
      ce = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      ce = [];
    }
    if (Array.isArray(ce) && ce.length) {
      const Ne = [];
      de >= 0 && de < ce.length && Ne.push(ce[de]), Ne.push(...ce);
      const U = v(Ne);
      if (U.length)
        return { src: U[0], srcCandidates: U, sourceType: "appNodeImageUrls", inputName: G };
    }
    const we = v(x(c((J == null ? void 0 : J.id) ?? q), de));
    if (we.length)
      return { src: we[0], srcCandidates: we, sourceType: "nodeOutputs", inputName: G };
    const A = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (A.length) {
      const Ne = [];
      de >= 0 && de < A.length && Ne.push(A[de]), Ne.push(...A);
      const U = v(Ne);
      if (U.length)
        return { src: U[0], srcCandidates: U, sourceType: "nodeImgs", inputName: G };
    }
    const xe = (Ae = J == null ? void 0 : J.widgets) == null ? void 0 : Ae.find((Ne) => String((Ne == null ? void 0 : Ne.name) || "").toLowerCase() === "image");
    if (xe) {
      let Ne = a(xe.value);
      if (Ne && !Ne.includes("/") && !Ne.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Ne = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Ne)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Ne)}&type=input&subfolder=`), Ne) return { src: Ne, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, M = (I, R = []) => {
    const G = Array.isArray(R) ? R : [R];
    for (const H of G) {
      const se = S(I, H);
      if (String((se == null ? void 0 : se.src) || "").trim()) return se;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, b = (I) => {
    const R = String(I || "").trim();
    if (!R) return [];
    if (uN(R)) return [R];
    const { filename: G, subfolder: H } = cN(R);
    return G ? v([
      ra(t, { filename: G, subfolder: H, type: "temp" }),
      ra(t, { filename: G, subfolder: H, type: "output" }),
      ra(t, { filename: G, subfolder: H, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (I) => {
      var R, G;
      try {
        (G = (R = I == null ? void 0 : I.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || G.call(R, (H, se, ie) => {
          var T;
          H != null && H.img && ((T = r == null ? void 0 : r.isImageLoadFailed) != null && T.call(r, H.img)) && ie.delete(se);
        });
      } catch {
      }
    },
    externalStateHash: g,
    invalidateUiImage: (I, R) => {
      var G;
      (G = I == null ? void 0 : I.delete) == null || G.call(I, `__ui__${String(R || "")}`);
    },
    linkedValue: (I, R) => {
      var ie, T, q, re;
      const G = String(R || ""), H = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs.find((J) => String((J == null ? void 0 : J.name) || "") === G) : null;
      if ((H == null ? void 0 : H.link) != null) {
        const { originId: J, originSlot: de } = $h(zh(I == null ? void 0 : I.graph, H.link)), ce = c(J), we = [
          ce == null ? void 0 : ce.output,
          ce == null ? void 0 : ce.result,
          (ie = ce == null ? void 0 : ce.data) == null ? void 0 : ie.output,
          (T = ce == null ? void 0 : ce.data) == null ? void 0 : T.result,
          (q = ce == null ? void 0 : ce.ui) == null ? void 0 : q.output,
          (re = ce == null ? void 0 : ce.ui) == null ? void 0 : re.result
        ];
        for (const A of we) {
          if (!Array.isArray(A)) continue;
          const xe = A[Number(de || 0)];
          if (typeof xe == "string" && xe.trim()) return xe;
        }
      }
      const se = Array.isArray(I == null ? void 0 : I.widgets) ? I.widgets.find((J) => String((J == null ? void 0 : J.name) || "") === G) : null;
      return String((se == null ? void 0 : se.value) || "");
    },
    loadPreferredExactLinkedImage: (I, R = [], G = null, H = "") => {
      var je;
      const se = Array.isArray(R) ? R : [R], ie = M(I, se), q = (Array.isArray(ie == null ? void 0 : ie.srcCandidates) && ie.srcCandidates.length ? ie.srcCandidates : [ie == null ? void 0 : ie.src]).map((mt) => String(mt || "").trim()).filter(Boolean);
      if (!q.length) return null;
      const re = v(q.flatMap((mt) => b(mt)));
      if (!re.length) return null;
      I.__panoLinkedInputImageCache || (I.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(H || se.join("|") || "image_exact"), de = q.join(`
`), ce = I.__panoLinkedInputImageCache.get(J);
      if (ce && ce.srcRaw === de && ce.img) return ce.img;
      const we = n || globalThis.Image;
      if (typeof we != "function") return null;
      const A = new we();
      (je = r == null ? void 0 : r.markImageLoading) == null || je.call(r, A, de);
      const xe = { srcRaw: de, resolvedSrc: "", img: A };
      I.__panoLinkedInputImageCache.set(J, xe);
      let Ae = -1;
      const Ne = (mt) => {
        var nt, Ye, Ve;
        mt === "ready" ? (nt = r == null ? void 0 : r.markImageReady) == null || nt.call(r, A, de) : (Ye = r == null ? void 0 : r.markImageFailed) == null || Ye.call(r, A, de), G == null || G(A), (Ve = I.setDirtyCanvas) == null || Ve.call(I, !0, !0);
      }, U = () => {
        if (Ae += 1, Ae >= re.length) {
          Ne("failed");
          return;
        }
        xe.resolvedSrc = re[Ae], A.src = xe.resolvedSrc;
      };
      return A.onload = () => Ne("ready"), A.onerror = () => {
        if (Ae + 1 < re.length) {
          U();
          return;
        }
        Ne("failed");
      }, U(), A;
    },
    output: c,
    resolvePreferredExactLinkedSource: M,
    source: a,
    uiImage: (I, R, G, H = null) => {
      var de, ce, we;
      const se = f(I, R)[0] || null, ie = a(se);
      if (!ie) return null;
      const T = `__ui__${R}`, q = (de = G == null ? void 0 : G.get) == null ? void 0 : de.call(G, T);
      if (q && q.__panoSrc === ie) return q;
      const re = n || globalThis.Image;
      if (typeof re != "function") return null;
      const J = new re();
      return J.__panoSrc = ie, (ce = r == null ? void 0 : r.markImageLoading) == null || ce.call(r, J, ie), J.onload = () => {
        var A;
        (A = r == null ? void 0 : r.markImageReady) == null || A.call(r, J, ie), H == null || H(J);
      }, J.onerror = () => {
        var A;
        (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, J, ie), H == null || H(J);
      }, J.src = ie, (we = G == null ? void 0 : G.set) == null || we.call(G, T, J), J;
    },
    uiList: f,
    uiValue: h
  };
}
const hN = "state_json", as = "sticker_image_1", pN = "external_image", os = "pano_sticker_input_images", mN = !0, Ts = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], pn = Math.PI / 180, zr = 180 / Math.PI, yu = 1, gN = "rgb(255, 221, 87)", bN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, yN = 64, jh = 40, vu = 16, vN = 0.45, Vh = 180, _N = 160, Zs = 24, xN = 4, SN = 4, ss = /* @__PURE__ */ new Map(), Hh = /* @__PURE__ */ new Map(), ii = /* @__PURE__ */ new Map(), wN = 12, tr = dN({
  app: nr,
  api: bn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: ec,
    markImageFailed: ig,
    markImageLoading: ng,
    markImageReady: rg
  }
}), kN = tr.assetSource, NN = tr.source, _u = tr.uiImage, MN = tr.invalidateUiImage, PN = tr.resolvePreferredExactLinkedSource, xu = tr.loadPreferredExactLinkedImage;
function ls(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function AN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function CN(e, t, n) {
  const r = W((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function TN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = ii.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (ii.delete(t), ii.set(t, n), n);
}
function IN(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (ii.delete(n), ii.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ii.size > wN; ) {
      const a = ii.keys().next().value;
      if (!a) break;
      ii.delete(a);
    }
}
function EN(e) {
  return e * e * e;
}
function yr(e, t, n) {
  return { x: e, y: t, z: n };
}
function us(e, t) {
  return yr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function cs(e, t) {
  return yr(e.x * t, e.y * t, e.z * t);
}
function er(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function fs(e, t) {
  return yr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ia(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return yr(e.x / t, e.y / t, e.z / t);
}
function lr(e, t) {
  const n = e * pn, r = t * pn, a = Math.cos(r);
  return yr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function ds(e) {
  return {
    yaw: Ut(Math.atan2(e.x, e.z) * zr),
    pitch: W(Math.asin(W(e.y, -1, 1)) * zr, -90, 90)
  };
}
function Or(e, t) {
  let n = !1;
  for (let r = 0, a = t.length - 1; r < t.length; a = r++) {
    const o = t[r].x, c = t[r].y, f = t[a].x, h = t[a].y;
    c > e.y != h > e.y && e.x < (f - o) * (e.y - c) / (h - c || 1e-6) + o && (n = !n);
  }
  return n;
}
function ti(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Su(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return ti(e, t);
  const h = W((o * r + c * a) / f, 0, 1), g = Number(t.x || 0) + r * h, v = Number(t.y || 0) + a * h, x = Number(e.x || 0) - g, S = Number(e.y || 0) - v;
  return x * x + S * S;
}
function Gn(e, t, n) {
  return e + (t - e) * n;
}
function ur(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function DN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let hs = { fillStyle: "", url: "" };
function ON(e, t, n) {
  if (hs.url && hs.fillStyle === String(e || ""))
    return hs.url;
  const r = DN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Zs}" height="${Zs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return hs = { fillStyle: String(e || ""), url: r }, r;
}
function Is(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function $n(e) {
  return {
    r: W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: W(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function hn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function FN(e) {
  return Ts.some((t) => Is(e, t.color));
}
function wu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, a = W(Number(t), 0, 1), o = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: o, g: o, b: o };
  const c = Math.floor(r * 6), f = r * 6 - c, h = o * (1 - a), g = o * (1 - f * a), v = o * (1 - (1 - f) * a);
  switch (c % 6) {
    case 0:
      return { r: o, g: v, b: h };
    case 1:
      return { r: g, g: o, b: h };
    case 2:
      return { r: h, g: o, b: v };
    case 3:
      return { r: h, g, b: o };
    case 4:
      return { r: v, g: h, b: o };
    default:
      return { r: o, g: h, b: g };
  }
}
function ku(e) {
  const t = W(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = W(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = W(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, r), o = Math.min(t, n, r), c = a - o;
  let f = 0;
  c > 1e-6 && (a === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const h = a <= 1e-6 ? 0 : c / a;
  return { h: f, s: h, v: a };
}
function aa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const ag = "pano_suite.ui_settings.v1", og = "pano_suite.node_grid_visibility.v1";
let ca = null, cr = null;
function Es(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function RN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ag)) || "").trim();
    if (!t) return ca ? Es(ca) : null;
    const n = JSON.parse(t), r = Es(n);
    return ca = r, r;
  } catch {
    return ca ? Es(ca) : null;
  }
}
function LN(e) {
  var n;
  const t = Es(e);
  ca = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(ag, JSON.stringify(t));
  } catch {
  }
  return t;
}
function sg() {
  var e;
  if (cr && typeof cr == "object")
    return cr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(og)) || "").trim();
    if (!t)
      return cr = {}, cr;
    const n = JSON.parse(t);
    return cr = n && typeof n == "object" ? n : {}, cr;
  } catch {
    return cr = {}, cr;
  }
}
function zN(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = sg()[n];
  return typeof a == "boolean" ? a : !!t;
}
function $N(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = sg();
  r[n] = !!t, cr = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(og, JSON.stringify(r));
  } catch {
  }
}
function jN(e) {
  var r, a;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Uh(e) {
  const { paintCount: t, maskCount: n } = jN(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function oa(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ps(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function VN(e, t) {
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
function ms(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function HN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function UN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function BN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function GN(e, t, n = {}) {
  var ad;
  await Lm(e, { tolerateOperationFailure: !0 }), tr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, c = VN(e, t);
  await Oc();
  const f = ps(e, "output_preset"), h = ps(e, "coverage"), g = ps(e, "bg_color"), v = ps(e, hN), x = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return xu(
      e,
      i,
      () => be(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = x();
    return BN(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return UN(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : HN(s, i);
  }, b = Rm(String((v == null ? void 0 : v.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((g == null ? void 0 : g.value) || "#00ff00"),
    coverage: ln(h == null ? void 0 : h.value),
    sharedUiSettings: RN()
  });
  e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = 0, t === "cutout" && (b.shots = Array.isArray(b.shots) ? b.shots.slice(0, 1) : [], b.shots.length || (b.active.selected_shot_id = null));
  const O = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(b.shots) ? b.shots : [], s = String(((l = b == null ? void 0 : b.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, j = O ? vf(O, !1) : { width: 220, height: 132 }, z = tg(t), P = /* @__PURE__ */ ka({
    stageStatus: pr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (z.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (z.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(z.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: ur({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: ur({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: j.width,
      height: j.height,
      label: O ? "Loading preview" : "Add Frame to preview"
    }
  }), $ = document.createElement("div");
  document.body.appendChild($);
  const I = ({ intent: i, file: s } = {}) => {
    if (Sr(s)) {
      if (i === "add") {
        Af(s);
        return;
      }
      i === "replace" && Q0(s);
    }
  }, R = ({ intent: i } = {}) => {
  }, G = _c(aN, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: c,
    shellPreset: z,
    paintSwatches: Ts.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: ur(i.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Zi();
    },
    onImageFileSelected: I,
    onImageFileCancelled: R
  });
  let H = null;
  try {
    H = G.mount($);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw $.remove(), i;
  }
  const se = $.querySelector(".pano-modal-overlay"), ie = $.querySelector(".pano-modal"), T = ie == null ? void 0 : ie.querySelector("[data-stage-overlay]"), q = ie == null ? void 0 : ie.querySelector("[data-stage-background]"), re = ie == null ? void 0 : ie.querySelector(".pano-stage-wrap"), J = ((ad = H == null ? void 0 : H.getPaintOverlayRefs) == null ? void 0 : ad.call(H)) || {}, de = J.cursor || null, ce = J.sizePreview || null, we = J.sizeSample || null;
  if (!se || !ie || !T || !q || !re || !de || !ce || !we)
    throw G.unmount(), $.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = T.getContext("2d"), xe = ko(), Ae = t === "cutout" ? VS({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, Ne = ie.querySelector("[data-side]"), U = ie.querySelector("[data-video-element]"), je = ie.querySelector(".pano-floating-right"), mt = ie.querySelector(".pano-floating-top"), nt = ie.querySelector("[data-tool-rail]"), Ye = ie.querySelector("[data-frame-rail]"), Ve = ie.querySelector("[data-frame-roll-knob]"), qt = ie.querySelector("[data-paint-dock]"), An = ie.querySelector(".pano-video-transport"), Sn = ie.querySelector("[data-selection-menu]"), nn = ie.querySelector("[data-tooltip]"), un = ie.querySelector("[data-camera-preview-host]"), L = ie.querySelector("[data-paint-color-row]"), V = ie.querySelector("[data-paint-color-pop]"), te = ie.querySelector("[data-paint-color-sv]"), ye = ie.querySelector("[data-paint-color-sv-cursor]"), he = ie.querySelector("[data-paint-hue-strip]"), D = ie.querySelector("[data-paint-hue-handle]");
  let Q = 0, ee = 0;
  re == null || re.removeAttribute("data-stage-ready"), re == null || re.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", q.style.opacity = "0", a && (Ne == null || Ne.remove(), ie.classList.add("pano-modal-readonly"));
  const fe = () => {
    if (!d.customPaintSessionStart) return;
    if (Is(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (FN(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      $n(d.customPaintColor),
      ...d.customPaintHistory.filter((s) => !Is(s, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, ne = (i = !1) => {
    !V || V.hidden || (i ? fe() : d.customPaintSessionStart = null, V.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, Me = () => {
    V && (V.hidden && (d.customPaintSessionStart = $n(d.customPaintColor)), V.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  ie.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || fi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (ie.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ne(!0), t === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, rt(), be()), (s = P.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const ge = t === "stickers" ? b.active.selected_sticker_id : b.active.selected_shot_id, Ce = JSON.stringify(fh(b)), d = {
    mode: "pano",
    selectedId: ge,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: ln(b.coverage),
    historyController: OS(80, { entries: [Ce], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Dr,
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
    showGrid: zN(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ru(),
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
  }, De = Ae && un ? Ae.mount(un, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, b.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const Re = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), at = document.createElement("canvas");
  at.__panoFrameIdx = 0;
  const oe = {
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
  }, Xt = Number.parseFloat(
    getComputedStyle(ie).getPropertyValue("--pano-float-radius")
  ) || 10, Nt = (i) => {
    const s = String(i || "default");
    T.style.cursor !== s && (T.style.cursor = s);
  }, Ge = {
    timer: 0,
    target: null
  }, Pt = {
    active: !1,
    depth: 0
  }, E = {
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
  }, Se = 4, Ie = 9, Le = [];
  let Je = 0;
  const Ke = () => {
    var k, C;
    const i = (k = re == null ? void 0 : re.getBoundingClientRect) == null ? void 0 : k.call(re), s = (C = je == null ? void 0 : je.getBoundingClientRect) == null ? void 0 : C.call(je), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, _ = u > 0 ? u + 14 + 12 : 72, y = Math.max(280, Math.floor(l - _ * 2)), w = d.fullscreen ? Math.min(1200, y) : y;
    P.videoTransport.shellMaxWidthPx = w;
  }, Ft = () => {
    Je || (Je = window.requestAnimationFrame(() => {
      Je = 0, Ke();
    }));
  }, Gt = () => {
    const i = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, Kt = (i) => {
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
  }, Ct = typeof ResizeObserver < "u" ? new ResizeObserver(() => Ft()) : null;
  Ct == null || Ct.observe(re), je && (Ct == null || Ct.observe(je)), Le.push(() => {
    var i;
    Je && (window.cancelAnimationFrame(Je), Je = 0), (i = Ct == null ? void 0 : Ct.disconnect) == null || i.call(Ct);
  }), Ft();
  const Tt = () => {
    E.thumbnailJobId += 1, E.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ie;
  }, li = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      Tt();
      return;
    }
    const p = TN(u);
    if (p) {
      E.thumbnailSrc = u, P.videoTransport.thumbnails = p.thumbnails, P.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    if (E.thumbnailSrc === u && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++E.thumbnailJobId;
    E.thumbnailSrc = u, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ie;
    const _ = document.createElement("video");
    if (_.preload = "auto", _.muted = !0, _.playsInline = !0, _.crossOrigin = "anonymous", !await new Promise((ue) => {
      let pe = !1;
      const le = (_e) => {
        pe || (pe = !0, ue(_e));
      };
      _.addEventListener("loadedmetadata", () => le(!0), { once: !0 }), _.addEventListener("canplay", () => le(!0), { once: !0 }), _.addEventListener("error", () => le(!1), { once: !0 }), _.src = u, _.load();
    }) || E.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(_.videoWidth || 0)), k = Math.max(1, Number(_.videoHeight || 0));
    if (w < 1 || k < 1) return;
    const C = Math.max(0, Number(_.duration || s || 0)), N = document.createElement("canvas"), F = 46, B = Math.max(72, Math.round(w / k * F));
    N.width = B, N.height = F;
    const Z = N.getContext("2d");
    if (!Z) return;
    const K = [], Y = (ue) => new Promise((pe) => {
      let le = !1;
      const _e = () => {
        le || (le = !0, pe());
      };
      _.addEventListener("seeked", _e, { once: !0 }), _.addEventListener("error", _e, { once: !0 });
      try {
        _.currentTime = ue;
      } catch {
        _e();
      }
    });
    for (let ue = 0; ue < Ie; ue += 1) {
      if (E.thumbnailJobId !== m) return;
      const pe = ue / (Ie - 1), le = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * pe)) : 0;
      if (await Y(le), E.thumbnailJobId !== m) return;
      Z.clearRect(0, 0, B, F), Z.drawImage(_, 0, 0, B, F), K.push({
        id: `thumb-${ue}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: le,
        label: Sl(le)
      });
    }
    E.thumbnailJobId === m && (P.videoTransport.thumbnails = K, P.videoTransport.thumbnailCount = K.length || Ie, IN(u, {
      thumbnails: K,
      thumbnailCount: K.length || Ie,
      duration: C,
      fps: l
    }));
  }, Ei = (i) => {
    const s = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * s));
  }, Fn = (i) => {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return null;
    const s = Number(U.videoWidth || 0), l = Number(U.videoHeight || 0), u = document.createElement("canvas");
    u.width = s, u.height = l, u.__panoFrameIdx = Number(u.__panoFrameIdx || 0) + 1;
    const p = u.getContext("2d");
    if (!p) return null;
    for (p.drawImage(U, 0, 0, s, l), E.frameCache.set(i, u), E.frameCacheOrder = E.frameCacheOrder.filter((m) => m !== i), E.frameCacheOrder.push(i); E.frameCacheOrder.length > Se; ) {
      const m = E.frameCacheOrder.shift();
      m != null && E.frameCache.delete(m);
    }
    return u;
  }, Mo = (i, s = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), u = Number(i.height || 0);
    if (l < 1 || u < 1) return !1;
    (at.width !== l || at.height !== u) && (at.width = l, at.height = u);
    const p = at.getContext("2d");
    return p ? (p.clearRect(0, 0, l, u), p.drawImage(i, 0, 0, l, u), at.__panoFrameIdx = Number(at.__panoFrameIdx || 0) + 1, s != null && (E.presentedTime = Number(s || 0)), !0) : !1;
  }, Ma = (i) => {
    const s = Ei(i), l = E.frameCache.get(s) || null;
    return l ? (E.currentFrameNumber = s, Mo(l, i)) : !1;
  };
  if (Le.push(() => {
    Tt();
  }), U instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof U.requestVideoFrameCallback != "function" || U.__panoFramePumpActive) return;
      U.__panoFramePumpActive = !0;
      const y = (w, k) => {
        U.__panoFramePumpActive = !1;
        const C = Number((k == null ? void 0 : k.mediaTime) ?? U.currentTime ?? 0), N = Ei(C), F = Gt();
        E.mode === "scrub" ? Math.abs(C - Number(E.editorTime || 0)) <= F && (Fn(N), Ma(E.editorTime), oe.backgroundDirty = !0, oe.dirty = !0, ar({
          ready: !0,
          playing: !1,
          visible: Ar(),
          currentTime: E.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), be({ cause: "frame_view", localOnly: !0 })) : (E.editorTime = C, E.presentedTime = C, E.requestedTime = null, E.currentFrameNumber = N, Fn(N), E.frameCounter += 1, U.dataset.panoFrameIdx = String(E.frameCounter), oe.backgroundDirty = !0, oe.dirty = !0, ar({
          ready: !0,
          playing: !U.paused && !U.ended,
          visible: Ar(),
          currentTime: C,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), be({ cause: "frame_view", localOnly: !0 })), oe.running && (!U.paused || E.mode === "scrub") && i();
      };
      try {
        U.requestVideoFrameCallback(y);
      } catch {
        U.__panoFramePumpActive = !1;
      }
    }, s = () => {
      E.pendingPlaybackResume && (E.pendingPlaybackResume = !1, E.mode = "playback", E.requestedTime = null, ji() && (oe.backgroundDirty = !0, oe.dirty = !0), U.play().catch(() => {
      }));
    }, l = () => {
      E.editorTime = Number(U.currentTime || 0), Number(U.readyState || 0) >= 2 && ji() && (oe.backgroundDirty = !0, oe.dirty = !0), Vi(), i(), be({ cause: "frame_view", localOnly: !0 });
    }, u = () => {
      E.mode = "playback", E.seeking = !1, E.requestedTime = null, Vi(), i(), be({ cause: "frame_view", localOnly: !0 });
    }, p = () => {
      E.mode === "playback" && ji() && (oe.backgroundDirty = !0, oe.dirty = !0), Vi(), be({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      ar({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Ar(),
        currentTime: E.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: E.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: U.muted,
        volume: Number(U.volume ?? P.videoTransport.volume ?? 1)
      });
    }, _ = () => {
      const y = E.seeking || E.pendingPlaybackResume || E.mode === "scrub";
      if (E.seeking = !1, !y) {
        E.requestedTime = null, i();
        return;
      }
      const w = Number(E.requestedTime ?? E.editorTime ?? 0), k = Number(U.currentTime || 0);
      if (Math.abs(k - w) > Gt()) {
        wl(w);
        return;
      }
      E.mode === "scrub" && (ji(), oe.backgroundDirty = !0, oe.dirty = !0, be({ cause: "frame_view", localOnly: !0 })), E.requestedTime = null, s(), i();
    };
    U.addEventListener("loadedmetadata", l), U.addEventListener("loadeddata", l), U.addEventListener("canplay", l), U.addEventListener("play", u), U.addEventListener("pause", p), U.addEventListener("volumechange", m), U.addEventListener("seeked", _), Le.push(() => U.removeEventListener("loadedmetadata", l)), Le.push(() => U.removeEventListener("loadeddata", l)), Le.push(() => U.removeEventListener("canplay", l)), Le.push(() => U.removeEventListener("play", u)), Le.push(() => U.removeEventListener("pause", p)), Le.push(() => U.removeEventListener("volumechange", m)), Le.push(() => U.removeEventListener("seeked", _));
  }
  function Po() {
    P.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === d.primaryTool : l ? i.key === d.paintTool : u ? i.key === d.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function cn(i) {
    return Rc(i == null ? void 0 : i.dataTransfer);
  }
  function rn(i) {
    const s = !!i;
    Pt.active !== s && (Pt.active = s, re.classList.toggle("drop-active", s));
  }
  function Di(i, s, l = d.viewFov, u = 140, p = 620) {
    const m = z1(d.viewYaw, i), _ = s - d.viewPitch, y = l - d.viewFov, w = Math.hypot(m, _) + Math.abs(y) * 0.6, k = Math.round(W(u + w * 2.2, u, p));
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
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, be();
  }
  Lg();
  function Rn() {
    return t === "stickers" ? b.stickers : b.shots;
  }
  function Rt() {
    const i = b.painting || (b.painting = so(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function lg(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = b.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? b.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const _ of s) {
      const y = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !y || u.has(y) || (u.add(y), l.push(y));
    }
    return l;
  }
  function ug() {
    return lg("paint");
  }
  function Pa(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Aa(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function Jt(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Ca(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function pl() {
    var s;
    let i = -1;
    for (const l of Array.isArray(b.stickers) ? b.stickers : [])
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Rt())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = b.painting) == null ? void 0 : s.raster_objects) ? b.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Vc(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = Rt();
    let p = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? pl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(p)), p;
  }
  function cg(i) {
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
  function fg() {
    const i = new Set(ug()), l = Rt().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: pl(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, p) => Number((u == null ? void 0 : u.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), b.painting.groups = l, l;
  }
  function dg(i, s, l) {
    var K;
    const u = (Y) => (Number(Y || 0) % 1 + 1) % 1, p = [];
    for (const Y of l) {
      const ue = Y == null ? void 0 : Y.geometry, pe = (ue == null ? void 0 : ue.geometryKind) === "lasso_fill" ? ue == null ? void 0 : ue.points : (ue == null ? void 0 : ue.processedPoints) || (ue == null ? void 0 : ue.rawPoints) || (ue == null ? void 0 : ue.points) || [];
      Array.isArray(pe) && p.push(...pe);
    }
    if (!p.length) return null;
    const m = u(((K = p[0]) == null ? void 0 : K.u) || 0);
    let _ = 0, y = 0;
    p.forEach((Y) => {
      const ue = u((Y == null ? void 0 : Y.u) || 0);
      _ += m + Un(ue, m), y += Number((Y == null ? void 0 : Y.v) || 0);
    });
    const w = (_ / p.length % 1 + 1) % 1;
    let k = 1 / 0, C = -1 / 0, N = 1 / 0, F = -1 / 0;
    p.forEach((Y) => {
      const ue = u((Y == null ? void 0 : Y.u) || 0), pe = Un(ue, w);
      k = Math.min(k, pe), C = Math.max(C, pe);
      const le = Number((Y == null ? void 0 : Y.v) || 0);
      N = Math.min(N, le), F = Math.max(F, le);
    });
    const B = l.reduce((Y, ue) => {
      const pe = Qr(String((ue == null ? void 0 : ue.toolKind) || "pen")), le = En[pe] || En[Dr], _e = Math.max(1, Number((ue == null ? void 0 : ue.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(Y, _e);
    }, 0), Z = Math.max(35e-4, B / 2048);
    return {
      centerUv: { u: ((w + (k + C) * 0.5) % 1 + 1) % 1, v: W((N + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (C - k) * 0.5 + Z,
      halfH: (F - N) * 0.5 + Z,
      uvPad: Z
    };
  }
  function Xr(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const p = Rt().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === u);
    if (!p) return null;
    const m = l || qn(u, s);
    return p.frame = dg(u, s, m), p.frame;
  }
  function Oi() {
    var u;
    const i = (Array.isArray(b.stickers) ? b.stickers : []).map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = fg().map((p) => ({
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
  function ml(i = !0) {
    var l, u, p, m, _, y;
    const s = Oi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((u = (l = d.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), k = String(((m = (p = d.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), C = String(((y = (_ = d.interaction) == null ? void 0 : _.stroke) == null ? void 0 : y.toolKind) || "").trim();
      w && k === "paint" && C !== "eraser" && !s.includes(w) && s.push(w);
    }
    return s;
  }
  function gl(i = !0) {
    var y, w, k, C, N, F;
    const s = Oi();
    if (!i) return s;
    const l = String(((w = (y = d.interaction) == null ? void 0 : y.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), u = String(((C = (k = d.interaction) == null ? void 0 : k.stroke) == null ? void 0 : C.layerKind) || "").trim(), p = String(((F = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!l || u !== "paint" || p === "eraser" || s.some((B) => B.type === "strokeGroup" && String(B.actionGroupId || "") === l))
      return s;
    const m = It();
    let _ = s.reduce((B, Z) => Math.max(B, Number((Z == null ? void 0 : Z.z_index) || 0)), -1) + 1;
    return m && Wt(m) && String(m.actionGroupId || "") === l && (_ = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: _,
        item: null
      }
    ].sort((B, Z) => Number((B == null ? void 0 : B.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0));
  }
  function hg() {
    return Rt().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Ri(Pa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function pg() {
    var i;
    return (Array.isArray((i = b.painting) == null ? void 0 : i.raster_objects) ? b.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Fi(Aa((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Hc(i = d.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function mg() {
    var s, l, u, p;
    let i = null;
    try {
      const m = ml(), _ = ((p = (u = (l = (s = d.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : p.canvas) || null;
      _ && (i = {
        source: _,
        revision: `${Wi()}:${Ao()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Ao() {
    var p, m, _, y, w, k, C;
    const i = d.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Hc(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const N = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), B = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((y = N == null ? void 0 : N.points) == null ? void 0 : y.length) ?? 0, Z = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${s}_live${Z}_${B}_${d.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), u = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((C = i == null ? void 0 : i.item) == null ? void 0 : C.id) || "");
    return `_${s}_${l || u || "active"}_${d.livePaintInteractionRevision}`;
  }
  function bl() {
    const i = Array.isArray(b.shots) ? b.shots : [], s = Array.isArray(b.stickers) ? b.stickers : [];
    return [...i, ...s];
  }
  function Ln(i) {
    return !!i && Array.isArray(b.shots) && b.shots.includes(i);
  }
  function vt(i) {
    return !!i && Array.isArray(b.stickers) && b.stickers.includes(i);
  }
  function Cn() {
    var i;
    return Array.isArray((i = b.painting) == null ? void 0 : i.raster_objects) ? b.painting.raster_objects : [];
  }
  function Fi(i) {
    const s = Jt(i);
    if (!s) return null;
    const l = Cn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Aa(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function fn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = Jt(i.rasterObjectId || i.id || "");
    return !!s && !!Fi(Aa(s));
  }
  function Ri(i) {
    const s = Ca(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = Rt().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: Pa("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Wt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Ri(Pa(l, s));
  }
  function qn(i, s = null) {
    const l = Ca(i, s), u = String(l.actionGroupId || "").trim();
    return u ? Xi(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === u) : [];
  }
  function gg(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${d.mode}:${Oa()}`;
    if (d.mode === "frame") {
      const m = He(), _ = String((m == null ? void 0 : m.id) || ""), y = m ? Yt(m) : null;
      return `${p}:frame:${_}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Co(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: W(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function Un(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function yl(i, s = null, l = null) {
    var k;
    const u = Ca(i, s), p = Array.isArray(l) ? l : qn(u.actionGroupId, u.layerKind), m = [];
    if (p.forEach((C) => {
      const N = (C == null ? void 0 : C.geometry) || null, F = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let y = 0, w = 0;
    return m.forEach((C) => {
      y += _ + Un(Number((C == null ? void 0 : C.u) || 0), _), w += Number((C == null ? void 0 : C.v) || 0);
    }), {
      u: (y / m.length % 1 + 1) % 1,
      v: W(w / m.length, 0, 1)
    };
  }
  function To(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), _ = Un(Number(i.u || 0), p), y = Number(i.v || 0) - m, w = Number(u || 0) * pn, k = Math.cos(w), C = Math.sin(w), N = Math.max(0.02, Number(l || 1)), F = (_ * k - y * C) * N, B = (_ * C + y * k) * N;
    return {
      ...i,
      u: ((p + F) % 1 + 1) % 1,
      v: W(m + B, 0, 1)
    };
  }
  function Uc(i, s, l, u = null, p = null, m = null) {
    const _ = Ca(i, p), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const w = Xi(_.layerKind), k = Array.isArray(u) ? new Map(u.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let C = !1;
    if (w.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== y) return;
      const F = (k == null ? void 0 : k.get(String((N == null ? void 0 : N.id) || ""))) || N, B = N == null ? void 0 : N.geometry, Z = F == null ? void 0 : F.geometry;
      !B || !Z || (Array.isArray(Z.points) && (B.points = Z.points.map((K) => Co(K, s, l)), C = !0), Array.isArray(Z.rawPoints) && (B.rawPoints = Z.rawPoints.map((K) => Co(K, s, l)), C = !0), Array.isArray(Z.processedPoints) && (B.processedPoints = Z.processedPoints.map((K) => Co(K, s, l)), C = !0));
    }), C && m) {
      const N = Rt().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === y);
      N && (N.frame = null);
    }
    return C;
  }
  function Bc(i, s = 1, l = 0, u = null, p = null, m = null) {
    const _ = Ca(i, p), y = String(_.actionGroupId || "").trim();
    if (!y) return !1;
    const w = Xi(_.layerKind), k = Array.isArray(u) ? u : qn(y, _.layerKind), C = Array.isArray(k) ? new Map(k.map((B) => [String((B == null ? void 0 : B.id) || ""), B])) : null, N = (m == null ? void 0 : m.centerUv) ?? yl(y, _.layerKind, k);
    let F = !1;
    if (w.forEach((B) => {
      if (String((B == null ? void 0 : B.actionGroupId) || "").trim() !== y) return;
      const Z = (C == null ? void 0 : C.get(String((B == null ? void 0 : B.id) || ""))) || B, K = B == null ? void 0 : B.geometry, Y = Z == null ? void 0 : Z.geometry;
      !K || !Y || (Array.isArray(Y.points) && (K.points = Y.points.map((ue) => To(ue, N, s, l)), F = !0), Array.isArray(Y.rawPoints) && (K.rawPoints = Y.rawPoints.map((ue) => To(ue, N, s, l)), F = !0), Array.isArray(Y.processedPoints) && (K.processedPoints = Y.processedPoints.map((ue) => To(ue, N, s, l)), F = !0));
    }), F && m) {
      const B = Rt().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === y);
      B && (B.frame = null);
    }
    return F;
  }
  function Gc(i, s, l, u = null) {
    const p = Jt(i);
    if (!p) return !1;
    const m = Cn().find((C) => String((C == null ? void 0 : C.id) || "").trim() === p);
    if (!m) return !1;
    const _ = u && typeof u == "object" ? u : m, y = (_ == null ? void 0 : _.transform) || {}, w = Number(y.du || 0) + Number(s || 0), k = W(Number(y.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = k, !0;
  }
  function bg(i, s = 1, l = null) {
    const u = Jt(i);
    if (!u) return !1;
    const p = Cn().find((k) => String((k == null ? void 0 : k.id) || "").trim() === u);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, _ = (m == null ? void 0 : m.transform) || {}, y = Math.max(0.01, Number(_.scale || 1)), w = W(y * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = w, !0;
  }
  function It() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const s = Ri(i);
    if (s) return s;
    const l = Fi(i);
    return l || (t === "cutout" ? bl().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : Rn().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function Xn() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const p = String(u || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(d.selectedId || "") ? It() : Ri(p) || Fi(p) || (t === "cutout" ? bl().find((_) => String((_ == null ? void 0 : _.id) || "") === p) : Rn().find((_) => String((_ == null ? void 0 : _.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function vl(i = null) {
    const s = Array.isArray(i) ? i : Xn();
    if (!s || s.length < 2) return null;
    const l = s.map((k) => Qt(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.x) || 0))), p = l.flatMap((k) => k.corners.map((C) => Number((C == null ? void 0 : C.y) || 0))), m = Math.min(...u), _ = Math.max(...u), y = Math.min(...p), w = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + _) * 0.5, y: (y + w) * 0.5 },
      corners: [
        { x: m, y },
        { x: _, y },
        { x: _, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + _) * 0.5, y, a: { x: m, y }, b: { x: _, y } },
        { edge: "right", x: _, y: (y + w) * 0.5, a: { x: _, y }, b: { x: _, y: w } },
        { edge: "bottom", x: (m + _) * 0.5, y: w, a: { x: _, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (y + w) * 0.5, a: { x: m, y: w }, b: { x: m, y } }
      ],
      rotateStemBase: { x: (m + _) * 0.5, y },
      rotateHandle: { x: (m + _) * 0.5, y: y - 30 }
    };
  }
  function Kc(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(d.selectedIds) && d.selectedIds.includes(s);
  }
  function Io() {
    const i = It();
    return i ? Wt(i) || fn(i) ? "stroke" : Ln(i) ? "frame" : "image" : null;
  }
  function wn(i) {
    if (!i || typeof i != "object") return !1;
    if (Wt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = Rt().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (fn(i)) {
      const s = Jt(i.rasterObjectId || i.id || ""), l = Cn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function _l(i = null) {
    const s = Array.isArray(i) ? i : Xn();
    return s.length > 0 && s.every((l) => wn(l));
  }
  function yg(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Wt(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), p = Rt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (fn(i)) {
      const u = Jt(i.rasterObjectId || i.id || ""), p = Cn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function vg() {
    if (r) return;
    const i = Xn();
    if (!i.length) return;
    const s = !_l(i);
    let l = !1;
    i.forEach((u) => {
      yg(u, s) && (l = !0);
    }), l && (st(), ut(), rt(), We(), be());
  }
  function Li(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && vt(i) ? b.active.selected_sticker_id = i.id || null : b.active.selected_sticker_id = null, i && Ln(i) ? b.active.selected_shot_id = i.id || null : i ? Ln(i) || (b.active.selected_shot_id = b.active.selected_shot_id) : b.active.selected_shot_id = null;
  }
  function _g(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const y = String((_ == null ? void 0 : _.id) || "").trim();
      !y || u.has(y) || (u.add(y), l.push(y));
    }), d.selectedIds = l;
    const p = String(s || "").trim();
    d.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = It();
    b.active.selected_sticker_id = m && vt(m) && m.id || null, m && Ln(m) ? b.active.selected_shot_id = m.id || null : l.length || (b.active.selected_shot_id = null);
  }
  function Wc() {
    const i = (Array.isArray(b.shots) ? b.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(b.stickers) ? b.stickers : []).map((l, u) => {
      var m, _;
      const p = Zt(l) ? String(l.id || as) : String(((_ = (m = b.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : _.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function xg(i) {
    return i === "frame" ? Te.camera : i === "stroke" ? Te.paintbrush_vertical_tool : Te.image;
  }
  function xl(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: xg(i.kind)
    };
  }
  function Yc() {
    return pl();
  }
  function Zt(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === as || String(i.source_kind || "") === pN;
  }
  function zi(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Sg(i) {
    return Zt(i) && zi(i) ? rm : 1;
  }
  function wg() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function kg() {
    return String(wg() || "") === "lasso_fill";
  }
  function Ng() {
    if (r) return;
    const i = It();
    !i || !Zt(i) || (i.visible = zi(i), an(), st(), ut(), We(), rt(), be());
  }
  function Mg() {
    if (r || t !== "stickers") return;
    const i = It();
    if (!i || !Zt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = kl(os, () => {
      be();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Hi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), st(), ut(), We(), rt(), be();
  }
  function Pg(i) {
    if (!i || !Zt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = kl(os, () => {
      be();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = Hi(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function Ag() {
    const i = It();
    if (!i || !Zt(i)) return !1;
    const s = Pg(i);
    if (!s) return !1;
    const l = (u, p) => Math.abs(Number(u || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function qc(i) {
    return tr.uiList(e, i);
  }
  function Xc(i) {
    return tr.uiValue(e, i);
  }
  function Jc() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Hs(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Cg() {
    const { metaKey: i } = Jc(), s = Xc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function $i(i) {
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
  function Sl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function ar(i = {}) {
    const s = Number(i.currentTime ?? E.editorTime ?? 0), l = Number(i.duration ?? P.videoTransport.duration ?? 0), u = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!P.videoTransport.ready, p = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!P.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(U instanceof HTMLVideoElement ? U.muted : P.videoTransport.muted), y = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : U instanceof HTMLVideoElement ? U.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Kt(U), k = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: u,
      playing: p,
      visible: m,
      loop: k,
      currentTime: Number.isFinite(s) ? s : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, s / l * 100)) : 0,
      currentTimeLabel: Sl(s),
      durationLabel: Sl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(i.mode || E.mode || "playback"),
      hasAudio: w,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(y) ? y : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(y) ? y : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Ie))
    });
  }
  function Ar() {
    return !!(U instanceof HTMLVideoElement && U.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function Tg() {
    ar({
      visible: Ar()
    });
  }
  function ji() {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return !1;
    const i = Number(U.videoWidth || 0), s = Number(U.videoHeight || 0);
    (at.width !== i || at.height !== s) && (at.width = i, at.height = s);
    const l = at.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(U, 0, 0, i, s), at.__panoFrameIdx = Number(at.__panoFrameIdx || 0) + 1, E.presentedTime = Number(E.editorTime || U.currentTime || 0), !0) : !1;
  }
  function Zc() {
    return E.mode === "scrub" && Number(at.width || 0) > 0 && Number(at.height || 0) > 0 && Number(at.__panoFrameIdx || 0) > 0 ? at : U instanceof HTMLVideoElement && Number(U.videoWidth || 0) > 0 && Number(U.videoHeight || 0) > 0 && Number(U.readyState || 0) >= 2 ? U : null;
  }
  function wl(i) {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return;
    const s = Math.max(0, Number(i || 0));
    if (E.requestedTime = s, !E.seeking && !(Math.abs(Number(U.currentTime || 0) - s) <= 5e-4)) {
      E.seeking = !0;
      try {
        U.currentTime = s;
      } catch {
        E.seeking = !1;
      }
    }
  }
  function Vi() {
    if (!(U instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Jc(), s = qc(i)[0] || null, l = NN(s), u = Cg(), p = Math.max(0, Number((u == null ? void 0 : u.frames) || 0)), m = Math.max(1, Number((u == null ? void 0 : u.fps) || 24)), _ = Number((u == null ? void 0 : u.duration) || (p > 0 ? p / m : 0)), y = !!(u != null && u.has_audio) || Kt(U);
    return l && U.dataset.panoSrc !== l ? (U.pause(), U.dataset.panoSrc = l, U.dataset.panoFrameIdx = "0", U.loop = !!P.videoTransport.loop, U.muted = !!P.videoTransport.muted, U.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), U.src = l, U.load(), li(l, _, m)) : !l && U.getAttribute("src") && (U.pause(), U.removeAttribute("src"), U.load(), Tt()), U.loop !== !!P.videoTransport.loop && (U.loop = !!P.videoTransport.loop), l && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && li(l, _, m), l || Tt(), ar({
      ready: !!l,
      playing: !U.paused && !U.ended,
      visible: !!l && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: E.editorTime,
      duration: _,
      frameCount: p,
      fps: m,
      mode: E.mode,
      hasAudio: y,
      loop: !!U.loop,
      muted: !!U.muted,
      volume: Number(U.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), l || null;
  }
  function Ig(i, s = null) {
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
  function kl(i, s = null) {
    return _u(e, i, Re, s || (() => be()));
  }
  function Qc(i = null) {
    return kl(os, i);
  }
  function Hi(i, s, l) {
    const u = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = W(Number(i || 30), 0.1, 179) * pn, _ = 2 * Math.atan(Math.tan(m * 0.5) * (p / u));
    return W(_ * zr, 0.1, 179);
  }
  function Eg(i) {
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
      const _ = Number(m.yaw_deg), y = Number(m.pitch_deg), w = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![_, y, w, k].every((B) => Number.isFinite(B))) return null;
      let C = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(C, -0) && (C = 0);
      const N = {
        yaw_deg: C,
        pitch_deg: W(y, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(k, 0.1, 179)
      }, F = Number(l.source_aspect);
      return Number.isFinite(F) && F > 0 && (N.source_aspect = F), N;
    } catch {
      return null;
    }
  }
  function ef(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Pi(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: W(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Dg(i) {
    var y;
    if (!i || typeof i != "object") return ef(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const w = W(p, 0.1, 179) * pn, k = W(m, 0.1, 179) * pn, C = Math.tan(k * 0.5);
      if (Math.abs(C) > 1e-6) {
        const N = Math.tan(w * 0.5) / C;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (i != null && i.asset_id && ((y = b == null ? void 0 : b.assets) != null && y[i.asset_id])) {
      const w = b.assets[i.asset_id], k = Number((w == null ? void 0 : w.w) || 0), C = Number((w == null ? void 0 : w.h) || 0);
      k > 0 && C > 0 && (_ = k / C);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(s) ? s : 0),
        pitch_deg: W(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: W(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function Og(i) {
    return tr.linkedValue(e, i);
  }
  function Fg(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Eg(s);
    if (u) {
      const _ = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), y = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: Hi(u.hFOV_deg, _, y),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Hi(30, p, m),
      rot_deg: 0
    };
  }
  function tf(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : null, l = (s == null ? void 0 : s.link) ?? null, u = Qc(() => {
      Qa(e, "image-loaded");
    }), p = Ig(Xc("pano_sticker_input_pose"), null), m = Og("sticker_state"), _ = tr.externalStateHash(e, m), y = l == null ? null : Fg(p, m, u), w = Cm(b, {
      connected: l != null,
      linkId: l,
      stateHash: _,
      pose: y,
      imageWidth: Number((u == null ? void 0 : u.naturalWidth) || (u == null ? void 0 : u.width) || 0),
      imageHeight: Number((u == null ? void 0 : u.naturalHeight) || (u == null ? void 0 : u.height) || 0)
    });
    w.changed && (b.stickers = w.state.stickers, b.active = w.state.active, l == null && d.selectedId === as && (d.selectedId = null, d.selectedIds = []), ut(), We(), rt()), be();
  }
  function Ta(i = {}) {
    const l = i.preservePanelValues !== !1 ? It() : null;
    l && (d.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Lr(l)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, b.active.selected_sticker_id = null, b.active.selected_shot_id = null;
  }
  function Rg() {
    if (t !== "cutout") return;
    const i = He();
    i && (d.selectedId = String(i.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function Nl() {
    if (t !== "cutout") return;
    const i = He();
    na(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Te.camera : Te.plus_circle
    });
  }
  function nf() {
    const i = t === "cutout" && d.mode === "frame", s = !i && !!d.showGrid;
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
  function Cr() {
    var l;
    const i = !!He();
    d.mode === "frame" && !i && (d.mode = "pano"), d.outputPreviewRect = null, P.viewButtons.forEach((u) => {
      const p = u.key === d.mode;
      u.pressed = p ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && d.mode === "frame" ? He() : null;
    P.frameRail.visible = !!s, P.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.visible = !!s && !r && s.locked !== !0, P.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), P.frameRollKnob.displayValue = aa(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((l = d.interaction) == null ? void 0 : l.kind) === "roll_frame", P.frameRollKnob.armed = !!s && d.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = s ? Lr(s) : "", P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(Lr(s)) === u
    })), s || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!He(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = d.mode !== "frame", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame), nf(), Rf() ? _t(d.pointerPos) : Nt(d.mode === "pano" ? "grab" : "default");
  }
  function Lg() {
    const s = cf({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Ml() {
    const i = lr(d.viewYaw, d.viewPitch);
    let s = yr(0, 1, 0);
    Math.abs(er(i, s)) > 0.999 && (s = yr(0, 0, 1));
    const l = ia(fs(s, i)), u = ia(fs(i, l));
    return { right: l, up: u, fwd: i };
  }
  function Ia(i) {
    const { right: s, up: l, fwd: u } = Ml(), p = er(i, s), m = er(i, l), _ = er(i, u);
    if (_ <= 1e-5) return null;
    const y = T.width, w = T.height, k = d.viewFov * pn, C = 2 * Math.atan(Math.tan(k / 2) * (w / y)), N = y / 2 / Math.tan(k / 2), F = w / 2 / Math.tan(C / 2);
    return {
      x: y / 2 + p / _ * N,
      y: w / 2 - m / _ * F,
      z: _
    };
  }
  function Pl(i, s) {
    const { right: l, up: u, fwd: p } = Ml(), m = T.width, _ = T.height, y = d.viewFov * pn, w = 2 * Math.atan(Math.tan(y / 2) * (_ / m)), k = (i - m / 2) / (m / 2) * Math.tan(y / 2), C = (_ / 2 - s) / (_ / 2) * Math.tan(w / 2), N = us(us(cs(l, k), cs(u, C)), p);
    return ia(N);
  }
  function Jr() {
    const i = T.width, s = T.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const y = s, w = y * l;
      return { x: (i - w) * 0.5, y: 0, w, h: y };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function rf(i) {
    var _;
    if (i && typeof i == "object" && (Zt(i) || i.external === !0))
      return Qc(() => {
        Qa(e, "image-loaded");
      });
    const s = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Re.get(s);
    if (l) return l;
    const u = (_ = b.assets) == null ? void 0 : _[s], p = kN(u);
    if (!p) return null;
    const m = new Image();
    return ng(m, p), m.onload = () => {
      rg(m, p), be();
    }, m.onerror = () => {
      ig(m, p), be();
    }, m.src = p, Re.set(s, m), m;
  }
  function af(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = Ue.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ue.set(l, p), p;
  }
  function zg(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = et.get(s);
    if (l) return l.ready ? l : null;
    const u = af(i, () => {
      const C = et.get(s);
      C && (C.ready = !1), be({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const p = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (p < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = p, _.height = m;
    const y = _.getContext("2d", { willReadFrequently: !0 });
    if (!y) return null;
    y.clearRect(0, 0, p, m), y.drawImage(u, 0, 0, p, m);
    const w = y.getImageData(0, 0, p, m).data, k = { canvas: _, width: p, height: m, alpha: w, ready: !0 };
    return et.set(s, k), k;
  }
  function $g(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), _ = Un(Number(i.u || 0), p), y = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), k = Number(u || 0) * pn, C = Math.cos(k), N = Math.sin(k), F = _ / w, B = y / w, Z = F * C + B * N, K = -F * N + B * C;
    return {
      ...i,
      u: ((p + Z) % 1 + 1) % 1,
      v: m + K
    };
  }
  function jg(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, _ = $g(
      m,
      p,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), y = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(y > 1e-6) || !(w > 1e-6)) return null;
    const k = Un(Number(_.u || 0), Number(l.u0 || 0)) / y, C = (Number(_.v || 0) - Number(l.v0 || 0)) / w;
    if (k < 0 || k > 1 || C < 0 || C > 1) return 0;
    const N = zg(i);
    if (!N) return null;
    const F = W(Math.floor(k * N.width), 0, N.width - 1), B = W(Math.floor(C * N.height), 0, N.height - 1);
    return Number(N.alpha[(B * N.width + F) * 4 + 3] || 0);
  }
  function of(i, s, l, u = null) {
    if (!(s != null && s.visible) || !Or(l, s.corners)) return !1;
    const p = u || Zn(l, performance.now()), m = jg(i, p);
    return m === null ? !0 : m > 8;
  }
  function Vg() {
    var u, p, m, _, y, w, k, C;
    const i = ((p = (u = d.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : p.call(u, ml(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((y = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : y.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((C = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : C.height) || 1024));
    return { width: s, height: l };
  }
  function Hg() {
    var B, Z, K;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = zn(), u = `${Ao()}:${l.width}:${l.height}`;
    if (((B = d._activePaintEraserPreviewInfo) == null ? void 0 : B.cacheKey) === u)
      return d._activePaintEraserPreviewInfo.value || null;
    const p = hn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Y = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Ol(Y, p.targetSpace, !0);
    }
    const _ = Da(l.width, l.height, { readback: !0 });
    if (!wf(_, p, { w: l.width, h: l.height })) return null;
    const y = ((K = (Z = _.ctx) == null ? void 0 : Z.getImageData(0, 0, l.width, l.height)) == null ? void 0 : K.data) || null;
    if (!y) return null;
    let w = l.width, k = l.height, C = -1, N = -1;
    for (let Y = 0; Y < l.height; Y += 1)
      for (let ue = 0; ue < l.width; ue += 1)
        y[(Y * l.width + ue) * 4 + 3] <= 8 || (ue < w && (w = ue), Y < k && (k = Y), ue > C && (C = ue), Y > N && (N = Y));
    if (C < w || N < k)
      return d._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const F = {
      surface: _,
      bounds: { minX: w, minY: k, maxX: C, maxY: N },
      key: `${u}:${w}:${k}:${C}:${N}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: u, value: F }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function Ui() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function Ug(i, s, l) {
    var u, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, _ = ((p = i.item) == null ? void 0 : p.transform) || {}, y = Number(m.u0 || 0) + Number(_.du || 0), w = Number(m.u1 || 0) + Number(_.du || 0), k = Number(m.v0 || 0) + Number(_.dv || 0), C = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((y % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - y >= 1 || y < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = qn(i.actionGroupId, "paint"), _ = Xr(i.actionGroupId, "paint", m);
      if (!_) return null;
      const y = _.centerUv.u - _.halfW, w = _.centerUv.u + _.halfW, k = _.centerUv.v - _.halfH, C = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((y % 1 + 1) % 1 * s),
        maxX: Math.ceil((w % 1 + 1) % 1 * s),
        minY: Math.floor(W(k, 0, 1) * l),
        maxY: Math.ceil(W(C, 0, 1) * l),
        wraps: w - y >= 1 || y < 0 || w > 1
      };
    }
    return null;
  }
  function Bg(i, s, l) {
    if (!i || !s) return !1;
    const u = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: l - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], p = u(i), m = u(s);
    return p.some((_) => m.some((y) => !(_.maxX < y.minX || y.maxX < _.minX || _.maxY < y.minY || y.maxY < _.minY)));
  }
  function Gg(i, s, l) {
    var _e, ze, Be, it, ve, ae, me;
    if (!i || !s || !((_e = l == null ? void 0 : l.surface) != null && _e.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || p < 1) return i;
    const m = Ug(s, u, p);
    if (m && !Bg(m, l.bounds, u)) return i;
    const _ = String(((ze = s.item) == null ? void 0 : ze.id) || s.id || ""), y = ((Be = s.item) == null ? void 0 : Be.transform) || {}, w = `${l.key}:${_}:${u}:${p}:${Number(y.du || 0).toFixed(6)}:${Number(y.dv || 0).toFixed(6)}:${Number(y.rot_deg || 0).toFixed(3)}:${Number(y.scale || 1).toFixed(4)}`, k = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(w)) return k.get(w);
    const C = W(Math.floor(Number(((it = l.bounds) == null ? void 0 : it.minX) || 0)), 0, Math.max(0, u - 1)), N = W(Math.floor(Number(((ve = l.bounds) == null ? void 0 : ve.minY) || 0)), 0, Math.max(0, p - 1)), F = W(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), C, Math.max(0, u - 1)), B = W(Math.ceil(Number(((me = l.bounds) == null ? void 0 : me.maxY) || 0)), N, Math.max(0, p - 1)), Z = Math.max(1, F - C + 1), K = Math.max(1, B - N + 1), Y = Da(u, p, { readback: !0 });
    Y.ctx.clearRect(0, 0, u, p), Y.ctx.drawImage(i, 0, 0);
    const ue = Y.ctx.getImageData(C, N, Z, K);
    Y.ctx.save(), Y.ctx.globalCompositeOperation = "destination-out", Y.ctx.drawImage(l.surface.canvas, 0, 0), Y.ctx.restore();
    const pe = Y.ctx.getImageData(C, N, Z, K);
    let le = !1;
    for (let Oe = 0; Oe < Z * K; Oe += 1) {
      const Fe = ue.data[Oe * 4 + 3], Ee = pe.data[Oe * 4 + 3];
      if (Fe > Ee) {
        le = !0;
        break;
      }
    }
    return le ? (k.size > 64 && k.clear(), k.set(w, Y.canvas), Y.canvas) : (k.set(w, i), i);
  }
  function sf(i, s = null) {
    const l = Jt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const p = af(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: _ } = Vg(), y = (i == null ? void 0 : i.transform) || {}, w = [
      l,
      m,
      _,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      y.du,
      y.dv,
      y.rot_deg,
      y.scale,
      Oa()
    ].join(":"), k = gt.get(w);
    if (k) return k;
    gt.size > 64 && gt.clear();
    const C = document.createElement("canvas");
    C.width = m, C.height = _;
    const N = C.getContext("2d");
    if (!N) return null;
    const F = Number(u.u0 || 0) * m, B = Number(u.v0 || 0) * _, Z = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), K = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * _), Y = F + Z * 0.5 + Number(y.du || 0) * m, ue = B + K * 0.5 + Number(y.dv || 0) * _, pe = Number(y.rot_deg || 0) * pn, le = Math.max(0.01, Number(y.scale || 1));
    for (const _e of [-m, 0, m])
      N.save(), N.translate(Y + _e, ue), N.rotate(pe), N.scale(le, le), N.drawImage(p, -Z * 0.5, -K * 0.5, Z, K), N.restore();
    return gt.set(w, C), C;
  }
  function Kg() {
    return fl(b, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Wg(i) {
    return im(
      b,
      (s, l, u) => rf(u || s),
      { scene: i }
    );
  }
  function lf(i, s, l, u, p = "modal_object_view") {
    if (!i || !s || !l) return !1;
    String((l == null ? void 0 : l.mode) || "");
    const m = ui(u);
    if (pf(s, l))
      return n0(
        s,
        l,
        m && d.showPanorama ? u : null,
        `${p}_bg_gl`
      );
    const y = Fo(), w = Ro(y), k = d.showObjects ? Lo() : Ea([]), N = Xa({
      stateRevision: [
        p,
        m ? $i(u) : "no_bg",
        Array.isArray(w) ? w.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "none",
        k.length ? k.map((K) => `${String((K == null ? void 0 : K.id) || "")}:${String((K == null ? void 0 : K.revision) || "")}:${Number((K == null ? void 0 : K.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? u : null,
      backgroundRevision: m ? `${p}:${$i(u)}` : "",
      coverageDeg: ln(b.coverage),
      scene: y,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), F = xe;
    if (!F.syncState(N)) return !1;
    const Z = F.renderToTarget(`${p}_direct`, l, {
      width: s.w,
      height: s.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Z ? (i.drawImage(Z, s.x, s.y, s.w, s.h), !0) : !1;
  }
  async function Al(i, s) {
    const l = await new Promise((y) => i.toBlob(y, "image/png")), u = new FormData();
    u.append("image", l, s), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const p = await bn.fetchApi("/upload/image", { method: "POST", body: u });
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
  let Eo = null, Do = !1;
  function Yg() {
    const i = Uh(b.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const s = b.painting_layer, l = Wi();
    return !s || typeof s != "object" || String(s.revision || "") !== l || i.totalPaintCount > 0 && !s.paint || i.totalMaskCount > 0 && !s.mask;
  }
  function uf() {
    const i = String(e.id ?? "0"), s = ss.get(i);
    if (Do && s) return s;
    const l = (async () => {
      var m, _, y, w, k, C, N, F, B, Z, K, Y;
      const u = Wi(), p = Uh(b.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        b.painting_layer !== null && (b.painting_layer = null, Eo = u, In());
        return;
      }
      if (Eo !== u && !Do) {
        Do = !0;
        try {
          Vo();
          const ue = ml(!1), pe = ((_ = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, ue)) || null, le = ((y = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : y.canvas) || null, _e = ((w = pe == null ? void 0 : pe.committedMask) == null ? void 0 : w.canvas) || null, ze = Math.max(1, Number(((k = pe == null ? void 0 : pe.descriptor) == null ? void 0 : k.width) || (le == null ? void 0 : le.width) || (_e == null ? void 0 : _e.width) || 2048)), Be = Math.max(1, Number(((C = pe == null ? void 0 : pe.descriptor) == null ? void 0 : C.height) || (le == null ? void 0 : le.height) || (_e == null ? void 0 : _e.height) || 1024));
          (!le && p.totalPaintCount > 0 || !_e && p.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((N = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== ze || Number(((F = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== Be) && (d._paintLayerSyncBlankSurface = Da(ze, Be)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ze, Be));
          const it = le || p.totalPaintCount > 0 && ((B = d._paintLayerSyncBlankSurface) == null ? void 0 : B.canvas) || null, ve = _e || p.totalMaskCount > 0 && ((Z = d._paintLayerSyncBlankSurface) == null ? void 0 : Z.canvas) || null;
          if (!it && !ve) return;
          let ae = null, me = null;
          const Oe = [];
          if (p.totalPaintCount > 0) {
            ae = await Al(it, `pano_paint_${i}.png`);
            for (const Fe of ue) {
              const Ee = String(Fe || "").trim();
              if (!Ee) continue;
              const qe = ((Y = (K = d.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : Y.call(K, Ee)) || null;
              if (!qe) continue;
              const lt = Ee.replace(/[^a-zA-Z0-9_-]+/g, "_"), tt = await Al(qe, `pano_group_${i}_${lt}.png`);
              tt && Oe.push({
                id: Ee,
                actionGroupId: Ee,
                image: tt
              });
            }
          }
          p.totalMaskCount > 0 && (me = await Al(ve, `pano_mask_${i}.png`)), u === Wi() && (b.painting_layer = {
            paint: ae,
            mask: me,
            groups: Oe,
            revision: u
          }, Eo = u, In());
        } catch (ue) {
          throw ue;
        } finally {
          Do = !1;
        }
      }
    })();
    return ss.set(i, l), l.finally(() => {
      ss.get(i) === l && ss.delete(i);
    }), l;
  }
  function Bi() {
    if (t === "cutout") {
      const y = Zc();
      if (y) return y;
      const w = xu(
        e,
        ["erp_image", "bg_erp"],
        () => be(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !ec(w) ? w : _u(e, "pano_input_images", Re, () => be()) || w || null;
    }
    const i = Zc();
    if (i) return i;
    const s = _u(e, "pano_input_images", Re, () => be());
    if (s && !ec(s)) return s;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((y) => String((y == null ? void 0 : y.name) || "")) : [], u = l.includes("erp_image"), p = l.includes("bg_erp");
    let m = [];
    return r && (u || p) ? m = u ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], xu(e, m, () => be(), `background:${m.join("|")}`) || s || null;
  }
  function ui(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function qg() {
    let i = wa;
    const s = [];
    if (d.showPanorama) {
      const l = Bi();
      i = Qu(l, ui);
    }
    if (d.showObjects) {
      const l = Array.isArray(b.stickers) ? b.stickers : [];
      for (const u of l) {
        if ((u == null ? void 0 : u.visible) === !1) continue;
        const p = rf(u);
        s.push(Qu(p, ui));
      }
    }
    return oN({
      presented: oe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Gi() {
    const i = new Set(
      (b.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(b.assets || {}).forEach((s) => {
      i.has(s) || (delete b.assets[s], Re.delete(s));
    });
  }
  function Cl(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(W(i.y, -1, 1))
    };
  }
  function Tl(i, s = null) {
    const { lon: l, lat: u } = Cl(i), p = Jr();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const _ = p.y + (0.5 - u / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function Oo(i) {
    const s = lr(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let l = yr(0, 1, 0);
    Math.abs(er(s, l)) > 0.999 && (l = yr(0, 0, 1));
    const u = ia(fs(l, s)), p = ia(fs(s, u)), m = Math.tan(W(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * pn), _ = Math.tan(W(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * pn), y = Number(i.rot_deg || i.roll_deg || 0) * pn, w = Math.cos(y), k = Math.sin(y);
    return {
      centerDir: s,
      right: u,
      up: p,
      tanX: m,
      tanY: _,
      cr: w,
      sr: k
    };
  }
  function Zr(i, s, l) {
    const u = s * i.cr - l * i.sr, p = s * i.sr + l * i.cr;
    return ia(us(us(i.centerDir, cs(i.right, u)), cs(i.up, p)));
  }
  function cf(i) {
    const s = Oo(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: p }) => Zr(s, u * s.tanX, p * s.tanY));
  }
  function ff(i, s, l) {
    const u = Oo(i), p = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return Zr(u, p, m);
  }
  function df(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: W((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Xg(i) {
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
    ].map((F) => Co(To(F, l, u, p), m, _));
  }
  function Jg(i) {
    const s = Jt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${d.mode}:${Oa()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (d.mode === "frame") {
      const m = He(), _ = m ? Yt(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Zg(i) {
    const s = String((i == null ? void 0 : i.id) || ""), u = [
      Ln(i) ? "frame" : vt(i) ? "sticker" : "item",
      s,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Lr(i)
    ].join(":");
    if (d.mode === "frame") {
      const p = He(), m = p ? Yt(p) : null;
      return `${u}:frame:${String((p == null ? void 0 : p.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Qg() {
    var s;
    const i = String(((s = b.ui_settings) == null ? void 0 : s.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function hf() {
    var i;
    return !!q && !!((i = xe == null ? void 0 : xe.isSupported) != null && i.call(xe));
  }
  function pf(i, s) {
    return !hf() || t !== "stickers" && t !== "cutout" || String((s == null ? void 0 : s.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((T == null ? void 0 : T.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((T == null ? void 0 : T.height) || 0));
  }
  function Fo() {
    return d.showObjects ? Kg() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ro(i) {
    return !d.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Wg(i);
  }
  function mf() {
    var i, s;
    return ((s = (i = d.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function e0() {
    return mf() ? `${Fl()}:mask_display` : "";
  }
  function Ea(i) {
    if (!d.showMask) return i;
    const s = mf();
    if (!s) return i;
    const l = e0(), u = i.reduce((_, y) => Math.max(_, Number((y == null ? void 0 : y.zIndex) || 0)), -1), p = (Array.isArray(b.stickers) ? b.stickers : []).reduce((_, y) => Math.max(_, Number((y == null ? void 0 : y.z_index) || 0)), -1), m = Math.max(u, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Lo() {
    var u, p;
    const i = gl(!0), s = Hg(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const _ = String(m.actionGroupId || m.id || "");
        if (!_) continue;
        const y = ((p = (u = d.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : p.call(u, _)) || null;
        if (!y) continue;
        l.push({
          id: `paint_group:${_}`,
          source: y,
          revision: `${Fl()}:${_}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const _ = m.item || null, y = Jt((_ == null ? void 0 : _.id) || m.id || "");
        if (!y) continue;
        const w = sf(_, () => be());
        if (!w) continue;
        const k = Gg(w, m, s), C = (_ == null ? void 0 : _.transform) || {};
        l.push({
          id: `raster:${y}`,
          source: k,
          revision: [
            Wi(),
            (s == null ? void 0 : s.key) || "",
            y,
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
    return Ea(l);
  }
  function t0(i, s = "modal_bg_gl") {
    const l = Fo(), u = Ro(l), p = ui(i), m = p ? $i(i) : "none", _ = d.showObjects ? Lo() : Ea([]), y = null, w = [
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
      descriptor: Xa({
        stateRevision: w,
        backgroundSource: p ? i : null,
        backgroundRevision: p ? `${s}:${m}` : "",
        coverageDeg: ln(b.coverage),
        scene: l,
        textures: u,
        paintSource: y,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: p || u.length > 0 || _.length > 0
    };
  }
  function Il() {
    if (!q) return;
    const i = q.getContext("webgl2");
    if (i)
      i.viewport(0, 0, q.width, q.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const s = q.getContext("2d");
      s && (s.clearRect(0, 0, q.width, q.height), s.fillStyle = "#070707", s.fillRect(0, 0, q.width, q.height));
    }
    oe.backgroundWasVisible = !1, oe.backgroundDirty = !1;
  }
  function n0(i, s, l, u = "modal_bg_gl") {
    var k;
    if (!pf(i, s)) return !1;
    if (!oe.backgroundDirty && oe.backgroundWasVisible) return !0;
    const { descriptor: p, hasContent: m } = t0(l, u);
    if (!m || !xe.syncState(p))
      return Il(), !1;
    const y = xe.renderToTarget("modal_pano", s, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (k = q == null ? void 0 : q.getContext) == null ? void 0 : k.call(q, "2d");
    return !y || !w ? (Il(), !1) : (w.clearRect(0, 0, q.width, q.height), w.drawImage(y, 0, 0, q.width, q.height), oe.backgroundWasVisible = !0, oe.backgroundDirty = !1, !0);
  }
  function r0(i = !1) {
    const s = T.width, l = T.height, u = Jr();
    if (A.globalAlpha = 1, A.lineWidth = 1, i || (A.fillStyle = "#070707", A.fillRect(0, 0, s, l), A.fillStyle = "#070707", A.fillRect(u.x, u.y, u.w, u.h)), Vo(), lf(
      A,
      { x: u.x, y: u.y, w: u.w, h: u.h },
      { mode: "unwrap" },
      Bi(),
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
  function gf(i, s, l = 1) {
    let u = !1;
    A.strokeStyle = s, A.lineWidth = l, A.beginPath();
    for (const p of i) {
      const m = Ia(p);
      if (!m) {
        u = !1;
        continue;
      }
      u ? A.lineTo(m.x, m.y) : (A.moveTo(m.x, m.y), u = !0);
    }
    A.stroke();
  }
  function i0(i = !1) {
    const s = T.width, l = T.height;
    if (i || (hf() ? A.clearRect(0, 0, s, l) : (A.fillStyle = "#070707", A.fillRect(0, 0, s, l))), Vo(), lf(
      A,
      { x: 0, y: 0, w: s, h: l },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: ln(b.coverage)
      },
      Bi(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push(lr(p, _));
        gf(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push(lr(_, p));
        gf(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: lr(-90, 0) },
        { name: "Front", dir: lr(0, 0) },
        { name: "Right", dir: lr(90, 0) },
        { name: "Back", dir: lr(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", u.forEach((p) => {
        const m = Ia(p.dir);
        m && A.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function a0(i, s = null, l = null, u = null) {
    if (d.mode === "frame") {
      const p = s || He();
      if (!p) return [];
      const m = l || Yt(p);
      return j0(i, p, m);
    }
    return kf(i, u);
  }
  function zo(i, s = null, l = null, u = null, p = null) {
    if (!i) return null;
    if (d.mode === "unwrap") {
      const _ = kf([i], p);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const m = Ki(i);
    return m ? Tr(m, s, l, u) : null;
  }
  function o0(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = qn(l, i.layerKind), p = Xr(l, i.layerKind, u), m = (p == null ? void 0 : p.centerUv) || yl(l, i.layerKind, u), _ = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, y = [], w = d.mode === "frame" ? He() : null, k = w ? Yt(w) : null;
    for (const le of u) {
      const _e = (le == null ? void 0 : le.geometry) || null, ze = (_e == null ? void 0 : _e.geometryKind) === "lasso_fill" ? _e == null ? void 0 : _e.points : (_e == null ? void 0 : _e.processedPoints) || (_e == null ? void 0 : _e.rawPoints) || (_e == null ? void 0 : _e.points) || [], Be = a0(ze, w, k, _).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!Be.length) continue;
      const it = Qr(String((le == null ? void 0 : le.toolKind) || "pen")), ve = En[it] || En[Dr];
      y.push({
        points: Be,
        closed: String((_e == null ? void 0 : _e.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((ve == null ? void 0 : ve.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || i.layerKind || "paint")
      });
    }
    const C = zo(m, null, w, k, _);
    if (!C) {
      const le = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, le), le;
    }
    const F = cg(p).map((le) => zo(le, C.x, w, k, _)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (F.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(s, le), le;
    }
    const B = (le, _e) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((_e == null ? void 0 : _e.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((_e == null ? void 0 : _e.y) || 0)) * 0.5,
      a: le,
      b: _e
    }), Z = B(F[0], F[1]), K = B(F[1], F[2]), Y = B(F[2], F[3]), ue = B(F[3], F[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(C.x || 0), y: Number(C.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...Z },
        { edge: "right", ...K },
        { edge: "bottom", ...Y },
        { edge: "left", ...ue }
      ],
      rotateStemBase: { x: Z.x, y: Z.y },
      rotateHandle: { x: Z.x, y: Z.y - 30 },
      strokePaths: y,
      visible: !0
    };
    return d._strokeGeomCache.set(s, pe), pe;
  }
  function s0(i, s) {
    const l = d.mode === "frame" ? He() : null, u = l ? Yt(l) : null, p = df(i), m = d.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, _ = zo(p, null, l, u, m), w = Xg(i).map((F) => zo(F, (_ == null ? void 0 : _.x) ?? null, l, u, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(w) || w.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(s, F), F;
    }
    const k = w.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: k.reduce((F, B) => F + Number(B.x || 0), 0) / k.length,
        y: k.reduce((F, B) => F + Number(B.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return d._strokeGeomCache.set(s, N), N;
  }
  function Tr(i, s = null, l = null, u = null, p = {}) {
    if (d.mode === "frame") {
      const _e = l || He(), ze = u || Yt(_e);
      if (!_e || !ze) return null;
      const Be = _e ? Fa(_e, i) : null;
      return Be ? {
        x: Number(ze.x || 0) + Number(Be.x || 0) * Number(ze.w || 0),
        y: Number(ze.y || 0) + Number(Be.y || 0) * Number(ze.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return Tl(i, s);
    const { right: m, up: _, fwd: y } = Ml(), w = er(i, m), k = er(i, _), C = er(i, y), N = 1e-4;
    if (!Number.isFinite(C) || C <= N && !(p != null && p.clipBehind)) return null;
    const F = Math.max(C, N), B = T.width, Z = T.height, K = d.viewFov * pn, Y = 2 * Math.atan(Math.tan(K / 2) * (Z / Math.max(B, 1))), ue = B / 2 / Math.tan(K / 2), pe = Z / 2 / Math.tan(Y / 2), le = Math.max(B, Z) * 2;
    return {
      x: W(B / 2 + w / F * ue, -le, B + le),
      y: W(Z / 2 - k / F * pe, -le, Z + le),
      z: F,
      rawZ: C,
      clipped: C <= N
    };
  }
  function l0(i, s = []) {
    if (d.mode !== "pano" || vt(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? CN(0.035, 0.2, Math.min(...l)) : 1;
  }
  function u0(i) {
    const s = lr(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "frame" ? He() : null, u = l ? Yt(l) : null, p = d.mode === "pano" && (vt(i) || Ln(i)), m = p ? { clipBehind: !0 } : null, _ = Tr(s, null, l, u, m);
    if (!_) return { visible: !1 };
    const y = Oo(i), k = cf(i).map((ae) => Tr(ae, _.x, l, u, m)).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
    if (k.length < 4) return { visible: !1 };
    const C = Zr(y, 0, y.tanY), N = Zr(y, 0, y.tanY + Math.max(y.tanY * 0.43, 0.053)), F = Tr(C, _.x, l, u, m);
    if (!F) return { visible: !1 };
    const B = Tr(N, (F == null ? void 0 : F.x) ?? _.x, l, u, m), Z = ((B == null ? void 0 : B.x) ?? F.x) - F.x, K = ((B == null ? void 0 : B.y) ?? F.y) - F.y, Y = Math.hypot(Z, K) || 1, ue = {
      x: F.x + Z / Y * 30,
      y: F.y + K / Y * 30
    }, pe = Tr(Zr(y, 0, y.tanY), _.x, l, u, m), le = Tr(Zr(y, y.tanX, 0), _.x, l, u, m), _e = Tr(Zr(y, 0, -y.tanY), _.x, l, u, m), ze = Tr(Zr(y, -y.tanX, 0), _.x, l, u, m);
    if (!pe || !le || !_e || !ze) return { visible: !1 };
    const Be = [
      _,
      ...k,
      F,
      B,
      pe,
      le,
      _e,
      ze
    ];
    if (p && !Be.some((ae) => Number((ae == null ? void 0 : ae.rawZ) ?? (ae == null ? void 0 : ae.z)) > 1e-4)) return { visible: !1 };
    const it = l0(i, Be), ve = [
      {
        edge: "top",
        x: pe.x,
        y: pe.y,
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
        x: _e.x,
        y: _e.y,
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
      center: { x: _.x, y: _.y },
      corners: k.map((ae) => ({ x: ae.x, y: ae.y })),
      edgeMidpoints: ve,
      rotateStemBase: { x: F.x, y: F.y },
      rotateHandle: ue,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: it,
      visible: !0
    };
  }
  function Qt(i) {
    if (Wt(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = gg(p, i.layerKind), _ = d._strokeGeomCache.get(m);
      return _ || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), o0(i, m));
    }
    if (fn(i)) {
      const p = Jg(i), m = d._strokeGeomCache.get(p);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), s0(i, p));
    }
    const s = Zg(i), l = d._strokeGeomCache.get(s);
    if (l) return l;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const u = u0(i);
    return d._strokeGeomCache.set(s, u), u;
  }
  function $o(i, s, l, u = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const _ = m / l;
      let y = 0, w = 0;
      s === 0 ? (y = _, w = 0) : s === 1 ? (y = 1, w = _) : s === 2 ? (y = 1 - _, w = 1) : (y = 0, w = 1 - _);
      const k = ff(i, y, w), C = d.mode === "unwrap" ? Tl(k, u) : Ia(k);
      C && p.push(C);
    }
    return p;
  }
  function c0(i, s) {
    const l = lr(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), u = d.mode === "unwrap" ? Tl(l) : null, p = u ? u.x : null, m = d.mode === "pano" ? 28 : 20, _ = [
      $o(i, 0, m, p),
      $o(i, 1, m, p),
      $o(i, 2, m, p),
      $o(i, 3, m, p)
    ];
    Im(A, _, { selected: s });
  }
  function f0() {
    const i = [...Array.isArray(b.shots) ? b.shots : []], s = [...Array.isArray(b.stickers) ? b.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function El() {
    const i = [...Array.isArray(b.shots) ? b.shots : []];
    return [...[...Array.isArray(b.stickers) ? b.stickers : []].sort((l, u) => Number(u.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function jo(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function bf(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const p = W(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = A.globalAlpha;
    A.globalAlpha = m * p;
    const _ = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", y = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = s ? 3.2 : 2.6;
    jo(A, u), A.fillStyle = y, A.fill(), A.strokeStyle = _, A.lineWidth = w, A.stroke(), A.save(), A.strokeStyle = _, A.lineWidth = s ? 3.2 : 2.6, A.lineCap = "round";
    const k = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], C = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = s ? 12 : 9;
    k.forEach((F) => {
      const Z = k.find((pe) => (pe == null ? void 0 : pe.edge) === C[F == null ? void 0 : F.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, K = Z.x - F.x, Y = Z.y - F.y, ue = Math.hypot(K, Y) || 1;
      A.beginPath(), A.moveTo(F.x, F.y), A.lineTo(F.x + K / ue * N, F.y + Y / ue * N), A.stroke();
    }), A.restore(), A.globalAlpha = m;
  }
  function d0(i, s, l, u) {
    const p = W(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (Ln(i)) {
      bf(s, l, u);
      return;
    }
    if (vt(i)) {
      const _ = A.globalAlpha;
      A.globalAlpha = _ * Sg(i) * p, d.mode === "frame" ? (A.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = l ? 2 : 1, jo(A, s.corners), A.stroke()) : c0(i, l), A.globalAlpha = _;
      return;
    }
    const m = A.globalAlpha;
    A.globalAlpha = m * p, A.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", jo(A, s.corners), A.fill(), A.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = l ? 2.8 : 1.9, jo(A, s.corners), A.stroke(), A.globalAlpha = m;
  }
  function yf(i, s, l) {
    if (vt(i)) {
      Em(A, s, { accent: l });
      return;
    }
    A.fillStyle = l, s.corners.forEach((u) => {
      A.beginPath(), A.arc(u.x, u.y, 6.5, 0, Math.PI * 2), A.fill();
    }), Ln(i) && (A.strokeStyle = l, A.lineCap = "round", A.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var C, N, F, B;
      const p = (((C = u.b) == null ? void 0 : C.x) ?? u.x) - (((N = u.a) == null ? void 0 : N.x) ?? u.x), m = (((F = u.b) == null ? void 0 : F.y) ?? u.y) - (((B = u.a) == null ? void 0 : B.y) ?? u.y), _ = Math.hypot(p, m) || 1, y = p / _, w = m / _, k = 10;
      A.beginPath(), A.moveTo(u.x - y * k, u.y - w * k), A.lineTo(u.x + y * k, u.y + w * k), A.stroke();
    }), A.lineCap = "butt"), Wt(i) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), A.lineTo(s.rotateHandle.x, s.rotateHandle.y), A.stroke(), A.fillStyle = l, A.beginPath(), A.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function h0() {
    var y;
    const [i, s] = Qg(), l = d.mode === "frame" ? [] : Xn(), u = l.length > 1, p = t === "cutout" ? f0() : Rn(), m = p.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${Ln(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== p || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: p,
      orderKey: m,
      sorted: [...p]
    });
    const _ = d._sortedItemsCache.sorted;
    for (const w of _) {
      const k = d.mode !== "frame" && !u && Kc(w);
      if (d.mode === "frame" && !k || !d.showObjects && !Ln(w)) continue;
      const C = vt(w), N = Ln(w), F = wn(w);
      if (!C && !N)
        continue;
      const B = Qt(w);
      if (t !== "stickers" && !B.visible)
        continue;
      const Z = W(Number((B == null ? void 0 : B.visibilityAlpha) ?? 1), 0, 1);
      if (Z <= 0.01) continue;
      const K = N && t === "cutout" && d.mode === "pano" ? W(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= K, d0(w, B, k, F), k && B.visible) {
        const Y = F ? "#ff4d4f" : C && Zt(w) ? "#f59e0b" : "#0070f3", ue = A.globalAlpha;
        A.globalAlpha = ue * Z, yf(w, B, Y), A.globalAlpha = ue;
      }
      A.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !He() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const w = d.cutoutPanoFrameVisual, k = W(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= k, bf(w.geom, w.selected, w.locked), w.selected && yf(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (u) {
      const w = vl(l);
      if (w != null && w.visible) {
        const k = _l(l) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let C = 1; C < w.corners.length; C += 1) A.lineTo(w.corners[C].x, w.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = k, w.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      l.forEach((w) => {
        if (!Wt(w) && !fn(w)) return;
        const k = Qt(w);
        if (!(k != null && k.visible)) return;
        const C = wn(w) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(k.corners[0].x, k.corners[0].y);
        for (let N = 1; N < k.corners.length; N += 1) A.lineTo(k.corners[N].x, k.corners[N].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, k.corners.forEach((N) => {
          A.beginPath(), A.arc(N.x, N.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((y = d.interaction) == null ? void 0 : y.kind) === "marquee_select") {
      const w = Vf(d.interaction.start, d.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
    d.hqFrames && i >= 40 && s >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && be());
  }
  function p0(i) {
    const s = vr(i), l = W(Number((s == null ? void 0 : s.aspect) || 1), 0.05, 20), u = 320;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function vf(i, s = !1) {
    const l = W(Pi(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function m0(i) {
    if (!un || !i) return !1;
    const s = un.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || un.clientWidth || 0)), u = Math.round(Number(s.clientHeight || un.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function g0() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function b0(i, s = {}) {
    if (!i) return "";
    const l = Bi(), u = l && ui(l) ? $i(l) : "no_bg", p = p0(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      Fl(),
      g0(),
      Ao(),
      u,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${p.width}x${p.height}`,
      String(s.quality || "balanced")
    ].join("|");
  }
  function y0() {
    var F, B, Z, K;
    if (d.outputPreviewRect = null, P.outputPreviewToggle.visible = d.mode !== "frame" && !!He(), t !== "cutout" || !P.cameraPreview) return;
    if (d.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    if (!i) {
      P.cameraPreview.visible = !0, P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = "Add Frame to preview", (F = Ae == null ? void 0 : Ae.clearScene) == null || F.call(Ae), (B = De == null ? void 0 : De.requestRender) == null || B.call(De);
      return;
    }
    P.cameraPreview.visible = !0;
    const s = Bi();
    if (!i || !Ae || !De) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (Z = Ae == null ? void 0 : Ae.clearScene) == null || Z.call(Ae), (K = De == null ? void 0 : De.requestRender) == null || K.call(De);
      return;
    }
    const l = vf(i, !!d.outputPreviewExpanded);
    P.cameraPreview.width = l.width, P.cameraPreview.height = l.height, P.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const u = Fo(), p = Ro(u), m = ui(s), _ = m ? $i(s) : "none", y = d.showObjects ? Lo() : Ea([]), w = Xa({
      stateRevision: [
        "cutout_preview_camera",
        _,
        Array.isArray(u == null ? void 0 : u.stickers) ? u.stickers.map((Y) => String((Y == null ? void 0 : Y.id) || "")).join(",") : "none",
        Array.isArray(p) ? p.map((Y) => `${String((Y == null ? void 0 : Y.assetId) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}`).join(",") : "none",
        y.length ? y.map((Y) => `${String((Y == null ? void 0 : Y.id) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}:${Number((Y == null ? void 0 : Y.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        ln(b.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? s : null,
      backgroundRevision: m ? `cutout_preview:${_}` : "",
      coverageDeg: ln(b.coverage),
      scene: u,
      textures: p,
      rasterEntries: y,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || p.length > 0 || y.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, Ae.clearScene(), De.requestRender();
      return;
    }
    if (d.showPanorama && !m && p.length === 0 && y.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = s ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, Ae.clearScene(), De.requestRender();
      return;
    }
    Ae.syncScene(w), De.setView(vr(i));
    const C = m0(l), N = C ? De.present() : !1;
    C || De.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = C && N ? "" : "Loading preview", P.cameraPreview.settled = C && N && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame;
  }
  function v0(i, s, l, u = {}) {
    if (!Ae || !l) return !1;
    const p = Bi(), m = Fo(), _ = Ro(m), y = ui(p), w = d.showObjects ? Lo() : Ea([]);
    return y || _.length > 0 || w.length > 0 ? (Ae.syncScene(Xa({
      stateRevision: b0(l, u),
      backgroundSource: y && d.showPanorama ? p : null,
      backgroundRevision: y ? `cutout_frame:${$i(p)}` : "",
      coverageDeg: ln(b.coverage),
      scene: m,
      textures: _,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), Ae.renderShotToContext(i, s, l, u)) : !1;
  }
  function Dl(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return ff(i, l, u);
  }
  function Ki(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return yr(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function _0(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function x0(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: dn(i, "widthScale", 1),
      pressureLike: dn(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function S0(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Ol(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (u) {
      let K = null;
      i.forEach((Y) => {
        const ue = Number((Y == null ? void 0 : Y.u) || 0), pe = Number((Y == null ? void 0 : Y.v) || 0), le = (ue % 1 + 1) % 1, _e = K == null ? le : K + Un(le, (K % 1 + 1) % 1);
        p.set(Y, { x: _e, y: pe }), K = _e;
      });
    }
    const m = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : p.get(K) || _0(K), _ = (K, Y, ue, pe = {}) => {
      const le = u ? (Number(Y) % 1 + 1) % 1 : Number(Y), _e = x0(K, le, ue, pe);
      return p.set(_e, { x: Number(Y), y: Number(ue) }), _e;
    }, y = (K, Y, ue) => {
      const pe = m(K), le = m(Y);
      return _(K, Gn(pe.x, le.x, ue), Gn(pe.y, le.y, ue), {
        t: Gn(Number((K == null ? void 0 : K.t) || 0), Number((Y == null ? void 0 : Y.t) || 0), ue),
        widthScale: Gn(dn(K, "widthScale", 1), dn(Y, "widthScale", 1), ue),
        pressureLike: Gn(dn(K, "pressureLike", 1), dn(Y, "pressureLike", 1), ue)
      });
    };
    if (i.length === 1) {
      const K = m(i[0]);
      return [_(i[0], K.x, K.y)];
    }
    const w = S0(s, l), k = (K, Y) => {
      const ue = [0];
      for (let ae = 1; ae < K.length; ae += 1) {
        const me = m(K[ae - 1]), Oe = m(K[ae]);
        ue.push(ue[ae - 1] + Math.hypot(Oe.x - me.x, Oe.y - me.y));
      }
      const pe = ue[ue.length - 1] || 0;
      if (pe <= 1e-8) {
        const ae = K[0], me = m(ae);
        return [_(ae, me.x, me.y)];
      }
      const le = [];
      let _e = 0;
      for (let ae = 0; ae <= pe + 1e-9; ae += Y) {
        for (; _e < ue.length - 2 && ue[_e + 1] < ae; ) _e += 1;
        const me = ue[_e], Oe = ue[_e + 1], Fe = Math.max(1e-8, Oe - me);
        le.push(y(K[_e], K[_e + 1], W((ae - me) / Fe, 0, 1)));
      }
      const ze = K[K.length - 1], Be = m(ze), it = le[le.length - 1], ve = it ? m(it) : null;
      return (!ve || Math.hypot(ve.x - Be.x, ve.y - Be.y) > Y * 0.35) && le.push(_(ze, Be.x, Be.y)), le;
    }, C = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const Y = m(K[0]), ue = [_(K[0], Y.x, Y.y)];
      for (let _e = 0; _e < K.length - 1; _e += 1) {
        const ze = K[_e], Be = K[_e + 1], it = m(ze), ve = m(Be), ae = _(
          ze,
          it.x * 0.75 + ve.x * 0.25,
          it.y * 0.75 + ve.y * 0.25,
          {
            t: Number(ze.t || 0) * 0.75 + Number(Be.t || 0) * 0.25,
            widthScale: dn(ze, "widthScale", 1) * 0.75 + dn(Be, "widthScale", 1) * 0.25,
            pressureLike: dn(ze, "pressureLike", 1) * 0.75 + dn(Be, "pressureLike", 1) * 0.25
          }
        ), me = _(
          ze,
          it.x * 0.25 + ve.x * 0.75,
          it.y * 0.25 + ve.y * 0.75,
          {
            t: Number(ze.t || 0) * 0.25 + Number(Be.t || 0) * 0.75,
            widthScale: dn(ze, "widthScale", 1) * 0.25 + dn(Be, "widthScale", 1) * 0.75,
            pressureLike: dn(ze, "pressureLike", 1) * 0.25 + dn(Be, "pressureLike", 1) * 0.75
          }
        );
        ue.push(ae, me);
      }
      const pe = K[K.length - 1], le = m(pe);
      return ue.push(_(pe, le.x, le.y)), ue;
    }, N = k(i, w);
    if (N.length < 3) return N;
    const F = l ? 2 : 1;
    let B = N.slice();
    for (let K = 0; K < F; K += 1) B = C(B);
    return k(B, Math.max(w * 0.75, 55e-5));
  }
  function dn(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function w0(i) {
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
  function Da(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const p = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, u.width, u.height), p.imageSmoothingEnabled = !0), { canvas: u, ctx: p };
  }
  function Oa() {
    const i = Ho();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Wi() {
    const i = Ho();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Fl() {
    const i = Ao(), s = Wi();
    return i ? `${s}:${i}` : s;
  }
  function k0() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function N0() {
    d.paintCompositeRevision += 1;
  }
  function M0() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function _f() {
    var i, s;
    d.paintEngineRevisionKey = null, (s = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, b), d.paintEngineRevisionKey = Oa();
  }
  function xf() {
    b.painting_layer !== null && (b.painting_layer = null), Eo = "";
  }
  function an() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, M0(), oe.backgroundDirty = !0, oe.dirty = !0;
  }
  function Jn({ rebuildPaintEngine: i = !1 } = {}) {
    xf(), k0(), an(), i && _f();
  }
  function Yi() {
    xf(), N0(), an();
  }
  function Vo() {
    var u;
    const i = Ho(), s = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== s && (d.paintEngine = Ru(i), d.paintEngineDescriptorKey = s, d.paintEngineRevisionKey = "");
    const l = Oa();
    d.paintEngineRevisionKey !== l && (d.paintEngineRevisionKey = l, (u = d.paintEngine) == null || u.rebuildCommitted(b));
  }
  function Ho() {
    const i = Math.max(1, M(Number((b == null ? void 0 : b.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function zn() {
    return Ho();
  }
  function P0(i, s, l, u, p = null) {
    const m = w0(i), _ = dn(s, "widthScale", 1) * dn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * _) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * pn) * l * _) : Math.max(0.5, m.value / (2 * Math.PI) * l * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function A0(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, _ = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * _ : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const y = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(y.a ?? 1) * 0.88) : Math.max(0.12, Number(y.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(y.r || 0) * 255)}, ${Math.round(Number(y.g || 0) * 255)}, ${Math.round(Number(y.b || 0) * 255)}, ${w})`;
  }
  function C0(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function T0(i, s, l, u, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), A0(i, l, p);
    const _ = (y) => C0(i, y, m);
    if (s.length === 1) {
      _(s[0]), i.restore();
      return;
    }
    for (let y = 0; y < s.length - 1; y += 1) {
      const w = s[y], k = s[y + 1];
      if (!w || !k) continue;
      const C = Number(w.x || 0), N = Number(w.y || 0), F = Number(k.x || 0), B = Number(k.y || 0), Z = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), K = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(C) || !Number.isFinite(N) || !Number.isFinite(F) || !Number.isFinite(B) || !Number.isFinite(Z) || !Number.isFinite(K)) continue;
      const Y = F - C, ue = B - N, pe = Math.hypot(Y, ue);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        _(w);
        continue;
      }
      if (pe > Math.max(u.w, u.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(Z, K)), _e = Math.max(0.35, Math.min(le * 0.4, 2.25)), ze = Math.max(1, Math.ceil(pe / _e));
      for (let Be = 0; Be <= ze; Be += 1) {
        const it = Be / ze;
        _({
          x: Gn(C, F, it),
          y: Gn(N, B, it),
          radiusPx: Gn(Z, K, it)
        });
      }
    }
    _(s[s.length - 1]), i.restore();
  }
  function I0(i, s, l, u) {
    T0(i, s, l, u, { preview: !1 });
  }
  function E0(i, s, l, u, p) {
    var y, w, k, C;
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
    i.beginPath(), i.moveTo(Number(((y = s[0]) == null ? void 0 : y[m]) || 0) * u.w, Number(((w = s[0]) == null ? void 0 : w[_]) || 0) * u.h);
    for (let N = 1; N < s.length; N += 1)
      i.lineTo(Number(((k = s[N]) == null ? void 0 : k[m]) || 0) * u.w, Number(((C = s[N]) == null ? void 0 : C[_]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Sf(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function D0(i, s) {
    const l = Sf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: P0(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function wf(i, s, l = null) {
    var y, w, k, C;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((y = i.canvas) == null ? void 0 : y.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((k = s == null ? void 0 : s.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((C = s == null ? void 0 : s.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill")
      return E0(i.ctx, Sf(p), p, u), !0;
    const _ = D0(p, u);
    return _.length ? (I0(i.ctx, _, p, u), !0) : !1;
  }
  function O0(i, s, l, u = 8) {
    const p = new Uint8Array(s * l), m = [], _ = new Int32Array(s * l), y = new Int32Array(s * l);
    for (let w = 0; w < l; w += 1)
      for (let k = 0; k < s; k += 1) {
        const C = w * s + k;
        if (p[C] || i[C] <= u) continue;
        let N = 0, F = 0;
        _[F] = k, y[F] = w, F += 1, p[C] = 1;
        const B = [];
        let Z = k, K = w, Y = k, ue = w;
        for (; N < F; ) {
          const pe = _[N], le = y[N];
          N += 1, B.push({ x: pe, y: le }), pe < Z && (Z = pe), le < K && (K = le), pe > Y && (Y = pe), le > ue && (ue = le);
          const _e = [
            [(pe - 1 + s) % s, le],
            [(pe + 1) % s, le],
            [pe, le - 1],
            [pe, le + 1]
          ];
          for (const [ze, Be] of _e) {
            if (Be < 0 || Be >= l) continue;
            const it = Be * s + ze;
            p[it] || i[it] <= u || (p[it] = 1, _[F] = ze, y[F] = Be, F += 1);
          }
        }
        m.push({ pixels: B, minX: Z, minY: K, maxX: Y, maxY: ue });
      }
    return m;
  }
  function F0(i, s) {
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
    let _ = 1 / 0, y = -1 / 0;
    for (const w of l) {
      const k = (w - m + s) % s;
      _ = Math.min(_, k), y = Math.max(y, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, y - _ + 1)
    };
  }
  function R0(i, s, l = {}) {
    var k;
    const u = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || u < 1 || p < 1) return [];
    const _ = m.getImageData(0, 0, u, p), y = new Uint8Array(u * p);
    for (let C = 0; C < y.length; C += 1) y[C] = _.data[C * 4 + 3];
    return O0(y, u, p, 8).map((C, N) => {
      const F = F0(C, u);
      if (!F) return null;
      const B = Number(F.widthPx || 0), Z = C.maxY - C.minY + 1, K = Number(F.startX || 0), Y = document.createElement("canvas");
      Y.width = B, Y.height = Z;
      const ue = Y.getContext("2d");
      if (!ue) return null;
      const pe = ue.createImageData(B, Z);
      return C.pixels.forEach(({ x: le, y: _e }) => {
        const ze = (_e * u + le) * 4, Be = (Number(le || 0) - K + u) % u, it = ((_e - C.minY) * B + Be) * 4;
        pe.data[it + 0] = _.data[ze + 0], pe.data[it + 1] = _.data[ze + 1], pe.data[it + 2] = _.data[ze + 2], pe.data[it + 3] = _.data[ze + 3];
      }), ue.putImageData(pe, 0, 0), {
        id: oa("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + N * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: C.minY / p,
          u1: B / u,
          v1: (C.maxY + 1) / p
        },
        rasterDataUrl: Y.toDataURL("image/png"),
        transform: {
          du: K / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Fa(i, s) {
    if (!i || !s) return null;
    const l = Oo(i), u = er(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const p = er(s, l.right) / u, m = er(s, l.up) / u, _ = p * l.cr + m * l.sr, y = -p * l.sr + m * l.cr;
    return {
      x: (_ / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - y / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function L0(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const l = Jr();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Ia(Ki(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function kf(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const u = Jr();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, _ = s == null ? m : Number(s || 0) + Un(m, s);
        return {
          x: u.x + _ * u.w,
          y: u.y + Number(p.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => Ia(Ki(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function z0(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], p = i[(l + 1) % i.length];
      if (!u || !p || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(u.x), Number(p.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function $0(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const p of i) {
      const m = Ki(p), _ = Fa(s, m);
      if (!_) return [];
      u.push({
        x: Number(l.x || 0) + Number(_.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(_.y || 0) * Number(l.h || 0)
      });
    }
    return z0(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function j0(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const p of i) {
      const m = Ki(p), _ = Fa(s, m);
      _ && u.push({
        x: Number(l.x || 0) + Number(_.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(_.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function V0() {
    var B;
    const i = He(), s = $l(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, u = Math.max(1, Number(s.focalPx || 1)), p = l.x + l.w * 0.5, m = l.y + l.h * 0.5, { halfW: _, halfH: y } = $u(
      { width: T.width, height: T.height },
      u
    ), w = { x: p - _, y: m - y, w: _ * 2, h: y * 2 }, k = {
      ...i,
      hFOV_deg: 2 * Math.atan(_ / u) * zr,
      vFOV_deg: 2 * Math.atan(y / u) * zr
    }, C = H0(l);
    A.save(), A.fillStyle = "#0a0a0a", A.fillRect(0, 0, T.width, T.height);
    const N = d.interaction ? "draft" : String(((B = b.ui_settings) == null ? void 0 : B.preview_quality) || "balanced");
    return v0(A, w, k, { quality: N }) === !0 || (A.fillStyle = "rgba(255, 255, 255, 0.03)", A.fillRect(w.x, w.y, w.w, w.h)), A.restore(), A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, T.width, T.height), A.roundRect(l.x, l.y, l.w, l.h, C), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = gN, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, C - 1)), A.stroke(), A.restore(), !0;
  }
  function H0(i) {
    const s = Math.max(1e-6, Number(oe.frameCanvasScale || 1));
    return Math.min(Xt * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Ir() {
    var s;
    const i = d.mode === "frame" ? He() : null;
    P.frameRollKnob.visible = !!i && !r && i.locked !== !0, P.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), P.frameRollKnob.displayValue = aa(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!i && d.altModifier === !0;
  }
  function U0() {
    var w, k;
    if (((w = d.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, s = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let l;
    if (d.mode === "frame") {
      const C = He(), N = Yt(C);
      l = $0(s, C, N);
    } else
      l = L0(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), _ = Math.round(Number(p.g || 0) * 255), y = Math.round(Number(p.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let C = 1; C < l.length; C++) A.lineTo(Number(l[C].x || 0), Number(l[C].y || 0));
    A.closePath(), u ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${m},${_},${y},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function B0() {
    const i = d.frameRollOverlayVisual, s = W(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Yt(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * pn, m = Math.hypot(l.w, l.h) * 0.55, _ = Math.cos(p) * m, y = Math.sin(p) * m;
    A.save(), A.globalAlpha *= s, A.beginPath(), A.rect(l.x, l.y, l.w, l.h), A.clip(), A.translate(u.x, u.y), A.rotate(p);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    A.beginPath();
    for (let k = -m; k <= m; k += w)
      A.moveTo(k, -m), A.lineTo(k, m);
    for (let k = -m; k <= m; k += w)
      A.moveTo(-m, k), A.lineTo(m, k);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(u.x - _, u.y - y), A.lineTo(u.x + _, u.y + y), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function G0() {
    return t !== "cutout" || !He() ? 0 : vN;
  }
  function K0() {
    const i = W(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const s = He(), l = s ? Qt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((_) => ({ x: Number(_.x || 0), y: Number(_.y || 0) })) : null;
    l != null && l.visible && u && (d.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (d.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Kc(s),
      locked: wn(s)
    });
    const p = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : p ? d.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${i})`, A.beginPath(), A.rect(0, 0, T.width, T.height), m.length >= 4) {
      A.moveTo(m[0].x, m[0].y);
      for (let _ = 1; _ < 4; _ += 1) A.lineTo(m[_].x, m[_].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function W0() {
    d.mode === "frame" ? (oe.frameSafeRect = pb(), V0()) : d.mode === "unwrap" ? r0(!1) : i0(!1), K0(), t === "cutout" && y0(), h0(), Ir(), U0(), B0(), P.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && rt(), oe.hasPresentedFrame || (oe.hasPresentedFrame = !0, q.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame && d.mode !== "frame");
    const i = qg();
    P.stageStatus = i.status, P.stageStatusDetail = i.detail, i.status === pr ? (re == null || re.removeAttribute("data-stage-ready"), re == null || re.setAttribute("data-stage-loading-kind", i.detail)) : (re == null || re.setAttribute("data-stage-ready", ""), re == null || re.removeAttribute("data-stage-loading-kind"));
  }
  function Y0(i = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function q0() {
    e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = mg();
  }
  function be(i = {}) {
    var y, w, k, C, N, F, B, Z, K, Y;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), p = String(((y = d.interaction) == null ? void 0 : y.kind) || "");
    (!s || p === "view" || p === "pan_frame" || Y0() || !!((w = d.viewTween) != null && w.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (oe.backgroundDirty = !0), s && Hc() && (d.livePaintInteractionRevision += 1, oe.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (Nl(), Cr()), q0(), l && ((C = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || C.call(k), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), l && !s && ((B = (F = e.graph) == null ? void 0 : F.setDirtyCanvas) == null || B.call(F, !0, !0), (Y = (K = (Z = nr) == null ? void 0 : Z.canvas) == null ? void 0 : K.setDirty) == null || Y.call(K, !0, !0)), oe.dirty = !0;
  }
  function Nf() {
    const i = T.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return T.width !== s || T.height !== l || q.width !== s || q.height !== l ? (T.width = s, T.height = l, q.width = s, q.height = l, oe.backgroundDirty = !0, oe.dirty = !0, t === "cutout" && (oe.pendingStableLayoutFrames = Math.max(Number(oe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function X0(i = performance.now()) {
    var m, _;
    oe.lastTickTs = i;
    const s = d.mode === "frame" && ((m = d.interaction) == null ? void 0 : m.kind) === "roll_frame" ? d.interaction : null;
    s != null && s.shot && (d.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = l, d.frameRollOverlayStartTs = i), Math.abs(Number(d.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const y = W(
        (i - Number(d.frameRollOverlayStartTs || i)) / _N,
        0,
        1
      );
      d.frameRollOverlayAlpha = Gn(
        Number(d.frameRollOverlayFrom || 0),
        l,
        ls(y)
      ), y >= 1 && (d.frameRollOverlayAlpha = l, l === 0 && (d.frameRollOverlayVisual = null)), oe.dirty = !0;
    }
    const u = G0();
    if (Math.abs(u - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = u, d.cutoutPanoDimStartTs = i), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const y = W(
        (i - Number(d.cutoutPanoDimStartTs || i)) / Vh,
        0,
        1
      );
      d.cutoutPanoDimAlpha = Gn(
        Number(d.cutoutPanoDimFrom || 0),
        u,
        ls(y)
      ), y >= 1 && (d.cutoutPanoDimAlpha = u), y >= 1 && u === 0 && (d.cutoutPanoDimCorners = null), oe.dirty = !0;
    }
    const p = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(p - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = p, d.cutoutPanoFrameStartTs = i), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const y = W(
        (i - Number(d.cutoutPanoFrameStartTs || i)) / Vh,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = Gn(
        Number(d.cutoutPanoFrameFrom || 0),
        p,
        ls(y)
      ), y >= 1 && (d.cutoutPanoFrameAlpha = p, p === 0 && (d.cutoutPanoFrameVisual = null)), oe.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const y = Math.max(1, Number(d.outputPreviewAnimDurationMs)), w = W((i - Number(d.outputPreviewAnimStartTs || 0)) / y, 0, 1), C = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? AN(w) : EN(w);
      d.outputPreviewAnim = Gn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, C), oe.dirty = !0, w >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((_ = d.viewTween) != null && _.active) {
      const y = d.viewTween, w = W((i - y.startTs) / y.durationMs, 0, 1), k = ls(w);
      d.viewYaw = Ut(y.startYaw + y.deltaYaw * k), d.viewPitch = y.startPitch + (y.targetPitch - y.startPitch) * k, d.viewFov = y.startFov + (y.targetFov - y.startFov) * k, oe.backgroundDirty = !0, oe.dirty = !0, w >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(on.state.inertia.vx || 0), d.viewInertia.vy = Number(on.state.inertia.vy || 0), d.viewInertia.active = !!on.state.inertia.active, on.stepInertia(i) && (d.viewInertia.vx = Number(on.state.inertia.vx || 0), d.viewInertia.vy = Number(on.state.inertia.vy || 0), d.viewInertia.active = !!on.state.inertia.active, oe.backgroundDirty = !0, oe.dirty = !0), (oe.dirty || i - oe.lastSizeCheckTs >= 220) && (Nf(), oe.lastSizeCheckTs = i), oe.pendingStableLayoutFrames > 0 && (oe.pendingStableLayoutFrames -= 1, oe.dirty = !0), oe.dirty) {
      if (oe.pendingStableLayoutFrames > 0)
        return;
      oe.dirty = !1, W0();
    }
  }
  function Mf(i = performance.now()) {
    if (oe.running)
      try {
        X0(i);
      } catch (s) {
        const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
        oe.tickErrorSignature !== l && (oe.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), P.stageStatus = br, P.stageStatusDetail = "frame", re == null || re.setAttribute("data-stage-ready", ""), re == null || re.removeAttribute("data-stage-loading-kind");
      } finally {
        oe.running && (oe.rafId = requestAnimationFrame(Mf));
      }
  }
  function J0() {
    oe.running = !1, oe.rafId && cancelAnimationFrame(oe.rafId), oe.rafId = 0;
  }
  function st() {
    r || (d.historyController.commitActionGroup(JSON.stringify(fh(b))), Bl());
  }
  function Rl(i) {
    if (r) return;
    const s = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (Bl(), !s) return;
    const l = JSON.parse(s);
    Object.keys(b).forEach((u) => delete b[u]), Object.assign(b, l), d.selectedId = t === "stickers" || t === "cutout" ? b.active.selected_sticker_id : b.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], Jn(), Tn(), We(), In(), be({ cause: "cutout_frame" });
  }
  function Pf() {
    var l, u;
    const i = Array.isArray((l = d.historyController) == null ? void 0 : l.entries) ? d.historyController.entries : [], s = Number((u = d.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Tn() {
    Po();
    const i = US({
      editor: d,
      swatches: Ts,
      paintColorPopOpen: V ? !V.hidden : !1,
      colorToCss: ur,
      colorsApproximatelyEqual: Is,
      rgb01ToHsv: ku,
      hsv01ToRgb: wu,
      getBrushPresetIdForTool: Qr,
      isActiveLassoTool: kg
    });
    if (Object.assign(P.paintDock, i), Tg(), !i.visible) {
      V && (V.hidden = !0);
      return;
    }
    ee && (clearTimeout(ee), ee = 0), L && (!i.colorEnabled && V && !V.hidden && (ee = window.setTimeout(() => {
      V.hidden = !0, P.paintDock.colorPopOpen = !1, ee = 0;
    }, 170)), V && (V.style.setProperty("--picker-hue-color", i.pickerHueColor), V.style.setProperty("--picker-sat", i.pickerSat), V.style.setProperty("--picker-val", i.pickerVal), V.style.setProperty("--picker-hue", i.pickerHue)), ye && (ye.style.left = i.pickerSvLeft, ye.style.top = i.pickerSvTop), D && (D.style.left = i.pickerHueLeft));
  }
  function qi() {
    const i = t === "cutout" && d.mode === "frame" ? He() : It();
    i && (d.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Lr(i)
    }, We());
  }
  function We() {
    var Be, it, ve, ae;
    if (a) return;
    b.ui_settings = b.ui_settings || {};
    const i = HS(b.ui_settings);
    if (o) {
      P.sidePanel = BS({
        coverage: b.coverage,
        uiSettings: i,
        normalizeCoverageValue: ln
      });
      return;
    }
    const s = It(), l = t === "cutout" && d.mode === "frame" ? He() : null, u = l || s, p = l ? [l] : Xn(), m = l ? "shot" : Io();
    p.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: Lr(u)
    });
    const _ = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), y = m === "stroke" ? null : u, w = y || _, k = !!y && !wn(y);
    d.panelWasEnabled = k, Nl();
    let C = null;
    if (l) {
      const me = xl({ item: l, kind: "shot", label: "Frame" });
      C = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: me.label,
        currentIcon: me.icon || null,
        items: [{
          id: String(l.id || ""),
          label: me.label,
          icon: me.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const me = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Rn().forEach((Ee, qe) => {
        var sn, At;
        if (!Ee) return;
        const lt = Zt(Ee) ? String(Ee.id || as) : String(((At = (sn = b.assets) == null ? void 0 : sn[Ee.asset_id]) == null ? void 0 : At.name) || Ee.asset_id || Ee.id), tt = `${qe + 1}. ${lt}${Zt(Ee) && zi(Ee) ? " (hidden)" : ""}`, xt = xl({ item: Ee, label: tt, kind: "image" });
        me.push({ id: Ee.id, label: xt.label, icon: xt.icon, item: Ee, kind: "image" });
      }) : Wc().forEach((Ee) => {
        if (!(Ee != null && Ee.item)) return;
        const qe = xl(Ee);
        me.push({ id: Ee.item.id, label: qe.label, icon: qe.icon, item: Ee.item, kind: Ee.kind });
      });
      const Oe = (y == null ? void 0 : y.id) || "", Fe = me.find((Ee) => Ee.id === Oe) || me[0];
      C = {
        label: "Selection",
        open: !1,
        disabled: me.length <= 1,
        currentLabel: Fe.label,
        currentIcon: Fe.icon || null,
        items: me.map((Ee) => ({
          id: Ee.id,
          label: Ee.label,
          icon: Ee.icon || null,
          active: Ee.id === Oe
        }))
      };
    }
    const N = [], F = (me, Oe, Fe, Ee, qe) => {
      const lt = W(Number(w[me] || 0), Fe, Ee);
      N.push({
        key: me,
        label: Oe,
        min: Fe,
        max: Ee,
        step: qe,
        value: lt,
        displayValue: aa(lt),
        fillPct: W((lt - Fe) / Math.max(1e-6, Ee - Fe) * 100, 0, 100),
        enabled: k && !r
      });
    }, B = [];
    p.length > 1 ? (B.push(`Selected objects: ${p.length}`), B.push("Multi-selection supports z-order and delete.")) : (F("yaw_deg", "Yaw", -180, 180, 0.1), F("pitch_deg", "Pitch", -90, 90, 0.1), F("hFOV_deg", "H FOV", 1, 179, 0.1), F("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? F("rot_deg", "Rotation", -180, 180, 0.1) : F("roll_deg", "Roll", -180, 180, 0.1));
    const Z = Array.isArray((it = (Be = b == null ? void 0 : b.painting) == null ? void 0 : Be.paint) == null ? void 0 : it.strokes) ? b.painting.paint.strokes.length : 0, K = Array.isArray((ae = (ve = b == null ? void 0 : b.painting) == null ? void 0 : ve.mask) == null ? void 0 : ae.strokes) ? b.painting.mask.strokes.length : 0, Y = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((me) => String((me == null ? void 0 : me.name) || "")) : [], ue = PN(
      e,
      Y.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), pe = !!String((ue == null ? void 0 : ue.src) || "").trim() || qc("pano_input_images").length > 0, le = Array.isArray(Rn()) && Rn().length > 0 || Z > 0, _e = K > 0, ze = [
      { key: "mask", label: "Mask", icon: Te.circle_dashed_tool, visible: !!d.showMask, enabled: _e },
      { key: "objects", label: "Paint / Images", icon: Te.image, visible: !!d.showObjects, enabled: le },
      { key: "panorama", label: "Panorama", icon: Te.globe, visible: !!d.showPanorama, enabled: pe }
    ].map((me) => ({
      ...me,
      ariaLabel: `Toggle ${me.label.toLowerCase()}`,
      tip: me.visible ? "Hide" : "Show"
    }));
    P.sidePanel = GS({
      coverage: b.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: k,
      selectedKind: m,
      selectedItems: p,
      params: N,
      notes: B,
      visibilityRows: ze,
      uiSettings: i,
      normalizeCoverageValue: ln
    });
  }
  async function Af(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Sr(i)) return;
    const s = ms("asset"), l = Uu(e, `add:${s}`, async () => {
      try {
        const { image: u } = await Bu(i);
        Re.set(s, u);
        const p = ms("st");
        b.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Hi(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: Yc()
        }), Li(b.stickers[b.stickers.length - 1]), zl(), We(), rt(), be();
        const m = await As(i, {
          fetchApi: (w, k) => bn.fetchApi(w, k)
        });
        if (!(Array.isArray(b.stickers) ? b.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === s).length) return;
        b.assets[s] = m, Gi(), st(), ut(), We(), rt(), be();
      } catch (u) {
        delete b.assets[s], Re.delete(s);
        const p = Array.isArray(b.stickers) ? b.stickers : [], m = p.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") === s);
        throw m.length && (b.stickers = p.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") !== s), m.some((_) => String((_ == null ? void 0 : _.id) || "") === String(d.selectedId || "")) && Li(null), We(), rt(), be(), ut()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Z0() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = H == null ? void 0 : H.openImagePicker) == null || i.call(H, "add");
  }
  async function Q0(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = It();
    if (!s || !vt(s) || Zt(s) || !Sr(i)) return;
    const l = String(s.id || ""), u = ms("asset"), p = Uu(e, `replace:${l}:${u}`, async () => {
      var C;
      const m = (Array.isArray(b.stickers) ? b.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === l) || null;
      if (!m || !vt(m) || Zt(m)) return;
      const _ = String(m.asset_id || ""), y = _ ? hn(((C = b.assets) == null ? void 0 : C[_]) || null) : null, w = Number(m.vFOV_deg || 0), k = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: N } = await Bu(i);
        Re.set(u, N), m.asset_id = u, m.vFOV_deg = Hi(
          Number(m.hFOV_deg || 30),
          Number(N.naturalWidth || N.width || 1),
          Number(N.naturalHeight || N.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, an(), We(), rt(), be();
        const F = await As(i, {
          fetchApi: (Z, K) => bn.fetchApi(Z, K)
        }), B = (Array.isArray(b.stickers) ? b.stickers : []).find((Z) => String((Z == null ? void 0 : Z.id) || "") === l) || null;
        if (!B || String(B.asset_id || "") !== u) return;
        b.assets[u] = F, Gi(), st(), ut(), We(), rt(), be();
      } catch (N) {
        delete b.assets[u], Re.delete(u);
        const F = (Array.isArray(b.stickers) ? b.stickers : []).find((B) => String((B == null ? void 0 : B.id) || "") === l) || null;
        throw F && String(F.asset_id || "") === u && (_ && y && (b.assets[_] = y), F.asset_id = _, F.vFOV_deg = w, F.crop = k ? { ...k } : null), an(), ut(), We(), rt(), be(), N;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function eb() {
    var s;
    if (r) return;
    const i = It();
    !i || !vt(i) || Zt(i) || (s = H == null ? void 0 : H.openImagePicker) == null || s.call(H, "replace");
  }
  async function tb() {
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
        const _ = await fetch(m).then((N) => N.blob()), y = String(_.type || "image/png").split("/")[1] || "png", w = String((p == null ? void 0 : p.name) || `${u}.${y}`), k = new File([_], w, { type: _.type || "image/png" }), C = await As(k, {
          fetchApi: (N, F) => bn.fetchApi(N, F)
        });
        b.assets[u] = {
          ...C,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ut(), be());
  }
  function nb() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      Li(i), d.mode = "pano", Di(
        Ut(Number(i.yaw_deg || 0)),
        W(Number(i.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), We(), rt(), be({ cause: "cutout_frame" });
      return;
    }
    const s = cm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ut(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    b.shots = [s], Li(s), zl(), d.mode = "pano", st(), ut(), We(), rt(), be({ cause: "cutout_frame" });
  }
  function rb() {
    r || t !== "cutout" || (b.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, b.active.selected_shot_id = null, st(), ut(), We(), rt(), be());
  }
  function ib() {
    const i = Array.isArray(b.stickers) ? b.stickers : [], s = [];
    for (const l of i)
      Zt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Cf(i, s, l = "Clear") {
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
  async function ab() {
    var l, u;
    if (r || !await Cf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    b.painting = so(null), Jn();
    const s = ib();
    if (t === "stickers")
      b.stickers = s, b.assets = {}, d.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, Gi();
    else {
      const p = cx(b.shots, b.active.selected_shot_id);
      b.stickers = s, b.assets = {}, b.shots = p.shots, d.selectedId = p.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = null, b.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Gi();
    }
    st(), ut(), We(), rt(), be();
  }
  async function ob(i) {
    var m, _, y, w;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = Xi(s);
    if (!(!u.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = d.interaction) == null ? void 0 : _.layerKind) === s) || !await Cf(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((y = d.interaction) == null ? void 0 : y.kind) === "draw" && ((w = d.interaction) == null ? void 0 : w.layerKind) === s) {
        const k = zn();
        k && d.paintEngine.cancelActiveStroke(k), d.interaction = null;
      }
      u.length = 0, b.painting.raster_objects = Cn().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== s), s === "paint" && (Rt().length = 0), Jn(), st(), ut(), We(), rt(), Tn(), be();
    }
  }
  function sb() {
    if (r) return;
    const i = It();
    if (!i || !vt(i) || Zt(i)) return;
    const s = JSON.parse(JSON.stringify(i));
    s.id = ms("st"), s.yaw_deg = Ut((s.yaw_deg || 0) + 8), s.z_index = Yc(), b.stickers.push(s), b.active.selected_sticker_id = s.id, d.selectedId = s.id, d.selectedIds = [s.id], an(), st(), ut(), rt(), We(), be();
  }
  function Tf() {
    var l, u, p, m, _, y;
    if (r) return;
    const i = Xn(), s = It();
    if (!(!s && i.length === 0) && !i.some((w) => wn(w))) {
      if (i.length > 1) {
        const w = new Set(i.filter((N) => Wt(N)).map((N) => String(N.actionGroupId || N.id || ""))), k = new Set(i.filter((N) => fn(N)).map((N) => Jt(N.rasterObjectId || N.id || ""))), C = new Set(i.filter(vt).map((N) => String(N.id || "")));
        w.size > 0 && (b.painting.paint.strokes = (Array.isArray((u = (l = b.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? b.painting.paint.strokes : []).filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || ""))), b.painting.groups = Rt().filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), Jn()), k.size > 0 && (b.painting.raster_objects = Cn().filter((N) => !k.has(String((N == null ? void 0 : N.id) || ""))), Yi()), C.size > 0 && (b.stickers = (Array.isArray(b.stickers) ? b.stickers : []).filter((N) => C.has(String((N == null ? void 0 : N.id) || "")) ? Zt(N) ? (zi(N) || (N.visible = !1), !0) : !1 : !0), Gi(), an()), d.selectedId = null, d.selectedIds = [], st(), ut(), We(), rt(), be();
        return;
      }
      if (Wt(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        b.painting.paint.strokes = (Array.isArray((m = (p = b.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? b.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), b.painting.groups = Rt().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), Jn(), d.selectedId = null, d.selectedIds = [], st(), ut(), We(), rt(), be();
        return;
      }
      if (fn(s)) {
        const w = Jt(s.rasterObjectId || s.id || "");
        b.painting.raster_objects = Cn().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Yi(), d.selectedId = null, d.selectedIds = [], st(), ut(), We(), rt(), be();
        return;
      }
      if (t === "stickers" || vt(s)) {
        if (Zt(s)) {
          if (zi(s)) return;
          s.visible = !1, an(), st(), ut(), We(), rt(), be();
          return;
        }
        b.stickers = b.stickers.filter((w) => w.id !== s.id), Gi(), an(), d.selectedId = ((_ = b.stickers[0]) == null ? void 0 : _.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((y = b.stickers[0]) == null ? void 0 : y.id) || null, st(), ut(), We(), rt(), be();
        return;
      }
      rb();
    }
  }
  function Ll(i, s) {
    const l = oe.frameSafeRect;
    if (!i || !l || d.mode !== "frame") return !1;
    const u = yu * Mi(l, i), p = Cc(Ac(l, s), u);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function If(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const y = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(y)) {
        const [C, N] = y.split(":").map((F) => Number(F));
        if (Number.isFinite(C) && Number.isFinite(N)) return C >= N;
      }
      const w = Number(i.hFOV_deg || 64), k = Number(i.vFOV_deg || 40);
      return Math.abs(w - k) > 1e-6 ? w >= k : Pi(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== u && ([p, m] = [m, p]);
    const _ = p / m;
    if (!Ll(i, _)) {
      const y = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = y, i.hFOV_deg = ks(y, _);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function lb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = go(s, l);
    if (!u) return !1;
    const p = u.ratio;
    if (!Ll(i, p)) {
      const m = W(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = ks(m, p);
    }
    return i.aspect_id = u.label, !0;
  }
  function Ef(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Na(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, u);
    if (!Ll(i, p)) {
      const m = W(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = ks(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, _] = s.split(":");
      i.aspect_id = `${_}:${m}`;
    } else
      i.aspect_id = vi(i);
  }
  function Df() {
    Oi().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function ub() {
    if (r) return;
    const i = Xn();
    if (!It() || i.length === 0 || i.some((y) => wn(y))) return;
    Df();
    const l = Oi(), u = new Set(i.map((y) => vt(y) ? `sticker:${String(y.id || "")}` : fn(y) ? `rasterObject:${Jt(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), p = [], m = [];
    if (l.forEach((y) => {
      var k, C;
      const w = y.type === "sticker" ? `sticker:${String(((k = y.item) == null ? void 0 : k.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((C = y.item) == null ? void 0 : C.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      u.has(w) ? p.push(y) : m.push(y);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((y, w) => {
      y.type === "sticker" && y.item && (y.item.z_index = w), y.type === "strokeGroup" && y.item && (y.item.z_index = w), y.type === "rasterObject" && y.item && (y.item.z_index = w);
    }), an(), st(), ut(), rt(), be();
  }
  function cb() {
    if (r) return;
    const i = Xn();
    if (!It() || i.length === 0 || i.some((y) => wn(y))) return;
    Df();
    const l = Oi(), u = new Set(i.map((y) => vt(y) ? `sticker:${String(y.id || "")}` : fn(y) ? `rasterObject:${Jt(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), p = [], m = [];
    if (l.forEach((y) => {
      var k, C;
      const w = y.type === "sticker" ? `sticker:${String(((k = y.item) == null ? void 0 : k.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((C = y.item) == null ? void 0 : C.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      u.has(w) ? p.push(y) : m.push(y);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((y, w) => {
      y.type === "sticker" && y.item && (y.item.z_index = w), y.type === "strokeGroup" && y.item && (y.item.z_index = w), y.type === "rasterObject" && y.item && (y.item.z_index = w);
    }), an(), st(), ut(), rt(), be();
  }
  function fb() {
    r || (b.projection_model = "pinhole_rectilinear", b.alpha_mode = "straight", f && (b.output_preset = M(Number(b.output_preset || 2048))), h && (b.coverage = ln(h.value)), g && (b.bg_color = String(g.value || b.bg_color || "#00ff00")), In(), e.setDirtyCanvas(!0, !0));
  }
  function In() {
    var s;
    if (r) return;
    b.coverage = ln(b.coverage);
    const i = JSON.stringify(b);
    v && (v.value = i, (s = v.callback) == null || s.call(v, i));
  }
  const Of = () => In();
  r || (e.__panoFlushStateBeforeQueue = Of);
  function Uo() {
    b.ui_settings = LN(b.ui_settings), r || In();
  }
  function ut() {
    var i;
    r || (In(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function db() {
    r || Yg() && uf().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function hb(i = {}) {
    var u, p, m, _, y, w, k, C, N, F;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || p.call(u), (_ = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || _.call(m), (y = e.setDirtyCanvas) == null || y.call(e, !0, !1)), l && ((k = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || k.call(w, !0, !0), (F = (N = (C = nr) == null ? void 0 : C.canvas) == null ? void 0 : N.setDirty) == null || F.call(N, !0, !0));
  }
  function zl() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", Tn(), We());
  }
  function ci(i) {
    const s = T.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * T.width,
      y: (i.clientY - s.top) / s.height * T.height
    };
  }
  function Bo(i) {
    const s = T.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Ff() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(b.shots) ? b.shots : [];
    if (!i.length) return null;
    const s = String(b.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function pb() {
    var B, Z, K, Y, ue;
    if (!T) return null;
    const i = (B = T.getBoundingClientRect) == null ? void 0 : B.call(T), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? T.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? T.height / i.height : 1;
    oe.frameCanvasScale = Math.min(s, l);
    let u = 24, p = 24;
    const m = Math.max(u + 1, T.width - 24);
    let _ = Math.max(p + 1, T.height - 24);
    const y = (Z = nt == null ? void 0 : nt.getBoundingClientRect) == null ? void 0 : Z.call(nt), w = (K = Ye == null ? void 0 : Ye.getBoundingClientRect) == null ? void 0 : K.call(Ye);
    let k = 24;
    y && i && y.width > 0 && y.height > 0 && (k = Math.max(k, (y.right - i.left) * s + jh)), w && i && w.width > 0 && w.height > 0 && ((Y = P.frameRail) == null ? void 0 : Y.visible) === !0 && (k = Math.max(k, (i.right - w.left) * s + jh)), u = Math.max(u, k);
    const C = Math.min(m, T.width - k);
    let N = 24;
    const F = (ue = mt == null ? void 0 : mt.getBoundingClientRect) == null ? void 0 : ue.call(mt);
    if (F && i && F.width > 0 && F.height > 0 && (N = Math.max(N, (F.bottom - i.top) * l + vu)), [qt, An].forEach((pe) => {
      var ze;
      if (!pe || !i) return;
      const le = getComputedStyle(pe);
      if (le.display === "none" || le.visibility === "hidden" || Number(le.opacity) <= 0) return;
      const _e = (ze = pe.getBoundingClientRect) == null ? void 0 : ze.call(pe);
      !_e || _e.width <= 0 || _e.height <= 0 || (N = Math.max(N, (i.bottom - _e.top) * l + vu));
    }), je && i) {
      const pe = getComputedStyle(je);
      pe.display !== "none" && pe.visibility !== "hidden" && Number(pe.opacity) > 0 && (N = Math.max(N, (yN + vu) * l));
    }
    return p = Math.max(p, N), _ = Math.max(p + 1, Math.min(_, T.height - N)), {
      x: u,
      y: p,
      w: Math.max(1, C - u),
      h: Math.max(1, _ - p)
    };
  }
  function $l(i = He()) {
    if (!i || !T) return null;
    const s = oe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, T.width - 48),
      h: Math.max(1, T.height - 48)
    };
    return Y1(s, i, yu * Mi(s, i));
  }
  function Yt(i = He()) {
    const s = $l(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function jl() {
    return t === "cutout" && !!He();
  }
  function Zn(i, s = performance.now()) {
    if (d.mode === "unwrap") {
      const m = Jr(), _ = (i.x - m.x) / Math.max(1, m.w), y = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: W(y, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = Pl(i.x, i.y), { lon: u, lat: p } = Cl(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Qn(i, s, l = performance.now()) {
    const u = Yt(s);
    if (!u) return null;
    const p = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Dl(s, p);
    if (!m) return null;
    const { lon: _, lat: y } = Cl(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - y / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function mb(i, s) {
    const l = He();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, p = dm(l, s);
    if (!p) return !1;
    if (u) {
      const m = yu * Mi(
        oe.frameSafeRect || { w: T.width, h: T.height },
        p
      ), _ = $u({ width: T.width, height: T.height }, m);
      if (_.halfW < T.width * 0.5 - 1e-6 || _.halfH < T.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, st(), ut(), We());
    }, 180), We(), !0;
  }
  function gb() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, st(), ut(), We(), !0) : !1;
  }
  function Ra() {
    const i = d.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && fi(), d.interaction = null, Ui(), Cr(), We(), _t(d.pointerPos), be({ localOnly: !0 }), !0;
  }
  function bb(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Qr(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Dr : En[s] ? s : d.activeBrushPresetId || Dr;
  }
  function Rf() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (Ff() || jl());
  }
  function Lf() {
    var i;
    return Rf() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Go(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return d.pointerPos = { x: l, y: u, inside: p }, _;
  }
  function yb() {
    var C, N;
    if (!Lf()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool, l = Qr(s), u = En[l] || En[Dr], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(u.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), y = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(d.paintColor), w = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : W(Math.max(0.16, Number(y.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : W(Math.max(0.46, Number(y.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: _,
      fillStyle: ur(y, w),
      strokeStyle: ur(y, k),
      x: Number(((C = d.pointerPos) == null ? void 0 : C.x) || 0),
      y: Number(((N = d.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function vb() {
    var F, B, Z;
    const i = yb();
    if (!de) return;
    if (!i) {
      de.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", p = 0, m = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", y = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let C = Number(i.hotspotX ?? s * 0.5), N = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Zs, l = Zs, u = "0", _ = "0", y = "none", C = xN, N = SN, m = ON(i.fillStyle, k, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const K = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * K), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, p = Number(((Z = (B = i.preset) == null ? void 0 : B.angle) == null ? void 0 : Z.value) || 0) * zr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    de.style.display = "block", de.style.width = `${Math.round(s)}px`, de.style.height = `${Math.round(l)}px`, de.style.borderRadius = u, de.style.border = _, de.style.boxShadow = y, de.style.background = m, de.style.backgroundRepeat = "no-repeat", de.style.backgroundPosition = "center", de.style.backgroundSize = "contain", de.style.transform = `translate(${Math.round(i.x - C)}px, ${Math.round(i.y - N)}px) rotate(${p}deg)`;
  }
  function _b() {
    var pe;
    if (!ce || !we) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? d.maskTool : d.paintTool;
    if (s === "lasso_fill") return;
    const l = Qr(s), u = En[l] || En[Dr], p = Number(d.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(u.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), y = s === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : y ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(d.paintColor), k = i === "mask" ? ur(w, 0.22) : y ? "rgba(255,255,255,0.14)" : ur(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), C = i === "mask" ? ur(w, 0.96) : y ? "rgba(255,255,255,0.72)" : ur(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, F = _ * 2, B = "999px", Z = 0, K = k;
    const Y = "rgba(222, 222, 222, 0.72)", ue = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const le = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      N = Math.max(16, _ * 2 * le), F = Math.max(10, _ * 2), B = `${Math.min(8, F * 0.42)}px`, Z = Number(((pe = u == null ? void 0 : u.angle) == null ? void 0 : pe.value) || 0) * zr;
    } else s === "brush" ? K = `radial-gradient(circle at 50% 50%, ${C} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (N = Math.max(18, _ * 1.8), F = N, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${C} 43%, ${C} 58%, rgba(0,0,0,0) 59%)`) : y && (K = "rgba(255,255,255,0.12)");
    we.style.width = `${Math.round(N)}px`, we.style.height = `${Math.round(F)}px`, we.style.borderRadius = B, we.style.background = K, we.style.border = `1px solid ${Y}`, we.style.boxShadow = `0 0 0 1px ${ue}`, we.style.transform = `rotate(${Z}deg)`, Q && (clearTimeout(Q), Q = 0), ce.classList.remove("fade-out"), ce.classList.add("show");
  }
  function Ko() {
    !ce || !ce.classList.contains("show") || (ce.classList.add("fade-out"), Q && clearTimeout(Q), Q = window.setTimeout(() => {
      ce.classList.remove("show", "fade-out"), Q = 0;
    }, 180));
  }
  function zf(i, s, l, u) {
    const p = Qr(s), m = En[p] || En[Dr], _ = d.brushSizes[p] ?? 10, y = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), w = bb(u, y), k = l.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), C = {
      id: oa(i),
      actionGroupId: oa("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: y,
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
    return Fh(C, m), Number(m.aspect ?? 1), Number(C.aspect ?? 1), String(C.stampKind || ""), Number(C.size || 0), String(C.radiusModel || ""), Number(C.radiusValue || 0), { ...C.targetSpace }, C;
  }
  function $f(i, s, l, u) {
    const p = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = Qr(s), _ = En[m] || En[Dr], y = {
      id: oa(i),
      actionGroupId: oa("ag"),
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
    return Fh(y, _), Number(_.aspect ?? 1), Number(y.aspect ?? 1), String(y.stampKind || ""), { ...y.targetSpace }, y;
  }
  function Xi(i) {
    const s = b.painting || (b.painting = so(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function xb(i, s, l = performance.now()) {
    let u;
    if (d.mode === "frame") {
      const k = He();
      if (!k || (u = Qn(s, k, l), !u)) return !1;
    } else
      u = Zn(s, l);
    if (!u) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, _ = p[p.length - 1];
    if (_) {
      const k = Math.abs(Number(u.u ?? u.x ?? 0) - Number(_.u ?? _.x ?? 0)), C = Math.abs(Number(u.v ?? u.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (k < 15e-4 && C < 15e-4) return !1;
    }
    const y = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...y }), m.push({ ...y });
    const w = zn();
    if (w) {
      const k = d.paintEngine.ensureTarget(w);
      d.paintEngine.appendStrokePoint(k, Number(y.u ?? 0), Number(y.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Sb(i, s, l = performance.now()) {
    var _, y;
    let u;
    if (d.mode === "frame") {
      const w = He();
      if (!w) return !1;
      u = Qn(s, w, l);
    } else
      u = Zn(s, l);
    const p = (y = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.points;
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
  function wb(i) {
    var le, _e, ze, Be, it;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Vo();
    const l = zn(), u = Da(l.width, l.height);
    if (!wf(u, s, { w: l.width, h: l.height })) return !1;
    const p = ((_e = (le = u.ctx) == null ? void 0 : le.getImageData(0, 0, l.width, l.height)) == null ? void 0 : _e.data) || null;
    if (!p) return !1;
    const m = new Map(Rt().map((ve) => [String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim(), ve ? { ...ve } : null])), _ = [], y = [], w = [...Cn().filter((ve) => String((ve == null ? void 0 : ve.layerKind) || "paint") !== "paint")];
    let k = !1, C = Oi().reduce((ve, ae) => Math.max(ve, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function N(ve, ae, me, Oe = 8) {
      let Fe = ae, Ee = me, qe = -1, lt = -1;
      for (let tt = 0; tt < me; tt += 1)
        for (let xt = 0; xt < ae; xt += 1)
          ve[(tt * ae + xt) * 4 + 3] <= Oe || (xt < Fe && (Fe = xt), tt < Ee && (Ee = tt), xt > qe && (qe = xt), tt > lt && (lt = tt));
      return qe < Fe || lt < Ee ? null : { minX: Fe, minY: Ee, maxX: qe, maxY: lt };
    }
    const F = N(p, l.width, l.height, 8);
    if (!F) return !1;
    function B(ve, ae) {
      return !ve || !ae ? !1 : !(ve.maxX < ae.minX || ae.maxX < ve.minX || ve.maxY < ae.minY || ae.maxY < ve.minY);
    }
    function Z(ve, ae) {
      const me = Xr((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "", "paint", ae);
      if (!me) return null;
      const Oe = me.centerUv.u - me.halfW, Fe = me.centerUv.u + me.halfW, Ee = me.centerUv.v - me.halfH, qe = me.centerUv.v + me.halfH, lt = l.width, tt = l.height;
      return {
        minX: Math.floor((Oe % 1 + 1) % 1 * lt),
        maxX: Math.ceil((Fe % 1 + 1) % 1 * lt),
        minY: Math.floor(W(Ee, 0, 1) * tt),
        maxY: Math.ceil(W(qe, 0, 1) * tt),
        wraps: Fe - Oe >= 1 || Oe < 0 || Fe > 1
      };
    }
    function K(ve) {
      const ae = (ve == null ? void 0 : ve.bbox) || null;
      if (!ae) return null;
      const me = (ve == null ? void 0 : ve.transform) || {}, Oe = l.width, Fe = l.height, Ee = Number(ae.u0 || 0) + Number(me.du || 0), qe = Number(ae.u1 || 0) + Number(me.du || 0), lt = Number(ae.v0 || 0) + Number(me.dv || 0), tt = Number(ae.v1 || 0) + Number(me.dv || 0);
      return {
        minX: Math.floor((Ee % 1 + 1) % 1 * Oe),
        maxX: Math.ceil((qe % 1 + 1) % 1 * Oe),
        minY: Math.floor(W(lt, 0, 1) * Fe),
        maxY: Math.ceil(W(tt, 0, 1) * Fe),
        wraps: qe - Ee >= 1 || Ee < 0 || qe > 1
      };
    }
    function Y(ve) {
      return ve ? ve.wraps ? B(F, { minX: 0, maxX: ve.maxX, minY: ve.minY, maxY: ve.maxY }) || B(F, { minX: ve.minX, maxX: l.width - 1, minY: ve.minY, maxY: ve.maxY }) : B(F, ve) : !0;
    }
    function ue(ve) {
      if (!ve) return { touched: !1, canvas: null };
      const ae = Da(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(ve, 0, 0);
      const me = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(u.canvas, 0, 0), ae.ctx.restore();
      const Oe = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let Fe = 0; Fe < l.width * l.height; Fe += 1) {
        if (p[Fe * 4 + 3] <= 8) continue;
        const qe = me.data[Fe * 4 + 3], lt = Oe.data[Fe * 4 + 3];
        if (qe > lt)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(ve, ae, me) {
      const Oe = Number(me == null ? void 0 : me.z_index), Fe = R0(ve, ae, me).map((Ee, qe) => ({
        ...Ee,
        z_index: Number.isFinite(Oe) ? Oe + qe * 1e-3 : C + qe * 1e-3
      }));
      return Fe.length && (C = Math.max(C, ...Fe.map((Ee) => Number((Ee == null ? void 0 : Ee.z_index) || 0))) + 1), Fe;
    }
    for (const ve of Rt()) {
      const ae = String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim();
      if (!ae) continue;
      const me = qn(ae, "paint");
      if (!Y(Z(ve, me))) {
        y.push(ve), _.push(...me);
        continue;
      }
      const Oe = ((Be = (ze = d.paintEngine) == null ? void 0 : ze.getGroupTarget) == null ? void 0 : Be.call(ze, ae)) || null, Fe = ((it = Oe == null ? void 0 : Oe.committedPaint) == null ? void 0 : it.canvas) || null;
      if (!Fe) {
        y.push(ve), _.push(...me);
        continue;
      }
      const Ee = ue(Fe);
      if (!Ee.touched || !Ee.canvas) {
        y.push(ve), _.push(...me);
        continue;
      }
      k = !0;
      const qe = pe(Ee.canvas, "paint", m.get(ae) || ve || {});
      w.push(...qe);
    }
    for (const ve of Cn().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!Y(K(ve))) {
        w.push(ve);
        continue;
      }
      const ae = sf(ve, null);
      if (!ae) {
        w.push(ve);
        continue;
      }
      const me = ue(ae);
      if (!me.touched || !me.canvas) {
        w.push(ve);
        continue;
      }
      k = !0;
      const Oe = pe(me.canvas, "paint", ve);
      w.push(...Oe);
    }
    return k ? (b.painting.paint.strokes = _, b.painting.groups = y.sort((ve, ae) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), b.painting.raster_objects = w.sort((ve, ae) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), Ta({ preservePanelValues: !1 }), !0) : !1;
  }
  function kb(i) {
    var _, y, w, k, C;
    if ((((y = (_ = i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.rawPoints) || ((k = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      Vl(i);
      const N = zn();
      N && (String(((C = i.stroke) == null ? void 0 : C.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(N) : d.paintEngine.commitActiveStroke(i.stroke, N)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = zf(i.layerKind, l.toolKind, [], u);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = zn();
    m && d.paintEngine.beginStroke(p, m);
  }
  function Nb(i) {
    var _, y;
    if ((((y = (_ = i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : y.points) || []).length >= 3) {
      Vl(i);
      const w = zn();
      w && d.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, p = $f(i.layerKind, l.toolKind, [], u);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = zn();
    m && d.paintEngine.beginStroke(p, m);
  }
  function Vl(i) {
    var m, _, y, w;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Ol(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), wb(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && Vc((y = i.stroke) == null ? void 0 : y.actionGroupId), Xi(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Ol(p, i.stroke.targetSpace, !0), u && Vc((w = i.stroke) == null ? void 0 : w.actionGroupId), Xi(i.layerKind).push(i.stroke), !0);
  }
  function jf(i) {
    var l;
    if (t === "cutout" && d.mode === "frame") {
      const u = He(), p = Yt(u);
      if (!u || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const _ = Qn(i, u, performance.now()), y = _ ? Ki(_) : null;
      if (y)
        for (const k of El()) {
          if (!vt(k)) continue;
          const C = Fa(k, y);
          if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
            const N = Qt(k);
            if (N != null && N.visible) return { item: k, geom: N };
          }
        }
      const w = gl(!1).slice().sort((k, C) => Number((C == null ? void 0 : C.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0));
      for (const k of w) {
        if (k.type === "strokeGroup") {
          const F = Ri(Pa("paint", k.actionGroupId || k.id || ""));
          if (!F) continue;
          const B = Qt(F);
          if (!(B != null && B.visible)) continue;
          const Z = Array.isArray(B.strokePaths) ? B.strokePaths : [];
          for (const K of Z) {
            const Y = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!Y.length) continue;
            if (K.closed && Y.length >= 3 && Or(i, Y)) return { item: F, geom: B };
            const ue = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < Y.length - 1; pe += 1)
              if (Su(i, Y[pe], Y[pe + 1]) <= ue * ue) return { item: F, geom: B };
            if (Y.length === 1 && ti(i, Y[0]) <= ue * ue) return { item: F, geom: B };
          }
          continue;
        }
        if (k.type === "rasterObject") {
          const F = Fi(Aa(((l = k.item) == null ? void 0 : l.id) || k.id || ""));
          if (!F) continue;
          const B = Qt(F);
          if (of(F, B, i, _)) return { item: F, geom: B };
          continue;
        }
        const C = k.item;
        if (!C || !vt(C) || !y) continue;
        const N = Fa(C, y);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const F = Qt(C);
          if (F != null && F.visible) return { item: C, geom: F };
        }
      }
      return null;
    }
    const s = [
      ...gl(!1).slice().sort((u, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var p;
        return u.type === "strokeGroup" ? Ri(Pa("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? Fi(Aa(((p = u.item) == null ? void 0 : p.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? El().filter((u) => Ln(u)) : []
    ];
    for (const u of s) {
      if (Wt(u)) {
        const m = Qt(u);
        if (!(m != null && m.visible)) continue;
        const _ = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const y of _) {
          const w = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
          if (!w.length) continue;
          if (y.closed && w.length >= 3 && Or(i, w)) return { item: u, geom: m };
          const k = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
          for (let C = 0; C < w.length - 1; C += 1)
            if (Su(i, w[C], w[C + 1]) <= k * k) return { item: u, geom: m };
          if (w.length === 1 && ti(i, w[0]) <= k * k) return { item: u, geom: m };
        }
        continue;
      }
      if (fn(u)) {
        const m = Qt(u);
        if (!(m != null && m.visible)) continue;
        if (of(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const p = Qt(u);
      if (p.visible && Or(i, p.corners))
        return { item: u, geom: p };
    }
    return null;
  }
  function Hl(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (vt(l)) return ju(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((_) => ti(_, s) <= 121);
      if (p >= 0) {
        const _ = i.corners[p], y = _.x - i.center.x, w = _.y - i.center.y, k = y * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: k };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const _ of m) {
        const y = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
        if (_.closed && y.length >= 3 && Or(s, y)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
        for (let k = 0; k < y.length - 1; k += 1)
          if (Su(s, y[k], y[k + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Or(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => ti(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], _ = m.x - i.center.x, y = m.y - i.center.y, w = _ * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: w };
      }
      return Or(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => ti(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const u = i.corners.findIndex((p) => ti(p, s) <= 121);
    if (u >= 0) {
      const p = i.corners[u], m = p.x - i.center.x, _ = p.y - i.center.y, y = m * _ >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: y };
    }
    return ti(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Or(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function Vf(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function Mb(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Pb(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => Mb(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Or({ x: l, y: u }, s.corners);
  }
  function _t(i) {
    if (vb(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? Nt("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? Nt("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? Nt("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? Nt(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? Nt("grabbing") : Nt("default");
      return;
    }
    if (Lf()) {
      Nt("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !r) {
        Nt(bN);
        return;
      }
      if (d.primaryTool !== "cursor") {
        Nt("default");
        return;
      }
      Nt("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      Nt("default");
      return;
    }
    const s = It(), l = s ? Qt(s) : null, u = s ? wn(s) : !1, p = u ? { kind: "none", cursor: "default" } : Hl(l, i, s);
    if (!u && p.kind !== "none") {
      Nt(p.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && jf(i)) {
      Nt("default");
      return;
    }
    Nt(d.mode === "pano" ? "grab" : "default");
  }
  function rt() {
    var w, k;
    if (!Sn) return;
    if (d.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = It(), s = Xn();
    if (!i && s.length === 0 || d.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Io(), u = KS({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? vl(s) : Qt(i),
      allLocked: _l(s),
      anyLocked: s.some((C) => wn(C)),
      selectedLocked: wn(i),
      activeAspect: Lr(i),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: Zt,
      isStickerHidden: zi,
      canRestoreSelectedToInitial: Ag,
      iconSet: Te
    });
    if (!u.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const p = (C, N, { requireFitsBelow: F = !0 } = {}) => {
      var _e, ze, Be;
      const Z = Number((_e = u.anchor) == null ? void 0 : _e.minX), K = Number((ze = u.anchor) == null ? void 0 : ze.maxX), Y = Number((Be = u.anchor) == null ? void 0 : Be.maxY);
      if (![Z, K, Y].every(Number.isFinite)) return null;
      const ue = Math.max(14, T.width - C - 14), pe = W((Z + K) * 0.5 - C * 0.5, 14, ue), le = Y + 18;
      return !Number.isFinite(pe) || !Number.isFinite(le) || F && le + N > T.height - 14 ? null : { left: pe, top: le };
    }, m = Math.max(1, Number(((w = d.menuSize) == null ? void 0 : w.w) || 220)), _ = Math.max(1, Number(((k = d.menuSize) == null ? void 0 : k.h) || 40)), y = p(m, _, { requireFitsBelow: !1 });
    if (!y) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: y.left,
      top: y.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!Sn || P.selectionMenu.visible !== !0) return;
      const C = Sn.getBoundingClientRect(), N = Math.round(Number((C == null ? void 0 : C.width) || 0)) || 220, F = Math.round(Number((C == null ? void 0 : C.height) || 0)) || 40;
      d.menuSize = { w: N, h: F, measured: !0 };
      const B = p(N, F);
      if (!B) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = B.left, P.selectionMenu.top = B.top;
    });
  }
  function fi() {
    Ge.timer && (clearTimeout(Ge.timer), Ge.timer = 0), Ge.target = null, P.tooltip.visible = !1;
  }
  function Ab(i) {
    if (!nn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    P.tooltip.text = s, P.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var K, Y;
      if (Ge.target !== l || !nn || !(l != null && l.isConnected)) return;
      const u = re.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, _ = 12, y = Math.round(Number(((K = nn.getBoundingClientRect()) == null ? void 0 : K.width) || 0)) || 100, w = Math.round(Number(((Y = nn.getBoundingClientRect()) == null ? void 0 : Y.height) || 0)) || 24, k = !!l.closest(".pano-floating-left"), C = !!l.closest(".pano-frame-rail"), N = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let F = "", B = p.left - u.left + p.width * 0.5 - y * 0.5, Z = p.top - u.top - w - _;
      if (k)
        F = "tool-rail", B = p.right - u.left + 10, Z = p.top - u.top + p.height * 0.5 - w * 0.5, B = W(B, m, Math.max(m, u.width - y - m)), Z = W(Z, m, Math.max(m, u.height - w - m));
      else if (C)
        F = "frame-rail", B = p.left - u.left - y - 10, Z = p.top - u.top + p.height * 0.5 - w * 0.5, B = W(B, m, Math.max(m, u.width - y - m)), Z = W(Z, m, Math.max(m, u.height - w - m));
      else if (N) {
        F = "footer";
        const ue = l.closest(".pano-paint-footer"), pe = ue ? ue.getBoundingClientRect() : p;
        B = pe.left - u.left + pe.width * 0.5 - y * 0.5, Z = pe.bottom - u.top + 5, B = W(B, m, Math.max(m, u.width - y - m)), Z = Math.max(m, Z);
      }
      B = W(B, m, Math.max(m, u.width - y - m)), Z = Math.max(m, Z), P.tooltip.left = B, P.tooltip.top = Z, P.tooltip.variant = F, P.tooltip.visible = !0;
    });
  }
  const on = Pc({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (i) => {
      d.viewYaw = Ut(Number(i.yaw || 0)), d.viewPitch = W(Number(i.pitch || 0), -89.9, 89.9), d.viewFov = W(Number(i.fov || d.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = T.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || T.clientWidth || 0)),
        h: Math.max(1, Number(i.height || T.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = b.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = b.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Jr,
    onInteraction: () => {
      oe.backgroundDirty = !0, oe.dirty = !0;
    }
  });
  function Cb(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += om(s, i.lastAngle), i.lastAngle = s;
    const u = sm(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((_) => _.key === "roll_deg");
    p && (p.value = u, p.displayValue = aa(u), p.fillPct = (u + 180) / 360 * 100), Ir(), Ul(i), be({ localOnly: !0 });
  }
  function Tb(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = xm(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((_) => _.key === "roll_deg");
    p && (p.value = u.rollDeg, p.displayValue = aa(u.rollDeg), p.fillPct = (u.rollDeg + 180) / 360 * 100), Ir(), Ul(i), be({ localOnly: !0 });
  }
  const Hf = (i, s) => {
    const l = ci(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Ul(i) {
    var _, y;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Ge.timer && (clearTimeout(Ge.timer), Ge.timer = 0), Ge.target = null;
    const s = Yt(i.shot), l = (_ = T.getBoundingClientRect) == null ? void 0 : _.call(T), u = (y = re.getBoundingClientRect) == null ? void 0 : y.call(re);
    if (!s || !l || !u || T.width <= 0 || T.height <= 0) return;
    const p = l.width / T.width, m = l.height / T.height;
    P.tooltip.text = `${aa(i.shot.roll_deg)}°`, P.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * p, P.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  Ve == null || Ve.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || d.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const l = Yt(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Hf(i, u);
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
    }, (m = Ve.setPointerCapture) == null || m.call(Ve, i.pointerId), i.preventDefault(), Ir(), Ul(d.interaction), be({ localOnly: !0 });
  }), Ve == null || Ve.addEventListener("pointermove", (i) => {
    var s;
    ((s = d.interaction) == null ? void 0 : s.kind) !== "roll_frame" || d.interaction.source !== "knob" || Cb(
      d.interaction,
      Hf(i, d.interaction.center),
      i
    );
  });
  const Ib = () => {
    const i = d.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (st(), ut(), We()), d.interaction = null, fi(), Cr(), Ir(), be());
  };
  Ve == null || Ve.addEventListener("pointerup", Ib), Ve == null || Ve.addEventListener("pointercancel", () => Ra()), Ve == null || Ve.addEventListener("lostpointercapture", () => {
    var i;
    ((i = d.interaction) == null ? void 0 : i.source) === "knob" && Ra();
  }), Ve == null || Ve.addEventListener("dblclick", (i) => {
    const s = d.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, st(), ut(), We(), Ir(), be(), i.preventDefault());
  }), T.onpointerdown = (i) => {
    const s = ci(i);
    if (Go(s, !0), d.viewTween = null, on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), d.mode === "frame") {
        const y = He();
        if (!y || r || y.locked === !0) return;
        d.interaction = {
          kind: "pan_frame",
          shot: y,
          last: s,
          start: {
            yaw_deg: Number(y.yaw_deg || 0),
            pitch_deg: Number(y.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const y = d.mode === "unwrap" ? s : Bo(i);
        d.interaction = { kind: "view", last: y, lastTs: performance.now() }, on.startDrag(y.x, y.y, i.pointerId, performance.now());
      }
      _t(s), T.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (d.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const y = He(), w = Yt(y);
      if (!y || y.locked === !0 || !w) return;
      const k = _m({
        frame: w,
        point: s,
        startRollDeg: Number(y.roll_deg ?? y.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!k) return;
      d.interaction = {
        kind: "roll_frame",
        shot: y,
        center: k.center,
        lastAngle: k.lastAngle,
        accumulatedRad: k.accumulatedRad,
        rollGesture: k,
        start: { roll_deg: Number(y.roll_deg ?? y.rot_deg ?? 0) },
        changed: !1,
        altStarted: k.source === "alt",
        source: k.source
      }, T.setPointerCapture(i.pointerId), i.preventDefault(), Ir(), be({ localOnly: !0 });
      return;
    }
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      const y = He();
      if (!y || r || y.locked === !0) return;
      d.interaction = {
        kind: "pan_frame",
        shot: y,
        last: s,
        start: { yaw_deg: Number(y.yaw_deg || 0), pitch_deg: Number(y.pitch_deg || 0) },
        changed: !1
      }, _t(s), T.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (d.mode === "pano") {
        const y = Bo(i);
        d.interaction = { kind: "view", last: y, lastTs: performance.now() }, on.startDrag(y.x, y.y, i.pointerId, performance.now()), _t(s), T.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (V && !V.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (Ff() || jl())) {
      const y = d.primaryTool === "mask" ? "mask" : "paint", w = d.primaryTool === "mask" ? d.maskTool : d.paintTool, k = d.mode === "frame" && jl() ? He() : null, C = { kind: "ERP_GLOBAL" }, N = k ? Qn(s, k, performance.now()) : Zn(s, performance.now());
      if (!N) {
        _t(s);
        return;
      }
      d.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: y,
        _livePreviewToken: oa("live"),
        stroke: w === "lasso_fill" ? $f(y, w, [N], C) : zf(y, w, [N], C)
      }, Ui();
      const F = zn();
      if (F)
        if (d.paintEngine.beginStroke(d.interaction.stroke, F), d.interaction.kind === "paint_stroke") {
          const B = d.paintEngine.ensureTarget(F), Z = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), K = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          d.paintEngine.appendStrokePoint(B, Z, K, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, F);
      _t(s), T.setPointerCapture(i.pointerId), be();
      return;
    }
    const l = Xn(), u = It(), p = l.length > 1 ? vl(l) : u ? Qt(u) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: s, current: s }, _t(s), T.setPointerCapture(i.pointerId), be({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (p != null && p.visible)) {
      if ((l.some((w) => wn(w)) ? { kind: "none" } : Hl(p, s)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: l.map((w) => w),
          offset: { x: s.x - p.center.x, y: s.y - p.center.y },
          startCenter: { x: p.center.x, y: p.center.y },
          stickerSnapshots: l.filter((w) => vt(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var C, N;
              const k = Qt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Wt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: hn(qn(w.actionGroupId, w.layerKind)),
            frameSnapshot: hn(Xr(w.actionGroupId, w.layerKind)),
            center: (() => {
              var C, N;
              const k = Qt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: yl(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => fn(w)).map((w) => ({
            id: Jt(w.rasterObjectId || w.id || ""),
            snapshot: hn(Cn().find((k) => String((k == null ? void 0 : k.id) || "") === Jt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var C, N;
              const k = Qt(w);
              return k != null && k.visible ? { x: Number(((C = k.center) == null ? void 0 : C.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: df(w)
          }))
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (p != null && p.visible)) {
      const y = wn(u) ? { kind: "none" } : Hl(p, s, u);
      if (y.kind === "scale") {
        d.interaction = Wt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: hn(qn(u.actionGroupId, u.layerKind)),
          frameSnapshot: hn(Xr(u.actionGroupId, u.layerKind)),
          cursor: y.cursor
        } : fn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          snapshot: hn(Cn().find((w) => String((w == null ? void 0 : w.id) || "") === Jt(u.rasterObjectId || u.id || ""))),
          cursor: y.cursor
        } : {
          kind: "scale",
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: y.cursor
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
      if (y.kind === "scale_x" || y.kind === "scale_y") {
        d.interaction = {
          kind: y.kind,
          item: u,
          center: p.center,
          startDist: Math.max(1, Math.hypot(s.x - p.center.x, s.y - p.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: y.cursor,
          edge: y.edge
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
      if (y.kind === "rotate") {
        d.interaction = Wt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: p.center,
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x),
          snapshot: hn(qn(u.actionGroupId, u.layerKind)),
          frameSnapshot: hn(Xr(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: p.center,
          startRot: Number(u.rot_deg || u.roll_deg || 0),
          startAng: Math.atan2(s.y - p.center.y, s.x - p.center.x)
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
      if (y.kind === "move") {
        if (Wt(u)) {
          const w = d.mode === "frame" ? (() => {
            const k = He();
            return k ? Qn(s, k, performance.now()) : null;
          })() : Zn(s, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: w,
            snapshot: hn(qn(u.actionGroupId, u.layerKind)),
            frameSnapshot: hn(Xr(u.actionGroupId, u.layerKind))
          }, _t(s), T.setPointerCapture(i.pointerId);
          return;
        }
        if (fn(u)) {
          const w = d.mode === "frame" ? (() => {
            const k = He();
            return k ? Qn(s, k, performance.now()) : null;
          })() : Zn(s, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: w,
            snapshot: hn(Cn().find((k) => String((k == null ? void 0 : k.id) || "") === Jt(u.rasterObjectId || u.id || "")))
          }, _t(s), T.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - p.center.x, y: s.y - p.center.y }
        }, _t(s), T.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = jf(s);
    if (m) {
      const y = d.selectedId !== m.item.id;
      if (y && d.selectedId && (st(), In()), Li(m.item), t === "cutout" && y && (d.cutoutAspectOpen = !1), y && We(), rt(), be(), wn(m.item)) {
        _t(s);
        return;
      }
      d.interaction = {
        kind: Wt(m.item) ? "move_stroke_group" : fn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: Wt(m.item) || fn(m.item) ? d.mode === "frame" ? (() => {
          const w = He();
          return w ? Qn(s, w, performance.now()) : null;
        })() : Zn(s, performance.now()) : null,
        snapshot: Wt(m.item) ? hn(qn(m.item.actionGroupId, m.item.layerKind)) : fn(m.item) ? hn(Cn().find((w) => String((w == null ? void 0 : w.id) || "") === Jt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Wt(m.item) ? hn(Xr(m.item.actionGroupId, m.item.layerKind)) : null
      }, _t(s), T.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!d.selectedId;
    if (_ && (st(), In()), Ta(), _ && We(), rt(), be(), d.mode === "pano") {
      const y = Bo(i);
      d.interaction = { kind: "view", last: y, lastTs: performance.now() }, on.startDrag(y.x, y.y, i.pointerId, performance.now()), _t(s), T.setPointerCapture(i.pointerId);
    }
  }, T.onpointermove = (i) => {
    var u, p, m, _, y, w, k, C, N, F, B, Z, K, Y, ue, pe, le, _e, ze, Be, it, ve;
    const s = ci(i);
    if (Go(s, !0), !d.interaction) {
      _t(s);
      return;
    }
    _t(s);
    const l = d.interaction;
    if (l.kind === "paint_stroke") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let me = !1;
      ae.forEach((Oe) => {
        const Fe = ci(Oe);
        if (d.mode === "frame") {
          const Ee = He(), qe = Ee ? Yt(Ee) : null;
          if (qe) {
            const lt = (Fe.x - qe.x) / Math.max(1, qe.w), tt = (Fe.y - qe.y) / Math.max(1, qe.h);
            if (!(lt >= 0 && lt <= 1 && tt >= 0 && tt <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, kb(l));
          }
        }
        xb(l, Fe, performance.now()) && (me = !0);
      }), me && be({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let me = !1;
      if (ae.forEach((Oe) => {
        const Fe = ci(Oe);
        if (d.mode === "frame") {
          const Ee = He(), qe = Ee ? Yt(Ee) : null;
          if (qe) {
            const lt = (Fe.x - qe.x) / Math.max(1, qe.w), tt = (Fe.y - qe.y) / Math.max(1, qe.h);
            if (!(lt >= 0 && lt <= 1 && tt >= 0 && tt <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Nb(l));
          }
        }
        Sb(l, Fe, performance.now()) && (me = !0);
      }), me) {
        const Oe = zn();
        Oe && d.paintEngine.updateActiveStroke(l.stroke, Oe), be({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const ae = performance.now(), me = d.mode === "unwrap" ? s : Bo(i);
      on.moveDrag(me.x, me.y, d.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = me, be({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const ae = $l(l.shot);
      if (!ae || !l.shot) return;
      const me = s.x - l.last.x, Oe = s.y - l.last.y, Fe = Sm(l.shot, {
        dx: me,
        dy: Oe,
        focalPx: ae.focalPx,
        invertX: ((u = b.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((p = b.ui_settings) == null ? void 0 : p.invert_view_y) === !0
      });
      l.shot.yaw_deg = Fe.yaw_deg, l.shot.pitch_deg = Fe.pitch_deg, l.changed = l.changed || Math.abs(me) > 0 || Math.abs(Oe) > 0, l.last = s, be({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      Tb(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const ae = s.x - l.offset.x, me = s.y - l.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const Oe = He(), Fe = Yt(Oe);
        if (!Oe || !Fe) return;
        const Ee = {
          x: W((ae - Fe.x) / Math.max(1, Fe.w), 0, 1),
          y: W((me - Fe.y) / Math.max(1, Fe.h), 0, 1)
        }, qe = Dl(Oe, Ee);
        if (!qe) return;
        const lt = ds(qe);
        l.item.yaw_deg = lt.yaw, l.item.pitch_deg = lt.pitch;
      } else if (d.mode === "unwrap") {
        const Oe = Jr(), Fe = W((ae - Oe.x) / Math.max(Oe.w, 1), 0, 1), Ee = W((me - Oe.y) / Math.max(Oe.h, 1), 0, 1);
        l.item.yaw_deg = Ut(Fe * 360 - 180), l.item.pitch_deg = W(90 - Ee * 180, -90, 90);
      } else {
        const Oe = Pl(ae, me), Fe = ds(Oe);
        l.item.yaw_deg = Fe.yaw, l.item.pitch_deg = Fe.pitch;
      }
      vt(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const ae = d.mode === "frame" ? (() => {
        const Fe = He();
        return Fe ? Qn(s, Fe, performance.now()) : null;
      })() : Zn(s, performance.now());
      if (!ae || !l.startUv) return;
      const me = Un(Number(ae.u || 0), Number(l.startUv.u || 0)), Oe = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Uc((m = l.item) == null ? void 0 : m.actionGroupId, me, Oe, l.snapshot, (_ = l.item) == null ? void 0 : _.layerKind, l.frameSnapshot) && (Jn({ rebuildPaintEngine: !1 }), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const ae = d.mode === "frame" ? (() => {
        const Fe = He();
        return Fe ? Qn(s, Fe, performance.now()) : null;
      })() : Zn(s, performance.now());
      if (!ae || !l.startUv) return;
      const me = Un(Number(ae.u || 0), Number(l.startUv.u || 0)), Oe = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Gc(((y = l.item) == null ? void 0 : y.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", me, Oe, l.snapshot) && (Yi(), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      bg(((k = l.item) == null ? void 0 : k.rasterObjectId) || ((C = l.item) == null ? void 0 : C.id) || "", me, l.snapshot) && (Yi(), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const ae = s.x - Number(((N = l.offset) == null ? void 0 : N.x) || 0), me = s.y - Number(((F = l.offset) == null ? void 0 : F.y) || 0);
      let Oe = !1, Fe = !1, Ee = !1;
      const qe = ae - Number(((B = l.startCenter) == null ? void 0 : B.x) || ae), lt = me - Number(((Z = l.startCenter) == null ? void 0 : Z.y) || me);
      for (const tt of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const xt = (t === "cutout" ? bl() : Rn()).find((At) => String((At == null ? void 0 : At.id) || "") === String(tt.id || ""));
        if (!xt || !vt(xt)) continue;
        const sn = {
          x: Number(((K = tt.center) == null ? void 0 : K.x) || 0) + qe,
          y: Number(((Y = tt.center) == null ? void 0 : Y.y) || 0) + lt
        };
        if (d.mode === "frame" && t === "cutout") {
          const At = He(), Ht = Yt(At);
          if (!At || !Ht) continue;
          const di = {
            x: W((sn.x - Ht.x) / Math.max(1, Ht.w), 0, 1),
            y: W((sn.y - Ht.y) / Math.max(1, Ht.h), 0, 1)
          }, od = Dl(At, di);
          if (!od) continue;
          const sd = ds(od);
          xt.yaw_deg = sd.yaw, xt.pitch_deg = sd.pitch;
        } else if (d.mode === "unwrap") {
          const At = Jr(), Ht = W((sn.x - At.x) / Math.max(At.w, 1), 0, 1), di = W((sn.y - At.y) / Math.max(At.h, 1), 0, 1);
          xt.yaw_deg = Ut(Ht * 360 - 180), xt.pitch_deg = W(90 - di * 180, -90, 90);
        } else {
          const At = Pl(sn.x, sn.y), Ht = ds(At);
          xt.yaw_deg = Ht.yaw, xt.pitch_deg = Ht.pitch;
        }
        Oe = !0;
      }
      for (const tt of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const xt = {
          x: Number(((ue = tt.center) == null ? void 0 : ue.x) || 0) + qe,
          y: Number(((pe = tt.center) == null ? void 0 : pe.y) || 0) + lt
        }, sn = d.mode === "frame" ? (() => {
          const Ht = He();
          return Ht ? Qn(xt, Ht, performance.now()) : null;
        })() : Zn(xt, performance.now()), At = tt.centerUv || null;
        if (sn && At) {
          const Ht = Un(Number(sn.u || 0), Number(At.u || 0)), di = Number(sn.v || 0) - Number(At.v || 0);
          Uc(tt.id, Ht, di, tt.snapshot, tt.layerKind, tt.frameSnapshot) && (Oe = !0, Fe = !0);
        }
      }
      for (const tt of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const xt = {
          x: Number(((le = tt.center) == null ? void 0 : le.x) || 0) + qe,
          y: Number(((_e = tt.center) == null ? void 0 : _e.y) || 0) + lt
        }, sn = d.mode === "frame" ? (() => {
          const Ht = He();
          return Ht ? Qn(xt, Ht, performance.now()) : null;
        })() : Zn(xt, performance.now()), At = tt.centerUv || null;
        if (sn && At) {
          const Ht = Un(Number(sn.u || 0), Number(At.u || 0)), di = Number(sn.v || 0) - Number(At.v || 0);
          Gc(tt.id, Ht, di, tt.snapshot) && (Oe = !0, Ee = !0);
        }
      }
      Oe && (Fe ? Jn({ rebuildPaintEngine: !1 }) : Ee ? Yi() : an(), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Bc((ze = l.item) == null ? void 0 : ze.actionGroupId, me, 0, l.snapshot, (Be = l.item) == null ? void 0 : Be.layerKind, l.frameSnapshot) && (Jn({ rebuildPaintEngine: !1 }), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let ae = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * zr;
      i.shiftKey && (ae = Math.round(ae / 45) * 45), Bc((it = l.item) == null ? void 0 : it.actionGroupId, 1, ae, l.snapshot, (ve = l.item) == null ? void 0 : ve.layerKind, l.frameSnapshot) && (Jn({ rebuildPaintEngine: !1 }), be({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, be({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * me, 1, 179), l.item.vFOV_deg = W(l.startVFOV * me, 1, 179), l.item.aspect_id = vi(l.item), vt(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = W(l.startHFOV * me, 1, 179), l.item.aspect_id = vi(l.item), vt(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.vFOV_deg = W(l.startVFOV * me, 1, 179), l.item.aspect_id = vi(l.item), vt(l.item) && an(), be({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let me = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * zr, Oe = l.startRot - me;
      i.shiftKey && (Oe = Math.round(Oe / 45) * 45);
      const Fe = vt(l.item) ? "rot_deg" : "roll_deg";
      l.item[Fe] = Oe, vt(l.item) && an(), be({ localOnly: !0 });
    }
  }, T.onpointerup = () => {
    var s, l, u, p, m, _, y, w;
    const i = d.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ui();
        const k = Vl(d.interaction), C = !!d.interaction._hasCommittedSegments;
        if (k || C) {
          Jn();
          const N = String(((u = d.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (N) {
            const B = Rt().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || "") === N);
            B && (B.frame = null);
          }
          const F = zn();
          F && (k ? String(((p = d.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(F), _f()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, F) : d.paintEngine.cancelActiveStroke(F)), st(), In(), We(), rt(), e.setDirtyCanvas(!0, !0), be();
        } else {
          const N = zn();
          N && d.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const k = Vf(d.interaction.start, d.interaction.current), N = [
          ...t === "cutout" ? El().filter((F) => !Ln(F)) : [...Rn()],
          ...hg(),
          ...pg()
        ].filter((F) => Pb(k, Qt(F)));
        _g(N, ((_ = N[N.length - 1]) == null ? void 0 : _.id) || null), t === "cutout" && N.length && (d.cutoutAspectOpen = !1), We(), rt(), be();
      } else if (((y = d.interaction) == null ? void 0 : y.kind) === "pan_frame" || ((w = d.interaction) == null ? void 0 : w.kind) === "roll_frame")
        d.interaction.changed && (st(), ut(), We());
      else if (d.interaction && d.interaction.kind !== "view") {
        let k = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (k = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (k = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? Jn({ rebuildPaintEngine: !0 }) : Yi()), st(), In(), e.setDirtyCanvas(!0, !0), qi(), d.hqFrames = 1, rt(), be();
      }
      d.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && fi(), Ui(), i && i.kind === "view" && on.endDrag(performance.now()), Cr(), rt(), _t(d.pointerPos), be();
    }
  }, T.onpointercancel = () => {
    var i, s, l;
    if (!Ra()) {
      if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && on.endDrag(performance.now()), ((s = d.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = d.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ui();
        const u = zn();
        u && d.paintEngine.cancelActiveStroke(u);
      }
      d.interaction = null, Ui(), Cr(), _t(d.pointerPos), be({ localOnly: !0 });
    }
  }, T.onlostpointercapture = () => {
    Ra();
  }, T.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, T.onmousemove = (i) => {
    const s = ci(i), l = Go(s, !0);
    d.interaction || (_t(s), l && d.mode === "frame" && d.primaryTool === "cursor" && be({ localOnly: !0 }));
  }, T.onmouseleave = () => {
    Go(d.pointerPos, !1), _t(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && be({ localOnly: !0 });
  }, T.onwheel = (i) => {
    if (d.mode === "frame") {
      const s = ci(i), l = Mc(i);
      l && mb(s, l) && be({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && (on.applyWheelEvent(i) && be({ localOnly: !0 }), i.preventDefault());
  }, T.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), rn(!0));
  }, T.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Pt.depth = 0, rn(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((p) => Sr(p));
    l && Af(l);
  };
  const Uf = (i) => {
    t !== "stickers" && t !== "cutout" || r || cn(i) && (Pt.depth += 1, rn(!0), i.preventDefault());
  }, Bf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Pt.active && cn(i) && rn(!0), Pt.active && i.preventDefault());
  }, Gf = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Pt.active) return;
    Pt.depth = Math.max(0, Pt.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Pt.depth === 0 || s) && rn(!1);
  }, Kf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Pt.depth = 0, rn(!1), cn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Uf, !0), window.addEventListener("dragover", Bf, !0), window.addEventListener("dragleave", Gf, !0), window.addEventListener("drop", Kf, !0);
  function Bl() {
    const { canUndo: i, canRedo: s } = Pf();
    na(P.toolButtons, "value", "undo", { disabled: !i }), na(P.toolButtons, "value", "redo", { disabled: !s });
  }
  const Wf = (i, s, l = !1) => {
    var w;
    const u = t === "cutout" && d.mode === "frame" ? He() : null, p = u || It(), m = u ? "shot" : Io();
    if (!p || m === "stroke" || wn(p)) return;
    const _ = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((k) => k.key === i);
    if (!_ || _.enabled === !1) return;
    let y = Number(s);
    Number.isNaN(y) && (y = 0), y = W(y, Number(_.min), Number(_.max)), i === "yaw_deg" && (y = Ut(y)), p[i] = y, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = vi(p)), We(), be(), l && st();
  };
  Ne == null || Ne.addEventListener("click", async (i) => {
    var u, p, m, _, y, w, k, C, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const F = ln(s.getAttribute("data-coverage"));
      if (F === ln(b.coverage)) return;
      b.coverage = F, d.coverage = F, h && (h.value = String(F)), o ? oe.backgroundDirty = !0 : (In(), hb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), We(), rt(), be();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (u = P.sidePanel) == null ? void 0 : u.selectionPicker) != null && p.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const F = String(s.getAttribute("data-selection-id") || "");
      let B = null;
      F && (t === "stickers" ? B = Rn().find((Z) => String((Z == null ? void 0 : Z.id) || "") === F) || null : B = ((m = Wc().find((Z) => {
        var K;
        return String(((K = Z == null ? void 0 : Z.item) == null ? void 0 : K.id) || "") === F;
      })) == null ? void 0 : m.item) || null), Li(B || null), B && !Wt(B) && Di(
        Ut(Number(B.yaw_deg || 0)),
        W(Number(B.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), We(), rt(), be();
      return;
    }
    if (l === "copy-state-inline") {
      const F = It(), B = Io();
      if (!F || B === "stroke" || Xn().length > 1) return;
      const Z = JSON.stringify(t === "cutout" && B !== "image" ? ef(F) : Dg(F));
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
      const F = String(s.getAttribute("data-visibility") || "");
      F === "panorama" ? d.showPanorama = !d.showPanorama : F === "objects" ? d.showObjects = !d.showObjects : F === "mask" && (d.showMask = !d.showMask), We(), be();
      return;
    }
    if (l === "set-invert-x") {
      b.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Uo(), We(), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), be();
      return;
    }
    if (l === "set-invert-y") {
      b.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Uo(), We(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), be();
      return;
    }
    if (l === "toggle-quality-picker") {
      (k = P.sidePanel) != null && k.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (l === "set-quality") {
      const F = String(s.getAttribute("data-quality") || "balanced");
      b.ui_settings.preview_quality = F === "draft" || F === "high" ? F : "balanced", Uo(), We(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), be();
      return;
    }
    if (l === "ui-reset-defaults") {
      b.ui_settings.invert_view_x = !1, b.ui_settings.invert_view_y = !1, b.ui_settings.preview_quality = "balanced", Uo(), We(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), be();
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
    l === "save-close" && (fb(), Zi());
  }), Ne == null || Ne.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Wf(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Ne == null || Ne.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Wf(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Gl = () => nf();
  Gl(), ie.addEventListener("click", (i) => {
    var y, w, k, C;
    if ((w = (y = i.target) == null ? void 0 : y.matches) != null && w.call(y, "[data-confirm-overlay]")) {
      const N = (k = P.confirmDialog) == null ? void 0 : k.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const N = d.mode;
      d.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (N !== "frame" && (oe.frameSafeRect = null), We(), rt()), zl(), Cr(), be();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const N = String(l.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = N, (N === "paint" || N === "mask") && Ta({ preservePanelValues: !0 }), Tn(), We(), rt(), be();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const N = String(l.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && l.disabled) return;
        N === "undo" ? Rl(-1) : N === "redo" ? Rl(1) : N === "clear" ? ab() : N === "add" || N === "add-image" ? Z0() : N === "add-or-look" && nb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const N = String(l.getAttribute("data-paint-tool") || "pen");
        d.paintTool = N, Ta({ preservePanelValues: !0 }), En[N] && (d.activeBrushPresetId = N), Tn(), We(), rt(), be();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Ta({ preservePanelValues: !0 }), Tn(), We(), rt(), be();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const N = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        ob(N);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const N = Ts.find((F) => F.id === l.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        d.paintColor = $n(N.color), ne(!0), Tn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), V && !V.hidden ? ne(!0) : Me(), Tn();
        return;
      }
    }
    const u = String(((C = l == null ? void 0 : l.getAttribute) == null ? void 0 : C.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(U instanceof HTMLVideoElement)) return;
      if (Vi(), U.paused) {
        E.mode = "playback", E.pendingPlaybackResume = !1, E.resumeAfterScrub = !1;
        const N = Number(P.videoTransport.duration || U.duration || 0), F = Number(U.currentTime || E.editorTime || 0), B = N > 0 && F >= N - 1e-3 ? 0 : Number(E.editorTime || F || 0), Z = Math.max(Gt(), 0.04);
        E.editorTime = B, Math.abs(F - B) > Z ? (E.seeking = !1, E.pendingPlaybackResume = !0, wl(B)) : U.play().catch(() => {
        });
      } else
        U.pause(), E.mode = "scrub", E.resumeAfterScrub = !1, E.pendingPlaybackResume = !1, E.editorTime = Number(U.currentTime || 0), ji();
      ar({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Ar(),
        currentTime: E.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: E.mode
      }), be({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (u === "video-audio-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(U instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const N = !U.muted;
      U.muted = N, !N && Number(U.volume || 0) <= 0 && (U.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), ar({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Ar(),
        currentTime: E.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: E.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: U.muted,
        volume: Number(U.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(U instanceof HTMLVideoElement)) return;
      const N = !P.videoTransport.loop;
      P.videoTransport.loop = N, U.loop = N, ar({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Ar(),
        currentTime: E.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: E.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: N,
        muted: U.muted,
        volume: Number(U.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (u === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const N = d.mode === "frame" ? He() : null;
        if (!N || N.locked === !0) return;
        If(N, String(l.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, qi(), st(), ut(), Cr(), be();
        return;
      }
      if (u === "frame-aspect-custom") {
        const N = d.mode === "frame" ? He() : null, F = l.getAttribute("data-custom-width"), B = l.getAttribute("data-custom-height");
        if (!N || !lb(N, F, B)) return;
        P.frameRail.aspectOpen = !1, qi(), st(), ut(), Cr(), be();
        return;
      }
      if (u === "frame-rotate-90") {
        const N = d.mode === "frame" ? He() : null;
        if (!N || N.locked === !0) return;
        Ef(N), P.frameRail.aspectOpen = !1, qi(), st(), ut(), Cr(), be();
        return;
      }
      if (u === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, rt(), be();
        return;
      }
      if (u === "aspect-set") {
        const N = It();
        if (!N) return;
        const F = String(l.getAttribute("data-aspect") || "1:1");
        If(N, F), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, qi(), st(), ut(), rt(), be();
        return;
      }
      if (u === "rotate-90") {
        const N = It();
        if (!N) return;
        Ef(N), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, qi(), st(), ut(), rt(), be();
        return;
      }
      if (u === "bring-front") {
        ub();
        return;
      }
      if (u === "send-back") {
        cb();
        return;
      }
      if (u === "duplicate") {
        sb();
        return;
      }
      if (u === "replace-image") {
        eb();
        return;
      }
      if (u === "toggle-lock") {
        vg();
        return;
      }
      if (u === "back-initial") {
        Mg();
        return;
      }
      if (u === "toggle-visible") {
        Ng();
        return;
      }
      if (u === "delete") {
        Tf();
        return;
      }
    }
    if (u === "reset-view") {
      if (d.mode === "frame") return;
      Di(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, $N(e == null ? void 0 : e.id, d.showGrid), Gl(), be();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Ob();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const N = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = N, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = N ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), Zf(), be();
      return;
    }
    const p = i.target.closest("[data-paint-history-index]");
    if (!p) return;
    const m = Number(p.getAttribute("data-paint-history-index")), _ = d.customPaintHistory[m];
    _ && (d.customPaintColor = $n(_), d.paintColor = $n(_), Tn());
  }), ie.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(U instanceof HTMLVideoElement)) return;
      Vi();
      const m = W(Number(s.value || 0), 0, Number(P.videoTransport.duration || 0));
      E.mode = "scrub", !E.seeking && !U.paused && !U.ended && (E.resumeAfterScrub = !0, U.pause()), E.editorTime = m, Ma(m), ar({
        ready: !!U.getAttribute("src"),
        playing: !1,
        visible: Ar(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(at.__panoFrameIdx || 0) > 0 && (oe.backgroundDirty = !0, oe.dirty = !0, be({ cause: "frame_view", localOnly: !0 })), wl(m);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(U instanceof HTMLVideoElement)) return;
      const m = W(Number(l.value || 0), 0, 1);
      U.volume = m, U.muted = m <= 1e-4, ar({
        ready: !!U.getAttribute("src"),
        playing: !U.paused && !U.ended,
        visible: Ar(),
        currentTime: E.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: E.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: U.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), _ = Qr(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[_] = m, Tn(), _b();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...d.customPaintColor, a: W(Number(p.value) / 100, 0, 1) };
      d.customPaintColor = $n(m), d.paintColor = $n(m), Tn();
    }
  }), ie.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(U instanceof HTMLVideoElement)) return;
      E.pendingPlaybackResume = !!E.resumeAfterScrub, E.resumeAfterScrub = !1, E.pendingPlaybackResume || (E.mode = "scrub"), E.seeking || (E.pendingPlaybackResume ? (E.pendingPlaybackResume = !1, E.mode = "playback", U.play().catch(() => {
      })) : (ji(), be({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ko();
  }), ie.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ko();
  }), ie.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ko();
  }), ie.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Ko();
  }), ie.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !ie.contains(s) || Ge.target !== s && (Ge.target = s, Ge.timer && clearTimeout(Ge.timer), Ge.timer = window.setTimeout(() => {
      Ge.target === s && Ab(s);
    }, 220));
  }), ie.addEventListener("pointerout", (i) => {
    var u, p;
    const s = i.target.closest("[data-tip]");
    !s || Ge.target !== s || (i.relatedTarget instanceof Element ? (p = (u = i.relatedTarget).closest) == null ? void 0 : p.call(u, "[data-tip]") : null) === s || fi();
  }), ie.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || fi();
  });
  const Eb = (i, s) => {
    var y;
    if (!te) return;
    const l = te.getBoundingClientRect(), u = W((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - W((s - l.top) / Math.max(1, l.height), 0, 1), m = ku(d.customPaintColor), _ = { ...wu(m.h, u, p), a: Number(((y = d.customPaintColor) == null ? void 0 : y.a) ?? 1) };
    d.customPaintColor = $n(_), d.paintColor = $n(_), Tn();
  }, Db = (i) => {
    var m;
    if (!he) return;
    const s = he.getBoundingClientRect(), l = W((i - s.left) / Math.max(1, s.width), 0, 1), u = ku(d.customPaintColor), p = { ...wu(l, u.s, u.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = $n(p), d.paintColor = $n(p), Tn();
  }, Yf = (i, s) => {
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
    i.preventDefault(), i.stopPropagation(), Yf(i, (s) => Eb(s.clientX, s.clientY));
  }), he && (he.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Yf(i, (s) => Db(s.clientX));
  }), ie.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (p = P.confirmDialog) == null ? void 0 : p.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const qf = () => {
    const i = !!d.fullscreen;
    na(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Te.fullscreen_close : Te.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Wo = (i) => {
    const s = !!i;
    d.fullscreen !== s && (d.fullscreen = s, ie.classList.toggle("pano-modal-fullscreen", s), s ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Gl(), qf(), Ft(), be());
  }, Xf = () => document.fullscreenElement === se, Ob = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Wo(!d.fullscreen);
        return;
      }
      Xf() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = se.requestFullscreen) == null ? void 0 : i.call(se));
    } catch {
      Wo(!d.fullscreen);
    }
  }, Jf = () => {
    document.fullscreenEnabled && Wo(Xf());
  };
  document.addEventListener("fullscreenchange", Jf), qf();
  const Zf = () => {
    const i = !!d.outputPreviewExpanded;
    P.outputPreviewToggle.icon = i ? Te.fullscreen_close : Te.fullscreen, P.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Zf();
  const Kl = e.onExecuted, Wl = e.onConnectionsChange;
  let Yl = null, ql = null, Qf = null, ed = () => {
  };
  !r && t === "stickers" && (Qf = (i = "sync") => {
    tf(i);
  }, ed = zm(e, Qf), Yl = function(...s) {
    typeof Kl == "function" && Kl.apply(this, s), MN(Re, os), Qa(this, "executed");
  }, e.onExecuted = Yl, ql = function(...s) {
    typeof Wl == "function" && Wl.apply(this, s), Qa(this, "connections");
  }, e.onConnectionsChange = ql), r || Hh.set(String(e.id ?? "0"), () => uf());
  let Ji = null;
  const Zi = async () => Ji || (Ji = (async () => {
    var i, s, l, u, p, m, _, y, w, k, C;
    return Hh.delete(String(e.id ?? "0")), gb(), r || In(), document.fullscreenElement === se && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Jf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Of && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || p.call(u, !0, !0), (y = (_ = (m = nr) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || y.call(_, !0, !0), fi(), J0(), U instanceof HTMLVideoElement && U.pause(), Le.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (w = xe == null ? void 0 : xe.dispose) == null || w.call(xe), (k = De == null ? void 0 : De.unmount) == null || k.call(De), (C = Ae == null ? void 0 : Ae.dispose) == null || C.call(Ae), rn(!1), window.removeEventListener("keydown", td, !0), window.removeEventListener("keydown", nd, !0), window.removeEventListener("keydown", Yo, !0), window.removeEventListener("keyup", Yo, !0), window.removeEventListener("blur", rd), window.removeEventListener("keydown", id, !0), window.removeEventListener("dragenter", Uf, !0), window.removeEventListener("dragover", Bf, !0), window.removeEventListener("dragleave", Gf, !0), window.removeEventListener("drop", Kf, !0), !r && t === "stickers" && (e.onExecuted === Yl && (e.onExecuted = Kl), e.onConnectionsChange === ql && (e.onConnectionsChange = Wl), ed()), G.unmount(), $.remove(), db(), Ji = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Ji = null, !1)), Ji), td = (i) => {
    var s, l, u, p, m;
    if (i.key === "Escape") {
      if (Ra()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === se) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Wo(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Zi();
    }
  }, nd = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const _ = i.target, y = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    y === "INPUT" || y === "TEXTAREA" || _ != null && _.isContentEditable || !It() || (Tf(), i.preventDefault(), i.stopPropagation());
  }, Yo = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    d.marqueeModifier === s && d.altModifier === l || (d.marqueeModifier = s, d.altModifier = l, Ir(), _t(d.pointerPos));
  }, rd = () => {
    d.marqueeModifier = !1, d.altModifier = !1, Ir(), _t(d.pointerPos);
  }, id = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, p = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = Pf();
    i.shiftKey && !_ || !i.shiftKey && !m || (Rl(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", td, !0), window.addEventListener("keydown", nd, !0), window.addEventListener("keydown", Yo, !0), window.addEventListener("keyup", Yo, !0), window.addEventListener("blur", rd), window.addEventListener("keydown", id, !0), se.addEventListener("pointerdown", (i) => {
    i.target === se && Zi();
  });
  function or(i, s, { rollbackState: l = !1 } = {}) {
    let u = "";
    try {
      l && (u = JSON.stringify(b)), s();
    } catch (p) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(b).forEach((_) => delete b[_]), Object.assign(b, m), r || In();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      P.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  or("cutout-focus", Rg), !r && t === "stickers" && or("external-sticker-sync", () => tf("open"), { rollbackState: !0 }), tb().catch((i) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), or("history", st), or("undo-redo", Bl), or("paint-ui", Tn), or("side-panel", We), or("look-at-frame", Nl), or("video-source", Vi), or("canvas-size", Nf), or("cursor", () => _t(d.pointerPos)), be(), oe.rafId = requestAnimationFrame(Mf);
}
nr.registerExtension(vx({
  app: nr,
  openEditor: GN,
  attachStickers: ES,
  attachCutout: DS,
  attachPreview: IS,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: mN
}));
