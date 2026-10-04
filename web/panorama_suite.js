import * as ds from "../../scripts/app.js";
import { app as nr } from "../../scripts/app.js";
import { api as fn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ru(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ct = {}, so = [], br = () => {
}, jh = () => !1, ul = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dl = (e) => e.startsWith("onUpdate:"), gn = Object.assign, $u = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, M1 = Object.prototype.hasOwnProperty, St = (e, t) => M1.call(e, t), st = Array.isArray, lo = (e) => Ia(e) === "[object Map]", Hh = (e) => Ia(e) === "[object Set]", Qf = (e) => Ia(e) === "[object Date]", dt = (e) => typeof e == "function", qt = (e) => typeof e == "string", wr = (e) => typeof e == "symbol", Nt = (e) => e !== null && typeof e == "object", Gh = (e) => (Nt(e) || dt(e)) && dt(e.then) && dt(e.catch), Wh = Object.prototype.toString, Ia = (e) => Wh.call(e), P1 = (e) => Ia(e).slice(8, -1), Kh = (e) => Ia(e) === "[object Object]", zu = (e) => qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ra = /* @__PURE__ */ Ru(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, N1 = /-\w/g, Sn = fl(
  (e) => e.replace(N1, (t) => t.slice(1).toUpperCase())
), A1 = /\B([A-Z])/g, Ei = fl(
  (e) => e.replace(A1, "-$1").toLowerCase()
), pl = fl((e) => e.charAt(0).toUpperCase() + e.slice(1)), rc = fl(
  (e) => e ? `on${pl(e)}` : ""
), gr = (e, t) => !Object.is(e, t), fs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Bh = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, ju = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ep;
const hl = () => ep || (ep = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = qt(r) ? O1(r) : Pt(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (qt(e) || Nt(e))
    return e;
}
const C1 = /;(?![^(]*\))/g, I1 = /:([^]+)/, E1 = /\/\*[^]*?\*\//g;
function O1(e) {
  const t = {};
  return e.replace(E1, "").split(C1).forEach((n) => {
    if (n) {
      const r = n.split(I1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function pt(e) {
  let t = "";
  if (qt(e))
    t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const r = pt(e[n]);
      r && (t += r + " ");
    }
  else if (Nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const F1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", T1 = /* @__PURE__ */ Ru(F1);
function Uh(e) {
  return !!e || e === "";
}
function D1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Hu(e[r], t[r]);
  return n;
}
function Hu(e, t) {
  if (e === t) return !0;
  let n = Qf(e), r = Qf(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = wr(e), r = wr(t), n || r)
    return e === t;
  if (n = st(e), r = st(t), n || r)
    return n && r ? D1(e, t) : !1;
  if (n = Nt(e), r = Nt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !Hu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Yh = (e) => !!(e && e.__v_isRef === !0), ut = (e) => qt(e) ? e : e == null ? "" : st(e) || Nt(e) && (e.toString === Wh || !dt(e.toString)) ? Yh(e) ? ut(e.value) : JSON.stringify(e, qh, 2) : String(e), qh = (e, t) => Yh(t) ? qh(e, t.value) : lo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ic(r, o) + " =>"] = i, n),
    {}
  )
} : Hh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ic(n))
} : wr(t) ? ic(t) : Nt(t) && !st(t) && !Kh(t) ? String(t) : t, ic = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mn;
class L1 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Mn, !t && Mn && (this.index = (Mn.scopes || (Mn.scopes = [])).push(
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
      const n = Mn;
      try {
        return Mn = this, t();
      } finally {
        Mn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mn, Mn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Mn = this.prevScope, this.prevScope = void 0);
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
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function V1() {
  return Mn;
}
let It;
const oc = /* @__PURE__ */ new WeakSet();
class Xh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mn && Mn.active && Mn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oc.has(this) && (oc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Zh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, tp(this), Qh(this);
    const t = It, n = rr;
    It = this, rr = !0;
    try {
      return this.fn();
    } finally {
      em(this), It = t, rr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ku(t);
      this.deps = this.depsTail = void 0, tp(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? oc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gc(this) && this.run();
  }
  get dirty() {
    return Gc(this);
  }
}
let Jh = 0, ia, oa;
function Zh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = oa, oa = e;
    return;
  }
  e.next = ia, ia = e;
}
function Gu() {
  Jh++;
}
function Wu() {
  if (--Jh > 0)
    return;
  if (oa) {
    let t = oa;
    for (oa = void 0; t; ) {
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
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Qh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function em(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Ku(r), R1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function Gc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (tm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function tm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ha) || (e.globalVersion = ha, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Gc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = It, r = rr;
  It = e, rr = !0;
  try {
    Qh(e);
    const i = e.fn(e._value);
    (t.version === 0 || gr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    It = n, rr = r, em(e), e.flags &= -3;
  }
}
function Ku(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ku(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function R1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let rr = !0;
const nm = [];
function $r() {
  nm.push(rr), rr = !1;
}
function zr() {
  const e = nm.pop();
  rr = e === void 0 ? !0 : e;
}
function tp(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = It;
    It = void 0;
    try {
      t();
    } finally {
      It = n;
    }
  }
}
let ha = 0;
class $1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Bu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!It || !rr || It === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== It)
      n = this.activeLink = new $1(It, this), It.deps ? (n.prevDep = It.depsTail, It.depsTail.nextDep = n, It.depsTail = n) : It.deps = It.depsTail = n, rm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = It.depsTail, n.nextDep = void 0, It.depsTail.nextDep = n, It.depsTail = n, It.deps === n && (It.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ha++, this.notify(t);
  }
  notify(t) {
    Gu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wu();
    }
  }
}
function rm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        rm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Wc = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ Symbol(
  ""
), Kc = /* @__PURE__ */ Symbol(
  ""
), ma = /* @__PURE__ */ Symbol(
  ""
);
function un(e, t, n) {
  if (rr && It) {
    let r = Wc.get(e);
    r || Wc.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Bu()), i.map = r, i.key = n), i.track();
  }
}
function Fr(e, t, n, r, i, o) {
  const a = Wc.get(e);
  if (!a) {
    ha++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Gu(), t === "clear")
    a.forEach(s);
  else {
    const l = st(e), d = l && zu(n);
    if (l && n === "length") {
      const u = Number(r);
      a.forEach((c, p) => {
        (p === "length" || p === ma || !wr(p) && p >= u) && s(c);
      });
    } else
      switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)), d && s(a.get(ma)), t) {
        case "add":
          l ? d && s(a.get("length")) : (s(a.get(xi)), lo(e) && s(a.get(Kc)));
          break;
        case "delete":
          l || (s(a.get(xi)), lo(e) && s(a.get(Kc)));
          break;
        case "set":
          lo(e) && s(a.get(xi));
          break;
      }
  }
  Wu();
}
function qi(e) {
  const t = /* @__PURE__ */ _t(e);
  return t === e ? t : (un(t, "iterate", ma), /* @__PURE__ */ Gn(e) ? t : t.map(ar));
}
function ml(e) {
  return un(e = /* @__PURE__ */ _t(e), "iterate", ma), e;
}
function hr(e, t) {
  return /* @__PURE__ */ jr(e) ? bo(/* @__PURE__ */ ki(e) ? ar(t) : t) : ar(t);
}
const z1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ac(this, Symbol.iterator, (e) => hr(this, e));
  },
  concat(...e) {
    return qi(this).concat(
      ...e.map((t) => st(t) ? qi(t) : t)
    );
  },
  entries() {
    return ac(this, "entries", (e) => (e[1] = hr(this, e[1]), e));
  },
  every(e, t) {
    return Nr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Nr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => hr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Nr(
      this,
      "find",
      e,
      t,
      (n) => hr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Nr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Nr(
      this,
      "findLast",
      e,
      t,
      (n) => hr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Nr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Nr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return sc(this, "includes", e);
  },
  indexOf(...e) {
    return sc(this, "indexOf", e);
  },
  join(e) {
    return qi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return sc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Nr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zo(this, "pop");
  },
  push(...e) {
    return zo(this, "push", e);
  },
  reduce(e, ...t) {
    return np(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return np(this, "reduceRight", e, t);
  },
  shift() {
    return zo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Nr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zo(this, "splice", e);
  },
  toReversed() {
    return qi(this).toReversed();
  },
  toSorted(e) {
    return qi(this).toSorted(e);
  },
  toSpliced(...e) {
    return qi(this).toSpliced(...e);
  },
  unshift(...e) {
    return zo(this, "unshift", e);
  },
  values() {
    return ac(this, "values", (e) => hr(this, e));
  }
};
function ac(e, t, n) {
  const r = ml(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ Gn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const j1 = Array.prototype;
function Nr(e, t, n, r, i, o) {
  const a = ml(e), s = a !== e && !/* @__PURE__ */ Gn(e), l = a[t];
  if (l !== j1[t]) {
    const c = l.apply(e, o);
    return s ? ar(c) : c;
  }
  let d = n;
  a !== e && (s ? d = function(c, p) {
    return n.call(this, hr(e, c), p, e);
  } : n.length > 2 && (d = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const u = l.call(a, d, r);
  return s && i ? i(u) : u;
}
function np(e, t, n, r) {
  const i = ml(e), o = i !== e && !/* @__PURE__ */ Gn(e);
  let a = n, s = !1;
  i !== e && (o ? (s = r.length === 0, a = function(d, u, c) {
    return s && (s = !1, d = hr(e, d)), n.call(this, d, hr(e, u), c, e);
  }) : n.length > 3 && (a = function(d, u, c) {
    return n.call(this, d, u, c, e);
  }));
  const l = i[t](a, ...r);
  return s ? hr(e, l) : l;
}
function sc(e, t, n) {
  const r = /* @__PURE__ */ _t(e);
  un(r, "iterate", ma);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ qu(n[0]) ? (n[0] = /* @__PURE__ */ _t(n[0]), r[t](...n)) : i;
}
function zo(e, t, n = []) {
  $r(), Gu();
  const r = (/* @__PURE__ */ _t(e))[t].apply(e, n);
  return Wu(), zr(), r;
}
const H1 = /* @__PURE__ */ Ru("__proto__,__v_isRef,__isVue"), im = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wr)
);
function G1(e) {
  wr(e) || (e = String(e));
  const t = /* @__PURE__ */ _t(this);
  return un(t, "has", e), t.hasOwnProperty(e);
}
class om {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (i ? o ? Q1 : cm : o ? lm : sm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const a = st(t);
    if (!i) {
      let l;
      if (a && (l = z1[n]))
        return l;
      if (n === "hasOwnProperty")
        return G1;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : r
    );
    if ((wr(n) ? im.has(n) : H1(n)) || (i || un(t, "get", n), o))
      return s;
    if (/* @__PURE__ */ hn(s)) {
      const l = a && zu(n) ? s : s.value;
      return i && Nt(l) ? /* @__PURE__ */ Uc(l) : l;
    }
    return Nt(s) ? i ? /* @__PURE__ */ Uc(s) : /* @__PURE__ */ ko(s) : s;
  }
}
class am extends om {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const a = st(t) && zu(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ jr(o);
      if (!/* @__PURE__ */ Gn(r) && !/* @__PURE__ */ jr(r) && (o = /* @__PURE__ */ _t(o), r = /* @__PURE__ */ _t(r)), !a && /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(r))
        return d || (o.value = r), !0;
    }
    const s = a ? Number(n) < t.length : St(t, n), l = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ hn(t) ? t : i
    );
    return t === /* @__PURE__ */ _t(i) && (s ? gr(r, o) && Fr(t, "set", n, r) : Fr(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = St(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Fr(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wr(n) || !im.has(n)) && un(t, "has", n), r;
  }
  ownKeys(t) {
    return un(
      t,
      "iterate",
      st(t) ? "length" : xi
    ), Reflect.ownKeys(t);
  }
}
class W1 extends om {
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
const K1 = /* @__PURE__ */ new am(), B1 = /* @__PURE__ */ new W1(), U1 = /* @__PURE__ */ new am(!0);
const Bc = (e) => e, Ya = (e) => Reflect.getPrototypeOf(e);
function Y1(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ _t(i), a = lo(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...r), u = n ? Bc : t ? bo : ar;
    return !t && un(
      o,
      "iterate",
      l ? Kc : xi
    ), gn(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: c, done: p } = d.next();
          return p ? { value: c, done: p } : {
            value: s ? [u(c[0]), u(c[1])] : u(c),
            done: p
          };
        }
      }
    );
  };
}
function qa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function q1(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ _t(o), s = /* @__PURE__ */ _t(i);
      e || (gr(i, s) && un(a, "get", i), un(a, "get", s));
      const { has: l } = Ya(a), d = t ? Bc : e ? bo : ar;
      if (l.call(a, i))
        return d(o.get(i));
      if (l.call(a, s))
        return d(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && un(/* @__PURE__ */ _t(i), "iterate", xi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ _t(o), s = /* @__PURE__ */ _t(i);
      return e || (gr(i, s) && un(a, "has", i), un(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ _t(s), d = t ? Bc : e ? bo : ar;
      return !e && un(l, "iterate", xi), s.forEach((u, c) => i.call(o, d(u), d(c), a));
    }
  };
  return gn(
    n,
    e ? {
      add: qa("add"),
      set: qa("set"),
      delete: qa("delete"),
      clear: qa("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ _t(this), a = Ya(o), s = /* @__PURE__ */ _t(i), l = !t && !/* @__PURE__ */ Gn(i) && !/* @__PURE__ */ jr(i) ? s : i;
        return a.has.call(o, l) || gr(i, l) && a.has.call(o, i) || gr(s, l) && a.has.call(o, s) || (o.add(l), Fr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Gn(o) && !/* @__PURE__ */ jr(o) && (o = /* @__PURE__ */ _t(o));
        const a = /* @__PURE__ */ _t(this), { has: s, get: l } = Ya(a);
        let d = s.call(a, i);
        d || (i = /* @__PURE__ */ _t(i), d = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), d ? gr(o, u) && Fr(a, "set", i, o) : Fr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ _t(this), { has: a, get: s } = Ya(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ _t(i), l = a.call(o, i)), s && s.call(o, i);
        const d = o.delete(i);
        return l && Fr(o, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ _t(this), o = i.size !== 0, a = i.clear();
        return o && Fr(
          i,
          "clear",
          void 0,
          void 0
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Y1(i, e, t);
  }), n;
}
function Uu(e, t) {
  const n = q1(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    St(n, i) && i in r ? n : r,
    i,
    o
  );
}
const X1 = {
  get: /* @__PURE__ */ Uu(!1, !1)
}, J1 = {
  get: /* @__PURE__ */ Uu(!1, !0)
}, Z1 = {
  get: /* @__PURE__ */ Uu(!0, !1)
};
const sm = /* @__PURE__ */ new WeakMap(), lm = /* @__PURE__ */ new WeakMap(), cm = /* @__PURE__ */ new WeakMap(), Q1 = /* @__PURE__ */ new WeakMap();
function ev(e) {
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
function tv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ev(P1(e));
}
// @__NO_SIDE_EFFECTS__
function ko(e) {
  return /* @__PURE__ */ jr(e) ? e : Yu(
    e,
    !1,
    K1,
    X1,
    sm
  );
}
// @__NO_SIDE_EFFECTS__
function nv(e) {
  return Yu(
    e,
    !1,
    U1,
    J1,
    lm
  );
}
// @__NO_SIDE_EFFECTS__
function Uc(e) {
  return Yu(
    e,
    !0,
    B1,
    Z1,
    cm
  );
}
function Yu(e, t, n, r, i) {
  if (!Nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = tv(e);
  if (o === 0)
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  return /* @__PURE__ */ jr(e) ? /* @__PURE__ */ ki(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ _t(t) : e;
}
function rv(e) {
  return !St(e, "__v_skip") && Object.isExtensible(e) && Bh(e, "__v_skip", !0), e;
}
const ar = (e) => Nt(e) ? /* @__PURE__ */ ko(e) : e, bo = (e) => Nt(e) ? /* @__PURE__ */ Uc(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return um(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return um(e, !0);
}
function um(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new iv(e, t);
}
class iv {
  constructor(t, n) {
    this.dep = new Bu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ _t(t), this._value = n ? t : ar(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Gn(t) || /* @__PURE__ */ jr(t);
    t = r ? t : /* @__PURE__ */ _t(t), gr(t, n) && (this._rawValue = t, this._value = r ? t : ar(t), this.dep.trigger());
  }
}
function at(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const ov = {
  get: (e, t, n) => t === "__v_raw" ? e : at(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ hn(i) && !/* @__PURE__ */ hn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function dm(e) {
  return /* @__PURE__ */ ki(e) ? e : new Proxy(e, ov);
}
class av {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Bu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ha - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    It !== this)
      return Zh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return tm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function sv(e, t, n = !1) {
  let r, i;
  return dt(e) ? r = e : (r = e.get, i = e.set), new av(r, i, n);
}
const Xa = {}, Is = /* @__PURE__ */ new WeakMap();
let gi;
function lv(e, t = !1, n = gi) {
  if (n) {
    let r = Is.get(n);
    r || Is.set(n, r = []), r.push(e);
  }
}
function cv(e, t, n = Ct) {
  const { immediate: r, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = n, d = (T) => i ? T : /* @__PURE__ */ Gn(T) || i === !1 || i === 0 ? Tr(T, 1) : Tr(T);
  let u, c, p, g, y = !1, _ = !1;
  if (/* @__PURE__ */ hn(e) ? (c = () => e.value, y = /* @__PURE__ */ Gn(e)) : /* @__PURE__ */ ki(e) ? (c = () => d(e), y = !0) : st(e) ? (_ = !0, y = e.some((T) => /* @__PURE__ */ ki(T) || /* @__PURE__ */ Gn(T)), c = () => e.map((T) => {
    if (/* @__PURE__ */ hn(T))
      return T.value;
    if (/* @__PURE__ */ ki(T))
      return d(T);
    if (dt(T))
      return l ? l(T, 2) : T();
  })) : dt(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (p) {
      $r();
      try {
        p();
      } finally {
        zr();
      }
    }
    const T = gi;
    gi = u;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      gi = T;
    }
  } : c = br, t && i) {
    const T = c, x = i === !0 ? 1 / 0 : i;
    c = () => Tr(T(), x);
  }
  const b = V1(), C = () => {
    u.stop(), b && b.active && $u(b.effects, u);
  };
  if (o && t) {
    const T = t;
    t = (...x) => {
      T(...x), C();
    };
  }
  let U = _ ? new Array(e.length).fill(Xa) : Xa;
  const D = (T) => {
    if (!(!(u.flags & 1) || !u.dirty && !T))
      if (t) {
        const x = u.run();
        if (i || y || (_ ? x.some((H, z) => gr(H, U[z])) : gr(x, U))) {
          p && p();
          const H = gi;
          gi = u;
          try {
            const z = [
              x,
              // pass undefined as the old value when it's changed for the first time
              U === Xa ? void 0 : _ && U[0] === Xa ? [] : U,
              g
            ];
            U = x, l ? l(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            gi = H;
          }
        }
      } else
        u.run();
  };
  return s && s(D), u = new Xh(c), u.scheduler = a ? () => a(D, !1) : D, g = (T) => lv(T, !1, u), p = u.onStop = () => {
    const T = Is.get(u);
    if (T) {
      if (l)
        l(T, 4);
      else
        for (const x of T) x();
      Is.delete(u);
    }
  }, t ? r ? D(!0) : U = u.run() : a ? a(D.bind(null, !0), !0) : u.run(), C.pause = u.pause.bind(u), C.resume = u.resume.bind(u), C.stop = C, C;
}
function Tr(e, t = 1 / 0, n) {
  if (t <= 0 || !Nt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ hn(e))
    Tr(e.value, t, n);
  else if (st(e))
    for (let r = 0; r < e.length; r++)
      Tr(e[r], t, n);
  else if (Hh(e) || lo(e))
    e.forEach((r) => {
      Tr(r, t, n);
    });
  else if (Kh(e)) {
    for (const r in e)
      Tr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Tr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ea(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    gl(i, t, n);
  }
}
function xr(e, t, n, r) {
  if (dt(e)) {
    const i = Ea(e, t, n, r);
    return i && Gh(i) && i.catch((o) => {
      gl(o, t, n);
    }), i;
  }
  if (st(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(xr(e[o], t, n, r));
    return i;
  }
}
function gl(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Ct;
  if (t) {
    let s = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, l, d) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      $r(), Ea(o, null, 10, [
        e,
        l,
        d
      ]), zr();
      return;
    }
  }
  uv(e, n, i, r, a);
}
function uv(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const _n = [];
let pr = -1;
const co = [];
let Ur = null, Zi = 0;
const fm = /* @__PURE__ */ Promise.resolve();
let Es = null;
function yl(e) {
  const t = Es || fm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function dv(e) {
  let t = pr + 1, n = _n.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = _n[r], o = ga(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Xu(e) {
  if (!(e.flags & 1)) {
    const t = ga(e), n = _n[_n.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ga(n) ? _n.push(e) : _n.splice(dv(t), 0, e), e.flags |= 1, pm();
  }
}
function pm() {
  Es || (Es = fm.then(mm));
}
function fv(e) {
  st(e) ? co.push(...e) : Ur && e.id === -1 ? Ur.splice(Zi + 1, 0, e) : e.flags & 1 || (co.push(e), e.flags |= 1), pm();
}
function rp(e, t, n = pr + 1) {
  for (; n < _n.length; n++) {
    const r = _n[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      _n.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function hm(e) {
  if (co.length) {
    const t = [...new Set(co)].sort(
      (n, r) => ga(n) - ga(r)
    );
    if (co.length = 0, Ur) {
      Ur.push(...t);
      return;
    }
    for (Ur = t, Zi = 0; Zi < Ur.length; Zi++) {
      const n = Ur[Zi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ur = null, Zi = 0;
  }
}
const ga = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function mm(e) {
  try {
    for (pr = 0; pr < _n.length; pr++) {
      const t = _n[pr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ea(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pr < _n.length; pr++) {
      const t = _n[pr];
      t && (t.flags &= -2);
    }
    pr = -1, _n.length = 0, hm(), Es = null, (_n.length || co.length) && mm();
  }
}
let Dn = null, gm = null;
function Os(e) {
  const t = Dn;
  return Dn = e, gm = e && e.type.__scopeId || null, t;
}
function ym(e, t = Dn, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && mp(-1);
    const o = Os(t);
    let a;
    try {
      a = e(...i);
    } finally {
      Os(o), r._d && mp(1);
    }
    return a;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vr(e, t) {
  if (Dn === null)
    return e;
  const n = wl(Dn), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Ct] = t[i];
    o && (dt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Tr(a), r.push({
      dir: o,
      instance: n,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function ui(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[r];
    l && ($r(), xr(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), zr());
  }
}
function pv(e, t) {
  if (dn) {
    let n = dn.provides;
    const r = dn.parent && dn.parent.provides;
    r === n && (n = dn.provides = Object.create(r)), n[e] = t;
  }
}
function ps(e, t, n = !1) {
  const r = d_();
  if (r || uo) {
    let i = uo ? uo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && dt(t) ? t.call(r && r.proxy) : t;
  }
}
const hv = /* @__PURE__ */ Symbol.for("v-scx"), mv = () => ps(hv);
function Mi(e, t, n) {
  return bm(e, t, n);
}
function bm(e, t, n = Ct) {
  const { immediate: r, deep: i, flush: o, once: a } = n, s = gn({}, n), l = t && r || !t && o !== "post";
  let d;
  if (ba) {
    if (o === "sync") {
      const g = mv();
      d = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = br, g.resume = br, g.pause = br, g;
    }
  }
  const u = dn;
  s.call = (g, y, _) => xr(g, u, y, _);
  let c = !1;
  o === "post" ? s.scheduler = (g) => {
    kn(g, u && u.suspense);
  } : o !== "sync" && (c = !0, s.scheduler = (g, y) => {
    y ? g() : Xu(g);
  }), s.augmentJob = (g) => {
    t && (g.flags |= 4), c && (g.flags |= 2, u && (g.id = u.uid, g.i = u));
  };
  const p = cv(e, t, s);
  return ba && (d ? d.push(p) : l && p()), p;
}
function gv(e, t, n) {
  const r = this.proxy, i = qt(e) ? e.includes(".") ? vm(r, e) : () => r[e] : e.bind(r, r);
  let o;
  dt(t) ? o = t : (o = t.handler, n = t);
  const a = Fa(this), s = bm(i, o.bind(r), n);
  return a(), s;
}
function vm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const yv = /* @__PURE__ */ Symbol("_vte"), bv = (e) => e.__isTeleport, vv = /* @__PURE__ */ Symbol("_leaveCb");
function Ju(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ju(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function _m(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ip(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Fs = /* @__PURE__ */ new WeakMap();
function aa(e, t, n, r, i = !1) {
  if (st(e)) {
    e.forEach(
      (_, b) => aa(
        _,
        t && (st(t) ? t[b] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (sa(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && aa(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? wl(r.component) : r.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === Ct ? s.refs = {} : s.refs, c = s.setupState, p = /* @__PURE__ */ _t(c), g = c === Ct ? jh : (_) => ip(u, _) ? !1 : St(p, _), y = (_, b) => !(b && ip(u, b));
  if (d != null && d !== l) {
    if (op(t), qt(d))
      u[d] = null, g(d) && (c[d] = null);
    else if (/* @__PURE__ */ hn(d)) {
      const _ = t;
      y(d, _.k) && (d.value = null), _.k && (u[_.k] = null);
    }
  }
  if (dt(l))
    Ea(l, s, 12, [a, u]);
  else {
    const _ = qt(l), b = /* @__PURE__ */ hn(l);
    if (_ || b) {
      const C = () => {
        if (e.f) {
          const U = _ ? g(l) ? c[l] : u[l] : y() || !e.k ? l.value : u[e.k];
          if (i)
            st(U) && $u(U, o);
          else if (st(U))
            U.includes(o) || U.push(o);
          else if (_)
            u[l] = [o], g(l) && (c[l] = u[l]);
          else {
            const D = [o];
            y(l, e.k) && (l.value = D), e.k && (u[e.k] = D);
          }
        } else _ ? (u[l] = a, g(l) && (c[l] = a)) : b && (y(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const U = () => {
          C(), Fs.delete(e);
        };
        U.id = -1, Fs.set(e, U), kn(U, n);
      } else
        op(e), C();
    }
  }
}
function op(e) {
  const t = Fs.get(e);
  t && (t.flags |= 8, Fs.delete(e));
}
hl().requestIdleCallback;
hl().cancelIdleCallback;
const sa = (e) => !!e.type.__asyncLoader, Sm = (e) => e.type.__isKeepAlive;
function _v(e, t) {
  wm(e, "a", t);
}
function Sv(e, t) {
  wm(e, "da", t);
}
function wm(e, t, n = dn) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (bl(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Sm(i.parent.vnode) && wv(r, t, n, i), i = i.parent;
  }
}
function wv(e, t, n, r) {
  const i = bl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  xm(() => {
    $u(r[t], i);
  }, n);
}
function bl(e, t, n = dn, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...a) => {
      $r();
      const s = Fa(n), l = xr(t, n, e, a);
      return s(), zr(), l;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const Hr = (e) => (t, n = dn) => {
  (!ba || e === "sp") && bl(e, (...r) => t(...r), n);
}, xv = Hr("bm"), vl = Hr("m"), kv = Hr(
  "bu"
), Mv = Hr("u"), Oa = Hr(
  "bum"
), xm = Hr("um"), Pv = Hr(
  "sp"
), Nv = Hr("rtg"), Av = Hr("rtc");
function Cv(e, t = dn) {
  bl("ec", e, t);
}
const Iv = "components", km = /* @__PURE__ */ Symbol.for("v-ndc");
function Ev(e) {
  return qt(e) ? Ov(Iv, e, !1) || e : e || km;
}
function Ov(e, t, n = !0, r = !1) {
  const i = Dn || dn;
  if (i) {
    const o = i.type;
    {
      const s = g_(
        o,
        !1
      );
      if (s && (s === t || s === Sn(t) || s === pl(Sn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      ap(i[e] || o[e], t) || // global registration
      ap(i.appContext[e], t)
    );
    return !a && r ? o : a;
  }
}
function ap(e, t) {
  return e && (e[t] || e[Sn(t)] || e[pl(Sn(t))]);
}
function xt(e, t, n, r) {
  let i;
  const o = n, a = st(e);
  if (a || qt(e)) {
    const s = a && /* @__PURE__ */ ki(e);
    let l = !1, d = !1;
    s && (l = !/* @__PURE__ */ Gn(e), d = /* @__PURE__ */ jr(e), e = ml(e)), i = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(
        l ? d ? bo(ar(e[u])) : ar(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Nt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, d = s.length; l < d; l++) {
        const u = s[l];
        i[l] = t(e[u], u, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Yc = (e) => e ? Km(e) ? wl(e) : Yc(e.parent) : null, la = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yc(e.parent),
    $root: (e) => Yc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yl.bind(e.proxy)),
    $watch: (e) => gv.bind(e)
  })
), lc = (e, t) => e !== Ct && !e.__isScriptSetup && St(e, t), Fv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const p = a[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (lc(r, t))
          return a[t] = 1, r[t];
        if (i !== Ct && St(i, t))
          return a[t] = 2, i[t];
        if (St(o, t))
          return a[t] = 3, o[t];
        if (n !== Ct && St(n, t))
          return a[t] = 4, n[t];
        qc && (a[t] = 0);
      }
    }
    const d = la[t];
    let u, c;
    if (d)
      return t === "$attrs" && un(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ct && St(n, t))
      return a[t] = 4, n[t];
    if (
      // global properties
      c = l.config.globalProperties, St(c, t)
    )
      return c[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return lc(i, t) ? (i[t] = n, !0) : r !== Ct && St(r, t) ? (r[t] = n, !0) : St(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(n[s] || e !== Ct && s[0] !== "$" && St(e, s) || lc(t, s) || St(o, s) || St(r, s) || St(la, s) || St(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : St(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function sp(e) {
  return st(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let qc = !0;
function Tv(e) {
  const t = Pm(e), n = e.proxy, r = e.ctx;
  qc = !1, t.beforeCreate && lp(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: p,
    beforeUpdate: g,
    updated: y,
    activated: _,
    deactivated: b,
    beforeDestroy: C,
    beforeUnmount: U,
    destroyed: D,
    unmounted: T,
    render: x,
    renderTracked: H,
    renderTriggered: z,
    errorCaptured: ee,
    serverPrefetch: re,
    // public API
    expose: B,
    inheritAttrs: G,
    // assets
    components: Y,
    directives: le,
    filters: ve
  } = t;
  if (d && Dv(d, r, null), a)
    for (const Z in a) {
      const E = a[Z];
      dt(E) && (r[Z] = E.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    Nt(Z) && (e.data = /* @__PURE__ */ ko(Z));
  }
  if (qc = !0, o)
    for (const Z in o) {
      const E = o[Z], W = dt(E) ? E.bind(n, n) : dt(E.get) ? E.get.bind(n, n) : br, de = !dt(E) && dt(E.set) ? E.set.bind(n) : br, fe = ft({
        get: W,
        set: de
      });
      Object.defineProperty(r, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (we) => fe.value = we
      });
    }
  if (s)
    for (const Z in s)
      Mm(s[Z], r, n, Z);
  if (l) {
    const Z = dt(l) ? l.call(n) : l;
    Reflect.ownKeys(Z).forEach((E) => {
      pv(E, Z[E]);
    });
  }
  u && lp(u, e, "c");
  function he(Z, E) {
    st(E) ? E.forEach((W) => Z(W.bind(n))) : E && Z(E.bind(n));
  }
  if (he(xv, c), he(vl, p), he(kv, g), he(Mv, y), he(_v, _), he(Sv, b), he(Cv, ee), he(Av, H), he(Nv, z), he(Oa, U), he(xm, T), he(Pv, re), st(B))
    if (B.length) {
      const Z = e.exposed || (e.exposed = {});
      B.forEach((E) => {
        Object.defineProperty(Z, E, {
          get: () => n[E],
          set: (W) => n[E] = W,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === br && (e.render = x), G != null && (e.inheritAttrs = G), Y && (e.components = Y), le && (e.directives = le), re && _m(e);
}
function Dv(e, t, n = br) {
  st(e) && (e = Xc(e));
  for (const r in e) {
    const i = e[r];
    let o;
    Nt(i) ? "default" in i ? o = ps(
      i.from || r,
      i.default,
      !0
    ) : o = ps(i.from || r) : o = ps(i), /* @__PURE__ */ hn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[r] = o;
  }
}
function lp(e, t, n) {
  xr(
    st(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mm(e, t, n, r) {
  let i = r.includes(".") ? vm(n, r) : () => n[r];
  if (qt(e)) {
    const o = t[e];
    dt(o) && Mi(i, o);
  } else if (dt(e))
    Mi(i, e.bind(n));
  else if (Nt(e))
    if (st(e))
      e.forEach((o) => Mm(o, t, n, r));
    else {
      const o = dt(e.handler) ? e.handler.bind(n) : t[e.handler];
      dt(o) && Mi(i, o, e);
    }
}
function Pm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (d) => Ts(l, d, a, !0)
  ), Ts(l, t, a)), Nt(t) && o.set(t, l), l;
}
function Ts(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Ts(e, o, n, !0), i && i.forEach(
    (a) => Ts(e, a, n, !0)
  );
  for (const a in t)
    if (!(r && a === "expose")) {
      const s = Lv[a] || n && n[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const Lv = {
  data: cp,
  props: up,
  emits: up,
  // objects
  methods: Yo,
  computed: Yo,
  // lifecycle
  beforeCreate: vn,
  created: vn,
  beforeMount: vn,
  mounted: vn,
  beforeUpdate: vn,
  updated: vn,
  beforeDestroy: vn,
  beforeUnmount: vn,
  destroyed: vn,
  unmounted: vn,
  activated: vn,
  deactivated: vn,
  errorCaptured: vn,
  serverPrefetch: vn,
  // assets
  components: Yo,
  directives: Yo,
  // watch
  watch: Rv,
  // provide / inject
  provide: cp,
  inject: Vv
};
function cp(e, t) {
  return t ? e ? function() {
    return gn(
      dt(e) ? e.call(this, this) : e,
      dt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vv(e, t) {
  return Yo(Xc(e), Xc(t));
}
function Xc(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function vn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Yo(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function up(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    sp(e),
    sp(t ?? {})
  ) : t;
}
function Rv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = gn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = vn(e[r], t[r]);
  return n;
}
function Nm() {
  return {
    app: null,
    config: {
      isNativeTag: jh,
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
let $v = 0;
function zv(e, t) {
  return function(r, i = null) {
    dt(r) || (r = gn({}, r)), i != null && !Nt(i) && (i = null);
    const o = Nm(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const d = o.app = {
      _uid: $v++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: b_,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...c) {
        return a.has(u) || (u && dt(u.install) ? (a.add(u), u.install(d, ...c)) : dt(u) && (a.add(u), u(d, ...c))), d;
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), d;
      },
      component(u, c) {
        return c ? (o.components[u] = c, d) : o.components[u];
      },
      directive(u, c) {
        return c ? (o.directives[u] = c, d) : o.directives[u];
      },
      mount(u, c, p) {
        if (!l) {
          const g = d._ceVNode || Qe(r, i);
          return g.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(g, u, p), l = !0, d._container = u, u.__vue_app__ = d, wl(g.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (xr(
          s,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, c) {
        return o.provides[u] = c, d;
      },
      runWithContext(u) {
        const c = uo;
        uo = d;
        try {
          return u();
        } finally {
          uo = c;
        }
      }
    };
    return d;
  };
}
let uo = null;
const jv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Sn(t)}Modifiers`] || e[`${Ei(t)}Modifiers`];
function Hv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ct;
  let i = n;
  const o = t.startsWith("update:"), a = o && jv(r, t.slice(7));
  a && (a.trim && (i = n.map((u) => qt(u) ? u.trim() : u)), a.number && (i = n.map(ju)));
  let s, l = r[s = rc(t)] || // also try camelCase event handler (#2249)
  r[s = rc(Sn(t))];
  !l && o && (l = r[s = rc(Ei(t))]), l && xr(
    l,
    e,
    6,
    i
  );
  const d = r[s + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, xr(
      d,
      e,
      6,
      i
    );
  }
}
const Gv = /* @__PURE__ */ new WeakMap();
function Am(e, t, n = !1) {
  const r = n ? Gv : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!dt(e)) {
    const l = (d) => {
      const u = Am(d, t, !0);
      u && (s = !0, gn(a, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Nt(e) && r.set(e, null), null) : (st(o) ? o.forEach((l) => a[l] = null) : gn(a, o), Nt(e) && r.set(e, a), a);
}
function _l(e, t) {
  return !e || !ul(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), St(e, t[0].toLowerCase() + t.slice(1)) || St(e, Ei(t)) || St(e, t));
}
function dp(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: d,
    renderCache: u,
    props: c,
    data: p,
    setupState: g,
    ctx: y,
    inheritAttrs: _
  } = e, b = Os(e);
  let C, U;
  try {
    if (n.shapeFlag & 4) {
      const T = i || r, x = T;
      C = mr(
        d.call(
          x,
          T,
          u,
          c,
          g,
          p,
          y
        )
      ), U = s;
    } else {
      const T = t;
      C = mr(
        T.length > 1 ? T(
          c,
          { attrs: s, slots: a, emit: l }
        ) : T(
          c,
          null
        )
      ), U = t.props ? s : Wv(s);
    }
  } catch (T) {
    ca.length = 0, gl(T, e, 1), C = Qe(Xr);
  }
  let D = C;
  if (U && _ !== !1) {
    const T = Object.keys(U), { shapeFlag: x } = D;
    T.length && x & 7 && (o && T.some(dl) && (U = Kv(
      U,
      o
    )), D = vo(D, U, !1, !0));
  }
  return n.dirs && (D = vo(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && Ju(D, n.transition), C = D, Os(b), C;
}
const Wv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ul(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kv = (e, t) => {
  const n = {};
  for (const r in e)
    (!dl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Bv(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? fp(r, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const p = u[c];
        if (Cm(a, r, p) && !_l(d, p))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? fp(r, a, d) : !0 : !!a;
  return !1;
}
function fp(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (Cm(t, e, o) && !_l(n, o))
      return !0;
  }
  return !1;
}
function Cm(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && Nt(r) && Nt(i) ? !Hu(r, i) : r !== i;
}
function Uv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Im = {}, Em = () => Object.create(Im), Om = (e) => Object.getPrototypeOf(e) === Im;
function Yv(e, t, n, r = !1) {
  const i = {}, o = Em();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fm(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ nv(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function qv(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ _t(i), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let p = u[c];
        if (_l(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (l)
          if (St(o, p))
            g !== o[p] && (o[p] = g, d = !0);
          else {
            const y = Sn(p);
            i[y] = Jc(
              l,
              s,
              y,
              g,
              e,
              !1
            );
          }
        else
          g !== o[p] && (o[p] = g, d = !0);
      }
    }
  } else {
    Fm(e, t, i, o) && (d = !0);
    let u;
    for (const c in s)
      (!t || // for camelCase
      !St(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ei(c)) === c || !St(t, u))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[c] = Jc(
        l,
        s,
        c,
        void 0,
        e,
        !0
      )) : delete i[c]);
    if (o !== s)
      for (const c in o)
        (!t || !St(t, c)) && (delete o[c], d = !0);
  }
  d && Fr(e.attrs, "set", "");
}
function Fm(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (ra(l))
        continue;
      const d = t[l];
      let u;
      i && St(i, u = Sn(l)) ? !o || !o.includes(u) ? n[u] = d : (s || (s = {}))[u] = d : _l(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ _t(n), d = s || Ct;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      n[c] = Jc(
        i,
        l,
        c,
        d[c],
        e,
        !St(d, c)
      );
    }
  }
  return a;
}
function Jc(e, t, n, r, i, o) {
  const a = e[n];
  if (a != null) {
    const s = St(a, "default");
    if (s && r === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && dt(l)) {
        const { propsDefaults: d } = i;
        if (n in d)
          r = d[n];
        else {
          const u = Fa(i);
          r = d[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
      i.ce && i.ce._setProp(n, r);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? r = !1 : a[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ei(n)) && (r = !0));
  }
  return r;
}
const Xv = /* @__PURE__ */ new WeakMap();
function Tm(e, t, n = !1) {
  const r = n ? Xv : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!dt(e)) {
    const u = (c) => {
      l = !0;
      const [p, g] = Tm(c, t, !0);
      gn(a, p), g && s.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Nt(e) && r.set(e, so), so;
  if (st(o))
    for (let u = 0; u < o.length; u++) {
      const c = Sn(o[u]);
      pp(c) && (a[c] = Ct);
    }
  else if (o)
    for (const u in o) {
      const c = Sn(u);
      if (pp(c)) {
        const p = o[u], g = a[c] = st(p) || dt(p) ? { type: p } : gn({}, p), y = g.type;
        let _ = !1, b = !0;
        if (st(y))
          for (let C = 0; C < y.length; ++C) {
            const U = y[C], D = dt(U) && U.name;
            if (D === "Boolean") {
              _ = !0;
              break;
            } else D === "String" && (b = !1);
          }
        else
          _ = dt(y) && y.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = _, g[
          1
          /* shouldCastTrue */
        ] = b, (_ || St(g, "default")) && s.push(c);
      }
    }
  const d = [a, s];
  return Nt(e) && r.set(e, d), d;
}
function pp(e) {
  return e[0] !== "$" && !ra(e);
}
const Zu = (e) => e === "_" || e === "_ctx" || e === "$stable", Qu = (e) => st(e) ? e.map(mr) : [mr(e)], Jv = (e, t, n) => {
  if (t._n)
    return t;
  const r = ym((...i) => Qu(t(...i)), n);
  return r._c = !1, r;
}, Dm = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Zu(i)) continue;
    const o = e[i];
    if (dt(o))
      t[i] = Jv(i, o, r);
    else if (o != null) {
      const a = Qu(o);
      t[i] = () => a;
    }
  }
}, Lm = (e, t) => {
  const n = Qu(t);
  e.slots.default = () => n;
}, Vm = (e, t, n) => {
  for (const r in t)
    (n || !Zu(r)) && (e[r] = t[r]);
}, Zv = (e, t, n) => {
  const r = e.slots = Em();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Vm(r, t, n), n && Bh(r, "_", i, !0)) : Dm(t, r);
  } else t && Lm(e, t);
}, Qv = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, a = Ct;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : Vm(i, t, n) : (o = !t.$stable, Dm(t, i)), a = t;
  } else t && (Lm(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Zu(s) && a[s] == null && delete i[s];
}, kn = i_;
function e_(e) {
  return t_(e);
}
function t_(e, t) {
  const n = hl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: p,
    setScopeId: g = br,
    insertStaticContent: y
  } = e, _ = (w, N, J, ue = null, P = null, F = null, q = void 0, k = null, A = !!N.dynamicChildren) => {
    if (w === N)
      return;
    w && !jo(w, N) && (ue = pe(w), we(w, P, F, !0), w = null), N.patchFlag === -2 && (A = !1, N.dynamicChildren = null);
    const { type: I, ref: K, shapeFlag: X } = N;
    switch (I) {
      case Sl:
        b(w, N, J, ue);
        break;
      case Xr:
        C(w, N, J, ue);
        break;
      case uc:
        w == null && U(N, J, ue, q);
        break;
      case ot:
        Y(
          w,
          N,
          J,
          ue,
          P,
          F,
          q,
          k,
          A
        );
        break;
      default:
        X & 1 ? x(
          w,
          N,
          J,
          ue,
          P,
          F,
          q,
          k,
          A
        ) : X & 6 ? le(
          w,
          N,
          J,
          ue,
          P,
          F,
          q,
          k,
          A
        ) : (X & 64 || X & 128) && I.process(
          w,
          N,
          J,
          ue,
          P,
          F,
          q,
          k,
          A,
          ie
        );
    }
    K != null && P ? aa(K, w && w.ref, F, N || w, !N) : K == null && w && w.ref != null && aa(w.ref, null, F, w, !0);
  }, b = (w, N, J, ue) => {
    if (w == null)
      r(
        N.el = s(N.children),
        J,
        ue
      );
    else {
      const P = N.el = w.el;
      N.children !== w.children && d(P, N.children);
    }
  }, C = (w, N, J, ue) => {
    w == null ? r(
      N.el = l(N.children || ""),
      J,
      ue
    ) : N.el = w.el;
  }, U = (w, N, J, ue) => {
    [w.el, w.anchor] = y(
      w.children,
      N,
      J,
      ue,
      w.el,
      w.anchor
    );
  }, D = ({ el: w, anchor: N }, J, ue) => {
    let P;
    for (; w && w !== N; )
      P = p(w), r(w, J, ue), w = P;
    r(N, J, ue);
  }, T = ({ el: w, anchor: N }) => {
    let J;
    for (; w && w !== N; )
      J = p(w), i(w), w = J;
    i(N);
  }, x = (w, N, J, ue, P, F, q, k, A) => {
    if (N.type === "svg" ? q = "svg" : N.type === "math" && (q = "mathml"), w == null)
      H(
        N,
        J,
        ue,
        P,
        F,
        q,
        k,
        A
      );
    else {
      const I = w.el && w.el._isVueCE ? w.el : null;
      try {
        I && I._beginPatch(), re(
          w,
          N,
          P,
          F,
          q,
          k,
          A
        );
      } finally {
        I && I._endPatch();
      }
    }
  }, H = (w, N, J, ue, P, F, q, k) => {
    let A, I;
    const { props: K, shapeFlag: X, transition: Q, dirs: R } = w;
    if (A = w.el = a(
      w.type,
      F,
      K && K.is,
      K
    ), X & 8 ? u(A, w.children) : X & 16 && ee(
      w.children,
      A,
      null,
      ue,
      P,
      cc(w, F),
      q,
      k
    ), R && ui(w, null, ue, "created"), z(A, w, w.scopeId, q, ue), K) {
      for (const Me in K)
        Me !== "value" && !ra(Me) && o(A, Me, null, K[Me], F, ue);
      "value" in K && o(A, "value", null, K.value, F), (I = K.onVnodeBeforeMount) && ur(I, ue, w);
    }
    R && ui(w, null, ue, "beforeMount");
    const te = n_(P, Q);
    te && Q.beforeEnter(A), r(A, N, J), ((I = K && K.onVnodeMounted) || te || R) && kn(() => {
      try {
        I && ur(I, ue, w), te && Q.enter(A), R && ui(w, null, ue, "mounted");
      } finally {
      }
    }, P);
  }, z = (w, N, J, ue, P) => {
    if (J && g(w, J), ue)
      for (let F = 0; F < ue.length; F++)
        g(w, ue[F]);
    if (P) {
      let F = P.subTree;
      if (N === F || jm(F.type) && (F.ssContent === N || F.ssFallback === N)) {
        const q = P.vnode;
        z(
          w,
          q,
          q.scopeId,
          q.slotScopeIds,
          P.parent
        );
      }
    }
  }, ee = (w, N, J, ue, P, F, q, k, A = 0) => {
    for (let I = A; I < w.length; I++) {
      const K = w[I] = k ? Er(w[I]) : mr(w[I]);
      _(
        null,
        K,
        N,
        J,
        ue,
        P,
        F,
        q,
        k
      );
    }
  }, re = (w, N, J, ue, P, F, q) => {
    const k = N.el = w.el;
    let { patchFlag: A, dynamicChildren: I, dirs: K } = N;
    A |= w.patchFlag & 16;
    const X = w.props || Ct, Q = N.props || Ct;
    let R;
    if (J && di(J, !1), (R = Q.onVnodeBeforeUpdate) && ur(R, J, N, w), K && ui(N, w, J, "beforeUpdate"), J && di(J, !0), (X.innerHTML && Q.innerHTML == null || X.textContent && Q.textContent == null) && u(k, ""), I ? B(
      w.dynamicChildren,
      I,
      k,
      J,
      ue,
      cc(N, P),
      F
    ) : q || E(
      w,
      N,
      k,
      null,
      J,
      ue,
      cc(N, P),
      F,
      !1
    ), A > 0) {
      if (A & 16)
        G(k, X, Q, J, P);
      else if (A & 2 && X.class !== Q.class && o(k, "class", null, Q.class, P), A & 4 && o(k, "style", X.style, Q.style, P), A & 8) {
        const te = N.dynamicProps;
        for (let Me = 0; Me < te.length; Me++) {
          const Te = te[Me], se = X[Te], be = Q[Te];
          (be !== se || Te === "value") && o(k, Te, se, be, P, J);
        }
      }
      A & 1 && w.children !== N.children && u(k, N.children);
    } else !q && I == null && G(k, X, Q, J, P);
    ((R = Q.onVnodeUpdated) || K) && kn(() => {
      R && ur(R, J, N, w), K && ui(N, w, J, "updated");
    }, ue);
  }, B = (w, N, J, ue, P, F, q) => {
    for (let k = 0; k < N.length; k++) {
      const A = w[k], I = N[k], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jo(A, I) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 198) ? c(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          J
        )
      );
      _(
        A,
        I,
        K,
        null,
        ue,
        P,
        F,
        q,
        !0
      );
    }
  }, G = (w, N, J, ue, P) => {
    if (N !== J) {
      if (N !== Ct)
        for (const F in N)
          !ra(F) && !(F in J) && o(
            w,
            F,
            N[F],
            null,
            P,
            ue
          );
      for (const F in J) {
        if (ra(F)) continue;
        const q = J[F], k = N[F];
        q !== k && F !== "value" && o(w, F, k, q, P, ue);
      }
      "value" in J && o(w, "value", N.value, J.value, P);
    }
  }, Y = (w, N, J, ue, P, F, q, k, A) => {
    const I = N.el = w ? w.el : s(""), K = N.anchor = w ? w.anchor : s("");
    let { patchFlag: X, dynamicChildren: Q, slotScopeIds: R } = N;
    R && (k = k ? k.concat(R) : R), w == null ? (r(I, J, ue), r(K, J, ue), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      N.children || [],
      J,
      K,
      P,
      F,
      q,
      k,
      A
    )) : X > 0 && X & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === Q.length ? (B(
      w.dynamicChildren,
      Q,
      J,
      P,
      F,
      q,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (N.key != null || P && N === P.subTree) && Rm(
      w,
      N,
      !0
      /* shallow */
    )) : E(
      w,
      N,
      J,
      K,
      P,
      F,
      q,
      k,
      A
    );
  }, le = (w, N, J, ue, P, F, q, k, A) => {
    N.slotScopeIds = k, w == null ? N.shapeFlag & 512 ? P.ctx.activate(
      N,
      J,
      ue,
      q,
      A
    ) : ve(
      N,
      J,
      ue,
      P,
      F,
      q,
      A
    ) : ge(w, N, A);
  }, ve = (w, N, J, ue, P, F, q) => {
    const k = w.component = u_(
      w,
      ue,
      P
    );
    if (Sm(w) && (k.ctx.renderer = ie), f_(k, !1, q), k.asyncDep) {
      if (P && P.registerDep(k, he, q), !w.el) {
        const A = k.subTree = Qe(Xr);
        C(null, A, N, J), w.placeholder = A.el;
      }
    } else
      he(
        k,
        w,
        N,
        J,
        P,
        F,
        q
      );
  }, ge = (w, N, J) => {
    const ue = N.component = w.component;
    if (Bv(w, N, J))
      if (ue.asyncDep && !ue.asyncResolved) {
        Z(ue, N, J);
        return;
      } else
        ue.next = N, ue.update();
    else
      N.el = w.el, ue.vnode = N;
  }, he = (w, N, J, ue, P, F, q) => {
    const k = () => {
      if (w.isMounted) {
        let { next: X, bu: Q, u: R, parent: te, vnode: Me } = w;
        {
          const m = $m(w);
          if (m) {
            X && (X.el = Me.el, Z(w, X, q)), m.asyncDep.then(() => {
              kn(() => {
                w.isUnmounted || I();
              }, P);
            });
            return;
          }
        }
        let Te = X, se;
        di(w, !1), X ? (X.el = Me.el, Z(w, X, q)) : X = Me, Q && fs(Q), (se = X.props && X.props.onVnodeBeforeUpdate) && ur(se, te, X, Me), di(w, !0);
        const be = dp(w), Se = w.subTree;
        w.subTree = be, _(
          Se,
          be,
          // parent may have changed if it's in a teleport
          c(Se.el),
          // anchor may have changed if it's in a fragment
          pe(Se),
          w,
          P,
          F
        ), X.el = be.el, Te === null && Uv(w, be.el), R && kn(R, P), (se = X.props && X.props.onVnodeUpdated) && kn(
          () => ur(se, te, X, Me),
          P
        );
      } else {
        let X;
        const { el: Q, props: R } = N, { bm: te, m: Me, parent: Te, root: se, type: be } = w, Se = sa(N);
        di(w, !1), te && fs(te), !Se && (X = R && R.onVnodeBeforeMount) && ur(X, Te, N), di(w, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            be,
            w.parent ? w.parent.type : void 0
          );
          const m = w.subTree = dp(w);
          _(
            null,
            m,
            J,
            ue,
            w,
            P,
            F
          ), N.el = m.el;
        }
        if (Me && kn(Me, P), !Se && (X = R && R.onVnodeMounted)) {
          const m = N;
          kn(
            () => ur(X, Te, m),
            P
          );
        }
        (N.shapeFlag & 256 || Te && sa(Te.vnode) && Te.vnode.shapeFlag & 256) && w.a && kn(w.a, P), w.isMounted = !0, N = J = ue = null;
      }
    };
    w.scope.on();
    const A = w.effect = new Xh(k);
    w.scope.off();
    const I = w.update = A.run.bind(A), K = w.job = A.runIfDirty.bind(A);
    K.i = w, K.id = w.uid, A.scheduler = () => Xu(K), di(w, !0), I();
  }, Z = (w, N, J) => {
    N.component = w;
    const ue = w.vnode.props;
    w.vnode = N, w.next = null, qv(w, N.props, ue, J), Qv(w, N.children, J), $r(), rp(w), zr();
  }, E = (w, N, J, ue, P, F, q, k, A = !1) => {
    const I = w && w.children, K = w ? w.shapeFlag : 0, X = N.children, { patchFlag: Q, shapeFlag: R } = N;
    if (Q > 0) {
      if (Q & 128) {
        de(
          I,
          X,
          J,
          ue,
          P,
          F,
          q,
          k,
          A
        );
        return;
      } else if (Q & 256) {
        W(
          I,
          X,
          J,
          ue,
          P,
          F,
          q,
          k,
          A
        );
        return;
      }
    }
    R & 8 ? (K & 16 && ae(I, P, F), X !== I && u(J, X)) : K & 16 ? R & 16 ? de(
      I,
      X,
      J,
      ue,
      P,
      F,
      q,
      k,
      A
    ) : ae(I, P, F, !0) : (K & 8 && u(J, ""), R & 16 && ee(
      X,
      J,
      ue,
      P,
      F,
      q,
      k,
      A
    ));
  }, W = (w, N, J, ue, P, F, q, k, A) => {
    w = w || so, N = N || so;
    const I = w.length, K = N.length, X = Math.min(I, K);
    let Q;
    for (Q = 0; Q < X; Q++) {
      const R = N[Q] = A ? Er(N[Q]) : mr(N[Q]);
      _(
        w[Q],
        R,
        J,
        null,
        P,
        F,
        q,
        k,
        A
      );
    }
    I > K ? ae(
      w,
      P,
      F,
      !0,
      !1,
      X
    ) : ee(
      N,
      J,
      ue,
      P,
      F,
      q,
      k,
      A,
      X
    );
  }, de = (w, N, J, ue, P, F, q, k, A) => {
    let I = 0;
    const K = N.length;
    let X = w.length - 1, Q = K - 1;
    for (; I <= X && I <= Q; ) {
      const R = w[I], te = N[I] = A ? Er(N[I]) : mr(N[I]);
      if (jo(R, te))
        _(
          R,
          te,
          J,
          null,
          P,
          F,
          q,
          k,
          A
        );
      else
        break;
      I++;
    }
    for (; I <= X && I <= Q; ) {
      const R = w[X], te = N[Q] = A ? Er(N[Q]) : mr(N[Q]);
      if (jo(R, te))
        _(
          R,
          te,
          J,
          null,
          P,
          F,
          q,
          k,
          A
        );
      else
        break;
      X--, Q--;
    }
    if (I > X) {
      if (I <= Q) {
        const R = Q + 1, te = R < K ? N[R].el : ue;
        for (; I <= Q; )
          _(
            null,
            N[I] = A ? Er(N[I]) : mr(N[I]),
            J,
            te,
            P,
            F,
            q,
            k,
            A
          ), I++;
      }
    } else if (I > Q)
      for (; I <= X; )
        we(w[I], P, F, !0), I++;
    else {
      const R = I, te = I, Me = /* @__PURE__ */ new Map();
      for (I = te; I <= Q; I++) {
        const S = N[I] = A ? Er(N[I]) : mr(N[I]);
        S.key != null && Me.set(S.key, I);
      }
      let Te, se = 0;
      const be = Q - te + 1;
      let Se = !1, m = 0;
      const f = new Array(be);
      for (I = 0; I < be; I++) f[I] = 0;
      for (I = R; I <= X; I++) {
        const S = w[I];
        if (se >= be) {
          we(S, P, F, !0);
          continue;
        }
        let v;
        if (S.key != null)
          v = Me.get(S.key);
        else
          for (Te = te; Te <= Q; Te++)
            if (f[Te - te] === 0 && jo(S, N[Te])) {
              v = Te;
              break;
            }
        v === void 0 ? we(S, P, F, !0) : (f[v - te] = I + 1, v >= m ? m = v : Se = !0, _(
          S,
          N[v],
          J,
          null,
          P,
          F,
          q,
          k,
          A
        ), se++);
      }
      const $ = Se ? r_(f) : so;
      for (Te = $.length - 1, I = be - 1; I >= 0; I--) {
        const S = te + I, v = N[S], j = N[S + 1], ce = S + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          j.el || zm(j)
        ) : ue;
        f[I] === 0 ? _(
          null,
          v,
          J,
          ce,
          P,
          F,
          q,
          k,
          A
        ) : Se && (Te < 0 || I !== $[Te] ? fe(v, J, ce, 2) : Te--);
      }
    }
  }, fe = (w, N, J, ue, P = null) => {
    const { el: F, type: q, transition: k, children: A, shapeFlag: I } = w;
    if (I & 6) {
      fe(w.component.subTree, N, J, ue);
      return;
    }
    if (I & 128) {
      w.suspense.move(N, J, ue);
      return;
    }
    if (I & 64) {
      q.move(w, N, J, ie);
      return;
    }
    if (q === ot) {
      r(F, N, J);
      for (let X = 0; X < A.length; X++)
        fe(A[X], N, J, ue);
      r(w.anchor, N, J);
      return;
    }
    if (q === uc) {
      D(w, N, J);
      return;
    }
    if (ue !== 2 && I & 1 && k)
      if (ue === 0)
        k.beforeEnter(F), r(F, N, J), kn(() => k.enter(F), P);
      else {
        const { leave: X, delayLeave: Q, afterLeave: R } = k, te = () => {
          w.ctx.isUnmounted ? i(F) : r(F, N, J);
        }, Me = () => {
          F._isLeaving && F[vv](
            !0
            /* cancelled */
          ), X(F, () => {
            te(), R && R();
          });
        };
        Q ? Q(F, te, Me) : Me();
      }
    else
      r(F, N, J);
  }, we = (w, N, J, ue = !1, P = !1) => {
    const {
      type: F,
      props: q,
      ref: k,
      children: A,
      dynamicChildren: I,
      shapeFlag: K,
      patchFlag: X,
      dirs: Q,
      cacheIndex: R,
      memo: te
    } = w;
    if (X === -2 && (P = !1), k != null && ($r(), aa(k, null, J, w, !0), zr()), R != null && (N.renderCache[R] = void 0), K & 256) {
      N.ctx.deactivate(w);
      return;
    }
    const Me = K & 1 && Q, Te = !sa(w);
    let se;
    if (Te && (se = q && q.onVnodeBeforeUnmount) && ur(se, N, w), K & 6)
      V(w.component, J, ue);
    else {
      if (K & 128) {
        w.suspense.unmount(J, ue);
        return;
      }
      Me && ui(w, null, N, "beforeUnmount"), K & 64 ? w.type.remove(
        w,
        N,
        J,
        ie,
        ue
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ot || X > 0 && X & 64) ? ae(
        I,
        N,
        J,
        !1,
        !0
      ) : (F === ot && X & 384 || !P && K & 16) && ae(A, N, J), ue && $e(w);
    }
    const be = te != null && R == null;
    (Te && (se = q && q.onVnodeUnmounted) || Me || be) && kn(() => {
      se && ur(se, N, w), Me && ui(w, null, N, "unmounted"), be && (w.el = null);
    }, J);
  }, $e = (w) => {
    const { type: N, el: J, anchor: ue, transition: P } = w;
    if (N === ot) {
      oe(J, ue);
      return;
    }
    if (N === uc) {
      T(w);
      return;
    }
    const F = () => {
      i(J), P && !P.persisted && P.afterLeave && P.afterLeave();
    };
    if (w.shapeFlag & 1 && P && !P.persisted) {
      const { leave: q, delayLeave: k } = P, A = () => q(J, F);
      k ? k(w.el, F, A) : A();
    } else
      F();
  }, oe = (w, N) => {
    let J;
    for (; w !== N; )
      J = p(w), i(w), w = J;
    i(N);
  }, V = (w, N, J) => {
    const { bum: ue, scope: P, job: F, subTree: q, um: k, m: A, a: I } = w;
    hp(A), hp(I), ue && fs(ue), P.stop(), F && (F.flags |= 8, we(q, w, N, J)), k && kn(k, N), kn(() => {
      w.isUnmounted = !0;
    }, N);
  }, ae = (w, N, J, ue = !1, P = !1, F = 0) => {
    for (let q = F; q < w.length; q++)
      we(w[q], N, J, ue, P);
  }, pe = (w) => {
    if (w.shapeFlag & 6)
      return pe(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const N = p(w.anchor || w.el), J = N && N[yv];
    return J ? p(J) : N;
  };
  let xe = !1;
  const Oe = (w, N, J) => {
    let ue;
    w == null ? N._vnode && (we(N._vnode, null, null, !0), ue = N._vnode.component) : _(
      N._vnode || null,
      w,
      N,
      null,
      null,
      null,
      J
    ), N._vnode = w, xe || (xe = !0, rp(ue), hm(), xe = !1);
  }, ie = {
    p: _,
    um: we,
    m: fe,
    r: $e,
    mt: ve,
    mc: ee,
    pc: E,
    pbc: B,
    n: pe,
    o: e
  };
  return {
    render: Oe,
    hydrate: void 0,
    createApp: zv(Oe)
  };
}
function cc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function di({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function n_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rm(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (st(r) && st(i))
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Er(i[o]), s.el = a.el), !n && s.patchFlag !== -2 && Rm(a, s)), s.type === Sl && (s.patchFlag === -1 && (s = i[o] = Er(s)), s.el = a.el), s.type === Xr && !s.el && (s.el = a.el);
    }
}
function r_(e) {
  const t = e.slice(), n = [0];
  let r, i, o, a, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const d = e[r];
    if (d !== 0) {
      if (i = n[n.length - 1], e[i] < d) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, a = n.length - 1; o < a; )
        s = o + a >> 1, e[n[s]] < d ? o = s + 1 : a = s;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; )
    n[o] = a, a = t[a];
  return n;
}
function $m(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $m(t);
}
function hp(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function zm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? zm(t.subTree) : null;
}
const jm = (e) => e.__isSuspense;
function i_(e, t) {
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : fv(e);
}
const ot = /* @__PURE__ */ Symbol.for("v-fgt"), Sl = /* @__PURE__ */ Symbol.for("v-txt"), Xr = /* @__PURE__ */ Symbol.for("v-cmt"), uc = /* @__PURE__ */ Symbol.for("v-stc"), ca = [];
let Ln = null;
function Re(e = !1) {
  ca.push(Ln = e ? null : []);
}
function o_() {
  ca.pop(), Ln = ca[ca.length - 1] || null;
}
let ya = 1;
function mp(e, t = !1) {
  ya += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function Hm(e) {
  return e.dynamicChildren = ya > 0 ? Ln || so : null, o_(), ya > 0 && Ln && Ln.push(e), e;
}
function He(e, t, n, r, i, o) {
  return Hm(
    Ne(
      e,
      t,
      n,
      r,
      i,
      o,
      !0
    )
  );
}
function Kn(e, t, n, r, i) {
  return Hm(
    Qe(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function Gm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wm = ({ key: e }) => e ?? null, hs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? qt(e) || /* @__PURE__ */ hn(e) || dt(e) ? { i: Dn, r: e, k: t, f: !!n } : e : null);
function Ne(e, t = null, n = null, r = 0, i = null, o = e === ot ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wm(t),
    ref: t && hs(t),
    scopeId: gm,
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
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Dn
  };
  return s ? (ed(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= qt(n) ? 8 : 16), ya > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ln.push(l), l;
}
const Qe = a_;
function a_(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === km) && (e = Xr), Gm(e)) {
    const s = vo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ed(s, n), ya > 0 && !o && Ln && (s.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = s : Ln.push(s)), s.patchFlag = -2, s;
  }
  if (y_(e) && (e = e.__vccOpts), t) {
    t = s_(t);
    let { class: s, style: l } = t;
    s && !qt(s) && (t.class = pt(s)), Nt(l) && (/* @__PURE__ */ qu(l) && !st(l) && (l = gn({}, l)), t.style = Pt(l));
  }
  const a = qt(e) ? 1 : jm(e) ? 128 : bv(e) ? 64 : Nt(e) ? 4 : dt(e) ? 2 : 0;
  return Ne(
    e,
    t,
    n,
    r,
    i,
    a,
    o,
    !0
  );
}
function s_(e) {
  return e ? /* @__PURE__ */ qu(e) || Om(e) ? gn({}, e) : e : null;
}
function vo(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, d = t ? Or(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Wm(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? st(o) ? o.concat(hs(t)) : [o, hs(t)] : hs(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ot ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && vo(e.ssContent),
    ssFallback: e.ssFallback && vo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Ju(
    u,
    l.clone(u)
  ), u;
}
function qo(e = " ", t = 0) {
  return Qe(Sl, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Re(), Kn(Xr, null, e)) : Qe(Xr, null, e);
}
function mr(e) {
  return e == null || typeof e == "boolean" ? Qe(Xr) : st(e) ? Qe(
    ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gm(e) ? Er(e) : Qe(Sl, null, String(e));
}
function Er(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vo(e);
}
function ed(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (st(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ed(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Om(t) ? t._ctx = Dn : i === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else dt(t) ? (t = { default: t, _ctx: Dn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [qo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Or(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = pt([t.class, r.class]));
      else if (i === "style")
        t.style = Pt([t.style, r.style]);
      else if (ul(i)) {
        const o = t[i], a = r[i];
        a && o !== a && !(st(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !dl(i) && (t[i] = a);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function ur(e, t, n, r = null) {
  xr(e, t, 7, [
    n,
    r
  ]);
}
const l_ = Nm();
let c_ = 0;
function u_(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || l_, o = {
    uid: c_++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new L1(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Tm(r, i),
    emitsOptions: Am(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ct,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ct,
    data: Ct,
    props: Ct,
    attrs: Ct,
    slots: Ct,
    refs: Ct,
    setupState: Ct,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Hv.bind(null, o), e.ce && e.ce(o), o;
}
let dn = null;
const d_ = () => dn || Dn;
let Ds, Zc;
{
  const e = hl(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  Ds = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => dn = n
  ), Zc = t(
    "__VUE_SSR_SETTERS__",
    (n) => ba = n
  );
}
const Fa = (e) => {
  const t = dn;
  return Ds(e), e.scope.on(), () => {
    e.scope.off(), Ds(t);
  };
}, gp = () => {
  dn && dn.scope.off(), Ds(null);
};
function Km(e) {
  return e.vnode.shapeFlag & 4;
}
let ba = !1;
function f_(e, t = !1, n = !1) {
  t && Zc(t);
  const { props: r, children: i } = e.vnode, o = Km(e);
  Yv(e, r, o, t), Zv(e, i, n || t);
  const a = o ? p_(e, t) : void 0;
  return t && Zc(!1), a;
}
function p_(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fv);
  const { setup: r } = n;
  if (r) {
    $r();
    const i = e.setupContext = r.length > 1 ? m_(e) : null, o = Fa(e), a = Ea(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = Gh(a);
    if (zr(), o(), (s || e.sp) && !sa(e) && _m(e), s) {
      if (a.then(gp, gp), t)
        return a.then((l) => {
          yp(e, l);
        }).catch((l) => {
          gl(l, e, 0);
        });
      e.asyncDep = a;
    } else
      yp(e, a);
  } else
    Bm(e);
}
function yp(e, t, n) {
  dt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Nt(t) && (e.setupState = dm(t)), Bm(e);
}
function Bm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || br);
  {
    const i = Fa(e);
    $r();
    try {
      Tv(e);
    } finally {
      zr(), i();
    }
  }
}
const h_ = {
  get(e, t) {
    return un(e, "get", ""), e[t];
  }
};
function m_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, h_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dm(rv(e.exposed)), {
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
function g_(e, t = !0) {
  return dt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function y_(e) {
  return dt(e) && "__vccOpts" in e;
}
const ft = (e, t) => /* @__PURE__ */ sv(e, t, ba), b_ = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qc;
const bp = typeof window < "u" && window.trustedTypes;
if (bp)
  try {
    Qc = /* @__PURE__ */ bp.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Um = Qc ? (e) => Qc.createHTML(e) : (e) => e, v_ = "http://www.w3.org/2000/svg", __ = "http://www.w3.org/1998/Math/MathML", Cr = typeof document < "u" ? document : null, vp = Cr && /* @__PURE__ */ Cr.createElement("template"), S_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Cr.createElementNS(v_, e) : t === "mathml" ? Cr.createElementNS(__, e) : n ? Cr.createElement(e, { is: n }) : Cr.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Cr.createTextNode(e),
  createComment: (e) => Cr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Cr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const a = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      vp.innerHTML = Um(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const s = vp.content;
      if (r === "svg" || r === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, w_ = /* @__PURE__ */ Symbol("_vtc");
function x_(e, t, n) {
  const r = e[w_];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ls = /* @__PURE__ */ Symbol("_vod"), Ym = /* @__PURE__ */ Symbol("_vsh"), Ai = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ls] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ho(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ho(e, !0), r.enter(e)) : r.leave(e, () => {
      Ho(e, !1);
    }) : Ho(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ho(e, t);
  }
};
function Ho(e, t) {
  e.style.display = t ? e[Ls] : "none", e[Ym] = !t;
}
const k_ = /* @__PURE__ */ Symbol(""), M_ = /(?:^|;)\s*display\s*:/;
function P_(e, t, n) {
  const r = e.style, i = qt(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (qt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          n[s] == null && ms(r, s, "");
        }
      else
        for (const a in t)
          n[a] == null && ms(r, a, "");
    for (const a in n)
      a === "display" && (o = !0), ms(r, a, n[a]);
  } else if (i) {
    if (t !== n) {
      const a = r[k_];
      a && (n += ";" + a), r.cssText = n, o = M_.test(n);
    }
  } else t && e.removeAttribute("style");
  Ls in e && (e[Ls] = o ? r.display : "", e[Ym] && (r.display = "none"));
}
const _p = /\s*!important$/;
function ms(e, t, n) {
  if (st(n))
    n.forEach((r) => ms(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = N_(e, t);
    _p.test(n) ? e.setProperty(
      Ei(r),
      n.replace(_p, ""),
      "important"
    ) : e[r] = n;
  }
}
const Sp = ["Webkit", "Moz", "ms"], dc = {};
function N_(e, t) {
  const n = dc[t];
  if (n)
    return n;
  let r = Sn(t);
  if (r !== "filter" && r in e)
    return dc[t] = r;
  r = pl(r);
  for (let i = 0; i < Sp.length; i++) {
    const o = Sp[i] + r;
    if (o in e)
      return dc[t] = o;
  }
  return t;
}
const wp = "http://www.w3.org/1999/xlink";
function xp(e, t, n, r, i, o = T1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wp, t.slice(6, t.length)) : e.setAttributeNS(wp, t, n) : n == null || o && !Uh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : wr(n) ? String(n) : n
  );
}
function kp(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Um(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = Uh(n) : n == null && s === "string" ? (n = "", a = !0) : s === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Qi(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function A_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Mp = /* @__PURE__ */ Symbol("_vei");
function C_(e, t, n, r, i = null) {
  const o = e[Mp] || (e[Mp] = {}), a = o[t];
  if (r && a)
    a.value = r;
  else {
    const [s, l] = I_(t);
    if (r) {
      const d = o[t] = F_(
        r,
        i
      );
      Qi(e, s, d, l);
    } else a && (A_(e, s, a, l), o[t] = void 0);
  }
}
const Pp = /(?:Once|Passive|Capture)$/;
function I_(e) {
  let t;
  if (Pp.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Pp); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ei(e.slice(2)), t];
}
let fc = 0;
const E_ = /* @__PURE__ */ Promise.resolve(), O_ = () => fc || (E_.then(() => fc = 0), fc = Date.now());
function F_(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xr(
      T_(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = O_(), n;
}
function T_(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const Np = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, D_ = (e, t, n, r, i, o) => {
  const a = i === "svg";
  t === "class" ? x_(e, r, a) : t === "style" ? P_(e, n, r) : ul(t) ? dl(t) || C_(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : L_(e, t, r, a)) ? (kp(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xp(e, t, r, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (V_(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !qt(r))) ? kp(e, Sn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), xp(e, t, r, a));
};
function L_(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Np(t) && dt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Np(t) && qt(n) ? !1 : t in e;
}
function V_(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Sn(t);
  return Array.isArray(n) ? n.some((i) => Sn(i) === r) : Object.keys(n).some((i) => Sn(i) === r);
}
const Ap = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => fs(t, n) : t;
};
function R_(e) {
  e.target.composing = !0;
}
function Cp(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pc = /* @__PURE__ */ Symbol("_assign");
function Ip(e, t, n) {
  return t && (e = e.trim()), n && (e = ju(e)), e;
}
const Ep = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[pc] = Ap(i);
    const o = r || i.props && i.props.type === "number";
    Qi(e, t ? "change" : "input", (a) => {
      a.target.composing || e[pc](Ip(e.value, n, o));
    }), (n || o) && Qi(e, "change", () => {
      e.value = Ip(e.value, n, o);
    }), t || (Qi(e, "compositionstart", R_), Qi(e, "compositionend", Cp), Qi(e, "change", Cp));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, a) {
    if (e[pc] = Ap(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? ju(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === l) || (e.value = l);
  }
}, $_ = ["ctrl", "shift", "alt", "meta"], z_ = {
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
  exact: (e, t) => $_.some((n) => e[`${n}Key`] && !t.includes(n))
}, Et = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = z_[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, j_ = /* @__PURE__ */ gn({ patchProp: D_ }, S_);
let Op;
function H_() {
  return Op || (Op = e_(j_));
}
const td = ((...e) => {
  const t = H_().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = W_(r);
    if (!i) return;
    const o = t._component;
    !dt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = n(i, !1, G_(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function G_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function W_(e) {
  return qt(e) ? document.querySelector(e) : e;
}
const K_ = "PanoramaSuite.Debug.Diagnostics", B_ = "PanoramaSuite.Debug.ExportDiagnostics", hc = "pano_suite.diagnostics.v1", Fp = "pano_suite.diagnostics.previous.v1", U_ = 300, Y_ = 2e5, q_ = 100, X_ = 20, J_ = 1e3, Z_ = 2, Ja = 1024 * 1024;
function Kr(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function Q_() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function eS() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Q_,
    document: () => globalThis.document ?? null,
    setInterval: (e, t) => globalThis.setInterval(e, t),
    clearInterval: (e) => globalThis.clearInterval(e),
    addUnload: (e) => {
      var t;
      return (t = globalThis.addEventListener) == null ? void 0 : t.call(globalThis, "beforeunload", e);
    },
    removeUnload: (e) => {
      var t;
      return (t = globalThis.removeEventListener) == null ? void 0 : t.call(globalThis, "beforeunload", e);
    },
    memory: () => {
      var e;
      return ((e = globalThis.performance) == null ? void 0 : e.memory) ?? null;
    },
    observeLongTasks(e) {
      var r;
      const t = globalThis.PerformanceObserver;
      if (!((r = t == null ? void 0 : t.supportedEntryTypes) != null && r.includes("longtask"))) return null;
      const n = new t((i) => e(i.getEntries()));
      return n.observe({ type: "longtask" }), () => n.disconnect();
    },
    userAgent: () => {
      var e;
      return ((e = globalThis.navigator) == null ? void 0 : e.userAgent) ?? "";
    },
    console: globalThis.console,
    WeakRef: globalThis.WeakRef,
    FinalizationRegistry: globalThis.FinalizationRegistry
  };
}
function tS(e = {}) {
  const t = { ...eS(), ...e };
  let n = !1, r = !1, i = null, o = null, a = 0, s = null, l = 0, d = 0;
  const u = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), p = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, y = t.FinalizationRegistry ? new t.FinalizationRegistry((ie) => {
    u.delete(ie), p.collected += 1;
  }) : null, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((ie) => {
    c.delete(ie), g.collected += 1;
  }) : null, b = /* @__PURE__ */ new Set(), C = { created: 0, lost: 0, restored: 0, disposed: 0 }, U = [], D = /* @__PURE__ */ new Map();
  let T = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), H = { count: 0, maxMs: 0 };
  const z = [];
  function ee(ie, Pe, w = void 0) {
    U.push(w === void 0 ? { t: t.clock(), type: ie, label: Pe } : { t: t.clock(), type: ie, label: Pe, detail: w }), U.length > q_ && U.shift();
  }
  function re(ie, Pe, w, N, J) {
    if (!n || !N || !t.WeakRef) return N;
    const ue = { ref: new t.WeakRef(N), label: J };
    return ie.add(ue), Pe == null || Pe.register(N, ue), w.created += 1, N;
  }
  function B(ie, Pe = "") {
    return re(u, y, p, ie, Pe);
  }
  function G(ie, Pe = "") {
    return re(c, _, g, ie, Pe);
  }
  function Y({ label: ie = "", width: Pe, height: w, offscreen: N = !1 } = {}) {
    const J = globalThis.OffscreenCanvas;
    let ue;
    return N && typeof J < "u" ? ue = new J(Pe, w) : (ue = t.document().createElement("canvas"), Pe !== void 0 && w !== void 0 && (ue.width = Pe, ue.height = w)), B(ue, ie);
  }
  function le(ie) {
    ie.width = 0, ie.height = 0, n && (p.released += 1);
  }
  function ve(ie = t.document(), Pe = "") {
    var w;
    return G(((w = ie == null ? void 0 : ie.createElement) == null ? void 0 : w.call(ie, "video")) || null, Pe);
  }
  function ge(ie, Pe) {
    if (!n || !ie) return () => {
    };
    const w = { label: Pe, lost: !1, disposed: !1 };
    b.add(w), C.created += 1, ee("webgl-created", Pe);
    const N = () => {
      w.disposed || (w.lost = !0, C.lost += 1, ee("webglcontextlost", Pe));
    }, J = () => {
      w.disposed || (w.lost = !1, C.restored += 1, ee("webglcontextrestored", Pe));
    };
    return ie.addEventListener("webglcontextlost", N), ie.addEventListener("webglcontextrestored", J), () => {
      w.disposed || (w.disposed = !0, b.delete(w), C.disposed += 1, ee("webgl-disposed", Pe));
    };
  }
  function he(ie, Pe) {
    return D.set(ie, Pe), () => {
      D.get(ie) === Pe && D.delete(ie);
    };
  }
  function Z() {
    return n ? t.now() : -1;
  }
  function E(ie) {
    if (ie < 0 || !n) return;
    const Pe = t.now() - ie;
    T.count += 1, T.maxMs = Math.max(T.maxMs, Pe);
  }
  function W(ie, Pe) {
    if (Pe < 0 || !n) return;
    const w = t.now() - Pe, N = x.get(ie) ?? { count: 0, maxMs: 0 };
    N.count += 1, N.maxMs = Math.max(N.maxMs, w), x.set(ie, N);
  }
  function de() {
    let ie = 0, Pe = 0, w = 0, N = [0, 0];
    const J = {};
    for (const ue of u) {
      const P = ue.ref.deref();
      if (!P) continue;
      ie += 1;
      const F = P.width * P.height;
      F > 0 && (Pe += 1), w += F, F > N[0] * N[1] && (N = [P.width, P.height]);
      const q = J[ue.label] ?? (J[ue.label] = [0, 0]);
      q[0] += 1, q[1] += F;
    }
    return { ...p, alive: ie, sized: Pe, pixels: w, mb: Kr(w * 4 / Ja, 1), largest: N, byLabel: J };
  }
  function fe() {
    const ie = [];
    let Pe = 0, w = 0;
    for (const N of c) {
      const J = N.ref.deref();
      if (!J) continue;
      Pe += 1;
      const ue = !J.paused && !J.ended;
      ue && (w += 1), ie.length < X_ && ie.push({
        label: N.label,
        playing: ue,
        src: !!(J.currentSrc || J.src),
        size: [J.videoWidth || 0, J.videoHeight || 0],
        ready: J.readyState ?? 0,
        connected: !!J.isConnected
      });
    }
    return { ...g, alive: Pe, playing: w, list: ie };
  }
  function we() {
    const ie = t.now(), Pe = t.memory(), w = {
      t: t.clock(),
      heap: Pe ? { used: Kr(Pe.usedJSHeapSize / Ja, 1), total: Kr(Pe.totalJSHeapSize / Ja, 1), limit: Kr(Pe.jsHeapSizeLimit / Ja, 1) } : null,
      canvas: de(),
      webgl: { ...C, alive: [...b].filter((N) => !N.lost).length },
      video: fe(),
      frame: { count: T.count, maxMs: Kr(T.maxMs), longTasks: H.count, longTaskMaxMs: Kr(H.maxMs) },
      renders: Object.fromEntries([...x].map(([N, J]) => [N, { count: J.count, maxMs: Kr(J.maxMs) }])),
      sources: Object.fromEntries([...D].map(([N, J]) => [N, J()])),
      costMs: Kr(d, 3)
    };
    return T = { count: 0, maxMs: 0 }, x = /* @__PURE__ */ new Map(), H = { count: 0, maxMs: 0 }, z.push({ record: w, text: JSON.stringify(w) }), z.length > U_ && z.shift(), l += 1, l % Z_ === 0 && oe(), d = t.now() - ie, w;
  }
  function $e(ie = Y_) {
    const Pe = JSON.stringify({ ...o, events: U }).slice(0, -1);
    let w = ie - Pe.length - 14, N = z.length;
    for (; N > 0 && w - z[N - 1].text.length - 1 >= 0; )
      N -= 1, w -= z[N].text.length + 1;
    return `${Pe},"records":[${z.slice(N).map((J) => J.text).join(",")}]}`;
  }
  function oe() {
    if (!o) return;
    const ie = t.storage();
    if (ie) {
      o.savedAt = t.clock();
      try {
        ie.setItem(hc, $e());
      } catch {
      }
    }
  }
  function V() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", oe();
  }
  function ae() {
    var J;
    if (r) return i;
    r = !0;
    const ie = t.storage();
    if (!ie) return null;
    let Pe = null;
    try {
      if (Pe = ie.getItem(hc), Pe === null) {
        const ue = ie.getItem(Fp);
        return i = ue === null ? null : JSON.parse(ue), i;
      }
      ie.setItem(Fp, Pe), ie.removeItem(hc), i = JSON.parse(Pe);
    } catch {
      return i;
    }
    const w = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], N = w.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${w.length} records kept. Its last records:`,
      JSON.stringify(N)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((J = w.at(-1)) == null ? void 0 : J.t) || 0).toISOString()}; ${w.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(N)
    ), i;
  }
  function pe(ie) {
    const Pe = ie === !0;
    if (ae(), Pe !== n) {
      if (n = Pe, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, z.length = 0, s = t.observeLongTasks((w) => {
          for (const N of w)
            H.count += 1, H.maxMs = Math.max(H.maxMs, N.duration);
        }), t.addUnload(V), a = t.setInterval(we, J_), oe();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(V), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", oe();
    }
  }
  function xe() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...U], records: z.map((ie) => ie.record) } : null,
      previous: i
    };
  }
  function Oe() {
    const ie = t.document(), Pe = new Blob([JSON.stringify(xe(), null, 1)], { type: "application/json" }), w = URL.createObjectURL(Pe), N = ie.createElement("a");
    N.href = w, N.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, N.click(), setTimeout(() => URL.revokeObjectURL(w), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: Y,
    releaseCanvas: le,
    trackCanvas: B,
    createVideo: ve,
    trackVideo: G,
    watchContext: ge,
    addSource: he,
    frameStart: Z,
    frameEnd: E,
    renderEnd: W,
    sample: we,
    serialize: $e,
    recoverPrevious: ae,
    setEnabled: pe,
    exportData: xe,
    download: Oe
  };
}
const An = tS(), mn = An.createCanvas, eu = An.releaseCanvas, mc = An.trackCanvas, xl = An.createVideo, Tp = An.trackVideo, nS = An.addSource, rS = An.frameStart, iS = An.frameEnd;
function qm(e, t) {
  const n = An.watchContext(e.canvas, t), r = An.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = An.frameStart(), l = o(a);
    return An.renderEnd(t, s), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (r(), n());
    }
  };
}
const oS = {
  id: K_,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => An.setEnabled(e === !0)
}, Dp = {
  id: B_,
  label: "Export Panorama Suite diagnostics",
  function: () => An.download()
};
function eo(e, t) {
  const n = mn({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function aS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Lp(e, t = 8) {
  var u;
  const n = (u = e == null ? void 0 : e.getContext) == null ? void 0 : u.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || i < 1) return null;
  const o = n.getImageData(0, 0, r, i).data;
  let a = r, s = i, l = -1, d = -1;
  for (let c = 0; c < i; c += 1)
    for (let p = 0; p < r; p += 1)
      o[(c * r + p) * 4 + 3] <= t || (p < a && (a = p), c < s && (s = c), p > l && (l = p), c > d && (d = c));
  return l < a || d < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: d,
    width: l - a + 1,
    height: d - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, d - s + 1)).toFixed(4))
  };
}
function nd(e, t) {
  return mn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Yr(e, t, n) {
  if (!e) return eo(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Gt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function ln(e) {
  e.displayDirty = !0, e.revision += 1;
}
let gc = null, yc = null, Vp = null, Rp = null, Ht = null, Go = null;
function sS() {
  if (yc) return yc;
  const e = 6, t = 17, n = mn({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), yc = n, n;
}
function bc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  gc = Yr(gc, n, r);
  const i = gc;
  Gt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Rp !== i.ctx && (Vp = i.ctx.createPattern(sS(), "repeat"), Rp = i.ctx), i.ctx.fillStyle = Vp, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function lS(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function cS(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function uS(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function dS(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ft = /* @__PURE__ */ new Map(), rd = 128;
function fS(e, t, n, r, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (Ft.has(l)) {
    const U = Ft.get(l);
    return Ft.delete(l), Ft.set(l, U), U;
  }
  Ft.size >= rd && Ft.delete(Ft.keys().next().value);
  const d = a * 2 + 2, u = a + 1, c = nd(d, d), p = c.getContext("2d"), g = s * a, y = a + 1, _ = `rgba(${n},${r},${i},${o})`, b = `rgba(${n},${r},${i},0)`, C = p.createRadialGradient(u, u, g, u, u, y);
  return C.addColorStop(0, _), C.addColorStop(1, b), p.fillStyle = C, p.fillRect(0, 0, d, d), Ft.set(l, c), c;
}
function pS(e, t, n, r, i, o, a) {
  const { r: s, g: l, b: d, a: u } = r, c = Math.max(2, Math.ceil(e) * 2), p = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), y = Math.max(0, Math.min(0.99, o)), _ = Math.max(0, Math.min(1, a ?? 0)), b = `chisel:${c}:${p}:${n.toFixed(2)}:${s}:${l}:${d}:${u.toFixed(3)}:${g.toFixed(2)}:${y.toFixed(2)}:${_.toFixed(2)}`;
  if (Ft.has(b)) {
    const ee = Ft.get(b);
    return Ft.delete(b), Ft.set(b, ee), ee;
  }
  Ft.size >= rd && Ft.delete(Ft.keys().next().value);
  const C = nd(c, p), U = C.getContext("2d"), D = U.createImageData(c, p), T = D.data, x = Math.max(0, e - t), H = Math.max(0, Math.min(1, n)), z = 1 + g;
  for (let ee = 0; ee < p; ee++)
    for (let re = 0; re < c; re++) {
      const B = re + 0.5 - e, G = ee + 0.5 - t, Y = Math.max(Math.abs(B) - x, 0), ve = Math.hypot(Y, G) / t;
      if (ve >= 1) continue;
      const ge = ve <= H ? 1 : Math.max(0, (1 - ve) / Math.max(1e-4, 1 - H)), he = 1 - ve, Z = 1 + g * (1 - he) * (1 - he), E = 1 - y * he * he, W = Z * E / z;
      let de = 1;
      if (_ > 0) {
        const $e = Math.floor((G + t) / 1.5), oe = Math.floor((B + e) / 8), V = Pi(fo($e * 41 + 500, oe * 19 + 300));
        de = 1 - _ * 0.42 * V;
      }
      const fe = Math.round(255 * Math.min(1, u * ge * W * de));
      if (fe <= 0) continue;
      const we = (ee * c + re) * 4;
      T[we] = s, T[we + 1] = l, T[we + 2] = d, T[we + 3] = fe;
    }
  return U.putImageData(D, 0, 0), Ft.set(b, C), C;
}
function fo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function Pi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hS(e, t, n, r, i, o, a) {
  const s = e + 0.5 - n, l = t + 0.5 - r, d = Math.max(0, n - r), u = Math.max(Math.abs(s) - d, 0), c = Math.hypot(u, l) / r;
  if (c >= 1) return 0;
  const p = Pi(fo(e * 17 + 3, t * 13 + 7)), g = c + o * 0.22 * (p - 0.5);
  if (g >= 1) return 0;
  const y = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), _ = mS(e, t, s, l, n, r), b = o * 0.55;
  if (_ < b) return 0;
  const U = 0.45 + 0.55 * ((_ - b) / Math.max(1e-4, 1 - b));
  return Math.round(255 * Math.min(1, a * y * U));
}
function mS(e, t, n, r, i, o) {
  const a = Math.floor((n + i) / 3), s = Math.floor((r + o) / 2), l = Pi(fo(a * 13 + 700, s * 17 + 400)), d = Math.floor((n + i) / 1.5), u = Math.floor((r + o) / 1.5), c = Pi(fo(d * 23 + 800, u * 29 + 500)), p = Pi(fo(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + c * 0.3 + p * 0.15;
}
function gS(e, t, n, r, i) {
  const { r: o, g: a, b: s, a: l } = r, d = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), c = Math.max(0, Math.min(1, i)), p = `crayon:${d}:${u}:${n.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${c.toFixed(2)}`;
  if (Ft.has(p)) {
    const U = Ft.get(p);
    return Ft.delete(p), Ft.set(p, U), U;
  }
  Ft.size >= rd && Ft.delete(Ft.keys().next().value);
  const g = nd(d, u), y = g.getContext("2d"), _ = y.createImageData(d, u), b = _.data, C = Math.max(0, Math.min(1, n));
  for (let U = 0; U < u; U++)
    for (let D = 0; D < d; D++) {
      const T = hS(D, U, e, t, C, c, l);
      if (T <= 0) continue;
      const x = (U * d + D) * 4;
      b[x] = o, b[x + 1] = a, b[x + 2] = s, b[x + 3] = T;
    }
  return y.putImageData(_, 0, 0), Ft.set(p, g), g;
}
function Xm(e, t, n) {
  var _, b;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = uS(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = yS(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), d = dS(t, i), u = String(((b = t == null ? void 0 : t.targetSpace) == null ? void 0 : b.viewMode) || ""), c = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && u !== "unwrap", p = t == null ? void 0 : t.scatter, g = p ? { radius: Number(p.radius ?? 1.5), count: Math.max(1, Math.round(p.count ?? 6)) } : null;
  let y;
  if (r === "chisel") {
    const C = i * s, U = i, D = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), x = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    y = pS(C, U, o, a, D, T, x);
  } else if (r === "crayon") {
    const C = i * s, U = i, D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    y = gS(C, U, o, a, D);
  } else
    y = fS(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: y, radiusPx: i, spacingPx: d, desc: n, aspect: s, angle: l, stampKind: r, scatter: g, latitudeCorrection: c };
}
function yS(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(r.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: o
  };
}
function bS(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function $p(e, t, n, r, i) {
  const o = e.angle, a = e.desc.width;
  function s(d, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, d - i, u - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(d, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  s(t, n);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, n), t + l > a && s(t - a, n);
}
function id(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: d, count: u } = e.scatter, c = d * e.radiusPx * i, p = fo(t, n);
    for (let g = 0; g < u; g++) {
      const y = Pi(p + g * 2) * Math.PI * 2, _ = Math.sqrt(Pi(p + g * 2 + 1)) * c, b = t + Math.cos(y) * _, C = n + Math.sin(y) * _, U = Math.max(0.5, e.radiusPx * i * 0.48), D = (0.5 - C / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(D)) : 1, x = U * e.aspect * T;
      $p(e, b, C, U, x);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  $p(e, t, n, o, l);
}
function zp(e, t, n) {
  const r = cS(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, a = Xm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let p = 0; p < r.length; p++) {
    let g = Number(r[p].u || 0) * i;
    const y = Number(r[p].v || 0) * o;
    p > 0 && Math.abs(g - s[p - 1].x) > i * 0.5 && (g += g < s[p - 1].x ? i : -i), s.push({ x: g, y });
  }
  if (id(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], d = s[0], u = s[0], c = 0;
  for (let p = 1; p < s.length; p++) {
    const g = s[p], y = { x: (d.x + g.x) * 0.5, y: (d.y + g.y) * 0.5 };
    p === 1 ? c = va(a, u.x, u.y, y.x, y.y, c) : c = Vs(a, l, u, y, g, c), l = d, d = g, u = y;
  }
  s.length === 2 ? va(a, u.x, u.y, d.x, d.y, c) : Vs(a, l, u, d, d, c), e.restore();
}
function gs(e, t, n) {
  var c;
  const r = Array.isArray((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, a = bS(t), s = [];
  let l = 1 / 0, d = -1 / 0;
  for (let p = 0; p < r.length; p++) {
    const g = lS(r[p]);
    let y = Number(g.x || 0) * i;
    p > 0 && Math.abs(y - s[p - 1].x) > i * 0.5 && (y += y < s[p - 1].x ? i : -i), s.push({ x: y, y: Number(g.y || 0) * o }), y < l && (l = y), y > d && (d = y);
  }
  function u(p) {
    e.beginPath(), e.moveTo(s[0].x + p, s[0].y);
    for (let g = 1; g < s.length; g++) e.lineTo(s[g].x + p, s[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, u(0), l < 0 && u(i), d > i && u(-i), e.restore();
}
function Za(e, t, n) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    gs(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? zp(e, t, n) : (Go = Yr(Go, n.width, n.height), Gt(Go), zp(Go.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Go.canvas, 0, 0), e.restore());
}
function fi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function va(e, t, n, r, i, o) {
  const a = r - t, s = i - n, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let d = e.spacingPx - o;
  for (; d <= l; ) {
    const u = d / l;
    id(e, t + a * u, n + s * u, 1), d += e.spacingPx;
  }
  return l - d + e.spacingPx;
}
function Vs(e, t, n, r, i, o) {
  const s = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, d = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, u = 0, c = s, p = c + l, g = p + d, y = p - c, _ = 16;
  let b = o, C = n.x, U = n.y;
  for (let D = 1; D <= _; D++) {
    const T = c + y * D / _, x = ((c - T) * t.x + (T - u) * n.x) / (c - u), H = ((c - T) * t.y + (T - u) * n.y) / (c - u), z = ((p - T) * n.x + (T - c) * r.x) / (p - c), ee = ((p - T) * n.y + (T - c) * r.y) / (p - c), re = ((g - T) * r.x + (T - p) * i.x) / (g - p), B = ((g - T) * r.y + (T - p) * i.y) / (g - p), G = ((p - T) * x + (T - u) * z) / (p - u), Y = ((p - T) * H + (T - u) * ee) / (p - u), le = ((g - T) * z + (T - c) * re) / (g - c), ve = ((g - T) * ee + (T - c) * B) / (g - c), ge = ((p - T) * G + (T - c) * le) / (p - c), he = ((p - T) * Y + (T - c) * ve) / (p - c);
    b = va(e, C, U, ge, he, b), C = ge, U = he;
  }
  return b;
}
function vS(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = n * o.height, l = e.activeStroke;
  let d = t * a;
  if (l && Math.abs(d - l.prev.x) > a * 0.5 && (d += d < l.prev.x ? a : -a), !l) {
    const g = Xm(i, r, o), y = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), b = String((r == null ? void 0 : r.toolKind) || "") === "eraser", C = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", id(g, d, s, 1), e.activeStroke = {
      pprev: { x: d, y: s },
      prev: { x: d, y: s },
      lastMidX: d,
      lastMidY: s,
      stampTex: g.stampTex,
      radiusPx: g.radiusPx,
      spacingPx: g.spacingPx,
      aspect: g.aspect,
      angle: g.angle,
      stampKind: g.stampKind,
      scatter: g.scatter,
      latitudeCorrection: g.latitudeCorrection,
      strokeOpacity: y,
      velocityWidthFactor: _,
      distSinceStamp: 0,
      isEraser: b,
      layerKind: C,
      pointCount: 1
    }, ln(e);
    return;
  }
  const u = (l.prev.x + d) * 0.5, c = (l.prev.y + s) * 0.5;
  i.globalCompositeOperation = "source-over";
  const p = {
    ctx: i,
    stampTex: l.stampTex,
    radiusPx: l.radiusPx,
    spacingPx: l.spacingPx,
    desc: o,
    aspect: l.aspect,
    angle: l.angle,
    stampKind: l.stampKind,
    scatter: l.scatter,
    latitudeCorrection: l.latitudeCorrection
  };
  l.pointCount === 1 ? l.distSinceStamp = va(p, l.lastMidX, l.lastMidY, u, c, l.distSinceStamp) : l.distSinceStamp = Vs(
    p,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: u, y: c },
    { x: d, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: d, y: s }, l.lastMidX = u, l.lastMidY = c, l.pointCount++, ln(e);
}
function od(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = eo(t, n), a = {
    descriptor: r,
    committedMask: eo(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, s = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: eo(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = eo(t, n);
  let d = null, u = "", c = null;
  const p = /* @__PURE__ */ new Map();
  let g = null;
  function y(le) {
    return {
      actionGroupId: le,
      descriptor: r,
      committedPaint: eo(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function _(le) {
    let ve = i.get(le);
    return ve || (ve = y(le), i.set(le, ve)), ve;
  }
  function b(le) {
    return u === "mask" ? a : d ? _(d) : s;
  }
  function C(le) {
    var W;
    const ve = !c || c.length !== le.length || le.some((de, fe) => de !== c[fe]), ge = u === "paint" && ((W = d ? i.get(d) : s) == null ? void 0 : W.activeStroke) || null;
    let he = a.displayDirty || s.displayDirty || ve;
    for (const de of le) {
      const fe = i.get(de);
      if (fe != null && fe.displayDirty) {
        he = !0;
        break;
      }
    }
    if (ge && (he = !0), !he) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const de of le) {
      const fe = i.get(de);
      fe && (fe.displayDirty = !1);
    }
    c = [...le];
    const Z = l.ctx;
    Gt(l);
    const E = !!(ge != null && ge.isEraser);
    for (const de of le) {
      const fe = i.get(de);
      if (!fe) continue;
      const $e = d === fe.actionGroupId && u === "paint" ? fe.activeStroke : null;
      if (E)
        Ht = Yr(Ht, t, n), Gt(Ht), Ht.ctx.drawImage(fe.committedPaint.canvas, 0, 0), fi(Ht.ctx, o.canvas), Z.drawImage(Ht.canvas, 0, 0);
      else if (Z.drawImage(fe.committedPaint.canvas, 0, 0), $e) {
        const oe = fe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, $e.strokeOpacity ?? 1));
        Z.save(), Z.globalAlpha = oe, Z.drawImage(o.canvas, 0, 0), Z.restore();
      }
    }
  }
  function U(le) {
    var ge, he, Z, E, W;
    for (const de of i.values())
      Gt(de.committedPaint), Gt(de.currentStroke), de.activeStroke = null, ln(de);
    Gt(a.committedMask), Gt(a.currentStroke), a.activeStroke = null, a.painted = !1, p.clear(), ln(a), ln(s), c = null;
    const ve = [
      ...Array.isArray((he = (ge = le == null ? void 0 : le.painting) == null ? void 0 : ge.paint) == null ? void 0 : he.strokes) ? le.painting.paint.strokes : [],
      ...Array.isArray((E = (Z = le == null ? void 0 : le.painting) == null ? void 0 : Z.mask) == null ? void 0 : E.strokes) ? le.painting.mask.strokes : []
    ];
    for (const de of ve) {
      if (((W = de == null ? void 0 : de.targetSpace) == null ? void 0 : W.kind) !== "ERP_GLOBAL") continue;
      const fe = String((de == null ? void 0 : de.layerKind) || "paint"), $e = String((de == null ? void 0 : de.toolKind) || "pen") === "eraser";
      if (fe === "mask") {
        const oe = a.descriptor;
        $e ? (Ht = Yr(Ht, oe.width, oe.height), Gt(Ht), Za(Ht.ctx, de, oe), fi(a.committedMask.ctx, Ht.canvas)) : (Za(a.committedMask.ctx, de, oe), a.painted = !0);
        continue;
      }
      if ($e) {
        Ht = Yr(Ht, r.width, r.height), Gt(Ht), Za(Ht.ctx, de, r);
        for (const oe of i.values())
          fi(oe.committedPaint.ctx, Ht.canvas), ln(oe);
      } else {
        const oe = String((de == null ? void 0 : de.actionGroupId) || "__default__"), V = _(oe), ae = V.descriptor;
        Za(V.committedPaint.ctx, de, ae), ln(V);
      }
    }
    C([...i.keys()]);
  }
  function D(le, ve) {
    u = String((le == null ? void 0 : le.layerKind) || "");
    const ge = String((le == null ? void 0 : le.toolKind) || "") === "eraser";
    if (u === "mask")
      d = null, Gt(a.currentStroke), a.activeStroke = null, ln(a);
    else {
      const he = ge ? s : _(String((le == null ? void 0 : le.actionGroupId) || "__default__"));
      d = ge ? "" : String((le == null ? void 0 : le.actionGroupId) || "__default__"), Gt(he.currentStroke), he.activeStroke = null, ln(he);
    }
  }
  function T(le, ve) {
    var fe;
    const ge = String((le == null ? void 0 : le.layerKind) || "paint"), he = String((le == null ? void 0 : le.toolKind) || "") === "eraser", Z = ge === "mask" ? a : he ? s : _(String((le == null ? void 0 : le.actionGroupId) || d || "__default__")), E = Z.activeStroke, W = Z.descriptor;
    if (E && E.pointCount > 1) {
      const we = Z.currentStroke.ctx;
      we.globalCompositeOperation = "source-over";
      const $e = {
        ctx: we,
        stampTex: E.stampTex,
        radiusPx: E.radiusPx,
        spacingPx: E.spacingPx,
        desc: W,
        aspect: E.aspect,
        angle: E.angle,
        stampKind: E.stampKind,
        scatter: E.scatter,
        latitudeCorrection: E.latitudeCorrection
      };
      E.pointCount === 2 ? va($e, E.lastMidX, E.lastMidY, E.prev.x, E.prev.y, E.distSinceStamp) : Vs($e, E.pprev, { x: E.lastMidX, y: E.lastMidY }, E.prev, E.prev, E.distSinceStamp);
    }
    Z.lassoPreviewActive && (Gt(Z.currentStroke), gs(Z.currentStroke.ctx, le, W), Z.lassoPreviewActive = !1);
    const de = ge === "mask" ? a.committedMask : Z.committedPaint;
    if (he && ge === "paint")
      for (const we of i.values())
        fi(we.committedPaint.ctx, Z.currentStroke.canvas), ln(we);
    else if (he)
      fi(de.ctx, Z.currentStroke.canvas);
    else {
      ge === "mask" && (a.painted = !0);
      const we = Math.max(0, Math.min(1, (E == null ? void 0 : E.strokeOpacity) ?? 1));
      de.ctx.save(), de.ctx.globalAlpha = we, de.ctx.drawImage(Z.currentStroke.canvas, 0, 0), de.ctx.restore();
    }
    aS() && (String((le == null ? void 0 : le.toolKind) || ""), String((W == null ? void 0 : W.kind) || ""), Number((W == null ? void 0 : W.width) || 0), Number((W == null ? void 0 : W.height) || 0), String(((fe = le == null ? void 0 : le.targetSpace) == null ? void 0 : fe.viewMode) || ""), Number((le == null ? void 0 : le.aspect) ?? 1), Lp(Z.currentStroke.canvas), Lp(de.canvas), void 0), Gt(Z.currentStroke), Z.activeStroke = null, ln(Z), p.clear(), d = null, u = "", C([...i.keys()]);
  }
  function x(le) {
    if (u === "mask")
      Gt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, ln(a);
    else if (u === "paint" && !d)
      Gt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, ln(s);
    else if (d) {
      const ve = i.get(d);
      ve && (Gt(ve.currentStroke), ve.activeStroke = null, ve.lassoPreviewActive = !1, ln(ve));
    }
    p.clear(), d = null, u = "", C([...i.keys()]);
  }
  function H(le, ve) {
    var he;
    if (u = String((le == null ? void 0 : le.layerKind) || ""), String(((he = le == null ? void 0 : le.geometry) == null ? void 0 : he.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        Gt(a.currentStroke), gs(a.currentStroke.ctx, le, a.descriptor), a.lassoPreviewActive = !0, ln(a);
      else {
        const Z = String((le == null ? void 0 : le.toolKind) || "") === "eraser", E = Z ? s : _(String((le == null ? void 0 : le.actionGroupId) || d || "__default__"));
        d = Z ? "" : String((le == null ? void 0 : le.actionGroupId) || d || "__default__"), Gt(E.currentStroke), gs(E.currentStroke.ctx, le, E.descriptor), E.lassoPreviewActive = !0, ln(E);
      }
      C([...i.keys()]);
    }
  }
  function z(le) {
    return C(le ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: r
    };
  }
  function ee(le) {
    return i.get(String(le)) ?? null;
  }
  function re() {
    return [...i.keys()];
  }
  function B(le) {
    var we;
    const ve = i.get(String(le));
    if (!ve) return null;
    const ge = u === "paint" && d === ve.actionGroupId, he = u === "paint" && ((we = d ? i.get(d) : s) == null ? void 0 : we.activeStroke) || null, Z = !!(he != null && he.isEraser), E = ge ? ve.activeStroke : null;
    if (!Z && !E) return ve.committedPaint.canvas;
    const W = `${ve.revision}:${s.revision}:${Z}`, de = p.get(ve.actionGroupId);
    if ((de == null ? void 0 : de.key) === W) return de.surface.canvas;
    const fe = Yr((de == null ? void 0 : de.surface) ?? null, t, n);
    return Gt(fe), fe.ctx.drawImage(ve.committedPaint.canvas, 0, 0), Z ? fi(fe.ctx, o.canvas) : (fe.ctx.save(), fe.ctx.globalAlpha = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, E.strokeOpacity ?? 1)), fe.ctx.drawImage(o.canvas, 0, 0), fe.ctx.restore()), p.set(ve.actionGroupId, { key: W, surface: fe }), fe.canvas;
  }
  function G() {
    const le = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!le || le.isEraser) ? null : `${a.revision}:${!!le}`;
  }
  function Y() {
    const le = G();
    if (le === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === le) return g.surface.canvas;
    const ve = Yr((g == null ? void 0 : g.surface) ?? null, t, n);
    Gt(ve);
    const ge = u === "mask" ? a.activeStroke : null;
    return ge != null && ge.isEraser ? (Ht = Yr(Ht, t, n), Gt(Ht), Ht.ctx.drawImage(a.committedMask.canvas, 0, 0), fi(Ht.ctx, o.canvas), bc(ve.ctx, Ht.canvas)) : (bc(ve.ctx, a.committedMask.canvas), ge && bc(ve.ctx, o.canvas)), g = { key: le, surface: ve }, ve.canvas;
  }
  return {
    rebuildCommitted: U,
    beginStroke: D,
    appendStrokePoint: vS,
    updateActiveStroke: H,
    commitActiveStroke: T,
    cancelActiveStroke: x,
    getErpTarget: z,
    ensureTarget: b,
    getGroupTarget: ee,
    getGroupDisplayCanvas: B,
    getMaskDisplayCanvas: Y,
    getMaskDisplayRevision: G,
    getAllGroupIds: re
  };
}
function Fe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Dt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function ad(e, t) {
  let n = Dt(t) - Dt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const tu = 3;
function Wo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Rs(e, t = 0) {
  const n = Wo(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Wo(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = Wo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Wo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Wo(t) || 0);
}
function Jm(e) {
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
const jp = Math.PI / 180, Hp = 0.12, _S = tu, SS = 35, wS = 140, Xo = 100, xS = 20, Gp = 0.8;
function kS(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Fe(Number(e || Xo), 1, 179) * jp;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / jp;
}
function sd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Xo })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function d(U, D = null) {
    s && s(U, D);
  }
  function u(U, D, T = null, x = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(U || 0), l.drag.lastY = Number(D || 0), l.drag.lastTs = Number(x || performance.now()), l.drag.pointerId = T, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], d("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: T }), !0;
  }
  function c(U, D, T = "pano", x = performance.now()) {
    if (!l.drag.active) return !1;
    const H = Number(x || performance.now()), z = Number(U), ee = Number(D), re = z - l.drag.lastX, B = ee - l.drag.lastY;
    l.drag.lastX = z, l.drag.lastY = ee, l.drag.lastTs = H;
    const G = r() || { x: 1, y: 1 }, Y = Number(G.x || 1), le = Number(G.y || 1), ve = { ...t() };
    let ge = 0, he = 0;
    if (T === "unwrap") {
      const E = i() || { w: 1, h: 1 }, W = Math.max(1, Number(E.w || 1)), de = Math.max(1, Number(E.h || 1)), fe = re / W, we = B / de;
      ge = -fe * 360 * Y, he = we * 180 * le;
    } else {
      const E = o() || { w: 0, h: 0 }, W = Math.max(1, Number(E.w || 0)), de = Math.max(1, Number(E.h || 0));
      if (W > 1 && de > 1) {
        const fe = Fe(Number(ve.fov || Xo), 1, 179), we = Fe(kS(fe, W, de), 0.1, 179);
        ge = -(re / W) * fe * Y, he = B / de * we * le;
      } else
        ge = -re * Hp * Y, he = B * Hp * le;
    }
    ve.yaw = Dt(Number(ve.yaw || 0) + ge), ve.pitch = Fe(Number(ve.pitch || 0) + he, -89.9, 89.9), n(ve), l.velHistory.push({ ts: H, yaw: ve.yaw, pitch: ve.pitch });
    let Z = 0;
    for (; Z < l.velHistory.length - 1 && l.velHistory[Z].ts < H - 100; ) Z++;
    return Z > 0 && l.velHistory.splice(0, Z), l.inertia.active = !1, l.inertia.lastTs = H, a(), d("drag", { phase: "move", dx: re, dy: B, dYaw: ge, dPitch: he }), !0;
  }
  function p(U = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const D = Number(U || performance.now());
    l.drag.lastTs = D;
    const T = l.velHistory.filter((H) => D - H.ts <= 80);
    if (T.length >= 2) {
      const H = T[0], z = T.at(-1), ee = Math.max(1e-3, (z.ts - H.ts) / 1e3);
      let re = z.yaw - H.yaw;
      re > 180 && (re -= 360), re < -180 && (re += 360), l.inertia.vx = re / ee, l.inertia.vy = (z.pitch - H.pitch) / ee;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const x = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = x > xS, l.inertia.lastTs = D, d("drag", { phase: "end", speed: x, inertiaActive: l.inertia.active }), !0;
  }
  function g(U = performance.now()) {
    if (!l.inertia.active) return !1;
    const D = Number(U || performance.now()), T = Math.max(1e-3, (D - (l.inertia.lastTs || D)) / 1e3);
    l.inertia.lastTs = D;
    const x = { ...t() };
    x.yaw = Dt(Number(x.yaw || 0) + l.inertia.vx * T), x.pitch = Fe(Number(x.pitch || 0) + l.inertia.vy * T, -89.9, 89.9);
    const H = Math.exp(-5.5 * T);
    return l.inertia.vx *= H, l.inertia.vy *= H, Math.abs(l.inertia.vx) < Gp && Math.abs(l.inertia.vy) < Gp && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), n(x), a(), l.inertia.active;
  }
  function y() {
    const U = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], U;
  }
  function _(U) {
    const D = Math.sign(Number(U || 0));
    if (!D) return !1;
    const T = { ...t() }, x = Number(T.fov || Xo);
    return T.fov = Fe(x + D * _S, SS, wS), n(T), a(), d("wheel", { deltaSign: D, fovBefore: x, fovAfter: T.fov }), !0;
  }
  function b(U, D = 0) {
    return _(Rs(U, D));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: Xo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: c,
    endDrag: p,
    stepInertia: g,
    stopMotion: y,
    applyWheel: _,
    applyWheelEvent: b,
    resetView: C
  };
}
const wt = Math.PI / 180, Qt = 180 / Math.PI;
function Wn(e, t, n) {
  return { x: e, y: t, z: n };
}
function $s(e, t) {
  return Wn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function zs(e, t) {
  return Wn(e.x * t, e.y * t, e.z * t);
}
function vc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ld(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Wn(e.x / t, e.y / t, e.z / t);
}
function Nn(e, t) {
  const n = e * wt, r = t * wt, i = Math.cos(r);
  return Wn(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function Mo(e, t, n = 0) {
  const r = Number(e || 0) * wt, i = Number(t || 0) * wt, o = n * wt, a = Math.cos(r), s = Math.sin(r), l = Math.cos(i), d = Math.sin(i), u = Math.cos(o), c = Math.sin(o);
  return {
    right: Wn(
      a * u - s * d * c,
      l * c,
      -s * u - a * d * c
    ),
    up: Wn(
      -a * c - s * d * u,
      l * u,
      s * c - a * d * u
    ),
    fwd: Wn(s * l, d, a * l)
  };
}
function js(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Mt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function MS() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function PS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const o = Mt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function NS(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function AS(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = Mt(e.t, 0), r = Mt(e.widthScale, null), i = Mt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Mt(e.u, null), a = Mt(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, a)),
      t: n
    };
    return r != null && (s.widthScale = Math.max(0, r)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = Mt(e.u, null), a = Mt(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: a,
      t: n
    };
    return r != null && (s.widthScale = Math.max(0, r)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  return null;
}
function Qa(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = AS(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function CS(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const l = Qa(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = Qa(e.points, t, 1);
  if (!o) return null;
  const a = Qa(e.rawPoints, t, 1), s = Qa(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function IS(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = NS(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = CS(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const o = Mt(e.size, null), a = Mt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const d = Mt(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let c = null;
  if (t === "paint") {
    const p = e.color;
    if (!p || typeof p != "object") return null;
    c = {
      r: Math.max(0, Math.min(1, Mt(p.r, 0))),
      g: Math.max(0, Math.min(1, Mt(p.g, 0))),
      b: Math.max(0, Math.min(1, Mt(p.b, 0))),
      a: Math.max(0, Math.min(1, Mt(p.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: l,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, a)),
    hardness: Mt(e.hardness, null),
    flow: Mt(e.flow, null),
    spacing: Mt(e.spacing, null),
    createdAt: Math.trunc(Mt(e.createdAt, 0)),
    color: c,
    radiusModel: u,
    radiusValue: d == null ? null : Math.max(0, d),
    geometry: i
  };
}
function Wp(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = IS(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function ES(e) {
  if (!e || typeof e != "object") return null;
  const t = Mt(e.u0, null), n = Mt(e.v0, null), r = Mt(e.u1, null), i = Mt(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function OS(e) {
  const t = e || {};
  return {
    du: Mt(t.du, 0) ?? 0,
    dv: Mt(t.dv, 0) ?? 0,
    rot_deg: Mt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Mt(t.scale, 1) ?? 1)
  };
}
function FS(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = ES(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Mt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: OS(e.transform)
  } : null;
}
function TS(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = FS(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function Po(e) {
  const t = MS();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: PS(e.groups),
    paint: Wp(e.paint, "paint"),
    mask: Wp(e.mask, "mask"),
    raster_objects: TS(e.raster_objects)
  };
}
const Bn = 1, Un = 179, nu = 85;
function kl(e) {
  const t = ((lt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Zm(e, t) {
  let n = lt(e, 0) - lt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Qm(e, t, { shiftKey: n = !1 } = {}) {
  let r = lt(e, 0) + lt(t, 0) * Qt;
  return n && (r = Math.round(r / 15) * 15), kl(r);
}
function lt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Qr(e = {}) {
  const t = Fe(lt(e.hFOV_deg || 90, 90), Bn, Un), n = Fe(lt(e.vFOV_deg || 60, 60), Bn, Un), r = Math.tan(t * wt * 0.5), i = Math.tan(n * wt * 0.5);
  return {
    yawDeg: lt(e.yaw_deg, 0),
    pitchDeg: lt(e.pitch_deg, 0),
    rollDeg: lt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function Ci(e, t) {
  const n = Math.max(1, lt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, lt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Qr(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function cd(e, t) {
  const n = Math.max(1, lt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, lt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, lt(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function ud(e, t) {
  const n = Math.max(1e-12, lt(t, 1)), r = Math.max(1e-6, lt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, lt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Fe(2 * Math.atan(r / (2 * n)) * Qt, Bn, Un), a = Fe(2 * Math.atan(i / (2 * n)) * Qt, Bn, Un);
  return { hFOV_deg: o, vFOV_deg: a };
}
function DS(e, t, n) {
  const r = lt(e == null ? void 0 : e.x, 0), i = lt(e == null ? void 0 : e.y, 0), o = Math.max(1, lt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, lt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Qr(t), l = Math.max(1e-12, lt(n, 1)), d = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: r + (o - d) * 0.5,
    y: i + (a - u) * 0.5,
    w: d,
    h: u,
    focalPx: l
  };
}
function dd(e, t, n = nu) {
  const r = Math.max(1e-12, lt(t, 1)), i = Fe(lt(n, nu), 1, 89.999), o = r * Math.tan(i * wt), a = Math.max(1, lt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, lt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function eg(e, t, n) {
  const r = Math.max(1e-12, lt(t, 1));
  return {
    x: (lt(n == null ? void 0 : n.x, 0) - lt(e == null ? void 0 : e.x, 0)) / r,
    y: -(lt(n == null ? void 0 : n.y, 0) - lt(e == null ? void 0 : e.y, 0)) / r
  };
}
function LS(e, t) {
  const n = Fe(lt(e, 90), Bn, Un), r = Math.max(1e-6, lt(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * wt * 0.5) / r) * Qt,
    Bn,
    Un
  );
}
function ys(e, t) {
  const n = Fe(lt(e, 60), Bn, Un), r = Math.max(1e-6, lt(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(n * wt * 0.5) * r) * Qt,
    Bn,
    Un
  );
}
function Kp(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function VS(e, t) {
  const n = Kp(e, 1), r = Kp(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), a = Math.max(1, Math.round(r * i)), s = (d, u) => u ? s(u, d % u) : d, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function Oi(e) {
  const t = Fe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, n = Fe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function _i(e) {
  const t = Oi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || VS(t, 1);
}
function fd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = _i(t), t;
}
function tg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Fe(a, Bn, Un) : Fe(Math.min(42, lt(i, 100) * 0.42), 8, 96);
  return fd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: lt(t, 0),
    pitch_deg: Fe(lt(n, 0), -89.9, 89.9),
    roll_deg: kl(r),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Dr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : _i(e);
}
function ng(e, t) {
  const n = Qr(e), r = lt(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * Qt, o = 2 * Math.atan(n.tanHalfY * r) * Qt;
  return i < Bn || i > Un || o < Bn || o > Un ? null : { hFOV_deg: i, vFOV_deg: o };
}
function rg(e, t, n = tu) {
  const r = Math.sign(lt(t, 0)), i = Math.abs(lt(n, tu));
  if (!r || !(i > 0)) return null;
  const o = Qr(e), a = o.hFovDeg + r * i;
  if (a < Bn || a > Un) return null;
  const s = Math.tan(a * wt * 0.5);
  return ng(e, s / o.tanHalfX);
}
function ig(e, t) {
  const n = Qr(e), r = Mo(n.yawDeg, n.pitchDeg, n.rollDeg), i = lt(t == null ? void 0 : t.x, 0), o = lt(t == null ? void 0 : t.y, 0);
  return ld($s($s(r.fwd, zs(r.right, i)), zs(r.up, o)));
}
function RS(e) {
  return Wn(e.x, e.y, -e.z);
}
function bs(e) {
  return Wn(e.x, e.y, -e.z);
}
function En(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = Mo(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function og(e) {
  const t = bs(Wn(e[0][0], e[1][0], e[2][0])), n = bs(Wn(e[0][1], e[1][1], e[2][1])), r = bs(Wn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * n.z - a * n.x, a * t.x - s * t.z);
  return { yawDeg: i * Qt, pitchDeg: o * Qt, rollDeg: l * Qt };
}
function _a(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function Fi(e) {
  const [[t, n, r], [i, o, a], [s, l, d]] = e, u = t + o + d;
  if (u > 0) {
    const p = 0.5 / Math.sqrt(u + 1);
    return { x: (l - a) * p, y: (r - s) * p, z: (i - n) * p, w: 0.25 / p };
  }
  if (t > o && t > d) {
    const p = 2 * Math.sqrt(1 + t - o - d);
    return { x: 0.25 * p, y: (n + i) / p, z: (r + s) / p, w: (l - a) / p };
  }
  if (o > d) {
    const p = 2 * Math.sqrt(1 + o - t - d);
    return { x: (n + i) / p, y: 0.25 * p, z: (a + l) / p, w: (r - s) / p };
  }
  const c = 2 * Math.sqrt(1 + d - t - o);
  return { x: (r + s) / c, y: (a + l) / c, z: 0.25 * c, w: (i - n) / c };
}
function es(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Si = 1e-6, ru = 1e-6, $S = 1e-9;
function Sa(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function zS(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const d = 0.5 * (a + s);
    Sa(0, n, i, 1, d) < t ? a = d : s = d;
  }
  return Sa(0, r, o, 1, 0.5 * (a + s));
}
function _o(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function So(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = n.map((p) => -p / i), s = r.map((p) => p / o);
  if (a.reduce((p, g, y) => p + g * s[y], 0) < 0) return n.map(() => 0);
  const l = a.map((p, g) => (p * o + s[g] * i) / (i + o)), d = (p) => Math.sqrt(p.reduce((g, y) => g + y * y, 0)), u = 3 * Math.min(d(a), d(s)), c = d(l);
  return c <= u ? l : l.map((p) => p * u / c);
}
function ag(e, t, n, r) {
  const i = n[r], o = n[r + 1], a = t[r + 1] - t[r], s = i.map((u, c) => o[c] - u);
  let l = s;
  _o(e, r) && (l = So(t, r, n[r - 1].map((u, c) => u - i[c]), s).map((u) => u * a));
  let d = s;
  return _o(e, r + 1) && (d = So(t, r + 1, s.map((u) => -u), n[r + 2].map((u, c) => u - o[c])).map((u) => u * a)), [l.map((u) => u / 3), d.map((u) => -u / 3)];
}
function sg(e, t, n, r, i) {
  const [[o], [a]] = ag(e, t, n.map((s) => [s]), r);
  return Sa(n[r], n[r] + o, n[r + 1] + a, n[r + 1], i);
}
function jS(e, t, n, r) {
  var d, u;
  const i = e.map((c) => c.value);
  let [o, a] = ag(e, t, i, n);
  o = ((d = e[n].handles) == null ? void 0 : d.out) ?? o, a = ((u = e[n + 1].handles) == null ? void 0 : u.in) ?? a;
  const s = i[n], l = i[n + 1];
  return [0, 1, 2].map((c) => Sa(s[c], s[c] + o[c], l[c] + a[c], l[c], r));
}
function Hs([e, t, n, r], [i, o, a, s]) {
  return [
    r * i + e * s + t * a - n * o,
    r * o - e * a + t * s + n * i,
    r * a + e * o - t * i + n * s,
    r * s - e * i - t * o - n * a
  ];
}
function HS(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function _c(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function GS([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function iu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ao(e, t) {
  return GS(Hs([-e[0], -e[1], -e[2], e[3]], t));
}
function Sc(e, t, n) {
  return Hs(e, iu(ao(e, t).map((r) => n * r)));
}
function wc(e, t) {
  const n = HS(e, t);
  if (Math.abs(n) > ru) return n < 0;
  const [r, i, o] = ao(e, t);
  for (const a of [-i, r, o])
    if (Math.abs(a) > ru) return a < 0;
  return !1;
}
function ts(e) {
  const { x: t, y: n, z: r, w: i } = Fi(En(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function ou(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function WS(e, t, n, r) {
  const i = ts(e[n].value);
  let o = ts(e[n + 1].value);
  wc(i, o) && (o = _c(o));
  const a = t[n + 1] - t[n], s = ao(i, o);
  let l = s;
  if (_o(e, n)) {
    let x = ts(e[n - 1].value);
    wc(x, i) && (x = _c(x)), l = So(t, n, ao(i, x), s).map((H) => H * a);
  }
  let d = s;
  if (_o(e, n + 1)) {
    let x = ts(e[n + 2].value);
    wc(o, x) && (x = _c(x)), d = So(t, n + 1, ao(o, i), ao(o, x)).map((H) => H * a);
  }
  const u = Hs(i, iu(l.map((x, H) => 0.5 * (x - s[H])))), c = Hs(o, iu(s.map((x, H) => 0.5 * (x - d[H])))), [p, g, y, _] = Sc(Sc(i, o, r), Sc(u, c, r), 2 * r * (1 - r)), { yawDeg: b, pitchDeg: C, rollDeg: U } = og(_a({ x: p, y: g, z: y, w: _ })), D = e[n].value, T = e[n + 1].value;
  return {
    yaw_deg: ou(b, D.yaw_deg, T.yaw_deg, r),
    pitch_deg: C,
    roll_deg: ou(U, D.roll_deg, T.roll_deg, r)
  };
}
function wa(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function Gs(e) {
  return Math.sqrt(wa(e, e));
}
function Ws(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function lg(e, t) {
  const n = wa(e, t), r = t.map((a, s) => a - n * e[s]), i = Gs(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((a) => a * o);
}
function to(e, t) {
  const n = Gs(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function ns(e, t, n) {
  return to(e, lg(e, t).map((r) => n * r));
}
function xc(e, t) {
  const n = Ws(e[t].value), r = Ws(e[t + 1].value), i = wa(n, r), o = i < 0 && Gs(r.map((l, d) => l - i * n[d])) <= ru;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = lg(n, r);
  const s = Gs(a);
  return [a, a.map((l, d) => Math.cos(s) * l - s * Math.sin(s) * n[d]), o];
}
function KS(e, t, n, r) {
  const i = Ws(e[n].value), o = Ws(e[n + 1].value), [a, s, l] = xc(e, n);
  let d = a, u = s;
  const c = t[n + 1] - t[n];
  _o(e, n) && (d = So(t, n, xc(e, n - 1)[1].map((D) => -D), d).map((D) => D * c)), _o(e, n + 1) && (u = So(t, n + 1, u.map((D) => -D), xc(e, n + 1)[0]).map((D) => D * c));
  let p, g, y;
  if (l) {
    const D = Math.PI, T = Sa(0, wa(d, a) / D / 3, D - wa(u, s) / D / 3, D, r);
    [p, g, y] = to(i, a.map((x) => T * x / D));
  } else {
    const D = ns(to(i, d.map((H) => H / 3)), to(o, u.map((H) => -H / 3)), r), T = ns(to(i, d.map((H) => r * H / 3)), D, r), x = ns(D, to(o, u.map((H) => -(1 - r) * H / 3)), r);
    [p, g, y] = ns(T, x, r);
  }
  const _ = Math.hypot(p, y), b = e[n].value.yaw_deg, C = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= $S ? b + (C - b) * r : ou(Math.atan2(p, y) * 180 / Math.PI, b, C, r), pitch_deg: Math.atan2(g, _) * 180 / Math.PI };
}
function BS(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = sg(e, t, e.map((a) => a.value[o]), n, r);
  return i;
}
function US(e, t, n, r) {
  return sg(e, t, e.map((i) => i.value), n, r);
}
const YS = { position: jS, rotation: WS, direction: KS, size: BS };
function Rt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return es(e[t].value);
  if (n <= r[0].frame + Si) return es(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - Si) return es(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + Si; ) o += 1;
  const a = r[o];
  if (Math.abs(n - a.frame) <= Si || a.easing === "hold") return es(a.value);
  const s = r.map((d) => d.frame), l = zS(a.easing, (n - s[o]) / (s[o + 1] - s[o]));
  return (YS[t] ?? US)(r, s, o, l);
}
function au(e) {
  return Math.min(179, Math.max(0.1, e));
}
function qS(e) {
  return Math.min(1, Math.max(0, e));
}
function cg(e) {
  return Math.max(1e-6, e);
}
function ug(e, t) {
  return t - (e.start - e.in);
}
function No(e, t) {
  return t >= e.start - Si && (e.duration === null || t < e.start + e.duration - Si);
}
function pd(e, t) {
  return {
    position: Rt(e, "position", t),
    ...Rt(e, "rotation", t),
    hFOV_deg: au(Rt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Ml(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = ug(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : pd(r, n),
    scene: {
      active: i.visible && No(i.clip, n),
      clip_frame: o,
      position: Rt(i, "position", o),
      ...Rt(i, "rotation", o),
      scale: cg(Rt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => Ii(a, n))
  };
}
function XS(e, t) {
  if (e.placement === "world")
    return {
      position: Rt(e, "position", t),
      ...Rt(e, "rotation", t),
      scale: cg(Rt(e, "scale", t))
    };
  const n = Rt(e, "size", t);
  return {
    ...Rt(e, "direction", t),
    roll_deg: Rt(e, "roll", t),
    hFOV_deg: au(n.hFOV_deg),
    vFOV_deg: au(n.vFOV_deg)
  };
}
function Ii(e, t) {
  const n = ug(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && No(e.clip, t),
    clip_frame: n,
    ...XS(e, n),
    opacity: qS(Rt(e, "opacity", n))
  };
}
const JS = 2, ZS = ["sky", "world"], su = ["perspective", "erp"], QS = ["input", "output", "temp"], dg = [0.42, 0, 0.58, 1], fg = 1, hd = 1e3, lu = 1e7, md = lu;
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Kt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function gd(e, t) {
  const n = Kt(e, t);
  return n !== null && n > 0 ? n : t;
}
function Cn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Pl(e) {
  const t = Kt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function vs(e) {
  const t = Pl(e);
  return t === null ? null : Cn(t, -lu, lu);
}
function Ao(e) {
  const t = gd(e, null);
  return t === null ? null : Cn(t, fg, hd);
}
function pg(e) {
  const t = Pl(e);
  return t !== null && t >= 1 ? Math.min(t, md) : null;
}
function xa(e, t) {
  return typeof e == "boolean" ? e : t;
}
function hg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Kt(n, null));
  return t.includes(null) ? null : t;
}
function mg(e) {
  return hg(e) || [0, 0, 0];
}
function gg(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Kt(t.yaw_deg, 0),
    pitch_deg: Cn(Kt(t.pitch_deg, 0), -90, 90),
    roll_deg: Kt(t.roll_deg, 0)
  };
}
function ew(e) {
  return Cn(Kt(e, 90), 0.1, 179);
}
function tw(e) {
  return gd(e, 1);
}
function nw(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Kt(t.yaw_deg, 0),
    pitch_deg: Cn(Kt(t.pitch_deg, 0), -90, 90)
  };
}
function rw(e) {
  return Kt(e, 0);
}
function iw(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: Cn(Kt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Cn(Kt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function yg(e) {
  return Cn(Kt(e, 1), 0, 1);
}
const yd = [["position", mg], ["rotation", gg], ["fov", ew]], Nl = [["position", mg], ["rotation", gg], ["scale", tw]], bd = [["direction", nw], ["roll", rw], ["size", iw], ["opacity", yg]], vd = [...Nl, ["opacity", yg]];
function ow(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Kt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...dg];
}
function aw(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = hg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function sw(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = vs(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: ow(i.easing) }, s = n ? aw(i.handles) : null;
    s && (a.handles = s), r.set(o, a);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function _d(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = tn(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: sw(o.keyframes, i, r === "position") };
  }
  return n;
}
function bg(e) {
  const t = tn(e) ? e : {}, n = vs(t.start), r = vs(t.in), i = vs(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function lw(e) {
  const t = tn(e) ? e : {}, n = Cn(Kt(t.x0, 0), 0, 1), r = Cn(Kt(t.y0, 0), 0, 1), i = Cn(Kt(t.x1, 1), 0, 1), o = Cn(Kt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function cw(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: QS.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function uw(e) {
  const t = cw(e.source);
  if (!t) return null;
  const n = ZS.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: bg(e.clip),
    visible: xa(e.visible, !0),
    locked: xa(e.locked, !1),
    crop: lw(e.crop),
    ..._d(e, r ? vd : bd)
  };
  return r || (i.z_index = Pl(e.z_index) ?? 0), i;
}
function dw(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = tn(o) ? uw(o) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(a);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !r.has(o.id) ? r.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; r.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, r.add(o.id);
    }
  return t;
}
function vg(e) {
  if (!tn(e)) return null;
  const t = su.includes(e.projection) ? e.projection : su[0];
  return { aspect: gd(e.aspect, 1), projection: t, visible: xa(e.visible, !0), ..._d(e, yd) };
}
function Sd() {
  return vg({});
}
function Ks(e) {
  const t = tn(e.timeline) ? e.timeline : {}, n = tn(e.scene) ? e.scene : {};
  return {
    version: JS,
    timeline: {
      fps: Ao(t.fps) ?? 24,
      length: pg(t.length)
    },
    camera: vg(e.camera),
    scene: { clip: bg(n.clip), visible: xa(n.visible, !0), ..._d(n, Nl) },
    stickers: dw(e.stickers),
    painting: Po(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: xa(e.painting_visible, !0)
  };
}
function fw(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!tn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function pw(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return null;
  const n = Cn(Kt(t.hFOV_deg, 90), 1, 179), r = Cn(Kt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function hw(e) {
  const t = tn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return n.sort((r, i) => Kt(r.z_index, 0) - Kt(i.z_index, 0)), Ks({
    camera: pw(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: fw(r, t),
      visible: r.visible,
      locked: r.locked,
      crop: r.crop,
      z_index: r.z_index,
      direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg } },
      roll: { value: r.rot_deg },
      size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function vr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ks({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!tn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? hw(t) : Ks(t);
}
const kc = {
  state: { painting_visible: !0 },
  camera: { projection: su[0], visible: !0 },
  scene: { visible: !0 }
};
function Mc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function cu(e) {
  return JSON.stringify({
    ...Mc(e, kc.state),
    camera: e.camera && Mc(e.camera, kc.camera),
    scene: Mc(e.scene, kc.scene)
  });
}
function Pc(e, t, n, r, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: n(r + s.frame) - i }))
    };
  return o;
}
function Bp(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function ka(e, t) {
  const n = Ao(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (s) => Pl(s * r), { length: o } = e.timeline, a = Bp(e.scene.clip, i);
  return Ks({
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Pc(e.camera, yd, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...Pc(e.scene, Nl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: d, newAnchor: u } = Bp(s.clip, i), c = s.placement === "world" ? vd : bd;
      return { ...s, clip: l, ...Pc(s, c, i, d, u) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Nc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function _g(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Sg(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Si);
}
function wg(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? _g(e.keyframes[r - 1].easing) : [...dg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function pn(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Nc(i.value, r);
    return;
  }
  const o = Sg(i, n);
  o ? o.value = Nc(o.value, r) : wg(i, n, Nc(Rt(e, t, n), r));
}
function Co(e) {
  return e.placement === "world" ? vd.map(([t]) => t) : e.placement === "sky" ? bd.map(([t]) => t) : (e.clip ? Nl : yd).map(([t]) => t);
}
function mw(e, t) {
  for (const n of Co(e))
    Sg(e[n], t) || wg(e[n], t, Rt(e, n, t));
}
function gw(e) {
  const t = Co(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function Ac(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function yw(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function bw(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Rt(e, o, r);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function vw(e, t, n, r, i) {
  r = Math.max(r, Math.min(0, i - Math.min(...n)));
  const o = new Set(n);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((u) => o.has(u.frame)).map((u) => ({ ...u, frame: u.frame + r })), d = new Set(l.map((u) => u.frame));
    s.keyframes = [
      ...s.keyframes.filter((u) => !o.has(u.frame) && !d.has(u.frame)),
      ...l
    ].sort((u, c) => u.frame - c.frame);
  }
  return r;
}
function xg(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => n.length > 1 ? a.frame >= r && a.frame < i : a.frame === r));
}
function _w(e, t, n) {
  const r = xg(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function Sw(e, t, n, r) {
  for (const i of xg(e, t, n)) i.easing = _g(r);
}
function ww(e, t) {
  e.start = Math.max(0, e.start + t);
}
function xw(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function kw(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Mw(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Bs(e) {
  return Co(e).map((t) => e[t]);
}
function Pw(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? Bs(e.camera).some((r) => r.keyframes.length > 0) : kg(e, { camera: n });
}
function Us(e) {
  return Bs(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Mw(e.clip);
}
function kg(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Us);
}
const Nw = 1e5;
function Mg(e, { minimum: t, frames: n = 0, openClip: r = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, n);
  if (i && e.camera)
    for (const a of Bs(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === r ? s.start + 1 : s.start + s.duration);
    for (const l of Bs(a))
      for (const d of l.keyframes) o = Math.max(o, s.start - s.in + d.frame + 1);
  }
  return Number.isFinite(o) ? o : Nw;
}
function Aw(e) {
  return e > 0 ? Ao(Math.min(e, hd)) : null;
}
function Cw(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : pg(Math.max(1, Math.min(e, md)));
}
const Cc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Iw = 2e3;
function Ew(e, t, n = 56) {
  const r = Cc.find((o) => o * t >= n) || Cc[Cc.length - 1], i = [];
  for (let o = 0; o < e && i.length < Iw; o += r) i.push(o);
  return i;
}
function Ow(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let rs = { text: null, parsed: null };
function In(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ys(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Fw({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: In(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Po(null),
    painting_layer: null,
    ui_settings: Ys(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Pg(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function Tw(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function Dw(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Lw(e) {
  return Array.isArray(e) ? e.map((t) => fd(t)) : [];
}
function Vw(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((a) => String((a == null ? void 0 : a.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Ng(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Fw(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (rs.text === i ? o = rs.parsed : (o = JSON.parse(i), rs = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const a = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, s = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Tw(o.assets),
      stickers: Dw(o.stickers),
      shots: Lw(o.shots),
      painting: Po(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Ys(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return a && (s.ui_settings = Ys({ ...s.ui_settings, ...a })), s.output_preset = Pg(
      n.outputPreset,
      Number(s.output_preset || r.output_preset)
    ), s.bg_color = String(n.backgroundColor || s.bg_color || r.bg_color), s.coverage = In(n.coverage), delete s.editor_history, s;
  } catch {
    return rs = { text: i, parsed: null }, r;
  }
}
function Rw(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function $w(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function zw(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Ag(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, d = Ao(t.fps);
  let u;
  try {
    u = vr(e);
  } catch {
    u = vr(null);
  }
  d && d !== u.timeline.fps && (u = ka(u, d));
  const c = l && u.camera === null;
  if (c && (u = { ...u, camera: Sd() }), s) {
    let p = vr(s);
    d && d !== p.timeline.fps && (p = ka(p, d)), u = { ...p, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...c ? { default_camera: !0 } : {},
    coverage: In(i),
    bg_color: r,
    output_preset: Pg(n),
    ui_settings: Ys(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function jw(e, t) {
  e.cutout_state && (e.cutout_state = ka(e.cutout_state, t));
  const n = ka(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of Co(o)) o[s].keyframes = a[s].keyframes;
    }
}
function wd(e, t) {
  const n = Ii(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const Hw = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Up(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Gw(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[Hw[n]].keyframes.length));
}
function Cg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = Up(n, ["yaw_deg", "pitch_deg"]), o = Up(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && pn(e, "direction", r, i), n.rot_deg !== void 0 && pn(e, "roll", r, n.rot_deg), Object.keys(o).length && pn(e, "size", r, o);
}
const Al = ["position_x", "position_y", "position_z"], Cl = "camera";
function Ig(e, t) {
  const n = pd(e, t);
  return fd({
    id: Cl,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: LS(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function Ww(e) {
  return vr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Dt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Kw(e) {
  return e - 360 * Math.round(e / 360);
}
function Bw(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + Kw(n[o] - r[o]));
  Object.keys(i).length && pn(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && pn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * wt * 0.5) / Math.tan(n.vFOV_deg * wt * 0.5)), n.position.some((o, a) => o !== r.position[a]) && pn(e, "position", t, [...n.position]);
}
function Uw(e, t) {
  const n = Rt(e, "position", t), r = Rt(e, "rotation", t);
  return {
    ...Object.fromEntries(Al.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Rt(e, "fov", t)
  };
}
function Yw(e, t, n, r) {
  const i = Al.indexOf(n);
  if (i >= 0) {
    const o = Rt(e, "position", t);
    o[i] = r, pn(e, "position", t, o);
  } else n === "hFOV_deg" ? pn(e, "fov", t, r) : pn(e, "rotation", t, { [n]: r });
}
function qw(e, t, n) {
  pn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function Xw(e, t) {
  const n = Ii(e, t);
  return {
    ...Object.fromEntries(Al.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function Jw(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = Al.indexOf(n);
  if (o >= 0) {
    const a = Rt(e, "position", i);
    a[o] = r, pn(e, "position", i, a);
  } else n === "scale" ? pn(e, "scale", i, r) : n === "opacity" ? pn(e, "opacity", i, r / 100) : pn(e, "rotation", i, { [n]: r });
}
function Zw(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && pn(e, i, r, n[i]);
}
function Qw(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function ex(e, t, n) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...n.position], keyframes: [] },
    rotation: { value: { ...n.rotation }, keyframes: [] },
    scale: { value: n.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function _s(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Eg(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function xd(e, t, n, r) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg }, keyframes: [] },
    roll: { value: n.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: r
  };
}
function tx(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Dt(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function uu(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Og(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Fg(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Tg(e) {
  e.default_camera && JSON.stringify(vr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Sd()) && delete e.default_camera;
}
function Dg(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = vr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(Sd()) && (n.camera = null), cu(n);
}
function Lg(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = vr(n);
    if (cu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && cu(ka(i, o)) === t;
  } catch {
    return !1;
  }
}
const Ic = 0.15, nx = 0.01, rx = 1e-3, ix = 0.05, ox = 4, Yp = 250, ax = 16, ir = 1, sx = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Vn(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function _r(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Il(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Io(e, t, n = 0) {
  const r = En(e, t, n), i = _r(r, 2);
  return { right: _r(r, 0), up: _r(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function lx(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function du(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function cx(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : du(e, "3dof", n);
}
function ux(e) {
  return Io(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function dx(e) {
  return Vn(e.position, Io(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ei(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ua(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function kd(e, t) {
  return ua(ei(t, e.position), Io(e.yaw_deg, e.pitch_deg).forward);
}
function Md(e) {
  return Math.max(e, 1e-6) * ix;
}
function fu(e, t, n = null, r = ir) {
  if (t) return t;
  const i = Md(r);
  if (n && kd(e, n) > 0) {
    const o = ei(n, e.position), a = Math.hypot(...o);
    return a >= i ? n : Vn(e.position, o, i / a);
  }
  return Vn(e.position, Io(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Vg(e, t = ir) {
  return Math.max(e.distance, Md(t));
}
function Rg(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > ox ? !1 : t.time - e.time < Yp || e.cost > ax && t.time - e.wheelTime < Yp;
}
function Pd(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: r, tanY: r * n / t };
}
function $g(e, t, n, r, i = dx(e)) {
  const o = e.roll_deg ?? 0, [a, s] = fx(t, n, o), l = Dt(e.yaw_deg + a / r * 360), d = Fe(e.pitch_deg - s / r * 360, -89.9, 89.9), u = En(e.yaw_deg, e.pitch_deg, o), c = En(l, d, o), p = ei(e.position, i), g = [0, 1, 2].map((_) => ua(_r(u, _), p)), y = { ...e, yaw_deg: l, pitch_deg: d, position: Vn(i, Il(c, g)) };
  return { ...y, distance: kd(y, i) };
}
function fx(e, t, n) {
  const r = Math.cos(n * wt), i = Math.sin(n * wt);
  return [e * r + t * i, t * r - e * i];
}
function zg(e, t, n, r, i, o = e.distance) {
  const { right: a, up: s } = ux(e), l = 2 * o * Pd(e, r, i).tanY / i;
  return { ...e, position: Vn(Vn(e.position, a, -t * l), s, n * l), distance: o };
}
function jg(e, t, n, r = ir) {
  const i = ei(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const a = Math.max(r, 1e-6), s = a * nx, l = n > 0 ? Math.min(Math.max(o * Ic, s), o - a * rx) : -Math.max(o * Ic / (1 - Ic), s);
  if (n > 0 && l <= 0) return e;
  const d = { ...e, position: Vn(e.position, i, l / o) };
  return { ...d, distance: Math.max(kd(d, t), Md(r)) };
}
function Hg(e, t, n, r) {
  const { tanX: i, tanY: o } = Pd(e, n, r), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = Io(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Vn(t.center, l, -s), distance: s };
}
function Nd(e, t, n, r = null) {
  return Gg({
    quaternion: Fi(En(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Pd(e, t, n).tanY) * Qt,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Gg(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: ir }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: s * 2
  };
}
function Ma(e, t, n, r) {
  const { right: i, up: o, forward: a } = Wg(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const d = Math.tan(e.fovY_deg * 0.5 * wt), u = d * e.aspect, c = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], p = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: n * 0.5 * (1 + c / l / u), y: r * 0.5 * (1 - p / l / d), z: l };
}
function Wg(e) {
  const t = _a(e.quaternion), n = _r(t, 2);
  return { right: _r(t, 0), up: _r(t, 1), forward: n.map((r) => -r) };
}
function qp(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((o) => o ? n(o) : null) };
}
function px({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Kg(e, t) {
  if (!e || !t.active) return null;
  const n = gx(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: pu(t),
    itemQuaternion: e.kind === "splat" ? sx : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function hx(e, t, n) {
  const r = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], a = Kg(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function mx(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function gx(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function pu(e) {
  return {
    position: [...e.position],
    quaternion: Fi(En(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function hu(e, t) {
  return Vn(e.position, Il(En(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function mu(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function gu({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function yu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), r = t.map((o, a) => (o + n[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function yx(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...gu(t).map((o) => hu(e.scene, o)));
  for (const o of n) i.push(...Ad(o));
  for (const { box: o, value: a } of r) i.push(...gu(o).map((s) => hu(a, s)));
  return i;
}
function bx(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: Fi(En(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: En(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Ad(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => Vn(e.position, Il(e.rotation, [r, i, 0])));
}
function vx(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? yu(Ad(i)) : o != null && o.box ? yu(gu(mu(o.kind, o.box)).map((a) => hu(r, a))) : { center: [...r.position], radius: r.scale };
}
const _x = 2, Sx = 0.5, wx = 30;
function Bg(e, t) {
  const n = ei(t, e), r = Math.atan2(n[0], -n[2]) * Qt, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * Qt;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function xx(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * Sx : _x, o = t ? [...t] : Vn(e.position, Io(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...ei(o, e.position)), s = a > 0 ? Bg(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(wx * 0.5 * wt);
  return { position: o, rotation: s, scale: l };
}
function Xp(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function kx(e) {
  return [0, 1, 2].map((t) => _r(e, t));
}
function Jp(e, t, n, r) {
  if (e === "translate") return { position: Vn(t.position, ei(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * Cx(n.scale, r.scale) / n.scale };
  const i = Xp(_a(r.quaternion), kx(_a(n.quaternion))), o = Xp(i, En(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = og(o);
  return Math.abs(s) <= Mx ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Px(o, t.yaw_deg) } };
}
const Mx = 89.9;
function Px(e, t) {
  const n = _r(e, 0), r = _r(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * Qt + 0;
}
const Nx = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Ax(e, t, n, r, i) {
  if (!Ma(e, t, r, i)) return null;
  const { right: o, up: a, forward: s } = Wg(e), l = ei(t, e.position), d = ua(l, o), u = ua(l, a), c = ua(l, s), p = Math.tan(e.fovY_deg * 0.5 * wt), g = p * e.aspect, y = Math.hypot(d, u, c) * Nx[n] * Math.min(1.9 * p, 7) / 4;
  if (!(c > y)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const _ = (T) => {
    const x = y * Math.sqrt(T * T + c * c - y * y);
    return [(T * c - x) / (c * c - y * y), (T * c + x) / (c * c - y * y)];
  }, [b, C] = _(d), [U, D] = _(u);
  return {
    minX: r * 0.5 * (1 + b / g),
    maxX: r * 0.5 * (1 + C / g),
    minY: i * 0.5 * (1 - D / p),
    maxY: i * 0.5 * (1 - U / p)
  };
}
function Cx(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function Ix(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Ug(e, t) {
  const n = En(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = r / e.aspect, o = (d, u, c) => Vn(e.position, Il(n, [d, u, c])), a = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], s = a.map((d) => [e.position, d]);
  a.forEach((d, u) => s.push([d, a[(u + 1) % 4]]));
  const l = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function Ex(e, t, n, r, i, o = 6) {
  return t.some(([a, s]) => {
    const l = Ma(e, a, r, i), d = Ma(e, s, r, i);
    if (!l || !d) return !1;
    const u = d.x - l.x, c = d.y - l.y, p = Fe(((n.x - l.x) * u + (n.y - l.y) * c) / Math.max(u * u + c * c, 1e-12), 0, 1);
    return Math.hypot(l.x + u * p - n.x, l.y + c * p - n.y) <= o;
  });
}
function Ox(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function Fx(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Rt(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Rt(r, "position", l);
  });
}
function Tx(e, t, n, r, i) {
  const o = Math.max(0, e) * n, a = Math.max(0, t) * n, s = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const Yg = 0.28;
function qg(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: Fi(En(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * Qt,
    aspect: r
  };
}
function da(e) {
  const t = Qr(e);
  return {
    quaternion: Fi(En(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Xg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = dd(n, r), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * Qt,
      vFOV_deg: 2 * Math.atan(o / r) * Qt
    }
  };
}
function Jg(e, t, n) {
  const [[r, i, o], [a, s, l], [d, u, c]] = _a(e.quaternion), p = Math.tan(e.fovY_deg * 0.5 * wt), g = p * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(y, _ = 1e-4) {
      const b = RS(y), C = r * b.x + a * b.y + d * b.z, U = i * b.x + s * b.y + u * b.z, D = -(o * b.x + l * b.y + c * b.z), T = Math.max(D, _);
      return {
        x: t * 0.5 * (1 + C / T / g),
        y: n * 0.5 * (1 - U / T / p),
        z: D
      };
    },
    // The unit direction seen at the point (x, y).
    ray(y, _) {
      const b = (y / t * 2 - 1) * g, C = (1 - _ / n * 2) * p;
      return ld(bs({
        x: r * b + i * C - o,
        y: a * b + s * C - l,
        z: d * b + u * C - c
      }));
    }
  };
}
function Dx(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = Ml(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const d = o.stickers[l];
    if (s.placement !== "sky") return;
    const u = s.source.kind === "port" && !s.visible;
    if (!d.active && !u) return;
    const c = n(s);
    if (!c) return;
    const p = Math.tan(d.hFOV_deg * 0.5 * wt), g = Math.tan(d.vFOV_deg * 0.5 * wt), { crop: y } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: c.media,
      revision: c.revision,
      source: c.source,
      opacity: u ? Yg : d.opacity,
      zIndex: r(s),
      quaternion: Fi(En(d.yaw_deg, d.pitch_deg, d.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * y.x0 - 1) * p,
        x1: (2 * y.x1 - 1) * p,
        y0: (1 - 2 * y.y1) * g,
        y1: (1 - 2 * y.y0) * g
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function Zg(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of n)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return Dx(e, t, {
    media: (s) => {
      const l = a.get(s.id);
      return l ? r(l) : null;
    },
    zIndex: (s) => {
      var l;
      return Number(((l = a.get(s.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function Lx(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Vx(e, t, n, { media: r, evaluated: i = Ml(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of n)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const d = i.stickers[l];
    if (s.placement !== "world" || !d.active) return;
    const u = o.get(s.id), c = u ? r(u) : null;
    if (!c) return;
    const { width: p, height: g } = Lx(c.media), y = bx(d, s.crop, p, g);
    y && a.push({
      id: s.id,
      media: c.media,
      revision: c.revision,
      source: c.source,
      opacity: d.opacity,
      position: y.position,
      quaternion: y.quaternion,
      rotation: y.rotation,
      width: y.width,
      height: y.height,
      crop: s.crop
    });
  }), a;
}
function Rx({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, l = !1, d = 0;
  const u = () => {
    s = qm(a.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, c = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(y) {
      return s && !c.lost ? s.render(y) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(y) {
      return s && !c.lost ? s.renderUnwrap(y) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(y, _) {
      return s && !c.lost ? s.resize(y, _) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(y, _) {
      s && !c.lost && s.clear(y, _);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(y) {
      return s ? s.sceneBox(y) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(y, _, b, C, U) {
      return s && !c.lost ? s.pick(y, _, b, C, U) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(y, _, b, C, U) {
      return s && !c.lost ? s.pickSurface(y, _, b, C, U) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(y, _, b, C, U) {
      return s && !c.lost ? s.pickSticker(y, _, b, C, U) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(y, _, b, C, U, D) {
      return s && !c.lost ? s.gizmoPointer(y, _, b, C, U, D) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (s ? s.contentRevision() : 0);
    },
    dispose() {
      l = !0, e.removeEventListener("webglcontextlost", p), e.removeEventListener("webglcontextrestored", g), s == null || s.dispose(), s = null;
    }
  };
  function p(y) {
    y.preventDefault(), !(l || c.lost) && (c.lost = !0, c.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function g() {
    l || !c.lost || queueMicrotask(() => {
      l || !c.lost || (s && (d += s.contentRevision() + 1), s == null || s.dispose(), s = null, c.lost = !1, a && (u(), c.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", p), e.addEventListener("webglcontextrestored", g), o().then((y) => {
    l || (a = y, !c.lost && (u(), c.ready = !0, t()));
  }).catch((y) => {
    console.error("[PanoramaStickers] three.js view is unavailable", y), c.failed = !0, n();
  }), c;
}
const Qg = "3D view unavailable. Check the browser console.";
function qs(e, t, n) {
  return qg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function $x(e) {
  let t = null, n = !1, r = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || n || r || (n = !0, e().then((a) => {
      if (n = !1, !i.size) {
        a.dispose();
        return;
      }
      t = a, i.forEach((s) => s.onChange());
    }).catch((a) => {
      n = !1, i.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", a), i.forEach((s) => s.onChange()));
    }));
  }
  return function(s) {
    const l = { onChange: s };
    let d = !1;
    return i.add(l), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(u) {
        return d ? null : (o(), t ? t.render({ ...u, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        d || (d = !0, i.delete(l), t == null || t.release(l), !i.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const e0 = $x(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => qm(e.createThreeView({ createCanvas: () => mn({ label: "three.node" }) }), "node"))
), ti = ["erp_image", "bg_erp", "bg_media"], Ss = ["source"], Cd = ["sticker_image", "sticker"], t0 = ["scene"], zx = {
  background: [...ti, ...Ss],
  "external-sticker": [...Cd, ...Ss],
  scene: [...t0, ...Ss]
};
function n0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Id(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = n0(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function jx(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function r0(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((s) => String(s == null ? void 0 : s.id) === n[o]);
    if (!a || o === n.length - 1) return { graph: r, entry: a };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function Hx(e, t) {
  const { graph: n, entry: r } = r0(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const s = n0(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const i0 = [...ti, ...Cd, ...t0, ...Ss], Gx = 256, no = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new WeakMap();
let o0 = () => null;
function a0(e) {
  return Ec.has(e) || Ec.set(e, JSON.stringify(e)), Ec.get(e);
}
function Wx(e) {
  o0 = e;
}
function Xs(e, t) {
  const n = a0(e);
  no.delete(n), no.set(n, t), no.size > Gx && no.delete(no.keys().next().value);
}
function an(e, t) {
  var o;
  const n = e ? o0(e) : null;
  if (!n) return !0;
  const r = Id(e);
  let i = no.get(a0(n));
  if (i)
    Xs(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => i0.includes(a == null ? void 0 : a.name)))) return !0;
    Xs(n, r), i = r;
  }
  return zx[t].every((a) => i[a] === r[a]);
}
const Js = /* @__PURE__ */ new WeakSet();
async function bu(e, t) {
  if (Js.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Js.add(e), n.ok && r !== void 0 ? r : null;
}
function s0(e, t) {
  var o, a, s, l, d;
  const n = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: r } = r0(n, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((d = r == null ? void 0 : r.inputs) != null && d.some((u) => i0.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: Hx(n, t) };
}
const ws = /* @__PURE__ */ new Map();
function Kx(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && ws.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await bu(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = s0(i, o);
        a && Xs(a.output, a.inputs);
      }
    });
}
const Bx = 5;
function Ux(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Bx}`, r = bu(e, `/jobs?${n}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, bu(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var d, u, c, p;
      const l = String(a.id);
      for (const { id: g } of await r) {
        if (!s()) return null;
        const y = await o(g);
        if ((d = y == null ? void 0 : y.outputs) != null && d[l])
          return ((p = (c = (u = y.workflow) == null ? void 0 : u.prompt) == null ? void 0 : c[l]) == null ? void 0 : p.class_type) !== a.comfyClass ? null : s0(y, l);
      }
      return null;
    }
  };
}
function Yx(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let Xi = null;
async function qx(e, t, n) {
  var s;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || Js.has(n) || (s = ws.get(i)) != null && s.has(r) || Yx(t)) return null;
  (Xi == null ? void 0 : Xi.workflowId) !== i && (Xi = { workflowId: i, history: Ux(n, i) }, queueMicrotask(() => {
    Xi = null;
  }));
  const a = await Xi.history.lastNodeOutput(e, o);
  return o() ? a ? (Xs(a.output, a.inputs), t.nodeOutputs[r] = a.output, a.output) : (Js.has(n) || ws.set(i, (ws.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Zp(e, t, n, r = ti) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((a == null ? void 0 : a.name) || ""));
}
const Qp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function xs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Qp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Qp.test(String((e == null ? void 0 : e.filename) || ""));
}
const Oc = /* @__PURE__ */ new WeakMap();
function Xx(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function vu(e) {
  return Xx(e) ? (Oc.has(e) || Oc.set(e, Math.random().toString(36).slice(2, 10)), Oc.get(e)) : "run";
}
function l0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Jx(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = n(o, s);
      (l == null ? void 0 : l.id) == null || r.has(String(l.id)) || (r.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((d, u) => u)));
    }
  };
  return i(e, t), r;
}
function Ed(e, t = [], n = null) {
  var i;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const d = r(l);
          if (d && (/\.mp4(\?|$)/i.test(d) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return d;
        }
  }
  return "";
}
function Zx({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = xl(e, "looping-preview");
  if (!r || !t) return null;
  const i = typeof n == "function" ? n : () => {
  };
  let o = !1, a = 0;
  const s = typeof r.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || r.paused || r.ended || (a = r.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, d = () => {
    o || i();
  }, u = () => i(), c = () => {
    i(), l();
  }, p = () => i();
  let g = !1;
  const y = () => {
    g = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", d, { once: !0 }), r.addEventListener("loadeddata", d, { once: !0 }), s || r.addEventListener("timeupdate", u), r.addEventListener("play", c), r.addEventListener("pause", p), r.addEventListener("error", y), r.src = t, r.load();
  const _ = () => {
    o || g || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, b = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var U, D;
      o || (o = !0, a && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(a), a = 0), r.removeEventListener("loadedmetadata", d), r.removeEventListener("loadeddata", d), r.removeEventListener("timeupdate", u), r.removeEventListener("play", c), r.removeEventListener("pause", p), r.removeEventListener("error", y), r.pause(), (U = r.removeAttribute) == null || U.call(r, "src"), (D = r.load) == null || D.call(r));
    },
    failed: () => g,
    play: _,
    pause: b,
    toggle() {
      r.paused ? _() : b();
    },
    get playing() {
      return !o && !r.paused && !r.ended;
    }
  };
}
function pi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function Qx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function eh(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (r = s.outputNode);
    } catch {
    }
  return !r && n != null && (r = Qx(e == null ? void 0 : e.graph, n)), r;
}
function ek(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function tk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function nk(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function c0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (x) => {
    if (!x) return "";
    if (typeof x == "string") return String(x || "").trim();
    if (Array.isArray(x)) {
      if (x.length === 0) return "";
      if (x.length === 1) return i(x[0]);
      const H = String(x[0] || "").trim();
      if (H)
        return pi(t, {
          filename: H,
          subfolder: String(x[1] || "").trim(),
          type: String(x[2] || "output").trim() || "output"
        });
      for (const z of x) {
        const ee = i(z);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (x == null ? void 0 : x.src) == "string" && x.src ? x.src : typeof (x == null ? void 0 : x.url) == "string" && x.url ? x.url : pi(t, x);
  }, o = (x) => {
    if (!x || typeof x != "object") return "";
    const H = String(x.type || "").trim().toLowerCase();
    if (H === "dataurl") return String(x.value || "");
    if (H !== "comfy_image") return "";
    const z = String(x.filename || "").trim();
    return z ? pi(t, {
      filename: z,
      subfolder: String(x.subfolder || ""),
      type: String(x.storage || "input")
    }) : "";
  }, a = (x) => {
    const H = e == null ? void 0 : e.nodeOutputs;
    if (!H || x == null) return null;
    const z = String(x);
    return H instanceof Map ? H.get(x) || H.get(z) || H.get(Number(z)) || null : H[x] || H[z] || null;
  }, s = (x, H) => {
    var ee;
    const z = a(x == null ? void 0 : x.id);
    return Array.isArray((ee = z == null ? void 0 : z.ui) == null ? void 0 : ee[H]) ? z.ui[H] : Array.isArray(z == null ? void 0 : z[H]) ? z[H] : [];
  }, l = (x, H) => {
    const z = a(x == null ? void 0 : x.id);
    return z != null && z.ui && Object.prototype.hasOwnProperty.call(z.ui, H) ? z.ui[H] : z && Object.prototype.hasOwnProperty.call(z, H) ? z[H] : null;
  }, d = (x, H) => {
    const z = l(x, "pano_sticker_input_state_hash"), ee = Array.isArray(z) ? z[0] : z;
    return String(ee ?? "").trim() || nk(H);
  }, u = (x) => {
    const H = [], z = /* @__PURE__ */ new Set();
    for (const ee of x || []) {
      const re = i(ee);
      !re || z.has(re) || (z.add(re), H.push(re));
    }
    return H;
  }, c = (x, H) => {
    var re;
    const z = [];
    Array.isArray(x == null ? void 0 : x.images) && x.images.length && z.push(x.images), Array.isArray((re = x == null ? void 0 : x.ui) == null ? void 0 : re.images) && x.ui.images.length && z.push(x.ui.images);
    const ee = [];
    for (const B of z)
      H >= 0 && H < B.length && ee.push(B[H]), ee.push(...B);
    return ee;
  }, p = (x, H) => {
    var W;
    const z = String(H || "").trim();
    if (!z) return { src: "", sourceType: "", inputName: "" };
    const re = (Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : []).findIndex((de) => String((de == null ? void 0 : de.name) || "") === z);
    if (re < 0) return { src: "", sourceType: "", inputName: z };
    const B = x.graph ? x.getInputLink(re) : null;
    if ((B == null ? void 0 : B.origin_id) == null) return { src: "", sourceType: "", inputName: z };
    const G = B.origin_id, Y = eh(x, re, G);
    if (!Y) return { src: "", sourceType: "", inputName: z };
    const le = Number(B.origin_slot ?? 0);
    let ve = [];
    try {
      ve = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(Y) || [] : [];
    } catch {
      ve = [];
    }
    if (Array.isArray(ve) && ve.length) {
      const de = [];
      le >= 0 && le < ve.length && de.push(ve[le]), de.push(...ve);
      const fe = u(de.filter((we) => !xs(we)));
      if (fe.length)
        return { src: fe[0], srcCandidates: fe, sourceType: "appNodeImageUrls", inputName: z };
    }
    const ge = a((Y == null ? void 0 : Y.id) ?? G), he = u(c(ge, le).filter((de) => !xs(de))).map((de) => `${de}&pano_src=${vu(ge)}`);
    if (he.length)
      return { src: he[0], srcCandidates: he, sourceType: "nodeOutputs", inputName: z };
    const Z = Array.isArray(Y == null ? void 0 : Y.imgs) ? Y.imgs : [];
    if (Z.length) {
      const de = [];
      le >= 0 && le < Z.length && de.push(Z[le]), de.push(...Z);
      const fe = u(de);
      if (fe.length)
        return { src: fe[0], srcCandidates: fe, sourceType: "nodeImgs", inputName: z };
    }
    const E = (W = Y == null ? void 0 : Y.widgets) == null ? void 0 : W.find((de) => String((de == null ? void 0 : de.name) || "").toLowerCase() === "image");
    if (E) {
      let de = i(E.value);
      if (de && !de.includes("/") && !de.includes(":") && (Y.comfyClass === "LoadImage" || Y.type === "LoadImage") && (de = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`), de) return { src: de, sourceType: "widget", inputName: z };
    }
    return { src: "", sourceType: "", inputName: z };
  }, g = (x, H = []) => {
    var ee;
    const z = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs : [];
    for (const re of H) {
      const B = z.findIndex((ve) => String((ve == null ? void 0 : ve.name) || "") === re), G = B >= 0 && x.graph ? x.getInputLink(B) : null;
      if ((G == null ? void 0 : G.origin_id) == null) continue;
      const Y = a(((ee = eh(x, B, G.origin_id)) == null ? void 0 : ee.id) ?? G.origin_id), le = (Array.isArray(Y == null ? void 0 : Y.images) ? Y.images : []).find(xs);
      return le ? `${pi(t, le)}&pano_src=${vu(Y)}` : "";
    }
    return "";
  }, y = (x, H = []) => {
    const z = Array.isArray(H) ? H : [H];
    for (const ee of z) {
      const re = p(x, ee);
      if (String((re == null ? void 0 : re.src) || "").trim()) return re;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (x) => {
    const H = String(x || "").trim();
    if (!H) return [];
    if (ek(H)) return [H];
    const { filename: z, subfolder: ee } = tk(H);
    return z ? u([
      pi(t, { filename: z, subfolder: ee, type: "temp" }),
      pi(t, { filename: z, subfolder: ee, type: "output" }),
      pi(t, { filename: z, subfolder: ee, type: "input" }),
      H
    ]) : [H];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (x) => {
      var H, z;
      try {
        (z = (H = x == null ? void 0 : x.__panoLinkedInputImageCache) == null ? void 0 : H.forEach) == null || z.call(H, (ee, re, B) => {
          var G;
          ee != null && ee.img && ((G = r == null ? void 0 : r.isImageLoadFailed) != null && G.call(r, ee.img)) && B.delete(re);
        });
      } catch {
      }
    },
    externalStateHash: d,
    invalidateUiImage: (x, H) => {
      var z;
      (z = x == null ? void 0 : x.delete) == null || z.call(x, `__ui__${String(H || "")}`);
    },
    linkedValue: (x, H) => {
      var G, Y, le, ve;
      const z = String(H || ""), ee = Array.isArray(x == null ? void 0 : x.inputs) ? x.inputs.findIndex((ge) => String((ge == null ? void 0 : ge.name) || "") === z) : -1, re = ee >= 0 && x.graph ? x.getInputLink(ee) : null;
      if (re) {
        const ge = a(re.origin_id), he = [
          ge == null ? void 0 : ge.output,
          ge == null ? void 0 : ge.result,
          (G = ge == null ? void 0 : ge.data) == null ? void 0 : G.output,
          (Y = ge == null ? void 0 : ge.data) == null ? void 0 : Y.result,
          (le = ge == null ? void 0 : ge.ui) == null ? void 0 : le.output,
          (ve = ge == null ? void 0 : ge.ui) == null ? void 0 : ve.result
        ];
        for (const Z of he) {
          if (!Array.isArray(Z)) continue;
          const E = Z[Number(re.origin_slot || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const B = Array.isArray(x == null ? void 0 : x.widgets) ? x.widgets.find((ge) => String((ge == null ? void 0 : ge.name) || "") === z) : null;
      return String((B == null ? void 0 : B.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (x, H = [], z = null, ee = "") => {
      var $e;
      const re = Array.isArray(H) ? H : [H], B = y(x, re), Y = (Array.isArray(B == null ? void 0 : B.srcCandidates) && B.srcCandidates.length ? B.srcCandidates : [B == null ? void 0 : B.src]).map((oe) => String(oe || "").trim()).filter(Boolean);
      if (!Y.length) return null;
      const le = u(Y.flatMap((oe) => _(oe)));
      if (!le.length) return null;
      x.__panoLinkedInputImageCache || (x.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const ve = String(ee || re.join("|") || "image_exact"), ge = Y.join(`
`), he = x.__panoLinkedInputImageCache.get(ve);
      if (he && he.srcRaw === ge && he.img) return he.img;
      const Z = n || globalThis.Image;
      if (typeof Z != "function") return null;
      const E = new Z();
      ($e = r == null ? void 0 : r.markImageLoading) == null || $e.call(r, E, ge);
      const W = { srcRaw: ge, resolvedSrc: "", img: E };
      x.__panoLinkedInputImageCache.set(ve, W);
      let de = -1;
      const fe = (oe) => {
        var V, ae, pe;
        oe === "ready" ? (V = r == null ? void 0 : r.markImageReady) == null || V.call(r, E, ge) : (ae = r == null ? void 0 : r.markImageFailed) == null || ae.call(r, E, ge), z == null || z(E), (pe = x.setDirtyCanvas) == null || pe.call(x, !0, !0);
      }, we = () => {
        if (de += 1, de >= le.length) {
          fe("failed");
          return;
        }
        W.resolvedSrc = le[de], E.src = W.resolvedSrc;
      };
      return E.onload = () => fe("ready"), E.onerror = () => {
        if (de + 1 < le.length) {
          we();
          return;
        }
        fe("failed");
      }, we(), E;
    },
    output: a,
    resolvePreferredExactLinkedSource: y,
    source: i,
    uiImage: (x, H, z, ee = null) => {
      var ge, he, Z;
      const re = s(x, H)[0] || null, B = i(re);
      if (!B) return null;
      const G = `__ui__${H}`, Y = (ge = z == null ? void 0 : z.get) == null ? void 0 : ge.call(z, G);
      if (Y && Y.__panoSrc === B) return Y;
      const le = n || globalThis.Image;
      if (typeof le != "function") return null;
      const ve = new le();
      return ve.__panoSrc = B, (he = r == null ? void 0 : r.markImageLoading) == null || he.call(r, ve, B), ve.onload = () => {
        var E;
        (E = r == null ? void 0 : r.markImageReady) == null || E.call(r, ve, B), ee == null || ee(ve);
      }, ve.onerror = () => {
        var E;
        (E = r == null ? void 0 : r.markImageFailed) == null || E.call(r, ve, B), ee == null || ee(ve);
      }, ve.src = B, (Z = z == null ? void 0 : z.set) == null || Z.call(z, G, ve), ve;
    },
    uiList: s,
    uiValue: l
  };
}
const rk = 1e-3;
function u0(e, t, n, r) {
  if (!No(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < r.frames ? (a + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(rk / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function d0(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function ik(e, t) {
  return Math.floor(e * t.fps);
}
function f0(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const th = 4;
function p0({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return r.has(a) || r.set(a, e(n[a], t)), r.get(a);
  }
  return {
    picture(a, s, l, d) {
      if ((a.length !== n.length || a.some((p, g) => p !== n[g])) && (n = a, r.clear(), i = null), s === null) return null;
      const u = ik(s, l);
      for (let p = u; p < Math.min(n.length, u + th + 1); p += 1) o(p);
      for (const p of r.keys())
        (p < u || p > u + th) && p !== i && r.delete(p);
      const c = r.get(u);
      return c != null && c.complete && c.naturalWidth > 0 && (i !== null && i !== u && r.delete(i), i = u), i === null ? d : r.get(i);
    }
  };
}
function h0({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let a = null, s = !1, l = !1;
  const d = () => a || e(), u = () => o(n(d()));
  return {
    model: () => n(d()),
    refresh() {
      return l ? this.model() : (u(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, u(), !0);
    },
    updateGesture(c) {
      if (l) return !1;
      a || this.beginGesture();
      const p = t(a, c);
      return p.changed ? (a = p.state, s = !0, r(a), u(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const c = s;
      return c && i(a), a = null, s = !1, r(null), u(), c;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, r(null), u(), !0);
    },
    apply(c) {
      if (l) return !1;
      a && this.commitGesture();
      const p = t(e(), c);
      return p.changed ? (i(p.state), u(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const c = a != null;
      a = null, s = !1, c && r(null);
    }
  };
}
const ks = "sticker_image_1", m0 = "external_image", wo = 0;
function po(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Fc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Jr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function _u(e, t = wo) {
  return (e == null ? void 0 : e.version) !== 2 ? Jr(e) : Jr(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Ii(n, t).active,
    external: n.source.kind === "port",
    ...wd(n, t)
  }));
}
function Od(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Jr(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function g0(e) {
  return String((e == null ? void 0 : e.id) || "") === ks || String((e == null ? void 0 : e.source_kind) || "") === m0;
}
function Fd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : g0(t);
}
const y0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function b0(e) {
  return !g0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(y0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function v0(e) {
  const t = b0(e);
  return t ? y0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function _0(e, t = {}) {
  var T, x, H;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((z) => String((z == null ? void 0 : z.id) || "") === ks);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const z = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === ks;
    return {
      state: {
        ...e,
        stickers: n.filter((ee, re) => re !== r),
        active: z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = r >= 0 ? n[r] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), d = Number(t.imageHeight || 0), u = l > 0 && d > 0, c = Math.max(1, l), p = Math.max(1, d), g = t.pose && typeof t.pose == "object" ? t.pose : {}, y = s ? g.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || g.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(y)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const z = po(_, c, p), ee = Number(((x = a == null ? void 0 : a.initial_pose) == null ? void 0 : x.hFOV_deg) ?? _), re = po(ee, c, p), B = Number(((H = a == null ? void 0 : a.initial_pose) == null ? void 0 : H.vFOV_deg) ?? re);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - z) <= 1e-6 && Math.abs(B - re) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((G, Y) => Y === r ? {
          ...G,
          vFOV_deg: z,
          initial_pose: G.initial_pose && typeof G.initial_pose == "object" ? { ...G.initial_pose, vFOV_deg: re } : G.initial_pose
        } : G)
      },
      changed: !0
    };
  }
  const b = n.reduce((z, ee) => Math.max(z, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), C = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: u ? po(_, c, p) : Number(g.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || _),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, U = {
    ...a || {},
    id: ks,
    source_kind: m0,
    source_link_id: i,
    source_state_hash: o,
    ...C,
    initial_pose: { ...C },
    visible: !0,
    z_index: b + 1
  }, D = r >= 0 ? n.map((z, ee) => ee === r ? U : z) : [...n, U];
  return { state: { ...e, stickers: D }, changed: !0 };
}
function nh(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const ok = ["IMAGE", "VIDEO"];
function rh(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => ok.includes(n)) ? "2d" : null;
}
function ak(e, t) {
  var i, o, a, s, l, d;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? rh(r.type) ?? rh((d = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, r.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[r.origin_slot]) == null ? void 0 : d.type) : null;
}
function S0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: nh(e, "sticker"),
    awaitingPose: !t && (nh(e, "sticker_state") || ak(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function ih(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return vr({ version: 2, stickers: [n] }).stickers[0];
}
function w0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var _;
  const a = e.stickers.findIndex((b) => Fd(e, b)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const b = ((_ = e.active) == null ? void 0 : _.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((C, U) => U !== a),
        active: b ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (r == null ? void 0 : r.placement) === "world" && r.replace && s.placement === "sky") {
    const b = { ...ih(s.id, r), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((C, U) => U === a ? b : C) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const b = [s.size.value, ...s.size.keyframes.map((D) => D.value)], C = b.map((D) => po(D.hFOV_deg, i, o));
    if (b.every((D, T) => Math.abs(D.vFOV_deg - C[T]) <= 1e-6)) return { state: e, changed: !1 };
    const U = {
      value: { ...s.size.value, vFOV_deg: C[0] },
      keyframes: s.size.keyframes.map((D, T) => ({ ...D, value: { ...D.value, vFOV_deg: C[T + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((D, T) => T === a ? { ...D, size: U } : D) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const d = new Set(e.stickers.map((b) => b.id));
  let u = 1;
  for (; d.has(`sticker_${u}`); ) u += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, ih(`sticker_${u}`, r)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), p = (b) => l ? po(b, i, o) : b, g = xd(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: p(c)
  }, Jr(e).reduce((b, C) => Math.max(b, C.z_index), -1) + 1), y = (r == null ? void 0 : r.keyframes) ?? {};
  return g.direction.keyframes = y.direction ?? [], g.roll.keyframes = y.roll ?? [], g.size.keyframes = (y.size ?? []).map((b) => ({ ...b, value: { ...b.value, vFOV_deg: p(b.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, g] }, changed: !0 };
}
function Td(e) {
  const t = Jr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Fc(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Fc(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Fc(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, a) => o.z_index - a.z_index);
}
function x0(e) {
  const t = Od(e), n = Fd(e, t), r = Jr(e).some((s) => s && s.visible !== !1), i = Td(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: v0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function sk(e) {
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
function oh(e, t) {
  const n = Od(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = sk(e), i = String(n.id || ""), o = Td(r), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, d) => {
    l.item.z_index = d;
  }), { state: r, changed: !0 };
}
function lk(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function ck(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return _0(e, t.value);
  if (t.type === "sync-port") return w0(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((p) => String((p == null ? void 0 : p.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Td(e).reduce((p, g) => Math.max(p, Number(g.z_index || 0)), -1), d = 30, u = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: d,
      vFOV_deg: po(d, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, xd(o, _s(i.asset), u, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const c = { id: o, asset_id: a, ...u, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], c],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Jr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Od(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = b0(n);
    return !i || !v0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return oh(e, "front");
  if (t.type === "send-back") return oh(e, "back");
  if (t.type === "delete-selected") {
    if (Fd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === n ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== n), o = Jr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = lk(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? wd(n, wo) : n, s = {};
    if (o.forEach((l) => {
      const d = Number(i[l]);
      Number.isFinite(d) && Math.abs(d - Number(a[l] || 0)) > 1e-12 && (s[l] = d);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = Gw(n, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const d = structuredClone(n);
      return Cg(d, wo, l), { state: { ...e, stickers: e.stickers.map((u) => u === n ? d : u) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === n ? { ...l, ...s } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function uk(e = {}) {
  return h0({
    ...e,
    reduce: ck,
    projectModel: x0
  });
}
const Su = 2;
function yi(e, t) {
  return Math.floor(e * t + 0.5);
}
function dk(e, t) {
  return Math.floor(e * t + 1e-3);
}
function k0({ video: e, clock: t, fps: n, span: r, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, d = !1, u = !1, c = { name: "idle" }, p = [];
  const g = () => d && !u, y = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function _() {
    for (const W of p) W();
    p = [];
  }
  function b(W, de = {}) {
    return _(), c = { name: W, ...de }, s(), c;
  }
  function C(W, de, fe) {
    const we = () => {
      c === W && fe();
    };
    e.addEventListener(de, we), p.push(() => e.removeEventListener(de, we));
  }
  function U(W, de) {
    let fe = t.requestFrame(function we($e) {
      c === W && (de($e), c === W && (fe = t.requestFrame(we)));
    });
    p.push(() => t.cancelFrame(fe));
  }
  function D(W) {
    l = W, o(l);
  }
  function T() {
    return b(u ? "error" : "idle");
  }
  function x() {
    u = !0, T();
  }
  function H() {
    const { seekable: W } = e, de = W != null && W.length ? W.end(W.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / n(), Number.isFinite(de) ? de : 1 / 0));
  }
  function z(W) {
    if (!g()) return W === "play" ? Y() : T();
    if (e.readyState < Su) {
      const de = b("loading", { then: W });
      return C(de, "loadeddata", () => z(de.then)), C(de, "error", x), de;
    }
    return W === "play" && l / n() >= Number(e.duration) ? Y() : ee(W, !1);
  }
  function ee(W, de) {
    const fe = H();
    if (!e.ended && yi(Number(e.currentTime), n()) === yi(fe, n())) return re(W);
    const we = b("seeking", { then: W, frame: l, retried: de });
    return C(we, "seeked", () => {
      const $e = yi(Number(e.currentTime), n()) === yi(H(), n()), oe = l === we.frame;
      $e || oe && we.retried ? re(we.then) : ee(we.then, oe);
    }), C(we, "error", x), e.currentTime = fe, we;
  }
  function re(W) {
    return W === "play" ? B() : (a(), T());
  }
  function B() {
    const W = b("playingVideo", { shown: !1 });
    if (C(W, "pause", () => e.ended ? G() : ge()), C(W, "ended", G), C(W, "error", x), i() && yi(Number(e.duration), n()) >= r()) {
      const fe = e.loop;
      e.loop = !0, p.push(() => {
        e.loop = fe;
      });
    }
    const de = (fe, we) => {
      we && !W.shown && (W.shown = !0, s()), le(yi(fe, n()));
    };
    if (y()) {
      let fe = e.requestVideoFrameCallback(function we($e, oe) {
        c === W && (de(Number(oe.mediaTime), !0), c === W && (fe = e.requestVideoFrameCallback(we)));
      });
      p.push(() => {
        var we;
        return (we = e.cancelVideoFrameCallback) == null ? void 0 : we.call(e, fe);
      });
    } else
      U(W, () => de(Number(e.currentTime), e.readyState >= Su));
    return Promise.resolve(e.play()).catch(() => {
      c === W && ge();
    }), W;
  }
  function G() {
    a(), Y();
  }
  function Y() {
    const W = b("playingClock", { startTs: t.now(), startFrame: l });
    return U(W, (de) => le(W.startFrame + Math.floor((de - W.startTs) / 1e3 * n()))), W;
  }
  function le(W) {
    if (W < r()) {
      D(W);
      return;
    }
    if (!i()) {
      ve(r() - 1);
      return;
    }
    c.name === "playingVideo" && (_(), e.pause()), D(0), z("play");
  }
  function ve(W) {
    c.name === "playingVideo" ? (_(), e.pause(), D(Math.max(0, W)), a()) : D(Math.max(0, W)), z("still");
  }
  function ge() {
    if (c.name === "loading" || c.name === "seeking")
      c.then = "still", s();
    else if (c.name === "playingVideo") {
      _(), e.pause();
      const W = dk(Number(e.currentTime), n());
      D(Math.min(W, r() - 1)), a(), l === W ? T() : z("still");
    } else c.name === "playingClock" && ve(Math.min(l, r() - 1));
  }
  function he() {
    if (!E()) {
      if (l >= r() - 1 && D(0), c.name === "loading" || c.name === "seeking") {
        c.then = "play", s();
        return;
      }
      z("play");
    }
  }
  function Z(W) {
    const de = Math.max(0, Math.round(W));
    if (c.name === "loading" || c.name === "seeking") {
      c.then = "still", D(de), s();
      return;
    }
    c.name === "playingVideo" && (_(), e.pause()), D(de), z("still");
  }
  function E() {
    return c.name === "playingVideo" || c.name === "playingClock" || c.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return c.name;
    },
    get playing() {
      return E();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return c.name === "playingVideo" || c.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return c.name === "playingVideo" && c.shown;
    },
    play: he,
    stop: ge,
    seek: Z,
    toggle() {
      E() ? ge() : he();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(W) {
      _(), d = !!W, u = !1, z("still");
    },
    dispose() {
      _(), d = !1, c = { name: "idle" };
    }
  };
}
function M0({ video: e, onCapture: t, onChange: n }) {
  let r = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function d(_) {
    s = _, t();
  }
  function u(_) {
    a = _, e.currentTime = _;
  }
  function c() {
    const _ = l;
    p(), l !== _ && n();
  }
  function p() {
    if (!r || i || e.readyState < Su) return;
    const { time: _, playing: b, fps: C } = o;
    if (_ === null) {
      e.pause(), l = !1;
      return;
    }
    if (b) {
      if (a !== null) return;
      const U = Number(e.duration), D = Number.isFinite(U) ? Math.min(_, U) : _, T = Math.abs(Number(e.currentTime) - D) > 1.5 / C;
      if (e.ended && !T) return;
      T && u(D), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, d(NaN)), !(a !== null || s === _) && (Number(e.currentTime) === _ ? d(_) : u(_));
  }
  const g = {
    loadeddata: c,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: c,
    seeked: () => {
      const _ = a;
      a = null, !o.playing && _ === o.time ? d(_) : c();
    },
    playing: () => {
      !o.playing || l || (l = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [_, b] of Object.entries(g)) e.addEventListener(_, b);
  function y(_) {
    r = _, i = !1, a = null, s = null, l = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: _ = "", time: b = null, playing: C = !1, fps: U }) {
      _ !== r && (y(_), n()), o = { time: b, playing: C, fps: U }, c();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(_, b) {
      return !r || i ? b : o.time === null ? null : o.playing && l ? e : s === null ? b : _;
    },
    dispose() {
      for (const [_, b] of Object.entries(g)) e.removeEventListener(_, b);
      y("");
    }
  };
}
function wu(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function fk({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: d = !1 }) {
  let u = "", c = "", p = 0;
  const g = /* @__PURE__ */ new Set();
  let y = null, _ = null;
  const b = () => i().timeline.fps, C = (G) => G.stickers.find((Y) => Y.source.kind === "port"), U = () => {
    const G = i(), Y = C(G);
    return Mg(G, {
      minimum: Math.round(b() * 5),
      frames: Math.max(
        u ? Math.round(p * b()) : 0,
        y && Y ? d0(Y.clip, b(), y.meta) : 0
      ),
      camera: d
    });
  }, D = k0({
    video: e,
    clock: r,
    fps: b,
    span: U,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), T = () => {
    c === u && Number.isFinite(e.duration) && (p = e.duration);
  }, x = () => {
    c && (g.add(c), l());
  }, H = M0({ video: t, onCapture: s, onChange: l }), z = p0({ createImage: n, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", T), e.addEventListener("error", x);
  function ee(G) {
    G !== c && (c = G, e.pause(), G ? e.src = G : e.removeAttribute("src"), e.load(), D.setSource(!!G));
  }
  function re() {
    D.playing && D.stop();
  }
  function B(G) {
    const Y = C(G);
    _ = y && Y ? u0(Y.clip, D.frame, G.timeline.fps, y.meta) : null, H.follow({
      src: (y == null ? void 0 : y.src) || "",
      time: _,
      playing: D.advancing,
      fps: G.timeline.fps
    });
  }
  return {
    get frame() {
      return D.frame;
    },
    get playing() {
      return D.playing;
    },
    get showsVideo() {
      return D.showsVideo;
    },
    get source() {
      return c;
    },
    pause: re,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return y;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(G, Y) {
      return y != null && y.frames ? z.picture(y.frames, _, y.meta, Y) : H.picture(G, Y);
    },
    toggle() {
      D.playing ? D.stop() : D.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: G, sources: Y, state: le, sticker: ve = null }) {
      if (y = G ? ve : null, !G)
        return re(), ee(""), B(le), !1;
      for (const W of g)
        Y.includes(W) || g.delete(W);
      const ge = Y.find((W) => W && !g.has(W)) || "", he = ge !== u;
      he && (u = ge, p = 0), ee(u);
      const Z = kg(le, { camera: d }) || !!u && D.state !== "error" || !!y;
      return Z || re(), (he || !Z || !D.playing && D.frame >= U()) && D.frame !== wo && D.seek(wo), B(le), Z;
    },
    dispose() {
      D.dispose(), H.dispose(), e.removeEventListener("loadedmetadata", T), e.removeEventListener("error", x), e.pause(), e.removeAttribute("src"), e.load(), c = "";
    }
  };
}
const Zs = Math.PI / 180, yr = 180 / Math.PI, pk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), hk = 260;
function ah(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function P0(e, t) {
  return t ? P0(t, e % t) : e;
}
function mk(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = P0(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function Pa(e, t) {
  const n = ah(e), r = ah(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: mk(n, r) };
}
function Ni(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function N0(e) {
  const t = Ni(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Dr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Dd(e, t, n = pk) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), a = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), d = (b, C, U) => {
    const D = b + C, T = Math.max(0, U - 1), x = D > T && D > 0 ? T / D : 1;
    return [b * x, C * x];
  }, [u, c] = d(l, a, r), [p, g] = d(o, s, i), y = {
    x: u,
    y: p,
    w: Math.max(1, r - u - c),
    h: Math.max(1, i - p - g)
  }, _ = cd(y, t);
  return {
    x: y.x + (y.w - _.width) * 0.5,
    y: y.y + (y.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: y
  };
}
function gk(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Dd({ width: n, height: r }, 1), o = Fe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = n / (2 * Math.tan(o * Zs * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, d = ig(l, eg(
    { x: n * 0.5, y: r * 0.5 },
    a,
    s
  )), u = yk(d, Mo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), c = ud({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: c.hFOV_deg
  };
}
function A0(e) {
  return {
    yaw: Dt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * yr),
    pitch: Fe(Math.asin(Fe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * yr, -89.9, 89.9)
  };
}
function yk(e, t) {
  const n = A0(e), r = Mo(n.yaw, n.pitch, 0), i = vc(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, a = Math.hypot(o.x, o.y, o.z);
  if (!(a > 1e-8)) return { ...n, roll: 0 };
  const s = {
    x: o.x / a,
    y: o.y / a,
    z: o.z / a
  };
  return {
    ...n,
    roll: kl(Math.atan2(
      vc(s, r.up),
      vc(s, r.right)
    ) * yr)
  };
}
function C0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Dd({ width: n, height: r }, Oi(e)), o = Ci(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = ig(e, eg(
    a,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), l = A0(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Fe(2 * Math.atan(n / (2 * o)) * yr, 1, 179)
  };
}
function bk(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = Ci(t, n), l = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: d, halfH: u } = dd(l, s), c = {
    x: o - d,
    y: a - u,
    w: d * 2,
    h: u * 2
  }, p = c.x <= 0 && c.y <= 0 && c.x + c.w >= r && c.y + c.h >= i, g = r / i, y = Math.tan(nu * Zs), _ = g >= 1 ? y : y * g, b = g >= 1 ? y / g : y;
  return {
    focalPx: s,
    rect: c,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(d / s) * yr,
      vFOV_deg: 2 * Math.atan(u / s) * yr
    },
    fallback: p ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(_) * yr,
        vFOV_deg: 2 * Math.atan(b) * yr
      }
    }
  };
}
function Ji(e, t) {
  const n = Ni(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = t(n);
  return !r || r === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((i) => i === n ? r : i)
    },
    changed: !0
  };
}
function vk(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const a = Ci(n, e);
    return ud(cd(n, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ys(o, t) };
}
function sh(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = Pa(t, n);
  if (!o) return e;
  const a = Oi(e) >= 1;
  r && o.ratio >= 1 !== a && (o = Pa(o.height, o.width));
  const s = vk(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function I0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ni(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = tg({
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
        shots: [i],
        active: { ...e.active || {}, selected_shot_id: r }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const r = Ni(e);
    if (!r) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((a) => a !== r), o = ((n = i[0]) == null ? void 0 : n.id) == null ? null : String(i[0].id);
    return {
      state: {
        ...e,
        shots: i,
        active: { ...e.active || {}, selected_shot_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Ji(e, (r) => sh(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Ji(e, (r) => {
      const o = String(Dr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? Pa(o[1], o[2]) : Pa(Oi(r), 1);
      return a ? sh(r, a.height, a.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Ji(e, (i) => {
      const o = kl(r), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ji(e, (r) => {
    const i = ng(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? Ji(e, (r) => {
    const i = rg(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? Ji(e, (r) => {
    const i = F0(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function E0({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: a = 0.05
} = {}) {
  const s = o && i ? "alt" : r ? "shift" : "";
  if (!s || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, d = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, u = Math.hypot(Number(t.x || 0) - d.x, Number(t.y || 0) - d.y);
  if (s === "shift" && u < Math.min(l.w, l.h) * a) return null;
  const c = Math.atan2(Number(t.y || 0) - d.y, Number(t.x || 0) - d.x);
  return {
    source: s,
    frame: l,
    center: d,
    startRollDeg: Number(n || 0),
    lastAngle: c,
    accumulatedRad: 0
  };
}
function O0(e, t, n = {}) {
  var a, s;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Zm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: Qm(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function F0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Zs, l = Math.cos(s), d = Math.sin(s), u = o / n, c = -a / n, p = u * l - c * d, g = u * d + c * l, y = Number(e.pitch_deg || 0) * Zs, _ = Math.max(0.25, Math.abs(Math.cos(y)));
  return {
    ...e,
    yaw_deg: Dt(Number(e.yaw_deg || 0) - Math.atan(p) / _ * yr),
    pitch_deg: Fe(Number(e.pitch_deg || 0) - Math.atan(g) * yr, -90, 90)
  };
}
function _k({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return h0({
    readState: e,
    reduce: I0,
    projectModel: N0,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ye = Object.freeze({
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
  focus: "focus",
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
  lasso_tool: "lasso_tool",
  keyframe: "keyframe",
  dof_3: "dof_3",
  dof_6: "dof_6",
  camera_plus: "camera_plus",
  box: "box"
}), Sk = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, wk = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Sk(t[2])
})), xk = {
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
  focus: { name: "focus-2", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0' fill='currentColor' /><path d='M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' /><path d='M12 3l0 2' /><path d='M3 12l2 0' /><path d='M12 19l0 2' /><path d='M19 12l2 0' />" },
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
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" },
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" },
  // The 3DoF | 6DoF view modes (#71): the numerals 3 and 6, drawn in the Tabler stroke style.
  dof_3: { name: "rotate-360", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 16h4v4' /><path d='M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515' />" },
  dof_6: { name: "arrows-move", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 9l3 3l-3 3' /><path d='M15 12h6' /><path d='M6 9l-3 3l3 3' /><path d='M3 12h6' /><path d='M9 18l3 3l3 -3' /><path d='M12 15v6' /><path d='M15 6l-3 -3l-3 3' /><path d='M12 3v6' />" },
  // Add Camera (Panorama Studio, #89) and the `scene` row of the Timeline.
  camera_plus: { name: "camera-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5' /><path d='M16 19h6' /><path d='M19 16v6' /><path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />" },
  box: { name: "box", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5' /><path d='M12 12l8 -4.5' /><path d='M12 12l0 9' /><path d='M12 12l-8 -4.5' />" }
}, lh = Object.fromEntries(
  Object.entries(xk).map(([e, t]) => [e, {
    name: t.name,
    elements: wk(t.body)
  }])
), Tt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(lh, r) ? lh[r] : null;
    });
    return (r, i) => n.value ? (Re(), He("svg", {
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
      (Re(!0), He(ot, null, xt(n.value.elements, (o, a) => (Re(), He(ot, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Re(), He("path", Or({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Re(), He("circle", Or({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Re(), He("rect", Or({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Re(), He("line", Or({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Re(), He("polyline", Or({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Re(), He("polygon", Or({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : ht("", !0)
      ], 64))), 128))
    ], 2)) : ht("", !0);
  }
}, Zt = {
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
    const t = e, n = ft(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => (Re(), Kn(Ev(e.tag), Or({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: ym(() => [
        Qe(Tt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, kk = ["aria-expanded", "disabled"], Mk = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Pk = ["data-aspect", "disabled", "onClick"], Nk = { class: "pano-cutout-aspect-custom" }, Ak = ["disabled"], Ck = ["disabled"], Ik = ["data-custom-width", "data-custom-height", "disabled"], T0 = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ Wt("1"), a = /* @__PURE__ */ Wt("1"), s = /* @__PURE__ */ Wt(null), l = ft(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), d = ft(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], b = String(n.model.aspectLabel || "");
      return _.length ? _.map((C) => {
        const U = typeof C == "string" ? C : String((C == null ? void 0 : C.value) || ""), D = typeof C == "string" ? C : String((C == null ? void 0 : C.label) || U);
        return {
          ...typeof C == "object" && C ? C : {},
          value: U,
          label: D,
          active: b ? U === b : (C == null ? void 0 : C.active) === !0
        };
      }) : i.map((C) => ({
        ...C,
        active: C.value === b
      }));
    }), u = ft(() => {
      var b;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((b = d.value.find((C) => C.active === !0)) == null ? void 0 : b.label) || "Aspect");
    });
    Mi(u, (_) => {
      const b = String(_ || "").match(/^([0-9.]+):([0-9.]+)$/);
      b && (o.value = b[1], a.value = b[2]);
    }, { immediate: !0 });
    function c(_) {
      r("action", _);
    }
    function p(_) {
      var b;
      n.model.aspectOpen === !0 && ((b = s.value) != null && b.contains(_.target) || c({ type: "close-aspect" }));
    }
    vl(() => {
      document.addEventListener("pointerdown", p, !0);
    }), Oa(() => {
      document.removeEventListener("pointerdown", p, !0);
    });
    function g(_) {
      const [b, C] = String(_.value || "").split(":");
      c({
        type: "set-aspect",
        width: b,
        height: C,
        preserveOrientation: !0
      });
    }
    function y() {
      c({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (_, b) => (Re(), He("div", {
      ref_key: "rootElement",
      ref: s,
      class: pt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Re(), Kn(Zt, {
        key: 0,
        icon: e.model.aspectIcon || at(Ye).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: b[0] || (b[0] = (C) => c({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Re(), He("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: b[1] || (b[1] = (C) => c({ type: "toggle-aspect" }))
      }, [
        Qe(Tt, {
          icon: e.model.aspectIcon || at(Ye).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, ut(u.value), 1),
        Qe(Tt, {
          icon: at(Ye).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, kk)),
      Vr(Ne("div", Mk, [
        (Re(!0), He(ot, null, xt(d.value, (C) => (Re(), He("button", {
          key: C.value,
          class: pt(["pano-btn pano-frame-aspect-choice", { active: C.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": C.value,
          disabled: l.value,
          onClick: (U) => g(C)
        }, ut(C.label), 11, Pk))), 128)),
        Ne("div", Nk, [
          Vr(Ne("input", {
            "onUpdate:modelValue": b[2] || (b[2] = (C) => o.value = C),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, Ak), [
            [Ep, o.value]
          ]),
          b[4] || (b[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          Vr(Ne("input", {
            "onUpdate:modelValue": b[3] || (b[3] = (C) => a.value = C),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Ck), [
            [Ep, a.value]
          ]),
          Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: y
          }, "Apply", 8, Ik)
        ])
      ], 512), [
        [Ai, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Ek = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Ok = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Wt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Re(), He("div", {
      class: pt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Et(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Et(() => {
      }, ["stop"]))
    }, [
      Qe(Zt, {
        icon: at(Ye).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Et((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", Ek, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Re(!0), He(ot, null, xt(at(n), (o) => (Re(), He("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, ut(o[0]), 1),
          Ne("span", null, ut(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Fk = {
  class: "pano-view-unavailable",
  role: "status"
}, Ld = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Re(), He("div", Fk, ut(at(Qg)), 1));
  }
}, Tk = { class: "pano-cutout-node-surface" }, Dk = ["title", "disabled"], Lk = { class: "value" }, Vk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Rk = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(r) {
      var i;
      (i = t.onAction) == null || i.call(t, r);
    }
    return (r, i) => (Re(), He("div", Tk, [
      Ne("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Et(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Et(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          Qe(Tt, {
            icon: at(Ye).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Qe(Zt, {
          icon: e.model.hasShot ? at(Ye).delete : at(Ye).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Qe(T0, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        Ne("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Et((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Qe(Tt, {
            icon: at(Ye).roll
          }, null, 8, ["icon"]),
          Ne("span", Lk, ut(e.model.rollLabel || "0.0°"), 1)
        ], 40, Dk),
        Qe(Zt, {
          icon: at(Ye).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Qe(Ok)
      ], 32),
      e.model.hasShot === !1 ? (Re(), He("div", Vk, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (Re(), Kn(Ld, { key: 1 })) : ht("", !0)
    ]));
  }
}, D0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ Wt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const c = o;
      return o = void 0, a = !1, { active: !0, intent: c };
    }
    function l(c) {
      const p = i.value;
      return p instanceof HTMLInputElement ? (o = c, a = !0, p.value = "", p.click(), !0) : !1;
    }
    function d(c) {
      var _, b;
      const { active: p, intent: g } = s();
      if (!p) return;
      const y = ((b = (_ = c.target) == null ? void 0 : _.files) == null ? void 0 : b[0]) || null;
      if (y) {
        r("file-selected", { intent: g, file: y });
        return;
      }
      r("file-cancelled", { intent: g });
    }
    function u() {
      const { active: c, intent: p } = s();
      c && r("file-cancelled", { intent: p });
    }
    return t({ open: l }), (c, p) => (Re(), He("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: d,
      onCancel: u
    }, null, 544));
  }
}, $k = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, zk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Wt(!1), n = Object.freeze([
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
    return (r, i) => (Re(), He("div", {
      class: pt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Et(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Et(() => {
      }, ["stop"]))
    }, [
      Qe(Zt, {
        icon: at(Ye).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Et((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", $k, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Re(!0), He(ot, null, xt(at(n), (o) => (Re(), He("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, ut(o[0]), 1),
          Ne("span", null, ut(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, jk = { class: "pano-stickers-node-surface" }, Hk = ["disabled"], Gk = ["aria-label", "data-tip"], Wk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Kk = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, Bk = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Wt(null);
    function r(a) {
      var s;
      (s = t.onAction) == null || s.call(t, a);
    }
    function i() {
      var a, s;
      (s = (a = n.value) == null ? void 0 : a.open) == null || s.call(a, "add");
    }
    function o(a) {
      r({ type: "add-image-file", file: (a == null ? void 0 : a.file) || null });
    }
    return (a, s) => (Re(), He("div", jk, [
      Ne("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Et(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Et(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => r({ type: "open-editor" }))
        }, [
          Qe(Tt, {
            icon: at(Ye).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Qe(Tt, {
            icon: at(Ye).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, Hk),
        Qe(Zt, {
          icon: e.model.locked ? at(Ye).lock_closed : at(Ye).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Qe(Zt, {
          icon: at(Ye).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Qe(Zt, {
          icon: at(Ye).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Qe(Zt, {
          icon: e.model.isExternalSelection ? at(Ye).back_initial : at(Ye).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Qe(zk)
      ], 32),
      e.model.playable === !0 ? (Re(), He("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Et(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Et(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => r({ type: "toggle-playback" }))
      }, [
        Qe(Tt, {
          icon: e.model.playing ? at(Ye).pause : at(Ye).play
        }, null, 8, ["icon"])
      ], 40, Gk)) : ht("", !0),
      e.model.hasStickers === !1 ? (Re(), He("div", Wk, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (Re(), He("div", Kk, "Drop image to add")) : ht("", !0),
      Qe(D0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Re(), Kn(Ld, { key: 3 })) : ht("", !0)
    ]));
  }
}, ch = 24;
function Uk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function fa(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function L0(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function xu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => fa(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return fa(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : L0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Yk(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => fa(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = r ? e.corners.findIndex((a) => fa(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return fa(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : L0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Vd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function V0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Ko(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Fe(n.x, -r, t.width + r),
    y: Fe(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function qk(e) {
  const t = Mo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function hi(e, t, n) {
  return ld($s(
    $s(e.centerDir, zs(e.right, t)),
    zs(e.up, n)
  ));
}
function Rd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = qk(e), r = Ko(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    hi(n, -n.tanX, n.tanY),
    hi(n, n.tanX, n.tanY),
    hi(n, n.tanX, -n.tanY),
    hi(n, -n.tanX, -n.tanY)
  ].map((p) => Ko(p, t)), o = Array.from({ length: 4 }, (p, g) => {
    const y = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const b = _ / 28;
      let C, U;
      g === 0 ? (C = -n.tanX + 2 * n.tanX * b, U = n.tanY) : g === 1 ? (C = n.tanX, U = n.tanY - 2 * n.tanY * b) : g === 2 ? (C = n.tanX - 2 * n.tanX * b, U = -n.tanY) : (C = -n.tanX, U = -n.tanY + 2 * n.tanY * b);
      const D = Ko(hi(n, C, U), t);
      D && y.push({ x: D.x, y: D.y });
    }
    return y;
  }), a = Ko(hi(n, 0, n.tanY), t), s = Ko(
    hi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), l = [r, ...i, a, s];
  if (l.some((p) => !p || !Number.isFinite(p.x) || !Number.isFinite(p.y)))
    return { visible: !1 };
  if (!l.some((p) => p.rawZ > 1e-4)) return { visible: !1 };
  const d = s.x - a.x, u = s.y - a.y, c = Math.hypot(d, u) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: i.map((p) => ({ x: p.x, y: p.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + d / c * ch,
      y: a.y + u / c * ch
    },
    visible: !0
  };
}
function uh(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: Rd(a, r) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, d;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((d = a.item) == null ? void 0 : d.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = xu(o.geometry, n);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = xu(a.geometry, n);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function Xk(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Dt(Math.atan2(r.x, r.z) * Qt),
    pitch_deg: Math.asin(Fe(r.y, -1, 1)) * Qt
  };
}
function Jk(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function Zk(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * Qt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let is = null;
function $d() {
  return is || (is = new Promise((e) => {
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
  }), is);
}
function zn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Qk(e, t = 1024) {
  const n = Math.max(1, Math.round(zn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(zn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function eM(e, t, n) {
  const r = zn(t), i = zn(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const a = zn(o.u0), s = zn(o.v0), l = zn(o.u1), d = zn(o.v1);
  if (l <= a || d <= s) return null;
  const u = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + zn(u.du)) * r,
    centerY: ((s + d) * 0.5 + zn(u.dv)) * i,
    width: (l - a) * r,
    height: (d - s) * i,
    rotationRad: zn(u.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, zn(u.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function tM(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    n,
    r.length,
    r.slice(-24),
    i.u0,
    i.v0,
    i.u1,
    i.v1,
    o.du,
    o.dv,
    o.rot_deg,
    o.scale
  ].join(":");
}
function nM() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, a] of e) {
        if (e.size <= 16) break;
        a.settled && (a.image.onload = null, a.image.onerror = null, e.delete(o));
      }
  }
  function r(o, a) {
    let s = e.get(o);
    if (s)
      return e.delete(o), e.set(o, s), !s.settled && typeof a == "function" && s.listeners.add(a), s.image;
    const l = new Image();
    s = { image: l, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const d = () => {
      s.settled = !0;
      const u = [...s.listeners];
      s.listeners.clear(), u.forEach((c) => c()), n();
    };
    return l.onload = d, l.onerror = d, l.src = o, n(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const d = String(o.rasterDataUrl || "").trim(), u = eM(o, a, s);
    if (!d.startsWith("data:") || !u) return null;
    const c = tM(o, a, s), p = String((o == null ? void 0 : o.id) || "").trim() || c, g = t.get(p);
    if ((g == null ? void 0 : g.revision) === c) return { source: g.source, revision: c };
    const y = r(d, l), _ = Number(y.naturalWidth || y.width || 0), b = Number(y.naturalHeight || y.height || 0);
    if (!y.complete || _ < 1 || b < 1) return null;
    const C = mn({ label: "raster-object" });
    C.width = Math.max(1, Math.round(a)), C.height = Math.max(1, Math.round(s));
    const U = C.getContext("2d");
    return U ? (u.wrapOffsets.forEach((D) => {
      U.save(), U.translate(u.centerX + D, u.centerY), U.rotate(u.rotationRad), U.scale(u.scale, u.scale), U.drawImage(
        y,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), U.restore();
    }), t.set(p, { revision: c, source: C }), { source: C, revision: c }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const a = new Set(Array.from(o, (s) => String(s || "").trim()).filter(Boolean));
      for (const s of t.keys())
        a.has(s) || t.delete(s);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function rM(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function iM(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function oM({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(c) {
    if (!c) return;
    c.entry.listeners.delete(c);
    const p = r.get(c.owner);
    (p == null ? void 0 : p.get(c.key)) === c && p.delete(c.key);
  }
  function a(c, p, g, y) {
    if (!c || typeof y != "function" || g.settled) return;
    let _ = r.get(c);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(c, _));
    const b = _.get(p);
    if ((b == null ? void 0 : b.entry) === g) {
      b.callback = y;
      return;
    }
    o(b);
    const C = { owner: c, key: p, entry: g, callback: y };
    _.set(p, C), g.listeners.add(C);
  }
  function s(c, p) {
    c.settled || (c.settled = !0, c.image.onload = null, c.image.onerror = null, !p && n.get(c.key) === c && n.delete(c.key), [...c.listeners].forEach((g) => {
      o(g);
      try {
        g.callback(c.image, p);
      } catch {
      }
    }), l(i));
  }
  function l(c) {
    if (!(n.size <= c))
      for (const [p, g] of n) {
        if (n.size <= c) break;
        !g.settled || g.listeners.size > 0 || (g.image.onload = null, g.image.onerror = null, n.delete(p));
      }
  }
  function d(c, p, g, y = null) {
    const _ = String(p || ""), b = String(g || "");
    if (!_ || !b) return null;
    let C = n.get(_);
    if (C)
      n.delete(_), n.set(_, C);
    else {
      l(i - 1);
      const D = e || globalThis.Image;
      if (typeof D != "function") return null;
      const T = new D();
      C = { key: _, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, C), T.onload = () => s(C, !0), T.onerror = () => s(C, !1), T.src = b;
    }
    return C.settled || C.image.complete && Number(C.image.naturalWidth || C.image.width || 0) > 0 || a(c, _, C, y), C.image;
  }
  function u(c) {
    const p = r.get(c);
    p && ([...p.values()].forEach(o), r.delete(c), l(i));
  }
  return { get: d, disposeOwner: u };
}
const Jo = /* @__PURE__ */ new WeakMap();
function R0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Jo.get(e);
  r || (r = [], Jo.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Jo.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Jo.delete(e);
  };
}
function Rr(e, ...t) {
  const n = Jo.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Ms = Object.freeze({
  // Core's Load3D (three.js OrbitControls) and Sketchfab: the left and the right button orbit, Shift pans.
  default: {
    label: "Default",
    emptyLeft: "orbit",
    bindings: [
      { button: 1, action: "pan" },
      { button: 2, action: "orbit" },
      { button: 2, shift: !0, action: "pan" }
    ]
  },
  // Blender's 3D viewport. A left drag on empty space is Blender's box select, which the editor has as
  // Ctrl + drag.
  blender: {
    label: "Blender-like",
    emptyLeft: null,
    bindings: [
      { button: 1, action: "orbit" },
      { button: 1, shift: !0, action: "pan" }
    ]
  },
  // Unity's Scene view: the right button flies (looks around in place). A left drag on empty space is
  // Unity's rectangle select, which the editor has as Ctrl + drag.
  unity: {
    label: "Unity-like",
    emptyLeft: null,
    bindings: [
      { button: 2, action: "look" },
      { button: 0, alt: !0, action: "orbit" },
      { button: 1, action: "pan" }
    ]
  }
}), $0 = "PanoramaSuite.Editor.ViewControls", aM = {
  id: $0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Ms).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function sM(e) {
  return Object.hasOwn(Ms, e) ? Ms[e] : Ms.default;
}
function lM(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === n && !!s.alt === r);
  return (a == null ? void 0 : a.action) ?? null;
}
function cM(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Qs = "state_json";
function Lr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function uM(e) {
  var a, s;
  const t = Lr(e, Qs);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Ng(n, {
    coverage: (a = Lr(e, "coverage")) == null ? void 0 : a.value
  }), i = I0(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function zd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Lr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var a, s, l, d, u, c, p, g, y;
    const o = r ? r(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (d = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (p = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || p.call(c, !0, !0), (y = (g = t == null ? void 0 : t.canvas) == null ? void 0 : g.setDirty) == null || y.call(g, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function dM(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function dh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function fM(e) {
  var u, c, p, g, y, _;
  if (!e) return;
  const t = Lr(e, "coverage"), n = Lr(e, "bg_color"), r = Lr(e, Qs), i = Lr(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), a = String(n.value ?? "").trim(), s = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && dM(o) && (dh(a) || a === ""))) return;
  let d = "360";
  if (dh(a))
    try {
      d = String(In((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      d = "360";
    }
  t.value = d, (c = t.callback) == null || c.call(t, d), n.value = o, (p = n.callback) == null || p.call(n, o), r.value = a, (g = r.callback) == null || g.call(r, a), i && (i.value = s, (y = i.callback) == null || y.call(i, s)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Ps(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, a;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (a = r.parentEl) != null && a.style && (r.parentEl.style.display = "none")));
  });
}
function ku(e, t, n) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = n, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, n), i && (i.serialize = !1), i;
}
async function pM(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, i]) => i)) : await Promise.all(r.map(([, i]) => i)), r.forEach(([i, o]) => {
        n.get(i) === o && n.delete(i);
      });
    }
}
function Zo(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), a = o.catch(() => {
  });
  e.__panoStickerOperationTail = a, e.__panoPendingStickerUploads.set(t, o);
  const s = () => {
    var l, d;
    ((d = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : d.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function z0(e, t = {}) {
  var r;
  await pM(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of n) await i();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function hM(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await z0(e), n ? n.apply(this, r) : this.value;
  };
}
function mM(e) {
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
function gM(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Bo(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function u(c) {
    var y;
    const p = `editor_btn|${n}`;
    if (c.__panoPreviewAttached === !0 && c.__panoPreviewMountKey === p) return;
    mM(c), zd(c, t), Ps(c, Qs);
    const g = Lr(c, Qs);
    if (hM(c, g), g && !g.__panoPreviewPatchedCb) {
      g.__panoPreviewPatchedCb = !0;
      const _ = g.callback;
      g.callback = (b) => {
        var U;
        const C = _ ? _(b) : void 0;
        return (U = c.setDirtyCanvas) == null || U.call(c, !0, !1), C;
      };
    }
    if (n === "PanoramaStickers") {
      c.__panoSceneStateV2 = l, c.__panoStudio = d;
      const _ = Lr(c, "bg_color");
      !l && _ && (_.value == null || String(_.value).trim() === "" || String(_.value).toLowerCase() === "#000000") && (_.value = "#00ff00", (y = _.callback) == null || y.call(_, "#00ff00")), ku(c, r, () => i(c, "stickers")), s && (o(c, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(c, "stickers")
      }), c.__panoStickersNodeSurface && Ps(c, r), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260])), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = p;
      return;
    }
    c.__panoSceneStateV2 = l, ku(c, r, () => i(c, "cutout")), l || a(c, {
      buttonText: r,
      onOpen: () => i(c, "cutout")
    }), c.__panoCutoutNodeSurface && Ps(c, r), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260]), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = p;
  }
  for (const c of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const p = e.prototype[c];
    e.prototype[c] = function() {
      const g = p ? p.apply(this, arguments) : void 0;
      c === "onNodeCreated" && n === "PanoramaCutout" && !l && uM(this), c === "onConfigure" && n === "PanoramaStickers" && !l && this.widgets && fM(this);
      const y = !!this.__panoPreviewAttached;
      return (c === "onNodeCreated" || this.widgets) && u(this), c === "onAdded" && y && Rr(this, "attach"), g;
    };
  }
}
function yM(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return gM(this), r;
  };
}
function bM(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: i
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), s = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = s, !a && s < 40) {
      i(o);
      return;
    }
    zd(e, t);
    const l = (d = e) => n(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    ku(e, "Open Preview", () => l(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && Ps(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function vM({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: a,
  enableStickersPreview: s = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [aM, oS],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Dp],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Dp.id] }],
    beforeRegisterNodeDef(l, d) {
      const u = String((d == null ? void 0 : d.name) || "");
      (u === "PanoramaStickers" || u === "Panorama Stickers") && Bo(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s
      }), u === "PanoramaStickersNode" && Bo(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), u === "PanoramaStudio" && Bo(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (u === "PanoramaCutout" || u === "Panorama Cutout") && Bo(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s
      }), u === "PanoramaCutoutNode" && Bo(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), js(u) && yM(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const d = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      zd(l, e), js(d) && bM(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const _M = /\.(png|jpe?g|webp|gif|bmp)$/i;
function tr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : _M.test(String(e.name || "")) : !1;
}
function jd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => tr(n)) : !1;
}
function SM(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var d, u, c;
    (d = l == null ? void 0 : l.preventDefault) == null || d.call(l), (u = l == null ? void 0 : l.stopPropagation) == null || u.call(l), (c = l == null ? void 0 : l.stopImmediatePropagation) == null || c.call(l);
  }, o = (l) => {
    if (jd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, a = (l) => {
    var d;
    l != null && l.relatedTarget && ((d = e.contains) != null && d.call(e, l.relatedTarget)) || n(!1);
  }, s = (l) => {
    var u;
    const d = Array.from(((u = l == null ? void 0 : l.dataTransfer) == null ? void 0 : u.files) || []).find((c) => tr(c));
    if (!d) {
      n(!1);
      return;
    }
    i(l), n(!1), r(d);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), n(!1);
  };
}
async function Qo(e, t = {}) {
  var a, s, l, d;
  if (!tr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((d = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : d.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const u = await new Promise((c, p) => {
      const g = new n();
      g.onload = () => c(g), g.onerror = () => p(new Error("image load failed")), g.src = o;
    });
    return {
      image: u,
      width: Math.max(1, Number(u.naturalWidth || u.width || 1)),
      height: Math.max(1, Number(u.naturalHeight || u.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function bi(e, { fetchApi: t } = {}) {
  if (!tr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const i = await r.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const fh = /* @__PURE__ */ new WeakSet(), ph = /* @__PURE__ */ new WeakSet();
let hh = 0;
function Mu(e) {
  if (!e || typeof e != "object" || ph.has(e)) return e;
  const t = String(e.type || "preview");
  return hh += 1, e.type = `${t}:pano-${hh}`, ph.add(e), e;
}
function el(e) {
  if (!e || typeof e != "object" || fh.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, fh.add(e), e;
}
function j0(e, t) {
  var r, i;
  if (!t || ((i = (r = el(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function wM({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (l) => o || r || typeof e != "function" ? !1 : (i = l, r = e(() => {
    r = 0;
    const d = i;
    i = null, o || n == null || n(d);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Lt } = ds;
Wx((e) => Zr(e.id));
Kx(fn);
const Hd = oM(), { linkedVideoFile: xM } = c0({ app: Lt, api: fn });
function Pu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ds == null ? void 0 : ds.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const kM = "pano_suite.ui_settings.v1", MM = 120, PM = 2048;
function mh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(kM)) || "").trim();
    if (!n) return e;
    const r = JSON.parse(n);
    return {
      invert_view_x: !!(r != null && r.invert_view_x),
      invert_view_y: !!(r != null && r.invert_view_y)
    };
  } catch {
    return e;
  }
}
function NM() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Uo(e) {
  var n, r, i, o, a;
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
    styleWidth: String(((i = e.style) == null ? void 0 : i.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((a = e.style) == null ? void 0 : a.transform) || "")
  };
}
function AM() {
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
function Nu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, i) => {
    const o = Number(r), a = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(a) ? null : [o, a];
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
function H0(e) {
  const t = Nu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function CM(e, t, n) {
  H0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Au(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Gd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function G0(e) {
  return js(Gd(e));
}
function gh(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, r, n, i].join("|");
}
function W0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Au(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = n.noPreview === !0;
      if (o === i && o !== "none" && a === r && s === l) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && Ns(e), _P(e, { ...n, mode: r, __panoForcedPath: i }), this.activeBackend = Au(e);
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
function IM(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ns(e, t = {}) {
  var r, i, o, a, s;
  if (!e) return;
  Cu.unregister(e), IM(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const n = e.__panoDomPreview;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (i = e.__panoLegacyRestore) == null || i.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (s = (a = n.root) == null ? void 0 : a.remove) == null || s.call(a);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((d) => {
      if (d === (n == null ? void 0 : n.widget)) return !0;
      const u = String((d == null ? void 0 : d.name) || ""), c = String((d == null ? void 0 : d.type) || ""), p = Pu();
      return u === p || c === p || u === "pano_preview" || c === "pano_preview" ? !0 : u === "preview" && c === "pano_preview";
    }).forEach((d) => JM(e, d));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function EM(e, t = "#00ff00") {
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
    const i = e.trim();
    if (!i) return n;
    try {
      r = JSON.parse(i);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const i = r;
    return !i || typeof i != "object" || Array.isArray(i) ? n : {
      ...n,
      ...i,
      coverage: Number(i.coverage) === 180 ? 180 : 360,
      assets: i.assets && typeof i.assets == "object" ? i.assets : {},
      stickers: Array.isArray(i.stickers) ? i.stickers : [],
      shots: Array.isArray(i.shots) ? i.shots : [],
      active: i.active && typeof i.active == "object" ? i.active : n.active
    };
  } catch {
    return n;
  }
}
function OM(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ho(e, "state_json")) == null ? void 0 : n.value) || "");
}
function xn(e) {
  var s, l;
  const t = OM(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((s = ho(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = ho(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? Ag(t, { backgroundColor: r, coverage: i, active: Og(e) }) : EM(t, r);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: i, parsed: a }, a;
}
function ho(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function FM(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function K0(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (r = s.outputNode);
    } catch {
    }
  return !r && n != null && (r = FM(e == null ? void 0 : e.graph, n)), r;
}
function TM(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function B0(e, t = []) {
  const n = TM(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    ti.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function yh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function tl(e, t) {
  const n = yh(e), r = yh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function DM(e, t) {
  var n;
  return K0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function LM(e, t = ti) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = B0(e, t).map((s) => n.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = n.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Jx(e, a, DM);
}
const Cu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = fn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, d, u, c, p;
        if (!o) return;
        const a = tl(r, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...LM(o)].some((g) => tl(r, g)) || l0(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (U0(o), (d = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (p = (c = o.graph) == null ? void 0 : c.setDirtyCanvas) == null || p.call(c, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, fn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = fn) != null && e.removeEventListener) || (fn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function nl(e) {
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
  const i = `/view?${n.toString()}`;
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function VM(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function RM(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function $M(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function zM(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (VM(t)) return [t];
  const { filename: n, subfolder: r } = RM(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => nl({
    filename: n,
    subfolder: r,
    type: o
  }));
  return $M([...i, t]);
}
function jM(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? nl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Zr(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (tl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (tl(a, i)) return t[a];
  }
  return null;
}
function pa(e, t, n = null) {
  const r = n || Zr(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function Tn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Tn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return nl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Tn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : nl(e);
}
function rl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Tc(e) {
  return e ? e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? ["canvas", e.width, e.height, Number(e.__panoFrameIdx || 0)].join("|") : [
    String(e.currentSrc || e.src || ""),
    Number(e.naturalWidth || e.width || 0),
    Number(e.naturalHeight || e.height || 0)
  ].join("|") : "";
}
function Wd(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const i = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", o = new URL(n, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${i}pano_rev=${t}` : n;
  }
}
function HM(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function GM(e, t) {
  try {
    e.__panoOwnOutputRev = rM(e.__panoOwnOutputRev);
    const n = HM(t);
    let r = "";
    for (const i of n)
      if (r = Tn(i), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Wd(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function mo(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function WM(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!an(e, "background"))
    return mo(e), null;
  const i = Zr(r), o = Ed(i, t, Tn);
  if (!o)
    return mo(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = Wd(o, a), l = `${t.join("|")}:${s}`, d = e.__panoOwnOutputVideoCache;
  if (d && d.key === l) return d.player.failed() ? null : d.player.video;
  mo(e);
  const u = Zx({
    documentRef: document,
    src: s,
    onFrame: n
  });
  return u ? (e.__panoOwnOutputVideoCache = { key: l, player: u }, u.video) : null;
}
function KM(e, t = []) {
  var d, u;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = B0(e, t).map((c) => n.findIndex((p) => String((p == null ? void 0 : p.name) || "") === String(c))).filter((c) => c >= 0), o = n.map((c, p) => ({ input: c, idx: p })).filter(({ input: c }) => String((c == null ? void 0 : c.type) || "").toUpperCase() === "IMAGE").map(({ idx: c }) => c), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const c of a) {
    const p = n[c], g = e.graph ? e.getInputLink(c) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const y = g.origin_id, _ = K0(e, c, y);
    if (!_) continue;
    const b = Number(g.origin_slot ?? 0), C = Zr((_ == null ? void 0 : _.id) ?? y), U = Array.isArray(C == null ? void 0 : C.images) ? C.images : [];
    if (U.length) {
      const H = [];
      b >= 0 && b < U.length && H.push(U[b]), H.push(...U);
      for (const z of H.filter((ee) => !xs(ee))) {
        const ee = Tn(z);
        if (ee)
          return String((p == null ? void 0 : p.name) || ""), { src: `${ee}&pano_src=${vu(C)}`, sourceType: "nodeOutputs", inputName: String((p == null ? void 0 : p.name) || "") };
      }
    }
    let D = [];
    try {
      D = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(_) || [] : [];
    } catch {
      D = [];
    }
    if (Array.isArray(D) && D.length) {
      const H = [];
      b >= 0 && b < D.length && H.push(D[b]), H.push(...D);
      for (const z of H) {
        const ee = Tn(z);
        if (ee)
          return String((p == null ? void 0 : p.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((p == null ? void 0 : p.name) || "") };
      }
    }
    const T = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
    if (T.length) {
      const H = [];
      b >= 0 && b < T.length && H.push(T[b]), H.push(...T);
      for (const z of H) {
        const ee = Tn(z);
        if (ee)
          return String((p == null ? void 0 : p.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((p == null ? void 0 : p.name) || "") };
      }
    }
    const x = (d = _ == null ? void 0 : _.widgets) == null ? void 0 : d.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image");
    if (x) {
      let H = Tn(x.value);
      if (H && !H.includes("/") && !H.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (H = fn.apiURL(`/view?filename=${encodeURIComponent(H)}&type=input&subfolder=`)), H)
        return String((p == null ? void 0 : p.name) || ""), { src: H, sourceType: "widget", inputName: String((p == null ? void 0 : p.name) || "") };
    }
  }
  const s = an(e, "background") ? Zr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const c of l) {
      const p = Tn(c);
      if (p)
        return { src: p, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function BM(e, t = [], n = {}) {
  const r = KM(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = zM(i);
  if (!o.length) return null;
  const a = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const d = new Image(), u = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, e.__panoLinkedInputImageCache.set(s, u);
  let c = -1;
  const p = () => {
    var y, _, b, C;
    if (c += 1, c >= o.length) {
      if (((_ = (y = e.__panoLinkedInputImageCache) == null ? void 0 : y.get) == null ? void 0 : _.call(y, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (C = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.delete) == null || C.call(b, s);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const g = o[c];
    u.pendingResolvedSrc = g, d.src = g;
  };
  return d.onload = () => {
    var g, y, _;
    ((y = (g = e.__panoLinkedInputImageCache) == null ? void 0 : g.get) == null ? void 0 : y.call(g, s)) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, d.onerror = (g) => {
    var y, _, b, C;
    if (c + 1 < o.length) {
      p();
      return;
    }
    if (((_ = (y = e.__panoLinkedInputImageCache) == null ? void 0 : y.get) == null ? void 0 : _.call(y, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (C = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.delete) == null || C.call(b, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((g == null ? void 0 : g.type) || "error");
  }, p(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function UM(e, t = [], n = null, r = {}) {
  const i = BM(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function U0(e) {
  var t, n;
  if (e) {
    Hd.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, mo(e), e.__panoWrappedErpCache = null;
  }
}
function YM(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, mo(e), e.__panoWrappedErpCache = null;
  }
}
function Y0(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function os(e, t, n = "") {
  const r = Y0(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < MM ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function bh(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), a = n / i, s = r / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function qM(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * n)), l = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), d = Math.max(Math.round(34 * n), s + Math.round(14 * n)), u = r + (o - l) * 0.5, c = i + (a - d) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(u, c, l, d, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", u + l * 0.5, c + d * 0.5 + 0.5), e.restore();
}
function Dc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function XM(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === n);
    if (i) return i;
  }
  return t[0] || null;
}
function JM(e, t) {
  return j0(e, t);
}
function Na(e, t, n, r = null) {
  var p;
  if (!String(t || "")) return null;
  let o = jM(n);
  if (!o && (r != null && r.external)) {
    if (!an(e, "external-sticker")) return null;
    const g = Zr(e == null ? void 0 : e.id), y = ((p = g == null ? void 0 : g.ui) == null ? void 0 : p.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(y) ? y : [y])
      if (o = Tn(_), o) break;
  }
  if (!o) return null;
  const a = pa(e, "pano_sticker_input_state_hash"), s = r != null && r.external ? String(a ?? "") : "", l = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, d = r != null && r.external ? Wd(o, l) : o, u = iM(o, s, l);
  return Hd.get(e, u, d, (g, y) => {
    var _, b;
    y && (r != null && r.external && e.__panoOutputFromRun && Rr(e, "image-loaded"), (b = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || b.call(_));
  }) || null;
}
function ZM(e, t) {
  var c, p, g, y;
  const n = rP(e, t), r = iP(t), i = Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.groups) ? t.painting.groups : [], o = new Map(
    i.filter((_) => _ && typeof _ == "object").map((_) => [String((_ == null ? void 0 : _.actionGroupId) || (_ == null ? void 0 : _.id) || "").trim(), Number((_ == null ? void 0 : _.z_index) || 0)])
  ), a = n ? r.map((_) => {
    const b = n.getGroupDisplayCanvas(_);
    return b ? {
      id: `paint_group:${_}`,
      source: b,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${_}`,
      zIndex: Number(o.get(_) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((p = t == null ? void 0 : t.painting) == null ? void 0 : p.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (y = (g = e.__panoRasterObjectSurfaceCache) == null ? void 0 : g.retain) == null || y.call(g, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = nM()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, b;
    return (b = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : b.call(_);
  });
  const l = Qk(t == null ? void 0 : t.output_preset), d = s.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(d);
  const u = s.map((_) => {
    const b = e.__panoRasterObjectSurfaceCache.get(
      _,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return b ? {
      id: `raster:${String((_ == null ? void 0 : _.id) || "")}`,
      source: b.source,
      revision: b.revision,
      zIndex: Number((_ == null ? void 0 : _.z_index) || 0),
      opacity: 1,
      visible: (_ == null ? void 0 : _.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function QM(e, t, n, r) {
  var o, a, s, l, d, u;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const c = r.convertEventToCanvasOffset(t);
      if (Array.isArray(c) && c.length >= 2)
        return {
          x: Number(c[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(c[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
      y: Number(t.canvasY) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  const i = tP(e, t, r);
  return i || null;
}
function eP(e, t) {
  var c, p;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (c = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : c.call(i), a = (t == null ? void 0 : t.ds) || ((p = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : p.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], d = (n - Number(o.left || 0)) / s - Number(l[0] || 0), u = (r - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(d) || !Number.isFinite(u) ? null : { x: d, y: u };
}
function tP(e, t, n) {
  var i, o;
  const r = eP(t, n || (Lt == null ? void 0 : Lt.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function nP(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function rP(e, t) {
  var d, u, c, p, g, y, _, b, C, U, D, T;
  const n = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, r = (p = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.mask) == null ? void 0 : p.strokes, i = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!i && !o) return null;
  const a = nP(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = od(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: n || null,
    mask: r || null,
    groups: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.groups) || null,
    rasterObjects: ((y = t == null ? void 0 : t.painting) == null ? void 0 : y.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== l.paint || ((b = e.__panoPreviewPaintRevision) == null ? void 0 : b.mask) !== l.mask || ((C = e.__panoPreviewPaintRevision) == null ? void 0 : C.groups) !== l.groups || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function iP(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, i) => Number((r == null ? void 0 : r.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function oP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function aP(e, t, n) {
  const r = Rd(t, n);
  r.visible && Vd(e, r.boundaryEdges, { selected: !1 });
}
function sP(e, t, n) {
  const r = Rd(t, n);
  r.visible && (e.save(), Vd(e, r.boundaryEdges, { selected: !0 }), V0(e, r, { accent: Uk(t) }), e.restore());
}
function Iu(e, t, n) {
  return Jg(qs(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function il(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? wo;
}
function lP(e) {
  return [an(e, "background") ? Ed(Zr(e.id), ["pano_input_videos"], Tn) : "", xM(e, ti)];
}
function cP(e) {
  var o;
  if (!an(e, "external-sticker")) return null;
  const t = Zr(e.id), n = pa(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Tn), meta: n };
  const i = Ed(t, ["pano_sticker_input_videos"], Tn);
  return i ? { src: i, meta: n } : null;
}
function uP({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function vh(e, t, n) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: vr({ ...t, painting: null }) });
  const r = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = Na(e, a.id, Eg(a.source), { external: a.source.kind === "port" });
      const d = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && d) {
        const u = d.playback.stickerPicture(d.stickerStill, s), c = f0(d.playback.stickerMedia, s);
        return u ? { media: u, revision: Tc(u), source: c } : null;
      }
    } else {
      const d = a.type === "external_image" || a.source_kind === "external_image", u = String(a.asset_id || "") || (d ? String(a.id || "") : "");
      s = Na(e, u, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: d });
    }
    return rl(s) ? { media: s, revision: Tc(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : ZM(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: rl(n) ? { media: n, revision: Tc(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Zg(e.__panoSurfaceScene.sceneState, il(e), t.stickers, { media: r, paintLayers: i })
  };
}
function dP(e, t, n) {
  var T, x, H, z, ee, re, B;
  const r = String(e.__panoPreviewMode || "stickers");
  Y0(e, r);
  const i = xn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (H = (x = (T = e.__panoCutoutNodeSurface) == null ? void 0 : T.session) == null ? void 0 : x.refresh) == null || H.call(x)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (re = (ee = (z = e.__panoStickersNodeSurface) == null ? void 0 : z.session) == null ? void 0 : ee.refresh) == null || re.call(ee));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const d = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const u = (e.__panoSurfacePlayback ? uP(e.__panoSurfacePlayback) : WM(e, ["pano_input_videos"], () => {
    var G, Y;
    return (Y = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : Y.call(G);
  })) || UM(
    e,
    ti,
    () => {
      var G, Y;
      return (Y = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : Y.call(G);
    },
    { preserveReadyWhilePending: !1 }
  ), c = rl(u);
  let p = null;
  const g = (G, Y) => {
    p || (p = vh(e, i, u));
    const le = n.render({ width: G.w, height: G.h, camera: Y, ...p });
    return le && l.drawImage(le.canvas, le.x, le.y, le.width, le.height, G.x, G.y, G.w, G.h), !!le;
  };
  if (r === "cutout") {
    const G = XM(i), Y = oP(u), le = G ? Fe(Qr(G).aspect, 0.1, 10) : c ? Fe(Number(Y.width / Y.height), 0.05, 20) : 1, ve = Dd(d, le);
    e.__panoCutoutNodeFrame = ve;
    let ge = "none";
    const he = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (G)
      if (u && !c)
        ge = "loading";
      else if (c) {
        const Z = bk({ width: a, height: s }, ve, G);
        [
          !Z.fallback || g(Z.fallback.rect, da(Z.fallback.shot)),
          g(Z.rect, da(Z.shot)),
          !Z.fallback || g(ve, da(G))
        ].every(Boolean) || (ge = "loading");
      } else
        ge = "empty";
    else {
      const Z = e.__panoLastCutoutShot;
      Z ? (e.__panoPreviewView = C0(Z, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), c ? g(d, qs(e.__panoPreviewView, a, s)) || (ge = "loading") : u ? ge = "loading" : ge = "empty";
    }
    c || n.release(), n.failed && ge === "loading" && (ge = "none"), G && (e.__panoLastCutoutShot = { ...G }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(ve.x, ve.y, ve.w, ve.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(ve.x + 0.5, ve.y + 0.5, Math.max(0, ve.w - 1), Math.max(0, ve.h - 1)), l.restore()), ge === "loading" ? (Dc(e, !1), os(e, !0, he)) : ge === "empty" ? (Dc(e, !0), os(e, !1, "")) : (Dc(e, !1), os(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let y = !1;
  (!u || c) && (p = vh(e, i, u), !p.background && !p.layers.length ? (n.release(), y = !0) : y = g(d, qs(e.__panoPreviewView, a, s)));
  const _ = !y && !n.failed;
  os(e, _, _ ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), _ && qM(l, d, bh(t, d));
  const b = Iu(e, a, s);
  !u && y && fP(l, b, bh(t, d));
  const C = String(((B = i == null ? void 0 : i.active) == null ? void 0 : B.selected_sticker_id) || ""), U = _u(i, il(e)), D = y ? U.find((G) => String((G == null ? void 0 : G.id) || "") === C && (G == null ? void 0 : G.visible) !== !1) : null;
  y && U.filter((G) => G !== D && (G == null ? void 0 : G.visible) !== !1 && (G.external || G.source_kind === "external_image")).filter((G) => !rl(Na(e, G.id, null, { external: !0 }))).forEach((G) => aP(l, G, b)), D && sP(l, D, b);
}
function _h(e, t, n, r, i = 1) {
  let o = !1;
  e.strokeStyle = r, e.lineWidth = i, e.beginPath();
  for (const a of t) {
    const s = n.project(a);
    if (s.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), o = !0);
  }
  e.stroke();
}
function fP(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let d = -180; d <= 180; d += 4) l.push(Nn(d, s));
    _h(e, l, t, s === 0 ? i : r, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let d = -89; d <= 89; d += 4) l.push(Nn(s, d));
    _h(e, l, t, r, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Nn(0, 0) },
    { name: "Right", dir: Nn(90, 0) },
    { name: "Back", dir: Nn(180, 0) },
    { name: "Left", dir: Nn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * n));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * n);
  }), e.restore();
}
function Eu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function pP(e, t, n = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function $n(e, t) {
  return pP(e, t) ? !1 : (Eu(e), !0);
}
function Sh() {
  var n;
  const e = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function hP(e) {
  var n;
  if (!e) return;
  const t = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function mP(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !H0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function gP(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function wh(e, t = null, n = 0, r = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && yP(e, 180, t);
    }
  };
}
function yP(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ea(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const bP = /* @__PURE__ */ new WeakMap();
function q0(e, t) {
  return l0(bP, e, t) ? !1 : (GM(e, t), U0(e), ea(e), !0);
}
async function vP(e) {
  var n, r;
  const t = await qx(e, Lt, fn);
  t && (q0(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function _P(e, t = {}) {
  var Ce;
  const n = t.__allowStandalone === !0, r = G0(e);
  if (r && !n) {
    Gd(e);
    return;
  }
  r && mP(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: gh(e)
  }, s = "dom", l = a.signature || gh(e);
  if (Number(e.__panoRebindGeneration || 0), Au(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Nu(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (Ce = e.__panoDomPreview) != null && Ce.widget || (e.__panoLegacyPreviewHooked && Ns(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const d = t.noPreview === !0, u = d ? 0 : 56, c = d ? 0 : hk, p = document.createElement("div");
  if (AM(), p.className = "pano-node-preview-dom", p.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && p.classList.add("pano-node-preview--no-preview"), p.setAttribute("data-capture-wheel", "true"), p.tabIndex = 0, p.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    c > 0 ? `min-height:${c}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const O = el(Mu(
      e.addDOMWidget(Pu(), "preview", p, wh(e, null))
    ));
    ea(e), e.__panoDomPreview = { widget: O, root: p, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const g = document.createElement("div");
  g.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const y = mn({ label: "node.surface" });
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
  const _ = document.createElement("div");
  _.style.cssText = [
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
  ].join(";"), _.textContent = "Connect ERP image", g.appendChild(y), g.appendChild(_), p.appendChild(g);
  const b = Jm(p), C = document.createElement("div");
  C && (C.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", C.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", p.appendChild(C)), CM(e, 120, 120), ea(e);
  let U = null;
  try {
    gP(e, u, () => {
      var O, me;
      return (me = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : me.call(O);
    }), U = el(Mu(e.addDOMWidget(
      Pu(),
      "preview",
      p,
      wh(
        e,
        () => {
          var O, me;
          return (me = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : me.call(O);
        },
        u,
        c,
        !1
      )
    )));
  } catch {
    return;
  }
  const D = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    D.destroyed || (D.needsDraw = !0, !D.inTick && !D.raf && (D.raf = requestAnimationFrame(xe)));
  }, x = e0(T), H = /* @__PURE__ */ ko(i ? { ...x0(xn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...N0(xn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((O) => ({ value: O, label: O }))
  });
  let z = null;
  if (i && e.__panoSceneStateV2) {
    const [O, me] = [0, 1].map(() => {
      const Ge = xl(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", g.appendChild(Ge), Ge;
    }), Ie = mn({ label: "node.still" });
    Ie.__panoFrameIdx = 0;
    const Ve = mn({ label: "node.port-still" });
    Ve.__panoFrameIdx = 0;
    const Ke = fk({
      video: O,
      stickerVideo: me,
      createImage: (Ge, Ue) => {
        const tt = new Image();
        return tt.onload = Ue, tt.onerror = Ue, tt.src = Ge, tt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => xn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: T,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(O.videoWidth > 0 && O.videoHeight > 0)) return;
        const Ge = Math.min(1, PM / O.videoWidth);
        Ie.width = Math.round(O.videoWidth * Ge), Ie.height = Math.round(O.videoHeight * Ge), (Ue = Ie.getContext("2d")) == null || Ue.drawImage(O, 0, 0, Ie.width, Ie.height), Ie.__panoFrameIdx += 1, T();
      },
      onStickerCapture: () => {
        var Ge;
        me.videoWidth > 0 && me.videoHeight > 0 && (Ve.width = me.videoWidth, Ve.height = me.videoHeight, (Ge = Ve.getContext("2d")) == null || Ge.drawImage(me, 0, 0), Ve.__panoFrameIdx += 1, T());
      },
      onChange: () => {
        H.playing = Ke.playing, T();
      }
    });
    z = { playback: Ke, video: O, still: Ie, stickerVideo: me, stickerStill: Ve, stickerSource: "" }, e.__panoSurfacePlayback = z;
  }
  const ee = () => {
    var tt;
    const { playback: O, still: me, stickerStill: Ie } = z, Ve = wu(g, !!((tt = e.flags) != null && tt.collapsed)), Ke = O.source, Ge = Ve ? cP(e) : null, Ue = O.follow({
      shown: Ve,
      sources: Ve ? lP(e) : [],
      state: xn(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== z.stickerSource && (z.stickerSource = (Ge == null ? void 0 : Ge.src) || "", eu(Ie)), O.source !== Ke && (eu(me), me.__panoFrameIdx = 0), H.playable = Ue, H.playing = O.playing;
  }, re = () => {
    var me, Ie;
    const O = ((me = e.__panoOwnOutputVideoCache) == null ? void 0 : me.player) ?? null;
    O && !wu(g, !!((Ie = e.flags) != null && Ie.collapsed)) && O.pause(), i && (H.playable = !!O && !O.failed(), H.playing = !!(O != null && O.playing));
  }, B = () => {
    var O;
    z == null || z.playback.pause(), (O = e.__panoOwnOutputVideoCache) == null || O.player.pause();
  };
  let G = null;
  const Y = (i ? uk : _k)({
    readState: () => xn(e),
    publishLiveState: (O) => {
      O ? (G = O, e.__panoLiveStateOverride = O) : (e.__panoLiveStateOverride === G && (e.__panoLiveStateOverride = null), G = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: (O) => {
      var Ve, Ke, Ge, Ue;
      const me = ho(e, "state_json");
      if (!me) return;
      Fg(e, O.active);
      const Ie = Dg(e, O);
      Lg(e, Ie, String(me.value ?? "")) || (me.value = Ie, (Ve = me.callback) == null || Ve.call(me, Ie), e.__panoStateCache = null, (Ke = e.setDirtyCanvas) == null || Ke.call(e, !0, !0), (Ue = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || Ue.call(Ge, !0, !0));
    },
    onChange: (O) => Object.assign(H, O)
  }), ve = i ? R0(e, (O = "sync", me = null) => {
    var nn;
    if (!i || !e.graph || !Y || Y.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Xt = an(e, "external-sticker"), ni = xn(e).stickers.find((Ti) => Ti.source.kind === "port");
      return Y.apply({
        type: "sync-port",
        value: S0(e, {
          pose: Xt ? pa(e, "pano_sticker_input_pose", me) : null,
          image: ni ? Na(e, ni.id, null, { external: !0 }) : null
        })
      });
    }
    const Ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Xt) => String((Xt == null ? void 0 : Xt.name) || "") === "sticker_image") : -1, Ve = Ie >= 0 ? ((nn = e.getInputLink(Ie)) == null ? void 0 : nn.id) ?? null : null;
    if (Ve == null)
      return Y.apply({ type: "sync-external", value: { connected: !1 } });
    if (!an(e, "external-sticker")) return !1;
    const Ke = pa(e, "pano_sticker_input_pose", me), Ge = Array.isArray(Ke) ? Ke[0] : Ke, Ue = String(pa(e, "pano_sticker_input_state_hash", me) ?? ""), tt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, ct = xn(e), At = (Array.isArray(ct == null ? void 0 : ct.stickers) ? ct.stickers : []).find((Xt) => String((Xt == null ? void 0 : Xt.id) || "") === "sticker_image_1"), $t = Na(e, "sticker_image_1", null, { external: !0 }), yn = Ge && typeof Ge == "object" ? Ge : At || { yaw_deg: tt.yaw, pitch_deg: tt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return Y.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ve,
        stateHash: Ue,
        pose: yn,
        imageWidth: Number(($t == null ? void 0 : $t.naturalWidth) || ($t == null ? void 0 : $t.width) || 0),
        imageHeight: Number(($t == null ? void 0 : $t.naturalHeight) || ($t == null ? void 0 : $t.height) || 0)
      }
    });
  }) : () => {
  };
  let ge = 0;
  const he = async (O) => {
    if (!i || !Y || !tr(O)) return !1;
    B();
    const me = `asset_${Math.random().toString(16).slice(2, 10)}`, Ie = `st_${Math.random().toString(16).slice(2, 10)}`, Ve = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    ge += 1, H.importing = !0;
    const Ke = Zo(e, `add:${me}`, async () => {
      const Ge = await Qo(O), Ue = await bi(O, {
        fetchApi: (tt, ct) => fn.fetchApi(tt, ct)
      });
      return we(), Y.apply({
        type: "add-sticker",
        value: {
          stickerId: Ie,
          assetId: me,
          asset: Ue,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Ve.yaw || 0),
          pitch_deg: Number(Ve.pitch || 0)
        }
      });
    });
    try {
      return await Ke;
    } catch {
      return !1;
    } finally {
      ge = Math.max(0, ge - 1), H.importing = ge > 0, T();
    }
  };
  let Z = null, E = null, W = null, de = !1;
  const fe = () => {
    var O;
    return W && (clearTimeout(W), W = null), de ? (de = !1, ((O = Y == null ? void 0 : Y.commitGesture) == null ? void 0 : O.call(Y)) ?? !1) : !1;
  }, we = () => {
    var Ve, Ke, Ge;
    const O = fe(), me = (Z == null ? void 0 : Z.pointerId) ?? (E == null ? void 0 : E.pointerId);
    if (Z = null, E = null, me != null) {
      try {
        (Ve = y.hasPointerCapture) != null && Ve.call(y, me) && ((Ke = y.releasePointerCapture) == null || Ke.call(y, me));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ie = ((Ge = Y == null ? void 0 : Y.commitGesture) == null ? void 0 : Ge.call(Y)) ?? !1;
    return O || Ie;
  }, $e = () => {
    var Ve, Ke, Ge;
    const O = fe(), me = Z == null ? void 0 : Z.pointerId;
    if (Z = null, me != null) {
      try {
        (Ve = y.hasPointerCapture) != null && Ve.call(y, me) && ((Ke = y.releasePointerCapture) == null || Ke.call(y, me));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ie = ((Ge = Y == null ? void 0 : Y.cancelGesture) == null ? void 0 : Ge.call(Y)) ?? !1;
    return O || Ie;
  }, oe = () => we();
  Y && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(oe));
  let V = null, ae = !1;
  if (C && Y)
    try {
      $d(), V = td(i ? Bk : Rk, {
        model: H,
        onAction: (O) => {
          var Ve, Ke, Ge;
          if ((O == null ? void 0 : O.type) === "toggle-playback") {
            we(), z ? z.playback.toggle() : (Ve = e.__panoOwnOutputVideoCache) == null || Ve.player.toggle(), T();
            return;
          }
          if (B(), (O == null ? void 0 : O.type) === "open-editor") {
            we(), i || (H.aspectOpen = !1), (Ke = e.__panoOpenEditor) == null || Ke.call(e);
            return;
          }
          if (i) {
            if ((O == null ? void 0 : O.type) === "add-image-file") {
              he(O.file);
              return;
            }
            Y.apply(O) && T();
            return;
          }
          if ((O == null ? void 0 : O.type) === "toggle-aspect") {
            H.aspectOpen = !H.aspectOpen;
            return;
          }
          if ((O == null ? void 0 : O.type) === "close-aspect") {
            H.aspectOpen = !1;
            return;
          }
          let me = O;
          if ((O == null ? void 0 : O.type) === "add-frame") {
            const Ue = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            me = {
              ...O,
              ...gk(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((O == null ? void 0 : O.type) === "delete-frame") {
            const Ue = Ni(xn(e));
            Ue && (e.__panoPreviewView = C0(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ie = ((Ge = e.__panoCutoutNodeFrame) == null ? void 0 : Ge.safeRect) || null;
          H.aspectOpen = !1, Y.apply({ ...me, safeRect: Ie }) && T();
        }
      }), V.mount(C), ae = !0;
    } catch {
      V = null, ae = !1;
    }
  const pe = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    z && ee(), T();
  }) : null;
  pe == null || pe.observe(g);
  const xe = (O) => {
    var Ie, Ve;
    D.raf = 0, D.inTick = !0;
    let me = !1;
    try {
      me = Oe.stepInertia(O), (D.needsDraw || me) && (D.needsDraw = !1, z ? ee() : re(), (Ie = e.flags) != null && Ie.collapsed || dP(e, y, x), H.viewUnavailable = x.failed);
    } finally {
      D.inTick = !1;
    }
    (me || D.needsDraw) && !D.raf && (D.raf = requestAnimationFrame(xe)), NM() && (!e.__panoDebugLastTs || O - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = O, e.__panoPreviewMode, Nu(e), Uo(p), Uo(g), Uo(y), Uo(p.parentElement), Uo((Ve = p.parentElement) == null ? void 0 : Ve.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, Oe = sd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (O) => {
      e.__panoPreviewView = O;
    },
    getViewportSize: () => {
      const O = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(O.width || y.clientWidth || 0)),
        h: Math.max(1, Number(O.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const O = mh();
      return {
        x: O.invert_view_x ? -1 : 1,
        y: O.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), ie = i ? g : p, Pe = (O) => {
    const me = y.getBoundingClientRect();
    return {
      x: (Number(O.clientX) - me.left) * (y.width / Math.max(1, me.width)),
      y: (Number(O.clientY) - me.top) * (y.height / Math.max(1, me.height))
    };
  }, w = (O) => {
    var Ve, Ke;
    if (!i || !o) return;
    const me = xn(e), Ie = uh(
      _u(me, il(e)),
      String(((Ve = me == null ? void 0 : me.active) == null ? void 0 : Ve.selected_sticker_id) || ""),
      Pe(O),
      Iu(e, y.width, y.height)
    );
    if (!Ie) {
      y.style.cursor = "grab";
      return;
    }
    if (((Ke = Ie.item) == null ? void 0 : Ke.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ie.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (O) => {
    var tt, ct, At, $t, yn, Rn, nn, Xt, ni, Ti, Ta;
    if (!$n(O, ie) || O.button !== 0) return;
    if (!i) {
      const bn = Ni(xn(e)), Yn = e.__panoCutoutNodeFrame;
      if (!bn) {
        (tt = p.focus) == null || tt.call(p, { preventScroll: !0 }), (ct = y.setPointerCapture) == null || ct.call(y, O.pointerId), y.style.cursor = "grabbing", Oe.startDrag(O.clientX, O.clientY, O.pointerId);
        return;
      }
      if (bn.locked === !0 || !Yn || !Y) return;
      const Da = Pe(O);
      let Di;
      if (O.shiftKey) {
        const Gr = E0({
          frame: Yn,
          point: Da,
          startRollDeg: Number(bn.roll_deg ?? bn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Gr) return;
        Di = { kind: "roll", pointerId: O.pointerId, rollGesture: Gr };
      } else {
        const Gr = ((At = xn(e)) == null ? void 0 : At.ui_settings) || mh();
        Di = {
          kind: "pan",
          pointerId: O.pointerId,
          startPoint: Da,
          startShot: { ...bn },
          focalPx: Ci(Yn, bn),
          invertX: Gr.invert_view_x === !0,
          invertY: Gr.invert_view_y === !0
        };
      }
      we(), ($t = p.focus) == null || $t.call(p, { preventScroll: !0 }), (yn = y.setPointerCapture) == null || yn.call(y, O.pointerId), y.style.cursor = "grabbing", Y.beginGesture(), Z = Di;
      return;
    }
    if (!o) return;
    const me = Pe(O), Ie = xn(e), Ve = String(((Rn = Ie == null ? void 0 : Ie.active) == null ? void 0 : Rn.selected_sticker_id) || ""), Ke = Iu(e, y.width, y.height);
    (nn = p.focus) == null || nn.call(p, { preventScroll: !0 });
    const Ge = () => uh(_u(Ie, il(e)), Ve, me, Ke);
    let Ue = Ge();
    if (Ue && (z != null && z.playback.playing) && (B(), Ue = Ge()), Ue && Y) {
      if (Oe.stopMotion(), we(), String(((Xt = Ue.item) == null ? void 0 : Xt.id) || "") !== Ve && Y.apply({ type: "select-sticker", id: Ue.item.id }), ((ni = Ue.item) == null ? void 0 : ni.locked) === !0) {
        T();
        return;
      }
      const bn = me, Yn = Ue.geometry.center;
      E = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: O.pointerId,
        startPoint: bn,
        startCenter: { ...Yn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(bn.x - Yn.x, bn.y - Yn.y)),
        startAngle: Math.atan2(bn.y - Yn.y, bn.x - Yn.x),
        projection: Ke
      }, Y.beginGesture(), (Ti = y.setPointerCapture) == null || Ti.call(y, O.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, T();
      return;
    }
    (Ta = y.setPointerCapture) == null || Ta.call(y, O.pointerId), y.style.cursor = "grabbing", Oe.startDrag(O.clientX, O.clientY, O.pointerId);
  }), y.addEventListener("pointermove", (O) => {
    if (!i) {
      if (!Z) {
        if (!Oe.state.drag.active) return;
        $n(O, ie), Oe.moveDrag(O.clientX, O.clientY, "pano");
        return;
      }
      if (Z.pointerId !== O.pointerId || !Y) return;
      if ($n(O, ie), Z.kind === "pan") {
        const Ie = Pe(O);
        Y.updateGesture({
          type: "pan-camera",
          startShot: Z.startShot,
          dx: Ie.x - Z.startPoint.x,
          dy: Ie.y - Z.startPoint.y,
          focalPx: Z.focalPx,
          invertX: Z.invertX,
          invertY: Z.invertY
        });
        return;
      }
      const me = O0(Z.rollGesture, Pe(O), O);
      if (!me) return;
      Z.rollGesture = me.gesture, Y.updateGesture({ type: "set-roll", value: me.rollDeg });
      return;
    }
    if (!E && !Oe.state.drag.active) {
      w(O);
      return;
    }
    if (E) {
      if (E.pointerId !== O.pointerId || !Y) return;
      $n(O, ie);
      const me = Pe(O);
      let Ie = E.startSticker;
      if (E.kind === "move")
        Ie = Xk(
          E.startSticker,
          {
            x: E.startCenter.x + me.x - E.startPoint.x,
            y: E.startCenter.y + me.y - E.startPoint.y
          },
          E.projection
        );
      else if (E.kind === "scale") {
        const Ve = Math.hypot(me.x - E.startCenter.x, me.y - E.startCenter.y);
        Ie = Jk(E.startSticker, E.startDistance, Ve);
      } else if (E.kind === "rotate") {
        const Ve = Math.atan2(me.y - E.startCenter.y, me.x - E.startCenter.x);
        Ie = Zk(E.startSticker, E.startAngle, Ve, O.shiftKey === !0);
      }
      Y.updateGesture({ type: "set-transform", value: Ie }), T();
      return;
    }
    !o || !Oe.state.drag.active || ($n(O, ie), Oe.moveDrag(O.clientX, O.clientY, "pano"));
  });
  const N = () => {
    var me, Ie;
    if (!Z && !E) {
      if (!Oe.state.drag.active) return;
      Oe.endDrag(), y.style.cursor = "grab", T();
      return;
    }
    if (!Y) return;
    const O = (Z == null ? void 0 : Z.pointerId) ?? (E == null ? void 0 : E.pointerId);
    Z = null, E = null;
    try {
      (me = y.hasPointerCapture) != null && me.call(y, O) && ((Ie = y.releasePointerCapture) == null || Ie.call(y, O));
    } catch {
    }
    Y.cancelGesture(), y.style.cursor = "grab", T();
  }, J = (O, me = !1) => {
    var Ie, Ve, Ke, Ge;
    if (!i) {
      if (!Z) {
        if (!Oe.state.drag.active) return;
        $n(O, ie), (Ie = y.releasePointerCapture) == null || Ie.call(y, O.pointerId), y.style.cursor = "grab", Oe.endDrag(), T();
        return;
      }
      if (Z.pointerId !== O.pointerId || !Y) return;
      $n(O, ie), Z = null, (Ve = y.releasePointerCapture) == null || Ve.call(y, O.pointerId), y.style.cursor = "grab", me ? Y.cancelGesture() : Y.commitGesture(), w(O), T();
      return;
    }
    if (E) {
      if (E.pointerId !== O.pointerId || !Y) return;
      $n(O, ie), E = null, (Ke = y.releasePointerCapture) == null || Ke.call(y, O.pointerId), y.style.cursor = "grab", me ? Y.cancelGesture() : Y.commitGesture(), T();
      return;
    }
    !o || !Oe.state.drag.active || ($n(O, ie), (Ge = y.releasePointerCapture) == null || Ge.call(y, O.pointerId), y.style.cursor = "grab", Oe.endDrag(), T());
  };
  y.addEventListener("pointerup", J), y.addEventListener("pointercancel", (O) => J(O, !0)), y.addEventListener("lostpointercapture", N), y.addEventListener("pointerleave", (O) => {
    !i && Z || E || Oe.state.drag.active && J(O);
  });
  const ue = (O) => {
    const me = document.activeElement;
    if (me !== p && !p.contains(me)) return;
    if (O.key === "Escape" && (Z || E) && Y) {
      N(), Eu(O);
      return;
    }
    if (!i || O.key !== "Delete" && O.key !== "Backspace" || !Y) return;
    const Ie = O.target, Ve = String((Ie == null ? void 0 : Ie.tagName) || "").toUpperCase();
    Ve === "INPUT" || Ve === "TEXTAREA" || Ie != null && Ie.isContentEditable || H.canDelete === !0 && (B(), we(), Y.apply({ type: "delete-selected" }) && T(), Eu(O));
  };
  window.addEventListener("keydown", ue, !0);
  const P = wM({
    requestFrame: (O) => requestAnimationFrame(O),
    cancelFrame: (O) => cancelAnimationFrame(O),
    restore: (O) => hP(O)
  }), F = (O) => {
    var Ie, Ve, Ke, Ge, Ue, tt;
    if (!$n(O, ie)) return;
    if (!i) {
      const ct = Ni(xn(e));
      if (ct && ct.locked !== !0 && Y) {
        const At = Rs(O);
        At !== 0 && (de || (we(), Y.beginGesture(), de = !0), Y.updateGesture({
          type: "step-fov",
          direction: At
        }) ? (W && clearTimeout(W), W = setTimeout(fe, 180), T()) : Y.hasGestureChanges() || (Y.cancelGesture(), de = !1));
      } else if (!ct) {
        const At = Sh();
        Oe.applyWheelEvent(O) && T(), P.schedule(At);
      }
      (Ie = O.preventDefault) == null || Ie.call(O), (Ve = O.stopPropagation) == null || Ve.call(O), (Ke = O.stopImmediatePropagation) == null || Ke.call(O);
      return;
    }
    if (!o) return;
    const me = Sh();
    Oe.applyWheelEvent(O) && T(), (Ge = O.preventDefault) == null || Ge.call(O), (Ue = O.stopPropagation) == null || Ue.call(O), (tt = O.stopImmediatePropagation) == null || tt.call(O), P.schedule(me);
  }, q = i ? [g, y] : [g];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((O) => {
    q.forEach((me) => me.addEventListener(O, F, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((O) => {
    y.addEventListener(O, (me) => $n(me, ie)), g.addEventListener(O, (me) => $n(me, ie));
  });
  const k = ho(e, "state_json");
  let A = null, I = null;
  k && !k.__panoPreviewPatchedCb && (A = k.callback, I = (O) => {
    const me = A ? A(O) : void 0;
    return T(), me;
  }, k.callback = I, k.__panoPreviewPatchedCb = I);
  const K = ho(e, "bg_color");
  let X = null, Q = null;
  K && !K.__panoPreviewPatchedCb && (X = K.callback, Q = (O) => {
    const me = X ? X(O) : void 0;
    return T(), me;
  }, K.callback = Q, K.__panoPreviewPatchedCb = Q);
  const R = e.onRemoved, te = e.onResize, Me = e.onExecuted, Te = e.onDragOver, se = e.onDragDrop;
  let be = null;
  const Se = () => {
    i && (H.dropActive = !0, be && clearTimeout(be), be = setTimeout(() => {
      be = null, H.dropActive = !1;
    }, 140));
  }, m = i ? function(O) {
    return (Te ? Te.apply(this, arguments) : !1) === !0 ? !0 : jd(O == null ? void 0 : O.dataTransfer) ? (Se(), !0) : !1;
  } : null, f = i ? function(O) {
    var Ve;
    if ((se ? se.apply(this, arguments) : !1) === !0) return !0;
    const Ie = Array.from(((Ve = O == null ? void 0 : O.dataTransfer) == null ? void 0 : Ve.files) || []).find((Ke) => tr(Ke));
    return Ie ? (be && clearTimeout(be), be = null, H.dropActive = !1, he(Ie), !0) : !1;
  } : null;
  i && (e.onDragOver = m, e.onDragDrop = f);
  const $ = i ? SM(p, {
    onActive: (O) => {
      if (O) {
        Se();
        return;
      }
      be && clearTimeout(be), be = null, H.dropActive = !1;
    },
    onDrop: (O) => {
      he(O);
    }
  }) : () => {
  }, S = function(O) {
    e.__panoOutputFromRun = !0;
    const me = q0(e, O);
    Rr(e, me ? "executed" : "sync", O), T();
    const Ie = Me ? Me.apply(this, arguments) : void 0;
    return ea(e), Ie;
  };
  e.onExecuted = S;
  const v = e.onConnectionsChange, j = function(O, me) {
    const Ie = Zp(e, O, me, Cd), Ve = Zp(e, O, me, ti), Ke = arguments, Ge = v ? v.apply(this, Ke) : void 0, Ue = () => {
      D.destroyed || (Ve && YM(e), Ie && Rr(e, "connection-change"), ea(e), T());
    };
    return Ue(), queueMicrotask(Ue), Ge;
  };
  e.onConnectionsChange = j;
  const ce = function() {
    const O = te ? te.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, T(), O;
  };
  e.onResize = ce;
  const ne = function() {
    return Ae(), Cu.unregister(this), R ? R.apply(this, arguments) : void 0;
  };
  e.onRemoved = ne;
  const Ae = () => {
    var O, me, Ie, Ve, Ke, Ge, Ue, tt, ct;
    D.destroyed = !0, (O = pe == null ? void 0 : pe.disconnect) == null || O.call(pe), i ? we() : $e(), y.removeEventListener("lostpointercapture", N), $(), b(), window.removeEventListener("keydown", ue, !0), (Ie = (me = e.__panoStateFlushers) == null ? void 0 : me.delete) == null || Ie.call(me, oe), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ve = Y == null ? void 0 : Y.destroy) == null || Ve.call(Y), (Ke = V == null ? void 0 : V.unmount) == null || Ke.call(V), z && (z.playback.dispose(), z.video.remove(), z.stickerVideo.remove(), e.__panoSurfacePlayback === z && (e.__panoSurfacePlayback = null)), x.dispose(), e.__panoSurfaceScene = null, (Ue = (Ge = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ge.dispose) == null || Ue.call(Ge), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ve(), P.dispose(), be && clearTimeout(be), be = null, Hd.disposeOwner(e), mo(e), D.raf && cancelAnimationFrame(D.raf), D.raf = 0, ((tt = e.__panoCutoutNodeSurface) == null ? void 0 : tt.session) === Y && (e.__panoCutoutNodeSurface = null), ((ct = e.__panoStickersNodeSurface) == null ? void 0 : ct.session) === Y && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ce && (e.onResize = te), e.onExecuted === S && (e.onExecuted = Me), e.onConnectionsChange === j && (e.onConnectionsChange = v), I && (k == null ? void 0 : k.callback) === I && (k.callback = A), I && (k == null ? void 0 : k.__panoPreviewPatchedCb) === I && delete k.__panoPreviewPatchedCb, Q && (K == null ? void 0 : K.callback) === Q && (K.callback = X), Q && (K == null ? void 0 : K.__panoPreviewPatchedCb) === Q && delete K.__panoPreviewPatchedCb, e.onDragOver === m && (e.onDragOver = Te), e.onDragDrop === f && (e.onDragDrop = se), e.onRemoved === ne && (e.onRemoved = R);
  };
  e.__panoDomRestore = Ae, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = Y && ae && !i ? { session: Y, model: H } : null, e.__panoStickersNodeSurface = Y && ae && i ? { session: Y, model: H } : null, e.__panoDomPreview = {
    widget: U,
    root: p,
    canvas: y,
    requestDraw: T,
    state: D,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Cu.register(e), e.graph && Rr(e, "attach"), T();
}
function xh(e, t = {}) {
  W0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function kh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (G0(e) && !n) {
    Gd(e);
    return;
  }
  W0(e).attach(t);
}
function SP(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function wP(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(s) ? s : 0) * o, u = Number(n), c = u > 0 ? u : 1 / 0, p = Math.max(l, d);
  let g = p > 0 ? Math.min(1, c / p) : 1;
  return r && l > 0 && d > 0 && (g = Math.min(g, r.width * o / l, r.height * o / d)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(d * g))
  };
}
function xP({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var g;
  const i = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, d = () => {
    const y = l();
    return y === s || (s = y, i(y)), y;
  }, u = () => d();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", u), d(), { toggle: async () => {
    var y;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((y = t.exitFullscreen) == null ? void 0 : y.call(t));
      } catch {
      }
      return a ? !1 : (d(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return d(), !0;
      } catch {
      }
    return a || (o(), d()), !1;
  }, isActive: l, destroy: () => {
    var y, _, b;
    if (!a) {
      if (a = !0, (y = t == null ? void 0 : t.removeEventListener) == null || y.call(t, "fullscreenchange", u), l())
        try {
          const C = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (b = C == null ? void 0 : C.catch) == null || b.call(C, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const kP = { class: "pano-preview-node-surface" }, MP = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Re(), He("div", kP, [
      Qe(Zt, {
        icon: e.model.fullscreen ? at(Ye).fullscreen_close : at(Ye).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (Re(), Kn(Ld, { key: 0 })) : ht("", !0)
    ]));
  }
}, as = 140, PP = 180, Mh = 40, Lc = 10;
function Ph(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Nh(e, t) {
  const n = Ph(e), r = Ph(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ah(e) {
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
  const i = `/view?${n.toString()}`;
  return typeof ((o = fn) == null ? void 0 : o.apiURL) == "function" ? fn.apiURL(i) : i;
}
function go(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return go(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Ah({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = go(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ah(e);
}
function X0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function NP(e) {
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
function Ou(e) {
  var i;
  const t = (i = nr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Nh(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Nh(o, n)) return t[o];
  return null;
}
function AP(e) {
  var r, i;
  const t = Ou(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const a of o) {
        const s = go(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function CP(e, t = "erp_image") {
  var g, y, _, b, C, U, D;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((T) => String((T == null ? void 0 : T.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((T, x) => String((T == null ? void 0 : T.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(x))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (_ = (y = (g = nr) == null ? void 0 : g.graph) == null ? void 0 : y.getNodeById) == null ? void 0 : _.call(y, o), s = Ou(o), l = Ou(e == null ? void 0 : e.id), d = [
    (b = l == null ? void 0 : l.ui) == null ? void 0 : b.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (C = s == null ? void 0 : s.ui) == null ? void 0 : C.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const T of d)
    if (Array.isArray(T))
      for (const x of T) {
        const H = go(x);
        if (H) return H;
      }
  let u = [];
  try {
    u = typeof ((U = nr) == null ? void 0 : U.getNodeImageUrls) == "function" ? nr.getNodeImageUrls(a) || [] : [];
  } catch {
    u = [];
  }
  if (Array.isArray(u) && u.length > 0)
    for (const T of u) {
      const x = go(T);
      if (x) return x;
    }
  if (a) {
    const T = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const x of T) {
      const H = go(x);
      if (H) return H;
    }
  }
  const c = (D = a == null ? void 0 : a.widgets) == null ? void 0 : D.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image"), p = String((c == null ? void 0 : c.value) || "").trim();
  return p ? fn.apiURL(`/view?filename=${encodeURIComponent(p)}&type=input&subfolder=`) : "";
}
function Vc(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Ch(e, t, n, r, i, o, a) {
  var d, u, c;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !X0(o) || n <= 1 || r <= 1) {
    Vc(t, n, r);
    return;
  }
  if (a.failed) {
    Vc(t, n, r);
    return;
  }
  const s = Number(((c = (u = (d = e == null ? void 0 : e.widgets) == null ? void 0 : d.find) == null ? void 0 : u.call(d, (p) => (p == null ? void 0 : p.name) === "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: n,
    height: r,
    camera: qs(i, n, r),
    background: { media: o, revision: NP(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, n, r) : Vc(t, n, r);
}
function Ih(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class IP {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = e0(() => this.requestDraw()), this.controller = sd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Dt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Fe(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Fe(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, a, s;
        const r = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((a = this.canvas) == null ? void 0 : a.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((s = this.canvas) == null ? void 0 : s.clientHeight) || 0))
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
    var r, i, o;
    const t = this;
    this.node.onExecuted = function() {
      const a = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), a;
    }, this.node.onConnectionsChange = function() {
      const a = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), a;
    }, this.node.onResize = function() {
      const a = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), a;
    }, this.node.onRemoved = function() {
      const a = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), a;
    };
    const n = ((o = (i = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (a) => (a == null ? void 0 : a.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...a) => {
      const s = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...a) : void 0;
      return t.requestDraw(), s;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var o;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (o = this.flags) != null && o.collapsed || !t.errorText) return r;
      const i = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(i.x, i.y, i.w, i.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, i.x + i.w * 0.5, i.y + i.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${as}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = mn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return as;
        },
        getHeight() {
          return as;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = el(Mu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(as, Number(o.minHeight || 0)),
            minWidth: Math.max(PP, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, i, o, a;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return $d(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ko({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = xP({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = td(MP, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, d;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((d = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || d.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var s, l;
          return (l = (s = this.fullscreenController) == null ? void 0 : s.toggle) == null ? void 0 : l.call(s);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Jm(n), t.addEventListener("pointerdown", (o) => {
      var a, s, l;
      o.button === 0 && ((a = n.focus) == null || a.call(n, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var a;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
    const r = (o) => {
      var a, s;
      this.controller.state.drag.active && ((a = t.releasePointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var a;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var a;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }), n.addEventListener("keydown", (o) => {
      var a;
      SP(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !X0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? wu(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = nr.canvas) != null && r.graph) || this.node.graph === nr.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var a;
      const i = t.localPoint(r);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Ih(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var a;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(r);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, i) {
      var l, d, u, c, p, g;
      const o = QM(this, n, r, i), a = t.getLegacyPreviewRect();
      if (!o || !Ih(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((d = t.view) == null ? void 0 : d.fov) || 100), s && ((u = this.setDirtyCanvas) == null || u.call(this, !0, !1)), (c = n == null ? void 0 : n.preventDefault) == null || c.call(n), (p = n == null ? void 0 : n.stopPropagation) == null || p.call(n), (g = n == null ? void 0 : n.stopImmediatePropagation) == null || g.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, o, a;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Lc * 2), n = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Mh - Lc);
    return { x: Lc, y: Mh, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Ch(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Qg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = wP(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = AP(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = xl(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, d = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", d), s.addEventListener("play", d), s.addEventListener("pause", d), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", d), s.removeEventListener("play", d), s.removeEventListener("pause", d), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const n = CP(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), Ch(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, a, s, l, d, u, c, p, g, y, _, b, C;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (d = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || d.call(l), this.surfaceApp = null, (c = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || c.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (p = this.mediaCleanup) == null || p.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (y = (g = this.root) == null ? void 0 : g.remove) == null || y.call(g);
    } catch {
    }
    try {
      j0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((C = (b = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : b.find) == null ? void 0 : C.call(b, (U) => (U == null ? void 0 : U.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function EP(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new IP(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function J0(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const s = i ? i.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const s = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
  const a = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const s = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return s;
  };
}
function Kd(e) {
  return !!(e != null && e.prototype);
}
function Aa(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function OP(e, t = {}) {
  Kd(e) || EP(e, {
    ...t,
    onOpen: Aa(e, t.onOpen)
  });
}
function FP(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Kd(e)) {
    kh(e, {
      ...r,
      onOpen: Aa(e, t.onOpen)
    });
    return;
  }
  J0(e, "stickers_node_preview", (i) => {
    kh(i, {
      ...r,
      onOpen: Aa(i, t.onOpen)
    });
  });
}
function TP(e, t = {}) {
  if (!Kd(e)) {
    xh(e, {
      ...t,
      onOpen: Aa(e, t.onOpen)
    });
    return;
  }
  J0(e, "cutout_preview", (n) => {
    xh(n, {
      ...t,
      onOpen: Aa(n, t.onOpen)
    });
  });
}
const Pn = {
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
}, Ir = "pen";
function Eh(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function DP({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [a, s] of Object.entries(n))
      r.delete(a) && s();
  }
  return {
    request(a) {
      r.add(a), i ?? (i = e(o));
    },
    cancel() {
      r.clear(), i !== null && t(i), i = null;
    }
  };
}
const yt = Object.freeze({
  // The state changed: Stickers, the Camera, the painting, the selection, the playhead.
  STATE: "state",
  // The view moved: the camera, the mode, a transition step.
  VIEW: "view",
  // The playhead moved (playback, a scrub): the state is drawn at another frame.
  PLAYHEAD: "playhead",
  // The painting changed (a stroke being drawn, strokes or rasters moved): its layers are drawn again from
  // the paint engine's canvases, while the Stickers and the Camera stay.
  PAINT: "paint",
  // Only the 2D overlay changed: a hover, a cursor, a handle.
  OVERLAY: "overlay",
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item loaded, Spark sorted.
  MEDIA: "media",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), LP = new Set(Object.values(yt));
function VP({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = 1, c = 0;
  function p(_) {
    try {
      _();
    } catch (b) {
      i(b);
    }
  }
  function g() {
    !o && !a && !s && (o = e(y));
  }
  function y(_) {
    o = 0, a = !0;
    try {
      const b = d;
      d = /* @__PURE__ */ new Map();
      for (const U of b.values()) p(() => U(_));
      if (s) return;
      const C = l;
      l = /* @__PURE__ */ new Set(), (C.size || r()) && p(() => n(_, C));
    } finally {
      a = !1;
    }
    (l.size || d.size || r()) && g();
  }
  return {
    requestDraw(_) {
      if (!LP.has(_)) throw new Error(`Unknown draw reason: ${_}`);
      _ === yt.STATE && (c += 1), l.add(_), g();
    },
    requestFrame(_) {
      const b = u++;
      return d.set(b, _), g(), b;
    },
    cancelFrame(_) {
      d.delete(_);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      g();
    },
    get stateRevision() {
      return c;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, d.clear(), l.clear();
    }
  };
}
const RP = 250, $P = 600, zP = 180, jP = 2;
function HP(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ta(e, t, n) {
  return e + (t - e) * n;
}
function GP(e, t, n = 1) {
  const r = Math.max(
    Math.abs(ad(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(n, 1e-6), o = Math.min(1, r / zP + i / jP);
  return Math.round(ta(RP, $P, o));
}
function WP(e, t, n) {
  const r = HP(Fe(n, 0, 1));
  return {
    position: e.position.map((i, o) => ta(i, t.position[o], r)),
    yaw_deg: Dt(e.yaw_deg + ad(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: ta(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: ta(e.hFOV_deg, t.hFOV_deg, r),
    distance: ta(e.distance, t.distance, r)
  };
}
function KP(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(ad(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function BP(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return KP(e, t) ? null : { from: e, to: t, startTs: n, durationMs: GP(e, t, r), end: i };
}
function UP(e, t) {
  const n = Fe((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: WP(e.from, e.to, n), done: !1 };
}
function ol(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function YP(e, t, n) {
  const r = ol(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function ro(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function qP(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function XP({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: l
}) {
  var D, T;
  const d = e.primaryTool === "paint" || e.primaryTool === "mask", u = {
    visible: d,
    activePane: d ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: d ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (x, H) => ({ index: H, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!d) return u;
  const c = ((D = t.find((x) => i(e.paintColor, x.color))) == null ? void 0 : D.id) || "", p = !c, g = o(e.customPaintColor), y = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), _ = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), b = e.brushSizes[_] ?? 10, C = l(), U = Array.from({ length: 8 }, (x, H) => e.customPaintHistory[H] || null);
  return {
    ...u,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: c,
    customColorActive: p,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...a(g.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    alphaValue: y,
    alphaText: `${y}%`,
    historyEntries: U.map((x, H) => ({
      index: H,
      color: x ? { cssColor: r(x, 1) } : null
    })),
    sizeValue: b,
    sizeText: String(b),
    sizeFill: `${Math.max(0, Math.min(100, (b - 1) / 119 * 100))}%`,
    sizeDisabled: C,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function JP({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const ZP = {
  position_x: ["Position", "X", 0.01],
  position_y: ["Position", "Y", 0.01],
  position_z: ["Position", "Z", 0.01],
  yaw_deg: ["Rotation", "Y", 0.5],
  pitch_deg: ["Rotation", "P", 0.5],
  roll_deg: ["Rotation", "R", 0.5],
  rot_deg: ["Rotation", "R", 0.5],
  hFOV_deg: ["FOV", "H", 0.25],
  vFOV_deg: ["FOV", "V", 0.25]
};
function QP(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = ZP[n.key] || [], a = t[t.length - 1];
    r && (a != null && a.grouped) && a.label === r ? a.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function Rc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function eN({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
  const o = !r && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: o ? Ye.eye : Ye.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function tN({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function nN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const xo = "erp", rN = ["1:1", "4:3", "3:2", "16:9"];
function Z0(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...rN.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: xo, label: Number(n) === 180 ? "180°" : "360°", active: e === xo }] : []
  ];
}
function iN({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: l,
  normalizeCoverageValue: d
}) {
  return {
    coverage: { value: d(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: QP(a),
    notes: s,
    paramsDisabled: !r,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function oN({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: d,
  isExternalSticker: u,
  isStickerHidden: c,
  canRestoreSelectedToInitial: p,
  iconSet: g,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: y = !1,
  cameraDeletable: _ = !1,
  erpChoice: b = !1,
  coverage: C = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let U = [];
  if (n.length > 1)
    U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    ];
  else if (r === "stroke")
    U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    ];
  else if (r === "image") {
    if (U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s }
    ], u(t) || (U.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: g.duplicate }), U.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: g.replace_image })), u(t)) {
      const D = p(), T = c(t);
      U.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: D ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !D
      }), U.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? g.eye : g.eye_dashed
      });
    }
    U.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed }), u(t) || U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s });
  } else
    U = [
      {
        key: "aspect",
        kind: "aspect",
        icon: g.aspect,
        open: !!d,
        choices: Z0(l, { erp: b, coverage: C })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === xo }
    ], y ? _ && U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : U.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    );
  return Q0(i.corners, U);
}
const Oh = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function aN({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = r ? Oh.filter((s) => s.cameraTip) : Oh;
  return Q0([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: d, cameraTip: u }) => ({ key: s, label: l, tip: r ? u : d, pressed: s === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ye.delete }] : []
  ]);
}
function sN(e, t, n, r, i) {
  const { minX: s, maxX: l, minY: d, maxY: u } = e || {};
  if (![s, l, d, u].every(Number.isFinite)) return null;
  const c = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), p = Math.max(14, i - n - 14), g = u + 18, y = d - 18 - n;
  let _;
  return g <= p ? _ = Math.max(g, 14) : y >= 14 ? _ = Math.min(y, p) : _ = Math.min(Math.max(g, 14), p), { left: c, top: _ };
}
function Q0(e, t) {
  const n = e.map((d) => ({ x: Number(d == null ? void 0 : d.x), y: Number(d == null ? void 0 : d.y) })).filter((d) => Number.isFinite(d.x) && Number.isFinite(d.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((d) => d.x), i = n.map((d) => d.y), o = Math.min(...r), a = Math.max(...r), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const ey = "painting";
function lN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const cN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function uN(e, { span: t, selection: n, selectedId: r, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: d = !1, stickers: u = !0, scene: c = !1, sceneLocked: p = !1 }) {
  const g = (U, D, T, x, H, z, { keyable: ee = !0, hideable: re = !0 } = {}) => {
    const B = (G) => (n == null ? void 0 : n.owner) === U && n.lane === G ? n.frames.map((Y) => Y + z) : [];
    return {
      id: U,
      label: T,
      icon: x,
      clip: H,
      selected: U === r,
      hideable: re,
      visible: D.visible,
      keyable: ee,
      open: ee && o.has(U),
      keys: gw(D).map((G) => ({ frame: G.frame + z, full: G.full })),
      selectedFrames: B(null),
      lanes: (ee ? Co(D) : []).map((G) => ({
        key: `${U}:${G}`,
        lane: G,
        label: cN[G],
        frames: D[G].keyframes.map((Y) => Y.frame + z),
        selectedFrames: B(G)
      }))
    };
  }, y = u ? e.stickers : [], _ = y.filter((U) => U.placement === "sky").sort((U, D) => D.z_index - U.z_index), b = y.filter((U) => U.placement === "world"), C = ({ start: U, in: D, duration: T }) => ({ clip: { start: U, end: T === null ? null : U + T }, offset: U - D });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || p,
    lengthLocked: p,
    lockTip: p ? "Set by the scene" : "Set by the video input",
    length: p ? t : e.timeline.length,
    rows: [
      ...l ? [g("camera", e.camera, "Camera", Ye.camera, null, 0, { hideable: d })] : [],
      ...[..._, ...b].map((U) => {
        const { clip: D, offset: T } = C(U.clip);
        return g(U.id, U, uu(U), Ye.image, D, T);
      }),
      ...u && (lN(e.painting) || !e.painting_visible) ? [{
        id: ey,
        label: "Paint",
        icon: Ye.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: e.painting_visible,
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...u && (c || Us(e.scene)) ? [(() => {
        const { clip: U, offset: D } = C(e.scene.clip);
        return g("scene", e.scene, "Scene", Ye.box, U, D, { keyable: !1 });
      })()] : []
    ]
  };
}
function dN(e, t, n, r) {
  const i = _w(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, a = Math.max(...n) + r;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
const fN = { class: "pano-floating-right" }, pN = {
  key: 0,
  class: "pano-floating-space"
}, hN = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, mN = ["data-settled"], gN = ["data-ready", "data-settled"], yN = ["aria-label", "data-tip"], bN = {
  key: 1,
  class: "pano-camera-preview-label"
}, vN = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    // The space group (#71): { visible, mode, frameDisabled, modes, frame } (floatingRightState), null
    // without one. It shows or hides as a whole at the left end, so the buttons right of it never move.
    space: { type: Object, default: null },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Re(), He(ot, null, [
      Ne("div", fN, [
        e.space ? Vr((Re(), He("div", pN, [
          Ne("div", hN, [
            (Re(!0), He(ot, null, xt(e.space.modes, (r) => (Re(), Kn(Zt, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Qe(Zt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ai, e.space.visible]
        ]) : ht("", !0),
        (Re(!0), He(ot, null, xt(e.buttons, (r) => (Re(), Kn(Zt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Vr(Ne("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ne("div", {
          class: pt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Pt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = Ne("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Ne("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Re(), He("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Qe(Tt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, yN)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Re(), He("div", bN, ut(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, gN)
      ], 8, mN), [
        [Ai, e.preview.visible]
      ])
    ], 64));
  }
}, _N = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, SN = ["y2", "transform"], wN = ["transform"], xN = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = ft(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Vr((Re(), He("div", {
      class: pt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Re(), He("svg", _N, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Re(!0), He(ot, null, xt(at(n), (a) => (Re(), He("line", {
          key: a,
          class: pt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, SN))), 128)),
        Ne("g", { transform: r.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, wN),
        o[2] || (o[2] = Ne("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ai, e.model.visible === !0]
    ]);
  }
}, kN = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Re(), He("div", {
      class: pt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Qe(T0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Qe(Zt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Qe(xN, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, MN = ["aria-label"], PN = { class: "pano-canvas-confirm-title" }, NN = { class: "pano-canvas-confirm-text" }, AN = { class: "pano-canvas-confirm-actions" }, CN = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, IN = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Wt(null), r = /* @__PURE__ */ Wt(null);
    let i = null;
    function o() {
      const c = r.value;
      return c ? Array.from(c.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((p) => p instanceof HTMLElement ? !p.hidden && p.tabIndex >= 0 && p.offsetParent !== null : !1) : [];
    }
    function a(c) {
      const p = r.value;
      if (!p) return;
      const g = p.querySelector(`[data-action='${c}']`);
      g instanceof HTMLButtonElement && g.click();
    }
    function s() {
      var _;
      const c = r.value;
      if (!c) return;
      const p = c.querySelector("[data-action='confirm-accept']");
      if (p instanceof HTMLElement) {
        p.focus();
        return;
      }
      const y = o()[0] || c;
      (_ = y == null ? void 0 : y.focus) == null || _.call(y);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function d(c) {
      var C;
      if (c.defaultPrevented) return;
      if (c.key === "Escape") {
        c.preventDefault(), c.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (c.key !== "Tab") return;
      const p = o(), g = r.value;
      if (!p.length) {
        c.preventDefault(), (C = g == null ? void 0 : g.focus) == null || C.call(g);
        return;
      }
      const y = p[0], _ = p[p.length - 1], b = document.activeElement;
      if (c.shiftKey) {
        (b === y || b === g || !(g != null && g.contains(b))) && (c.preventDefault(), _.focus());
        return;
      }
      (b === _ || !(g != null && g.contains(b))) && (c.preventDefault(), y.focus());
    }
    function u(c) {
      c.target === n.value && a("confirm-cancel");
    }
    return Mi(() => t.model.visible, (c, p) => {
      if (c) {
        i = document.activeElement, yl(() => {
          s();
        });
        return;
      }
      p && l();
    }, { immediate: !0 }), Oa(() => {
      l();
    }), (c, p) => e.model.visible === !0 ? (Re(), He("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Et(u, ["self"])
    }, [
      Ne("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: d
      }, [
        Ne("div", PN, ut(e.model.title), 1),
        Ne("div", NN, ut(e.model.text), 1),
        Ne("div", AN, [
          p[0] || (p[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", CN, ut(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, MN)
    ], 512)) : ht("", !0);
  }
}, EN = ["data-paint-pane"], ON = ["hidden"], FN = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], TN = ["aria-pressed", "disabled"], DN = ["hidden"], LN = { class: "pano-paint-color-pop-head" }, VN = { class: "pano-paint-color-field" }, RN = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, $N = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, zN = { class: "pano-paint-color-field" }, jN = { class: "pano-paint-alpha-wrap" }, HN = ["value"], GN = { "data-paint-alpha-value": "" }, WN = ["hidden"], KN = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, BN = ["data-paint-history-index", "aria-label", "disabled"], UN = ["data-paint-footer"], YN = ["data-paint-group"], qN = ["hidden"], XN = ["value", "disabled"], JN = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, ZN = ["hidden"], QN = {
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
    return (r, i) => (Re(), He("div", {
      class: pt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Re(!0), He(ot, null, xt(e.panes, (o) => {
        var a;
        return Re(), He("div", {
          key: o.key,
          class: pt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Re(), He("div", {
            key: 0,
            class: pt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Re(!0), He(ot, null, xt(e.paintSwatches, (s) => (Re(), He("button", {
              key: s.id,
              class: pt(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: Pt(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, FN))), 128)),
            Ne("button", {
              class: pt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Pt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, TN),
            Ne("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Pt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Ne("div", LN, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Pt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", VN, [
                Ne("div", RN, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Pt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", $N, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Pt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", zN, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", jN, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, HN),
                  Ne("span", GN, ut(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", KN, [
                  (Re(!0), He(ot, null, xt(e.state.historyEntries || [], (s) => (Re(), He("button", {
                    key: s.index,
                    class: pt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Pt(n(s.color))
                  }, null, 14, BN))), 128))
                ])
              ], 8, WN)
            ], 12, DN)
          ], 10, ON)) : ht("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Re(!0), He(ot, null, xt(o.tools, (s) => {
                var l;
                return Re(), Kn(Zt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, YN),
            Ne("div", {
              class: pt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Ne("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Pt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, XN),
              Ne("span", JN, ut(e.state.sizeText || "10"), 1)
            ], 10, qN),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Qe(Zt, {
                icon: at(Ye).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, ZN)
          ], 8, UN)
        ], 10, EN);
      }), 128))
    ], 2));
  }
}, e2 = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Wt(null), r = /* @__PURE__ */ Wt(null), i = /* @__PURE__ */ Wt(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Re(), He(ot, null, [
      Ne("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Ne("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Ne("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, t2 = ["aria-label"], n2 = ["data-tip", "aria-pressed"], r2 = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (Re(), He("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Pt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (Re(!0), He(ot, null, xt(e.buttons, (o) => (Re(), He("button", Or({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), ut(o.label), 17, n2))), 128))
    ], 12, t2));
  }
}, i2 = {
  key: 0,
  class: "pano-cutout-menu"
}, o2 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, a2 = ["data-aspect"], s2 = ["data-action", "aria-label", "data-tip", "disabled"], l2 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Re(), He("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Pt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Re(!0), He(ot, null, xt(e.model.items || [], (r) => (Re(), He(ot, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Re(), He("div", i2, [
          Ne("button", o2, [
            Qe(Tt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: pt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Re(!0), He(ot, null, xt(r.choices || [], (i) => (Re(), He("button", {
              key: i.value,
              class: pt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, ut(i.label), 11, a2))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Re(), Kn(r2, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (Re(), He("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Qe(Tt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, s2))
      ], 64))), 128))
    ], 4));
  }
}, c2 = {
  key: 0,
  class: "pano-easing"
}, u2 = { class: "pano-section-title" }, d2 = { class: "pano-easing-range" }, f2 = { class: "pano-easing-modes" }, p2 = ["aria-pressed", "onClick"], h2 = ["viewBox"], m2 = ["x", "y"], g2 = ["x1", "y1", "x2", "y2"], y2 = ["d"], b2 = ["x1", "y1", "x2", "y2"], v2 = ["x1", "y1", "x2", "y2"], _2 = ["cx", "cy"], S2 = ["cx", "cy"], w2 = { class: "pano-easing-note" }, Ar = 132, mi = 14, x2 = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], o = /* @__PURE__ */ Wt(null), a = ft(() => {
      var y;
      return Array.isArray((y = n.model) == null ? void 0 : y.easing) ? n.model.easing : null;
    }), s = (y) => mi + y * Ar, l = (y) => mi + (1 - y) * Ar, d = ft(() => {
      var U;
      if (((U = n.model) == null ? void 0 : U.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [y, _, b, C] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(y)} ${l(_)} ${s(b)} ${l(C)} ${s(1)} ${l(1)}`;
    }), u = ft(() => a.value ? a.value.map((y) => y.toFixed(2)).join(", ") : "");
    function c(y) {
      var _;
      return JSON.stringify(y.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function p(y, _) {
      r("timeline", { type: "easing", easing: y, commit: _ });
    }
    function g(y, _) {
      var T;
      if (y.button !== 0 || !a.value) return;
      const b = y.currentTarget;
      (T = b.setPointerCapture) == null || T.call(b, y.pointerId);
      let C = null;
      const U = (x) => {
        const H = o.value.getBoundingClientRect(), z = H.width / (Ar + mi * 2), ee = ((x.clientX - H.left) / z - mi) / Ar, re = 1 - ((x.clientY - H.top) / z - mi) / Ar;
        C = [...C || a.value], C[_] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, C[_ + 1] = Math.round(Math.min(1, Math.max(0, re)) * 100) / 100, p(C, !1);
      }, D = () => {
        b.removeEventListener("pointermove", U), b.removeEventListener("pointerup", D), b.removeEventListener("pointercancel", D), C && p(C, !0);
      };
      b.addEventListener("pointermove", U), b.addEventListener("pointerup", D), b.addEventListener("pointercancel", D);
    }
    return (y, _) => e.model ? (Re(), He("div", c2, [
      Ne("div", u2, [
        _[2] || (_[2] = Ne("span", null, "Easing", -1)),
        Ne("span", d2, ut(e.model.label), 1)
      ]),
      Ne("div", f2, [
        (Re(), He(ot, null, xt(i, (b) => Ne("button", {
          key: b.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": c(b) ? "true" : "false",
          onClick: (C) => p(b.easing, !0)
        }, ut(b.label), 9, p2)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Re(), He("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Ar + mi * 2} ${Ar + mi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: Ar,
          height: Ar
        }, null, 8, m2),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, g2),
        Ne("path", {
          class: "pano-easing-curve",
          d: d.value
        }, null, 8, y2),
        a.value ? (Re(), He(ot, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, b2),
          Ne("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, v2),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (b) => g(b, 0))
          }, null, 40, _2),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (b) => g(b, 2))
          }, null, 40, S2)
        ], 64)) : ht("", !0)
      ], 8, h2)) : ht("", !0),
      Ne("div", w2, [
        e.model.mixed ? (Re(), He(ot, { key: 0 }, [
          qo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Re(), He(ot, { key: 1 }, [
          qo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Re(), He(ot, { key: 2 }, [
          qo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Re(), He(ot, { key: 3 }, [
          qo("cubic-bezier(" + ut(u.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, k2 = {
  class: "pano-side",
  "data-side": ""
}, M2 = { class: "pano-side-head" }, P2 = { class: "pano-side-title" }, N2 = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, A2 = {
  key: 0,
  class: "pano-side-scroll"
}, C2 = { class: "pano-inspector" }, I2 = { class: "pano-ui-row pano-coverage-row" }, E2 = ["data-selected"], O2 = ["aria-pressed", "disabled"], F2 = ["aria-pressed", "disabled"], T2 = {
  key: 0,
  class: "pano-section-title"
}, D2 = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, L2 = {
  class: "pano-picker",
  "data-picker": "selection"
}, V2 = ["disabled"], R2 = { class: "pano-picker-label" }, $2 = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, z2 = ["hidden"], j2 = ["data-selection-id"], H2 = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, G2 = {
  key: 2,
  class: "pano-state-actions"
}, W2 = ["disabled"], K2 = ["data-key"], B2 = { class: "pano-field-group-values" }, U2 = ["title", "onPointerdown"], Y2 = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], q2 = ["data-key"], X2 = ["min", "max", "step", "value", "disabled", "data-param-key"], J2 = ["min", "max", "step", "value", "disabled", "data-param-key"], Z2 = ["open"], Q2 = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, eA = { class: "pano-ui-settings-body" }, tA = { class: "pano-ui-row" }, nA = ["data-selected"], rA = ["aria-pressed"], iA = ["aria-pressed"], oA = { class: "pano-ui-row" }, aA = ["data-selected"], sA = ["aria-pressed"], lA = ["aria-pressed"], cA = {
  key: 1,
  class: "pano-side-footer"
}, uA = ["data-action"], dA = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = ft(() => {
      const d = n.model;
      return !d || typeof d != "object" ? !1 : Object.keys(d).length > 0 && !!d.coverage;
    });
    function o(d) {
      return { "--v": `${Number((d == null ? void 0 : d.fillPct) || 0)}%` };
    }
    function a(d, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (d == null ? void 0 : d.enabled) === !1;
    }
    const s = {};
    function l(d, u) {
      const c = s[u.key];
      if (d.button !== 0 || !c || a(u, n.model)) return;
      d.preventDefault();
      const p = d.currentTarget, g = d.clientX, y = Number(c.value) || 0;
      let _ = !1;
      p.setPointerCapture(d.pointerId);
      const b = (U) => {
        if (!_ && Math.abs(U.clientX - g) < 3) return;
        _ = !0;
        const D = y + (U.clientX - g) * u.drag * (U.shiftKey ? 0.1 : 1);
        c.value = String(Number(D.toFixed(3))), c.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, C = () => {
        p.removeEventListener("pointermove", b), p.removeEventListener("pointerup", C), p.removeEventListener("pointercancel", C), p.removeEventListener("lostpointercapture", C), _ ? c.dispatchEvent(new Event("change", { bubbles: !0 })) : c.focus();
      };
      p.addEventListener("pointermove", b), p.addEventListener("pointerup", C), p.addEventListener("pointercancel", C), p.addEventListener("lostpointercapture", C);
    }
    return (d, u) => {
      var c, p, g, y, _;
      return Re(), He("div", k2, [
        Ne("div", M2, [
          Ne("div", P2, [
            Ne("span", N2, [
              Qe(Tt, {
                icon: at(Ye).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, ut(e.nodeTitle), 1)
          ]),
          u[1] || (u[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[10] || (u[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Re(), He("div", A2, [
          Ne("div", C2, [
            u[9] || (u[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", I2, [
              u[2] || (u[2] = Ne("label", null, "Coverage", -1)),
              Ne("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((c = e.model.coverage) == null ? void 0 : c.value) === 180 ? "1" : "0"
              }, [
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, O2),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 180 ? "true" : "false",
                  disabled: ((_ = e.model.coverage) == null ? void 0 : _.disabled) === !0
                }, "180", 8, F2)
              ], 8, E2)
            ]),
            e.model.transformTitle !== !1 ? (Re(), He("div", T2, [...u[3] || (u[3] = [
              Ne("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (Re(), He("div", D2, [
              Ne("label", null, ut(e.model.selectionPicker.label), 1),
              Ne("div", L2, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", R2, [
                    e.model.selectionPicker.currentIcon ? (Re(), He("span", $2, [
                      Qe(Tt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Ne("span", null, ut(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[4] || (u[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, V2),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Re(!0), He(ot, null, xt(e.model.selectionPicker.items || [], (b) => (Re(), He("button", {
                    key: b.id,
                    type: "button",
                    class: pt(["pano-picker-item", { active: b.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": b.id
                  }, [
                    b.icon ? (Re(), He("span", H2, [
                      Qe(Tt, {
                        icon: b.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Ne("span", null, ut(b.label), 1)
                  ], 10, j2))), 128))
                ], 8, z2)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (Re(), He("div", G2, [
              Ne("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Qe(Tt, {
                  icon: at(Ye).copy
                }, null, 8, ["icon"]),
                Ne("span", null, ut(e.model.copyStateButton.label), 1)
              ], 8, W2)
            ])) : ht("", !0),
            Ne("div", {
              class: pt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Re(!0), He(ot, { key: 0 }, xt(e.model.notes, (b) => (Re(), He("div", {
                key: b,
                class: "pano-param-note"
              }, ut(b), 1))), 128)) : (Re(!0), He(ot, { key: 1 }, xt(e.model.rows || [], (b) => (Re(), He(ot, {
                key: b.key
              }, [
                b.grouped ? (Re(), He("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": b.key
                }, [
                  Ne("label", null, ut(b.label), 1),
                  Ne("div", B2, [
                    (Re(!0), He(ot, null, xt(b.fields, (C) => (Re(), He("div", {
                      key: C.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: pt(["pano-axis", { disabled: a(C, e.model) }]),
                        title: C.label,
                        onPointerdown: (U) => l(U, C)
                      }, ut(C.short), 43, U2),
                      Ne("input", {
                        ref_for: !0,
                        ref: (U) => {
                          s[C.key] = U;
                        },
                        type: "number",
                        min: C.min,
                        max: C.max,
                        step: C.step,
                        value: C.displayValue,
                        disabled: a(C, e.model),
                        "aria-label": `${b.label} ${C.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": C.key
                      }, null, 8, Y2)
                    ]))), 128))
                  ])
                ], 8, K2)) : (Re(), He("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": b.key
                }, [
                  Ne("label", null, ut(b.label), 1),
                  Ne("input", {
                    type: "range",
                    min: b.fields[0].min,
                    max: b.fields[0].max,
                    step: b.fields[0].step,
                    value: b.fields[0].value,
                    disabled: a(b.fields[0], e.model),
                    style: Pt(o(b.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": b.fields[0].key
                  }, null, 12, X2),
                  Ne("input", {
                    type: "number",
                    min: b.fields[0].min,
                    max: b.fields[0].max,
                    step: b.fields[0].step,
                    value: b.fields[0].displayValue,
                    disabled: a(b.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": b.fields[0].key
                  }, null, 8, J2)
                ], 8, q2))
              ], 64))), 128))
            ], 2),
            Qe(x2, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (b) => r("timeline", b))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Re(), He("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                u[5] || (u[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", Q2, [
                  Qe(Tt, {
                    icon: at(Ye).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", eA, [
                Ne("div", tA, [
                  u[6] || (u[6] = Ne("label", null, "Drag X", -1)),
                  Ne("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, rA),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, iA)
                  ], 8, nA)
                ]),
                Ne("div", oA, [
                  u[7] || (u[7] = Ne("label", null, "Drag Y", -1)),
                  Ne("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, sA),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, lA)
                  ], 8, aA)
                ]),
                u[8] || (u[8] = Ne("div", { class: "pano-ui-row" }, [
                  Ne("span"),
                  Ne("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Z2)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (Re(), He("div", cA, [
          (Re(!0), He(ot, null, xt(e.model.footerButtons, (b) => (Re(), He("button", {
            key: b.action,
            class: pt(["pano-btn", { "pano-btn-primary": b.primary === !0 }]),
            type: "button",
            "data-action": b.action
          }, ut(b.label), 11, uA))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, fA = { class: "pano-timeline-bar" }, pA = ["aria-label", "data-tip"], hA = ["aria-label", "data-tip"], mA = { class: "pano-timeline-time" }, gA = ["data-tip"], yA = { key: 0 }, bA = ["min", "max", "value"], vA = ["data-tip"], _A = { key: 0 }, SA = ["max", "value"], wA = ["aria-expanded"], xA = ["inert"], kA = { class: "pano-timeline-name" }, MA = ["aria-pressed", "aria-label", "data-tip", "onClick"], PA = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, NA = ["disabled", "aria-expanded", "aria-label", "onClick"], AA = ["title", "aria-current", "onClick"], CA = ["data-keyed", "aria-label", "onClick"], IA = ["onPointerdown"], EA = ["onPointerdown"], OA = ["onPointerdown"], FA = ["onPointerdown"], TA = ["aria-label", "data-tip", "onPointerdown"], DA = { key: 0 }, LA = ["onPointerdown"], VA = ["aria-label", "data-tip", "onPointerdown"], RA = { key: 0 }, $A = 10, zA = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Cs(0), playing: /* @__PURE__ */ Cs(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ Wt(null), o = /* @__PURE__ */ Wt(null), a = /* @__PURE__ */ Wt(1), s = /* @__PURE__ */ Wt(0), l = /* @__PURE__ */ Wt(!1);
    let d = null, u = null, c = null;
    vl(() => {
      d = new ResizeObserver(([he]) => {
        a.value = Math.max(1, he.contentRect.width);
      }), i.value && d.observe(i.value), u = new ResizeObserver(([he]) => {
        s.value = he.contentRect.height;
      }), o.value && u.observe(o.value);
    }), Oa(() => {
      d == null || d.disconnect(), u == null || u.disconnect(), c == null || c();
    });
    const p = ft(() => Math.max(1, Number(n.model.span || 1))), g = ft(() => n.playhead.frame.value), y = ft(() => n.playhead.playing.value), _ = ft(() => yw(g.value, Number(n.model.fps || 1))), b = ft(() => a.value / p.value), C = (he) => `${he / p.value * 100}%`, U = ft(() => Ew(p.value, b.value));
    function D(he) {
      const Z = i.value.getBoundingClientRect(), E = Math.floor((he - Z.left) / Math.max(1, Z.width) * p.value);
      return Math.min(p.value - 1, Math.max(0, E));
    }
    function T(he, Z, E) {
      const W = Math.ceil($A / Math.max(1e-6, b.value)), de = new Map(Z.map((fe) => [fe.frame, fe.full]));
      return Ow(Z.map((fe) => fe.frame), W).map((fe, we) => ({
        ...fe,
        key: `${he}:${we}`,
        partial: fe.frames.some(($e) => !de.get($e)),
        selected: fe.frames.some(($e) => E.includes($e))
      }));
    }
    const x = ft(() => {
      const he = /* @__PURE__ */ new Map();
      for (const Z of n.model.rows || []) {
        he.set(Z.id, T(Z.id, Z.keys, Z.selectedFrames));
        for (const E of Z.lanes) he.set(E.key, T(E.key, E.frames.map((W) => ({ frame: W, full: !0 })), E.selectedFrames));
      }
      return he;
    });
    function H(he) {
      const Z = he.end === null ? p.value : he.end;
      return { left: C(he.start), width: C(Math.max(0, Z - he.start)) };
    }
    function z(he, Z) {
      const E = he.clientX, W = Math.max(1e-6, b.value);
      let de = 0;
      Z("start", 0, he);
      const fe = ($e) => {
        if ($e.pointerId !== he.pointerId) return;
        const oe = Math.round(($e.clientX - E) / W);
        oe !== de && (de = oe, Z("move", de, $e));
      }, we = ($e) => {
        $e.pointerId === he.pointerId && (c(), Z("end", de, $e));
      };
      c == null || c(), c = () => {
        window.removeEventListener("pointermove", fe), window.removeEventListener("pointerup", we), window.removeEventListener("pointercancel", we), c = null;
      }, window.addEventListener("pointermove", fe), window.addEventListener("pointerup", we), window.addEventListener("pointercancel", we);
    }
    function ee(he) {
      he.button === 0 && z(he, (Z, E, W) => r("action", { type: "seek", frame: D(W.clientX), phase: Z }));
    }
    function re(he, Z, E) {
      he.button === 0 && (r("action", { type: "select-row", id: Z.id }), z(he, (W, de) => r("action", { type: "clip", id: Z.id, mode: E, delta: de, phase: W })));
    }
    function B(he, Z, E, W, de) {
      if (he.button === 0) {
        if (he.shiftKey) {
          r("action", { type: "select-keys", owner: Z.id, lane: E, frames: W.frames, additive: !0 });
          return;
        }
        W.frames.every((fe) => de.includes(fe)) || r("action", { type: "select-keys", owner: Z.id, lane: E, frames: W.frames, additive: !1 }), z(he, (fe, we) => r("action", { type: "move-keys", delta: we, phase: fe }));
      }
    }
    const G = ft(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function Y(he, Z, E) {
      r("action", Z), await yl(), he.target.value = E();
    }
    function le(he) {
      Y(he, { type: "fps", fps: Number(he.target.value) }, () => G.value);
    }
    function ve(he) {
      const Z = he.target.value.trim();
      Y(he, { type: "length", length: Z ? Number(Z) : null }, () => n.model.length ?? "");
    }
    function ge(he, Z, E) {
      he.button !== 0 || he.target !== he.currentTarget || r("action", { type: "select-keys", owner: Z.id, lane: E, frames: [], additive: !1 });
    }
    return (he, Z) => Vr((Re(), He("section", {
      class: pt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", fA, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": y.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": y.value ? "Pause (Space)" : "Play (Space)",
          onClick: Z[0] || (Z[0] = (E) => r("action", { type: "play" }))
        }, [
          Qe(Tt, {
            icon: y.value ? at(Ye).pause : at(Ye).play
          }, null, 8, ["icon"])
        ], 8, pA),
        e.model.hasAudio ? (Re(), He("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: Z[1] || (Z[1] = (E) => r("action", { type: "mute" }))
        }, [
          Qe(Tt, {
            icon: e.model.muted ? at(Ye).volume_muted : at(Ye).volume2
          }, null, 8, ["icon"])
        ], 8, hA)) : ht("", !0),
        Ne("span", mA, ut(_.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Re(), He("span", yA, ut(G.value), 1)) : (Re(), He("input", {
            key: 1,
            type: "number",
            min: at(fg),
            max: at(hd),
            step: "any",
            value: G.value,
            "aria-label": "Timeline fps",
            onChange: le
          }, null, 40, bA)),
          Z[6] || (Z[6] = Ne("span", null, "fps", -1))
        ], 8, gA),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          Z[7] || (Z[7] = Ne("span", null, "Length", -1)),
          e.model.lengthLocked ? (Re(), He("span", _A, ut(e.model.length), 1)) : (Re(), He("input", {
            key: 1,
            type: "number",
            min: "1",
            max: at(md),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ve
          }, null, 40, SA))
        ], 8, vA),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: Z[2] || (Z[2] = (E) => r("action", { type: "toggle-expanded" }))
        }, [
          Z[8] || (Z[8] = Ne("span", null, "Timeline", -1)),
          Qe(Tt, {
            icon: at(Ye).chevron
          }, null, 8, ["icon"])
        ], 8, wA)
      ]),
      Ne("div", {
        class: pt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Pt({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: Z[3] || (Z[3] = Et((E) => l.value = !0, ["self"])),
        onTransitionend: Z[4] || (Z[4] = Et((E) => l.value = !1, ["self"])),
        onTransitioncancel: Z[5] || (Z[5] = Et((E) => l.value = !1, ["self"]))
      }, [
        Ne("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          Z[9] || (Z[9] = Ne("div", { class: "pano-timeline-corner" }, null, -1)),
          Ne("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ee
          }, [
            (Re(!0), He(ot, null, xt(U.value, (E) => (Re(), He("span", {
              key: E,
              class: "pano-timeline-tick",
              style: Pt({ left: C(E) })
            }, ut(E), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: Pt({ left: C(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Re(!0), He(ot, null, xt(e.model.rows || [], (E) => (Re(), He(ot, {
            key: E.id
          }, [
            Ne("div", {
              class: pt(["pano-timeline-head", { selected: E.selected, "is-hidden": !E.visible }])
            }, [
              Ne("div", kA, [
                E.hideable ? (Re(), He("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": E.visible ? "true" : "false",
                  "aria-label": `${E.label} visible`,
                  "data-tip": E.visible ? "Hide" : "Show",
                  onClick: Et((W) => r("action", { type: "toggle-visible", id: E.id }), ["stop"])
                }, [
                  Qe(Tt, {
                    icon: E.visible ? at(Ye).eye : at(Ye).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, MA)) : (Re(), He("span", PA)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !E.keyable,
                  "aria-expanded": E.open ? "true" : "false",
                  "aria-label": E.open ? `Hide ${E.label} parameters` : `Show ${E.label} parameters`,
                  onClick: Et((W) => r("action", { type: "toggle-row", id: E.id }), ["stop"])
                }, [
                  Qe(Tt, {
                    icon: at(Ye).chevron
                  }, null, 8, ["icon"])
                ], 8, NA),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: E.label,
                  "aria-current": E.selected ? "true" : void 0,
                  onClick: (W) => r("action", { type: "select-row", id: E.id })
                }, [
                  Qe(Tt, {
                    icon: E.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, ut(E.label), 1)
                ], 8, AA),
                E.keyable ? (Re(), He("button", {
                  key: 2,
                  class: pt(["pano-timeline-key", { keyed: at(Ac)(E.keys, g.value) }]),
                  type: "button",
                  "data-keyed": at(Ac)(E.keys, g.value) ? "true" : "false",
                  "aria-label": at(Ac)(E.keys, g.value) ? `Every ${E.label} parameter has a keyframe here; update them` : `Add keyframes for every ${E.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Et((W) => r("action", { type: "key-row", owner: E.id }), ["stop"])
                }, [
                  Qe(Tt, {
                    icon: at(Ye).keyframe
                  }, null, 8, ["icon"])
                ], 10, CA)) : ht("", !0)
              ]),
              E.open ? (Re(!0), He(ot, { key: 0 }, xt(E.lanes, (W) => (Re(), He("div", {
                key: W.key,
                class: "pano-timeline-lane-head"
              }, ut(W.label), 1))), 128)) : ht("", !0)
            ], 2),
            Ne("div", {
              class: pt(["pano-timeline-track", { selected: E.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (W) => ge(W, E, null)
              }, [
                E.clip ? (Re(), He("div", {
                  key: 0,
                  class: pt(["pano-timeline-clip", { open: E.clip.end === null }]),
                  style: Pt(H(E.clip)),
                  onPointerdown: Et((W) => re(W, E, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Et((W) => re(W, E, "start"), ["stop"])
                  }, null, 40, OA),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Et((W) => re(W, E, "end"), ["stop"])
                  }, null, 40, FA)
                ], 46, EA)) : ht("", !0),
                (Re(!0), He(ot, null, xt(x.value.get(E.id), (W) => (Re(), He("button", {
                  key: W.key,
                  type: "button",
                  class: pt(["pano-timeline-pin", { selected: W.selected, cluster: W.frames.length > 1, partial: W.partial }]),
                  style: Pt({ left: C(W.frame + 0.5) }),
                  "aria-label": `${E.label}: ${W.frames.length > 1 ? `${W.frames.length} keyframes` : `keyframe at frame ${W.frames[0]}`}`,
                  "data-tip": W.frames.length > 1 ? `${W.frames.length} keyframes` : `Frame ${W.frames[0]}`,
                  onPointerdown: Et((de) => B(de, E, null, W, E.selectedFrames), ["stop"])
                }, [
                  W.frames.length > 1 ? (Re(), He("span", DA, ut(W.frames.length), 1)) : ht("", !0)
                ], 46, TA))), 128))
              ], 40, IA),
              E.open ? (Re(!0), He(ot, { key: 0 }, xt(E.lanes, (W) => (Re(), He("div", {
                key: W.key,
                class: "pano-timeline-lane",
                onPointerdown: (de) => ge(de, E, W.lane)
              }, [
                (Re(!0), He(ot, null, xt(x.value.get(W.key), (de) => (Re(), He("button", {
                  key: de.key,
                  type: "button",
                  class: pt(["pano-timeline-pin", { selected: de.selected, cluster: de.frames.length > 1 }]),
                  style: Pt({ left: C(de.frame + 0.5) }),
                  "aria-label": `${W.label}: ${de.frames.length > 1 ? `${de.frames.length} keyframes` : `keyframe at frame ${de.frames[0]}`}`,
                  "data-tip": de.frames.length > 1 ? `${de.frames.length} keyframes` : `Frame ${de.frames[0]}`,
                  onPointerdown: Et((fe) => B(fe, E, W.lane, de, W.selectedFrames), ["stop"])
                }, [
                  de.frames.length > 1 ? (Re(), He("span", RA, ut(de.frames.length), 1)) : ht("", !0)
                ], 46, VA))), 128))
              ], 40, LA))), 128)) : ht("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: Pt({ left: C(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, xA)
    ], 2)), [
      [Ai, e.model.visible]
    ]);
  }
}, jA = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Re(), He("div", {
      class: pt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Pt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ut(e.model.text || ""), 7));
  }
}, HA = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, GA = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Re(), He("div", HA, [
      (Re(!0), He(ot, null, xt(e.buttons, (r) => Vr((Re(), Kn(Zt, {
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
        [Ai, r.visible !== !1]
      ])), 128))
    ]));
  }
}, WA = ["data-video-ready"], KA = { class: "pano-video-transport-shell" }, BA = { class: "pano-video-controls-left" }, UA = { class: "pano-video-filmstrip" }, YA = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, qA = ["src", "onLoad"], XA = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, JA = ["max", "value", "disabled"], ZA = { class: "pano-video-controls-right" }, QA = ["data-has-audio"], eC = { class: "pano-video-volume-pop" }, tC = ["value", "disabled"], nC = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ft(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause" : "Play";
    }), r = ft(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? "Pause video" : "Play video";
    }), i = ft(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.playing) === !0 ? Ye.pause : Ye.play;
    }), o = ft(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = ft(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = ft(() => {
      var x;
      return ((x = t.state) == null ? void 0 : x.loop) === !1 ? Ye.loop_off : Ye.loop;
    }), l = ft(() => {
      var x, H;
      return ((x = t.state) == null ? void 0 : x.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), d = ft(() => {
      var x, H, z;
      return ((x = t.state) == null ? void 0 : x.hasAudio) !== !0 ? Ye.volume : ((H = t.state) == null ? void 0 : H.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? Ye.volume_muted : Ye.volume2;
    }), u = ft(() => {
      var x;
      return Math.max(0, Math.min(100, Number(((x = t.state) == null ? void 0 : x.progressPct) || 0)));
    }), c = ft(() => ({ left: `${u.value}%` })), p = ft(() => {
      var ee, re;
      const x = (ee = t.state) == null ? void 0 : ee.volumePct, H = Number(((re = t.state) == null ? void 0 : re.volume) ?? 1) * 100, z = Number(x ?? H ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, z))}%`
      };
    }), g = ft(() => {
      var z, ee;
      const H = [
        String(((z = t.state) == null ? void 0 : z.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((re, B) => Math.max(re, B.length), 4);
      return `${Math.max(4, H)}ch`;
    }), y = ft(() => ({ "--pano-video-time-ch": g.value })), _ = ft(() => {
      var z, ee;
      const x = Array.isArray((z = t.state) == null ? void 0 : z.thumbnails) ? t.state.thumbnails : [];
      if (x.length) return x;
      const H = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: H }, (re, B) => ({
        id: `placeholder-${B}`,
        src: "",
        label: ""
      }));
    }), b = /* @__PURE__ */ Wt(/* @__PURE__ */ new Set()), C = (x) => String((x == null ? void 0 : x.id) || (x == null ? void 0 : x.src) || (x == null ? void 0 : x.label) || ""), U = (x) => b.value.has(C(x)), D = (x) => {
      const H = new Set(b.value);
      H.add(C(x)), b.value = H;
    };
    Mi(_, (x) => {
      const H = new Set(x.map(C)), z = /* @__PURE__ */ new Set();
      for (const ee of b.value)
        H.has(ee) && z.add(ee);
      b.value = z;
    }, { immediate: !0 });
    const T = ft(() => {
      var x;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((x = t.state) == null ? void 0 : x.shellMaxWidthPx) || 640))}px`
      };
    });
    return (x, H) => (Re(), He("div", {
      class: pt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Pt(T.value)
    }, [
      H[1] || (H[1] = Ne("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      H[2] || (H[2] = Ne("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ne("div", KA, [
        Ne("div", BA, [
          Qe(Zt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-time pano-video-time-start",
            style: Pt(y.value)
          }, ut(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", UA, [
          Ne("div", YA, [
            (Re(!0), He(ot, null, xt(_.value, (z) => (Re(), He("div", {
              key: C(z),
              class: pt(["pano-video-thumb", {
                "is-placeholder": !z.src,
                "is-loaded": z.src && U(z)
              }])
            }, [
              z.src ? (Re(), He("img", {
                key: 0,
                src: z.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => D(z)
              }, null, 40, qA)) : (Re(), He("span", XA))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: Pt(c.value),
            "aria-hidden": "true"
          }, [...H[0] || (H[0] = [
            Ne("span", { class: "pano-video-playhead-line" }, null, -1),
            Ne("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Ne("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, JA)
        ]),
        Ne("div", ZA, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: Pt(y.value)
          }, ut(e.state.durationLabel || "0:00"), 5),
          Qe(Zt, {
            "extra-class": "pano-video-control",
            icon: s.value,
            label: o.value,
            tip: a.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Ne("div", eC, [
              Ne("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Pt(p.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, tC)
            ]),
            Qe(Zt, {
              "extra-class": "pano-video-control",
              icon: d.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, QA)
        ])
      ])
    ], 14, WA));
  }
}, rC = { class: "pano-floating-top" }, iC = ["data-selected", "data-view-count"], oC = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], aC = { class: "label" }, sC = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Re(), He("div", rC, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Re(!0), He(ot, null, xt(e.buttons, (i) => Vr((Re(), He("button", {
            key: i.key,
            class: pt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Qe(Tt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", aC, ut(i.label), 1)
          ], 10, oC)), [
            [Ai, i.visible !== !1]
          ])), 128))
        ], 8, iC)
      ]);
    };
  }
};
function ty(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ye.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ye.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Ye.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ye.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ye.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ye.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ye.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ye.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ye.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ye.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ye.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ye.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ye.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ye.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ye.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ye.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ye.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ye.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ye.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ye.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ye.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ye.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ye.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ye.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ye.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ye.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ye.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ye.lasso_tool }
        ]
      }
    ]
  };
}
const lC = ["aria-label"], cC = { class: "pano-stage-column" }, uC = { class: "pano-stage-wrap" }, dC = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, fC = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null },
    uiState: { type: Object, default: () => ({}) },
    // The Timeline's playhead refs ({ frame, playing }), apart from uiState so that a frame of playback
    // updates only the Timeline.
    playhead: { type: Object, default: void 0 }
  },
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: n }) {
    const r = e, i = n;
    let o = "", a = !1, s = null;
    const l = /* @__PURE__ */ Wt(null), d = /* @__PURE__ */ Wt(null), u = /* @__PURE__ */ Wt(null);
    function c() {
      var B, G;
      return ((G = (B = u.value) == null ? void 0 : B.getRefs) == null ? void 0 : G.call(B)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function p(B) {
      var G, Y;
      return ((Y = (G = d.value) == null ? void 0 : G.open) == null ? void 0 : Y.call(G, B)) === !0;
    }
    function g(B) {
      i("image-file-selected", B);
    }
    function y(B) {
      i("image-file-cancelled", B);
    }
    t({ getPaintOverlayRefs: c, openImagePicker: p });
    const _ = ft(() => r.readOnly === !0), b = ft(() => r.shellPreset || ty(r.type)), C = ft(() => {
      var G, Y, le;
      const B = String((((G = r.uiState) == null ? void 0 : G.stageStatus) === "failed" ? (Y = r.uiState) == null ? void 0 : Y.stageStatusDetail : (le = r.uiState) == null ? void 0 : le.stageWarningDetail) ?? "");
      return B === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : B === "stickers" ? "One or more sticker previews are unavailable." : B === "frame" ? "The editor hit a rendering error. Check the browser console for details." : B === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : B.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), U = ft(() => {
      var G;
      const B = Array.isArray((G = b.value) == null ? void 0 : G.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return _.value && B.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ye.fullscreen
      }), B;
    });
    function D() {
      const B = l.value;
      return B ? Array.from(B.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((G) => G instanceof HTMLElement ? !G.hidden && G.tabIndex >= 0 && G.offsetParent !== null : !1) : [];
    }
    function T() {
      var Y;
      const G = D()[0] || l.value;
      (Y = G == null ? void 0 : G.focus) == null || Y.call(G);
    }
    function x() {
      var B;
      s != null && s.isConnected && ((B = s.focus) == null || B.call(s)), s = null;
    }
    function H(B) {
      var G, Y, le, ve;
      if (!B.defaultPrevented) {
        if (B.key === "Tab") {
          const ge = D();
          if (!ge.length) {
            B.preventDefault(), (Y = (G = l.value) == null ? void 0 : G.focus) == null || Y.call(G);
            return;
          }
          const he = ge[0], Z = ge[ge.length - 1], E = document.activeElement;
          if (B.shiftKey) {
            (E === he || E === l.value || !((le = l.value) != null && le.contains(E))) && (B.preventDefault(), Z.focus());
            return;
          }
          (E === Z || !((ve = l.value) != null && ve.contains(E))) && (B.preventDefault(), he.focus());
          return;
        }
        B.key === "Escape" && i("close");
      }
    }
    function z() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function ee() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function re(B) {
      document.removeEventListener("keydown", H), B ? (s || (s = document.activeElement), z(), document.addEventListener("keydown", H), yl(() => {
        T();
      })) : (ee(), x());
    }
    return vl(() => {
      re(r.open);
    }), Oa(() => {
      ee(), document.removeEventListener("keydown", H), x();
    }), Mi(() => r.open, (B) => {
      re(B);
    }), (B, G) => e.open ? (Re(), He("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: G[2] || (G[2] = Et((Y) => i("close"), ["self"]))
    }, [
      Ne("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Ne("div", cC, [
          Ne("div", uC, [
            G[3] || (G[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            G[4] || (G[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            G[5] || (G[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Re(), He("div", dC, ut(C.value), 1)) : ht("", !0),
            G[6] || (G[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Qe(e2, {
              ref_key: "paintOverlaysRef",
              ref: u
            }, null, 512),
            Qe(D0, {
              ref_key: "imageFilePickerRef",
              ref: d,
              onFileSelected: g,
              onFileCancelled: y
            }, null, 512),
            _.value ? ht("", !0) : (Re(), He(ot, { key: 1 }, [
              Qe(GA, {
                buttons: e.uiState.toolButtons || b.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Qe(kN, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Qe(QN, {
                "paint-swatches": e.paintSwatches,
                panes: b.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Qe(nC, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Qe(sC, {
              buttons: e.uiState.viewButtons || b.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Qe(vN, {
              buttons: e.uiState.floatingButtons || U.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Qe(l2, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Qe(jA, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Qe(IN, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Qe(zA, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: G[0] || (G[0] = (Y) => i("timeline", Y))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (Re(), Kn(dA, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: G[1] || (G[1] = (Y) => i("timeline", Y))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, lC)
    ])) : ht("", !0);
  }
}, er = "loading", Ca = "ready", Hn = "failed";
function ny(e, t = "") {
  return e && (e.__panoLoadState = er, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ry(e, t = "") {
  return e && (e.__panoLoadState = Ca, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function iy(e, t = "") {
  return e && (e.__panoLoadState = Hn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Fu(e, t) {
  return e ? e.__panoLoadState === Hn ? Hn : typeof t == "function" && t(e) ? Ca : er : Ca;
}
function Tu(e) {
  return Fu(e) === Hn;
}
function pC({ presented: e, background: t = Ca, stickers: n = [] } = {}) {
  if (!e) return { status: er, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === er, o = r.includes(er);
  if (i && o) return { status: er, detail: "mixed" };
  if (i) return { status: er, detail: "background" };
  if (o) return { status: er, detail: "stickers" };
  const a = t === Hn, s = r.includes(Hn);
  return a && s ? { status: Hn, detail: "mixed" } : a ? { status: Hn, detail: "background" } : s ? { status: Hn, detail: "stickers" } : { status: Ca, detail: "" };
}
const hC = "state_json", mC = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Bd = "sticker_image_1", gC = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), oy = 0.01, yC = "external_image", al = "pano_sticker_input_images", bC = "pano_sticker_input_videos", vC = "pano_sticker_input_frames", _C = "pano_sticker_input_video_meta", SC = !0, sl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Sr = Math.PI / 180, wi = 180 / Math.PI, Du = 1, ay = "rgb(255, 221, 87)", wC = "rgb(228, 228, 231)", xC = "rgb(180, 150, 60)", kC = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, MC = 64, Fh = 40, $c = 16, PC = 0.45, Th = 180, NC = 160, ll = 24, AC = 4, CC = 4, IC = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function zc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function EC(e) {
  return 1 - Math.pow(1 - e, 3);
}
function OC(e, t, n) {
  const r = Fe((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function FC(e) {
  return e * e * e;
}
function El(e, t, n) {
  return { x: e, y: t, z: n };
}
function Dh(e, t) {
  return El(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Lh(e, t) {
  return El(e.x * t, e.y * t, e.z * t);
}
function jc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function TC(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return El(e.x / t, e.y / t, e.z / t);
}
function ss(e) {
  return {
    yaw: Dt(Math.atan2(e.x, e.z) * wi),
    pitch: Fe(Math.asin(Fe(e.y, -1, 1)) * wi, -90, 90)
  };
}
function Br(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, a = t[r].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (n = !n);
  }
  return n;
}
function na(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Hc(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = r * r + i * i;
  if (s <= 1e-6) return na(e, t);
  const l = Fe((o * r + a * i) / s, 0, 1), d = Number(t.x || 0) + r * l, u = Number(t.y || 0) + i * l, c = Number(e.x || 0) - d, p = Number(e.y || 0) - u;
  return c * c + p * p;
}
function jn(e, t, n) {
  return e + (t - e) * n;
}
function dr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Fe(n, 0, 1)})`;
}
function DC(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ls = { fillStyle: "", url: "" };
function LC(e, t, n) {
  if (ls.url && ls.fillStyle === String(e || ""))
    return ls.url;
  const r = DC(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ll}" height="${ll}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ls = { fillStyle: String(e || ""), url: r }, r;
}
function cl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Fn(e) {
  return {
    r: Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Fe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function cn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function VC(e) {
  return sl.some((t) => cl(e, t.color));
}
function Lu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Fe(Number(t), 0, 1), o = Fe(Number(n), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(r * 6), s = r * 6 - a, l = o * (1 - i), d = o * (1 - s * i), u = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: u, b: l };
    case 1:
      return { r: d, g: o, b: l };
    case 2:
      return { r: l, g: o, b: u };
    case 3:
      return { r: l, g: d, b: o };
    case 4:
      return { r: u, g: l, b: o };
    default:
      return { r: o, g: l, b: d };
  }
}
function Vu(e) {
  const t = Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((n - r) / a + (n < r ? 6 : 0)) / 6 : i === n ? s = ((r - t) / a + 2) / 6 : s = ((t - n) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function yo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function RC(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Vh(e) {
  const { paintCount: t, maskCount: n } = RC(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return r.forEach((a) => {
    String((a == null ? void 0 : a.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: n + o
  };
}
function io(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function cs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function $C(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function vi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function zC(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function jC(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function HC(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const sy = "pano_suite.ui_settings.v1", ly = "pano_suite.node_grid_visibility.v1";
let oo = null, fr = null;
function As(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function GC() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(sy)) || "").trim();
    if (!t) return oo ? As(oo) : null;
    const n = JSON.parse(t), r = As(n);
    return oo = r, r;
  } catch {
    return oo ? As(oo) : null;
  }
}
function WC(e) {
  var n;
  const t = As(e);
  oo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(sy, JSON.stringify(t));
  } catch {
  }
  return t;
}
function cy() {
  var e;
  if (fr && typeof fr == "object")
    return fr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ly)) || "").trim();
    if (!t)
      return fr = {}, fr;
    const n = JSON.parse(t);
    return fr = n && typeof n == "object" ? n : {}, fr;
  } catch {
    return fr = {}, fr;
  }
}
function KC(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = cy()[n];
  return typeof i == "boolean" ? i : !!t;
}
function BC(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = cy();
  r[n] = !!t, fr = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(ly, JSON.stringify(r));
  } catch {
  }
}
function UC(e, t) {
  const n = { ...e }, r = t.map((i) => i(e));
  for (const { connect: i, ...o } of r) {
    for (const a of Object.keys(o))
      if (a in n) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(n, o);
  }
  for (const i of r) i.connect(n);
  return n;
}
const qr = /* @__PURE__ */ new Map(), YC = 12;
function qC(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = qr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (qr.delete(t), qr.set(t, n), n);
}
function XC(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (qr.delete(n), qr.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); qr.size > YC; ) {
      const i = qr.keys().next().value;
      if (!i) break;
      qr.delete(i);
    }
}
function JC(e) {
  const {
    comfyMedia: t,
    cutoutV2: n,
    editor: r,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: d,
    mediaUiImage: u,
    node: c,
    portStillCanvas: p,
    portVideoEl: g,
    readOnly: y,
    runtime: _,
    scheduler: b,
    stageWrap: C,
    state: U,
    stateV2: D,
    stillCanvas: T,
    timelinePlayhead: x,
    type: H,
    uiState: z,
    videoEl: ee
  } = e;
  let re, B, G, Y, le, ve;
  const ge = {
    thumbnailJobId: 0,
    thumbnailSrc: "",
    // Sources whose filmstrip could not be built; a refresh does not build it again.
    thumbnailFailedSrcs: /* @__PURE__ */ new Set(),
    // Sources that failed to load (a temp MP4 the server deleted) are not tried again in this editor.
    failedSrcs: /* @__PURE__ */ new Set(),
    videoFailed: !1,
    // The legacy transport's slider paused playback and plays again when it is let go.
    resumeAfterScrub: !1,
    // The fps of the editor's own background VIDEO result, 0 for a file without one.
    metaFps: 0
  }, he = 9, Z = [];
  let E = 0;
  const W = () => {
    var Ve, Ke;
    const v = (Ve = C == null ? void 0 : C.getBoundingClientRect) == null ? void 0 : Ve.call(C), j = (Ke = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ke.call(o), ce = Math.max(0, Number((v == null ? void 0 : v.width) || 0)), ne = j ? Math.max(0, Number(j.width || 0)) : 0, O = ne > 0 ? ne + 14 + 12 : 72, me = Math.max(280, Math.floor(ce - O * 2)), Ie = r.fullscreen ? Math.min(1200, me) : me;
    z.videoTransport.shellMaxWidthPx = Ie;
  }, de = () => {
    E || (E = b.requestFrame(() => {
      E = 0, W();
    }));
  }, fe = (v) => {
    if (!(v instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(v.audioTracks) && v.audioTracks.length > 0 || v.audioTracks && typeof v.audioTracks.length == "number" && v.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof v.mozHasAudio == "boolean") return v.mozHasAudio;
    } catch {
    }
    try {
      if (Number(v.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!z.videoTransport.hasAudio;
  }, we = typeof ResizeObserver < "u" ? new ResizeObserver(() => de()) : null;
  we == null || we.observe(C), o && (we == null || we.observe(o)), Z.push(() => {
    var v;
    E && (b.cancelFrame(E), E = 0), (v = we == null ? void 0 : we.disconnect) == null || v.call(we);
  }), de();
  const $e = () => {
    ge.thumbnailJobId += 1, ge.thumbnailSrc = "", z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = he;
  }, oe = async (v, j, ce) => {
    const ne = String(v || "").trim();
    if (!ne) {
      $e();
      return;
    }
    const Ae = qC(ne);
    if (Ae) {
      ge.thumbnailSrc = ne, z.videoTransport.thumbnails = Ae.thumbnails, z.videoTransport.thumbnailCount = Ae.thumbnailCount;
      return;
    }
    const Ce = ++ge.thumbnailJobId;
    ge.thumbnailSrc = ne, z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = he;
    const O = xl(document, "editor.thumbnails");
    O.preload = "auto", O.muted = !0, O.playsInline = !0, O.crossOrigin = "anonymous";
    const me = mn({ label: "editor.thumbnail" });
    try {
      const Ie = await new Promise((yn) => {
        let Rn = !1;
        const nn = (Xt) => {
          Rn || (Rn = !0, yn(Xt));
        };
        O.addEventListener("loadedmetadata", () => nn(!0), { once: !0 }), O.addEventListener("canplay", () => nn(!0), { once: !0 }), O.addEventListener("error", () => nn(!1), { once: !0 }), O.src = ne, O.load();
      });
      if (ge.thumbnailJobId !== Ce) return;
      const Ve = Number(O.videoWidth || 0), Ke = Number(O.videoHeight || 0);
      if (!Ie || Ve < 1 || Ke < 1) {
        ge.thumbnailFailedSrcs.add(ne);
        return;
      }
      const Ge = Math.max(0, Number(O.duration || j || 0)), Ue = 46, tt = Math.max(72, Math.round(Ve / Ke * Ue));
      me.width = tt, me.height = Ue;
      const ct = me.getContext("2d");
      if (!ct) return;
      const At = [], $t = (yn) => new Promise((Rn) => {
        let nn = !1;
        const Xt = () => {
          nn || (nn = !0, Rn());
        };
        O.addEventListener("seeked", Xt, { once: !0 }), O.addEventListener("error", Xt, { once: !0 });
        try {
          O.currentTime = yn;
        } catch {
          Xt();
        }
      });
      for (let yn = 0; yn < he; yn += 1) {
        if (ge.thumbnailJobId !== Ce) return;
        const Rn = he <= 1 ? 0 : yn / (he - 1), nn = Ge > 0 ? Math.max(0, Math.min(Ge - Math.max(1e-3, 0.5 / Math.max(1, Number(ce || 24))), Ge * Rn)) : 0;
        if (await $t(nn), ge.thumbnailJobId !== Ce) return;
        ct.clearRect(0, 0, tt, Ue), ct.drawImage(O, 0, 0, tt, Ue), At.push({
          id: `thumb-${yn}`,
          src: me.toDataURL("image/jpeg", 0.72),
          time: nn,
          label: N(nn)
        });
      }
      if (ge.thumbnailJobId !== Ce) return;
      z.videoTransport.thumbnails = At, z.videoTransport.thumbnailCount = At.length || he, XC(ne, {
        thumbnails: At,
        thumbnailCount: At.length || he,
        duration: Ge,
        fps: ce
      });
    } finally {
      O.removeAttribute("src"), O.load(), eu(me);
    }
  };
  Z.push(() => {
    $e();
  });
  const V = k0({
    video: ee instanceof HTMLVideoElement ? ee : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (v) => b.requestFrame(v),
      cancelFrame: (v) => b.cancelFrame(v)
    },
    fps: J,
    span: () => {
      if (D) return ve();
      const v = Math.round(Number(z.videoTransport.duration || 0) * J());
      return ee.loop || !(v > 0) ? 1 / 0 : v;
    },
    loop: () => D,
    onFrame: (v) => {
      D ? G(v) : ue(), B({ cause: "frame_view", localOnly: !0, reason: yt.PLAYHEAD });
    },
    onCapture: () => {
      k() && (_.backgroundDirty = !0);
    },
    onChange: () => {
      ue(), x.playing.value = V.playing, le(), B({ cause: "frame_view", localOnly: !0, reason: yt.PLAYHEAD });
    }
  });
  Z.push(() => V.dispose());
  const ae = D && g instanceof HTMLVideoElement ? M0({
    video: g,
    onCapture: () => {
      var ce;
      const v = Number(g.videoWidth || 0), j = Number(g.videoHeight || 0);
      v < 1 || j < 1 || (p.width = v, p.height = j, (ce = p.getContext("2d")) == null || ce.drawImage(g, 0, 0), p.__panoFrameIdx += 1, B({ cause: "frame_view", localOnly: !0, reason: yt.MEDIA }));
    },
    onChange: () => B({ cause: "frame_view", localOnly: !0, reason: yt.MEDIA })
  }) : null;
  ae && Z.push(() => ae.dispose());
  const pe = D ? p0({
    createImage: (v, j) => {
      const ce = new Image();
      return ce.onload = j, ce.onerror = j, ce.src = v, ce;
    },
    onLoad: () => B({ cause: "frame_view", localOnly: !0, reason: yt.MEDIA })
  }) : null;
  if (ee instanceof HTMLVideoElement) {
    const v = () => {
      K(), B({ cause: "frame_view", localOnly: !0 });
    }, j = () => {
      ue({
        hasAudio: z.videoTransport.hasAudio,
        muted: ee.muted,
        volume: Number(ee.volume ?? z.videoTransport.volume ?? 1)
      });
    }, ce = () => {
      const ne = ee.dataset.panoSrc;
      ne && (ge.failedSrcs.add(ne), K(), B());
    };
    for (const [ne, Ae] of [
      ["loadedmetadata", v],
      ["loadeddata", v],
      ["canplay", v],
      ["volumechange", j],
      ["error", ce]
    ])
      ee.addEventListener(ne, Ae), Z.push(() => ee.removeEventListener(ne, Ae));
  }
  function xe(v) {
    return t.uiList(c, v);
  }
  function Oe(v) {
    return t.uiValue(c, v);
  }
  function ie() {
    const v = String((c == null ? void 0 : c.comfyClass) || (c == null ? void 0 : c.type) || (c == null ? void 0 : c.title) || "");
    return js(v) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : H === "stickers" || H === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Pe() {
    const { metaKey: v } = ie(), j = Oe(v);
    return Array.isArray(j) && j.length > 0 && j[0] && typeof j[0] == "object" ? j[0] : j && typeof j == "object" ? j : null;
  }
  function w(v) {
    return v ? v instanceof HTMLVideoElement ? [
      String(v.currentSrc || v.src || ""),
      Number(v.videoWidth || 0),
      Number(v.videoHeight || 0)
    ].join("|") : v instanceof HTMLCanvasElement ? [
      "canvas",
      Number(v.width || 0),
      Number(v.height || 0),
      String(v.__panoFrameIdx || 0)
    ].join("|") : [
      String(v.currentSrc || v.src || ""),
      Number(v.naturalWidth || v.width || 0),
      Number(v.naturalHeight || v.height || 0)
    ].join("|") : "none";
  }
  function N(v) {
    const j = Math.max(0, Math.floor(Number(v || 0))), ce = Math.floor(j / 60), ne = j % 60;
    return `${ce}:${String(ne).padStart(2, "0")}`;
  }
  function J() {
    return D ? U.timeline.fps : ge.metaFps || 1e3;
  }
  function ue(v = {}) {
    const j = Number(v.duration ?? z.videoTransport.duration ?? 0), ce = Math.max(1, Number(v.fps ?? z.videoTransport.fps ?? 24)), ne = V.frame / J(), Ae = Object.prototype.hasOwnProperty.call(v, "ready") ? !!v.ready : !!z.videoTransport.ready, Ce = V.playing, O = Object.prototype.hasOwnProperty.call(v, "visible") ? !!v.visible : !!z.videoTransport.visible, me = Object.prototype.hasOwnProperty.call(v, "muted") ? !!v.muted : !!(ee instanceof HTMLVideoElement ? ee.muted : z.videoTransport.muted), Ie = Number(
      Object.prototype.hasOwnProperty.call(v, "volume") ? v.volume : ee instanceof HTMLVideoElement ? ee.volume : z.videoTransport.volume
    ), Ve = Object.prototype.hasOwnProperty.call(v, "hasAudio") ? !!v.hasAudio : fe(ee), Ke = Object.prototype.hasOwnProperty.call(v, "loop") ? !!v.loop : !!z.videoTransport.loop;
    Object.assign(z.videoTransport, {
      ready: Ae,
      playing: Ce,
      visible: O,
      loop: Ke,
      currentTime: Number.isFinite(ne) ? ne : 0,
      duration: Number.isFinite(j) ? j : 0,
      progressPct: j > 1e-6 ? Math.max(0, Math.min(100, ne / j * 100)) : 0,
      currentTimeLabel: N(ne),
      durationLabel: N(j),
      frameCount: Math.max(0, Number(v.frameCount ?? z.videoTransport.frameCount ?? 0)),
      fps: ce,
      hasAudio: Ve,
      muted: me,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ie) ? Ie : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ie) ? Ie : 1)) * 100),
      thumbnails: Array.isArray(v.thumbnails) ? v.thumbnails : z.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(v.thumbnailCount ?? z.videoTransport.thumbnailCount ?? he))
    });
  }
  function P() {
    return !!(ee instanceof HTMLVideoElement && !D && ee.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function F() {
    if (!(ee instanceof HTMLVideoElement) || !z.videoTransport.hasAudio) return;
    const v = !ee.muted;
    ee.muted = v, !v && Number(ee.volume || 0) <= 0 && (ee.volume = Math.max(0.01, Number(z.videoTransport.volume || 1))), ue({
      hasAudio: z.videoTransport.hasAudio,
      muted: ee.muted,
      volume: Number(ee.volume ?? z.videoTransport.volume ?? 1)
    });
  }
  function q() {
    ue({
      visible: P()
    });
  }
  function k() {
    if (!(ee instanceof HTMLVideoElement) || Number(ee.videoWidth || 0) < 1 || Number(ee.videoHeight || 0) < 1) return !1;
    const v = Number(ee.videoWidth || 0), j = Number(ee.videoHeight || 0);
    (T.width !== v || T.height !== j) && (T.width = v, T.height = j);
    const ce = T.getContext("2d");
    return ce ? (ce.clearRect(0, 0, v, j), ce.drawImage(ee, 0, 0, v, j), T.__panoFrameIdx = Number(T.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function A() {
    return !V.showsVideo && Number(T.width || 0) > 0 && Number(T.height || 0) > 0 && Number(T.__panoFrameIdx || 0) > 0 ? T : ee instanceof HTMLVideoElement && Number(ee.videoWidth || 0) > 0 && Number(ee.videoHeight || 0) > 0 && Number(ee.readyState || 0) >= 2 ? ee : null;
  }
  function I() {
    T.__panoFrameIdx = 0, _.backgroundDirty = !0;
  }
  function K() {
    if (!(ee instanceof HTMLVideoElement)) return null;
    const { videoKey: v } = ie(), j = an(c, "background") && xe(v)[0] || null, ce = d(j), ne = [ce, t.linkedVideoFile(c, f())].filter(Boolean), Ae = ne.find((Ge) => !ge.failedSrcs.has(Ge)) || "";
    ge.videoFailed = !Ae && ne.length > 0;
    const Ce = Ae && Ae === ce ? Pe() : null;
    ge.metaFps = Number(Ce == null ? void 0 : Ce.fps) > 0 ? Number(Ce.fps) : 0;
    const O = Math.max(1, Number((Ce == null ? void 0 : Ce.fps) || (D ? U.timeline.fps : 24))), me = ee.dataset.panoSrc === Ae && Number.isFinite(ee.duration) ? ee.duration : 0, Ie = Number((Ce == null ? void 0 : Ce.duration) || ((Ce == null ? void 0 : Ce.frames) > 0 ? Ce.frames / O : me)), Ve = Math.max(0, Number((Ce == null ? void 0 : Ce.frames) || Math.round(Ie * O))), Ke = !!(Ce != null && Ce.has_audio) || fe(ee);
    return Ae && ee.dataset.panoSrc !== Ae ? (ee.pause(), I(), ee.dataset.panoSrc = Ae, ee.loop = !D && !!z.videoTransport.loop, ee.muted = !!z.videoTransport.muted, ee.volume = Math.max(0, Math.min(1, Number(z.videoTransport.volume ?? 1))), ee.src = Ae, ee.load(), V.setSource(!0), D || V.seek(0)) : !Ae && ee.getAttribute("src") && (ee.pause(), ee.removeAttribute("src"), delete ee.dataset.panoSrc, ee.load(), I(), $e(), V.setSource(!1)), D || (ee.loop = !!z.videoTransport.loop), Ae && !D && ge.thumbnailSrc !== Ae && !ge.thumbnailFailedSrcs.has(Ae) && oe(Ae, Ie, O), Ae || $e(), ue({
      ready: !!Ae,
      visible: !!Ae && P(),
      duration: Ie,
      frameCount: Ve,
      fps: O,
      hasAudio: Ke,
      loop: !!ee.loop,
      muted: !!ee.muted,
      volume: Number(ee.volume ?? z.videoTransport.volume ?? 1),
      thumbnailCount: z.videoTransport.thumbnailCount
    }), Ae || null;
  }
  function X(v, j = null) {
    return u(c, v, a, j || (() => B()));
  }
  function Q(v = null) {
    return an(c, "external-sticker") ? X(al, v) : null;
  }
  function R() {
    if (!an(c, "external-sticker")) return null;
    const v = xe(_C)[0];
    if (!v || typeof v != "object") return null;
    const j = xe(vC).map(d).filter(Boolean);
    if (j.length) return { frames: j, meta: v };
    const ce = d(xe(bC)[0] || null);
    return ce ? { src: ce, meta: v } : null;
  }
  function te() {
    const v = U.stickers.find(re), j = v ? R() : null, ce = j ? u0(v.clip, r.frame, U.timeline.fps, j.meta) : null;
    ae.follow({ src: (j == null ? void 0 : j.src) || "", time: ce, playing: V.advancing, fps: U.timeline.fps });
    const ne = v ? se(v) : null, Ae = j != null && j.frames ? pe.picture(j.frames, ce, j.meta, ne) : ae.picture(p, ne);
    return Ae ? { media: Ae, revision: w(Ae), source: f0(j, ne) } : null;
  }
  function Me() {
    return !D || !an(c, "scene") ? null : qp(xe("pano_scene_files"), xe("pano_scene_meta"), d);
  }
  function Te() {
    return !D || !an(c, "external-sticker") ? null : qp(xe("pano_sticker_files"), xe("pano_sticker_meta"), d);
  }
  function se(v) {
    var O;
    if (v && typeof v == "object" && (re(v) || v.external === !0))
      return Q(() => {
        Rr(c, "image-loaded");
      });
    const j = D ? be(v) : String(v && typeof v == "object" ? v.asset_id || v.assetId || "" : v || "");
    if (!j) return null;
    const ce = a.get(j);
    if (ce) return ce;
    const ne = D ? Eg(v.source) : (O = U.assets) == null ? void 0 : O[j], Ae = l(ne);
    if (!Ae) return null;
    const Ce = new Image();
    return ny(Ce, Ae), Ce.onload = () => {
      ry(Ce, Ae), B();
    }, Ce.onerror = () => {
      iy(Ce, Ae), B();
    }, Ce.src = Ae, a.set(j, Ce), Ce;
  }
  function be(v) {
    const { source: j } = v;
    return j.filename ? `file:${j.storage}:${j.subfolder}:${j.filename}` : `sticker:${v.id}`;
  }
  function Se() {
    if (H === "cutout" && !n) {
      const Ae = A();
      if (Ae) return Ae;
      const Ce = s(
        c,
        ["erp_image", "bg_erp"],
        () => B(),
        "background:cutout:erp_image|bg_erp"
      );
      return Ce && !Tu(Ce) ? Ce : u(c, "pano_input_images", a, () => B()) || Ce || null;
    }
    const v = A();
    if (v) return v;
    const j = an(c, "background") ? u(c, "pano_input_images", a, () => B()) : null;
    if (j && !Tu(j)) return j;
    if (ee instanceof HTMLVideoElement && ee.dataset.panoSrc) return ee;
    const ce = f();
    return s(c, ce, () => B(), `background:${ce.join("|")}`) || j || null;
  }
  function m() {
    var j;
    const v = (Array.isArray(c == null ? void 0 : c.inputs) ? c.inputs : []).findIndex((ce) => (ce == null ? void 0 : ce.name) === "source");
    return v >= 0 && c.graph ? String(((j = c.getInputLink(v)) == null ? void 0 : j.type) || "") : "";
  }
  function f() {
    if (H === "cutout") return n ? m() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const v = Array.isArray(c == null ? void 0 : c.inputs) ? c.inputs.map((ne) => String((ne == null ? void 0 : ne.name) || "")) : [], j = v.includes("erp_image"), ce = v.includes("bg_erp");
    return y && (j || ce) ? j ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : H === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function $(v) {
    return v ? v instanceof HTMLImageElement ? !!v.complete && Number(v.naturalWidth || v.width || 0) > 0 && Number(v.naturalHeight || v.height || 0) > 0 : v instanceof HTMLVideoElement ? Number(v.videoWidth || 0) > 0 && Number(v.videoHeight || 0) > 0 && Number(v.readyState || 0) >= 2 : Number(v.width || v.naturalWidth || 0) > 0 && Number(v.height || v.naturalHeight || 0) > 0 : !1;
  }
  function S() {
    if (i.failed) return { status: Hn, detail: "renderer" };
    if (!i.ready) return { status: er, detail: "boot" };
    const v = Se(), j = ge.videoFailed ? Hn : Fu(v, $), ce = [];
    for (const ne of Y()) {
      if ((ne == null ? void 0 : ne.visible) === !1) continue;
      const Ae = se(ne);
      ce.push(Fu(Ae, $));
    }
    return pC({
      presented: _.hasPresentedFrame,
      background: j,
      stickers: ce
    });
  }
  return {
    connect(v) {
      ({
        isExternalSticker: re,
        requestDraw: B,
        setTimelineFrame: G,
        skyStickers: Y,
        syncTimeline: le,
        timelineSpanFrames: ve
      } = v);
    },
    videoState: ge,
    videoCleanupFns: Z,
    queueVideoTransportLayout: de,
    playback: V,
    portVideo: ae,
    getNodeUiValue: Oe,
    getMediaRevisionToken: w,
    playbackFps: J,
    syncVideoTransportState: ue,
    toggleVideoMuted: F,
    syncVideoTransportVisibility: q,
    refreshModalVideoSource: K,
    getStickerUiImage: X,
    getExternalStickerPreviewImage: Q,
    getPortMedia: R,
    followPortSticker: te,
    getStickerImage: se,
    stickerImageKey: be,
    getConnectedErpImage: Se,
    isDecodedImageReady: $,
    getStageImageStatus: S,
    sceneFiles: Me,
    stickerFiles: Te
  };
}
function ZC(e = 80, t = null, n = 8) {
  const r = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(n || 8));
  function s(d) {
    if (r.splice(0, r.length), i = -1, !d || typeof d != "object" || !Array.isArray(d.entries) || (d.entries.forEach((c) => {
      r.push(String(c || ""));
    }), !r.length)) return;
    const u = Number(d.index);
    Number.isInteger(u) ? u === -1 ? i = -1 : i = Math.max(0, Math.min(r.length - 1, u)) : i = r.length - 1;
  }
  function l(d) {
    r[i] !== d && (r.splice(i + 1), r.push(d), r.length > o && r.shift(), i = r.length - 1);
  }
  return s(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(d) {
      l(String(d || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const d = i - 1;
      return d < 0 || d >= r.length ? null : (i = d, r[i]);
    },
    redo() {
      const d = i + 1;
      return d < 0 || d >= r.length ? null : (i = d, r[i]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const d = r.length, u = Math.max(0, d - a), c = i >= 0 ? Math.max(0, Math.min(i, u)) : u, p = r.slice(c, c + a), g = i < 0 ? -1 : Math.max(-1, Math.min(p.length - 1, i - c));
      return {
        version: 1,
        entries: p,
        index: g
      };
    },
    hydrate: s
  };
}
const QC = 80;
function uy(e) {
  return JSON.stringify(Rw(e));
}
function eI(e) {
  return ZC(QC, { entries: [uy(e)], index: 0 });
}
function tI(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, d, u, c, p, g, y, _, b, C, U, D, T, x;
  function H() {
    n || (U(), Tg(i), !(o && i.stickers.some(c)) && (t.historyController.commitActionGroup(uy(i)), T()));
  }
  function z(re) {
    var le, ve;
    if (n) return;
    C();
    const B = re < 0 ? t.historyController.undo() : t.historyController.redo();
    if (T(), !B) return;
    const G = $w(i, B), Y = (le = i.timeline) == null ? void 0 : le.fps;
    Object.keys(i).forEach((ge) => delete i[ge]), Object.assign(i, G.state), U(!1), o && i.timeline.fps !== Y && y.seek(Math.round(t.frame * i.timeline.fps / Y)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((ve = u()) == null ? void 0 : ve.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), _(), r.backgroundDirty = !0, G.paintingChanged ? g() : p(), D(), x(), d(), b({ cause: "cutout_frame" });
  }
  function ee() {
    var G, Y;
    const re = Array.isArray((G = t.historyController) == null ? void 0 : G.entries) ? t.historyController.entries : [], B = Number((Y = t.historyController) == null ? void 0 : Y.index);
    return {
      canUndo: !n && re.length > 1 && B > 0,
      canRedo: !n && re.length > 1 && B >= 0 && B < re.length - 1
    };
  }
  return {
    connect(re) {
      ({
        clearWorldSelection: l,
        commitState: d,
        getActiveCutoutShot: u,
        isUploadingSticker: c,
        markObjectVisualsDirty: p,
        markPaintStrokeVisualsDirty: g,
        playback: y,
        releaseHiddenSelection: _,
        requestDraw: b,
        stopTimelinePlayback: C,
        syncCutoutShot: U,
        syncPaintUi: D,
        syncUndoRedoButtons: T,
        updateSidePanel: x
      } = re);
    },
    pushHistory: H,
    restoreHistory: z,
    getHistoryCapabilities: ee
  };
}
function nI(e) {
  const {
    canvas: t,
    cutoutV2: n,
    editor: r,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, d, u, c, p, g, y;
  function _() {
    return s === "stickers" ? b() : o.shots;
  }
  function b() {
    return i ? o.stickers.filter((m) => m.placement === "sky") : o.stickers;
  }
  function C(m) {
    return i && ae(m);
  }
  function U(m) {
    return m.source.kind === "file" && !m.source.filename && !m.source.data_url;
  }
  function D(m) {
    return C(m) ? wd(m, r.frame) : m;
  }
  function T(m, f) {
    C(m) ? Cg(m, r.frame, f) : Object.assign(m, f);
  }
  function x() {
    const m = o.painting || (o.painting = Po(null));
    return Array.isArray(m.groups) || (m.groups = []), m.groups;
  }
  function H(m = "paint") {
    var v, j;
    const f = Array.isArray((j = (v = o.painting) == null ? void 0 : v[m]) == null ? void 0 : j.strokes) ? o.painting[m].strokes : [], $ = [], S = /* @__PURE__ */ new Set();
    for (const ce of f) {
      const ne = String((ce == null ? void 0 : ce.actionGroupId) || "").trim();
      !ne || S.has(ne) || (S.add(ne), $.push(ne));
    }
    return $;
  }
  function z() {
    return H("paint");
  }
  function ee(m, f) {
    const $ = String(f || "").trim();
    return $ ? `${m === "mask" ? "mask" : "paint"}:${$}` : "";
  }
  function re(m) {
    const f = String(m || "").trim();
    return f ? `raster:${f}` : "";
  }
  function B(m) {
    const f = String(m || "").trim();
    if (!f) return "";
    const $ = f.match(/^raster:(.*)$/);
    return String($ ? $[1] || "" : f).trim();
  }
  function G(m, f = null) {
    const $ = String(m || "").trim();
    if (!$) return { layerKind: "paint", actionGroupId: "" };
    const S = $.match(/^(paint|mask):(.*)$/);
    return S ? { layerKind: S[1] === "mask" ? "mask" : "paint", actionGroupId: String(S[2] || "").trim() } : { layerKind: f === "mask" ? "mask" : "paint", actionGroupId: $ };
  }
  function Y() {
    var f;
    let m = -1;
    for (const $ of b())
      m = Math.max(m, Number(($ == null ? void 0 : $.z_index) || 0));
    for (const $ of x())
      m = Math.max(m, Number(($ == null ? void 0 : $.z_index) || 0));
    for (const $ of Array.isArray((f = o.painting) == null ? void 0 : f.raster_objects) ? o.painting.raster_objects : [])
      String(($ == null ? void 0 : $.layerKind) || "paint") === "paint" && (m = Math.max(m, Number(($ == null ? void 0 : $.z_index) || 0)));
    return m + 1;
  }
  function le(m, f = null) {
    const $ = String(m || "").trim();
    if (!$) return null;
    const S = x();
    let v = S.find((j) => String((j == null ? void 0 : j.actionGroupId) || "") === $);
    return v ? f != null && (v.z_index = Math.max(0, Number(f || 0))) : (v = {
      id: $,
      type: "strokeGroup",
      actionGroupId: $,
      z_index: f == null ? Y() : Math.max(0, Number(f || 0)),
      locked: !1,
      frame: null
    }, S.push(v)), v;
  }
  function ve(m) {
    if (!(m != null && m.centerUv)) return [];
    const f = Number(m.centerUv.u || 0), $ = Number(m.centerUv.v || 0), S = Number(m.halfW || 0), v = Number(m.halfH || 0);
    return [
      {
        u: ((f - S) % 1 + 1) % 1,
        v: Fe($ - v, 0, 1)
      },
      {
        u: ((f + S) % 1 + 1) % 1,
        v: Fe($ - v, 0, 1)
      },
      {
        u: ((f + S) % 1 + 1) % 1,
        v: Fe($ + v, 0, 1)
      },
      {
        u: ((f - S) % 1 + 1) % 1,
        v: Fe($ + v, 0, 1)
      }
    ];
  }
  function ge() {
    const m = new Set(z()), $ = x().filter((S) => m.has(String((S == null ? void 0 : S.actionGroupId) || "")));
    return m.forEach((S) => {
      $.some((v) => String((v == null ? void 0 : v.actionGroupId) || "") === S) || $.push({
        id: S,
        type: "strokeGroup",
        actionGroupId: S,
        z_index: Y(),
        locked: !1,
        frame: null
      });
    }), $.sort((S, v) => Number((S == null ? void 0 : S.z_index) || 0) - Number((v == null ? void 0 : v.z_index) || 0)), o.painting.groups = $, $;
  }
  function he(m, f, $) {
    var Ge;
    const S = (Ue) => (Number(Ue || 0) % 1 + 1) % 1, v = [];
    for (const Ue of $) {
      const tt = Ue == null ? void 0 : Ue.geometry, ct = (tt == null ? void 0 : tt.geometryKind) === "lasso_fill" ? tt == null ? void 0 : tt.points : (tt == null ? void 0 : tt.processedPoints) || (tt == null ? void 0 : tt.rawPoints) || (tt == null ? void 0 : tt.points) || [];
      Array.isArray(ct) && v.push(...ct);
    }
    if (!v.length) return null;
    const j = S(((Ge = v[0]) == null ? void 0 : Ge.u) || 0);
    let ce = 0, ne = 0;
    v.forEach((Ue) => {
      const tt = S((Ue == null ? void 0 : Ue.u) || 0);
      ce += j + ue(tt, j), ne += Number((Ue == null ? void 0 : Ue.v) || 0);
    });
    const Ae = (ce / v.length % 1 + 1) % 1;
    let Ce = 1 / 0, O = -1 / 0, me = 1 / 0, Ie = -1 / 0;
    v.forEach((Ue) => {
      const tt = S((Ue == null ? void 0 : Ue.u) || 0), ct = ue(tt, Ae);
      Ce = Math.min(Ce, ct), O = Math.max(O, ct);
      const At = Number((Ue == null ? void 0 : Ue.v) || 0);
      me = Math.min(me, At), Ie = Math.max(Ie, At);
    });
    const Ve = $.reduce((Ue, tt) => {
      const ct = d(String((tt == null ? void 0 : tt.toolKind) || "pen")), At = Pn[ct] || Pn[Ir], $t = Math.max(1, Number((tt == null ? void 0 : tt.size) || 10)) * Math.max(0.1, Number((At == null ? void 0 : At.sizeScale) ?? 1));
      return Math.max(Ue, $t);
    }, 0), Ke = Math.max(35e-4, Ve / 2048);
    return {
      centerUv: { u: ((Ae + (Ce + O) * 0.5) % 1 + 1) % 1, v: Fe((me + Ie) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (O - Ce) * 0.5 + Ke,
      halfH: (Ie - me) * 0.5 + Ke,
      uvPad: Ke
    };
  }
  function Z(m, f, $) {
    const S = String(m || "").trim();
    if (!S) return null;
    const v = x().find((ce) => String((ce == null ? void 0 : ce.actionGroupId) || "") === S);
    if (!v) return null;
    const j = $ || w(S, f);
    return v.frame = he(S, f, j), v.frame;
  }
  function E() {
    var S;
    const m = b().map((v) => ({
      type: "sticker",
      id: String((v == null ? void 0 : v.id) || ""),
      z_index: Number((v == null ? void 0 : v.z_index) || 0),
      item: v
    })), f = ge().map((v) => ({
      type: "strokeGroup",
      id: String((v == null ? void 0 : v.id) || (v == null ? void 0 : v.actionGroupId) || ""),
      actionGroupId: String((v == null ? void 0 : v.actionGroupId) || ""),
      z_index: Number((v == null ? void 0 : v.z_index) || 0),
      item: v
    })), $ = (Array.isArray((S = o.painting) == null ? void 0 : S.raster_objects) ? o.painting.raster_objects : []).filter((v) => String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => ({
      type: "rasterObject",
      id: String((v == null ? void 0 : v.id) || ""),
      z_index: Number((v == null ? void 0 : v.z_index) || 0),
      item: v
    }));
    return [...m, ...f, ...$].sort((v, j) => Number(v.z_index || 0) - Number(j.z_index || 0));
  }
  function W(m = !0) {
    var $, S, v, j, ce, ne;
    const f = E().filter((Ae) => Ae.type === "strokeGroup").map((Ae) => String(Ae.actionGroupId || "")).filter((Ae) => !!Ae);
    if (m) {
      const Ae = String(((S = ($ = r.interaction) == null ? void 0 : $.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), Ce = String(((j = (v = r.interaction) == null ? void 0 : v.stroke) == null ? void 0 : j.layerKind) || "").trim(), O = String(((ne = (ce = r.interaction) == null ? void 0 : ce.stroke) == null ? void 0 : ne.toolKind) || "").trim();
      Ae && Ce === "paint" && O !== "eraser" && !f.includes(Ae) && f.push(Ae);
    }
    return f;
  }
  function de(m = !0) {
    var ne, Ae, Ce, O, me, Ie;
    const f = E();
    if (!m) return f;
    const $ = String(((Ae = (ne = r.interaction) == null ? void 0 : ne.stroke) == null ? void 0 : Ae.actionGroupId) || "").trim(), S = String(((O = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : O.layerKind) || "").trim(), v = String(((Ie = (me = r.interaction) == null ? void 0 : me.stroke) == null ? void 0 : Ie.toolKind) || "").trim();
    if (!$ || S !== "paint" || v === "eraser" || f.some((Ve) => Ve.type === "strokeGroup" && String(Ve.actionGroupId || "") === $))
      return f;
    const j = g();
    let ce = f.reduce((Ve, Ke) => Math.max(Ve, Number((Ke == null ? void 0 : Ke.z_index) || 0)), -1) + 1;
    return j && Pe(j) && String(j.actionGroupId || "") === $ && (ce = Number(j.z_index || 0)), [
      ...f,
      {
        type: "strokeGroup",
        id: $,
        actionGroupId: $,
        z_index: ce,
        item: null
      }
    ].sort((Ve, Ke) => Number((Ve == null ? void 0 : Ve.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
  }
  function fe() {
    return x().slice().sort((m, f) => Number((m == null ? void 0 : m.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((m) => ie(ee("paint", (m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || ""))).filter(Boolean);
  }
  function we() {
    var m;
    return (Array.isArray((m = o.painting) == null ? void 0 : m.raster_objects) ? o.painting.raster_objects : []).filter((f) => String((f == null ? void 0 : f.layerKind) || "paint") === "paint").slice().sort((f, $) => Number((f == null ? void 0 : f.z_index) || 0) - Number(($ == null ? void 0 : $.z_index) || 0)).map((f) => xe(re((f == null ? void 0 : f.id) || ""))).filter(Boolean);
  }
  function $e() {
    return n || !Array.isArray(o.stickers) ? [] : b();
  }
  function oe() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...$e()];
  }
  function V(m) {
    return !!m && Array.isArray(o.shots) && o.shots.includes(m);
  }
  function ae(m) {
    return !!m && Array.isArray(o.stickers) && o.stickers.includes(m);
  }
  function pe() {
    var m;
    return Array.isArray((m = o.painting) == null ? void 0 : m.raster_objects) ? o.painting.raster_objects : [];
  }
  function xe(m) {
    const f = B(m);
    if (!f) return null;
    const $ = pe().find((S) => String((S == null ? void 0 : S.id) || "").trim() === f);
    return !$ || String(($ == null ? void 0 : $.layerKind) || "paint") !== "paint" ? null : {
      ...$,
      id: re(f),
      type: "rasterObject",
      rasterObjectId: f
    };
  }
  function Oe(m) {
    if (!m || typeof m != "object" || String(m.type || "") !== "rasterObject") return !1;
    const f = B(m.rasterObjectId || m.id || "");
    return !!f && !!xe(re(f));
  }
  function ie(m) {
    const f = G(m), $ = String(f.actionGroupId || "").trim();
    if (!$) return null;
    const S = x().find((v) => String((v == null ? void 0 : v.id) || (v == null ? void 0 : v.actionGroupId) || "") === $ || String((v == null ? void 0 : v.actionGroupId) || "") === $);
    return S ? {
      ...S,
      id: ee("paint", $),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: $
    } : null;
  }
  function Pe(m) {
    if (!m || typeof m != "object" || String(m.type || "") !== "strokeGroup") return !1;
    const f = String(m.actionGroupId || "").trim(), $ = String(m.layerKind || "paint").trim() || "paint";
    return !!f && !!ie(ee($, f));
  }
  function w(m, f = null) {
    const $ = G(m, f), S = String($.actionGroupId || "").trim();
    return S ? c($.layerKind).filter((v) => String((v == null ? void 0 : v.actionGroupId) || "").trim() === S) : [];
  }
  function N(m, f = "paint") {
    const $ = String(m || "").trim(), v = `geomv5:${String(f || "paint").trim() || "paint"}:${$}:${r.mode}:${p()}`;
    if (r.mode === "frame") {
      const j = l(), ce = String((j == null ? void 0 : j.id) || ""), ne = j ? u(j) : null;
      return `${v}:frame:${ce}:${Math.round(Number((j == null ? void 0 : j.yaw_deg) || 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.pitch_deg) || 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.roll_deg) ?? (j == null ? void 0 : j.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ne == null ? void 0 : ne.x) || 0))}:${Math.round(Number((ne == null ? void 0 : ne.y) || 0))}:${Math.round(Number((ne == null ? void 0 : ne.w) || 0))}:${Math.round(Number((ne == null ? void 0 : ne.h) || 0))}`;
    }
    return `${v}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function J(m, f, $) {
    return !m || typeof m != "object" ? m : {
      ...m,
      u: ((Number(m.u || 0) + Number(f || 0)) % 1 + 1) % 1,
      v: Fe(Number(m.v || 0) + Number($ || 0), 0, 1)
    };
  }
  function ue(m, f) {
    let $ = Number(m || 0) - Number(f || 0);
    for (; $ > 0.5; ) $ -= 1;
    for (; $ < -0.5; ) $ += 1;
    return $;
  }
  function P(m, f = null, $ = null) {
    var Ce;
    const S = G(m, f), v = Array.isArray($) ? $ : w(S.actionGroupId, S.layerKind), j = [];
    if (v.forEach((O) => {
      const me = (O == null ? void 0 : O.geometry) || null, Ie = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [];
      Array.isArray(Ie) && j.push(...Ie);
    }), !j.length) return { u: 0.5, v: 0.5 };
    const ce = Number(((Ce = j[0]) == null ? void 0 : Ce.u) || 0);
    let ne = 0, Ae = 0;
    return j.forEach((O) => {
      ne += ce + ue(Number((O == null ? void 0 : O.u) || 0), ce), Ae += Number((O == null ? void 0 : O.v) || 0);
    }), {
      u: (ne / j.length % 1 + 1) % 1,
      v: Fe(Ae / j.length, 0, 1)
    };
  }
  function F(m, f, $ = 1, S = 0) {
    if (!m || typeof m != "object") return m;
    const v = Number((f == null ? void 0 : f.u) || 0), j = Number((f == null ? void 0 : f.v) || 0), ce = ue(Number(m.u || 0), v), ne = Number(m.v || 0) - j, Ae = Number(S || 0) * Sr, Ce = Math.cos(Ae), O = Math.sin(Ae), me = Math.max(0.02, Number($ || 1)), Ie = (ce * Ce - ne * O) * me, Ve = (ce * O + ne * Ce) * me;
    return {
      ...m,
      u: ((v + Ie) % 1 + 1) % 1,
      v: Fe(j + Ve, 0, 1)
    };
  }
  function q(m, f, $, S = null, v = null, j = null) {
    const ce = G(m, v), ne = String(ce.actionGroupId || "").trim();
    if (!ne) return !1;
    const Ae = c(ce.layerKind), Ce = Array.isArray(S) ? new Map(S.map((me) => [String((me == null ? void 0 : me.id) || ""), me])) : null;
    let O = !1;
    if (Ae.forEach((me) => {
      if (String((me == null ? void 0 : me.actionGroupId) || "").trim() !== ne) return;
      const Ie = (Ce == null ? void 0 : Ce.get(String((me == null ? void 0 : me.id) || ""))) || me, Ve = me == null ? void 0 : me.geometry, Ke = Ie == null ? void 0 : Ie.geometry;
      !Ve || !Ke || (Array.isArray(Ke.points) && (Ve.points = Ke.points.map((Ge) => J(Ge, f, $)), O = !0), Array.isArray(Ke.rawPoints) && (Ve.rawPoints = Ke.rawPoints.map((Ge) => J(Ge, f, $)), O = !0), Array.isArray(Ke.processedPoints) && (Ve.processedPoints = Ke.processedPoints.map((Ge) => J(Ge, f, $)), O = !0));
    }), O && j) {
      const me = x().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === ne);
      me && (me.frame = null);
    }
    return O;
  }
  function k(m, f = 1, $ = 0, S = null, v = null, j = null) {
    const ce = G(m, v), ne = String(ce.actionGroupId || "").trim();
    if (!ne) return !1;
    const Ae = c(ce.layerKind), Ce = Array.isArray(S) ? S : w(ne, ce.layerKind), O = Array.isArray(Ce) ? new Map(Ce.map((Ve) => [String((Ve == null ? void 0 : Ve.id) || ""), Ve])) : null, me = (j == null ? void 0 : j.centerUv) ?? P(ne, ce.layerKind, Ce);
    let Ie = !1;
    if (Ae.forEach((Ve) => {
      if (String((Ve == null ? void 0 : Ve.actionGroupId) || "").trim() !== ne) return;
      const Ke = (O == null ? void 0 : O.get(String((Ve == null ? void 0 : Ve.id) || ""))) || Ve, Ge = Ve == null ? void 0 : Ve.geometry, Ue = Ke == null ? void 0 : Ke.geometry;
      !Ge || !Ue || (Array.isArray(Ue.points) && (Ge.points = Ue.points.map((tt) => F(tt, me, f, $)), Ie = !0), Array.isArray(Ue.rawPoints) && (Ge.rawPoints = Ue.rawPoints.map((tt) => F(tt, me, f, $)), Ie = !0), Array.isArray(Ue.processedPoints) && (Ge.processedPoints = Ue.processedPoints.map((tt) => F(tt, me, f, $)), Ie = !0));
    }), Ie && j) {
      const Ve = x().find((Ke) => String((Ke == null ? void 0 : Ke.actionGroupId) || "") === ne);
      Ve && (Ve.frame = null);
    }
    return Ie;
  }
  function A(m, f, $, S = null) {
    const v = B(m);
    if (!v) return !1;
    const j = pe().find((O) => String((O == null ? void 0 : O.id) || "").trim() === v);
    if (!j) return !1;
    const ce = S && typeof S == "object" ? S : j, ne = (ce == null ? void 0 : ce.transform) || {}, Ae = Number(ne.du || 0) + Number(f || 0), Ce = Fe(Number(ne.dv || 0) + Number($ || 0), -1, 1);
    return j.transform || (j.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), j.transform.du = Ae, j.transform.dv = Ce, !0;
  }
  function I(m, f = 1, $ = null) {
    const S = B(m);
    if (!S) return !1;
    const v = pe().find((Ce) => String((Ce == null ? void 0 : Ce.id) || "").trim() === S);
    if (!v) return !1;
    const j = $ && typeof $ == "object" ? $ : v, ce = (j == null ? void 0 : j.transform) || {}, ne = Math.max(0.01, Number(ce.scale || 1)), Ae = Fe(ne * Math.max(0.01, Number(f || 1)), 0.01, 100);
    return v.transform || (v.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), v.transform.scale = Ae, !0;
  }
  function K() {
    return Y();
  }
  function X(m) {
    var f;
    return !m || typeof m != "object" ? !1 : a ? ((f = m.source) == null ? void 0 : f.kind) === "port" : String(m.id || "") === Bd || String(m.source_kind || "") === yC;
  }
  function Q(m) {
    return !!(m && typeof m == "object" && m.visible === !1);
  }
  function R(m) {
    return X(m) && Q(m) ? Yg : 1;
  }
  function te(m, f, $ = 1, S = 0) {
    if (!m || typeof m != "object") return m;
    const v = Number((f == null ? void 0 : f.u) || 0), j = Number((f == null ? void 0 : f.v) || 0), ce = ue(Number(m.u || 0), v), ne = Number(m.v || 0) - j, Ae = Math.max(0.02, Number($ || 1)), Ce = Number(S || 0) * Sr, O = Math.cos(Ce), me = Math.sin(Ce), Ie = ce / Ae, Ve = ne / Ae, Ke = Ie * O + Ve * me, Ge = -Ie * me + Ve * O;
    return {
      ...m,
      u: ((v + Ke) % 1 + 1) % 1,
      v: j + Ge
    };
  }
  function Me(m) {
    const f = (m == null ? void 0 : m.bbox) || null, $ = (m == null ? void 0 : m.transform) || {};
    return f ? {
      u: (((Number(f.u0 || 0) + Number(f.u1 || 0)) * 0.5 + Number($.du || 0)) % 1 + 1) % 1,
      v: Fe((Number(f.v0 || 0) + Number(f.v1 || 0)) * 0.5 + Number($.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Te(m) {
    var Ae, Ce, O, me;
    const f = (m == null ? void 0 : m.bbox) || null;
    if (!f) return [];
    const $ = {
      u: (Number(f.u0 || 0) + Number(f.u1 || 0)) * 0.5,
      v: (Number(f.v0 || 0) + Number(f.v1 || 0)) * 0.5
    }, S = Math.max(0.01, Number(((Ae = m == null ? void 0 : m.transform) == null ? void 0 : Ae.scale) || 1)), v = Number(((Ce = m == null ? void 0 : m.transform) == null ? void 0 : Ce.rot_deg) || 0), j = Number(((O = m == null ? void 0 : m.transform) == null ? void 0 : O.du) || 0), ce = Number(((me = m == null ? void 0 : m.transform) == null ? void 0 : me.dv) || 0);
    return [
      { u: Number(f.u0 || 0), v: Number(f.v0 || 0) },
      { u: Number(f.u1 || 0), v: Number(f.v0 || 0) },
      { u: Number(f.u1 || 0), v: Number(f.v1 || 0) },
      { u: Number(f.u0 || 0), v: Number(f.v1 || 0) }
    ].map((Ie) => J(F(Ie, $, S, v), j, ce));
  }
  function se(m) {
    const f = B((m == null ? void 0 : m.rasterObjectId) || (m == null ? void 0 : m.id) || ""), $ = (m == null ? void 0 : m.transform) || {}, S = (m == null ? void 0 : m.bbox) || {}, v = `${f}:${r.mode}:${p()}:${S.u0}:${S.v0}:${S.u1}:${S.v1}:${$.du}:${$.dv}:${$.rot_deg}:${$.scale}`;
    if (r.mode === "frame") {
      const j = l(), ce = j ? u(j) : null;
      return `${v}:frame:${String((j == null ? void 0 : j.id) || "")}:${Math.round(Number((ce == null ? void 0 : ce.x) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.y) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.w) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.h) || 0))}`;
    }
    return `${v}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function be(m) {
    const f = String((m == null ? void 0 : m.id) || ""), $ = V(m) ? "frame" : ae(m) ? "sticker" : "item", S = D(m), v = [
      $,
      f,
      r.mode,
      Number((S == null ? void 0 : S.yaw_deg) || 0).toFixed(4),
      Number((S == null ? void 0 : S.pitch_deg) || 0).toFixed(4),
      Number((S == null ? void 0 : S.hFOV_deg) || 0).toFixed(4),
      Number((S == null ? void 0 : S.vFOV_deg) || 0).toFixed(4),
      Number((S == null ? void 0 : S.rot_deg) || 0).toFixed(4),
      Number((S == null ? void 0 : S.roll_deg) || 0).toFixed(4),
      Dr(S),
      C(m) && y(m)
    ].join(":");
    if (r.mode === "frame") {
      const j = l(), ce = j ? u(j) : null;
      return `${v}:frame:${String((j == null ? void 0 : j.id) || "")}:${Math.round(Number((ce == null ? void 0 : ce.x) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.y) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.w) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.h) || 0))}`;
    }
    return `${v}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Se() {
    E().forEach((f, $) => {
      f.type === "sticker" && f.item && (f.item.z_index = $), f.type === "strokeGroup" && f.item && (f.item.z_index = $), f.type === "rasterObject" && f.item && (f.item.z_index = $);
    });
  }
  return {
    connect(m) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: d,
        getFrameViewRect: u,
        getPaintingLayerList: c,
        getPaintingRevisionKey: p,
        getSelected: g,
        sceneStickerShown: y
      } = m);
    },
    getList: _,
    skyStickers: b,
    isSceneSticker: C,
    isUploadingSticker: U,
    poseOf: D,
    writePose: T,
    getPaintingGroupList: x,
    makeStrokeGroupSelectionId: ee,
    makeRasterObjectSelectionId: re,
    parseRasterObjectSelectionId: B,
    ensurePaintingGroupEntry: le,
    getFrameCornersUv: ve,
    ensureGroupFrame: Z,
    getDisplayListObjects: E,
    getOrderedPaintGroupIds: W,
    getOrderedDisplayListObjects: de,
    getSelectableStrokeGroupItems: fe,
    getSelectableRasterObjectItems: we,
    cutoutStickers: $e,
    getCutoutSelectableItems: oe,
    isShotItem: V,
    isStickerItem: ae,
    getRasterObjectList: pe,
    getRasterObjectItem: xe,
    isRasterObjectItem: Oe,
    getStrokeGroupItem: ie,
    isStrokeGroupItem: Pe,
    getStrokeGroupStrokes: w,
    getStrokeGeomCacheKey: N,
    shortestWrappedDelta: ue,
    getStrokeGroupCenterUv: P,
    applyStrokeGroupOffset: q,
    applyStrokeGroupTransform: k,
    applyRasterObjectOffset: A,
    applyRasterObjectTransform: I,
    getNextStickerZIndex: K,
    isExternalSticker: X,
    isStickerHidden: Q,
    getStickerDisplayAlpha: R,
    inverseTransformErpPointAround: te,
    getRasterObjectCenterUv: Me,
    getRasterObjectTransformedErpPoints: Te,
    getRasterObjectGeomCacheKey: se,
    getSceneItemGeomCacheKey: be,
    normalizeDisplayZIndices: Se
  };
}
function rI(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: l
  } = e;
  let d, u, c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe;
  function V() {
    const m = String(t.selectedId || "");
    if (!m) return null;
    const f = x(m);
    if (f) return f;
    const $ = U(m);
    return $ || (o ? y().find((S) => String((S == null ? void 0 : S.id) || "") === m) || null : b().find((S) => String((S == null ? void 0 : S.id) || "") === m) || null);
  }
  function ae() {
    const m = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], f = [], $ = /* @__PURE__ */ new Set();
    return m.forEach((S) => {
      const v = String(S || "").trim();
      if (!v || $.has(v)) return;
      $.add(v);
      const j = v === String(t.selectedId || "") ? V() : x(v) || U(v) || (o ? y().find((ce) => String((ce == null ? void 0 : ce.id) || "") === v) : b().find((ce) => String((ce == null ? void 0 : ce.id) || "") === v));
      j && f.push(j);
    }), f;
  }
  function pe(m = null) {
    const f = Array.isArray(m) ? m : ae();
    if (!f || f.length < 2) return null;
    const $ = f.map((Ce) => he(Ce)).filter((Ce) => (Ce == null ? void 0 : Ce.visible) && Array.isArray(Ce.corners) && Ce.corners.length);
    if (!$.length) return null;
    const S = $.flatMap((Ce) => Ce.corners.map((O) => Number((O == null ? void 0 : O.x) || 0))), v = $.flatMap((Ce) => Ce.corners.map((O) => Number((O == null ? void 0 : O.y) || 0))), j = Math.min(...S), ce = Math.max(...S), ne = Math.min(...v), Ae = Math.max(...v);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (j + ce) * 0.5, y: (ne + Ae) * 0.5 },
      corners: [
        { x: j, y: ne },
        { x: ce, y: ne },
        { x: ce, y: Ae },
        { x: j, y: Ae }
      ],
      edgeMidpoints: [
        { edge: "top", x: (j + ce) * 0.5, y: ne, a: { x: j, y: ne }, b: { x: ce, y: ne } },
        { edge: "right", x: ce, y: (ne + Ae) * 0.5, a: { x: ce, y: ne }, b: { x: ce, y: Ae } },
        { edge: "bottom", x: (j + ce) * 0.5, y: Ae, a: { x: ce, y: Ae }, b: { x: j, y: Ae } },
        { edge: "left", x: j, y: (ne + Ae) * 0.5, a: { x: j, y: Ae }, b: { x: j, y: ne } }
      ],
      rotateStemBase: { x: (j + ce) * 0.5, y: ne },
      rotateHandle: { x: (j + ce) * 0.5, y: ne - 30 }
    };
  }
  function xe(m) {
    const f = String((m == null ? void 0 : m.id) || "").trim();
    return !!f && Array.isArray(t.selectedIds) && t.selectedIds.includes(f);
  }
  function Oe() {
    const m = V();
    return m ? le(m) || ee(m) ? "stroke" : B(m) ? "frame" : "image" : null;
  }
  function ie(m) {
    if (!m || typeof m != "object") return !1;
    if (le(m)) {
      const f = String(m.actionGroupId || m.id || "").trim(), $ = C().find((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() === f);
      return ($ == null ? void 0 : $.locked) === !0;
    }
    if (ee(m)) {
      const f = E(m.rasterObjectId || m.id || ""), $ = D().find((S) => String((S == null ? void 0 : S.id) || "").trim() === f);
      return ($ == null ? void 0 : $.locked) === !0;
    }
    return m.locked === !0;
  }
  function Pe(m = null) {
    const f = Array.isArray(m) ? m : ae();
    return f.length > 0 && f.every(($) => ie($));
  }
  function w(m, f) {
    const $ = f === !0;
    if (!m || typeof m != "object") return !1;
    if (le(m)) {
      const S = String(m.actionGroupId || m.id || "").trim(), v = C().find((j) => String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim() === S);
      return !v || v.locked === $ ? !1 : (v.locked = $, !0);
    }
    if (ee(m)) {
      const S = E(m.rasterObjectId || m.id || ""), v = D().find((j) => String((j == null ? void 0 : j.id) || "").trim() === S);
      return !v || v.locked === $ ? !1 : (v.locked = $, !0);
    }
    return m.locked === $ ? !1 : (m.locked = $, !0);
  }
  function N() {
    if (n) return;
    const m = ae();
    if (!m.length) return;
    const f = !Pe(m);
    let $ = !1;
    m.forEach((S) => {
      w(S, f) && ($ = !0);
    }), $ && (de(), u(), $e(), oe(), fe());
  }
  function J(m) {
    te(), s.selection = null, t.selectedId = (m == null ? void 0 : m.id) || null, t.selectedIds = m != null && m.id ? [m.id] : [], m && Y(m) ? a.active.selected_sticker_id = m.id || null : a.active.selected_sticker_id = null, m && B(m) ? a.active.selected_shot_id = m.id || null : m ? B(m) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function ue(m, f = null) {
    const $ = [], S = /* @__PURE__ */ new Set();
    (Array.isArray(m) ? m : []).forEach((ce) => {
      const ne = String((ce == null ? void 0 : ce.id) || "").trim();
      !ne || S.has(ne) || (S.add(ne), $.push(ne));
    }), t.selectedIds = $, te(), s.selection = null;
    const v = String(f || "").trim();
    t.selectedId = v && $.includes(v) ? v : $[$.length - 1] || null;
    const j = V();
    a.active.selected_sticker_id = j && Y(j) && j.id || null, j && B(j) ? a.active.selected_shot_id = j.id || null : $.length || (a.active.selected_shot_id = null);
  }
  function P() {
    const m = (Array.isArray(a.shots) ? a.shots : []).map(($, S) => ({
      kind: "frame",
      item: $,
      label: String(($ == null ? void 0 : $.label) || `Frame ${S + 1}`)
    })), f = p().map(($, S) => {
      var j, ce;
      const v = z($) ? String($.id || Bd) : String(((ce = (j = a.assets) == null ? void 0 : j[$.asset_id]) == null ? void 0 : ce.name) || $.asset_id || $.id || `Image ${S + 1}`);
      return {
        kind: "image",
        item: $,
        label: v
      };
    });
    return [...m, ...f];
  }
  function F(m) {
    return m === "frame" ? Ye.camera : m === "stroke" ? Ye.paintbrush_vertical_tool : Ye.image;
  }
  function q(m) {
    return !m || !m.item ? {
      label: String((m == null ? void 0 : m.label) || ""),
      icon: null
    } : {
      label: String(m.label || ""),
      icon: F(m.kind)
    };
  }
  function k() {
    if (n) return;
    const m = V();
    !m || !z(m) || (m.visible = G(m), se(), ve(), de(), u(), oe(), $e(), fe());
  }
  function A() {
    if (n || l !== "stickers") return;
    const m = V();
    if (!m || !z(m)) return;
    const f = m.initial_pose;
    if (!f || typeof f != "object") return;
    m.yaw_deg = Number(f.yaw_deg ?? m.yaw_deg ?? 0), m.pitch_deg = Number(f.pitch_deg ?? m.pitch_deg ?? 0), m.hFOV_deg = Number(f.hFOV_deg ?? m.hFOV_deg ?? 30);
    const $ = T(al, () => {
      fe();
    });
    $ && ($.complete || $.naturalWidth || $.width) ? m.vFOV_deg = c(
      Number(f.hFOV_deg ?? m.hFOV_deg ?? 30),
      Number($.naturalWidth || $.width || 1),
      Number($.naturalHeight || $.height || 1)
    ) : m.vFOV_deg = Number(f.vFOV_deg ?? m.vFOV_deg ?? 30), m.rot_deg = Number(f.rot_deg ?? m.rot_deg ?? 0), de(), u(), oe(), $e(), fe();
  }
  function I(m) {
    if (!m || !z(m)) return null;
    const f = m.initial_pose;
    if (!f || typeof f != "object") return null;
    const $ = {
      yaw_deg: Number(f.yaw_deg ?? m.yaw_deg ?? 0),
      pitch_deg: Number(f.pitch_deg ?? m.pitch_deg ?? 0),
      hFOV_deg: Number(f.hFOV_deg ?? m.hFOV_deg ?? 30),
      vFOV_deg: Number(f.vFOV_deg ?? m.vFOV_deg ?? 30),
      rot_deg: Number(f.rot_deg ?? m.rot_deg ?? 0)
    }, S = T(al, () => {
      fe();
    });
    return S && (S.complete || S.naturalWidth || S.width) && ($.vFOV_deg = c(
      $.hFOV_deg,
      Number(S.naturalWidth || S.width || 1),
      Number(S.naturalHeight || S.height || 1)
    )), $;
  }
  function K() {
    const m = V();
    if (!m || !z(m)) return !1;
    const f = I(m);
    if (!f) return !1;
    const $ = (S, v) => Math.abs(Number(S || 0) - Number(v || 0)) <= 1e-4;
    return !($(m.yaw_deg, f.yaw_deg) && $(m.pitch_deg, f.pitch_deg) && $(m.hFOV_deg, f.hFOV_deg) && $(m.vFOV_deg, f.vFOV_deg) && $(m.rot_deg, f.rot_deg));
  }
  function X(m = {}) {
    const $ = m.preservePanelValues !== !1 ? W(V()) : null;
    $ && (t.panelLastValues = {
      yaw_deg: Number($.yaw_deg || 0),
      pitch_deg: Number($.pitch_deg || 0),
      hFOV_deg: Number($.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number($.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number($.rot_deg || 0),
      roll_deg: Number($.roll_deg || 0),
      aspect_id: Dr($)
    }), t.selectedId = null, t.selectedIds = [], te(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function Q() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((m) => m.id === t.worldSelectedId && m.placement === "world") || null;
  }
  function R(m) {
    J(null), t.worldSelectedId = m, r.backgroundDirty = !0;
  }
  function te() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function Me(m) {
    return !!m && !n && !m.locked;
  }
  function Te() {
    if (l !== "cutout") return;
    const m = g();
    m && (t.selectedId = String(m.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function se() {
    var f;
    const m = V();
    (re(m) && !we(m) || t.selectedId === Cl && H() && !d() || Oe() === "stroke" && !Z()) && J(null), ((f = Q()) == null ? void 0 : f.visible) === !1 && te();
  }
  function be() {
    if (n) return;
    const m = ae();
    if (!V() || m.length === 0 || m.some((ne) => ie(ne))) return;
    ge();
    const $ = _(), S = new Set(m.map((ne) => Y(ne) ? `sticker:${String(ne.id || "")}` : ee(ne) ? `rasterObject:${E(ne.rasterObjectId || ne.id || "")}` : `strokeGroup:${String(ne.actionGroupId || ne.id || "")}`)), v = [], j = [];
    if ($.forEach((ne) => {
      var Ce, O;
      const Ae = ne.type === "sticker" ? `sticker:${String(((Ce = ne.item) == null ? void 0 : Ce.id) || "")}` : ne.type === "rasterObject" ? `rasterObject:${String(((O = ne.item) == null ? void 0 : O.id) || ne.id || "")}` : `strokeGroup:${String(ne.actionGroupId || "")}`;
      S.has(Ae) ? v.push(ne) : j.push(ne);
    }), !v.length || v[v.length - 1] === $[$.length - 1]) return;
    [...j, ...v].forEach((ne, Ae) => {
      ne.type === "sticker" && ne.item && (ne.item.z_index = Ae), ne.type === "strokeGroup" && ne.item && (ne.item.z_index = Ae), ne.type === "rasterObject" && ne.item && (ne.item.z_index = Ae);
    }), ve(), de(), u(), $e(), fe();
  }
  function Se() {
    if (n) return;
    const m = ae();
    if (!V() || m.length === 0 || m.some((ne) => ie(ne))) return;
    ge();
    const $ = _(), S = new Set(m.map((ne) => Y(ne) ? `sticker:${String(ne.id || "")}` : ee(ne) ? `rasterObject:${E(ne.rasterObjectId || ne.id || "")}` : `strokeGroup:${String(ne.actionGroupId || ne.id || "")}`)), v = [], j = [];
    if ($.forEach((ne) => {
      var Ce, O;
      const Ae = ne.type === "sticker" ? `sticker:${String(((Ce = ne.item) == null ? void 0 : Ce.id) || "")}` : ne.type === "rasterObject" ? `rasterObject:${String(((O = ne.item) == null ? void 0 : O.id) || ne.id || "")}` : `strokeGroup:${String(ne.actionGroupId || "")}`;
      S.has(Ae) ? v.push(ne) : j.push(ne);
    }), !v.length || v[0] === $[0]) return;
    [...v, ...j].forEach((ne, Ae) => {
      ne.type === "sticker" && ne.item && (ne.item.z_index = Ae), ne.type === "strokeGroup" && ne.item && (ne.item.z_index = Ae), ne.type === "rasterObject" && ne.item && (ne.item.z_index = Ae);
    }), ve(), de(), u(), $e(), fe();
  }
  return {
    connect(m) {
      ({
        cameraShoots: d,
        commitAndRefreshNode: u,
        computeStickerVFov: c,
        cutoutStickers: p,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: y,
        getDisplayListObjects: _,
        getList: b,
        getPaintingGroupList: C,
        getRasterObjectItem: U,
        getRasterObjectList: D,
        getStickerUiImage: T,
        getStrokeGroupItem: x,
        hasCamera: H,
        isExternalSticker: z,
        isRasterObjectItem: ee,
        isSceneSticker: re,
        isShotItem: B,
        isStickerHidden: G,
        isStickerItem: Y,
        isStrokeGroupItem: le,
        markObjectVisualsDirty: ve,
        normalizeDisplayZIndices: ge,
        objectGeom: he,
        paintingShown: Z,
        parseRasterObjectSelectionId: E,
        poseOf: W,
        pushHistory: de,
        requestDraw: fe,
        sceneStickerShown: we,
        updateSelectionMenu: $e,
        updateSidePanel: oe
      } = m);
    },
    getSelected: V,
    getSelectedItems: ae,
    getMultiSelectionGeom: pe,
    isItemSelected: xe,
    getSelectedKind: Oe,
    isItemLocked: ie,
    areAllSelectedItemsLocked: Pe,
    toggleSelectedLock: N,
    setSelectedItem: J,
    setSelectedItems: ue,
    getCutoutInspectorItems: P,
    getSelectionItemIcon: F,
    getSelectionItemLabelData: q,
    toggleSelectedExternalStickerVisibility: k,
    restoreSelectedToInitialPose: A,
    canRestoreSelectedToInitial: K,
    clearSelection: X,
    selectedWorldSticker: Q,
    selectWorldSticker: R,
    clearWorldSelection: te,
    worldStickerEditable: Me,
    applyInitialCutoutFocus: Te,
    releaseHiddenSelection: se,
    bringSelectedToFront: be,
    sendSelectedToBack: Se
  };
}
function iI(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: o
  } = e;
  let a, s, l, d, u, c, p = { key: [], projection: null };
  function g() {
    return o && a() && i.camera.projection === "erp";
  }
  function y() {
    const ae = ee({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !ae || ae.length !== 4 ? !1 : ae[0].y >= ae[3].y;
  }
  function _() {
    return qg({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function b() {
    const V = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return V.some((ae, pe) => ae !== p.key[pe]) && (p = { key: V, projection: Jg(_(), n.width, n.height) }), p.projection;
  }
  function C(V) {
    const ae = b().project(V);
    return ae.z > 1e-4 ? ae : null;
  }
  function U(V, ae) {
    return b().ray(V, ae);
  }
  function D() {
    const V = n.width, ae = n.height, pe = 2;
    if (V / Math.max(ae, 1) >= pe) {
      const w = ae, N = w * pe;
      return { x: (V - N) * 0.5, y: 0, w: N, h: w };
    }
    const Oe = V, ie = Oe / pe;
    return { x: 0, y: (ae - ie) * 0.5, w: Oe, h: ie };
  }
  function T(V) {
    return {
      lon: Math.atan2(V.x, V.z),
      lat: Math.asin(Fe(V.y, -1, 1))
    };
  }
  function x(V, ae = null) {
    const { lon: pe, lat: xe } = T(V), Oe = D();
    let ie = Oe.x + (pe / (2 * Math.PI) + 0.5) * Oe.w;
    const Pe = Oe.y + (0.5 - xe / Math.PI) * Oe.h;
    if (ae !== null) {
      for (; ie - ae > Oe.w / 2; ) ie -= Oe.w;
      for (; ie - ae < -Oe.w / 2; ) ie += Oe.w;
    }
    return { x: ie, y: Pe, z: 1 };
  }
  function H(V) {
    const ae = d(V), pe = Mo(
      Number(ae.yaw_deg || 0),
      Number(ae.pitch_deg || 0),
      Number(ae.rot_deg || ae.roll_deg || 0)
    ), xe = Math.tan(Fe(Number(ae.hFOV_deg || 20), 0.1, 179) * 0.5 * Sr), Oe = Math.tan(Fe(Number(ae.vFOV_deg || 20), 0.1, 179) * 0.5 * Sr);
    return {
      centerDir: pe.fwd,
      right: pe.right,
      up: pe.up,
      tanX: xe,
      tanY: Oe
    };
  }
  function z(V, ae, pe) {
    return TC(Dh(Dh(V.centerDir, Lh(V.right, ae)), Lh(V.up, pe)));
  }
  function ee(V) {
    const ae = H(V);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: xe, v: Oe }) => z(ae, xe * ae.tanX, Oe * ae.tanY));
  }
  function re(V, ae, pe) {
    const xe = H(V), Oe = (ae * 2 - 1) * xe.tanX, ie = (1 - pe * 2) * xe.tanY;
    return z(xe, Oe, ie);
  }
  function B(V) {
    const ae = t.width / Math.max(1, n.width), pe = t.height / Math.max(1, n.height);
    return { x: V.x * ae, y: V.y * pe, w: V.w * ae, h: V.h * pe };
  }
  function G(V, ae = null, pe = null, xe = null) {
    if (r.mode === "frame") {
      const Oe = ae || s();
      if (!Oe) return [];
      const ie = pe || l(Oe);
      return de(V, Oe, ie);
    }
    return Z(V, xe);
  }
  function Y(V, ae = null, pe = null, xe = null, Oe = null) {
    if (!V) return null;
    if (r.mode === "unwrap") {
      const Pe = Z([V], Oe);
      return Pe[0] ? { x: Pe[0].x, y: Pe[0].y, z: 1 } : null;
    }
    const ie = ve(V);
    return ie ? u(ie, ae, pe, xe) : null;
  }
  function le(V, ae) {
    if (!V || !ae) return null;
    const pe = Number(ae.x || 0), xe = Number(ae.y || 0);
    return re(V, pe, xe);
  }
  function ve(V) {
    if (!V) return null;
    const ae = (Number(V.u || 0) - 0.5) * (2 * Math.PI), pe = (0.5 - Number(V.v || 0)) * Math.PI, xe = Math.cos(pe);
    return El(xe * Math.sin(ae), Math.sin(pe), xe * Math.cos(ae));
  }
  function ge(V, ae) {
    if (!V || !ae) return null;
    const pe = H(V), xe = jc(ae, pe.centerDir);
    if (!Number.isFinite(xe) || xe <= 1e-6) return null;
    const Oe = jc(ae, pe.right) / xe, ie = jc(ae, pe.up) / xe;
    return {
      x: (Oe / Math.max(1e-6, pe.tanX) + 1) * 0.5,
      y: (1 - ie / Math.max(1e-6, pe.tanY)) * 0.5
    };
  }
  function he(V) {
    if (!Array.isArray(V) || V.length < 3) return [];
    if (r.mode === "unwrap") {
      const pe = D();
      return V.map((xe) => ({
        x: pe.x + Number(xe.u || 0) * pe.w,
        y: pe.y + Number(xe.v || 0) * pe.h
      }));
    }
    const ae = V.map((pe) => C(ve(pe))).filter(Boolean);
    return ae.every((pe) => Number(pe.z || 0) > 0) ? ae.map((pe) => ({ x: Number(pe.x || 0), y: Number(pe.y || 0) })) : [];
  }
  function Z(V, ae = null) {
    if (!Array.isArray(V) || V.length < 1) return [];
    if (r.mode === "unwrap") {
      const xe = D();
      return V.map((Oe) => {
        const ie = (Number(Oe.u || 0) % 1 + 1) % 1, Pe = ae == null ? ie : Number(ae || 0) + c(ie, ae);
        return {
          x: xe.x + Pe * xe.w,
          y: xe.y + Number(Oe.v || 0) * xe.h
        };
      });
    }
    const pe = V.map((xe) => C(ve(xe))).filter(Boolean);
    return pe.every((xe) => Number(xe.z || 0) > 0) ? pe.map((xe) => ({ x: Number(xe.x || 0), y: Number(xe.y || 0) })) : [];
  }
  function E(V, ae = 160) {
    if (!Array.isArray(V) || V.length < 3) return !1;
    for (let pe = 0; pe < V.length; pe += 1) {
      const xe = V[pe], Oe = V[(pe + 1) % V.length];
      if (!xe || !Oe || !Number.isFinite(xe.x) || !Number.isFinite(xe.y) || !Number.isFinite(Oe.x) || !Number.isFinite(Oe.y) || Math.hypot(Number(Oe.x) - Number(xe.x), Number(Oe.y) - Number(xe.y)) > ae) return !1;
    }
    return !0;
  }
  function W(V, ae, pe) {
    if (!Array.isArray(V) || V.length < 3 || !ae || !pe) return [];
    const xe = [];
    for (const Oe of V) {
      const ie = ve(Oe), Pe = ge(ae, ie);
      if (!Pe) return [];
      xe.push({
        x: Number(pe.x || 0) + Number(Pe.x || 0) * Number(pe.w || 0),
        y: Number(pe.y || 0) + Number(Pe.y || 0) * Number(pe.h || 0)
      });
    }
    return E(xe, Math.max(80, Math.max(pe.w, pe.h) * 0.75)) ? xe : [];
  }
  function de(V, ae, pe) {
    if (!Array.isArray(V) || V.length < 1 || !ae || !pe) return [];
    const xe = [];
    for (const Oe of V) {
      const ie = ve(Oe), Pe = ge(ae, ie);
      Pe && xe.push({
        x: Number(pe.x || 0) + Number(Pe.x || 0) * Number(pe.w || 0),
        y: Number(pe.y || 0) + Number(Pe.y || 0) * Number(pe.h || 0)
      });
    }
    return xe;
  }
  function fe(V) {
    const ae = n.getBoundingClientRect();
    return {
      x: (V.clientX - ae.left) / ae.width * n.width,
      y: (V.clientY - ae.top) / ae.height * n.height
    };
  }
  function we(V) {
    const ae = n.getBoundingClientRect();
    return {
      x: Number(V.clientX) - Number(ae.left || 0),
      y: Number(V.clientY) - Number(ae.top || 0)
    };
  }
  function $e(V, ae = performance.now()) {
    if (r.mode === "unwrap") {
      const ie = D(), Pe = (V.x - ie.x) / Math.max(1, ie.w), w = (V.y - ie.y) / Math.max(1, ie.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Pe % 1 + 1) % 1,
        v: Fe(w, 0, 1),
        t: Number(ae || 0)
      };
    }
    const pe = U(V.x, V.y), { lon: xe, lat: Oe } = T(pe);
    return {
      targetKind: "ERP_GLOBAL",
      u: (xe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - Oe / Math.PI, 0, 1),
      t: Number(ae || 0)
    };
  }
  function oe(V, ae, pe = performance.now()) {
    const xe = l(ae);
    if (!xe) return null;
    const Oe = {
      x: (Number(V.x) - xe.x) / Math.max(1, xe.w),
      y: (Number(V.y) - xe.y) / Math.max(1, xe.h)
    };
    if (Oe.x < 0 || Oe.x > 1 || Oe.y < 0 || Oe.y > 1) return null;
    const ie = le(ae, Oe);
    if (!ie) return null;
    const { lon: Pe, lat: w } = T(ie);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Pe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - w / Math.PI, 0, 1),
      t: Number(pe || 0)
    };
  }
  return {
    connect(V) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: d,
        projectSceneItemDir: u,
        shortestWrappedDelta: c
      } = V);
    },
    isErpCamera: g,
    currentViewCamera: _,
    currentViewProjection: b,
    projectDir: C,
    screenToWorldDir: U,
    getUnwrapRect: D,
    projectDirUnwrap: x,
    getStickerFrame: H,
    stickerDirFromFrame: z,
    stickerCornersDir: ee,
    stickerSampleDir: re,
    stickerCornerOrderSanity: y,
    projectEditorPoints: G,
    projectErpPointToEditor: Y,
    frameLocalPointToWorldDir: le,
    erpPointToWorldDir: ve,
    worldDirToFrameLocalPoint: ge,
    projectLassoPointsToCurrentView: he,
    projectErpLassoPointsToFrameRect: W,
    screenPos: fe,
    screenPosCss: we,
    screenPosToErpPoint: $e,
    screenPosToFrameAsErpPoint: oe,
    deviceRect: B
  };
}
function oI(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, a, s, l, d, u, c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de;
  function fe(ie, Pe) {
    const w = String(ie.actionGroupId || ie.id || "").trim(), N = D(w, ie.layerKind), J = s(w, ie.layerKind, N), ue = (J == null ? void 0 : J.centerUv) || U(w, ie.layerKind, N), P = r.mode === "unwrap" ? Number((ue == null ? void 0 : ue.u) || 0) : null, F = [], q = r.mode === "frame" ? l() : null, k = q ? c(q) : null;
    for (const se of N) {
      const be = (se == null ? void 0 : se.geometry) || null, Se = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], m = ve(Se, q, k, P).filter((S) => Number.isFinite(S == null ? void 0 : S.x) && Number.isFinite(S == null ? void 0 : S.y));
      if (!m.length) continue;
      const f = d(String((se == null ? void 0 : se.toolKind) || "pen")), $ = Pn[f] || Pn[Ir];
      F.push({
        points: m,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((se == null ? void 0 : se.size) || 10) * Math.max(0.1, Number(($ == null ? void 0 : $.sizeScale) ?? 1)) + 10),
        layerKind: String((se == null ? void 0 : se.layerKind) || ie.layerKind || "paint")
      });
    }
    const A = ge(ue, null, q, k, P);
    if (!A) {
      const se = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Pe, se), se;
    }
    const K = u(J).map((se) => ge(se, A.x, q, k, P)).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y)).map((se) => ({ x: Number(se.x || 0), y: Number(se.y || 0) }));
    if (K.length < 4) {
      const se = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Pe, se), se;
    }
    const X = (se, be) => ({
      x: (Number((se == null ? void 0 : se.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((se == null ? void 0 : se.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: se,
      b: be
    }), Q = X(K[0], K[1]), R = X(K[1], K[2]), te = X(K[2], K[3]), Me = X(K[3], K[0]), Te = {
      kind: "strokeGroup",
      center: { x: Number(A.x || 0), y: Number(A.y || 0) },
      corners: K,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...R },
        { edge: "bottom", ...te },
        { edge: "left", ...Me }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: F,
      visible: !0
    };
    return r._strokeGeomCache.set(Pe, Te), Te;
  }
  function we(ie, Pe) {
    const w = r.mode === "frame" ? l() : null, N = w ? c(w) : null, J = p(ie), ue = r.mode === "unwrap" ? Number((J == null ? void 0 : J.u) || 0) : null, P = ge(J, null, w, N, ue), q = y(ie).map((K) => ge(K, (P == null ? void 0 : P.x) ?? null, w, N, ue)).filter((K) => Number.isFinite(K == null ? void 0 : K.x) && Number.isFinite(K == null ? void 0 : K.y));
    if (!Array.isArray(q) || q.length < 4) {
      const K = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(Pe, K), K;
    }
    const k = q.slice(0, 4).map((K) => ({ x: Number((K == null ? void 0 : K.x) || 0), y: Number((K == null ? void 0 : K.y) || 0) })), I = {
      kind: "rasterObject",
      center: {
        x: k.reduce((K, X) => K + Number(X.x || 0), 0) / k.length,
        y: k.reduce((K, X) => K + Number(X.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return r._strokeGeomCache.set(Pe, I), I;
  }
  function $e(ie, Pe = null, w = null, N = null, J = {}) {
    if (r.mode === "frame") {
      const A = w || l(), I = N || c(A);
      if (!A || !I) return null;
      const K = A ? de(A, ie) : null;
      return K ? {
        x: Number(I.x || 0) + Number(K.x || 0) * Number(I.w || 0),
        y: Number(I.y || 0) + Number(K.y || 0) * Number(I.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return le(ie, Pe);
    const ue = 1e-4, P = o().project(ie, ue);
    if (!Number.isFinite(P.z) || P.z <= ue && !(J != null && J.clipBehind)) return null;
    const F = n.width, q = n.height, k = Math.max(F, q) * 2;
    return {
      x: Fe(P.x, -k, F + k),
      y: Fe(P.y, -k, q + k),
      z: Math.max(P.z, ue),
      rawZ: P.z,
      clipped: P.z <= ue
    };
  }
  function oe(ie, Pe = []) {
    if (r.mode !== "pano" || ee(ie)) return 1;
    const w = Pe.map((N) => Number((N == null ? void 0 : N.rawZ) ?? (N == null ? void 0 : N.z))).filter((N) => Number.isFinite(N));
    return w.length ? OC(0.035, 0.2, Math.min(...w)) : 1;
  }
  function V(ie) {
    if (H(ie) && !he(ie)) return { visible: !1 };
    const Pe = G(ie), w = Nn(Number(Pe.yaw_deg || 0), Number(Pe.pitch_deg || 0)), N = r.mode === "frame" ? l() : null, J = N ? c(N) : null, ue = r.mode === "pano" && (ee(ie) || z(ie)), P = ue ? { clipBehind: !0 } : null, F = $e(w, null, N, J, P);
    if (!F) return { visible: !1 };
    const q = b(ie), A = Z(ie).map((v) => $e(v, F.x, N, J, P)).filter((v) => Number.isFinite(v == null ? void 0 : v.x) && Number.isFinite(v == null ? void 0 : v.y));
    if (A.length < 4) return { visible: !1 };
    const I = E(q, 0, q.tanY), K = E(q, 0, q.tanY + Math.max(q.tanY * 0.43, 0.053)), X = $e(I, F.x, N, J, P);
    if (!X) return { visible: !1 };
    const Q = $e(K, (X == null ? void 0 : X.x) ?? F.x, N, J, P), R = ((Q == null ? void 0 : Q.x) ?? X.x) - X.x, te = ((Q == null ? void 0 : Q.y) ?? X.y) - X.y, Me = Math.hypot(R, te) || 1, Te = {
      x: X.x + R / Me * 30,
      y: X.y + te / Me * 30
    }, se = $e(E(q, 0, q.tanY), F.x, N, J, P), be = $e(E(q, q.tanX, 0), F.x, N, J, P), Se = $e(E(q, 0, -q.tanY), F.x, N, J, P), m = $e(E(q, -q.tanX, 0), F.x, N, J, P);
    if (!se || !be || !Se || !m) return { visible: !1 };
    const f = [
      F,
      ...A,
      X,
      Q,
      se,
      be,
      Se,
      m
    ];
    if (ue && !f.some((v) => Number((v == null ? void 0 : v.rawZ) ?? (v == null ? void 0 : v.z)) > 1e-4)) return { visible: !1 };
    const $ = oe(ie, f), S = [
      {
        edge: "top",
        x: se.x,
        y: se.y,
        a: { x: A[0].x, y: A[0].y },
        b: { x: A[1].x, y: A[1].y }
      },
      {
        edge: "right",
        x: be.x,
        y: be.y,
        a: { x: A[1].x, y: A[1].y },
        b: { x: A[2].x, y: A[2].y }
      },
      {
        edge: "bottom",
        x: Se.x,
        y: Se.y,
        a: { x: A[2].x, y: A[2].y },
        b: { x: A[3].x, y: A[3].y }
      },
      {
        edge: "left",
        x: m.x,
        y: m.y,
        a: { x: A[3].x, y: A[3].y },
        b: { x: A[0].x, y: A[0].y }
      }
    ];
    return {
      center: { x: F.x, y: F.y },
      corners: A.map((v) => ({ x: v.x, y: v.y })),
      edgeMidpoints: S,
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: Te,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: $,
      visible: !0
    };
  }
  function ae(ie) {
    if (t && z(ie) && T()) return { visible: !1 };
    if (!B() && (re(ie) || x(ie))) return { visible: !1 };
    if (re(ie)) {
      const J = String(ie.actionGroupId || ie.id || "").trim(), ue = C(J, ie.layerKind), P = r._strokeGeomCache.get(ue);
      return P || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), fe(ie, ue));
    }
    if (x(ie)) {
      const J = g(ie), ue = r._strokeGeomCache.get(J);
      return ue || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), we(ie, J));
    }
    const Pe = _(ie), w = r._strokeGeomCache.get(Pe);
    if (w) return w;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const N = V(ie);
    return r._strokeGeomCache.set(Pe, N), N;
  }
  function pe(ie, Pe, w, N = null) {
    const J = [];
    for (let ue = 0; ue <= w; ue += 1) {
      const P = ue / w;
      let F = 0, q = 0;
      Pe === 0 ? (F = P, q = 0) : Pe === 1 ? (F = 1, q = P) : Pe === 2 ? (F = 1 - P, q = 1) : (F = 0, q = 1 - P);
      const k = W(ie, F, q), A = r.mode === "unwrap" ? le(k, N) : Y(k);
      A && J.push(A);
    }
    return J;
  }
  function xe() {
    const ie = [...Array.isArray(i.shots) ? i.shots : []], Pe = [...a()].sort((w, N) => Number(w.z_index || 0) - Number(N.z_index || 0));
    return [...ie, ...Pe];
  }
  function Oe() {
    const ie = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((w, N) => Number(N.z_index || 0) - Number(w.z_index || 0)), ...ie];
  }
  return {
    connect(ie) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: d,
        getFrameCornersUv: u,
        getFrameViewRect: c,
        getRasterObjectCenterUv: p,
        getRasterObjectGeomCacheKey: g,
        getRasterObjectTransformedErpPoints: y,
        getSceneItemGeomCacheKey: _,
        getStickerFrame: b,
        getStrokeGeomCacheKey: C,
        getStrokeGroupCenterUv: U,
        getStrokeGroupStrokes: D,
        isFreeSpaceView: T,
        isRasterObjectItem: x,
        isSceneSticker: H,
        isShotItem: z,
        isStickerItem: ee,
        isStrokeGroupItem: re,
        paintingShown: B,
        poseOf: G,
        projectDir: Y,
        projectDirUnwrap: le,
        projectEditorPoints: ve,
        projectErpPointToEditor: ge,
        sceneStickerShown: he,
        stickerCornersDir: Z,
        stickerDirFromFrame: E,
        stickerSampleDir: W,
        worldDirToFrameLocalPoint: de
      } = ie);
    },
    projectSceneItemDir: $e,
    objectGeom: ae,
    sampleStickerEdge: pe,
    getCutoutSelectableItemsForDisplay: xe,
    getCutoutSelectableItemsForHit: Oe
  };
}
const us = /* @__PURE__ */ new Map();
function aI(e) {
  const {
    api: t,
    cutoutV2: n,
    editor: r,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: l
  } = e;
  let d, u, c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y;
  function le(P = r.interaction) {
    const F = String((P == null ? void 0 : P.kind) || "");
    if (F === "paint_stroke" || F === "paint_lasso_fill" || F === "move_stroke_group" || F === "scale_stroke_group" || F === "rotate_stroke_group" || F === "move_raster_object" || F === "scale_raster_object") return !0;
    if (F === "move_multi") {
      const q = Array.isArray(P == null ? void 0 : P.strokeSnapshots) && P.strokeSnapshots.length > 0, k = Array.isArray(P == null ? void 0 : P.rasterSnapshots) && P.rasterSnapshots.length > 0;
      return q || k;
    }
    return !1;
  }
  function ve() {
    var F, q, k, A;
    let P = null;
    try {
      const I = b(), K = ((A = (k = (q = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : q.call(F, I)) == null ? void 0 : k.displayPaint) == null ? void 0 : A.canvas) || null;
      K && (P = {
        source: K,
        revision: `${C()}:${ge()}`
      });
    } catch {
      P = null;
    }
    return P;
  }
  function ge() {
    var A, I, K, X, Q, R, te;
    const P = r.interaction, F = String((P == null ? void 0 : P.kind) || "");
    if (!le(P)) return "";
    if (F === "paint_stroke" || F === "paint_lasso_fill") {
      const Me = ((A = P == null ? void 0 : P.stroke) == null ? void 0 : A.geometry) || null, Te = String(((I = P == null ? void 0 : P.stroke) == null ? void 0 : I.layerKind) || ""), se = ((K = Me == null ? void 0 : Me.rawPoints) == null ? void 0 : K.length) ?? ((X = Me == null ? void 0 : Me.points) == null ? void 0 : X.length) ?? 0, be = String((P == null ? void 0 : P._livePreviewToken) || "");
      return `_${Te || "paint"}_${F}_live${be}_${se}_${r.livePaintInteractionRevision}`;
    }
    const q = String(((Q = P == null ? void 0 : P.item) == null ? void 0 : Q.actionGroupId) || ""), k = String(((R = P == null ? void 0 : P.item) == null ? void 0 : R.rasterObjectId) || ((te = P == null ? void 0 : P.item) == null ? void 0 : te.id) || "");
    return `_${F}_${q || k || "active"}_${r.livePaintInteractionRevision}`;
  }
  function he(P, F = null) {
    const q = String((P == null ? void 0 : P.rasterDataUrl) || "").trim();
    if (!q) return null;
    const k = s.get(q);
    if (k)
      return k.complete || k.width || k.naturalWidth, k;
    const A = new Image();
    return A.onload = () => {
      typeof F == "function" && F();
    }, A.src = q, s.set(q, A), A;
  }
  function Z(P) {
    const F = String((P == null ? void 0 : P.rasterDataUrl) || "").trim();
    if (!F) return null;
    const q = a.get(F);
    if (q) return q.ready ? q : null;
    const k = he(P, () => {
      const te = a.get(F);
      te && (te.ready = !1), B({ localOnly: !0 });
    });
    if (!k || !(k.complete || k.width || k.naturalWidth)) return null;
    const A = Number(k.naturalWidth || k.width || 0), I = Number(k.naturalHeight || k.height || 0);
    if (A < 1 || I < 1) return null;
    const K = mn({ label: "editor.image-pixels" });
    K.width = A, K.height = I;
    const X = K.getContext("2d", { willReadFrequently: !0 });
    if (!X) return null;
    X.clearRect(0, 0, A, I), X.drawImage(k, 0, 0, A, I);
    const Q = X.getImageData(0, 0, A, I).data, R = { canvas: K, width: A, height: I, alpha: Q, ready: !0 };
    return a.set(F, R), R;
  }
  function E(P, F) {
    if (!P || !F) return null;
    const q = (P == null ? void 0 : P.bbox) || null;
    if (!q) return null;
    const k = (P == null ? void 0 : P.transform) || {}, A = {
      u: (Number(q.u0 || 0) + Number(q.u1 || 0)) * 0.5,
      v: (Number(q.v0 || 0) + Number(q.v1 || 0)) * 0.5
    }, I = {
      u: ((Number(F.u || 0) - Number(k.du || 0)) % 1 + 1) % 1,
      v: Number(F.v || 0) - Number(k.dv || 0)
    }, K = T(
      I,
      A,
      Number(k.scale || 1),
      Number(k.rot_deg || 0)
    ), X = Number(q.u1 || 0) - Number(q.u0 || 0), Q = Number(q.v1 || 0) - Number(q.v0 || 0);
    if (!(X > 1e-6) || !(Q > 1e-6)) return null;
    const R = Y(Number(K.u || 0), Number(q.u0 || 0)) / X, te = (Number(K.v || 0) - Number(q.v0 || 0)) / Q;
    if (R < 0 || R > 1 || te < 0 || te > 1) return 0;
    const Me = Z(P);
    if (!Me) return null;
    const Te = Fe(Math.floor(R * Me.width), 0, Me.width - 1), se = Fe(Math.floor(te * Me.height), 0, Me.height - 1);
    return Number(Me.alpha[(se * Me.width + Te) * 4 + 3] || 0);
  }
  function W(P, F, q, k = null) {
    if (!(F != null && F.visible) || !Br(q, F.corners)) return !1;
    const A = k || G(q, performance.now()), I = E(P, A);
    return I === null ? !0 : I > 8;
  }
  function de() {
    var k, A, I, K, X, Q, R, te;
    const P = ((A = (k = r.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : A.call(k, b(!1))) || null, F = Math.max(1, Number(((I = P == null ? void 0 : P.descriptor) == null ? void 0 : I.width) || ((X = (K = P == null ? void 0 : P.displayPaint) == null ? void 0 : K.canvas) == null ? void 0 : X.width) || 2048)), q = Math.max(1, Number(((Q = P == null ? void 0 : P.descriptor) == null ? void 0 : Q.height) || ((te = (R = P == null ? void 0 : P.displayPaint) == null ? void 0 : R.canvas) == null ? void 0 : te.height) || 1024));
    return { width: F, height: q };
  }
  function fe() {
    var se, be, Se;
    const P = r.interaction;
    if ((P == null ? void 0 : P.kind) !== "paint_stroke") return null;
    const F = (P == null ? void 0 : P.stroke) || null;
    if (!F || String((F == null ? void 0 : F.layerKind) || "") !== "paint" || String((F == null ? void 0 : F.toolKind) || "") !== "eraser") return null;
    const q = p(), k = `${ge()}:${q.width}:${q.height}`;
    if (((se = r._activePaintEraserPreviewInfo) == null ? void 0 : se.cacheKey) === k)
      return r._activePaintEraserPreviewInfo.value || null;
    const A = cn(F), I = (A == null ? void 0 : A.geometry) || null;
    if (I && String(I.geometryKind || "") !== "lasso_fill") {
      const m = Array.isArray(I.rawPoints) && I.rawPoints.length ? I.rawPoints : Array.isArray(I.points) ? I.points : [];
      I.processedPoints = z(m, A.targetSpace, !0);
    }
    const K = u(q.width, q.height, { readback: !0 });
    if (!ee(K, A, { w: q.width, h: q.height })) return null;
    const X = ((Se = (be = K.ctx) == null ? void 0 : be.getImageData(0, 0, q.width, q.height)) == null ? void 0 : Se.data) || null;
    if (!X) return null;
    let Q = q.width, R = q.height, te = -1, Me = -1;
    for (let m = 0; m < q.height; m += 1)
      for (let f = 0; f < q.width; f += 1)
        X[(m * q.width + f) * 4 + 3] <= 8 || (f < Q && (Q = f), m < R && (R = m), f > te && (te = f), m > Me && (Me = m));
    if (te < Q || Me < R)
      return r._activePaintEraserPreviewInfo = { cacheKey: k, value: null }, null;
    const Te = {
      surface: K,
      bounds: { minX: Q, minY: R, maxX: te, maxY: Me },
      key: `${k}:${Q}:${R}:${te}:${Me}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: k, value: Te }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Te;
  }
  function we() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function $e(P, F, q) {
    var k, A;
    if (!P) return null;
    if (P.type === "rasterObject" && ((k = P.item) != null && k.bbox)) {
      const I = P.item.bbox, K = ((A = P.item) == null ? void 0 : A.transform) || {}, X = Number(I.u0 || 0) + Number(K.du || 0), Q = Number(I.u1 || 0) + Number(K.du || 0), R = Number(I.v0 || 0) + Number(K.dv || 0), te = Number(I.v1 || 0) + Number(K.dv || 0);
      return {
        minX: Math.floor((X % 1 + 1) % 1 * F),
        maxX: Math.ceil((Q % 1 + 1) % 1 * F),
        minY: Math.floor(Fe(R, 0, 1) * q),
        maxY: Math.ceil(Fe(te, 0, 1) * q),
        wraps: Q - X >= 1 || X < 0 || Q > 1
      };
    }
    if (P.type === "strokeGroup") {
      const I = D(P.actionGroupId, "paint"), K = c(P.actionGroupId, "paint", I);
      if (!K) return null;
      const X = K.centerUv.u - K.halfW, Q = K.centerUv.u + K.halfW, R = K.centerUv.v - K.halfH, te = K.centerUv.v + K.halfH;
      return {
        minX: Math.floor((X % 1 + 1) % 1 * F),
        maxX: Math.ceil((Q % 1 + 1) % 1 * F),
        minY: Math.floor(Fe(R, 0, 1) * q),
        maxY: Math.ceil(Fe(te, 0, 1) * q),
        wraps: Q - X >= 1 || X < 0 || Q > 1
      };
    }
    return null;
  }
  function oe(P, F, q) {
    if (!P || !F) return !1;
    const k = (K) => K.wraps ? [
      { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY, wraps: !1 },
      { minX: K.minX, maxX: q - 1, minY: K.minY, maxY: K.maxY, wraps: !1 }
    ] : [K], A = k(P), I = k(F);
    return A.some((K) => I.some((X) => !(K.maxX < X.minX || X.maxX < K.minX || K.maxY < X.minY || X.maxY < K.minY)));
  }
  function V(P, F, q) {
    var v, j, ce, ne, Ae, Ce, O;
    if (!P || !F || !((v = q == null ? void 0 : q.surface) != null && v.canvas) || F.type !== "rasterObject") return P;
    const k = Number(P.width || q.surface.canvas.width || 0), A = Number(P.height || q.surface.canvas.height || 0);
    if (k < 1 || A < 1) return P;
    const I = $e(F, k, A);
    if (I && !oe(I, q.bounds, k)) return P;
    const K = String(((j = F.item) == null ? void 0 : j.id) || F.id || ""), X = ((ce = F.item) == null ? void 0 : ce.transform) || {}, Q = `${q.key}:${K}:${k}:${A}:${Number(X.du || 0).toFixed(6)}:${Number(X.dv || 0).toFixed(6)}:${Number(X.rot_deg || 0).toFixed(3)}:${Number(X.scale || 1).toFixed(4)}`, R = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (R.has(Q)) return R.get(Q);
    const te = Fe(Math.floor(Number(((ne = q.bounds) == null ? void 0 : ne.minX) || 0)), 0, Math.max(0, k - 1)), Me = Fe(Math.floor(Number(((Ae = q.bounds) == null ? void 0 : Ae.minY) || 0)), 0, Math.max(0, A - 1)), Te = Fe(Math.ceil(Number(((Ce = q.bounds) == null ? void 0 : Ce.maxX) || 0)), te, Math.max(0, k - 1)), se = Fe(Math.ceil(Number(((O = q.bounds) == null ? void 0 : O.maxY) || 0)), Me, Math.max(0, A - 1)), be = Math.max(1, Te - te + 1), Se = Math.max(1, se - Me + 1), m = u(k, A, { readback: !0 });
    m.ctx.clearRect(0, 0, k, A), m.ctx.drawImage(P, 0, 0);
    const f = m.ctx.getImageData(te, Me, be, Se);
    m.ctx.save(), m.ctx.globalCompositeOperation = "destination-out", m.ctx.drawImage(q.surface.canvas, 0, 0), m.ctx.restore();
    const $ = m.ctx.getImageData(te, Me, be, Se);
    let S = !1;
    for (let me = 0; me < be * Se; me += 1) {
      const Ie = f.data[me * 4 + 3], Ve = $.data[me * 4 + 3];
      if (Ie > Ve) {
        S = !0;
        break;
      }
    }
    return S ? (R.size > 64 && R.clear(), R.set(Q, m.canvas), m.canvas) : (R.set(Q, P), P);
  }
  function ae(P, F = null) {
    const q = H((P == null ? void 0 : P.rasterObjectId) || (P == null ? void 0 : P.id) || ""), k = (P == null ? void 0 : P.bbox) || null;
    if (!q || !k) return null;
    const A = he(P, F);
    if (!A || !(A.complete || A.width || A.naturalWidth)) return null;
    const { width: I, height: K } = de(), X = (P == null ? void 0 : P.transform) || {}, Q = [
      q,
      I,
      K,
      k.u0,
      k.v0,
      k.u1,
      k.v1,
      X.du,
      X.dv,
      X.rot_deg,
      X.scale,
      U()
    ].join(":"), R = o.get(Q);
    if (R) return R;
    o.size > 64 && o.clear();
    const te = mn({ label: "editor.raster-erp" });
    te.width = I, te.height = K;
    const Me = te.getContext("2d");
    if (!Me) return null;
    const Te = Number(k.u0 || 0) * I, se = Number(k.v0 || 0) * K, be = Math.max(1, (Number(k.u1 || 0) - Number(k.u0 || 0)) * I), Se = Math.max(1, (Number(k.v1 || 0) - Number(k.v0 || 0)) * K), m = Te + be * 0.5 + Number(X.du || 0) * I, f = se + Se * 0.5 + Number(X.dv || 0) * K, $ = Number(X.rot_deg || 0) * Sr, S = Math.max(0.01, Number(X.scale || 1));
    for (const v of [-I, 0, I])
      Me.save(), Me.translate(m + v, f), Me.rotate($), Me.scale(S, S), Me.drawImage(A, -be * 0.5, -Se * 0.5, be, Se), Me.restore();
    return o.set(Q, te), te;
  }
  async function pe(P, F) {
    const q = await new Promise((X) => P.toBlob(X, "image/png")), k = new FormData();
    k.append("image", q, F), k.append("type", "input"), k.append("subfolder", "panorama_stickers"), k.append("overwrite", "1");
    const A = await t.fetchApi("/upload/image", { method: "POST", body: k });
    if (!A || A.status !== 200) throw new Error(`upload failed (${A == null ? void 0 : A.status})`);
    const I = await A.json(), K = String((I == null ? void 0 : I.name) || "").trim();
    if (!K) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: K,
      subfolder: String((I == null ? void 0 : I.subfolder) || "panorama_stickers"),
      storage: String((I == null ? void 0 : I.type) || "input")
    };
  }
  let xe = null, Oe = !1;
  function ie() {
    if (n) return !1;
    const P = Vh(l.painting), { width: F, height: q } = g();
    return zw(l.painting_layer, { paintCount: P.totalPaintCount, maskCount: P.totalMaskCount, width: F, height: q, nodeId: String(i.id ?? "0") });
  }
  function Pe() {
    const P = String(i.id ?? "0"), F = us.get(P);
    if (Oe && F) return F;
    const q = (async () => {
      var I, K, X, Q, R, te, Me, Te, se, be, Se, m;
      const k = C(), A = Vh(l.painting);
      if (A.totalPaintCount <= 0 && A.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, xe = k, d());
        return;
      }
      if (xe !== k && !Oe) {
        Oe = !0;
        try {
          re();
          const f = b(!1), $ = ((K = (I = r.paintEngine) == null ? void 0 : I.getErpTarget) == null ? void 0 : K.call(I, f)) || null, S = ((X = $ == null ? void 0 : $.displayPaint) == null ? void 0 : X.canvas) || null, v = ((Q = $ == null ? void 0 : $.committedMask) == null ? void 0 : Q.canvas) || null, j = Math.max(1, Number(((R = $ == null ? void 0 : $.descriptor) == null ? void 0 : R.width) || (S == null ? void 0 : S.width) || (v == null ? void 0 : v.width) || 2048)), ce = Math.max(1, Number(((te = $ == null ? void 0 : $.descriptor) == null ? void 0 : te.height) || (S == null ? void 0 : S.height) || (v == null ? void 0 : v.height) || 1024));
          (!S && A.totalPaintCount > 0 || !v && A.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((Me = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Me.width) || 0) !== j || Number(((Te = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Te.height) || 0) !== ce) && (r._paintLayerSyncBlankSurface = u(j, ce)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, j, ce));
          const ne = S || A.totalPaintCount > 0 && ((se = r._paintLayerSyncBlankSurface) == null ? void 0 : se.canvas) || null, Ae = v || A.totalMaskCount > 0 && ((be = r._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null;
          if (!ne && !Ae) return;
          let Ce = null, O = null;
          const me = [];
          if (A.totalPaintCount > 0) {
            Ce = await pe(ne, `pano_paint_${P}.png`);
            for (const Ie of f) {
              const Ve = String(Ie || "").trim();
              if (!Ve) continue;
              const Ke = ((m = (Se = r.paintEngine) == null ? void 0 : Se.getGroupDisplayCanvas) == null ? void 0 : m.call(Se, Ve)) || null;
              if (!Ke) continue;
              const Ge = Ve.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ue = await pe(Ke, `pano_group_${P}_${Ge}.png`);
              Ue && me.push({
                id: Ve,
                actionGroupId: Ve,
                image: Ue
              });
            }
          }
          A.totalMaskCount > 0 && (O = await pe(Ae, `pano_mask_${P}.png`)), k === C() && (l.painting_layer = {
            paint: Ce,
            mask: O,
            groups: me,
            revision: k
          }, xe = k, d());
        } catch (f) {
          throw f;
        } finally {
          Oe = !1;
        }
      }
    })();
    return us.set(P, q), q.finally(() => {
      us.get(P) === q && us.delete(P);
    }), q;
  }
  function w(P) {
    var K;
    const F = ((K = r.paintEngine) == null ? void 0 : K.getMaskDisplayCanvas()) || null;
    if (!F) return P;
    const q = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, k = P.reduce((X, Q) => Math.max(X, Number((Q == null ? void 0 : Q.zIndex) || 0)), -1), A = (Array.isArray(l.stickers) ? l.stickers : []).reduce((X, Q) => Math.max(X, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), I = Math.max(k, A);
    return P.push({
      id: "mask_display",
      source: F,
      revision: q,
      zIndex: I + 1,
      opacity: 1,
      visible: !0
    }), P;
  }
  function N() {
    var k, A;
    const P = _(!0), F = fe(), q = [];
    for (const I of P) {
      if ((I == null ? void 0 : I.type) === "strokeGroup") {
        const K = String(I.actionGroupId || I.id || "");
        if (!K) continue;
        const X = ((A = (k = r.paintEngine) == null ? void 0 : k.getGroupDisplayCanvas) == null ? void 0 : A.call(k, K)) || null;
        if (!X) continue;
        q.push({
          id: `paint_group:${K}`,
          source: X,
          revision: `${y()}:${K}`,
          zIndex: Number((I == null ? void 0 : I.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((I == null ? void 0 : I.type) === "rasterObject") {
        const K = I.item || null, X = H((K == null ? void 0 : K.id) || I.id || "");
        if (!X) continue;
        const Q = ae(K, () => B());
        if (!Q) continue;
        const R = V(Q, I, F), te = (K == null ? void 0 : K.transform) || {};
        q.push({
          id: `raster:${X}`,
          source: R,
          revision: [
            C(),
            (F == null ? void 0 : F.key) || "",
            X,
            Number(te.du || 0).toFixed(6),
            Number(te.dv || 0).toFixed(6),
            Number(te.rot_deg || 0).toFixed(3),
            Number(te.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((I == null ? void 0 : I.z_index) || 0),
          opacity: 1,
          visible: (K == null ? void 0 : K.visible) !== !1
        });
      }
    }
    return w(q);
  }
  function J() {
    return x() ? N().filter((P) => P.visible !== !1).map((P) => ({ id: P.id, media: P.source, revision: P.revision, opacity: P.opacity, zIndex: P.zIndex })) : [];
  }
  function ue() {
    l.painting_layer !== null && (l.painting_layer = null), xe = "";
  }
  return {
    connect(P) {
      ({
        commitState: d,
        createRasterSurface: u,
        ensureGroupFrame: c,
        getActivePaintTargetDescriptor: p,
        getDesiredPaintTargetDescriptor: g,
        getDisplayPaintRevisionKey: y,
        getOrderedDisplayListObjects: _,
        getOrderedPaintGroupIds: b,
        getPaintingCompositeRevisionKey: C,
        getPaintingRevisionKey: U,
        getStrokeGroupStrokes: D,
        inverseTransformErpPointAround: T,
        paintingShown: x,
        parseRasterObjectSelectionId: H,
        processFreehandPoints: z,
        rasterizeStrokeToSurface: ee,
        rebuildPaintEngineIfNeeded: re,
        requestDraw: B,
        screenPosToErpPoint: G,
        shortestWrappedDelta: Y
      } = P);
    },
    getSharedLivePaintSurface: ve,
    getLivePaintRevisionSuffix: ge,
    isPaintCompositeInteraction: le,
    hitRasterObjectAt: W,
    invalidateLivePaintPreviewCaches: we,
    buildRasterObjectEditCanvas: ae,
    needsPaintingLayerSync: ie,
    syncPaintingLayerAsync: Pe,
    invalidatePaintingLayerState: ue,
    buildEditorViewPaintLayers: J
  };
}
function sI(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, a, s;
  function l(oe) {
    return !oe || typeof oe != "object" ? { x: 0, y: 0 } : { x: Number((oe == null ? void 0 : oe.u) || 0), y: Number((oe == null ? void 0 : oe.v) || 0) };
  }
  function d(oe, V, ae, pe = {}) {
    return { ...{
      ...oe,
      t: Number((oe == null ? void 0 : oe.t) || 0),
      widthScale: p(oe, "widthScale", 1),
      pressureLike: p(oe, "pressureLike", 1)
    }, ...pe, u: V, v: ae };
  }
  function u(oe, V = !1) {
    return V ? 12e-4 : 18e-4;
  }
  function c(oe, V, ae = !1) {
    if (!Array.isArray(oe) || !oe.length) return [];
    const pe = String((V == null ? void 0 : V.kind) || "") === "ERP_GLOBAL", xe = /* @__PURE__ */ new WeakMap();
    if (pe) {
      let k = null;
      oe.forEach((A) => {
        const I = Number((A == null ? void 0 : A.u) || 0), K = Number((A == null ? void 0 : A.v) || 0), X = (I % 1 + 1) % 1, Q = k == null ? X : k + s(X, (k % 1 + 1) % 1);
        xe.set(A, { x: Q, y: K }), k = Q;
      });
    }
    const Oe = (k) => !k || typeof k != "object" ? { x: 0, y: 0 } : xe.get(k) || l(k), ie = (k, A, I, K = {}) => {
      const X = pe ? (Number(A) % 1 + 1) % 1 : Number(A), Q = d(k, X, I, K);
      return xe.set(Q, { x: Number(A), y: Number(I) }), Q;
    }, Pe = (k, A, I) => {
      const K = Oe(k), X = Oe(A);
      return ie(k, jn(K.x, X.x, I), jn(K.y, X.y, I), {
        t: jn(Number((k == null ? void 0 : k.t) || 0), Number((A == null ? void 0 : A.t) || 0), I),
        widthScale: jn(p(k, "widthScale", 1), p(A, "widthScale", 1), I),
        pressureLike: jn(p(k, "pressureLike", 1), p(A, "pressureLike", 1), I)
      });
    };
    if (oe.length === 1) {
      const k = Oe(oe[0]);
      return [ie(oe[0], k.x, k.y)];
    }
    const w = u(V, ae), N = (k, A) => {
      const I = [0];
      for (let se = 1; se < k.length; se += 1) {
        const be = Oe(k[se - 1]), Se = Oe(k[se]);
        I.push(I[se - 1] + Math.hypot(Se.x - be.x, Se.y - be.y));
      }
      const K = I[I.length - 1] || 0;
      if (K <= 1e-8) {
        const se = k[0], be = Oe(se);
        return [ie(se, be.x, be.y)];
      }
      const X = [];
      let Q = 0;
      for (let se = 0; se <= K + 1e-9; se += A) {
        for (; Q < I.length - 2 && I[Q + 1] < se; ) Q += 1;
        const be = I[Q], Se = I[Q + 1], m = Math.max(1e-8, Se - be);
        X.push(Pe(k[Q], k[Q + 1], Fe((se - be) / m, 0, 1)));
      }
      const R = k[k.length - 1], te = Oe(R), Me = X[X.length - 1], Te = Me ? Oe(Me) : null;
      return (!Te || Math.hypot(Te.x - te.x, Te.y - te.y) > A * 0.35) && X.push(ie(R, te.x, te.y)), X;
    }, J = (k) => {
      if (!Array.isArray(k) || k.length < 3) return k ? k.slice() : [];
      const A = Oe(k[0]), I = [ie(k[0], A.x, A.y)];
      for (let Q = 0; Q < k.length - 1; Q += 1) {
        const R = k[Q], te = k[Q + 1], Me = Oe(R), Te = Oe(te), se = ie(
          R,
          Me.x * 0.75 + Te.x * 0.25,
          Me.y * 0.75 + Te.y * 0.25,
          {
            t: Number(R.t || 0) * 0.75 + Number(te.t || 0) * 0.25,
            widthScale: p(R, "widthScale", 1) * 0.75 + p(te, "widthScale", 1) * 0.25,
            pressureLike: p(R, "pressureLike", 1) * 0.75 + p(te, "pressureLike", 1) * 0.25
          }
        ), be = ie(
          R,
          Me.x * 0.25 + Te.x * 0.75,
          Me.y * 0.25 + Te.y * 0.75,
          {
            t: Number(R.t || 0) * 0.25 + Number(te.t || 0) * 0.75,
            widthScale: p(R, "widthScale", 1) * 0.25 + p(te, "widthScale", 1) * 0.75,
            pressureLike: p(R, "pressureLike", 1) * 0.25 + p(te, "pressureLike", 1) * 0.75
          }
        );
        I.push(se, be);
      }
      const K = k[k.length - 1], X = Oe(K);
      return I.push(ie(K, X.x, X.y)), I;
    }, ue = N(oe, w);
    if (ue.length < 3) return ue;
    const P = ae ? 2 : 1;
    let F = ue.slice();
    for (let k = 0; k < P; k += 1) F = J(F);
    return N(F, Math.max(w * 0.75, 55e-5));
  }
  function p(oe, V, ae = 1) {
    const pe = Number(oe == null ? void 0 : oe[V]);
    return Number.isFinite(pe) ? Math.max(0, pe) : ae;
  }
  function g(oe) {
    const V = Number(oe == null ? void 0 : oe.radiusValue);
    if (Number.isFinite(V) && V > 0) {
      const ae = String((oe == null ? void 0 : oe.radiusModel) || "").trim() || "erp_uv_norm";
      return ae === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((oe == null ? void 0 : oe.size) || 10) * 0.5 / 2048)
      } : {
        model: ae,
        value: V
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((oe == null ? void 0 : oe.size) || 10) * 0.5 / 2048)
    };
  }
  function y(oe, V, ae = {}) {
    const pe = mn({ label: "editor.raster-surface" });
    pe.width = Math.max(1, Math.round(oe)), pe.height = Math.max(1, Math.round(V));
    const xe = pe.getContext("2d", ae.readback ? { willReadFrequently: !0 } : void 0);
    return xe && (xe.clearRect(0, 0, pe.width, pe.height), xe.imageSmoothingEnabled = !0), { canvas: pe, ctx: xe };
  }
  function _() {
    const oe = B();
    return `${String(t.paintStrokeRevision)}:${oe.width}x${oe.height}`;
  }
  function b() {
    const oe = B();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${oe.width}x${oe.height}`;
  }
  function C() {
    const oe = i(), V = b();
    return oe ? `${V}:${oe}` : V;
  }
  function U() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function D() {
    t.paintCompositeRevision += 1;
  }
  function T() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function x() {
    var oe, V;
    t.paintEngineRevisionKey = null, (V = (oe = t.paintEngine) == null ? void 0 : oe.rebuildCommitted) == null || V.call(oe, r), t.paintEngineRevisionKey = _();
  }
  function H() {
    T(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function z({ rebuildPaintEngine: oe = !1 } = {}) {
    o(), U(), H(), oe && x();
  }
  function ee() {
    o(), D(), H();
  }
  function re() {
    var pe;
    const oe = B(), V = `${oe.width}x${oe.height}`;
    t.paintEngineDescriptorKey !== V && (t.paintEngine = od(oe), t.paintEngineDescriptorKey = V, t.paintEngineRevisionKey = "");
    const ae = _();
    t.paintEngineRevisionKey !== ae && (t.paintEngineRevisionKey = ae, (pe = t.paintEngine) == null || pe.rebuildCommitted(r));
  }
  function B() {
    const oe = Math.max(1, a(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: oe,
      height: Math.max(1, Math.round(oe * 0.5))
    };
  }
  function G() {
    return B();
  }
  function Y(oe, V, ae, pe, xe = null) {
    const Oe = g(oe), ie = p(V, "widthScale", 1) * p(V, "pressureLike", 1);
    return Oe.model === "erp_uv_norm" ? Math.max(0.5, Oe.value * ae * ie) : Oe.model === "world_angle" ? xe ? Math.max(0.5, Oe.value / Math.max(1e-6, Number(xe.hFOV_deg || 90) * Sr) * ae * ie) : Math.max(0.5, Oe.value / (2 * Math.PI) * ae * ie) : Math.max(0.5, Number((oe == null ? void 0 : oe.size) || 10) * 0.5 * ie);
  }
  function le(oe, V, ae = {}) {
    const pe = String((V == null ? void 0 : V.layerKind) || "paint"), xe = String((V == null ? void 0 : V.toolKind) || "pen"), Oe = ae.preview === !0, ie = Oe ? 0.78 : 1;
    if (oe.globalAlpha = xe === "marker" ? 0.7 * ie : 1, pe === "mask") {
      oe.fillStyle = Oe ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (xe === "eraser") {
      oe.globalCompositeOperation = "destination-out", oe.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const Pe = String((V == null ? void 0 : V.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (V == null ? void 0 : V.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = Oe ? Math.max(0.28, Number(Pe.a ?? 1) * 0.88) : Math.max(0.12, Number(Pe.a ?? 1));
    oe.fillStyle = `rgba(${Math.round(Number(Pe.r || 0) * 255)}, ${Math.round(Number(Pe.g || 0) * 255)}, ${Math.round(Number(Pe.b || 0) * 255)}, ${w})`;
  }
  function ve(oe, V, ae) {
    const pe = Math.max(0.5, Math.min(ae, Number((V == null ? void 0 : V.radiusPx) || 0.5)));
    !Number.isFinite(V == null ? void 0 : V.x) || !Number.isFinite(V == null ? void 0 : V.y) || !Number.isFinite(pe) || (oe.beginPath(), oe.arc(Number(V.x || 0), Number(V.y || 0), pe, 0, Math.PI * 2), oe.fill());
  }
  function ge(oe, V, ae, pe, xe = {}) {
    if (!oe || !Array.isArray(V) || !V.length) return;
    const Oe = Math.max(pe.w, pe.h) * 0.25;
    oe.save(), le(oe, ae, xe);
    const ie = (Pe) => ve(oe, Pe, Oe);
    if (V.length === 1) {
      ie(V[0]), oe.restore();
      return;
    }
    for (let Pe = 0; Pe < V.length - 1; Pe += 1) {
      const w = V[Pe], N = V[Pe + 1];
      if (!w || !N) continue;
      const J = Number(w.x || 0), ue = Number(w.y || 0), P = Number(N.x || 0), F = Number(N.y || 0), q = Math.max(0.5, Math.min(Oe, Number(w.radiusPx || 0.5))), k = Math.max(0.5, Math.min(Oe, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(J) || !Number.isFinite(ue) || !Number.isFinite(P) || !Number.isFinite(F) || !Number.isFinite(q) || !Number.isFinite(k)) continue;
      const A = P - J, I = F - ue, K = Math.hypot(A, I);
      if (!Number.isFinite(K) || K < 1e-6) {
        ie(w);
        continue;
      }
      if (K > Math.max(pe.w, pe.h) * 0.5) continue;
      const X = Math.max(0.5, Math.min(q, k)), Q = Math.max(0.35, Math.min(X * 0.4, 2.25)), R = Math.max(1, Math.ceil(K / Q));
      for (let te = 0; te <= R; te += 1) {
        const Me = te / R;
        ie({
          x: jn(J, P, Me),
          y: jn(ue, F, Me),
          radiusPx: jn(q, k, Me)
        });
      }
    }
    ie(V[V.length - 1]), oe.restore();
  }
  function he(oe, V, ae, pe) {
    ge(oe, V, ae, pe, { preview: !1 });
  }
  function Z(oe, V, ae, pe, xe) {
    var Pe, w, N, J;
    if (!oe || !Array.isArray(V) || V.length < 3) return;
    const Oe = "u", ie = "v";
    if (oe.save(), String((ae == null ? void 0 : ae.layerKind) || "") === "mask")
      oe.fillStyle = "rgba(255,255,255,1)";
    else if (String((ae == null ? void 0 : ae.toolKind) || "") === "eraser")
      oe.globalCompositeOperation = "destination-out", oe.fillStyle = "rgba(0,0,0,1)";
    else {
      const ue = (ae == null ? void 0 : ae.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      oe.fillStyle = `rgba(${Math.round(Number(ue.r || 0) * 255)}, ${Math.round(Number(ue.g || 0) * 255)}, ${Math.round(Number(ue.b || 0) * 255)}, ${Number(ue.a ?? 1)})`;
    }
    oe.beginPath(), oe.moveTo(Number(((Pe = V[0]) == null ? void 0 : Pe[Oe]) || 0) * pe.w, Number(((w = V[0]) == null ? void 0 : w[ie]) || 0) * pe.h);
    for (let ue = 1; ue < V.length; ue += 1)
      oe.lineTo(Number(((N = V[ue]) == null ? void 0 : N[Oe]) || 0) * pe.w, Number(((J = V[ue]) == null ? void 0 : J[ie]) || 0) * pe.h);
    oe.closePath(), oe.fill(), oe.restore();
  }
  function E(oe) {
    const V = (oe == null ? void 0 : oe.geometry) || null;
    return V ? String(V.geometryKind || "") === "lasso_fill" ? Array.isArray(V.points) ? V.points : [] : Array.isArray(V.processedPoints) && V.processedPoints.length ? V.processedPoints : Array.isArray(V.rawPoints) && V.rawPoints.length ? V.rawPoints : Array.isArray(V.points) ? V.points : [] : [];
  }
  function W(oe, V) {
    const ae = E(oe);
    return !Array.isArray(ae) || !ae.length ? [] : ae.map((pe) => ({
      x: Number((pe == null ? void 0 : pe.u) || 0) * Number((V == null ? void 0 : V.w) || 1),
      y: Number((pe == null ? void 0 : pe.v) || 0) * Number((V == null ? void 0 : V.h) || 1),
      radiusPx: Y(oe, pe, Number((V == null ? void 0 : V.w) || 1), Number((V == null ? void 0 : V.h) || 1))
    }));
  }
  function de(oe, V, ae = null) {
    var Pe, w, N, J;
    if (!(oe != null && oe.ctx) || !V) return !1;
    const pe = ae || { w: Number(((Pe = oe.canvas) == null ? void 0 : Pe.width) || 0), h: Number(((w = oe.canvas) == null ? void 0 : w.height) || 0) }, xe = String((V == null ? void 0 : V.toolKind) || "") === "eraser" ? {
      ...V,
      layerKind: "mask",
      toolKind: String(((N = V == null ? void 0 : V.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : V;
    if (String(((J = V == null ? void 0 : V.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill")
      return Z(oe.ctx, E(xe), xe, pe), !0;
    const ie = W(xe, pe);
    return ie.length ? (he(oe.ctx, ie, xe, pe), !0) : !1;
  }
  function fe(oe, V, ae, pe = 8) {
    const xe = new Uint8Array(V * ae), Oe = [], ie = new Int32Array(V * ae), Pe = new Int32Array(V * ae);
    for (let w = 0; w < ae; w += 1)
      for (let N = 0; N < V; N += 1) {
        const J = w * V + N;
        if (xe[J] || oe[J] <= pe) continue;
        let ue = 0, P = 0;
        ie[P] = N, Pe[P] = w, P += 1, xe[J] = 1;
        const F = [];
        let q = N, k = w, A = N, I = w;
        for (; ue < P; ) {
          const K = ie[ue], X = Pe[ue];
          ue += 1, F.push({ x: K, y: X }), K < q && (q = K), X < k && (k = X), K > A && (A = K), X > I && (I = X);
          const Q = [
            [(K - 1 + V) % V, X],
            [(K + 1) % V, X],
            [K, X - 1],
            [K, X + 1]
          ];
          for (const [R, te] of Q) {
            if (te < 0 || te >= ae) continue;
            const Me = te * V + R;
            xe[Me] || oe[Me] <= pe || (xe[Me] = 1, ie[P] = R, Pe[P] = te, P += 1);
          }
        }
        Oe.push({ pixels: F, minX: q, minY: k, maxX: A, maxY: I });
      }
    return Oe;
  }
  function we(oe, V) {
    const ae = [...new Set((Array.isArray(oe == null ? void 0 : oe.pixels) ? oe.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, N) => w - N);
    if (!ae.length) return null;
    if (ae.length === 1)
      return { startX: ae[0], widthPx: 1 };
    let pe = -1, xe = 0;
    for (let w = 0; w < ae.length; w += 1) {
      const N = ae[w], ue = (w === ae.length - 1 ? ae[0] + V : ae[w + 1]) - N - 1;
      ue > pe && (pe = ue, xe = w);
    }
    const Oe = (ae[(xe + 1) % ae.length] + V) % V;
    let ie = 1 / 0, Pe = -1 / 0;
    for (const w of ae) {
      const N = (w - Oe + V) % V;
      ie = Math.min(ie, N), Pe = Math.max(Pe, N);
    }
    return {
      startX: Oe,
      widthPx: Math.max(1, Pe - ie + 1)
    };
  }
  function $e(oe, V, ae = {}) {
    var N;
    const pe = Number((oe == null ? void 0 : oe.width) || 0), xe = Number((oe == null ? void 0 : oe.height) || 0), Oe = (N = oe == null ? void 0 : oe.getContext) == null ? void 0 : N.call(oe, "2d");
    if (!Oe || pe < 1 || xe < 1) return [];
    const ie = Oe.getImageData(0, 0, pe, xe), Pe = new Uint8Array(pe * xe);
    for (let J = 0; J < Pe.length; J += 1) Pe[J] = ie.data[J * 4 + 3];
    return fe(Pe, pe, xe, 8).map((J, ue) => {
      const P = we(J, pe);
      if (!P) return null;
      const F = Number(P.widthPx || 0), q = J.maxY - J.minY + 1, k = Number(P.startX || 0), A = mn({ label: "editor.lasso-fill" });
      A.width = F, A.height = q;
      const I = A.getContext("2d");
      if (!I) return null;
      const K = I.createImageData(F, q);
      return J.pixels.forEach(({ x: X, y: Q }) => {
        const R = (Q * pe + X) * 4, te = (Number(X || 0) - k + pe) % pe, Me = ((Q - J.minY) * F + te) * 4;
        K.data[Me + 0] = ie.data[R + 0], K.data[Me + 1] = ie.data[R + 1], K.data[Me + 2] = ie.data[R + 2], K.data[Me + 3] = ie.data[R + 3];
      }), I.putImageData(K, 0, 0), {
        id: io("raster"),
        type: "raster_frozen",
        layerKind: V === "mask" ? "mask" : "paint",
        z_index: Number((ae == null ? void 0 : ae.z_index) || 0) + ue * 1e-3,
        locked: (ae == null ? void 0 : ae.locked) === !0,
        bbox: {
          u0: 0,
          v0: J.minY / xe,
          u1: F / pe,
          v1: (J.maxY + 1) / xe
        },
        rasterDataUrl: A.toDataURL("image/png"),
        transform: {
          du: k / pe,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(oe) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = oe);
    },
    processFreehandPoints: c,
    createRasterSurface: y,
    getPaintingRevisionKey: _,
    getPaintingCompositeRevisionKey: b,
    getDisplayPaintRevisionKey: C,
    refreshPaintEngineRevisionCache: x,
    markObjectVisualsDirty: H,
    markPaintStrokeVisualsDirty: z,
    markPaintCompositeVisualsDirty: ee,
    rebuildPaintEngineIfNeeded: re,
    getDesiredPaintTargetDescriptor: B,
    getActivePaintTargetDescriptor: G,
    rasterizeStrokeToSurface: de,
    createRasterFrozenObjectsFromCanvas: $e
  };
}
function lI(e) {
  const {
    comfyMedia: t,
    editor: n,
    node: r,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, d, u, c, p, g;
  function y(re, B = null) {
    var G;
    if (re && typeof re == "object" && !Array.isArray(re)) return re;
    if (Array.isArray(re) && re.length > 0) {
      const Y = re[0];
      if (Y && typeof Y == "object" && !Array.isArray(Y)) return Y;
    }
    if (Array.isArray(B) && B.length > 0) {
      const Y = (G = B[0]) == null ? void 0 : G.parsed_state;
      if (Y && typeof Y == "object" && !Array.isArray(Y))
        return {
          yaw_deg: Number(Y.yaw_deg || 0),
          pitch_deg: Number(Y.pitch_deg || 0),
          hFOV_deg: Number(Y.hFOV_deg || 30),
          rot_deg: Number(Y.roll_deg || 0)
        };
    }
    return null;
  }
  function _(re, B, G) {
    const Y = Math.max(1, Number(B || 1)), le = Math.max(1, Number(G || 1)), ve = Fe(Number(re || 30), 0.1, 179) * Sr, ge = 2 * Math.atan(Math.tan(ve * 0.5) * (le / Y));
    return Fe(ge * wi, 0.1, 179);
  }
  function b(re) {
    const B = String(re || "").trim();
    if (!B) return null;
    try {
      const G = JSON.parse(B);
      if (!G || typeof G != "object" || String(G.kind || "") !== "pano_sticker_state") return null;
      const Y = G.version;
      let le = null;
      if (typeof Y == "number" && Number.isInteger(Y) ? le = Y : typeof Y == "string" && /^\d+$/.test(Y) && (le = Number.parseInt(Y, 10)), le !== 1) return null;
      const ve = G.pose;
      if (!ve || typeof ve != "object") return null;
      const ge = Number(ve.yaw_deg), he = Number(ve.pitch_deg), Z = Number(ve.roll_deg), E = Number(ve.hFOV_deg);
      if (![ge, he, Z, E].every((we) => Number.isFinite(we))) return null;
      let W = ((ge + 180) % 360 + 360) % 360 - 180;
      Object.is(W, -0) && (W = 0);
      const de = {
        yaw_deg: W,
        pitch_deg: Fe(he, -89.9, 89.9),
        roll_deg: Z,
        hFOV_deg: Fe(E, 0.1, 179)
      }, fe = Number(G.source_aspect);
      return Number.isFinite(fe) && fe > 0 && (de.source_aspect = fe), de;
    } catch {
      return null;
    }
  }
  function C(re) {
    const B = Number(re == null ? void 0 : re.yaw_deg), G = Number(re == null ? void 0 : re.pitch_deg), Y = Number((re == null ? void 0 : re.roll_deg) ?? (re == null ? void 0 : re.rot_deg)), le = Number(re == null ? void 0 : re.hFOV_deg), ve = Oi(re);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Dt(Number.isFinite(B) ? B : 0),
        pitch_deg: Fe(Number.isFinite(G) ? G : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(Y) ? Y : 0,
        hFOV_deg: Fe(Number.isFinite(le) ? le : 90, 0.1, 179)
      },
      source_aspect: ve
    };
  }
  function U(re) {
    var he;
    if (!re || typeof re != "object") return C(null);
    const B = Number(re == null ? void 0 : re.yaw_deg), G = Number(re == null ? void 0 : re.pitch_deg), Y = Number((re == null ? void 0 : re.roll_deg) ?? (re == null ? void 0 : re.rot_deg)), le = Number(re == null ? void 0 : re.hFOV_deg), ve = Number(re == null ? void 0 : re.vFOV_deg);
    let ge = 1;
    if (Number.isFinite(le) && Number.isFinite(ve)) {
      const Z = Fe(le, 0.1, 179) * Sr, E = Fe(ve, 0.1, 179) * Sr, W = Math.tan(E * 0.5);
      if (Math.abs(W) > 1e-6) {
        const de = Math.tan(Z * 0.5) / W;
        Number.isFinite(de) && de > 0 && (ge = de);
      }
    }
    if (re != null && re.asset_id && ((he = o == null ? void 0 : o.assets) != null && he[re.asset_id])) {
      const Z = o.assets[re.asset_id], E = Number((Z == null ? void 0 : Z.w) || 0), W = Number((Z == null ? void 0 : Z.h) || 0);
      E > 0 && W > 0 && (ge = E / W);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Dt(Number.isFinite(B) ? B : 0),
        pitch_deg: Fe(Number.isFinite(G) ? G : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(Y) ? Y : 0,
        hFOV_deg: Fe(Number.isFinite(le) ? le : 30, 0.1, 179)
      },
      source_aspect: ge
    };
  }
  function D(re) {
    return t.linkedValue(r, re);
  }
  function T(re, B, G) {
    const Y = re && typeof re == "object" ? {
      yaw_deg: Number(re.yaw_deg || 0),
      pitch_deg: Number(re.pitch_deg || 0),
      roll_deg: Number(re.rot_deg ?? re.roll_deg ?? 0),
      hFOV_deg: Number(re.hFOV_deg || 30)
    } : b(B);
    if (Y) {
      const ge = Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || Y.source_aspect || 1), he = Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 1);
      return {
        yaw_deg: Number(Y.yaw_deg || 0),
        pitch_deg: Number(Y.pitch_deg || 0),
        hFOV_deg: Number(Y.hFOV_deg || 30),
        vFOV_deg: _(Y.hFOV_deg, ge, he),
        rot_deg: Number(Y.roll_deg || 0)
      };
    }
    const le = Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || 1), ve = Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 1);
    return {
      yaw_deg: Number(n.viewYaw || 0),
      pitch_deg: Number(n.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: _(30, le, ve),
      rot_deg: 0
    };
  }
  function x() {
    const re = l(() => {
      Rr(r, "image-loaded");
    }), B = an(r, "external-sticker") ? y(d("pano_sticker_input_pose"), null) : null;
    return w0(o, S0(r, { pose: B, image: re }));
  }
  function H() {
    var he;
    const re = Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs.findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === "sticker_image") : -1, B = re >= 0 ? ((he = r.getInputLink(re)) == null ? void 0 : he.id) ?? null : null, G = l(() => {
      Rr(r, "image-loaded");
    }), Y = y(d("pano_sticker_input_pose"), null), le = D("sticker_state"), ve = t.externalStateHash(r, le), ge = B == null ? null : T(Y, le, G);
    return _0(o, {
      connected: B != null,
      linkId: B,
      stateHash: ve,
      pose: ge,
      imageWidth: Number((G == null ? void 0 : G.naturalWidth) || (G == null ? void 0 : G.width) || 0),
      imageHeight: Number((G == null ? void 0 : G.naturalHeight) || (G == null ? void 0 : G.height) || 0)
    });
  }
  function z(re = "sync") {
    if (a !== "stickers" || i) return;
    const B = r.__panoSceneStateV2 ? x() : H();
    if (B.changed) {
      const G = o.stickers.find(u);
      o.stickers = B.state.stickers, o.active = B.state.active, G && n.selectedId === G.id && !o.stickers.some((Y) => Y.id === G.id) && (n.selectedId = null, n.selectedIds = []), s(), g(), p();
    }
    c();
  }
  function ee() {
    const re = Array.isArray(o.stickers) ? o.stickers : [], B = [];
    for (const G of re)
      u(G) && (G.visible = !1, B.push(G));
    return B;
  }
  return {
    connect(re) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: d,
        isExternalSticker: u,
        requestDraw: c,
        updateSelectionMenu: p,
        updateSidePanel: g
      } = re);
    },
    computeStickerVFov: _,
    buildCanonicalCutoutStickerState: C,
    buildCanonicalSelectedStickerState: U,
    reconcileExternalStickerFromInputs: z,
    collectExternalStickersForClearAll: ee
  };
}
function cI(e) {
  const {
    app: t,
    cameraV2: n,
    canvas: r,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: d,
    stateV2: u,
    studio: c,
    viewController: p
  } = e;
  let g, y, _, b, C, U, D, T, x, H = null;
  function z(k, A = null) {
    const I = W();
    D(() => {
      i.viewTransition = BP(I, k, performance.now(), { scale: xe(), end: A });
    }), !i.viewTransition && A && ee(A), p.state.inertia.active = !1, p.state.inertia.vx = 0, p.state.inertia.vy = 0, T(), C({ localOnly: !0, reason: yt.VIEW });
  }
  function ee(k) {
    Z(du({ ...he(), moved: k.moved }, k.mode, de())), s.backgroundDirty = !0;
  }
  function re() {
    i.viewTransition && (i.viewTransition = null, T());
  }
  function B(k, A) {
    z({ ...W(), yaw_deg: k, pitch_deg: A });
  }
  function G() {
    return !c || we() && !b();
  }
  function Y() {
    return i.mode === "pano" && le();
  }
  function le() {
    return u && px({ sceneLinked: l && !!Id(a).scene, files: U(), stickers: d.stickers });
  }
  function ve() {
    return i.spaceMode === "6dof" && Y();
  }
  function ge() {
    var k, A, I;
    return sM((I = (A = (k = t.ui) == null ? void 0 : k.settings) == null ? void 0 : A.getSettingValue) == null ? void 0 : I.call(A, $0));
  }
  function he() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function Z(k) {
    i.spaceMode = k.mode, i.viewPosition = k.position, i.viewMoved = k.moved;
  }
  function E(k) {
    var I;
    const A = YP(i.spaceMode, i.viewTransition, k);
    if (A !== "keep") {
      if (A === "return") {
        z({ ...W(), position: de(), distance: ((I = ae()) == null ? void 0 : I.radius) || ir }, { mode: k, moved: !1 });
        return;
      }
      re(), Z(du({ ...he(), position: W().position }, k, de())), s.backgroundDirty = !0, T(), C({ localOnly: !0, reason: yt.VIEW });
    }
  }
  function W() {
    var I;
    const k = i.viewMoved ? i.viewDistance : ((I = ae()) == null ? void 0 : I.radius) || ir, A = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: k };
    return lx(i.spaceMode, A, de());
  }
  function de() {
    return we() ? V().position : [0, 0, 0];
  }
  function fe() {
    return n && d.camera !== null;
  }
  function we() {
    return fe() && (!c || d.camera.visible);
  }
  function $e() {
    return d.painting_visible !== !1;
  }
  function oe(k) {
    return k.visible && No(k.clip, i.frame);
  }
  function V() {
    return pd(d.camera, i.frame);
  }
  function ae() {
    var A;
    const k = g();
    return ((A = k.space ?? k.content) == null ? void 0 : A.sphere) ?? null;
  }
  function pe(k) {
    i.viewPosition = k.position, i.viewYaw = k.yaw_deg, i.viewPitch = k.pitch_deg, i.viewDistance = k.distance, i.viewMoved = !0, s.backgroundDirty = !0, C({ localOnly: !0, reason: yt.VIEW });
  }
  function xe() {
    var k;
    return ((k = ae()) == null ? void 0 : k.radius) || ir;
  }
  function Oe() {
    var te;
    const k = g().space, A = y(), I = i.worldSelectedId || i.selectedId, K = A.stickers.findIndex((Me) => Me.id === I), X = K < 0 ? null : {
      sticker: A.stickers[K],
      value: Ml(A, i.frame).stickers[K],
      plane: k.stickers.find((Me) => Me.id === I) ?? null,
      item: ((te = k.sticker) == null ? void 0 : te.id) === I && k.sticker.url ? { kind: k.sticker.kind, box: o.sceneBox(k.sticker.url) } : null
    }, Q = _() ? P() : vx(ae(), X);
    if (!Q) return;
    const R = W();
    i.viewDistance = R.distance, i.viewMoved = !0, z(Hg(R, Q, r.width, r.height));
  }
  function ie(k) {
    return o.pickSurface(q(), k.x, k.y, r.width, r.height);
  }
  function Pe(k, A) {
    var I;
    return fu(k, A, i.viewMoved ? null : (I = ae()) == null ? void 0 : I.center, xe());
  }
  function w() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function N(k, A) {
    const I = performance.now(), K = { x: k.x, y: k.y, time: I, key: o.contentRevision(), view: w() };
    if (!Rg(H, K)) {
      const Q = ie(k);
      H = { ...K, cost: performance.now() - I, hit: Q };
    }
    const X = W();
    pe(jg(X, Pe(X, H.hit), A, xe())), H.view = w(), H.wheelTime = I;
  }
  function J(k, A, I) {
    const K = W();
    i.interaction = k === "orbit" ? { kind: "space_orbit", last: A, pivot: Pe(K, ie(A)) } : { kind: "space_pan", last: A, depth: Vg(K, xe()) }, x(A), r.setPointerCapture(I);
  }
  function ue(k) {
    return k * 0.2;
  }
  function P() {
    return { center: V().position, radius: ue(xe()) };
  }
  function F(k, A) {
    const { yaw_deg: I, pitch_deg: K } = Bg(k.position, A);
    return { ...k, yaw_deg: I, pitch_deg: K };
  }
  function q() {
    return Nd(W(), r.width, r.height, ae());
  }
  return {
    connect(k) {
      ({
        editorViewInput: g,
        editorViewSceneState: y,
        isCameraSelected: _,
        isErpCamera: b,
        requestDraw: C,
        sceneFiles: U,
        startAnimation: D,
        syncFloatingViewButtonState: T,
        updateCursor: x
      } = k);
    },
    transitionView: z,
    applyViewTransitionEnd: ee,
    cancelViewTransition: re,
    turnViewTo: B,
    cameraPreviewShown: G,
    isSpaceView: Y,
    hasSpaceContent: le,
    isFreeSpaceView: ve,
    viewControls: ge,
    spaceModeState: he,
    applySpaceMode: Z,
    setSpaceMode: E,
    spaceViewState: W,
    spaceOrigin: de,
    hasCamera: fe,
    cameraShoots: we,
    paintingShown: $e,
    sceneStickerShown: oe,
    cutoutCamera: V,
    contentSphere: ae,
    setSpaceView: pe,
    spaceScale: xe,
    frameSpaceContent: Oe,
    zoomSpaceAt: N,
    startSpaceDrag: J,
    currentSpaceCamera: q,
    cameraFrustumLength: ue,
    cameraSphere: P,
    lookingAt: F
  };
}
function uI(e) {
  const {
    canvas: t,
    editor: n,
    editorView: r,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: d,
    videoEl: u
  } = e;
  let c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe, V, ae, pe = { revision: -1, sceneState: null }, xe = null;
  function Oe() {
    return xe || (xe = w()), xe;
  }
  function ie() {
    xe = null;
  }
  function Pe() {
    return pe.sceneState;
  }
  function w() {
    const R = x(), te = p(), Me = { ...s.assets };
    for (const ne of l ? [] : s.stickers) {
      const Ae = String((ne == null ? void 0 : ne.asset_id) || "");
      Ae && !Me[Ae] && i.has(Ae) && (Me[Ae] = { type: "comfy_image", filename: Ae });
    }
    const Te = l ? s.stickers.map((ne) => le(ne) ? { ...ne, source: { kind: "file", filename: we(ne) } } : ne) : s.stickers;
    pe.revision !== a.stateRevision && (pe = { revision: a.stateRevision, sceneState: vr({ ...s, stickers: Te, assets: Me, painting: null }) }), l && N(pe.sceneState);
    const se = Ml(pe.sceneState, n.frame), be = ge ? D() : null, Se = (ne) => {
      if (l && !ne.visible) return null;
      if (ge && B(ne)) return be;
      const Ae = z(ne);
      return Ae ? { media: Ae, revision: H(Ae) } : null;
    }, m = Zg(pe.sceneState, n.frame, s.stickers, { media: Se, paintLayers: te, evaluated: se }), f = R && (R === u || R === d) ? u.dataset.panoSrc : R, $ = re(R) ? { media: R, revision: H(R), coverage: In(s.coverage), source: f } : null, S = ee(), v = cx(E(), S, W());
    v.mode !== n.spaceMode && _(), c(v);
    const j = S ? J(pe.sceneState, se, Se) : null, ce = Y() ? { ...j, ...ue(j) } : null;
    return { background: $, layers: m, space: ce, content: j };
  }
  function N(R) {
    const te = new Map(s.stickers.map((Me) => [Me.id, Me.clip]));
    R.scene.clip = { ...s.scene.clip };
    for (const Me of R.stickers) {
      const Te = te.get(Me.id);
      Te && (Me.clip = { ...Te });
    }
  }
  function J(R, te, Me) {
    const Te = he(), se = Kg(Te, te.scene), be = se != null && se.url ? r.sceneBox(se.url) : null, Se = be && mu(se.kind, be), m = fe(), f = hx(m, R, te), $ = f != null && f.url ? r.sceneBox(f.url) : null, S = $ ? [{ box: mu(f.kind, $), value: f.value }] : [], v = Vx(R, n.frame, s.stickers, { media: Me, evaluated: te }), j = yu(yx(te, Se, v, S));
    return {
      evaluated: te,
      sceneUrls: Te ? Te.urls.filter(Boolean) : [],
      scene: se,
      stickerUrls: mx(m, R),
      sticker: f,
      stickers: v,
      sphere: j
    };
  }
  function ue(R) {
    var Me;
    const te = ((Me = R.sphere) == null ? void 0 : Me.radius) || ir;
    return {
      gizmo: F() ? A() : P(R.evaluated),
      grid: n.showGrid && !n.fullscreen ? Ix(te) : null,
      lines: y() ? k(te) : []
    };
  }
  function P(R) {
    const te = Z(), Me = R.stickers.find((Te) => Te.id === (te == null ? void 0 : te.id));
    return !ae(te) || !(Me != null && Me.active) ? null : { mode: n.gizmoMode, transform: pu(Me) };
  }
  function F() {
    return y() && n.selectedId === Cl;
  }
  let q = { revision: -1, span: -1, segments: [] };
  function k(R) {
    const te = oe();
    (q.revision !== a.stateRevision || q.span !== te) && (q = { revision: a.stateRevision, span: te, segments: Ox(Fx(s, te)) });
    const { segments: Me } = q, Te = Me.length ? [{ segments: Me, color: xC }] : [];
    if (!G()) return Te;
    const se = F() ? ay : wC;
    return [...Te, { segments: Ug(C(), g(R)), color: se }];
  }
  function A() {
    return !G() || !F() || o ? null : { mode: n.gizmoMode === "rotate" ? "rotate" : "translate", transform: pu({ ...C(), scale: 1 }) };
  }
  function I() {
    const { background: R, layers: te, space: Me } = Oe(), Te = t.width, se = t.height, be = U({ x: 0, y: 0, w: Te, h: se });
    let Se = !1;
    return !R && !te.length && !Me ? (r.clear(460551), Se = r.ready) : (r.clear(), Se = !!r.render({
      rect: be,
      camera: Me ? Nd(de(), Te, se, Me.sphere) : b(),
      background: R,
      layers: te,
      space: Me
    })), $e(), (n.worldSelectedId || F() || ve()) && V(), Se;
  }
  function K(R) {
    const { content: te } = Oe();
    return !te || !R.position ? da(R) : Gg(da(R), R.position, T(), te.sphere);
  }
  function X(R, te, Me, Te = null) {
    const { background: se, layers: be, content: Se } = Oe();
    if (!se && !be.length && !Se) return null;
    const m = Se && te.position ? Se : null;
    return r.render({ rect: R, camera: K(te), background: se, layers: be, space: m, owner: Me, clearColor: Te });
  }
  function Q(R) {
    return r.clear(460551), !!r.renderUnwrap({ rect: U(R), ...Oe() });
  }
  return {
    connect(R) {
      ({
        applySpaceMode: c,
        buildEditorViewPaintLayers: p,
        cameraFrustumLength: g,
        cameraShoots: y,
        cancelViewTransition: _,
        currentViewCamera: b,
        cutoutCamera: C,
        deviceRect: U,
        followPortSticker: D,
        frameViewDistance: T,
        getConnectedErpImage: x,
        getMediaRevisionToken: H,
        getStickerImage: z,
        hasSpaceContent: ee,
        isDecodedImageReady: re,
        isExternalSticker: B,
        isFreeSpaceView: G,
        isSpaceView: Y,
        isUploadingSticker: le,
        isWorldMenuShown: ve,
        portVideo: ge,
        sceneFiles: he,
        selectedWorldSticker: Z,
        spaceModeState: E,
        spaceOrigin: W,
        spaceViewState: de,
        stickerFiles: fe,
        stickerImageKey: we,
        syncFloatingViewButtonState: $e,
        timelineSpanFrames: oe,
        updateSelectionMenu: V,
        worldStickerEditable: ae
      } = R);
    },
    editorViewInput: Oe,
    endEditorViewFrame: ie,
    editorViewSceneState: Pe,
    isCameraSelected: F,
    renderEditorView: I,
    shotViewCamera: K,
    drawEditorViewShot: X,
    renderEditorViewUnwrap: Q
  };
}
function dy(e, t = !1) {
  const n = Fe(Oi(e), 0.05, 20), r = t ? 320 : 220;
  return n >= 1 ? { width: r, height: Math.max(1, Math.round(r / n)) } : { width: Math.max(1, Math.round(r * n)), height: r };
}
function dI(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: n,
    cutoutPreviewHost: r,
    editor: i,
    runtime: o,
    shotEditor: a,
    studio: s,
    uiState: l
  } = e;
  let d, u, c, p, g = null;
  function y(T) {
    if (!r || !T) return !1;
    const x = r.closest(".pano-camera-preview");
    if (!x) return !1;
    const H = Math.round(Number(x.clientWidth || r.clientWidth || 0)), z = Math.round(Number(x.clientHeight || r.clientHeight || 0));
    return Math.abs(H - Number(T.width || 0)) <= 1 && Math.abs(z - Number(T.height || 0)) <= 1;
  }
  function _(T, x) {
    if (i.outputPreviewRect = null, l.outputPreviewToggle.visible = i.mode !== "frame" && !!c(), s && (l.outputPreviewToggle.visible = !1), !a || !l.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      l.cameraPreview.visible = !1, l.cameraPreview.settled = !1, g = null;
      return;
    }
    const H = c();
    if (l.cameraPreview.visible = !0, l.cameraPreview.expanded = !!i.outputPreviewExpanded, !H || !n) {
      l.cameraPreview.ready = !1, l.cameraPreview.settled = !1, l.cameraPreview.width = 220, l.cameraPreview.height = 132, l.cameraPreview.label = H ? "Preview unavailable" : "Add Frame to preview", g = null;
      return;
    }
    const z = dy(H, !!i.outputPreviewExpanded);
    l.cameraPreview.width = z.width, l.cameraPreview.height = z.height;
    const ee = window.devicePixelRatio || 1, re = Math.max(1, z.width * ee), B = Math.max(1, z.height * ee), G = Math.min(1, t.width / re, t.height / B), Y = { width: Math.max(1, Math.floor(re * G)), height: Math.max(1, Math.floor(B * G)) }, le = [...x].some((he) => he !== yt.VIEW && he !== yt.OVERLAY), ve = !g || g.width !== Y.width || g.height !== Y.height || le;
    if (T && ve) {
      const he = u({ x: 0, y: t.height - Y.height, w: Y.width, h: Y.height }, H, "camera_preview");
      g = he ? Y : null, he && D(he);
    }
    if (!g) {
      l.cameraPreview.ready = !1, l.cameraPreview.label = p() ? "Loading preview" : "Connect ERP image", l.cameraPreview.settled = !1;
      return;
    }
    const ge = y(z);
    l.cameraPreview.ready = !0, l.cameraPreview.label = ge ? "" : "Loading preview", l.cameraPreview.settled = ge && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function b() {
    g = null;
  }
  let C = 0, U = !1;
  function D(T) {
    const x = ++C;
    createImageBitmap(T.canvas, T.x, T.y, T.width, T.height).then((H) => {
      var z;
      if (x !== C || !o.running) {
        H.close();
        return;
      }
      (z = n.getContext("bitmaprenderer")) == null || z.transferFromImageBitmap(H);
    }).catch((H) => {
      U || (U = !0, console.error("[PanoramaStickers] camera preview frame failed", H));
    });
  }
  return {
    connect(T) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: c,
        getConnectedErpImage: p
      } = T);
    },
    drawCutoutOutputPreview: _,
    forgetCameraPreviewFrame: b
  };
}
function fI(e) {
  const {
    cameraV2: t,
    canvas: n,
    ctx: r,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: d,
    type: u
  } = e;
  let c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe, V, ae, pe, xe, Oe, ie, Pe, w;
  function N(se) {
    const be = n.width, Se = n.height, m = ee();
    if (r.globalAlpha = 1, r.lineWidth = 1, r.clearRect(0, 0, be, Se), ae(), se && (s.backgroundDirty = !Oe(m)), i.showGrid && !i.fullscreen) {
      r.strokeStyle = "#3f3f46";
      for (let $ = 0; $ <= 16; $ += 1) {
        const S = m.x + m.w * $ / 16;
        r.beginPath(), r.moveTo(S, m.y), r.lineTo(S, m.y + m.h), r.stroke();
      }
      for (let $ = 0; $ <= 8; $ += 1) {
        const S = m.y + m.h * $ / 8;
        r.beginPath(), r.moveTo(m.x, S), r.lineTo(m.x + m.w, S), r.stroke();
      }
      r.strokeStyle = "rgba(250, 250, 250, 0.86)", r.lineWidth = 1.2, r.beginPath(), r.moveTo(m.x, m.y + m.h / 2), r.lineTo(m.x + m.w, m.y + m.h / 2), r.stroke(), r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center";
      const f = m.y + m.h * 0.57;
      r.fillText("Left", m.x + m.w * 0.25, f), r.fillText("Front", m.x + m.w * 0.5, f), r.fillText("Right", m.x + m.w * 0.75, f), r.fillText("Back", m.x + 38, f), r.fillText("Back", m.x + m.w - 38, f);
    }
  }
  function J(se, be, Se = 1) {
    let m = !1;
    r.strokeStyle = be, r.lineWidth = Se, r.beginPath();
    for (const f of se) {
      const $ = we(f);
      if (!$) {
        m = !1;
        continue;
      }
      m ? r.lineTo($.x, $.y) : (r.moveTo($.x, $.y), m = !0);
    }
    r.stroke();
  }
  function ue(se) {
    const be = n.width, Se = n.height;
    if (r.clearRect(0, 0, be, Se), ae(), se && (s.backgroundDirty = !xe()), i.showGrid && !i.fullscreen && _().space)
      P();
    else if (i.showGrid && !i.fullscreen) {
      for (let f = -180; f <= 180; f += 15) {
        const $ = [];
        for (let S = -89; S <= 89; S += 4) $.push(Nn(f, S));
        J($, "#3f3f46", f % 90 === 0 ? 1.3 : 1);
      }
      for (let f = -75; f <= 75; f += 15) {
        const $ = [];
        for (let S = -180; S <= 180; S += 4) $.push(Nn(S, f));
        J($, f === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", f === 0 ? 1.5 : 1);
      }
      const m = [
        { name: "Left", dir: Nn(-90, 0) },
        { name: "Front", dir: Nn(0, 0) },
        { name: "Right", dir: Nn(90, 0) },
        { name: "Back", dir: Nn(180, 0) }
      ];
      r.fillStyle = "rgba(250, 250, 250, 0.42)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", m.forEach((f) => {
        const $ = we(f.dir);
        $ && r.fillText(f.name, $.x, $.y + 24);
      });
    }
  }
  function P() {
    const se = Nd(w(), n.width, n.height, p()), be = Ma(se, [0, 0, 0], n.width, n.height);
    be && (r.fillStyle = "rgba(255, 221, 87, 0.9)", r.font = "500 11px Geist, sans-serif", r.textAlign = "center", r.fillText("ERP origin", be.x, be.y - 12));
  }
  function F(se, be) {
    const Se = fe(se), m = Nn(Number(Se.yaw_deg || 0), Number(Se.pitch_deg || 0)), f = i.mode === "unwrap" ? $e(m) : null, $ = f ? f.x : null, S = i.mode === "pano" ? 28 : 20, v = [
      ie(se, 0, S, $),
      ie(se, 1, S, $),
      ie(se, 2, S, $),
      ie(se, 3, S, $)
    ];
    Vd(r, v, { selected: be });
  }
  function q(se, be = []) {
    if (!(!se || !Array.isArray(be) || be.length < 4)) {
      se.beginPath(), se.moveTo(be[0].x, be[0].y);
      for (let Se = 1; Se < 4; Se += 1) se.lineTo(be[Se].x, be[Se].y);
      se.closePath();
    }
  }
  function k(se, be, Se) {
    const m = Array.isArray(se == null ? void 0 : se.corners) ? se.corners : [];
    if (m.length < 4) return;
    const f = Fe(Number((se == null ? void 0 : se.visibilityAlpha) ?? 1), 0, 1);
    if (f <= 0.01) return;
    const $ = r.globalAlpha;
    r.globalAlpha = $ * f;
    const S = Se ? "rgba(255, 116, 116, 0.96)" : be ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", v = Se ? "rgba(255, 89, 89, 0.08)" : be ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", j = be ? 3.2 : 2.6;
    q(r, m), r.fillStyle = v, r.fill(), r.strokeStyle = S, r.lineWidth = j, r.stroke(), r.save(), r.strokeStyle = S, r.lineWidth = be ? 3.2 : 2.6, r.lineCap = "round";
    const ce = Array.isArray(se == null ? void 0 : se.edgeMidpoints) && se.edgeMidpoints.length >= 4 ? se.edgeMidpoints : [
      { edge: "top", x: (m[0].x + m[1].x) * 0.5, y: (m[0].y + m[1].y) * 0.5 },
      { edge: "right", x: (m[1].x + m[2].x) * 0.5, y: (m[1].y + m[2].y) * 0.5 },
      { edge: "bottom", x: (m[2].x + m[3].x) * 0.5, y: (m[2].y + m[3].y) * 0.5 },
      { edge: "left", x: (m[3].x + m[0].x) * 0.5, y: (m[3].y + m[0].y) * 0.5 }
    ], ne = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ae = be ? 12 : 9;
    ce.forEach((Ce) => {
      const me = ce.find((Ge) => (Ge == null ? void 0 : Ge.edge) === ne[Ce == null ? void 0 : Ce.edge]) || {
        x: (m[0].x + m[1].x + m[2].x + m[3].x) * 0.25,
        y: (m[0].y + m[1].y + m[2].y + m[3].y) * 0.25
      }, Ie = me.x - Ce.x, Ve = me.y - Ce.y, Ke = Math.hypot(Ie, Ve) || 1;
      r.beginPath(), r.moveTo(Ce.x, Ce.y), r.lineTo(Ce.x + Ie / Ke * Ae, Ce.y + Ve / Ke * Ae), r.stroke();
    }), r.restore(), r.globalAlpha = $;
  }
  function A(se, be, Se, m) {
    const f = Fe(Number((be == null ? void 0 : be.visibilityAlpha) ?? 1), 0, 1);
    if (f <= 0.01) return;
    if (Z(se)) {
      k(be, Se, m);
      return;
    }
    if (E(se)) {
      const S = r.globalAlpha;
      r.globalAlpha = S * z(se) * f, i.mode === "frame" ? (r.strokeStyle = Se ? "rgba(250, 250, 250, 0.9)" : m ? "rgba(255, 89, 89, 0.72)" : "#71717a", r.lineWidth = Se ? 2 : 1, q(r, be.corners), r.stroke()) : F(se, Se), r.globalAlpha = S;
      return;
    }
    const $ = r.globalAlpha;
    r.globalAlpha = $ * f, r.fillStyle = Se ? "rgba(0, 112, 243, 0.24)" : m ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", q(r, be.corners), r.fill(), r.strokeStyle = Se ? "rgba(255, 255, 255, 1)" : m ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", r.lineWidth = Se ? 2.8 : 1.9, q(r, be.corners), r.stroke(), r.globalAlpha = $;
  }
  function I(se, be, Se) {
    if (E(se)) {
      V0(r, be, { accent: Se });
      return;
    }
    const m = !(Z(se) && B());
    r.fillStyle = Se, m && be.corners.forEach((f) => {
      r.beginPath(), r.arc(f.x, f.y, 6.5, 0, Math.PI * 2), r.fill();
    }), m && Z(se) && (r.strokeStyle = Se, r.lineCap = "round", r.lineWidth = 4, be.edgeMidpoints.forEach((f) => {
      var Ae, Ce, O, me;
      const $ = (((Ae = f.b) == null ? void 0 : Ae.x) ?? f.x) - (((Ce = f.a) == null ? void 0 : Ce.x) ?? f.x), S = (((O = f.b) == null ? void 0 : O.y) ?? f.y) - (((me = f.a) == null ? void 0 : me.y) ?? f.y), v = Math.hypot($, S) || 1, j = $ / v, ce = S / v, ne = 10;
      r.beginPath(), r.moveTo(f.x - j * ne, f.y - ce * ne), r.lineTo(f.x + j * ne, f.y + ce * ne), r.stroke();
    }), r.lineCap = "butt"), W(se) || (r.strokeStyle = "rgba(250, 250, 250, 0.9)", r.lineWidth = 1.8, r.beginPath(), r.moveTo(be.rotateStemBase.x, be.rotateStemBase.y), r.lineTo(be.rotateHandle.x, be.rotateHandle.y), r.stroke(), r.fillStyle = Se, r.beginPath(), r.arc(be.rotateHandle.x, be.rotateHandle.y, 10, 0, Math.PI * 2), r.fill());
  }
  function K() {
    var $;
    const se = i.mode === "frame" ? [] : H(), be = se.length > 1, Se = l ? C() : T(), m = Se.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${Z(S) ? "frame" : Number((S == null ? void 0 : S.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Se || i._sortedItemsCache.orderKey !== m) && (i._sortedItemsCache = {
      src: Se,
      orderKey: m,
      sorted: [...Se]
    });
    const f = i._sortedItemsCache.sorted;
    for (const S of f) {
      const v = i.mode !== "frame" && !be && ve(S);
      if (i.mode === "frame" && !v) continue;
      const j = E(S), ce = Z(S), ne = le(S);
      if (!j && !ce || he(S) && !Pe(S)) continue;
      const Ae = de(S);
      if (u !== "stickers" && !Ae.visible)
        continue;
      const Ce = Fe(Number((Ae == null ? void 0 : Ae.visibilityAlpha) ?? 1), 0, 1);
      if (Ce <= 0.01) continue;
      const O = ce && l && i.mode === "pano" ? Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (r.save(), r.globalAlpha *= O, A(S, Ae, v, ne), v && Ae.visible) {
        const me = ne ? "#ff4d4f" : j && G(S) ? "#f59e0b" : "#0070f3", Ie = r.globalAlpha;
        r.globalAlpha = Ie * Ce, I(S, Ae, me), r.globalAlpha = Ie;
      }
      r.restore();
    }
    if (l && i.mode === "pano" && !b() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const S = i.cutoutPanoFrameVisual, v = Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      r.save(), r.globalAlpha *= v, k(S.geom, S.selected, S.locked), S.selected && I(
        S.item,
        S.geom,
        S.locked ? "#ff4d4f" : "#0070f3"
      ), r.restore();
    }
    if (be) {
      const S = x(se);
      if (S != null && S.visible) {
        const v = c(se) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(S.corners[0].x, S.corners[0].y);
        for (let j = 1; j < S.corners.length; j += 1) r.lineTo(S.corners[j].x, S.corners[j].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = v, S.corners.forEach((j) => {
          r.beginPath(), r.arc(j.x, j.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      }
    } else
      se.forEach((S) => {
        if (!W(S) && !ge(S)) return;
        const v = de(S);
        if (!(v != null && v.visible)) return;
        const j = le(S) ? "#ff4d4f" : "#0070f3";
        r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.95)", r.lineWidth = 2, r.setLineDash([6, 4]), r.beginPath(), r.moveTo(v.corners[0].x, v.corners[0].y);
        for (let ce = 1; ce < v.corners.length; ce += 1) r.lineTo(v.corners[ce].x, v.corners[ce].y);
        r.closePath(), r.stroke(), r.setLineDash([]), r.fillStyle = j, v.corners.forEach((ce) => {
          r.beginPath(), r.arc(ce.x, ce.y, 6.5, 0, Math.PI * 2), r.fill();
        }), r.restore();
      });
    if ((($ = i.interaction) == null ? void 0 : $.kind) === "marquee_select") {
      const S = pe(i.interaction.start, i.interaction.current);
      r.save(), r.strokeStyle = "rgba(255, 255, 255, 0.9)", r.fillStyle = "rgba(255, 255, 255, 0.08)", r.lineWidth = 1, r.setLineDash([5, 4]), r.beginPath(), r.rect(S.x0, S.y0, S.x1 - S.x0, S.y1 - S.y0), r.fill(), r.stroke(), r.restore();
    }
  }
  function X(se) {
    const be = b(), Se = U(be);
    if (!be || !Se)
      return r.clearRect(0, 0, n.width, n.height), se && o.clear(657930), !1;
    const m = { x: Se.x, y: Se.y, w: Se.w, h: Se.h }, { rect: f, shot: $ } = Xg(be, Se, { width: n.width, height: n.height }), S = Q(m);
    if (r.clearRect(0, 0, n.width, n.height), se) {
      o.clear(657930);
      const v = g(f), j = !!y(v, $, void 0, 657930);
      j || o.clear(1118481, v), s.backgroundDirty = !j;
    }
    return r.save(), r.fillStyle = "rgba(0, 0, 0, 0.58)", r.beginPath(), r.rect(0, 0, n.width, n.height), r.roundRect(m.x, m.y, m.w, m.h, S), r.fill("evenodd"), r.restore(), r.save(), r.strokeStyle = ay, r.globalAlpha = 0.62, r.lineWidth = 2, r.beginPath(), r.roundRect(m.x + 1, m.y + 1, m.w - 2, m.h - 2, Math.max(0, S - 1)), r.stroke(), r.restore(), !0;
  }
  function Q(se) {
    const be = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * be, Number((se == null ? void 0 : se.w) || 0) * 0.5, Number((se == null ? void 0 : se.h) || 0) * 0.5);
  }
  function R() {
    var j, ce;
    if (((j = i.interaction) == null ? void 0 : j.kind) !== "paint_lasso_fill") return;
    const se = i.interaction.stroke, be = (ce = se == null ? void 0 : se.geometry) == null ? void 0 : ce.points;
    let Se;
    if (i.mode === "frame") {
      const ne = b(), Ae = D(ne);
      Se = oe(be, ne, Ae);
    } else
      Se = V(be);
    if (!Array.isArray(Se) || Se.length < 3) return;
    const m = String((se == null ? void 0 : se.layerKind) || "") === "mask", f = (se == null ? void 0 : se.color) || { r: 1, g: 0.25, b: 0.25 }, $ = Math.round(Number(f.r || 0) * 255), S = Math.round(Number(f.g || 0) * 255), v = Math.round(Number(f.b || 0) * 255);
    r.save(), r.beginPath(), r.moveTo(Number(Se[0].x || 0), Number(Se[0].y || 0));
    for (let ne = 1; ne < Se.length; ne++) r.lineTo(Number(Se[ne].x || 0), Number(Se[ne].y || 0));
    r.closePath(), m ? (r.lineWidth = 2, r.setLineDash([6, 6]), r.lineDashOffset = 0, r.strokeStyle = "rgba(0,0,0,0.96)", r.stroke(), r.lineDashOffset = -6, r.strokeStyle = "rgba(255,255,255,0.96)", r.stroke(), r.setLineDash([]), r.lineDashOffset = 0) : (r.lineWidth = 1.5, r.setLineDash([6, 4]), r.strokeStyle = `rgba(${$},${S},${v},1)`, r.stroke(), r.setLineDash([])), r.restore();
  }
  function te() {
    const se = i.frameRollOverlayVisual, be = Fe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(se != null && se.shot) || be <= 1e-4) return;
    const Se = D(se.shot);
    if (!Se) return;
    const m = { x: Se.x + Se.w * 0.5, y: Se.y + Se.h * 0.5 }, f = Number(se.shot.roll_deg ?? se.shot.rot_deg ?? 0) * Sr, $ = Math.hypot(Se.w, Se.h) * 0.55, S = Math.cos(f) * $, v = Math.sin(f) * $;
    r.save(), r.globalAlpha *= be, r.beginPath(), r.rect(Se.x, Se.y, Se.w, Se.h), r.clip(), r.translate(m.x, m.y), r.rotate(f);
    const j = Math.max(12, Math.min(Se.w, Se.h) / 6);
    r.beginPath();
    for (let ce = -$; ce <= $; ce += j)
      r.moveTo(ce, -$), r.lineTo(ce, $);
    for (let ce = -$; ce <= $; ce += j)
      r.moveTo(-$, ce), r.lineTo($, ce);
    r.lineWidth = 1, r.strokeStyle = "rgba(255, 255, 255, 0.22)", r.stroke(), r.setTransform(1, 0, 0, 1, 0, 0), r.beginPath(), r.moveTo(m.x - S, m.y - v), r.lineTo(m.x + S, m.y + v), r.lineWidth = 1.5, r.setLineDash([8, 6]), r.strokeStyle = "rgba(255, 255, 255, 0.92)", r.shadowColor = "rgba(0, 0, 0, 0.8)", r.shadowBlur = 3, r.stroke(), r.setLineDash([]), r.restore();
  }
  function Me() {
    return !l || !b() || t && Y() || d && !re() ? 0 : PC;
  }
  function Te() {
    const se = Fe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (se <= 1e-4 || !l || i.mode !== "pano") return;
    const be = b(), Se = be ? de(be) : null, m = Array.isArray(Se == null ? void 0 : Se.corners) && Se.corners.length >= 4 ? Se.corners.map((S) => ({ x: Number(S.x || 0), y: Number(S.y || 0) })) : null;
    Se != null && Se.visible && m && (i.cutoutPanoDimCorners = m), be && (Se != null && Se.visible) && m && (i.cutoutPanoFrameVisual = {
      item: be,
      geom: Se,
      selected: ve(be),
      locked: le(be)
    });
    const f = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, $ = Se != null && Se.visible ? m : f ? i.cutoutPanoDimCorners || [] : [];
    if (r.save(), r.fillStyle = `rgba(0, 0, 0, ${se})`, r.beginPath(), r.rect(0, 0, n.width, n.height), $.length >= 4) {
      r.moveTo($[0].x, $[0].y);
      for (let S = 1; S < 4; S += 1) r.lineTo($[S].x, $[S].y);
      r.closePath();
    }
    r.fill("evenodd"), r.restore();
  }
  return {
    connect(se) {
      ({
        areAllSelectedItemsLocked: c,
        contentSphere: p,
        deviceRect: g,
        drawEditorViewShot: y,
        editorViewInput: _,
        getActiveCutoutShot: b,
        getCutoutSelectableItemsForDisplay: C,
        getFrameViewLayout: U,
        getFrameViewRect: D,
        getList: T,
        getMultiSelectionGeom: x,
        getSelectedItems: H,
        getStickerDisplayAlpha: z,
        getUnwrapRect: ee,
        isCameraSelected: re,
        isErpCamera: B,
        isExternalSticker: G,
        isFreeSpaceView: Y,
        isItemLocked: le,
        isItemSelected: ve,
        isRasterObjectItem: ge,
        isSceneSticker: he,
        isShotItem: Z,
        isStickerItem: E,
        isStrokeGroupItem: W,
        objectGeom: de,
        poseOf: fe,
        projectDir: we,
        projectDirUnwrap: $e,
        projectErpLassoPointsToFrameRect: oe,
        projectLassoPointsToCurrentView: V,
        rebuildPaintEngineIfNeeded: ae,
        rectFromPoints: pe,
        renderEditorView: xe,
        renderEditorViewUnwrap: Oe,
        sampleStickerEdge: ie,
        sceneStickerShown: Pe,
        spaceViewState: w
      } = se);
    },
    drawGridUnwrap: N,
    drawGridPano: ue,
    drawObjects: K,
    drawFrameViewBackground: X,
    drawLassoOutlineOverlay: R,
    drawFrameRollOverlay: te,
    getCutoutPanoDimTarget: Me,
    drawCutoutPanoPassepartout: Te
  };
}
function pI(e) {
  const {
    app: t,
    backgroundCanvas: n,
    canvas: r,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: d,
    shotEditor: u,
    stageWrap: c,
    state: p,
    timeline: g,
    type: y,
    uiState: _,
    viewController: b
  } = e;
  let C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe, V = () => {
  };
  function ae(Q = /* @__PURE__ */ new Set()) {
    B();
    const R = l.backgroundDirty;
    u && (E(), U(R, Q)), i.mode === "frame" ? (l.frameSafeRect = he(), x(R)) : i.mode === "unwrap" ? z(R) : H(R), D(), re(), fe(), ee(), T(), _.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && oe(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, n.style.opacity = "1"), u && _.cameraPreview && (_.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const te = ve();
    _.stageStatus = te.status, _.stageStatusDetail = te.detail, te.status === er ? (c == null || c.removeAttribute("data-stage-ready"), c == null || c.setAttribute("data-stage-loading-kind", te.detail)) : (c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind"));
  }
  function pe(Q = i.interaction) {
    if (y !== "stickers" || i.mode !== "pano") return !1;
    const R = String((Q == null ? void 0 : Q.kind) || "");
    return R === "move" || R === "scale" || R === "scale_x" || R === "scale_y" || R === "rotate" ? !0 : R === "move_multi" ? Array.isArray(Q == null ? void 0 : Q.stickerSnapshots) && Q.stickerSnapshots.length > 0 : !1;
  }
  function xe() {
    return !!i.interaction || !!g.drag;
  }
  function Oe() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = p, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = le();
  }
  function ie(Q = {}) {
    var m, f, $, S, v, j, ce, ne;
    const R = Q.reason ?? yt.STATE, te = !!Q.localOnly, Me = Q.externalSync === !0, Te = String(Q.cause || ""), se = String(((m = i.interaction) == null ? void 0 : m.kind) || "");
    (!te || se === "view" || se === "pan_frame" || pe() || !!i.viewTransition || Te === "mode" || Te === "frame_view" || Te === "cutout_frame") && (l.backgroundDirty = !0), te && ge() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!te || Te === "selection" || Te === "mode" || Te === "cutout_frame") && (we(), $e()), xe() ? l.nodePreviewPending = !0 : Oe(), Me && (($ = (f = a.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || $.call(f), (S = a.setDirtyCanvas) == null || S.call(a, !0, !1)), Me && !te && ((j = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || j.call(v, !0, !0), (ne = (ce = t == null ? void 0 : t.canvas) == null ? void 0 : ce.setDirty) == null || ne.call(ce, !0, !0)), d.requestDraw(R);
  }
  function Pe() {
    const Q = r.getBoundingClientRect(), R = Math.max(2, Math.round(Q.width)), te = Math.max(2, Math.round(Q.height)), Me = window.devicePixelRatio || 1, Te = [r.width, r.height, n.width, n.height].join("x");
    (r.width !== R || r.height !== te) && (r.width = R, r.height = te);
    const se = Tx(Q.width || R, Q.height || te, Me, window.innerWidth || Q.width, window.innerHeight || Q.height);
    return o.resize(se.width, se.height), [r.width, r.height, n.width, n.height].join("x") === Te ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && w(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function w(Q) {
    Q(), d.wake();
  }
  function N() {
    return !!i.viewTransition || !!b.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || xe();
  }
  function J(Q = performance.now(), R = /* @__PURE__ */ new Set()) {
    var be;
    l.nodePreviewPending && !xe() && Oe(), R.forEach((Se) => l.reasons.add(Se)), R.size && (l.dirty = !0), [...R].some((Se) => Se !== yt.OVERLAY) && (l.backgroundDirty = !0), W(), l.lastTickTs > 0 ? Math.max(1e-3, (Q - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Q;
    const te = i.mode === "frame" && ((be = i.interaction) == null ? void 0 : be.kind) === "roll_frame" ? i.interaction : null;
    te != null && te.shot && (i.frameRollOverlayVisual = { shot: te.shot });
    const Me = te ? 1 : 0;
    if (Math.abs(Me - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Me, i.frameRollOverlayStartTs = Q), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Me) > 1e-6) {
      const Se = Fe(
        (Q - Number(i.frameRollOverlayStartTs || Q)) / NC,
        0,
        1
      );
      i.frameRollOverlayAlpha = jn(
        Number(i.frameRollOverlayFrom || 0),
        Me,
        zc(Se)
      ), Se >= 1 && (i.frameRollOverlayAlpha = Me, Me === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const Te = Y();
    if (Math.abs(Te - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = Te, i.cutoutPanoDimStartTs = Q), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Te) > 1e-6) {
      const Se = Fe(
        (Q - Number(i.cutoutPanoDimStartTs || Q)) / Th,
        0,
        1
      );
      i.cutoutPanoDimAlpha = jn(
        Number(i.cutoutPanoDimFrom || 0),
        Te,
        zc(Se)
      ), Se >= 1 && (i.cutoutPanoDimAlpha = Te), Se >= 1 && Te === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const se = u && G() ? 1 : 0;
    if (Math.abs(se - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = se, i.cutoutPanoFrameStartTs = Q), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - se) > 1e-6) {
      const Se = Fe(
        (Q - Number(i.cutoutPanoFrameStartTs || Q)) / Th,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = jn(
        Number(i.cutoutPanoFrameFrom || 0),
        se,
        zc(Se)
      ), Se >= 1 && (i.cutoutPanoFrameAlpha = se, se === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const Se = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), m = Fe((Q - Number(i.outputPreviewAnimStartTs || 0)) / Se, 0, 1), $ = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? EC(m) : FC(m);
      i.outputPreviewAnim = jn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, $), l.dirty = !0, m >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: Se, done: m } = UP(i.viewTransition, Q);
      if (i.viewPosition = Se.position, i.viewYaw = Se.yaw_deg, i.viewPitch = Se.pitch_deg, i.viewFov = Se.hFOV_deg, i.viewDistance = Se.distance, m) {
        const { end: f } = i.viewTransition;
        i.viewTransition = null, f && C(f), de();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, b.stepInertia(Q) && (i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const Se = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ae(Se);
    }
  }
  function ue(Q) {
    try {
      Q();
    } catch (R) {
      const te = String((R == null ? void 0 : R.stack) || (R == null ? void 0 : R.message) || R || "unknown editor frame error");
      l.tickErrorSignature !== te && (l.tickErrorSignature = te, console.error("[PanoramaStickers] editor frame failed", R)), _.stageStatus = Hn, _.stageStatusDetail = "frame", c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind");
    }
  }
  function P(Q = performance.now(), R = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const te = rS();
    ue(() => J(Q, R)), iS(te);
  }
  function F() {
    !l.running || !Pe() || ue(() => {
      l.dirty = !1, ae(/* @__PURE__ */ new Set([yt.RESIZE]));
    });
  }
  const q = new ResizeObserver(F);
  let k = null;
  function A() {
    k == null || k.removeEventListener("change", I), k = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), k.addEventListener("change", I);
  }
  function I() {
    A(), F();
  }
  function K() {
    V = nS("editor", () => {
      var Q;
      return {
        type: y,
        readOnly: s,
        mode: i.mode,
        interaction: ((Q = i.interaction) == null ? void 0 : Q.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!Z.playing
      };
    });
  }
  function X() {
    V(), l.running = !1, d.stop(), q.disconnect(), k.removeEventListener("change", I);
  }
  return {
    connect(Q) {
      ({
        applyViewTransitionEnd: C,
        drawCutoutOutputPreview: U,
        drawCutoutPanoPassepartout: D,
        drawFrameRollOverlay: T,
        drawFrameViewBackground: x,
        drawGridPano: H,
        drawGridUnwrap: z,
        drawLassoOutlineOverlay: ee,
        drawObjects: re,
        endEditorViewFrame: B,
        getActiveCutoutShot: G,
        getCutoutPanoDimTarget: Y,
        getSharedLivePaintSurface: le,
        getStageImageStatus: ve,
        isPaintCompositeInteraction: ge,
        measureFrameSafeRect: he,
        playback: Z,
        rebuildPaintEngineIfNeeded: E,
        syncCutoutShot: W,
        syncFloatingViewButtonState: de,
        syncFrameRollKnob: fe,
        syncLookAtFrameButtonState: we,
        syncViewToggleState: $e,
        updateSelectionMenu: oe
      } = Q);
    },
    requestDraw: ie,
    syncCanvasSize: Pe,
    startAnimation: w,
    editorAnimating: N,
    tick: P,
    stageResizeObserver: q,
    watchPixelRatio: A,
    sampleEditorDiagnostics: K,
    stopRenderLoop: X
  };
}
function hI(e) {
  const {
    cameraV2: t,
    editor: n,
    hideSidebar: r,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: d,
    runtime: u,
    sceneV2: c,
    shotEditor: p,
    state: g,
    studio: y,
    type: _,
    uiState: b
  } = e;
  let C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe, V, ae, pe, xe, Oe, ie, Pe, w, N = 0;
  function J() {
    b.toolButtons.forEach((R) => {
      const te = R.attr === "data-tool-mode", Me = R.attr === "data-paint-tool", Te = R.attr === "data-mask-tool";
      R.active = te ? R.value === n.primaryTool : Me ? R.key === n.paintTool : Te ? R.key === n.maskTool : !1, R.pressed = R.active ? "true" : R.pressed == null ? null : "false";
    });
  }
  function ue() {
    if (y && ro(b.toolButtons, "value", "add-camera", { disabled: le() }), _ !== "cutout") return;
    const R = D();
    ro(b.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: R ? "Look At Frame" : "Add Frame",
      tip: R ? "Look at frame" : "Add frame",
      icon: R ? Ye.camera : Ye.plus_circle
    });
  }
  function P() {
    const R = eN({
      spaceView: we(),
      spaceMode: ol(n.spaceMode, n.viewTransition),
      readOnly: d,
      frameMode: p && n.mode === "frame",
      showGrid: n.showGrid
    });
    b.space && Object.assign(b.space, R.space);
    for (const [te, Me] of Object.entries(R.buttons)) ro(b.floatingButtons, "action", te, Me);
  }
  function F() {
    var Me;
    const R = tN({ hasShot: !!D(), erp: he(), hidden: le() && !U(), studio: y });
    n.mode === "frame" && R.disabled && (y ? oe(D()) : n.mode = "pano"), n.outputPreviewRect = null, b.viewButtons.forEach((Te) => {
      const se = Te.key === n.mode;
      Te.pressed = se ? "true" : "false", Te.visible = !(Te.key === "frame" && !p), Te.key === "frame" ? Object.assign(Te, R) : Te.disabled = !1;
    });
    const te = p && n.mode === "frame" ? D() : null;
    b.frameRail.visible = !!te, b.frameRail.disabled = d || (te == null ? void 0 : te.locked) === !0, b.frameRollKnob.visible = !!te && !d && te.locked !== !0, b.frameRollKnob.disabled = d || (te == null ? void 0 : te.locked) === !0, b.frameRollKnob.rollDeg = Number((te == null ? void 0 : te.roll_deg) ?? (te == null ? void 0 : te.rot_deg) ?? 0), b.frameRollKnob.displayValue = yo(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((Me = n.interaction) == null ? void 0 : Me.kind) === "roll_frame", b.frameRollKnob.armed = !!te && n.altModifier === !0, b.frameRail.rollKnob = b.frameRollKnob, b.frameRail.aspectLabel = te ? Dr(te) : "", b.frameRail.aspectChoices = Z0(te ? String(Dr(te)) : null, { erp: y, coverage: g.coverage }), te || (b.frameRail.aspectOpen = !1), b.outputPreviewToggle.visible = _ === "cutout" && n.mode !== "frame" && !!D(), p && b.cameraPreview && (b.cameraPreview.visible = n.mode !== "frame" && C(), b.cameraPreview.expanded = !!n.outputPreviewExpanded, b.cameraPreview.settled = b.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), P(), W() ? Pe(n.pointerPos) : pe(n.mode === "pano" ? "grab" : "default");
  }
  function q() {
    var te;
    const R = n.mode === "frame" ? D() : null;
    b.frameRollKnob.visible = !!R && !d && R.locked !== !0, b.frameRollKnob.rollDeg = Number((R == null ? void 0 : R.roll_deg) ?? (R == null ? void 0 : R.rot_deg) ?? 0), b.frameRollKnob.displayValue = yo(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((te = n.interaction) == null ? void 0 : te.kind) === "roll_frame", b.frameRollKnob.armed = !!R && n.altModifier === !0;
  }
  function k() {
    J();
    const R = XP({
      editor: n,
      swatches: sl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: dr,
      colorsApproximatelyEqual: cl,
      rgb01ToHsv: Vu,
      hsv01ToRgb: Lu,
      getBrushPresetIdForTool: T,
      isActiveLassoTool: ge
    });
    if (Object.assign(b.paintDock, R), ie(), !R.visible) {
      i && (i.hidden = !0);
      return;
    }
    N && (clearTimeout(N), N = 0), o && (!R.colorEnabled && i && !i.hidden && (N = window.setTimeout(() => {
      i.hidden = !0, b.paintDock.colorPopOpen = !1, N = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", R.pickerHueColor), i.style.setProperty("--picker-sat", R.pickerSat), i.style.setProperty("--picker-val", R.pickerVal), i.style.setProperty("--picker-hue", R.pickerHue)), a && (a.style.left = R.pickerSvLeft, a.style.top = R.pickerSvTop), s && (s.style.left = R.pickerHueLeft));
  }
  function A() {
    const R = V(p && n.mode === "frame" ? D() : ee());
    R && (n.panelLastValues = {
      yaw_deg: Number(R.yaw_deg || 0),
      pitch_deg: Number(R.pitch_deg || 0),
      hFOV_deg: Number(R.hFOV_deg || (_ === "stickers" ? 30 : 90)),
      vFOV_deg: Number(R.vFOV_deg || (_ === "stickers" ? 30 : 60)),
      rot_deg: Number(R.rot_deg || 0),
      roll_deg: Number(R.roll_deg || 0),
      aspect_id: Dr(R)
    }, I());
  }
  function I() {
    xe(), Oe(), X();
  }
  function K() {
    const R = p && n.mode === "frame" ? D() : null;
    return [...re(), ae(), R].some((te) => de(te) ? Us(te) : fe(te) && le() && Us(g.camera));
  }
  function X() {
    if (r) return;
    g.ui_settings = g.ui_settings || {};
    const R = qP(g.ui_settings);
    if (l) {
      b.sidePanel = JP({
        coverage: g.coverage,
        uiSettings: R,
        normalizeCoverageValue: In
      });
      return;
    }
    const te = ee(), Me = p && n.mode === "frame" ? D() : null, Te = Me || te, se = Me ? [Me] : re(), be = Me ? "shot" : B();
    if (se.length > 1 && (n.panelLastValues = n.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Te && be !== "stroke") {
      const Ce = V(Te);
      n.panelLastValues = {
        yaw_deg: Number(Ce.yaw_deg || 0),
        pitch_deg: Number(Ce.pitch_deg || 0),
        hFOV_deg: Number(Ce.hFOV_deg || (be === "image" ? 30 : 90)),
        vFOV_deg: Number(Ce.vFOV_deg || (be === "image" ? 30 : 60)),
        rot_deg: Number(Ce.rot_deg || 0),
        roll_deg: Number(Ce.roll_deg || 0),
        aspect_id: Dr(Ce)
      }, de(Te) && (n.panelLastValues.opacity = Ii(Te, n.frame).opacity * 100);
    }
    const Se = n.panelLastValues || (_ === "stickers" || be === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), m = be === "stroke" ? null : Te, f = ae(), $ = t && (be === "shot" || be === "frame") && ve(), S = f ? Xw(f, n.frame) : $ ? { ...m, ...Uw(g.camera, n.frame), vFOV_deg: m.vFOV_deg } : de(m) ? n.panelLastValues : m || Se, v = f ? w(f) : !!m && !E(m);
    n.panelWasEnabled = v, ue();
    let j = null;
    if (Me) {
      const Ce = Y({ item: Me, kind: "shot", label: "Frame" });
      j = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Ce.label,
        currentIcon: Ce.icon || null,
        items: [{
          id: String(Me.id || ""),
          label: Ce.label,
          icon: Ce.icon || null,
          active: !0
        }]
      };
    } else if (_ === "stickers" || _ === "cutout") {
      const Ce = [{
        id: "",
        label: _ === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (_ === "stickers") {
        const Ie = D();
        Ie && Ce.push({ id: Ie.id, label: "Camera", icon: G("frame"), item: Ie, kind: "frame" }), z().forEach((Ve, Ke) => {
          var ct, At;
          if (!Ve || de(Ve) && !Ve.visible) return;
          const Ge = c ? uu(Ve) : Z(Ve) ? String(Ve.id || Bd) : String(((At = (ct = g.assets) == null ? void 0 : ct[Ve.asset_id]) == null ? void 0 : At.name) || Ve.asset_id || Ve.id), Ue = `${Ke + 1}. ${Ge}${Z(Ve) && $e(Ve) ? " (hidden)" : ""}`, tt = Y({ item: Ve, label: Ue, kind: "image" });
          Ce.push({ id: Ve.id, label: tt.label, icon: tt.icon, item: Ve, kind: "image" });
        });
      } else
        x().forEach((Ie) => {
          if (!(Ie != null && Ie.item)) return;
          const Ve = Y(Ie);
          Ce.push({ id: Ie.item.id, label: Ve.label, icon: Ve.icon, item: Ie.item, kind: Ie.kind });
        });
      const O = (m == null ? void 0 : m.id) || "", me = f ? { label: uu(f), icon: Ye.globe } : Ce.find((Ie) => Ie.id === O) || Ce[0];
      j = {
        label: "Selection",
        open: !1,
        disabled: Ce.length <= 1,
        currentLabel: me.label,
        currentIcon: me.icon || null,
        items: Ce.map((Ie) => ({
          id: Ie.id,
          label: Ie.label,
          icon: Ie.icon || null,
          active: Ie.id === O
        }))
      };
    }
    const ce = [], ne = (Ce, O, me, Ie, Ve) => {
      const Ke = Fe(Number(S[Ce] || 0), me, Ie);
      ce.push({
        key: Ce,
        label: O,
        min: me,
        max: Ie,
        step: Ve,
        value: Ke,
        displayValue: yo(Ke),
        fillPct: Fe((Ke - me) / Math.max(1e-6, Ie - me) * 100, 0, 100),
        enabled: v && !d
      });
    }, Ae = [];
    if (f) {
      for (const [Ce, O] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const me = Rc(S[Ce]);
        ne(Ce, O, -me, me, 0.01);
      }
      ne("yaw_deg", "Yaw", -180, 180, 0.1), ne("pitch_deg", "Pitch", -90, 90, 0.1), ne("roll_deg", "Roll", -180, 180, 0.1), ne("scale", "Scale", oy, Rc(S.scale), 0.01), ne("opacity", "Opacity", 0, 100, 1);
    } else if (se.length > 1)
      Ae.push(`Selected objects: ${se.length}`), Ae.push("Multi-selection supports z-order and delete.");
    else {
      const Ce = be === "shot" || be === "frame";
      if ($)
        for (const [O, me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ie = Rc(S[O]);
          ne(O, me, -Ie, Ie, 0.01);
        }
      ne("yaw_deg", "Yaw", -180, 180, 0.1), ne("pitch_deg", "Pitch", -90, 90, 0.1), ne(be === "image" || _ === "stickers" && !Ce ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ne("hFOV_deg", "H FOV", 1, 179, 0.1), ne("vFOV_deg", "V FOV", 1, 179, 0.1), Ce && ce.forEach((O) => {
        O.enabled = O.enabled && nN(O.key, { erp: he() });
      }), c && !Ce && ne("opacity", "Opacity", 0, 100, 1);
    }
    b.sidePanel = iN({
      coverage: g.coverage,
      readOnly: d,
      selectionPicker: j,
      enabled: v,
      selectedKind: f ? "world" : be,
      selectedItems: se,
      params: ce,
      notes: Ae,
      uiSettings: R,
      normalizeCoverageValue: In
    });
  }
  function Q() {
    const { canUndo: R, canRedo: te } = H();
    ro(b.toolButtons, "value", "undo", { disabled: !R }), ro(b.toolButtons, "value", "redo", { disabled: !te });
  }
  return {
    connect(R) {
      ({
        cameraPreviewShown: C,
        cameraShoots: U,
        getActiveCutoutShot: D,
        getBrushPresetIdForTool: T,
        getCutoutInspectorItems: x,
        getHistoryCapabilities: H,
        getList: z,
        getSelected: ee,
        getSelectedItems: re,
        getSelectedKind: B,
        getSelectionItemIcon: G,
        getSelectionItemLabelData: Y,
        hasCamera: le,
        hasSpaceContent: ve,
        isActiveLassoTool: ge,
        isErpCamera: he,
        isExternalSticker: Z,
        isItemLocked: E,
        isPaintCursorEnabled: W,
        isSceneSticker: de,
        isShotItem: fe,
        isSpaceView: we,
        isStickerHidden: $e,
        leaveFrameView: oe,
        poseOf: V,
        selectedWorldSticker: ae,
        setCanvasCursor: pe,
        syncCutoutShot: xe,
        syncTimeline: Oe,
        syncVideoTransportVisibility: ie,
        updateCursor: Pe,
        worldStickerEditable: w
      } = R);
    },
    syncLookAtFrameButtonState: ue,
    syncFloatingViewButtonState: P,
    syncViewToggleState: F,
    syncFrameRollKnob: q,
    syncPaintUi: k,
    syncSidePanelControls: A,
    updateSidePanel: I,
    inspectorTimed: K,
    syncSidePanelModel: X,
    syncUndoRedoButtons: Q
  };
}
function mI(e) {
  const {
    capture: t,
    cutoutV2: n,
    editor: r,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: d,
    timeline: u,
    timelinePlayhead: c,
    uiState: p,
    videoEl: g,
    videoTimelineFps: y
  } = e;
  let _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le;
  function ve() {
    if (!l || o) return;
    const w = he(), N = u.selection, J = N && Z(N.owner);
    if (N) {
      const ue = J ? E(N) : [];
      N.frames = N.frames.filter((P) => ue.some((F) => J[F].keyframes.some((q) => q.frame === P))), N.frames.length || (u.selection = null);
    }
    p.timeline = uN(s, {
      span: w,
      selection: u.selection,
      selectedId: r.worldSelectedId || r.selectedId,
      expanded: u.expanded ?? ge(),
      openRows: u.openRows,
      audio: $e() && p.videoTransport.hasAudio ? { muted: g.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: y(i) !== null || jx(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: C(),
      cameraHideable: d,
      stickers: !n,
      scene: a && !!Id(i).scene,
      sceneLocked: !!t
    }), p.easing = u.selection ? dN(J, E(u.selection), u.selection.frames, W(u.selection.owner)) : null;
  }
  function ge() {
    return Pw(s, { cameraOnly: n, camera: d });
  }
  function he(w = null) {
    if (t != null && t.frames) return t.frames;
    const N = s.timeline.fps, J = s.stickers.find(D), ue = J ? b() : null, P = Math.max(
      p.videoTransport.ready ? Math.round(Number(p.videoTransport.duration || 0) * N) : 0,
      ue ? d0(J.clip, N, ue.meta) : 0
    );
    return Mg(s, { minimum: Math.round(N * 5), frames: P, openClip: w, camera: n && !t || d });
  }
  function Z(w) {
    return w === "camera" ? C() ? s.camera : null : w === "scene" ? a ? s.scene : null : s.stickers.find((N) => N.id === w) || null;
  }
  function E(w) {
    return w.lane ? [w.lane] : Co(Z(w.owner));
  }
  function W(w) {
    if (w === "camera") return 0;
    const { clip: N } = Z(w);
    return N.start - N.in;
  }
  function de(w) {
    return `${No(w, r.frame)}:${w.start - w.in}`;
  }
  function fe(w) {
    const N = Z(w);
    return !!N && N.locked !== !0;
  }
  function we(w) {
    const N = Math.max(0, Math.round(w));
    if (N === r.frame) return;
    B(), r.frame = N, c.frame.value = N, B();
    const J = [r.selectedId, r.worldSelectedId];
    ee(), T(), J[0] !== r.selectedId || J[1] !== r.worldSelectedId ? le() : U() && G(), Y(), re({ reason: yt.PLAYHEAD });
  }
  function $e() {
    return g instanceof HTMLVideoElement && !!g.getAttribute("src");
  }
  function oe(w) {
    z(), x.seek(w);
  }
  function V() {
    l && x.stop();
  }
  function ae() {
    z(), x.toggle();
  }
  function pe() {
    B(), T(), le(), Y(), re();
  }
  function xe() {
    H(), _(), pe();
  }
  function Oe() {
    const { selection: w } = u;
    fe(w.owner) && (V(), bw(Z(w.owner), E(w), w.frames, r.frame - W(w.owner)), u.selection = null, xe());
  }
  function ie(w) {
    const N = Ao(w);
    if (N === null || N === s.timeline.fps) return;
    V();
    const J = Math.round(r.frame * N / s.timeline.fps);
    jw(s, N), u.selection = null, x.seek(J), xe();
  }
  function Pe() {
    const w = y(i);
    w !== null && w !== s.timeline.fps && ie(w);
  }
  return {
    connect(w) {
      ({
        commitAndRefreshNode: _,
        getPortMedia: b,
        hasCamera: C,
        inspectorTimed: U,
        isExternalSticker: D,
        markObjectVisualsDirty: T,
        playback: x,
        pushHistory: H,
        refreshModalVideoSource: z,
        releaseHiddenSelection: ee,
        requestDraw: re,
        syncCutoutShot: B,
        syncSidePanelModel: G,
        updateSelectionMenu: Y,
        updateSidePanel: le
      } = w);
    },
    syncTimeline: ve,
    timelineTimed: ge,
    timelineSpanFrames: he,
    timelineOwner: Z,
    selectedLanes: E,
    timelineOffset: W,
    clipView: de,
    timelineEditable: fe,
    setTimelineFrame: we,
    jumpTimelineTo: oe,
    stopTimelinePlayback: V,
    togglePlayback: ae,
    refreshTimelineEdit: pe,
    commitTimelineEdit: xe,
    deleteSelectedKeyframes: Oe,
    changeTimelineFps: ie,
    applyVideoTimelineFps: Pe
  };
}
function gI(e) {
  const {
    dragFrames: t,
    editor: n,
    readOnly: r,
    state: i,
    stateV2: o,
    studio: a,
    timeline: s,
    uiState: l
  } = e;
  let d, u, c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W;
  function de(fe) {
    if (!(r || !o)) {
      if (fe.type === "seek") {
        if (fe.phase === "move") {
          s.scrubFrame = fe.frame, t.request("seek");
          return;
        }
        t.cancel(), fe.phase === "start" && C(), b.seek(fe.frame);
        return;
      }
      if (fe.type === "play") {
        he();
        return;
      }
      if (fe.type === "mute") {
        Z(), B();
        return;
      }
      if (fe.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? ge()), s.selection = null, B();
        return;
      }
      if (fe.type === "toggle-row") {
        s.openRows.has(fe.id) ? s.openRows.delete(fe.id) : s.openRows.add(fe.id), B();
        return;
      }
      if (fe.type === "toggle-visible") {
        if (fe.id === ey) i.painting_visible = !i.painting_visible;
        else {
          const we = le(fe.id);
          if (!we || fe.id === "camera" && !a) return;
          we.visible = !we.visible;
        }
        D(), p();
        return;
      }
      if (fe.type === "select-row") {
        const we = i.stickers.find(($e) => $e.id === fe.id);
        if (we && !we.visible || fe.id === "camera" && !d()) return;
        we && !No(we.clip, n.frame) && _(we.clip.start), (we == null ? void 0 : we.placement) === "world" ? x(we.id) : fe.id === "camera" ? z(g()) : z(y().find(($e) => $e.id === fe.id) || null), re(), s.selection = null, W(), E(), T();
        return;
      }
      if (fe.type === "select-keys") {
        const we = Y(fe.owner), $e = fe.frames.map((ae) => ae - we), oe = s.selection, V = (oe == null ? void 0 : oe.owner) === fe.owner && oe.lane === fe.lane;
        if (fe.additive && V) {
          const ae = new Set(oe.frames);
          for (const pe of $e)
            ae.has(pe) ? ae.delete(pe) : ae.add(pe);
          oe.frames = [...ae].sort((pe, xe) => pe - xe);
        } else
          s.selection = $e.length ? { owner: fe.owner, lane: fe.lane, frames: $e } : null;
        B();
        return;
      }
      if (fe.type === "move-keys") {
        const we = s.selection;
        if (!we || !G(we.owner)) return;
        const $e = le(we.owner), oe = H(we);
        if (fe.phase === "start") {
          ee(), s.drag = { keyframes: oe.map((pe) => structuredClone($e[pe].keyframes)), frames: we.frames };
          return;
        }
        const { drag: V } = s;
        if (!(V != null && V.keyframes)) return;
        oe.forEach((pe, xe) => {
          $e[pe].keyframes = structuredClone(V.keyframes[xe]);
        });
        const ae = vw($e, oe, V.frames, fe.delta, -Y(we.owner));
        if (we.frames = V.frames.map((pe) => pe + ae), fe.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, ae ? p() : U();
        return;
      }
      if (fe.type === "clip") {
        const we = fe.id === "scene" ? le("scene") : i.stickers.find((ae) => ae.id === fe.id);
        if (!we || we.locked) return;
        if (fe.phase === "start") {
          ee(), s.drag = { clip: { ...we.clip }, span: ve(we.clip) };
          return;
        }
        const { drag: $e } = s;
        if (!($e != null && $e.clip)) return;
        const oe = $e.clip, V = c(we.clip);
        if (we.clip = { ...oe }, fe.delta && fe.mode === "move" ? ww(we.clip, fe.delta) : fe.delta && fe.mode === "start" ? xw(we.clip, oe.start + fe.delta) : fe.delta && kw(we.clip, (oe.duration === null ? $e.span : oe.start + oe.duration) + fe.delta, $e.span), fe.phase !== "end") {
          t.request("timeline"), c(we.clip) !== V && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, D(), JSON.stringify(we.clip) !== JSON.stringify(oe) ? p() : U();
        return;
      }
      if (fe.type === "key-row") {
        if (fe.owner === "scene" || !G(fe.owner)) return;
        ee(), mw(le(fe.owner), n.frame - Y(fe.owner)), p();
        return;
      }
      if (fe.type === "fps") {
        const we = Aw(fe.fps);
        if (we === null || we === i.timeline.fps || l.timeline.fpsLocked) {
          B();
          return;
        }
        u(we);
        return;
      }
      if (fe.type === "length") {
        const we = Cw(fe.length);
        if (we === void 0 || we === i.timeline.length) {
          B();
          return;
        }
        ee(), i.timeline.length = we, p();
        return;
      }
      if (fe.type === "easing") {
        const we = s.selection;
        if (!we || !G(we.owner)) return;
        ee(), Sw(le(we.owner), H(we), we.frames, fe.easing), fe.commit ? p() : U();
      }
    }
  }
  return {
    connect(fe) {
      ({
        cameraShoots: d,
        changeTimelineFps: u,
        clipView: c,
        commitTimelineEdit: p,
        getActiveCutoutShot: g,
        getList: y,
        jumpTimelineTo: _,
        playback: b,
        refreshModalVideoSource: C,
        refreshTimelineEdit: U,
        releaseHiddenSelection: D,
        requestDraw: T,
        selectWorldSticker: x,
        selectedLanes: H,
        setSelectedItem: z,
        stopTimelinePlayback: ee,
        syncFloatingViewButtonState: re,
        syncTimeline: B,
        timelineEditable: G,
        timelineOffset: Y,
        timelineOwner: le,
        timelineSpanFrames: ve,
        timelineTimed: ge,
        togglePlayback: he,
        toggleVideoMuted: Z,
        updateSelectionMenu: E,
        updateSidePanel: W
      } = fe);
    },
    onTimelineAction: de
  };
}
function yI(e) {
  const {
    app: t,
    bgWidget: n,
    cameraV2: r,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: d
  } = e;
  let u, c, p, g;
  function y() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = c(Number(l.output_preset || 2048))), i && (l.coverage = In(i.value)), n && (l.bg_color = String(n.value || l.bg_color || "#00ff00")), _(), o.setDirtyCanvas(!0, !0));
  }
  function _() {
    var x;
    if (s) return;
    p(), Tg(l), l.coverage = In(l.coverage), Fg(o, l.active);
    const T = Dg(o, l);
    d && !Lg(o, T, String(d.value ?? ""), { rebased: r }) && (d.value = T, (x = d.callback) == null || x.call(d, T));
  }
  function b() {
    l.ui_settings = WC(l.ui_settings), s || _();
  }
  function C() {
    var T;
    s || (_(), (T = o.setDirtyCanvas) == null || T.call(o, !0, !0));
  }
  function U() {
    s || u() && g().catch((T) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", T);
    });
  }
  function D(T = {}) {
    var z, ee, re, B, G, Y, le, ve, ge;
    const x = T.syncPreview !== !1, H = T.syncGraph !== !1;
    x && ((ee = (z = o.__panoPreviewNodeRuntime) == null ? void 0 : z.requestDraw) == null || ee.call(z), (B = (re = o.__panoDomPreview) == null ? void 0 : re.requestDraw) == null || B.call(re), (G = o.setDirtyCanvas) == null || G.call(o, !0, !1)), H && ((le = (Y = o.graph) == null ? void 0 : Y.setDirtyCanvas) == null || le.call(Y, !0, !0), (ge = (ve = t == null ? void 0 : t.canvas) == null ? void 0 : ve.setDirty) == null || ge.call(ve, !0, !0));
  }
  return {
    connect(T) {
      ({
        needsPaintingLayerSync: u,
        resolveEditorOutputPresetWidth: c,
        syncCutoutShot: p,
        syncPaintingLayerAsync: g
      } = T);
    },
    apply: y,
    commitState: _,
    persistUiSettings: b,
    commitAndRefreshNode: C,
    triggerBackgroundPersistenceOnClose: U,
    syncCoverageChangeToNodePreviews: D
  };
}
function bI(e) {
  const {
    cutoutV2: t,
    editor: n,
    readOnly: r,
    sceneV2: i,
    state: o,
    studio: a,
    type: s,
    uiState: l
  } = e;
  let d, u, c, p, g, y, _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe, V, ae, pe;
  function xe(ue, P, F = "Clear") {
    return new Promise((q) => {
      l.confirmDialog = {
        visible: !0,
        title: String(ue || ""),
        text: String(P || ""),
        confirmLabel: String(F || "Confirm"),
        resolve: q
      };
    });
  }
  async function Oe() {
    var F, q;
    if (r || !await xe(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = Po(null), he();
    const P = c();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((k) => k.placement === "world" || P.includes(k)) : P, i || (o.assets = {}), n.selectedId = ((F = P[0]) == null ? void 0 : F.id) || null, n.selectedIds = n.selectedId ? [n.selectedId] : [], o.active.selected_sticker_id = ((q = P[0]) == null ? void 0 : q.id) || null, E();
    else {
      const k = Vw(o.shots, o.active.selected_shot_id);
      o.stickers = P, o.assets = {}, o.shots = k.shots, n.selectedId = k.selectedShotId, n.selectedIds = n.selectedId ? [n.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = k.selectedShotId, !k.selectedShotId && n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, E();
    }
    W(), p(), ae(), V(), de();
  }
  async function ie(ue) {
    var A, I, K, X;
    if (r) return;
    const P = ue === "mask" ? "mask" : "paint", F = P === "mask" ? "Mask" : "Paint", q = U(P);
    if (!(!q.length && !(((A = n.interaction) == null ? void 0 : A.kind) === "draw" && ((I = n.interaction) == null ? void 0 : I.layerKind) === P) || !await xe(
      `Clear ${F}`,
      `This will remove all ${P} strokes in the current node.`,
      `Clear ${F}`
    ))) {
      if (((K = n.interaction) == null ? void 0 : K.kind) === "draw" && ((X = n.interaction) == null ? void 0 : X.layerKind) === P) {
        const Q = y(n.interaction);
        Q && n.paintEngine.cancelActiveStroke(Q), n.interaction = null;
      }
      q.length = 0, o.painting.raster_objects = D().filter((Q) => String((Q == null ? void 0 : Q.layerKind) || "paint") !== P), P === "paint" && (C().length = 0), he(), W(), p(), ae(), V(), oe(), de();
    }
  }
  function Pe() {
    if (r) return;
    const ue = T();
    if (!ue || !G(ue) || H(ue) || i && le(ue)) return;
    let P;
    i ? P = tx(ue, vi("st"), b()) : (P = JSON.parse(JSON.stringify(ue)), P.id = vi("st"), P.yaw_deg = Dt((P.yaw_deg || 0) + 8), P.z_index = b()), o.stickers.push(P), o.active.selected_sticker_id = P.id, n.selectedId = P.id, n.selectedIds = [P.id], ve(), W(), p(), V(), ae(), de();
  }
  function w() {
    const ue = fe();
    return ue ? (pe(ue) && (we(), Qw(o, ue.id), u(), ve(), W(), p(), ae(), V(), $e(), de()), !0) : !1;
  }
  function N() {
    var F, q, k, A, I;
    if (r || t) return;
    const ue = x(), P = T();
    if (!(!P && ue.length === 0) && !ue.some((K) => z(K))) {
      if (we(), ue.length > 1) {
        const K = new Set(ue.filter((R) => Y(R)).map((R) => String(R.actionGroupId || R.id || ""))), X = new Set(ue.filter((R) => ee(R)).map((R) => Z(R.rasterObjectId || R.id || ""))), Q = new Set(ue.filter(G).map((R) => String(R.id || "")));
        K.size > 0 && (o.painting.paint.strokes = (Array.isArray((q = (F = o.painting) == null ? void 0 : F.paint) == null ? void 0 : q.strokes) ? o.painting.paint.strokes : []).filter((R) => !K.has(String((R == null ? void 0 : R.actionGroupId) || ""))), o.painting.groups = C().filter((R) => !K.has(String((R == null ? void 0 : R.actionGroupId) || (R == null ? void 0 : R.id) || ""))), he()), X.size > 0 && (o.painting.raster_objects = D().filter((R) => !X.has(String((R == null ? void 0 : R.id) || ""))), ge()), Q.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((R) => Q.has(String((R == null ? void 0 : R.id) || "")) ? H(R) ? (B(R) || (R.visible = !1), !0) : !1 : !0), E(), ve()), n.selectedId = null, n.selectedIds = [], W(), p(), ae(), V(), de();
        return;
      }
      if (Y(P)) {
        const K = String(P.actionGroupId || P.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((A = (k = o.painting) == null ? void 0 : k.paint) == null ? void 0 : A.strokes) ? o.painting.paint.strokes : []).filter((X) => String((X == null ? void 0 : X.actionGroupId) || "").trim() !== K), o.painting.groups = C().filter((X) => String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim() !== K), he(), n.selectedId = null, n.selectedIds = [], W(), p(), ae(), V(), de();
        return;
      }
      if (ee(P)) {
        const K = Z(P.rasterObjectId || P.id || "");
        o.painting.raster_objects = D().filter((X) => String((X == null ? void 0 : X.id) || "").trim() !== K), ge(), n.selectedId = null, n.selectedIds = [], W(), p(), ae(), V(), de();
        return;
      }
      if (a && re(P)) {
        g();
        return;
      }
      if (s === "stickers" || G(P)) {
        if (H(P)) {
          if (B(P)) return;
          P.visible = !1, ve(), W(), p(), ae(), V(), de();
          return;
        }
        o.stickers = o.stickers.filter((K) => K.id !== P.id), E(), ve(), n.selectedId = ((I = _()[0]) == null ? void 0 : I.id) || null, n.selectedIds = n.selectedId ? [n.selectedId] : [], o.active.selected_sticker_id = n.selectedId, W(), p(), ae(), V(), de();
        return;
      }
      d();
    }
  }
  function J() {
    n.primaryTool !== "cursor" && (n.primaryTool = "cursor", oe(), ae());
  }
  return {
    connect(ue) {
      ({
        clearCutoutFrame: d,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: c,
        commitAndRefreshNode: p,
        deleteStudioCamera: g,
        getActivePaintTargetDescriptor: y,
        getList: _,
        getNextStickerZIndex: b,
        getPaintingGroupList: C,
        getPaintingLayerList: U,
        getRasterObjectList: D,
        getSelected: T,
        getSelectedItems: x,
        isExternalSticker: H,
        isItemLocked: z,
        isRasterObjectItem: ee,
        isShotItem: re,
        isStickerHidden: B,
        isStickerItem: G,
        isStrokeGroupItem: Y,
        isUploadingSticker: le,
        markObjectVisualsDirty: ve,
        markPaintCompositeVisualsDirty: ge,
        markPaintStrokeVisualsDirty: he,
        parseRasterObjectSelectionId: Z,
        pruneUnusedAssets: E,
        pushHistory: W,
        requestDraw: de,
        selectedWorldSticker: fe,
        stopTimelinePlayback: we,
        syncFloatingViewButtonState: $e,
        syncPaintUi: oe,
        updateSelectionMenu: V,
        updateSidePanel: ae,
        worldStickerEditable: pe
      } = ue);
    },
    clearAll: Oe,
    clearPaintingLayer: ie,
    duplicateSelected: Pe,
    deleteSelectedWorldSticker: w,
    deleteSelected: N,
    forceCursorTool: J
  };
}
function vI(e) {
  const {
    api: t,
    canvas: n,
    cutoutV2: r,
    dragCue: i,
    editor: o,
    editorView: a,
    imageCache: s,
    node: l,
    readOnly: d,
    sceneV2: u,
    stageWrap: c,
    state: p,
    type: g,
    vueModal: y
  } = e;
  let _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W;
  function de(A) {
    return jd(A == null ? void 0 : A.dataTransfer);
  }
  function fe(A) {
    const I = !!A;
    i.active !== I && (i.active = I, c.classList.toggle("drop-active", I));
  }
  function we() {
    const A = new Set(
      (p.stickers || []).map((I) => String((I == null ? void 0 : I.asset_id) || "")).filter((I) => !!I)
    );
    Object.keys(p.assets || {}).forEach((I) => {
      A.has(I) || (delete p.assets[I], s.delete(I));
    });
  }
  async function $e(A) {
    if (d || r || g !== "stickers" && g !== "cutout" || !tr(A)) return;
    if (u) {
      Z(), await xe(A);
      return;
    }
    const I = vi("asset"), K = Zo(l, `add:${I}`, async () => {
      try {
        const { image: X } = await Qo(A);
        s.set(I, X);
        const Q = vi("st");
        p.stickers.push({
          id: Q,
          asset_id: I,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: C(30, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1)),
          rot_deg: 0,
          z_index: x()
        }), ve(p.stickers[p.stickers.length - 1]), T(), W(), E(), Y();
        const R = await bi(A, {
          fetchApi: (Te, se) => t.fetchApi(Te, se)
        });
        if (!(Array.isArray(p.stickers) ? p.stickers : []).filter((Te) => String((Te == null ? void 0 : Te.asset_id) || "") === I).length) return;
        p.assets[I] = R, we(), G(), b(), W(), E(), Y();
      } catch (X) {
        delete p.assets[I], s.delete(I);
        const Q = Array.isArray(p.stickers) ? p.stickers : [], R = Q.filter((te) => String((te == null ? void 0 : te.asset_id) || "") === I);
        throw R.length && (p.stickers = Q.filter((te) => String((te == null ? void 0 : te.asset_id) || "") !== I), R.some((te) => String((te == null ? void 0 : te.id) || "") === String(o.selectedId || "")) && ve(null), W(), E(), Y(), b()), X;
      }
    });
    try {
      await K;
    } catch {
    }
  }
  function oe() {
    var A;
    d || g !== "stickers" && g !== "cutout" || (A = y == null ? void 0 : y.openImagePicker) == null || A.call(y, "add");
  }
  function V() {
    var A;
    d || !u || (A = y == null ? void 0 : y.openImagePicker) == null || A.call(y, "add-world");
  }
  async function ae(A) {
    d || !u || !tr(A) || (Z(), await xe(A, "world"));
  }
  function pe() {
    const A = { x: n.width / 2, y: n.height / 2 }, I = ee() ? a.pick(D(), A.x, A.y, n.width, n.height) : null;
    return xx(ge(), I, U());
  }
  async function xe(A, I = "sky") {
    const K = vi("st"), X = Zo(l, `add:${K}`, async () => {
      const { image: Q } = await Qo(A), R = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: C(30, Number(Q.naturalWidth || Q.width || 1), Number(Q.naturalHeight || Q.height || 1)),
        rot_deg: 0
      }, te = { kind: "file", filename: "" }, Me = I === "world" ? ex(K, te, pe()) : xd(K, te, R, x());
      s.set(he(Me), Q), p.stickers.push(Me), I === "world" ? le(K) : ve(Me), T(), W(), E(), Y();
      try {
        const Te = await bi(A, {
          fetchApi: (be, Se) => t.fetchApi(be, Se)
        }), se = p.stickers.find((be) => be.id === K);
        if (!se) return;
        se.source = _s(Te), s.set(he(se), Q), G(), b();
      } catch (Te) {
        throw p.stickers = p.stickers.filter((se) => se.id !== K), o.selectedId === K && ve(null), o.worldSelectedId === K && _(), G(), b(), Te;
      } finally {
        W(), E(), Y();
      }
    });
    try {
      await X;
    } catch {
    }
  }
  async function Oe(A, I) {
    const K = Zo(l, `replace:${I}:${vi("asset")}`, async () => {
      const { image: X } = await Qo(A), Q = await bi(A, {
        fetchApi: (te, Me) => t.fetchApi(te, Me)
      }), R = p.stickers.find((te) => te.id === I);
      if (R) {
        R.source = _s(Q), R.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const te of [R.size.value, ...R.size.keyframes.map((Me) => Me.value)])
          te.vFOV_deg = C(te.hFOV_deg, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1));
        s.set(he(R), X), B(), G(), b(), W(), E(), Y();
      }
    });
    try {
      await K;
    } catch {
    }
  }
  async function ie(A) {
    if (d || g !== "stickers" && g !== "cutout") return;
    const I = H();
    if (!I || !re(I) || z(I) || !tr(A)) return;
    if (u) {
      await Oe(A, I.id);
      return;
    }
    const K = String(I.id || ""), X = vi("asset"), Q = Zo(l, `replace:${K}:${X}`, async () => {
      var be;
      const R = (Array.isArray(p.stickers) ? p.stickers : []).find((Se) => String((Se == null ? void 0 : Se.id) || "") === K) || null;
      if (!R || !re(R) || z(R)) return;
      const te = String(R.asset_id || ""), Me = te ? cn(((be = p.assets) == null ? void 0 : be[te]) || null) : null, Te = Number(R.vFOV_deg || 0), se = R.crop && typeof R.crop == "object" ? { ...R.crop } : null;
      try {
        const { image: Se } = await Qo(A);
        s.set(X, Se), R.asset_id = X, R.vFOV_deg = C(
          Number(R.hFOV_deg || 30),
          Number(Se.naturalWidth || Se.width || 1),
          Number(Se.naturalHeight || Se.height || 1)
        ), R.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, B(), W(), E(), Y();
        const m = await bi(A, {
          fetchApi: ($, S) => t.fetchApi($, S)
        }), f = (Array.isArray(p.stickers) ? p.stickers : []).find(($) => String(($ == null ? void 0 : $.id) || "") === K) || null;
        if (!f || String(f.asset_id || "") !== X) return;
        p.assets[X] = m, we(), G(), b(), W(), E(), Y();
      } catch (Se) {
        delete p.assets[X], s.delete(X);
        const m = (Array.isArray(p.stickers) ? p.stickers : []).find((f) => String((f == null ? void 0 : f.id) || "") === K) || null;
        throw m && String(m.asset_id || "") === X && (te && Me && (p.assets[te] = Me), m.asset_id = te, m.vFOV_deg = Te, m.crop = se ? { ...se } : null), B(), b(), W(), E(), Y(), Se;
      }
    });
    try {
      await Q;
    } catch {
    }
  }
  function Pe() {
    var I;
    if (d) return;
    const A = H();
    !A || !re(A) || z(A) || (I = y == null ? void 0 : y.openImagePicker) == null || I.call(y, "replace");
  }
  async function w() {
    if (d || g !== "stickers") return;
    if (u) {
      await N();
      return;
    }
    const A = p.assets && typeof p.assets == "object" ? p.assets : {}, I = Object.entries(A).filter(([, X]) => {
      const Q = String((X == null ? void 0 : X.type) || "").toLowerCase(), R = String((X == null ? void 0 : X.value) || "");
      return Q === "dataurl" && R.startsWith("data:image");
    });
    if (!I.length) return;
    let K = !1;
    for (const [X, Q] of I)
      try {
        const R = String((Q == null ? void 0 : Q.value) || "");
        if (!R) continue;
        const te = await fetch(R).then((Se) => Se.blob()), Me = String(te.type || "image/png").split("/")[1] || "png", Te = String((Q == null ? void 0 : Q.name) || `${X}.${Me}`), se = new File([te], Te, { type: te.type || "image/png" }), be = await bi(se, {
          fetchApi: (Se, m) => t.fetchApi(Se, m)
        });
        p.assets[X] = {
          ...be,
          w: Number((Q == null ? void 0 : Q.w) || 0),
          h: Number((Q == null ? void 0 : Q.h) || 0)
        }, K = !0;
      } catch {
      }
    K && (b(), Y());
  }
  async function N() {
    let A = !1;
    for (const I of p.stickers) {
      const K = I.source.data_url;
      if (K)
        try {
          const X = await fetch(K).then((Me) => Me.blob()), Q = String(X.type || "image/png").split("/")[1] || "png", R = new File([X], `${I.id}.${Q}`, { type: X.type || "image/png" }), te = await bi(R, {
            fetchApi: (Me, Te) => t.fetchApi(Me, Te)
          });
          I.source = _s(te), A = !0;
        } catch {
        }
    }
    A && (b(), Y());
  }
  function J(A) {
    g !== "stickers" && g !== "cutout" || d || (A.preventDefault(), fe(!0));
  }
  function ue(A) {
    var X;
    if (g !== "stickers" && g !== "cutout" || d) return;
    A.preventDefault(), A.stopPropagation(), i.depth = 0, fe(!1);
    const K = Array.from(((X = A.dataTransfer) == null ? void 0 : X.files) || []).find((Q) => tr(Q));
    K && $e(K);
  }
  function P(A) {
    g !== "stickers" && g !== "cutout" || d || de(A) && (i.depth += 1, fe(!0), A.preventDefault());
  }
  function F(A) {
    g !== "stickers" && g !== "cutout" || d || (!i.active && de(A) && fe(!0), i.active && A.preventDefault());
  }
  function q(A) {
    if (g !== "stickers" && g !== "cutout" || d || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const I = Number(A.clientX) <= 0 && Number(A.clientY) <= 0;
    (i.depth === 0 || I) && fe(!1);
  }
  function k(A) {
    g !== "stickers" && g !== "cutout" || d || (i.depth = 0, fe(!1), de(A) && A.preventDefault());
  }
  return {
    connect(A) {
      ({
        clearWorldSelection: _,
        commitAndRefreshNode: b,
        computeStickerVFov: C,
        contentSphere: U,
        currentSpaceCamera: D,
        forceCursorTool: T,
        getNextStickerZIndex: x,
        getSelected: H,
        isExternalSticker: z,
        isSpaceView: ee,
        isStickerItem: re,
        markObjectVisualsDirty: B,
        pushHistory: G,
        requestDraw: Y,
        selectWorldSticker: le,
        setSelectedItem: ve,
        spaceViewState: ge,
        stickerImageKey: he,
        stopTimelinePlayback: Z,
        updateSelectionMenu: E,
        updateSidePanel: W
      } = A);
    },
    addImageStickerFromFile: $e,
    addImageSticker: oe,
    addWorldImageSticker: V,
    addWorldStickerFromFile: ae,
    replaceSelectedImageFromFile: ie,
    replaceSelectedImage: Pe,
    migrateLegacyEmbeddedAssets: w,
    pruneUnusedAssets: we,
    setDropCue: fe,
    onCanvasDragOver: J,
    onCanvasDrop: ue,
    onWindowDragEnter: P,
    onWindowDragOver: F,
    onWindowDragLeave: q,
    onWindowDrop: k
  };
}
function _I(e) {
  const {
    cameraV2: t,
    canvas: n,
    cutoutV2: r,
    editor: i,
    frameRollKnobEl: o,
    initialShotBase: a,
    readOnly: s,
    runtime: l,
    shotEditor: d,
    stageWrap: u,
    state: c,
    studio: p,
    tooltip: g,
    type: y,
    uiState: _
  } = e;
  let b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge, he, Z, E, W, de, fe, we, $e, oe, V, ae, pe, xe, Oe, ie, Pe, w, N = a;
  function J(S, v) {
    var ne;
    const j = (ne = z().space) == null ? void 0 : ne.gizmo;
    if (le() && j && w("hover", v) !== null && w("down", v))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: j.mode, start: j.transform, base: H(), changed: !1 }, n.setPointerCapture(S.pointerId), Oe(v), !0;
    const ce = Ug(H(), C(we()));
    return Ex(x(), ce, v, n.width, n.height) ? (le() || (fe(te()), Pe(), ie(), W()), i.interaction = { kind: "world_select" }, n.setPointerCapture(S.pointerId), !0) : !1;
  }
  function ue() {
    if (s || y !== "cutout") return;
    const S = te();
    if (S) {
      fe(S), i.mode = "pano", r && ve() ? pe(Hg(Z($e(), S.position), D(), n.width, n.height)) : xe(Dt(Number(S.yaw_deg || 0)), Fe(Number(S.pitch_deg || 0), -89.9, 89.9)), Pe(), ie(), W({ cause: "cutout_frame" });
      return;
    }
    const v = tg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Dt(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    c.shots = [v], fe(v), ee(), i.mode = "pano", E(), T(), Pe(), ie(), W({ cause: "cutout_frame" });
  }
  function P() {
    s || !p || B() || (oe(), c.camera = Ww($e()), Q(), fe(te()), ee(), E(), T(), Pe(), ie(), W({ cause: "cutout_frame" }));
  }
  function F() {
    oe(), c.camera = null, fe(null), Q(), E(), T(), Pe(), ie(), W({ cause: "cutout_frame" });
  }
  function q(S, v) {
    p && ge(S) && (c.camera.projection = v === xo ? "erp" : "perspective", v === xo) || I(S, v);
  }
  function k() {
    s || y !== "cutout" || (c.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, c.active.selected_shot_id = null, E(), T(), Pe(), ie(), W());
  }
  function A(S, v) {
    const j = l.frameSafeRect;
    if (!S || !j || i.mode !== "frame") return !1;
    const ce = Du * Ci(j, S), ne = ud(cd(j, v), ce);
    return S.hFOV_deg = ne.hFOV_deg, S.vFOV_deg = ne.vFOV_deg, !0;
  }
  function I(S, v) {
    if (!S || S.locked === !0) return;
    const j = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, ce = (() => {
      const O = String(S.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(O)) {
        const [Ve, Ke] = O.split(":").map((Ge) => Number(Ge));
        if (Number.isFinite(Ve) && Number.isFinite(Ke)) return Ve >= Ke;
      }
      const me = Number(S.hFOV_deg || 64), Ie = Number(S.vFOV_deg || 40);
      return Math.abs(me - Ie) > 1e-6 ? me >= Ie : Oi(S) >= 1;
    })();
    let [ne, Ae] = j[String(v)] || j["1:1"];
    ne >= Ae !== ce && ([ne, Ae] = [Ae, ne]);
    const Ce = ne / Ae;
    if (!A(S, Ce)) {
      const O = Fe(Number(S.vFOV_deg || 40), 1, 179);
      S.vFOV_deg = O, S.hFOV_deg = ys(O, Ce);
    }
    S.aspect_id = `${ne}:${Ae}`;
  }
  function K(S, v, j) {
    if (!S || S.locked === !0) return !1;
    const ce = Pa(v, j);
    if (!ce) return !1;
    const ne = ce.ratio;
    if (!A(S, ne)) {
      const Ae = Fe(Number(S.vFOV_deg || 40), 1, 179);
      S.vFOV_deg = Ae, S.hFOV_deg = ys(Ae, ne);
    }
    return S.aspect_id = ce.label, !0;
  }
  function X(S) {
    if (!S || S.locked === !0) return;
    const v = String(S.aspect_id || "").trim(), j = Qr(S), ce = j.tanHalfX / Math.max(1e-12, j.tanHalfY), ne = 1 / Math.max(1e-12, ce);
    if (!A(S, ne)) {
      const Ae = Fe(Number(S.vFOV_deg || 60), 1, 179);
      S.vFOV_deg = Ae, S.hFOV_deg = ys(Ae, ne);
    }
    if (/^\d+:\d+$/.test(v)) {
      const [Ae, Ce] = v.split(":");
      S.aspect_id = `${Ce}:${Ae}`;
    } else
      S.aspect_id = _i(S);
  }
  function Q(S = !0) {
    var ce, ne;
    if (!t) return;
    const v = N;
    if (!U()) {
      N = null, (ce = c.shots) != null && ce.length && (c.shots = []), v && R(v, null);
      return;
    }
    const j = (ne = c.shots) == null ? void 0 : ne[0];
    S && j && N && Bw(c.camera, i.frame, j, N), N = Ig(c.camera, i.frame), j ? Object.assign(j, N, { position: [...N.position] }) : c.shots = [{ ...N, position: [...N.position] }], v || R(null, N);
  }
  function R(S, v) {
    var Ae, Ce;
    !v && i.mode === "frame" && he(S);
    const j = (v == null ? void 0 : v.position) ?? [0, 0, 0];
    if (((Ce = (Ae = i.viewTransition) == null ? void 0 : Ae.end) == null ? void 0 : Ce.mode) === "3dof") {
      pe({ ...$e(), position: j }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !G()) return;
    const ce = (S == null ? void 0 : S.position) ?? [0, 0, 0];
    if (ce.every((O, me) => O === j[me])) return;
    const ne = { ...$e(), position: ce };
    b({ mode: "6dof", position: ce, moved: !0 }), i.viewDistance = ne.distance, pe({ ...ne, position: j }, { mode: "3dof", moved: !1 });
  }
  function te() {
    if (!d) return null;
    const S = Array.isArray(c.shots) ? c.shots : [];
    if (!S.length) return null;
    const v = String(c.active.selected_shot_id || "");
    return S.find((j) => String((j == null ? void 0 : j.id) || "") === v) || S[0] || null;
  }
  function Me(S, v, j = {}) {
    var Ae;
    if ((S == null ? void 0 : S.kind) !== "roll_frame" || !S.shot) return;
    S.accumulatedRad += Zm(v, S.lastAngle), S.lastAngle = v;
    const ce = Qm(S.start.roll_deg, S.accumulatedRad, {
      shiftKey: j.shiftKey,
      altKey: S.altStarted ? !1 : j.altKey
    });
    S.shot.roll_deg = ce, S.changed = S.changed || Math.abs(S.accumulatedRad) > 1e-9;
    const ne = (((Ae = _.sidePanel) == null ? void 0 : Ae.params) || []).find((Ce) => Ce.key === "roll_deg");
    ne && (ne.value = ce, ne.displayValue = yo(ce), ne.fillPct = (ce + 180) / 360 * 100), V(), be(S), W({ localOnly: !0 });
  }
  function Te(S, v, j = {}) {
    var Ae;
    if ((S == null ? void 0 : S.kind) !== "roll_frame" || !S.shot || !S.rollGesture) return;
    const ce = O0(S.rollGesture, v, j);
    if (!ce) return;
    S.rollGesture = ce.gesture, S.center = ce.gesture.center, S.lastAngle = ce.gesture.lastAngle, S.accumulatedRad = ce.gesture.accumulatedRad, S.shot.roll_deg = ce.rollDeg, S.changed = S.changed || Math.abs(ce.gesture.accumulatedRad) > 1e-9;
    const ne = (((Ae = _.sidePanel) == null ? void 0 : Ae.params) || []).find((Ce) => Ce.key === "roll_deg");
    ne && (ne.value = ce.rollDeg, ne.displayValue = yo(ce.rollDeg), ne.fillPct = (ce.rollDeg + 180) / 360 * 100), V(), be(S), W({ localOnly: !0 });
  }
  function se(S, v) {
    const j = de(S);
    return Math.atan2(j.y - v.y, j.x - v.x);
  }
  function be(S) {
    var Ce, O;
    if ((S == null ? void 0 : S.kind) !== "roll_frame" || !S.shot) return;
    g.timer && (clearTimeout(g.timer), g.timer = 0), g.target = null;
    const v = re(S.shot), j = (Ce = n.getBoundingClientRect) == null ? void 0 : Ce.call(n), ce = (O = u.getBoundingClientRect) == null ? void 0 : O.call(u);
    if (!v || !j || !ce || n.width <= 0 || n.height <= 0) return;
    const ne = j.width / n.width, Ae = j.height / n.height;
    _.tooltip.text = `${yo(S.shot.roll_deg)}°`, _.tooltip.left = j.left - ce.left + (v.x + v.w * 0.5) * ne, _.tooltip.top = j.top - ce.top + (v.y + v.h * 0.5) * Ae + 12, _.tooltip.variant = "roll", _.tooltip.visible = !0;
  }
  function Se(S) {
    var Ae;
    if (S.button !== 0 || s || i.mode !== "frame") return;
    const v = te();
    if (!v || v.locked === !0) return;
    const j = re(v);
    if (!j) return;
    const ce = { x: j.x + j.w * 0.5, y: j.y + j.h * 0.5 }, ne = se(S, ce);
    i.interaction = {
      kind: "roll_frame",
      shot: v,
      center: ce,
      lastAngle: ne,
      accumulatedRad: 0,
      start: { roll_deg: Number(v.roll_deg ?? v.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (Ae = o.setPointerCapture) == null || Ae.call(o, S.pointerId), S.preventDefault(), V(), be(i.interaction), W({ localOnly: !0 });
  }
  function m(S) {
    var v;
    ((v = i.interaction) == null ? void 0 : v.kind) !== "roll_frame" || i.interaction.source !== "knob" || Me(
      i.interaction,
      se(S, i.interaction.center),
      S
    );
  }
  function f() {
    const S = i.interaction;
    (S == null ? void 0 : S.kind) !== "roll_frame" || S.source !== "knob" || (S.changed && (E(), T(), Pe()), i.interaction = null, Y(), ae(), V(), W());
  }
  function $(S) {
    const v = i.mode === "frame" && !s ? te() : null;
    !v || v.locked === !0 || Math.abs(Number(v.roll_deg ?? v.rot_deg ?? 0)) <= 1e-9 || (v.roll_deg = 0, E(), T(), Pe(), V(), W(), S.preventDefault());
  }
  return {
    connect(S) {
      ({
        applySpaceMode: b,
        cameraFrustumLength: C,
        cameraShoots: U,
        cameraSphere: D,
        commitAndRefreshNode: T,
        currentSpaceCamera: x,
        cutoutCamera: H,
        editorViewInput: z,
        forceCursorTool: ee,
        getFrameViewRect: re,
        hasCamera: B,
        hasSpaceContent: G,
        hideTooltip: Y,
        isCameraSelected: le,
        isFreeSpaceView: ve,
        isShotItem: ge,
        leaveFrameView: he,
        lookingAt: Z,
        pushHistory: E,
        requestDraw: W,
        screenPos: de,
        setSelectedItem: fe,
        spaceScale: we,
        spaceViewState: $e,
        stopTimelinePlayback: oe,
        syncFrameRollKnob: V,
        syncViewToggleState: ae,
        transitionView: pe,
        turnViewTo: xe,
        updateCursor: Oe,
        updateSelectionMenu: ie,
        updateSidePanel: Pe,
        worldGizmoPointer: w
      } = S);
    },
    addCutoutFrame: ue,
    addStudioCamera: P,
    deleteStudioCamera: F,
    setShotAspect: q,
    clearCutoutFrame: k,
    applyCutoutAspectCustom: K,
    rotateCutoutAspect90: X,
    syncCutoutShot: Q,
    getActiveCutoutShot: te,
    startCameraPress: J,
    applySharedRollInteractionPoint: Te,
    onFrameRollKnobPointerDown: Se,
    onFrameRollKnobPointerMove: m,
    finishKnobRoll: f,
    onFrameRollKnobDoubleClick: $
  };
}
function SI(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: a,
    frameRailEl: s,
    paintDockEl: l,
    readOnly: d,
    runtime: u,
    shotEditor: c,
    toolRailEl: p,
    uiState: g,
    videoTransportEl: y
  } = e;
  let _, b, C, U, D, T, x, H, z, ee, re, B, G, Y, le, ve, ge = null;
  function he(F) {
    if (r.mode = "pano", !F) return;
    b();
    const q = G().distance;
    r.viewYaw = Dt(F.yaw_deg), r.viewPitch = Fe(F.pitch_deg, -89.9, 89.9), r.viewFov = Fe(F.hFOV_deg, 35, 140), r.spaceMode === "6dof" && _({ mode: "6dof", position: [...F.position], moved: !0 }), r.viewDistance = q, u.backgroundDirty = !0;
  }
  function Z() {
    var be, Se, m, f, $;
    if (!n) return null;
    const F = (be = n.getBoundingClientRect) == null ? void 0 : be.call(n), q = Number((F == null ? void 0 : F.width) || 0) > 0 ? n.width / F.width : 1, k = Number((F == null ? void 0 : F.height) || 0) > 0 ? n.height / F.height : 1;
    u.frameCanvasScale = Math.min(q, k);
    let A = 24, I = 24;
    const K = Math.max(A + 1, n.width - 24);
    let X = Math.max(I + 1, n.height - 24);
    const Q = (Se = p == null ? void 0 : p.getBoundingClientRect) == null ? void 0 : Se.call(p), R = (m = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : m.call(s);
    let te = 24;
    Q && F && Q.width > 0 && Q.height > 0 && (te = Math.max(te, (Q.right - F.left) * q + Fh)), R && F && R.width > 0 && R.height > 0 && ((f = g.frameRail) == null ? void 0 : f.visible) === !0 && (te = Math.max(te, (F.right - R.left) * q + Fh)), A = Math.max(A, te);
    const Me = Math.min(K, n.width - te);
    let Te = 24;
    const se = ($ = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : $.call(a);
    if (se && F && se.width > 0 && se.height > 0 && (Te = Math.max(Te, (se.bottom - F.top) * k + $c)), [l, y].forEach((S) => {
      var ce;
      if (!S || !F) return;
      const v = getComputedStyle(S);
      if (v.display === "none" || v.visibility === "hidden" || Number(v.opacity) <= 0) return;
      const j = (ce = S.getBoundingClientRect) == null ? void 0 : ce.call(S);
      !j || j.width <= 0 || j.height <= 0 || (Te = Math.max(Te, (F.bottom - j.top) * k + $c));
    }), o && F) {
      const S = getComputedStyle(o);
      S.display !== "none" && S.visibility !== "hidden" && Number(S.opacity) > 0 && (Te = Math.max(Te, (MC + $c) * k));
    }
    return I = Math.max(I, Te), X = Math.max(I + 1, Math.min(X, n.height - Te)), {
      x: A,
      y: I,
      w: Math.max(1, Me - A),
      h: Math.max(1, X - I)
    };
  }
  function E(F = D()) {
    if (!F || !n) return null;
    const q = u.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, n.width - 48),
      h: Math.max(1, n.height - 48)
    };
    return DS(q, F, Du * Ci(q, F));
  }
  function W(F = D()) {
    const q = E(F);
    return q ? { x: q.x, y: q.y, w: q.w, h: q.h } : null;
  }
  function de() {
    return c && !!D();
  }
  function fe(F, q) {
    const k = D();
    if (!k || k.locked === !0) return !1;
    const A = Number(q) > 0, I = rg(k, q);
    if (!I) return !1;
    if (A) {
      const K = Du * Ci(
        u.frameSafeRect || { w: n.width, h: n.height },
        I
      ), X = dd({ width: n.width, height: n.height }, K);
      if (X.halfW < n.width * 0.5 - 1e-6 || X.halfH < n.height * 0.5 - 1e-6) return !1;
    }
    return k.hFOV_deg = I.hFOV_deg, k.vFOV_deg = I.vFOV_deg, we(), ve(), !0;
  }
  function we() {
    r.frameWheelChanged = !0, r.frameWheelCommitTimer && window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = window.setTimeout(() => {
      r.frameWheelCommitTimer = 0, r.frameWheelChanged && (r.frameWheelChanged = !1, z(), C(), ve());
    }, 180);
  }
  function $e() {
    return t && r.mode === "frame" && T();
  }
  function oe() {
    const F = D(), q = E(F);
    return F && q ? Xg(F, q, { width: n.width, height: n.height }) : null;
  }
  function V() {
    var F;
    return ((F = U()) == null ? void 0 : F.radius) || ir;
  }
  function ae(F) {
    const { position: q, yaw_deg: k, pitch_deg: A, roll_deg: I, hFOV_deg: K } = F.shot;
    return { position: q, yaw_deg: k, pitch_deg: A, roll_deg: I, hFOV_deg: K, distance: V() };
  }
  function pe(F, q) {
    const { rect: k } = F;
    return i.pickSurface(re(F.shot), q.x - k.x, q.y - k.y, k.w, k.h);
  }
  function xe(F, q, k) {
    return fu(q, pe(F, k), null, B());
  }
  function Oe(F) {
    return JSON.stringify([ae(F), F.rect]);
  }
  function ie(F) {
    const q = D();
    q.position = [...F.position], q.yaw_deg = F.yaw_deg, q.pitch_deg = F.pitch_deg;
  }
  function Pe(F, q) {
    const k = D();
    !k || d || k.locked === !0 || (r.interaction = {
      kind: "pan_frame",
      shot: k,
      last: F,
      start: { yaw_deg: Number(k.yaw_deg || 0), pitch_deg: Number(k.pitch_deg || 0) },
      changed: !1
    }, le(F), n.setPointerCapture(q));
  }
  function w(F, q, k) {
    const A = oe();
    if (!A || d) return;
    const I = ae(A);
    r.interaction = F === "orbit" ? { kind: "frame_orbit", last: q, pivot: xe(A, I, q), changed: !1 } : { kind: "frame_pan", last: q, depth: Vg(I, B()), changed: !1 }, le(q), n.setPointerCapture(k);
  }
  function N(F, q) {
    const k = oe();
    if (!k) return;
    const A = ae(k), I = q.x - F.last.x, K = q.y - F.last.y;
    ie(F.kind === "frame_pan" ? zg(A, I, K, k.rect.w, k.rect.h, F.depth) : $g(A, I, K, n.height, F.pivot)), F.changed = F.changed || I !== 0 || K !== 0, F.last = q, ee({ localOnly: !0, cause: "frame_view" });
  }
  function J(F, q) {
    const k = oe();
    if (!k || d) return;
    const A = ae(k), I = performance.now(), K = { x: F.x, y: F.y, time: I, key: i.contentRevision(), view: Oe(k) };
    if (!Rg(ge, K)) {
      const X = pe(k, F);
      ge = { ...K, cost: performance.now() - I, hit: X };
    }
    ie(jg(A, fu(A, ge.hit, null, B()), q, B())), ge.view = Oe(oe() ?? k), ge.wheelTime = I, we(), ve(), ee({ localOnly: !0, cause: "frame_view" });
  }
  function ue() {
    return r.frameWheelCommitTimer && (window.clearTimeout(r.frameWheelCommitTimer), r.frameWheelCommitTimer = 0), r.frameWheelChanged ? (r.frameWheelChanged = !1, z(), C(), ve(), !0) : !1;
  }
  function P() {
    const F = r.interaction;
    if (!(F != null && F.shot) || !F.start || F.kind !== "pan_frame" && F.kind !== "roll_frame") return !1;
    const q = F.kind === "roll_frame";
    return F.kind === "pan_frame" ? (F.shot.yaw_deg = F.start.yaw_deg, F.shot.pitch_deg = F.start.pitch_deg) : F.shot.roll_deg = F.start.roll_deg, q && x(), r.interaction = null, H(), Y(), ve(), le(r.pointerPos), ee({ localOnly: !0 }), !0;
  }
  return {
    connect(F) {
      ({
        applySpaceMode: _,
        cancelViewTransition: b,
        commitAndRefreshNode: C,
        contentSphere: U,
        getActiveCutoutShot: D,
        hasSpaceContent: T,
        hideTooltip: x,
        invalidateLivePaintPreviewCaches: H,
        pushHistory: z,
        requestDraw: ee,
        shotViewCamera: re,
        spaceScale: B,
        spaceViewState: G,
        syncViewToggleState: Y,
        updateCursor: le,
        updateSidePanel: ve
      } = F);
    },
    leaveFrameView: he,
    measureFrameSafeRect: Z,
    getFrameViewLayout: E,
    getFrameViewRect: W,
    supportsFramePainting: de,
    zoomFrameViewAt: fe,
    isFreeFrameView: $e,
    frameContext: oe,
    frameViewDistance: V,
    frameSpaceView: ae,
    frameTarget: xe,
    startPanFrame: Pe,
    startFrameDrag: w,
    dragFrame: N,
    zoomFrameAt: J,
    flushFrameWheelCommit: ue,
    cancelFrameCameraGesture: P
  };
}
const Rh = /* @__PURE__ */ new Map(), or = c0({
  app: nr,
  api: fn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Tu,
    markImageFailed: iy,
    markImageLoading: ny,
    markImageReady: ry
  }
});
function $h(e) {
  if (!an(e, "background") || !an(e, "external-sticker")) return null;
  const t = or.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Ao(t[0]) : null;
}
function wI(e) {
  if (!an(e, "background")) return null;
  const [t] = or.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = or.uiValue(e, "pano_timeline_frames") || [], [r] = or.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: In(r) };
}
const xI = or.assetSource, kI = or.source, MI = or.uiImage, PI = or.invalidateUiImage, zh = or.loadPreferredExactLinkedImage;
async function NI(e, t, n = {}) {
  var qf, Xf;
  await z0(e, { tolerateOperationFailure: !0 }), or.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, a = $C(e, t);
  await $d();
  const s = cs(e, "output_preset"), l = cs(e, "coverage"), d = cs(e, "bg_color"), u = cs(e, hC), c = () => {
    const h = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return zh(
      e,
      h,
      () => et(),
      `background:size:${h.join("|")}`
    );
  }, p = () => {
    const h = c();
    return HC(h);
  }, g = (h = 2048) => {
    const M = s == null ? void 0 : s.value;
    return jC(M) ? p() || Math.max(1, Math.round(Number(h || 2048))) : zC(M, h);
  }, y = e.__panoSceneStateV2 === !0, _ = t === "stickers" && y, b = t === "cutout" && y, C = _ && e.__panoStudio === !0, U = b || C, D = t === "cutout" || C, T = b ? wI(e) : null, x = (y ? Ag : Ng)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((d == null ? void 0 : d.value) || "#00ff00"),
    coverage: T ? T.coverage : In(l == null ? void 0 : l.value),
    sharedUiSettings: GC(),
    active: Og(e),
    fps: y ? $h(e) : null,
    scene: (T == null ? void 0 : T.state) ?? null,
    camera: b
  });
  e.__panoLiveStateOverride = x, e.__panoLiveStateVersion = 0;
  let H = null;
  U ? (H = x.camera && (!C || x.camera.visible !== !1) ? Ig(x.camera, 0) : null, x.shots = H ? [{ ...H, position: [...H.position] }] : [], x.active.selected_shot_id = H && b ? Cl : null) : t === "cutout" && (x.shots = Array.isArray(x.shots) ? x.shots.slice(0, 1) : [], x.shots.length || (x.active.selected_shot_id = null));
  const z = t === "cutout" ? (() => {
    var L;
    const h = Array.isArray(x.shots) ? x.shots : [], M = String(((L = x == null ? void 0 : x.active) == null ? void 0 : L.selected_shot_id) || "");
    return h.find((ye) => String((ye == null ? void 0 : ye.id) || "") === M) || h[0] || null;
  })() : null, ee = z ? dy(z, !1) : { width: 220, height: 132 }, re = ty(C ? "studio" : t), B = /* @__PURE__ */ ko({
    stageStatus: er,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (re.viewButtons || []).map((h) => ({ ...h, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (qf = re.spaceButtons) != null && qf.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: re.spaceButtons, frame: re.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (re.toolButtons || []).map((h) => ({
      ...h,
      disabled: !1,
      ...h.key === "add-world" ? { visible: _ } : {},
      ...b && IC.has(h.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(re.floatingButtons || []).map((h) => ({ ...h, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ye.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ye.aspect,
      rotateIcon: Ye.rotate_90,
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
      icon: Ye.fullscreen,
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
      customColorCss: dr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: dr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (h, M) => ({ index: M, color: null })),
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
      hasAudio: !1,
      muted: !1,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640
    },
    sidePanel: {},
    timeline: { visible: !1 },
    easing: null,
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: t === "cutout",
      ready: !1,
      settled: !1,
      expanded: !1,
      width: ee.width,
      height: ee.height,
      label: z ? "Loading preview" : "Add Frame to preview"
    }
  }), G = { frame: /* @__PURE__ */ Cs(0), playing: /* @__PURE__ */ Cs(!1) }, Y = document.createElement("div");
  document.body.appendChild(Y);
  const le = ({ intent: h, file: M } = {}) => {
    if (tr(M)) {
      if (h === "add") {
        yn(M);
        return;
      }
      if (h === "add-world") {
        Xt(M);
        return;
      }
      h === "replace" && ub(M);
    }
  }, ve = ({ intent: h } = {}) => {
  }, ge = td(fC, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: re,
    paintSwatches: sl.map((h) => ({
      id: h.id,
      label: h.label,
      cssColor: dr(h.color, 1)
    })),
    uiState: B,
    playhead: G,
    onClose: () => {
      Yi();
    },
    onTimeline: (h) => nb(h),
    onImageFileSelected: le,
    onImageFileCancelled: ve
  });
  let he = null;
  try {
    he = ge.mount(Y);
  } catch (h) {
    try {
      ge.unmount();
    } catch {
    }
    throw Y.remove(), h;
  }
  const Z = Y.querySelector(".pano-modal-overlay"), E = Y.querySelector(".pano-modal"), W = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), de = E == null ? void 0 : E.querySelector("[data-stage-background]"), fe = E == null ? void 0 : E.querySelector(".pano-stage-wrap"), we = ((Xf = he == null ? void 0 : he.getPaintOverlayRefs) == null ? void 0 : Xf.call(he)) || {}, $e = we.cursor || null, oe = we.sizePreview || null, V = we.sizeSample || null;
  if (!Z || !E || !W || !de || !fe || !$e || !oe || !V)
    throw ge.unmount(), Y.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ae = W.getContext("2d"), pe = E.querySelector("[data-side]"), xe = E.querySelector("[data-video-element]"), Oe = E.querySelector("[data-port-video-element]");
  mc(W, "editor.stage-overlay"), mc(de, "editor.stage-background"), Tp(xe, "editor.video"), Tp(Oe, "editor.port-video");
  const ie = E.querySelector(".pano-floating-right"), Pe = E.querySelector(".pano-floating-top"), w = E.querySelector("[data-tool-rail]"), N = E.querySelector("[data-frame-rail]"), J = E.querySelector("[data-frame-roll-knob]"), ue = E.querySelector("[data-paint-dock]"), P = E.querySelector(".pano-video-transport"), F = E.querySelector("[data-selection-menu]");
  let q = !1;
  const k = E.querySelector("[data-tooltip]"), A = E.querySelector("[data-camera-preview-host]"), I = E.querySelector("[data-camera-preview-canvas]");
  mc(I, "editor.camera-preview");
  const K = E.querySelector("[data-paint-color-row]"), X = E.querySelector("[data-paint-color-pop]"), Q = E.querySelector("[data-paint-color-sv]"), R = E.querySelector("[data-paint-color-sv-cursor]"), te = E.querySelector("[data-paint-hue-strip]"), Me = E.querySelector("[data-paint-hue-handle]");
  let Te = 0;
  fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", "boot"), W.style.opacity = "1", de.style.opacity = "0", i && (pe == null || pe.remove(), E.classList.add("pano-modal-readonly"));
  const se = () => {
    if (!f.customPaintSessionStart) return;
    if (cl(f.customPaintSessionStart, f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    if (VC(f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    const h = [
      Fn(f.customPaintColor),
      ...f.customPaintHistory.filter((M) => !cl(M, f.customPaintColor))
    ];
    f.customPaintHistory = h.slice(0, 8), f.customPaintSessionStart = null;
  }, be = (h = !1) => {
    !X || X.hidden || (h ? se() : f.customPaintSessionStart = null, X.hidden = !0, B.paintDock.colorPopOpen = !1);
  }, Se = () => {
    X && (X.hidden && (f.customPaintSessionStart = Fn(f.customPaintColor)), X.hidden = !1, B.paintDock.colorPopOpen = !0);
  };
  E.addEventListener("pointerdown", () => me.wake(), !0), E.addEventListener("pointerdown", (h) => {
    var M;
    h.target.closest("[data-frame-roll-knob]") || Ki(), !h.target.closest(".pano-picker") && (h.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((L) => {
      L.hidden = !0;
    }), be(!0), D && f.cutoutAspectOpen && !h.target.closest(".pano-aspect-popover") && !h.target.closest("[data-action='aspect']") && (f.cutoutAspectOpen = !1, f.menuMode = "", f.menuSize.measured = !1, Ut(), et()), (M = B.frameRail) != null && M.aspectOpen && !h.target.closest(".pano-frame-aspect-control") && (B.frameRail.aspectOpen = !1)));
  });
  const f = {
    mode: "pano",
    selectedId: t === "stickers" ? x.active.selected_sticker_id : x.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: ir,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: In(x.coverage),
    historyController: eI(x),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Ir,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: KC(e == null ? void 0 : e.id, !0),
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
    paintEngine: od(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    altModifier: !1,
    panelLastValues: null,
    // PanoramaStickersNode: the id of the world Sticker selected in the space view or on its Timeline row
    // (#72). The canvas selection (selectedId) holds sky Stickers only; selecting one clears the other.
    worldSelectedId: null,
    // The mode of the selected world Sticker's gizmo: "translate", "rotate" or "scale".
    gizmoMode: "translate",
    // The gizmo handle under the pointer, or null.
    gizmoAxis: null,
    panelWasEnabled: !1,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, $ = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let S = null;
  t === "stickers" && (f.selectedId = null, x.active.selected_sticker_id = null), f.selectedIds = f.selectedId ? [f.selectedId] : [];
  const v = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), Ae = mn({ label: "editor.still" });
  Ae.__panoFrameIdx = 0;
  const Ce = mn({ label: "editor.port-still" });
  Ce.__panoFrameIdx = 0;
  const O = {
    // The next frame draws the stage (tickFrame); it waits while the layout settles, keeping the reasons
    // asked for since the last draw.
    dirty: !0,
    reasons: /* @__PURE__ */ new Set(),
    running: !0,
    lastTickTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    // The three.js canvas needs drawing again. A frame that only changes the 2D overlay leaves it as it
    // is, and the page keeps showing its last frame.
    backgroundDirty: !0,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, me = VP({
    requestAnimationFrame: (h) => requestAnimationFrame(h),
    cancelAnimationFrame: (h) => cancelAnimationFrame(h),
    draw: (h, M) => Ib(h, M),
    animating: () => Cy()
  }), Ie = DP({
    requestFrame: (h) => me.requestFrame(h),
    cancelFrame: (h) => me.cancelFrame(h),
    tasks: {
      seek: () => ji.seek($.scrubFrame),
      timeline: () => vf(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        ql(), et({ localOnly: !0, reason: yt.STATE });
      },
      sidePanel: () => zt()
    }
  }), Ve = Rx({
    canvas: de,
    onReady: () => {
      Yl(), et({ reason: yt.CONTEXT });
    },
    onFailed: () => et(),
    onUpdate: () => et({ localOnly: !0, reason: yt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      Ty(), Yl(), et({ reason: yt.CONTEXT });
    }
  }), Ke = Number.parseFloat(
    getComputedStyle(E).getPropertyValue("--pano-float-radius")
  ) || 10, Ge = (h) => {
    const M = String(h || "default");
    W.style.cursor !== M && (W.style.cursor = M);
  }, Ue = {
    timer: 0,
    target: null
  }, tt = {
    active: !1,
    depth: 0
  }, ct = sd({
    getView: () => ({ yaw: f.viewYaw, pitch: f.viewPitch, fov: f.viewFov }),
    setView: (h) => {
      f.viewYaw = Dt(Number(h.yaw || 0)), f.viewPitch = Fe(Number(h.pitch || 0), -89.9, 89.9), f.viewFov = Fe(Number(h.fov || f.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const h = W.getBoundingClientRect();
      return {
        w: Math.max(1, Number(h.width || W.clientWidth || 0)),
        h: Math.max(1, Number(h.height || W.clientHeight || 0))
      };
    },
    getInvert: () => {
      var h, M;
      return {
        x: (h = x.ui_settings) != null && h.invert_view_x ? -1 : 1,
        y: (M = x.ui_settings) != null && M.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Rl(),
    onInteraction: () => me.requestDraw(yt.VIEW)
  }), {
    addCutoutFrame: At,
    addImageSticker: $t,
    addImageStickerFromFile: yn,
    addStudioCamera: Rn,
    addWorldImageSticker: nn,
    addWorldStickerFromFile: Xt,
    apply: ni,
    applyCutoutAspectCustom: Ti,
    applyInitialCutoutFocus: Ta,
    applyRasterObjectOffset: bn,
    applyRasterObjectTransform: Yn,
    applySharedRollInteractionPoint: Da,
    applyStrokeGroupOffset: Di,
    applyStrokeGroupTransform: Gr,
    applyVideoTimelineFps: fy,
    areAllSelectedItemsLocked: py,
    bringSelectedToFront: hy,
    buildCanonicalCutoutStickerState: my,
    buildCanonicalSelectedStickerState: gy,
    buildRasterObjectEditCanvas: yy,
    cameraShoots: by,
    canRestoreSelectedToInitial: vy,
    cancelFrameCameraGesture: Eo,
    cancelViewTransition: Ud,
    clearAll: _y,
    clearPaintingLayer: Sy,
    clearSelection: Oo,
    commitAndRefreshNode: ri,
    commitState: kr,
    contentSphere: wy,
    createRasterFrozenObjectsFromCanvas: xy,
    createRasterSurface: Yd,
    currentSpaceCamera: Ol,
    cutoutCamera: ky,
    deleteSelected: qd,
    deleteSelectedKeyframes: My,
    deleteSelectedWorldSticker: Py,
    dragFrame: Ny,
    duplicateSelected: Ay,
    editorAnimating: Cy,
    editorViewInput: Fl,
    ensureGroupFrame: Li,
    ensurePaintingGroupEntry: Xd,
    erpPointToWorldDir: Iy,
    finishKnobRoll: Ey,
    flushFrameWheelCommit: Oy,
    forceCursorTool: Fy,
    forgetCameraPreviewFrame: Ty,
    frameContext: Dy,
    frameLocalPointToWorldDir: Jd,
    frameSpaceContent: Ly,
    frameSpaceView: Vy,
    frameTarget: Ry,
    getActiveCutoutShot: Bt,
    getActivePaintTargetDescriptor: qn,
    getCutoutInspectorItems: $y,
    getCutoutSelectableItems: zy,
    getCutoutSelectableItemsForHit: Tl,
    getDisplayListObjects: jy,
    getFrameViewLayout: Hy,
    getFrameViewRect: Vi,
    getHistoryCapabilities: Gy,
    getList: Dl,
    getMultiSelectionGeom: La,
    getOrderedDisplayListObjects: Zd,
    getPaintingGroupList: Ll,
    getRasterObjectCenterUv: Wy,
    getRasterObjectItem: Qd,
    getRasterObjectList: Ri,
    getSelectableRasterObjectItems: Ky,
    getSelectableStrokeGroupItems: By,
    getSelected: Mr,
    getSelectedItems: Va,
    getSelectedKind: Vl,
    getStrokeGroupCenterUv: Uy,
    getStrokeGroupItem: ef,
    getStrokeGroupStrokes: $i,
    getUnwrapRect: Rl,
    hitRasterObjectAt: tf,
    invalidateLivePaintPreviewCaches: Fo,
    isCameraSelected: Ra,
    isErpCamera: $l,
    isExternalSticker: Yy,
    isFreeFrameView: zl,
    isFreeSpaceView: ii,
    isItemLocked: Pr,
    isRasterObjectItem: oi,
    isSceneSticker: $a,
    isShotItem: To,
    isSpaceView: jl,
    isStickerHidden: qy,
    isStickerItem: Xn,
    isStrokeGroupItem: sr,
    makeRasterObjectSelectionId: nf,
    makeStrokeGroupSelectionId: rf,
    markObjectVisualsDirty: Wr,
    markPaintCompositeVisualsDirty: za,
    markPaintStrokeVisualsDirty: zi,
    migrateLegacyEmbeddedAssets: Xy,
    objectGeom: rn,
    onCanvasDragOver: Jy,
    onCanvasDrop: Zy,
    onFrameRollKnobDoubleClick: Qy,
    onFrameRollKnobPointerDown: eb,
    onFrameRollKnobPointerMove: tb,
    onTimelineAction: nb,
    onWindowDragEnter: of,
    onWindowDragLeave: af,
    onWindowDragOver: sf,
    onWindowDrop: lf,
    paintingShown: rb,
    parseRasterObjectSelectionId: Do,
    persistUiSettings: Hl,
    playback: ji,
    playbackFps: ib,
    poseOf: On,
    processFreehandPoints: cf,
    pushHistory: sn,
    queueVideoTransportLayout: ob,
    rasterizeStrokeToSurface: ab,
    rebuildPaintEngineIfNeeded: sb,
    reconcileExternalStickerFromInputs: uf,
    refreshModalVideoSource: Gl,
    refreshPaintEngineRevisionCache: lb,
    replaceSelectedImage: cb,
    replaceSelectedImageFromFile: ub,
    requestDraw: et,
    restoreHistory: Wl,
    restoreSelectedToInitialPose: db,
    rotateCutoutAspect90: df,
    sampleEditorDiagnostics: fb,
    screenPos: ai,
    screenPosCss: ja,
    screenPosToErpPoint: lr,
    screenPosToFrameAsErpPoint: Jn,
    screenToWorldDir: ff,
    selectWorldSticker: pb,
    selectedWorldSticker: pf,
    sendSelectedToBack: hb,
    setDropCue: mb,
    setSelectedItem: hf,
    setSelectedItems: gb,
    setShotAspect: mf,
    setSpaceMode: yb,
    setSpaceView: bb,
    shortestWrappedDelta: Ha,
    spaceOrigin: vb,
    spaceViewState: _b,
    stageResizeObserver: Sb,
    startAnimation: Kl,
    startCameraPress: wb,
    startFrameDrag: xb,
    startPanFrame: gf,
    startSpaceDrag: yf,
    stickerCornerOrderSanity: kb,
    stopRenderLoop: Mb,
    stopTimelinePlayback: Bl,
    supportsFramePainting: Ul,
    syncCanvasSize: Yl,
    syncCoverageChangeToNodePreviews: Pb,
    syncCutoutShot: ql,
    syncFloatingViewButtonState: bf,
    syncFrameRollKnob: Xl,
    syncLookAtFrameButtonState: Nb,
    syncPaintUi: Zn,
    syncPaintingLayerAsync: Ab,
    syncSidePanelControls: Hi,
    syncTimeline: vf,
    syncUndoRedoButtons: Cb,
    syncVideoTransportState: _f,
    syncViewToggleState: Gi,
    tick: Ib,
    togglePlayback: Sf,
    toggleSelectedExternalStickerVisibility: Eb,
    toggleSelectedLock: Ob,
    toggleVideoMuted: Fb,
    transitionView: Tb,
    triggerBackgroundPersistenceOnClose: Db,
    turnViewTo: Lb,
    updateSidePanel: zt,
    videoCleanupFns: Vb,
    videoState: Ga,
    viewControls: Jl,
    watchPixelRatio: Rb,
    worldDirToFrameLocalPoint: wf,
    worldStickerEditable: $b,
    writePose: Qn,
    zoomFrameAt: zb,
    zoomFrameViewAt: jb,
    zoomSpaceAt: Hb
  } = UC({
    api: fn,
    app: nr,
    backgroundCanvas: de,
    bgWidget: d,
    cameraV2: U,
    canvas: W,
    capture: T,
    comfyMedia: or,
    coverageWidget: l,
    ctx: ae,
    cutoutPreviewCanvas: I,
    cutoutPreviewHost: A,
    cutoutV2: b,
    dragCue: tt,
    dragFrames: Ie,
    editor: f,
    editorView: Ve,
    floatingRightEl: ie,
    floatingTopEl: Pe,
    frameGateCssRadius: Ke,
    frameRailEl: N,
    frameRollKnobEl: J,
    getBrushPresetIdForTool: Wi,
    getPaintingLayerList: Zl,
    hideSidebar: i,
    hideTooltip: Ki,
    imageCache: v,
    initialShotBase: H,
    isActiveLassoTool: Wb,
    isPaintCursorEnabled: Mf,
    isWorldMenuShown: n1,
    loadPreferredExactLinkedImage: zh,
    mediaAssetSource: xI,
    mediaSource: kI,
    mediaUiImage: MI,
    node: e,
    paintColorPop: X,
    paintColorRow: K,
    paintColorSvCursor: R,
    paintDockEl: ue,
    paintHueHandle: Me,
    portStillCanvas: Ce,
    portVideoEl: Oe,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: ne,
    rasterImageAlphaCache: ce,
    rasterImageCache: j,
    readOnly: r,
    rectFromPoints: If,
    resolveEditorOutputPresetWidth: g,
    runtime: O,
    sceneV2: _,
    scheduler: me,
    setCanvasCursor: Ge,
    shotEditor: D,
    stageWrap: fe,
    state: x,
    stateV2: y,
    stateWidget: u,
    stillCanvas: Ae,
    studio: C,
    timeline: $,
    timelinePlayhead: G,
    toolRailEl: w,
    tooltip: Ue,
    type: t,
    uiState: B,
    updateCursor: kt,
    updateSelectionMenu: Ut,
    videoEl: xe,
    videoTimelineFps: $h,
    videoTransportEl: P,
    viewController: ct,
    vueModal: he,
    worldGizmoPointer: Bi
  }, [
    JC,
    tI,
    nI,
    rI,
    iI,
    oI,
    aI,
    sI,
    lI,
    cI,
    uI,
    dI,
    fI,
    pI,
    hI,
    mI,
    gI,
    yI,
    bI,
    vI,
    _I,
    SI
  ]);
  kb();
  function Gb() {
    return f.primaryTool === "mask" ? f.maskTool : f.paintTool;
  }
  function Wb() {
    return String(Gb() || "") === "lasso_fill";
  }
  Sb.observe(W), Rb();
  const xf = () => kr();
  r || (e.__panoFlushStateBeforeQueue = xf);
  function kf() {
    return f.mode === "pano" || f.mode === "unwrap";
  }
  function Kb(h, M) {
    const L = Number(M || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, L / 2048)
    };
  }
  function Wi(h) {
    const M = String(h || "").trim();
    return M === "eraser" ? Ir : Pn[M] ? M : f.activeBrushPresetId || Ir;
  }
  function Mf() {
    return (f.primaryTool === "paint" || f.primaryTool === "mask") && (kf() || Ul());
  }
  function Pf() {
    var h;
    return Mf() && ((h = f.pointerPos) == null ? void 0 : h.inside) === !0;
  }
  function Wa(h, M = !0) {
    const L = Number((h == null ? void 0 : h.x) || 0), ye = Number((h == null ? void 0 : h.y) || 0), _e = M !== !1, ke = f.pointerPos || { x: 0, y: 0, inside: !1 }, Ee = ke.inside !== _e || Math.abs(ke.x - L) > 0.01 || Math.abs(ke.y - ye) > 0.01;
    return f.pointerPos = { x: L, y: ye, inside: _e }, Ee;
  }
  function Bb() {
    var ze, je;
    if (!Pf()) return null;
    const h = f.primaryTool === "mask" ? "mask" : "paint", M = h === "mask" ? f.maskTool : f.paintTool, L = Wi(M), ye = Pn[L] || Pn[Ir], _e = Number(f.brushSizes[L] ?? 10), ke = Math.max(1, _e) * Math.max(0.1, Number(ye.sizeScale ?? 1)), Ee = Math.max(3, ke * 0.5), Le = h === "mask" ? M === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : M === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Fn(f.paintColor), De = h === "mask" ? M === "lasso_fill" ? 0.18 : 0.2 : M === "eraser" ? 0.06 : Fe(Math.max(0.16, Number(Le.a ?? 1) * 0.3), 0.16, 0.52), Je = h === "mask" ? 0.95 : M === "eraser" ? 0.75 : Fe(Math.max(0.46, Number(Le.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: h,
      toolKind: M,
      preset: ye,
      radius: Ee,
      fillStyle: dr(Le, De),
      strokeStyle: dr(Le, Je),
      x: Number(((ze = f.pointerPos) == null ? void 0 : ze.x) || 0),
      y: Number(((je = f.pointerPos) == null ? void 0 : je.y) || 0),
      hotspotX: Ee,
      hotspotY: Ee
    };
  }
  function Ub() {
    var Be, nt, We;
    const h = Bb();
    if (!$e) return;
    if (!h) {
      $e.style.display = "none";
      return;
    }
    let M = h.radius * 2, L = h.radius * 2, ye = "999px", _e = 0, ke = h.fillStyle, Ee = "1px solid rgba(222, 222, 222, 0.72)", Le = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const De = "rgba(222, 222, 222, 0.72)", Je = "rgba(52, 52, 52, 0.72)";
    let ze = Number(h.hotspotX ?? M * 0.5), je = Number(h.hotspotY ?? L * 0.5);
    if (h.toolKind === "lasso_fill")
      M = ll, L = ll, ye = "0", Ee = "0", Le = "none", ze = AC, je = CC, ke = LC(h.fillStyle, Je, De);
    else if (h.layerKind === "mask")
      ke = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (h.toolKind === "marker") {
      const bt = Math.max(1, Number(((Be = h.preset) == null ? void 0 : Be.aspect) ?? 1));
      M = Math.max(10, h.radius * 2 * bt), L = Math.max(6, h.radius * 2), ye = `${Math.min(6, L * 0.42)}px`, _e = Number(((We = (nt = h.preset) == null ? void 0 : nt.angle) == null ? void 0 : We.value) || 0) * wi;
    } else h.toolKind === "brush" ? ke = `radial-gradient(circle at 50% 50%, ${h.strokeStyle} 0%, ${h.fillStyle} 45%, rgba(0,0,0,0) 100%)` : h.toolKind === "eraser" && (ke = "rgba(255,255,255,0.14)");
    $e.style.display = "block", $e.style.width = `${Math.round(M)}px`, $e.style.height = `${Math.round(L)}px`, $e.style.borderRadius = ye, $e.style.border = Ee, $e.style.boxShadow = Le, $e.style.background = ke, $e.style.backgroundRepeat = "no-repeat", $e.style.backgroundPosition = "center", $e.style.backgroundSize = "contain", $e.style.transform = `translate(${Math.round(h.x - ze)}px, ${Math.round(h.y - je)}px) rotate(${_e}deg)`;
  }
  function Yb() {
    var en;
    if (!oe || !V) return;
    const h = f.primaryTool === "mask" ? "mask" : "paint", M = h === "mask" ? f.maskTool : f.paintTool;
    if (M === "lasso_fill") return;
    const L = Wi(M), ye = Pn[L] || Pn[Ir], _e = Number(f.brushSizes[L] ?? 10), ke = Math.max(1, _e) * Math.max(0.1, Number(ye.sizeScale ?? 1)), Ee = Math.max(6, ke * 0.5), Le = M === "eraser", De = h === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : Le ? { r: 1, g: 1, b: 1, a: 0.22 } : Fn(f.paintColor), Je = h === "mask" ? dr(De, 0.22) : Le ? "rgba(255,255,255,0.14)" : dr(De, Fe(Math.max(0.18, Number(De.a ?? 1) * 0.34), 0.18, 0.56)), ze = h === "mask" ? dr(De, 0.96) : Le ? "rgba(255,255,255,0.72)" : dr(De, Fe(Math.max(0.56, Number(De.a ?? 1) * 0.96), 0.56, 1));
    let je = Ee * 2, Be = Ee * 2, nt = "999px", We = 0, bt = Je;
    const Vt = "rgba(222, 222, 222, 0.72)", on = "rgba(52, 52, 52, 0.72)";
    if (h === "mask")
      bt = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (M === "marker") {
      const si = Math.max(1, Number((ye == null ? void 0 : ye.aspect) ?? 1));
      je = Math.max(16, Ee * 2 * si), Be = Math.max(10, Ee * 2), nt = `${Math.min(8, Be * 0.42)}px`, We = Number(((en = ye == null ? void 0 : ye.angle) == null ? void 0 : en.value) || 0) * wi;
    } else M === "brush" ? bt = `radial-gradient(circle at 50% 50%, ${ze} 0%, ${Je} 48%, rgba(0,0,0,0) 100%)` : M === "lasso_fill" ? (je = Math.max(18, Ee * 1.8), Be = je, bt = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${ze} 43%, ${ze} 58%, rgba(0,0,0,0) 59%)`) : Le && (bt = "rgba(255,255,255,0.12)");
    V.style.width = `${Math.round(je)}px`, V.style.height = `${Math.round(Be)}px`, V.style.borderRadius = nt, V.style.background = bt, V.style.border = `1px solid ${Vt}`, V.style.boxShadow = `0 0 0 1px ${on}`, V.style.transform = `rotate(${We}deg)`, Te && (clearTimeout(Te), Te = 0), oe.classList.remove("fade-out"), oe.classList.add("show");
  }
  function Ka() {
    !oe || !oe.classList.contains("show") || (oe.classList.add("fade-out"), Te && clearTimeout(Te), Te = window.setTimeout(() => {
      oe.classList.remove("show", "fade-out"), Te = 0;
    }, 180));
  }
  function Nf(h, M, L, ye) {
    const _e = Wi(M), ke = Pn[_e] || Pn[Ir], Ee = f.brushSizes[_e] ?? 10, Le = Math.max(1, Ee) * Math.max(0.1, ke.sizeScale ?? 1), De = Kb(ye, Le), Je = L.map((je) => ({
      ...je,
      t: Number((je == null ? void 0 : je.t) || 0),
      widthScale: Number.isFinite(Number(je == null ? void 0 : je.widthScale)) ? Math.max(0, Number(je.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(je == null ? void 0 : je.pressureLike)) ? Math.max(0, Number(je.pressureLike)) : 1
    })), ze = {
      id: io(h),
      actionGroupId: io("ag"),
      targetSpace: ye && typeof ye == "object" ? { ...ye, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: h,
      toolKind: M,
      size: Le,
      createdAt: Date.now(),
      color: h === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: De.radiusModel,
      radiusValue: De.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: Je.map((je) => ({ ...je })),
        points: Je.map((je) => ({ ...je }))
      }
    };
    return Eh(ze, ke), f.mode, Number(ke.aspect ?? 1), Number(ze.aspect ?? 1), String(ze.stampKind || ""), Number(ze.size || 0), String(ze.radiusModel || ""), Number(ze.radiusValue || 0), { ...ze.targetSpace }, ze;
  }
  function Af(h, M, L, ye) {
    const _e = L.map((De) => ({
      ...De,
      t: Number((De == null ? void 0 : De.t) || 0),
      widthScale: Number.isFinite(Number(De == null ? void 0 : De.widthScale)) ? Math.max(0, Number(De.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(De == null ? void 0 : De.pressureLike)) ? Math.max(0, Number(De.pressureLike)) : 1
    })), ke = Wi(M), Ee = Pn[ke] || Pn[Ir], Le = {
      id: io(h),
      actionGroupId: io("ag"),
      targetSpace: ye && typeof ye == "object" ? { ...ye, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: h,
      toolKind: M,
      size: 10,
      createdAt: Date.now(),
      color: h === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: _e.map((De) => ({ ...De }))
      }
    };
    return Eh(Le, Ee), f.mode, Number(Ee.aspect ?? 1), Number(Le.aspect ?? 1), String(Le.stampKind || ""), { ...Le.targetSpace }, Le;
  }
  function Zl(h) {
    const M = x.painting || (x.painting = Po(null)), L = M[h] || (M[h] = { strokes: [] });
    return Array.isArray(L.strokes) || (L.strokes = []), L.strokes;
  }
  function qb(h, M, L = performance.now()) {
    let ye;
    if (f.mode === "frame") {
      const Je = Bt();
      if (!Je || (ye = Jn(M, Je, L), !ye)) return !1;
    } else
      ye = lr(M, L);
    if (!ye) return !1;
    const _e = h.stroke.geometry.rawPoints || h.stroke.geometry.points, ke = h.stroke.geometry.points, Ee = _e[_e.length - 1];
    if (Ee) {
      const Je = Math.abs(Number(ye.u ?? ye.x ?? 0) - Number(Ee.u ?? Ee.x ?? 0)), ze = Math.abs(Number(ye.v ?? ye.y ?? 0) - Number(Ee.v ?? Ee.y ?? 0));
      if (Je < 15e-4 && ze < 15e-4) return !1;
    }
    const Le = {
      ...ye,
      t: Number((ye == null ? void 0 : ye.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    _e.push({ ...Le }), ke.push({ ...Le });
    const De = qn(h);
    if (De) {
      const Je = f.paintEngine.ensureTarget(De);
      f.paintEngine.appendStrokePoint(Je, Number(Le.u ?? 0), Number(Le.v ?? 0), h.stroke);
    }
    return !0;
  }
  function Xb(h, M, L = performance.now()) {
    var Ee, Le;
    let ye;
    if (f.mode === "frame") {
      const De = Bt();
      if (!De) return !1;
      ye = Jn(M, De, L);
    } else
      ye = lr(M, L);
    const _e = (Le = (Ee = h == null ? void 0 : h.stroke) == null ? void 0 : Ee.geometry) == null ? void 0 : Le.points;
    if (!ye || !Array.isArray(_e)) return !1;
    const ke = _e[_e.length - 1];
    if (ke) {
      const De = Math.abs(Number(ye.u ?? ye.x ?? 0) - Number(ke.u ?? ke.x ?? 0)), Je = Math.abs(Number(ye.v ?? ye.y ?? 0) - Number(ke.v ?? ke.y ?? 0));
      if (De < 15e-4 && Je < 15e-4) return !1;
    }
    return _e.push({
      ...ye,
      t: Number((ye == null ? void 0 : ye.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Jb(h) {
    var si, Vo, li, Ro, $o;
    const M = (h == null ? void 0 : h.stroke) || null;
    if (!M || (h == null ? void 0 : h.layerKind) !== "paint" || String((M == null ? void 0 : M.toolKind) || "") !== "eraser") return !1;
    sb();
    const L = qn(), ye = Yd(L.width, L.height);
    if (!ab(ye, M, { w: L.width, h: L.height })) return !1;
    const _e = ((Vo = (si = ye.ctx) == null ? void 0 : si.getImageData(0, 0, L.width, L.height)) == null ? void 0 : Vo.data) || null;
    if (!_e) return !1;
    const ke = new Map(Ll().map((Xe) => [String((Xe == null ? void 0 : Xe.actionGroupId) || (Xe == null ? void 0 : Xe.id) || "").trim(), Xe ? { ...Xe } : null])), Ee = [], Le = [], De = [...Ri().filter((Xe) => String((Xe == null ? void 0 : Xe.layerKind) || "paint") !== "paint")];
    let Je = !1, ze = jy().reduce((Xe, qe) => Math.max(Xe, Number((qe == null ? void 0 : qe.z_index) || 0)), -1) + 1;
    function je(Xe, qe, Ze, it = 8) {
      let rt = qe, vt = Ze, mt = -1, Ot = -1;
      for (let gt = 0; gt < Ze; gt += 1)
        for (let Yt = 0; Yt < qe; Yt += 1)
          Xe[(gt * qe + Yt) * 4 + 3] <= it || (Yt < rt && (rt = Yt), gt < vt && (vt = gt), Yt > mt && (mt = Yt), gt > Ot && (Ot = gt));
      return mt < rt || Ot < vt ? null : { minX: rt, minY: vt, maxX: mt, maxY: Ot };
    }
    const Be = je(_e, L.width, L.height, 8);
    if (!Be) return !1;
    function nt(Xe, qe) {
      return !Xe || !qe ? !1 : !(Xe.maxX < qe.minX || qe.maxX < Xe.minX || Xe.maxY < qe.minY || qe.maxY < Xe.minY);
    }
    function We(Xe, qe) {
      const Ze = Li((Xe == null ? void 0 : Xe.actionGroupId) || (Xe == null ? void 0 : Xe.id) || "", "paint", qe);
      if (!Ze) return null;
      const it = Ze.centerUv.u - Ze.halfW, rt = Ze.centerUv.u + Ze.halfW, vt = Ze.centerUv.v - Ze.halfH, mt = Ze.centerUv.v + Ze.halfH, Ot = L.width, gt = L.height;
      return {
        minX: Math.floor((it % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((rt % 1 + 1) % 1 * Ot),
        minY: Math.floor(Fe(vt, 0, 1) * gt),
        maxY: Math.ceil(Fe(mt, 0, 1) * gt),
        wraps: rt - it >= 1 || it < 0 || rt > 1
      };
    }
    function bt(Xe) {
      const qe = (Xe == null ? void 0 : Xe.bbox) || null;
      if (!qe) return null;
      const Ze = (Xe == null ? void 0 : Xe.transform) || {}, it = L.width, rt = L.height, vt = Number(qe.u0 || 0) + Number(Ze.du || 0), mt = Number(qe.u1 || 0) + Number(Ze.du || 0), Ot = Number(qe.v0 || 0) + Number(Ze.dv || 0), gt = Number(qe.v1 || 0) + Number(Ze.dv || 0);
      return {
        minX: Math.floor((vt % 1 + 1) % 1 * it),
        maxX: Math.ceil((mt % 1 + 1) % 1 * it),
        minY: Math.floor(Fe(Ot, 0, 1) * rt),
        maxY: Math.ceil(Fe(gt, 0, 1) * rt),
        wraps: mt - vt >= 1 || vt < 0 || mt > 1
      };
    }
    function Vt(Xe) {
      return Xe ? Xe.wraps ? nt(Be, { minX: 0, maxX: Xe.maxX, minY: Xe.minY, maxY: Xe.maxY }) || nt(Be, { minX: Xe.minX, maxX: L.width - 1, minY: Xe.minY, maxY: Xe.maxY }) : nt(Be, Xe) : !0;
    }
    function on(Xe) {
      if (!Xe) return { touched: !1, canvas: null };
      const qe = Yd(L.width, L.height, { readback: !0 });
      qe.ctx.drawImage(Xe, 0, 0);
      const Ze = qe.ctx.getImageData(0, 0, L.width, L.height);
      qe.ctx.save(), qe.ctx.globalCompositeOperation = "destination-out", qe.ctx.drawImage(ye.canvas, 0, 0), qe.ctx.restore();
      const it = qe.ctx.getImageData(0, 0, L.width, L.height);
      for (let rt = 0; rt < L.width * L.height; rt += 1) {
        if (_e[rt * 4 + 3] <= 8) continue;
        const mt = Ze.data[rt * 4 + 3], Ot = it.data[rt * 4 + 3];
        if (mt > Ot)
          return { touched: !0, canvas: qe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function en(Xe, qe, Ze) {
      const it = Number(Ze == null ? void 0 : Ze.z_index), rt = xy(Xe, qe, Ze).map((vt, mt) => ({
        ...vt,
        z_index: Number.isFinite(it) ? it + mt * 1e-3 : ze + mt * 1e-3
      }));
      return rt.length && (ze = Math.max(ze, ...rt.map((vt) => Number((vt == null ? void 0 : vt.z_index) || 0))) + 1), rt;
    }
    for (const Xe of Ll()) {
      const qe = String((Xe == null ? void 0 : Xe.actionGroupId) || (Xe == null ? void 0 : Xe.id) || "").trim();
      if (!qe) continue;
      const Ze = $i(qe, "paint");
      if (!Vt(We(Xe, Ze))) {
        Le.push(Xe), Ee.push(...Ze);
        continue;
      }
      const it = ((Ro = (li = f.paintEngine) == null ? void 0 : li.getGroupTarget) == null ? void 0 : Ro.call(li, qe)) || null, rt = (($o = it == null ? void 0 : it.committedPaint) == null ? void 0 : $o.canvas) || null;
      if (!rt) {
        Le.push(Xe), Ee.push(...Ze);
        continue;
      }
      const vt = on(rt);
      if (!vt.touched || !vt.canvas) {
        Le.push(Xe), Ee.push(...Ze);
        continue;
      }
      Je = !0;
      const mt = en(vt.canvas, "paint", ke.get(qe) || Xe || {});
      De.push(...mt);
    }
    for (const Xe of Ri().filter((qe) => String((qe == null ? void 0 : qe.layerKind) || "paint") === "paint")) {
      if (!Vt(bt(Xe))) {
        De.push(Xe);
        continue;
      }
      const qe = yy(Xe, null);
      if (!qe) {
        De.push(Xe);
        continue;
      }
      const Ze = on(qe);
      if (!Ze.touched || !Ze.canvas) {
        De.push(Xe);
        continue;
      }
      Je = !0;
      const it = en(Ze.canvas, "paint", Xe);
      De.push(...it);
    }
    return Je ? (x.painting.paint.strokes = Ee, x.painting.groups = Le.sort((Xe, qe) => Number((Xe == null ? void 0 : Xe.z_index) || 0) - Number((qe == null ? void 0 : qe.z_index) || 0)), x.painting.raster_objects = De.sort((Xe, qe) => Number((Xe == null ? void 0 : Xe.z_index) || 0) - Number((qe == null ? void 0 : qe.z_index) || 0)), Oo({ preservePanelValues: !1 }), !0) : !1;
  }
  function Zb(h) {
    var Ee, Le, De, Je, ze;
    if ((((Le = (Ee = h.stroke) == null ? void 0 : Ee.geometry) == null ? void 0 : Le.rawPoints) || ((Je = (De = h.stroke) == null ? void 0 : De.geometry) == null ? void 0 : Je.points) || []).length >= 1) {
      Ql(h);
      const je = qn(h);
      je && (String(((ze = h.stroke) == null ? void 0 : ze.toolKind) || "") === "eraser" ? f.paintEngine.cancelActiveStroke(je) : f.paintEngine.commitActiveStroke(h.stroke, je)), h._hasCommittedSegments = !0;
    }
    const L = h.stroke, ye = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, _e = Nf(h.layerKind, L.toolKind, [], ye);
    _e.actionGroupId = L.actionGroupId, h.stroke = _e;
    const ke = qn(h);
    ke && f.paintEngine.beginStroke(_e, ke);
  }
  function Qb(h) {
    var Ee, Le;
    if ((((Le = (Ee = h.stroke) == null ? void 0 : Ee.geometry) == null ? void 0 : Le.points) || []).length >= 3) {
      Ql(h);
      const De = qn(h);
      De && f.paintEngine.commitActiveStroke(h.stroke, De), h._hasCommittedSegments = !0;
    }
    const L = h.stroke, ye = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, _e = Af(h.layerKind, L.toolKind, [], ye);
    _e.actionGroupId = L.actionGroupId, h.stroke = _e;
    const ke = qn(h);
    ke && f.paintEngine.beginStroke(_e, ke);
  }
  function Ql(h) {
    var ke, Ee, Le, De;
    const M = ((ke = h == null ? void 0 : h.stroke) == null ? void 0 : ke.geometry) || null;
    if (!M) return !1;
    const L = String(((Ee = h == null ? void 0 : h.stroke) == null ? void 0 : Ee.toolKind) || "pen");
    if (h.layerKind === "paint" && L === "eraser")
      return M.geometryKind !== "lasso_fill" && (M.processedPoints = cf(M.rawPoints || M.points || [], h.stroke.targetSpace, !0)), Jb(h);
    const ye = h.layerKind === "paint" && L !== "eraser";
    if (M.geometryKind === "lasso_fill")
      return (Array.isArray(M.points) ? M.points : []).length < 3 ? !1 : (ye && Xd((Le = h.stroke) == null ? void 0 : Le.actionGroupId), Zl(h.layerKind).push(h.stroke), !0);
    const _e = M.rawPoints || M.points || [];
    return _e.length < 1 ? !1 : (M.processedPoints = cf(_e, h.stroke.targetSpace, !0), ye && Xd((De = h.stroke) == null ? void 0 : De.actionGroupId), Zl(h.layerKind).push(h.stroke), !0);
  }
  function Cf(h) {
    var L;
    if (D && f.mode === "frame") {
      const ye = Bt(), _e = Vi(ye);
      if (!ye || !_e || !(Number((h == null ? void 0 : h.x) || 0) >= Number(_e.x || 0) && Number((h == null ? void 0 : h.x) || 0) <= Number(_e.x || 0) + Number(_e.w || 0) && Number((h == null ? void 0 : h.y) || 0) >= Number(_e.y || 0) && Number((h == null ? void 0 : h.y) || 0) <= Number(_e.y || 0) + Number(_e.h || 0))) return null;
      const Ee = Jn(h, ye, performance.now()), Le = Ee ? Iy(Ee) : null;
      if (Le)
        for (const Je of Tl()) {
          if (!Xn(Je)) continue;
          const ze = wf(Je, Le);
          if (ze && Number(ze.x) >= 0 && Number(ze.x) <= 1 && Number(ze.y) >= 0 && Number(ze.y) <= 1) {
            const je = rn(Je);
            if (je != null && je.visible) return { item: Je, geom: je };
          }
        }
      const De = Zd(!1).slice().sort((Je, ze) => Number((ze == null ? void 0 : ze.z_index) || 0) - Number((Je == null ? void 0 : Je.z_index) || 0));
      for (const Je of De) {
        if (Je.type === "strokeGroup") {
          const Be = ef(rf("paint", Je.actionGroupId || Je.id || ""));
          if (!Be) continue;
          const nt = rn(Be);
          if (!(nt != null && nt.visible)) continue;
          const We = Array.isArray(nt.strokePaths) ? nt.strokePaths : [];
          for (const bt of We) {
            const Vt = Array.isArray(bt == null ? void 0 : bt.points) ? bt.points : [];
            if (!Vt.length) continue;
            if (bt.closed && Vt.length >= 3 && Br(h, Vt)) return { item: Be, geom: nt };
            const on = Math.max(8, Number((bt == null ? void 0 : bt.lineWidth) || 0) * 0.5 + 6);
            for (let en = 0; en < Vt.length - 1; en += 1)
              if (Hc(h, Vt[en], Vt[en + 1]) <= on * on) return { item: Be, geom: nt };
            if (Vt.length === 1 && na(h, Vt[0]) <= on * on) return { item: Be, geom: nt };
          }
          continue;
        }
        if (Je.type === "rasterObject") {
          const Be = Qd(nf(((L = Je.item) == null ? void 0 : L.id) || Je.id || ""));
          if (!Be) continue;
          const nt = rn(Be);
          if (tf(Be, nt, h, Ee)) return { item: Be, geom: nt };
          continue;
        }
        const ze = Je.item;
        if (!ze || !Xn(ze) || !Le) continue;
        const je = wf(ze, Le);
        if (je && Number(je.x) >= 0 && Number(je.x) <= 1 && Number(je.y) >= 0 && Number(je.y) <= 1) {
          const Be = rn(ze);
          if (Be != null && Be.visible) return { item: ze, geom: Be };
        }
      }
      return null;
    }
    const M = [
      ...Zd(!1).slice().sort((ye, _e) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((ye == null ? void 0 : ye.z_index) || 0)).map((ye) => {
        var _e;
        return ye.type === "strokeGroup" ? ef(rf("paint", ye.actionGroupId || ye.id || "")) : ye.type === "rasterObject" ? Qd(nf(((_e = ye.item) == null ? void 0 : _e.id) || ye.id || "")) : ye.item;
      }).filter(Boolean),
      ...D ? Tl().filter((ye) => To(ye)) : []
    ];
    for (const ye of M) {
      if (sr(ye)) {
        const ke = rn(ye);
        if (!(ke != null && ke.visible)) continue;
        const Ee = Array.isArray(ke.strokePaths) ? ke.strokePaths : [];
        for (const Le of Ee) {
          const De = Array.isArray(Le == null ? void 0 : Le.points) ? Le.points : [];
          if (!De.length) continue;
          if (Le.closed && De.length >= 3 && Br(h, De)) return { item: ye, geom: ke };
          const Je = Math.max(8, Number((Le == null ? void 0 : Le.lineWidth) || 0) * 0.5 + 6);
          for (let ze = 0; ze < De.length - 1; ze += 1)
            if (Hc(h, De[ze], De[ze + 1]) <= Je * Je) return { item: ye, geom: ke };
          if (De.length === 1 && na(h, De[0]) <= Je * Je) return { item: ye, geom: ke };
        }
        continue;
      }
      if (oi(ye)) {
        const ke = rn(ye);
        if (!(ke != null && ke.visible)) continue;
        if (tf(ye, ke, h)) return { item: ye, geom: ke };
        continue;
      }
      const _e = rn(ye);
      if (_e.visible && Br(h, _e.corners))
        return { item: ye, geom: _e };
    }
    return null;
  }
  function Lo(h, M, L = null) {
    if (!h || !h.visible) return { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (Xn(L)) return xu(h, M);
    if (h.kind === "strokeGroup") {
      const ye = h.corners.findIndex((ke) => na(ke, M) <= 121);
      if (ye >= 0) {
        const ke = h.corners[ye], Ee = ke.x - h.center.x, Le = ke.y - h.center.y, De = Ee * Le >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: ye, cursor: De };
      }
      const _e = Array.isArray(h.strokePaths) ? h.strokePaths : [];
      for (const ke of _e) {
        const Ee = Array.isArray(ke == null ? void 0 : ke.points) ? ke.points : [];
        if (ke.closed && Ee.length >= 3 && Br(M, Ee)) return { kind: "move", cursor: "default" };
        const Le = Math.max(8, Number((ke == null ? void 0 : ke.lineWidth) || 0) * 0.5 + 6);
        for (let De = 0; De < Ee.length - 1; De += 1)
          if (Hc(M, Ee[De], Ee[De + 1]) <= Le * Le) return { kind: "move", cursor: "default" };
      }
      return Br(M, h.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (h.kind === "rasterObject") {
      const ye = h.corners.findIndex((_e) => na(_e, M) <= 121);
      if (ye >= 0) {
        const _e = h.corners[ye], ke = _e.x - h.center.x, Ee = _e.y - h.center.y, Le = ke * Ee >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: ye, cursor: Le };
      }
      return Br(M, h.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    return Yk(h, M, {
      edges: t === "cutout" || To(L),
      resize: !(To(L) && $l()),
      emptyCursor: f.mode === "pano" ? "grab" : "default"
    });
  }
  function If(h, M) {
    return {
      x0: Math.min(Number((h == null ? void 0 : h.x) || 0), Number((M == null ? void 0 : M.x) || 0)),
      y0: Math.min(Number((h == null ? void 0 : h.y) || 0), Number((M == null ? void 0 : M.y) || 0)),
      x1: Math.max(Number((h == null ? void 0 : h.x) || 0), Number((M == null ? void 0 : M.x) || 0)),
      y1: Math.max(Number((h == null ? void 0 : h.y) || 0), Number((M == null ? void 0 : M.y) || 0))
    };
  }
  function e1(h, M) {
    return !!h && !!M && Number(M.x) >= Number(h.x0) && Number(M.x) <= Number(h.x1) && Number(M.y) >= Number(h.y0) && Number(M.y) <= Number(h.y1);
  }
  function t1(h, M) {
    if (!h || !(M != null && M.visible) || !Array.isArray(M.corners)) return !1;
    if (M.corners.some((_e) => e1(h, _e))) return !0;
    const L = (Number(h.x0) + Number(h.x1)) * 0.5, ye = (Number(h.y0) + Number(h.y1)) * 0.5;
    return !!Br({ x: L, y: ye }, M.corners);
  }
  function kt(h) {
    if (Ub(), f.interaction) {
      f.interaction.kind === "paint_stroke" || f.interaction.kind === "paint_lasso_fill" ? Ge("none") : f.interaction.kind === "view" || f.interaction.kind === "pan_frame" ? Ge("grabbing") : f.interaction.kind === "space_pan" || f.interaction.kind === "frame_pan" ? Ge("move") : f.interaction.kind === "space_orbit" || f.interaction.kind === "frame_orbit" || f.interaction.kind === "world_gizmo" || f.interaction.kind === "roll_frame" ? Ge("grabbing") : f.interaction.kind === "move" || f.interaction.kind === "move_multi" || f.interaction.kind === "move_stroke_group" || f.interaction.kind === "move_raster_object" ? Ge("move") : f.interaction.kind === "scale" || f.interaction.kind === "scale_x" || f.interaction.kind === "scale_y" || f.interaction.kind === "scale_raster_object" ? Ge(f.interaction.cursor || "nwse-resize") : f.interaction.kind === "rotate" ? Ge("grabbing") : Ge("default");
      return;
    }
    if (Pf()) {
      Ge("none");
      return;
    }
    if (f.mode === "frame") {
      if (f.altModifier && !r) {
        Ge(kC);
        return;
      }
      if (f.primaryTool !== "cursor") {
        Ge("default");
        return;
      }
      Ge("grab");
      return;
    }
    if (f.primaryTool === "cursor" && f.marqueeModifier) {
      Ge("default");
      return;
    }
    if (f.gizmoAxis) {
      Ge("grab");
      return;
    }
    const M = Mr(), L = M ? rn(M) : null, ye = M ? Pr(M) : !1, _e = ye ? { kind: "none", cursor: "default" } : Lo(L, h, M);
    if (!ye && _e.kind !== "none") {
      Ge(_e.cursor);
      return;
    }
    if (f.primaryTool === "cursor" && Cf(h)) {
      Ge("default");
      return;
    }
    Ge(f.mode === "pano" ? "grab" : "default");
  }
  function n1() {
    return q;
  }
  function Ut() {
    if (!F) return;
    if (q = !1, f.mode === "frame") {
      B.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (f.worldSelectedId || Ra() && ii()) {
      const _e = r1();
      q = _e.visible, Ef(_e);
      return;
    }
    const h = Mr(), M = Va();
    if (!h && M.length === 0 || f.interaction) {
      B.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const L = Vl(), ye = oN({
      type: t,
      selected: h,
      selectedItems: M,
      selectedKind: L,
      geom: M.length > 1 ? La(M) : rn(h),
      allLocked: py(M),
      anyLocked: M.some((_e) => Pr(_e)),
      selectedLocked: Pr(h),
      activeAspect: To(h) && $l() ? xo : Dr(h),
      cutoutAspectOpen: f.cutoutAspectOpen,
      isExternalSticker: Yy,
      isStickerHidden: qy,
      canRestoreSelectedToInitial: vy,
      iconSet: Ye,
      cameraShot: U,
      cameraDeletable: C,
      erpChoice: C,
      coverage: x.coverage
    });
    Ef(ye);
  }
  function r1() {
    const h = jl() && !f.interaction ? Fl().space : null;
    if (!(h != null && h.gizmo)) return { visible: !1 };
    const M = Ol(), L = h.stickers.find((Ee) => Ee.id === f.worldSelectedId), _e = (L ? Ad(L) : [h.gizmo.transform.position]).map((Ee) => Ma(M, Ee, W.width, W.height)).filter(Boolean), ke = Ax(M, h.gizmo.transform.position, h.gizmo.mode, W.width, W.height);
    return aN({ corners: _e, gizmoBox: ke, gizmoMode: h.gizmo.mode, camera: Ra(), deletable: C && Ra() });
  }
  function Ef(h) {
    var ke, Ee;
    if (!h.visible) {
      B.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const M = (Le, De) => sN(h.anchor, Le, De, W.width, W.height), L = Math.max(1, Number(((ke = f.menuSize) == null ? void 0 : ke.w) || 220)), ye = Math.max(1, Number(((Ee = f.menuSize) == null ? void 0 : Ee.h) || 40)), _e = M(L, ye);
    if (!_e) {
      B.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    B.selectionMenu = {
      visible: !0,
      left: _e.left,
      top: _e.top,
      items: h.items
    }, me.requestFrame(() => {
      if (!F || B.selectionMenu.visible !== !0) return;
      const Le = F.getBoundingClientRect(), De = Math.round(Number((Le == null ? void 0 : Le.width) || 0)) || 220, Je = Math.round(Number((Le == null ? void 0 : Le.height) || 0)) || 40;
      f.menuSize = { w: De, h: Je, measured: !0 };
      const ze = M(De, Je);
      ze && (B.selectionMenu.left = ze.left, B.selectionMenu.top = ze.top);
    });
  }
  function Ki() {
    Ue.timer && (clearTimeout(Ue.timer), Ue.timer = 0), Ue.target = null, B.tooltip.visible = !1;
  }
  function i1(h) {
    if (!k || !h || !h.isConnected) return;
    const M = String(h.getAttribute("data-tip") || "").trim();
    if (!M) return;
    B.tooltip.text = M, B.tooltip.visible = !0;
    const L = h;
    me.requestFrame(() => {
      var bt, Vt;
      if (Ue.target !== L || !k || !(L != null && L.isConnected)) return;
      const ye = fe.getBoundingClientRect(), _e = L.getBoundingClientRect(), ke = 8, Ee = 12, Le = Math.round(Number(((bt = k.getBoundingClientRect()) == null ? void 0 : bt.width) || 0)) || 100, De = Math.round(Number(((Vt = k.getBoundingClientRect()) == null ? void 0 : Vt.height) || 0)) || 24, Je = !!L.closest(".pano-floating-left"), ze = !!L.closest(".pano-frame-rail"), je = !!L.closest(".pano-paint-footer") || !!L.closest(".pano-paint-color-float");
      let Be = "", nt = _e.left - ye.left + _e.width * 0.5 - Le * 0.5, We = _e.top - ye.top - De - Ee;
      if (L.closest(".pano-floating-top") && (We = _e.bottom - ye.top + Ee), Je)
        Be = "tool-rail", nt = _e.right - ye.left + 10, We = _e.top - ye.top + _e.height * 0.5 - De * 0.5, nt = Fe(nt, ke, Math.max(ke, ye.width - Le - ke)), We = Fe(We, ke, Math.max(ke, ye.height - De - ke));
      else if (ze)
        Be = "frame-rail", nt = _e.left - ye.left - Le - 10, We = _e.top - ye.top + _e.height * 0.5 - De * 0.5, nt = Fe(nt, ke, Math.max(ke, ye.width - Le - ke)), We = Fe(We, ke, Math.max(ke, ye.height - De - ke));
      else if (je) {
        Be = "footer";
        const on = L.closest(".pano-paint-footer"), en = on ? on.getBoundingClientRect() : _e;
        nt = en.left - ye.left + en.width * 0.5 - Le * 0.5, We = en.bottom - ye.top + 5, nt = Fe(nt, ke, Math.max(ke, ye.width - Le - ke)), We = Math.max(ke, We);
      }
      nt = Fe(nt, ke, Math.max(ke, ye.width - Le - ke)), We = Math.max(ke, We), B.tooltip.left = nt, B.tooltip.top = We, B.tooltip.variant = Be, B.tooltip.visible = !0;
    });
  }
  J == null || J.addEventListener("pointerdown", eb), J == null || J.addEventListener("pointermove", tb), J == null || J.addEventListener("pointerup", Ey), J == null || J.addEventListener("pointercancel", () => Eo()), J == null || J.addEventListener("lostpointercapture", () => {
    var h;
    ((h = f.interaction) == null ? void 0 : h.source) === "knob" && Eo();
  }), J == null || J.addEventListener("dblclick", Qy);
  function o1(h) {
    $.selection && ($.selection = null, vf());
    const M = ai(h);
    S = M, Wa(M, !0), Ud(), ct.state.inertia.active = !1, ct.state.inertia.vx = 0, ct.state.inertia.vy = 0;
    const L = ii(), ye = zl(), _e = L || ye ? lM(Jl(), h) : null;
    if (ye && _e) {
      h.preventDefault(), _e === "look" ? gf(M, h.pointerId) : xb(_e, M, h.pointerId);
      return;
    }
    if (_e === "look") {
      h.preventDefault();
      const ze = ja(h);
      f.interaction = { kind: "view", last: ze, lastTs: performance.now() }, ct.startDrag(ze.x, ze.y, h.pointerId, performance.now()), kt(M), W.setPointerCapture(h.pointerId);
      return;
    }
    if (_e) {
      h.preventDefault(), yf(_e, M, h.pointerId);
      return;
    }
    if ((L || ye) && h.button !== 0) {
      h.preventDefault();
      return;
    }
    if (h.button === 1) {
      if (h.preventDefault(), f.mode === "frame") {
        const ze = Bt();
        if (!ze || r || ze.locked === !0) return;
        f.interaction = {
          kind: "pan_frame",
          shot: ze,
          last: M,
          start: {
            yaw_deg: Number(ze.yaw_deg || 0),
            pitch_deg: Number(ze.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const ze = f.mode === "unwrap" ? M : ja(h);
        f.interaction = { kind: "view", last: ze, lastTs: performance.now() }, ct.startDrag(ze.x, ze.y, h.pointerId, performance.now());
      }
      kt(M), W.setPointerCapture(h.pointerId);
      return;
    }
    if (h.button !== 0) return;
    if (f.mode === "frame" && (h.altKey || h.shiftKey) && !r) {
      const ze = Bt(), je = Vi(ze);
      if (!ze || ze.locked === !0 || !je) return;
      const Be = E0({
        frame: je,
        point: M,
        startRollDeg: Number(ze.roll_deg ?? ze.rot_deg ?? 0),
        shiftKey: h.shiftKey,
        altKey: h.altKey,
        allowAlt: !0
      });
      if (!Be) return;
      f.interaction = {
        kind: "roll_frame",
        shot: ze,
        center: Be.center,
        lastAngle: Be.lastAngle,
        accumulatedRad: Be.accumulatedRad,
        rollGesture: Be,
        start: { roll_deg: Number(ze.roll_deg ?? ze.rot_deg ?? 0) },
        changed: !1,
        altStarted: Be.source === "alt",
        source: Be.source
      }, W.setPointerCapture(h.pointerId), h.preventDefault(), Xl(), et({ localOnly: !0 });
      return;
    }
    if (f.mode === "frame" && f.primaryTool === "cursor") {
      gf(M, h.pointerId), h.preventDefault();
      return;
    }
    if (r) {
      f.mode === "pano" && Tf(h, M);
      return;
    }
    if (X && !X.hidden)
      return;
    if ((f.primaryTool === "paint" || f.primaryTool === "mask") && (kf() || Ul())) {
      if (!rb()) return;
      Bl();
      const ze = f.primaryTool === "mask" ? "mask" : "paint", je = f.primaryTool === "mask" ? f.maskTool : f.paintTool, Be = f.mode === "frame" && Ul() ? Bt() : null, nt = { kind: "ERP_GLOBAL" }, We = Be ? Jn(M, Be, performance.now()) : lr(M, performance.now());
      if (!We) {
        kt(M);
        return;
      }
      f.interaction = {
        kind: je === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: ze,
        _livePreviewToken: io("live"),
        stroke: je === "lasso_fill" ? Af(ze, je, [We], nt) : Nf(ze, je, [We], nt)
      }, Fo();
      const bt = qn(f.interaction);
      if (bt)
        if (f.paintEngine.beginStroke(f.interaction.stroke, bt), f.interaction.kind === "paint_stroke") {
          const Vt = f.paintEngine.ensureTarget(bt), on = Number((We == null ? void 0 : We.u) ?? (We == null ? void 0 : We.x) ?? 0), en = Number((We == null ? void 0 : We.v) ?? (We == null ? void 0 : We.y) ?? 0);
          f.paintEngine.appendStrokePoint(Vt, on, en, f.interaction.stroke);
        } else
          f.paintEngine.updateActiveStroke(f.interaction.stroke, bt);
      kt(M), W.setPointerCapture(h.pointerId), et();
      return;
    }
    const ke = Va(), Ee = Mr(), Le = ke.length > 1 ? La(ke) : Ee ? rn(Ee) : null;
    if (f.primaryTool === "cursor" && (h.ctrlKey || h.metaKey)) {
      f.interaction = { kind: "marquee_select", start: M, current: M }, kt(M), W.setPointerCapture(h.pointerId), et({ localOnly: !0, reason: yt.OVERLAY });
      return;
    }
    if (f.primaryTool === "cursor" && by() && ii() && wb(h, M) || f.primaryTool === "cursor" && _ && jl() && a1(h, M)) return;
    if (ke.length > 1 && (Le != null && Le.visible)) {
      if ((ke.some((je) => Pr(je)) ? { kind: "none" } : Lo(Le, M)).kind === "move") {
        f.interaction = {
          kind: "move_multi",
          items: ke.map((je) => je),
          offset: { x: M.x - Le.center.x, y: M.y - Le.center.y },
          startCenter: { x: Le.center.x, y: Le.center.y },
          stickerSnapshots: ke.filter((je) => Xn(je)).map((je) => ({
            id: String(je.id || ""),
            yaw_deg: Number(On(je).yaw_deg || 0),
            pitch_deg: Number(On(je).pitch_deg || 0),
            center: (() => {
              var nt, We;
              const Be = rn(je);
              return Be != null && Be.visible ? { x: Number(((nt = Be.center) == null ? void 0 : nt.x) || 0), y: Number(((We = Be.center) == null ? void 0 : We.y) || 0) } : { x: M.x, y: M.y };
            })()
          })),
          strokeSnapshots: ke.filter((je) => sr(je)).map((je) => ({
            id: String(je.actionGroupId || je.id || ""),
            layerKind: String(je.layerKind || "paint"),
            snapshot: cn($i(je.actionGroupId, je.layerKind)),
            frameSnapshot: cn(Li(je.actionGroupId, je.layerKind)),
            center: (() => {
              var nt, We;
              const Be = rn(je);
              return Be != null && Be.visible ? { x: Number(((nt = Be.center) == null ? void 0 : nt.x) || 0), y: Number(((We = Be.center) == null ? void 0 : We.y) || 0) } : { x: M.x, y: M.y };
            })(),
            centerUv: Uy(je.actionGroupId, je.layerKind)
          })),
          rasterSnapshots: ke.filter((je) => oi(je)).map((je) => ({
            id: Do(je.rasterObjectId || je.id || ""),
            snapshot: cn(Ri().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Do(je.rasterObjectId || je.id || ""))),
            center: (() => {
              var nt, We;
              const Be = rn(je);
              return Be != null && Be.visible ? { x: Number(((nt = Be.center) == null ? void 0 : nt.x) || 0), y: Number(((We = Be.center) == null ? void 0 : We.y) || 0) } : { x: M.x, y: M.y };
            })(),
            centerUv: Wy(je)
          }))
        }, kt(M), W.setPointerCapture(h.pointerId);
        return;
      }
    } else if (Ee && (Le != null && Le.visible)) {
      const ze = Pr(Ee) ? { kind: "none" } : Lo(Le, M, Ee);
      if (ze.kind === "scale") {
        f.interaction = sr(Ee) ? {
          kind: "scale_stroke_group",
          item: Ee,
          center: Le.center,
          startDist: Math.max(1, Math.hypot(M.x - Le.center.x, M.y - Le.center.y)),
          snapshot: cn($i(Ee.actionGroupId, Ee.layerKind)),
          frameSnapshot: cn(Li(Ee.actionGroupId, Ee.layerKind)),
          cursor: ze.cursor
        } : oi(Ee) ? {
          kind: "scale_raster_object",
          item: Ee,
          center: Le.center,
          startDist: Math.max(1, Math.hypot(M.x - Le.center.x, M.y - Le.center.y)),
          snapshot: cn(Ri().find((je) => String((je == null ? void 0 : je.id) || "") === Do(Ee.rasterObjectId || Ee.id || ""))),
          cursor: ze.cursor
        } : {
          kind: "scale",
          item: Ee,
          center: Le.center,
          startDist: Math.max(1, Math.hypot(M.x - Le.center.x, M.y - Le.center.y)),
          startHFOV: Number(On(Ee).hFOV_deg || 20),
          startVFOV: Number(On(Ee).vFOV_deg || 20),
          cursor: ze.cursor
        }, kt(M), W.setPointerCapture(h.pointerId);
        return;
      }
      if (ze.kind === "scale_x" || ze.kind === "scale_y") {
        f.interaction = {
          kind: ze.kind,
          item: Ee,
          center: Le.center,
          startDist: Math.max(1, Math.hypot(M.x - Le.center.x, M.y - Le.center.y)),
          startHFOV: Number(On(Ee).hFOV_deg || 20),
          startVFOV: Number(On(Ee).vFOV_deg || 20),
          cursor: ze.cursor,
          edge: ze.edge
        }, kt(M), W.setPointerCapture(h.pointerId);
        return;
      }
      if (ze.kind === "rotate") {
        f.interaction = sr(Ee) ? {
          kind: "rotate_stroke_group",
          item: Ee,
          center: Le.center,
          startAng: Math.atan2(M.y - Le.center.y, M.x - Le.center.x),
          snapshot: cn($i(Ee.actionGroupId, Ee.layerKind)),
          frameSnapshot: cn(Li(Ee.actionGroupId, Ee.layerKind))
        } : {
          kind: "rotate",
          item: Ee,
          center: Le.center,
          startRot: Number(On(Ee).rot_deg || On(Ee).roll_deg || 0),
          startAng: Math.atan2(M.y - Le.center.y, M.x - Le.center.x)
        }, kt(M), W.setPointerCapture(h.pointerId);
        return;
      }
      if (ze.kind === "move") {
        if (sr(Ee)) {
          const je = f.mode === "frame" ? (() => {
            const Be = Bt();
            return Be ? Jn(M, Be, performance.now()) : null;
          })() : lr(M, performance.now());
          f.interaction = {
            kind: "move_stroke_group",
            item: Ee,
            startUv: je,
            snapshot: cn($i(Ee.actionGroupId, Ee.layerKind)),
            frameSnapshot: cn(Li(Ee.actionGroupId, Ee.layerKind))
          }, kt(M), W.setPointerCapture(h.pointerId);
          return;
        }
        if (oi(Ee)) {
          const je = f.mode === "frame" ? (() => {
            const Be = Bt();
            return Be ? Jn(M, Be, performance.now()) : null;
          })() : lr(M, performance.now());
          f.interaction = {
            kind: "move_raster_object",
            item: Ee,
            startUv: je,
            snapshot: cn(Ri().find((Be) => String((Be == null ? void 0 : Be.id) || "") === Do(Ee.rasterObjectId || Ee.id || "")))
          }, kt(M), W.setPointerCapture(h.pointerId);
          return;
        }
        f.interaction = {
          kind: "move",
          item: Ee,
          offset: { x: M.x - Le.center.x, y: M.y - Le.center.y }
        }, kt(M), W.setPointerCapture(h.pointerId);
        return;
      }
    }
    const De = Cf(M);
    if (De) {
      const ze = f.selectedId !== De.item.id;
      if (ze && f.selectedId && (sn(), kr()), hf(De.item), D && ze && (f.cutoutAspectOpen = !1), ze && zt(), Ut(), et(), Pr(De.item)) {
        kt(M);
        return;
      }
      f.interaction = {
        kind: sr(De.item) ? "move_stroke_group" : oi(De.item) ? "move_raster_object" : "move",
        item: De.item,
        offset: { x: M.x - De.geom.center.x, y: M.y - De.geom.center.y },
        startUv: sr(De.item) || oi(De.item) ? f.mode === "frame" ? (() => {
          const je = Bt();
          return je ? Jn(M, je, performance.now()) : null;
        })() : lr(M, performance.now()) : null,
        snapshot: sr(De.item) ? cn($i(De.item.actionGroupId, De.item.layerKind)) : oi(De.item) ? cn(Ri().find((je) => String((je == null ? void 0 : je.id) || "") === Do(De.item.rasterObjectId || De.item.id || ""))) : null,
        frameSnapshot: sr(De.item) ? cn(Li(De.item.actionGroupId, De.item.layerKind)) : null
      }, kt(M), W.setPointerCapture(h.pointerId);
      return;
    }
    const Je = !!f.selectedId;
    Je && (sn(), kr()), Oo(), Je && zt(), Ut(), et(), f.mode === "pano" && Tf(h, M);
  }
  W.onpointerdown = o1;
  function Bi(h, M) {
    return Ve.gizmoPointer(h, Ol(), M.x, M.y, W.width, W.height);
  }
  function a1(h, M) {
    var Le;
    const L = (Le = Fl().space) == null ? void 0 : Le.gizmo;
    if (L && Bi("hover", M) !== null && Bi("down", M))
      return f.interaction = {
        kind: "world_gizmo",
        id: f.worldSelectedId,
        mode: L.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: L.transform,
        base: Ii(pf(), f.frame),
        changed: !1
      }, W.setPointerCapture(h.pointerId), kt(M), !0;
    const ye = Va(), _e = Mr(), ke = ye.length > 1 ? ye.some((De) => Pr(De)) ? "none" : Lo(La(ye), M).kind : _e && !Pr(_e) ? Lo(rn(_e), M, _e).kind : "none";
    if (ke !== "none" && ke !== "move") return !1;
    const Ee = Ve.pickSticker(Ol(), M.x, M.y, W.width, W.height);
    return x.stickers.some((De) => De.id === Ee && De.placement === "world") ? (f.worldSelectedId !== Ee && (f.selectedId && (sn(), kr()), pb(Ee), zt(), Ut(), bf(), et()), f.interaction = { kind: "world_select" }, W.setPointerCapture(h.pointerId), !0) : !1;
  }
  function Of(h) {
    var ye;
    const L = !!(f.worldSelectedId || Ra()) && f.primaryTool === "cursor" && jl() && !!((ye = Fl().space) != null && ye.gizmo) ? Bi("hover", h) : null;
    L !== f.gizmoAxis && (f.gizmoAxis = L, O.backgroundDirty = !0, et({ localOnly: !0, reason: yt.VIEW }));
  }
  function s1(h, M) {
    const L = Bi("move", M);
    if (L && h.camera) {
      for (const [_e, ke] of Object.entries(Jp(h.mode, h.base, h.start, L))) pn(x.camera, _e, f.frame, ke);
      ql(), h.changed = !0, Ie.request("sidePanel"), et({ localOnly: !0 });
      return;
    }
    const ye = x.stickers.find((_e) => _e.id === h.id);
    !L || !ye || (Zw(ye, f.frame, Jp(h.mode, h.base, h.start, L)), h.changed = !0, Wr(), Ie.request("sidePanel"), et({ localOnly: !0 }));
  }
  function Ff(h) {
    f.interaction = null, f.gizmoAxis = null, h.kind === "world_gizmo" && (Bi("up", f.pointerPos), O.backgroundDirty = !0, h.changed && (sn(), ri(), zt())), kt(f.pointerPos), et();
  }
  function Tf(h, M) {
    if (ii()) {
      const ye = Jl().emptyLeft;
      ye && yf(ye, M, h.pointerId);
      return;
    }
    const L = ja(h);
    f.interaction = { kind: "view", last: L, lastTs: performance.now() }, ct.startDrag(L.x, L.y, h.pointerId, performance.now()), kt(M), W.setPointerCapture(h.pointerId);
  }
  function l1(h, M) {
    if (!y || !ji.playing || (ji.stop(), h.kind === "frame_pan")) return;
    if (h.kind === "frame_orbit") {
      const _e = Dy();
      _e && (h.pivot = Ry(_e, Vy(_e), M));
      return;
    }
    if (h.kind === "world_gizmo") {
      const _e = x.stickers.find((ke) => ke.id === h.id);
      h.camera ? h.base = ky() : _e && (h.base = Ii(_e, f.frame));
      return;
    }
    if (h.kind === "move_multi") {
      const _e = La(h.items);
      if (!(_e != null && _e.visible)) return;
      h.offset = { x: M.x - _e.center.x, y: M.y - _e.center.y }, h.startCenter = { x: _e.center.x, y: _e.center.y };
      for (const ke of h.stickerSnapshots) {
        const Ee = h.items.find((De) => String((De == null ? void 0 : De.id) || "") === ke.id), Le = Ee ? rn(Ee) : null;
        Le != null && Le.visible && (ke.yaw_deg = Number(On(Ee).yaw_deg || 0), ke.pitch_deg = Number(On(Ee).pitch_deg || 0), ke.center = { x: Le.center.x, y: Le.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(h.kind)) return;
    const L = rn(h.item);
    if (!(L != null && L.visible)) return;
    const ye = On(h.item);
    if (h.kind === "move") {
      h.offset = { x: M.x - L.center.x, y: M.y - L.center.y };
      return;
    }
    if (h.center = L.center, h.kind === "rotate") {
      h.startRot = Number(ye.rot_deg || ye.roll_deg || 0), h.startAng = Math.atan2(M.y - L.center.y, M.x - L.center.x);
      return;
    }
    h.startDist = Math.max(1, Math.hypot(M.x - L.center.x, M.y - L.center.y)), h.startHFOV = Number(ye.hFOV_deg || 20), h.startVFOV = Number(ye.vFOV_deg || 20);
  }
  function c1(h) {
    var ye, _e, ke, Ee, Le, De, Je, ze, je, Be, nt, We, bt, Vt, on, en, si, Vo, li, Ro, $o, Xe;
    const M = ai(h);
    if (Wa(M, !0), !f.interaction) {
      Of(M), kt(M);
      return;
    }
    kt(M);
    const L = f.interaction;
    if (S && (M.x !== S.x || M.y !== S.y)) {
      const qe = S;
      S = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(L.kind) || l1(L, qe);
    }
    if (L.kind !== "world_select") {
      if (L.kind === "world_gizmo") {
        s1(L, M);
        return;
      }
      if (L.kind === "paint_stroke") {
        const qe = typeof h.getCoalescedEvents == "function" ? h.getCoalescedEvents() : [h];
        let Ze = !1;
        qe.forEach((it) => {
          const rt = ai(it);
          if (f.mode === "frame") {
            const vt = Bt(), mt = vt ? Vi(vt) : null;
            if (mt) {
              const Ot = (rt.x - mt.x) / Math.max(1, mt.w), gt = (rt.y - mt.y) / Math.max(1, mt.h);
              if (!(Ot >= 0 && Ot <= 1 && gt >= 0 && gt <= 1)) {
                L._outOfFrame = !0;
                return;
              }
              L._outOfFrame && (L._outOfFrame = !1, Zb(L));
            }
          }
          qb(L, rt, performance.now()) && (Ze = !0);
        }), Ze && et({ localOnly: !0, reason: yt.PAINT });
        return;
      }
      if (L.kind === "paint_lasso_fill") {
        const qe = typeof h.getCoalescedEvents == "function" ? h.getCoalescedEvents() : [h];
        let Ze = !1;
        if (qe.forEach((it) => {
          const rt = ai(it);
          if (f.mode === "frame") {
            const vt = Bt(), mt = vt ? Vi(vt) : null;
            if (mt) {
              const Ot = (rt.x - mt.x) / Math.max(1, mt.w), gt = (rt.y - mt.y) / Math.max(1, mt.h);
              if (!(Ot >= 0 && Ot <= 1 && gt >= 0 && gt <= 1)) {
                L._outOfFrame = !0;
                return;
              }
              L._outOfFrame && (L._outOfFrame = !1, Qb(L));
            }
          }
          Xb(L, rt, performance.now()) && (Ze = !0);
        }), Ze) {
          const it = qn(L);
          it && f.paintEngine.updateActiveStroke(L.stroke, it), et({ localOnly: !0, reason: yt.PAINT });
        }
        return;
      }
      if (L.kind === "view") {
        const qe = performance.now(), Ze = f.mode === "unwrap" ? M : ja(h);
        ct.moveDrag(Ze.x, Ze.y, f.mode === "unwrap" ? "unwrap" : "pano", qe), L.lastTs = qe, L.last = Ze, et({ localOnly: !0, reason: yt.VIEW });
        return;
      }
      if (L.kind === "frame_pan" || L.kind === "frame_orbit") {
        Ny(L, M);
        return;
      }
      if (L.kind === "space_pan" || L.kind === "space_orbit") {
        const qe = _b();
        bb(L.kind === "space_pan" ? zg(qe, M.x - L.last.x, M.y - L.last.y, W.width, W.height, L.depth) : $g(qe, M.x - L.last.x, M.y - L.last.y, W.height, L.pivot)), L.last = M;
        return;
      }
      if (L.kind === "pan_frame") {
        const qe = Hy(L.shot);
        if (!qe || !L.shot) return;
        const Ze = M.x - L.last.x, it = M.y - L.last.y, rt = F0(L.shot, {
          dx: Ze,
          dy: it,
          focalPx: qe.focalPx,
          invertX: ((ye = x.ui_settings) == null ? void 0 : ye.invert_view_x) === !0,
          invertY: ((_e = x.ui_settings) == null ? void 0 : _e.invert_view_y) === !0
        });
        L.shot.yaw_deg = rt.yaw_deg, L.shot.pitch_deg = rt.pitch_deg, L.changed = L.changed || Math.abs(Ze) > 0 || Math.abs(it) > 0, L.last = M, et({ localOnly: !0 });
        return;
      }
      if (L.kind === "roll_frame") {
        if (L.source === "knob") return;
        Da(L, M, h);
        return;
      }
      if (L.kind === "move") {
        const qe = M.x - L.offset.x, Ze = M.y - L.offset.y;
        if (f.mode === "frame" && D) {
          const it = Bt(), rt = Vi(it);
          if (!it || !rt) return;
          const vt = {
            x: Fe((qe - rt.x) / Math.max(1, rt.w), 0, 1),
            y: Fe((Ze - rt.y) / Math.max(1, rt.h), 0, 1)
          }, mt = Jd(it, vt);
          if (!mt) return;
          const Ot = ss(mt);
          Qn(L.item, { yaw_deg: Ot.yaw, pitch_deg: Ot.pitch });
        } else if (f.mode === "unwrap") {
          const it = Rl(), rt = Fe((qe - it.x) / Math.max(it.w, 1), 0, 1), vt = Fe((Ze - it.y) / Math.max(it.h, 1), 0, 1);
          Qn(L.item, { yaw_deg: Dt(rt * 360 - 180), pitch_deg: Fe(90 - vt * 180, -90, 90) });
        } else {
          const it = ff(qe, Ze), rt = ss(it);
          Qn(L.item, { yaw_deg: rt.yaw, pitch_deg: rt.pitch });
        }
        Xn(L.item) && Wr(), et({ localOnly: !0 });
        return;
      }
      if (L.kind === "move_stroke_group") {
        const qe = f.mode === "frame" ? (() => {
          const rt = Bt();
          return rt ? Jn(M, rt, performance.now()) : null;
        })() : lr(M, performance.now());
        if (!qe || !L.startUv) return;
        const Ze = Ha(Number(qe.u || 0), Number(L.startUv.u || 0)), it = Number(qe.v || 0) - Number(L.startUv.v || 0);
        Di((ke = L.item) == null ? void 0 : ke.actionGroupId, Ze, it, L.snapshot, (Ee = L.item) == null ? void 0 : Ee.layerKind, L.frameSnapshot) && (zi({ rebuildPaintEngine: !1 }), et({ localOnly: !0, reason: yt.PAINT }));
        return;
      }
      if (L.kind === "move_raster_object") {
        const qe = f.mode === "frame" ? (() => {
          const rt = Bt();
          return rt ? Jn(M, rt, performance.now()) : null;
        })() : lr(M, performance.now());
        if (!qe || !L.startUv) return;
        const Ze = Ha(Number(qe.u || 0), Number(L.startUv.u || 0)), it = Number(qe.v || 0) - Number(L.startUv.v || 0);
        bn(((Le = L.item) == null ? void 0 : Le.rasterObjectId) || ((De = L.item) == null ? void 0 : De.id) || "", Ze, it, L.snapshot) && (za(), et({ localOnly: !0, reason: yt.PAINT }));
        return;
      }
      if (L.kind === "scale_raster_object") {
        const Ze = Math.max(1, Math.hypot(M.x - L.center.x, M.y - L.center.y)) / Math.max(1, Number(L.startDist || 1));
        Yn(((Je = L.item) == null ? void 0 : Je.rasterObjectId) || ((ze = L.item) == null ? void 0 : ze.id) || "", Ze, L.snapshot) && (za(), et({ localOnly: !0, reason: yt.PAINT }));
        return;
      }
      if (L.kind === "move_multi") {
        const qe = M.x - Number(((je = L.offset) == null ? void 0 : je.x) || 0), Ze = M.y - Number(((Be = L.offset) == null ? void 0 : Be.y) || 0);
        let it = !1, rt = !1, vt = !1;
        const mt = qe - Number(((nt = L.startCenter) == null ? void 0 : nt.x) || qe), Ot = Ze - Number(((We = L.startCenter) == null ? void 0 : We.y) || Ze);
        for (const gt of Array.isArray(L.stickerSnapshots) ? L.stickerSnapshots : []) {
          const Yt = (t === "cutout" ? zy() : Dl()).find((jt) => String((jt == null ? void 0 : jt.id) || "") === String(gt.id || ""));
          if (!Yt || !Xn(Yt)) continue;
          const wn = {
            x: Number(((bt = gt.center) == null ? void 0 : bt.x) || 0) + mt,
            y: Number(((Vt = gt.center) == null ? void 0 : Vt.y) || 0) + Ot
          };
          if (f.mode === "frame" && D) {
            const jt = Bt(), Jt = Vi(jt);
            if (!jt || !Jt) continue;
            const ci = {
              x: Fe((wn.x - Jt.x) / Math.max(1, Jt.w), 0, 1),
              y: Fe((wn.y - Jt.y) / Math.max(1, Jt.h), 0, 1)
            }, Jf = Jd(jt, ci);
            if (!Jf) continue;
            const Zf = ss(Jf);
            Qn(Yt, { yaw_deg: Zf.yaw, pitch_deg: Zf.pitch });
          } else if (f.mode === "unwrap") {
            const jt = Rl(), Jt = Fe((wn.x - jt.x) / Math.max(jt.w, 1), 0, 1), ci = Fe((wn.y - jt.y) / Math.max(jt.h, 1), 0, 1);
            Qn(Yt, { yaw_deg: Dt(Jt * 360 - 180), pitch_deg: Fe(90 - ci * 180, -90, 90) });
          } else {
            const jt = ff(wn.x, wn.y), Jt = ss(jt);
            Qn(Yt, { yaw_deg: Jt.yaw, pitch_deg: Jt.pitch });
          }
          it = !0;
        }
        for (const gt of Array.isArray(L.strokeSnapshots) ? L.strokeSnapshots : []) {
          const Yt = {
            x: Number(((on = gt.center) == null ? void 0 : on.x) || 0) + mt,
            y: Number(((en = gt.center) == null ? void 0 : en.y) || 0) + Ot
          }, wn = f.mode === "frame" ? (() => {
            const Jt = Bt();
            return Jt ? Jn(Yt, Jt, performance.now()) : null;
          })() : lr(Yt, performance.now()), jt = gt.centerUv || null;
          if (wn && jt) {
            const Jt = Ha(Number(wn.u || 0), Number(jt.u || 0)), ci = Number(wn.v || 0) - Number(jt.v || 0);
            Di(gt.id, Jt, ci, gt.snapshot, gt.layerKind, gt.frameSnapshot) && (it = !0, rt = !0);
          }
        }
        for (const gt of Array.isArray(L.rasterSnapshots) ? L.rasterSnapshots : []) {
          const Yt = {
            x: Number(((si = gt.center) == null ? void 0 : si.x) || 0) + mt,
            y: Number(((Vo = gt.center) == null ? void 0 : Vo.y) || 0) + Ot
          }, wn = f.mode === "frame" ? (() => {
            const Jt = Bt();
            return Jt ? Jn(Yt, Jt, performance.now()) : null;
          })() : lr(Yt, performance.now()), jt = gt.centerUv || null;
          if (wn && jt) {
            const Jt = Ha(Number(wn.u || 0), Number(jt.u || 0)), ci = Number(wn.v || 0) - Number(jt.v || 0);
            bn(gt.id, Jt, ci, gt.snapshot) && (it = !0, vt = !0);
          }
        }
        it && (rt ? zi({ rebuildPaintEngine: !1 }) : vt ? za() : Wr(), et({ localOnly: !0 }));
        return;
      }
      if (L.kind === "scale_stroke_group") {
        const Ze = Math.max(1, Math.hypot(M.x - L.center.x, M.y - L.center.y)) / Math.max(1, Number(L.startDist || 1));
        Gr((li = L.item) == null ? void 0 : li.actionGroupId, Ze, 0, L.snapshot, (Ro = L.item) == null ? void 0 : Ro.layerKind, L.frameSnapshot) && (zi({ rebuildPaintEngine: !1 }), et({ localOnly: !0, reason: yt.PAINT }));
        return;
      }
      if (L.kind === "rotate_stroke_group") {
        let qe = (Math.atan2(M.y - L.center.y, M.x - L.center.x) - Number(L.startAng || 0)) * wi;
        h.shiftKey && (qe = Math.round(qe / 45) * 45), Gr(($o = L.item) == null ? void 0 : $o.actionGroupId, 1, qe, L.snapshot, (Xe = L.item) == null ? void 0 : Xe.layerKind, L.frameSnapshot) && (zi({ rebuildPaintEngine: !1 }), et({ localOnly: !0, reason: yt.PAINT }));
        return;
      }
      if (L.kind === "marquee_select") {
        L.current = M, et({ localOnly: !0, reason: yt.OVERLAY });
        return;
      }
      if (L.kind === "scale") {
        const Ze = Math.max(1, Math.hypot(M.x - L.center.x, M.y - L.center.y)) / L.startDist;
        Qn(L.item, { hFOV_deg: Fe(L.startHFOV * Ze, 1, 179), vFOV_deg: Fe(L.startVFOV * Ze, 1, 179) }), $a(L.item) || (L.item.aspect_id = _i(L.item)), Xn(L.item) && Wr(), et({ localOnly: !0 });
        return;
      }
      if (L.kind === "scale_x") {
        const Ze = Math.max(1, Math.hypot(M.x - L.center.x, M.y - L.center.y)) / L.startDist;
        Qn(L.item, { hFOV_deg: Fe(L.startHFOV * Ze, 1, 179) }), $a(L.item) || (L.item.aspect_id = _i(L.item)), Xn(L.item) && Wr(), et({ localOnly: !0 });
        return;
      }
      if (L.kind === "scale_y") {
        const Ze = Math.max(1, Math.hypot(M.x - L.center.x, M.y - L.center.y)) / L.startDist;
        Qn(L.item, { vFOV_deg: Fe(L.startVFOV * Ze, 1, 179) }), $a(L.item) || (L.item.aspect_id = _i(L.item)), Xn(L.item) && Wr(), et({ localOnly: !0 });
        return;
      }
      if (L.kind === "rotate") {
        let Ze = (Math.atan2(M.y - L.center.y, M.x - L.center.x) - L.startAng) * wi, it = L.startRot - Ze;
        h.shiftKey && (it = Math.round(it / 45) * 45), Qn(L.item, { [Xn(L.item) ? "rot_deg" : "roll_deg"]: it }), Xn(L.item) && Wr(), et({ localOnly: !0 });
      }
    }
  }
  W.onpointermove = c1;
  function u1() {
    var M, L, ye, _e, ke, Ee, Le;
    const h = f.interaction;
    if (!((h == null ? void 0 : h.kind) === "roll_frame" && h.source === "knob")) {
      if ((h == null ? void 0 : h.kind) === "space_pan" || (h == null ? void 0 : h.kind) === "space_orbit") {
        f.interaction = null, kt(f.pointerPos), Ut();
        return;
      }
      if ((h == null ? void 0 : h.kind) === "world_select" || (h == null ? void 0 : h.kind) === "world_gizmo") {
        Ff(h);
        return;
      }
      if (((M = f.interaction) == null ? void 0 : M.kind) === "paint_stroke" || ((L = f.interaction) == null ? void 0 : L.kind) === "paint_lasso_fill") {
        Fo();
        const De = Ql(f.interaction), Je = !!f.interaction._hasCommittedSegments;
        if (De || Je) {
          zi();
          const ze = String(((ye = f.interaction.stroke) == null ? void 0 : ye.actionGroupId) || "").trim();
          if (ze) {
            const Be = Ll().find((nt) => String((nt == null ? void 0 : nt.actionGroupId) || "") === ze);
            Be && (Be.frame = null);
          }
          const je = qn(f.interaction);
          je && (De ? String(((_e = f.interaction.stroke) == null ? void 0 : _e.toolKind) || "") === "eraser" ? (f.paintEngine.cancelActiveStroke(je), lb()) : f.paintEngine.commitActiveStroke(f.interaction.stroke, je) : f.paintEngine.cancelActiveStroke(je)), sn(), kr(), zt(), Ut(), e.setDirtyCanvas(!0, !0), et();
        } else {
          const ze = qn(f.interaction);
          ze && f.paintEngine.cancelActiveStroke(ze);
        }
      } else if (((ke = f.interaction) == null ? void 0 : ke.kind) === "marquee_select") {
        const De = If(f.interaction.start, f.interaction.current), ze = [
          ...t === "cutout" ? Tl().filter((je) => !To(je)) : [...Dl()],
          ...By(),
          ...Ky()
        ].filter((je) => t1(De, rn(je)));
        gb(ze, ((Ee = ze[ze.length - 1]) == null ? void 0 : Ee.id) || null), D && ze.length && (f.cutoutAspectOpen = !1), zt(), Ut(), et();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Le = f.interaction) == null ? void 0 : Le.kind))
        f.interaction.changed && (sn(), ri(), zt());
      else if (f.interaction && f.interaction.kind !== "view") {
        let De = !1;
        (f.interaction.kind === "move_stroke_group" || f.interaction.kind === "scale_stroke_group" || f.interaction.kind === "rotate_stroke_group") && (De = !0), (f.interaction.kind === "move_raster_object" || f.interaction.kind === "scale_raster_object") && (De = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length && (De = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.rasterSnapshots) && f.interaction.rasterSnapshots.length && (De = !0), De && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(f.interaction.kind) || f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length ? zi({ rebuildPaintEngine: !0 }) : za()), sn(), kr(), e.setDirtyCanvas(!0, !0), Hi(), Ut(), et();
      }
      f.interaction = null, (h == null ? void 0 : h.kind) === "roll_frame" && Ki(), Fo(), h && h.kind === "view" && Kl(() => ct.endDrag(performance.now())), Gi(), Ut(), kt(f.pointerPos), et();
    }
  }
  W.onpointerup = u1;
  function d1() {
    var h, M, L, ye, _e;
    if (!Eo()) {
      if (((h = f.interaction) == null ? void 0 : h.kind) === "world_select" || ((M = f.interaction) == null ? void 0 : M.kind) === "world_gizmo") {
        Ff(f.interaction);
        return;
      }
      if (((L = f.interaction) == null ? void 0 : L.kind) === "view" && Kl(() => ct.endDrag(performance.now())), ((ye = f.interaction) == null ? void 0 : ye.kind) === "paint_stroke" || ((_e = f.interaction) == null ? void 0 : _e.kind) === "paint_lasso_fill") {
        Fo();
        const ke = qn(f.interaction);
        ke && f.paintEngine.cancelActiveStroke(ke);
      }
      f.interaction = null, Fo(), Gi(), kt(f.pointerPos), et({ localOnly: !0 });
    }
  }
  W.onpointercancel = d1, W.onlostpointercapture = () => {
    Eo();
  }, W.onauxclick = (h) => {
    h.button === 1 && h.preventDefault();
  }, W.oncontextmenu = (h) => {
    (ii() || zl()) && cM(Jl(), 2) && h.preventDefault();
  };
  function f1(h) {
    const M = ai(h), L = Wa(M, !0);
    f.interaction || (kt(M), L && f.mode === "frame" && f.primaryTool === "cursor" && et({ localOnly: !0, reason: yt.OVERLAY }));
  }
  W.onmousemove = f1, W.onpointerleave = () => {
    f.interaction || Of({ x: -1e6, y: -1e6 });
  }, W.onmouseleave = () => {
    Wa(f.pointerPos, !1), kt(f.pointerPos), f.mode === "frame" && f.primaryTool === "cursor" && et({ localOnly: !0, reason: yt.OVERLAY });
  };
  function p1(h) {
    if (f.mode === "frame") {
      const M = ai(h), L = Rs(h);
      L && Bl(), L && zl() ? zb(M, -L) : L && jb(M, L) && et({ localOnly: !0 }), h.preventDefault();
      return;
    }
    if (f.mode === "pano") {
      if (Ud(), ii()) {
        const M = Rs(h);
        M && Hb(ai(h), -M);
      } else ct.applyWheelEvent(h) && et({ localOnly: !0, reason: yt.VIEW });
      h.preventDefault();
    }
  }
  W.onwheel = p1, W.ondragover = Jy, W.ondrop = Zy, window.addEventListener("dragenter", of, !0), window.addEventListener("dragover", sf, !0), window.addEventListener("dragleave", af, !0), window.addEventListener("drop", lf, !0);
  function Df(h, M, L = !1) {
    var Je;
    Bl();
    const ye = D && f.mode === "frame" ? Bt() : null, _e = ye || Mr(), ke = ye ? "shot" : Vl(), Ee = pf();
    if (Ee && !$b(Ee) || !Ee && (!_e || ke === "stroke" || Pr(_e))) return;
    const Le = (((Je = B.sidePanel) == null ? void 0 : Je.params) || []).find((ze) => ze.key === h);
    if (!Le || Le.enabled === !1) return;
    let De = Number(M);
    if (Number.isNaN(De) && (De = 0), (Ee || U) && gC.has(h) ? De = h === "scale" ? Math.max(De, oy) : De : De = Fe(De, Number(Le.min), Number(Le.max)), h === "yaw_deg" && (De = Dt(De)), !Ee && U && h.startsWith("position_")) {
      ql(), Yw(x.camera, f.frame, h, De), zt(), et(), L && sn();
      return;
    }
    if (Ee) {
      Jw(Ee, f.frame, h, De), Wr(), zt(), et(), L && sn();
      return;
    }
    h === "opacity" ? qw(_e, f.frame, De / 100) : Qn(_e, { [h]: De }), D && !$a(_e) && (h === "hFOV_deg" || h === "vFOV_deg") && (_e.aspect_id = _i(_e)), zt(), et(), L && sn();
  }
  async function h1(h) {
    var ye, _e, ke, Ee, Le, De, Je;
    const M = h.target.closest("[data-action]");
    if (!M) return;
    const L = String(M.getAttribute("data-action") || "");
    if (L === "coverage-set") {
      const ze = In(M.getAttribute("data-coverage"));
      if (ze === In(x.coverage)) return;
      x.coverage = ze, f.coverage = ze, l && (l.value = String(ze)), o ? O.backgroundDirty = !0 : (kr(), Pb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), zt(), Ut(), et();
      return;
    }
    if (L === "toggle-selection-picker") {
      if ((_e = (ye = B.sidePanel) == null ? void 0 : ye.selectionPicker) != null && _e.disabled) return;
      B.sidePanel.selectionPicker.open = !B.sidePanel.selectionPicker.open;
      return;
    }
    if (L === "select-picker-item") {
      B.sidePanel.selectionPicker.open = !1;
      const ze = String(M.getAttribute("data-selection-id") || "");
      let je = null;
      if (ze && (t === "stickers" ? je = [...Dl(), ...C ? x.shots : []].find((Be) => String((Be == null ? void 0 : Be.id) || "") === ze) || null : je = ((ke = $y().find((Be) => {
        var nt;
        return String(((nt = Be == null ? void 0 : Be.item) == null ? void 0 : nt.id) || "") === ze;
      })) == null ? void 0 : ke.item) || null), hf(je || null), je && !sr(je)) {
        const Be = On(je);
        Lb(Dt(Number(Be.yaw_deg || 0)), Fe(Number(Be.pitch_deg || 0), -89.9, 89.9));
      }
      zt(), Ut(), et();
      return;
    }
    if (L === "copy-state-inline") {
      const ze = Mr(), je = Vl();
      if (!ze || je === "stroke" || Va().length > 1) return;
      const Be = JSON.stringify(D && je !== "image" ? my(ze) : gy(On(ze)));
      try {
        await navigator.clipboard.writeText(Be), (Ee = B.sidePanel) != null && Ee.copyStateButton && (B.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var nt;
          (nt = B.sidePanel) != null && nt.copyStateButton && (B.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (L === "set-invert-x") {
      x.ui_settings.invert_view_x = M.getAttribute("data-value") === "1", Hl(), zt(), (Le = e.setDirtyCanvas) == null || Le.call(e, !0, !0), et();
      return;
    }
    if (L === "set-invert-y") {
      x.ui_settings.invert_view_y = M.getAttribute("data-value") === "1", Hl(), zt(), (De = e.setDirtyCanvas) == null || De.call(e, !0, !0), et();
      return;
    }
    if (L === "ui-reset-defaults") {
      x.ui_settings.invert_view_x = !1, x.ui_settings.invert_view_y = !1, Hl(), zt(), (Je = e.setDirtyCanvas) == null || Je.call(e, !0, !0), et();
      return;
    }
    if (L === "close-preview") {
      Yi();
      return;
    }
    if (L === "cancel-close") {
      Yi();
      return;
    }
    L === "save-close" && (ni(), Yi());
  }
  pe == null || pe.addEventListener("click", h1);
  function m1(h) {
    const M = h.target.closest("[data-action='param-input']");
    M && Df(String(M.getAttribute("data-param-key") || ""), M.value, !1);
  }
  pe == null || pe.addEventListener("input", m1);
  function g1(h) {
    const M = h.target.closest("[data-action='param-input']");
    M && Df(String(M.getAttribute("data-param-key") || ""), M.value, !0);
  }
  pe == null || pe.addEventListener("change", g1);
  function ec() {
    bf();
  }
  ec();
  function y1(h) {
    var Je, ze, je, Be, nt;
    if ((ze = (Je = h.target) == null ? void 0 : Je.matches) != null && ze.call(Je, "[data-confirm-overlay]")) {
      const We = (je = B.confirmDialog) == null ? void 0 : je.resolve;
      B.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, We == null || We(!1);
      return;
    }
    const M = h.target.closest("[data-space-mode]");
    if (M) {
      yb(M.getAttribute("data-space-mode"));
      return;
    }
    const L = h.target.closest("[data-gizmo-mode]");
    if (L) {
      f.gizmoMode = L.getAttribute("data-gizmo-mode"), O.backgroundDirty = !0, Ut(), et({ localOnly: !0, reason: yt.VIEW });
      return;
    }
    const ye = h.target.closest("[data-view]");
    if (ye) {
      if (ye.getAttribute("aria-disabled") === "true") return;
      const We = f.mode;
      f.mode = String(ye.getAttribute("data-view") || "pano"), D && f.mode === "frame" && (We !== "frame" && (O.frameSafeRect = null), zt(), Ut()), Fy(), Gi(), et();
      return;
    }
    const _e = h.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (_e && !r) {
      if (_e.matches("[data-tool-mode]")) {
        const We = String(_e.getAttribute("data-tool-mode") || "cursor");
        f.primaryTool = We, (We === "paint" || We === "mask") && Oo({ preservePanelValues: !0 }), Zn(), zt(), Ut(), et();
        return;
      }
      if (_e.matches("[data-tool-ui-action]")) {
        const We = String(_e.getAttribute("data-tool-ui-action") || "");
        if ((We === "undo" || We === "redo") && _e.disabled) return;
        We === "undo" ? Wl(-1) : We === "redo" ? Wl(1) : We === "clear" ? _y() : We === "add" || We === "add-image" ? $t() : We === "add-world" ? nn() : We === "add-or-look" ? At() : We === "add-camera" && Rn();
        return;
      }
      if (_e.matches("[data-paint-tool]")) {
        f.primaryTool = "paint";
        const We = String(_e.getAttribute("data-paint-tool") || "pen");
        f.paintTool = We, Oo({ preservePanelValues: !0 }), Pn[We] && (f.activeBrushPresetId = We), Zn(), zt(), Ut(), et();
        return;
      }
      if (_e.matches("[data-mask-tool]")) {
        f.primaryTool = "mask", f.maskTool = String(_e.getAttribute("data-mask-tool") || "pen"), Oo({ preservePanelValues: !0 }), Zn(), zt(), Ut(), et();
        return;
      }
      if (_e.matches("[data-paint-layer-clear-current]")) {
        const We = String(_e.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Sy(We);
        return;
      }
      if (_e.matches("[data-paint-color-swatch]")) {
        const We = sl.find((bt) => bt.id === _e.getAttribute("data-paint-color-swatch"));
        if (!We) return;
        f.paintColor = Fn(We.color), be(!0), Zn();
        return;
      }
      if (_e.matches("[data-paint-color-custom]")) {
        h.preventDefault(), h.stopPropagation(), X && !X.hidden ? be(!0) : Se(), Zn();
        return;
      }
    }
    const ke = String(((Be = _e == null ? void 0 : _e.getAttribute) == null ? void 0 : Be.call(_e, "data-action")) || "");
    if (ke === "video-play-toggle") {
      if (h.preventDefault(), h.stopPropagation(), !(xe instanceof HTMLVideoElement)) return;
      Ga.resumeAfterScrub = !1, Sf();
      return;
    }
    if (ke === "video-audio-toggle") {
      h.preventDefault(), h.stopPropagation(), Fb(), typeof (_e == null ? void 0 : _e.blur) == "function" && _e.blur();
      return;
    }
    if (ke === "video-loop-toggle") {
      if (h.preventDefault(), h.stopPropagation(), !(xe instanceof HTMLVideoElement)) return;
      const We = !B.videoTransport.loop;
      B.videoTransport.loop = We, xe.loop = We, _f({
        hasAudio: B.videoTransport.hasAudio,
        loop: We,
        muted: xe.muted,
        volume: Number(xe.volume ?? B.videoTransport.volume ?? 1)
      }), typeof (_e == null ? void 0 : _e.blur) == "function" && _e.blur();
      return;
    }
    if (!r) {
      if (ke === "frame-aspect") {
        B.frameRail.aspectOpen = !B.frameRail.aspectOpen;
        return;
      }
      if (ke === "frame-aspect-set") {
        const We = f.mode === "frame" ? Bt() : null;
        if (!We || We.locked === !0) return;
        mf(We, String(_e.getAttribute("data-aspect") || "1:1")), B.frameRail.aspectOpen = !1, Hi(), sn(), ri(), Gi(), zt(), Ut(), et();
        return;
      }
      if (ke === "frame-aspect-custom") {
        const We = f.mode === "frame" ? Bt() : null, bt = _e.getAttribute("data-custom-width"), Vt = _e.getAttribute("data-custom-height");
        if (!We || !Ti(We, bt, Vt)) return;
        B.frameRail.aspectOpen = !1, Hi(), sn(), ri(), Gi(), et();
        return;
      }
      if (ke === "frame-rotate-90") {
        const We = f.mode === "frame" ? Bt() : null;
        if (!We || We.locked === !0) return;
        df(We), B.frameRail.aspectOpen = !1, Hi(), sn(), ri(), Gi(), et();
        return;
      }
      if (ke === "aspect") {
        f.cutoutAspectOpen = !f.cutoutAspectOpen, f.menuSize.measured = !1, Ut(), et();
        return;
      }
      if (ke === "aspect-set") {
        const We = Mr();
        if (!We) return;
        const bt = String(_e.getAttribute("data-aspect") || "1:1");
        mf(We, bt), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, Hi(), sn(), ri(), Ut(), et();
        return;
      }
      if (ke === "rotate-90") {
        const We = Mr();
        if (!We || $l()) return;
        df(We), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, Hi(), sn(), ri(), Ut(), et();
        return;
      }
      if (ke === "bring-front") {
        hy();
        return;
      }
      if (ke === "send-back") {
        hb();
        return;
      }
      if (ke === "duplicate") {
        Ay();
        return;
      }
      if (ke === "replace-image") {
        cb();
        return;
      }
      if (ke === "toggle-lock") {
        Ob();
        return;
      }
      if (ke === "back-initial") {
        db();
        return;
      }
      if (ke === "toggle-visible") {
        Eb();
        return;
      }
      if (ke === "delete") {
        qd();
        return;
      }
    }
    if (ke === "reset-view") {
      if (f.mode === "frame") return;
      Tb(
        { position: vb(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((nt = wy()) == null ? void 0 : nt.radius) || ir },
        { mode: ol(f.spaceMode, f.viewTransition), moved: !1 }
      );
      return;
    }
    if (ke === "frame-view") {
      if (!ii() || ol(f.spaceMode, f.viewTransition) !== "6dof") return;
      Ly();
      return;
    }
    if (ke === "toggle-grid") {
      if (f.mode === "frame") return;
      f.showGrid = !f.showGrid, BC(e == null ? void 0 : e.id, f.showGrid), ec(), et();
      return;
    }
    if (ke === "toggle-fullscreen") {
      h.preventDefault(), h.stopPropagation(), k1();
      return;
    }
    if (ke === "toggle-output-preview-size") {
      h.preventDefault(), h.stopPropagation();
      const We = !f.outputPreviewExpanded;
      f.outputPreviewExpanded = We, Kl(() => {
        f.outputPreviewAnimFrom = f.outputPreviewAnim, f.outputPreviewAnimTo = We ? 1 : 0, f.outputPreviewAnimStartTs = performance.now();
      }), zf(), et();
      return;
    }
    const Ee = h.target.closest("[data-paint-history-index]");
    if (!Ee) return;
    const Le = Number(Ee.getAttribute("data-paint-history-index")), De = f.customPaintHistory[Le];
    De && (f.customPaintColor = Fn(De), f.paintColor = Fn(De), Zn());
  }
  E.addEventListener("click", y1);
  function b1(h) {
    const M = h.target.closest("[data-video-seek]");
    if (M) {
      if (!(xe instanceof HTMLVideoElement)) return;
      ji.playing && (Ga.resumeAfterScrub = !0), ji.seek(yi(Number(M.value || 0), ib()));
      return;
    }
    const L = h.target.closest("[data-video-volume]");
    if (L) {
      if (!(xe instanceof HTMLVideoElement)) return;
      const ke = Fe(Number(L.value || 0), 0, 1);
      xe.volume = ke, xe.muted = ke <= 1e-4, _f({
        hasAudio: B.videoTransport.hasAudio,
        muted: xe.muted,
        volume: ke
      });
      return;
    }
    const ye = h.target.closest("[data-paint-size-slider]");
    if (ye) {
      if (ye.disabled) return;
      const ke = Math.max(1, Math.min(120, Math.round(Number(ye.value)))), Ee = Wi(f.primaryTool === "paint" ? f.paintTool : f.maskTool);
      f.brushSizes[Ee] = ke, Zn(), Yb();
      return;
    }
    const _e = h.target.closest("[data-paint-alpha-slider]");
    if (_e) {
      const ke = { ...f.customPaintColor, a: Fe(Number(_e.value) / 100, 0, 1) };
      f.customPaintColor = Fn(ke), f.paintColor = Fn(ke), Zn();
    }
  }
  E.addEventListener("input", b1);
  function v1(h) {
    var M;
    if (h.target.closest("[data-video-seek]")) {
      if (!(xe instanceof HTMLVideoElement)) return;
      Ga.resumeAfterScrub && ji.play(), Ga.resumeAfterScrub = !1;
      return;
    }
    if (h.target.closest("[data-video-volume]")) {
      typeof ((M = h.target) == null ? void 0 : M.blur) == "function" && h.target.blur();
      return;
    }
    h.target.closest("[data-paint-size-slider]") && Ka();
  }
  E.addEventListener("change", v1), E.addEventListener("pointerup", (h) => {
    var M;
    if (h.target.closest("[data-video-volume]")) {
      typeof ((M = h.target) == null ? void 0 : M.blur) == "function" && h.target.blur();
      return;
    }
    h.target.closest("[data-paint-size-slider]") && Ka();
  }), E.addEventListener("pointercancel", (h) => {
    var M;
    if (h.target.closest("[data-video-volume]")) {
      typeof ((M = h.target) == null ? void 0 : M.blur) == "function" && h.target.blur();
      return;
    }
    h.target.closest("[data-paint-size-slider]") && Ka();
  }), E.addEventListener("focusout", (h) => {
    h.target.closest("[data-paint-size-slider]") && Ka();
  });
  function _1(h) {
    const M = h.target.closest("[data-tip]");
    !M || !E.contains(M) || Ue.target !== M && (Ue.target = M, Ue.timer && clearTimeout(Ue.timer), Ue.timer = window.setTimeout(() => {
      Ue.target === M && i1(M);
    }, 220));
  }
  E.addEventListener("pointerover", _1);
  function S1(h) {
    var ye, _e;
    const M = h.target.closest("[data-tip]");
    !M || Ue.target !== M || (h.relatedTarget instanceof Element ? (_e = (ye = h.relatedTarget).closest) == null ? void 0 : _e.call(ye, "[data-tip]") : null) === M || Ki();
  }
  E.addEventListener("pointerout", S1), E.addEventListener("pointerdown", (h) => {
    h.target.closest("[data-frame-roll-knob]") || Ki();
  });
  function w1(h, M) {
    var Le;
    if (!Q) return;
    const L = Q.getBoundingClientRect(), ye = Fe((h - L.left) / Math.max(1, L.width), 0, 1), _e = 1 - Fe((M - L.top) / Math.max(1, L.height), 0, 1), ke = Vu(f.customPaintColor), Ee = { ...Lu(ke.h, ye, _e), a: Number(((Le = f.customPaintColor) == null ? void 0 : Le.a) ?? 1) };
    f.customPaintColor = Fn(Ee), f.paintColor = Fn(Ee), Zn();
  }
  function x1(h) {
    var ke;
    if (!te) return;
    const M = te.getBoundingClientRect(), L = Fe((h - M.left) / Math.max(1, M.width), 0, 1), ye = Vu(f.customPaintColor), _e = { ...Lu(L, ye.s, ye.v), a: Number(((ke = f.customPaintColor) == null ? void 0 : ke.a) ?? 1) };
    f.customPaintColor = Fn(_e), f.paintColor = Fn(_e), Zn();
  }
  function Lf(h, M) {
    const L = h.pointerId;
    M(h);
    const ye = (ke) => {
      ke.pointerId === L && M(ke);
    }, _e = (ke) => {
      ke.pointerId === L && (window.removeEventListener("pointermove", ye), window.removeEventListener("pointerup", _e), window.removeEventListener("pointercancel", _e));
    };
    window.addEventListener("pointermove", ye), window.addEventListener("pointerup", _e), window.addEventListener("pointercancel", _e);
  }
  Q && (Q.onpointerdown = (h) => {
    h.preventDefault(), h.stopPropagation(), Lf(h, (M) => w1(M.clientX, M.clientY));
  }), te && (te.onpointerdown = (h) => {
    h.preventDefault(), h.stopPropagation(), Lf(h, (M) => x1(M.clientX));
  }), E.addEventListener("click", (h) => {
    var _e;
    const M = h.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!M) return;
    const L = M.getAttribute("data-action") === "confirm-accept", ye = (_e = B.confirmDialog) == null ? void 0 : _e.resolve;
    B.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ye == null || ye(L);
  });
  function Vf() {
    const h = !!f.fullscreen;
    ro(B.floatingButtons, "action", "toggle-fullscreen", {
      icon: h ? Ye.fullscreen_close : Ye.fullscreen,
      label: h ? "Exit Fullscreen" : "Fullscreen",
      tip: h ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Ba(h) {
    const M = !!h;
    f.fullscreen !== M && (f.fullscreen = M, E.classList.toggle("pano-modal-fullscreen", M), M ? (f.fullscreenPrevShowGrid = !!f.showGrid, f.showGrid = !1) : f.fullscreenPrevShowGrid !== null && (f.showGrid = !!f.fullscreenPrevShowGrid, f.fullscreenPrevShowGrid = null), ec(), Vf(), ob(), et());
  }
  function Rf() {
    return document.fullscreenElement === Z;
  }
  async function k1() {
    var h, M;
    try {
      if (!document.fullscreenEnabled) {
        Ba(!f.fullscreen);
        return;
      }
      Rf() ? await ((M = document.exitFullscreen) == null ? void 0 : M.call(document)) : await ((h = Z.requestFullscreen) == null ? void 0 : h.call(Z));
    } catch {
      Ba(!f.fullscreen);
    }
  }
  function $f() {
    document.fullscreenEnabled && Ba(Rf());
  }
  document.addEventListener("fullscreenchange", $f), Vf();
  function zf() {
    const h = !!f.outputPreviewExpanded;
    B.outputPreviewToggle.icon = h ? Ye.fullscreen_close : Ye.fullscreen, B.outputPreviewToggle.label = h ? "Reduce Preview" : "Expand Preview", B.outputPreviewToggle.tip = h ? "Reduce preview" : "Expand preview";
  }
  zf();
  const tc = e.onConnectionsChange;
  let nc = null, jf = () => {
  };
  !r && t === "stickers" && (jf = R0(e, (h = "sync") => {
    h === "executed" && (PI(v, al), Gl(), _ && fy()), uf(h);
  }, { editor: !0 }), nc = function(...M) {
    typeof tc == "function" && tc.apply(this, M), Gl(), Rr(this, "connections");
  }, e.onConnectionsChange = nc), !r && !b && Rh.set(String(e.id ?? "0"), () => Ab());
  let Ui = null;
  async function Yi() {
    return Ui || (Ui = (async () => {
      var h, M, L, ye, _e, ke, Ee, Le;
      return Rh.delete(String(e.id ?? "0")), Oy(), r || kr(), document.fullscreenElement === Z && ((h = document.exitFullscreen) == null || h.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", $f), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === xf && (e.__panoFlushStateBeforeQueue = null), (L = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || L.call(M), (_e = (ye = e.graph) == null ? void 0 : ye.setDirtyCanvas) == null || _e.call(ye, !0, !0), (Le = (Ee = (ke = nr) == null ? void 0 : ke.canvas) == null ? void 0 : Ee.setDirty) == null || Le.call(Ee, !0, !0), Ki(), Ie.cancel(), Mb(), xe instanceof HTMLVideoElement && xe.pause(), Vb.forEach((De) => {
        try {
          De();
        } catch {
        }
      }), Ve.dispose(), mb(!1), window.removeEventListener("keydown", Hf, !0), window.removeEventListener("keydown", Gf, !0), window.removeEventListener("keydown", Kf, !0), window.removeEventListener("keyup", Bf, !0), window.removeEventListener("keydown", Ua, !0), window.removeEventListener("keyup", Ua, !0), window.removeEventListener("blur", Uf), window.removeEventListener("keydown", Yf, !0), window.removeEventListener("dragenter", of, !0), window.removeEventListener("dragover", sf, !0), window.removeEventListener("dragleave", af, !0), window.removeEventListener("drop", lf, !0), !r && t === "stickers" && (e.onConnectionsChange === nc && (e.onConnectionsChange = tc), jf()), ge.unmount(), Y.remove(), Db(), Ui = null, !0;
    })().catch((h) => (console.error("[PanoramaCutoutSync] closeEditor failed", h), Ui = null, !1)), Ui);
  }
  function Hf(h) {
    var M, L, ye, _e, ke;
    if (h.key === "Escape") {
      if (Eo()) {
        h.preventDefault(), h.stopPropagation(), (M = h.stopImmediatePropagation) == null || M.call(h);
        return;
      }
      if (f.fullscreen && document.fullscreenElement === Z) {
        h.preventDefault(), h.stopPropagation(), (L = h.stopImmediatePropagation) == null || L.call(h), (ye = document.exitFullscreen) == null || ye.call(document).catch(() => {
        });
        return;
      }
      if (f.fullscreen) {
        h.preventDefault(), h.stopPropagation(), (_e = h.stopImmediatePropagation) == null || _e.call(h), Ba(!1);
        return;
      }
      h.preventDefault(), h.stopPropagation(), (ke = h.stopImmediatePropagation) == null || ke.call(h), Yi();
    }
  }
  function Gf(h) {
    const M = String(h.key || ""), L = String(h.code || ""), ye = Number(h.keyCode || 0);
    if (!(M === "Delete" || L === "Delete" || ye === 46) && !(M === "Backspace" || L === "Backspace" || ye === 8)) return;
    const Ee = h.target, Le = ((Ee == null ? void 0 : Ee.tagName) || "").toUpperCase();
    if (Le === "INPUT" || Le === "TEXTAREA" || Ee != null && Ee.isContentEditable) return;
    if ($.selection) {
      My(), h.preventDefault(), h.stopPropagation();
      return;
    }
    if (Py()) {
      h.preventDefault(), h.stopPropagation();
      return;
    }
    Mr() && (qd(), h.preventDefault(), h.stopPropagation());
  }
  function Wf(h) {
    if (h.code !== "Space" || h.ctrlKey || h.metaKey || h.altKey || r || !y || !B.timeline.visible || B.confirmDialog.visible) return !1;
    const M = h.composedPath()[0];
    if (M !== document.body && M !== document.documentElement && !Z.contains(M)) return !1;
    const L = ((M == null ? void 0 : M.tagName) || "").toUpperCase();
    return L === "INPUT" ? !mC.has(String(M.type || "text").toLowerCase()) : L !== "TEXTAREA" && L !== "SELECT" && !(M != null && M.isContentEditable);
  }
  function Kf(h) {
    Wf(h) && (h.preventDefault(), h.stopPropagation(), h.repeat || Sf());
  }
  function Bf(h) {
    Wf(h) && (h.preventDefault(), h.stopPropagation());
  }
  function Ua(h) {
    const M = !!(h.ctrlKey || h.metaKey), L = !!h.altKey;
    f.marqueeModifier === M && f.altModifier === L || (f.marqueeModifier = M, f.altModifier = L, Xl(), kt(f.pointerPos));
  }
  function Uf() {
    f.marqueeModifier = !1, f.altModifier = !1, Xl(), kt(f.pointerPos);
  }
  function Yf(h) {
    if (r || !h.ctrlKey && !h.metaKey) return;
    const M = String(h.key || "").toLowerCase(), L = String(h.code || "");
    if (M !== "z" && L !== "KeyZ") return;
    const ye = h.target, _e = ((ye == null ? void 0 : ye.tagName) || "").toUpperCase();
    if (_e === "INPUT" || _e === "TEXTAREA" || ye != null && ye.isContentEditable) return;
    const { canUndo: ke, canRedo: Ee } = Gy();
    h.shiftKey && !Ee || !h.shiftKey && !ke || (Wl(h.shiftKey ? 1 : -1), h.preventDefault(), h.stopPropagation());
  }
  window.addEventListener("keydown", Hf, !0), window.addEventListener("keydown", Gf, !0), window.addEventListener("keydown", Kf, !0), window.addEventListener("keyup", Bf, !0), window.addEventListener("keydown", Ua, !0), window.addEventListener("keyup", Ua, !0), window.addEventListener("blur", Uf), window.addEventListener("keydown", Yf, !0), Z.addEventListener("pointerdown", (h) => {
    h.target === Z && Yi();
  });
  function cr(h, M, { rollbackState: L = !1 } = {}) {
    let ye = "";
    try {
      L && (ye = JSON.stringify(x)), M();
    } catch (_e) {
      if (ye)
        try {
          const ke = JSON.parse(ye);
          Object.keys(x).forEach((Ee) => delete x[Ee]), Object.assign(x, ke), r || kr();
        } catch (ke) {
          console.error(`[PanoramaStickers] editor boot step "${h}" rollback failed`, ke);
        }
      B.stageWarningDetail = `boot:${h}`, console.error(`[PanoramaStickers] editor boot step "${h}" failed`, _e);
    }
  }
  cr("cutout-focus", Ta), !r && t === "stickers" && cr("external-sticker-sync", () => uf("open"), { rollbackState: !0 }), Xy().catch((h) => {
    B.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', h);
  }), cr("history", sn), cr("undo-redo", Cb), cr("paint-ui", Zn), cr("side-panel", zt), cr("look-at-frame", Nb), cr("video-source", Gl), cr("canvas-size", Yl), cr("cursor", () => kt(f.pointerPos)), et(), fb();
}
nr.registerExtension(vM({
  app: nr,
  openEditor: NI,
  attachStickers: FP,
  attachCutout: TP,
  attachPreview: OP,
  restoreOutput: vP,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: SC
}));
