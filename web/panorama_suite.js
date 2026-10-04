import * as fl from "../../scripts/app.js";
import { app as Qn } from "../../scripts/app.js";
import { api as tn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function zd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ht = {}, Yo = [], Br = () => {
}, Yg = () => !1, pc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), hc = (e) => e.startsWith("onUpdate:"), Pn = Object.assign, jd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rS = Object.prototype.hasOwnProperty, Dt = (e, t) => rS.call(e, t), pt = Array.isArray, Xo = (e) => Ss(e) === "[object Map]", Xg = (e) => Ss(e) === "[object Set]", qh = (e) => Ss(e) === "[object Date]", gt = (e) => typeof e == "function", sn = (e) => typeof e == "string", Xr = (e) => typeof e == "symbol", jt = (e) => e !== null && typeof e == "object", qg = (e) => (jt(e) || gt(e)) && gt(e.then) && gt(e.catch), Jg = Object.prototype.toString, Ss = (e) => Jg.call(e), iS = (e) => Ss(e).slice(8, -1), Zg = (e) => Ss(e) === "[object Object]", Hd = (e) => sn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ya = /* @__PURE__ */ zd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), mc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, oS = /-\w/g, Tn = mc(
  (e) => e.replace(oS, (t) => t.slice(1).toUpperCase())
), aS = /\B([A-Z])/g, vo = mc(
  (e) => e.replace(aS, "-$1").toLowerCase()
), gc = mc((e) => e.charAt(0).toUpperCase() + e.slice(1)), nu = mc(
  (e) => e ? `on${gc(e)}` : ""
), Gr = (e, t) => !Object.is(e, t), pl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Qg = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Gd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Jh;
const yc = () => Jh || (Jh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zt(e) {
  if (pt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = sn(r) ? uS(r) : zt(r);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (sn(e) || jt(e))
    return e;
}
const sS = /;(?![^(]*\))/g, lS = /:([^]+)/, cS = /\/\*[^]*?\*\//g;
function uS(e) {
  const t = {};
  return e.replace(cS, "").split(sS).forEach((n) => {
    if (n) {
      const r = n.split(lS);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (sn(e))
    t = e;
  else if (pt(e))
    for (let n = 0; n < e.length; n++) {
      const r = wt(e[n]);
      r && (t += r + " ");
    }
  else if (jt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const dS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", fS = /* @__PURE__ */ zd(dS);
function e0(e) {
  return !!e || e === "";
}
function pS(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Wd(e[r], t[r]);
  return n;
}
function Wd(e, t) {
  if (e === t) return !0;
  let n = qh(e), r = qh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Xr(e), r = Xr(t), n || r)
    return e === t;
  if (n = pt(e), r = pt(t), n || r)
    return n && r ? pS(e, t) : !1;
  if (n = jt(e), r = jt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), c = t.hasOwnProperty(s);
      if (l && !c || !l && c || !Wd(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const t0 = (e) => !!(e && e.__v_isRef === !0), mt = (e) => sn(e) ? e : e == null ? "" : pt(e) || jt(e) && (e.toString === Jg || !gt(e.toString)) ? t0(e) ? mt(e.value) : JSON.stringify(e, n0, 2) : String(e), n0 = (e, t) => t0(t) ? n0(e, t.value) : Xo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], o) => (n[ru(r, o) + " =>"] = i, n),
    {}
  )
} : Xg(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ru(n))
} : Xr(t) ? ru(t) : jt(t) && !pt(t) && !Zg(t) ? String(t) : t, ru = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jn;
class hS {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = jn, !t && jn && (this.index = (jn.scopes || (jn.scopes = [])).push(
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
      const n = jn;
      try {
        return jn = this, t();
      } finally {
        jn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = jn, jn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (jn = this.prevScope, this.prevScope = void 0);
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
function mS() {
  return jn;
}
let Wt;
const iu = /* @__PURE__ */ new WeakSet();
class r0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, jn && jn.active && jn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, iu.has(this) && (iu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || o0(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zh(this), a0(this);
    const t = Wt, n = Nr;
    Wt = this, Nr = !0;
    try {
      return this.fn();
    } finally {
      s0(this), Wt = t, Nr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ud(t);
      this.deps = this.depsTail = void 0, Zh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? iu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yu(this) && this.run();
  }
  get dirty() {
    return Yu(this);
  }
}
let i0 = 0, Xa, qa;
function o0(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qa, qa = e;
    return;
  }
  e.next = Xa, Xa = e;
}
function Kd() {
  i0++;
}
function Bd() {
  if (--i0 > 0)
    return;
  if (qa) {
    let t = qa;
    for (qa = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xa; ) {
    let t = Xa;
    for (Xa = void 0; t; ) {
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
function a0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function s0(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Ud(r), gS(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function Yu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (l0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function l0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === os) || (e.globalVersion = os, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Wt, r = Nr;
  Wt = e, Nr = !0;
  try {
    a0(e);
    const i = e.fn(e._value);
    (t.version === 0 || Gr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Wt = n, Nr = r, s0(e), e.flags &= -3;
  }
}
function Ud(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Ud(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function gS(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Nr = !0;
const c0 = [];
function hi() {
  c0.push(Nr), Nr = !1;
}
function mi() {
  const e = c0.pop();
  Nr = e === void 0 ? !0 : e;
}
function Zh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Wt;
    Wt = void 0;
    try {
      t();
    } finally {
      Wt = n;
    }
  }
}
let os = 0;
class yS {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Yd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Wt || !Nr || Wt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Wt)
      n = this.activeLink = new yS(Wt, this), Wt.deps ? (n.prevDep = Wt.depsTail, Wt.depsTail.nextDep = n, Wt.depsTail = n) : Wt.deps = Wt.depsTail = n, u0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Wt.depsTail, n.nextDep = void 0, Wt.depsTail.nextDep = n, Wt.depsTail = n, Wt.deps === n && (Wt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, os++, this.notify(t);
  }
  notify(t) {
    Kd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Bd();
    }
  }
}
function u0(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        u0(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xu = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ Symbol(
  ""
), qu = /* @__PURE__ */ Symbol(
  ""
), as = /* @__PURE__ */ Symbol(
  ""
);
function wn(e, t, n) {
  if (Nr && Wt) {
    let r = Xu.get(e);
    r || Xu.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Yd()), i.map = r, i.key = n), i.track();
  }
}
function li(e, t, n, r, i, o) {
  const s = Xu.get(e);
  if (!s) {
    os++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Kd(), t === "clear")
    s.forEach(l);
  else {
    const c = pt(e), m = c && Hd(n);
    if (c && n === "length") {
      const p = Number(r);
      s.forEach((h, y) => {
        (y === "length" || y === as || !Xr(y) && y >= p) && l(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), m && l(s.get(as)), t) {
        case "add":
          c ? m && l(s.get("length")) : (l(s.get(co)), Xo(e) && l(s.get(qu)));
          break;
        case "delete":
          c || (l(s.get(co)), Xo(e) && l(s.get(qu)));
          break;
        case "set":
          Xo(e) && l(s.get(co));
          break;
      }
  }
  Bd();
}
function Do(e) {
  const t = /* @__PURE__ */ Ft(e);
  return t === e ? t : (wn(t, "iterate", as), /* @__PURE__ */ hr(e) ? t : t.map(Pr));
}
function bc(e) {
  return wn(e = /* @__PURE__ */ Ft(e), "iterate", as), e;
}
function jr(e, t) {
  return /* @__PURE__ */ gi(e) ? oa(/* @__PURE__ */ uo(e) ? Pr(t) : t) : Pr(t);
}
const bS = {
  __proto__: null,
  [Symbol.iterator]() {
    return ou(this, Symbol.iterator, (e) => jr(this, e));
  },
  concat(...e) {
    return Do(this).concat(
      ...e.map((t) => pt(t) ? Do(t) : t)
    );
  },
  entries() {
    return ou(this, "entries", (e) => (e[1] = jr(this, e[1]), e));
  },
  every(e, t) {
    return ni(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ni(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => jr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return ni(
      this,
      "find",
      e,
      t,
      (n) => jr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ni(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ni(
      this,
      "findLast",
      e,
      t,
      (n) => jr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ni(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ni(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return au(this, "includes", e);
  },
  indexOf(...e) {
    return au(this, "indexOf", e);
  },
  join(e) {
    return Do(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return au(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ni(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Oa(this, "pop");
  },
  push(...e) {
    return Oa(this, "push", e);
  },
  reduce(e, ...t) {
    return Qh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qh(this, "reduceRight", e, t);
  },
  shift() {
    return Oa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ni(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Oa(this, "splice", e);
  },
  toReversed() {
    return Do(this).toReversed();
  },
  toSorted(e) {
    return Do(this).toSorted(e);
  },
  toSpliced(...e) {
    return Do(this).toSpliced(...e);
  },
  unshift(...e) {
    return Oa(this, "unshift", e);
  },
  values() {
    return ou(this, "values", (e) => jr(this, e));
  }
};
function ou(e, t, n) {
  const r = bc(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ hr(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = n(o.value)), o;
  }), i;
}
const vS = Array.prototype;
function ni(e, t, n, r, i, o) {
  const s = bc(e), l = s !== e && !/* @__PURE__ */ hr(e), c = s[t];
  if (c !== vS[t]) {
    const h = c.apply(e, o);
    return l ? Pr(h) : h;
  }
  let m = n;
  s !== e && (l ? m = function(h, y) {
    return n.call(this, jr(e, h), y, e);
  } : n.length > 2 && (m = function(h, y) {
    return n.call(this, h, y, e);
  }));
  const p = c.call(s, m, r);
  return l && i ? i(p) : p;
}
function Qh(e, t, n, r) {
  const i = bc(e), o = i !== e && !/* @__PURE__ */ hr(e);
  let s = n, l = !1;
  i !== e && (o ? (l = r.length === 0, s = function(m, p, h) {
    return l && (l = !1, m = jr(e, m)), n.call(this, m, jr(e, p), h, e);
  }) : n.length > 3 && (s = function(m, p, h) {
    return n.call(this, m, p, h, e);
  }));
  const c = i[t](s, ...r);
  return l ? jr(e, c) : c;
}
function au(e, t, n) {
  const r = /* @__PURE__ */ Ft(e);
  wn(r, "iterate", as);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Jd(n[0]) ? (n[0] = /* @__PURE__ */ Ft(n[0]), r[t](...n)) : i;
}
function Oa(e, t, n = []) {
  hi(), Kd();
  const r = (/* @__PURE__ */ Ft(e))[t].apply(e, n);
  return Bd(), mi(), r;
}
const _S = /* @__PURE__ */ zd("__proto__,__v_isRef,__isVue"), d0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xr)
);
function SS(e) {
  Xr(e) || (e = String(e));
  const t = /* @__PURE__ */ Ft(this);
  return wn(t, "has", e), t.hasOwnProperty(e);
}
class f0 {
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
      return r === (i ? o ? OS : g0 : o ? m0 : h0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = pt(t);
    if (!i) {
      let c;
      if (s && (c = bS[n]))
        return c;
      if (n === "hasOwnProperty")
        return SS;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Mn(t) ? t : r
    );
    if ((Xr(n) ? d0.has(n) : _S(n)) || (i || wn(t, "get", n), o))
      return l;
    if (/* @__PURE__ */ Mn(l)) {
      const c = s && Hd(n) ? l : l.value;
      return i && jt(c) ? /* @__PURE__ */ Zu(c) : c;
    }
    return jt(l) ? i ? /* @__PURE__ */ Zu(l) : /* @__PURE__ */ da(l) : l;
  }
}
class p0 extends f0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let o = t[n];
    const s = pt(t) && Hd(n);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ gi(o);
      if (!/* @__PURE__ */ hr(r) && !/* @__PURE__ */ gi(r) && (o = /* @__PURE__ */ Ft(o), r = /* @__PURE__ */ Ft(r)), !s && /* @__PURE__ */ Mn(o) && !/* @__PURE__ */ Mn(r))
        return m || (o.value = r), !0;
    }
    const l = s ? Number(n) < t.length : Dt(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Mn(t) ? t : i
    );
    return t === /* @__PURE__ */ Ft(i) && (l ? Gr(r, o) && li(t, "set", n, r) : li(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = Dt(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && li(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Xr(n) || !d0.has(n)) && wn(t, "has", n), r;
  }
  ownKeys(t) {
    return wn(
      t,
      "iterate",
      pt(t) ? "length" : co
    ), Reflect.ownKeys(t);
  }
}
class wS extends f0 {
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
const xS = /* @__PURE__ */ new p0(), kS = /* @__PURE__ */ new wS(), MS = /* @__PURE__ */ new p0(!0);
const Ju = (e) => e, Xs = (e) => Reflect.getPrototypeOf(e);
function NS(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = /* @__PURE__ */ Ft(i), s = Xo(o), l = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, m = i[e](...r), p = n ? Ju : t ? oa : Pr;
    return !t && wn(
      o,
      "iterate",
      c ? qu : co
    ), Pn(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: h, done: y } = m.next();
          return y ? { value: h, done: y } : {
            value: l ? [p(h[0]), p(h[1])] : p(h),
            done: y
          };
        }
      }
    );
  };
}
function qs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function PS(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ Ft(o), l = /* @__PURE__ */ Ft(i);
      e || (Gr(i, l) && wn(s, "get", i), wn(s, "get", l));
      const { has: c } = Xs(s), m = t ? Ju : e ? oa : Pr;
      if (c.call(s, i))
        return m(o.get(i));
      if (c.call(s, l))
        return m(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && wn(/* @__PURE__ */ Ft(i), "iterate", co), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ Ft(o), l = /* @__PURE__ */ Ft(i);
      return e || (Gr(i, l) && wn(s, "has", i), wn(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, c = /* @__PURE__ */ Ft(l), m = t ? Ju : e ? oa : Pr;
      return !e && wn(c, "iterate", co), l.forEach((p, h) => i.call(o, m(p), m(h), s));
    }
  };
  return Pn(
    n,
    e ? {
      add: qs("add"),
      set: qs("set"),
      delete: qs("delete"),
      clear: qs("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ Ft(this), s = Xs(o), l = /* @__PURE__ */ Ft(i), c = !t && !/* @__PURE__ */ hr(i) && !/* @__PURE__ */ gi(i) ? l : i;
        return s.has.call(o, c) || Gr(i, c) && s.has.call(o, i) || Gr(l, c) && s.has.call(o, l) || (o.add(c), li(o, "add", c, c)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ hr(o) && !/* @__PURE__ */ gi(o) && (o = /* @__PURE__ */ Ft(o));
        const s = /* @__PURE__ */ Ft(this), { has: l, get: c } = Xs(s);
        let m = l.call(s, i);
        m || (i = /* @__PURE__ */ Ft(i), m = l.call(s, i));
        const p = c.call(s, i);
        return s.set(i, o), m ? Gr(o, p) && li(s, "set", i, o) : li(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ Ft(this), { has: s, get: l } = Xs(o);
        let c = s.call(o, i);
        c || (i = /* @__PURE__ */ Ft(i), c = s.call(o, i)), l && l.call(o, i);
        const m = o.delete(i);
        return c && li(o, "delete", i, void 0), m;
      },
      clear() {
        const i = /* @__PURE__ */ Ft(this), o = i.size !== 0, s = i.clear();
        return o && li(
          i,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = NS(i, e, t);
  }), n;
}
function Xd(e, t) {
  const n = PS(e, t);
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Dt(n, i) && i in r ? n : r,
    i,
    o
  );
}
const AS = {
  get: /* @__PURE__ */ Xd(!1, !1)
}, CS = {
  get: /* @__PURE__ */ Xd(!1, !0)
}, IS = {
  get: /* @__PURE__ */ Xd(!0, !1)
};
const h0 = /* @__PURE__ */ new WeakMap(), m0 = /* @__PURE__ */ new WeakMap(), g0 = /* @__PURE__ */ new WeakMap(), OS = /* @__PURE__ */ new WeakMap();
function ES(e) {
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
function TS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ES(iS(e));
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return /* @__PURE__ */ gi(e) ? e : qd(
    e,
    !1,
    xS,
    AS,
    h0
  );
}
// @__NO_SIDE_EFFECTS__
function FS(e) {
  return qd(
    e,
    !1,
    MS,
    CS,
    m0
  );
}
// @__NO_SIDE_EFFECTS__
function Zu(e) {
  return qd(
    e,
    !0,
    kS,
    IS,
    g0
  );
}
function qd(e, t, n, r, i) {
  if (!jt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = TS(e);
  if (o === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  return /* @__PURE__ */ gi(e) ? /* @__PURE__ */ uo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ft(t) : e;
}
function DS(e) {
  return !Dt(e, "__v_skip") && Object.isExtensible(e) && Qg(e, "__v_skip", !0), e;
}
const Pr = (e) => jt(e) ? /* @__PURE__ */ da(e) : e, oa = (e) => jt(e) ? /* @__PURE__ */ Zu(e) : e;
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return y0(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Tl(e) {
  return y0(e, !0);
}
function y0(e, t) {
  return /* @__PURE__ */ Mn(e) ? e : new LS(e, t);
}
class LS {
  constructor(t, n) {
    this.dep = new Yd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ft(t), this._value = n ? t : Pr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ hr(t) || /* @__PURE__ */ gi(t);
    t = r ? t : /* @__PURE__ */ Ft(t), Gr(t, n) && (this._rawValue = t, this._value = r ? t : Pr(t), this.dep.trigger());
  }
}
function ft(e) {
  return /* @__PURE__ */ Mn(e) ? e.value : e;
}
const RS = {
  get: (e, t, n) => t === "__v_raw" ? e : ft(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Mn(i) && !/* @__PURE__ */ Mn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function b0(e) {
  return /* @__PURE__ */ uo(e) ? e : new Proxy(e, RS);
}
class VS {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Yd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = os - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Wt !== this)
      return o0(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return l0(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $S(e, t, n = !1) {
  let r, i;
  return gt(e) ? r = e : (r = e.get, i = e.set), new VS(r, i, n);
}
const Js = {}, Fl = /* @__PURE__ */ new WeakMap();
let ro;
function zS(e, t = !1, n = ro) {
  if (n) {
    let r = Fl.get(n);
    r || Fl.set(n, r = []), r.push(e);
  }
}
function jS(e, t, n = Ht) {
  const { immediate: r, deep: i, once: o, scheduler: s, augmentJob: l, call: c } = n, m = ($) => i ? $ : /* @__PURE__ */ hr($) || i === !1 || i === 0 ? ci($, 1) : ci($);
  let p, h, y, S, _ = !1, w = !1;
  if (/* @__PURE__ */ Mn(e) ? (h = () => e.value, _ = /* @__PURE__ */ hr(e)) : /* @__PURE__ */ uo(e) ? (h = () => m(e), _ = !0) : pt(e) ? (w = !0, _ = e.some(($) => /* @__PURE__ */ uo($) || /* @__PURE__ */ hr($)), h = () => e.map(($) => {
    if (/* @__PURE__ */ Mn($))
      return $.value;
    if (/* @__PURE__ */ uo($))
      return m($);
    if (gt($))
      return c ? c($, 2) : $();
  })) : gt(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (y) {
      hi();
      try {
        y();
      } finally {
        mi();
      }
    }
    const $ = ro;
    ro = p;
    try {
      return c ? c(e, 3, [S]) : e(S);
    } finally {
      ro = $;
    }
  } : h = Br, t && i) {
    const $ = h, b = i === !0 ? 1 / 0 : i;
    h = () => ci($(), b);
  }
  const N = mS(), I = () => {
    p.stop(), N && N.active && jd(N.effects, p);
  };
  if (o && t) {
    const $ = t;
    t = (...b) => {
      $(...b), I();
    };
  }
  let G = w ? new Array(e.length).fill(Js) : Js;
  const R = ($) => {
    if (!(!(p.flags & 1) || !p.dirty && !$))
      if (t) {
        const b = p.run();
        if (i || _ || (w ? b.some((H, W) => Gr(H, G[W])) : Gr(b, G))) {
          y && y();
          const H = ro;
          ro = p;
          try {
            const W = [
              b,
              // pass undefined as the old value when it's changed for the first time
              G === Js ? void 0 : w && G[0] === Js ? [] : G,
              S
            ];
            G = b, c ? c(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            ro = H;
          }
        }
      } else
        p.run();
  };
  return l && l(R), p = new r0(h), p.scheduler = s ? () => s(R, !1) : R, S = ($) => zS($, !1, p), y = p.onStop = () => {
    const $ = Fl.get(p);
    if ($) {
      if (c)
        c($, 4);
      else
        for (const b of $) b();
      Fl.delete(p);
    }
  }, t ? r ? R(!0) : G = p.run() : s ? s(R.bind(null, !0), !0) : p.run(), I.pause = p.pause.bind(p), I.resume = p.resume.bind(p), I.stop = I, I;
}
function ci(e, t = 1 / 0, n) {
  if (t <= 0 || !jt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Mn(e))
    ci(e.value, t, n);
  else if (pt(e))
    for (let r = 0; r < e.length; r++)
      ci(e[r], t, n);
  else if (Xg(e) || Xo(e))
    e.forEach((r) => {
      ci(r, t, n);
    });
  else if (Zg(e)) {
    for (const r in e)
      ci(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ci(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ws(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    vc(i, t, n);
  }
}
function qr(e, t, n, r) {
  if (gt(e)) {
    const i = ws(e, t, n, r);
    return i && qg(i) && i.catch((o) => {
      vc(o, t, n);
    }), i;
  }
  if (pt(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(qr(e[o], t, n, r));
    return i;
  }
}
function vc(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ht;
  if (t) {
    let l = t.parent;
    const c = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let h = 0; h < p.length; h++)
          if (p[h](e, c, m) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      hi(), ws(o, null, 10, [
        e,
        c,
        m
      ]), mi();
      return;
    }
  }
  HS(e, n, i, r, s);
}
function HS(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const En = [];
let zr = -1;
const qo = [];
let ki = null, zo = 0;
const v0 = /* @__PURE__ */ Promise.resolve();
let Dl = null;
function _c(e) {
  const t = Dl || v0;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function GS(e) {
  let t = zr + 1, n = En.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = En[r], o = ss(i);
    o < e || o === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Zd(e) {
  if (!(e.flags & 1)) {
    const t = ss(e), n = En[En.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ss(n) ? En.push(e) : En.splice(GS(t), 0, e), e.flags |= 1, _0();
  }
}
function _0() {
  Dl || (Dl = v0.then(w0));
}
function WS(e) {
  pt(e) ? qo.push(...e) : ki && e.id === -1 ? ki.splice(zo + 1, 0, e) : e.flags & 1 || (qo.push(e), e.flags |= 1), _0();
}
function em(e, t, n = zr + 1) {
  for (; n < En.length; n++) {
    const r = En[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      En.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function S0(e) {
  if (qo.length) {
    const t = [...new Set(qo)].sort(
      (n, r) => ss(n) - ss(r)
    );
    if (qo.length = 0, ki) {
      ki.push(...t);
      return;
    }
    for (ki = t, zo = 0; zo < ki.length; zo++) {
      const n = ki[zo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ki = null, zo = 0;
  }
}
const ss = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function w0(e) {
  try {
    for (zr = 0; zr < En.length; zr++) {
      const t = En[zr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ws(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zr < En.length; zr++) {
      const t = En[zr];
      t && (t.flags &= -2);
    }
    zr = -1, En.length = 0, S0(), Dl = null, (En.length || qo.length) && w0();
  }
}
let er = null, x0 = null;
function Ll(e) {
  const t = er;
  return er = e, x0 = e && e.type.__scopeId || null, t;
}
function k0(e, t = er, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && fm(-1);
    const o = Ll(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ll(o), r._d && fm(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function fi(e, t) {
  if (er === null)
    return e;
  const n = Mc(er), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, c = Ht] = t[i];
    o && (gt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ci(s), r.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function qi(e, t, n, r) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let c = l.dir[r];
    c && (hi(), qr(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), mi());
  }
}
function KS(e, t) {
  if (xn) {
    let n = xn.provides;
    const r = xn.parent && xn.parent.provides;
    r === n && (n = xn.provides = Object.create(r)), n[e] = t;
  }
}
function hl(e, t, n = !1) {
  const r = Gw();
  if (r || Jo) {
    let i = Jo ? Jo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && gt(t) ? t.call(r && r.proxy) : t;
  }
}
const BS = /* @__PURE__ */ Symbol.for("v-scx"), US = () => hl(BS);
function fo(e, t, n) {
  return M0(e, t, n);
}
function M0(e, t, n = Ht) {
  const { immediate: r, deep: i, flush: o, once: s } = n, l = Pn({}, n), c = t && r || !t && o !== "post";
  let m;
  if (cs) {
    if (o === "sync") {
      const S = US();
      m = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!c) {
      const S = () => {
      };
      return S.stop = Br, S.resume = Br, S.pause = Br, S;
    }
  }
  const p = xn;
  l.call = (S, _, w) => qr(S, p, _, w);
  let h = !1;
  o === "post" ? l.scheduler = (S) => {
    zn(S, p && p.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (S, _) => {
    _ ? S() : Zd(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), h && (S.flags |= 2, p && (S.id = p.uid, S.i = p));
  };
  const y = jS(e, t, l);
  return cs && (m ? m.push(y) : c && y()), y;
}
function YS(e, t, n) {
  const r = this.proxy, i = sn(e) ? e.includes(".") ? N0(r, e) : () => r[e] : e.bind(r, r);
  let o;
  gt(t) ? o = t : (o = t.handler, n = t);
  const s = ks(this), l = M0(i, o.bind(r), n);
  return s(), l;
}
function N0(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const XS = /* @__PURE__ */ Symbol("_vte"), qS = (e) => e.__isTeleport, JS = /* @__PURE__ */ Symbol("_leaveCb");
function Qd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Qd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function P0(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function tm(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Rl = /* @__PURE__ */ new WeakMap();
function Ja(e, t, n, r, i = !1) {
  if (pt(e)) {
    e.forEach(
      (w, N) => Ja(
        w,
        t && (pt(t) ? t[N] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Za(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ja(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Mc(r.component) : r.el, s = i ? null : o, { i: l, r: c } = e, m = t && t.r, p = l.refs === Ht ? l.refs = {} : l.refs, h = l.setupState, y = /* @__PURE__ */ Ft(h), S = h === Ht ? Yg : (w) => tm(p, w) ? !1 : Dt(y, w), _ = (w, N) => !(N && tm(p, N));
  if (m != null && m !== c) {
    if (nm(t), sn(m))
      p[m] = null, S(m) && (h[m] = null);
    else if (/* @__PURE__ */ Mn(m)) {
      const w = t;
      _(m, w.k) && (m.value = null), w.k && (p[w.k] = null);
    }
  }
  if (gt(c))
    ws(c, l, 12, [s, p]);
  else {
    const w = sn(c), N = /* @__PURE__ */ Mn(c);
    if (w || N) {
      const I = () => {
        if (e.f) {
          const G = w ? S(c) ? h[c] : p[c] : _() || !e.k ? c.value : p[e.k];
          if (i)
            pt(G) && jd(G, o);
          else if (pt(G))
            G.includes(o) || G.push(o);
          else if (w)
            p[c] = [o], S(c) && (h[c] = p[c]);
          else {
            const R = [o];
            _(c, e.k) && (c.value = R), e.k && (p[e.k] = R);
          }
        } else w ? (p[c] = s, S(c) && (h[c] = s)) : N && (_(c, e.k) && (c.value = s), e.k && (p[e.k] = s));
      };
      if (s) {
        const G = () => {
          I(), Rl.delete(e);
        };
        G.id = -1, Rl.set(e, G), zn(G, n);
      } else
        nm(e), I();
    }
  }
}
function nm(e) {
  const t = Rl.get(e);
  t && (t.flags |= 8, Rl.delete(e));
}
yc().requestIdleCallback;
yc().cancelIdleCallback;
const Za = (e) => !!e.type.__asyncLoader, A0 = (e) => e.type.__isKeepAlive;
function ZS(e, t) {
  C0(e, "a", t);
}
function QS(e, t) {
  C0(e, "da", t);
}
function C0(e, t, n = xn) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Sc(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      A0(i.parent.vnode) && ew(r, t, n, i), i = i.parent;
  }
}
function ew(e, t, n, r) {
  const i = Sc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  I0(() => {
    jd(r[t], i);
  }, n);
}
function Sc(e, t, n = xn, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      hi();
      const l = ks(n), c = qr(t, n, e, s);
      return l(), mi(), c;
    });
    return r ? i.unshift(o) : i.push(o), o;
  }
}
const yi = (e) => (t, n = xn) => {
  (!cs || e === "sp") && Sc(e, (...r) => t(...r), n);
}, tw = yi("bm"), wc = yi("m"), nw = yi(
  "bu"
), rw = yi("u"), xs = yi(
  "bum"
), I0 = yi("um"), iw = yi(
  "sp"
), ow = yi("rtg"), aw = yi("rtc");
function sw(e, t = xn) {
  Sc("ec", e, t);
}
const lw = "components", O0 = /* @__PURE__ */ Symbol.for("v-ndc");
function cw(e) {
  return sn(e) ? uw(lw, e, !1) || e : e || O0;
}
function uw(e, t, n = !0, r = !1) {
  const i = er || xn;
  if (i) {
    const o = i.type;
    {
      const l = Yw(
        o,
        !1
      );
      if (l && (l === t || l === Tn(t) || l === gc(Tn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      rm(i[e] || o[e], t) || // global registration
      rm(i.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function rm(e, t) {
  return e && (e[t] || e[Tn(t)] || e[gc(Tn(t))]);
}
function Rt(e, t, n, r) {
  let i;
  const o = n, s = pt(e);
  if (s || sn(e)) {
    const l = s && /* @__PURE__ */ uo(e);
    let c = !1, m = !1;
    l && (c = !/* @__PURE__ */ hr(e), m = /* @__PURE__ */ gi(e), e = bc(e)), i = new Array(e.length);
    for (let p = 0, h = e.length; p < h; p++)
      i[p] = t(
        c ? m ? oa(Pr(e[p])) : Pr(e[p]) : e[p],
        p,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (jt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, m = l.length; c < m; c++) {
        const p = l[c];
        i[c] = t(e[p], p, c, o);
      }
    }
  else
    i = [];
  return i;
}
const Qu = (e) => e ? Z0(e) ? Mc(e) : Qu(e.parent) : null, Qa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Qu(e.parent),
    $root: (e) => Qu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => T0(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _c.bind(e.proxy)),
    $watch: (e) => YS.bind(e)
  })
), su = (e, t) => e !== Ht && !e.__isScriptSetup && Dt(e, t), dw = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: o, accessCache: s, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const y = s[t];
      if (y !== void 0)
        switch (y) {
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
        if (su(r, t))
          return s[t] = 1, r[t];
        if (i !== Ht && Dt(i, t))
          return s[t] = 2, i[t];
        if (Dt(o, t))
          return s[t] = 3, o[t];
        if (n !== Ht && Dt(n, t))
          return s[t] = 4, n[t];
        ed && (s[t] = 0);
      }
    }
    const m = Qa[t];
    let p, h;
    if (m)
      return t === "$attrs" && wn(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== Ht && Dt(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, Dt(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: o } = e;
    return su(i, t) ? (i[t] = n, !0) : r !== Ht && Dt(r, t) ? (r[t] = n, !0) : Dt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: o, type: s }
  }, l) {
    let c;
    return !!(n[l] || e !== Ht && l[0] !== "$" && Dt(e, l) || su(t, l) || Dt(o, l) || Dt(r, l) || Dt(Qa, l) || Dt(i.config.globalProperties, l) || (c = s.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Dt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function im(e) {
  return pt(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ed = !0;
function fw(e) {
  const t = T0(e), n = e.proxy, r = e.ctx;
  ed = !1, t.beforeCreate && om(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: c,
    inject: m,
    // lifecycle
    created: p,
    beforeMount: h,
    mounted: y,
    beforeUpdate: S,
    updated: _,
    activated: w,
    deactivated: N,
    beforeDestroy: I,
    beforeUnmount: G,
    destroyed: R,
    unmounted: $,
    render: b,
    renderTracked: H,
    renderTriggered: W,
    errorCaptured: ne,
    serverPrefetch: Oe,
    // public API
    expose: D,
    inheritAttrs: ae,
    // assets
    components: se,
    directives: ye,
    filters: Ce
  } = t;
  if (m && pw(m, r, null), s)
    for (const oe in s) {
      const L = s[oe];
      gt(L) && (r[oe] = L.bind(n));
    }
  if (i) {
    const oe = i.call(n, n);
    jt(oe) && (e.data = /* @__PURE__ */ da(oe));
  }
  if (ed = !0, o)
    for (const oe in o) {
      const L = o[oe], F = gt(L) ? L.bind(n, n) : gt(L.get) ? L.get.bind(n, n) : Br, fe = !gt(L) && gt(L.set) ? L.set.bind(n) : Br, Ae = bt({
        get: F,
        set: fe
      });
      Object.defineProperty(r, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (je) => Ae.value = je
      });
    }
  if (l)
    for (const oe in l)
      E0(l[oe], r, n, oe);
  if (c) {
    const oe = gt(c) ? c.call(n) : c;
    Reflect.ownKeys(oe).forEach((L) => {
      KS(L, oe[L]);
    });
  }
  p && om(p, e, "c");
  function be(oe, L) {
    pt(L) ? L.forEach((F) => oe(F.bind(n))) : L && oe(L.bind(n));
  }
  if (be(tw, h), be(wc, y), be(nw, S), be(rw, _), be(ZS, w), be(QS, N), be(sw, ne), be(aw, H), be(ow, W), be(xs, G), be(I0, $), be(iw, Oe), pt(D))
    if (D.length) {
      const oe = e.exposed || (e.exposed = {});
      D.forEach((L) => {
        Object.defineProperty(oe, L, {
          get: () => n[L],
          set: (F) => n[L] = F,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  b && e.render === Br && (e.render = b), ae != null && (e.inheritAttrs = ae), se && (e.components = se), ye && (e.directives = ye), Oe && P0(e);
}
function pw(e, t, n = Br) {
  pt(e) && (e = td(e));
  for (const r in e) {
    const i = e[r];
    let o;
    jt(i) ? "default" in i ? o = hl(
      i.from || r,
      i.default,
      !0
    ) : o = hl(i.from || r) : o = hl(i), /* @__PURE__ */ Mn(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function om(e, t, n) {
  qr(
    pt(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function E0(e, t, n, r) {
  let i = r.includes(".") ? N0(n, r) : () => n[r];
  if (sn(e)) {
    const o = t[e];
    gt(o) && fo(i, o);
  } else if (gt(e))
    fo(i, e.bind(n));
  else if (jt(e))
    if (pt(e))
      e.forEach((o) => E0(o, t, n, r));
    else {
      const o = gt(e.handler) ? e.handler.bind(n) : t[e.handler];
      gt(o) && fo(i, o, e);
    }
}
function T0(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let c;
  return l ? c = l : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(
    (m) => Vl(c, m, s, !0)
  ), Vl(c, t, s)), jt(t) && o.set(t, c), c;
}
function Vl(e, t, n, r = !1) {
  const { mixins: i, extends: o } = t;
  o && Vl(e, o, n, !0), i && i.forEach(
    (s) => Vl(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = hw[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const hw = {
  data: am,
  props: sm,
  emits: sm,
  // objects
  methods: $a,
  computed: $a,
  // lifecycle
  beforeCreate: On,
  created: On,
  beforeMount: On,
  mounted: On,
  beforeUpdate: On,
  updated: On,
  beforeDestroy: On,
  beforeUnmount: On,
  destroyed: On,
  unmounted: On,
  activated: On,
  deactivated: On,
  errorCaptured: On,
  serverPrefetch: On,
  // assets
  components: $a,
  directives: $a,
  // watch
  watch: gw,
  // provide / inject
  provide: am,
  inject: mw
};
function am(e, t) {
  return t ? e ? function() {
    return Pn(
      gt(e) ? e.call(this, this) : e,
      gt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mw(e, t) {
  return $a(td(e), td(t));
}
function td(e) {
  if (pt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function On(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $a(e, t) {
  return e ? Pn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function sm(e, t) {
  return e ? pt(e) && pt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pn(
    /* @__PURE__ */ Object.create(null),
    im(e),
    im(t ?? {})
  ) : t;
}
function gw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Pn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = On(e[r], t[r]);
  return n;
}
function F0() {
  return {
    app: null,
    config: {
      isNativeTag: Yg,
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
let yw = 0;
function bw(e, t) {
  return function(r, i = null) {
    gt(r) || (r = Pn({}, r)), i != null && !jt(i) && (i = null);
    const o = F0(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const m = o.app = {
      _uid: yw++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: qw,
      get config() {
        return o.config;
      },
      set config(p) {
      },
      use(p, ...h) {
        return s.has(p) || (p && gt(p.install) ? (s.add(p), p.install(m, ...h)) : gt(p) && (s.add(p), p(m, ...h))), m;
      },
      mixin(p) {
        return o.mixins.includes(p) || o.mixins.push(p), m;
      },
      component(p, h) {
        return h ? (o.components[p] = h, m) : o.components[p];
      },
      directive(p, h) {
        return h ? (o.directives[p] = h, m) : o.directives[p];
      },
      mount(p, h, y) {
        if (!c) {
          const S = m._ceVNode || et(r, i);
          return S.appContext = o, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(S, p, y), c = !0, m._container = p, p.__vue_app__ = m, Mc(S.component);
        }
      },
      onUnmount(p) {
        l.push(p);
      },
      unmount() {
        c && (qr(
          l,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(p, h) {
        return o.provides[p] = h, m;
      },
      runWithContext(p) {
        const h = Jo;
        Jo = m;
        try {
          return p();
        } finally {
          Jo = h;
        }
      }
    };
    return m;
  };
}
let Jo = null;
const vw = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Tn(t)}Modifiers`] || e[`${vo(t)}Modifiers`];
function _w(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ht;
  let i = n;
  const o = t.startsWith("update:"), s = o && vw(r, t.slice(7));
  s && (s.trim && (i = n.map((p) => sn(p) ? p.trim() : p)), s.number && (i = n.map(Gd)));
  let l, c = r[l = nu(t)] || // also try camelCase event handler (#2249)
  r[l = nu(Tn(t))];
  !c && o && (c = r[l = nu(vo(t))]), c && qr(
    c,
    e,
    6,
    i
  );
  const m = r[l + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, qr(
      m,
      e,
      6,
      i
    );
  }
}
const Sw = /* @__PURE__ */ new WeakMap();
function D0(e, t, n = !1) {
  const r = n ? Sw : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, l = !1;
  if (!gt(e)) {
    const c = (m) => {
      const p = D0(m, t, !0);
      p && (l = !0, Pn(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !l ? (jt(e) && r.set(e, null), null) : (pt(o) ? o.forEach((c) => s[c] = null) : Pn(s, o), jt(e) && r.set(e, s), s);
}
function xc(e, t) {
  return !e || !pc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Dt(e, t[0].toLowerCase() + t.slice(1)) || Dt(e, vo(t)) || Dt(e, t));
}
function lm(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: c,
    render: m,
    renderCache: p,
    props: h,
    data: y,
    setupState: S,
    ctx: _,
    inheritAttrs: w
  } = e, N = Ll(e);
  let I, G;
  try {
    if (n.shapeFlag & 4) {
      const $ = i || r, b = $;
      I = Hr(
        m.call(
          b,
          $,
          p,
          h,
          S,
          y,
          _
        )
      ), G = l;
    } else {
      const $ = t;
      I = Hr(
        $.length > 1 ? $(
          h,
          { attrs: l, slots: s, emit: c }
        ) : $(
          h,
          null
        )
      ), G = t.props ? l : ww(l);
    }
  } catch ($) {
    es.length = 0, vc($, e, 1), I = et(Pi);
  }
  let R = I;
  if (G && w !== !1) {
    const $ = Object.keys(G), { shapeFlag: b } = R;
    $.length && b & 7 && (o && $.some(hc) && (G = xw(
      G,
      o
    )), R = aa(R, G, !1, !0));
  }
  return n.dirs && (R = aa(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && Qd(R, n.transition), I = R, Ll(N), I;
}
const ww = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || pc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xw = (e, t) => {
  const n = {};
  for (const r in e)
    (!hc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function kw(e, t, n) {
  const { props: r, children: i, component: o } = e, { props: s, children: l, patchFlag: c } = t, m = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? cm(r, s, m) : !!s;
    if (c & 8) {
      const p = t.dynamicProps;
      for (let h = 0; h < p.length; h++) {
        const y = p[h];
        if (L0(s, r, y) && !xc(m, y))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? cm(r, s, m) : !0 : !!s;
  return !1;
}
function cm(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (L0(t, e, o) && !xc(n, o))
      return !0;
  }
  return !1;
}
function L0(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && jt(r) && jt(i) ? !Wd(r, i) : r !== i;
}
function Mw({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const R0 = {}, V0 = () => Object.create(R0), $0 = (e) => Object.getPrototypeOf(e) === R0;
function Nw(e, t, n, r = !1) {
  const i = {}, o = V0();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), z0(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ FS(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Pw(e, t, n, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = /* @__PURE__ */ Ft(i), [c] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let h = 0; h < p.length; h++) {
        let y = p[h];
        if (xc(e.emitsOptions, y))
          continue;
        const S = t[y];
        if (c)
          if (Dt(o, y))
            S !== o[y] && (o[y] = S, m = !0);
          else {
            const _ = Tn(y);
            i[_] = nd(
              c,
              l,
              _,
              S,
              e,
              !1
            );
          }
        else
          S !== o[y] && (o[y] = S, m = !0);
      }
    }
  } else {
    z0(e, t, i, o) && (m = !0);
    let p;
    for (const h in l)
      (!t || // for camelCase
      !Dt(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = vo(h)) === h || !Dt(t, p))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[h] = nd(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete i[h]);
    if (o !== l)
      for (const h in o)
        (!t || !Dt(t, h)) && (delete o[h], m = !0);
  }
  m && li(e.attrs, "set", "");
}
function z0(e, t, n, r) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let c in t) {
      if (Ya(c))
        continue;
      const m = t[c];
      let p;
      i && Dt(i, p = Tn(c)) ? !o || !o.includes(p) ? n[p] = m : (l || (l = {}))[p] = m : xc(e.emitsOptions, c) || (!(c in r) || m !== r[c]) && (r[c] = m, s = !0);
    }
  if (o) {
    const c = /* @__PURE__ */ Ft(n), m = l || Ht;
    for (let p = 0; p < o.length; p++) {
      const h = o[p];
      n[h] = nd(
        i,
        c,
        h,
        m[h],
        e,
        !Dt(m, h)
      );
    }
  }
  return s;
}
function nd(e, t, n, r, i, o) {
  const s = e[n];
  if (s != null) {
    const l = Dt(s, "default");
    if (l && r === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && gt(c)) {
        const { propsDefaults: m } = i;
        if (n in m)
          r = m[n];
        else {
          const p = ks(i);
          r = m[n] = c.call(
            null,
            t
          ), p();
        }
      } else
        r = c;
      i.ce && i.ce._setProp(n, r);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === vo(n)) && (r = !0));
  }
  return r;
}
const Aw = /* @__PURE__ */ new WeakMap();
function j0(e, t, n = !1) {
  const r = n ? Aw : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, l = [];
  let c = !1;
  if (!gt(e)) {
    const p = (h) => {
      c = !0;
      const [y, S] = j0(h, t, !0);
      Pn(s, y), S && l.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!o && !c)
    return jt(e) && r.set(e, Yo), Yo;
  if (pt(o))
    for (let p = 0; p < o.length; p++) {
      const h = Tn(o[p]);
      um(h) && (s[h] = Ht);
    }
  else if (o)
    for (const p in o) {
      const h = Tn(p);
      if (um(h)) {
        const y = o[p], S = s[h] = pt(y) || gt(y) ? { type: y } : Pn({}, y), _ = S.type;
        let w = !1, N = !0;
        if (pt(_))
          for (let I = 0; I < _.length; ++I) {
            const G = _[I], R = gt(G) && G.name;
            if (R === "Boolean") {
              w = !0;
              break;
            } else R === "String" && (N = !1);
          }
        else
          w = gt(_) && _.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = w, S[
          1
          /* shouldCastTrue */
        ] = N, (w || Dt(S, "default")) && l.push(h);
      }
    }
  const m = [s, l];
  return jt(e) && r.set(e, m), m;
}
function um(e) {
  return e[0] !== "$" && !Ya(e);
}
const ef = (e) => e === "_" || e === "_ctx" || e === "$stable", tf = (e) => pt(e) ? e.map(Hr) : [Hr(e)], Cw = (e, t, n) => {
  if (t._n)
    return t;
  const r = k0((...i) => tf(t(...i)), n);
  return r._c = !1, r;
}, H0 = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (ef(i)) continue;
    const o = e[i];
    if (gt(o))
      t[i] = Cw(i, o, r);
    else if (o != null) {
      const s = tf(o);
      t[i] = () => s;
    }
  }
}, G0 = (e, t) => {
  const n = tf(t);
  e.slots.default = () => n;
}, W0 = (e, t, n) => {
  for (const r in t)
    (n || !ef(r)) && (e[r] = t[r]);
}, Iw = (e, t, n) => {
  const r = e.slots = V0();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (W0(r, t, n), n && Qg(r, "_", i, !0)) : H0(t, r);
  } else t && G0(e, t);
}, Ow = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let o = !0, s = Ht;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : W0(i, t, n) : (o = !t.$stable, H0(t, i)), s = t;
  } else t && (G0(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !ef(l) && s[l] == null && delete i[l];
}, zn = Lw;
function Ew(e) {
  return Tw(e);
}
function Tw(e, t) {
  const n = yc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: c,
    setText: m,
    setElementText: p,
    parentNode: h,
    nextSibling: y,
    setScopeId: S = Br,
    insertStaticContent: _
  } = e, w = (A, E, B, ue = null, T = null, X = null, ie = void 0, K = null, q = !!E.dynamicChildren) => {
    if (A === E)
      return;
    A && !Ea(A, E) && (ue = he(A), je(A, T, X, !0), A = null), E.patchFlag === -2 && (q = !1, E.dynamicChildren = null);
    const { type: U, ref: Q, shapeFlag: re } = E;
    switch (U) {
      case kc:
        N(A, E, B, ue);
        break;
      case Pi:
        I(A, E, B, ue);
        break;
      case cu:
        A == null && G(E, B, ue, ie);
        break;
      case ut:
        se(
          A,
          E,
          B,
          ue,
          T,
          X,
          ie,
          K,
          q
        );
        break;
      default:
        re & 1 ? b(
          A,
          E,
          B,
          ue,
          T,
          X,
          ie,
          K,
          q
        ) : re & 6 ? ye(
          A,
          E,
          B,
          ue,
          T,
          X,
          ie,
          K,
          q
        ) : (re & 64 || re & 128) && U.process(
          A,
          E,
          B,
          ue,
          T,
          X,
          ie,
          K,
          q,
          te
        );
    }
    Q != null && T ? Ja(Q, A && A.ref, X, E || A, !E) : Q == null && A && A.ref != null && Ja(A.ref, null, X, A, !0);
  }, N = (A, E, B, ue) => {
    if (A == null)
      r(
        E.el = l(E.children),
        B,
        ue
      );
    else {
      const T = E.el = A.el;
      E.children !== A.children && m(T, E.children);
    }
  }, I = (A, E, B, ue) => {
    A == null ? r(
      E.el = c(E.children || ""),
      B,
      ue
    ) : E.el = A.el;
  }, G = (A, E, B, ue) => {
    [A.el, A.anchor] = _(
      A.children,
      E,
      B,
      ue,
      A.el,
      A.anchor
    );
  }, R = ({ el: A, anchor: E }, B, ue) => {
    let T;
    for (; A && A !== E; )
      T = y(A), r(A, B, ue), A = T;
    r(E, B, ue);
  }, $ = ({ el: A, anchor: E }) => {
    let B;
    for (; A && A !== E; )
      B = y(A), i(A), A = B;
    i(E);
  }, b = (A, E, B, ue, T, X, ie, K, q) => {
    if (E.type === "svg" ? ie = "svg" : E.type === "math" && (ie = "mathml"), A == null)
      H(
        E,
        B,
        ue,
        T,
        X,
        ie,
        K,
        q
      );
    else {
      const U = A.el && A.el._isVueCE ? A.el : null;
      try {
        U && U._beginPatch(), Oe(
          A,
          E,
          T,
          X,
          ie,
          K,
          q
        );
      } finally {
        U && U._endPatch();
      }
    }
  }, H = (A, E, B, ue, T, X, ie, K) => {
    let q, U;
    const { props: Q, shapeFlag: re, transition: _e, dirs: Fe } = A;
    if (q = A.el = s(
      A.type,
      X,
      Q && Q.is,
      Q
    ), re & 8 ? p(q, A.children) : re & 16 && ne(
      A.children,
      q,
      null,
      ue,
      T,
      lu(A, X),
      ie,
      K
    ), Fe && qi(A, null, ue, "created"), W(q, A, A.scopeId, ie, ue), Q) {
      for (const Ge in Q)
        Ge !== "value" && !Ya(Ge) && o(q, Ge, null, Q[Ge], X, ue);
      "value" in Q && o(q, "value", null, Q.value, X), (U = Q.onVnodeBeforeMount) && Rr(U, ue, A);
    }
    Fe && qi(A, null, ue, "beforeMount");
    const Le = Fw(T, _e);
    Le && _e.beforeEnter(q), r(q, E, B), ((U = Q && Q.onVnodeMounted) || Le || Fe) && zn(() => {
      try {
        U && Rr(U, ue, A), Le && _e.enter(q), Fe && qi(A, null, ue, "mounted");
      } finally {
      }
    }, T);
  }, W = (A, E, B, ue, T) => {
    if (B && S(A, B), ue)
      for (let X = 0; X < ue.length; X++)
        S(A, ue[X]);
    if (T) {
      let X = T.subTree;
      if (E === X || Y0(X.type) && (X.ssContent === E || X.ssFallback === E)) {
        const ie = T.vnode;
        W(
          A,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          T.parent
        );
      }
    }
  }, ne = (A, E, B, ue, T, X, ie, K, q = 0) => {
    for (let U = q; U < A.length; U++) {
      const Q = A[U] = K ? ai(A[U]) : Hr(A[U]);
      w(
        null,
        Q,
        E,
        B,
        ue,
        T,
        X,
        ie,
        K
      );
    }
  }, Oe = (A, E, B, ue, T, X, ie) => {
    const K = E.el = A.el;
    let { patchFlag: q, dynamicChildren: U, dirs: Q } = E;
    q |= A.patchFlag & 16;
    const re = A.props || Ht, _e = E.props || Ht;
    let Fe;
    if (B && Ji(B, !1), (Fe = _e.onVnodeBeforeUpdate) && Rr(Fe, B, E, A), Q && qi(E, A, B, "beforeUpdate"), B && Ji(B, !0), (re.innerHTML && _e.innerHTML == null || re.textContent && _e.textContent == null) && p(K, ""), U ? D(
      A.dynamicChildren,
      U,
      K,
      B,
      ue,
      lu(E, T),
      X
    ) : ie || L(
      A,
      E,
      K,
      null,
      B,
      ue,
      lu(E, T),
      X,
      !1
    ), q > 0) {
      if (q & 16)
        ae(K, re, _e, B, T);
      else if (q & 2 && re.class !== _e.class && o(K, "class", null, _e.class, T), q & 4 && o(K, "style", re.style, _e.style, T), q & 8) {
        const Le = E.dynamicProps;
        for (let Ge = 0; Ge < Le.length; Ge++) {
          const Qe = Le[Ge], Re = re[Qe], We = _e[Qe];
          (We !== Re || Qe === "value") && o(K, Qe, Re, We, T, B);
        }
      }
      q & 1 && A.children !== E.children && p(K, E.children);
    } else !ie && U == null && ae(K, re, _e, B, T);
    ((Fe = _e.onVnodeUpdated) || Q) && zn(() => {
      Fe && Rr(Fe, B, E, A), Q && qi(E, A, B, "updated");
    }, ue);
  }, D = (A, E, B, ue, T, X, ie) => {
    for (let K = 0; K < E.length; K++) {
      const q = A[K], U = E[K], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (q.type === ut || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ea(q, U) || // - In the case of a component, it could contain anything.
        q.shapeFlag & 198) ? h(q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      w(
        q,
        U,
        Q,
        null,
        ue,
        T,
        X,
        ie,
        !0
      );
    }
  }, ae = (A, E, B, ue, T) => {
    if (E !== B) {
      if (E !== Ht)
        for (const X in E)
          !Ya(X) && !(X in B) && o(
            A,
            X,
            E[X],
            null,
            T,
            ue
          );
      for (const X in B) {
        if (Ya(X)) continue;
        const ie = B[X], K = E[X];
        ie !== K && X !== "value" && o(A, X, K, ie, T, ue);
      }
      "value" in B && o(A, "value", E.value, B.value, T);
    }
  }, se = (A, E, B, ue, T, X, ie, K, q) => {
    const U = E.el = A ? A.el : l(""), Q = E.anchor = A ? A.anchor : l("");
    let { patchFlag: re, dynamicChildren: _e, slotScopeIds: Fe } = E;
    Fe && (K = K ? K.concat(Fe) : Fe), A == null ? (r(U, B, ue), r(Q, B, ue), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      B,
      Q,
      T,
      X,
      ie,
      K,
      q
    )) : re > 0 && re & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren && A.dynamicChildren.length === _e.length ? (D(
      A.dynamicChildren,
      _e,
      B,
      T,
      X,
      ie,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || T && E === T.subTree) && K0(
      A,
      E,
      !0
      /* shallow */
    )) : L(
      A,
      E,
      B,
      Q,
      T,
      X,
      ie,
      K,
      q
    );
  }, ye = (A, E, B, ue, T, X, ie, K, q) => {
    E.slotScopeIds = K, A == null ? E.shapeFlag & 512 ? T.ctx.activate(
      E,
      B,
      ue,
      ie,
      q
    ) : Ce(
      E,
      B,
      ue,
      T,
      X,
      ie,
      q
    ) : xe(A, E, q);
  }, Ce = (A, E, B, ue, T, X, ie) => {
    const K = A.component = Hw(
      A,
      ue,
      T
    );
    if (A0(A) && (K.ctx.renderer = te), Ww(K, !1, ie), K.asyncDep) {
      if (T && T.registerDep(K, be, ie), !A.el) {
        const q = K.subTree = et(Pi);
        I(null, q, E, B), A.placeholder = q.el;
      }
    } else
      be(
        K,
        A,
        E,
        B,
        T,
        X,
        ie
      );
  }, xe = (A, E, B) => {
    const ue = E.component = A.component;
    if (kw(A, E, B))
      if (ue.asyncDep && !ue.asyncResolved) {
        oe(ue, E, B);
        return;
      } else
        ue.next = E, ue.update();
    else
      E.el = A.el, ue.vnode = E;
  }, be = (A, E, B, ue, T, X, ie) => {
    const K = () => {
      if (A.isMounted) {
        let { next: re, bu: _e, u: Fe, parent: Le, vnode: Ge } = A;
        {
          const M = B0(A);
          if (M) {
            re && (re.el = Ge.el, oe(A, re, ie)), M.asyncDep.then(() => {
              zn(() => {
                A.isUnmounted || U();
              }, T);
            });
            return;
          }
        }
        let Qe = re, Re;
        Ji(A, !1), re ? (re.el = Ge.el, oe(A, re, ie)) : re = Ge, _e && pl(_e), (Re = re.props && re.props.onVnodeBeforeUpdate) && Rr(Re, Le, re, Ge), Ji(A, !0);
        const We = lm(A), lt = A.subTree;
        A.subTree = We, w(
          lt,
          We,
          // parent may have changed if it's in a teleport
          h(lt.el),
          // anchor may have changed if it's in a fragment
          he(lt),
          A,
          T,
          X
        ), re.el = We.el, Qe === null && Mw(A, We.el), Fe && zn(Fe, T), (Re = re.props && re.props.onVnodeUpdated) && zn(
          () => Rr(Re, Le, re, Ge),
          T
        );
      } else {
        let re;
        const { el: _e, props: Fe } = E, { bm: Le, m: Ge, parent: Qe, root: Re, type: We } = A, lt = Za(E);
        Ji(A, !1), Le && pl(Le), !lt && (re = Fe && Fe.onVnodeBeforeMount) && Rr(re, Qe, E), Ji(A, !0);
        {
          Re.ce && Re.ce._hasShadowRoot() && Re.ce._injectChildStyle(
            We,
            A.parent ? A.parent.type : void 0
          );
          const M = A.subTree = lm(A);
          w(
            null,
            M,
            B,
            ue,
            A,
            T,
            X
          ), E.el = M.el;
        }
        if (Ge && zn(Ge, T), !lt && (re = Fe && Fe.onVnodeMounted)) {
          const M = E;
          zn(
            () => Rr(re, Qe, M),
            T
          );
        }
        (E.shapeFlag & 256 || Qe && Za(Qe.vnode) && Qe.vnode.shapeFlag & 256) && A.a && zn(A.a, T), A.isMounted = !0, E = B = ue = null;
      }
    };
    A.scope.on();
    const q = A.effect = new r0(K);
    A.scope.off();
    const U = A.update = q.run.bind(q), Q = A.job = q.runIfDirty.bind(q);
    Q.i = A, Q.id = A.uid, q.scheduler = () => Zd(Q), Ji(A, !0), U();
  }, oe = (A, E, B) => {
    E.component = A;
    const ue = A.vnode.props;
    A.vnode = E, A.next = null, Pw(A, E.props, ue, B), Ow(A, E.children, B), hi(), em(A), mi();
  }, L = (A, E, B, ue, T, X, ie, K, q = !1) => {
    const U = A && A.children, Q = A ? A.shapeFlag : 0, re = E.children, { patchFlag: _e, shapeFlag: Fe } = E;
    if (_e > 0) {
      if (_e & 128) {
        fe(
          U,
          re,
          B,
          ue,
          T,
          X,
          ie,
          K,
          q
        );
        return;
      } else if (_e & 256) {
        F(
          U,
          re,
          B,
          ue,
          T,
          X,
          ie,
          K,
          q
        );
        return;
      }
    }
    Fe & 8 ? (Q & 16 && x(U, T, X), re !== U && p(B, re)) : Q & 16 ? Fe & 16 ? fe(
      U,
      re,
      B,
      ue,
      T,
      X,
      ie,
      K,
      q
    ) : x(U, T, X, !0) : (Q & 8 && p(B, ""), Fe & 16 && ne(
      re,
      B,
      ue,
      T,
      X,
      ie,
      K,
      q
    ));
  }, F = (A, E, B, ue, T, X, ie, K, q) => {
    A = A || Yo, E = E || Yo;
    const U = A.length, Q = E.length, re = Math.min(U, Q);
    let _e;
    for (_e = 0; _e < re; _e++) {
      const Fe = E[_e] = q ? ai(E[_e]) : Hr(E[_e]);
      w(
        A[_e],
        Fe,
        B,
        null,
        T,
        X,
        ie,
        K,
        q
      );
    }
    U > Q ? x(
      A,
      T,
      X,
      !0,
      !1,
      re
    ) : ne(
      E,
      B,
      ue,
      T,
      X,
      ie,
      K,
      q,
      re
    );
  }, fe = (A, E, B, ue, T, X, ie, K, q) => {
    let U = 0;
    const Q = E.length;
    let re = A.length - 1, _e = Q - 1;
    for (; U <= re && U <= _e; ) {
      const Fe = A[U], Le = E[U] = q ? ai(E[U]) : Hr(E[U]);
      if (Ea(Fe, Le))
        w(
          Fe,
          Le,
          B,
          null,
          T,
          X,
          ie,
          K,
          q
        );
      else
        break;
      U++;
    }
    for (; U <= re && U <= _e; ) {
      const Fe = A[re], Le = E[_e] = q ? ai(E[_e]) : Hr(E[_e]);
      if (Ea(Fe, Le))
        w(
          Fe,
          Le,
          B,
          null,
          T,
          X,
          ie,
          K,
          q
        );
      else
        break;
      re--, _e--;
    }
    if (U > re) {
      if (U <= _e) {
        const Fe = _e + 1, Le = Fe < Q ? E[Fe].el : ue;
        for (; U <= _e; )
          w(
            null,
            E[U] = q ? ai(E[U]) : Hr(E[U]),
            B,
            Le,
            T,
            X,
            ie,
            K,
            q
          ), U++;
      }
    } else if (U > _e)
      for (; U <= re; )
        je(A[U], T, X, !0), U++;
    else {
      const Fe = U, Le = U, Ge = /* @__PURE__ */ new Map();
      for (U = Le; U <= _e; U++) {
        const Z = E[U] = q ? ai(E[U]) : Hr(E[U]);
        Z.key != null && Ge.set(Z.key, U);
      }
      let Qe, Re = 0;
      const We = _e - Le + 1;
      let lt = !1, M = 0;
      const Y = new Array(We);
      for (U = 0; U < We; U++) Y[U] = 0;
      for (U = Fe; U <= re; U++) {
        const Z = A[U];
        if (Re >= We) {
          je(Z, T, X, !0);
          continue;
        }
        let C;
        if (Z.key != null)
          C = Ge.get(Z.key);
        else
          for (Qe = Le; Qe <= _e; Qe++)
            if (Y[Qe - Le] === 0 && Ea(Z, E[Qe])) {
              C = Qe;
              break;
            }
        C === void 0 ? je(Z, T, X, !0) : (Y[C - Le] = U + 1, C >= M ? M = C : lt = !0, w(
          Z,
          E[C],
          B,
          null,
          T,
          X,
          ie,
          K,
          q
        ), Re++);
      }
      const d = lt ? Dw(Y) : Yo;
      for (Qe = d.length - 1, U = We - 1; U >= 0; U--) {
        const Z = Le + U, C = E[Z], J = E[Z + 1], Se = Z + 1 < Q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          J.el || U0(J)
        ) : ue;
        Y[U] === 0 ? w(
          null,
          C,
          B,
          Se,
          T,
          X,
          ie,
          K,
          q
        ) : lt && (Qe < 0 || U !== d[Qe] ? Ae(C, B, Se, 2) : Qe--);
      }
    }
  }, Ae = (A, E, B, ue, T = null) => {
    const { el: X, type: ie, transition: K, children: q, shapeFlag: U } = A;
    if (U & 6) {
      Ae(A.component.subTree, E, B, ue);
      return;
    }
    if (U & 128) {
      A.suspense.move(E, B, ue);
      return;
    }
    if (U & 64) {
      ie.move(A, E, B, te);
      return;
    }
    if (ie === ut) {
      r(X, E, B);
      for (let re = 0; re < q.length; re++)
        Ae(q[re], E, B, ue);
      r(A.anchor, E, B);
      return;
    }
    if (ie === cu) {
      R(A, E, B);
      return;
    }
    if (ue !== 2 && U & 1 && K)
      if (ue === 0)
        K.beforeEnter(X), r(X, E, B), zn(() => K.enter(X), T);
      else {
        const { leave: re, delayLeave: _e, afterLeave: Fe } = K, Le = () => {
          A.ctx.isUnmounted ? i(X) : r(X, E, B);
        }, Ge = () => {
          X._isLeaving && X[JS](
            !0
            /* cancelled */
          ), re(X, () => {
            Le(), Fe && Fe();
          });
        };
        _e ? _e(X, Le, Ge) : Ge();
      }
    else
      r(X, E, B);
  }, je = (A, E, B, ue = !1, T = !1) => {
    const {
      type: X,
      props: ie,
      ref: K,
      children: q,
      dynamicChildren: U,
      shapeFlag: Q,
      patchFlag: re,
      dirs: _e,
      cacheIndex: Fe,
      memo: Le
    } = A;
    if (re === -2 && (T = !1), K != null && (hi(), Ja(K, null, B, A, !0), mi()), Fe != null && (E.renderCache[Fe] = void 0), Q & 256) {
      E.ctx.deactivate(A);
      return;
    }
    const Ge = Q & 1 && _e, Qe = !Za(A);
    let Re;
    if (Qe && (Re = ie && ie.onVnodeBeforeUnmount) && Rr(Re, E, A), Q & 6)
      z(A.component, B, ue);
    else {
      if (Q & 128) {
        A.suspense.unmount(B, ue);
        return;
      }
      Ge && qi(A, null, E, "beforeUnmount"), Q & 64 ? A.type.remove(
        A,
        E,
        B,
        te,
        ue
      ) : U && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !U.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== ut || re > 0 && re & 64) ? x(
        U,
        E,
        B,
        !1,
        !0
      ) : (X === ut && re & 384 || !T && Q & 16) && x(q, E, B), ue && Je(A);
    }
    const We = Le != null && Fe == null;
    (Qe && (Re = ie && ie.onVnodeUnmounted) || Ge || We) && zn(() => {
      Re && Rr(Re, E, A), Ge && qi(A, null, E, "unmounted"), We && (A.el = null);
    }, B);
  }, Je = (A) => {
    const { type: E, el: B, anchor: ue, transition: T } = A;
    if (E === ut) {
      le(B, ue);
      return;
    }
    if (E === cu) {
      $(A);
      return;
    }
    const X = () => {
      i(B), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (A.shapeFlag & 1 && T && !T.persisted) {
      const { leave: ie, delayLeave: K } = T, q = () => ie(B, X);
      K ? K(A.el, X, q) : q();
    } else
      X();
  }, le = (A, E) => {
    let B;
    for (; A !== E; )
      B = y(A), i(A), A = B;
    i(E);
  }, z = (A, E, B) => {
    const { bum: ue, scope: T, job: X, subTree: ie, um: K, m: q, a: U } = A;
    dm(q), dm(U), ue && pl(ue), T.stop(), X && (X.flags |= 8, je(ie, A, E, B)), K && zn(K, E), zn(() => {
      A.isUnmounted = !0;
    }, E);
  }, x = (A, E, B, ue = !1, T = !1, X = 0) => {
    for (let ie = X; ie < A.length; ie++)
      je(A[ie], E, B, ue, T);
  }, he = (A) => {
    if (A.shapeFlag & 6)
      return he(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const E = y(A.anchor || A.el), B = E && E[XS];
    return B ? y(B) : E;
  };
  let Pe = !1;
  const Te = (A, E, B) => {
    let ue;
    A == null ? E._vnode && (je(E._vnode, null, null, !0), ue = E._vnode.component) : w(
      E._vnode || null,
      A,
      E,
      null,
      null,
      null,
      B
    ), E._vnode = A, Pe || (Pe = !0, em(ue), S0(), Pe = !1);
  }, te = {
    p: w,
    um: je,
    m: Ae,
    r: Je,
    mt: Ce,
    mc: ne,
    pc: L,
    pbc: D,
    n: he,
    o: e
  };
  return {
    render: Te,
    hydrate: void 0,
    createApp: bw(Te)
  };
}
function lu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ji({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function K0(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (pt(r) && pt(i))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = ai(i[o]), l.el = s.el), !n && l.patchFlag !== -2 && K0(s, l)), l.type === kc && (l.patchFlag === -1 && (l = i[o] = ai(l)), l.el = s.el), l.type === Pi && !l.el && (l.el = s.el);
    }
}
function Dw(e) {
  const t = e.slice(), n = [0];
  let r, i, o, s, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const m = e[r];
    if (m !== 0) {
      if (i = n[n.length - 1], e[i] < m) {
        t[r] = i, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        l = o + s >> 1, e[n[l]] < m ? o = l + 1 : s = l;
      m < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function B0(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : B0(t);
}
function dm(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function U0(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? U0(t.subTree) : null;
}
const Y0 = (e) => e.__isSuspense;
function Lw(e, t) {
  t && t.pendingBranch ? pt(e) ? t.effects.push(...e) : t.effects.push(e) : WS(e);
}
const ut = /* @__PURE__ */ Symbol.for("v-fgt"), kc = /* @__PURE__ */ Symbol.for("v-txt"), Pi = /* @__PURE__ */ Symbol.for("v-cmt"), cu = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let tr = null;
function Ie(e = !1) {
  es.push(tr = e ? null : []);
}
function Rw() {
  es.pop(), tr = es[es.length - 1] || null;
}
let ls = 1;
function fm(e, t = !1) {
  ls += e, e < 0 && tr && t && (tr.hasOnce = !0);
}
function X0(e) {
  return e.dynamicChildren = ls > 0 ? tr || Yo : null, Rw(), ls > 0 && tr && tr.push(e), e;
}
function De(e, t, n, r, i, o) {
  return X0(
    me(
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
function gr(e, t, n, r, i) {
  return X0(
    et(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function q0(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ea(e, t) {
  return e.type === t.type && e.key === t.key;
}
const J0 = ({ key: e }) => e ?? null, ml = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? sn(e) || /* @__PURE__ */ Mn(e) || gt(e) ? { i: er, r: e, k: t, f: !!n } : e : null);
function me(e, t = null, n = null, r = 0, i = null, o = e === ut ? 0 : 1, s = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && J0(t),
    ref: t && ml(t),
    scopeId: x0,
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
    ctx: er
  };
  return l ? (nf(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= sn(n) ? 8 : 16), ls > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  tr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && tr.push(c), c;
}
const et = Vw;
function Vw(e, t = null, n = null, r = 0, i = null, o = !1) {
  if ((!e || e === O0) && (e = Pi), q0(e)) {
    const l = aa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && nf(l, n), ls > 0 && !o && tr && (l.shapeFlag & 6 ? tr[tr.indexOf(e)] = l : tr.push(l)), l.patchFlag = -2, l;
  }
  if (Xw(e) && (e = e.__vccOpts), t) {
    t = $w(t);
    let { class: l, style: c } = t;
    l && !sn(l) && (t.class = wt(l)), jt(c) && (/* @__PURE__ */ Jd(c) && !pt(c) && (c = Pn({}, c)), t.style = zt(c));
  }
  const s = sn(e) ? 1 : Y0(e) ? 128 : qS(e) ? 64 : jt(e) ? 4 : gt(e) ? 2 : 0;
  return me(
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    !0
  );
}
function $w(e) {
  return e ? /* @__PURE__ */ Jd(e) || $0(e) ? Pn({}, e) : e : null;
}
function aa(e, t, n = !1, r = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: c } = e, m = t ? si(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && J0(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? pt(o) ? o.concat(ml(t)) : [o, ml(t)] : ml(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ut ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && aa(e.ssContent),
    ssFallback: e.ssFallback && aa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Qd(
    p,
    c.clone(p)
  ), p;
}
function za(e = " ", t = 0) {
  return et(kc, null, e, t);
}
function xt(e = "", t = !1) {
  return t ? (Ie(), gr(Pi, null, e)) : et(Pi, null, e);
}
function Hr(e) {
  return e == null || typeof e == "boolean" ? et(Pi) : pt(e) ? et(
    ut,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : q0(e) ? ai(e) : et(kc, null, String(e));
}
function ai(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : aa(e);
}
function nf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (pt(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), nf(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !$0(t) ? t._ctx = er : i === 3 && er && (er.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else gt(t) ? (t = { default: t, _ctx: er }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [za(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function si(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = wt([t.class, r.class]));
      else if (i === "style")
        t.style = zt([t.style, r.style]);
      else if (pc(i)) {
        const o = t[i], s = r[i];
        s && o !== s && !(pt(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !hc(i) && (t[i] = s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Rr(e, t, n, r = null) {
  qr(e, t, 7, [
    n,
    r
  ]);
}
const zw = F0();
let jw = 0;
function Hw(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || zw, o = {
    uid: jw++,
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
    scope: new hS(
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
    propsOptions: j0(r, i),
    emitsOptions: D0(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ht,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ht,
    data: Ht,
    props: Ht,
    attrs: Ht,
    slots: Ht,
    refs: Ht,
    setupState: Ht,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = _w.bind(null, o), e.ce && e.ce(o), o;
}
let xn = null;
const Gw = () => xn || er;
let $l, rd;
{
  const e = yc(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  $l = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xn = n
  ), rd = t(
    "__VUE_SSR_SETTERS__",
    (n) => cs = n
  );
}
const ks = (e) => {
  const t = xn;
  return $l(e), e.scope.on(), () => {
    e.scope.off(), $l(t);
  };
}, pm = () => {
  xn && xn.scope.off(), $l(null);
};
function Z0(e) {
  return e.vnode.shapeFlag & 4;
}
let cs = !1;
function Ww(e, t = !1, n = !1) {
  t && rd(t);
  const { props: r, children: i } = e.vnode, o = Z0(e);
  Nw(e, r, o, t), Iw(e, i, n || t);
  const s = o ? Kw(e, t) : void 0;
  return t && rd(!1), s;
}
function Kw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dw);
  const { setup: r } = n;
  if (r) {
    hi();
    const i = e.setupContext = r.length > 1 ? Uw(e) : null, o = ks(e), s = ws(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = qg(s);
    if (mi(), o(), (l || e.sp) && !Za(e) && P0(e), l) {
      if (s.then(pm, pm), t)
        return s.then((c) => {
          hm(e, c);
        }).catch((c) => {
          vc(c, e, 0);
        });
      e.asyncDep = s;
    } else
      hm(e, s);
  } else
    Q0(e);
}
function hm(e, t, n) {
  gt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : jt(t) && (e.setupState = b0(t)), Q0(e);
}
function Q0(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Br);
  {
    const i = ks(e);
    hi();
    try {
      fw(e);
    } finally {
      mi(), i();
    }
  }
}
const Bw = {
  get(e, t) {
    return wn(e, "get", ""), e[t];
  }
};
function Uw(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Mc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(b0(DS(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qa)
        return Qa[n](e);
    },
    has(t, n) {
      return n in t || n in Qa;
    }
  })) : e.proxy;
}
function Yw(e, t = !0) {
  return gt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xw(e) {
  return gt(e) && "__vccOpts" in e;
}
const bt = (e, t) => /* @__PURE__ */ $S(e, t, cs), qw = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let id;
const mm = typeof window < "u" && window.trustedTypes;
if (mm)
  try {
    id = /* @__PURE__ */ mm.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ey = id ? (e) => id.createHTML(e) : (e) => e, Jw = "http://www.w3.org/2000/svg", Zw = "http://www.w3.org/1998/Math/MathML", ii = typeof document < "u" ? document : null, gm = ii && /* @__PURE__ */ ii.createElement("template"), Qw = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? ii.createElementNS(Jw, e) : t === "mathml" ? ii.createElementNS(Zw, e) : n ? ii.createElement(e, { is: n }) : ii.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => ii.createTextNode(e),
  createComment: (e) => ii.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ii.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      gm.innerHTML = ey(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = gm.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ex = /* @__PURE__ */ Symbol("_vtc");
function tx(e, t, n) {
  const r = e[ex];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zl = /* @__PURE__ */ Symbol("_vod"), ty = /* @__PURE__ */ Symbol("_vsh"), bo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[zl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ta(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ta(e, !0), r.enter(e)) : r.leave(e, () => {
      Ta(e, !1);
    }) : Ta(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ta(e, t);
  }
};
function Ta(e, t) {
  e.style.display = t ? e[zl] : "none", e[ty] = !t;
}
const nx = /* @__PURE__ */ Symbol(""), rx = /(?:^|;)\s*display\s*:/;
function ix(e, t, n) {
  const r = e.style, i = sn(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (sn(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && gl(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && gl(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), gl(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[nx];
      s && (n += ";" + s), r.cssText = n, o = rx.test(n);
    }
  } else t && e.removeAttribute("style");
  zl in e && (e[zl] = o ? r.display : "", e[ty] && (r.display = "none"));
}
const ym = /\s*!important$/;
function gl(e, t, n) {
  if (pt(n))
    n.forEach((r) => gl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = ox(e, t);
    ym.test(n) ? e.setProperty(
      vo(r),
      n.replace(ym, ""),
      "important"
    ) : e[r] = n;
  }
}
const bm = ["Webkit", "Moz", "ms"], uu = {};
function ox(e, t) {
  const n = uu[t];
  if (n)
    return n;
  let r = Tn(t);
  if (r !== "filter" && r in e)
    return uu[t] = r;
  r = gc(r);
  for (let i = 0; i < bm.length; i++) {
    const o = bm[i] + r;
    if (o in e)
      return uu[t] = o;
  }
  return t;
}
const vm = "http://www.w3.org/1999/xlink";
function _m(e, t, n, r, i, o = fS(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(vm, t.slice(6, t.length)) : e.setAttributeNS(vm, t, n) : n == null || o && !e0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Xr(n) ? String(n) : n
  );
}
function Sm(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ey(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = e0(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function jo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ax(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const wm = /* @__PURE__ */ Symbol("_vei");
function sx(e, t, n, r, i = null) {
  const o = e[wm] || (e[wm] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, c] = lx(t);
    if (r) {
      const m = o[t] = dx(
        r,
        i
      );
      jo(e, l, m, c);
    } else s && (ax(e, l, s, c), o[t] = void 0);
  }
}
const xm = /(?:Once|Passive|Capture)$/;
function lx(e) {
  let t;
  if (xm.test(e)) {
    t = {};
    let r;
    for (; r = e.match(xm); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : vo(e.slice(2)), t];
}
let du = 0;
const cx = /* @__PURE__ */ Promise.resolve(), ux = () => du || (cx.then(() => du = 0), du = Date.now());
function dx(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    qr(
      fx(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ux(), n;
}
function fx(e, t) {
  if (pt(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const km = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, px = (e, t, n, r, i, o) => {
  const s = i === "svg";
  t === "class" ? tx(e, r, s) : t === "style" ? ix(e, n, r) : pc(t) ? hc(t) || sx(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hx(e, t, r, s)) ? (Sm(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _m(e, t, r, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (mx(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !sn(r))) ? Sm(e, Tn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), _m(e, t, r, s));
};
function hx(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && km(t) && gt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return km(t) && sn(n) ? !1 : t in e;
}
function mx(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Tn(t);
  return Array.isArray(n) ? n.some((i) => Tn(i) === r) : Object.keys(n).some((i) => Tn(i) === r);
}
const Mm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return pt(t) ? (n) => pl(t, n) : t;
};
function gx(e) {
  e.target.composing = !0;
}
function Nm(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fu = /* @__PURE__ */ Symbol("_assign");
function Pm(e, t, n) {
  return t && (e = e.trim()), n && (e = Gd(e)), e;
}
const Am = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[fu] = Mm(i);
    const o = r || i.props && i.props.type === "number";
    jo(e, t ? "change" : "input", (s) => {
      s.target.composing || e[fu](Pm(e.value, n, o));
    }), (n || o) && jo(e, "change", () => {
      e.value = Pm(e.value, n, o);
    }), t || (jo(e, "compositionstart", gx), jo(e, "compositionend", Nm), jo(e, "change", Nm));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: o } }, s) {
    if (e[fu] = Mm(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Gd(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const m = e.getRootNode();
    (m instanceof Document || m instanceof ShadowRoot) && m.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
  }
}, yx = ["ctrl", "shift", "alt", "meta"], bx = {
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
  exact: (e, t) => yx.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = bx[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  }));
}, vx = /* @__PURE__ */ Pn({ patchProp: px }, Qw);
let Cm;
function _x() {
  return Cm || (Cm = Ew(vx));
}
const rf = ((...e) => {
  const t = _x().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = wx(r);
    if (!i) return;
    const o = t._component;
    !gt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Sx(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Sx(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wx(e) {
  return sn(e) ? document.querySelector(e) : e;
}
const xx = "PanoramaSuite.Debug.Diagnostics", kx = "PanoramaSuite.Debug.ExportDiagnostics", pu = "pano_suite.diagnostics.v1", Im = "pano_suite.diagnostics.previous.v1", Mx = 300, Nx = 2e5, Px = 100, Ax = 20, Cx = 1e3, Ix = 2, Zs = 1024 * 1024;
function wi(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function Ox() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Ex() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Ox,
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
function Tx(e = {}) {
  const t = { ...Ex(), ...e };
  let n = !1, r = !1, i = null, o = null, s = 0, l = null, c = 0, m = 0;
  const p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), y = { created: 0, released: 0, collected: 0 }, S = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((te) => {
    p.delete(te), y.collected += 1;
  }) : null, w = t.FinalizationRegistry ? new t.FinalizationRegistry((te) => {
    h.delete(te), S.collected += 1;
  }) : null, N = /* @__PURE__ */ new Set(), I = { created: 0, lost: 0, restored: 0, disposed: 0 }, G = [], R = /* @__PURE__ */ new Map();
  let $ = { count: 0, maxMs: 0 }, b = /* @__PURE__ */ new Map(), H = { count: 0, maxMs: 0 };
  const W = [];
  function ne(te, ke, A = void 0) {
    G.push(A === void 0 ? { t: t.clock(), type: te, label: ke } : { t: t.clock(), type: te, label: ke, detail: A }), G.length > Px && G.shift();
  }
  function Oe(te, ke, A, E, B) {
    if (!n || !E || !t.WeakRef) return E;
    const ue = { ref: new t.WeakRef(E), label: B };
    return te.add(ue), ke == null || ke.register(E, ue), A.created += 1, E;
  }
  function D(te, ke = "") {
    return Oe(p, _, y, te, ke);
  }
  function ae(te, ke = "") {
    return Oe(h, w, S, te, ke);
  }
  function se({ label: te = "", width: ke, height: A, offscreen: E = !1 } = {}) {
    const B = globalThis.OffscreenCanvas;
    let ue;
    return E && typeof B < "u" ? ue = new B(ke, A) : (ue = t.document().createElement("canvas"), ke !== void 0 && A !== void 0 && (ue.width = ke, ue.height = A)), D(ue, te);
  }
  function ye(te) {
    te.width = 0, te.height = 0, n && (y.released += 1);
  }
  function Ce(te = t.document(), ke = "") {
    var A;
    return ae(((A = te == null ? void 0 : te.createElement) == null ? void 0 : A.call(te, "video")) || null, ke);
  }
  function xe(te, ke) {
    if (!n || !te) return () => {
    };
    const A = { label: ke, lost: !1, disposed: !1 };
    N.add(A), I.created += 1, ne("webgl-created", ke);
    const E = () => {
      A.disposed || (A.lost = !0, I.lost += 1, ne("webglcontextlost", ke));
    }, B = () => {
      A.disposed || (A.lost = !1, I.restored += 1, ne("webglcontextrestored", ke));
    };
    return te.addEventListener("webglcontextlost", E), te.addEventListener("webglcontextrestored", B), () => {
      A.disposed || (A.disposed = !0, N.delete(A), I.disposed += 1, ne("webgl-disposed", ke));
    };
  }
  function be(te, ke) {
    return R.set(te, ke), () => {
      R.get(te) === ke && R.delete(te);
    };
  }
  function oe() {
    return n ? t.now() : -1;
  }
  function L(te) {
    if (te < 0 || !n) return;
    const ke = t.now() - te;
    $.count += 1, $.maxMs = Math.max($.maxMs, ke);
  }
  function F(te, ke) {
    if (ke < 0 || !n) return;
    const A = t.now() - ke, E = b.get(te) ?? { count: 0, maxMs: 0 };
    E.count += 1, E.maxMs = Math.max(E.maxMs, A), b.set(te, E);
  }
  function fe() {
    let te = 0, ke = 0, A = 0, E = [0, 0];
    const B = {};
    for (const ue of p) {
      const T = ue.ref.deref();
      if (!T) continue;
      te += 1;
      const X = T.width * T.height;
      X > 0 && (ke += 1), A += X, X > E[0] * E[1] && (E = [T.width, T.height]);
      const ie = B[ue.label] ?? (B[ue.label] = [0, 0]);
      ie[0] += 1, ie[1] += X;
    }
    return { ...y, alive: te, sized: ke, pixels: A, mb: wi(A * 4 / Zs, 1), largest: E, byLabel: B };
  }
  function Ae() {
    const te = [];
    let ke = 0, A = 0;
    for (const E of h) {
      const B = E.ref.deref();
      if (!B) continue;
      ke += 1;
      const ue = !B.paused && !B.ended;
      ue && (A += 1), te.length < Ax && te.push({
        label: E.label,
        playing: ue,
        src: !!(B.currentSrc || B.src),
        size: [B.videoWidth || 0, B.videoHeight || 0],
        ready: B.readyState ?? 0,
        connected: !!B.isConnected
      });
    }
    return { ...S, alive: ke, playing: A, list: te };
  }
  function je() {
    const te = t.now(), ke = t.memory(), A = {
      t: t.clock(),
      heap: ke ? { used: wi(ke.usedJSHeapSize / Zs, 1), total: wi(ke.totalJSHeapSize / Zs, 1), limit: wi(ke.jsHeapSizeLimit / Zs, 1) } : null,
      canvas: fe(),
      webgl: { ...I, alive: [...N].filter((E) => !E.lost).length },
      video: Ae(),
      frame: { count: $.count, maxMs: wi($.maxMs), longTasks: H.count, longTaskMaxMs: wi(H.maxMs) },
      renders: Object.fromEntries([...b].map(([E, B]) => [E, { count: B.count, maxMs: wi(B.maxMs) }])),
      sources: Object.fromEntries([...R].map(([E, B]) => [E, B()])),
      costMs: wi(m, 3)
    };
    return $ = { count: 0, maxMs: 0 }, b = /* @__PURE__ */ new Map(), H = { count: 0, maxMs: 0 }, W.push({ record: A, text: JSON.stringify(A) }), W.length > Mx && W.shift(), c += 1, c % Ix === 0 && le(), m = t.now() - te, A;
  }
  function Je(te = Nx) {
    const ke = JSON.stringify({ ...o, events: G }).slice(0, -1);
    let A = te - ke.length - 14, E = W.length;
    for (; E > 0 && A - W[E - 1].text.length - 1 >= 0; )
      E -= 1, A -= W[E].text.length + 1;
    return `${ke},"records":[${W.slice(E).map((B) => B.text).join(",")}]}`;
  }
  function le() {
    if (!o) return;
    const te = t.storage();
    if (te) {
      o.savedAt = t.clock();
      try {
        te.setItem(pu, Je());
      } catch {
      }
    }
  }
  function z() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", le();
  }
  function x() {
    var B;
    if (r) return i;
    r = !0;
    const te = t.storage();
    if (!te) return null;
    let ke = null;
    try {
      if (ke = te.getItem(pu), ke === null) {
        const ue = te.getItem(Im);
        return i = ue === null ? null : JSON.parse(ue), i;
      }
      te.setItem(Im, ke), te.removeItem(pu), i = JSON.parse(ke);
    } catch {
      return i;
    }
    const A = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], E = A.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${A.length} records kept. Its last records:`,
      JSON.stringify(E)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((B = A.at(-1)) == null ? void 0 : B.t) || 0).toISOString()}; ${A.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(E)
    ), i;
  }
  function he(te) {
    const ke = te === !0;
    if (x(), ke !== n) {
      if (n = ke, n) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, c = 0, W.length = 0, l = t.observeLongTasks((A) => {
          for (const E of A)
            H.count += 1, H.maxMs = Math.max(H.maxMs, E.duration);
        }), t.addUnload(z), s = t.setInterval(je, Cx), le();
        return;
      }
      t.clearInterval(s), s = 0, l == null || l(), l = null, t.removeUnload(z), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", le();
    }
  }
  function Pe() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: o ? { ...o, events: [...G], records: W.map((te) => te.record) } : null,
      previous: i
    };
  }
  function Te() {
    const te = t.document(), ke = new Blob([JSON.stringify(Pe(), null, 1)], { type: "application/json" }), A = URL.createObjectURL(ke), E = te.createElement("a");
    E.href = A, E.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, E.click(), setTimeout(() => URL.revokeObjectURL(A), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: se,
    releaseCanvas: ye,
    trackCanvas: D,
    createVideo: Ce,
    trackVideo: ae,
    watchContext: xe,
    addSource: be,
    frameStart: oe,
    frameEnd: L,
    renderEnd: F,
    sample: je,
    serialize: Je,
    recoverPrevious: x,
    setEnabled: he,
    exportData: Pe,
    download: Te
  };
}
const Kn = Tx(), Nn = Kn.createCanvas, od = Kn.releaseCanvas, hu = Kn.trackCanvas, Nc = Kn.createVideo, Om = Kn.trackVideo, Fx = Kn.addSource, Dx = Kn.frameStart, Lx = Kn.frameEnd;
function ny(e, t) {
  const n = Kn.watchContext(e.canvas, t), r = Kn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const l = Kn.frameStart(), c = o(s);
    return Kn.renderEnd(t, l), c;
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
const Rx = {
  id: xx,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Kn.setEnabled(e === !0)
}, Em = {
  id: kx,
  label: "Export Panorama Suite diagnostics",
  function: () => Kn.download()
};
function Ho(e, t) {
  const n = Nn({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Vx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Tm(e, t = 8) {
  var p;
  const n = (p = e == null ? void 0 : e.getContext) == null ? void 0 : p.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || i < 1) return null;
  const o = n.getImageData(0, 0, r, i).data;
  let s = r, l = i, c = -1, m = -1;
  for (let h = 0; h < i; h += 1)
    for (let y = 0; y < r; y += 1)
      o[(h * r + y) * 4 + 3] <= t || (y < s && (s = y), h < l && (l = h), y > c && (c = y), h > m && (m = h));
  return c < s || m < l ? null : {
    minX: s,
    minY: l,
    maxX: c,
    maxY: m,
    width: c - s + 1,
    height: m - l + 1,
    aspect: Number(((c - s + 1) / Math.max(1, m - l + 1)).toFixed(4))
  };
}
function of(e, t) {
  return Nn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Mi(e, t, n) {
  if (!e) return Ho(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function en(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Sn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let mu = null, gu = null, Fm = null, Dm = null, Qt = null, Fa = null;
function $x() {
  if (gu) return gu;
  const e = 6, t = 17, n = Nn({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), gu = n, n;
}
function yu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  mu = Mi(mu, n, r);
  const i = mu;
  en(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Dm !== i.ctx && (Fm = i.ctx.createPattern($x(), "repeat"), Dm = i.ctx), i.ctx.fillStyle = Fm, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function zx(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function jx(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Hx(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Gx(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Yt = /* @__PURE__ */ new Map(), af = 128;
function Wx(e, t, n, r, i, o) {
  const s = Math.max(1, Math.round(e)), l = Math.max(0, Math.min(1, t)), c = `${s}:${l.toFixed(2)}:${n}:${r}:${i}:${o.toFixed(3)}`;
  if (Yt.has(c)) {
    const G = Yt.get(c);
    return Yt.delete(c), Yt.set(c, G), G;
  }
  Yt.size >= af && Yt.delete(Yt.keys().next().value);
  const m = s * 2 + 2, p = s + 1, h = of(m, m), y = h.getContext("2d"), S = l * s, _ = s + 1, w = `rgba(${n},${r},${i},${o})`, N = `rgba(${n},${r},${i},0)`, I = y.createRadialGradient(p, p, S, p, p, _);
  return I.addColorStop(0, w), I.addColorStop(1, N), y.fillStyle = I, y.fillRect(0, 0, m, m), Yt.set(c, h), h;
}
function Kx(e, t, n, r, i, o, s) {
  const { r: l, g: c, b: m, a: p } = r, h = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), S = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), w = Math.max(0, Math.min(1, s ?? 0)), N = `chisel:${h}:${y}:${n.toFixed(2)}:${l}:${c}:${m}:${p.toFixed(3)}:${S.toFixed(2)}:${_.toFixed(2)}:${w.toFixed(2)}`;
  if (Yt.has(N)) {
    const ne = Yt.get(N);
    return Yt.delete(N), Yt.set(N, ne), ne;
  }
  Yt.size >= af && Yt.delete(Yt.keys().next().value);
  const I = of(h, y), G = I.getContext("2d"), R = G.createImageData(h, y), $ = R.data, b = Math.max(0, e - t), H = Math.max(0, Math.min(1, n)), W = 1 + S;
  for (let ne = 0; ne < y; ne++)
    for (let Oe = 0; Oe < h; Oe++) {
      const D = Oe + 0.5 - e, ae = ne + 0.5 - t, se = Math.max(Math.abs(D) - b, 0), Ce = Math.hypot(se, ae) / t;
      if (Ce >= 1) continue;
      const xe = Ce <= H ? 1 : Math.max(0, (1 - Ce) / Math.max(1e-4, 1 - H)), be = 1 - Ce, oe = 1 + S * (1 - be) * (1 - be), L = 1 - _ * be * be, F = oe * L / W;
      let fe = 1;
      if (w > 0) {
        const Je = Math.floor((ae + t) / 1.5), le = Math.floor((D + e) / 8), z = po(Zo(Je * 41 + 500, le * 19 + 300));
        fe = 1 - w * 0.42 * z;
      }
      const Ae = Math.round(255 * Math.min(1, p * xe * F * fe));
      if (Ae <= 0) continue;
      const je = (ne * h + Oe) * 4;
      $[je] = l, $[je + 1] = c, $[je + 2] = m, $[je + 3] = Ae;
    }
  return G.putImageData(R, 0, 0), Yt.set(N, I), I;
}
function Zo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function po(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Bx(e, t, n, r, i, o, s) {
  const l = e + 0.5 - n, c = t + 0.5 - r, m = Math.max(0, n - r), p = Math.max(Math.abs(l) - m, 0), h = Math.hypot(p, c) / r;
  if (h >= 1) return 0;
  const y = po(Zo(e * 17 + 3, t * 13 + 7)), S = h + o * 0.22 * (y - 0.5);
  if (S >= 1) return 0;
  const _ = S <= i ? 1 : Math.max(0, (1 - S) / Math.max(1e-4, 1 - i)), w = Ux(e, t, l, c, n, r), N = o * 0.55;
  if (w < N) return 0;
  const G = 0.45 + 0.55 * ((w - N) / Math.max(1e-4, 1 - N));
  return Math.round(255 * Math.min(1, s * _ * G));
}
function Ux(e, t, n, r, i, o) {
  const s = Math.floor((n + i) / 3), l = Math.floor((r + o) / 2), c = po(Zo(s * 13 + 700, l * 17 + 400)), m = Math.floor((n + i) / 1.5), p = Math.floor((r + o) / 1.5), h = po(Zo(m * 23 + 800, p * 29 + 500)), y = po(Zo(e * 3 + 100, t * 5 + 200));
  return c * 0.55 + h * 0.3 + y * 0.15;
}
function Yx(e, t, n, r, i) {
  const { r: o, g: s, b: l, a: c } = r, m = Math.max(2, Math.ceil(e) * 2), p = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, Math.min(1, i)), y = `crayon:${m}:${p}:${n.toFixed(2)}:${o}:${s}:${l}:${c.toFixed(3)}:${h.toFixed(2)}`;
  if (Yt.has(y)) {
    const G = Yt.get(y);
    return Yt.delete(y), Yt.set(y, G), G;
  }
  Yt.size >= af && Yt.delete(Yt.keys().next().value);
  const S = of(m, p), _ = S.getContext("2d"), w = _.createImageData(m, p), N = w.data, I = Math.max(0, Math.min(1, n));
  for (let G = 0; G < p; G++)
    for (let R = 0; R < m; R++) {
      const $ = Bx(R, G, e, t, I, h, c);
      if ($ <= 0) continue;
      const b = (G * m + R) * 4;
      N[b] = o, N[b + 1] = s, N[b + 2] = l, N[b + 3] = $;
    }
  return _.putImageData(w, 0, 0), Yt.set(y, S), S;
}
function ry(e, t, n) {
  var w, N;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = Hx(t, n), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = Xx(t), l = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), c = Number(((w = t == null ? void 0 : t.angle) == null ? void 0 : w.value) ?? 0), m = Gx(t, i), p = String(((N = t == null ? void 0 : t.targetSpace) == null ? void 0 : N.viewMode) || ""), h = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && p !== "unwrap", y = t == null ? void 0 : t.scatter, S = y ? { radius: Number(y.radius ?? 1.5), count: Math.max(1, Math.round(y.count ?? 6)) } : null;
  let _;
  if (r === "chisel") {
    const I = i * l, G = i, R = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), $ = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), b = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = Kx(I, G, o, s, R, $, b);
  } else if (r === "crayon") {
    const I = i * l, G = i, R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = Yx(I, G, o, s, R);
  } else
    _ = Wx(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: m, desc: n, aspect: l, angle: c, stampKind: r, scatter: S, latitudeCorrection: h };
}
function Xx(e) {
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
function qx(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function Lm(e, t, n, r, i) {
  const o = e.angle, s = e.desc.width;
  function l(m, p) {
    o === 0 ? e.ctx.drawImage(e.stampTex, m - i, p - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(m, p), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  l(t, n);
  const c = o === 0 ? i : i * Math.abs(Math.cos(o)) + r * Math.abs(Math.sin(o));
  t - c < 0 && l(t + s, n), t + c > s && l(t - s, n);
}
function sf(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: m, count: p } = e.scatter, h = m * e.radiusPx * i, y = Zo(t, n);
    for (let S = 0; S < p; S++) {
      const _ = po(y + S * 2) * Math.PI * 2, w = Math.sqrt(po(y + S * 2 + 1)) * h, N = t + Math.cos(_) * w, I = n + Math.sin(_) * w, G = Math.max(0.5, e.radiusPx * i * 0.48), R = (0.5 - I / Math.max(1, e.desc.height)) * Math.PI, $ = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(R)) : 1, b = G * e.aspect * $;
      Lm(e, N, I, G, b);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, l = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, c = o * e.aspect * l;
  Lm(e, t, n, o, c);
}
function Rm(e, t, n) {
  const r = jx(t);
  if (!e || r.length === 0) return;
  const i = n.width, o = n.height, s = ry(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const l = [];
  for (let y = 0; y < r.length; y++) {
    let S = Number(r[y].u || 0) * i;
    const _ = Number(r[y].v || 0) * o;
    y > 0 && Math.abs(S - l[y - 1].x) > i * 0.5 && (S += S < l[y - 1].x ? i : -i), l.push({ x: S, y: _ });
  }
  if (sf(s, l[0].x, l[0].y, 1), l.length === 1) {
    e.restore();
    return;
  }
  let c = l[0], m = l[0], p = l[0], h = 0;
  for (let y = 1; y < l.length; y++) {
    const S = l[y], _ = { x: (m.x + S.x) * 0.5, y: (m.y + S.y) * 0.5 };
    y === 1 ? h = us(s, p.x, p.y, _.x, _.y, h) : h = jl(s, c, p, _, S, h), c = m, m = S, p = _;
  }
  l.length === 2 ? us(s, p.x, p.y, m.x, m.y, h) : jl(s, c, p, m, m, h), e.restore();
}
function yl(e, t, n) {
  var h;
  const r = Array.isArray((h = t == null ? void 0 : t.geometry) == null ? void 0 : h.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, o = n.height, s = qx(t), l = [];
  let c = 1 / 0, m = -1 / 0;
  for (let y = 0; y < r.length; y++) {
    const S = zx(r[y]);
    let _ = Number(S.x || 0) * i;
    y > 0 && Math.abs(_ - l[y - 1].x) > i * 0.5 && (_ += _ < l[y - 1].x ? i : -i), l.push({ x: _, y: Number(S.y || 0) * o }), _ < c && (c = _), _ > m && (m = _);
  }
  function p(y) {
    e.beginPath(), e.moveTo(l[0].x + y, l[0].y);
    for (let S = 1; S < l.length; S++) e.lineTo(l[S].x + y, l[S].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, p(0), c < 0 && p(i), m > i && p(-i), e.restore();
}
function Qs(e, t, n) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    yl(e, t, n);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Rm(e, t, n) : (Fa = Mi(Fa, n.width, n.height), en(Fa), Rm(Fa.ctx, t, n), e.save(), e.globalAlpha = o, e.drawImage(Fa.canvas, 0, 0), e.restore());
}
function Zi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function us(e, t, n, r, i, o) {
  const s = r - t, l = i - n, c = Math.hypot(s, l);
  if (c < 1e-9) return o;
  let m = e.spacingPx - o;
  for (; m <= c; ) {
    const p = m / c;
    sf(e, t + s * p, n + l * p, 1), m += e.spacingPx;
  }
  return c - m + e.spacingPx;
}
function jl(e, t, n, r, i, o) {
  const l = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, c = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, m = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, p = 0, h = l, y = h + c, S = y + m, _ = y - h, w = 16;
  let N = o, I = n.x, G = n.y;
  for (let R = 1; R <= w; R++) {
    const $ = h + _ * R / w, b = ((h - $) * t.x + ($ - p) * n.x) / (h - p), H = ((h - $) * t.y + ($ - p) * n.y) / (h - p), W = ((y - $) * n.x + ($ - h) * r.x) / (y - h), ne = ((y - $) * n.y + ($ - h) * r.y) / (y - h), Oe = ((S - $) * r.x + ($ - y) * i.x) / (S - y), D = ((S - $) * r.y + ($ - y) * i.y) / (S - y), ae = ((y - $) * b + ($ - p) * W) / (y - p), se = ((y - $) * H + ($ - p) * ne) / (y - p), ye = ((S - $) * W + ($ - h) * Oe) / (S - h), Ce = ((S - $) * ne + ($ - h) * D) / (S - h), xe = ((y - $) * ae + ($ - h) * ye) / (y - h), be = ((y - $) * se + ($ - h) * Ce) / (y - h);
    N = us(e, I, G, xe, be, N), I = xe, G = be;
  }
  return N;
}
function Jx(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, l = n * o.height, c = e.activeStroke;
  let m = t * s;
  if (c && Math.abs(m - c.prev.x) > s * 0.5 && (m += m < c.prev.x ? s : -s), !c) {
    const S = ry(i, r, o), _ = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), w = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), N = String((r == null ? void 0 : r.toolKind) || "") === "eraser", I = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", sf(S, m, l, 1), e.activeStroke = {
      pprev: { x: m, y: l },
      prev: { x: m, y: l },
      lastMidX: m,
      lastMidY: l,
      stampTex: S.stampTex,
      radiusPx: S.radiusPx,
      spacingPx: S.spacingPx,
      aspect: S.aspect,
      angle: S.angle,
      stampKind: S.stampKind,
      scatter: S.scatter,
      latitudeCorrection: S.latitudeCorrection,
      strokeOpacity: _,
      velocityWidthFactor: w,
      distSinceStamp: 0,
      isEraser: N,
      layerKind: I,
      pointCount: 1
    }, Sn(e);
    return;
  }
  const p = (c.prev.x + m) * 0.5, h = (c.prev.y + l) * 0.5;
  i.globalCompositeOperation = "source-over";
  const y = {
    ctx: i,
    stampTex: c.stampTex,
    radiusPx: c.radiusPx,
    spacingPx: c.spacingPx,
    desc: o,
    aspect: c.aspect,
    angle: c.angle,
    stampKind: c.stampKind,
    scatter: c.scatter,
    latitudeCorrection: c.latitudeCorrection
  };
  c.pointCount === 1 ? c.distSinceStamp = us(y, c.lastMidX, c.lastMidY, p, h, c.distSinceStamp) : c.distSinceStamp = jl(
    y,
    c.pprev,
    { x: c.lastMidX, y: c.lastMidY },
    { x: p, y: h },
    { x: m, y: l },
    c.distSinceStamp
  ), c.pprev = c.prev, c.prev = { x: m, y: l }, c.lastMidX = p, c.lastMidY = h, c.pointCount++, Sn(e);
}
function lf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), o = Ho(t, n), s = {
    descriptor: r,
    committedMask: Ho(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, l = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Ho(t, n),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, c = Ho(t, n);
  let m = null, p = "", h = null;
  const y = /* @__PURE__ */ new Map();
  let S = null;
  function _(ye) {
    return {
      actionGroupId: ye,
      descriptor: r,
      committedPaint: Ho(t, n),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function w(ye) {
    let Ce = i.get(ye);
    return Ce || (Ce = _(ye), i.set(ye, Ce)), Ce;
  }
  function N(ye) {
    return p === "mask" ? s : m ? w(m) : l;
  }
  function I(ye) {
    var F;
    const Ce = !h || h.length !== ye.length || ye.some((fe, Ae) => fe !== h[Ae]), xe = p === "paint" && ((F = m ? i.get(m) : l) == null ? void 0 : F.activeStroke) || null;
    let be = s.displayDirty || l.displayDirty || Ce;
    for (const fe of ye) {
      const Ae = i.get(fe);
      if (Ae != null && Ae.displayDirty) {
        be = !0;
        break;
      }
    }
    if (xe && (be = !0), !be) return;
    s.displayDirty = !1, l.displayDirty = !1;
    for (const fe of ye) {
      const Ae = i.get(fe);
      Ae && (Ae.displayDirty = !1);
    }
    h = [...ye];
    const oe = c.ctx;
    en(c);
    const L = !!(xe != null && xe.isEraser);
    for (const fe of ye) {
      const Ae = i.get(fe);
      if (!Ae) continue;
      const Je = m === Ae.actionGroupId && p === "paint" ? Ae.activeStroke : null;
      if (L)
        Qt = Mi(Qt, t, n), en(Qt), Qt.ctx.drawImage(Ae.committedPaint.canvas, 0, 0), Zi(Qt.ctx, o.canvas), oe.drawImage(Qt.canvas, 0, 0);
      else if (oe.drawImage(Ae.committedPaint.canvas, 0, 0), Je) {
        const le = Ae.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Je.strokeOpacity ?? 1));
        oe.save(), oe.globalAlpha = le, oe.drawImage(o.canvas, 0, 0), oe.restore();
      }
    }
  }
  function G(ye) {
    var xe, be, oe, L, F;
    for (const fe of i.values())
      en(fe.committedPaint), en(fe.currentStroke), fe.activeStroke = null, Sn(fe);
    en(s.committedMask), en(s.currentStroke), s.activeStroke = null, s.painted = !1, y.clear(), Sn(s), Sn(l), h = null;
    const Ce = [
      ...Array.isArray((be = (xe = ye == null ? void 0 : ye.painting) == null ? void 0 : xe.paint) == null ? void 0 : be.strokes) ? ye.painting.paint.strokes : [],
      ...Array.isArray((L = (oe = ye == null ? void 0 : ye.painting) == null ? void 0 : oe.mask) == null ? void 0 : L.strokes) ? ye.painting.mask.strokes : []
    ];
    for (const fe of Ce) {
      if (((F = fe == null ? void 0 : fe.targetSpace) == null ? void 0 : F.kind) !== "ERP_GLOBAL") continue;
      const Ae = String((fe == null ? void 0 : fe.layerKind) || "paint"), Je = String((fe == null ? void 0 : fe.toolKind) || "pen") === "eraser";
      if (Ae === "mask") {
        const le = s.descriptor;
        Je ? (Qt = Mi(Qt, le.width, le.height), en(Qt), Qs(Qt.ctx, fe, le), Zi(s.committedMask.ctx, Qt.canvas)) : (Qs(s.committedMask.ctx, fe, le), s.painted = !0);
        continue;
      }
      if (Je) {
        Qt = Mi(Qt, r.width, r.height), en(Qt), Qs(Qt.ctx, fe, r);
        for (const le of i.values())
          Zi(le.committedPaint.ctx, Qt.canvas), Sn(le);
      } else {
        const le = String((fe == null ? void 0 : fe.actionGroupId) || "__default__"), z = w(le), x = z.descriptor;
        Qs(z.committedPaint.ctx, fe, x), Sn(z);
      }
    }
    I([...i.keys()]);
  }
  function R(ye, Ce) {
    p = String((ye == null ? void 0 : ye.layerKind) || "");
    const xe = String((ye == null ? void 0 : ye.toolKind) || "") === "eraser";
    if (p === "mask")
      m = null, en(s.currentStroke), s.activeStroke = null, Sn(s);
    else {
      const be = xe ? l : w(String((ye == null ? void 0 : ye.actionGroupId) || "__default__"));
      m = xe ? "" : String((ye == null ? void 0 : ye.actionGroupId) || "__default__"), en(be.currentStroke), be.activeStroke = null, Sn(be);
    }
  }
  function $(ye, Ce) {
    var Ae;
    const xe = String((ye == null ? void 0 : ye.layerKind) || "paint"), be = String((ye == null ? void 0 : ye.toolKind) || "") === "eraser", oe = xe === "mask" ? s : be ? l : w(String((ye == null ? void 0 : ye.actionGroupId) || m || "__default__")), L = oe.activeStroke, F = oe.descriptor;
    if (L && L.pointCount > 1) {
      const je = oe.currentStroke.ctx;
      je.globalCompositeOperation = "source-over";
      const Je = {
        ctx: je,
        stampTex: L.stampTex,
        radiusPx: L.radiusPx,
        spacingPx: L.spacingPx,
        desc: F,
        aspect: L.aspect,
        angle: L.angle,
        stampKind: L.stampKind,
        scatter: L.scatter,
        latitudeCorrection: L.latitudeCorrection
      };
      L.pointCount === 2 ? us(Je, L.lastMidX, L.lastMidY, L.prev.x, L.prev.y, L.distSinceStamp) : jl(Je, L.pprev, { x: L.lastMidX, y: L.lastMidY }, L.prev, L.prev, L.distSinceStamp);
    }
    oe.lassoPreviewActive && (en(oe.currentStroke), yl(oe.currentStroke.ctx, ye, F), oe.lassoPreviewActive = !1);
    const fe = xe === "mask" ? s.committedMask : oe.committedPaint;
    if (be && xe === "paint")
      for (const je of i.values())
        Zi(je.committedPaint.ctx, oe.currentStroke.canvas), Sn(je);
    else if (be)
      Zi(fe.ctx, oe.currentStroke.canvas);
    else {
      xe === "mask" && (s.painted = !0);
      const je = Math.max(0, Math.min(1, (L == null ? void 0 : L.strokeOpacity) ?? 1));
      fe.ctx.save(), fe.ctx.globalAlpha = je, fe.ctx.drawImage(oe.currentStroke.canvas, 0, 0), fe.ctx.restore();
    }
    Vx() && (String((ye == null ? void 0 : ye.toolKind) || ""), String((F == null ? void 0 : F.kind) || ""), Number((F == null ? void 0 : F.width) || 0), Number((F == null ? void 0 : F.height) || 0), String(((Ae = ye == null ? void 0 : ye.targetSpace) == null ? void 0 : Ae.viewMode) || ""), Number((ye == null ? void 0 : ye.aspect) ?? 1), Tm(oe.currentStroke.canvas), Tm(fe.canvas), void 0), en(oe.currentStroke), oe.activeStroke = null, Sn(oe), y.clear(), m = null, p = "", I([...i.keys()]);
  }
  function b(ye) {
    if (p === "mask")
      en(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, Sn(s);
    else if (p === "paint" && !m)
      en(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, Sn(l);
    else if (m) {
      const Ce = i.get(m);
      Ce && (en(Ce.currentStroke), Ce.activeStroke = null, Ce.lassoPreviewActive = !1, Sn(Ce));
    }
    y.clear(), m = null, p = "", I([...i.keys()]);
  }
  function H(ye, Ce) {
    var be;
    if (p = String((ye == null ? void 0 : ye.layerKind) || ""), String(((be = ye == null ? void 0 : ye.geometry) == null ? void 0 : be.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        en(s.currentStroke), yl(s.currentStroke.ctx, ye, s.descriptor), s.lassoPreviewActive = !0, Sn(s);
      else {
        const oe = String((ye == null ? void 0 : ye.toolKind) || "") === "eraser", L = oe ? l : w(String((ye == null ? void 0 : ye.actionGroupId) || m || "__default__"));
        m = oe ? "" : String((ye == null ? void 0 : ye.actionGroupId) || m || "__default__"), en(L.currentStroke), yl(L.currentStroke.ctx, ye, L.descriptor), L.lassoPreviewActive = !0, Sn(L);
      }
      I([...i.keys()]);
    }
  }
  function W(ye) {
    return I(ye ?? [...i.keys()]), {
      displayPaint: c,
      committedMask: s.committedMask,
      descriptor: r
    };
  }
  function ne(ye) {
    return i.get(String(ye)) ?? null;
  }
  function Oe() {
    return [...i.keys()];
  }
  function D(ye) {
    var je;
    const Ce = i.get(String(ye));
    if (!Ce) return null;
    const xe = p === "paint" && m === Ce.actionGroupId, be = p === "paint" && ((je = m ? i.get(m) : l) == null ? void 0 : je.activeStroke) || null, oe = !!(be != null && be.isEraser), L = xe ? Ce.activeStroke : null;
    if (!oe && !L) return Ce.committedPaint.canvas;
    const F = `${Ce.revision}:${l.revision}:${oe}`, fe = y.get(Ce.actionGroupId);
    if ((fe == null ? void 0 : fe.key) === F) return fe.surface.canvas;
    const Ae = Mi((fe == null ? void 0 : fe.surface) ?? null, t, n);
    return en(Ae), Ae.ctx.drawImage(Ce.committedPaint.canvas, 0, 0), oe ? Zi(Ae.ctx, o.canvas) : (Ae.ctx.save(), Ae.ctx.globalAlpha = Ce.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, L.strokeOpacity ?? 1)), Ae.ctx.drawImage(o.canvas, 0, 0), Ae.ctx.restore()), y.set(Ce.actionGroupId, { key: F, surface: Ae }), Ae.canvas;
  }
  function ae() {
    const ye = p === "mask" ? s.activeStroke : null;
    return !s.painted && (!ye || ye.isEraser) ? null : `${s.revision}:${!!ye}`;
  }
  function se() {
    const ye = ae();
    if (ye === null)
      return S = null, null;
    if ((S == null ? void 0 : S.key) === ye) return S.surface.canvas;
    const Ce = Mi((S == null ? void 0 : S.surface) ?? null, t, n);
    en(Ce);
    const xe = p === "mask" ? s.activeStroke : null;
    return xe != null && xe.isEraser ? (Qt = Mi(Qt, t, n), en(Qt), Qt.ctx.drawImage(s.committedMask.canvas, 0, 0), Zi(Qt.ctx, o.canvas), yu(Ce.ctx, Qt.canvas)) : (yu(Ce.ctx, s.committedMask.canvas), xe && yu(Ce.ctx, o.canvas)), S = { key: ye, surface: Ce }, Ce.canvas;
  }
  return {
    rebuildCommitted: G,
    beginStroke: R,
    appendStrokePoint: Jx,
    updateActiveStroke: H,
    commitActiveStroke: $,
    cancelActiveStroke: b,
    getErpTarget: W,
    ensureTarget: N,
    getGroupTarget: ne,
    getGroupDisplayCanvas: D,
    getMaskDisplayCanvas: se,
    getMaskDisplayRevision: ae,
    getAllGroupIds: Oe
  };
}
function Me(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ut(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function cf(e, t) {
  let n = Ut(t) - Ut(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const ad = 3;
function Da(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Hl(e, t = 0) {
  const n = Da(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Da(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = Da(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Da(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Da(t) || 0);
}
function iy(e) {
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
const Vm = Math.PI / 180, $m = 0.12, Zx = ad, Qx = 35, ek = 140, ja = 100, tk = 20, zm = 0.8;
function nk(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), o = Me(Number(e || ja), 1, 179) * Vm;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / r)) / Vm;
}
function uf(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ja })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), l = typeof e.onDebug == "function" ? e.onDebug : null, c = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function m(G, R = null) {
    l && l(G, R);
  }
  function p(G, R, $ = null, b = performance.now()) {
    return c.drag.active = !0, c.drag.lastX = Number(G || 0), c.drag.lastY = Number(R || 0), c.drag.lastTs = Number(b || performance.now()), c.drag.pointerId = $, c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, c.inertia.lastTs = c.drag.lastTs, c.velHistory = [], m("drag", { phase: "start", x: c.drag.lastX, y: c.drag.lastY, pointerId: $ }), !0;
  }
  function h(G, R, $ = "pano", b = performance.now()) {
    if (!c.drag.active) return !1;
    const H = Number(b || performance.now()), W = Number(G), ne = Number(R), Oe = W - c.drag.lastX, D = ne - c.drag.lastY;
    c.drag.lastX = W, c.drag.lastY = ne, c.drag.lastTs = H;
    const ae = r() || { x: 1, y: 1 }, se = Number(ae.x || 1), ye = Number(ae.y || 1), Ce = { ...t() };
    let xe = 0, be = 0;
    if ($ === "unwrap") {
      const L = i() || { w: 1, h: 1 }, F = Math.max(1, Number(L.w || 1)), fe = Math.max(1, Number(L.h || 1)), Ae = Oe / F, je = D / fe;
      xe = -Ae * 360 * se, be = je * 180 * ye;
    } else {
      const L = o() || { w: 0, h: 0 }, F = Math.max(1, Number(L.w || 0)), fe = Math.max(1, Number(L.h || 0));
      if (F > 1 && fe > 1) {
        const Ae = Me(Number(Ce.fov || ja), 1, 179), je = Me(nk(Ae, F, fe), 0.1, 179);
        xe = -(Oe / F) * Ae * se, be = D / fe * je * ye;
      } else
        xe = -Oe * $m * se, be = D * $m * ye;
    }
    Ce.yaw = Ut(Number(Ce.yaw || 0) + xe), Ce.pitch = Me(Number(Ce.pitch || 0) + be, -89.9, 89.9), n(Ce), c.velHistory.push({ ts: H, yaw: Ce.yaw, pitch: Ce.pitch });
    let oe = 0;
    for (; oe < c.velHistory.length - 1 && c.velHistory[oe].ts < H - 100; ) oe++;
    return oe > 0 && c.velHistory.splice(0, oe), c.inertia.active = !1, c.inertia.lastTs = H, s(), m("drag", { phase: "move", dx: Oe, dy: D, dYaw: xe, dPitch: be }), !0;
  }
  function y(G = performance.now()) {
    if (!c.drag.active) return !1;
    c.drag.active = !1;
    const R = Number(G || performance.now());
    c.drag.lastTs = R;
    const $ = c.velHistory.filter((H) => R - H.ts <= 80);
    if ($.length >= 2) {
      const H = $[0], W = $.at(-1), ne = Math.max(1e-3, (W.ts - H.ts) / 1e3);
      let Oe = W.yaw - H.yaw;
      Oe > 180 && (Oe -= 360), Oe < -180 && (Oe += 360), c.inertia.vx = Oe / ne, c.inertia.vy = (W.pitch - H.pitch) / ne;
    } else
      c.inertia.vx = 0, c.inertia.vy = 0;
    c.velHistory = [];
    const b = Math.hypot(c.inertia.vx, c.inertia.vy);
    return c.inertia.active = b > tk, c.inertia.lastTs = R, m("drag", { phase: "end", speed: b, inertiaActive: c.inertia.active }), !0;
  }
  function S(G = performance.now()) {
    if (!c.inertia.active) return !1;
    const R = Number(G || performance.now()), $ = Math.max(1e-3, (R - (c.inertia.lastTs || R)) / 1e3);
    c.inertia.lastTs = R;
    const b = { ...t() };
    b.yaw = Ut(Number(b.yaw || 0) + c.inertia.vx * $), b.pitch = Me(Number(b.pitch || 0) + c.inertia.vy * $, -89.9, 89.9);
    const H = Math.exp(-5.5 * $);
    return c.inertia.vx *= H, c.inertia.vy *= H, Math.abs(c.inertia.vx) < zm && Math.abs(c.inertia.vy) < zm && (c.inertia.vx = 0, c.inertia.vy = 0, c.inertia.active = !1), n(b), s(), c.inertia.active;
  }
  function _() {
    const G = c.drag.active || c.inertia.active || c.inertia.vx !== 0 || c.inertia.vy !== 0;
    return c.drag.active = !1, c.drag.pointerId = null, c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, c.velHistory = [], G;
  }
  function w(G) {
    const R = Math.sign(Number(G || 0));
    if (!R) return !1;
    const $ = { ...t() }, b = Number($.fov || ja);
    return $.fov = Me(b + R * Zx, Qx, ek), n($), s(), m("wheel", { deltaSign: R, fovBefore: b, fovAfter: $.fov }), !0;
  }
  function N(G, R = 0) {
    return w(Hl(G, R));
  }
  function I() {
    n({ yaw: 0, pitch: 0, fov: ja }), c.inertia.active = !1, c.inertia.vx = 0, c.inertia.vy = 0, s();
  }
  return {
    state: c,
    startDrag: p,
    moveDrag: h,
    endDrag: y,
    stepInertia: S,
    stopMotion: _,
    applyWheel: w,
    applyWheelEvent: N,
    resetView: I
  };
}
const Lt = Math.PI / 180, fn = 180 / Math.PI;
function mr(e, t, n) {
  return { x: e, y: t, z: n };
}
function Gl(e, t) {
  return mr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Wl(e, t) {
  return mr(e.x * t, e.y * t, e.z * t);
}
function bu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function df(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return mr(e.x / t, e.y / t, e.z / t);
}
function Wn(e, t) {
  const n = e * Lt, r = t * Lt, i = Math.cos(r);
  return mr(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function fa(e, t, n = 0) {
  const r = Number(e || 0) * Lt, i = Number(t || 0) * Lt, o = n * Lt, s = Math.cos(r), l = Math.sin(r), c = Math.cos(i), m = Math.sin(i), p = Math.cos(o), h = Math.sin(o);
  return {
    right: mr(
      s * p - l * m * h,
      c * h,
      -l * p - s * m * h
    ),
    up: mr(
      -s * h - l * m * p,
      c * p,
      l * h - s * m * p
    ),
    fwd: mr(l * c, m, s * c)
  };
}
function Kl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function $t(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function rk() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function ik(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const o = $t(r.z_index ?? r.zIndex, t.length);
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
function ok(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function ak(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = $t(e.t, 0), r = $t(e.widthScale, null), i = $t(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = $t(e.u, null), s = $t(e.v, null);
    if (o == null || s == null) return null;
    const l = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: n
    };
    return r != null && (l.widthScale = Math.max(0, r)), i != null && (l.pressureLike = Math.max(0, i)), l;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = $t(e.u, null), s = $t(e.v, null);
    if (o == null || s == null) return null;
    const l = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: s,
      t: n
    };
    return r != null && (l.widthScale = Math.max(0, r)), i != null && (l.pressureLike = Math.max(0, i)), l;
  }
  return null;
}
function el(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const o = ak(i, t);
    if (!o) return null;
    r.push(o);
  }
  return r.length >= n ? r : null;
}
function sk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const c = el(e.points, t, 3);
    return c ? { geometryKind: i, points: c } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const o = el(e.points, t, 1);
  if (!o) return null;
  const s = el(e.rawPoints, t, 1), l = el(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((c) => ({ ...c })),
    processedPoints: l || o.map((c) => ({ ...c }))
  };
}
function lk(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = ok(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = sk(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const o = $t(e.size, null), s = $t(e.opacity, null);
  if (o == null || s == null) return null;
  const l = String(e.id || "").trim(), c = String(e.actionGroupId || "").trim();
  if (!l || !c) return null;
  const m = $t(e.radiusValue, null), p = String(e.radiusModel || "").trim() || null;
  let h = null;
  if (t === "paint") {
    const y = e.color;
    if (!y || typeof y != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, $t(y.r, 0))),
      g: Math.max(0, Math.min(1, $t(y.g, 0))),
      b: Math.max(0, Math.min(1, $t(y.b, 0))),
      a: Math.max(0, Math.min(1, $t(y.a, 1)))
    };
  }
  return {
    id: l,
    actionGroupId: c,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: $t(e.hardness, null),
    flow: $t(e.flow, null),
    spacing: $t(e.spacing, null),
    createdAt: Math.trunc($t(e.createdAt, 0)),
    color: h,
    radiusModel: p,
    radiusValue: m == null ? null : Math.max(0, m),
    geometry: i
  };
}
function jm(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = lk(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function ck(e) {
  if (!e || typeof e != "object") return null;
  const t = $t(e.u0, null), n = $t(e.v0, null), r = $t(e.u1, null), i = $t(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const o = (l) => Math.max(0, Math.min(1, l)), s = { u0: o(t), v0: o(n), u1: o(r), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function uk(e) {
  const t = e || {};
  return {
    du: $t(t.du, 0) ?? 0,
    dv: $t(t.dv, 0) ?? 0,
    rot_deg: $t(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, $t(t.scale, 1) ?? 1)
  };
}
function dk(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = ck(e.bbox);
  return o ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, $t(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: uk(e.transform)
  } : null;
}
function fk(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = dk(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function sa(e) {
  const t = rk();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: ik(e.groups),
    paint: jm(e.paint, "paint"),
    mask: jm(e.mask, "mask"),
    raster_objects: fk(e.raster_objects)
  };
}
const yr = 1, br = 179, sd = 85;
function Pc(e) {
  const t = ((ht(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function oy(e, t) {
  let n = ht(e, 0) - ht(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function ay(e, t, { shiftKey: n = !1 } = {}) {
  let r = ht(e, 0) + ht(t, 0) * fn;
  return n && (r = Math.round(r / 15) * 15), Pc(r);
}
function ht(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Ii(e = {}) {
  const t = Me(ht(e.hFOV_deg || 90, 90), yr, br), n = Me(ht(e.vFOV_deg || 60, 60), yr, br), r = Math.tan(t * Lt * 0.5), i = Math.tan(n * Lt * 0.5);
  return {
    yawDeg: ht(e.yaw_deg, 0),
    pitchDeg: ht(e.pitch_deg, 0),
    rollDeg: ht(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function ho(e, t) {
  const n = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Ii(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function ff(e, t) {
  const n = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ht(t, 1)), o = Math.min(n, r * i);
  return { width: o, height: o / i };
}
function pf(e, t) {
  const n = Math.max(1e-12, ht(t, 1)), r = Math.max(1e-6, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Me(2 * Math.atan(r / (2 * n)) * fn, yr, br), s = Me(2 * Math.atan(i / (2 * n)) * fn, yr, br);
  return { hFOV_deg: o, vFOV_deg: s };
}
function pk(e, t, n) {
  const r = ht(e == null ? void 0 : e.x, 0), i = ht(e == null ? void 0 : e.y, 0), o = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), l = Ii(t), c = Math.max(1e-12, ht(n, 1)), m = 2 * c * l.tanHalfX, p = 2 * c * l.tanHalfY;
  return {
    x: r + (o - m) * 0.5,
    y: i + (s - p) * 0.5,
    w: m,
    h: p,
    focalPx: c
  };
}
function hf(e, t, n = sd) {
  const r = Math.max(1e-12, ht(t, 1)), i = Me(ht(n, sd), 1, 89.999), o = r * Math.tan(i * Lt), s = Math.max(1, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), l = Math.max(1, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(l * 0.5, o)
  };
}
function sy(e, t, n) {
  const r = Math.max(1e-12, ht(t, 1));
  return {
    x: (ht(n == null ? void 0 : n.x, 0) - ht(e == null ? void 0 : e.x, 0)) / r,
    y: -(ht(n == null ? void 0 : n.y, 0) - ht(e == null ? void 0 : e.y, 0)) / r
  };
}
function hk(e, t) {
  const n = Me(ht(e, 90), yr, br), r = Math.max(1e-6, ht(t, 1));
  return Me(
    2 * Math.atan(Math.tan(n * Lt * 0.5) / r) * fn,
    yr,
    br
  );
}
function bl(e, t) {
  const n = Me(ht(e, 60), yr, br), r = Math.max(1e-6, ht(t, 1));
  return Me(
    2 * Math.atan(Math.tan(n * Lt * 0.5) * r) * fn,
    yr,
    br
  );
}
function Hm(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function mk(e, t) {
  const n = Hm(e, 1), r = Hm(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(n * i)), s = Math.max(1, Math.round(r * i)), l = (m, p) => p ? l(p, m % p) : m, c = l(o, s) || 1;
  return `${Math.max(1, Math.round(o / c))}:${Math.max(1, Math.round(s / c))}`;
}
function mo(e) {
  const t = Me(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Lt, n = Me(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Lt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function ao(e) {
  const t = mo(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || mk(t, 1);
}
function mf(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ao(t), t;
}
function ly({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), l = Number.isFinite(s) ? Me(s, yr, br) : Me(Math.min(42, ht(i, 100) * 0.42), 8, 96);
  return mf({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ht(t, 0),
    pitch_deg: Me(ht(n, 0), -89.9, 89.9),
    roll_deg: Pc(r),
    hFOV_deg: l,
    vFOV_deg: l,
    locked: !1
  });
}
function ui(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ao(e);
}
function cy(e, t) {
  const n = Ii(e), r = ht(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * fn, o = 2 * Math.atan(n.tanHalfY * r) * fn;
  return i < yr || i > br || o < yr || o > br ? null : { hFOV_deg: i, vFOV_deg: o };
}
function uy(e, t, n = ad) {
  const r = Math.sign(ht(t, 0)), i = Math.abs(ht(n, ad));
  if (!r || !(i > 0)) return null;
  const o = Ii(e), s = o.hFovDeg + r * i;
  if (s < yr || s > br) return null;
  const l = Math.tan(s * Lt * 0.5);
  return cy(e, l / o.tanHalfX);
}
function dy(e, t) {
  const n = Ii(e), r = fa(n.yawDeg, n.pitchDeg, n.rollDeg), i = ht(t == null ? void 0 : t.x, 0), o = ht(t == null ? void 0 : t.y, 0);
  return df(Gl(Gl(r.fwd, Wl(r.right, i)), Wl(r.up, o)));
}
function gk(e) {
  return mr(e.x, e.y, -e.z);
}
function vl(e) {
  return mr(e.x, e.y, -e.z);
}
function Un(e, t, n = 0) {
  const { right: r, up: i, fwd: o } = fa(e, t, n);
  return [
    [r.x, i.x, -o.x],
    [r.y, i.y, -o.y],
    [-r.z, -i.z, o.z]
  ];
}
function fy(e) {
  const t = vl(mr(e[0][0], e[1][0], e[2][0])), n = vl(mr(e[0][1], e[1][1], e[2][1])), r = vl(mr(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), o = Math.atan2(r.y, Math.hypot(r.x, r.z)), s = Math.cos(i), l = Math.sin(i), c = Math.atan2(l * n.z - s * n.x, s * t.x - l * t.z);
  return { yawDeg: i * fn, pitchDeg: o * fn, rollDeg: c * fn };
}
function ds(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * o), 2 * (n * i + r * o)],
    [2 * (n * r + i * o), 1 - 2 * (n * n + i * i), 2 * (r * i - n * o)],
    [2 * (n * i - r * o), 2 * (r * i + n * o), 1 - 2 * (n * n + r * r)]
  ];
}
function _o(e) {
  const [[t, n, r], [i, o, s], [l, c, m]] = e, p = t + o + m;
  if (p > 0) {
    const y = 0.5 / Math.sqrt(p + 1);
    return { x: (c - s) * y, y: (r - l) * y, z: (i - n) * y, w: 0.25 / y };
  }
  if (t > o && t > m) {
    const y = 2 * Math.sqrt(1 + t - o - m);
    return { x: 0.25 * y, y: (n + i) / y, z: (r + l) / y, w: (c - s) / y };
  }
  if (o > m) {
    const y = 2 * Math.sqrt(1 + o - t - m);
    return { x: (n + i) / y, y: 0.25 * y, z: (s + c) / y, w: (r - l) / y };
  }
  const h = 2 * Math.sqrt(1 + m - t - o);
  return { x: (r + l) / h, y: (s + c) / h, z: 0.25 * h, w: (i - n) / h };
}
function tl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const lo = 1e-6, ld = 1e-6, yk = 1e-9;
function fs(e, t, n, r, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * n + i * i * i * r;
}
function bk(e, t) {
  if (e === "auto") return t;
  const [n, r, i, o] = e;
  let s = 0, l = 1;
  for (let c = 0; c < 50; c += 1) {
    const m = 0.5 * (s + l);
    fs(0, n, i, 1, m) < t ? s = m : l = m;
  }
  return fs(0, r, o, 1, 0.5 * (s + l));
}
function la(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ca(e, t, n, r) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = n.map((y) => -y / i), l = r.map((y) => y / o);
  if (s.reduce((y, S, _) => y + S * l[_], 0) < 0) return n.map(() => 0);
  const c = s.map((y, S) => (y * o + l[S] * i) / (i + o)), m = (y) => Math.sqrt(y.reduce((S, _) => S + _ * _, 0)), p = 3 * Math.min(m(s), m(l)), h = m(c);
  return h <= p ? c : c.map((y) => y * p / h);
}
function py(e, t, n, r) {
  const i = n[r], o = n[r + 1], s = t[r + 1] - t[r], l = i.map((p, h) => o[h] - p);
  let c = l;
  la(e, r) && (c = ca(t, r, n[r - 1].map((p, h) => p - i[h]), l).map((p) => p * s));
  let m = l;
  return la(e, r + 1) && (m = ca(t, r + 1, l.map((p) => -p), n[r + 2].map((p, h) => p - o[h])).map((p) => p * s)), [c.map((p) => p / 3), m.map((p) => -p / 3)];
}
function hy(e, t, n, r, i) {
  const [[o], [s]] = py(e, t, n.map((l) => [l]), r);
  return fs(n[r], n[r] + o, n[r + 1] + s, n[r + 1], i);
}
function vk(e, t, n, r) {
  var m, p;
  const i = e.map((h) => h.value);
  let [o, s] = py(e, t, i, n);
  o = ((m = e[n].handles) == null ? void 0 : m.out) ?? o, s = ((p = e[n + 1].handles) == null ? void 0 : p.in) ?? s;
  const l = i[n], c = i[n + 1];
  return [0, 1, 2].map((h) => fs(l[h], l[h] + o[h], c[h] + s[h], c[h], r));
}
function Bl([e, t, n, r], [i, o, s, l]) {
  return [
    r * i + e * l + t * s - n * o,
    r * o - e * s + t * l + n * i,
    r * s + e * o - t * i + n * l,
    r * l - e * i - t * o - n * s
  ];
}
function _k(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function vu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Sk([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * o, t * o, n * o];
}
function cd(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Uo(e, t) {
  return Sk(Bl([-e[0], -e[1], -e[2], e[3]], t));
}
function _u(e, t, n) {
  return Bl(e, cd(Uo(e, t).map((r) => n * r)));
}
function Su(e, t) {
  const n = _k(e, t);
  if (Math.abs(n) > ld) return n < 0;
  const [r, i, o] = Uo(e, t);
  for (const s of [-i, r, o])
    if (Math.abs(s) > ld) return s < 0;
  return !1;
}
function nl(e) {
  const { x: t, y: n, z: r, w: i } = _o(Un(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function ud(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function wk(e, t, n, r) {
  const i = nl(e[n].value);
  let o = nl(e[n + 1].value);
  Su(i, o) && (o = vu(o));
  const s = t[n + 1] - t[n], l = Uo(i, o);
  let c = l;
  if (la(e, n)) {
    let b = nl(e[n - 1].value);
    Su(b, i) && (b = vu(b)), c = ca(t, n, Uo(i, b), l).map((H) => H * s);
  }
  let m = l;
  if (la(e, n + 1)) {
    let b = nl(e[n + 2].value);
    Su(o, b) && (b = vu(b)), m = ca(t, n + 1, Uo(o, i), Uo(o, b)).map((H) => H * s);
  }
  const p = Bl(i, cd(c.map((b, H) => 0.5 * (b - l[H])))), h = Bl(o, cd(l.map((b, H) => 0.5 * (b - m[H])))), [y, S, _, w] = _u(_u(i, o, r), _u(p, h, r), 2 * r * (1 - r)), { yawDeg: N, pitchDeg: I, rollDeg: G } = fy(ds({ x: y, y: S, z: _, w })), R = e[n].value, $ = e[n + 1].value;
  return {
    yaw_deg: ud(N, R.yaw_deg, $.yaw_deg, r),
    pitch_deg: I,
    roll_deg: ud(G, R.roll_deg, $.roll_deg, r)
  };
}
function ps(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function Ul(e) {
  return Math.sqrt(ps(e, e));
}
function Yl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function my(e, t) {
  const n = ps(e, t), r = t.map((s, l) => s - n * e[l]), i = Ul(r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((s) => s * o);
}
function Go(e, t) {
  const n = Ul(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, o) => Math.cos(n) * i + r * t[o]);
}
function rl(e, t, n) {
  return Go(e, my(e, t).map((r) => n * r));
}
function wu(e, t) {
  const n = Yl(e[t].value), r = Yl(e[t + 1].value), i = ps(n, r), o = i < 0 && Ul(r.map((c, m) => c - i * n[m])) <= ld;
  let s;
  if (o) {
    const c = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(c), 0, -Math.PI * Math.sin(c)];
  } else
    s = my(n, r);
  const l = Ul(s);
  return [s, s.map((c, m) => Math.cos(l) * c - l * Math.sin(l) * n[m]), o];
}
function xk(e, t, n, r) {
  const i = Yl(e[n].value), o = Yl(e[n + 1].value), [s, l, c] = wu(e, n);
  let m = s, p = l;
  const h = t[n + 1] - t[n];
  la(e, n) && (m = ca(t, n, wu(e, n - 1)[1].map((R) => -R), m).map((R) => R * h)), la(e, n + 1) && (p = ca(t, n + 1, p.map((R) => -R), wu(e, n + 1)[0]).map((R) => R * h));
  let y, S, _;
  if (c) {
    const R = Math.PI, $ = fs(0, ps(m, s) / R / 3, R - ps(p, l) / R / 3, R, r);
    [y, S, _] = Go(i, s.map((b) => $ * b / R));
  } else {
    const R = rl(Go(i, m.map((H) => H / 3)), Go(o, p.map((H) => -H / 3)), r), $ = rl(Go(i, m.map((H) => r * H / 3)), R, r), b = rl(R, Go(o, p.map((H) => -(1 - r) * H / 3)), r);
    [y, S, _] = rl($, b, r);
  }
  const w = Math.hypot(y, _), N = e[n].value.yaw_deg, I = e[n + 1].value.yaw_deg;
  return { yaw_deg: w <= yk ? N + (I - N) * r : ud(Math.atan2(y, _) * 180 / Math.PI, N, I, r), pitch_deg: Math.atan2(S, w) * 180 / Math.PI };
}
function kk(e, t, n, r) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = hy(e, t, e.map((s) => s.value[o]), n, r);
  return i;
}
function Mk(e, t, n, r) {
  return hy(e, t, e.map((i) => i.value), n, r);
}
const Nk = { position: vk, rotation: wk, direction: xk, size: kk };
function Jt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return tl(e[t].value);
  if (n <= r[0].frame + lo) return tl(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - lo) return tl(i.value);
  let o = 0;
  for (; r[o + 1].frame <= n + lo; ) o += 1;
  const s = r[o];
  if (Math.abs(n - s.frame) <= lo || s.easing === "hold") return tl(s.value);
  const l = r.map((m) => m.frame), c = bk(s.easing, (n - l[o]) / (l[o + 1] - l[o]));
  return (Nk[t] ?? Mk)(r, l, o, c);
}
function dd(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Pk(e) {
  return Math.min(1, Math.max(0, e));
}
function gy(e) {
  return Math.max(1e-6, e);
}
function yy(e, t) {
  return t - (e.start - e.in);
}
function Qo(e, t) {
  return t >= e.start - lo && (e.duration === null || t < e.start + e.duration - lo);
}
function gf(e, t) {
  return {
    position: Jt(e, "position", t),
    ...Jt(e, "rotation", t),
    hFOV_deg: dd(Jt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Xl(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, o = yy(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : gf(r, n),
    scene: {
      active: i.visible && Qo(i.clip, n),
      clip_frame: o,
      position: Jt(i, "position", o),
      ...Jt(i, "rotation", o),
      scale: gy(Jt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => go(s, n))
  };
}
function Ak(e, t) {
  if (e.placement === "world")
    return {
      position: Jt(e, "position", t),
      ...Jt(e, "rotation", t),
      scale: gy(Jt(e, "scale", t))
    };
  const n = Jt(e, "size", t);
  return {
    ...Jt(e, "direction", t),
    roll_deg: Jt(e, "roll", t),
    hFOV_deg: dd(n.hFOV_deg),
    vFOV_deg: dd(n.vFOV_deg)
  };
}
function go(e, t) {
  const n = yy(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Qo(e.clip, t),
    clip_frame: n,
    ...Ak(e, n),
    opacity: Pk(Jt(e, "opacity", n))
  };
}
const Ck = 2, Ik = ["sky", "world"], fd = ["perspective", "erp"], Ok = ["input", "output", "temp"], by = [0.42, 0, 0.58, 1], vy = 1, yf = 1e3, pd = 1e7, bf = pd;
function pn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function rn(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function vf(e, t) {
  const n = rn(e, t);
  return n !== null && n > 0 ? n : t;
}
function Bn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ac(e) {
  const t = rn(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function _l(e) {
  const t = Ac(e);
  return t === null ? null : Bn(t, -pd, pd);
}
function pa(e) {
  const t = vf(e, null);
  return t === null ? null : Bn(t, vy, yf);
}
function _y(e) {
  const t = Ac(e);
  return t !== null && t >= 1 ? Math.min(t, bf) : null;
}
function hs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Sy(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => rn(n, null));
  return t.includes(null) ? null : t;
}
function wy(e) {
  return Sy(e) || [0, 0, 0];
}
function xy(e) {
  const t = pn(e) ? e : {};
  return {
    yaw_deg: rn(t.yaw_deg, 0),
    pitch_deg: Bn(rn(t.pitch_deg, 0), -90, 90),
    roll_deg: rn(t.roll_deg, 0)
  };
}
function Ek(e) {
  return Bn(rn(e, 90), 0.1, 179);
}
function Tk(e) {
  return vf(e, 1);
}
function Fk(e) {
  const t = pn(e) ? e : {};
  return {
    yaw_deg: rn(t.yaw_deg, 0),
    pitch_deg: Bn(rn(t.pitch_deg, 0), -90, 90)
  };
}
function Dk(e) {
  return rn(e, 0);
}
function Lk(e) {
  const t = pn(e) ? e : {};
  return {
    hFOV_deg: Bn(rn(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Bn(rn(t.vFOV_deg, 20), 0.1, 179)
  };
}
function ky(e) {
  return Bn(rn(e, 1), 0, 1);
}
const _f = [["position", wy], ["rotation", xy], ["fov", Ek]], Cc = [["position", wy], ["rotation", xy], ["scale", Tk]], Sf = [["direction", Fk], ["roll", Dk], ["size", Lk], ["opacity", ky]], wf = [...Cc, ["opacity", ky]];
function Rk(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => rn(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...by];
}
function Vk(e) {
  if (!pn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Sy(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function $k(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!pn(i)) continue;
    const o = _l(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: Rk(i.easing) }, l = n ? Vk(i.handles) : null;
    l && (s.handles = l), r.set(o, s);
  }
  return [...r.keys()].sort((i, o) => i - o).map((i) => r.get(i));
}
function xf(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const o = pn(e[r]) ? e[r] : {};
    n[r] = { value: i(o.value), keyframes: $k(o.keyframes, i, r === "position") };
  }
  return n;
}
function My(e) {
  const t = pn(e) ? e : {}, n = _l(t.start), r = _l(t.in), i = _l(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function zk(e) {
  const t = pn(e) ? e : {}, n = Bn(rn(t.x0, 0), 0, 1), r = Bn(rn(t.y0, 0), 0, 1), i = Bn(rn(t.x1, 1), 0, 1), o = Bn(rn(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, o), x1: Math.max(n, i), y1: Math.max(r, o) };
}
function jk(e) {
  if (!pn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Ok.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Hk(e) {
  const t = jk(e.source);
  if (!t) return null;
  const n = Ik.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: My(e.clip),
    visible: hs(e.visible, !0),
    locked: hs(e.locked, !1),
    crop: zk(e.crop),
    ...xf(e, r ? wf : Sf)
  };
  return r || (i.z_index = Ac(e.z_index) ?? 0), i;
}
function Gk(e) {
  const t = [];
  let n = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const s = pn(o) ? Hk(o) : null;
    if (s) {
      if (s.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(s);
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
function Ny(e) {
  if (!pn(e)) return null;
  const t = fd.includes(e.projection) ? e.projection : fd[0];
  return { aspect: vf(e.aspect, 1), projection: t, visible: hs(e.visible, !0), ...xf(e, _f) };
}
function kf() {
  return Ny({});
}
function ql(e) {
  const t = pn(e.timeline) ? e.timeline : {}, n = pn(e.scene) ? e.scene : {};
  return {
    version: Ck,
    timeline: {
      fps: pa(t.fps) ?? 24,
      length: _y(t.length)
    },
    camera: Ny(e.camera),
    scene: { clip: My(n.clip), visible: hs(n.visible, !0), ...xf(n, Cc) },
    stickers: Gk(e.stickers),
    painting: sa(e.painting),
    painting_layer: pn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: hs(e.painting_visible, !0)
  };
}
function Wk(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!pn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function Kk(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!pn(t)) return null;
  const n = Bn(rn(t.hFOV_deg, 90), 1, 179), r = Bn(rn(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Bk(e) {
  const t = pn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(pn) : [];
  return n.sort((r, i) => rn(r.z_index, 0) - rn(i.z_index, 0)), ql({
    camera: Kk(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Wk(r, t),
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
function Ur(e) {
  if (e == null || typeof e == "string" && !e.trim()) return ql({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!pn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Bk(t) : ql(t);
}
const xu = {
  state: { painting_visible: !0 },
  camera: { projection: fd[0], visible: !0 },
  scene: { visible: !0 }
};
function ku(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function hd(e) {
  return JSON.stringify({
    ...ku(e, xu.state),
    camera: e.camera && ku(e.camera, xu.camera),
    scene: ku(e.scene, xu.scene)
  });
}
function Mu(e, t, n, r, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((l) => ({ ...l, frame: n(r + l.frame) - i }))
    };
  return o;
}
function Gm(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function ms(e, t) {
  const n = pa(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (l) => Ac(l * r), { length: o } = e.timeline, s = Gm(e.scene.clip, i);
  return ql({
    timeline: { fps: n, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...Mu(e.camera, _f, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...Mu(e.scene, Cc, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: c, anchor: m, newAnchor: p } = Gm(l.clip, i), h = l.placement === "world" ? wf : Sf;
      return { ...l, clip: c, ...Mu(l, h, i, m, p) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Nu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Py(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Ay(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= lo);
}
function Cy(e, t, n) {
  const r = e.keyframes.findIndex((o) => o.frame > t), i = r > 0 ? Py(e.keyframes[r - 1].easing) : [...by];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function kn(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Nu(i.value, r);
    return;
  }
  const o = Ay(i, n);
  o ? o.value = Nu(o.value, r) : Cy(i, n, Nu(Jt(e, t, n), r));
}
function ha(e) {
  return e.placement === "world" ? wf.map(([t]) => t) : e.placement === "sky" ? Sf.map(([t]) => t) : (e.clip ? Cc : _f).map(([t]) => t);
}
function Uk(e, t) {
  for (const n of ha(e))
    Ay(e[n], t) || Cy(e[n], t, Jt(e, n, t));
}
function Yk(e) {
  const t = ha(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function Pu(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function Xk(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function qk(e, t, n, r) {
  const i = new Set(n);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((c) => i.has(c.frame))) continue;
    const l = Jt(e, o, r);
    s.keyframes = s.keyframes.filter((c) => !i.has(c.frame)), s.keyframes.length || (s.value = l);
  }
}
function Jk(e, t, n, r, i) {
  r = Math.max(r, Math.min(0, i - Math.min(...n)));
  const o = new Set(n);
  for (const s of t) {
    const l = e[s], c = l.keyframes.filter((p) => o.has(p.frame)).map((p) => ({ ...p, frame: p.frame + r })), m = new Set(c.map((p) => p.frame));
    l.keyframes = [
      ...l.keyframes.filter((p) => !o.has(p.frame) && !m.has(p.frame)),
      ...c
    ].sort((p, h) => p.frame - h.frame);
  }
  return r;
}
function Iy(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => n.length > 1 ? s.frame >= r && s.frame < i : s.frame === r));
}
function Zk(e, t, n) {
  const r = Iy(e, t, n);
  if (!r.length) return null;
  const i = r.some((o) => JSON.stringify(o.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function Qk(e, t, n, r) {
  for (const i of Iy(e, t, n)) i.easing = Py(r);
}
function eM(e, t) {
  e.start = Math.max(0, e.start + t);
}
function tM(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function nM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function rM(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Jl(e) {
  return ha(e).map((t) => e[t]);
}
function iM(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? Jl(e.camera).some((r) => r.keyframes.length > 0) : Oy(e, { camera: n });
}
function Zl(e) {
  return Jl(e).some((t) => t.keyframes.length > 0) || !!e.clip && !rM(e.clip);
}
function Oy(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Zl);
}
const oM = 1e5;
function Ey(e, { minimum: t, frames: n = 0, openClip: r = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, n);
  if (i && e.camera)
    for (const s of Jl(e.camera))
      for (const l of s.keyframes) o = Math.max(o, l.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: l } = s;
    o = Math.max(o, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const c of Jl(s))
      for (const m of c.keyframes) o = Math.max(o, l.start - l.in + m.frame + 1);
  }
  return Number.isFinite(o) ? o : oM;
}
function aM(e) {
  return e > 0 ? pa(Math.min(e, yf)) : null;
}
function sM(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : _y(Math.max(1, Math.min(e, bf)));
}
const Au = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], lM = 2e3;
function cM(e, t, n = 56) {
  const r = Au.find((o) => o * t >= n) || Au[Au.length - 1], i = [];
  for (let o = 0; o < e && i.length < lM; o += r) i.push(o);
  return i;
}
function uM(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let il = { text: null, parsed: null };
function Gn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ql(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function dM({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Gn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: sa(null),
    painting_layer: null,
    ui_settings: Ql(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ty(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function fM(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function pM(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function hM(e) {
  return Array.isArray(e) ? e.map((t) => mf(t)) : [];
}
function mM(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Fy(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = dM(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let o = null;
    if (il.text === i ? o = il.parsed : (o = JSON.parse(i), il = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return r;
    const s = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, l = {
      ...r,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: fM(o.assets),
      stickers: pM(o.stickers),
      shots: hM(o.shots),
      painting: sa(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Ql(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...r.active }
    };
    return s && (l.ui_settings = Ql({ ...l.ui_settings, ...s })), l.output_preset = Ty(
      n.outputPreset,
      Number(l.output_preset || r.output_preset)
    ), l.bg_color = String(n.backgroundColor || l.bg_color || r.bg_color), l.coverage = Gn(n.coverage), delete l.editor_history, l;
  } catch {
    return il = { text: i, parsed: null }, r;
  }
}
function gM(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function yM(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function bM(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: o }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || n > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Dy(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s, scene: l = null, camera: c = !1 } = t, m = pa(t.fps);
  let p;
  try {
    p = Ur(e);
  } catch {
    p = Ur(null);
  }
  m && m !== p.timeline.fps && (p = ms(p, m));
  const h = c && p.camera === null;
  if (h && (p = { ...p, camera: kf() }), l) {
    let y = Ur(l);
    m && m !== y.timeline.fps && (y = ms(y, m)), p = { ...y, camera: p.camera, cutout_state: p };
  }
  return {
    ...p,
    ...h ? { default_camera: !0 } : {},
    coverage: Gn(i),
    bg_color: r,
    output_preset: Ty(n),
    ui_settings: Ql(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function vM(e, t) {
  e.cutout_state && (e.cutout_state = ms(e.cutout_state, t));
  const n = ms(e, t), r = new Map(n.stickers.map((o) => [o.id, o]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((o) => [o, r.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const l of ha(o)) o[l].keyframes = s[l].keyframes;
    }
}
function Mf(e, t) {
  const n = go(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const _M = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Wm(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function SM(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[_M[n]].keyframes.length));
}
function Ly(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = Wm(n, ["yaw_deg", "pitch_deg"]), o = Wm(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && kn(e, "direction", r, i), n.rot_deg !== void 0 && kn(e, "roll", r, n.rot_deg), Object.keys(o).length && kn(e, "size", r, o);
}
const Ic = ["position_x", "position_y", "position_z"], ec = "camera";
function Km(e, t) {
  const n = gf(e, t);
  return mf({
    id: ec,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: hk(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function wM(e) {
  return Ur({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Ut(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function xM(e) {
  return e - 360 * Math.round(e / 360);
}
function kM(e, t, n, r) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[o] !== r[o] && (i[o] = r[o] + xM(n[o] - r[o]));
  Object.keys(i).length && kn(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && kn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Lt * 0.5) / Math.tan(n.vFOV_deg * Lt * 0.5)), n.position.some((o, s) => o !== r.position[s]) && kn(e, "position", t, [...n.position]);
}
function MM(e, t) {
  const n = Jt(e, "position", t), r = Jt(e, "rotation", t);
  return {
    ...Object.fromEntries(Ic.map((i, o) => [i, n[o]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Jt(e, "fov", t)
  };
}
function NM(e, t, n, r) {
  const i = Ic.indexOf(n);
  if (i >= 0) {
    const o = Jt(e, "position", t);
    o[i] = r, kn(e, "position", t, o);
  } else n === "hFOV_deg" ? kn(e, "fov", t, r) : kn(e, "rotation", t, { [n]: r });
}
function PM(e, t, n) {
  kn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function AM(e, t) {
  const n = go(e, t);
  return {
    ...Object.fromEntries(Ic.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function CM(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), o = Ic.indexOf(n);
  if (o >= 0) {
    const s = Jt(e, "position", i);
    s[o] = r, kn(e, "position", i, s);
  } else n === "scale" ? kn(e, "scale", i, r) : n === "opacity" ? kn(e, "opacity", i, r / 100) : kn(e, "rotation", i, { [n]: r });
}
function IM(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && kn(e, i, r, n[i]);
}
function OM(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function EM(e, t, n) {
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
function Sl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ry(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Nf(e, t, n, r) {
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
function TM(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ut(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function md(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Vy(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function $y(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function zy(e) {
  e.default_camera && JSON.stringify(Ur({ version: 2, camera: e.camera }).camera) !== JSON.stringify(kf()) && delete e.default_camera;
}
function jy(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = Ur(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(kf()) && (n.camera = null), hd(n);
}
function Hy(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Ur(n);
    if (hd(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return r && o !== i.timeline.fps && hd(ms(i, o)) === t;
  } catch {
    return !1;
  }
}
const Cu = 0.15, FM = 0.01, DM = 1e-3, LM = 0.05, RM = 4, Bm = 250, VM = 16, xr = 1, $M = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function rr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Yr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Oc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function ma(e, t, n = 0) {
  const r = Un(e, t, n), i = Yr(r, 2);
  return { right: Yr(r, 0), up: Yr(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function zM(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function gd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function jM(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : gd(e, "3dof", n);
}
function HM(e) {
  return ma(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function GM(e) {
  return rr(e.position, ma(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Oi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ts(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Pf(e, t) {
  return ts(Oi(t, e.position), ma(e.yaw_deg, e.pitch_deg).forward);
}
function Af(e) {
  return Math.max(e, 1e-6) * LM;
}
function Iu(e, t, n = null, r = xr) {
  if (t) return t;
  const i = Af(r);
  if (n && Pf(e, n) > 0) {
    const o = Oi(n, e.position), s = Math.hypot(...o);
    return s >= i ? n : rr(e.position, o, i / s);
  }
  return rr(e.position, ma(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Um(e, t = xr) {
  return Math.max(e.distance, Af(t));
}
function Ym(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > RM ? !1 : t.time - e.time < Bm || e.cost > VM && t.time - e.wheelTime < Bm;
}
function Cf(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Lt);
  return { tanX: r, tanY: r * n / t };
}
function Xm(e, t, n, r, i = GM(e)) {
  const o = e.roll_deg ?? 0, [s, l] = WM(t, n, o), c = Ut(e.yaw_deg + s / r * 360), m = Me(e.pitch_deg - l / r * 360, -89.9, 89.9), p = Un(e.yaw_deg, e.pitch_deg, o), h = Un(c, m, o), y = Oi(e.position, i), S = [0, 1, 2].map((w) => ts(Yr(p, w), y)), _ = { ...e, yaw_deg: c, pitch_deg: m, position: rr(i, Oc(h, S)) };
  return { ..._, distance: Pf(_, i) };
}
function WM(e, t, n) {
  const r = Math.cos(n * Lt), i = Math.sin(n * Lt);
  return [e * r + t * i, t * r - e * i];
}
function qm(e, t, n, r, i, o = e.distance) {
  const { right: s, up: l } = HM(e), c = 2 * o * Cf(e, r, i).tanY / i;
  return { ...e, position: rr(rr(e.position, s, -t * c), l, n * c), distance: o };
}
function Jm(e, t, n, r = xr) {
  const i = Oi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !n) return e;
  const s = Math.max(r, 1e-6), l = s * FM, c = n > 0 ? Math.min(Math.max(o * Cu, l), o - s * DM) : -Math.max(o * Cu / (1 - Cu), l);
  if (n > 0 && c <= 0) return e;
  const m = { ...e, position: rr(e.position, i, c / o) };
  return { ...m, distance: Math.max(Pf(m, t), Af(r)) };
}
function Zm(e, t, n, r) {
  const { tanX: i, tanY: o } = Cf(e, n, r), s = Math.atan(Math.min(i, o)), l = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: c } = ma(e.yaw_deg, e.pitch_deg);
  return { ...e, position: rr(t.center, c, -l), distance: l };
}
function Ou(e, t, n, r = null) {
  return Gy({
    quaternion: _o(Un(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Cf(e, t, n).tanY) * fn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Gy(e, t, n, r = null) {
  const { center: i, radius: o } = r ?? { center: [0, 0, 0], radius: xr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), l = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, o * 1e-4),
    far: l * 2
  };
}
function gs(e, t, n, r) {
  const { right: i, up: o, forward: s } = Wy(e), l = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], c = l[0] * s[0] + l[1] * s[1] + l[2] * s[2];
  if (!(c > e.near)) return null;
  const m = Math.tan(e.fovY_deg * 0.5 * Lt), p = m * e.aspect, h = l[0] * i[0] + l[1] * i[1] + l[2] * i[2], y = l[0] * o[0] + l[1] * o[1] + l[2] * o[2];
  return { x: n * 0.5 * (1 + h / c / p), y: r * 0.5 * (1 - y / c / m), z: c };
}
function Wy(e) {
  const t = ds(e.quaternion), n = Yr(t, 2);
  return { right: Yr(t, 0), up: Yr(t, 1), forward: n.map((r) => -r) };
}
function Qm(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((o) => o ? n(o) : null) };
}
function KM({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Ky(e, t) {
  if (!e || !t.active) return null;
  const n = YM(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: yd(t),
    itemQuaternion: e.kind === "splat" ? $M : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function BM(e, t, n) {
  const r = t.stickers.findIndex((l) => l.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = n.stickers[r], s = Ky(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function UM(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function YM(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function yd(e) {
  return {
    position: [...e.position],
    quaternion: _o(Un(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function bd(e, t) {
  return rr(e.position, Oc(Un(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function vd(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function _d({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) n.push([r, i, o]);
  return n;
}
function Sd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), n = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), r = t.map((o, s) => (o + n[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - r[0], o[1] - r[1], o[2] - r[2])));
  return { center: r, radius: i };
}
function XM(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(..._d(t).map((o) => bd(e.scene, o)));
  for (const o of n) i.push(...If(o));
  for (const { box: o, value: s } of r) i.push(..._d(o).map((l) => bd(s, l)));
  return i;
}
function qM(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, o = (t.y1 - t.y0) * r;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: _o(Un(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Un(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function If(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => rr(e.position, Oc(e.rotation, [r, i, 0])));
}
function JM(e, t = null) {
  const { sticker: n, value: r, plane: i, item: o } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Sd(If(i)) : o != null && o.box ? Sd(_d(vd(o.kind, o.box)).map((s) => bd(r, s))) : { center: [...r.position], radius: r.scale };
}
const ZM = 2, QM = 0.5, eN = 30;
function By(e, t) {
  const n = Oi(t, e), r = Math.atan2(n[0], -n[2]) * fn, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * fn;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function tN(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * QM : ZM, o = t ? [...t] : rr(e.position, ma(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...Oi(o, e.position)), l = s > 0 ? By(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, c = 2 * Math.max(s, 1e-3) * Math.tan(eN * 0.5 * Lt);
  return { position: o, rotation: l, scale: c };
}
function eg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function nN(e) {
  return [0, 1, 2].map((t) => Yr(e, t));
}
function tg(e, t, n, r) {
  if (e === "translate") return { position: rr(t.position, Oi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * sN(n.scale, r.scale) / n.scale };
  const i = eg(ds(r.quaternion), nN(ds(n.quaternion))), o = eg(i, Un(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: l, rollDeg: c } = fy(o);
  return Math.abs(l) <= rN ? { rotation: { yaw_deg: s + 0, pitch_deg: l, roll_deg: c + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: l, roll_deg: iN(o, t.yaw_deg) } };
}
const rN = 89.9;
function iN(e, t) {
  const n = Yr(e, 0), r = Yr(e, 1), i = Math.cos(t * Lt), o = Math.sin(t * Lt);
  return Math.atan2(o * -r[2] - i * r[0], i * n[0] - o * -n[2]) * fn + 0;
}
const oN = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function aN(e, t, n, r, i) {
  if (!gs(e, t, r, i)) return null;
  const { right: o, up: s, forward: l } = Wy(e), c = Oi(t, e.position), m = ts(c, o), p = ts(c, s), h = ts(c, l), y = Math.tan(e.fovY_deg * 0.5 * Lt), S = y * e.aspect, _ = Math.hypot(m, p, h) * oN[n] * Math.min(1.9 * y, 7) / 4;
  if (!(h > _)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const w = ($) => {
    const b = _ * Math.sqrt($ * $ + h * h - _ * _);
    return [($ * h - b) / (h * h - _ * _), ($ * h + b) / (h * h - _ * _)];
  }, [N, I] = w(m), [G, R] = w(p);
  return {
    minX: r * 0.5 * (1 + N / S),
    maxX: r * 0.5 * (1 + I / S),
    minY: i * 0.5 * (1 - R / y),
    maxY: i * 0.5 * (1 - G / y)
  };
}
function sN(e, [t, n, r]) {
  const i = [t, n, r].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function lN(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function ng(e, t) {
  const n = Un(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Lt) * t, i = r / e.aspect, o = (m, p, h) => rr(e.position, Oc(n, [m, p, h])), s = [o(-r, -i, -t), o(r, -i, -t), o(r, i, -t), o(-r, i, -t)], l = s.map((m) => [e.position, m]);
  s.forEach((m, p) => l.push([m, s[(p + 1) % 4]]));
  const c = [o(-r * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(r * 0.5, i * 1.1, -t)];
  return l.push([c[0], c[1]], [c[1], c[2]], [c[2], c[0]]), l;
}
function cN(e, t, n, r, i, o = 6) {
  return t.some(([s, l]) => {
    const c = gs(e, s, r, i), m = gs(e, l, r, i);
    if (!c || !m) return !1;
    const p = m.x - c.x, h = m.y - c.y, y = Me(((n.x - c.x) * p + (n.y - c.y) * h) / Math.max(p * p + h * h, 1e-12), 0, 1);
    return Math.hypot(c.x + p * y - n.x, c.y + h * y - n.y) <= o;
  });
}
function uN(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function dN(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Jt(r, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(n, i + 1);
  return Array.from({ length: o }, (s, l) => {
    const c = o === 1 ? 0 : l * i / (o - 1);
    return Jt(r, "position", c);
  });
}
function fN(e, t, n, r, i) {
  const o = Math.max(0, e) * n, s = Math.max(0, t) * n, l = Math.min(1, r * n / Math.max(o, 1), i * n / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * l)),
    height: Math.max(1, Math.round(s * l))
  };
}
const Uy = 0.28;
function Yy(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * Lt);
  return {
    quaternion: _o(Un(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * fn,
    aspect: r
  };
}
function ns(e) {
  const t = Ii(e);
  return {
    quaternion: _o(Un(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function rg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: o } = hf(n, r), s = t.x + t.w * 0.5, l = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: l - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * fn,
      vFOV_deg: 2 * Math.atan(o / r) * fn
    }
  };
}
function Xy(e, t, n) {
  const [[r, i, o], [s, l, c], [m, p, h]] = ds(e.quaternion), y = Math.tan(e.fovY_deg * 0.5 * Lt), S = y * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, w = 1e-4) {
      const N = gk(_), I = r * N.x + s * N.y + m * N.z, G = i * N.x + l * N.y + p * N.z, R = -(o * N.x + c * N.y + h * N.z), $ = Math.max(R, w);
      return {
        x: t * 0.5 * (1 + I / $ / S),
        y: n * 0.5 * (1 - G / $ / y),
        z: R
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, w) {
      const N = (_ / t * 2 - 1) * S, I = (1 - w / n * 2) * y;
      return df(vl({
        x: r * N + i * I - o,
        y: s * N + l * I - c,
        z: m * N + p * I - h
      }));
    }
  };
}
function pN(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: o = Xl(e, t) }) {
  const s = [];
  e.stickers.forEach((l, c) => {
    const m = o.stickers[c];
    if (l.placement !== "sky") return;
    const p = l.source.kind === "port" && !l.visible;
    if (!m.active && !p) return;
    const h = n(l);
    if (!h) return;
    const y = Math.tan(m.hFOV_deg * 0.5 * Lt), S = Math.tan(m.vFOV_deg * 0.5 * Lt), { crop: _ } = l;
    s.push({
      kind: "sticker",
      id: l.id,
      media: h.media,
      revision: h.revision,
      source: h.source,
      opacity: p ? Uy : m.opacity,
      zIndex: r(l),
      quaternion: _o(Un(m.yaw_deg, m.pitch_deg, m.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * y,
        x1: (2 * _.x1 - 1) * y,
        y0: (1 - 2 * _.y1) * S,
        y1: (1 - 2 * _.y0) * S
      }
    });
  });
  for (const l of i) s.push({ kind: "erp", ...l });
  return s.sort((l, c) => l.zIndex - c.zIndex);
}
function qy(e, t, n, { media: r, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !s.has(l.id) && s.set(l.id, l);
  return pN(e, t, {
    media: (l) => {
      const c = s.get(l.id);
      return c ? r(c) : null;
    },
    zIndex: (l) => {
      var c;
      return Number(((c = s.get(l.id)) == null ? void 0 : c.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function hN(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function mN(e, t, n, { media: r, evaluated: i = Xl(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !o.has(l.id) && o.set(l.id, l);
  const s = [];
  return e.stickers.forEach((l, c) => {
    const m = i.stickers[c];
    if (l.placement !== "world" || !m.active) return;
    const p = o.get(l.id), h = p ? r(p) : null;
    if (!h) return;
    const { width: y, height: S } = hN(h.media), _ = qM(m, l.crop, y, S);
    _ && s.push({
      id: l.id,
      media: h.media,
      revision: h.revision,
      source: h.source,
      opacity: m.opacity,
      position: _.position,
      quaternion: _.quaternion,
      rotation: _.rotation,
      width: _.width,
      height: _.height,
      crop: l.crop
    });
  }), s;
}
function gN({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((s) => s.$) }) {
  let s = null, l = null, c = !1, m = 0;
  const p = () => {
    l = ny(s.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, h = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(_) {
      return l && !h.lost ? l.render(_) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(_) {
      return l && !h.lost ? l.renderUnwrap(_) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(_, w) {
      return l && !h.lost ? l.resize(_, w) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(_, w) {
      l && !h.lost && l.clear(_, w);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(_) {
      return l ? l.sceneBox(_) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(_, w, N, I, G) {
      return l && !h.lost ? l.pick(_, w, N, I, G) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(_, w, N, I, G) {
      return l && !h.lost ? l.pickSurface(_, w, N, I, G) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(_, w, N, I, G) {
      return l && !h.lost ? l.pickSticker(_, w, N, I, G) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(_, w, N, I, G, R) {
      return l && !h.lost ? l.gizmoPointer(_, w, N, I, G, R) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return m + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", y), e.removeEventListener("webglcontextrestored", S), l == null || l.dispose(), l = null;
    }
  };
  function y(_) {
    _.preventDefault(), !(c || h.lost) && (h.lost = !0, h.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function S() {
    c || !h.lost || queueMicrotask(() => {
      c || !h.lost || (l && (m += l.contentRevision() + 1), l == null || l.dispose(), l = null, h.lost = !1, s && (p(), h.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", y), e.addEventListener("webglcontextrestored", S), o().then((_) => {
    c || (s = _, !h.lost && (p(), h.ready = !0, t()));
  }).catch((_) => {
    console.error("[PanoramaStickers] three.js view is unavailable", _), h.failed = !0, n();
  }), h;
}
const Jy = "3D view unavailable. Check the browser console.";
function tc(e, t, n) {
  return Yy({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function yN(e) {
  let t = null, n = !1, r = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || n || r || (n = !0, e().then((s) => {
      if (n = !1, !i.size) {
        s.dispose();
        return;
      }
      t = s, i.forEach((l) => l.onChange());
    }).catch((s) => {
      n = !1, i.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", s), i.forEach((l) => l.onChange()));
    }));
  }
  return function(l) {
    const c = { onChange: l };
    let m = !1;
    return i.add(c), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(p) {
        return m ? null : (o(), t ? t.render({ ...p, owner: c }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(c);
      },
      dispose() {
        m || (m = !0, i.delete(c), t == null || t.release(c), !i.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Zy = yN(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => ny(e.createThreeView({ createCanvas: () => Nn({ label: "three.node" }) }), "node"))
), Ei = ["erp_image", "bg_erp", "bg_media"], wl = ["source"], Of = ["sticker_image", "sticker"], Qy = ["scene"], bN = {
  background: [...Ei, ...wl],
  "external-sticker": [...Of, ...wl],
  scene: [...Qy, ...wl]
};
function eb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function wd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = eb(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function vN(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function tb(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((l) => String(l == null ? void 0 : l.id) === n[o]);
    if (!s || o === n.length - 1) return { graph: r, entry: s };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((l) => (l == null ? void 0 : l.id) === s.type);
  }
}
function _N(e, t) {
  const { graph: n, entry: r } = tb(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const l = eb(i.get(s == null ? void 0 : s.link));
    l && (o[String((s == null ? void 0 : s.name) || "")] = l);
  }
  return o;
}
const nb = [...Ei, ...Of, ...Qy, ...wl], SN = 256, Wo = /* @__PURE__ */ new Map(), Eu = /* @__PURE__ */ new WeakMap();
let rb = () => null;
function ib(e) {
  return Eu.has(e) || Eu.set(e, JSON.stringify(e)), Eu.get(e);
}
function wN(e) {
  rb = e;
}
function nc(e, t) {
  const n = ib(e);
  Wo.delete(n), Wo.set(n, t), Wo.size > SN && Wo.delete(Wo.keys().next().value);
}
function yn(e, t) {
  var o;
  const n = e ? rb(e) : null;
  if (!n) return !0;
  const r = wd(e);
  let i = Wo.get(ib(n));
  if (i)
    nc(n, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => nb.includes(s == null ? void 0 : s.name)))) return !0;
    nc(n, r), i = r;
  }
  return bN[t].every((s) => i[s] === r[s]);
}
const rc = /* @__PURE__ */ new WeakSet();
async function xd(e, t) {
  if (rc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && rc.add(e), n.ok && r !== void 0 ? r : null;
}
function ob(e, t) {
  var o, s, l, c, m;
  const n = (l = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : l.workflow, { entry: r } = tb(n, t), i = (c = e == null ? void 0 : e.outputs) == null ? void 0 : c[t];
  return !i || !((m = r == null ? void 0 : r.inputs) != null && m.some((p) => nb.includes(p == null ? void 0 : p.name))) ? null : { output: i, inputs: _N(n, t) };
}
const xl = /* @__PURE__ */ new Map();
function xN(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && xl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await xd(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = ob(i, o);
        s && nc(s.output, s.inputs);
      }
    });
}
const kN = 5;
function MN(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${kN}`, r = xd(e, `/jobs?${n}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, xd(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, l) {
      var m, p, h, y;
      const c = String(s.id);
      for (const { id: S } of await r) {
        if (!l()) return null;
        const _ = await o(S);
        if ((m = _ == null ? void 0 : _.outputs) != null && m[c])
          return ((y = (h = (p = _.workflow) == null ? void 0 : p.prompt) == null ? void 0 : h[c]) == null ? void 0 : y.class_type) !== s.comfyClass ? null : ob(_, c);
      }
      return null;
    }
  };
}
function NN(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Lo = null;
async function PN(e, t, n) {
  var l;
  const r = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!o() || rc.has(n) || (l = xl.get(i)) != null && l.has(r) || NN(t)) return null;
  (Lo == null ? void 0 : Lo.workflowId) !== i && (Lo = { workflowId: i, history: MN(n, i) }, queueMicrotask(() => {
    Lo = null;
  }));
  const s = await Lo.history.lastNodeOutput(e, o);
  return o() ? s ? (nc(s.output, s.inputs), t.nodeOutputs[r] = s.output, s.output) : (rc.has(n) || xl.set(i, (xl.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function ig(e, t, n, r = Ei) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((s == null ? void 0 : s.name) || ""));
}
const og = /\.(mp4|webm|mov|m4v|mkv)$/i;
function kl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return og.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return og.test(String((e == null ? void 0 : e.filename) || ""));
}
const Tu = /* @__PURE__ */ new WeakMap();
function AN(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function kd(e) {
  return AN(e) ? (Tu.has(e) || Tu.set(e, Math.random().toString(36).slice(2, 10)), Tu.get(e)) : "run";
}
function ab(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function CN(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const l of s) {
      const c = n(o, l);
      (c == null ? void 0 : c.id) == null || r.has(String(c.id)) || (r.add(String(c.id)), i(c, (Array.isArray(c.inputs) ? c.inputs : []).map((m, p) => p)));
    }
  };
  return i(e, t), r;
}
function Ef(e, t = [], n = null) {
  var i;
  const r = typeof n == "function" ? n : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const l of s)
      if (Array.isArray(l))
        for (const c of l) {
          const m = r(c);
          if (m && (/\.mp4(\?|$)/i.test(m) || String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4"))
            return m;
        }
  }
  return "";
}
function IN({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = Nc(e, "looping-preview");
  if (!r || !t) return null;
  const i = typeof n == "function" ? n : () => {
  };
  let o = !1, s = 0;
  const l = typeof r.requestVideoFrameCallback == "function", c = () => {
    o || !l || s || r.paused || r.ended || (s = r.requestVideoFrameCallback(() => {
      s = 0, !o && (i(), c());
    }));
  }, m = () => {
    o || i();
  }, p = () => i(), h = () => {
    i(), c();
  }, y = () => i();
  let S = !1;
  const _ = () => {
    S = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", m, { once: !0 }), r.addEventListener("loadeddata", m, { once: !0 }), l || r.addEventListener("timeupdate", p), r.addEventListener("play", h), r.addEventListener("pause", y), r.addEventListener("error", _), r.src = t, r.load();
  const w = () => {
    o || S || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, N = () => {
    !o && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var G, R;
      o || (o = !0, s && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(s), s = 0), r.removeEventListener("loadedmetadata", m), r.removeEventListener("loadeddata", m), r.removeEventListener("timeupdate", p), r.removeEventListener("play", h), r.removeEventListener("pause", y), r.removeEventListener("error", _), r.pause(), (G = r.removeAttribute) == null || G.call(r, "src"), (R = r.load) == null || R.call(r));
    },
    failed: () => S,
    play: w,
    pause: N,
    toggle() {
      r.paused ? w() : N();
    },
    get playing() {
      return !o && !r.paused && !r.ended;
    }
  };
}
function Qi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function ON(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function ag(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, l = s ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(s.origin_slot ?? 0)) : null;
      l != null && l.outputNode && (r = l.outputNode);
    } catch {
    }
  return !r && n != null && (r = ON(e == null ? void 0 : e.graph, n)), r;
}
function EN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function TN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function FN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function sb({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (b) => {
    if (!b) return "";
    if (typeof b == "string") return String(b || "").trim();
    if (Array.isArray(b)) {
      if (b.length === 0) return "";
      if (b.length === 1) return i(b[0]);
      const H = String(b[0] || "").trim();
      if (H)
        return Qi(t, {
          filename: H,
          subfolder: String(b[1] || "").trim(),
          type: String(b[2] || "output").trim() || "output"
        });
      for (const W of b) {
        const ne = i(W);
        if (ne) return ne;
      }
      return "";
    }
    return typeof (b == null ? void 0 : b.src) == "string" && b.src ? b.src : typeof (b == null ? void 0 : b.url) == "string" && b.url ? b.url : Qi(t, b);
  }, o = (b) => {
    if (!b || typeof b != "object") return "";
    const H = String(b.type || "").trim().toLowerCase();
    if (H === "dataurl") return String(b.value || "");
    if (H !== "comfy_image") return "";
    const W = String(b.filename || "").trim();
    return W ? Qi(t, {
      filename: W,
      subfolder: String(b.subfolder || ""),
      type: String(b.storage || "input")
    }) : "";
  }, s = (b) => {
    const H = e == null ? void 0 : e.nodeOutputs;
    if (!H || b == null) return null;
    const W = String(b);
    return H instanceof Map ? H.get(b) || H.get(W) || H.get(Number(W)) || null : H[b] || H[W] || null;
  }, l = (b, H) => {
    var ne;
    const W = s(b == null ? void 0 : b.id);
    return Array.isArray((ne = W == null ? void 0 : W.ui) == null ? void 0 : ne[H]) ? W.ui[H] : Array.isArray(W == null ? void 0 : W[H]) ? W[H] : [];
  }, c = (b, H) => {
    const W = s(b == null ? void 0 : b.id);
    return W != null && W.ui && Object.prototype.hasOwnProperty.call(W.ui, H) ? W.ui[H] : W && Object.prototype.hasOwnProperty.call(W, H) ? W[H] : null;
  }, m = (b, H) => {
    const W = c(b, "pano_sticker_input_state_hash"), ne = Array.isArray(W) ? W[0] : W;
    return String(ne ?? "").trim() || FN(H);
  }, p = (b) => {
    const H = [], W = /* @__PURE__ */ new Set();
    for (const ne of b || []) {
      const Oe = i(ne);
      !Oe || W.has(Oe) || (W.add(Oe), H.push(Oe));
    }
    return H;
  }, h = (b, H) => {
    var Oe;
    const W = [];
    Array.isArray(b == null ? void 0 : b.images) && b.images.length && W.push(b.images), Array.isArray((Oe = b == null ? void 0 : b.ui) == null ? void 0 : Oe.images) && b.ui.images.length && W.push(b.ui.images);
    const ne = [];
    for (const D of W)
      H >= 0 && H < D.length && ne.push(D[H]), ne.push(...D);
    return ne;
  }, y = (b, H) => {
    var F;
    const W = String(H || "").trim();
    if (!W) return { src: "", sourceType: "", inputName: "" };
    const Oe = (Array.isArray(b == null ? void 0 : b.inputs) ? b.inputs : []).findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === W);
    if (Oe < 0) return { src: "", sourceType: "", inputName: W };
    const D = b.graph ? b.getInputLink(Oe) : null;
    if ((D == null ? void 0 : D.origin_id) == null) return { src: "", sourceType: "", inputName: W };
    const ae = D.origin_id, se = ag(b, Oe, ae);
    if (!se) return { src: "", sourceType: "", inputName: W };
    const ye = Number(D.origin_slot ?? 0);
    let Ce = [];
    try {
      Ce = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      Ce = [];
    }
    if (Array.isArray(Ce) && Ce.length) {
      const fe = [];
      ye >= 0 && ye < Ce.length && fe.push(Ce[ye]), fe.push(...Ce);
      const Ae = p(fe.filter((je) => !kl(je)));
      if (Ae.length)
        return { src: Ae[0], srcCandidates: Ae, sourceType: "appNodeImageUrls", inputName: W };
    }
    const xe = s((se == null ? void 0 : se.id) ?? ae), be = p(h(xe, ye).filter((fe) => !kl(fe))).map((fe) => `${fe}&pano_src=${kd(xe)}`);
    if (be.length)
      return { src: be[0], srcCandidates: be, sourceType: "nodeOutputs", inputName: W };
    const oe = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (oe.length) {
      const fe = [];
      ye >= 0 && ye < oe.length && fe.push(oe[ye]), fe.push(...oe);
      const Ae = p(fe);
      if (Ae.length)
        return { src: Ae[0], srcCandidates: Ae, sourceType: "nodeImgs", inputName: W };
    }
    const L = (F = se == null ? void 0 : se.widgets) == null ? void 0 : F.find((fe) => String((fe == null ? void 0 : fe.name) || "").toLowerCase() === "image");
    if (L) {
      let fe = i(L.value);
      if (fe && !fe.includes("/") && !fe.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (fe = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(fe)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(fe)}&type=input&subfolder=`), fe) return { src: fe, sourceType: "widget", inputName: W };
    }
    return { src: "", sourceType: "", inputName: W };
  }, S = (b, H = []) => {
    var ne;
    const W = Array.isArray(b == null ? void 0 : b.inputs) ? b.inputs : [];
    for (const Oe of H) {
      const D = W.findIndex((Ce) => String((Ce == null ? void 0 : Ce.name) || "") === Oe), ae = D >= 0 && b.graph ? b.getInputLink(D) : null;
      if ((ae == null ? void 0 : ae.origin_id) == null) continue;
      const se = s(((ne = ag(b, D, ae.origin_id)) == null ? void 0 : ne.id) ?? ae.origin_id), ye = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(kl);
      return ye ? `${Qi(t, ye)}&pano_src=${kd(se)}` : "";
    }
    return "";
  }, _ = (b, H = []) => {
    const W = Array.isArray(H) ? H : [H];
    for (const ne of W) {
      const Oe = y(b, ne);
      if (String((Oe == null ? void 0 : Oe.src) || "").trim()) return Oe;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, w = (b) => {
    const H = String(b || "").trim();
    if (!H) return [];
    if (EN(H)) return [H];
    const { filename: W, subfolder: ne } = TN(H);
    return W ? p([
      Qi(t, { filename: W, subfolder: ne, type: "temp" }),
      Qi(t, { filename: W, subfolder: ne, type: "output" }),
      Qi(t, { filename: W, subfolder: ne, type: "input" }),
      H
    ]) : [H];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (b) => {
      var H, W;
      try {
        (W = (H = b == null ? void 0 : b.__panoLinkedInputImageCache) == null ? void 0 : H.forEach) == null || W.call(H, (ne, Oe, D) => {
          var ae;
          ne != null && ne.img && ((ae = r == null ? void 0 : r.isImageLoadFailed) != null && ae.call(r, ne.img)) && D.delete(Oe);
        });
      } catch {
      }
    },
    externalStateHash: m,
    invalidateUiImage: (b, H) => {
      var W;
      (W = b == null ? void 0 : b.delete) == null || W.call(b, `__ui__${String(H || "")}`);
    },
    linkedValue: (b, H) => {
      var ae, se, ye, Ce;
      const W = String(H || ""), ne = Array.isArray(b == null ? void 0 : b.inputs) ? b.inputs.findIndex((xe) => String((xe == null ? void 0 : xe.name) || "") === W) : -1, Oe = ne >= 0 && b.graph ? b.getInputLink(ne) : null;
      if (Oe) {
        const xe = s(Oe.origin_id), be = [
          xe == null ? void 0 : xe.output,
          xe == null ? void 0 : xe.result,
          (ae = xe == null ? void 0 : xe.data) == null ? void 0 : ae.output,
          (se = xe == null ? void 0 : xe.data) == null ? void 0 : se.result,
          (ye = xe == null ? void 0 : xe.ui) == null ? void 0 : ye.output,
          (Ce = xe == null ? void 0 : xe.ui) == null ? void 0 : Ce.result
        ];
        for (const oe of be) {
          if (!Array.isArray(oe)) continue;
          const L = oe[Number(Oe.origin_slot || 0)];
          if (typeof L == "string" && L.trim()) return L;
        }
      }
      const D = Array.isArray(b == null ? void 0 : b.widgets) ? b.widgets.find((xe) => String((xe == null ? void 0 : xe.name) || "") === W) : null;
      return String((D == null ? void 0 : D.value) || "");
    },
    linkedVideoFile: S,
    loadPreferredExactLinkedImage: (b, H = [], W = null, ne = "") => {
      var Je;
      const Oe = Array.isArray(H) ? H : [H], D = _(b, Oe), se = (Array.isArray(D == null ? void 0 : D.srcCandidates) && D.srcCandidates.length ? D.srcCandidates : [D == null ? void 0 : D.src]).map((le) => String(le || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const ye = p(se.flatMap((le) => w(le)));
      if (!ye.length) return null;
      b.__panoLinkedInputImageCache || (b.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Ce = String(ne || Oe.join("|") || "image_exact"), xe = se.join(`
`), be = b.__panoLinkedInputImageCache.get(Ce);
      if (be && be.srcRaw === xe && be.img) return be.img;
      const oe = n || globalThis.Image;
      if (typeof oe != "function") return null;
      const L = new oe();
      (Je = r == null ? void 0 : r.markImageLoading) == null || Je.call(r, L, xe);
      const F = { srcRaw: xe, resolvedSrc: "", img: L };
      b.__panoLinkedInputImageCache.set(Ce, F);
      let fe = -1;
      const Ae = (le) => {
        var z, x, he;
        le === "ready" ? (z = r == null ? void 0 : r.markImageReady) == null || z.call(r, L, xe) : (x = r == null ? void 0 : r.markImageFailed) == null || x.call(r, L, xe), W == null || W(L), (he = b.setDirtyCanvas) == null || he.call(b, !0, !0);
      }, je = () => {
        if (fe += 1, fe >= ye.length) {
          Ae("failed");
          return;
        }
        F.resolvedSrc = ye[fe], L.src = F.resolvedSrc;
      };
      return L.onload = () => Ae("ready"), L.onerror = () => {
        if (fe + 1 < ye.length) {
          je();
          return;
        }
        Ae("failed");
      }, je(), L;
    },
    output: s,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (b, H, W, ne = null) => {
      var xe, be, oe;
      const Oe = l(b, H)[0] || null, D = i(Oe);
      if (!D) return null;
      const ae = `__ui__${H}`, se = (xe = W == null ? void 0 : W.get) == null ? void 0 : xe.call(W, ae);
      if (se && se.__panoSrc === D) return se;
      const ye = n || globalThis.Image;
      if (typeof ye != "function") return null;
      const Ce = new ye();
      return Ce.__panoSrc = D, (be = r == null ? void 0 : r.markImageLoading) == null || be.call(r, Ce, D), Ce.onload = () => {
        var L;
        (L = r == null ? void 0 : r.markImageReady) == null || L.call(r, Ce, D), ne == null || ne(Ce);
      }, Ce.onerror = () => {
        var L;
        (L = r == null ? void 0 : r.markImageFailed) == null || L.call(r, Ce, D), ne == null || ne(Ce);
      }, Ce.src = D, (oe = W == null ? void 0 : W.set) == null || oe.call(W, ae, Ce), Ce;
    },
    uiList: l,
    uiValue: c
  };
}
const DN = 1e-3;
function lb(e, t, n, r) {
  if (!Qo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < r.frames ? (s + 0.5) / r.fps : null;
  }
  const o = i / n + Math.max(DN / n, Number(r.pts_tolerance) || 0);
  return o >= 0 && o < r.duration ? o : null;
}
function cb(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function LN(e, t) {
  return Math.floor(e * t.fps);
}
function ub(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const sg = 4;
function db({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return r.has(s) || r.set(s, e(n[s], t)), r.get(s);
  }
  return {
    picture(s, l, c, m) {
      if ((s.length !== n.length || s.some((y, S) => y !== n[S])) && (n = s, r.clear(), i = null), l === null) return null;
      const p = LN(l, c);
      for (let y = p; y < Math.min(n.length, p + sg + 1); y += 1) o(y);
      for (const y of r.keys())
        (y < p || y > p + sg) && y !== i && r.delete(y);
      const h = r.get(p);
      return h != null && h.complete && h.naturalWidth > 0 && (i !== null && i !== p && r.delete(i), i = p), i === null ? m : r.get(i);
    }
  };
}
function fb({
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
  let s = null, l = !1, c = !1;
  const m = () => s || e(), p = () => o(n(m()));
  return {
    model: () => n(m()),
    refresh() {
      return c ? this.model() : (p(), this.model());
    },
    beginGesture() {
      return c || s ? !1 : (s = e(), l = !1, p(), !0);
    },
    updateGesture(h) {
      if (c) return !1;
      s || this.beginGesture();
      const y = t(s, h);
      return y.changed ? (s = y.state, l = !0, r(s), p(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && l;
    },
    commitGesture() {
      if (c || !s) return !1;
      const h = l;
      return h && i(s), s = null, l = !1, r(null), p(), h;
    },
    cancelGesture() {
      return c || !s ? !1 : (s = null, l = !1, r(null), p(), !0);
    },
    apply(h) {
      if (c) return !1;
      s && this.commitGesture();
      const y = t(e(), h);
      return y.changed ? (i(y.state), p(), !0) : !1;
    },
    destroy() {
      if (c) return;
      c = !0;
      const h = s != null;
      s = null, l = !1, h && r(null);
    }
  };
}
const Ml = "sticker_image_1", pb = "external_image", ua = 0;
function ea(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Fu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ai(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Md(e, t = ua) {
  return (e == null ? void 0 : e.version) !== 2 ? Ai(e) : Ai(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: go(n, t).active,
    external: n.source.kind === "port",
    ...Mf(n, t)
  }));
}
function Tf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ai(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function hb(e) {
  return String((e == null ? void 0 : e.id) || "") === Ml || String((e == null ? void 0 : e.source_kind) || "") === pb;
}
function Ff(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : hb(t);
}
const mb = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function gb(e) {
  return !hb(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(mb.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function yb(e) {
  const t = gb(e);
  return t ? mb.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function bb(e, t = {}) {
  var $, b, H;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((W) => String((W == null ? void 0 : W.id) || "") === Ml);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const W = String((($ = e.active) == null ? void 0 : $.selected_sticker_id) || "") === Ml;
    return {
      state: {
        ...e,
        stickers: n.filter((ne, Oe) => Oe !== r),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = r >= 0 ? n[r] : null, l = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, c = Number(t.imageWidth || 0), m = Number(t.imageHeight || 0), p = c > 0 && m > 0, h = Math.max(1, c), y = Math.max(1, m), S = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = l ? S.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || S.hFOV_deg || 30, w = Math.min(179, Math.max(0.1, Number(_)));
  if (!l) {
    if (!p) return { state: e, changed: !1 };
    const W = ea(w, h, y), ne = Number(((b = s == null ? void 0 : s.initial_pose) == null ? void 0 : b.hFOV_deg) ?? w), Oe = ea(ne, h, y), D = Number(((H = s == null ? void 0 : s.initial_pose) == null ? void 0 : H.vFOV_deg) ?? Oe);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(D - Oe) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((ae, se) => se === r ? {
          ...ae,
          vFOV_deg: W,
          initial_pose: ae.initial_pose && typeof ae.initial_pose == "object" ? { ...ae.initial_pose, vFOV_deg: Oe } : ae.initial_pose
        } : ae)
      },
      changed: !0
    };
  }
  const N = n.reduce((W, ne) => Math.max(W, Number((ne == null ? void 0 : ne.z_index) || 0)), -1), I = {
    yaw_deg: Number(S.yaw_deg || 0),
    pitch_deg: Number(S.pitch_deg || 0),
    hFOV_deg: w,
    vFOV_deg: p ? ea(w, h, y) : Number(S.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || w),
    rot_deg: Number(S.rot_deg ?? S.roll_deg ?? 0)
  }, G = {
    ...s || {},
    id: Ml,
    source_kind: pb,
    source_link_id: i,
    source_state_hash: o,
    ...I,
    initial_pose: { ...I },
    visible: !0,
    z_index: N + 1
  }, R = r >= 0 ? n.map((W, ne) => ne === r ? G : W) : [...n, G];
  return { state: { ...e, stickers: R }, changed: !0 };
}
function lg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const RN = ["IMAGE", "VIDEO"];
function cg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => RN.includes(n)) ? "2d" : null;
}
function VN(e, t) {
  var i, o, s, l, c, m;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((p) => (p == null ? void 0 : p.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? cg(r.type) ?? cg((m = (c = (l = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, r.origin_id)) == null ? void 0 : l.outputs) == null ? void 0 : c[r.origin_slot]) == null ? void 0 : m.type) : null;
}
function vb(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: lg(e, "sticker"),
    awaitingPose: !t && (lg(e, "sticker_state") || VN(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function ug(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Ur({ version: 2, stickers: [n] }).stickers[0];
}
function _b(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var w;
  const s = e.stickers.findIndex((N) => Ff(e, N)), l = s >= 0 ? e.stickers[s] : null;
  if (!t) {
    if (!l) return { state: e, changed: !1 };
    const N = ((w = e.active) == null ? void 0 : w.selected_sticker_id) === l.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((I, G) => G !== s),
        active: N ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const c = i > 0 && o > 0;
  if (l && (r == null ? void 0 : r.placement) === "world" && r.replace && l.placement === "sky") {
    const N = { ...ug(l.id, r), clip: l.clip, visible: l.visible, locked: l.locked };
    return { state: { ...e, stickers: e.stickers.map((I, G) => G === s ? N : I) }, changed: !0 };
  }
  if (l) {
    if (!c || l.placement !== "sky") return { state: e, changed: !1 };
    const N = [l.size.value, ...l.size.keyframes.map((R) => R.value)], I = N.map((R) => ea(R.hFOV_deg, i, o));
    if (N.every((R, $) => Math.abs(R.vFOV_deg - I[$]) <= 1e-6)) return { state: e, changed: !1 };
    const G = {
      value: { ...l.size.value, vFOV_deg: I[0] },
      keyframes: l.size.keyframes.map((R, $) => ({ ...R, value: { ...R.value, vFOV_deg: I[$ + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((R, $) => $ === s ? { ...R, size: G } : R) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const m = new Set(e.stickers.map((N) => N.id));
  let p = 1;
  for (; m.has(`sticker_${p}`); ) p += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, ug(`sticker_${p}`, r)] }, changed: !0 };
  const h = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), y = (N) => c ? ea(N, i, o) : N, S = Nf(`sticker_${p}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: h,
    vFOV_deg: y(h)
  }, Ai(e).reduce((N, I) => Math.max(N, I.z_index), -1) + 1), _ = (r == null ? void 0 : r.keyframes) ?? {};
  return S.direction.keyframes = _.direction ?? [], S.roll.keyframes = _.roll ?? [], S.size.keyframes = (_.size ?? []).map((N) => ({ ...N, value: { ...N.value, vFOV_deg: y(N.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, S] }, changed: !0 };
}
function Df(e) {
  const t = Ai(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Fu(o.z_index),
    item: o
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Fu(o.z_index),
    item: o
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Fu(o.z_index),
    item: o
  }));
  return [...t, ...r, ...i].sort((o, s) => o.z_index - s.z_index);
}
function Sb(e) {
  const t = Tf(e), n = Ff(e, t), r = Ai(e).some((l) => l && l.visible !== !1), i = Df(e), o = t ? i.findIndex((l) => l.type === "sticker" && l.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: yb(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function $N(e) {
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
function dg(e, t) {
  const n = Tf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = $N(e), i = String(n.id || ""), o = Df(r), s = o.findIndex((c) => c.type === "sticker" && c.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [l] = o.splice(s, 1);
  return t === "front" ? o.push(l) : o.unshift(l), o.forEach((c, m) => {
    c.item.z_index = m;
  }), { state: r, changed: !0 };
}
function zN(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function jN(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return bb(e, t.value);
  if (t.type === "sync-port") return _b(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((y) => String((y == null ? void 0 : y.id) || "") === o))
      return { state: e, changed: !1 };
    const c = Df(e).reduce((y, S) => Math.max(y, Number(S.z_index || 0)), -1), m = 30, p = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: m,
      vFOV_deg: ea(m, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Nf(o, Sl(i.asset), p, c + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const h = { id: o, asset_id: s, ...p, z_index: c + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [s]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], h],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Ai(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Tf(e);
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
    const i = gb(n);
    return !i || !yb(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === n ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return dg(e, "front");
  if (t.type === "send-back") return dg(e, "back");
  if (t.type === "delete-selected") {
    if (Ff(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((c) => c === n ? { ...c, visible: !1 } : c)
        },
        changed: !0
      };
    const i = e.stickers.filter((c) => c !== n), o = Ai({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), l = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (l.assets = zN(l)), { state: l, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Mf(n, ua) : n, l = {};
    if (o.forEach((c) => {
      const m = Number(i[c]);
      Number.isFinite(m) && Math.abs(m - Number(s[c] || 0)) > 1e-12 && (l[c] = m);
    }), !Object.keys(l).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const c = SM(n, l);
      if (!Object.keys(c).length) return { state: e, changed: !1 };
      const m = structuredClone(n);
      return Ly(m, ua, c), { state: { ...e, stickers: e.stickers.map((p) => p === n ? m : p) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, ...l } : c)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function HN(e = {}) {
  return fb({
    ...e,
    reduce: jN,
    projectModel: Sb
  });
}
const Nd = 2;
function io(e, t) {
  return Math.floor(e * t + 0.5);
}
function GN(e, t) {
  return Math.floor(e * t + 1e-3);
}
function wb({ video: e, clock: t, fps: n, span: r, loop: i, onFrame: o, onCapture: s, onChange: l }) {
  let c = 0, m = !1, p = !1, h = { name: "idle" }, y = [];
  const S = () => m && !p, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function w() {
    for (const F of y) F();
    y = [];
  }
  function N(F, fe = {}) {
    return w(), h = { name: F, ...fe }, l(), h;
  }
  function I(F, fe, Ae) {
    const je = () => {
      h === F && Ae();
    };
    e.addEventListener(fe, je), y.push(() => e.removeEventListener(fe, je));
  }
  function G(F, fe) {
    let Ae = t.requestFrame(function je(Je) {
      h === F && (fe(Je), h === F && (Ae = t.requestFrame(je)));
    });
    y.push(() => t.cancelFrame(Ae));
  }
  function R(F) {
    c = F, o(c);
  }
  function $() {
    return N(p ? "error" : "idle");
  }
  function b() {
    p = !0, $();
  }
  function H() {
    const { seekable: F } = e, fe = F != null && F.length ? F.end(F.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(c / n(), Number.isFinite(fe) ? fe : 1 / 0));
  }
  function W(F) {
    if (!S()) return F === "play" ? se() : $();
    if (e.readyState < Nd) {
      const fe = N("loading", { then: F });
      return I(fe, "loadeddata", () => W(fe.then)), I(fe, "error", b), fe;
    }
    return F === "play" && c / n() >= Number(e.duration) ? se() : ne(F, !1);
  }
  function ne(F, fe) {
    const Ae = H();
    if (!e.ended && io(Number(e.currentTime), n()) === io(Ae, n())) return Oe(F);
    const je = N("seeking", { then: F, frame: c, retried: fe });
    return I(je, "seeked", () => {
      const Je = io(Number(e.currentTime), n()) === io(H(), n()), le = c === je.frame;
      Je || le && je.retried ? Oe(je.then) : ne(je.then, le);
    }), I(je, "error", b), e.currentTime = Ae, je;
  }
  function Oe(F) {
    return F === "play" ? D() : (s(), $());
  }
  function D() {
    const F = N("playingVideo", { shown: !1 });
    if (I(F, "pause", () => e.ended ? ae() : xe()), I(F, "ended", ae), I(F, "error", b), i() && io(Number(e.duration), n()) >= r()) {
      const Ae = e.loop;
      e.loop = !0, y.push(() => {
        e.loop = Ae;
      });
    }
    const fe = (Ae, je) => {
      je && !F.shown && (F.shown = !0, l()), ye(io(Ae, n()));
    };
    if (_()) {
      let Ae = e.requestVideoFrameCallback(function je(Je, le) {
        h === F && (fe(Number(le.mediaTime), !0), h === F && (Ae = e.requestVideoFrameCallback(je)));
      });
      y.push(() => {
        var je;
        return (je = e.cancelVideoFrameCallback) == null ? void 0 : je.call(e, Ae);
      });
    } else
      G(F, () => fe(Number(e.currentTime), e.readyState >= Nd));
    return Promise.resolve(e.play()).catch(() => {
      h === F && xe();
    }), F;
  }
  function ae() {
    s(), se();
  }
  function se() {
    const F = N("playingClock", { startTs: t.now(), startFrame: c });
    return G(F, (fe) => ye(F.startFrame + Math.floor((fe - F.startTs) / 1e3 * n()))), F;
  }
  function ye(F) {
    if (F < r()) {
      R(F);
      return;
    }
    if (!i()) {
      Ce(r() - 1);
      return;
    }
    h.name === "playingVideo" && (w(), e.pause()), R(0), W("play");
  }
  function Ce(F) {
    h.name === "playingVideo" ? (w(), e.pause(), R(Math.max(0, F)), s()) : R(Math.max(0, F)), W("still");
  }
  function xe() {
    if (h.name === "loading" || h.name === "seeking")
      h.then = "still", l();
    else if (h.name === "playingVideo") {
      w(), e.pause();
      const F = GN(Number(e.currentTime), n());
      R(Math.min(F, r() - 1)), s(), c === F ? $() : W("still");
    } else h.name === "playingClock" && Ce(Math.min(c, r() - 1));
  }
  function be() {
    if (!L()) {
      if (c >= r() - 1 && R(0), h.name === "loading" || h.name === "seeking") {
        h.then = "play", l();
        return;
      }
      W("play");
    }
  }
  function oe(F) {
    const fe = Math.max(0, Math.round(F));
    if (h.name === "loading" || h.name === "seeking") {
      h.then = "still", R(fe), l();
      return;
    }
    h.name === "playingVideo" && (w(), e.pause()), R(fe), W("still");
  }
  function L() {
    return h.name === "playingVideo" || h.name === "playingClock" || h.then === "play";
  }
  return {
    get frame() {
      return c;
    },
    get state() {
      return h.name;
    },
    get playing() {
      return L();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return h.name === "playingVideo" || h.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return h.name === "playingVideo" && h.shown;
    },
    play: be,
    stop: xe,
    seek: oe,
    toggle() {
      L() ? xe() : be();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(F) {
      w(), m = !!F, p = !1, W("still");
    },
    dispose() {
      w(), m = !1, h = { name: "idle" };
    }
  };
}
function xb({ video: e, onCapture: t, onChange: n }) {
  let r = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, l = null, c = !1;
  function m(w) {
    l = w, t();
  }
  function p(w) {
    s = w, e.currentTime = w;
  }
  function h() {
    const w = c;
    y(), c !== w && n();
  }
  function y() {
    if (!r || i || e.readyState < Nd) return;
    const { time: w, playing: N, fps: I } = o;
    if (w === null) {
      e.pause(), c = !1;
      return;
    }
    if (N) {
      if (s !== null) return;
      const G = Number(e.duration), R = Number.isFinite(G) ? Math.min(w, G) : w, $ = Math.abs(Number(e.currentTime) - R) > 1.5 / I;
      if (e.ended && !$) return;
      $ && p(R), e.paused && (c = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), c = !1, m(NaN)), !(s !== null || l === w) && (Number(e.currentTime) === w ? m(w) : p(w));
  }
  const S = {
    loadeddata: h,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: h,
    seeked: () => {
      const w = s;
      s = null, !o.playing && w === o.time ? m(w) : h();
    },
    playing: () => {
      !o.playing || c || (c = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [w, N] of Object.entries(S)) e.addEventListener(w, N);
  function _(w) {
    r = w, i = !1, s = null, l = null, c = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: w = "", time: N = null, playing: I = !1, fps: G }) {
      w !== r && (_(w), n()), o = { time: N, playing: I, fps: G }, h();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(w, N) {
      return !r || i ? N : o.time === null ? null : o.playing && c ? e : l === null ? N : w;
    },
    dispose() {
      for (const [w, N] of Object.entries(S)) e.removeEventListener(w, N);
      _("");
    }
  };
}
function Pd(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function WN({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: o, onCapture: s, onStickerCapture: l, onChange: c, camera: m = !1 }) {
  let p = "", h = "", y = 0;
  const S = /* @__PURE__ */ new Set();
  let _ = null, w = null;
  const N = () => i().timeline.fps, I = (ae) => ae.stickers.find((se) => se.source.kind === "port"), G = () => {
    const ae = i(), se = I(ae);
    return Ey(ae, {
      minimum: Math.round(N() * 5),
      frames: Math.max(
        p ? Math.round(y * N()) : 0,
        _ && se ? cb(se.clip, N(), _.meta) : 0
      ),
      camera: m
    });
  }, R = wb({
    video: e,
    clock: r,
    fps: N,
    span: G,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: c
  }), $ = () => {
    h === p && Number.isFinite(e.duration) && (y = e.duration);
  }, b = () => {
    h && (S.add(h), c());
  }, H = xb({ video: t, onCapture: l, onChange: c }), W = db({ createImage: n, onLoad: c });
  e.muted = !0, e.addEventListener("loadedmetadata", $), e.addEventListener("error", b);
  function ne(ae) {
    ae !== h && (h = ae, e.pause(), ae ? e.src = ae : e.removeAttribute("src"), e.load(), R.setSource(!!ae));
  }
  function Oe() {
    R.playing && R.stop();
  }
  function D(ae) {
    const se = I(ae);
    w = _ && se ? lb(se.clip, R.frame, ae.timeline.fps, _.meta) : null, H.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: w,
      playing: R.advancing,
      fps: ae.timeline.fps
    });
  }
  return {
    get frame() {
      return R.frame;
    },
    get playing() {
      return R.playing;
    },
    get showsVideo() {
      return R.showsVideo;
    },
    get source() {
      return h;
    },
    pause: Oe,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(ae, se) {
      return _ != null && _.frames ? W.picture(_.frames, w, _.meta, se) : H.picture(ae, se);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: ae, sources: se, state: ye, sticker: Ce = null }) {
      if (_ = ae ? Ce : null, !ae)
        return Oe(), ne(""), D(ye), !1;
      for (const F of S)
        se.includes(F) || S.delete(F);
      const xe = se.find((F) => F && !S.has(F)) || "", be = xe !== p;
      be && (p = xe, y = 0), ne(p);
      const oe = Oy(ye, { camera: m }) || !!p && R.state !== "error" || !!_;
      return oe || Oe(), (be || !oe || !R.playing && R.frame >= G()) && R.frame !== ua && R.seek(ua), D(ye), oe;
    },
    dispose() {
      R.dispose(), H.dispose(), e.removeEventListener("loadedmetadata", $), e.removeEventListener("error", b), e.pause(), e.removeAttribute("src"), e.load(), h = "";
    }
  };
}
const ic = Math.PI / 180, Wr = 180 / Math.PI, KN = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), BN = 260;
function fg(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function kb(e, t) {
  return t ? kb(t, e % t) : e;
}
function UN(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, o = r ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), l = Math.max(1, Math.round(t / o * i)), c = kb(s, l) || 1;
  return `${Math.round(s / c)}:${Math.round(l / c)}`;
}
function ys(e, t) {
  const n = fg(e), r = fg(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: UN(n, r) };
}
function yo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Mb(e) {
  const t = yo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? ui(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Lf(e, t, n = KN) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), m = (N, I, G) => {
    const R = N + I, $ = Math.max(0, G - 1), b = R > $ && R > 0 ? $ / R : 1;
    return [N * b, I * b];
  }, [p, h] = m(c, s, r), [y, S] = m(o, l, i), _ = {
    x: p,
    y,
    w: Math.max(1, r - p - h),
    h: Math.max(1, i - y - S)
  }, w = ff(_, t);
  return {
    x: _.x + (_.w - w.width) * 0.5,
    y: _.y + (_.h - w.height) * 0.5,
    w: w.width,
    h: w.height,
    safeRect: _
  };
}
function YN(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Lf({ width: n, height: r }, 1), o = Me(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = n / (2 * Math.tan(o * ic * 0.5)), l = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, c = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, m = dy(c, sy(
    { x: n * 0.5, y: r * 0.5 },
    s,
    l
  )), p = XN(m, fa(
    c.yaw_deg,
    c.pitch_deg,
    c.roll_deg
  ).right), h = pf({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: p.yaw,
    pitchDeg: p.pitch,
    rollDeg: p.roll,
    frameFovDeg: h.hFOV_deg
  };
}
function Nb(e) {
  return {
    yaw: Ut(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Wr),
    pitch: Me(Math.asin(Me(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Wr, -89.9, 89.9)
  };
}
function XN(e, t) {
  const n = Nb(e), r = fa(n.yaw, n.pitch, 0), i = bu(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(o.x, o.y, o.z);
  if (!(s > 1e-8)) return { ...n, roll: 0 };
  const l = {
    x: o.x / s,
    y: o.y / s,
    z: o.z / s
  };
  return {
    ...n,
    roll: Pc(Math.atan2(
      bu(l, r.up),
      bu(l, r.right)
    ) * Wr)
  };
}
function Pb(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Lf({ width: n, height: r }, mo(e)), o = ho(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = dy(e, sy(
    s,
    o,
    { x: n * 0.5, y: r * 0.5 }
  )), c = Nb(l);
  return {
    yaw: c.yaw,
    pitch: c.pitch,
    fov: Me(2 * Math.atan(n / (2 * o)) * Wr, 1, 179)
  };
}
function qN(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, l = ho(t, n), c = {
    width: Math.max(o, r - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: m, halfH: p } = hf(c, l), h = {
    x: o - m,
    y: s - p,
    w: m * 2,
    h: p * 2
  }, y = h.x <= 0 && h.y <= 0 && h.x + h.w >= r && h.y + h.h >= i, S = r / i, _ = Math.tan(sd * ic), w = S >= 1 ? _ : _ * S, N = S >= 1 ? _ / S : _;
  return {
    focalPx: l,
    rect: h,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(m / l) * Wr,
      vFOV_deg: 2 * Math.atan(p / l) * Wr
    },
    fallback: y ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(w) * Wr,
        vFOV_deg: 2 * Math.atan(N) * Wr
      }
    }
  };
}
function Ro(e, t) {
  const n = yo(e);
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
function JN(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const s = ho(n, e);
    return pf(ff(n, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: bl(o, t) };
}
function pg(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let o = ys(t, n);
  if (!o) return e;
  const s = mo(e) >= 1;
  r && o.ratio >= 1 !== s && (o = ys(o.height, o.width));
  const l = JN(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - l.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - l.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...l, aspect_id: o.label };
}
function Ab(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (yo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = ly({
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
    const r = yo(e);
    if (!r) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== r), o = ((n = i[0]) == null ? void 0 : n.id) == null ? null : String(i[0].id);
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
    return Ro(e, (r) => pg(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Ro(e, (r) => {
      const o = String(ui(r) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? ys(o[1], o[2]) : ys(mo(r), 1);
      return s ? pg(r, s.height, s.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Ro(e, (i) => {
      const o = Pc(r), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const l = { ...i, roll_deg: o };
      return delete l.rot_deg, l;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ro(e, (r) => {
    const i = cy(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? Ro(e, (r) => {
    const i = uy(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? Ro(e, (r) => {
    const i = Ob(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Cb({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const l = o && i ? "alt" : r ? "shift" : "";
  if (!l || !e || !t) return null;
  const c = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, m = {
    x: c.x + c.w * 0.5,
    y: c.y + c.h * 0.5
  }, p = Math.hypot(Number(t.x || 0) - m.x, Number(t.y || 0) - m.y);
  if (l === "shift" && p < Math.min(c.w, c.h) * s) return null;
  const h = Math.atan2(Number(t.y || 0) - m.y, Number(t.x || 0) - m.x);
  return {
    source: l,
    frame: c,
    center: m,
    startRollDeg: Number(n || 0),
    lastAngle: h,
    accumulatedRad: 0
  };
}
function Ib(e, t, n = {}) {
  var s, l;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((l = e.center) == null ? void 0 : l.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + oy(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: ay(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Ob(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * r, s = Number(t.dy || 0) * i, l = Number(e.roll_deg ?? e.rot_deg ?? 0) * ic, c = Math.cos(l), m = Math.sin(l), p = o / n, h = -s / n, y = p * c - h * m, S = p * m + h * c, _ = Number(e.pitch_deg || 0) * ic, w = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: Ut(Number(e.yaw_deg || 0) - Math.atan(y) / w * Wr),
    pitch_deg: Me(Number(e.pitch_deg || 0) - Math.atan(S) * Wr, -90, 90)
  };
}
function ZN({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return fb({
    readState: e,
    reduce: Ab,
    projectModel: Mb,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ue = Object.freeze({
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
}), QN = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, eP = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: QN(t[2])
})), tP = {
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
}, hg = Object.fromEntries(
  Object.entries(tP).map(([e, t]) => [e, {
    name: t.name,
    elements: eP(t.body)
  }])
), Xt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = bt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(hg, r) ? hg[r] : null;
    });
    return (r, i) => n.value ? (Ie(), De("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: wt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Ie(!0), De(ut, null, Rt(n.value.elements, (o, s) => (Ie(), De(ut, {
        key: `${n.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Ie(), De("path", si({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Ie(), De("circle", si({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Ie(), De("rect", si({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Ie(), De("line", si({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Ie(), De("polyline", si({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Ie(), De("polygon", si({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : xt("", !0)
      ], 64))), 128))
    ], 2)) : xt("", !0);
  }
}, dn = {
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
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, i) => (Ie(), gr(cw(e.tag), si({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: k0(() => [
        et(Xt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, nP = ["aria-expanded", "disabled"], rP = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, iP = ["data-aspect", "disabled", "onClick"], oP = { class: "pano-cutout-aspect-custom" }, aP = ["disabled"], sP = ["disabled"], lP = ["data-custom-width", "data-custom-height", "disabled"], Eb = {
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
    ]), o = /* @__PURE__ */ nn("1"), s = /* @__PURE__ */ nn("1"), l = /* @__PURE__ */ nn(null), c = bt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), m = bt(() => {
      const w = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], N = String(n.model.aspectLabel || "");
      return w.length ? w.map((I) => {
        const G = typeof I == "string" ? I : String((I == null ? void 0 : I.value) || ""), R = typeof I == "string" ? I : String((I == null ? void 0 : I.label) || G);
        return {
          ...typeof I == "object" && I ? I : {},
          value: G,
          label: R,
          active: N ? G === N : (I == null ? void 0 : I.active) === !0
        };
      }) : i.map((I) => ({
        ...I,
        active: I.value === N
      }));
    }), p = bt(() => {
      var N;
      const w = String(n.model.aspectLabel || "").trim();
      return w || String(((N = m.value.find((I) => I.active === !0)) == null ? void 0 : N.label) || "Aspect");
    });
    fo(p, (w) => {
      const N = String(w || "").match(/^([0-9.]+):([0-9.]+)$/);
      N && (o.value = N[1], s.value = N[2]);
    }, { immediate: !0 });
    function h(w) {
      r("action", w);
    }
    function y(w) {
      var N;
      n.model.aspectOpen === !0 && ((N = l.value) != null && N.contains(w.target) || h({ type: "close-aspect" }));
    }
    wc(() => {
      document.addEventListener("pointerdown", y, !0);
    }), xs(() => {
      document.removeEventListener("pointerdown", y, !0);
    });
    function S(w) {
      const [N, I] = String(w.value || "").split(":");
      h({
        type: "set-aspect",
        width: N,
        height: I,
        preserveOrientation: !0
      });
    }
    function _() {
      h({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (w, N) => (Ie(), De("div", {
      ref_key: "rootElement",
      ref: l,
      class: wt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Ie(), gr(dn, {
        key: 0,
        icon: e.model.aspectIcon || ft(Ue).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: c.value },
        onClick: N[0] || (N[0] = (I) => h({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Ie(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: c.value,
        onClick: N[1] || (N[1] = (I) => h({ type: "toggle-aspect" }))
      }, [
        et(Xt, {
          icon: e.model.aspectIcon || ft(Ue).aspect
        }, null, 8, ["icon"]),
        me("span", null, mt(p.value), 1),
        et(Xt, {
          icon: ft(Ue).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, nP)),
      fi(me("div", rP, [
        (Ie(!0), De(ut, null, Rt(m.value, (I) => (Ie(), De("button", {
          key: I.value,
          class: wt(["pano-btn pano-frame-aspect-choice", { active: I.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": I.value,
          disabled: c.value,
          onClick: (G) => S(I)
        }, mt(I.label), 11, iP))), 128)),
        me("div", oP, [
          fi(me("input", {
            "onUpdate:modelValue": N[2] || (N[2] = (I) => o.value = I),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: c.value
          }, null, 8, aP), [
            [Am, o.value]
          ]),
          N[4] || (N[4] = me("span", { "aria-hidden": "true" }, ":", -1)),
          fi(me("input", {
            "onUpdate:modelValue": N[3] || (N[3] = (I) => s.value = I),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: c.value
          }, null, 8, sP), [
            [Am, s.value]
          ]),
          me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: c.value,
            onClick: _
          }, "Apply", 8, lP)
        ])
      ], 512), [
        [bo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, cP = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, uP = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ nn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (Ie(), De("div", {
      class: wt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Kt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Kt(() => {
      }, ["stop"]))
    }, [
      et(dn, {
        icon: ft(Ue).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Kt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      me("div", cP, [
        i[3] || (i[3] = me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Ie(!0), De(ut, null, Rt(ft(n), (o) => (Ie(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          me("kbd", null, mt(o[0]), 1),
          me("span", null, mt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, dP = {
  class: "pano-view-unavailable",
  role: "status"
}, Rf = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (Ie(), De("div", dP, mt(ft(Jy)), 1));
  }
}, fP = { class: "pano-cutout-node-surface" }, pP = ["title", "disabled"], hP = { class: "value" }, mP = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, gP = {
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
    return (r, i) => (Ie(), De("div", fP, [
      me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Kt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Kt(() => {
        }, ["stop"]))
      }, [
        me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => n({ type: "open-editor" }))
        }, [
          et(Xt, {
            icon: ft(Ue).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = me("span", { class: "label" }, "Full Editor", -1))
        ]),
        et(dn, {
          icon: e.model.hasShot ? ft(Ue).delete : ft(Ue).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        et(Eb, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        me("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Kt((o) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          et(Xt, {
            icon: ft(Ue).roll
          }, null, 8, ["icon"]),
          me("span", hP, mt(e.model.rollLabel || "0.0°"), 1)
        ], 40, pP),
        et(dn, {
          icon: ft(Ue).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        et(uP)
      ], 32),
      e.model.hasShot === !1 ? (Ie(), De("div", mP, " Choose a view · + Add Frame ")) : xt("", !0),
      e.model.viewUnavailable ? (Ie(), gr(Rf, { key: 1 })) : xt("", !0)
    ]));
  }
}, Tb = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ nn(null);
    let o, s = !1;
    function l() {
      if (!s) return { active: !1, intent: void 0 };
      const h = o;
      return o = void 0, s = !1, { active: !0, intent: h };
    }
    function c(h) {
      const y = i.value;
      return y instanceof HTMLInputElement ? (o = h, s = !0, y.value = "", y.click(), !0) : !1;
    }
    function m(h) {
      var w, N;
      const { active: y, intent: S } = l();
      if (!y) return;
      const _ = ((N = (w = h.target) == null ? void 0 : w.files) == null ? void 0 : N[0]) || null;
      if (_) {
        r("file-selected", { intent: S, file: _ });
        return;
      }
      r("file-cancelled", { intent: S });
    }
    function p() {
      const { active: h, intent: y } = l();
      h && r("file-cancelled", { intent: y });
    }
    return t({ open: c }), (h, y) => (Ie(), De("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: m,
      onCancel: p
    }, null, 544));
  }
}, yP = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, bP = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ nn(!1), n = Object.freeze([
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
    return (r, i) => (Ie(), De("div", {
      class: wt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Kt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Kt(() => {
      }, ["stop"]))
    }, [
      et(dn, {
        icon: ft(Ue).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Kt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      me("div", yP, [
        i[3] || (i[3] = me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Ie(!0), De(ut, null, Rt(ft(n), (o) => (Ie(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          me("kbd", null, mt(o[0]), 1),
          me("span", null, mt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, vP = { class: "pano-stickers-node-surface" }, _P = ["disabled"], SP = ["aria-label", "data-tip"], wP = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, xP = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, kP = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ nn(null);
    function r(s) {
      var l;
      (l = t.onAction) == null || l.call(t, s);
    }
    function i() {
      var s, l;
      (l = (s = n.value) == null ? void 0 : s.open) == null || l.call(s, "add");
    }
    function o(s) {
      r({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, l) => (Ie(), De("div", vP, [
      me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: l[5] || (l[5] = Kt(() => {
        }, ["stop"])),
        onWheel: l[6] || (l[6] = Kt(() => {
        }, ["stop"]))
      }, [
        me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: l[0] || (l[0] = (c) => r({ type: "open-editor" }))
        }, [
          et(Xt, {
            icon: ft(Ue).fullscreen
          }, null, 8, ["icon"]),
          l[10] || (l[10] = me("span", { class: "label" }, "Full Editor", -1))
        ]),
        me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          et(Xt, {
            icon: ft(Ue).image
          }, null, 8, ["icon"]),
          l[11] || (l[11] = me("span", { class: "label" }, "Add Image", -1))
        ], 8, _P),
        et(dn, {
          icon: e.model.locked ? ft(Ue).lock_closed : ft(Ue).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: l[1] || (l[1] = (c) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        et(dn, {
          icon: ft(Ue).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: l[2] || (l[2] = (c) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        et(dn, {
          icon: ft(Ue).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: l[3] || (l[3] = (c) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        et(dn, {
          icon: e.model.isExternalSelection ? ft(Ue).back_initial : ft(Ue).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: l[4] || (l[4] = (c) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        et(bP)
      ], 32),
      e.model.playable === !0 ? (Ie(), De("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: l[7] || (l[7] = Kt(() => {
        }, ["stop"])),
        onWheel: l[8] || (l[8] = Kt(() => {
        }, ["stop"])),
        onClick: l[9] || (l[9] = (c) => r({ type: "toggle-playback" }))
      }, [
        et(Xt, {
          icon: e.model.playing ? ft(Ue).pause : ft(Ue).play
        }, null, 8, ["icon"])
      ], 40, SP)) : xt("", !0),
      e.model.hasStickers === !1 ? (Ie(), De("div", wP, " Add Image to place a sticker ")) : xt("", !0),
      e.model.dropActive === !0 ? (Ie(), De("div", xP, "Drop image to add")) : xt("", !0),
      et(Tb, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Ie(), gr(Rf, { key: 3 })) : xt("", !0)
    ]));
  }
}, mg = 24;
function MP(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function rs(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function Fb(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const o = t[r], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (n = !n);
  }
  return n;
}
function Ad(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => rs(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, o = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return rs(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Fb(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function NP(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((l) => rs(l, t) <= 169);
    if (s) {
      const l = s.edge === "left" || s.edge === "right";
      return { kind: l ? "scale_x" : "scale_y", cursor: l ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = r ? e.corners.findIndex((s) => rs(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], l = s.x - e.center.x, c = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: l * c >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return rs(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Fb(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Vf(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    r ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Db(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function La(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Me(n.x, -r, t.width + r),
    y: Me(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function PP(e) {
  const t = fa(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Me(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Lt * 0.5),
    tanY: Math.tan(Me(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Lt * 0.5)
  };
}
function eo(e, t, n) {
  return df(Gl(
    Gl(e.centerDir, Wl(e.right, t)),
    Wl(e.up, n)
  ));
}
function $f(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = PP(e), r = La(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    eo(n, -n.tanX, n.tanY),
    eo(n, n.tanX, n.tanY),
    eo(n, n.tanX, -n.tanY),
    eo(n, -n.tanX, -n.tanY)
  ].map((y) => La(y, t)), o = Array.from({ length: 4 }, (y, S) => {
    const _ = [];
    for (let w = 0; w <= 28; w += 1) {
      const N = w / 28;
      let I, G;
      S === 0 ? (I = -n.tanX + 2 * n.tanX * N, G = n.tanY) : S === 1 ? (I = n.tanX, G = n.tanY - 2 * n.tanY * N) : S === 2 ? (I = n.tanX - 2 * n.tanX * N, G = -n.tanY) : (I = -n.tanX, G = -n.tanY + 2 * n.tanY * N);
      const R = La(eo(n, I, G), t);
      R && _.push({ x: R.x, y: R.y });
    }
    return _;
  }), s = La(eo(n, 0, n.tanY), t), l = La(
    eo(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), c = [r, ...i, s, l];
  if (c.some((y) => !y || !Number.isFinite(y.x) || !Number.isFinite(y.y)))
    return { visible: !1 };
  if (!c.some((y) => y.rawZ > 1e-4)) return { visible: !1 };
  const m = l.x - s.x, p = l.y - s.y, h = Math.hypot(m, p) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: i.map((y) => ({ x: y.x, y: y.y })),
    boundaryEdges: o,
    rotateStemBase: { x: s.x, y: s.y },
    rotateHandle: {
      x: s.x + m / h * mg,
      y: s.y + p / h * mg
    },
    visible: !0
  };
}
function gg(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: $f(s, r) })).filter((s) => s.geometry.visible).sort((s, l) => {
    var c, m;
    return Number(((c = l.item) == null ? void 0 : c.z_index) || 0) - Number(((m = s.item) == null ? void 0 : m.z_index) || 0);
  }), o = i.find((s) => {
    var l;
    return String(((l = s.item) == null ? void 0 : l.id) || "") === String(t || "");
  });
  if (o) {
    const s = Ad(o.geometry, n);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const l = Ad(s.geometry, n);
    if (l.kind !== "none") return { ...s, hit: l };
  }
  return null;
}
function AP(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ut(Math.atan2(r.x, r.z) * fn),
    pitch_deg: Math.asin(Me(r.y, -1, 1)) * fn
  };
}
function CP(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Me(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Me(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function IP(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * fn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let ol = null;
function zf() {
  return ol || (ol = new Promise((e) => {
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
  }), ol);
}
function dr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function OP(e, t = 1024) {
  const n = Math.max(1, Math.round(dr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(dr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function EP(e, t, n) {
  const r = dr(t), i = dr(n), o = e == null ? void 0 : e.bbox;
  if (!o || r < 1 || i < 1) return null;
  const s = dr(o.u0), l = dr(o.v0), c = dr(o.u1), m = dr(o.v1);
  if (c <= s || m <= l) return null;
  const p = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + c) * 0.5 + dr(p.du)) * r,
    centerY: ((l + m) * 0.5 + dr(p.dv)) * i,
    width: (c - s) * r,
    height: (m - l) * i,
    rotationRad: dr(p.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, dr(p.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function TP(e, t, n) {
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
function FP() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [o, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(o));
      }
  }
  function r(o, s) {
    let l = e.get(o);
    if (l)
      return e.delete(o), e.set(o, l), !l.settled && typeof s == "function" && l.listeners.add(s), l.image;
    const c = new Image();
    l = { image: c, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(o, l);
    const m = () => {
      l.settled = !0;
      const p = [...l.listeners];
      l.listeners.clear(), p.forEach((h) => h()), n();
    };
    return c.onload = m, c.onerror = m, c.src = o, n(), c;
  }
  function i(o, s, l, c = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const m = String(o.rasterDataUrl || "").trim(), p = EP(o, s, l);
    if (!m.startsWith("data:") || !p) return null;
    const h = TP(o, s, l), y = String((o == null ? void 0 : o.id) || "").trim() || h, S = t.get(y);
    if ((S == null ? void 0 : S.revision) === h) return { source: S.source, revision: h };
    const _ = r(m, c), w = Number(_.naturalWidth || _.width || 0), N = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || w < 1 || N < 1) return null;
    const I = Nn({ label: "raster-object" });
    I.width = Math.max(1, Math.round(s)), I.height = Math.max(1, Math.round(l));
    const G = I.getContext("2d");
    return G ? (p.wrapOffsets.forEach((R) => {
      G.save(), G.translate(p.centerX + R, p.centerY), G.rotate(p.rotationRad), G.scale(p.scale, p.scale), G.drawImage(
        _,
        -p.width * 0.5,
        -p.height * 0.5,
        p.width,
        p.height
      ), G.restore();
    }), t.set(y, { revision: h, source: I }), { source: I, revision: h }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const s = new Set(Array.from(o, (l) => String(l || "").trim()).filter(Boolean));
      for (const l of t.keys())
        s.has(l) || t.delete(l);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function DP(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function LP(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function RP({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(h) {
    if (!h) return;
    h.entry.listeners.delete(h);
    const y = r.get(h.owner);
    (y == null ? void 0 : y.get(h.key)) === h && y.delete(h.key);
  }
  function s(h, y, S, _) {
    if (!h || typeof _ != "function" || S.settled) return;
    let w = r.get(h);
    w || (w = /* @__PURE__ */ new Map(), r.set(h, w));
    const N = w.get(y);
    if ((N == null ? void 0 : N.entry) === S) {
      N.callback = _;
      return;
    }
    o(N);
    const I = { owner: h, key: y, entry: S, callback: _ };
    w.set(y, I), S.listeners.add(I);
  }
  function l(h, y) {
    h.settled || (h.settled = !0, h.image.onload = null, h.image.onerror = null, !y && n.get(h.key) === h && n.delete(h.key), [...h.listeners].forEach((S) => {
      o(S);
      try {
        S.callback(h.image, y);
      } catch {
      }
    }), c(i));
  }
  function c(h) {
    if (!(n.size <= h))
      for (const [y, S] of n) {
        if (n.size <= h) break;
        !S.settled || S.listeners.size > 0 || (S.image.onload = null, S.image.onerror = null, n.delete(y));
      }
  }
  function m(h, y, S, _ = null) {
    const w = String(y || ""), N = String(S || "");
    if (!w || !N) return null;
    let I = n.get(w);
    if (I)
      n.delete(w), n.set(w, I);
    else {
      c(i - 1);
      const R = e || globalThis.Image;
      if (typeof R != "function") return null;
      const $ = new R();
      I = { key: w, image: $, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(w, I), $.onload = () => l(I, !0), $.onerror = () => l(I, !1), $.src = N;
    }
    return I.settled || I.image.complete && Number(I.image.naturalWidth || I.image.width || 0) > 0 || s(h, w, I, _), I.image;
  }
  function p(h) {
    const y = r.get(h);
    y && ([...y.values()].forEach(o), r.delete(h), c(i));
  }
  return { get: m, disposeOwner: p };
}
const Ha = /* @__PURE__ */ new WeakMap();
function Lb(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Ha.get(e);
  r || (r = [], Ha.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Ha.get(e);
    if (!s) return;
    const l = s.indexOf(i);
    l >= 0 && s.splice(l, 1), s.length === 0 && Ha.delete(e);
  };
}
function pi(e, ...t) {
  const n = Ha.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Nl = Object.freeze({
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
}), Rb = "PanoramaSuite.Editor.ViewControls", VP = {
  id: Rb,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Nl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function $P(e) {
  return Object.hasOwn(Nl, e) ? Nl[e] : Nl.default;
}
function zP(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((l) => l.button === t && !!l.shift === n && !!l.alt === r);
  return (s == null ? void 0 : s.action) ?? null;
}
function jP(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const oc = "state_json";
function di(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function HP(e) {
  var s, l;
  const t = di(e, oc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Fy(n, {
    coverage: (s = di(e, "coverage")) == null ? void 0 : s.value
  }), i = Ab(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (l = t.callback) == null || l.call(t, o), !0;
}
function jf(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = di(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var s, l, c, m, p, h, y, S, _;
    const o = r ? r(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (l = (s = e.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || l.call(s), (m = (c = e.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || m.call(c), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0), (y = (h = e.graph) == null ? void 0 : h.setDirtyCanvas) == null || y.call(h, !0, !0), (_ = (S = t == null ? void 0 : t.canvas) == null ? void 0 : S.setDirty) == null || _.call(S, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function GP(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function yg(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function WP(e) {
  var p, h, y, S, _, w;
  if (!e) return;
  const t = di(e, "coverage"), n = di(e, "bg_color"), r = di(e, oc), i = di(e, "sticker_state");
  if (!t || !n || !r) return;
  const o = String(t.value ?? "").trim(), s = String(n.value ?? "").trim(), l = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && GP(o) && (yg(s) || s === ""))) return;
  let m = "360";
  if (yg(s))
    try {
      m = String(Gn((p = JSON.parse(s)) == null ? void 0 : p.coverage));
    } catch {
      m = "360";
    }
  t.value = m, (h = t.callback) == null || h.call(t, m), n.value = o, (y = n.callback) == null || y.call(n, o), r.value = s, (S = r.callback) == null || S.call(r, s), i && (i.value = l, (_ = i.callback) == null || _.call(i, l)), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
}
function Pl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var o, s;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (o = r.element) != null && o.style && (r.element.style.display = "none"), (s = r.parentEl) != null && s.style && (r.parentEl.style.display = "none")));
  });
}
function Cd(e, t, n) {
  var o, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((l) => String((l == null ? void 0 : l.name) || "") === String(t));
  if (i) {
    i.callback = n, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const l = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(l) || Number(l[0] || 0) <= 0 || Number(l[1] || 0) <= 0) && (i.computeSize = () => {
      var c;
      return [Math.max(120, Number(((c = e == null ? void 0 : e.size) == null ? void 0 : c[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, n), i && (i.serialize = !1), i;
}
async function KP(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, i]) => i)) : await Promise.all(r.map(([, i]) => i)), r.forEach(([i, o]) => {
        n.get(i) === o && n.delete(i);
      });
    }
}
function Ga(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, o = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), s = o.catch(() => {
  });
  e.__panoStickerOperationTail = s, e.__panoPendingStickerUploads.set(t, o);
  const l = () => {
    var c, m;
    ((m = (c = e.__panoPendingStickerUploads) == null ? void 0 : c.get) == null ? void 0 : m.call(c, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(l, l), s.then(() => {
    e.__panoStickerOperationTail === s && (e.__panoStickerOperationTail = null);
  }), o;
}
async function Vb(e, t = {}) {
  var r;
  await KP(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of n) await i();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function BP(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Vb(e), n ? n.apply(this, r) : this.value;
  };
}
function UP(e) {
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
function YP(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Ra(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: i,
  attachStickers: o,
  attachCutout: s,
  enableStickersPreview: l,
  sceneStateV2: c = !1,
  studio: m = !1
}) {
  if (!(e != null && e.prototype)) return;
  function p(h) {
    var _;
    const y = `editor_btn|${n}`;
    if (h.__panoPreviewAttached === !0 && h.__panoPreviewMountKey === y) return;
    UP(h), jf(h, t), Pl(h, oc);
    const S = di(h, oc);
    if (BP(h, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const w = S.callback;
      S.callback = (N) => {
        var G;
        const I = w ? w(N) : void 0;
        return (G = h.setDirtyCanvas) == null || G.call(h, !0, !1), I;
      };
    }
    if (n === "PanoramaStickers") {
      h.__panoSceneStateV2 = c, h.__panoStudio = m;
      const w = di(h, "bg_color");
      !c && w && (w.value == null || String(w.value).trim() === "" || String(w.value).toLowerCase() === "#000000") && (w.value = "#00ff00", (_ = w.callback) == null || _.call(w, "#00ff00")), Cd(h, r, () => i(h, "stickers")), l && (o(h, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(h, "stickers")
      }), h.__panoStickersNodeSurface && Pl(h, r), (!Array.isArray(h.size) || h.size[0] < 10 || h.size[1] < 10) && (h.size = [360, 260])), h.__panoPreviewAttached = !0, h.__panoPreviewMountKey = y;
      return;
    }
    h.__panoSceneStateV2 = c, Cd(h, r, () => i(h, "cutout")), c || s(h, {
      buttonText: r,
      onOpen: () => i(h, "cutout")
    }), h.__panoCutoutNodeSurface && Pl(h, r), (!Array.isArray(h.size) || h.size[0] < 10 || h.size[1] < 10) && (h.size = [360, 260]), h.__panoPreviewAttached = !0, h.__panoPreviewMountKey = y;
  }
  for (const h of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const y = e.prototype[h];
    e.prototype[h] = function() {
      const S = y ? y.apply(this, arguments) : void 0;
      h === "onNodeCreated" && n === "PanoramaCutout" && !c && HP(this), h === "onConfigure" && n === "PanoramaStickers" && !c && this.widgets && WP(this);
      const _ = !!this.__panoPreviewAttached;
      return (h === "onNodeCreated" || this.widgets) && p(this), h === "onAdded" && _ && pi(this, "attach"), S;
    };
  }
}
function XP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return YP(this), r;
  };
}
function qP(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: i
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const o = () => {
    const s = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = l, !s && l < 40) {
      i(o);
      return;
    }
    jf(e, t);
    const c = (m = e) => n(m, "stickers", { readOnly: !0, hideSidebar: !1 });
    Cd(e, "Open Preview", () => c(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), e.__panoPreviewNodeSurface && Pl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function JP({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: s,
  enableStickersPreview: l = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [VP, Rx],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Em],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Em.id] }],
    beforeRegisterNodeDef(c, m) {
      const p = String((m == null ? void 0 : m.name) || "");
      (p === "PanoramaStickers" || p === "Panorama Stickers") && Ra(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l
      }), p === "PanoramaStickersNode" && Ra(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l,
        sceneStateV2: !0
      }), p === "PanoramaStudio" && Ra(c, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l,
        sceneStateV2: !0,
        studio: !0
      }), (p === "PanoramaCutout" || p === "Panorama Cutout") && Ra(c, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l
      }), p === "PanoramaCutoutNode" && Ra(c, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l,
        sceneStateV2: !0
      }), Kl(p) && XP(c);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(c) {
      c.__panoPreviewAttached && o(c);
    },
    nodeCreated(c) {
      const m = String((c == null ? void 0 : c.comfyClass) || (c == null ? void 0 : c.type) || (c == null ? void 0 : c.title) || "");
      jf(c, e), Kl(m) && qP(c, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const ZP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Mr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : ZP.test(String(e.name || "")) : !1;
}
function Hf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Mr(n)) : !1;
}
function QP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (c) => {
    var m, p, h;
    (m = c == null ? void 0 : c.preventDefault) == null || m.call(c), (p = c == null ? void 0 : c.stopPropagation) == null || p.call(c), (h = c == null ? void 0 : c.stopImmediatePropagation) == null || h.call(c);
  }, o = (c) => {
    if (Hf(c == null ? void 0 : c.dataTransfer)) {
      i(c);
      try {
        c.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, s = (c) => {
    var m;
    c != null && c.relatedTarget && ((m = e.contains) != null && m.call(e, c.relatedTarget)) || n(!1);
  }, l = (c) => {
    var p;
    const m = Array.from(((p = c == null ? void 0 : c.dataTransfer) == null ? void 0 : p.files) || []).find((h) => Mr(h));
    if (!m) {
      n(!1);
      return;
    }
    i(c), n(!1), r(m);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", l, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", l, !0), n(!1);
  };
}
async function Wa(e, t = {}) {
  var s, l, c, m;
  if (!Mr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((l = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : l.bind(globalThis.URL)), i = t.revokeObjectURL || ((m = (c = globalThis.URL) == null ? void 0 : c.revokeObjectURL) == null ? void 0 : m.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const o = r(e);
  try {
    const p = await new Promise((h, y) => {
      const S = new n();
      S.onload = () => h(S), S.onerror = () => y(new Error("image load failed")), S.src = o;
    });
    return {
      image: p,
      width: Math.max(1, Number(p.naturalWidth || p.width || 1)),
      height: Math.max(1, Number(p.naturalHeight || p.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function oo(e, { fetchApi: t } = {}) {
  if (!Mr(e)) throw new TypeError("A supported image file is required.");
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
const bg = /* @__PURE__ */ new WeakSet(), vg = /* @__PURE__ */ new WeakSet();
let _g = 0;
function Id(e) {
  if (!e || typeof e != "object" || vg.has(e)) return e;
  const t = String(e.type || "preview");
  return _g += 1, e.type = `${t}:pano-${_g}`, vg.add(e), e;
}
function ac(e) {
  if (!e || typeof e != "object" || bg.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, bg.add(e), e;
}
function $b(e, t) {
  var r, i;
  if (!t || ((i = (r = ac(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function e2({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, o = !1;
  return { schedule: (c) => o || r || typeof e != "function" ? !1 : (i = c, r = e(() => {
    r = 0;
    const m = i;
    i = null, o || n == null || n(m);
  }), !0), dispose: () => {
    o || (o = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: qt } = fl;
wN((e) => Ci(e.id));
xN(tn);
const Gf = RP(), { linkedVideoFile: t2 } = sb({ app: qt, api: tn });
function Od() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (fl == null ? void 0 : fl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const n2 = "pano_suite.ui_settings.v1", r2 = 120, i2 = 2048;
function Sg() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(n2)) || "").trim();
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
function o2() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Va(e) {
  var n, r, i, o, s;
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
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function a2() {
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
function Ed(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, i) => {
    const o = Number(r), s = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(s) ? null : [o, s];
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
function zb(e) {
  const t = Ed(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function s2(e, t, n) {
  zb(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Td(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Wf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function jb(e) {
  return Kl(Wf(e));
}
function wg(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = qt == null ? void 0 : qt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, r, n, i].join("|");
}
function Hb(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Td(e);
      this.activeBackend = o;
      const s = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", l = e.__panoPreviewNoPreview === !0, c = n.noPreview === !0;
      if (o === i && o !== "none" && s === r && l === c) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = c, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && Al(e), Z2(e, { ...n, mode: r, __panoForcedPath: i }), this.activeBackend = Td(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Al(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Al(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function l2(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Al(e, t = {}) {
  var r, i, o, s, l;
  if (!e) return;
  Fd.unregister(e), l2(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (l = (s = n.root) == null ? void 0 : s.remove) == null || l.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((m) => {
      if (m === (n == null ? void 0 : n.widget)) return !0;
      const p = String((m == null ? void 0 : m.name) || ""), h = String((m == null ? void 0 : m.type) || ""), y = Od();
      return p === y || h === y || p === "pano_preview" || h === "pano_preview" ? !0 : p === "preview" && h === "pano_preview";
    }).forEach((m) => C2(e, m));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function c2(e, t = "#00ff00") {
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
function u2(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ta(e, "state_json")) == null ? void 0 : n.value) || "");
}
function $n(e) {
  var l, c;
  const t = u2(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((l = ta(e, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), i = Number(((c = ta(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === n && o.bg === r && o.coverage === i)
    return o.parsed;
  const s = e.__panoSceneStateV2 && typeof t == "string" ? Dy(t, { backgroundColor: r, coverage: i, active: Vy(e) }) : c2(t, r);
  return s.coverage = i, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: i, parsed: s }, s;
}
function ta(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function d2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Gb(e, t, n = null) {
  var i, o;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, l = s ? (o = r.resolveSubgraphOutputLink) == null ? void 0 : o.call(r, Number(s.origin_slot ?? 0)) : null;
      l != null && l.outputNode && (r = l.outputNode);
    } catch {
    }
  return !r && n != null && (r = d2(e == null ? void 0 : e.graph, n)), r;
}
function f2(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Wb(e, t = []) {
  const n = f2(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    Ei.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function xg(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function sc(e, t) {
  const n = xg(e), r = xg(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function p2(e, t) {
  var n;
  return Gb(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function h2(e, t = Ei) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = Wb(e, t).map((l) => n.findIndex((c) => String((c == null ? void 0 : c.name) || "") === String(l))).filter((l) => l >= 0), o = n.map((l, c) => ({ input: l, idx: c })).filter(({ input: l }) => String((l == null ? void 0 : l.type) || "").toUpperCase() === "IMAGE").map(({ idx: l }) => l), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return CN(e, s, p2);
}
const Fd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = tn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var c, m, p, h, y;
        if (!o) return;
        const s = sc(r, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !s || !s && ![...h2(o)].some((S) => sc(r, S)) || ab(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (Kb(o), (m = (c = o.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || m.call(c), (p = o.setDirtyCanvas) == null || p.call(o, !0, !0), (y = (h = o.graph) == null ? void 0 : h.setDirtyCanvas) == null || y.call(h, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function lc(e) {
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
  return typeof ((o = tn) == null ? void 0 : o.apiURL) == "function" ? tn.apiURL(i) : i;
}
function m2(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function g2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), o = r.join("/");
  return { filename: i, subfolder: o };
}
function y2(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function b2(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (m2(t)) return [t];
  const { filename: n, subfolder: r } = g2(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((o) => lc({
    filename: n,
    subfolder: r,
    type: o
  }));
  return y2([...i, t]);
}
function v2(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? lc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ci(e) {
  const t = qt == null ? void 0 : qt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (sc(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (sc(s, i)) return t[s];
  }
  return null;
}
function is(e, t, n = null) {
  const r = n || Ci(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
}
function Zn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Zn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return lc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Zn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : lc(e);
}
function cc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Du(e) {
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
function Kf(e, t) {
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
function _2(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || n.has(o) || typeof o == "object" && (n.add(o), r(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function S2(e, t) {
  try {
    e.__panoOwnOutputRev = DP(e.__panoOwnOutputRev);
    const n = _2(t);
    let r = "";
    for (const i of n)
      if (r = Zn(i), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Kf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function na(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function w2(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!yn(e, "background"))
    return na(e), null;
  const i = Ci(r), o = Ef(i, t, Zn);
  if (!o)
    return na(e), null;
  const s = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), l = Kf(o, s), c = `${t.join("|")}:${l}`, m = e.__panoOwnOutputVideoCache;
  if (m && m.key === c) return m.player.failed() ? null : m.player.video;
  na(e);
  const p = IN({
    documentRef: document,
    src: l,
    onFrame: n
  });
  return p ? (e.__panoOwnOutputVideoCache = { key: c, player: p }, p.video) : null;
}
function x2(e, t = []) {
  var m, p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = Wb(e, t).map((h) => n.findIndex((y) => String((y == null ? void 0 : y.name) || "") === String(h))).filter((h) => h >= 0), o = n.map((h, y) => ({ input: h, idx: y })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const h of s) {
    const y = n[h], S = e.graph ? e.getInputLink(h) : null;
    if ((S == null ? void 0 : S.origin_id) == null) continue;
    const _ = S.origin_id, w = Gb(e, h, _);
    if (!w) continue;
    const N = Number(S.origin_slot ?? 0), I = Ci((w == null ? void 0 : w.id) ?? _), G = Array.isArray(I == null ? void 0 : I.images) ? I.images : [];
    if (G.length) {
      const H = [];
      N >= 0 && N < G.length && H.push(G[N]), H.push(...G);
      for (const W of H.filter((ne) => !kl(ne))) {
        const ne = Zn(W);
        if (ne)
          return String((y == null ? void 0 : y.name) || ""), { src: `${ne}&pano_src=${kd(I)}`, sourceType: "nodeOutputs", inputName: String((y == null ? void 0 : y.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (qt == null ? void 0 : qt.getNodeImageUrls) == "function" ? qt.getNodeImageUrls(w) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const H = [];
      N >= 0 && N < R.length && H.push(R[N]), H.push(...R);
      for (const W of H) {
        const ne = Zn(W);
        if (ne)
          return String((y == null ? void 0 : y.name) || ""), { src: ne, sourceType: "appNodeImageUrls", inputName: String((y == null ? void 0 : y.name) || "") };
      }
    }
    const $ = Array.isArray(w == null ? void 0 : w.imgs) ? w.imgs : [];
    if ($.length) {
      const H = [];
      N >= 0 && N < $.length && H.push($[N]), H.push(...$);
      for (const W of H) {
        const ne = Zn(W);
        if (ne)
          return String((y == null ? void 0 : y.name) || ""), { src: ne, sourceType: "nodeImgs", inputName: String((y == null ? void 0 : y.name) || "") };
      }
    }
    const b = (m = w == null ? void 0 : w.widgets) == null ? void 0 : m.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image");
    if (b) {
      let H = Zn(b.value);
      if (H && !H.includes("/") && !H.includes(":") && (w.comfyClass === "LoadImage" || w.type === "LoadImage") && (H = tn.apiURL(`/view?filename=${encodeURIComponent(H)}&type=input&subfolder=`)), H)
        return String((y == null ? void 0 : y.name) || ""), { src: H, sourceType: "widget", inputName: String((y == null ? void 0 : y.name) || "") };
    }
  }
  const l = yn(e, "background") ? Ci(e == null ? void 0 : e.id) : null, c = [];
  if (Array.isArray(l == null ? void 0 : l.pano_input_images) && c.push(...l.pano_input_images), Array.isArray((p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images) && c.push(...l.ui.pano_input_images), c.length > 0)
    for (const h of c) {
      const y = Zn(h);
      if (y)
        return { src: y, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function k2(e, t = [], n = {}) {
  const r = x2(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const o = b2(i);
  if (!o.length) return null;
  const s = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = t.join("|") || "image", c = e.__panoLinkedInputImageCache.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const m = new Image(), p = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  p.pendingSrcRaw = i, p.pendingResolvedSrc = "", p.pendingImg = m, e.__panoLinkedInputImageCache.set(l, p);
  let h = -1;
  const y = () => {
    var _, w, N, I;
    if (h += 1, h >= o.length) {
      if (((w = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : w.call(_, l)) === p && p.pendingImg === m && (p.pendingSrcRaw = "", p.pendingResolvedSrc = "", p.pendingImg = null, !p.img))
        try {
          (I = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || I.call(N, l);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), o.length;
      return;
    }
    const S = o[h];
    p.pendingResolvedSrc = S, m.src = S;
  };
  return m.onload = () => {
    var S, _, w;
    ((_ = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : _.call(S, l)) === p && p.pendingImg === m && (p.srcRaw = i, p.resolvedSrc = String(p.pendingResolvedSrc || m.src || ""), p.img = m, p.pendingSrcRaw = "", p.pendingResolvedSrc = "", p.pendingImg = null), String(p.pendingResolvedSrc || p.resolvedSrc || m.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, m.onerror = (S) => {
    var _, w, N, I;
    if (h + 1 < o.length) {
      y();
      return;
    }
    if (((w = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : w.call(_, l)) === p && p.pendingImg === m && (p.pendingSrcRaw = "", p.pendingResolvedSrc = "", p.pendingImg = null, !p.img))
      try {
        (I = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || I.call(N, l);
      } catch {
      }
    String(p.pendingResolvedSrc || p.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((S == null ? void 0 : S.type) || "error");
  }, y(), s && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : m;
}
function M2(e, t = [], n = null, r = {}) {
  const i = k2(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function Kb(e) {
  var t, n;
  if (e) {
    Gf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, na(e), e.__panoWrappedErpCache = null;
  }
}
function N2(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, na(e), e.__panoWrappedErpCache = null;
  }
}
function Bb(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function al(e, t, n = "") {
  const r = Bb(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < r2 ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function kg(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), s = n / i, l = r / o, c = Math.min(s, l);
  return Number.isFinite(c) && c > 0 ? c : 1;
}
function P2(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const l = Math.max(14, Math.round(14 * n)), c = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), o * 0.44)), m = Math.max(Math.round(34 * n), l + Math.round(14 * n)), p = r + (o - c) * 0.5, h = i + (s - m) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(p, h, c, m, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${l}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", p + c * 0.5, h + m * 0.5 + 0.5), e.restore();
}
function Lu(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function A2(e) {
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
function C2(e, t) {
  return $b(e, t);
}
function bs(e, t, n, r = null) {
  var y;
  if (!String(t || "")) return null;
  let o = v2(n);
  if (!o && (r != null && r.external)) {
    if (!yn(e, "external-sticker")) return null;
    const S = Ci(e == null ? void 0 : e.id), _ = ((y = S == null ? void 0 : S.ui) == null ? void 0 : y.pano_sticker_input_images) || (S == null ? void 0 : S.pano_sticker_input_images) || [];
    for (const w of Array.isArray(_) ? _ : [_])
      if (o = Zn(w), o) break;
  }
  if (!o) return null;
  const s = is(e, "pano_sticker_input_state_hash"), l = r != null && r.external ? String(s ?? "") : "", c = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, m = r != null && r.external ? Kf(o, c) : o, p = LP(o, l, c);
  return Gf.get(e, p, m, (S, _) => {
    var w, N;
    _ && (r != null && r.external && e.__panoOutputFromRun && pi(e, "image-loaded"), (N = (w = e.__panoDomPreview) == null ? void 0 : w.requestDraw) == null || N.call(w));
  }) || null;
}
function I2(e, t) {
  var h, y, S, _;
  const n = D2(e, t), r = L2(t), i = Array.isArray((h = t == null ? void 0 : t.painting) == null ? void 0 : h.groups) ? t.painting.groups : [], o = new Map(
    i.filter((w) => w && typeof w == "object").map((w) => [String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim(), Number((w == null ? void 0 : w.z_index) || 0)])
  ), s = n ? r.map((w) => {
    const N = n.getGroupDisplayCanvas(w);
    return N ? {
      id: `paint_group:${w}`,
      source: N,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${w}`,
      zIndex: Number(o.get(w) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((y = t == null ? void 0 : t.painting) == null ? void 0 : y.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (_ = (S = e.__panoRasterObjectSurfaceCache) == null ? void 0 : S.retain) == null || _.call(S, []), s;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = FP()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var w, N;
    return (N = (w = e.__panoDomPreview) == null ? void 0 : w.requestDraw) == null ? void 0 : N.call(w);
  });
  const c = OP(t == null ? void 0 : t.output_preset), m = l.filter((w) => (w == null ? void 0 : w.visible) !== !1 && String((w == null ? void 0 : w.layerKind) || "paint") === "paint").map((w) => String((w == null ? void 0 : w.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(m);
  const p = l.map((w) => {
    const N = e.__panoRasterObjectSurfaceCache.get(
      w,
      c.width,
      c.height,
      e.__panoRasterObjectReady
    );
    return N ? {
      id: `raster:${String((w == null ? void 0 : w.id) || "")}`,
      source: N.source,
      revision: N.revision,
      zIndex: Number((w == null ? void 0 : w.z_index) || 0),
      opacity: 1,
      visible: (w == null ? void 0 : w.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...s, ...p];
}
function O2(e, t, n, r) {
  var o, s, l, c, m, p;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const h = r.convertEventToCanvasOffset(t);
      if (Array.isArray(h) && h.length >= 2)
        return {
          x: Number(h[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
          y: Number(h[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((m = e == null ? void 0 : e.pos) == null ? void 0 : m[0]) || 0),
      y: Number(t.canvasY) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
    };
  const i = T2(e, t, r);
  return i || null;
}
function E2(e, t) {
  var h, y;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (h = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : h.call(i), s = (t == null ? void 0 : t.ds) || ((y = qt == null ? void 0 : qt.canvas) == null ? void 0 : y.ds);
  if (!o || !s) return null;
  const l = Number(s.scale || 1);
  if (!Number.isFinite(l) || Math.abs(l) < 1e-6) return null;
  const c = Array.isArray(s.offset) ? s.offset : [0, 0], m = (n - Number(o.left || 0)) / l - Number(c[0] || 0), p = (r - Number(o.top || 0)) / l - Number(c[1] || 0);
  return !Number.isFinite(m) || !Number.isFinite(p) ? null : { x: m, y: p };
}
function T2(e, t, n) {
  var i, o;
  const r = E2(t, n || (qt == null ? void 0 : qt.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function F2(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function D2(e, t) {
  var m, p, h, y, S, _, w, N, I, G, R, $;
  const n = (p = (m = t == null ? void 0 : t.painting) == null ? void 0 : m.paint) == null ? void 0 : p.strokes, r = (y = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.mask) == null ? void 0 : y.strokes, i = Array.isArray(n) && n.length > 0, o = Array.isArray(r) && r.length > 0;
  if (!i && !o) return null;
  const s = F2(e, t), l = `${s.width}x${s.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== l) && (e.__panoPreviewPaintEngine = lf(s), e.__panoPreviewPaintDescriptorKey = l, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const c = {
    paint: n || null,
    mask: r || null,
    groups: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((w = e.__panoPreviewPaintRevision) == null ? void 0 : w.paint) !== c.paint || ((N = e.__panoPreviewPaintRevision) == null ? void 0 : N.mask) !== c.mask || ((I = e.__panoPreviewPaintRevision) == null ? void 0 : I.groups) !== c.groups || ((G = e.__panoPreviewPaintRevision) == null ? void 0 : G.rasterObjects) !== c.rasterObjects) && (e.__panoPreviewPaintRevision = c, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.groups) ? t.painting.groups.length : 0),
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function L2(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, i) => Number((r == null ? void 0 : r.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function R2(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function V2(e, t, n) {
  const r = $f(t, n);
  r.visible && Vf(e, r.boundaryEdges, { selected: !1 });
}
function $2(e, t, n) {
  const r = $f(t, n);
  r.visible && (e.save(), Vf(e, r.boundaryEdges, { selected: !0 }), Db(e, r, { accent: MP(t) }), e.restore());
}
function Dd(e, t, n) {
  return Xy(tc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function uc(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ua;
}
function z2(e) {
  return [yn(e, "background") ? Ef(Ci(e.id), ["pano_input_videos"], Zn) : "", t2(e, Ei)];
}
function j2(e) {
  var o;
  if (!yn(e, "external-sticker")) return null;
  const t = Ci(e.id), n = is(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Zn), meta: n };
  const i = Ef(t, ["pano_sticker_input_videos"], Zn);
  return i ? { src: i, meta: n } : null;
}
function H2({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Mg(e, t, n) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Ur({ ...t, painting: null }) });
  const r = (s) => {
    var c;
    if (s.visible === !1) return null;
    let l;
    if (t.version === 2) {
      l = bs(e, s.id, Ry(s.source), { external: s.source.kind === "port" });
      const m = e.__panoSurfacePlayback;
      if (s.source.kind === "port" && m) {
        const p = m.playback.stickerPicture(m.stickerStill, l), h = ub(m.playback.stickerMedia, l);
        return p ? { media: p, revision: Du(p), source: h } : null;
      }
    } else {
      const m = s.type === "external_image" || s.source_kind === "external_image", p = String(s.asset_id || "") || (m ? String(s.id || "") : "");
      l = bs(e, p, (c = t.assets) == null ? void 0 : c[s.asset_id], { external: m });
    }
    return cc(l) ? { media: l, revision: Du(l) } : null;
  }, i = (t.painting_visible === !1 ? [] : I2(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: cc(n) ? { media: n, revision: Du(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: qy(e.__panoSurfaceScene.sceneState, uc(e), t.stickers, { media: r, paintLayers: i })
  };
}
function G2(e, t, n) {
  var $, b, H, W, ne, Oe, D;
  const r = String(e.__panoPreviewMode || "stickers");
  Bb(e, r);
  const i = $n(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (H = (b = ($ = e.__panoCutoutNodeSurface) == null ? void 0 : $.session) == null ? void 0 : b.refresh) == null || H.call(b)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (Oe = (ne = (W = e.__panoStickersNodeSurface) == null ? void 0 : W.session) == null ? void 0 : ne.refresh) == null || Oe.call(ne));
  const o = t.parentElement, s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), l = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), c = t.getContext("2d");
  if (!c) return;
  (t.width !== s || t.height !== l) && (t.width = s, t.height = l);
  const m = { x: 0, y: 0, w: s, h: l };
  c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "#070707", c.fillRect(0, 0, s, l);
  const p = (e.__panoSurfacePlayback ? H2(e.__panoSurfacePlayback) : w2(e, ["pano_input_videos"], () => {
    var ae, se;
    return (se = (ae = e.__panoDomPreview) == null ? void 0 : ae.requestDraw) == null ? void 0 : se.call(ae);
  })) || M2(
    e,
    Ei,
    () => {
      var ae, se;
      return (se = (ae = e.__panoDomPreview) == null ? void 0 : ae.requestDraw) == null ? void 0 : se.call(ae);
    },
    { preserveReadyWhilePending: !1 }
  ), h = cc(p);
  let y = null;
  const S = (ae, se) => {
    y || (y = Mg(e, i, p));
    const ye = n.render({ width: ae.w, height: ae.h, camera: se, ...y });
    return ye && c.drawImage(ye.canvas, ye.x, ye.y, ye.width, ye.height, ae.x, ae.y, ae.w, ae.h), !!ye;
  };
  if (r === "cutout") {
    const ae = A2(i), se = R2(p), ye = ae ? Me(Ii(ae).aspect, 0.1, 10) : h ? Me(Number(se.width / se.height), 0.05, 20) : 1, Ce = Lf(m, ye);
    e.__panoCutoutNodeFrame = Ce;
    let xe = "none";
    const be = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (ae)
      if (p && !h)
        xe = "loading";
      else if (h) {
        const oe = qN({ width: s, height: l }, Ce, ae);
        [
          !oe.fallback || S(oe.fallback.rect, ns(oe.fallback.shot)),
          S(oe.rect, ns(oe.shot)),
          !oe.fallback || S(Ce, ns(ae))
        ].every(Boolean) || (xe = "loading");
      } else
        xe = "empty";
    else {
      const oe = e.__panoLastCutoutShot;
      oe ? (e.__panoPreviewView = Pb(oe, { width: s, height: l }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), h ? S(m, tc(e.__panoPreviewView, s, l)) || (xe = "loading") : p ? xe = "loading" : xe = "empty";
    }
    h || n.release(), n.failed && xe === "loading" && (xe = "none"), ae && (e.__panoLastCutoutShot = { ...ae }, c.save(), c.fillStyle = "rgba(0,0,0,0.58)", c.beginPath(), c.rect(0, 0, s, l), c.rect(Ce.x, Ce.y, Ce.w, Ce.h), c.fill("evenodd"), c.restore(), c.save(), c.strokeStyle = "rgba(255,221,87,0.72)", c.lineWidth = 2, c.strokeRect(Ce.x + 0.5, Ce.y + 0.5, Math.max(0, Ce.w - 1), Math.max(0, Ce.h - 1)), c.restore()), xe === "loading" ? (Lu(e, !1), al(e, !0, be)) : xe === "empty" ? (Lu(e, !0), al(e, !1, "")) : (Lu(e, !1), al(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let _ = !1;
  (!p || h) && (y = Mg(e, i, p), !y.background && !y.layers.length ? (n.release(), _ = !0) : _ = S(m, tc(e.__panoPreviewView, s, l)));
  const w = !_ && !n.failed;
  al(e, w, w ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), w && P2(c, m, kg(t, m));
  const N = Dd(e, s, l);
  !p && _ && W2(c, N, kg(t, m));
  const I = String(((D = i == null ? void 0 : i.active) == null ? void 0 : D.selected_sticker_id) || ""), G = Md(i, uc(e)), R = _ ? G.find((ae) => String((ae == null ? void 0 : ae.id) || "") === I && (ae == null ? void 0 : ae.visible) !== !1) : null;
  _ && G.filter((ae) => ae !== R && (ae == null ? void 0 : ae.visible) !== !1 && (ae.external || ae.source_kind === "external_image")).filter((ae) => !cc(bs(e, ae.id, null, { external: !0 }))).forEach((ae) => V2(c, ae, N)), R && $2(c, R, N);
}
function Ng(e, t, n, r, i = 1) {
  let o = !1;
  e.strokeStyle = r, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const l = n.project(s);
    if (l.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(l.x, l.y) : (e.moveTo(l.x, l.y), o = !0);
  }
  e.stroke();
}
function W2(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let l = -75; l <= 75; l += 15) {
    const c = [];
    for (let m = -180; m <= 180; m += 4) c.push(Wn(m, l));
    Ng(e, c, t, l === 0 ? i : r, l === 0 ? 1.5 : 1);
  }
  for (let l = -180; l <= 180; l += 15) {
    const c = [];
    for (let m = -89; m <= 89; m += 4) c.push(Wn(l, m));
    Ng(e, c, t, r, l % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Wn(0, 0) },
    { name: "Right", dir: Wn(90, 0) },
    { name: "Back", dir: Wn(180, 0) },
    { name: "Left", dir: Wn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * n));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((l) => {
    const c = t.project(l.dir);
    c.z > 1e-4 && e.fillText(l.name, c.x, c.y + 24 * n);
  }), e.restore();
}
function Ld(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function K2(e, t, n = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), o = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && o >= r.height - n;
}
function ur(e, t) {
  return K2(e, t) ? !1 : (Ld(e), !0);
}
function Pg() {
  var n;
  const e = (n = qt == null ? void 0 : qt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function B2(e) {
  var n;
  if (!e) return;
  const t = (n = qt == null ? void 0 : qt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function U2(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !zb(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function Y2(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, s;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (s = e.setDirtyCanvas) == null || s.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Ag(e, t = null, n = 0, r = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && X2(e, 180, t);
    }
  };
}
function X2(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ka(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const q2 = /* @__PURE__ */ new WeakMap();
function Ub(e, t) {
  return ab(q2, e, t) ? !1 : (S2(e, t), Kb(e), Ka(e), !0);
}
async function J2(e) {
  var n, r;
  const t = await PN(e, qt, tn);
  t && (Ub(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function Z2(e, t = {}) {
  var ze;
  const n = t.__allowStandalone === !0, r = jb(e);
  if (r && !n) {
    Wf(e);
    return;
  }
  r && U2(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const s = {
    signature: wg(e)
  }, l = "dom", c = s.signature || wg(e);
  if (Number(e.__panoRebindGeneration || 0), Td(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Ed(e), e.__panoFrontendSig = c, e.__panoStickersPath = l, (ze = e.__panoDomPreview) != null && ze.widget || (e.__panoLegacyPreviewHooked && Al(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const m = t.noPreview === !0, p = m ? 0 : 56, h = m ? 0 : BN, y = document.createElement("div");
  if (a2(), y.className = "pano-node-preview-dom", y.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), m && y.classList.add("pano-node-preview--no-preview"), y.setAttribute("data-capture-wheel", "true"), y.tabIndex = 0, y.style.cssText = [
    "width:100%",
    m ? "height:auto" : "height:100%",
    h > 0 ? `min-height:${h}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), m) {
    const O = ac(Id(
      e.addDOMWidget(Od(), "preview", y, Ag(e, null))
    ));
    Ka(e), e.__panoDomPreview = { widget: O, root: y, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const S = document.createElement("div");
  S.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const _ = Nn({ label: "node.surface" });
  _.style.cssText = [
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
  const w = document.createElement("div");
  w.style.cssText = [
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
  ].join(";"), w.textContent = "Connect ERP image", S.appendChild(_), S.appendChild(w), y.appendChild(S);
  const N = iy(y), I = document.createElement("div");
  I && (I.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", I.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", y.appendChild(I)), s2(e, 120, 120), Ka(e);
  let G = null;
  try {
    Y2(e, p, () => {
      var O, pe;
      return (pe = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : pe.call(O);
    }), G = ac(Id(e.addDOMWidget(
      Od(),
      "preview",
      y,
      Ag(
        e,
        () => {
          var O, pe;
          return (pe = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : pe.call(O);
        },
        p,
        h,
        !1
      )
    )));
  } catch {
    return;
  }
  const R = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, $ = () => {
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(Pe)));
  }, b = Zy($), H = /* @__PURE__ */ da(i ? { ...Sb($n(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Mb($n(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((O) => ({ value: O, label: O }))
  });
  let W = null;
  if (i && e.__panoSceneStateV2) {
    const [O, pe] = [0, 1].map(() => {
      const $e = Nc(document, "node.playback");
      return $e.playsInline = !0, $e.preload = "auto", $e.crossOrigin = "anonymous", $e.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", S.appendChild($e), $e;
    }), de = Nn({ label: "node.still" });
    de.__panoFrameIdx = 0;
    const Ee = Nn({ label: "node.port-still" });
    Ee.__panoFrameIdx = 0;
    const Ke = WN({
      video: O,
      stickerVideo: pe,
      createImage: ($e, Xe) => {
        const rt = new Image();
        return rt.onload = Xe, rt.onerror = Xe, rt.src = $e, rt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: ($e) => requestAnimationFrame($e),
        cancelFrame: ($e) => cancelAnimationFrame($e)
      },
      readState: () => $n(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: $,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Xe;
        if (!(O.videoWidth > 0 && O.videoHeight > 0)) return;
        const $e = Math.min(1, i2 / O.videoWidth);
        de.width = Math.round(O.videoWidth * $e), de.height = Math.round(O.videoHeight * $e), (Xe = de.getContext("2d")) == null || Xe.drawImage(O, 0, 0, de.width, de.height), de.__panoFrameIdx += 1, $();
      },
      onStickerCapture: () => {
        var $e;
        pe.videoWidth > 0 && pe.videoHeight > 0 && (Ee.width = pe.videoWidth, Ee.height = pe.videoHeight, ($e = Ee.getContext("2d")) == null || $e.drawImage(pe, 0, 0), Ee.__panoFrameIdx += 1, $());
      },
      onChange: () => {
        H.playing = Ke.playing, $();
      }
    });
    W = { playback: Ke, video: O, still: de, stickerVideo: pe, stickerStill: Ee, stickerSource: "" }, e.__panoSurfacePlayback = W;
  }
  const ne = () => {
    var rt;
    const { playback: O, still: pe, stickerStill: de } = W, Ee = Pd(S, !!((rt = e.flags) != null && rt.collapsed)), Ke = O.source, $e = Ee ? j2(e) : null, Xe = O.follow({
      shown: Ee,
      sources: Ee ? z2(e) : [],
      state: $n(e),
      sticker: $e
    });
    (($e == null ? void 0 : $e.src) || "") !== W.stickerSource && (W.stickerSource = ($e == null ? void 0 : $e.src) || "", od(de)), O.source !== Ke && (od(pe), pe.__panoFrameIdx = 0), H.playable = Xe, H.playing = O.playing;
  }, Oe = () => {
    var pe, de;
    const O = ((pe = e.__panoOwnOutputVideoCache) == null ? void 0 : pe.player) ?? null;
    O && !Pd(S, !!((de = e.flags) != null && de.collapsed)) && O.pause(), i && (H.playable = !!O && !O.failed(), H.playing = !!(O != null && O.playing));
  }, D = () => {
    var O;
    W == null || W.playback.pause(), (O = e.__panoOwnOutputVideoCache) == null || O.player.pause();
  };
  let ae = null;
  const se = (i ? HN : ZN)({
    readState: () => $n(e),
    publishLiveState: (O) => {
      O ? (ae = O, e.__panoLiveStateOverride = O) : (e.__panoLiveStateOverride === ae && (e.__panoLiveStateOverride = null), ae = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, $();
    },
    commitState: (O) => {
      var Ee, Ke, $e, Xe;
      const pe = ta(e, "state_json");
      if (!pe) return;
      $y(e, O.active);
      const de = jy(e, O);
      Hy(e, de, String(pe.value ?? "")) || (pe.value = de, (Ee = pe.callback) == null || Ee.call(pe, de), e.__panoStateCache = null, (Ke = e.setDirtyCanvas) == null || Ke.call(e, !0, !0), (Xe = ($e = e.graph) == null ? void 0 : $e.setDirtyCanvas) == null || Xe.call($e, !0, !0));
    },
    onChange: (O) => Object.assign(H, O)
  }), Ce = i ? Lb(e, (O = "sync", pe = null) => {
    var Ct;
    if (!i || !e.graph || !se || se.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Et = yn(e, "external-sticker"), Ti = $n(e).stickers.find((Fi) => Fi.source.kind === "port");
      return se.apply({
        type: "sync-port",
        value: vb(e, {
          pose: Et ? is(e, "pano_sticker_input_pose", pe) : null,
          image: Ti ? bs(e, Ti.id, null, { external: !0 }) : null
        })
      });
    }
    const de = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Et) => String((Et == null ? void 0 : Et.name) || "") === "sticker_image") : -1, Ee = de >= 0 ? ((Ct = e.getInputLink(de)) == null ? void 0 : Ct.id) ?? null : null;
    if (Ee == null)
      return se.apply({ type: "sync-external", value: { connected: !1 } });
    if (!yn(e, "external-sticker")) return !1;
    const Ke = is(e, "pano_sticker_input_pose", pe), $e = Array.isArray(Ke) ? Ke[0] : Ke, Xe = String(is(e, "pano_sticker_input_state_hash", pe) ?? ""), rt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, _t = $n(e), Vt = (Array.isArray(_t == null ? void 0 : _t.stickers) ? _t.stickers : []).find((Et) => String((Et == null ? void 0 : Et.id) || "") === "sticker_image_1"), Gt = bs(e, "sticker_image_1", null, { external: !0 }), An = $e && typeof $e == "object" ? $e : Vt || { yaw_deg: rt.yaw, pitch_deg: rt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return se.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ee,
        stateHash: Xe,
        pose: An,
        imageWidth: Number((Gt == null ? void 0 : Gt.naturalWidth) || (Gt == null ? void 0 : Gt.width) || 0),
        imageHeight: Number((Gt == null ? void 0 : Gt.naturalHeight) || (Gt == null ? void 0 : Gt.height) || 0)
      }
    });
  }) : () => {
  };
  let xe = 0;
  const be = async (O) => {
    if (!i || !se || !Mr(O)) return !1;
    D();
    const pe = `asset_${Math.random().toString(16).slice(2, 10)}`, de = `st_${Math.random().toString(16).slice(2, 10)}`, Ee = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    xe += 1, H.importing = !0;
    const Ke = Ga(e, `add:${pe}`, async () => {
      const $e = await Wa(O), Xe = await oo(O, {
        fetchApi: (rt, _t) => tn.fetchApi(rt, _t)
      });
      return je(), se.apply({
        type: "add-sticker",
        value: {
          stickerId: de,
          assetId: pe,
          asset: Xe,
          imageWidth: $e.width,
          imageHeight: $e.height,
          yaw_deg: Number(Ee.yaw || 0),
          pitch_deg: Number(Ee.pitch || 0)
        }
      });
    });
    try {
      return await Ke;
    } catch {
      return !1;
    } finally {
      xe = Math.max(0, xe - 1), H.importing = xe > 0, $();
    }
  };
  let oe = null, L = null, F = null, fe = !1;
  const Ae = () => {
    var O;
    return F && (clearTimeout(F), F = null), fe ? (fe = !1, ((O = se == null ? void 0 : se.commitGesture) == null ? void 0 : O.call(se)) ?? !1) : !1;
  }, je = () => {
    var Ee, Ke, $e;
    const O = Ae(), pe = (oe == null ? void 0 : oe.pointerId) ?? (L == null ? void 0 : L.pointerId);
    if (oe = null, L = null, pe != null) {
      try {
        (Ee = _.hasPointerCapture) != null && Ee.call(_, pe) && ((Ke = _.releasePointerCapture) == null || Ke.call(_, pe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const de = (($e = se == null ? void 0 : se.commitGesture) == null ? void 0 : $e.call(se)) ?? !1;
    return O || de;
  }, Je = () => {
    var Ee, Ke, $e;
    const O = Ae(), pe = oe == null ? void 0 : oe.pointerId;
    if (oe = null, pe != null) {
      try {
        (Ee = _.hasPointerCapture) != null && Ee.call(_, pe) && ((Ke = _.releasePointerCapture) == null || Ke.call(_, pe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const de = (($e = se == null ? void 0 : se.cancelGesture) == null ? void 0 : $e.call(se)) ?? !1;
    return O || de;
  }, le = () => je();
  se && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(le));
  let z = null, x = !1;
  if (I && se)
    try {
      zf(), z = rf(i ? kP : gP, {
        model: H,
        onAction: (O) => {
          var Ee, Ke, $e;
          if ((O == null ? void 0 : O.type) === "toggle-playback") {
            je(), W ? W.playback.toggle() : (Ee = e.__panoOwnOutputVideoCache) == null || Ee.player.toggle(), $();
            return;
          }
          if (D(), (O == null ? void 0 : O.type) === "open-editor") {
            je(), i || (H.aspectOpen = !1), (Ke = e.__panoOpenEditor) == null || Ke.call(e);
            return;
          }
          if (i) {
            if ((O == null ? void 0 : O.type) === "add-image-file") {
              be(O.file);
              return;
            }
            se.apply(O) && $();
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
          let pe = O;
          if ((O == null ? void 0 : O.type) === "add-frame") {
            const Xe = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            pe = {
              ...O,
              ...YN(Xe, {
                width: _.width,
                height: _.height
              })
            };
          } else if ((O == null ? void 0 : O.type) === "delete-frame") {
            const Xe = yo($n(e));
            Xe && (e.__panoPreviewView = Pb(Xe, {
              width: _.width,
              height: _.height
            }));
          }
          const de = (($e = e.__panoCutoutNodeFrame) == null ? void 0 : $e.safeRect) || null;
          H.aspectOpen = !1, se.apply({ ...pe, safeRect: de }) && $();
        }
      }), z.mount(I), x = !0;
    } catch {
      z = null, x = !1;
    }
  const he = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    W && ne(), $();
  }) : null;
  he == null || he.observe(S);
  const Pe = (O) => {
    var de, Ee;
    R.raf = 0, R.inTick = !0;
    let pe = !1;
    try {
      pe = Te.stepInertia(O), (R.needsDraw || pe) && (R.needsDraw = !1, W ? ne() : Oe(), (de = e.flags) != null && de.collapsed || G2(e, _, b), H.viewUnavailable = b.failed);
    } finally {
      R.inTick = !1;
    }
    (pe || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(Pe)), o2() && (!e.__panoDebugLastTs || O - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = O, e.__panoPreviewMode, Ed(e), Va(y), Va(S), Va(_), Va(y.parentElement), Va((Ee = y.parentElement) == null ? void 0 : Ee.parentElement), Number(_.width || 0), Number(_.height || 0), void 0);
  }, Te = uf({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (O) => {
      e.__panoPreviewView = O;
    },
    getViewportSize: () => {
      const O = _.getBoundingClientRect();
      return {
        w: Math.max(1, Number(O.width || _.clientWidth || 0)),
        h: Math.max(1, Number(O.height || _.clientHeight || 0))
      };
    },
    getInvert: () => {
      const O = Sg();
      return {
        x: O.invert_view_x ? -1 : 1,
        y: O.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      $();
    }
  }), te = i ? S : y, ke = (O) => {
    const pe = _.getBoundingClientRect();
    return {
      x: (Number(O.clientX) - pe.left) * (_.width / Math.max(1, pe.width)),
      y: (Number(O.clientY) - pe.top) * (_.height / Math.max(1, pe.height))
    };
  }, A = (O) => {
    var Ee, Ke;
    if (!i || !o) return;
    const pe = $n(e), de = gg(
      Md(pe, uc(e)),
      String(((Ee = pe == null ? void 0 : pe.active) == null ? void 0 : Ee.selected_sticker_id) || ""),
      ke(O),
      Dd(e, _.width, _.height)
    );
    if (!de) {
      _.style.cursor = "grab";
      return;
    }
    if (((Ke = de.item) == null ? void 0 : Ke.locked) === !0) {
      _.style.cursor = "default";
      return;
    }
    _.style.cursor = de.hit.cursor || "default";
  };
  _.addEventListener("pointerdown", (O) => {
    var rt, _t, Vt, Gt, An, Ot, Ct, Et, Ti, Fi, Ms;
    if (!ur(O, te) || O.button !== 0) return;
    if (!i) {
      const Cn = yo($n(e)), ir = e.__panoCutoutNodeFrame;
      if (!Cn) {
        (rt = y.focus) == null || rt.call(y, { preventScroll: !0 }), (_t = _.setPointerCapture) == null || _t.call(_, O.pointerId), _.style.cursor = "grabbing", Te.startDrag(O.clientX, O.clientY, O.pointerId);
        return;
      }
      if (Cn.locked === !0 || !ir || !se) return;
      const ga = ke(O);
      let ya;
      if (O.shiftKey) {
        const Di = Cb({
          frame: ir,
          point: ga,
          startRollDeg: Number(Cn.roll_deg ?? Cn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Di) return;
        ya = { kind: "roll", pointerId: O.pointerId, rollGesture: Di };
      } else {
        const Di = ((Vt = $n(e)) == null ? void 0 : Vt.ui_settings) || Sg();
        ya = {
          kind: "pan",
          pointerId: O.pointerId,
          startPoint: ga,
          startShot: { ...Cn },
          focalPx: ho(ir, Cn),
          invertX: Di.invert_view_x === !0,
          invertY: Di.invert_view_y === !0
        };
      }
      je(), (Gt = y.focus) == null || Gt.call(y, { preventScroll: !0 }), (An = _.setPointerCapture) == null || An.call(_, O.pointerId), _.style.cursor = "grabbing", se.beginGesture(), oe = ya;
      return;
    }
    if (!o) return;
    const pe = ke(O), de = $n(e), Ee = String(((Ot = de == null ? void 0 : de.active) == null ? void 0 : Ot.selected_sticker_id) || ""), Ke = Dd(e, _.width, _.height);
    (Ct = y.focus) == null || Ct.call(y, { preventScroll: !0 });
    const $e = () => gg(Md(de, uc(e)), Ee, pe, Ke);
    let Xe = $e();
    if (Xe && (W != null && W.playback.playing) && (D(), Xe = $e()), Xe && se) {
      if (Te.stopMotion(), je(), String(((Et = Xe.item) == null ? void 0 : Et.id) || "") !== Ee && se.apply({ type: "select-sticker", id: Xe.item.id }), ((Ti = Xe.item) == null ? void 0 : Ti.locked) === !0) {
        $();
        return;
      }
      const Cn = pe, ir = Xe.geometry.center;
      L = {
        active: !0,
        kind: Xe.hit.kind,
        pointerId: O.pointerId,
        startPoint: Cn,
        startCenter: { ...ir },
        startSticker: { ...Xe.item },
        startDistance: Math.max(1, Math.hypot(Cn.x - ir.x, Cn.y - ir.y)),
        startAngle: Math.atan2(Cn.y - ir.y, Cn.x - ir.x),
        projection: Ke
      }, se.beginGesture(), (Fi = _.setPointerCapture) == null || Fi.call(_, O.pointerId), _.style.cursor = Xe.hit.kind === "rotate" ? "grabbing" : Xe.hit.kind === "move" ? "move" : Xe.hit.cursor, $();
      return;
    }
    (Ms = _.setPointerCapture) == null || Ms.call(_, O.pointerId), _.style.cursor = "grabbing", Te.startDrag(O.clientX, O.clientY, O.pointerId);
  }), _.addEventListener("pointermove", (O) => {
    if (!i) {
      if (!oe) {
        if (!Te.state.drag.active) return;
        ur(O, te), Te.moveDrag(O.clientX, O.clientY, "pano");
        return;
      }
      if (oe.pointerId !== O.pointerId || !se) return;
      if (ur(O, te), oe.kind === "pan") {
        const de = ke(O);
        se.updateGesture({
          type: "pan-camera",
          startShot: oe.startShot,
          dx: de.x - oe.startPoint.x,
          dy: de.y - oe.startPoint.y,
          focalPx: oe.focalPx,
          invertX: oe.invertX,
          invertY: oe.invertY
        });
        return;
      }
      const pe = Ib(oe.rollGesture, ke(O), O);
      if (!pe) return;
      oe.rollGesture = pe.gesture, se.updateGesture({ type: "set-roll", value: pe.rollDeg });
      return;
    }
    if (!L && !Te.state.drag.active) {
      A(O);
      return;
    }
    if (L) {
      if (L.pointerId !== O.pointerId || !se) return;
      ur(O, te);
      const pe = ke(O);
      let de = L.startSticker;
      if (L.kind === "move")
        de = AP(
          L.startSticker,
          {
            x: L.startCenter.x + pe.x - L.startPoint.x,
            y: L.startCenter.y + pe.y - L.startPoint.y
          },
          L.projection
        );
      else if (L.kind === "scale") {
        const Ee = Math.hypot(pe.x - L.startCenter.x, pe.y - L.startCenter.y);
        de = CP(L.startSticker, L.startDistance, Ee);
      } else if (L.kind === "rotate") {
        const Ee = Math.atan2(pe.y - L.startCenter.y, pe.x - L.startCenter.x);
        de = IP(L.startSticker, L.startAngle, Ee, O.shiftKey === !0);
      }
      se.updateGesture({ type: "set-transform", value: de }), $();
      return;
    }
    !o || !Te.state.drag.active || (ur(O, te), Te.moveDrag(O.clientX, O.clientY, "pano"));
  });
  const E = () => {
    var pe, de;
    if (!oe && !L) {
      if (!Te.state.drag.active) return;
      Te.endDrag(), _.style.cursor = "grab", $();
      return;
    }
    if (!se) return;
    const O = (oe == null ? void 0 : oe.pointerId) ?? (L == null ? void 0 : L.pointerId);
    oe = null, L = null;
    try {
      (pe = _.hasPointerCapture) != null && pe.call(_, O) && ((de = _.releasePointerCapture) == null || de.call(_, O));
    } catch {
    }
    se.cancelGesture(), _.style.cursor = "grab", $();
  }, B = (O, pe = !1) => {
    var de, Ee, Ke, $e;
    if (!i) {
      if (!oe) {
        if (!Te.state.drag.active) return;
        ur(O, te), (de = _.releasePointerCapture) == null || de.call(_, O.pointerId), _.style.cursor = "grab", Te.endDrag(), $();
        return;
      }
      if (oe.pointerId !== O.pointerId || !se) return;
      ur(O, te), oe = null, (Ee = _.releasePointerCapture) == null || Ee.call(_, O.pointerId), _.style.cursor = "grab", pe ? se.cancelGesture() : se.commitGesture(), A(O), $();
      return;
    }
    if (L) {
      if (L.pointerId !== O.pointerId || !se) return;
      ur(O, te), L = null, (Ke = _.releasePointerCapture) == null || Ke.call(_, O.pointerId), _.style.cursor = "grab", pe ? se.cancelGesture() : se.commitGesture(), $();
      return;
    }
    !o || !Te.state.drag.active || (ur(O, te), ($e = _.releasePointerCapture) == null || $e.call(_, O.pointerId), _.style.cursor = "grab", Te.endDrag(), $());
  };
  _.addEventListener("pointerup", B), _.addEventListener("pointercancel", (O) => B(O, !0)), _.addEventListener("lostpointercapture", E), _.addEventListener("pointerleave", (O) => {
    !i && oe || L || Te.state.drag.active && B(O);
  });
  const ue = (O) => {
    const pe = document.activeElement;
    if (pe !== y && !y.contains(pe)) return;
    if (O.key === "Escape" && (oe || L) && se) {
      E(), Ld(O);
      return;
    }
    if (!i || O.key !== "Delete" && O.key !== "Backspace" || !se) return;
    const de = O.target, Ee = String((de == null ? void 0 : de.tagName) || "").toUpperCase();
    Ee === "INPUT" || Ee === "TEXTAREA" || de != null && de.isContentEditable || H.canDelete === !0 && (D(), je(), se.apply({ type: "delete-selected" }) && $(), Ld(O));
  };
  window.addEventListener("keydown", ue, !0);
  const T = e2({
    requestFrame: (O) => requestAnimationFrame(O),
    cancelFrame: (O) => cancelAnimationFrame(O),
    restore: (O) => B2(O)
  }), X = (O) => {
    var de, Ee, Ke, $e, Xe, rt;
    if (!ur(O, te)) return;
    if (!i) {
      const _t = yo($n(e));
      if (_t && _t.locked !== !0 && se) {
        const Vt = Hl(O);
        Vt !== 0 && (fe || (je(), se.beginGesture(), fe = !0), se.updateGesture({
          type: "step-fov",
          direction: Vt
        }) ? (F && clearTimeout(F), F = setTimeout(Ae, 180), $()) : se.hasGestureChanges() || (se.cancelGesture(), fe = !1));
      } else if (!_t) {
        const Vt = Pg();
        Te.applyWheelEvent(O) && $(), T.schedule(Vt);
      }
      (de = O.preventDefault) == null || de.call(O), (Ee = O.stopPropagation) == null || Ee.call(O), (Ke = O.stopImmediatePropagation) == null || Ke.call(O);
      return;
    }
    if (!o) return;
    const pe = Pg();
    Te.applyWheelEvent(O) && $(), ($e = O.preventDefault) == null || $e.call(O), (Xe = O.stopPropagation) == null || Xe.call(O), (rt = O.stopImmediatePropagation) == null || rt.call(O), T.schedule(pe);
  }, ie = i ? [S, _] : [S];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((O) => {
    ie.forEach((pe) => pe.addEventListener(O, X, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((O) => {
    _.addEventListener(O, (pe) => ur(pe, te)), S.addEventListener(O, (pe) => ur(pe, te));
  });
  const K = ta(e, "state_json");
  let q = null, U = null;
  K && !K.__panoPreviewPatchedCb && (q = K.callback, U = (O) => {
    const pe = q ? q(O) : void 0;
    return $(), pe;
  }, K.callback = U, K.__panoPreviewPatchedCb = U);
  const Q = ta(e, "bg_color");
  let re = null, _e = null;
  Q && !Q.__panoPreviewPatchedCb && (re = Q.callback, _e = (O) => {
    const pe = re ? re(O) : void 0;
    return $(), pe;
  }, Q.callback = _e, Q.__panoPreviewPatchedCb = _e);
  const Fe = e.onRemoved, Le = e.onResize, Ge = e.onExecuted, Qe = e.onDragOver, Re = e.onDragDrop;
  let We = null;
  const lt = () => {
    i && (H.dropActive = !0, We && clearTimeout(We), We = setTimeout(() => {
      We = null, H.dropActive = !1;
    }, 140));
  }, M = i ? function(O) {
    return (Qe ? Qe.apply(this, arguments) : !1) === !0 ? !0 : Hf(O == null ? void 0 : O.dataTransfer) ? (lt(), !0) : !1;
  } : null, Y = i ? function(O) {
    var Ee;
    if ((Re ? Re.apply(this, arguments) : !1) === !0) return !0;
    const de = Array.from(((Ee = O == null ? void 0 : O.dataTransfer) == null ? void 0 : Ee.files) || []).find((Ke) => Mr(Ke));
    return de ? (We && clearTimeout(We), We = null, H.dropActive = !1, be(de), !0) : !1;
  } : null;
  i && (e.onDragOver = M, e.onDragDrop = Y);
  const d = i ? QP(y, {
    onActive: (O) => {
      if (O) {
        lt();
        return;
      }
      We && clearTimeout(We), We = null, H.dropActive = !1;
    },
    onDrop: (O) => {
      be(O);
    }
  }) : () => {
  }, Z = function(O) {
    e.__panoOutputFromRun = !0;
    const pe = Ub(e, O);
    pi(e, pe ? "executed" : "sync", O), $();
    const de = Ge ? Ge.apply(this, arguments) : void 0;
    return Ka(e), de;
  };
  e.onExecuted = Z;
  const C = e.onConnectionsChange, J = function(O, pe) {
    const de = ig(e, O, pe, Of), Ee = ig(e, O, pe, Ei), Ke = arguments, $e = C ? C.apply(this, Ke) : void 0, Xe = () => {
      R.destroyed || (Ee && N2(e), de && pi(e, "connection-change"), Ka(e), $());
    };
    return Xe(), queueMicrotask(Xe), $e;
  };
  e.onConnectionsChange = J;
  const Se = function() {
    const O = Le ? Le.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, $(), O;
  };
  e.onResize = Se;
  const ge = function() {
    return Ve(), Fd.unregister(this), Fe ? Fe.apply(this, arguments) : void 0;
  };
  e.onRemoved = ge;
  const Ve = () => {
    var O, pe, de, Ee, Ke, $e, Xe, rt, _t;
    R.destroyed = !0, (O = he == null ? void 0 : he.disconnect) == null || O.call(he), i ? je() : Je(), _.removeEventListener("lostpointercapture", E), d(), N(), window.removeEventListener("keydown", ue, !0), (de = (pe = e.__panoStateFlushers) == null ? void 0 : pe.delete) == null || de.call(pe, le), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ee = se == null ? void 0 : se.destroy) == null || Ee.call(se), (Ke = z == null ? void 0 : z.unmount) == null || Ke.call(z), W && (W.playback.dispose(), W.video.remove(), W.stickerVideo.remove(), e.__panoSurfacePlayback === W && (e.__panoSurfacePlayback = null)), b.dispose(), e.__panoSurfaceScene = null, (Xe = ($e = e.__panoRasterObjectSurfaceCache) == null ? void 0 : $e.dispose) == null || Xe.call($e), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Ce(), T.dispose(), We && clearTimeout(We), We = null, Gf.disposeOwner(e), na(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((rt = e.__panoCutoutNodeSurface) == null ? void 0 : rt.session) === se && (e.__panoCutoutNodeSurface = null), ((_t = e.__panoStickersNodeSurface) == null ? void 0 : _t.session) === se && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Se && (e.onResize = Le), e.onExecuted === Z && (e.onExecuted = Ge), e.onConnectionsChange === J && (e.onConnectionsChange = C), U && (K == null ? void 0 : K.callback) === U && (K.callback = q), U && (K == null ? void 0 : K.__panoPreviewPatchedCb) === U && delete K.__panoPreviewPatchedCb, _e && (Q == null ? void 0 : Q.callback) === _e && (Q.callback = re), _e && (Q == null ? void 0 : Q.__panoPreviewPatchedCb) === _e && delete Q.__panoPreviewPatchedCb, e.onDragOver === M && (e.onDragOver = Qe), e.onDragDrop === Y && (e.onDragDrop = Re), e.onRemoved === ge && (e.onRemoved = Fe);
  };
  e.__panoDomRestore = Ve, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = se && x && !i ? { session: se, model: H } : null, e.__panoStickersNodeSurface = se && x && i ? { session: se, model: H } : null, e.__panoDomPreview = {
    widget: G,
    root: y,
    canvas: _,
    requestDraw: $,
    state: R,
    emptyHintEl: w,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Fd.register(e), e.graph && pi(e, "attach"), $();
}
function Cg(e, t = {}) {
  Hb(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Ig(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (jb(e) && !n) {
    Wf(e);
    return;
  }
  Hb(e).attach(t);
}
function Q2(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function eA(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), c = Math.max(0, Number.isFinite(s) ? s : 0) * o, m = Math.max(0, Number.isFinite(l) ? l : 0) * o, p = Number(n), h = p > 0 ? p : 1 / 0, y = Math.max(c, m);
  let S = y > 0 ? Math.min(1, h / y) : 1;
  return r && c > 0 && m > 0 && (S = Math.min(S, r.width * o / c, r.height * o / m)), {
    width: Math.max(1, Math.round(c * S)),
    height: Math.max(1, Math.round(m * S))
  };
}
function tA({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var S;
  const i = typeof n == "function" ? n : () => {
  }, o = typeof r == "function" ? r : () => {
  };
  let s = !1, l = null;
  const c = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, m = () => {
    const _ = c();
    return _ === l || (l = _, i(_)), _;
  }, p = () => m();
  return (S = t == null ? void 0 : t.addEventListener) == null || S.call(t, "fullscreenchange", p), m(), { toggle: async () => {
    var _;
    if (s || !e || !t) return !1;
    if (c()) {
      try {
        await ((_ = t.exitFullscreen) == null ? void 0 : _.call(t));
      } catch {
      }
      return s ? !1 : (m(), c());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), s) return !1;
        if (c())
          return m(), !0;
      } catch {
      }
    return s || (o(), m()), !1;
  }, isActive: c, destroy: () => {
    var _, w, N;
    if (!s) {
      if (s = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", p), c())
        try {
          const I = (w = t.exitFullscreen) == null ? void 0 : w.call(t);
          (N = I == null ? void 0 : I.catch) == null || N.call(I, () => {
          });
        } catch {
        }
      l = !1, i(!1);
    }
  } };
}
const nA = { class: "pano-preview-node-surface" }, rA = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (Ie(), De("div", nA, [
      et(dn, {
        icon: e.model.fullscreen ? ft(Ue).fullscreen_close : ft(Ue).fullscreen,
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
      e.model.viewUnavailable ? (Ie(), gr(Rf, { key: 0 })) : xt("", !0)
    ]));
  }
}, sl = 140, iA = 180, Og = 40, Ru = 10;
function Eg(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Tg(e, t) {
  const n = Eg(e), r = Eg(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Fg(e) {
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
  return typeof ((o = tn) == null ? void 0 : o.apiURL) == "function" ? tn.apiURL(i) : i;
}
function ra(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ra(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Fg({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ra(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Fg(e);
}
function Yb(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function oA(e) {
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
function Rd(e) {
  var i;
  const t = (i = Qn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Tg(o, n)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Tg(o, n)) return t[o];
  return null;
}
function aA(e) {
  var r, i;
  const t = Rd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of n)
    if (Array.isArray(o))
      for (const s of o) {
        const l = ra(s);
        if (l && /\.mp4(\?|$)/i.test(l) || l && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return l;
      }
  return "";
}
function sA(e, t = "erp_image") {
  var S, _, w, N, I, G, R;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex(($) => String(($ == null ? void 0 : $.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex(($, b) => String(($ == null ? void 0 : $.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(b))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (w = (_ = (S = Qn) == null ? void 0 : S.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : w.call(_, o), l = Rd(o), c = Rd(e == null ? void 0 : e.id), m = [
    (N = c == null ? void 0 : c.ui) == null ? void 0 : N.pano_input_images,
    c == null ? void 0 : c.pano_input_images,
    l == null ? void 0 : l.images,
    (I = l == null ? void 0 : l.ui) == null ? void 0 : I.pano_input_images,
    l == null ? void 0 : l.pano_input_images
  ];
  for (const $ of m)
    if (Array.isArray($))
      for (const b of $) {
        const H = ra(b);
        if (H) return H;
      }
  let p = [];
  try {
    p = typeof ((G = Qn) == null ? void 0 : G.getNodeImageUrls) == "function" ? Qn.getNodeImageUrls(s) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const $ of p) {
      const b = ra($);
      if (b) return b;
    }
  if (s) {
    const $ = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const b of $) {
      const H = ra(b);
      if (H) return H;
    }
  }
  const h = (R = s == null ? void 0 : s.widgets) == null ? void 0 : R.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image"), y = String((h == null ? void 0 : h.value) || "").trim();
  return y ? tn.apiURL(`/view?filename=${encodeURIComponent(y)}&type=input&subfolder=`) : "";
}
function Vu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Dg(e, t, n, r, i, o, s) {
  var m, p, h;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Yb(o) || n <= 1 || r <= 1) {
    Vu(t, n, r);
    return;
  }
  if (s.failed) {
    Vu(t, n, r);
    return;
  }
  const l = Number(((h = (p = (m = e == null ? void 0 : e.widgets) == null ? void 0 : m.find) == null ? void 0 : p.call(m, (y) => (y == null ? void 0 : y.name) === "coverage")) == null ? void 0 : h.value) || 360) === 180 ? 180 : 360, c = s.render({
    width: n,
    height: r,
    camera: tc(i, n, r),
    background: { media: o, revision: oA(o), coverage: l },
    layers: []
  });
  c ? t.drawImage(c.canvas, c.x, c.y, c.width, c.height, 0, 0, n, r) : Vu(t, n, r);
}
function Lg(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class lA {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Zy(() => this.requestDraw()), this.controller = uf({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ut(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Me(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Me(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, s, l;
        const r = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((s = this.canvas) == null ? void 0 : s.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((l = this.canvas) == null ? void 0 : l.clientHeight) || 0))
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
      const s = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onConnectionsChange = function() {
      const s = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onResize = function() {
      const s = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), s;
    }, this.node.onRemoved = function() {
      const s = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), s;
    };
    const n = ((o = (i = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...s) => {
      const l = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), l;
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
        `min-height:${sl}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = Nn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return sl;
        },
        getHeight() {
          return sl;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = ac(Id(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = r ? r(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(sl, Number(o.minHeight || 0)),
            minWidth: Math.max(iA, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, i, o, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return zf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ da({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = tA({
        root: this.root,
        documentRef: document,
        onChange: (l) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = l), this.requestDraw();
        },
        onFallback: () => {
          var l, c;
          return (c = (l = this.options).onOpen) == null ? void 0 : c.call(l, this.node);
        }
      }), this.surfaceApp = rf(rA, {
        model: this.surfaceModel,
        onAction: (l) => {
          var c, m;
          (l == null ? void 0 : l.type) === "toggle-fullscreen" && ((m = (c = this.fullscreenController) == null ? void 0 : c.toggle) == null || m.call(c));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var l, c;
          return (c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null ? void 0 : c.call(l);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = iy(n), t.addEventListener("pointerdown", (o) => {
      var s, l, c;
      o.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (l = t.setPointerCapture) == null || l.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
    const r = (o) => {
      var s, l;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var s;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var s;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }), n.addEventListener("keydown", (o) => {
      var s;
      Q2(o, n) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Yb(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Pd(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = Qn.canvas) != null && r.graph) || this.node.graph === Qn.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var s;
      const i = t.localPoint(r);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Lg(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(r);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, i) {
      var c, m, p, h, y, S;
      const o = O2(this, n, r, i), s = t.getLegacyPreviewRect();
      if (!o || !Lg(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((c = t.view) == null ? void 0 : c.fov) || 100);
      const l = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((m = t.view) == null ? void 0 : m.fov) || 100), l && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (h = n == null ? void 0 : n.preventDefault) == null || h.call(n), (y = n == null ? void 0 : n.stopPropagation) == null || y.call(n), (S = n == null ? void 0 : n.stopImmediatePropagation) == null || S.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, o, s;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - Ru * 2), n = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - Og - Ru);
    return { x: Ru, y: Og, w: t, h: n };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Dg(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Jy : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = eA(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = aA(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const l = Nc(document, "preview-node.video");
      l.muted = !0, l.loop = !0, l.preload = "auto", l.playsInline = !0, l.crossOrigin = "anonymous";
      const c = () => {
        this.imgSrc === t && (this.img = l, this.requestDraw());
      }, m = () => this.requestDraw();
      l.addEventListener("loadedmetadata", c), l.addEventListener("loadeddata", c), l.addEventListener("timeupdate", m), l.addEventListener("play", m), l.addEventListener("pause", m), l.src = t, l.load(), this.mediaCleanup = () => {
        l.pause(), l.removeEventListener("loadedmetadata", c), l.removeEventListener("loadeddata", c), l.removeEventListener("timeupdate", m), l.removeEventListener("play", m), l.removeEventListener("pause", m), l.removeAttribute("src"), l.load();
      };
      return;
    }
    const n = sA(this.node, this.imageInputName);
    if (!n) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Dg(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, o, s, l, c, m, p, h, y, S, _, w, N, I;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (l = this.wheelCaptureCleanup) == null || l.call(this), this.wheelCaptureCleanup = null, (m = (c = this.surfaceApp) == null ? void 0 : c.unmount) == null || m.call(c), this.surfaceApp = null, (h = (p = this.surfaceHost) == null ? void 0 : p.remove) == null || h.call(p), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (y = this.mediaCleanup) == null || y.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (S = this.root) == null ? void 0 : S.remove) == null || _.call(S);
    } catch {
    }
    try {
      $b(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((I = (N = (w = this.node) == null ? void 0 : w.widgets) == null ? void 0 : N.find) == null ? void 0 : I.call(N, (G) => (G == null ? void 0 : G.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function cA(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new lA(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Xb(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const l = i ? i.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return l;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const l = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return l;
  };
  const s = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const l = s ? s.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return l;
  };
}
function Bf(e) {
  return !!(e != null && e.prototype);
}
function vs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function uA(e, t = {}) {
  Bf(e) || cA(e, {
    ...t,
    onOpen: vs(e, t.onOpen)
  });
}
function dA(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Bf(e)) {
    Ig(e, {
      ...r,
      onOpen: vs(e, t.onOpen)
    });
    return;
  }
  Xb(e, "stickers_node_preview", (i) => {
    Ig(i, {
      ...r,
      onOpen: vs(i, t.onOpen)
    });
  });
}
function fA(e, t = {}) {
  if (!Bf(e)) {
    Cg(e, {
      ...t,
      onOpen: vs(e, t.onOpen)
    });
    return;
  }
  Xb(e, "cutout_preview", (n) => {
    Cg(n, {
      ...t,
      onOpen: vs(n, t.onOpen)
    });
  });
}
const Hn = {
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
}, oi = "pen";
function Rg(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function pA({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [s, l] of Object.entries(n))
      r.delete(s) && l();
  }
  return {
    request(s) {
      r.add(s), i ?? (i = e(o));
    },
    cancel() {
      r.clear(), i !== null && t(i), i = null;
    }
  };
}
const Pt = Object.freeze({
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
}), hA = new Set(Object.values(Pt));
function mA({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, l = !1, c = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map(), p = 1, h = 0;
  function y(w) {
    try {
      w();
    } catch (N) {
      i(N);
    }
  }
  function S() {
    !o && !s && !l && (o = e(_));
  }
  function _(w) {
    o = 0, s = !0;
    try {
      const N = m;
      m = /* @__PURE__ */ new Map();
      for (const G of N.values()) y(() => G(w));
      if (l) return;
      const I = c;
      c = /* @__PURE__ */ new Set(), (I.size || r()) && y(() => n(w, I));
    } finally {
      s = !1;
    }
    (c.size || m.size || r()) && S();
  }
  return {
    requestDraw(w) {
      if (!hA.has(w)) throw new Error(`Unknown draw reason: ${w}`);
      w === Pt.STATE && (h += 1), c.add(w), S();
    },
    requestFrame(w) {
      const N = p++;
      return m.set(N, w), S(), N;
    },
    cancelFrame(w) {
      m.delete(w);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      S();
    },
    get stateRevision() {
      return h;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      l = !0, o && t(o), o = 0, m.clear(), c.clear();
    }
  };
}
const gA = 250, yA = 600, bA = 180, vA = 2;
function _A(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ba(e, t, n) {
  return e + (t - e) * n;
}
function SA(e, t, n = 1) {
  const r = Math.max(
    Math.abs(cf(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, l) => s - e.position[l])) / Math.max(n, 1e-6), o = Math.min(1, r / bA + i / vA);
  return Math.round(Ba(gA, yA, o));
}
function wA(e, t, n) {
  const r = _A(Me(n, 0, 1));
  return {
    position: e.position.map((i, o) => Ba(i, t.position[o], r)),
    yaw_deg: Ut(e.yaw_deg + cf(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: Ba(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: Ba(e.hFOV_deg, t.hFOV_deg, r),
    distance: Ba(e.distance, t.distance, r)
  };
}
function xA(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(cf(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function kA(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return xA(e, t) ? null : { from: e, to: t, startTs: n, durationMs: SA(e, t, r), end: i };
}
function MA(e, t) {
  const n = Me((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: wA(e.from, e.to, n), done: !1 };
}
function Cl(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function NA(e, t, n) {
  const r = Cl(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function Vo(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function PA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function AA({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: l,
  isActiveLassoTool: c
}) {
  var R, $;
  const m = e.primaryTool === "paint" || e.primaryTool === "mask", p = {
    visible: m,
    activePane: m ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: m ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (b, H) => ({ index: H, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!m) return p;
  const h = ((R = t.find((b) => i(e.paintColor, b.color))) == null ? void 0 : R.id) || "", y = !h, S = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number((($ = e.customPaintColor) == null ? void 0 : $.a) ?? 1))) * 100), w = l(e.primaryTool === "paint" ? e.paintTool : e.maskTool), N = e.brushSizes[w] ?? 10, I = c(), G = Array.from({ length: 8 }, (b, H) => e.customPaintHistory[H] || null);
  return {
    ...p,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: h,
    customColorActive: y,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...s(S.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, S.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, S.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, S.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, S.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, S.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, S.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: G.map((b, H) => ({
      index: H,
      color: b ? { cssColor: r(b, 1) } : null
    })),
    sizeValue: N,
    sizeText: String(N),
    sizeFill: `${Math.max(0, Math.min(100, (N - 1) / 119 * 100))}%`,
    sizeDisabled: I,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function CA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const IA = {
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
function OA(e) {
  const t = [];
  for (const n of e) {
    const [r, i, o] = IA[n.key] || [], s = t[t.length - 1];
    r && (s != null && s.grouped) && s.label === r ? s.fields.push({ ...n, short: i, drag: o }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: o }] });
  }
  return t;
}
function $u(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function EA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
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
        icon: o ? Ue.eye : Ue.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function TA({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let o = null;
  return r && i && (n ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function FA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const ia = "erp", DA = ["1:1", "4:3", "3:2", "16:9"];
function qb(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...DA.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: ia, label: Number(n) === 180 ? "180°" : "360°", active: e === ia }] : []
  ];
}
function LA({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: l,
  uiSettings: c,
  normalizeCoverageValue: m
}) {
  return {
    coverage: { value: m(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: OA(s),
    notes: l,
    paramsDisabled: !r,
    uiSettings: t ? null : c,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function RA({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: i,
  allLocked: o,
  anyLocked: s,
  selectedLocked: l,
  activeAspect: c,
  cutoutAspectOpen: m,
  isExternalSticker: p,
  isStickerHidden: h,
  canRestoreSelectedToInitial: y,
  iconSet: S,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: _ = !1,
  cameraDeletable: w = !1,
  erpChoice: N = !1,
  coverage: I = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let G = [];
  if (n.length > 1)
    G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete, disabled: !!s }
    ];
  else if (r === "stroke")
    G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back, disabled: !!l },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete, disabled: !!l }
    ];
  else if (r === "image") {
    if (G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back, disabled: !!l }
    ], p(t) || (G.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), G.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), p(t)) {
      const R = y(), $ = h(t);
      G.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !R
      }), G.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: $ ? "Show" : "Hide",
        tip: $ ? "Show input image" : "Hide input image",
        icon: $ ? S.eye : S.eye_dashed
      });
    }
    G.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? S.lock_open : S.lock_closed }), p(t) || G.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete, disabled: !!l });
  } else
    G = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!m,
        choices: qb(c, { erp: N, coverage: I })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90, disabled: c === ia }
    ], _ ? w && G.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }) : G.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete, disabled: !!l }
    );
  return Jb(i.corners, G);
}
const Vg = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function VA({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], s = r ? Vg.filter((l) => l.cameraTip) : Vg;
  return Jb([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: s.map(({ key: l, label: c, tip: m, cameraTip: p }) => ({ key: l, label: c, tip: r ? p : m, pressed: l === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ue.delete }] : []
  ]);
}
function $A(e, t, n, r, i) {
  const { minX: l, maxX: c, minY: m, maxY: p } = e || {};
  if (![l, c, m, p].every(Number.isFinite)) return null;
  const h = Math.min(Math.max((l + c) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), y = Math.max(14, i - n - 14), S = p + 18, _ = m - 18 - n;
  let w;
  return S <= y ? w = Math.max(S, 14) : _ >= 14 ? w = Math.min(_, y) : w = Math.min(Math.max(S, 14), y), { left: h, top: w };
}
function Jb(e, t) {
  const n = e.map((m) => ({ x: Number(m == null ? void 0 : m.x), y: Number(m == null ? void 0 : m.y) })).filter((m) => Number.isFinite(m.x) && Number.isFinite(m.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((m) => m.x), i = n.map((m) => m.y), o = Math.min(...r), s = Math.max(...r), l = Math.min(...i), c = Math.max(...i);
  return {
    visible: !0,
    left: (o + s) * 0.5,
    top: c + 18,
    items: t,
    anchor: { minX: o, maxX: s, minY: l, maxY: c }
  };
}
const Zb = "painting";
function zA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const jA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function HA(e, { span: t, selection: n, selectedId: r, expanded: i, openRows: o, audio: s = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: m = !1, stickers: p = !0, scene: h = !1, sceneLocked: y = !1 }) {
  const S = (G, R, $, b, H, W, { keyable: ne = !0, hideable: Oe = !0 } = {}) => {
    const D = (ae) => (n == null ? void 0 : n.owner) === G && n.lane === ae ? n.frames.map((se) => se + W) : [];
    return {
      id: G,
      label: $,
      icon: b,
      clip: H,
      selected: G === r,
      hideable: Oe,
      visible: R.visible,
      keyable: ne,
      open: ne && o.has(G),
      keys: Yk(R).map((ae) => ({ frame: ae.frame + W, full: ae.full })),
      selectedFrames: D(null),
      lanes: (ne ? ha(R) : []).map((ae) => ({
        key: `${G}:${ae}`,
        lane: ae,
        label: jA[ae],
        frames: R[ae].keyframes.map((se) => se.frame + W),
        selectedFrames: D(ae)
      }))
    };
  }, _ = p ? e.stickers : [], w = _.filter((G) => G.placement === "sky").sort((G, R) => R.z_index - G.z_index), N = _.filter((G) => G.placement === "world"), I = ({ start: G, in: R, duration: $ }) => ({ clip: { start: G, end: $ === null ? null : G + $ }, offset: G - R });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!s,
    muted: !!(s != null && s.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: l || y,
    lengthLocked: y,
    lockTip: y ? "Set by the scene" : "Set by the video input",
    length: y ? t : e.timeline.length,
    rows: [
      ...c ? [S("camera", e.camera, "Camera", Ue.camera, null, 0, { hideable: m })] : [],
      ...[...w, ...N].map((G) => {
        const { clip: R, offset: $ } = I(G.clip);
        return S(G.id, G, md(G), Ue.image, R, $);
      }),
      ...p && (zA(e.painting) || !e.painting_visible) ? [{
        id: Zb,
        label: "Paint",
        icon: Ue.paintbrush_vertical_tool,
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
      ...p && (h || Zl(e.scene)) ? [(() => {
        const { clip: G, offset: R } = I(e.scene.clip);
        return S("scene", e.scene, "Scene", Ue.box, G, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function GA(e, t, n, r) {
  const i = Zk(e, t, n);
  if (!i) return null;
  const o = Math.min(...n) + r, s = Math.max(...n) + r;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const WA = { class: "pano-floating-right" }, KA = {
  key: 0,
  class: "pano-floating-space"
}, BA = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, UA = ["data-settled"], YA = ["data-ready", "data-settled"], XA = ["aria-label", "data-tip"], qA = {
  key: 1,
  class: "pano-camera-preview-label"
}, JA = {
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
    return (t, n) => (Ie(), De(ut, null, [
      me("div", WA, [
        e.space ? fi((Ie(), De("div", KA, [
          me("div", BA, [
            (Ie(!0), De(ut, null, Rt(e.space.modes, (r) => (Ie(), gr(dn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          et(dn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [bo, e.space.visible]
        ]) : xt("", !0),
        (Ie(!0), De(ut, null, Rt(e.buttons, (r) => (Ie(), gr(dn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      fi(me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        me("div", {
          class: wt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: zt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = me("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            me("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Ie(), De("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            et(Xt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, XA)) : xt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ie(), De("div", qA, mt(e.preview.label || "Preview unavailable"), 1)) : xt("", !0)
        ], 14, YA)
      ], 8, UA), [
        [bo, e.preview.visible]
      ])
    ], 64));
  }
}, ZA = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, QA = ["y2", "transform"], eC = ["transform"], tC = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, o) => o * 15), r = bt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => fi((Ie(), De("div", {
      class: wt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Ie(), De("svg", ZA, [
        o[1] || (o[1] = me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Ie(!0), De(ut, null, Rt(ft(n), (s) => (Ie(), De("line", {
          key: s,
          class: wt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, QA))), 128)),
        me("g", { transform: r.value }, [...o[0] || (o[0] = [
          me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, eC),
        o[2] || (o[2] = me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [bo, e.model.visible === !0]
    ]);
  }
}, nC = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ie(), De("div", {
      class: wt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      et(Eb, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      et(dn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      et(tC, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, rC = ["aria-label"], iC = { class: "pano-canvas-confirm-title" }, oC = { class: "pano-canvas-confirm-text" }, aC = { class: "pano-canvas-confirm-actions" }, sC = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, lC = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ nn(null), r = /* @__PURE__ */ nn(null);
    let i = null;
    function o() {
      const h = r.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((y) => y instanceof HTMLElement ? !y.hidden && y.tabIndex >= 0 && y.offsetParent !== null : !1) : [];
    }
    function s(h) {
      const y = r.value;
      if (!y) return;
      const S = y.querySelector(`[data-action='${h}']`);
      S instanceof HTMLButtonElement && S.click();
    }
    function l() {
      var w;
      const h = r.value;
      if (!h) return;
      const y = h.querySelector("[data-action='confirm-accept']");
      if (y instanceof HTMLElement) {
        y.focus();
        return;
      }
      const _ = o()[0] || h;
      (w = _ == null ? void 0 : _.focus) == null || w.call(_);
    }
    function c() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function m(h) {
      var I;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const y = o(), S = r.value;
      if (!y.length) {
        h.preventDefault(), (I = S == null ? void 0 : S.focus) == null || I.call(S);
        return;
      }
      const _ = y[0], w = y[y.length - 1], N = document.activeElement;
      if (h.shiftKey) {
        (N === _ || N === S || !(S != null && S.contains(N))) && (h.preventDefault(), w.focus());
        return;
      }
      (N === w || !(S != null && S.contains(N))) && (h.preventDefault(), _.focus());
    }
    function p(h) {
      h.target === n.value && s("confirm-cancel");
    }
    return fo(() => t.model.visible, (h, y) => {
      if (h) {
        i = document.activeElement, _c(() => {
          l();
        });
        return;
      }
      y && c();
    }, { immediate: !0 }), xs(() => {
      c();
    }), (h, y) => e.model.visible === !0 ? (Ie(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Kt(p, ["self"])
    }, [
      me("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: m
      }, [
        me("div", iC, mt(e.model.title), 1),
        me("div", oC, mt(e.model.text), 1),
        me("div", aC, [
          y[0] || (y[0] = me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          me("button", sC, mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, rC)
    ], 512)) : xt("", !0);
  }
}, cC = ["data-paint-pane"], uC = ["hidden"], dC = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], fC = ["aria-pressed", "disabled"], pC = ["hidden"], hC = { class: "pano-paint-color-pop-head" }, mC = { class: "pano-paint-color-field" }, gC = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, yC = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, bC = { class: "pano-paint-color-field" }, vC = { class: "pano-paint-alpha-wrap" }, _C = ["value"], SC = { "data-paint-alpha-value": "" }, wC = ["hidden"], xC = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, kC = ["data-paint-history-index", "aria-label", "disabled"], MC = ["data-paint-footer"], NC = ["data-paint-group"], PC = ["hidden"], AC = ["value", "disabled"], CC = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, IC = ["hidden"], OC = {
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
    return (r, i) => (Ie(), De("div", {
      class: wt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ie(!0), De(ut, null, Rt(e.panes, (o) => {
        var s;
        return Ie(), De("div", {
          key: o.key,
          class: wt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Ie(), De("div", {
            key: 0,
            class: wt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ie(!0), De(ut, null, Rt(e.paintSwatches, (l) => (Ie(), De("button", {
              key: l.id,
              class: wt(["pano-paint-color-dot", { active: e.state.activeSwatchId === l.id }]),
              type: "button",
              "data-paint-color-swatch": l.id,
              "aria-label": l.label,
              style: zt(t(l)),
              "aria-pressed": e.state.activeSwatchId === l.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, dC))), 128)),
            me("button", {
              class: wt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: zt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, fC),
            me("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: zt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              me("div", hC, [
                me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: zt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              me("div", mC, [
                me("div", gC, [
                  me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: zt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                me("div", yC, [
                  me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: zt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              me("label", bC, [
                i[1] || (i[1] = me("span", null, "Opacity", -1)),
                me("div", vC, [
                  me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, _C),
                  me("span", SC, mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                me("div", xC, [
                  (Ie(!0), De(ut, null, Rt(e.state.historyEntries || [], (l) => (Ie(), De("button", {
                    key: l.index,
                    class: wt(["pano-paint-color-history-dot", { empty: !l.color }]),
                    type: "button",
                    "data-paint-history-index": l.index,
                    "aria-label": `Recent color ${l.index + 1}`,
                    disabled: !l.color,
                    style: zt(n(l.color))
                  }, null, 14, kC))), 128))
                ])
              ], 8, wC)
            ], 12, pC)
          ], 10, uC)) : xt("", !0),
          me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Ie(!0), De(ut, null, Rt(o.tools, (l) => {
                var c;
                return Ie(), gr(dn, {
                  key: `${o.key}-${l.key}`,
                  icon: l.icon,
                  label: l.label,
                  tip: l.tip,
                  "extra-class": { active: ((c = e.state.activeTools) == null ? void 0 : c[o.key]) === l.key },
                  attrs: { [l.attr]: l.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, NC),
            me("div", {
              class: wt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              me("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: zt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, AC),
              me("span", CC, mt(e.state.sizeText || "10"), 1)
            ], 10, PC),
            me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              et(dn, {
                icon: ft(Ue).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, IC)
          ], 8, MC)
        ], 10, cC);
      }), 128))
    ], 2));
  }
}, EC = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ nn(null), r = /* @__PURE__ */ nn(null), i = /* @__PURE__ */ nn(null);
    function o() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, l) => (Ie(), De(ut, null, [
      me("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      me("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        me("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, TC = ["aria-label"], FC = ["data-tip", "aria-pressed"], DC = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = bt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (Ie(), De("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: zt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (Ie(!0), De(ut, null, Rt(e.buttons, (o) => (Ie(), De("button", si({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), mt(o.label), 17, FC))), 128))
    ], 12, TC));
  }
}, LC = {
  key: 0,
  class: "pano-cutout-menu"
}, RC = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, VC = ["data-aspect"], $C = ["data-action", "aria-label", "data-tip", "disabled"], zC = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ie(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: zt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ie(!0), De(ut, null, Rt(e.model.items || [], (r) => (Ie(), De(ut, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Ie(), De("div", LC, [
          me("button", RC, [
            et(Xt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          me("div", {
            class: wt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ie(!0), De(ut, null, Rt(r.choices || [], (i) => (Ie(), De("button", {
              key: i.value,
              class: wt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, mt(i.label), 11, VC))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (Ie(), gr(DC, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (Ie(), De("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          et(Xt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, $C))
      ], 64))), 128))
    ], 4));
  }
}, jC = {
  key: 0,
  class: "pano-easing"
}, HC = { class: "pano-section-title" }, GC = { class: "pano-easing-range" }, WC = { class: "pano-easing-modes" }, KC = ["aria-pressed", "onClick"], BC = ["viewBox"], UC = ["x", "y"], YC = ["x1", "y1", "x2", "y2"], XC = ["d"], qC = ["x1", "y1", "x2", "y2"], JC = ["x1", "y1", "x2", "y2"], ZC = ["cx", "cy"], QC = ["cx", "cy"], eI = { class: "pano-easing-note" }, ri = 132, to = 14, tI = {
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
    ], o = /* @__PURE__ */ nn(null), s = bt(() => {
      var _;
      return Array.isArray((_ = n.model) == null ? void 0 : _.easing) ? n.model.easing : null;
    }), l = (_) => to + _ * ri, c = (_) => to + (1 - _) * ri, m = bt(() => {
      var G;
      if (((G = n.model) == null ? void 0 : G.easing) === "hold") return `M${l(0)} ${c(0)} H${l(1)} V${c(1)}`;
      const [_, w, N, I] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${l(0)} ${c(0)} C${l(_)} ${c(w)} ${l(N)} ${c(I)} ${l(1)} ${c(1)}`;
    }), p = bt(() => s.value ? s.value.map((_) => _.toFixed(2)).join(", ") : "");
    function h(_) {
      var w;
      return JSON.stringify(_.easing) === JSON.stringify((w = n.model) == null ? void 0 : w.easing);
    }
    function y(_, w) {
      r("timeline", { type: "easing", easing: _, commit: w });
    }
    function S(_, w) {
      var $;
      if (_.button !== 0 || !s.value) return;
      const N = _.currentTarget;
      ($ = N.setPointerCapture) == null || $.call(N, _.pointerId);
      let I = null;
      const G = (b) => {
        const H = o.value.getBoundingClientRect(), W = H.width / (ri + to * 2), ne = ((b.clientX - H.left) / W - to) / ri, Oe = 1 - ((b.clientY - H.top) / W - to) / ri;
        I = [...I || s.value], I[w] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, I[w + 1] = Math.round(Math.min(1, Math.max(0, Oe)) * 100) / 100, y(I, !1);
      }, R = () => {
        N.removeEventListener("pointermove", G), N.removeEventListener("pointerup", R), N.removeEventListener("pointercancel", R), I && y(I, !0);
      };
      N.addEventListener("pointermove", G), N.addEventListener("pointerup", R), N.addEventListener("pointercancel", R);
    }
    return (_, w) => e.model ? (Ie(), De("div", jC, [
      me("div", HC, [
        w[2] || (w[2] = me("span", null, "Easing", -1)),
        me("span", GC, mt(e.model.label), 1)
      ]),
      me("div", WC, [
        (Ie(), De(ut, null, Rt(i, (N) => me("button", {
          key: N.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": h(N) ? "true" : "false",
          onClick: (I) => y(N.easing, !0)
        }, mt(N.label), 9, KC)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Ie(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${ri + to * 2} ${ri + to * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        me("rect", {
          class: "pano-easing-square",
          x: l(0),
          y: c(1),
          width: ri,
          height: ri
        }, null, 8, UC),
        me("line", {
          class: "pano-easing-diagonal",
          x1: l(0),
          y1: c(0),
          x2: l(1),
          y2: c(1)
        }, null, 8, YC),
        me("path", {
          class: "pano-easing-curve",
          d: m.value
        }, null, 8, XC),
        s.value ? (Ie(), De(ut, { key: 0 }, [
          me("line", {
            class: "pano-easing-arm",
            x1: l(0),
            y1: c(0),
            x2: l(s.value[0]),
            y2: c(s.value[1])
          }, null, 8, qC),
          me("line", {
            class: "pano-easing-arm",
            x1: l(1),
            y1: c(1),
            x2: l(s.value[2]),
            y2: c(s.value[3])
          }, null, 8, JC),
          me("circle", {
            class: "pano-easing-handle",
            cx: l(s.value[0]),
            cy: c(s.value[1]),
            r: "6",
            onPointerdown: w[0] || (w[0] = (N) => S(N, 0))
          }, null, 40, ZC),
          me("circle", {
            class: "pano-easing-handle",
            cx: l(s.value[2]),
            cy: c(s.value[3]),
            r: "6",
            onPointerdown: w[1] || (w[1] = (N) => S(N, 2))
          }, null, 40, QC)
        ], 64)) : xt("", !0)
      ], 8, BC)) : xt("", !0),
      me("div", eI, [
        e.model.mixed ? (Ie(), De(ut, { key: 0 }, [
          za("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Ie(), De(ut, { key: 1 }, [
          za("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Ie(), De(ut, { key: 2 }, [
          za("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Ie(), De(ut, { key: 3 }, [
          za("cubic-bezier(" + mt(p.value) + ")", 1)
        ], 64)) : xt("", !0)
      ])
    ])) : xt("", !0);
  }
}, nI = {
  class: "pano-side",
  "data-side": ""
}, rI = { class: "pano-side-head" }, iI = { class: "pano-side-title" }, oI = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, aI = {
  key: 0,
  class: "pano-side-scroll"
}, sI = { class: "pano-inspector" }, lI = { class: "pano-ui-row pano-coverage-row" }, cI = ["data-selected"], uI = ["aria-pressed", "disabled"], dI = ["aria-pressed", "disabled"], fI = {
  key: 0,
  class: "pano-section-title"
}, pI = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, hI = {
  class: "pano-picker",
  "data-picker": "selection"
}, mI = ["disabled"], gI = { class: "pano-picker-label" }, yI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, bI = ["hidden"], vI = ["data-selection-id"], _I = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, SI = {
  key: 2,
  class: "pano-state-actions"
}, wI = ["disabled"], xI = ["data-key"], kI = { class: "pano-field-group-values" }, MI = ["title", "onPointerdown"], NI = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], PI = ["data-key"], AI = ["min", "max", "step", "value", "disabled", "data-param-key"], CI = ["min", "max", "step", "value", "disabled", "data-param-key"], II = ["open"], OI = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, EI = { class: "pano-ui-settings-body" }, TI = { class: "pano-ui-row" }, FI = ["data-selected"], DI = ["aria-pressed"], LI = ["aria-pressed"], RI = { class: "pano-ui-row" }, VI = ["data-selected"], $I = ["aria-pressed"], zI = ["aria-pressed"], jI = {
  key: 1,
  class: "pano-side-footer"
}, HI = ["data-action"], GI = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = bt(() => {
      const m = n.model;
      return !m || typeof m != "object" ? !1 : Object.keys(m).length > 0 && !!m.coverage;
    });
    function o(m) {
      return { "--v": `${Number((m == null ? void 0 : m.fillPct) || 0)}%` };
    }
    function s(m, p) {
      return (p == null ? void 0 : p.paramsDisabled) === !0 || (m == null ? void 0 : m.enabled) === !1;
    }
    const l = {};
    function c(m, p) {
      const h = l[p.key];
      if (m.button !== 0 || !h || s(p, n.model)) return;
      m.preventDefault();
      const y = m.currentTarget, S = m.clientX, _ = Number(h.value) || 0;
      let w = !1;
      y.setPointerCapture(m.pointerId);
      const N = (G) => {
        if (!w && Math.abs(G.clientX - S) < 3) return;
        w = !0;
        const R = _ + (G.clientX - S) * p.drag * (G.shiftKey ? 0.1 : 1);
        h.value = String(Number(R.toFixed(3))), h.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, I = () => {
        y.removeEventListener("pointermove", N), y.removeEventListener("pointerup", I), y.removeEventListener("pointercancel", I), y.removeEventListener("lostpointercapture", I), w ? h.dispatchEvent(new Event("change", { bubbles: !0 })) : h.focus();
      };
      y.addEventListener("pointermove", N), y.addEventListener("pointerup", I), y.addEventListener("pointercancel", I), y.addEventListener("lostpointercapture", I);
    }
    return (m, p) => {
      var h, y, S, _, w;
      return Ie(), De("div", nI, [
        me("div", rI, [
          me("div", iI, [
            me("span", oI, [
              et(Xt, {
                icon: ft(Ue).globe
              }, null, 8, ["icon"])
            ]),
            me("span", null, mt(e.nodeTitle), 1)
          ]),
          p[1] || (p[1] = me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        p[10] || (p[10] = me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Ie(), De("div", aI, [
          me("div", sI, [
            p[9] || (p[9] = me("div", { class: "pano-section-title" }, [
              me("span", null, "Scene")
            ], -1)),
            me("div", lI, [
              p[2] || (p[2] = me("label", null, "Coverage", -1)),
              me("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((h = e.model.coverage) == null ? void 0 : h.value) === 180 ? "1" : "0"
              }, [
                me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((S = e.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "360", 8, uI),
                me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "180", 8, dI)
              ], 8, cI)
            ]),
            e.model.transformTitle !== !1 ? (Ie(), De("div", fI, [...p[3] || (p[3] = [
              me("span", null, "Transform", -1)
            ])])) : xt("", !0),
            e.model.selectionPicker ? (Ie(), De("div", pI, [
              me("label", null, mt(e.model.selectionPicker.label), 1),
              me("div", hI, [
                me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  me("span", gI, [
                    e.model.selectionPicker.currentIcon ? (Ie(), De("span", yI, [
                      et(Xt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : xt("", !0),
                    me("span", null, mt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  p[4] || (p[4] = me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, mI),
                me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ie(!0), De(ut, null, Rt(e.model.selectionPicker.items || [], (N) => (Ie(), De("button", {
                    key: N.id,
                    type: "button",
                    class: wt(["pano-picker-item", { active: N.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": N.id
                  }, [
                    N.icon ? (Ie(), De("span", _I, [
                      et(Xt, {
                        icon: N.icon
                      }, null, 8, ["icon"])
                    ])) : xt("", !0),
                    me("span", null, mt(N.label), 1)
                  ], 10, vI))), 128))
                ], 8, bI)
              ])
            ])) : xt("", !0),
            e.model.copyStateButton ? (Ie(), De("div", SI, [
              me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                et(Xt, {
                  icon: ft(Ue).copy
                }, null, 8, ["icon"]),
                me("span", null, mt(e.model.copyStateButton.label), 1)
              ], 8, wI)
            ])) : xt("", !0),
            me("div", {
              class: wt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ie(!0), De(ut, { key: 0 }, Rt(e.model.notes, (N) => (Ie(), De("div", {
                key: N,
                class: "pano-param-note"
              }, mt(N), 1))), 128)) : (Ie(!0), De(ut, { key: 1 }, Rt(e.model.rows || [], (N) => (Ie(), De(ut, {
                key: N.key
              }, [
                N.grouped ? (Ie(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": N.key
                }, [
                  me("label", null, mt(N.label), 1),
                  me("div", kI, [
                    (Ie(!0), De(ut, null, Rt(N.fields, (I) => (Ie(), De("div", {
                      key: I.key,
                      class: "pano-axis-field"
                    }, [
                      me("span", {
                        class: wt(["pano-axis", { disabled: s(I, e.model) }]),
                        title: I.label,
                        onPointerdown: (G) => c(G, I)
                      }, mt(I.short), 43, MI),
                      me("input", {
                        ref_for: !0,
                        ref: (G) => {
                          l[I.key] = G;
                        },
                        type: "number",
                        min: I.min,
                        max: I.max,
                        step: I.step,
                        value: I.displayValue,
                        disabled: s(I, e.model),
                        "aria-label": `${N.label} ${I.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": I.key
                      }, null, 8, NI)
                    ]))), 128))
                  ])
                ], 8, xI)) : (Ie(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": N.key
                }, [
                  me("label", null, mt(N.label), 1),
                  me("input", {
                    type: "range",
                    min: N.fields[0].min,
                    max: N.fields[0].max,
                    step: N.fields[0].step,
                    value: N.fields[0].value,
                    disabled: s(N.fields[0], e.model),
                    style: zt(o(N.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": N.fields[0].key
                  }, null, 12, AI),
                  me("input", {
                    type: "number",
                    min: N.fields[0].min,
                    max: N.fields[0].max,
                    step: N.fields[0].step,
                    value: N.fields[0].displayValue,
                    disabled: s(N.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": N.fields[0].key
                  }, null, 8, CI)
                ], 8, PI))
              ], 64))), 128))
            ], 2),
            et(tI, {
              model: e.easing,
              onTimeline: p[0] || (p[0] = (N) => r("timeline", N))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Ie(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              me("summary", null, [
                p[5] || (p[5] = me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                me("span", OI, [
                  et(Xt, {
                    icon: ft(Ue).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              me("div", EI, [
                me("div", TI, [
                  p[6] || (p[6] = me("label", null, "Drag X", -1)),
                  me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, DI),
                    me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, LI)
                  ], 8, FI)
                ]),
                me("div", RI, [
                  p[7] || (p[7] = me("label", null, "Drag Y", -1)),
                  me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, $I),
                    me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, zI)
                  ], 8, VI)
                ]),
                p[8] || (p[8] = me("div", { class: "pano-ui-row" }, [
                  me("span"),
                  me("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, II)) : xt("", !0)
          ])
        ])) : xt("", !0),
        (e.model.footerButtons || []).length ? (Ie(), De("div", jI, [
          (Ie(!0), De(ut, null, Rt(e.model.footerButtons, (N) => (Ie(), De("button", {
            key: N.action,
            class: wt(["pano-btn", { "pano-btn-primary": N.primary === !0 }]),
            type: "button",
            "data-action": N.action
          }, mt(N.label), 11, HI))), 128))
        ])) : xt("", !0)
      ]);
    };
  }
}, WI = { class: "pano-timeline-bar" }, KI = ["aria-label", "data-tip"], BI = ["aria-label", "data-tip"], UI = { class: "pano-timeline-time" }, YI = ["data-tip"], XI = { key: 0 }, qI = ["min", "max", "value"], JI = ["data-tip"], ZI = { key: 0 }, QI = ["max", "value"], eO = ["aria-expanded"], tO = ["inert"], nO = { class: "pano-timeline-name" }, rO = ["aria-pressed", "aria-label", "data-tip", "onClick"], iO = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, oO = ["disabled", "aria-expanded", "aria-label", "onClick"], aO = ["title", "aria-current", "onClick"], sO = ["data-keyed", "aria-label", "onClick"], lO = ["onPointerdown"], cO = ["onPointerdown"], uO = ["onPointerdown"], dO = ["onPointerdown"], fO = ["aria-label", "data-tip", "onPointerdown"], pO = { key: 0 }, hO = ["onPointerdown"], mO = ["aria-label", "data-tip", "onPointerdown"], gO = { key: 0 }, yO = 10, bO = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Tl(0), playing: /* @__PURE__ */ Tl(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ nn(null), o = /* @__PURE__ */ nn(null), s = /* @__PURE__ */ nn(1), l = /* @__PURE__ */ nn(0), c = /* @__PURE__ */ nn(!1);
    let m = null, p = null, h = null;
    wc(() => {
      m = new ResizeObserver(([be]) => {
        s.value = Math.max(1, be.contentRect.width);
      }), i.value && m.observe(i.value), p = new ResizeObserver(([be]) => {
        l.value = be.contentRect.height;
      }), o.value && p.observe(o.value);
    }), xs(() => {
      m == null || m.disconnect(), p == null || p.disconnect(), h == null || h();
    });
    const y = bt(() => Math.max(1, Number(n.model.span || 1))), S = bt(() => n.playhead.frame.value), _ = bt(() => n.playhead.playing.value), w = bt(() => Xk(S.value, Number(n.model.fps || 1))), N = bt(() => s.value / y.value), I = (be) => `${be / y.value * 100}%`, G = bt(() => cM(y.value, N.value));
    function R(be) {
      const oe = i.value.getBoundingClientRect(), L = Math.floor((be - oe.left) / Math.max(1, oe.width) * y.value);
      return Math.min(y.value - 1, Math.max(0, L));
    }
    function $(be, oe, L) {
      const F = Math.ceil(yO / Math.max(1e-6, N.value)), fe = new Map(oe.map((Ae) => [Ae.frame, Ae.full]));
      return uM(oe.map((Ae) => Ae.frame), F).map((Ae, je) => ({
        ...Ae,
        key: `${be}:${je}`,
        partial: Ae.frames.some((Je) => !fe.get(Je)),
        selected: Ae.frames.some((Je) => L.includes(Je))
      }));
    }
    const b = bt(() => {
      const be = /* @__PURE__ */ new Map();
      for (const oe of n.model.rows || []) {
        be.set(oe.id, $(oe.id, oe.keys, oe.selectedFrames));
        for (const L of oe.lanes) be.set(L.key, $(L.key, L.frames.map((F) => ({ frame: F, full: !0 })), L.selectedFrames));
      }
      return be;
    });
    function H(be) {
      const oe = be.end === null ? y.value : be.end;
      return { left: I(be.start), width: I(Math.max(0, oe - be.start)) };
    }
    function W(be, oe) {
      const L = be.clientX, F = Math.max(1e-6, N.value);
      let fe = 0;
      oe("start", 0, be);
      const Ae = (Je) => {
        if (Je.pointerId !== be.pointerId) return;
        const le = Math.round((Je.clientX - L) / F);
        le !== fe && (fe = le, oe("move", fe, Je));
      }, je = (Je) => {
        Je.pointerId === be.pointerId && (h(), oe("end", fe, Je));
      };
      h == null || h(), h = () => {
        window.removeEventListener("pointermove", Ae), window.removeEventListener("pointerup", je), window.removeEventListener("pointercancel", je), h = null;
      }, window.addEventListener("pointermove", Ae), window.addEventListener("pointerup", je), window.addEventListener("pointercancel", je);
    }
    function ne(be) {
      be.button === 0 && W(be, (oe, L, F) => r("action", { type: "seek", frame: R(F.clientX), phase: oe }));
    }
    function Oe(be, oe, L) {
      be.button === 0 && (r("action", { type: "select-row", id: oe.id }), W(be, (F, fe) => r("action", { type: "clip", id: oe.id, mode: L, delta: fe, phase: F })));
    }
    function D(be, oe, L, F, fe) {
      if (be.button === 0) {
        if (be.shiftKey) {
          r("action", { type: "select-keys", owner: oe.id, lane: L, frames: F.frames, additive: !0 });
          return;
        }
        F.frames.every((Ae) => fe.includes(Ae)) || r("action", { type: "select-keys", owner: oe.id, lane: L, frames: F.frames, additive: !1 }), W(be, (Ae, je) => r("action", { type: "move-keys", delta: je, phase: Ae }));
      }
    }
    const ae = bt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function se(be, oe, L) {
      r("action", oe), await _c(), be.target.value = L();
    }
    function ye(be) {
      se(be, { type: "fps", fps: Number(be.target.value) }, () => ae.value);
    }
    function Ce(be) {
      const oe = be.target.value.trim();
      se(be, { type: "length", length: oe ? Number(oe) : null }, () => n.model.length ?? "");
    }
    function xe(be, oe, L) {
      be.button !== 0 || be.target !== be.currentTarget || r("action", { type: "select-keys", owner: oe.id, lane: L, frames: [], additive: !1 });
    }
    return (be, oe) => fi((Ie(), De("section", {
      class: wt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      me("div", WI, [
        me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: oe[0] || (oe[0] = (L) => r("action", { type: "play" }))
        }, [
          et(Xt, {
            icon: _.value ? ft(Ue).pause : ft(Ue).play
          }, null, 8, ["icon"])
        ], 8, KI),
        e.model.hasAudio ? (Ie(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: oe[1] || (oe[1] = (L) => r("action", { type: "mute" }))
        }, [
          et(Xt, {
            icon: e.model.muted ? ft(Ue).volume_muted : ft(Ue).volume2
          }, null, 8, ["icon"])
        ], 8, BI)) : xt("", !0),
        me("span", UI, mt(w.value), 1),
        me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Ie(), De("span", XI, mt(ae.value), 1)) : (Ie(), De("input", {
            key: 1,
            type: "number",
            min: ft(vy),
            max: ft(yf),
            step: "any",
            value: ae.value,
            "aria-label": "Timeline fps",
            onChange: ye
          }, null, 40, qI)),
          oe[6] || (oe[6] = me("span", null, "fps", -1))
        ], 8, YI),
        me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          oe[7] || (oe[7] = me("span", null, "Length", -1)),
          e.model.lengthLocked ? (Ie(), De("span", ZI, mt(e.model.length), 1)) : (Ie(), De("input", {
            key: 1,
            type: "number",
            min: "1",
            max: ft(bf),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Ce
          }, null, 40, QI))
        ], 8, JI),
        me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: oe[2] || (oe[2] = (L) => r("action", { type: "toggle-expanded" }))
        }, [
          oe[8] || (oe[8] = me("span", null, "Timeline", -1)),
          et(Xt, {
            icon: ft(Ue).chevron
          }, null, 8, ["icon"])
        ], 8, eO)
      ]),
      me("div", {
        class: wt(["pano-timeline-body", { open: e.model.expanded, sliding: c.value }]),
        style: zt({ "--pano-timeline-rows": `${l.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: oe[3] || (oe[3] = Kt((L) => c.value = !0, ["self"])),
        onTransitionend: oe[4] || (oe[4] = Kt((L) => c.value = !1, ["self"])),
        onTransitioncancel: oe[5] || (oe[5] = Kt((L) => c.value = !1, ["self"]))
      }, [
        me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          oe[9] || (oe[9] = me("div", { class: "pano-timeline-corner" }, null, -1)),
          me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ne
          }, [
            (Ie(!0), De(ut, null, Rt(G.value, (L) => (Ie(), De("span", {
              key: L,
              class: "pano-timeline-tick",
              style: zt({ left: I(L) })
            }, mt(L), 5))), 128)),
            me("span", {
              class: "pano-timeline-playhead",
              style: zt({ left: I(S.value + 0.5) })
            }, null, 4)
          ], 544),
          (Ie(!0), De(ut, null, Rt(e.model.rows || [], (L) => (Ie(), De(ut, {
            key: L.id
          }, [
            me("div", {
              class: wt(["pano-timeline-head", { selected: L.selected, "is-hidden": !L.visible }])
            }, [
              me("div", nO, [
                L.hideable ? (Ie(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": L.visible ? "true" : "false",
                  "aria-label": `${L.label} visible`,
                  "data-tip": L.visible ? "Hide" : "Show",
                  onClick: Kt((F) => r("action", { type: "toggle-visible", id: L.id }), ["stop"])
                }, [
                  et(Xt, {
                    icon: L.visible ? ft(Ue).eye : ft(Ue).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, rO)) : (Ie(), De("span", iO)),
                me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !L.keyable,
                  "aria-expanded": L.open ? "true" : "false",
                  "aria-label": L.open ? `Hide ${L.label} parameters` : `Show ${L.label} parameters`,
                  onClick: Kt((F) => r("action", { type: "toggle-row", id: L.id }), ["stop"])
                }, [
                  et(Xt, {
                    icon: ft(Ue).chevron
                  }, null, 8, ["icon"])
                ], 8, oO),
                me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: L.label,
                  "aria-current": L.selected ? "true" : void 0,
                  onClick: (F) => r("action", { type: "select-row", id: L.id })
                }, [
                  et(Xt, {
                    icon: L.icon
                  }, null, 8, ["icon"]),
                  me("span", null, mt(L.label), 1)
                ], 8, aO),
                L.keyable ? (Ie(), De("button", {
                  key: 2,
                  class: wt(["pano-timeline-key", { keyed: ft(Pu)(L.keys, S.value) }]),
                  type: "button",
                  "data-keyed": ft(Pu)(L.keys, S.value) ? "true" : "false",
                  "aria-label": ft(Pu)(L.keys, S.value) ? `Every ${L.label} parameter has a keyframe here; update them` : `Add keyframes for every ${L.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Kt((F) => r("action", { type: "key-row", owner: L.id }), ["stop"])
                }, [
                  et(Xt, {
                    icon: ft(Ue).keyframe
                  }, null, 8, ["icon"])
                ], 10, sO)) : xt("", !0)
              ]),
              L.open ? (Ie(!0), De(ut, { key: 0 }, Rt(L.lanes, (F) => (Ie(), De("div", {
                key: F.key,
                class: "pano-timeline-lane-head"
              }, mt(F.label), 1))), 128)) : xt("", !0)
            ], 2),
            me("div", {
              class: wt(["pano-timeline-track", { selected: L.selected }])
            }, [
              me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (F) => xe(F, L, null)
              }, [
                L.clip ? (Ie(), De("div", {
                  key: 0,
                  class: wt(["pano-timeline-clip", { open: L.clip.end === null }]),
                  style: zt(H(L.clip)),
                  onPointerdown: Kt((F) => Oe(F, L, "move"), ["stop"])
                }, [
                  me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Kt((F) => Oe(F, L, "start"), ["stop"])
                  }, null, 40, uO),
                  me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Kt((F) => Oe(F, L, "end"), ["stop"])
                  }, null, 40, dO)
                ], 46, cO)) : xt("", !0),
                (Ie(!0), De(ut, null, Rt(b.value.get(L.id), (F) => (Ie(), De("button", {
                  key: F.key,
                  type: "button",
                  class: wt(["pano-timeline-pin", { selected: F.selected, cluster: F.frames.length > 1, partial: F.partial }]),
                  style: zt({ left: I(F.frame + 0.5) }),
                  "aria-label": `${L.label}: ${F.frames.length > 1 ? `${F.frames.length} keyframes` : `keyframe at frame ${F.frames[0]}`}`,
                  "data-tip": F.frames.length > 1 ? `${F.frames.length} keyframes` : `Frame ${F.frames[0]}`,
                  onPointerdown: Kt((fe) => D(fe, L, null, F, L.selectedFrames), ["stop"])
                }, [
                  F.frames.length > 1 ? (Ie(), De("span", pO, mt(F.frames.length), 1)) : xt("", !0)
                ], 46, fO))), 128))
              ], 40, lO),
              L.open ? (Ie(!0), De(ut, { key: 0 }, Rt(L.lanes, (F) => (Ie(), De("div", {
                key: F.key,
                class: "pano-timeline-lane",
                onPointerdown: (fe) => xe(fe, L, F.lane)
              }, [
                (Ie(!0), De(ut, null, Rt(b.value.get(F.key), (fe) => (Ie(), De("button", {
                  key: fe.key,
                  type: "button",
                  class: wt(["pano-timeline-pin", { selected: fe.selected, cluster: fe.frames.length > 1 }]),
                  style: zt({ left: I(fe.frame + 0.5) }),
                  "aria-label": `${F.label}: ${fe.frames.length > 1 ? `${fe.frames.length} keyframes` : `keyframe at frame ${fe.frames[0]}`}`,
                  "data-tip": fe.frames.length > 1 ? `${fe.frames.length} keyframes` : `Frame ${fe.frames[0]}`,
                  onPointerdown: Kt((Ae) => D(Ae, L, F.lane, fe, F.selectedFrames), ["stop"])
                }, [
                  fe.frames.length > 1 ? (Ie(), De("span", gO, mt(fe.frames.length), 1)) : xt("", !0)
                ], 46, mO))), 128))
              ], 40, hO))), 128)) : xt("", !0),
              me("span", {
                class: "pano-timeline-playhead",
                style: zt({ left: I(S.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, tO)
    ], 2)), [
      [bo, e.model.visible]
    ]);
  }
}, vO = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ie(), De("div", {
      class: wt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: zt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, mt(e.model.text || ""), 7));
  }
}, _O = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, SO = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ie(), De("div", _O, [
      (Ie(!0), De(ut, null, Rt(e.buttons, (r) => fi((Ie(), gr(dn, {
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
        [bo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, wO = ["data-video-ready"], xO = { class: "pano-video-transport-shell" }, kO = { class: "pano-video-controls-left" }, MO = { class: "pano-video-filmstrip" }, NO = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, PO = ["src", "onLoad"], AO = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, CO = ["max", "value", "disabled"], IO = { class: "pano-video-controls-right" }, OO = ["data-has-audio"], EO = { class: "pano-video-volume-pop" }, TO = ["value", "disabled"], FO = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = bt(() => {
      var b;
      return ((b = t.state) == null ? void 0 : b.playing) === !0 ? "Pause" : "Play";
    }), r = bt(() => {
      var b;
      return ((b = t.state) == null ? void 0 : b.playing) === !0 ? "Pause video" : "Play video";
    }), i = bt(() => {
      var b;
      return ((b = t.state) == null ? void 0 : b.playing) === !0 ? Ue.pause : Ue.play;
    }), o = bt(() => {
      var b;
      return ((b = t.state) == null ? void 0 : b.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = bt(() => {
      var b;
      return ((b = t.state) == null ? void 0 : b.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), l = bt(() => {
      var b;
      return ((b = t.state) == null ? void 0 : b.loop) === !1 ? Ue.loop_off : Ue.loop;
    }), c = bt(() => {
      var b, H;
      return ((b = t.state) == null ? void 0 : b.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), m = bt(() => {
      var b, H, W;
      return ((b = t.state) == null ? void 0 : b.hasAudio) !== !0 ? Ue.volume : ((H = t.state) == null ? void 0 : H.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Ue.volume_muted : Ue.volume2;
    }), p = bt(() => {
      var b;
      return Math.max(0, Math.min(100, Number(((b = t.state) == null ? void 0 : b.progressPct) || 0)));
    }), h = bt(() => ({ left: `${p.value}%` })), y = bt(() => {
      var ne, Oe;
      const b = (ne = t.state) == null ? void 0 : ne.volumePct, H = Number(((Oe = t.state) == null ? void 0 : Oe.volume) ?? 1) * 100, W = Number(b ?? H ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), S = bt(() => {
      var W, ne;
      const H = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((ne = t.state) == null ? void 0 : ne.durationLabel) || "0:00")
      ].reduce((Oe, D) => Math.max(Oe, D.length), 4);
      return `${Math.max(4, H)}ch`;
    }), _ = bt(() => ({ "--pano-video-time-ch": S.value })), w = bt(() => {
      var W, ne;
      const b = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if (b.length) return b;
      const H = Math.max(7, Number(((ne = t.state) == null ? void 0 : ne.thumbnailCount) || 9));
      return Array.from({ length: H }, (Oe, D) => ({
        id: `placeholder-${D}`,
        src: "",
        label: ""
      }));
    }), N = /* @__PURE__ */ nn(/* @__PURE__ */ new Set()), I = (b) => String((b == null ? void 0 : b.id) || (b == null ? void 0 : b.src) || (b == null ? void 0 : b.label) || ""), G = (b) => N.value.has(I(b)), R = (b) => {
      const H = new Set(N.value);
      H.add(I(b)), N.value = H;
    };
    fo(w, (b) => {
      const H = new Set(b.map(I)), W = /* @__PURE__ */ new Set();
      for (const ne of N.value)
        H.has(ne) && W.add(ne);
      N.value = W;
    }, { immediate: !0 });
    const $ = bt(() => {
      var b;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((b = t.state) == null ? void 0 : b.shellMaxWidthPx) || 640))}px`
      };
    });
    return (b, H) => (Ie(), De("div", {
      class: wt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: zt($.value)
    }, [
      H[1] || (H[1] = me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      H[2] || (H[2] = me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      me("div", xO, [
        me("div", kO, [
          et(dn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          me("div", {
            class: "pano-video-time pano-video-time-start",
            style: zt(_.value)
          }, mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        me("div", MO, [
          me("div", NO, [
            (Ie(!0), De(ut, null, Rt(w.value, (W) => (Ie(), De("div", {
              key: I(W),
              class: wt(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && G(W)
              }])
            }, [
              W.src ? (Ie(), De("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (ne) => R(W)
              }, null, 40, PO)) : (Ie(), De("span", AO))
            ], 2))), 128))
          ]),
          me("div", {
            class: "pano-video-playhead",
            style: zt(h.value),
            "aria-hidden": "true"
          }, [...H[0] || (H[0] = [
            me("span", { class: "pano-video-playhead-line" }, null, -1),
            me("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          me("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, CO)
        ]),
        me("div", IO, [
          me("div", {
            class: "pano-video-time pano-video-time-end",
            style: zt(_.value)
          }, mt(e.state.durationLabel || "0:00"), 5),
          et(dn, {
            "extra-class": "pano-video-control",
            icon: l.value,
            label: o.value,
            tip: s.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          me("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            me("div", EO, [
              me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: zt(y.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, TO)
            ]),
            et(dn, {
              "extra-class": "pano-video-control",
              icon: m.value,
              label: c.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, OO)
        ])
      ])
    ], 14, wO));
  }
}, DO = { class: "pano-floating-top" }, LO = ["data-selected", "data-view-count"], RO = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], VO = { class: "label" }, $O = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return Ie(), De("div", DO, [
        me("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ie(!0), De(ut, null, Rt(e.buttons, (i) => fi((Ie(), De("button", {
            key: i.key,
            class: wt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            et(Xt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            me("span", VO, mt(i.label), 1)
          ], 10, RO)), [
            [bo, i.visible !== !1]
          ])), 128))
        ], 8, LO)
      ]);
    };
  }
};
function Qb(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ue.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ue.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Ue.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ue.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ue.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ue.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ue.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ue.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ue.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ue.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ue.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ue.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ue.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ue.camera_plus, pressed: null }] : []
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
const zO = ["aria-label"], jO = { class: "pano-stage-column" }, HO = { class: "pano-stage-wrap" }, GO = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, WO = {
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
    let o = "", s = !1, l = null;
    const c = /* @__PURE__ */ nn(null), m = /* @__PURE__ */ nn(null), p = /* @__PURE__ */ nn(null);
    function h() {
      var D, ae;
      return ((ae = (D = p.value) == null ? void 0 : D.getRefs) == null ? void 0 : ae.call(D)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function y(D) {
      var ae, se;
      return ((se = (ae = m.value) == null ? void 0 : ae.open) == null ? void 0 : se.call(ae, D)) === !0;
    }
    function S(D) {
      i("image-file-selected", D);
    }
    function _(D) {
      i("image-file-cancelled", D);
    }
    t({ getPaintOverlayRefs: h, openImagePicker: y });
    const w = bt(() => r.readOnly === !0), N = bt(() => r.shellPreset || Qb(r.type)), I = bt(() => {
      var ae, se, ye;
      const D = String((((ae = r.uiState) == null ? void 0 : ae.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (ye = r.uiState) == null ? void 0 : ye.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), G = bt(() => {
      var ae;
      const D = Array.isArray((ae = N.value) == null ? void 0 : ae.floatingButtons) ? N.value.floatingButtons.slice() : [];
      return w.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ue.fullscreen
      }), D;
    });
    function R() {
      const D = c.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ae) => ae instanceof HTMLElement ? !ae.hidden && ae.tabIndex >= 0 && ae.offsetParent !== null : !1) : [];
    }
    function $() {
      var se;
      const ae = R()[0] || c.value;
      (se = ae == null ? void 0 : ae.focus) == null || se.call(ae);
    }
    function b() {
      var D;
      l != null && l.isConnected && ((D = l.focus) == null || D.call(l)), l = null;
    }
    function H(D) {
      var ae, se, ye, Ce;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const xe = R();
          if (!xe.length) {
            D.preventDefault(), (se = (ae = c.value) == null ? void 0 : ae.focus) == null || se.call(ae);
            return;
          }
          const be = xe[0], oe = xe[xe.length - 1], L = document.activeElement;
          if (D.shiftKey) {
            (L === be || L === c.value || !((ye = c.value) != null && ye.contains(L))) && (D.preventDefault(), oe.focus());
            return;
          }
          (L === oe || !((Ce = c.value) != null && Ce.contains(L))) && (D.preventDefault(), be.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function W() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ne() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function Oe(D) {
      document.removeEventListener("keydown", H), D ? (l || (l = document.activeElement), W(), document.addEventListener("keydown", H), _c(() => {
        $();
      })) : (ne(), b());
    }
    return wc(() => {
      Oe(r.open);
    }), xs(() => {
      ne(), document.removeEventListener("keydown", H), b();
    }), fo(() => r.open, (D) => {
      Oe(D);
    }), (D, ae) => e.open ? (Ie(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ae[2] || (ae[2] = Kt((se) => i("close"), ["self"]))
    }, [
      me("section", {
        ref_key: "modalRef",
        ref: c,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        me("div", jO, [
          me("div", HO, [
            ae[3] || (ae[3] = me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ae[4] || (ae[4] = me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ae[5] || (ae[5] = me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Ie(), De("div", GO, mt(I.value), 1)) : xt("", !0),
            ae[6] || (ae[6] = me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            et(EC, {
              ref_key: "paintOverlaysRef",
              ref: p
            }, null, 512),
            et(Tb, {
              ref_key: "imageFilePickerRef",
              ref: m,
              onFileSelected: S,
              onFileCancelled: _
            }, null, 512),
            w.value ? xt("", !0) : (Ie(), De(ut, { key: 1 }, [
              et(SO, {
                buttons: e.uiState.toolButtons || N.value.toolButtons || []
              }, null, 8, ["buttons"]),
              et(nC, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              et(OC, {
                "paint-swatches": e.paintSwatches,
                panes: N.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            et(FO, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            et($O, {
              buttons: e.uiState.viewButtons || N.value.viewButtons || []
            }, null, 8, ["buttons"]),
            et(JA, {
              buttons: e.uiState.floatingButtons || G.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            et(zC, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            et(vO, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            et(lC, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          et(bO, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ae[0] || (ae[0] = (se) => i("timeline", se))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? xt("", !0) : (Ie(), gr(GI, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ae[1] || (ae[1] = (se) => i("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, zO)
    ])) : xt("", !0);
  }
}, kr = "loading", _s = "ready", pr = "failed";
function e1(e, t = "") {
  return e && (e.__panoLoadState = kr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function t1(e, t = "") {
  return e && (e.__panoLoadState = _s, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function n1(e, t = "") {
  return e && (e.__panoLoadState = pr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Vd(e, t) {
  return e ? e.__panoLoadState === pr ? pr : typeof t == "function" && t(e) ? _s : kr : _s;
}
function $d(e) {
  return Vd(e) === pr;
}
function KO({ presented: e, background: t = _s, stickers: n = [] } = {}) {
  if (!e) return { status: kr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === kr, o = r.includes(kr);
  if (i && o) return { status: kr, detail: "mixed" };
  if (i) return { status: kr, detail: "background" };
  if (o) return { status: kr, detail: "stickers" };
  const s = t === pr, l = r.includes(pr);
  return s && l ? { status: pr, detail: "mixed" } : s ? { status: pr, detail: "background" } : l ? { status: pr, detail: "stickers" } : { status: _s, detail: "" };
}
const BO = "state_json", UO = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Uf = "sticker_image_1", YO = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), $g = 0.01, XO = "external_image", dc = "pano_sticker_input_images", qO = "pano_sticker_input_videos", JO = "pano_sticker_input_frames", ZO = "pano_sticker_input_video_meta", QO = !0, Il = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Kr = Math.PI / 180, so = 180 / Math.PI, zu = 1, zg = "rgb(255, 221, 87)", eE = "rgb(228, 228, 231)", tE = "rgb(180, 150, 60)", nE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, rE = 64, jg = 40, ju = 16, iE = 0.45, Hg = 180, oE = 160, fc = 24, aE = 4, sE = 4, lE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function Hu(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function cE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function uE(e, t, n) {
  const r = Me((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function dE(e) {
  return e * e * e;
}
function Ec(e, t, n) {
  return { x: e, y: t, z: n };
}
function Gg(e, t) {
  return Ec(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Wg(e, t) {
  return Ec(e.x * t, e.y * t, e.z * t);
}
function Gu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function fE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ec(e.x / t, e.y / t, e.z / t);
}
function ll(e) {
  return {
    yaw: Ut(Math.atan2(e.x, e.z) * so),
    pitch: Me(Math.asin(Me(e.y, -1, 1)) * so, -90, 90)
  };
}
function xi(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, s = t[r].y, l = t[i].x, c = t[i].y;
    s > e.y != c > e.y && e.x < (l - o) * (e.y - s) / (c - s || 1e-6) + o && (n = !n);
  }
  return n;
}
function Ua(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Wu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), l = r * r + i * i;
  if (l <= 1e-6) return Ua(e, t);
  const c = Me((o * r + s * i) / l, 0, 1), m = Number(t.x || 0) + r * c, p = Number(t.y || 0) + i * c, h = Number(e.x || 0) - m, y = Number(e.y || 0) - p;
  return h * h + y * y;
}
function fr(e, t, n) {
  return e + (t - e) * n;
}
function Vr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Me(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Me(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Me(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Me(n, 0, 1)})`;
}
function pE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let cl = { fillStyle: "", url: "" };
function hE(e, t, n) {
  if (cl.url && cl.fillStyle === String(e || ""))
    return cl.url;
  const r = pE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${fc}" height="${fc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return cl = { fillStyle: String(e || ""), url: r }, r;
}
function Ol(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Jn(e) {
  return {
    r: Me(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Me(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Me(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Me(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function _n(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function mE(e) {
  return Il.some((t) => Ol(e, t.color));
}
function Ku(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = Me(Number(t), 0, 1), o = Me(Number(n), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const s = Math.floor(r * 6), l = r * 6 - s, c = o * (1 - i), m = o * (1 - l * i), p = o * (1 - (1 - l) * i);
  switch (s % 6) {
    case 0:
      return { r: o, g: p, b: c };
    case 1:
      return { r: m, g: o, b: c };
    case 2:
      return { r: c, g: o, b: p };
    case 3:
      return { r: c, g: m, b: o };
    case 4:
      return { r: p, g: c, b: o };
    default:
      return { r: o, g: c, b: m };
  }
}
function Bu(e) {
  const t = Me(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Me(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Me(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), o = Math.min(t, n, r), s = i - o;
  let l = 0;
  s > 1e-6 && (i === t ? l = ((n - r) / s + (n < r ? 6 : 0)) / 6 : i === n ? l = ((r - t) / s + 2) / 6 : l = ((t - n) / s + 4) / 6);
  const c = i <= 1e-6 ? 0 : s / i;
  return { h: l, s: c, v: i };
}
function $o(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function gE(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Kg(e) {
  const { paintCount: t, maskCount: n } = gE(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return r.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: n + o
  };
}
function Ko(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ul(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function yE(e, t) {
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
function no(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function bE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function vE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function _E(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const r1 = "pano_suite.ui_settings.v1", i1 = "pano_suite.node_grid_visibility.v1";
let Bo = null, $r = null;
function El(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function SE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(r1)) || "").trim();
    if (!t) return Bo ? El(Bo) : null;
    const n = JSON.parse(t), r = El(n);
    return Bo = r, r;
  } catch {
    return Bo ? El(Bo) : null;
  }
}
function wE(e) {
  var n;
  const t = El(e);
  Bo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(r1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function o1() {
  var e;
  if ($r && typeof $r == "object")
    return $r;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(i1)) || "").trim();
    if (!t)
      return $r = {}, $r;
    const n = JSON.parse(t);
    return $r = n && typeof n == "object" ? n : {}, $r;
  } catch {
    return $r = {}, $r;
  }
}
function xE(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = o1()[n];
  return typeof i == "boolean" ? i : !!t;
}
function kE(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = o1();
  r[n] = !!t, $r = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(i1, JSON.stringify(r));
  } catch {
  }
}
function ME(e, t) {
  const n = { ...e }, r = t.map((i) => i(e));
  for (const { connect: i, ...o } of r) {
    for (const s of Object.keys(o))
      if (s in n) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(n, o);
  }
  for (const i of r) i.connect(n);
  return n;
}
const Ni = /* @__PURE__ */ new Map(), NE = 12;
function PE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ni.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ni.delete(t), Ni.set(t, n), n);
}
function AE(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ni.delete(n), Ni.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ni.size > NE; ) {
      const i = Ni.keys().next().value;
      if (!i) break;
      Ni.delete(i);
    }
}
function CE(e) {
  const {
    comfyMedia: t,
    cutoutV2: n,
    editor: r,
    editorView: i,
    floatingRightEl: o,
    imageCache: s,
    loadPreferredExactLinkedImage: l,
    mediaAssetSource: c,
    mediaSource: m,
    mediaUiImage: p,
    node: h,
    portStillCanvas: y,
    portVideoEl: S,
    readOnly: _,
    runtime: w,
    scheduler: N,
    stageWrap: I,
    state: G,
    stateV2: R,
    stillCanvas: $,
    timelinePlayhead: b,
    type: H,
    uiState: W,
    videoEl: ne
  } = e;
  let Oe, D, ae, se, ye, Ce;
  const xe = {
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
  }, be = 9, oe = [];
  let L = 0;
  const F = () => {
    var Ee, Ke;
    const C = (Ee = I == null ? void 0 : I.getBoundingClientRect) == null ? void 0 : Ee.call(I), J = (Ke = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ke.call(o), Se = Math.max(0, Number((C == null ? void 0 : C.width) || 0)), ge = J ? Math.max(0, Number(J.width || 0)) : 0, O = ge > 0 ? ge + 14 + 12 : 72, pe = Math.max(280, Math.floor(Se - O * 2)), de = r.fullscreen ? Math.min(1200, pe) : pe;
    W.videoTransport.shellMaxWidthPx = de;
  }, fe = () => {
    L || (L = N.requestFrame(() => {
      L = 0, F();
    }));
  }, Ae = (C) => {
    if (!(C instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(C.audioTracks) && C.audioTracks.length > 0 || C.audioTracks && typeof C.audioTracks.length == "number" && C.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof C.mozHasAudio == "boolean") return C.mozHasAudio;
    } catch {
    }
    try {
      if (Number(C.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!W.videoTransport.hasAudio;
  }, je = typeof ResizeObserver < "u" ? new ResizeObserver(() => fe()) : null;
  je == null || je.observe(I), o && (je == null || je.observe(o)), oe.push(() => {
    var C;
    L && (N.cancelFrame(L), L = 0), (C = je == null ? void 0 : je.disconnect) == null || C.call(je);
  }), fe();
  const Je = () => {
    xe.thumbnailJobId += 1, xe.thumbnailSrc = "", W.videoTransport.thumbnails = [], W.videoTransport.thumbnailCount = be;
  }, le = async (C, J, Se) => {
    const ge = String(C || "").trim();
    if (!ge) {
      Je();
      return;
    }
    const Ve = PE(ge);
    if (Ve) {
      xe.thumbnailSrc = ge, W.videoTransport.thumbnails = Ve.thumbnails, W.videoTransport.thumbnailCount = Ve.thumbnailCount;
      return;
    }
    const ze = ++xe.thumbnailJobId;
    xe.thumbnailSrc = ge, W.videoTransport.thumbnails = [], W.videoTransport.thumbnailCount = be;
    const O = Nc(document, "editor.thumbnails");
    O.preload = "auto", O.muted = !0, O.playsInline = !0, O.crossOrigin = "anonymous";
    const pe = Nn({ label: "editor.thumbnail" });
    try {
      const de = await new Promise((An) => {
        let Ot = !1;
        const Ct = (Et) => {
          Ot || (Ot = !0, An(Et));
        };
        O.addEventListener("loadedmetadata", () => Ct(!0), { once: !0 }), O.addEventListener("canplay", () => Ct(!0), { once: !0 }), O.addEventListener("error", () => Ct(!1), { once: !0 }), O.src = ge, O.load();
      });
      if (xe.thumbnailJobId !== ze) return;
      const Ee = Number(O.videoWidth || 0), Ke = Number(O.videoHeight || 0);
      if (!de || Ee < 1 || Ke < 1) {
        xe.thumbnailFailedSrcs.add(ge);
        return;
      }
      const $e = Math.max(0, Number(O.duration || J || 0)), Xe = 46, rt = Math.max(72, Math.round(Ee / Ke * Xe));
      pe.width = rt, pe.height = Xe;
      const _t = pe.getContext("2d");
      if (!_t) return;
      const Vt = [], Gt = (An) => new Promise((Ot) => {
        let Ct = !1;
        const Et = () => {
          Ct || (Ct = !0, Ot());
        };
        O.addEventListener("seeked", Et, { once: !0 }), O.addEventListener("error", Et, { once: !0 });
        try {
          O.currentTime = An;
        } catch {
          Et();
        }
      });
      for (let An = 0; An < be; An += 1) {
        if (xe.thumbnailJobId !== ze) return;
        const Ot = be <= 1 ? 0 : An / (be - 1), Ct = $e > 0 ? Math.max(0, Math.min($e - Math.max(1e-3, 0.5 / Math.max(1, Number(Se || 24))), $e * Ot)) : 0;
        if (await Gt(Ct), xe.thumbnailJobId !== ze) return;
        _t.clearRect(0, 0, rt, Xe), _t.drawImage(O, 0, 0, rt, Xe), Vt.push({
          id: `thumb-${An}`,
          src: pe.toDataURL("image/jpeg", 0.72),
          time: Ct,
          label: E(Ct)
        });
      }
      if (xe.thumbnailJobId !== ze) return;
      W.videoTransport.thumbnails = Vt, W.videoTransport.thumbnailCount = Vt.length || be, AE(ge, {
        thumbnails: Vt,
        thumbnailCount: Vt.length || be,
        duration: $e,
        fps: Se
      });
    } finally {
      O.removeAttribute("src"), O.load(), od(pe);
    }
  };
  oe.push(() => {
    Je();
  });
  const z = wb({
    video: ne instanceof HTMLVideoElement ? ne : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (C) => N.requestFrame(C),
      cancelFrame: (C) => N.cancelFrame(C)
    },
    fps: B,
    span: () => {
      if (R) return Ce();
      const C = Math.round(Number(W.videoTransport.duration || 0) * B());
      return ne.loop || !(C > 0) ? 1 / 0 : C;
    },
    loop: () => R,
    onFrame: (C) => {
      R ? ae(C) : ue(), D({ cause: "frame_view", localOnly: !0, reason: Pt.PLAYHEAD });
    },
    onCapture: () => {
      K() && (w.backgroundDirty = !0);
    },
    onChange: () => {
      ue(), b.playing.value = z.playing, ye(), D({ cause: "frame_view", localOnly: !0, reason: Pt.PLAYHEAD });
    }
  });
  oe.push(() => z.dispose());
  const x = R && S instanceof HTMLVideoElement ? xb({
    video: S,
    onCapture: () => {
      var Se;
      const C = Number(S.videoWidth || 0), J = Number(S.videoHeight || 0);
      C < 1 || J < 1 || (y.width = C, y.height = J, (Se = y.getContext("2d")) == null || Se.drawImage(S, 0, 0), y.__panoFrameIdx += 1, D({ cause: "frame_view", localOnly: !0, reason: Pt.MEDIA }));
    },
    onChange: () => D({ cause: "frame_view", localOnly: !0, reason: Pt.MEDIA })
  }) : null;
  x && oe.push(() => x.dispose());
  const he = R ? db({
    createImage: (C, J) => {
      const Se = new Image();
      return Se.onload = J, Se.onerror = J, Se.src = C, Se;
    },
    onLoad: () => D({ cause: "frame_view", localOnly: !0, reason: Pt.MEDIA })
  }) : null;
  if (ne instanceof HTMLVideoElement) {
    const C = () => {
      Q(), D({ cause: "frame_view", localOnly: !0 });
    }, J = () => {
      ue({
        hasAudio: W.videoTransport.hasAudio,
        muted: ne.muted,
        volume: Number(ne.volume ?? W.videoTransport.volume ?? 1)
      });
    }, Se = () => {
      const ge = ne.dataset.panoSrc;
      ge && (xe.failedSrcs.add(ge), Q(), D());
    };
    for (const [ge, Ve] of [
      ["loadedmetadata", C],
      ["loadeddata", C],
      ["canplay", C],
      ["volumechange", J],
      ["error", Se]
    ])
      ne.addEventListener(ge, Ve), oe.push(() => ne.removeEventListener(ge, Ve));
  }
  function Pe(C) {
    return t.uiList(h, C);
  }
  function Te(C) {
    return t.uiValue(h, C);
  }
  function te() {
    const C = String((h == null ? void 0 : h.comfyClass) || (h == null ? void 0 : h.type) || (h == null ? void 0 : h.title) || "");
    return Kl(C) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : H === "stickers" || H === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ke() {
    const { metaKey: C } = te(), J = Te(C);
    return Array.isArray(J) && J.length > 0 && J[0] && typeof J[0] == "object" ? J[0] : J && typeof J == "object" ? J : null;
  }
  function A(C) {
    return C ? C instanceof HTMLVideoElement ? [
      String(C.currentSrc || C.src || ""),
      Number(C.videoWidth || 0),
      Number(C.videoHeight || 0)
    ].join("|") : C instanceof HTMLCanvasElement ? [
      "canvas",
      Number(C.width || 0),
      Number(C.height || 0),
      String(C.__panoFrameIdx || 0)
    ].join("|") : [
      String(C.currentSrc || C.src || ""),
      Number(C.naturalWidth || C.width || 0),
      Number(C.naturalHeight || C.height || 0)
    ].join("|") : "none";
  }
  function E(C) {
    const J = Math.max(0, Math.floor(Number(C || 0))), Se = Math.floor(J / 60), ge = J % 60;
    return `${Se}:${String(ge).padStart(2, "0")}`;
  }
  function B() {
    return R ? G.timeline.fps : xe.metaFps || 1e3;
  }
  function ue(C = {}) {
    const J = Number(C.duration ?? W.videoTransport.duration ?? 0), Se = Math.max(1, Number(C.fps ?? W.videoTransport.fps ?? 24)), ge = z.frame / B(), Ve = Object.prototype.hasOwnProperty.call(C, "ready") ? !!C.ready : !!W.videoTransport.ready, ze = z.playing, O = Object.prototype.hasOwnProperty.call(C, "visible") ? !!C.visible : !!W.videoTransport.visible, pe = Object.prototype.hasOwnProperty.call(C, "muted") ? !!C.muted : !!(ne instanceof HTMLVideoElement ? ne.muted : W.videoTransport.muted), de = Number(
      Object.prototype.hasOwnProperty.call(C, "volume") ? C.volume : ne instanceof HTMLVideoElement ? ne.volume : W.videoTransport.volume
    ), Ee = Object.prototype.hasOwnProperty.call(C, "hasAudio") ? !!C.hasAudio : Ae(ne), Ke = Object.prototype.hasOwnProperty.call(C, "loop") ? !!C.loop : !!W.videoTransport.loop;
    Object.assign(W.videoTransport, {
      ready: Ve,
      playing: ze,
      visible: O,
      loop: Ke,
      currentTime: Number.isFinite(ge) ? ge : 0,
      duration: Number.isFinite(J) ? J : 0,
      progressPct: J > 1e-6 ? Math.max(0, Math.min(100, ge / J * 100)) : 0,
      currentTimeLabel: E(ge),
      durationLabel: E(J),
      frameCount: Math.max(0, Number(C.frameCount ?? W.videoTransport.frameCount ?? 0)),
      fps: Se,
      hasAudio: Ee,
      muted: pe,
      volume: Math.max(0, Math.min(1, Number.isFinite(de) ? de : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(de) ? de : 1)) * 100),
      thumbnails: Array.isArray(C.thumbnails) ? C.thumbnails : W.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(C.thumbnailCount ?? W.videoTransport.thumbnailCount ?? be))
    });
  }
  function T() {
    return !!(ne instanceof HTMLVideoElement && !R && ne.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function X() {
    if (!(ne instanceof HTMLVideoElement) || !W.videoTransport.hasAudio) return;
    const C = !ne.muted;
    ne.muted = C, !C && Number(ne.volume || 0) <= 0 && (ne.volume = Math.max(0.01, Number(W.videoTransport.volume || 1))), ue({
      hasAudio: W.videoTransport.hasAudio,
      muted: ne.muted,
      volume: Number(ne.volume ?? W.videoTransport.volume ?? 1)
    });
  }
  function ie() {
    ue({
      visible: T()
    });
  }
  function K() {
    if (!(ne instanceof HTMLVideoElement) || Number(ne.videoWidth || 0) < 1 || Number(ne.videoHeight || 0) < 1) return !1;
    const C = Number(ne.videoWidth || 0), J = Number(ne.videoHeight || 0);
    ($.width !== C || $.height !== J) && ($.width = C, $.height = J);
    const Se = $.getContext("2d");
    return Se ? (Se.clearRect(0, 0, C, J), Se.drawImage(ne, 0, 0, C, J), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function q() {
    return !z.showsVideo && Number($.width || 0) > 0 && Number($.height || 0) > 0 && Number($.__panoFrameIdx || 0) > 0 ? $ : ne instanceof HTMLVideoElement && Number(ne.videoWidth || 0) > 0 && Number(ne.videoHeight || 0) > 0 && Number(ne.readyState || 0) >= 2 ? ne : null;
  }
  function U() {
    $.__panoFrameIdx = 0, w.backgroundDirty = !0;
  }
  function Q() {
    if (!(ne instanceof HTMLVideoElement)) return null;
    const { videoKey: C } = te(), J = yn(h, "background") && Pe(C)[0] || null, Se = m(J), ge = [Se, t.linkedVideoFile(h, Y())].filter(Boolean), Ve = ge.find(($e) => !xe.failedSrcs.has($e)) || "";
    xe.videoFailed = !Ve && ge.length > 0;
    const ze = Ve && Ve === Se ? ke() : null;
    xe.metaFps = Number(ze == null ? void 0 : ze.fps) > 0 ? Number(ze.fps) : 0;
    const O = Math.max(1, Number((ze == null ? void 0 : ze.fps) || (R ? G.timeline.fps : 24))), pe = ne.dataset.panoSrc === Ve && Number.isFinite(ne.duration) ? ne.duration : 0, de = Number((ze == null ? void 0 : ze.duration) || ((ze == null ? void 0 : ze.frames) > 0 ? ze.frames / O : pe)), Ee = Math.max(0, Number((ze == null ? void 0 : ze.frames) || Math.round(de * O))), Ke = !!(ze != null && ze.has_audio) || Ae(ne);
    return Ve && ne.dataset.panoSrc !== Ve ? (ne.pause(), U(), ne.dataset.panoSrc = Ve, ne.loop = !R && !!W.videoTransport.loop, ne.muted = !!W.videoTransport.muted, ne.volume = Math.max(0, Math.min(1, Number(W.videoTransport.volume ?? 1))), ne.src = Ve, ne.load(), z.setSource(!0), R || z.seek(0)) : !Ve && ne.getAttribute("src") && (ne.pause(), ne.removeAttribute("src"), delete ne.dataset.panoSrc, ne.load(), U(), Je(), z.setSource(!1)), R || (ne.loop = !!W.videoTransport.loop), Ve && !R && xe.thumbnailSrc !== Ve && !xe.thumbnailFailedSrcs.has(Ve) && le(Ve, de, O), Ve || Je(), ue({
      ready: !!Ve,
      visible: !!Ve && T(),
      duration: de,
      frameCount: Ee,
      fps: O,
      hasAudio: Ke,
      loop: !!ne.loop,
      muted: !!ne.muted,
      volume: Number(ne.volume ?? W.videoTransport.volume ?? 1),
      thumbnailCount: W.videoTransport.thumbnailCount
    }), Ve || null;
  }
  function re(C, J = null) {
    return p(h, C, s, J || (() => D()));
  }
  function _e(C = null) {
    return yn(h, "external-sticker") ? re(dc, C) : null;
  }
  function Fe() {
    if (!yn(h, "external-sticker")) return null;
    const C = Pe(ZO)[0];
    if (!C || typeof C != "object") return null;
    const J = Pe(JO).map(m).filter(Boolean);
    if (J.length) return { frames: J, meta: C };
    const Se = m(Pe(qO)[0] || null);
    return Se ? { src: Se, meta: C } : null;
  }
  function Le() {
    const C = G.stickers.find(Oe), J = C ? Fe() : null, Se = J ? lb(C.clip, r.frame, G.timeline.fps, J.meta) : null;
    x.follow({ src: (J == null ? void 0 : J.src) || "", time: Se, playing: z.advancing, fps: G.timeline.fps });
    const ge = C ? Re(C) : null, Ve = J != null && J.frames ? he.picture(J.frames, Se, J.meta, ge) : x.picture(y, ge);
    return Ve ? { media: Ve, revision: A(Ve), source: ub(J, ge) } : null;
  }
  function Ge() {
    return !R || !yn(h, "scene") ? null : Qm(Pe("pano_scene_files"), Pe("pano_scene_meta"), m);
  }
  function Qe() {
    return !R || !yn(h, "external-sticker") ? null : Qm(Pe("pano_sticker_files"), Pe("pano_sticker_meta"), m);
  }
  function Re(C) {
    var O;
    if (C && typeof C == "object" && (Oe(C) || C.external === !0))
      return _e(() => {
        pi(h, "image-loaded");
      });
    const J = R ? We(C) : String(C && typeof C == "object" ? C.asset_id || C.assetId || "" : C || "");
    if (!J) return null;
    const Se = s.get(J);
    if (Se) return Se;
    const ge = R ? Ry(C.source) : (O = G.assets) == null ? void 0 : O[J], Ve = c(ge);
    if (!Ve) return null;
    const ze = new Image();
    return e1(ze, Ve), ze.onload = () => {
      t1(ze, Ve), D();
    }, ze.onerror = () => {
      n1(ze, Ve), D();
    }, ze.src = Ve, s.set(J, ze), ze;
  }
  function We(C) {
    const { source: J } = C;
    return J.filename ? `file:${J.storage}:${J.subfolder}:${J.filename}` : `sticker:${C.id}`;
  }
  function lt() {
    if (H === "cutout" && !n) {
      const Ve = q();
      if (Ve) return Ve;
      const ze = l(
        h,
        ["erp_image", "bg_erp"],
        () => D(),
        "background:cutout:erp_image|bg_erp"
      );
      return ze && !$d(ze) ? ze : p(h, "pano_input_images", s, () => D()) || ze || null;
    }
    const C = q();
    if (C) return C;
    const J = yn(h, "background") ? p(h, "pano_input_images", s, () => D()) : null;
    if (J && !$d(J)) return J;
    if (ne instanceof HTMLVideoElement && ne.dataset.panoSrc) return ne;
    const Se = Y();
    return l(h, Se, () => D(), `background:${Se.join("|")}`) || J || null;
  }
  function M() {
    var J;
    const C = (Array.isArray(h == null ? void 0 : h.inputs) ? h.inputs : []).findIndex((Se) => (Se == null ? void 0 : Se.name) === "source");
    return C >= 0 && h.graph ? String(((J = h.getInputLink(C)) == null ? void 0 : J.type) || "") : "";
  }
  function Y() {
    if (H === "cutout") return n ? M() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const C = Array.isArray(h == null ? void 0 : h.inputs) ? h.inputs.map((ge) => String((ge == null ? void 0 : ge.name) || "")) : [], J = C.includes("erp_image"), Se = C.includes("bg_erp");
    return _ && (J || Se) ? J ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : H === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function d(C) {
    return C ? C instanceof HTMLImageElement ? !!C.complete && Number(C.naturalWidth || C.width || 0) > 0 && Number(C.naturalHeight || C.height || 0) > 0 : C instanceof HTMLVideoElement ? Number(C.videoWidth || 0) > 0 && Number(C.videoHeight || 0) > 0 && Number(C.readyState || 0) >= 2 : Number(C.width || C.naturalWidth || 0) > 0 && Number(C.height || C.naturalHeight || 0) > 0 : !1;
  }
  function Z() {
    if (i.failed) return { status: pr, detail: "renderer" };
    if (!i.ready) return { status: kr, detail: "boot" };
    const C = lt(), J = xe.videoFailed ? pr : Vd(C, d), Se = [];
    for (const ge of se()) {
      if ((ge == null ? void 0 : ge.visible) === !1) continue;
      const Ve = Re(ge);
      Se.push(Vd(Ve, d));
    }
    return KO({
      presented: w.hasPresentedFrame,
      background: J,
      stickers: Se
    });
  }
  return {
    connect(C) {
      ({
        isExternalSticker: Oe,
        requestDraw: D,
        setTimelineFrame: ae,
        skyStickers: se,
        syncTimeline: ye,
        timelineSpanFrames: Ce
      } = C);
    },
    videoState: xe,
    videoCleanupFns: oe,
    queueVideoTransportLayout: fe,
    playback: z,
    portVideo: x,
    getNodeUiValue: Te,
    getMediaRevisionToken: A,
    playbackFps: B,
    syncVideoTransportState: ue,
    toggleVideoMuted: X,
    syncVideoTransportVisibility: ie,
    refreshModalVideoSource: Q,
    getStickerUiImage: re,
    getExternalStickerPreviewImage: _e,
    getPortMedia: Fe,
    followPortSticker: Le,
    getStickerImage: Re,
    stickerImageKey: We,
    getConnectedErpImage: lt,
    isDecodedImageReady: d,
    getStageImageStatus: Z,
    sceneFiles: Ge,
    stickerFiles: Qe
  };
}
function IE(e = 80, t = null, n = 8) {
  const r = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), s = Math.max(1, Number(n || 8));
  function l(m) {
    if (r.splice(0, r.length), i = -1, !m || typeof m != "object" || !Array.isArray(m.entries) || (m.entries.forEach((h) => {
      r.push(String(h || ""));
    }), !r.length)) return;
    const p = Number(m.index);
    Number.isInteger(p) ? p === -1 ? i = -1 : i = Math.max(0, Math.min(r.length - 1, p)) : i = r.length - 1;
  }
  function c(m) {
    r[i] !== m && (r.splice(i + 1), r.push(m), r.length > o && r.shift(), i = r.length - 1);
  }
  return l(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(m) {
      c(String(m || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const m = i - 1;
      return m < 0 || m >= r.length ? null : (i = m, r[i]);
    },
    redo() {
      const m = i + 1;
      return m < 0 || m >= r.length ? null : (i = m, r[i]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const m = r.length, p = Math.max(0, m - s), h = i >= 0 ? Math.max(0, Math.min(i, p)) : p, y = r.slice(h, h + s), S = i < 0 ? -1 : Math.max(-1, Math.min(y.length - 1, i - h));
      return {
        version: 1,
        entries: y,
        index: S
      };
    },
    hydrate: l
  };
}
const OE = 80;
function a1(e) {
  return JSON.stringify(gM(e));
}
function EE(e) {
  return IE(OE, { entries: [a1(e)], index: 0 });
}
function TE(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    state: i,
    stateV2: o,
    studio: s,
    type: l
  } = e;
  let c, m, p, h, y, S, _, w, N, I, G, R, $, b;
  function H() {
    n || (G(), zy(i), !(o && i.stickers.some(h)) && (t.historyController.commitActionGroup(a1(i)), $()));
  }
  function W(Oe) {
    var ye, Ce;
    if (n) return;
    I();
    const D = Oe < 0 ? t.historyController.undo() : t.historyController.redo();
    if ($(), !D) return;
    const ae = yM(i, D), se = (ye = i.timeline) == null ? void 0 : ye.fps;
    Object.keys(i).forEach((xe) => delete i[xe]), Object.assign(i, ae.state), G(!1), o && i.timeline.fps !== se && _.seek(Math.round(t.frame * i.timeline.fps / se)), t.selectedId = l === "stickers" || l === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Ce = p()) == null ? void 0 : Ce.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && c(), w(), r.backgroundDirty = !0, ae.paintingChanged ? S() : y(), R(), b(), m(), N({ cause: "cutout_frame" });
  }
  function ne() {
    var ae, se;
    const Oe = Array.isArray((ae = t.historyController) == null ? void 0 : ae.entries) ? t.historyController.entries : [], D = Number((se = t.historyController) == null ? void 0 : se.index);
    return {
      canUndo: !n && Oe.length > 1 && D > 0,
      canRedo: !n && Oe.length > 1 && D >= 0 && D < Oe.length - 1
    };
  }
  return {
    connect(Oe) {
      ({
        clearWorldSelection: c,
        commitState: m,
        getActiveCutoutShot: p,
        isUploadingSticker: h,
        markObjectVisualsDirty: y,
        markPaintStrokeVisualsDirty: S,
        playback: _,
        releaseHiddenSelection: w,
        requestDraw: N,
        stopTimelinePlayback: I,
        syncCutoutShot: G,
        syncPaintUi: R,
        syncUndoRedoButtons: $,
        updateSidePanel: b
      } = Oe);
    },
    pushHistory: H,
    restoreHistory: W,
    getHistoryCapabilities: ne
  };
}
function FE(e) {
  const {
    canvas: t,
    cutoutV2: n,
    editor: r,
    sceneV2: i,
    state: o,
    stateV2: s,
    type: l
  } = e;
  let c, m, p, h, y, S, _;
  function w() {
    return l === "stickers" ? N() : o.shots;
  }
  function N() {
    return i ? o.stickers.filter((M) => M.placement === "sky") : o.stickers;
  }
  function I(M) {
    return i && x(M);
  }
  function G(M) {
    return M.source.kind === "file" && !M.source.filename && !M.source.data_url;
  }
  function R(M) {
    return I(M) ? Mf(M, r.frame) : M;
  }
  function $(M, Y) {
    I(M) ? Ly(M, r.frame, Y) : Object.assign(M, Y);
  }
  function b() {
    const M = o.painting || (o.painting = sa(null));
    return Array.isArray(M.groups) || (M.groups = []), M.groups;
  }
  function H(M = "paint") {
    var C, J;
    const Y = Array.isArray((J = (C = o.painting) == null ? void 0 : C[M]) == null ? void 0 : J.strokes) ? o.painting[M].strokes : [], d = [], Z = /* @__PURE__ */ new Set();
    for (const Se of Y) {
      const ge = String((Se == null ? void 0 : Se.actionGroupId) || "").trim();
      !ge || Z.has(ge) || (Z.add(ge), d.push(ge));
    }
    return d;
  }
  function W() {
    return H("paint");
  }
  function ne(M, Y) {
    const d = String(Y || "").trim();
    return d ? `${M === "mask" ? "mask" : "paint"}:${d}` : "";
  }
  function Oe(M) {
    const Y = String(M || "").trim();
    return Y ? `raster:${Y}` : "";
  }
  function D(M) {
    const Y = String(M || "").trim();
    if (!Y) return "";
    const d = Y.match(/^raster:(.*)$/);
    return String(d ? d[1] || "" : Y).trim();
  }
  function ae(M, Y = null) {
    const d = String(M || "").trim();
    if (!d) return { layerKind: "paint", actionGroupId: "" };
    const Z = d.match(/^(paint|mask):(.*)$/);
    return Z ? { layerKind: Z[1] === "mask" ? "mask" : "paint", actionGroupId: String(Z[2] || "").trim() } : { layerKind: Y === "mask" ? "mask" : "paint", actionGroupId: d };
  }
  function se() {
    var Y;
    let M = -1;
    for (const d of N())
      M = Math.max(M, Number((d == null ? void 0 : d.z_index) || 0));
    for (const d of b())
      M = Math.max(M, Number((d == null ? void 0 : d.z_index) || 0));
    for (const d of Array.isArray((Y = o.painting) == null ? void 0 : Y.raster_objects) ? o.painting.raster_objects : [])
      String((d == null ? void 0 : d.layerKind) || "paint") === "paint" && (M = Math.max(M, Number((d == null ? void 0 : d.z_index) || 0)));
    return M + 1;
  }
  function ye(M, Y = null) {
    const d = String(M || "").trim();
    if (!d) return null;
    const Z = b();
    let C = Z.find((J) => String((J == null ? void 0 : J.actionGroupId) || "") === d);
    return C ? Y != null && (C.z_index = Math.max(0, Number(Y || 0))) : (C = {
      id: d,
      type: "strokeGroup",
      actionGroupId: d,
      z_index: Y == null ? se() : Math.max(0, Number(Y || 0)),
      locked: !1,
      frame: null
    }, Z.push(C)), C;
  }
  function Ce(M) {
    if (!(M != null && M.centerUv)) return [];
    const Y = Number(M.centerUv.u || 0), d = Number(M.centerUv.v || 0), Z = Number(M.halfW || 0), C = Number(M.halfH || 0);
    return [
      {
        u: ((Y - Z) % 1 + 1) % 1,
        v: Me(d - C, 0, 1)
      },
      {
        u: ((Y + Z) % 1 + 1) % 1,
        v: Me(d - C, 0, 1)
      },
      {
        u: ((Y + Z) % 1 + 1) % 1,
        v: Me(d + C, 0, 1)
      },
      {
        u: ((Y - Z) % 1 + 1) % 1,
        v: Me(d + C, 0, 1)
      }
    ];
  }
  function xe() {
    const M = new Set(W()), d = b().filter((Z) => M.has(String((Z == null ? void 0 : Z.actionGroupId) || "")));
    return M.forEach((Z) => {
      d.some((C) => String((C == null ? void 0 : C.actionGroupId) || "") === Z) || d.push({
        id: Z,
        type: "strokeGroup",
        actionGroupId: Z,
        z_index: se(),
        locked: !1,
        frame: null
      });
    }), d.sort((Z, C) => Number((Z == null ? void 0 : Z.z_index) || 0) - Number((C == null ? void 0 : C.z_index) || 0)), o.painting.groups = d, d;
  }
  function be(M, Y, d) {
    var $e;
    const Z = (Xe) => (Number(Xe || 0) % 1 + 1) % 1, C = [];
    for (const Xe of d) {
      const rt = Xe == null ? void 0 : Xe.geometry, _t = (rt == null ? void 0 : rt.geometryKind) === "lasso_fill" ? rt == null ? void 0 : rt.points : (rt == null ? void 0 : rt.processedPoints) || (rt == null ? void 0 : rt.rawPoints) || (rt == null ? void 0 : rt.points) || [];
      Array.isArray(_t) && C.push(..._t);
    }
    if (!C.length) return null;
    const J = Z((($e = C[0]) == null ? void 0 : $e.u) || 0);
    let Se = 0, ge = 0;
    C.forEach((Xe) => {
      const rt = Z((Xe == null ? void 0 : Xe.u) || 0);
      Se += J + ue(rt, J), ge += Number((Xe == null ? void 0 : Xe.v) || 0);
    });
    const Ve = (Se / C.length % 1 + 1) % 1;
    let ze = 1 / 0, O = -1 / 0, pe = 1 / 0, de = -1 / 0;
    C.forEach((Xe) => {
      const rt = Z((Xe == null ? void 0 : Xe.u) || 0), _t = ue(rt, Ve);
      ze = Math.min(ze, _t), O = Math.max(O, _t);
      const Vt = Number((Xe == null ? void 0 : Xe.v) || 0);
      pe = Math.min(pe, Vt), de = Math.max(de, Vt);
    });
    const Ee = d.reduce((Xe, rt) => {
      const _t = m(String((rt == null ? void 0 : rt.toolKind) || "pen")), Vt = Hn[_t] || Hn[oi], Gt = Math.max(1, Number((rt == null ? void 0 : rt.size) || 10)) * Math.max(0.1, Number((Vt == null ? void 0 : Vt.sizeScale) ?? 1));
      return Math.max(Xe, Gt);
    }, 0), Ke = Math.max(35e-4, Ee / 2048);
    return {
      centerUv: { u: ((Ve + (ze + O) * 0.5) % 1 + 1) % 1, v: Me((pe + de) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (O - ze) * 0.5 + Ke,
      halfH: (de - pe) * 0.5 + Ke,
      uvPad: Ke
    };
  }
  function oe(M, Y, d) {
    const Z = String(M || "").trim();
    if (!Z) return null;
    const C = b().find((Se) => String((Se == null ? void 0 : Se.actionGroupId) || "") === Z);
    if (!C) return null;
    const J = d || A(Z, Y);
    return C.frame = be(Z, Y, J), C.frame;
  }
  function L() {
    var Z;
    const M = N().map((C) => ({
      type: "sticker",
      id: String((C == null ? void 0 : C.id) || ""),
      z_index: Number((C == null ? void 0 : C.z_index) || 0),
      item: C
    })), Y = xe().map((C) => ({
      type: "strokeGroup",
      id: String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.actionGroupId) || ""),
      actionGroupId: String((C == null ? void 0 : C.actionGroupId) || ""),
      z_index: Number((C == null ? void 0 : C.z_index) || 0),
      item: C
    })), d = (Array.isArray((Z = o.painting) == null ? void 0 : Z.raster_objects) ? o.painting.raster_objects : []).filter((C) => String((C == null ? void 0 : C.layerKind) || "paint") === "paint").map((C) => ({
      type: "rasterObject",
      id: String((C == null ? void 0 : C.id) || ""),
      z_index: Number((C == null ? void 0 : C.z_index) || 0),
      item: C
    }));
    return [...M, ...Y, ...d].sort((C, J) => Number(C.z_index || 0) - Number(J.z_index || 0));
  }
  function F(M = !0) {
    var d, Z, C, J, Se, ge;
    const Y = L().filter((Ve) => Ve.type === "strokeGroup").map((Ve) => String(Ve.actionGroupId || "")).filter((Ve) => !!Ve);
    if (M) {
      const Ve = String(((Z = (d = r.interaction) == null ? void 0 : d.stroke) == null ? void 0 : Z.actionGroupId) || "").trim(), ze = String(((J = (C = r.interaction) == null ? void 0 : C.stroke) == null ? void 0 : J.layerKind) || "").trim(), O = String(((ge = (Se = r.interaction) == null ? void 0 : Se.stroke) == null ? void 0 : ge.toolKind) || "").trim();
      Ve && ze === "paint" && O !== "eraser" && !Y.includes(Ve) && Y.push(Ve);
    }
    return Y;
  }
  function fe(M = !0) {
    var ge, Ve, ze, O, pe, de;
    const Y = L();
    if (!M) return Y;
    const d = String(((Ve = (ge = r.interaction) == null ? void 0 : ge.stroke) == null ? void 0 : Ve.actionGroupId) || "").trim(), Z = String(((O = (ze = r.interaction) == null ? void 0 : ze.stroke) == null ? void 0 : O.layerKind) || "").trim(), C = String(((de = (pe = r.interaction) == null ? void 0 : pe.stroke) == null ? void 0 : de.toolKind) || "").trim();
    if (!d || Z !== "paint" || C === "eraser" || Y.some((Ee) => Ee.type === "strokeGroup" && String(Ee.actionGroupId || "") === d))
      return Y;
    const J = S();
    let Se = Y.reduce((Ee, Ke) => Math.max(Ee, Number((Ke == null ? void 0 : Ke.z_index) || 0)), -1) + 1;
    return J && ke(J) && String(J.actionGroupId || "") === d && (Se = Number(J.z_index || 0)), [
      ...Y,
      {
        type: "strokeGroup",
        id: d,
        actionGroupId: d,
        z_index: Se,
        item: null
      }
    ].sort((Ee, Ke) => Number((Ee == null ? void 0 : Ee.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
  }
  function Ae() {
    return b().slice().sort((M, Y) => Number((M == null ? void 0 : M.z_index) || 0) - Number((Y == null ? void 0 : Y.z_index) || 0)).map((M) => te(ne("paint", (M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))).filter(Boolean);
  }
  function je() {
    var M;
    return (Array.isArray((M = o.painting) == null ? void 0 : M.raster_objects) ? o.painting.raster_objects : []).filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") === "paint").slice().sort((Y, d) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)).map((Y) => Pe(Oe((Y == null ? void 0 : Y.id) || ""))).filter(Boolean);
  }
  function Je() {
    return n || !Array.isArray(o.stickers) ? [] : N();
  }
  function le() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Je()];
  }
  function z(M) {
    return !!M && Array.isArray(o.shots) && o.shots.includes(M);
  }
  function x(M) {
    return !!M && Array.isArray(o.stickers) && o.stickers.includes(M);
  }
  function he() {
    var M;
    return Array.isArray((M = o.painting) == null ? void 0 : M.raster_objects) ? o.painting.raster_objects : [];
  }
  function Pe(M) {
    const Y = D(M);
    if (!Y) return null;
    const d = he().find((Z) => String((Z == null ? void 0 : Z.id) || "").trim() === Y);
    return !d || String((d == null ? void 0 : d.layerKind) || "paint") !== "paint" ? null : {
      ...d,
      id: Oe(Y),
      type: "rasterObject",
      rasterObjectId: Y
    };
  }
  function Te(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "rasterObject") return !1;
    const Y = D(M.rasterObjectId || M.id || "");
    return !!Y && !!Pe(Oe(Y));
  }
  function te(M) {
    const Y = ae(M), d = String(Y.actionGroupId || "").trim();
    if (!d) return null;
    const Z = b().find((C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.actionGroupId) || "") === d || String((C == null ? void 0 : C.actionGroupId) || "") === d);
    return Z ? {
      ...Z,
      id: ne("paint", d),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: d
    } : null;
  }
  function ke(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "strokeGroup") return !1;
    const Y = String(M.actionGroupId || "").trim(), d = String(M.layerKind || "paint").trim() || "paint";
    return !!Y && !!te(ne(d, Y));
  }
  function A(M, Y = null) {
    const d = ae(M, Y), Z = String(d.actionGroupId || "").trim();
    return Z ? h(d.layerKind).filter((C) => String((C == null ? void 0 : C.actionGroupId) || "").trim() === Z) : [];
  }
  function E(M, Y = "paint") {
    const d = String(M || "").trim(), C = `geomv5:${String(Y || "paint").trim() || "paint"}:${d}:${r.mode}:${y()}`;
    if (r.mode === "frame") {
      const J = c(), Se = String((J == null ? void 0 : J.id) || ""), ge = J ? p(J) : null;
      return `${C}:frame:${Se}:${Math.round(Number((J == null ? void 0 : J.yaw_deg) || 0) * 1e3)}:${Math.round(Number((J == null ? void 0 : J.pitch_deg) || 0) * 1e3)}:${Math.round(Number((J == null ? void 0 : J.roll_deg) ?? (J == null ? void 0 : J.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((J == null ? void 0 : J.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((J == null ? void 0 : J.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${C}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function B(M, Y, d) {
    return !M || typeof M != "object" ? M : {
      ...M,
      u: ((Number(M.u || 0) + Number(Y || 0)) % 1 + 1) % 1,
      v: Me(Number(M.v || 0) + Number(d || 0), 0, 1)
    };
  }
  function ue(M, Y) {
    let d = Number(M || 0) - Number(Y || 0);
    for (; d > 0.5; ) d -= 1;
    for (; d < -0.5; ) d += 1;
    return d;
  }
  function T(M, Y = null, d = null) {
    var ze;
    const Z = ae(M, Y), C = Array.isArray(d) ? d : A(Z.actionGroupId, Z.layerKind), J = [];
    if (C.forEach((O) => {
      const pe = (O == null ? void 0 : O.geometry) || null, de = (pe == null ? void 0 : pe.geometryKind) === "lasso_fill" ? pe == null ? void 0 : pe.points : (pe == null ? void 0 : pe.processedPoints) || (pe == null ? void 0 : pe.rawPoints) || (pe == null ? void 0 : pe.points) || [];
      Array.isArray(de) && J.push(...de);
    }), !J.length) return { u: 0.5, v: 0.5 };
    const Se = Number(((ze = J[0]) == null ? void 0 : ze.u) || 0);
    let ge = 0, Ve = 0;
    return J.forEach((O) => {
      ge += Se + ue(Number((O == null ? void 0 : O.u) || 0), Se), Ve += Number((O == null ? void 0 : O.v) || 0);
    }), {
      u: (ge / J.length % 1 + 1) % 1,
      v: Me(Ve / J.length, 0, 1)
    };
  }
  function X(M, Y, d = 1, Z = 0) {
    if (!M || typeof M != "object") return M;
    const C = Number((Y == null ? void 0 : Y.u) || 0), J = Number((Y == null ? void 0 : Y.v) || 0), Se = ue(Number(M.u || 0), C), ge = Number(M.v || 0) - J, Ve = Number(Z || 0) * Kr, ze = Math.cos(Ve), O = Math.sin(Ve), pe = Math.max(0.02, Number(d || 1)), de = (Se * ze - ge * O) * pe, Ee = (Se * O + ge * ze) * pe;
    return {
      ...M,
      u: ((C + de) % 1 + 1) % 1,
      v: Me(J + Ee, 0, 1)
    };
  }
  function ie(M, Y, d, Z = null, C = null, J = null) {
    const Se = ae(M, C), ge = String(Se.actionGroupId || "").trim();
    if (!ge) return !1;
    const Ve = h(Se.layerKind), ze = Array.isArray(Z) ? new Map(Z.map((pe) => [String((pe == null ? void 0 : pe.id) || ""), pe])) : null;
    let O = !1;
    if (Ve.forEach((pe) => {
      if (String((pe == null ? void 0 : pe.actionGroupId) || "").trim() !== ge) return;
      const de = (ze == null ? void 0 : ze.get(String((pe == null ? void 0 : pe.id) || ""))) || pe, Ee = pe == null ? void 0 : pe.geometry, Ke = de == null ? void 0 : de.geometry;
      !Ee || !Ke || (Array.isArray(Ke.points) && (Ee.points = Ke.points.map(($e) => B($e, Y, d)), O = !0), Array.isArray(Ke.rawPoints) && (Ee.rawPoints = Ke.rawPoints.map(($e) => B($e, Y, d)), O = !0), Array.isArray(Ke.processedPoints) && (Ee.processedPoints = Ke.processedPoints.map(($e) => B($e, Y, d)), O = !0));
    }), O && J) {
      const pe = b().find((de) => String((de == null ? void 0 : de.actionGroupId) || "") === ge);
      pe && (pe.frame = null);
    }
    return O;
  }
  function K(M, Y = 1, d = 0, Z = null, C = null, J = null) {
    const Se = ae(M, C), ge = String(Se.actionGroupId || "").trim();
    if (!ge) return !1;
    const Ve = h(Se.layerKind), ze = Array.isArray(Z) ? Z : A(ge, Se.layerKind), O = Array.isArray(ze) ? new Map(ze.map((Ee) => [String((Ee == null ? void 0 : Ee.id) || ""), Ee])) : null, pe = (J == null ? void 0 : J.centerUv) ?? T(ge, Se.layerKind, ze);
    let de = !1;
    if (Ve.forEach((Ee) => {
      if (String((Ee == null ? void 0 : Ee.actionGroupId) || "").trim() !== ge) return;
      const Ke = (O == null ? void 0 : O.get(String((Ee == null ? void 0 : Ee.id) || ""))) || Ee, $e = Ee == null ? void 0 : Ee.geometry, Xe = Ke == null ? void 0 : Ke.geometry;
      !$e || !Xe || (Array.isArray(Xe.points) && ($e.points = Xe.points.map((rt) => X(rt, pe, Y, d)), de = !0), Array.isArray(Xe.rawPoints) && ($e.rawPoints = Xe.rawPoints.map((rt) => X(rt, pe, Y, d)), de = !0), Array.isArray(Xe.processedPoints) && ($e.processedPoints = Xe.processedPoints.map((rt) => X(rt, pe, Y, d)), de = !0));
    }), de && J) {
      const Ee = b().find((Ke) => String((Ke == null ? void 0 : Ke.actionGroupId) || "") === ge);
      Ee && (Ee.frame = null);
    }
    return de;
  }
  function q(M, Y, d, Z = null) {
    const C = D(M);
    if (!C) return !1;
    const J = he().find((O) => String((O == null ? void 0 : O.id) || "").trim() === C);
    if (!J) return !1;
    const Se = Z && typeof Z == "object" ? Z : J, ge = (Se == null ? void 0 : Se.transform) || {}, Ve = Number(ge.du || 0) + Number(Y || 0), ze = Me(Number(ge.dv || 0) + Number(d || 0), -1, 1);
    return J.transform || (J.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), J.transform.du = Ve, J.transform.dv = ze, !0;
  }
  function U(M, Y = 1, d = null) {
    const Z = D(M);
    if (!Z) return !1;
    const C = he().find((ze) => String((ze == null ? void 0 : ze.id) || "").trim() === Z);
    if (!C) return !1;
    const J = d && typeof d == "object" ? d : C, Se = (J == null ? void 0 : J.transform) || {}, ge = Math.max(0.01, Number(Se.scale || 1)), Ve = Me(ge * Math.max(0.01, Number(Y || 1)), 0.01, 100);
    return C.transform || (C.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), C.transform.scale = Ve, !0;
  }
  function Q() {
    return se();
  }
  function re(M) {
    var Y;
    return !M || typeof M != "object" ? !1 : s ? ((Y = M.source) == null ? void 0 : Y.kind) === "port" : String(M.id || "") === Uf || String(M.source_kind || "") === XO;
  }
  function _e(M) {
    return !!(M && typeof M == "object" && M.visible === !1);
  }
  function Fe(M) {
    return re(M) && _e(M) ? Uy : 1;
  }
  function Le(M, Y, d = 1, Z = 0) {
    if (!M || typeof M != "object") return M;
    const C = Number((Y == null ? void 0 : Y.u) || 0), J = Number((Y == null ? void 0 : Y.v) || 0), Se = ue(Number(M.u || 0), C), ge = Number(M.v || 0) - J, Ve = Math.max(0.02, Number(d || 1)), ze = Number(Z || 0) * Kr, O = Math.cos(ze), pe = Math.sin(ze), de = Se / Ve, Ee = ge / Ve, Ke = de * O + Ee * pe, $e = -de * pe + Ee * O;
    return {
      ...M,
      u: ((C + Ke) % 1 + 1) % 1,
      v: J + $e
    };
  }
  function Ge(M) {
    const Y = (M == null ? void 0 : M.bbox) || null, d = (M == null ? void 0 : M.transform) || {};
    return Y ? {
      u: (((Number(Y.u0 || 0) + Number(Y.u1 || 0)) * 0.5 + Number(d.du || 0)) % 1 + 1) % 1,
      v: Me((Number(Y.v0 || 0) + Number(Y.v1 || 0)) * 0.5 + Number(d.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Qe(M) {
    var Ve, ze, O, pe;
    const Y = (M == null ? void 0 : M.bbox) || null;
    if (!Y) return [];
    const d = {
      u: (Number(Y.u0 || 0) + Number(Y.u1 || 0)) * 0.5,
      v: (Number(Y.v0 || 0) + Number(Y.v1 || 0)) * 0.5
    }, Z = Math.max(0.01, Number(((Ve = M == null ? void 0 : M.transform) == null ? void 0 : Ve.scale) || 1)), C = Number(((ze = M == null ? void 0 : M.transform) == null ? void 0 : ze.rot_deg) || 0), J = Number(((O = M == null ? void 0 : M.transform) == null ? void 0 : O.du) || 0), Se = Number(((pe = M == null ? void 0 : M.transform) == null ? void 0 : pe.dv) || 0);
    return [
      { u: Number(Y.u0 || 0), v: Number(Y.v0 || 0) },
      { u: Number(Y.u1 || 0), v: Number(Y.v0 || 0) },
      { u: Number(Y.u1 || 0), v: Number(Y.v1 || 0) },
      { u: Number(Y.u0 || 0), v: Number(Y.v1 || 0) }
    ].map((de) => B(X(de, d, Z, C), J, Se));
  }
  function Re(M) {
    const Y = D((M == null ? void 0 : M.rasterObjectId) || (M == null ? void 0 : M.id) || ""), d = (M == null ? void 0 : M.transform) || {}, Z = (M == null ? void 0 : M.bbox) || {}, C = `${Y}:${r.mode}:${y()}:${Z.u0}:${Z.v0}:${Z.u1}:${Z.v1}:${d.du}:${d.dv}:${d.rot_deg}:${d.scale}`;
    if (r.mode === "frame") {
      const J = c(), Se = J ? p(J) : null;
      return `${C}:frame:${String((J == null ? void 0 : J.id) || "")}:${Math.round(Number((Se == null ? void 0 : Se.x) || 0))}:${Math.round(Number((Se == null ? void 0 : Se.y) || 0))}:${Math.round(Number((Se == null ? void 0 : Se.w) || 0))}:${Math.round(Number((Se == null ? void 0 : Se.h) || 0))}`;
    }
    return `${C}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function We(M) {
    const Y = String((M == null ? void 0 : M.id) || ""), d = z(M) ? "frame" : x(M) ? "sticker" : "item", Z = R(M), C = [
      d,
      Y,
      r.mode,
      Number((Z == null ? void 0 : Z.yaw_deg) || 0).toFixed(4),
      Number((Z == null ? void 0 : Z.pitch_deg) || 0).toFixed(4),
      Number((Z == null ? void 0 : Z.hFOV_deg) || 0).toFixed(4),
      Number((Z == null ? void 0 : Z.vFOV_deg) || 0).toFixed(4),
      Number((Z == null ? void 0 : Z.rot_deg) || 0).toFixed(4),
      Number((Z == null ? void 0 : Z.roll_deg) || 0).toFixed(4),
      ui(Z),
      I(M) && _(M)
    ].join(":");
    if (r.mode === "frame") {
      const J = c(), Se = J ? p(J) : null;
      return `${C}:frame:${String((J == null ? void 0 : J.id) || "")}:${Math.round(Number((Se == null ? void 0 : Se.x) || 0))}:${Math.round(Number((Se == null ? void 0 : Se.y) || 0))}:${Math.round(Number((Se == null ? void 0 : Se.w) || 0))}:${Math.round(Number((Se == null ? void 0 : Se.h) || 0))}`;
    }
    return `${C}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function lt() {
    L().forEach((Y, d) => {
      Y.type === "sticker" && Y.item && (Y.item.z_index = d), Y.type === "strokeGroup" && Y.item && (Y.item.z_index = d), Y.type === "rasterObject" && Y.item && (Y.item.z_index = d);
    });
  }
  return {
    connect(M) {
      ({
        getActiveCutoutShot: c,
        getBrushPresetIdForTool: m,
        getFrameViewRect: p,
        getPaintingLayerList: h,
        getPaintingRevisionKey: y,
        getSelected: S,
        sceneStickerShown: _
      } = M);
    },
    getList: w,
    skyStickers: N,
    isSceneSticker: I,
    isUploadingSticker: G,
    poseOf: R,
    writePose: $,
    getPaintingGroupList: b,
    makeStrokeGroupSelectionId: ne,
    makeRasterObjectSelectionId: Oe,
    parseRasterObjectSelectionId: D,
    ensurePaintingGroupEntry: ye,
    getFrameCornersUv: Ce,
    ensureGroupFrame: oe,
    getDisplayListObjects: L,
    getOrderedPaintGroupIds: F,
    getOrderedDisplayListObjects: fe,
    getSelectableStrokeGroupItems: Ae,
    getSelectableRasterObjectItems: je,
    cutoutStickers: Je,
    getCutoutSelectableItems: le,
    isShotItem: z,
    isStickerItem: x,
    getRasterObjectList: he,
    getRasterObjectItem: Pe,
    isRasterObjectItem: Te,
    getStrokeGroupItem: te,
    isStrokeGroupItem: ke,
    getStrokeGroupStrokes: A,
    getStrokeGeomCacheKey: E,
    shortestWrappedDelta: ue,
    getStrokeGroupCenterUv: T,
    applyStrokeGroupOffset: ie,
    applyStrokeGroupTransform: K,
    applyRasterObjectOffset: q,
    applyRasterObjectTransform: U,
    getNextStickerZIndex: Q,
    isExternalSticker: re,
    isStickerHidden: _e,
    getStickerDisplayAlpha: Fe,
    inverseTransformErpPointAround: Le,
    getRasterObjectCenterUv: Ge,
    getRasterObjectTransformedErpPoints: Qe,
    getRasterObjectGeomCacheKey: Re,
    getSceneItemGeomCacheKey: We,
    normalizeDisplayZIndices: lt
  };
}
function DE(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    sceneV2: i,
    shotEditor: o,
    state: s,
    timeline: l,
    type: c
  } = e;
  let m, p, h, y, S, _, w, N, I, G, R, $, b, H, W, ne, Oe, D, ae, se, ye, Ce, xe, be, oe, L, F, fe, Ae, je, Je, le;
  function z() {
    const M = String(t.selectedId || "");
    if (!M) return null;
    const Y = b(M);
    if (Y) return Y;
    const d = G(M);
    return d || (o ? _().find((Z) => String((Z == null ? void 0 : Z.id) || "") === M) || null : N().find((Z) => String((Z == null ? void 0 : Z.id) || "") === M) || null);
  }
  function x() {
    const M = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], Y = [], d = /* @__PURE__ */ new Set();
    return M.forEach((Z) => {
      const C = String(Z || "").trim();
      if (!C || d.has(C)) return;
      d.add(C);
      const J = C === String(t.selectedId || "") ? z() : b(C) || G(C) || (o ? _().find((Se) => String((Se == null ? void 0 : Se.id) || "") === C) : N().find((Se) => String((Se == null ? void 0 : Se.id) || "") === C));
      J && Y.push(J);
    }), Y;
  }
  function he(M = null) {
    const Y = Array.isArray(M) ? M : x();
    if (!Y || Y.length < 2) return null;
    const d = Y.map((ze) => be(ze)).filter((ze) => (ze == null ? void 0 : ze.visible) && Array.isArray(ze.corners) && ze.corners.length);
    if (!d.length) return null;
    const Z = d.flatMap((ze) => ze.corners.map((O) => Number((O == null ? void 0 : O.x) || 0))), C = d.flatMap((ze) => ze.corners.map((O) => Number((O == null ? void 0 : O.y) || 0))), J = Math.min(...Z), Se = Math.max(...Z), ge = Math.min(...C), Ve = Math.max(...C);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (J + Se) * 0.5, y: (ge + Ve) * 0.5 },
      corners: [
        { x: J, y: ge },
        { x: Se, y: ge },
        { x: Se, y: Ve },
        { x: J, y: Ve }
      ],
      edgeMidpoints: [
        { edge: "top", x: (J + Se) * 0.5, y: ge, a: { x: J, y: ge }, b: { x: Se, y: ge } },
        { edge: "right", x: Se, y: (ge + Ve) * 0.5, a: { x: Se, y: ge }, b: { x: Se, y: Ve } },
        { edge: "bottom", x: (J + Se) * 0.5, y: Ve, a: { x: Se, y: Ve }, b: { x: J, y: Ve } },
        { edge: "left", x: J, y: (ge + Ve) * 0.5, a: { x: J, y: Ve }, b: { x: J, y: ge } }
      ],
      rotateStemBase: { x: (J + Se) * 0.5, y: ge },
      rotateHandle: { x: (J + Se) * 0.5, y: ge - 30 }
    };
  }
  function Pe(M) {
    const Y = String((M == null ? void 0 : M.id) || "").trim();
    return !!Y && Array.isArray(t.selectedIds) && t.selectedIds.includes(Y);
  }
  function Te() {
    const M = z();
    return M ? ye(M) || ne(M) ? "stroke" : D(M) ? "frame" : "image" : null;
  }
  function te(M) {
    if (!M || typeof M != "object") return !1;
    if (ye(M)) {
      const Y = String(M.actionGroupId || M.id || "").trim(), d = I().find((Z) => String((Z == null ? void 0 : Z.actionGroupId) || (Z == null ? void 0 : Z.id) || "").trim() === Y);
      return (d == null ? void 0 : d.locked) === !0;
    }
    if (ne(M)) {
      const Y = L(M.rasterObjectId || M.id || ""), d = R().find((Z) => String((Z == null ? void 0 : Z.id) || "").trim() === Y);
      return (d == null ? void 0 : d.locked) === !0;
    }
    return M.locked === !0;
  }
  function ke(M = null) {
    const Y = Array.isArray(M) ? M : x();
    return Y.length > 0 && Y.every((d) => te(d));
  }
  function A(M, Y) {
    const d = Y === !0;
    if (!M || typeof M != "object") return !1;
    if (ye(M)) {
      const Z = String(M.actionGroupId || M.id || "").trim(), C = I().find((J) => String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim() === Z);
      return !C || C.locked === d ? !1 : (C.locked = d, !0);
    }
    if (ne(M)) {
      const Z = L(M.rasterObjectId || M.id || ""), C = R().find((J) => String((J == null ? void 0 : J.id) || "").trim() === Z);
      return !C || C.locked === d ? !1 : (C.locked = d, !0);
    }
    return M.locked === d ? !1 : (M.locked = d, !0);
  }
  function E() {
    if (n) return;
    const M = x();
    if (!M.length) return;
    const Y = !ke(M);
    let d = !1;
    M.forEach((Z) => {
      A(Z, Y) && (d = !0);
    }), d && (fe(), p(), Je(), le(), Ae());
  }
  function B(M) {
    Le(), l.selection = null, t.selectedId = (M == null ? void 0 : M.id) || null, t.selectedIds = M != null && M.id ? [M.id] : [], M && se(M) ? s.active.selected_sticker_id = M.id || null : s.active.selected_sticker_id = null, M && D(M) ? s.active.selected_shot_id = M.id || null : M ? D(M) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function ue(M, Y = null) {
    const d = [], Z = /* @__PURE__ */ new Set();
    (Array.isArray(M) ? M : []).forEach((Se) => {
      const ge = String((Se == null ? void 0 : Se.id) || "").trim();
      !ge || Z.has(ge) || (Z.add(ge), d.push(ge));
    }), t.selectedIds = d, Le(), l.selection = null;
    const C = String(Y || "").trim();
    t.selectedId = C && d.includes(C) ? C : d[d.length - 1] || null;
    const J = z();
    s.active.selected_sticker_id = J && se(J) && J.id || null, J && D(J) ? s.active.selected_shot_id = J.id || null : d.length || (s.active.selected_shot_id = null);
  }
  function T() {
    const M = (Array.isArray(s.shots) ? s.shots : []).map((d, Z) => ({
      kind: "frame",
      item: d,
      label: String((d == null ? void 0 : d.label) || `Frame ${Z + 1}`)
    })), Y = y().map((d, Z) => {
      var J, Se;
      const C = W(d) ? String(d.id || Uf) : String(((Se = (J = s.assets) == null ? void 0 : J[d.asset_id]) == null ? void 0 : Se.name) || d.asset_id || d.id || `Image ${Z + 1}`);
      return {
        kind: "image",
        item: d,
        label: C
      };
    });
    return [...M, ...Y];
  }
  function X(M) {
    return M === "frame" ? Ue.camera : M === "stroke" ? Ue.paintbrush_vertical_tool : Ue.image;
  }
  function ie(M) {
    return !M || !M.item ? {
      label: String((M == null ? void 0 : M.label) || ""),
      icon: null
    } : {
      label: String(M.label || ""),
      icon: X(M.kind)
    };
  }
  function K() {
    if (n) return;
    const M = z();
    !M || !W(M) || (M.visible = ae(M), Re(), Ce(), fe(), p(), le(), Je(), Ae());
  }
  function q() {
    if (n || c !== "stickers") return;
    const M = z();
    if (!M || !W(M)) return;
    const Y = M.initial_pose;
    if (!Y || typeof Y != "object") return;
    M.yaw_deg = Number(Y.yaw_deg ?? M.yaw_deg ?? 0), M.pitch_deg = Number(Y.pitch_deg ?? M.pitch_deg ?? 0), M.hFOV_deg = Number(Y.hFOV_deg ?? M.hFOV_deg ?? 30);
    const d = $(dc, () => {
      Ae();
    });
    d && (d.complete || d.naturalWidth || d.width) ? M.vFOV_deg = h(
      Number(Y.hFOV_deg ?? M.hFOV_deg ?? 30),
      Number(d.naturalWidth || d.width || 1),
      Number(d.naturalHeight || d.height || 1)
    ) : M.vFOV_deg = Number(Y.vFOV_deg ?? M.vFOV_deg ?? 30), M.rot_deg = Number(Y.rot_deg ?? M.rot_deg ?? 0), fe(), p(), le(), Je(), Ae();
  }
  function U(M) {
    if (!M || !W(M)) return null;
    const Y = M.initial_pose;
    if (!Y || typeof Y != "object") return null;
    const d = {
      yaw_deg: Number(Y.yaw_deg ?? M.yaw_deg ?? 0),
      pitch_deg: Number(Y.pitch_deg ?? M.pitch_deg ?? 0),
      hFOV_deg: Number(Y.hFOV_deg ?? M.hFOV_deg ?? 30),
      vFOV_deg: Number(Y.vFOV_deg ?? M.vFOV_deg ?? 30),
      rot_deg: Number(Y.rot_deg ?? M.rot_deg ?? 0)
    }, Z = $(dc, () => {
      Ae();
    });
    return Z && (Z.complete || Z.naturalWidth || Z.width) && (d.vFOV_deg = h(
      d.hFOV_deg,
      Number(Z.naturalWidth || Z.width || 1),
      Number(Z.naturalHeight || Z.height || 1)
    )), d;
  }
  function Q() {
    const M = z();
    if (!M || !W(M)) return !1;
    const Y = U(M);
    if (!Y) return !1;
    const d = (Z, C) => Math.abs(Number(Z || 0) - Number(C || 0)) <= 1e-4;
    return !(d(M.yaw_deg, Y.yaw_deg) && d(M.pitch_deg, Y.pitch_deg) && d(M.hFOV_deg, Y.hFOV_deg) && d(M.vFOV_deg, Y.vFOV_deg) && d(M.rot_deg, Y.rot_deg));
  }
  function re(M = {}) {
    const d = M.preservePanelValues !== !1 ? F(z()) : null;
    d && (t.panelLastValues = {
      yaw_deg: Number(d.yaw_deg || 0),
      pitch_deg: Number(d.pitch_deg || 0),
      hFOV_deg: Number(d.hFOV_deg || (c === "stickers" ? 30 : 90)),
      vFOV_deg: Number(d.vFOV_deg || (c === "stickers" ? 30 : 60)),
      rot_deg: Number(d.rot_deg || 0),
      roll_deg: Number(d.roll_deg || 0),
      aspect_id: ui(d)
    }), t.selectedId = null, t.selectedIds = [], Le(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function _e() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((M) => M.id === t.worldSelectedId && M.placement === "world") || null;
  }
  function Fe(M) {
    B(null), t.worldSelectedId = M, r.backgroundDirty = !0;
  }
  function Le() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function Ge(M) {
    return !!M && !n && !M.locked;
  }
  function Qe() {
    if (c !== "cutout") return;
    const M = S();
    M && (t.selectedId = String(M.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function Re() {
    var Y;
    const M = z();
    (Oe(M) && !je(M) || t.selectedId === ec && H() && !m() || Te() === "stroke" && !oe()) && B(null), ((Y = _e()) == null ? void 0 : Y.visible) === !1 && Le();
  }
  function We() {
    if (n) return;
    const M = x();
    if (!z() || M.length === 0 || M.some((ge) => te(ge))) return;
    xe();
    const d = w(), Z = new Set(M.map((ge) => se(ge) ? `sticker:${String(ge.id || "")}` : ne(ge) ? `rasterObject:${L(ge.rasterObjectId || ge.id || "")}` : `strokeGroup:${String(ge.actionGroupId || ge.id || "")}`)), C = [], J = [];
    if (d.forEach((ge) => {
      var ze, O;
      const Ve = ge.type === "sticker" ? `sticker:${String(((ze = ge.item) == null ? void 0 : ze.id) || "")}` : ge.type === "rasterObject" ? `rasterObject:${String(((O = ge.item) == null ? void 0 : O.id) || ge.id || "")}` : `strokeGroup:${String(ge.actionGroupId || "")}`;
      Z.has(Ve) ? C.push(ge) : J.push(ge);
    }), !C.length || C[C.length - 1] === d[d.length - 1]) return;
    [...J, ...C].forEach((ge, Ve) => {
      ge.type === "sticker" && ge.item && (ge.item.z_index = Ve), ge.type === "strokeGroup" && ge.item && (ge.item.z_index = Ve), ge.type === "rasterObject" && ge.item && (ge.item.z_index = Ve);
    }), Ce(), fe(), p(), Je(), Ae();
  }
  function lt() {
    if (n) return;
    const M = x();
    if (!z() || M.length === 0 || M.some((ge) => te(ge))) return;
    xe();
    const d = w(), Z = new Set(M.map((ge) => se(ge) ? `sticker:${String(ge.id || "")}` : ne(ge) ? `rasterObject:${L(ge.rasterObjectId || ge.id || "")}` : `strokeGroup:${String(ge.actionGroupId || ge.id || "")}`)), C = [], J = [];
    if (d.forEach((ge) => {
      var ze, O;
      const Ve = ge.type === "sticker" ? `sticker:${String(((ze = ge.item) == null ? void 0 : ze.id) || "")}` : ge.type === "rasterObject" ? `rasterObject:${String(((O = ge.item) == null ? void 0 : O.id) || ge.id || "")}` : `strokeGroup:${String(ge.actionGroupId || "")}`;
      Z.has(Ve) ? C.push(ge) : J.push(ge);
    }), !C.length || C[0] === d[0]) return;
    [...C, ...J].forEach((ge, Ve) => {
      ge.type === "sticker" && ge.item && (ge.item.z_index = Ve), ge.type === "strokeGroup" && ge.item && (ge.item.z_index = Ve), ge.type === "rasterObject" && ge.item && (ge.item.z_index = Ve);
    }), Ce(), fe(), p(), Je(), Ae();
  }
  return {
    connect(M) {
      ({
        cameraShoots: m,
        commitAndRefreshNode: p,
        computeStickerVFov: h,
        cutoutStickers: y,
        getActiveCutoutShot: S,
        getCutoutSelectableItems: _,
        getDisplayListObjects: w,
        getList: N,
        getPaintingGroupList: I,
        getRasterObjectItem: G,
        getRasterObjectList: R,
        getStickerUiImage: $,
        getStrokeGroupItem: b,
        hasCamera: H,
        isExternalSticker: W,
        isRasterObjectItem: ne,
        isSceneSticker: Oe,
        isShotItem: D,
        isStickerHidden: ae,
        isStickerItem: se,
        isStrokeGroupItem: ye,
        markObjectVisualsDirty: Ce,
        normalizeDisplayZIndices: xe,
        objectGeom: be,
        paintingShown: oe,
        parseRasterObjectSelectionId: L,
        poseOf: F,
        pushHistory: fe,
        requestDraw: Ae,
        sceneStickerShown: je,
        updateSelectionMenu: Je,
        updateSidePanel: le
      } = M);
    },
    getSelected: z,
    getSelectedItems: x,
    getMultiSelectionGeom: he,
    isItemSelected: Pe,
    getSelectedKind: Te,
    isItemLocked: te,
    areAllSelectedItemsLocked: ke,
    toggleSelectedLock: E,
    setSelectedItem: B,
    setSelectedItems: ue,
    getCutoutInspectorItems: T,
    getSelectionItemIcon: X,
    getSelectionItemLabelData: ie,
    toggleSelectedExternalStickerVisibility: K,
    restoreSelectedToInitialPose: q,
    canRestoreSelectedToInitial: Q,
    clearSelection: re,
    selectedWorldSticker: _e,
    selectWorldSticker: Fe,
    clearWorldSelection: Le,
    worldStickerEditable: Ge,
    applyInitialCutoutFocus: Qe,
    releaseHiddenSelection: Re,
    bringSelectedToFront: We,
    sendSelectedToBack: lt
  };
}
function LE(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: o
  } = e;
  let s, l, c, m, p, h, y = { key: [], projection: null };
  function S() {
    return o && s() && i.camera.projection === "erp";
  }
  function _() {
    const x = ne({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !x || x.length !== 4 ? !1 : x[0].y >= x[3].y;
  }
  function w() {
    return Yy({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function N() {
    const z = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return z.some((x, he) => x !== y.key[he]) && (y = { key: z, projection: Xy(w(), n.width, n.height) }), y.projection;
  }
  function I(z) {
    const x = N().project(z);
    return x.z > 1e-4 ? x : null;
  }
  function G(z, x) {
    return N().ray(z, x);
  }
  function R() {
    const z = n.width, x = n.height, he = 2;
    if (z / Math.max(x, 1) >= he) {
      const A = x, E = A * he;
      return { x: (z - E) * 0.5, y: 0, w: E, h: A };
    }
    const Te = z, te = Te / he;
    return { x: 0, y: (x - te) * 0.5, w: Te, h: te };
  }
  function $(z) {
    return {
      lon: Math.atan2(z.x, z.z),
      lat: Math.asin(Me(z.y, -1, 1))
    };
  }
  function b(z, x = null) {
    const { lon: he, lat: Pe } = $(z), Te = R();
    let te = Te.x + (he / (2 * Math.PI) + 0.5) * Te.w;
    const ke = Te.y + (0.5 - Pe / Math.PI) * Te.h;
    if (x !== null) {
      for (; te - x > Te.w / 2; ) te -= Te.w;
      for (; te - x < -Te.w / 2; ) te += Te.w;
    }
    return { x: te, y: ke, z: 1 };
  }
  function H(z) {
    const x = m(z), he = fa(
      Number(x.yaw_deg || 0),
      Number(x.pitch_deg || 0),
      Number(x.rot_deg || x.roll_deg || 0)
    ), Pe = Math.tan(Me(Number(x.hFOV_deg || 20), 0.1, 179) * 0.5 * Kr), Te = Math.tan(Me(Number(x.vFOV_deg || 20), 0.1, 179) * 0.5 * Kr);
    return {
      centerDir: he.fwd,
      right: he.right,
      up: he.up,
      tanX: Pe,
      tanY: Te
    };
  }
  function W(z, x, he) {
    return fE(Gg(Gg(z.centerDir, Wg(z.right, x)), Wg(z.up, he)));
  }
  function ne(z) {
    const x = H(z);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Pe, v: Te }) => W(x, Pe * x.tanX, Te * x.tanY));
  }
  function Oe(z, x, he) {
    const Pe = H(z), Te = (x * 2 - 1) * Pe.tanX, te = (1 - he * 2) * Pe.tanY;
    return W(Pe, Te, te);
  }
  function D(z) {
    const x = t.width / Math.max(1, n.width), he = t.height / Math.max(1, n.height);
    return { x: z.x * x, y: z.y * he, w: z.w * x, h: z.h * he };
  }
  function ae(z, x = null, he = null, Pe = null) {
    if (r.mode === "frame") {
      const Te = x || l();
      if (!Te) return [];
      const te = he || c(Te);
      return fe(z, Te, te);
    }
    return oe(z, Pe);
  }
  function se(z, x = null, he = null, Pe = null, Te = null) {
    if (!z) return null;
    if (r.mode === "unwrap") {
      const ke = oe([z], Te);
      return ke[0] ? { x: ke[0].x, y: ke[0].y, z: 1 } : null;
    }
    const te = Ce(z);
    return te ? p(te, x, he, Pe) : null;
  }
  function ye(z, x) {
    if (!z || !x) return null;
    const he = Number(x.x || 0), Pe = Number(x.y || 0);
    return Oe(z, he, Pe);
  }
  function Ce(z) {
    if (!z) return null;
    const x = (Number(z.u || 0) - 0.5) * (2 * Math.PI), he = (0.5 - Number(z.v || 0)) * Math.PI, Pe = Math.cos(he);
    return Ec(Pe * Math.sin(x), Math.sin(he), Pe * Math.cos(x));
  }
  function xe(z, x) {
    if (!z || !x) return null;
    const he = H(z), Pe = Gu(x, he.centerDir);
    if (!Number.isFinite(Pe) || Pe <= 1e-6) return null;
    const Te = Gu(x, he.right) / Pe, te = Gu(x, he.up) / Pe;
    return {
      x: (Te / Math.max(1e-6, he.tanX) + 1) * 0.5,
      y: (1 - te / Math.max(1e-6, he.tanY)) * 0.5
    };
  }
  function be(z) {
    if (!Array.isArray(z) || z.length < 3) return [];
    if (r.mode === "unwrap") {
      const he = R();
      return z.map((Pe) => ({
        x: he.x + Number(Pe.u || 0) * he.w,
        y: he.y + Number(Pe.v || 0) * he.h
      }));
    }
    const x = z.map((he) => I(Ce(he))).filter(Boolean);
    return x.every((he) => Number(he.z || 0) > 0) ? x.map((he) => ({ x: Number(he.x || 0), y: Number(he.y || 0) })) : [];
  }
  function oe(z, x = null) {
    if (!Array.isArray(z) || z.length < 1) return [];
    if (r.mode === "unwrap") {
      const Pe = R();
      return z.map((Te) => {
        const te = (Number(Te.u || 0) % 1 + 1) % 1, ke = x == null ? te : Number(x || 0) + h(te, x);
        return {
          x: Pe.x + ke * Pe.w,
          y: Pe.y + Number(Te.v || 0) * Pe.h
        };
      });
    }
    const he = z.map((Pe) => I(Ce(Pe))).filter(Boolean);
    return he.every((Pe) => Number(Pe.z || 0) > 0) ? he.map((Pe) => ({ x: Number(Pe.x || 0), y: Number(Pe.y || 0) })) : [];
  }
  function L(z, x = 160) {
    if (!Array.isArray(z) || z.length < 3) return !1;
    for (let he = 0; he < z.length; he += 1) {
      const Pe = z[he], Te = z[(he + 1) % z.length];
      if (!Pe || !Te || !Number.isFinite(Pe.x) || !Number.isFinite(Pe.y) || !Number.isFinite(Te.x) || !Number.isFinite(Te.y) || Math.hypot(Number(Te.x) - Number(Pe.x), Number(Te.y) - Number(Pe.y)) > x) return !1;
    }
    return !0;
  }
  function F(z, x, he) {
    if (!Array.isArray(z) || z.length < 3 || !x || !he) return [];
    const Pe = [];
    for (const Te of z) {
      const te = Ce(Te), ke = xe(x, te);
      if (!ke) return [];
      Pe.push({
        x: Number(he.x || 0) + Number(ke.x || 0) * Number(he.w || 0),
        y: Number(he.y || 0) + Number(ke.y || 0) * Number(he.h || 0)
      });
    }
    return L(Pe, Math.max(80, Math.max(he.w, he.h) * 0.75)) ? Pe : [];
  }
  function fe(z, x, he) {
    if (!Array.isArray(z) || z.length < 1 || !x || !he) return [];
    const Pe = [];
    for (const Te of z) {
      const te = Ce(Te), ke = xe(x, te);
      ke && Pe.push({
        x: Number(he.x || 0) + Number(ke.x || 0) * Number(he.w || 0),
        y: Number(he.y || 0) + Number(ke.y || 0) * Number(he.h || 0)
      });
    }
    return Pe;
  }
  function Ae(z) {
    const x = n.getBoundingClientRect();
    return {
      x: (z.clientX - x.left) / x.width * n.width,
      y: (z.clientY - x.top) / x.height * n.height
    };
  }
  function je(z) {
    const x = n.getBoundingClientRect();
    return {
      x: Number(z.clientX) - Number(x.left || 0),
      y: Number(z.clientY) - Number(x.top || 0)
    };
  }
  function Je(z, x = performance.now()) {
    if (r.mode === "unwrap") {
      const te = R(), ke = (z.x - te.x) / Math.max(1, te.w), A = (z.y - te.y) / Math.max(1, te.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ke % 1 + 1) % 1,
        v: Me(A, 0, 1),
        t: Number(x || 0)
      };
    }
    const he = G(z.x, z.y), { lon: Pe, lat: Te } = $(he);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Pe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Me(0.5 - Te / Math.PI, 0, 1),
      t: Number(x || 0)
    };
  }
  function le(z, x, he = performance.now()) {
    const Pe = c(x);
    if (!Pe) return null;
    const Te = {
      x: (Number(z.x) - Pe.x) / Math.max(1, Pe.w),
      y: (Number(z.y) - Pe.y) / Math.max(1, Pe.h)
    };
    if (Te.x < 0 || Te.x > 1 || Te.y < 0 || Te.y > 1) return null;
    const te = ye(x, Te);
    if (!te) return null;
    const { lon: ke, lat: A } = $(te);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ke / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Me(0.5 - A / Math.PI, 0, 1),
      t: Number(he || 0)
    };
  }
  return {
    connect(z) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: l,
        getFrameViewRect: c,
        poseOf: m,
        projectSceneItemDir: p,
        shortestWrappedDelta: h
      } = z);
    },
    isErpCamera: S,
    currentViewCamera: w,
    currentViewProjection: N,
    projectDir: I,
    screenToWorldDir: G,
    getUnwrapRect: R,
    projectDirUnwrap: b,
    getStickerFrame: H,
    stickerDirFromFrame: W,
    stickerCornersDir: ne,
    stickerSampleDir: Oe,
    stickerCornerOrderSanity: _,
    projectEditorPoints: ae,
    projectErpPointToEditor: se,
    frameLocalPointToWorldDir: ye,
    erpPointToWorldDir: Ce,
    worldDirToFrameLocalPoint: xe,
    projectLassoPointsToCurrentView: be,
    projectErpLassoPointsToFrameRect: F,
    screenPos: Ae,
    screenPosCss: je,
    screenPosToErpPoint: Je,
    screenPosToFrameAsErpPoint: le,
    deviceRect: D
  };
}
function RE(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let o, s, l, c, m, p, h, y, S, _, w, N, I, G, R, $, b, H, W, ne, Oe, D, ae, se, ye, Ce, xe, be, oe, L, F, fe;
  function Ae(te, ke) {
    const A = String(te.actionGroupId || te.id || "").trim(), E = R(A, te.layerKind), B = l(A, te.layerKind, E), ue = (B == null ? void 0 : B.centerUv) || G(A, te.layerKind, E), T = r.mode === "unwrap" ? Number((ue == null ? void 0 : ue.u) || 0) : null, X = [], ie = r.mode === "frame" ? c() : null, K = ie ? h(ie) : null;
    for (const Re of E) {
      const We = (Re == null ? void 0 : Re.geometry) || null, lt = (We == null ? void 0 : We.geometryKind) === "lasso_fill" ? We == null ? void 0 : We.points : (We == null ? void 0 : We.processedPoints) || (We == null ? void 0 : We.rawPoints) || (We == null ? void 0 : We.points) || [], M = Ce(lt, ie, K, T).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
      if (!M.length) continue;
      const Y = m(String((Re == null ? void 0 : Re.toolKind) || "pen")), d = Hn[Y] || Hn[oi];
      X.push({
        points: M,
        closed: String((We == null ? void 0 : We.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((Re == null ? void 0 : Re.size) || 10) * Math.max(0.1, Number((d == null ? void 0 : d.sizeScale) ?? 1)) + 10),
        layerKind: String((Re == null ? void 0 : Re.layerKind) || te.layerKind || "paint")
      });
    }
    const q = xe(ue, null, ie, K, T);
    if (!q) {
      const Re = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(ke, Re), Re;
    }
    const Q = p(B).map((Re) => xe(Re, q.x, ie, K, T)).filter((Re) => Number.isFinite(Re == null ? void 0 : Re.x) && Number.isFinite(Re == null ? void 0 : Re.y)).map((Re) => ({ x: Number(Re.x || 0), y: Number(Re.y || 0) }));
    if (Q.length < 4) {
      const Re = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(ke, Re), Re;
    }
    const re = (Re, We) => ({
      x: (Number((Re == null ? void 0 : Re.x) || 0) + Number((We == null ? void 0 : We.x) || 0)) * 0.5,
      y: (Number((Re == null ? void 0 : Re.y) || 0) + Number((We == null ? void 0 : We.y) || 0)) * 0.5,
      a: Re,
      b: We
    }), _e = re(Q[0], Q[1]), Fe = re(Q[1], Q[2]), Le = re(Q[2], Q[3]), Ge = re(Q[3], Q[0]), Qe = {
      kind: "strokeGroup",
      center: { x: Number(q.x || 0), y: Number(q.y || 0) },
      corners: Q,
      edgeMidpoints: [
        { edge: "top", ..._e },
        { edge: "right", ...Fe },
        { edge: "bottom", ...Le },
        { edge: "left", ...Ge }
      ],
      rotateStemBase: { x: _e.x, y: _e.y },
      rotateHandle: { x: _e.x, y: _e.y - 30 },
      strokePaths: X,
      visible: !0
    };
    return r._strokeGeomCache.set(ke, Qe), Qe;
  }
  function je(te, ke) {
    const A = r.mode === "frame" ? c() : null, E = A ? h(A) : null, B = y(te), ue = r.mode === "unwrap" ? Number((B == null ? void 0 : B.u) || 0) : null, T = xe(B, null, A, E, ue), ie = _(te).map((Q) => xe(Q, (T == null ? void 0 : T.x) ?? null, A, E, ue)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y));
    if (!Array.isArray(ie) || ie.length < 4) {
      const Q = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(ke, Q), Q;
    }
    const K = ie.slice(0, 4).map((Q) => ({ x: Number((Q == null ? void 0 : Q.x) || 0), y: Number((Q == null ? void 0 : Q.y) || 0) })), U = {
      kind: "rasterObject",
      center: {
        x: K.reduce((Q, re) => Q + Number(re.x || 0), 0) / K.length,
        y: K.reduce((Q, re) => Q + Number(re.y || 0), 0) / K.length
      },
      corners: K,
      visible: !0
    };
    return r._strokeGeomCache.set(ke, U), U;
  }
  function Je(te, ke = null, A = null, E = null, B = {}) {
    if (r.mode === "frame") {
      const q = A || c(), U = E || h(q);
      if (!q || !U) return null;
      const Q = q ? fe(q, te) : null;
      return Q ? {
        x: Number(U.x || 0) + Number(Q.x || 0) * Number(U.w || 0),
        y: Number(U.y || 0) + Number(Q.y || 0) * Number(U.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return ye(te, ke);
    const ue = 1e-4, T = o().project(te, ue);
    if (!Number.isFinite(T.z) || T.z <= ue && !(B != null && B.clipBehind)) return null;
    const X = n.width, ie = n.height, K = Math.max(X, ie) * 2;
    return {
      x: Me(T.x, -K, X + K),
      y: Me(T.y, -K, ie + K),
      z: Math.max(T.z, ue),
      rawZ: T.z,
      clipped: T.z <= ue
    };
  }
  function le(te, ke = []) {
    if (r.mode !== "pano" || ne(te)) return 1;
    const A = ke.map((E) => Number((E == null ? void 0 : E.rawZ) ?? (E == null ? void 0 : E.z))).filter((E) => Number.isFinite(E));
    return A.length ? uE(0.035, 0.2, Math.min(...A)) : 1;
  }
  function z(te) {
    if (H(te) && !be(te)) return { visible: !1 };
    const ke = ae(te), A = Wn(Number(ke.yaw_deg || 0), Number(ke.pitch_deg || 0)), E = r.mode === "frame" ? c() : null, B = E ? h(E) : null, ue = r.mode === "pano" && (ne(te) || W(te)), T = ue ? { clipBehind: !0 } : null, X = Je(A, null, E, B, T);
    if (!X) return { visible: !1 };
    const ie = N(te), q = oe(te).map((C) => Je(C, X.x, E, B, T)).filter((C) => Number.isFinite(C == null ? void 0 : C.x) && Number.isFinite(C == null ? void 0 : C.y));
    if (q.length < 4) return { visible: !1 };
    const U = L(ie, 0, ie.tanY), Q = L(ie, 0, ie.tanY + Math.max(ie.tanY * 0.43, 0.053)), re = Je(U, X.x, E, B, T);
    if (!re) return { visible: !1 };
    const _e = Je(Q, (re == null ? void 0 : re.x) ?? X.x, E, B, T), Fe = ((_e == null ? void 0 : _e.x) ?? re.x) - re.x, Le = ((_e == null ? void 0 : _e.y) ?? re.y) - re.y, Ge = Math.hypot(Fe, Le) || 1, Qe = {
      x: re.x + Fe / Ge * 30,
      y: re.y + Le / Ge * 30
    }, Re = Je(L(ie, 0, ie.tanY), X.x, E, B, T), We = Je(L(ie, ie.tanX, 0), X.x, E, B, T), lt = Je(L(ie, 0, -ie.tanY), X.x, E, B, T), M = Je(L(ie, -ie.tanX, 0), X.x, E, B, T);
    if (!Re || !We || !lt || !M) return { visible: !1 };
    const Y = [
      X,
      ...q,
      re,
      _e,
      Re,
      We,
      lt,
      M
    ];
    if (ue && !Y.some((C) => Number((C == null ? void 0 : C.rawZ) ?? (C == null ? void 0 : C.z)) > 1e-4)) return { visible: !1 };
    const d = le(te, Y), Z = [
      {
        edge: "top",
        x: Re.x,
        y: Re.y,
        a: { x: q[0].x, y: q[0].y },
        b: { x: q[1].x, y: q[1].y }
      },
      {
        edge: "right",
        x: We.x,
        y: We.y,
        a: { x: q[1].x, y: q[1].y },
        b: { x: q[2].x, y: q[2].y }
      },
      {
        edge: "bottom",
        x: lt.x,
        y: lt.y,
        a: { x: q[2].x, y: q[2].y },
        b: { x: q[3].x, y: q[3].y }
      },
      {
        edge: "left",
        x: M.x,
        y: M.y,
        a: { x: q[3].x, y: q[3].y },
        b: { x: q[0].x, y: q[0].y }
      }
    ];
    return {
      center: { x: X.x, y: X.y },
      corners: q.map((C) => ({ x: C.x, y: C.y })),
      edgeMidpoints: Z,
      rotateStemBase: { x: re.x, y: re.y },
      rotateHandle: Qe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: d,
      visible: !0
    };
  }
  function x(te) {
    if (t && W(te) && $()) return { visible: !1 };
    if (!D() && (Oe(te) || b(te))) return { visible: !1 };
    if (Oe(te)) {
      const B = String(te.actionGroupId || te.id || "").trim(), ue = I(B, te.layerKind), T = r._strokeGeomCache.get(ue);
      return T || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), Ae(te, ue));
    }
    if (b(te)) {
      const B = S(te), ue = r._strokeGeomCache.get(B);
      return ue || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), je(te, B));
    }
    const ke = w(te), A = r._strokeGeomCache.get(ke);
    if (A) return A;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const E = z(te);
    return r._strokeGeomCache.set(ke, E), E;
  }
  function he(te, ke, A, E = null) {
    const B = [];
    for (let ue = 0; ue <= A; ue += 1) {
      const T = ue / A;
      let X = 0, ie = 0;
      ke === 0 ? (X = T, ie = 0) : ke === 1 ? (X = 1, ie = T) : ke === 2 ? (X = 1 - T, ie = 1) : (X = 0, ie = 1 - T);
      const K = F(te, X, ie), q = r.mode === "unwrap" ? ye(K, E) : se(K);
      q && B.push(q);
    }
    return B;
  }
  function Pe() {
    const te = [...Array.isArray(i.shots) ? i.shots : []], ke = [...s()].sort((A, E) => Number(A.z_index || 0) - Number(E.z_index || 0));
    return [...te, ...ke];
  }
  function Te() {
    const te = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((A, E) => Number(E.z_index || 0) - Number(A.z_index || 0)), ...te];
  }
  return {
    connect(te) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: l,
        getActiveCutoutShot: c,
        getBrushPresetIdForTool: m,
        getFrameCornersUv: p,
        getFrameViewRect: h,
        getRasterObjectCenterUv: y,
        getRasterObjectGeomCacheKey: S,
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: w,
        getStickerFrame: N,
        getStrokeGeomCacheKey: I,
        getStrokeGroupCenterUv: G,
        getStrokeGroupStrokes: R,
        isFreeSpaceView: $,
        isRasterObjectItem: b,
        isSceneSticker: H,
        isShotItem: W,
        isStickerItem: ne,
        isStrokeGroupItem: Oe,
        paintingShown: D,
        poseOf: ae,
        projectDir: se,
        projectDirUnwrap: ye,
        projectEditorPoints: Ce,
        projectErpPointToEditor: xe,
        sceneStickerShown: be,
        stickerCornersDir: oe,
        stickerDirFromFrame: L,
        stickerSampleDir: F,
        worldDirToFrameLocalPoint: fe
      } = te);
    },
    projectSceneItemDir: Je,
    objectGeom: x,
    sampleStickerEdge: he,
    getCutoutSelectableItemsForDisplay: Pe,
    getCutoutSelectableItemsForHit: Te
  };
}
const dl = /* @__PURE__ */ new Map();
function VE(e) {
  const {
    api: t,
    cutoutV2: n,
    editor: r,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: s,
    rasterImageCache: l,
    state: c
  } = e;
  let m, p, h, y, S, _, w, N, I, G, R, $, b, H, W, ne, Oe, D, ae, se;
  function ye(T = r.interaction) {
    const X = String((T == null ? void 0 : T.kind) || "");
    if (X === "paint_stroke" || X === "paint_lasso_fill" || X === "move_stroke_group" || X === "scale_stroke_group" || X === "rotate_stroke_group" || X === "move_raster_object" || X === "scale_raster_object") return !0;
    if (X === "move_multi") {
      const ie = Array.isArray(T == null ? void 0 : T.strokeSnapshots) && T.strokeSnapshots.length > 0, K = Array.isArray(T == null ? void 0 : T.rasterSnapshots) && T.rasterSnapshots.length > 0;
      return ie || K;
    }
    return !1;
  }
  function Ce() {
    var X, ie, K, q;
    let T = null;
    try {
      const U = N(), Q = ((q = (K = (ie = (X = r.paintEngine) == null ? void 0 : X.getErpTarget) == null ? void 0 : ie.call(X, U)) == null ? void 0 : K.displayPaint) == null ? void 0 : q.canvas) || null;
      Q && (T = {
        source: Q,
        revision: `${I()}:${xe()}`
      });
    } catch {
      T = null;
    }
    return T;
  }
  function xe() {
    var q, U, Q, re, _e, Fe, Le;
    const T = r.interaction, X = String((T == null ? void 0 : T.kind) || "");
    if (!ye(T)) return "";
    if (X === "paint_stroke" || X === "paint_lasso_fill") {
      const Ge = ((q = T == null ? void 0 : T.stroke) == null ? void 0 : q.geometry) || null, Qe = String(((U = T == null ? void 0 : T.stroke) == null ? void 0 : U.layerKind) || ""), Re = ((Q = Ge == null ? void 0 : Ge.rawPoints) == null ? void 0 : Q.length) ?? ((re = Ge == null ? void 0 : Ge.points) == null ? void 0 : re.length) ?? 0, We = String((T == null ? void 0 : T._livePreviewToken) || "");
      return `_${Qe || "paint"}_${X}_live${We}_${Re}_${r.livePaintInteractionRevision}`;
    }
    const ie = String(((_e = T == null ? void 0 : T.item) == null ? void 0 : _e.actionGroupId) || ""), K = String(((Fe = T == null ? void 0 : T.item) == null ? void 0 : Fe.rasterObjectId) || ((Le = T == null ? void 0 : T.item) == null ? void 0 : Le.id) || "");
    return `_${X}_${ie || K || "active"}_${r.livePaintInteractionRevision}`;
  }
  function be(T, X = null) {
    const ie = String((T == null ? void 0 : T.rasterDataUrl) || "").trim();
    if (!ie) return null;
    const K = l.get(ie);
    if (K)
      return K.complete || K.width || K.naturalWidth, K;
    const q = new Image();
    return q.onload = () => {
      typeof X == "function" && X();
    }, q.src = ie, l.set(ie, q), q;
  }
  function oe(T) {
    const X = String((T == null ? void 0 : T.rasterDataUrl) || "").trim();
    if (!X) return null;
    const ie = s.get(X);
    if (ie) return ie.ready ? ie : null;
    const K = be(T, () => {
      const Le = s.get(X);
      Le && (Le.ready = !1), D({ localOnly: !0 });
    });
    if (!K || !(K.complete || K.width || K.naturalWidth)) return null;
    const q = Number(K.naturalWidth || K.width || 0), U = Number(K.naturalHeight || K.height || 0);
    if (q < 1 || U < 1) return null;
    const Q = Nn({ label: "editor.image-pixels" });
    Q.width = q, Q.height = U;
    const re = Q.getContext("2d", { willReadFrequently: !0 });
    if (!re) return null;
    re.clearRect(0, 0, q, U), re.drawImage(K, 0, 0, q, U);
    const _e = re.getImageData(0, 0, q, U).data, Fe = { canvas: Q, width: q, height: U, alpha: _e, ready: !0 };
    return s.set(X, Fe), Fe;
  }
  function L(T, X) {
    if (!T || !X) return null;
    const ie = (T == null ? void 0 : T.bbox) || null;
    if (!ie) return null;
    const K = (T == null ? void 0 : T.transform) || {}, q = {
      u: (Number(ie.u0 || 0) + Number(ie.u1 || 0)) * 0.5,
      v: (Number(ie.v0 || 0) + Number(ie.v1 || 0)) * 0.5
    }, U = {
      u: ((Number(X.u || 0) - Number(K.du || 0)) % 1 + 1) % 1,
      v: Number(X.v || 0) - Number(K.dv || 0)
    }, Q = $(
      U,
      q,
      Number(K.scale || 1),
      Number(K.rot_deg || 0)
    ), re = Number(ie.u1 || 0) - Number(ie.u0 || 0), _e = Number(ie.v1 || 0) - Number(ie.v0 || 0);
    if (!(re > 1e-6) || !(_e > 1e-6)) return null;
    const Fe = se(Number(Q.u || 0), Number(ie.u0 || 0)) / re, Le = (Number(Q.v || 0) - Number(ie.v0 || 0)) / _e;
    if (Fe < 0 || Fe > 1 || Le < 0 || Le > 1) return 0;
    const Ge = oe(T);
    if (!Ge) return null;
    const Qe = Me(Math.floor(Fe * Ge.width), 0, Ge.width - 1), Re = Me(Math.floor(Le * Ge.height), 0, Ge.height - 1);
    return Number(Ge.alpha[(Re * Ge.width + Qe) * 4 + 3] || 0);
  }
  function F(T, X, ie, K = null) {
    if (!(X != null && X.visible) || !xi(ie, X.corners)) return !1;
    const q = K || ae(ie, performance.now()), U = L(T, q);
    return U === null ? !0 : U > 8;
  }
  function fe() {
    var K, q, U, Q, re, _e, Fe, Le;
    const T = ((q = (K = r.paintEngine) == null ? void 0 : K.getErpTarget) == null ? void 0 : q.call(K, N(!1))) || null, X = Math.max(1, Number(((U = T == null ? void 0 : T.descriptor) == null ? void 0 : U.width) || ((re = (Q = T == null ? void 0 : T.displayPaint) == null ? void 0 : Q.canvas) == null ? void 0 : re.width) || 2048)), ie = Math.max(1, Number(((_e = T == null ? void 0 : T.descriptor) == null ? void 0 : _e.height) || ((Le = (Fe = T == null ? void 0 : T.displayPaint) == null ? void 0 : Fe.canvas) == null ? void 0 : Le.height) || 1024));
    return { width: X, height: ie };
  }
  function Ae() {
    var Re, We, lt;
    const T = r.interaction;
    if ((T == null ? void 0 : T.kind) !== "paint_stroke") return null;
    const X = (T == null ? void 0 : T.stroke) || null;
    if (!X || String((X == null ? void 0 : X.layerKind) || "") !== "paint" || String((X == null ? void 0 : X.toolKind) || "") !== "eraser") return null;
    const ie = y(), K = `${xe()}:${ie.width}:${ie.height}`;
    if (((Re = r._activePaintEraserPreviewInfo) == null ? void 0 : Re.cacheKey) === K)
      return r._activePaintEraserPreviewInfo.value || null;
    const q = _n(X), U = (q == null ? void 0 : q.geometry) || null;
    if (U && String(U.geometryKind || "") !== "lasso_fill") {
      const M = Array.isArray(U.rawPoints) && U.rawPoints.length ? U.rawPoints : Array.isArray(U.points) ? U.points : [];
      U.processedPoints = W(M, q.targetSpace, !0);
    }
    const Q = p(ie.width, ie.height, { readback: !0 });
    if (!ne(Q, q, { w: ie.width, h: ie.height })) return null;
    const re = ((lt = (We = Q.ctx) == null ? void 0 : We.getImageData(0, 0, ie.width, ie.height)) == null ? void 0 : lt.data) || null;
    if (!re) return null;
    let _e = ie.width, Fe = ie.height, Le = -1, Ge = -1;
    for (let M = 0; M < ie.height; M += 1)
      for (let Y = 0; Y < ie.width; Y += 1)
        re[(M * ie.width + Y) * 4 + 3] <= 8 || (Y < _e && (_e = Y), M < Fe && (Fe = M), Y > Le && (Le = Y), M > Ge && (Ge = M));
    if (Le < _e || Ge < Fe)
      return r._activePaintEraserPreviewInfo = { cacheKey: K, value: null }, null;
    const Qe = {
      surface: Q,
      bounds: { minX: _e, minY: Fe, maxX: Le, maxY: Ge },
      key: `${K}:${_e}:${Fe}:${Le}:${Ge}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: K, value: Qe }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Qe;
  }
  function je() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function Je(T, X, ie) {
    var K, q;
    if (!T) return null;
    if (T.type === "rasterObject" && ((K = T.item) != null && K.bbox)) {
      const U = T.item.bbox, Q = ((q = T.item) == null ? void 0 : q.transform) || {}, re = Number(U.u0 || 0) + Number(Q.du || 0), _e = Number(U.u1 || 0) + Number(Q.du || 0), Fe = Number(U.v0 || 0) + Number(Q.dv || 0), Le = Number(U.v1 || 0) + Number(Q.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * X),
        maxX: Math.ceil((_e % 1 + 1) % 1 * X),
        minY: Math.floor(Me(Fe, 0, 1) * ie),
        maxY: Math.ceil(Me(Le, 0, 1) * ie),
        wraps: _e - re >= 1 || re < 0 || _e > 1
      };
    }
    if (T.type === "strokeGroup") {
      const U = R(T.actionGroupId, "paint"), Q = h(T.actionGroupId, "paint", U);
      if (!Q) return null;
      const re = Q.centerUv.u - Q.halfW, _e = Q.centerUv.u + Q.halfW, Fe = Q.centerUv.v - Q.halfH, Le = Q.centerUv.v + Q.halfH;
      return {
        minX: Math.floor((re % 1 + 1) % 1 * X),
        maxX: Math.ceil((_e % 1 + 1) % 1 * X),
        minY: Math.floor(Me(Fe, 0, 1) * ie),
        maxY: Math.ceil(Me(Le, 0, 1) * ie),
        wraps: _e - re >= 1 || re < 0 || _e > 1
      };
    }
    return null;
  }
  function le(T, X, ie) {
    if (!T || !X) return !1;
    const K = (Q) => Q.wraps ? [
      { minX: 0, maxX: Q.maxX, minY: Q.minY, maxY: Q.maxY, wraps: !1 },
      { minX: Q.minX, maxX: ie - 1, minY: Q.minY, maxY: Q.maxY, wraps: !1 }
    ] : [Q], q = K(T), U = K(X);
    return q.some((Q) => U.some((re) => !(Q.maxX < re.minX || re.maxX < Q.minX || Q.maxY < re.minY || re.maxY < Q.minY)));
  }
  function z(T, X, ie) {
    var C, J, Se, ge, Ve, ze, O;
    if (!T || !X || !((C = ie == null ? void 0 : ie.surface) != null && C.canvas) || X.type !== "rasterObject") return T;
    const K = Number(T.width || ie.surface.canvas.width || 0), q = Number(T.height || ie.surface.canvas.height || 0);
    if (K < 1 || q < 1) return T;
    const U = Je(X, K, q);
    if (U && !le(U, ie.bounds, K)) return T;
    const Q = String(((J = X.item) == null ? void 0 : J.id) || X.id || ""), re = ((Se = X.item) == null ? void 0 : Se.transform) || {}, _e = `${ie.key}:${Q}:${K}:${q}:${Number(re.du || 0).toFixed(6)}:${Number(re.dv || 0).toFixed(6)}:${Number(re.rot_deg || 0).toFixed(3)}:${Number(re.scale || 1).toFixed(4)}`, Fe = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (Fe.has(_e)) return Fe.get(_e);
    const Le = Me(Math.floor(Number(((ge = ie.bounds) == null ? void 0 : ge.minX) || 0)), 0, Math.max(0, K - 1)), Ge = Me(Math.floor(Number(((Ve = ie.bounds) == null ? void 0 : Ve.minY) || 0)), 0, Math.max(0, q - 1)), Qe = Me(Math.ceil(Number(((ze = ie.bounds) == null ? void 0 : ze.maxX) || 0)), Le, Math.max(0, K - 1)), Re = Me(Math.ceil(Number(((O = ie.bounds) == null ? void 0 : O.maxY) || 0)), Ge, Math.max(0, q - 1)), We = Math.max(1, Qe - Le + 1), lt = Math.max(1, Re - Ge + 1), M = p(K, q, { readback: !0 });
    M.ctx.clearRect(0, 0, K, q), M.ctx.drawImage(T, 0, 0);
    const Y = M.ctx.getImageData(Le, Ge, We, lt);
    M.ctx.save(), M.ctx.globalCompositeOperation = "destination-out", M.ctx.drawImage(ie.surface.canvas, 0, 0), M.ctx.restore();
    const d = M.ctx.getImageData(Le, Ge, We, lt);
    let Z = !1;
    for (let pe = 0; pe < We * lt; pe += 1) {
      const de = Y.data[pe * 4 + 3], Ee = d.data[pe * 4 + 3];
      if (de > Ee) {
        Z = !0;
        break;
      }
    }
    return Z ? (Fe.size > 64 && Fe.clear(), Fe.set(_e, M.canvas), M.canvas) : (Fe.set(_e, T), T);
  }
  function x(T, X = null) {
    const ie = H((T == null ? void 0 : T.rasterObjectId) || (T == null ? void 0 : T.id) || ""), K = (T == null ? void 0 : T.bbox) || null;
    if (!ie || !K) return null;
    const q = be(T, X);
    if (!q || !(q.complete || q.width || q.naturalWidth)) return null;
    const { width: U, height: Q } = fe(), re = (T == null ? void 0 : T.transform) || {}, _e = [
      ie,
      U,
      Q,
      K.u0,
      K.v0,
      K.u1,
      K.v1,
      re.du,
      re.dv,
      re.rot_deg,
      re.scale,
      G()
    ].join(":"), Fe = o.get(_e);
    if (Fe) return Fe;
    o.size > 64 && o.clear();
    const Le = Nn({ label: "editor.raster-erp" });
    Le.width = U, Le.height = Q;
    const Ge = Le.getContext("2d");
    if (!Ge) return null;
    const Qe = Number(K.u0 || 0) * U, Re = Number(K.v0 || 0) * Q, We = Math.max(1, (Number(K.u1 || 0) - Number(K.u0 || 0)) * U), lt = Math.max(1, (Number(K.v1 || 0) - Number(K.v0 || 0)) * Q), M = Qe + We * 0.5 + Number(re.du || 0) * U, Y = Re + lt * 0.5 + Number(re.dv || 0) * Q, d = Number(re.rot_deg || 0) * Kr, Z = Math.max(0.01, Number(re.scale || 1));
    for (const C of [-U, 0, U])
      Ge.save(), Ge.translate(M + C, Y), Ge.rotate(d), Ge.scale(Z, Z), Ge.drawImage(q, -We * 0.5, -lt * 0.5, We, lt), Ge.restore();
    return o.set(_e, Le), Le;
  }
  async function he(T, X) {
    const ie = await new Promise((re) => T.toBlob(re, "image/png")), K = new FormData();
    K.append("image", ie, X), K.append("type", "input"), K.append("subfolder", "panorama_stickers"), K.append("overwrite", "1");
    const q = await t.fetchApi("/upload/image", { method: "POST", body: K });
    if (!q || q.status !== 200) throw new Error(`upload failed (${q == null ? void 0 : q.status})`);
    const U = await q.json(), Q = String((U == null ? void 0 : U.name) || "").trim();
    if (!Q) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: Q,
      subfolder: String((U == null ? void 0 : U.subfolder) || "panorama_stickers"),
      storage: String((U == null ? void 0 : U.type) || "input")
    };
  }
  let Pe = null, Te = !1;
  function te() {
    if (n) return !1;
    const T = Kg(c.painting), { width: X, height: ie } = S();
    return bM(c.painting_layer, { paintCount: T.totalPaintCount, maskCount: T.totalMaskCount, width: X, height: ie, nodeId: String(i.id ?? "0") });
  }
  function ke() {
    const T = String(i.id ?? "0"), X = dl.get(T);
    if (Te && X) return X;
    const ie = (async () => {
      var U, Q, re, _e, Fe, Le, Ge, Qe, Re, We, lt, M;
      const K = I(), q = Kg(c.painting);
      if (q.totalPaintCount <= 0 && q.totalMaskCount <= 0) {
        c.painting_layer !== null && (c.painting_layer = null, Pe = K, m());
        return;
      }
      if (Pe !== K && !Te) {
        Te = !0;
        try {
          Oe();
          const Y = N(!1), d = ((Q = (U = r.paintEngine) == null ? void 0 : U.getErpTarget) == null ? void 0 : Q.call(U, Y)) || null, Z = ((re = d == null ? void 0 : d.displayPaint) == null ? void 0 : re.canvas) || null, C = ((_e = d == null ? void 0 : d.committedMask) == null ? void 0 : _e.canvas) || null, J = Math.max(1, Number(((Fe = d == null ? void 0 : d.descriptor) == null ? void 0 : Fe.width) || (Z == null ? void 0 : Z.width) || (C == null ? void 0 : C.width) || 2048)), Se = Math.max(1, Number(((Le = d == null ? void 0 : d.descriptor) == null ? void 0 : Le.height) || (Z == null ? void 0 : Z.height) || (C == null ? void 0 : C.height) || 1024));
          (!Z && q.totalPaintCount > 0 || !C && q.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((Ge = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Ge.width) || 0) !== J || Number(((Qe = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Qe.height) || 0) !== Se) && (r._paintLayerSyncBlankSurface = p(J, Se)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, J, Se));
          const ge = Z || q.totalPaintCount > 0 && ((Re = r._paintLayerSyncBlankSurface) == null ? void 0 : Re.canvas) || null, Ve = C || q.totalMaskCount > 0 && ((We = r._paintLayerSyncBlankSurface) == null ? void 0 : We.canvas) || null;
          if (!ge && !Ve) return;
          let ze = null, O = null;
          const pe = [];
          if (q.totalPaintCount > 0) {
            ze = await he(ge, `pano_paint_${T}.png`);
            for (const de of Y) {
              const Ee = String(de || "").trim();
              if (!Ee) continue;
              const Ke = ((M = (lt = r.paintEngine) == null ? void 0 : lt.getGroupDisplayCanvas) == null ? void 0 : M.call(lt, Ee)) || null;
              if (!Ke) continue;
              const $e = Ee.replace(/[^a-zA-Z0-9_-]+/g, "_"), Xe = await he(Ke, `pano_group_${T}_${$e}.png`);
              Xe && pe.push({
                id: Ee,
                actionGroupId: Ee,
                image: Xe
              });
            }
          }
          q.totalMaskCount > 0 && (O = await he(Ve, `pano_mask_${T}.png`)), K === I() && (c.painting_layer = {
            paint: ze,
            mask: O,
            groups: pe,
            revision: K
          }, Pe = K, m());
        } catch (Y) {
          throw Y;
        } finally {
          Te = !1;
        }
      }
    })();
    return dl.set(T, ie), ie.finally(() => {
      dl.get(T) === ie && dl.delete(T);
    }), ie;
  }
  function A(T) {
    var Q;
    const X = ((Q = r.paintEngine) == null ? void 0 : Q.getMaskDisplayCanvas()) || null;
    if (!X) return T;
    const ie = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, K = T.reduce((re, _e) => Math.max(re, Number((_e == null ? void 0 : _e.zIndex) || 0)), -1), q = (Array.isArray(c.stickers) ? c.stickers : []).reduce((re, _e) => Math.max(re, Number((_e == null ? void 0 : _e.z_index) || 0)), -1), U = Math.max(K, q);
    return T.push({
      id: "mask_display",
      source: X,
      revision: ie,
      zIndex: U + 1,
      opacity: 1,
      visible: !0
    }), T;
  }
  function E() {
    var K, q;
    const T = w(!0), X = Ae(), ie = [];
    for (const U of T) {
      if ((U == null ? void 0 : U.type) === "strokeGroup") {
        const Q = String(U.actionGroupId || U.id || "");
        if (!Q) continue;
        const re = ((q = (K = r.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : q.call(K, Q)) || null;
        if (!re) continue;
        ie.push({
          id: `paint_group:${Q}`,
          source: re,
          revision: `${_()}:${Q}`,
          zIndex: Number((U == null ? void 0 : U.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((U == null ? void 0 : U.type) === "rasterObject") {
        const Q = U.item || null, re = H((Q == null ? void 0 : Q.id) || U.id || "");
        if (!re) continue;
        const _e = x(Q, () => D());
        if (!_e) continue;
        const Fe = z(_e, U, X), Le = (Q == null ? void 0 : Q.transform) || {};
        ie.push({
          id: `raster:${re}`,
          source: Fe,
          revision: [
            I(),
            (X == null ? void 0 : X.key) || "",
            re,
            Number(Le.du || 0).toFixed(6),
            Number(Le.dv || 0).toFixed(6),
            Number(Le.rot_deg || 0).toFixed(3),
            Number(Le.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((U == null ? void 0 : U.z_index) || 0),
          opacity: 1,
          visible: (Q == null ? void 0 : Q.visible) !== !1
        });
      }
    }
    return A(ie);
  }
  function B() {
    return b() ? E().filter((T) => T.visible !== !1).map((T) => ({ id: T.id, media: T.source, revision: T.revision, opacity: T.opacity, zIndex: T.zIndex })) : [];
  }
  function ue() {
    c.painting_layer !== null && (c.painting_layer = null), Pe = "";
  }
  return {
    connect(T) {
      ({
        commitState: m,
        createRasterSurface: p,
        ensureGroupFrame: h,
        getActivePaintTargetDescriptor: y,
        getDesiredPaintTargetDescriptor: S,
        getDisplayPaintRevisionKey: _,
        getOrderedDisplayListObjects: w,
        getOrderedPaintGroupIds: N,
        getPaintingCompositeRevisionKey: I,
        getPaintingRevisionKey: G,
        getStrokeGroupStrokes: R,
        inverseTransformErpPointAround: $,
        paintingShown: b,
        parseRasterObjectSelectionId: H,
        processFreehandPoints: W,
        rasterizeStrokeToSurface: ne,
        rebuildPaintEngineIfNeeded: Oe,
        requestDraw: D,
        screenPosToErpPoint: ae,
        shortestWrappedDelta: se
      } = T);
    },
    getSharedLivePaintSurface: Ce,
    getLivePaintRevisionSuffix: xe,
    isPaintCompositeInteraction: ye,
    hitRasterObjectAt: F,
    invalidateLivePaintPreviewCaches: je,
    buildRasterObjectEditCanvas: x,
    needsPaintingLayerSync: te,
    syncPaintingLayerAsync: ke,
    invalidatePaintingLayerState: ue,
    buildEditorViewPaintLayers: B
  };
}
function $E(e) {
  const {
    editor: t,
    runtime: n,
    state: r
  } = e;
  let i, o, s, l;
  function c(le) {
    return !le || typeof le != "object" ? { x: 0, y: 0 } : { x: Number((le == null ? void 0 : le.u) || 0), y: Number((le == null ? void 0 : le.v) || 0) };
  }
  function m(le, z, x, he = {}) {
    return { ...{
      ...le,
      t: Number((le == null ? void 0 : le.t) || 0),
      widthScale: y(le, "widthScale", 1),
      pressureLike: y(le, "pressureLike", 1)
    }, ...he, u: z, v: x };
  }
  function p(le, z = !1) {
    return z ? 12e-4 : 18e-4;
  }
  function h(le, z, x = !1) {
    if (!Array.isArray(le) || !le.length) return [];
    const he = String((z == null ? void 0 : z.kind) || "") === "ERP_GLOBAL", Pe = /* @__PURE__ */ new WeakMap();
    if (he) {
      let K = null;
      le.forEach((q) => {
        const U = Number((q == null ? void 0 : q.u) || 0), Q = Number((q == null ? void 0 : q.v) || 0), re = (U % 1 + 1) % 1, _e = K == null ? re : K + l(re, (K % 1 + 1) % 1);
        Pe.set(q, { x: _e, y: Q }), K = _e;
      });
    }
    const Te = (K) => !K || typeof K != "object" ? { x: 0, y: 0 } : Pe.get(K) || c(K), te = (K, q, U, Q = {}) => {
      const re = he ? (Number(q) % 1 + 1) % 1 : Number(q), _e = m(K, re, U, Q);
      return Pe.set(_e, { x: Number(q), y: Number(U) }), _e;
    }, ke = (K, q, U) => {
      const Q = Te(K), re = Te(q);
      return te(K, fr(Q.x, re.x, U), fr(Q.y, re.y, U), {
        t: fr(Number((K == null ? void 0 : K.t) || 0), Number((q == null ? void 0 : q.t) || 0), U),
        widthScale: fr(y(K, "widthScale", 1), y(q, "widthScale", 1), U),
        pressureLike: fr(y(K, "pressureLike", 1), y(q, "pressureLike", 1), U)
      });
    };
    if (le.length === 1) {
      const K = Te(le[0]);
      return [te(le[0], K.x, K.y)];
    }
    const A = p(z, x), E = (K, q) => {
      const U = [0];
      for (let Re = 1; Re < K.length; Re += 1) {
        const We = Te(K[Re - 1]), lt = Te(K[Re]);
        U.push(U[Re - 1] + Math.hypot(lt.x - We.x, lt.y - We.y));
      }
      const Q = U[U.length - 1] || 0;
      if (Q <= 1e-8) {
        const Re = K[0], We = Te(Re);
        return [te(Re, We.x, We.y)];
      }
      const re = [];
      let _e = 0;
      for (let Re = 0; Re <= Q + 1e-9; Re += q) {
        for (; _e < U.length - 2 && U[_e + 1] < Re; ) _e += 1;
        const We = U[_e], lt = U[_e + 1], M = Math.max(1e-8, lt - We);
        re.push(ke(K[_e], K[_e + 1], Me((Re - We) / M, 0, 1)));
      }
      const Fe = K[K.length - 1], Le = Te(Fe), Ge = re[re.length - 1], Qe = Ge ? Te(Ge) : null;
      return (!Qe || Math.hypot(Qe.x - Le.x, Qe.y - Le.y) > q * 0.35) && re.push(te(Fe, Le.x, Le.y)), re;
    }, B = (K) => {
      if (!Array.isArray(K) || K.length < 3) return K ? K.slice() : [];
      const q = Te(K[0]), U = [te(K[0], q.x, q.y)];
      for (let _e = 0; _e < K.length - 1; _e += 1) {
        const Fe = K[_e], Le = K[_e + 1], Ge = Te(Fe), Qe = Te(Le), Re = te(
          Fe,
          Ge.x * 0.75 + Qe.x * 0.25,
          Ge.y * 0.75 + Qe.y * 0.25,
          {
            t: Number(Fe.t || 0) * 0.75 + Number(Le.t || 0) * 0.25,
            widthScale: y(Fe, "widthScale", 1) * 0.75 + y(Le, "widthScale", 1) * 0.25,
            pressureLike: y(Fe, "pressureLike", 1) * 0.75 + y(Le, "pressureLike", 1) * 0.25
          }
        ), We = te(
          Fe,
          Ge.x * 0.25 + Qe.x * 0.75,
          Ge.y * 0.25 + Qe.y * 0.75,
          {
            t: Number(Fe.t || 0) * 0.25 + Number(Le.t || 0) * 0.75,
            widthScale: y(Fe, "widthScale", 1) * 0.25 + y(Le, "widthScale", 1) * 0.75,
            pressureLike: y(Fe, "pressureLike", 1) * 0.25 + y(Le, "pressureLike", 1) * 0.75
          }
        );
        U.push(Re, We);
      }
      const Q = K[K.length - 1], re = Te(Q);
      return U.push(te(Q, re.x, re.y)), U;
    }, ue = E(le, A);
    if (ue.length < 3) return ue;
    const T = x ? 2 : 1;
    let X = ue.slice();
    for (let K = 0; K < T; K += 1) X = B(X);
    return E(X, Math.max(A * 0.75, 55e-5));
  }
  function y(le, z, x = 1) {
    const he = Number(le == null ? void 0 : le[z]);
    return Number.isFinite(he) ? Math.max(0, he) : x;
  }
  function S(le) {
    const z = Number(le == null ? void 0 : le.radiusValue);
    if (Number.isFinite(z) && z > 0) {
      const x = String((le == null ? void 0 : le.radiusModel) || "").trim() || "erp_uv_norm";
      return x === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((le == null ? void 0 : le.size) || 10) * 0.5 / 2048)
      } : {
        model: x,
        value: z
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((le == null ? void 0 : le.size) || 10) * 0.5 / 2048)
    };
  }
  function _(le, z, x = {}) {
    const he = Nn({ label: "editor.raster-surface" });
    he.width = Math.max(1, Math.round(le)), he.height = Math.max(1, Math.round(z));
    const Pe = he.getContext("2d", x.readback ? { willReadFrequently: !0 } : void 0);
    return Pe && (Pe.clearRect(0, 0, he.width, he.height), Pe.imageSmoothingEnabled = !0), { canvas: he, ctx: Pe };
  }
  function w() {
    const le = D();
    return `${String(t.paintStrokeRevision)}:${le.width}x${le.height}`;
  }
  function N() {
    const le = D();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${le.width}x${le.height}`;
  }
  function I() {
    const le = i(), z = N();
    return le ? `${z}:${le}` : z;
  }
  function G() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function R() {
    t.paintCompositeRevision += 1;
  }
  function $() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function b() {
    var le, z;
    t.paintEngineRevisionKey = null, (z = (le = t.paintEngine) == null ? void 0 : le.rebuildCommitted) == null || z.call(le, r), t.paintEngineRevisionKey = w();
  }
  function H() {
    $(), n.backgroundDirty = !0, n.dirty = !0;
  }
  function W({ rebuildPaintEngine: le = !1 } = {}) {
    o(), G(), H(), le && b();
  }
  function ne() {
    o(), R(), H();
  }
  function Oe() {
    var he;
    const le = D(), z = `${le.width}x${le.height}`;
    t.paintEngineDescriptorKey !== z && (t.paintEngine = lf(le), t.paintEngineDescriptorKey = z, t.paintEngineRevisionKey = "");
    const x = w();
    t.paintEngineRevisionKey !== x && (t.paintEngineRevisionKey = x, (he = t.paintEngine) == null || he.rebuildCommitted(r));
  }
  function D() {
    const le = Math.max(1, s(Number((r == null ? void 0 : r.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: le,
      height: Math.max(1, Math.round(le * 0.5))
    };
  }
  function ae() {
    return D();
  }
  function se(le, z, x, he, Pe = null) {
    const Te = S(le), te = y(z, "widthScale", 1) * y(z, "pressureLike", 1);
    return Te.model === "erp_uv_norm" ? Math.max(0.5, Te.value * x * te) : Te.model === "world_angle" ? Pe ? Math.max(0.5, Te.value / Math.max(1e-6, Number(Pe.hFOV_deg || 90) * Kr) * x * te) : Math.max(0.5, Te.value / (2 * Math.PI) * x * te) : Math.max(0.5, Number((le == null ? void 0 : le.size) || 10) * 0.5 * te);
  }
  function ye(le, z, x = {}) {
    const he = String((z == null ? void 0 : z.layerKind) || "paint"), Pe = String((z == null ? void 0 : z.toolKind) || "pen"), Te = x.preview === !0, te = Te ? 0.78 : 1;
    if (le.globalAlpha = Pe === "marker" ? 0.7 * te : 1, he === "mask") {
      le.fillStyle = Te ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Pe === "eraser") {
      le.globalCompositeOperation = "destination-out", le.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ke = String((z == null ? void 0 : z.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (z == null ? void 0 : z.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, A = Te ? Math.max(0.28, Number(ke.a ?? 1) * 0.88) : Math.max(0.12, Number(ke.a ?? 1));
    le.fillStyle = `rgba(${Math.round(Number(ke.r || 0) * 255)}, ${Math.round(Number(ke.g || 0) * 255)}, ${Math.round(Number(ke.b || 0) * 255)}, ${A})`;
  }
  function Ce(le, z, x) {
    const he = Math.max(0.5, Math.min(x, Number((z == null ? void 0 : z.radiusPx) || 0.5)));
    !Number.isFinite(z == null ? void 0 : z.x) || !Number.isFinite(z == null ? void 0 : z.y) || !Number.isFinite(he) || (le.beginPath(), le.arc(Number(z.x || 0), Number(z.y || 0), he, 0, Math.PI * 2), le.fill());
  }
  function xe(le, z, x, he, Pe = {}) {
    if (!le || !Array.isArray(z) || !z.length) return;
    const Te = Math.max(he.w, he.h) * 0.25;
    le.save(), ye(le, x, Pe);
    const te = (ke) => Ce(le, ke, Te);
    if (z.length === 1) {
      te(z[0]), le.restore();
      return;
    }
    for (let ke = 0; ke < z.length - 1; ke += 1) {
      const A = z[ke], E = z[ke + 1];
      if (!A || !E) continue;
      const B = Number(A.x || 0), ue = Number(A.y || 0), T = Number(E.x || 0), X = Number(E.y || 0), ie = Math.max(0.5, Math.min(Te, Number(A.radiusPx || 0.5))), K = Math.max(0.5, Math.min(Te, Number(E.radiusPx || 0.5)));
      if (!Number.isFinite(B) || !Number.isFinite(ue) || !Number.isFinite(T) || !Number.isFinite(X) || !Number.isFinite(ie) || !Number.isFinite(K)) continue;
      const q = T - B, U = X - ue, Q = Math.hypot(q, U);
      if (!Number.isFinite(Q) || Q < 1e-6) {
        te(A);
        continue;
      }
      if (Q > Math.max(he.w, he.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ie, K)), _e = Math.max(0.35, Math.min(re * 0.4, 2.25)), Fe = Math.max(1, Math.ceil(Q / _e));
      for (let Le = 0; Le <= Fe; Le += 1) {
        const Ge = Le / Fe;
        te({
          x: fr(B, T, Ge),
          y: fr(ue, X, Ge),
          radiusPx: fr(ie, K, Ge)
        });
      }
    }
    te(z[z.length - 1]), le.restore();
  }
  function be(le, z, x, he) {
    xe(le, z, x, he, { preview: !1 });
  }
  function oe(le, z, x, he, Pe) {
    var ke, A, E, B;
    if (!le || !Array.isArray(z) || z.length < 3) return;
    const Te = "u", te = "v";
    if (le.save(), String((x == null ? void 0 : x.layerKind) || "") === "mask")
      le.fillStyle = "rgba(255,255,255,1)";
    else if (String((x == null ? void 0 : x.toolKind) || "") === "eraser")
      le.globalCompositeOperation = "destination-out", le.fillStyle = "rgba(0,0,0,1)";
    else {
      const ue = (x == null ? void 0 : x.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      le.fillStyle = `rgba(${Math.round(Number(ue.r || 0) * 255)}, ${Math.round(Number(ue.g || 0) * 255)}, ${Math.round(Number(ue.b || 0) * 255)}, ${Number(ue.a ?? 1)})`;
    }
    le.beginPath(), le.moveTo(Number(((ke = z[0]) == null ? void 0 : ke[Te]) || 0) * he.w, Number(((A = z[0]) == null ? void 0 : A[te]) || 0) * he.h);
    for (let ue = 1; ue < z.length; ue += 1)
      le.lineTo(Number(((E = z[ue]) == null ? void 0 : E[Te]) || 0) * he.w, Number(((B = z[ue]) == null ? void 0 : B[te]) || 0) * he.h);
    le.closePath(), le.fill(), le.restore();
  }
  function L(le) {
    const z = (le == null ? void 0 : le.geometry) || null;
    return z ? String(z.geometryKind || "") === "lasso_fill" ? Array.isArray(z.points) ? z.points : [] : Array.isArray(z.processedPoints) && z.processedPoints.length ? z.processedPoints : Array.isArray(z.rawPoints) && z.rawPoints.length ? z.rawPoints : Array.isArray(z.points) ? z.points : [] : [];
  }
  function F(le, z) {
    const x = L(le);
    return !Array.isArray(x) || !x.length ? [] : x.map((he) => ({
      x: Number((he == null ? void 0 : he.u) || 0) * Number((z == null ? void 0 : z.w) || 1),
      y: Number((he == null ? void 0 : he.v) || 0) * Number((z == null ? void 0 : z.h) || 1),
      radiusPx: se(le, he, Number((z == null ? void 0 : z.w) || 1), Number((z == null ? void 0 : z.h) || 1))
    }));
  }
  function fe(le, z, x = null) {
    var ke, A, E, B;
    if (!(le != null && le.ctx) || !z) return !1;
    const he = x || { w: Number(((ke = le.canvas) == null ? void 0 : ke.width) || 0), h: Number(((A = le.canvas) == null ? void 0 : A.height) || 0) }, Pe = String((z == null ? void 0 : z.toolKind) || "") === "eraser" ? {
      ...z,
      layerKind: "mask",
      toolKind: String(((E = z == null ? void 0 : z.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : z;
    if (String(((B = z == null ? void 0 : z.geometry) == null ? void 0 : B.geometryKind) || "") === "lasso_fill")
      return oe(le.ctx, L(Pe), Pe, he), !0;
    const te = F(Pe, he);
    return te.length ? (be(le.ctx, te, Pe, he), !0) : !1;
  }
  function Ae(le, z, x, he = 8) {
    const Pe = new Uint8Array(z * x), Te = [], te = new Int32Array(z * x), ke = new Int32Array(z * x);
    for (let A = 0; A < x; A += 1)
      for (let E = 0; E < z; E += 1) {
        const B = A * z + E;
        if (Pe[B] || le[B] <= he) continue;
        let ue = 0, T = 0;
        te[T] = E, ke[T] = A, T += 1, Pe[B] = 1;
        const X = [];
        let ie = E, K = A, q = E, U = A;
        for (; ue < T; ) {
          const Q = te[ue], re = ke[ue];
          ue += 1, X.push({ x: Q, y: re }), Q < ie && (ie = Q), re < K && (K = re), Q > q && (q = Q), re > U && (U = re);
          const _e = [
            [(Q - 1 + z) % z, re],
            [(Q + 1) % z, re],
            [Q, re - 1],
            [Q, re + 1]
          ];
          for (const [Fe, Le] of _e) {
            if (Le < 0 || Le >= x) continue;
            const Ge = Le * z + Fe;
            Pe[Ge] || le[Ge] <= he || (Pe[Ge] = 1, te[T] = Fe, ke[T] = Le, T += 1);
          }
        }
        Te.push({ pixels: X, minX: ie, minY: K, maxX: q, maxY: U });
      }
    return Te;
  }
  function je(le, z) {
    const x = [...new Set((Array.isArray(le == null ? void 0 : le.pixels) ? le.pixels : []).map((A) => Number((A == null ? void 0 : A.x) || 0)).filter((A) => Number.isFinite(A)))].sort((A, E) => A - E);
    if (!x.length) return null;
    if (x.length === 1)
      return { startX: x[0], widthPx: 1 };
    let he = -1, Pe = 0;
    for (let A = 0; A < x.length; A += 1) {
      const E = x[A], ue = (A === x.length - 1 ? x[0] + z : x[A + 1]) - E - 1;
      ue > he && (he = ue, Pe = A);
    }
    const Te = (x[(Pe + 1) % x.length] + z) % z;
    let te = 1 / 0, ke = -1 / 0;
    for (const A of x) {
      const E = (A - Te + z) % z;
      te = Math.min(te, E), ke = Math.max(ke, E);
    }
    return {
      startX: Te,
      widthPx: Math.max(1, ke - te + 1)
    };
  }
  function Je(le, z, x = {}) {
    var E;
    const he = Number((le == null ? void 0 : le.width) || 0), Pe = Number((le == null ? void 0 : le.height) || 0), Te = (E = le == null ? void 0 : le.getContext) == null ? void 0 : E.call(le, "2d");
    if (!Te || he < 1 || Pe < 1) return [];
    const te = Te.getImageData(0, 0, he, Pe), ke = new Uint8Array(he * Pe);
    for (let B = 0; B < ke.length; B += 1) ke[B] = te.data[B * 4 + 3];
    return Ae(ke, he, Pe, 8).map((B, ue) => {
      const T = je(B, he);
      if (!T) return null;
      const X = Number(T.widthPx || 0), ie = B.maxY - B.minY + 1, K = Number(T.startX || 0), q = Nn({ label: "editor.lasso-fill" });
      q.width = X, q.height = ie;
      const U = q.getContext("2d");
      if (!U) return null;
      const Q = U.createImageData(X, ie);
      return B.pixels.forEach(({ x: re, y: _e }) => {
        const Fe = (_e * he + re) * 4, Le = (Number(re || 0) - K + he) % he, Ge = ((_e - B.minY) * X + Le) * 4;
        Q.data[Ge + 0] = te.data[Fe + 0], Q.data[Ge + 1] = te.data[Fe + 1], Q.data[Ge + 2] = te.data[Fe + 2], Q.data[Ge + 3] = te.data[Fe + 3];
      }), U.putImageData(Q, 0, 0), {
        id: Ko("raster"),
        type: "raster_frozen",
        layerKind: z === "mask" ? "mask" : "paint",
        z_index: Number((x == null ? void 0 : x.z_index) || 0) + ue * 1e-3,
        locked: (x == null ? void 0 : x.locked) === !0,
        bbox: {
          u0: 0,
          v0: B.minY / Pe,
          u1: X / he,
          v1: (B.maxY + 1) / Pe
        },
        rasterDataUrl: q.toDataURL("image/png"),
        transform: {
          du: K / he,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(le) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: l
      } = le);
    },
    processFreehandPoints: h,
    createRasterSurface: _,
    getPaintingRevisionKey: w,
    getPaintingCompositeRevisionKey: N,
    getDisplayPaintRevisionKey: I,
    refreshPaintEngineRevisionCache: b,
    markObjectVisualsDirty: H,
    markPaintStrokeVisualsDirty: W,
    markPaintCompositeVisualsDirty: ne,
    rebuildPaintEngineIfNeeded: Oe,
    getDesiredPaintTargetDescriptor: D,
    getActivePaintTargetDescriptor: ae,
    rasterizeStrokeToSurface: fe,
    createRasterFrozenObjectsFromCanvas: Je
  };
}
const Bg = /* @__PURE__ */ new Map(), nr = sb({
  app: Qn,
  api: tn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: $d,
    markImageFailed: n1,
    markImageLoading: e1,
    markImageReady: t1
  }
});
function Uu(e) {
  if (!yn(e, "background") || !yn(e, "external-sticker")) return null;
  const t = nr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? pa(t[0]) : null;
}
function zE(e) {
  if (!yn(e, "background")) return null;
  const [t] = nr.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = nr.uiValue(e, "pano_timeline_frames") || [], [r] = nr.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Gn(r) };
}
const jE = nr.assetSource, HE = nr.source, GE = nr.uiImage, WE = nr.invalidateUiImage, Ug = nr.loadPreferredExactLinkedImage;
async function KE(e, t, n = {}) {
  var Bh, Uh;
  await Vb(e, { tolerateOperationFailure: !0 }), nr.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, o = r, s = yE(e, t);
  await zf();
  const l = ul(e, "output_preset"), c = ul(e, "coverage"), m = ul(e, "bg_color"), p = ul(e, BO), h = () => {
    const a = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Ug(
      e,
      a,
      () => He(),
      `background:size:${a.join("|")}`
    );
  }, y = () => {
    const a = h();
    return _E(a);
  }, S = (a = 2048) => {
    const u = l == null ? void 0 : l.value;
    return vE(u) ? y() || Math.max(1, Math.round(Number(a || 2048))) : bE(u, a);
  }, _ = e.__panoSceneStateV2 === !0, w = t === "stickers" && _, N = t === "cutout" && _, I = w && e.__panoStudio === !0, G = N || I, R = t === "cutout" || I, $ = N ? zE(e) : null, b = (_ ? Dy : Fy)(String((p == null ? void 0 : p.value) || ""), {
    outputPreset: S(2048),
    backgroundColor: String((m == null ? void 0 : m.value) || "#00ff00"),
    coverage: $ ? $.coverage : Gn(c == null ? void 0 : c.value),
    sharedUiSettings: SE(),
    active: Vy(e),
    fps: _ ? Uu(e) : null,
    scene: ($ == null ? void 0 : $.state) ?? null,
    camera: N
  });
  e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = 0;
  let H = null;
  G ? (H = b.camera && (!I || b.camera.visible !== !1) ? Km(b.camera, 0) : null, b.shots = H ? [{ ...H, position: [...H.position] }] : [], b.active.selected_shot_id = H && N ? ec : null) : t === "cutout" && (b.shots = Array.isArray(b.shots) ? b.shots.slice(0, 1) : [], b.shots.length || (b.active.selected_shot_id = null));
  const W = t === "cutout" ? (() => {
    var f;
    const a = Array.isArray(b.shots) ? b.shots : [], u = String(((f = b == null ? void 0 : b.active) == null ? void 0 : f.selected_shot_id) || "");
    return a.find((g) => String((g == null ? void 0 : g.id) || "") === u) || a[0] || null;
  })() : null, ne = W ? zp(W, !1) : { width: 220, height: 132 }, Oe = Qb(I ? "studio" : t), D = /* @__PURE__ */ da({
    stageStatus: kr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (Oe.viewButtons || []).map((a) => ({ ...a, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Bh = Oe.spaceButtons) != null && Bh.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: Oe.spaceButtons, frame: Oe.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (Oe.toolButtons || []).map((a) => ({
      ...a,
      disabled: !1,
      ...a.key === "add-world" ? { visible: w } : {},
      ...N && lE.has(a.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(Oe.floatingButtons || []).map((a) => ({ ...a, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ue.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ue.aspect,
      rotateIcon: Ue.rotate_90,
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
      icon: Ue.fullscreen,
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
      customColorCss: Vr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Vr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (a, u) => ({ index: u, color: null })),
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
      width: ne.width,
      height: ne.height,
      label: W ? "Loading preview" : "Add Frame to preview"
    }
  }), ae = { frame: /* @__PURE__ */ Tl(0), playing: /* @__PURE__ */ Tl(!1) }, se = document.createElement("div");
  document.body.appendChild(se);
  const ye = ({ intent: a, file: u } = {}) => {
    if (Mr(u)) {
      if (a === "add") {
        Qp(u);
        return;
      }
      if (a === "add-world") {
        Gv(u);
        return;
      }
      a === "replace" && Bv(u);
    }
  }, Ce = ({ intent: a } = {}) => {
  }, xe = rf(WO, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: Oe,
    paintSwatches: Il.map((a) => ({
      id: a.id,
      label: a.label,
      cssColor: Vr(a.color, 1)
    })),
    uiState: D,
    playhead: ae,
    onClose: () => {
      Fo();
    },
    onTimeline: (a) => zv(a),
    onImageFileSelected: ye,
    onImageFileCancelled: Ce
  });
  let be = null;
  try {
    be = xe.mount(se);
  } catch (a) {
    try {
      xe.unmount();
    } catch {
    }
    throw se.remove(), a;
  }
  const oe = se.querySelector(".pano-modal-overlay"), L = se.querySelector(".pano-modal"), F = L == null ? void 0 : L.querySelector("[data-stage-overlay]"), fe = L == null ? void 0 : L.querySelector("[data-stage-background]"), Ae = L == null ? void 0 : L.querySelector(".pano-stage-wrap"), je = ((Uh = be == null ? void 0 : be.getPaintOverlayRefs) == null ? void 0 : Uh.call(be)) || {}, Je = je.cursor || null, le = je.sizePreview || null, z = je.sizeSample || null;
  if (!oe || !L || !F || !fe || !Ae || !Je || !le || !z)
    throw xe.unmount(), se.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const x = F.getContext("2d"), he = L.querySelector("[data-side]"), Pe = L.querySelector("[data-video-element]"), Te = L.querySelector("[data-port-video-element]");
  hu(F, "editor.stage-overlay"), hu(fe, "editor.stage-background"), Om(Pe, "editor.video"), Om(Te, "editor.port-video");
  const te = L.querySelector(".pano-floating-right"), ke = L.querySelector(".pano-floating-top"), A = L.querySelector("[data-tool-rail]"), E = L.querySelector("[data-frame-rail]"), B = L.querySelector("[data-frame-roll-knob]"), ue = L.querySelector("[data-paint-dock]"), T = L.querySelector(".pano-video-transport"), X = L.querySelector("[data-selection-menu]");
  let ie = !1;
  const K = L.querySelector("[data-tooltip]"), q = L.querySelector("[data-camera-preview-host]"), U = L.querySelector("[data-camera-preview-canvas]");
  hu(U, "editor.camera-preview");
  const Q = L.querySelector("[data-paint-color-row]"), re = L.querySelector("[data-paint-color-pop]"), _e = L.querySelector("[data-paint-color-sv]"), Fe = L.querySelector("[data-paint-color-sv-cursor]"), Le = L.querySelector("[data-paint-hue-strip]"), Ge = L.querySelector("[data-paint-hue-handle]");
  let Qe = 0, Re = 0;
  Ae == null || Ae.removeAttribute("data-stage-ready"), Ae == null || Ae.setAttribute("data-stage-loading-kind", "boot"), F.style.opacity = "1", fe.style.opacity = "0", i && (he == null || he.remove(), L.classList.add("pano-modal-readonly"));
  const We = () => {
    if (!d.customPaintSessionStart) return;
    if (Ol(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (mE(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const a = [
      Jn(d.customPaintColor),
      ...d.customPaintHistory.filter((u) => !Ol(u, d.customPaintColor))
    ];
    d.customPaintHistory = a.slice(0, 8), d.customPaintSessionStart = null;
  }, lt = (a = !1) => {
    !re || re.hidden || (a ? We() : d.customPaintSessionStart = null, re.hidden = !0, D.paintDock.colorPopOpen = !1);
  }, M = () => {
    re && (re.hidden && (d.customPaintSessionStart = Jn(d.customPaintColor)), re.hidden = !1, D.paintDock.colorPopOpen = !0);
  };
  L.addEventListener("pointerdown", () => Ee.wake(), !0), L.addEventListener("pointerdown", (a) => {
    var u;
    a.target.closest("[data-frame-roll-knob]") || Ki(), !a.target.closest(".pano-picker") && (a.target.closest("[data-paint-color-row]") || (L.querySelectorAll(".pano-picker-pop").forEach((f) => {
      f.hidden = !0;
    }), lt(!0), R && d.cutoutAspectOpen && !a.target.closest(".pano-aspect-popover") && !a.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, ct(), He()), (u = D.frameRail) != null && u.aspectOpen && !a.target.closest(".pano-frame-aspect-control") && (D.frameRail.aspectOpen = !1)));
  });
  const d = {
    mode: "pano",
    selectedId: t === "stickers" ? b.active.selected_sticker_id : b.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: xr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Gn(b.coverage),
    historyController: EE(b),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: oi,
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
    showGrid: xE(e == null ? void 0 : e.id, !0),
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
    paintEngine: lf(),
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
  }, Z = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let C = null;
  t === "stickers" && (d.selectedId = null, b.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const J = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Map(), ze = Nn({ label: "editor.still" });
  ze.__panoFrameIdx = 0;
  const O = Nn({ label: "editor.port-still" });
  O.__panoFrameIdx = 0;
  let pe = () => {
  };
  const de = {
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
  }, Ee = mA({
    requestAnimationFrame: (a) => requestAnimationFrame(a),
    cancelAnimationFrame: (a) => cancelAnimationFrame(a),
    draw: (a, u) => Ev(a, u),
    animating: () => Iv()
  }), Ke = pA({
    requestFrame: (a) => Ee.requestFrame(a),
    cancelFrame: (a) => Ee.cancelFrame(a),
    tasks: {
      seek: () => ar.seek(Z.scrubFrame),
      timeline: () => Fr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        cr(), He({ localOnly: !0, reason: Pt.STATE });
      },
      sidePanel: () => it()
    }
  }), $e = gN({
    canvas: fe,
    onReady: () => {
      $s(), He({ reason: Pt.CONTEXT });
    },
    onFailed: () => He(),
    onUpdate: () => He({ localOnly: !0, reason: Pt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      _t = null, $s(), He({ reason: Pt.CONTEXT });
    }
  });
  let Xe = { revision: -1, sceneState: null }, rt = null, _t = null, Vt = null, Gt = null;
  const An = Number.parseFloat(
    getComputedStyle(L).getPropertyValue("--pano-float-radius")
  ) || 10, Ot = (a) => {
    const u = String(a || "default");
    F.style.cursor !== u && (F.style.cursor = u);
  }, Ct = {
    timer: 0,
    target: null
  }, Et = {
    active: !1,
    depth: 0
  }, {
    applyInitialCutoutFocus: Ti,
    applyRasterObjectOffset: Fi,
    applyRasterObjectTransform: Ms,
    applyStrokeGroupOffset: Cn,
    applyStrokeGroupTransform: ir,
    areAllSelectedItemsLocked: ga,
    bringSelectedToFront: ya,
    buildEditorViewPaintLayers: Di,
    buildRasterObjectEditCanvas: s1,
    canRestoreSelectedToInitial: l1,
    clearSelection: ba,
    clearWorldSelection: Yf,
    createRasterFrozenObjectsFromCanvas: c1,
    createRasterSurface: Xf,
    currentViewCamera: u1,
    deviceRect: Tc,
    ensureGroupFrame: So,
    ensurePaintingGroupEntry: qf,
    erpPointToWorldDir: d1,
    followPortSticker: f1,
    frameLocalPointToWorldDir: Jf,
    getActivePaintTargetDescriptor: or,
    getConnectedErpImage: Zf,
    getCutoutInspectorItems: Qf,
    getCutoutSelectableItems: p1,
    getCutoutSelectableItemsForDisplay: h1,
    getCutoutSelectableItemsForHit: Fc,
    getDisplayListObjects: m1,
    getExternalStickerPreviewImage: ep,
    getHistoryCapabilities: tp,
    getList: Li,
    getMediaRevisionToken: np,
    getMultiSelectionGeom: va,
    getNextStickerZIndex: Ns,
    getNodeUiValue: rp,
    getOrderedDisplayListObjects: ip,
    getPaintingGroupList: wo,
    getPortMedia: g1,
    getRasterObjectCenterUv: y1,
    getRasterObjectItem: op,
    getRasterObjectList: Jr,
    getSelectableRasterObjectItems: b1,
    getSelectableStrokeGroupItems: v1,
    getSelected: In,
    getSelectedItems: bi,
    getSelectedKind: Ps,
    getSelectionItemIcon: _1,
    getSelectionItemLabelData: Dc,
    getSharedLivePaintSurface: S1,
    getStageImageStatus: w1,
    getStickerDisplayAlpha: x1,
    getStickerImage: k1,
    getStrokeGroupCenterUv: M1,
    getStrokeGroupItem: ap,
    getStrokeGroupStrokes: xo,
    getUnwrapRect: As,
    hitRasterObjectAt: sp,
    invalidateLivePaintPreviewCaches: ko,
    isDecodedImageReady: N1,
    isErpCamera: Ri,
    isExternalSticker: Fn,
    isItemLocked: Dn,
    isItemSelected: lp,
    isPaintCompositeInteraction: P1,
    isRasterObjectItem: Ar,
    isSceneSticker: Zr,
    isShotItem: Yn,
    isStickerHidden: Cs,
    isStickerItem: ln,
    isStrokeGroupItem: Ln,
    isUploadingSticker: cp,
    makeRasterObjectSelectionId: up,
    makeStrokeGroupSelectionId: dp,
    markObjectVisualsDirty: hn,
    markPaintCompositeVisualsDirty: Mo,
    markPaintStrokeVisualsDirty: Cr,
    needsPaintingLayerSync: A1,
    objectGeom: cn,
    parseRasterObjectSelectionId: Vi,
    playback: ar,
    playbackFps: C1,
    portVideo: fp,
    poseOf: bn,
    processFreehandPoints: pp,
    projectDir: hp,
    projectDirUnwrap: I1,
    projectErpLassoPointsToFrameRect: O1,
    projectLassoPointsToCurrentView: E1,
    pushHistory: yt,
    queueVideoTransportLayout: T1,
    rasterizeStrokeToSurface: F1,
    rebuildPaintEngineIfNeeded: Is,
    refreshModalVideoSource: No,
    refreshPaintEngineRevisionCache: D1,
    releaseHiddenSelection: Lc,
    restoreHistory: Rc,
    restoreSelectedToInitialPose: L1,
    sampleStickerEdge: Os,
    sceneFiles: mp,
    screenPos: vi,
    screenPosCss: Es,
    screenPosToErpPoint: Ir,
    screenPosToFrameAsErpPoint: vr,
    screenToWorldDir: gp,
    selectWorldSticker: Vc,
    selectedWorldSticker: Po,
    sendSelectedToBack: R1,
    setSelectedItem: Xn,
    setSelectedItems: V1,
    shortestWrappedDelta: Ts,
    stickerCornerOrderSanity: $1,
    stickerFiles: z1,
    stickerImageKey: Fs,
    syncPaintingLayerAsync: yp,
    syncVideoTransportState: bp,
    syncVideoTransportVisibility: j1,
    toggleSelectedExternalStickerVisibility: H1,
    toggleSelectedLock: G1,
    toggleVideoMuted: vp,
    videoCleanupFns: W1,
    videoState: Ds,
    worldDirToFrameLocalPoint: _p,
    worldStickerEditable: Ls,
    writePose: _r
  } = ME({
    api: tn,
    backgroundCanvas: fe,
    cameraShoots: ei,
    cameraV2: G,
    canvas: F,
    comfyMedia: nr,
    commitAndRefreshNode: kt,
    commitState: qn,
    computeStickerVFov: ji,
    cutoutV2: N,
    editor: d,
    editorView: $e,
    floatingRightEl: te,
    getActiveCutoutShot: at,
    getBrushPresetIdForTool: Wi,
    getFrameViewRect: wr,
    getPaintingLayerList: Bs,
    hasCamera: _i,
    imageCache: J,
    isFreeSpaceView: sr,
    loadPreferredExactLinkedImage: Ug,
    mediaAssetSource: jE,
    mediaSource: HE,
    mediaUiImage: GE,
    node: e,
    paintingShown: Pp,
    portStillCanvas: O,
    portVideoEl: Te,
    rasterErpCanvasCache: Ve,
    rasterImageAlphaCache: ge,
    rasterImageCache: Se,
    readOnly: r,
    requestDraw: He,
    resolveEditorOutputPresetWidth: S,
    runtime: de,
    sceneStickerShown: Ap,
    sceneV2: w,
    scheduler: Ee,
    setTimelineFrame: Dv,
    shotEditor: R,
    stageWrap: Ae,
    state: b,
    stateV2: _,
    stillCanvas: ze,
    stopTimelinePlayback: gn,
    studio: I,
    syncCutoutShot: cr,
    syncPaintUi: Rn,
    syncTimeline: Fr,
    syncUndoRedoButtons: Oh,
    timeline: Z,
    timelinePlayhead: ae,
    timelineSpanFrames: zs,
    type: t,
    uiState: D,
    updateSelectionMenu: ct,
    updateSidePanel: it,
    videoEl: Pe
  }, [
    CE,
    TE,
    FE,
    DE,
    LE,
    RE,
    VE,
    $E
  ]);
  function K1() {
    D.toolButtons.forEach((a) => {
      const u = a.attr === "data-tool-mode", f = a.attr === "data-paint-tool", g = a.attr === "data-mask-tool";
      a.active = u ? a.value === d.primaryTool : f ? a.key === d.paintTool : g ? a.key === d.maskTool : !1, a.pressed = a.active ? "true" : a.pressed == null ? null : "false";
    });
  }
  function $c(a) {
    return Hf(a == null ? void 0 : a.dataTransfer);
  }
  function $i(a) {
    const u = !!a;
    Et.active !== u && (Et.active = u, Ae.classList.toggle("drop-active", u));
  }
  function zi(a, u = null) {
    const f = mn();
    xa(() => {
      d.viewTransition = kA(f, a, performance.now(), { scale: Tr(), end: u });
    }), !d.viewTransition && u && Sp(u), on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0, Or(), He({ localOnly: !0, reason: Pt.VIEW });
  }
  function Sp(a) {
    wa(gd({ ...Hc(), moved: a.moved }, a.mode, Ao())), de.backgroundDirty = !0;
  }
  function _a() {
    d.viewTransition && (d.viewTransition = null, Or());
  }
  function wp(a, u) {
    zi({ ...mn(), yaw_deg: a, pitch_deg: u });
  }
  $1();
  function B1() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function U1() {
    return String(B1() || "") === "lasso_fill";
  }
  function xp(a, u = null) {
    var f;
    if (a && typeof a == "object" && !Array.isArray(a)) return a;
    if (Array.isArray(a) && a.length > 0) {
      const g = a[0];
      if (g && typeof g == "object" && !Array.isArray(g)) return g;
    }
    if (Array.isArray(u) && u.length > 0) {
      const g = (f = u[0]) == null ? void 0 : f.parsed_state;
      if (g && typeof g == "object" && !Array.isArray(g))
        return {
          yaw_deg: Number(g.yaw_deg || 0),
          pitch_deg: Number(g.pitch_deg || 0),
          hFOV_deg: Number(g.hFOV_deg || 30),
          rot_deg: Number(g.roll_deg || 0)
        };
    }
    return null;
  }
  function ji(a, u, f) {
    const g = Math.max(1, Number(u || 1)), v = Math.max(1, Number(f || 1)), k = Me(Number(a || 30), 0.1, 179) * Kr, P = 2 * Math.atan(Math.tan(k * 0.5) * (v / g));
    return Me(P * so, 0.1, 179);
  }
  function Y1(a) {
    const u = String(a || "").trim();
    if (!u) return null;
    try {
      const f = JSON.parse(u);
      if (!f || typeof f != "object" || String(f.kind || "") !== "pano_sticker_state") return null;
      const g = f.version;
      let v = null;
      if (typeof g == "number" && Number.isInteger(g) ? v = g : typeof g == "string" && /^\d+$/.test(g) && (v = Number.parseInt(g, 10)), v !== 1) return null;
      const k = f.pose;
      if (!k || typeof k != "object") return null;
      const P = Number(k.yaw_deg), V = Number(k.pitch_deg), j = Number(k.roll_deg), ve = Number(k.hFOV_deg);
      if (![P, V, j, ve].every((Ye) => Number.isFinite(Ye))) return null;
      let ee = ((P + 180) % 360 + 360) % 360 - 180;
      Object.is(ee, -0) && (ee = 0);
      const ce = {
        yaw_deg: ee,
        pitch_deg: Me(V, -89.9, 89.9),
        roll_deg: j,
        hFOV_deg: Me(ve, 0.1, 179)
      }, we = Number(f.source_aspect);
      return Number.isFinite(we) && we > 0 && (ce.source_aspect = we), ce;
    } catch {
      return null;
    }
  }
  function kp(a) {
    const u = Number(a == null ? void 0 : a.yaw_deg), f = Number(a == null ? void 0 : a.pitch_deg), g = Number((a == null ? void 0 : a.roll_deg) ?? (a == null ? void 0 : a.rot_deg)), v = Number(a == null ? void 0 : a.hFOV_deg), k = mo(a);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(u) ? u : 0),
        pitch_deg: Me(Number.isFinite(f) ? f : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(g) ? g : 0,
        hFOV_deg: Me(Number.isFinite(v) ? v : 90, 0.1, 179)
      },
      source_aspect: k
    };
  }
  function X1(a) {
    var V;
    if (!a || typeof a != "object") return kp(null);
    const u = Number(a == null ? void 0 : a.yaw_deg), f = Number(a == null ? void 0 : a.pitch_deg), g = Number((a == null ? void 0 : a.roll_deg) ?? (a == null ? void 0 : a.rot_deg)), v = Number(a == null ? void 0 : a.hFOV_deg), k = Number(a == null ? void 0 : a.vFOV_deg);
    let P = 1;
    if (Number.isFinite(v) && Number.isFinite(k)) {
      const j = Me(v, 0.1, 179) * Kr, ve = Me(k, 0.1, 179) * Kr, ee = Math.tan(ve * 0.5);
      if (Math.abs(ee) > 1e-6) {
        const ce = Math.tan(j * 0.5) / ee;
        Number.isFinite(ce) && ce > 0 && (P = ce);
      }
    }
    if (a != null && a.asset_id && ((V = b == null ? void 0 : b.assets) != null && V[a.asset_id])) {
      const j = b.assets[a.asset_id], ve = Number((j == null ? void 0 : j.w) || 0), ee = Number((j == null ? void 0 : j.h) || 0);
      ve > 0 && ee > 0 && (P = ve / ee);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(u) ? u : 0),
        pitch_deg: Me(Number.isFinite(f) ? f : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(g) ? g : 0,
        hFOV_deg: Me(Number.isFinite(v) ? v : 30, 0.1, 179)
      },
      source_aspect: P
    };
  }
  function q1(a) {
    return nr.linkedValue(e, a);
  }
  function J1(a, u, f) {
    const g = a && typeof a == "object" ? {
      yaw_deg: Number(a.yaw_deg || 0),
      pitch_deg: Number(a.pitch_deg || 0),
      roll_deg: Number(a.rot_deg ?? a.roll_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg || 30)
    } : Y1(u);
    if (g) {
      const P = Number((f == null ? void 0 : f.naturalWidth) || (f == null ? void 0 : f.width) || g.source_aspect || 1), V = Number((f == null ? void 0 : f.naturalHeight) || (f == null ? void 0 : f.height) || 1);
      return {
        yaw_deg: Number(g.yaw_deg || 0),
        pitch_deg: Number(g.pitch_deg || 0),
        hFOV_deg: Number(g.hFOV_deg || 30),
        vFOV_deg: ji(g.hFOV_deg, P, V),
        rot_deg: Number(g.roll_deg || 0)
      };
    }
    const v = Number((f == null ? void 0 : f.naturalWidth) || (f == null ? void 0 : f.width) || 1), k = Number((f == null ? void 0 : f.naturalHeight) || (f == null ? void 0 : f.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: ji(30, v, k),
      rot_deg: 0
    };
  }
  function Z1() {
    const a = ep(() => {
      pi(e, "image-loaded");
    }), u = yn(e, "external-sticker") ? xp(rp("pano_sticker_input_pose"), null) : null;
    return _b(b, vb(e, { pose: u, image: a }));
  }
  function Q1() {
    var V;
    const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((j) => String((j == null ? void 0 : j.name) || "") === "sticker_image") : -1, u = a >= 0 ? ((V = e.getInputLink(a)) == null ? void 0 : V.id) ?? null : null, f = ep(() => {
      pi(e, "image-loaded");
    }), g = xp(rp("pano_sticker_input_pose"), null), v = q1("sticker_state"), k = nr.externalStateHash(e, v), P = u == null ? null : J1(g, v, f);
    return bb(b, {
      connected: u != null,
      linkId: u,
      stateHash: k,
      pose: P,
      imageWidth: Number((f == null ? void 0 : f.naturalWidth) || (f == null ? void 0 : f.width) || 0),
      imageHeight: Number((f == null ? void 0 : f.naturalHeight) || (f == null ? void 0 : f.height) || 0)
    });
  }
  function Mp(a = "sync") {
    if (t !== "stickers" || r) return;
    const u = e.__panoSceneStateV2 ? Z1() : Q1();
    if (u.changed) {
      const f = b.stickers.find(Fn);
      b.stickers = u.state.stickers, b.active = u.state.active, f && d.selectedId === f.id && !b.stickers.some((g) => g.id === f.id) && (d.selectedId = null, d.selectedIds = []), kt(), it(), ct();
    }
    He();
  }
  function zc() {
    if (I && Vo(D.toolButtons, "value", "add-camera", { disabled: _i() }), t !== "cutout") return;
    const a = at();
    Vo(D.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: a ? "Look At Frame" : "Add Frame",
      tip: a ? "Look at frame" : "Add frame",
      icon: a ? Ue.camera : Ue.plus_circle
    });
  }
  function Or() {
    const a = EA({
      spaceView: Hi(),
      spaceMode: Cl(d.spaceMode, d.viewTransition),
      readOnly: r,
      frameMode: R && d.mode === "frame",
      showGrid: d.showGrid
    });
    D.space && Object.assign(D.space, a.space);
    for (const [u, f] of Object.entries(a.buttons)) Vo(D.floatingButtons, "action", u, f);
  }
  function Qr() {
    var f;
    const a = TA({ hasShot: !!at(), erp: Ri(), hidden: _i() && !ei(), studio: I });
    d.mode === "frame" && a.disabled && (I ? lh(at()) : d.mode = "pano"), d.outputPreviewRect = null, D.viewButtons.forEach((g) => {
      const v = g.key === d.mode;
      g.pressed = v ? "true" : "false", g.visible = !(g.key === "frame" && !R), g.key === "frame" ? Object.assign(g, a) : g.disabled = !1;
    });
    const u = R && d.mode === "frame" ? at() : null;
    D.frameRail.visible = !!u, D.frameRail.disabled = r || (u == null ? void 0 : u.locked) === !0, D.frameRollKnob.visible = !!u && !r && u.locked !== !0, D.frameRollKnob.disabled = r || (u == null ? void 0 : u.locked) === !0, D.frameRollKnob.rollDeg = Number((u == null ? void 0 : u.roll_deg) ?? (u == null ? void 0 : u.rot_deg) ?? 0), D.frameRollKnob.displayValue = $o(D.frameRollKnob.rollDeg), D.frameRollKnob.dragging = ((f = d.interaction) == null ? void 0 : f.kind) === "roll_frame", D.frameRollKnob.armed = !!u && d.altModifier === !0, D.frameRail.rollKnob = D.frameRollKnob, D.frameRail.aspectLabel = u ? ui(u) : "", D.frameRail.aspectChoices = qb(u ? String(ui(u)) : null, { erp: I, coverage: b.coverage }), u || (D.frameRail.aspectOpen = !1), D.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!at(), R && D.cameraPreview && (D.cameraPreview.visible = d.mode !== "frame" && Np(), D.cameraPreview.expanded = !!d.outputPreviewExpanded, D.cameraPreview.settled = D.cameraPreview.settled === !0 && de.pendingStableLayoutFrames <= 0 && de.hasPresentedFrame), Or(), gh() ? It(d.pointerPos) : Ot(d.mode === "pano" ? "grab" : "default");
  }
  function Np() {
    return !I || ei() && !Ri();
  }
  function Hi() {
    return d.mode === "pano" && Sa();
  }
  function Sa() {
    return _ && KM({ sceneLinked: w && !!wd(e).scene, files: mp(), stickers: b.stickers });
  }
  function sr() {
    return d.spaceMode === "6dof" && Hi();
  }
  function jc() {
    var a, u, f;
    return $P((f = (u = (a = Qn.ui) == null ? void 0 : a.settings) == null ? void 0 : u.getSettingValue) == null ? void 0 : f.call(u, Rb));
  }
  function Hc() {
    return { mode: d.spaceMode, position: d.viewPosition, moved: d.viewMoved };
  }
  function wa(a) {
    d.spaceMode = a.mode, d.viewPosition = a.position, d.viewMoved = a.moved;
  }
  function ev(a) {
    var f;
    const u = NA(d.spaceMode, d.viewTransition, a);
    if (u !== "keep") {
      if (u === "return") {
        zi({ ...mn(), position: Ao(), distance: ((f = Er()) == null ? void 0 : f.radius) || xr }, { mode: a, moved: !1 });
        return;
      }
      _a(), wa(gd({ ...Hc(), position: mn().position }, a, Ao())), de.backgroundDirty = !0, Or(), He({ localOnly: !0, reason: Pt.VIEW });
    }
  }
  function mn() {
    var f;
    const a = d.viewMoved ? d.viewDistance : ((f = Er()) == null ? void 0 : f.radius) || xr, u = { position: d.viewPosition, yaw_deg: d.viewYaw, pitch_deg: d.viewPitch, hFOV_deg: d.viewFov, distance: a };
    return zM(d.spaceMode, u, Ao());
  }
  function Ao() {
    return ei() ? Gi().position : [0, 0, 0];
  }
  function _i() {
    return G && b.camera !== null;
  }
  function ei() {
    return _i() && (!I || b.camera.visible);
  }
  function Pp() {
    return b.painting_visible !== !1;
  }
  function Ap(a) {
    return a.visible && Qo(a.clip, d.frame);
  }
  function Gi() {
    return gf(b.camera, d.frame);
  }
  function Er() {
    var u;
    const a = Sr();
    return ((u = a.space ?? a.content) == null ? void 0 : u.sphere) ?? null;
  }
  function Cp(a) {
    d.viewPosition = a.position, d.viewYaw = a.yaw_deg, d.viewPitch = a.pitch_deg, d.viewDistance = a.distance, d.viewMoved = !0, de.backgroundDirty = !0, He({ localOnly: !0, reason: Pt.VIEW });
  }
  function Tr() {
    var a;
    return ((a = Er()) == null ? void 0 : a.radius) || xr;
  }
  function tv() {
    var V;
    const a = Sr().space, u = Xe.sceneState, f = d.worldSelectedId || d.selectedId, g = u.stickers.findIndex((j) => j.id === f), v = g < 0 ? null : {
      sticker: u.stickers[g],
      value: Xl(u, d.frame).stickers[g],
      plane: a.stickers.find((j) => j.id === f) ?? null,
      item: ((V = a.sticker) == null ? void 0 : V.id) === f && a.sticker.url ? { kind: a.sticker.kind, box: $e.sceneBox(a.sticker.url) } : null
    }, k = lr() ? Fp() : JM(Er(), v);
    if (!k) return;
    const P = mn();
    d.viewDistance = P.distance, d.viewMoved = !0, zi(Zm(P, k, F.width, F.height));
  }
  function Ip(a) {
    return $e.pickSurface(Eo(), a.x, a.y, F.width, F.height);
  }
  function Op(a, u) {
    var f;
    return Iu(a, u, d.viewMoved ? null : (f = Er()) == null ? void 0 : f.center, Tr());
  }
  function Ep() {
    return JSON.stringify([d.viewPosition, d.viewYaw, d.viewPitch]);
  }
  function nv(a, u) {
    const f = performance.now(), g = { x: a.x, y: a.y, time: f, key: $e.contentRevision(), view: Ep() };
    if (!Ym(Vt, g)) {
      const k = Ip(a);
      Vt = { ...g, cost: performance.now() - f, hit: k };
    }
    const v = mn();
    Cp(Jm(v, Op(v, Vt.hit), u, Tr())), Vt.view = Ep(), Vt.wheelTime = f;
  }
  function Tp(a, u, f) {
    const g = mn();
    d.interaction = a === "orbit" ? { kind: "space_orbit", last: u, pivot: Op(g, Ip(u)) } : { kind: "space_pan", last: u, depth: Um(g, Tr()) }, It(u), F.setPointerCapture(f);
  }
  function Co() {
    const a = new Set(
      (b.stickers || []).map((u) => String((u == null ? void 0 : u.asset_id) || "")).filter((u) => !!u)
    );
    Object.keys(b.assets || {}).forEach((u) => {
      a.has(u) || (delete b.assets[u], J.delete(u));
    });
  }
  function Sr() {
    return rt || (rt = rv()), rt;
  }
  function rv() {
    const a = Zf(), u = Di(), f = { ...b.assets };
    for (const Ne of _ ? [] : b.stickers) {
      const tt = String((Ne == null ? void 0 : Ne.asset_id) || "");
      tt && !f[tt] && J.has(tt) && (f[tt] = { type: "comfy_image", filename: tt });
    }
    const g = _ ? b.stickers.map((Ne) => cp(Ne) ? { ...Ne, source: { kind: "file", filename: Fs(Ne) } } : Ne) : b.stickers;
    Xe.revision !== Ee.stateRevision && (Xe = { revision: Ee.stateRevision, sceneState: Ur({ ...b, stickers: g, assets: f, painting: null }) }), _ && iv(Xe.sceneState);
    const v = Xl(Xe.sceneState, d.frame), k = fp ? f1() : null, P = (Ne) => {
      if (_ && !Ne.visible) return null;
      if (fp && Fn(Ne)) return k;
      const tt = k1(Ne);
      return tt ? { media: tt, revision: np(tt) } : null;
    }, V = qy(Xe.sceneState, d.frame, b.stickers, { media: P, paintLayers: u, evaluated: v }), j = a && (a === Pe || a === ze) ? Pe.dataset.panoSrc : a, ve = N1(a) ? { media: a, revision: np(a), coverage: Gn(b.coverage), source: j } : null, ee = Sa(), ce = jM(Hc(), ee, Ao());
    ce.mode !== d.spaceMode && _a(), wa(ce);
    const we = ee ? ov(Xe.sceneState, v, P) : null, Ye = Hi() ? { ...we, ...av(we) } : null;
    return { background: ve, layers: V, space: Ye, content: we };
  }
  function iv(a) {
    const u = new Map(b.stickers.map((f) => [f.id, f.clip]));
    a.scene.clip = { ...b.scene.clip };
    for (const f of a.stickers) {
      const g = u.get(f.id);
      g && (f.clip = { ...g });
    }
  }
  function ov(a, u, f) {
    const g = mp(), v = Ky(g, u.scene), k = v != null && v.url ? $e.sceneBox(v.url) : null, P = k && vd(v.kind, k), V = z1(), j = BM(V, a, u), ve = j != null && j.url ? $e.sceneBox(j.url) : null, ee = ve ? [{ box: vd(j.kind, ve), value: j.value }] : [], ce = mN(a, d.frame, b.stickers, { media: f, evaluated: u }), we = Sd(XM(u, P, ce, ee));
    return {
      evaluated: u,
      sceneUrls: g ? g.urls.filter(Boolean) : [],
      scene: v,
      stickerUrls: UM(V, a),
      sticker: j,
      stickers: ce,
      sphere: we
    };
  }
  function av(a) {
    var f;
    const u = ((f = a.sphere) == null ? void 0 : f.radius) || xr;
    return {
      gizmo: lr() ? uv() : sv(a.evaluated),
      grid: d.showGrid && !d.fullscreen ? lN(u) : null,
      lines: ei() ? cv(u) : []
    };
  }
  function sv(a) {
    const u = Po(), f = a.stickers.find((g) => g.id === (u == null ? void 0 : u.id));
    return !Ls(u) || !(f != null && f.active) ? null : { mode: d.gizmoMode, transform: yd(f) };
  }
  function Gc(a) {
    return a * 0.2;
  }
  function Fp() {
    return { center: Gi().position, radius: Gc(Tr()) };
  }
  function lv(a, u) {
    const { yaw_deg: f, pitch_deg: g } = By(a.position, u);
    return { ...a, yaw_deg: f, pitch_deg: g };
  }
  function lr() {
    return ei() && d.selectedId === ec;
  }
  let Rs = { revision: -1, span: -1, segments: [] };
  function cv(a) {
    const u = zs();
    (Rs.revision !== Ee.stateRevision || Rs.span !== u) && (Rs = { revision: Ee.stateRevision, span: u, segments: uN(dN(b, u)) });
    const { segments: f } = Rs, g = f.length ? [{ segments: f, color: tE }] : [];
    if (!sr()) return g;
    const v = lr() ? zg : eE;
    return [...g, { segments: ng(Gi(), Gc(a)), color: v }];
  }
  function uv() {
    return !sr() || !lr() || r ? null : { mode: d.gizmoMode === "rotate" ? "rotate" : "translate", transform: yd({ ...Gi(), scale: 1 }) };
  }
  function dv(a, u) {
    var v;
    const f = (v = Sr().space) == null ? void 0 : v.gizmo;
    if (lr() && f && Bi("hover", u) !== null && Bi("down", u))
      return d.interaction = { kind: "world_gizmo", camera: !0, mode: f.mode, start: f.transform, base: Gi(), changed: !1 }, F.setPointerCapture(a.pointerId), It(u), !0;
    const g = ng(Gi(), Gc(Tr()));
    return cN(Eo(), g, u, F.width, F.height) ? (lr() || (Xn(at()), it(), ct(), He()), d.interaction = { kind: "world_select" }, F.setPointerCapture(a.pointerId), !0) : !1;
  }
  function fv() {
    const { background: a, layers: u, space: f } = Sr(), g = F.width, v = F.height, k = Tc({ x: 0, y: 0, w: g, h: v });
    let P = !1;
    return !a && !u.length && !f ? ($e.clear(460551), P = $e.ready) : ($e.clear(), P = !!$e.render({
      rect: k,
      camera: f ? Ou(mn(), g, v, f.sphere) : u1(),
      background: a,
      layers: u,
      space: f
    })), Or(), (d.worldSelectedId || lr() || ie) && ct(), P;
  }
  function Dp(a) {
    const { content: u } = Sr();
    return !u || !a.position ? ns(a) : Gy(ns(a), a.position, uh(), u.sphere);
  }
  function Lp(a, u, f, g = null) {
    const { background: v, layers: k, content: P } = Sr();
    if (!v && !k.length && !P) return null;
    const V = P && u.position ? P : null;
    return $e.render({ rect: a, camera: Dp(u), background: v, layers: k, space: V, owner: f, clearColor: g });
  }
  function pv(a) {
    return $e.clear(460551), !!$e.renderUnwrap({ rect: Tc(a), ...Sr() });
  }
  function hv(a) {
    const u = F.width, f = F.height, g = As();
    if (x.globalAlpha = 1, x.lineWidth = 1, x.clearRect(0, 0, u, f), Is(), a && (de.backgroundDirty = !pv(g)), d.showGrid && !d.fullscreen) {
      x.strokeStyle = "#3f3f46";
      for (let k = 0; k <= 16; k += 1) {
        const P = g.x + g.w * k / 16;
        x.beginPath(), x.moveTo(P, g.y), x.lineTo(P, g.y + g.h), x.stroke();
      }
      for (let k = 0; k <= 8; k += 1) {
        const P = g.y + g.h * k / 8;
        x.beginPath(), x.moveTo(g.x, P), x.lineTo(g.x + g.w, P), x.stroke();
      }
      x.strokeStyle = "rgba(250, 250, 250, 0.86)", x.lineWidth = 1.2, x.beginPath(), x.moveTo(g.x, g.y + g.h / 2), x.lineTo(g.x + g.w, g.y + g.h / 2), x.stroke(), x.fillStyle = "rgba(250, 250, 250, 0.42)", x.font = "500 11px Geist, sans-serif", x.textAlign = "center";
      const v = g.y + g.h * 0.57;
      x.fillText("Left", g.x + g.w * 0.25, v), x.fillText("Front", g.x + g.w * 0.5, v), x.fillText("Right", g.x + g.w * 0.75, v), x.fillText("Back", g.x + 38, v), x.fillText("Back", g.x + g.w - 38, v);
    }
  }
  function Rp(a, u, f = 1) {
    let g = !1;
    x.strokeStyle = u, x.lineWidth = f, x.beginPath();
    for (const v of a) {
      const k = hp(v);
      if (!k) {
        g = !1;
        continue;
      }
      g ? x.lineTo(k.x, k.y) : (x.moveTo(k.x, k.y), g = !0);
    }
    x.stroke();
  }
  function mv(a) {
    const u = F.width, f = F.height;
    if (x.clearRect(0, 0, u, f), Is(), a && (de.backgroundDirty = !fv()), d.showGrid && !d.fullscreen && Sr().space)
      gv();
    else if (d.showGrid && !d.fullscreen) {
      for (let v = -180; v <= 180; v += 15) {
        const k = [];
        for (let P = -89; P <= 89; P += 4) k.push(Wn(v, P));
        Rp(k, "#3f3f46", v % 90 === 0 ? 1.3 : 1);
      }
      for (let v = -75; v <= 75; v += 15) {
        const k = [];
        for (let P = -180; P <= 180; P += 4) k.push(Wn(P, v));
        Rp(k, v === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", v === 0 ? 1.5 : 1);
      }
      const g = [
        { name: "Left", dir: Wn(-90, 0) },
        { name: "Front", dir: Wn(0, 0) },
        { name: "Right", dir: Wn(90, 0) },
        { name: "Back", dir: Wn(180, 0) }
      ];
      x.fillStyle = "rgba(250, 250, 250, 0.42)", x.font = "500 11px Geist, sans-serif", x.textAlign = "center", g.forEach((v) => {
        const k = hp(v.dir);
        k && x.fillText(v.name, k.x, k.y + 24);
      });
    }
  }
  function gv() {
    const a = Ou(mn(), F.width, F.height, Er()), u = gs(a, [0, 0, 0], F.width, F.height);
    u && (x.fillStyle = "rgba(255, 221, 87, 0.9)", x.font = "500 11px Geist, sans-serif", x.textAlign = "center", x.fillText("ERP origin", u.x, u.y - 12));
  }
  function yv(a, u) {
    const f = bn(a), g = Wn(Number(f.yaw_deg || 0), Number(f.pitch_deg || 0)), v = d.mode === "unwrap" ? I1(g) : null, k = v ? v.x : null, P = d.mode === "pano" ? 28 : 20, V = [
      Os(a, 0, P, k),
      Os(a, 1, P, k),
      Os(a, 2, P, k),
      Os(a, 3, P, k)
    ];
    Vf(x, V, { selected: u });
  }
  function Vs(a, u = []) {
    if (!(!a || !Array.isArray(u) || u.length < 4)) {
      a.beginPath(), a.moveTo(u[0].x, u[0].y);
      for (let f = 1; f < 4; f += 1) a.lineTo(u[f].x, u[f].y);
      a.closePath();
    }
  }
  function Vp(a, u, f) {
    const g = Array.isArray(a == null ? void 0 : a.corners) ? a.corners : [];
    if (g.length < 4) return;
    const v = Me(Number((a == null ? void 0 : a.visibilityAlpha) ?? 1), 0, 1);
    if (v <= 0.01) return;
    const k = x.globalAlpha;
    x.globalAlpha = k * v;
    const P = f ? "rgba(255, 116, 116, 0.96)" : u ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", V = f ? "rgba(255, 89, 89, 0.08)" : u ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", j = u ? 3.2 : 2.6;
    Vs(x, g), x.fillStyle = V, x.fill(), x.strokeStyle = P, x.lineWidth = j, x.stroke(), x.save(), x.strokeStyle = P, x.lineWidth = u ? 3.2 : 2.6, x.lineCap = "round";
    const ve = Array.isArray(a == null ? void 0 : a.edgeMidpoints) && a.edgeMidpoints.length >= 4 ? a.edgeMidpoints : [
      { edge: "top", x: (g[0].x + g[1].x) * 0.5, y: (g[0].y + g[1].y) * 0.5 },
      { edge: "right", x: (g[1].x + g[2].x) * 0.5, y: (g[1].y + g[2].y) * 0.5 },
      { edge: "bottom", x: (g[2].x + g[3].x) * 0.5, y: (g[2].y + g[3].y) * 0.5 },
      { edge: "left", x: (g[3].x + g[0].x) * 0.5, y: (g[3].y + g[0].y) * 0.5 }
    ], ee = { top: "bottom", right: "left", bottom: "top", left: "right" }, ce = u ? 12 : 9;
    ve.forEach((we) => {
      const Ne = ve.find((dt) => (dt == null ? void 0 : dt.edge) === ee[we == null ? void 0 : we.edge]) || {
        x: (g[0].x + g[1].x + g[2].x + g[3].x) * 0.25,
        y: (g[0].y + g[1].y + g[2].y + g[3].y) * 0.25
      }, tt = Ne.x - we.x, nt = Ne.y - we.y, St = Math.hypot(tt, nt) || 1;
      x.beginPath(), x.moveTo(we.x, we.y), x.lineTo(we.x + tt / St * ce, we.y + nt / St * ce), x.stroke();
    }), x.restore(), x.globalAlpha = k;
  }
  function bv(a, u, f, g) {
    const v = Me(Number((u == null ? void 0 : u.visibilityAlpha) ?? 1), 0, 1);
    if (v <= 0.01) return;
    if (Yn(a)) {
      Vp(u, f, g);
      return;
    }
    if (ln(a)) {
      const P = x.globalAlpha;
      x.globalAlpha = P * x1(a) * v, d.mode === "frame" ? (x.strokeStyle = f ? "rgba(250, 250, 250, 0.9)" : g ? "rgba(255, 89, 89, 0.72)" : "#71717a", x.lineWidth = f ? 2 : 1, Vs(x, u.corners), x.stroke()) : yv(a, f), x.globalAlpha = P;
      return;
    }
    const k = x.globalAlpha;
    x.globalAlpha = k * v, x.fillStyle = f ? "rgba(0, 112, 243, 0.24)" : g ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Vs(x, u.corners), x.fill(), x.strokeStyle = f ? "rgba(255, 255, 255, 1)" : g ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", x.lineWidth = f ? 2.8 : 1.9, Vs(x, u.corners), x.stroke(), x.globalAlpha = k;
  }
  function $p(a, u, f) {
    if (ln(a)) {
      Db(x, u, { accent: f });
      return;
    }
    const g = !(Yn(a) && Ri());
    x.fillStyle = f, g && u.corners.forEach((v) => {
      x.beginPath(), x.arc(v.x, v.y, 6.5, 0, Math.PI * 2), x.fill();
    }), g && Yn(a) && (x.strokeStyle = f, x.lineCap = "round", x.lineWidth = 4, u.edgeMidpoints.forEach((v) => {
      var ce, we, Ye, Ne;
      const k = (((ce = v.b) == null ? void 0 : ce.x) ?? v.x) - (((we = v.a) == null ? void 0 : we.x) ?? v.x), P = (((Ye = v.b) == null ? void 0 : Ye.y) ?? v.y) - (((Ne = v.a) == null ? void 0 : Ne.y) ?? v.y), V = Math.hypot(k, P) || 1, j = k / V, ve = P / V, ee = 10;
      x.beginPath(), x.moveTo(v.x - j * ee, v.y - ve * ee), x.lineTo(v.x + j * ee, v.y + ve * ee), x.stroke();
    }), x.lineCap = "butt"), Ln(a) || (x.strokeStyle = "rgba(250, 250, 250, 0.9)", x.lineWidth = 1.8, x.beginPath(), x.moveTo(u.rotateStemBase.x, u.rotateStemBase.y), x.lineTo(u.rotateHandle.x, u.rotateHandle.y), x.stroke(), x.fillStyle = f, x.beginPath(), x.arc(u.rotateHandle.x, u.rotateHandle.y, 10, 0, Math.PI * 2), x.fill());
  }
  function vv() {
    var k;
    const a = d.mode === "frame" ? [] : bi(), u = a.length > 1, f = R ? h1() : Li(), g = f.map((P) => `${String((P == null ? void 0 : P.id) || "")}:${Yn(P) ? "frame" : Number((P == null ? void 0 : P.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== f || d._sortedItemsCache.orderKey !== g) && (d._sortedItemsCache = {
      src: f,
      orderKey: g,
      sorted: [...f]
    });
    const v = d._sortedItemsCache.sorted;
    for (const P of v) {
      const V = d.mode !== "frame" && !u && lp(P);
      if (d.mode === "frame" && !V) continue;
      const j = ln(P), ve = Yn(P), ee = Dn(P);
      if (!j && !ve || Zr(P) && !Ap(P)) continue;
      const ce = cn(P);
      if (t !== "stickers" && !ce.visible)
        continue;
      const we = Me(Number((ce == null ? void 0 : ce.visibilityAlpha) ?? 1), 0, 1);
      if (we <= 0.01) continue;
      const Ye = ve && R && d.mode === "pano" ? Me(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (x.save(), x.globalAlpha *= Ye, bv(P, ce, V, ee), V && ce.visible) {
        const Ne = ee ? "#ff4d4f" : j && Fn(P) ? "#f59e0b" : "#0070f3", tt = x.globalAlpha;
        x.globalAlpha = tt * we, $p(P, ce, Ne), x.globalAlpha = tt;
      }
      x.restore();
    }
    if (R && d.mode === "pano" && !at() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const P = d.cutoutPanoFrameVisual, V = Me(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      x.save(), x.globalAlpha *= V, Vp(P.geom, P.selected, P.locked), P.selected && $p(
        P.item,
        P.geom,
        P.locked ? "#ff4d4f" : "#0070f3"
      ), x.restore();
    }
    if (u) {
      const P = va(a);
      if (P != null && P.visible) {
        const V = ga(a) ? "#ff4d4f" : "#0070f3";
        x.save(), x.strokeStyle = "rgba(255, 255, 255, 0.95)", x.lineWidth = 2, x.setLineDash([6, 4]), x.beginPath(), x.moveTo(P.corners[0].x, P.corners[0].y);
        for (let j = 1; j < P.corners.length; j += 1) x.lineTo(P.corners[j].x, P.corners[j].y);
        x.closePath(), x.stroke(), x.setLineDash([]), x.fillStyle = V, P.corners.forEach((j) => {
          x.beginPath(), x.arc(j.x, j.y, 6.5, 0, Math.PI * 2), x.fill();
        }), x.restore();
      }
    } else
      a.forEach((P) => {
        if (!Ln(P) && !Ar(P)) return;
        const V = cn(P);
        if (!(V != null && V.visible)) return;
        const j = Dn(P) ? "#ff4d4f" : "#0070f3";
        x.save(), x.strokeStyle = "rgba(255, 255, 255, 0.95)", x.lineWidth = 2, x.setLineDash([6, 4]), x.beginPath(), x.moveTo(V.corners[0].x, V.corners[0].y);
        for (let ve = 1; ve < V.corners.length; ve += 1) x.lineTo(V.corners[ve].x, V.corners[ve].y);
        x.closePath(), x.stroke(), x.setLineDash([]), x.fillStyle = j, V.corners.forEach((ve) => {
          x.beginPath(), x.arc(ve.x, ve.y, 6.5, 0, Math.PI * 2), x.fill();
        }), x.restore();
      });
    if (((k = d.interaction) == null ? void 0 : k.kind) === "marquee_select") {
      const P = Sh(d.interaction.start, d.interaction.current);
      x.save(), x.strokeStyle = "rgba(255, 255, 255, 0.9)", x.fillStyle = "rgba(255, 255, 255, 0.08)", x.lineWidth = 1, x.setLineDash([5, 4]), x.beginPath(), x.rect(P.x0, P.y0, P.x1 - P.x0, P.y1 - P.y0), x.fill(), x.stroke(), x.restore();
    }
  }
  function zp(a, u = !1) {
    const f = Me(mo(a), 0.05, 20), g = u ? 320 : 220;
    return f >= 1 ? { width: g, height: Math.max(1, Math.round(g / f)) } : { width: Math.max(1, Math.round(g * f)), height: g };
  }
  function _v(a) {
    if (!q || !a) return !1;
    const u = q.closest(".pano-camera-preview");
    if (!u) return !1;
    const f = Math.round(Number(u.clientWidth || q.clientWidth || 0)), g = Math.round(Number(u.clientHeight || q.clientHeight || 0));
    return Math.abs(f - Number(a.width || 0)) <= 1 && Math.abs(g - Number(a.height || 0)) <= 1;
  }
  function Sv(a, u) {
    if (d.outputPreviewRect = null, D.outputPreviewToggle.visible = d.mode !== "frame" && !!at(), I && (D.outputPreviewToggle.visible = !1), !R || !D.cameraPreview) return;
    if (d.mode === "frame" || !Np()) {
      D.cameraPreview.visible = !1, D.cameraPreview.settled = !1, _t = null;
      return;
    }
    const f = at();
    if (D.cameraPreview.visible = !0, D.cameraPreview.expanded = !!d.outputPreviewExpanded, !f || !U) {
      D.cameraPreview.ready = !1, D.cameraPreview.settled = !1, D.cameraPreview.width = 220, D.cameraPreview.height = 132, D.cameraPreview.label = f ? "Preview unavailable" : "Add Frame to preview", _t = null;
      return;
    }
    const g = zp(f, !!d.outputPreviewExpanded);
    D.cameraPreview.width = g.width, D.cameraPreview.height = g.height;
    const v = window.devicePixelRatio || 1, k = Math.max(1, g.width * v), P = Math.max(1, g.height * v), V = Math.min(1, fe.width / k, fe.height / P), j = { width: Math.max(1, Math.floor(k * V)), height: Math.max(1, Math.floor(P * V)) }, ve = [...u].some((we) => we !== Pt.VIEW && we !== Pt.OVERLAY), ee = !_t || _t.width !== j.width || _t.height !== j.height || ve;
    if (a && ee) {
      const we = Lp({ x: 0, y: fe.height - j.height, w: j.width, h: j.height }, f, "camera_preview");
      _t = we ? j : null, we && wv(we);
    }
    if (!_t) {
      D.cameraPreview.ready = !1, D.cameraPreview.label = Zf() ? "Loading preview" : "Connect ERP image", D.cameraPreview.settled = !1;
      return;
    }
    const ce = _v(g);
    D.cameraPreview.ready = !0, D.cameraPreview.label = ce ? "" : "Loading preview", D.cameraPreview.settled = ce && de.pendingStableLayoutFrames <= 0 && de.hasPresentedFrame;
  }
  let jp = 0, Hp = !1;
  function wv(a) {
    const u = ++jp;
    createImageBitmap(a.canvas, a.x, a.y, a.width, a.height).then((f) => {
      var g;
      if (u !== jp || !de.running) {
        f.close();
        return;
      }
      (g = U.getContext("bitmaprenderer")) == null || g.transferFromImageBitmap(f);
    }).catch((f) => {
      Hp || (Hp = !0, console.error("[PanoramaStickers] camera preview frame failed", f));
    });
  }
  function xv(a) {
    const u = at(), f = Gs(u);
    if (!u || !f)
      return x.clearRect(0, 0, F.width, F.height), a && $e.clear(657930), !1;
    const g = { x: f.x, y: f.y, w: f.w, h: f.h }, { rect: v, shot: k } = rg(u, f, { width: F.width, height: F.height }), P = kv(g);
    if (x.clearRect(0, 0, F.width, F.height), a) {
      $e.clear(657930);
      const V = Tc(v), j = !!Lp(V, k, void 0, 657930);
      j || $e.clear(1118481, V), de.backgroundDirty = !j;
    }
    return x.save(), x.fillStyle = "rgba(0, 0, 0, 0.58)", x.beginPath(), x.rect(0, 0, F.width, F.height), x.roundRect(g.x, g.y, g.w, g.h, P), x.fill("evenodd"), x.restore(), x.save(), x.strokeStyle = zg, x.globalAlpha = 0.62, x.lineWidth = 2, x.beginPath(), x.roundRect(g.x + 1, g.y + 1, g.w - 2, g.h - 2, Math.max(0, P - 1)), x.stroke(), x.restore(), !0;
  }
  function kv(a) {
    const u = Math.max(1e-6, Number(de.frameCanvasScale || 1));
    return Math.min(An * u, Number((a == null ? void 0 : a.w) || 0) * 0.5, Number((a == null ? void 0 : a.h) || 0) * 0.5);
  }
  function ti() {
    var u;
    const a = d.mode === "frame" ? at() : null;
    D.frameRollKnob.visible = !!a && !r && a.locked !== !0, D.frameRollKnob.rollDeg = Number((a == null ? void 0 : a.roll_deg) ?? (a == null ? void 0 : a.rot_deg) ?? 0), D.frameRollKnob.displayValue = $o(D.frameRollKnob.rollDeg), D.frameRollKnob.dragging = ((u = d.interaction) == null ? void 0 : u.kind) === "roll_frame", D.frameRollKnob.armed = !!a && d.altModifier === !0;
  }
  function Mv() {
    var j, ve;
    if (((j = d.interaction) == null ? void 0 : j.kind) !== "paint_lasso_fill") return;
    const a = d.interaction.stroke, u = (ve = a == null ? void 0 : a.geometry) == null ? void 0 : ve.points;
    let f;
    if (d.mode === "frame") {
      const ee = at(), ce = wr(ee);
      f = O1(u, ee, ce);
    } else
      f = E1(u);
    if (!Array.isArray(f) || f.length < 3) return;
    const g = String((a == null ? void 0 : a.layerKind) || "") === "mask", v = (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25 }, k = Math.round(Number(v.r || 0) * 255), P = Math.round(Number(v.g || 0) * 255), V = Math.round(Number(v.b || 0) * 255);
    x.save(), x.beginPath(), x.moveTo(Number(f[0].x || 0), Number(f[0].y || 0));
    for (let ee = 1; ee < f.length; ee++) x.lineTo(Number(f[ee].x || 0), Number(f[ee].y || 0));
    x.closePath(), g ? (x.lineWidth = 2, x.setLineDash([6, 6]), x.lineDashOffset = 0, x.strokeStyle = "rgba(0,0,0,0.96)", x.stroke(), x.lineDashOffset = -6, x.strokeStyle = "rgba(255,255,255,0.96)", x.stroke(), x.setLineDash([]), x.lineDashOffset = 0) : (x.lineWidth = 1.5, x.setLineDash([6, 4]), x.strokeStyle = `rgba(${k},${P},${V},1)`, x.stroke(), x.setLineDash([])), x.restore();
  }
  function Nv() {
    const a = d.frameRollOverlayVisual, u = Me(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(a != null && a.shot) || u <= 1e-4) return;
    const f = wr(a.shot);
    if (!f) return;
    const g = { x: f.x + f.w * 0.5, y: f.y + f.h * 0.5 }, v = Number(a.shot.roll_deg ?? a.shot.rot_deg ?? 0) * Kr, k = Math.hypot(f.w, f.h) * 0.55, P = Math.cos(v) * k, V = Math.sin(v) * k;
    x.save(), x.globalAlpha *= u, x.beginPath(), x.rect(f.x, f.y, f.w, f.h), x.clip(), x.translate(g.x, g.y), x.rotate(v);
    const j = Math.max(12, Math.min(f.w, f.h) / 6);
    x.beginPath();
    for (let ve = -k; ve <= k; ve += j)
      x.moveTo(ve, -k), x.lineTo(ve, k);
    for (let ve = -k; ve <= k; ve += j)
      x.moveTo(-k, ve), x.lineTo(k, ve);
    x.lineWidth = 1, x.strokeStyle = "rgba(255, 255, 255, 0.22)", x.stroke(), x.setTransform(1, 0, 0, 1, 0, 0), x.beginPath(), x.moveTo(g.x - P, g.y - V), x.lineTo(g.x + P, g.y + V), x.lineWidth = 1.5, x.setLineDash([8, 6]), x.strokeStyle = "rgba(255, 255, 255, 0.92)", x.shadowColor = "rgba(0, 0, 0, 0.8)", x.shadowBlur = 3, x.stroke(), x.setLineDash([]), x.restore();
  }
  function Pv() {
    return !R || !at() || G && sr() || I && !lr() ? 0 : iE;
  }
  function Av() {
    const a = Me(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (a <= 1e-4 || !R || d.mode !== "pano") return;
    const u = at(), f = u ? cn(u) : null, g = Array.isArray(f == null ? void 0 : f.corners) && f.corners.length >= 4 ? f.corners.map((P) => ({ x: Number(P.x || 0), y: Number(P.y || 0) })) : null;
    f != null && f.visible && g && (d.cutoutPanoDimCorners = g), u && (f != null && f.visible) && g && (d.cutoutPanoFrameVisual = {
      item: u,
      geom: f,
      selected: lp(u),
      locked: Dn(u)
    });
    const v = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, k = f != null && f.visible ? g : v ? d.cutoutPanoDimCorners || [] : [];
    if (x.save(), x.fillStyle = `rgba(0, 0, 0, ${a})`, x.beginPath(), x.rect(0, 0, F.width, F.height), k.length >= 4) {
      x.moveTo(k[0].x, k[0].y);
      for (let P = 1; P < 4; P += 1) x.lineTo(k[P].x, k[P].y);
      x.closePath();
    }
    x.fill("evenodd"), x.restore();
  }
  function Gp(a = /* @__PURE__ */ new Set()) {
    rt = null;
    const u = de.backgroundDirty;
    R && (Is(), Sv(u, a)), d.mode === "frame" ? (de.frameSafeRect = u_(), xv(u)) : d.mode === "unwrap" ? hv(u) : mv(u), Av(), vv(), ti(), Mv(), Nv(), D.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && ct(), de.hasPresentedFrame || (de.hasPresentedFrame = !0, fe.style.opacity = "1"), R && D.cameraPreview && (D.cameraPreview.settled = de.pendingStableLayoutFrames <= 0 && de.hasPresentedFrame && d.mode !== "frame");
    const f = w1();
    D.stageStatus = f.status, D.stageStatusDetail = f.detail, f.status === kr ? (Ae == null || Ae.removeAttribute("data-stage-ready"), Ae == null || Ae.setAttribute("data-stage-loading-kind", f.detail)) : (Ae == null || Ae.setAttribute("data-stage-ready", ""), Ae == null || Ae.removeAttribute("data-stage-loading-kind"));
  }
  function Cv(a = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const u = String((a == null ? void 0 : a.kind) || "");
    return u === "move" || u === "scale" || u === "scale_x" || u === "scale_y" || u === "rotate" ? !0 : u === "move_multi" ? Array.isArray(a == null ? void 0 : a.stickerSnapshots) && a.stickerSnapshots.length > 0 : !1;
  }
  function Wc() {
    return !!d.interaction || !!Z.drag;
  }
  function Wp() {
    de.nodePreviewPending = !1, e.__panoLiveStateOverride = b, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = S1();
  }
  function He(a = {}) {
    var j, ve, ee, ce, we, Ye, Ne, tt, nt;
    const u = a.reason ?? Pt.STATE, f = !!a.localOnly, g = a.externalSync === !0, v = String(a.cause || ""), k = String(((j = d.interaction) == null ? void 0 : j.kind) || "");
    (!f || k === "view" || k === "pan_frame" || Cv() || !!d.viewTransition || v === "mode" || v === "frame_view" || v === "cutout_frame") && (de.backgroundDirty = !0), f && P1() && (d.livePaintInteractionRevision += 1, de.backgroundDirty = !0), (!f || v === "selection" || v === "mode" || v === "cutout_frame") && (zc(), Qr()), Wc() ? de.nodePreviewPending = !0 : Wp(), g && ((ee = (ve = e.__panoDomPreview) == null ? void 0 : ve.requestDraw) == null || ee.call(ve), (ce = e.setDirtyCanvas) == null || ce.call(e, !0, !1)), g && !f && ((Ye = (we = e.graph) == null ? void 0 : we.setDirtyCanvas) == null || Ye.call(we, !0, !0), (nt = (tt = (Ne = Qn) == null ? void 0 : Ne.canvas) == null ? void 0 : tt.setDirty) == null || nt.call(tt, !0, !0)), Ee.requestDraw(u);
  }
  function $s() {
    const a = F.getBoundingClientRect(), u = Math.max(2, Math.round(a.width)), f = Math.max(2, Math.round(a.height)), g = window.devicePixelRatio || 1, v = [F.width, F.height, fe.width, fe.height].join("x");
    (F.width !== u || F.height !== f) && (F.width = u, F.height = f);
    const k = fN(a.width || u, a.height || f, g, window.innerWidth || a.width, window.innerHeight || a.height);
    return $e.resize(k.width, k.height), [F.width, F.height, fe.width, fe.height].join("x") === v ? !1 : (de.backgroundDirty = !0, de.dirty = !0, R && xa(() => {
      de.pendingStableLayoutFrames = Math.max(Number(de.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function xa(a) {
    a(), Ee.wake();
  }
  function Iv() {
    return !!d.viewTransition || !!on.state.inertia.active || de.pendingStableLayoutFrames > 0 || Math.abs(Number(d.frameRollOverlayAlpha || 0) - Number(d.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(d.cutoutPanoDimAlpha || 0) - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 || d.outputPreviewAnim !== d.outputPreviewAnimTo || Wc();
  }
  function Ov(a = performance.now(), u = /* @__PURE__ */ new Set()) {
    var P;
    de.nodePreviewPending && !Wc() && Wp(), u.forEach((V) => de.reasons.add(V)), u.size && (de.dirty = !0), [...u].some((V) => V !== Pt.OVERLAY) && (de.backgroundDirty = !0), cr(), de.lastTickTs > 0 ? Math.max(1e-3, (a - de.lastTickTs) / 1e3) : 1 / 60, de.lastTickTs = a;
    const f = d.mode === "frame" && ((P = d.interaction) == null ? void 0 : P.kind) === "roll_frame" ? d.interaction : null;
    f != null && f.shot && (d.frameRollOverlayVisual = { shot: f.shot });
    const g = f ? 1 : 0;
    if (Math.abs(g - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = g, d.frameRollOverlayStartTs = a), Math.abs(Number(d.frameRollOverlayAlpha || 0) - g) > 1e-6) {
      const V = Me(
        (a - Number(d.frameRollOverlayStartTs || a)) / oE,
        0,
        1
      );
      d.frameRollOverlayAlpha = fr(
        Number(d.frameRollOverlayFrom || 0),
        g,
        Hu(V)
      ), V >= 1 && (d.frameRollOverlayAlpha = g, g === 0 && (d.frameRollOverlayVisual = null)), de.dirty = !0;
    }
    const v = Pv();
    if (Math.abs(v - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = v, d.cutoutPanoDimStartTs = a), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - v) > 1e-6) {
      const V = Me(
        (a - Number(d.cutoutPanoDimStartTs || a)) / Hg,
        0,
        1
      );
      d.cutoutPanoDimAlpha = fr(
        Number(d.cutoutPanoDimFrom || 0),
        v,
        Hu(V)
      ), V >= 1 && (d.cutoutPanoDimAlpha = v), V >= 1 && v === 0 && (d.cutoutPanoDimCorners = null), de.dirty = !0;
    }
    const k = R && at() ? 1 : 0;
    if (Math.abs(k - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = k, d.cutoutPanoFrameStartTs = a), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - k) > 1e-6) {
      const V = Me(
        (a - Number(d.cutoutPanoFrameStartTs || a)) / Hg,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = fr(
        Number(d.cutoutPanoFrameFrom || 0),
        k,
        Hu(V)
      ), V >= 1 && (d.cutoutPanoFrameAlpha = k, k === 0 && (d.cutoutPanoFrameVisual = null)), de.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const V = Math.max(1, Number(d.outputPreviewAnimDurationMs || 180)), j = Me((a - Number(d.outputPreviewAnimStartTs || 0)) / V, 0, 1), ee = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? cE(j) : dE(j);
      d.outputPreviewAnim = fr(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, ee), de.dirty = !0, j >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if (d.viewTransition) {
      const { view: V, done: j } = MA(d.viewTransition, a);
      if (d.viewPosition = V.position, d.viewYaw = V.yaw_deg, d.viewPitch = V.pitch_deg, d.viewFov = V.hFOV_deg, d.viewDistance = V.distance, j) {
        const { end: ve } = d.viewTransition;
        d.viewTransition = null, ve && Sp(ve), Or();
      }
      de.backgroundDirty = !0, de.dirty = !0;
    }
    if (d.viewInertia.vx = Number(on.state.inertia.vx || 0), d.viewInertia.vy = Number(on.state.inertia.vy || 0), d.viewInertia.active = !!on.state.inertia.active, on.stepInertia(a) && (d.viewInertia.vx = Number(on.state.inertia.vx || 0), d.viewInertia.vy = Number(on.state.inertia.vy || 0), d.viewInertia.active = !!on.state.inertia.active, de.backgroundDirty = !0, de.dirty = !0), de.pendingStableLayoutFrames > 0 && (de.pendingStableLayoutFrames -= 1, de.dirty = !0), de.dirty) {
      if (de.pendingStableLayoutFrames > 0)
        return;
      de.dirty = !1;
      const V = de.reasons;
      de.reasons = /* @__PURE__ */ new Set(), Gp(V);
    }
  }
  function Kp(a) {
    try {
      a();
    } catch (u) {
      const f = String((u == null ? void 0 : u.stack) || (u == null ? void 0 : u.message) || u || "unknown editor frame error");
      de.tickErrorSignature !== f && (de.tickErrorSignature = f, console.error("[PanoramaStickers] editor frame failed", u)), D.stageStatus = pr, D.stageStatusDetail = "frame", Ae == null || Ae.setAttribute("data-stage-ready", ""), Ae == null || Ae.removeAttribute("data-stage-loading-kind");
    }
  }
  function Ev(a = performance.now(), u = /* @__PURE__ */ new Set()) {
    if (!de.running) return;
    const f = Dx();
    Kp(() => Ov(a, u)), Lx(f);
  }
  function Bp() {
    !de.running || !$s() || Kp(() => {
      de.dirty = !1, Gp(/* @__PURE__ */ new Set([Pt.RESIZE]));
    });
  }
  const Up = new ResizeObserver(Bp);
  Up.observe(F);
  let Io = null;
  function Yp() {
    Io == null || Io.removeEventListener("change", Kc), Io = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), Io.addEventListener("change", Kc);
  }
  function Kc() {
    Yp(), Bp();
  }
  Yp();
  function Tv() {
    pe(), de.running = !1, Ee.stop(), Up.disconnect(), Io.removeEventListener("change", Kc);
  }
  function Rn() {
    K1();
    const a = AA({
      editor: d,
      swatches: Il,
      paintColorPopOpen: re ? !re.hidden : !1,
      colorToCss: Vr,
      colorsApproximatelyEqual: Ol,
      rgb01ToHsv: Bu,
      hsv01ToRgb: Ku,
      getBrushPresetIdForTool: Wi,
      isActiveLassoTool: U1
    });
    if (Object.assign(D.paintDock, a), j1(), !a.visible) {
      re && (re.hidden = !0);
      return;
    }
    Re && (clearTimeout(Re), Re = 0), Q && (!a.colorEnabled && re && !re.hidden && (Re = window.setTimeout(() => {
      re.hidden = !0, D.paintDock.colorPopOpen = !1, Re = 0;
    }, 170)), re && (re.style.setProperty("--picker-hue-color", a.pickerHueColor), re.style.setProperty("--picker-sat", a.pickerSat), re.style.setProperty("--picker-val", a.pickerVal), re.style.setProperty("--picker-hue", a.pickerHue)), Fe && (Fe.style.left = a.pickerSvLeft, Fe.style.top = a.pickerSvTop), Ge && (Ge.style.left = a.pickerHueLeft));
  }
  function Oo() {
    const a = bn(R && d.mode === "frame" ? at() : In());
    a && (d.panelLastValues = {
      yaw_deg: Number(a.yaw_deg || 0),
      pitch_deg: Number(a.pitch_deg || 0),
      hFOV_deg: Number(a.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(a.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(a.rot_deg || 0),
      roll_deg: Number(a.roll_deg || 0),
      aspect_id: ui(a)
    }, it());
  }
  function it() {
    cr(), Fr(), Xp();
  }
  function Fv() {
    const a = R && d.mode === "frame" ? at() : null;
    return [...bi(), Po(), a].some((u) => Zr(u) ? Zl(u) : Yn(u) && _i() && Zl(b.camera));
  }
  function Xp() {
    if (i) return;
    b.ui_settings = b.ui_settings || {};
    const a = PA(b.ui_settings);
    if (o) {
      D.sidePanel = CA({
        coverage: b.coverage,
        uiSettings: a,
        normalizeCoverageValue: Gn
      });
      return;
    }
    const u = In(), f = R && d.mode === "frame" ? at() : null, g = f || u, v = f ? [f] : bi(), k = f ? "shot" : Ps();
    if (v.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), g && k !== "stroke") {
      const nt = bn(g);
      d.panelLastValues = {
        yaw_deg: Number(nt.yaw_deg || 0),
        pitch_deg: Number(nt.pitch_deg || 0),
        hFOV_deg: Number(nt.hFOV_deg || (k === "image" ? 30 : 90)),
        vFOV_deg: Number(nt.vFOV_deg || (k === "image" ? 30 : 60)),
        rot_deg: Number(nt.rot_deg || 0),
        roll_deg: Number(nt.roll_deg || 0),
        aspect_id: ui(nt)
      }, Zr(g) && (d.panelLastValues.opacity = go(g, d.frame).opacity * 100);
    }
    const P = d.panelLastValues || (t === "stickers" || k === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), V = k === "stroke" ? null : g, j = Po(), ve = G && (k === "shot" || k === "frame") && Sa(), ee = j ? AM(j, d.frame) : ve ? { ...V, ...MM(b.camera, d.frame), vFOV_deg: V.vFOV_deg } : Zr(V) ? d.panelLastValues : V || P, ce = j ? Ls(j) : !!V && !Dn(V);
    d.panelWasEnabled = ce, zc();
    let we = null;
    if (f) {
      const nt = Dc({ item: f, kind: "shot", label: "Frame" });
      we = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: nt.label,
        currentIcon: nt.icon || null,
        items: [{
          id: String(f.id || ""),
          label: nt.label,
          icon: nt.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const nt = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const vt = at();
        vt && nt.push({ id: vt.id, label: "Camera", icon: _1("frame"), item: vt, kind: "frame" }), Li().forEach((Tt, vn) => {
          var Be, Ze;
          if (!Tt || Zr(Tt) && !Tt.visible) return;
          const Ui = w ? md(Tt) : Fn(Tt) ? String(Tt.id || Uf) : String(((Ze = (Be = b.assets) == null ? void 0 : Be[Tt.asset_id]) == null ? void 0 : Ze.name) || Tt.asset_id || Tt.id), Yi = `${vn + 1}. ${Ui}${Fn(Tt) && Cs(Tt) ? " (hidden)" : ""}`, qe = Dc({ item: Tt, label: Yi, kind: "image" });
          nt.push({ id: Tt.id, label: qe.label, icon: qe.icon, item: Tt, kind: "image" });
        });
      } else
        Qf().forEach((vt) => {
          if (!(vt != null && vt.item)) return;
          const Tt = Dc(vt);
          nt.push({ id: vt.item.id, label: Tt.label, icon: Tt.icon, item: vt.item, kind: vt.kind });
        });
      const St = (V == null ? void 0 : V.id) || "", dt = j ? { label: md(j), icon: Ue.globe } : nt.find((vt) => vt.id === St) || nt[0];
      we = {
        label: "Selection",
        open: !1,
        disabled: nt.length <= 1,
        currentLabel: dt.label,
        currentIcon: dt.icon || null,
        items: nt.map((vt) => ({
          id: vt.id,
          label: vt.label,
          icon: vt.icon || null,
          active: vt.id === St
        }))
      };
    }
    const Ye = [], Ne = (nt, St, dt, vt, Tt) => {
      const vn = Me(Number(ee[nt] || 0), dt, vt);
      Ye.push({
        key: nt,
        label: St,
        min: dt,
        max: vt,
        step: Tt,
        value: vn,
        displayValue: $o(vn),
        fillPct: Me((vn - dt) / Math.max(1e-6, vt - dt) * 100, 0, 100),
        enabled: ce && !r
      });
    }, tt = [];
    if (j) {
      for (const [nt, St] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const dt = $u(ee[nt]);
        Ne(nt, St, -dt, dt, 0.01);
      }
      Ne("yaw_deg", "Yaw", -180, 180, 0.1), Ne("pitch_deg", "Pitch", -90, 90, 0.1), Ne("roll_deg", "Roll", -180, 180, 0.1), Ne("scale", "Scale", $g, $u(ee.scale), 0.01), Ne("opacity", "Opacity", 0, 100, 1);
    } else if (v.length > 1)
      tt.push(`Selected objects: ${v.length}`), tt.push("Multi-selection supports z-order and delete.");
    else {
      const nt = k === "shot" || k === "frame";
      if (ve)
        for (const [St, dt] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const vt = $u(ee[St]);
          Ne(St, dt, -vt, vt, 0.01);
        }
      Ne("yaw_deg", "Yaw", -180, 180, 0.1), Ne("pitch_deg", "Pitch", -90, 90, 0.1), Ne(k === "image" || t === "stickers" && !nt ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Ne("hFOV_deg", "H FOV", 1, 179, 0.1), Ne("vFOV_deg", "V FOV", 1, 179, 0.1), nt && Ye.forEach((St) => {
        St.enabled = St.enabled && FA(St.key, { erp: Ri() });
      }), w && !nt && Ne("opacity", "Opacity", 0, 100, 1);
    }
    D.sidePanel = LA({
      coverage: b.coverage,
      readOnly: r,
      selectionPicker: we,
      enabled: ce,
      selectedKind: j ? "world" : k,
      selectedItems: v,
      params: Ye,
      notes: tt,
      uiSettings: a,
      normalizeCoverageValue: Gn
    });
  }
  function Fr() {
    if (!_ || r) return;
    const a = zs(), u = Z.selection, f = u && Dr(u.owner);
    if (u) {
      const g = f ? ka(u) : [];
      u.frames = u.frames.filter((v) => g.some((k) => f[k].keyframes.some((P) => P.frame === v))), u.frames.length || (Z.selection = null);
    }
    D.timeline = HA(b, {
      span: a,
      selection: Z.selection,
      selectedId: d.worldSelectedId || d.selectedId,
      expanded: Z.expanded ?? qp(),
      openRows: Z.openRows,
      audio: Lv() && D.videoTransport.hasAudio ? { muted: Pe.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Uu(e) !== null || vN(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: _i(),
      cameraHideable: I,
      stickers: !N,
      scene: w && !!wd(e).scene,
      sceneLocked: !!$
    }), D.easing = Z.selection ? GA(f, ka(Z.selection), Z.selection.frames, Ma(Z.selection.owner)) : null;
  }
  function qp() {
    return iM(b, { cameraOnly: N, camera: I });
  }
  function zs(a = null) {
    if ($ != null && $.frames) return $.frames;
    const u = b.timeline.fps, f = b.stickers.find(Fn), g = f ? g1() : null, v = Math.max(
      D.videoTransport.ready ? Math.round(Number(D.videoTransport.duration || 0) * u) : 0,
      g ? cb(f.clip, u, g.meta) : 0
    );
    return Ey(b, { minimum: Math.round(u * 5), frames: v, openClip: a, camera: N && !$ || I });
  }
  function Dr(a) {
    return a === "camera" ? _i() ? b.camera : null : a === "scene" ? w ? b.scene : null : b.stickers.find((u) => u.id === a) || null;
  }
  function ka(a) {
    return a.lane ? [a.lane] : ha(Dr(a.owner));
  }
  function Ma(a) {
    if (a === "camera") return 0;
    const { clip: u } = Dr(a);
    return u.start - u.in;
  }
  function Jp(a) {
    return `${Qo(a, d.frame)}:${a.start - a.in}`;
  }
  function js(a) {
    const u = Dr(a);
    return !!u && u.locked !== !0;
  }
  function Dv(a) {
    const u = Math.max(0, Math.round(a));
    if (u === d.frame) return;
    cr(), d.frame = u, ae.frame.value = u, cr();
    const f = [d.selectedId, d.worldSelectedId];
    Lc(), hn(), f[0] !== d.selectedId || f[1] !== d.worldSelectedId ? it() : Fv() && Xp(), ct(), He({ reason: Pt.PLAYHEAD });
  }
  function Lv() {
    return Pe instanceof HTMLVideoElement && !!Pe.getAttribute("src");
  }
  function Rv(a) {
    No(), ar.seek(a);
  }
  function gn() {
    _ && ar.stop();
  }
  function Bc() {
    No(), ar.toggle();
  }
  function Hs() {
    cr(), hn(), it(), ct(), He();
  }
  function Si() {
    yt(), kt(), Hs();
  }
  function Vv() {
    const { selection: a } = Z;
    js(a.owner) && (gn(), qk(Dr(a.owner), ka(a), a.frames, d.frame - Ma(a.owner)), Z.selection = null, Si());
  }
  function Zp(a) {
    const u = pa(a);
    if (u === null || u === b.timeline.fps) return;
    gn();
    const f = Math.round(d.frame * u / b.timeline.fps);
    vM(b, u), Z.selection = null, ar.seek(f), Si();
  }
  function $v() {
    const a = Uu(e);
    a !== null && a !== b.timeline.fps && Zp(a);
  }
  function zv(a) {
    if (!(r || !_)) {
      if (a.type === "seek") {
        if (a.phase === "move") {
          Z.scrubFrame = a.frame, Ke.request("seek");
          return;
        }
        Ke.cancel(), a.phase === "start" && No(), ar.seek(a.frame);
        return;
      }
      if (a.type === "play") {
        Bc();
        return;
      }
      if (a.type === "mute") {
        vp(), Fr();
        return;
      }
      if (a.type === "toggle-expanded") {
        Z.expanded = !(Z.expanded ?? qp()), Z.selection = null, Fr();
        return;
      }
      if (a.type === "toggle-row") {
        Z.openRows.has(a.id) ? Z.openRows.delete(a.id) : Z.openRows.add(a.id), Fr();
        return;
      }
      if (a.type === "toggle-visible") {
        if (a.id === Zb) b.painting_visible = !b.painting_visible;
        else {
          const u = Dr(a.id);
          if (!u || a.id === "camera" && !I) return;
          u.visible = !u.visible;
        }
        Lc(), Si();
        return;
      }
      if (a.type === "select-row") {
        const u = b.stickers.find((f) => f.id === a.id);
        if (u && !u.visible || a.id === "camera" && !ei()) return;
        u && !Qo(u.clip, d.frame) && Rv(u.clip.start), (u == null ? void 0 : u.placement) === "world" ? Vc(u.id) : a.id === "camera" ? Xn(at()) : Xn(Li().find((f) => f.id === a.id) || null), Or(), Z.selection = null, it(), ct(), He();
        return;
      }
      if (a.type === "select-keys") {
        const u = Ma(a.owner), f = a.frames.map((k) => k - u), g = Z.selection, v = (g == null ? void 0 : g.owner) === a.owner && g.lane === a.lane;
        if (a.additive && v) {
          const k = new Set(g.frames);
          for (const P of f)
            k.has(P) ? k.delete(P) : k.add(P);
          g.frames = [...k].sort((P, V) => P - V);
        } else
          Z.selection = f.length ? { owner: a.owner, lane: a.lane, frames: f } : null;
        Fr();
        return;
      }
      if (a.type === "move-keys") {
        const u = Z.selection;
        if (!u || !js(u.owner)) return;
        const f = Dr(u.owner), g = ka(u);
        if (a.phase === "start") {
          gn(), Z.drag = { keyframes: g.map((P) => structuredClone(f[P].keyframes)), frames: u.frames };
          return;
        }
        const { drag: v } = Z;
        if (!(v != null && v.keyframes)) return;
        g.forEach((P, V) => {
          f[P].keyframes = structuredClone(v.keyframes[V]);
        });
        const k = Jk(f, g, v.frames, a.delta, -Ma(u.owner));
        if (u.frames = v.frames.map((P) => P + k), a.phase !== "end") {
          Ke.request("timeline"), Ke.request("view");
          return;
        }
        Ke.cancel(), Z.drag = null, k ? Si() : Hs();
        return;
      }
      if (a.type === "clip") {
        const u = a.id === "scene" ? Dr("scene") : b.stickers.find((k) => k.id === a.id);
        if (!u || u.locked) return;
        if (a.phase === "start") {
          gn(), Z.drag = { clip: { ...u.clip }, span: zs(u.clip) };
          return;
        }
        const { drag: f } = Z;
        if (!(f != null && f.clip)) return;
        const g = f.clip, v = Jp(u.clip);
        if (u.clip = { ...g }, a.delta && a.mode === "move" ? eM(u.clip, a.delta) : a.delta && a.mode === "start" ? tM(u.clip, g.start + a.delta) : a.delta && nM(u.clip, (g.duration === null ? f.span : g.start + g.duration) + a.delta, f.span), a.phase !== "end") {
          Ke.request("timeline"), Jp(u.clip) !== v && Ke.request("view");
          return;
        }
        Ke.cancel(), Z.drag = null, Lc(), JSON.stringify(u.clip) !== JSON.stringify(g) ? Si() : Hs();
        return;
      }
      if (a.type === "key-row") {
        if (a.owner === "scene" || !js(a.owner)) return;
        gn(), Uk(Dr(a.owner), d.frame - Ma(a.owner)), Si();
        return;
      }
      if (a.type === "fps") {
        const u = aM(a.fps);
        if (u === null || u === b.timeline.fps || D.timeline.fpsLocked) {
          Fr();
          return;
        }
        Zp(u);
        return;
      }
      if (a.type === "length") {
        const u = sM(a.length);
        if (u === void 0 || u === b.timeline.length) {
          Fr();
          return;
        }
        gn(), b.timeline.length = u, Si();
        return;
      }
      if (a.type === "easing") {
        const u = Z.selection;
        if (!u || !js(u.owner)) return;
        gn(), Qk(Dr(u.owner), ka(u), u.frames, a.easing), a.commit ? Si() : Hs();
      }
    }
  }
  async function Qp(a) {
    if (r || N || t !== "stickers" && t !== "cutout" || !Mr(a)) return;
    if (w) {
      gn(), await eh(a);
      return;
    }
    const u = no("asset"), f = Ga(e, `add:${u}`, async () => {
      try {
        const { image: g } = await Wa(a);
        J.set(u, g);
        const v = no("st");
        b.stickers.push({
          id: v,
          asset_id: u,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ji(30, Number(g.naturalWidth || g.width || 1), Number(g.naturalHeight || g.height || 1)),
          rot_deg: 0,
          z_index: Ns()
        }), Xn(b.stickers[b.stickers.length - 1]), Na(), it(), ct(), He();
        const k = await oo(a, {
          fetchApi: (j, ve) => tn.fetchApi(j, ve)
        });
        if (!(Array.isArray(b.stickers) ? b.stickers : []).filter((j) => String((j == null ? void 0 : j.asset_id) || "") === u).length) return;
        b.assets[u] = k, Co(), yt(), kt(), it(), ct(), He();
      } catch (g) {
        delete b.assets[u], J.delete(u);
        const v = Array.isArray(b.stickers) ? b.stickers : [], k = v.filter((P) => String((P == null ? void 0 : P.asset_id) || "") === u);
        throw k.length && (b.stickers = v.filter((P) => String((P == null ? void 0 : P.asset_id) || "") !== u), k.some((P) => String((P == null ? void 0 : P.id) || "") === String(d.selectedId || "")) && Xn(null), it(), ct(), He(), kt()), g;
      }
    });
    try {
      await f;
    } catch {
    }
  }
  function jv() {
    var a;
    r || t !== "stickers" && t !== "cutout" || (a = be == null ? void 0 : be.openImagePicker) == null || a.call(be, "add");
  }
  function Hv() {
    var a;
    r || !w || (a = be == null ? void 0 : be.openImagePicker) == null || a.call(be, "add-world");
  }
  async function Gv(a) {
    r || !w || !Mr(a) || (gn(), await eh(a, "world"));
  }
  function Wv() {
    const a = { x: F.width / 2, y: F.height / 2 }, u = Hi() ? $e.pick(Eo(), a.x, a.y, F.width, F.height) : null;
    return tN(mn(), u, Er());
  }
  async function eh(a, u = "sky") {
    const f = no("st"), g = Ga(e, `add:${f}`, async () => {
      const { image: v } = await Wa(a), k = {
        yaw_deg: d.viewYaw,
        pitch_deg: d.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ji(30, Number(v.naturalWidth || v.width || 1), Number(v.naturalHeight || v.height || 1)),
        rot_deg: 0
      }, P = { kind: "file", filename: "" }, V = u === "world" ? EM(f, P, Wv()) : Nf(f, P, k, Ns());
      J.set(Fs(V), v), b.stickers.push(V), u === "world" ? Vc(f) : Xn(V), Na(), it(), ct(), He();
      try {
        const j = await oo(a, {
          fetchApi: (ee, ce) => tn.fetchApi(ee, ce)
        }), ve = b.stickers.find((ee) => ee.id === f);
        if (!ve) return;
        ve.source = Sl(j), J.set(Fs(ve), v), yt(), kt();
      } catch (j) {
        throw b.stickers = b.stickers.filter((ve) => ve.id !== f), d.selectedId === f && Xn(null), d.worldSelectedId === f && Yf(), yt(), kt(), j;
      } finally {
        it(), ct(), He();
      }
    });
    try {
      await g;
    } catch {
    }
  }
  async function Kv(a, u) {
    const f = Ga(e, `replace:${u}:${no("asset")}`, async () => {
      const { image: g } = await Wa(a), v = await oo(a, {
        fetchApi: (P, V) => tn.fetchApi(P, V)
      }), k = b.stickers.find((P) => P.id === u);
      if (k) {
        k.source = Sl(v), k.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const P of [k.size.value, ...k.size.keyframes.map((V) => V.value)])
          P.vFOV_deg = ji(P.hFOV_deg, Number(g.naturalWidth || g.width || 1), Number(g.naturalHeight || g.height || 1));
        J.set(Fs(k), g), hn(), yt(), kt(), it(), ct(), He();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function Bv(a) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const u = In();
    if (!u || !ln(u) || Fn(u) || !Mr(a)) return;
    if (w) {
      await Kv(a, u.id);
      return;
    }
    const f = String(u.id || ""), g = no("asset"), v = Ga(e, `replace:${f}:${g}`, async () => {
      var ee;
      const k = (Array.isArray(b.stickers) ? b.stickers : []).find((ce) => String((ce == null ? void 0 : ce.id) || "") === f) || null;
      if (!k || !ln(k) || Fn(k)) return;
      const P = String(k.asset_id || ""), V = P ? _n(((ee = b.assets) == null ? void 0 : ee[P]) || null) : null, j = Number(k.vFOV_deg || 0), ve = k.crop && typeof k.crop == "object" ? { ...k.crop } : null;
      try {
        const { image: ce } = await Wa(a);
        J.set(g, ce), k.asset_id = g, k.vFOV_deg = ji(
          Number(k.hFOV_deg || 30),
          Number(ce.naturalWidth || ce.width || 1),
          Number(ce.naturalHeight || ce.height || 1)
        ), k.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, hn(), it(), ct(), He();
        const we = await oo(a, {
          fetchApi: (Ne, tt) => tn.fetchApi(Ne, tt)
        }), Ye = (Array.isArray(b.stickers) ? b.stickers : []).find((Ne) => String((Ne == null ? void 0 : Ne.id) || "") === f) || null;
        if (!Ye || String(Ye.asset_id || "") !== g) return;
        b.assets[g] = we, Co(), yt(), kt(), it(), ct(), He();
      } catch (ce) {
        delete b.assets[g], J.delete(g);
        const we = (Array.isArray(b.stickers) ? b.stickers : []).find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === f) || null;
        throw we && String(we.asset_id || "") === g && (P && V && (b.assets[P] = V), we.asset_id = P, we.vFOV_deg = j, we.crop = ve ? { ...ve } : null), hn(), kt(), it(), ct(), He(), ce;
      }
    });
    try {
      await v;
    } catch {
    }
  }
  function Uv() {
    var u;
    if (r) return;
    const a = In();
    !a || !ln(a) || Fn(a) || (u = be == null ? void 0 : be.openImagePicker) == null || u.call(be, "replace");
  }
  async function Yv() {
    if (r || t !== "stickers") return;
    if (w) {
      await Xv();
      return;
    }
    const a = b.assets && typeof b.assets == "object" ? b.assets : {}, u = Object.entries(a).filter(([, g]) => {
      const v = String((g == null ? void 0 : g.type) || "").toLowerCase(), k = String((g == null ? void 0 : g.value) || "");
      return v === "dataurl" && k.startsWith("data:image");
    });
    if (!u.length) return;
    let f = !1;
    for (const [g, v] of u)
      try {
        const k = String((v == null ? void 0 : v.value) || "");
        if (!k) continue;
        const P = await fetch(k).then((ce) => ce.blob()), V = String(P.type || "image/png").split("/")[1] || "png", j = String((v == null ? void 0 : v.name) || `${g}.${V}`), ve = new File([P], j, { type: P.type || "image/png" }), ee = await oo(ve, {
          fetchApi: (ce, we) => tn.fetchApi(ce, we)
        });
        b.assets[g] = {
          ...ee,
          w: Number((v == null ? void 0 : v.w) || 0),
          h: Number((v == null ? void 0 : v.h) || 0)
        }, f = !0;
      } catch {
      }
    f && (kt(), He());
  }
  async function Xv() {
    let a = !1;
    for (const u of b.stickers) {
      const f = u.source.data_url;
      if (f)
        try {
          const g = await fetch(f).then((V) => V.blob()), v = String(g.type || "image/png").split("/")[1] || "png", k = new File([g], `${u.id}.${v}`, { type: g.type || "image/png" }), P = await oo(k, {
            fetchApi: (V, j) => tn.fetchApi(V, j)
          });
          u.source = Sl(P), a = !0;
        } catch {
        }
    }
    a && (kt(), He());
  }
  function qv() {
    if (r || t !== "cutout") return;
    const a = at();
    if (a) {
      Xn(a), d.mode = "pano", N && sr() ? zi(Zm(lv(mn(), a.position), Fp(), F.width, F.height)) : wp(Ut(Number(a.yaw_deg || 0)), Me(Number(a.pitch_deg || 0), -89.9, 89.9)), it(), ct(), He({ cause: "cutout_frame" });
      return;
    }
    const u = ly({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ut(Number(d.viewYaw || 0)),
      pitchDeg: Number(d.viewPitch || 0),
      viewFovDeg: Number(d.viewFov || 90)
    });
    b.shots = [u], Xn(u), Na(), d.mode = "pano", yt(), kt(), it(), ct(), He({ cause: "cutout_frame" });
  }
  function Jv() {
    r || !I || _i() || (gn(), b.camera = wM(mn()), cr(), Xn(at()), Na(), yt(), kt(), it(), ct(), He({ cause: "cutout_frame" }));
  }
  function Zv() {
    gn(), b.camera = null, Xn(null), cr(), yt(), kt(), it(), ct(), He({ cause: "cutout_frame" });
  }
  function th(a, u) {
    I && Yn(a) && (b.camera.projection = u === ia ? "erp" : "perspective", u === ia) || o_(a, u);
  }
  function Qv() {
    r || t !== "cutout" || (b.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, b.active.selected_shot_id = null, yt(), kt(), it(), ct(), He());
  }
  function e_() {
    const a = Array.isArray(b.stickers) ? b.stickers : [], u = [];
    for (const f of a)
      Fn(f) && (f.visible = !1, u.push(f));
    return u;
  }
  function nh(a, u, f = "Clear") {
    return new Promise((g) => {
      D.confirmDialog = {
        visible: !0,
        title: String(a || ""),
        text: String(u || ""),
        confirmLabel: String(f || "Confirm"),
        resolve: g
      };
    });
  }
  async function t_() {
    var f, g;
    if (r || !await nh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    b.painting = sa(null), Cr();
    const u = e_();
    if (t === "stickers")
      b.stickers = w ? b.stickers.filter((v) => v.placement === "world" || u.includes(v)) : u, w || (b.assets = {}), d.selectedId = ((f = u[0]) == null ? void 0 : f.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = ((g = u[0]) == null ? void 0 : g.id) || null, Co();
    else {
      const v = mM(b.shots, b.active.selected_shot_id);
      b.stickers = u, b.assets = {}, b.shots = v.shots, d.selectedId = v.selectedShotId, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = null, b.active.selected_shot_id = v.selectedShotId, !v.selectedShotId && d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Co();
    }
    yt(), kt(), it(), ct(), He();
  }
  async function n_(a) {
    var k, P, V, j;
    if (r) return;
    const u = a === "mask" ? "mask" : "paint", f = u === "mask" ? "Mask" : "Paint", g = Bs(u);
    if (!(!g.length && !(((k = d.interaction) == null ? void 0 : k.kind) === "draw" && ((P = d.interaction) == null ? void 0 : P.layerKind) === u) || !await nh(
      `Clear ${f}`,
      `This will remove all ${u} strokes in the current node.`,
      `Clear ${f}`
    ))) {
      if (((V = d.interaction) == null ? void 0 : V.kind) === "draw" && ((j = d.interaction) == null ? void 0 : j.layerKind) === u) {
        const ve = or(d.interaction);
        ve && d.paintEngine.cancelActiveStroke(ve), d.interaction = null;
      }
      g.length = 0, b.painting.raster_objects = Jr().filter((ve) => String((ve == null ? void 0 : ve.layerKind) || "paint") !== u), u === "paint" && (wo().length = 0), Cr(), yt(), kt(), it(), ct(), Rn(), He();
    }
  }
  function r_() {
    if (r) return;
    const a = In();
    if (!a || !ln(a) || Fn(a) || w && cp(a)) return;
    let u;
    w ? u = TM(a, no("st"), Ns()) : (u = JSON.parse(JSON.stringify(a)), u.id = no("st"), u.yaw_deg = Ut((u.yaw_deg || 0) + 8), u.z_index = Ns()), b.stickers.push(u), b.active.selected_sticker_id = u.id, d.selectedId = u.id, d.selectedIds = [u.id], hn(), yt(), kt(), ct(), it(), He();
  }
  function i_() {
    const a = Po();
    return a ? (Ls(a) && (gn(), OM(b, a.id), Yf(), hn(), yt(), kt(), it(), ct(), Or(), He()), !0) : !1;
  }
  function rh() {
    var f, g, v, k, P;
    if (r || N) return;
    const a = bi(), u = In();
    if (!(!u && a.length === 0) && !a.some((V) => Dn(V))) {
      if (gn(), a.length > 1) {
        const V = new Set(a.filter((ee) => Ln(ee)).map((ee) => String(ee.actionGroupId || ee.id || ""))), j = new Set(a.filter((ee) => Ar(ee)).map((ee) => Vi(ee.rasterObjectId || ee.id || ""))), ve = new Set(a.filter(ln).map((ee) => String(ee.id || "")));
        V.size > 0 && (b.painting.paint.strokes = (Array.isArray((g = (f = b.painting) == null ? void 0 : f.paint) == null ? void 0 : g.strokes) ? b.painting.paint.strokes : []).filter((ee) => !V.has(String((ee == null ? void 0 : ee.actionGroupId) || ""))), b.painting.groups = wo().filter((ee) => !V.has(String((ee == null ? void 0 : ee.actionGroupId) || (ee == null ? void 0 : ee.id) || ""))), Cr()), j.size > 0 && (b.painting.raster_objects = Jr().filter((ee) => !j.has(String((ee == null ? void 0 : ee.id) || ""))), Mo()), ve.size > 0 && (b.stickers = (Array.isArray(b.stickers) ? b.stickers : []).filter((ee) => ve.has(String((ee == null ? void 0 : ee.id) || "")) ? Fn(ee) ? (Cs(ee) || (ee.visible = !1), !0) : !1 : !0), Co(), hn()), d.selectedId = null, d.selectedIds = [], yt(), kt(), it(), ct(), He();
        return;
      }
      if (Ln(u)) {
        const V = String(u.actionGroupId || u.id || "").trim();
        b.painting.paint.strokes = (Array.isArray((k = (v = b.painting) == null ? void 0 : v.paint) == null ? void 0 : k.strokes) ? b.painting.paint.strokes : []).filter((j) => String((j == null ? void 0 : j.actionGroupId) || "").trim() !== V), b.painting.groups = wo().filter((j) => String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim() !== V), Cr(), d.selectedId = null, d.selectedIds = [], yt(), kt(), it(), ct(), He();
        return;
      }
      if (Ar(u)) {
        const V = Vi(u.rasterObjectId || u.id || "");
        b.painting.raster_objects = Jr().filter((j) => String((j == null ? void 0 : j.id) || "").trim() !== V), Mo(), d.selectedId = null, d.selectedIds = [], yt(), kt(), it(), ct(), He();
        return;
      }
      if (I && Yn(u)) {
        Zv();
        return;
      }
      if (t === "stickers" || ln(u)) {
        if (Fn(u)) {
          if (Cs(u)) return;
          u.visible = !1, hn(), yt(), kt(), it(), ct(), He();
          return;
        }
        b.stickers = b.stickers.filter((V) => V.id !== u.id), Co(), hn(), d.selectedId = ((P = Li()[0]) == null ? void 0 : P.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], b.active.selected_sticker_id = d.selectedId, yt(), kt(), it(), ct(), He();
        return;
      }
      Qv();
    }
  }
  function Uc(a, u) {
    const f = de.frameSafeRect;
    if (!a || !f || d.mode !== "frame") return !1;
    const g = zu * ho(f, a), v = pf(ff(f, u), g);
    return a.hFOV_deg = v.hFOV_deg, a.vFOV_deg = v.vFOV_deg, !0;
  }
  function o_(a, u) {
    if (!a || a.locked === !0) return;
    const f = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, g = (() => {
      const V = String(a.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(V)) {
        const [ee, ce] = V.split(":").map((we) => Number(we));
        if (Number.isFinite(ee) && Number.isFinite(ce)) return ee >= ce;
      }
      const j = Number(a.hFOV_deg || 64), ve = Number(a.vFOV_deg || 40);
      return Math.abs(j - ve) > 1e-6 ? j >= ve : mo(a) >= 1;
    })();
    let [v, k] = f[String(u)] || f["1:1"];
    v >= k !== g && ([v, k] = [k, v]);
    const P = v / k;
    if (!Uc(a, P)) {
      const V = Me(Number(a.vFOV_deg || 40), 1, 179);
      a.vFOV_deg = V, a.hFOV_deg = bl(V, P);
    }
    a.aspect_id = `${v}:${k}`;
  }
  function a_(a, u, f) {
    if (!a || a.locked === !0) return !1;
    const g = ys(u, f);
    if (!g) return !1;
    const v = g.ratio;
    if (!Uc(a, v)) {
      const k = Me(Number(a.vFOV_deg || 40), 1, 179);
      a.vFOV_deg = k, a.hFOV_deg = bl(k, v);
    }
    return a.aspect_id = g.label, !0;
  }
  function ih(a) {
    if (!a || a.locked === !0) return;
    const u = String(a.aspect_id || "").trim(), f = Ii(a), g = f.tanHalfX / Math.max(1e-12, f.tanHalfY), v = 1 / Math.max(1e-12, g);
    if (!Uc(a, v)) {
      const k = Me(Number(a.vFOV_deg || 60), 1, 179);
      a.vFOV_deg = k, a.hFOV_deg = bl(k, v);
    }
    if (/^\d+:\d+$/.test(u)) {
      const [k, P] = u.split(":");
      a.aspect_id = `${P}:${k}`;
    } else
      a.aspect_id = ao(a);
  }
  function s_() {
    r || (b.projection_model = "pinhole_rectilinear", b.alpha_mode = "straight", l && (b.output_preset = S(Number(b.output_preset || 2048))), c && (b.coverage = Gn(c.value)), m && (b.bg_color = String(m.value || b.bg_color || "#00ff00")), qn(), e.setDirtyCanvas(!0, !0));
  }
  function qn() {
    var u;
    if (r) return;
    cr(), zy(b), b.coverage = Gn(b.coverage), $y(e, b.active);
    const a = jy(e, b);
    p && !Hy(e, a, String(p.value ?? ""), { rebased: G }) && (p.value = a, (u = p.callback) == null || u.call(p, a));
  }
  const oh = () => qn();
  r || (e.__panoFlushStateBeforeQueue = oh);
  function Yc() {
    b.ui_settings = wE(b.ui_settings), r || qn();
  }
  function kt() {
    var a;
    r || (qn(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }
  function l_() {
    r || A1() && yp().catch((a) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", a);
    });
  }
  function c_(a = {}) {
    var g, v, k, P, V, j, ve, ee, ce, we;
    const u = a.syncPreview !== !1, f = a.syncGraph !== !1;
    u && ((v = (g = e.__panoPreviewNodeRuntime) == null ? void 0 : g.requestDraw) == null || v.call(g), (P = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || P.call(k), (V = e.setDirtyCanvas) == null || V.call(e, !0, !1)), f && ((ve = (j = e.graph) == null ? void 0 : j.setDirtyCanvas) == null || ve.call(j, !0, !0), (we = (ce = (ee = Qn) == null ? void 0 : ee.canvas) == null ? void 0 : ce.setDirty) == null || we.call(ce, !0, !0));
  }
  function Na() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", Rn(), it());
  }
  function ah() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function cr(a = !0) {
    var g, v;
    if (!G) return;
    const u = H;
    if (!ei()) {
      H = null, (g = b.shots) != null && g.length && (b.shots = []), u && sh(u, null);
      return;
    }
    const f = (v = b.shots) == null ? void 0 : v[0];
    a && f && H && kM(b.camera, d.frame, f, H), H = Km(b.camera, d.frame), f ? Object.assign(f, H, { position: [...H.position] }) : b.shots = [{ ...H, position: [...H.position] }], u || sh(null, H);
  }
  function sh(a, u) {
    var k, P;
    !u && d.mode === "frame" && lh(a);
    const f = (u == null ? void 0 : u.position) ?? [0, 0, 0];
    if (((P = (k = d.viewTransition) == null ? void 0 : k.end) == null ? void 0 : P.mode) === "3dof") {
      zi({ ...mn(), position: f }, d.viewTransition.end);
      return;
    }
    if (d.mode !== "pano" || d.spaceMode !== "3dof" || !Sa()) return;
    const g = (a == null ? void 0 : a.position) ?? [0, 0, 0];
    if (g.every((V, j) => V === f[j])) return;
    const v = { ...mn(), position: g };
    wa({ mode: "6dof", position: g, moved: !0 }), d.viewDistance = v.distance, zi({ ...v, position: f }, { mode: "3dof", moved: !1 });
  }
  function lh(a) {
    if (d.mode = "pano", !a) return;
    _a();
    const u = mn().distance;
    d.viewYaw = Ut(a.yaw_deg), d.viewPitch = Me(a.pitch_deg, -89.9, 89.9), d.viewFov = Me(a.hFOV_deg, 35, 140), d.spaceMode === "6dof" && wa({ mode: "6dof", position: [...a.position], moved: !0 }), d.viewDistance = u, de.backgroundDirty = !0;
  }
  function at() {
    if (!R) return null;
    const a = Array.isArray(b.shots) ? b.shots : [];
    if (!a.length) return null;
    const u = String(b.active.selected_shot_id || "");
    return a.find((f) => String((f == null ? void 0 : f.id) || "") === u) || a[0] || null;
  }
  function u_() {
    var Ye, Ne, tt, nt, St;
    if (!F) return null;
    const a = (Ye = F.getBoundingClientRect) == null ? void 0 : Ye.call(F), u = Number((a == null ? void 0 : a.width) || 0) > 0 ? F.width / a.width : 1, f = Number((a == null ? void 0 : a.height) || 0) > 0 ? F.height / a.height : 1;
    de.frameCanvasScale = Math.min(u, f);
    let g = 24, v = 24;
    const k = Math.max(g + 1, F.width - 24);
    let P = Math.max(v + 1, F.height - 24);
    const V = (Ne = A == null ? void 0 : A.getBoundingClientRect) == null ? void 0 : Ne.call(A), j = (tt = E == null ? void 0 : E.getBoundingClientRect) == null ? void 0 : tt.call(E);
    let ve = 24;
    V && a && V.width > 0 && V.height > 0 && (ve = Math.max(ve, (V.right - a.left) * u + jg)), j && a && j.width > 0 && j.height > 0 && ((nt = D.frameRail) == null ? void 0 : nt.visible) === !0 && (ve = Math.max(ve, (a.right - j.left) * u + jg)), g = Math.max(g, ve);
    const ee = Math.min(k, F.width - ve);
    let ce = 24;
    const we = (St = ke == null ? void 0 : ke.getBoundingClientRect) == null ? void 0 : St.call(ke);
    if (we && a && we.width > 0 && we.height > 0 && (ce = Math.max(ce, (we.bottom - a.top) * f + ju)), [ue, T].forEach((dt) => {
      var vn;
      if (!dt || !a) return;
      const vt = getComputedStyle(dt);
      if (vt.display === "none" || vt.visibility === "hidden" || Number(vt.opacity) <= 0) return;
      const Tt = (vn = dt.getBoundingClientRect) == null ? void 0 : vn.call(dt);
      !Tt || Tt.width <= 0 || Tt.height <= 0 || (ce = Math.max(ce, (a.bottom - Tt.top) * f + ju));
    }), te && a) {
      const dt = getComputedStyle(te);
      dt.display !== "none" && dt.visibility !== "hidden" && Number(dt.opacity) > 0 && (ce = Math.max(ce, (rE + ju) * f));
    }
    return v = Math.max(v, ce), P = Math.max(v + 1, Math.min(P, F.height - ce)), {
      x: g,
      y: v,
      w: Math.max(1, ee - g),
      h: Math.max(1, P - v)
    };
  }
  function Gs(a = at()) {
    if (!a || !F) return null;
    const u = de.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, F.width - 48),
      h: Math.max(1, F.height - 48)
    };
    return pk(u, a, zu * ho(u, a));
  }
  function wr(a = at()) {
    const u = Gs(a);
    return u ? { x: u.x, y: u.y, w: u.w, h: u.h } : null;
  }
  function Xc() {
    return R && !!at();
  }
  function d_(a, u) {
    const f = at();
    if (!f || f.locked === !0) return !1;
    const g = Number(u) > 0, v = uy(f, u);
    if (!v) return !1;
    if (g) {
      const k = zu * ho(
        de.frameSafeRect || { w: F.width, h: F.height },
        v
      ), P = hf({ width: F.width, height: F.height }, k);
      if (P.halfW < F.width * 0.5 - 1e-6 || P.halfH < F.height * 0.5 - 1e-6) return !1;
    }
    return f.hFOV_deg = v.hFOV_deg, f.vFOV_deg = v.vFOV_deg, ch(), it(), !0;
  }
  function ch() {
    d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, yt(), kt(), it());
    }, 180);
  }
  function qc() {
    return G && d.mode === "frame" && Sa();
  }
  function Pa() {
    const a = at(), u = Gs(a);
    return a && u ? rg(a, u, { width: F.width, height: F.height }) : null;
  }
  function uh() {
    var a;
    return ((a = Er()) == null ? void 0 : a.radius) || xr;
  }
  function Aa(a) {
    const { position: u, yaw_deg: f, pitch_deg: g, roll_deg: v, hFOV_deg: k } = a.shot;
    return { position: u, yaw_deg: f, pitch_deg: g, roll_deg: v, hFOV_deg: k, distance: uh() };
  }
  function dh(a, u) {
    const { rect: f } = a;
    return $e.pickSurface(Dp(a.shot), u.x - f.x, u.y - f.y, f.w, f.h);
  }
  function fh(a, u, f) {
    return Iu(u, dh(a, f), null, Tr());
  }
  function ph(a) {
    return JSON.stringify([Aa(a), a.rect]);
  }
  function hh(a) {
    const u = at();
    u.position = [...a.position], u.yaw_deg = a.yaw_deg, u.pitch_deg = a.pitch_deg;
  }
  function mh(a, u) {
    const f = at();
    !f || r || f.locked === !0 || (d.interaction = {
      kind: "pan_frame",
      shot: f,
      last: a,
      start: { yaw_deg: Number(f.yaw_deg || 0), pitch_deg: Number(f.pitch_deg || 0) },
      changed: !1
    }, It(a), F.setPointerCapture(u));
  }
  function f_(a, u, f) {
    const g = Pa();
    if (!g || r) return;
    const v = Aa(g);
    d.interaction = a === "orbit" ? { kind: "frame_orbit", last: u, pivot: fh(g, v, u), changed: !1 } : { kind: "frame_pan", last: u, depth: Um(v, Tr()), changed: !1 }, It(u), F.setPointerCapture(f);
  }
  function p_(a, u) {
    const f = Pa();
    if (!f) return;
    const g = Aa(f), v = u.x - a.last.x, k = u.y - a.last.y;
    hh(a.kind === "frame_pan" ? qm(g, v, k, f.rect.w, f.rect.h, a.depth) : Xm(g, v, k, F.height, a.pivot)), a.changed = a.changed || v !== 0 || k !== 0, a.last = u, He({ localOnly: !0, cause: "frame_view" });
  }
  function h_(a, u) {
    const f = Pa();
    if (!f || r) return;
    const g = Aa(f), v = performance.now(), k = { x: a.x, y: a.y, time: v, key: $e.contentRevision(), view: ph(f) };
    if (!Ym(Gt, k)) {
      const P = dh(f, a);
      Gt = { ...k, cost: performance.now() - v, hit: P };
    }
    hh(Jm(g, Iu(g, Gt.hit, null, Tr()), u, Tr())), Gt.view = ph(Pa() ?? f), Gt.wheelTime = v, ch(), it(), He({ localOnly: !0, cause: "frame_view" });
  }
  function m_() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, yt(), kt(), it(), !0) : !1;
  }
  function Ca() {
    const a = d.interaction;
    if (!(a != null && a.shot) || !a.start || a.kind !== "pan_frame" && a.kind !== "roll_frame") return !1;
    const u = a.kind === "roll_frame";
    return a.kind === "pan_frame" ? (a.shot.yaw_deg = a.start.yaw_deg, a.shot.pitch_deg = a.start.pitch_deg) : a.shot.roll_deg = a.start.roll_deg, u && Ki(), d.interaction = null, ko(), Qr(), it(), It(d.pointerPos), He({ localOnly: !0 }), !0;
  }
  function g_(a, u) {
    const f = Number(u || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, f / 2048)
    };
  }
  function Wi(a) {
    const u = String(a || "").trim();
    return u === "eraser" ? oi : Hn[u] ? u : d.activeBrushPresetId || oi;
  }
  function gh() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (ah() || Xc());
  }
  function yh() {
    var a;
    return gh() && ((a = d.pointerPos) == null ? void 0 : a.inside) === !0;
  }
  function Ws(a, u = !0) {
    const f = Number((a == null ? void 0 : a.x) || 0), g = Number((a == null ? void 0 : a.y) || 0), v = u !== !1, k = d.pointerPos || { x: 0, y: 0, inside: !1 }, P = k.inside !== v || Math.abs(k.x - f) > 0.01 || Math.abs(k.y - g) > 0.01;
    return d.pointerPos = { x: f, y: g, inside: v }, P;
  }
  function y_() {
    var ee, ce;
    if (!yh()) return null;
    const a = d.primaryTool === "mask" ? "mask" : "paint", u = a === "mask" ? d.maskTool : d.paintTool, f = Wi(u), g = Hn[f] || Hn[oi], v = Number(d.brushSizes[f] ?? 10), k = Math.max(1, v) * Math.max(0.1, Number(g.sizeScale ?? 1)), P = Math.max(3, k * 0.5), V = a === "mask" ? u === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : u === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Jn(d.paintColor), j = a === "mask" ? u === "lasso_fill" ? 0.18 : 0.2 : u === "eraser" ? 0.06 : Me(Math.max(0.16, Number(V.a ?? 1) * 0.3), 0.16, 0.52), ve = a === "mask" ? 0.95 : u === "eraser" ? 0.75 : Me(Math.max(0.46, Number(V.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: a,
      toolKind: u,
      preset: g,
      radius: P,
      fillStyle: Vr(V, j),
      strokeStyle: Vr(V, ve),
      x: Number(((ee = d.pointerPos) == null ? void 0 : ee.x) || 0),
      y: Number(((ce = d.pointerPos) == null ? void 0 : ce.y) || 0),
      hotspotX: P,
      hotspotY: P
    };
  }
  function b_() {
    var we, Ye, Ne;
    const a = y_();
    if (!Je) return;
    if (!a) {
      Je.style.display = "none";
      return;
    }
    let u = a.radius * 2, f = a.radius * 2, g = "999px", v = 0, k = a.fillStyle, P = "1px solid rgba(222, 222, 222, 0.72)", V = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const j = "rgba(222, 222, 222, 0.72)", ve = "rgba(52, 52, 52, 0.72)";
    let ee = Number(a.hotspotX ?? u * 0.5), ce = Number(a.hotspotY ?? f * 0.5);
    if (a.toolKind === "lasso_fill")
      u = fc, f = fc, g = "0", P = "0", V = "none", ee = aE, ce = sE, k = hE(a.fillStyle, ve, j);
    else if (a.layerKind === "mask")
      k = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (a.toolKind === "marker") {
      const tt = Math.max(1, Number(((we = a.preset) == null ? void 0 : we.aspect) ?? 1));
      u = Math.max(10, a.radius * 2 * tt), f = Math.max(6, a.radius * 2), g = `${Math.min(6, f * 0.42)}px`, v = Number(((Ne = (Ye = a.preset) == null ? void 0 : Ye.angle) == null ? void 0 : Ne.value) || 0) * so;
    } else a.toolKind === "brush" ? k = `radial-gradient(circle at 50% 50%, ${a.strokeStyle} 0%, ${a.fillStyle} 45%, rgba(0,0,0,0) 100%)` : a.toolKind === "eraser" && (k = "rgba(255,255,255,0.14)");
    Je.style.display = "block", Je.style.width = `${Math.round(u)}px`, Je.style.height = `${Math.round(f)}px`, Je.style.borderRadius = g, Je.style.border = P, Je.style.boxShadow = V, Je.style.background = k, Je.style.backgroundRepeat = "no-repeat", Je.style.backgroundPosition = "center", Je.style.backgroundSize = "contain", Je.style.transform = `translate(${Math.round(a.x - ee)}px, ${Math.round(a.y - ce)}px) rotate(${v}deg)`;
  }
  function v_() {
    var dt;
    if (!le || !z) return;
    const a = d.primaryTool === "mask" ? "mask" : "paint", u = a === "mask" ? d.maskTool : d.paintTool;
    if (u === "lasso_fill") return;
    const f = Wi(u), g = Hn[f] || Hn[oi], v = Number(d.brushSizes[f] ?? 10), k = Math.max(1, v) * Math.max(0.1, Number(g.sizeScale ?? 1)), P = Math.max(6, k * 0.5), V = u === "eraser", j = a === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : V ? { r: 1, g: 1, b: 1, a: 0.22 } : Jn(d.paintColor), ve = a === "mask" ? Vr(j, 0.22) : V ? "rgba(255,255,255,0.14)" : Vr(j, Me(Math.max(0.18, Number(j.a ?? 1) * 0.34), 0.18, 0.56)), ee = a === "mask" ? Vr(j, 0.96) : V ? "rgba(255,255,255,0.72)" : Vr(j, Me(Math.max(0.56, Number(j.a ?? 1) * 0.96), 0.56, 1));
    let ce = P * 2, we = P * 2, Ye = "999px", Ne = 0, tt = ve;
    const nt = "rgba(222, 222, 222, 0.72)", St = "rgba(52, 52, 52, 0.72)";
    if (a === "mask")
      tt = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (u === "marker") {
      const vt = Math.max(1, Number((g == null ? void 0 : g.aspect) ?? 1));
      ce = Math.max(16, P * 2 * vt), we = Math.max(10, P * 2), Ye = `${Math.min(8, we * 0.42)}px`, Ne = Number(((dt = g == null ? void 0 : g.angle) == null ? void 0 : dt.value) || 0) * so;
    } else u === "brush" ? tt = `radial-gradient(circle at 50% 50%, ${ee} 0%, ${ve} 48%, rgba(0,0,0,0) 100%)` : u === "lasso_fill" ? (ce = Math.max(18, P * 1.8), we = ce, tt = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${ee} 43%, ${ee} 58%, rgba(0,0,0,0) 59%)`) : V && (tt = "rgba(255,255,255,0.12)");
    z.style.width = `${Math.round(ce)}px`, z.style.height = `${Math.round(we)}px`, z.style.borderRadius = Ye, z.style.background = tt, z.style.border = `1px solid ${nt}`, z.style.boxShadow = `0 0 0 1px ${St}`, z.style.transform = `rotate(${Ne}deg)`, Qe && (clearTimeout(Qe), Qe = 0), le.classList.remove("fade-out"), le.classList.add("show");
  }
  function Ks() {
    !le || !le.classList.contains("show") || (le.classList.add("fade-out"), Qe && clearTimeout(Qe), Qe = window.setTimeout(() => {
      le.classList.remove("show", "fade-out"), Qe = 0;
    }, 180));
  }
  function bh(a, u, f, g) {
    const v = Wi(u), k = Hn[v] || Hn[oi], P = d.brushSizes[v] ?? 10, V = Math.max(1, P) * Math.max(0.1, k.sizeScale ?? 1), j = g_(g, V), ve = f.map((ce) => ({
      ...ce,
      t: Number((ce == null ? void 0 : ce.t) || 0),
      widthScale: Number.isFinite(Number(ce == null ? void 0 : ce.widthScale)) ? Math.max(0, Number(ce.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(ce == null ? void 0 : ce.pressureLike)) ? Math.max(0, Number(ce.pressureLike)) : 1
    })), ee = {
      id: Ko(a),
      actionGroupId: Ko("ag"),
      targetSpace: g && typeof g == "object" ? { ...g, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: a,
      toolKind: u,
      size: V,
      createdAt: Date.now(),
      color: a === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: j.radiusModel,
      radiusValue: j.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: ve.map((ce) => ({ ...ce })),
        points: ve.map((ce) => ({ ...ce }))
      }
    };
    return Rg(ee, k), d.mode, Number(k.aspect ?? 1), Number(ee.aspect ?? 1), String(ee.stampKind || ""), Number(ee.size || 0), String(ee.radiusModel || ""), Number(ee.radiusValue || 0), { ...ee.targetSpace }, ee;
  }
  function vh(a, u, f, g) {
    const v = f.map((j) => ({
      ...j,
      t: Number((j == null ? void 0 : j.t) || 0),
      widthScale: Number.isFinite(Number(j == null ? void 0 : j.widthScale)) ? Math.max(0, Number(j.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(j == null ? void 0 : j.pressureLike)) ? Math.max(0, Number(j.pressureLike)) : 1
    })), k = Wi(u), P = Hn[k] || Hn[oi], V = {
      id: Ko(a),
      actionGroupId: Ko("ag"),
      targetSpace: g && typeof g == "object" ? { ...g, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: a,
      toolKind: u,
      size: 10,
      createdAt: Date.now(),
      color: a === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: v.map((j) => ({ ...j }))
      }
    };
    return Rg(V, P), d.mode, Number(P.aspect ?? 1), Number(V.aspect ?? 1), String(V.stampKind || ""), { ...V.targetSpace }, V;
  }
  function Bs(a) {
    const u = b.painting || (b.painting = sa(null)), f = u[a] || (u[a] = { strokes: [] });
    return Array.isArray(f.strokes) || (f.strokes = []), f.strokes;
  }
  function __(a, u, f = performance.now()) {
    let g;
    if (d.mode === "frame") {
      const ve = at();
      if (!ve || (g = vr(u, ve, f), !g)) return !1;
    } else
      g = Ir(u, f);
    if (!g) return !1;
    const v = a.stroke.geometry.rawPoints || a.stroke.geometry.points, k = a.stroke.geometry.points, P = v[v.length - 1];
    if (P) {
      const ve = Math.abs(Number(g.u ?? g.x ?? 0) - Number(P.u ?? P.x ?? 0)), ee = Math.abs(Number(g.v ?? g.y ?? 0) - Number(P.v ?? P.y ?? 0));
      if (ve < 15e-4 && ee < 15e-4) return !1;
    }
    const V = {
      ...g,
      t: Number((g == null ? void 0 : g.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    v.push({ ...V }), k.push({ ...V });
    const j = or(a);
    if (j) {
      const ve = d.paintEngine.ensureTarget(j);
      d.paintEngine.appendStrokePoint(ve, Number(V.u ?? 0), Number(V.v ?? 0), a.stroke);
    }
    return !0;
  }
  function S_(a, u, f = performance.now()) {
    var P, V;
    let g;
    if (d.mode === "frame") {
      const j = at();
      if (!j) return !1;
      g = vr(u, j, f);
    } else
      g = Ir(u, f);
    const v = (V = (P = a == null ? void 0 : a.stroke) == null ? void 0 : P.geometry) == null ? void 0 : V.points;
    if (!g || !Array.isArray(v)) return !1;
    const k = v[v.length - 1];
    if (k) {
      const j = Math.abs(Number(g.u ?? g.x ?? 0) - Number(k.u ?? k.x ?? 0)), ve = Math.abs(Number(g.v ?? g.y ?? 0) - Number(k.v ?? k.y ?? 0));
      if (j < 15e-4 && ve < 15e-4) return !1;
    }
    return v.push({
      ...g,
      t: Number((g == null ? void 0 : g.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function w_(a) {
    var vt, Tt, vn, Ui, Yi;
    const u = (a == null ? void 0 : a.stroke) || null;
    if (!u || (a == null ? void 0 : a.layerKind) !== "paint" || String((u == null ? void 0 : u.toolKind) || "") !== "eraser") return !1;
    Is();
    const f = or(), g = Xf(f.width, f.height);
    if (!F1(g, u, { w: f.width, h: f.height })) return !1;
    const v = ((Tt = (vt = g.ctx) == null ? void 0 : vt.getImageData(0, 0, f.width, f.height)) == null ? void 0 : Tt.data) || null;
    if (!v) return !1;
    const k = new Map(wo().map((qe) => [String((qe == null ? void 0 : qe.actionGroupId) || (qe == null ? void 0 : qe.id) || "").trim(), qe ? { ...qe } : null])), P = [], V = [], j = [...Jr().filter((qe) => String((qe == null ? void 0 : qe.layerKind) || "paint") !== "paint")];
    let ve = !1, ee = m1().reduce((qe, Be) => Math.max(qe, Number((Be == null ? void 0 : Be.z_index) || 0)), -1) + 1;
    function ce(qe, Be, Ze, st = 8) {
      let ot = Be, At = Ze, Mt = -1, Bt = -1;
      for (let Nt = 0; Nt < Ze; Nt += 1)
        for (let an = 0; an < Be; an += 1)
          qe[(Nt * Be + an) * 4 + 3] <= st || (an < ot && (ot = an), Nt < At && (At = Nt), an > Mt && (Mt = an), Nt > Bt && (Bt = Nt));
      return Mt < ot || Bt < At ? null : { minX: ot, minY: At, maxX: Mt, maxY: Bt };
    }
    const we = ce(v, f.width, f.height, 8);
    if (!we) return !1;
    function Ye(qe, Be) {
      return !qe || !Be ? !1 : !(qe.maxX < Be.minX || Be.maxX < qe.minX || qe.maxY < Be.minY || Be.maxY < qe.minY);
    }
    function Ne(qe, Be) {
      const Ze = So((qe == null ? void 0 : qe.actionGroupId) || (qe == null ? void 0 : qe.id) || "", "paint", Be);
      if (!Ze) return null;
      const st = Ze.centerUv.u - Ze.halfW, ot = Ze.centerUv.u + Ze.halfW, At = Ze.centerUv.v - Ze.halfH, Mt = Ze.centerUv.v + Ze.halfH, Bt = f.width, Nt = f.height;
      return {
        minX: Math.floor((st % 1 + 1) % 1 * Bt),
        maxX: Math.ceil((ot % 1 + 1) % 1 * Bt),
        minY: Math.floor(Me(At, 0, 1) * Nt),
        maxY: Math.ceil(Me(Mt, 0, 1) * Nt),
        wraps: ot - st >= 1 || st < 0 || ot > 1
      };
    }
    function tt(qe) {
      const Be = (qe == null ? void 0 : qe.bbox) || null;
      if (!Be) return null;
      const Ze = (qe == null ? void 0 : qe.transform) || {}, st = f.width, ot = f.height, At = Number(Be.u0 || 0) + Number(Ze.du || 0), Mt = Number(Be.u1 || 0) + Number(Ze.du || 0), Bt = Number(Be.v0 || 0) + Number(Ze.dv || 0), Nt = Number(Be.v1 || 0) + Number(Ze.dv || 0);
      return {
        minX: Math.floor((At % 1 + 1) % 1 * st),
        maxX: Math.ceil((Mt % 1 + 1) % 1 * st),
        minY: Math.floor(Me(Bt, 0, 1) * ot),
        maxY: Math.ceil(Me(Nt, 0, 1) * ot),
        wraps: Mt - At >= 1 || At < 0 || Mt > 1
      };
    }
    function nt(qe) {
      return qe ? qe.wraps ? Ye(we, { minX: 0, maxX: qe.maxX, minY: qe.minY, maxY: qe.maxY }) || Ye(we, { minX: qe.minX, maxX: f.width - 1, minY: qe.minY, maxY: qe.maxY }) : Ye(we, qe) : !0;
    }
    function St(qe) {
      if (!qe) return { touched: !1, canvas: null };
      const Be = Xf(f.width, f.height, { readback: !0 });
      Be.ctx.drawImage(qe, 0, 0);
      const Ze = Be.ctx.getImageData(0, 0, f.width, f.height);
      Be.ctx.save(), Be.ctx.globalCompositeOperation = "destination-out", Be.ctx.drawImage(g.canvas, 0, 0), Be.ctx.restore();
      const st = Be.ctx.getImageData(0, 0, f.width, f.height);
      for (let ot = 0; ot < f.width * f.height; ot += 1) {
        if (v[ot * 4 + 3] <= 8) continue;
        const Mt = Ze.data[ot * 4 + 3], Bt = st.data[ot * 4 + 3];
        if (Mt > Bt)
          return { touched: !0, canvas: Be.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function dt(qe, Be, Ze) {
      const st = Number(Ze == null ? void 0 : Ze.z_index), ot = c1(qe, Be, Ze).map((At, Mt) => ({
        ...At,
        z_index: Number.isFinite(st) ? st + Mt * 1e-3 : ee + Mt * 1e-3
      }));
      return ot.length && (ee = Math.max(ee, ...ot.map((At) => Number((At == null ? void 0 : At.z_index) || 0))) + 1), ot;
    }
    for (const qe of wo()) {
      const Be = String((qe == null ? void 0 : qe.actionGroupId) || (qe == null ? void 0 : qe.id) || "").trim();
      if (!Be) continue;
      const Ze = xo(Be, "paint");
      if (!nt(Ne(qe, Ze))) {
        V.push(qe), P.push(...Ze);
        continue;
      }
      const st = ((Ui = (vn = d.paintEngine) == null ? void 0 : vn.getGroupTarget) == null ? void 0 : Ui.call(vn, Be)) || null, ot = ((Yi = st == null ? void 0 : st.committedPaint) == null ? void 0 : Yi.canvas) || null;
      if (!ot) {
        V.push(qe), P.push(...Ze);
        continue;
      }
      const At = St(ot);
      if (!At.touched || !At.canvas) {
        V.push(qe), P.push(...Ze);
        continue;
      }
      ve = !0;
      const Mt = dt(At.canvas, "paint", k.get(Be) || qe || {});
      j.push(...Mt);
    }
    for (const qe of Jr().filter((Be) => String((Be == null ? void 0 : Be.layerKind) || "paint") === "paint")) {
      if (!nt(tt(qe))) {
        j.push(qe);
        continue;
      }
      const Be = s1(qe, null);
      if (!Be) {
        j.push(qe);
        continue;
      }
      const Ze = St(Be);
      if (!Ze.touched || !Ze.canvas) {
        j.push(qe);
        continue;
      }
      ve = !0;
      const st = dt(Ze.canvas, "paint", qe);
      j.push(...st);
    }
    return ve ? (b.painting.paint.strokes = P, b.painting.groups = V.sort((qe, Be) => Number((qe == null ? void 0 : qe.z_index) || 0) - Number((Be == null ? void 0 : Be.z_index) || 0)), b.painting.raster_objects = j.sort((qe, Be) => Number((qe == null ? void 0 : qe.z_index) || 0) - Number((Be == null ? void 0 : Be.z_index) || 0)), ba({ preservePanelValues: !1 }), !0) : !1;
  }
  function x_(a) {
    var P, V, j, ve, ee;
    if ((((V = (P = a.stroke) == null ? void 0 : P.geometry) == null ? void 0 : V.rawPoints) || ((ve = (j = a.stroke) == null ? void 0 : j.geometry) == null ? void 0 : ve.points) || []).length >= 1) {
      Jc(a);
      const ce = or(a);
      ce && (String(((ee = a.stroke) == null ? void 0 : ee.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(ce) : d.paintEngine.commitActiveStroke(a.stroke, ce)), a._hasCommittedSegments = !0;
    }
    const f = a.stroke, g = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, v = bh(a.layerKind, f.toolKind, [], g);
    v.actionGroupId = f.actionGroupId, a.stroke = v;
    const k = or(a);
    k && d.paintEngine.beginStroke(v, k);
  }
  function k_(a) {
    var P, V;
    if ((((V = (P = a.stroke) == null ? void 0 : P.geometry) == null ? void 0 : V.points) || []).length >= 3) {
      Jc(a);
      const j = or(a);
      j && d.paintEngine.commitActiveStroke(a.stroke, j), a._hasCommittedSegments = !0;
    }
    const f = a.stroke, g = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, v = vh(a.layerKind, f.toolKind, [], g);
    v.actionGroupId = f.actionGroupId, a.stroke = v;
    const k = or(a);
    k && d.paintEngine.beginStroke(v, k);
  }
  function Jc(a) {
    var k, P, V, j;
    const u = ((k = a == null ? void 0 : a.stroke) == null ? void 0 : k.geometry) || null;
    if (!u) return !1;
    const f = String(((P = a == null ? void 0 : a.stroke) == null ? void 0 : P.toolKind) || "pen");
    if (a.layerKind === "paint" && f === "eraser")
      return u.geometryKind !== "lasso_fill" && (u.processedPoints = pp(u.rawPoints || u.points || [], a.stroke.targetSpace, !0)), w_(a);
    const g = a.layerKind === "paint" && f !== "eraser";
    if (u.geometryKind === "lasso_fill")
      return (Array.isArray(u.points) ? u.points : []).length < 3 ? !1 : (g && qf((V = a.stroke) == null ? void 0 : V.actionGroupId), Bs(a.layerKind).push(a.stroke), !0);
    const v = u.rawPoints || u.points || [];
    return v.length < 1 ? !1 : (u.processedPoints = pp(v, a.stroke.targetSpace, !0), g && qf((j = a.stroke) == null ? void 0 : j.actionGroupId), Bs(a.layerKind).push(a.stroke), !0);
  }
  function _h(a) {
    var f;
    if (R && d.mode === "frame") {
      const g = at(), v = wr(g);
      if (!g || !v || !(Number((a == null ? void 0 : a.x) || 0) >= Number(v.x || 0) && Number((a == null ? void 0 : a.x) || 0) <= Number(v.x || 0) + Number(v.w || 0) && Number((a == null ? void 0 : a.y) || 0) >= Number(v.y || 0) && Number((a == null ? void 0 : a.y) || 0) <= Number(v.y || 0) + Number(v.h || 0))) return null;
      const P = vr(a, g, performance.now()), V = P ? d1(P) : null;
      if (V)
        for (const ve of Fc()) {
          if (!ln(ve)) continue;
          const ee = _p(ve, V);
          if (ee && Number(ee.x) >= 0 && Number(ee.x) <= 1 && Number(ee.y) >= 0 && Number(ee.y) <= 1) {
            const ce = cn(ve);
            if (ce != null && ce.visible) return { item: ve, geom: ce };
          }
        }
      const j = ip(!1).slice().sort((ve, ee) => Number((ee == null ? void 0 : ee.z_index) || 0) - Number((ve == null ? void 0 : ve.z_index) || 0));
      for (const ve of j) {
        if (ve.type === "strokeGroup") {
          const we = ap(dp("paint", ve.actionGroupId || ve.id || ""));
          if (!we) continue;
          const Ye = cn(we);
          if (!(Ye != null && Ye.visible)) continue;
          const Ne = Array.isArray(Ye.strokePaths) ? Ye.strokePaths : [];
          for (const tt of Ne) {
            const nt = Array.isArray(tt == null ? void 0 : tt.points) ? tt.points : [];
            if (!nt.length) continue;
            if (tt.closed && nt.length >= 3 && xi(a, nt)) return { item: we, geom: Ye };
            const St = Math.max(8, Number((tt == null ? void 0 : tt.lineWidth) || 0) * 0.5 + 6);
            for (let dt = 0; dt < nt.length - 1; dt += 1)
              if (Wu(a, nt[dt], nt[dt + 1]) <= St * St) return { item: we, geom: Ye };
            if (nt.length === 1 && Ua(a, nt[0]) <= St * St) return { item: we, geom: Ye };
          }
          continue;
        }
        if (ve.type === "rasterObject") {
          const we = op(up(((f = ve.item) == null ? void 0 : f.id) || ve.id || ""));
          if (!we) continue;
          const Ye = cn(we);
          if (sp(we, Ye, a, P)) return { item: we, geom: Ye };
          continue;
        }
        const ee = ve.item;
        if (!ee || !ln(ee) || !V) continue;
        const ce = _p(ee, V);
        if (ce && Number(ce.x) >= 0 && Number(ce.x) <= 1 && Number(ce.y) >= 0 && Number(ce.y) <= 1) {
          const we = cn(ee);
          if (we != null && we.visible) return { item: ee, geom: we };
        }
      }
      return null;
    }
    const u = [
      ...ip(!1).slice().sort((g, v) => Number((v == null ? void 0 : v.z_index) || 0) - Number((g == null ? void 0 : g.z_index) || 0)).map((g) => {
        var v;
        return g.type === "strokeGroup" ? ap(dp("paint", g.actionGroupId || g.id || "")) : g.type === "rasterObject" ? op(up(((v = g.item) == null ? void 0 : v.id) || g.id || "")) : g.item;
      }).filter(Boolean),
      ...R ? Fc().filter((g) => Yn(g)) : []
    ];
    for (const g of u) {
      if (Ln(g)) {
        const k = cn(g);
        if (!(k != null && k.visible)) continue;
        const P = Array.isArray(k.strokePaths) ? k.strokePaths : [];
        for (const V of P) {
          const j = Array.isArray(V == null ? void 0 : V.points) ? V.points : [];
          if (!j.length) continue;
          if (V.closed && j.length >= 3 && xi(a, j)) return { item: g, geom: k };
          const ve = Math.max(8, Number((V == null ? void 0 : V.lineWidth) || 0) * 0.5 + 6);
          for (let ee = 0; ee < j.length - 1; ee += 1)
            if (Wu(a, j[ee], j[ee + 1]) <= ve * ve) return { item: g, geom: k };
          if (j.length === 1 && Ua(a, j[0]) <= ve * ve) return { item: g, geom: k };
        }
        continue;
      }
      if (Ar(g)) {
        const k = cn(g);
        if (!(k != null && k.visible)) continue;
        if (sp(g, k, a)) return { item: g, geom: k };
        continue;
      }
      const v = cn(g);
      if (v.visible && xi(a, v.corners))
        return { item: g, geom: v };
    }
    return null;
  }
  function Ia(a, u, f = null) {
    if (!a || !a.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (ln(f)) return Ad(a, u);
    if (a.kind === "strokeGroup") {
      const g = a.corners.findIndex((k) => Ua(k, u) <= 121);
      if (g >= 0) {
        const k = a.corners[g], P = k.x - a.center.x, V = k.y - a.center.y, j = P * V >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: g, cursor: j };
      }
      const v = Array.isArray(a.strokePaths) ? a.strokePaths : [];
      for (const k of v) {
        const P = Array.isArray(k == null ? void 0 : k.points) ? k.points : [];
        if (k.closed && P.length >= 3 && xi(u, P)) return { kind: "move", cursor: "default" };
        const V = Math.max(8, Number((k == null ? void 0 : k.lineWidth) || 0) * 0.5 + 6);
        for (let j = 0; j < P.length - 1; j += 1)
          if (Wu(u, P[j], P[j + 1]) <= V * V) return { kind: "move", cursor: "default" };
      }
      return xi(u, a.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (a.kind === "rasterObject") {
      const g = a.corners.findIndex((v) => Ua(v, u) <= 121);
      if (g >= 0) {
        const v = a.corners[g], k = v.x - a.center.x, P = v.y - a.center.y, V = k * P >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: g, cursor: V };
      }
      return xi(u, a.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    return NP(a, u, {
      edges: t === "cutout" || Yn(f),
      resize: !(Yn(f) && Ri()),
      emptyCursor: d.mode === "pano" ? "grab" : "default"
    });
  }
  function Sh(a, u) {
    return {
      x0: Math.min(Number((a == null ? void 0 : a.x) || 0), Number((u == null ? void 0 : u.x) || 0)),
      y0: Math.min(Number((a == null ? void 0 : a.y) || 0), Number((u == null ? void 0 : u.y) || 0)),
      x1: Math.max(Number((a == null ? void 0 : a.x) || 0), Number((u == null ? void 0 : u.x) || 0)),
      y1: Math.max(Number((a == null ? void 0 : a.y) || 0), Number((u == null ? void 0 : u.y) || 0))
    };
  }
  function M_(a, u) {
    return !!a && !!u && Number(u.x) >= Number(a.x0) && Number(u.x) <= Number(a.x1) && Number(u.y) >= Number(a.y0) && Number(u.y) <= Number(a.y1);
  }
  function N_(a, u) {
    if (!a || !(u != null && u.visible) || !Array.isArray(u.corners)) return !1;
    if (u.corners.some((v) => M_(a, v))) return !0;
    const f = (Number(a.x0) + Number(a.x1)) * 0.5, g = (Number(a.y0) + Number(a.y1)) * 0.5;
    return !!xi({ x: f, y: g }, u.corners);
  }
  function It(a) {
    if (b_(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? Ot("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" ? Ot("grabbing") : d.interaction.kind === "space_pan" || d.interaction.kind === "frame_pan" ? Ot("move") : d.interaction.kind === "space_orbit" || d.interaction.kind === "frame_orbit" || d.interaction.kind === "world_gizmo" || d.interaction.kind === "roll_frame" ? Ot("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? Ot("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? Ot(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? Ot("grabbing") : Ot("default");
      return;
    }
    if (yh()) {
      Ot("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !r) {
        Ot(nE);
        return;
      }
      if (d.primaryTool !== "cursor") {
        Ot("default");
        return;
      }
      Ot("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      Ot("default");
      return;
    }
    if (d.gizmoAxis) {
      Ot("grab");
      return;
    }
    const u = In(), f = u ? cn(u) : null, g = u ? Dn(u) : !1, v = g ? { kind: "none", cursor: "default" } : Ia(f, a, u);
    if (!g && v.kind !== "none") {
      Ot(v.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && _h(a)) {
      Ot("default");
      return;
    }
    Ot(d.mode === "pano" ? "grab" : "default");
  }
  function ct() {
    if (!X) return;
    if (ie = !1, d.mode === "frame") {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (d.worldSelectedId || lr() && sr()) {
      const v = P_();
      ie = v.visible, wh(v);
      return;
    }
    const a = In(), u = bi();
    if (!a && u.length === 0 || d.interaction) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const f = Ps(), g = RA({
      type: t,
      selected: a,
      selectedItems: u,
      selectedKind: f,
      geom: u.length > 1 ? va(u) : cn(a),
      allLocked: ga(u),
      anyLocked: u.some((v) => Dn(v)),
      selectedLocked: Dn(a),
      activeAspect: Yn(a) && Ri() ? ia : ui(a),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: Fn,
      isStickerHidden: Cs,
      canRestoreSelectedToInitial: l1,
      iconSet: Ue,
      cameraShot: G,
      cameraDeletable: I,
      erpChoice: I,
      coverage: b.coverage
    });
    wh(g);
  }
  function P_() {
    const a = Hi() && !d.interaction ? Sr().space : null;
    if (!(a != null && a.gizmo)) return { visible: !1 };
    const u = Eo(), f = a.stickers.find((P) => P.id === d.worldSelectedId), v = (f ? If(f) : [a.gizmo.transform.position]).map((P) => gs(u, P, F.width, F.height)).filter(Boolean), k = aN(u, a.gizmo.transform.position, a.gizmo.mode, F.width, F.height);
    return VA({ corners: v, gizmoBox: k, gizmoMode: a.gizmo.mode, camera: lr(), deletable: I && lr() });
  }
  function wh(a) {
    var k, P;
    if (!a.visible) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const u = (V, j) => $A(a.anchor, V, j, F.width, F.height), f = Math.max(1, Number(((k = d.menuSize) == null ? void 0 : k.w) || 220)), g = Math.max(1, Number(((P = d.menuSize) == null ? void 0 : P.h) || 40)), v = u(f, g);
    if (!v) {
      D.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    D.selectionMenu = {
      visible: !0,
      left: v.left,
      top: v.top,
      items: a.items
    }, Ee.requestFrame(() => {
      if (!X || D.selectionMenu.visible !== !0) return;
      const V = X.getBoundingClientRect(), j = Math.round(Number((V == null ? void 0 : V.width) || 0)) || 220, ve = Math.round(Number((V == null ? void 0 : V.height) || 0)) || 40;
      d.menuSize = { w: j, h: ve, measured: !0 };
      const ee = u(j, ve);
      ee && (D.selectionMenu.left = ee.left, D.selectionMenu.top = ee.top);
    });
  }
  function Ki() {
    Ct.timer && (clearTimeout(Ct.timer), Ct.timer = 0), Ct.target = null, D.tooltip.visible = !1;
  }
  function A_(a) {
    if (!K || !a || !a.isConnected) return;
    const u = String(a.getAttribute("data-tip") || "").trim();
    if (!u) return;
    D.tooltip.text = u, D.tooltip.visible = !0;
    const f = a;
    Ee.requestFrame(() => {
      var tt, nt;
      if (Ct.target !== f || !K || !(f != null && f.isConnected)) return;
      const g = Ae.getBoundingClientRect(), v = f.getBoundingClientRect(), k = 8, P = 12, V = Math.round(Number(((tt = K.getBoundingClientRect()) == null ? void 0 : tt.width) || 0)) || 100, j = Math.round(Number(((nt = K.getBoundingClientRect()) == null ? void 0 : nt.height) || 0)) || 24, ve = !!f.closest(".pano-floating-left"), ee = !!f.closest(".pano-frame-rail"), ce = !!f.closest(".pano-paint-footer") || !!f.closest(".pano-paint-color-float");
      let we = "", Ye = v.left - g.left + v.width * 0.5 - V * 0.5, Ne = v.top - g.top - j - P;
      if (f.closest(".pano-floating-top") && (Ne = v.bottom - g.top + P), ve)
        we = "tool-rail", Ye = v.right - g.left + 10, Ne = v.top - g.top + v.height * 0.5 - j * 0.5, Ye = Me(Ye, k, Math.max(k, g.width - V - k)), Ne = Me(Ne, k, Math.max(k, g.height - j - k));
      else if (ee)
        we = "frame-rail", Ye = v.left - g.left - V - 10, Ne = v.top - g.top + v.height * 0.5 - j * 0.5, Ye = Me(Ye, k, Math.max(k, g.width - V - k)), Ne = Me(Ne, k, Math.max(k, g.height - j - k));
      else if (ce) {
        we = "footer";
        const St = f.closest(".pano-paint-footer"), dt = St ? St.getBoundingClientRect() : v;
        Ye = dt.left - g.left + dt.width * 0.5 - V * 0.5, Ne = dt.bottom - g.top + 5, Ye = Me(Ye, k, Math.max(k, g.width - V - k)), Ne = Math.max(k, Ne);
      }
      Ye = Me(Ye, k, Math.max(k, g.width - V - k)), Ne = Math.max(k, Ne), D.tooltip.left = Ye, D.tooltip.top = Ne, D.tooltip.variant = we, D.tooltip.visible = !0;
    });
  }
  const on = uf({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (a) => {
      d.viewYaw = Ut(Number(a.yaw || 0)), d.viewPitch = Me(Number(a.pitch || 0), -89.9, 89.9), d.viewFov = Me(Number(a.fov || d.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const a = F.getBoundingClientRect();
      return {
        w: Math.max(1, Number(a.width || F.clientWidth || 0)),
        h: Math.max(1, Number(a.height || F.clientHeight || 0))
      };
    },
    getInvert: () => {
      var a, u;
      return {
        x: (a = b.ui_settings) != null && a.invert_view_x ? -1 : 1,
        y: (u = b.ui_settings) != null && u.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: As,
    onInteraction: () => Ee.requestDraw(Pt.VIEW)
  });
  function C_(a, u, f = {}) {
    var k;
    if ((a == null ? void 0 : a.kind) !== "roll_frame" || !a.shot) return;
    a.accumulatedRad += oy(u, a.lastAngle), a.lastAngle = u;
    const g = ay(a.start.roll_deg, a.accumulatedRad, {
      shiftKey: f.shiftKey,
      altKey: a.altStarted ? !1 : f.altKey
    });
    a.shot.roll_deg = g, a.changed = a.changed || Math.abs(a.accumulatedRad) > 1e-9;
    const v = (((k = D.sidePanel) == null ? void 0 : k.params) || []).find((P) => P.key === "roll_deg");
    v && (v.value = g, v.displayValue = $o(g), v.fillPct = (g + 180) / 360 * 100), ti(), Zc(a), He({ localOnly: !0 });
  }
  function I_(a, u, f = {}) {
    var k;
    if ((a == null ? void 0 : a.kind) !== "roll_frame" || !a.shot || !a.rollGesture) return;
    const g = Ib(a.rollGesture, u, f);
    if (!g) return;
    a.rollGesture = g.gesture, a.center = g.gesture.center, a.lastAngle = g.gesture.lastAngle, a.accumulatedRad = g.gesture.accumulatedRad, a.shot.roll_deg = g.rollDeg, a.changed = a.changed || Math.abs(g.gesture.accumulatedRad) > 1e-9;
    const v = (((k = D.sidePanel) == null ? void 0 : k.params) || []).find((P) => P.key === "roll_deg");
    v && (v.value = g.rollDeg, v.displayValue = $o(g.rollDeg), v.fillPct = (g.rollDeg + 180) / 360 * 100), ti(), Zc(a), He({ localOnly: !0 });
  }
  function xh(a, u) {
    const f = vi(a);
    return Math.atan2(f.y - u.y, f.x - u.x);
  }
  function Zc(a) {
    var P, V;
    if ((a == null ? void 0 : a.kind) !== "roll_frame" || !a.shot) return;
    Ct.timer && (clearTimeout(Ct.timer), Ct.timer = 0), Ct.target = null;
    const u = wr(a.shot), f = (P = F.getBoundingClientRect) == null ? void 0 : P.call(F), g = (V = Ae.getBoundingClientRect) == null ? void 0 : V.call(Ae);
    if (!u || !f || !g || F.width <= 0 || F.height <= 0) return;
    const v = f.width / F.width, k = f.height / F.height;
    D.tooltip.text = `${$o(a.shot.roll_deg)}°`, D.tooltip.left = f.left - g.left + (u.x + u.w * 0.5) * v, D.tooltip.top = f.top - g.top + (u.y + u.h * 0.5) * k + 12, D.tooltip.variant = "roll", D.tooltip.visible = !0;
  }
  function O_(a) {
    var k;
    if (a.button !== 0 || r || d.mode !== "frame") return;
    const u = at();
    if (!u || u.locked === !0) return;
    const f = wr(u);
    if (!f) return;
    const g = { x: f.x + f.w * 0.5, y: f.y + f.h * 0.5 }, v = xh(a, g);
    d.interaction = {
      kind: "roll_frame",
      shot: u,
      center: g,
      lastAngle: v,
      accumulatedRad: 0,
      start: { roll_deg: Number(u.roll_deg ?? u.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (k = B.setPointerCapture) == null || k.call(B, a.pointerId), a.preventDefault(), ti(), Zc(d.interaction), He({ localOnly: !0 });
  }
  B == null || B.addEventListener("pointerdown", O_);
  function E_(a) {
    var u;
    ((u = d.interaction) == null ? void 0 : u.kind) !== "roll_frame" || d.interaction.source !== "knob" || C_(
      d.interaction,
      xh(a, d.interaction.center),
      a
    );
  }
  B == null || B.addEventListener("pointermove", E_);
  function T_() {
    const a = d.interaction;
    (a == null ? void 0 : a.kind) !== "roll_frame" || a.source !== "knob" || (a.changed && (yt(), kt(), it()), d.interaction = null, Ki(), Qr(), ti(), He());
  }
  B == null || B.addEventListener("pointerup", T_), B == null || B.addEventListener("pointercancel", () => Ca()), B == null || B.addEventListener("lostpointercapture", () => {
    var a;
    ((a = d.interaction) == null ? void 0 : a.source) === "knob" && Ca();
  });
  function F_(a) {
    const u = d.mode === "frame" && !r ? at() : null;
    !u || u.locked === !0 || Math.abs(Number(u.roll_deg ?? u.rot_deg ?? 0)) <= 1e-9 || (u.roll_deg = 0, yt(), kt(), it(), ti(), He(), a.preventDefault());
  }
  B == null || B.addEventListener("dblclick", F_);
  function D_(a) {
    Z.selection && (Z.selection = null, Fr());
    const u = vi(a);
    C = u, Ws(u, !0), _a(), on.state.inertia.active = !1, on.state.inertia.vx = 0, on.state.inertia.vy = 0;
    const f = sr(), g = qc(), v = f || g ? zP(jc(), a) : null;
    if (g && v) {
      a.preventDefault(), v === "look" ? mh(u, a.pointerId) : f_(v, u, a.pointerId);
      return;
    }
    if (v === "look") {
      a.preventDefault();
      const ee = Es(a);
      d.interaction = { kind: "view", last: ee, lastTs: performance.now() }, on.startDrag(ee.x, ee.y, a.pointerId, performance.now()), It(u), F.setPointerCapture(a.pointerId);
      return;
    }
    if (v) {
      a.preventDefault(), Tp(v, u, a.pointerId);
      return;
    }
    if ((f || g) && a.button !== 0) {
      a.preventDefault();
      return;
    }
    if (a.button === 1) {
      if (a.preventDefault(), d.mode === "frame") {
        const ee = at();
        if (!ee || r || ee.locked === !0) return;
        d.interaction = {
          kind: "pan_frame",
          shot: ee,
          last: u,
          start: {
            yaw_deg: Number(ee.yaw_deg || 0),
            pitch_deg: Number(ee.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const ee = d.mode === "unwrap" ? u : Es(a);
        d.interaction = { kind: "view", last: ee, lastTs: performance.now() }, on.startDrag(ee.x, ee.y, a.pointerId, performance.now());
      }
      It(u), F.setPointerCapture(a.pointerId);
      return;
    }
    if (a.button !== 0) return;
    if (d.mode === "frame" && (a.altKey || a.shiftKey) && !r) {
      const ee = at(), ce = wr(ee);
      if (!ee || ee.locked === !0 || !ce) return;
      const we = Cb({
        frame: ce,
        point: u,
        startRollDeg: Number(ee.roll_deg ?? ee.rot_deg ?? 0),
        shiftKey: a.shiftKey,
        altKey: a.altKey,
        allowAlt: !0
      });
      if (!we) return;
      d.interaction = {
        kind: "roll_frame",
        shot: ee,
        center: we.center,
        lastAngle: we.lastAngle,
        accumulatedRad: we.accumulatedRad,
        rollGesture: we,
        start: { roll_deg: Number(ee.roll_deg ?? ee.rot_deg ?? 0) },
        changed: !1,
        altStarted: we.source === "alt",
        source: we.source
      }, F.setPointerCapture(a.pointerId), a.preventDefault(), ti(), He({ localOnly: !0 });
      return;
    }
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      mh(u, a.pointerId), a.preventDefault();
      return;
    }
    if (r) {
      d.mode === "pano" && Nh(a, u);
      return;
    }
    if (re && !re.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (ah() || Xc())) {
      if (!Pp()) return;
      gn();
      const ee = d.primaryTool === "mask" ? "mask" : "paint", ce = d.primaryTool === "mask" ? d.maskTool : d.paintTool, we = d.mode === "frame" && Xc() ? at() : null, Ye = { kind: "ERP_GLOBAL" }, Ne = we ? vr(u, we, performance.now()) : Ir(u, performance.now());
      if (!Ne) {
        It(u);
        return;
      }
      d.interaction = {
        kind: ce === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: ee,
        _livePreviewToken: Ko("live"),
        stroke: ce === "lasso_fill" ? vh(ee, ce, [Ne], Ye) : bh(ee, ce, [Ne], Ye)
      }, ko();
      const tt = or(d.interaction);
      if (tt)
        if (d.paintEngine.beginStroke(d.interaction.stroke, tt), d.interaction.kind === "paint_stroke") {
          const nt = d.paintEngine.ensureTarget(tt), St = Number((Ne == null ? void 0 : Ne.u) ?? (Ne == null ? void 0 : Ne.x) ?? 0), dt = Number((Ne == null ? void 0 : Ne.v) ?? (Ne == null ? void 0 : Ne.y) ?? 0);
          d.paintEngine.appendStrokePoint(nt, St, dt, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, tt);
      It(u), F.setPointerCapture(a.pointerId), He();
      return;
    }
    const k = bi(), P = In(), V = k.length > 1 ? va(k) : P ? cn(P) : null;
    if (d.primaryTool === "cursor" && (a.ctrlKey || a.metaKey)) {
      d.interaction = { kind: "marquee_select", start: u, current: u }, It(u), F.setPointerCapture(a.pointerId), He({ localOnly: !0, reason: Pt.OVERLAY });
      return;
    }
    if (d.primaryTool === "cursor" && ei() && sr() && dv(a, u) || d.primaryTool === "cursor" && w && Hi() && L_(a, u)) return;
    if (k.length > 1 && (V != null && V.visible)) {
      if ((k.some((ce) => Dn(ce)) ? { kind: "none" } : Ia(V, u)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: k.map((ce) => ce),
          offset: { x: u.x - V.center.x, y: u.y - V.center.y },
          startCenter: { x: V.center.x, y: V.center.y },
          stickerSnapshots: k.filter((ce) => ln(ce)).map((ce) => ({
            id: String(ce.id || ""),
            yaw_deg: Number(bn(ce).yaw_deg || 0),
            pitch_deg: Number(bn(ce).pitch_deg || 0),
            center: (() => {
              var Ye, Ne;
              const we = cn(ce);
              return we != null && we.visible ? { x: Number(((Ye = we.center) == null ? void 0 : Ye.x) || 0), y: Number(((Ne = we.center) == null ? void 0 : Ne.y) || 0) } : { x: u.x, y: u.y };
            })()
          })),
          strokeSnapshots: k.filter((ce) => Ln(ce)).map((ce) => ({
            id: String(ce.actionGroupId || ce.id || ""),
            layerKind: String(ce.layerKind || "paint"),
            snapshot: _n(xo(ce.actionGroupId, ce.layerKind)),
            frameSnapshot: _n(So(ce.actionGroupId, ce.layerKind)),
            center: (() => {
              var Ye, Ne;
              const we = cn(ce);
              return we != null && we.visible ? { x: Number(((Ye = we.center) == null ? void 0 : Ye.x) || 0), y: Number(((Ne = we.center) == null ? void 0 : Ne.y) || 0) } : { x: u.x, y: u.y };
            })(),
            centerUv: M1(ce.actionGroupId, ce.layerKind)
          })),
          rasterSnapshots: k.filter((ce) => Ar(ce)).map((ce) => ({
            id: Vi(ce.rasterObjectId || ce.id || ""),
            snapshot: _n(Jr().find((we) => String((we == null ? void 0 : we.id) || "") === Vi(ce.rasterObjectId || ce.id || ""))),
            center: (() => {
              var Ye, Ne;
              const we = cn(ce);
              return we != null && we.visible ? { x: Number(((Ye = we.center) == null ? void 0 : Ye.x) || 0), y: Number(((Ne = we.center) == null ? void 0 : Ne.y) || 0) } : { x: u.x, y: u.y };
            })(),
            centerUv: y1(ce)
          }))
        }, It(u), F.setPointerCapture(a.pointerId);
        return;
      }
    } else if (P && (V != null && V.visible)) {
      const ee = Dn(P) ? { kind: "none" } : Ia(V, u, P);
      if (ee.kind === "scale") {
        d.interaction = Ln(P) ? {
          kind: "scale_stroke_group",
          item: P,
          center: V.center,
          startDist: Math.max(1, Math.hypot(u.x - V.center.x, u.y - V.center.y)),
          snapshot: _n(xo(P.actionGroupId, P.layerKind)),
          frameSnapshot: _n(So(P.actionGroupId, P.layerKind)),
          cursor: ee.cursor
        } : Ar(P) ? {
          kind: "scale_raster_object",
          item: P,
          center: V.center,
          startDist: Math.max(1, Math.hypot(u.x - V.center.x, u.y - V.center.y)),
          snapshot: _n(Jr().find((ce) => String((ce == null ? void 0 : ce.id) || "") === Vi(P.rasterObjectId || P.id || ""))),
          cursor: ee.cursor
        } : {
          kind: "scale",
          item: P,
          center: V.center,
          startDist: Math.max(1, Math.hypot(u.x - V.center.x, u.y - V.center.y)),
          startHFOV: Number(bn(P).hFOV_deg || 20),
          startVFOV: Number(bn(P).vFOV_deg || 20),
          cursor: ee.cursor
        }, It(u), F.setPointerCapture(a.pointerId);
        return;
      }
      if (ee.kind === "scale_x" || ee.kind === "scale_y") {
        d.interaction = {
          kind: ee.kind,
          item: P,
          center: V.center,
          startDist: Math.max(1, Math.hypot(u.x - V.center.x, u.y - V.center.y)),
          startHFOV: Number(bn(P).hFOV_deg || 20),
          startVFOV: Number(bn(P).vFOV_deg || 20),
          cursor: ee.cursor,
          edge: ee.edge
        }, It(u), F.setPointerCapture(a.pointerId);
        return;
      }
      if (ee.kind === "rotate") {
        d.interaction = Ln(P) ? {
          kind: "rotate_stroke_group",
          item: P,
          center: V.center,
          startAng: Math.atan2(u.y - V.center.y, u.x - V.center.x),
          snapshot: _n(xo(P.actionGroupId, P.layerKind)),
          frameSnapshot: _n(So(P.actionGroupId, P.layerKind))
        } : {
          kind: "rotate",
          item: P,
          center: V.center,
          startRot: Number(bn(P).rot_deg || bn(P).roll_deg || 0),
          startAng: Math.atan2(u.y - V.center.y, u.x - V.center.x)
        }, It(u), F.setPointerCapture(a.pointerId);
        return;
      }
      if (ee.kind === "move") {
        if (Ln(P)) {
          const ce = d.mode === "frame" ? (() => {
            const we = at();
            return we ? vr(u, we, performance.now()) : null;
          })() : Ir(u, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: P,
            startUv: ce,
            snapshot: _n(xo(P.actionGroupId, P.layerKind)),
            frameSnapshot: _n(So(P.actionGroupId, P.layerKind))
          }, It(u), F.setPointerCapture(a.pointerId);
          return;
        }
        if (Ar(P)) {
          const ce = d.mode === "frame" ? (() => {
            const we = at();
            return we ? vr(u, we, performance.now()) : null;
          })() : Ir(u, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: P,
            startUv: ce,
            snapshot: _n(Jr().find((we) => String((we == null ? void 0 : we.id) || "") === Vi(P.rasterObjectId || P.id || "")))
          }, It(u), F.setPointerCapture(a.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: P,
          offset: { x: u.x - V.center.x, y: u.y - V.center.y }
        }, It(u), F.setPointerCapture(a.pointerId);
        return;
      }
    }
    const j = _h(u);
    if (j) {
      const ee = d.selectedId !== j.item.id;
      if (ee && d.selectedId && (yt(), qn()), Xn(j.item), R && ee && (d.cutoutAspectOpen = !1), ee && it(), ct(), He(), Dn(j.item)) {
        It(u);
        return;
      }
      d.interaction = {
        kind: Ln(j.item) ? "move_stroke_group" : Ar(j.item) ? "move_raster_object" : "move",
        item: j.item,
        offset: { x: u.x - j.geom.center.x, y: u.y - j.geom.center.y },
        startUv: Ln(j.item) || Ar(j.item) ? d.mode === "frame" ? (() => {
          const ce = at();
          return ce ? vr(u, ce, performance.now()) : null;
        })() : Ir(u, performance.now()) : null,
        snapshot: Ln(j.item) ? _n(xo(j.item.actionGroupId, j.item.layerKind)) : Ar(j.item) ? _n(Jr().find((ce) => String((ce == null ? void 0 : ce.id) || "") === Vi(j.item.rasterObjectId || j.item.id || ""))) : null,
        frameSnapshot: Ln(j.item) ? _n(So(j.item.actionGroupId, j.item.layerKind)) : null
      }, It(u), F.setPointerCapture(a.pointerId);
      return;
    }
    const ve = !!d.selectedId;
    ve && (yt(), qn()), ba(), ve && it(), ct(), He(), d.mode === "pano" && Nh(a, u);
  }
  F.onpointerdown = D_;
  function Eo() {
    return Ou(mn(), F.width, F.height, Er());
  }
  function Bi(a, u) {
    return $e.gizmoPointer(a, Eo(), u.x, u.y, F.width, F.height);
  }
  function L_(a, u) {
    var V;
    const f = (V = Sr().space) == null ? void 0 : V.gizmo;
    if (f && Bi("hover", u) !== null && Bi("down", u))
      return d.interaction = {
        kind: "world_gizmo",
        id: d.worldSelectedId,
        mode: f.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: f.transform,
        base: go(Po(), d.frame),
        changed: !1
      }, F.setPointerCapture(a.pointerId), It(u), !0;
    const g = bi(), v = In(), k = g.length > 1 ? g.some((j) => Dn(j)) ? "none" : Ia(va(g), u).kind : v && !Dn(v) ? Ia(cn(v), u, v).kind : "none";
    if (k !== "none" && k !== "move") return !1;
    const P = $e.pickSticker(Eo(), u.x, u.y, F.width, F.height);
    return b.stickers.some((j) => j.id === P && j.placement === "world") ? (d.worldSelectedId !== P && (d.selectedId && (yt(), qn()), Vc(P), it(), ct(), Or(), He()), d.interaction = { kind: "world_select" }, F.setPointerCapture(a.pointerId), !0) : !1;
  }
  function kh(a) {
    var g;
    const f = !!(d.worldSelectedId || lr()) && d.primaryTool === "cursor" && Hi() && !!((g = Sr().space) != null && g.gizmo) ? Bi("hover", a) : null;
    f !== d.gizmoAxis && (d.gizmoAxis = f, de.backgroundDirty = !0, He({ localOnly: !0, reason: Pt.VIEW }));
  }
  function R_(a, u) {
    const f = Bi("move", u);
    if (f && a.camera) {
      for (const [v, k] of Object.entries(tg(a.mode, a.base, a.start, f))) kn(b.camera, v, d.frame, k);
      cr(), a.changed = !0, Ke.request("sidePanel"), He({ localOnly: !0 });
      return;
    }
    const g = b.stickers.find((v) => v.id === a.id);
    !f || !g || (IM(g, d.frame, tg(a.mode, a.base, a.start, f)), a.changed = !0, hn(), Ke.request("sidePanel"), He({ localOnly: !0 }));
  }
  function Mh(a) {
    d.interaction = null, d.gizmoAxis = null, a.kind === "world_gizmo" && (Bi("up", d.pointerPos), de.backgroundDirty = !0, a.changed && (yt(), kt(), it())), It(d.pointerPos), He();
  }
  function Nh(a, u) {
    if (sr()) {
      const g = jc().emptyLeft;
      g && Tp(g, u, a.pointerId);
      return;
    }
    const f = Es(a);
    d.interaction = { kind: "view", last: f, lastTs: performance.now() }, on.startDrag(f.x, f.y, a.pointerId, performance.now()), It(u), F.setPointerCapture(a.pointerId);
  }
  function V_(a, u) {
    if (!_ || !ar.playing || (ar.stop(), a.kind === "frame_pan")) return;
    if (a.kind === "frame_orbit") {
      const v = Pa();
      v && (a.pivot = fh(v, Aa(v), u));
      return;
    }
    if (a.kind === "world_gizmo") {
      const v = b.stickers.find((k) => k.id === a.id);
      a.camera ? a.base = Gi() : v && (a.base = go(v, d.frame));
      return;
    }
    if (a.kind === "move_multi") {
      const v = va(a.items);
      if (!(v != null && v.visible)) return;
      a.offset = { x: u.x - v.center.x, y: u.y - v.center.y }, a.startCenter = { x: v.center.x, y: v.center.y };
      for (const k of a.stickerSnapshots) {
        const P = a.items.find((j) => String((j == null ? void 0 : j.id) || "") === k.id), V = P ? cn(P) : null;
        V != null && V.visible && (k.yaw_deg = Number(bn(P).yaw_deg || 0), k.pitch_deg = Number(bn(P).pitch_deg || 0), k.center = { x: V.center.x, y: V.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(a.kind)) return;
    const f = cn(a.item);
    if (!(f != null && f.visible)) return;
    const g = bn(a.item);
    if (a.kind === "move") {
      a.offset = { x: u.x - f.center.x, y: u.y - f.center.y };
      return;
    }
    if (a.center = f.center, a.kind === "rotate") {
      a.startRot = Number(g.rot_deg || g.roll_deg || 0), a.startAng = Math.atan2(u.y - f.center.y, u.x - f.center.x);
      return;
    }
    a.startDist = Math.max(1, Math.hypot(u.x - f.center.x, u.y - f.center.y)), a.startHFOV = Number(g.hFOV_deg || 20), a.startVFOV = Number(g.vFOV_deg || 20);
  }
  function $_(a) {
    var g, v, k, P, V, j, ve, ee, ce, we, Ye, Ne, tt, nt, St, dt, vt, Tt, vn, Ui, Yi, qe;
    const u = vi(a);
    if (Ws(u, !0), !d.interaction) {
      kh(u), It(u);
      return;
    }
    It(u);
    const f = d.interaction;
    if (C && (u.x !== C.x || u.y !== C.y)) {
      const Be = C;
      C = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(f.kind) || V_(f, Be);
    }
    if (f.kind !== "world_select") {
      if (f.kind === "world_gizmo") {
        R_(f, u);
        return;
      }
      if (f.kind === "paint_stroke") {
        const Be = typeof a.getCoalescedEvents == "function" ? a.getCoalescedEvents() : [a];
        let Ze = !1;
        Be.forEach((st) => {
          const ot = vi(st);
          if (d.mode === "frame") {
            const At = at(), Mt = At ? wr(At) : null;
            if (Mt) {
              const Bt = (ot.x - Mt.x) / Math.max(1, Mt.w), Nt = (ot.y - Mt.y) / Math.max(1, Mt.h);
              if (!(Bt >= 0 && Bt <= 1 && Nt >= 0 && Nt <= 1)) {
                f._outOfFrame = !0;
                return;
              }
              f._outOfFrame && (f._outOfFrame = !1, x_(f));
            }
          }
          __(f, ot, performance.now()) && (Ze = !0);
        }), Ze && He({ localOnly: !0, reason: Pt.PAINT });
        return;
      }
      if (f.kind === "paint_lasso_fill") {
        const Be = typeof a.getCoalescedEvents == "function" ? a.getCoalescedEvents() : [a];
        let Ze = !1;
        if (Be.forEach((st) => {
          const ot = vi(st);
          if (d.mode === "frame") {
            const At = at(), Mt = At ? wr(At) : null;
            if (Mt) {
              const Bt = (ot.x - Mt.x) / Math.max(1, Mt.w), Nt = (ot.y - Mt.y) / Math.max(1, Mt.h);
              if (!(Bt >= 0 && Bt <= 1 && Nt >= 0 && Nt <= 1)) {
                f._outOfFrame = !0;
                return;
              }
              f._outOfFrame && (f._outOfFrame = !1, k_(f));
            }
          }
          S_(f, ot, performance.now()) && (Ze = !0);
        }), Ze) {
          const st = or(f);
          st && d.paintEngine.updateActiveStroke(f.stroke, st), He({ localOnly: !0, reason: Pt.PAINT });
        }
        return;
      }
      if (f.kind === "view") {
        const Be = performance.now(), Ze = d.mode === "unwrap" ? u : Es(a);
        on.moveDrag(Ze.x, Ze.y, d.mode === "unwrap" ? "unwrap" : "pano", Be), f.lastTs = Be, f.last = Ze, He({ localOnly: !0, reason: Pt.VIEW });
        return;
      }
      if (f.kind === "frame_pan" || f.kind === "frame_orbit") {
        p_(f, u);
        return;
      }
      if (f.kind === "space_pan" || f.kind === "space_orbit") {
        const Be = mn();
        Cp(f.kind === "space_pan" ? qm(Be, u.x - f.last.x, u.y - f.last.y, F.width, F.height, f.depth) : Xm(Be, u.x - f.last.x, u.y - f.last.y, F.height, f.pivot)), f.last = u;
        return;
      }
      if (f.kind === "pan_frame") {
        const Be = Gs(f.shot);
        if (!Be || !f.shot) return;
        const Ze = u.x - f.last.x, st = u.y - f.last.y, ot = Ob(f.shot, {
          dx: Ze,
          dy: st,
          focalPx: Be.focalPx,
          invertX: ((g = b.ui_settings) == null ? void 0 : g.invert_view_x) === !0,
          invertY: ((v = b.ui_settings) == null ? void 0 : v.invert_view_y) === !0
        });
        f.shot.yaw_deg = ot.yaw_deg, f.shot.pitch_deg = ot.pitch_deg, f.changed = f.changed || Math.abs(Ze) > 0 || Math.abs(st) > 0, f.last = u, He({ localOnly: !0 });
        return;
      }
      if (f.kind === "roll_frame") {
        if (f.source === "knob") return;
        I_(f, u, a);
        return;
      }
      if (f.kind === "move") {
        const Be = u.x - f.offset.x, Ze = u.y - f.offset.y;
        if (d.mode === "frame" && R) {
          const st = at(), ot = wr(st);
          if (!st || !ot) return;
          const At = {
            x: Me((Be - ot.x) / Math.max(1, ot.w), 0, 1),
            y: Me((Ze - ot.y) / Math.max(1, ot.h), 0, 1)
          }, Mt = Jf(st, At);
          if (!Mt) return;
          const Bt = ll(Mt);
          _r(f.item, { yaw_deg: Bt.yaw, pitch_deg: Bt.pitch });
        } else if (d.mode === "unwrap") {
          const st = As(), ot = Me((Be - st.x) / Math.max(st.w, 1), 0, 1), At = Me((Ze - st.y) / Math.max(st.h, 1), 0, 1);
          _r(f.item, { yaw_deg: Ut(ot * 360 - 180), pitch_deg: Me(90 - At * 180, -90, 90) });
        } else {
          const st = gp(Be, Ze), ot = ll(st);
          _r(f.item, { yaw_deg: ot.yaw, pitch_deg: ot.pitch });
        }
        ln(f.item) && hn(), He({ localOnly: !0 });
        return;
      }
      if (f.kind === "move_stroke_group") {
        const Be = d.mode === "frame" ? (() => {
          const ot = at();
          return ot ? vr(u, ot, performance.now()) : null;
        })() : Ir(u, performance.now());
        if (!Be || !f.startUv) return;
        const Ze = Ts(Number(Be.u || 0), Number(f.startUv.u || 0)), st = Number(Be.v || 0) - Number(f.startUv.v || 0);
        Cn((k = f.item) == null ? void 0 : k.actionGroupId, Ze, st, f.snapshot, (P = f.item) == null ? void 0 : P.layerKind, f.frameSnapshot) && (Cr({ rebuildPaintEngine: !1 }), He({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (f.kind === "move_raster_object") {
        const Be = d.mode === "frame" ? (() => {
          const ot = at();
          return ot ? vr(u, ot, performance.now()) : null;
        })() : Ir(u, performance.now());
        if (!Be || !f.startUv) return;
        const Ze = Ts(Number(Be.u || 0), Number(f.startUv.u || 0)), st = Number(Be.v || 0) - Number(f.startUv.v || 0);
        Fi(((V = f.item) == null ? void 0 : V.rasterObjectId) || ((j = f.item) == null ? void 0 : j.id) || "", Ze, st, f.snapshot) && (Mo(), He({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (f.kind === "scale_raster_object") {
        const Ze = Math.max(1, Math.hypot(u.x - f.center.x, u.y - f.center.y)) / Math.max(1, Number(f.startDist || 1));
        Ms(((ve = f.item) == null ? void 0 : ve.rasterObjectId) || ((ee = f.item) == null ? void 0 : ee.id) || "", Ze, f.snapshot) && (Mo(), He({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (f.kind === "move_multi") {
        const Be = u.x - Number(((ce = f.offset) == null ? void 0 : ce.x) || 0), Ze = u.y - Number(((we = f.offset) == null ? void 0 : we.y) || 0);
        let st = !1, ot = !1, At = !1;
        const Mt = Be - Number(((Ye = f.startCenter) == null ? void 0 : Ye.x) || Be), Bt = Ze - Number(((Ne = f.startCenter) == null ? void 0 : Ne.y) || Ze);
        for (const Nt of Array.isArray(f.stickerSnapshots) ? f.stickerSnapshots : []) {
          const an = (t === "cutout" ? p1() : Li()).find((Zt) => String((Zt == null ? void 0 : Zt.id) || "") === String(Nt.id || ""));
          if (!an || !ln(an)) continue;
          const Vn = {
            x: Number(((tt = Nt.center) == null ? void 0 : tt.x) || 0) + Mt,
            y: Number(((nt = Nt.center) == null ? void 0 : nt.y) || 0) + Bt
          };
          if (d.mode === "frame" && R) {
            const Zt = at(), un = wr(Zt);
            if (!Zt || !un) continue;
            const Xi = {
              x: Me((Vn.x - un.x) / Math.max(1, un.w), 0, 1),
              y: Me((Vn.y - un.y) / Math.max(1, un.h), 0, 1)
            }, Yh = Jf(Zt, Xi);
            if (!Yh) continue;
            const Xh = ll(Yh);
            _r(an, { yaw_deg: Xh.yaw, pitch_deg: Xh.pitch });
          } else if (d.mode === "unwrap") {
            const Zt = As(), un = Me((Vn.x - Zt.x) / Math.max(Zt.w, 1), 0, 1), Xi = Me((Vn.y - Zt.y) / Math.max(Zt.h, 1), 0, 1);
            _r(an, { yaw_deg: Ut(un * 360 - 180), pitch_deg: Me(90 - Xi * 180, -90, 90) });
          } else {
            const Zt = gp(Vn.x, Vn.y), un = ll(Zt);
            _r(an, { yaw_deg: un.yaw, pitch_deg: un.pitch });
          }
          st = !0;
        }
        for (const Nt of Array.isArray(f.strokeSnapshots) ? f.strokeSnapshots : []) {
          const an = {
            x: Number(((St = Nt.center) == null ? void 0 : St.x) || 0) + Mt,
            y: Number(((dt = Nt.center) == null ? void 0 : dt.y) || 0) + Bt
          }, Vn = d.mode === "frame" ? (() => {
            const un = at();
            return un ? vr(an, un, performance.now()) : null;
          })() : Ir(an, performance.now()), Zt = Nt.centerUv || null;
          if (Vn && Zt) {
            const un = Ts(Number(Vn.u || 0), Number(Zt.u || 0)), Xi = Number(Vn.v || 0) - Number(Zt.v || 0);
            Cn(Nt.id, un, Xi, Nt.snapshot, Nt.layerKind, Nt.frameSnapshot) && (st = !0, ot = !0);
          }
        }
        for (const Nt of Array.isArray(f.rasterSnapshots) ? f.rasterSnapshots : []) {
          const an = {
            x: Number(((vt = Nt.center) == null ? void 0 : vt.x) || 0) + Mt,
            y: Number(((Tt = Nt.center) == null ? void 0 : Tt.y) || 0) + Bt
          }, Vn = d.mode === "frame" ? (() => {
            const un = at();
            return un ? vr(an, un, performance.now()) : null;
          })() : Ir(an, performance.now()), Zt = Nt.centerUv || null;
          if (Vn && Zt) {
            const un = Ts(Number(Vn.u || 0), Number(Zt.u || 0)), Xi = Number(Vn.v || 0) - Number(Zt.v || 0);
            Fi(Nt.id, un, Xi, Nt.snapshot) && (st = !0, At = !0);
          }
        }
        st && (ot ? Cr({ rebuildPaintEngine: !1 }) : At ? Mo() : hn(), He({ localOnly: !0 }));
        return;
      }
      if (f.kind === "scale_stroke_group") {
        const Ze = Math.max(1, Math.hypot(u.x - f.center.x, u.y - f.center.y)) / Math.max(1, Number(f.startDist || 1));
        ir((vn = f.item) == null ? void 0 : vn.actionGroupId, Ze, 0, f.snapshot, (Ui = f.item) == null ? void 0 : Ui.layerKind, f.frameSnapshot) && (Cr({ rebuildPaintEngine: !1 }), He({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (f.kind === "rotate_stroke_group") {
        let Be = (Math.atan2(u.y - f.center.y, u.x - f.center.x) - Number(f.startAng || 0)) * so;
        a.shiftKey && (Be = Math.round(Be / 45) * 45), ir((Yi = f.item) == null ? void 0 : Yi.actionGroupId, 1, Be, f.snapshot, (qe = f.item) == null ? void 0 : qe.layerKind, f.frameSnapshot) && (Cr({ rebuildPaintEngine: !1 }), He({ localOnly: !0, reason: Pt.PAINT }));
        return;
      }
      if (f.kind === "marquee_select") {
        f.current = u, He({ localOnly: !0, reason: Pt.OVERLAY });
        return;
      }
      if (f.kind === "scale") {
        const Ze = Math.max(1, Math.hypot(u.x - f.center.x, u.y - f.center.y)) / f.startDist;
        _r(f.item, { hFOV_deg: Me(f.startHFOV * Ze, 1, 179), vFOV_deg: Me(f.startVFOV * Ze, 1, 179) }), Zr(f.item) || (f.item.aspect_id = ao(f.item)), ln(f.item) && hn(), He({ localOnly: !0 });
        return;
      }
      if (f.kind === "scale_x") {
        const Ze = Math.max(1, Math.hypot(u.x - f.center.x, u.y - f.center.y)) / f.startDist;
        _r(f.item, { hFOV_deg: Me(f.startHFOV * Ze, 1, 179) }), Zr(f.item) || (f.item.aspect_id = ao(f.item)), ln(f.item) && hn(), He({ localOnly: !0 });
        return;
      }
      if (f.kind === "scale_y") {
        const Ze = Math.max(1, Math.hypot(u.x - f.center.x, u.y - f.center.y)) / f.startDist;
        _r(f.item, { vFOV_deg: Me(f.startVFOV * Ze, 1, 179) }), Zr(f.item) || (f.item.aspect_id = ao(f.item)), ln(f.item) && hn(), He({ localOnly: !0 });
        return;
      }
      if (f.kind === "rotate") {
        let Ze = (Math.atan2(u.y - f.center.y, u.x - f.center.x) - f.startAng) * so, st = f.startRot - Ze;
        a.shiftKey && (st = Math.round(st / 45) * 45), _r(f.item, { [ln(f.item) ? "rot_deg" : "roll_deg"]: st }), ln(f.item) && hn(), He({ localOnly: !0 });
      }
    }
  }
  F.onpointermove = $_;
  function z_() {
    var u, f, g, v, k, P, V;
    const a = d.interaction;
    if (!((a == null ? void 0 : a.kind) === "roll_frame" && a.source === "knob")) {
      if ((a == null ? void 0 : a.kind) === "space_pan" || (a == null ? void 0 : a.kind) === "space_orbit") {
        d.interaction = null, It(d.pointerPos), ct();
        return;
      }
      if ((a == null ? void 0 : a.kind) === "world_select" || (a == null ? void 0 : a.kind) === "world_gizmo") {
        Mh(a);
        return;
      }
      if (((u = d.interaction) == null ? void 0 : u.kind) === "paint_stroke" || ((f = d.interaction) == null ? void 0 : f.kind) === "paint_lasso_fill") {
        ko();
        const j = Jc(d.interaction), ve = !!d.interaction._hasCommittedSegments;
        if (j || ve) {
          Cr();
          const ee = String(((g = d.interaction.stroke) == null ? void 0 : g.actionGroupId) || "").trim();
          if (ee) {
            const we = wo().find((Ye) => String((Ye == null ? void 0 : Ye.actionGroupId) || "") === ee);
            we && (we.frame = null);
          }
          const ce = or(d.interaction);
          ce && (j ? String(((v = d.interaction.stroke) == null ? void 0 : v.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(ce), D1()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, ce) : d.paintEngine.cancelActiveStroke(ce)), yt(), qn(), it(), ct(), e.setDirtyCanvas(!0, !0), He();
        } else {
          const ee = or(d.interaction);
          ee && d.paintEngine.cancelActiveStroke(ee);
        }
      } else if (((k = d.interaction) == null ? void 0 : k.kind) === "marquee_select") {
        const j = Sh(d.interaction.start, d.interaction.current), ee = [
          ...t === "cutout" ? Fc().filter((ce) => !Yn(ce)) : [...Li()],
          ...v1(),
          ...b1()
        ].filter((ce) => N_(j, cn(ce)));
        V1(ee, ((P = ee[ee.length - 1]) == null ? void 0 : P.id) || null), R && ee.length && (d.cutoutAspectOpen = !1), it(), ct(), He();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((V = d.interaction) == null ? void 0 : V.kind))
        d.interaction.changed && (yt(), kt(), it());
      else if (d.interaction && d.interaction.kind !== "view") {
        let j = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (j = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (j = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (j = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (j = !0), j && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? Cr({ rebuildPaintEngine: !0 }) : Mo()), yt(), qn(), e.setDirtyCanvas(!0, !0), Oo(), ct(), He();
      }
      d.interaction = null, (a == null ? void 0 : a.kind) === "roll_frame" && Ki(), ko(), a && a.kind === "view" && xa(() => on.endDrag(performance.now())), Qr(), ct(), It(d.pointerPos), He();
    }
  }
  F.onpointerup = z_;
  function j_() {
    var a, u, f, g, v;
    if (!Ca()) {
      if (((a = d.interaction) == null ? void 0 : a.kind) === "world_select" || ((u = d.interaction) == null ? void 0 : u.kind) === "world_gizmo") {
        Mh(d.interaction);
        return;
      }
      if (((f = d.interaction) == null ? void 0 : f.kind) === "view" && xa(() => on.endDrag(performance.now())), ((g = d.interaction) == null ? void 0 : g.kind) === "paint_stroke" || ((v = d.interaction) == null ? void 0 : v.kind) === "paint_lasso_fill") {
        ko();
        const k = or(d.interaction);
        k && d.paintEngine.cancelActiveStroke(k);
      }
      d.interaction = null, ko(), Qr(), It(d.pointerPos), He({ localOnly: !0 });
    }
  }
  F.onpointercancel = j_, F.onlostpointercapture = () => {
    Ca();
  }, F.onauxclick = (a) => {
    a.button === 1 && a.preventDefault();
  }, F.oncontextmenu = (a) => {
    (sr() || qc()) && jP(jc(), 2) && a.preventDefault();
  };
  function H_(a) {
    const u = vi(a), f = Ws(u, !0);
    d.interaction || (It(u), f && d.mode === "frame" && d.primaryTool === "cursor" && He({ localOnly: !0, reason: Pt.OVERLAY }));
  }
  F.onmousemove = H_, F.onpointerleave = () => {
    d.interaction || kh({ x: -1e6, y: -1e6 });
  }, F.onmouseleave = () => {
    Ws(d.pointerPos, !1), It(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && He({ localOnly: !0, reason: Pt.OVERLAY });
  };
  function G_(a) {
    if (d.mode === "frame") {
      const u = vi(a), f = Hl(a);
      f && gn(), f && qc() ? h_(u, -f) : f && d_(u, f) && He({ localOnly: !0 }), a.preventDefault();
      return;
    }
    if (d.mode === "pano") {
      if (_a(), sr()) {
        const u = Hl(a);
        u && nv(vi(a), -u);
      } else on.applyWheelEvent(a) && He({ localOnly: !0, reason: Pt.VIEW });
      a.preventDefault();
    }
  }
  F.onwheel = G_;
  function W_(a) {
    t !== "stickers" && t !== "cutout" || r || (a.preventDefault(), $i(!0));
  }
  F.ondragover = W_;
  function K_(a) {
    var g;
    if (t !== "stickers" && t !== "cutout" || r) return;
    a.preventDefault(), a.stopPropagation(), Et.depth = 0, $i(!1);
    const f = Array.from(((g = a.dataTransfer) == null ? void 0 : g.files) || []).find((v) => Mr(v));
    f && Qp(f);
  }
  F.ondrop = K_;
  function Ph(a) {
    t !== "stickers" && t !== "cutout" || r || $c(a) && (Et.depth += 1, $i(!0), a.preventDefault());
  }
  function Ah(a) {
    t !== "stickers" && t !== "cutout" || r || (!Et.active && $c(a) && $i(!0), Et.active && a.preventDefault());
  }
  function Ch(a) {
    if (t !== "stickers" && t !== "cutout" || r || !Et.active) return;
    Et.depth = Math.max(0, Et.depth - 1);
    const u = Number(a.clientX) <= 0 && Number(a.clientY) <= 0;
    (Et.depth === 0 || u) && $i(!1);
  }
  function Ih(a) {
    t !== "stickers" && t !== "cutout" || r || (Et.depth = 0, $i(!1), $c(a) && a.preventDefault());
  }
  window.addEventListener("dragenter", Ph, !0), window.addEventListener("dragover", Ah, !0), window.addEventListener("dragleave", Ch, !0), window.addEventListener("drop", Ih, !0);
  function Oh() {
    const { canUndo: a, canRedo: u } = tp();
    Vo(D.toolButtons, "value", "undo", { disabled: !a }), Vo(D.toolButtons, "value", "redo", { disabled: !u });
  }
  function Eh(a, u, f = !1) {
    var ve;
    gn();
    const g = R && d.mode === "frame" ? at() : null, v = g || In(), k = g ? "shot" : Ps(), P = Po();
    if (P && !Ls(P) || !P && (!v || k === "stroke" || Dn(v))) return;
    const V = (((ve = D.sidePanel) == null ? void 0 : ve.params) || []).find((ee) => ee.key === a);
    if (!V || V.enabled === !1) return;
    let j = Number(u);
    if (Number.isNaN(j) && (j = 0), (P || G) && YO.has(a) ? j = a === "scale" ? Math.max(j, $g) : j : j = Me(j, Number(V.min), Number(V.max)), a === "yaw_deg" && (j = Ut(j)), !P && G && a.startsWith("position_")) {
      cr(), NM(b.camera, d.frame, a, j), it(), He(), f && yt();
      return;
    }
    if (P) {
      CM(P, d.frame, a, j), hn(), it(), He(), f && yt();
      return;
    }
    a === "opacity" ? PM(v, d.frame, j / 100) : _r(v, { [a]: j }), R && !Zr(v) && (a === "hFOV_deg" || a === "vFOV_deg") && (v.aspect_id = ao(v)), it(), He(), f && yt();
  }
  async function B_(a) {
    var g, v, k, P, V, j, ve;
    const u = a.target.closest("[data-action]");
    if (!u) return;
    const f = String(u.getAttribute("data-action") || "");
    if (f === "coverage-set") {
      const ee = Gn(u.getAttribute("data-coverage"));
      if (ee === Gn(b.coverage)) return;
      b.coverage = ee, d.coverage = ee, c && (c.value = String(ee)), o ? de.backgroundDirty = !0 : (qn(), c_({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), it(), ct(), He();
      return;
    }
    if (f === "toggle-selection-picker") {
      if ((v = (g = D.sidePanel) == null ? void 0 : g.selectionPicker) != null && v.disabled) return;
      D.sidePanel.selectionPicker.open = !D.sidePanel.selectionPicker.open;
      return;
    }
    if (f === "select-picker-item") {
      D.sidePanel.selectionPicker.open = !1;
      const ee = String(u.getAttribute("data-selection-id") || "");
      let ce = null;
      if (ee && (t === "stickers" ? ce = [...Li(), ...I ? b.shots : []].find((we) => String((we == null ? void 0 : we.id) || "") === ee) || null : ce = ((k = Qf().find((we) => {
        var Ye;
        return String(((Ye = we == null ? void 0 : we.item) == null ? void 0 : Ye.id) || "") === ee;
      })) == null ? void 0 : k.item) || null), Xn(ce || null), ce && !Ln(ce)) {
        const we = bn(ce);
        wp(Ut(Number(we.yaw_deg || 0)), Me(Number(we.pitch_deg || 0), -89.9, 89.9));
      }
      it(), ct(), He();
      return;
    }
    if (f === "copy-state-inline") {
      const ee = In(), ce = Ps();
      if (!ee || ce === "stroke" || bi().length > 1) return;
      const we = JSON.stringify(R && ce !== "image" ? kp(ee) : X1(bn(ee)));
      try {
        await navigator.clipboard.writeText(we), (P = D.sidePanel) != null && P.copyStateButton && (D.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Ye;
          (Ye = D.sidePanel) != null && Ye.copyStateButton && (D.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (f === "set-invert-x") {
      b.ui_settings.invert_view_x = u.getAttribute("data-value") === "1", Yc(), it(), (V = e.setDirtyCanvas) == null || V.call(e, !0, !0), He();
      return;
    }
    if (f === "set-invert-y") {
      b.ui_settings.invert_view_y = u.getAttribute("data-value") === "1", Yc(), it(), (j = e.setDirtyCanvas) == null || j.call(e, !0, !0), He();
      return;
    }
    if (f === "ui-reset-defaults") {
      b.ui_settings.invert_view_x = !1, b.ui_settings.invert_view_y = !1, Yc(), it(), (ve = e.setDirtyCanvas) == null || ve.call(e, !0, !0), He();
      return;
    }
    if (f === "close-preview") {
      Fo();
      return;
    }
    if (f === "cancel-close") {
      Fo();
      return;
    }
    f === "save-close" && (s_(), Fo());
  }
  he == null || he.addEventListener("click", B_);
  function U_(a) {
    const u = a.target.closest("[data-action='param-input']");
    u && Eh(String(u.getAttribute("data-param-key") || ""), u.value, !1);
  }
  he == null || he.addEventListener("input", U_);
  function Y_(a) {
    const u = a.target.closest("[data-action='param-input']");
    u && Eh(String(u.getAttribute("data-param-key") || ""), u.value, !0);
  }
  he == null || he.addEventListener("change", Y_);
  const Qc = () => Or();
  Qc();
  function X_(a) {
    var ve, ee, ce, we, Ye;
    if ((ee = (ve = a.target) == null ? void 0 : ve.matches) != null && ee.call(ve, "[data-confirm-overlay]")) {
      const Ne = (ce = D.confirmDialog) == null ? void 0 : ce.resolve;
      D.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Ne == null || Ne(!1);
      return;
    }
    const u = a.target.closest("[data-space-mode]");
    if (u) {
      ev(u.getAttribute("data-space-mode"));
      return;
    }
    const f = a.target.closest("[data-gizmo-mode]");
    if (f) {
      d.gizmoMode = f.getAttribute("data-gizmo-mode"), de.backgroundDirty = !0, ct(), He({ localOnly: !0, reason: Pt.VIEW });
      return;
    }
    const g = a.target.closest("[data-view]");
    if (g) {
      if (g.getAttribute("aria-disabled") === "true") return;
      const Ne = d.mode;
      d.mode = String(g.getAttribute("data-view") || "pano"), R && d.mode === "frame" && (Ne !== "frame" && (de.frameSafeRect = null), it(), ct()), Na(), Qr(), He();
      return;
    }
    const v = a.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (v && !r) {
      if (v.matches("[data-tool-mode]")) {
        const Ne = String(v.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = Ne, (Ne === "paint" || Ne === "mask") && ba({ preservePanelValues: !0 }), Rn(), it(), ct(), He();
        return;
      }
      if (v.matches("[data-tool-ui-action]")) {
        const Ne = String(v.getAttribute("data-tool-ui-action") || "");
        if ((Ne === "undo" || Ne === "redo") && v.disabled) return;
        Ne === "undo" ? Rc(-1) : Ne === "redo" ? Rc(1) : Ne === "clear" ? t_() : Ne === "add" || Ne === "add-image" ? jv() : Ne === "add-world" ? Hv() : Ne === "add-or-look" ? qv() : Ne === "add-camera" && Jv();
        return;
      }
      if (v.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const Ne = String(v.getAttribute("data-paint-tool") || "pen");
        d.paintTool = Ne, ba({ preservePanelValues: !0 }), Hn[Ne] && (d.activeBrushPresetId = Ne), Rn(), it(), ct(), He();
        return;
      }
      if (v.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(v.getAttribute("data-mask-tool") || "pen"), ba({ preservePanelValues: !0 }), Rn(), it(), ct(), He();
        return;
      }
      if (v.matches("[data-paint-layer-clear-current]")) {
        const Ne = String(v.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        n_(Ne);
        return;
      }
      if (v.matches("[data-paint-color-swatch]")) {
        const Ne = Il.find((tt) => tt.id === v.getAttribute("data-paint-color-swatch"));
        if (!Ne) return;
        d.paintColor = Jn(Ne.color), lt(!0), Rn();
        return;
      }
      if (v.matches("[data-paint-color-custom]")) {
        a.preventDefault(), a.stopPropagation(), re && !re.hidden ? lt(!0) : M(), Rn();
        return;
      }
    }
    const k = String(((we = v == null ? void 0 : v.getAttribute) == null ? void 0 : we.call(v, "data-action")) || "");
    if (k === "video-play-toggle") {
      if (a.preventDefault(), a.stopPropagation(), !(Pe instanceof HTMLVideoElement)) return;
      Ds.resumeAfterScrub = !1, Bc();
      return;
    }
    if (k === "video-audio-toggle") {
      a.preventDefault(), a.stopPropagation(), vp(), typeof (v == null ? void 0 : v.blur) == "function" && v.blur();
      return;
    }
    if (k === "video-loop-toggle") {
      if (a.preventDefault(), a.stopPropagation(), !(Pe instanceof HTMLVideoElement)) return;
      const Ne = !D.videoTransport.loop;
      D.videoTransport.loop = Ne, Pe.loop = Ne, bp({
        hasAudio: D.videoTransport.hasAudio,
        loop: Ne,
        muted: Pe.muted,
        volume: Number(Pe.volume ?? D.videoTransport.volume ?? 1)
      }), typeof (v == null ? void 0 : v.blur) == "function" && v.blur();
      return;
    }
    if (!r) {
      if (k === "frame-aspect") {
        D.frameRail.aspectOpen = !D.frameRail.aspectOpen;
        return;
      }
      if (k === "frame-aspect-set") {
        const Ne = d.mode === "frame" ? at() : null;
        if (!Ne || Ne.locked === !0) return;
        th(Ne, String(v.getAttribute("data-aspect") || "1:1")), D.frameRail.aspectOpen = !1, Oo(), yt(), kt(), Qr(), it(), ct(), He();
        return;
      }
      if (k === "frame-aspect-custom") {
        const Ne = d.mode === "frame" ? at() : null, tt = v.getAttribute("data-custom-width"), nt = v.getAttribute("data-custom-height");
        if (!Ne || !a_(Ne, tt, nt)) return;
        D.frameRail.aspectOpen = !1, Oo(), yt(), kt(), Qr(), He();
        return;
      }
      if (k === "frame-rotate-90") {
        const Ne = d.mode === "frame" ? at() : null;
        if (!Ne || Ne.locked === !0) return;
        ih(Ne), D.frameRail.aspectOpen = !1, Oo(), yt(), kt(), Qr(), He();
        return;
      }
      if (k === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, ct(), He();
        return;
      }
      if (k === "aspect-set") {
        const Ne = In();
        if (!Ne) return;
        const tt = String(v.getAttribute("data-aspect") || "1:1");
        th(Ne, tt), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Oo(), yt(), kt(), ct(), He();
        return;
      }
      if (k === "rotate-90") {
        const Ne = In();
        if (!Ne || Ri()) return;
        ih(Ne), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Oo(), yt(), kt(), ct(), He();
        return;
      }
      if (k === "bring-front") {
        ya();
        return;
      }
      if (k === "send-back") {
        R1();
        return;
      }
      if (k === "duplicate") {
        r_();
        return;
      }
      if (k === "replace-image") {
        Uv();
        return;
      }
      if (k === "toggle-lock") {
        G1();
        return;
      }
      if (k === "back-initial") {
        L1();
        return;
      }
      if (k === "toggle-visible") {
        H1();
        return;
      }
      if (k === "delete") {
        rh();
        return;
      }
    }
    if (k === "reset-view") {
      if (d.mode === "frame") return;
      zi(
        { position: Ao(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Ye = Er()) == null ? void 0 : Ye.radius) || xr },
        { mode: Cl(d.spaceMode, d.viewTransition), moved: !1 }
      );
      return;
    }
    if (k === "frame-view") {
      if (!sr() || Cl(d.spaceMode, d.viewTransition) !== "6dof") return;
      tv();
      return;
    }
    if (k === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, kE(e == null ? void 0 : e.id, d.showGrid), Qc(), He();
      return;
    }
    if (k === "toggle-fullscreen") {
      a.preventDefault(), a.stopPropagation(), nS();
      return;
    }
    if (k === "toggle-output-preview-size") {
      a.preventDefault(), a.stopPropagation();
      const Ne = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = Ne, xa(() => {
        d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = Ne ? 1 : 0, d.outputPreviewAnimStartTs = performance.now();
      }), Rh(), He();
      return;
    }
    const P = a.target.closest("[data-paint-history-index]");
    if (!P) return;
    const V = Number(P.getAttribute("data-paint-history-index")), j = d.customPaintHistory[V];
    j && (d.customPaintColor = Jn(j), d.paintColor = Jn(j), Rn());
  }
  L.addEventListener("click", X_);
  function q_(a) {
    const u = a.target.closest("[data-video-seek]");
    if (u) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      ar.playing && (Ds.resumeAfterScrub = !0), ar.seek(io(Number(u.value || 0), C1()));
      return;
    }
    const f = a.target.closest("[data-video-volume]");
    if (f) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      const k = Me(Number(f.value || 0), 0, 1);
      Pe.volume = k, Pe.muted = k <= 1e-4, bp({
        hasAudio: D.videoTransport.hasAudio,
        muted: Pe.muted,
        volume: k
      });
      return;
    }
    const g = a.target.closest("[data-paint-size-slider]");
    if (g) {
      if (g.disabled) return;
      const k = Math.max(1, Math.min(120, Math.round(Number(g.value)))), P = Wi(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[P] = k, Rn(), v_();
      return;
    }
    const v = a.target.closest("[data-paint-alpha-slider]");
    if (v) {
      const k = { ...d.customPaintColor, a: Me(Number(v.value) / 100, 0, 1) };
      d.customPaintColor = Jn(k), d.paintColor = Jn(k), Rn();
    }
  }
  L.addEventListener("input", q_);
  function J_(a) {
    var u;
    if (a.target.closest("[data-video-seek]")) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      Ds.resumeAfterScrub && ar.play(), Ds.resumeAfterScrub = !1;
      return;
    }
    if (a.target.closest("[data-video-volume]")) {
      typeof ((u = a.target) == null ? void 0 : u.blur) == "function" && a.target.blur();
      return;
    }
    a.target.closest("[data-paint-size-slider]") && Ks();
  }
  L.addEventListener("change", J_), L.addEventListener("pointerup", (a) => {
    var u;
    if (a.target.closest("[data-video-volume]")) {
      typeof ((u = a.target) == null ? void 0 : u.blur) == "function" && a.target.blur();
      return;
    }
    a.target.closest("[data-paint-size-slider]") && Ks();
  }), L.addEventListener("pointercancel", (a) => {
    var u;
    if (a.target.closest("[data-video-volume]")) {
      typeof ((u = a.target) == null ? void 0 : u.blur) == "function" && a.target.blur();
      return;
    }
    a.target.closest("[data-paint-size-slider]") && Ks();
  }), L.addEventListener("focusout", (a) => {
    a.target.closest("[data-paint-size-slider]") && Ks();
  });
  function Z_(a) {
    const u = a.target.closest("[data-tip]");
    !u || !L.contains(u) || Ct.target !== u && (Ct.target = u, Ct.timer && clearTimeout(Ct.timer), Ct.timer = window.setTimeout(() => {
      Ct.target === u && A_(u);
    }, 220));
  }
  L.addEventListener("pointerover", Z_);
  function Q_(a) {
    var g, v;
    const u = a.target.closest("[data-tip]");
    !u || Ct.target !== u || (a.relatedTarget instanceof Element ? (v = (g = a.relatedTarget).closest) == null ? void 0 : v.call(g, "[data-tip]") : null) === u || Ki();
  }
  L.addEventListener("pointerout", Q_), L.addEventListener("pointerdown", (a) => {
    a.target.closest("[data-frame-roll-knob]") || Ki();
  });
  function eS(a, u) {
    var V;
    if (!_e) return;
    const f = _e.getBoundingClientRect(), g = Me((a - f.left) / Math.max(1, f.width), 0, 1), v = 1 - Me((u - f.top) / Math.max(1, f.height), 0, 1), k = Bu(d.customPaintColor), P = { ...Ku(k.h, g, v), a: Number(((V = d.customPaintColor) == null ? void 0 : V.a) ?? 1) };
    d.customPaintColor = Jn(P), d.paintColor = Jn(P), Rn();
  }
  function tS(a) {
    var k;
    if (!Le) return;
    const u = Le.getBoundingClientRect(), f = Me((a - u.left) / Math.max(1, u.width), 0, 1), g = Bu(d.customPaintColor), v = { ...Ku(f, g.s, g.v), a: Number(((k = d.customPaintColor) == null ? void 0 : k.a) ?? 1) };
    d.customPaintColor = Jn(v), d.paintColor = Jn(v), Rn();
  }
  function Th(a, u) {
    const f = a.pointerId;
    u(a);
    const g = (k) => {
      k.pointerId === f && u(k);
    }, v = (k) => {
      k.pointerId === f && (window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", v));
    };
    window.addEventListener("pointermove", g), window.addEventListener("pointerup", v), window.addEventListener("pointercancel", v);
  }
  _e && (_e.onpointerdown = (a) => {
    a.preventDefault(), a.stopPropagation(), Th(a, (u) => eS(u.clientX, u.clientY));
  }), Le && (Le.onpointerdown = (a) => {
    a.preventDefault(), a.stopPropagation(), Th(a, (u) => tS(u.clientX));
  }), L.addEventListener("click", (a) => {
    var v;
    const u = a.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!u) return;
    const f = u.getAttribute("data-action") === "confirm-accept", g = (v = D.confirmDialog) == null ? void 0 : v.resolve;
    D.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, g == null || g(f);
  });
  function Fh() {
    const a = !!d.fullscreen;
    Vo(D.floatingButtons, "action", "toggle-fullscreen", {
      icon: a ? Ue.fullscreen_close : Ue.fullscreen,
      label: a ? "Exit Fullscreen" : "Fullscreen",
      tip: a ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Us(a) {
    const u = !!a;
    d.fullscreen !== u && (d.fullscreen = u, L.classList.toggle("pano-modal-fullscreen", u), u ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Qc(), Fh(), T1(), He());
  }
  const Dh = () => document.fullscreenElement === oe;
  async function nS() {
    var a, u;
    try {
      if (!document.fullscreenEnabled) {
        Us(!d.fullscreen);
        return;
      }
      Dh() ? await ((u = document.exitFullscreen) == null ? void 0 : u.call(document)) : await ((a = oe.requestFullscreen) == null ? void 0 : a.call(oe));
    } catch {
      Us(!d.fullscreen);
    }
  }
  function Lh() {
    document.fullscreenEnabled && Us(Dh());
  }
  document.addEventListener("fullscreenchange", Lh), Fh();
  function Rh() {
    const a = !!d.outputPreviewExpanded;
    D.outputPreviewToggle.icon = a ? Ue.fullscreen_close : Ue.fullscreen, D.outputPreviewToggle.label = a ? "Reduce Preview" : "Expand Preview", D.outputPreviewToggle.tip = a ? "Reduce preview" : "Expand preview";
  }
  Rh();
  const eu = e.onConnectionsChange;
  let tu = null, Vh = () => {
  };
  !r && t === "stickers" && (Vh = Lb(e, (a = "sync") => {
    a === "executed" && (WE(J, dc), No(), w && $v()), Mp(a);
  }, { editor: !0 }), tu = function(...u) {
    typeof eu == "function" && eu.apply(this, u), No(), pi(this, "connections");
  }, e.onConnectionsChange = tu), !r && !N && Bg.set(String(e.id ?? "0"), () => yp());
  let To = null;
  async function Fo() {
    return To || (To = (async () => {
      var a, u, f, g, v, k, P, V;
      return Bg.delete(String(e.id ?? "0")), m_(), r || qn(), document.fullscreenElement === oe && ((a = document.exitFullscreen) == null || a.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Lh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === oh && (e.__panoFlushStateBeforeQueue = null), (f = (u = e.__panoDomPreview) == null ? void 0 : u.requestDraw) == null || f.call(u), (v = (g = e.graph) == null ? void 0 : g.setDirtyCanvas) == null || v.call(g, !0, !0), (V = (P = (k = Qn) == null ? void 0 : k.canvas) == null ? void 0 : P.setDirty) == null || V.call(P, !0, !0), Ki(), Ke.cancel(), Tv(), Pe instanceof HTMLVideoElement && Pe.pause(), W1.forEach((j) => {
        try {
          j();
        } catch {
        }
      }), $e.dispose(), $i(!1), window.removeEventListener("keydown", $h, !0), window.removeEventListener("keydown", zh, !0), window.removeEventListener("keydown", Hh, !0), window.removeEventListener("keyup", Gh, !0), window.removeEventListener("keydown", Ys, !0), window.removeEventListener("keyup", Ys, !0), window.removeEventListener("blur", Wh), window.removeEventListener("keydown", Kh, !0), window.removeEventListener("dragenter", Ph, !0), window.removeEventListener("dragover", Ah, !0), window.removeEventListener("dragleave", Ch, !0), window.removeEventListener("drop", Ih, !0), !r && t === "stickers" && (e.onConnectionsChange === tu && (e.onConnectionsChange = eu), Vh()), xe.unmount(), se.remove(), l_(), To = null, !0;
    })().catch((a) => (console.error("[PanoramaCutoutSync] closeEditor failed", a), To = null, !1)), To);
  }
  function $h(a) {
    var u, f, g, v, k;
    if (a.key === "Escape") {
      if (Ca()) {
        a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === oe) {
        a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a), (g = document.exitFullscreen) == null || g.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        a.preventDefault(), a.stopPropagation(), (v = a.stopImmediatePropagation) == null || v.call(a), Us(!1);
        return;
      }
      a.preventDefault(), a.stopPropagation(), (k = a.stopImmediatePropagation) == null || k.call(a), Fo();
    }
  }
  function zh(a) {
    const u = String(a.key || ""), f = String(a.code || ""), g = Number(a.keyCode || 0);
    if (!(u === "Delete" || f === "Delete" || g === 46) && !(u === "Backspace" || f === "Backspace" || g === 8)) return;
    const P = a.target, V = ((P == null ? void 0 : P.tagName) || "").toUpperCase();
    if (V === "INPUT" || V === "TEXTAREA" || P != null && P.isContentEditable) return;
    if (Z.selection) {
      Vv(), a.preventDefault(), a.stopPropagation();
      return;
    }
    if (i_()) {
      a.preventDefault(), a.stopPropagation();
      return;
    }
    In() && (rh(), a.preventDefault(), a.stopPropagation());
  }
  function jh(a) {
    if (a.code !== "Space" || a.ctrlKey || a.metaKey || a.altKey || r || !_ || !D.timeline.visible || D.confirmDialog.visible) return !1;
    const u = a.composedPath()[0];
    if (u !== document.body && u !== document.documentElement && !oe.contains(u)) return !1;
    const f = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    return f === "INPUT" ? !UO.has(String(u.type || "text").toLowerCase()) : f !== "TEXTAREA" && f !== "SELECT" && !(u != null && u.isContentEditable);
  }
  function Hh(a) {
    jh(a) && (a.preventDefault(), a.stopPropagation(), a.repeat || Bc());
  }
  function Gh(a) {
    jh(a) && (a.preventDefault(), a.stopPropagation());
  }
  function Ys(a) {
    const u = !!(a.ctrlKey || a.metaKey), f = !!a.altKey;
    d.marqueeModifier === u && d.altModifier === f || (d.marqueeModifier = u, d.altModifier = f, ti(), It(d.pointerPos));
  }
  function Wh() {
    d.marqueeModifier = !1, d.altModifier = !1, ti(), It(d.pointerPos);
  }
  function Kh(a) {
    if (r || !a.ctrlKey && !a.metaKey) return;
    const u = String(a.key || "").toLowerCase(), f = String(a.code || "");
    if (u !== "z" && f !== "KeyZ") return;
    const g = a.target, v = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (v === "INPUT" || v === "TEXTAREA" || g != null && g.isContentEditable) return;
    const { canUndo: k, canRedo: P } = tp();
    a.shiftKey && !P || !a.shiftKey && !k || (Rc(a.shiftKey ? 1 : -1), a.preventDefault(), a.stopPropagation());
  }
  window.addEventListener("keydown", $h, !0), window.addEventListener("keydown", zh, !0), window.addEventListener("keydown", Hh, !0), window.addEventListener("keyup", Gh, !0), window.addEventListener("keydown", Ys, !0), window.addEventListener("keyup", Ys, !0), window.addEventListener("blur", Wh), window.addEventListener("keydown", Kh, !0), oe.addEventListener("pointerdown", (a) => {
    a.target === oe && Fo();
  });
  function Lr(a, u, { rollbackState: f = !1 } = {}) {
    let g = "";
    try {
      f && (g = JSON.stringify(b)), u();
    } catch (v) {
      if (g)
        try {
          const k = JSON.parse(g);
          Object.keys(b).forEach((P) => delete b[P]), Object.assign(b, k), r || qn();
        } catch (k) {
          console.error(`[PanoramaStickers] editor boot step "${a}" rollback failed`, k);
        }
      D.stageWarningDetail = `boot:${a}`, console.error(`[PanoramaStickers] editor boot step "${a}" failed`, v);
    }
  }
  Lr("cutout-focus", Ti), !r && t === "stickers" && Lr("external-sticker-sync", () => Mp("open"), { rollbackState: !0 }), Yv().catch((a) => {
    D.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', a);
  }), Lr("history", yt), Lr("undo-redo", Oh), Lr("paint-ui", Rn), Lr("side-panel", it), Lr("look-at-frame", zc), Lr("video-source", No), Lr("canvas-size", $s), Lr("cursor", () => It(d.pointerPos)), He(), pe = Fx("editor", () => {
    var a;
    return {
      type: t,
      readOnly: r,
      mode: d.mode,
      interaction: ((a = d.interaction) == null ? void 0 : a.kind) ?? null,
      timelineDrag: !!Z.drag,
      playing: !!ar.playing
    };
  });
}
Qn.registerExtension(JP({
  app: Qn,
  openEditor: KE,
  attachStickers: dA,
  attachCutout: fA,
  attachPreview: uA,
  restoreOutput: J2,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: QO
}));
