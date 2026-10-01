import * as Os from "../../scripts/app.js";
import { app as lr } from "../../scripts/app.js";
import { api as Wt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function zu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, Mo = [], Ar = () => {
}, $p = () => !1, bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vl = (e) => e.startsWith("onUpdate:"), pn = Object.assign, ju = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, t1 = Object.prototype.hasOwnProperty, dt = (e, t) => t1.call(e, t), qe = Array.isArray, No = (e) => $a(e) === "[object Map]", Vp = (e) => $a(e) === "[object Set]", th = (e) => $a(e) === "[object Date]", Je = (e) => typeof e == "function", $t = (e) => typeof e == "string", Cr = (e) => typeof e == "symbol", mt = (e) => e !== null && typeof e == "object", zp = (e) => (mt(e) || Je(e)) && Je(e.then) && Je(e.catch), jp = Object.prototype.toString, $a = (e) => jp.call(e), n1 = (e) => $a(e).slice(8, -1), Hp = (e) => $a(e) === "[object Object]", Hu = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ba = /* @__PURE__ */ zu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _l = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, r1 = /-\w/g, wn = _l(
  (e) => e.replace(r1, (t) => t.slice(1).toUpperCase())
), i1 = /\B([A-Z])/g, Yi = _l(
  (e) => e.replace(i1, "-$1").toLowerCase()
), xl = _l((e) => e.charAt(0).toUpperCase() + e.slice(1)), wc = _l(
  (e) => e ? `on${xl(e)}` : ""
), kr = (e, t) => !Object.is(e, t), Ts = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Gp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Gu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let nh;
const wl = () => nh || (nh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = $t(r) ? l1(r) : St(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if ($t(e) || mt(e))
    return e;
}
const o1 = /;(?![^(]*\))/g, a1 = /:([^]+)/, s1 = /\/\*[^]*?\*\//g;
function l1(e) {
  const t = {};
  return e.replace(s1, "").split(o1).forEach((n) => {
    if (n) {
      const r = n.split(a1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function it(e) {
  let t = "";
  if ($t(e))
    t = e;
  else if (qe(e))
    for (let n = 0; n < e.length; n++) {
      const r = it(e[n]);
      r && (t += r + " ");
    }
  else if (mt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const c1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", u1 = /* @__PURE__ */ zu(c1);
function Kp(e) {
  return !!e || e === "";
}
function f1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Ku(e[r], t[r]);
  return n;
}
function Ku(e, t) {
  if (e === t) return !0;
  let n = th(e), r = th(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Cr(e), r = Cr(t), n || r)
    return e === t;
  if (n = qe(e), r = qe(t), n || r)
    return n && r ? f1(e, t) : !1;
  if (n = mt(e), r = mt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), d = t.hasOwnProperty(u);
      if (f && !d || !f && d || !Ku(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Bp = (e) => !!(e && e.__v_isRef === !0), tt = (e) => $t(e) ? e : e == null ? "" : qe(e) || mt(e) && (e.toString === jp || !Je(e.toString)) ? Bp(e) ? tt(e.value) : JSON.stringify(e, Wp, 2) : String(e), Wp = (e, t) => Bp(t) ? Wp(e, t.value) : No(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Sc(r, s) + " =>"] = o, n),
    {}
  )
} : Vp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Sc(n))
} : Cr(t) ? Sc(t) : mt(t) && !qe(t) && !Hp(t) ? String(t) : t, Sc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Cr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let En;
class d1 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = En, !t && En && (this.index = (En.scopes || (En.scopes = [])).push(
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
      const n = En;
      try {
        return En = this, t();
      } finally {
        En = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = En, En = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (En = this.prevScope, this.prevScope = void 0);
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function h1() {
  return En;
}
let wt;
const kc = /* @__PURE__ */ new WeakSet();
class Up {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, En && En.active && En.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, kc.has(this) && (kc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rh(this), qp(this);
    const t = wt, n = cr;
    wt = this, cr = !0;
    try {
      return this.fn();
    } finally {
      Jp(this), wt = t, cr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Uu(t);
      this.deps = this.depsTail = void 0, rh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? kc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    nu(this) && this.run();
  }
  get dirty() {
    return nu(this);
  }
}
let Yp = 0, va, _a;
function Xp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _a, _a = e;
    return;
  }
  e.next = va, va = e;
}
function Bu() {
  Yp++;
}
function Wu() {
  if (--Yp > 0)
    return;
  if (_a) {
    let t = _a;
    for (_a = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; va; ) {
    let t = va;
    for (va = void 0; t; ) {
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
function qp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Jp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Uu(r), p1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function nu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ma) || (e.globalVersion = Ma, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !nu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = wt, r = cr;
  wt = e, cr = !0;
  try {
    qp(e);
    const o = e.fn(e._value);
    (t.version === 0 || kr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    wt = n, cr = r, Jp(e), e.flags &= -3;
  }
}
function Uu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Uu(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function p1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let cr = !0;
const Qp = [];
function Jr() {
  Qp.push(cr), cr = !1;
}
function Zr() {
  const e = Qp.pop();
  cr = e === void 0 ? !0 : e;
}
function rh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = wt;
    wt = void 0;
    try {
      t();
    } finally {
      wt = n;
    }
  }
}
let Ma = 0;
class m1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!wt || !cr || wt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== wt)
      n = this.activeLink = new m1(wt, this), wt.deps ? (n.prevDep = wt.depsTail, wt.depsTail.nextDep = n, wt.depsTail = n) : wt.deps = wt.depsTail = n, em(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = wt.depsTail, n.nextDep = void 0, wt.depsTail.nextDep = n, wt.depsTail = n, wt.deps === n && (wt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ma++, this.notify(t);
  }
  notify(t) {
    Bu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wu();
    }
  }
}
function em(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        em(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ru = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ Symbol(
  ""
), iu = /* @__PURE__ */ Symbol(
  ""
), Na = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, n) {
  if (cr && wt) {
    let r = ru.get(e);
    r || ru.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Yu()), o.map = r, o.key = n), o.track();
  }
}
function Ur(e, t, n, r, o, s) {
  const u = ru.get(e);
  if (!u) {
    Ma++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (Bu(), t === "clear")
    u.forEach(f);
  else {
    const d = qe(e), v = d && Hu(n);
    if (d && n === "length") {
      const y = Number(r);
      u.forEach((x, S) => {
        (S === "length" || S === Na || !Cr(S) && S >= y) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), v && f(u.get(Na)), t) {
        case "add":
          d ? v && f(u.get("length")) : (f(u.get($i)), No(e) && f(u.get(iu)));
          break;
        case "delete":
          d || (f(u.get($i)), No(e) && f(u.get(iu)));
          break;
        case "set":
          No(e) && f(u.get($i));
          break;
      }
  }
  Wu();
}
function ho(e) {
  const t = /* @__PURE__ */ ft(e);
  return t === e ? t : (fn(t, "iterate", Na), /* @__PURE__ */ Yn(e) ? t : t.map(ur));
}
function Sl(e) {
  return fn(e = /* @__PURE__ */ ft(e), "iterate", Na), e;
}
function wr(e, t) {
  return /* @__PURE__ */ Qr(e) ? Do(/* @__PURE__ */ Vi(e) ? ur(t) : t) : ur(t);
}
const g1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mc(this, Symbol.iterator, (e) => wr(this, e));
  },
  concat(...e) {
    return ho(this).concat(
      ...e.map((t) => qe(t) ? ho(t) : t)
    );
  },
  entries() {
    return Mc(this, "entries", (e) => (e[1] = wr(this, e[1]), e));
  },
  every(e, t) {
    return Vr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Vr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => wr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Vr(
      this,
      "find",
      e,
      t,
      (n) => wr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Vr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Vr(
      this,
      "findLast",
      e,
      t,
      (n) => wr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Vr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Vr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Nc(this, "includes", e);
  },
  indexOf(...e) {
    return Nc(this, "indexOf", e);
  },
  join(e) {
    return ho(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Nc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Vr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ra(this, "pop");
  },
  push(...e) {
    return ra(this, "push", e);
  },
  reduce(e, ...t) {
    return ih(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ih(this, "reduceRight", e, t);
  },
  shift() {
    return ra(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Vr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ra(this, "splice", e);
  },
  toReversed() {
    return ho(this).toReversed();
  },
  toSorted(e) {
    return ho(this).toSorted(e);
  },
  toSpliced(...e) {
    return ho(this).toSpliced(...e);
  },
  unshift(...e) {
    return ra(this, "unshift", e);
  },
  values() {
    return Mc(this, "values", (e) => wr(this, e));
  }
};
function Mc(e, t, n) {
  const r = Sl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ Yn(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const y1 = Array.prototype;
function Vr(e, t, n, r, o, s) {
  const u = Sl(e), f = u !== e && !/* @__PURE__ */ Yn(e), d = u[t];
  if (d !== y1[t]) {
    const x = d.apply(e, s);
    return f ? ur(x) : x;
  }
  let v = n;
  u !== e && (f ? v = function(x, S) {
    return n.call(this, wr(e, x), S, e);
  } : n.length > 2 && (v = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const y = d.call(u, v, r);
  return f && o ? o(y) : y;
}
function ih(e, t, n, r) {
  const o = Sl(e), s = o !== e && !/* @__PURE__ */ Yn(e);
  let u = n, f = !1;
  o !== e && (s ? (f = r.length === 0, u = function(v, y, x) {
    return f && (f = !1, v = wr(e, v)), n.call(this, v, wr(e, y), x, e);
  }) : n.length > 3 && (u = function(v, y, x) {
    return n.call(this, v, y, x, e);
  }));
  const d = o[t](u, ...r);
  return f ? wr(e, d) : d;
}
function Nc(e, t, n) {
  const r = /* @__PURE__ */ ft(e);
  fn(r, "iterate", Na);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ju(n[0]) ? (n[0] = /* @__PURE__ */ ft(n[0]), r[t](...n)) : o;
}
function ra(e, t, n = []) {
  Jr(), Bu();
  const r = (/* @__PURE__ */ ft(e))[t].apply(e, n);
  return Wu(), Zr(), r;
}
const b1 = /* @__PURE__ */ zu("__proto__,__v_isRef,__isVue"), tm = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Cr)
);
function v1(e) {
  Cr(e) || (e = String(e));
  const t = /* @__PURE__ */ ft(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class nm {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? C1 : am : s ? om : im).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = qe(t);
    if (!o) {
      let d;
      if (u && (d = g1[n]))
        return d;
      if (n === "hasOwnProperty")
        return v1;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ hn(t) ? t : r
    );
    if ((Cr(n) ? tm.has(n) : b1(n)) || (o || fn(t, "get", n), s))
      return f;
    if (/* @__PURE__ */ hn(f)) {
      const d = u && Hu(n) ? f : f.value;
      return o && mt(d) ? /* @__PURE__ */ au(d) : d;
    }
    return mt(f) ? o ? /* @__PURE__ */ au(f) : /* @__PURE__ */ zo(f) : f;
  }
}
class rm extends nm {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const u = qe(t) && Hu(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Qr(s);
      if (!/* @__PURE__ */ Yn(r) && !/* @__PURE__ */ Qr(r) && (s = /* @__PURE__ */ ft(s), r = /* @__PURE__ */ ft(r)), !u && /* @__PURE__ */ hn(s) && !/* @__PURE__ */ hn(r))
        return v || (s.value = r), !0;
    }
    const f = u ? Number(n) < t.length : dt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ hn(t) ? t : o
    );
    return t === /* @__PURE__ */ ft(o) && (f ? kr(r, s) && Ur(t, "set", n, r) : Ur(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = dt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Ur(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Cr(n) || !tm.has(n)) && fn(t, "has", n), r;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      qe(t) ? "length" : $i
    ), Reflect.ownKeys(t);
  }
}
class _1 extends nm {
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
const x1 = /* @__PURE__ */ new rm(), w1 = /* @__PURE__ */ new _1(), S1 = /* @__PURE__ */ new rm(!0);
const ou = (e) => e, hs = (e) => Reflect.getPrototypeOf(e);
function k1(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = /* @__PURE__ */ ft(o), u = No(s), f = e === "entries" || e === Symbol.iterator && u, d = e === "keys" && u, v = o[e](...r), y = n ? ou : t ? Do : ur;
    return !t && fn(
      s,
      "iterate",
      d ? iu : $i
    ), pn(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = v.next();
          return S ? { value: x, done: S } : {
            value: f ? [y(x[0]), y(x[1])] : y(x),
            done: S
          };
        }
      }
    );
  };
}
function ps(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function M1(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, u = /* @__PURE__ */ ft(s), f = /* @__PURE__ */ ft(o);
      e || (kr(o, f) && fn(u, "get", o), fn(u, "get", f));
      const { has: d } = hs(u), v = t ? ou : e ? Do : ur;
      if (d.call(u, o))
        return v(s.get(o));
      if (d.call(u, f))
        return v(s.get(f));
      s !== u && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && fn(/* @__PURE__ */ ft(o), "iterate", $i), o.size;
    },
    has(o) {
      const s = this.__v_raw, u = /* @__PURE__ */ ft(s), f = /* @__PURE__ */ ft(o);
      return e || (kr(o, f) && fn(u, "has", o), fn(u, "has", f)), o === f ? s.has(o) : s.has(o) || s.has(f);
    },
    forEach(o, s) {
      const u = this, f = u.__v_raw, d = /* @__PURE__ */ ft(f), v = t ? ou : e ? Do : ur;
      return !e && fn(d, "iterate", $i), f.forEach((y, x) => o.call(s, v(y), v(x), u));
    }
  };
  return pn(
    n,
    e ? {
      add: ps("add"),
      set: ps("set"),
      delete: ps("delete"),
      clear: ps("clear")
    } : {
      add(o) {
        const s = /* @__PURE__ */ ft(this), u = hs(s), f = /* @__PURE__ */ ft(o), d = !t && !/* @__PURE__ */ Yn(o) && !/* @__PURE__ */ Qr(o) ? f : o;
        return u.has.call(s, d) || kr(o, d) && u.has.call(s, o) || kr(f, d) && u.has.call(s, f) || (s.add(d), Ur(s, "add", d, d)), this;
      },
      set(o, s) {
        !t && !/* @__PURE__ */ Yn(s) && !/* @__PURE__ */ Qr(s) && (s = /* @__PURE__ */ ft(s));
        const u = /* @__PURE__ */ ft(this), { has: f, get: d } = hs(u);
        let v = f.call(u, o);
        v || (o = /* @__PURE__ */ ft(o), v = f.call(u, o));
        const y = d.call(u, o);
        return u.set(o, s), v ? kr(s, y) && Ur(u, "set", o, s) : Ur(u, "add", o, s), this;
      },
      delete(o) {
        const s = /* @__PURE__ */ ft(this), { has: u, get: f } = hs(s);
        let d = u.call(s, o);
        d || (o = /* @__PURE__ */ ft(o), d = u.call(s, o)), f && f.call(s, o);
        const v = s.delete(o);
        return d && Ur(s, "delete", o, void 0), v;
      },
      clear() {
        const o = /* @__PURE__ */ ft(this), s = o.size !== 0, u = o.clear();
        return s && Ur(
          o,
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
  ].forEach((o) => {
    n[o] = k1(o, e, t);
  }), n;
}
function Xu(e, t) {
  const n = M1(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    dt(n, o) && o in r ? n : r,
    o,
    s
  );
}
const N1 = {
  get: /* @__PURE__ */ Xu(!1, !1)
}, P1 = {
  get: /* @__PURE__ */ Xu(!1, !0)
}, A1 = {
  get: /* @__PURE__ */ Xu(!0, !1)
};
const im = /* @__PURE__ */ new WeakMap(), om = /* @__PURE__ */ new WeakMap(), am = /* @__PURE__ */ new WeakMap(), C1 = /* @__PURE__ */ new WeakMap();
function I1(e) {
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
function E1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : I1(n1(e));
}
// @__NO_SIDE_EFFECTS__
function zo(e) {
  return /* @__PURE__ */ Qr(e) ? e : qu(
    e,
    !1,
    x1,
    N1,
    im
  );
}
// @__NO_SIDE_EFFECTS__
function O1(e) {
  return qu(
    e,
    !1,
    S1,
    P1,
    om
  );
}
// @__NO_SIDE_EFFECTS__
function au(e) {
  return qu(
    e,
    !0,
    w1,
    A1,
    am
  );
}
function qu(e, t, n, r, o) {
  if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = E1(e);
  if (s === 0)
    return e;
  const u = o.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function Vi(e) {
  return /* @__PURE__ */ Qr(e) ? /* @__PURE__ */ Vi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Qr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ju(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ft(t) : e;
}
function T1(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && Gp(e, "__v_skip", !0), e;
}
const ur = (e) => mt(e) ? /* @__PURE__ */ zo(e) : e, Do = (e) => mt(e) ? /* @__PURE__ */ au(e) : e;
// @__NO_SIDE_EFFECTS__
function hn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return F1(e, !1);
}
function F1(e, t) {
  return /* @__PURE__ */ hn(e) ? e : new D1(e, t);
}
class D1 {
  constructor(t, n) {
    this.dep = new Yu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ft(t), this._value = n ? t : ur(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Yn(t) || /* @__PURE__ */ Qr(t);
    t = r ? t : /* @__PURE__ */ ft(t), kr(t, n) && (this._rawValue = t, this._value = r ? t : ur(t), this.dep.trigger());
  }
}
function et(e) {
  return /* @__PURE__ */ hn(e) ? e.value : e;
}
const L1 = {
  get: (e, t, n) => t === "__v_raw" ? e : et(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ hn(o) && !/* @__PURE__ */ hn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function sm(e) {
  return /* @__PURE__ */ Vi(e) ? e : new Proxy(e, L1);
}
class R1 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ma - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Xp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $1(e, t, n = !1) {
  let r, o;
  return Je(e) ? r = e : (r = e.get, o = e.set), new R1(r, o, n);
}
const ms = {}, Xs = /* @__PURE__ */ new WeakMap();
let Oi;
function V1(e, t = !1, n = Oi) {
  if (n) {
    let r = Xs.get(n);
    r || Xs.set(n, r = []), r.push(e);
  }
}
function z1(e, t, n = _t) {
  const { immediate: r, deep: o, once: s, scheduler: u, augmentJob: f, call: d } = n, v = (O) => o ? O : /* @__PURE__ */ Yn(O) || o === !1 || o === 0 ? Yr(O, 1) : Yr(O);
  let y, x, S, C, k = !1, _ = !1;
  if (/* @__PURE__ */ hn(e) ? (x = () => e.value, k = /* @__PURE__ */ Yn(e)) : /* @__PURE__ */ Vi(e) ? (x = () => v(e), k = !0) : qe(e) ? (_ = !0, k = e.some((O) => /* @__PURE__ */ Vi(O) || /* @__PURE__ */ Yn(O)), x = () => e.map((O) => {
    if (/* @__PURE__ */ hn(O))
      return O.value;
    if (/* @__PURE__ */ Vi(O))
      return v(O);
    if (Je(O))
      return d ? d(O, 2) : O();
  })) : Je(e) ? t ? x = d ? () => d(e, 2) : e : x = () => {
    if (S) {
      Jr();
      try {
        S();
      } finally {
        Zr();
      }
    }
    const O = Oi;
    Oi = y;
    try {
      return d ? d(e, 3, [C]) : e(C);
    } finally {
      Oi = O;
    }
  } : x = Ar, t && o) {
    const O = x, $ = o === !0 ? 1 / 0 : o;
    x = () => Yr(O(), $);
  }
  const D = h1(), z = () => {
    y.stop(), D && D.active && ju(D.effects, y);
  };
  if (s && t) {
    const O = t;
    t = (...$) => {
      O(...$), z();
    };
  }
  let X = _ ? new Array(e.length).fill(ms) : ms;
  const N = (O) => {
    if (!(!(y.flags & 1) || !y.dirty && !O))
      if (t) {
        const $ = y.run();
        if (o || k || (_ ? $.some((V, W) => kr(V, X[W])) : kr($, X))) {
          S && S();
          const V = Oi;
          Oi = y;
          try {
            const W = [
              $,
              // pass undefined as the old value when it's changed for the first time
              X === ms ? void 0 : _ && X[0] === ms ? [] : X,
              C
            ];
            X = $, d ? d(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            Oi = V;
          }
        }
      } else
        y.run();
  };
  return f && f(N), y = new Up(x), y.scheduler = u ? () => u(N, !1) : N, C = (O) => V1(O, !1, y), S = y.onStop = () => {
    const O = Xs.get(y);
    if (O) {
      if (d)
        d(O, 4);
      else
        for (const $ of O) $();
      Xs.delete(y);
    }
  }, t ? r ? N(!0) : X = y.run() : u ? u(N.bind(null, !0), !0) : y.run(), z.pause = y.pause.bind(y), z.resume = y.resume.bind(y), z.stop = z, z;
}
function Yr(e, t = 1 / 0, n) {
  if (t <= 0 || !mt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ hn(e))
    Yr(e.value, t, n);
  else if (qe(e))
    for (let r = 0; r < e.length; r++)
      Yr(e[r], t, n);
  else if (Vp(e) || No(e))
    e.forEach((r) => {
      Yr(r, t, n);
    });
  else if (Hp(e)) {
    for (const r in e)
      Yr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Yr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Va(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    kl(o, t, n);
  }
}
function Ir(e, t, n, r) {
  if (Je(e)) {
    const o = Va(e, t, n, r);
    return o && zp(o) && o.catch((s) => {
      kl(s, t, n);
    }), o;
  }
  if (qe(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Ir(e[s], t, n, r));
    return o;
  }
}
function kl(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = t && t.appContext.config || _t;
  if (t) {
    let f = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const y = f.ec;
      if (y) {
        for (let x = 0; x < y.length; x++)
          if (y[x](e, d, v) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      Jr(), Va(s, null, 10, [
        e,
        d,
        v
      ]), Zr();
      return;
    }
  }
  j1(e, n, o, r, u);
}
function j1(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const xn = [];
let xr = -1;
const Po = [];
let pi = null, vo = 0;
const lm = /* @__PURE__ */ Promise.resolve();
let qs = null;
function Zu(e) {
  const t = qs || lm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function H1(e) {
  let t = xr + 1, n = xn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = xn[r], s = Pa(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Qu(e) {
  if (!(e.flags & 1)) {
    const t = Pa(e), n = xn[xn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Pa(n) ? xn.push(e) : xn.splice(H1(t), 0, e), e.flags |= 1, cm();
  }
}
function cm() {
  qs || (qs = lm.then(fm));
}
function G1(e) {
  qe(e) ? Po.push(...e) : pi && e.id === -1 ? pi.splice(vo + 1, 0, e) : e.flags & 1 || (Po.push(e), e.flags |= 1), cm();
}
function oh(e, t, n = xr + 1) {
  for (; n < xn.length; n++) {
    const r = xn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      xn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function um(e) {
  if (Po.length) {
    const t = [...new Set(Po)].sort(
      (n, r) => Pa(n) - Pa(r)
    );
    if (Po.length = 0, pi) {
      pi.push(...t);
      return;
    }
    for (pi = t, vo = 0; vo < pi.length; vo++) {
      const n = pi[vo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    pi = null, vo = 0;
  }
}
const Pa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fm(e) {
  try {
    for (xr = 0; xr < xn.length; xr++) {
      const t = xn[xr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Va(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xr < xn.length; xr++) {
      const t = xn[xr];
      t && (t.flags &= -2);
    }
    xr = -1, xn.length = 0, um(), qs = null, (xn.length || Po.length) && fm();
  }
}
let zn = null, dm = null;
function Js(e) {
  const t = zn;
  return zn = e, dm = e && e.type.__scopeId || null, t;
}
function hm(e, t = zn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && yh(-1);
    const s = Js(t);
    let u;
    try {
      u = e(...o);
    } finally {
      Js(s), r._d && yh(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function qr(e, t) {
  if (zn === null)
    return e;
  const n = Cl(zn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, u, f, d = _t] = t[o];
    s && (Je(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Yr(u), r.push({
      dir: s,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: d
    }));
  }
  return e;
}
function Ni(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let u = 0; u < o.length; u++) {
    const f = o[u];
    s && (f.oldValue = s[u].value);
    let d = f.dir[r];
    d && (Jr(), Ir(d, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Zr());
  }
}
function K1(e, t) {
  if (dn) {
    let n = dn.provides;
    const r = dn.parent && dn.parent.provides;
    r === n && (n = dn.provides = Object.create(r)), n[e] = t;
  }
}
function Fs(e, t, n = !1) {
  const r = Hv();
  if (r || Ao) {
    let o = Ao ? Ao._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Je(t) ? t.call(r && r.proxy) : t;
  }
}
const B1 = /* @__PURE__ */ Symbol.for("v-scx"), W1 = () => Fs(B1);
function zi(e, t, n) {
  return pm(e, t, n);
}
function pm(e, t, n = _t) {
  const { immediate: r, deep: o, flush: s, once: u } = n, f = pn({}, n), d = t && r || !t && s !== "post";
  let v;
  if (Ca) {
    if (s === "sync") {
      const C = W1();
      v = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!d) {
      const C = () => {
      };
      return C.stop = Ar, C.resume = Ar, C.pause = Ar, C;
    }
  }
  const y = dn;
  f.call = (C, k, _) => Ir(C, y, k, _);
  let x = !1;
  s === "post" ? f.scheduler = (C) => {
    In(C, y && y.suspense);
  } : s !== "sync" && (x = !0, f.scheduler = (C, k) => {
    k ? C() : Qu(C);
  }), f.augmentJob = (C) => {
    t && (C.flags |= 4), x && (C.flags |= 2, y && (C.id = y.uid, C.i = y));
  };
  const S = z1(e, t, f);
  return Ca && (v ? v.push(S) : d && S()), S;
}
function U1(e, t, n) {
  const r = this.proxy, o = $t(e) ? e.includes(".") ? mm(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Je(t) ? s = t : (s = t.handler, n = t);
  const u = ja(this), f = pm(o, s.bind(r), n);
  return u(), f;
}
function mm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Y1 = /* @__PURE__ */ Symbol("_vte"), X1 = (e) => e.__isTeleport, q1 = /* @__PURE__ */ Symbol("_leaveCb");
function ef(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ef(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function gm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ah(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Zs = /* @__PURE__ */ new WeakMap();
function xa(e, t, n, r, o = !1) {
  if (qe(e)) {
    e.forEach(
      (_, D) => xa(
        _,
        t && (qe(t) ? t[D] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (wa(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && xa(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Cl(r.component) : r.el, u = o ? null : s, { i: f, r: d } = e, v = t && t.r, y = f.refs === _t ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ ft(x), C = x === _t ? $p : (_) => ah(y, _) ? !1 : dt(S, _), k = (_, D) => !(D && ah(y, D));
  if (v != null && v !== d) {
    if (sh(t), $t(v))
      y[v] = null, C(v) && (x[v] = null);
    else if (/* @__PURE__ */ hn(v)) {
      const _ = t;
      k(v, _.k) && (v.value = null), _.k && (y[_.k] = null);
    }
  }
  if (Je(d))
    Va(d, f, 12, [u, y]);
  else {
    const _ = $t(d), D = /* @__PURE__ */ hn(d);
    if (_ || D) {
      const z = () => {
        if (e.f) {
          const X = _ ? C(d) ? x[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            qe(X) && ju(X, s);
          else if (qe(X))
            X.includes(s) || X.push(s);
          else if (_)
            y[d] = [s], C(d) && (x[d] = y[d]);
          else {
            const N = [s];
            k(d, e.k) && (d.value = N), e.k && (y[e.k] = N);
          }
        } else _ ? (y[d] = u, C(d) && (x[d] = u)) : D && (k(d, e.k) && (d.value = u), e.k && (y[e.k] = u));
      };
      if (u) {
        const X = () => {
          z(), Zs.delete(e);
        };
        X.id = -1, Zs.set(e, X), In(X, n);
      } else
        sh(e), z();
    }
  }
}
function sh(e) {
  const t = Zs.get(e);
  t && (t.flags |= 8, Zs.delete(e));
}
wl().requestIdleCallback;
wl().cancelIdleCallback;
const wa = (e) => !!e.type.__asyncLoader, ym = (e) => e.type.__isKeepAlive;
function J1(e, t) {
  bm(e, "a", t);
}
function Z1(e, t) {
  bm(e, "da", t);
}
function bm(e, t, n = dn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ml(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ym(o.parent.vnode) && Q1(r, t, n, o), o = o.parent;
  }
}
function Q1(e, t, n, r) {
  const o = Ml(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  vm(() => {
    ju(r[t], o);
  }, n);
}
function Ml(e, t, n = dn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...u) => {
      Jr();
      const f = ja(n), d = Ir(t, n, e, u);
      return f(), Zr(), d;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const ti = (e) => (t, n = dn) => {
  (!Ca || e === "sp") && Ml(e, (...r) => t(...r), n);
}, ev = ti("bm"), Nl = ti("m"), tv = ti(
  "bu"
), nv = ti("u"), za = ti(
  "bum"
), vm = ti("um"), rv = ti(
  "sp"
), iv = ti("rtg"), ov = ti("rtc");
function av(e, t = dn) {
  Ml("ec", e, t);
}
const sv = "components", _m = /* @__PURE__ */ Symbol.for("v-ndc");
function lv(e) {
  return $t(e) ? cv(sv, e, !1) || e : e || _m;
}
function cv(e, t, n = !0, r = !1) {
  const o = zn || dn;
  if (o) {
    const s = o.type;
    {
      const f = Uv(
        s,
        !1
      );
      if (f && (f === t || f === wn(t) || f === xl(wn(t))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      lh(o[e] || s[e], t) || // global registration
      lh(o.appContext[e], t)
    );
    return !u && r ? s : u;
  }
}
function lh(e, t) {
  return e && (e[t] || e[wn(t)] || e[xl(wn(t))]);
}
function xt(e, t, n, r) {
  let o;
  const s = n, u = qe(e);
  if (u || $t(e)) {
    const f = u && /* @__PURE__ */ Vi(e);
    let d = !1, v = !1;
    f && (d = !/* @__PURE__ */ Yn(e), v = /* @__PURE__ */ Qr(e), e = Sl(e)), o = new Array(e.length);
    for (let y = 0, x = e.length; y < x; y++)
      o[y] = t(
        d ? v ? Do(ur(e[y])) : ur(e[y]) : e[y],
        y,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let f = 0; f < e; f++)
      o[f] = t(f + 1, f, void 0, s);
  } else if (mt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (f, d) => t(f, d, void 0, s)
      );
    else {
      const f = Object.keys(e);
      o = new Array(f.length);
      for (let d = 0, v = f.length; d < v; d++) {
        const y = f[d];
        o[d] = t(e[y], y, d, s);
      }
    }
  else
    o = [];
  return o;
}
const su = (e) => e ? jm(e) ? Cl(e) : su(e.parent) : null, Sa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => su(e.parent),
    $root: (e) => su(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zu.bind(e.proxy)),
    $watch: (e) => U1.bind(e)
  })
), Pc = (e, t) => e !== _t && !e.__isScriptSetup && dt(e, t), uv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: u, type: f, appContext: d } = e;
    if (t[0] !== "$") {
      const S = u[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Pc(r, t))
          return u[t] = 1, r[t];
        if (o !== _t && dt(o, t))
          return u[t] = 2, o[t];
        if (dt(s, t))
          return u[t] = 3, s[t];
        if (n !== _t && dt(n, t))
          return u[t] = 4, n[t];
        lu && (u[t] = 0);
      }
    }
    const v = Sa[t];
    let y, x;
    if (v)
      return t === "$attrs" && fn(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = f.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== _t && dt(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = d.config.globalProperties, dt(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Pc(o, t) ? (o[t] = n, !0) : r !== _t && dt(r, t) ? (r[t] = n, !0) : dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: u }
  }, f) {
    let d;
    return !!(n[f] || e !== _t && f[0] !== "$" && dt(e, f) || Pc(t, f) || dt(s, f) || dt(r, f) || dt(Sa, f) || dt(o.config.globalProperties, f) || (d = u.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : dt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ch(e) {
  return qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let lu = !0;
function fv(e) {
  const t = wm(e), n = e.proxy, r = e.ctx;
  lu = !1, t.beforeCreate && uh(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: u,
    watch: f,
    provide: d,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: x,
    mounted: S,
    beforeUpdate: C,
    updated: k,
    activated: _,
    deactivated: D,
    beforeDestroy: z,
    beforeUnmount: X,
    destroyed: N,
    unmounted: O,
    render: $,
    renderTracked: V,
    renderTriggered: W,
    errorCaptured: R,
    serverPrefetch: Y,
    // public API
    expose: I,
    inheritAttrs: T,
    // assets
    components: le,
    directives: U,
    filters: Q
  } = t;
  if (v && dv(v, r, null), u)
    for (const de in u) {
      const E = u[de];
      Je(E) && (r[de] = E.bind(n));
    }
  if (o) {
    const de = o.call(n, n);
    mt(de) && (e.data = /* @__PURE__ */ zo(de));
  }
  if (lu = !0, s)
    for (const de in s) {
      const E = s[de], Ge = Je(E) ? E.bind(n, n) : Je(E.get) ? E.get.bind(n, n) : Ar, G = !Je(E) && Je(E.set) ? E.set.bind(n) : Ar, Le = ct({
        get: Ge,
        set: G
      });
      Object.defineProperty(r, de, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (rt) => Le.value = rt
      });
    }
  if (f)
    for (const de in f)
      xm(f[de], r, n, de);
  if (d) {
    const de = Je(d) ? d.call(n) : d;
    Reflect.ownKeys(de).forEach((E) => {
      K1(E, de[E]);
    });
  }
  y && uh(y, e, "c");
  function Me(de, E) {
    qe(E) ? E.forEach((Ge) => de(Ge.bind(n))) : E && de(E.bind(n));
  }
  if (Me(ev, x), Me(Nl, S), Me(tv, C), Me(nv, k), Me(J1, _), Me(Z1, D), Me(av, R), Me(ov, V), Me(iv, W), Me(za, X), Me(vm, O), Me(rv, Y), qe(I))
    if (I.length) {
      const de = e.exposed || (e.exposed = {});
      I.forEach((E) => {
        Object.defineProperty(de, E, {
          get: () => n[E],
          set: (Ge) => n[E] = Ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === Ar && (e.render = $), T != null && (e.inheritAttrs = T), le && (e.components = le), U && (e.directives = U), Y && gm(e);
}
function dv(e, t, n = Ar) {
  qe(e) && (e = cu(e));
  for (const r in e) {
    const o = e[r];
    let s;
    mt(o) ? "default" in o ? s = Fs(
      o.from || r,
      o.default,
      !0
    ) : s = Fs(o.from || r) : s = Fs(o), /* @__PURE__ */ hn(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : t[r] = s;
  }
}
function uh(e, t, n) {
  Ir(
    qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xm(e, t, n, r) {
  let o = r.includes(".") ? mm(n, r) : () => n[r];
  if ($t(e)) {
    const s = t[e];
    Je(s) && zi(o, s);
  } else if (Je(e))
    zi(o, e.bind(n));
  else if (mt(e))
    if (qe(e))
      e.forEach((s) => xm(s, t, n, r));
    else {
      const s = Je(e.handler) ? e.handler.bind(n) : t[e.handler];
      Je(s) && zi(o, s, e);
    }
}
function wm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = s.get(t);
  let d;
  return f ? d = f : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (v) => Qs(d, v, u, !0)
  ), Qs(d, t, u)), mt(t) && s.set(t, d), d;
}
function Qs(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Qs(e, s, n, !0), o && o.forEach(
    (u) => Qs(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const f = hv[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const hv = {
  data: fh,
  props: dh,
  emits: dh,
  // objects
  methods: fa,
  computed: fa,
  // lifecycle
  beforeCreate: _n,
  created: _n,
  beforeMount: _n,
  mounted: _n,
  beforeUpdate: _n,
  updated: _n,
  beforeDestroy: _n,
  beforeUnmount: _n,
  destroyed: _n,
  unmounted: _n,
  activated: _n,
  deactivated: _n,
  errorCaptured: _n,
  serverPrefetch: _n,
  // assets
  components: fa,
  directives: fa,
  // watch
  watch: mv,
  // provide / inject
  provide: fh,
  inject: pv
};
function fh(e, t) {
  return t ? e ? function() {
    return pn(
      Je(e) ? e.call(this, this) : e,
      Je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pv(e, t) {
  return fa(cu(e), cu(t));
}
function cu(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _n(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function fa(e, t) {
  return e ? pn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dh(e, t) {
  return e ? qe(e) && qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pn(
    /* @__PURE__ */ Object.create(null),
    ch(e),
    ch(t ?? {})
  ) : t;
}
function mv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = _n(e[r], t[r]);
  return n;
}
function Sm() {
  return {
    app: null,
    config: {
      isNativeTag: $p,
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
let gv = 0;
function yv(e, t) {
  return function(r, o = null) {
    Je(r) || (r = pn({}, r)), o != null && !mt(o) && (o = null);
    const s = Sm(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const v = s.app = {
      _uid: gv++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Xv,
      get config() {
        return s.config;
      },
      set config(y) {
      },
      use(y, ...x) {
        return u.has(y) || (y && Je(y.install) ? (u.add(y), y.install(v, ...x)) : Je(y) && (u.add(y), y(v, ...x))), v;
      },
      mixin(y) {
        return s.mixins.includes(y) || s.mixins.push(y), v;
      },
      component(y, x) {
        return x ? (s.components[y] = x, v) : s.components[y];
      },
      directive(y, x) {
        return x ? (s.directives[y] = x, v) : s.directives[y];
      },
      mount(y, x, S) {
        if (!d) {
          const C = v._ceVNode || Te(r, o);
          return C.appContext = s, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(C, y, S), d = !0, v._container = y, y.__vue_app__ = v, Cl(C.component);
        }
      },
      onUnmount(y) {
        f.push(y);
      },
      unmount() {
        d && (Ir(
          f,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, x) {
        return s.provides[y] = x, v;
      },
      runWithContext(y) {
        const x = Ao;
        Ao = v;
        try {
          return y();
        } finally {
          Ao = x;
        }
      }
    };
    return v;
  };
}
let Ao = null;
const bv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wn(t)}Modifiers`] || e[`${Yi(t)}Modifiers`];
function vv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let o = n;
  const s = t.startsWith("update:"), u = s && bv(r, t.slice(7));
  u && (u.trim && (o = n.map((y) => $t(y) ? y.trim() : y)), u.number && (o = n.map(Gu)));
  let f, d = r[f = wc(t)] || // also try camelCase event handler (#2249)
  r[f = wc(wn(t))];
  !d && s && (d = r[f = wc(Yi(t))]), d && Ir(
    d,
    e,
    6,
    o
  );
  const v = r[f + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Ir(
      v,
      e,
      6,
      o
    );
  }
}
const _v = /* @__PURE__ */ new WeakMap();
function km(e, t, n = !1) {
  const r = n ? _v : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let u = {}, f = !1;
  if (!Je(e)) {
    const d = (v) => {
      const y = km(v, t, !0);
      y && (f = !0, pn(u, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !s && !f ? (mt(e) && r.set(e, null), null) : (qe(s) ? s.forEach((d) => u[d] = null) : pn(u, s), mt(e) && r.set(e, u), u);
}
function Pl(e, t) {
  return !e || !bl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), dt(e, t[0].toLowerCase() + t.slice(1)) || dt(e, Yi(t)) || dt(e, t));
}
function hh(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: u,
    attrs: f,
    emit: d,
    render: v,
    renderCache: y,
    props: x,
    data: S,
    setupState: C,
    ctx: k,
    inheritAttrs: _
  } = e, D = Js(e);
  let z, X;
  try {
    if (n.shapeFlag & 4) {
      const O = o || r, $ = O;
      z = Sr(
        v.call(
          $,
          O,
          y,
          x,
          C,
          S,
          k
        )
      ), X = f;
    } else {
      const O = t;
      z = Sr(
        O.length > 1 ? O(
          x,
          { attrs: f, slots: u, emit: d }
        ) : O(
          x,
          null
        )
      ), X = t.props ? f : xv(f);
    }
  } catch (O) {
    ka.length = 0, kl(O, e, 1), z = Te(yi);
  }
  let N = z;
  if (X && _ !== !1) {
    const O = Object.keys(X), { shapeFlag: $ } = N;
    O.length && $ & 7 && (s && O.some(vl) && (X = wv(
      X,
      s
    )), N = Lo(N, X, !1, !0));
  }
  return n.dirs && (N = Lo(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && ef(N, n.transition), z = N, Js(D), z;
}
const xv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || bl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wv = (e, t) => {
  const n = {};
  for (const r in e)
    (!vl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Sv(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: u, children: f, patchFlag: d } = t, v = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? ph(r, u, v) : !!u;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        const S = y[x];
        if (Mm(u, r, S) && !Pl(v, S))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? ph(r, u, v) : !0 : !!u;
  return !1;
}
function ph(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (Mm(t, e, s) && !Pl(n, s))
      return !0;
  }
  return !1;
}
function Mm(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && mt(r) && mt(o) ? !Ku(r, o) : r !== o;
}
function kv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Nm = {}, Pm = () => Object.create(Nm), Am = (e) => Object.getPrototypeOf(e) === Nm;
function Mv(e, t, n, r = !1) {
  const o = {}, s = Pm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cm(e, t, o, s);
  for (const u in e.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ O1(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Nv(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ ft(o), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const y = e.vnode.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        let S = y[x];
        if (Pl(e.emitsOptions, S))
          continue;
        const C = t[S];
        if (d)
          if (dt(s, S))
            C !== s[S] && (s[S] = C, v = !0);
          else {
            const k = wn(S);
            o[k] = uu(
              d,
              f,
              k,
              C,
              e,
              !1
            );
          }
        else
          C !== s[S] && (s[S] = C, v = !0);
      }
    }
  } else {
    Cm(e, t, o, s) && (v = !0);
    let y;
    for (const x in f)
      (!t || // for camelCase
      !dt(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Yi(x)) === x || !dt(t, y))) && (d ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[x] = uu(
        d,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete o[x]);
    if (s !== f)
      for (const x in s)
        (!t || !dt(t, x)) && (delete s[x], v = !0);
  }
  v && Ur(e.attrs, "set", "");
}
function Cm(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let d in t) {
      if (ba(d))
        continue;
      const v = t[d];
      let y;
      o && dt(o, y = wn(d)) ? !s || !s.includes(y) ? n[y] = v : (f || (f = {}))[y] = v : Pl(e.emitsOptions, d) || (!(d in r) || v !== r[d]) && (r[d] = v, u = !0);
    }
  if (s) {
    const d = /* @__PURE__ */ ft(n), v = f || _t;
    for (let y = 0; y < s.length; y++) {
      const x = s[y];
      n[x] = uu(
        o,
        d,
        x,
        v[x],
        e,
        !dt(v, x)
      );
    }
  }
  return u;
}
function uu(e, t, n, r, o, s) {
  const u = e[n];
  if (u != null) {
    const f = dt(u, "default");
    if (f && r === void 0) {
      const d = u.default;
      if (u.type !== Function && !u.skipFactory && Je(d)) {
        const { propsDefaults: v } = o;
        if (n in v)
          r = v[n];
        else {
          const y = ja(o);
          r = v[n] = d.call(
            null,
            t
          ), y();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Yi(n)) && (r = !0));
  }
  return r;
}
const Pv = /* @__PURE__ */ new WeakMap();
function Im(e, t, n = !1) {
  const r = n ? Pv : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, u = {}, f = [];
  let d = !1;
  if (!Je(e)) {
    const y = (x) => {
      d = !0;
      const [S, C] = Im(x, t, !0);
      pn(u, S), C && f.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!s && !d)
    return mt(e) && r.set(e, Mo), Mo;
  if (qe(s))
    for (let y = 0; y < s.length; y++) {
      const x = wn(s[y]);
      mh(x) && (u[x] = _t);
    }
  else if (s)
    for (const y in s) {
      const x = wn(y);
      if (mh(x)) {
        const S = s[y], C = u[x] = qe(S) || Je(S) ? { type: S } : pn({}, S), k = C.type;
        let _ = !1, D = !0;
        if (qe(k))
          for (let z = 0; z < k.length; ++z) {
            const X = k[z], N = Je(X) && X.name;
            if (N === "Boolean") {
              _ = !0;
              break;
            } else N === "String" && (D = !1);
          }
        else
          _ = Je(k) && k.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = _, C[
          1
          /* shouldCastTrue */
        ] = D, (_ || dt(C, "default")) && f.push(x);
      }
    }
  const v = [u, f];
  return mt(e) && r.set(e, v), v;
}
function mh(e) {
  return e[0] !== "$" && !ba(e);
}
const tf = (e) => e === "_" || e === "_ctx" || e === "$stable", nf = (e) => qe(e) ? e.map(Sr) : [Sr(e)], Av = (e, t, n) => {
  if (t._n)
    return t;
  const r = hm((...o) => nf(t(...o)), n);
  return r._c = !1, r;
}, Em = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (tf(o)) continue;
    const s = e[o];
    if (Je(s))
      t[o] = Av(o, s, r);
    else if (s != null) {
      const u = nf(s);
      t[o] = () => u;
    }
  }
}, Om = (e, t) => {
  const n = nf(t);
  e.slots.default = () => n;
}, Tm = (e, t, n) => {
  for (const r in t)
    (n || !tf(r)) && (e[r] = t[r]);
}, Cv = (e, t, n) => {
  const r = e.slots = Pm();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Tm(r, t, n), n && Gp(r, "_", o, !0)) : Em(t, r);
  } else t && Om(e, t);
}, Iv = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, u = _t;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? s = !1 : Tm(o, t, n) : (s = !t.$stable, Em(t, o)), u = t;
  } else t && (Om(e, t), u = { default: 1 });
  if (s)
    for (const f in o)
      !tf(f) && u[f] == null && delete o[f];
}, In = Dv;
function Ev(e) {
  return Ov(e);
}
function Ov(e, t) {
  const n = wl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: d,
    setText: v,
    setElementText: y,
    parentNode: x,
    nextSibling: S,
    setScopeId: C = Ar,
    insertStaticContent: k
  } = e, _ = (L, j, te, ue = null, he = null, pe = null, _e = void 0, Pe = null, we = !!j.dynamicChildren) => {
    if (L === j)
      return;
    L && !ia(L, j) && (ue = Tn(L), rt(L, he, pe, !0), L = null), j.patchFlag === -2 && (we = !1, j.dynamicChildren = null);
    const { type: ye, ref: Re, shapeFlag: Ie } = j;
    switch (ye) {
      case Al:
        D(L, j, te, ue);
        break;
      case yi:
        z(L, j, te, ue);
        break;
      case Cc:
        L == null && X(j, te, ue, _e);
        break;
      case Be:
        le(
          L,
          j,
          te,
          ue,
          he,
          pe,
          _e,
          Pe,
          we
        );
        break;
      default:
        Ie & 1 ? $(
          L,
          j,
          te,
          ue,
          he,
          pe,
          _e,
          Pe,
          we
        ) : Ie & 6 ? U(
          L,
          j,
          te,
          ue,
          he,
          pe,
          _e,
          Pe,
          we
        ) : (Ie & 64 || Ie & 128) && ye.process(
          L,
          j,
          te,
          ue,
          he,
          pe,
          _e,
          Pe,
          we,
          kn
        );
    }
    Re != null && he ? xa(Re, L && L.ref, pe, j || L, !j) : Re == null && L && L.ref != null && xa(L.ref, null, pe, L, !0);
  }, D = (L, j, te, ue) => {
    if (L == null)
      r(
        j.el = f(j.children),
        te,
        ue
      );
    else {
      const he = j.el = L.el;
      j.children !== L.children && v(he, j.children);
    }
  }, z = (L, j, te, ue) => {
    L == null ? r(
      j.el = d(j.children || ""),
      te,
      ue
    ) : j.el = L.el;
  }, X = (L, j, te, ue) => {
    [L.el, L.anchor] = k(
      L.children,
      j,
      te,
      ue,
      L.el,
      L.anchor
    );
  }, N = ({ el: L, anchor: j }, te, ue) => {
    let he;
    for (; L && L !== j; )
      he = S(L), r(L, te, ue), L = he;
    r(j, te, ue);
  }, O = ({ el: L, anchor: j }) => {
    let te;
    for (; L && L !== j; )
      te = S(L), o(L), L = te;
    o(j);
  }, $ = (L, j, te, ue, he, pe, _e, Pe, we) => {
    if (j.type === "svg" ? _e = "svg" : j.type === "math" && (_e = "mathml"), L == null)
      V(
        j,
        te,
        ue,
        he,
        pe,
        _e,
        Pe,
        we
      );
    else {
      const ye = L.el && L.el._isVueCE ? L.el : null;
      try {
        ye && ye._beginPatch(), Y(
          L,
          j,
          he,
          pe,
          _e,
          Pe,
          we
        );
      } finally {
        ye && ye._endPatch();
      }
    }
  }, V = (L, j, te, ue, he, pe, _e, Pe) => {
    let we, ye;
    const { props: Re, shapeFlag: Ie, transition: De, dirs: p } = L;
    if (we = L.el = u(
      L.type,
      pe,
      Re && Re.is,
      Re
    ), Ie & 8 ? y(we, L.children) : Ie & 16 && R(
      L.children,
      we,
      null,
      ue,
      he,
      Ac(L, pe),
      _e,
      Pe
    ), p && Ni(L, null, ue, "created"), W(we, L, L.scopeId, _e, ue), Re) {
      for (const Ue in Re)
        Ue !== "value" && !ba(Ue) && s(we, Ue, null, Re[Ue], pe, ue);
      "value" in Re && s(we, "value", null, Re.value, pe), (ye = Re.onVnodeBeforeMount) && yr(ye, ue, L);
    }
    p && Ni(L, null, ue, "beforeMount");
    const Ne = Tv(he, De);
    Ne && De.beforeEnter(we), r(we, j, te), ((ye = Re && Re.onVnodeMounted) || Ne || p) && In(() => {
      try {
        ye && yr(ye, ue, L), Ne && De.enter(we), p && Ni(L, null, ue, "mounted");
      } finally {
      }
    }, he);
  }, W = (L, j, te, ue, he) => {
    if (te && C(L, te), ue)
      for (let pe = 0; pe < ue.length; pe++)
        C(L, ue[pe]);
    if (he) {
      let pe = he.subTree;
      if (j === pe || Rm(pe.type) && (pe.ssContent === j || pe.ssFallback === j)) {
        const _e = he.vnode;
        W(
          L,
          _e,
          _e.scopeId,
          _e.slotScopeIds,
          he.parent
        );
      }
    }
  }, R = (L, j, te, ue, he, pe, _e, Pe, we = 0) => {
    for (let ye = we; ye < L.length; ye++) {
      const Re = L[ye] = Pe ? Wr(L[ye]) : Sr(L[ye]);
      _(
        null,
        Re,
        j,
        te,
        ue,
        he,
        pe,
        _e,
        Pe
      );
    }
  }, Y = (L, j, te, ue, he, pe, _e) => {
    const Pe = j.el = L.el;
    let { patchFlag: we, dynamicChildren: ye, dirs: Re } = j;
    we |= L.patchFlag & 16;
    const Ie = L.props || _t, De = j.props || _t;
    let p;
    if (te && Pi(te, !1), (p = De.onVnodeBeforeUpdate) && yr(p, te, j, L), Re && Ni(j, L, te, "beforeUpdate"), te && Pi(te, !0), (Ie.innerHTML && De.innerHTML == null || Ie.textContent && De.textContent == null) && y(Pe, ""), ye ? I(
      L.dynamicChildren,
      ye,
      Pe,
      te,
      ue,
      Ac(j, he),
      pe
    ) : _e || E(
      L,
      j,
      Pe,
      null,
      te,
      ue,
      Ac(j, he),
      pe,
      !1
    ), we > 0) {
      if (we & 16)
        T(Pe, Ie, De, te, he);
      else if (we & 2 && Ie.class !== De.class && s(Pe, "class", null, De.class, he), we & 4 && s(Pe, "style", Ie.style, De.style, he), we & 8) {
        const Ne = j.dynamicProps;
        for (let Ue = 0; Ue < Ne.length; Ue++) {
          const ut = Ne[Ue], yt = Ie[ut], Nt = De[ut];
          (Nt !== yt || ut === "value") && s(Pe, ut, yt, Nt, he, te);
        }
      }
      we & 1 && L.children !== j.children && y(Pe, j.children);
    } else !_e && ye == null && T(Pe, Ie, De, te, he);
    ((p = De.onVnodeUpdated) || Re) && In(() => {
      p && yr(p, te, j, L), Re && Ni(j, L, te, "updated");
    }, ue);
  }, I = (L, j, te, ue, he, pe, _e) => {
    for (let Pe = 0; Pe < j.length; Pe++) {
      const we = L[Pe], ye = j[Pe], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        we.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (we.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ia(we, ye) || // - In the case of a component, it could contain anything.
        we.shapeFlag & 198) ? x(we.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      _(
        we,
        ye,
        Re,
        null,
        ue,
        he,
        pe,
        _e,
        !0
      );
    }
  }, T = (L, j, te, ue, he) => {
    if (j !== te) {
      if (j !== _t)
        for (const pe in j)
          !ba(pe) && !(pe in te) && s(
            L,
            pe,
            j[pe],
            null,
            he,
            ue
          );
      for (const pe in te) {
        if (ba(pe)) continue;
        const _e = te[pe], Pe = j[pe];
        _e !== Pe && pe !== "value" && s(L, pe, Pe, _e, he, ue);
      }
      "value" in te && s(L, "value", j.value, te.value, he);
    }
  }, le = (L, j, te, ue, he, pe, _e, Pe, we) => {
    const ye = j.el = L ? L.el : f(""), Re = j.anchor = L ? L.anchor : f("");
    let { patchFlag: Ie, dynamicChildren: De, slotScopeIds: p } = j;
    p && (Pe = Pe ? Pe.concat(p) : p), L == null ? (r(ye, te, ue), r(Re, te, ue), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      te,
      Re,
      he,
      pe,
      _e,
      Pe,
      we
    )) : Ie > 0 && Ie & 64 && De && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren && L.dynamicChildren.length === De.length ? (I(
      L.dynamicChildren,
      De,
      te,
      he,
      pe,
      _e,
      Pe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || he && j === he.subTree) && Fm(
      L,
      j,
      !0
      /* shallow */
    )) : E(
      L,
      j,
      te,
      Re,
      he,
      pe,
      _e,
      Pe,
      we
    );
  }, U = (L, j, te, ue, he, pe, _e, Pe, we) => {
    j.slotScopeIds = Pe, L == null ? j.shapeFlag & 512 ? he.ctx.activate(
      j,
      te,
      ue,
      _e,
      we
    ) : Q(
      j,
      te,
      ue,
      he,
      pe,
      _e,
      we
    ) : se(L, j, we);
  }, Q = (L, j, te, ue, he, pe, _e) => {
    const Pe = L.component = jv(
      L,
      ue,
      he
    );
    if (ym(L) && (Pe.ctx.renderer = kn), Gv(Pe, !1, _e), Pe.asyncDep) {
      if (he && he.registerDep(Pe, Me, _e), !L.el) {
        const we = Pe.subTree = Te(yi);
        z(null, we, j, te), L.placeholder = we.el;
      }
    } else
      Me(
        Pe,
        L,
        j,
        te,
        he,
        pe,
        _e
      );
  }, se = (L, j, te) => {
    const ue = j.component = L.component;
    if (Sv(L, j, te))
      if (ue.asyncDep && !ue.asyncResolved) {
        de(ue, j, te);
        return;
      } else
        ue.next = j, ue.update();
    else
      j.el = L.el, ue.vnode = j;
  }, Me = (L, j, te, ue, he, pe, _e) => {
    const Pe = () => {
      if (L.isMounted) {
        let { next: Ie, bu: De, u: p, parent: Ne, vnode: Ue } = L;
        {
          const Se = Dm(L);
          if (Se) {
            Ie && (Ie.el = Ue.el, de(L, Ie, _e)), Se.asyncDep.then(() => {
              In(() => {
                L.isUnmounted || ye();
              }, he);
            });
            return;
          }
        }
        let ut = Ie, yt;
        Pi(L, !1), Ie ? (Ie.el = Ue.el, de(L, Ie, _e)) : Ie = Ue, De && Ts(De), (yt = Ie.props && Ie.props.onVnodeBeforeUpdate) && yr(yt, Ne, Ie, Ue), Pi(L, !0);
        const Nt = hh(L), st = L.subTree;
        L.subTree = Nt, _(
          st,
          Nt,
          // parent may have changed if it's in a teleport
          x(st.el),
          // anchor may have changed if it's in a fragment
          Tn(st),
          L,
          he,
          pe
        ), Ie.el = Nt.el, ut === null && kv(L, Nt.el), p && In(p, he), (yt = Ie.props && Ie.props.onVnodeUpdated) && In(
          () => yr(yt, Ne, Ie, Ue),
          he
        );
      } else {
        let Ie;
        const { el: De, props: p } = j, { bm: Ne, m: Ue, parent: ut, root: yt, type: Nt } = L, st = wa(j);
        Pi(L, !1), Ne && Ts(Ne), !st && (Ie = p && p.onVnodeBeforeMount) && yr(Ie, ut, j), Pi(L, !0);
        {
          yt.ce && yt.ce._hasShadowRoot() && yt.ce._injectChildStyle(
            Nt,
            L.parent ? L.parent.type : void 0
          );
          const Se = L.subTree = hh(L);
          _(
            null,
            Se,
            te,
            ue,
            L,
            he,
            pe
          ), j.el = Se.el;
        }
        if (Ue && In(Ue, he), !st && (Ie = p && p.onVnodeMounted)) {
          const Se = j;
          In(
            () => yr(Ie, ut, Se),
            he
          );
        }
        (j.shapeFlag & 256 || ut && wa(ut.vnode) && ut.vnode.shapeFlag & 256) && L.a && In(L.a, he), L.isMounted = !0, j = te = ue = null;
      }
    };
    L.scope.on();
    const we = L.effect = new Up(Pe);
    L.scope.off();
    const ye = L.update = we.run.bind(we), Re = L.job = we.runIfDirty.bind(we);
    Re.i = L, Re.id = L.uid, we.scheduler = () => Qu(Re), Pi(L, !0), ye();
  }, de = (L, j, te) => {
    j.component = L;
    const ue = L.vnode.props;
    L.vnode = j, L.next = null, Nv(L, j.props, ue, te), Iv(L, j.children, te), Jr(), oh(L), Zr();
  }, E = (L, j, te, ue, he, pe, _e, Pe, we = !1) => {
    const ye = L && L.children, Re = L ? L.shapeFlag : 0, Ie = j.children, { patchFlag: De, shapeFlag: p } = j;
    if (De > 0) {
      if (De & 128) {
        G(
          ye,
          Ie,
          te,
          ue,
          he,
          pe,
          _e,
          Pe,
          we
        );
        return;
      } else if (De & 256) {
        Ge(
          ye,
          Ie,
          te,
          ue,
          he,
          pe,
          _e,
          Pe,
          we
        );
        return;
      }
    }
    p & 8 ? (Re & 16 && It(ye, he, pe), Ie !== ye && y(te, Ie)) : Re & 16 ? p & 16 ? G(
      ye,
      Ie,
      te,
      ue,
      he,
      pe,
      _e,
      Pe,
      we
    ) : It(ye, he, pe, !0) : (Re & 8 && y(te, ""), p & 16 && R(
      Ie,
      te,
      ue,
      he,
      pe,
      _e,
      Pe,
      we
    ));
  }, Ge = (L, j, te, ue, he, pe, _e, Pe, we) => {
    L = L || Mo, j = j || Mo;
    const ye = L.length, Re = j.length, Ie = Math.min(ye, Re);
    let De;
    for (De = 0; De < Ie; De++) {
      const p = j[De] = we ? Wr(j[De]) : Sr(j[De]);
      _(
        L[De],
        p,
        te,
        null,
        he,
        pe,
        _e,
        Pe,
        we
      );
    }
    ye > Re ? It(
      L,
      he,
      pe,
      !0,
      !1,
      Ie
    ) : R(
      j,
      te,
      ue,
      he,
      pe,
      _e,
      Pe,
      we,
      Ie
    );
  }, G = (L, j, te, ue, he, pe, _e, Pe, we) => {
    let ye = 0;
    const Re = j.length;
    let Ie = L.length - 1, De = Re - 1;
    for (; ye <= Ie && ye <= De; ) {
      const p = L[ye], Ne = j[ye] = we ? Wr(j[ye]) : Sr(j[ye]);
      if (ia(p, Ne))
        _(
          p,
          Ne,
          te,
          null,
          he,
          pe,
          _e,
          Pe,
          we
        );
      else
        break;
      ye++;
    }
    for (; ye <= Ie && ye <= De; ) {
      const p = L[Ie], Ne = j[De] = we ? Wr(j[De]) : Sr(j[De]);
      if (ia(p, Ne))
        _(
          p,
          Ne,
          te,
          null,
          he,
          pe,
          _e,
          Pe,
          we
        );
      else
        break;
      Ie--, De--;
    }
    if (ye > Ie) {
      if (ye <= De) {
        const p = De + 1, Ne = p < Re ? j[p].el : ue;
        for (; ye <= De; )
          _(
            null,
            j[ye] = we ? Wr(j[ye]) : Sr(j[ye]),
            te,
            Ne,
            he,
            pe,
            _e,
            Pe,
            we
          ), ye++;
      }
    } else if (ye > De)
      for (; ye <= Ie; )
        rt(L[ye], he, pe, !0), ye++;
    else {
      const p = ye, Ne = ye, Ue = /* @__PURE__ */ new Map();
      for (ye = Ne; ye <= De; ye++) {
        const Vt = j[ye] = we ? Wr(j[ye]) : Sr(j[ye]);
        Vt.key != null && Ue.set(Vt.key, ye);
      }
      let ut, yt = 0;
      const Nt = De - Ne + 1;
      let st = !1, Se = 0;
      const gn = new Array(Nt);
      for (ye = 0; ye < Nt; ye++) gn[ye] = 0;
      for (ye = p; ye <= Ie; ye++) {
        const Vt = L[ye];
        if (yt >= Nt) {
          rt(Vt, he, pe, !0);
          continue;
        }
        let tn;
        if (Vt.key != null)
          tn = Ue.get(Vt.key);
        else
          for (ut = Ne; ut <= De; ut++)
            if (gn[ut - Ne] === 0 && ia(Vt, j[ut])) {
              tn = ut;
              break;
            }
        tn === void 0 ? rt(Vt, he, pe, !0) : (gn[tn - Ne] = ye + 1, tn >= Se ? Se = tn : st = !0, _(
          Vt,
          j[tn],
          te,
          null,
          he,
          pe,
          _e,
          Pe,
          we
        ), yt++);
      }
      const Fr = st ? Fv(gn) : Mo;
      for (ut = Fr.length - 1, ye = Nt - 1; ye >= 0; ye--) {
        const Vt = Ne + ye, tn = j[Vt], Dr = j[Vt + 1], H = Vt + 1 < Re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dr.el || Lm(Dr)
        ) : ue;
        gn[ye] === 0 ? _(
          null,
          tn,
          te,
          H,
          he,
          pe,
          _e,
          Pe,
          we
        ) : st && (ut < 0 || ye !== Fr[ut] ? Le(tn, te, H, 2) : ut--);
      }
    }
  }, Le = (L, j, te, ue, he = null) => {
    const { el: pe, type: _e, transition: Pe, children: we, shapeFlag: ye } = L;
    if (ye & 6) {
      Le(L.component.subTree, j, te, ue);
      return;
    }
    if (ye & 128) {
      L.suspense.move(j, te, ue);
      return;
    }
    if (ye & 64) {
      _e.move(L, j, te, kn);
      return;
    }
    if (_e === Be) {
      r(pe, j, te);
      for (let Ie = 0; Ie < we.length; Ie++)
        Le(we[Ie], j, te, ue);
      r(L.anchor, j, te);
      return;
    }
    if (_e === Cc) {
      N(L, j, te);
      return;
    }
    if (ue !== 2 && ye & 1 && Pe)
      if (ue === 0)
        Pe.beforeEnter(pe), r(pe, j, te), In(() => Pe.enter(pe), he);
      else {
        const { leave: Ie, delayLeave: De, afterLeave: p } = Pe, Ne = () => {
          L.ctx.isUnmounted ? o(pe) : r(pe, j, te);
        }, Ue = () => {
          pe._isLeaving && pe[q1](
            !0
            /* cancelled */
          ), Ie(pe, () => {
            Ne(), p && p();
          });
        };
        De ? De(pe, Ne, Ue) : Ue();
      }
    else
      r(pe, j, te);
  }, rt = (L, j, te, ue = !1, he = !1) => {
    const {
      type: pe,
      props: _e,
      ref: Pe,
      children: we,
      dynamicChildren: ye,
      shapeFlag: Re,
      patchFlag: Ie,
      dirs: De,
      cacheIndex: p,
      memo: Ne
    } = L;
    if (Ie === -2 && (he = !1), Pe != null && (Jr(), xa(Pe, null, te, L, !0), Zr()), p != null && (j.renderCache[p] = void 0), Re & 256) {
      j.ctx.deactivate(L);
      return;
    }
    const Ue = Re & 1 && De, ut = !wa(L);
    let yt;
    if (ut && (yt = _e && _e.onVnodeBeforeUnmount) && yr(yt, j, L), Re & 6)
      We(L.component, te, ue);
    else {
      if (Re & 128) {
        L.suspense.unmount(te, ue);
        return;
      }
      Ue && Ni(L, null, j, "beforeUnmount"), Re & 64 ? L.type.remove(
        L,
        j,
        te,
        kn,
        ue
      ) : ye && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ye.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (pe !== Be || Ie > 0 && Ie & 64) ? It(
        ye,
        j,
        te,
        !1,
        !0
      ) : (pe === Be && Ie & 384 || !he && Re & 16) && It(we, j, te), ue && gt(L);
    }
    const Nt = Ne != null && p == null;
    (ut && (yt = _e && _e.onVnodeUnmounted) || Ue || Nt) && In(() => {
      yt && yr(yt, j, L), Ue && Ni(L, null, j, "unmounted"), Nt && (L.el = null);
    }, te);
  }, gt = (L) => {
    const { type: j, el: te, anchor: ue, transition: he } = L;
    if (j === Be) {
      mn(te, ue);
      return;
    }
    if (j === Cc) {
      O(L);
      return;
    }
    const pe = () => {
      o(te), he && !he.persisted && he.afterLeave && he.afterLeave();
    };
    if (L.shapeFlag & 1 && he && !he.persisted) {
      const { leave: _e, delayLeave: Pe } = he, we = () => _e(te, pe);
      Pe ? Pe(L.el, pe, we) : we();
    } else
      pe();
  }, mn = (L, j) => {
    let te;
    for (; L !== j; )
      te = S(L), o(L), L = te;
    o(j);
  }, We = (L, j, te) => {
    const { bum: ue, scope: he, job: pe, subTree: _e, um: Pe, m: we, a: ye } = L;
    gh(we), gh(ye), ue && Ts(ue), he.stop(), pe && (pe.flags |= 8, rt(_e, L, j, te)), Pe && In(Pe, j), In(() => {
      L.isUnmounted = !0;
    }, j);
  }, It = (L, j, te, ue = !1, he = !1, pe = 0) => {
    for (let _e = pe; _e < L.length; _e++)
      rt(L[_e], j, te, ue, he);
  }, Tn = (L) => {
    if (L.shapeFlag & 6)
      return Tn(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const j = S(L.anchor || L.el), te = j && j[Y1];
    return te ? S(te) : j;
  };
  let fr = !1;
  const qn = (L, j, te) => {
    let ue;
    L == null ? j._vnode && (rt(j._vnode, null, null, !0), ue = j._vnode.component) : _(
      j._vnode || null,
      L,
      j,
      null,
      null,
      null,
      te
    ), j._vnode = L, fr || (fr = !0, oh(ue), um(), fr = !1);
  }, kn = {
    p: _,
    um: rt,
    m: Le,
    r: gt,
    mt: Q,
    mc: R,
    pc: E,
    pbc: I,
    n: Tn,
    o: e
  };
  return {
    render: qn,
    hydrate: void 0,
    createApp: yv(qn)
  };
}
function Ac({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Pi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fm(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (qe(r) && qe(o))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = o[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[s] = Wr(o[s]), f.el = u.el), !n && f.patchFlag !== -2 && Fm(u, f)), f.type === Al && (f.patchFlag === -1 && (f = o[s] = Wr(f)), f.el = u.el), f.type === yi && !f.el && (f.el = u.el);
    }
}
function Fv(e) {
  const t = e.slice(), n = [0];
  let r, o, s, u, f;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const v = e[r];
    if (v !== 0) {
      if (o = n[n.length - 1], e[o] < v) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        f = s + u >> 1, e[n[f]] < v ? s = f + 1 : u = f;
      v < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = t[u];
  return n;
}
function Dm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dm(t);
}
function gh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Lm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Lm(t.subTree) : null;
}
const Rm = (e) => e.__isSuspense;
function Dv(e, t) {
  t && t.pendingBranch ? qe(e) ? t.effects.push(...e) : t.effects.push(e) : G1(e);
}
const Be = /* @__PURE__ */ Symbol.for("v-fgt"), Al = /* @__PURE__ */ Symbol.for("v-txt"), yi = /* @__PURE__ */ Symbol.for("v-cmt"), Cc = /* @__PURE__ */ Symbol.for("v-stc"), ka = [];
let jn = null;
function oe(e = !1) {
  ka.push(jn = e ? null : []);
}
function Lv() {
  ka.pop(), jn = ka[ka.length - 1] || null;
}
let Aa = 1;
function yh(e, t = !1) {
  Aa += e, e < 0 && jn && t && (jn.hasOnce = !0);
}
function $m(e) {
  return e.dynamicChildren = Aa > 0 ? jn || Mo : null, Lv(), Aa > 0 && jn && jn.push(e), e;
}
function fe(e, t, n, r, o, s) {
  return $m(
    B(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function Tr(e, t, n, r, o) {
  return $m(
    Te(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Vm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zm = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || /* @__PURE__ */ hn(e) || Je(e) ? { i: zn, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, s = e === Be ? 0 : 1, u = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zm(t),
    ref: t && Ds(t),
    scopeId: dm,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: zn
  };
  return f ? (rf(d, n), s & 128 && e.normalize(d)) : n && (d.shapeFlag |= $t(n) ? 8 : 16), Aa > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  jn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && jn.push(d), d;
}
const Te = Rv;
function Rv(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === _m) && (e = yi), Vm(e)) {
    const f = Lo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rf(f, n), Aa > 0 && !s && jn && (f.shapeFlag & 6 ? jn[jn.indexOf(e)] = f : jn.push(f)), f.patchFlag = -2, f;
  }
  if (Yv(e) && (e = e.__vccOpts), t) {
    t = $v(t);
    let { class: f, style: d } = t;
    f && !$t(f) && (t.class = it(f)), mt(d) && (/* @__PURE__ */ Ju(d) && !qe(d) && (d = pn({}, d)), t.style = St(d));
  }
  const u = $t(e) ? 1 : Rm(e) ? 128 : X1(e) ? 64 : mt(e) ? 4 : Je(e) ? 2 : 0;
  return B(
    e,
    t,
    n,
    r,
    o,
    u,
    s,
    !0
  );
}
function $v(e) {
  return e ? /* @__PURE__ */ Ju(e) || Am(e) ? pn({}, e) : e : null;
}
function Lo(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: u, children: f, transition: d } = e, v = t ? mi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && zm(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? qe(s) ? s.concat(Ds(t)) : [s, Ds(t)] : Ds(t)
    ) : s,
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
    patchFlag: t && e.type !== Be ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && Lo(e.ssContent),
    ssFallback: e.ssFallback && Lo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && ef(
    y,
    d.clone(y)
  ), y;
}
function da(e = " ", t = 0) {
  return Te(Al, null, e, t);
}
function at(e = "", t = !1) {
  return t ? (oe(), Tr(yi, null, e)) : Te(yi, null, e);
}
function Sr(e) {
  return e == null || typeof e == "boolean" ? Te(yi) : qe(e) ? Te(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vm(e) ? Wr(e) : Te(Al, null, String(e));
}
function Wr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Lo(e);
}
function rf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), rf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Am(t) ? t._ctx = zn : o === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Je(t) ? (t = { default: t, _ctx: zn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [da(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = it([t.class, r.class]));
      else if (o === "style")
        t.style = St([t.style, r.style]);
      else if (bl(o)) {
        const s = t[o], u = r[o];
        u && s !== u && !(qe(s) && s.includes(u)) ? t[o] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !vl(o) && (t[o] = u);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function yr(e, t, n, r = null) {
  Ir(e, t, 7, [
    n,
    r
  ]);
}
const Vv = Sm();
let zv = 0;
function jv(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Vv, s = {
    uid: zv++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new d1(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Im(r, o),
    emitsOptions: km(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = vv.bind(null, s), e.ce && e.ce(s), s;
}
let dn = null;
const Hv = () => dn || zn;
let el, fu;
{
  const e = wl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((u) => u(s)) : o[0](s);
    };
  };
  el = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => dn = n
  ), fu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ca = n
  );
}
const ja = (e) => {
  const t = dn;
  return el(e), e.scope.on(), () => {
    e.scope.off(), el(t);
  };
}, bh = () => {
  dn && dn.scope.off(), el(null);
};
function jm(e) {
  return e.vnode.shapeFlag & 4;
}
let Ca = !1;
function Gv(e, t = !1, n = !1) {
  t && fu(t);
  const { props: r, children: o } = e.vnode, s = jm(e);
  Mv(e, r, s, t), Cv(e, o, n || t);
  const u = s ? Kv(e, t) : void 0;
  return t && fu(!1), u;
}
function Kv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uv);
  const { setup: r } = n;
  if (r) {
    Jr();
    const o = e.setupContext = r.length > 1 ? Wv(e) : null, s = ja(e), u = Va(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), f = zp(u);
    if (Zr(), s(), (f || e.sp) && !wa(e) && gm(e), f) {
      if (u.then(bh, bh), t)
        return u.then((d) => {
          vh(e, d);
        }).catch((d) => {
          kl(d, e, 0);
        });
      e.asyncDep = u;
    } else
      vh(e, u);
  } else
    Hm(e);
}
function vh(e, t, n) {
  Je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = sm(t)), Hm(e);
}
function Hm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ar);
  {
    const o = ja(e);
    Jr();
    try {
      fv(e);
    } finally {
      Zr(), o();
    }
  }
}
const Bv = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function Wv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sm(T1(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Sa)
        return Sa[n](e);
    },
    has(t, n) {
      return n in t || n in Sa;
    }
  })) : e.proxy;
}
function Uv(e, t = !0) {
  return Je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yv(e) {
  return Je(e) && "__vccOpts" in e;
}
const ct = (e, t) => /* @__PURE__ */ $1(e, t, Ca), Xv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let du;
const _h = typeof window < "u" && window.trustedTypes;
if (_h)
  try {
    du = /* @__PURE__ */ _h.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Gm = du ? (e) => du.createHTML(e) : (e) => e, qv = "http://www.w3.org/2000/svg", Jv = "http://www.w3.org/1998/Math/MathML", Gr = typeof document < "u" ? document : null, xh = Gr && /* @__PURE__ */ Gr.createElement("template"), Zv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Gr.createElementNS(qv, e) : t === "mathml" ? Gr.createElementNS(Jv, e) : n ? Gr.createElement(e, { is: n }) : Gr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Gr.createTextNode(e),
  createComment: (e) => Gr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Gr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const u = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      xh.innerHTML = Gm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = xh.content;
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
}, Qv = /* @__PURE__ */ Symbol("_vtc");
function e_(e, t, n) {
  const r = e[Qv];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const tl = /* @__PURE__ */ Symbol("_vod"), Km = /* @__PURE__ */ Symbol("_vsh"), Wi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[tl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : oa(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), oa(e, !0), r.enter(e)) : r.leave(e, () => {
      oa(e, !1);
    }) : oa(e, t));
  },
  beforeUnmount(e, { value: t }) {
    oa(e, t);
  }
};
function oa(e, t) {
  e.style.display = t ? e[tl] : "none", e[Km] = !t;
}
const t_ = /* @__PURE__ */ Symbol(""), n_ = /(?:^|;)\s*display\s*:/;
function r_(e, t, n) {
  const r = e.style, o = $t(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if ($t(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Ls(r, f, "");
        }
      else
        for (const u in t)
          n[u] == null && Ls(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), Ls(r, u, n[u]);
  } else if (o) {
    if (t !== n) {
      const u = r[t_];
      u && (n += ";" + u), r.cssText = n, s = n_.test(n);
    }
  } else t && e.removeAttribute("style");
  tl in e && (e[tl] = s ? r.display : "", e[Km] && (r.display = "none"));
}
const wh = /\s*!important$/;
function Ls(e, t, n) {
  if (qe(n))
    n.forEach((r) => Ls(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = i_(e, t);
    wh.test(n) ? e.setProperty(
      Yi(r),
      n.replace(wh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Sh = ["Webkit", "Moz", "ms"], Ic = {};
function i_(e, t) {
  const n = Ic[t];
  if (n)
    return n;
  let r = wn(t);
  if (r !== "filter" && r in e)
    return Ic[t] = r;
  r = xl(r);
  for (let o = 0; o < Sh.length; o++) {
    const s = Sh[o] + r;
    if (s in e)
      return Ic[t] = s;
  }
  return t;
}
const kh = "http://www.w3.org/1999/xlink";
function Mh(e, t, n, r, o, s = u1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(kh, t.slice(6, t.length)) : e.setAttributeNS(kh, t, n) : n == null || s && !Kp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Cr(n) ? String(n) : n
  );
}
function Nh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Gm(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
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
    f === "boolean" ? n = Kp(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(o || t);
}
function _o(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function o_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ph = /* @__PURE__ */ Symbol("_vei");
function a_(e, t, n, r, o = null) {
  const s = e[Ph] || (e[Ph] = {}), u = s[t];
  if (r && u)
    u.value = r;
  else {
    const [f, d] = s_(t);
    if (r) {
      const v = s[t] = u_(
        r,
        o
      );
      _o(e, f, v, d);
    } else u && (o_(e, f, u, d), s[t] = void 0);
  }
}
const Ah = /(?:Once|Passive|Capture)$/;
function s_(e) {
  let t;
  if (Ah.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ah); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Yi(e.slice(2)), t];
}
let Ec = 0;
const l_ = /* @__PURE__ */ Promise.resolve(), c_ = () => Ec || (l_.then(() => Ec = 0), Ec = Date.now());
function u_(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ir(
      f_(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = c_(), n;
}
function f_(e, t) {
  if (qe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Ch = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, d_ = (e, t, n, r, o, s) => {
  const u = o === "svg";
  t === "class" ? e_(e, r, u) : t === "style" ? r_(e, n, r) : bl(t) ? vl(t) || a_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : h_(e, t, r, u)) ? (Nh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mh(e, t, r, u, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (p_(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !$t(r))) ? Nh(e, wn(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Mh(e, t, r, u));
};
function h_(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ch(t) && Je(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ch(t) && $t(n) ? !1 : t in e;
}
function p_(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = wn(t);
  return Array.isArray(n) ? n.some((o) => wn(o) === r) : Object.keys(n).some((o) => wn(o) === r);
}
const Ih = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return qe(t) ? (n) => Ts(t, n) : t;
};
function m_(e) {
  e.target.composing = !0;
}
function Eh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Oc = /* @__PURE__ */ Symbol("_assign");
function Oh(e, t, n) {
  return t && (e = e.trim()), n && (e = Gu(e)), e;
}
const Th = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Oc] = Ih(o);
    const s = r || o.props && o.props.type === "number";
    _o(e, t ? "change" : "input", (u) => {
      u.target.composing || e[Oc](Oh(e.value, n, s));
    }), (n || s) && _o(e, "change", () => {
      e.value = Oh(e.value, n, s);
    }), t || (_o(e, "compositionstart", m_), _o(e, "compositionend", Eh), _o(e, "change", Eh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, u) {
    if (e[Oc] = Ih(u), e.composing) return;
    const f = (s || e.type === "number") && !/^0\d/.test(e.value) ? Gu(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, g_ = ["ctrl", "shift", "alt", "meta"], y_ = {
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
  exact: (e, t) => g_.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ht = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let u = 0; u < t.length; u++) {
      const f = y_[t[u]];
      if (f && f(o, t)) return;
    }
    return e(o, ...s);
  }));
}, b_ = /* @__PURE__ */ pn({ patchProp: d_ }, Zv);
let Fh;
function v_() {
  return Fh || (Fh = Ev(b_));
}
const of = ((...e) => {
  const t = v_().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = x_(r);
    if (!o) return;
    const s = t._component;
    !Je(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, __(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, t;
});
function __(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function x_(e) {
  return $t(e) ? document.querySelector(e) : e;
}
function xo(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function w_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Dh(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const s = n.getImageData(0, 0, r, o).data;
  let u = r, f = o, d = -1, v = -1;
  for (let x = 0; x < o; x += 1)
    for (let S = 0; S < r; S += 1)
      s[(x * r + S) * 4 + 3] <= t || (S < u && (u = S), x < f && (f = x), S > d && (d = S), x > v && (v = x));
  return d < u || v < f ? null : {
    minX: u,
    minY: f,
    maxX: d,
    maxY: v,
    width: d - u + 1,
    height: v - f + 1,
    aspect: Number(((d - u + 1) / Math.max(1, v - f + 1)).toFixed(4))
  };
}
function af(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Kr(e, t, n) {
  if (!e) return xo(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Pt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Tc = null, Fc = null, Lh = null, Rh = null, Tt = null, aa = null, vn = null, di = null;
function S_() {
  if (Fc) return Fc;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Fc = n, n;
}
function Dc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Tc = Kr(Tc, n, r);
  const o = Tc;
  Pt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Rh !== o.ctx && (Lh = o.ctx.createPattern(S_(), "repeat"), Rh = o.ctx), o.ctx.fillStyle = Lh, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function k_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function M_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function N_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function P_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const At = /* @__PURE__ */ new Map(), sf = 128;
function A_(e, t, n, r, o, s) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${u}:${f.toFixed(2)}:${n}:${r}:${o}:${s.toFixed(3)}`;
  if (At.has(d)) {
    const X = At.get(d);
    return At.delete(d), At.set(d, X), X;
  }
  At.size >= sf && At.delete(At.keys().next().value);
  const v = u * 2 + 2, y = u + 1, x = af(v, v), S = x.getContext("2d"), C = f * u, k = u + 1, _ = `rgba(${n},${r},${o},${s})`, D = `rgba(${n},${r},${o},0)`, z = S.createRadialGradient(y, y, C, y, y, k);
  return z.addColorStop(0, _), z.addColorStop(1, D), S.fillStyle = z, S.fillRect(0, 0, v, v), At.set(d, x), x;
}
function C_(e, t, n, r, o, s, u) {
  const { r: f, g: d, b: v, a: y } = r, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), C = Math.max(0, o), k = Math.max(0, Math.min(0.99, s)), _ = Math.max(0, Math.min(1, u ?? 0)), D = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${d}:${v}:${y.toFixed(3)}:${C.toFixed(2)}:${k.toFixed(2)}:${_.toFixed(2)}`;
  if (At.has(D)) {
    const R = At.get(D);
    return At.delete(D), At.set(D, R), R;
  }
  At.size >= sf && At.delete(At.keys().next().value);
  const z = af(x, S), X = z.getContext("2d"), N = X.createImageData(x, S), O = N.data, $ = Math.max(0, e - t), V = Math.max(0, Math.min(1, n)), W = 1 + C;
  for (let R = 0; R < S; R++)
    for (let Y = 0; Y < x; Y++) {
      const I = Y + 0.5 - e, T = R + 0.5 - t, le = Math.max(Math.abs(I) - $, 0), Q = Math.hypot(le, T) / t;
      if (Q >= 1) continue;
      const se = Q <= V ? 1 : Math.max(0, (1 - Q) / Math.max(1e-4, 1 - V)), Me = 1 - Q, de = 1 + C * (1 - Me) * (1 - Me), E = 1 - k * Me * Me, Ge = de * E / W;
      let G = 1;
      if (_ > 0) {
        const gt = Math.floor((T + t) / 1.5), mn = Math.floor((I + e) / 8), We = ji(Co(gt * 41 + 500, mn * 19 + 300));
        G = 1 - _ * 0.42 * We;
      }
      const Le = Math.round(255 * Math.min(1, y * se * Ge * G));
      if (Le <= 0) continue;
      const rt = (R * x + Y) * 4;
      O[rt] = f, O[rt + 1] = d, O[rt + 2] = v, O[rt + 3] = Le;
    }
  return X.putImageData(N, 0, 0), At.set(D, z), z;
}
function Co(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function ji(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function I_(e, t, n, r, o, s, u) {
  const f = e + 0.5 - n, d = t + 0.5 - r, v = Math.max(0, n - r), y = Math.max(Math.abs(f) - v, 0), x = Math.hypot(y, d) / r;
  if (x >= 1) return 0;
  const S = ji(Co(e * 17 + 3, t * 13 + 7)), C = x + s * 0.22 * (S - 0.5);
  if (C >= 1) return 0;
  const k = C <= o ? 1 : Math.max(0, (1 - C) / Math.max(1e-4, 1 - o)), _ = E_(e, t, f, d, n, r), D = s * 0.55;
  if (_ < D) return 0;
  const X = 0.45 + 0.55 * ((_ - D) / Math.max(1e-4, 1 - D));
  return Math.round(255 * Math.min(1, u * k * X));
}
function E_(e, t, n, r, o, s) {
  const u = Math.floor((n + o) / 3), f = Math.floor((r + s) / 2), d = ji(Co(u * 13 + 700, f * 17 + 400)), v = Math.floor((n + o) / 1.5), y = Math.floor((r + s) / 1.5), x = ji(Co(v * 23 + 800, y * 29 + 500)), S = ji(Co(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + x * 0.3 + S * 0.15;
}
function O_(e, t, n, r, o) {
  const { r: s, g: u, b: f, a: d } = r, v = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, o)), S = `crayon:${v}:${y}:${n.toFixed(2)}:${s}:${u}:${f}:${d.toFixed(3)}:${x.toFixed(2)}`;
  if (At.has(S)) {
    const X = At.get(S);
    return At.delete(S), At.set(S, X), X;
  }
  At.size >= sf && At.delete(At.keys().next().value);
  const C = af(v, y), k = C.getContext("2d"), _ = k.createImageData(v, y), D = _.data, z = Math.max(0, Math.min(1, n));
  for (let X = 0; X < y; X++)
    for (let N = 0; N < v; N++) {
      const O = I_(N, X, e, t, z, x, d);
      if (O <= 0) continue;
      const $ = (X * v + N) * 4;
      D[$] = s, D[$ + 1] = u, D[$ + 2] = f, D[$ + 3] = O;
    }
  return k.putImageData(_, 0, 0), At.set(S, C), C;
}
function Bm(e, t, n) {
  var _, D;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = N_(t, n), s = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = T_(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), v = P_(t, o), y = String(((D = t == null ? void 0 : t.targetSpace) == null ? void 0 : D.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", S = t == null ? void 0 : t.scatter, C = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const z = o * f, X = o, N = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = C_(z, X, s, u, N, O, $);
  } else if (r === "crayon") {
    const z = o * f, X = o, N = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = O_(z, X, s, u, N);
  } else
    k = A_(o, s, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: v, desc: n, aspect: f, angle: d, stampKind: r, scatter: C, latitudeCorrection: x };
}
function T_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), s = Math.max(0, Math.min(1, Number(r.a ?? 1))) * o;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: s
  };
}
function F_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function $h(e, t, n, r, o) {
  const s = e.angle, u = e.desc.width;
  function f(v, y) {
    s === 0 ? e.ctx.drawImage(e.stampTex, v - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(v, y), e.ctx.rotate(s), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = s === 0 ? o : o * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  t - d < 0 && f(t + u, n), t + d > u && f(t - u, n);
}
function lf(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: v, count: y } = e.scatter, x = v * e.radiusPx * o, S = Co(t, n);
    for (let C = 0; C < y; C++) {
      const k = ji(S + C * 2) * Math.PI * 2, _ = Math.sqrt(ji(S + C * 2 + 1)) * x, D = t + Math.cos(k) * _, z = n + Math.sin(k) * _, X = Math.max(0.5, e.radiusPx * o * 0.48), N = (0.5 - z / Math.max(1, e.desc.height)) * Math.PI, O = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(N)) : 1, $ = X * e.aspect * O;
      $h(e, D, z, X, $);
    }
    return;
  }
  const s = Math.max(0.5, e.radiusPx * o), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, d = s * e.aspect * f;
  $h(e, t, n, s, d);
}
function Vh(e, t, n) {
  const r = M_(t);
  if (!e || r.length === 0) return;
  const o = n.width, s = n.height, u = Bm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let C = Number(r[S].u || 0) * o;
    const k = Number(r[S].v || 0) * s;
    S > 0 && Math.abs(C - f[S - 1].x) > o * 0.5 && (C += C < f[S - 1].x ? o : -o), f.push({ x: C, y: k });
  }
  if (lf(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], v = f[0], y = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const C = f[S], k = { x: (v.x + C.x) * 0.5, y: (v.y + C.y) * 0.5 };
    S === 1 ? x = Ia(u, y.x, y.y, k.x, k.y, x) : x = nl(u, d, y, k, C, x), d = v, v = C, y = k;
  }
  f.length === 2 ? Ia(u, y.x, y.y, v.x, v.y, x) : nl(u, d, y, v, v, x), e.restore();
}
function Rs(e, t, n) {
  var x;
  const r = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, s = n.height, u = F_(t), f = [];
  let d = 1 / 0, v = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const C = k_(r[S]);
    let k = Number(C.x || 0) * o;
    S > 0 && Math.abs(k - f[S - 1].x) > o * 0.5 && (k += k < f[S - 1].x ? o : -o), f.push({ x: k, y: Number(C.y || 0) * s }), k < d && (d = k), k > v && (v = k);
  }
  function y(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let C = 1; C < f.length; C++) e.lineTo(f[C].x + S, f[C].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, y(0), d < 0 && y(o), v > o && y(-o), e.restore();
}
function gs(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Rs(e, t, n);
    return;
  }
  const s = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  s >= 0.999 ? Vh(e, t, n) : (aa = Kr(aa, n.width, n.height), Pt(aa), Vh(aa.ctx, t, n), e.save(), e.globalAlpha = s, e.drawImage(aa.canvas, 0, 0), e.restore());
}
function Ai(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ia(e, t, n, r, o, s) {
  const u = r - t, f = o - n, d = Math.hypot(u, f);
  if (d < 1e-9) return s;
  let v = e.spacingPx - s;
  for (; v <= d; ) {
    const y = v / d;
    lf(e, t + u * y, n + f * y, 1), v += e.spacingPx;
  }
  return d - v + e.spacingPx;
}
function nl(e, t, n, r, o, s) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, x = f, S = x + d, C = S + v, k = S - x, _ = 16;
  let D = s, z = n.x, X = n.y;
  for (let N = 1; N <= _; N++) {
    const O = x + k * N / _, $ = ((x - O) * t.x + (O - y) * n.x) / (x - y), V = ((x - O) * t.y + (O - y) * n.y) / (x - y), W = ((S - O) * n.x + (O - x) * r.x) / (S - x), R = ((S - O) * n.y + (O - x) * r.y) / (S - x), Y = ((C - O) * r.x + (O - S) * o.x) / (C - S), I = ((C - O) * r.y + (O - S) * o.y) / (C - S), T = ((S - O) * $ + (O - y) * W) / (S - y), le = ((S - O) * V + (O - y) * R) / (S - y), U = ((C - O) * W + (O - x) * Y) / (C - x), Q = ((C - O) * R + (O - x) * I) / (C - x), se = ((S - O) * T + (O - x) * U) / (S - x), Me = ((S - O) * le + (O - x) * Q) / (S - x);
    D = Ia(e, z, X, se, Me, D), z = se, X = Me;
  }
  return D;
}
function D_(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const s = e.descriptor, u = s.width, f = n * s.height, d = e.activeStroke;
  let v = t * u;
  if (d && Math.abs(v - d.prev.x) > u * 0.5 && (v += v < d.prev.x ? u : -u), !d) {
    const C = Bm(o, r, s), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), D = String((r == null ? void 0 : r.toolKind) || "") === "eraser", z = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", lf(C, v, f, 1), e.activeStroke = {
      pprev: { x: v, y: f },
      prev: { x: v, y: f },
      lastMidX: v,
      lastMidY: f,
      stampTex: C.stampTex,
      radiusPx: C.radiusPx,
      spacingPx: C.spacingPx,
      aspect: C.aspect,
      angle: C.angle,
      stampKind: C.stampKind,
      scatter: C.scatter,
      latitudeCorrection: C.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: _,
      distSinceStamp: 0,
      isEraser: D,
      layerKind: z,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + v) * 0.5, x = (d.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const S = {
    ctx: o,
    stampTex: d.stampTex,
    radiusPx: d.radiusPx,
    spacingPx: d.spacingPx,
    desc: s,
    aspect: d.aspect,
    angle: d.angle,
    stampKind: d.stampKind,
    scatter: d.scatter,
    latitudeCorrection: d.latitudeCorrection
  };
  d.pointCount === 1 ? d.distSinceStamp = Ia(S, d.lastMidX, d.lastMidY, y, x, d.distSinceStamp) : d.distSinceStamp = nl(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: x },
    { x: v, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: v, y: f }, d.lastMidX = y, d.lastMidY = x, d.pointCount++, e.displayDirty = !0;
}
function hu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), s = xo(t, n), u = {
    descriptor: r,
    committedMask: xo(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: xo(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = xo(t, n);
  let v = null, y = "", x = null;
  function S(I) {
    return {
      actionGroupId: I,
      descriptor: r,
      committedPaint: xo(t, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function C(I) {
    let T = o.get(I);
    return T || (T = S(I), o.set(I, T)), T;
  }
  function k(I) {
    return y === "mask" ? u : v ? C(v) : f;
  }
  function _(I) {
    var Me;
    const T = !x || x.length !== I.length || I.some((de, E) => de !== x[E]), le = y === "paint" && ((Me = v ? o.get(v) : f) == null ? void 0 : Me.activeStroke) || null;
    let U = u.displayDirty || f.displayDirty || T;
    for (const de of I) {
      const E = o.get(de);
      if (E != null && E.displayDirty) {
        U = !0;
        break;
      }
    }
    if (le && (U = !0), !U) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const de of I) {
      const E = o.get(de);
      E && (E.displayDirty = !1);
    }
    x = [...I];
    const Q = d.ctx;
    Pt(d);
    const se = !!(le != null && le.isEraser);
    for (const de of I) {
      const E = o.get(de);
      if (!E) continue;
      const G = v === E.actionGroupId && y === "paint" ? E.activeStroke : null;
      if (se)
        Tt = Kr(Tt, t, n), Pt(Tt), Tt.ctx.drawImage(E.committedPaint.canvas, 0, 0), Ai(Tt.ctx, s.canvas), Q.drawImage(Tt.canvas, 0, 0);
      else if (Q.drawImage(E.committedPaint.canvas, 0, 0), G) {
        const Le = E.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, G.strokeOpacity ?? 1));
        Q.save(), Q.globalAlpha = Le, Q.drawImage(s.canvas, 0, 0), Q.restore();
      }
    }
  }
  function D(I) {
    var le, U, Q, se, Me;
    for (const de of o.values())
      Pt(de.committedPaint), Pt(de.currentStroke), de.activeStroke = null, de.displayDirty = !0;
    Pt(u.committedMask), Pt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const T = [
      ...Array.isArray((U = (le = I == null ? void 0 : I.painting) == null ? void 0 : le.paint) == null ? void 0 : U.strokes) ? I.painting.paint.strokes : [],
      ...Array.isArray((se = (Q = I == null ? void 0 : I.painting) == null ? void 0 : Q.mask) == null ? void 0 : se.strokes) ? I.painting.mask.strokes : []
    ];
    for (const de of T) {
      if (((Me = de == null ? void 0 : de.targetSpace) == null ? void 0 : Me.kind) !== "ERP_GLOBAL") continue;
      const E = String((de == null ? void 0 : de.layerKind) || "paint"), G = String((de == null ? void 0 : de.toolKind) || "pen") === "eraser";
      if (E === "mask") {
        const Le = u.descriptor;
        G ? (Tt = Kr(Tt, Le.width, Le.height), Pt(Tt), gs(Tt.ctx, de, Le), Ai(u.committedMask.ctx, Tt.canvas)) : gs(u.committedMask.ctx, de, Le);
        continue;
      }
      if (G) {
        Tt = Kr(Tt, r.width, r.height), Pt(Tt), gs(Tt.ctx, de, r);
        for (const Le of o.values())
          Ai(Le.committedPaint.ctx, Tt.canvas), Le.displayDirty = !0;
      } else {
        const Le = String((de == null ? void 0 : de.actionGroupId) || "__default__"), rt = C(Le), gt = rt.descriptor;
        gs(rt.committedPaint.ctx, de, gt), rt.displayDirty = !0;
      }
    }
    _([...o.keys()]);
  }
  function z(I, T) {
    y = String((I == null ? void 0 : I.layerKind) || "");
    const le = String((I == null ? void 0 : I.toolKind) || "") === "eraser";
    if (y === "mask")
      v = null, Pt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const U = le ? f : C(String((I == null ? void 0 : I.actionGroupId) || "__default__"));
      v = le ? "" : String((I == null ? void 0 : I.actionGroupId) || "__default__"), Pt(U.currentStroke), U.activeStroke = null, U.displayDirty = !0;
    }
  }
  function X(I, T) {
    var E;
    const le = String((I == null ? void 0 : I.layerKind) || "paint"), U = String((I == null ? void 0 : I.toolKind) || "") === "eraser", Q = le === "mask" ? u : U ? f : C(String((I == null ? void 0 : I.actionGroupId) || v || "__default__")), se = Q.activeStroke, Me = Q.descriptor;
    if (se && se.pointCount > 1) {
      const Ge = Q.currentStroke.ctx;
      Ge.globalCompositeOperation = "source-over";
      const G = {
        ctx: Ge,
        stampTex: se.stampTex,
        radiusPx: se.radiusPx,
        spacingPx: se.spacingPx,
        desc: Me,
        aspect: se.aspect,
        angle: se.angle,
        stampKind: se.stampKind,
        scatter: se.scatter,
        latitudeCorrection: se.latitudeCorrection
      };
      se.pointCount === 2 ? Ia(G, se.lastMidX, se.lastMidY, se.prev.x, se.prev.y, se.distSinceStamp) : nl(G, se.pprev, { x: se.lastMidX, y: se.lastMidY }, se.prev, se.prev, se.distSinceStamp);
    }
    Q.lassoPreviewActive && (Pt(Q.currentStroke), Rs(Q.currentStroke.ctx, I, Me), Q.lassoPreviewActive = !1);
    const de = le === "mask" ? u.committedMask : Q.committedPaint;
    if (U && le === "paint")
      for (const Ge of o.values())
        Ai(Ge.committedPaint.ctx, Q.currentStroke.canvas), Ge.displayDirty = !0;
    else if (U)
      Ai(de.ctx, Q.currentStroke.canvas);
    else {
      const Ge = Math.max(0, Math.min(1, (se == null ? void 0 : se.strokeOpacity) ?? 1));
      de.ctx.save(), de.ctx.globalAlpha = Ge, de.ctx.drawImage(Q.currentStroke.canvas, 0, 0), de.ctx.restore();
    }
    w_() && (String((I == null ? void 0 : I.toolKind) || ""), String((Me == null ? void 0 : Me.kind) || ""), Number((Me == null ? void 0 : Me.width) || 0), Number((Me == null ? void 0 : Me.height) || 0), String(((E = I == null ? void 0 : I.targetSpace) == null ? void 0 : E.viewMode) || ""), Number((I == null ? void 0 : I.aspect) ?? 1), Dh(Q.currentStroke.canvas), Dh(de.canvas), void 0), Pt(Q.currentStroke), Q.activeStroke = null, Q.displayDirty = !0, v = null, y = "", _([...o.keys()]);
  }
  function N(I) {
    if (y === "mask")
      Pt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (y === "paint" && !v)
      Pt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (v) {
      const T = o.get(v);
      T && (Pt(T.currentStroke), T.activeStroke = null, T.lassoPreviewActive = !1, T.displayDirty = !0);
    }
    v = null, y = "", _([...o.keys()]);
  }
  function O(I, T) {
    var U;
    if (y = String((I == null ? void 0 : I.layerKind) || ""), String(((U = I == null ? void 0 : I.geometry) == null ? void 0 : U.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Pt(u.currentStroke), Rs(u.currentStroke.ctx, I, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const Q = String((I == null ? void 0 : I.toolKind) || "") === "eraser", se = Q ? f : C(String((I == null ? void 0 : I.actionGroupId) || v || "__default__"));
        v = Q ? "" : String((I == null ? void 0 : I.actionGroupId) || v || "__default__"), Pt(se.currentStroke), Rs(se.currentStroke.ctx, I, se.descriptor), se.lassoPreviewActive = !0, se.displayDirty = !0;
      }
      _([...o.keys()]);
    }
  }
  function $(I) {
    return _(I ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function V(I) {
    return o.get(String(I)) ?? null;
  }
  function W() {
    return [...o.keys()];
  }
  function R(I) {
    var Me;
    const T = o.get(String(I));
    if (!T) return null;
    const le = y === "paint" && v === T.actionGroupId, U = y === "paint" && ((Me = v ? o.get(v) : f) == null ? void 0 : Me.activeStroke) || null;
    if (U != null && U.isEraser)
      return vn = Kr(vn, t, n), Pt(vn), vn.ctx.drawImage(T.committedPaint.canvas, 0, 0), Ai(vn.ctx, s.canvas), vn.canvas;
    const Q = le ? T.activeStroke : null;
    if (!Q) return T.committedPaint.canvas;
    vn = Kr(vn, t, n), Pt(vn), vn.ctx.drawImage(T.committedPaint.canvas, 0, 0);
    const se = T.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Q.strokeOpacity ?? 1));
    return vn.ctx.save(), vn.ctx.globalAlpha = se, vn.ctx.drawImage(s.canvas, 0, 0), vn.ctx.restore(), vn.canvas;
  }
  function Y() {
    return di = Kr(di, t, n), Pt(di), Dc(di.ctx, u.committedMask.canvas), y === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Tt = Kr(Tt, t, n), Pt(Tt), Tt.ctx.drawImage(u.committedMask.canvas, 0, 0), Ai(Tt.ctx, s.canvas), Pt(di), Dc(di.ctx, Tt.canvas)) : Dc(di.ctx, s.canvas)), di.canvas;
  }
  return {
    rebuildCommitted: D,
    beginStroke: z,
    appendStrokePoint: D_,
    updateActiveStroke: O,
    commitActiveStroke: X,
    cancelActiveStroke: N,
    getErpTarget: $,
    ensureTarget: k,
    getGroupTarget: V,
    getGroupDisplayCanvas: R,
    getMaskDisplayCanvas: Y,
    getAllGroupIds: W
  };
}
function J(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Rt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function L_(e, t) {
  let n = Rt(t) - Rt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const pu = 3;
function sa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function cf(e, t = 0) {
  const n = sa(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = sa(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = sa(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const s = sa(e == null ? void 0 : e.detail);
  return s != null ? Math.sign(s) : Math.sign(sa(t) || 0);
}
function Wm(e) {
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
const zh = Math.PI / 180, jh = 0.12, R_ = pu, $_ = 35, V_ = 140, ha = 100, z_ = 20, Hh = 0.8;
function j_(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), s = J(Number(e || ha), 1, 179) * zh;
  return 2 * Math.atan(Math.tan(s * 0.5) * (o / r)) / zh;
}
function uf(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ha })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(X, N = null) {
    f && f(X, N);
  }
  function y(X, N, O = null, $ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(X || 0), d.drag.lastY = Number(N || 0), d.drag.lastTs = Number($ || performance.now()), d.drag.pointerId = O, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], v("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: O }), !0;
  }
  function x(X, N, O = "pano", $ = performance.now()) {
    if (!d.drag.active) return !1;
    const V = Number($ || performance.now()), W = Number(X), R = Number(N), Y = W - d.drag.lastX, I = R - d.drag.lastY;
    d.drag.lastX = W, d.drag.lastY = R, d.drag.lastTs = V;
    const T = r() || { x: 1, y: 1 }, le = Number(T.x || 1), U = Number(T.y || 1), Q = { ...t() };
    let se = 0, Me = 0;
    if (O === "unwrap") {
      const E = o() || { w: 1, h: 1 }, Ge = Math.max(1, Number(E.w || 1)), G = Math.max(1, Number(E.h || 1)), Le = Y / Ge, rt = I / G;
      se = -Le * 360 * le, Me = rt * 180 * U;
    } else {
      const E = s() || { w: 0, h: 0 }, Ge = Math.max(1, Number(E.w || 0)), G = Math.max(1, Number(E.h || 0));
      if (Ge > 1 && G > 1) {
        const Le = J(Number(Q.fov || ha), 1, 179), rt = J(j_(Le, Ge, G), 0.1, 179);
        se = -(Y / Ge) * Le * le, Me = I / G * rt * U;
      } else
        se = -Y * jh * le, Me = I * jh * U;
    }
    Q.yaw = Rt(Number(Q.yaw || 0) + se), Q.pitch = J(Number(Q.pitch || 0) + Me, -89.9, 89.9), n(Q), d.velHistory.push({ ts: V, yaw: Q.yaw, pitch: Q.pitch });
    let de = 0;
    for (; de < d.velHistory.length - 1 && d.velHistory[de].ts < V - 100; ) de++;
    return de > 0 && d.velHistory.splice(0, de), d.inertia.active = !1, d.inertia.lastTs = V, u(), v("drag", { phase: "move", dx: Y, dy: I, dYaw: se, dPitch: Me }), !0;
  }
  function S(X = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const N = Number(X || performance.now());
    d.drag.lastTs = N;
    const O = d.velHistory.filter((V) => N - V.ts <= 80);
    if (O.length >= 2) {
      const V = O[0], W = O.at(-1), R = Math.max(1e-3, (W.ts - V.ts) / 1e3);
      let Y = W.yaw - V.yaw;
      Y > 180 && (Y -= 360), Y < -180 && (Y += 360), d.inertia.vx = Y / R, d.inertia.vy = (W.pitch - V.pitch) / R;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const $ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = $ > z_, d.inertia.lastTs = N, v("drag", { phase: "end", speed: $, inertiaActive: d.inertia.active }), !0;
  }
  function C(X = performance.now()) {
    if (!d.inertia.active) return !1;
    const N = Number(X || performance.now()), O = Math.max(1e-3, (N - (d.inertia.lastTs || N)) / 1e3);
    d.inertia.lastTs = N;
    const $ = { ...t() };
    $.yaw = Rt(Number($.yaw || 0) + d.inertia.vx * O), $.pitch = J(Number($.pitch || 0) + d.inertia.vy * O, -89.9, 89.9);
    const V = Math.exp(-5.5 * O);
    return d.inertia.vx *= V, d.inertia.vy *= V, Math.abs(d.inertia.vx) < Hh && Math.abs(d.inertia.vy) < Hh && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n($), u(), d.inertia.active;
  }
  function k() {
    const X = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], X;
  }
  function _(X) {
    const N = Math.sign(Number(X || 0));
    if (!N) return !1;
    const O = { ...t() }, $ = Number(O.fov || ha);
    return O.fov = J($ + N * R_, $_, V_), n(O), u(), v("wheel", { deltaSign: N, fovBefore: $, fovAfter: O.fov }), !0;
  }
  function D(X, N = 0) {
    return _(cf(X, N));
  }
  function z() {
    n({ yaw: 0, pitch: 0, fov: ha }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, u();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: x,
    endDrag: S,
    stepInertia: C,
    stopMotion: k,
    applyWheel: _,
    applyWheelEvent: D,
    resetView: z
  };
}
const en = Math.PI / 180, Sn = 180 / Math.PI;
function Xn(e, t, n) {
  return { x: e, y: t, z: n };
}
function rl(e, t) {
  return Xn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function il(e, t) {
  return Xn(e.x * t, e.y * t, e.z * t);
}
function Lc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ff(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xn(e.x / t, e.y / t, e.z / t);
}
function On(e, t) {
  const n = e * en, r = t * en, o = Math.cos(r);
  return Xn(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function jo(e, t, n = 0) {
  const r = Number(e || 0) * en, o = Number(t || 0) * en, s = n * en, u = Math.cos(r), f = Math.sin(r), d = Math.cos(o), v = Math.sin(o), y = Math.cos(s), x = Math.sin(s);
  return {
    right: Xn(
      u * y - f * v * x,
      d * x,
      -f * y - u * v * x
    ),
    up: Xn(
      -u * x - f * v * y,
      d * y,
      f * x - u * v * y
    ),
    fwd: Xn(f * d, v, u * d)
  };
}
function ol(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function pt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function H_() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function G_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const s = pt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || o),
      type: "strokeGroup",
      actionGroupId: o,
      z_index: Math.max(0, Math.round(s ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function K_(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function B_(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = pt(e.t, 0), r = pt(e.widthScale, null), o = pt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const s = pt(e.u, null), u = pt(e.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const s = pt(e.u, null), u = pt(e.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: s,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  return null;
}
function ys(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const s = B_(o, t);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function W_(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = ys(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const s = ys(e.points, t, 1);
  if (!s) return null;
  const u = ys(e.rawPoints, t, 1), f = ys(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: s,
    rawPoints: u || s.map((d) => ({ ...d })),
    processedPoints: f || s.map((d) => ({ ...d }))
  };
}
function U_(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = K_(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = W_(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const s = pt(e.size, null), u = pt(e.opacity, null);
  if (s == null || u == null) return null;
  const f = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!f || !d) return null;
  const v = pt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, pt(S.r, 0))),
      g: Math.max(0, Math.min(1, pt(S.g, 0))),
      b: Math.max(0, Math.min(1, pt(S.b, 0))),
      a: Math.max(0, Math.min(1, pt(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: d,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, s),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: pt(e.hardness, null),
    flow: pt(e.flow, null),
    spacing: pt(e.spacing, null),
    createdAt: Math.trunc(pt(e.createdAt, 0)),
    color: x,
    radiusModel: y,
    radiusValue: v == null ? null : Math.max(0, v),
    geometry: o
  };
}
function Gh(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = U_(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Y_(e) {
  if (!e || typeof e != "object") return null;
  const t = pt(e.u0, null), n = pt(e.v0, null), r = pt(e.u1, null), o = pt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(t), v0: s(n), u1: s(r), v1: s(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function X_(e) {
  const t = e || {};
  return {
    du: pt(t.du, 0) ?? 0,
    dv: pt(t.dv, 0) ?? 0,
    rot_deg: pt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, pt(t.scale, 1) ?? 1)
  };
}
function q_(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const s = Y_(e.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, pt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: s,
    rasterDataUrl: o,
    transform: X_(e.transform)
  } : null;
}
function J_(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = q_(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Io(e) {
  const t = H_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: G_(e.groups),
    paint: Gh(e.paint, "paint"),
    mask: Gh(e.mask, "mask"),
    raster_objects: J_(e.raster_objects)
  };
}
const Er = 1, Or = 179, mu = 85;
function Il(e) {
  const t = ((Ze(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Um(e, t) {
  let n = Ze(e, 0) - Ze(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Ym(e, t, { shiftKey: n = !1 } = {}) {
  let r = Ze(e, 0) + Ze(t, 0) * Sn;
  return n && (r = Math.round(r / 15) * 15), Il(r);
}
function Ze(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ei(e = {}) {
  const t = J(Ze(e.hFOV_deg || 90, 90), Er, Or), n = J(Ze(e.vFOV_deg || 60, 60), Er, Or), r = Math.tan(t * en * 0.5), o = Math.tan(n * en * 0.5);
  return {
    yawDeg: Ze(e.yaw_deg, 0),
    pitchDeg: Ze(e.pitch_deg, 0),
    rollDeg: Ze(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function Hi(e, t) {
  const n = Math.max(1, Ze((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Ze((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = ei(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function df(e, t) {
  const n = Math.max(1, Ze((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Ze((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Ze(t, 1)), s = Math.min(n, r * o);
  return { width: s, height: s / o };
}
function hf(e, t) {
  const n = Math.max(1e-12, Ze(t, 1)), r = Math.max(1e-6, Ze((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Ze((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), s = J(2 * Math.atan(r / (2 * n)) * Sn, Er, Or), u = J(2 * Math.atan(o / (2 * n)) * Sn, Er, Or);
  return { hFOV_deg: s, vFOV_deg: u };
}
function Z_(e, t, n) {
  const r = Ze(e == null ? void 0 : e.x, 0), o = Ze(e == null ? void 0 : e.y, 0), s = Math.max(1, Ze((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, Ze((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = ei(t), d = Math.max(1e-12, Ze(n, 1)), v = 2 * d * f.tanHalfX, y = 2 * d * f.tanHalfY;
  return {
    x: r + (s - v) * 0.5,
    y: o + (u - y) * 0.5,
    w: v,
    h: y,
    focalPx: d
  };
}
function pf(e, t, n = mu) {
  const r = Math.max(1e-12, Ze(t, 1)), o = J(Ze(n, mu), 1, 89.999), s = r * Math.tan(o * en), u = Math.max(1, Ze((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Ze((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, s),
    halfH: Math.min(f * 0.5, s)
  };
}
function Xm(e, t, n) {
  const r = Math.max(1e-12, Ze(t, 1));
  return {
    x: (Ze(n == null ? void 0 : n.x, 0) - Ze(e == null ? void 0 : e.x, 0)) / r,
    y: -(Ze(n == null ? void 0 : n.y, 0) - Ze(e == null ? void 0 : e.y, 0)) / r
  };
}
function $s(e, t) {
  const n = J(Ze(e, 60), Er, Or), r = Math.max(1e-6, Ze(t, 1));
  return J(
    2 * Math.atan(Math.tan(n * en * 0.5) * r) * Sn,
    Er,
    Or
  );
}
function Kh(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Q_(e, t) {
  const n = Kh(e, 1), r = Kh(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, s = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(r * o)), f = (v, y) => y ? f(y, v % y) : v, d = f(s, u) || 1;
  return `${Math.max(1, Math.round(s / d))}:${Math.max(1, Math.round(u / d))}`;
}
function Gi(e) {
  const t = J(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * en, n = J(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * en;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Fi(e) {
  const t = Gi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || Q_(t, 1);
}
function qm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Fi(t), t;
}
function Jm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: s = null
} = {}) {
  const u = s == null || String(s).trim() === "" ? NaN : Number(s), f = Number.isFinite(u) ? J(u, Er, Or) : J(Math.min(42, Ze(o, 100) * 0.42), 8, 96);
  return qm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Ze(t, 0),
    pitch_deg: J(Ze(n, 0), -89.9, 89.9),
    roll_deg: Il(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Br(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Fi(e);
}
function Zm(e, t) {
  const n = ei(e), r = Ze(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * Sn, s = 2 * Math.atan(n.tanHalfY * r) * Sn;
  return o < Er || o > Or || s < Er || s > Or ? null : { hFOV_deg: o, vFOV_deg: s };
}
function Qm(e, t, n = pu) {
  const r = Math.sign(Ze(t, 0)), o = Math.abs(Ze(n, pu));
  if (!r || !(o > 0)) return null;
  const s = ei(e), u = s.hFovDeg + r * o;
  if (u < Er || u > Or) return null;
  const f = Math.tan(u * en * 0.5);
  return Zm(e, f / s.tanHalfX);
}
function eg(e, t) {
  const n = ei(e), r = jo(n.yawDeg, n.pitchDeg, n.rollDeg), o = Ze(t == null ? void 0 : t.x, 0), s = Ze(t == null ? void 0 : t.y, 0);
  return ff(rl(rl(r.fwd, il(r.right, o)), il(r.up, s)));
}
function ex(e) {
  return Xn(e.x, e.y, -e.z);
}
function Vs(e) {
  return Xn(e.x, e.y, -e.z);
}
function El(e, t, n = 0) {
  const { right: r, up: o, fwd: s } = jo(e, t, n);
  return [
    [r.x, o.x, -s.x],
    [r.y, o.y, -s.y],
    [-r.z, -o.z, s.z]
  ];
}
function tx(e) {
  const t = Vs(Xn(e[0][0], e[1][0], e[2][0])), n = Vs(Xn(e[0][1], e[1][1], e[2][1])), r = Vs(Xn(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), s = Math.atan2(r.y, Math.hypot(r.x, r.z)), u = Math.cos(o), f = Math.sin(o), d = Math.atan2(f * n.z - u * n.x, u * t.x - f * t.z);
  return { yawDeg: o * Sn, pitchDeg: s * Sn, rollDeg: d * Sn };
}
function tg(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, s = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * s), 2 * (n * o + r * s)],
    [2 * (n * r + o * s), 1 - 2 * (n * n + o * o), 2 * (r * o - n * s)],
    [2 * (n * o - r * s), 2 * (r * o + n * s), 1 - 2 * (n * n + r * r)]
  ];
}
function Ol(e) {
  const [[t, n, r], [o, s, u], [f, d, v]] = e, y = t + s + v;
  if (y > 0) {
    const S = 0.5 / Math.sqrt(y + 1);
    return { x: (d - u) * S, y: (r - f) * S, z: (o - n) * S, w: 0.25 / S };
  }
  if (t > s && t > v) {
    const S = 2 * Math.sqrt(1 + t - s - v);
    return { x: 0.25 * S, y: (n + o) / S, z: (r + f) / S, w: (d - u) / S };
  }
  if (s > v) {
    const S = 2 * Math.sqrt(1 + s - t - v);
    return { x: (n + o) / S, y: 0.25 * S, z: (u + d) / S, w: (r - f) / S };
  }
  const x = 2 * Math.sqrt(1 + v - t - s);
  return { x: (r + f) / x, y: (u + d) / x, z: 0.25 * x, w: (o - n) / x };
}
function bs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ri = 1e-6, gu = 1e-6, nx = 1e-9;
function Ea(e, t, n, r, o) {
  const s = 1 - o;
  return s * s * s * e + 3 * s * s * o * t + 3 * s * o * o * n + o * o * o * r;
}
function rx(e, t) {
  if (e === "auto") return t;
  const [n, r, o, s] = e;
  let u = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const v = 0.5 * (u + f);
    Ea(0, n, o, 1, v) < t ? u = v : f = v;
  }
  return Ea(0, r, s, 1, 0.5 * (u + f));
}
function Ro(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function $o(e, t, n, r) {
  const o = e[t] - e[t - 1], s = e[t + 1] - e[t], u = n.map((S) => -S / o), f = r.map((S) => S / s);
  if (u.reduce((S, C, k) => S + C * f[k], 0) < 0) return n.map(() => 0);
  const d = u.map((S, C) => (S * s + f[C] * o) / (o + s)), v = (S) => Math.sqrt(S.reduce((C, k) => C + k * k, 0)), y = 3 * Math.min(v(u), v(f)), x = v(d);
  return x <= y ? d : d.map((S) => S * y / x);
}
function ng(e, t, n, r) {
  const o = n[r], s = n[r + 1], u = t[r + 1] - t[r], f = o.map((y, x) => s[x] - y);
  let d = f;
  Ro(e, r) && (d = $o(t, r, n[r - 1].map((y, x) => y - o[x]), f).map((y) => y * u));
  let v = f;
  return Ro(e, r + 1) && (v = $o(t, r + 1, f.map((y) => -y), n[r + 2].map((y, x) => y - s[x])).map((y) => y * u)), [d.map((y) => y / 3), v.map((y) => -y / 3)];
}
function rg(e, t, n, r, o) {
  const [[s], [u]] = ng(e, t, n.map((f) => [f]), r);
  return Ea(n[r], n[r] + s, n[r + 1] + u, n[r + 1], o);
}
function ix(e, t, n, r) {
  var v, y;
  const o = e.map((x) => x.value);
  let [s, u] = ng(e, t, o, n);
  s = ((v = e[n].handles) == null ? void 0 : v.out) ?? s, u = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? u;
  const f = o[n], d = o[n + 1];
  return [0, 1, 2].map((x) => Ea(f[x], f[x] + s[x], d[x] + u[x], d[x], r));
}
function al([e, t, n, r], [o, s, u, f]) {
  return [
    r * o + e * f + t * u - n * s,
    r * s - e * u + t * f + n * o,
    r * u + e * s - t * o + n * f,
    r * f - e * o - t * s - n * u
  ];
}
function ox(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Rc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function ax([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), s = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * s, t * s, n * s];
}
function yu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ko(e, t) {
  return ax(al([-e[0], -e[1], -e[2], e[3]], t));
}
function $c(e, t, n) {
  return al(e, yu(ko(e, t).map((r) => n * r)));
}
function Vc(e, t) {
  const n = ox(e, t);
  if (Math.abs(n) > gu) return n < 0;
  const [r, o, s] = ko(e, t);
  for (const u of [-o, r, s])
    if (Math.abs(u) > gu) return u < 0;
  return !1;
}
function vs(e) {
  const { x: t, y: n, z: r, w: o } = Ol(El(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function bu(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function sx(e, t, n, r) {
  const o = vs(e[n].value);
  let s = vs(e[n + 1].value);
  Vc(o, s) && (s = Rc(s));
  const u = t[n + 1] - t[n], f = ko(o, s);
  let d = f;
  if (Ro(e, n)) {
    let $ = vs(e[n - 1].value);
    Vc($, o) && ($ = Rc($)), d = $o(t, n, ko(o, $), f).map((V) => V * u);
  }
  let v = f;
  if (Ro(e, n + 1)) {
    let $ = vs(e[n + 2].value);
    Vc(s, $) && ($ = Rc($)), v = $o(t, n + 1, ko(s, o), ko(s, $)).map((V) => V * u);
  }
  const y = al(o, yu(d.map(($, V) => 0.5 * ($ - f[V])))), x = al(s, yu(f.map(($, V) => 0.5 * ($ - v[V])))), [S, C, k, _] = $c($c(o, s, r), $c(y, x, r), 2 * r * (1 - r)), { yawDeg: D, pitchDeg: z, rollDeg: X } = tx(tg({ x: S, y: C, z: k, w: _ })), N = e[n].value, O = e[n + 1].value;
  return {
    yaw_deg: bu(D, N.yaw_deg, O.yaw_deg, r),
    pitch_deg: z,
    roll_deg: bu(X, N.roll_deg, O.roll_deg, r)
  };
}
function Oa(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function sl(e) {
  return Math.sqrt(Oa(e, e));
}
function ll(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function ig(e, t) {
  const n = Oa(e, t), r = t.map((u, f) => u - n * e[f]), o = sl(r), s = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((u) => u * s);
}
function wo(e, t) {
  const n = sl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, s) => Math.cos(n) * o + r * t[s]);
}
function _s(e, t, n) {
  return wo(e, ig(e, t).map((r) => n * r));
}
function zc(e, t) {
  const n = ll(e[t].value), r = ll(e[t + 1].value), o = Oa(n, r), s = o < 0 && sl(r.map((d, v) => d - o * n[v])) <= gu;
  let u;
  if (s) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    u = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    u = ig(n, r);
  const f = sl(u);
  return [u, u.map((d, v) => Math.cos(f) * d - f * Math.sin(f) * n[v]), s];
}
function lx(e, t, n, r) {
  const o = ll(e[n].value), s = ll(e[n + 1].value), [u, f, d] = zc(e, n);
  let v = u, y = f;
  const x = t[n + 1] - t[n];
  Ro(e, n) && (v = $o(t, n, zc(e, n - 1)[1].map((N) => -N), v).map((N) => N * x)), Ro(e, n + 1) && (y = $o(t, n + 1, y.map((N) => -N), zc(e, n + 1)[0]).map((N) => N * x));
  let S, C, k;
  if (d) {
    const N = Math.PI, O = Ea(0, Oa(v, u) / N / 3, N - Oa(y, f) / N / 3, N, r);
    [S, C, k] = wo(o, u.map(($) => O * $ / N));
  } else {
    const N = _s(wo(o, v.map((V) => V / 3)), wo(s, y.map((V) => -V / 3)), r), O = _s(wo(o, v.map((V) => r * V / 3)), N, r), $ = _s(N, wo(s, y.map((V) => -(1 - r) * V / 3)), r);
    [S, C, k] = _s(O, $, r);
  }
  const _ = Math.hypot(S, k), D = e[n].value.yaw_deg, z = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= nx ? D + (z - D) * r : bu(Math.atan2(S, k) * 180 / Math.PI, D, z, r), pitch_deg: Math.atan2(C, _) * 180 / Math.PI };
}
function cx(e, t, n, r) {
  const o = {};
  for (const s of ["hFOV_deg", "vFOV_deg"]) o[s] = rg(e, t, e.map((u) => u.value[s]), n, r);
  return o;
}
function ux(e, t, n, r) {
  return rg(e, t, e.map((o) => o.value), n, r);
}
const fx = { position: ix, rotation: sx, direction: lx, size: cx };
function Gt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return bs(e[t].value);
  if (n <= r[0].frame + Ri) return bs(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - Ri) return bs(o.value);
  let s = 0;
  for (; r[s + 1].frame <= n + Ri; ) s += 1;
  const u = r[s];
  if (Math.abs(n - u.frame) <= Ri || u.easing === "hold") return bs(u.value);
  const f = r.map((v) => v.frame), d = rx(u.easing, (n - f[s]) / (f[s + 1] - f[s]));
  return (fx[t] ?? ux)(r, f, s, d);
}
function vu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function dx(e) {
  return Math.min(1, Math.max(0, e));
}
function og(e) {
  return Math.max(1e-6, e);
}
function ag(e, t) {
  return t - (e.start - e.in);
}
function Di(e, t) {
  return t >= e.start - Ri && (e.duration === null || t < e.start + e.duration - Ri);
}
function hx(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, s = ag(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Gt(r, "position", n),
      ...Gt(r, "rotation", n),
      hFOV_deg: vu(Gt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Di(o.clip, n),
      clip_frame: s,
      position: Gt(o, "position", s),
      ...Gt(o, "rotation", s),
      scale: og(Gt(o, "scale", s))
    },
    stickers: e.stickers.map((u) => Tl(u, n))
  };
}
function px(e, t) {
  if (e.placement === "world")
    return {
      position: Gt(e, "position", t),
      ...Gt(e, "rotation", t),
      scale: og(Gt(e, "scale", t))
    };
  const n = Gt(e, "size", t);
  return {
    ...Gt(e, "direction", t),
    roll_deg: Gt(e, "roll", t),
    hFOV_deg: vu(n.hFOV_deg),
    vFOV_deg: vu(n.vFOV_deg)
  };
}
function Tl(e, t) {
  const n = ag(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Di(e.clip, t),
    clip_frame: n,
    ...px(e, n),
    opacity: dx(Gt(e, "opacity", n))
  };
}
const mx = 2, gx = ["sky", "world"], yx = ["input", "output", "temp"], sg = [0.42, 0, 0.58, 1];
function Ut(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Ft(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function _u(e, t) {
  const n = Ft(e, t);
  return n !== null && n > 0 ? n : t;
}
function Un(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Eo(e) {
  const t = Ft(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Bh(e, t) {
  return typeof e == "boolean" ? e : t;
}
function lg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Ft(n, null));
  return t.includes(null) ? null : t;
}
function cg(e) {
  return lg(e) || [0, 0, 0];
}
function ug(e) {
  const t = Ut(e) ? e : {};
  return {
    yaw_deg: Ft(t.yaw_deg, 0),
    pitch_deg: Un(Ft(t.pitch_deg, 0), -90, 90),
    roll_deg: Ft(t.roll_deg, 0)
  };
}
function bx(e) {
  return Un(Ft(e, 90), 0.1, 179);
}
function vx(e) {
  return _u(e, 1);
}
function _x(e) {
  const t = Ut(e) ? e : {};
  return {
    yaw_deg: Ft(t.yaw_deg, 0),
    pitch_deg: Un(Ft(t.pitch_deg, 0), -90, 90)
  };
}
function xx(e) {
  return Ft(e, 0);
}
function wx(e) {
  const t = Ut(e) ? e : {};
  return {
    hFOV_deg: Un(Ft(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Un(Ft(t.vFOV_deg, 20), 0.1, 179)
  };
}
function fg(e) {
  return Un(Ft(e, 1), 0, 1);
}
const dg = [["position", cg], ["rotation", ug], ["fov", bx]], mf = [["position", cg], ["rotation", ug], ["scale", vx]], hg = [["direction", _x], ["roll", xx], ["size", wx], ["opacity", fg]], pg = [...mf, ["opacity", fg]];
function Sx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Ft(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...sg];
}
function kx(e) {
  if (!Ut(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = lg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Mx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!Ut(o)) continue;
    const s = Eo(o.frame);
    if (s === null) continue;
    const u = { frame: s, value: t(o.value), easing: Sx(o.easing) }, f = n ? kx(o.handles) : null;
    f && (u.handles = f), r.set(s, u);
  }
  return [...r.keys()].sort((o, s) => o - s).map((o) => r.get(o));
}
function xu(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const s = Ut(e[r]) ? e[r] : {};
    n[r] = { value: o(s.value), keyframes: Mx(s.keyframes, o, r === "position") };
  }
  return n;
}
function mg(e) {
  const t = Ut(e) ? e : {}, n = Eo(t.start), r = Eo(t.in), o = Eo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function Nx(e) {
  const t = Ut(e) ? e : {}, n = Un(Ft(t.x0, 0), 0, 1), r = Un(Ft(t.y0, 0), 0, 1), o = Un(Ft(t.x1, 1), 0, 1), s = Un(Ft(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, s), x1: Math.max(n, o), y1: Math.max(r, s) };
}
function Px(e) {
  if (!Ut(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: yx.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Ax(e) {
  const t = Px(e.source);
  if (!t) return null;
  const n = gx.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: mg(e.clip),
    visible: Bh(e.visible, !0),
    locked: Bh(e.locked, !1),
    crop: Nx(e.crop),
    ...xu(e, r ? pg : hg)
  };
  return r || (o.z_index = Eo(e.z_index) ?? 0), o;
}
function Cx(e) {
  const t = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const u = Ut(s) ? Ax(s) : null;
    if (u) {
      if (u.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(u);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const s of t)
    typeof s.id == "string" && s.id && !r.has(s.id) ? r.add(s.id) : s.id = null;
  let o = 1;
  for (const s of t)
    if (s.id === null) {
      for (; r.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, r.add(s.id);
    }
  return t;
}
function wu(e) {
  const t = Ut(e.timeline) ? e.timeline : {}, n = Ut(e.camera) ? e.camera : {}, r = Ut(e.scene) ? e.scene : {}, o = Eo(t.length);
  return {
    version: mx,
    timeline: {
      fps: _u(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: _u(n.aspect, 1), ...xu(n, dg) },
    scene: { clip: mg(r.clip), ...xu(r, mf) },
    stickers: Cx(e.stickers),
    painting: Io(e.painting),
    painting_layer: Ut(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Ix(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Ut(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function Ex(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Ut(t)) return {};
  const n = Un(Ft(t.hFOV_deg, 90), 1, 179), r = Un(Ft(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Ox(e) {
  const t = Ut(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Ut) : [];
  return n.sort((r, o) => Ft(r.z_index, 0) - Ft(o.z_index, 0)), wu({
    camera: Ex(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Ix(r, t),
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
function Ta(e) {
  if (e == null || typeof e == "string" && !e.trim()) return wu({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Ut(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Ox(t) : wu(t);
}
function jc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function gg(e) {
  return Array.isArray(e) ? [...e] : e;
}
function gf(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Ri);
}
function yg(e, t, n) {
  const r = e.keyframes.findIndex((s) => s.frame > t), o = r > 0 ? gg(e.keyframes[r - 1].easing) : [...sg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Ki(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = jc(o.value, r);
    return;
  }
  const s = gf(o, n);
  s ? s.value = jc(s.value, r) : yg(o, n, jc(Gt(e, t, n), r));
}
function Ho(e) {
  return e.placement === "world" ? pg.map(([t]) => t) : e.placement === "sky" ? hg.map(([t]) => t) : (e.clip ? mf : dg).map(([t]) => t);
}
function Tx(e, t) {
  for (const n of Ho(e))
    gf(e[n], t) || yg(e[n], t, Gt(e, n, t));
}
function Fx(e) {
  const t = Ho(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function Dx(e, t) {
  return Ho(e).every((n) => !!gf(e[n], t));
}
function Lx(e, t, n, r) {
  const o = new Set(n);
  for (const s of t) {
    const u = e[s];
    if (!u.keyframes.some((d) => o.has(d.frame))) continue;
    const f = Gt(e, s, r);
    u.keyframes = u.keyframes.filter((d) => !o.has(d.frame)), u.keyframes.length || (u.value = f);
  }
}
function Rx(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const s = new Set(n);
  for (const u of t) {
    const f = e[u], d = f.keyframes.filter((y) => s.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), v = new Set(d.map((y) => y.frame));
    f.keyframes = [
      ...f.keyframes.filter((y) => !s.has(y.frame) && !v.has(y.frame)),
      ...d
    ].sort((y, x) => y.frame - x.frame);
  }
  return r;
}
function bg(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((s) => e[s].keyframes.slice(0, -1).filter((u) => n.length > 1 ? u.frame >= r && u.frame < o : u.frame === r));
}
function $x(e, t, n) {
  const r = bg(e, t, n);
  if (!r.length) return null;
  const o = r.some((s) => JSON.stringify(s.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function Vx(e, t, n, r) {
  for (const o of bg(e, t, n)) o.easing = gg(r);
}
function zx(e, t) {
  e.start = Math.max(0, e.start + t);
}
function jx(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function Hx(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function Wh(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Su(e) {
  return Ho(e).map((t) => e[t]);
}
function Uh(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Su(t).some((n) => n.keyframes.length > 0)) || !Wh(e.scene.clip) || e.stickers.some((t) => !Wh(t.clip));
}
function Gx(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = Math.max(e.timeline.length ?? t, n);
  for (const s of Su(e.camera))
    for (const u of s.keyframes) o = Math.max(o, u.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: u } = s;
    o = Math.max(o, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const f of Su(s))
      for (const d of f.keyframes) o = Math.max(o, u.start - u.in + d.frame + 1);
  }
  return o;
}
function Kx(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let xs = { text: null, parsed: null };
function Vn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function cl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Bx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Vn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Io(null),
    painting_layer: null,
    ui_settings: cl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function vg(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function Wx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function Ux(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Yx(e) {
  return Array.isArray(e) ? e.map((t) => qm(t)) : [];
}
function Xx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((u) => String((u == null ? void 0 : u.id) || "") === r) || n[0], s = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: s };
}
function _g(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Bx(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let s = null;
    if (xs.text === o ? s = xs.parsed : (s = JSON.parse(o), xs = { text: o, parsed: s }), !s || typeof s != "object" || Array.isArray(s)) return r;
    const u = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...s,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Wx(s.assets),
      stickers: Ux(s.stickers),
      shots: Yx(s.shots),
      painting: Io(s.painting),
      painting_layer: s.painting_layer && typeof s.painting_layer == "object" ? s.painting_layer : null,
      ui_settings: cl(s.ui_settings),
      active: s.active && typeof s.active == "object" ? { ...s.active } : { ...r.active }
    };
    return u && (f.ui_settings = cl({ ...f.ui_settings, ...u })), f.output_preset = vg(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Vn(n.coverage), delete f.editor_history, f;
  } catch {
    return xs = { text: o, parsed: null }, r;
  }
}
function Yh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function xg(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: s = null, active: u } = t;
  let f;
  try {
    f = Ta(e);
  } catch {
    f = Ta(null);
  }
  return {
    ...f,
    coverage: Vn(o),
    bg_color: r,
    output_preset: vg(n),
    ui_settings: cl(s),
    active: { selected_sticker_id: null, selected_shot_id: null, ...u }
  };
}
function yf(e, t) {
  const n = Tl(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const qx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Xh(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Jx(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[qx[n]].keyframes.length));
}
function wg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = Xh(n, ["yaw_deg", "pitch_deg"]), s = Xh(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Ki(e, "direction", r, o), n.rot_deg !== void 0 && Ki(e, "roll", r, n.rot_deg), Object.keys(s).length && Ki(e, "size", r, s);
}
const Sg = ["position_x", "position_y", "position_z"];
function Zx(e, t) {
  const n = Gt(e, "position", t), r = Gt(e, "rotation", t);
  return {
    ...Object.fromEntries(Sg.map((o, s) => [o, n[s]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Gt(e, "fov", t)
  };
}
function Qx(e, t, n, r) {
  const o = Sg.indexOf(n);
  if (o >= 0) {
    const s = Gt(e, "position", t);
    s[o] = r, Ki(e, "position", t, s);
  } else n === "hFOV_deg" ? Ki(e, "fov", t, r) : Ki(e, "rotation", t, { [n]: r });
}
function ew(e, t, n) {
  Ki(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function zs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function kg(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Mg(e, t, n, r) {
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
function tw(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Rt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Ng(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Pg(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Ag(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Cg(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? Ta(t) : t);
}
const qh = 2048, Ig = 0.28;
function Eg(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * en);
  return {
    quaternion: Ol(El(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * Sn,
    aspect: r
  };
}
function js(e) {
  const t = ei(e);
  return {
    quaternion: Ol(El(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function nw(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: s } = pf(n, r), u = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: u - o, y: f - s, w: o * 2, h: s * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * Sn,
      vFOV_deg: 2 * Math.atan(s / r) * Sn
    }
  };
}
function Og(e, t, n) {
  const [[r, o, s], [u, f, d], [v, y, x]] = tg(e.quaternion), S = Math.tan(e.fovY_deg * 0.5 * en), C = S * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, _ = 1e-4) {
      const D = ex(k), z = r * D.x + u * D.y + v * D.z, X = o * D.x + f * D.y + y * D.z, N = -(s * D.x + d * D.y + x * D.z), O = Math.max(N, _);
      return {
        x: t * 0.5 * (1 + z / O / C),
        y: n * 0.5 * (1 - X / O / S),
        z: N
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, _) {
      const D = (k / t * 2 - 1) * C, z = (1 - _ / n * 2) * S;
      return ff(Vs({
        x: r * D + o * z - s,
        y: u * D + f * z - d,
        z: v * D + y * z - x
      }));
    }
  };
}
function rw(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const s = hx(e, t), u = [];
  e.stickers.forEach((f, d) => {
    const v = s.stickers[d];
    if (f.placement !== "sky") return;
    const y = f.source.kind === "port" && !f.visible;
    if (!v.active && !y) return;
    const x = n(f);
    if (!x) return;
    const S = Math.tan(v.hFOV_deg * 0.5 * en), C = Math.tan(v.vFOV_deg * 0.5 * en), { crop: k } = f;
    u.push({
      kind: "sticker",
      id: f.id,
      media: x.media,
      revision: x.revision,
      opacity: y ? Ig : v.opacity,
      zIndex: r(f),
      quaternion: Ol(El(v.yaw_deg, v.pitch_deg, v.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * S,
        x1: (2 * k.x1 - 1) * S,
        y0: (1 - 2 * k.y1) * C,
        y1: (1 - 2 * k.y0) * C
      }
    });
  });
  for (const f of o) u.push({ kind: "erp", ...f });
  return u.sort((f, d) => f.zIndex - d.zIndex);
}
function Tg(e, t, n, { media: r, paintLayers: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !s.has(u.id) && s.set(u.id, u);
  return rw(e, t, {
    media: (u) => {
      const f = s.get(u.id);
      return f ? r(f) : null;
    },
    zIndex: (u) => {
      var f;
      return Number(((f = s.get(u.id)) == null ? void 0 : f.z_index) || 0);
    },
    paintLayers: o
  });
}
const Hc = /* @__PURE__ */ new WeakMap();
let iw = 1;
function Jh(e) {
  return Hc.has(e) || Hc.set(e, iw++), Hc.get(e);
}
function Zh({ background: e, layers: t }) {
  return JSON.stringify([
    e && [Jh(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, Jh(n.media), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function ow({ onReady: e, onFailed: t }) {
  let n = null, r = !1;
  const o = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(s) {
      return n ? n.render(s) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(s) {
      return n ? n.renderUnwrap(s) : null;
    },
    dispose() {
      r = !0, n == null || n.dispose(), n = null;
    }
  };
  return import("./.lazy/pano_three_view-DtiQ-hzq.js").then((s) => {
    r || (n = s.createThreeView(), o.ready = !0, e());
  }).catch((s) => {
    console.error("[PanoramaStickers] three.js view is unavailable", s), o.failed = !0, t();
  }), o;
}
const Fg = "3D view unavailable. Check the browser console.";
function ul(e, t, n) {
  return Eg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function aw(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function s() {
    t || n || r || (n = !0, e().then((u) => {
      if (n = !1, !o.size) {
        u.dispose();
        return;
      }
      t = u, o.forEach((f) => f.onChange());
    }).catch((u) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", u), o.forEach((f) => f.onChange()));
    }));
  }
  return function(f) {
    const d = { onChange: f };
    let v = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(y) {
        return v ? null : (s(), t ? t.render({ ...y, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        v || (v = !0, o.delete(d), t == null || t.release(d), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Dg = aw(
  () => import("./.lazy/pano_three_view-DtiQ-hzq.js").then((e) => e.createThreeView())
);
function Lg({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: o,
  onChange: s = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof o != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let u = null, f = !1, d = !1;
  const v = () => u || e(), y = () => s(n(v()));
  return {
    model: () => n(v()),
    refresh() {
      return d ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return d || u ? !1 : (u = e(), f = !1, y(), !0);
    },
    updateGesture(x) {
      if (d) return !1;
      u || this.beginGesture();
      const S = t(u, x);
      return S.changed ? (u = S.state, f = !0, r(u), y(), !0) : !1;
    },
    hasGestureChanges() {
      return u != null && f;
    },
    commitGesture() {
      if (d || !u) return !1;
      const x = f;
      return x && o(u), u = null, f = !1, r(null), y(), x;
    },
    cancelGesture() {
      return d || !u ? !1 : (u = null, f = !1, r(null), y(), !0);
    },
    apply(x) {
      if (d) return !1;
      u && this.commitGesture();
      const S = t(e(), x);
      return S.changed ? (o(S.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const x = u != null;
      u = null, f = !1, x && r(null);
    }
  };
}
const fl = Math.PI / 180, Nr = 180 / Math.PI, sw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), lw = 260;
function Qh(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Rg(e, t) {
  return t ? Rg(t, e % t) : e;
}
function cw(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, s = r ? 1 : Math.max(e, t), u = Math.max(1, Math.round(e / s * o)), f = Math.max(1, Math.round(t / s * o)), d = Rg(u, f) || 1;
  return `${Math.round(u / d)}:${Math.round(f / d)}`;
}
function Fa(e, t) {
  const n = Qh(e), r = Qh(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: cw(n, r) };
}
function Bi(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function $g(e) {
  const t = Bi(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Br(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function bf(e, t, n = sw) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), s = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), v = (D, z, X) => {
    const N = D + z, O = Math.max(0, X - 1), $ = N > O && N > 0 ? O / N : 1;
    return [D * $, z * $];
  }, [y, x] = v(d, u, r), [S, C] = v(s, f, o), k = {
    x: y,
    y: S,
    w: Math.max(1, r - y - x),
    h: Math.max(1, o - S - C)
  }, _ = df(k, t);
  return {
    x: k.x + (k.w - _.width) * 0.5,
    y: k.y + (k.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: k
  };
}
function uw(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = bf({ width: n, height: r }, 1), s = J(Number((e == null ? void 0 : e.fov) || 100), 1, 179), u = n / (2 * Math.tan(s * fl * 0.5)), f = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, v = eg(d, Xm(
    { x: n * 0.5, y: r * 0.5 },
    u,
    f
  )), y = fw(v, jo(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), x = hf({ width: o.w, height: o.h }, u);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: x.hFOV_deg
  };
}
function Vg(e) {
  return {
    yaw: Rt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Nr),
    pitch: J(Math.asin(J(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Nr, -89.9, 89.9)
  };
}
function fw(e, t) {
  const n = Vg(e), r = jo(n.yaw, n.pitch, 0), o = Lc(t, e), s = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, u = Math.hypot(s.x, s.y, s.z);
  if (!(u > 1e-8)) return { ...n, roll: 0 };
  const f = {
    x: s.x / u,
    y: s.y / u,
    z: s.z / u
  };
  return {
    ...n,
    roll: Il(Math.atan2(
      Lc(f, r.up),
      Lc(f, r.right)
    ) * Nr)
  };
}
function zg(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = bf({ width: n, height: r }, Gi(e)), s = Hi(o, e), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = eg(e, Xm(
    u,
    s,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Vg(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: J(2 * Math.atan(n / (2 * s)) * Nr, 1, 179)
  };
}
function dw(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), s = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, u = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Hi(t, n), d = {
    width: Math.max(s, r - s) * 2,
    height: Math.max(u, o - u) * 2
  }, { halfW: v, halfH: y } = pf(d, f), x = {
    x: s - v,
    y: u - y,
    w: v * 2,
    h: y * 2
  }, S = x.x <= 0 && x.y <= 0 && x.x + x.w >= r && x.y + x.h >= o, C = r / o, k = Math.tan(mu * fl), _ = C >= 1 ? k : k * C, D = C >= 1 ? k / C : k;
  return {
    focalPx: f,
    rect: x,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(v / f) * Nr,
      vFOV_deg: 2 * Math.atan(y / f) * Nr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(_) * Nr,
        vFOV_deg: 2 * Math.atan(D) * Nr
      }
    }
  };
}
function po(e, t) {
  const n = Bi(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = t(n);
  return !r || r === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((o) => o === n ? r : o)
    },
    changed: !0
  };
}
function hw(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const u = Hi(n, e);
    return hf(df(n, t), u);
  }
  const s = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: s, hFOV_deg: $s(s, t) };
}
function ep(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let s = Fa(t, n);
  if (!s) return e;
  const u = Gi(e) >= 1;
  r && s.ratio >= 1 !== u && (s = Fa(s.height, s.width));
  const f = hw(e, s.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === s.label ? e : { ...e, ...f, aspect_id: s.label };
}
function jg(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Bi(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Jm({
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
        shots: [o],
        active: { ...e.active || {}, selected_shot_id: r }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const r = Bi(e);
    if (!r) return { state: e, changed: !1 };
    const o = (Array.isArray(e.shots) ? e.shots : []).filter((u) => u !== r), s = ((n = o[0]) == null ? void 0 : n.id) == null ? null : String(o[0].id);
    return {
      state: {
        ...e,
        shots: o,
        active: { ...e.active || {}, selected_shot_id: s }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return po(e, (r) => ep(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return po(e, (r) => {
      const s = String(Br(r) || "").match(/^([0-9.]+):([0-9.]+)$/), u = s ? Fa(s[1], s[2]) : Fa(Gi(r), 1);
      return u ? ep(r, u.height, u.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? po(e, (o) => {
      const s = Il(r), u = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(u - s) <= 1e-12) return o;
      const f = { ...o, roll_deg: s };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? po(e, (r) => {
    const o = Zm(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? po(e, (r) => {
    const o = Qm(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? po(e, (r) => {
    const o = Kg(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Hg({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: s = !1,
  deadZoneRatio: u = 0.05
} = {}) {
  const f = s && o ? "alt" : r ? "shift" : "";
  if (!f || !e || !t) return null;
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, v = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - v.x, Number(t.y || 0) - v.y);
  if (f === "shift" && y < Math.min(d.w, d.h) * u) return null;
  const x = Math.atan2(Number(t.y || 0) - v.y, Number(t.x || 0) - v.x);
  return {
    source: f,
    frame: d,
    center: v,
    startRollDeg: Number(n || 0),
    lastAngle: x,
    accumulatedRad: 0
  };
}
function Gg(e, t, n = {}) {
  var u, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((u = e.center) == null ? void 0 : u.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + Um(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Ym(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Kg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, s = Number(t.dx || 0) * r, u = Number(t.dy || 0) * o, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * fl, d = Math.cos(f), v = Math.sin(f), y = s / n, x = -u / n, S = y * d - x * v, C = y * v + x * d, k = Number(e.pitch_deg || 0) * fl, _ = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Rt(Number(e.yaw_deg || 0) - Math.atan(S) / _ * Nr),
    pitch_deg: J(Number(e.pitch_deg || 0) - Math.atan(C) * Nr, -90, 90)
  };
}
function pw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Lg({
    readState: e,
    reduce: jg,
    projectModel: $g,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ae = Object.freeze({
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
  lasso_tool: "lasso_tool",
  keyframe: "keyframe"
}), mw = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, gw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: mw(t[2])
})), yw = {
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
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" },
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" }
}, tp = Object.fromEntries(
  Object.entries(yw).map(([e, t]) => [e, {
    name: t.name,
    elements: gw(t.body)
  }])
), Ct = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ct(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(tp, r) ? tp[r] : null;
    });
    return (r, o) => n.value ? (oe(), fe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: it(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (oe(!0), fe(Be, null, xt(n.value.elements, (s, u) => (oe(), fe(Be, {
        key: `${n.value.name || e.icon || "icon"}-${s.tag}-${u}`
      }, [
        s.tag === "path" ? (oe(), fe("path", mi({
          key: 0,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "circle" ? (oe(), fe("circle", mi({
          key: 1,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "rect" ? (oe(), fe("rect", mi({
          key: 2,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "line" ? (oe(), fe("line", mi({
          key: 3,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "polyline" ? (oe(), fe("polyline", mi({
          key: 4,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "polygon" ? (oe(), fe("polygon", mi({
          key: 5,
          ref_for: !0
        }, s.attrs), null, 16)) : at("", !0)
      ], 64))), 128))
    ], 2)) : at("", !0);
  }
}, Qt = {
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
    const t = e, n = ct(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (oe(), Tr(lv(e.tag), mi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: hm(() => [
        Te(Ct, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, bw = ["aria-expanded", "disabled"], vw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, _w = ["data-aspect", "disabled", "onClick"], xw = { class: "pano-cutout-aspect-custom" }, ww = ["disabled"], Sw = ["disabled"], kw = ["data-custom-width", "data-custom-height", "disabled"], Bg = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), s = /* @__PURE__ */ Yt("1"), u = /* @__PURE__ */ Yt("1"), f = /* @__PURE__ */ Yt(null), d = ct(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), v = ct(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], D = String(n.model.aspectLabel || "");
      return _.length ? _.map((z) => {
        const X = typeof z == "string" ? z : String((z == null ? void 0 : z.value) || ""), N = typeof z == "string" ? z : String((z == null ? void 0 : z.label) || X);
        return {
          ...typeof z == "object" && z ? z : {},
          value: X,
          label: N,
          active: D ? X === D : (z == null ? void 0 : z.active) === !0
        };
      }) : o.map((z) => ({
        ...z,
        active: z.value === D
      }));
    }), y = ct(() => {
      var D;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((D = v.value.find((z) => z.active === !0)) == null ? void 0 : D.label) || "Aspect");
    });
    zi(y, (_) => {
      const D = String(_ || "").match(/^([0-9.]+):([0-9.]+)$/);
      D && (s.value = D[1], u.value = D[2]);
    }, { immediate: !0 });
    function x(_) {
      r("action", _);
    }
    function S(_) {
      var D;
      n.model.aspectOpen === !0 && ((D = f.value) != null && D.contains(_.target) || x({ type: "close-aspect" }));
    }
    Nl(() => {
      document.addEventListener("pointerdown", S, !0);
    }), za(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function C(_) {
      const [D, z] = String(_.value || "").split(":");
      x({
        type: "set-aspect",
        width: D,
        height: z,
        preserveOrientation: !0
      });
    }
    function k() {
      x({
        type: "set-aspect",
        width: s.value,
        height: u.value,
        preserveOrientation: !1
      });
    }
    return (_, D) => (oe(), fe("div", {
      ref_key: "rootElement",
      ref: f,
      class: it(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (oe(), Tr(Qt, {
        key: 0,
        icon: e.model.aspectIcon || et(Ae).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: D[0] || (D[0] = (z) => x({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (oe(), fe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: D[1] || (D[1] = (z) => x({ type: "toggle-aspect" }))
      }, [
        Te(Ct, {
          icon: e.model.aspectIcon || et(Ae).aspect
        }, null, 8, ["icon"]),
        B("span", null, tt(y.value), 1),
        Te(Ct, {
          icon: et(Ae).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, bw)),
      qr(B("div", vw, [
        (oe(!0), fe(Be, null, xt(v.value, (z) => (oe(), fe("button", {
          key: z.value,
          class: it(["pano-btn pano-frame-aspect-choice", { active: z.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": z.value,
          disabled: d.value,
          onClick: (X) => C(z)
        }, tt(z.label), 11, _w))), 128)),
        B("div", xw, [
          qr(B("input", {
            "onUpdate:modelValue": D[2] || (D[2] = (z) => s.value = z),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, ww), [
            [Th, s.value]
          ]),
          D[4] || (D[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          qr(B("input", {
            "onUpdate:modelValue": D[3] || (D[3] = (z) => u.value = z),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, Sw), [
            [Th, u.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": s.value,
            "data-custom-height": u.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, kw)
        ])
      ], 512), [
        [Wi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Mw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Nw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (oe(), fe("div", {
      class: it(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ht(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ht(() => {
      }, ["stop"]))
    }, [
      Te(Qt, {
        icon: et(Ae).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Ht((s) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", Mw, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (oe(!0), fe(Be, null, xt(et(n), (s) => (oe(), fe("div", {
          key: s[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, tt(s[0]), 1),
          B("span", null, tt(s[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Pw = {
  class: "pano-view-unavailable",
  role: "status"
}, vf = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (oe(), fe("div", Pw, tt(et(Fg)), 1));
  }
}, Aw = { class: "pano-cutout-node-surface" }, Cw = ["title", "disabled"], Iw = { class: "value" }, Ew = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Ow = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(r) {
      var o;
      (o = t.onAction) == null || o.call(t, r);
    }
    return (r, o) => (oe(), fe("div", Aw, [
      B("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Ht(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Ht(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (s) => n({ type: "open-editor" }))
        }, [
          Te(Ct, {
            icon: et(Ae).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        Te(Qt, {
          icon: e.model.hasShot ? et(Ae).delete : et(Ae).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (s) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Te(Bg, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        B("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Ht((s) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Te(Ct, {
            icon: et(Ae).roll
          }, null, 8, ["icon"]),
          B("span", Iw, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Cw),
        Te(Qt, {
          icon: et(Ae).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (s) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Te(Nw)
      ], 32),
      e.model.hasShot === !1 ? (oe(), fe("div", Ew, " Choose a view · + Add Frame ")) : at("", !0),
      e.model.viewUnavailable ? (oe(), Tr(vf, { key: 1 })) : at("", !0)
    ]));
  }
}, Wg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Yt(null);
    let s, u = !1;
    function f() {
      if (!u) return { active: !1, intent: void 0 };
      const x = s;
      return s = void 0, u = !1, { active: !0, intent: x };
    }
    function d(x) {
      const S = o.value;
      return S instanceof HTMLInputElement ? (s = x, u = !0, S.value = "", S.click(), !0) : !1;
    }
    function v(x) {
      var _, D;
      const { active: S, intent: C } = f();
      if (!S) return;
      const k = ((D = (_ = x.target) == null ? void 0 : _.files) == null ? void 0 : D[0]) || null;
      if (k) {
        r("file-selected", { intent: C, file: k });
        return;
      }
      r("file-cancelled", { intent: C });
    }
    function y() {
      const { active: x, intent: S } = f();
      x && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (x, S) => (oe(), fe("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: v,
      onCancel: y
    }, null, 544));
  }
}, Tw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Fw = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), n = Object.freeze([
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
    return (r, o) => (oe(), fe("div", {
      class: it(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ht(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ht(() => {
      }, ["stop"]))
    }, [
      Te(Qt, {
        icon: et(Ae).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Ht((s) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", Tw, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (oe(!0), fe(Be, null, xt(et(n), (s) => (oe(), fe("div", {
          key: s[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, tt(s[0]), 1),
          B("span", null, tt(s[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Dw = { class: "pano-stickers-node-surface" }, Lw = ["disabled"], Rw = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, $w = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, Vw = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Yt(null);
    function r(u) {
      var f;
      (f = t.onAction) == null || f.call(t, u);
    }
    function o() {
      var u, f;
      (f = (u = n.value) == null ? void 0 : u.open) == null || f.call(u, "add");
    }
    function s(u) {
      r({ type: "add-image-file", file: (u == null ? void 0 : u.file) || null });
    }
    return (u, f) => (oe(), fe("div", Dw, [
      B("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Ht(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Ht(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          Te(Ct, {
            icon: et(Ae).fullscreen
          }, null, 8, ["icon"]),
          f[7] || (f[7] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Te(Ct, {
            icon: et(Ae).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, Lw),
        Te(Qt, {
          icon: e.model.locked ? et(Ae).lock_closed : et(Ae).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Te(Qt, {
          icon: et(Ae).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Te(Qt, {
          icon: et(Ae).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Te(Qt, {
          icon: e.model.isExternalSelection ? et(Ae).back_initial : et(Ae).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Te(Fw)
      ], 32),
      e.model.hasStickers === !1 ? (oe(), fe("div", Rw, " Add Image to place a sticker ")) : at("", !0),
      e.model.dropActive === !0 ? (oe(), fe("div", $w, "Drop image to add")) : at("", !0),
      Te(Wg, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: s
      }, null, 512),
      e.model.viewUnavailable ? (oe(), Tr(vf, { key: 2 })) : at("", !0)
    ]));
  }
}, Hs = "sticker_image_1", Ug = "external_image", Da = 0;
function Gs(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), s = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, s));
}
function Gc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ui(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function ku(e) {
  return (e == null ? void 0 : e.version) !== 2 ? Ui(e) : Ui(e).map((t) => ({
    id: t.id,
    z_index: t.z_index,
    locked: t.locked,
    visible: Tl(t, Da).active,
    ...yf(t, Da)
  }));
}
function _f(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ui(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Yg(e) {
  return String((e == null ? void 0 : e.id) || "") === Hs || String((e == null ? void 0 : e.source_kind) || "") === Ug;
}
function Xg(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Yg(t);
}
const qg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Jg(e) {
  return !Yg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(qg.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Zg(e) {
  const t = Jg(e);
  return t ? qg.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Qg(e, t = {}) {
  var O, $, V;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((W) => String((W == null ? void 0 : W.id) || "") === Hs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const W = String(((O = e.active) == null ? void 0 : O.selected_sticker_id) || "") === Hs;
    return {
      state: {
        ...e,
        stickers: n.filter((R, Y) => Y !== r),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), s = String(t.stateHash || ""), u = r >= 0 ? n[r] : null, f = !u || Number(u.source_link_id ?? -1) !== o || String(u.source_state_hash || "") !== s, d = Number(t.imageWidth || 0), v = Number(t.imageHeight || 0), y = d > 0 && v > 0, x = Math.max(1, d), S = Math.max(1, v), C = t.pose && typeof t.pose == "object" ? t.pose : {}, k = f ? C.hFOV_deg || (u == null ? void 0 : u.hFOV_deg) || 30 : (u == null ? void 0 : u.hFOV_deg) || C.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(k)));
  if (!f) {
    if (!y) return { state: e, changed: !1 };
    const W = Gs(_, x, S), R = Number((($ = u == null ? void 0 : u.initial_pose) == null ? void 0 : $.hFOV_deg) ?? _), Y = Gs(R, x, S), I = Number(((V = u == null ? void 0 : u.initial_pose) == null ? void 0 : V.vFOV_deg) ?? Y);
    return Math.abs(Number((u == null ? void 0 : u.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(I - Y) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((T, le) => le === r ? {
          ...T,
          vFOV_deg: W,
          initial_pose: T.initial_pose && typeof T.initial_pose == "object" ? { ...T.initial_pose, vFOV_deg: Y } : T.initial_pose
        } : T)
      },
      changed: !0
    };
  }
  const D = n.reduce((W, R) => Math.max(W, Number((R == null ? void 0 : R.z_index) || 0)), -1), z = {
    yaw_deg: Number(C.yaw_deg || 0),
    pitch_deg: Number(C.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: y ? Gs(_, x, S) : Number(C.vFOV_deg || (u == null ? void 0 : u.vFOV_deg) || _),
    rot_deg: Number(C.rot_deg ?? C.roll_deg ?? 0)
  }, X = {
    ...u || {},
    id: Hs,
    source_kind: Ug,
    source_link_id: o,
    source_state_hash: s,
    ...z,
    initial_pose: { ...z },
    visible: !0,
    z_index: D + 1
  }, N = r >= 0 ? n.map((W, R) => R === r ? X : W) : [...n, X];
  return { state: { ...e, stickers: N }, changed: !0 };
}
function xf(e) {
  const t = Ui(e).filter((s) => s && typeof s == "object").map((s) => ({
    type: "sticker",
    id: String(s.id || ""),
    z_index: Gc(s.z_index),
    item: s
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((s) => s && typeof s == "object").map((s) => ({
    type: "strokeGroup",
    id: String(s.actionGroupId || s.id || ""),
    z_index: Gc(s.z_index),
    item: s
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((s) => s && typeof s == "object" && String(s.layerKind || "paint") === "paint").map((s) => ({
    type: "rasterObject",
    id: String(s.id || ""),
    z_index: Gc(s.z_index),
    item: s
  }));
  return [...t, ...r, ...o].sort((s, u) => s.z_index - u.z_index);
}
function e0(e) {
  const t = _f(e), n = Xg(e, t), r = Ui(e).some((f) => f && f.visible !== !1), o = xf(e), s = t ? o.findIndex((f) => f.type === "sticker" && f.item === t) : -1, u = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Zg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: u,
    canDelete: !!t && !u,
    canMoveForward: s >= 0 && s < o.length - 1,
    canMoveBackward: s > 0
  };
}
function zw(e) {
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
function np(e, t) {
  const n = _f(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = zw(e), o = String(n.id || ""), s = xf(r), u = s.findIndex((d) => d.type === "sticker" && d.id === o);
  if (u < 0) return { state: e, changed: !1 };
  if (t === "front" && u === s.length - 1 || t === "back" && u === 0)
    return { state: e, changed: !1 };
  const [f] = s.splice(u, 1);
  return t === "front" ? s.push(f) : s.unshift(f), s.forEach((d, v) => {
    d.item.z_index = v;
  }), { state: r, changed: !0 };
}
function jw(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Hw(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Qg(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, s = String(o.stickerId || "").trim(), u = String(o.assetId || "").trim();
    if (!s || !u || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === s))
      return { state: e, changed: !1 };
    const d = xf(e).reduce((S, C) => Math.max(S, Number(C.z_index || 0)), -1), v = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: v,
      vFOV_deg: Gs(v, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Mg(s, zs(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: s }
        },
        changed: !0
      };
    const x = { id: s, asset_id: u, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [u]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], x],
        active: { ...e.active || {}, selected_sticker_id: s }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Ui(e).some((s) => String((s == null ? void 0 : s.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = _f(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((s) => s === n ? { ...s, locked: o } : s)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = Jg(n);
    return !o || !Zg(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((s) => s === n ? { ...s, ...o } : s)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return np(e, "front");
  if (t.type === "send-back") return np(e, "back");
  if (t.type === "delete-selected") {
    if (Xg(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), s = Ui({ ...e, stickers: o })[0], u = (s == null ? void 0 : s.id) == null ? null : String(s.id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: u }
    };
    return e.version !== 2 && (f.assets = jw(f)), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, s = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], u = e.version === 2 ? yf(n, Da) : n, f = {};
    if (s.forEach((d) => {
      const v = Number(o[d]);
      Number.isFinite(v) && Math.abs(v - Number(u[d] || 0)) > 1e-12 && (f[d] = v);
    }), !Object.keys(f).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = Jx(n, f);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const v = structuredClone(n);
      return wg(v, Da, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? v : y) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((d) => d === n ? { ...d, ...f } : d)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function Gw(e = {}) {
  return Lg({
    ...e,
    reduce: Hw,
    projectModel: e0
  });
}
const rp = 24;
function Kw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ip(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function Bw(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const s = t[r], u = t[o];
    s.y > e.y != u.y > e.y && e.x < (u.x - s.x) * (e.y - s.y) / (u.y - s.y || 1e-12) + s.x && (n = !n);
  }
  return n;
}
function Mu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => ip(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, s = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * s >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ip(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Bw(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function t0(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((s) => {
    r ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function n0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function la(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: J(n.x, -r, t.width + r),
    y: J(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function Ww(e) {
  const t = jo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(J(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * en * 0.5),
    tanY: Math.tan(J(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * en * 0.5)
  };
}
function Ci(e, t, n) {
  return ff(rl(
    rl(e.centerDir, il(e.right, t)),
    il(e.up, n)
  ));
}
function r0(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = Ww(e), r = la(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Ci(n, -n.tanX, n.tanY),
    Ci(n, n.tanX, n.tanY),
    Ci(n, n.tanX, -n.tanY),
    Ci(n, -n.tanX, -n.tanY)
  ].map((S) => la(S, t)), s = Array.from({ length: 4 }, (S, C) => {
    const k = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const D = _ / 28;
      let z, X;
      C === 0 ? (z = -n.tanX + 2 * n.tanX * D, X = n.tanY) : C === 1 ? (z = n.tanX, X = n.tanY - 2 * n.tanY * D) : C === 2 ? (z = n.tanX - 2 * n.tanX * D, X = -n.tanY) : (z = -n.tanX, X = -n.tanY + 2 * n.tanY * D);
      const N = la(Ci(n, z, X), t);
      N && k.push({ x: N.x, y: N.y });
    }
    return k;
  }), u = la(Ci(n, 0, n.tanY), t), f = la(
    Ci(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, u, f];
  if (d.some((S) => !S || !Number.isFinite(S.x) || !Number.isFinite(S.y)))
    return { visible: !1 };
  if (!d.some((S) => S.rawZ > 1e-4)) return { visible: !1 };
  const v = f.x - u.x, y = f.y - u.y, x = Math.hypot(v, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((S) => ({ x: S.x, y: S.y })),
    boundaryEdges: s,
    rotateStemBase: { x: u.x, y: u.y },
    rotateHandle: {
      x: u.x + v / x * rp,
      y: u.y + y / x * rp
    },
    visible: !0
  };
}
function op(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((u) => u && u.visible !== !1).map((u) => ({ item: u, geometry: r0(u, r) })).filter((u) => u.geometry.visible).sort((u, f) => {
    var d, v;
    return Number(((d = f.item) == null ? void 0 : d.z_index) || 0) - Number(((v = u.item) == null ? void 0 : v.z_index) || 0);
  }), s = o.find((u) => {
    var f;
    return String(((f = u.item) == null ? void 0 : f.id) || "") === String(t || "");
  });
  if (s) {
    const u = Mu(s.geometry, n);
    if (u.kind === "scale" || u.kind === "rotate") return { ...s, hit: u };
  }
  for (const u of o) {
    const f = Mu(u.geometry, n);
    if (f.kind !== "none") return { ...u, hit: f };
  }
  return null;
}
function Uw(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Rt(Math.atan2(r.x, r.z) * Sn),
    pitch_deg: Math.asin(J(r.y, -1, 1)) * Sn
  };
}
function Yw(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: J(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: J(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function Xw(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * Sn;
  let s = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (s = Math.round(s / 45) * 45), { ...e, rot_deg: s };
}
let ws = null;
function wf() {
  return ws || (ws = new Promise((e) => {
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
  }), ws);
}
function Wn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function qw(e, t = 1024) {
  const n = Math.max(1, Math.round(Wn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Wn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function Jw(e, t, n) {
  const r = Wn(t), o = Wn(n), s = e == null ? void 0 : e.bbox;
  if (!s || r < 1 || o < 1) return null;
  const u = Wn(s.u0), f = Wn(s.v0), d = Wn(s.u1), v = Wn(s.v1);
  if (d <= u || v <= f) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((u + d) * 0.5 + Wn(y.du)) * r,
    centerY: ((f + v) * 0.5 + Wn(y.dv)) * o,
    width: (d - u) * r,
    height: (v - f) * o,
    rotationRad: Wn(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Wn(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function Zw(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), o = (e == null ? void 0 : e.bbox) || {}, s = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    n,
    r.length,
    r.slice(-24),
    o.u0,
    o.v0,
    o.u1,
    o.v1,
    s.du,
    s.dv,
    s.rot_deg,
    s.scale
  ].join(":");
}
function Qw() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [s, u] of e) {
        if (e.size <= 16) break;
        u.settled && (u.image.onload = null, u.image.onerror = null, e.delete(s));
      }
  }
  function r(s, u) {
    let f = e.get(s);
    if (f)
      return e.delete(s), e.set(s, f), !f.settled && typeof u == "function" && f.listeners.add(u), f.image;
    const d = new Image();
    f = { image: d, listeners: new Set(typeof u == "function" ? [u] : []), settled: !1 }, e.set(s, f);
    const v = () => {
      f.settled = !0;
      const y = [...f.listeners];
      f.listeners.clear(), y.forEach((x) => x()), n();
    };
    return d.onload = v, d.onerror = v, d.src = s, n(), d;
  }
  function o(s, u, f, d = null) {
    if (!s || s.visible === !1 || String(s.layerKind || "paint") !== "paint") return null;
    const v = String(s.rasterDataUrl || "").trim(), y = Jw(s, u, f);
    if (!v.startsWith("data:") || !y) return null;
    const x = Zw(s, u, f), S = String((s == null ? void 0 : s.id) || "").trim() || x, C = t.get(S);
    if ((C == null ? void 0 : C.revision) === x) return { source: C.source, revision: x };
    const k = r(v, d), _ = Number(k.naturalWidth || k.width || 0), D = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || _ < 1 || D < 1) return null;
    const z = document.createElement("canvas");
    z.width = Math.max(1, Math.round(u)), z.height = Math.max(1, Math.round(f));
    const X = z.getContext("2d");
    return X ? (y.wrapOffsets.forEach((N) => {
      X.save(), X.translate(y.centerX + N, y.centerY), X.rotate(y.rotationRad), X.scale(y.scale, y.scale), X.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), X.restore();
    }), t.set(S, { revision: x, source: z }), { source: z, revision: x }) : null;
  }
  return {
    get: o,
    retain(s = []) {
      const u = new Set(Array.from(s, (f) => String(f || "").trim()).filter(Boolean));
      for (const f of t.keys())
        u.has(f) || t.delete(f);
    },
    dispose() {
      e.forEach((s) => {
        s.listeners.clear(), s.image.onload = null, s.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function eS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function tS(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function nS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function s(x) {
    if (!x) return;
    x.entry.listeners.delete(x);
    const S = r.get(x.owner);
    (S == null ? void 0 : S.get(x.key)) === x && S.delete(x.key);
  }
  function u(x, S, C, k) {
    if (!x || typeof k != "function" || C.settled) return;
    let _ = r.get(x);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(x, _));
    const D = _.get(S);
    if ((D == null ? void 0 : D.entry) === C) {
      D.callback = k;
      return;
    }
    s(D);
    const z = { owner: x, key: S, entry: C, callback: k };
    _.set(S, z), C.listeners.add(z);
  }
  function f(x, S) {
    x.settled || (x.settled = !0, x.image.onload = null, x.image.onerror = null, !S && n.get(x.key) === x && n.delete(x.key), [...x.listeners].forEach((C) => {
      s(C);
      try {
        C.callback(x.image, S);
      } catch {
      }
    }), d(o));
  }
  function d(x) {
    if (!(n.size <= x))
      for (const [S, C] of n) {
        if (n.size <= x) break;
        !C.settled || C.listeners.size > 0 || (C.image.onload = null, C.image.onerror = null, n.delete(S));
      }
  }
  function v(x, S, C, k = null) {
    const _ = String(S || ""), D = String(C || "");
    if (!_ || !D) return null;
    let z = n.get(_);
    if (z)
      n.delete(_), n.set(_, z);
    else {
      d(o - 1);
      const N = e || globalThis.Image;
      if (typeof N != "function") return null;
      const O = new N();
      z = { key: _, image: O, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, z), O.onload = () => f(z, !0), O.onerror = () => f(z, !1), O.src = D;
    }
    return z.settled || z.image.complete && Number(z.image.naturalWidth || z.image.width || 0) > 0 || u(x, _, z, k), z.image;
  }
  function y(x) {
    const S = r.get(x);
    S && ([...S.values()].forEach(s), r.delete(x), d(o));
  }
  return { get: v, disposeOwner: y };
}
function dl(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function Fl(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = dl(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function ap(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    dl(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function rS(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    dl(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = dl(e);
  Object.keys(r).forEach((o) => {
    r[o] = !0;
  });
}
function sp(e, t, n, r = ["erp_image", "bg_erp"]) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const u = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((u == null ? void 0 : u.name) || ""));
}
function iS(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (s) => String((s == null ? void 0 : s.src) || (s == null ? void 0 : s.url) || s || "").trim();
  for (const s of t) {
    const u = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[s], e == null ? void 0 : e[s]];
    for (const f of u)
      if (Array.isArray(f))
        for (const d of f) {
          const v = r(d);
          if (v && (/\.mp4(\?|$)/i.test(v) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return v;
        }
  }
  return "";
}
function oS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var k;
  const r = ((k = e == null ? void 0 : e.createElement) == null ? void 0 : k.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let s = !1, u = 0;
  const f = typeof r.requestVideoFrameCallback == "function", d = () => {
    s || !f || u || r.paused || r.ended || (u = r.requestVideoFrameCallback(() => {
      u = 0, !s && (o(), d());
    }));
  }, v = () => {
    if (!s) {
      o();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, y = () => o(), x = () => {
    o(), d();
  }, S = () => o();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", v, { once: !0 }), r.addEventListener("canplay", v, { once: !0 }), f || r.addEventListener("timeupdate", y), r.addEventListener("play", x), r.addEventListener("pause", S), r.src = t, r.load(), { video: r, destroy: () => {
    var _, D;
    s || (s = !0, u && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(u), u = 0), r.removeEventListener("loadedmetadata", v), r.removeEventListener("canplay", v), r.removeEventListener("timeupdate", y), r.removeEventListener("play", x), r.removeEventListener("pause", S), r.pause(), (_ = r.removeAttribute) == null || _.call(r, "src"), (D = r.load) == null || D.call(r));
  } };
}
const hl = "state_json";
function Xr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function aS(e) {
  var u, f;
  const t = Xr(e, hl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = _g(n, {
    coverage: (u = Xr(e, "coverage")) == null ? void 0 : u.value
  }), o = jg(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const s = JSON.stringify(o.state);
  return t.value = s, (f = t.callback) == null || f.call(t, s), !0;
}
function Sf(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Xr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var u, f, d, v, y, x, S, C, k;
    const s = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || f.call(u), (v = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || v.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (S = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || S.call(x, !0, !0), (k = (C = t == null ? void 0 : t.canvas) == null ? void 0 : C.setDirty) == null || k.call(C, !0, !0), s;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function sS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function lp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function lS(e) {
  var y, x, S, C, k, _;
  if (!e) return;
  const t = Xr(e, "coverage"), n = Xr(e, "bg_color"), r = Xr(e, hl), o = Xr(e, "sticker_state");
  if (!t || !n || !r) return;
  const s = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && sS(s) && (lp(u) || u === ""))) return;
  let v = "360";
  if (lp(u))
    try {
      v = String(Vn((y = JSON.parse(u)) == null ? void 0 : y.coverage));
    } catch {
      v = "360";
    }
  t.value = v, (x = t.callback) == null || x.call(t, v), n.value = s, (S = n.callback) == null || S.call(n, s), r.value = u, (C = r.callback) == null || C.call(r, u), o && (o.value = f, (k = o.callback) == null || k.call(o, f)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Ks(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var s, u;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.element) != null && s.style && (r.element.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function Nu(e, t, n) {
  var s, u;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (s = o.element) != null && s.style && (o.element.style.display = ""), (u = o.parentEl) != null && u.style && (o.parentEl.style.display = "");
    const f = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function cS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, s]) => {
        n.get(o) === s && n.delete(o);
      });
    }
}
function pa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, s = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), u = s.catch(() => {
  });
  e.__panoStickerOperationTail = u, e.__panoPendingStickerUploads.set(t, s);
  const f = () => {
    var d, v;
    ((v = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : v.call(d, t)) === s && e.__panoPendingStickerUploads.delete(t);
  };
  return s.then(f, f), u.then(() => {
    e.__panoStickerOperationTail === u && (e.__panoStickerOperationTail = null);
  }), s;
}
async function i0(e, t = {}) {
  var r;
  await cS(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function uS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await i0(e), n ? n.apply(this, r) : this.value;
  };
}
function fS(e) {
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
function dS(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Kc(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: s,
  attachCutout: u,
  enableStickersPreview: f,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function v(y) {
    var C;
    const x = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === x) return;
    fS(y), Sf(y, t), Ks(y, hl);
    const S = Xr(y, hl);
    if (uS(y, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const k = S.callback;
      S.callback = (_) => {
        var z;
        const D = k ? k(_) : void 0;
        return (z = y.setDirtyCanvas) == null || z.call(y, !0, !1), D;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = d;
      const k = Xr(y, "bg_color");
      !d && k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (C = k.callback) == null || C.call(k, "#00ff00")), Nu(y, r, () => o(y, "stickers")), f && (s(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && Ks(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
      return;
    }
    Nu(y, r, () => o(y, "cutout")), u(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && Ks(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[y];
    e.prototype[y] = function() {
      const S = x ? x.apply(this, arguments) : void 0;
      return y === "onNodeCreated" && n === "PanoramaCutout" && aS(this), y === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && lS(this), (y === "onNodeCreated" || this.widgets) && v(this), S;
    };
  }
}
function hS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return dS(this), r;
  };
}
function pS(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const s = () => {
    const u = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !u && f < 40) {
      o(s);
      return;
    }
    Sf(e, t);
    const d = (v = e) => n(v, "stickers", { readOnly: !0, hideSidebar: !1 });
    Nu(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Ks(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(s);
}
function mS({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  requestFrame: s,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, d) {
      const v = String((d == null ? void 0 : d.name) || "");
      (v === "PanoramaStickers" || v === "Panorama Stickers") && Kc(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), v === "PanoramaStickersNode" && Kc(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (v === "PanoramaCutout" || v === "Panorama Cutout") && Kc(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), ol(v) && hS(f);
    },
    nodeCreated(f) {
      const d = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      Sf(f, e), ol(d) && pS(f, { app: e, openEditor: t, attachPreview: o, requestFrame: s });
    }
  };
}
const gS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Pr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : gS.test(String(e.name || "")) : !1;
}
function kf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Pr(n)) : !1;
}
function yS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var v, y, x;
    (v = d == null ? void 0 : d.preventDefault) == null || v.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (x = d == null ? void 0 : d.stopImmediatePropagation) == null || x.call(d);
  }, s = (d) => {
    if (kf(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, u = (d) => {
    var v;
    d != null && d.relatedTarget && ((v = e.contains) != null && v.call(e, d.relatedTarget)) || n(!1);
  }, f = (d) => {
    var y;
    const v = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((x) => Pr(x));
    if (!v) {
      n(!1);
      return;
    }
    o(d), n(!1), r(v);
  };
  return e.addEventListener("dragenter", s, !0), e.addEventListener("dragover", s, !0), e.addEventListener("dragleave", u, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", s, !0), e.removeEventListener("dragover", s, !0), e.removeEventListener("dragleave", u, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function ma(e, t = {}) {
  var u, f, d, v;
  if (!Pr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (u = globalThis.URL) == null ? void 0 : u.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), o = t.revokeObjectURL || ((v = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : v.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const s = r(e);
  try {
    const y = await new Promise((x, S) => {
      const C = new n();
      C.onload = () => x(C), C.onerror = () => S(new Error("image load failed")), C.src = s;
    });
    return {
      image: y,
      width: Math.max(1, Number(y.naturalWidth || y.width || 1)),
      height: Math.max(1, Number(y.naturalHeight || y.height || 1))
    };
  } finally {
    o == null || o(s);
  }
}
async function Ti(e, { fetchApi: t } = {}) {
  if (!Pr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const o = await r.json(), s = String((o == null ? void 0 : o.name) || "").trim();
  if (!s) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: s,
    subfolder: String((o == null ? void 0 : o.subfolder) || "panorama_stickers"),
    storage: String((o == null ? void 0 : o.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const ga = /* @__PURE__ */ new WeakMap();
function o0(e, t) {
  if (!e || typeof t != "function") return () => {
  };
  let n = ga.get(e);
  n || (n = [], ga.set(e, n));
  const r = { handler: t };
  n.push(r);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = ga.get(e);
    if (!s) return;
    const u = s.indexOf(r);
    u >= 0 && s.splice(u, 1), s.length === 0 && ga.delete(e);
  };
}
function ya(e, ...t) {
  const n = ga.get(e), r = n == null ? void 0 : n[n.length - 1];
  return r ? (r.handler(...t), !0) : !1;
}
const cp = /* @__PURE__ */ new WeakSet(), up = /* @__PURE__ */ new WeakSet();
let fp = 0;
function Pu(e) {
  if (!e || typeof e != "object" || up.has(e)) return e;
  const t = String(e.type || "preview");
  return fp += 1, e.type = `${t}:pano-${fp}`, up.add(e), e;
}
function pl(e) {
  if (!e || typeof e != "object" || cp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, cp.add(e), e;
}
function a0(e, t) {
  var r, o;
  if (!t || ((o = (r = pl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function bS({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, s = !1;
  return { schedule: (d) => s || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const v = o;
    o = null, s || n == null || n(v);
  }), !0), dispose: () => {
    s || (s = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Dt } = Os, Mf = nS();
function Au() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Os == null ? void 0 : Os.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const vS = "pano_suite.ui_settings.v1", _S = 120;
function dp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(vS)) || "").trim();
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
function xS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ca(e) {
  var n, r, o, s, u;
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
    styleWidth: String(((o = e.style) == null ? void 0 : o.width) || ""),
    stylePos: String(((s = e.style) == null ? void 0 : s.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function wS() {
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
function Cu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, o) => {
    const s = Number(r), u = Number(o);
    return !Number.isFinite(s) || !Number.isFinite(u) ? null : [s, u];
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
function s0(e) {
  const t = Cu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function SS(e, t, n) {
  s0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Iu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Nf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function l0(e) {
  return ol(Nf(e));
}
function hp(e = null) {
  var s, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (s = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, o].join("|");
}
function c0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Iu(e);
      this.activeBackend = s;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (s === o && s !== "none" && u === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      s !== "none" && Bs(e), lk(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Iu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Bs(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Bs(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function kS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Bs(e, t = {}) {
  var r, o, s, u, f;
  if (!e) return;
  Eu.unregister(e), kS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const n = e.__panoDomPreview;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (o = e.__panoLegacyRestore) == null || o.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, n) {
    try {
      (s = n.state) != null && s.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((v) => {
      if (v === (n == null ? void 0 : n.widget)) return !0;
      const y = String((v == null ? void 0 : v.name) || ""), x = String((v == null ? void 0 : v.type) || ""), S = Au();
      return y === S || x === S || y === "pano_preview" || x === "pano_preview" ? !0 : y === "preview" && x === "pano_preview";
    }).forEach((v) => BS(e, v));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function MS(e, t = "#00ff00") {
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
    const o = e.trim();
    if (!o) return n;
    try {
      r = JSON.parse(o);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const o = r;
    return !o || typeof o != "object" || Array.isArray(o) ? n : {
      ...n,
      ...o,
      coverage: Number(o.coverage) === 180 ? 180 : 360,
      assets: o.assets && typeof o.assets == "object" ? o.assets : {},
      stickers: Array.isArray(o.stickers) ? o.stickers : [],
      shots: Array.isArray(o.shots) ? o.shots : [],
      active: o.active && typeof o.active == "object" ? o.active : n.active
    };
  } catch {
    return n;
  }
}
function NS(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Oo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function ir(e) {
  var f, d;
  const t = NS(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = Oo(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), o = Number(((d = Oo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, s = e.__panoStateCache;
  if (s && s.source === t && s.liveVersion === n && s.bg === r && s.coverage === o)
    return s.parsed;
  const u = e.__panoSceneStateV2 && typeof t == "string" ? xg(t, { backgroundColor: r, coverage: o, active: Pg(e) }) : MS(t, r);
  return u.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: u }, u;
}
function Oo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function u0(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function PS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function f0(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function d0(e, t, n = null) {
  var o, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = PS(e == null ? void 0 : e.graph, n)), r;
}
function AS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function h0(e, t = []) {
  const n = AS(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function pp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ml(e, t) {
  const n = pp(e), r = pp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function CS(e, t = ["erp_image", "bg_erp"]) {
  var d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const o = h0(e, t).map((v) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(v))).filter((v) => v >= 0), s = n.map((v, y) => ({ input: v, idx: y })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), u = [.../* @__PURE__ */ new Set([...o, ...s])], f = [];
  for (const v of u) {
    const y = d0(e, v);
    if ((y == null ? void 0 : y.id) != null) {
      f.push(String(y.id));
      continue;
    }
    const x = (d = n[v]) == null ? void 0 : d.link;
    if (x == null) continue;
    const S = u0(e == null ? void 0 : e.graph, x), { originId: C } = f0(S);
    C != null && f.push(String(C));
  }
  return [...new Set(f)];
}
const Eu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Wt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var v, y, x, S, C;
        if (!s) return;
        const u = ml(r, s == null ? void 0 : s.id);
        CS(s, ["erp_image", "bg_erp"]).some((k) => ml(r, k)), !(String(s.__panoPreviewMode || "") === "cutout" && !u) && (p0(s), (y = (v = s.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || y.call(v), (x = s.setDirtyCanvas) == null || x.call(s, !0, !0), (C = (S = s.graph) == null ? void 0 : S.setDirtyCanvas) == null || C.call(S, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || ""), void 0);
      });
    }, Wt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Wt) != null && e.removeEventListener) || (Wt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function gl(e) {
  var s;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((s = Wt) == null ? void 0 : s.apiURL) == "function" ? Wt.apiURL(o) : o;
}
function IS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function ES(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: o, subfolder: s };
}
function OS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function TS(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (IS(t)) return [t];
  const { filename: n, subfolder: r } = ES(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((s) => gl({
    filename: n,
    subfolder: r,
    type: s
  }));
  return OS([...o, t]);
}
function FS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? gl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function La(e) {
  const t = Dt == null ? void 0 : Dt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (ml(s, o)) return t.get(s);
  } else {
    const s = Object.keys(t);
    for (const u of s)
      if (ml(u, o)) return t[u];
  }
  return null;
}
function Ou(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || La(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Mr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Mr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return gl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Mr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : gl(e);
}
function Tu(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function mp(e) {
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
function Pf(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const o = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", s = new URL(n, o);
    return t > 0 && s.searchParams.set("pano_rev", String(t)), s.toString();
  } catch {
    const o = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${o}pano_rev=${t}` : n;
  }
}
function DS(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => t.push(u));
  }, o = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), o(s.output, u + 1), o(s.ui, u + 1), o(s.data, u + 1), o(s.result, u + 1));
  };
  return o(e, 0), t;
}
function LS(e, t) {
  try {
    e.__panoOwnOutputRev = eS(e.__panoOwnOutputRev);
    const n = DS(t);
    let r = "";
    for (const o of n)
      if (r = Mr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Pf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function To(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function RS(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!Fl(e, "background"))
    return To(e), null;
  const o = La(r), s = iS(o, t, Mr);
  if (!s)
    return To(e), null;
  const u = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Pf(s, u), d = `${t.join("|")}:${f}`, v = e.__panoOwnOutputVideoCache;
  if (v != null && v.video && v.key === d) return v.video;
  To(e);
  const y = oS({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function $S(e, t = []) {
  var v, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = h0(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), s = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...o, ...s])];
  for (const x of u) {
    const S = n[x], C = S == null ? void 0 : S.link;
    if (C == null) continue;
    const k = u0(e.graph, C), { originId: _, originSlot: D } = f0(k);
    if (_ == null) continue;
    const z = d0(e, x, _);
    if (!z) continue;
    const X = Number(D || 0), N = La((z == null ? void 0 : z.id) ?? _), O = Array.isArray(N == null ? void 0 : N.images) ? N.images : [];
    if (O.length) {
      const R = [];
      X >= 0 && X < O.length && R.push(O[X]), R.push(...O);
      for (const Y of R) {
        const I = Mr(Y);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (Dt == null ? void 0 : Dt.getNodeImageUrls) == "function" ? Dt.getNodeImageUrls(z) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const R = [];
      X >= 0 && X < $.length && R.push($[X]), R.push(...$);
      for (const Y of R) {
        const I = Mr(Y);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const V = Array.isArray(z == null ? void 0 : z.imgs) ? z.imgs : [];
    if (V.length) {
      const R = [];
      X >= 0 && X < V.length && R.push(V[X]), R.push(...V);
      for (const Y of R) {
        const I = Mr(Y);
        if (I)
          return String((S == null ? void 0 : S.name) || ""), { src: I, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const W = (v = z == null ? void 0 : z.widgets) == null ? void 0 : v.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (W) {
      let R = Mr(W.value);
      if (R && !R.includes("/") && !R.includes(":") && (z.comfyClass === "LoadImage" || z.type === "LoadImage") && (R = Wt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((S == null ? void 0 : S.name) || ""), { src: R, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = Fl(e, "background") ? La(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((y = f == null ? void 0 : f.ui) == null ? void 0 : y.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const x of d) {
      const S = Mr(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function VS(e, t = [], n = {}) {
  const r = $S(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const s = TS(o);
  if (!s.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return u && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const v = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = v, e.__panoLinkedInputImageCache.set(f, y);
  let x = -1;
  const S = () => {
    var k, _, D, z;
    if (x += 1, x >= s.length) {
      if (((_ = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : _.call(k, f)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (z = (D = e.__panoLinkedInputImageCache) == null ? void 0 : D.delete) == null || z.call(D, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), s.length;
      return;
    }
    const C = s[x];
    y.pendingResolvedSrc = C, v.src = C;
  };
  return v.onload = () => {
    var C, k, _;
    ((k = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.get) == null ? void 0 : k.call(C, f)) === y && y.pendingImg === v && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || v.src || ""), y.img = v, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || v.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, v.onerror = (C) => {
    var k, _, D, z;
    if (x + 1 < s.length) {
      S();
      return;
    }
    if (((_ = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : _.call(k, f)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (z = (D = e.__panoLinkedInputImageCache) == null ? void 0 : D.delete) == null || z.call(D, f);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((C == null ? void 0 : C.type) || "error");
  }, S(), u && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : v;
}
function zS(e, t = [], n = null, r = {}) {
  const o = VS(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function p0(e) {
  var t, n, r, o;
  if (e) {
    Mf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    try {
      (o = (r = e.__panoPreviewImageCache) == null ? void 0 : r.clear) == null || o.call(r);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, To(e), e.__panoWrappedErpCache = null;
  }
}
function jS(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, To(e), e.__panoWrappedErpCache = null;
  }
}
function HS(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function m0(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ss(e, t, n = "") {
  const r = m0(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < _S ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function gp(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), s = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / o, f = r / s, d = Math.min(u, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function GS(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), s = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), v = Math.max(Math.round(34 * n), f + Math.round(14 * n)), y = r + (s - d) * 0.5, x = o + (u - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, x, d, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, x + v * 0.5 + 0.5), e.restore();
}
function Bc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function KS(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const o = t.find((s) => String((s == null ? void 0 : s.id) || "") === n);
    if (o) return o;
  }
  return t[0] || null;
}
function BS(e, t) {
  return a0(e, t);
}
function Fu(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let s = FS(n);
  if (!s && (r != null && r.external)) {
    if (!Fl(e, "external-sticker")) return null;
    const C = e.__panoLastExecutedOutput || La(e == null ? void 0 : e.id), k = ((S = C == null ? void 0 : C.ui) == null ? void 0 : S.pano_sticker_input_images) || (C == null ? void 0 : C.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(k) ? k : [k])
      if (s = Mr(_), s) break;
  }
  if (!s) return null;
  const u = Ou(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(u ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, v = r != null && r.external ? Pf(s, d) : s, y = tS(s, f, d);
  return Mf.get(e, y, v, (C, k) => {
    var _, D;
    k && (r != null && r.external && ya(e, "image-loaded"), (D = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || D.call(_));
  }) || null;
}
function WS(e, t) {
  var x, S, C, k;
  const n = JS(e, t), r = ZS(t), o = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) ? t.painting.groups : [], s = new Map(
    o.filter((_) => _ && typeof _ == "object").map((_) => [String((_ == null ? void 0 : _.actionGroupId) || (_ == null ? void 0 : _.id) || "").trim(), Number((_ == null ? void 0 : _.z_index) || 0)])
  ), u = n ? r.map((_) => {
    const D = n.getGroupDisplayCanvas(_);
    return D ? {
      id: `paint_group:${_}`,
      source: D,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${_}`,
      zIndex: Number(s.get(_) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (k = (C = e.__panoRasterObjectSurfaceCache) == null ? void 0 : C.retain) == null || k.call(C, []), u;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = Qw()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, D;
    return (D = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : D.call(_);
  });
  const d = qw(t == null ? void 0 : t.output_preset), v = f.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(v);
  const y = f.map((_) => {
    const D = e.__panoRasterObjectSurfaceCache.get(
      _,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return D ? {
      id: `raster:${String((_ == null ? void 0 : _.id) || "")}`,
      source: D.source,
      revision: D.revision,
      zIndex: Number((_ == null ? void 0 : _.z_index) || 0),
      opacity: 1,
      visible: (_ == null ? void 0 : _.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...u, ...y];
}
function US(e, t, n, r) {
  var s, u, f, d, v, y;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const x = r.convertEventToCanvasOffset(t);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = XS(e, t, r);
  return o || null;
}
function YS(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, s = (x = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : x.call(o), u = (t == null ? void 0 : t.ds) || ((S = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : S.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(u.offset) ? u.offset : [0, 0], v = (n - Number(s.left || 0)) / f - Number(d[0] || 0), y = (r - Number(s.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(v) || !Number.isFinite(y) ? null : { x: v, y };
}
function XS(e, t, n) {
  var o, s;
  const r = YS(t, n || (Dt == null ? void 0 : Dt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function qS(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function JS(e, t) {
  var v, y, x, S, C, k, _, D, z, X, N, O;
  const n = (y = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : y.strokes, r = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, o = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!o && !s) return null;
  const u = qS(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = hu(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((C = t == null ? void 0 : t.painting) == null ? void 0 : C.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== d.paint || ((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.mask) !== d.mask || ((z = e.__panoPreviewPaintRevision) == null ? void 0 : z.groups) !== d.groups || ((X = e.__panoPreviewPaintRevision) == null ? void 0 : X.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((O = t == null ? void 0 : t.painting) == null ? void 0 : O.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function ZS(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function QS(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function ek(e, t, n) {
  const r = r0(t, n);
  r.visible && (e.save(), t0(e, r.boundaryEdges, { selected: !0 }), n0(e, r, { accent: Kw(t) }), e.restore());
}
function Du(e, t, n) {
  return Og(ul(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function yp(e, t, n) {
  var s;
  ((s = e.__panoSurfaceScene) == null ? void 0 : s.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Ta({ ...t, painting: null }) });
  const r = (u) => {
    var d;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2)
      f = Fu(e, u.id, kg(u.source), { external: u.source.kind === "port" });
    else {
      const v = u.type === "external_image" || u.source_kind === "external_image", y = String(u.asset_id || "") || (v ? String(u.id || "") : "");
      f = Fu(e, y, (d = t.assets) == null ? void 0 : d[u.asset_id], { external: v });
    }
    return Tu(f) ? { media: f, revision: mp(f) } : null;
  }, o = WS(e, t).filter((u) => u.visible !== !1).map((u) => ({ id: u.id, media: u.source, revision: u.revision, opacity: u.opacity, zIndex: u.zIndex }));
  return {
    background: Tu(n) ? { media: n, revision: mp(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Tg(e.__panoSurfaceScene.sceneState, Da, t.stickers, { media: r, paintLayers: o })
  };
}
function tk(e, t, n) {
  var N, O, $, V, W, R, Y;
  const r = String(e.__panoPreviewMode || "stickers");
  m0(e, r);
  const o = ir(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, ($ = (O = (N = e.__panoCutoutNodeSurface) == null ? void 0 : N.session) == null ? void 0 : O.refresh) == null || $.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (R = (W = (V = e.__panoStickersNodeSurface) == null ? void 0 : V.session) == null ? void 0 : W.refresh) == null || R.call(W));
  const s = t.parentElement, u = Math.max(64, Math.round(Number((s == null ? void 0 : s.clientWidth) || t.clientWidth || 0))), f = Math.max(64, Math.round(Number((s == null ? void 0 : s.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== u || t.height !== f) && (t.width = u, t.height = f);
  const v = { x: 0, y: 0, w: u, h: f };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, u, f);
  const y = RS(
    e,
    ["pano_input_videos"],
    () => {
      var I, T;
      return (T = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : T.call(I);
    }
  ) || zS(
    e,
    ["erp_image", "bg_erp"],
    () => {
      var I, T;
      return (T = (I = e.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : T.call(I);
    },
    { preserveReadyWhilePending: !1 }
  ), x = Tu(y);
  let S = null;
  const C = (I, T) => {
    S || (S = yp(e, o, y));
    const le = n.render({ width: I.w, height: I.h, camera: T, ...S });
    return le && d.drawImage(le.canvas, le.x, le.y, le.width, le.height, I.x, I.y, I.w, I.h), !!le;
  };
  if (r === "cutout") {
    const I = KS(o), T = QS(y), le = I ? J(ei(I).aspect, 0.1, 10) : x ? J(Number(T.width / T.height), 0.05, 20) : 1, U = bf(v, le);
    e.__panoCutoutNodeFrame = U;
    let Q = "none";
    const se = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (I)
      if (y && !x)
        Q = "loading";
      else if (x) {
        const Me = dw({ width: u, height: f }, U, I);
        [
          !Me.fallback || C(Me.fallback.rect, js(Me.fallback.shot)),
          C(Me.rect, js(Me.shot)),
          !Me.fallback || C(U, js(I))
        ].every(Boolean) || (Q = "loading");
      } else
        Q = "empty";
    else {
      const Me = e.__panoLastCutoutShot;
      Me ? (e.__panoPreviewView = zg(Me, { width: u, height: f }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), x ? C(v, ul(e.__panoPreviewView, u, f)) || (Q = "loading") : y ? Q = "loading" : Q = "empty";
    }
    x || n.release(), n.failed && Q === "loading" && (Q = "none"), I && (e.__panoLastCutoutShot = { ...I }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, u, f), d.rect(U.x, U.y, U.w, U.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(U.x + 0.5, U.y + 0.5, Math.max(0, U.w - 1), Math.max(0, U.h - 1)), d.restore()), Q === "loading" ? (Bc(e, !1), Ss(e, !0, se)) : Q === "empty" ? (Bc(e, !0), Ss(e, !1, "")) : (Bc(e, !1), Ss(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || x) && (S = yp(e, o, y), !S.background && !S.layers.length ? (n.release(), k = !0) : k = C(v, ul(e.__panoPreviewView, u, f)));
  const _ = !k && !n.failed;
  Ss(e, _, _ ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), _ && GS(d, v, gp(t, v));
  const D = Du(e, u, f);
  !y && k && nk(d, D, gp(t, v));
  const z = String(((Y = o == null ? void 0 : o.active) == null ? void 0 : Y.selected_sticker_id) || ""), X = k ? ku(o).find((I) => String((I == null ? void 0 : I.id) || "") === z && (I == null ? void 0 : I.visible) !== !1) : null;
  X && ek(d, X, D);
}
function bp(e, t, n, r, o = 1) {
  let s = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const u of t) {
    const f = n.project(u);
    if (f.z <= 1e-4) {
      s = !1;
      continue;
    }
    s ? e.lineTo(f.x, f.y) : (e.moveTo(f.x, f.y), s = !0);
  }
  e.stroke();
}
function nk(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let f = -75; f <= 75; f += 15) {
    const d = [];
    for (let v = -180; v <= 180; v += 4) d.push(On(v, f));
    bp(e, d, t, f === 0 ? o : r, f === 0 ? 1.5 : 1);
  }
  for (let f = -180; f <= 180; f += 15) {
    const d = [];
    for (let v = -89; v <= 89; v += 4) d.push(On(f, v));
    bp(e, d, t, r, f % 90 === 0 ? 1.3 : 1);
  }
  const s = [
    { name: "Front", dir: On(0, 0) },
    { name: "Right", dir: On(90, 0) },
    { name: "Back", dir: On(180, 0) },
    { name: "Left", dir: On(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const u = Math.max(9, Math.round(11 * n));
  e.font = `500 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", s.forEach((f) => {
    const d = t.project(f.dir);
    d.z > 1e-4 && e.fillText(f.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Lu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function rk(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), s = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && s >= r.height - n;
}
function Kn(e, t) {
  return rk(e, t) ? !1 : (Lu(e), !0);
}
function vp() {
  var n;
  const e = (n = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function ik(e) {
  var n;
  if (!e) return;
  const t = (n = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function ok(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !s0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function ak(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    e.__panoBootMinHeightTimer = null, (s = e == null ? void 0 : e.__panoDomPreview) != null && s.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function _p(e, t = null, n = 0, r = 0, o = !0) {
  const s = Math.max(0, Number(r || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(s, Math.max(0, Number(n || 0))) : s;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(s, Math.max(0, Number(n || 0))) : s > 0 ? s : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), o && sk(e, 180, t);
    }
  };
}
function sk(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ua(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function lk(e, t = {}) {
  var Dr;
  const n = t.__allowStandalone === !0, r = l0(e);
  if (r && !n) {
    Nf(e);
    return;
  }
  r && ok(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const u = {
    signature: hp(e)
  }, f = "dom", d = u.signature || hp(e);
  if (Number(e.__panoRebindGeneration || 0), Iu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Cu(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (Dr = e.__panoDomPreview) != null && Dr.widget || (e.__panoLegacyPreviewHooked && Bs(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const v = t.noPreview === !0, y = v ? 0 : 56, x = v ? 0 : lw, S = document.createElement("div");
  if (wS(), S.className = "pano-node-preview-dom", S.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), v && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
    "width:100%",
    v ? "height:auto" : "height:100%",
    x > 0 ? `min-height:${x}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), v) {
    const H = pl(Pu(
      e.addDOMWidget(Au(), "preview", S, _p(e, null))
    ));
    ua(e), e.__panoDomPreview = { widget: H, root: S, requestDraw: () => {
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
  const k = document.createElement("canvas");
  k.style.cssText = [
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
  ].join(";"), _.textContent = "Connect ERP image", C.appendChild(k), C.appendChild(_), S.appendChild(C);
  const D = Wm(S), z = document.createElement("div");
  z && (z.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", z.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(z)), SS(e, 120, 120), ua(e);
  let X = null;
  try {
    ak(e, y, () => {
      var H, ke;
      return (ke = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : ke.call(H);
    }), X = pl(Pu(e.addDOMWidget(
      Au(),
      "preview",
      S,
      _p(
        e,
        () => {
          var H, ke;
          return (ke = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : ke.call(H);
        },
        y,
        x,
        !1
      )
    )));
  } catch {
    return;
  }
  const N = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, O = () => {
    N.destroyed || (N.needsDraw = !0, !N.inTick && !N.raf && (N.raf = requestAnimationFrame(mn)));
  }, $ = Dg(O), V = /* @__PURE__ */ zo(o ? { ...e0(ir(e)), importing: !1, dropActive: !1, viewUnavailable: !1 } : {
    ...$g(ir(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((H) => ({ value: H, label: H }))
  });
  let W = null;
  const R = (o ? Gw : pw)({
    readState: () => ir(e),
    publishLiveState: (H) => {
      H ? (W = H, e.__panoLiveStateOverride = H) : (e.__panoLiveStateOverride === W && (e.__panoLiveStateOverride = null), W = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, O();
    },
    commitState: (H) => {
      var Fe, Ke, q, zt;
      const ke = Oo(e, "state_json");
      if (!ke) return;
      Ag(e, H.active);
      const Ce = Cg(e, H);
      ke.value = Ce, (Fe = ke.callback) == null || Fe.call(ke, Ce), e.__panoStateCache = null, (Ke = e.setDirtyCanvas) == null || Ke.call(e, !0, !0), (zt = (q = e.graph) == null ? void 0 : q.setDirtyCanvas) == null || zt.call(q, !0, !0);
    },
    onChange: (H) => Object.assign(V, H)
  }), Y = (H = "sync", ke = null) => {
    if (!o || e.__panoSceneStateV2 || !R || R.hasGestureChanges()) return !1;
    const Ce = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((Dn) => String((Dn == null ? void 0 : Dn.name) || "") === "sticker_image") : null, Fe = (Ce == null ? void 0 : Ce.link) ?? null;
    if (Fe == null)
      return R.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Fl(e, "external-sticker")) return !1;
    const Ke = Ou(e, "pano_sticker_input_pose", ke), q = Array.isArray(Ke) ? Ke[0] : Ke, zt = String(Ou(e, "pano_sticker_input_state_hash", ke) ?? ""), Lt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, bt = ir(e), an = (Array.isArray(bt == null ? void 0 : bt.stickers) ? bt.stickers : []).find((Dn) => String((Dn == null ? void 0 : Dn.id) || "") === "sticker_image_1"), Xt = Fu(e, "sticker_image_1", null, { external: !0 }), ni = q && typeof q == "object" ? q : an || { yaw_deg: Lt.yaw, pitch_deg: Lt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return R.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: zt,
        pose: ni,
        imageWidth: Number((Xt == null ? void 0 : Xt.naturalWidth) || (Xt == null ? void 0 : Xt.width) || 0),
        imageHeight: Number((Xt == null ? void 0 : Xt.naturalHeight) || (Xt == null ? void 0 : Xt.height) || 0)
      }
    });
  }, I = o ? o0(e, Y) : () => {
  };
  let T = 0;
  const le = async (H) => {
    if (!o || !R || !Pr(H)) return !1;
    const ke = `asset_${Math.random().toString(16).slice(2, 10)}`, Ce = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    T += 1, V.importing = !0;
    const Ke = pa(e, `add:${ke}`, async () => {
      const q = await ma(H), zt = await Ti(H, {
        fetchApi: (Lt, bt) => Wt.fetchApi(Lt, bt)
      });
      return E(), R.apply({
        type: "add-sticker",
        value: {
          stickerId: Ce,
          assetId: ke,
          asset: zt,
          imageWidth: q.width,
          imageHeight: q.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await Ke;
    } catch {
      return !1;
    } finally {
      T = Math.max(0, T - 1), V.importing = T > 0, O();
    }
  };
  let U = null, Q = null, se = null, Me = !1;
  const de = () => {
    var H;
    return se && (clearTimeout(se), se = null), Me ? (Me = !1, ((H = R == null ? void 0 : R.commitGesture) == null ? void 0 : H.call(R)) ?? !1) : !1;
  }, E = () => {
    var Fe, Ke, q;
    const H = de(), ke = (U == null ? void 0 : U.pointerId) ?? (Q == null ? void 0 : Q.pointerId);
    if (U = null, Q = null, ke != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, ke) && ((Ke = k.releasePointerCapture) == null || Ke.call(k, ke));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Ce = ((q = R == null ? void 0 : R.commitGesture) == null ? void 0 : q.call(R)) ?? !1;
    return H || Ce;
  }, Ge = () => {
    var Fe, Ke, q;
    const H = de(), ke = U == null ? void 0 : U.pointerId;
    if (U = null, ke != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, ke) && ((Ke = k.releasePointerCapture) == null || Ke.call(k, ke));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Ce = ((q = R == null ? void 0 : R.cancelGesture) == null ? void 0 : q.call(R)) ?? !1;
    return H || Ce;
  }, G = () => E();
  R && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(G));
  let Le = null, rt = !1;
  if (z && R)
    try {
      wf(), Le = of(o ? Vw : Ow, {
        model: V,
        onAction: (H) => {
          var Fe, Ke;
          if ((H == null ? void 0 : H.type) === "open-editor") {
            E(), o || (V.aspectOpen = !1), (Fe = e.__panoOpenEditor) == null || Fe.call(e);
            return;
          }
          if (o) {
            if ((H == null ? void 0 : H.type) === "add-image-file") {
              le(H.file);
              return;
            }
            R.apply(H) && O();
            return;
          }
          if ((H == null ? void 0 : H.type) === "toggle-aspect") {
            V.aspectOpen = !V.aspectOpen;
            return;
          }
          if ((H == null ? void 0 : H.type) === "close-aspect") {
            V.aspectOpen = !1;
            return;
          }
          let ke = H;
          if ((H == null ? void 0 : H.type) === "add-frame") {
            const q = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ke = {
              ...H,
              ...uw(q, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((H == null ? void 0 : H.type) === "delete-frame") {
            const q = Bi(ir(e));
            q && (e.__panoPreviewView = zg(q, {
              width: k.width,
              height: k.height
            }));
          }
          const Ce = ((Ke = e.__panoCutoutNodeFrame) == null ? void 0 : Ke.safeRect) || null;
          V.aspectOpen = !1, R.apply({ ...ke, safeRect: Ce }) && O();
        }
      }), Le.mount(z), rt = !0;
    } catch {
      Le = null, rt = !1;
    }
  const gt = typeof ResizeObserver < "u" ? new ResizeObserver(O) : null;
  gt == null || gt.observe(C);
  const mn = (H) => {
    var Ce, Fe;
    N.raf = 0, N.inTick = !0;
    let ke = !1;
    try {
      ke = We.stepInertia(H), (N.needsDraw || ke) && (N.needsDraw = !1, (Ce = e.flags) != null && Ce.collapsed || tk(e, k, $), V.viewUnavailable = $.failed);
    } finally {
      N.inTick = !1;
    }
    (ke || N.needsDraw) && !N.raf && (N.raf = requestAnimationFrame(mn)), xS() && (!e.__panoDebugLastTs || H - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = H, e.__panoPreviewMode, Cu(e), ca(S), ca(C), ca(k), ca(S.parentElement), ca((Fe = S.parentElement) == null ? void 0 : Fe.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, We = uf({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (H) => {
      e.__panoPreviewView = H;
    },
    getViewportSize: () => {
      const H = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(H.width || k.clientWidth || 0)),
        h: Math.max(1, Number(H.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const H = dp();
      return {
        x: H.invert_view_x ? -1 : 1,
        y: H.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      O();
    }
  }), It = o ? C : S, Tn = (H) => {
    const ke = k.getBoundingClientRect();
    return {
      x: (Number(H.clientX) - ke.left) * (k.width / Math.max(1, ke.width)),
      y: (Number(H.clientY) - ke.top) * (k.height / Math.max(1, ke.height))
    };
  }, fr = (H) => {
    var Fe, Ke;
    if (!o || !s) return;
    const ke = ir(e), Ce = op(
      ku(ke),
      String(((Fe = ke == null ? void 0 : ke.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      Tn(H),
      Du(e, k.width, k.height)
    );
    if (!Ce) {
      k.style.cursor = "grab";
      return;
    }
    if (((Ke = Ce.item) == null ? void 0 : Ke.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = Ce.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (H) => {
    var zt, Lt, bt, an, Xt, ni, ri, Dn, Mn, bi, Go;
    if (!Kn(H, It) || H.button !== 0) return;
    if (!o) {
      const yn = Bi(ir(e)), Hn = e.__panoCutoutNodeFrame;
      if (!yn) {
        (zt = S.focus) == null || zt.call(S, { preventScroll: !0 }), (Lt = k.setPointerCapture) == null || Lt.call(k, H.pointerId), k.style.cursor = "grabbing", We.startDrag(H.clientX, H.clientY, H.pointerId);
        return;
      }
      if (yn.locked === !0 || !Hn || !R) return;
      const Ha = Tn(H);
      let Xi;
      if (H.shiftKey) {
        const vi = Hg({
          frame: Hn,
          point: Ha,
          startRollDeg: Number(yn.roll_deg ?? yn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!vi) return;
        Xi = { kind: "roll", pointerId: H.pointerId, rollGesture: vi };
      } else {
        const vi = ((bt = ir(e)) == null ? void 0 : bt.ui_settings) || dp();
        Xi = {
          kind: "pan",
          pointerId: H.pointerId,
          startPoint: Ha,
          startShot: { ...yn },
          focalPx: Hi(Hn, yn),
          invertX: vi.invert_view_x === !0,
          invertY: vi.invert_view_y === !0
        };
      }
      E(), (an = S.focus) == null || an.call(S, { preventScroll: !0 }), (Xt = k.setPointerCapture) == null || Xt.call(k, H.pointerId), k.style.cursor = "grabbing", R.beginGesture(), U = Xi;
      return;
    }
    if (!s) return;
    const ke = Tn(H), Ce = ir(e), Fe = String(((ni = Ce == null ? void 0 : Ce.active) == null ? void 0 : ni.selected_sticker_id) || ""), Ke = Du(e, k.width, k.height), q = op(ku(Ce), Fe, ke, Ke);
    if ((ri = S.focus) == null || ri.call(S, { preventScroll: !0 }), q && R) {
      if (We.stopMotion(), E(), String(((Dn = q.item) == null ? void 0 : Dn.id) || "") !== Fe && R.apply({ type: "select-sticker", id: q.item.id }), ((Mn = q.item) == null ? void 0 : Mn.locked) === !0) {
        O();
        return;
      }
      const yn = ke, Hn = q.geometry.center;
      Q = {
        active: !0,
        kind: q.hit.kind,
        pointerId: H.pointerId,
        startPoint: yn,
        startCenter: { ...Hn },
        startSticker: { ...q.item },
        startDistance: Math.max(1, Math.hypot(yn.x - Hn.x, yn.y - Hn.y)),
        startAngle: Math.atan2(yn.y - Hn.y, yn.x - Hn.x),
        projection: Ke
      }, R.beginGesture(), (bi = k.setPointerCapture) == null || bi.call(k, H.pointerId), k.style.cursor = q.hit.kind === "rotate" ? "grabbing" : q.hit.kind === "move" ? "move" : q.hit.cursor, O();
      return;
    }
    (Go = k.setPointerCapture) == null || Go.call(k, H.pointerId), k.style.cursor = "grabbing", We.startDrag(H.clientX, H.clientY, H.pointerId);
  }), k.addEventListener("pointermove", (H) => {
    if (!o) {
      if (!U) {
        if (!We.state.drag.active) return;
        Kn(H, It), We.moveDrag(H.clientX, H.clientY, "pano");
        return;
      }
      if (U.pointerId !== H.pointerId || !R) return;
      if (Kn(H, It), U.kind === "pan") {
        const Ce = Tn(H);
        R.updateGesture({
          type: "pan-camera",
          startShot: U.startShot,
          dx: Ce.x - U.startPoint.x,
          dy: Ce.y - U.startPoint.y,
          focalPx: U.focalPx,
          invertX: U.invertX,
          invertY: U.invertY
        });
        return;
      }
      const ke = Gg(U.rollGesture, Tn(H), H);
      if (!ke) return;
      U.rollGesture = ke.gesture, R.updateGesture({ type: "set-roll", value: ke.rollDeg });
      return;
    }
    if (!Q && !We.state.drag.active) {
      fr(H);
      return;
    }
    if (Q) {
      if (Q.pointerId !== H.pointerId || !R) return;
      Kn(H, It);
      const ke = Tn(H);
      let Ce = Q.startSticker;
      if (Q.kind === "move")
        Ce = Uw(
          Q.startSticker,
          {
            x: Q.startCenter.x + ke.x - Q.startPoint.x,
            y: Q.startCenter.y + ke.y - Q.startPoint.y
          },
          Q.projection
        );
      else if (Q.kind === "scale") {
        const Fe = Math.hypot(ke.x - Q.startCenter.x, ke.y - Q.startCenter.y);
        Ce = Yw(Q.startSticker, Q.startDistance, Fe);
      } else if (Q.kind === "rotate") {
        const Fe = Math.atan2(ke.y - Q.startCenter.y, ke.x - Q.startCenter.x);
        Ce = Xw(Q.startSticker, Q.startAngle, Fe, H.shiftKey === !0);
      }
      R.updateGesture({ type: "set-transform", value: Ce }), O();
      return;
    }
    !s || !We.state.drag.active || (Kn(H, It), We.moveDrag(H.clientX, H.clientY, "pano"));
  });
  const qn = () => {
    var ke, Ce;
    if (!U && !Q) {
      if (!We.state.drag.active) return;
      We.endDrag(), k.style.cursor = "grab", O();
      return;
    }
    if (!R) return;
    const H = (U == null ? void 0 : U.pointerId) ?? (Q == null ? void 0 : Q.pointerId);
    U = null, Q = null;
    try {
      (ke = k.hasPointerCapture) != null && ke.call(k, H) && ((Ce = k.releasePointerCapture) == null || Ce.call(k, H));
    } catch {
    }
    R.cancelGesture(), k.style.cursor = "grab", O();
  }, kn = (H, ke = !1) => {
    var Ce, Fe, Ke, q;
    if (!o) {
      if (!U) {
        if (!We.state.drag.active) return;
        Kn(H, It), (Ce = k.releasePointerCapture) == null || Ce.call(k, H.pointerId), k.style.cursor = "grab", We.endDrag(), O();
        return;
      }
      if (U.pointerId !== H.pointerId || !R) return;
      Kn(H, It), U = null, (Fe = k.releasePointerCapture) == null || Fe.call(k, H.pointerId), k.style.cursor = "grab", ke ? R.cancelGesture() : R.commitGesture(), fr(H), O();
      return;
    }
    if (Q) {
      if (Q.pointerId !== H.pointerId || !R) return;
      Kn(H, It), Q = null, (Ke = k.releasePointerCapture) == null || Ke.call(k, H.pointerId), k.style.cursor = "grab", ke ? R.cancelGesture() : R.commitGesture(), O();
      return;
    }
    !s || !We.state.drag.active || (Kn(H, It), (q = k.releasePointerCapture) == null || q.call(k, H.pointerId), k.style.cursor = "grab", We.endDrag(), O());
  };
  k.addEventListener("pointerup", kn), k.addEventListener("pointercancel", (H) => kn(H, !0)), k.addEventListener("lostpointercapture", qn), k.addEventListener("pointerleave", (H) => {
    !o && U || Q || We.state.drag.active && kn(H);
  });
  const Fn = (H) => {
    const ke = document.activeElement;
    if (ke !== S && !S.contains(ke)) return;
    if (H.key === "Escape" && (U || Q) && R) {
      qn(), Lu(H);
      return;
    }
    if (!o || H.key !== "Delete" && H.key !== "Backspace" || !R) return;
    const Ce = H.target, Fe = String((Ce == null ? void 0 : Ce.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ce != null && Ce.isContentEditable || V.canDelete === !0 && (E(), R.apply({ type: "delete-selected" }) && O(), Lu(H));
  };
  window.addEventListener("keydown", Fn, !0);
  const L = bS({
    requestFrame: (H) => requestAnimationFrame(H),
    cancelFrame: (H) => cancelAnimationFrame(H),
    restore: (H) => ik(H)
  }), j = (H) => {
    var Ce, Fe, Ke, q, zt, Lt;
    if (!Kn(H, It)) return;
    if (!o) {
      const bt = Bi(ir(e));
      if (bt && bt.locked !== !0 && R) {
        const an = cf(H);
        an !== 0 && (Me || (E(), R.beginGesture(), Me = !0), R.updateGesture({
          type: "step-fov",
          direction: an
        }) ? (se && clearTimeout(se), se = setTimeout(de, 180), O()) : R.hasGestureChanges() || (R.cancelGesture(), Me = !1));
      } else if (!bt) {
        const an = vp();
        We.applyWheelEvent(H) && O(), L.schedule(an);
      }
      (Ce = H.preventDefault) == null || Ce.call(H), (Fe = H.stopPropagation) == null || Fe.call(H), (Ke = H.stopImmediatePropagation) == null || Ke.call(H);
      return;
    }
    if (!s) return;
    const ke = vp();
    We.applyWheelEvent(H) && O(), (q = H.preventDefault) == null || q.call(H), (zt = H.stopPropagation) == null || zt.call(H), (Lt = H.stopImmediatePropagation) == null || Lt.call(H), L.schedule(ke);
  }, te = o ? [C, k] : [C];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((H) => {
    te.forEach((ke) => ke.addEventListener(H, j, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((H) => {
    k.addEventListener(H, (ke) => Kn(ke, It)), C.addEventListener(H, (ke) => Kn(ke, It));
  });
  const ue = Oo(e, "state_json");
  let he = null, pe = null;
  ue && !ue.__panoPreviewPatchedCb && (he = ue.callback, pe = (H) => {
    const ke = he ? he(H) : void 0;
    return O(), ke;
  }, ue.callback = pe, ue.__panoPreviewPatchedCb = pe);
  const _e = Oo(e, "bg_color");
  let Pe = null, we = null;
  _e && !_e.__panoPreviewPatchedCb && (Pe = _e.callback, we = (H) => {
    const ke = Pe ? Pe(H) : void 0;
    return O(), ke;
  }, _e.callback = we, _e.__panoPreviewPatchedCb = we);
  const ye = e.onRemoved, Re = e.onResize, Ie = e.onExecuted, De = e.onDragOver, p = e.onDragDrop;
  let Ne = null;
  const Ue = () => {
    o && (V.dropActive = !0, Ne && clearTimeout(Ne), Ne = setTimeout(() => {
      Ne = null, V.dropActive = !1;
    }, 140));
  }, ut = o ? function(H) {
    return (De ? De.apply(this, arguments) : !1) === !0 ? !0 : kf(H == null ? void 0 : H.dataTransfer) ? (Ue(), !0) : !1;
  } : null, yt = o ? function(H) {
    var Fe;
    if ((p ? p.apply(this, arguments) : !1) === !0) return !0;
    const Ce = Array.from(((Fe = H == null ? void 0 : H.dataTransfer) == null ? void 0 : Fe.files) || []).find((Ke) => Pr(Ke));
    return Ce ? (Ne && clearTimeout(Ne), Ne = null, V.dropActive = !1, le(Ce), !0) : !1;
  } : null;
  o && (e.onDragOver = ut, e.onDragDrop = yt);
  const Nt = o ? yS(S, {
    onActive: (H) => {
      if (H) {
        Ue();
        return;
      }
      Ne && clearTimeout(Ne), Ne = null, V.dropActive = !1;
    },
    onDrop: (H) => {
      le(H);
    }
  }) : () => {
  }, st = function(H) {
    LS(e, H), e.__panoLastExecutedOutput = H || null, p0(e), rS(e), Y("executed", H), ua(e), O();
    const ke = Ie ? Ie.apply(this, arguments) : void 0;
    return ua(e), ke;
  };
  e.onExecuted = st;
  const Se = e.onConnectionsChange, gn = function(H, ke) {
    const Ce = sp(e, H, ke, ["sticker_image"]), Fe = sp(
      e,
      H,
      ke,
      ["erp_image", "bg_erp"]
    ), Ke = arguments, q = Se ? Se.apply(this, Ke) : void 0, zt = () => {
      N.destroyed || ((Fe || Ce) && (Fe && (ap(e, "background"), jS(e)), Ce && (ap(e, "external-sticker"), e.__panoLastExecutedOutput = null, HS(e))), Ce && Y("connection-change"), ua(e), O());
    };
    return zt(), queueMicrotask(zt), q;
  };
  e.onConnectionsChange = gn;
  const Fr = function() {
    const H = Re ? Re.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, O(), H;
  };
  e.onResize = Fr;
  const Vt = function() {
    return tn(), Eu.unregister(this), ye ? ye.apply(this, arguments) : void 0;
  };
  e.onRemoved = Vt;
  const tn = () => {
    var H, ke, Ce, Fe, Ke, q, zt, Lt, bt;
    N.destroyed = !0, (H = gt == null ? void 0 : gt.disconnect) == null || H.call(gt), o ? E() : Ge(), k.removeEventListener("lostpointercapture", qn), Nt(), D(), window.removeEventListener("keydown", Fn, !0), (Ce = (ke = e.__panoStateFlushers) == null ? void 0 : ke.delete) == null || Ce.call(ke, G), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Fe = R == null ? void 0 : R.destroy) == null || Fe.call(R), (Ke = Le == null ? void 0 : Le.unmount) == null || Ke.call(Le), $.dispose(), e.__panoSurfaceScene = null, (zt = (q = e.__panoRasterObjectSurfaceCache) == null ? void 0 : q.dispose) == null || zt.call(q), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, I(), L.dispose(), Ne && clearTimeout(Ne), Ne = null, Mf.disposeOwner(e), To(e), N.raf && cancelAnimationFrame(N.raf), N.raf = 0, ((Lt = e.__panoCutoutNodeSurface) == null ? void 0 : Lt.session) === R && (e.__panoCutoutNodeSurface = null), ((bt = e.__panoStickersNodeSurface) == null ? void 0 : bt.session) === R && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Fr && (e.onResize = Re), e.onExecuted === st && (e.onExecuted = Ie), e.onConnectionsChange === gn && (e.onConnectionsChange = Se), pe && (ue == null ? void 0 : ue.callback) === pe && (ue.callback = he), pe && (ue == null ? void 0 : ue.__panoPreviewPatchedCb) === pe && delete ue.__panoPreviewPatchedCb, we && (_e == null ? void 0 : _e.callback) === we && (_e.callback = Pe), we && (_e == null ? void 0 : _e.__panoPreviewPatchedCb) === we && delete _e.__panoPreviewPatchedCb, e.onDragOver === ut && (e.onDragOver = De), e.onDragDrop === yt && (e.onDragDrop = p), e.onRemoved === Vt && (e.onRemoved = ye);
  };
  e.__panoDomRestore = tn, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = R && rt && !o ? { session: R, model: V } : null, e.__panoStickersNodeSurface = R && rt && o ? { session: R, model: V } : null, e.__panoDomPreview = {
    widget: X,
    root: S,
    canvas: k,
    requestDraw: O,
    state: N,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Eu.register(e), Y("attach"), O();
}
function xp(e, t = {}) {
  c0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function wp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (l0(e) && !n) {
    Nf(e);
    return;
  }
  c0(e).attach(t);
}
function ck(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function uk(e, t = 1, n = qh) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, s = Number(e == null ? void 0 : e.width), u = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(s) ? s : 0) * o, d = Math.max(0, Number.isFinite(u) ? u : 0) * o, v = Number(n), y = Number.isFinite(v) && v > 0 ? v : qh, x = Math.max(f, d), S = x > 0 ? Math.min(1, y / x) : 1;
  return {
    width: Math.max(1, Math.round(f * S)),
    height: Math.max(1, Math.round(d * S))
  };
}
function fk({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var C;
  const o = typeof n == "function" ? n : () => {
  }, s = typeof r == "function" ? r : () => {
  };
  let u = !1, f = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, v = () => {
    const k = d();
    return k === f || (f = k, o(k)), k;
  }, y = () => v();
  return (C = t == null ? void 0 : t.addEventListener) == null || C.call(t, "fullscreenchange", y), v(), { toggle: async () => {
    var k;
    if (u || !e || !t) return !1;
    if (d()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
      } catch {
      }
      return u ? !1 : (v(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), u) return !1;
        if (d())
          return v(), !0;
      } catch {
      }
    return u || (s(), v()), !1;
  }, isActive: d, destroy: () => {
    var k, _, D;
    if (!u) {
      if (u = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const z = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (D = z == null ? void 0 : z.catch) == null || D.call(z, () => {
          });
        } catch {
        }
      f = !1, o(!1);
    }
  } };
}
const dk = { class: "pano-preview-node-surface" }, hk = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (oe(), fe("div", dk, [
      Te(Qt, {
        icon: e.model.fullscreen ? et(Ae).fullscreen_close : et(Ae).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (o) => {
          var s;
          return (s = t.onAction) == null ? void 0 : s.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (oe(), Tr(vf, { key: 0 })) : at("", !0)
    ]));
  }
}, ks = 140, pk = 180, Sp = 40, Wc = 10;
function kp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Mp(e, t) {
  const n = kp(e), r = kp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Np(e) {
  var s;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((s = Wt) == null ? void 0 : s.apiURL) == "function" ? Wt.apiURL(o) : o;
}
function Fo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Fo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Np({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Fo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Np(e);
}
function g0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function mk(e) {
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
function Ru(e) {
  var o;
  const t = (o = lr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (Mp(s, n)) return t.get(s);
  } else
    for (const s of Object.keys(t))
      if (Mp(s, n)) return t[s];
  return null;
}
function gk(e) {
  var r, o;
  const t = Ru(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const s of n)
    if (Array.isArray(s))
      for (const u of s) {
        const f = Fo(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function yk(e, t = "erp_image") {
  var k, _, D, z, X, N, O, $, V, W, R, Y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const o = n.find((I) => String((I == null ? void 0 : I.name) || "") === String(t));
  if ((o == null ? void 0 : o.link) != null && (r = o.link), r == null) {
    const I = n.find((T) => String((T == null ? void 0 : T.type) || "").toUpperCase() === "IMAGE" && (T == null ? void 0 : T.link) != null);
    (I == null ? void 0 : I.link) != null && (r = I.link);
  }
  if (r == null) return "";
  const s = ((_ = (k = e == null ? void 0 : e.graph) == null ? void 0 : k.links) == null ? void 0 : _[r]) || ((X = (z = (D = lr) == null ? void 0 : D.graph) == null ? void 0 : z.links) == null ? void 0 : X[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = ($ = (O = (N = lr) == null ? void 0 : N.graph) == null ? void 0 : O.getNodeById) == null ? void 0 : $.call(O, u), d = Ru(u), v = Ru(e == null ? void 0 : e.id), y = [
    (V = v == null ? void 0 : v.ui) == null ? void 0 : V.pano_input_images,
    v == null ? void 0 : v.pano_input_images,
    d == null ? void 0 : d.images,
    (W = d == null ? void 0 : d.ui) == null ? void 0 : W.pano_input_images,
    d == null ? void 0 : d.pano_input_images
  ];
  for (const I of y)
    if (Array.isArray(I))
      for (const T of I) {
        const le = Fo(T);
        if (le) return le;
      }
  let x = [];
  try {
    x = typeof ((R = lr) == null ? void 0 : R.getNodeImageUrls) == "function" ? lr.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const I of x) {
      const T = Fo(I);
      if (T) return T;
    }
  if (f) {
    const I = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const T of I) {
      const le = Fo(T);
      if (le) return le;
    }
  }
  const S = (Y = f == null ? void 0 : f.widgets) == null ? void 0 : Y.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image"), C = String((S == null ? void 0 : S.value) || "").trim();
  return C ? Wt.apiURL(`/view?filename=${encodeURIComponent(C)}&type=input&subfolder=`) : "";
}
function Uc(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Pp(e, t, n, r, o, s, u) {
  var v, y, x;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !g0(s) || n <= 1 || r <= 1) {
    Uc(t, n, r);
    return;
  }
  if (u.failed) {
    Uc(t, n, r);
    return;
  }
  const f = Number(((x = (y = (v = e == null ? void 0 : e.widgets) == null ? void 0 : v.find) == null ? void 0 : y.call(v, (S) => (S == null ? void 0 : S.name) === "coverage")) == null ? void 0 : x.value) || 360) === 180 ? 180 : 360, d = u.render({
    width: n,
    height: r,
    camera: ul(o, n, r),
    background: { media: s, revision: mk(s), coverage: f },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Uc(t, n, r);
}
function Ap(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class bk {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Dg(() => this.requestDraw()), this.controller = uf({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Rt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: J(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: J(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, s, u, f;
        const r = (s = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : s.call(o);
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
    var r, o, s;
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
    const n = ((s = (o = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : o.find) == null ? void 0 : s.call(o, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var s;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (s = this.flags) != null && s.collapsed || !t.errorText) return r;
      const o = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(o.x, o.y, o.w, o.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, o.x + o.w * 0.5, o.y + o.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${ks}px`,
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
          return ks;
        },
        getHeight() {
          return ks;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = pl(Pu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const s = r ? r(o) || {} : {};
          return {
            ...s,
            minHeight: Math.max(ks, Number(s.minHeight || 0)),
            minWidth: Math.max(pk, Number(s.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, o, s, u;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return wf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ zo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = fk({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = of(hk, {
        model: this.surfaceModel,
        onAction: (f) => {
          var d, v;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((v = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || v.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, d;
          return (d = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : d.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (u = (s = this.surfaceHost) == null ? void 0 : s.remove) == null || u.call(s), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = Wm(n), t.addEventListener("pointerdown", (s) => {
      var u, f, d;
      s.button === 0 && ((u = n.focus) == null || u.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, s.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(s.clientX, s.clientY, s.pointerId), s.preventDefault(), s.stopPropagation(), (d = s.stopImmediatePropagation) == null || d.call(s));
    }), t.addEventListener("pointermove", (s) => {
      var u;
      this.controller.state.drag.active && (this.controller.moveDrag(s.clientX, s.clientY, "pano"), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s));
    });
    const r = (s) => {
      var u, f;
      this.controller.state.drag.active && ((u = t.releasePointerCapture) == null || u.call(t, s.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), s.preventDefault(), s.stopPropagation(), (f = s.stopImmediatePropagation) == null || f.call(s));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (s) => {
      var u;
      this.controller.applyWheelEvent(s), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (s) => {
      var u;
      this.togglePlayback(), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s);
    }), n.addEventListener("keydown", (s) => {
      var u;
      ck(s, n) && (this.togglePlayback(), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !g0(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var u;
      const o = t.localPoint(r);
      if (!o) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const s = t.getLegacyPreviewRect();
      return Ap(o.x, o.y, s) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - s.x, o.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = t.localPoint(r);
      if (!o) return !0;
      const s = t.getLegacyPreviewRect();
      return t.controller.moveDrag(o.x - s.x, o.y - s.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var d, v, y, x, S, C;
      const s = US(this, n, r, o), u = t.getLegacyPreviewRect();
      if (!s || !Ap(s.x, s.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((v = t.view) == null ? void 0 : v.fov) || 100), f && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (x = n == null ? void 0 : n.preventDefault) == null || x.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (C = n == null ? void 0 : n.stopImmediatePropagation) == null || C.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, s, u;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Wc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - Sp - Wc);
    return { x: Wc, y: Sp, w: t, h: n };
  }
  drawLegacy(t) {
    var o, s;
    if (!t || (s = (o = this.node) == null ? void 0 : o.flags) != null && s.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Pp(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Fg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = uk(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, s, u;
    const t = gk(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, v = () => this.requestDraw();
      f.addEventListener("loadedmetadata", d), f.addEventListener("canplay", d), f.addEventListener("timeupdate", v), f.addEventListener("play", v), f.addEventListener("pause", v), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", d), f.removeEventListener("canplay", d), f.removeEventListener("timeupdate", v), f.removeEventListener("play", v), f.removeEventListener("pause", v);
      };
      return;
    }
    const n = yk(this.node, this.imageInputName);
    if (!n) {
      (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
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
    var o, s;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), Pp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (o = this.node).setDirtyCanvas) == null || s.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, s, u, f, d, v, y, x, S, C, k, _, D, z;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (u = (s = this.fullscreenController) == null ? void 0 : s.destroy) == null || u.call(s), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (v = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || v.call(d), this.surfaceApp = null, (x = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || x.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (C = this.root) == null ? void 0 : C.remove) == null || k.call(C);
    } catch {
    }
    try {
      a0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((z = (D = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : D.find) == null ? void 0 : z.call(D, (X) => (X == null ? void 0 : X.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function vk(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new bk(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function y0(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const s = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = s ? s.apply(this, arguments) : void 0;
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
function Af(e) {
  return !!(e != null && e.prototype);
}
function Ra(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function _k(e, t = {}) {
  Af(e) || vk(e, {
    ...t,
    onOpen: Ra(e, t.onOpen)
  });
}
function xk(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Af(e)) {
    wp(e, {
      ...r,
      onOpen: Ra(e, t.onOpen)
    });
    return;
  }
  y0(e, "stickers_node_preview", (o) => {
    wp(o, {
      ...r,
      onOpen: Ra(o, t.onOpen)
    });
  });
}
function wk(e, t = {}) {
  if (!Af(e)) {
    xp(e, {
      ...t,
      onOpen: Ra(e, t.onOpen)
    });
    return;
  }
  y0(e, "cutout_preview", (n) => {
    xp(n, {
      ...t,
      onOpen: Ra(n, t.onOpen)
    });
  });
}
const Cn = {
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
}, zr = "pen";
function Cp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Sk(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const s = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(v) {
    if (r.splice(0, r.length), o = -1, !v || typeof v != "object" || !Array.isArray(v.entries) || (v.entries.forEach((x) => {
      r.push(String(x || ""));
    }), !r.length)) return;
    const y = Number(v.index);
    Number.isInteger(y) ? y === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, y)) : o = r.length - 1;
  }
  function d(v) {
    r[o] !== v && (r.splice(o + 1), r.push(v), r.length > s && r.shift(), o = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(v) {
      d(String(v || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const v = o - 1;
      return v < 0 || v >= r.length ? null : (o = v, r[o]);
    },
    redo() {
      const v = o + 1;
      return v < 0 || v >= r.length ? null : (o = v, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const v = r.length, y = Math.max(0, v - u), x = o >= 0 ? Math.max(0, Math.min(o, y)) : y, S = r.slice(x, x + u), C = o < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, o - x));
      return {
        version: 1,
        entries: S,
        index: C
      };
    },
    hydrate: f
  };
}
function mo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((s) => String((s == null ? void 0 : s[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function kk(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function Mk({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: s,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: d
}) {
  var N, O;
  const v = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
    visible: v,
    activePane: v ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: v ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, ($, V) => ({ index: V, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return y;
  const x = ((N = t.find(($) => o(e.paintColor, $.color))) == null ? void 0 : N.id) || "", S = !x, C = s(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((O = e.customPaintColor) == null ? void 0 : O.a) ?? 1))) * 100), _ = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), D = e.brushSizes[_] ?? 10, z = d(), X = Array.from({ length: 8 }, ($, V) => e.customPaintHistory[V] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(C.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, C.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, C.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, C.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, C.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, C.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, C.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: X.map(($, V) => ({
      index: V,
      color: $ ? { cssColor: r($, 1) } : null
    })),
    sizeValue: D,
    sizeText: String(D),
    sizeFill: `${Math.max(0, Math.min(100, (D - 1) / 119 * 100))}%`,
    sizeDisabled: z,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Nk({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function Pk({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: s,
  params: u,
  notes: f,
  visibilityRows: d,
  uiSettings: v,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || s.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: d,
    uiSettings: t ? null : v,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Ak({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: s,
  anyLocked: u,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: v,
  isExternalSticker: y,
  isStickerHidden: x,
  canRestoreSelectedToInitial: S,
  iconSet: C
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let k = [];
  if (n.length > 1)
    k = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: C.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: C.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? C.lock_open : C.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: C.delete, disabled: !!u }
    ];
  else if (r === "stroke")
    k = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: C.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: C.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? C.lock_open : C.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: C.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (k = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: C.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: C.send_back, disabled: !!f }
    ], y(t) || (k.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: C.duplicate }), k.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: C.replace_image })), y(t)) {
      const V = S(), W = x(t);
      k.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: C.back_initial,
        disabled: !V
      }), k.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: W ? "Show" : "Hide",
        tip: W ? "Show input image" : "Hide input image",
        icon: W ? C.eye : C.eye_dashed
      });
    }
    k.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? C.lock_open : C.lock_closed }), y(t) || k.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: C.delete, disabled: !!f });
  } else
    k = [
      {
        key: "aspect",
        kind: "aspect",
        icon: C.aspect,
        open: !!v,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((V) => ({ value: V, label: V, active: d === V }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: C.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? C.lock_open : C.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: C.delete, disabled: !!f }
    ];
  const _ = o.corners.map((V) => ({ x: Number(V == null ? void 0 : V.x), y: Number(V == null ? void 0 : V.y) })).filter((V) => Number.isFinite(V.x) && Number.isFinite(V.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const D = _.map((V) => V.x), z = _.map((V) => V.y), X = Math.min(...D), N = Math.max(...D), O = Math.min(...z), $ = Math.max(...z);
  return {
    visible: !0,
    left: (X + N) * 0.5,
    top: $ + 18,
    items: k,
    anchor: { minX: X, maxX: N, minY: O, maxY: $ }
  };
}
const Ck = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function Ik(e, { frame: t, span: n, selection: r, selectedId: o, expanded: s, openRows: u, playing: f, label: d, audio: v = null }) {
  const y = (C, k, _, D, z) => {
    const X = (N) => (r == null ? void 0 : r.owner) === C && r.lane === N ? r.frames.map((O) => O + z) : [];
    return {
      id: C,
      label: _,
      clip: D,
      selected: C === o,
      open: u.has(C),
      keyed: Dx(k, t - z),
      keys: Fx(k).map((N) => ({ frame: N.frame + z, full: N.full })),
      selectedFrames: X(null),
      lanes: Ho(k).map((N) => ({
        key: `${C}:${N}`,
        lane: N,
        label: Ck[N],
        frames: k[N].keyframes.map((O) => O.frame + z),
        selectedFrames: X(N)
      }))
    };
  }, x = e.stickers.filter((C) => C.placement === "sky").sort((C, k) => k.z_index - C.z_index), S = e.stickers.filter((C) => C.placement === "world");
  return {
    visible: !0,
    expanded: s,
    playing: f,
    hasAudio: !!v,
    muted: !!(v != null && v.muted),
    frame: t,
    span: n,
    label: d,
    rows: [
      y("camera", e.camera, "Camera", null, 0),
      ...[...x, ...S].map((C) => {
        const { start: k, in: _, duration: D } = C.clip;
        return y(C.id, C, Ng(C), { start: k, end: D === null ? null : k + D }, k - _);
      })
    ]
  };
}
function Ek(e, t, n, r) {
  const o = $x(e, t, n);
  if (!o) return null;
  const s = Math.min(...n) + r, u = Math.max(...n) + r;
  return { label: s === u ? `Frame ${s}` : `${s} – ${u}`, ...o };
}
const Ok = { class: "pano-floating-right" }, Tk = ["data-settled"], Fk = ["data-ready", "data-settled"], Dk = ["aria-label", "data-tip"], Lk = {
  key: 1,
  class: "pano-camera-preview-label"
}, Rk = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe(Be, null, [
      B("div", Ok, [
        (oe(!0), fe(Be, null, xt(e.buttons, (r) => (oe(), Tr(Qt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      qr(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: it(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: St({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = B("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            B("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (oe(), fe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Te(Ct, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Dk)) : at("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (oe(), fe("div", Lk, tt(e.preview.label || "Preview unavailable"), 1)) : at("", !0)
        ], 14, Fk)
      ], 8, Tk), [
        [Wi, e.preview.visible]
      ])
    ], 64));
  }
}, $k = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Vk = ["y2", "transform"], zk = ["transform"], jk = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, s) => s * 15), r = ct(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, s) => qr((oe(), fe("div", {
      class: it(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (oe(), fe("svg", $k, [
        s[1] || (s[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (oe(!0), fe(Be, null, xt(et(n), (u) => (oe(), fe("line", {
          key: u,
          class: it(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, Vk))), 128)),
        B("g", { transform: r.value }, [...s[0] || (s[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, zk),
        s[2] || (s[2] = B("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Wi, e.model.visible === !0]
    ]);
  }
}, Hk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", {
      class: it(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Te(Bg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Te(Qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Te(jk, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Gk = ["aria-label"], Kk = { class: "pano-canvas-confirm-title" }, Bk = { class: "pano-canvas-confirm-text" }, Wk = { class: "pano-canvas-confirm-actions" }, Uk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Yk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Yt(null), r = /* @__PURE__ */ Yt(null);
    let o = null;
    function s() {
      const x = r.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(x) {
      const S = r.value;
      if (!S) return;
      const C = S.querySelector(`[data-action='${x}']`);
      C instanceof HTMLButtonElement && C.click();
    }
    function f() {
      var _;
      const x = r.value;
      if (!x) return;
      const S = x.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const k = s()[0] || x;
      (_ = k == null ? void 0 : k.focus) == null || _.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function v(x) {
      var z;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const S = s(), C = r.value;
      if (!S.length) {
        x.preventDefault(), (z = C == null ? void 0 : C.focus) == null || z.call(C);
        return;
      }
      const k = S[0], _ = S[S.length - 1], D = document.activeElement;
      if (x.shiftKey) {
        (D === k || D === C || !(C != null && C.contains(D))) && (x.preventDefault(), _.focus());
        return;
      }
      (D === _ || !(C != null && C.contains(D))) && (x.preventDefault(), k.focus());
    }
    function y(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return zi(() => t.model.visible, (x, S) => {
      if (x) {
        o = document.activeElement, Zu(() => {
          f();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), za(() => {
      d();
    }), (x, S) => e.model.visible === !0 ? (oe(), fe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ht(y, ["self"])
    }, [
      B("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: v
      }, [
        B("div", Kk, tt(e.model.title), 1),
        B("div", Bk, tt(e.model.text), 1),
        B("div", Wk, [
          S[0] || (S[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", Uk, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Gk)
    ], 512)) : at("", !0);
  }
}, Xk = ["data-paint-pane"], qk = ["hidden"], Jk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Zk = ["aria-pressed", "disabled"], Qk = ["hidden"], eM = { class: "pano-paint-color-pop-head" }, tM = { class: "pano-paint-color-field" }, nM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, rM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, iM = { class: "pano-paint-color-field" }, oM = { class: "pano-paint-alpha-wrap" }, aM = ["value"], sM = { "data-paint-alpha-value": "" }, lM = ["hidden"], cM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, uM = ["data-paint-history-index", "aria-label", "disabled"], fM = ["data-paint-footer"], dM = ["data-paint-group"], hM = ["hidden"], pM = ["value", "disabled"], mM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, gM = ["hidden"], yM = {
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
    return (r, o) => (oe(), fe("div", {
      class: it(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (oe(!0), fe(Be, null, xt(e.panes, (s) => {
        var u;
        return oe(), fe("div", {
          key: s.key,
          class: it(["pano-paint-pane", { "is-active": e.state.activePane === s.key }]),
          "data-paint-pane": s.key
        }, [
          s.showColorFloat ? (oe(), fe("div", {
            key: 0,
            class: it(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (oe(!0), fe(Be, null, xt(e.paintSwatches, (f) => (oe(), fe("button", {
              key: f.id,
              class: it(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: St(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Jk))), 128)),
            B("button", {
              class: it(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: St({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Zk),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: St({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", eM, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: St({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", tM, [
                B("div", nM, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: St({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", rM, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: St({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", iM, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", oM, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, aM),
                  B("span", sM, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", cM, [
                  (oe(!0), fe(Be, null, xt(e.state.historyEntries || [], (f) => (oe(), fe("button", {
                    key: f.index,
                    class: it(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: St(n(f.color))
                  }, null, 14, uM))), 128))
                ])
              ], 8, lM)
            ], 12, Qk)
          ], 10, qk)) : at("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": s.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": s.group
            }, [
              (oe(!0), fe(Be, null, xt(s.tools, (f) => {
                var d;
                return oe(), Tr(Qt, {
                  key: `${s.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[s.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, dM),
            B("div", {
              class: it(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              B("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: St({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, pM),
              B("span", mM, tt(e.state.sizeText || "10"), 1)
            ], 10, hM),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[s.key]) ?? !s.clearHidden)
            }, [
              Te(Qt, {
                icon: et(Ae).clear,
                label: s.clearLabel,
                tip: s.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": s.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, gM)
          ], 8, fM)
        ], 10, Xk);
      }), 128))
    ], 2));
  }
}, bM = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Yt(null), r = /* @__PURE__ */ Yt(null), o = /* @__PURE__ */ Yt(null);
    function s() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: s }), (u, f) => (oe(), fe(Be, null, [
      B("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      B("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        B("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, vM = {
  key: 0,
  class: "pano-cutout-menu"
}, _M = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, xM = ["data-aspect"], wM = ["data-action", "aria-label", "data-tip", "disabled"], SM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: St({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (oe(!0), fe(Be, null, xt(e.model.items || [], (r) => (oe(), fe(Be, {
        key: r.key
      }, [
        r.kind === "aspect" ? (oe(), fe("div", vM, [
          B("button", _M, [
            Te(Ct, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: it(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (oe(!0), fe(Be, null, xt(r.choices || [], (o) => (oe(), fe("button", {
              key: o.value,
              class: it(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, xM))), 128))
          ], 2)
        ])) : (oe(), fe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Te(Ct, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, wM))
      ], 64))), 128))
    ], 4));
  }
}, kM = {
  key: 0,
  class: "pano-easing"
}, MM = { class: "pano-section-title" }, NM = { class: "pano-easing-range" }, PM = { class: "pano-easing-modes" }, AM = ["aria-pressed", "onClick"], CM = ["viewBox"], IM = ["x", "y"], EM = ["x1", "y1", "x2", "y2"], OM = ["d"], TM = ["x1", "y1", "x2", "y2"], FM = ["x1", "y1", "x2", "y2"], DM = ["cx", "cy"], LM = ["cx", "cy"], RM = { class: "pano-easing-note" }, jr = 132, Ii = 14, $M = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], s = /* @__PURE__ */ Yt(null), u = ct(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), f = (k) => Ii + k * jr, d = (k) => Ii + (1 - k) * jr, v = ct(() => {
      var X;
      if (((X = n.model) == null ? void 0 : X.easing) === "hold") return `M${f(0)} ${d(0)} H${f(1)} V${d(1)}`;
      const [k, _, D, z] = u.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${f(0)} ${d(0)} C${f(k)} ${d(_)} ${f(D)} ${d(z)} ${f(1)} ${d(1)}`;
    }), y = ct(() => u.value ? u.value.map((k) => k.toFixed(2)).join(", ") : "");
    function x(k) {
      var _;
      return JSON.stringify(k.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function S(k, _) {
      r("timeline", { type: "easing", easing: k, commit: _ });
    }
    function C(k, _) {
      var O;
      if (k.button !== 0 || !u.value) return;
      const D = k.currentTarget;
      (O = D.setPointerCapture) == null || O.call(D, k.pointerId);
      let z = null;
      const X = ($) => {
        const V = s.value.getBoundingClientRect(), W = V.width / (jr + Ii * 2), R = (($.clientX - V.left) / W - Ii) / jr, Y = 1 - (($.clientY - V.top) / W - Ii) / jr;
        z = [...z || u.value], z[_] = Math.round(Math.min(1, Math.max(0, R)) * 100) / 100, z[_ + 1] = Math.round(Math.min(1, Math.max(0, Y)) * 100) / 100, S(z, !1);
      }, N = () => {
        D.removeEventListener("pointermove", X), D.removeEventListener("pointerup", N), D.removeEventListener("pointercancel", N), z && S(z, !0);
      };
      D.addEventListener("pointermove", X), D.addEventListener("pointerup", N), D.addEventListener("pointercancel", N);
    }
    return (k, _) => e.model ? (oe(), fe("div", kM, [
      B("div", MM, [
        _[2] || (_[2] = B("span", null, "Easing", -1)),
        B("span", NM, tt(e.model.label), 1)
      ]),
      B("div", PM, [
        (oe(), fe(Be, null, xt(o, (D) => B("button", {
          key: D.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": x(D) ? "true" : "false",
          onClick: (z) => S(D.easing, !0)
        }, tt(D.label), 9, AM)), 64))
      ]),
      u.value || e.model.easing === "hold" ? (oe(), fe("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: s,
        class: "pano-easing-graph",
        viewBox: `0 0 ${jr + Ii * 2} ${jr + Ii * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        B("rect", {
          class: "pano-easing-square",
          x: f(0),
          y: d(1),
          width: jr,
          height: jr
        }, null, 8, IM),
        B("line", {
          class: "pano-easing-diagonal",
          x1: f(0),
          y1: d(0),
          x2: f(1),
          y2: d(1)
        }, null, 8, EM),
        B("path", {
          class: "pano-easing-curve",
          d: v.value
        }, null, 8, OM),
        u.value ? (oe(), fe(Be, { key: 0 }, [
          B("line", {
            class: "pano-easing-arm",
            x1: f(0),
            y1: d(0),
            x2: f(u.value[0]),
            y2: d(u.value[1])
          }, null, 8, TM),
          B("line", {
            class: "pano-easing-arm",
            x1: f(1),
            y1: d(1),
            x2: f(u.value[2]),
            y2: d(u.value[3])
          }, null, 8, FM),
          B("circle", {
            class: "pano-easing-handle",
            cx: f(u.value[0]),
            cy: d(u.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (D) => C(D, 0))
          }, null, 40, DM),
          B("circle", {
            class: "pano-easing-handle",
            cx: f(u.value[2]),
            cy: d(u.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (D) => C(D, 2))
          }, null, 40, LM)
        ], 64)) : at("", !0)
      ], 8, CM)) : at("", !0),
      B("div", RM, [
        e.model.mixed ? (oe(), fe(Be, { key: 0 }, [
          da("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (oe(), fe(Be, { key: 1 }, [
          da("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (oe(), fe(Be, { key: 2 }, [
          da("Holds the value, then jumps to the next keyframe.")
        ], 64)) : u.value ? (oe(), fe(Be, { key: 3 }, [
          da("cubic-bezier(" + tt(y.value) + ")", 1)
        ], 64)) : at("", !0)
      ])
    ])) : at("", !0);
  }
}, VM = {
  class: "pano-side",
  "data-side": ""
}, zM = { class: "pano-side-head" }, jM = { class: "pano-side-title" }, HM = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, GM = {
  key: 0,
  class: "pano-side-scroll"
}, KM = { class: "pano-inspector" }, BM = { class: "pano-ui-row pano-coverage-row" }, WM = ["data-selected"], UM = ["aria-pressed", "disabled"], YM = ["aria-pressed", "disabled"], XM = {
  key: 0,
  class: "pano-section-title"
}, qM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, JM = {
  class: "pano-picker",
  "data-picker": "selection"
}, ZM = ["disabled"], QM = { class: "pano-picker-label" }, eN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, tN = ["hidden"], nN = ["data-selection-id"], rN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, iN = {
  key: 2,
  class: "pano-state-actions"
}, oN = ["disabled"], aN = ["data-key"], sN = ["min", "max", "step", "value", "disabled", "data-param-key"], lN = ["min", "max", "step", "value", "disabled", "data-param-key"], cN = { class: "pano-visibility-section" }, uN = { class: "pano-visibility-stack" }, fN = ["data-visibility-row"], dN = { class: "pano-visibility-name" }, hN = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, pN = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], mN = ["open"], gN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, yN = { class: "pano-ui-settings-body" }, bN = { class: "pano-ui-row" }, vN = ["data-selected"], _N = ["aria-pressed"], xN = ["aria-pressed"], wN = { class: "pano-ui-row" }, SN = ["data-selected"], kN = ["aria-pressed"], MN = ["aria-pressed"], NN = {
  key: 1,
  class: "pano-side-footer"
}, PN = ["data-action"], AN = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ct(() => {
      const f = n.model;
      return !f || typeof f != "object" ? !1 : Object.keys(f).length > 0 && !!f.coverage;
    });
    function s(f) {
      return { "--v": `${Number((f == null ? void 0 : f.fillPct) || 0)}%` };
    }
    function u(f, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (f == null ? void 0 : f.enabled) === !1;
    }
    return (f, d) => {
      var v, y, x, S, C;
      return oe(), fe("div", VM, [
        B("div", zM, [
          B("div", jM, [
            B("span", HM, [
              Te(Ct, {
                icon: et(Ae).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = B("div", { class: "pano-divider" }, null, -1)),
        o.value ? (oe(), fe("div", GM, [
          B("div", KM, [
            d[11] || (d[11] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", BM, [
              d[2] || (d[2] = B("label", null, "Coverage", -1)),
              B("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "360", 8, UM),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((C = e.model.coverage) == null ? void 0 : C.disabled) === !0
                }, "180", 8, YM)
              ], 8, WM)
            ]),
            e.model.transformTitle !== !1 ? (oe(), fe("div", XM, [...d[3] || (d[3] = [
              B("span", null, "Transform", -1)
            ])])) : at("", !0),
            e.model.selectionPicker ? (oe(), fe("div", qM, [
              B("label", null, tt(e.model.selectionPicker.label), 1),
              B("div", JM, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", QM, [
                    e.model.selectionPicker.currentIcon ? (oe(), fe("span", eN, [
                      Te(Ct, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : at("", !0),
                    B("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, ZM),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (oe(!0), fe(Be, null, xt(e.model.selectionPicker.items || [], (k) => (oe(), fe("button", {
                    key: k.id,
                    type: "button",
                    class: it(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id
                  }, [
                    k.icon ? (oe(), fe("span", rN, [
                      Te(Ct, {
                        icon: k.icon
                      }, null, 8, ["icon"])
                    ])) : at("", !0),
                    B("span", null, tt(k.label), 1)
                  ], 10, nN))), 128))
                ], 8, tN)
              ])
            ])) : at("", !0),
            e.model.copyStateButton ? (oe(), fe("div", iN, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Te(Ct, {
                  icon: et(Ae).copy
                }, null, 8, ["icon"]),
                B("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, oN)
            ])) : at("", !0),
            B("div", {
              class: it(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (oe(!0), fe(Be, { key: 0 }, xt(e.model.notes, (k) => (oe(), fe("div", {
                key: k,
                class: "pano-param-note"
              }, tt(k), 1))), 128)) : (oe(!0), fe(Be, { key: 1 }, xt(e.model.params || [], (k) => (oe(), fe("div", {
                key: k.key,
                class: "pano-field",
                "data-key": k.key
              }, [
                B("label", null, tt(k.label), 1),
                B("input", {
                  type: "range",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.value,
                  disabled: u(k, e.model),
                  style: St(s(k)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": k.key
                }, null, 12, sN),
                B("input", {
                  type: "number",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.displayValue,
                  disabled: u(k, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": k.key
                }, null, 8, lN)
              ], 8, aN))), 128))
            ], 2),
            Te($M, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (k) => r("timeline", k))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (oe(), fe(Be, { key: 3 }, [
              d[6] || (d[6] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", cN, [
                d[5] || (d[5] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", uN, [
                  (oe(!0), fe(Be, null, xt(e.model.visibilityRows, (k) => (oe(), fe("div", {
                    key: k.key,
                    class: it(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    B("span", dN, [
                      B("span", hN, [
                        Te(Ct, {
                          icon: k.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, tt(k.label), 1)
                    ]),
                    B("button", {
                      class: it(["pano-visibility-toggle", { active: k.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": k.key,
                      "aria-label": k.ariaLabel,
                      "aria-pressed": k.visible === !0 ? "true" : "false",
                      "data-tip": k.tip,
                      disabled: k.enabled === !1
                    }, [
                      Te(Ct, {
                        icon: k.visible === !0 ? et(Ae).eye : et(Ae).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, pN)
                  ], 10, fN))), 128))
                ])
              ])
            ], 64)) : at("", !0),
            e.model.uiSettings ? (oe(), fe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                d[7] || (d[7] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", gN, [
                  Te(Ct, {
                    icon: et(Ae).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", yN, [
                B("div", bN, [
                  d[8] || (d[8] = B("label", null, "Drag X", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, _N),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, xN)
                  ], 8, vN)
                ]),
                B("div", wN, [
                  d[9] || (d[9] = B("label", null, "Drag Y", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, kN),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, MN)
                  ], 8, SN)
                ]),
                d[10] || (d[10] = B("div", { class: "pano-ui-row" }, [
                  B("span"),
                  B("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, mN)) : at("", !0)
          ])
        ])) : at("", !0),
        (e.model.footerButtons || []).length ? (oe(), fe("div", NN, [
          (oe(!0), fe(Be, null, xt(e.model.footerButtons, (k) => (oe(), fe("button", {
            key: k.action,
            class: it(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, tt(k.label), 11, PN))), 128))
        ])) : at("", !0)
      ]);
    };
  }
}, CN = { class: "pano-timeline-bar" }, IN = ["aria-label", "data-tip"], EN = ["aria-label", "data-tip"], ON = { class: "pano-timeline-time" }, TN = ["aria-expanded"], FN = { class: "pano-timeline-body" }, DN = { class: "pano-timeline-grid" }, LN = { class: "pano-timeline-name" }, RN = ["aria-expanded", "aria-label", "onClick"], $N = ["title", "aria-current", "onClick"], VN = ["data-keyed", "aria-label", "onClick"], zN = ["onPointerdown"], jN = ["onPointerdown"], HN = ["onPointerdown"], GN = ["onPointerdown"], KN = ["aria-label", "data-tip", "onPointerdown"], BN = { key: 0 }, WN = ["onPointerdown"], UN = ["aria-label", "data-tip", "onPointerdown"], YN = { key: 0 }, XN = 10, qN = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], s = /* @__PURE__ */ Yt(null), u = /* @__PURE__ */ Yt(1);
    let f = null, d = null;
    Nl(() => {
      f = new ResizeObserver(([W]) => {
        u.value = Math.max(1, W.contentRect.width);
      }), s.value && f.observe(s.value);
    }), za(() => {
      f == null || f.disconnect(), d == null || d();
    });
    const v = ct(() => Math.max(1, Number(n.model.span || 1))), y = ct(() => u.value / v.value), x = (W) => `${W / v.value * 100}%`, S = ct(() => {
      const W = o.find((Y) => Y * y.value >= 56) || o[o.length - 1], R = [];
      for (let Y = 0; Y < v.value; Y += W) R.push(Y);
      return R;
    });
    function C(W) {
      const R = s.value.getBoundingClientRect(), Y = Math.floor((W - R.left) / Math.max(1, R.width) * v.value);
      return Math.min(v.value - 1, Math.max(0, Y));
    }
    function k(W, R, Y) {
      const I = Math.ceil(XN / Math.max(1e-6, y.value)), T = new Map(R.map((le) => [le.frame, le.full]));
      return Kx(R.map((le) => le.frame), I).map((le, U) => ({
        ...le,
        key: `${W}:${U}`,
        partial: le.frames.some((Q) => !T.get(Q)),
        selected: le.frames.some((Q) => Y.includes(Q))
      }));
    }
    function _(W) {
      return k(W.id, W.keys, W.selectedFrames);
    }
    function D(W) {
      return k(W.key, W.frames.map((R) => ({ frame: R, full: !0 })), W.selectedFrames);
    }
    function z(W) {
      const R = W.end === null ? v.value : W.end;
      return { left: x(W.start), width: x(Math.max(0, R - W.start)) };
    }
    function X(W, R) {
      const Y = W.clientX, I = Math.max(1e-6, y.value);
      let T = 0;
      R("start", 0, W);
      const le = (Q) => {
        if (Q.pointerId !== W.pointerId) return;
        const se = Math.round((Q.clientX - Y) / I);
        se !== T && (T = se, R("move", T, Q));
      }, U = (Q) => {
        Q.pointerId === W.pointerId && (d(), R("end", T, Q));
      };
      d == null || d(), d = () => {
        window.removeEventListener("pointermove", le), window.removeEventListener("pointerup", U), window.removeEventListener("pointercancel", U), d = null;
      }, window.addEventListener("pointermove", le), window.addEventListener("pointerup", U), window.addEventListener("pointercancel", U);
    }
    function N(W) {
      W.button === 0 && X(W, (R, Y, I) => r("action", { type: "seek", frame: C(I.clientX), phase: R }));
    }
    function O(W, R, Y) {
      W.button === 0 && (r("action", { type: "select-row", id: R.id }), X(W, (I, T) => r("action", { type: "clip", id: R.id, mode: Y, delta: T, phase: I })));
    }
    function $(W, R, Y, I, T) {
      if (W.button === 0) {
        if (W.shiftKey) {
          r("action", { type: "select-keys", owner: R.id, lane: Y, frames: I.frames, additive: !0 });
          return;
        }
        I.frames.every((le) => T.includes(le)) || r("action", { type: "select-keys", owner: R.id, lane: Y, frames: I.frames, additive: !1 }), X(W, (le, U) => r("action", { type: "move-keys", delta: U, phase: le }));
      }
    }
    function V(W, R, Y) {
      W.button !== 0 || W.target !== W.currentTarget || r("action", { type: "select-keys", owner: R.id, lane: Y, frames: [], additive: !1 });
    }
    return (W, R) => qr((oe(), fe("section", {
      class: it(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      B("div", CN, [
        B("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause" : "Play",
          "data-tip": e.model.playing ? "Pause" : "Play",
          onClick: R[0] || (R[0] = (Y) => r("action", { type: "play" }))
        }, [
          Te(Ct, {
            icon: e.model.playing ? et(Ae).pause : et(Ae).play
          }, null, 8, ["icon"])
        ], 8, IN),
        e.model.hasAudio ? (oe(), fe("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: R[1] || (R[1] = (Y) => r("action", { type: "mute" }))
        }, [
          Te(Ct, {
            icon: e.model.muted ? et(Ae).volume_muted : et(Ae).volume2
          }, null, 8, ["icon"])
        ], 8, EN)) : at("", !0),
        B("span", ON, tt(e.model.label), 1),
        B("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: R[2] || (R[2] = (Y) => r("action", { type: "toggle-expanded" }))
        }, [
          R[3] || (R[3] = B("span", null, "Timeline", -1)),
          Te(Ct, {
            icon: et(Ae).chevron
          }, null, 8, ["icon"])
        ], 8, TN)
      ]),
      qr(B("div", FN, [
        B("div", DN, [
          R[4] || (R[4] = B("div", { class: "pano-timeline-corner" }, null, -1)),
          B("div", {
            ref_key: "rulerRef",
            ref: s,
            class: "pano-timeline-ruler",
            onPointerdown: N
          }, [
            (oe(!0), fe(Be, null, xt(S.value, (Y) => (oe(), fe("span", {
              key: Y,
              class: "pano-timeline-tick",
              style: St({ left: x(Y) })
            }, tt(Y), 5))), 128)),
            B("span", {
              class: "pano-timeline-playhead",
              style: St({ left: x(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (oe(!0), fe(Be, null, xt(e.model.rows || [], (Y) => (oe(), fe(Be, {
            key: Y.id
          }, [
            B("div", {
              class: it(["pano-timeline-head", { selected: Y.selected }])
            }, [
              B("div", LN, [
                B("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": Y.open ? "true" : "false",
                  "aria-label": Y.open ? `Hide ${Y.label} parameters` : `Show ${Y.label} parameters`,
                  onClick: Ht((I) => r("action", { type: "toggle-row", id: Y.id }), ["stop"])
                }, [
                  Te(Ct, {
                    icon: et(Ae).chevron
                  }, null, 8, ["icon"])
                ], 8, RN),
                B("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: Y.label,
                  "aria-current": Y.selected ? "true" : void 0,
                  onClick: (I) => r("action", { type: "select-row", id: Y.id })
                }, [
                  Te(Ct, {
                    icon: Y.clip ? et(Ae).image : et(Ae).camera
                  }, null, 8, ["icon"]),
                  B("span", null, tt(Y.label), 1)
                ], 8, $N),
                B("button", {
                  class: it(["pano-timeline-key", { keyed: Y.keyed }]),
                  type: "button",
                  "data-keyed": Y.keyed ? "true" : "false",
                  "aria-label": Y.keyed ? `Every ${Y.label} parameter has a keyframe here; update them` : `Add keyframes for every ${Y.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ht((I) => r("action", { type: "key-row", owner: Y.id }), ["stop"])
                }, [
                  Te(Ct, {
                    icon: et(Ae).keyframe
                  }, null, 8, ["icon"])
                ], 10, VN)
              ]),
              Y.open ? (oe(!0), fe(Be, { key: 0 }, xt(Y.lanes, (I) => (oe(), fe("div", {
                key: I.key,
                class: "pano-timeline-lane-head"
              }, tt(I.label), 1))), 128)) : at("", !0)
            ], 2),
            B("div", {
              class: it(["pano-timeline-track", { selected: Y.selected }])
            }, [
              B("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (I) => V(I, Y, null)
              }, [
                Y.clip ? (oe(), fe("div", {
                  key: 0,
                  class: it(["pano-timeline-clip", { open: Y.clip.end === null }]),
                  style: St(z(Y.clip)),
                  onPointerdown: Ht((I) => O(I, Y, "move"), ["stop"])
                }, [
                  B("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ht((I) => O(I, Y, "start"), ["stop"])
                  }, null, 40, HN),
                  B("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ht((I) => O(I, Y, "end"), ["stop"])
                  }, null, 40, GN)
                ], 46, jN)) : at("", !0),
                (oe(!0), fe(Be, null, xt(_(Y), (I) => (oe(), fe("button", {
                  key: I.key,
                  type: "button",
                  class: it(["pano-timeline-pin", { selected: I.selected, cluster: I.frames.length > 1, partial: I.partial }]),
                  style: St({ left: x(I.frame + 0.5) }),
                  "aria-label": `${Y.label}: ${I.frames.length > 1 ? `${I.frames.length} keyframes` : `keyframe at frame ${I.frames[0]}`}`,
                  "data-tip": I.frames.length > 1 ? `${I.frames.length} keyframes` : `Frame ${I.frames[0]}`,
                  onPointerdown: Ht((T) => $(T, Y, null, I, Y.selectedFrames), ["stop"])
                }, [
                  I.frames.length > 1 ? (oe(), fe("span", BN, tt(I.frames.length), 1)) : at("", !0)
                ], 46, KN))), 128))
              ], 40, zN),
              Y.open ? (oe(!0), fe(Be, { key: 0 }, xt(Y.lanes, (I) => (oe(), fe("div", {
                key: I.key,
                class: "pano-timeline-lane",
                onPointerdown: (T) => V(T, Y, I.lane)
              }, [
                (oe(!0), fe(Be, null, xt(D(I), (T) => (oe(), fe("button", {
                  key: T.key,
                  type: "button",
                  class: it(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1 }]),
                  style: St({ left: x(T.frame + 0.5) }),
                  "aria-label": `${I.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: Ht((le) => $(le, Y, I.lane, T, I.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (oe(), fe("span", YN, tt(T.frames.length), 1)) : at("", !0)
                ], 46, UN))), 128))
              ], 40, WN))), 128)) : at("", !0),
              B("span", {
                class: "pano-timeline-playhead",
                style: St({ left: x(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ])
      ], 512), [
        [Wi, e.model.expanded]
      ])
    ], 2)), [
      [Wi, e.model.visible]
    ]);
  }
}, JN = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", {
      class: it(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: St({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, ZN = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, QN = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", ZN, [
      (oe(!0), fe(Be, null, xt(e.buttons, (r) => qr((oe(), Tr(Qt, {
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
        [Wi, r.visible !== !1]
      ])), 128))
    ]));
  }
}, eP = ["data-video-ready"], tP = { class: "pano-video-transport-shell" }, nP = { class: "pano-video-controls-left" }, rP = { class: "pano-video-filmstrip" }, iP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, oP = ["src", "onLoad"], aP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, sP = ["max", "value", "disabled"], lP = { class: "pano-video-controls-right" }, cP = ["data-has-audio"], uP = { class: "pano-video-volume-pop" }, fP = ["value", "disabled"], dP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.playing) === !0 ? "Pause" : "Play";
    }), r = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.playing) === !0 ? "Pause video" : "Play video";
    }), o = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.playing) === !0 ? Ae.pause : Ae.play;
    }), s = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.loop) === !1 ? Ae.loop_off : Ae.loop;
    }), d = ct(() => {
      var $, V;
      return (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((V = t.state) == null ? void 0 : V.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), v = ct(() => {
      var $, V, W;
      return (($ = t.state) == null ? void 0 : $.hasAudio) !== !0 ? Ae.volume : ((V = t.state) == null ? void 0 : V.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Ae.volume_muted : Ae.volume2;
    }), y = ct(() => {
      var $;
      return Math.max(0, Math.min(100, Number((($ = t.state) == null ? void 0 : $.progressPct) || 0)));
    }), x = ct(() => ({ left: `${y.value}%` })), S = ct(() => {
      var R, Y;
      const $ = (R = t.state) == null ? void 0 : R.volumePct, V = Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) * 100, W = Number($ ?? V ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), C = ct(() => {
      var W, R;
      const V = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((R = t.state) == null ? void 0 : R.durationLabel) || "0:00")
      ].reduce((Y, I) => Math.max(Y, I.length), 4);
      return `${Math.max(4, V)}ch`;
    }), k = ct(() => ({ "--pano-video-time-ch": C.value })), _ = ct(() => {
      var W, R;
      const $ = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if ($.length) return $;
      const V = Math.max(7, Number(((R = t.state) == null ? void 0 : R.thumbnailCount) || 9));
      return Array.from({ length: V }, (Y, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), D = /* @__PURE__ */ Yt(/* @__PURE__ */ new Set()), z = ($) => String(($ == null ? void 0 : $.id) || ($ == null ? void 0 : $.src) || ($ == null ? void 0 : $.label) || ""), X = ($) => D.value.has(z($)), N = ($) => {
      const V = new Set(D.value);
      V.add(z($)), D.value = V;
    };
    zi(_, ($) => {
      const V = new Set($.map(z)), W = /* @__PURE__ */ new Set();
      for (const R of D.value)
        V.has(R) && W.add(R);
      D.value = W;
    }, { immediate: !0 });
    const O = ct(() => {
      var $;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number((($ = t.state) == null ? void 0 : $.shellMaxWidthPx) || 640))}px`
      };
    });
    return ($, V) => (oe(), fe("div", {
      class: it(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: St(O.value)
    }, [
      V[1] || (V[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", tP, [
        B("div", nP, [
          Te(Qt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-time pano-video-time-start",
            style: St(k.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", rP, [
          B("div", iP, [
            (oe(!0), fe(Be, null, xt(_.value, (W) => (oe(), fe("div", {
              key: z(W),
              class: it(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && X(W)
              }])
            }, [
              W.src ? (oe(), fe("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (R) => N(W)
              }, null, 40, oP)) : (oe(), fe("span", aP))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: St(x.value),
            "aria-hidden": "true"
          }, [...V[0] || (V[0] = [
            B("span", { class: "pano-video-playhead-line" }, null, -1),
            B("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          B("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, sP)
        ]),
        B("div", lP, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: St(k.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Te(Qt, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: s.value,
            tip: u.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            B("div", uP, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: St(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, fP)
            ]),
            Te(Qt, {
              "extra-class": "pano-video-control",
              icon: v.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, cP)
        ])
      ])
    ], 14, eP));
  }
}, hP = { class: "pano-floating-top" }, pP = ["data-selected", "data-view-count"], mP = ["data-view", "aria-pressed", "aria-label", "disabled"], gP = { class: "label" }, yP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return oe(), fe("div", hP, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (oe(!0), fe(Be, null, xt(e.buttons, (o) => qr((oe(), fe("button", {
            key: o.key,
            class: it(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            Te(Ct, {
              icon: o.icon
            }, null, 8, ["icon"]),
            B("span", gP, tt(o.label), 1)
          ], 10, mP)), [
            [Wi, o.visible !== !1]
          ])), 128))
        ], 8, pP)
      ]);
    };
  }
};
function b0(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ae.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ae.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ae.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ae.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ae.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ae.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ae.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ae.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ae.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ae.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ae.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ae.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ae.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ae.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ae.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ae.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ae.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ae.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ae.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ae.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ae.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ae.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ae.lasso_tool }
        ]
      }
    ]
  };
}
const bP = ["aria-label"], vP = { class: "pano-stage-column" }, _P = { class: "pano-stage-wrap" }, xP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, wP = {
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
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let s = "", u = !1, f = null;
    const d = /* @__PURE__ */ Yt(null), v = /* @__PURE__ */ Yt(null), y = /* @__PURE__ */ Yt(null);
    function x() {
      var I, T;
      return ((T = (I = y.value) == null ? void 0 : I.getRefs) == null ? void 0 : T.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(I) {
      var T, le;
      return ((le = (T = v.value) == null ? void 0 : T.open) == null ? void 0 : le.call(T, I)) === !0;
    }
    function C(I) {
      o("image-file-selected", I);
    }
    function k(I) {
      o("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: S });
    const _ = ct(() => r.readOnly === !0), D = ct(() => r.shellPreset || b0(r.type)), z = ct(() => {
      var T, le, U;
      const I = String((((T = r.uiState) == null ? void 0 : T.stageStatus) === "failed" ? (le = r.uiState) == null ? void 0 : le.stageStatusDetail : (U = r.uiState) == null ? void 0 : U.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Re-run the node to refresh it." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), X = ct(() => {
      var T;
      const I = Array.isArray((T = D.value) == null ? void 0 : T.floatingButtons) ? D.value.floatingButtons.slice() : [];
      return _.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ae.fullscreen
      }), I;
    });
    function N() {
      const I = d.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((T) => T instanceof HTMLElement ? !T.hidden && T.tabIndex >= 0 && T.offsetParent !== null : !1) : [];
    }
    function O() {
      var le;
      const T = N()[0] || d.value;
      (le = T == null ? void 0 : T.focus) == null || le.call(T);
    }
    function $() {
      var I;
      f != null && f.isConnected && ((I = f.focus) == null || I.call(f)), f = null;
    }
    function V(I) {
      var T, le, U, Q;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const se = N();
          if (!se.length) {
            I.preventDefault(), (le = (T = d.value) == null ? void 0 : T.focus) == null || le.call(T);
            return;
          }
          const Me = se[0], de = se[se.length - 1], E = document.activeElement;
          if (I.shiftKey) {
            (E === Me || E === d.value || !((U = d.value) != null && U.contains(E))) && (I.preventDefault(), de.focus());
            return;
          }
          (E === de || !((Q = d.value) != null && Q.contains(E))) && (I.preventDefault(), Me.focus());
          return;
        }
        I.key === "Escape" && o("close");
      }
    }
    function W() {
      u || (s = document.body.style.overflow, document.body.style.overflow = "hidden", u = !0);
    }
    function R() {
      u && (document.body.style.overflow = s, u = !1);
    }
    function Y(I) {
      document.removeEventListener("keydown", V), I ? (f || (f = document.activeElement), W(), document.addEventListener("keydown", V), Zu(() => {
        O();
      })) : (R(), $());
    }
    return Nl(() => {
      Y(r.open);
    }), za(() => {
      R(), document.removeEventListener("keydown", V), $();
    }), zi(() => r.open, (I) => {
      Y(I);
    }), (I, T) => e.open ? (oe(), fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: T[2] || (T[2] = Ht((le) => o("close"), ["self"]))
    }, [
      B("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        B("div", vP, [
          B("div", _P, [
            T[3] || (T[3] = B("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            T[4] || (T[4] = B("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            T[5] || (T[5] = B("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (oe(), fe("div", xP, tt(z.value), 1)) : at("", !0),
            T[6] || (T[6] = B("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Te(bM, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Te(Wg, {
              ref_key: "imageFilePickerRef",
              ref: v,
              onFileSelected: C,
              onFileCancelled: k
            }, null, 512),
            _.value ? at("", !0) : (oe(), fe(Be, { key: 1 }, [
              Te(QN, {
                buttons: e.uiState.toolButtons || D.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Te(Hk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Te(yM, {
                "paint-swatches": e.paintSwatches,
                panes: D.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Te(dP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Te(yP, {
              buttons: e.uiState.viewButtons || D.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Te(Rk, {
              buttons: e.uiState.floatingButtons || X.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            Te(SM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Te(JN, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Te(Yk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Te(qN, {
            model: e.uiState.timeline || {},
            onAction: T[0] || (T[0] = (le) => o("timeline", le))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? at("", !0) : (oe(), Tr(AN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: T[1] || (T[1] = (le) => o("timeline", le))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, bP)
    ])) : at("", !0);
  }
}, or = "loading", Vo = "ready", ar = "failed";
function v0(e, t = "") {
  return e && (e.__panoLoadState = or, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function _0(e, t = "") {
  return e && (e.__panoLoadState = Vo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function x0(e, t = "") {
  return e && (e.__panoLoadState = ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function $u(e, t) {
  return e ? e.__panoLoadState === ar ? ar : typeof t == "function" && t(e) ? Vo : or : Vo;
}
function Vu(e) {
  return $u(e) === ar;
}
function SP({ presented: e, background: t = Vo, stickers: n = [] } = {}) {
  if (!e) return { status: or, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === or, s = r.includes(or);
  if (o && s) return { status: or, detail: "mixed" };
  if (o) return { status: or, detail: "background" };
  if (s) return { status: or, detail: "stickers" };
  const u = t === ar, f = r.includes(ar);
  return u && f ? { status: ar, detail: "mixed" } : u ? { status: ar, detail: "background" } : f ? { status: ar, detail: "stickers" } : { status: Vo, detail: "" };
}
function go(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function Ip(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function kP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Ep(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function MP(e, t, n = null) {
  var o, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = kP(e == null ? void 0 : e.graph, n)), r;
}
function NP(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function PP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function AP(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function CP({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const $ = String(O[0] || "").trim();
      if ($)
        return go(t, {
          filename: $,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const V of O) {
        const W = o(V);
        if (W) return W;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : go(t, O);
  }, s = (O) => {
    if (!O || typeof O != "object") return "";
    const $ = String(O.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(O.value || "");
    if ($ !== "comfy_image") return "";
    const V = String(O.filename || "").trim();
    return V ? go(t, {
      filename: V,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, u = (O) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || O == null) return null;
    const V = String(O);
    return $ instanceof Map ? $.get(O) || $.get(V) || $.get(Number(V)) || null : $[O] || $[V] || null;
  }, f = (O, $) => {
    var W;
    const V = u(O == null ? void 0 : O.id);
    return Array.isArray((W = V == null ? void 0 : V.ui) == null ? void 0 : W[$]) ? V.ui[$] : Array.isArray(V == null ? void 0 : V[$]) ? V[$] : [];
  }, d = (O, $) => {
    const V = u(O == null ? void 0 : O.id);
    return V != null && V.ui && Object.prototype.hasOwnProperty.call(V.ui, $) ? V.ui[$] : V && Object.prototype.hasOwnProperty.call(V, $) ? V[$] : null;
  }, v = (O, $) => {
    const V = d(O, "pano_sticker_input_state_hash"), W = Array.isArray(V) ? V[0] : V;
    return String(W ?? "").trim() || AP($);
  }, y = (O) => {
    const $ = [], V = /* @__PURE__ */ new Set();
    for (const W of O || []) {
      const R = o(W);
      !R || V.has(R) || (V.add(R), $.push(R));
    }
    return $;
  }, x = (O, $) => {
    var R;
    const V = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && V.push(O.images), Array.isArray((R = O == null ? void 0 : O.ui) == null ? void 0 : R.images) && O.ui.images.length && V.push(O.ui.images);
    const W = [];
    for (const Y of V)
      $ >= 0 && $ < Y.length && W.push(Y[$]), W.push(...Y);
    return W;
  }, S = (O, $) => {
    var Ge;
    const V = String($ || "").trim();
    if (!V) return { src: "", sourceType: "", inputName: "" };
    const W = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [], R = W.findIndex((G) => String((G == null ? void 0 : G.name) || "") === V);
    if (R < 0) return { src: "", sourceType: "", inputName: V };
    const Y = W[R], I = Y == null ? void 0 : Y.link;
    if (I == null) return { src: "", sourceType: "", inputName: V };
    const { originId: T, originSlot: le } = Ep(Ip(O == null ? void 0 : O.graph, I));
    if (T == null) return { src: "", sourceType: "", inputName: V };
    const U = MP(O, R, T);
    if (!U) return { src: "", sourceType: "", inputName: V };
    const Q = Number(le || 0);
    let se = [];
    try {
      se = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(U) || [] : [];
    } catch {
      se = [];
    }
    if (Array.isArray(se) && se.length) {
      const G = [];
      Q >= 0 && Q < se.length && G.push(se[Q]), G.push(...se);
      const Le = y(G);
      if (Le.length)
        return { src: Le[0], srcCandidates: Le, sourceType: "appNodeImageUrls", inputName: V };
    }
    const Me = y(x(u((U == null ? void 0 : U.id) ?? T), Q));
    if (Me.length)
      return { src: Me[0], srcCandidates: Me, sourceType: "nodeOutputs", inputName: V };
    const de = Array.isArray(U == null ? void 0 : U.imgs) ? U.imgs : [];
    if (de.length) {
      const G = [];
      Q >= 0 && Q < de.length && G.push(de[Q]), G.push(...de);
      const Le = y(G);
      if (Le.length)
        return { src: Le[0], srcCandidates: Le, sourceType: "nodeImgs", inputName: V };
    }
    const E = (Ge = U == null ? void 0 : U.widgets) == null ? void 0 : Ge.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image");
    if (E) {
      let G = o(E.value);
      if (G && !G.includes("/") && !G.includes(":") && (U.comfyClass === "LoadImage" || U.type === "LoadImage") && (G = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`), G) return { src: G, sourceType: "widget", inputName: V };
    }
    return { src: "", sourceType: "", inputName: V };
  }, C = (O, $ = []) => {
    const V = Array.isArray($) ? $ : [$];
    for (const W of V) {
      const R = S(O, W);
      if (String((R == null ? void 0 : R.src) || "").trim()) return R;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, k = (O) => {
    const $ = String(O || "").trim();
    if (!$) return [];
    if (NP($)) return [$];
    const { filename: V, subfolder: W } = PP($);
    return V ? y([
      go(t, { filename: V, subfolder: W, type: "temp" }),
      go(t, { filename: V, subfolder: W, type: "output" }),
      go(t, { filename: V, subfolder: W, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: s,
    clearFailedLinkedImages: (O) => {
      var $, V;
      try {
        (V = ($ = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || V.call($, (W, R, Y) => {
          var I;
          W != null && W.img && ((I = r == null ? void 0 : r.isImageLoadFailed) != null && I.call(r, W.img)) && Y.delete(R);
        });
      } catch {
      }
    },
    externalStateHash: v,
    invalidateUiImage: (O, $) => {
      var V;
      (V = O == null ? void 0 : O.delete) == null || V.call(O, `__ui__${String($ || "")}`);
    },
    linkedValue: (O, $) => {
      var Y, I, T, le;
      const V = String($ || ""), W = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.find((U) => String((U == null ? void 0 : U.name) || "") === V) : null;
      if ((W == null ? void 0 : W.link) != null) {
        const { originId: U, originSlot: Q } = Ep(Ip(O == null ? void 0 : O.graph, W.link)), se = u(U), Me = [
          se == null ? void 0 : se.output,
          se == null ? void 0 : se.result,
          (Y = se == null ? void 0 : se.data) == null ? void 0 : Y.output,
          (I = se == null ? void 0 : se.data) == null ? void 0 : I.result,
          (T = se == null ? void 0 : se.ui) == null ? void 0 : T.output,
          (le = se == null ? void 0 : se.ui) == null ? void 0 : le.result
        ];
        for (const de of Me) {
          if (!Array.isArray(de)) continue;
          const E = de[Number(Q || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const R = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === V) : null;
      return String((R == null ? void 0 : R.value) || "");
    },
    loadPreferredExactLinkedImage: (O, $ = [], V = null, W = "") => {
      var rt;
      const R = Array.isArray($) ? $ : [$], Y = C(O, R), T = (Array.isArray(Y == null ? void 0 : Y.srcCandidates) && Y.srcCandidates.length ? Y.srcCandidates : [Y == null ? void 0 : Y.src]).map((gt) => String(gt || "").trim()).filter(Boolean);
      if (!T.length) return null;
      const le = y(T.flatMap((gt) => k(gt)));
      if (!le.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const U = String(W || R.join("|") || "image_exact"), Q = T.join(`
`), se = O.__panoLinkedInputImageCache.get(U);
      if (se && se.srcRaw === Q && se.img) return se.img;
      const Me = n || globalThis.Image;
      if (typeof Me != "function") return null;
      const de = new Me();
      (rt = r == null ? void 0 : r.markImageLoading) == null || rt.call(r, de, Q);
      const E = { srcRaw: Q, resolvedSrc: "", img: de };
      O.__panoLinkedInputImageCache.set(U, E);
      let Ge = -1;
      const G = (gt) => {
        var mn, We, It;
        gt === "ready" ? (mn = r == null ? void 0 : r.markImageReady) == null || mn.call(r, de, Q) : (We = r == null ? void 0 : r.markImageFailed) == null || We.call(r, de, Q), V == null || V(de), (It = O.setDirtyCanvas) == null || It.call(O, !0, !0);
      }, Le = () => {
        if (Ge += 1, Ge >= le.length) {
          G("failed");
          return;
        }
        E.resolvedSrc = le[Ge], de.src = E.resolvedSrc;
      };
      return de.onload = () => G("ready"), de.onerror = () => {
        if (Ge + 1 < le.length) {
          Le();
          return;
        }
        G("failed");
      }, Le(), de;
    },
    output: u,
    resolvePreferredExactLinkedSource: C,
    source: o,
    uiImage: (O, $, V, W = null) => {
      var Q, se, Me;
      const R = f(O, $)[0] || null, Y = o(R);
      if (!Y) return null;
      const I = `__ui__${$}`, T = (Q = V == null ? void 0 : V.get) == null ? void 0 : Q.call(V, I);
      if (T && T.__panoSrc === Y) return T;
      const le = n || globalThis.Image;
      if (typeof le != "function") return null;
      const U = new le();
      return U.__panoSrc = Y, (se = r == null ? void 0 : r.markImageLoading) == null || se.call(r, U, Y), U.onload = () => {
        var de;
        (de = r == null ? void 0 : r.markImageReady) == null || de.call(r, U, Y), W == null || W(U);
      }, U.onerror = () => {
        var de;
        (de = r == null ? void 0 : r.markImageFailed) == null || de.call(r, U, Y), W == null || W(U);
      }, U.src = Y, (Me = V == null ? void 0 : V.set) == null || Me.call(V, I, U), U;
    },
    uiList: f,
    uiValue: d
  };
}
const IP = "state_json", Ms = "sticker_image_1", EP = "external_image", Ns = "pano_sticker_input_images", OP = !0, Ws = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], br = Math.PI / 180, Li = 180 / Math.PI, Yc = 1, TP = "rgb(255, 221, 87)", FP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, DP = 64, Op = 40, Xc = 16, LP = 0.45, Tp = 180, RP = 160, yl = 24, $P = 4, VP = 4, Ps = /* @__PURE__ */ new Map(), Fp = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), zP = 12, sr = CP({
  app: lr,
  api: Wt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Vu,
    markImageFailed: x0,
    markImageLoading: v0,
    markImageReady: _0
  }
}), jP = sr.assetSource, HP = sr.source, qc = sr.uiImage, GP = sr.invalidateUiImage, KP = sr.resolvePreferredExactLinkedSource, Jc = sr.loadPreferredExactLinkedImage;
function As(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function BP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function WP(e, t, n) {
  const r = J((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function UP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = gi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (gi.delete(t), gi.set(t, n), n);
}
function YP(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (gi.delete(n), gi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); gi.size > zP; ) {
      const o = gi.keys().next().value;
      if (!o) break;
      gi.delete(o);
    }
}
function XP(e) {
  return e * e * e;
}
function Dl(e, t, n) {
  return { x: e, y: t, z: n };
}
function Dp(e, t) {
  return Dl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Lp(e, t) {
  return Dl(e.x * t, e.y * t, e.z * t);
}
function Zc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function qP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Dl(e.x / t, e.y / t, e.z / t);
}
function Cs(e) {
  return {
    yaw: Rt(Math.atan2(e.x, e.z) * Li),
    pitch: J(Math.asin(J(e.y, -1, 1)) * Li, -90, 90)
  };
}
function Hr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const s = t[r].x, u = t[r].y, f = t[o].x, d = t[o].y;
    u > e.y != d > e.y && e.x < (f - s) * (e.y - u) / (d - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function hi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Qc(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), s = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return hi(e, t);
  const d = J((s * r + u * o) / f, 0, 1), v = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, x = Number(e.x || 0) - v, S = Number(e.y || 0) - y;
  return x * x + S * S;
}
function Bn(e, t, n) {
  return e + (t - e) * n;
}
function vr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${J(n, 0, 1)})`;
}
function JP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Is = { fillStyle: "", url: "" };
function ZP(e, t, n) {
  if (Is.url && Is.fillStyle === String(e || ""))
    return Is.url;
  const r = JP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${yl}" height="${yl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Is = { fillStyle: String(e || ""), url: r }, r;
}
function Us(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function $n(e) {
  return {
    r: J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: J(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function un(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function QP(e) {
  return Ws.some((t) => Us(e, t.color));
}
function eu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = J(Number(t), 0, 1), s = J(Number(n), 0, 1);
  if (o <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, d = s * (1 - o), v = s * (1 - f * o), y = s * (1 - (1 - f) * o);
  switch (u % 6) {
    case 0:
      return { r: s, g: y, b: d };
    case 1:
      return { r: v, g: s, b: d };
    case 2:
      return { r: d, g: s, b: y };
    case 3:
      return { r: d, g: v, b: s };
    case 4:
      return { r: y, g: d, b: s };
    default:
      return { r: s, g: d, b: v };
  }
}
function tu(e) {
  const t = J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), s = Math.min(t, n, r), u = o - s;
  let f = 0;
  u > 1e-6 && (o === t ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const d = o <= 1e-6 ? 0 : u / o;
  return { h: f, s: d, v: o };
}
function yo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const w0 = "pano_suite.ui_settings.v1", S0 = "pano_suite.node_grid_visibility.v1";
let So = null, _r = null;
function Ys(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function e2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(w0)) || "").trim();
    if (!t) return So ? Ys(So) : null;
    const n = JSON.parse(t), r = Ys(n);
    return So = r, r;
  } catch {
    return So ? Ys(So) : null;
  }
}
function t2(e) {
  var n;
  const t = Ys(e);
  So = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(w0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function k0() {
  var e;
  if (_r && typeof _r == "object")
    return _r;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(S0)) || "").trim();
    if (!t)
      return _r = {}, _r;
    const n = JSON.parse(t);
    return _r = n && typeof n == "object" ? n : {}, _r;
  } catch {
    return _r = {}, _r;
  }
}
function n2(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = k0()[n];
  return typeof o == "boolean" ? o : !!t;
}
function r2(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = k0();
  r[n] = !!t, _r = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(S0, JSON.stringify(r));
  } catch {
  }
}
function i2(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Rp(e) {
  const { paintCount: t, maskCount: n } = i2(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let o = 0, s = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? s += 1 : o += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: s,
    totalPaintCount: t + o,
    totalMaskCount: n + s
  };
}
function bo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Es(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function o2(e, t) {
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
function Ei(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function a2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function s2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function l2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function c2(e, t, n = {}) {
  var Zd;
  await i0(e, { tolerateOperationFailure: !0 }), sr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = o2(e, t);
  await wf();
  const f = Es(e, "output_preset"), d = Es(e, "coverage"), v = Es(e, "bg_color"), y = Es(e, IP), x = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Jc(
      e,
      i,
      () => ce(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = x();
    return l2(i);
  }, C = (i = 2048) => {
    const a = f == null ? void 0 : f.value;
    return s2(a) ? S() || Math.max(1, Math.round(Number(i || 2048))) : a2(a, i);
  }, k = t === "stickers" && e.__panoSceneStateV2 === !0, _ = (k ? xg : _g)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: C(2048),
    backgroundColor: String((v == null ? void 0 : v.value) || "#00ff00"),
    coverage: Vn(d == null ? void 0 : d.value),
    sharedUiSettings: e2(),
    active: Pg(e)
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const D = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], a = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === a) || i[0] || null;
  })() : null, z = D ? sd(D, !1) : { width: 220, height: 132 }, X = b0(t), N = /* @__PURE__ */ zo({
    stageStatus: or,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (X.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (X.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(X.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...s ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ae.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ae.aspect,
      rotateIcon: Ae.rotate_90,
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
      icon: Ae.fullscreen,
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
      customColorCss: vr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: vr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (i, a) => ({ index: a, color: null })),
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
      width: z.width,
      height: z.height,
      label: D ? "Loading preview" : "Add Frame to preview"
    }
  }), O = document.createElement("div");
  document.body.appendChild(O);
  const $ = ({ intent: i, file: a } = {}) => {
    if (Pr(a)) {
      if (i === "add") {
        xd(a);
        return;
      }
      i === "replace" && bb(a);
    }
  }, V = ({ intent: i } = {}) => {
  }, W = of(wP, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: X,
    paintSwatches: Ws.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: vr(i.color, 1)
    })),
    uiState: N,
    onClose: () => {
      fo();
    },
    onTimeline: (i) => pb(i),
    onImageFileSelected: $,
    onImageFileCancelled: V
  });
  let R = null;
  try {
    R = W.mount(O);
  } catch (i) {
    try {
      W.unmount();
    } catch {
    }
    throw O.remove(), i;
  }
  const Y = O.querySelector(".pano-modal-overlay"), I = O.querySelector(".pano-modal"), T = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), le = I == null ? void 0 : I.querySelector("[data-stage-background]"), U = I == null ? void 0 : I.querySelector(".pano-stage-wrap"), Q = ((Zd = R == null ? void 0 : R.getPaintOverlayRefs) == null ? void 0 : Zd.call(R)) || {}, se = Q.cursor || null, Me = Q.sizePreview || null, de = Q.sizeSample || null;
  if (!Y || !I || !T || !le || !U || !se || !Me || !de)
    throw W.unmount(), O.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const E = T.getContext("2d"), Ge = I.querySelector("[data-side]"), G = I.querySelector("[data-video-element]"), Le = I.querySelector(".pano-floating-right"), rt = I.querySelector(".pano-floating-top"), gt = I.querySelector("[data-tool-rail]"), mn = I.querySelector("[data-frame-rail]"), We = I.querySelector("[data-frame-roll-knob]"), It = I.querySelector("[data-paint-dock]"), Tn = I.querySelector(".pano-video-transport"), fr = I.querySelector("[data-selection-menu]"), qn = I.querySelector("[data-tooltip]"), kn = I.querySelector("[data-camera-preview-host]"), Fn = I.querySelector("[data-camera-preview-canvas]"), L = I.querySelector("[data-paint-color-row]"), j = I.querySelector("[data-paint-color-pop]"), te = I.querySelector("[data-paint-color-sv]"), ue = I.querySelector("[data-paint-color-sv-cursor]"), he = I.querySelector("[data-paint-hue-strip]"), pe = I.querySelector("[data-paint-hue-handle]");
  let _e = 0, Pe = 0;
  U == null || U.removeAttribute("data-stage-ready"), U == null || U.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", le.style.opacity = "0", o && (Ge == null || Ge.remove(), I.classList.add("pano-modal-readonly"));
  const we = () => {
    if (!p.customPaintSessionStart) return;
    if (Us(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (QP(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      $n(p.customPaintColor),
      ...p.customPaintHistory.filter((a) => !Us(a, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, ye = (i = !1) => {
    !j || j.hidden || (i ? we() : p.customPaintSessionStart = null, j.hidden = !0, N.paintDock.colorPopOpen = !1);
  }, Re = () => {
    j && (j.hidden && (p.customPaintSessionStart = $n(p.customPaintColor)), j.hidden = !1, N.paintDock.colorPopOpen = !0);
  };
  I.addEventListener("pointerdown", (i) => {
    var a;
    i.target.closest("[data-frame-roll-knob]") || ki(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ye(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Ye(), ce()), (a = N.frameRail) != null && a.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (N.frameRail.aspectOpen = !1)));
  });
  const Ie = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, De = JSON.stringify(Yh(_)), p = {
    mode: "pano",
    selectedId: Ie,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Vn(_.coverage),
    historyController: Sk(80, { entries: [De], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: zr,
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
    showGrid: n2(e == null ? void 0 : e.id, !0),
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
    paintEngine: hu(),
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
    // PanoramaStickersNode: the Camera row of the Timeline is selected, so the inspector edits the Camera.
    inspectCamera: !1,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Ne = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, playback: 0 };
  t === "stickers" && (p.selectedId = null, _.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Ue = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), st = document.createElement("canvas");
  st.__panoFrameIdx = 0;
  const Se = {
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
  }, gn = ow({ onReady: () => ce(), onFailed: () => ce() });
  let Fr = { key: "", projection: null }, Vt = { key: null, sceneState: null }, tn = null, Dr = null, H = null;
  const ke = Number.parseFloat(
    getComputedStyle(I).getPropertyValue("--pano-float-radius")
  ) || 10, Ce = (i) => {
    const a = String(i || "default");
    T.style.cursor !== a && (T.style.cursor = a);
  }, Fe = {
    timer: 0,
    target: null
  }, Ke = {
    active: !1,
    depth: 0
  }, q = {
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
  }, zt = 4, Lt = 9, bt = [];
  let an = 0;
  const Xt = () => {
    var M, P;
    const i = (M = U == null ? void 0 : U.getBoundingClientRect) == null ? void 0 : M.call(U), a = (P = Le == null ? void 0 : Le.getBoundingClientRect) == null ? void 0 : P.call(Le), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), c = a ? Math.max(0, Number(a.width || 0)) : 0, g = c > 0 ? c + 14 + 12 : 72, b = Math.max(280, Math.floor(l - g * 2)), w = p.fullscreen ? Math.min(1200, b) : b;
    N.videoTransport.shellMaxWidthPx = w;
  }, ni = () => {
    an || (an = window.requestAnimationFrame(() => {
      an = 0, Xt();
    }));
  }, ri = () => {
    const i = Math.max(1, Number(N.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, Dn = (i) => {
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
    return !!N.videoTransport.hasAudio;
  }, Mn = typeof ResizeObserver < "u" ? new ResizeObserver(() => ni()) : null;
  Mn == null || Mn.observe(U), Le && (Mn == null || Mn.observe(Le)), bt.push(() => {
    var i;
    an && (window.cancelAnimationFrame(an), an = 0), (i = Mn == null ? void 0 : Mn.disconnect) == null || i.call(Mn);
  }), ni();
  const bi = () => {
    q.thumbnailJobId += 1, q.thumbnailSrc = "", N.videoTransport.thumbnails = [], N.videoTransport.thumbnailCount = Lt;
  }, Go = async (i, a, l) => {
    const c = String(i || "").trim();
    if (!c) {
      bi();
      return;
    }
    const h = UP(c);
    if (h) {
      q.thumbnailSrc = c, N.videoTransport.thumbnails = h.thumbnails, N.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (q.thumbnailSrc === c && Array.isArray(N.videoTransport.thumbnails) && N.videoTransport.thumbnails.length)
      return;
    const m = ++q.thumbnailJobId;
    q.thumbnailSrc = c, N.videoTransport.thumbnails = [], N.videoTransport.thumbnailCount = Lt;
    const g = document.createElement("video");
    if (g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous", !await new Promise((ie) => {
      let me = !1;
      const re = (xe) => {
        me || (me = !0, ie(xe));
      };
      g.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), g.addEventListener("canplay", () => re(!0), { once: !0 }), g.addEventListener("error", () => re(!1), { once: !0 }), g.src = c, g.load();
    }) || q.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(g.videoWidth || 0)), M = Math.max(1, Number(g.videoHeight || 0));
    if (w < 1 || M < 1) return;
    const P = Math.max(0, Number(g.duration || a || 0)), A = document.createElement("canvas"), F = 46, K = Math.max(72, Math.round(w / M * F));
    A.width = K, A.height = F;
    const ee = A.getContext("2d");
    if (!ee) return;
    const Z = [], ne = (ie) => new Promise((me) => {
      let re = !1;
      const xe = () => {
        re || (re = !0, me());
      };
      g.addEventListener("seeked", xe, { once: !0 }), g.addEventListener("error", xe, { once: !0 });
      try {
        g.currentTime = ie;
      } catch {
        xe();
      }
    });
    for (let ie = 0; ie < Lt; ie += 1) {
      if (q.thumbnailJobId !== m) return;
      const me = ie / (Lt - 1), re = P > 0 ? Math.max(0, Math.min(P - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), P * me)) : 0;
      if (await ne(re), q.thumbnailJobId !== m) return;
      ee.clearRect(0, 0, K, F), ee.drawImage(g, 0, 0, K, F), Z.push({
        id: `thumb-${ie}`,
        src: A.toDataURL("image/jpeg", 0.72),
        time: re,
        label: Yl(re)
      });
    }
    q.thumbnailJobId === m && (N.videoTransport.thumbnails = Z, N.videoTransport.thumbnailCount = Z.length || Lt, YP(c, {
      thumbnails: Z,
      thumbnailCount: Z.length || Lt,
      duration: P,
      fps: l
    }));
  }, yn = (i) => {
    const a = Math.max(1, Number(N.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * a));
  }, Hn = (i) => {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return null;
    const a = Number(G.videoWidth || 0), l = Number(G.videoHeight || 0), c = document.createElement("canvas");
    c.width = a, c.height = l, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const h = c.getContext("2d");
    if (!h) return null;
    for (h.drawImage(G, 0, 0, a, l), q.frameCache.set(i, c), q.frameCacheOrder = q.frameCacheOrder.filter((m) => m !== i), q.frameCacheOrder.push(i); q.frameCacheOrder.length > zt; ) {
      const m = q.frameCacheOrder.shift();
      m != null && q.frameCache.delete(m);
    }
    return c;
  }, Ha = (i, a = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), c = Number(i.height || 0);
    if (l < 1 || c < 1) return !1;
    (st.width !== l || st.height !== c) && (st.width = l, st.height = c);
    const h = st.getContext("2d");
    return h ? (h.clearRect(0, 0, l, c), h.drawImage(i, 0, 0, l, c), st.__panoFrameIdx = Number(st.__panoFrameIdx || 0) + 1, a != null && (q.presentedTime = Number(a || 0)), !0) : !1;
  }, Xi = (i) => {
    const a = yn(i), l = q.frameCache.get(a) || null;
    return l ? (q.currentFrameNumber = a, Ha(l, i)) : !1;
  };
  if (bt.push(() => {
    bi();
  }), G instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof G.requestVideoFrameCallback != "function" || G.__panoFramePumpActive) return;
      G.__panoFramePumpActive = !0;
      const b = (w, M) => {
        G.__panoFramePumpActive = !1;
        const P = Number((M == null ? void 0 : M.mediaTime) ?? G.currentTime ?? 0), A = yn(P), F = ri();
        q.mode === "scrub" ? Math.abs(P - Number(q.editorTime || 0)) <= F && (Hn(A), Xi(q.editorTime), Se.backgroundDirty = !0, Se.dirty = !0, pr({
          ready: !0,
          playing: !1,
          visible: mr(),
          currentTime: q.editorTime,
          duration: N.videoTransport.duration,
          frameCount: N.videoTransport.frameCount,
          fps: N.videoTransport.fps,
          mode: "scrub"
        }), ce({ cause: "frame_view", localOnly: !0 })) : (q.editorTime = P, q.presentedTime = P, q.requestedTime = null, q.currentFrameNumber = A, Hn(A), q.frameCounter += 1, G.dataset.panoFrameIdx = String(q.frameCounter), Se.backgroundDirty = !0, Se.dirty = !0, pr({
          ready: !0,
          playing: !G.paused && !G.ended,
          visible: mr(),
          currentTime: P,
          duration: N.videoTransport.duration,
          frameCount: N.videoTransport.frameCount,
          fps: N.videoTransport.fps,
          mode: "playback"
        }), ce({ cause: "frame_view", localOnly: !0 }), vd(P)), Se.running && (!G.paused || q.mode === "scrub") && i();
      };
      try {
        G.requestVideoFrameCallback(b);
      } catch {
        G.__panoFramePumpActive = !1;
      }
    }, a = () => {
      q.pendingPlaybackResume && (q.pendingPlaybackResume = !1, q.mode = "playback", q.requestedTime = null, eo() && (Se.backgroundDirty = !0, Se.dirty = !0), G.play().catch(() => {
      }));
    }, l = () => {
      q.editorTime = Number(G.currentTime || 0), Number(G.readyState || 0) >= 2 && eo() && (Se.backgroundDirty = !0, Se.dirty = !0), xi(), i(), ce({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      q.mode = "playback", q.seeking = !1, q.requestedTime = null, xi(), i(), ce({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      q.mode === "playback" && eo() && (Se.backgroundDirty = !0, Se.dirty = !0), xi(), ce({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      pr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: mr(),
        currentTime: q.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: q.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? N.videoTransport.volume ?? 1)
      });
    }, g = () => {
      const b = q.seeking || q.pendingPlaybackResume || q.mode === "scrub";
      if (q.seeking = !1, !b) {
        q.requestedTime = null, i();
        return;
      }
      const w = Number(q.requestedTime ?? q.editorTime ?? 0), M = Number(G.currentTime || 0);
      if (Math.abs(M - w) > ri()) {
        Ya(w);
        return;
      }
      q.mode === "scrub" && (eo(), Se.backgroundDirty = !0, Se.dirty = !0, ce({ cause: "frame_view", localOnly: !0 })), q.requestedTime = null, a(), i();
    };
    G.addEventListener("loadedmetadata", l), G.addEventListener("loadeddata", l), G.addEventListener("canplay", l), G.addEventListener("play", c), G.addEventListener("pause", h), G.addEventListener("volumechange", m), G.addEventListener("seeked", g), bt.push(() => G.removeEventListener("loadedmetadata", l)), bt.push(() => G.removeEventListener("loadeddata", l)), bt.push(() => G.removeEventListener("canplay", l)), bt.push(() => G.removeEventListener("play", c)), bt.push(() => G.removeEventListener("pause", h)), bt.push(() => G.removeEventListener("volumechange", m)), bt.push(() => G.removeEventListener("seeked", g));
  }
  function vi() {
    N.toolButtons.forEach((i) => {
      const a = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", c = i.attr === "data-mask-tool";
      i.active = a ? i.value === p.primaryTool : l ? i.key === p.paintTool : c ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Ll(i) {
    return kf(i == null ? void 0 : i.dataTransfer);
  }
  function _i(i) {
    const a = !!i;
    Ke.active !== a && (Ke.active = a, U.classList.toggle("drop-active", a));
  }
  function Rl(i, a, l = p.viewFov, c = 140, h = 620) {
    const m = L_(p.viewYaw, i), g = a - p.viewPitch, b = l - p.viewFov, w = Math.hypot(m, g) + Math.abs(b) * 0.6, M = Math.round(J(c + w * 2.2, c, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: M,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: a,
      targetFov: l,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, ce();
  }
  ey();
  function dr() {
    return t === "stickers" ? Ga() : _.shots;
  }
  function Ga() {
    return k ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function Jn(i) {
    return k && ht(i);
  }
  function $l(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function nn(i) {
    return Jn(i) ? yf(i, p.frame) : i;
  }
  function Zn(i, a) {
    Jn(i) ? wg(i, p.frame, a) : Object.assign(i, a);
  }
  function sn() {
    const i = _.painting || (_.painting = Io(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function M0(i = "paint") {
    var h, m;
    const a = Array.isArray((m = (h = _.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], c = /* @__PURE__ */ new Set();
    for (const g of a) {
      const b = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !b || c.has(b) || (c.add(b), l.push(b));
    }
    return l;
  }
  function N0() {
    return M0("paint");
  }
  function Ko(i, a) {
    const l = String(a || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Bo(i) {
    const a = String(i || "").trim();
    return a ? `raster:${a}` : "";
  }
  function qt(i) {
    const a = String(i || "").trim();
    if (!a) return "";
    const l = a.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : a).trim();
  }
  function Wo(i, a = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const c = l.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Vl() {
    var a;
    let i = -1;
    for (const l of Ga())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of sn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((a = _.painting) == null ? void 0 : a.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Cf(i, a = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const c = sn();
    let h = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? a != null && (h.z_index = Math.max(0, Number(a || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: a == null ? Vl() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, c.push(h)), h;
  }
  function P0(i) {
    if (!(i != null && i.centerUv)) return [];
    const a = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), c = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((a - c) % 1 + 1) % 1,
        v: J(l - h, 0, 1)
      },
      {
        u: ((a + c) % 1 + 1) % 1,
        v: J(l - h, 0, 1)
      },
      {
        u: ((a + c) % 1 + 1) % 1,
        v: J(l + h, 0, 1)
      },
      {
        u: ((a - c) % 1 + 1) % 1,
        v: J(l + h, 0, 1)
      }
    ];
  }
  function A0() {
    const i = new Set(N0()), l = sn().filter((c) => i.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return i.forEach((c) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === c) || l.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: Vl(),
        locked: !1,
        frame: null
      });
    }), l.sort((c, h) => Number((c == null ? void 0 : c.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = l, l;
  }
  function C0(i, a, l) {
    var Z;
    const c = (ne) => (Number(ne || 0) % 1 + 1) % 1, h = [];
    for (const ne of l) {
      const ie = ne == null ? void 0 : ne.geometry, me = (ie == null ? void 0 : ie.geometryKind) === "lasso_fill" ? ie == null ? void 0 : ie.points : (ie == null ? void 0 : ie.processedPoints) || (ie == null ? void 0 : ie.rawPoints) || (ie == null ? void 0 : ie.points) || [];
      Array.isArray(me) && h.push(...me);
    }
    if (!h.length) return null;
    const m = c(((Z = h[0]) == null ? void 0 : Z.u) || 0);
    let g = 0, b = 0;
    h.forEach((ne) => {
      const ie = c((ne == null ? void 0 : ne.u) || 0);
      g += m + Gn(ie, m), b += Number((ne == null ? void 0 : ne.v) || 0);
    });
    const w = (g / h.length % 1 + 1) % 1;
    let M = 1 / 0, P = -1 / 0, A = 1 / 0, F = -1 / 0;
    h.forEach((ne) => {
      const ie = c((ne == null ? void 0 : ne.u) || 0), me = Gn(ie, w);
      M = Math.min(M, me), P = Math.max(P, me);
      const re = Number((ne == null ? void 0 : ne.v) || 0);
      A = Math.min(A, re), F = Math.max(F, re);
    });
    const K = l.reduce((ne, ie) => {
      const me = fi(String((ie == null ? void 0 : ie.toolKind) || "pen")), re = Cn[me] || Cn[zr], xe = Math.max(1, Number((ie == null ? void 0 : ie.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(ne, xe);
    }, 0), ee = Math.max(35e-4, K / 2048);
    return {
      centerUv: { u: ((w + (M + P) * 0.5) % 1 + 1) % 1, v: J((A + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - M) * 0.5 + ee,
      halfH: (F - A) * 0.5 + ee,
      uvPad: ee
    };
  }
  function ii(i, a, l) {
    const c = String(i || "").trim();
    if (!c) return null;
    const h = sn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === c);
    if (!h) return null;
    const m = l || Qn(c, a);
    return h.frame = C0(c, a, m), h.frame;
  }
  function qi() {
    var c;
    const i = Ga().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), a = A0().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), l = (Array.isArray((c = _.painting) == null ? void 0 : c.raster_objects) ? _.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...a, ...l].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function zl(i = !0) {
    var l, c, h, m, g, b;
    const a = qi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((c = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), M = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((b = (g = p.interaction) == null ? void 0 : g.stroke) == null ? void 0 : b.toolKind) || "").trim();
      w && M === "paint" && P !== "eraser" && !a.includes(w) && a.push(w);
    }
    return a;
  }
  function jl(i = !0) {
    var b, w, M, P, A, F;
    const a = qi();
    if (!i) return a;
    const l = String(((w = (b = p.interaction) == null ? void 0 : b.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((P = (M = p.interaction) == null ? void 0 : M.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((F = (A = p.interaction) == null ? void 0 : A.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!l || c !== "paint" || h === "eraser" || a.some((K) => K.type === "strokeGroup" && String(K.actionGroupId || "") === l))
      return a;
    const m = kt();
    let g = a.reduce((K, ee) => Math.max(K, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    return m && Kt(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((K, ee) => Number((K == null ? void 0 : K.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0));
  }
  function I0() {
    return sn().slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => Zi(Ko("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function E0() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, l) => Number((a == null ? void 0 : a.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((a) => Ji(Bo((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function If(i = p.interaction) {
    const a = String((i == null ? void 0 : i.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object" || a === "scale_raster_object") return !0;
    if (a === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, c = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || c;
    }
    return !1;
  }
  function O0() {
    var a, l, c, h;
    let i = null;
    try {
      const m = zl(), g = ((h = (c = (l = (a = p.paintEngine) == null ? void 0 : a.getErpTarget) == null ? void 0 : l.call(a, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : h.canvas) || null;
      g && (i = {
        source: g,
        revision: `${io()}:${Hl()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Hl() {
    var h, m, g, b, w, M, P;
    const i = p.interaction, a = String((i == null ? void 0 : i.kind) || "");
    if (!If(i)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const A = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), K = ((g = A == null ? void 0 : A.rawPoints) == null ? void 0 : g.length) ?? ((b = A == null ? void 0 : A.points) == null ? void 0 : b.length) ?? 0, ee = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${a}_live${ee}_${K}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((M = i == null ? void 0 : i.item) == null ? void 0 : M.rasterObjectId) || ((P = i == null ? void 0 : i.item) == null ? void 0 : P.id) || "");
    return `_${a}_${l || c || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Gl() {
    const i = Array.isArray(_.shots) ? _.shots : [], a = Array.isArray(_.stickers) ? _.stickers : [];
    return [...i, ...a];
  }
  function Ln(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function ht(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Nn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Ji(i) {
    const a = qt(i);
    if (!a) return null;
    const l = Nn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === a);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Bo(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function ln(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const a = qt(i.rasterObjectId || i.id || "");
    return !!a && !!Ji(Bo(a));
  }
  function Zi(i) {
    const a = Wo(i), l = String(a.actionGroupId || "").trim();
    if (!l) return null;
    const c = sn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return c ? {
      ...c,
      id: Ko("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Kt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const a = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!a && !!Zi(Ko(l, a));
  }
  function Qn(i, a = null) {
    const l = Wo(i, a), c = String(l.actionGroupId || "").trim();
    return c ? co(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === c) : [];
  }
  function T0(i, a = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(a || "paint").trim() || "paint"}:${l}:${p.mode}:${Jo()}`;
    if (p.mode === "frame") {
      const m = Ve(), g = String((m == null ? void 0 : m.id) || ""), b = m ? Bt(m) : null;
      return `${h}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function Ka(i, a, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: J(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function Gn(i, a) {
    let l = Number(i || 0) - Number(a || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function Kl(i, a = null, l = null) {
    var M;
    const c = Wo(i, a), h = Array.isArray(l) ? l : Qn(c.actionGroupId, c.layerKind), m = [];
    if (h.forEach((P) => {
      const A = (P == null ? void 0 : P.geometry) || null, F = (A == null ? void 0 : A.geometryKind) === "lasso_fill" ? A == null ? void 0 : A.points : (A == null ? void 0 : A.processedPoints) || (A == null ? void 0 : A.rawPoints) || (A == null ? void 0 : A.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((M = m[0]) == null ? void 0 : M.u) || 0);
    let b = 0, w = 0;
    return m.forEach((P) => {
      b += g + Gn(Number((P == null ? void 0 : P.u) || 0), g), w += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: J(w / m.length, 0, 1)
    };
  }
  function Ba(i, a, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), g = Gn(Number(i.u || 0), h), b = Number(i.v || 0) - m, w = Number(c || 0) * br, M = Math.cos(w), P = Math.sin(w), A = Math.max(0.02, Number(l || 1)), F = (g * M - b * P) * A, K = (g * P + b * M) * A;
    return {
      ...i,
      u: ((h + F) % 1 + 1) % 1,
      v: J(m + K, 0, 1)
    };
  }
  function Ef(i, a, l, c = null, h = null, m = null) {
    const g = Wo(i, h), b = String(g.actionGroupId || "").trim();
    if (!b) return !1;
    const w = co(g.layerKind), M = Array.isArray(c) ? new Map(c.map((A) => [String((A == null ? void 0 : A.id) || ""), A])) : null;
    let P = !1;
    if (w.forEach((A) => {
      if (String((A == null ? void 0 : A.actionGroupId) || "").trim() !== b) return;
      const F = (M == null ? void 0 : M.get(String((A == null ? void 0 : A.id) || ""))) || A, K = A == null ? void 0 : A.geometry, ee = F == null ? void 0 : F.geometry;
      !K || !ee || (Array.isArray(ee.points) && (K.points = ee.points.map((Z) => Ka(Z, a, l)), P = !0), Array.isArray(ee.rawPoints) && (K.rawPoints = ee.rawPoints.map((Z) => Ka(Z, a, l)), P = !0), Array.isArray(ee.processedPoints) && (K.processedPoints = ee.processedPoints.map((Z) => Ka(Z, a, l)), P = !0));
    }), P && m) {
      const A = sn().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === b);
      A && (A.frame = null);
    }
    return P;
  }
  function Of(i, a = 1, l = 0, c = null, h = null, m = null) {
    const g = Wo(i, h), b = String(g.actionGroupId || "").trim();
    if (!b) return !1;
    const w = co(g.layerKind), M = Array.isArray(c) ? c : Qn(b, g.layerKind), P = Array.isArray(M) ? new Map(M.map((K) => [String((K == null ? void 0 : K.id) || ""), K])) : null, A = (m == null ? void 0 : m.centerUv) ?? Kl(b, g.layerKind, M);
    let F = !1;
    if (w.forEach((K) => {
      if (String((K == null ? void 0 : K.actionGroupId) || "").trim() !== b) return;
      const ee = (P == null ? void 0 : P.get(String((K == null ? void 0 : K.id) || ""))) || K, Z = K == null ? void 0 : K.geometry, ne = ee == null ? void 0 : ee.geometry;
      !Z || !ne || (Array.isArray(ne.points) && (Z.points = ne.points.map((ie) => Ba(ie, A, a, l)), F = !0), Array.isArray(ne.rawPoints) && (Z.rawPoints = ne.rawPoints.map((ie) => Ba(ie, A, a, l)), F = !0), Array.isArray(ne.processedPoints) && (Z.processedPoints = ne.processedPoints.map((ie) => Ba(ie, A, a, l)), F = !0));
    }), F && m) {
      const K = sn().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === b);
      K && (K.frame = null);
    }
    return F;
  }
  function Tf(i, a, l, c = null) {
    const h = qt(i);
    if (!h) return !1;
    const m = Nn().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!m) return !1;
    const g = c && typeof c == "object" ? c : m, b = (g == null ? void 0 : g.transform) || {}, w = Number(b.du || 0) + Number(a || 0), M = J(Number(b.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = M, !0;
  }
  function F0(i, a = 1, l = null) {
    const c = qt(i);
    if (!c) return !1;
    const h = Nn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === c);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, g = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(g.scale || 1)), w = J(b * Math.max(0.01, Number(a || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = w, !0;
  }
  function kt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const a = Zi(i);
    if (a) return a;
    const l = Ji(i);
    return l || (t === "cutout" ? Gl().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null : dr().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null);
  }
  function er() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], a = [], l = /* @__PURE__ */ new Set();
    return i.forEach((c) => {
      const h = String(c || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? kt() : Zi(h) || Ji(h) || (t === "cutout" ? Gl().find((g) => String((g == null ? void 0 : g.id) || "") === h) : dr().find((g) => String((g == null ? void 0 : g.id) || "") === h));
      m && a.push(m);
    }), a;
  }
  function Bl(i = null) {
    const a = Array.isArray(i) ? i : er();
    if (!a || a.length < 2) return null;
    const l = a.map((M) => Zt(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!l.length) return null;
    const c = l.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = l.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...c), g = Math.max(...c), b = Math.min(...h), w = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (b + w) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: g, y: b },
        { x: g, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: b, a: { x: m, y: b }, b: { x: g, y: b } },
        { edge: "right", x: g, y: (b + w) * 0.5, a: { x: g, y: b }, b: { x: g, y: w } },
        { edge: "bottom", x: (m + g) * 0.5, y: w, a: { x: g, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (b + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: b },
      rotateHandle: { x: (m + g) * 0.5, y: b - 30 }
    };
  }
  function Ff(i) {
    const a = String((i == null ? void 0 : i.id) || "").trim();
    return !!a && Array.isArray(p.selectedIds) && p.selectedIds.includes(a);
  }
  function Wa() {
    const i = kt();
    return i ? Kt(i) || ln(i) ? "stroke" : Ln(i) ? "frame" : "image" : null;
  }
  function bn(i) {
    if (!i || typeof i != "object") return !1;
    if (Kt(i)) {
      const a = String(i.actionGroupId || i.id || "").trim(), l = sn().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === a);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (ln(i)) {
      const a = qt(i.rasterObjectId || i.id || ""), l = Nn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === a);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Wl(i = null) {
    const a = Array.isArray(i) ? i : er();
    return a.length > 0 && a.every((l) => bn(l));
  }
  function D0(i, a) {
    const l = a === !0;
    if (!i || typeof i != "object") return !1;
    if (Kt(i)) {
      const c = String(i.actionGroupId || i.id || "").trim(), h = sn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (ln(i)) {
      const c = qt(i.rasterObjectId || i.id || ""), h = Nn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function L0() {
    if (r) return;
    const i = er();
    if (!i.length) return;
    const a = !Wl(i);
    let l = !1;
    i.forEach((c) => {
      D0(c, a) && (l = !0);
    }), l && (nt(), ot(), Ye(), $e(), ce());
  }
  function hr(i) {
    p.inspectCamera = !1, Ne.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && ht(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && Ln(i) ? _.active.selected_shot_id = i.id || null : i ? Ln(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function R0(i, a = null) {
    const l = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const b = String((g == null ? void 0 : g.id) || "").trim();
      !b || c.has(b) || (c.add(b), l.push(b));
    }), p.selectedIds = l, p.inspectCamera = !1, Ne.selection = null;
    const h = String(a || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = kt();
    _.active.selected_sticker_id = m && ht(m) && m.id || null, m && Ln(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Df() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, c) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${c + 1}`)
    })), a = (Array.isArray(_.stickers) ? _.stickers : []).map((l, c) => {
      var m, g;
      const h = Jt(l) ? String(l.id || Ms) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...a];
  }
  function $0(i) {
    return i === "frame" ? Ae.camera : i === "stroke" ? Ae.paintbrush_vertical_tool : Ae.image;
  }
  function Ul(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: $0(i.kind)
    };
  }
  function Ua() {
    return Vl();
  }
  function Jt(i) {
    var a;
    return !i || typeof i != "object" ? !1 : k ? ((a = i.source) == null ? void 0 : a.kind) === "port" : String(i.id || "") === Ms || String(i.source_kind || "") === EP;
  }
  function Qi(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function V0(i) {
    return Jt(i) && Qi(i) ? Ig : 1;
  }
  function z0() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function j0() {
    return String(z0() || "") === "lasso_fill";
  }
  function H0() {
    if (r) return;
    const i = kt();
    !i || !Jt(i) || (i.visible = Qi(i), jt(), nt(), ot(), $e(), Ye(), ce());
  }
  function G0() {
    if (r || t !== "stickers") return;
    const i = kt();
    if (!i || !Jt(i)) return;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return;
    i.yaw_deg = Number(a.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(a.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(a.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Xl(Ns, () => {
      ce();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = oi(
      Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(a.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(a.rot_deg ?? i.rot_deg ?? 0), nt(), ot(), $e(), Ye(), ce();
  }
  function K0(i) {
    if (!i || !Jt(i)) return null;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return null;
    const l = {
      yaw_deg: Number(a.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? i.rot_deg ?? 0)
    }, c = Xl(Ns, () => {
      ce();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (l.vFOV_deg = oi(
      l.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), l;
  }
  function B0() {
    const i = kt();
    if (!i || !Jt(i)) return !1;
    const a = K0(i);
    if (!a) return !1;
    const l = (c, h) => Math.abs(Number(c || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, a.yaw_deg) && l(i.pitch_deg, a.pitch_deg) && l(i.hFOV_deg, a.hFOV_deg) && l(i.vFOV_deg, a.vFOV_deg) && l(i.rot_deg, a.rot_deg));
  }
  function Lf(i) {
    return sr.uiList(e, i);
  }
  function Rf(i) {
    return sr.uiValue(e, i);
  }
  function $f() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return ol(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function W0() {
    const { metaKey: i } = $f(), a = Rf(i);
    return Array.isArray(a) && a.length > 0 && a[0] && typeof a[0] == "object" ? a[0] : a && typeof a == "object" ? a : null;
  }
  function Vf(i) {
    var a;
    return i ? i instanceof HTMLVideoElement ? [
      String(i.currentSrc || i.src || ""),
      Number(i.videoWidth || 0),
      Number(i.videoHeight || 0),
      String(((a = i.dataset) == null ? void 0 : a.panoFrameIdx) || "0")
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
  function Yl(i) {
    const a = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(a / 60), c = a % 60;
    return `${l}:${String(c).padStart(2, "0")}`;
  }
  function pr(i = {}) {
    const a = Number(i.currentTime ?? q.editorTime ?? 0), l = Number(i.duration ?? N.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!N.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!N.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!N.videoTransport.visible, g = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(G instanceof HTMLVideoElement ? G.muted : N.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : G instanceof HTMLVideoElement ? G.volume : N.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Dn(G), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!N.videoTransport.loop;
    Object.assign(N.videoTransport, {
      ready: c,
      playing: h,
      visible: m,
      loop: M,
      currentTime: Number.isFinite(a) ? a : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, a / l * 100)) : 0,
      currentTimeLabel: Yl(a),
      durationLabel: Yl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? N.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? N.videoTransport.fps ?? 24)),
      mode: String(i.mode || q.mode || "playback"),
      hasAudio: w,
      muted: g,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : N.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? N.videoTransport.thumbnailCount ?? Lt))
    });
  }
  function mr() {
    return !!(G instanceof HTMLVideoElement && !k && G.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function zf() {
    if (!(G instanceof HTMLVideoElement) || !N.videoTransport.hasAudio) return;
    const i = !G.muted;
    G.muted = i, !i && Number(G.volume || 0) <= 0 && (G.volume = Math.max(0.01, Number(N.videoTransport.volume || 1))), pr({
      ready: !!G.getAttribute("src"),
      playing: !G.paused && !G.ended,
      visible: mr(),
      currentTime: q.editorTime,
      duration: N.videoTransport.duration,
      frameCount: N.videoTransport.frameCount,
      fps: N.videoTransport.fps,
      mode: q.mode,
      hasAudio: N.videoTransport.hasAudio,
      muted: G.muted,
      volume: Number(G.volume ?? N.videoTransport.volume ?? 1)
    });
  }
  function U0() {
    pr({
      visible: mr()
    });
  }
  function eo() {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return !1;
    const i = Number(G.videoWidth || 0), a = Number(G.videoHeight || 0);
    (st.width !== i || st.height !== a) && (st.width = i, st.height = a);
    const l = st.getContext("2d");
    return l ? (l.clearRect(0, 0, i, a), l.drawImage(G, 0, 0, i, a), st.__panoFrameIdx = Number(st.__panoFrameIdx || 0) + 1, q.presentedTime = Number(q.editorTime || G.currentTime || 0), !0) : !1;
  }
  function jf() {
    return q.mode === "scrub" && Number(st.width || 0) > 0 && Number(st.height || 0) > 0 && Number(st.__panoFrameIdx || 0) > 0 ? st : G instanceof HTMLVideoElement && Number(G.videoWidth || 0) > 0 && Number(G.videoHeight || 0) > 0 && Number(G.readyState || 0) >= 2 ? G : null;
  }
  function Ya(i) {
    if (!(G instanceof HTMLVideoElement)) return;
    if (Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) {
      q.pendingPlaybackResume = !1;
      return;
    }
    const a = Math.max(0, Number(i || 0));
    if (q.requestedTime = a, !q.seeking && !(Math.abs(Number(G.currentTime || 0) - a) <= 5e-4)) {
      q.seeking = !0;
      try {
        G.currentTime = a;
      } catch {
        q.seeking = !1;
      }
    }
  }
  function Xa(i) {
    xi();
    const a = J(Number(i || 0), 0, Number(N.videoTransport.duration || 0));
    q.mode = "scrub", !q.seeking && !G.paused && !G.ended && (q.resumeAfterScrub = !0, G.pause()), q.editorTime = a, Xi(a), pr({
      ready: !!G.getAttribute("src"),
      playing: !1,
      visible: mr(),
      currentTime: a,
      duration: N.videoTransport.duration,
      frameCount: N.videoTransport.frameCount,
      fps: N.videoTransport.fps,
      mode: "scrub"
    }), Number(st.__panoFrameIdx || 0) > 0 && (Se.backgroundDirty = !0, Se.dirty = !0, ce({ cause: "frame_view", localOnly: !0 })), Ya(a);
  }
  function qa() {
    q.pendingPlaybackResume = !!q.resumeAfterScrub, q.resumeAfterScrub = !1, q.pendingPlaybackResume || (q.mode = "scrub"), q.seeking || (q.pendingPlaybackResume ? (q.pendingPlaybackResume = !1, q.mode = "playback", G.play().catch(() => {
    })) : (eo(), ce({ cause: "frame_view", localOnly: !0 })));
  }
  function xi() {
    if (!(G instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = $f(), a = Lf(i)[0] || null, l = HP(a), c = W0(), h = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), g = Number((c == null ? void 0 : c.duration) || (h > 0 ? h / m : 0)), b = !!(c != null && c.has_audio) || Dn(G);
    return l && G.dataset.panoSrc !== l ? (G.pause(), G.dataset.panoSrc = l, G.dataset.panoFrameIdx = "0", G.loop = !k && !!N.videoTransport.loop, G.muted = !!N.videoTransport.muted, G.volume = Math.max(0, Math.min(1, Number(N.videoTransport.volume ?? 1))), G.src = l, G.load(), Go(l, g, m)) : !l && G.getAttribute("src") && (G.pause(), G.removeAttribute("src"), G.load(), bi()), G.loop !== (!k && !!N.videoTransport.loop) && (G.loop = !k && !!N.videoTransport.loop), l && (!Array.isArray(N.videoTransport.thumbnails) || N.videoTransport.thumbnails.length === 0) && Go(l, g, m), l || bi(), pr({
      ready: !!l,
      playing: !G.paused && !G.ended,
      visible: !!l && mr(),
      currentTime: q.editorTime,
      duration: g,
      frameCount: h,
      fps: m,
      mode: q.mode,
      hasAudio: b,
      loop: !!G.loop,
      muted: !!G.muted,
      volume: Number(G.volume ?? N.videoTransport.volume ?? 1),
      thumbnailCount: N.videoTransport.thumbnailCount
    }), l || null;
  }
  function Y0(i, a = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const c = i[0];
      if (c && typeof c == "object" && !Array.isArray(c)) return c;
    }
    if (Array.isArray(a) && a.length > 0) {
      const c = (l = a[0]) == null ? void 0 : l.parsed_state;
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
  function Xl(i, a = null) {
    return qc(e, i, Ue, a || (() => ce()));
  }
  function Hf(i = null) {
    return Xl(Ns, i);
  }
  function oi(i, a, l) {
    const c = Math.max(1, Number(a || 1)), h = Math.max(1, Number(l || 1)), m = J(Number(i || 30), 0.1, 179) * br, g = 2 * Math.atan(Math.tan(m * 0.5) * (h / c));
    return J(g * Li, 0.1, 179);
  }
  function X0(i) {
    const a = String(i || "").trim();
    if (!a) return null;
    try {
      const l = JSON.parse(a);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const c = l.version;
      let h = null;
      if (typeof c == "number" && Number.isInteger(c) ? h = c : typeof c == "string" && /^\d+$/.test(c) && (h = Number.parseInt(c, 10)), h !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), b = Number(m.pitch_deg), w = Number(m.roll_deg), M = Number(m.hFOV_deg);
      if (![g, b, w, M].every((K) => Number.isFinite(K))) return null;
      let P = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const A = {
        yaw_deg: P,
        pitch_deg: J(b, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: J(M, 0.1, 179)
      }, F = Number(l.source_aspect);
      return Number.isFinite(F) && F > 0 && (A.source_aspect = F), A;
    } catch {
      return null;
    }
  }
  function Gf(i) {
    const a = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Gi(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(a) ? a : 0),
        pitch_deg: J(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function q0(i) {
    var b;
    if (!i || typeof i != "object") return Gf(null);
    const a = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const w = J(h, 0.1, 179) * br, M = J(m, 0.1, 179) * br, P = Math.tan(M * 0.5);
      if (Math.abs(P) > 1e-6) {
        const A = Math.tan(w * 0.5) / P;
        Number.isFinite(A) && A > 0 && (g = A);
      }
    }
    if (i != null && i.asset_id && ((b = _ == null ? void 0 : _.assets) != null && b[i.asset_id])) {
      const w = _.assets[i.asset_id], M = Number((w == null ? void 0 : w.w) || 0), P = Number((w == null ? void 0 : w.h) || 0);
      M > 0 && P > 0 && (g = M / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(a) ? a : 0),
        pitch_deg: J(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function J0(i) {
    return sr.linkedValue(e, i);
  }
  function Z0(i, a, l) {
    const c = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : X0(a);
    if (c) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || c.source_aspect || 1), b = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: oi(c.hFOV_deg, g, b),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: oi(30, h, m),
      rot_deg: 0
    };
  }
  function Kf(i = "sync") {
    if (t !== "stickers" || r || e.__panoSceneStateV2) return;
    const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((M) => String((M == null ? void 0 : M.name) || "") === "sticker_image") : null, l = (a == null ? void 0 : a.link) ?? null, c = Hf(() => {
      ya(e, "image-loaded");
    }), h = Y0(Rf("pano_sticker_input_pose"), null), m = J0("sticker_state"), g = sr.externalStateHash(e, m), b = l == null ? null : Z0(h, m, c), w = Qg(_, {
      connected: l != null,
      linkId: l,
      stateHash: g,
      pose: b,
      imageWidth: Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 0),
      imageHeight: Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 0)
    });
    w.changed && (_.stickers = w.state.stickers, _.active = w.state.active, l == null && p.selectedId === Ms && (p.selectedId = null, p.selectedIds = []), ot(), $e(), Ye()), ce();
  }
  function Uo(i = {}) {
    const l = i.preservePanelValues !== !1 ? nn(kt()) : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Br(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function Q0() {
    if (t !== "cutout") return;
    const i = Ve();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function ql() {
    if (t !== "cutout") return;
    const i = Ve();
    mo(N.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ae.camera : Ae.plus_circle
    });
  }
  function Bf() {
    const i = t === "cutout" && p.mode === "frame", a = !i && !!p.showGrid;
    mo(N.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), mo(N.floatingButtons, "action", "toggle-grid", {
      icon: a ? Ae.eye : Ae.eye_dashed,
      pressed: a ? "true" : "false",
      label: a ? "Hide Grid" : "Show Grid",
      tip: a ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Lr() {
    var l;
    const i = !!Ve();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, N.viewButtons.forEach((c) => {
      const h = c.key === p.mode;
      c.pressed = h ? "true" : "false", c.visible = !(c.key === "frame" && t !== "cutout"), c.disabled = c.key === "frame" ? !i : !1;
    });
    const a = t === "cutout" && p.mode === "frame" ? Ve() : null;
    N.frameRail.visible = !!a, N.frameRail.disabled = r || (a == null ? void 0 : a.locked) === !0, N.frameRollKnob.visible = !!a && !r && a.locked !== !0, N.frameRollKnob.disabled = r || (a == null ? void 0 : a.locked) === !0, N.frameRollKnob.rollDeg = Number((a == null ? void 0 : a.roll_deg) ?? (a == null ? void 0 : a.rot_deg) ?? 0), N.frameRollKnob.displayValue = yo(N.frameRollKnob.rollDeg), N.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", N.frameRollKnob.armed = !!a && p.altModifier === !0, N.frameRail.rollKnob = N.frameRollKnob, N.frameRail.aspectLabel = a ? Br(a) : "", N.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((c) => ({
      value: c,
      label: c,
      active: !!a && String(Br(a)) === c
    })), a || (N.frameRail.aspectOpen = !1), N.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!Ve(), t === "cutout" && N.cameraPreview && (N.cameraPreview.visible = p.mode !== "frame", N.cameraPreview.expanded = !!p.outputPreviewExpanded, N.cameraPreview.settled = N.cameraPreview.settled === !0 && Se.pendingStableLayoutFrames <= 0 && Se.hasPresentedFrame), Bf(), Cd() ? vt(p.pointerPos) : Ce(p.mode === "pano" ? "grab" : "default");
  }
  function ey() {
    const a = Zf({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function Wf() {
    return Eg({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, T.width, T.height);
  }
  function Jl() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${T.width}|${T.height}`;
    return Fr.key !== i && (Fr = { key: i, projection: Og(Wf(), T.width, T.height) }), Fr.projection;
  }
  function Yo(i) {
    const a = Jl().project(i);
    return a.z > 1e-4 ? a : null;
  }
  function Zl(i, a) {
    return Jl().ray(i, a);
  }
  function ai() {
    const i = T.width, a = T.height, l = 2;
    if (i / Math.max(a, 1) >= l) {
      const b = a, w = b * l;
      return { x: (i - w) * 0.5, y: 0, w, h: b };
    }
    const h = i, m = h / l;
    return { x: 0, y: (a - m) * 0.5, w: h, h: m };
  }
  function Uf(i) {
    var g;
    if (i && typeof i == "object" && (Jt(i) || i.external === !0))
      return Hf(() => {
        ya(e, "image-loaded");
      });
    const a = k ? Xo(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!a) return null;
    const l = Ue.get(a);
    if (l) return l;
    const c = k ? kg(i.source) : (g = _.assets) == null ? void 0 : g[a], h = jP(c);
    if (!h) return null;
    const m = new Image();
    return v0(m, h), m.onload = () => {
      _0(m, h), ce();
    }, m.onerror = () => {
      x0(m, h), ce();
    }, m.src = h, Ue.set(a, m), m;
  }
  function Xo(i) {
    const { source: a } = i;
    return a.filename ? `file:${a.storage}:${a.subfolder}:${a.filename}` : `sticker:${i.id}`;
  }
  function Yf(i, a = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const c = ut.get(l);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const h = new Image();
    return h.onload = () => {
      typeof a == "function" && a();
    }, h.src = l, ut.set(l, h), h;
  }
  function ty(i) {
    const a = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!a) return null;
    const l = yt.get(a);
    if (l) return l.ready ? l : null;
    const c = Yf(i, () => {
      const P = yt.get(a);
      P && (P.ready = !1), ce({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const h = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (h < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = h, g.height = m;
    const b = g.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, m), b.drawImage(c, 0, 0, h, m);
    const w = b.getImageData(0, 0, h, m).data, M = { canvas: g, width: h, height: m, alpha: w, ready: !0 };
    return yt.set(a, M), M;
  }
  function ny(i, a, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), g = Gn(Number(i.u || 0), h), b = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), M = Number(c || 0) * br, P = Math.cos(M), A = Math.sin(M), F = g / w, K = b / w, ee = F * P + K * A, Z = -F * A + K * P;
    return {
      ...i,
      u: ((h + ee) % 1 + 1) % 1,
      v: m + Z
    };
  }
  function ry(i, a) {
    if (!i || !a) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const c = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(a.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(c.dv || 0)
    }, g = ny(
      m,
      h,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), b = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(b > 1e-6) || !(w > 1e-6)) return null;
    const M = Gn(Number(g.u || 0), Number(l.u0 || 0)) / b, P = (Number(g.v || 0) - Number(l.v0 || 0)) / w;
    if (M < 0 || M > 1 || P < 0 || P > 1) return 0;
    const A = ty(i);
    if (!A) return null;
    const F = J(Math.floor(M * A.width), 0, A.width - 1), K = J(Math.floor(P * A.height), 0, A.height - 1);
    return Number(A.alpha[(K * A.width + F) * 4 + 3] || 0);
  }
  function Xf(i, a, l, c = null) {
    if (!(a != null && a.visible) || !Hr(l, a.corners)) return !1;
    const h = c || nr(l, performance.now()), m = ry(i, h);
    return m === null ? !0 : m > 8;
  }
  function iy() {
    var c, h, m, g, b, w, M, P;
    const i = ((h = (c = p.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : h.call(c, zl(!1))) || null, a = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : b.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((P = (M = i == null ? void 0 : i.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : P.height) || 1024));
    return { width: a, height: l };
  }
  function oy() {
    var K, ee, Z;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const l = Rn(), c = `${Hl()}:${l.width}:${l.height}`;
    if (((K = p._activePaintEraserPreviewInfo) == null ? void 0 : K.cacheKey) === c)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = un(a), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ne = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = ac(ne, h.targetSpace, !0);
    }
    const g = qo(l.width, l.height, { readback: !0 });
    if (!dd(g, h, { w: l.width, h: l.height })) return null;
    const b = ((Z = (ee = g.ctx) == null ? void 0 : ee.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Z.data) || null;
    if (!b) return null;
    let w = l.width, M = l.height, P = -1, A = -1;
    for (let ne = 0; ne < l.height; ne += 1)
      for (let ie = 0; ie < l.width; ie += 1)
        b[(ne * l.width + ie) * 4 + 3] <= 8 || (ie < w && (w = ie), ne < M && (M = ne), ie > P && (P = ie), ne > A && (A = ne));
    if (P < w || A < M)
      return p._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const F = {
      surface: g,
      bounds: { minX: w, minY: M, maxX: P, maxY: A },
      key: `${c}:${w}:${M}:${P}:${A}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: c, value: F }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function to() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function ay(i, a, l) {
    var c, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((c = i.item) != null && c.bbox)) {
      const m = i.item.bbox, g = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(m.u0 || 0) + Number(g.du || 0), w = Number(m.u1 || 0) + Number(g.du || 0), M = Number(m.v0 || 0) + Number(g.dv || 0), P = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((w % 1 + 1) % 1 * a),
        minY: Math.floor(J(M, 0, 1) * l),
        maxY: Math.ceil(J(P, 0, 1) * l),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Qn(i.actionGroupId, "paint"), g = ii(i.actionGroupId, "paint", m);
      if (!g) return null;
      const b = g.centerUv.u - g.halfW, w = g.centerUv.u + g.halfW, M = g.centerUv.v - g.halfH, P = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((w % 1 + 1) % 1 * a),
        minY: Math.floor(J(M, 0, 1) * l),
        maxY: Math.ceil(J(P, 0, 1) * l),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    return null;
  }
  function sy(i, a, l) {
    if (!i || !a) return !1;
    const c = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], h = c(i), m = c(a);
    return h.some((g) => m.some((b) => !(g.maxX < b.minX || b.maxX < g.minX || g.maxY < b.minY || b.maxY < g.minY)));
  }
  function ly(i, a, l) {
    var xe, ze, He, Qe, be, ae, ge;
    if (!i || !a || !((xe = l == null ? void 0 : l.surface) != null && xe.canvas) || a.type !== "rasterObject") return i;
    const c = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (c < 1 || h < 1) return i;
    const m = ay(a, c, h);
    if (m && !sy(m, l.bounds, c)) return i;
    const g = String(((ze = a.item) == null ? void 0 : ze.id) || a.id || ""), b = ((He = a.item) == null ? void 0 : He.transform) || {}, w = `${l.key}:${g}:${c}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, M = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(w)) return M.get(w);
    const P = J(Math.floor(Number(((Qe = l.bounds) == null ? void 0 : Qe.minX) || 0)), 0, Math.max(0, c - 1)), A = J(Math.floor(Number(((be = l.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, h - 1)), F = J(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), P, Math.max(0, c - 1)), K = J(Math.ceil(Number(((ge = l.bounds) == null ? void 0 : ge.maxY) || 0)), A, Math.max(0, h - 1)), ee = Math.max(1, F - P + 1), Z = Math.max(1, K - A + 1), ne = qo(c, h, { readback: !0 });
    ne.ctx.clearRect(0, 0, c, h), ne.ctx.drawImage(i, 0, 0);
    const ie = ne.ctx.getImageData(P, A, ee, Z);
    ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(l.surface.canvas, 0, 0), ne.ctx.restore();
    const me = ne.ctx.getImageData(P, A, ee, Z);
    let re = !1;
    for (let ve = 0; ve < ee * Z; ve += 1) {
      const Oe = ie.data[ve * 4 + 3], je = me.data[ve * 4 + 3];
      if (Oe > je) {
        re = !0;
        break;
      }
    }
    return re ? (M.size > 64 && M.clear(), M.set(w, ne.canvas), ne.canvas) : (M.set(w, i), i);
  }
  function qf(i, a = null) {
    const l = qt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.bbox) || null;
    if (!l || !c) return null;
    const h = Yf(i, a);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: g } = iy(), b = (i == null ? void 0 : i.transform) || {}, w = [
      l,
      m,
      g,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      Jo()
    ].join(":"), M = Nt.get(w);
    if (M) return M;
    Nt.size > 64 && Nt.clear();
    const P = document.createElement("canvas");
    P.width = m, P.height = g;
    const A = P.getContext("2d");
    if (!A) return null;
    const F = Number(c.u0 || 0) * m, K = Number(c.v0 || 0) * g, ee = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), Z = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * g), ne = F + ee * 0.5 + Number(b.du || 0) * m, ie = K + Z * 0.5 + Number(b.dv || 0) * g, me = Number(b.rot_deg || 0) * br, re = Math.max(0.01, Number(b.scale || 1));
    for (const xe of [-m, 0, m])
      A.save(), A.translate(ne + xe, ie), A.rotate(me), A.scale(re, re), A.drawImage(h, -ee * 0.5, -Z * 0.5, ee, Z), A.restore();
    return Nt.set(w, P), P;
  }
  async function Ql(i, a) {
    const l = await new Promise((b) => i.toBlob(b, "image/png")), c = new FormData();
    c.append("image", l, a), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const h = await Wt.fetchApi("/upload/image", { method: "POST", body: c });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Ja = null, Za = !1;
  function cy() {
    const i = Rp(_.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const a = _.painting_layer, l = io();
    return !a || typeof a != "object" || String(a.revision || "") !== l || i.totalPaintCount > 0 && !a.paint || i.totalMaskCount > 0 && !a.mask;
  }
  function Jf() {
    const i = String(e.id ?? "0"), a = Ps.get(i);
    if (Za && a) return a;
    const l = (async () => {
      var m, g, b, w, M, P, A, F, K, ee, Z, ne;
      const c = io(), h = Rp(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, Ja = c, An());
        return;
      }
      if (Ja !== c && !Za) {
        Za = !0;
        try {
          is();
          const ie = zl(!1), me = ((g = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, ie)) || null, re = ((b = me == null ? void 0 : me.displayPaint) == null ? void 0 : b.canvas) || null, xe = ((w = me == null ? void 0 : me.committedMask) == null ? void 0 : w.canvas) || null, ze = Math.max(1, Number(((M = me == null ? void 0 : me.descriptor) == null ? void 0 : M.width) || (re == null ? void 0 : re.width) || (xe == null ? void 0 : xe.width) || 2048)), He = Math.max(1, Number(((P = me == null ? void 0 : me.descriptor) == null ? void 0 : P.height) || (re == null ? void 0 : re.height) || (xe == null ? void 0 : xe.height) || 1024));
          (!re && h.totalPaintCount > 0 || !xe && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((A = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : A.width) || 0) !== ze || Number(((F = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== He) && (p._paintLayerSyncBlankSurface = qo(ze, He)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ze, He));
          const Qe = re || h.totalPaintCount > 0 && ((K = p._paintLayerSyncBlankSurface) == null ? void 0 : K.canvas) || null, be = xe || h.totalMaskCount > 0 && ((ee = p._paintLayerSyncBlankSurface) == null ? void 0 : ee.canvas) || null;
          if (!Qe && !be) return;
          let ae = null, ge = null;
          const ve = [];
          if (h.totalPaintCount > 0) {
            ae = await Ql(Qe, `pano_paint_${i}.png`);
            for (const Oe of ie) {
              const je = String(Oe || "").trim();
              if (!je) continue;
              const Ee = ((ne = (Z = p.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : ne.call(Z, je)) || null;
              if (!Ee) continue;
              const lt = je.replace(/[^a-zA-Z0-9_-]+/g, "_"), Xe = await Ql(Ee, `pano_group_${i}_${lt}.png`);
              Xe && ve.push({
                id: je,
                actionGroupId: je,
                image: Xe
              });
            }
          }
          h.totalMaskCount > 0 && (ge = await Ql(be, `pano_mask_${i}.png`)), c === io() && (_.painting_layer = {
            paint: ae,
            mask: ge,
            groups: ve,
            revision: c
          }, Ja = c, An());
        } catch (ie) {
          throw ie;
        } finally {
          Za = !1;
        }
      }
    })();
    return Ps.set(i, l), l.finally(() => {
      Ps.get(i) === l && Ps.delete(i);
    }), l;
  }
  function ec() {
    if (t === "cutout") {
      const b = jf();
      if (b) return b;
      const w = Jc(
        e,
        ["erp_image", "bg_erp"],
        () => ce(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !Vu(w) ? w : qc(e, "pano_input_images", Ue, () => ce()) || w || null;
    }
    const i = jf();
    if (i) return i;
    const a = qc(e, "pano_input_images", Ue, () => ce());
    if (a && !Vu(a)) return a;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], c = l.includes("erp_image"), h = l.includes("bg_erp");
    let m = [];
    return r && (c || h) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Jc(e, m, () => ce(), `background:${m.join("|")}`) || a || null;
  }
  function tc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function uy() {
    if (gn.failed) return { status: ar, detail: "renderer" };
    if (!gn.ready) return { status: or, detail: "boot" };
    let i = Vo;
    const a = [];
    if (p.showPanorama) {
      const l = ec();
      i = $u(l, tc);
    }
    if (p.showObjects)
      for (const l of Ga()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const c = Uf(l);
        a.push($u(c, tc));
      }
    return SP({
      presented: Se.hasPresentedFrame,
      background: i,
      stickers: a
    });
  }
  function no() {
    const i = new Set(
      (_.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(_.assets || {}).forEach((a) => {
      i.has(a) || (delete _.assets[a], Ue.delete(a));
    });
  }
  function nc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(J(i.y, -1, 1))
    };
  }
  function rc(i, a = null) {
    const { lon: l, lat: c } = nc(i), h = ai();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const g = h.y + (0.5 - c / Math.PI) * h.h;
    if (a !== null) {
      for (; m - a > h.w / 2; ) m -= h.w;
      for (; m - a < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function Qa(i) {
    const a = nn(i), l = jo(
      Number(a.yaw_deg || 0),
      Number(a.pitch_deg || 0),
      Number(a.rot_deg || a.roll_deg || 0)
    ), c = Math.tan(J(Number(a.hFOV_deg || 20), 0.1, 179) * 0.5 * br), h = Math.tan(J(Number(a.vFOV_deg || 20), 0.1, 179) * 0.5 * br);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: c,
      tanY: h
    };
  }
  function si(i, a, l) {
    return qP(Dp(Dp(i.centerDir, Lp(i.right, a)), Lp(i.up, l)));
  }
  function Zf(i) {
    const a = Qa(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: h }) => si(a, c * a.tanX, h * a.tanY));
  }
  function Qf(i, a, l) {
    const c = Qa(i), h = (a * 2 - 1) * c.tanX, m = (1 - l * 2) * c.tanY;
    return si(c, h, m);
  }
  function ed(i) {
    const a = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: J((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function fy(i) {
    var w, M, P, A;
    const a = (i == null ? void 0 : i.bbox) || null;
    if (!a) return [];
    const l = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), h = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.rot_deg) || 0), m = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.du) || 0), g = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((F) => Ka(Ba(F, l, c, h), m, g));
  }
  function dy(i) {
    const a = qt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, c = (i == null ? void 0 : i.bbox) || {}, h = `${a}:${p.mode}:${Jo()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = Ve(), g = m ? Bt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function hy(i) {
    const a = String((i == null ? void 0 : i.id) || ""), l = Ln(i) ? "frame" : ht(i) ? "sticker" : "item", c = nn(i), h = [
      l,
      a,
      p.mode,
      Number((c == null ? void 0 : c.yaw_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.pitch_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.hFOV_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.vFOV_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.rot_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.roll_deg) || 0).toFixed(4),
      Br(c),
      Jn(i) && Di(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = Ve(), g = m ? Bt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((T == null ? void 0 : T.width) || 0))}:${Math.round(Number((T == null ? void 0 : T.height) || 0))}`;
  }
  function td() {
    var i, a;
    return ((a = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : a.call(i)) || null;
  }
  function py() {
    return td() ? `${ld()}:mask_display` : "";
  }
  function nd(i) {
    if (!p.showMask) return i;
    const a = td();
    if (!a) return i;
    const l = py(), c = i.reduce((g, b) => Math.max(g, Number((b == null ? void 0 : b.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, b) => Math.max(g, Number((b == null ? void 0 : b.z_index) || 0)), -1), m = Math.max(c, h);
    return i.push({
      id: "mask_display",
      source: a,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function my() {
    var c, h;
    const i = jl(!0), a = oy(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const b = ((h = (c = p.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : h.call(c, g)) || null;
        if (!b) continue;
        l.push({
          id: `paint_group:${g}`,
          source: b,
          revision: `${ld()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, b = qt((g == null ? void 0 : g.id) || m.id || "");
        if (!b) continue;
        const w = qf(g, () => ce());
        if (!w) continue;
        const M = ly(w, m, a), P = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${b}`,
          source: M,
          revision: [
            io(),
            (a == null ? void 0 : a.key) || "",
            b,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return nd(l);
  }
  function gy() {
    return (p.showObjects ? my() : nd([])).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  }
  function es() {
    return tn || (tn = yy()), tn;
  }
  function yy() {
    const i = ec(), a = gy(), l = { ..._.assets };
    for (const b of k ? [] : _.stickers) {
      const w = String((b == null ? void 0 : b.asset_id) || "");
      w && !l[w] && Ue.has(w) && (l[w] = { type: "comfy_image", filename: w });
    }
    const c = k ? _.stickers.map((b) => $l(b) ? { ...b, source: { kind: "file", filename: Xo(b) } } : b) : _.stickers, h = JSON.stringify([c, Object.keys(l)]);
    Vt.key !== h && (Vt = { key: h, sceneState: Ta({ ..._, stickers: c, assets: l, painting: null }) });
    const m = p.showObjects ? Tg(Vt.sceneState, p.frame, _.stickers, {
      media: (b) => {
        const w = Uf(b);
        return w ? { media: w, revision: Vf(w) } : null;
      },
      paintLayers: a
    }) : a.map((b) => ({ kind: "erp", ...b }));
    return { background: p.showPanorama && tc(i) ? { media: i, revision: Vf(i), coverage: Vn(_.coverage) } : null, layers: m };
  }
  function by() {
    if (!Se.backgroundDirty && Se.backgroundWasVisible) return;
    const { background: i, layers: a } = es(), l = le.width, c = le.height, h = gn.render({
      width: l,
      height: c,
      camera: Wf(),
      background: i,
      layers: a
    }), m = le.getContext("2d");
    m.clearRect(0, 0, l, c), !i && !a.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, c)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, c), Se.backgroundWasVisible = !!h, Se.backgroundDirty = !1, H = null;
  }
  function rd(i, a, l, c) {
    const { background: h, layers: m } = es();
    if (!h && !m.length) return !1;
    const g = gn.render({ width: a.w, height: a.h, camera: js(l), background: h, layers: m, owner: c });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, a.x, a.y, a.w, a.h), !0) : !1;
  }
  function vy(i) {
    const a = es(), l = JSON.stringify([i, le.width, le.height, Zh(a)]);
    if (l === H) return;
    const c = gn.renderUnwrap({ width: i.w, height: i.h, ...a }), h = le.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, le.width, le.height), c && h.drawImage(c.canvas, c.x, c.y, c.width, c.height, i.x, i.y, i.w, i.h), H = c ? l : null, Se.backgroundWasVisible = !1;
  }
  function _y(i = !1) {
    const a = T.width, l = T.height, c = ai();
    if (E.globalAlpha = 1, E.lineWidth = 1, i || E.clearRect(0, 0, a, l), is(), vy(c), p.showGrid && !p.fullscreen) {
      E.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = c.x + c.w * m / 16;
        E.beginPath(), E.moveTo(g, c.y), E.lineTo(g, c.y + c.h), E.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = c.y + c.h * m / 8;
        E.beginPath(), E.moveTo(c.x, g), E.lineTo(c.x + c.w, g), E.stroke();
      }
      E.strokeStyle = "rgba(250, 250, 250, 0.86)", E.lineWidth = 1.2, E.beginPath(), E.moveTo(c.x, c.y + c.h / 2), E.lineTo(c.x + c.w, c.y + c.h / 2), E.stroke(), E.fillStyle = "rgba(250, 250, 250, 0.42)", E.font = "500 11px Geist, sans-serif", E.textAlign = "center";
      const h = c.y + c.h * 0.57;
      E.fillText("Left", c.x + c.w * 0.25, h), E.fillText("Front", c.x + c.w * 0.5, h), E.fillText("Right", c.x + c.w * 0.75, h), E.fillText("Back", c.x + 38, h), E.fillText("Back", c.x + c.w - 38, h);
    }
  }
  function id(i, a, l = 1) {
    let c = !1;
    E.strokeStyle = a, E.lineWidth = l, E.beginPath();
    for (const h of i) {
      const m = Yo(h);
      if (!m) {
        c = !1;
        continue;
      }
      c ? E.lineTo(m.x, m.y) : (E.moveTo(m.x, m.y), c = !0);
    }
    E.stroke();
  }
  function xy(i = !1) {
    const a = T.width, l = T.height;
    if (i || E.clearRect(0, 0, a, l), is(), by(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(On(h, g));
        id(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(On(g, h));
        id(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: On(-90, 0) },
        { name: "Front", dir: On(0, 0) },
        { name: "Right", dir: On(90, 0) },
        { name: "Back", dir: On(180, 0) }
      ];
      E.fillStyle = "rgba(250, 250, 250, 0.42)", E.font = "500 11px Geist, sans-serif", E.textAlign = "center", c.forEach((h) => {
        const m = Yo(h.dir);
        m && E.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function wy(i, a = null, l = null, c = null) {
    if (p.mode === "frame") {
      const h = a || Ve();
      if (!h) return [];
      const m = l || Bt(h);
      return Qy(i, h, m);
    }
    return hd(i, c);
  }
  function ts(i, a = null, l = null, c = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const g = hd([i], h);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = ro(i);
    return m ? Rr(m, a, l, c) : null;
  }
  function Sy(i, a) {
    const l = String(i.actionGroupId || i.id || "").trim(), c = Qn(l, i.layerKind), h = ii(l, i.layerKind, c), m = (h == null ? void 0 : h.centerUv) || Kl(l, i.layerKind, c), g = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], w = p.mode === "frame" ? Ve() : null, M = w ? Bt(w) : null;
    for (const re of c) {
      const xe = (re == null ? void 0 : re.geometry) || null, ze = (xe == null ? void 0 : xe.geometryKind) === "lasso_fill" ? xe == null ? void 0 : xe.points : (xe == null ? void 0 : xe.processedPoints) || (xe == null ? void 0 : xe.rawPoints) || (xe == null ? void 0 : xe.points) || [], He = wy(ze, w, M, g).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!He.length) continue;
      const Qe = fi(String((re == null ? void 0 : re.toolKind) || "pen")), be = Cn[Qe] || Cn[zr];
      b.push({
        points: He,
        closed: String((xe == null ? void 0 : xe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const P = ts(m, null, w, M, g);
    if (!P) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(a, re), re;
    }
    const F = P0(h).map((re) => ts(re, P.x, w, M, g)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (F.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(a, re), re;
    }
    const K = (re, xe) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((xe == null ? void 0 : xe.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((xe == null ? void 0 : xe.y) || 0)) * 0.5,
      a: re,
      b: xe
    }), ee = K(F[0], F[1]), Z = K(F[1], F[2]), ne = K(F[2], F[3]), ie = K(F[3], F[0]), me = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...ee },
        { edge: "right", ...Z },
        { edge: "bottom", ...ne },
        { edge: "left", ...ie }
      ],
      rotateStemBase: { x: ee.x, y: ee.y },
      rotateHandle: { x: ee.x, y: ee.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return p._strokeGeomCache.set(a, me), me;
  }
  function ky(i, a) {
    const l = p.mode === "frame" ? Ve() : null, c = l ? Bt(l) : null, h = ed(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, g = ts(h, null, l, c, m), w = fy(i).map((F) => ts(F, (g == null ? void 0 : g.x) ?? null, l, c, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(w) || w.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(a, F), F;
    }
    const M = w.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: M.reduce((F, K) => F + Number(K.x || 0), 0) / M.length,
        y: M.reduce((F, K) => F + Number(K.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return p._strokeGeomCache.set(a, A), A;
  }
  function Rr(i, a = null, l = null, c = null, h = {}) {
    if (p.mode === "frame") {
      const P = l || Ve(), A = c || Bt(P);
      if (!P || !A) return null;
      const F = P ? Zo(P, i) : null;
      return F ? {
        x: Number(A.x || 0) + Number(F.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(F.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return rc(i, a);
    const m = 1e-4, g = Jl().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(h != null && h.clipBehind)) return null;
    const b = T.width, w = T.height, M = Math.max(b, w) * 2;
    return {
      x: J(g.x, -M, b + M),
      y: J(g.y, -M, w + M),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function My(i, a = []) {
    if (p.mode !== "pano" || ht(i)) return 1;
    const l = a.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return l.length ? WP(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Ny(i) {
    if (Jn(i) && !Di(i.clip, p.frame)) return { visible: !1 };
    const a = nn(i), l = On(Number(a.yaw_deg || 0), Number(a.pitch_deg || 0)), c = p.mode === "frame" ? Ve() : null, h = c ? Bt(c) : null, m = p.mode === "pano" && (ht(i) || Ln(i)), g = m ? { clipBehind: !0 } : null, b = Rr(l, null, c, h, g);
    if (!b) return { visible: !1 };
    const w = Qa(i), P = Zf(i).map((ge) => Rr(ge, b.x, c, h, g)).filter((ge) => Number.isFinite(ge == null ? void 0 : ge.x) && Number.isFinite(ge == null ? void 0 : ge.y));
    if (P.length < 4) return { visible: !1 };
    const A = si(w, 0, w.tanY), F = si(w, 0, w.tanY + Math.max(w.tanY * 0.43, 0.053)), K = Rr(A, b.x, c, h, g);
    if (!K) return { visible: !1 };
    const ee = Rr(F, (K == null ? void 0 : K.x) ?? b.x, c, h, g), Z = ((ee == null ? void 0 : ee.x) ?? K.x) - K.x, ne = ((ee == null ? void 0 : ee.y) ?? K.y) - K.y, ie = Math.hypot(Z, ne) || 1, me = {
      x: K.x + Z / ie * 30,
      y: K.y + ne / ie * 30
    }, re = Rr(si(w, 0, w.tanY), b.x, c, h, g), xe = Rr(si(w, w.tanX, 0), b.x, c, h, g), ze = Rr(si(w, 0, -w.tanY), b.x, c, h, g), He = Rr(si(w, -w.tanX, 0), b.x, c, h, g);
    if (!re || !xe || !ze || !He) return { visible: !1 };
    const Qe = [
      b,
      ...P,
      K,
      ee,
      re,
      xe,
      ze,
      He
    ];
    if (m && !Qe.some((ge) => Number((ge == null ? void 0 : ge.rawZ) ?? (ge == null ? void 0 : ge.z)) > 1e-4)) return { visible: !1 };
    const be = My(i, Qe), ae = [
      {
        edge: "top",
        x: re.x,
        y: re.y,
        a: { x: P[0].x, y: P[0].y },
        b: { x: P[1].x, y: P[1].y }
      },
      {
        edge: "right",
        x: xe.x,
        y: xe.y,
        a: { x: P[1].x, y: P[1].y },
        b: { x: P[2].x, y: P[2].y }
      },
      {
        edge: "bottom",
        x: ze.x,
        y: ze.y,
        a: { x: P[2].x, y: P[2].y },
        b: { x: P[3].x, y: P[3].y }
      },
      {
        edge: "left",
        x: He.x,
        y: He.y,
        a: { x: P[3].x, y: P[3].y },
        b: { x: P[0].x, y: P[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: P.map((ge) => ({ x: ge.x, y: ge.y })),
      edgeMidpoints: ae,
      rotateStemBase: { x: K.x, y: K.y },
      rotateHandle: me,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function Zt(i) {
    if (Kt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = T0(h, i.layerKind), g = p._strokeGeomCache.get(m);
      return g || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Sy(i, m));
    }
    if (ln(i)) {
      const h = dy(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), ky(i, h));
    }
    const a = hy(i), l = p._strokeGeomCache.get(a);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const c = Ny(i);
    return p._strokeGeomCache.set(a, c), c;
  }
  function ns(i, a, l, c = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let b = 0, w = 0;
      a === 0 ? (b = g, w = 0) : a === 1 ? (b = 1, w = g) : a === 2 ? (b = 1 - g, w = 1) : (b = 0, w = 1 - g);
      const M = Qf(i, b, w), P = p.mode === "unwrap" ? rc(M, c) : Yo(M);
      P && h.push(P);
    }
    return h;
  }
  function Py(i, a) {
    const l = nn(i), c = On(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), h = p.mode === "unwrap" ? rc(c) : null, m = h ? h.x : null, g = p.mode === "pano" ? 28 : 20, b = [
      ns(i, 0, g, m),
      ns(i, 1, g, m),
      ns(i, 2, g, m),
      ns(i, 3, g, m)
    ];
    t0(E, b, { selected: a });
  }
  function Ay() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], a = [...Array.isArray(_.stickers) ? _.stickers : []].sort((l, c) => Number(l.z_index || 0) - Number(c.z_index || 0));
    return [...i, ...a];
  }
  function ic() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((l, c) => Number(c.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function rs(i, a = []) {
    if (!(!i || !Array.isArray(a) || a.length < 4)) {
      i.beginPath(), i.moveTo(a[0].x, a[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(a[l].x, a[l].y);
      i.closePath();
    }
  }
  function od(i, a, l) {
    const c = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (c.length < 4) return;
    const h = J(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = E.globalAlpha;
    E.globalAlpha = m * h;
    const g = l ? "rgba(255, 116, 116, 0.96)" : a ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", b = l ? "rgba(255, 89, 89, 0.08)" : a ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = a ? 3.2 : 2.6;
    rs(E, c), E.fillStyle = b, E.fill(), E.strokeStyle = g, E.lineWidth = w, E.stroke(), E.save(), E.strokeStyle = g, E.lineWidth = a ? 3.2 : 2.6, E.lineCap = "round";
    const M = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], P = { top: "bottom", right: "left", bottom: "top", left: "right" }, A = a ? 12 : 9;
    M.forEach((F) => {
      const ee = M.find((me) => (me == null ? void 0 : me.edge) === P[F == null ? void 0 : F.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, Z = ee.x - F.x, ne = ee.y - F.y, ie = Math.hypot(Z, ne) || 1;
      E.beginPath(), E.moveTo(F.x, F.y), E.lineTo(F.x + Z / ie * A, F.y + ne / ie * A), E.stroke();
    }), E.restore(), E.globalAlpha = m;
  }
  function Cy(i, a, l, c) {
    const h = J(Number((a == null ? void 0 : a.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (Ln(i)) {
      od(a, l, c);
      return;
    }
    if (ht(i)) {
      const g = E.globalAlpha;
      E.globalAlpha = g * V0(i) * h, p.mode === "frame" ? (E.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", E.lineWidth = l ? 2 : 1, rs(E, a.corners), E.stroke()) : Py(i, l), E.globalAlpha = g;
      return;
    }
    const m = E.globalAlpha;
    E.globalAlpha = m * h, E.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", rs(E, a.corners), E.fill(), E.strokeStyle = l ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", E.lineWidth = l ? 2.8 : 1.9, rs(E, a.corners), E.stroke(), E.globalAlpha = m;
  }
  function ad(i, a, l) {
    if (ht(i)) {
      n0(E, a, { accent: l });
      return;
    }
    E.fillStyle = l, a.corners.forEach((c) => {
      E.beginPath(), E.arc(c.x, c.y, 6.5, 0, Math.PI * 2), E.fill();
    }), Ln(i) && (E.strokeStyle = l, E.lineCap = "round", E.lineWidth = 4, a.edgeMidpoints.forEach((c) => {
      var P, A, F, K;
      const h = (((P = c.b) == null ? void 0 : P.x) ?? c.x) - (((A = c.a) == null ? void 0 : A.x) ?? c.x), m = (((F = c.b) == null ? void 0 : F.y) ?? c.y) - (((K = c.a) == null ? void 0 : K.y) ?? c.y), g = Math.hypot(h, m) || 1, b = h / g, w = m / g, M = 10;
      E.beginPath(), E.moveTo(c.x - b * M, c.y - w * M), E.lineTo(c.x + b * M, c.y + w * M), E.stroke();
    }), E.lineCap = "butt"), Kt(i) || (E.strokeStyle = "rgba(250, 250, 250, 0.9)", E.lineWidth = 1.8, E.beginPath(), E.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), E.lineTo(a.rotateHandle.x, a.rotateHandle.y), E.stroke(), E.fillStyle = l, E.beginPath(), E.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), E.fill());
  }
  function Iy() {
    var m;
    const i = p.mode === "frame" ? [] : er(), a = i.length > 1, l = t === "cutout" ? Ay() : dr(), c = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${Ln(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== c) && (p._sortedItemsCache = {
      src: l,
      orderKey: c,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const g of h) {
      const b = p.mode !== "frame" && !a && Ff(g);
      if (p.mode === "frame" && !b || !p.showObjects && !Ln(g)) continue;
      const w = ht(g), M = Ln(g), P = bn(g);
      if (!w && !M || Jn(g) && !Di(g.clip, p.frame)) continue;
      const A = Zt(g);
      if (t !== "stickers" && !A.visible)
        continue;
      const F = J(Number((A == null ? void 0 : A.visibilityAlpha) ?? 1), 0, 1);
      if (F <= 0.01) continue;
      const K = M && t === "cutout" && p.mode === "pano" ? J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (E.save(), E.globalAlpha *= K, Cy(g, A, b, P), b && A.visible) {
        const ee = P ? "#ff4d4f" : w && Jt(g) ? "#f59e0b" : "#0070f3", Z = E.globalAlpha;
        E.globalAlpha = Z * F, ad(g, A, ee), E.globalAlpha = Z;
      }
      E.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !Ve() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const g = p.cutoutPanoFrameVisual, b = J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      E.save(), E.globalAlpha *= b, od(g.geom, g.selected, g.locked), g.selected && ad(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), E.restore();
    }
    if (a) {
      const g = Bl(i);
      if (g != null && g.visible) {
        const b = Wl(i) ? "#ff4d4f" : "#0070f3";
        E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.95)", E.lineWidth = 2, E.setLineDash([6, 4]), E.beginPath(), E.moveTo(g.corners[0].x, g.corners[0].y);
        for (let w = 1; w < g.corners.length; w += 1) E.lineTo(g.corners[w].x, g.corners[w].y);
        E.closePath(), E.stroke(), E.setLineDash([]), E.fillStyle = b, g.corners.forEach((w) => {
          E.beginPath(), E.arc(w.x, w.y, 6.5, 0, Math.PI * 2), E.fill();
        }), E.restore();
      }
    } else
      i.forEach((g) => {
        if (!Kt(g) && !ln(g)) return;
        const b = Zt(g);
        if (!(b != null && b.visible)) return;
        const w = bn(g) ? "#ff4d4f" : "#0070f3";
        E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.95)", E.lineWidth = 2, E.setLineDash([6, 4]), E.beginPath(), E.moveTo(b.corners[0].x, b.corners[0].y);
        for (let M = 1; M < b.corners.length; M += 1) E.lineTo(b.corners[M].x, b.corners[M].y);
        E.closePath(), E.stroke(), E.setLineDash([]), E.fillStyle = w, b.corners.forEach((M) => {
          E.beginPath(), E.arc(M.x, M.y, 6.5, 0, Math.PI * 2), E.fill();
        }), E.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Fd(p.interaction.start, p.interaction.current);
      E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.9)", E.fillStyle = "rgba(255, 255, 255, 0.08)", E.lineWidth = 1, E.setLineDash([5, 4]), E.beginPath(), E.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), E.fill(), E.stroke(), E.restore();
    }
  }
  function sd(i, a = !1) {
    const l = J(Gi(i), 0.05, 20), c = a ? 320 : 220;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function Ey(i) {
    if (!kn || !i) return !1;
    const a = kn.closest(".pano-camera-preview");
    if (!a) return !1;
    const l = Math.round(Number(a.clientWidth || kn.clientWidth || 0)), c = Math.round(Number(a.clientHeight || kn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(c - Number(i.height || 0)) <= 1;
  }
  function Oy() {
    if (p.outputPreviewRect = null, N.outputPreviewToggle.visible = p.mode !== "frame" && !!Ve(), t !== "cutout" || !N.cameraPreview) return;
    if (p.mode === "frame") {
      N.cameraPreview.visible = !1, N.cameraPreview.settled = !1;
      return;
    }
    const i = Ve();
    N.cameraPreview.visible = !0, N.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const a = Fn == null ? void 0 : Fn.getContext("2d");
    if (!i || !a) {
      N.cameraPreview.ready = !1, N.cameraPreview.settled = !1, N.cameraPreview.width = 220, N.cameraPreview.height = 132, N.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", a == null || a.clearRect(0, 0, Fn.width, Fn.height), Dr = null;
      return;
    }
    const l = sd(i, !!p.outputPreviewExpanded);
    N.cameraPreview.width = l.width, N.cameraPreview.height = l.height;
    const c = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * c)), h: Math.max(1, Math.round(l.height * c)) };
    (Fn.width !== h.w || Fn.height !== h.h) && (Fn.width = h.w, Fn.height = h.h);
    const m = JSON.stringify([h, ei(i), Zh(es())]);
    let g = m === Dr;
    if (g || (a.clearRect(0, 0, h.w, h.h), g = rd(a, h, i, "camera_preview"), Dr = g ? m : null), !g) {
      N.cameraPreview.ready = !1, N.cameraPreview.label = ec() ? "Loading preview" : "Connect ERP image", N.cameraPreview.settled = !1;
      return;
    }
    const b = Ey(l);
    N.cameraPreview.ready = !0, N.cameraPreview.label = b ? "" : "Loading preview", N.cameraPreview.settled = b && Se.pendingStableLayoutFrames <= 0 && Se.hasPresentedFrame;
  }
  function oc(i, a) {
    if (!i || !a) return null;
    const l = Number(a.x || 0), c = Number(a.y || 0);
    return Qf(i, l, c);
  }
  function ro(i) {
    if (!i) return null;
    const a = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, c = Math.cos(l);
    return Dl(c * Math.sin(a), Math.sin(l), c * Math.cos(a));
  }
  function Ty(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Fy(i, a, l, c = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: cn(i, "widthScale", 1),
      pressureLike: cn(i, "pressureLike", 1)
    }, ...c, u: a, v: l };
  }
  function Dy(i, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function ac(i, a, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const c = String((a == null ? void 0 : a.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (c) {
      let Z = null;
      i.forEach((ne) => {
        const ie = Number((ne == null ? void 0 : ne.u) || 0), me = Number((ne == null ? void 0 : ne.v) || 0), re = (ie % 1 + 1) % 1, xe = Z == null ? re : Z + Gn(re, (Z % 1 + 1) % 1);
        h.set(ne, { x: xe, y: me }), Z = xe;
      });
    }
    const m = (Z) => !Z || typeof Z != "object" ? { x: 0, y: 0 } : h.get(Z) || Ty(Z), g = (Z, ne, ie, me = {}) => {
      const re = c ? (Number(ne) % 1 + 1) % 1 : Number(ne), xe = Fy(Z, re, ie, me);
      return h.set(xe, { x: Number(ne), y: Number(ie) }), xe;
    }, b = (Z, ne, ie) => {
      const me = m(Z), re = m(ne);
      return g(Z, Bn(me.x, re.x, ie), Bn(me.y, re.y, ie), {
        t: Bn(Number((Z == null ? void 0 : Z.t) || 0), Number((ne == null ? void 0 : ne.t) || 0), ie),
        widthScale: Bn(cn(Z, "widthScale", 1), cn(ne, "widthScale", 1), ie),
        pressureLike: Bn(cn(Z, "pressureLike", 1), cn(ne, "pressureLike", 1), ie)
      });
    };
    if (i.length === 1) {
      const Z = m(i[0]);
      return [g(i[0], Z.x, Z.y)];
    }
    const w = Dy(a, l), M = (Z, ne) => {
      const ie = [0];
      for (let ae = 1; ae < Z.length; ae += 1) {
        const ge = m(Z[ae - 1]), ve = m(Z[ae]);
        ie.push(ie[ae - 1] + Math.hypot(ve.x - ge.x, ve.y - ge.y));
      }
      const me = ie[ie.length - 1] || 0;
      if (me <= 1e-8) {
        const ae = Z[0], ge = m(ae);
        return [g(ae, ge.x, ge.y)];
      }
      const re = [];
      let xe = 0;
      for (let ae = 0; ae <= me + 1e-9; ae += ne) {
        for (; xe < ie.length - 2 && ie[xe + 1] < ae; ) xe += 1;
        const ge = ie[xe], ve = ie[xe + 1], Oe = Math.max(1e-8, ve - ge);
        re.push(b(Z[xe], Z[xe + 1], J((ae - ge) / Oe, 0, 1)));
      }
      const ze = Z[Z.length - 1], He = m(ze), Qe = re[re.length - 1], be = Qe ? m(Qe) : null;
      return (!be || Math.hypot(be.x - He.x, be.y - He.y) > ne * 0.35) && re.push(g(ze, He.x, He.y)), re;
    }, P = (Z) => {
      if (!Array.isArray(Z) || Z.length < 3) return Z ? Z.slice() : [];
      const ne = m(Z[0]), ie = [g(Z[0], ne.x, ne.y)];
      for (let xe = 0; xe < Z.length - 1; xe += 1) {
        const ze = Z[xe], He = Z[xe + 1], Qe = m(ze), be = m(He), ae = g(
          ze,
          Qe.x * 0.75 + be.x * 0.25,
          Qe.y * 0.75 + be.y * 0.25,
          {
            t: Number(ze.t || 0) * 0.75 + Number(He.t || 0) * 0.25,
            widthScale: cn(ze, "widthScale", 1) * 0.75 + cn(He, "widthScale", 1) * 0.25,
            pressureLike: cn(ze, "pressureLike", 1) * 0.75 + cn(He, "pressureLike", 1) * 0.25
          }
        ), ge = g(
          ze,
          Qe.x * 0.25 + be.x * 0.75,
          Qe.y * 0.25 + be.y * 0.75,
          {
            t: Number(ze.t || 0) * 0.25 + Number(He.t || 0) * 0.75,
            widthScale: cn(ze, "widthScale", 1) * 0.25 + cn(He, "widthScale", 1) * 0.75,
            pressureLike: cn(ze, "pressureLike", 1) * 0.25 + cn(He, "pressureLike", 1) * 0.75
          }
        );
        ie.push(ae, ge);
      }
      const me = Z[Z.length - 1], re = m(me);
      return ie.push(g(me, re.x, re.y)), ie;
    }, A = M(i, w);
    if (A.length < 3) return A;
    const F = l ? 2 : 1;
    let K = A.slice();
    for (let Z = 0; Z < F; Z += 1) K = P(K);
    return M(K, Math.max(w * 0.75, 55e-5));
  }
  function cn(i, a, l = 1) {
    const c = Number(i == null ? void 0 : i[a]);
    return Number.isFinite(c) ? Math.max(0, c) : l;
  }
  function Ly(i) {
    const a = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(a) && a > 0) {
      const l = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return l === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: l,
        value: a
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function qo(i, a, l = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(i)), c.height = Math.max(1, Math.round(a));
    const h = c.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, c.width, c.height), h.imageSmoothingEnabled = !0), { canvas: c, ctx: h };
  }
  function Jo() {
    const i = os();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function io() {
    const i = os();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function ld() {
    const i = Hl(), a = io();
    return i ? `${a}:${i}` : a;
  }
  function Ry() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function $y() {
    p.paintCompositeRevision += 1;
  }
  function Vy() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function cd() {
    var i, a;
    p.paintEngineRevisionKey = null, (a = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || a.call(i, _), p.paintEngineRevisionKey = Jo();
  }
  function ud() {
    _.painting_layer !== null && (_.painting_layer = null), Ja = "";
  }
  function jt() {
    Vy(), Se.backgroundDirty = !0, Se.dirty = !0;
  }
  function tr({ rebuildPaintEngine: i = !1 } = {}) {
    ud(), Ry(), jt(), i && cd();
  }
  function oo() {
    ud(), $y(), jt();
  }
  function is() {
    var c;
    const i = os(), a = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== a && (p.paintEngine = hu(i), p.paintEngineDescriptorKey = a, p.paintEngineRevisionKey = "");
    const l = Jo();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (c = p.paintEngine) == null || c.rebuildCommitted(_));
  }
  function os() {
    const i = Math.max(1, C(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Rn() {
    return os();
  }
  function zy(i, a, l, c, h = null) {
    const m = Ly(i), g = cn(a, "widthScale", 1) * cn(a, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * br) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function jy(i, a, l = {}) {
    const c = String((a == null ? void 0 : a.layerKind) || "paint"), h = String((a == null ? void 0 : a.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * g : 1, c === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${w})`;
  }
  function Hy(i, a, l) {
    const c = Math.max(0.5, Math.min(l, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(c) || (i.beginPath(), i.arc(Number(a.x || 0), Number(a.y || 0), c, 0, Math.PI * 2), i.fill());
  }
  function Gy(i, a, l, c, h = {}) {
    if (!i || !Array.isArray(a) || !a.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    i.save(), jy(i, l, h);
    const g = (b) => Hy(i, b, m);
    if (a.length === 1) {
      g(a[0]), i.restore();
      return;
    }
    for (let b = 0; b < a.length - 1; b += 1) {
      const w = a[b], M = a[b + 1];
      if (!w || !M) continue;
      const P = Number(w.x || 0), A = Number(w.y || 0), F = Number(M.x || 0), K = Number(M.y || 0), ee = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), Z = Math.max(0.5, Math.min(m, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(A) || !Number.isFinite(F) || !Number.isFinite(K) || !Number.isFinite(ee) || !Number.isFinite(Z)) continue;
      const ne = F - P, ie = K - A, me = Math.hypot(ne, ie);
      if (!Number.isFinite(me) || me < 1e-6) {
        g(w);
        continue;
      }
      if (me > Math.max(c.w, c.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ee, Z)), xe = Math.max(0.35, Math.min(re * 0.4, 2.25)), ze = Math.max(1, Math.ceil(me / xe));
      for (let He = 0; He <= ze; He += 1) {
        const Qe = He / ze;
        g({
          x: Bn(P, F, Qe),
          y: Bn(A, K, Qe),
          radiusPx: Bn(ee, Z, Qe)
        });
      }
    }
    g(a[a.length - 1]), i.restore();
  }
  function Ky(i, a, l, c) {
    Gy(i, a, l, c, { preview: !1 });
  }
  function By(i, a, l, c, h) {
    var b, w, M, P;
    if (!i || !Array.isArray(a) || a.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const A = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(A.r || 0) * 255)}, ${Math.round(Number(A.g || 0) * 255)}, ${Math.round(Number(A.b || 0) * 255)}, ${Number(A.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = a[0]) == null ? void 0 : b[m]) || 0) * c.w, Number(((w = a[0]) == null ? void 0 : w[g]) || 0) * c.h);
    for (let A = 1; A < a.length; A += 1)
      i.lineTo(Number(((M = a[A]) == null ? void 0 : M[m]) || 0) * c.w, Number(((P = a[A]) == null ? void 0 : P[g]) || 0) * c.h);
    i.closePath(), i.fill(), i.restore();
  }
  function fd(i) {
    const a = (i == null ? void 0 : i.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function Wy(i, a) {
    const l = fd(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: zy(i, c, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function dd(i, a, l = null) {
    var b, w, M, P;
    if (!(i != null && i.ctx) || !a) return !1;
    const c = l || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, h = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((M = a == null ? void 0 : a.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((P = a == null ? void 0 : a.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return By(i.ctx, fd(h), h, c), !0;
    const g = Wy(h, c);
    return g.length ? (Ky(i.ctx, g, h, c), !0) : !1;
  }
  function Uy(i, a, l, c = 8) {
    const h = new Uint8Array(a * l), m = [], g = new Int32Array(a * l), b = new Int32Array(a * l);
    for (let w = 0; w < l; w += 1)
      for (let M = 0; M < a; M += 1) {
        const P = w * a + M;
        if (h[P] || i[P] <= c) continue;
        let A = 0, F = 0;
        g[F] = M, b[F] = w, F += 1, h[P] = 1;
        const K = [];
        let ee = M, Z = w, ne = M, ie = w;
        for (; A < F; ) {
          const me = g[A], re = b[A];
          A += 1, K.push({ x: me, y: re }), me < ee && (ee = me), re < Z && (Z = re), me > ne && (ne = me), re > ie && (ie = re);
          const xe = [
            [(me - 1 + a) % a, re],
            [(me + 1) % a, re],
            [me, re - 1],
            [me, re + 1]
          ];
          for (const [ze, He] of xe) {
            if (He < 0 || He >= l) continue;
            const Qe = He * a + ze;
            h[Qe] || i[Qe] <= c || (h[Qe] = 1, g[F] = ze, b[F] = He, F += 1);
          }
        }
        m.push({ pixels: K, minX: ee, minY: Z, maxX: ne, maxY: ie });
      }
    return m;
  }
  function Yy(i, a) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, M) => w - M);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let c = -1, h = 0;
    for (let w = 0; w < l.length; w += 1) {
      const M = l[w], A = (w === l.length - 1 ? l[0] + a : l[w + 1]) - M - 1;
      A > c && (c = A, h = w);
    }
    const m = (l[(h + 1) % l.length] + a) % a;
    let g = 1 / 0, b = -1 / 0;
    for (const w of l) {
      const M = (w - m + a) % a;
      g = Math.min(g, M), b = Math.max(b, M);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - g + 1)
    };
  }
  function Xy(i, a, l = {}) {
    var M;
    const c = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (M = i == null ? void 0 : i.getContext) == null ? void 0 : M.call(i, "2d");
    if (!m || c < 1 || h < 1) return [];
    const g = m.getImageData(0, 0, c, h), b = new Uint8Array(c * h);
    for (let P = 0; P < b.length; P += 1) b[P] = g.data[P * 4 + 3];
    return Uy(b, c, h, 8).map((P, A) => {
      const F = Yy(P, c);
      if (!F) return null;
      const K = Number(F.widthPx || 0), ee = P.maxY - P.minY + 1, Z = Number(F.startX || 0), ne = document.createElement("canvas");
      ne.width = K, ne.height = ee;
      const ie = ne.getContext("2d");
      if (!ie) return null;
      const me = ie.createImageData(K, ee);
      return P.pixels.forEach(({ x: re, y: xe }) => {
        const ze = (xe * c + re) * 4, He = (Number(re || 0) - Z + c) % c, Qe = ((xe - P.minY) * K + He) * 4;
        me.data[Qe + 0] = g.data[ze + 0], me.data[Qe + 1] = g.data[ze + 1], me.data[Qe + 2] = g.data[ze + 2], me.data[Qe + 3] = g.data[ze + 3];
      }), ie.putImageData(me, 0, 0), {
        id: bo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + A * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / h,
          u1: K / c,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: ne.toDataURL("image/png"),
        transform: {
          du: Z / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Zo(i, a) {
    if (!i || !a) return null;
    const l = Qa(i), c = Zc(a, l.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const h = Zc(a, l.right) / c, m = Zc(a, l.up) / c;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function qy(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = ai();
      return i.map((c) => ({
        x: l.x + Number(c.u || 0) * l.w,
        y: l.y + Number(c.v || 0) * l.h
      }));
    }
    const a = i.map((l) => Yo(ro(l))).filter(Boolean);
    return a.every((l) => Number(l.z || 0) > 0) ? a.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function hd(i, a = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = ai();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, g = a == null ? m : Number(a || 0) + Gn(m, a);
        return {
          x: c.x + g * c.w,
          y: c.y + Number(h.v || 0) * c.h
        };
      });
    }
    const l = i.map((c) => Yo(ro(c))).filter(Boolean);
    return l.every((c) => Number(c.z || 0) > 0) ? l.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Jy(i, a = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l], h = i[(l + 1) % i.length];
      if (!c || !h || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(c.x), Number(h.y) - Number(c.y)) > a) return !1;
    }
    return !0;
  }
  function Zy(i, a, l) {
    if (!Array.isArray(i) || i.length < 3 || !a || !l) return [];
    const c = [];
    for (const h of i) {
      const m = ro(h), g = Zo(a, m);
      if (!g) return [];
      c.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return Jy(c, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? c : [];
  }
  function Qy(i, a, l) {
    if (!Array.isArray(i) || i.length < 1 || !a || !l) return [];
    const c = [];
    for (const h of i) {
      const m = ro(h), g = Zo(a, m);
      g && c.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return c;
  }
  function eb() {
    const i = Ve(), a = fc(i);
    if (!i || !a) return !1;
    const l = { x: a.x, y: a.y, w: a.w, h: a.h }, { rect: c, shot: h } = nw(i, a, { width: T.width, height: T.height }), m = tb(l);
    return E.save(), E.fillStyle = "#0a0a0a", E.fillRect(0, 0, T.width, T.height), rd(E, c, h) || (E.fillStyle = "rgba(255, 255, 255, 0.03)", E.fillRect(c.x, c.y, c.w, c.h)), E.restore(), E.save(), E.fillStyle = "rgba(0, 0, 0, 0.58)", E.beginPath(), E.rect(0, 0, T.width, T.height), E.roundRect(l.x, l.y, l.w, l.h, m), E.fill("evenodd"), E.restore(), E.save(), E.strokeStyle = TP, E.globalAlpha = 0.62, E.lineWidth = 2, E.beginPath(), E.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), E.stroke(), E.restore(), !0;
  }
  function tb(i) {
    const a = Math.max(1e-6, Number(Se.frameCanvasScale || 1));
    return Math.min(ke * a, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function $r() {
    var a;
    const i = p.mode === "frame" ? Ve() : null;
    N.frameRollKnob.visible = !!i && !r && i.locked !== !0, N.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), N.frameRollKnob.displayValue = yo(N.frameRollKnob.rollDeg), N.frameRollKnob.dragging = ((a = p.interaction) == null ? void 0 : a.kind) === "roll_frame", N.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function nb() {
    var w, M;
    if (((w = p.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, a = (M = i == null ? void 0 : i.geometry) == null ? void 0 : M.points;
    let l;
    if (p.mode === "frame") {
      const P = Ve(), A = Bt(P);
      l = Zy(a, P, A);
    } else
      l = qy(a);
    if (!Array.isArray(l) || l.length < 3) return;
    const c = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), g = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    E.save(), E.beginPath(), E.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let P = 1; P < l.length; P++) E.lineTo(Number(l[P].x || 0), Number(l[P].y || 0));
    E.closePath(), c ? (E.lineWidth = 2, E.setLineDash([6, 6]), E.lineDashOffset = 0, E.strokeStyle = "rgba(0,0,0,0.96)", E.stroke(), E.lineDashOffset = -6, E.strokeStyle = "rgba(255,255,255,0.96)", E.stroke(), E.setLineDash([]), E.lineDashOffset = 0) : (E.lineWidth = 1.5, E.setLineDash([6, 4]), E.strokeStyle = `rgba(${m},${g},${b},1)`, E.stroke(), E.setLineDash([])), E.restore();
  }
  function rb() {
    const i = p.frameRollOverlayVisual, a = J(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || a <= 1e-4) return;
    const l = Bt(i.shot);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * br, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(h) * m, b = Math.sin(h) * m;
    E.save(), E.globalAlpha *= a, E.beginPath(), E.rect(l.x, l.y, l.w, l.h), E.clip(), E.translate(c.x, c.y), E.rotate(h);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    E.beginPath();
    for (let M = -m; M <= m; M += w)
      E.moveTo(M, -m), E.lineTo(M, m);
    for (let M = -m; M <= m; M += w)
      E.moveTo(-m, M), E.lineTo(m, M);
    E.lineWidth = 1, E.strokeStyle = "rgba(255, 255, 255, 0.22)", E.stroke(), E.setTransform(1, 0, 0, 1, 0, 0), E.beginPath(), E.moveTo(c.x - g, c.y - b), E.lineTo(c.x + g, c.y + b), E.lineWidth = 1.5, E.setLineDash([8, 6]), E.strokeStyle = "rgba(255, 255, 255, 0.92)", E.shadowColor = "rgba(0, 0, 0, 0.8)", E.shadowBlur = 3, E.stroke(), E.setLineDash([]), E.restore();
  }
  function ib() {
    return t !== "cutout" || !Ve() ? 0 : LP;
  }
  function ob() {
    const i = J(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const a = Ve(), l = a ? Zt(a) : null, c = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && c && (p.cutoutPanoDimCorners = c), a && (l != null && l.visible) && c && (p.cutoutPanoFrameVisual = {
      item: a,
      geom: l,
      selected: Ff(a),
      locked: bn(a)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? c : h ? p.cutoutPanoDimCorners || [] : [];
    if (E.save(), E.fillStyle = `rgba(0, 0, 0, ${i})`, E.beginPath(), E.rect(0, 0, T.width, T.height), m.length >= 4) {
      E.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) E.lineTo(m[g].x, m[g].y);
      E.closePath();
    }
    E.fill("evenodd"), E.restore();
  }
  function ab() {
    tn = null, p.mode === "frame" ? (Se.frameSafeRect = Fb(), eb()) : p.mode === "unwrap" ? _y(!1) : xy(!1), ob(), t === "cutout" && Oy(), Iy(), $r(), nb(), rb(), N.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), Se.hasPresentedFrame || (Se.hasPresentedFrame = !0, le.style.opacity = "1"), t === "cutout" && N.cameraPreview && (N.cameraPreview.settled = Se.pendingStableLayoutFrames <= 0 && Se.hasPresentedFrame && p.mode !== "frame");
    const i = uy();
    N.stageStatus = i.status, N.stageStatusDetail = i.detail, i.status === or ? (U == null || U.removeAttribute("data-stage-ready"), U == null || U.setAttribute("data-stage-loading-kind", i.detail)) : (U == null || U.setAttribute("data-stage-ready", ""), U == null || U.removeAttribute("data-stage-loading-kind"));
  }
  function sb(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function lb() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = O0();
  }
  function ce(i = {}) {
    var b, w, M, P, A, F, K, ee, Z, ne;
    const a = !!i.localOnly, l = i.externalSync === !0, c = String(i.cause || ""), h = String(((b = p.interaction) == null ? void 0 : b.kind) || "");
    (!a || h === "view" || h === "pan_frame" || sb() || !!((w = p.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (Se.backgroundDirty = !0), a && If() && (p.livePaintInteractionRevision += 1, Se.backgroundDirty = !0), (!a || c === "selection" || c === "mode" || c === "cutout_frame") && (ql(), Lr()), lb(), l && ((P = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || P.call(M), (A = e.setDirtyCanvas) == null || A.call(e, !0, !1)), l && !a && ((K = (F = e.graph) == null ? void 0 : F.setDirtyCanvas) == null || K.call(F, !0, !0), (ne = (Z = (ee = lr) == null ? void 0 : ee.canvas) == null ? void 0 : Z.setDirty) == null || ne.call(Z, !0, !0)), Se.dirty = !0;
  }
  function pd() {
    const i = T.getBoundingClientRect(), a = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return T.width !== a || T.height !== l || le.width !== a || le.height !== l ? (T.width = a, T.height = l, le.width = a, le.height = l, Se.backgroundDirty = !0, Se.dirty = !0, t === "cutout" && (Se.pendingStableLayoutFrames = Math.max(Number(Se.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function cb(i = performance.now()) {
    var m, g;
    Se.lastTickTs = i;
    const a = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    a != null && a.shot && (p.frameRollOverlayVisual = { shot: a.shot });
    const l = a ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const b = J(
        (i - Number(p.frameRollOverlayStartTs || i)) / RP,
        0,
        1
      );
      p.frameRollOverlayAlpha = Bn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        As(b)
      ), b >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), Se.dirty = !0;
    }
    const c = ib();
    if (Math.abs(c - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = c, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - c) > 1e-6) {
      const b = J(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Tp,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Bn(
        Number(p.cutoutPanoDimFrom || 0),
        c,
        As(b)
      ), b >= 1 && (p.cutoutPanoDimAlpha = c), b >= 1 && c === 0 && (p.cutoutPanoDimCorners = null), Se.dirty = !0;
    }
    const h = t === "cutout" && Ve() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const b = J(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Tp,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Bn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        As(b)
      ), b >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Se.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const b = Math.max(1, Number(p.outputPreviewAnimDurationMs)), w = J((i - Number(p.outputPreviewAnimStartTs || 0)) / b, 0, 1), P = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? BP(w) : XP(w);
      p.outputPreviewAnim = Bn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, P), Se.dirty = !0, w >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((g = p.viewTween) != null && g.active) {
      const b = p.viewTween, w = J((i - b.startTs) / b.durationMs, 0, 1), M = As(w);
      p.viewYaw = Rt(b.startYaw + b.deltaYaw * M), p.viewPitch = b.startPitch + (b.targetPitch - b.startPitch) * M, p.viewFov = b.startFov + (b.targetFov - b.startFov) * M, Se.backgroundDirty = !0, Se.dirty = !0, w >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(rn.state.inertia.vx || 0), p.viewInertia.vy = Number(rn.state.inertia.vy || 0), p.viewInertia.active = !!rn.state.inertia.active, rn.stepInertia(i) && (p.viewInertia.vx = Number(rn.state.inertia.vx || 0), p.viewInertia.vy = Number(rn.state.inertia.vy || 0), p.viewInertia.active = !!rn.state.inertia.active, Se.backgroundDirty = !0, Se.dirty = !0), (Se.dirty || i - Se.lastSizeCheckTs >= 220) && (pd(), Se.lastSizeCheckTs = i), Se.pendingStableLayoutFrames > 0 && (Se.pendingStableLayoutFrames -= 1, Se.dirty = !0), Se.dirty) {
      if (Se.pendingStableLayoutFrames > 0)
        return;
      Se.dirty = !1, ab();
    }
  }
  function md(i = performance.now()) {
    if (Se.running)
      try {
        cb(i);
      } catch (a) {
        const l = String((a == null ? void 0 : a.stack) || (a == null ? void 0 : a.message) || a || "unknown editor frame error");
        Se.tickErrorSignature !== l && (Se.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", a)), N.stageStatus = ar, N.stageStatusDetail = "frame", U == null || U.setAttribute("data-stage-ready", ""), U == null || U.removeAttribute("data-stage-loading-kind");
      } finally {
        Se.running && (Se.rafId = requestAnimationFrame(md));
      }
  }
  function ub() {
    Se.running = !1, Se.rafId && cancelAnimationFrame(Se.rafId), Se.rafId = 0;
  }
  function nt() {
    r || k && _.stickers.some($l) || (p.historyController.commitActionGroup(JSON.stringify(Yh(_))), gc());
  }
  function sc(i) {
    if (r) return;
    const a = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (gc(), !a) return;
    const l = JSON.parse(a);
    Object.keys(_).forEach((c) => delete _[c]), Object.assign(_, l), p.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], tr(), Pn(), $e(), An(), ce({ cause: "cutout_frame" });
  }
  function gd() {
    var l, c;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], a = Number((c = p.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !r && i.length > 1 && a > 0,
      canRedo: !r && i.length > 1 && a >= 0 && a < i.length - 1
    };
  }
  function Pn() {
    vi();
    const i = Mk({
      editor: p,
      swatches: Ws,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: vr,
      colorsApproximatelyEqual: Us,
      rgb01ToHsv: tu,
      hsv01ToRgb: eu,
      getBrushPresetIdForTool: fi,
      isActiveLassoTool: j0
    });
    if (Object.assign(N.paintDock, i), U0(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    Pe && (clearTimeout(Pe), Pe = 0), L && (!i.colorEnabled && j && !j.hidden && (Pe = window.setTimeout(() => {
      j.hidden = !0, N.paintDock.colorPopOpen = !1, Pe = 0;
    }, 170)), j && (j.style.setProperty("--picker-hue-color", i.pickerHueColor), j.style.setProperty("--picker-sat", i.pickerSat), j.style.setProperty("--picker-val", i.pickerVal), j.style.setProperty("--picker-hue", i.pickerHue)), ue && (ue.style.left = i.pickerSvLeft, ue.style.top = i.pickerSvTop), pe && (pe.style.left = i.pickerHueLeft));
  }
  function ao() {
    const i = nn(t === "cutout" && p.mode === "frame" ? Ve() : kt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Br(i)
    }, $e());
  }
  function $e() {
    var Qe, be, ae, ge;
    if (li(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = kk(_.ui_settings);
    if (s) {
      N.sidePanel = Nk({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Vn
      });
      return;
    }
    const a = kt(), l = t === "cutout" && p.mode === "frame" ? Ve() : null, c = l || a, h = l ? [l] : er(), m = l ? "shot" : Wa();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke") {
      const ve = nn(c);
      p.panelLastValues = {
        yaw_deg: Number(ve.yaw_deg || 0),
        pitch_deg: Number(ve.pitch_deg || 0),
        hFOV_deg: Number(ve.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(ve.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(ve.rot_deg || 0),
        roll_deg: Number(ve.roll_deg || 0),
        aspect_id: Br(ve)
      }, Jn(c) && (p.panelLastValues.opacity = Tl(c, p.frame).opacity * 100);
    }
    const g = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), b = m === "stroke" ? null : c, w = k && p.inspectCamera, M = w ? Zx(_.camera, p.frame) : Jn(b) ? p.panelLastValues : b || g, P = w || !!b && !bn(b);
    p.panelWasEnabled = P, ql();
    let A = null;
    if (l) {
      const ve = Ul({ item: l, kind: "shot", label: "Frame" });
      A = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ve.label,
        currentIcon: ve.icon || null,
        items: [{
          id: String(l.id || ""),
          label: ve.label,
          icon: ve.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ve = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? dr().forEach((Ee, lt) => {
        var Mt, Ot;
        if (!Ee) return;
        const Xe = k ? Ng(Ee) : Jt(Ee) ? String(Ee.id || Ms) : String(((Ot = (Mt = _.assets) == null ? void 0 : Mt[Ee.asset_id]) == null ? void 0 : Ot.name) || Ee.asset_id || Ee.id), Et = `${lt + 1}. ${Xe}${Jt(Ee) && Qi(Ee) ? " (hidden)" : ""}`, on = Ul({ item: Ee, label: Et, kind: "image" });
        ve.push({ id: Ee.id, label: on.label, icon: on.icon, item: Ee, kind: "image" });
      }) : Df().forEach((Ee) => {
        if (!(Ee != null && Ee.item)) return;
        const lt = Ul(Ee);
        ve.push({ id: Ee.item.id, label: lt.label, icon: lt.icon, item: Ee.item, kind: Ee.kind });
      });
      const Oe = (b == null ? void 0 : b.id) || "", je = w ? { label: "Camera", icon: Ae.camera } : ve.find((Ee) => Ee.id === Oe) || ve[0];
      A = {
        label: "Selection",
        open: !1,
        disabled: ve.length <= 1,
        currentLabel: je.label,
        currentIcon: je.icon || null,
        items: ve.map((Ee) => ({
          id: Ee.id,
          label: Ee.label,
          icon: Ee.icon || null,
          active: Ee.id === Oe
        }))
      };
    }
    const F = [], K = (ve, Oe, je, Ee, lt) => {
      const Xe = J(Number(M[ve] || 0), je, Ee);
      F.push({
        key: ve,
        label: Oe,
        min: je,
        max: Ee,
        step: lt,
        value: Xe,
        displayValue: yo(Xe),
        fillPct: J((Xe - je) / Math.max(1e-6, Ee - je) * 100, 0, 100),
        enabled: P && !r
      });
    }, ee = [];
    w ? (K("position_x", "X", -100, 100, 0.01), K("position_y", "Y", -100, 100, 0.01), K("position_z", "Z", -100, 100, 0.01), K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("roll_deg", "Roll", -180, 180, 0.1), K("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ee.push(`Selected objects: ${h.length}`), ee.push("Multi-selection supports z-order and delete.")) : (K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("hFOV_deg", "H FOV", 1, 179, 0.1), K("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? K("rot_deg", "Rotation", -180, 180, 0.1) : K("roll_deg", "Roll", -180, 180, 0.1), k && K("opacity", "Opacity", 0, 100, 1));
    const Z = Array.isArray((be = (Qe = _ == null ? void 0 : _.painting) == null ? void 0 : Qe.paint) == null ? void 0 : be.strokes) ? _.painting.paint.strokes.length : 0, ne = Array.isArray((ge = (ae = _ == null ? void 0 : _.painting) == null ? void 0 : ae.mask) == null ? void 0 : ge.strokes) ? _.painting.mask.strokes.length : 0, ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ve) => String((ve == null ? void 0 : ve.name) || "")) : [], me = KP(
      e,
      ie.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), re = !!String((me == null ? void 0 : me.src) || "").trim() || Lf("pano_input_images").length > 0, xe = dr().length > 0 || Z > 0, ze = ne > 0, He = [
      { key: "mask", label: "Mask", icon: Ae.circle_dashed_tool, visible: !!p.showMask, enabled: ze },
      { key: "objects", label: "Paint / Images", icon: Ae.image, visible: !!p.showObjects, enabled: xe },
      { key: "panorama", label: "Panorama", icon: Ae.globe, visible: !!p.showPanorama, enabled: re }
    ].map((ve) => ({
      ...ve,
      ariaLabel: `Toggle ${ve.label.toLowerCase()}`,
      tip: ve.visible ? "Hide" : "Show"
    }));
    N.sidePanel = Pk({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: A,
      enabled: P,
      selectedKind: w ? "camera" : m,
      selectedItems: h,
      params: F,
      notes: ee,
      visibilityRows: He,
      uiSettings: i,
      normalizeCoverageValue: Vn
    });
  }
  function li() {
    if (!k || r) return;
    const i = so(), a = Ne.selection, l = a && ci(a.owner);
    if (a) {
      const h = l ? Qo(a) : [];
      a.frames = a.frames.filter((m) => h.some((g) => l[g].keyframes.some((b) => b.frame === m))), a.frames.length || (Ne.selection = null);
    }
    const c = _.timeline.fps;
    N.timeline = Ik(_, {
      frame: p.frame,
      span: i,
      selection: Ne.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Ne.expanded ?? Uh(_),
      openRows: Ne.openRows,
      audio: lc() && N.videoTransport.hasAudio ? { muted: G.muted } : null,
      playing: Ne.playback !== 0,
      label: `${p.frame}f · ${(p.frame / c).toFixed(2)}s @ ${Number(c.toFixed(3))} fps`
    }), N.easing = Ne.selection ? Ek(l, Qo(Ne.selection), Ne.selection.frames, ea(Ne.selection.owner)) : null;
  }
  function so(i = null) {
    const a = _.timeline.fps, l = N.videoTransport.ready ? Math.round(Number(N.videoTransport.duration || 0) * a) : 0;
    return Gx(_, { minimum: Math.round(a * 5), frames: l, openClip: i });
  }
  function ci(i) {
    return i === "camera" ? _.camera : _.stickers.find((a) => a.id === i) || null;
  }
  function Qo(i) {
    return i.lane ? [i.lane] : Ho(ci(i.owner));
  }
  function ea(i) {
    if (i === "camera") return 0;
    const { clip: a } = ci(i);
    return a.start - a.in;
  }
  function as(i) {
    const a = ci(i);
    return !!a && a.locked !== !0;
  }
  function yd() {
    const i = kt();
    Jn(i) && !Di(i.clip, p.frame) && hr(null);
  }
  function wi(i) {
    const a = Math.max(0, Math.round(i));
    a !== p.frame && (p.frame = a, yd(), jt(), $e(), Ye(), ce());
  }
  function lc() {
    return G instanceof HTMLVideoElement && !!G.getAttribute("src");
  }
  function fb(i) {
    ui(), wi(i), lc() && (Xa(p.frame / _.timeline.fps), qa());
  }
  function ui() {
    if (!Ne.playback) return;
    cancelAnimationFrame(Ne.playback.raf);
    const { video: i } = Ne.playback;
    Ne.playback = 0, i && (G.pause(), q.pendingPlaybackResume = !1, q.resumeAfterScrub = !1, Xa(p.frame / _.timeline.fps), qa()), li();
  }
  function bd(i) {
    xi(), q.mode = "playback", q.pendingPlaybackResume = !1, q.resumeAfterScrub = !1, q.editorTime = i, Math.abs(Number(G.currentTime || 0) - i) > Math.max(ri(), 0.04) ? (q.seeking = !1, q.pendingPlaybackResume = !0, Ya(i)) : G.play().catch(() => {
    });
  }
  function vd(i) {
    var l;
    if (!((l = Ne.playback) != null && l.video) || q.seeking || q.pendingPlaybackResume) return;
    const a = Math.floor(i * _.timeline.fps + 0.5);
    a >= so() ? _d() : wi(a);
  }
  function _d() {
    Ne.playback.endedAt = null, wi(0), bd(0);
  }
  function db() {
    if (Ne.playback) {
      ui();
      return;
    }
    const i = _.timeline.fps, a = p.frame >= so() - 1 ? 0 : p.frame, l = { video: lc(), raf: 0, endedAt: null };
    if (Ne.playback = l, l.video) {
      const c = typeof G.requestVideoFrameCallback == "function", h = (m) => {
        if (l.raf = requestAnimationFrame(h), q.seeking || q.pendingPlaybackResume) return;
        if (G.paused && !G.ended) {
          ui();
          return;
        }
        if (!G.ended) {
          c || vd(Number(G.currentTime || 0));
          return;
        }
        l.endedAt ?? (l.endedAt = { ts: m, frame: p.frame });
        const g = l.endedAt.frame + Math.floor((m - l.endedAt.ts) / 1e3 * i);
        g >= so() ? _d() : wi(g);
      };
      wi(a), bd(a / i), l.raf = requestAnimationFrame(h);
    } else {
      const c = performance.now(), h = (m) => {
        l.raf = requestAnimationFrame(h), wi((a + Math.floor((m - c) / 1e3 * i)) % so());
      };
      l.raf = requestAnimationFrame(h);
    }
    li();
  }
  function lo() {
    jt(), $e(), Ye(), ce();
  }
  function ta() {
    nt(), ot(), lo();
  }
  function hb() {
    const { selection: i } = Ne;
    as(i.owner) && (Lx(ci(i.owner), Qo(i), i.frames, p.frame - ea(i.owner)), Ne.selection = null, ta());
  }
  function pb(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && ui(), wi(i.frame), G instanceof HTMLVideoElement && G.getAttribute("src") && (i.phase === "end" ? qa() : Xa(p.frame / _.timeline.fps));
        return;
      }
      if (i.type === "play") {
        db();
        return;
      }
      if (i.type === "mute") {
        zf(), li();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ne.expanded = !(Ne.expanded ?? Uh(_)), Ne.selection = null, li();
        return;
      }
      if (i.type === "toggle-row") {
        Ne.openRows.has(i.id) ? Ne.openRows.delete(i.id) : Ne.openRows.add(i.id), li();
        return;
      }
      if (i.type === "select-row") {
        const a = _.stickers.find((l) => l.id === i.id);
        a && !Di(a.clip, p.frame) && fb(a.clip.start), hr(dr().find((l) => l.id === i.id) || null), p.inspectCamera = i.id === "camera", Ne.selection = null, $e(), Ye(), ce();
        return;
      }
      if (i.type === "select-keys") {
        const a = ea(i.owner), l = i.frames.map((m) => m - a), c = Ne.selection, h = (c == null ? void 0 : c.owner) === i.owner && c.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(c.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          c.frames = [...m].sort((g, b) => g - b);
        } else
          Ne.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        li();
        return;
      }
      if (i.type === "move-keys") {
        const a = Ne.selection;
        if (!a || !as(a.owner)) return;
        const l = ci(a.owner), c = Qo(a);
        if (i.phase === "start") {
          Ne.drag = { keyframes: c.map((g) => structuredClone(l[g].keyframes)), frames: a.frames };
          return;
        }
        const { drag: h } = Ne;
        if (!(h != null && h.keyframes)) return;
        c.forEach((g, b) => {
          l[g].keyframes = structuredClone(h.keyframes[b]);
        });
        const m = Rx(l, c, h.frames, i.delta, -ea(a.owner));
        if (a.frames = h.frames.map((g) => g + m), i.phase !== "end") {
          lo();
          return;
        }
        Ne.drag = null, m ? ta() : lo();
        return;
      }
      if (i.type === "clip") {
        const a = _.stickers.find((h) => h.id === i.id);
        if (!a || a.locked) return;
        if (i.phase === "start") {
          Ne.drag = { clip: { ...a.clip }, span: so(a.clip) };
          return;
        }
        const { drag: l } = Ne;
        if (!(l != null && l.clip)) return;
        const c = l.clip;
        if (a.clip = { ...c }, i.delta && i.mode === "move" ? zx(a.clip, i.delta) : i.delta && i.mode === "start" ? jx(a.clip, c.start + i.delta) : i.delta && Hx(a.clip, (c.duration === null ? l.span : c.start + c.duration) + i.delta, l.span), i.phase !== "end") {
          lo();
          return;
        }
        Ne.drag = null, yd(), JSON.stringify(a.clip) !== JSON.stringify(c) ? ta() : lo();
        return;
      }
      if (i.type === "key-row") {
        if (!as(i.owner)) return;
        ui(), Tx(ci(i.owner), p.frame - ea(i.owner)), ta();
        return;
      }
      if (i.type === "easing") {
        const a = Ne.selection;
        if (!a || !as(a.owner)) return;
        Vx(ci(a.owner), Qo(a), a.frames, i.easing), i.commit ? ta() : lo();
      }
    }
  }
  async function xd(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Pr(i)) return;
    if (k) {
      await gb(i);
      return;
    }
    const a = Ei("asset"), l = pa(e, `add:${a}`, async () => {
      try {
        const { image: c } = await ma(i);
        Ue.set(a, c);
        const h = Ei("st");
        _.stickers.push({
          id: h,
          asset_id: a,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: oi(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
          rot_deg: 0,
          z_index: Ua()
        }), hr(_.stickers[_.stickers.length - 1]), ss(), $e(), Ye(), ce();
        const m = await Ti(i, {
          fetchApi: (w, M) => Wt.fetchApi(w, M)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === a).length) return;
        _.assets[a] = m, no(), nt(), ot(), $e(), Ye(), ce();
      } catch (c) {
        delete _.assets[a], Ue.delete(a);
        const h = Array.isArray(_.stickers) ? _.stickers : [], m = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === a);
        throw m.length && (_.stickers = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== a), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(p.selectedId || "")) && hr(null), $e(), Ye(), ce(), ot()), c;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function mb() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = R == null ? void 0 : R.openImagePicker) == null || i.call(R, "add");
  }
  async function gb(i) {
    const a = Ei("st"), l = pa(e, `add:${a}`, async () => {
      const { image: c } = await ma(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: oi(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0
      }, m = Mg(a, { kind: "file", filename: "" }, h, Ua());
      Ue.set(Xo(m), c), _.stickers.push(m), hr(m), ss(), $e(), Ye(), ce();
      try {
        const g = await Ti(i, {
          fetchApi: (w, M) => Wt.fetchApi(w, M)
        }), b = _.stickers.find((w) => w.id === a);
        if (!b) return;
        b.source = zs(g), Ue.set(Xo(b), c), nt(), ot();
      } catch (g) {
        throw _.stickers = _.stickers.filter((b) => b.id !== a), p.selectedId === a && hr(null), nt(), ot(), g;
      } finally {
        $e(), Ye(), ce();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function yb(i, a) {
    const l = pa(e, `replace:${a}:${Ei("asset")}`, async () => {
      const { image: c } = await ma(i), h = await Ti(i, {
        fetchApi: (g, b) => Wt.fetchApi(g, b)
      }), m = _.stickers.find((g) => g.id === a);
      if (m) {
        m.source = zs(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((b) => b.value)])
          g.vFOV_deg = oi(g.hFOV_deg, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1));
        Ue.set(Xo(m), c), jt(), nt(), ot(), $e(), Ye(), ce();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function bb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const a = kt();
    if (!a || !ht(a) || Jt(a) || !Pr(i)) return;
    if (k) {
      await yb(i, a.id);
      return;
    }
    const l = String(a.id || ""), c = Ei("asset"), h = pa(e, `replace:${l}:${c}`, async () => {
      var P;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((A) => String((A == null ? void 0 : A.id) || "") === l) || null;
      if (!m || !ht(m) || Jt(m)) return;
      const g = String(m.asset_id || ""), b = g ? un(((P = _.assets) == null ? void 0 : P[g]) || null) : null, w = Number(m.vFOV_deg || 0), M = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: A } = await ma(i);
        Ue.set(c, A), m.asset_id = c, m.vFOV_deg = oi(
          Number(m.hFOV_deg || 30),
          Number(A.naturalWidth || A.width || 1),
          Number(A.naturalHeight || A.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, jt(), $e(), Ye(), ce();
        const F = await Ti(i, {
          fetchApi: (ee, Z) => Wt.fetchApi(ee, Z)
        }), K = (Array.isArray(_.stickers) ? _.stickers : []).find((ee) => String((ee == null ? void 0 : ee.id) || "") === l) || null;
        if (!K || String(K.asset_id || "") !== c) return;
        _.assets[c] = F, no(), nt(), ot(), $e(), Ye(), ce();
      } catch (A) {
        delete _.assets[c], Ue.delete(c);
        const F = (Array.isArray(_.stickers) ? _.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === l) || null;
        throw F && String(F.asset_id || "") === c && (g && b && (_.assets[g] = b), F.asset_id = g, F.vFOV_deg = w, F.crop = M ? { ...M } : null), jt(), ot(), $e(), Ye(), ce(), A;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function vb() {
    var a;
    if (r) return;
    const i = kt();
    !i || !ht(i) || Jt(i) || (a = R == null ? void 0 : R.openImagePicker) == null || a.call(R, "replace");
  }
  async function _b() {
    if (r || t !== "stickers") return;
    if (k) {
      await xb();
      return;
    }
    const i = _.assets && typeof _.assets == "object" ? _.assets : {}, a = Object.entries(i).filter(([, c]) => {
      const h = String((c == null ? void 0 : c.type) || "").toLowerCase(), m = String((c == null ? void 0 : c.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!a.length) return;
    let l = !1;
    for (const [c, h] of a)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((A) => A.blob()), b = String(g.type || "image/png").split("/")[1] || "png", w = String((h == null ? void 0 : h.name) || `${c}.${b}`), M = new File([g], w, { type: g.type || "image/png" }), P = await Ti(M, {
          fetchApi: (A, F) => Wt.fetchApi(A, F)
        });
        _.assets[c] = {
          ...P,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ot(), ce());
  }
  async function xb() {
    let i = !1;
    for (const a of _.stickers) {
      const l = a.source.data_url;
      if (l)
        try {
          const c = await fetch(l).then((b) => b.blob()), h = String(c.type || "image/png").split("/")[1] || "png", m = new File([c], `${a.id}.${h}`, { type: c.type || "image/png" }), g = await Ti(m, {
            fetchApi: (b, w) => Wt.fetchApi(b, w)
          });
          a.source = zs(g), i = !0;
        } catch {
        }
    }
    i && (ot(), ce());
  }
  function wb() {
    if (r || t !== "cutout") return;
    const i = Ve();
    if (i) {
      hr(i), p.mode = "pano", Rl(
        Rt(Number(i.yaw_deg || 0)),
        J(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), $e(), Ye(), ce({ cause: "cutout_frame" });
      return;
    }
    const a = Jm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Rt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    _.shots = [a], hr(a), ss(), p.mode = "pano", nt(), ot(), $e(), Ye(), ce({ cause: "cutout_frame" });
  }
  function Sb() {
    r || t !== "cutout" || (_.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _.active.selected_shot_id = null, nt(), ot(), $e(), Ye(), ce());
  }
  function kb() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], a = [];
    for (const l of i)
      Jt(l) && (l.visible = !1, a.push(l));
    return a;
  }
  function wd(i, a, l = "Clear") {
    return new Promise((c) => {
      N.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(a || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: c
      };
    });
  }
  async function Mb() {
    var l, c;
    if (r || !await wd(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = Io(null), tr();
    const a = kb();
    if (t === "stickers")
      _.stickers = k ? _.stickers.filter((h) => h.placement === "world" || a.includes(h)) : a, k || (_.assets = {}), p.selectedId = ((l = a[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((c = a[0]) == null ? void 0 : c.id) || null, no();
    else {
      const h = Xx(_.shots, _.active.selected_shot_id);
      _.stickers = a, _.assets = {}, _.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, no();
    }
    nt(), ot(), $e(), Ye(), ce();
  }
  async function Nb(i) {
    var m, g, b, w;
    if (r) return;
    const a = i === "mask" ? "mask" : "paint", l = a === "mask" ? "Mask" : "Paint", c = co(a);
    if (!(!c.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((g = p.interaction) == null ? void 0 : g.layerKind) === a) || !await wd(
      `Clear ${l}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((b = p.interaction) == null ? void 0 : b.kind) === "draw" && ((w = p.interaction) == null ? void 0 : w.layerKind) === a) {
        const M = Rn();
        M && p.paintEngine.cancelActiveStroke(M), p.interaction = null;
      }
      c.length = 0, _.painting.raster_objects = Nn().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== a), a === "paint" && (sn().length = 0), tr(), nt(), ot(), $e(), Ye(), Pn(), ce();
    }
  }
  function Pb() {
    if (r) return;
    const i = kt();
    if (!i || !ht(i) || Jt(i) || k && $l(i)) return;
    let a;
    k ? a = tw(i, Ei("st"), Ua()) : (a = JSON.parse(JSON.stringify(i)), a.id = Ei("st"), a.yaw_deg = Rt((a.yaw_deg || 0) + 8), a.z_index = Ua()), _.stickers.push(a), _.active.selected_sticker_id = a.id, p.selectedId = a.id, p.selectedIds = [a.id], jt(), nt(), ot(), Ye(), $e(), ce();
  }
  function Sd() {
    var l, c, h, m, g;
    if (r) return;
    const i = er(), a = kt();
    if (!(!a && i.length === 0) && !i.some((b) => bn(b))) {
      if (i.length > 1) {
        const b = new Set(i.filter((P) => Kt(P)).map((P) => String(P.actionGroupId || P.id || ""))), w = new Set(i.filter((P) => ln(P)).map((P) => qt(P.rasterObjectId || P.id || ""))), M = new Set(i.filter(ht).map((P) => String(P.id || "")));
        b.size > 0 && (_.painting.paint.strokes = (Array.isArray((c = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : c.strokes) ? _.painting.paint.strokes : []).filter((P) => !b.has(String((P == null ? void 0 : P.actionGroupId) || ""))), _.painting.groups = sn().filter((P) => !b.has(String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || ""))), tr()), w.size > 0 && (_.painting.raster_objects = Nn().filter((P) => !w.has(String((P == null ? void 0 : P.id) || ""))), oo()), M.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((P) => M.has(String((P == null ? void 0 : P.id) || "")) ? Jt(P) ? (Qi(P) || (P.visible = !1), !0) : !1 : !0), no(), jt()), p.selectedId = null, p.selectedIds = [], nt(), ot(), $e(), Ye(), ce();
        return;
      }
      if (Kt(a)) {
        const b = String(a.actionGroupId || a.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((w) => String((w == null ? void 0 : w.actionGroupId) || "").trim() !== b), _.painting.groups = sn().filter((w) => String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim() !== b), tr(), p.selectedId = null, p.selectedIds = [], nt(), ot(), $e(), Ye(), ce();
        return;
      }
      if (ln(a)) {
        const b = qt(a.rasterObjectId || a.id || "");
        _.painting.raster_objects = Nn().filter((w) => String((w == null ? void 0 : w.id) || "").trim() !== b), oo(), p.selectedId = null, p.selectedIds = [], nt(), ot(), $e(), Ye(), ce();
        return;
      }
      if (t === "stickers" || ht(a)) {
        if (Jt(a)) {
          if (Qi(a)) return;
          a.visible = !1, jt(), nt(), ot(), $e(), Ye(), ce();
          return;
        }
        _.stickers = _.stickers.filter((b) => b.id !== a.id), no(), jt(), p.selectedId = ((g = dr()[0]) == null ? void 0 : g.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = p.selectedId, nt(), ot(), $e(), Ye(), ce();
        return;
      }
      Sb();
    }
  }
  function cc(i, a) {
    const l = Se.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const c = Yc * Hi(l, i), h = hf(df(l, a), c);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function kd(i, a) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const b = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(b)) {
        const [P, A] = b.split(":").map((F) => Number(F));
        if (Number.isFinite(P) && Number.isFinite(A)) return P >= A;
      }
      const w = Number(i.hFOV_deg || 64), M = Number(i.vFOV_deg || 40);
      return Math.abs(w - M) > 1e-6 ? w >= M : Gi(i) >= 1;
    })();
    let [h, m] = l[String(a)] || l["1:1"];
    h >= m !== c && ([h, m] = [m, h]);
    const g = h / m;
    if (!cc(i, g)) {
      const b = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = b, i.hFOV_deg = $s(b, g);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function Ab(i, a, l) {
    if (!i || i.locked === !0) return !1;
    const c = Fa(a, l);
    if (!c) return !1;
    const h = c.ratio;
    if (!cc(i, h)) {
      const m = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $s(m, h);
    }
    return i.aspect_id = c.label, !0;
  }
  function Md(i) {
    if (!i || i.locked === !0) return;
    const a = String(i.aspect_id || "").trim(), l = ei(i), c = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, c);
    if (!cc(i, h)) {
      const m = J(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $s(m, h);
    }
    if (/^\d+:\d+$/.test(a)) {
      const [m, g] = a.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = Fi(i);
  }
  function Nd() {
    qi().forEach((a, l) => {
      a.type === "sticker" && a.item && (a.item.z_index = l), a.type === "strokeGroup" && a.item && (a.item.z_index = l), a.type === "rasterObject" && a.item && (a.item.z_index = l);
    });
  }
  function Cb() {
    if (r) return;
    const i = er();
    if (!kt() || i.length === 0 || i.some((b) => bn(b))) return;
    Nd();
    const l = qi(), c = new Set(i.map((b) => ht(b) ? `sticker:${String(b.id || "")}` : ln(b) ? `rasterObject:${qt(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var M, P;
      const w = b.type === "sticker" ? `sticker:${String(((M = b.item) == null ? void 0 : M.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), jt(), nt(), ot(), Ye(), ce();
  }
  function Ib() {
    if (r) return;
    const i = er();
    if (!kt() || i.length === 0 || i.some((b) => bn(b))) return;
    Nd();
    const l = qi(), c = new Set(i.map((b) => ht(b) ? `sticker:${String(b.id || "")}` : ln(b) ? `rasterObject:${qt(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var M, P;
      const w = b.type === "sticker" ? `sticker:${String(((M = b.item) == null ? void 0 : M.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), jt(), nt(), ot(), Ye(), ce();
  }
  function Eb() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = C(Number(_.output_preset || 2048))), d && (_.coverage = Vn(d.value)), v && (_.bg_color = String(v.value || _.bg_color || "#00ff00")), An(), e.setDirtyCanvas(!0, !0));
  }
  function An() {
    var a;
    if (r) return;
    _.coverage = Vn(_.coverage), Ag(e, _.active);
    const i = Cg(e, _);
    y && (y.value = i, (a = y.callback) == null || a.call(y, i));
  }
  const Pd = () => An();
  r || (e.__panoFlushStateBeforeQueue = Pd);
  function uc() {
    _.ui_settings = t2(_.ui_settings), r || An();
  }
  function ot() {
    var i;
    r || (An(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Ob() {
    r || cy() && Jf().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Tb(i = {}) {
    var c, h, m, g, b, w, M, P, A, F;
    const a = i.syncPreview !== !1, l = i.syncGraph !== !1;
    a && ((h = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || h.call(c), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), l && ((M = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || M.call(w, !0, !0), (F = (A = (P = lr) == null ? void 0 : P.canvas) == null ? void 0 : A.setDirty) == null || F.call(A, !0, !0));
  }
  function ss() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", Pn(), $e());
  }
  function Si(i) {
    const a = T.getBoundingClientRect();
    return {
      x: (i.clientX - a.left) / a.width * T.width,
      y: (i.clientY - a.top) / a.height * T.height
    };
  }
  function ls(i) {
    const a = T.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(a.left || 0),
      y: Number(i.clientY) - Number(a.top || 0)
    };
  }
  function Ad() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Ve() {
    if (t !== "cutout") return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const a = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === a) || i[0] || null;
  }
  function Fb() {
    var K, ee, Z, ne, ie;
    if (!T) return null;
    const i = (K = T.getBoundingClientRect) == null ? void 0 : K.call(T), a = Number((i == null ? void 0 : i.width) || 0) > 0 ? T.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? T.height / i.height : 1;
    Se.frameCanvasScale = Math.min(a, l);
    let c = 24, h = 24;
    const m = Math.max(c + 1, T.width - 24);
    let g = Math.max(h + 1, T.height - 24);
    const b = (ee = gt == null ? void 0 : gt.getBoundingClientRect) == null ? void 0 : ee.call(gt), w = (Z = mn == null ? void 0 : mn.getBoundingClientRect) == null ? void 0 : Z.call(mn);
    let M = 24;
    b && i && b.width > 0 && b.height > 0 && (M = Math.max(M, (b.right - i.left) * a + Op)), w && i && w.width > 0 && w.height > 0 && ((ne = N.frameRail) == null ? void 0 : ne.visible) === !0 && (M = Math.max(M, (i.right - w.left) * a + Op)), c = Math.max(c, M);
    const P = Math.min(m, T.width - M);
    let A = 24;
    const F = (ie = rt == null ? void 0 : rt.getBoundingClientRect) == null ? void 0 : ie.call(rt);
    if (F && i && F.width > 0 && F.height > 0 && (A = Math.max(A, (F.bottom - i.top) * l + Xc)), [It, Tn].forEach((me) => {
      var ze;
      if (!me || !i) return;
      const re = getComputedStyle(me);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const xe = (ze = me.getBoundingClientRect) == null ? void 0 : ze.call(me);
      !xe || xe.width <= 0 || xe.height <= 0 || (A = Math.max(A, (i.bottom - xe.top) * l + Xc));
    }), Le && i) {
      const me = getComputedStyle(Le);
      me.display !== "none" && me.visibility !== "hidden" && Number(me.opacity) > 0 && (A = Math.max(A, (DP + Xc) * l));
    }
    return h = Math.max(h, A), g = Math.max(h + 1, Math.min(g, T.height - A)), {
      x: c,
      y: h,
      w: Math.max(1, P - c),
      h: Math.max(1, g - h)
    };
  }
  function fc(i = Ve()) {
    if (!i || !T) return null;
    const a = Se.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, T.width - 48),
      h: Math.max(1, T.height - 48)
    };
    return Z_(a, i, Yc * Hi(a, i));
  }
  function Bt(i = Ve()) {
    const a = fc(i);
    return a ? { x: a.x, y: a.y, w: a.w, h: a.h } : null;
  }
  function dc() {
    return t === "cutout" && !!Ve();
  }
  function nr(i, a = performance.now()) {
    if (p.mode === "unwrap") {
      const m = ai(), g = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: J(b, 0, 1),
        t: Number(a || 0)
      };
    }
    const l = Zl(i.x, i.y), { lon: c, lat: h } = nc(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - h / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function rr(i, a, l = performance.now()) {
    const c = Bt(a);
    if (!c) return null;
    const h = {
      x: (Number(i.x) - c.x) / Math.max(1, c.w),
      y: (Number(i.y) - c.y) / Math.max(1, c.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = oc(a, h);
    if (!m) return null;
    const { lon: g, lat: b } = nc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - b / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Db(i, a) {
    const l = Ve();
    if (!l || l.locked === !0) return !1;
    const c = Number(a) > 0, h = Qm(l, a);
    if (!h) return !1;
    if (c) {
      const m = Yc * Hi(
        Se.frameSafeRect || { w: T.width, h: T.height },
        h
      ), g = pf({ width: T.width, height: T.height }, m);
      if (g.halfW < T.width * 0.5 - 1e-6 || g.halfH < T.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, nt(), ot(), $e());
    }, 180), $e(), !0;
  }
  function Lb() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, nt(), ot(), $e(), !0) : !1;
  }
  function na() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const a = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, a && ki(), p.interaction = null, to(), Lr(), $e(), vt(p.pointerPos), ce({ localOnly: !0 }), !0;
  }
  function Rb(i, a) {
    const l = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function fi(i) {
    const a = String(i || "").trim();
    return a === "eraser" ? zr : Cn[a] ? a : p.activeBrushPresetId || zr;
  }
  function Cd() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Ad() || dc());
  }
  function Id() {
    var i;
    return Cd() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function cs(i, a = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), c = Number((i == null ? void 0 : i.y) || 0), h = a !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - c) > 0.01;
    return p.pointerPos = { x: l, y: c, inside: h }, g;
  }
  function $b() {
    var P, A;
    if (!Id()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? p.maskTool : p.paintTool, l = fi(a), c = Cn[l] || Cn[zr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), g = Math.max(3, m * 0.5), b = i === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(p.paintColor), w = i === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : J(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), M = i === "mask" ? 0.95 : a === "eraser" ? 0.75 : J(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: a,
      preset: c,
      radius: g,
      fillStyle: vr(b, w),
      strokeStyle: vr(b, M),
      x: Number(((P = p.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((A = p.pointerPos) == null ? void 0 : A.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Vb() {
    var F, K, ee;
    const i = $b();
    if (!se) return;
    if (!i) {
      se.style.display = "none";
      return;
    }
    let a = i.radius * 2, l = i.radius * 2, c = "999px", h = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let P = Number(i.hotspotX ?? a * 0.5), A = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      a = yl, l = yl, c = "0", g = "0", b = "none", P = $P, A = VP, m = ZP(i.fillStyle, M, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Z = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      a = Math.max(10, i.radius * 2 * Z), l = Math.max(6, i.radius * 2), c = `${Math.min(6, l * 0.42)}px`, h = Number(((ee = (K = i.preset) == null ? void 0 : K.angle) == null ? void 0 : ee.value) || 0) * Li;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    se.style.display = "block", se.style.width = `${Math.round(a)}px`, se.style.height = `${Math.round(l)}px`, se.style.borderRadius = c, se.style.border = g, se.style.boxShadow = b, se.style.background = m, se.style.backgroundRepeat = "no-repeat", se.style.backgroundPosition = "center", se.style.backgroundSize = "contain", se.style.transform = `translate(${Math.round(i.x - P)}px, ${Math.round(i.y - A)}px) rotate(${h}deg)`;
  }
  function zb() {
    var me;
    if (!Me || !de) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? p.maskTool : p.paintTool;
    if (a === "lasso_fill") return;
    const l = fi(a), c = Cn[l] || Cn[zr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), g = Math.max(6, m * 0.5), b = a === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(p.paintColor), M = i === "mask" ? vr(w, 0.22) : b ? "rgba(255,255,255,0.14)" : vr(w, J(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), P = i === "mask" ? vr(w, 0.96) : b ? "rgba(255,255,255,0.72)" : vr(w, J(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let A = g * 2, F = g * 2, K = "999px", ee = 0, Z = M;
    const ne = "rgba(222, 222, 222, 0.72)", ie = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const re = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      A = Math.max(16, g * 2 * re), F = Math.max(10, g * 2), K = `${Math.min(8, F * 0.42)}px`, ee = Number(((me = c == null ? void 0 : c.angle) == null ? void 0 : me.value) || 0) * Li;
    } else a === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${P} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (A = Math.max(18, g * 1.8), F = A, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : b && (Z = "rgba(255,255,255,0.12)");
    de.style.width = `${Math.round(A)}px`, de.style.height = `${Math.round(F)}px`, de.style.borderRadius = K, de.style.background = Z, de.style.border = `1px solid ${ne}`, de.style.boxShadow = `0 0 0 1px ${ie}`, de.style.transform = `rotate(${ee}deg)`, _e && (clearTimeout(_e), _e = 0), Me.classList.remove("fade-out"), Me.classList.add("show");
  }
  function us() {
    !Me || !Me.classList.contains("show") || (Me.classList.add("fade-out"), _e && clearTimeout(_e), _e = window.setTimeout(() => {
      Me.classList.remove("show", "fade-out"), _e = 0;
    }, 180));
  }
  function Ed(i, a, l, c) {
    const h = fi(a), m = Cn[h] || Cn[zr], g = p.brushSizes[h] ?? 10, b = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), w = Rb(c, b), M = l.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), P = {
      id: bo(i),
      actionGroupId: bo("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: a,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((A) => ({ ...A })),
        points: M.map((A) => ({ ...A }))
      }
    };
    return Cp(P, m), Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function Od(i, a, l, c) {
    const h = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = fi(a), g = Cn[m] || Cn[zr], b = {
      id: bo(i),
      actionGroupId: bo("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: a,
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
    return Cp(b, g), Number(g.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function co(i) {
    const a = _.painting || (_.painting = Io(null)), l = a[i] || (a[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function jb(i, a, l = performance.now()) {
    let c;
    if (p.mode === "frame") {
      const M = Ve();
      if (!M || (c = rr(a, M, l), !c)) return !1;
    } else
      c = nr(a, l);
    if (!c) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = h[h.length - 1];
    if (g) {
      const M = Math.abs(Number(c.u ?? c.x ?? 0) - Number(g.u ?? g.x ?? 0)), P = Math.abs(Number(c.v ?? c.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (M < 15e-4 && P < 15e-4) return !1;
    }
    const b = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), m.push({ ...b });
    const w = Rn();
    if (w) {
      const M = p.paintEngine.ensureTarget(w);
      p.paintEngine.appendStrokePoint(M, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Hb(i, a, l = performance.now()) {
    var g, b;
    let c;
    if (p.mode === "frame") {
      const w = Ve();
      if (!w) return !1;
      c = rr(a, w, l);
    } else
      c = nr(a, l);
    const h = (b = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.points;
    if (!c || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), M = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && M < 15e-4) return !1;
    }
    return h.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Gb(i) {
    var re, xe, ze, He, Qe;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || (i == null ? void 0 : i.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    is();
    const l = Rn(), c = qo(l.width, l.height);
    if (!dd(c, a, { w: l.width, h: l.height })) return !1;
    const h = ((xe = (re = c.ctx) == null ? void 0 : re.getImageData(0, 0, l.width, l.height)) == null ? void 0 : xe.data) || null;
    if (!h) return !1;
    const m = new Map(sn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], b = [], w = [...Nn().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let M = !1, P = qi().reduce((be, ae) => Math.max(be, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function A(be, ae, ge, ve = 8) {
      let Oe = ae, je = ge, Ee = -1, lt = -1;
      for (let Xe = 0; Xe < ge; Xe += 1)
        for (let Et = 0; Et < ae; Et += 1)
          be[(Xe * ae + Et) * 4 + 3] <= ve || (Et < Oe && (Oe = Et), Xe < je && (je = Xe), Et > Ee && (Ee = Et), Xe > lt && (lt = Xe));
      return Ee < Oe || lt < je ? null : { minX: Oe, minY: je, maxX: Ee, maxY: lt };
    }
    const F = A(h, l.width, l.height, 8);
    if (!F) return !1;
    function K(be, ae) {
      return !be || !ae ? !1 : !(be.maxX < ae.minX || ae.maxX < be.minX || be.maxY < ae.minY || ae.maxY < be.minY);
    }
    function ee(be, ae) {
      const ge = ii((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", ae);
      if (!ge) return null;
      const ve = ge.centerUv.u - ge.halfW, Oe = ge.centerUv.u + ge.halfW, je = ge.centerUv.v - ge.halfH, Ee = ge.centerUv.v + ge.halfH, lt = l.width, Xe = l.height;
      return {
        minX: Math.floor((ve % 1 + 1) % 1 * lt),
        maxX: Math.ceil((Oe % 1 + 1) % 1 * lt),
        minY: Math.floor(J(je, 0, 1) * Xe),
        maxY: Math.ceil(J(Ee, 0, 1) * Xe),
        wraps: Oe - ve >= 1 || ve < 0 || Oe > 1
      };
    }
    function Z(be) {
      const ae = (be == null ? void 0 : be.bbox) || null;
      if (!ae) return null;
      const ge = (be == null ? void 0 : be.transform) || {}, ve = l.width, Oe = l.height, je = Number(ae.u0 || 0) + Number(ge.du || 0), Ee = Number(ae.u1 || 0) + Number(ge.du || 0), lt = Number(ae.v0 || 0) + Number(ge.dv || 0), Xe = Number(ae.v1 || 0) + Number(ge.dv || 0);
      return {
        minX: Math.floor((je % 1 + 1) % 1 * ve),
        maxX: Math.ceil((Ee % 1 + 1) % 1 * ve),
        minY: Math.floor(J(lt, 0, 1) * Oe),
        maxY: Math.ceil(J(Xe, 0, 1) * Oe),
        wraps: Ee - je >= 1 || je < 0 || Ee > 1
      };
    }
    function ne(be) {
      return be ? be.wraps ? K(F, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || K(F, { minX: be.minX, maxX: l.width - 1, minY: be.minY, maxY: be.maxY }) : K(F, be) : !0;
    }
    function ie(be) {
      if (!be) return { touched: !1, canvas: null };
      const ae = qo(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(be, 0, 0);
      const ge = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(c.canvas, 0, 0), ae.ctx.restore();
      const ve = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let Oe = 0; Oe < l.width * l.height; Oe += 1) {
        if (h[Oe * 4 + 3] <= 8) continue;
        const Ee = ge.data[Oe * 4 + 3], lt = ve.data[Oe * 4 + 3];
        if (Ee > lt)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(be, ae, ge) {
      const ve = Number(ge == null ? void 0 : ge.z_index), Oe = Xy(be, ae, ge).map((je, Ee) => ({
        ...je,
        z_index: Number.isFinite(ve) ? ve + Ee * 1e-3 : P + Ee * 1e-3
      }));
      return Oe.length && (P = Math.max(P, ...Oe.map((je) => Number((je == null ? void 0 : je.z_index) || 0))) + 1), Oe;
    }
    for (const be of sn()) {
      const ae = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!ae) continue;
      const ge = Qn(ae, "paint");
      if (!ne(ee(be, ge))) {
        b.push(be), g.push(...ge);
        continue;
      }
      const ve = ((He = (ze = p.paintEngine) == null ? void 0 : ze.getGroupTarget) == null ? void 0 : He.call(ze, ae)) || null, Oe = ((Qe = ve == null ? void 0 : ve.committedPaint) == null ? void 0 : Qe.canvas) || null;
      if (!Oe) {
        b.push(be), g.push(...ge);
        continue;
      }
      const je = ie(Oe);
      if (!je.touched || !je.canvas) {
        b.push(be), g.push(...ge);
        continue;
      }
      M = !0;
      const Ee = me(je.canvas, "paint", m.get(ae) || be || {});
      w.push(...Ee);
    }
    for (const be of Nn().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!ne(Z(be))) {
        w.push(be);
        continue;
      }
      const ae = qf(be, null);
      if (!ae) {
        w.push(be);
        continue;
      }
      const ge = ie(ae);
      if (!ge.touched || !ge.canvas) {
        w.push(be);
        continue;
      }
      M = !0;
      const ve = me(ge.canvas, "paint", be);
      w.push(...ve);
    }
    return M ? (_.painting.paint.strokes = g, _.painting.groups = b.sort((be, ae) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), _.painting.raster_objects = w.sort((be, ae) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), Uo({ preservePanelValues: !1 }), !0) : !1;
  }
  function Kb(i) {
    var g, b, w, M, P;
    if ((((b = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.rawPoints) || ((M = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      hc(i);
      const A = Rn();
      A && (String(((P = i.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(A) : p.paintEngine.commitActiveStroke(i.stroke, A)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Ed(i.layerKind, l.toolKind, [], c);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = Rn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Bb(i) {
    var g, b;
    if ((((b = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      hc(i);
      const w = Rn();
      w && p.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Od(i.layerKind, l.toolKind, [], c);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = Rn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function hc(i) {
    var m, g, b, w;
    const a = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!a) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = ac(a.rawPoints || a.points || [], i.stroke.targetSpace, !0)), Gb(i);
    const c = i.layerKind === "paint" && l !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (c && Cf((b = i.stroke) == null ? void 0 : b.actionGroupId), co(i.layerKind).push(i.stroke), !0);
    const h = a.rawPoints || a.points || [];
    return h.length < 1 ? !1 : (a.processedPoints = ac(h, i.stroke.targetSpace, !0), c && Cf((w = i.stroke) == null ? void 0 : w.actionGroupId), co(i.layerKind).push(i.stroke), !0);
  }
  function Td(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const c = Ve(), h = Bt(c);
      if (!c || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const g = rr(i, c, performance.now()), b = g ? ro(g) : null;
      if (b)
        for (const M of ic()) {
          if (!ht(M)) continue;
          const P = Zo(M, b);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const A = Zt(M);
            if (A != null && A.visible) return { item: M, geom: A };
          }
        }
      const w = jl(!1).slice().sort((M, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0));
      for (const M of w) {
        if (M.type === "strokeGroup") {
          const F = Zi(Ko("paint", M.actionGroupId || M.id || ""));
          if (!F) continue;
          const K = Zt(F);
          if (!(K != null && K.visible)) continue;
          const ee = Array.isArray(K.strokePaths) ? K.strokePaths : [];
          for (const Z of ee) {
            const ne = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
            if (!ne.length) continue;
            if (Z.closed && ne.length >= 3 && Hr(i, ne)) return { item: F, geom: K };
            const ie = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
            for (let me = 0; me < ne.length - 1; me += 1)
              if (Qc(i, ne[me], ne[me + 1]) <= ie * ie) return { item: F, geom: K };
            if (ne.length === 1 && hi(i, ne[0]) <= ie * ie) return { item: F, geom: K };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const F = Ji(Bo(((l = M.item) == null ? void 0 : l.id) || M.id || ""));
          if (!F) continue;
          const K = Zt(F);
          if (Xf(F, K, i, g)) return { item: F, geom: K };
          continue;
        }
        const P = M.item;
        if (!P || !ht(P) || !b) continue;
        const A = Zo(P, b);
        if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
          const F = Zt(P);
          if (F != null && F.visible) return { item: P, geom: F };
        }
      }
      return null;
    }
    const a = [
      ...jl(!1).slice().sort((c, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var h;
        return c.type === "strokeGroup" ? Zi(Ko("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Ji(Bo(((h = c.item) == null ? void 0 : h.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? ic().filter((c) => Ln(c)) : []
    ];
    for (const c of a) {
      if (Kt(c)) {
        const m = Zt(c);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of g) {
          const w = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!w.length) continue;
          if (b.closed && w.length >= 3 && Hr(i, w)) return { item: c, geom: m };
          const M = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < w.length - 1; P += 1)
            if (Qc(i, w[P], w[P + 1]) <= M * M) return { item: c, geom: m };
          if (w.length === 1 && hi(i, w[0]) <= M * M) return { item: c, geom: m };
        }
        continue;
      }
      if (ln(c)) {
        const m = Zt(c);
        if (!(m != null && m.visible)) continue;
        if (Xf(c, m, i)) return { item: c, geom: m };
        continue;
      }
      const h = Zt(c);
      if (h.visible && Hr(i, h.corners))
        return { item: c, geom: h };
    }
    return null;
  }
  function pc(i, a, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (ht(l)) return Mu(i, a);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((g) => hi(g, a) <= 121);
      if (h >= 0) {
        const g = i.corners[h], b = g.x - i.center.x, w = g.y - i.center.y, M = b * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: M };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const b = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && b.length >= 3 && Hr(a, b)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let M = 0; M < b.length - 1; M += 1)
          if (Qc(a, b[M], b[M + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Hr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => hi(m, a) <= 121);
      if (h >= 0) {
        const m = i.corners[h], g = m.x - i.center.x, b = m.y - i.center.y, w = g * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: w };
      }
      return Hr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => hi(m, a) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const c = i.corners.findIndex((h) => hi(h, a) <= 121);
    if (c >= 0) {
      const h = i.corners[c], m = h.x - i.center.x, g = h.y - i.center.y, b = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: b };
    }
    return hi(i.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : Hr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function Fd(i, a) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function Wb(i, a) {
    return !!i && !!a && Number(a.x) >= Number(i.x0) && Number(a.x) <= Number(i.x1) && Number(a.y) >= Number(i.y0) && Number(a.y) <= Number(i.y1);
  }
  function Ub(i, a) {
    if (!i || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((h) => Wb(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, c = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Hr({ x: l, y: c }, a.corners);
  }
  function vt(i) {
    if (Vb(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Ce("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? Ce("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Ce("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Ce(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Ce("grabbing") : Ce("default");
      return;
    }
    if (Id()) {
      Ce("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Ce(FP);
        return;
      }
      if (p.primaryTool !== "cursor") {
        Ce("default");
        return;
      }
      Ce("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      Ce("default");
      return;
    }
    const a = kt(), l = a ? Zt(a) : null, c = a ? bn(a) : !1, h = c ? { kind: "none", cursor: "default" } : pc(l, i, a);
    if (!c && h.kind !== "none") {
      Ce(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && Td(i)) {
      Ce("default");
      return;
    }
    Ce(p.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var w, M;
    if (!fr) return;
    if (p.mode === "frame") {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = kt(), a = er();
    if (!i && a.length === 0 || p.interaction) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Wa(), c = Ak({
      type: t,
      selected: i,
      selectedItems: a,
      selectedKind: l,
      geom: a.length > 1 ? Bl(a) : Zt(i),
      allLocked: Wl(a),
      anyLocked: a.some((P) => bn(P)),
      selectedLocked: bn(i),
      activeAspect: Br(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Jt,
      isStickerHidden: Qi,
      canRestoreSelectedToInitial: B0,
      iconSet: Ae
    });
    if (!c.visible) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (P, A, { requireFitsBelow: F = !0 } = {}) => {
      var xe, ze, He;
      const ee = Number((xe = c.anchor) == null ? void 0 : xe.minX), Z = Number((ze = c.anchor) == null ? void 0 : ze.maxX), ne = Number((He = c.anchor) == null ? void 0 : He.maxY);
      if (![ee, Z, ne].every(Number.isFinite)) return null;
      const ie = Math.max(14, T.width - P - 14), me = J((ee + Z) * 0.5 - P * 0.5, 14, ie), re = ne + 18;
      return !Number.isFinite(me) || !Number.isFinite(re) || F && re + A > T.height - 14 ? null : { left: me, top: re };
    }, m = Math.max(1, Number(((w = p.menuSize) == null ? void 0 : w.w) || 220)), g = Math.max(1, Number(((M = p.menuSize) == null ? void 0 : M.h) || 40)), b = h(m, g, { requireFitsBelow: !1 });
    if (!b) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    N.selectionMenu = {
      visible: !0,
      left: b.left,
      top: b.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!fr || N.selectionMenu.visible !== !0) return;
      const P = fr.getBoundingClientRect(), A = Math.round(Number((P == null ? void 0 : P.width) || 0)) || 220, F = Math.round(Number((P == null ? void 0 : P.height) || 0)) || 40;
      p.menuSize = { w: A, h: F, measured: !0 };
      const K = h(A, F);
      if (!K) {
        N.selectionMenu.visible = !1;
        return;
      }
      N.selectionMenu.left = K.left, N.selectionMenu.top = K.top;
    });
  }
  function ki() {
    Fe.timer && (clearTimeout(Fe.timer), Fe.timer = 0), Fe.target = null, N.tooltip.visible = !1;
  }
  function Yb(i) {
    if (!qn || !i || !i.isConnected) return;
    const a = String(i.getAttribute("data-tip") || "").trim();
    if (!a) return;
    N.tooltip.text = a, N.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var Z, ne;
      if (Fe.target !== l || !qn || !(l != null && l.isConnected)) return;
      const c = U.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, g = 12, b = Math.round(Number(((Z = qn.getBoundingClientRect()) == null ? void 0 : Z.width) || 0)) || 100, w = Math.round(Number(((ne = qn.getBoundingClientRect()) == null ? void 0 : ne.height) || 0)) || 24, M = !!l.closest(".pano-floating-left"), P = !!l.closest(".pano-frame-rail"), A = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let F = "", K = h.left - c.left + h.width * 0.5 - b * 0.5, ee = h.top - c.top - w - g;
      if (M)
        F = "tool-rail", K = h.right - c.left + 10, ee = h.top - c.top + h.height * 0.5 - w * 0.5, K = J(K, m, Math.max(m, c.width - b - m)), ee = J(ee, m, Math.max(m, c.height - w - m));
      else if (P)
        F = "frame-rail", K = h.left - c.left - b - 10, ee = h.top - c.top + h.height * 0.5 - w * 0.5, K = J(K, m, Math.max(m, c.width - b - m)), ee = J(ee, m, Math.max(m, c.height - w - m));
      else if (A) {
        F = "footer";
        const ie = l.closest(".pano-paint-footer"), me = ie ? ie.getBoundingClientRect() : h;
        K = me.left - c.left + me.width * 0.5 - b * 0.5, ee = me.bottom - c.top + 5, K = J(K, m, Math.max(m, c.width - b - m)), ee = Math.max(m, ee);
      }
      K = J(K, m, Math.max(m, c.width - b - m)), ee = Math.max(m, ee), N.tooltip.left = K, N.tooltip.top = ee, N.tooltip.variant = F, N.tooltip.visible = !0;
    });
  }
  const rn = uf({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Rt(Number(i.yaw || 0)), p.viewPitch = J(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = J(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = T.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || T.clientWidth || 0)),
        h: Math.max(1, Number(i.height || T.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, a;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (a = _.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: ai,
    onInteraction: () => {
      Se.backgroundDirty = !0, Se.dirty = !0;
    }
  });
  function Xb(i, a, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Um(a, i.lastAngle), i.lastAngle = a;
    const c = Ym(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = c, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = N.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = c, h.displayValue = yo(c), h.fillPct = (c + 180) / 360 * 100), $r(), mc(i), ce({ localOnly: !0 });
  }
  function qb(i, a, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const c = Gg(i.rollGesture, a, l);
    if (!c) return;
    i.rollGesture = c.gesture, i.center = c.gesture.center, i.lastAngle = c.gesture.lastAngle, i.accumulatedRad = c.gesture.accumulatedRad, i.shot.roll_deg = c.rollDeg, i.changed = i.changed || Math.abs(c.gesture.accumulatedRad) > 1e-9;
    const h = (((m = N.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = c.rollDeg, h.displayValue = yo(c.rollDeg), h.fillPct = (c.rollDeg + 180) / 360 * 100), $r(), mc(i), ce({ localOnly: !0 });
  }
  const Dd = (i, a) => {
    const l = Si(i);
    return Math.atan2(l.y - a.y, l.x - a.x);
  };
  function mc(i) {
    var g, b;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Fe.timer && (clearTimeout(Fe.timer), Fe.timer = 0), Fe.target = null;
    const a = Bt(i.shot), l = (g = T.getBoundingClientRect) == null ? void 0 : g.call(T), c = (b = U.getBoundingClientRect) == null ? void 0 : b.call(U);
    if (!a || !l || !c || T.width <= 0 || T.height <= 0) return;
    const h = l.width / T.width, m = l.height / T.height;
    N.tooltip.text = `${yo(i.shot.roll_deg)}°`, N.tooltip.left = l.left - c.left + (a.x + a.w * 0.5) * h, N.tooltip.top = l.top - c.top + (a.y + a.h * 0.5) * m + 12, N.tooltip.variant = "roll", N.tooltip.visible = !0;
  }
  We == null || We.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const a = Ve();
    if (!a || a.locked === !0) return;
    const l = Bt(a);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Dd(i, c);
    p.interaction = {
      kind: "roll_frame",
      shot: a,
      center: c,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(a.roll_deg ?? a.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = We.setPointerCapture) == null || m.call(We, i.pointerId), i.preventDefault(), $r(), mc(p.interaction), ce({ localOnly: !0 });
  }), We == null || We.addEventListener("pointermove", (i) => {
    var a;
    ((a = p.interaction) == null ? void 0 : a.kind) !== "roll_frame" || p.interaction.source !== "knob" || Xb(
      p.interaction,
      Dd(i, p.interaction.center),
      i
    );
  });
  const Jb = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (nt(), ot(), $e()), p.interaction = null, ki(), Lr(), $r(), ce());
  };
  We == null || We.addEventListener("pointerup", Jb), We == null || We.addEventListener("pointercancel", () => na()), We == null || We.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && na();
  }), We == null || We.addEventListener("dblclick", (i) => {
    const a = p.mode === "frame" && !r ? Ve() : null;
    !a || a.locked === !0 || Math.abs(Number(a.roll_deg ?? a.rot_deg ?? 0)) <= 1e-9 || (a.roll_deg = 0, nt(), ot(), $e(), $r(), ce(), i.preventDefault());
  }), T.onpointerdown = (i) => {
    ui(), Ne.selection && (Ne.selection = null, li());
    const a = Si(i);
    if (cs(a, !0), p.viewTween = null, rn.state.inertia.active = !1, rn.state.inertia.vx = 0, rn.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const b = Ve();
        if (!b || r || b.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: b,
          last: a,
          start: {
            yaw_deg: Number(b.yaw_deg || 0),
            pitch_deg: Number(b.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const b = p.mode === "unwrap" ? a : ls(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, rn.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      vt(a), T.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const b = Ve(), w = Bt(b);
      if (!b || b.locked === !0 || !w) return;
      const M = Hg({
        frame: w,
        point: a,
        startRollDeg: Number(b.roll_deg ?? b.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!M) return;
      p.interaction = {
        kind: "roll_frame",
        shot: b,
        center: M.center,
        lastAngle: M.lastAngle,
        accumulatedRad: M.accumulatedRad,
        rollGesture: M,
        start: { roll_deg: Number(b.roll_deg ?? b.rot_deg ?? 0) },
        changed: !1,
        altStarted: M.source === "alt",
        source: M.source
      }, T.setPointerCapture(i.pointerId), i.preventDefault(), $r(), ce({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const b = Ve();
      if (!b || r || b.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: b,
        last: a,
        start: { yaw_deg: Number(b.yaw_deg || 0), pitch_deg: Number(b.pitch_deg || 0) },
        changed: !1
      }, vt(a), T.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const b = ls(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, rn.startDrag(b.x, b.y, i.pointerId, performance.now()), vt(a), T.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Ad() || dc())) {
      const b = p.primaryTool === "mask" ? "mask" : "paint", w = p.primaryTool === "mask" ? p.maskTool : p.paintTool, M = p.mode === "frame" && dc() ? Ve() : null, P = { kind: "ERP_GLOBAL" }, A = M ? rr(a, M, performance.now()) : nr(a, performance.now());
      if (!A) {
        vt(a);
        return;
      }
      p.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: bo("live"),
        stroke: w === "lasso_fill" ? Od(b, w, [A], P) : Ed(b, w, [A], P)
      }, to();
      const F = Rn();
      if (F)
        if (p.paintEngine.beginStroke(p.interaction.stroke, F), p.interaction.kind === "paint_stroke") {
          const K = p.paintEngine.ensureTarget(F), ee = Number((A == null ? void 0 : A.u) ?? (A == null ? void 0 : A.x) ?? 0), Z = Number((A == null ? void 0 : A.v) ?? (A == null ? void 0 : A.y) ?? 0);
          p.paintEngine.appendStrokePoint(K, ee, Z, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, F);
      vt(a), T.setPointerCapture(i.pointerId), ce();
      return;
    }
    const l = er(), c = kt(), h = l.length > 1 ? Bl(l) : c ? Zt(c) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: a, current: a }, vt(a), T.setPointerCapture(i.pointerId), ce({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((w) => bn(w)) ? { kind: "none" } : pc(h, a)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((w) => w),
          offset: { x: a.x - h.center.x, y: a.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((w) => ht(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(nn(w).yaw_deg || 0),
            pitch_deg: Number(nn(w).pitch_deg || 0),
            center: (() => {
              var P, A;
              const M = Zt(w);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((A = M.center) == null ? void 0 : A.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Kt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: un(Qn(w.actionGroupId, w.layerKind)),
            frameSnapshot: un(ii(w.actionGroupId, w.layerKind)),
            center: (() => {
              var P, A;
              const M = Zt(w);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((A = M.center) == null ? void 0 : A.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Kl(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => ln(w)).map((w) => ({
            id: qt(w.rasterObjectId || w.id || ""),
            snapshot: un(Nn().find((M) => String((M == null ? void 0 : M.id) || "") === qt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var P, A;
              const M = Zt(w);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((A = M.center) == null ? void 0 : A.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: ed(w)
          }))
        }, vt(a), T.setPointerCapture(i.pointerId);
        return;
      }
    } else if (c && (h != null && h.visible)) {
      const b = bn(c) ? { kind: "none" } : pc(h, a, c);
      if (b.kind === "scale") {
        p.interaction = Kt(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: un(Qn(c.actionGroupId, c.layerKind)),
          frameSnapshot: un(ii(c.actionGroupId, c.layerKind)),
          cursor: b.cursor
        } : ln(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: un(Nn().find((w) => String((w == null ? void 0 : w.id) || "") === qt(c.rasterObjectId || c.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(nn(c).hFOV_deg || 20),
          startVFOV: Number(nn(c).vFOV_deg || 20),
          cursor: b.cursor
        }, vt(a), T.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        p.interaction = {
          kind: b.kind,
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(nn(c).hFOV_deg || 20),
          startVFOV: Number(nn(c).vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, vt(a), T.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        p.interaction = Kt(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: h.center,
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x),
          snapshot: un(Qn(c.actionGroupId, c.layerKind)),
          frameSnapshot: un(ii(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: h.center,
          startRot: Number(nn(c).rot_deg || nn(c).roll_deg || 0),
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x)
        }, vt(a), T.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Kt(c)) {
          const w = p.mode === "frame" ? (() => {
            const M = Ve();
            return M ? rr(a, M, performance.now()) : null;
          })() : nr(a, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: un(Qn(c.actionGroupId, c.layerKind)),
            frameSnapshot: un(ii(c.actionGroupId, c.layerKind))
          }, vt(a), T.setPointerCapture(i.pointerId);
          return;
        }
        if (ln(c)) {
          const w = p.mode === "frame" ? (() => {
            const M = Ve();
            return M ? rr(a, M, performance.now()) : null;
          })() : nr(a, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: un(Nn().find((M) => String((M == null ? void 0 : M.id) || "") === qt(c.rasterObjectId || c.id || "")))
          }, vt(a), T.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: c,
          offset: { x: a.x - h.center.x, y: a.y - h.center.y }
        }, vt(a), T.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = Td(a);
    if (m) {
      const b = p.selectedId !== m.item.id;
      if (b && p.selectedId && (nt(), An()), hr(m.item), t === "cutout" && b && (p.cutoutAspectOpen = !1), b && $e(), Ye(), ce(), bn(m.item)) {
        vt(a);
        return;
      }
      p.interaction = {
        kind: Kt(m.item) ? "move_stroke_group" : ln(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: a.x - m.geom.center.x, y: a.y - m.geom.center.y },
        startUv: Kt(m.item) || ln(m.item) ? p.mode === "frame" ? (() => {
          const w = Ve();
          return w ? rr(a, w, performance.now()) : null;
        })() : nr(a, performance.now()) : null,
        snapshot: Kt(m.item) ? un(Qn(m.item.actionGroupId, m.item.layerKind)) : ln(m.item) ? un(Nn().find((w) => String((w == null ? void 0 : w.id) || "") === qt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Kt(m.item) ? un(ii(m.item.actionGroupId, m.item.layerKind)) : null
      }, vt(a), T.setPointerCapture(i.pointerId);
      return;
    }
    const g = !!p.selectedId;
    if (g && (nt(), An()), Uo(), g && $e(), Ye(), ce(), p.mode === "pano") {
      const b = ls(i);
      p.interaction = { kind: "view", last: b, lastTs: performance.now() }, rn.startDrag(b.x, b.y, i.pointerId, performance.now()), vt(a), T.setPointerCapture(i.pointerId);
    }
  }, T.onpointermove = (i) => {
    var c, h, m, g, b, w, M, P, A, F, K, ee, Z, ne, ie, me, re, xe, ze, He, Qe, be;
    const a = Si(i);
    if (cs(a, !0), !p.interaction) {
      vt(a);
      return;
    }
    vt(a);
    const l = p.interaction;
    if (l.kind === "paint_stroke") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let ge = !1;
      ae.forEach((ve) => {
        const Oe = Si(ve);
        if (p.mode === "frame") {
          const je = Ve(), Ee = je ? Bt(je) : null;
          if (Ee) {
            const lt = (Oe.x - Ee.x) / Math.max(1, Ee.w), Xe = (Oe.y - Ee.y) / Math.max(1, Ee.h);
            if (!(lt >= 0 && lt <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Kb(l));
          }
        }
        jb(l, Oe, performance.now()) && (ge = !0);
      }), ge && ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let ge = !1;
      if (ae.forEach((ve) => {
        const Oe = Si(ve);
        if (p.mode === "frame") {
          const je = Ve(), Ee = je ? Bt(je) : null;
          if (Ee) {
            const lt = (Oe.x - Ee.x) / Math.max(1, Ee.w), Xe = (Oe.y - Ee.y) / Math.max(1, Ee.h);
            if (!(lt >= 0 && lt <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Bb(l));
          }
        }
        Hb(l, Oe, performance.now()) && (ge = !0);
      }), ge) {
        const ve = Rn();
        ve && p.paintEngine.updateActiveStroke(l.stroke, ve), ce({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const ae = performance.now(), ge = p.mode === "unwrap" ? a : ls(i);
      rn.moveDrag(ge.x, ge.y, p.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = ge, ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const ae = fc(l.shot);
      if (!ae || !l.shot) return;
      const ge = a.x - l.last.x, ve = a.y - l.last.y, Oe = Kg(l.shot, {
        dx: ge,
        dy: ve,
        focalPx: ae.focalPx,
        invertX: ((c = _.ui_settings) == null ? void 0 : c.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Oe.yaw_deg, l.shot.pitch_deg = Oe.pitch_deg, l.changed = l.changed || Math.abs(ge) > 0 || Math.abs(ve) > 0, l.last = a, ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      qb(l, a, i);
      return;
    }
    if (l.kind === "move") {
      const ae = a.x - l.offset.x, ge = a.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const ve = Ve(), Oe = Bt(ve);
        if (!ve || !Oe) return;
        const je = {
          x: J((ae - Oe.x) / Math.max(1, Oe.w), 0, 1),
          y: J((ge - Oe.y) / Math.max(1, Oe.h), 0, 1)
        }, Ee = oc(ve, je);
        if (!Ee) return;
        const lt = Cs(Ee);
        Zn(l.item, { yaw_deg: lt.yaw, pitch_deg: lt.pitch });
      } else if (p.mode === "unwrap") {
        const ve = ai(), Oe = J((ae - ve.x) / Math.max(ve.w, 1), 0, 1), je = J((ge - ve.y) / Math.max(ve.h, 1), 0, 1);
        Zn(l.item, { yaw_deg: Rt(Oe * 360 - 180), pitch_deg: J(90 - je * 180, -90, 90) });
      } else {
        const ve = Zl(ae, ge), Oe = Cs(ve);
        Zn(l.item, { yaw_deg: Oe.yaw, pitch_deg: Oe.pitch });
      }
      ht(l.item) && jt(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const ae = p.mode === "frame" ? (() => {
        const Oe = Ve();
        return Oe ? rr(a, Oe, performance.now()) : null;
      })() : nr(a, performance.now());
      if (!ae || !l.startUv) return;
      const ge = Gn(Number(ae.u || 0), Number(l.startUv.u || 0)), ve = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Ef((m = l.item) == null ? void 0 : m.actionGroupId, ge, ve, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (tr({ rebuildPaintEngine: !1 }), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const ae = p.mode === "frame" ? (() => {
        const Oe = Ve();
        return Oe ? rr(a, Oe, performance.now()) : null;
      })() : nr(a, performance.now());
      if (!ae || !l.startUv) return;
      const ge = Gn(Number(ae.u || 0), Number(l.startUv.u || 0)), ve = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Tf(((b = l.item) == null ? void 0 : b.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", ge, ve, l.snapshot) && (oo(), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const ge = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      F0(((M = l.item) == null ? void 0 : M.rasterObjectId) || ((P = l.item) == null ? void 0 : P.id) || "", ge, l.snapshot) && (oo(), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const ae = a.x - Number(((A = l.offset) == null ? void 0 : A.x) || 0), ge = a.y - Number(((F = l.offset) == null ? void 0 : F.y) || 0);
      let ve = !1, Oe = !1, je = !1;
      const Ee = ae - Number(((K = l.startCenter) == null ? void 0 : K.x) || ae), lt = ge - Number(((ee = l.startCenter) == null ? void 0 : ee.y) || ge);
      for (const Xe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const Et = (t === "cutout" ? Gl() : dr()).find((Mt) => String((Mt == null ? void 0 : Mt.id) || "") === String(Xe.id || ""));
        if (!Et || !ht(Et)) continue;
        const on = {
          x: Number(((Z = Xe.center) == null ? void 0 : Z.x) || 0) + Ee,
          y: Number(((ne = Xe.center) == null ? void 0 : ne.y) || 0) + lt
        };
        if (p.mode === "frame" && t === "cutout") {
          const Mt = Ve(), Ot = Bt(Mt);
          if (!Mt || !Ot) continue;
          const Mi = {
            x: J((on.x - Ot.x) / Math.max(1, Ot.w), 0, 1),
            y: J((on.y - Ot.y) / Math.max(1, Ot.h), 0, 1)
          }, Qd = oc(Mt, Mi);
          if (!Qd) continue;
          const eh = Cs(Qd);
          Zn(Et, { yaw_deg: eh.yaw, pitch_deg: eh.pitch });
        } else if (p.mode === "unwrap") {
          const Mt = ai(), Ot = J((on.x - Mt.x) / Math.max(Mt.w, 1), 0, 1), Mi = J((on.y - Mt.y) / Math.max(Mt.h, 1), 0, 1);
          Zn(Et, { yaw_deg: Rt(Ot * 360 - 180), pitch_deg: J(90 - Mi * 180, -90, 90) });
        } else {
          const Mt = Zl(on.x, on.y), Ot = Cs(Mt);
          Zn(Et, { yaw_deg: Ot.yaw, pitch_deg: Ot.pitch });
        }
        ve = !0;
      }
      for (const Xe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const Et = {
          x: Number(((ie = Xe.center) == null ? void 0 : ie.x) || 0) + Ee,
          y: Number(((me = Xe.center) == null ? void 0 : me.y) || 0) + lt
        }, on = p.mode === "frame" ? (() => {
          const Ot = Ve();
          return Ot ? rr(Et, Ot, performance.now()) : null;
        })() : nr(Et, performance.now()), Mt = Xe.centerUv || null;
        if (on && Mt) {
          const Ot = Gn(Number(on.u || 0), Number(Mt.u || 0)), Mi = Number(on.v || 0) - Number(Mt.v || 0);
          Ef(Xe.id, Ot, Mi, Xe.snapshot, Xe.layerKind, Xe.frameSnapshot) && (ve = !0, Oe = !0);
        }
      }
      for (const Xe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const Et = {
          x: Number(((re = Xe.center) == null ? void 0 : re.x) || 0) + Ee,
          y: Number(((xe = Xe.center) == null ? void 0 : xe.y) || 0) + lt
        }, on = p.mode === "frame" ? (() => {
          const Ot = Ve();
          return Ot ? rr(Et, Ot, performance.now()) : null;
        })() : nr(Et, performance.now()), Mt = Xe.centerUv || null;
        if (on && Mt) {
          const Ot = Gn(Number(on.u || 0), Number(Mt.u || 0)), Mi = Number(on.v || 0) - Number(Mt.v || 0);
          Tf(Xe.id, Ot, Mi, Xe.snapshot) && (ve = !0, je = !0);
        }
      }
      ve && (Oe ? tr({ rebuildPaintEngine: !1 }) : je ? oo() : jt(), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const ge = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Of((ze = l.item) == null ? void 0 : ze.actionGroupId, ge, 0, l.snapshot, (He = l.item) == null ? void 0 : He.layerKind, l.frameSnapshot) && (tr({ rebuildPaintEngine: !1 }), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let ae = (Math.atan2(a.y - l.center.y, a.x - l.center.x) - Number(l.startAng || 0)) * Li;
      i.shiftKey && (ae = Math.round(ae / 45) * 45), Of((Qe = l.item) == null ? void 0 : Qe.actionGroupId, 1, ae, l.snapshot, (be = l.item) == null ? void 0 : be.layerKind, l.frameSnapshot) && (tr({ rebuildPaintEngine: !1 }), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = a, ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const ge = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / l.startDist;
      Zn(l.item, { hFOV_deg: J(l.startHFOV * ge, 1, 179), vFOV_deg: J(l.startVFOV * ge, 1, 179) }), Jn(l.item) || (l.item.aspect_id = Fi(l.item)), ht(l.item) && jt(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const ge = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / l.startDist;
      Zn(l.item, { hFOV_deg: J(l.startHFOV * ge, 1, 179) }), Jn(l.item) || (l.item.aspect_id = Fi(l.item)), ht(l.item) && jt(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const ge = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / l.startDist;
      Zn(l.item, { vFOV_deg: J(l.startVFOV * ge, 1, 179) }), Jn(l.item) || (l.item.aspect_id = Fi(l.item)), ht(l.item) && jt(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let ge = (Math.atan2(a.y - l.center.y, a.x - l.center.x) - l.startAng) * Li, ve = l.startRot - ge;
      i.shiftKey && (ve = Math.round(ve / 45) * 45), Zn(l.item, { [ht(l.item) ? "rot_deg" : "roll_deg"]: ve }), ht(l.item) && jt(), ce({ localOnly: !0 });
    }
  }, T.onpointerup = () => {
    var a, l, c, h, m, g, b, w;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((a = p.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        to();
        const M = hc(p.interaction), P = !!p.interaction._hasCommittedSegments;
        if (M || P) {
          tr();
          const A = String(((c = p.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
          if (A) {
            const K = sn().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === A);
            K && (K.frame = null);
          }
          const F = Rn();
          F && (M ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(F), cd()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, F) : p.paintEngine.cancelActiveStroke(F)), nt(), An(), $e(), Ye(), e.setDirtyCanvas(!0, !0), ce();
        } else {
          const A = Rn();
          A && p.paintEngine.cancelActiveStroke(A);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const M = Fd(p.interaction.start, p.interaction.current), A = [
          ...t === "cutout" ? ic().filter((F) => !Ln(F)) : [...dr()],
          ...I0(),
          ...E0()
        ].filter((F) => Ub(M, Zt(F)));
        R0(A, ((g = A[A.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && A.length && (p.cutoutAspectOpen = !1), $e(), Ye(), ce();
      } else if (((b = p.interaction) == null ? void 0 : b.kind) === "pan_frame" || ((w = p.interaction) == null ? void 0 : w.kind) === "roll_frame")
        p.interaction.changed && (nt(), ot(), $e());
      else if (p.interaction && p.interaction.kind !== "view") {
        let M = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (M = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (M = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (M = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (M = !0), M && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? tr({ rebuildPaintEngine: !0 }) : oo()), nt(), An(), e.setDirtyCanvas(!0, !0), ao(), Ye(), ce();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && ki(), to(), i && i.kind === "view" && rn.endDrag(performance.now()), Lr(), Ye(), vt(p.pointerPos), ce();
    }
  }, T.onpointercancel = () => {
    var i, a, l;
    if (!na()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && rn.endDrag(performance.now()), ((a = p.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        to();
        const c = Rn();
        c && p.paintEngine.cancelActiveStroke(c);
      }
      p.interaction = null, to(), Lr(), vt(p.pointerPos), ce({ localOnly: !0 });
    }
  }, T.onlostpointercapture = () => {
    na();
  }, T.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, T.onmousemove = (i) => {
    const a = Si(i), l = cs(a, !0);
    p.interaction || (vt(a), l && p.mode === "frame" && p.primaryTool === "cursor" && ce({ localOnly: !0 }));
  }, T.onmouseleave = () => {
    cs(p.pointerPos, !1), vt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && ce({ localOnly: !0 });
  }, T.onwheel = (i) => {
    if (p.mode === "frame") {
      const a = Si(i), l = cf(i);
      l && Db(a, l) && ce({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (rn.applyWheelEvent(i) && ce({ localOnly: !0 }), i.preventDefault());
  }, T.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), _i(!0));
  }, T.ondrop = (i) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ke.depth = 0, _i(!1);
    const l = Array.from(((c = i.dataTransfer) == null ? void 0 : c.files) || []).find((h) => Pr(h));
    l && xd(l);
  };
  const Ld = (i) => {
    t !== "stickers" && t !== "cutout" || r || Ll(i) && (Ke.depth += 1, _i(!0), i.preventDefault());
  }, Rd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ke.active && Ll(i) && _i(!0), Ke.active && i.preventDefault());
  }, $d = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ke.active) return;
    Ke.depth = Math.max(0, Ke.depth - 1);
    const a = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ke.depth === 0 || a) && _i(!1);
  }, Vd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ke.depth = 0, _i(!1), Ll(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Ld, !0), window.addEventListener("dragover", Rd, !0), window.addEventListener("dragleave", $d, !0), window.addEventListener("drop", Vd, !0);
  function gc() {
    const { canUndo: i, canRedo: a } = gd();
    mo(N.toolButtons, "value", "undo", { disabled: !i }), mo(N.toolButtons, "value", "redo", { disabled: !a });
  }
  const zd = (i, a, l = !1) => {
    var M;
    ui();
    const c = t === "cutout" && p.mode === "frame" ? Ve() : null, h = c || kt(), m = c ? "shot" : Wa(), g = k && p.inspectCamera;
    if (!g && (!h || m === "stroke" || bn(h))) return;
    const b = (((M = N.sidePanel) == null ? void 0 : M.params) || []).find((P) => P.key === i);
    if (!b || b.enabled === !1) return;
    let w = Number(a);
    if (Number.isNaN(w) && (w = 0), w = J(w, Number(b.min), Number(b.max)), i === "yaw_deg" && (w = Rt(w)), g) {
      Qx(_.camera, p.frame, i, w), $e(), l && nt();
      return;
    }
    i === "opacity" ? ew(h, p.frame, w / 100) : Zn(h, { [i]: w }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = Fi(h)), $e(), ce(), l && nt();
  };
  Ge == null || Ge.addEventListener("click", async (i) => {
    var c, h, m, g, b, w, M;
    const a = i.target.closest("[data-action]");
    if (!a) return;
    const l = String(a.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const P = Vn(a.getAttribute("data-coverage"));
      if (P === Vn(_.coverage)) return;
      _.coverage = P, p.coverage = P, d && (d.value = String(P)), s ? Se.backgroundDirty = !0 : (An(), Tb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), $e(), Ye(), ce();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (c = N.sidePanel) == null ? void 0 : c.selectionPicker) != null && h.disabled) return;
      N.sidePanel.selectionPicker.open = !N.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      N.sidePanel.selectionPicker.open = !1;
      const P = String(a.getAttribute("data-selection-id") || "");
      let A = null;
      if (P && (t === "stickers" ? A = dr().find((F) => String((F == null ? void 0 : F.id) || "") === P) || null : A = ((m = Df().find((F) => {
        var K;
        return String(((K = F == null ? void 0 : F.item) == null ? void 0 : K.id) || "") === P;
      })) == null ? void 0 : m.item) || null), hr(A || null), A && !Kt(A)) {
        const F = nn(A);
        Rl(
          Rt(Number(F.yaw_deg || 0)),
          J(Number(F.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      $e(), Ye(), ce();
      return;
    }
    if (l === "copy-state-inline") {
      const P = kt(), A = Wa();
      if (!P || A === "stroke" || er().length > 1) return;
      const F = JSON.stringify(t === "cutout" && A !== "image" ? Gf(P) : q0(nn(P)));
      try {
        await navigator.clipboard.writeText(F), (g = N.sidePanel) != null && g.copyStateButton && (N.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = N.sidePanel) != null && K.copyStateButton && (N.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const P = String(a.getAttribute("data-visibility") || "");
      P === "panorama" ? p.showPanorama = !p.showPanorama : P === "objects" ? p.showObjects = !p.showObjects : P === "mask" && (p.showMask = !p.showMask), $e(), ce();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = a.getAttribute("data-value") === "1", uc(), $e(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ce();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = a.getAttribute("data-value") === "1", uc(), $e(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ce();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, uc(), $e(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ce();
      return;
    }
    if (l === "close-preview") {
      fo();
      return;
    }
    if (l === "cancel-close") {
      fo();
      return;
    }
    l === "save-close" && (Eb(), fo());
  }), Ge == null || Ge.addEventListener("input", (i) => {
    const a = i.target.closest("[data-action='param-input']");
    a && zd(String(a.getAttribute("data-param-key") || ""), a.value, !1);
  }), Ge == null || Ge.addEventListener("change", (i) => {
    const a = i.target.closest("[data-action='param-input']");
    a && zd(String(a.getAttribute("data-param-key") || ""), a.value, !0);
  });
  const yc = () => Bf();
  yc(), I.addEventListener("click", (i) => {
    var b, w, M, P;
    if ((w = (b = i.target) == null ? void 0 : b.matches) != null && w.call(b, "[data-confirm-overlay]")) {
      const A = (M = N.confirmDialog) == null ? void 0 : M.resolve;
      N.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, A == null || A(!1);
      return;
    }
    const a = i.target.closest("[data-view]");
    if (a) {
      if (a.disabled) return;
      const A = p.mode;
      p.mode = String(a.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (A !== "frame" && (Se.frameSafeRect = null), $e(), Ye()), ss(), Lr(), ce();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const A = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = A, (A === "paint" || A === "mask") && Uo({ preservePanelValues: !0 }), Pn(), $e(), Ye(), ce();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const A = String(l.getAttribute("data-tool-ui-action") || "");
        if ((A === "undo" || A === "redo") && l.disabled) return;
        A === "undo" ? sc(-1) : A === "redo" ? sc(1) : A === "clear" ? Mb() : A === "add" || A === "add-image" ? mb() : A === "add-or-look" && wb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const A = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = A, Uo({ preservePanelValues: !0 }), Cn[A] && (p.activeBrushPresetId = A), Pn(), $e(), Ye(), ce();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Uo({ preservePanelValues: !0 }), Pn(), $e(), Ye(), ce();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const A = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Nb(A);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const A = Ws.find((F) => F.id === l.getAttribute("data-paint-color-swatch"));
        if (!A) return;
        p.paintColor = $n(A.color), ye(!0), Pn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? ye(!0) : Re(), Pn();
        return;
      }
    }
    const c = String(((P = l == null ? void 0 : l.getAttribute) == null ? void 0 : P.call(l, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      if (xi(), G.paused) {
        q.mode = "playback", q.pendingPlaybackResume = !1, q.resumeAfterScrub = !1;
        const A = Number(N.videoTransport.duration || G.duration || 0), F = Number(G.currentTime || q.editorTime || 0), K = A > 0 && F >= A - 1e-3 ? 0 : Number(q.editorTime || F || 0), ee = Math.max(ri(), 0.04);
        q.editorTime = K, Math.abs(F - K) > ee ? (q.seeking = !1, q.pendingPlaybackResume = !0, Ya(K)) : G.play().catch(() => {
        });
      } else
        G.pause(), q.mode = "scrub", q.resumeAfterScrub = !1, q.pendingPlaybackResume = !1, q.editorTime = Number(G.currentTime || 0), eo();
      pr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: mr(),
        currentTime: q.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: q.mode
      }), ce({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), zf(), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      const A = !N.videoTransport.loop;
      N.videoTransport.loop = A, G.loop = A, pr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: mr(),
        currentTime: q.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: q.mode,
        hasAudio: N.videoTransport.hasAudio,
        loop: A,
        muted: G.muted,
        volume: Number(G.volume ?? N.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (c === "frame-aspect") {
        N.frameRail.aspectOpen = !N.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const A = p.mode === "frame" ? Ve() : null;
        if (!A || A.locked === !0) return;
        kd(A, String(l.getAttribute("data-aspect") || "1:1")), N.frameRail.aspectOpen = !1, ao(), nt(), ot(), Lr(), ce();
        return;
      }
      if (c === "frame-aspect-custom") {
        const A = p.mode === "frame" ? Ve() : null, F = l.getAttribute("data-custom-width"), K = l.getAttribute("data-custom-height");
        if (!A || !Ab(A, F, K)) return;
        N.frameRail.aspectOpen = !1, ao(), nt(), ot(), Lr(), ce();
        return;
      }
      if (c === "frame-rotate-90") {
        const A = p.mode === "frame" ? Ve() : null;
        if (!A || A.locked === !0) return;
        Md(A), N.frameRail.aspectOpen = !1, ao(), nt(), ot(), Lr(), ce();
        return;
      }
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Ye(), ce();
        return;
      }
      if (c === "aspect-set") {
        const A = kt();
        if (!A) return;
        const F = String(l.getAttribute("data-aspect") || "1:1");
        kd(A, F), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, ao(), nt(), ot(), Ye(), ce();
        return;
      }
      if (c === "rotate-90") {
        const A = kt();
        if (!A) return;
        Md(A), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, ao(), nt(), ot(), Ye(), ce();
        return;
      }
      if (c === "bring-front") {
        Cb();
        return;
      }
      if (c === "send-back") {
        Ib();
        return;
      }
      if (c === "duplicate") {
        Pb();
        return;
      }
      if (c === "replace-image") {
        vb();
        return;
      }
      if (c === "toggle-lock") {
        L0();
        return;
      }
      if (c === "back-initial") {
        G0();
        return;
      }
      if (c === "toggle-visible") {
        H0();
        return;
      }
      if (c === "delete") {
        Sd();
        return;
      }
    }
    if (c === "reset-view") {
      if (p.mode === "frame") return;
      Rl(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, r2(e == null ? void 0 : e.id, p.showGrid), yc(), ce();
      return;
    }
    if (c === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), e1();
      return;
    }
    if (c === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const A = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = A, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = A ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Bd(), ce();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), g = p.customPaintHistory[m];
    g && (p.customPaintColor = $n(g), p.paintColor = $n(g), Pn());
  }), I.addEventListener("input", (i) => {
    const a = i.target.closest("[data-video-seek]");
    if (a) {
      if (!(G instanceof HTMLVideoElement)) return;
      Xa(a.value);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(G instanceof HTMLVideoElement)) return;
      const m = J(Number(l.value || 0), 0, 1);
      G.volume = m, G.muted = m <= 1e-4, pr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: mr(),
        currentTime: q.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: q.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: G.muted,
        volume: m
      });
      return;
    }
    const c = i.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), g = fi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[g] = m, Pn(), zb();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: J(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = $n(m), p.paintColor = $n(m), Pn();
    }
  }), I.addEventListener("change", (i) => {
    var a;
    if (i.target.closest("[data-video-seek]")) {
      if (!(G instanceof HTMLVideoElement)) return;
      qa();
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((a = i.target) == null ? void 0 : a.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && us();
  }), I.addEventListener("pointerup", (i) => {
    var a;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((a = i.target) == null ? void 0 : a.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && us();
  }), I.addEventListener("pointercancel", (i) => {
    var a;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((a = i.target) == null ? void 0 : a.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && us();
  }), I.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && us();
  }), I.addEventListener("pointerover", (i) => {
    const a = i.target.closest("[data-tip]");
    !a || !I.contains(a) || Fe.target !== a && (Fe.target = a, Fe.timer && clearTimeout(Fe.timer), Fe.timer = window.setTimeout(() => {
      Fe.target === a && Yb(a);
    }, 220));
  }), I.addEventListener("pointerout", (i) => {
    var c, h;
    const a = i.target.closest("[data-tip]");
    !a || Fe.target !== a || (i.relatedTarget instanceof Element ? (h = (c = i.relatedTarget).closest) == null ? void 0 : h.call(c, "[data-tip]") : null) === a || ki();
  }), I.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || ki();
  });
  const Zb = (i, a) => {
    var b;
    if (!te) return;
    const l = te.getBoundingClientRect(), c = J((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - J((a - l.top) / Math.max(1, l.height), 0, 1), m = tu(p.customPaintColor), g = { ...eu(m.h, c, h), a: Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    p.customPaintColor = $n(g), p.paintColor = $n(g), Pn();
  }, Qb = (i) => {
    var m;
    if (!he) return;
    const a = he.getBoundingClientRect(), l = J((i - a.left) / Math.max(1, a.width), 0, 1), c = tu(p.customPaintColor), h = { ...eu(l, c.s, c.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = $n(h), p.paintColor = $n(h), Pn();
  }, jd = (i, a) => {
    const l = i.pointerId;
    a(i);
    const c = (m) => {
      m.pointerId === l && a(m);
    }, h = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  te && (te.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), jd(i, (a) => Zb(a.clientX, a.clientY));
  }), he && (he.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), jd(i, (a) => Qb(a.clientX));
  }), I.addEventListener("click", (i) => {
    var h;
    const a = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!a) return;
    const l = a.getAttribute("data-action") === "confirm-accept", c = (h = N.confirmDialog) == null ? void 0 : h.resolve;
    N.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(l);
  });
  const Hd = () => {
    const i = !!p.fullscreen;
    mo(N.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ae.fullscreen_close : Ae.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, fs = (i) => {
    const a = !!i;
    p.fullscreen !== a && (p.fullscreen = a, I.classList.toggle("pano-modal-fullscreen", a), a ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), yc(), Hd(), ni(), ce());
  }, Gd = () => document.fullscreenElement === Y, e1 = async () => {
    var i, a;
    try {
      if (!document.fullscreenEnabled) {
        fs(!p.fullscreen);
        return;
      }
      Gd() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((i = Y.requestFullscreen) == null ? void 0 : i.call(Y));
    } catch {
      fs(!p.fullscreen);
    }
  }, Kd = () => {
    document.fullscreenEnabled && fs(Gd());
  };
  document.addEventListener("fullscreenchange", Kd), Hd();
  const Bd = () => {
    const i = !!p.outputPreviewExpanded;
    N.outputPreviewToggle.icon = i ? Ae.fullscreen_close : Ae.fullscreen, N.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", N.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Bd();
  const bc = e.onExecuted, vc = e.onConnectionsChange;
  let _c = null, xc = null, Wd = null, Ud = () => {
  };
  !r && t === "stickers" && (Wd = (i = "sync") => {
    Kf(i);
  }, Ud = o0(e, Wd), _c = function(...a) {
    typeof bc == "function" && bc.apply(this, a), GP(Ue, Ns), ya(this, "executed");
  }, e.onExecuted = _c, xc = function(...a) {
    typeof vc == "function" && vc.apply(this, a), ya(this, "connections");
  }, e.onConnectionsChange = xc), r || Fp.set(String(e.id ?? "0"), () => Jf());
  let uo = null;
  const fo = async () => uo || (uo = (async () => {
    var i, a, l, c, h, m, g, b;
    return Fp.delete(String(e.id ?? "0")), Lb(), r || An(), document.fullscreenElement === Y && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Kd), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Pd && (e.__panoFlushStateBeforeQueue = null), (l = (a = e.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || l.call(a), (h = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || h.call(c, !0, !0), (b = (g = (m = lr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || b.call(g, !0, !0), ki(), ub(), ui(), G instanceof HTMLVideoElement && G.pause(), bt.forEach((w) => {
      try {
        w();
      } catch {
      }
    }), gn.dispose(), _i(!1), window.removeEventListener("keydown", Yd, !0), window.removeEventListener("keydown", Xd, !0), window.removeEventListener("keydown", ds, !0), window.removeEventListener("keyup", ds, !0), window.removeEventListener("blur", qd), window.removeEventListener("keydown", Jd, !0), window.removeEventListener("dragenter", Ld, !0), window.removeEventListener("dragover", Rd, !0), window.removeEventListener("dragleave", $d, !0), window.removeEventListener("drop", Vd, !0), !r && t === "stickers" && (e.onExecuted === _c && (e.onExecuted = bc), e.onConnectionsChange === xc && (e.onConnectionsChange = vc), Ud()), W.unmount(), O.remove(), Ob(), uo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), uo = null, !1)), uo), Yd = (i) => {
    var a, l, c, h, m;
    if (i.key === "Escape") {
      if (na()) {
        i.preventDefault(), i.stopPropagation(), (a = i.stopImmediatePropagation) == null || a.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === Y) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), fs(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), fo();
    }
  }, Xd = (i) => {
    const a = String(i.key || ""), l = String(i.code || ""), c = Number(i.keyCode || 0);
    if (!(a === "Delete" || l === "Delete" || c === 46) && !(a === "Backspace" || l === "Backspace" || c === 8)) return;
    const g = i.target, b = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Ne.selection) {
      hb(), i.preventDefault(), i.stopPropagation();
      return;
    }
    kt() && (Sd(), i.preventDefault(), i.stopPropagation());
  }, ds = (i) => {
    const a = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === a && p.altModifier === l || (p.marqueeModifier = a, p.altModifier = l, $r(), vt(p.pointerPos));
  }, qd = () => {
    p.marqueeModifier = !1, p.altModifier = !1, $r(), vt(p.pointerPos);
  }, Jd = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const a = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (a !== "z" && l !== "KeyZ") return;
    const c = i.target, h = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: g } = gd();
    i.shiftKey && !g || !i.shiftKey && !m || (sc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Yd, !0), window.addEventListener("keydown", Xd, !0), window.addEventListener("keydown", ds, !0), window.addEventListener("keyup", ds, !0), window.addEventListener("blur", qd), window.addEventListener("keydown", Jd, !0), Y.addEventListener("pointerdown", (i) => {
    i.target === Y && fo();
  });
  function gr(i, a, { rollbackState: l = !1 } = {}) {
    let c = "";
    try {
      l && (c = JSON.stringify(_)), a();
    } catch (h) {
      if (c)
        try {
          const m = JSON.parse(c);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || An();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      N.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  gr("cutout-focus", Q0), !r && t === "stickers" && gr("external-sticker-sync", () => Kf("open"), { rollbackState: !0 }), _b().catch((i) => {
    N.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), gr("history", nt), gr("undo-redo", gc), gr("paint-ui", Pn), gr("side-panel", $e), gr("look-at-frame", ql), gr("video-source", xi), gr("canvas-size", pd), gr("cursor", () => vt(p.pointerPos)), ce(), Se.rafId = requestAnimationFrame(md);
}
lr.registerExtension(mS({
  app: lr,
  openEditor: c2,
  attachStickers: xk,
  attachCutout: wk,
  attachPreview: _k,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: OP
}));
