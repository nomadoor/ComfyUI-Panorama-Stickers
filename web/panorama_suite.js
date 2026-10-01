import * as Ds from "../../scripts/app.js";
import { app as Ar } from "../../scripts/app.js";
import { api as Yt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ju(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, Ao = [], Cr = () => {
}, zp = () => !1, wl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sl = (e) => e.startsWith("onUpdate:"), mn = Object.assign, Hu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, t1 = Object.prototype.hasOwnProperty, ft = (e, t) => t1.call(e, t), qe = Array.isArray, Co = (e) => Ka(e) === "[object Map]", jp = (e) => Ka(e) === "[object Set]", ih = (e) => Ka(e) === "[object Date]", Je = (e) => typeof e == "function", Vt = (e) => typeof e == "string", Ir = (e) => typeof e == "symbol", mt = (e) => e !== null && typeof e == "object", Hp = (e) => (mt(e) || Je(e)) && Je(e.then) && Je(e.catch), Gp = Object.prototype.toString, Ka = (e) => Gp.call(e), n1 = (e) => Ka(e).slice(8, -1), Kp = (e) => Ka(e) === "[object Object]", Gu = (e) => Vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Sa = /* @__PURE__ */ ju(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, r1 = /-\w/g, Sn = kl(
  (e) => e.replace(r1, (t) => t.slice(1).toUpperCase())
), i1 = /\B([A-Z])/g, Ji = kl(
  (e) => e.replace(i1, "-$1").toLowerCase()
), Ml = kl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Mc = kl(
  (e) => e ? `on${Ml(e)}` : ""
), kr = (e, t) => !Object.is(e, t), Ls = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Bp = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ku = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let oh;
const Nl = () => oh || (oh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Vt(r) ? l1(r) : St(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Vt(e) || mt(e))
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
  if (Vt(e))
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
const c1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", u1 = /* @__PURE__ */ ju(c1);
function Wp(e) {
  return !!e || e === "";
}
function d1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Bu(e[r], t[r]);
  return n;
}
function Bu(e, t) {
  if (e === t) return !0;
  let n = ih(e), r = ih(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ir(e), r = Ir(t), n || r)
    return e === t;
  if (n = qe(e), r = qe(t), n || r)
    return n && r ? d1(e, t) : !1;
  if (n = mt(e), r = mt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const u in e) {
      const d = e.hasOwnProperty(u), f = t.hasOwnProperty(u);
      if (d && !f || !d && f || !Bu(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Up = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Vt(e) ? e : e == null ? "" : qe(e) || mt(e) && (e.toString === Gp || !Je(e.toString)) ? Up(e) ? tt(e.value) : JSON.stringify(e, Yp, 2) : String(e), Yp = (e, t) => Up(t) ? Yp(e, t.value) : Co(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Nc(r, s) + " =>"] = o, n),
    {}
  )
} : jp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Nc(n))
} : Ir(t) ? Nc(t) : mt(t) && !qe(t) && !Kp(t) ? String(t) : t, Nc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ir(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let En;
class f1 {
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
const Pc = /* @__PURE__ */ new WeakSet();
class Xp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, En && En.active && En.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pc.has(this) && (Pc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ah(this), Zp(this);
    const t = wt, n = lr;
    wt = this, lr = !0;
    try {
      return this.fn();
    } finally {
      Qp(this), wt = t, lr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Yu(t);
      this.deps = this.depsTail = void 0, ah(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    au(this) && this.run();
  }
  get dirty() {
    return au(this);
  }
}
let qp = 0, ka, Ma;
function Jp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ma, Ma = e;
    return;
  }
  e.next = ka, ka = e;
}
function Wu() {
  qp++;
}
function Uu() {
  if (--qp > 0)
    return;
  if (Ma) {
    let t = Ma;
    for (Ma = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ka; ) {
    let t = ka;
    for (ka = void 0; t; ) {
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
function Zp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Yu(r), p1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function au(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (em(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function em(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ia) || (e.globalVersion = Ia, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !au(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = wt, r = lr;
  wt = e, lr = !0;
  try {
    Zp(e);
    const o = e.fn(e._value);
    (t.version === 0 || kr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    wt = n, lr = r, Qp(e), e.flags &= -3;
  }
}
function Yu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Yu(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function p1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lr = !0;
const tm = [];
function ei() {
  tm.push(lr), lr = !1;
}
function ti() {
  const e = tm.pop();
  lr = e === void 0 ? !0 : e;
}
function ah(e) {
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
let Ia = 0;
class m1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!wt || !lr || wt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== wt)
      n = this.activeLink = new m1(wt, this), wt.deps ? (n.prevDep = wt.depsTail, wt.depsTail.nextDep = n, wt.depsTail = n) : wt.deps = wt.depsTail = n, nm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = wt.depsTail, n.nextDep = void 0, wt.depsTail.nextDep = n, wt.depsTail = n, wt.deps === n && (wt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ia++, this.notify(t);
  }
  notify(t) {
    Wu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Uu();
    }
  }
}
function nm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        nm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const su = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ Symbol(
  ""
), lu = /* @__PURE__ */ Symbol(
  ""
), Ea = /* @__PURE__ */ Symbol(
  ""
);
function fn(e, t, n) {
  if (lr && wt) {
    let r = su.get(e);
    r || su.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Xu()), o.map = r, o.key = n), o.track();
  }
}
function Yr(e, t, n, r, o, s) {
  const u = su.get(e);
  if (!u) {
    Ia++;
    return;
  }
  const d = (f) => {
    f && f.trigger();
  };
  if (Wu(), t === "clear")
    u.forEach(d);
  else {
    const f = qe(e), v = f && Gu(n);
    if (f && n === "length") {
      const y = Number(r);
      u.forEach((x, k) => {
        (k === "length" || k === Ea || !Ir(k) && k >= y) && d(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && d(u.get(n)), v && d(u.get(Ea)), t) {
        case "add":
          f ? v && d(u.get("length")) : (d(u.get(Hi)), Co(e) && d(u.get(lu)));
          break;
        case "delete":
          f || (d(u.get(Hi)), Co(e) && d(u.get(lu)));
          break;
        case "set":
          Co(e) && d(u.get(Hi));
          break;
      }
  }
  Uu();
}
function go(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (fn(t, "iterate", Ea), /* @__PURE__ */ Xn(e) ? t : t.map(cr));
}
function Pl(e) {
  return fn(e = /* @__PURE__ */ dt(e), "iterate", Ea), e;
}
function wr(e, t) {
  return /* @__PURE__ */ ni(e) ? Vo(/* @__PURE__ */ Gi(e) ? cr(t) : t) : cr(t);
}
const g1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ac(this, Symbol.iterator, (e) => wr(this, e));
  },
  concat(...e) {
    return go(this).concat(
      ...e.map((t) => qe(t) ? go(t) : t)
    );
  },
  entries() {
    return Ac(this, "entries", (e) => (e[1] = wr(this, e[1]), e));
  },
  every(e, t) {
    return zr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => wr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return zr(
      this,
      "find",
      e,
      t,
      (n) => wr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return zr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zr(
      this,
      "findLast",
      e,
      t,
      (n) => wr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return zr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Cc(this, "includes", e);
  },
  indexOf(...e) {
    return Cc(this, "indexOf", e);
  },
  join(e) {
    return go(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ca(this, "pop");
  },
  push(...e) {
    return ca(this, "push", e);
  },
  reduce(e, ...t) {
    return sh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return sh(this, "reduceRight", e, t);
  },
  shift() {
    return ca(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ca(this, "splice", e);
  },
  toReversed() {
    return go(this).toReversed();
  },
  toSorted(e) {
    return go(this).toSorted(e);
  },
  toSpliced(...e) {
    return go(this).toSpliced(...e);
  },
  unshift(...e) {
    return ca(this, "unshift", e);
  },
  values() {
    return Ac(this, "values", (e) => wr(this, e));
  }
};
function Ac(e, t, n) {
  const r = Pl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ Xn(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.done || (s.value = n(s.value)), s;
  }), o;
}
const y1 = Array.prototype;
function zr(e, t, n, r, o, s) {
  const u = Pl(e), d = u !== e && !/* @__PURE__ */ Xn(e), f = u[t];
  if (f !== y1[t]) {
    const x = f.apply(e, s);
    return d ? cr(x) : x;
  }
  let v = n;
  u !== e && (d ? v = function(x, k) {
    return n.call(this, wr(e, x), k, e);
  } : n.length > 2 && (v = function(x, k) {
    return n.call(this, x, k, e);
  }));
  const y = f.call(u, v, r);
  return d && o ? o(y) : y;
}
function sh(e, t, n, r) {
  const o = Pl(e), s = o !== e && !/* @__PURE__ */ Xn(e);
  let u = n, d = !1;
  o !== e && (s ? (d = r.length === 0, u = function(v, y, x) {
    return d && (d = !1, v = wr(e, v)), n.call(this, v, wr(e, y), x, e);
  }) : n.length > 3 && (u = function(v, y, x) {
    return n.call(this, v, y, x, e);
  }));
  const f = o[t](u, ...r);
  return d ? wr(e, f) : f;
}
function Cc(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  fn(r, "iterate", Ea);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Zu(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function ca(e, t, n = []) {
  ei(), Wu();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return Uu(), ti(), r;
}
const b1 = /* @__PURE__ */ ju("__proto__,__v_isRef,__isVue"), rm = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ir)
);
function v1(e) {
  Ir(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class im {
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
      return r === (o ? s ? C1 : lm : s ? sm : am).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const u = qe(t);
    if (!o) {
      let f;
      if (u && (f = g1[n]))
        return f;
      if (n === "hasOwnProperty")
        return v1;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pn(t) ? t : r
    );
    if ((Ir(n) ? rm.has(n) : b1(n)) || (o || fn(t, "get", n), s))
      return d;
    if (/* @__PURE__ */ pn(d)) {
      const f = u && Gu(n) ? d : d.value;
      return o && mt(f) ? /* @__PURE__ */ uu(f) : f;
    }
    return mt(d) ? o ? /* @__PURE__ */ uu(d) : /* @__PURE__ */ Ko(d) : d;
  }
}
class om extends im {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    const u = qe(t) && Gu(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ ni(s);
      if (!/* @__PURE__ */ Xn(r) && !/* @__PURE__ */ ni(r) && (s = /* @__PURE__ */ dt(s), r = /* @__PURE__ */ dt(r)), !u && /* @__PURE__ */ pn(s) && !/* @__PURE__ */ pn(r))
        return v || (s.value = r), !0;
    }
    const d = u ? Number(n) < t.length : ft(t, n), f = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ pn(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (d ? kr(r, s) && Yr(t, "set", n, r) : Yr(t, "add", n, r)), f;
  }
  deleteProperty(t, n) {
    const r = ft(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Yr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ir(n) || !rm.has(n)) && fn(t, "has", n), r;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      qe(t) ? "length" : Hi
    ), Reflect.ownKeys(t);
  }
}
class _1 extends im {
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
const x1 = /* @__PURE__ */ new om(), w1 = /* @__PURE__ */ new _1(), S1 = /* @__PURE__ */ new om(!0);
const cu = (e) => e, ys = (e) => Reflect.getPrototypeOf(e);
function k1(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = /* @__PURE__ */ dt(o), u = Co(s), d = e === "entries" || e === Symbol.iterator && u, f = e === "keys" && u, v = o[e](...r), y = n ? cu : t ? Vo : cr;
    return !t && fn(
      s,
      "iterate",
      f ? lu : Hi
    ), mn(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: x, done: k } = v.next();
          return k ? { value: x, done: k } : {
            value: d ? [y(x[0]), y(x[1])] : y(x),
            done: k
          };
        }
      }
    );
  };
}
function bs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function M1(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, u = /* @__PURE__ */ dt(s), d = /* @__PURE__ */ dt(o);
      e || (kr(o, d) && fn(u, "get", o), fn(u, "get", d));
      const { has: f } = ys(u), v = t ? cu : e ? Vo : cr;
      if (f.call(u, o))
        return v(s.get(o));
      if (f.call(u, d))
        return v(s.get(d));
      s !== u && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && fn(/* @__PURE__ */ dt(o), "iterate", Hi), o.size;
    },
    has(o) {
      const s = this.__v_raw, u = /* @__PURE__ */ dt(s), d = /* @__PURE__ */ dt(o);
      return e || (kr(o, d) && fn(u, "has", o), fn(u, "has", d)), o === d ? s.has(o) : s.has(o) || s.has(d);
    },
    forEach(o, s) {
      const u = this, d = u.__v_raw, f = /* @__PURE__ */ dt(d), v = t ? cu : e ? Vo : cr;
      return !e && fn(f, "iterate", Hi), d.forEach((y, x) => o.call(s, v(y), v(x), u));
    }
  };
  return mn(
    n,
    e ? {
      add: bs("add"),
      set: bs("set"),
      delete: bs("delete"),
      clear: bs("clear")
    } : {
      add(o) {
        const s = /* @__PURE__ */ dt(this), u = ys(s), d = /* @__PURE__ */ dt(o), f = !t && !/* @__PURE__ */ Xn(o) && !/* @__PURE__ */ ni(o) ? d : o;
        return u.has.call(s, f) || kr(o, f) && u.has.call(s, o) || kr(d, f) && u.has.call(s, d) || (s.add(f), Yr(s, "add", f, f)), this;
      },
      set(o, s) {
        !t && !/* @__PURE__ */ Xn(s) && !/* @__PURE__ */ ni(s) && (s = /* @__PURE__ */ dt(s));
        const u = /* @__PURE__ */ dt(this), { has: d, get: f } = ys(u);
        let v = d.call(u, o);
        v || (o = /* @__PURE__ */ dt(o), v = d.call(u, o));
        const y = f.call(u, o);
        return u.set(o, s), v ? kr(s, y) && Yr(u, "set", o, s) : Yr(u, "add", o, s), this;
      },
      delete(o) {
        const s = /* @__PURE__ */ dt(this), { has: u, get: d } = ys(s);
        let f = u.call(s, o);
        f || (o = /* @__PURE__ */ dt(o), f = u.call(s, o)), d && d.call(s, o);
        const v = s.delete(o);
        return f && Yr(s, "delete", o, void 0), v;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), s = o.size !== 0, u = o.clear();
        return s && Yr(
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
function qu(e, t) {
  const n = M1(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ft(n, o) && o in r ? n : r,
    o,
    s
  );
}
const N1 = {
  get: /* @__PURE__ */ qu(!1, !1)
}, P1 = {
  get: /* @__PURE__ */ qu(!1, !0)
}, A1 = {
  get: /* @__PURE__ */ qu(!0, !1)
};
const am = /* @__PURE__ */ new WeakMap(), sm = /* @__PURE__ */ new WeakMap(), lm = /* @__PURE__ */ new WeakMap(), C1 = /* @__PURE__ */ new WeakMap();
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
function Ko(e) {
  return /* @__PURE__ */ ni(e) ? e : Ju(
    e,
    !1,
    x1,
    N1,
    am
  );
}
// @__NO_SIDE_EFFECTS__
function O1(e) {
  return Ju(
    e,
    !1,
    S1,
    P1,
    sm
  );
}
// @__NO_SIDE_EFFECTS__
function uu(e) {
  return Ju(
    e,
    !0,
    w1,
    A1,
    lm
  );
}
function Ju(e, t, n, r, o) {
  if (!mt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = E1(e);
  if (s === 0)
    return e;
  const u = o.get(e);
  if (u)
    return u;
  const d = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Gi(e) {
  return /* @__PURE__ */ ni(e) ? /* @__PURE__ */ Gi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Xn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function T1(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Bp(e, "__v_skip", !0), e;
}
const cr = (e) => mt(e) ? /* @__PURE__ */ Ko(e) : e, Vo = (e) => mt(e) ? /* @__PURE__ */ uu(e) : e;
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return F1(e, !1);
}
function F1(e, t) {
  return /* @__PURE__ */ pn(e) ? e : new D1(e, t);
}
class D1 {
  constructor(t, n) {
    this.dep = new Xu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : cr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Xn(t) || /* @__PURE__ */ ni(t);
    t = r ? t : /* @__PURE__ */ dt(t), kr(t, n) && (this._rawValue = t, this._value = r ? t : cr(t), this.dep.trigger());
  }
}
function et(e) {
  return /* @__PURE__ */ pn(e) ? e.value : e;
}
const L1 = {
  get: (e, t, n) => t === "__v_raw" ? e : et(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ pn(o) && !/* @__PURE__ */ pn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function cm(e) {
  return /* @__PURE__ */ Gi(e) ? e : new Proxy(e, L1);
}
class R1 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ia - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Jp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return em(this), t && (t.version = this.dep.version), this._value;
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
const vs = {}, Zs = /* @__PURE__ */ new WeakMap();
let Li;
function V1(e, t = !1, n = Li) {
  if (n) {
    let r = Zs.get(n);
    r || Zs.set(n, r = []), r.push(e);
  }
}
function z1(e, t, n = _t) {
  const { immediate: r, deep: o, once: s, scheduler: u, augmentJob: d, call: f } = n, v = (E) => o ? E : /* @__PURE__ */ Xn(E) || o === !1 || o === 0 ? Xr(E, 1) : Xr(E);
  let y, x, k, P, S = !1, _ = !1;
  if (/* @__PURE__ */ pn(e) ? (x = () => e.value, S = /* @__PURE__ */ Xn(e)) : /* @__PURE__ */ Gi(e) ? (x = () => v(e), S = !0) : qe(e) ? (_ = !0, S = e.some((E) => /* @__PURE__ */ Gi(E) || /* @__PURE__ */ Xn(E)), x = () => e.map((E) => {
    if (/* @__PURE__ */ pn(E))
      return E.value;
    if (/* @__PURE__ */ Gi(E))
      return v(E);
    if (Je(E))
      return f ? f(E, 2) : E();
  })) : Je(e) ? t ? x = f ? () => f(e, 2) : e : x = () => {
    if (k) {
      ei();
      try {
        k();
      } finally {
        ti();
      }
    }
    const E = Li;
    Li = y;
    try {
      return f ? f(e, 3, [P]) : e(P);
    } finally {
      Li = E;
    }
  } : x = Cr, t && o) {
    const E = x, $ = o === !0 ? 1 / 0 : o;
    x = () => Xr(E(), $);
  }
  const F = h1(), V = () => {
    y.stop(), F && F.active && Hu(F.effects, y);
  };
  if (s && t) {
    const E = t;
    t = (...$) => {
      E(...$), V();
    };
  }
  let U = _ ? new Array(e.length).fill(vs) : vs;
  const N = (E) => {
    if (!(!(y.flags & 1) || !y.dirty && !E))
      if (t) {
        const $ = y.run();
        if (o || S || (_ ? $.some((D, W) => kr(D, U[W])) : kr($, U))) {
          k && k();
          const D = Li;
          Li = y;
          try {
            const W = [
              $,
              // pass undefined as the old value when it's changed for the first time
              U === vs ? void 0 : _ && U[0] === vs ? [] : U,
              P
            ];
            U = $, f ? f(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            Li = D;
          }
        }
      } else
        y.run();
  };
  return d && d(N), y = new Xp(x), y.scheduler = u ? () => u(N, !1) : N, P = (E) => V1(E, !1, y), k = y.onStop = () => {
    const E = Zs.get(y);
    if (E) {
      if (f)
        f(E, 4);
      else
        for (const $ of E) $();
      Zs.delete(y);
    }
  }, t ? r ? N(!0) : U = y.run() : u ? u(N.bind(null, !0), !0) : y.run(), V.pause = y.pause.bind(y), V.resume = y.resume.bind(y), V.stop = V, V;
}
function Xr(e, t = 1 / 0, n) {
  if (t <= 0 || !mt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pn(e))
    Xr(e.value, t, n);
  else if (qe(e))
    for (let r = 0; r < e.length; r++)
      Xr(e[r], t, n);
  else if (jp(e) || Co(e))
    e.forEach((r) => {
      Xr(r, t, n);
    });
  else if (Kp(e)) {
    for (const r in e)
      Xr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Xr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ba(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Al(o, t, n);
  }
}
function Er(e, t, n, r) {
  if (Je(e)) {
    const o = Ba(e, t, n, r);
    return o && Hp(o) && o.catch((s) => {
      Al(s, t, n);
    }), o;
  }
  if (qe(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Er(e[s], t, n, r));
    return o;
  }
}
function Al(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = t && t.appContext.config || _t;
  if (t) {
    let d = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const y = d.ec;
      if (y) {
        for (let x = 0; x < y.length; x++)
          if (y[x](e, f, v) === !1)
            return;
      }
      d = d.parent;
    }
    if (s) {
      ei(), Ba(s, null, 10, [
        e,
        f,
        v
      ]), ti();
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
const wn = [];
let xr = -1;
const Io = [];
let bi = null, wo = 0;
const um = /* @__PURE__ */ Promise.resolve();
let Qs = null;
function Qu(e) {
  const t = Qs || um;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function H1(e) {
  let t = xr + 1, n = wn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = wn[r], s = Oa(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ed(e) {
  if (!(e.flags & 1)) {
    const t = Oa(e), n = wn[wn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Oa(n) ? wn.push(e) : wn.splice(H1(t), 0, e), e.flags |= 1, dm();
  }
}
function dm() {
  Qs || (Qs = um.then(hm));
}
function G1(e) {
  qe(e) ? Io.push(...e) : bi && e.id === -1 ? bi.splice(wo + 1, 0, e) : e.flags & 1 || (Io.push(e), e.flags |= 1), dm();
}
function lh(e, t, n = xr + 1) {
  for (; n < wn.length; n++) {
    const r = wn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      wn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function fm(e) {
  if (Io.length) {
    const t = [...new Set(Io)].sort(
      (n, r) => Oa(n) - Oa(r)
    );
    if (Io.length = 0, bi) {
      bi.push(...t);
      return;
    }
    for (bi = t, wo = 0; wo < bi.length; wo++) {
      const n = bi[wo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    bi = null, wo = 0;
  }
}
const Oa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hm(e) {
  try {
    for (xr = 0; xr < wn.length; xr++) {
      const t = wn[xr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ba(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xr < wn.length; xr++) {
      const t = wn[xr];
      t && (t.flags &= -2);
    }
    xr = -1, wn.length = 0, fm(), Qs = null, (wn.length || Io.length) && hm();
  }
}
let Vn = null, pm = null;
function el(e) {
  const t = Vn;
  return Vn = e, pm = e && e.type.__scopeId || null, t;
}
function mm(e, t = Vn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && _h(-1);
    const s = el(t);
    let u;
    try {
      u = e(...o);
    } finally {
      el(s), r._d && _h(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Qr(e, t) {
  if (Vn === null)
    return e;
  const n = Tl(Vn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, u, d, f = _t] = t[o];
    s && (Je(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Xr(u), r.push({
      dir: s,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: d,
      modifiers: f
    }));
  }
  return e;
}
function Ii(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let u = 0; u < o.length; u++) {
    const d = o[u];
    s && (d.oldValue = s[u].value);
    let f = d.dir[r];
    f && (ei(), Er(f, n, 8, [
      e.el,
      d,
      e,
      t
    ]), ti());
  }
}
function K1(e, t) {
  if (hn) {
    let n = hn.provides;
    const r = hn.parent && hn.parent.provides;
    r === n && (n = hn.provides = Object.create(r)), n[e] = t;
  }
}
function Rs(e, t, n = !1) {
  const r = Hv();
  if (r || Eo) {
    let o = Eo ? Eo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Je(t) ? t.call(r && r.proxy) : t;
  }
}
const B1 = /* @__PURE__ */ Symbol.for("v-scx"), W1 = () => Rs(B1);
function Ki(e, t, n) {
  return gm(e, t, n);
}
function gm(e, t, n = _t) {
  const { immediate: r, deep: o, flush: s, once: u } = n, d = mn({}, n), f = t && r || !t && s !== "post";
  let v;
  if (Fa) {
    if (s === "sync") {
      const P = W1();
      v = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!f) {
      const P = () => {
      };
      return P.stop = Cr, P.resume = Cr, P.pause = Cr, P;
    }
  }
  const y = hn;
  d.call = (P, S, _) => Er(P, y, S, _);
  let x = !1;
  s === "post" ? d.scheduler = (P) => {
    In(P, y && y.suspense);
  } : s !== "sync" && (x = !0, d.scheduler = (P, S) => {
    S ? P() : ed(P);
  }), d.augmentJob = (P) => {
    t && (P.flags |= 4), x && (P.flags |= 2, y && (P.id = y.uid, P.i = y));
  };
  const k = z1(e, t, d);
  return Fa && (v ? v.push(k) : f && k()), k;
}
function U1(e, t, n) {
  const r = this.proxy, o = Vt(e) ? e.includes(".") ? ym(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Je(t) ? s = t : (s = t.handler, n = t);
  const u = Ua(this), d = gm(o, s.bind(r), n);
  return u(), d;
}
function ym(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Y1 = /* @__PURE__ */ Symbol("_vte"), X1 = (e) => e.__isTeleport, q1 = /* @__PURE__ */ Symbol("_leaveCb");
function td(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, td(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function bm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ch(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const tl = /* @__PURE__ */ new WeakMap();
function Na(e, t, n, r, o = !1) {
  if (qe(e)) {
    e.forEach(
      (_, F) => Na(
        _,
        t && (qe(t) ? t[F] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Pa(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Na(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Tl(r.component) : r.el, u = o ? null : s, { i: d, r: f } = e, v = t && t.r, y = d.refs === _t ? d.refs = {} : d.refs, x = d.setupState, k = /* @__PURE__ */ dt(x), P = x === _t ? zp : (_) => ch(y, _) ? !1 : ft(k, _), S = (_, F) => !(F && ch(y, F));
  if (v != null && v !== f) {
    if (uh(t), Vt(v))
      y[v] = null, P(v) && (x[v] = null);
    else if (/* @__PURE__ */ pn(v)) {
      const _ = t;
      S(v, _.k) && (v.value = null), _.k && (y[_.k] = null);
    }
  }
  if (Je(f))
    Ba(f, d, 12, [u, y]);
  else {
    const _ = Vt(f), F = /* @__PURE__ */ pn(f);
    if (_ || F) {
      const V = () => {
        if (e.f) {
          const U = _ ? P(f) ? x[f] : y[f] : S() || !e.k ? f.value : y[e.k];
          if (o)
            qe(U) && Hu(U, s);
          else if (qe(U))
            U.includes(s) || U.push(s);
          else if (_)
            y[f] = [s], P(f) && (x[f] = y[f]);
          else {
            const N = [s];
            S(f, e.k) && (f.value = N), e.k && (y[e.k] = N);
          }
        } else _ ? (y[f] = u, P(f) && (x[f] = u)) : F && (S(f, e.k) && (f.value = u), e.k && (y[e.k] = u));
      };
      if (u) {
        const U = () => {
          V(), tl.delete(e);
        };
        U.id = -1, tl.set(e, U), In(U, n);
      } else
        uh(e), V();
    }
  }
}
function uh(e) {
  const t = tl.get(e);
  t && (t.flags |= 8, tl.delete(e));
}
Nl().requestIdleCallback;
Nl().cancelIdleCallback;
const Pa = (e) => !!e.type.__asyncLoader, vm = (e) => e.type.__isKeepAlive;
function J1(e, t) {
  _m(e, "a", t);
}
function Z1(e, t) {
  _m(e, "da", t);
}
function _m(e, t, n = hn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Cl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      vm(o.parent.vnode) && Q1(r, t, n, o), o = o.parent;
  }
}
function Q1(e, t, n, r) {
  const o = Cl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  xm(() => {
    Hu(r[t], o);
  }, n);
}
function Cl(e, t, n = hn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...u) => {
      ei();
      const d = Ua(n), f = Er(t, n, e, u);
      return d(), ti(), f;
    });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const ii = (e) => (t, n = hn) => {
  (!Fa || e === "sp") && Cl(e, (...r) => t(...r), n);
}, ev = ii("bm"), Il = ii("m"), tv = ii(
  "bu"
), nv = ii("u"), Wa = ii(
  "bum"
), xm = ii("um"), rv = ii(
  "sp"
), iv = ii("rtg"), ov = ii("rtc");
function av(e, t = hn) {
  Cl("ec", e, t);
}
const sv = "components", wm = /* @__PURE__ */ Symbol.for("v-ndc");
function lv(e) {
  return Vt(e) ? cv(sv, e, !1) || e : e || wm;
}
function cv(e, t, n = !0, r = !1) {
  const o = Vn || hn;
  if (o) {
    const s = o.type;
    {
      const d = Uv(
        s,
        !1
      );
      if (d && (d === t || d === Sn(t) || d === Ml(Sn(t))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      dh(o[e] || s[e], t) || // global registration
      dh(o.appContext[e], t)
    );
    return !u && r ? s : u;
  }
}
function dh(e, t) {
  return e && (e[t] || e[Sn(t)] || e[Ml(Sn(t))]);
}
function xt(e, t, n, r) {
  let o;
  const s = n, u = qe(e);
  if (u || Vt(e)) {
    const d = u && /* @__PURE__ */ Gi(e);
    let f = !1, v = !1;
    d && (f = !/* @__PURE__ */ Xn(e), v = /* @__PURE__ */ ni(e), e = Pl(e)), o = new Array(e.length);
    for (let y = 0, x = e.length; y < x; y++)
      o[y] = t(
        f ? v ? Vo(cr(e[y])) : cr(e[y]) : e[y],
        y,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let d = 0; d < e; d++)
      o[d] = t(d + 1, d, void 0, s);
  } else if (mt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (d, f) => t(d, f, void 0, s)
      );
    else {
      const d = Object.keys(e);
      o = new Array(d.length);
      for (let f = 0, v = d.length; f < v; f++) {
        const y = d[f];
        o[f] = t(e[y], y, f, s);
      }
    }
  else
    o = [];
  return o;
}
const du = (e) => e ? Gm(e) ? Tl(e) : du(e.parent) : null, Aa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => du(e.parent),
    $root: (e) => du(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => km(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ed(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qu.bind(e.proxy)),
    $watch: (e) => U1.bind(e)
  })
), Ic = (e, t) => e !== _t && !e.__isScriptSetup && ft(e, t), uv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: u, type: d, appContext: f } = e;
    if (t[0] !== "$") {
      const k = u[t];
      if (k !== void 0)
        switch (k) {
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
        if (Ic(r, t))
          return u[t] = 1, r[t];
        if (o !== _t && ft(o, t))
          return u[t] = 2, o[t];
        if (ft(s, t))
          return u[t] = 3, s[t];
        if (n !== _t && ft(n, t))
          return u[t] = 4, n[t];
        fu && (u[t] = 0);
      }
    }
    const v = Aa[t];
    let y, x;
    if (v)
      return t === "$attrs" && fn(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = d.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== _t && ft(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = f.config.globalProperties, ft(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Ic(o, t) ? (o[t] = n, !0) : r !== _t && ft(r, t) ? (r[t] = n, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: s, type: u }
  }, d) {
    let f;
    return !!(n[d] || e !== _t && d[0] !== "$" && ft(e, d) || Ic(t, d) || ft(s, d) || ft(r, d) || ft(Aa, d) || ft(o.config.globalProperties, d) || (f = u.__cssModules) && f[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function fh(e) {
  return qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let fu = !0;
function dv(e) {
  const t = km(e), n = e.proxy, r = e.ctx;
  fu = !1, t.beforeCreate && hh(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: u,
    watch: d,
    provide: f,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: x,
    mounted: k,
    beforeUpdate: P,
    updated: S,
    activated: _,
    deactivated: F,
    beforeDestroy: V,
    beforeUnmount: U,
    destroyed: N,
    unmounted: E,
    render: $,
    renderTracked: D,
    renderTriggered: W,
    errorCaptured: z,
    serverPrefetch: q,
    // public API
    expose: T,
    inheritAttrs: O,
    // assets
    components: le,
    directives: J,
    filters: X
  } = t;
  if (v && fv(v, r, null), u)
    for (const se in u) {
      const I = u[se];
      Je(I) && (r[se] = I.bind(n));
    }
  if (o) {
    const se = o.call(n, n);
    mt(se) && (e.data = /* @__PURE__ */ Ko(se));
  }
  if (fu = !0, s)
    for (const se in s) {
      const I = s[se], $e = Je(I) ? I.bind(n, n) : Je(I.get) ? I.get.bind(n, n) : Cr, B = !Je(I) && Je(I.set) ? I.set.bind(n) : Cr, He = ct({
        get: $e,
        set: B
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (rt) => He.value = rt
      });
    }
  if (d)
    for (const se in d)
      Sm(d[se], r, n, se);
  if (f) {
    const se = Je(f) ? f.call(n) : f;
    Reflect.ownKeys(se).forEach((I) => {
      K1(I, se[I]);
    });
  }
  y && hh(y, e, "c");
  function Ae(se, I) {
    qe(I) ? I.forEach(($e) => se($e.bind(n))) : I && se(I.bind(n));
  }
  if (Ae(ev, x), Ae(Il, k), Ae(tv, P), Ae(nv, S), Ae(J1, _), Ae(Z1, F), Ae(av, z), Ae(ov, D), Ae(iv, W), Ae(Wa, U), Ae(xm, E), Ae(rv, q), qe(T))
    if (T.length) {
      const se = e.exposed || (e.exposed = {});
      T.forEach((I) => {
        Object.defineProperty(se, I, {
          get: () => n[I],
          set: ($e) => n[I] = $e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === Cr && (e.render = $), O != null && (e.inheritAttrs = O), le && (e.components = le), J && (e.directives = J), q && bm(e);
}
function fv(e, t, n = Cr) {
  qe(e) && (e = hu(e));
  for (const r in e) {
    const o = e[r];
    let s;
    mt(o) ? "default" in o ? s = Rs(
      o.from || r,
      o.default,
      !0
    ) : s = Rs(o.from || r) : s = Rs(o), /* @__PURE__ */ pn(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : t[r] = s;
  }
}
function hh(e, t, n) {
  Er(
    qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Sm(e, t, n, r) {
  let o = r.includes(".") ? ym(n, r) : () => n[r];
  if (Vt(e)) {
    const s = t[e];
    Je(s) && Ki(o, s);
  } else if (Je(e))
    Ki(o, e.bind(n));
  else if (mt(e))
    if (qe(e))
      e.forEach((s) => Sm(s, t, n, r));
    else {
      const s = Je(e.handler) ? e.handler.bind(n) : t[e.handler];
      Je(s) && Ki(o, s, e);
    }
}
function km(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = e.appContext, d = s.get(t);
  let f;
  return d ? f = d : !o.length && !n && !r ? f = t : (f = {}, o.length && o.forEach(
    (v) => nl(f, v, u, !0)
  ), nl(f, t, u)), mt(t) && s.set(t, f), f;
}
function nl(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && nl(e, s, n, !0), o && o.forEach(
    (u) => nl(e, u, n, !0)
  );
  for (const u in t)
    if (!(r && u === "expose")) {
      const d = hv[u] || n && n[u];
      e[u] = d ? d(e[u], t[u]) : t[u];
    }
  return e;
}
const hv = {
  data: ph,
  props: mh,
  emits: mh,
  // objects
  methods: ya,
  computed: ya,
  // lifecycle
  beforeCreate: xn,
  created: xn,
  beforeMount: xn,
  mounted: xn,
  beforeUpdate: xn,
  updated: xn,
  beforeDestroy: xn,
  beforeUnmount: xn,
  destroyed: xn,
  unmounted: xn,
  activated: xn,
  deactivated: xn,
  errorCaptured: xn,
  serverPrefetch: xn,
  // assets
  components: ya,
  directives: ya,
  // watch
  watch: mv,
  // provide / inject
  provide: ph,
  inject: pv
};
function ph(e, t) {
  return t ? e ? function() {
    return mn(
      Je(e) ? e.call(this, this) : e,
      Je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pv(e, t) {
  return ya(hu(e), hu(t));
}
function hu(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ya(e, t) {
  return e ? mn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mh(e, t) {
  return e ? qe(e) && qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mn(
    /* @__PURE__ */ Object.create(null),
    fh(e),
    fh(t ?? {})
  ) : t;
}
function mv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = mn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = xn(e[r], t[r]);
  return n;
}
function Mm() {
  return {
    app: null,
    config: {
      isNativeTag: zp,
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
    Je(r) || (r = mn({}, r)), o != null && !mt(o) && (o = null);
    const s = Mm(), u = /* @__PURE__ */ new WeakSet(), d = [];
    let f = !1;
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
      mount(y, x, k) {
        if (!f) {
          const P = v._ceVNode || Te(r, o);
          return P.appContext = s, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(P, y, k), f = !0, v._container = y, y.__vue_app__ = v, Tl(P.component);
        }
      },
      onUnmount(y) {
        d.push(y);
      },
      unmount() {
        f && (Er(
          d,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, x) {
        return s.provides[y] = x, v;
      },
      runWithContext(y) {
        const x = Eo;
        Eo = v;
        try {
          return y();
        } finally {
          Eo = x;
        }
      }
    };
    return v;
  };
}
let Eo = null;
const bv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Sn(t)}Modifiers`] || e[`${Ji(t)}Modifiers`];
function vv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let o = n;
  const s = t.startsWith("update:"), u = s && bv(r, t.slice(7));
  u && (u.trim && (o = n.map((y) => Vt(y) ? y.trim() : y)), u.number && (o = n.map(Ku)));
  let d, f = r[d = Mc(t)] || // also try camelCase event handler (#2249)
  r[d = Mc(Sn(t))];
  !f && s && (f = r[d = Mc(Ji(t))]), f && Er(
    f,
    e,
    6,
    o
  );
  const v = r[d + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Er(
      v,
      e,
      6,
      o
    );
  }
}
const _v = /* @__PURE__ */ new WeakMap();
function Nm(e, t, n = !1) {
  const r = n ? _v : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let u = {}, d = !1;
  if (!Je(e)) {
    const f = (v) => {
      const y = Nm(v, t, !0);
      y && (d = !0, mn(u, y));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !d ? (mt(e) && r.set(e, null), null) : (qe(s) ? s.forEach((f) => u[f] = null) : mn(u, s), mt(e) && r.set(e, u), u);
}
function El(e, t) {
  return !e || !wl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Ji(t)) || ft(e, t));
}
function gh(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: u,
    attrs: d,
    emit: f,
    render: v,
    renderCache: y,
    props: x,
    data: k,
    setupState: P,
    ctx: S,
    inheritAttrs: _
  } = e, F = el(e);
  let V, U;
  try {
    if (n.shapeFlag & 4) {
      const E = o || r, $ = E;
      V = Sr(
        v.call(
          $,
          E,
          y,
          x,
          P,
          k,
          S
        )
      ), U = d;
    } else {
      const E = t;
      V = Sr(
        E.length > 1 ? E(
          x,
          { attrs: d, slots: u, emit: f }
        ) : E(
          x,
          null
        )
      ), U = t.props ? d : xv(d);
    }
  } catch (E) {
    Ca.length = 0, Al(E, e, 1), V = Te(xi);
  }
  let N = V;
  if (U && _ !== !1) {
    const E = Object.keys(U), { shapeFlag: $ } = N;
    E.length && $ & 7 && (s && E.some(Sl) && (U = wv(
      U,
      s
    )), N = zo(N, U, !1, !0));
  }
  return n.dirs && (N = zo(N, null, !1, !0), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && td(N, n.transition), V = N, el(F), V;
}
const xv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || wl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Sv(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: u, children: d, patchFlag: f } = t, v = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? yh(r, u, v) : !!u;
    if (f & 8) {
      const y = t.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        const k = y[x];
        if (Pm(u, r, k) && !El(v, k))
          return !0;
      }
    }
  } else
    return (o || d) && (!d || !d.$stable) ? !0 : r === u ? !1 : r ? u ? yh(r, u, v) : !0 : !!u;
  return !1;
}
function yh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (Pm(t, e, s) && !El(n, s))
      return !0;
  }
  return !1;
}
function Pm(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && mt(r) && mt(o) ? !Bu(r, o) : r !== o;
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
const Am = {}, Cm = () => Object.create(Am), Im = (e) => Object.getPrototypeOf(e) === Am;
function Mv(e, t, n, r = !1) {
  const o = {}, s = Cm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Em(e, t, o, s);
  for (const u in e.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ O1(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Nv(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: u }
  } = e, d = /* @__PURE__ */ dt(o), [f] = e.propsOptions;
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
        let k = y[x];
        if (El(e.emitsOptions, k))
          continue;
        const P = t[k];
        if (f)
          if (ft(s, k))
            P !== s[k] && (s[k] = P, v = !0);
          else {
            const S = Sn(k);
            o[S] = pu(
              f,
              d,
              S,
              P,
              e,
              !1
            );
          }
        else
          P !== s[k] && (s[k] = P, v = !0);
      }
    }
  } else {
    Em(e, t, o, s) && (v = !0);
    let y;
    for (const x in d)
      (!t || // for camelCase
      !ft(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ji(x)) === x || !ft(t, y))) && (f ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[x] = pu(
        f,
        d,
        x,
        void 0,
        e,
        !0
      )) : delete o[x]);
    if (s !== d)
      for (const x in s)
        (!t || !ft(t, x)) && (delete s[x], v = !0);
  }
  v && Yr(e.attrs, "set", "");
}
function Em(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let u = !1, d;
  if (t)
    for (let f in t) {
      if (Sa(f))
        continue;
      const v = t[f];
      let y;
      o && ft(o, y = Sn(f)) ? !s || !s.includes(y) ? n[y] = v : (d || (d = {}))[y] = v : El(e.emitsOptions, f) || (!(f in r) || v !== r[f]) && (r[f] = v, u = !0);
    }
  if (s) {
    const f = /* @__PURE__ */ dt(n), v = d || _t;
    for (let y = 0; y < s.length; y++) {
      const x = s[y];
      n[x] = pu(
        o,
        f,
        x,
        v[x],
        e,
        !ft(v, x)
      );
    }
  }
  return u;
}
function pu(e, t, n, r, o, s) {
  const u = e[n];
  if (u != null) {
    const d = ft(u, "default");
    if (d && r === void 0) {
      const f = u.default;
      if (u.type !== Function && !u.skipFactory && Je(f)) {
        const { propsDefaults: v } = o;
        if (n in v)
          r = v[n];
        else {
          const y = Ua(o);
          r = v[n] = f.call(
            null,
            t
          ), y();
        }
      } else
        r = f;
      o.ce && o.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !d ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ji(n)) && (r = !0));
  }
  return r;
}
const Pv = /* @__PURE__ */ new WeakMap();
function Om(e, t, n = !1) {
  const r = n ? Pv : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, u = {}, d = [];
  let f = !1;
  if (!Je(e)) {
    const y = (x) => {
      f = !0;
      const [k, P] = Om(x, t, !0);
      mn(u, k), P && d.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!s && !f)
    return mt(e) && r.set(e, Ao), Ao;
  if (qe(s))
    for (let y = 0; y < s.length; y++) {
      const x = Sn(s[y]);
      bh(x) && (u[x] = _t);
    }
  else if (s)
    for (const y in s) {
      const x = Sn(y);
      if (bh(x)) {
        const k = s[y], P = u[x] = qe(k) || Je(k) ? { type: k } : mn({}, k), S = P.type;
        let _ = !1, F = !0;
        if (qe(S))
          for (let V = 0; V < S.length; ++V) {
            const U = S[V], N = Je(U) && U.name;
            if (N === "Boolean") {
              _ = !0;
              break;
            } else N === "String" && (F = !1);
          }
        else
          _ = Je(S) && S.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = _, P[
          1
          /* shouldCastTrue */
        ] = F, (_ || ft(P, "default")) && d.push(x);
      }
    }
  const v = [u, d];
  return mt(e) && r.set(e, v), v;
}
function bh(e) {
  return e[0] !== "$" && !Sa(e);
}
const nd = (e) => e === "_" || e === "_ctx" || e === "$stable", rd = (e) => qe(e) ? e.map(Sr) : [Sr(e)], Av = (e, t, n) => {
  if (t._n)
    return t;
  const r = mm((...o) => rd(t(...o)), n);
  return r._c = !1, r;
}, Tm = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (nd(o)) continue;
    const s = e[o];
    if (Je(s))
      t[o] = Av(o, s, r);
    else if (s != null) {
      const u = rd(s);
      t[o] = () => u;
    }
  }
}, Fm = (e, t) => {
  const n = rd(t);
  e.slots.default = () => n;
}, Dm = (e, t, n) => {
  for (const r in t)
    (n || !nd(r)) && (e[r] = t[r]);
}, Cv = (e, t, n) => {
  const r = e.slots = Cm();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Dm(r, t, n), n && Bp(r, "_", o, !0)) : Tm(t, r);
  } else t && Fm(e, t);
}, Iv = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, u = _t;
  if (r.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? s = !1 : Dm(o, t, n) : (s = !t.$stable, Tm(t, o)), u = t;
  } else t && (Fm(e, t), u = { default: 1 });
  if (s)
    for (const d in o)
      !nd(d) && u[d] == null && delete o[d];
}, In = Dv;
function Ev(e) {
  return Ov(e);
}
function Ov(e, t) {
  const n = Nl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: u,
    createText: d,
    createComment: f,
    setText: v,
    setElementText: y,
    parentNode: x,
    nextSibling: k,
    setScopeId: P = Cr,
    insertStaticContent: S
  } = e, _ = (R, j, te, ue = null, fe = null, he = null, _e = void 0, Ne = null, ke = !!j.dynamicChildren) => {
    if (R === j)
      return;
    R && !ua(R, j) && (ue = Tn(R), rt(R, fe, he, !0), R = null), j.patchFlag === -2 && (ke = !1, j.dynamicChildren = null);
    const { type: ye, ref: Le, shapeFlag: Ie } = j;
    switch (ye) {
      case Ol:
        F(R, j, te, ue);
        break;
      case xi:
        V(R, j, te, ue);
        break;
      case Oc:
        R == null && U(j, te, ue, _e);
        break;
      case Be:
        le(
          R,
          j,
          te,
          ue,
          fe,
          he,
          _e,
          Ne,
          ke
        );
        break;
      default:
        Ie & 1 ? $(
          R,
          j,
          te,
          ue,
          fe,
          he,
          _e,
          Ne,
          ke
        ) : Ie & 6 ? J(
          R,
          j,
          te,
          ue,
          fe,
          he,
          _e,
          Ne,
          ke
        ) : (Ie & 64 || Ie & 128) && ye.process(
          R,
          j,
          te,
          ue,
          fe,
          he,
          _e,
          Ne,
          ke,
          Mn
        );
    }
    Le != null && fe ? Na(Le, R && R.ref, he, j || R, !j) : Le == null && R && R.ref != null && Na(R.ref, null, he, R, !0);
  }, F = (R, j, te, ue) => {
    if (R == null)
      r(
        j.el = d(j.children),
        te,
        ue
      );
    else {
      const fe = j.el = R.el;
      j.children !== R.children && v(fe, j.children);
    }
  }, V = (R, j, te, ue) => {
    R == null ? r(
      j.el = f(j.children || ""),
      te,
      ue
    ) : j.el = R.el;
  }, U = (R, j, te, ue) => {
    [R.el, R.anchor] = S(
      R.children,
      j,
      te,
      ue,
      R.el,
      R.anchor
    );
  }, N = ({ el: R, anchor: j }, te, ue) => {
    let fe;
    for (; R && R !== j; )
      fe = k(R), r(R, te, ue), R = fe;
    r(j, te, ue);
  }, E = ({ el: R, anchor: j }) => {
    let te;
    for (; R && R !== j; )
      te = k(R), o(R), R = te;
    o(j);
  }, $ = (R, j, te, ue, fe, he, _e, Ne, ke) => {
    if (j.type === "svg" ? _e = "svg" : j.type === "math" && (_e = "mathml"), R == null)
      D(
        j,
        te,
        ue,
        fe,
        he,
        _e,
        Ne,
        ke
      );
    else {
      const ye = R.el && R.el._isVueCE ? R.el : null;
      try {
        ye && ye._beginPatch(), q(
          R,
          j,
          fe,
          he,
          _e,
          Ne,
          ke
        );
      } finally {
        ye && ye._endPatch();
      }
    }
  }, D = (R, j, te, ue, fe, he, _e, Ne) => {
    let ke, ye;
    const { props: Le, shapeFlag: Ie, transition: De, dirs: p } = R;
    if (ke = R.el = u(
      R.type,
      he,
      Le && Le.is,
      Le
    ), Ie & 8 ? y(ke, R.children) : Ie & 16 && z(
      R.children,
      ke,
      null,
      ue,
      fe,
      Ec(R, he),
      _e,
      Ne
    ), p && Ii(R, null, ue, "created"), W(ke, R, R.scopeId, _e, ue), Le) {
      for (const Ue in Le)
        Ue !== "value" && !Sa(Ue) && s(ke, Ue, null, Le[Ue], he, ue);
      "value" in Le && s(ke, "value", null, Le.value, he), (ye = Le.onVnodeBeforeMount) && yr(ye, ue, R);
    }
    p && Ii(R, null, ue, "beforeMount");
    const Me = Tv(fe, De);
    Me && De.beforeEnter(ke), r(ke, j, te), ((ye = Le && Le.onVnodeMounted) || Me || p) && In(() => {
      try {
        ye && yr(ye, ue, R), Me && De.enter(ke), p && Ii(R, null, ue, "mounted");
      } finally {
      }
    }, fe);
  }, W = (R, j, te, ue, fe) => {
    if (te && P(R, te), ue)
      for (let he = 0; he < ue.length; he++)
        P(R, ue[he]);
    if (fe) {
      let he = fe.subTree;
      if (j === he || Vm(he.type) && (he.ssContent === j || he.ssFallback === j)) {
        const _e = fe.vnode;
        W(
          R,
          _e,
          _e.scopeId,
          _e.slotScopeIds,
          fe.parent
        );
      }
    }
  }, z = (R, j, te, ue, fe, he, _e, Ne, ke = 0) => {
    for (let ye = ke; ye < R.length; ye++) {
      const Le = R[ye] = Ne ? Ur(R[ye]) : Sr(R[ye]);
      _(
        null,
        Le,
        j,
        te,
        ue,
        fe,
        he,
        _e,
        Ne
      );
    }
  }, q = (R, j, te, ue, fe, he, _e) => {
    const Ne = j.el = R.el;
    let { patchFlag: ke, dynamicChildren: ye, dirs: Le } = j;
    ke |= R.patchFlag & 16;
    const Ie = R.props || _t, De = j.props || _t;
    let p;
    if (te && Ei(te, !1), (p = De.onVnodeBeforeUpdate) && yr(p, te, j, R), Le && Ii(j, R, te, "beforeUpdate"), te && Ei(te, !0), (Ie.innerHTML && De.innerHTML == null || Ie.textContent && De.textContent == null) && y(Ne, ""), ye ? T(
      R.dynamicChildren,
      ye,
      Ne,
      te,
      ue,
      Ec(j, fe),
      he
    ) : _e || I(
      R,
      j,
      Ne,
      null,
      te,
      ue,
      Ec(j, fe),
      he,
      !1
    ), ke > 0) {
      if (ke & 16)
        O(Ne, Ie, De, te, fe);
      else if (ke & 2 && Ie.class !== De.class && s(Ne, "class", null, De.class, fe), ke & 4 && s(Ne, "style", Ie.style, De.style, fe), ke & 8) {
        const Me = j.dynamicProps;
        for (let Ue = 0; Ue < Me.length; Ue++) {
          const ut = Me[Ue], yt = Ie[ut], Nt = De[ut];
          (Nt !== yt || ut === "value") && s(Ne, ut, yt, Nt, fe, te);
        }
      }
      ke & 1 && R.children !== j.children && y(Ne, j.children);
    } else !_e && ye == null && O(Ne, Ie, De, te, fe);
    ((p = De.onVnodeUpdated) || Le) && In(() => {
      p && yr(p, te, j, R), Le && Ii(j, R, te, "updated");
    }, ue);
  }, T = (R, j, te, ue, fe, he, _e) => {
    for (let Ne = 0; Ne < j.length; Ne++) {
      const ke = R[Ne], ye = j[Ne], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ke.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ke.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ua(ke, ye) || // - In the case of a component, it could contain anything.
        ke.shapeFlag & 198) ? x(ke.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      _(
        ke,
        ye,
        Le,
        null,
        ue,
        fe,
        he,
        _e,
        !0
      );
    }
  }, O = (R, j, te, ue, fe) => {
    if (j !== te) {
      if (j !== _t)
        for (const he in j)
          !Sa(he) && !(he in te) && s(
            R,
            he,
            j[he],
            null,
            fe,
            ue
          );
      for (const he in te) {
        if (Sa(he)) continue;
        const _e = te[he], Ne = j[he];
        _e !== Ne && he !== "value" && s(R, he, Ne, _e, fe, ue);
      }
      "value" in te && s(R, "value", j.value, te.value, fe);
    }
  }, le = (R, j, te, ue, fe, he, _e, Ne, ke) => {
    const ye = j.el = R ? R.el : d(""), Le = j.anchor = R ? R.anchor : d("");
    let { patchFlag: Ie, dynamicChildren: De, slotScopeIds: p } = j;
    p && (Ne = Ne ? Ne.concat(p) : p), R == null ? (r(ye, te, ue), r(Le, te, ue), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      te,
      Le,
      fe,
      he,
      _e,
      Ne,
      ke
    )) : Ie > 0 && Ie & 64 && De && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === De.length ? (T(
      R.dynamicChildren,
      De,
      te,
      fe,
      he,
      _e,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || fe && j === fe.subTree) && Lm(
      R,
      j,
      !0
      /* shallow */
    )) : I(
      R,
      j,
      te,
      Le,
      fe,
      he,
      _e,
      Ne,
      ke
    );
  }, J = (R, j, te, ue, fe, he, _e, Ne, ke) => {
    j.slotScopeIds = Ne, R == null ? j.shapeFlag & 512 ? fe.ctx.activate(
      j,
      te,
      ue,
      _e,
      ke
    ) : X(
      j,
      te,
      ue,
      fe,
      he,
      _e,
      ke
    ) : ge(R, j, ke);
  }, X = (R, j, te, ue, fe, he, _e) => {
    const Ne = R.component = jv(
      R,
      ue,
      fe
    );
    if (vm(R) && (Ne.ctx.renderer = Mn), Gv(Ne, !1, _e), Ne.asyncDep) {
      if (fe && fe.registerDep(Ne, Ae, _e), !R.el) {
        const ke = Ne.subTree = Te(xi);
        V(null, ke, j, te), R.placeholder = ke.el;
      }
    } else
      Ae(
        Ne,
        R,
        j,
        te,
        fe,
        he,
        _e
      );
  }, ge = (R, j, te) => {
    const ue = j.component = R.component;
    if (Sv(R, j, te))
      if (ue.asyncDep && !ue.asyncResolved) {
        se(ue, j, te);
        return;
      } else
        ue.next = j, ue.update();
    else
      j.el = R.el, ue.vnode = j;
  }, Ae = (R, j, te, ue, fe, he, _e) => {
    const Ne = () => {
      if (R.isMounted) {
        let { next: Ie, bu: De, u: p, parent: Me, vnode: Ue } = R;
        {
          const we = Rm(R);
          if (we) {
            Ie && (Ie.el = Ue.el, se(R, Ie, _e)), we.asyncDep.then(() => {
              In(() => {
                R.isUnmounted || ye();
              }, fe);
            });
            return;
          }
        }
        let ut = Ie, yt;
        Ei(R, !1), Ie ? (Ie.el = Ue.el, se(R, Ie, _e)) : Ie = Ue, De && Ls(De), (yt = Ie.props && Ie.props.onVnodeBeforeUpdate) && yr(yt, Me, Ie, Ue), Ei(R, !0);
        const Nt = gh(R), at = R.subTree;
        R.subTree = Nt, _(
          at,
          Nt,
          // parent may have changed if it's in a teleport
          x(at.el),
          // anchor may have changed if it's in a fragment
          Tn(at),
          R,
          fe,
          he
        ), Ie.el = Nt.el, ut === null && kv(R, Nt.el), p && In(p, fe), (yt = Ie.props && Ie.props.onVnodeUpdated) && In(
          () => yr(yt, Me, Ie, Ue),
          fe
        );
      } else {
        let Ie;
        const { el: De, props: p } = j, { bm: Me, m: Ue, parent: ut, root: yt, type: Nt } = R, at = Pa(j);
        Ei(R, !1), Me && Ls(Me), !at && (Ie = p && p.onVnodeBeforeMount) && yr(Ie, ut, j), Ei(R, !0);
        {
          yt.ce && yt.ce._hasShadowRoot() && yt.ce._injectChildStyle(
            Nt,
            R.parent ? R.parent.type : void 0
          );
          const we = R.subTree = gh(R);
          _(
            null,
            we,
            te,
            ue,
            R,
            fe,
            he
          ), j.el = we.el;
        }
        if (Ue && In(Ue, fe), !at && (Ie = p && p.onVnodeMounted)) {
          const we = j;
          In(
            () => yr(Ie, ut, we),
            fe
          );
        }
        (j.shapeFlag & 256 || ut && Pa(ut.vnode) && ut.vnode.shapeFlag & 256) && R.a && In(R.a, fe), R.isMounted = !0, j = te = ue = null;
      }
    };
    R.scope.on();
    const ke = R.effect = new Xp(Ne);
    R.scope.off();
    const ye = R.update = ke.run.bind(ke), Le = R.job = ke.runIfDirty.bind(ke);
    Le.i = R, Le.id = R.uid, ke.scheduler = () => ed(Le), Ei(R, !0), ye();
  }, se = (R, j, te) => {
    j.component = R;
    const ue = R.vnode.props;
    R.vnode = j, R.next = null, Nv(R, j.props, ue, te), Iv(R, j.children, te), ei(), lh(R), ti();
  }, I = (R, j, te, ue, fe, he, _e, Ne, ke = !1) => {
    const ye = R && R.children, Le = R ? R.shapeFlag : 0, Ie = j.children, { patchFlag: De, shapeFlag: p } = j;
    if (De > 0) {
      if (De & 128) {
        B(
          ye,
          Ie,
          te,
          ue,
          fe,
          he,
          _e,
          Ne,
          ke
        );
        return;
      } else if (De & 256) {
        $e(
          ye,
          Ie,
          te,
          ue,
          fe,
          he,
          _e,
          Ne,
          ke
        );
        return;
      }
    }
    p & 8 ? (Le & 16 && Et(ye, fe, he), Ie !== ye && y(te, Ie)) : Le & 16 ? p & 16 ? B(
      ye,
      Ie,
      te,
      ue,
      fe,
      he,
      _e,
      Ne,
      ke
    ) : Et(ye, fe, he, !0) : (Le & 8 && y(te, ""), p & 16 && z(
      Ie,
      te,
      ue,
      fe,
      he,
      _e,
      Ne,
      ke
    ));
  }, $e = (R, j, te, ue, fe, he, _e, Ne, ke) => {
    R = R || Ao, j = j || Ao;
    const ye = R.length, Le = j.length, Ie = Math.min(ye, Le);
    let De;
    for (De = 0; De < Ie; De++) {
      const p = j[De] = ke ? Ur(j[De]) : Sr(j[De]);
      _(
        R[De],
        p,
        te,
        null,
        fe,
        he,
        _e,
        Ne,
        ke
      );
    }
    ye > Le ? Et(
      R,
      fe,
      he,
      !0,
      !1,
      Ie
    ) : z(
      j,
      te,
      ue,
      fe,
      he,
      _e,
      Ne,
      ke,
      Ie
    );
  }, B = (R, j, te, ue, fe, he, _e, Ne, ke) => {
    let ye = 0;
    const Le = j.length;
    let Ie = R.length - 1, De = Le - 1;
    for (; ye <= Ie && ye <= De; ) {
      const p = R[ye], Me = j[ye] = ke ? Ur(j[ye]) : Sr(j[ye]);
      if (ua(p, Me))
        _(
          p,
          Me,
          te,
          null,
          fe,
          he,
          _e,
          Ne,
          ke
        );
      else
        break;
      ye++;
    }
    for (; ye <= Ie && ye <= De; ) {
      const p = R[Ie], Me = j[De] = ke ? Ur(j[De]) : Sr(j[De]);
      if (ua(p, Me))
        _(
          p,
          Me,
          te,
          null,
          fe,
          he,
          _e,
          Ne,
          ke
        );
      else
        break;
      Ie--, De--;
    }
    if (ye > Ie) {
      if (ye <= De) {
        const p = De + 1, Me = p < Le ? j[p].el : ue;
        for (; ye <= De; )
          _(
            null,
            j[ye] = ke ? Ur(j[ye]) : Sr(j[ye]),
            te,
            Me,
            fe,
            he,
            _e,
            Ne,
            ke
          ), ye++;
      }
    } else if (ye > De)
      for (; ye <= Ie; )
        rt(R[ye], fe, he, !0), ye++;
    else {
      const p = ye, Me = ye, Ue = /* @__PURE__ */ new Map();
      for (ye = Me; ye <= De; ye++) {
        const zt = j[ye] = ke ? Ur(j[ye]) : Sr(j[ye]);
        zt.key != null && Ue.set(zt.key, ye);
      }
      let ut, yt = 0;
      const Nt = De - Me + 1;
      let at = !1, we = 0;
      const yn = new Array(Nt);
      for (ye = 0; ye < Nt; ye++) yn[ye] = 0;
      for (ye = p; ye <= Ie; ye++) {
        const zt = R[ye];
        if (yt >= Nt) {
          rt(zt, fe, he, !0);
          continue;
        }
        let nn;
        if (zt.key != null)
          nn = Ue.get(zt.key);
        else
          for (ut = Me; ut <= De; ut++)
            if (yn[ut - Me] === 0 && ua(zt, j[ut])) {
              nn = ut;
              break;
            }
        nn === void 0 ? rt(zt, fe, he, !0) : (yn[nn - Me] = ye + 1, nn >= we ? we = nn : at = !0, _(
          zt,
          j[nn],
          te,
          null,
          fe,
          he,
          _e,
          Ne,
          ke
        ), yt++);
      }
      const Dr = at ? Fv(yn) : Ao;
      for (ut = Dr.length - 1, ye = Nt - 1; ye >= 0; ye--) {
        const zt = Me + ye, nn = j[zt], Lr = j[zt + 1], H = zt + 1 < Le ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Lr.el || $m(Lr)
        ) : ue;
        yn[ye] === 0 ? _(
          null,
          nn,
          te,
          H,
          fe,
          he,
          _e,
          Ne,
          ke
        ) : at && (ut < 0 || ye !== Dr[ut] ? He(nn, te, H, 2) : ut--);
      }
    }
  }, He = (R, j, te, ue, fe = null) => {
    const { el: he, type: _e, transition: Ne, children: ke, shapeFlag: ye } = R;
    if (ye & 6) {
      He(R.component.subTree, j, te, ue);
      return;
    }
    if (ye & 128) {
      R.suspense.move(j, te, ue);
      return;
    }
    if (ye & 64) {
      _e.move(R, j, te, Mn);
      return;
    }
    if (_e === Be) {
      r(he, j, te);
      for (let Ie = 0; Ie < ke.length; Ie++)
        He(ke[Ie], j, te, ue);
      r(R.anchor, j, te);
      return;
    }
    if (_e === Oc) {
      N(R, j, te);
      return;
    }
    if (ue !== 2 && ye & 1 && Ne)
      if (ue === 0)
        Ne.beforeEnter(he), r(he, j, te), In(() => Ne.enter(he), fe);
      else {
        const { leave: Ie, delayLeave: De, afterLeave: p } = Ne, Me = () => {
          R.ctx.isUnmounted ? o(he) : r(he, j, te);
        }, Ue = () => {
          he._isLeaving && he[q1](
            !0
            /* cancelled */
          ), Ie(he, () => {
            Me(), p && p();
          });
        };
        De ? De(he, Me, Ue) : Ue();
      }
    else
      r(he, j, te);
  }, rt = (R, j, te, ue = !1, fe = !1) => {
    const {
      type: he,
      props: _e,
      ref: Ne,
      children: ke,
      dynamicChildren: ye,
      shapeFlag: Le,
      patchFlag: Ie,
      dirs: De,
      cacheIndex: p,
      memo: Me
    } = R;
    if (Ie === -2 && (fe = !1), Ne != null && (ei(), Na(Ne, null, te, R, !0), ti()), p != null && (j.renderCache[p] = void 0), Le & 256) {
      j.ctx.deactivate(R);
      return;
    }
    const Ue = Le & 1 && De, ut = !Pa(R);
    let yt;
    if (ut && (yt = _e && _e.onVnodeBeforeUnmount) && yr(yt, j, R), Le & 6)
      We(R.component, te, ue);
    else {
      if (Le & 128) {
        R.suspense.unmount(te, ue);
        return;
      }
      Ue && Ii(R, null, j, "beforeUnmount"), Le & 64 ? R.type.remove(
        R,
        j,
        te,
        Mn,
        ue
      ) : ye && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ye.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (he !== Be || Ie > 0 && Ie & 64) ? Et(
        ye,
        j,
        te,
        !1,
        !0
      ) : (he === Be && Ie & 384 || !fe && Le & 16) && Et(ke, j, te), ue && gt(R);
    }
    const Nt = Me != null && p == null;
    (ut && (yt = _e && _e.onVnodeUnmounted) || Ue || Nt) && In(() => {
      yt && yr(yt, j, R), Ue && Ii(R, null, j, "unmounted"), Nt && (R.el = null);
    }, te);
  }, gt = (R) => {
    const { type: j, el: te, anchor: ue, transition: fe } = R;
    if (j === Be) {
      gn(te, ue);
      return;
    }
    if (j === Oc) {
      E(R);
      return;
    }
    const he = () => {
      o(te), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (R.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: _e, delayLeave: Ne } = fe, ke = () => _e(te, he);
      Ne ? Ne(R.el, he, ke) : ke();
    } else
      he();
  }, gn = (R, j) => {
    let te;
    for (; R !== j; )
      te = k(R), o(R), R = te;
    o(j);
  }, We = (R, j, te) => {
    const { bum: ue, scope: fe, job: he, subTree: _e, um: Ne, m: ke, a: ye } = R;
    vh(ke), vh(ye), ue && Ls(ue), fe.stop(), he && (he.flags |= 8, rt(_e, R, j, te)), Ne && In(Ne, j), In(() => {
      R.isUnmounted = !0;
    }, j);
  }, Et = (R, j, te, ue = !1, fe = !1, he = 0) => {
    for (let _e = he; _e < R.length; _e++)
      rt(R[_e], j, te, ue, fe);
  }, Tn = (R) => {
    if (R.shapeFlag & 6)
      return Tn(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const j = k(R.anchor || R.el), te = j && j[Y1];
    return te ? k(te) : j;
  };
  let ur = !1;
  const Jn = (R, j, te) => {
    let ue;
    R == null ? j._vnode && (rt(j._vnode, null, null, !0), ue = j._vnode.component) : _(
      j._vnode || null,
      R,
      j,
      null,
      null,
      null,
      te
    ), j._vnode = R, ur || (ur = !0, lh(ue), fm(), ur = !1);
  }, Mn = {
    p: _,
    um: rt,
    m: He,
    r: gt,
    mt: X,
    mc: z,
    pc: I,
    pbc: T,
    n: Tn,
    o: e
  };
  return {
    render: Jn,
    hydrate: void 0,
    createApp: yv(Jn)
  };
}
function Ec({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ei({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lm(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (qe(r) && qe(o))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let d = o[s];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = o[s] = Ur(o[s]), d.el = u.el), !n && d.patchFlag !== -2 && Lm(u, d)), d.type === Ol && (d.patchFlag === -1 && (d = o[s] = Ur(d)), d.el = u.el), d.type === xi && !d.el && (d.el = u.el);
    }
}
function Fv(e) {
  const t = e.slice(), n = [0];
  let r, o, s, u, d;
  const f = e.length;
  for (r = 0; r < f; r++) {
    const v = e[r];
    if (v !== 0) {
      if (o = n[n.length - 1], e[o] < v) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        d = s + u >> 1, e[n[d]] < v ? s = d + 1 : u = d;
      v < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = t[u];
  return n;
}
function Rm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Rm(t);
}
function vh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function $m(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? $m(t.subTree) : null;
}
const Vm = (e) => e.__isSuspense;
function Dv(e, t) {
  t && t.pendingBranch ? qe(e) ? t.effects.push(...e) : t.effects.push(e) : G1(e);
}
const Be = /* @__PURE__ */ Symbol.for("v-fgt"), Ol = /* @__PURE__ */ Symbol.for("v-txt"), xi = /* @__PURE__ */ Symbol.for("v-cmt"), Oc = /* @__PURE__ */ Symbol.for("v-stc"), Ca = [];
let zn = null;
function oe(e = !1) {
  Ca.push(zn = e ? null : []);
}
function Lv() {
  Ca.pop(), zn = Ca[Ca.length - 1] || null;
}
let Ta = 1;
function _h(e, t = !1) {
  Ta += e, e < 0 && zn && t && (zn.hasOnce = !0);
}
function zm(e) {
  return e.dynamicChildren = Ta > 0 ? zn || Ao : null, Lv(), Ta > 0 && zn && zn.push(e), e;
}
function de(e, t, n, r, o, s) {
  return zm(
    K(
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
function Fr(e, t, n, r, o) {
  return zm(
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
function jm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ua(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hm = ({ key: e }) => e ?? null, $s = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Vt(e) || /* @__PURE__ */ pn(e) || Je(e) ? { i: Vn, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, r = 0, o = null, s = e === Be ? 0 : 1, u = !1, d = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hm(t),
    ref: t && $s(t),
    scopeId: pm,
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
    ctx: Vn
  };
  return d ? (id(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= Vt(n) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  zn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && zn.push(f), f;
}
const Te = Rv;
function Rv(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === wm) && (e = xi), jm(e)) {
    const d = zo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && id(d, n), Ta > 0 && !s && zn && (d.shapeFlag & 6 ? zn[zn.indexOf(e)] = d : zn.push(d)), d.patchFlag = -2, d;
  }
  if (Yv(e) && (e = e.__vccOpts), t) {
    t = $v(t);
    let { class: d, style: f } = t;
    d && !Vt(d) && (t.class = it(d)), mt(f) && (/* @__PURE__ */ Zu(f) && !qe(f) && (f = mn({}, f)), t.style = St(f));
  }
  const u = Vt(e) ? 1 : Vm(e) ? 128 : X1(e) ? 64 : mt(e) ? 4 : Je(e) ? 2 : 0;
  return K(
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
  return e ? /* @__PURE__ */ Zu(e) || Im(e) ? mn({}, e) : e : null;
}
function zo(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: u, children: d, transition: f } = e, v = t ? vi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Hm(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? qe(s) ? s.concat($s(t)) : [s, $s(t)] : $s(t)
    ) : s,
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
    patchFlag: t && e.type !== Be ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && zo(e.ssContent),
    ssFallback: e.ssFallback && zo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && td(
    y,
    f.clone(y)
  ), y;
}
function ba(e = " ", t = 0) {
  return Te(Ol, null, e, t);
}
function st(e = "", t = !1) {
  return t ? (oe(), Fr(xi, null, e)) : Te(xi, null, e);
}
function Sr(e) {
  return e == null || typeof e == "boolean" ? Te(xi) : qe(e) ? Te(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jm(e) ? Ur(e) : Te(Ol, null, String(e));
}
function Ur(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zo(e);
}
function id(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), id(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Im(t) ? t._ctx = Vn : o === 3 && Vn && (Vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Je(t) ? (t = { default: t, _ctx: Vn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ba(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = it([t.class, r.class]));
      else if (o === "style")
        t.style = St([t.style, r.style]);
      else if (wl(o)) {
        const s = t[o], u = r[o];
        u && s !== u && !(qe(s) && s.includes(u)) ? t[o] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sl(o) && (t[o] = u);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function yr(e, t, n, r = null) {
  Er(e, t, 7, [
    n,
    r
  ]);
}
const Vv = Mm();
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
    scope: new f1(
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
    propsOptions: Om(r, o),
    emitsOptions: Nm(r, o),
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
let hn = null;
const Hv = () => hn || Vn;
let rl, mu;
{
  const e = Nl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((u) => u(s)) : o[0](s);
    };
  };
  rl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => hn = n
  ), mu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fa = n
  );
}
const Ua = (e) => {
  const t = hn;
  return rl(e), e.scope.on(), () => {
    e.scope.off(), rl(t);
  };
}, xh = () => {
  hn && hn.scope.off(), rl(null);
};
function Gm(e) {
  return e.vnode.shapeFlag & 4;
}
let Fa = !1;
function Gv(e, t = !1, n = !1) {
  t && mu(t);
  const { props: r, children: o } = e.vnode, s = Gm(e);
  Mv(e, r, s, t), Cv(e, o, n || t);
  const u = s ? Kv(e, t) : void 0;
  return t && mu(!1), u;
}
function Kv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uv);
  const { setup: r } = n;
  if (r) {
    ei();
    const o = e.setupContext = r.length > 1 ? Wv(e) : null, s = Ua(e), u = Ba(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), d = Hp(u);
    if (ti(), s(), (d || e.sp) && !Pa(e) && bm(e), d) {
      if (u.then(xh, xh), t)
        return u.then((f) => {
          wh(e, f);
        }).catch((f) => {
          Al(f, e, 0);
        });
      e.asyncDep = u;
    } else
      wh(e, u);
  } else
    Km(e);
}
function wh(e, t, n) {
  Je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : mt(t) && (e.setupState = cm(t)), Km(e);
}
function Km(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Cr);
  {
    const o = Ua(e);
    ei();
    try {
      dv(e);
    } finally {
      ti(), o();
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
function Tl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(cm(T1(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Aa)
        return Aa[n](e);
    },
    has(t, n) {
      return n in t || n in Aa;
    }
  })) : e.proxy;
}
function Uv(e, t = !0) {
  return Je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yv(e) {
  return Je(e) && "__vccOpts" in e;
}
const ct = (e, t) => /* @__PURE__ */ $1(e, t, Fa), Xv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let gu;
const Sh = typeof window < "u" && window.trustedTypes;
if (Sh)
  try {
    gu = /* @__PURE__ */ Sh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Bm = gu ? (e) => gu.createHTML(e) : (e) => e, qv = "http://www.w3.org/2000/svg", Jv = "http://www.w3.org/1998/Math/MathML", Kr = typeof document < "u" ? document : null, kh = Kr && /* @__PURE__ */ Kr.createElement("template"), Zv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kr.createElementNS(qv, e) : t === "mathml" ? Kr.createElementNS(Jv, e) : n ? Kr.createElement(e, { is: n }) : Kr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Kr.createTextNode(e),
  createComment: (e) => Kr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kr.querySelector(e),
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
      kh.innerHTML = Bm(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const d = kh.content;
      if (r === "svg" || r === "mathml") {
        const f = d.firstChild;
        for (; f.firstChild; )
          d.appendChild(f.firstChild);
        d.removeChild(f);
      }
      t.insertBefore(d, n);
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
const il = /* @__PURE__ */ Symbol("_vod"), Wm = /* @__PURE__ */ Symbol("_vsh"), qi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[il] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : da(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), da(e, !0), r.enter(e)) : r.leave(e, () => {
      da(e, !1);
    }) : da(e, t));
  },
  beforeUnmount(e, { value: t }) {
    da(e, t);
  }
};
function da(e, t) {
  e.style.display = t ? e[il] : "none", e[Wm] = !t;
}
const t_ = /* @__PURE__ */ Symbol(""), n_ = /(?:^|;)\s*display\s*:/;
function r_(e, t, n) {
  const r = e.style, o = Vt(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (Vt(t))
        for (const u of t.split(";")) {
          const d = u.slice(0, u.indexOf(":")).trim();
          n[d] == null && Vs(r, d, "");
        }
      else
        for (const u in t)
          n[u] == null && Vs(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), Vs(r, u, n[u]);
  } else if (o) {
    if (t !== n) {
      const u = r[t_];
      u && (n += ";" + u), r.cssText = n, s = n_.test(n);
    }
  } else t && e.removeAttribute("style");
  il in e && (e[il] = s ? r.display : "", e[Wm] && (r.display = "none"));
}
const Mh = /\s*!important$/;
function Vs(e, t, n) {
  if (qe(n))
    n.forEach((r) => Vs(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = i_(e, t);
    Mh.test(n) ? e.setProperty(
      Ji(r),
      n.replace(Mh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Nh = ["Webkit", "Moz", "ms"], Tc = {};
function i_(e, t) {
  const n = Tc[t];
  if (n)
    return n;
  let r = Sn(t);
  if (r !== "filter" && r in e)
    return Tc[t] = r;
  r = Ml(r);
  for (let o = 0; o < Nh.length; o++) {
    const s = Nh[o] + r;
    if (s in e)
      return Tc[t] = s;
  }
  return t;
}
const Ph = "http://www.w3.org/1999/xlink";
function Ah(e, t, n, r, o, s = u1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ph, t.slice(6, t.length)) : e.setAttributeNS(Ph, t, n) : n == null || s && !Wp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Ir(n) ? String(n) : n
  );
}
function Ch(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Bm(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const d = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Wp(n) : n == null && d === "string" ? (n = "", u = !0) : d === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(o || t);
}
function So(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function o_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ih = /* @__PURE__ */ Symbol("_vei");
function a_(e, t, n, r, o = null) {
  const s = e[Ih] || (e[Ih] = {}), u = s[t];
  if (r && u)
    u.value = r;
  else {
    const [d, f] = s_(t);
    if (r) {
      const v = s[t] = u_(
        r,
        o
      );
      So(e, d, v, f);
    } else u && (o_(e, d, u, f), s[t] = void 0);
  }
}
const Eh = /(?:Once|Passive|Capture)$/;
function s_(e) {
  let t;
  if (Eh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Eh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ji(e.slice(2)), t];
}
let Fc = 0;
const l_ = /* @__PURE__ */ Promise.resolve(), c_ = () => Fc || (l_.then(() => Fc = 0), Fc = Date.now());
function u_(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Er(
      d_(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = c_(), n;
}
function d_(e, t) {
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
const Oh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, f_ = (e, t, n, r, o, s) => {
  const u = o === "svg";
  t === "class" ? e_(e, r, u) : t === "style" ? r_(e, n, r) : wl(t) ? Sl(t) || a_(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : h_(e, t, r, u)) ? (Ch(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ah(e, t, r, u, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (p_(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Vt(r))) ? Ch(e, Sn(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ah(e, t, r, u));
};
function h_(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Oh(t) && Je(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Oh(t) && Vt(n) ? !1 : t in e;
}
function p_(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Sn(t);
  return Array.isArray(n) ? n.some((o) => Sn(o) === r) : Object.keys(n).some((o) => Sn(o) === r);
}
const Th = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return qe(t) ? (n) => Ls(t, n) : t;
};
function m_(e) {
  e.target.composing = !0;
}
function Fh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dc = /* @__PURE__ */ Symbol("_assign");
function Dh(e, t, n) {
  return t && (e = e.trim()), n && (e = Ku(e)), e;
}
const Lh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Dc] = Th(o);
    const s = r || o.props && o.props.type === "number";
    So(e, t ? "change" : "input", (u) => {
      u.target.composing || e[Dc](Dh(e.value, n, s));
    }), (n || s) && So(e, "change", () => {
      e.value = Dh(e.value, n, s);
    }), t || (So(e, "compositionstart", m_), So(e, "compositionend", Fh), So(e, "change", Fh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, u) {
    if (e[Dc] = Th(u), e.composing) return;
    const d = (s || e.type === "number") && !/^0\d/.test(e.value) ? Ku(e.value) : e.value, f = t ?? "";
    if (d === f)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === f) || (e.value = f);
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
}, Gt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...s) => {
    for (let u = 0; u < t.length; u++) {
      const d = y_[t[u]];
      if (d && d(o, t)) return;
    }
    return e(o, ...s);
  }));
}, b_ = /* @__PURE__ */ mn({ patchProp: f_ }, Zv);
let Rh;
function v_() {
  return Rh || (Rh = Ev(b_));
}
const od = ((...e) => {
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
  return Vt(e) ? document.querySelector(e) : e;
}
function ko(e, t) {
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
function $h(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const s = n.getImageData(0, 0, r, o).data;
  let u = r, d = o, f = -1, v = -1;
  for (let x = 0; x < o; x += 1)
    for (let k = 0; k < r; k += 1)
      s[(x * r + k) * 4 + 3] <= t || (k < u && (u = k), x < d && (d = x), k > f && (f = k), x > v && (v = x));
  return f < u || v < d ? null : {
    minX: u,
    minY: d,
    maxX: f,
    maxY: v,
    width: f - u + 1,
    height: v - d + 1,
    aspect: Number(((f - u + 1) / Math.max(1, v - d + 1)).toFixed(4))
  };
}
function ad(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Br(e, t, n) {
  if (!e) return ko(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function At(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Lc = null, Rc = null, Vh = null, zh = null, Ft = null, fa = null, _n = null, gi = null;
function S_() {
  if (Rc) return Rc;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Rc = n, n;
}
function $c(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Lc = Br(Lc, n, r);
  const o = Lc;
  At(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", zh !== o.ctx && (Vh = o.ctx.createPattern(S_(), "repeat"), zh = o.ctx), o.ctx.fillStyle = Vh, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
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
const Ct = /* @__PURE__ */ new Map(), sd = 128;
function A_(e, t, n, r, o, s) {
  const u = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), f = `${u}:${d.toFixed(2)}:${n}:${r}:${o}:${s.toFixed(3)}`;
  if (Ct.has(f)) {
    const U = Ct.get(f);
    return Ct.delete(f), Ct.set(f, U), U;
  }
  Ct.size >= sd && Ct.delete(Ct.keys().next().value);
  const v = u * 2 + 2, y = u + 1, x = ad(v, v), k = x.getContext("2d"), P = d * u, S = u + 1, _ = `rgba(${n},${r},${o},${s})`, F = `rgba(${n},${r},${o},0)`, V = k.createRadialGradient(y, y, P, y, y, S);
  return V.addColorStop(0, _), V.addColorStop(1, F), k.fillStyle = V, k.fillRect(0, 0, v, v), Ct.set(f, x), x;
}
function C_(e, t, n, r, o, s, u) {
  const { r: d, g: f, b: v, a: y } = r, x = Math.max(2, Math.ceil(e) * 2), k = Math.max(2, Math.ceil(t) * 2), P = Math.max(0, o), S = Math.max(0, Math.min(0.99, s)), _ = Math.max(0, Math.min(1, u ?? 0)), F = `chisel:${x}:${k}:${n.toFixed(2)}:${d}:${f}:${v}:${y.toFixed(3)}:${P.toFixed(2)}:${S.toFixed(2)}:${_.toFixed(2)}`;
  if (Ct.has(F)) {
    const z = Ct.get(F);
    return Ct.delete(F), Ct.set(F, z), z;
  }
  Ct.size >= sd && Ct.delete(Ct.keys().next().value);
  const V = ad(x, k), U = V.getContext("2d"), N = U.createImageData(x, k), E = N.data, $ = Math.max(0, e - t), D = Math.max(0, Math.min(1, n)), W = 1 + P;
  for (let z = 0; z < k; z++)
    for (let q = 0; q < x; q++) {
      const T = q + 0.5 - e, O = z + 0.5 - t, le = Math.max(Math.abs(T) - $, 0), X = Math.hypot(le, O) / t;
      if (X >= 1) continue;
      const ge = X <= D ? 1 : Math.max(0, (1 - X) / Math.max(1e-4, 1 - D)), Ae = 1 - X, se = 1 + P * (1 - Ae) * (1 - Ae), I = 1 - S * Ae * Ae, $e = se * I / W;
      let B = 1;
      if (_ > 0) {
        const gt = Math.floor((O + t) / 1.5), gn = Math.floor((T + e) / 8), We = Bi(Oo(gt * 41 + 500, gn * 19 + 300));
        B = 1 - _ * 0.42 * We;
      }
      const He = Math.round(255 * Math.min(1, y * ge * $e * B));
      if (He <= 0) continue;
      const rt = (z * x + q) * 4;
      E[rt] = d, E[rt + 1] = f, E[rt + 2] = v, E[rt + 3] = He;
    }
  return U.putImageData(N, 0, 0), Ct.set(F, V), V;
}
function Oo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Bi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function I_(e, t, n, r, o, s, u) {
  const d = e + 0.5 - n, f = t + 0.5 - r, v = Math.max(0, n - r), y = Math.max(Math.abs(d) - v, 0), x = Math.hypot(y, f) / r;
  if (x >= 1) return 0;
  const k = Bi(Oo(e * 17 + 3, t * 13 + 7)), P = x + s * 0.22 * (k - 0.5);
  if (P >= 1) return 0;
  const S = P <= o ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - o)), _ = E_(e, t, d, f, n, r), F = s * 0.55;
  if (_ < F) return 0;
  const U = 0.45 + 0.55 * ((_ - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, u * S * U));
}
function E_(e, t, n, r, o, s) {
  const u = Math.floor((n + o) / 3), d = Math.floor((r + s) / 2), f = Bi(Oo(u * 13 + 700, d * 17 + 400)), v = Math.floor((n + o) / 1.5), y = Math.floor((r + s) / 1.5), x = Bi(Oo(v * 23 + 800, y * 29 + 500)), k = Bi(Oo(e * 3 + 100, t * 5 + 200));
  return f * 0.55 + x * 0.3 + k * 0.15;
}
function O_(e, t, n, r, o) {
  const { r: s, g: u, b: d, a: f } = r, v = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, o)), k = `crayon:${v}:${y}:${n.toFixed(2)}:${s}:${u}:${d}:${f.toFixed(3)}:${x.toFixed(2)}`;
  if (Ct.has(k)) {
    const U = Ct.get(k);
    return Ct.delete(k), Ct.set(k, U), U;
  }
  Ct.size >= sd && Ct.delete(Ct.keys().next().value);
  const P = ad(v, y), S = P.getContext("2d"), _ = S.createImageData(v, y), F = _.data, V = Math.max(0, Math.min(1, n));
  for (let U = 0; U < y; U++)
    for (let N = 0; N < v; N++) {
      const E = I_(N, U, e, t, V, x, f);
      if (E <= 0) continue;
      const $ = (U * v + N) * 4;
      F[$] = s, F[$ + 1] = u, F[$ + 2] = d, F[$ + 3] = E;
    }
  return S.putImageData(_, 0, 0), Ct.set(k, P), P;
}
function Um(e, t, n) {
  var _, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = N_(t, n), s = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = T_(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), f = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), v = P_(t, o), y = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", k = t == null ? void 0 : t.scatter, P = k ? { radius: Number(k.radius ?? 1.5), count: Math.max(1, Math.round(k.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const V = o * d, U = o, N = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), E = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = C_(V, U, s, u, N, E, $);
  } else if (r === "crayon") {
    const V = o * d, U = o, N = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = O_(V, U, s, u, N);
  } else
    S = A_(o, s, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: v, desc: n, aspect: d, angle: f, stampKind: r, scatter: P, latitudeCorrection: x };
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
function jh(e, t, n, r, o) {
  const s = e.angle, u = e.desc.width;
  function d(v, y) {
    s === 0 ? e.ctx.drawImage(e.stampTex, v - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(v, y), e.ctx.rotate(s), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  d(t, n);
  const f = s === 0 ? o : o * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  t - f < 0 && d(t + u, n), t + f > u && d(t - u, n);
}
function ld(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: v, count: y } = e.scatter, x = v * e.radiusPx * o, k = Oo(t, n);
    for (let P = 0; P < y; P++) {
      const S = Bi(k + P * 2) * Math.PI * 2, _ = Math.sqrt(Bi(k + P * 2 + 1)) * x, F = t + Math.cos(S) * _, V = n + Math.sin(S) * _, U = Math.max(0.5, e.radiusPx * o * 0.48), N = (0.5 - V / Math.max(1, e.desc.height)) * Math.PI, E = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(N)) : 1, $ = U * e.aspect * E;
      jh(e, F, V, U, $);
    }
    return;
  }
  const s = Math.max(0.5, e.radiusPx * o), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, f = s * e.aspect * d;
  jh(e, t, n, s, f);
}
function Hh(e, t, n) {
  const r = M_(t);
  if (!e || r.length === 0) return;
  const o = n.width, s = n.height, u = Um(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let k = 0; k < r.length; k++) {
    let P = Number(r[k].u || 0) * o;
    const S = Number(r[k].v || 0) * s;
    k > 0 && Math.abs(P - d[k - 1].x) > o * 0.5 && (P += P < d[k - 1].x ? o : -o), d.push({ x: P, y: S });
  }
  if (ld(u, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let f = d[0], v = d[0], y = d[0], x = 0;
  for (let k = 1; k < d.length; k++) {
    const P = d[k], S = { x: (v.x + P.x) * 0.5, y: (v.y + P.y) * 0.5 };
    k === 1 ? x = Da(u, y.x, y.y, S.x, S.y, x) : x = ol(u, f, y, S, P, x), f = v, v = P, y = S;
  }
  d.length === 2 ? Da(u, y.x, y.y, v.x, v.y, x) : ol(u, f, y, v, v, x), e.restore();
}
function zs(e, t, n) {
  var x;
  const r = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, s = n.height, u = F_(t), d = [];
  let f = 1 / 0, v = -1 / 0;
  for (let k = 0; k < r.length; k++) {
    const P = k_(r[k]);
    let S = Number(P.x || 0) * o;
    k > 0 && Math.abs(S - d[k - 1].x) > o * 0.5 && (S += S < d[k - 1].x ? o : -o), d.push({ x: S, y: Number(P.y || 0) * s }), S < f && (f = S), S > v && (v = S);
  }
  function y(k) {
    e.beginPath(), e.moveTo(d[0].x + k, d[0].y);
    for (let P = 1; P < d.length; P++) e.lineTo(d[P].x + k, d[P].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, y(0), f < 0 && y(o), v > o && y(-o), e.restore();
}
function _s(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    zs(e, t, n);
    return;
  }
  const s = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  s >= 0.999 ? Hh(e, t, n) : (fa = Br(fa, n.width, n.height), At(fa), Hh(fa.ctx, t, n), e.save(), e.globalAlpha = s, e.drawImage(fa.canvas, 0, 0), e.restore());
}
function Oi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Da(e, t, n, r, o, s) {
  const u = r - t, d = o - n, f = Math.hypot(u, d);
  if (f < 1e-9) return s;
  let v = e.spacingPx - s;
  for (; v <= f; ) {
    const y = v / f;
    ld(e, t + u * y, n + d * y, 1), v += e.spacingPx;
  }
  return f - v + e.spacingPx;
}
function ol(e, t, n, r, o, s) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, f = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, x = d, k = x + f, P = k + v, S = k - x, _ = 16;
  let F = s, V = n.x, U = n.y;
  for (let N = 1; N <= _; N++) {
    const E = x + S * N / _, $ = ((x - E) * t.x + (E - y) * n.x) / (x - y), D = ((x - E) * t.y + (E - y) * n.y) / (x - y), W = ((k - E) * n.x + (E - x) * r.x) / (k - x), z = ((k - E) * n.y + (E - x) * r.y) / (k - x), q = ((P - E) * r.x + (E - k) * o.x) / (P - k), T = ((P - E) * r.y + (E - k) * o.y) / (P - k), O = ((k - E) * $ + (E - y) * W) / (k - y), le = ((k - E) * D + (E - y) * z) / (k - y), J = ((P - E) * W + (E - x) * q) / (P - x), X = ((P - E) * z + (E - x) * T) / (P - x), ge = ((k - E) * O + (E - x) * J) / (k - x), Ae = ((k - E) * le + (E - x) * X) / (k - x);
    F = Da(e, V, U, ge, Ae, F), V = ge, U = Ae;
  }
  return F;
}
function D_(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const s = e.descriptor, u = s.width, d = n * s.height, f = e.activeStroke;
  let v = t * u;
  if (f && Math.abs(v - f.prev.x) > u * 0.5 && (v += v < f.prev.x ? u : -u), !f) {
    const P = Um(o, r, s), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", V = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", ld(P, v, d, 1), e.activeStroke = {
      pprev: { x: v, y: d },
      prev: { x: v, y: d },
      lastMidX: v,
      lastMidY: d,
      stampTex: P.stampTex,
      radiusPx: P.radiusPx,
      spacingPx: P.spacingPx,
      aspect: P.aspect,
      angle: P.angle,
      stampKind: P.stampKind,
      scatter: P.scatter,
      latitudeCorrection: P.latitudeCorrection,
      strokeOpacity: S,
      velocityWidthFactor: _,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: V,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (f.prev.x + v) * 0.5, x = (f.prev.y + d) * 0.5;
  o.globalCompositeOperation = "source-over";
  const k = {
    ctx: o,
    stampTex: f.stampTex,
    radiusPx: f.radiusPx,
    spacingPx: f.spacingPx,
    desc: s,
    aspect: f.aspect,
    angle: f.angle,
    stampKind: f.stampKind,
    scatter: f.scatter,
    latitudeCorrection: f.latitudeCorrection
  };
  f.pointCount === 1 ? f.distSinceStamp = Da(k, f.lastMidX, f.lastMidY, y, x, f.distSinceStamp) : f.distSinceStamp = ol(
    k,
    f.pprev,
    { x: f.lastMidX, y: f.lastMidY },
    { x: y, y: x },
    { x: v, y: d },
    f.distSinceStamp
  ), f.pprev = f.prev, f.prev = { x: v, y: d }, f.lastMidX = y, f.lastMidY = x, f.pointCount++, e.displayDirty = !0;
}
function yu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), s = ko(t, n), u = {
    descriptor: r,
    committedMask: ko(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: ko(t, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = ko(t, n);
  let v = null, y = "", x = null;
  function k(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: ko(t, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(T) {
    let O = o.get(T);
    return O || (O = k(T), o.set(T, O)), O;
  }
  function S(T) {
    return y === "mask" ? u : v ? P(v) : d;
  }
  function _(T) {
    var Ae;
    const O = !x || x.length !== T.length || T.some((se, I) => se !== x[I]), le = y === "paint" && ((Ae = v ? o.get(v) : d) == null ? void 0 : Ae.activeStroke) || null;
    let J = u.displayDirty || d.displayDirty || O;
    for (const se of T) {
      const I = o.get(se);
      if (I != null && I.displayDirty) {
        J = !0;
        break;
      }
    }
    if (le && (J = !0), !J) return;
    u.displayDirty = !1, d.displayDirty = !1;
    for (const se of T) {
      const I = o.get(se);
      I && (I.displayDirty = !1);
    }
    x = [...T];
    const X = f.ctx;
    At(f);
    const ge = !!(le != null && le.isEraser);
    for (const se of T) {
      const I = o.get(se);
      if (!I) continue;
      const B = v === I.actionGroupId && y === "paint" ? I.activeStroke : null;
      if (ge)
        Ft = Br(Ft, t, n), At(Ft), Ft.ctx.drawImage(I.committedPaint.canvas, 0, 0), Oi(Ft.ctx, s.canvas), X.drawImage(Ft.canvas, 0, 0);
      else if (X.drawImage(I.committedPaint.canvas, 0, 0), B) {
        const He = I.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, B.strokeOpacity ?? 1));
        X.save(), X.globalAlpha = He, X.drawImage(s.canvas, 0, 0), X.restore();
      }
    }
  }
  function F(T) {
    var le, J, X, ge, Ae;
    for (const se of o.values())
      At(se.committedPaint), At(se.currentStroke), se.activeStroke = null, se.displayDirty = !0;
    At(u.committedMask), At(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, d.displayDirty = !0, x = null;
    const O = [
      ...Array.isArray((J = (le = T == null ? void 0 : T.painting) == null ? void 0 : le.paint) == null ? void 0 : J.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((ge = (X = T == null ? void 0 : T.painting) == null ? void 0 : X.mask) == null ? void 0 : ge.strokes) ? T.painting.mask.strokes : []
    ];
    for (const se of O) {
      if (((Ae = se == null ? void 0 : se.targetSpace) == null ? void 0 : Ae.kind) !== "ERP_GLOBAL") continue;
      const I = String((se == null ? void 0 : se.layerKind) || "paint"), B = String((se == null ? void 0 : se.toolKind) || "pen") === "eraser";
      if (I === "mask") {
        const He = u.descriptor;
        B ? (Ft = Br(Ft, He.width, He.height), At(Ft), _s(Ft.ctx, se, He), Oi(u.committedMask.ctx, Ft.canvas)) : _s(u.committedMask.ctx, se, He);
        continue;
      }
      if (B) {
        Ft = Br(Ft, r.width, r.height), At(Ft), _s(Ft.ctx, se, r);
        for (const He of o.values())
          Oi(He.committedPaint.ctx, Ft.canvas), He.displayDirty = !0;
      } else {
        const He = String((se == null ? void 0 : se.actionGroupId) || "__default__"), rt = P(He), gt = rt.descriptor;
        _s(rt.committedPaint.ctx, se, gt), rt.displayDirty = !0;
      }
    }
    _([...o.keys()]);
  }
  function V(T, O) {
    y = String((T == null ? void 0 : T.layerKind) || "");
    const le = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (y === "mask")
      v = null, At(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const J = le ? d : P(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      v = le ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), At(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    }
  }
  function U(T, O) {
    var I;
    const le = String((T == null ? void 0 : T.layerKind) || "paint"), J = String((T == null ? void 0 : T.toolKind) || "") === "eraser", X = le === "mask" ? u : J ? d : P(String((T == null ? void 0 : T.actionGroupId) || v || "__default__")), ge = X.activeStroke, Ae = X.descriptor;
    if (ge && ge.pointCount > 1) {
      const $e = X.currentStroke.ctx;
      $e.globalCompositeOperation = "source-over";
      const B = {
        ctx: $e,
        stampTex: ge.stampTex,
        radiusPx: ge.radiusPx,
        spacingPx: ge.spacingPx,
        desc: Ae,
        aspect: ge.aspect,
        angle: ge.angle,
        stampKind: ge.stampKind,
        scatter: ge.scatter,
        latitudeCorrection: ge.latitudeCorrection
      };
      ge.pointCount === 2 ? Da(B, ge.lastMidX, ge.lastMidY, ge.prev.x, ge.prev.y, ge.distSinceStamp) : ol(B, ge.pprev, { x: ge.lastMidX, y: ge.lastMidY }, ge.prev, ge.prev, ge.distSinceStamp);
    }
    X.lassoPreviewActive && (At(X.currentStroke), zs(X.currentStroke.ctx, T, Ae), X.lassoPreviewActive = !1);
    const se = le === "mask" ? u.committedMask : X.committedPaint;
    if (J && le === "paint")
      for (const $e of o.values())
        Oi($e.committedPaint.ctx, X.currentStroke.canvas), $e.displayDirty = !0;
    else if (J)
      Oi(se.ctx, X.currentStroke.canvas);
    else {
      const $e = Math.max(0, Math.min(1, (ge == null ? void 0 : ge.strokeOpacity) ?? 1));
      se.ctx.save(), se.ctx.globalAlpha = $e, se.ctx.drawImage(X.currentStroke.canvas, 0, 0), se.ctx.restore();
    }
    w_() && (String((T == null ? void 0 : T.toolKind) || ""), String((Ae == null ? void 0 : Ae.kind) || ""), Number((Ae == null ? void 0 : Ae.width) || 0), Number((Ae == null ? void 0 : Ae.height) || 0), String(((I = T == null ? void 0 : T.targetSpace) == null ? void 0 : I.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), $h(X.currentStroke.canvas), $h(se.canvas), void 0), At(X.currentStroke), X.activeStroke = null, X.displayDirty = !0, v = null, y = "", _([...o.keys()]);
  }
  function N(T) {
    if (y === "mask")
      At(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (y === "paint" && !v)
      At(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (v) {
      const O = o.get(v);
      O && (At(O.currentStroke), O.activeStroke = null, O.lassoPreviewActive = !1, O.displayDirty = !0);
    }
    v = null, y = "", _([...o.keys()]);
  }
  function E(T, O) {
    var J;
    if (y = String((T == null ? void 0 : T.layerKind) || ""), String(((J = T == null ? void 0 : T.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        At(u.currentStroke), zs(u.currentStroke.ctx, T, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const X = String((T == null ? void 0 : T.toolKind) || "") === "eraser", ge = X ? d : P(String((T == null ? void 0 : T.actionGroupId) || v || "__default__"));
        v = X ? "" : String((T == null ? void 0 : T.actionGroupId) || v || "__default__"), At(ge.currentStroke), zs(ge.currentStroke.ctx, T, ge.descriptor), ge.lassoPreviewActive = !0, ge.displayDirty = !0;
      }
      _([...o.keys()]);
    }
  }
  function $(T) {
    return _(T ?? [...o.keys()]), {
      displayPaint: f,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function D(T) {
    return o.get(String(T)) ?? null;
  }
  function W() {
    return [...o.keys()];
  }
  function z(T) {
    var Ae;
    const O = o.get(String(T));
    if (!O) return null;
    const le = y === "paint" && v === O.actionGroupId, J = y === "paint" && ((Ae = v ? o.get(v) : d) == null ? void 0 : Ae.activeStroke) || null;
    if (J != null && J.isEraser)
      return _n = Br(_n, t, n), At(_n), _n.ctx.drawImage(O.committedPaint.canvas, 0, 0), Oi(_n.ctx, s.canvas), _n.canvas;
    const X = le ? O.activeStroke : null;
    if (!X) return O.committedPaint.canvas;
    _n = Br(_n, t, n), At(_n), _n.ctx.drawImage(O.committedPaint.canvas, 0, 0);
    const ge = O.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, X.strokeOpacity ?? 1));
    return _n.ctx.save(), _n.ctx.globalAlpha = ge, _n.ctx.drawImage(s.canvas, 0, 0), _n.ctx.restore(), _n.canvas;
  }
  function q() {
    return gi = Br(gi, t, n), At(gi), $c(gi.ctx, u.committedMask.canvas), y === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Ft = Br(Ft, t, n), At(Ft), Ft.ctx.drawImage(u.committedMask.canvas, 0, 0), Oi(Ft.ctx, s.canvas), At(gi), $c(gi.ctx, Ft.canvas)) : $c(gi.ctx, s.canvas)), gi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: V,
    appendStrokePoint: D_,
    updateActiveStroke: E,
    commitActiveStroke: U,
    cancelActiveStroke: N,
    getErpTarget: $,
    ensureTarget: S,
    getGroupTarget: D,
    getGroupDisplayCanvas: z,
    getMaskDisplayCanvas: q,
    getAllGroupIds: W
  };
}
function Z(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function L_(e, t) {
  let n = $t(t) - $t(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const bu = 3;
function ha(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function cd(e, t = 0) {
  const n = ha(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = ha(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = ha(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const s = ha(e == null ? void 0 : e.detail);
  return s != null ? Math.sign(s) : Math.sign(ha(t) || 0);
}
function Ym(e) {
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
const Gh = Math.PI / 180, Kh = 0.12, R_ = bu, $_ = 35, V_ = 140, va = 100, z_ = 20, Bh = 0.8;
function j_(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), s = Z(Number(e || va), 1, 179) * Gh;
  return 2 * Math.atan(Math.tan(s * 0.5) * (o / r)) / Gh;
}
function ud(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: va })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, f = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(U, N = null) {
    d && d(U, N);
  }
  function y(U, N, E = null, $ = performance.now()) {
    return f.drag.active = !0, f.drag.lastX = Number(U || 0), f.drag.lastY = Number(N || 0), f.drag.lastTs = Number($ || performance.now()), f.drag.pointerId = E, f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.lastTs = f.drag.lastTs, f.velHistory = [], v("drag", { phase: "start", x: f.drag.lastX, y: f.drag.lastY, pointerId: E }), !0;
  }
  function x(U, N, E = "pano", $ = performance.now()) {
    if (!f.drag.active) return !1;
    const D = Number($ || performance.now()), W = Number(U), z = Number(N), q = W - f.drag.lastX, T = z - f.drag.lastY;
    f.drag.lastX = W, f.drag.lastY = z, f.drag.lastTs = D;
    const O = r() || { x: 1, y: 1 }, le = Number(O.x || 1), J = Number(O.y || 1), X = { ...t() };
    let ge = 0, Ae = 0;
    if (E === "unwrap") {
      const I = o() || { w: 1, h: 1 }, $e = Math.max(1, Number(I.w || 1)), B = Math.max(1, Number(I.h || 1)), He = q / $e, rt = T / B;
      ge = -He * 360 * le, Ae = rt * 180 * J;
    } else {
      const I = s() || { w: 0, h: 0 }, $e = Math.max(1, Number(I.w || 0)), B = Math.max(1, Number(I.h || 0));
      if ($e > 1 && B > 1) {
        const He = Z(Number(X.fov || va), 1, 179), rt = Z(j_(He, $e, B), 0.1, 179);
        ge = -(q / $e) * He * le, Ae = T / B * rt * J;
      } else
        ge = -q * Kh * le, Ae = T * Kh * J;
    }
    X.yaw = $t(Number(X.yaw || 0) + ge), X.pitch = Z(Number(X.pitch || 0) + Ae, -89.9, 89.9), n(X), f.velHistory.push({ ts: D, yaw: X.yaw, pitch: X.pitch });
    let se = 0;
    for (; se < f.velHistory.length - 1 && f.velHistory[se].ts < D - 100; ) se++;
    return se > 0 && f.velHistory.splice(0, se), f.inertia.active = !1, f.inertia.lastTs = D, u(), v("drag", { phase: "move", dx: q, dy: T, dYaw: ge, dPitch: Ae }), !0;
  }
  function k(U = performance.now()) {
    if (!f.drag.active) return !1;
    f.drag.active = !1;
    const N = Number(U || performance.now());
    f.drag.lastTs = N;
    const E = f.velHistory.filter((D) => N - D.ts <= 80);
    if (E.length >= 2) {
      const D = E[0], W = E.at(-1), z = Math.max(1e-3, (W.ts - D.ts) / 1e3);
      let q = W.yaw - D.yaw;
      q > 180 && (q -= 360), q < -180 && (q += 360), f.inertia.vx = q / z, f.inertia.vy = (W.pitch - D.pitch) / z;
    } else
      f.inertia.vx = 0, f.inertia.vy = 0;
    f.velHistory = [];
    const $ = Math.hypot(f.inertia.vx, f.inertia.vy);
    return f.inertia.active = $ > z_, f.inertia.lastTs = N, v("drag", { phase: "end", speed: $, inertiaActive: f.inertia.active }), !0;
  }
  function P(U = performance.now()) {
    if (!f.inertia.active) return !1;
    const N = Number(U || performance.now()), E = Math.max(1e-3, (N - (f.inertia.lastTs || N)) / 1e3);
    f.inertia.lastTs = N;
    const $ = { ...t() };
    $.yaw = $t(Number($.yaw || 0) + f.inertia.vx * E), $.pitch = Z(Number($.pitch || 0) + f.inertia.vy * E, -89.9, 89.9);
    const D = Math.exp(-5.5 * E);
    return f.inertia.vx *= D, f.inertia.vy *= D, Math.abs(f.inertia.vx) < Bh && Math.abs(f.inertia.vy) < Bh && (f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.active = !1), n($), u(), f.inertia.active;
  }
  function S() {
    const U = f.drag.active || f.inertia.active || f.inertia.vx !== 0 || f.inertia.vy !== 0;
    return f.drag.active = !1, f.drag.pointerId = null, f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, f.velHistory = [], U;
  }
  function _(U) {
    const N = Math.sign(Number(U || 0));
    if (!N) return !1;
    const E = { ...t() }, $ = Number(E.fov || va);
    return E.fov = Z($ + N * R_, $_, V_), n(E), u(), v("wheel", { deltaSign: N, fovBefore: $, fovAfter: E.fov }), !0;
  }
  function F(U, N = 0) {
    return _(cd(U, N));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: va }), f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, u();
  }
  return {
    state: f,
    startDrag: y,
    moveDrag: x,
    endDrag: k,
    stepInertia: P,
    stopMotion: S,
    applyWheel: _,
    applyWheelEvent: F,
    resetView: V
  };
}
const tn = Math.PI / 180, kn = 180 / Math.PI;
function qn(e, t, n) {
  return { x: e, y: t, z: n };
}
function al(e, t) {
  return qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function sl(e, t) {
  return qn(e.x * t, e.y * t, e.z * t);
}
function Vc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function dd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return qn(e.x / t, e.y / t, e.z / t);
}
function On(e, t) {
  const n = e * tn, r = t * tn, o = Math.cos(r);
  return qn(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Bo(e, t, n = 0) {
  const r = Number(e || 0) * tn, o = Number(t || 0) * tn, s = n * tn, u = Math.cos(r), d = Math.sin(r), f = Math.cos(o), v = Math.sin(o), y = Math.cos(s), x = Math.sin(s);
  return {
    right: qn(
      u * y - d * v * x,
      f * x,
      -d * y - u * v * x
    ),
    up: qn(
      -u * x - d * v * y,
      f * y,
      d * x - u * v * y
    ),
    fwd: qn(d * f, v, u * f)
  };
}
function ll(e) {
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
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (d.widthScale = Math.max(0, r)), o != null && (d.pressureLike = Math.max(0, o)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const s = pt(e.u, null), u = pt(e.v, null);
    if (s == null || u == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: s,
      v: u,
      t: n
    };
    return r != null && (d.widthScale = Math.max(0, r)), o != null && (d.pressureLike = Math.max(0, o)), d;
  }
  return null;
}
function xs(e, t, n = 1) {
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
    const f = xs(e.points, t, 3);
    return f ? { geometryKind: o, points: f } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const s = xs(e.points, t, 1);
  if (!s) return null;
  const u = xs(e.rawPoints, t, 1), d = xs(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: s,
    rawPoints: u || s.map((f) => ({ ...f })),
    processedPoints: d || s.map((f) => ({ ...f }))
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
  const d = String(e.id || "").trim(), f = String(e.actionGroupId || "").trim();
  if (!d || !f) return null;
  const v = pt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const k = e.color;
    if (!k || typeof k != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, pt(k.r, 0))),
      g: Math.max(0, Math.min(1, pt(k.g, 0))),
      b: Math.max(0, Math.min(1, pt(k.b, 0))),
      a: Math.max(0, Math.min(1, pt(k.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: f,
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
function Wh(e, t) {
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
  const s = (d) => Math.max(0, Math.min(1, d)), u = { u0: s(t), v0: s(n), u1: s(r), v1: s(o) };
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
function To(e) {
  const t = H_();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: G_(e.groups),
    paint: Wh(e.paint, "paint"),
    mask: Wh(e.mask, "mask"),
    raster_objects: J_(e.raster_objects)
  };
}
const Or = 1, Tr = 179, vu = 85;
function Fl(e) {
  const t = ((Ze(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Xm(e, t) {
  let n = Ze(e, 0) - Ze(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function qm(e, t, { shiftKey: n = !1 } = {}) {
  let r = Ze(e, 0) + Ze(t, 0) * kn;
  return n && (r = Math.round(r / 15) * 15), Fl(r);
}
function Ze(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ri(e = {}) {
  const t = Z(Ze(e.hFOV_deg || 90, 90), Or, Tr), n = Z(Ze(e.vFOV_deg || 60, 60), Or, Tr), r = Math.tan(t * tn * 0.5), o = Math.tan(n * tn * 0.5);
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
function Wi(e, t) {
  const n = Math.max(1, Ze((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Ze((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = ri(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function fd(e, t) {
  const n = Math.max(1, Ze((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Ze((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Ze(t, 1)), s = Math.min(n, r * o);
  return { width: s, height: s / o };
}
function hd(e, t) {
  const n = Math.max(1e-12, Ze(t, 1)), r = Math.max(1e-6, Ze((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Ze((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), s = Z(2 * Math.atan(r / (2 * n)) * kn, Or, Tr), u = Z(2 * Math.atan(o / (2 * n)) * kn, Or, Tr);
  return { hFOV_deg: s, vFOV_deg: u };
}
function Z_(e, t, n) {
  const r = Ze(e == null ? void 0 : e.x, 0), o = Ze(e == null ? void 0 : e.y, 0), s = Math.max(1, Ze((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, Ze((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), d = ri(t), f = Math.max(1e-12, Ze(n, 1)), v = 2 * f * d.tanHalfX, y = 2 * f * d.tanHalfY;
  return {
    x: r + (s - v) * 0.5,
    y: o + (u - y) * 0.5,
    w: v,
    h: y,
    focalPx: f
  };
}
function pd(e, t, n = vu) {
  const r = Math.max(1e-12, Ze(t, 1)), o = Z(Ze(n, vu), 1, 89.999), s = r * Math.tan(o * tn), u = Math.max(1, Ze((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), d = Math.max(1, Ze((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, s),
    halfH: Math.min(d * 0.5, s)
  };
}
function Jm(e, t, n) {
  const r = Math.max(1e-12, Ze(t, 1));
  return {
    x: (Ze(n == null ? void 0 : n.x, 0) - Ze(e == null ? void 0 : e.x, 0)) / r,
    y: -(Ze(n == null ? void 0 : n.y, 0) - Ze(e == null ? void 0 : e.y, 0)) / r
  };
}
function js(e, t) {
  const n = Z(Ze(e, 60), Or, Tr), r = Math.max(1e-6, Ze(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * tn * 0.5) * r) * kn,
    Or,
    Tr
  );
}
function Uh(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Q_(e, t) {
  const n = Uh(e, 1), r = Uh(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, s = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(r * o)), d = (v, y) => y ? d(y, v % y) : v, f = d(s, u) || 1;
  return `${Math.max(1, Math.round(s / f))}:${Math.max(1, Math.round(u / f))}`;
}
function Ui(e) {
  const t = Z(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * tn, n = Z(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * tn;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function $i(e) {
  const t = Ui(e), r = [
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
function Zm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = $i(t), t;
}
function Qm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: s = null
} = {}) {
  const u = s == null || String(s).trim() === "" ? NaN : Number(s), d = Number.isFinite(u) ? Z(u, Or, Tr) : Z(Math.min(42, Ze(o, 100) * 0.42), 8, 96);
  return Zm({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Ze(t, 0),
    pitch_deg: Z(Ze(n, 0), -89.9, 89.9),
    roll_deg: Fl(r),
    hFOV_deg: d,
    vFOV_deg: d,
    locked: !1
  });
}
function Wr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : $i(e);
}
function eg(e, t) {
  const n = ri(e), r = Ze(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * kn, s = 2 * Math.atan(n.tanHalfY * r) * kn;
  return o < Or || o > Tr || s < Or || s > Tr ? null : { hFOV_deg: o, vFOV_deg: s };
}
function tg(e, t, n = bu) {
  const r = Math.sign(Ze(t, 0)), o = Math.abs(Ze(n, bu));
  if (!r || !(o > 0)) return null;
  const s = ri(e), u = s.hFovDeg + r * o;
  if (u < Or || u > Tr) return null;
  const d = Math.tan(u * tn * 0.5);
  return eg(e, d / s.tanHalfX);
}
function ng(e, t) {
  const n = ri(e), r = Bo(n.yawDeg, n.pitchDeg, n.rollDeg), o = Ze(t == null ? void 0 : t.x, 0), s = Ze(t == null ? void 0 : t.y, 0);
  return dd(al(al(r.fwd, sl(r.right, o)), sl(r.up, s)));
}
function ex(e) {
  return qn(e.x, e.y, -e.z);
}
function Hs(e) {
  return qn(e.x, e.y, -e.z);
}
function Dl(e, t, n = 0) {
  const { right: r, up: o, fwd: s } = Bo(e, t, n);
  return [
    [r.x, o.x, -s.x],
    [r.y, o.y, -s.y],
    [-r.z, -o.z, s.z]
  ];
}
function tx(e) {
  const t = Hs(qn(e[0][0], e[1][0], e[2][0])), n = Hs(qn(e[0][1], e[1][1], e[2][1])), r = Hs(qn(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), s = Math.atan2(r.y, Math.hypot(r.x, r.z)), u = Math.cos(o), d = Math.sin(o), f = Math.atan2(d * n.z - u * n.x, u * t.x - d * t.z);
  return { yawDeg: o * kn, pitchDeg: s * kn, rollDeg: f * kn };
}
function rg(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, s = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * s), 2 * (n * o + r * s)],
    [2 * (n * r + o * s), 1 - 2 * (n * n + o * o), 2 * (r * o - n * s)],
    [2 * (n * o - r * s), 2 * (r * o + n * s), 1 - 2 * (n * n + r * r)]
  ];
}
function Ll(e) {
  const [[t, n, r], [o, s, u], [d, f, v]] = e, y = t + s + v;
  if (y > 0) {
    const k = 0.5 / Math.sqrt(y + 1);
    return { x: (f - u) * k, y: (r - d) * k, z: (o - n) * k, w: 0.25 / k };
  }
  if (t > s && t > v) {
    const k = 2 * Math.sqrt(1 + t - s - v);
    return { x: 0.25 * k, y: (n + o) / k, z: (r + d) / k, w: (f - u) / k };
  }
  if (s > v) {
    const k = 2 * Math.sqrt(1 + s - t - v);
    return { x: (n + o) / k, y: 0.25 * k, z: (u + f) / k, w: (r - d) / k };
  }
  const x = 2 * Math.sqrt(1 + v - t - s);
  return { x: (r + d) / x, y: (u + f) / x, z: 0.25 * x, w: (o - n) / x };
}
function ws(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ji = 1e-6, _u = 1e-6, nx = 1e-9;
function La(e, t, n, r, o) {
  const s = 1 - o;
  return s * s * s * e + 3 * s * s * o * t + 3 * s * o * o * n + o * o * o * r;
}
function rx(e, t) {
  if (e === "auto") return t;
  const [n, r, o, s] = e;
  let u = 0, d = 1;
  for (let f = 0; f < 50; f += 1) {
    const v = 0.5 * (u + d);
    La(0, n, o, 1, v) < t ? u = v : d = v;
  }
  return La(0, r, s, 1, 0.5 * (u + d));
}
function jo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ho(e, t, n, r) {
  const o = e[t] - e[t - 1], s = e[t + 1] - e[t], u = n.map((k) => -k / o), d = r.map((k) => k / s);
  if (u.reduce((k, P, S) => k + P * d[S], 0) < 0) return n.map(() => 0);
  const f = u.map((k, P) => (k * s + d[P] * o) / (o + s)), v = (k) => Math.sqrt(k.reduce((P, S) => P + S * S, 0)), y = 3 * Math.min(v(u), v(d)), x = v(f);
  return x <= y ? f : f.map((k) => k * y / x);
}
function ig(e, t, n, r) {
  const o = n[r], s = n[r + 1], u = t[r + 1] - t[r], d = o.map((y, x) => s[x] - y);
  let f = d;
  jo(e, r) && (f = Ho(t, r, n[r - 1].map((y, x) => y - o[x]), d).map((y) => y * u));
  let v = d;
  return jo(e, r + 1) && (v = Ho(t, r + 1, d.map((y) => -y), n[r + 2].map((y, x) => y - s[x])).map((y) => y * u)), [f.map((y) => y / 3), v.map((y) => -y / 3)];
}
function og(e, t, n, r, o) {
  const [[s], [u]] = ig(e, t, n.map((d) => [d]), r);
  return La(n[r], n[r] + s, n[r + 1] + u, n[r + 1], o);
}
function ix(e, t, n, r) {
  var v, y;
  const o = e.map((x) => x.value);
  let [s, u] = ig(e, t, o, n);
  s = ((v = e[n].handles) == null ? void 0 : v.out) ?? s, u = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? u;
  const d = o[n], f = o[n + 1];
  return [0, 1, 2].map((x) => La(d[x], d[x] + s[x], f[x] + u[x], f[x], r));
}
function cl([e, t, n, r], [o, s, u, d]) {
  return [
    r * o + e * d + t * u - n * s,
    r * s - e * u + t * d + n * o,
    r * u + e * s - t * o + n * d,
    r * d - e * o - t * s - n * u
  ];
}
function ox(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function zc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function ax([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), s = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * s, t * s, n * s];
}
function xu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Po(e, t) {
  return ax(cl([-e[0], -e[1], -e[2], e[3]], t));
}
function jc(e, t, n) {
  return cl(e, xu(Po(e, t).map((r) => n * r)));
}
function Hc(e, t) {
  const n = ox(e, t);
  if (Math.abs(n) > _u) return n < 0;
  const [r, o, s] = Po(e, t);
  for (const u of [-o, r, s])
    if (Math.abs(u) > _u) return u < 0;
  return !1;
}
function Ss(e) {
  const { x: t, y: n, z: r, w: o } = Ll(Dl(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function wu(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function sx(e, t, n, r) {
  const o = Ss(e[n].value);
  let s = Ss(e[n + 1].value);
  Hc(o, s) && (s = zc(s));
  const u = t[n + 1] - t[n], d = Po(o, s);
  let f = d;
  if (jo(e, n)) {
    let $ = Ss(e[n - 1].value);
    Hc($, o) && ($ = zc($)), f = Ho(t, n, Po(o, $), d).map((D) => D * u);
  }
  let v = d;
  if (jo(e, n + 1)) {
    let $ = Ss(e[n + 2].value);
    Hc(s, $) && ($ = zc($)), v = Ho(t, n + 1, Po(s, o), Po(s, $)).map((D) => D * u);
  }
  const y = cl(o, xu(f.map(($, D) => 0.5 * ($ - d[D])))), x = cl(s, xu(d.map(($, D) => 0.5 * ($ - v[D])))), [k, P, S, _] = jc(jc(o, s, r), jc(y, x, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: V, rollDeg: U } = tx(rg({ x: k, y: P, z: S, w: _ })), N = e[n].value, E = e[n + 1].value;
  return {
    yaw_deg: wu(F, N.yaw_deg, E.yaw_deg, r),
    pitch_deg: V,
    roll_deg: wu(U, N.roll_deg, E.roll_deg, r)
  };
}
function Ra(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function ul(e) {
  return Math.sqrt(Ra(e, e));
}
function dl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function ag(e, t) {
  const n = Ra(e, t), r = t.map((u, d) => u - n * e[d]), o = ul(r), s = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((u) => u * s);
}
function Mo(e, t) {
  const n = ul(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, s) => Math.cos(n) * o + r * t[s]);
}
function ks(e, t, n) {
  return Mo(e, ag(e, t).map((r) => n * r));
}
function Gc(e, t) {
  const n = dl(e[t].value), r = dl(e[t + 1].value), o = Ra(n, r), s = o < 0 && ul(r.map((f, v) => f - o * n[v])) <= _u;
  let u;
  if (s) {
    const f = e[t].value.yaw_deg * Math.PI / 180;
    u = [Math.PI * Math.cos(f), 0, -Math.PI * Math.sin(f)];
  } else
    u = ag(n, r);
  const d = ul(u);
  return [u, u.map((f, v) => Math.cos(d) * f - d * Math.sin(d) * n[v]), s];
}
function lx(e, t, n, r) {
  const o = dl(e[n].value), s = dl(e[n + 1].value), [u, d, f] = Gc(e, n);
  let v = u, y = d;
  const x = t[n + 1] - t[n];
  jo(e, n) && (v = Ho(t, n, Gc(e, n - 1)[1].map((N) => -N), v).map((N) => N * x)), jo(e, n + 1) && (y = Ho(t, n + 1, y.map((N) => -N), Gc(e, n + 1)[0]).map((N) => N * x));
  let k, P, S;
  if (f) {
    const N = Math.PI, E = La(0, Ra(v, u) / N / 3, N - Ra(y, d) / N / 3, N, r);
    [k, P, S] = Mo(o, u.map(($) => E * $ / N));
  } else {
    const N = ks(Mo(o, v.map((D) => D / 3)), Mo(s, y.map((D) => -D / 3)), r), E = ks(Mo(o, v.map((D) => r * D / 3)), N, r), $ = ks(N, Mo(s, y.map((D) => -(1 - r) * D / 3)), r);
    [k, P, S] = ks(E, $, r);
  }
  const _ = Math.hypot(k, S), F = e[n].value.yaw_deg, V = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= nx ? F + (V - F) * r : wu(Math.atan2(k, S) * 180 / Math.PI, F, V, r), pitch_deg: Math.atan2(P, _) * 180 / Math.PI };
}
function cx(e, t, n, r) {
  const o = {};
  for (const s of ["hFOV_deg", "vFOV_deg"]) o[s] = og(e, t, e.map((u) => u.value[s]), n, r);
  return o;
}
function ux(e, t, n, r) {
  return og(e, t, e.map((o) => o.value), n, r);
}
const dx = { position: ix, rotation: sx, direction: lx, size: cx };
function Kt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return ws(e[t].value);
  if (n <= r[0].frame + ji) return ws(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - ji) return ws(o.value);
  let s = 0;
  for (; r[s + 1].frame <= n + ji; ) s += 1;
  const u = r[s];
  if (Math.abs(n - u.frame) <= ji || u.easing === "hold") return ws(u.value);
  const d = r.map((v) => v.frame), f = rx(u.easing, (n - d[s]) / (d[s + 1] - d[s]));
  return (dx[t] ?? ux)(r, d, s, f);
}
function Su(e) {
  return Math.min(179, Math.max(0.1, e));
}
function fx(e) {
  return Math.min(1, Math.max(0, e));
}
function sg(e) {
  return Math.max(1e-6, e);
}
function lg(e, t) {
  return t - (e.start - e.in);
}
function Vi(e, t) {
  return t >= e.start - ji && (e.duration === null || t < e.start + e.duration - ji);
}
function hx(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, s = lg(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Kt(r, "position", n),
      ...Kt(r, "rotation", n),
      hFOV_deg: Su(Kt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Vi(o.clip, n),
      clip_frame: s,
      position: Kt(o, "position", s),
      ...Kt(o, "rotation", s),
      scale: sg(Kt(o, "scale", s))
    },
    stickers: e.stickers.map((u) => Rl(u, n))
  };
}
function px(e, t) {
  if (e.placement === "world")
    return {
      position: Kt(e, "position", t),
      ...Kt(e, "rotation", t),
      scale: sg(Kt(e, "scale", t))
    };
  const n = Kt(e, "size", t);
  return {
    ...Kt(e, "direction", t),
    roll_deg: Kt(e, "roll", t),
    hFOV_deg: Su(n.hFOV_deg),
    vFOV_deg: Su(n.vFOV_deg)
  };
}
function Rl(e, t) {
  const n = lg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Vi(e.clip, t),
    clip_frame: n,
    ...px(e, n),
    opacity: fx(Kt(e, "opacity", n))
  };
}
const mx = 2, gx = ["sky", "world"], yx = ["input", "output", "temp"], cg = [0.42, 0, 0.58, 1];
function Xt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Dt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function ku(e, t) {
  const n = Dt(e, t);
  return n !== null && n > 0 ? n : t;
}
function Yn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Fo(e) {
  const t = Dt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Yh(e, t) {
  return typeof e == "boolean" ? e : t;
}
function ug(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Dt(n, null));
  return t.includes(null) ? null : t;
}
function dg(e) {
  return ug(e) || [0, 0, 0];
}
function fg(e) {
  const t = Xt(e) ? e : {};
  return {
    yaw_deg: Dt(t.yaw_deg, 0),
    pitch_deg: Yn(Dt(t.pitch_deg, 0), -90, 90),
    roll_deg: Dt(t.roll_deg, 0)
  };
}
function bx(e) {
  return Yn(Dt(e, 90), 0.1, 179);
}
function vx(e) {
  return ku(e, 1);
}
function _x(e) {
  const t = Xt(e) ? e : {};
  return {
    yaw_deg: Dt(t.yaw_deg, 0),
    pitch_deg: Yn(Dt(t.pitch_deg, 0), -90, 90)
  };
}
function xx(e) {
  return Dt(e, 0);
}
function wx(e) {
  const t = Xt(e) ? e : {};
  return {
    hFOV_deg: Yn(Dt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Yn(Dt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function hg(e) {
  return Yn(Dt(e, 1), 0, 1);
}
const pg = [["position", dg], ["rotation", fg], ["fov", bx]], md = [["position", dg], ["rotation", fg], ["scale", vx]], mg = [["direction", _x], ["roll", xx], ["size", wx], ["opacity", hg]], gg = [...md, ["opacity", hg]];
function Sx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Dt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...cg];
}
function kx(e) {
  if (!Xt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = ug(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Mx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!Xt(o)) continue;
    const s = Fo(o.frame);
    if (s === null) continue;
    const u = { frame: s, value: t(o.value), easing: Sx(o.easing) }, d = n ? kx(o.handles) : null;
    d && (u.handles = d), r.set(s, u);
  }
  return [...r.keys()].sort((o, s) => o - s).map((o) => r.get(o));
}
function Mu(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const s = Xt(e[r]) ? e[r] : {};
    n[r] = { value: o(s.value), keyframes: Mx(s.keyframes, o, r === "position") };
  }
  return n;
}
function yg(e) {
  const t = Xt(e) ? e : {}, n = Fo(t.start), r = Fo(t.in), o = Fo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function Nx(e) {
  const t = Xt(e) ? e : {}, n = Yn(Dt(t.x0, 0), 0, 1), r = Yn(Dt(t.y0, 0), 0, 1), o = Yn(Dt(t.x1, 1), 0, 1), s = Yn(Dt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, s), x1: Math.max(n, o), y1: Math.max(r, s) };
}
function Px(e) {
  if (!Xt(e)) return null;
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
    clip: yg(e.clip),
    visible: Yh(e.visible, !0),
    locked: Yh(e.locked, !1),
    crop: Nx(e.crop),
    ...Mu(e, r ? gg : mg)
  };
  return r || (o.z_index = Fo(e.z_index) ?? 0), o;
}
function Cx(e) {
  const t = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const u = Xt(s) ? Ax(s) : null;
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
function Nu(e) {
  const t = Xt(e.timeline) ? e.timeline : {}, n = Xt(e.camera) ? e.camera : {}, r = Xt(e.scene) ? e.scene : {}, o = Fo(t.length);
  return {
    version: mx,
    timeline: {
      fps: ku(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: ku(n.aspect, 1), ...Mu(n, pg) },
    scene: { clip: yg(r.clip), ...Mu(r, md) },
    stickers: Cx(e.stickers),
    painting: To(e.painting),
    painting_layer: Xt(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Ix(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Xt(n)) return null;
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
  if (!Xt(t)) return {};
  const n = Yn(Dt(t.hFOV_deg, 90), 1, 179), r = Yn(Dt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Ox(e) {
  const t = Xt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Xt) : [];
  return n.sort((r, o) => Dt(r.z_index, 0) - Dt(o.z_index, 0)), Nu({
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
function $a(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Nu({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Xt(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Ox(t) : Nu(t);
}
function Kc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function bg(e) {
  return Array.isArray(e) ? [...e] : e;
}
function gd(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ji);
}
function vg(e, t, n) {
  const r = e.keyframes.findIndex((s) => s.frame > t), o = r > 0 ? bg(e.keyframes[r - 1].easing) : [...cg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Yi(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Kc(o.value, r);
    return;
  }
  const s = gd(o, n);
  s ? s.value = Kc(s.value, r) : vg(o, n, Kc(Kt(e, t, n), r));
}
function Wo(e) {
  return e.placement === "world" ? gg.map(([t]) => t) : e.placement === "sky" ? mg.map(([t]) => t) : (e.clip ? md : pg).map(([t]) => t);
}
function Tx(e, t) {
  for (const n of Wo(e))
    gd(e[n], t) || vg(e[n], t, Kt(e, n, t));
}
function Fx(e) {
  const t = Wo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function Dx(e, t) {
  return Wo(e).every((n) => !!gd(e[n], t));
}
function Lx(e, t, n, r) {
  const o = new Set(n);
  for (const s of t) {
    const u = e[s];
    if (!u.keyframes.some((f) => o.has(f.frame))) continue;
    const d = Kt(e, s, r);
    u.keyframes = u.keyframes.filter((f) => !o.has(f.frame)), u.keyframes.length || (u.value = d);
  }
}
function Rx(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const s = new Set(n);
  for (const u of t) {
    const d = e[u], f = d.keyframes.filter((y) => s.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), v = new Set(f.map((y) => y.frame));
    d.keyframes = [
      ...d.keyframes.filter((y) => !s.has(y.frame) && !v.has(y.frame)),
      ...f
    ].sort((y, x) => y.frame - x.frame);
  }
  return r;
}
function _g(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((s) => e[s].keyframes.slice(0, -1).filter((u) => n.length > 1 ? u.frame >= r && u.frame < o : u.frame === r));
}
function $x(e, t, n) {
  const r = _g(e, t, n);
  if (!r.length) return null;
  const o = r.some((s) => JSON.stringify(s.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function Vx(e, t, n, r) {
  for (const o of _g(e, t, n)) o.easing = bg(r);
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
function Xh(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Pu(e) {
  return Wo(e).map((t) => e[t]);
}
function qh(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Pu(t).some((n) => n.keyframes.length > 0)) || !Xh(e.scene.clip) || e.stickers.some((t) => !Xh(t.clip));
}
function Gx(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = Math.max(e.timeline.length ?? t, n);
  for (const s of Pu(e.camera))
    for (const u of s.keyframes) o = Math.max(o, u.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: u } = s;
    o = Math.max(o, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of Pu(s))
      for (const f of d.keyframes) o = Math.max(o, u.start - u.in + f.frame + 1);
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
let Ms = { text: null, parsed: null };
function $n(e) {
  return Number(e) === 180 ? 180 : 360;
}
function fl(e) {
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
    coverage: $n(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: To(null),
    painting_layer: null,
    ui_settings: fl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function xg(e, t = 2048) {
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
  return Array.isArray(e) ? e.map((t) => Zm(t)) : [];
}
function Xx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((u) => String((u == null ? void 0 : u.id) || "") === r) || n[0], s = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: s };
}
function wg(e, t = {}) {
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
    if (Ms.text === o ? s = Ms.parsed : (s = JSON.parse(o), Ms = { text: o, parsed: s }), !s || typeof s != "object" || Array.isArray(s)) return r;
    const u = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, d = {
      ...r,
      ...s,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Wx(s.assets),
      stickers: Ux(s.stickers),
      shots: Yx(s.shots),
      painting: To(s.painting),
      painting_layer: s.painting_layer && typeof s.painting_layer == "object" ? s.painting_layer : null,
      ui_settings: fl(s.ui_settings),
      active: s.active && typeof s.active == "object" ? { ...s.active } : { ...r.active }
    };
    return u && (d.ui_settings = fl({ ...d.ui_settings, ...u })), d.output_preset = xg(
      n.outputPreset,
      Number(d.output_preset || r.output_preset)
    ), d.bg_color = String(n.backgroundColor || d.bg_color || r.bg_color), d.coverage = $n(n.coverage), delete d.editor_history, d;
  } catch {
    return Ms = { text: o, parsed: null }, r;
  }
}
function Jh(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Sg(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: s = null, active: u } = t;
  let d;
  try {
    d = $a(e);
  } catch {
    d = $a(null);
  }
  return {
    ...d,
    coverage: $n(o),
    bg_color: r,
    output_preset: xg(n),
    ui_settings: fl(s),
    active: { selected_sticker_id: null, selected_shot_id: null, ...u }
  };
}
function yd(e, t) {
  const n = Rl(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const qx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Zh(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Jx(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[qx[n]].keyframes.length));
}
function kg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = Zh(n, ["yaw_deg", "pitch_deg"]), s = Zh(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Yi(e, "direction", r, o), n.rot_deg !== void 0 && Yi(e, "roll", r, n.rot_deg), Object.keys(s).length && Yi(e, "size", r, s);
}
const Mg = ["position_x", "position_y", "position_z"];
function Zx(e, t) {
  const n = Kt(e, "position", t), r = Kt(e, "rotation", t);
  return {
    ...Object.fromEntries(Mg.map((o, s) => [o, n[s]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Kt(e, "fov", t)
  };
}
function Qx(e, t, n, r) {
  const o = Mg.indexOf(n);
  if (o >= 0) {
    const s = Kt(e, "position", t);
    s[o] = r, Yi(e, "position", t, s);
  } else n === "hFOV_deg" ? Yi(e, "fov", t, r) : Yi(e, "rotation", t, { [n]: r });
}
function ew(e, t, n) {
  Yi(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function Gs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ng(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function bd(e, t, n, r) {
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
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = $t(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Pg(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Ag(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Cg(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Ig(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? $a(t) : t);
}
const Qh = 2048, Eg = 0.28;
function Og(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * tn);
  return {
    quaternion: Ll(Dl(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * kn,
    aspect: r
  };
}
function Ks(e) {
  const t = ri(e);
  return {
    quaternion: Ll(Dl(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function nw(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: s } = pd(n, r), u = t.x + t.w * 0.5, d = t.y + t.h * 0.5;
  return {
    rect: { x: u - o, y: d - s, w: o * 2, h: s * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * kn,
      vFOV_deg: 2 * Math.atan(s / r) * kn
    }
  };
}
function Tg(e, t, n) {
  const [[r, o, s], [u, d, f], [v, y, x]] = rg(e.quaternion), k = Math.tan(e.fovY_deg * 0.5 * tn), P = k * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, _ = 1e-4) {
      const F = ex(S), V = r * F.x + u * F.y + v * F.z, U = o * F.x + d * F.y + y * F.z, N = -(s * F.x + f * F.y + x * F.z), E = Math.max(N, _);
      return {
        x: t * 0.5 * (1 + V / E / P),
        y: n * 0.5 * (1 - U / E / k),
        z: N
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, _) {
      const F = (S / t * 2 - 1) * P, V = (1 - _ / n * 2) * k;
      return dd(Hs({
        x: r * F + o * V - s,
        y: u * F + d * V - f,
        z: v * F + y * V - x
      }));
    }
  };
}
function rw(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const s = hx(e, t), u = [];
  e.stickers.forEach((d, f) => {
    const v = s.stickers[f];
    if (d.placement !== "sky") return;
    const y = d.source.kind === "port" && !d.visible;
    if (!v.active && !y) return;
    const x = n(d);
    if (!x) return;
    const k = Math.tan(v.hFOV_deg * 0.5 * tn), P = Math.tan(v.vFOV_deg * 0.5 * tn), { crop: S } = d;
    u.push({
      kind: "sticker",
      id: d.id,
      media: x.media,
      revision: x.revision,
      opacity: y ? Eg : v.opacity,
      zIndex: r(d),
      quaternion: Ll(Dl(v.yaw_deg, v.pitch_deg, v.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * k,
        x1: (2 * S.x1 - 1) * k,
        y0: (1 - 2 * S.y1) * P,
        y1: (1 - 2 * S.y0) * P
      }
    });
  });
  for (const d of o) u.push({ kind: "erp", ...d });
  return u.sort((d, f) => d.zIndex - f.zIndex);
}
function Fg(e, t, n, { media: r, paintLayers: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !s.has(u.id) && s.set(u.id, u);
  return rw(e, t, {
    media: (u) => {
      const d = s.get(u.id);
      return d ? r(d) : null;
    },
    zIndex: (u) => {
      var d;
      return Number(((d = s.get(u.id)) == null ? void 0 : d.z_index) || 0);
    },
    paintLayers: o
  });
}
const Bc = /* @__PURE__ */ new WeakMap();
let iw = 1;
function ep(e) {
  return Bc.has(e) || Bc.set(e, iw++), Bc.get(e);
}
function tp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [ep(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, ep(n.media), n.revision, n.opacity, n.quaternion, n.rect])
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
const Dg = "3D view unavailable. Check the browser console.";
function hl(e, t, n) {
  return Og({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
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
      t = u, o.forEach((d) => d.onChange());
    }).catch((u) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", u), o.forEach((d) => d.onChange()));
    }));
  }
  return function(d) {
    const f = { onChange: d };
    let v = !1;
    return o.add(f), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(y) {
        return v ? null : (s(), t ? t.render({ ...y, owner: f }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(f);
      },
      dispose() {
        v || (v = !0, o.delete(f), t == null || t.release(f), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Lg = aw(
  () => import("./.lazy/pano_three_view-DtiQ-hzq.js").then((e) => e.createThreeView())
);
function Rg({
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
  let u = null, d = !1, f = !1;
  const v = () => u || e(), y = () => s(n(v()));
  return {
    model: () => n(v()),
    refresh() {
      return f ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return f || u ? !1 : (u = e(), d = !1, y(), !0);
    },
    updateGesture(x) {
      if (f) return !1;
      u || this.beginGesture();
      const k = t(u, x);
      return k.changed ? (u = k.state, d = !0, r(u), y(), !0) : !1;
    },
    hasGestureChanges() {
      return u != null && d;
    },
    commitGesture() {
      if (f || !u) return !1;
      const x = d;
      return x && o(u), u = null, d = !1, r(null), y(), x;
    },
    cancelGesture() {
      return f || !u ? !1 : (u = null, d = !1, r(null), y(), !0);
    },
    apply(x) {
      if (f) return !1;
      u && this.commitGesture();
      const k = t(e(), x);
      return k.changed ? (o(k.state), y(), !0) : !1;
    },
    destroy() {
      if (f) return;
      f = !0;
      const x = u != null;
      u = null, d = !1, x && r(null);
    }
  };
}
const pl = Math.PI / 180, Nr = 180 / Math.PI, sw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), lw = 260;
function np(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function $g(e, t) {
  return t ? $g(t, e % t) : e;
}
function cw(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, s = r ? 1 : Math.max(e, t), u = Math.max(1, Math.round(e / s * o)), d = Math.max(1, Math.round(t / s * o)), f = $g(u, d) || 1;
  return `${Math.round(u / f)}:${Math.round(d / f)}`;
}
function Va(e, t) {
  const n = np(e), r = np(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: cw(n, r) };
}
function Xi(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Vg(e) {
  const t = Xi(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Wr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function vd(e, t, n = sw) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), s = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), v = (F, V, U) => {
    const N = F + V, E = Math.max(0, U - 1), $ = N > E && N > 0 ? E / N : 1;
    return [F * $, V * $];
  }, [y, x] = v(f, u, r), [k, P] = v(s, d, o), S = {
    x: y,
    y: k,
    w: Math.max(1, r - y - x),
    h: Math.max(1, o - k - P)
  }, _ = fd(S, t);
  return {
    x: S.x + (S.w - _.width) * 0.5,
    y: S.y + (S.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: S
  };
}
function uw(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = vd({ width: n, height: r }, 1), s = Z(Number((e == null ? void 0 : e.fov) || 100), 1, 179), u = n / (2 * Math.tan(s * pl * 0.5)), d = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, v = ng(f, Jm(
    { x: n * 0.5, y: r * 0.5 },
    u,
    d
  )), y = dw(v, Bo(
    f.yaw_deg,
    f.pitch_deg,
    f.roll_deg
  ).right), x = hd({ width: o.w, height: o.h }, u);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: x.hFOV_deg
  };
}
function zg(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Nr),
    pitch: Z(Math.asin(Z(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Nr, -89.9, 89.9)
  };
}
function dw(e, t) {
  const n = zg(e), r = Bo(n.yaw, n.pitch, 0), o = Vc(t, e), s = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, u = Math.hypot(s.x, s.y, s.z);
  if (!(u > 1e-8)) return { ...n, roll: 0 };
  const d = {
    x: s.x / u,
    y: s.y / u,
    z: s.z / u
  };
  return {
    ...n,
    roll: Fl(Math.atan2(
      Vc(d, r.up),
      Vc(d, r.right)
    ) * Nr)
  };
}
function jg(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = vd({ width: n, height: r }, Ui(e)), s = Wi(o, e), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = ng(e, Jm(
    u,
    s,
    { x: n * 0.5, y: r * 0.5 }
  )), f = zg(d);
  return {
    yaw: f.yaw,
    pitch: f.pitch,
    fov: Z(2 * Math.atan(n / (2 * s)) * Nr, 1, 179)
  };
}
function fw(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), s = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, u = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, d = Wi(t, n), f = {
    width: Math.max(s, r - s) * 2,
    height: Math.max(u, o - u) * 2
  }, { halfW: v, halfH: y } = pd(f, d), x = {
    x: s - v,
    y: u - y,
    w: v * 2,
    h: y * 2
  }, k = x.x <= 0 && x.y <= 0 && x.x + x.w >= r && x.y + x.h >= o, P = r / o, S = Math.tan(vu * pl), _ = P >= 1 ? S : S * P, F = P >= 1 ? S / P : S;
  return {
    focalPx: d,
    rect: x,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(v / d) * Nr,
      vFOV_deg: 2 * Math.atan(y / d) * Nr
    },
    fallback: k ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(_) * Nr,
        vFOV_deg: 2 * Math.atan(F) * Nr
      }
    }
  };
}
function yo(e, t) {
  const n = Xi(e);
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
    const u = Wi(n, e);
    return hd(fd(n, t), u);
  }
  const s = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: s, hFOV_deg: js(s, t) };
}
function rp(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let s = Va(t, n);
  if (!s) return e;
  const u = Ui(e) >= 1;
  r && s.ratio >= 1 !== u && (s = Va(s.height, s.width));
  const d = hw(e, s.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - d.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - d.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === s.label ? e : { ...e, ...d, aspect_id: s.label };
}
function Hg(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Xi(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Qm({
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
    const r = Xi(e);
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
    return yo(e, (r) => rp(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return yo(e, (r) => {
      const s = String(Wr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), u = s ? Va(s[1], s[2]) : Va(Ui(r), 1);
      return u ? rp(r, u.height, u.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? yo(e, (o) => {
      const s = Fl(r), u = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(u - s) <= 1e-12) return o;
      const d = { ...o, roll_deg: s };
      return delete d.rot_deg, d;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? yo(e, (r) => {
    const o = eg(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? yo(e, (r) => {
    const o = tg(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? yo(e, (r) => {
    const o = Bg(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Gg({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: s = !1,
  deadZoneRatio: u = 0.05
} = {}) {
  const d = s && o ? "alt" : r ? "shift" : "";
  if (!d || !e || !t) return null;
  const f = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, v = {
    x: f.x + f.w * 0.5,
    y: f.y + f.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - v.x, Number(t.y || 0) - v.y);
  if (d === "shift" && y < Math.min(f.w, f.h) * u) return null;
  const x = Math.atan2(Number(t.y || 0) - v.y, Number(t.x || 0) - v.x);
  return {
    source: d,
    frame: f,
    center: v,
    startRollDeg: Number(n || 0),
    lastAngle: x,
    accumulatedRad: 0
  };
}
function Kg(e, t, n = {}) {
  var u, d;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((u = e.center) == null ? void 0 : u.y) || 0),
    Number(t.x || 0) - Number(((d = e.center) == null ? void 0 : d.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + Xm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: qm(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Bg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, s = Number(t.dx || 0) * r, u = Number(t.dy || 0) * o, d = Number(e.roll_deg ?? e.rot_deg ?? 0) * pl, f = Math.cos(d), v = Math.sin(d), y = s / n, x = -u / n, k = y * f - x * v, P = y * v + x * f, S = Number(e.pitch_deg || 0) * pl, _ = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(k) / _ * Nr),
    pitch_deg: Z(Number(e.pitch_deg || 0) - Math.atan(P) * Nr, -90, 90)
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
  return Rg({
    readState: e,
    reduce: Hg,
    projectModel: Vg,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Pe = Object.freeze({
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
}, ip = Object.fromEntries(
  Object.entries(yw).map(([e, t]) => [e, {
    name: t.name,
    elements: gw(t.body)
  }])
), It = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ct(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(ip, r) ? ip[r] : null;
    });
    return (r, o) => n.value ? (oe(), de("svg", {
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
      (oe(!0), de(Be, null, xt(n.value.elements, (s, u) => (oe(), de(Be, {
        key: `${n.value.name || e.icon || "icon"}-${s.tag}-${u}`
      }, [
        s.tag === "path" ? (oe(), de("path", vi({
          key: 0,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "circle" ? (oe(), de("circle", vi({
          key: 1,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "rect" ? (oe(), de("rect", vi({
          key: 2,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "line" ? (oe(), de("line", vi({
          key: 3,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "polyline" ? (oe(), de("polyline", vi({
          key: 4,
          ref_for: !0
        }, s.attrs), null, 16)) : s.tag === "polygon" ? (oe(), de("polygon", vi({
          key: 5,
          ref_for: !0
        }, s.attrs), null, 16)) : st("", !0)
      ], 64))), 128))
    ], 2)) : st("", !0);
  }
}, en = {
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
    return (r, o) => (oe(), Fr(lv(e.tag), vi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: mm(() => [
        Te(It, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, bw = ["aria-expanded", "disabled"], vw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, _w = ["data-aspect", "disabled", "onClick"], xw = { class: "pano-cutout-aspect-custom" }, ww = ["disabled"], Sw = ["disabled"], kw = ["data-custom-width", "data-custom-height", "disabled"], Wg = {
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
    ]), s = /* @__PURE__ */ qt("1"), u = /* @__PURE__ */ qt("1"), d = /* @__PURE__ */ qt(null), f = ct(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), v = ct(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return _.length ? _.map((V) => {
        const U = typeof V == "string" ? V : String((V == null ? void 0 : V.value) || ""), N = typeof V == "string" ? V : String((V == null ? void 0 : V.label) || U);
        return {
          ...typeof V == "object" && V ? V : {},
          value: U,
          label: N,
          active: F ? U === F : (V == null ? void 0 : V.active) === !0
        };
      }) : o.map((V) => ({
        ...V,
        active: V.value === F
      }));
    }), y = ct(() => {
      var F;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((F = v.value.find((V) => V.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    Ki(y, (_) => {
      const F = String(_ || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (s.value = F[1], u.value = F[2]);
    }, { immediate: !0 });
    function x(_) {
      r("action", _);
    }
    function k(_) {
      var F;
      n.model.aspectOpen === !0 && ((F = d.value) != null && F.contains(_.target) || x({ type: "close-aspect" }));
    }
    Il(() => {
      document.addEventListener("pointerdown", k, !0);
    }), Wa(() => {
      document.removeEventListener("pointerdown", k, !0);
    });
    function P(_) {
      const [F, V] = String(_.value || "").split(":");
      x({
        type: "set-aspect",
        width: F,
        height: V,
        preserveOrientation: !0
      });
    }
    function S() {
      x({
        type: "set-aspect",
        width: s.value,
        height: u.value,
        preserveOrientation: !1
      });
    }
    return (_, F) => (oe(), de("div", {
      ref_key: "rootElement",
      ref: d,
      class: it(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (oe(), Fr(en, {
        key: 0,
        icon: e.model.aspectIcon || et(Pe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: f.value },
        onClick: F[0] || (F[0] = (V) => x({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (oe(), de("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: f.value,
        onClick: F[1] || (F[1] = (V) => x({ type: "toggle-aspect" }))
      }, [
        Te(It, {
          icon: e.model.aspectIcon || et(Pe).aspect
        }, null, 8, ["icon"]),
        K("span", null, tt(y.value), 1),
        Te(It, {
          icon: et(Pe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, bw)),
      Qr(K("div", vw, [
        (oe(!0), de(Be, null, xt(v.value, (V) => (oe(), de("button", {
          key: V.value,
          class: it(["pano-btn pano-frame-aspect-choice", { active: V.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": V.value,
          disabled: f.value,
          onClick: (U) => P(V)
        }, tt(V.label), 11, _w))), 128)),
        K("div", xw, [
          Qr(K("input", {
            "onUpdate:modelValue": F[2] || (F[2] = (V) => s.value = V),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: f.value
          }, null, 8, ww), [
            [Lh, s.value]
          ]),
          F[4] || (F[4] = K("span", { "aria-hidden": "true" }, ":", -1)),
          Qr(K("input", {
            "onUpdate:modelValue": F[3] || (F[3] = (V) => u.value = V),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: f.value
          }, null, 8, Sw), [
            [Lh, u.value]
          ]),
          K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": s.value,
            "data-custom-height": u.value,
            disabled: f.value,
            onClick: S
          }, "Apply", 8, kw)
        ])
      ], 512), [
        [qi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Mw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Nw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (oe(), de("div", {
      class: it(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Gt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Gt(() => {
      }, ["stop"]))
    }, [
      Te(en, {
        icon: et(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Gt((s) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      K("div", Mw, [
        o[3] || (o[3] = K("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (oe(!0), de(Be, null, xt(et(n), (s) => (oe(), de("div", {
          key: s[0],
          class: "pano-cutout-node-help-row"
        }, [
          K("kbd", null, tt(s[0]), 1),
          K("span", null, tt(s[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Pw = {
  class: "pano-view-unavailable",
  role: "status"
}, _d = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (oe(), de("div", Pw, tt(et(Dg)), 1));
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
    return (r, o) => (oe(), de("div", Aw, [
      K("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Gt(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Gt(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (s) => n({ type: "open-editor" }))
        }, [
          Te(It, {
            icon: et(Pe).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        Te(en, {
          icon: e.model.hasShot ? et(Pe).delete : et(Pe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (s) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Te(Wg, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        K("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Gt((s) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Te(It, {
            icon: et(Pe).roll
          }, null, 8, ["icon"]),
          K("span", Iw, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Cw),
        Te(en, {
          icon: et(Pe).rotate_90,
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
      e.model.hasShot === !1 ? (oe(), de("div", Ew, " Choose a view · + Add Frame ")) : st("", !0),
      e.model.viewUnavailable ? (oe(), Fr(_d, { key: 1 })) : st("", !0)
    ]));
  }
}, Ug = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ qt(null);
    let s, u = !1;
    function d() {
      if (!u) return { active: !1, intent: void 0 };
      const x = s;
      return s = void 0, u = !1, { active: !0, intent: x };
    }
    function f(x) {
      const k = o.value;
      return k instanceof HTMLInputElement ? (s = x, u = !0, k.value = "", k.click(), !0) : !1;
    }
    function v(x) {
      var _, F;
      const { active: k, intent: P } = d();
      if (!k) return;
      const S = ((F = (_ = x.target) == null ? void 0 : _.files) == null ? void 0 : F[0]) || null;
      if (S) {
        r("file-selected", { intent: P, file: S });
        return;
      }
      r("file-cancelled", { intent: P });
    }
    function y() {
      const { active: x, intent: k } = d();
      x && r("file-cancelled", { intent: k });
    }
    return t({ open: f }), (x, k) => (oe(), de("input", {
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
    const t = /* @__PURE__ */ qt(!1), n = Object.freeze([
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
    return (r, o) => (oe(), de("div", {
      class: it(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Gt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Gt(() => {
      }, ["stop"]))
    }, [
      Te(en, {
        icon: et(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Gt((s) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      K("div", Tw, [
        o[3] || (o[3] = K("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (oe(!0), de(Be, null, xt(et(n), (s) => (oe(), de("div", {
          key: s[0],
          class: "pano-stickers-node-help-row"
        }, [
          K("kbd", null, tt(s[0]), 1),
          K("span", null, tt(s[1]), 1)
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
    const t = e, n = /* @__PURE__ */ qt(null);
    function r(u) {
      var d;
      (d = t.onAction) == null || d.call(t, u);
    }
    function o() {
      var u, d;
      (d = (u = n.value) == null ? void 0 : u.open) == null || d.call(u, "add");
    }
    function s(u) {
      r({ type: "add-image-file", file: (u == null ? void 0 : u.file) || null });
    }
    return (u, d) => (oe(), de("div", Dw, [
      K("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: d[5] || (d[5] = Gt(() => {
        }, ["stop"])),
        onWheel: d[6] || (d[6] = Gt(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: d[0] || (d[0] = (f) => r({ type: "open-editor" }))
        }, [
          Te(It, {
            icon: et(Pe).fullscreen
          }, null, 8, ["icon"]),
          d[7] || (d[7] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Te(It, {
            icon: et(Pe).image
          }, null, 8, ["icon"]),
          d[8] || (d[8] = K("span", { class: "label" }, "Add Image", -1))
        ], 8, Lw),
        Te(en, {
          icon: e.model.locked ? et(Pe).lock_closed : et(Pe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: d[1] || (d[1] = (f) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Te(en, {
          icon: et(Pe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: d[2] || (d[2] = (f) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Te(en, {
          icon: et(Pe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: d[3] || (d[3] = (f) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Te(en, {
          icon: e.model.isExternalSelection ? et(Pe).back_initial : et(Pe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: d[4] || (d[4] = (f) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Te(Fw)
      ], 32),
      e.model.hasStickers === !1 ? (oe(), de("div", Rw, " Add Image to place a sticker ")) : st("", !0),
      e.model.dropActive === !0 ? (oe(), de("div", $w, "Drop image to add")) : st("", !0),
      Te(Ug, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: s
      }, null, 512),
      e.model.viewUnavailable ? (oe(), Fr(_d, { key: 2 })) : st("", !0)
    ]));
  }
}, Bs = "sticker_image_1", Yg = "external_image", za = 0;
function Do(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), s = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, s));
}
function Wc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function wi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Au(e) {
  return (e == null ? void 0 : e.version) !== 2 ? wi(e) : wi(e).map((t) => ({
    id: t.id,
    z_index: t.z_index,
    locked: t.locked,
    visible: Rl(t, za).active,
    external: t.source.kind === "port",
    ...yd(t, za)
  }));
}
function xd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && wi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Xg(e) {
  return String((e == null ? void 0 : e.id) || "") === Bs || String((e == null ? void 0 : e.source_kind) || "") === Yg;
}
function wd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Xg(t);
}
const qg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Jg(e) {
  return !Xg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(qg.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Zg(e) {
  const t = Jg(e);
  return t ? qg.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Qg(e, t = {}) {
  var E, $, D;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((W) => String((W == null ? void 0 : W.id) || "") === Bs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const W = String(((E = e.active) == null ? void 0 : E.selected_sticker_id) || "") === Bs;
    return {
      state: {
        ...e,
        stickers: n.filter((z, q) => q !== r),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), s = String(t.stateHash || ""), u = r >= 0 ? n[r] : null, d = !u || Number(u.source_link_id ?? -1) !== o || String(u.source_state_hash || "") !== s, f = Number(t.imageWidth || 0), v = Number(t.imageHeight || 0), y = f > 0 && v > 0, x = Math.max(1, f), k = Math.max(1, v), P = t.pose && typeof t.pose == "object" ? t.pose : {}, S = d ? P.hFOV_deg || (u == null ? void 0 : u.hFOV_deg) || 30 : (u == null ? void 0 : u.hFOV_deg) || P.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(S)));
  if (!d) {
    if (!y) return { state: e, changed: !1 };
    const W = Do(_, x, k), z = Number((($ = u == null ? void 0 : u.initial_pose) == null ? void 0 : $.hFOV_deg) ?? _), q = Do(z, x, k), T = Number(((D = u == null ? void 0 : u.initial_pose) == null ? void 0 : D.vFOV_deg) ?? q);
    return Math.abs(Number((u == null ? void 0 : u.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(T - q) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((O, le) => le === r ? {
          ...O,
          vFOV_deg: W,
          initial_pose: O.initial_pose && typeof O.initial_pose == "object" ? { ...O.initial_pose, vFOV_deg: q } : O.initial_pose
        } : O)
      },
      changed: !0
    };
  }
  const F = n.reduce((W, z) => Math.max(W, Number((z == null ? void 0 : z.z_index) || 0)), -1), V = {
    yaw_deg: Number(P.yaw_deg || 0),
    pitch_deg: Number(P.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: y ? Do(_, x, k) : Number(P.vFOV_deg || (u == null ? void 0 : u.vFOV_deg) || _),
    rot_deg: Number(P.rot_deg ?? P.roll_deg ?? 0)
  }, U = {
    ...u || {},
    id: Bs,
    source_kind: Yg,
    source_link_id: o,
    source_state_hash: s,
    ...V,
    initial_pose: { ...V },
    visible: !0,
    z_index: F + 1
  }, N = r >= 0 ? n.map((W, z) => z === r ? U : W) : [...n, U];
  return { state: { ...e, stickers: N }, changed: !0 };
}
function op(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
function e0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: op(e, "sticker"),
    awaitingPose: !t && op(e, "sticker_state"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function t0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: s = 0 } = {}) {
  var P;
  const u = e.stickers.findIndex((S) => wd(e, S)), d = u >= 0 ? e.stickers[u] : null;
  if (!t) {
    if (!d) return { state: e, changed: !1 };
    const S = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === d.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((_, F) => F !== u),
        active: S ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const f = o > 0 && s > 0;
  if (d) {
    if (!f) return { state: e, changed: !1 };
    const S = [d.size.value, ...d.size.keyframes.map((V) => V.value)], _ = S.map((V) => Do(V.hFOV_deg, o, s));
    if (S.every((V, U) => Math.abs(V.vFOV_deg - _[U]) <= 1e-6)) return { state: e, changed: !1 };
    const F = {
      value: { ...d.size.value, vFOV_deg: _[0] },
      keyframes: d.size.keyframes.map((V, U) => ({ ...V, value: { ...V.value, vFOV_deg: _[U + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((V, U) => U === u ? { ...V, size: F } : V) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const v = new Set(e.stickers.map((S) => S.id));
  let y = 1;
  for (; v.has(`sticker_${y}`); ) y += 1;
  const x = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), k = bd(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: x,
    vFOV_deg: f ? Do(x, o, s) : x
  }, wi(e).reduce((S, _) => Math.max(S, _.z_index), -1) + 1);
  return { state: { ...e, stickers: [...e.stickers, k] }, changed: !0 };
}
function Sd(e) {
  const t = wi(e).filter((s) => s && typeof s == "object").map((s) => ({
    type: "sticker",
    id: String(s.id || ""),
    z_index: Wc(s.z_index),
    item: s
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((s) => s && typeof s == "object").map((s) => ({
    type: "strokeGroup",
    id: String(s.actionGroupId || s.id || ""),
    z_index: Wc(s.z_index),
    item: s
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((s) => s && typeof s == "object" && String(s.layerKind || "paint") === "paint").map((s) => ({
    type: "rasterObject",
    id: String(s.id || ""),
    z_index: Wc(s.z_index),
    item: s
  }));
  return [...t, ...r, ...o].sort((s, u) => s.z_index - u.z_index);
}
function n0(e) {
  const t = xd(e), n = wd(e, t), r = wi(e).some((d) => d && d.visible !== !1), o = Sd(e), s = t ? o.findIndex((d) => d.type === "sticker" && d.item === t) : -1, u = (t == null ? void 0 : t.locked) === !0;
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
function ap(e, t) {
  const n = xd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = zw(e), o = String(n.id || ""), s = Sd(r), u = s.findIndex((f) => f.type === "sticker" && f.id === o);
  if (u < 0) return { state: e, changed: !1 };
  if (t === "front" && u === s.length - 1 || t === "back" && u === 0)
    return { state: e, changed: !1 };
  const [d] = s.splice(u, 1);
  return t === "front" ? s.push(d) : s.unshift(d), s.forEach((f, v) => {
    f.item.z_index = v;
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
  if (t.type === "sync-port") return t0(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, s = String(o.stickerId || "").trim(), u = String(o.assetId || "").trim();
    if (!s || !u || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((k) => String((k == null ? void 0 : k.id) || "") === s))
      return { state: e, changed: !1 };
    const f = Sd(e).reduce((k, P) => Math.max(k, Number(P.z_index || 0)), -1), v = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: v,
      vFOV_deg: Do(v, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, bd(s, Gs(o.asset), y, f + 1)],
          active: { ...e.active || {}, selected_sticker_id: s }
        },
        changed: !0
      };
    const x = { id: s, asset_id: u, ...y, z_index: f + 1 };
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
    return !o || !wi(e).some((s) => String((s == null ? void 0 : s.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = xd(e);
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
  if (t.type === "bring-front") return ap(e, "front");
  if (t.type === "send-back") return ap(e, "back");
  if (t.type === "delete-selected") {
    if (wd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((f) => f === n ? { ...f, visible: !1 } : f)
        },
        changed: !0
      };
    const o = e.stickers.filter((f) => f !== n), s = wi({ ...e, stickers: o })[0], u = (s == null ? void 0 : s.id) == null ? null : String(s.id), d = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: u }
    };
    return e.version !== 2 && (d.assets = jw(d)), { state: d, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, s = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], u = e.version === 2 ? yd(n, za) : n, d = {};
    if (s.forEach((f) => {
      const v = Number(o[f]);
      Number.isFinite(v) && Math.abs(v - Number(u[f] || 0)) > 1e-12 && (d[f] = v);
    }), !Object.keys(d).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const f = Jx(n, d);
      if (!Object.keys(f).length) return { state: e, changed: !1 };
      const v = structuredClone(n);
      return kg(v, za, f), { state: { ...e, stickers: e.stickers.map((y) => y === n ? v : y) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((f) => f === n ? { ...f, ...d } : f)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function Gw(e = {}) {
  return Rg({
    ...e,
    reduce: Hw,
    projectModel: n0
  });
}
const sp = 24;
function Kw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function lp(e, t) {
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
function Cu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => lp(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, s = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * s >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return lp(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Bw(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function kd(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((s) => {
    r ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function r0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function pa(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Z(n.x, -r, t.width + r),
    y: Z(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function Ww(e) {
  const t = Bo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Z(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * tn * 0.5),
    tanY: Math.tan(Z(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * tn * 0.5)
  };
}
function Ti(e, t, n) {
  return dd(al(
    al(e.centerDir, sl(e.right, t)),
    sl(e.up, n)
  ));
}
function Md(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = Ww(e), r = pa(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Ti(n, -n.tanX, n.tanY),
    Ti(n, n.tanX, n.tanY),
    Ti(n, n.tanX, -n.tanY),
    Ti(n, -n.tanX, -n.tanY)
  ].map((k) => pa(k, t)), s = Array.from({ length: 4 }, (k, P) => {
    const S = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const F = _ / 28;
      let V, U;
      P === 0 ? (V = -n.tanX + 2 * n.tanX * F, U = n.tanY) : P === 1 ? (V = n.tanX, U = n.tanY - 2 * n.tanY * F) : P === 2 ? (V = n.tanX - 2 * n.tanX * F, U = -n.tanY) : (V = -n.tanX, U = -n.tanY + 2 * n.tanY * F);
      const N = pa(Ti(n, V, U), t);
      N && S.push({ x: N.x, y: N.y });
    }
    return S;
  }), u = pa(Ti(n, 0, n.tanY), t), d = pa(
    Ti(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), f = [r, ...o, u, d];
  if (f.some((k) => !k || !Number.isFinite(k.x) || !Number.isFinite(k.y)))
    return { visible: !1 };
  if (!f.some((k) => k.rawZ > 1e-4)) return { visible: !1 };
  const v = d.x - u.x, y = d.y - u.y, x = Math.hypot(v, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((k) => ({ x: k.x, y: k.y })),
    boundaryEdges: s,
    rotateStemBase: { x: u.x, y: u.y },
    rotateHandle: {
      x: u.x + v / x * sp,
      y: u.y + y / x * sp
    },
    visible: !0
  };
}
function cp(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((u) => u && u.visible !== !1).map((u) => ({ item: u, geometry: Md(u, r) })).filter((u) => u.geometry.visible).sort((u, d) => {
    var f, v;
    return Number(((f = d.item) == null ? void 0 : f.z_index) || 0) - Number(((v = u.item) == null ? void 0 : v.z_index) || 0);
  }), s = o.find((u) => {
    var d;
    return String(((d = u.item) == null ? void 0 : d.id) || "") === String(t || "");
  });
  if (s) {
    const u = Cu(s.geometry, n);
    if (u.kind === "scale" || u.kind === "rotate") return { ...s, hit: u };
  }
  for (const u of o) {
    const d = Cu(u.geometry, n);
    if (d.kind !== "none") return { ...u, hit: d };
  }
  return null;
}
function Uw(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(r.x, r.z) * kn),
    pitch_deg: Math.asin(Z(r.y, -1, 1)) * kn
  };
}
function Yw(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Z(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Z(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function Xw(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * kn;
  let s = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (s = Math.round(s / 45) * 45), { ...e, rot_deg: s };
}
let Ns = null;
function Nd() {
  return Ns || (Ns = new Promise((e) => {
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
  }), Ns);
}
function Un(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function qw(e, t = 1024) {
  const n = Math.max(1, Math.round(Un(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Un(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function Jw(e, t, n) {
  const r = Un(t), o = Un(n), s = e == null ? void 0 : e.bbox;
  if (!s || r < 1 || o < 1) return null;
  const u = Un(s.u0), d = Un(s.v0), f = Un(s.u1), v = Un(s.v1);
  if (f <= u || v <= d) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((u + f) * 0.5 + Un(y.du)) * r,
    centerY: ((d + v) * 0.5 + Un(y.dv)) * o,
    width: (f - u) * r,
    height: (v - d) * o,
    rotationRad: Un(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Un(y.scale, 1)),
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
    let d = e.get(s);
    if (d)
      return e.delete(s), e.set(s, d), !d.settled && typeof u == "function" && d.listeners.add(u), d.image;
    const f = new Image();
    d = { image: f, listeners: new Set(typeof u == "function" ? [u] : []), settled: !1 }, e.set(s, d);
    const v = () => {
      d.settled = !0;
      const y = [...d.listeners];
      d.listeners.clear(), y.forEach((x) => x()), n();
    };
    return f.onload = v, f.onerror = v, f.src = s, n(), f;
  }
  function o(s, u, d, f = null) {
    if (!s || s.visible === !1 || String(s.layerKind || "paint") !== "paint") return null;
    const v = String(s.rasterDataUrl || "").trim(), y = Jw(s, u, d);
    if (!v.startsWith("data:") || !y) return null;
    const x = Zw(s, u, d), k = String((s == null ? void 0 : s.id) || "").trim() || x, P = t.get(k);
    if ((P == null ? void 0 : P.revision) === x) return { source: P.source, revision: x };
    const S = r(v, f), _ = Number(S.naturalWidth || S.width || 0), F = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || _ < 1 || F < 1) return null;
    const V = document.createElement("canvas");
    V.width = Math.max(1, Math.round(u)), V.height = Math.max(1, Math.round(d));
    const U = V.getContext("2d");
    return U ? (y.wrapOffsets.forEach((N) => {
      U.save(), U.translate(y.centerX + N, y.centerY), U.rotate(y.rotationRad), U.scale(y.scale, y.scale), U.drawImage(
        S,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), U.restore();
    }), t.set(k, { revision: x, source: V }), { source: V, revision: x }) : null;
  }
  return {
    get: o,
    retain(s = []) {
      const u = new Set(Array.from(s, (d) => String(d || "").trim()).filter(Boolean));
      for (const d of t.keys())
        u.has(d) || t.delete(d);
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
    const k = r.get(x.owner);
    (k == null ? void 0 : k.get(x.key)) === x && k.delete(x.key);
  }
  function u(x, k, P, S) {
    if (!x || typeof S != "function" || P.settled) return;
    let _ = r.get(x);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(x, _));
    const F = _.get(k);
    if ((F == null ? void 0 : F.entry) === P) {
      F.callback = S;
      return;
    }
    s(F);
    const V = { owner: x, key: k, entry: P, callback: S };
    _.set(k, V), P.listeners.add(V);
  }
  function d(x, k) {
    x.settled || (x.settled = !0, x.image.onload = null, x.image.onerror = null, !k && n.get(x.key) === x && n.delete(x.key), [...x.listeners].forEach((P) => {
      s(P);
      try {
        P.callback(x.image, k);
      } catch {
      }
    }), f(o));
  }
  function f(x) {
    if (!(n.size <= x))
      for (const [k, P] of n) {
        if (n.size <= x) break;
        !P.settled || P.listeners.size > 0 || (P.image.onload = null, P.image.onerror = null, n.delete(k));
      }
  }
  function v(x, k, P, S = null) {
    const _ = String(k || ""), F = String(P || "");
    if (!_ || !F) return null;
    let V = n.get(_);
    if (V)
      n.delete(_), n.set(_, V);
    else {
      f(o - 1);
      const N = e || globalThis.Image;
      if (typeof N != "function") return null;
      const E = new N();
      V = { key: _, image: E, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, V), E.onload = () => d(V, !0), E.onerror = () => d(V, !1), E.src = F;
    }
    return V.settled || V.image.complete && Number(V.image.naturalWidth || V.image.width || 0) > 0 || u(x, _, V, S), V.image;
  }
  function y(x) {
    const k = r.get(x);
    k && ([...k.values()].forEach(s), r.delete(x), f(o));
  }
  return { get: v, disposeOwner: y };
}
function ml(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function qr(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = ml(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function up(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    ml(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function rS(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    ml(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = ml(e);
  Object.keys(r).forEach((o) => {
    r[o] = !0;
  });
}
const Uo = ["erp_image", "bg_erp", "bg_media"], iS = ["sticker_image", "sticker"];
function dp(e, t, n, r = Uo) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const u = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((u == null ? void 0 : u.name) || ""));
}
function oS(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (s) => String((s == null ? void 0 : s.src) || (s == null ? void 0 : s.url) || s || "").trim();
  for (const s of t) {
    const u = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[s], e == null ? void 0 : e[s]];
    for (const d of u)
      if (Array.isArray(d))
        for (const f of d) {
          const v = r(f);
          if (v && (/\.mp4(\?|$)/i.test(v) || String((f == null ? void 0 : f.format) || "").toLowerCase() === "video/mp4"))
            return v;
        }
  }
  return "";
}
function aS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var S;
  const r = ((S = e == null ? void 0 : e.createElement) == null ? void 0 : S.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let s = !1, u = 0;
  const d = typeof r.requestVideoFrameCallback == "function", f = () => {
    s || !d || u || r.paused || r.ended || (u = r.requestVideoFrameCallback(() => {
      u = 0, !s && (o(), f());
    }));
  }, v = () => {
    if (!s) {
      o();
      try {
        Promise.resolve(r.play()).then(f).catch(() => {
        });
      } catch {
      }
    }
  }, y = () => o(), x = () => {
    o(), f();
  }, k = () => o();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", v, { once: !0 }), r.addEventListener("canplay", v, { once: !0 }), d || r.addEventListener("timeupdate", y), r.addEventListener("play", x), r.addEventListener("pause", k), r.src = t, r.load(), { video: r, destroy: () => {
    var _, F;
    s || (s = !0, u && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(u), u = 0), r.removeEventListener("loadedmetadata", v), r.removeEventListener("canplay", v), r.removeEventListener("timeupdate", y), r.removeEventListener("play", x), r.removeEventListener("pause", k), r.pause(), (_ = r.removeAttribute) == null || _.call(r, "src"), (F = r.load) == null || F.call(r));
  } };
}
const _a = /* @__PURE__ */ new WeakMap();
function i0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = _a.get(e);
  r || (r = [], _a.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let s = !0;
  return () => {
    if (!s) return;
    s = !1;
    const u = _a.get(e);
    if (!u) return;
    const d = u.indexOf(o);
    d >= 0 && u.splice(d, 1), u.length === 0 && _a.delete(e);
  };
}
function Jr(e, ...t) {
  const n = _a.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const gl = "state_json";
function Zr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function sS(e) {
  var u, d;
  const t = Zr(e, gl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = wg(n, {
    coverage: (u = Zr(e, "coverage")) == null ? void 0 : u.value
  }), o = Hg(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const s = JSON.stringify(o.state);
  return t.value = s, (d = t.callback) == null || d.call(t, s), !0;
}
function Pd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Zr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var u, d, f, v, y, x, k, P, S;
    const s = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (d = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || d.call(u), (v = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || v.call(f), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (k = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || k.call(x, !0, !0), (S = (P = t == null ? void 0 : t.canvas) == null ? void 0 : P.setDirty) == null || S.call(P, !0, !0), s;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function lS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function fp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function cS(e) {
  var y, x, k, P, S, _;
  if (!e) return;
  const t = Zr(e, "coverage"), n = Zr(e, "bg_color"), r = Zr(e, gl), o = Zr(e, "sticker_state");
  if (!t || !n || !r) return;
  const s = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), d = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && lS(s) && (fp(u) || u === ""))) return;
  let v = "360";
  if (fp(u))
    try {
      v = String($n((y = JSON.parse(u)) == null ? void 0 : y.coverage));
    } catch {
      v = "360";
    }
  t.value = v, (x = t.callback) == null || x.call(t, v), n.value = s, (k = n.callback) == null || k.call(n, s), r.value = u, (P = r.callback) == null || P.call(r, u), o && (o.value = d, (S = o.callback) == null || S.call(o, d)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Ws(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var s, u;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.element) != null && s.style && (r.element.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function Iu(e, t, n) {
  var s, u;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (s = o.element) != null && s.style && (o.element.style.display = ""), (u = o.parentEl) != null && u.style && (o.parentEl.style.display = "");
    const d = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(d) || Number(d[0] || 0) <= 0 || Number(d[1] || 0) <= 0) && (o.computeSize = () => {
      var f;
      return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function uS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, s]) => {
        n.get(o) === s && n.delete(o);
      });
    }
}
function xa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, s = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), u = s.catch(() => {
  });
  e.__panoStickerOperationTail = u, e.__panoPendingStickerUploads.set(t, s);
  const d = () => {
    var f, v;
    ((v = (f = e.__panoPendingStickerUploads) == null ? void 0 : f.get) == null ? void 0 : v.call(f, t)) === s && e.__panoPendingStickerUploads.delete(t);
  };
  return s.then(d, d), u.then(() => {
    e.__panoStickerOperationTail === u && (e.__panoStickerOperationTail = null);
  }), s;
}
async function o0(e, t = {}) {
  var r;
  await uS(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function dS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await o0(e), n ? n.apply(this, r) : this.value;
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
function hS(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Uc(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: s,
  attachCutout: u,
  enableStickersPreview: d,
  sceneStateV2: f = !1
}) {
  if (!(e != null && e.prototype)) return;
  function v(y) {
    var P;
    const x = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === x) return;
    fS(y), Pd(y, t), Ws(y, gl);
    const k = Zr(y, gl);
    if (dS(y, k), k && !k.__panoPreviewPatchedCb) {
      k.__panoPreviewPatchedCb = !0;
      const S = k.callback;
      k.callback = (_) => {
        var V;
        const F = S ? S(_) : void 0;
        return (V = y.setDirtyCanvas) == null || V.call(y, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = f;
      const S = Zr(y, "bg_color");
      !f && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (P = S.callback) == null || P.call(S, "#00ff00")), Iu(y, r, () => o(y, "stickers")), d && (s(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && Ws(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
      return;
    }
    Iu(y, r, () => o(y, "cutout")), u(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && Ws(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[y];
    e.prototype[y] = function() {
      const k = x ? x.apply(this, arguments) : void 0;
      y === "onNodeCreated" && n === "PanoramaCutout" && sS(this), y === "onConfigure" && n === "PanoramaStickers" && !f && this.widgets && cS(this);
      const P = !!this.__panoPreviewAttached;
      return (y === "onNodeCreated" || this.widgets) && v(this), y === "onAdded" && P && Jr(this, "attach"), k;
    };
  }
}
function pS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return hS(this), r;
  };
}
function mS(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const s = () => {
    const u = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), d = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = d, !u && d < 40) {
      o(s);
      return;
    }
    Pd(e, t);
    const f = (v = e) => n(v, "stickers", { readOnly: !0, hideSidebar: !1 });
    Iu(e, "Open Preview", () => f(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: f
    }), e.__panoPreviewNodeSurface && Ws(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(s);
}
function gS({
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
    beforeRegisterNodeDef(d, f) {
      const v = String((f == null ? void 0 : f.name) || "");
      (v === "PanoramaStickers" || v === "Panorama Stickers") && Uc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), v === "PanoramaStickersNode" && Uc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (v === "PanoramaCutout" || v === "Panorama Cutout") && Uc(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), ll(v) && pS(d);
    },
    nodeCreated(d) {
      const f = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Pd(d, e), ll(f) && mS(d, { app: e, openEditor: t, attachPreview: o, requestFrame: s });
    }
  };
}
const yS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Pr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : yS.test(String(e.name || "")) : !1;
}
function Ad(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Pr(n)) : !1;
}
function bS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (f) => {
    var v, y, x;
    (v = f == null ? void 0 : f.preventDefault) == null || v.call(f), (y = f == null ? void 0 : f.stopPropagation) == null || y.call(f), (x = f == null ? void 0 : f.stopImmediatePropagation) == null || x.call(f);
  }, s = (f) => {
    if (Ad(f == null ? void 0 : f.dataTransfer)) {
      o(f);
      try {
        f.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, u = (f) => {
    var v;
    f != null && f.relatedTarget && ((v = e.contains) != null && v.call(e, f.relatedTarget)) || n(!1);
  }, d = (f) => {
    var y;
    const v = Array.from(((y = f == null ? void 0 : f.dataTransfer) == null ? void 0 : y.files) || []).find((x) => Pr(x));
    if (!v) {
      n(!1);
      return;
    }
    o(f), n(!1), r(v);
  };
  return e.addEventListener("dragenter", s, !0), e.addEventListener("dragover", s, !0), e.addEventListener("dragleave", u, !0), e.addEventListener("drop", d, !0), () => {
    e.removeEventListener("dragenter", s, !0), e.removeEventListener("dragover", s, !0), e.removeEventListener("dragleave", u, !0), e.removeEventListener("drop", d, !0), n(!1);
  };
}
async function wa(e, t = {}) {
  var u, d, f, v;
  if (!Pr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((d = (u = globalThis.URL) == null ? void 0 : u.createObjectURL) == null ? void 0 : d.bind(globalThis.URL)), o = t.revokeObjectURL || ((v = (f = globalThis.URL) == null ? void 0 : f.revokeObjectURL) == null ? void 0 : v.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const s = r(e);
  try {
    const y = await new Promise((x, k) => {
      const P = new n();
      P.onload = () => x(P), P.onerror = () => k(new Error("image load failed")), P.src = s;
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
async function Ri(e, { fetchApi: t } = {}) {
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
const hp = /* @__PURE__ */ new WeakSet(), pp = /* @__PURE__ */ new WeakSet();
let mp = 0;
function Eu(e) {
  if (!e || typeof e != "object" || pp.has(e)) return e;
  const t = String(e.type || "preview");
  return mp += 1, e.type = `${t}:pano-${mp}`, pp.add(e), e;
}
function yl(e) {
  if (!e || typeof e != "object" || hp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, hp.add(e), e;
}
function a0(e, t) {
  var r, o;
  if (!t || ((o = (r = yl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function vS({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, s = !1;
  return { schedule: (f) => s || r || typeof e != "function" ? !1 : (o = f, r = e(() => {
    r = 0;
    const v = o;
    o = null, s || n == null || n(v);
  }), !0), dispose: () => {
    s || (s = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Lt } = Ds, Cd = nS();
function Ou() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ds == null ? void 0 : Ds.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const _S = "pano_suite.ui_settings.v1", xS = 120;
function gp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(_S)) || "").trim();
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
function wS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ma(e) {
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
function SS() {
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
function Tu(e) {
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
  const t = Tu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function kS(e, t, n) {
  s0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Fu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Id(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function l0(e) {
  return ll(Id(e));
}
function yp(e = null) {
  var s, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (s = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [t, r, n, o].join("|");
}
function c0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Fu(e);
      this.activeBackend = s;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, f = n.noPreview === !0;
      if (s === o && s !== "none" && u === r && d === f) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = f, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      s !== "none" && Us(e), ck(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Fu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Us(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Us(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function MS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Us(e, t = {}) {
  var r, o, s, u, d;
  if (!e) return;
  Du.unregister(e), MS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (d = (u = n.root) == null ? void 0 : u.remove) == null || d.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((v) => {
      if (v === (n == null ? void 0 : n.widget)) return !0;
      const y = String((v == null ? void 0 : v.name) || ""), x = String((v == null ? void 0 : v.type) || ""), k = Ou();
      return y === k || x === k || y === "pano_preview" || x === "pano_preview" ? !0 : y === "preview" && x === "pano_preview";
    }).forEach((v) => BS(e, v));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function NS(e, t = "#00ff00") {
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
function PS(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Lo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Wn(e) {
  var d, f;
  const t = PS(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((d = Lo(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((f = Lo(e, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, s = e.__panoStateCache;
  if (s && s.source === t && s.liveVersion === n && s.bg === r && s.coverage === o)
    return s.parsed;
  const u = e.__panoSceneStateV2 && typeof t == "string" ? Sg(t, { backgroundColor: r, coverage: o, active: Ag(e) }) : NS(t, r);
  return u.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: u }, u;
}
function Lo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function AS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function u0(e, t, n = null) {
  var o, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (r = d.outputNode);
    } catch {
    }
  return !r && n != null && (r = AS(e == null ? void 0 : e.graph, n)), r;
}
function CS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function d0(e, t = []) {
  const n = CS(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Uo.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function bp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function bl(e, t) {
  const n = bp(e), r = bp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function IS(e, t = Uo) {
  var f;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const o = d0(e, t).map((v) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(v))).filter((v) => v >= 0), s = n.map((v, y) => ({ input: v, idx: y })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), u = [.../* @__PURE__ */ new Set([...o, ...s])], d = [];
  for (const v of u) {
    const y = u0(e, v);
    if ((y == null ? void 0 : y.id) != null) {
      d.push(String(y.id));
      continue;
    }
    const x = e.graph ? (f = e.getInputLink(v)) == null ? void 0 : f.origin_id : null;
    x != null && d.push(String(x));
  }
  return [...new Set(d)];
}
const Du = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Yt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var v, y, x, k, P;
        if (!s) return;
        const u = bl(r, s == null ? void 0 : s.id);
        IS(s, Uo).some((S) => bl(r, S)), !(String(s.__panoPreviewMode || "") === "cutout" && !u) && (f0(s), (y = (v = s.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || y.call(v), (x = s.setDirtyCanvas) == null || x.call(s, !0, !0), (P = (k = s.graph) == null ? void 0 : k.setDirtyCanvas) == null || P.call(k, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || ""), void 0);
      });
    }, Yt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Yt) != null && e.removeEventListener) || (Yt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function vl(e) {
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
  return typeof ((s = Yt) == null ? void 0 : s.apiURL) == "function" ? Yt.apiURL(o) : o;
}
function ES(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function OS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: o, subfolder: s };
}
function TS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function FS(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (ES(t)) return [t];
  const { filename: n, subfolder: r } = OS(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((s) => vl({
    filename: n,
    subfolder: r,
    type: s
  }));
  return TS([...o, t]);
}
function DS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? vl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ja(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (bl(s, o)) return t.get(s);
  } else {
    const s = Object.keys(t);
    for (const u of s)
      if (bl(u, o)) return t[u];
  }
  return null;
}
function Ys(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || ja(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
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
      return vl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Mr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : vl(e);
}
function _l(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function vp(e) {
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
function Ed(e, t) {
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
function LS(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => t.push(u));
  }, o = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), o(s.output, u + 1), o(s.ui, u + 1), o(s.data, u + 1), o(s.result, u + 1));
  };
  return o(e, 0), t;
}
function RS(e, t) {
  try {
    e.__panoOwnOutputRev = eS(e.__panoOwnOutputRev);
    const n = LS(t);
    let r = "";
    for (const o of n)
      if (r = Mr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Ed(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ro(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function $S(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!qr(e, "background"))
    return Ro(e), null;
  const o = ja(r), s = oS(o, t, Mr);
  if (!s)
    return Ro(e), null;
  const u = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), d = Ed(s, u), f = `${t.join("|")}:${d}`, v = e.__panoOwnOutputVideoCache;
  if (v != null && v.video && v.key === f) return v.video;
  Ro(e);
  const y = aS({
    documentRef: document,
    src: d,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: f, ...y }, y.video) : null;
}
function VS(e, t = []) {
  var v, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = d0(e, t).map((x) => n.findIndex((k) => String((k == null ? void 0 : k.name) || "") === String(x))).filter((x) => x >= 0), s = n.map((x, k) => ({ input: x, idx: k })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...o, ...s])];
  for (const x of u) {
    const k = n[x], P = e.graph ? e.getInputLink(x) : null;
    if ((P == null ? void 0 : P.origin_id) == null) continue;
    const S = P.origin_id, _ = u0(e, x, S);
    if (!_) continue;
    const F = Number(P.origin_slot ?? 0), V = ja((_ == null ? void 0 : _.id) ?? S), U = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (U.length) {
      const D = [];
      F >= 0 && F < U.length && D.push(U[F]), D.push(...U);
      for (const W of D) {
        const z = Mr(W);
        if (z)
          return String((k == null ? void 0 : k.name) || ""), { src: z, sourceType: "nodeOutputs", inputName: String((k == null ? void 0 : k.name) || "") };
      }
    }
    let N = [];
    try {
      N = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(_) || [] : [];
    } catch {
      N = [];
    }
    if (Array.isArray(N) && N.length) {
      const D = [];
      F >= 0 && F < N.length && D.push(N[F]), D.push(...N);
      for (const W of D) {
        const z = Mr(W);
        if (z)
          return String((k == null ? void 0 : k.name) || ""), { src: z, sourceType: "appNodeImageUrls", inputName: String((k == null ? void 0 : k.name) || "") };
      }
    }
    const E = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
    if (E.length) {
      const D = [];
      F >= 0 && F < E.length && D.push(E[F]), D.push(...E);
      for (const W of D) {
        const z = Mr(W);
        if (z)
          return String((k == null ? void 0 : k.name) || ""), { src: z, sourceType: "nodeImgs", inputName: String((k == null ? void 0 : k.name) || "") };
      }
    }
    const $ = (v = _ == null ? void 0 : _.widgets) == null ? void 0 : v.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image");
    if ($) {
      let D = Mr($.value);
      if (D && !D.includes("/") && !D.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (D = Yt.apiURL(`/view?filename=${encodeURIComponent(D)}&type=input&subfolder=`)), D)
        return String((k == null ? void 0 : k.name) || ""), { src: D, sourceType: "widget", inputName: String((k == null ? void 0 : k.name) || "") };
    }
  }
  const d = qr(e, "background") ? ja(e == null ? void 0 : e.id) : null, f = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && f.push(...d.pano_input_images), Array.isArray((y = d == null ? void 0 : d.ui) == null ? void 0 : y.pano_input_images) && f.push(...d.ui.pano_input_images), f.length > 0)
    for (const x of f) {
      const k = Mr(x);
      if (k)
        return { src: k, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function zS(e, t = [], n = {}) {
  const r = VS(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const s = FS(o);
  if (!s.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", f = e.__panoLinkedInputImageCache.get(d);
  if (f && f.srcRaw === o && f.img) return f.img;
  if (f && f.pendingSrcRaw === o && f.pendingImg)
    return u && f.img && (f.img.complete || f.img.naturalWidth || f.img.width) ? f.img : f.pendingImg;
  const v = new Image(), y = f || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = v, e.__panoLinkedInputImageCache.set(d, y);
  let x = -1;
  const k = () => {
    var S, _, F, V;
    if (x += 1, x >= s.length) {
      if (((_ = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : _.call(S, d)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (V = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || V.call(F, d);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), s.length;
      return;
    }
    const P = s[x];
    y.pendingResolvedSrc = P, v.src = P;
  };
  return v.onload = () => {
    var P, S, _;
    ((S = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : S.call(P, d)) === y && y.pendingImg === v && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || v.src || ""), y.img = v, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || v.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, v.onerror = (P) => {
    var S, _, F, V;
    if (x + 1 < s.length) {
      k();
      return;
    }
    if (((_ = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : _.call(S, d)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (V = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || V.call(F, d);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((P == null ? void 0 : P.type) || "error");
  }, k(), u && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : v;
}
function jS(e, t = [], n = null, r = {}) {
  const o = zS(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function f0(e) {
  var t, n;
  if (e) {
    Cd.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ro(e), e.__panoWrappedErpCache = null;
  }
}
function HS(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ro(e), e.__panoWrappedErpCache = null;
  }
}
function h0(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ps(e, t, n = "") {
  const r = h0(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < xS ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function _p(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), s = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), u = n / o, d = r / s, f = Math.min(u, d);
  return Number.isFinite(f) && f > 0 ? f : 1;
}
function GS(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), s = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (s <= 0 || u <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), f = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), v = Math.max(Math.round(34 * n), d + Math.round(14 * n)), y = r + (s - f) * 0.5, x = o + (u - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, x, f, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + f * 0.5, x + v * 0.5 + 0.5), e.restore();
}
function Yc(e, t) {
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
function Ha(e, t, n, r = null) {
  var k;
  if (!String(t || "")) return null;
  let s = DS(n);
  if (!s && (r != null && r.external)) {
    if (!qr(e, "external-sticker")) return null;
    const P = e.__panoLastExecutedOutput || ja(e == null ? void 0 : e.id), S = ((k = P == null ? void 0 : P.ui) == null ? void 0 : k.pano_sticker_input_images) || (P == null ? void 0 : P.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(S) ? S : [S])
      if (s = Mr(_), s) break;
  }
  if (!s) return null;
  const u = Ys(e, "pano_sticker_input_state_hash"), d = r != null && r.external ? String(u ?? "") : "", f = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, v = r != null && r.external ? Ed(s, f) : s, y = tS(s, d, f);
  return Cd.get(e, y, v, (P, S) => {
    var _, F;
    S && (r != null && r.external && Jr(e, "image-loaded"), (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || F.call(_));
  }) || null;
}
function WS(e, t) {
  var x, k, P, S;
  const n = JS(e, t), r = ZS(t), o = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) ? t.painting.groups : [], s = new Map(
    o.filter((_) => _ && typeof _ == "object").map((_) => [String((_ == null ? void 0 : _.actionGroupId) || (_ == null ? void 0 : _.id) || "").trim(), Number((_ == null ? void 0 : _.z_index) || 0)])
  ), u = n ? r.map((_) => {
    const F = n.getGroupDisplayCanvas(_);
    return F ? {
      id: `paint_group:${_}`,
      source: F,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${_}`,
      zIndex: Number(s.get(_) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], d = Array.isArray((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) ? t.painting.raster_objects : [];
  if (d.length === 0)
    return (S = (P = e.__panoRasterObjectSurfaceCache) == null ? void 0 : P.retain) == null || S.call(P, []), u;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = Qw()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, F;
    return (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : F.call(_);
  });
  const f = qw(t == null ? void 0 : t.output_preset), v = d.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(v);
  const y = d.map((_) => {
    const F = e.__panoRasterObjectSurfaceCache.get(
      _,
      f.width,
      f.height,
      e.__panoRasterObjectReady
    );
    return F ? {
      id: `raster:${String((_ == null ? void 0 : _.id) || "")}`,
      source: F.source,
      revision: F.revision,
      zIndex: Number((_ == null ? void 0 : _.z_index) || 0),
      opacity: 1,
      visible: (_ == null ? void 0 : _.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...u, ...y];
}
function US(e, t, n, r) {
  var s, u, d, f, v, y;
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
          x: Number(x[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(x[1]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
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
  var x, k;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, s = (x = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : x.call(o), u = (t == null ? void 0 : t.ds) || ((k = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : k.ds);
  if (!s || !u) return null;
  const d = Number(u.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const f = Array.isArray(u.offset) ? u.offset : [0, 0], v = (n - Number(s.left || 0)) / d - Number(f[0] || 0), y = (r - Number(s.top || 0)) / d - Number(f[1] || 0);
  return !Number.isFinite(v) || !Number.isFinite(y) ? null : { x: v, y };
}
function XS(e, t, n) {
  var o, s;
  const r = YS(t, n || (Lt == null ? void 0 : Lt.canvas));
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
  var v, y, x, k, P, S, _, F, V, U, N, E;
  const n = (y = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : y.strokes, r = (k = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : k.strokes, o = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!o && !s) return null;
  const u = qS(e, t), d = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = yu(u), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const f = {
    paint: n || null,
    mask: r || null,
    groups: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== f.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== f.mask || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.groups) !== f.groups || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.rasterObjects) !== f.rasterObjects) && (e.__panoPreviewPaintRevision = f, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.raster_objects) ? t.painting.raster_objects.length : 0)
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
  const r = Md(t, n);
  r.visible && kd(e, r.boundaryEdges, { selected: !1 });
}
function tk(e, t, n) {
  const r = Md(t, n);
  r.visible && (e.save(), kd(e, r.boundaryEdges, { selected: !0 }), r0(e, r, { accent: Kw(t) }), e.restore());
}
function Lu(e, t, n) {
  return Tg(hl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function xp(e, t, n) {
  var s;
  ((s = e.__panoSurfaceScene) == null ? void 0 : s.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: $a({ ...t, painting: null }) });
  const r = (u) => {
    var f;
    if (u.visible === !1) return null;
    let d;
    if (t.version === 2)
      d = Ha(e, u.id, Ng(u.source), { external: u.source.kind === "port" });
    else {
      const v = u.type === "external_image" || u.source_kind === "external_image", y = String(u.asset_id || "") || (v ? String(u.id || "") : "");
      d = Ha(e, y, (f = t.assets) == null ? void 0 : f[u.asset_id], { external: v });
    }
    return _l(d) ? { media: d, revision: vp(d) } : null;
  }, o = WS(e, t).filter((u) => u.visible !== !1).map((u) => ({ id: u.id, media: u.source, revision: u.revision, opacity: u.opacity, zIndex: u.zIndex }));
  return {
    background: _l(n) ? { media: n, revision: vp(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Fg(e.__panoSurfaceScene.sceneState, za, t.stickers, { media: r, paintLayers: o })
  };
}
function nk(e, t, n) {
  var E, $, D, W, z, q, T;
  const r = String(e.__panoPreviewMode || "stickers");
  h0(e, r);
  const o = Wn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (D = ($ = (E = e.__panoCutoutNodeSurface) == null ? void 0 : E.session) == null ? void 0 : $.refresh) == null || D.call($)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (q = (z = (W = e.__panoStickersNodeSurface) == null ? void 0 : W.session) == null ? void 0 : z.refresh) == null || q.call(z));
  const s = t.parentElement, u = Math.max(64, Math.round(Number((s == null ? void 0 : s.clientWidth) || t.clientWidth || 0))), d = Math.max(64, Math.round(Number((s == null ? void 0 : s.clientHeight) || t.clientHeight || 0))), f = t.getContext("2d");
  if (!f) return;
  (t.width !== u || t.height !== d) && (t.width = u, t.height = d);
  const v = { x: 0, y: 0, w: u, h: d };
  f.setTransform(1, 0, 0, 1, 0, 0), f.fillStyle = "#070707", f.fillRect(0, 0, u, d);
  const y = $S(
    e,
    ["pano_input_videos"],
    () => {
      var O, le;
      return (le = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : le.call(O);
    }
  ) || jS(
    e,
    Uo,
    () => {
      var O, le;
      return (le = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : le.call(O);
    },
    { preserveReadyWhilePending: !1 }
  ), x = _l(y);
  let k = null;
  const P = (O, le) => {
    k || (k = xp(e, o, y));
    const J = n.render({ width: O.w, height: O.h, camera: le, ...k });
    return J && f.drawImage(J.canvas, J.x, J.y, J.width, J.height, O.x, O.y, O.w, O.h), !!J;
  };
  if (r === "cutout") {
    const O = KS(o), le = QS(y), J = O ? Z(ri(O).aspect, 0.1, 10) : x ? Z(Number(le.width / le.height), 0.05, 20) : 1, X = vd(v, J);
    e.__panoCutoutNodeFrame = X;
    let ge = "none";
    const Ae = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (O)
      if (y && !x)
        ge = "loading";
      else if (x) {
        const se = fw({ width: u, height: d }, X, O);
        [
          !se.fallback || P(se.fallback.rect, Ks(se.fallback.shot)),
          P(se.rect, Ks(se.shot)),
          !se.fallback || P(X, Ks(O))
        ].every(Boolean) || (ge = "loading");
      } else
        ge = "empty";
    else {
      const se = e.__panoLastCutoutShot;
      se ? (e.__panoPreviewView = jg(se, { width: u, height: d }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), x ? P(v, hl(e.__panoPreviewView, u, d)) || (ge = "loading") : y ? ge = "loading" : ge = "empty";
    }
    x || n.release(), n.failed && ge === "loading" && (ge = "none"), O && (e.__panoLastCutoutShot = { ...O }, f.save(), f.fillStyle = "rgba(0,0,0,0.58)", f.beginPath(), f.rect(0, 0, u, d), f.rect(X.x, X.y, X.w, X.h), f.fill("evenodd"), f.restore(), f.save(), f.strokeStyle = "rgba(255,221,87,0.72)", f.lineWidth = 2, f.strokeRect(X.x + 0.5, X.y + 0.5, Math.max(0, X.w - 1), Math.max(0, X.h - 1)), f.restore()), ge === "loading" ? (Yc(e, !1), Ps(e, !0, Ae)) : ge === "empty" ? (Yc(e, !0), Ps(e, !1, "")) : (Yc(e, !1), Ps(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!y || x) && (k = xp(e, o, y), !k.background && !k.layers.length ? (n.release(), S = !0) : S = P(v, hl(e.__panoPreviewView, u, d)));
  const _ = !S && !n.failed;
  Ps(e, _, _ ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), _ && GS(f, v, _p(t, v));
  const F = Lu(e, u, d);
  !y && S && rk(f, F, _p(t, v));
  const V = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), U = Au(o), N = S ? U.find((O) => String((O == null ? void 0 : O.id) || "") === V && (O == null ? void 0 : O.visible) !== !1) : null;
  S && U.filter((O) => O !== N && (O == null ? void 0 : O.visible) !== !1 && (O.external || O.source_kind === "external_image")).filter((O) => !_l(Ha(e, O.id, null, { external: !0 }))).forEach((O) => ek(f, O, F)), N && tk(f, N, F);
}
function wp(e, t, n, r, o = 1) {
  let s = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const u of t) {
    const d = n.project(u);
    if (d.z <= 1e-4) {
      s = !1;
      continue;
    }
    s ? e.lineTo(d.x, d.y) : (e.moveTo(d.x, d.y), s = !0);
  }
  e.stroke();
}
function rk(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let d = -75; d <= 75; d += 15) {
    const f = [];
    for (let v = -180; v <= 180; v += 4) f.push(On(v, d));
    wp(e, f, t, d === 0 ? o : r, d === 0 ? 1.5 : 1);
  }
  for (let d = -180; d <= 180; d += 15) {
    const f = [];
    for (let v = -89; v <= 89; v += 4) f.push(On(d, v));
    wp(e, f, t, r, d % 90 === 0 ? 1.3 : 1);
  }
  const s = [
    { name: "Front", dir: On(0, 0) },
    { name: "Right", dir: On(90, 0) },
    { name: "Back", dir: On(180, 0) },
    { name: "Left", dir: On(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const u = Math.max(9, Math.round(11 * n));
  e.font = `500 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", s.forEach((d) => {
    const f = t.project(d.dir);
    f.z > 1e-4 && e.fillText(d.name, f.x, f.y + 24 * n);
  }), e.restore();
}
function Ru(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function ik(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), s = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && s >= r.height - n;
}
function Kn(e, t) {
  return ik(e, t) ? !1 : (Ru(e), !0);
}
function Sp() {
  var n;
  const e = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function ok(e) {
  var n;
  if (!e) return;
  const t = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function ak(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !s0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function sk(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    e.__panoBootMinHeightTimer = null, (s = e == null ? void 0 : e.__panoDomPreview) != null && s.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function kp(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && lk(e, 180, t);
    }
  };
}
function lk(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ga(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function ck(e, t = {}) {
  var Lr;
  const n = t.__allowStandalone === !0, r = l0(e);
  if (r && !n) {
    Id(e);
    return;
  }
  r && ak(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", s = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const u = {
    signature: yp(e)
  }, d = "dom", f = u.signature || yp(e);
  if (Number(e.__panoRebindGeneration || 0), Fu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Tu(e), e.__panoFrontendSig = f, e.__panoStickersPath = d, (Lr = e.__panoDomPreview) != null && Lr.widget || (e.__panoLegacyPreviewHooked && Us(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const v = t.noPreview === !0, y = v ? 0 : 56, x = v ? 0 : lw, k = document.createElement("div");
  if (SS(), k.className = "pano-node-preview-dom", k.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), v && k.classList.add("pano-node-preview--no-preview"), k.setAttribute("data-capture-wheel", "true"), k.tabIndex = 0, k.style.cssText = [
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
    const H = yl(Eu(
      e.addDOMWidget(Ou(), "preview", k, kp(e, null))
    ));
    ga(e), e.__panoDomPreview = { widget: H, root: k, requestDraw: () => {
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
  ].join(";"), _.textContent = "Connect ERP image", P.appendChild(S), P.appendChild(_), k.appendChild(P);
  const F = Ym(k), V = document.createElement("div");
  V && (V.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", V.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", k.appendChild(V)), kS(e, 120, 120), ga(e);
  let U = null;
  try {
    sk(e, y, () => {
      var H, Se;
      return (Se = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : Se.call(H);
    }), U = yl(Eu(e.addDOMWidget(
      Ou(),
      "preview",
      k,
      kp(
        e,
        () => {
          var H, Se;
          return (Se = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : Se.call(H);
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
  }, E = () => {
    N.destroyed || (N.needsDraw = !0, !N.inTick && !N.raf && (N.raf = requestAnimationFrame(gn)));
  }, $ = Lg(E), D = /* @__PURE__ */ Ko(o ? { ...n0(Wn(e)), importing: !1, dropActive: !1, viewUnavailable: !1 } : {
    ...Vg(Wn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((H) => ({ value: H, label: H }))
  });
  let W = null;
  const z = (o ? Gw : pw)({
    readState: () => Wn(e),
    publishLiveState: (H) => {
      H ? (W = H, e.__panoLiveStateOverride = H) : (e.__panoLiveStateOverride === W && (e.__panoLiveStateOverride = null), W = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, E();
    },
    commitState: (H) => {
      var Fe, Ke, Y, jt;
      const Se = Lo(e, "state_json");
      if (!Se) return;
      Cg(e, H.active);
      const Ce = Ig(e, H);
      Se.value = Ce, (Fe = Se.callback) == null || Fe.call(Se, Ce), e.__panoStateCache = null, (Ke = e.setDirtyCanvas) == null || Ke.call(e, !0, !0), (jt = (Y = e.graph) == null ? void 0 : Y.setDirtyCanvas) == null || jt.call(Y, !0, !0);
    },
    onChange: (H) => Object.assign(D, H)
  }), T = o ? i0(e, (H = "sync", Se = null) => {
    var si;
    if (!o || !e.graph || !z || z.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Pt = qr(e, "external-sticker"), dr = Wn(e).stickers.find((Si) => Si.source.kind === "port");
      return z.apply({
        type: "sync-port",
        value: e0(e, {
          pose: Pt ? Ys(e, "pano_sticker_input_pose", Se) : null,
          image: dr ? Ha(e, dr.id, null, { external: !0 }) : null
        })
      });
    }
    const Ce = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Pt) => String((Pt == null ? void 0 : Pt.name) || "") === "sticker_image") : -1, Fe = Ce >= 0 ? ((si = e.getInputLink(Ce)) == null ? void 0 : si.id) ?? null : null;
    if (Fe == null)
      return z.apply({ type: "sync-external", value: { connected: !1 } });
    if (!qr(e, "external-sticker")) return !1;
    const Ke = Ys(e, "pano_sticker_input_pose", Se), Y = Array.isArray(Ke) ? Ke[0] : Ke, jt = String(Ys(e, "pano_sticker_input_state_hash", Se) ?? ""), Rt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, bt = Wn(e), sn = (Array.isArray(bt == null ? void 0 : bt.stickers) ? bt.stickers : []).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === "sticker_image_1"), Jt = Ha(e, "sticker_image_1", null, { external: !0 }), oi = Y && typeof Y == "object" ? Y : sn || { yaw_deg: Rt.yaw, pitch_deg: Rt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return z.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: jt,
        pose: oi,
        imageWidth: Number((Jt == null ? void 0 : Jt.naturalWidth) || (Jt == null ? void 0 : Jt.width) || 0),
        imageHeight: Number((Jt == null ? void 0 : Jt.naturalHeight) || (Jt == null ? void 0 : Jt.height) || 0)
      }
    });
  }) : () => {
  };
  let O = 0;
  const le = async (H) => {
    if (!o || !z || !Pr(H)) return !1;
    const Se = `asset_${Math.random().toString(16).slice(2, 10)}`, Ce = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    O += 1, D.importing = !0;
    const Ke = xa(e, `add:${Se}`, async () => {
      const Y = await wa(H), jt = await Ri(H, {
        fetchApi: (Rt, bt) => Yt.fetchApi(Rt, bt)
      });
      return I(), z.apply({
        type: "add-sticker",
        value: {
          stickerId: Ce,
          assetId: Se,
          asset: jt,
          imageWidth: Y.width,
          imageHeight: Y.height,
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
      O = Math.max(0, O - 1), D.importing = O > 0, E();
    }
  };
  let J = null, X = null, ge = null, Ae = !1;
  const se = () => {
    var H;
    return ge && (clearTimeout(ge), ge = null), Ae ? (Ae = !1, ((H = z == null ? void 0 : z.commitGesture) == null ? void 0 : H.call(z)) ?? !1) : !1;
  }, I = () => {
    var Fe, Ke, Y;
    const H = se(), Se = (J == null ? void 0 : J.pointerId) ?? (X == null ? void 0 : X.pointerId);
    if (J = null, X = null, Se != null) {
      try {
        (Fe = S.hasPointerCapture) != null && Fe.call(S, Se) && ((Ke = S.releasePointerCapture) == null || Ke.call(S, Se));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ce = ((Y = z == null ? void 0 : z.commitGesture) == null ? void 0 : Y.call(z)) ?? !1;
    return H || Ce;
  }, $e = () => {
    var Fe, Ke, Y;
    const H = se(), Se = J == null ? void 0 : J.pointerId;
    if (J = null, Se != null) {
      try {
        (Fe = S.hasPointerCapture) != null && Fe.call(S, Se) && ((Ke = S.releasePointerCapture) == null || Ke.call(S, Se));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ce = ((Y = z == null ? void 0 : z.cancelGesture) == null ? void 0 : Y.call(z)) ?? !1;
    return H || Ce;
  }, B = () => I();
  z && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(B));
  let He = null, rt = !1;
  if (V && z)
    try {
      Nd(), He = od(o ? Vw : Ow, {
        model: D,
        onAction: (H) => {
          var Fe, Ke;
          if ((H == null ? void 0 : H.type) === "open-editor") {
            I(), o || (D.aspectOpen = !1), (Fe = e.__panoOpenEditor) == null || Fe.call(e);
            return;
          }
          if (o) {
            if ((H == null ? void 0 : H.type) === "add-image-file") {
              le(H.file);
              return;
            }
            z.apply(H) && E();
            return;
          }
          if ((H == null ? void 0 : H.type) === "toggle-aspect") {
            D.aspectOpen = !D.aspectOpen;
            return;
          }
          if ((H == null ? void 0 : H.type) === "close-aspect") {
            D.aspectOpen = !1;
            return;
          }
          let Se = H;
          if ((H == null ? void 0 : H.type) === "add-frame") {
            const Y = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            Se = {
              ...H,
              ...uw(Y, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((H == null ? void 0 : H.type) === "delete-frame") {
            const Y = Xi(Wn(e));
            Y && (e.__panoPreviewView = jg(Y, {
              width: S.width,
              height: S.height
            }));
          }
          const Ce = ((Ke = e.__panoCutoutNodeFrame) == null ? void 0 : Ke.safeRect) || null;
          D.aspectOpen = !1, z.apply({ ...Se, safeRect: Ce }) && E();
        }
      }), He.mount(V), rt = !0;
    } catch {
      He = null, rt = !1;
    }
  const gt = typeof ResizeObserver < "u" ? new ResizeObserver(E) : null;
  gt == null || gt.observe(P);
  const gn = (H) => {
    var Ce, Fe;
    N.raf = 0, N.inTick = !0;
    let Se = !1;
    try {
      Se = We.stepInertia(H), (N.needsDraw || Se) && (N.needsDraw = !1, (Ce = e.flags) != null && Ce.collapsed || nk(e, S, $), D.viewUnavailable = $.failed);
    } finally {
      N.inTick = !1;
    }
    (Se || N.needsDraw) && !N.raf && (N.raf = requestAnimationFrame(gn)), wS() && (!e.__panoDebugLastTs || H - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = H, e.__panoPreviewMode, Tu(e), ma(k), ma(P), ma(S), ma(k.parentElement), ma((Fe = k.parentElement) == null ? void 0 : Fe.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, We = ud({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (H) => {
      e.__panoPreviewView = H;
    },
    getViewportSize: () => {
      const H = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(H.width || S.clientWidth || 0)),
        h: Math.max(1, Number(H.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const H = gp();
      return {
        x: H.invert_view_x ? -1 : 1,
        y: H.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      E();
    }
  }), Et = o ? P : k, Tn = (H) => {
    const Se = S.getBoundingClientRect();
    return {
      x: (Number(H.clientX) - Se.left) * (S.width / Math.max(1, Se.width)),
      y: (Number(H.clientY) - Se.top) * (S.height / Math.max(1, Se.height))
    };
  }, ur = (H) => {
    var Fe, Ke;
    if (!o || !s) return;
    const Se = Wn(e), Ce = cp(
      Au(Se),
      String(((Fe = Se == null ? void 0 : Se.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      Tn(H),
      Lu(e, S.width, S.height)
    );
    if (!Ce) {
      S.style.cursor = "grab";
      return;
    }
    if (((Ke = Ce.item) == null ? void 0 : Ke.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = Ce.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (H) => {
    var jt, Rt, bt, sn, Jt, oi, ai, si, Pt, dr, Si;
    if (!Kn(H, Et) || H.button !== 0) return;
    if (!o) {
      const bn = Xi(Wn(e)), jn = e.__panoCutoutNodeFrame;
      if (!bn) {
        (jt = k.focus) == null || jt.call(k, { preventScroll: !0 }), (Rt = S.setPointerCapture) == null || Rt.call(S, H.pointerId), S.style.cursor = "grabbing", We.startDrag(H.clientX, H.clientY, H.pointerId);
        return;
      }
      if (bn.locked === !0 || !jn || !z) return;
      const Ya = Tn(H);
      let Zi;
      if (H.shiftKey) {
        const ki = Gg({
          frame: jn,
          point: Ya,
          startRollDeg: Number(bn.roll_deg ?? bn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!ki) return;
        Zi = { kind: "roll", pointerId: H.pointerId, rollGesture: ki };
      } else {
        const ki = ((bt = Wn(e)) == null ? void 0 : bt.ui_settings) || gp();
        Zi = {
          kind: "pan",
          pointerId: H.pointerId,
          startPoint: Ya,
          startShot: { ...bn },
          focalPx: Wi(jn, bn),
          invertX: ki.invert_view_x === !0,
          invertY: ki.invert_view_y === !0
        };
      }
      I(), (sn = k.focus) == null || sn.call(k, { preventScroll: !0 }), (Jt = S.setPointerCapture) == null || Jt.call(S, H.pointerId), S.style.cursor = "grabbing", z.beginGesture(), J = Zi;
      return;
    }
    if (!s) return;
    const Se = Tn(H), Ce = Wn(e), Fe = String(((oi = Ce == null ? void 0 : Ce.active) == null ? void 0 : oi.selected_sticker_id) || ""), Ke = Lu(e, S.width, S.height), Y = cp(Au(Ce), Fe, Se, Ke);
    if ((ai = k.focus) == null || ai.call(k, { preventScroll: !0 }), Y && z) {
      if (We.stopMotion(), I(), String(((si = Y.item) == null ? void 0 : si.id) || "") !== Fe && z.apply({ type: "select-sticker", id: Y.item.id }), ((Pt = Y.item) == null ? void 0 : Pt.locked) === !0) {
        E();
        return;
      }
      const bn = Se, jn = Y.geometry.center;
      X = {
        active: !0,
        kind: Y.hit.kind,
        pointerId: H.pointerId,
        startPoint: bn,
        startCenter: { ...jn },
        startSticker: { ...Y.item },
        startDistance: Math.max(1, Math.hypot(bn.x - jn.x, bn.y - jn.y)),
        startAngle: Math.atan2(bn.y - jn.y, bn.x - jn.x),
        projection: Ke
      }, z.beginGesture(), (dr = S.setPointerCapture) == null || dr.call(S, H.pointerId), S.style.cursor = Y.hit.kind === "rotate" ? "grabbing" : Y.hit.kind === "move" ? "move" : Y.hit.cursor, E();
      return;
    }
    (Si = S.setPointerCapture) == null || Si.call(S, H.pointerId), S.style.cursor = "grabbing", We.startDrag(H.clientX, H.clientY, H.pointerId);
  }), S.addEventListener("pointermove", (H) => {
    if (!o) {
      if (!J) {
        if (!We.state.drag.active) return;
        Kn(H, Et), We.moveDrag(H.clientX, H.clientY, "pano");
        return;
      }
      if (J.pointerId !== H.pointerId || !z) return;
      if (Kn(H, Et), J.kind === "pan") {
        const Ce = Tn(H);
        z.updateGesture({
          type: "pan-camera",
          startShot: J.startShot,
          dx: Ce.x - J.startPoint.x,
          dy: Ce.y - J.startPoint.y,
          focalPx: J.focalPx,
          invertX: J.invertX,
          invertY: J.invertY
        });
        return;
      }
      const Se = Kg(J.rollGesture, Tn(H), H);
      if (!Se) return;
      J.rollGesture = Se.gesture, z.updateGesture({ type: "set-roll", value: Se.rollDeg });
      return;
    }
    if (!X && !We.state.drag.active) {
      ur(H);
      return;
    }
    if (X) {
      if (X.pointerId !== H.pointerId || !z) return;
      Kn(H, Et);
      const Se = Tn(H);
      let Ce = X.startSticker;
      if (X.kind === "move")
        Ce = Uw(
          X.startSticker,
          {
            x: X.startCenter.x + Se.x - X.startPoint.x,
            y: X.startCenter.y + Se.y - X.startPoint.y
          },
          X.projection
        );
      else if (X.kind === "scale") {
        const Fe = Math.hypot(Se.x - X.startCenter.x, Se.y - X.startCenter.y);
        Ce = Yw(X.startSticker, X.startDistance, Fe);
      } else if (X.kind === "rotate") {
        const Fe = Math.atan2(Se.y - X.startCenter.y, Se.x - X.startCenter.x);
        Ce = Xw(X.startSticker, X.startAngle, Fe, H.shiftKey === !0);
      }
      z.updateGesture({ type: "set-transform", value: Ce }), E();
      return;
    }
    !s || !We.state.drag.active || (Kn(H, Et), We.moveDrag(H.clientX, H.clientY, "pano"));
  });
  const Jn = () => {
    var Se, Ce;
    if (!J && !X) {
      if (!We.state.drag.active) return;
      We.endDrag(), S.style.cursor = "grab", E();
      return;
    }
    if (!z) return;
    const H = (J == null ? void 0 : J.pointerId) ?? (X == null ? void 0 : X.pointerId);
    J = null, X = null;
    try {
      (Se = S.hasPointerCapture) != null && Se.call(S, H) && ((Ce = S.releasePointerCapture) == null || Ce.call(S, H));
    } catch {
    }
    z.cancelGesture(), S.style.cursor = "grab", E();
  }, Mn = (H, Se = !1) => {
    var Ce, Fe, Ke, Y;
    if (!o) {
      if (!J) {
        if (!We.state.drag.active) return;
        Kn(H, Et), (Ce = S.releasePointerCapture) == null || Ce.call(S, H.pointerId), S.style.cursor = "grab", We.endDrag(), E();
        return;
      }
      if (J.pointerId !== H.pointerId || !z) return;
      Kn(H, Et), J = null, (Fe = S.releasePointerCapture) == null || Fe.call(S, H.pointerId), S.style.cursor = "grab", Se ? z.cancelGesture() : z.commitGesture(), ur(H), E();
      return;
    }
    if (X) {
      if (X.pointerId !== H.pointerId || !z) return;
      Kn(H, Et), X = null, (Ke = S.releasePointerCapture) == null || Ke.call(S, H.pointerId), S.style.cursor = "grab", Se ? z.cancelGesture() : z.commitGesture(), E();
      return;
    }
    !s || !We.state.drag.active || (Kn(H, Et), (Y = S.releasePointerCapture) == null || Y.call(S, H.pointerId), S.style.cursor = "grab", We.endDrag(), E());
  };
  S.addEventListener("pointerup", Mn), S.addEventListener("pointercancel", (H) => Mn(H, !0)), S.addEventListener("lostpointercapture", Jn), S.addEventListener("pointerleave", (H) => {
    !o && J || X || We.state.drag.active && Mn(H);
  });
  const Fn = (H) => {
    const Se = document.activeElement;
    if (Se !== k && !k.contains(Se)) return;
    if (H.key === "Escape" && (J || X) && z) {
      Jn(), Ru(H);
      return;
    }
    if (!o || H.key !== "Delete" && H.key !== "Backspace" || !z) return;
    const Ce = H.target, Fe = String((Ce == null ? void 0 : Ce.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Ce != null && Ce.isContentEditable || D.canDelete === !0 && (I(), z.apply({ type: "delete-selected" }) && E(), Ru(H));
  };
  window.addEventListener("keydown", Fn, !0);
  const R = vS({
    requestFrame: (H) => requestAnimationFrame(H),
    cancelFrame: (H) => cancelAnimationFrame(H),
    restore: (H) => ok(H)
  }), j = (H) => {
    var Ce, Fe, Ke, Y, jt, Rt;
    if (!Kn(H, Et)) return;
    if (!o) {
      const bt = Xi(Wn(e));
      if (bt && bt.locked !== !0 && z) {
        const sn = cd(H);
        sn !== 0 && (Ae || (I(), z.beginGesture(), Ae = !0), z.updateGesture({
          type: "step-fov",
          direction: sn
        }) ? (ge && clearTimeout(ge), ge = setTimeout(se, 180), E()) : z.hasGestureChanges() || (z.cancelGesture(), Ae = !1));
      } else if (!bt) {
        const sn = Sp();
        We.applyWheelEvent(H) && E(), R.schedule(sn);
      }
      (Ce = H.preventDefault) == null || Ce.call(H), (Fe = H.stopPropagation) == null || Fe.call(H), (Ke = H.stopImmediatePropagation) == null || Ke.call(H);
      return;
    }
    if (!s) return;
    const Se = Sp();
    We.applyWheelEvent(H) && E(), (Y = H.preventDefault) == null || Y.call(H), (jt = H.stopPropagation) == null || jt.call(H), (Rt = H.stopImmediatePropagation) == null || Rt.call(H), R.schedule(Se);
  }, te = o ? [P, S] : [P];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((H) => {
    te.forEach((Se) => Se.addEventListener(H, j, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((H) => {
    S.addEventListener(H, (Se) => Kn(Se, Et)), P.addEventListener(H, (Se) => Kn(Se, Et));
  });
  const ue = Lo(e, "state_json");
  let fe = null, he = null;
  ue && !ue.__panoPreviewPatchedCb && (fe = ue.callback, he = (H) => {
    const Se = fe ? fe(H) : void 0;
    return E(), Se;
  }, ue.callback = he, ue.__panoPreviewPatchedCb = he);
  const _e = Lo(e, "bg_color");
  let Ne = null, ke = null;
  _e && !_e.__panoPreviewPatchedCb && (Ne = _e.callback, ke = (H) => {
    const Se = Ne ? Ne(H) : void 0;
    return E(), Se;
  }, _e.callback = ke, _e.__panoPreviewPatchedCb = ke);
  const ye = e.onRemoved, Le = e.onResize, Ie = e.onExecuted, De = e.onDragOver, p = e.onDragDrop;
  let Me = null;
  const Ue = () => {
    o && (D.dropActive = !0, Me && clearTimeout(Me), Me = setTimeout(() => {
      Me = null, D.dropActive = !1;
    }, 140));
  }, ut = o ? function(H) {
    return (De ? De.apply(this, arguments) : !1) === !0 ? !0 : Ad(H == null ? void 0 : H.dataTransfer) ? (Ue(), !0) : !1;
  } : null, yt = o ? function(H) {
    var Fe;
    if ((p ? p.apply(this, arguments) : !1) === !0) return !0;
    const Ce = Array.from(((Fe = H == null ? void 0 : H.dataTransfer) == null ? void 0 : Fe.files) || []).find((Ke) => Pr(Ke));
    return Ce ? (Me && clearTimeout(Me), Me = null, D.dropActive = !1, le(Ce), !0) : !1;
  } : null;
  o && (e.onDragOver = ut, e.onDragDrop = yt);
  const Nt = o ? bS(k, {
    onActive: (H) => {
      if (H) {
        Ue();
        return;
      }
      Me && clearTimeout(Me), Me = null, D.dropActive = !1;
    },
    onDrop: (H) => {
      le(H);
    }
  }) : () => {
  }, at = function(H) {
    RS(e, H), e.__panoLastExecutedOutput = H || null, f0(e), rS(e), Jr(e, "executed", H), ga(e), E();
    const Se = Ie ? Ie.apply(this, arguments) : void 0;
    return ga(e), Se;
  };
  e.onExecuted = at;
  const we = e.onConnectionsChange, yn = function(H, Se) {
    const Ce = dp(e, H, Se, iS), Fe = dp(e, H, Se, Uo), Ke = arguments, Y = we ? we.apply(this, Ke) : void 0, jt = () => {
      N.destroyed || ((Fe || Ce) && (Fe && (up(e, "background"), HS(e)), Ce && (up(e, "external-sticker"), e.__panoLastExecutedOutput = null)), Ce && Jr(e, "connection-change"), ga(e), E());
    };
    return jt(), queueMicrotask(jt), Y;
  };
  e.onConnectionsChange = yn;
  const Dr = function() {
    const H = Le ? Le.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, E(), H;
  };
  e.onResize = Dr;
  const zt = function() {
    return nn(), Du.unregister(this), ye ? ye.apply(this, arguments) : void 0;
  };
  e.onRemoved = zt;
  const nn = () => {
    var H, Se, Ce, Fe, Ke, Y, jt, Rt, bt;
    N.destroyed = !0, (H = gt == null ? void 0 : gt.disconnect) == null || H.call(gt), o ? I() : $e(), S.removeEventListener("lostpointercapture", Jn), Nt(), F(), window.removeEventListener("keydown", Fn, !0), (Ce = (Se = e.__panoStateFlushers) == null ? void 0 : Se.delete) == null || Ce.call(Se, B), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Fe = z == null ? void 0 : z.destroy) == null || Fe.call(z), (Ke = He == null ? void 0 : He.unmount) == null || Ke.call(He), $.dispose(), e.__panoSurfaceScene = null, (jt = (Y = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Y.dispose) == null || jt.call(Y), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, T(), R.dispose(), Me && clearTimeout(Me), Me = null, Cd.disposeOwner(e), Ro(e), N.raf && cancelAnimationFrame(N.raf), N.raf = 0, ((Rt = e.__panoCutoutNodeSurface) == null ? void 0 : Rt.session) === z && (e.__panoCutoutNodeSurface = null), ((bt = e.__panoStickersNodeSurface) == null ? void 0 : bt.session) === z && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Dr && (e.onResize = Le), e.onExecuted === at && (e.onExecuted = Ie), e.onConnectionsChange === yn && (e.onConnectionsChange = we), he && (ue == null ? void 0 : ue.callback) === he && (ue.callback = fe), he && (ue == null ? void 0 : ue.__panoPreviewPatchedCb) === he && delete ue.__panoPreviewPatchedCb, ke && (_e == null ? void 0 : _e.callback) === ke && (_e.callback = Ne), ke && (_e == null ? void 0 : _e.__panoPreviewPatchedCb) === ke && delete _e.__panoPreviewPatchedCb, e.onDragOver === ut && (e.onDragOver = De), e.onDragDrop === yt && (e.onDragDrop = p), e.onRemoved === zt && (e.onRemoved = ye);
  };
  e.__panoDomRestore = nn, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = z && rt && !o ? { session: z, model: D } : null, e.__panoStickersNodeSurface = z && rt && o ? { session: z, model: D } : null, e.__panoDomPreview = {
    widget: U,
    root: k,
    canvas: S,
    requestDraw: E,
    state: N,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Du.register(e), e.graph && Jr(e, "attach"), E();
}
function Mp(e, t = {}) {
  c0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Np(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (l0(e) && !n) {
    Id(e);
    return;
  }
  c0(e).attach(t);
}
function uk(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function dk(e, t = 1, n = Qh) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, s = Number(e == null ? void 0 : e.width), u = Number(e == null ? void 0 : e.height), d = Math.max(0, Number.isFinite(s) ? s : 0) * o, f = Math.max(0, Number.isFinite(u) ? u : 0) * o, v = Number(n), y = Number.isFinite(v) && v > 0 ? v : Qh, x = Math.max(d, f), k = x > 0 ? Math.min(1, y / x) : 1;
  return {
    width: Math.max(1, Math.round(d * k)),
    height: Math.max(1, Math.round(f * k))
  };
}
function fk({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var P;
  const o = typeof n == "function" ? n : () => {
  }, s = typeof r == "function" ? r : () => {
  };
  let u = !1, d = null;
  const f = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, v = () => {
    const S = f();
    return S === d || (d = S, o(S)), S;
  }, y = () => v();
  return (P = t == null ? void 0 : t.addEventListener) == null || P.call(t, "fullscreenchange", y), v(), { toggle: async () => {
    var S;
    if (u || !e || !t) return !1;
    if (f()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
      } catch {
      }
      return u ? !1 : (v(), f());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), u) return !1;
        if (f())
          return v(), !0;
      } catch {
      }
    return u || (s(), v()), !1;
  }, isActive: f, destroy: () => {
    var S, _, F;
    if (!u) {
      if (u = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", y), f())
        try {
          const V = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (F = V == null ? void 0 : V.catch) == null || F.call(V, () => {
          });
        } catch {
        }
      d = !1, o(!1);
    }
  } };
}
const hk = { class: "pano-preview-node-surface" }, pk = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (oe(), de("div", hk, [
      Te(en, {
        icon: e.model.fullscreen ? et(Pe).fullscreen_close : et(Pe).fullscreen,
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
      e.model.viewUnavailable ? (oe(), Fr(_d, { key: 0 })) : st("", !0)
    ]));
  }
}, As = 140, mk = 180, Pp = 40, Xc = 10;
function Ap(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Cp(e, t) {
  const n = Ap(e), r = Ap(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ip(e) {
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
  return typeof ((s = Yt) == null ? void 0 : s.apiURL) == "function" ? Yt.apiURL(o) : o;
}
function $o(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return $o(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Ip({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = $o(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ip(e);
}
function p0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function gk(e) {
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
function $u(e) {
  var o;
  const t = (o = Ar) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const s of t.keys())
      if (Cp(s, n)) return t.get(s);
  } else
    for (const s of Object.keys(t))
      if (Cp(s, n)) return t[s];
  return null;
}
function yk(e) {
  var r, o;
  const t = $u(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const s of n)
    if (Array.isArray(s))
      for (const u of s) {
        const d = $o(u);
        if (d && /\.mp4(\?|$)/i.test(d) || d && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return d;
      }
  return "";
}
function bk(e, t = "erp_image") {
  var P, S, _, F, V, U, N;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((E) => String((E == null ? void 0 : E.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((E, $) => String((E == null ? void 0 : E.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected($))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const s = Number(o.origin_id);
  if (!Number.isFinite(s)) return "";
  const u = (_ = (S = (P = Ar) == null ? void 0 : P.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : _.call(S, s), d = $u(s), f = $u(e == null ? void 0 : e.id), v = [
    (F = f == null ? void 0 : f.ui) == null ? void 0 : F.pano_input_images,
    f == null ? void 0 : f.pano_input_images,
    d == null ? void 0 : d.images,
    (V = d == null ? void 0 : d.ui) == null ? void 0 : V.pano_input_images,
    d == null ? void 0 : d.pano_input_images
  ];
  for (const E of v)
    if (Array.isArray(E))
      for (const $ of E) {
        const D = $o($);
        if (D) return D;
      }
  let y = [];
  try {
    y = typeof ((U = Ar) == null ? void 0 : U.getNodeImageUrls) == "function" ? Ar.getNodeImageUrls(u) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const E of y) {
      const $ = $o(E);
      if ($) return $;
    }
  if (u) {
    const E = Array.isArray(u == null ? void 0 : u.imgs) ? u.imgs : [];
    for (const $ of E) {
      const D = $o($);
      if (D) return D;
    }
  }
  const x = (N = u == null ? void 0 : u.widgets) == null ? void 0 : N.find((E) => String((E == null ? void 0 : E.name) || "").toLowerCase() === "image"), k = String((x == null ? void 0 : x.value) || "").trim();
  return k ? Yt.apiURL(`/view?filename=${encodeURIComponent(k)}&type=input&subfolder=`) : "";
}
function qc(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Ep(e, t, n, r, o, s, u) {
  var v, y, x;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !p0(s) || n <= 1 || r <= 1) {
    qc(t, n, r);
    return;
  }
  if (u.failed) {
    qc(t, n, r);
    return;
  }
  const d = Number(((x = (y = (v = e == null ? void 0 : e.widgets) == null ? void 0 : v.find) == null ? void 0 : y.call(v, (k) => (k == null ? void 0 : k.name) === "coverage")) == null ? void 0 : x.value) || 360) === 180 ? 180 : 360, f = u.render({
    width: n,
    height: r,
    camera: hl(o, n, r),
    background: { media: s, revision: gk(s), coverage: d },
    layers: []
  });
  f ? t.drawImage(f.canvas, f.x, f.y, f.width, f.height, 0, 0, n, r) : qc(t, n, r);
}
function Op(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class vk {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Lg(() => this.requestDraw()), this.controller = ud({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: $t(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Z(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Z(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, s, u, d;
        const r = (s = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : s.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((d = this.canvas) == null ? void 0 : d.clientHeight) || 0))
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
      const d = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), d;
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
        `min-height:${As}px`,
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
          return As;
        },
        getHeight() {
          return As;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = yl(Eu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const s = r ? r(o) || {} : {};
          return {
            ...s,
            minHeight: Math.max(As, Number(s.minHeight || 0)),
            minWidth: Math.max(mk, Number(s.minWidth || 0))
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
      return Nd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ko({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = fk({
        root: this.root,
        documentRef: document,
        onChange: (d) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = d), this.requestDraw();
        },
        onFallback: () => {
          var d, f;
          return (f = (d = this.options).onOpen) == null ? void 0 : f.call(d, this.node);
        }
      }), this.surfaceApp = od(pk, {
        model: this.surfaceModel,
        onAction: (d) => {
          var f, v;
          (d == null ? void 0 : d.type) === "toggle-fullscreen" && ((v = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null || v.call(f));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var d, f;
          return (f = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null ? void 0 : f.call(d);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (u = (s = this.surfaceHost) == null ? void 0 : s.remove) == null || u.call(s), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = Ym(n), t.addEventListener("pointerdown", (s) => {
      var u, d, f;
      s.button === 0 && ((u = n.focus) == null || u.call(n, { preventScroll: !0 }), (d = t.setPointerCapture) == null || d.call(t, s.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(s.clientX, s.clientY, s.pointerId), s.preventDefault(), s.stopPropagation(), (f = s.stopImmediatePropagation) == null || f.call(s));
    }), t.addEventListener("pointermove", (s) => {
      var u;
      this.controller.state.drag.active && (this.controller.moveDrag(s.clientX, s.clientY, "pano"), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s));
    });
    const r = (s) => {
      var u, d;
      this.controller.state.drag.active && ((u = t.releasePointerCapture) == null || u.call(t, s.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), s.preventDefault(), s.stopPropagation(), (d = s.stopImmediatePropagation) == null || d.call(s));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (s) => {
      var u;
      this.controller.applyWheelEvent(s), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (s) => {
      var u;
      this.togglePlayback(), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s);
    }), n.addEventListener("keydown", (s) => {
      var u;
      uk(s, n) && (this.togglePlayback(), s.preventDefault(), s.stopPropagation(), (u = s.stopImmediatePropagation) == null || u.call(s));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !p0(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Op(o.x, o.y, s) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - s.x, o.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var f, v, y, x, k, P;
      const s = US(this, n, r, o), u = t.getLegacyPreviewRect();
      if (!s || !Op(s.x, s.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((f = t.view) == null ? void 0 : f.fov) || 100);
      const d = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((v = t.view) == null ? void 0 : v.fov) || 100), d && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (x = n == null ? void 0 : n.preventDefault) == null || x.call(n), (k = n == null ? void 0 : n.stopPropagation) == null || k.call(n), (P = n == null ? void 0 : n.stopImmediatePropagation) == null || P.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, s, u;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Xc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - Pp - Xc);
    return { x: Xc, y: Pp, w: t, h: n };
  }
  drawLegacy(t) {
    var o, s;
    if (!t || (s = (o = this.node) == null ? void 0 : o.flags) != null && s.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Ep(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Dg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = dk(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, s, u;
    const t = yk(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const d = document.createElement("video");
      d.muted = !0, d.loop = !0, d.playsInline = !0, d.crossOrigin = "anonymous";
      const f = () => {
        this.imgSrc === t && (this.img = d, this.videoPaused || d.play().catch(() => {
        }), this.requestDraw());
      }, v = () => this.requestDraw();
      d.addEventListener("loadedmetadata", f), d.addEventListener("canplay", f), d.addEventListener("timeupdate", v), d.addEventListener("play", v), d.addEventListener("pause", v), d.src = t, d.load(), this.mediaCleanup = () => {
        d.pause(), d.removeEventListener("loadedmetadata", f), d.removeEventListener("canplay", f), d.removeEventListener("timeupdate", v), d.removeEventListener("play", v), d.removeEventListener("pause", v);
      };
      return;
    }
    const n = bk(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Ep(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (o = this.node).setDirtyCanvas) == null || s.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, s, u, d, f, v, y, x, k, P, S, _, F, V;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (u = (s = this.fullscreenController) == null ? void 0 : s.destroy) == null || u.call(s), this.fullscreenController = null, (d = this.wheelCaptureCleanup) == null || d.call(this), this.wheelCaptureCleanup = null, (v = (f = this.surfaceApp) == null ? void 0 : f.unmount) == null || v.call(f), this.surfaceApp = null, (x = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || x.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (k = this.mediaCleanup) == null || k.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (P = this.root) == null ? void 0 : P.remove) == null || S.call(P);
    } catch {
    }
    try {
      a0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((V = (F = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : F.find) == null ? void 0 : V.call(F, (U) => (U == null ? void 0 : U.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function _k(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new vk(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function m0(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const d = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const s = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const d = s ? s.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const d = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
}
function Od(e) {
  return !!(e != null && e.prototype);
}
function Ga(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function xk(e, t = {}) {
  Od(e) || _k(e, {
    ...t,
    onOpen: Ga(e, t.onOpen)
  });
}
function wk(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Od(e)) {
    Np(e, {
      ...r,
      onOpen: Ga(e, t.onOpen)
    });
    return;
  }
  m0(e, "stickers_node_preview", (o) => {
    Np(o, {
      ...r,
      onOpen: Ga(o, t.onOpen)
    });
  });
}
function Sk(e, t = {}) {
  if (!Od(e)) {
    Mp(e, {
      ...t,
      onOpen: Ga(e, t.onOpen)
    });
    return;
  }
  m0(e, "cutout_preview", (n) => {
    Mp(n, {
      ...t,
      onOpen: Ga(n, t.onOpen)
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
}, jr = "pen";
function Tp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function kk(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const s = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function d(v) {
    if (r.splice(0, r.length), o = -1, !v || typeof v != "object" || !Array.isArray(v.entries) || (v.entries.forEach((x) => {
      r.push(String(x || ""));
    }), !r.length)) return;
    const y = Number(v.index);
    Number.isInteger(y) ? y === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, y)) : o = r.length - 1;
  }
  function f(v) {
    r[o] !== v && (r.splice(o + 1), r.push(v), r.length > s && r.shift(), o = r.length - 1);
  }
  return d(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(v) {
      f(String(v || ""));
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
      const v = r.length, y = Math.max(0, v - u), x = o >= 0 ? Math.max(0, Math.min(o, y)) : y, k = r.slice(x, x + u), P = o < 0 ? -1 : Math.max(-1, Math.min(k.length - 1, o - x));
      return {
        version: 1,
        entries: k,
        index: P
      };
    },
    hydrate: d
  };
}
function bo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((s) => String((s == null ? void 0 : s[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function Mk(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function Nk({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: s,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: f
}) {
  var N, E;
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
    historyEntries: Array.from({ length: 8 }, ($, D) => ({ index: D, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return y;
  const x = ((N = t.find(($) => o(e.paintColor, $.color))) == null ? void 0 : N.id) || "", k = !x, P = s(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((E = e.customPaintColor) == null ? void 0 : E.a) ?? 1))) * 100), _ = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[_] ?? 10, V = f(), U = Array.from({ length: 8 }, ($, D) => e.customPaintHistory[D] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: k,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...u(P.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: U.map(($, D) => ({
      index: D,
      color: $ ? { cssColor: r($, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: V,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function Pk({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function Ak({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: s,
  params: u,
  notes: d,
  visibilityRows: f,
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
    notes: d,
    paramsDisabled: !r,
    visibilityRows: f,
    uiSettings: t ? null : v,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Ck({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: s,
  anyLocked: u,
  selectedLocked: d,
  activeAspect: f,
  cutoutAspectOpen: v,
  isExternalSticker: y,
  isStickerHidden: x,
  canRestoreSelectedToInitial: k,
  iconSet: P
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!u }
    ];
  else if (r === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!d },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!d },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: d ? "Unlock" : "Lock", tip: d ? "Unlock" : "Lock", icon: d ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!d }
    ];
  else if (e === "stickers" || r === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!d },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!d }
    ], y(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: P.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: P.replace_image })), y(t)) {
      const D = k(), W = x(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: D ? "Back to initial position" : "Already at initial position",
        icon: P.back_initial,
        disabled: !D
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: W ? "Show" : "Hide",
        tip: W ? "Show input image" : "Hide input image",
        icon: W ? P.eye : P.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: d ? "Unlock" : "Lock", tip: d ? "Unlock" : "Lock", icon: d ? P.lock_open : P.lock_closed }), y(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!d });
  } else
    S = [
      {
        key: "aspect",
        kind: "aspect",
        icon: P.aspect,
        open: !!v,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((D) => ({ value: D, label: D, active: f === D }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: P.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: d ? "Unlock" : "Lock", tip: d ? "Unlock" : "Lock", icon: d ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!d }
    ];
  const _ = o.corners.map((D) => ({ x: Number(D == null ? void 0 : D.x), y: Number(D == null ? void 0 : D.y) })).filter((D) => Number.isFinite(D.x) && Number.isFinite(D.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = _.map((D) => D.x), V = _.map((D) => D.y), U = Math.min(...F), N = Math.max(...F), E = Math.min(...V), $ = Math.max(...V);
  return {
    visible: !0,
    left: (U + N) * 0.5,
    top: $ + 18,
    items: S,
    anchor: { minX: U, maxX: N, minY: E, maxY: $ }
  };
}
const Ik = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function Ek(e, { frame: t, span: n, selection: r, selectedId: o, expanded: s, openRows: u, playing: d, label: f, audio: v = null }) {
  const y = (P, S, _, F, V) => {
    const U = (N) => (r == null ? void 0 : r.owner) === P && r.lane === N ? r.frames.map((E) => E + V) : [];
    return {
      id: P,
      label: _,
      clip: F,
      selected: P === o,
      open: u.has(P),
      keyed: Dx(S, t - V),
      keys: Fx(S).map((N) => ({ frame: N.frame + V, full: N.full })),
      selectedFrames: U(null),
      lanes: Wo(S).map((N) => ({
        key: `${P}:${N}`,
        lane: N,
        label: Ik[N],
        frames: S[N].keyframes.map((E) => E.frame + V),
        selectedFrames: U(N)
      }))
    };
  }, x = e.stickers.filter((P) => P.placement === "sky").sort((P, S) => S.z_index - P.z_index), k = e.stickers.filter((P) => P.placement === "world");
  return {
    visible: !0,
    expanded: s,
    playing: d,
    hasAudio: !!v,
    muted: !!(v != null && v.muted),
    frame: t,
    span: n,
    label: f,
    rows: [
      y("camera", e.camera, "Camera", null, 0),
      ...[...x, ...k].map((P) => {
        const { start: S, in: _, duration: F } = P.clip;
        return y(P.id, P, Pg(P), { start: S, end: F === null ? null : S + F }, S - _);
      })
    ]
  };
}
function Ok(e, t, n, r) {
  const o = $x(e, t, n);
  if (!o) return null;
  const s = Math.min(...n) + r, u = Math.max(...n) + r;
  return { label: s === u ? `Frame ${s}` : `${s} – ${u}`, ...o };
}
const Tk = { class: "pano-floating-right" }, Fk = ["data-settled"], Dk = ["data-ready", "data-settled"], Lk = ["aria-label", "data-tip"], Rk = {
  key: 1,
  class: "pano-camera-preview-label"
}, $k = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), de(Be, null, [
      K("div", Tk, [
        (oe(!0), de(Be, null, xt(e.buttons, (r) => (oe(), Fr(en, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Qr(K("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        K("div", {
          class: it(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: St({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = K("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            K("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (oe(), de("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Te(It, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Lk)) : st("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (oe(), de("div", Rk, tt(e.preview.label || "Preview unavailable"), 1)) : st("", !0)
        ], 14, Dk)
      ], 8, Fk), [
        [qi, e.preview.visible]
      ])
    ], 64));
  }
}, Vk = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, zk = ["y2", "transform"], jk = ["transform"], Hk = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, s) => s * 15), r = ct(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, s) => Qr((oe(), de("div", {
      class: it(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (oe(), de("svg", Vk, [
        s[1] || (s[1] = K("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (oe(!0), de(Be, null, xt(et(n), (u) => (oe(), de("line", {
          key: u,
          class: it(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, zk))), 128)),
        K("g", { transform: r.value }, [...s[0] || (s[0] = [
          K("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, jk),
        s[2] || (s[2] = K("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [qi, e.model.visible === !0]
    ]);
  }
}, Gk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), de("div", {
      class: it(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Te(Wg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Te(en, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Te(Hk, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Kk = ["aria-label"], Bk = { class: "pano-canvas-confirm-title" }, Wk = { class: "pano-canvas-confirm-text" }, Uk = { class: "pano-canvas-confirm-actions" }, Yk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Xk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ qt(null), r = /* @__PURE__ */ qt(null);
    let o = null;
    function s() {
      const x = r.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((k) => k instanceof HTMLElement ? !k.hidden && k.tabIndex >= 0 && k.offsetParent !== null : !1) : [];
    }
    function u(x) {
      const k = r.value;
      if (!k) return;
      const P = k.querySelector(`[data-action='${x}']`);
      P instanceof HTMLButtonElement && P.click();
    }
    function d() {
      var _;
      const x = r.value;
      if (!x) return;
      const k = x.querySelector("[data-action='confirm-accept']");
      if (k instanceof HTMLElement) {
        k.focus();
        return;
      }
      const S = s()[0] || x;
      (_ = S == null ? void 0 : S.focus) == null || _.call(S);
    }
    function f() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function v(x) {
      var V;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const k = s(), P = r.value;
      if (!k.length) {
        x.preventDefault(), (V = P == null ? void 0 : P.focus) == null || V.call(P);
        return;
      }
      const S = k[0], _ = k[k.length - 1], F = document.activeElement;
      if (x.shiftKey) {
        (F === S || F === P || !(P != null && P.contains(F))) && (x.preventDefault(), _.focus());
        return;
      }
      (F === _ || !(P != null && P.contains(F))) && (x.preventDefault(), S.focus());
    }
    function y(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return Ki(() => t.model.visible, (x, k) => {
      if (x) {
        o = document.activeElement, Qu(() => {
          d();
        });
        return;
      }
      k && f();
    }, { immediate: !0 }), Wa(() => {
      f();
    }), (x, k) => e.model.visible === !0 ? (oe(), de("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Gt(y, ["self"])
    }, [
      K("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: v
      }, [
        K("div", Bk, tt(e.model.title), 1),
        K("div", Wk, tt(e.model.text), 1),
        K("div", Uk, [
          k[0] || (k[0] = K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          K("button", Yk, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Kk)
    ], 512)) : st("", !0);
  }
}, qk = ["data-paint-pane"], Jk = ["hidden"], Zk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Qk = ["aria-pressed", "disabled"], eM = ["hidden"], tM = { class: "pano-paint-color-pop-head" }, nM = { class: "pano-paint-color-field" }, rM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, iM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, oM = { class: "pano-paint-color-field" }, aM = { class: "pano-paint-alpha-wrap" }, sM = ["value"], lM = { "data-paint-alpha-value": "" }, cM = ["hidden"], uM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, dM = ["data-paint-history-index", "aria-label", "disabled"], fM = ["data-paint-footer"], hM = ["data-paint-group"], pM = ["hidden"], mM = ["value", "disabled"], gM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, yM = ["hidden"], bM = {
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
    return (r, o) => (oe(), de("div", {
      class: it(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (oe(!0), de(Be, null, xt(e.panes, (s) => {
        var u;
        return oe(), de("div", {
          key: s.key,
          class: it(["pano-paint-pane", { "is-active": e.state.activePane === s.key }]),
          "data-paint-pane": s.key
        }, [
          s.showColorFloat ? (oe(), de("div", {
            key: 0,
            class: it(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (oe(!0), de(Be, null, xt(e.paintSwatches, (d) => (oe(), de("button", {
              key: d.id,
              class: it(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: St(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Zk))), 128)),
            K("button", {
              class: it(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: St({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Qk),
            K("div", {
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
              K("div", tM, [
                K("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: St({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = K("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              K("div", nM, [
                K("div", rM, [
                  K("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: St({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                K("div", iM, [
                  K("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: St({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              K("label", oM, [
                o[1] || (o[1] = K("span", null, "Opacity", -1)),
                K("div", aM, [
                  K("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, sM),
                  K("span", lM, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              K("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                K("div", uM, [
                  (oe(!0), de(Be, null, xt(e.state.historyEntries || [], (d) => (oe(), de("button", {
                    key: d.index,
                    class: it(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: St(n(d.color))
                  }, null, 14, dM))), 128))
                ])
              ], 8, cM)
            ], 12, eM)
          ], 10, Jk)) : st("", !0),
          K("div", {
            class: "pano-paint-footer",
            "data-paint-footer": s.footer
          }, [
            K("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": s.group
            }, [
              (oe(!0), de(Be, null, xt(s.tools, (d) => {
                var f;
                return oe(), Fr(en, {
                  key: `${s.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((f = e.state.activeTools) == null ? void 0 : f[s.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, hM),
            K("div", {
              class: it(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              K("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: St({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, mM),
              K("span", gM, tt(e.state.sizeText || "10"), 1)
            ], 10, pM),
            K("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[s.key]) ?? !s.clearHidden)
            }, [
              Te(en, {
                icon: et(Pe).clear,
                label: s.clearLabel,
                tip: s.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": s.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, yM)
          ], 8, fM)
        ], 10, qk);
      }), 128))
    ], 2));
  }
}, vM = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ qt(null), r = /* @__PURE__ */ qt(null), o = /* @__PURE__ */ qt(null);
    function s() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: s }), (u, d) => (oe(), de(Be, null, [
      K("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      K("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        K("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, _M = {
  key: 0,
  class: "pano-cutout-menu"
}, xM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, wM = ["data-aspect"], SM = ["data-action", "aria-label", "data-tip", "disabled"], kM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), de("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: St({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (oe(!0), de(Be, null, xt(e.model.items || [], (r) => (oe(), de(Be, {
        key: r.key
      }, [
        r.kind === "aspect" ? (oe(), de("div", _M, [
          K("button", xM, [
            Te(It, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          K("div", {
            class: it(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (oe(!0), de(Be, null, xt(r.choices || [], (o) => (oe(), de("button", {
              key: o.value,
              class: it(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, wM))), 128))
          ], 2)
        ])) : (oe(), de("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Te(It, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, SM))
      ], 64))), 128))
    ], 4));
  }
}, MM = {
  key: 0,
  class: "pano-easing"
}, NM = { class: "pano-section-title" }, PM = { class: "pano-easing-range" }, AM = { class: "pano-easing-modes" }, CM = ["aria-pressed", "onClick"], IM = ["viewBox"], EM = ["x", "y"], OM = ["x1", "y1", "x2", "y2"], TM = ["d"], FM = ["x1", "y1", "x2", "y2"], DM = ["x1", "y1", "x2", "y2"], LM = ["cx", "cy"], RM = ["cx", "cy"], $M = { class: "pano-easing-note" }, Hr = 132, Fi = 14, VM = {
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
    ], s = /* @__PURE__ */ qt(null), u = ct(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), d = (S) => Fi + S * Hr, f = (S) => Fi + (1 - S) * Hr, v = ct(() => {
      var U;
      if (((U = n.model) == null ? void 0 : U.easing) === "hold") return `M${d(0)} ${f(0)} H${d(1)} V${f(1)}`;
      const [S, _, F, V] = u.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${d(0)} ${f(0)} C${d(S)} ${f(_)} ${d(F)} ${f(V)} ${d(1)} ${f(1)}`;
    }), y = ct(() => u.value ? u.value.map((S) => S.toFixed(2)).join(", ") : "");
    function x(S) {
      var _;
      return JSON.stringify(S.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function k(S, _) {
      r("timeline", { type: "easing", easing: S, commit: _ });
    }
    function P(S, _) {
      var E;
      if (S.button !== 0 || !u.value) return;
      const F = S.currentTarget;
      (E = F.setPointerCapture) == null || E.call(F, S.pointerId);
      let V = null;
      const U = ($) => {
        const D = s.value.getBoundingClientRect(), W = D.width / (Hr + Fi * 2), z = (($.clientX - D.left) / W - Fi) / Hr, q = 1 - (($.clientY - D.top) / W - Fi) / Hr;
        V = [...V || u.value], V[_] = Math.round(Math.min(1, Math.max(0, z)) * 100) / 100, V[_ + 1] = Math.round(Math.min(1, Math.max(0, q)) * 100) / 100, k(V, !1);
      }, N = () => {
        F.removeEventListener("pointermove", U), F.removeEventListener("pointerup", N), F.removeEventListener("pointercancel", N), V && k(V, !0);
      };
      F.addEventListener("pointermove", U), F.addEventListener("pointerup", N), F.addEventListener("pointercancel", N);
    }
    return (S, _) => e.model ? (oe(), de("div", MM, [
      K("div", NM, [
        _[2] || (_[2] = K("span", null, "Easing", -1)),
        K("span", PM, tt(e.model.label), 1)
      ]),
      K("div", AM, [
        (oe(), de(Be, null, xt(o, (F) => K("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": x(F) ? "true" : "false",
          onClick: (V) => k(F.easing, !0)
        }, tt(F.label), 9, CM)), 64))
      ]),
      u.value || e.model.easing === "hold" ? (oe(), de("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: s,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Hr + Fi * 2} ${Hr + Fi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        K("rect", {
          class: "pano-easing-square",
          x: d(0),
          y: f(1),
          width: Hr,
          height: Hr
        }, null, 8, EM),
        K("line", {
          class: "pano-easing-diagonal",
          x1: d(0),
          y1: f(0),
          x2: d(1),
          y2: f(1)
        }, null, 8, OM),
        K("path", {
          class: "pano-easing-curve",
          d: v.value
        }, null, 8, TM),
        u.value ? (oe(), de(Be, { key: 0 }, [
          K("line", {
            class: "pano-easing-arm",
            x1: d(0),
            y1: f(0),
            x2: d(u.value[0]),
            y2: f(u.value[1])
          }, null, 8, FM),
          K("line", {
            class: "pano-easing-arm",
            x1: d(1),
            y1: f(1),
            x2: d(u.value[2]),
            y2: f(u.value[3])
          }, null, 8, DM),
          K("circle", {
            class: "pano-easing-handle",
            cx: d(u.value[0]),
            cy: f(u.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (F) => P(F, 0))
          }, null, 40, LM),
          K("circle", {
            class: "pano-easing-handle",
            cx: d(u.value[2]),
            cy: f(u.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (F) => P(F, 2))
          }, null, 40, RM)
        ], 64)) : st("", !0)
      ], 8, IM)) : st("", !0),
      K("div", $M, [
        e.model.mixed ? (oe(), de(Be, { key: 0 }, [
          ba("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (oe(), de(Be, { key: 1 }, [
          ba("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (oe(), de(Be, { key: 2 }, [
          ba("Holds the value, then jumps to the next keyframe.")
        ], 64)) : u.value ? (oe(), de(Be, { key: 3 }, [
          ba("cubic-bezier(" + tt(y.value) + ")", 1)
        ], 64)) : st("", !0)
      ])
    ])) : st("", !0);
  }
}, zM = {
  class: "pano-side",
  "data-side": ""
}, jM = { class: "pano-side-head" }, HM = { class: "pano-side-title" }, GM = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, KM = {
  key: 0,
  class: "pano-side-scroll"
}, BM = { class: "pano-inspector" }, WM = { class: "pano-ui-row pano-coverage-row" }, UM = ["data-selected"], YM = ["aria-pressed", "disabled"], XM = ["aria-pressed", "disabled"], qM = {
  key: 0,
  class: "pano-section-title"
}, JM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, ZM = {
  class: "pano-picker",
  "data-picker": "selection"
}, QM = ["disabled"], eN = { class: "pano-picker-label" }, tN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, nN = ["hidden"], rN = ["data-selection-id"], iN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, oN = {
  key: 2,
  class: "pano-state-actions"
}, aN = ["disabled"], sN = ["data-key"], lN = ["min", "max", "step", "value", "disabled", "data-param-key"], cN = ["min", "max", "step", "value", "disabled", "data-param-key"], uN = { class: "pano-visibility-section" }, dN = { class: "pano-visibility-stack" }, fN = ["data-visibility-row"], hN = { class: "pano-visibility-name" }, pN = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, mN = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], gN = ["open"], yN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, bN = { class: "pano-ui-settings-body" }, vN = { class: "pano-ui-row" }, _N = ["data-selected"], xN = ["aria-pressed"], wN = ["aria-pressed"], SN = { class: "pano-ui-row" }, kN = ["data-selected"], MN = ["aria-pressed"], NN = ["aria-pressed"], PN = {
  key: 1,
  class: "pano-side-footer"
}, AN = ["data-action"], CN = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ct(() => {
      const d = n.model;
      return !d || typeof d != "object" ? !1 : Object.keys(d).length > 0 && !!d.coverage;
    });
    function s(d) {
      return { "--v": `${Number((d == null ? void 0 : d.fillPct) || 0)}%` };
    }
    function u(d, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (d == null ? void 0 : d.enabled) === !1;
    }
    return (d, f) => {
      var v, y, x, k, P;
      return oe(), de("div", zM, [
        K("div", jM, [
          K("div", HM, [
            K("span", GM, [
              Te(It, {
                icon: et(Pe).globe
              }, null, 8, ["icon"])
            ]),
            K("span", null, tt(e.nodeTitle), 1)
          ]),
          f[1] || (f[1] = K("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[12] || (f[12] = K("div", { class: "pano-divider" }, null, -1)),
        o.value ? (oe(), de("div", KM, [
          K("div", BM, [
            f[11] || (f[11] = K("div", { class: "pano-section-title" }, [
              K("span", null, "Scene")
            ], -1)),
            K("div", WM, [
              f[2] || (f[2] = K("label", null, "Coverage", -1)),
              K("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "360", 8, YM),
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, XM)
              ], 8, UM)
            ]),
            e.model.transformTitle !== !1 ? (oe(), de("div", qM, [...f[3] || (f[3] = [
              K("span", null, "Transform", -1)
            ])])) : st("", !0),
            e.model.selectionPicker ? (oe(), de("div", JM, [
              K("label", null, tt(e.model.selectionPicker.label), 1),
              K("div", ZM, [
                K("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  K("span", eN, [
                    e.model.selectionPicker.currentIcon ? (oe(), de("span", tN, [
                      Te(It, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : st("", !0),
                    K("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[4] || (f[4] = K("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, QM),
                K("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (oe(!0), de(Be, null, xt(e.model.selectionPicker.items || [], (S) => (oe(), de("button", {
                    key: S.id,
                    type: "button",
                    class: it(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (oe(), de("span", iN, [
                      Te(It, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : st("", !0),
                    K("span", null, tt(S.label), 1)
                  ], 10, rN))), 128))
                ], 8, nN)
              ])
            ])) : st("", !0),
            e.model.copyStateButton ? (oe(), de("div", oN, [
              K("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Te(It, {
                  icon: et(Pe).copy
                }, null, 8, ["icon"]),
                K("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, aN)
            ])) : st("", !0),
            K("div", {
              class: it(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (oe(!0), de(Be, { key: 0 }, xt(e.model.notes, (S) => (oe(), de("div", {
                key: S,
                class: "pano-param-note"
              }, tt(S), 1))), 128)) : (oe(!0), de(Be, { key: 1 }, xt(e.model.params || [], (S) => (oe(), de("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                K("label", null, tt(S.label), 1),
                K("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: u(S, e.model),
                  style: St(s(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, lN),
                K("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: u(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, cN)
              ], 8, sN))), 128))
            ], 2),
            Te(VM, {
              model: e.easing,
              onTimeline: f[0] || (f[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (oe(), de(Be, { key: 3 }, [
              f[6] || (f[6] = K("div", { class: "pano-divider" }, null, -1)),
              K("div", uN, [
                f[5] || (f[5] = K("div", { class: "pano-section-title" }, [
                  K("span", null, "Layers")
                ], -1)),
                K("div", dN, [
                  (oe(!0), de(Be, null, xt(e.model.visibilityRows, (S) => (oe(), de("div", {
                    key: S.key,
                    class: it(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    K("span", hN, [
                      K("span", pN, [
                        Te(It, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      K("span", null, tt(S.label), 1)
                    ]),
                    K("button", {
                      class: it(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      Te(It, {
                        icon: S.visible === !0 ? et(Pe).eye : et(Pe).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, mN)
                  ], 10, fN))), 128))
                ])
              ])
            ], 64)) : st("", !0),
            e.model.uiSettings ? (oe(), de("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              K("summary", null, [
                f[7] || (f[7] = K("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                K("span", yN, [
                  Te(It, {
                    icon: et(Pe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              K("div", bN, [
                K("div", vN, [
                  f[8] || (f[8] = K("label", null, "Drag X", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, xN),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, wN)
                  ], 8, _N)
                ]),
                K("div", SN, [
                  f[9] || (f[9] = K("label", null, "Drag Y", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, MN),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, NN)
                  ], 8, kN)
                ]),
                f[10] || (f[10] = K("div", { class: "pano-ui-row" }, [
                  K("span"),
                  K("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, gN)) : st("", !0)
          ])
        ])) : st("", !0),
        (e.model.footerButtons || []).length ? (oe(), de("div", PN, [
          (oe(!0), de(Be, null, xt(e.model.footerButtons, (S) => (oe(), de("button", {
            key: S.action,
            class: it(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, tt(S.label), 11, AN))), 128))
        ])) : st("", !0)
      ]);
    };
  }
}, IN = { class: "pano-timeline-bar" }, EN = ["aria-label", "data-tip"], ON = ["aria-label", "data-tip"], TN = { class: "pano-timeline-time" }, FN = ["aria-expanded"], DN = { class: "pano-timeline-body" }, LN = { class: "pano-timeline-grid" }, RN = { class: "pano-timeline-name" }, $N = ["aria-expanded", "aria-label", "onClick"], VN = ["title", "aria-current", "onClick"], zN = ["data-keyed", "aria-label", "onClick"], jN = ["onPointerdown"], HN = ["onPointerdown"], GN = ["onPointerdown"], KN = ["onPointerdown"], BN = ["aria-label", "data-tip", "onPointerdown"], WN = { key: 0 }, UN = ["onPointerdown"], YN = ["aria-label", "data-tip", "onPointerdown"], XN = { key: 0 }, qN = 10, JN = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], s = /* @__PURE__ */ qt(null), u = /* @__PURE__ */ qt(1);
    let d = null, f = null;
    Il(() => {
      d = new ResizeObserver(([W]) => {
        u.value = Math.max(1, W.contentRect.width);
      }), s.value && d.observe(s.value);
    }), Wa(() => {
      d == null || d.disconnect(), f == null || f();
    });
    const v = ct(() => Math.max(1, Number(n.model.span || 1))), y = ct(() => u.value / v.value), x = (W) => `${W / v.value * 100}%`, k = ct(() => {
      const W = o.find((q) => q * y.value >= 56) || o[o.length - 1], z = [];
      for (let q = 0; q < v.value; q += W) z.push(q);
      return z;
    });
    function P(W) {
      const z = s.value.getBoundingClientRect(), q = Math.floor((W - z.left) / Math.max(1, z.width) * v.value);
      return Math.min(v.value - 1, Math.max(0, q));
    }
    function S(W, z, q) {
      const T = Math.ceil(qN / Math.max(1e-6, y.value)), O = new Map(z.map((le) => [le.frame, le.full]));
      return Kx(z.map((le) => le.frame), T).map((le, J) => ({
        ...le,
        key: `${W}:${J}`,
        partial: le.frames.some((X) => !O.get(X)),
        selected: le.frames.some((X) => q.includes(X))
      }));
    }
    function _(W) {
      return S(W.id, W.keys, W.selectedFrames);
    }
    function F(W) {
      return S(W.key, W.frames.map((z) => ({ frame: z, full: !0 })), W.selectedFrames);
    }
    function V(W) {
      const z = W.end === null ? v.value : W.end;
      return { left: x(W.start), width: x(Math.max(0, z - W.start)) };
    }
    function U(W, z) {
      const q = W.clientX, T = Math.max(1e-6, y.value);
      let O = 0;
      z("start", 0, W);
      const le = (X) => {
        if (X.pointerId !== W.pointerId) return;
        const ge = Math.round((X.clientX - q) / T);
        ge !== O && (O = ge, z("move", O, X));
      }, J = (X) => {
        X.pointerId === W.pointerId && (f(), z("end", O, X));
      };
      f == null || f(), f = () => {
        window.removeEventListener("pointermove", le), window.removeEventListener("pointerup", J), window.removeEventListener("pointercancel", J), f = null;
      }, window.addEventListener("pointermove", le), window.addEventListener("pointerup", J), window.addEventListener("pointercancel", J);
    }
    function N(W) {
      W.button === 0 && U(W, (z, q, T) => r("action", { type: "seek", frame: P(T.clientX), phase: z }));
    }
    function E(W, z, q) {
      W.button === 0 && (r("action", { type: "select-row", id: z.id }), U(W, (T, O) => r("action", { type: "clip", id: z.id, mode: q, delta: O, phase: T })));
    }
    function $(W, z, q, T, O) {
      if (W.button === 0) {
        if (W.shiftKey) {
          r("action", { type: "select-keys", owner: z.id, lane: q, frames: T.frames, additive: !0 });
          return;
        }
        T.frames.every((le) => O.includes(le)) || r("action", { type: "select-keys", owner: z.id, lane: q, frames: T.frames, additive: !1 }), U(W, (le, J) => r("action", { type: "move-keys", delta: J, phase: le }));
      }
    }
    function D(W, z, q) {
      W.button !== 0 || W.target !== W.currentTarget || r("action", { type: "select-keys", owner: z.id, lane: q, frames: [], additive: !1 });
    }
    return (W, z) => Qr((oe(), de("section", {
      class: it(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      K("div", IN, [
        K("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause" : "Play",
          "data-tip": e.model.playing ? "Pause" : "Play",
          onClick: z[0] || (z[0] = (q) => r("action", { type: "play" }))
        }, [
          Te(It, {
            icon: e.model.playing ? et(Pe).pause : et(Pe).play
          }, null, 8, ["icon"])
        ], 8, EN),
        e.model.hasAudio ? (oe(), de("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: z[1] || (z[1] = (q) => r("action", { type: "mute" }))
        }, [
          Te(It, {
            icon: e.model.muted ? et(Pe).volume_muted : et(Pe).volume2
          }, null, 8, ["icon"])
        ], 8, ON)) : st("", !0),
        K("span", TN, tt(e.model.label), 1),
        K("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: z[2] || (z[2] = (q) => r("action", { type: "toggle-expanded" }))
        }, [
          z[3] || (z[3] = K("span", null, "Timeline", -1)),
          Te(It, {
            icon: et(Pe).chevron
          }, null, 8, ["icon"])
        ], 8, FN)
      ]),
      Qr(K("div", DN, [
        K("div", LN, [
          z[4] || (z[4] = K("div", { class: "pano-timeline-corner" }, null, -1)),
          K("div", {
            ref_key: "rulerRef",
            ref: s,
            class: "pano-timeline-ruler",
            onPointerdown: N
          }, [
            (oe(!0), de(Be, null, xt(k.value, (q) => (oe(), de("span", {
              key: q,
              class: "pano-timeline-tick",
              style: St({ left: x(q) })
            }, tt(q), 5))), 128)),
            K("span", {
              class: "pano-timeline-playhead",
              style: St({ left: x(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (oe(!0), de(Be, null, xt(e.model.rows || [], (q) => (oe(), de(Be, {
            key: q.id
          }, [
            K("div", {
              class: it(["pano-timeline-head", { selected: q.selected }])
            }, [
              K("div", RN, [
                K("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": q.open ? "true" : "false",
                  "aria-label": q.open ? `Hide ${q.label} parameters` : `Show ${q.label} parameters`,
                  onClick: Gt((T) => r("action", { type: "toggle-row", id: q.id }), ["stop"])
                }, [
                  Te(It, {
                    icon: et(Pe).chevron
                  }, null, 8, ["icon"])
                ], 8, $N),
                K("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: q.label,
                  "aria-current": q.selected ? "true" : void 0,
                  onClick: (T) => r("action", { type: "select-row", id: q.id })
                }, [
                  Te(It, {
                    icon: q.clip ? et(Pe).image : et(Pe).camera
                  }, null, 8, ["icon"]),
                  K("span", null, tt(q.label), 1)
                ], 8, VN),
                K("button", {
                  class: it(["pano-timeline-key", { keyed: q.keyed }]),
                  type: "button",
                  "data-keyed": q.keyed ? "true" : "false",
                  "aria-label": q.keyed ? `Every ${q.label} parameter has a keyframe here; update them` : `Add keyframes for every ${q.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Gt((T) => r("action", { type: "key-row", owner: q.id }), ["stop"])
                }, [
                  Te(It, {
                    icon: et(Pe).keyframe
                  }, null, 8, ["icon"])
                ], 10, zN)
              ]),
              q.open ? (oe(!0), de(Be, { key: 0 }, xt(q.lanes, (T) => (oe(), de("div", {
                key: T.key,
                class: "pano-timeline-lane-head"
              }, tt(T.label), 1))), 128)) : st("", !0)
            ], 2),
            K("div", {
              class: it(["pano-timeline-track", { selected: q.selected }])
            }, [
              K("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (T) => D(T, q, null)
              }, [
                q.clip ? (oe(), de("div", {
                  key: 0,
                  class: it(["pano-timeline-clip", { open: q.clip.end === null }]),
                  style: St(V(q.clip)),
                  onPointerdown: Gt((T) => E(T, q, "move"), ["stop"])
                }, [
                  K("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Gt((T) => E(T, q, "start"), ["stop"])
                  }, null, 40, GN),
                  K("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Gt((T) => E(T, q, "end"), ["stop"])
                  }, null, 40, KN)
                ], 46, HN)) : st("", !0),
                (oe(!0), de(Be, null, xt(_(q), (T) => (oe(), de("button", {
                  key: T.key,
                  type: "button",
                  class: it(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1, partial: T.partial }]),
                  style: St({ left: x(T.frame + 0.5) }),
                  "aria-label": `${q.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: Gt((O) => $(O, q, null, T, q.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (oe(), de("span", WN, tt(T.frames.length), 1)) : st("", !0)
                ], 46, BN))), 128))
              ], 40, jN),
              q.open ? (oe(!0), de(Be, { key: 0 }, xt(q.lanes, (T) => (oe(), de("div", {
                key: T.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => D(O, q, T.lane)
              }, [
                (oe(!0), de(Be, null, xt(F(T), (O) => (oe(), de("button", {
                  key: O.key,
                  type: "button",
                  class: it(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: St({ left: x(O.frame + 0.5) }),
                  "aria-label": `${T.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Gt((le) => $(le, q, T.lane, O, T.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (oe(), de("span", XN, tt(O.frames.length), 1)) : st("", !0)
                ], 46, YN))), 128))
              ], 40, UN))), 128)) : st("", !0),
              K("span", {
                class: "pano-timeline-playhead",
                style: St({ left: x(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ])
      ], 512), [
        [qi, e.model.expanded]
      ])
    ], 2)), [
      [qi, e.model.visible]
    ]);
  }
}, ZN = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), de("div", {
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
}, QN = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, eP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (oe(), de("div", QN, [
      (oe(!0), de(Be, null, xt(e.buttons, (r) => Qr((oe(), Fr(en, {
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
        [qi, r.visible !== !1]
      ])), 128))
    ]));
  }
}, tP = ["data-video-ready"], nP = { class: "pano-video-transport-shell" }, rP = { class: "pano-video-controls-left" }, iP = { class: "pano-video-filmstrip" }, oP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, aP = ["src", "onLoad"], sP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, lP = ["max", "value", "disabled"], cP = { class: "pano-video-controls-right" }, uP = ["data-has-audio"], dP = { class: "pano-video-volume-pop" }, fP = ["value", "disabled"], hP = {
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
      return (($ = t.state) == null ? void 0 : $.playing) === !0 ? Pe.pause : Pe.play;
    }), s = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), d = ct(() => {
      var $;
      return (($ = t.state) == null ? void 0 : $.loop) === !1 ? Pe.loop_off : Pe.loop;
    }), f = ct(() => {
      var $, D;
      return (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((D = t.state) == null ? void 0 : D.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), v = ct(() => {
      var $, D, W;
      return (($ = t.state) == null ? void 0 : $.hasAudio) !== !0 ? Pe.volume : ((D = t.state) == null ? void 0 : D.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Pe.volume_muted : Pe.volume2;
    }), y = ct(() => {
      var $;
      return Math.max(0, Math.min(100, Number((($ = t.state) == null ? void 0 : $.progressPct) || 0)));
    }), x = ct(() => ({ left: `${y.value}%` })), k = ct(() => {
      var z, q;
      const $ = (z = t.state) == null ? void 0 : z.volumePct, D = Number(((q = t.state) == null ? void 0 : q.volume) ?? 1) * 100, W = Number($ ?? D ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), P = ct(() => {
      var W, z;
      const D = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((z = t.state) == null ? void 0 : z.durationLabel) || "0:00")
      ].reduce((q, T) => Math.max(q, T.length), 4);
      return `${Math.max(4, D)}ch`;
    }), S = ct(() => ({ "--pano-video-time-ch": P.value })), _ = ct(() => {
      var W, z;
      const $ = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if ($.length) return $;
      const D = Math.max(7, Number(((z = t.state) == null ? void 0 : z.thumbnailCount) || 9));
      return Array.from({ length: D }, (q, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ qt(/* @__PURE__ */ new Set()), V = ($) => String(($ == null ? void 0 : $.id) || ($ == null ? void 0 : $.src) || ($ == null ? void 0 : $.label) || ""), U = ($) => F.value.has(V($)), N = ($) => {
      const D = new Set(F.value);
      D.add(V($)), F.value = D;
    };
    Ki(_, ($) => {
      const D = new Set($.map(V)), W = /* @__PURE__ */ new Set();
      for (const z of F.value)
        D.has(z) && W.add(z);
      F.value = W;
    }, { immediate: !0 });
    const E = ct(() => {
      var $;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number((($ = t.state) == null ? void 0 : $.shellMaxWidthPx) || 640))}px`
      };
    });
    return ($, D) => (oe(), de("div", {
      class: it(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: St(E.value)
    }, [
      D[1] || (D[1] = K("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      K("div", nP, [
        K("div", rP, [
          Te(en, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          K("div", {
            class: "pano-video-time pano-video-time-start",
            style: St(S.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        K("div", iP, [
          K("div", oP, [
            (oe(!0), de(Be, null, xt(_.value, (W) => (oe(), de("div", {
              key: V(W),
              class: it(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && U(W)
              }])
            }, [
              W.src ? (oe(), de("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (z) => N(W)
              }, null, 40, aP)) : (oe(), de("span", sP))
            ], 2))), 128))
          ]),
          K("div", {
            class: "pano-video-playhead",
            style: St(x.value),
            "aria-hidden": "true"
          }, [...D[0] || (D[0] = [
            K("span", { class: "pano-video-playhead-line" }, null, -1),
            K("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          K("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, lP)
        ]),
        K("div", cP, [
          K("div", {
            class: "pano-video-time pano-video-time-end",
            style: St(S.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Te(en, {
            "extra-class": "pano-video-control",
            icon: d.value,
            label: s.value,
            tip: u.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          K("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            K("div", dP, [
              K("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: St(k.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, fP)
            ]),
            Te(en, {
              "extra-class": "pano-video-control",
              icon: v.value,
              label: f.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, uP)
        ])
      ])
    ], 14, tP));
  }
}, pP = { class: "pano-floating-top" }, mP = ["data-selected", "data-view-count"], gP = ["data-view", "aria-pressed", "aria-label", "disabled"], yP = { class: "label" }, bP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return oe(), de("div", pP, [
        K("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (oe(!0), de(Be, null, xt(e.buttons, (o) => Qr((oe(), de("button", {
            key: o.key,
            class: it(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            Te(It, {
              icon: o.icon
            }, null, 8, ["icon"]),
            K("span", yP, tt(o.label), 1)
          ], 10, gP)), [
            [qi, o.visible !== !1]
          ])), 128))
        ], 8, mP)
      ]);
    };
  }
};
function g0(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Pe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Pe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Pe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Pe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Pe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Pe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Pe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Pe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Pe.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Pe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Pe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Pe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Pe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Pe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Pe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Pe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Pe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Pe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Pe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Pe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Pe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Pe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Pe.lasso_tool }
        ]
      }
    ]
  };
}
const vP = ["aria-label"], _P = { class: "pano-stage-column" }, xP = { class: "pano-stage-wrap" }, wP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, SP = {
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
    let s = "", u = !1, d = null;
    const f = /* @__PURE__ */ qt(null), v = /* @__PURE__ */ qt(null), y = /* @__PURE__ */ qt(null);
    function x() {
      var T, O;
      return ((O = (T = y.value) == null ? void 0 : T.getRefs) == null ? void 0 : O.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function k(T) {
      var O, le;
      return ((le = (O = v.value) == null ? void 0 : O.open) == null ? void 0 : le.call(O, T)) === !0;
    }
    function P(T) {
      o("image-file-selected", T);
    }
    function S(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: k });
    const _ = ct(() => r.readOnly === !0), F = ct(() => r.shellPreset || g0(r.type)), V = ct(() => {
      var O, le, J;
      const T = String((((O = r.uiState) == null ? void 0 : O.stageStatus) === "failed" ? (le = r.uiState) == null ? void 0 : le.stageStatusDetail : (J = r.uiState) == null ? void 0 : J.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Re-run the node to refresh it." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), U = ct(() => {
      var O;
      const T = Array.isArray((O = F.value) == null ? void 0 : O.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return _.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Pe.fullscreen
      }), T;
    });
    function N() {
      const T = f.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((O) => O instanceof HTMLElement ? !O.hidden && O.tabIndex >= 0 && O.offsetParent !== null : !1) : [];
    }
    function E() {
      var le;
      const O = N()[0] || f.value;
      (le = O == null ? void 0 : O.focus) == null || le.call(O);
    }
    function $() {
      var T;
      d != null && d.isConnected && ((T = d.focus) == null || T.call(d)), d = null;
    }
    function D(T) {
      var O, le, J, X;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const ge = N();
          if (!ge.length) {
            T.preventDefault(), (le = (O = f.value) == null ? void 0 : O.focus) == null || le.call(O);
            return;
          }
          const Ae = ge[0], se = ge[ge.length - 1], I = document.activeElement;
          if (T.shiftKey) {
            (I === Ae || I === f.value || !((J = f.value) != null && J.contains(I))) && (T.preventDefault(), se.focus());
            return;
          }
          (I === se || !((X = f.value) != null && X.contains(I))) && (T.preventDefault(), Ae.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function W() {
      u || (s = document.body.style.overflow, document.body.style.overflow = "hidden", u = !0);
    }
    function z() {
      u && (document.body.style.overflow = s, u = !1);
    }
    function q(T) {
      document.removeEventListener("keydown", D), T ? (d || (d = document.activeElement), W(), document.addEventListener("keydown", D), Qu(() => {
        E();
      })) : (z(), $());
    }
    return Il(() => {
      q(r.open);
    }), Wa(() => {
      z(), document.removeEventListener("keydown", D), $();
    }), Ki(() => r.open, (T) => {
      q(T);
    }), (T, O) => e.open ? (oe(), de("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: O[2] || (O[2] = Gt((le) => o("close"), ["self"]))
    }, [
      K("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        K("div", _P, [
          K("div", xP, [
            O[3] || (O[3] = K("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            O[4] || (O[4] = K("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            O[5] || (O[5] = K("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (oe(), de("div", wP, tt(V.value), 1)) : st("", !0),
            O[6] || (O[6] = K("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              K("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Te(vM, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Te(Ug, {
              ref_key: "imageFilePickerRef",
              ref: v,
              onFileSelected: P,
              onFileCancelled: S
            }, null, 512),
            _.value ? st("", !0) : (oe(), de(Be, { key: 1 }, [
              Te(eP, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Te(Gk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Te(bM, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Te(hP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Te(bP, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Te($k, {
              buttons: e.uiState.floatingButtons || U.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            Te(kM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Te(ZN, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Te(Xk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Te(JN, {
            model: e.uiState.timeline || {},
            onAction: O[0] || (O[0] = (le) => o("timeline", le))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? st("", !0) : (oe(), Fr(CN, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: O[1] || (O[1] = (le) => o("timeline", le))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, vP)
    ])) : st("", !0);
  }
}, or = "loading", Go = "ready", ar = "failed";
function y0(e, t = "") {
  return e && (e.__panoLoadState = or, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function b0(e, t = "") {
  return e && (e.__panoLoadState = Go, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function v0(e, t = "") {
  return e && (e.__panoLoadState = ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Vu(e, t) {
  return e ? e.__panoLoadState === ar ? ar : typeof t == "function" && t(e) ? Go : or : Go;
}
function zu(e) {
  return Vu(e) === ar;
}
function kP({ presented: e, background: t = Go, stickers: n = [] } = {}) {
  if (!e) return { status: or, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === or, s = r.includes(or);
  if (o && s) return { status: or, detail: "mixed" };
  if (o) return { status: or, detail: "background" };
  if (s) return { status: or, detail: "stickers" };
  const u = t === ar, d = r.includes(ar);
  return u && d ? { status: ar, detail: "mixed" } : u ? { status: ar, detail: "background" } : d ? { status: ar, detail: "stickers" } : { status: Go, detail: "" };
}
function vo(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function MP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function NP(e, t, n = null) {
  var o, s;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (r = d.outputNode);
    } catch {
    }
  return !r && n != null && (r = MP(e == null ? void 0 : e.graph, n)), r;
}
function PP(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function AP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function CP(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function IP({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (E) => {
    if (!E) return "";
    if (typeof E == "string") return String(E || "").trim();
    if (Array.isArray(E)) {
      if (E.length === 0) return "";
      if (E.length === 1) return o(E[0]);
      const $ = String(E[0] || "").trim();
      if ($)
        return vo(t, {
          filename: $,
          subfolder: String(E[1] || "").trim(),
          type: String(E[2] || "output").trim() || "output"
        });
      for (const D of E) {
        const W = o(D);
        if (W) return W;
      }
      return "";
    }
    return typeof (E == null ? void 0 : E.src) == "string" && E.src ? E.src : typeof (E == null ? void 0 : E.url) == "string" && E.url ? E.url : vo(t, E);
  }, s = (E) => {
    if (!E || typeof E != "object") return "";
    const $ = String(E.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(E.value || "");
    if ($ !== "comfy_image") return "";
    const D = String(E.filename || "").trim();
    return D ? vo(t, {
      filename: D,
      subfolder: String(E.subfolder || ""),
      type: String(E.storage || "input")
    }) : "";
  }, u = (E) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || E == null) return null;
    const D = String(E);
    return $ instanceof Map ? $.get(E) || $.get(D) || $.get(Number(D)) || null : $[E] || $[D] || null;
  }, d = (E, $) => {
    var W;
    const D = u(E == null ? void 0 : E.id);
    return Array.isArray((W = D == null ? void 0 : D.ui) == null ? void 0 : W[$]) ? D.ui[$] : Array.isArray(D == null ? void 0 : D[$]) ? D[$] : [];
  }, f = (E, $) => {
    const D = u(E == null ? void 0 : E.id);
    return D != null && D.ui && Object.prototype.hasOwnProperty.call(D.ui, $) ? D.ui[$] : D && Object.prototype.hasOwnProperty.call(D, $) ? D[$] : null;
  }, v = (E, $) => {
    const D = f(E, "pano_sticker_input_state_hash"), W = Array.isArray(D) ? D[0] : D;
    return String(W ?? "").trim() || CP($);
  }, y = (E) => {
    const $ = [], D = /* @__PURE__ */ new Set();
    for (const W of E || []) {
      const z = o(W);
      !z || D.has(z) || (D.add(z), $.push(z));
    }
    return $;
  }, x = (E, $) => {
    var z;
    const D = [];
    Array.isArray(E == null ? void 0 : E.images) && E.images.length && D.push(E.images), Array.isArray((z = E == null ? void 0 : E.ui) == null ? void 0 : z.images) && E.ui.images.length && D.push(E.ui.images);
    const W = [];
    for (const q of D)
      $ >= 0 && $ < q.length && W.push(q[$]), W.push(...q);
    return W;
  }, k = (E, $) => {
    var se;
    const D = String($ || "").trim();
    if (!D) return { src: "", sourceType: "", inputName: "" };
    const z = (Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs : []).findIndex((I) => String((I == null ? void 0 : I.name) || "") === D);
    if (z < 0) return { src: "", sourceType: "", inputName: D };
    const q = E.graph ? E.getInputLink(z) : null;
    if ((q == null ? void 0 : q.origin_id) == null) return { src: "", sourceType: "", inputName: D };
    const T = q.origin_id, O = NP(E, z, T);
    if (!O) return { src: "", sourceType: "", inputName: D };
    const le = Number(q.origin_slot ?? 0);
    let J = [];
    try {
      J = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(O) || [] : [];
    } catch {
      J = [];
    }
    if (Array.isArray(J) && J.length) {
      const I = [];
      le >= 0 && le < J.length && I.push(J[le]), I.push(...J);
      const $e = y(I);
      if ($e.length)
        return { src: $e[0], srcCandidates: $e, sourceType: "appNodeImageUrls", inputName: D };
    }
    const X = y(x(u((O == null ? void 0 : O.id) ?? T), le));
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: D };
    const ge = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (ge.length) {
      const I = [];
      le >= 0 && le < ge.length && I.push(ge[le]), I.push(...ge);
      const $e = y(I);
      if ($e.length)
        return { src: $e[0], srcCandidates: $e, sourceType: "nodeImgs", inputName: D };
    }
    const Ae = (se = O == null ? void 0 : O.widgets) == null ? void 0 : se.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image");
    if (Ae) {
      let I = o(Ae.value);
      if (I && !I.includes("/") && !I.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (I = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`), I) return { src: I, sourceType: "widget", inputName: D };
    }
    return { src: "", sourceType: "", inputName: D };
  }, P = (E, $ = []) => {
    const D = Array.isArray($) ? $ : [$];
    for (const W of D) {
      const z = k(E, W);
      if (String((z == null ? void 0 : z.src) || "").trim()) return z;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, S = (E) => {
    const $ = String(E || "").trim();
    if (!$) return [];
    if (PP($)) return [$];
    const { filename: D, subfolder: W } = AP($);
    return D ? y([
      vo(t, { filename: D, subfolder: W, type: "temp" }),
      vo(t, { filename: D, subfolder: W, type: "output" }),
      vo(t, { filename: D, subfolder: W, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: s,
    clearFailedLinkedImages: (E) => {
      var $, D;
      try {
        (D = ($ = E == null ? void 0 : E.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || D.call($, (W, z, q) => {
          var T;
          W != null && W.img && ((T = r == null ? void 0 : r.isImageLoadFailed) != null && T.call(r, W.img)) && q.delete(z);
        });
      } catch {
      }
    },
    externalStateHash: v,
    invalidateUiImage: (E, $) => {
      var D;
      (D = E == null ? void 0 : E.delete) == null || D.call(E, `__ui__${String($ || "")}`);
    },
    linkedValue: (E, $) => {
      var T, O, le, J;
      const D = String($ || ""), W = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs.findIndex((X) => String((X == null ? void 0 : X.name) || "") === D) : -1, z = W >= 0 && E.graph ? E.getInputLink(W) : null;
      if (z) {
        const X = u(z.origin_id), ge = [
          X == null ? void 0 : X.output,
          X == null ? void 0 : X.result,
          (T = X == null ? void 0 : X.data) == null ? void 0 : T.output,
          (O = X == null ? void 0 : X.data) == null ? void 0 : O.result,
          (le = X == null ? void 0 : X.ui) == null ? void 0 : le.output,
          (J = X == null ? void 0 : X.ui) == null ? void 0 : J.result
        ];
        for (const Ae of ge) {
          if (!Array.isArray(Ae)) continue;
          const se = Ae[Number(z.origin_slot || 0)];
          if (typeof se == "string" && se.trim()) return se;
        }
      }
      const q = Array.isArray(E == null ? void 0 : E.widgets) ? E.widgets.find((X) => String((X == null ? void 0 : X.name) || "") === D) : null;
      return String((q == null ? void 0 : q.value) || "");
    },
    loadPreferredExactLinkedImage: (E, $ = [], D = null, W = "") => {
      var rt;
      const z = Array.isArray($) ? $ : [$], q = P(E, z), O = (Array.isArray(q == null ? void 0 : q.srcCandidates) && q.srcCandidates.length ? q.srcCandidates : [q == null ? void 0 : q.src]).map((gt) => String(gt || "").trim()).filter(Boolean);
      if (!O.length) return null;
      const le = y(O.flatMap((gt) => S(gt)));
      if (!le.length) return null;
      E.__panoLinkedInputImageCache || (E.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(W || z.join("|") || "image_exact"), X = O.join(`
`), ge = E.__panoLinkedInputImageCache.get(J);
      if (ge && ge.srcRaw === X && ge.img) return ge.img;
      const Ae = n || globalThis.Image;
      if (typeof Ae != "function") return null;
      const se = new Ae();
      (rt = r == null ? void 0 : r.markImageLoading) == null || rt.call(r, se, X);
      const I = { srcRaw: X, resolvedSrc: "", img: se };
      E.__panoLinkedInputImageCache.set(J, I);
      let $e = -1;
      const B = (gt) => {
        var gn, We, Et;
        gt === "ready" ? (gn = r == null ? void 0 : r.markImageReady) == null || gn.call(r, se, X) : (We = r == null ? void 0 : r.markImageFailed) == null || We.call(r, se, X), D == null || D(se), (Et = E.setDirtyCanvas) == null || Et.call(E, !0, !0);
      }, He = () => {
        if ($e += 1, $e >= le.length) {
          B("failed");
          return;
        }
        I.resolvedSrc = le[$e], se.src = I.resolvedSrc;
      };
      return se.onload = () => B("ready"), se.onerror = () => {
        if ($e + 1 < le.length) {
          He();
          return;
        }
        B("failed");
      }, He(), se;
    },
    output: u,
    resolvePreferredExactLinkedSource: P,
    source: o,
    uiImage: (E, $, D, W = null) => {
      var X, ge, Ae;
      const z = d(E, $)[0] || null, q = o(z);
      if (!q) return null;
      const T = `__ui__${$}`, O = (X = D == null ? void 0 : D.get) == null ? void 0 : X.call(D, T);
      if (O && O.__panoSrc === q) return O;
      const le = n || globalThis.Image;
      if (typeof le != "function") return null;
      const J = new le();
      return J.__panoSrc = q, (ge = r == null ? void 0 : r.markImageLoading) == null || ge.call(r, J, q), J.onload = () => {
        var se;
        (se = r == null ? void 0 : r.markImageReady) == null || se.call(r, J, q), W == null || W(J);
      }, J.onerror = () => {
        var se;
        (se = r == null ? void 0 : r.markImageFailed) == null || se.call(r, J, q), W == null || W(J);
      }, J.src = q, (Ae = D == null ? void 0 : D.set) == null || Ae.call(D, T, J), J;
    },
    uiList: d,
    uiValue: f
  };
}
const EP = "state_json", Jc = "sticker_image_1", OP = "external_image", Cs = "pano_sticker_input_images", TP = !0, Xs = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], br = Math.PI / 180, zi = 180 / Math.PI, Zc = 1, FP = "rgb(255, 221, 87)", DP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, LP = 64, Fp = 40, Qc = 16, RP = 0.45, Dp = 180, $P = 160, xl = 24, VP = 4, zP = 4, Is = /* @__PURE__ */ new Map(), Lp = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), jP = 12, sr = IP({
  app: Ar,
  api: Yt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: zu,
    markImageFailed: v0,
    markImageLoading: y0,
    markImageReady: b0
  }
}), HP = sr.assetSource, GP = sr.source, eu = sr.uiImage, KP = sr.invalidateUiImage, BP = sr.resolvePreferredExactLinkedSource, tu = sr.loadPreferredExactLinkedImage;
function Es(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function WP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function UP(e, t, n) {
  const r = Z((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function YP(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = _i.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (_i.delete(t), _i.set(t, n), n);
}
function XP(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (_i.delete(n), _i.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); _i.size > jP; ) {
      const o = _i.keys().next().value;
      if (!o) break;
      _i.delete(o);
    }
}
function qP(e) {
  return e * e * e;
}
function $l(e, t, n) {
  return { x: e, y: t, z: n };
}
function Rp(e, t) {
  return $l(e.x + t.x, e.y + t.y, e.z + t.z);
}
function $p(e, t) {
  return $l(e.x * t, e.y * t, e.z * t);
}
function nu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function JP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return $l(e.x / t, e.y / t, e.z / t);
}
function Os(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * zi),
    pitch: Z(Math.asin(Z(e.y, -1, 1)) * zi, -90, 90)
  };
}
function Gr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const s = t[r].x, u = t[r].y, d = t[o].x, f = t[o].y;
    u > e.y != f > e.y && e.x < (d - s) * (e.y - u) / (f - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function yi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function ru(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), s = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), d = r * r + o * o;
  if (d <= 1e-6) return yi(e, t);
  const f = Z((s * r + u * o) / d, 0, 1), v = Number(t.x || 0) + r * f, y = Number(t.y || 0) + o * f, x = Number(e.x || 0) - v, k = Number(e.y || 0) - y;
  return x * x + k * k;
}
function Bn(e, t, n) {
  return e + (t - e) * n;
}
function vr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Z(n, 0, 1)})`;
}
function ZP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ts = { fillStyle: "", url: "" };
function QP(e, t, n) {
  if (Ts.url && Ts.fillStyle === String(e || ""))
    return Ts.url;
  const r = ZP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${xl}" height="${xl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ts = { fillStyle: String(e || ""), url: r }, r;
}
function qs(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Rn(e) {
  return {
    r: Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Z(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function dn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function e2(e) {
  return Xs.some((t) => qs(e, t.color));
}
function iu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Z(Number(t), 0, 1), s = Z(Number(n), 0, 1);
  if (o <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), d = r * 6 - u, f = s * (1 - o), v = s * (1 - d * o), y = s * (1 - (1 - d) * o);
  switch (u % 6) {
    case 0:
      return { r: s, g: y, b: f };
    case 1:
      return { r: v, g: s, b: f };
    case 2:
      return { r: f, g: s, b: y };
    case 3:
      return { r: f, g: v, b: s };
    case 4:
      return { r: y, g: f, b: s };
    default:
      return { r: s, g: f, b: v };
  }
}
function ou(e) {
  const t = Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), s = Math.min(t, n, r), u = o - s;
  let d = 0;
  u > 1e-6 && (o === t ? d = ((n - r) / u + (n < r ? 6 : 0)) / 6 : o === n ? d = ((r - t) / u + 2) / 6 : d = ((t - n) / u + 4) / 6);
  const f = o <= 1e-6 ? 0 : u / o;
  return { h: d, s: f, v: o };
}
function _o(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const _0 = "pano_suite.ui_settings.v1", x0 = "pano_suite.node_grid_visibility.v1";
let No = null, _r = null;
function Js(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function t2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(_0)) || "").trim();
    if (!t) return No ? Js(No) : null;
    const n = JSON.parse(t), r = Js(n);
    return No = r, r;
  } catch {
    return No ? Js(No) : null;
  }
}
function n2(e) {
  var n;
  const t = Js(e);
  No = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(_0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function w0() {
  var e;
  if (_r && typeof _r == "object")
    return _r;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(x0)) || "").trim();
    if (!t)
      return _r = {}, _r;
    const n = JSON.parse(t);
    return _r = n && typeof n == "object" ? n : {}, _r;
  } catch {
    return _r = {}, _r;
  }
}
function r2(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = w0()[n];
  return typeof o == "boolean" ? o : !!t;
}
function i2(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = w0();
  r[n] = !!t, _r = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(x0, JSON.stringify(r));
  } catch {
  }
}
function o2(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Vp(e) {
  const { paintCount: t, maskCount: n } = o2(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function xo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Fs(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function a2(e, t) {
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
function Di(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function s2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function l2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function c2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function u2(e, t, n = {}) {
  var th;
  await o0(e, { tolerateOperationFailure: !0 }), sr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = a2(e, t);
  await Nd();
  const d = Fs(e, "output_preset"), f = Fs(e, "coverage"), v = Fs(e, "bg_color"), y = Fs(e, EP), x = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return tu(
      e,
      i,
      () => ce(),
      `background:size:${i.join("|")}`
    );
  }, k = () => {
    const i = x();
    return c2(i);
  }, P = (i = 2048) => {
    const a = d == null ? void 0 : d.value;
    return l2(a) ? k() || Math.max(1, Math.round(Number(i || 2048))) : s2(a, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, _ = (S ? Sg : wg)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: P(2048),
    backgroundColor: String((v == null ? void 0 : v.value) || "#00ff00"),
    coverage: $n(f == null ? void 0 : f.value),
    sharedUiSettings: t2(),
    active: Ag(e)
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], a = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((c) => String((c == null ? void 0 : c.id) || "") === a) || i[0] || null;
  })() : null, V = F ? df(F, !1) : { width: 220, height: 132 }, U = g0(t), N = /* @__PURE__ */ Ko({
    stageStatus: or,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (U.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (U.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(U.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...s ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Pe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Pe.aspect,
      rotateIcon: Pe.rotate_90,
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
      icon: Pe.fullscreen,
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
      width: V.width,
      height: V.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), E = document.createElement("div");
  document.body.appendChild(E);
  const $ = ({ intent: i, file: a } = {}) => {
    if (Pr(a)) {
      if (i === "add") {
        Mf(a);
        return;
      }
      i === "replace" && bb(a);
    }
  }, D = ({ intent: i } = {}) => {
  }, W = od(SP, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: U,
    paintSwatches: Xs.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: vr(i.color, 1)
    })),
    uiState: N,
    onClose: () => {
      mo();
    },
    onTimeline: (i) => pb(i),
    onImageFileSelected: $,
    onImageFileCancelled: D
  });
  let z = null;
  try {
    z = W.mount(E);
  } catch (i) {
    try {
      W.unmount();
    } catch {
    }
    throw E.remove(), i;
  }
  const q = E.querySelector(".pano-modal-overlay"), T = E.querySelector(".pano-modal"), O = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), le = T == null ? void 0 : T.querySelector("[data-stage-background]"), J = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), X = ((th = z == null ? void 0 : z.getPaintOverlayRefs) == null ? void 0 : th.call(z)) || {}, ge = X.cursor || null, Ae = X.sizePreview || null, se = X.sizeSample || null;
  if (!q || !T || !O || !le || !J || !ge || !Ae || !se)
    throw W.unmount(), E.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const I = O.getContext("2d"), $e = T.querySelector("[data-side]"), B = T.querySelector("[data-video-element]"), He = T.querySelector(".pano-floating-right"), rt = T.querySelector(".pano-floating-top"), gt = T.querySelector("[data-tool-rail]"), gn = T.querySelector("[data-frame-rail]"), We = T.querySelector("[data-frame-roll-knob]"), Et = T.querySelector("[data-paint-dock]"), Tn = T.querySelector(".pano-video-transport"), ur = T.querySelector("[data-selection-menu]"), Jn = T.querySelector("[data-tooltip]"), Mn = T.querySelector("[data-camera-preview-host]"), Fn = T.querySelector("[data-camera-preview-canvas]"), R = T.querySelector("[data-paint-color-row]"), j = T.querySelector("[data-paint-color-pop]"), te = T.querySelector("[data-paint-color-sv]"), ue = T.querySelector("[data-paint-color-sv-cursor]"), fe = T.querySelector("[data-paint-hue-strip]"), he = T.querySelector("[data-paint-hue-handle]");
  let _e = 0, Ne = 0;
  J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", le.style.opacity = "0", o && ($e == null || $e.remove(), T.classList.add("pano-modal-readonly"));
  const ke = () => {
    if (!p.customPaintSessionStart) return;
    if (qs(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (e2(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Rn(p.customPaintColor),
      ...p.customPaintHistory.filter((a) => !qs(a, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, ye = (i = !1) => {
    !j || j.hidden || (i ? ke() : p.customPaintSessionStart = null, j.hidden = !0, N.paintDock.colorPopOpen = !1);
  }, Le = () => {
    j && (j.hidden && (p.customPaintSessionStart = Rn(p.customPaintColor)), j.hidden = !1, N.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var a;
    i.target.closest("[data-frame-roll-knob]") || Ai(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ye(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Ye(), ce()), (a = N.frameRail) != null && a.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (N.frameRail.aspectOpen = !1)));
  });
  const Ie = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, De = JSON.stringify(Jh(_)), p = {
    mode: "pano",
    selectedId: Ie,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: $n(_.coverage),
    historyController: kk(80, { entries: [De], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: jr,
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
    showGrid: r2(e == null ? void 0 : e.id, !0),
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
    paintEngine: yu(),
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
  }, Me = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, playback: 0 };
  t === "stickers" && (p.selectedId = null, _.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Ue = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), at = document.createElement("canvas");
  at.__panoFrameIdx = 0;
  const we = {
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
  }, yn = ow({ onReady: () => ce(), onFailed: () => ce() });
  let Dr = { key: "", projection: null }, zt = { key: null, sceneState: null }, nn = null, Lr = null, H = null;
  const Se = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Ce = (i) => {
    const a = String(i || "default");
    O.style.cursor !== a && (O.style.cursor = a);
  }, Fe = {
    timer: 0,
    target: null
  }, Ke = {
    active: !1,
    depth: 0
  }, Y = {
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
  }, jt = 4, Rt = 9, bt = [];
  let sn = 0;
  const Jt = () => {
    var M, A;
    const i = (M = J == null ? void 0 : J.getBoundingClientRect) == null ? void 0 : M.call(J), a = (A = He == null ? void 0 : He.getBoundingClientRect) == null ? void 0 : A.call(He), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), c = a ? Math.max(0, Number(a.width || 0)) : 0, g = c > 0 ? c + 14 + 12 : 72, b = Math.max(280, Math.floor(l - g * 2)), w = p.fullscreen ? Math.min(1200, b) : b;
    N.videoTransport.shellMaxWidthPx = w;
  }, oi = () => {
    sn || (sn = window.requestAnimationFrame(() => {
      sn = 0, Jt();
    }));
  }, ai = () => {
    const i = Math.max(1, Number(N.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, si = (i) => {
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
  }, Pt = typeof ResizeObserver < "u" ? new ResizeObserver(() => oi()) : null;
  Pt == null || Pt.observe(J), He && (Pt == null || Pt.observe(He)), bt.push(() => {
    var i;
    sn && (window.cancelAnimationFrame(sn), sn = 0), (i = Pt == null ? void 0 : Pt.disconnect) == null || i.call(Pt);
  }), oi();
  const dr = () => {
    Y.thumbnailJobId += 1, Y.thumbnailSrc = "", N.videoTransport.thumbnails = [], N.videoTransport.thumbnailCount = Rt;
  }, Si = async (i, a, l) => {
    const c = String(i || "").trim();
    if (!c) {
      dr();
      return;
    }
    const h = YP(c);
    if (h) {
      Y.thumbnailSrc = c, N.videoTransport.thumbnails = h.thumbnails, N.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (Y.thumbnailSrc === c && Array.isArray(N.videoTransport.thumbnails) && N.videoTransport.thumbnails.length)
      return;
    const m = ++Y.thumbnailJobId;
    Y.thumbnailSrc = c, N.videoTransport.thumbnails = [], N.videoTransport.thumbnailCount = Rt;
    const g = document.createElement("video");
    if (g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous", !await new Promise((ie) => {
      let pe = !1;
      const re = (xe) => {
        pe || (pe = !0, ie(xe));
      };
      g.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), g.addEventListener("canplay", () => re(!0), { once: !0 }), g.addEventListener("error", () => re(!1), { once: !0 }), g.src = c, g.load();
    }) || Y.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(g.videoWidth || 0)), M = Math.max(1, Number(g.videoHeight || 0));
    if (w < 1 || M < 1) return;
    const A = Math.max(0, Number(g.duration || a || 0)), C = document.createElement("canvas"), L = 46, G = Math.max(72, Math.round(w / M * L));
    C.width = G, C.height = L;
    const ee = C.getContext("2d");
    if (!ee) return;
    const Q = [], ne = (ie) => new Promise((pe) => {
      let re = !1;
      const xe = () => {
        re || (re = !0, pe());
      };
      g.addEventListener("seeked", xe, { once: !0 }), g.addEventListener("error", xe, { once: !0 });
      try {
        g.currentTime = ie;
      } catch {
        xe();
      }
    });
    for (let ie = 0; ie < Rt; ie += 1) {
      if (Y.thumbnailJobId !== m) return;
      const pe = ie / (Rt - 1), re = A > 0 ? Math.max(0, Math.min(A - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), A * pe)) : 0;
      if (await ne(re), Y.thumbnailJobId !== m) return;
      ee.clearRect(0, 0, G, L), ee.drawImage(g, 0, 0, G, L), Q.push({
        id: `thumb-${ie}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: re,
        label: Zl(re)
      });
    }
    Y.thumbnailJobId === m && (N.videoTransport.thumbnails = Q, N.videoTransport.thumbnailCount = Q.length || Rt, XP(c, {
      thumbnails: Q,
      thumbnailCount: Q.length || Rt,
      duration: A,
      fps: l
    }));
  }, bn = (i) => {
    const a = Math.max(1, Number(N.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * a));
  }, jn = (i) => {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return null;
    const a = Number(B.videoWidth || 0), l = Number(B.videoHeight || 0), c = document.createElement("canvas");
    c.width = a, c.height = l, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const h = c.getContext("2d");
    if (!h) return null;
    for (h.drawImage(B, 0, 0, a, l), Y.frameCache.set(i, c), Y.frameCacheOrder = Y.frameCacheOrder.filter((m) => m !== i), Y.frameCacheOrder.push(i); Y.frameCacheOrder.length > jt; ) {
      const m = Y.frameCacheOrder.shift();
      m != null && Y.frameCache.delete(m);
    }
    return c;
  }, Ya = (i, a = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), c = Number(i.height || 0);
    if (l < 1 || c < 1) return !1;
    (at.width !== l || at.height !== c) && (at.width = l, at.height = c);
    const h = at.getContext("2d");
    return h ? (h.clearRect(0, 0, l, c), h.drawImage(i, 0, 0, l, c), at.__panoFrameIdx = Number(at.__panoFrameIdx || 0) + 1, a != null && (Y.presentedTime = Number(a || 0)), !0) : !1;
  }, Zi = (i) => {
    const a = bn(i), l = Y.frameCache.get(a) || null;
    return l ? (Y.currentFrameNumber = a, Ya(l, i)) : !1;
  };
  if (bt.push(() => {
    dr();
  }), B instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof B.requestVideoFrameCallback != "function" || B.__panoFramePumpActive) return;
      B.__panoFramePumpActive = !0;
      const b = (w, M) => {
        B.__panoFramePumpActive = !1;
        const A = Number((M == null ? void 0 : M.mediaTime) ?? B.currentTime ?? 0), C = bn(A), L = ai();
        Y.mode === "scrub" ? Math.abs(A - Number(Y.editorTime || 0)) <= L && (jn(C), Zi(Y.editorTime), we.backgroundDirty = !0, we.dirty = !0, pr({
          ready: !0,
          playing: !1,
          visible: mr(),
          currentTime: Y.editorTime,
          duration: N.videoTransport.duration,
          frameCount: N.videoTransport.frameCount,
          fps: N.videoTransport.fps,
          mode: "scrub"
        }), ce({ cause: "frame_view", localOnly: !0 })) : (Y.editorTime = A, Y.presentedTime = A, Y.requestedTime = null, Y.currentFrameNumber = C, jn(C), Y.frameCounter += 1, B.dataset.panoFrameIdx = String(Y.frameCounter), we.backgroundDirty = !0, we.dirty = !0, pr({
          ready: !0,
          playing: !B.paused && !B.ended,
          visible: mr(),
          currentTime: A,
          duration: N.videoTransport.duration,
          frameCount: N.videoTransport.frameCount,
          fps: N.videoTransport.fps,
          mode: "playback"
        }), ce({ cause: "frame_view", localOnly: !0 }), Sf(A)), we.running && (!B.paused || Y.mode === "scrub") && i();
      };
      try {
        B.requestVideoFrameCallback(b);
      } catch {
        B.__panoFramePumpActive = !1;
      }
    }, a = () => {
      Y.pendingPlaybackResume && (Y.pendingPlaybackResume = !1, Y.mode = "playback", Y.requestedTime = null, ro() && (we.backgroundDirty = !0, we.dirty = !0), B.play().catch(() => {
      }));
    }, l = () => {
      Y.editorTime = Number(B.currentTime || 0), Number(B.readyState || 0) >= 2 && ro() && (we.backgroundDirty = !0, we.dirty = !0), Gn(), i(), ce({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      Y.mode = "playback", Y.seeking = !1, Y.requestedTime = null, Gn(), i(), ce({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      Y.mode === "playback" && ro() && (we.backgroundDirty = !0, we.dirty = !0), Gn(), ce({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      pr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: mr(),
        currentTime: Y.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: Y.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: B.muted,
        volume: Number(B.volume ?? N.videoTransport.volume ?? 1)
      });
    }, g = () => {
      const b = Y.seeking || Y.pendingPlaybackResume || Y.mode === "scrub";
      if (Y.seeking = !1, !b) {
        Y.requestedTime = null, i();
        return;
      }
      const w = Number(Y.requestedTime ?? Y.editorTime ?? 0), M = Number(B.currentTime || 0);
      if (Math.abs(M - w) > ai()) {
        es(w);
        return;
      }
      Y.mode === "scrub" && (ro(), we.backgroundDirty = !0, we.dirty = !0, ce({ cause: "frame_view", localOnly: !0 })), Y.requestedTime = null, a(), i();
    };
    B.addEventListener("loadedmetadata", l), B.addEventListener("loadeddata", l), B.addEventListener("canplay", l), B.addEventListener("play", c), B.addEventListener("pause", h), B.addEventListener("volumechange", m), B.addEventListener("seeked", g), bt.push(() => B.removeEventListener("loadedmetadata", l)), bt.push(() => B.removeEventListener("loadeddata", l)), bt.push(() => B.removeEventListener("canplay", l)), bt.push(() => B.removeEventListener("play", c)), bt.push(() => B.removeEventListener("pause", h)), bt.push(() => B.removeEventListener("volumechange", m)), bt.push(() => B.removeEventListener("seeked", g));
  }
  function ki() {
    N.toolButtons.forEach((i) => {
      const a = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", c = i.attr === "data-mask-tool";
      i.active = a ? i.value === p.primaryTool : l ? i.key === p.paintTool : c ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Vl(i) {
    return Ad(i == null ? void 0 : i.dataTransfer);
  }
  function Mi(i) {
    const a = !!i;
    Ke.active !== a && (Ke.active = a, J.classList.toggle("drop-active", a));
  }
  function zl(i, a, l = p.viewFov, c = 140, h = 620) {
    const m = L_(p.viewYaw, i), g = a - p.viewPitch, b = l - p.viewFov, w = Math.hypot(m, g) + Math.abs(b) * 0.6, M = Math.round(Z(c + w * 2.2, c, h));
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
  Q0();
  function fr() {
    return t === "stickers" ? Xa() : _.shots;
  }
  function Xa() {
    return S ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function Zn(i) {
    return S && ht(i);
  }
  function jl(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function rn(i) {
    return Zn(i) ? yd(i, p.frame) : i;
  }
  function Qn(i, a) {
    Zn(i) ? kg(i, p.frame, a) : Object.assign(i, a);
  }
  function ln() {
    const i = _.painting || (_.painting = To(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function S0(i = "paint") {
    var h, m;
    const a = Array.isArray((m = (h = _.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], c = /* @__PURE__ */ new Set();
    for (const g of a) {
      const b = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !b || c.has(b) || (c.add(b), l.push(b));
    }
    return l;
  }
  function k0() {
    return S0("paint");
  }
  function Yo(i, a) {
    const l = String(a || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Xo(i) {
    const a = String(i || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Zt(i) {
    const a = String(i || "").trim();
    if (!a) return "";
    const l = a.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : a).trim();
  }
  function qo(i, a = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const c = l.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Hl() {
    var a;
    let i = -1;
    for (const l of Xa())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of ln())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((a = _.painting) == null ? void 0 : a.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Td(i, a = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const c = ln();
    let h = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? a != null && (h.z_index = Math.max(0, Number(a || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: a == null ? Hl() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, c.push(h)), h;
  }
  function M0(i) {
    if (!(i != null && i.centerUv)) return [];
    const a = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), c = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((a - c) % 1 + 1) % 1,
        v: Z(l - h, 0, 1)
      },
      {
        u: ((a + c) % 1 + 1) % 1,
        v: Z(l - h, 0, 1)
      },
      {
        u: ((a + c) % 1 + 1) % 1,
        v: Z(l + h, 0, 1)
      },
      {
        u: ((a - c) % 1 + 1) % 1,
        v: Z(l + h, 0, 1)
      }
    ];
  }
  function N0() {
    const i = new Set(k0()), l = ln().filter((c) => i.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return i.forEach((c) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === c) || l.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: Hl(),
        locked: !1,
        frame: null
      });
    }), l.sort((c, h) => Number((c == null ? void 0 : c.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = l, l;
  }
  function P0(i, a, l) {
    var Q;
    const c = (ne) => (Number(ne || 0) % 1 + 1) % 1, h = [];
    for (const ne of l) {
      const ie = ne == null ? void 0 : ne.geometry, pe = (ie == null ? void 0 : ie.geometryKind) === "lasso_fill" ? ie == null ? void 0 : ie.points : (ie == null ? void 0 : ie.processedPoints) || (ie == null ? void 0 : ie.rawPoints) || (ie == null ? void 0 : ie.points) || [];
      Array.isArray(pe) && h.push(...pe);
    }
    if (!h.length) return null;
    const m = c(((Q = h[0]) == null ? void 0 : Q.u) || 0);
    let g = 0, b = 0;
    h.forEach((ne) => {
      const ie = c((ne == null ? void 0 : ne.u) || 0);
      g += m + Hn(ie, m), b += Number((ne == null ? void 0 : ne.v) || 0);
    });
    const w = (g / h.length % 1 + 1) % 1;
    let M = 1 / 0, A = -1 / 0, C = 1 / 0, L = -1 / 0;
    h.forEach((ne) => {
      const ie = c((ne == null ? void 0 : ne.u) || 0), pe = Hn(ie, w);
      M = Math.min(M, pe), A = Math.max(A, pe);
      const re = Number((ne == null ? void 0 : ne.v) || 0);
      C = Math.min(C, re), L = Math.max(L, re);
    });
    const G = l.reduce((ne, ie) => {
      const pe = mi(String((ie == null ? void 0 : ie.toolKind) || "pen")), re = Cn[pe] || Cn[jr], xe = Math.max(1, Number((ie == null ? void 0 : ie.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(ne, xe);
    }, 0), ee = Math.max(35e-4, G / 2048);
    return {
      centerUv: { u: ((w + (M + A) * 0.5) % 1 + 1) % 1, v: Z((C + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (A - M) * 0.5 + ee,
      halfH: (L - C) * 0.5 + ee,
      uvPad: ee
    };
  }
  function li(i, a, l) {
    const c = String(i || "").trim();
    if (!c) return null;
    const h = ln().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === c);
    if (!h) return null;
    const m = l || er(c, a);
    return h.frame = P0(c, a, m), h.frame;
  }
  function Qi() {
    var c;
    const i = Xa().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), a = N0().map((h) => ({
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
  function Gl(i = !0) {
    var l, c, h, m, g, b;
    const a = Qi().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((c = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), M = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), A = String(((b = (g = p.interaction) == null ? void 0 : g.stroke) == null ? void 0 : b.toolKind) || "").trim();
      w && M === "paint" && A !== "eraser" && !a.includes(w) && a.push(w);
    }
    return a;
  }
  function Kl(i = !0) {
    var b, w, M, A, C, L;
    const a = Qi();
    if (!i) return a;
    const l = String(((w = (b = p.interaction) == null ? void 0 : b.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((A = (M = p.interaction) == null ? void 0 : M.stroke) == null ? void 0 : A.layerKind) || "").trim(), h = String(((L = (C = p.interaction) == null ? void 0 : C.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!l || c !== "paint" || h === "eraser" || a.some((G) => G.type === "strokeGroup" && String(G.actionGroupId || "") === l))
      return a;
    const m = kt();
    let g = a.reduce((G, ee) => Math.max(G, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    return m && Bt(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((G, ee) => Number((G == null ? void 0 : G.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0));
  }
  function A0() {
    return ln().slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => to(Yo("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function C0() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, l) => Number((a == null ? void 0 : a.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((a) => eo(Xo((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Fd(i = p.interaction) {
    const a = String((i == null ? void 0 : i.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object" || a === "scale_raster_object") return !0;
    if (a === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, c = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || c;
    }
    return !1;
  }
  function I0() {
    var a, l, c, h;
    let i = null;
    try {
      const m = Gl(), g = ((h = (c = (l = (a = p.paintEngine) == null ? void 0 : a.getErpTarget) == null ? void 0 : l.call(a, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : h.canvas) || null;
      g && (i = {
        source: g,
        revision: `${so()}:${Bl()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Bl() {
    var h, m, g, b, w, M, A;
    const i = p.interaction, a = String((i == null ? void 0 : i.kind) || "");
    if (!Fd(i)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const C = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), G = ((g = C == null ? void 0 : C.rawPoints) == null ? void 0 : g.length) ?? ((b = C == null ? void 0 : C.points) == null ? void 0 : b.length) ?? 0, ee = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${a}_live${ee}_${G}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((M = i == null ? void 0 : i.item) == null ? void 0 : M.rasterObjectId) || ((A = i == null ? void 0 : i.item) == null ? void 0 : A.id) || "");
    return `_${a}_${l || c || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Wl() {
    const i = Array.isArray(_.shots) ? _.shots : [], a = Array.isArray(_.stickers) ? _.stickers : [];
    return [...i, ...a];
  }
  function Dn(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function ht(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Nn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function eo(i) {
    const a = Zt(i);
    if (!a) return null;
    const l = Nn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === a);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Xo(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function cn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const a = Zt(i.rasterObjectId || i.id || "");
    return !!a && !!eo(Xo(a));
  }
  function to(i) {
    const a = qo(i), l = String(a.actionGroupId || "").trim();
    if (!l) return null;
    const c = ln().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return c ? {
      ...c,
      id: Yo("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Bt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const a = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!a && !!to(Yo(l, a));
  }
  function er(i, a = null) {
    const l = qo(i, a), c = String(l.actionGroupId || "").trim();
    return c ? ho(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === c) : [];
  }
  function E0(i, a = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(a || "paint").trim() || "paint"}:${l}:${p.mode}:${ra()}`;
    if (p.mode === "frame") {
      const m = Ve(), g = String((m == null ? void 0 : m.id) || ""), b = m ? Ut(m) : null;
      return `${h}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function qa(i, a, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: Z(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function Hn(i, a) {
    let l = Number(i || 0) - Number(a || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function Ul(i, a = null, l = null) {
    var M;
    const c = qo(i, a), h = Array.isArray(l) ? l : er(c.actionGroupId, c.layerKind), m = [];
    if (h.forEach((A) => {
      const C = (A == null ? void 0 : A.geometry) || null, L = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((M = m[0]) == null ? void 0 : M.u) || 0);
    let b = 0, w = 0;
    return m.forEach((A) => {
      b += g + Hn(Number((A == null ? void 0 : A.u) || 0), g), w += Number((A == null ? void 0 : A.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: Z(w / m.length, 0, 1)
    };
  }
  function Ja(i, a, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), g = Hn(Number(i.u || 0), h), b = Number(i.v || 0) - m, w = Number(c || 0) * br, M = Math.cos(w), A = Math.sin(w), C = Math.max(0.02, Number(l || 1)), L = (g * M - b * A) * C, G = (g * A + b * M) * C;
    return {
      ...i,
      u: ((h + L) % 1 + 1) % 1,
      v: Z(m + G, 0, 1)
    };
  }
  function Dd(i, a, l, c = null, h = null, m = null) {
    const g = qo(i, h), b = String(g.actionGroupId || "").trim();
    if (!b) return !1;
    const w = ho(g.layerKind), M = Array.isArray(c) ? new Map(c.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let A = !1;
    if (w.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== b) return;
      const L = (M == null ? void 0 : M.get(String((C == null ? void 0 : C.id) || ""))) || C, G = C == null ? void 0 : C.geometry, ee = L == null ? void 0 : L.geometry;
      !G || !ee || (Array.isArray(ee.points) && (G.points = ee.points.map((Q) => qa(Q, a, l)), A = !0), Array.isArray(ee.rawPoints) && (G.rawPoints = ee.rawPoints.map((Q) => qa(Q, a, l)), A = !0), Array.isArray(ee.processedPoints) && (G.processedPoints = ee.processedPoints.map((Q) => qa(Q, a, l)), A = !0));
    }), A && m) {
      const C = ln().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === b);
      C && (C.frame = null);
    }
    return A;
  }
  function Ld(i, a = 1, l = 0, c = null, h = null, m = null) {
    const g = qo(i, h), b = String(g.actionGroupId || "").trim();
    if (!b) return !1;
    const w = ho(g.layerKind), M = Array.isArray(c) ? c : er(b, g.layerKind), A = Array.isArray(M) ? new Map(M.map((G) => [String((G == null ? void 0 : G.id) || ""), G])) : null, C = (m == null ? void 0 : m.centerUv) ?? Ul(b, g.layerKind, M);
    let L = !1;
    if (w.forEach((G) => {
      if (String((G == null ? void 0 : G.actionGroupId) || "").trim() !== b) return;
      const ee = (A == null ? void 0 : A.get(String((G == null ? void 0 : G.id) || ""))) || G, Q = G == null ? void 0 : G.geometry, ne = ee == null ? void 0 : ee.geometry;
      !Q || !ne || (Array.isArray(ne.points) && (Q.points = ne.points.map((ie) => Ja(ie, C, a, l)), L = !0), Array.isArray(ne.rawPoints) && (Q.rawPoints = ne.rawPoints.map((ie) => Ja(ie, C, a, l)), L = !0), Array.isArray(ne.processedPoints) && (Q.processedPoints = ne.processedPoints.map((ie) => Ja(ie, C, a, l)), L = !0));
    }), L && m) {
      const G = ln().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === b);
      G && (G.frame = null);
    }
    return L;
  }
  function Rd(i, a, l, c = null) {
    const h = Zt(i);
    if (!h) return !1;
    const m = Nn().find((A) => String((A == null ? void 0 : A.id) || "").trim() === h);
    if (!m) return !1;
    const g = c && typeof c == "object" ? c : m, b = (g == null ? void 0 : g.transform) || {}, w = Number(b.du || 0) + Number(a || 0), M = Z(Number(b.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = M, !0;
  }
  function O0(i, a = 1, l = null) {
    const c = Zt(i);
    if (!c) return !1;
    const h = Nn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === c);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, g = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(g.scale || 1)), w = Z(b * Math.max(0.01, Number(a || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = w, !0;
  }
  function kt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const a = to(i);
    if (a) return a;
    const l = eo(i);
    return l || (t === "cutout" ? Wl().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null : fr().find((c) => String((c == null ? void 0 : c.id) || "") === i) || null);
  }
  function tr() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], a = [], l = /* @__PURE__ */ new Set();
    return i.forEach((c) => {
      const h = String(c || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? kt() : to(h) || eo(h) || (t === "cutout" ? Wl().find((g) => String((g == null ? void 0 : g.id) || "") === h) : fr().find((g) => String((g == null ? void 0 : g.id) || "") === h));
      m && a.push(m);
    }), a;
  }
  function Yl(i = null) {
    const a = Array.isArray(i) ? i : tr();
    if (!a || a.length < 2) return null;
    const l = a.map((M) => Qt(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!l.length) return null;
    const c = l.flatMap((M) => M.corners.map((A) => Number((A == null ? void 0 : A.x) || 0))), h = l.flatMap((M) => M.corners.map((A) => Number((A == null ? void 0 : A.y) || 0))), m = Math.min(...c), g = Math.max(...c), b = Math.min(...h), w = Math.max(...h);
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
  function $d(i) {
    const a = String((i == null ? void 0 : i.id) || "").trim();
    return !!a && Array.isArray(p.selectedIds) && p.selectedIds.includes(a);
  }
  function Za() {
    const i = kt();
    return i ? Bt(i) || cn(i) ? "stroke" : Dn(i) ? "frame" : "image" : null;
  }
  function vn(i) {
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const a = String(i.actionGroupId || i.id || "").trim(), l = ln().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === a);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (cn(i)) {
      const a = Zt(i.rasterObjectId || i.id || ""), l = Nn().find((c) => String((c == null ? void 0 : c.id) || "").trim() === a);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Xl(i = null) {
    const a = Array.isArray(i) ? i : tr();
    return a.length > 0 && a.every((l) => vn(l));
  }
  function T0(i, a) {
    const l = a === !0;
    if (!i || typeof i != "object") return !1;
    if (Bt(i)) {
      const c = String(i.actionGroupId || i.id || "").trim(), h = ln().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (cn(i)) {
      const c = Zt(i.rasterObjectId || i.id || ""), h = Nn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function F0() {
    if (r) return;
    const i = tr();
    if (!i.length) return;
    const a = !Xl(i);
    let l = !1;
    i.forEach((c) => {
      T0(c, a) && (l = !0);
    }), l && (nt(), ot(), Ye(), Re(), ce());
  }
  function hr(i) {
    p.inspectCamera = !1, Me.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && ht(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && Dn(i) ? _.active.selected_shot_id = i.id || null : i ? Dn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function D0(i, a = null) {
    const l = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const b = String((g == null ? void 0 : g.id) || "").trim();
      !b || c.has(b) || (c.add(b), l.push(b));
    }), p.selectedIds = l, p.inspectCamera = !1, Me.selection = null;
    const h = String(a || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = kt();
    _.active.selected_sticker_id = m && ht(m) && m.id || null, m && Dn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Vd() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, c) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${c + 1}`)
    })), a = (Array.isArray(_.stickers) ? _.stickers : []).map((l, c) => {
      var m, g;
      const h = Wt(l) ? String(l.id || Jc) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...a];
  }
  function L0(i) {
    return i === "frame" ? Pe.camera : i === "stroke" ? Pe.paintbrush_vertical_tool : Pe.image;
  }
  function ql(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: L0(i.kind)
    };
  }
  function Qa() {
    return Hl();
  }
  function Wt(i) {
    var a;
    return !i || typeof i != "object" ? !1 : S ? ((a = i.source) == null ? void 0 : a.kind) === "port" : String(i.id || "") === Jc || String(i.source_kind || "") === OP;
  }
  function no(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function R0(i) {
    return Wt(i) && no(i) ? Eg : 1;
  }
  function $0() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function V0() {
    return String($0() || "") === "lasso_fill";
  }
  function z0() {
    if (r) return;
    const i = kt();
    !i || !Wt(i) || (i.visible = no(i), Ht(), nt(), ot(), Re(), Ye(), ce());
  }
  function j0() {
    if (r || t !== "stickers") return;
    const i = kt();
    if (!i || !Wt(i)) return;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return;
    i.yaw_deg = Number(a.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(a.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(a.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Ql(Cs, () => {
      ce();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = ci(
      Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(a.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(a.rot_deg ?? i.rot_deg ?? 0), nt(), ot(), Re(), Ye(), ce();
  }
  function H0(i) {
    if (!i || !Wt(i)) return null;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return null;
    const l = {
      yaw_deg: Number(a.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? i.rot_deg ?? 0)
    }, c = Ql(Cs, () => {
      ce();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (l.vFOV_deg = ci(
      l.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), l;
  }
  function G0() {
    const i = kt();
    if (!i || !Wt(i)) return !1;
    const a = H0(i);
    if (!a) return !1;
    const l = (c, h) => Math.abs(Number(c || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, a.yaw_deg) && l(i.pitch_deg, a.pitch_deg) && l(i.hFOV_deg, a.hFOV_deg) && l(i.vFOV_deg, a.vFOV_deg) && l(i.rot_deg, a.rot_deg));
  }
  function zd(i) {
    return sr.uiList(e, i);
  }
  function Jl(i) {
    return sr.uiValue(e, i);
  }
  function jd() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return ll(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function K0() {
    const { metaKey: i } = jd(), a = Jl(i);
    return Array.isArray(a) && a.length > 0 && a[0] && typeof a[0] == "object" ? a[0] : a && typeof a == "object" ? a : null;
  }
  function Hd(i) {
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
  function Zl(i) {
    const a = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(a / 60), c = a % 60;
    return `${l}:${String(c).padStart(2, "0")}`;
  }
  function pr(i = {}) {
    const a = Number(i.currentTime ?? Y.editorTime ?? 0), l = Number(i.duration ?? N.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!N.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!N.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!N.videoTransport.visible, g = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(B instanceof HTMLVideoElement ? B.muted : N.videoTransport.muted), b = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : B instanceof HTMLVideoElement ? B.volume : N.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : si(B), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!N.videoTransport.loop;
    Object.assign(N.videoTransport, {
      ready: c,
      playing: h,
      visible: m,
      loop: M,
      currentTime: Number.isFinite(a) ? a : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, a / l * 100)) : 0,
      currentTimeLabel: Zl(a),
      durationLabel: Zl(l),
      frameCount: Math.max(0, Number(i.frameCount ?? N.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? N.videoTransport.fps ?? 24)),
      mode: String(i.mode || Y.mode || "playback"),
      hasAudio: w,
      muted: g,
      volume: Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(b) ? b : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : N.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? N.videoTransport.thumbnailCount ?? Rt))
    });
  }
  function mr() {
    return !!(B instanceof HTMLVideoElement && !S && B.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function Gd() {
    if (!(B instanceof HTMLVideoElement) || !N.videoTransport.hasAudio) return;
    const i = !B.muted;
    B.muted = i, !i && Number(B.volume || 0) <= 0 && (B.volume = Math.max(0.01, Number(N.videoTransport.volume || 1))), pr({
      ready: !!B.getAttribute("src"),
      playing: !B.paused && !B.ended,
      visible: mr(),
      currentTime: Y.editorTime,
      duration: N.videoTransport.duration,
      frameCount: N.videoTransport.frameCount,
      fps: N.videoTransport.fps,
      mode: Y.mode,
      hasAudio: N.videoTransport.hasAudio,
      muted: B.muted,
      volume: Number(B.volume ?? N.videoTransport.volume ?? 1)
    });
  }
  function B0() {
    pr({
      visible: mr()
    });
  }
  function ro() {
    if (!(B instanceof HTMLVideoElement) || Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) return !1;
    const i = Number(B.videoWidth || 0), a = Number(B.videoHeight || 0);
    (at.width !== i || at.height !== a) && (at.width = i, at.height = a);
    const l = at.getContext("2d");
    return l ? (l.clearRect(0, 0, i, a), l.drawImage(B, 0, 0, i, a), at.__panoFrameIdx = Number(at.__panoFrameIdx || 0) + 1, Y.presentedTime = Number(Y.editorTime || B.currentTime || 0), !0) : !1;
  }
  function Kd() {
    return Y.mode === "scrub" && Number(at.width || 0) > 0 && Number(at.height || 0) > 0 && Number(at.__panoFrameIdx || 0) > 0 ? at : B instanceof HTMLVideoElement && Number(B.videoWidth || 0) > 0 && Number(B.videoHeight || 0) > 0 && Number(B.readyState || 0) >= 2 ? B : null;
  }
  function es(i) {
    if (!(B instanceof HTMLVideoElement)) return;
    if (Number(B.videoWidth || 0) < 1 || Number(B.videoHeight || 0) < 1) {
      Y.pendingPlaybackResume = !1;
      return;
    }
    const a = Math.max(0, Number(i || 0));
    if (Y.requestedTime = a, !Y.seeking && !(Math.abs(Number(B.currentTime || 0) - a) <= 5e-4)) {
      Y.seeking = !0;
      try {
        B.currentTime = a;
      } catch {
        Y.seeking = !1;
      }
    }
  }
  function Jo(i) {
    Gn();
    const a = Z(Number(i || 0), 0, Number(N.videoTransport.duration || 0));
    Y.mode = "scrub", !Y.seeking && !B.paused && !B.ended && (Y.resumeAfterScrub = !0, B.pause()), Y.editorTime = a, Zi(a), pr({
      ready: !!B.getAttribute("src"),
      playing: !1,
      visible: mr(),
      currentTime: a,
      duration: N.videoTransport.duration,
      frameCount: N.videoTransport.frameCount,
      fps: N.videoTransport.fps,
      mode: "scrub"
    }), Number(at.__panoFrameIdx || 0) > 0 && (we.backgroundDirty = !0, we.dirty = !0, ce({ cause: "frame_view", localOnly: !0 })), es(a);
  }
  function Zo() {
    Y.pendingPlaybackResume = !!Y.resumeAfterScrub, Y.resumeAfterScrub = !1, Y.pendingPlaybackResume || (Y.mode = "scrub"), Y.seeking || (Y.pendingPlaybackResume ? (Y.pendingPlaybackResume = !1, Y.mode = "playback", B.play().catch(() => {
    })) : (ro(), ce({ cause: "frame_view", localOnly: !0 })));
  }
  function Gn() {
    if (!(B instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = jd(), a = qr(e, "background") && zd(i)[0] || null, l = GP(a), c = K0(), h = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), g = Number((c == null ? void 0 : c.duration) || (h > 0 ? h / m : 0)), b = !!(c != null && c.has_audio) || si(B);
    return l && B.dataset.panoSrc !== l ? (B.pause(), Y.seeking = !1, Y.requestedTime = null, Y.pendingPlaybackResume = !1, B.dataset.panoSrc = l, B.dataset.panoFrameIdx = "0", B.loop = !S && !!N.videoTransport.loop, B.muted = !!N.videoTransport.muted, B.volume = Math.max(0, Math.min(1, Number(N.videoTransport.volume ?? 1))), B.src = l, B.load(), Si(l, g, m)) : !l && B.getAttribute("src") && (B.pause(), Y.seeking = !1, Y.requestedTime = null, Y.pendingPlaybackResume = !1, B.removeAttribute("src"), delete B.dataset.panoSrc, B.load(), at.__panoFrameIdx = 0, we.backgroundDirty = !0, dr()), B.loop !== (!S && !!N.videoTransport.loop) && (B.loop = !S && !!N.videoTransport.loop), l && (!Array.isArray(N.videoTransport.thumbnails) || N.videoTransport.thumbnails.length === 0) && Si(l, g, m), l || dr(), pr({
      ready: !!l,
      playing: !B.paused && !B.ended,
      visible: !!l && mr(),
      currentTime: Y.editorTime,
      duration: g,
      frameCount: h,
      fps: m,
      mode: Y.mode,
      hasAudio: b,
      loop: !!B.loop,
      muted: !!B.muted,
      volume: Number(B.volume ?? N.videoTransport.volume ?? 1),
      thumbnailCount: N.videoTransport.thumbnailCount
    }), l || null;
  }
  function Bd(i, a = null) {
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
  function Ql(i, a = null) {
    return eu(e, i, Ue, a || (() => ce()));
  }
  function ec(i = null) {
    return qr(e, "external-sticker") ? Ql(Cs, i) : null;
  }
  function ci(i, a, l) {
    const c = Math.max(1, Number(a || 1)), h = Math.max(1, Number(l || 1)), m = Z(Number(i || 30), 0.1, 179) * br, g = 2 * Math.atan(Math.tan(m * 0.5) * (h / c));
    return Z(g * zi, 0.1, 179);
  }
  function W0(i) {
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
      if (![g, b, w, M].every((G) => Number.isFinite(G))) return null;
      let A = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(A, -0) && (A = 0);
      const C = {
        yaw_deg: A,
        pitch_deg: Z(b, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: Z(M, 0.1, 179)
      }, L = Number(l.source_aspect);
      return Number.isFinite(L) && L > 0 && (C.source_aspect = L), C;
    } catch {
      return null;
    }
  }
  function Wd(i) {
    const a = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Ui(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(a) ? a : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: Z(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function U0(i) {
    var b;
    if (!i || typeof i != "object") return Wd(null);
    const a = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), c = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const w = Z(h, 0.1, 179) * br, M = Z(m, 0.1, 179) * br, A = Math.tan(M * 0.5);
      if (Math.abs(A) > 1e-6) {
        const C = Math.tan(w * 0.5) / A;
        Number.isFinite(C) && C > 0 && (g = C);
      }
    }
    if (i != null && i.asset_id && ((b = _ == null ? void 0 : _.assets) != null && b[i.asset_id])) {
      const w = _.assets[i.asset_id], M = Number((w == null ? void 0 : w.w) || 0), A = Number((w == null ? void 0 : w.h) || 0);
      M > 0 && A > 0 && (g = M / A);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(a) ? a : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: Z(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Y0(i) {
    return sr.linkedValue(e, i);
  }
  function X0(i, a, l) {
    const c = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : W0(a);
    if (c) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || c.source_aspect || 1), b = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: ci(c.hFOV_deg, g, b),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: ci(30, h, m),
      rot_deg: 0
    };
  }
  function q0() {
    const i = ec(() => {
      Jr(e, "image-loaded");
    }), a = qr(e, "external-sticker") ? Bd(Jl("pano_sticker_input_pose"), null) : null;
    return t0(_, e0(e, { pose: a, image: i }));
  }
  function J0() {
    var b;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((w) => String((w == null ? void 0 : w.name) || "") === "sticker_image") : -1, a = i >= 0 ? ((b = e.getInputLink(i)) == null ? void 0 : b.id) ?? null : null, l = ec(() => {
      Jr(e, "image-loaded");
    }), c = Bd(Jl("pano_sticker_input_pose"), null), h = Y0("sticker_state"), m = sr.externalStateHash(e, h), g = a == null ? null : X0(c, h, l);
    return Qg(_, {
      connected: a != null,
      linkId: a,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function Ud(i = "sync") {
    if (t !== "stickers" || r) return;
    const a = e.__panoSceneStateV2 ? q0() : J0();
    if (a.changed) {
      const l = _.stickers.find(Wt);
      _.stickers = a.state.stickers, _.active = a.state.active, l && p.selectedId === l.id && !_.stickers.some((c) => c.id === l.id) && (p.selectedId = null, p.selectedIds = []), ot(), Re(), Ye();
    }
    ce();
  }
  function Qo(i = {}) {
    const l = i.preservePanelValues !== !1 ? rn(kt()) : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Wr(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function Z0() {
    if (t !== "cutout") return;
    const i = Ve();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function tc() {
    if (t !== "cutout") return;
    const i = Ve();
    bo(N.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Pe.camera : Pe.plus_circle
    });
  }
  function Yd() {
    const i = t === "cutout" && p.mode === "frame", a = !i && !!p.showGrid;
    bo(N.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), bo(N.floatingButtons, "action", "toggle-grid", {
      icon: a ? Pe.eye : Pe.eye_dashed,
      pressed: a ? "true" : "false",
      label: a ? "Hide Grid" : "Show Grid",
      tip: a ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Rr() {
    var l;
    const i = !!Ve();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, N.viewButtons.forEach((c) => {
      const h = c.key === p.mode;
      c.pressed = h ? "true" : "false", c.visible = !(c.key === "frame" && t !== "cutout"), c.disabled = c.key === "frame" ? !i : !1;
    });
    const a = t === "cutout" && p.mode === "frame" ? Ve() : null;
    N.frameRail.visible = !!a, N.frameRail.disabled = r || (a == null ? void 0 : a.locked) === !0, N.frameRollKnob.visible = !!a && !r && a.locked !== !0, N.frameRollKnob.disabled = r || (a == null ? void 0 : a.locked) === !0, N.frameRollKnob.rollDeg = Number((a == null ? void 0 : a.roll_deg) ?? (a == null ? void 0 : a.rot_deg) ?? 0), N.frameRollKnob.displayValue = _o(N.frameRollKnob.rollDeg), N.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", N.frameRollKnob.armed = !!a && p.altModifier === !0, N.frameRail.rollKnob = N.frameRollKnob, N.frameRail.aspectLabel = a ? Wr(a) : "", N.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((c) => ({
      value: c,
      label: c,
      active: !!a && String(Wr(a)) === c
    })), a || (N.frameRail.aspectOpen = !1), N.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!Ve(), t === "cutout" && N.cameraPreview && (N.cameraPreview.visible = p.mode !== "frame", N.cameraPreview.expanded = !!p.outputPreviewExpanded, N.cameraPreview.settled = N.cameraPreview.settled === !0 && we.pendingStableLayoutFrames <= 0 && we.hasPresentedFrame), Yd(), Tf() ? vt(p.pointerPos) : Ce(p.mode === "pano" ? "grab" : "default");
  }
  function Q0() {
    const a = tf({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function Xd() {
    return Og({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, O.width, O.height);
  }
  function nc() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${O.width}|${O.height}`;
    return Dr.key !== i && (Dr = { key: i, projection: Tg(Xd(), O.width, O.height) }), Dr.projection;
  }
  function ea(i) {
    const a = nc().project(i);
    return a.z > 1e-4 ? a : null;
  }
  function rc(i, a) {
    return nc().ray(i, a);
  }
  function ui() {
    const i = O.width, a = O.height, l = 2;
    if (i / Math.max(a, 1) >= l) {
      const b = a, w = b * l;
      return { x: (i - w) * 0.5, y: 0, w, h: b };
    }
    const h = i, m = h / l;
    return { x: 0, y: (a - m) * 0.5, w: h, h: m };
  }
  function qd(i) {
    var g;
    if (i && typeof i == "object" && (Wt(i) || i.external === !0))
      return ec(() => {
        Jr(e, "image-loaded");
      });
    const a = S ? ta(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!a) return null;
    const l = Ue.get(a);
    if (l) return l;
    const c = S ? Ng(i.source) : (g = _.assets) == null ? void 0 : g[a], h = HP(c);
    if (!h) return null;
    const m = new Image();
    return y0(m, h), m.onload = () => {
      b0(m, h), ce();
    }, m.onerror = () => {
      v0(m, h), ce();
    }, m.src = h, Ue.set(a, m), m;
  }
  function ta(i) {
    const { source: a } = i;
    return a.filename ? `file:${a.storage}:${a.subfolder}:${a.filename}` : `sticker:${i.id}`;
  }
  function Jd(i, a = null) {
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
  function ey(i) {
    const a = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!a) return null;
    const l = yt.get(a);
    if (l) return l.ready ? l : null;
    const c = Jd(i, () => {
      const A = yt.get(a);
      A && (A.ready = !1), ce({ localOnly: !0 });
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
  function ty(i, a, l = 1, c = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), g = Hn(Number(i.u || 0), h), b = Number(i.v || 0) - m, w = Math.max(0.02, Number(l || 1)), M = Number(c || 0) * br, A = Math.cos(M), C = Math.sin(M), L = g / w, G = b / w, ee = L * A + G * C, Q = -L * C + G * A;
    return {
      ...i,
      u: ((h + ee) % 1 + 1) % 1,
      v: m + Q
    };
  }
  function ny(i, a) {
    if (!i || !a) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const c = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(a.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(c.dv || 0)
    }, g = ty(
      m,
      h,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), b = Number(l.u1 || 0) - Number(l.u0 || 0), w = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(b > 1e-6) || !(w > 1e-6)) return null;
    const M = Hn(Number(g.u || 0), Number(l.u0 || 0)) / b, A = (Number(g.v || 0) - Number(l.v0 || 0)) / w;
    if (M < 0 || M > 1 || A < 0 || A > 1) return 0;
    const C = ey(i);
    if (!C) return null;
    const L = Z(Math.floor(M * C.width), 0, C.width - 1), G = Z(Math.floor(A * C.height), 0, C.height - 1);
    return Number(C.alpha[(G * C.width + L) * 4 + 3] || 0);
  }
  function Zd(i, a, l, c = null) {
    if (!(a != null && a.visible) || !Gr(l, a.corners)) return !1;
    const h = c || rr(l, performance.now()), m = ny(i, h);
    return m === null ? !0 : m > 8;
  }
  function ry() {
    var c, h, m, g, b, w, M, A;
    const i = ((h = (c = p.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : h.call(c, Gl(!1))) || null, a = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : b.width) || 2048)), l = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((A = (M = i == null ? void 0 : i.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : A.height) || 1024));
    return { width: a, height: l };
  }
  function iy() {
    var G, ee, Q;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const l = Ln(), c = `${Bl()}:${l.width}:${l.height}`;
    if (((G = p._activePaintEraserPreviewInfo) == null ? void 0 : G.cacheKey) === c)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = dn(a), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ne = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = dc(ne, h.targetSpace, !0);
    }
    const g = na(l.width, l.height, { readback: !0 });
    if (!gf(g, h, { w: l.width, h: l.height })) return null;
    const b = ((Q = (ee = g.ctx) == null ? void 0 : ee.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Q.data) || null;
    if (!b) return null;
    let w = l.width, M = l.height, A = -1, C = -1;
    for (let ne = 0; ne < l.height; ne += 1)
      for (let ie = 0; ie < l.width; ie += 1)
        b[(ne * l.width + ie) * 4 + 3] <= 8 || (ie < w && (w = ie), ne < M && (M = ne), ie > A && (A = ie), ne > C && (C = ne));
    if (A < w || C < M)
      return p._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const L = {
      surface: g,
      bounds: { minX: w, minY: M, maxX: A, maxY: C },
      key: `${c}:${w}:${M}:${A}:${C}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: c, value: L }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function io() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function oy(i, a, l) {
    var c, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((c = i.item) != null && c.bbox)) {
      const m = i.item.bbox, g = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(m.u0 || 0) + Number(g.du || 0), w = Number(m.u1 || 0) + Number(g.du || 0), M = Number(m.v0 || 0) + Number(g.dv || 0), A = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((w % 1 + 1) % 1 * a),
        minY: Math.floor(Z(M, 0, 1) * l),
        maxY: Math.ceil(Z(A, 0, 1) * l),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = er(i.actionGroupId, "paint"), g = li(i.actionGroupId, "paint", m);
      if (!g) return null;
      const b = g.centerUv.u - g.halfW, w = g.centerUv.u + g.halfW, M = g.centerUv.v - g.halfH, A = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((w % 1 + 1) % 1 * a),
        minY: Math.floor(Z(M, 0, 1) * l),
        maxY: Math.ceil(Z(A, 0, 1) * l),
        wraps: w - b >= 1 || b < 0 || w > 1
      };
    }
    return null;
  }
  function ay(i, a, l) {
    if (!i || !a) return !1;
    const c = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], h = c(i), m = c(a);
    return h.some((g) => m.some((b) => !(g.maxX < b.minX || b.maxX < g.minX || g.maxY < b.minY || b.maxY < g.minY)));
  }
  function sy(i, a, l) {
    var xe, ze, Ge, Qe, be, ae, me;
    if (!i || !a || !((xe = l == null ? void 0 : l.surface) != null && xe.canvas) || a.type !== "rasterObject") return i;
    const c = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (c < 1 || h < 1) return i;
    const m = oy(a, c, h);
    if (m && !ay(m, l.bounds, c)) return i;
    const g = String(((ze = a.item) == null ? void 0 : ze.id) || a.id || ""), b = ((Ge = a.item) == null ? void 0 : Ge.transform) || {}, w = `${l.key}:${g}:${c}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, M = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(w)) return M.get(w);
    const A = Z(Math.floor(Number(((Qe = l.bounds) == null ? void 0 : Qe.minX) || 0)), 0, Math.max(0, c - 1)), C = Z(Math.floor(Number(((be = l.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, h - 1)), L = Z(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), A, Math.max(0, c - 1)), G = Z(Math.ceil(Number(((me = l.bounds) == null ? void 0 : me.maxY) || 0)), C, Math.max(0, h - 1)), ee = Math.max(1, L - A + 1), Q = Math.max(1, G - C + 1), ne = na(c, h, { readback: !0 });
    ne.ctx.clearRect(0, 0, c, h), ne.ctx.drawImage(i, 0, 0);
    const ie = ne.ctx.getImageData(A, C, ee, Q);
    ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(l.surface.canvas, 0, 0), ne.ctx.restore();
    const pe = ne.ctx.getImageData(A, C, ee, Q);
    let re = !1;
    for (let ve = 0; ve < ee * Q; ve += 1) {
      const Oe = ie.data[ve * 4 + 3], je = pe.data[ve * 4 + 3];
      if (Oe > je) {
        re = !0;
        break;
      }
    }
    return re ? (M.size > 64 && M.clear(), M.set(w, ne.canvas), ne.canvas) : (M.set(w, i), i);
  }
  function Qd(i, a = null) {
    const l = Zt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.bbox) || null;
    if (!l || !c) return null;
    const h = Jd(i, a);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: g } = ry(), b = (i == null ? void 0 : i.transform) || {}, w = [
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
      ra()
    ].join(":"), M = Nt.get(w);
    if (M) return M;
    Nt.size > 64 && Nt.clear();
    const A = document.createElement("canvas");
    A.width = m, A.height = g;
    const C = A.getContext("2d");
    if (!C) return null;
    const L = Number(c.u0 || 0) * m, G = Number(c.v0 || 0) * g, ee = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), Q = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * g), ne = L + ee * 0.5 + Number(b.du || 0) * m, ie = G + Q * 0.5 + Number(b.dv || 0) * g, pe = Number(b.rot_deg || 0) * br, re = Math.max(0.01, Number(b.scale || 1));
    for (const xe of [-m, 0, m])
      C.save(), C.translate(ne + xe, ie), C.rotate(pe), C.scale(re, re), C.drawImage(h, -ee * 0.5, -Q * 0.5, ee, Q), C.restore();
    return Nt.set(w, A), A;
  }
  async function ic(i, a) {
    const l = await new Promise((b) => i.toBlob(b, "image/png")), c = new FormData();
    c.append("image", l, a), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const h = await Yt.fetchApi("/upload/image", { method: "POST", body: c });
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
  let ts = null, ns = !1;
  function ly() {
    const i = Vp(_.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const a = _.painting_layer, l = so();
    return !a || typeof a != "object" || String(a.revision || "") !== l || i.totalPaintCount > 0 && !a.paint || i.totalMaskCount > 0 && !a.mask;
  }
  function ef() {
    const i = String(e.id ?? "0"), a = Is.get(i);
    if (ns && a) return a;
    const l = (async () => {
      var m, g, b, w, M, A, C, L, G, ee, Q, ne;
      const c = so(), h = Vp(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, ts = c, An());
        return;
      }
      if (ts !== c && !ns) {
        ns = !0;
        try {
          ls();
          const ie = Gl(!1), pe = ((g = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, ie)) || null, re = ((b = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : b.canvas) || null, xe = ((w = pe == null ? void 0 : pe.committedMask) == null ? void 0 : w.canvas) || null, ze = Math.max(1, Number(((M = pe == null ? void 0 : pe.descriptor) == null ? void 0 : M.width) || (re == null ? void 0 : re.width) || (xe == null ? void 0 : xe.width) || 2048)), Ge = Math.max(1, Number(((A = pe == null ? void 0 : pe.descriptor) == null ? void 0 : A.height) || (re == null ? void 0 : re.height) || (xe == null ? void 0 : xe.height) || 1024));
          (!re && h.totalPaintCount > 0 || !xe && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((C = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== ze || Number(((L = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Ge) && (p._paintLayerSyncBlankSurface = na(ze, Ge)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ze, Ge));
          const Qe = re || h.totalPaintCount > 0 && ((G = p._paintLayerSyncBlankSurface) == null ? void 0 : G.canvas) || null, be = xe || h.totalMaskCount > 0 && ((ee = p._paintLayerSyncBlankSurface) == null ? void 0 : ee.canvas) || null;
          if (!Qe && !be) return;
          let ae = null, me = null;
          const ve = [];
          if (h.totalPaintCount > 0) {
            ae = await ic(Qe, `pano_paint_${i}.png`);
            for (const Oe of ie) {
              const je = String(Oe || "").trim();
              if (!je) continue;
              const Ee = ((ne = (Q = p.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : ne.call(Q, je)) || null;
              if (!Ee) continue;
              const lt = je.replace(/[^a-zA-Z0-9_-]+/g, "_"), Xe = await ic(Ee, `pano_group_${i}_${lt}.png`);
              Xe && ve.push({
                id: je,
                actionGroupId: je,
                image: Xe
              });
            }
          }
          h.totalMaskCount > 0 && (me = await ic(be, `pano_mask_${i}.png`)), c === so() && (_.painting_layer = {
            paint: ae,
            mask: me,
            groups: ve,
            revision: c
          }, ts = c, An());
        } catch (ie) {
          throw ie;
        } finally {
          ns = !1;
        }
      }
    })();
    return Is.set(i, l), l.finally(() => {
      Is.get(i) === l && Is.delete(i);
    }), l;
  }
  function oc() {
    if (t === "cutout") {
      const b = Kd();
      if (b) return b;
      const w = tu(
        e,
        ["erp_image", "bg_erp"],
        () => ce(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !zu(w) ? w : eu(e, "pano_input_images", Ue, () => ce()) || w || null;
    }
    const i = Kd();
    if (i) return i;
    const a = qr(e, "background") ? eu(e, "pano_input_images", Ue, () => ce()) : null;
    if (a && !zu(a)) return a;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], c = l.includes("erp_image"), h = l.includes("bg_erp");
    let m = [];
    return r && (c || h) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"], tu(e, m, () => ce(), `background:${m.join("|")}`) || a || null;
  }
  function ac(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function cy() {
    if (yn.failed) return { status: ar, detail: "renderer" };
    if (!yn.ready) return { status: or, detail: "boot" };
    let i = Go;
    const a = [];
    if (p.showPanorama) {
      const l = oc();
      i = Vu(l, ac);
    }
    if (p.showObjects)
      for (const l of Xa()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const c = qd(l);
        a.push(Vu(c, ac));
      }
    return kP({
      presented: we.hasPresentedFrame,
      background: i,
      stickers: a
    });
  }
  function oo() {
    const i = new Set(
      (_.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(_.assets || {}).forEach((a) => {
      i.has(a) || (delete _.assets[a], Ue.delete(a));
    });
  }
  function sc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Z(i.y, -1, 1))
    };
  }
  function lc(i, a = null) {
    const { lon: l, lat: c } = sc(i), h = ui();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const g = h.y + (0.5 - c / Math.PI) * h.h;
    if (a !== null) {
      for (; m - a > h.w / 2; ) m -= h.w;
      for (; m - a < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function rs(i) {
    const a = rn(i), l = Bo(
      Number(a.yaw_deg || 0),
      Number(a.pitch_deg || 0),
      Number(a.rot_deg || a.roll_deg || 0)
    ), c = Math.tan(Z(Number(a.hFOV_deg || 20), 0.1, 179) * 0.5 * br), h = Math.tan(Z(Number(a.vFOV_deg || 20), 0.1, 179) * 0.5 * br);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: c,
      tanY: h
    };
  }
  function di(i, a, l) {
    return JP(Rp(Rp(i.centerDir, $p(i.right, a)), $p(i.up, l)));
  }
  function tf(i) {
    const a = rs(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: h }) => di(a, c * a.tanX, h * a.tanY));
  }
  function nf(i, a, l) {
    const c = rs(i), h = (a * 2 - 1) * c.tanX, m = (1 - l * 2) * c.tanY;
    return di(c, h, m);
  }
  function rf(i) {
    const a = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Z((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function uy(i) {
    var w, M, A, C;
    const a = (i == null ? void 0 : i.bbox) || null;
    if (!a) return [];
    const l = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), h = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.rot_deg) || 0), m = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.du) || 0), g = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((L) => qa(Ja(L, l, c, h), m, g));
  }
  function dy(i) {
    const a = Zt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, c = (i == null ? void 0 : i.bbox) || {}, h = `${a}:${p.mode}:${ra()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = Ve(), g = m ? Ut(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function fy(i) {
    const a = String((i == null ? void 0 : i.id) || ""), l = Dn(i) ? "frame" : ht(i) ? "sticker" : "item", c = rn(i), h = [
      l,
      a,
      p.mode,
      Number((c == null ? void 0 : c.yaw_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.pitch_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.hFOV_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.vFOV_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.rot_deg) || 0).toFixed(4),
      Number((c == null ? void 0 : c.roll_deg) || 0).toFixed(4),
      Wr(c),
      Zn(i) && Vi(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = Ve(), g = m ? Ut(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function of() {
    var i, a;
    return ((a = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : a.call(i)) || null;
  }
  function hy() {
    return of() ? `${ff()}:mask_display` : "";
  }
  function af(i) {
    if (!p.showMask) return i;
    const a = of();
    if (!a) return i;
    const l = hy(), c = i.reduce((g, b) => Math.max(g, Number((b == null ? void 0 : b.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, b) => Math.max(g, Number((b == null ? void 0 : b.z_index) || 0)), -1), m = Math.max(c, h);
    return i.push({
      id: "mask_display",
      source: a,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function py() {
    var c, h;
    const i = Kl(!0), a = iy(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const b = ((h = (c = p.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : h.call(c, g)) || null;
        if (!b) continue;
        l.push({
          id: `paint_group:${g}`,
          source: b,
          revision: `${ff()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, b = Zt((g == null ? void 0 : g.id) || m.id || "");
        if (!b) continue;
        const w = Qd(g, () => ce());
        if (!w) continue;
        const M = sy(w, m, a), A = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${b}`,
          source: M,
          revision: [
            so(),
            (a == null ? void 0 : a.key) || "",
            b,
            Number(A.du || 0).toFixed(6),
            Number(A.dv || 0).toFixed(6),
            Number(A.rot_deg || 0).toFixed(3),
            Number(A.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return af(l);
  }
  function my() {
    return (p.showObjects ? py() : af([])).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  }
  function is() {
    return nn || (nn = gy()), nn;
  }
  function gy() {
    const i = oc(), a = my(), l = { ..._.assets };
    for (const b of S ? [] : _.stickers) {
      const w = String((b == null ? void 0 : b.asset_id) || "");
      w && !l[w] && Ue.has(w) && (l[w] = { type: "comfy_image", filename: w });
    }
    const c = S ? _.stickers.map((b) => jl(b) ? { ...b, source: { kind: "file", filename: ta(b) } } : b) : _.stickers, h = JSON.stringify([c, Object.keys(l)]);
    zt.key !== h && (zt = { key: h, sceneState: $a({ ..._, stickers: c, assets: l, painting: null }) });
    const m = p.showObjects ? Fg(zt.sceneState, p.frame, _.stickers, {
      media: (b) => {
        const w = qd(b);
        return w ? { media: w, revision: Hd(w) } : null;
      },
      paintLayers: a
    }) : a.map((b) => ({ kind: "erp", ...b }));
    return { background: p.showPanorama && ac(i) ? { media: i, revision: Hd(i), coverage: $n(_.coverage) } : null, layers: m };
  }
  function yy() {
    if (!we.backgroundDirty && we.backgroundWasVisible) return;
    const { background: i, layers: a } = is(), l = le.width, c = le.height, h = yn.render({
      width: l,
      height: c,
      camera: Xd(),
      background: i,
      layers: a
    }), m = le.getContext("2d");
    m.clearRect(0, 0, l, c), !i && !a.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, c)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, c), we.backgroundWasVisible = !!h, we.backgroundDirty = !1, H = null;
  }
  function sf(i, a, l, c) {
    const { background: h, layers: m } = is();
    if (!h && !m.length) return !1;
    const g = yn.render({ width: a.w, height: a.h, camera: Ks(l), background: h, layers: m, owner: c });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, a.x, a.y, a.w, a.h), !0) : !1;
  }
  function by(i) {
    const a = is(), l = JSON.stringify([i, le.width, le.height, tp(a)]);
    if (l === H) return;
    const c = yn.renderUnwrap({ width: i.w, height: i.h, ...a }), h = le.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, le.width, le.height), c && h.drawImage(c.canvas, c.x, c.y, c.width, c.height, i.x, i.y, i.w, i.h), H = c ? l : null, we.backgroundWasVisible = !1;
  }
  function vy(i = !1) {
    const a = O.width, l = O.height, c = ui();
    if (I.globalAlpha = 1, I.lineWidth = 1, i || I.clearRect(0, 0, a, l), ls(), by(c), p.showGrid && !p.fullscreen) {
      I.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = c.x + c.w * m / 16;
        I.beginPath(), I.moveTo(g, c.y), I.lineTo(g, c.y + c.h), I.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = c.y + c.h * m / 8;
        I.beginPath(), I.moveTo(c.x, g), I.lineTo(c.x + c.w, g), I.stroke();
      }
      I.strokeStyle = "rgba(250, 250, 250, 0.86)", I.lineWidth = 1.2, I.beginPath(), I.moveTo(c.x, c.y + c.h / 2), I.lineTo(c.x + c.w, c.y + c.h / 2), I.stroke(), I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center";
      const h = c.y + c.h * 0.57;
      I.fillText("Left", c.x + c.w * 0.25, h), I.fillText("Front", c.x + c.w * 0.5, h), I.fillText("Right", c.x + c.w * 0.75, h), I.fillText("Back", c.x + 38, h), I.fillText("Back", c.x + c.w - 38, h);
    }
  }
  function lf(i, a, l = 1) {
    let c = !1;
    I.strokeStyle = a, I.lineWidth = l, I.beginPath();
    for (const h of i) {
      const m = ea(h);
      if (!m) {
        c = !1;
        continue;
      }
      c ? I.lineTo(m.x, m.y) : (I.moveTo(m.x, m.y), c = !0);
    }
    I.stroke();
  }
  function _y(i = !1) {
    const a = O.width, l = O.height;
    if (i || I.clearRect(0, 0, a, l), ls(), yy(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(On(h, g));
        lf(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(On(g, h));
        lf(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: On(-90, 0) },
        { name: "Front", dir: On(0, 0) },
        { name: "Right", dir: On(90, 0) },
        { name: "Back", dir: On(180, 0) }
      ];
      I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center", c.forEach((h) => {
        const m = ea(h.dir);
        m && I.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function xy(i, a = null, l = null, c = null) {
    if (p.mode === "frame") {
      const h = a || Ve();
      if (!h) return [];
      const m = l || Ut(h);
      return Zy(i, h, m);
    }
    return yf(i, c);
  }
  function os(i, a = null, l = null, c = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const g = yf([i], h);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = ao(i);
    return m ? $r(m, a, l, c) : null;
  }
  function wy(i, a) {
    const l = String(i.actionGroupId || i.id || "").trim(), c = er(l, i.layerKind), h = li(l, i.layerKind, c), m = (h == null ? void 0 : h.centerUv) || Ul(l, i.layerKind, c), g = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], w = p.mode === "frame" ? Ve() : null, M = w ? Ut(w) : null;
    for (const re of c) {
      const xe = (re == null ? void 0 : re.geometry) || null, ze = (xe == null ? void 0 : xe.geometryKind) === "lasso_fill" ? xe == null ? void 0 : xe.points : (xe == null ? void 0 : xe.processedPoints) || (xe == null ? void 0 : xe.rawPoints) || (xe == null ? void 0 : xe.points) || [], Ge = xy(ze, w, M, g).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!Ge.length) continue;
      const Qe = mi(String((re == null ? void 0 : re.toolKind) || "pen")), be = Cn[Qe] || Cn[jr];
      b.push({
        points: Ge,
        closed: String((xe == null ? void 0 : xe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const A = os(m, null, w, M, g);
    if (!A) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(a, re), re;
    }
    const L = M0(h).map((re) => os(re, A.x, w, M, g)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (L.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(a, re), re;
    }
    const G = (re, xe) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((xe == null ? void 0 : xe.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((xe == null ? void 0 : xe.y) || 0)) * 0.5,
      a: re,
      b: xe
    }), ee = G(L[0], L[1]), Q = G(L[1], L[2]), ne = G(L[2], L[3]), ie = G(L[3], L[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(A.x || 0), y: Number(A.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...ee },
        { edge: "right", ...Q },
        { edge: "bottom", ...ne },
        { edge: "left", ...ie }
      ],
      rotateStemBase: { x: ee.x, y: ee.y },
      rotateHandle: { x: ee.x, y: ee.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return p._strokeGeomCache.set(a, pe), pe;
  }
  function Sy(i, a) {
    const l = p.mode === "frame" ? Ve() : null, c = l ? Ut(l) : null, h = rf(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, g = os(h, null, l, c, m), w = uy(i).map((L) => os(L, (g == null ? void 0 : g.x) ?? null, l, c, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(w) || w.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(a, L), L;
    }
    const M = w.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: M.reduce((L, G) => L + Number(G.x || 0), 0) / M.length,
        y: M.reduce((L, G) => L + Number(G.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return p._strokeGeomCache.set(a, C), C;
  }
  function $r(i, a = null, l = null, c = null, h = {}) {
    if (p.mode === "frame") {
      const A = l || Ve(), C = c || Ut(A);
      if (!A || !C) return null;
      const L = A ? ia(A, i) : null;
      return L ? {
        x: Number(C.x || 0) + Number(L.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(L.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return lc(i, a);
    const m = 1e-4, g = nc().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(h != null && h.clipBehind)) return null;
    const b = O.width, w = O.height, M = Math.max(b, w) * 2;
    return {
      x: Z(g.x, -M, b + M),
      y: Z(g.y, -M, w + M),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function ky(i, a = []) {
    if (p.mode !== "pano" || ht(i)) return 1;
    const l = a.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return l.length ? UP(0.035, 0.2, Math.min(...l)) : 1;
  }
  function My(i) {
    if (Zn(i) && !Vi(i.clip, p.frame)) return { visible: !1 };
    const a = rn(i), l = On(Number(a.yaw_deg || 0), Number(a.pitch_deg || 0)), c = p.mode === "frame" ? Ve() : null, h = c ? Ut(c) : null, m = p.mode === "pano" && (ht(i) || Dn(i)), g = m ? { clipBehind: !0 } : null, b = $r(l, null, c, h, g);
    if (!b) return { visible: !1 };
    const w = rs(i), A = tf(i).map((me) => $r(me, b.x, c, h, g)).filter((me) => Number.isFinite(me == null ? void 0 : me.x) && Number.isFinite(me == null ? void 0 : me.y));
    if (A.length < 4) return { visible: !1 };
    const C = di(w, 0, w.tanY), L = di(w, 0, w.tanY + Math.max(w.tanY * 0.43, 0.053)), G = $r(C, b.x, c, h, g);
    if (!G) return { visible: !1 };
    const ee = $r(L, (G == null ? void 0 : G.x) ?? b.x, c, h, g), Q = ((ee == null ? void 0 : ee.x) ?? G.x) - G.x, ne = ((ee == null ? void 0 : ee.y) ?? G.y) - G.y, ie = Math.hypot(Q, ne) || 1, pe = {
      x: G.x + Q / ie * 30,
      y: G.y + ne / ie * 30
    }, re = $r(di(w, 0, w.tanY), b.x, c, h, g), xe = $r(di(w, w.tanX, 0), b.x, c, h, g), ze = $r(di(w, 0, -w.tanY), b.x, c, h, g), Ge = $r(di(w, -w.tanX, 0), b.x, c, h, g);
    if (!re || !xe || !ze || !Ge) return { visible: !1 };
    const Qe = [
      b,
      ...A,
      G,
      ee,
      re,
      xe,
      ze,
      Ge
    ];
    if (m && !Qe.some((me) => Number((me == null ? void 0 : me.rawZ) ?? (me == null ? void 0 : me.z)) > 1e-4)) return { visible: !1 };
    const be = ky(i, Qe), ae = [
      {
        edge: "top",
        x: re.x,
        y: re.y,
        a: { x: A[0].x, y: A[0].y },
        b: { x: A[1].x, y: A[1].y }
      },
      {
        edge: "right",
        x: xe.x,
        y: xe.y,
        a: { x: A[1].x, y: A[1].y },
        b: { x: A[2].x, y: A[2].y }
      },
      {
        edge: "bottom",
        x: ze.x,
        y: ze.y,
        a: { x: A[2].x, y: A[2].y },
        b: { x: A[3].x, y: A[3].y }
      },
      {
        edge: "left",
        x: Ge.x,
        y: Ge.y,
        a: { x: A[3].x, y: A[3].y },
        b: { x: A[0].x, y: A[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: A.map((me) => ({ x: me.x, y: me.y })),
      edgeMidpoints: ae,
      rotateStemBase: { x: G.x, y: G.y },
      rotateHandle: pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function Qt(i) {
    if (Bt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = E0(h, i.layerKind), g = p._strokeGeomCache.get(m);
      return g || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), wy(i, m));
    }
    if (cn(i)) {
      const h = dy(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Sy(i, h));
    }
    const a = fy(i), l = p._strokeGeomCache.get(a);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const c = My(i);
    return p._strokeGeomCache.set(a, c), c;
  }
  function as(i, a, l, c = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let b = 0, w = 0;
      a === 0 ? (b = g, w = 0) : a === 1 ? (b = 1, w = g) : a === 2 ? (b = 1 - g, w = 1) : (b = 0, w = 1 - g);
      const M = nf(i, b, w), A = p.mode === "unwrap" ? lc(M, c) : ea(M);
      A && h.push(A);
    }
    return h;
  }
  function Ny(i, a) {
    const l = rn(i), c = On(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), h = p.mode === "unwrap" ? lc(c) : null, m = h ? h.x : null, g = p.mode === "pano" ? 28 : 20, b = [
      as(i, 0, g, m),
      as(i, 1, g, m),
      as(i, 2, g, m),
      as(i, 3, g, m)
    ];
    kd(I, b, { selected: a });
  }
  function Py() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], a = [...Array.isArray(_.stickers) ? _.stickers : []].sort((l, c) => Number(l.z_index || 0) - Number(c.z_index || 0));
    return [...i, ...a];
  }
  function cc() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((l, c) => Number(c.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function ss(i, a = []) {
    if (!(!i || !Array.isArray(a) || a.length < 4)) {
      i.beginPath(), i.moveTo(a[0].x, a[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(a[l].x, a[l].y);
      i.closePath();
    }
  }
  function cf(i, a, l) {
    const c = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (c.length < 4) return;
    const h = Z(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = I.globalAlpha;
    I.globalAlpha = m * h;
    const g = l ? "rgba(255, 116, 116, 0.96)" : a ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", b = l ? "rgba(255, 89, 89, 0.08)" : a ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = a ? 3.2 : 2.6;
    ss(I, c), I.fillStyle = b, I.fill(), I.strokeStyle = g, I.lineWidth = w, I.stroke(), I.save(), I.strokeStyle = g, I.lineWidth = a ? 3.2 : 2.6, I.lineCap = "round";
    const M = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], A = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = a ? 12 : 9;
    M.forEach((L) => {
      const ee = M.find((pe) => (pe == null ? void 0 : pe.edge) === A[L == null ? void 0 : L.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, Q = ee.x - L.x, ne = ee.y - L.y, ie = Math.hypot(Q, ne) || 1;
      I.beginPath(), I.moveTo(L.x, L.y), I.lineTo(L.x + Q / ie * C, L.y + ne / ie * C), I.stroke();
    }), I.restore(), I.globalAlpha = m;
  }
  function Ay(i, a, l, c) {
    const h = Z(Number((a == null ? void 0 : a.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (Dn(i)) {
      cf(a, l, c);
      return;
    }
    if (ht(i)) {
      const g = I.globalAlpha;
      I.globalAlpha = g * R0(i) * h, p.mode === "frame" ? (I.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", I.lineWidth = l ? 2 : 1, ss(I, a.corners), I.stroke()) : Ny(i, l), I.globalAlpha = g;
      return;
    }
    const m = I.globalAlpha;
    I.globalAlpha = m * h, I.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ss(I, a.corners), I.fill(), I.strokeStyle = l ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", I.lineWidth = l ? 2.8 : 1.9, ss(I, a.corners), I.stroke(), I.globalAlpha = m;
  }
  function uf(i, a, l) {
    if (ht(i)) {
      r0(I, a, { accent: l });
      return;
    }
    I.fillStyle = l, a.corners.forEach((c) => {
      I.beginPath(), I.arc(c.x, c.y, 6.5, 0, Math.PI * 2), I.fill();
    }), Dn(i) && (I.strokeStyle = l, I.lineCap = "round", I.lineWidth = 4, a.edgeMidpoints.forEach((c) => {
      var A, C, L, G;
      const h = (((A = c.b) == null ? void 0 : A.x) ?? c.x) - (((C = c.a) == null ? void 0 : C.x) ?? c.x), m = (((L = c.b) == null ? void 0 : L.y) ?? c.y) - (((G = c.a) == null ? void 0 : G.y) ?? c.y), g = Math.hypot(h, m) || 1, b = h / g, w = m / g, M = 10;
      I.beginPath(), I.moveTo(c.x - b * M, c.y - w * M), I.lineTo(c.x + b * M, c.y + w * M), I.stroke();
    }), I.lineCap = "butt"), Bt(i) || (I.strokeStyle = "rgba(250, 250, 250, 0.9)", I.lineWidth = 1.8, I.beginPath(), I.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), I.lineTo(a.rotateHandle.x, a.rotateHandle.y), I.stroke(), I.fillStyle = l, I.beginPath(), I.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), I.fill());
  }
  function Cy() {
    var m;
    const i = p.mode === "frame" ? [] : tr(), a = i.length > 1, l = t === "cutout" ? Py() : fr(), c = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${Dn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== c) && (p._sortedItemsCache = {
      src: l,
      orderKey: c,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const g of h) {
      const b = p.mode !== "frame" && !a && $d(g);
      if (p.mode === "frame" && !b || !p.showObjects && !Dn(g)) continue;
      const w = ht(g), M = Dn(g), A = vn(g);
      if (!w && !M || Zn(g) && !Vi(g.clip, p.frame)) continue;
      const C = Qt(g);
      if (t !== "stickers" && !C.visible)
        continue;
      const L = Z(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const G = M && t === "cutout" && p.mode === "pano" ? Z(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (I.save(), I.globalAlpha *= G, Ay(g, C, b, A), b && C.visible) {
        const ee = A ? "#ff4d4f" : w && Wt(g) ? "#f59e0b" : "#0070f3", Q = I.globalAlpha;
        I.globalAlpha = Q * L, uf(g, C, ee), I.globalAlpha = Q;
      }
      I.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !Ve() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const g = p.cutoutPanoFrameVisual, b = Z(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      I.save(), I.globalAlpha *= b, cf(g.geom, g.selected, g.locked), g.selected && uf(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), I.restore();
    }
    if (a) {
      const g = Yl(i);
      if (g != null && g.visible) {
        const b = Xl(i) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(g.corners[0].x, g.corners[0].y);
        for (let w = 1; w < g.corners.length; w += 1) I.lineTo(g.corners[w].x, g.corners[w].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = b, g.corners.forEach((w) => {
          I.beginPath(), I.arc(w.x, w.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      }
    } else
      i.forEach((g) => {
        if (!Bt(g) && !cn(g)) return;
        const b = Qt(g);
        if (!(b != null && b.visible)) return;
        const w = vn(g) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(b.corners[0].x, b.corners[0].y);
        for (let M = 1; M < b.corners.length; M += 1) I.lineTo(b.corners[M].x, b.corners[M].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = w, b.corners.forEach((M) => {
          I.beginPath(), I.arc(M.x, M.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = $f(p.interaction.start, p.interaction.current);
      I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.9)", I.fillStyle = "rgba(255, 255, 255, 0.08)", I.lineWidth = 1, I.setLineDash([5, 4]), I.beginPath(), I.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), I.fill(), I.stroke(), I.restore();
    }
  }
  function df(i, a = !1) {
    const l = Z(Ui(i), 0.05, 20), c = a ? 320 : 220;
    return l >= 1 ? { width: c, height: Math.max(1, Math.round(c / l)) } : { width: Math.max(1, Math.round(c * l)), height: c };
  }
  function Iy(i) {
    if (!Mn || !i) return !1;
    const a = Mn.closest(".pano-camera-preview");
    if (!a) return !1;
    const l = Math.round(Number(a.clientWidth || Mn.clientWidth || 0)), c = Math.round(Number(a.clientHeight || Mn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(c - Number(i.height || 0)) <= 1;
  }
  function Ey() {
    if (p.outputPreviewRect = null, N.outputPreviewToggle.visible = p.mode !== "frame" && !!Ve(), t !== "cutout" || !N.cameraPreview) return;
    if (p.mode === "frame") {
      N.cameraPreview.visible = !1, N.cameraPreview.settled = !1;
      return;
    }
    const i = Ve();
    N.cameraPreview.visible = !0, N.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const a = Fn == null ? void 0 : Fn.getContext("2d");
    if (!i || !a) {
      N.cameraPreview.ready = !1, N.cameraPreview.settled = !1, N.cameraPreview.width = 220, N.cameraPreview.height = 132, N.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", a == null || a.clearRect(0, 0, Fn.width, Fn.height), Lr = null;
      return;
    }
    const l = df(i, !!p.outputPreviewExpanded);
    N.cameraPreview.width = l.width, N.cameraPreview.height = l.height;
    const c = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * c)), h: Math.max(1, Math.round(l.height * c)) };
    (Fn.width !== h.w || Fn.height !== h.h) && (Fn.width = h.w, Fn.height = h.h);
    const m = JSON.stringify([h, ri(i), tp(is())]);
    let g = m === Lr;
    if (g || (a.clearRect(0, 0, h.w, h.h), g = sf(a, h, i, "camera_preview"), Lr = g ? m : null), !g) {
      N.cameraPreview.ready = !1, N.cameraPreview.label = oc() ? "Loading preview" : "Connect ERP image", N.cameraPreview.settled = !1;
      return;
    }
    const b = Iy(l);
    N.cameraPreview.ready = !0, N.cameraPreview.label = b ? "" : "Loading preview", N.cameraPreview.settled = b && we.pendingStableLayoutFrames <= 0 && we.hasPresentedFrame;
  }
  function uc(i, a) {
    if (!i || !a) return null;
    const l = Number(a.x || 0), c = Number(a.y || 0);
    return nf(i, l, c);
  }
  function ao(i) {
    if (!i) return null;
    const a = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, c = Math.cos(l);
    return $l(c * Math.sin(a), Math.sin(l), c * Math.cos(a));
  }
  function Oy(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Ty(i, a, l, c = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: un(i, "widthScale", 1),
      pressureLike: un(i, "pressureLike", 1)
    }, ...c, u: a, v: l };
  }
  function Fy(i, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function dc(i, a, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const c = String((a == null ? void 0 : a.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (c) {
      let Q = null;
      i.forEach((ne) => {
        const ie = Number((ne == null ? void 0 : ne.u) || 0), pe = Number((ne == null ? void 0 : ne.v) || 0), re = (ie % 1 + 1) % 1, xe = Q == null ? re : Q + Hn(re, (Q % 1 + 1) % 1);
        h.set(ne, { x: xe, y: pe }), Q = xe;
      });
    }
    const m = (Q) => !Q || typeof Q != "object" ? { x: 0, y: 0 } : h.get(Q) || Oy(Q), g = (Q, ne, ie, pe = {}) => {
      const re = c ? (Number(ne) % 1 + 1) % 1 : Number(ne), xe = Ty(Q, re, ie, pe);
      return h.set(xe, { x: Number(ne), y: Number(ie) }), xe;
    }, b = (Q, ne, ie) => {
      const pe = m(Q), re = m(ne);
      return g(Q, Bn(pe.x, re.x, ie), Bn(pe.y, re.y, ie), {
        t: Bn(Number((Q == null ? void 0 : Q.t) || 0), Number((ne == null ? void 0 : ne.t) || 0), ie),
        widthScale: Bn(un(Q, "widthScale", 1), un(ne, "widthScale", 1), ie),
        pressureLike: Bn(un(Q, "pressureLike", 1), un(ne, "pressureLike", 1), ie)
      });
    };
    if (i.length === 1) {
      const Q = m(i[0]);
      return [g(i[0], Q.x, Q.y)];
    }
    const w = Fy(a, l), M = (Q, ne) => {
      const ie = [0];
      for (let ae = 1; ae < Q.length; ae += 1) {
        const me = m(Q[ae - 1]), ve = m(Q[ae]);
        ie.push(ie[ae - 1] + Math.hypot(ve.x - me.x, ve.y - me.y));
      }
      const pe = ie[ie.length - 1] || 0;
      if (pe <= 1e-8) {
        const ae = Q[0], me = m(ae);
        return [g(ae, me.x, me.y)];
      }
      const re = [];
      let xe = 0;
      for (let ae = 0; ae <= pe + 1e-9; ae += ne) {
        for (; xe < ie.length - 2 && ie[xe + 1] < ae; ) xe += 1;
        const me = ie[xe], ve = ie[xe + 1], Oe = Math.max(1e-8, ve - me);
        re.push(b(Q[xe], Q[xe + 1], Z((ae - me) / Oe, 0, 1)));
      }
      const ze = Q[Q.length - 1], Ge = m(ze), Qe = re[re.length - 1], be = Qe ? m(Qe) : null;
      return (!be || Math.hypot(be.x - Ge.x, be.y - Ge.y) > ne * 0.35) && re.push(g(ze, Ge.x, Ge.y)), re;
    }, A = (Q) => {
      if (!Array.isArray(Q) || Q.length < 3) return Q ? Q.slice() : [];
      const ne = m(Q[0]), ie = [g(Q[0], ne.x, ne.y)];
      for (let xe = 0; xe < Q.length - 1; xe += 1) {
        const ze = Q[xe], Ge = Q[xe + 1], Qe = m(ze), be = m(Ge), ae = g(
          ze,
          Qe.x * 0.75 + be.x * 0.25,
          Qe.y * 0.75 + be.y * 0.25,
          {
            t: Number(ze.t || 0) * 0.75 + Number(Ge.t || 0) * 0.25,
            widthScale: un(ze, "widthScale", 1) * 0.75 + un(Ge, "widthScale", 1) * 0.25,
            pressureLike: un(ze, "pressureLike", 1) * 0.75 + un(Ge, "pressureLike", 1) * 0.25
          }
        ), me = g(
          ze,
          Qe.x * 0.25 + be.x * 0.75,
          Qe.y * 0.25 + be.y * 0.75,
          {
            t: Number(ze.t || 0) * 0.25 + Number(Ge.t || 0) * 0.75,
            widthScale: un(ze, "widthScale", 1) * 0.25 + un(Ge, "widthScale", 1) * 0.75,
            pressureLike: un(ze, "pressureLike", 1) * 0.25 + un(Ge, "pressureLike", 1) * 0.75
          }
        );
        ie.push(ae, me);
      }
      const pe = Q[Q.length - 1], re = m(pe);
      return ie.push(g(pe, re.x, re.y)), ie;
    }, C = M(i, w);
    if (C.length < 3) return C;
    const L = l ? 2 : 1;
    let G = C.slice();
    for (let Q = 0; Q < L; Q += 1) G = A(G);
    return M(G, Math.max(w * 0.75, 55e-5));
  }
  function un(i, a, l = 1) {
    const c = Number(i == null ? void 0 : i[a]);
    return Number.isFinite(c) ? Math.max(0, c) : l;
  }
  function Dy(i) {
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
  function na(i, a, l = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(i)), c.height = Math.max(1, Math.round(a));
    const h = c.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, c.width, c.height), h.imageSmoothingEnabled = !0), { canvas: c, ctx: h };
  }
  function ra() {
    const i = cs();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function so() {
    const i = cs();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function ff() {
    const i = Bl(), a = so();
    return i ? `${a}:${i}` : a;
  }
  function Ly() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function Ry() {
    p.paintCompositeRevision += 1;
  }
  function $y() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function hf() {
    var i, a;
    p.paintEngineRevisionKey = null, (a = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || a.call(i, _), p.paintEngineRevisionKey = ra();
  }
  function pf() {
    _.painting_layer !== null && (_.painting_layer = null), ts = "";
  }
  function Ht() {
    $y(), we.backgroundDirty = !0, we.dirty = !0;
  }
  function nr({ rebuildPaintEngine: i = !1 } = {}) {
    pf(), Ly(), Ht(), i && hf();
  }
  function lo() {
    pf(), Ry(), Ht();
  }
  function ls() {
    var c;
    const i = cs(), a = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== a && (p.paintEngine = yu(i), p.paintEngineDescriptorKey = a, p.paintEngineRevisionKey = "");
    const l = ra();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (c = p.paintEngine) == null || c.rebuildCommitted(_));
  }
  function cs() {
    const i = Math.max(1, P(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Ln() {
    return cs();
  }
  function Vy(i, a, l, c, h = null) {
    const m = Dy(i), g = un(a, "widthScale", 1) * un(a, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * br) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function zy(i, a, l = {}) {
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
  function jy(i, a, l) {
    const c = Math.max(0.5, Math.min(l, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(c) || (i.beginPath(), i.arc(Number(a.x || 0), Number(a.y || 0), c, 0, Math.PI * 2), i.fill());
  }
  function Hy(i, a, l, c, h = {}) {
    if (!i || !Array.isArray(a) || !a.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    i.save(), zy(i, l, h);
    const g = (b) => jy(i, b, m);
    if (a.length === 1) {
      g(a[0]), i.restore();
      return;
    }
    for (let b = 0; b < a.length - 1; b += 1) {
      const w = a[b], M = a[b + 1];
      if (!w || !M) continue;
      const A = Number(w.x || 0), C = Number(w.y || 0), L = Number(M.x || 0), G = Number(M.y || 0), ee = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), Q = Math.max(0.5, Math.min(m, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(A) || !Number.isFinite(C) || !Number.isFinite(L) || !Number.isFinite(G) || !Number.isFinite(ee) || !Number.isFinite(Q)) continue;
      const ne = L - A, ie = G - C, pe = Math.hypot(ne, ie);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        g(w);
        continue;
      }
      if (pe > Math.max(c.w, c.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ee, Q)), xe = Math.max(0.35, Math.min(re * 0.4, 2.25)), ze = Math.max(1, Math.ceil(pe / xe));
      for (let Ge = 0; Ge <= ze; Ge += 1) {
        const Qe = Ge / ze;
        g({
          x: Bn(A, L, Qe),
          y: Bn(C, G, Qe),
          radiusPx: Bn(ee, Q, Qe)
        });
      }
    }
    g(a[a.length - 1]), i.restore();
  }
  function Gy(i, a, l, c) {
    Hy(i, a, l, c, { preview: !1 });
  }
  function Ky(i, a, l, c, h) {
    var b, w, M, A;
    if (!i || !Array.isArray(a) || a.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = a[0]) == null ? void 0 : b[m]) || 0) * c.w, Number(((w = a[0]) == null ? void 0 : w[g]) || 0) * c.h);
    for (let C = 1; C < a.length; C += 1)
      i.lineTo(Number(((M = a[C]) == null ? void 0 : M[m]) || 0) * c.w, Number(((A = a[C]) == null ? void 0 : A[g]) || 0) * c.h);
    i.closePath(), i.fill(), i.restore();
  }
  function mf(i) {
    const a = (i == null ? void 0 : i.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function By(i, a) {
    const l = mf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: Vy(i, c, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function gf(i, a, l = null) {
    var b, w, M, A;
    if (!(i != null && i.ctx) || !a) return !1;
    const c = l || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, h = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((M = a == null ? void 0 : a.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((A = a == null ? void 0 : a.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill")
      return Ky(i.ctx, mf(h), h, c), !0;
    const g = By(h, c);
    return g.length ? (Gy(i.ctx, g, h, c), !0) : !1;
  }
  function Wy(i, a, l, c = 8) {
    const h = new Uint8Array(a * l), m = [], g = new Int32Array(a * l), b = new Int32Array(a * l);
    for (let w = 0; w < l; w += 1)
      for (let M = 0; M < a; M += 1) {
        const A = w * a + M;
        if (h[A] || i[A] <= c) continue;
        let C = 0, L = 0;
        g[L] = M, b[L] = w, L += 1, h[A] = 1;
        const G = [];
        let ee = M, Q = w, ne = M, ie = w;
        for (; C < L; ) {
          const pe = g[C], re = b[C];
          C += 1, G.push({ x: pe, y: re }), pe < ee && (ee = pe), re < Q && (Q = re), pe > ne && (ne = pe), re > ie && (ie = re);
          const xe = [
            [(pe - 1 + a) % a, re],
            [(pe + 1) % a, re],
            [pe, re - 1],
            [pe, re + 1]
          ];
          for (const [ze, Ge] of xe) {
            if (Ge < 0 || Ge >= l) continue;
            const Qe = Ge * a + ze;
            h[Qe] || i[Qe] <= c || (h[Qe] = 1, g[L] = ze, b[L] = Ge, L += 1);
          }
        }
        m.push({ pixels: G, minX: ee, minY: Q, maxX: ne, maxY: ie });
      }
    return m;
  }
  function Uy(i, a) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, M) => w - M);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let c = -1, h = 0;
    for (let w = 0; w < l.length; w += 1) {
      const M = l[w], C = (w === l.length - 1 ? l[0] + a : l[w + 1]) - M - 1;
      C > c && (c = C, h = w);
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
  function Yy(i, a, l = {}) {
    var M;
    const c = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (M = i == null ? void 0 : i.getContext) == null ? void 0 : M.call(i, "2d");
    if (!m || c < 1 || h < 1) return [];
    const g = m.getImageData(0, 0, c, h), b = new Uint8Array(c * h);
    for (let A = 0; A < b.length; A += 1) b[A] = g.data[A * 4 + 3];
    return Wy(b, c, h, 8).map((A, C) => {
      const L = Uy(A, c);
      if (!L) return null;
      const G = Number(L.widthPx || 0), ee = A.maxY - A.minY + 1, Q = Number(L.startX || 0), ne = document.createElement("canvas");
      ne.width = G, ne.height = ee;
      const ie = ne.getContext("2d");
      if (!ie) return null;
      const pe = ie.createImageData(G, ee);
      return A.pixels.forEach(({ x: re, y: xe }) => {
        const ze = (xe * c + re) * 4, Ge = (Number(re || 0) - Q + c) % c, Qe = ((xe - A.minY) * G + Ge) * 4;
        pe.data[Qe + 0] = g.data[ze + 0], pe.data[Qe + 1] = g.data[ze + 1], pe.data[Qe + 2] = g.data[ze + 2], pe.data[Qe + 3] = g.data[ze + 3];
      }), ie.putImageData(pe, 0, 0), {
        id: xo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: A.minY / h,
          u1: G / c,
          v1: (A.maxY + 1) / h
        },
        rasterDataUrl: ne.toDataURL("image/png"),
        transform: {
          du: Q / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ia(i, a) {
    if (!i || !a) return null;
    const l = rs(i), c = nu(a, l.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const h = nu(a, l.right) / c, m = nu(a, l.up) / c;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function Xy(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = ui();
      return i.map((c) => ({
        x: l.x + Number(c.u || 0) * l.w,
        y: l.y + Number(c.v || 0) * l.h
      }));
    }
    const a = i.map((l) => ea(ao(l))).filter(Boolean);
    return a.every((l) => Number(l.z || 0) > 0) ? a.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function yf(i, a = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = ui();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, g = a == null ? m : Number(a || 0) + Hn(m, a);
        return {
          x: c.x + g * c.w,
          y: c.y + Number(h.v || 0) * c.h
        };
      });
    }
    const l = i.map((c) => ea(ao(c))).filter(Boolean);
    return l.every((c) => Number(c.z || 0) > 0) ? l.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function qy(i, a = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const c = i[l], h = i[(l + 1) % i.length];
      if (!c || !h || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(c.x), Number(h.y) - Number(c.y)) > a) return !1;
    }
    return !0;
  }
  function Jy(i, a, l) {
    if (!Array.isArray(i) || i.length < 3 || !a || !l) return [];
    const c = [];
    for (const h of i) {
      const m = ao(h), g = ia(a, m);
      if (!g) return [];
      c.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return qy(c, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? c : [];
  }
  function Zy(i, a, l) {
    if (!Array.isArray(i) || i.length < 1 || !a || !l) return [];
    const c = [];
    for (const h of i) {
      const m = ao(h), g = ia(a, m);
      g && c.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return c;
  }
  function Qy() {
    const i = Ve(), a = gc(i);
    if (!i || !a) return !1;
    const l = { x: a.x, y: a.y, w: a.w, h: a.h }, { rect: c, shot: h } = nw(i, a, { width: O.width, height: O.height }), m = eb(l);
    return I.save(), I.fillStyle = "#0a0a0a", I.fillRect(0, 0, O.width, O.height), sf(I, c, h) || (I.fillStyle = "rgba(255, 255, 255, 0.03)", I.fillRect(c.x, c.y, c.w, c.h)), I.restore(), I.save(), I.fillStyle = "rgba(0, 0, 0, 0.58)", I.beginPath(), I.rect(0, 0, O.width, O.height), I.roundRect(l.x, l.y, l.w, l.h, m), I.fill("evenodd"), I.restore(), I.save(), I.strokeStyle = FP, I.globalAlpha = 0.62, I.lineWidth = 2, I.beginPath(), I.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), I.stroke(), I.restore(), !0;
  }
  function eb(i) {
    const a = Math.max(1e-6, Number(we.frameCanvasScale || 1));
    return Math.min(Se * a, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Vr() {
    var a;
    const i = p.mode === "frame" ? Ve() : null;
    N.frameRollKnob.visible = !!i && !r && i.locked !== !0, N.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), N.frameRollKnob.displayValue = _o(N.frameRollKnob.rollDeg), N.frameRollKnob.dragging = ((a = p.interaction) == null ? void 0 : a.kind) === "roll_frame", N.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function tb() {
    var w, M;
    if (((w = p.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, a = (M = i == null ? void 0 : i.geometry) == null ? void 0 : M.points;
    let l;
    if (p.mode === "frame") {
      const A = Ve(), C = Ut(A);
      l = Jy(a, A, C);
    } else
      l = Xy(a);
    if (!Array.isArray(l) || l.length < 3) return;
    const c = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), g = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    I.save(), I.beginPath(), I.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let A = 1; A < l.length; A++) I.lineTo(Number(l[A].x || 0), Number(l[A].y || 0));
    I.closePath(), c ? (I.lineWidth = 2, I.setLineDash([6, 6]), I.lineDashOffset = 0, I.strokeStyle = "rgba(0,0,0,0.96)", I.stroke(), I.lineDashOffset = -6, I.strokeStyle = "rgba(255,255,255,0.96)", I.stroke(), I.setLineDash([]), I.lineDashOffset = 0) : (I.lineWidth = 1.5, I.setLineDash([6, 4]), I.strokeStyle = `rgba(${m},${g},${b},1)`, I.stroke(), I.setLineDash([])), I.restore();
  }
  function nb() {
    const i = p.frameRollOverlayVisual, a = Z(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || a <= 1e-4) return;
    const l = Ut(i.shot);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * br, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(h) * m, b = Math.sin(h) * m;
    I.save(), I.globalAlpha *= a, I.beginPath(), I.rect(l.x, l.y, l.w, l.h), I.clip(), I.translate(c.x, c.y), I.rotate(h);
    const w = Math.max(12, Math.min(l.w, l.h) / 6);
    I.beginPath();
    for (let M = -m; M <= m; M += w)
      I.moveTo(M, -m), I.lineTo(M, m);
    for (let M = -m; M <= m; M += w)
      I.moveTo(-m, M), I.lineTo(m, M);
    I.lineWidth = 1, I.strokeStyle = "rgba(255, 255, 255, 0.22)", I.stroke(), I.setTransform(1, 0, 0, 1, 0, 0), I.beginPath(), I.moveTo(c.x - g, c.y - b), I.lineTo(c.x + g, c.y + b), I.lineWidth = 1.5, I.setLineDash([8, 6]), I.strokeStyle = "rgba(255, 255, 255, 0.92)", I.shadowColor = "rgba(0, 0, 0, 0.8)", I.shadowBlur = 3, I.stroke(), I.setLineDash([]), I.restore();
  }
  function rb() {
    return t !== "cutout" || !Ve() ? 0 : RP;
  }
  function ib() {
    const i = Z(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const a = Ve(), l = a ? Qt(a) : null, c = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && c && (p.cutoutPanoDimCorners = c), a && (l != null && l.visible) && c && (p.cutoutPanoFrameVisual = {
      item: a,
      geom: l,
      selected: $d(a),
      locked: vn(a)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? c : h ? p.cutoutPanoDimCorners || [] : [];
    if (I.save(), I.fillStyle = `rgba(0, 0, 0, ${i})`, I.beginPath(), I.rect(0, 0, O.width, O.height), m.length >= 4) {
      I.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) I.lineTo(m[g].x, m[g].y);
      I.closePath();
    }
    I.fill("evenodd"), I.restore();
  }
  function ob() {
    nn = null, p.mode === "frame" ? (we.frameSafeRect = Fb(), Qy()) : p.mode === "unwrap" ? vy(!1) : _y(!1), ib(), t === "cutout" && Ey(), Cy(), Vr(), tb(), nb(), N.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), we.hasPresentedFrame || (we.hasPresentedFrame = !0, le.style.opacity = "1"), t === "cutout" && N.cameraPreview && (N.cameraPreview.settled = we.pendingStableLayoutFrames <= 0 && we.hasPresentedFrame && p.mode !== "frame");
    const i = cy();
    N.stageStatus = i.status, N.stageStatusDetail = i.detail, i.status === or ? (J == null || J.removeAttribute("data-stage-ready"), J == null || J.setAttribute("data-stage-loading-kind", i.detail)) : (J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind"));
  }
  function ab(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function sb() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = I0();
  }
  function ce(i = {}) {
    var b, w, M, A, C, L, G, ee, Q, ne;
    const a = !!i.localOnly, l = i.externalSync === !0, c = String(i.cause || ""), h = String(((b = p.interaction) == null ? void 0 : b.kind) || "");
    (!a || h === "view" || h === "pan_frame" || ab() || !!((w = p.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (we.backgroundDirty = !0), a && Fd() && (p.livePaintInteractionRevision += 1, we.backgroundDirty = !0), (!a || c === "selection" || c === "mode" || c === "cutout_frame") && (tc(), Rr()), sb(), l && ((A = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || A.call(M), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), l && !a && ((G = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || G.call(L, !0, !0), (ne = (Q = (ee = Ar) == null ? void 0 : ee.canvas) == null ? void 0 : Q.setDirty) == null || ne.call(Q, !0, !0)), we.dirty = !0;
  }
  function bf() {
    const i = O.getBoundingClientRect(), a = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== a || O.height !== l || le.width !== a || le.height !== l ? (O.width = a, O.height = l, le.width = a, le.height = l, we.backgroundDirty = !0, we.dirty = !0, t === "cutout" && (we.pendingStableLayoutFrames = Math.max(Number(we.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function lb(i = performance.now()) {
    var m, g;
    we.lastTickTs = i;
    const a = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    a != null && a.shot && (p.frameRollOverlayVisual = { shot: a.shot });
    const l = a ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const b = Z(
        (i - Number(p.frameRollOverlayStartTs || i)) / $P,
        0,
        1
      );
      p.frameRollOverlayAlpha = Bn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        Es(b)
      ), b >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), we.dirty = !0;
    }
    const c = rb();
    if (Math.abs(c - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = c, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - c) > 1e-6) {
      const b = Z(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Dp,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Bn(
        Number(p.cutoutPanoDimFrom || 0),
        c,
        Es(b)
      ), b >= 1 && (p.cutoutPanoDimAlpha = c), b >= 1 && c === 0 && (p.cutoutPanoDimCorners = null), we.dirty = !0;
    }
    const h = t === "cutout" && Ve() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const b = Z(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Dp,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Bn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        Es(b)
      ), b >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), we.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const b = Math.max(1, Number(p.outputPreviewAnimDurationMs)), w = Z((i - Number(p.outputPreviewAnimStartTs || 0)) / b, 0, 1), A = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? WP(w) : qP(w);
      p.outputPreviewAnim = Bn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, A), we.dirty = !0, w >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((g = p.viewTween) != null && g.active) {
      const b = p.viewTween, w = Z((i - b.startTs) / b.durationMs, 0, 1), M = Es(w);
      p.viewYaw = $t(b.startYaw + b.deltaYaw * M), p.viewPitch = b.startPitch + (b.targetPitch - b.startPitch) * M, p.viewFov = b.startFov + (b.targetFov - b.startFov) * M, we.backgroundDirty = !0, we.dirty = !0, w >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(on.state.inertia.vx || 0), p.viewInertia.vy = Number(on.state.inertia.vy || 0), p.viewInertia.active = !!on.state.inertia.active, on.stepInertia(i) && (p.viewInertia.vx = Number(on.state.inertia.vx || 0), p.viewInertia.vy = Number(on.state.inertia.vy || 0), p.viewInertia.active = !!on.state.inertia.active, we.backgroundDirty = !0, we.dirty = !0), (we.dirty || i - we.lastSizeCheckTs >= 220) && (bf(), we.lastSizeCheckTs = i), we.pendingStableLayoutFrames > 0 && (we.pendingStableLayoutFrames -= 1, we.dirty = !0), we.dirty) {
      if (we.pendingStableLayoutFrames > 0)
        return;
      we.dirty = !1, ob();
    }
  }
  function vf(i = performance.now()) {
    if (we.running)
      try {
        lb(i);
      } catch (a) {
        const l = String((a == null ? void 0 : a.stack) || (a == null ? void 0 : a.message) || a || "unknown editor frame error");
        we.tickErrorSignature !== l && (we.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", a)), N.stageStatus = ar, N.stageStatusDetail = "frame", J == null || J.setAttribute("data-stage-ready", ""), J == null || J.removeAttribute("data-stage-loading-kind");
      } finally {
        we.running && (we.rafId = requestAnimationFrame(vf));
      }
  }
  function cb() {
    we.running = !1, we.rafId && cancelAnimationFrame(we.rafId), we.rafId = 0;
  }
  function nt() {
    r || S && _.stickers.some(jl) || (p.historyController.commitActionGroup(JSON.stringify(Jh(_))), xc());
  }
  function fc(i) {
    if (r) return;
    const a = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (xc(), !a) return;
    const l = JSON.parse(a);
    Object.keys(_).forEach((c) => delete _[c]), Object.assign(_, l), p.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], nr(), Pn(), Re(), An(), ce({ cause: "cutout_frame" });
  }
  function _f() {
    var l, c;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], a = Number((c = p.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !r && i.length > 1 && a > 0,
      canRedo: !r && i.length > 1 && a >= 0 && a < i.length - 1
    };
  }
  function Pn() {
    ki();
    const i = Nk({
      editor: p,
      swatches: Xs,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: vr,
      colorsApproximatelyEqual: qs,
      rgb01ToHsv: ou,
      hsv01ToRgb: iu,
      getBrushPresetIdForTool: mi,
      isActiveLassoTool: V0
    });
    if (Object.assign(N.paintDock, i), B0(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    Ne && (clearTimeout(Ne), Ne = 0), R && (!i.colorEnabled && j && !j.hidden && (Ne = window.setTimeout(() => {
      j.hidden = !0, N.paintDock.colorPopOpen = !1, Ne = 0;
    }, 170)), j && (j.style.setProperty("--picker-hue-color", i.pickerHueColor), j.style.setProperty("--picker-sat", i.pickerSat), j.style.setProperty("--picker-val", i.pickerVal), j.style.setProperty("--picker-hue", i.pickerHue)), ue && (ue.style.left = i.pickerSvLeft, ue.style.top = i.pickerSvTop), he && (he.style.left = i.pickerHueLeft));
  }
  function co() {
    const i = rn(t === "cutout" && p.mode === "frame" ? Ve() : kt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Wr(i)
    }, Re());
  }
  function Re() {
    var Qe, be, ae, me;
    if (fi(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = Mk(_.ui_settings);
    if (s) {
      N.sidePanel = Pk({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: $n
      });
      return;
    }
    const a = kt(), l = t === "cutout" && p.mode === "frame" ? Ve() : null, c = l || a, h = l ? [l] : tr(), m = l ? "shot" : Za();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke") {
      const ve = rn(c);
      p.panelLastValues = {
        yaw_deg: Number(ve.yaw_deg || 0),
        pitch_deg: Number(ve.pitch_deg || 0),
        hFOV_deg: Number(ve.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(ve.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(ve.rot_deg || 0),
        roll_deg: Number(ve.roll_deg || 0),
        aspect_id: Wr(ve)
      }, Zn(c) && (p.panelLastValues.opacity = Rl(c, p.frame).opacity * 100);
    }
    const g = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), b = m === "stroke" ? null : c, w = S && p.inspectCamera, M = w ? Zx(_.camera, p.frame) : Zn(b) ? p.panelLastValues : b || g, A = w || !!b && !vn(b);
    p.panelWasEnabled = A, tc();
    let C = null;
    if (l) {
      const ve = ql({ item: l, kind: "shot", label: "Frame" });
      C = {
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
      t === "stickers" ? fr().forEach((Ee, lt) => {
        var Mt, Tt;
        if (!Ee) return;
        const Xe = S ? Pg(Ee) : Wt(Ee) ? String(Ee.id || Jc) : String(((Tt = (Mt = _.assets) == null ? void 0 : Mt[Ee.asset_id]) == null ? void 0 : Tt.name) || Ee.asset_id || Ee.id), Ot = `${lt + 1}. ${Xe}${Wt(Ee) && no(Ee) ? " (hidden)" : ""}`, an = ql({ item: Ee, label: Ot, kind: "image" });
        ve.push({ id: Ee.id, label: an.label, icon: an.icon, item: Ee, kind: "image" });
      }) : Vd().forEach((Ee) => {
        if (!(Ee != null && Ee.item)) return;
        const lt = ql(Ee);
        ve.push({ id: Ee.item.id, label: lt.label, icon: lt.icon, item: Ee.item, kind: Ee.kind });
      });
      const Oe = (b == null ? void 0 : b.id) || "", je = w ? { label: "Camera", icon: Pe.camera } : ve.find((Ee) => Ee.id === Oe) || ve[0];
      C = {
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
    const L = [], G = (ve, Oe, je, Ee, lt) => {
      const Xe = Z(Number(M[ve] || 0), je, Ee);
      L.push({
        key: ve,
        label: Oe,
        min: je,
        max: Ee,
        step: lt,
        value: Xe,
        displayValue: _o(Xe),
        fillPct: Z((Xe - je) / Math.max(1e-6, Ee - je) * 100, 0, 100),
        enabled: A && !r
      });
    }, ee = [];
    w ? (G("position_x", "X", -100, 100, 0.01), G("position_y", "Y", -100, 100, 0.01), G("position_z", "Z", -100, 100, 0.01), G("yaw_deg", "Yaw", -180, 180, 0.1), G("pitch_deg", "Pitch", -90, 90, 0.1), G("roll_deg", "Roll", -180, 180, 0.1), G("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ee.push(`Selected objects: ${h.length}`), ee.push("Multi-selection supports z-order and delete.")) : (G("yaw_deg", "Yaw", -180, 180, 0.1), G("pitch_deg", "Pitch", -90, 90, 0.1), G("hFOV_deg", "H FOV", 1, 179, 0.1), G("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? G("rot_deg", "Rotation", -180, 180, 0.1) : G("roll_deg", "Roll", -180, 180, 0.1), S && G("opacity", "Opacity", 0, 100, 1));
    const Q = Array.isArray((be = (Qe = _ == null ? void 0 : _.painting) == null ? void 0 : Qe.paint) == null ? void 0 : be.strokes) ? _.painting.paint.strokes.length : 0, ne = Array.isArray((me = (ae = _ == null ? void 0 : _.painting) == null ? void 0 : ae.mask) == null ? void 0 : me.strokes) ? _.painting.mask.strokes.length : 0, ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ve) => String((ve == null ? void 0 : ve.name) || "")) : [], pe = BP(
      e,
      ie.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), re = !!String((pe == null ? void 0 : pe.src) || "").trim() || zd("pano_input_images").length > 0, xe = fr().length > 0 || Q > 0, ze = ne > 0, Ge = [
      { key: "mask", label: "Mask", icon: Pe.circle_dashed_tool, visible: !!p.showMask, enabled: ze },
      { key: "objects", label: "Paint / Images", icon: Pe.image, visible: !!p.showObjects, enabled: xe },
      { key: "panorama", label: "Panorama", icon: Pe.globe, visible: !!p.showPanorama, enabled: re }
    ].map((ve) => ({
      ...ve,
      ariaLabel: `Toggle ${ve.label.toLowerCase()}`,
      tip: ve.visible ? "Hide" : "Show"
    }));
    N.sidePanel = Ak({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: A,
      selectedKind: w ? "camera" : m,
      selectedItems: h,
      params: L,
      notes: ee,
      visibilityRows: Ge,
      uiSettings: i,
      normalizeCoverageValue: $n
    });
  }
  function fi() {
    if (!S || r) return;
    const i = uo(), a = Me.selection, l = a && hi(a.owner);
    if (a) {
      const h = l ? oa(a) : [];
      a.frames = a.frames.filter((m) => h.some((g) => l[g].keyframes.some((b) => b.frame === m))), a.frames.length || (Me.selection = null);
    }
    const c = _.timeline.fps;
    N.timeline = Ek(_, {
      frame: p.frame,
      span: i,
      selection: Me.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Me.expanded ?? qh(_),
      openRows: Me.openRows,
      audio: hc() && N.videoTransport.hasAudio ? { muted: B.muted } : null,
      playing: Me.playback !== 0,
      label: `${p.frame}f · ${(p.frame / c).toFixed(2)}s @ ${Number(c.toFixed(3))} fps`
    }), N.easing = Me.selection ? Ok(l, oa(Me.selection), Me.selection.frames, aa(Me.selection.owner)) : null;
  }
  function uo(i = null) {
    const a = _.timeline.fps, l = N.videoTransport.ready ? Math.round(Number(N.videoTransport.duration || 0) * a) : 0;
    return Gx(_, { minimum: Math.round(a * 5), frames: l, openClip: i });
  }
  function hi(i) {
    return i === "camera" ? _.camera : _.stickers.find((a) => a.id === i) || null;
  }
  function oa(i) {
    return i.lane ? [i.lane] : Wo(hi(i.owner));
  }
  function aa(i) {
    if (i === "camera") return 0;
    const { clip: a } = hi(i);
    return a.start - a.in;
  }
  function us(i) {
    const a = hi(i);
    return !!a && a.locked !== !0;
  }
  function xf() {
    const i = kt();
    Zn(i) && !Vi(i.clip, p.frame) && hr(null);
  }
  function Ni(i) {
    const a = Math.max(0, Math.round(i));
    a !== p.frame && (p.frame = a, xf(), Ht(), Re(), Ye(), ce());
  }
  function hc() {
    return B instanceof HTMLVideoElement && !!B.getAttribute("src");
  }
  function ub(i) {
    pi(), Ni(i), Gn(), hc() && (Jo(p.frame / _.timeline.fps), Zo());
  }
  function db() {
    const i = B instanceof HTMLVideoElement ? B.getAttribute("src") : null, a = Gn();
    !S || !a || a === i || B.addEventListener("loadedmetadata", () => {
      Me.playback || B.getAttribute("src") !== a || (Jo(p.frame / _.timeline.fps), Zo());
    }, { once: !0 });
  }
  function pi() {
    if (!Me.playback) return;
    cancelAnimationFrame(Me.playback.raf);
    const { video: i } = Me.playback;
    Me.playback = 0, i && (B.pause(), Y.pendingPlaybackResume = !1, Y.resumeAfterScrub = !1, Jo(p.frame / _.timeline.fps), Zo()), fi();
  }
  function wf(i) {
    Gn(), Y.mode = "playback", Y.pendingPlaybackResume = !1, Y.resumeAfterScrub = !1, Y.editorTime = i, Math.abs(Number(B.currentTime || 0) - i) > Math.max(ai(), 0.04) ? (Y.seeking = !1, Y.pendingPlaybackResume = !0, es(i)) : B.play().catch(() => {
    });
  }
  function Sf(i) {
    var l;
    if (!((l = Me.playback) != null && l.video) || Y.seeking || Y.pendingPlaybackResume) return;
    const a = Math.floor(i * _.timeline.fps + 0.5);
    a >= uo() ? kf() : Ni(a);
  }
  function kf() {
    Me.playback.endedAt = null, Ni(0), wf(0);
  }
  function fb() {
    if (Me.playback) {
      pi();
      return;
    }
    const i = _.timeline.fps, a = p.frame >= uo() - 1 ? 0 : p.frame;
    Gn();
    const l = { video: hc(), raf: 0, endedAt: null };
    if (Me.playback = l, l.video) {
      const c = typeof B.requestVideoFrameCallback == "function", h = (m) => {
        if (l.raf = requestAnimationFrame(h), Y.seeking || Y.pendingPlaybackResume) return;
        if (B.paused && !B.ended) {
          pi();
          return;
        }
        if (!B.ended) {
          c || Sf(Number(B.currentTime || 0));
          return;
        }
        l.endedAt ?? (l.endedAt = { ts: m, frame: p.frame });
        const g = l.endedAt.frame + Math.floor((m - l.endedAt.ts) / 1e3 * i);
        g >= uo() ? kf() : Ni(g);
      };
      Ni(a), wf(a / i), l.raf = requestAnimationFrame(h);
    } else {
      const c = performance.now(), h = (m) => {
        l.raf = requestAnimationFrame(h), Ni((a + Math.floor((m - c) / 1e3 * i)) % uo());
      };
      l.raf = requestAnimationFrame(h);
    }
    fi();
  }
  function fo() {
    Ht(), Re(), Ye(), ce();
  }
  function sa() {
    nt(), ot(), fo();
  }
  function hb() {
    const { selection: i } = Me;
    us(i.owner) && (Lx(hi(i.owner), oa(i), i.frames, p.frame - aa(i.owner)), Me.selection = null, sa());
  }
  function pb(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && (pi(), Gn()), Ni(i.frame), B instanceof HTMLVideoElement && B.getAttribute("src") && (i.phase === "end" ? Zo() : Jo(p.frame / _.timeline.fps));
        return;
      }
      if (i.type === "play") {
        fb();
        return;
      }
      if (i.type === "mute") {
        Gd(), fi();
        return;
      }
      if (i.type === "toggle-expanded") {
        Me.expanded = !(Me.expanded ?? qh(_)), Me.selection = null, fi();
        return;
      }
      if (i.type === "toggle-row") {
        Me.openRows.has(i.id) ? Me.openRows.delete(i.id) : Me.openRows.add(i.id), fi();
        return;
      }
      if (i.type === "select-row") {
        const a = _.stickers.find((l) => l.id === i.id);
        a && !Vi(a.clip, p.frame) && ub(a.clip.start), hr(fr().find((l) => l.id === i.id) || null), p.inspectCamera = i.id === "camera", Me.selection = null, Re(), Ye(), ce();
        return;
      }
      if (i.type === "select-keys") {
        const a = aa(i.owner), l = i.frames.map((m) => m - a), c = Me.selection, h = (c == null ? void 0 : c.owner) === i.owner && c.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(c.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          c.frames = [...m].sort((g, b) => g - b);
        } else
          Me.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        fi();
        return;
      }
      if (i.type === "move-keys") {
        const a = Me.selection;
        if (!a || !us(a.owner)) return;
        const l = hi(a.owner), c = oa(a);
        if (i.phase === "start") {
          Me.drag = { keyframes: c.map((g) => structuredClone(l[g].keyframes)), frames: a.frames };
          return;
        }
        const { drag: h } = Me;
        if (!(h != null && h.keyframes)) return;
        c.forEach((g, b) => {
          l[g].keyframes = structuredClone(h.keyframes[b]);
        });
        const m = Rx(l, c, h.frames, i.delta, -aa(a.owner));
        if (a.frames = h.frames.map((g) => g + m), i.phase !== "end") {
          fo();
          return;
        }
        Me.drag = null, m ? sa() : fo();
        return;
      }
      if (i.type === "clip") {
        const a = _.stickers.find((h) => h.id === i.id);
        if (!a || a.locked) return;
        if (i.phase === "start") {
          Me.drag = { clip: { ...a.clip }, span: uo(a.clip) };
          return;
        }
        const { drag: l } = Me;
        if (!(l != null && l.clip)) return;
        const c = l.clip;
        if (a.clip = { ...c }, i.delta && i.mode === "move" ? zx(a.clip, i.delta) : i.delta && i.mode === "start" ? jx(a.clip, c.start + i.delta) : i.delta && Hx(a.clip, (c.duration === null ? l.span : c.start + c.duration) + i.delta, l.span), i.phase !== "end") {
          fo();
          return;
        }
        Me.drag = null, xf(), JSON.stringify(a.clip) !== JSON.stringify(c) ? sa() : fo();
        return;
      }
      if (i.type === "key-row") {
        if (!us(i.owner)) return;
        pi(), Tx(hi(i.owner), p.frame - aa(i.owner)), sa();
        return;
      }
      if (i.type === "easing") {
        const a = Me.selection;
        if (!a || !us(a.owner)) return;
        Vx(hi(a.owner), oa(a), a.frames, i.easing), i.commit ? sa() : fo();
      }
    }
  }
  async function Mf(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Pr(i)) return;
    if (S) {
      await gb(i);
      return;
    }
    const a = Di("asset"), l = xa(e, `add:${a}`, async () => {
      try {
        const { image: c } = await wa(i);
        Ue.set(a, c);
        const h = Di("st");
        _.stickers.push({
          id: h,
          asset_id: a,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ci(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
          rot_deg: 0,
          z_index: Qa()
        }), hr(_.stickers[_.stickers.length - 1]), ds(), Re(), Ye(), ce();
        const m = await Ri(i, {
          fetchApi: (w, M) => Yt.fetchApi(w, M)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((w) => String((w == null ? void 0 : w.asset_id) || "") === a).length) return;
        _.assets[a] = m, oo(), nt(), ot(), Re(), Ye(), ce();
      } catch (c) {
        delete _.assets[a], Ue.delete(a);
        const h = Array.isArray(_.stickers) ? _.stickers : [], m = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === a);
        throw m.length && (_.stickers = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== a), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(p.selectedId || "")) && hr(null), Re(), Ye(), ce(), ot()), c;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function mb() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = z == null ? void 0 : z.openImagePicker) == null || i.call(z, "add");
  }
  async function gb(i) {
    const a = Di("st"), l = xa(e, `add:${a}`, async () => {
      const { image: c } = await wa(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ci(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0
      }, m = bd(a, { kind: "file", filename: "" }, h, Qa());
      Ue.set(ta(m), c), _.stickers.push(m), hr(m), ds(), Re(), Ye(), ce();
      try {
        const g = await Ri(i, {
          fetchApi: (w, M) => Yt.fetchApi(w, M)
        }), b = _.stickers.find((w) => w.id === a);
        if (!b) return;
        b.source = Gs(g), Ue.set(ta(b), c), nt(), ot();
      } catch (g) {
        throw _.stickers = _.stickers.filter((b) => b.id !== a), p.selectedId === a && hr(null), nt(), ot(), g;
      } finally {
        Re(), Ye(), ce();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function yb(i, a) {
    const l = xa(e, `replace:${a}:${Di("asset")}`, async () => {
      const { image: c } = await wa(i), h = await Ri(i, {
        fetchApi: (g, b) => Yt.fetchApi(g, b)
      }), m = _.stickers.find((g) => g.id === a);
      if (m) {
        m.source = Gs(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((b) => b.value)])
          g.vFOV_deg = ci(g.hFOV_deg, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1));
        Ue.set(ta(m), c), Ht(), nt(), ot(), Re(), Ye(), ce();
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
    if (!a || !ht(a) || Wt(a) || !Pr(i)) return;
    if (S) {
      await yb(i, a.id);
      return;
    }
    const l = String(a.id || ""), c = Di("asset"), h = xa(e, `replace:${l}:${c}`, async () => {
      var A;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !ht(m) || Wt(m)) return;
      const g = String(m.asset_id || ""), b = g ? dn(((A = _.assets) == null ? void 0 : A[g]) || null) : null, w = Number(m.vFOV_deg || 0), M = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await wa(i);
        Ue.set(c, C), m.asset_id = c, m.vFOV_deg = ci(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ht(), Re(), Ye(), ce();
        const L = await Ri(i, {
          fetchApi: (ee, Q) => Yt.fetchApi(ee, Q)
        }), G = (Array.isArray(_.stickers) ? _.stickers : []).find((ee) => String((ee == null ? void 0 : ee.id) || "") === l) || null;
        if (!G || String(G.asset_id || "") !== c) return;
        _.assets[c] = L, oo(), nt(), ot(), Re(), Ye(), ce();
      } catch (C) {
        delete _.assets[c], Ue.delete(c);
        const L = (Array.isArray(_.stickers) ? _.stickers : []).find((G) => String((G == null ? void 0 : G.id) || "") === l) || null;
        throw L && String(L.asset_id || "") === c && (g && b && (_.assets[g] = b), L.asset_id = g, L.vFOV_deg = w, L.crop = M ? { ...M } : null), Ht(), ot(), Re(), Ye(), ce(), C;
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
    !i || !ht(i) || Wt(i) || (a = z == null ? void 0 : z.openImagePicker) == null || a.call(z, "replace");
  }
  async function _b() {
    if (r || t !== "stickers") return;
    if (S) {
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
        const g = await fetch(m).then((C) => C.blob()), b = String(g.type || "image/png").split("/")[1] || "png", w = String((h == null ? void 0 : h.name) || `${c}.${b}`), M = new File([g], w, { type: g.type || "image/png" }), A = await Ri(M, {
          fetchApi: (C, L) => Yt.fetchApi(C, L)
        });
        _.assets[c] = {
          ...A,
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
          const c = await fetch(l).then((b) => b.blob()), h = String(c.type || "image/png").split("/")[1] || "png", m = new File([c], `${a.id}.${h}`, { type: c.type || "image/png" }), g = await Ri(m, {
            fetchApi: (b, w) => Yt.fetchApi(b, w)
          });
          a.source = Gs(g), i = !0;
        } catch {
        }
    }
    i && (ot(), ce());
  }
  function wb() {
    if (r || t !== "cutout") return;
    const i = Ve();
    if (i) {
      hr(i), p.mode = "pano", zl(
        $t(Number(i.yaw_deg || 0)),
        Z(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), Re(), Ye(), ce({ cause: "cutout_frame" });
      return;
    }
    const a = Qm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    _.shots = [a], hr(a), ds(), p.mode = "pano", nt(), ot(), Re(), Ye(), ce({ cause: "cutout_frame" });
  }
  function Sb() {
    r || t !== "cutout" || (_.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _.active.selected_shot_id = null, nt(), ot(), Re(), Ye(), ce());
  }
  function kb() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], a = [];
    for (const l of i)
      Wt(l) && (l.visible = !1, a.push(l));
    return a;
  }
  function Nf(i, a, l = "Clear") {
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
    if (r || !await Nf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = To(null), nr();
    const a = kb();
    if (t === "stickers")
      _.stickers = S ? _.stickers.filter((h) => h.placement === "world" || a.includes(h)) : a, S || (_.assets = {}), p.selectedId = ((l = a[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((c = a[0]) == null ? void 0 : c.id) || null, oo();
    else {
      const h = Xx(_.shots, _.active.selected_shot_id);
      _.stickers = a, _.assets = {}, _.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, oo();
    }
    nt(), ot(), Re(), Ye(), ce();
  }
  async function Nb(i) {
    var m, g, b, w;
    if (r) return;
    const a = i === "mask" ? "mask" : "paint", l = a === "mask" ? "Mask" : "Paint", c = ho(a);
    if (!(!c.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((g = p.interaction) == null ? void 0 : g.layerKind) === a) || !await Nf(
      `Clear ${l}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((b = p.interaction) == null ? void 0 : b.kind) === "draw" && ((w = p.interaction) == null ? void 0 : w.layerKind) === a) {
        const M = Ln();
        M && p.paintEngine.cancelActiveStroke(M), p.interaction = null;
      }
      c.length = 0, _.painting.raster_objects = Nn().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== a), a === "paint" && (ln().length = 0), nr(), nt(), ot(), Re(), Ye(), Pn(), ce();
    }
  }
  function Pb() {
    if (r) return;
    const i = kt();
    if (!i || !ht(i) || Wt(i) || S && jl(i)) return;
    let a;
    S ? a = tw(i, Di("st"), Qa()) : (a = JSON.parse(JSON.stringify(i)), a.id = Di("st"), a.yaw_deg = $t((a.yaw_deg || 0) + 8), a.z_index = Qa()), _.stickers.push(a), _.active.selected_sticker_id = a.id, p.selectedId = a.id, p.selectedIds = [a.id], Ht(), nt(), ot(), Ye(), Re(), ce();
  }
  function Pf() {
    var l, c, h, m, g;
    if (r) return;
    const i = tr(), a = kt();
    if (!(!a && i.length === 0) && !i.some((b) => vn(b))) {
      if (i.length > 1) {
        const b = new Set(i.filter((A) => Bt(A)).map((A) => String(A.actionGroupId || A.id || ""))), w = new Set(i.filter((A) => cn(A)).map((A) => Zt(A.rasterObjectId || A.id || ""))), M = new Set(i.filter(ht).map((A) => String(A.id || "")));
        b.size > 0 && (_.painting.paint.strokes = (Array.isArray((c = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : c.strokes) ? _.painting.paint.strokes : []).filter((A) => !b.has(String((A == null ? void 0 : A.actionGroupId) || ""))), _.painting.groups = ln().filter((A) => !b.has(String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || ""))), nr()), w.size > 0 && (_.painting.raster_objects = Nn().filter((A) => !w.has(String((A == null ? void 0 : A.id) || ""))), lo()), M.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((A) => M.has(String((A == null ? void 0 : A.id) || "")) ? Wt(A) ? (no(A) || (A.visible = !1), !0) : !1 : !0), oo(), Ht()), p.selectedId = null, p.selectedIds = [], nt(), ot(), Re(), Ye(), ce();
        return;
      }
      if (Bt(a)) {
        const b = String(a.actionGroupId || a.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((w) => String((w == null ? void 0 : w.actionGroupId) || "").trim() !== b), _.painting.groups = ln().filter((w) => String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim() !== b), nr(), p.selectedId = null, p.selectedIds = [], nt(), ot(), Re(), Ye(), ce();
        return;
      }
      if (cn(a)) {
        const b = Zt(a.rasterObjectId || a.id || "");
        _.painting.raster_objects = Nn().filter((w) => String((w == null ? void 0 : w.id) || "").trim() !== b), lo(), p.selectedId = null, p.selectedIds = [], nt(), ot(), Re(), Ye(), ce();
        return;
      }
      if (t === "stickers" || ht(a)) {
        if (Wt(a)) {
          if (no(a)) return;
          a.visible = !1, Ht(), nt(), ot(), Re(), Ye(), ce();
          return;
        }
        _.stickers = _.stickers.filter((b) => b.id !== a.id), oo(), Ht(), p.selectedId = ((g = fr()[0]) == null ? void 0 : g.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = p.selectedId, nt(), ot(), Re(), Ye(), ce();
        return;
      }
      Sb();
    }
  }
  function pc(i, a) {
    const l = we.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const c = Zc * Wi(l, i), h = hd(fd(l, a), c);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function Af(i, a) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const b = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(b)) {
        const [A, C] = b.split(":").map((L) => Number(L));
        if (Number.isFinite(A) && Number.isFinite(C)) return A >= C;
      }
      const w = Number(i.hFOV_deg || 64), M = Number(i.vFOV_deg || 40);
      return Math.abs(w - M) > 1e-6 ? w >= M : Ui(i) >= 1;
    })();
    let [h, m] = l[String(a)] || l["1:1"];
    h >= m !== c && ([h, m] = [m, h]);
    const g = h / m;
    if (!pc(i, g)) {
      const b = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = b, i.hFOV_deg = js(b, g);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function Ab(i, a, l) {
    if (!i || i.locked === !0) return !1;
    const c = Va(a, l);
    if (!c) return !1;
    const h = c.ratio;
    if (!pc(i, h)) {
      const m = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = js(m, h);
    }
    return i.aspect_id = c.label, !0;
  }
  function Cf(i) {
    if (!i || i.locked === !0) return;
    const a = String(i.aspect_id || "").trim(), l = ri(i), c = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, c);
    if (!pc(i, h)) {
      const m = Z(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = js(m, h);
    }
    if (/^\d+:\d+$/.test(a)) {
      const [m, g] = a.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = $i(i);
  }
  function If() {
    Qi().forEach((a, l) => {
      a.type === "sticker" && a.item && (a.item.z_index = l), a.type === "strokeGroup" && a.item && (a.item.z_index = l), a.type === "rasterObject" && a.item && (a.item.z_index = l);
    });
  }
  function Cb() {
    if (r) return;
    const i = tr();
    if (!kt() || i.length === 0 || i.some((b) => vn(b))) return;
    If();
    const l = Qi(), c = new Set(i.map((b) => ht(b) ? `sticker:${String(b.id || "")}` : cn(b) ? `rasterObject:${Zt(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var M, A;
      const w = b.type === "sticker" ? `sticker:${String(((M = b.item) == null ? void 0 : M.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((A = b.item) == null ? void 0 : A.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), Ht(), nt(), ot(), Ye(), ce();
  }
  function Ib() {
    if (r) return;
    const i = tr();
    if (!kt() || i.length === 0 || i.some((b) => vn(b))) return;
    If();
    const l = Qi(), c = new Set(i.map((b) => ht(b) ? `sticker:${String(b.id || "")}` : cn(b) ? `rasterObject:${Zt(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var M, A;
      const w = b.type === "sticker" ? `sticker:${String(((M = b.item) == null ? void 0 : M.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((A = b.item) == null ? void 0 : A.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      c.has(w) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((b, w) => {
      b.type === "sticker" && b.item && (b.item.z_index = w), b.type === "strokeGroup" && b.item && (b.item.z_index = w), b.type === "rasterObject" && b.item && (b.item.z_index = w);
    }), Ht(), nt(), ot(), Ye(), ce();
  }
  function Eb() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", d && (_.output_preset = P(Number(_.output_preset || 2048))), f && (_.coverage = $n(f.value)), v && (_.bg_color = String(v.value || _.bg_color || "#00ff00")), An(), e.setDirtyCanvas(!0, !0));
  }
  function An() {
    var a;
    if (r) return;
    _.coverage = $n(_.coverage), Cg(e, _.active);
    const i = Ig(e, _);
    y && (y.value = i, (a = y.callback) == null || a.call(y, i));
  }
  const Ef = () => An();
  r || (e.__panoFlushStateBeforeQueue = Ef);
  function mc() {
    _.ui_settings = n2(_.ui_settings), r || An();
  }
  function ot() {
    var i;
    r || (An(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Ob() {
    r || ly() && ef().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Tb(i = {}) {
    var c, h, m, g, b, w, M, A, C, L;
    const a = i.syncPreview !== !1, l = i.syncGraph !== !1;
    a && ((h = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || h.call(c), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), l && ((M = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || M.call(w, !0, !0), (L = (C = (A = Ar) == null ? void 0 : A.canvas) == null ? void 0 : C.setDirty) == null || L.call(C, !0, !0));
  }
  function ds() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", Pn(), Re());
  }
  function Pi(i) {
    const a = O.getBoundingClientRect();
    return {
      x: (i.clientX - a.left) / a.width * O.width,
      y: (i.clientY - a.top) / a.height * O.height
    };
  }
  function fs(i) {
    const a = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(a.left || 0),
      y: Number(i.clientY) - Number(a.top || 0)
    };
  }
  function Of() {
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
    var G, ee, Q, ne, ie;
    if (!O) return null;
    const i = (G = O.getBoundingClientRect) == null ? void 0 : G.call(O), a = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    we.frameCanvasScale = Math.min(a, l);
    let c = 24, h = 24;
    const m = Math.max(c + 1, O.width - 24);
    let g = Math.max(h + 1, O.height - 24);
    const b = (ee = gt == null ? void 0 : gt.getBoundingClientRect) == null ? void 0 : ee.call(gt), w = (Q = gn == null ? void 0 : gn.getBoundingClientRect) == null ? void 0 : Q.call(gn);
    let M = 24;
    b && i && b.width > 0 && b.height > 0 && (M = Math.max(M, (b.right - i.left) * a + Fp)), w && i && w.width > 0 && w.height > 0 && ((ne = N.frameRail) == null ? void 0 : ne.visible) === !0 && (M = Math.max(M, (i.right - w.left) * a + Fp)), c = Math.max(c, M);
    const A = Math.min(m, O.width - M);
    let C = 24;
    const L = (ie = rt == null ? void 0 : rt.getBoundingClientRect) == null ? void 0 : ie.call(rt);
    if (L && i && L.width > 0 && L.height > 0 && (C = Math.max(C, (L.bottom - i.top) * l + Qc)), [Et, Tn].forEach((pe) => {
      var ze;
      if (!pe || !i) return;
      const re = getComputedStyle(pe);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const xe = (ze = pe.getBoundingClientRect) == null ? void 0 : ze.call(pe);
      !xe || xe.width <= 0 || xe.height <= 0 || (C = Math.max(C, (i.bottom - xe.top) * l + Qc));
    }), He && i) {
      const pe = getComputedStyle(He);
      pe.display !== "none" && pe.visibility !== "hidden" && Number(pe.opacity) > 0 && (C = Math.max(C, (LP + Qc) * l));
    }
    return h = Math.max(h, C), g = Math.max(h + 1, Math.min(g, O.height - C)), {
      x: c,
      y: h,
      w: Math.max(1, A - c),
      h: Math.max(1, g - h)
    };
  }
  function gc(i = Ve()) {
    if (!i || !O) return null;
    const a = we.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return Z_(a, i, Zc * Wi(a, i));
  }
  function Ut(i = Ve()) {
    const a = gc(i);
    return a ? { x: a.x, y: a.y, w: a.w, h: a.h } : null;
  }
  function yc() {
    return t === "cutout" && !!Ve();
  }
  function rr(i, a = performance.now()) {
    if (p.mode === "unwrap") {
      const m = ui(), g = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Z(b, 0, 1),
        t: Number(a || 0)
      };
    }
    const l = rc(i.x, i.y), { lon: c, lat: h } = sc(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - h / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function ir(i, a, l = performance.now()) {
    const c = Ut(a);
    if (!c) return null;
    const h = {
      x: (Number(i.x) - c.x) / Math.max(1, c.w),
      y: (Number(i.y) - c.y) / Math.max(1, c.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = uc(a, h);
    if (!m) return null;
    const { lon: g, lat: b } = sc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - b / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Db(i, a) {
    const l = Ve();
    if (!l || l.locked === !0) return !1;
    const c = Number(a) > 0, h = tg(l, a);
    if (!h) return !1;
    if (c) {
      const m = Zc * Wi(
        we.frameSafeRect || { w: O.width, h: O.height },
        h
      ), g = pd({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, nt(), ot(), Re());
    }, 180), Re(), !0;
  }
  function Lb() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, nt(), ot(), Re(), !0) : !1;
  }
  function la() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const a = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, a && Ai(), p.interaction = null, io(), Rr(), Re(), vt(p.pointerPos), ce({ localOnly: !0 }), !0;
  }
  function Rb(i, a) {
    const l = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function mi(i) {
    const a = String(i || "").trim();
    return a === "eraser" ? jr : Cn[a] ? a : p.activeBrushPresetId || jr;
  }
  function Tf() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Of() || yc());
  }
  function Ff() {
    var i;
    return Tf() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function hs(i, a = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), c = Number((i == null ? void 0 : i.y) || 0), h = a !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - c) > 0.01;
    return p.pointerPos = { x: l, y: c, inside: h }, g;
  }
  function $b() {
    var A, C;
    if (!Ff()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? p.maskTool : p.paintTool, l = mi(a), c = Cn[l] || Cn[jr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), g = Math.max(3, m * 0.5), b = i === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Rn(p.paintColor), w = i === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : Z(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), M = i === "mask" ? 0.95 : a === "eraser" ? 0.75 : Z(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: a,
      preset: c,
      radius: g,
      fillStyle: vr(b, w),
      strokeStyle: vr(b, M),
      x: Number(((A = p.pointerPos) == null ? void 0 : A.x) || 0),
      y: Number(((C = p.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Vb() {
    var L, G, ee;
    const i = $b();
    if (!ge) return;
    if (!i) {
      ge.style.display = "none";
      return;
    }
    let a = i.radius * 2, l = i.radius * 2, c = "999px", h = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let A = Number(i.hotspotX ?? a * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      a = xl, l = xl, c = "0", g = "0", b = "none", A = VP, C = zP, m = QP(i.fillStyle, M, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Q = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      a = Math.max(10, i.radius * 2 * Q), l = Math.max(6, i.radius * 2), c = `${Math.min(6, l * 0.42)}px`, h = Number(((ee = (G = i.preset) == null ? void 0 : G.angle) == null ? void 0 : ee.value) || 0) * zi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    ge.style.display = "block", ge.style.width = `${Math.round(a)}px`, ge.style.height = `${Math.round(l)}px`, ge.style.borderRadius = c, ge.style.border = g, ge.style.boxShadow = b, ge.style.background = m, ge.style.backgroundRepeat = "no-repeat", ge.style.backgroundPosition = "center", ge.style.backgroundSize = "contain", ge.style.transform = `translate(${Math.round(i.x - A)}px, ${Math.round(i.y - C)}px) rotate(${h}deg)`;
  }
  function zb() {
    var pe;
    if (!Ae || !se) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? p.maskTool : p.paintTool;
    if (a === "lasso_fill") return;
    const l = mi(a), c = Cn[l] || Cn[jr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), g = Math.max(6, m * 0.5), b = a === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : Rn(p.paintColor), M = i === "mask" ? vr(w, 0.22) : b ? "rgba(255,255,255,0.14)" : vr(w, Z(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), A = i === "mask" ? vr(w, 0.96) : b ? "rgba(255,255,255,0.72)" : vr(w, Z(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let C = g * 2, L = g * 2, G = "999px", ee = 0, Q = M;
    const ne = "rgba(222, 222, 222, 0.72)", ie = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Q = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const re = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      C = Math.max(16, g * 2 * re), L = Math.max(10, g * 2), G = `${Math.min(8, L * 0.42)}px`, ee = Number(((pe = c == null ? void 0 : c.angle) == null ? void 0 : pe.value) || 0) * zi;
    } else a === "brush" ? Q = `radial-gradient(circle at 50% 50%, ${A} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (C = Math.max(18, g * 1.8), L = C, Q = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${A} 43%, ${A} 58%, rgba(0,0,0,0) 59%)`) : b && (Q = "rgba(255,255,255,0.12)");
    se.style.width = `${Math.round(C)}px`, se.style.height = `${Math.round(L)}px`, se.style.borderRadius = G, se.style.background = Q, se.style.border = `1px solid ${ne}`, se.style.boxShadow = `0 0 0 1px ${ie}`, se.style.transform = `rotate(${ee}deg)`, _e && (clearTimeout(_e), _e = 0), Ae.classList.remove("fade-out"), Ae.classList.add("show");
  }
  function ps() {
    !Ae || !Ae.classList.contains("show") || (Ae.classList.add("fade-out"), _e && clearTimeout(_e), _e = window.setTimeout(() => {
      Ae.classList.remove("show", "fade-out"), _e = 0;
    }, 180));
  }
  function Df(i, a, l, c) {
    const h = mi(a), m = Cn[h] || Cn[jr], g = p.brushSizes[h] ?? 10, b = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), w = Rb(c, b), M = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), A = {
      id: xo(i),
      actionGroupId: xo("ag"),
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
        rawPoints: M.map((C) => ({ ...C })),
        points: M.map((C) => ({ ...C }))
      }
    };
    return Tp(A, m), Number(m.aspect ?? 1), Number(A.aspect ?? 1), String(A.stampKind || ""), Number(A.size || 0), String(A.radiusModel || ""), Number(A.radiusValue || 0), { ...A.targetSpace }, A;
  }
  function Lf(i, a, l, c) {
    const h = l.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = mi(a), g = Cn[m] || Cn[jr], b = {
      id: xo(i),
      actionGroupId: xo("ag"),
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
    return Tp(b, g), Number(g.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function ho(i) {
    const a = _.painting || (_.painting = To(null)), l = a[i] || (a[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function jb(i, a, l = performance.now()) {
    let c;
    if (p.mode === "frame") {
      const M = Ve();
      if (!M || (c = ir(a, M, l), !c)) return !1;
    } else
      c = rr(a, l);
    if (!c) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = h[h.length - 1];
    if (g) {
      const M = Math.abs(Number(c.u ?? c.x ?? 0) - Number(g.u ?? g.x ?? 0)), A = Math.abs(Number(c.v ?? c.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (M < 15e-4 && A < 15e-4) return !1;
    }
    const b = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), m.push({ ...b });
    const w = Ln();
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
      c = ir(a, w, l);
    } else
      c = rr(a, l);
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
    var re, xe, ze, Ge, Qe;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || (i == null ? void 0 : i.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    ls();
    const l = Ln(), c = na(l.width, l.height);
    if (!gf(c, a, { w: l.width, h: l.height })) return !1;
    const h = ((xe = (re = c.ctx) == null ? void 0 : re.getImageData(0, 0, l.width, l.height)) == null ? void 0 : xe.data) || null;
    if (!h) return !1;
    const m = new Map(ln().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], b = [], w = [...Nn().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let M = !1, A = Qi().reduce((be, ae) => Math.max(be, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function C(be, ae, me, ve = 8) {
      let Oe = ae, je = me, Ee = -1, lt = -1;
      for (let Xe = 0; Xe < me; Xe += 1)
        for (let Ot = 0; Ot < ae; Ot += 1)
          be[(Xe * ae + Ot) * 4 + 3] <= ve || (Ot < Oe && (Oe = Ot), Xe < je && (je = Xe), Ot > Ee && (Ee = Ot), Xe > lt && (lt = Xe));
      return Ee < Oe || lt < je ? null : { minX: Oe, minY: je, maxX: Ee, maxY: lt };
    }
    const L = C(h, l.width, l.height, 8);
    if (!L) return !1;
    function G(be, ae) {
      return !be || !ae ? !1 : !(be.maxX < ae.minX || ae.maxX < be.minX || be.maxY < ae.minY || ae.maxY < be.minY);
    }
    function ee(be, ae) {
      const me = li((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", ae);
      if (!me) return null;
      const ve = me.centerUv.u - me.halfW, Oe = me.centerUv.u + me.halfW, je = me.centerUv.v - me.halfH, Ee = me.centerUv.v + me.halfH, lt = l.width, Xe = l.height;
      return {
        minX: Math.floor((ve % 1 + 1) % 1 * lt),
        maxX: Math.ceil((Oe % 1 + 1) % 1 * lt),
        minY: Math.floor(Z(je, 0, 1) * Xe),
        maxY: Math.ceil(Z(Ee, 0, 1) * Xe),
        wraps: Oe - ve >= 1 || ve < 0 || Oe > 1
      };
    }
    function Q(be) {
      const ae = (be == null ? void 0 : be.bbox) || null;
      if (!ae) return null;
      const me = (be == null ? void 0 : be.transform) || {}, ve = l.width, Oe = l.height, je = Number(ae.u0 || 0) + Number(me.du || 0), Ee = Number(ae.u1 || 0) + Number(me.du || 0), lt = Number(ae.v0 || 0) + Number(me.dv || 0), Xe = Number(ae.v1 || 0) + Number(me.dv || 0);
      return {
        minX: Math.floor((je % 1 + 1) % 1 * ve),
        maxX: Math.ceil((Ee % 1 + 1) % 1 * ve),
        minY: Math.floor(Z(lt, 0, 1) * Oe),
        maxY: Math.ceil(Z(Xe, 0, 1) * Oe),
        wraps: Ee - je >= 1 || je < 0 || Ee > 1
      };
    }
    function ne(be) {
      return be ? be.wraps ? G(L, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || G(L, { minX: be.minX, maxX: l.width - 1, minY: be.minY, maxY: be.maxY }) : G(L, be) : !0;
    }
    function ie(be) {
      if (!be) return { touched: !1, canvas: null };
      const ae = na(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(be, 0, 0);
      const me = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(c.canvas, 0, 0), ae.ctx.restore();
      const ve = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let Oe = 0; Oe < l.width * l.height; Oe += 1) {
        if (h[Oe * 4 + 3] <= 8) continue;
        const Ee = me.data[Oe * 4 + 3], lt = ve.data[Oe * 4 + 3];
        if (Ee > lt)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(be, ae, me) {
      const ve = Number(me == null ? void 0 : me.z_index), Oe = Yy(be, ae, me).map((je, Ee) => ({
        ...je,
        z_index: Number.isFinite(ve) ? ve + Ee * 1e-3 : A + Ee * 1e-3
      }));
      return Oe.length && (A = Math.max(A, ...Oe.map((je) => Number((je == null ? void 0 : je.z_index) || 0))) + 1), Oe;
    }
    for (const be of ln()) {
      const ae = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!ae) continue;
      const me = er(ae, "paint");
      if (!ne(ee(be, me))) {
        b.push(be), g.push(...me);
        continue;
      }
      const ve = ((Ge = (ze = p.paintEngine) == null ? void 0 : ze.getGroupTarget) == null ? void 0 : Ge.call(ze, ae)) || null, Oe = ((Qe = ve == null ? void 0 : ve.committedPaint) == null ? void 0 : Qe.canvas) || null;
      if (!Oe) {
        b.push(be), g.push(...me);
        continue;
      }
      const je = ie(Oe);
      if (!je.touched || !je.canvas) {
        b.push(be), g.push(...me);
        continue;
      }
      M = !0;
      const Ee = pe(je.canvas, "paint", m.get(ae) || be || {});
      w.push(...Ee);
    }
    for (const be of Nn().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!ne(Q(be))) {
        w.push(be);
        continue;
      }
      const ae = Qd(be, null);
      if (!ae) {
        w.push(be);
        continue;
      }
      const me = ie(ae);
      if (!me.touched || !me.canvas) {
        w.push(be);
        continue;
      }
      M = !0;
      const ve = pe(me.canvas, "paint", be);
      w.push(...ve);
    }
    return M ? (_.painting.paint.strokes = g, _.painting.groups = b.sort((be, ae) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), _.painting.raster_objects = w.sort((be, ae) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), Qo({ preservePanelValues: !1 }), !0) : !1;
  }
  function Kb(i) {
    var g, b, w, M, A;
    if ((((b = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.rawPoints) || ((M = (w = i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      bc(i);
      const C = Ln();
      C && (String(((A = i.stroke) == null ? void 0 : A.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(C) : p.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Df(i.layerKind, l.toolKind, [], c);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = Ln();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Bb(i) {
    var g, b;
    if ((((b = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      bc(i);
      const w = Ln();
      w && p.paintEngine.commitActiveStroke(i.stroke, w), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Lf(i.layerKind, l.toolKind, [], c);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = Ln();
    m && p.paintEngine.beginStroke(h, m);
  }
  function bc(i) {
    var m, g, b, w;
    const a = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!a) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = dc(a.rawPoints || a.points || [], i.stroke.targetSpace, !0)), Gb(i);
    const c = i.layerKind === "paint" && l !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (c && Td((b = i.stroke) == null ? void 0 : b.actionGroupId), ho(i.layerKind).push(i.stroke), !0);
    const h = a.rawPoints || a.points || [];
    return h.length < 1 ? !1 : (a.processedPoints = dc(h, i.stroke.targetSpace, !0), c && Td((w = i.stroke) == null ? void 0 : w.actionGroupId), ho(i.layerKind).push(i.stroke), !0);
  }
  function Rf(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const c = Ve(), h = Ut(c);
      if (!c || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const g = ir(i, c, performance.now()), b = g ? ao(g) : null;
      if (b)
        for (const M of cc()) {
          if (!ht(M)) continue;
          const A = ia(M, b);
          if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
            const C = Qt(M);
            if (C != null && C.visible) return { item: M, geom: C };
          }
        }
      const w = Kl(!1).slice().sort((M, A) => Number((A == null ? void 0 : A.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0));
      for (const M of w) {
        if (M.type === "strokeGroup") {
          const L = to(Yo("paint", M.actionGroupId || M.id || ""));
          if (!L) continue;
          const G = Qt(L);
          if (!(G != null && G.visible)) continue;
          const ee = Array.isArray(G.strokePaths) ? G.strokePaths : [];
          for (const Q of ee) {
            const ne = Array.isArray(Q == null ? void 0 : Q.points) ? Q.points : [];
            if (!ne.length) continue;
            if (Q.closed && ne.length >= 3 && Gr(i, ne)) return { item: L, geom: G };
            const ie = Math.max(8, Number((Q == null ? void 0 : Q.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < ne.length - 1; pe += 1)
              if (ru(i, ne[pe], ne[pe + 1]) <= ie * ie) return { item: L, geom: G };
            if (ne.length === 1 && yi(i, ne[0]) <= ie * ie) return { item: L, geom: G };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const L = eo(Xo(((l = M.item) == null ? void 0 : l.id) || M.id || ""));
          if (!L) continue;
          const G = Qt(L);
          if (Zd(L, G, i, g)) return { item: L, geom: G };
          continue;
        }
        const A = M.item;
        if (!A || !ht(A) || !b) continue;
        const C = ia(A, b);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const L = Qt(A);
          if (L != null && L.visible) return { item: A, geom: L };
        }
      }
      return null;
    }
    const a = [
      ...Kl(!1).slice().sort((c, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var h;
        return c.type === "strokeGroup" ? to(Yo("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? eo(Xo(((h = c.item) == null ? void 0 : h.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? cc().filter((c) => Dn(c)) : []
    ];
    for (const c of a) {
      if (Bt(c)) {
        const m = Qt(c);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of g) {
          const w = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!w.length) continue;
          if (b.closed && w.length >= 3 && Gr(i, w)) return { item: c, geom: m };
          const M = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let A = 0; A < w.length - 1; A += 1)
            if (ru(i, w[A], w[A + 1]) <= M * M) return { item: c, geom: m };
          if (w.length === 1 && yi(i, w[0]) <= M * M) return { item: c, geom: m };
        }
        continue;
      }
      if (cn(c)) {
        const m = Qt(c);
        if (!(m != null && m.visible)) continue;
        if (Zd(c, m, i)) return { item: c, geom: m };
        continue;
      }
      const h = Qt(c);
      if (h.visible && Gr(i, h.corners))
        return { item: c, geom: h };
    }
    return null;
  }
  function vc(i, a, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (ht(l)) return Cu(i, a);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((g) => yi(g, a) <= 121);
      if (h >= 0) {
        const g = i.corners[h], b = g.x - i.center.x, w = g.y - i.center.y, M = b * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: M };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const b = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && b.length >= 3 && Gr(a, b)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let M = 0; M < b.length - 1; M += 1)
          if (ru(a, b[M], b[M + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Gr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => yi(m, a) <= 121);
      if (h >= 0) {
        const m = i.corners[h], g = m.x - i.center.x, b = m.y - i.center.y, w = g * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: w };
      }
      return Gr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => yi(m, a) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const c = i.corners.findIndex((h) => yi(h, a) <= 121);
    if (c >= 0) {
      const h = i.corners[c], m = h.x - i.center.x, g = h.y - i.center.y, b = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: b };
    }
    return yi(i.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : Gr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function $f(i, a) {
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
    return !!Gr({ x: l, y: c }, a.corners);
  }
  function vt(i) {
    if (Vb(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Ce("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? Ce("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Ce("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Ce(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Ce("grabbing") : Ce("default");
      return;
    }
    if (Ff()) {
      Ce("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Ce(DP);
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
    const a = kt(), l = a ? Qt(a) : null, c = a ? vn(a) : !1, h = c ? { kind: "none", cursor: "default" } : vc(l, i, a);
    if (!c && h.kind !== "none") {
      Ce(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && Rf(i)) {
      Ce("default");
      return;
    }
    Ce(p.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var w, M;
    if (!ur) return;
    if (p.mode === "frame") {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = kt(), a = tr();
    if (!i && a.length === 0 || p.interaction) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Za(), c = Ck({
      type: t,
      selected: i,
      selectedItems: a,
      selectedKind: l,
      geom: a.length > 1 ? Yl(a) : Qt(i),
      allLocked: Xl(a),
      anyLocked: a.some((A) => vn(A)),
      selectedLocked: vn(i),
      activeAspect: Wr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Wt,
      isStickerHidden: no,
      canRestoreSelectedToInitial: G0,
      iconSet: Pe
    });
    if (!c.visible) {
      N.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (A, C, { requireFitsBelow: L = !0 } = {}) => {
      var xe, ze, Ge;
      const ee = Number((xe = c.anchor) == null ? void 0 : xe.minX), Q = Number((ze = c.anchor) == null ? void 0 : ze.maxX), ne = Number((Ge = c.anchor) == null ? void 0 : Ge.maxY);
      if (![ee, Q, ne].every(Number.isFinite)) return null;
      const ie = Math.max(14, O.width - A - 14), pe = Z((ee + Q) * 0.5 - A * 0.5, 14, ie), re = ne + 18;
      return !Number.isFinite(pe) || !Number.isFinite(re) || L && re + C > O.height - 14 ? null : { left: pe, top: re };
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
      if (!ur || N.selectionMenu.visible !== !0) return;
      const A = ur.getBoundingClientRect(), C = Math.round(Number((A == null ? void 0 : A.width) || 0)) || 220, L = Math.round(Number((A == null ? void 0 : A.height) || 0)) || 40;
      p.menuSize = { w: C, h: L, measured: !0 };
      const G = h(C, L);
      if (!G) {
        N.selectionMenu.visible = !1;
        return;
      }
      N.selectionMenu.left = G.left, N.selectionMenu.top = G.top;
    });
  }
  function Ai() {
    Fe.timer && (clearTimeout(Fe.timer), Fe.timer = 0), Fe.target = null, N.tooltip.visible = !1;
  }
  function Yb(i) {
    if (!Jn || !i || !i.isConnected) return;
    const a = String(i.getAttribute("data-tip") || "").trim();
    if (!a) return;
    N.tooltip.text = a, N.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var Q, ne;
      if (Fe.target !== l || !Jn || !(l != null && l.isConnected)) return;
      const c = J.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, g = 12, b = Math.round(Number(((Q = Jn.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, w = Math.round(Number(((ne = Jn.getBoundingClientRect()) == null ? void 0 : ne.height) || 0)) || 24, M = !!l.closest(".pano-floating-left"), A = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let L = "", G = h.left - c.left + h.width * 0.5 - b * 0.5, ee = h.top - c.top - w - g;
      if (M)
        L = "tool-rail", G = h.right - c.left + 10, ee = h.top - c.top + h.height * 0.5 - w * 0.5, G = Z(G, m, Math.max(m, c.width - b - m)), ee = Z(ee, m, Math.max(m, c.height - w - m));
      else if (A)
        L = "frame-rail", G = h.left - c.left - b - 10, ee = h.top - c.top + h.height * 0.5 - w * 0.5, G = Z(G, m, Math.max(m, c.width - b - m)), ee = Z(ee, m, Math.max(m, c.height - w - m));
      else if (C) {
        L = "footer";
        const ie = l.closest(".pano-paint-footer"), pe = ie ? ie.getBoundingClientRect() : h;
        G = pe.left - c.left + pe.width * 0.5 - b * 0.5, ee = pe.bottom - c.top + 5, G = Z(G, m, Math.max(m, c.width - b - m)), ee = Math.max(m, ee);
      }
      G = Z(G, m, Math.max(m, c.width - b - m)), ee = Math.max(m, ee), N.tooltip.left = G, N.tooltip.top = ee, N.tooltip.variant = L, N.tooltip.visible = !0;
    });
  }
  const on = ud({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = $t(Number(i.yaw || 0)), p.viewPitch = Z(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = Z(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = O.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || O.clientWidth || 0)),
        h: Math.max(1, Number(i.height || O.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, a;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (a = _.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: ui,
    onInteraction: () => {
      we.backgroundDirty = !0, we.dirty = !0;
    }
  });
  function Xb(i, a, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Xm(a, i.lastAngle), i.lastAngle = a;
    const c = qm(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = c, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = N.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = c, h.displayValue = _o(c), h.fillPct = (c + 180) / 360 * 100), Vr(), _c(i), ce({ localOnly: !0 });
  }
  function qb(i, a, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const c = Kg(i.rollGesture, a, l);
    if (!c) return;
    i.rollGesture = c.gesture, i.center = c.gesture.center, i.lastAngle = c.gesture.lastAngle, i.accumulatedRad = c.gesture.accumulatedRad, i.shot.roll_deg = c.rollDeg, i.changed = i.changed || Math.abs(c.gesture.accumulatedRad) > 1e-9;
    const h = (((m = N.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = c.rollDeg, h.displayValue = _o(c.rollDeg), h.fillPct = (c.rollDeg + 180) / 360 * 100), Vr(), _c(i), ce({ localOnly: !0 });
  }
  const Vf = (i, a) => {
    const l = Pi(i);
    return Math.atan2(l.y - a.y, l.x - a.x);
  };
  function _c(i) {
    var g, b;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Fe.timer && (clearTimeout(Fe.timer), Fe.timer = 0), Fe.target = null;
    const a = Ut(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), c = (b = J.getBoundingClientRect) == null ? void 0 : b.call(J);
    if (!a || !l || !c || O.width <= 0 || O.height <= 0) return;
    const h = l.width / O.width, m = l.height / O.height;
    N.tooltip.text = `${_o(i.shot.roll_deg)}°`, N.tooltip.left = l.left - c.left + (a.x + a.w * 0.5) * h, N.tooltip.top = l.top - c.top + (a.y + a.h * 0.5) * m + 12, N.tooltip.variant = "roll", N.tooltip.visible = !0;
  }
  We == null || We.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const a = Ve();
    if (!a || a.locked === !0) return;
    const l = Ut(a);
    if (!l) return;
    const c = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Vf(i, c);
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
    }, (m = We.setPointerCapture) == null || m.call(We, i.pointerId), i.preventDefault(), Vr(), _c(p.interaction), ce({ localOnly: !0 });
  }), We == null || We.addEventListener("pointermove", (i) => {
    var a;
    ((a = p.interaction) == null ? void 0 : a.kind) !== "roll_frame" || p.interaction.source !== "knob" || Xb(
      p.interaction,
      Vf(i, p.interaction.center),
      i
    );
  });
  const Jb = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (nt(), ot(), Re()), p.interaction = null, Ai(), Rr(), Vr(), ce());
  };
  We == null || We.addEventListener("pointerup", Jb), We == null || We.addEventListener("pointercancel", () => la()), We == null || We.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && la();
  }), We == null || We.addEventListener("dblclick", (i) => {
    const a = p.mode === "frame" && !r ? Ve() : null;
    !a || a.locked === !0 || Math.abs(Number(a.roll_deg ?? a.rot_deg ?? 0)) <= 1e-9 || (a.roll_deg = 0, nt(), ot(), Re(), Vr(), ce(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    pi(), Me.selection && (Me.selection = null, fi());
    const a = Pi(i);
    if (hs(a, !0), p.viewTween = null, on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0, i.button === 1) {
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
        const b = p.mode === "unwrap" ? a : fs(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, on.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      vt(a), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const b = Ve(), w = Ut(b);
      if (!b || b.locked === !0 || !w) return;
      const M = Gg({
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
      }, O.setPointerCapture(i.pointerId), i.preventDefault(), Vr(), ce({ localOnly: !0 });
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
      }, vt(a), O.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const b = fs(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, on.startDrag(b.x, b.y, i.pointerId, performance.now()), vt(a), O.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Of() || yc())) {
      const b = p.primaryTool === "mask" ? "mask" : "paint", w = p.primaryTool === "mask" ? p.maskTool : p.paintTool, M = p.mode === "frame" && yc() ? Ve() : null, A = { kind: "ERP_GLOBAL" }, C = M ? ir(a, M, performance.now()) : rr(a, performance.now());
      if (!C) {
        vt(a);
        return;
      }
      p.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: xo("live"),
        stroke: w === "lasso_fill" ? Lf(b, w, [C], A) : Df(b, w, [C], A)
      }, io();
      const L = Ln();
      if (L)
        if (p.paintEngine.beginStroke(p.interaction.stroke, L), p.interaction.kind === "paint_stroke") {
          const G = p.paintEngine.ensureTarget(L), ee = Number((C == null ? void 0 : C.u) ?? (C == null ? void 0 : C.x) ?? 0), Q = Number((C == null ? void 0 : C.v) ?? (C == null ? void 0 : C.y) ?? 0);
          p.paintEngine.appendStrokePoint(G, ee, Q, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, L);
      vt(a), O.setPointerCapture(i.pointerId), ce();
      return;
    }
    const l = tr(), c = kt(), h = l.length > 1 ? Yl(l) : c ? Qt(c) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: a, current: a }, vt(a), O.setPointerCapture(i.pointerId), ce({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((w) => vn(w)) ? { kind: "none" } : vc(h, a)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((w) => w),
          offset: { x: a.x - h.center.x, y: a.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((w) => ht(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(rn(w).yaw_deg || 0),
            pitch_deg: Number(rn(w).pitch_deg || 0),
            center: (() => {
              var A, C;
              const M = Qt(w);
              return M != null && M.visible ? { x: Number(((A = M.center) == null ? void 0 : A.x) || 0), y: Number(((C = M.center) == null ? void 0 : C.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: l.filter((w) => Bt(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: dn(er(w.actionGroupId, w.layerKind)),
            frameSnapshot: dn(li(w.actionGroupId, w.layerKind)),
            center: (() => {
              var A, C;
              const M = Qt(w);
              return M != null && M.visible ? { x: Number(((A = M.center) == null ? void 0 : A.x) || 0), y: Number(((C = M.center) == null ? void 0 : C.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Ul(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: l.filter((w) => cn(w)).map((w) => ({
            id: Zt(w.rasterObjectId || w.id || ""),
            snapshot: dn(Nn().find((M) => String((M == null ? void 0 : M.id) || "") === Zt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var A, C;
              const M = Qt(w);
              return M != null && M.visible ? { x: Number(((A = M.center) == null ? void 0 : A.x) || 0), y: Number(((C = M.center) == null ? void 0 : C.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: rf(w)
          }))
        }, vt(a), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (c && (h != null && h.visible)) {
      const b = vn(c) ? { kind: "none" } : vc(h, a, c);
      if (b.kind === "scale") {
        p.interaction = Bt(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: dn(er(c.actionGroupId, c.layerKind)),
          frameSnapshot: dn(li(c.actionGroupId, c.layerKind)),
          cursor: b.cursor
        } : cn(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: dn(Nn().find((w) => String((w == null ? void 0 : w.id) || "") === Zt(c.rasterObjectId || c.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(rn(c).hFOV_deg || 20),
          startVFOV: Number(rn(c).vFOV_deg || 20),
          cursor: b.cursor
        }, vt(a), O.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        p.interaction = {
          kind: b.kind,
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(rn(c).hFOV_deg || 20),
          startVFOV: Number(rn(c).vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, vt(a), O.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        p.interaction = Bt(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: h.center,
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x),
          snapshot: dn(er(c.actionGroupId, c.layerKind)),
          frameSnapshot: dn(li(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: h.center,
          startRot: Number(rn(c).rot_deg || rn(c).roll_deg || 0),
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x)
        }, vt(a), O.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Bt(c)) {
          const w = p.mode === "frame" ? (() => {
            const M = Ve();
            return M ? ir(a, M, performance.now()) : null;
          })() : rr(a, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: dn(er(c.actionGroupId, c.layerKind)),
            frameSnapshot: dn(li(c.actionGroupId, c.layerKind))
          }, vt(a), O.setPointerCapture(i.pointerId);
          return;
        }
        if (cn(c)) {
          const w = p.mode === "frame" ? (() => {
            const M = Ve();
            return M ? ir(a, M, performance.now()) : null;
          })() : rr(a, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: dn(Nn().find((M) => String((M == null ? void 0 : M.id) || "") === Zt(c.rasterObjectId || c.id || "")))
          }, vt(a), O.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: c,
          offset: { x: a.x - h.center.x, y: a.y - h.center.y }
        }, vt(a), O.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = Rf(a);
    if (m) {
      const b = p.selectedId !== m.item.id;
      if (b && p.selectedId && (nt(), An()), hr(m.item), t === "cutout" && b && (p.cutoutAspectOpen = !1), b && Re(), Ye(), ce(), vn(m.item)) {
        vt(a);
        return;
      }
      p.interaction = {
        kind: Bt(m.item) ? "move_stroke_group" : cn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: a.x - m.geom.center.x, y: a.y - m.geom.center.y },
        startUv: Bt(m.item) || cn(m.item) ? p.mode === "frame" ? (() => {
          const w = Ve();
          return w ? ir(a, w, performance.now()) : null;
        })() : rr(a, performance.now()) : null,
        snapshot: Bt(m.item) ? dn(er(m.item.actionGroupId, m.item.layerKind)) : cn(m.item) ? dn(Nn().find((w) => String((w == null ? void 0 : w.id) || "") === Zt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Bt(m.item) ? dn(li(m.item.actionGroupId, m.item.layerKind)) : null
      }, vt(a), O.setPointerCapture(i.pointerId);
      return;
    }
    const g = !!p.selectedId;
    if (g && (nt(), An()), Qo(), g && Re(), Ye(), ce(), p.mode === "pano") {
      const b = fs(i);
      p.interaction = { kind: "view", last: b, lastTs: performance.now() }, on.startDrag(b.x, b.y, i.pointerId, performance.now()), vt(a), O.setPointerCapture(i.pointerId);
    }
  }, O.onpointermove = (i) => {
    var c, h, m, g, b, w, M, A, C, L, G, ee, Q, ne, ie, pe, re, xe, ze, Ge, Qe, be;
    const a = Pi(i);
    if (hs(a, !0), !p.interaction) {
      vt(a);
      return;
    }
    vt(a);
    const l = p.interaction;
    if (l.kind === "paint_stroke") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let me = !1;
      ae.forEach((ve) => {
        const Oe = Pi(ve);
        if (p.mode === "frame") {
          const je = Ve(), Ee = je ? Ut(je) : null;
          if (Ee) {
            const lt = (Oe.x - Ee.x) / Math.max(1, Ee.w), Xe = (Oe.y - Ee.y) / Math.max(1, Ee.h);
            if (!(lt >= 0 && lt <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Kb(l));
          }
        }
        jb(l, Oe, performance.now()) && (me = !0);
      }), me && ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let me = !1;
      if (ae.forEach((ve) => {
        const Oe = Pi(ve);
        if (p.mode === "frame") {
          const je = Ve(), Ee = je ? Ut(je) : null;
          if (Ee) {
            const lt = (Oe.x - Ee.x) / Math.max(1, Ee.w), Xe = (Oe.y - Ee.y) / Math.max(1, Ee.h);
            if (!(lt >= 0 && lt <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Bb(l));
          }
        }
        Hb(l, Oe, performance.now()) && (me = !0);
      }), me) {
        const ve = Ln();
        ve && p.paintEngine.updateActiveStroke(l.stroke, ve), ce({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const ae = performance.now(), me = p.mode === "unwrap" ? a : fs(i);
      on.moveDrag(me.x, me.y, p.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = me, ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const ae = gc(l.shot);
      if (!ae || !l.shot) return;
      const me = a.x - l.last.x, ve = a.y - l.last.y, Oe = Bg(l.shot, {
        dx: me,
        dy: ve,
        focalPx: ae.focalPx,
        invertX: ((c = _.ui_settings) == null ? void 0 : c.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Oe.yaw_deg, l.shot.pitch_deg = Oe.pitch_deg, l.changed = l.changed || Math.abs(me) > 0 || Math.abs(ve) > 0, l.last = a, ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      qb(l, a, i);
      return;
    }
    if (l.kind === "move") {
      const ae = a.x - l.offset.x, me = a.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const ve = Ve(), Oe = Ut(ve);
        if (!ve || !Oe) return;
        const je = {
          x: Z((ae - Oe.x) / Math.max(1, Oe.w), 0, 1),
          y: Z((me - Oe.y) / Math.max(1, Oe.h), 0, 1)
        }, Ee = uc(ve, je);
        if (!Ee) return;
        const lt = Os(Ee);
        Qn(l.item, { yaw_deg: lt.yaw, pitch_deg: lt.pitch });
      } else if (p.mode === "unwrap") {
        const ve = ui(), Oe = Z((ae - ve.x) / Math.max(ve.w, 1), 0, 1), je = Z((me - ve.y) / Math.max(ve.h, 1), 0, 1);
        Qn(l.item, { yaw_deg: $t(Oe * 360 - 180), pitch_deg: Z(90 - je * 180, -90, 90) });
      } else {
        const ve = rc(ae, me), Oe = Os(ve);
        Qn(l.item, { yaw_deg: Oe.yaw, pitch_deg: Oe.pitch });
      }
      ht(l.item) && Ht(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const ae = p.mode === "frame" ? (() => {
        const Oe = Ve();
        return Oe ? ir(a, Oe, performance.now()) : null;
      })() : rr(a, performance.now());
      if (!ae || !l.startUv) return;
      const me = Hn(Number(ae.u || 0), Number(l.startUv.u || 0)), ve = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Dd((m = l.item) == null ? void 0 : m.actionGroupId, me, ve, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (nr({ rebuildPaintEngine: !1 }), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const ae = p.mode === "frame" ? (() => {
        const Oe = Ve();
        return Oe ? ir(a, Oe, performance.now()) : null;
      })() : rr(a, performance.now());
      if (!ae || !l.startUv) return;
      const me = Hn(Number(ae.u || 0), Number(l.startUv.u || 0)), ve = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Rd(((b = l.item) == null ? void 0 : b.rasterObjectId) || ((w = l.item) == null ? void 0 : w.id) || "", me, ve, l.snapshot) && (lo(), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const me = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      O0(((M = l.item) == null ? void 0 : M.rasterObjectId) || ((A = l.item) == null ? void 0 : A.id) || "", me, l.snapshot) && (lo(), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const ae = a.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), me = a.y - Number(((L = l.offset) == null ? void 0 : L.y) || 0);
      let ve = !1, Oe = !1, je = !1;
      const Ee = ae - Number(((G = l.startCenter) == null ? void 0 : G.x) || ae), lt = me - Number(((ee = l.startCenter) == null ? void 0 : ee.y) || me);
      for (const Xe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const Ot = (t === "cutout" ? Wl() : fr()).find((Mt) => String((Mt == null ? void 0 : Mt.id) || "") === String(Xe.id || ""));
        if (!Ot || !ht(Ot)) continue;
        const an = {
          x: Number(((Q = Xe.center) == null ? void 0 : Q.x) || 0) + Ee,
          y: Number(((ne = Xe.center) == null ? void 0 : ne.y) || 0) + lt
        };
        if (p.mode === "frame" && t === "cutout") {
          const Mt = Ve(), Tt = Ut(Mt);
          if (!Mt || !Tt) continue;
          const Ci = {
            x: Z((an.x - Tt.x) / Math.max(1, Tt.w), 0, 1),
            y: Z((an.y - Tt.y) / Math.max(1, Tt.h), 0, 1)
          }, nh = uc(Mt, Ci);
          if (!nh) continue;
          const rh = Os(nh);
          Qn(Ot, { yaw_deg: rh.yaw, pitch_deg: rh.pitch });
        } else if (p.mode === "unwrap") {
          const Mt = ui(), Tt = Z((an.x - Mt.x) / Math.max(Mt.w, 1), 0, 1), Ci = Z((an.y - Mt.y) / Math.max(Mt.h, 1), 0, 1);
          Qn(Ot, { yaw_deg: $t(Tt * 360 - 180), pitch_deg: Z(90 - Ci * 180, -90, 90) });
        } else {
          const Mt = rc(an.x, an.y), Tt = Os(Mt);
          Qn(Ot, { yaw_deg: Tt.yaw, pitch_deg: Tt.pitch });
        }
        ve = !0;
      }
      for (const Xe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const Ot = {
          x: Number(((ie = Xe.center) == null ? void 0 : ie.x) || 0) + Ee,
          y: Number(((pe = Xe.center) == null ? void 0 : pe.y) || 0) + lt
        }, an = p.mode === "frame" ? (() => {
          const Tt = Ve();
          return Tt ? ir(Ot, Tt, performance.now()) : null;
        })() : rr(Ot, performance.now()), Mt = Xe.centerUv || null;
        if (an && Mt) {
          const Tt = Hn(Number(an.u || 0), Number(Mt.u || 0)), Ci = Number(an.v || 0) - Number(Mt.v || 0);
          Dd(Xe.id, Tt, Ci, Xe.snapshot, Xe.layerKind, Xe.frameSnapshot) && (ve = !0, Oe = !0);
        }
      }
      for (const Xe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const Ot = {
          x: Number(((re = Xe.center) == null ? void 0 : re.x) || 0) + Ee,
          y: Number(((xe = Xe.center) == null ? void 0 : xe.y) || 0) + lt
        }, an = p.mode === "frame" ? (() => {
          const Tt = Ve();
          return Tt ? ir(Ot, Tt, performance.now()) : null;
        })() : rr(Ot, performance.now()), Mt = Xe.centerUv || null;
        if (an && Mt) {
          const Tt = Hn(Number(an.u || 0), Number(Mt.u || 0)), Ci = Number(an.v || 0) - Number(Mt.v || 0);
          Rd(Xe.id, Tt, Ci, Xe.snapshot) && (ve = !0, je = !0);
        }
      }
      ve && (Oe ? nr({ rebuildPaintEngine: !1 }) : je ? lo() : Ht(), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const me = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Ld((ze = l.item) == null ? void 0 : ze.actionGroupId, me, 0, l.snapshot, (Ge = l.item) == null ? void 0 : Ge.layerKind, l.frameSnapshot) && (nr({ rebuildPaintEngine: !1 }), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let ae = (Math.atan2(a.y - l.center.y, a.x - l.center.x) - Number(l.startAng || 0)) * zi;
      i.shiftKey && (ae = Math.round(ae / 45) * 45), Ld((Qe = l.item) == null ? void 0 : Qe.actionGroupId, 1, ae, l.snapshot, (be = l.item) == null ? void 0 : be.layerKind, l.frameSnapshot) && (nr({ rebuildPaintEngine: !1 }), ce({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = a, ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const me = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / l.startDist;
      Qn(l.item, { hFOV_deg: Z(l.startHFOV * me, 1, 179), vFOV_deg: Z(l.startVFOV * me, 1, 179) }), Zn(l.item) || (l.item.aspect_id = $i(l.item)), ht(l.item) && Ht(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const me = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / l.startDist;
      Qn(l.item, { hFOV_deg: Z(l.startHFOV * me, 1, 179) }), Zn(l.item) || (l.item.aspect_id = $i(l.item)), ht(l.item) && Ht(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const me = Math.max(1, Math.hypot(a.x - l.center.x, a.y - l.center.y)) / l.startDist;
      Qn(l.item, { vFOV_deg: Z(l.startVFOV * me, 1, 179) }), Zn(l.item) || (l.item.aspect_id = $i(l.item)), ht(l.item) && Ht(), ce({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let me = (Math.atan2(a.y - l.center.y, a.x - l.center.x) - l.startAng) * zi, ve = l.startRot - me;
      i.shiftKey && (ve = Math.round(ve / 45) * 45), Qn(l.item, { [ht(l.item) ? "rot_deg" : "roll_deg"]: ve }), ht(l.item) && Ht(), ce({ localOnly: !0 });
    }
  }, O.onpointerup = () => {
    var a, l, c, h, m, g, b, w;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((a = p.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        io();
        const M = bc(p.interaction), A = !!p.interaction._hasCommittedSegments;
        if (M || A) {
          nr();
          const C = String(((c = p.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
          if (C) {
            const G = ln().find((ee) => String((ee == null ? void 0 : ee.actionGroupId) || "") === C);
            G && (G.frame = null);
          }
          const L = Ln();
          L && (M ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(L), hf()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, L) : p.paintEngine.cancelActiveStroke(L)), nt(), An(), Re(), Ye(), e.setDirtyCanvas(!0, !0), ce();
        } else {
          const C = Ln();
          C && p.paintEngine.cancelActiveStroke(C);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const M = $f(p.interaction.start, p.interaction.current), C = [
          ...t === "cutout" ? cc().filter((L) => !Dn(L)) : [...fr()],
          ...A0(),
          ...C0()
        ].filter((L) => Ub(M, Qt(L)));
        D0(C, ((g = C[C.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && C.length && (p.cutoutAspectOpen = !1), Re(), Ye(), ce();
      } else if (((b = p.interaction) == null ? void 0 : b.kind) === "pan_frame" || ((w = p.interaction) == null ? void 0 : w.kind) === "roll_frame")
        p.interaction.changed && (nt(), ot(), Re());
      else if (p.interaction && p.interaction.kind !== "view") {
        let M = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (M = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (M = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (M = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (M = !0), M && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? nr({ rebuildPaintEngine: !0 }) : lo()), nt(), An(), e.setDirtyCanvas(!0, !0), co(), Ye(), ce();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Ai(), io(), i && i.kind === "view" && on.endDrag(performance.now()), Rr(), Ye(), vt(p.pointerPos), ce();
    }
  }, O.onpointercancel = () => {
    var i, a, l;
    if (!la()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && on.endDrag(performance.now()), ((a = p.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        io();
        const c = Ln();
        c && p.paintEngine.cancelActiveStroke(c);
      }
      p.interaction = null, io(), Rr(), vt(p.pointerPos), ce({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    la();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.onmousemove = (i) => {
    const a = Pi(i), l = hs(a, !0);
    p.interaction || (vt(a), l && p.mode === "frame" && p.primaryTool === "cursor" && ce({ localOnly: !0 }));
  }, O.onmouseleave = () => {
    hs(p.pointerPos, !1), vt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && ce({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (p.mode === "frame") {
      const a = Pi(i), l = cd(i);
      l && Db(a, l) && ce({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (on.applyWheelEvent(i) && ce({ localOnly: !0 }), i.preventDefault());
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Mi(!0));
  }, O.ondrop = (i) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ke.depth = 0, Mi(!1);
    const l = Array.from(((c = i.dataTransfer) == null ? void 0 : c.files) || []).find((h) => Pr(h));
    l && Mf(l);
  };
  const zf = (i) => {
    t !== "stickers" && t !== "cutout" || r || Vl(i) && (Ke.depth += 1, Mi(!0), i.preventDefault());
  }, jf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ke.active && Vl(i) && Mi(!0), Ke.active && i.preventDefault());
  }, Hf = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ke.active) return;
    Ke.depth = Math.max(0, Ke.depth - 1);
    const a = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ke.depth === 0 || a) && Mi(!1);
  }, Gf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ke.depth = 0, Mi(!1), Vl(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", zf, !0), window.addEventListener("dragover", jf, !0), window.addEventListener("dragleave", Hf, !0), window.addEventListener("drop", Gf, !0);
  function xc() {
    const { canUndo: i, canRedo: a } = _f();
    bo(N.toolButtons, "value", "undo", { disabled: !i }), bo(N.toolButtons, "value", "redo", { disabled: !a });
  }
  const Kf = (i, a, l = !1) => {
    var M;
    pi();
    const c = t === "cutout" && p.mode === "frame" ? Ve() : null, h = c || kt(), m = c ? "shot" : Za(), g = S && p.inspectCamera;
    if (!g && (!h || m === "stroke" || vn(h))) return;
    const b = (((M = N.sidePanel) == null ? void 0 : M.params) || []).find((A) => A.key === i);
    if (!b || b.enabled === !1) return;
    let w = Number(a);
    if (Number.isNaN(w) && (w = 0), w = Z(w, Number(b.min), Number(b.max)), i === "yaw_deg" && (w = $t(w)), g) {
      Qx(_.camera, p.frame, i, w), Re(), l && nt();
      return;
    }
    i === "opacity" ? ew(h, p.frame, w / 100) : Qn(h, { [i]: w }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = $i(h)), Re(), ce(), l && nt();
  };
  $e == null || $e.addEventListener("click", async (i) => {
    var c, h, m, g, b, w, M;
    const a = i.target.closest("[data-action]");
    if (!a) return;
    const l = String(a.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const A = $n(a.getAttribute("data-coverage"));
      if (A === $n(_.coverage)) return;
      _.coverage = A, p.coverage = A, f && (f.value = String(A)), s ? we.backgroundDirty = !0 : (An(), Tb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Re(), Ye(), ce();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (c = N.sidePanel) == null ? void 0 : c.selectionPicker) != null && h.disabled) return;
      N.sidePanel.selectionPicker.open = !N.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      N.sidePanel.selectionPicker.open = !1;
      const A = String(a.getAttribute("data-selection-id") || "");
      let C = null;
      if (A && (t === "stickers" ? C = fr().find((L) => String((L == null ? void 0 : L.id) || "") === A) || null : C = ((m = Vd().find((L) => {
        var G;
        return String(((G = L == null ? void 0 : L.item) == null ? void 0 : G.id) || "") === A;
      })) == null ? void 0 : m.item) || null), hr(C || null), C && !Bt(C)) {
        const L = rn(C);
        zl(
          $t(Number(L.yaw_deg || 0)),
          Z(Number(L.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      Re(), Ye(), ce();
      return;
    }
    if (l === "copy-state-inline") {
      const A = kt(), C = Za();
      if (!A || C === "stroke" || tr().length > 1) return;
      const L = JSON.stringify(t === "cutout" && C !== "image" ? Wd(A) : U0(rn(A)));
      try {
        await navigator.clipboard.writeText(L), (g = N.sidePanel) != null && g.copyStateButton && (N.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var G;
          (G = N.sidePanel) != null && G.copyStateButton && (N.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const A = String(a.getAttribute("data-visibility") || "");
      A === "panorama" ? p.showPanorama = !p.showPanorama : A === "objects" ? p.showObjects = !p.showObjects : A === "mask" && (p.showMask = !p.showMask), Re(), ce();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = a.getAttribute("data-value") === "1", mc(), Re(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), ce();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = a.getAttribute("data-value") === "1", mc(), Re(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ce();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, mc(), Re(), (M = e.setDirtyCanvas) == null || M.call(e, !0, !0), ce();
      return;
    }
    if (l === "close-preview") {
      mo();
      return;
    }
    if (l === "cancel-close") {
      mo();
      return;
    }
    l === "save-close" && (Eb(), mo());
  }), $e == null || $e.addEventListener("input", (i) => {
    const a = i.target.closest("[data-action='param-input']");
    a && Kf(String(a.getAttribute("data-param-key") || ""), a.value, !1);
  }), $e == null || $e.addEventListener("change", (i) => {
    const a = i.target.closest("[data-action='param-input']");
    a && Kf(String(a.getAttribute("data-param-key") || ""), a.value, !0);
  });
  const wc = () => Yd();
  wc(), T.addEventListener("click", (i) => {
    var b, w, M, A;
    if ((w = (b = i.target) == null ? void 0 : b.matches) != null && w.call(b, "[data-confirm-overlay]")) {
      const C = (M = N.confirmDialog) == null ? void 0 : M.resolve;
      N.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, C == null || C(!1);
      return;
    }
    const a = i.target.closest("[data-view]");
    if (a) {
      if (a.disabled) return;
      const C = p.mode;
      p.mode = String(a.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (C !== "frame" && (we.frameSafeRect = null), Re(), Ye()), ds(), Rr(), ce();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const C = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = C, (C === "paint" || C === "mask") && Qo({ preservePanelValues: !0 }), Pn(), Re(), Ye(), ce();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const C = String(l.getAttribute("data-tool-ui-action") || "");
        if ((C === "undo" || C === "redo") && l.disabled) return;
        C === "undo" ? fc(-1) : C === "redo" ? fc(1) : C === "clear" ? Mb() : C === "add" || C === "add-image" ? mb() : C === "add-or-look" && wb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const C = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = C, Qo({ preservePanelValues: !0 }), Cn[C] && (p.activeBrushPresetId = C), Pn(), Re(), Ye(), ce();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Qo({ preservePanelValues: !0 }), Pn(), Re(), Ye(), ce();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const C = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Nb(C);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const C = Xs.find((L) => L.id === l.getAttribute("data-paint-color-swatch"));
        if (!C) return;
        p.paintColor = Rn(C.color), ye(!0), Pn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? ye(!0) : Le(), Pn();
        return;
      }
    }
    const c = String(((A = l == null ? void 0 : l.getAttribute) == null ? void 0 : A.call(l, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      if (Gn(), B.paused) {
        Y.mode = "playback", Y.pendingPlaybackResume = !1, Y.resumeAfterScrub = !1;
        const C = Number(N.videoTransport.duration || B.duration || 0), L = Number(B.currentTime || Y.editorTime || 0), G = C > 0 && L >= C - 1e-3 ? 0 : Number(Y.editorTime || L || 0), ee = Math.max(ai(), 0.04);
        Y.editorTime = G, Math.abs(L - G) > ee ? (Y.seeking = !1, Y.pendingPlaybackResume = !0, es(G)) : B.play().catch(() => {
        });
      } else
        B.pause(), Y.mode = "scrub", Y.resumeAfterScrub = !1, Y.pendingPlaybackResume = !1, Y.editorTime = Number(B.currentTime || 0), ro();
      pr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: mr(),
        currentTime: Y.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: Y.mode
      }), ce({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Gd(), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(B instanceof HTMLVideoElement)) return;
      const C = !N.videoTransport.loop;
      N.videoTransport.loop = C, B.loop = C, pr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: mr(),
        currentTime: Y.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: Y.mode,
        hasAudio: N.videoTransport.hasAudio,
        loop: C,
        muted: B.muted,
        volume: Number(B.volume ?? N.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (c === "frame-aspect") {
        N.frameRail.aspectOpen = !N.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const C = p.mode === "frame" ? Ve() : null;
        if (!C || C.locked === !0) return;
        Af(C, String(l.getAttribute("data-aspect") || "1:1")), N.frameRail.aspectOpen = !1, co(), nt(), ot(), Rr(), ce();
        return;
      }
      if (c === "frame-aspect-custom") {
        const C = p.mode === "frame" ? Ve() : null, L = l.getAttribute("data-custom-width"), G = l.getAttribute("data-custom-height");
        if (!C || !Ab(C, L, G)) return;
        N.frameRail.aspectOpen = !1, co(), nt(), ot(), Rr(), ce();
        return;
      }
      if (c === "frame-rotate-90") {
        const C = p.mode === "frame" ? Ve() : null;
        if (!C || C.locked === !0) return;
        Cf(C), N.frameRail.aspectOpen = !1, co(), nt(), ot(), Rr(), ce();
        return;
      }
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Ye(), ce();
        return;
      }
      if (c === "aspect-set") {
        const C = kt();
        if (!C) return;
        const L = String(l.getAttribute("data-aspect") || "1:1");
        Af(C, L), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, co(), nt(), ot(), Ye(), ce();
        return;
      }
      if (c === "rotate-90") {
        const C = kt();
        if (!C) return;
        Cf(C), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, co(), nt(), ot(), Ye(), ce();
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
        F0();
        return;
      }
      if (c === "back-initial") {
        j0();
        return;
      }
      if (c === "toggle-visible") {
        z0();
        return;
      }
      if (c === "delete") {
        Pf();
        return;
      }
    }
    if (c === "reset-view") {
      if (p.mode === "frame") return;
      zl(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, i2(e == null ? void 0 : e.id, p.showGrid), wc(), ce();
      return;
    }
    if (c === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), e1();
      return;
    }
    if (c === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const C = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = C, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = C ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Xf(), ce();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), g = p.customPaintHistory[m];
    g && (p.customPaintColor = Rn(g), p.paintColor = Rn(g), Pn());
  }), T.addEventListener("input", (i) => {
    const a = i.target.closest("[data-video-seek]");
    if (a) {
      if (!(B instanceof HTMLVideoElement)) return;
      Jo(a.value);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(B instanceof HTMLVideoElement)) return;
      const m = Z(Number(l.value || 0), 0, 1);
      B.volume = m, B.muted = m <= 1e-4, pr({
        ready: !!B.getAttribute("src"),
        playing: !B.paused && !B.ended,
        visible: mr(),
        currentTime: Y.editorTime,
        duration: N.videoTransport.duration,
        frameCount: N.videoTransport.frameCount,
        fps: N.videoTransport.fps,
        mode: Y.mode,
        hasAudio: N.videoTransport.hasAudio,
        muted: B.muted,
        volume: m
      });
      return;
    }
    const c = i.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), g = mi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[g] = m, Pn(), zb();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: Z(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Rn(m), p.paintColor = Rn(m), Pn();
    }
  }), T.addEventListener("change", (i) => {
    var a;
    if (i.target.closest("[data-video-seek]")) {
      if (!(B instanceof HTMLVideoElement)) return;
      Zo();
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((a = i.target) == null ? void 0 : a.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && ps();
  }), T.addEventListener("pointerup", (i) => {
    var a;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((a = i.target) == null ? void 0 : a.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && ps();
  }), T.addEventListener("pointercancel", (i) => {
    var a;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((a = i.target) == null ? void 0 : a.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && ps();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && ps();
  }), T.addEventListener("pointerover", (i) => {
    const a = i.target.closest("[data-tip]");
    !a || !T.contains(a) || Fe.target !== a && (Fe.target = a, Fe.timer && clearTimeout(Fe.timer), Fe.timer = window.setTimeout(() => {
      Fe.target === a && Yb(a);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var c, h;
    const a = i.target.closest("[data-tip]");
    !a || Fe.target !== a || (i.relatedTarget instanceof Element ? (h = (c = i.relatedTarget).closest) == null ? void 0 : h.call(c, "[data-tip]") : null) === a || Ai();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Ai();
  });
  const Zb = (i, a) => {
    var b;
    if (!te) return;
    const l = te.getBoundingClientRect(), c = Z((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - Z((a - l.top) / Math.max(1, l.height), 0, 1), m = ou(p.customPaintColor), g = { ...iu(m.h, c, h), a: Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    p.customPaintColor = Rn(g), p.paintColor = Rn(g), Pn();
  }, Qb = (i) => {
    var m;
    if (!fe) return;
    const a = fe.getBoundingClientRect(), l = Z((i - a.left) / Math.max(1, a.width), 0, 1), c = ou(p.customPaintColor), h = { ...iu(l, c.s, c.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Rn(h), p.paintColor = Rn(h), Pn();
  }, Bf = (i, a) => {
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
    i.preventDefault(), i.stopPropagation(), Bf(i, (a) => Zb(a.clientX, a.clientY));
  }), fe && (fe.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Bf(i, (a) => Qb(a.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const a = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!a) return;
    const l = a.getAttribute("data-action") === "confirm-accept", c = (h = N.confirmDialog) == null ? void 0 : h.resolve;
    N.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(l);
  });
  const Wf = () => {
    const i = !!p.fullscreen;
    bo(N.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Pe.fullscreen_close : Pe.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ms = (i) => {
    const a = !!i;
    p.fullscreen !== a && (p.fullscreen = a, T.classList.toggle("pano-modal-fullscreen", a), a ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), wc(), Wf(), oi(), ce());
  }, Uf = () => document.fullscreenElement === q, e1 = async () => {
    var i, a;
    try {
      if (!document.fullscreenEnabled) {
        ms(!p.fullscreen);
        return;
      }
      Uf() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((i = q.requestFullscreen) == null ? void 0 : i.call(q));
    } catch {
      ms(!p.fullscreen);
    }
  }, Yf = () => {
    document.fullscreenEnabled && ms(Uf());
  };
  document.addEventListener("fullscreenchange", Yf), Wf();
  const Xf = () => {
    const i = !!p.outputPreviewExpanded;
    N.outputPreviewToggle.icon = i ? Pe.fullscreen_close : Pe.fullscreen, N.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", N.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Xf();
  const Sc = e.onConnectionsChange;
  let kc = null, qf = () => {
  };
  !r && t === "stickers" && (qf = i0(e, (i = "sync") => {
    i === "executed" && (KP(Ue, Cs), db()), Ud(i);
  }, { editor: !0 }), kc = function(...a) {
    typeof Sc == "function" && Sc.apply(this, a), Gn(), Jr(this, "connections");
  }, e.onConnectionsChange = kc), r || Lp.set(String(e.id ?? "0"), () => ef());
  let po = null;
  const mo = async () => po || (po = (async () => {
    var i, a, l, c, h, m, g, b;
    return Lp.delete(String(e.id ?? "0")), Lb(), r || An(), document.fullscreenElement === q && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Yf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Ef && (e.__panoFlushStateBeforeQueue = null), (l = (a = e.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || l.call(a), (h = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || h.call(c, !0, !0), (b = (g = (m = Ar) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || b.call(g, !0, !0), Ai(), cb(), pi(), B instanceof HTMLVideoElement && B.pause(), bt.forEach((w) => {
      try {
        w();
      } catch {
      }
    }), yn.dispose(), Mi(!1), window.removeEventListener("keydown", Jf, !0), window.removeEventListener("keydown", Zf, !0), window.removeEventListener("keydown", gs, !0), window.removeEventListener("keyup", gs, !0), window.removeEventListener("blur", Qf), window.removeEventListener("keydown", eh, !0), window.removeEventListener("dragenter", zf, !0), window.removeEventListener("dragover", jf, !0), window.removeEventListener("dragleave", Hf, !0), window.removeEventListener("drop", Gf, !0), !r && t === "stickers" && (e.onConnectionsChange === kc && (e.onConnectionsChange = Sc), qf()), W.unmount(), E.remove(), Ob(), po = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), po = null, !1)), po), Jf = (i) => {
    var a, l, c, h, m;
    if (i.key === "Escape") {
      if (la()) {
        i.preventDefault(), i.stopPropagation(), (a = i.stopImmediatePropagation) == null || a.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === q) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), ms(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), mo();
    }
  }, Zf = (i) => {
    const a = String(i.key || ""), l = String(i.code || ""), c = Number(i.keyCode || 0);
    if (!(a === "Delete" || l === "Delete" || c === 46) && !(a === "Backspace" || l === "Backspace" || c === 8)) return;
    const g = i.target, b = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Me.selection) {
      hb(), i.preventDefault(), i.stopPropagation();
      return;
    }
    kt() && (Pf(), i.preventDefault(), i.stopPropagation());
  }, gs = (i) => {
    const a = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === a && p.altModifier === l || (p.marqueeModifier = a, p.altModifier = l, Vr(), vt(p.pointerPos));
  }, Qf = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Vr(), vt(p.pointerPos);
  }, eh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const a = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (a !== "z" && l !== "KeyZ") return;
    const c = i.target, h = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: g } = _f();
    i.shiftKey && !g || !i.shiftKey && !m || (fc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Jf, !0), window.addEventListener("keydown", Zf, !0), window.addEventListener("keydown", gs, !0), window.addEventListener("keyup", gs, !0), window.addEventListener("blur", Qf), window.addEventListener("keydown", eh, !0), q.addEventListener("pointerdown", (i) => {
    i.target === q && mo();
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
  gr("cutout-focus", Z0), !r && t === "stickers" && gr("external-sticker-sync", () => Ud("open"), { rollbackState: !0 }), _b().catch((i) => {
    N.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), gr("history", nt), gr("undo-redo", xc), gr("paint-ui", Pn), gr("side-panel", Re), gr("look-at-frame", tc), gr("video-source", Gn), gr("canvas-size", bf), gr("cursor", () => vt(p.pointerPos)), ce(), we.rafId = requestAnimationFrame(vf);
}
Ar.registerExtension(gS({
  app: Ar,
  openEditor: u2,
  attachStickers: wk,
  attachCutout: Sk,
  attachPreview: xk,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: TP
}));
