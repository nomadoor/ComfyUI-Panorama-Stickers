import * as vl from "../../scripts/app.js";
import { app as sr } from "../../scripts/app.js";
import { api as sn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function sd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ht = {}, ta = [], Jr = () => {
}, _0 = () => !1, _c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sc = (e) => e.startsWith("onUpdate:"), Dn = Object.assign, ld = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, XS = Object.prototype.hasOwnProperty, Ft = (e, t) => XS.call(e, t), mt = Array.isArray, na = (e) => Os(e) === "[object Map]", S0 = (e) => Os(e) === "[object Set]", xm = (e) => Os(e) === "[object Date]", vt = (e) => typeof e == "function", pn = (e) => typeof e == "string", ei = (e) => typeof e == "symbol", jt = (e) => e !== null && typeof e == "object", w0 = (e) => (jt(e) || vt(e)) && vt(e.then) && vt(e.catch), x0 = Object.prototype.toString, Os = (e) => x0.call(e), qS = (e) => Os(e).slice(8, -1), k0 = (e) => Os(e) === "[object Object]", cd = (e) => pn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, is = /* @__PURE__ */ sd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, JS = /-\w/g, zn = wc(
  (e) => e.replace(JS, (t) => t.slice(1).toUpperCase())
), ZS = /\B([A-Z])/g, xo = wc(
  (e) => e.replace(ZS, "-$1").toLowerCase()
), xc = wc((e) => e.charAt(0).toUpperCase() + e.slice(1)), vu = wc(
  (e) => e ? `on${xc(e)}` : ""
), Yr = (e, t) => !Object.is(e, t), _l = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, M0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, ud = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let km;
const kc = () => km || (km = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zt(e) {
  if (mt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = pn(r) ? nw(r) : zt(r);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (pn(e) || jt(e))
    return e;
}
const QS = /;(?![^(]*\))/g, ew = /:([^]+)/, tw = /\/\*[^]*?\*\//g;
function nw(e) {
  const t = {};
  return e.replace(tw, "").split(QS).forEach((n) => {
    if (n) {
      const r = n.split(ew);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (pn(e))
    t = e;
  else if (mt(e))
    for (let n = 0; n < e.length; n++) {
      const r = xt(e[n]);
      r && (t += r + " ");
    }
  else if (jt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const rw = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", iw = /* @__PURE__ */ sd(rw);
function N0(e) {
  return !!e || e === "";
}
function ow(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = fd(e[r], t[r]);
  return n;
}
function fd(e, t) {
  if (e === t) return !0;
  let n = xm(e), r = xm(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ei(e), r = ei(t), n || r)
    return e === t;
  if (n = mt(e), r = mt(t), n || r)
    return n && r ? ow(e, t) : !1;
  if (n = jt(e), r = jt(t), n || r) {
    if (!n || !r)
      return !1;
    const i = Object.keys(e).length, a = Object.keys(t).length;
    if (i !== a)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (l && !u || !l && u || !fd(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const P0 = (e) => !!(e && e.__v_isRef === !0), bt = (e) => pn(e) ? e : e == null ? "" : mt(e) || jt(e) && (e.toString === x0 || !vt(e.toString)) ? P0(e) ? bt(e.value) : JSON.stringify(e, A0, 2) : String(e), A0 = (e, t) => P0(t) ? A0(e, t.value) : na(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], a) => (n[_u(r, a) + " =>"] = i, n),
    {}
  )
} : S0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _u(n))
} : ei(t) ? _u(t) : jt(t) && !mt(t) && !k0(t) ? String(t) : t, _u = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ei(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Un;
class aw {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Un, !t && Un && (this.index = (Un.scopes || (Un.scopes = [])).push(
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
      const n = Un;
      try {
        return Un = this, t();
      } finally {
        Un = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Un, Un = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Un = this.prevScope, this.prevScope = void 0);
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
function sw() {
  return Un;
}
let Gt;
const Su = /* @__PURE__ */ new WeakSet();
class C0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Un && Un.active && Un.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Su.has(this) && (Su.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || O0(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mm(this), E0(this);
    const t = Gt, n = Er;
    Gt = this, Er = !0;
    try {
      return this.fn();
    } finally {
      T0(this), Gt = t, Er = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hd(t);
      this.deps = this.depsTail = void 0, Mm(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Su.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hf(this) && this.run();
  }
  get dirty() {
    return hf(this);
  }
}
let I0 = 0, os, as;
function O0(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = as, as = e;
    return;
  }
  e.next = os, os = e;
}
function dd() {
  I0++;
}
function pd() {
  if (--I0 > 0)
    return;
  if (as) {
    let t = as;
    for (as = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; os; ) {
    let t = os;
    for (os = void 0; t; ) {
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
function E0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function T0(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), hd(r), lw(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function hf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (F0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function F0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ms) || (e.globalVersion = ms, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hf(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Gt, r = Er;
  Gt = e, Er = !0;
  try {
    E0(e);
    const i = e.fn(e._value);
    (t.version === 0 || Yr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Gt = n, Er = r, T0(e), e.flags &= -3;
  }
}
function hd(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      hd(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lw(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Er = !0;
const D0 = [];
function _i() {
  D0.push(Er), Er = !1;
}
function Si() {
  const e = D0.pop();
  Er = e === void 0 ? !0 : e;
}
function Mm(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Gt;
    Gt = void 0;
    try {
      t();
    } finally {
      Gt = n;
    }
  }
}
let ms = 0;
class cw {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class md {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Gt || !Er || Gt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Gt)
      n = this.activeLink = new cw(Gt, this), Gt.deps ? (n.prevDep = Gt.depsTail, Gt.depsTail.nextDep = n, Gt.depsTail = n) : Gt.deps = Gt.depsTail = n, L0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Gt.depsTail, n.nextDep = void 0, Gt.depsTail.nextDep = n, Gt.depsTail = n, Gt.deps === n && (Gt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, ms++, this.notify(t);
  }
  notify(t) {
    dd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      pd();
    }
  }
}
function L0(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        L0(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const mf = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ Symbol(
  ""
), gf = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
);
function In(e, t, n) {
  if (Er && Gt) {
    let r = mf.get(e);
    r || mf.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new md()), i.map = r, i.key = n), i.track();
  }
}
function hi(e, t, n, r, i, a) {
  const s = mf.get(e);
  if (!s) {
    ms++;
    return;
  }
  const l = (u) => {
    u && u.trigger();
  };
  if (dd(), t === "clear")
    s.forEach(l);
  else {
    const u = mt(e), h = u && cd(n);
    if (u && n === "length") {
      const p = Number(r);
      s.forEach((g, b) => {
        (b === "length" || b === gs || !ei(b) && b >= p) && l(g);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(gs)), t) {
        case "add":
          u ? h && l(s.get("length")) : (l(s.get(ho)), na(e) && l(s.get(gf)));
          break;
        case "delete":
          u || (l(s.get(ho)), na(e) && l(s.get(gf)));
          break;
        case "set":
          na(e) && l(s.get(ho));
          break;
      }
  }
  pd();
}
function Ho(e) {
  const t = /* @__PURE__ */ Tt(e);
  return t === e ? t : (In(t, "iterate", gs), /* @__PURE__ */ br(e) ? t : t.map(Tr));
}
function Mc(e) {
  return In(e = /* @__PURE__ */ Tt(e), "iterate", gs), e;
}
function Br(e, t) {
  return /* @__PURE__ */ wi(e) ? da(/* @__PURE__ */ mo(e) ? Tr(t) : t) : Tr(t);
}
const uw = {
  __proto__: null,
  [Symbol.iterator]() {
    return wu(this, Symbol.iterator, (e) => Br(this, e));
  },
  concat(...e) {
    return Ho(this).concat(
      ...e.map((t) => mt(t) ? Ho(t) : t)
    );
  },
  entries() {
    return wu(this, "entries", (e) => (e[1] = Br(this, e[1]), e));
  },
  every(e, t) {
    return li(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return li(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Br(this, r)),
      arguments
    );
  },
  find(e, t) {
    return li(
      this,
      "find",
      e,
      t,
      (n) => Br(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return li(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return li(
      this,
      "findLast",
      e,
      t,
      (n) => Br(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return li(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return li(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return xu(this, "includes", e);
  },
  indexOf(...e) {
    return xu(this, "indexOf", e);
  },
  join(e) {
    return Ho(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return li(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return za(this, "pop");
  },
  push(...e) {
    return za(this, "push", e);
  },
  reduce(e, ...t) {
    return Nm(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nm(this, "reduceRight", e, t);
  },
  shift() {
    return za(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return li(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return za(this, "splice", e);
  },
  toReversed() {
    return Ho(this).toReversed();
  },
  toSorted(e) {
    return Ho(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ho(this).toSpliced(...e);
  },
  unshift(...e) {
    return za(this, "unshift", e);
  },
  values() {
    return wu(this, "values", (e) => Br(this, e));
  }
};
function wu(e, t, n) {
  const r = Mc(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ br(e) && (i._next = i.next, i.next = () => {
    const a = i._next();
    return a.done || (a.value = n(a.value)), a;
  }), i;
}
const fw = Array.prototype;
function li(e, t, n, r, i, a) {
  const s = Mc(e), l = s !== e && !/* @__PURE__ */ br(e), u = s[t];
  if (u !== fw[t]) {
    const g = u.apply(e, a);
    return l ? Tr(g) : g;
  }
  let h = n;
  s !== e && (l ? h = function(g, b) {
    return n.call(this, Br(e, g), b, e);
  } : n.length > 2 && (h = function(g, b) {
    return n.call(this, g, b, e);
  }));
  const p = u.call(s, h, r);
  return l && i ? i(p) : p;
}
function Nm(e, t, n, r) {
  const i = Mc(e), a = i !== e && !/* @__PURE__ */ br(e);
  let s = n, l = !1;
  i !== e && (a ? (l = r.length === 0, s = function(h, p, g) {
    return l && (l = !1, h = Br(e, h)), n.call(this, h, Br(e, p), g, e);
  }) : n.length > 3 && (s = function(h, p, g) {
    return n.call(this, h, p, g, e);
  }));
  const u = i[t](s, ...r);
  return l ? Br(e, u) : u;
}
function xu(e, t, n) {
  const r = /* @__PURE__ */ Tt(e);
  In(r, "iterate", gs);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ bd(n[0]) ? (n[0] = /* @__PURE__ */ Tt(n[0]), r[t](...n)) : i;
}
function za(e, t, n = []) {
  _i(), dd();
  const r = (/* @__PURE__ */ Tt(e))[t].apply(e, n);
  return pd(), Si(), r;
}
const dw = /* @__PURE__ */ sd("__proto__,__v_isRef,__isVue"), R0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ei)
);
function pw(e) {
  ei(e) || (e = String(e));
  const t = /* @__PURE__ */ Tt(this);
  return In(t, "has", e), t.hasOwnProperty(e);
}
class V0 {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (i ? a ? xw : H0 : a ? j0 : z0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = mt(t);
    if (!i) {
      let u;
      if (s && (u = uw[n]))
        return u;
      if (n === "hasOwnProperty")
        return pw;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Fn(t) ? t : r
    );
    if ((ei(n) ? R0.has(n) : dw(n)) || (i || In(t, "get", n), a))
      return l;
    if (/* @__PURE__ */ Fn(l)) {
      const u = s && cd(n) ? l : l.value;
      return i && jt(u) ? /* @__PURE__ */ bf(u) : u;
    }
    return jt(l) ? i ? /* @__PURE__ */ bf(l) : /* @__PURE__ */ ba(l) : l;
  }
}
class $0 extends V0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let a = t[n];
    const s = mt(t) && cd(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ wi(a);
      if (!/* @__PURE__ */ br(r) && !/* @__PURE__ */ wi(r) && (a = /* @__PURE__ */ Tt(a), r = /* @__PURE__ */ Tt(r)), !s && /* @__PURE__ */ Fn(a) && !/* @__PURE__ */ Fn(r))
        return h || (a.value = r), !0;
    }
    const l = s ? Number(n) < t.length : Ft(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Fn(t) ? t : i
    );
    return t === /* @__PURE__ */ Tt(i) && (l ? Yr(r, a) && hi(t, "set", n, r) : hi(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = Ft(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && hi(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ei(n) || !R0.has(n)) && In(t, "has", n), r;
  }
  ownKeys(t) {
    return In(
      t,
      "iterate",
      mt(t) ? "length" : ho
    ), Reflect.ownKeys(t);
  }
}
class hw extends V0 {
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
const mw = /* @__PURE__ */ new $0(), gw = /* @__PURE__ */ new hw(), yw = /* @__PURE__ */ new $0(!0);
const yf = (e) => e, nl = (e) => Reflect.getPrototypeOf(e);
function bw(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, a = /* @__PURE__ */ Tt(i), s = na(a), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, h = i[e](...r), p = n ? yf : t ? da : Tr;
    return !t && In(
      a,
      "iterate",
      u ? gf : ho
    ), Dn(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: g, done: b } = h.next();
          return b ? { value: g, done: b } : {
            value: l ? [p(g[0]), p(g[1])] : p(g),
            done: b
          };
        }
      }
    );
  };
}
function rl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vw(e, t) {
  const n = {
    get(i) {
      const a = this.__v_raw, s = /* @__PURE__ */ Tt(a), l = /* @__PURE__ */ Tt(i);
      e || (Yr(i, l) && In(s, "get", i), In(s, "get", l));
      const { has: u } = nl(s), h = t ? yf : e ? da : Tr;
      if (u.call(s, i))
        return h(a.get(i));
      if (u.call(s, l))
        return h(a.get(l));
      a !== s && a.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && In(/* @__PURE__ */ Tt(i), "iterate", ho), i.size;
    },
    has(i) {
      const a = this.__v_raw, s = /* @__PURE__ */ Tt(a), l = /* @__PURE__ */ Tt(i);
      return e || (Yr(i, l) && In(s, "has", i), In(s, "has", l)), i === l ? a.has(i) : a.has(i) || a.has(l);
    },
    forEach(i, a) {
      const s = this, l = s.__v_raw, u = /* @__PURE__ */ Tt(l), h = t ? yf : e ? da : Tr;
      return !e && In(u, "iterate", ho), l.forEach((p, g) => i.call(a, h(p), h(g), s));
    }
  };
  return Dn(
    n,
    e ? {
      add: rl("add"),
      set: rl("set"),
      delete: rl("delete"),
      clear: rl("clear")
    } : {
      add(i) {
        const a = /* @__PURE__ */ Tt(this), s = nl(a), l = /* @__PURE__ */ Tt(i), u = !t && !/* @__PURE__ */ br(i) && !/* @__PURE__ */ wi(i) ? l : i;
        return s.has.call(a, u) || Yr(i, u) && s.has.call(a, i) || Yr(l, u) && s.has.call(a, l) || (a.add(u), hi(a, "add", u, u)), this;
      },
      set(i, a) {
        !t && !/* @__PURE__ */ br(a) && !/* @__PURE__ */ wi(a) && (a = /* @__PURE__ */ Tt(a));
        const s = /* @__PURE__ */ Tt(this), { has: l, get: u } = nl(s);
        let h = l.call(s, i);
        h || (i = /* @__PURE__ */ Tt(i), h = l.call(s, i));
        const p = u.call(s, i);
        return s.set(i, a), h ? Yr(a, p) && hi(s, "set", i, a) : hi(s, "add", i, a), this;
      },
      delete(i) {
        const a = /* @__PURE__ */ Tt(this), { has: s, get: l } = nl(a);
        let u = s.call(a, i);
        u || (i = /* @__PURE__ */ Tt(i), u = s.call(a, i)), l && l.call(a, i);
        const h = a.delete(i);
        return u && hi(a, "delete", i, void 0), h;
      },
      clear() {
        const i = /* @__PURE__ */ Tt(this), a = i.size !== 0, s = i.clear();
        return a && hi(
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
    n[i] = bw(i, e, t);
  }), n;
}
function gd(e, t) {
  const n = vw(e, t);
  return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    Ft(n, i) && i in r ? n : r,
    i,
    a
  );
}
const _w = {
  get: /* @__PURE__ */ gd(!1, !1)
}, Sw = {
  get: /* @__PURE__ */ gd(!1, !0)
}, ww = {
  get: /* @__PURE__ */ gd(!0, !1)
};
const z0 = /* @__PURE__ */ new WeakMap(), j0 = /* @__PURE__ */ new WeakMap(), H0 = /* @__PURE__ */ new WeakMap(), xw = /* @__PURE__ */ new WeakMap();
function kw(e) {
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
function Mw(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kw(qS(e));
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return /* @__PURE__ */ wi(e) ? e : yd(
    e,
    !1,
    mw,
    _w,
    z0
  );
}
// @__NO_SIDE_EFFECTS__
function Nw(e) {
  return yd(
    e,
    !1,
    yw,
    Sw,
    j0
  );
}
// @__NO_SIDE_EFFECTS__
function bf(e) {
  return yd(
    e,
    !0,
    gw,
    ww,
    H0
  );
}
function yd(e, t, n, r, i) {
  if (!jt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = Mw(e);
  if (a === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    a === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return /* @__PURE__ */ wi(e) ? /* @__PURE__ */ mo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Tt(t) : e;
}
function Pw(e) {
  return !Ft(e, "__v_skip") && Object.isExtensible(e) && M0(e, "__v_skip", !0), e;
}
const Tr = (e) => jt(e) ? /* @__PURE__ */ ba(e) : e, da = (e) => jt(e) ? /* @__PURE__ */ bf(e) : e;
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ln(e) {
  return G0(e, !1);
}
// @__NO_SIDE_EFFECTS__
function zl(e) {
  return G0(e, !0);
}
function G0(e, t) {
  return /* @__PURE__ */ Fn(e) ? e : new Aw(e, t);
}
class Aw {
  constructor(t, n) {
    this.dep = new md(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Tt(t), this._value = n ? t : Tr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ br(t) || /* @__PURE__ */ wi(t);
    t = r ? t : /* @__PURE__ */ Tt(t), Yr(t, n) && (this._rawValue = t, this._value = r ? t : Tr(t), this.dep.trigger());
  }
}
function ht(e) {
  return /* @__PURE__ */ Fn(e) ? e.value : e;
}
const Cw = {
  get: (e, t, n) => t === "__v_raw" ? e : ht(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Fn(i) && !/* @__PURE__ */ Fn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function K0(e) {
  return /* @__PURE__ */ mo(e) ? e : new Proxy(e, Cw);
}
class Iw {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new md(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Gt !== this)
      return O0(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return F0(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ow(e, t, n = !1) {
  let r, i;
  return vt(e) ? r = e : (r = e.get, i = e.set), new Iw(r, i, n);
}
const il = {}, jl = /* @__PURE__ */ new WeakMap();
let so;
function Ew(e, t = !1, n = so) {
  if (n) {
    let r = jl.get(n);
    r || jl.set(n, r = []), r.push(e);
  }
}
function Tw(e, t, n = Ht) {
  const { immediate: r, deep: i, once: a, scheduler: s, augmentJob: l, call: u } = n, h = ($) => i ? $ : /* @__PURE__ */ br($) || i === !1 || i === 0 ? mi($, 1) : mi($);
  let p, g, b, x, S = !1, k = !1;
  if (/* @__PURE__ */ Fn(e) ? (g = () => e.value, S = /* @__PURE__ */ br(e)) : /* @__PURE__ */ mo(e) ? (g = () => h(e), S = !0) : mt(e) ? (k = !0, S = e.some(($) => /* @__PURE__ */ mo($) || /* @__PURE__ */ br($)), g = () => e.map(($) => {
    if (/* @__PURE__ */ Fn($))
      return $.value;
    if (/* @__PURE__ */ mo($))
      return h($);
    if (vt($))
      return u ? u($, 2) : $();
  })) : vt(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (b) {
      _i();
      try {
        b();
      } finally {
        Si();
      }
    }
    const $ = so;
    so = p;
    try {
      return u ? u(e, 3, [x]) : e(x);
    } finally {
      so = $;
    }
  } : g = Jr, t && i) {
    const $ = g, v = i === !0 ? 1 / 0 : i;
    g = () => mi($(), v);
  }
  const N = sw(), I = () => {
    p.stop(), N && N.active && ld(N.effects, p);
  };
  if (a && t) {
    const $ = t;
    t = (...v) => {
      $(...v), I();
    };
  }
  let j = k ? new Array(e.length).fill(il) : il;
  const R = ($) => {
    if (!(!(p.flags & 1) || !p.dirty && !$))
      if (t) {
        const v = p.run();
        if (i || S || (k ? v.some((H, B) => Yr(H, j[B])) : Yr(v, j))) {
          b && b();
          const H = so;
          so = p;
          try {
            const B = [
              v,
              // pass undefined as the old value when it's changed for the first time
              j === il ? void 0 : k && j[0] === il ? [] : j,
              x
            ];
            j = v, u ? u(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            so = H;
          }
        }
      } else
        p.run();
  };
  return l && l(R), p = new C0(g), p.scheduler = s ? () => s(R, !1) : R, x = ($) => Ew($, !1, p), b = p.onStop = () => {
    const $ = jl.get(p);
    if ($) {
      if (u)
        u($, 4);
      else
        for (const v of $) v();
      jl.delete(p);
    }
  }, t ? r ? R(!0) : j = p.run() : s ? s(R.bind(null, !0), !0) : p.run(), I.pause = p.pause.bind(p), I.resume = p.resume.bind(p), I.stop = I, I;
}
function mi(e, t = 1 / 0, n) {
  if (t <= 0 || !jt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fn(e))
    mi(e.value, t, n);
  else if (mt(e))
    for (let r = 0; r < e.length; r++)
      mi(e[r], t, n);
  else if (S0(e) || na(e))
    e.forEach((r) => {
      mi(r, t, n);
    });
  else if (k0(e)) {
    for (const r in e)
      mi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && mi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Es(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Nc(i, t, n);
  }
}
function ti(e, t, n, r) {
  if (vt(e)) {
    const i = Es(e, t, n, r);
    return i && w0(i) && i.catch((a) => {
      Nc(a, t, n);
    }), i;
  }
  if (mt(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(ti(e[a], t, n, r));
    return i;
  }
}
function Nc(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ht;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let g = 0; g < p.length; g++)
          if (p[g](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (a) {
      _i(), Es(a, null, 10, [
        e,
        u,
        h
      ]), Si();
      return;
    }
  }
  Fw(e, n, i, r, s);
}
function Fw(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Vn = [];
let Wr = -1;
const ra = [];
let Ti = null, Yo = 0;
const W0 = /* @__PURE__ */ Promise.resolve();
let Hl = null;
function Pc(e) {
  const t = Hl || W0;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dw(e) {
  let t = Wr + 1, n = Vn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = Vn[r], a = ys(i);
    a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function vd(e) {
  if (!(e.flags & 1)) {
    const t = ys(e), n = Vn[Vn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ys(n) ? Vn.push(e) : Vn.splice(Dw(t), 0, e), e.flags |= 1, B0();
  }
}
function B0() {
  Hl || (Hl = W0.then(Y0));
}
function Lw(e) {
  mt(e) ? ra.push(...e) : Ti && e.id === -1 ? Ti.splice(Yo + 1, 0, e) : e.flags & 1 || (ra.push(e), e.flags |= 1), B0();
}
function Pm(e, t, n = Wr + 1) {
  for (; n < Vn.length; n++) {
    const r = Vn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Vn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function U0(e) {
  if (ra.length) {
    const t = [...new Set(ra)].sort(
      (n, r) => ys(n) - ys(r)
    );
    if (ra.length = 0, Ti) {
      Ti.push(...t);
      return;
    }
    for (Ti = t, Yo = 0; Yo < Ti.length; Yo++) {
      const n = Ti[Yo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ti = null, Yo = 0;
  }
}
const ys = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Y0(e) {
  try {
    for (Wr = 0; Wr < Vn.length; Wr++) {
      const t = Vn[Wr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Es(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Wr < Vn.length; Wr++) {
      const t = Vn[Wr];
      t && (t.flags &= -2);
    }
    Wr = -1, Vn.length = 0, U0(), Hl = null, (Vn.length || ra.length) && Y0();
  }
}
let lr = null, X0 = null;
function Gl(e) {
  const t = lr;
  return lr = e, X0 = e && e.type.__scopeId || null, t;
}
function q0(e, t = lr, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && $m(-1);
    const a = Gl(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Gl(a), r._d && $m(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vi(e, t) {
  if (lr === null)
    return e;
  const n = Ec(lr), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, s, l, u = Ht] = t[i];
    a && (vt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && mi(s), r.push({
      dir: a,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function eo(e, t, n, r) {
  const i = e.dirs, a = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    a && (l.oldValue = a[s].value);
    let u = l.dir[r];
    u && (_i(), ti(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Si());
  }
}
function Rw(e, t) {
  if (On) {
    let n = On.provides;
    const r = On.parent && On.parent.provides;
    r === n && (n = On.provides = Object.create(r)), n[e] = t;
  }
}
function Sl(e, t, n = !1) {
  const r = Dx();
  if (r || ia) {
    let i = ia ? ia._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && vt(t) ? t.call(r && r.proxy) : t;
  }
}
const Vw = /* @__PURE__ */ Symbol.for("v-scx"), $w = () => Sl(Vw);
function go(e, t, n) {
  return J0(e, t, n);
}
function J0(e, t, n = Ht) {
  const { immediate: r, deep: i, flush: a, once: s } = n, l = Dn({}, n), u = t && r || !t && a !== "post";
  let h;
  if (vs) {
    if (a === "sync") {
      const x = $w();
      h = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!u) {
      const x = () => {
      };
      return x.stop = Jr, x.resume = Jr, x.pause = Jr, x;
    }
  }
  const p = On;
  l.call = (x, S, k) => ti(x, p, S, k);
  let g = !1;
  a === "post" ? l.scheduler = (x) => {
    Bn(x, p && p.suspense);
  } : a !== "sync" && (g = !0, l.scheduler = (x, S) => {
    S ? x() : vd(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), g && (x.flags |= 2, p && (x.id = p.uid, x.i = p));
  };
  const b = Tw(e, t, l);
  return vs && (h ? h.push(b) : u && b()), b;
}
function zw(e, t, n) {
  const r = this.proxy, i = pn(e) ? e.includes(".") ? Z0(r, e) : () => r[e] : e.bind(r, r);
  let a;
  vt(t) ? a = t : (a = t.handler, n = t);
  const s = Fs(this), l = J0(i, a.bind(r), n);
  return s(), l;
}
function Z0(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const jw = /* @__PURE__ */ Symbol("_vte"), Hw = (e) => e.__isTeleport, Gw = /* @__PURE__ */ Symbol("_leaveCb");
function _d(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _d(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Q0(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Am(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Kl = /* @__PURE__ */ new WeakMap();
function ss(e, t, n, r, i = !1) {
  if (mt(e)) {
    e.forEach(
      (k, N) => ss(
        k,
        t && (mt(t) ? t[N] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (ls(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ss(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Ec(r.component) : r.el, s = i ? null : a, { i: l, r: u } = e, h = t && t.r, p = l.refs === Ht ? l.refs = {} : l.refs, g = l.setupState, b = /* @__PURE__ */ Tt(g), x = g === Ht ? _0 : (k) => Am(p, k) ? !1 : Ft(b, k), S = (k, N) => !(N && Am(p, N));
  if (h != null && h !== u) {
    if (Cm(t), pn(h))
      p[h] = null, x(h) && (g[h] = null);
    else if (/* @__PURE__ */ Fn(h)) {
      const k = t;
      S(h, k.k) && (h.value = null), k.k && (p[k.k] = null);
    }
  }
  if (vt(u))
    Es(u, l, 12, [s, p]);
  else {
    const k = pn(u), N = /* @__PURE__ */ Fn(u);
    if (k || N) {
      const I = () => {
        if (e.f) {
          const j = k ? x(u) ? g[u] : p[u] : S() || !e.k ? u.value : p[e.k];
          if (i)
            mt(j) && ld(j, a);
          else if (mt(j))
            j.includes(a) || j.push(a);
          else if (k)
            p[u] = [a], x(u) && (g[u] = p[u]);
          else {
            const R = [a];
            S(u, e.k) && (u.value = R), e.k && (p[e.k] = R);
          }
        } else k ? (p[u] = s, x(u) && (g[u] = s)) : N && (S(u, e.k) && (u.value = s), e.k && (p[e.k] = s));
      };
      if (s) {
        const j = () => {
          I(), Kl.delete(e);
        };
        j.id = -1, Kl.set(e, j), Bn(j, n);
      } else
        Cm(e), I();
    }
  }
}
function Cm(e) {
  const t = Kl.get(e);
  t && (t.flags |= 8, Kl.delete(e));
}
kc().requestIdleCallback;
kc().cancelIdleCallback;
const ls = (e) => !!e.type.__asyncLoader, ey = (e) => e.type.__isKeepAlive;
function Kw(e, t) {
  ty(e, "a", t);
}
function Ww(e, t) {
  ty(e, "da", t);
}
function ty(e, t, n = On) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ac(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ey(i.parent.vnode) && Bw(r, t, n, i), i = i.parent;
  }
}
function Bw(e, t, n, r) {
  const i = Ac(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ny(() => {
    ld(r[t], i);
  }, n);
}
function Ac(e, t, n = On, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...s) => {
      _i();
      const l = Fs(n), u = ti(t, n, e, s);
      return l(), Si(), u;
    });
    return r ? i.unshift(a) : i.push(a), a;
  }
}
const xi = (e) => (t, n = On) => {
  (!vs || e === "sp") && Ac(e, (...r) => t(...r), n);
}, Uw = xi("bm"), Cc = xi("m"), Yw = xi(
  "bu"
), Xw = xi("u"), Ts = xi(
  "bum"
), ny = xi("um"), qw = xi(
  "sp"
), Jw = xi("rtg"), Zw = xi("rtc");
function Qw(e, t = On) {
  Ac("ec", e, t);
}
const ex = "components", ry = /* @__PURE__ */ Symbol.for("v-ndc");
function tx(e) {
  return pn(e) ? nx(ex, e, !1) || e : e || ry;
}
function nx(e, t, n = !0, r = !1) {
  const i = lr || On;
  if (i) {
    const a = i.type;
    {
      const l = zx(
        a,
        !1
      );
      if (l && (l === t || l === zn(t) || l === xc(zn(t))))
        return a;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Im(i[e] || a[e], t) || // global registration
      Im(i.appContext[e], t)
    );
    return !s && r ? a : s;
  }
}
function Im(e, t) {
  return e && (e[t] || e[zn(t)] || e[xc(zn(t))]);
}
function Lt(e, t, n, r) {
  let i;
  const a = n, s = mt(e);
  if (s || pn(e)) {
    const l = s && /* @__PURE__ */ mo(e);
    let u = !1, h = !1;
    l && (u = !/* @__PURE__ */ br(e), h = /* @__PURE__ */ wi(e), e = Mc(e)), i = new Array(e.length);
    for (let p = 0, g = e.length; p < g; p++)
      i[p] = t(
        u ? h ? da(Tr(e[p])) : Tr(e[p]) : e[p],
        p,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, a);
  } else if (jt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, u) => t(l, u, void 0, a)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let u = 0, h = l.length; u < h; u++) {
        const p = l[u];
        i[u] = t(e[p], p, u, a);
      }
    }
  else
    i = [];
  return i;
}
const vf = (e) => e ? ky(e) ? Ec(e) : vf(e.parent) : null, cs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Dn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vf(e.parent),
    $root: (e) => vf(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => oy(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      vd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pc.bind(e.proxy)),
    $watch: (e) => zw.bind(e)
  })
), ku = (e, t) => e !== Ht && !e.__isScriptSetup && Ft(e, t), rx = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: a, accessCache: s, type: l, appContext: u } = e;
    if (t[0] !== "$") {
      const b = s[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (ku(r, t))
          return s[t] = 1, r[t];
        if (i !== Ht && Ft(i, t))
          return s[t] = 2, i[t];
        if (Ft(a, t))
          return s[t] = 3, a[t];
        if (n !== Ht && Ft(n, t))
          return s[t] = 4, n[t];
        _f && (s[t] = 0);
      }
    }
    const h = cs[t];
    let p, g;
    if (h)
      return t === "$attrs" && In(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== Ht && Ft(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, Ft(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: a } = e;
    return ku(i, t) ? (i[t] = n, !0) : r !== Ht && Ft(r, t) ? (r[t] = n, !0) : Ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: s }
  }, l) {
    let u;
    return !!(n[l] || e !== Ht && l[0] !== "$" && Ft(e, l) || ku(t, l) || Ft(a, l) || Ft(r, l) || Ft(cs, l) || Ft(i.config.globalProperties, l) || (u = s.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ft(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Om(e) {
  return mt(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let _f = !0;
function ix(e) {
  const t = oy(e), n = e.proxy, r = e.ctx;
  _f = !1, t.beforeCreate && Em(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: s,
    watch: l,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: g,
    mounted: b,
    beforeUpdate: x,
    updated: S,
    activated: k,
    deactivated: N,
    beforeDestroy: I,
    beforeUnmount: j,
    destroyed: R,
    unmounted: $,
    render: v,
    renderTracked: H,
    renderTriggered: B,
    errorCaptured: ye,
    serverPrefetch: Ae,
    // public API
    expose: E,
    inheritAttrs: te,
    // assets
    components: re,
    directives: fe,
    filters: Me
  } = t;
  if (h && ox(h, r, null), s)
    for (const J in s) {
      const D = s[J];
      vt(D) && (r[J] = D.bind(n));
    }
  if (i) {
    const J = i.call(n, n);
    jt(J) && (e.data = /* @__PURE__ */ ba(J));
  }
  if (_f = !0, a)
    for (const J in a) {
      const D = a[J], T = vt(D) ? D.bind(n, n) : vt(D.get) ? D.get.bind(n, n) : Jr, ae = !vt(D) && vt(D.set) ? D.set.bind(n) : Jr, _e = wt({
        get: T,
        set: ae
      });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (je) => _e.value = je
      });
    }
  if (l)
    for (const J in l)
      iy(l[J], r, n, J);
  if (u) {
    const J = vt(u) ? u.call(n) : u;
    Reflect.ownKeys(J).forEach((D) => {
      Rw(D, J[D]);
    });
  }
  p && Em(p, e, "c");
  function he(J, D) {
    mt(D) ? D.forEach((T) => J(T.bind(n))) : D && J(D.bind(n));
  }
  if (he(Uw, g), he(Cc, b), he(Yw, x), he(Xw, S), he(Kw, k), he(Ww, N), he(Qw, ye), he(Zw, H), he(Jw, B), he(Ts, j), he(ny, $), he(qw, Ae), mt(E))
    if (E.length) {
      const J = e.exposed || (e.exposed = {});
      E.forEach((D) => {
        Object.defineProperty(J, D, {
          get: () => n[D],
          set: (T) => n[D] = T,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === Jr && (e.render = v), te != null && (e.inheritAttrs = te), re && (e.components = re), fe && (e.directives = fe), Ae && Q0(e);
}
function ox(e, t, n = Jr) {
  mt(e) && (e = Sf(e));
  for (const r in e) {
    const i = e[r];
    let a;
    jt(i) ? "default" in i ? a = Sl(
      i.from || r,
      i.default,
      !0
    ) : a = Sl(i.from || r) : a = Sl(i), /* @__PURE__ */ Fn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[r] = a;
  }
}
function Em(e, t, n) {
  ti(
    mt(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function iy(e, t, n, r) {
  let i = r.includes(".") ? Z0(n, r) : () => n[r];
  if (pn(e)) {
    const a = t[e];
    vt(a) && go(i, a);
  } else if (vt(e))
    go(i, e.bind(n));
  else if (jt(e))
    if (mt(e))
      e.forEach((a) => iy(a, t, n, r));
    else {
      const a = vt(e.handler) ? e.handler.bind(n) : t[e.handler];
      vt(a) && go(i, a, e);
    }
}
function oy(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = a.get(t);
  let u;
  return l ? u = l : !i.length && !n && !r ? u = t : (u = {}, i.length && i.forEach(
    (h) => Wl(u, h, s, !0)
  ), Wl(u, t, s)), jt(t) && a.set(t, u), u;
}
function Wl(e, t, n, r = !1) {
  const { mixins: i, extends: a } = t;
  a && Wl(e, a, n, !0), i && i.forEach(
    (s) => Wl(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = ax[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const ax = {
  data: Tm,
  props: Fm,
  emits: Fm,
  // objects
  methods: Xa,
  computed: Xa,
  // lifecycle
  beforeCreate: Rn,
  created: Rn,
  beforeMount: Rn,
  mounted: Rn,
  beforeUpdate: Rn,
  updated: Rn,
  beforeDestroy: Rn,
  beforeUnmount: Rn,
  destroyed: Rn,
  unmounted: Rn,
  activated: Rn,
  deactivated: Rn,
  errorCaptured: Rn,
  serverPrefetch: Rn,
  // assets
  components: Xa,
  directives: Xa,
  // watch
  watch: lx,
  // provide / inject
  provide: Tm,
  inject: sx
};
function Tm(e, t) {
  return t ? e ? function() {
    return Dn(
      vt(e) ? e.call(this, this) : e,
      vt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sx(e, t) {
  return Xa(Sf(e), Sf(t));
}
function Sf(e) {
  if (mt(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Xa(e, t) {
  return e ? Dn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fm(e, t) {
  return e ? mt(e) && mt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Dn(
    /* @__PURE__ */ Object.create(null),
    Om(e),
    Om(t ?? {})
  ) : t;
}
function lx(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Dn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Rn(e[r], t[r]);
  return n;
}
function ay() {
  return {
    app: null,
    config: {
      isNativeTag: _0,
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
let cx = 0;
function ux(e, t) {
  return function(r, i = null) {
    vt(r) || (r = Dn({}, r)), i != null && !jt(i) && (i = null);
    const a = ay(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = a.app = {
      _uid: cx++,
      _component: r,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Hx,
      get config() {
        return a.config;
      },
      set config(p) {
      },
      use(p, ...g) {
        return s.has(p) || (p && vt(p.install) ? (s.add(p), p.install(h, ...g)) : vt(p) && (s.add(p), p(h, ...g))), h;
      },
      mixin(p) {
        return a.mixins.includes(p) || a.mixins.push(p), h;
      },
      component(p, g) {
        return g ? (a.components[p] = g, h) : a.components[p];
      },
      directive(p, g) {
        return g ? (a.directives[p] = g, h) : a.directives[p];
      },
      mount(p, g, b) {
        if (!u) {
          const x = h._ceVNode || rt(r, i);
          return x.appContext = a, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(x, p, b), u = !0, h._container = p, p.__vue_app__ = h, Ec(x.component);
        }
      },
      onUnmount(p) {
        l.push(p);
      },
      unmount() {
        u && (ti(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(p, g) {
        return a.provides[p] = g, h;
      },
      runWithContext(p) {
        const g = ia;
        ia = h;
        try {
          return p();
        } finally {
          ia = g;
        }
      }
    };
    return h;
  };
}
let ia = null;
const fx = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${zn(t)}Modifiers`] || e[`${xo(t)}Modifiers`];
function dx(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ht;
  let i = n;
  const a = t.startsWith("update:"), s = a && fx(r, t.slice(7));
  s && (s.trim && (i = n.map((p) => pn(p) ? p.trim() : p)), s.number && (i = n.map(ud)));
  let l, u = r[l = vu(t)] || // also try camelCase event handler (#2249)
  r[l = vu(zn(t))];
  !u && a && (u = r[l = vu(xo(t))]), u && ti(
    u,
    e,
    6,
    i
  );
  const h = r[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ti(
      h,
      e,
      6,
      i
    );
  }
}
const px = /* @__PURE__ */ new WeakMap();
function sy(e, t, n = !1) {
  const r = n ? px : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let s = {}, l = !1;
  if (!vt(e)) {
    const u = (h) => {
      const p = sy(h, t, !0);
      p && (l = !0, Dn(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !a && !l ? (jt(e) && r.set(e, null), null) : (mt(a) ? a.forEach((u) => s[u] = null) : Dn(s, a), jt(e) && r.set(e, s), s);
}
function Ic(e, t) {
  return !e || !_c(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ft(e, t[0].toLowerCase() + t.slice(1)) || Ft(e, xo(t)) || Ft(e, t));
}
function Dm(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [a],
    slots: s,
    attrs: l,
    emit: u,
    render: h,
    renderCache: p,
    props: g,
    data: b,
    setupState: x,
    ctx: S,
    inheritAttrs: k
  } = e, N = Gl(e);
  let I, j;
  try {
    if (n.shapeFlag & 4) {
      const $ = i || r, v = $;
      I = Ur(
        h.call(
          v,
          $,
          p,
          g,
          x,
          b,
          S
        )
      ), j = l;
    } else {
      const $ = t;
      I = Ur(
        $.length > 1 ? $(
          g,
          { attrs: l, slots: s, emit: u }
        ) : $(
          g,
          null
        )
      ), j = t.props ? l : hx(l);
    }
  } catch ($) {
    us.length = 0, Nc($, e, 1), I = rt(Li);
  }
  let R = I;
  if (j && k !== !1) {
    const $ = Object.keys(j), { shapeFlag: v } = R;
    $.length && v & 7 && (a && $.some(Sc) && (j = mx(
      j,
      a
    )), R = pa(R, j, !1, !0));
  }
  return n.dirs && (R = pa(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && _d(R, n.transition), I = R, Gl(N), I;
}
const hx = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || _c(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mx = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function gx(e, t, n) {
  const { props: r, children: i, component: a } = e, { props: s, children: l, patchFlag: u } = t, h = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? Lm(r, s, h) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        const b = p[g];
        if (ly(s, r, b) && !Ic(h, b))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? Lm(r, s, h) : !0 : !!s;
  return !1;
}
function Lm(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (ly(t, e, a) && !Ic(n, a))
      return !0;
  }
  return !1;
}
function ly(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && jt(r) && jt(i) ? !fd(r, i) : r !== i;
}
function yx({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const cy = {}, uy = () => Object.create(cy), fy = (e) => Object.getPrototypeOf(e) === cy;
function bx(e, t, n, r = !1) {
  const i = {}, a = uy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), dy(e, t, i, a);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ Nw(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function vx(e, t, n, r) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, l = /* @__PURE__ */ Tt(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let g = 0; g < p.length; g++) {
        let b = p[g];
        if (Ic(e.emitsOptions, b))
          continue;
        const x = t[b];
        if (u)
          if (Ft(a, b))
            x !== a[b] && (a[b] = x, h = !0);
          else {
            const S = zn(b);
            i[S] = wf(
              u,
              l,
              S,
              x,
              e,
              !1
            );
          }
        else
          x !== a[b] && (a[b] = x, h = !0);
      }
    }
  } else {
    dy(e, t, i, a) && (h = !0);
    let p;
    for (const g in l)
      (!t || // for camelCase
      !Ft(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = xo(g)) === g || !Ft(t, p))) && (u ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[g] = wf(
        u,
        l,
        g,
        void 0,
        e,
        !0
      )) : delete i[g]);
    if (a !== l)
      for (const g in a)
        (!t || !Ft(t, g)) && (delete a[g], h = !0);
  }
  h && hi(e.attrs, "set", "");
}
function dy(e, t, n, r) {
  const [i, a] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (is(u))
        continue;
      const h = t[u];
      let p;
      i && Ft(i, p = zn(u)) ? !a || !a.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Ic(e.emitsOptions, u) || (!(u in r) || h !== r[u]) && (r[u] = h, s = !0);
    }
  if (a) {
    const u = /* @__PURE__ */ Tt(n), h = l || Ht;
    for (let p = 0; p < a.length; p++) {
      const g = a[p];
      n[g] = wf(
        i,
        u,
        g,
        h[g],
        e,
        !Ft(h, g)
      );
    }
  }
  return s;
}
function wf(e, t, n, r, i, a) {
  const s = e[n];
  if (s != null) {
    const l = Ft(s, "default");
    if (l && r === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && vt(u)) {
        const { propsDefaults: h } = i;
        if (n in h)
          r = h[n];
        else {
          const p = Fs(i);
          r = h[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        r = u;
      i.ce && i.ce._setProp(n, r);
    }
    s[
      0
      /* shouldCast */
    ] && (a && !l ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === xo(n)) && (r = !0));
  }
  return r;
}
const _x = /* @__PURE__ */ new WeakMap();
function py(e, t, n = !1) {
  const r = n ? _x : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const a = e.props, s = {}, l = [];
  let u = !1;
  if (!vt(e)) {
    const p = (g) => {
      u = !0;
      const [b, x] = py(g, t, !0);
      Dn(s, b), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!a && !u)
    return jt(e) && r.set(e, ta), ta;
  if (mt(a))
    for (let p = 0; p < a.length; p++) {
      const g = zn(a[p]);
      Rm(g) && (s[g] = Ht);
    }
  else if (a)
    for (const p in a) {
      const g = zn(p);
      if (Rm(g)) {
        const b = a[p], x = s[g] = mt(b) || vt(b) ? { type: b } : Dn({}, b), S = x.type;
        let k = !1, N = !0;
        if (mt(S))
          for (let I = 0; I < S.length; ++I) {
            const j = S[I], R = vt(j) && j.name;
            if (R === "Boolean") {
              k = !0;
              break;
            } else R === "String" && (N = !1);
          }
        else
          k = vt(S) && S.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = k, x[
          1
          /* shouldCastTrue */
        ] = N, (k || Ft(x, "default")) && l.push(g);
      }
    }
  const h = [s, l];
  return jt(e) && r.set(e, h), h;
}
function Rm(e) {
  return e[0] !== "$" && !is(e);
}
const Sd = (e) => e === "_" || e === "_ctx" || e === "$stable", wd = (e) => mt(e) ? e.map(Ur) : [Ur(e)], Sx = (e, t, n) => {
  if (t._n)
    return t;
  const r = q0((...i) => wd(t(...i)), n);
  return r._c = !1, r;
}, hy = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Sd(i)) continue;
    const a = e[i];
    if (vt(a))
      t[i] = Sx(i, a, r);
    else if (a != null) {
      const s = wd(a);
      t[i] = () => s;
    }
  }
}, my = (e, t) => {
  const n = wd(t);
  e.slots.default = () => n;
}, gy = (e, t, n) => {
  for (const r in t)
    (n || !Sd(r)) && (e[r] = t[r]);
}, wx = (e, t, n) => {
  const r = e.slots = uy();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (gy(r, t, n), n && M0(r, "_", i, !0)) : hy(t, r);
  } else t && my(e, t);
}, xx = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let a = !0, s = Ht;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? a = !1 : gy(i, t, n) : (a = !t.$stable, hy(t, i)), s = t;
  } else t && (my(e, t), s = { default: 1 });
  if (a)
    for (const l in i)
      !Sd(l) && s[l] == null && delete i[l];
}, Bn = Ax;
function kx(e) {
  return Mx(e);
}
function Mx(e, t) {
  const n = kc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: a,
    createElement: s,
    createText: l,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: g,
    nextSibling: b,
    setScopeId: x = Jr,
    insertStaticContent: S
  } = e, k = (O, V, U, be = null, L = null, Y = null, ee = void 0, Q = null, ne = !!V.dynamicChildren) => {
    if (O === V)
      return;
    O && !ja(O, V) && (be = Te(O), je(O, L, Y, !0), O = null), V.patchFlag === -2 && (ne = !1, V.dynamicChildren = null);
    const { type: q, ref: ie, shapeFlag: oe } = V;
    switch (q) {
      case Oc:
        N(O, V, U, be);
        break;
      case Li:
        I(O, V, U, be);
        break;
      case Nu:
        O == null && j(V, U, be, ee);
        break;
      case pt:
        re(
          O,
          V,
          U,
          be,
          L,
          Y,
          ee,
          Q,
          ne
        );
        break;
      default:
        oe & 1 ? v(
          O,
          V,
          U,
          be,
          L,
          Y,
          ee,
          Q,
          ne
        ) : oe & 6 ? fe(
          O,
          V,
          U,
          be,
          L,
          Y,
          ee,
          Q,
          ne
        ) : (oe & 64 || oe & 128) && q.process(
          O,
          V,
          U,
          be,
          L,
          Y,
          ee,
          Q,
          ne,
          le
        );
    }
    ie != null && L ? ss(ie, O && O.ref, Y, V || O, !V) : ie == null && O && O.ref != null && ss(O.ref, null, Y, O, !0);
  }, N = (O, V, U, be) => {
    if (O == null)
      r(
        V.el = l(V.children),
        U,
        be
      );
    else {
      const L = V.el = O.el;
      V.children !== O.children && h(L, V.children);
    }
  }, I = (O, V, U, be) => {
    O == null ? r(
      V.el = u(V.children || ""),
      U,
      be
    ) : V.el = O.el;
  }, j = (O, V, U, be) => {
    [O.el, O.anchor] = S(
      O.children,
      V,
      U,
      be,
      O.el,
      O.anchor
    );
  }, R = ({ el: O, anchor: V }, U, be) => {
    let L;
    for (; O && O !== V; )
      L = b(O), r(O, U, be), O = L;
    r(V, U, be);
  }, $ = ({ el: O, anchor: V }) => {
    let U;
    for (; O && O !== V; )
      U = b(O), i(O), O = U;
    i(V);
  }, v = (O, V, U, be, L, Y, ee, Q, ne) => {
    if (V.type === "svg" ? ee = "svg" : V.type === "math" && (ee = "mathml"), O == null)
      H(
        V,
        U,
        be,
        L,
        Y,
        ee,
        Q,
        ne
      );
    else {
      const q = O.el && O.el._isVueCE ? O.el : null;
      try {
        q && q._beginPatch(), Ae(
          O,
          V,
          L,
          Y,
          ee,
          Q,
          ne
        );
      } finally {
        q && q._endPatch();
      }
    }
  }, H = (O, V, U, be, L, Y, ee, Q) => {
    let ne, q;
    const { props: ie, shapeFlag: oe, transition: Ne, dirs: Ve } = O;
    if (ne = O.el = s(
      O.type,
      Y,
      ie && ie.is,
      ie
    ), oe & 8 ? p(ne, O.children) : oe & 16 && ye(
      O.children,
      ne,
      null,
      be,
      L,
      Mu(O, Y),
      ee,
      Q
    ), Ve && eo(O, null, be, "created"), B(ne, O, O.scopeId, ee, be), ie) {
      for (const Ze in ie)
        Ze !== "value" && !is(Ze) && a(ne, Ze, null, ie[Ze], Y, be);
      "value" in ie && a(ne, "value", null, ie.value, Y), (q = ie.onVnodeBeforeMount) && Hr(q, be, O);
    }
    Ve && eo(O, null, be, "beforeMount");
    const ze = Nx(L, Ne);
    ze && Ne.beforeEnter(ne), r(ne, V, U), ((q = ie && ie.onVnodeMounted) || ze || Ve) && Bn(() => {
      try {
        q && Hr(q, be, O), ze && Ne.enter(ne), Ve && eo(O, null, be, "mounted");
      } finally {
      }
    }, L);
  }, B = (O, V, U, be, L) => {
    if (U && x(O, U), be)
      for (let Y = 0; Y < be.length; Y++)
        x(O, be[Y]);
    if (L) {
      let Y = L.subTree;
      if (V === Y || _y(Y.type) && (Y.ssContent === V || Y.ssFallback === V)) {
        const ee = L.vnode;
        B(
          O,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          L.parent
        );
      }
    }
  }, ye = (O, V, U, be, L, Y, ee, Q, ne = 0) => {
    for (let q = ne; q < O.length; q++) {
      const ie = O[q] = Q ? di(O[q]) : Ur(O[q]);
      k(
        null,
        ie,
        V,
        U,
        be,
        L,
        Y,
        ee,
        Q
      );
    }
  }, Ae = (O, V, U, be, L, Y, ee) => {
    const Q = V.el = O.el;
    let { patchFlag: ne, dynamicChildren: q, dirs: ie } = V;
    ne |= O.patchFlag & 16;
    const oe = O.props || Ht, Ne = V.props || Ht;
    let Ve;
    if (U && to(U, !1), (Ve = Ne.onVnodeBeforeUpdate) && Hr(Ve, U, V, O), ie && eo(V, O, U, "beforeUpdate"), U && to(U, !0), (oe.innerHTML && Ne.innerHTML == null || oe.textContent && Ne.textContent == null) && p(Q, ""), q ? E(
      O.dynamicChildren,
      q,
      Q,
      U,
      be,
      Mu(V, L),
      Y
    ) : ee || D(
      O,
      V,
      Q,
      null,
      U,
      be,
      Mu(V, L),
      Y,
      !1
    ), ne > 0) {
      if (ne & 16)
        te(Q, oe, Ne, U, L);
      else if (ne & 2 && oe.class !== Ne.class && a(Q, "class", null, Ne.class, L), ne & 4 && a(Q, "style", oe.style, Ne.style, L), ne & 8) {
        const ze = V.dynamicProps;
        for (let Ze = 0; Ze < ze.length; Ze++) {
          const ot = ze[Ze], He = oe[ot], Ye = Ne[ot];
          (Ye !== He || ot === "value") && a(Q, ot, He, Ye, L, U);
        }
      }
      ne & 1 && O.children !== V.children && p(Q, V.children);
    } else !ee && q == null && te(Q, oe, Ne, U, L);
    ((Ve = Ne.onVnodeUpdated) || ie) && Bn(() => {
      Ve && Hr(Ve, U, V, O), ie && eo(V, O, U, "updated");
    }, be);
  }, E = (O, V, U, be, L, Y, ee) => {
    for (let Q = 0; Q < V.length; Q++) {
      const ne = O[Q], q = V[Q], ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === pt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ja(ne, q) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? g(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          U
        )
      );
      k(
        ne,
        q,
        ie,
        null,
        be,
        L,
        Y,
        ee,
        !0
      );
    }
  }, te = (O, V, U, be, L) => {
    if (V !== U) {
      if (V !== Ht)
        for (const Y in V)
          !is(Y) && !(Y in U) && a(
            O,
            Y,
            V[Y],
            null,
            L,
            be
          );
      for (const Y in U) {
        if (is(Y)) continue;
        const ee = U[Y], Q = V[Y];
        ee !== Q && Y !== "value" && a(O, Y, Q, ee, L, be);
      }
      "value" in U && a(O, "value", V.value, U.value, L);
    }
  }, re = (O, V, U, be, L, Y, ee, Q, ne) => {
    const q = V.el = O ? O.el : l(""), ie = V.anchor = O ? O.anchor : l("");
    let { patchFlag: oe, dynamicChildren: Ne, slotScopeIds: Ve } = V;
    Ve && (Q = Q ? Q.concat(Ve) : Ve), O == null ? (r(q, U, be), r(ie, U, be), ye(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      U,
      ie,
      L,
      Y,
      ee,
      Q,
      ne
    )) : oe > 0 && oe & 64 && Ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren && O.dynamicChildren.length === Ne.length ? (E(
      O.dynamicChildren,
      Ne,
      U,
      L,
      Y,
      ee,
      Q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || L && V === L.subTree) && yy(
      O,
      V,
      !0
      /* shallow */
    )) : D(
      O,
      V,
      U,
      ie,
      L,
      Y,
      ee,
      Q,
      ne
    );
  }, fe = (O, V, U, be, L, Y, ee, Q, ne) => {
    V.slotScopeIds = Q, O == null ? V.shapeFlag & 512 ? L.ctx.activate(
      V,
      U,
      be,
      ee,
      ne
    ) : Me(
      V,
      U,
      be,
      L,
      Y,
      ee,
      ne
    ) : xe(O, V, ne);
  }, Me = (O, V, U, be, L, Y, ee) => {
    const Q = O.component = Fx(
      O,
      be,
      L
    );
    if (ey(O) && (Q.ctx.renderer = le), Lx(Q, !1, ee), Q.asyncDep) {
      if (L && L.registerDep(Q, he, ee), !O.el) {
        const ne = Q.subTree = rt(Li);
        I(null, ne, V, U), O.placeholder = ne.el;
      }
    } else
      he(
        Q,
        O,
        V,
        U,
        L,
        Y,
        ee
      );
  }, xe = (O, V, U) => {
    const be = V.component = O.component;
    if (gx(O, V, U))
      if (be.asyncDep && !be.asyncResolved) {
        J(be, V, U);
        return;
      } else
        be.next = V, be.update();
    else
      V.el = O.el, be.vnode = V;
  }, he = (O, V, U, be, L, Y, ee) => {
    const Q = () => {
      if (O.isMounted) {
        let { next: oe, bu: Ne, u: Ve, parent: ze, vnode: Ze } = O;
        {
          const M = by(O);
          if (M) {
            oe && (oe.el = Ze.el, J(O, oe, ee)), M.asyncDep.then(() => {
              Bn(() => {
                O.isUnmounted || q();
              }, L);
            });
            return;
          }
        }
        let ot = oe, He;
        to(O, !1), oe ? (oe.el = Ze.el, J(O, oe, ee)) : oe = Ze, Ne && _l(Ne), (He = oe.props && oe.props.onVnodeBeforeUpdate) && Hr(He, ze, oe, Ze), to(O, !0);
        const Ye = Dm(O), gt = O.subTree;
        O.subTree = Ye, k(
          gt,
          Ye,
          // parent may have changed if it's in a teleport
          g(gt.el),
          // anchor may have changed if it's in a fragment
          Te(gt),
          O,
          L,
          Y
        ), oe.el = Ye.el, ot === null && yx(O, Ye.el), Ve && Bn(Ve, L), (He = oe.props && oe.props.onVnodeUpdated) && Bn(
          () => Hr(He, ze, oe, Ze),
          L
        );
      } else {
        let oe;
        const { el: Ne, props: Ve } = V, { bm: ze, m: Ze, parent: ot, root: He, type: Ye } = O, gt = ls(V);
        to(O, !1), ze && _l(ze), !gt && (oe = Ve && Ve.onVnodeBeforeMount) && Hr(oe, ot, V), to(O, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            Ye,
            O.parent ? O.parent.type : void 0
          );
          const M = O.subTree = Dm(O);
          k(
            null,
            M,
            U,
            be,
            O,
            L,
            Y
          ), V.el = M.el;
        }
        if (Ze && Bn(Ze, L), !gt && (oe = Ve && Ve.onVnodeMounted)) {
          const M = V;
          Bn(
            () => Hr(oe, ot, M),
            L
          );
        }
        (V.shapeFlag & 256 || ot && ls(ot.vnode) && ot.vnode.shapeFlag & 256) && O.a && Bn(O.a, L), O.isMounted = !0, V = U = be = null;
      }
    };
    O.scope.on();
    const ne = O.effect = new C0(Q);
    O.scope.off();
    const q = O.update = ne.run.bind(ne), ie = O.job = ne.runIfDirty.bind(ne);
    ie.i = O, ie.id = O.uid, ne.scheduler = () => vd(ie), to(O, !0), q();
  }, J = (O, V, U) => {
    V.component = O;
    const be = O.vnode.props;
    O.vnode = V, O.next = null, vx(O, V.props, be, U), xx(O, V.children, U), _i(), Pm(O), Si();
  }, D = (O, V, U, be, L, Y, ee, Q, ne = !1) => {
    const q = O && O.children, ie = O ? O.shapeFlag : 0, oe = V.children, { patchFlag: Ne, shapeFlag: Ve } = V;
    if (Ne > 0) {
      if (Ne & 128) {
        ae(
          q,
          oe,
          U,
          be,
          L,
          Y,
          ee,
          Q,
          ne
        );
        return;
      } else if (Ne & 256) {
        T(
          q,
          oe,
          U,
          be,
          L,
          Y,
          ee,
          Q,
          ne
        );
        return;
      }
    }
    Ve & 8 ? (ie & 16 && A(q, L, Y), oe !== q && p(U, oe)) : ie & 16 ? Ve & 16 ? ae(
      q,
      oe,
      U,
      be,
      L,
      Y,
      ee,
      Q,
      ne
    ) : A(q, L, Y, !0) : (ie & 8 && p(U, ""), Ve & 16 && ye(
      oe,
      U,
      be,
      L,
      Y,
      ee,
      Q,
      ne
    ));
  }, T = (O, V, U, be, L, Y, ee, Q, ne) => {
    O = O || ta, V = V || ta;
    const q = O.length, ie = V.length, oe = Math.min(q, ie);
    let Ne;
    for (Ne = 0; Ne < oe; Ne++) {
      const Ve = V[Ne] = ne ? di(V[Ne]) : Ur(V[Ne]);
      k(
        O[Ne],
        Ve,
        U,
        null,
        L,
        Y,
        ee,
        Q,
        ne
      );
    }
    q > ie ? A(
      O,
      L,
      Y,
      !0,
      !1,
      oe
    ) : ye(
      V,
      U,
      be,
      L,
      Y,
      ee,
      Q,
      ne,
      oe
    );
  }, ae = (O, V, U, be, L, Y, ee, Q, ne) => {
    let q = 0;
    const ie = V.length;
    let oe = O.length - 1, Ne = ie - 1;
    for (; q <= oe && q <= Ne; ) {
      const Ve = O[q], ze = V[q] = ne ? di(V[q]) : Ur(V[q]);
      if (ja(Ve, ze))
        k(
          Ve,
          ze,
          U,
          null,
          L,
          Y,
          ee,
          Q,
          ne
        );
      else
        break;
      q++;
    }
    for (; q <= oe && q <= Ne; ) {
      const Ve = O[oe], ze = V[Ne] = ne ? di(V[Ne]) : Ur(V[Ne]);
      if (ja(Ve, ze))
        k(
          Ve,
          ze,
          U,
          null,
          L,
          Y,
          ee,
          Q,
          ne
        );
      else
        break;
      oe--, Ne--;
    }
    if (q > oe) {
      if (q <= Ne) {
        const Ve = Ne + 1, ze = Ve < ie ? V[Ve].el : be;
        for (; q <= Ne; )
          k(
            null,
            V[q] = ne ? di(V[q]) : Ur(V[q]),
            U,
            ze,
            L,
            Y,
            ee,
            Q,
            ne
          ), q++;
      }
    } else if (q > Ne)
      for (; q <= oe; )
        je(O[q], L, Y, !0), q++;
    else {
      const Ve = q, ze = q, Ze = /* @__PURE__ */ new Map();
      for (q = ze; q <= Ne; q++) {
        const W = V[q] = ne ? di(V[q]) : Ur(V[q]);
        W.key != null && Ze.set(W.key, q);
      }
      let ot, He = 0;
      const Ye = Ne - ze + 1;
      let gt = !1, M = 0;
      const G = new Array(Ye);
      for (q = 0; q < Ye; q++) G[q] = 0;
      for (q = Ve; q <= oe; q++) {
        const W = O[q];
        if (He >= Ye) {
          je(W, L, Y, !0);
          continue;
        }
        let X;
        if (W.key != null)
          X = Ze.get(W.key);
        else
          for (ot = ze; ot <= Ne; ot++)
            if (G[ot - ze] === 0 && ja(W, V[ot])) {
              X = ot;
              break;
            }
        X === void 0 ? je(W, L, Y, !0) : (G[X - ze] = q + 1, X >= M ? M = X : gt = !0, k(
          W,
          V[X],
          U,
          null,
          L,
          Y,
          ee,
          Q,
          ne
        ), He++);
      }
      const f = gt ? Px(G) : ta;
      for (ot = f.length - 1, q = Ye - 1; q >= 0; q--) {
        const W = ze + q, X = V[W], ge = V[W + 1], Fe = W + 1 < ie ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ge.el || vy(ge)
        ) : be;
        G[q] === 0 ? k(
          null,
          X,
          U,
          Fe,
          L,
          Y,
          ee,
          Q,
          ne
        ) : gt && (ot < 0 || q !== f[ot] ? _e(X, U, Fe, 2) : ot--);
      }
    }
  }, _e = (O, V, U, be, L = null) => {
    const { el: Y, type: ee, transition: Q, children: ne, shapeFlag: q } = O;
    if (q & 6) {
      _e(O.component.subTree, V, U, be);
      return;
    }
    if (q & 128) {
      O.suspense.move(V, U, be);
      return;
    }
    if (q & 64) {
      ee.move(O, V, U, le);
      return;
    }
    if (ee === pt) {
      r(Y, V, U);
      for (let oe = 0; oe < ne.length; oe++)
        _e(ne[oe], V, U, be);
      r(O.anchor, V, U);
      return;
    }
    if (ee === Nu) {
      R(O, V, U);
      return;
    }
    if (be !== 2 && q & 1 && Q)
      if (be === 0)
        Q.beforeEnter(Y), r(Y, V, U), Bn(() => Q.enter(Y), L);
      else {
        const { leave: oe, delayLeave: Ne, afterLeave: Ve } = Q, ze = () => {
          O.ctx.isUnmounted ? i(Y) : r(Y, V, U);
        }, Ze = () => {
          Y._isLeaving && Y[Gw](
            !0
            /* cancelled */
          ), oe(Y, () => {
            ze(), Ve && Ve();
          });
        };
        Ne ? Ne(Y, ze, Ze) : Ze();
      }
    else
      r(Y, V, U);
  }, je = (O, V, U, be = !1, L = !1) => {
    const {
      type: Y,
      props: ee,
      ref: Q,
      children: ne,
      dynamicChildren: q,
      shapeFlag: ie,
      patchFlag: oe,
      dirs: Ne,
      cacheIndex: Ve,
      memo: ze
    } = O;
    if (oe === -2 && (L = !1), Q != null && (_i(), ss(Q, null, U, O, !0), Si()), Ve != null && (V.renderCache[Ve] = void 0), ie & 256) {
      V.ctx.deactivate(O);
      return;
    }
    const Ze = ie & 1 && Ne, ot = !ls(O);
    let He;
    if (ot && (He = ee && ee.onVnodeBeforeUnmount) && Hr(He, V, O), ie & 6)
      Se(O.component, U, be);
    else {
      if (ie & 128) {
        O.suspense.unmount(U, be);
        return;
      }
      Ze && eo(O, null, V, "beforeUnmount"), ie & 64 ? O.type.remove(
        O,
        V,
        U,
        le,
        be
      ) : q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== pt || oe > 0 && oe & 64) ? A(
        q,
        V,
        U,
        !1,
        !0
      ) : (Y === pt && oe & 384 || !L && ie & 16) && A(ne, V, U), be && tt(O);
    }
    const Ye = ze != null && Ve == null;
    (ot && (He = ee && ee.onVnodeUnmounted) || Ze || Ye) && Bn(() => {
      He && Hr(He, V, O), Ze && eo(O, null, V, "unmounted"), Ye && (O.el = null);
    }, U);
  }, tt = (O) => {
    const { type: V, el: U, anchor: be, transition: L } = O;
    if (V === pt) {
      st(U, be);
      return;
    }
    if (V === Nu) {
      $(O);
      return;
    }
    const Y = () => {
      i(U), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (O.shapeFlag & 1 && L && !L.persisted) {
      const { leave: ee, delayLeave: Q } = L, ne = () => ee(U, Y);
      Q ? Q(O.el, Y, ne) : ne();
    } else
      Y();
  }, st = (O, V) => {
    let U;
    for (; O !== V; )
      U = b(O), i(O), O = U;
    i(V);
  }, Se = (O, V, U) => {
    const { bum: be, scope: L, job: Y, subTree: ee, um: Q, m: ne, a: q } = O;
    Vm(ne), Vm(q), be && _l(be), L.stop(), Y && (Y.flags |= 8, je(ee, O, V, U)), Q && Bn(Q, V), Bn(() => {
      O.isUnmounted = !0;
    }, V);
  }, A = (O, V, U, be = !1, L = !1, Y = 0) => {
    for (let ee = Y; ee < O.length; ee++)
      je(O[ee], V, U, be, L);
  }, Te = (O) => {
    if (O.shapeFlag & 6)
      return Te(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const V = b(O.anchor || O.el), U = V && V[jw];
    return U ? b(U) : V;
  };
  let me = !1;
  const We = (O, V, U) => {
    let be;
    O == null ? V._vnode && (je(V._vnode, null, null, !0), be = V._vnode.component) : k(
      V._vnode || null,
      O,
      V,
      null,
      null,
      null,
      U
    ), V._vnode = O, me || (me = !0, Pm(be), U0(), me = !1);
  }, le = {
    p: k,
    um: je,
    m: _e,
    r: tt,
    mt: Me,
    mc: ye,
    pc: D,
    pbc: E,
    n: Te,
    o: e
  };
  return {
    render: We,
    hydrate: void 0,
    createApp: ux(We)
  };
}
function Mu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function to({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Nx(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yy(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (mt(r) && mt(i))
    for (let a = 0; a < r.length; a++) {
      const s = r[a];
      let l = i[a];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[a] = di(i[a]), l.el = s.el), !n && l.patchFlag !== -2 && yy(s, l)), l.type === Oc && (l.patchFlag === -1 && (l = i[a] = di(l)), l.el = s.el), l.type === Li && !l.el && (l.el = s.el);
    }
}
function Px(e) {
  const t = e.slice(), n = [0];
  let r, i, a, s, l;
  const u = e.length;
  for (r = 0; r < u; r++) {
    const h = e[r];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[r] = i, n.push(r);
        continue;
      }
      for (a = 0, s = n.length - 1; a < s; )
        l = a + s >> 1, e[n[l]] < h ? a = l + 1 : s = l;
      h < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, s = n[a - 1]; a-- > 0; )
    n[a] = s, s = t[s];
  return n;
}
function by(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : by(t);
}
function Vm(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function vy(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? vy(t.subTree) : null;
}
const _y = (e) => e.__isSuspense;
function Ax(e, t) {
  t && t.pendingBranch ? mt(e) ? t.effects.push(...e) : t.effects.push(e) : Lw(e);
}
const pt = /* @__PURE__ */ Symbol.for("v-fgt"), Oc = /* @__PURE__ */ Symbol.for("v-txt"), Li = /* @__PURE__ */ Symbol.for("v-cmt"), Nu = /* @__PURE__ */ Symbol.for("v-stc"), us = [];
let cr = null;
function we(e = !1) {
  us.push(cr = e ? null : []);
}
function Cx() {
  us.pop(), cr = us[us.length - 1] || null;
}
let bs = 1;
function $m(e, t = !1) {
  bs += e, e < 0 && cr && t && (cr.hasOnce = !0);
}
function Sy(e) {
  return e.dynamicChildren = bs > 0 ? cr || ta : null, Cx(), bs > 0 && cr && cr.push(e), e;
}
function Ce(e, t, n, r, i, a) {
  return Sy(
    se(
      e,
      t,
      n,
      r,
      i,
      a,
      !0
    )
  );
}
function _r(e, t, n, r, i) {
  return Sy(
    rt(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function wy(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ja(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xy = ({ key: e }) => e ?? null, wl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? pn(e) || /* @__PURE__ */ Fn(e) || vt(e) ? { i: lr, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, r = 0, i = null, a = e === pt ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xy(t),
    ref: t && wl(t),
    scopeId: X0,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: lr
  };
  return l ? (xd(u, n), a & 128 && e.normalize(u)) : n && (u.shapeFlag |= pn(n) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  cr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && cr.push(u), u;
}
const rt = Ix;
function Ix(e, t = null, n = null, r = 0, i = null, a = !1) {
  if ((!e || e === ry) && (e = Li), wy(e)) {
    const l = pa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xd(l, n), bs > 0 && !a && cr && (l.shapeFlag & 6 ? cr[cr.indexOf(e)] = l : cr.push(l)), l.patchFlag = -2, l;
  }
  if (jx(e) && (e = e.__vccOpts), t) {
    t = Ox(t);
    let { class: l, style: u } = t;
    l && !pn(l) && (t.class = xt(l)), jt(u) && (/* @__PURE__ */ bd(u) && !mt(u) && (u = Dn({}, u)), t.style = zt(u));
  }
  const s = pn(e) ? 1 : _y(e) ? 128 : Hw(e) ? 64 : jt(e) ? 4 : vt(e) ? 2 : 0;
  return se(
    e,
    t,
    n,
    r,
    i,
    s,
    a,
    !0
  );
}
function Ox(e) {
  return e ? /* @__PURE__ */ bd(e) || fy(e) ? Dn({}, e) : e : null;
}
function pa(e, t, n = !1, r = !1) {
  const { props: i, ref: a, patchFlag: s, children: l, transition: u } = e, h = t ? pi(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && xy(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? mt(a) ? a.concat(wl(t)) : [a, wl(t)] : wl(t)
    ) : a,
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
    patchFlag: t && e.type !== pt ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && pa(e.ssContent),
    ssFallback: e.ssFallback && pa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && _d(
    p,
    u.clone(p)
  ), p;
}
function qa(e = " ", t = 0) {
  return rt(Oc, null, e, t);
}
function kt(e = "", t = !1) {
  return t ? (we(), _r(Li, null, e)) : rt(Li, null, e);
}
function Ur(e) {
  return e == null || typeof e == "boolean" ? rt(Li) : mt(e) ? rt(
    pt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wy(e) ? di(e) : rt(Oc, null, String(e));
}
function di(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : pa(e);
}
function xd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (mt(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), xd(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !fy(t) ? t._ctx = lr : i === 3 && lr && (lr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else vt(t) ? (t = { default: t, _ctx: lr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [qa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = xt([t.class, r.class]));
      else if (i === "style")
        t.style = zt([t.style, r.style]);
      else if (_c(i)) {
        const a = t[i], s = r[i];
        s && a !== s && !(mt(a) && a.includes(s)) ? t[i] = a ? [].concat(a, s) : s : s == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sc(i) && (t[i] = s);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Hr(e, t, n, r = null) {
  ti(e, t, 7, [
    n,
    r
  ]);
}
const Ex = ay();
let Tx = 0;
function Fx(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Ex, a = {
    uid: Tx++,
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
    scope: new aw(
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
    propsOptions: py(r, i),
    emitsOptions: sy(r, i),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = dx.bind(null, a), e.ce && e.ce(a), a;
}
let On = null;
const Dx = () => On || lr;
let Bl, xf;
{
  const e = kc(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (a) => {
      i.length > 1 ? i.forEach((s) => s(a)) : i[0](a);
    };
  };
  Bl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => On = n
  ), xf = t(
    "__VUE_SSR_SETTERS__",
    (n) => vs = n
  );
}
const Fs = (e) => {
  const t = On;
  return Bl(e), e.scope.on(), () => {
    e.scope.off(), Bl(t);
  };
}, zm = () => {
  On && On.scope.off(), Bl(null);
};
function ky(e) {
  return e.vnode.shapeFlag & 4;
}
let vs = !1;
function Lx(e, t = !1, n = !1) {
  t && xf(t);
  const { props: r, children: i } = e.vnode, a = ky(e);
  bx(e, r, a, t), wx(e, i, n || t);
  const s = a ? Rx(e, t) : void 0;
  return t && xf(!1), s;
}
function Rx(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rx);
  const { setup: r } = n;
  if (r) {
    _i();
    const i = e.setupContext = r.length > 1 ? $x(e) : null, a = Fs(e), s = Es(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = w0(s);
    if (Si(), a(), (l || e.sp) && !ls(e) && Q0(e), l) {
      if (s.then(zm, zm), t)
        return s.then((u) => {
          jm(e, u);
        }).catch((u) => {
          Nc(u, e, 0);
        });
      e.asyncDep = s;
    } else
      jm(e, s);
  } else
    My(e);
}
function jm(e, t, n) {
  vt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : jt(t) && (e.setupState = K0(t)), My(e);
}
function My(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Jr);
  {
    const i = Fs(e);
    _i();
    try {
      ix(e);
    } finally {
      Si(), i();
    }
  }
}
const Vx = {
  get(e, t) {
    return In(e, "get", ""), e[t];
  }
};
function $x(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vx),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ec(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(K0(Pw(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in cs)
        return cs[n](e);
    },
    has(t, n) {
      return n in t || n in cs;
    }
  })) : e.proxy;
}
function zx(e, t = !0) {
  return vt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jx(e) {
  return vt(e) && "__vccOpts" in e;
}
const wt = (e, t) => /* @__PURE__ */ Ow(e, t, vs), Hx = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let kf;
const Hm = typeof window < "u" && window.trustedTypes;
if (Hm)
  try {
    kf = /* @__PURE__ */ Hm.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ny = kf ? (e) => kf.createHTML(e) : (e) => e, Gx = "http://www.w3.org/2000/svg", Kx = "http://www.w3.org/1998/Math/MathML", ui = typeof document < "u" ? document : null, Gm = ui && /* @__PURE__ */ ui.createElement("template"), Wx = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? ui.createElementNS(Gx, e) : t === "mathml" ? ui.createElementNS(Kx, e) : n ? ui.createElement(e, { is: n }) : ui.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => ui.createTextNode(e),
  createComment: (e) => ui.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ui.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, a) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      Gm.innerHTML = Ny(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Gm.content;
      if (r === "svg" || r === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
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
}, Bx = /* @__PURE__ */ Symbol("_vtc");
function Ux(e, t, n) {
  const r = e[Bx];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ul = /* @__PURE__ */ Symbol("_vod"), Py = /* @__PURE__ */ Symbol("_vsh"), wo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ul] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ha(e, t);
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
  e.style.display = t ? e[Ul] : "none", e[Py] = !t;
}
const Yx = /* @__PURE__ */ Symbol(""), Xx = /(?:^|;)\s*display\s*:/;
function qx(e, t, n) {
  const r = e.style, i = pn(n);
  let a = !1;
  if (n && !i) {
    if (t)
      if (pn(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && xl(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && xl(r, s, "");
    for (const s in n)
      s === "display" && (a = !0), xl(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[Yx];
      s && (n += ";" + s), r.cssText = n, a = Xx.test(n);
    }
  } else t && e.removeAttribute("style");
  Ul in e && (e[Ul] = a ? r.display : "", e[Py] && (r.display = "none"));
}
const Km = /\s*!important$/;
function xl(e, t, n) {
  if (mt(n))
    n.forEach((r) => xl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Jx(e, t);
    Km.test(n) ? e.setProperty(
      xo(r),
      n.replace(Km, ""),
      "important"
    ) : e[r] = n;
  }
}
const Wm = ["Webkit", "Moz", "ms"], Pu = {};
function Jx(e, t) {
  const n = Pu[t];
  if (n)
    return n;
  let r = zn(t);
  if (r !== "filter" && r in e)
    return Pu[t] = r;
  r = xc(r);
  for (let i = 0; i < Wm.length; i++) {
    const a = Wm[i] + r;
    if (a in e)
      return Pu[t] = a;
  }
  return t;
}
const Bm = "http://www.w3.org/1999/xlink";
function Um(e, t, n, r, i, a = iw(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bm, t.slice(6, t.length)) : e.setAttributeNS(Bm, t, n) : n == null || a && !N0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : ei(n) ? String(n) : n
  );
}
function Ym(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ny(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const l = a === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = N0(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Xo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Zx(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Xm = /* @__PURE__ */ Symbol("_vei");
function Qx(e, t, n, r, i = null) {
  const a = e[Xm] || (e[Xm] = {}), s = a[t];
  if (r && s)
    s.value = r;
  else {
    const [l, u] = ek(t);
    if (r) {
      const h = a[t] = rk(
        r,
        i
      );
      Xo(e, l, h, u);
    } else s && (Zx(e, l, s, u), a[t] = void 0);
  }
}
const qm = /(?:Once|Passive|Capture)$/;
function ek(e) {
  let t;
  if (qm.test(e)) {
    t = {};
    let r;
    for (; r = e.match(qm); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xo(e.slice(2)), t];
}
let Au = 0;
const tk = /* @__PURE__ */ Promise.resolve(), nk = () => Au || (tk.then(() => Au = 0), Au = Date.now());
function rk(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ti(
      ik(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = nk(), n;
}
function ik(e, t) {
  if (mt(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const Jm = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ok = (e, t, n, r, i, a) => {
  const s = i === "svg";
  t === "class" ? Ux(e, r, s) : t === "style" ? qx(e, n, r) : _c(t) ? Sc(t) || Qx(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ak(e, t, r, s)) ? (Ym(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Um(e, t, r, s, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sk(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !pn(r))) ? Ym(e, zn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Um(e, t, r, s));
};
function ak(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Jm(t) && vt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Jm(t) && pn(n) ? !1 : t in e;
}
function sk(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = zn(t);
  return Array.isArray(n) ? n.some((i) => zn(i) === r) : Object.keys(n).some((i) => zn(i) === r);
}
const Zm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return mt(t) ? (n) => _l(t, n) : t;
};
function lk(e) {
  e.target.composing = !0;
}
function Qm(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Cu = /* @__PURE__ */ Symbol("_assign");
function eg(e, t, n) {
  return t && (e = e.trim()), n && (e = ud(e)), e;
}
const tg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e[Cu] = Zm(i);
    const a = r || i.props && i.props.type === "number";
    Xo(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Cu](eg(e.value, n, a));
    }), (n || a) && Xo(e, "change", () => {
      e.value = eg(e.value, n, a);
    }), t || (Xo(e, "compositionstart", lk), Xo(e, "compositionend", Qm), Xo(e, "change", Qm));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, s) {
    if (e[Cu] = Zm(s), e.composing) return;
    const l = (a || e.type === "number") && !/^0\d/.test(e.value) ? ud(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === u) || (e.value = u);
  }
}, ck = ["ctrl", "shift", "alt", "meta"], uk = {
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
  exact: (e, t) => ck.some((n) => e[`${n}Key`] && !t.includes(n))
}, Kt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const l = uk[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...a);
  }));
}, fk = /* @__PURE__ */ Dn({ patchProp: ok }, Wx);
let ng;
function dk() {
  return ng || (ng = kx(fk));
}
const kd = ((...e) => {
  const t = dk().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = hk(r);
    if (!i) return;
    const a = t._component;
    !vt(a) && !a.render && !a.template && (a.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, pk(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function pk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hk(e) {
  return pn(e) ? document.querySelector(e) : e;
}
const mk = "PanoramaSuite.Debug.Diagnostics", gk = "PanoramaSuite.Debug.ExportDiagnostics", Iu = "pano_suite.diagnostics.v1", rg = "pano_suite.diagnostics.previous.v1", yk = 300, bk = 2e5, vk = 100, _k = 20, Sk = 1e3, wk = 2, ol = 1024 * 1024;
function Oi(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function xk() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function kk() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: xk,
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
function Mk(e = {}) {
  const t = { ...kk(), ...e };
  let n = !1, r = !1, i = null, a = null, s = 0, l = null, u = 0, h = 0;
  const p = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), b = { created: 0, released: 0, collected: 0 }, x = { created: 0, collected: 0 }, S = t.FinalizationRegistry ? new t.FinalizationRegistry((le) => {
    p.delete(le), b.collected += 1;
  }) : null, k = t.FinalizationRegistry ? new t.FinalizationRegistry((le) => {
    g.delete(le), x.collected += 1;
  }) : null, N = /* @__PURE__ */ new Set(), I = { created: 0, lost: 0, restored: 0, disposed: 0 }, j = [], R = /* @__PURE__ */ new Map();
  let $ = { count: 0, maxMs: 0 }, v = /* @__PURE__ */ new Map(), H = { count: 0, maxMs: 0 };
  const B = [];
  function ye(le, Oe, O = void 0) {
    j.push(O === void 0 ? { t: t.clock(), type: le, label: Oe } : { t: t.clock(), type: le, label: Oe, detail: O }), j.length > vk && j.shift();
  }
  function Ae(le, Oe, O, V, U) {
    if (!n || !V || !t.WeakRef) return V;
    const be = { ref: new t.WeakRef(V), label: U };
    return le.add(be), Oe == null || Oe.register(V, be), O.created += 1, V;
  }
  function E(le, Oe = "") {
    return Ae(p, S, b, le, Oe);
  }
  function te(le, Oe = "") {
    return Ae(g, k, x, le, Oe);
  }
  function re({ label: le = "", width: Oe, height: O, offscreen: V = !1 } = {}) {
    const U = globalThis.OffscreenCanvas;
    let be;
    return V && typeof U < "u" ? be = new U(Oe, O) : (be = t.document().createElement("canvas"), Oe !== void 0 && O !== void 0 && (be.width = Oe, be.height = O)), E(be, le);
  }
  function fe(le) {
    le.width = 0, le.height = 0, n && (b.released += 1);
  }
  function Me(le = t.document(), Oe = "") {
    var O;
    return te(((O = le == null ? void 0 : le.createElement) == null ? void 0 : O.call(le, "video")) || null, Oe);
  }
  function xe(le, Oe) {
    if (!n || !le) return () => {
    };
    const O = { label: Oe, lost: !1, disposed: !1 };
    N.add(O), I.created += 1, ye("webgl-created", Oe);
    const V = () => {
      O.disposed || (O.lost = !0, I.lost += 1, ye("webglcontextlost", Oe));
    }, U = () => {
      O.disposed || (O.lost = !1, I.restored += 1, ye("webglcontextrestored", Oe));
    };
    return le.addEventListener("webglcontextlost", V), le.addEventListener("webglcontextrestored", U), () => {
      O.disposed || (O.disposed = !0, N.delete(O), I.disposed += 1, ye("webgl-disposed", Oe));
    };
  }
  function he(le, Oe) {
    return R.set(le, Oe), () => {
      R.get(le) === Oe && R.delete(le);
    };
  }
  function J() {
    return n ? t.now() : -1;
  }
  function D(le) {
    if (le < 0 || !n) return;
    const Oe = t.now() - le;
    $.count += 1, $.maxMs = Math.max($.maxMs, Oe);
  }
  function T(le, Oe) {
    if (Oe < 0 || !n) return;
    const O = t.now() - Oe, V = v.get(le) ?? { count: 0, maxMs: 0 };
    V.count += 1, V.maxMs = Math.max(V.maxMs, O), v.set(le, V);
  }
  function ae() {
    let le = 0, Oe = 0, O = 0, V = [0, 0];
    const U = {};
    for (const be of p) {
      const L = be.ref.deref();
      if (!L) continue;
      le += 1;
      const Y = L.width * L.height;
      Y > 0 && (Oe += 1), O += Y, Y > V[0] * V[1] && (V = [L.width, L.height]);
      const ee = U[be.label] ?? (U[be.label] = [0, 0]);
      ee[0] += 1, ee[1] += Y;
    }
    return { ...b, alive: le, sized: Oe, pixels: O, mb: Oi(O * 4 / ol, 1), largest: V, byLabel: U };
  }
  function _e() {
    const le = [];
    let Oe = 0, O = 0;
    for (const V of g) {
      const U = V.ref.deref();
      if (!U) continue;
      Oe += 1;
      const be = !U.paused && !U.ended;
      be && (O += 1), le.length < _k && le.push({
        label: V.label,
        playing: be,
        src: !!(U.currentSrc || U.src),
        size: [U.videoWidth || 0, U.videoHeight || 0],
        ready: U.readyState ?? 0,
        connected: !!U.isConnected
      });
    }
    return { ...x, alive: Oe, playing: O, list: le };
  }
  function je() {
    const le = t.now(), Oe = t.memory(), O = {
      t: t.clock(),
      heap: Oe ? { used: Oi(Oe.usedJSHeapSize / ol, 1), total: Oi(Oe.totalJSHeapSize / ol, 1), limit: Oi(Oe.jsHeapSizeLimit / ol, 1) } : null,
      canvas: ae(),
      webgl: { ...I, alive: [...N].filter((V) => !V.lost).length },
      video: _e(),
      frame: { count: $.count, maxMs: Oi($.maxMs), longTasks: H.count, longTaskMaxMs: Oi(H.maxMs) },
      renders: Object.fromEntries([...v].map(([V, U]) => [V, { count: U.count, maxMs: Oi(U.maxMs) }])),
      sources: Object.fromEntries([...R].map(([V, U]) => [V, U()])),
      costMs: Oi(h, 3)
    };
    return $ = { count: 0, maxMs: 0 }, v = /* @__PURE__ */ new Map(), H = { count: 0, maxMs: 0 }, B.push({ record: O, text: JSON.stringify(O) }), B.length > yk && B.shift(), u += 1, u % wk === 0 && st(), h = t.now() - le, O;
  }
  function tt(le = bk) {
    const Oe = JSON.stringify({ ...a, events: j }).slice(0, -1);
    let O = le - Oe.length - 14, V = B.length;
    for (; V > 0 && O - B[V - 1].text.length - 1 >= 0; )
      V -= 1, O -= B[V].text.length + 1;
    return `${Oe},"records":[${B.slice(V).map((U) => U.text).join(",")}]}`;
  }
  function st() {
    if (!a) return;
    const le = t.storage();
    if (le) {
      a.savedAt = t.clock();
      try {
        le.setItem(Iu, tt());
      } catch {
      }
    }
  }
  function Se() {
    a.closed = !0, a.closedAt = t.clock(), a.closedBy = "unload", st();
  }
  function A() {
    var U;
    if (r) return i;
    r = !0;
    const le = t.storage();
    if (!le) return null;
    let Oe = null;
    try {
      if (Oe = le.getItem(Iu), Oe === null) {
        const be = le.getItem(rg);
        return i = be === null ? null : JSON.parse(be), i;
      }
      le.setItem(rg, Oe), le.removeItem(Iu), i = JSON.parse(Oe);
    } catch {
      return i;
    }
    const O = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], V = O.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${O.length} records kept. Its last records:`,
      JSON.stringify(V)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((U = O.at(-1)) == null ? void 0 : U.t) || 0).toISOString()}; ${O.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(V)
    ), i;
  }
  function Te(le) {
    const Oe = le === !0;
    if (A(), Oe !== n) {
      if (n = Oe, n) {
        a = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, u = 0, B.length = 0, l = t.observeLongTasks((O) => {
          for (const V of O)
            H.count += 1, H.maxMs = Math.max(H.maxMs, V.duration);
        }), t.addUnload(Se), s = t.setInterval(je, Sk), st();
        return;
      }
      t.clearInterval(s), s = 0, l == null || l(), l = null, t.removeUnload(Se), a.closed = !0, a.closedAt = t.clock(), a.closedBy = "disabled", st();
    }
  }
  function me() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: a ? { ...a, events: [...j], records: B.map((le) => le.record) } : null,
      previous: i
    };
  }
  function We() {
    const le = t.document(), Oe = new Blob([JSON.stringify(me(), null, 1)], { type: "application/json" }), O = URL.createObjectURL(Oe), V = le.createElement("a");
    V.href = O, V.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, V.click(), setTimeout(() => URL.revokeObjectURL(O), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: re,
    releaseCanvas: fe,
    trackCanvas: E,
    createVideo: Me,
    trackVideo: te,
    watchContext: xe,
    addSource: he,
    frameStart: J,
    frameEnd: D,
    renderEnd: T,
    sample: je,
    serialize: tt,
    recoverPrevious: A,
    setEnabled: Te,
    exportData: me,
    download: We
  };
}
const Jn = Mk(), En = Jn.createCanvas, Mf = Jn.releaseCanvas, Ou = Jn.trackCanvas, Tc = Jn.createVideo, ig = Jn.trackVideo, Nk = Jn.addSource, Pk = Jn.frameStart, Ak = Jn.frameEnd;
function Ay(e, t) {
  const n = Jn.watchContext(e.canvas, t), r = Jn.addSource(`three.${t}`, () => e.stats()), i = (a) => (s) => {
    const l = Jn.frameStart(), u = a(s);
    return Jn.renderEnd(t, l), u;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(a) {
      e.dispose(a), !(a != null && a.lost) && (r(), n());
    }
  };
}
const Ck = {
  id: mk,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Jn.setEnabled(e === !0)
}, og = {
  id: gk,
  label: "Export Panorama Suite diagnostics",
  function: () => Jn.download()
};
function qo(e, t) {
  const n = En({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Ik() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ag(e, t = 8) {
  var p;
  const n = (p = e == null ? void 0 : e.getContext) == null ? void 0 : p.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || i < 1) return null;
  const a = n.getImageData(0, 0, r, i).data;
  let s = r, l = i, u = -1, h = -1;
  for (let g = 0; g < i; g += 1)
    for (let b = 0; b < r; b += 1)
      a[(g * r + b) * 4 + 3] <= t || (b < s && (s = b), g < l && (l = g), b > u && (u = b), g > h && (h = g));
  return u < s || h < l ? null : {
    minX: s,
    minY: l,
    maxX: u,
    maxY: h,
    width: u - s + 1,
    height: h - l + 1,
    aspect: Number(((u - s + 1) / Math.max(1, h - l + 1)).toFixed(4))
  };
}
function Md(e, t) {
  return En({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Fi(e, t, n) {
  if (!e) return qo(t, n);
  const r = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== i) && (e.canvas.width = r, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function an(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Eu = null, Tu = null, sg = null, lg = null, on = null, Ga = null;
function Ok() {
  if (Tu) return Tu;
  const e = 6, t = 17, n = En({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Tu = n, n;
}
function Fu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Eu = Fi(Eu, n, r);
  const i = Eu;
  an(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", lg !== i.ctx && (sg = i.ctx.createPattern(Ok(), "repeat"), lg = i.ctx), i.ctx.fillStyle = sg, i.ctx.fillRect(0, 0, n, r), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Ek(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Tk(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Fk(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * i) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Dk(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const qt = /* @__PURE__ */ new Map(), Nd = 128;
function Lk(e, t, n, r, i, a) {
  const s = Math.max(1, Math.round(e)), l = Math.max(0, Math.min(1, t)), u = `${s}:${l.toFixed(2)}:${n}:${r}:${i}:${a.toFixed(3)}`;
  if (qt.has(u)) {
    const j = qt.get(u);
    return qt.delete(u), qt.set(u, j), j;
  }
  qt.size >= Nd && qt.delete(qt.keys().next().value);
  const h = s * 2 + 2, p = s + 1, g = Md(h, h), b = g.getContext("2d"), x = l * s, S = s + 1, k = `rgba(${n},${r},${i},${a})`, N = `rgba(${n},${r},${i},0)`, I = b.createRadialGradient(p, p, x, p, p, S);
  return I.addColorStop(0, k), I.addColorStop(1, N), b.fillStyle = I, b.fillRect(0, 0, h, h), qt.set(u, g), g;
}
function Rk(e, t, n, r, i, a, s) {
  const { r: l, g: u, b: h, a: p } = r, g = Math.max(2, Math.ceil(e) * 2), b = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, i), S = Math.max(0, Math.min(0.99, a)), k = Math.max(0, Math.min(1, s ?? 0)), N = `chisel:${g}:${b}:${n.toFixed(2)}:${l}:${u}:${h}:${p.toFixed(3)}:${x.toFixed(2)}:${S.toFixed(2)}:${k.toFixed(2)}`;
  if (qt.has(N)) {
    const ye = qt.get(N);
    return qt.delete(N), qt.set(N, ye), ye;
  }
  qt.size >= Nd && qt.delete(qt.keys().next().value);
  const I = Md(g, b), j = I.getContext("2d"), R = j.createImageData(g, b), $ = R.data, v = Math.max(0, e - t), H = Math.max(0, Math.min(1, n)), B = 1 + x;
  for (let ye = 0; ye < b; ye++)
    for (let Ae = 0; Ae < g; Ae++) {
      const E = Ae + 0.5 - e, te = ye + 0.5 - t, re = Math.max(Math.abs(E) - v, 0), Me = Math.hypot(re, te) / t;
      if (Me >= 1) continue;
      const xe = Me <= H ? 1 : Math.max(0, (1 - Me) / Math.max(1e-4, 1 - H)), he = 1 - Me, J = 1 + x * (1 - he) * (1 - he), D = 1 - S * he * he, T = J * D / B;
      let ae = 1;
      if (k > 0) {
        const tt = Math.floor((te + t) / 1.5), st = Math.floor((E + e) / 8), Se = yo(oa(tt * 41 + 500, st * 19 + 300));
        ae = 1 - k * 0.42 * Se;
      }
      const _e = Math.round(255 * Math.min(1, p * xe * T * ae));
      if (_e <= 0) continue;
      const je = (ye * g + Ae) * 4;
      $[je] = l, $[je + 1] = u, $[je + 2] = h, $[je + 3] = _e;
    }
  return j.putImageData(R, 0, 0), qt.set(N, I), I;
}
function oa(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i >>> 0;
}
function yo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Vk(e, t, n, r, i, a, s) {
  const l = e + 0.5 - n, u = t + 0.5 - r, h = Math.max(0, n - r), p = Math.max(Math.abs(l) - h, 0), g = Math.hypot(p, u) / r;
  if (g >= 1) return 0;
  const b = yo(oa(e * 17 + 3, t * 13 + 7)), x = g + a * 0.22 * (b - 0.5);
  if (x >= 1) return 0;
  const S = x <= i ? 1 : Math.max(0, (1 - x) / Math.max(1e-4, 1 - i)), k = $k(e, t, l, u, n, r), N = a * 0.55;
  if (k < N) return 0;
  const j = 0.45 + 0.55 * ((k - N) / Math.max(1e-4, 1 - N));
  return Math.round(255 * Math.min(1, s * S * j));
}
function $k(e, t, n, r, i, a) {
  const s = Math.floor((n + i) / 3), l = Math.floor((r + a) / 2), u = yo(oa(s * 13 + 700, l * 17 + 400)), h = Math.floor((n + i) / 1.5), p = Math.floor((r + a) / 1.5), g = yo(oa(h * 23 + 800, p * 29 + 500)), b = yo(oa(e * 3 + 100, t * 5 + 200));
  return u * 0.55 + g * 0.3 + b * 0.15;
}
function zk(e, t, n, r, i) {
  const { r: a, g: s, b: l, a: u } = r, h = Math.max(2, Math.ceil(e) * 2), p = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, Math.min(1, i)), b = `crayon:${h}:${p}:${n.toFixed(2)}:${a}:${s}:${l}:${u.toFixed(3)}:${g.toFixed(2)}`;
  if (qt.has(b)) {
    const j = qt.get(b);
    return qt.delete(b), qt.set(b, j), j;
  }
  qt.size >= Nd && qt.delete(qt.keys().next().value);
  const x = Md(h, p), S = x.getContext("2d"), k = S.createImageData(h, p), N = k.data, I = Math.max(0, Math.min(1, n));
  for (let j = 0; j < p; j++)
    for (let R = 0; R < h; R++) {
      const $ = Vk(R, j, e, t, I, g, u);
      if ($ <= 0) continue;
      const v = (j * h + R) * 4;
      N[v] = a, N[v + 1] = s, N[v + 2] = l, N[v + 3] = $;
    }
  return S.putImageData(k, 0, 0), qt.set(b, x), x;
}
function Cy(e, t, n) {
  var k, N;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), i = Fk(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = jk(t), l = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), u = Number(((k = t == null ? void 0 : t.angle) == null ? void 0 : k.value) ?? 0), h = Dk(t, i), p = String(((N = t == null ? void 0 : t.targetSpace) == null ? void 0 : N.viewMode) || ""), g = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && p !== "unwrap", b = t == null ? void 0 : t.scatter, x = b ? { radius: Number(b.radius ?? 1.5), count: Math.max(1, Math.round(b.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const I = i * l, j = i, R = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), $ = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), v = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = Rk(I, j, a, s, R, $, v);
  } else if (r === "crayon") {
    const I = i * l, j = i, R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = zk(I, j, a, s, R);
  } else
    S = Lk(i, a, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: S, radiusPx: i, spacingPx: h, desc: n, aspect: l, angle: u, stampKind: r, scatter: x, latitudeCorrection: g };
}
function jk(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), a = Math.max(0, Math.min(1, Number(r.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a
  };
}
function Hk(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${i})`;
}
function cg(e, t, n, r, i) {
  const a = e.angle, s = e.desc.width;
  function l(h, p) {
    a === 0 ? e.ctx.drawImage(e.stampTex, h - i, p - r, i * 2, r * 2) : (e.ctx.save(), e.ctx.translate(h, p), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -i, -r, i * 2, r * 2), e.ctx.restore());
  }
  l(t, n);
  const u = a === 0 ? i : i * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - u < 0 && l(t + s, n), t + u > s && l(t - s, n);
}
function Pd(e, t, n, r) {
  const i = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: h, count: p } = e.scatter, g = h * e.radiusPx * i, b = oa(t, n);
    for (let x = 0; x < p; x++) {
      const S = yo(b + x * 2) * Math.PI * 2, k = Math.sqrt(yo(b + x * 2 + 1)) * g, N = t + Math.cos(S) * k, I = n + Math.sin(S) * k, j = Math.max(0.5, e.radiusPx * i * 0.48), R = (0.5 - I / Math.max(1, e.desc.height)) * Math.PI, $ = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(R)) : 1, v = j * e.aspect * $;
      cg(e, N, I, j, v);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * i), s = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, l = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, u = a * e.aspect * l;
  cg(e, t, n, a, u);
}
function ug(e, t, n) {
  const r = Tk(t);
  if (!e || r.length === 0) return;
  const i = n.width, a = n.height, s = Cy(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const l = [];
  for (let b = 0; b < r.length; b++) {
    let x = Number(r[b].u || 0) * i;
    const S = Number(r[b].v || 0) * a;
    b > 0 && Math.abs(x - l[b - 1].x) > i * 0.5 && (x += x < l[b - 1].x ? i : -i), l.push({ x, y: S });
  }
  if (Pd(s, l[0].x, l[0].y, 1), l.length === 1) {
    e.restore();
    return;
  }
  let u = l[0], h = l[0], p = l[0], g = 0;
  for (let b = 1; b < l.length; b++) {
    const x = l[b], S = { x: (h.x + x.x) * 0.5, y: (h.y + x.y) * 0.5 };
    b === 1 ? g = _s(s, p.x, p.y, S.x, S.y, g) : g = Yl(s, u, p, S, x, g), u = h, h = x, p = S;
  }
  l.length === 2 ? _s(s, p.x, p.y, h.x, h.y, g) : Yl(s, u, p, h, h, g), e.restore();
}
function kl(e, t, n) {
  var g;
  const r = Array.isArray((g = t == null ? void 0 : t.geometry) == null ? void 0 : g.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const i = n.width, a = n.height, s = Hk(t), l = [];
  let u = 1 / 0, h = -1 / 0;
  for (let b = 0; b < r.length; b++) {
    const x = Ek(r[b]);
    let S = Number(x.x || 0) * i;
    b > 0 && Math.abs(S - l[b - 1].x) > i * 0.5 && (S += S < l[b - 1].x ? i : -i), l.push({ x: S, y: Number(x.y || 0) * a }), S < u && (u = S), S > h && (h = S);
  }
  function p(b) {
    e.beginPath(), e.moveTo(l[0].x + b, l[0].y);
    for (let x = 1; x < l.length; x++) e.lineTo(l[x].x + b, l[x].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, p(0), u < 0 && p(i), h > i && p(-i), e.restore();
}
function al(e, t, n) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    kl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? ug(e, t, n) : (Ga = Fi(Ga, n.width, n.height), an(Ga), ug(Ga.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(Ga.canvas, 0, 0), e.restore());
}
function no(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function _s(e, t, n, r, i, a) {
  const s = r - t, l = i - n, u = Math.hypot(s, l);
  if (u < 1e-9) return a;
  let h = e.spacingPx - a;
  for (; h <= u; ) {
    const p = h / u;
    Pd(e, t + s * p, n + l * p, 1), h += e.spacingPx;
  }
  return u - h + e.spacingPx;
}
function Yl(e, t, n, r, i, a) {
  const l = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, u = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, h = Math.sqrt(Math.hypot(i.x - r.x, i.y - r.y)) + 1e-4, p = 0, g = l, b = g + u, x = b + h, S = b - g, k = 16;
  let N = a, I = n.x, j = n.y;
  for (let R = 1; R <= k; R++) {
    const $ = g + S * R / k, v = ((g - $) * t.x + ($ - p) * n.x) / (g - p), H = ((g - $) * t.y + ($ - p) * n.y) / (g - p), B = ((b - $) * n.x + ($ - g) * r.x) / (b - g), ye = ((b - $) * n.y + ($ - g) * r.y) / (b - g), Ae = ((x - $) * r.x + ($ - b) * i.x) / (x - b), E = ((x - $) * r.y + ($ - b) * i.y) / (x - b), te = ((b - $) * v + ($ - p) * B) / (b - p), re = ((b - $) * H + ($ - p) * ye) / (b - p), fe = ((x - $) * B + ($ - g) * Ae) / (x - g), Me = ((x - $) * ye + ($ - g) * E) / (x - g), xe = ((b - $) * te + ($ - g) * fe) / (b - g), he = ((b - $) * re + ($ - g) * Me) / (b - g);
    N = _s(e, I, j, xe, he, N), I = xe, j = he;
  }
  return N;
}
function Gk(e, t, n, r) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const a = e.descriptor, s = a.width, l = n * a.height, u = e.activeStroke;
  let h = t * s;
  if (u && Math.abs(h - u.prev.x) > s * 0.5 && (h += h < u.prev.x ? s : -s), !u) {
    const x = Cy(i, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), k = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), N = String((r == null ? void 0 : r.toolKind) || "") === "eraser", I = String((r == null ? void 0 : r.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Pd(x, h, l, 1), e.activeStroke = {
      pprev: { x: h, y: l },
      prev: { x: h, y: l },
      lastMidX: h,
      lastMidY: l,
      stampTex: x.stampTex,
      radiusPx: x.radiusPx,
      spacingPx: x.spacingPx,
      aspect: x.aspect,
      angle: x.angle,
      stampKind: x.stampKind,
      scatter: x.scatter,
      latitudeCorrection: x.latitudeCorrection,
      strokeOpacity: S,
      velocityWidthFactor: k,
      distSinceStamp: 0,
      isEraser: N,
      layerKind: I,
      pointCount: 1
    }, Cn(e);
    return;
  }
  const p = (u.prev.x + h) * 0.5, g = (u.prev.y + l) * 0.5;
  i.globalCompositeOperation = "source-over";
  const b = {
    ctx: i,
    stampTex: u.stampTex,
    radiusPx: u.radiusPx,
    spacingPx: u.spacingPx,
    desc: a,
    aspect: u.aspect,
    angle: u.angle,
    stampKind: u.stampKind,
    scatter: u.scatter,
    latitudeCorrection: u.latitudeCorrection
  };
  u.pointCount === 1 ? u.distSinceStamp = _s(b, u.lastMidX, u.lastMidY, p, g, u.distSinceStamp) : u.distSinceStamp = Yl(
    b,
    u.pprev,
    { x: u.lastMidX, y: u.lastMidY },
    { x: p, y: g },
    { x: h, y: l },
    u.distSinceStamp
  ), u.pprev = u.prev, u.prev = { x: h, y: l }, u.lastMidX = p, u.lastMidY = g, u.pointCount++, Cn(e);
}
function Nf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, i = /* @__PURE__ */ new Map(), a = qo(t, n), s = {
    descriptor: r,
    committedMask: qo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, l = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: qo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, u = qo(t, n);
  let h = null, p = "", g = null;
  const b = /* @__PURE__ */ new Map();
  let x = null;
  function S(fe) {
    return {
      actionGroupId: fe,
      descriptor: r,
      committedPaint: qo(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function k(fe) {
    let Me = i.get(fe);
    return Me || (Me = S(fe), i.set(fe, Me)), Me;
  }
  function N(fe) {
    return p === "mask" ? s : h ? k(h) : l;
  }
  function I(fe) {
    var T;
    const Me = !g || g.length !== fe.length || fe.some((ae, _e) => ae !== g[_e]), xe = p === "paint" && ((T = h ? i.get(h) : l) == null ? void 0 : T.activeStroke) || null;
    let he = s.displayDirty || l.displayDirty || Me;
    for (const ae of fe) {
      const _e = i.get(ae);
      if (_e != null && _e.displayDirty) {
        he = !0;
        break;
      }
    }
    if (xe && (he = !0), !he) return;
    s.displayDirty = !1, l.displayDirty = !1;
    for (const ae of fe) {
      const _e = i.get(ae);
      _e && (_e.displayDirty = !1);
    }
    g = [...fe];
    const J = u.ctx;
    an(u);
    const D = !!(xe != null && xe.isEraser);
    for (const ae of fe) {
      const _e = i.get(ae);
      if (!_e) continue;
      const tt = h === _e.actionGroupId && p === "paint" ? _e.activeStroke : null;
      if (D)
        on = Fi(on, t, n), an(on), on.ctx.drawImage(_e.committedPaint.canvas, 0, 0), no(on.ctx, a.canvas), J.drawImage(on.canvas, 0, 0);
      else if (J.drawImage(_e.committedPaint.canvas, 0, 0), tt) {
        const st = _e.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, tt.strokeOpacity ?? 1));
        J.save(), J.globalAlpha = st, J.drawImage(a.canvas, 0, 0), J.restore();
      }
    }
  }
  function j(fe) {
    var xe, he, J, D, T;
    for (const ae of i.values())
      an(ae.committedPaint), an(ae.currentStroke), ae.activeStroke = null, Cn(ae);
    an(s.committedMask), an(s.currentStroke), s.activeStroke = null, s.painted = !1, b.clear(), Cn(s), Cn(l), g = null;
    const Me = [
      ...Array.isArray((he = (xe = fe == null ? void 0 : fe.painting) == null ? void 0 : xe.paint) == null ? void 0 : he.strokes) ? fe.painting.paint.strokes : [],
      ...Array.isArray((D = (J = fe == null ? void 0 : fe.painting) == null ? void 0 : J.mask) == null ? void 0 : D.strokes) ? fe.painting.mask.strokes : []
    ];
    for (const ae of Me) {
      if (((T = ae == null ? void 0 : ae.targetSpace) == null ? void 0 : T.kind) !== "ERP_GLOBAL") continue;
      const _e = String((ae == null ? void 0 : ae.layerKind) || "paint"), tt = String((ae == null ? void 0 : ae.toolKind) || "pen") === "eraser";
      if (_e === "mask") {
        const st = s.descriptor;
        tt ? (on = Fi(on, st.width, st.height), an(on), al(on.ctx, ae, st), no(s.committedMask.ctx, on.canvas)) : (al(s.committedMask.ctx, ae, st), s.painted = !0);
        continue;
      }
      if (tt) {
        on = Fi(on, r.width, r.height), an(on), al(on.ctx, ae, r);
        for (const st of i.values())
          no(st.committedPaint.ctx, on.canvas), Cn(st);
      } else {
        const st = String((ae == null ? void 0 : ae.actionGroupId) || "__default__"), Se = k(st), A = Se.descriptor;
        al(Se.committedPaint.ctx, ae, A), Cn(Se);
      }
    }
    I([...i.keys()]);
  }
  function R(fe, Me) {
    p = String((fe == null ? void 0 : fe.layerKind) || "");
    const xe = String((fe == null ? void 0 : fe.toolKind) || "") === "eraser";
    if (p === "mask")
      h = null, an(s.currentStroke), s.activeStroke = null, Cn(s);
    else {
      const he = xe ? l : k(String((fe == null ? void 0 : fe.actionGroupId) || "__default__"));
      h = xe ? "" : String((fe == null ? void 0 : fe.actionGroupId) || "__default__"), an(he.currentStroke), he.activeStroke = null, Cn(he);
    }
  }
  function $(fe, Me) {
    var _e;
    const xe = String((fe == null ? void 0 : fe.layerKind) || "paint"), he = String((fe == null ? void 0 : fe.toolKind) || "") === "eraser", J = xe === "mask" ? s : he ? l : k(String((fe == null ? void 0 : fe.actionGroupId) || h || "__default__")), D = J.activeStroke, T = J.descriptor;
    if (D && D.pointCount > 1) {
      const je = J.currentStroke.ctx;
      je.globalCompositeOperation = "source-over";
      const tt = {
        ctx: je,
        stampTex: D.stampTex,
        radiusPx: D.radiusPx,
        spacingPx: D.spacingPx,
        desc: T,
        aspect: D.aspect,
        angle: D.angle,
        stampKind: D.stampKind,
        scatter: D.scatter,
        latitudeCorrection: D.latitudeCorrection
      };
      D.pointCount === 2 ? _s(tt, D.lastMidX, D.lastMidY, D.prev.x, D.prev.y, D.distSinceStamp) : Yl(tt, D.pprev, { x: D.lastMidX, y: D.lastMidY }, D.prev, D.prev, D.distSinceStamp);
    }
    J.lassoPreviewActive && (an(J.currentStroke), kl(J.currentStroke.ctx, fe, T), J.lassoPreviewActive = !1);
    const ae = xe === "mask" ? s.committedMask : J.committedPaint;
    if (he && xe === "paint")
      for (const je of i.values())
        no(je.committedPaint.ctx, J.currentStroke.canvas), Cn(je);
    else if (he)
      no(ae.ctx, J.currentStroke.canvas);
    else {
      xe === "mask" && (s.painted = !0);
      const je = Math.max(0, Math.min(1, (D == null ? void 0 : D.strokeOpacity) ?? 1));
      ae.ctx.save(), ae.ctx.globalAlpha = je, ae.ctx.drawImage(J.currentStroke.canvas, 0, 0), ae.ctx.restore();
    }
    Ik() && (String((fe == null ? void 0 : fe.toolKind) || ""), String((T == null ? void 0 : T.kind) || ""), Number((T == null ? void 0 : T.width) || 0), Number((T == null ? void 0 : T.height) || 0), String(((_e = fe == null ? void 0 : fe.targetSpace) == null ? void 0 : _e.viewMode) || ""), Number((fe == null ? void 0 : fe.aspect) ?? 1), ag(J.currentStroke.canvas), ag(ae.canvas), void 0), an(J.currentStroke), J.activeStroke = null, Cn(J), b.clear(), h = null, p = "", I([...i.keys()]);
  }
  function v(fe) {
    if (p === "mask")
      an(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, Cn(s);
    else if (p === "paint" && !h)
      an(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, Cn(l);
    else if (h) {
      const Me = i.get(h);
      Me && (an(Me.currentStroke), Me.activeStroke = null, Me.lassoPreviewActive = !1, Cn(Me));
    }
    b.clear(), h = null, p = "", I([...i.keys()]);
  }
  function H(fe, Me) {
    var he;
    if (p = String((fe == null ? void 0 : fe.layerKind) || ""), String(((he = fe == null ? void 0 : fe.geometry) == null ? void 0 : he.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        an(s.currentStroke), kl(s.currentStroke.ctx, fe, s.descriptor), s.lassoPreviewActive = !0, Cn(s);
      else {
        const J = String((fe == null ? void 0 : fe.toolKind) || "") === "eraser", D = J ? l : k(String((fe == null ? void 0 : fe.actionGroupId) || h || "__default__"));
        h = J ? "" : String((fe == null ? void 0 : fe.actionGroupId) || h || "__default__"), an(D.currentStroke), kl(D.currentStroke.ctx, fe, D.descriptor), D.lassoPreviewActive = !0, Cn(D);
      }
      I([...i.keys()]);
    }
  }
  function B(fe) {
    return I(fe ?? [...i.keys()]), {
      displayPaint: u,
      committedMask: s.committedMask,
      descriptor: r
    };
  }
  function ye(fe) {
    return i.get(String(fe)) ?? null;
  }
  function Ae() {
    return [...i.keys()];
  }
  function E(fe) {
    var je;
    const Me = i.get(String(fe));
    if (!Me) return null;
    const xe = p === "paint" && h === Me.actionGroupId, he = p === "paint" && ((je = h ? i.get(h) : l) == null ? void 0 : je.activeStroke) || null, J = !!(he != null && he.isEraser), D = xe ? Me.activeStroke : null;
    if (!J && !D) return Me.committedPaint.canvas;
    const T = `${Me.revision}:${l.revision}:${J}`, ae = b.get(Me.actionGroupId);
    if ((ae == null ? void 0 : ae.key) === T) return ae.surface.canvas;
    const _e = Fi((ae == null ? void 0 : ae.surface) ?? null, t, n);
    return an(_e), _e.ctx.drawImage(Me.committedPaint.canvas, 0, 0), J ? no(_e.ctx, a.canvas) : (_e.ctx.save(), _e.ctx.globalAlpha = Me.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, D.strokeOpacity ?? 1)), _e.ctx.drawImage(a.canvas, 0, 0), _e.ctx.restore()), b.set(Me.actionGroupId, { key: T, surface: _e }), _e.canvas;
  }
  function te() {
    const fe = p === "mask" ? s.activeStroke : null;
    return !s.painted && (!fe || fe.isEraser) ? null : `${s.revision}:${!!fe}`;
  }
  function re() {
    const fe = te();
    if (fe === null)
      return x = null, null;
    if ((x == null ? void 0 : x.key) === fe) return x.surface.canvas;
    const Me = Fi((x == null ? void 0 : x.surface) ?? null, t, n);
    an(Me);
    const xe = p === "mask" ? s.activeStroke : null;
    return xe != null && xe.isEraser ? (on = Fi(on, t, n), an(on), on.ctx.drawImage(s.committedMask.canvas, 0, 0), no(on.ctx, a.canvas), Fu(Me.ctx, on.canvas)) : (Fu(Me.ctx, s.committedMask.canvas), xe && Fu(Me.ctx, a.canvas)), x = { key: fe, surface: Me }, Me.canvas;
  }
  return {
    rebuildCommitted: j,
    beginStroke: R,
    appendStrokePoint: Gk,
    updateActiveStroke: H,
    commitActiveStroke: $,
    cancelActiveStroke: v,
    getErpTarget: B,
    ensureTarget: N,
    getGroupTarget: ye,
    getGroupDisplayCanvas: E,
    getMaskDisplayCanvas: re,
    getMaskDisplayRevision: te,
    getAllGroupIds: Ae
  };
}
function ve(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Xt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Ad(e, t) {
  let n = Xt(t) - Xt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Pf = 3;
function Ka(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Xl(e, t = 0) {
  const n = Ka(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Ka(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const i = Ka(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const a = Ka(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Ka(t) || 0);
}
function Iy(e) {
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
const fg = Math.PI / 180, dg = 0.12, Kk = Pf, Wk = 35, Bk = 140, Ja = 100, Uk = 20, pg = 0.8;
function Yk(e, t, n) {
  const r = Math.max(1, Number(t || 1)), i = Math.max(1, Number(n || 1)), a = ve(Number(e || Ja), 1, 179) * fg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (i / r)) / fg;
}
function Cd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ja })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), l = typeof e.onDebug == "function" ? e.onDebug : null, u = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function h(j, R = null) {
    l && l(j, R);
  }
  function p(j, R, $ = null, v = performance.now()) {
    return u.drag.active = !0, u.drag.lastX = Number(j || 0), u.drag.lastY = Number(R || 0), u.drag.lastTs = Number(v || performance.now()), u.drag.pointerId = $, u.inertia.active = !1, u.inertia.vx = 0, u.inertia.vy = 0, u.inertia.lastTs = u.drag.lastTs, u.velHistory = [], h("drag", { phase: "start", x: u.drag.lastX, y: u.drag.lastY, pointerId: $ }), !0;
  }
  function g(j, R, $ = "pano", v = performance.now()) {
    if (!u.drag.active) return !1;
    const H = Number(v || performance.now()), B = Number(j), ye = Number(R), Ae = B - u.drag.lastX, E = ye - u.drag.lastY;
    u.drag.lastX = B, u.drag.lastY = ye, u.drag.lastTs = H;
    const te = r() || { x: 1, y: 1 }, re = Number(te.x || 1), fe = Number(te.y || 1), Me = { ...t() };
    let xe = 0, he = 0;
    if ($ === "unwrap") {
      const D = i() || { w: 1, h: 1 }, T = Math.max(1, Number(D.w || 1)), ae = Math.max(1, Number(D.h || 1)), _e = Ae / T, je = E / ae;
      xe = -_e * 360 * re, he = je * 180 * fe;
    } else {
      const D = a() || { w: 0, h: 0 }, T = Math.max(1, Number(D.w || 0)), ae = Math.max(1, Number(D.h || 0));
      if (T > 1 && ae > 1) {
        const _e = ve(Number(Me.fov || Ja), 1, 179), je = ve(Yk(_e, T, ae), 0.1, 179);
        xe = -(Ae / T) * _e * re, he = E / ae * je * fe;
      } else
        xe = -Ae * dg * re, he = E * dg * fe;
    }
    Me.yaw = Xt(Number(Me.yaw || 0) + xe), Me.pitch = ve(Number(Me.pitch || 0) + he, -89.9, 89.9), n(Me), u.velHistory.push({ ts: H, yaw: Me.yaw, pitch: Me.pitch });
    let J = 0;
    for (; J < u.velHistory.length - 1 && u.velHistory[J].ts < H - 100; ) J++;
    return J > 0 && u.velHistory.splice(0, J), u.inertia.active = !1, u.inertia.lastTs = H, s(), h("drag", { phase: "move", dx: Ae, dy: E, dYaw: xe, dPitch: he }), !0;
  }
  function b(j = performance.now()) {
    if (!u.drag.active) return !1;
    u.drag.active = !1;
    const R = Number(j || performance.now());
    u.drag.lastTs = R;
    const $ = u.velHistory.filter((H) => R - H.ts <= 80);
    if ($.length >= 2) {
      const H = $[0], B = $.at(-1), ye = Math.max(1e-3, (B.ts - H.ts) / 1e3);
      let Ae = B.yaw - H.yaw;
      Ae > 180 && (Ae -= 360), Ae < -180 && (Ae += 360), u.inertia.vx = Ae / ye, u.inertia.vy = (B.pitch - H.pitch) / ye;
    } else
      u.inertia.vx = 0, u.inertia.vy = 0;
    u.velHistory = [];
    const v = Math.hypot(u.inertia.vx, u.inertia.vy);
    return u.inertia.active = v > Uk, u.inertia.lastTs = R, h("drag", { phase: "end", speed: v, inertiaActive: u.inertia.active }), !0;
  }
  function x(j = performance.now()) {
    if (!u.inertia.active) return !1;
    const R = Number(j || performance.now()), $ = Math.max(1e-3, (R - (u.inertia.lastTs || R)) / 1e3);
    u.inertia.lastTs = R;
    const v = { ...t() };
    v.yaw = Xt(Number(v.yaw || 0) + u.inertia.vx * $), v.pitch = ve(Number(v.pitch || 0) + u.inertia.vy * $, -89.9, 89.9);
    const H = Math.exp(-5.5 * $);
    return u.inertia.vx *= H, u.inertia.vy *= H, Math.abs(u.inertia.vx) < pg && Math.abs(u.inertia.vy) < pg && (u.inertia.vx = 0, u.inertia.vy = 0, u.inertia.active = !1), n(v), s(), u.inertia.active;
  }
  function S() {
    const j = u.drag.active || u.inertia.active || u.inertia.vx !== 0 || u.inertia.vy !== 0;
    return u.drag.active = !1, u.drag.pointerId = null, u.inertia.active = !1, u.inertia.vx = 0, u.inertia.vy = 0, u.velHistory = [], j;
  }
  function k(j) {
    const R = Math.sign(Number(j || 0));
    if (!R) return !1;
    const $ = { ...t() }, v = Number($.fov || Ja);
    return $.fov = ve(v + R * Kk, Wk, Bk), n($), s(), h("wheel", { deltaSign: R, fovBefore: v, fovAfter: $.fov }), !0;
  }
  function N(j, R = 0) {
    return k(Xl(j, R));
  }
  function I() {
    n({ yaw: 0, pitch: 0, fov: Ja }), u.inertia.active = !1, u.inertia.vx = 0, u.inertia.vy = 0, s();
  }
  return {
    state: u,
    startDrag: p,
    moveDrag: g,
    endDrag: b,
    stepInertia: x,
    stopMotion: S,
    applyWheel: k,
    applyWheelEvent: N,
    resetView: I
  };
}
const Dt = Math.PI / 180, bn = 180 / Math.PI;
function vr(e, t, n) {
  return { x: e, y: t, z: n };
}
function ql(e, t) {
  return vr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Jl(e, t) {
  return vr(e.x * t, e.y * t, e.z * t);
}
function Du(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Id(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return vr(e.x / t, e.y / t, e.z / t);
}
function qn(e, t) {
  const n = e * Dt, r = t * Dt, i = Math.cos(r);
  return vr(i * Math.sin(n), Math.sin(r), i * Math.cos(n));
}
function va(e, t, n = 0) {
  const r = Number(e || 0) * Dt, i = Number(t || 0) * Dt, a = n * Dt, s = Math.cos(r), l = Math.sin(r), u = Math.cos(i), h = Math.sin(i), p = Math.cos(a), g = Math.sin(a);
  return {
    right: vr(
      s * p - l * h * g,
      u * g,
      -l * p - s * h * g
    ),
    up: vr(
      -s * g - l * h * p,
      u * p,
      l * g - s * h * p
    ),
    fwd: vr(l * u, h, s * u)
  };
}
function Zl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function $t(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Xk() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function qk(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const i = String(r.actionGroupId || r.id || "").trim();
    if (!i || n.has(i)) continue;
    n.add(i);
    const a = $t(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(a ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function Jk(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Zk(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = $t(e.t, 0), r = $t(e.widthScale, null), i = $t(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = $t(e.u, null), s = $t(e.v, null);
    if (a == null || s == null) return null;
    const l = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: n
    };
    return r != null && (l.widthScale = Math.max(0, r)), i != null && (l.pressureLike = Math.max(0, i)), l;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = $t(e.u, null), s = $t(e.v, null);
    if (a == null || s == null) return null;
    const l = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: s,
      t: n
    };
    return r != null && (l.widthScale = Math.max(0, r)), i != null && (l.pressureLike = Math.max(0, i)), l;
  }
  return null;
}
function sl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const i of e) {
    const a = Zk(i, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Qk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const u = sl(e.points, t, 3);
    return u ? { geometryKind: i, points: u } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || n === "lasso_fill") return null;
  const a = sl(e.points, t, 1);
  if (!a) return null;
  const s = sl(e.rawPoints, t, 1), l = sl(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: a,
    rawPoints: s || a.map((u) => ({ ...u })),
    processedPoints: l || a.map((u) => ({ ...u }))
  };
}
function eM(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Jk(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), i = Qk(e.geometry, n, r, t === "paint");
  if (!i) return null;
  const a = $t(e.size, null), s = $t(e.opacity, null);
  if (a == null || s == null) return null;
  const l = String(e.id || "").trim(), u = String(e.actionGroupId || "").trim();
  if (!l || !u) return null;
  const h = $t(e.radiusValue, null), p = String(e.radiusModel || "").trim() || null;
  let g = null;
  if (t === "paint") {
    const b = e.color;
    if (!b || typeof b != "object") return null;
    g = {
      r: Math.max(0, Math.min(1, $t(b.r, 0))),
      g: Math.max(0, Math.min(1, $t(b.g, 0))),
      b: Math.max(0, Math.min(1, $t(b.b, 0))),
      a: Math.max(0, Math.min(1, $t(b.a, 1)))
    };
  }
  return {
    id: l,
    actionGroupId: u,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, a),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: $t(e.hardness, null),
    flow: $t(e.flow, null),
    spacing: $t(e.spacing, null),
    createdAt: Math.trunc($t(e.createdAt, 0)),
    color: g,
    radiusModel: p,
    radiusValue: h == null ? null : Math.max(0, h),
    geometry: i
  };
}
function hg(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const i = eM(r, t);
    i && n.strokes.push(i);
  }
  return n;
}
function tM(e) {
  if (!e || typeof e != "object") return null;
  const t = $t(e.u0, null), n = $t(e.v0, null), r = $t(e.u1, null), i = $t(e.v1, null);
  if (t == null || n == null || r == null || i == null) return null;
  const a = (l) => Math.max(0, Math.min(1, l)), s = { u0: a(t), v0: a(n), u1: a(r), v1: a(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function nM(e) {
  const t = e || {};
  return {
    du: $t(t.du, 0) ?? 0,
    dv: $t(t.dv, 0) ?? 0,
    rot_deg: $t(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, $t(t.scale, 1) ?? 1)
  };
}
function rM(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const a = tM(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, $t(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: i,
    transform: nM(e.transform)
  } : null;
}
function iM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const i = rM(r, t.length);
    !i || n.has(i.id) || (n.add(i.id), t.push(i));
  }
  return t;
}
function ha(e) {
  const t = Xk();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: qk(e.groups),
    paint: hg(e.paint, "paint"),
    mask: hg(e.mask, "mask"),
    raster_objects: iM(e.raster_objects)
  };
}
const Sr = 1, wr = 179, Af = 85;
function Fc(e) {
  const t = ((yt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Oy(e, t) {
  let n = yt(e, 0) - yt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Ey(e, t, { shiftKey: n = !1 } = {}) {
  let r = yt(e, 0) + yt(t, 0) * bn;
  return n && (r = Math.round(r / 15) * 15), Fc(r);
}
function yt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function $i(e = {}) {
  const t = ve(yt(e.hFOV_deg || 90, 90), Sr, wr), n = ve(yt(e.vFOV_deg || 60, 60), Sr, wr), r = Math.tan(t * Dt * 0.5), i = Math.tan(n * Dt * 0.5);
  return {
    yawDeg: yt(e.yaw_deg, 0),
    pitchDeg: yt(e.pitch_deg, 0),
    rollDeg: yt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: i,
    aspect: r / Math.max(1e-12, i)
  };
}
function bo(e, t) {
  const n = Math.max(1, yt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, yt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = $i(t);
  return Math.max(1, Math.min(
    n / (2 * i.tanHalfX),
    r / (2 * i.tanHalfY)
  ));
}
function Od(e, t) {
  const n = Math.max(1, yt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, yt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, yt(t, 1)), a = Math.min(n, r * i);
  return { width: a, height: a / i };
}
function Ed(e, t) {
  const n = Math.max(1e-12, yt(t, 1)), r = Math.max(1e-6, yt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, yt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = ve(2 * Math.atan(r / (2 * n)) * bn, Sr, wr), s = ve(2 * Math.atan(i / (2 * n)) * bn, Sr, wr);
  return { hFOV_deg: a, vFOV_deg: s };
}
function oM(e, t, n) {
  const r = yt(e == null ? void 0 : e.x, 0), i = yt(e == null ? void 0 : e.y, 0), a = Math.max(1, yt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, yt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), l = $i(t), u = Math.max(1e-12, yt(n, 1)), h = 2 * u * l.tanHalfX, p = 2 * u * l.tanHalfY;
  return {
    x: r + (a - h) * 0.5,
    y: i + (s - p) * 0.5,
    w: h,
    h: p,
    focalPx: u
  };
}
function Td(e, t, n = Af) {
  const r = Math.max(1e-12, yt(t, 1)), i = ve(yt(n, Af), 1, 89.999), a = r * Math.tan(i * Dt), s = Math.max(1, yt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), l = Math.max(1, yt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, a),
    halfH: Math.min(l * 0.5, a)
  };
}
function Ty(e, t, n) {
  const r = Math.max(1e-12, yt(t, 1));
  return {
    x: (yt(n == null ? void 0 : n.x, 0) - yt(e == null ? void 0 : e.x, 0)) / r,
    y: -(yt(n == null ? void 0 : n.y, 0) - yt(e == null ? void 0 : e.y, 0)) / r
  };
}
function aM(e, t) {
  const n = ve(yt(e, 90), Sr, wr), r = Math.max(1e-6, yt(t, 1));
  return ve(
    2 * Math.atan(Math.tan(n * Dt * 0.5) / r) * bn,
    Sr,
    wr
  );
}
function Ml(e, t) {
  const n = ve(yt(e, 60), Sr, wr), r = Math.max(1e-6, yt(t, 1));
  return ve(
    2 * Math.atan(Math.tan(n * Dt * 0.5) * r) * bn,
    Sr,
    wr
  );
}
function mg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function sM(e, t) {
  const n = mg(e, 1), r = mg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const i = 1e3, a = Math.max(1, Math.round(n * i)), s = Math.max(1, Math.round(r * i)), l = (h, p) => p ? l(p, h % p) : h, u = l(a, s) || 1;
  return `${Math.max(1, Math.round(a / u))}:${Math.max(1, Math.round(s / u))}`;
}
function vo(e) {
  const t = ve(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Dt, n = ve(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Dt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function uo(e) {
  const t = vo(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (r == null ? void 0 : r[0]) || sM(t, 1);
}
function Fd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = uo(t), t;
}
function Fy({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: i = 100,
  frameFovDeg: a = null
} = {}) {
  const s = a == null || String(a).trim() === "" ? NaN : Number(a), l = Number.isFinite(s) ? ve(s, Sr, wr) : ve(Math.min(42, yt(i, 100) * 0.42), 8, 96);
  return Fd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: yt(t, 0),
    pitch_deg: ve(yt(n, 0), -89.9, 89.9),
    roll_deg: Fc(r),
    hFOV_deg: l,
    vFOV_deg: l,
    locked: !1
  });
}
function gi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : uo(e);
}
function Dy(e, t) {
  const n = $i(e), r = yt(t, 1);
  if (!(r > 0)) return null;
  const i = 2 * Math.atan(n.tanHalfX * r) * bn, a = 2 * Math.atan(n.tanHalfY * r) * bn;
  return i < Sr || i > wr || a < Sr || a > wr ? null : { hFOV_deg: i, vFOV_deg: a };
}
function Ly(e, t, n = Pf) {
  const r = Math.sign(yt(t, 0)), i = Math.abs(yt(n, Pf));
  if (!r || !(i > 0)) return null;
  const a = $i(e), s = a.hFovDeg + r * i;
  if (s < Sr || s > wr) return null;
  const l = Math.tan(s * Dt * 0.5);
  return Dy(e, l / a.tanHalfX);
}
function Ry(e, t) {
  const n = $i(e), r = va(n.yawDeg, n.pitchDeg, n.rollDeg), i = yt(t == null ? void 0 : t.x, 0), a = yt(t == null ? void 0 : t.y, 0);
  return Id(ql(ql(r.fwd, Jl(r.right, i)), Jl(r.up, a)));
}
function lM(e) {
  return vr(e.x, e.y, -e.z);
}
function Nl(e) {
  return vr(e.x, e.y, -e.z);
}
function Qn(e, t, n = 0) {
  const { right: r, up: i, fwd: a } = va(e, t, n);
  return [
    [r.x, i.x, -a.x],
    [r.y, i.y, -a.y],
    [-r.z, -i.z, a.z]
  ];
}
function Vy(e) {
  const t = Nl(vr(e[0][0], e[1][0], e[2][0])), n = Nl(vr(e[0][1], e[1][1], e[2][1])), r = Nl(vr(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), s = Math.cos(i), l = Math.sin(i), u = Math.atan2(l * n.z - s * n.x, s * t.x - l * t.z);
  return { yawDeg: i * bn, pitchDeg: a * bn, rollDeg: u * bn };
}
function Ss(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, i = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + i * i), 2 * (n * r - i * a), 2 * (n * i + r * a)],
    [2 * (n * r + i * a), 1 - 2 * (n * n + i * i), 2 * (r * i - n * a)],
    [2 * (n * i - r * a), 2 * (r * i + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function ko(e) {
  const [[t, n, r], [i, a, s], [l, u, h]] = e, p = t + a + h;
  if (p > 0) {
    const b = 0.5 / Math.sqrt(p + 1);
    return { x: (u - s) * b, y: (r - l) * b, z: (i - n) * b, w: 0.25 / b };
  }
  if (t > a && t > h) {
    const b = 2 * Math.sqrt(1 + t - a - h);
    return { x: 0.25 * b, y: (n + i) / b, z: (r + l) / b, w: (u - s) / b };
  }
  if (a > h) {
    const b = 2 * Math.sqrt(1 + a - t - h);
    return { x: (n + i) / b, y: 0.25 * b, z: (s + u) / b, w: (r - l) / b };
  }
  const g = 2 * Math.sqrt(1 + h - t - a);
  return { x: (r + l) / g, y: (s + u) / g, z: 0.25 * g, w: (i - n) / g };
}
function ll(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const po = 1e-6, Cf = 1e-6, cM = 1e-9;
function ws(e, t, n, r, i) {
  const a = 1 - i;
  return a * a * a * e + 3 * a * a * i * t + 3 * a * i * i * n + i * i * i * r;
}
function uM(e, t) {
  if (e === "auto") return t;
  const [n, r, i, a] = e;
  let s = 0, l = 1;
  for (let u = 0; u < 50; u += 1) {
    const h = 0.5 * (s + l);
    ws(0, n, i, 1, h) < t ? s = h : l = h;
  }
  return ws(0, r, a, 1, 0.5 * (s + l));
}
function ma(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ga(e, t, n, r) {
  const i = e[t] - e[t - 1], a = e[t + 1] - e[t], s = n.map((b) => -b / i), l = r.map((b) => b / a);
  if (s.reduce((b, x, S) => b + x * l[S], 0) < 0) return n.map(() => 0);
  const u = s.map((b, x) => (b * a + l[x] * i) / (i + a)), h = (b) => Math.sqrt(b.reduce((x, S) => x + S * S, 0)), p = 3 * Math.min(h(s), h(l)), g = h(u);
  return g <= p ? u : u.map((b) => b * p / g);
}
function $y(e, t, n, r) {
  const i = n[r], a = n[r + 1], s = t[r + 1] - t[r], l = i.map((p, g) => a[g] - p);
  let u = l;
  ma(e, r) && (u = ga(t, r, n[r - 1].map((p, g) => p - i[g]), l).map((p) => p * s));
  let h = l;
  return ma(e, r + 1) && (h = ga(t, r + 1, l.map((p) => -p), n[r + 2].map((p, g) => p - a[g])).map((p) => p * s)), [u.map((p) => p / 3), h.map((p) => -p / 3)];
}
function zy(e, t, n, r, i) {
  const [[a], [s]] = $y(e, t, n.map((l) => [l]), r);
  return ws(n[r], n[r] + a, n[r + 1] + s, n[r + 1], i);
}
function fM(e, t, n, r) {
  var h, p;
  const i = e.map((g) => g.value);
  let [a, s] = $y(e, t, i, n);
  a = ((h = e[n].handles) == null ? void 0 : h.out) ?? a, s = ((p = e[n + 1].handles) == null ? void 0 : p.in) ?? s;
  const l = i[n], u = i[n + 1];
  return [0, 1, 2].map((g) => ws(l[g], l[g] + a[g], u[g] + s[g], u[g], r));
}
function Ql([e, t, n, r], [i, a, s, l]) {
  return [
    r * i + e * l + t * s - n * a,
    r * a - e * s + t * l + n * i,
    r * s + e * a - t * i + n * l,
    r * l - e * i - t * a - n * s
  ];
}
function dM(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Lu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function pM([e, t, n, r]) {
  const i = Math.sqrt(e * e + t * t + n * n), a = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return [e * a, t * a, n * a];
}
function If(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ea(e, t) {
  return pM(Ql([-e[0], -e[1], -e[2], e[3]], t));
}
function Ru(e, t, n) {
  return Ql(e, If(ea(e, t).map((r) => n * r)));
}
function Vu(e, t) {
  const n = dM(e, t);
  if (Math.abs(n) > Cf) return n < 0;
  const [r, i, a] = ea(e, t);
  for (const s of [-i, r, a])
    if (Math.abs(s) > Cf) return s < 0;
  return !1;
}
function cl(e) {
  const { x: t, y: n, z: r, w: i } = ko(Qn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, i];
}
function Of(e, t, n, r) {
  const i = t + (n - t) * r;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function hM(e, t, n, r) {
  const i = cl(e[n].value);
  let a = cl(e[n + 1].value);
  Vu(i, a) && (a = Lu(a));
  const s = t[n + 1] - t[n], l = ea(i, a);
  let u = l;
  if (ma(e, n)) {
    let v = cl(e[n - 1].value);
    Vu(v, i) && (v = Lu(v)), u = ga(t, n, ea(i, v), l).map((H) => H * s);
  }
  let h = l;
  if (ma(e, n + 1)) {
    let v = cl(e[n + 2].value);
    Vu(a, v) && (v = Lu(v)), h = ga(t, n + 1, ea(a, i), ea(a, v)).map((H) => H * s);
  }
  const p = Ql(i, If(u.map((v, H) => 0.5 * (v - l[H])))), g = Ql(a, If(l.map((v, H) => 0.5 * (v - h[H])))), [b, x, S, k] = Ru(Ru(i, a, r), Ru(p, g, r), 2 * r * (1 - r)), { yawDeg: N, pitchDeg: I, rollDeg: j } = Vy(Ss({ x: b, y: x, z: S, w: k })), R = e[n].value, $ = e[n + 1].value;
  return {
    yaw_deg: Of(N, R.yaw_deg, $.yaw_deg, r),
    pitch_deg: I,
    roll_deg: Of(j, R.roll_deg, $.roll_deg, r)
  };
}
function xs(e, t) {
  return e.reduce((n, r, i) => n + r * t[i], 0);
}
function ec(e) {
  return Math.sqrt(xs(e, e));
}
function tc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function jy(e, t) {
  const n = xs(e, t), r = t.map((s, l) => s - n * e[l]), i = ec(r), a = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return r.map((s) => s * a);
}
function Jo(e, t) {
  const n = ec(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((i, a) => Math.cos(n) * i + r * t[a]);
}
function ul(e, t, n) {
  return Jo(e, jy(e, t).map((r) => n * r));
}
function $u(e, t) {
  const n = tc(e[t].value), r = tc(e[t + 1].value), i = xs(n, r), a = i < 0 && ec(r.map((u, h) => u - i * n[h])) <= Cf;
  let s;
  if (a) {
    const u = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(u), 0, -Math.PI * Math.sin(u)];
  } else
    s = jy(n, r);
  const l = ec(s);
  return [s, s.map((u, h) => Math.cos(l) * u - l * Math.sin(l) * n[h]), a];
}
function mM(e, t, n, r) {
  const i = tc(e[n].value), a = tc(e[n + 1].value), [s, l, u] = $u(e, n);
  let h = s, p = l;
  const g = t[n + 1] - t[n];
  ma(e, n) && (h = ga(t, n, $u(e, n - 1)[1].map((R) => -R), h).map((R) => R * g)), ma(e, n + 1) && (p = ga(t, n + 1, p.map((R) => -R), $u(e, n + 1)[0]).map((R) => R * g));
  let b, x, S;
  if (u) {
    const R = Math.PI, $ = ws(0, xs(h, s) / R / 3, R - xs(p, l) / R / 3, R, r);
    [b, x, S] = Jo(i, s.map((v) => $ * v / R));
  } else {
    const R = ul(Jo(i, h.map((H) => H / 3)), Jo(a, p.map((H) => -H / 3)), r), $ = ul(Jo(i, h.map((H) => r * H / 3)), R, r), v = ul(R, Jo(a, p.map((H) => -(1 - r) * H / 3)), r);
    [b, x, S] = ul($, v, r);
  }
  const k = Math.hypot(b, S), N = e[n].value.yaw_deg, I = e[n + 1].value.yaw_deg;
  return { yaw_deg: k <= cM ? N + (I - N) * r : Of(Math.atan2(b, S) * 180 / Math.PI, N, I, r), pitch_deg: Math.atan2(x, k) * 180 / Math.PI };
}
function gM(e, t, n, r) {
  const i = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) i[a] = zy(e, t, e.map((s) => s.value[a]), n, r);
  return i;
}
function yM(e, t, n, r) {
  return zy(e, t, e.map((i) => i.value), n, r);
}
const bM = { position: fM, rotation: hM, direction: mM, size: gM };
function Qt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return ll(e[t].value);
  if (n <= r[0].frame + po) return ll(r[0].value);
  const i = r[r.length - 1];
  if (n >= i.frame - po) return ll(i.value);
  let a = 0;
  for (; r[a + 1].frame <= n + po; ) a += 1;
  const s = r[a];
  if (Math.abs(n - s.frame) <= po || s.easing === "hold") return ll(s.value);
  const l = r.map((h) => h.frame), u = uM(s.easing, (n - l[a]) / (l[a + 1] - l[a]));
  return (bM[t] ?? yM)(r, l, a, u);
}
function Ef(e) {
  return Math.min(179, Math.max(0.1, e));
}
function vM(e) {
  return Math.min(1, Math.max(0, e));
}
function Hy(e) {
  return Math.max(1e-6, e);
}
function Gy(e, t) {
  return t - (e.start - e.in);
}
function aa(e, t) {
  return t >= e.start - po && (e.duration === null || t < e.start + e.duration - po);
}
function Dd(e, t) {
  return {
    position: Qt(e, "position", t),
    ...Qt(e, "rotation", t),
    hFOV_deg: Ef(Qt(e, "fov", t)),
    aspect: e.aspect
  };
}
function nc(e, t) {
  const n = Number(t), { camera: r, scene: i } = e, a = Gy(i.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Dd(r, n),
    scene: {
      active: i.visible && aa(i.clip, n),
      clip_frame: a,
      position: Qt(i, "position", a),
      ...Qt(i, "rotation", a),
      scale: Hy(Qt(i, "scale", a))
    },
    stickers: e.stickers.map((s) => _o(s, n))
  };
}
function _M(e, t) {
  if (e.placement === "world")
    return {
      position: Qt(e, "position", t),
      ...Qt(e, "rotation", t),
      scale: Hy(Qt(e, "scale", t))
    };
  const n = Qt(e, "size", t);
  return {
    ...Qt(e, "direction", t),
    roll_deg: Qt(e, "roll", t),
    hFOV_deg: Ef(n.hFOV_deg),
    vFOV_deg: Ef(n.vFOV_deg)
  };
}
function _o(e, t) {
  const n = Gy(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && aa(e.clip, t),
    clip_frame: n,
    ..._M(e, n),
    opacity: vM(Qt(e, "opacity", n))
  };
}
const SM = 2, wM = ["sky", "world"], Tf = ["perspective", "erp"], xM = ["input", "output", "temp"], Ky = [0.42, 0, 0.58, 1], Wy = 1, Ld = 1e3, Ff = 1e7, Rd = Ff;
function _n(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function cn(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Vd(e, t) {
  const n = cn(e, t);
  return n !== null && n > 0 ? n : t;
}
function Zn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Dc(e) {
  const t = cn(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Pl(e) {
  const t = Dc(e);
  return t === null ? null : Zn(t, -Ff, Ff);
}
function _a(e) {
  const t = Vd(e, null);
  return t === null ? null : Zn(t, Wy, Ld);
}
function By(e) {
  const t = Dc(e);
  return t !== null && t >= 1 ? Math.min(t, Rd) : null;
}
function ks(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Uy(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => cn(n, null));
  return t.includes(null) ? null : t;
}
function Yy(e) {
  return Uy(e) || [0, 0, 0];
}
function Xy(e) {
  const t = _n(e) ? e : {};
  return {
    yaw_deg: cn(t.yaw_deg, 0),
    pitch_deg: Zn(cn(t.pitch_deg, 0), -90, 90),
    roll_deg: cn(t.roll_deg, 0)
  };
}
function kM(e) {
  return Zn(cn(e, 90), 0.1, 179);
}
function MM(e) {
  return Vd(e, 1);
}
function NM(e) {
  const t = _n(e) ? e : {};
  return {
    yaw_deg: cn(t.yaw_deg, 0),
    pitch_deg: Zn(cn(t.pitch_deg, 0), -90, 90)
  };
}
function PM(e) {
  return cn(e, 0);
}
function AM(e) {
  const t = _n(e) ? e : {};
  return {
    hFOV_deg: Zn(cn(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Zn(cn(t.vFOV_deg, 20), 0.1, 179)
  };
}
function qy(e) {
  return Zn(cn(e, 1), 0, 1);
}
const $d = [["position", Yy], ["rotation", Xy], ["fov", kM]], Lc = [["position", Yy], ["rotation", Xy], ["scale", MM]], zd = [["direction", NM], ["roll", PM], ["size", AM], ["opacity", qy]], jd = [...Lc, ["opacity", qy]];
function CM(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => cn(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Ky];
}
function IM(e) {
  if (!_n(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Uy(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function OM(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!_n(i)) continue;
    const a = Pl(i.frame);
    if (a === null) continue;
    const s = { frame: a, value: t(i.value), easing: CM(i.easing) }, l = n ? IM(i.handles) : null;
    l && (s.handles = l), r.set(a, s);
  }
  return [...r.keys()].sort((i, a) => i - a).map((i) => r.get(i));
}
function Hd(e, t) {
  const n = {};
  for (const [r, i] of t) {
    const a = _n(e[r]) ? e[r] : {};
    n[r] = { value: i(a.value), keyframes: OM(a.keyframes, i, r === "position") };
  }
  return n;
}
function Jy(e) {
  const t = _n(e) ? e : {}, n = Pl(t.start), r = Pl(t.in), i = Pl(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: i === null ? null : Math.max(1, i)
  };
}
function EM(e) {
  const t = _n(e) ? e : {}, n = Zn(cn(t.x0, 0), 0, 1), r = Zn(cn(t.y0, 0), 0, 1), i = Zn(cn(t.x1, 1), 0, 1), a = Zn(cn(t.y1, 1), 0, 1);
  return { x0: Math.min(n, i), y0: Math.min(r, a), x1: Math.max(n, i), y1: Math.max(r, a) };
}
function TM(e) {
  if (!_n(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: xM.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function FM(e) {
  const t = TM(e.source);
  if (!t) return null;
  const n = wM.includes(e.placement) ? e.placement : "sky", r = n === "world", i = {
    id: e.id,
    placement: n,
    source: t,
    clip: Jy(e.clip),
    visible: ks(e.visible, !0),
    locked: ks(e.locked, !1),
    crop: EM(e.crop),
    ...Hd(e, r ? jd : zd)
  };
  return r || (i.z_index = Dc(e.z_index) ?? 0), i;
}
function DM(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const s = _n(a) ? FM(a) : null;
    if (s) {
      if (s.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(s);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const a of t)
    typeof a.id == "string" && a.id && !r.has(a.id) ? r.add(a.id) : a.id = null;
  let i = 1;
  for (const a of t)
    if (a.id === null) {
      for (; r.has(`sticker_${i}`); ) i += 1;
      a.id = `sticker_${i}`, r.add(a.id);
    }
  return t;
}
function Zy(e) {
  if (!_n(e)) return null;
  const t = Tf.includes(e.projection) ? e.projection : Tf[0];
  return { aspect: Vd(e.aspect, 1), projection: t, visible: ks(e.visible, !0), ...Hd(e, $d) };
}
function Gd() {
  return Zy({});
}
function rc(e) {
  const t = _n(e.timeline) ? e.timeline : {}, n = _n(e.scene) ? e.scene : {};
  return {
    version: SM,
    timeline: {
      fps: _a(t.fps) ?? 24,
      length: By(t.length)
    },
    camera: Zy(e.camera),
    scene: { clip: Jy(n.clip), visible: ks(n.visible, !0), ...Hd(n, Lc) },
    stickers: DM(e.stickers),
    painting: ha(e.painting),
    painting_layer: _n(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ks(e.painting_visible, !0)
  };
}
function LM(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!_n(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function RM(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!_n(t)) return null;
  const n = Zn(cn(t.hFOV_deg, 90), 1, 179), r = Zn(cn(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(n * i * 0.5) / Math.tan(r * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function VM(e) {
  const t = _n(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(_n) : [];
  return n.sort((r, i) => cn(r.z_index, 0) - cn(i.z_index, 0)), rc({
    camera: RM(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: LM(r, t),
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
function Zr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return rc({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!_n(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? VM(t) : rc(t);
}
const zu = {
  state: { painting_visible: !0 },
  camera: { projection: Tf[0], visible: !0 },
  scene: { visible: !0 }
};
function ju(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function Df(e) {
  return JSON.stringify({
    ...ju(e, zu.state),
    camera: e.camera && ju(e.camera, zu.camera),
    scene: ju(e.scene, zu.scene)
  });
}
function Hu(e, t, n, r, i) {
  const a = {};
  for (const [s] of t)
    a[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((l) => ({ ...l, frame: n(r + l.frame) - i }))
    };
  return a;
}
function gg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: i }, anchor: e.start - e.in, newAnchor: r };
}
function Ms(e, t) {
  const n = _a(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, i = (l) => Dc(l * r), { length: a } = e.timeline, s = gg(e.scene.clip, i);
  return rc({
    timeline: { fps: n, length: a === null ? null : Math.max(1, i(a)) },
    camera: e.camera === null ? null : { ...e.camera, ...Hu(e.camera, $d, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...Hu(e.scene, Lc, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((l) => {
      const { clip: u, anchor: h, newAnchor: p } = gg(l.clip, i), g = l.placement === "world" ? jd : zd;
      return { ...l, clip: u, ...Hu(l, g, i, h, p) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Gu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Qy(e) {
  return Array.isArray(e) ? [...e] : e;
}
function eb(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= po);
}
function tb(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), i = r > 0 ? Qy(e.keyframes[r - 1].easing) : [...Ky];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: i });
}
function Tn(e, t, n, r) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Gu(i.value, r);
    return;
  }
  const a = eb(i, n);
  a ? a.value = Gu(a.value, r) : tb(i, n, Gu(Qt(e, t, n), r));
}
function Sa(e) {
  return e.placement === "world" ? jd.map(([t]) => t) : e.placement === "sky" ? zd.map(([t]) => t) : (e.clip ? Lc : $d).map(([t]) => t);
}
function $M(e, t) {
  for (const n of Sa(e))
    eb(e[n], t) || tb(e[n], t, Qt(e, n, t));
}
function zM(e) {
  const t = Sa(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const i of e[r].keyframes) n.set(i.frame, (n.get(i.frame) || 0) + 1);
  return [...n].sort((r, i) => r[0] - i[0]).map(([r, i]) => ({ frame: r, full: i === t.length }));
}
function Ku(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function jM(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function HM(e, t, n, r) {
  const i = new Set(n);
  for (const a of t) {
    const s = e[a];
    if (!s.keyframes.some((u) => i.has(u.frame))) continue;
    const l = Qt(e, a, r);
    s.keyframes = s.keyframes.filter((u) => !i.has(u.frame)), s.keyframes.length || (s.value = l);
  }
}
function GM(e, t, n, r, i) {
  r = Math.max(r, Math.min(0, i - Math.min(...n)));
  const a = new Set(n);
  for (const s of t) {
    const l = e[s], u = l.keyframes.filter((p) => a.has(p.frame)).map((p) => ({ ...p, frame: p.frame + r })), h = new Set(u.map((p) => p.frame));
    l.keyframes = [
      ...l.keyframes.filter((p) => !a.has(p.frame) && !h.has(p.frame)),
      ...u
    ].sort((p, g) => p.frame - g.frame);
  }
  return r;
}
function nb(e, t, n) {
  const r = Math.min(...n), i = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((s) => n.length > 1 ? s.frame >= r && s.frame < i : s.frame === r));
}
function KM(e, t, n) {
  const r = nb(e, t, n);
  if (!r.length) return null;
  const i = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: i ? null : r[0].easing, mixed: i };
}
function WM(e, t, n, r) {
  for (const i of nb(e, t, n)) i.easing = Qy(r);
}
function BM(e, t) {
  e.start = Math.max(0, e.start + t);
}
function UM(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), i = r - e.start;
  e.start = r, e.in += i, e.duration !== null && (e.duration -= i);
}
function YM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function XM(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function ic(e) {
  return Sa(e).map((t) => e[t]);
}
function qM(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? ic(e.camera).some((r) => r.keyframes.length > 0) : rb(e, { camera: n });
}
function oc(e) {
  return ic(e).some((t) => t.keyframes.length > 0) || !!e.clip && !XM(e.clip);
}
function rb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(oc);
}
const JM = 1e5;
function ib(e, { minimum: t, frames: n = 0, openClip: r = null, camera: i = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (i && e.camera)
    for (const s of ic(e.camera))
      for (const l of s.keyframes) a = Math.max(a, l.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: l } = s;
    a = Math.max(a, l.duration === null || l === r ? l.start + 1 : l.start + l.duration);
    for (const u of ic(s))
      for (const h of u.keyframes) a = Math.max(a, l.start - l.in + h.frame + 1);
  }
  return Number.isFinite(a) ? a : JM;
}
function ZM(e) {
  return e > 0 ? _a(Math.min(e, Ld)) : null;
}
function QM(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : By(Math.max(1, Math.min(e, Rd)));
}
const Wu = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], eN = 2e3;
function tN(e, t, n = 56) {
  const r = Wu.find((a) => a * t >= n) || Wu[Wu.length - 1], i = [];
  for (let a = 0; a < e && i.length < eN; a += r) i.push(a);
  return i;
}
function nN(e, t) {
  const n = [];
  for (const r of e) {
    const i = n[n.length - 1];
    i && r - i.frames[i.frames.length - 1] < t ? i.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let fl = { text: null, parsed: null };
function Xn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ac(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function rN({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Xn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ha(null),
    painting_layer: null,
    ui_settings: ac(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function ob(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function iN(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function oN(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function aN(e) {
  return Array.isArray(e) ? e.map((t) => Fd(t)) : [];
}
function sN(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), i = n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0], a = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: a };
}
function ab(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = rN(n), i = String(e || "").trim();
  if (!i) return r;
  try {
    let a = null;
    if (fl.text === i ? a = fl.parsed : (a = JSON.parse(i), fl = { text: i, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const s = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, l = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: iN(a.assets),
      stickers: oN(a.stickers),
      shots: aN(a.shots),
      painting: ha(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: ac(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return s && (l.ui_settings = ac({ ...l.ui_settings, ...s })), l.output_preset = ob(
      n.outputPreset,
      Number(l.output_preset || r.output_preset)
    ), l.bg_color = String(n.backgroundColor || l.bg_color || r.bg_color), l.coverage = Xn(n.coverage), delete l.editor_history, l;
  } catch {
    return fl = { text: i, parsed: null }, r;
  }
}
function lN(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function cN(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function uN(e, { paintCount: t, maskCount: n, width: r, height: i, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${i}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function sb(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: i = 360, sharedUiSettings: a = null, active: s, scene: l = null, camera: u = !1 } = t, h = _a(t.fps);
  let p;
  try {
    p = Zr(e);
  } catch {
    p = Zr(null);
  }
  h && h !== p.timeline.fps && (p = Ms(p, h));
  const g = u && p.camera === null;
  if (g && (p = { ...p, camera: Gd() }), l) {
    let b = Zr(l);
    h && h !== b.timeline.fps && (b = Ms(b, h)), p = { ...b, camera: p.camera, cutout_state: p };
  }
  return {
    ...p,
    ...g ? { default_camera: !0 } : {},
    coverage: Xn(i),
    bg_color: r,
    output_preset: ob(n),
    ui_settings: ac(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function fN(e, t) {
  e.cutout_state && (e.cutout_state = Ms(e.cutout_state, t));
  const n = Ms(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const i = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, s] of i)
    if (s) {
      a.clip && (a.clip = s.clip);
      for (const l of Sa(a)) a[l].keyframes = s[l].keyframes;
    }
}
function Kd(e, t) {
  const n = _o(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const dN = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function yg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function pN(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[dN[n]].keyframes.length));
}
function lb(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), i = yg(n, ["yaw_deg", "pitch_deg"]), a = yg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && Tn(e, "direction", r, i), n.rot_deg !== void 0 && Tn(e, "roll", r, n.rot_deg), Object.keys(a).length && Tn(e, "size", r, a);
}
const Rc = ["position_x", "position_y", "position_z"], sc = "camera";
function bg(e, t) {
  const n = Dd(e, t);
  return Fd({
    id: sc,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: aM(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function hN(e) {
  return Zr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Xt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function mN(e) {
  return e - 360 * Math.round(e / 360);
}
function gN(e, t, n, r) {
  const i = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (i[a] = r[a] + mN(n[a] - r[a]));
  Object.keys(i).length && Tn(e, "rotation", t, i), n.hFOV_deg !== r.hFOV_deg && Tn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Dt * 0.5) / Math.tan(n.vFOV_deg * Dt * 0.5)), n.position.some((a, s) => a !== r.position[s]) && Tn(e, "position", t, [...n.position]);
}
function yN(e, t) {
  const n = Qt(e, "position", t), r = Qt(e, "rotation", t);
  return {
    ...Object.fromEntries(Rc.map((i, a) => [i, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Qt(e, "fov", t)
  };
}
function bN(e, t, n, r) {
  const i = Rc.indexOf(n);
  if (i >= 0) {
    const a = Qt(e, "position", t);
    a[i] = r, Tn(e, "position", t, a);
  } else n === "hFOV_deg" ? Tn(e, "fov", t, r) : Tn(e, "rotation", t, { [n]: r });
}
function vN(e, t, n) {
  Tn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function _N(e, t) {
  const n = _o(e, t);
  return {
    ...Object.fromEntries(Rc.map((r, i) => [r, n.position[i]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function SN(e, t, n, r) {
  const i = t - (e.clip.start - e.clip.in), a = Rc.indexOf(n);
  if (a >= 0) {
    const s = Qt(e, "position", i);
    s[a] = r, Tn(e, "position", i, s);
  } else n === "scale" ? Tn(e, "scale", i, r) : n === "opacity" ? Tn(e, "opacity", i, r / 100) : Tn(e, "rotation", i, { [n]: r });
}
function wN(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    n[i] !== void 0 && Tn(e, i, r, n[i]);
}
function xN(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function kN(e, t, n) {
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
function Al(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function cb(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Wd(e, t, n, r) {
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
function MN(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Xt(r.direction.value.yaw_deg + 8);
  for (const i of r.direction.keyframes) i.value.yaw_deg += 8;
  return r;
}
function Lf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function ub(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function fb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function db(e) {
  e.default_camera && JSON.stringify(Zr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Gd()) && delete e.default_camera;
}
function pb(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = Zr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(Gd()) && (n.camera = null), Df(n);
}
function hb(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Zr(n);
    if (Df(i) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== i.timeline.fps && Df(Ms(i, a)) === t;
  } catch {
    return !1;
  }
}
const Bu = 0.15, NN = 0.01, PN = 1e-3, AN = 0.05, CN = 4, vg = 250, IN = 16, Cr = 1, ON = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function ur(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Qr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Vc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function wa(e, t, n = 0) {
  const r = Qn(e, t, n), i = Qr(r, 2);
  return { right: Qr(r, 0), up: Qr(r, 1), forward: [-i[0], -i[1], -i[2]] };
}
function EN(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Rf(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function TN(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Rf(e, "3dof", n);
}
function FN(e) {
  return wa(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function DN(e) {
  return ur(e.position, wa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function zi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function fs(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Bd(e, t) {
  return fs(zi(t, e.position), wa(e.yaw_deg, e.pitch_deg).forward);
}
function Ud(e) {
  return Math.max(e, 1e-6) * AN;
}
function Uu(e, t, n = null, r = Cr) {
  if (t) return t;
  const i = Ud(r);
  if (n && Bd(e, n) > 0) {
    const a = zi(n, e.position), s = Math.hypot(...a);
    return s >= i ? n : ur(e.position, a, i / s);
  }
  return ur(e.position, wa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function _g(e, t = Cr) {
  return Math.max(e.distance, Ud(t));
}
function Sg(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > CN ? !1 : t.time - e.time < vg || e.cost > IN && t.time - e.wheelTime < vg;
}
function Yd(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Dt);
  return { tanX: r, tanY: r * n / t };
}
function wg(e, t, n, r, i = DN(e)) {
  const a = e.roll_deg ?? 0, [s, l] = LN(t, n, a), u = Xt(e.yaw_deg + s / r * 360), h = ve(e.pitch_deg - l / r * 360, -89.9, 89.9), p = Qn(e.yaw_deg, e.pitch_deg, a), g = Qn(u, h, a), b = zi(e.position, i), x = [0, 1, 2].map((k) => fs(Qr(p, k), b)), S = { ...e, yaw_deg: u, pitch_deg: h, position: ur(i, Vc(g, x)) };
  return { ...S, distance: Bd(S, i) };
}
function LN(e, t, n) {
  const r = Math.cos(n * Dt), i = Math.sin(n * Dt);
  return [e * r + t * i, t * r - e * i];
}
function xg(e, t, n, r, i, a = e.distance) {
  const { right: s, up: l } = FN(e), u = 2 * a * Yd(e, r, i).tanY / i;
  return { ...e, position: ur(ur(e.position, s, -t * u), l, n * u), distance: a };
}
function kg(e, t, n, r = Cr) {
  const i = zi(t, e.position), a = Math.hypot(...i);
  if (!(a > 0) || !n) return e;
  const s = Math.max(r, 1e-6), l = s * NN, u = n > 0 ? Math.min(Math.max(a * Bu, l), a - s * PN) : -Math.max(a * Bu / (1 - Bu), l);
  if (n > 0 && u <= 0) return e;
  const h = { ...e, position: ur(e.position, i, u / a) };
  return { ...h, distance: Math.max(Bd(h, t), Ud(r)) };
}
function Mg(e, t, n, r) {
  const { tanX: i, tanY: a } = Yd(e, n, r), s = Math.atan(Math.min(i, a)), l = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: u } = wa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: ur(t.center, u, -l), distance: l };
}
function Yu(e, t, n, r = null) {
  return mb({
    quaternion: ko(Qn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Yd(e, t, n).tanY) * bn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function mb(e, t, n, r = null) {
  const { center: i, radius: a } = r ?? { center: [0, 0, 0], radius: Cr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), l = Math.max(s + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: l * 2
  };
}
function Ns(e, t, n, r) {
  const { right: i, up: a, forward: s } = gb(e), l = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], u = l[0] * s[0] + l[1] * s[1] + l[2] * s[2];
  if (!(u > e.near)) return null;
  const h = Math.tan(e.fovY_deg * 0.5 * Dt), p = h * e.aspect, g = l[0] * i[0] + l[1] * i[1] + l[2] * i[2], b = l[0] * a[0] + l[1] * a[1] + l[2] * a[2];
  return { x: n * 0.5 * (1 + g / u / p), y: r * 0.5 * (1 - b / u / h), z: u };
}
function gb(e) {
  const t = Ss(e.quaternion), n = Qr(t, 2);
  return { right: Qr(t, 0), up: Qr(t, 1), forward: n.map((r) => -r) };
}
function Ng(e, t, n) {
  var i;
  const r = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function RN({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function yb(e, t) {
  if (!e || !t.active) return null;
  const n = zN(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: Vf(t),
    itemQuaternion: e.kind === "splat" ? ON : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function VN(e, t, n) {
  const r = t.stickers.findIndex((l) => l.source.kind === "port"), i = t.stickers[r];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const a = n.stickers[r], s = yb(e, a);
  return s && { ...s, id: i.id, opacity: a.opacity, value: a };
}
function $N(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function zN(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function Vf(e) {
  return {
    position: [...e.position],
    quaternion: ko(Qn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function $f(e, t) {
  return ur(e.position, Vc(Qn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function zf(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function jf({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, i, a]);
  return n;
}
function Hf(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((s) => s[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((s) => s[a]))), r = t.map((a, s) => (a + n[s]) / 2), i = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: i };
}
function jN(e, t, n, r = []) {
  const i = [];
  t && e.scene.active && i.push(...jf(t).map((a) => $f(e.scene, a)));
  for (const a of n) i.push(...Xd(a));
  for (const { box: a, value: s } of r) i.push(...jf(a).map((l) => $f(s, l)));
  return i;
}
function HN(e, t, n, r) {
  const i = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return i > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: ko(Qn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Qn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / i
  } : null;
}
function Xd(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, i]) => ur(e.position, Vc(e.rotation, [r, i, 0])));
}
function GN(e, t = null) {
  const { sticker: n, value: r, plane: i, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : i ? Hf(Xd(i)) : a != null && a.box ? Hf(jf(zf(a.kind, a.box)).map((s) => $f(r, s))) : { center: [...r.position], radius: r.scale };
}
const KN = 2, WN = 0.5, BN = 30;
function bb(e, t) {
  const n = zi(t, e), r = Math.atan2(n[0], -n[2]) * bn, i = Math.atan2(n[1], Math.hypot(n[0], n[2])) * bn;
  return { yaw_deg: r + 0, pitch_deg: i, roll_deg: 0 };
}
function UN(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, i = r ? r * WN : KN, a = t ? [...t] : ur(e.position, wa(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...zi(a, e.position)), l = s > 0 ? bb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, u = 2 * Math.max(s, 1e-3) * Math.tan(BN * 0.5 * Dt);
  return { position: a, rotation: l, scale: u };
}
function Pg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function YN(e) {
  return [0, 1, 2].map((t) => Qr(e, t));
}
function Ag(e, t, n, r) {
  if (e === "translate") return { position: ur(t.position, zi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * QN(n.scale, r.scale) / n.scale };
  const i = Pg(Ss(r.quaternion), YN(Ss(n.quaternion))), a = Pg(i, Qn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: l, rollDeg: u } = Vy(a);
  return Math.abs(l) <= XN ? { rotation: { yaw_deg: s + 0, pitch_deg: l, roll_deg: u + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: l, roll_deg: qN(a, t.yaw_deg) } };
}
const XN = 89.9;
function qN(e, t) {
  const n = Qr(e, 0), r = Qr(e, 1), i = Math.cos(t * Dt), a = Math.sin(t * Dt);
  return Math.atan2(a * -r[2] - i * r[0], i * n[0] - a * -n[2]) * bn + 0;
}
const JN = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function ZN(e, t, n, r, i) {
  if (!Ns(e, t, r, i)) return null;
  const { right: a, up: s, forward: l } = gb(e), u = zi(t, e.position), h = fs(u, a), p = fs(u, s), g = fs(u, l), b = Math.tan(e.fovY_deg * 0.5 * Dt), x = b * e.aspect, S = Math.hypot(h, p, g) * JN[n] * Math.min(1.9 * b, 7) / 4;
  if (!(g > S)) return { minX: 0, maxX: r, minY: 0, maxY: i };
  const k = ($) => {
    const v = S * Math.sqrt($ * $ + g * g - S * S);
    return [($ * g - v) / (g * g - S * S), ($ * g + v) / (g * g - S * S)];
  }, [N, I] = k(h), [j, R] = k(p);
  return {
    minX: r * 0.5 * (1 + N / x),
    maxX: r * 0.5 * (1 + I / x),
    minY: i * 0.5 * (1 - R / b),
    maxY: i * 0.5 * (1 - j / b)
  };
}
function QN(e, [t, n, r]) {
  const i = [t, n, r].reduce((a, s) => Math.abs(s - e) > Math.abs(a - e) ? s : a, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function eP(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Cg(e, t) {
  const n = Qn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Dt) * t, i = r / e.aspect, a = (h, p, g) => ur(e.position, Vc(n, [h, p, g])), s = [a(-r, -i, -t), a(r, -i, -t), a(r, i, -t), a(-r, i, -t)], l = s.map((h) => [e.position, h]);
  s.forEach((h, p) => l.push([h, s[(p + 1) % 4]]));
  const u = [a(-r * 0.5, i * 1.1, -t), a(0, i * 1.5, -t), a(r * 0.5, i * 1.1, -t)];
  return l.push([u[0], u[1]], [u[1], u[2]], [u[2], u[0]]), l;
}
function tP(e, t, n, r, i, a = 6) {
  return t.some(([s, l]) => {
    const u = Ns(e, s, r, i), h = Ns(e, l, r, i);
    if (!u || !h) return !1;
    const p = h.x - u.x, g = h.y - u.y, b = ve(((n.x - u.x) * p + (n.y - u.y) * g) / Math.max(p * p + g * g, 1e-12), 0, 1);
    return Math.hypot(u.x + p * b - n.x, u.y + g * b - n.y) <= a;
  });
}
function nP(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function rP(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Qt(r, "position", 0)];
  const i = Math.max(t - 1, 0), a = Math.min(n, i + 1);
  return Array.from({ length: a }, (s, l) => {
    const u = a === 1 ? 0 : l * i / (a - 1);
    return Qt(r, "position", u);
  });
}
function iP(e, t, n, r, i) {
  const a = Math.max(0, e) * n, s = Math.max(0, t) * n, l = Math.min(1, r * n / Math.max(a, 1), i * n / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(a * l)),
    height: Math.max(1, Math.round(s * l))
  };
}
const vb = 0.28;
function _b(e, t, n) {
  const r = t / n, i = Math.tan(e.hFOV_deg * 0.5 * Dt);
  return {
    quaternion: ko(Qn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / r) * bn,
    aspect: r
  };
}
function ds(e) {
  const t = $i(e);
  return {
    quaternion: ko(Qn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Ig(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: i, halfH: a } = Td(n, r), s = t.x + t.w * 0.5, l = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: l - a, w: i * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / r) * bn,
      vFOV_deg: 2 * Math.atan(a / r) * bn
    }
  };
}
function Sb(e, t, n) {
  const [[r, i, a], [s, l, u], [h, p, g]] = Ss(e.quaternion), b = Math.tan(e.fovY_deg * 0.5 * Dt), x = b * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, k = 1e-4) {
      const N = lM(S), I = r * N.x + s * N.y + h * N.z, j = i * N.x + l * N.y + p * N.z, R = -(a * N.x + u * N.y + g * N.z), $ = Math.max(R, k);
      return {
        x: t * 0.5 * (1 + I / $ / x),
        y: n * 0.5 * (1 - j / $ / b),
        z: R
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, k) {
      const N = (S / t * 2 - 1) * x, I = (1 - k / n * 2) * b;
      return Id(Nl({
        x: r * N + i * I - a,
        y: s * N + l * I - u,
        z: h * N + p * I - g
      }));
    }
  };
}
function oP(e, t, { media: n, zIndex: r, paintLayers: i, evaluated: a = nc(e, t) }) {
  const s = [];
  e.stickers.forEach((l, u) => {
    const h = a.stickers[u];
    if (l.placement !== "sky") return;
    const p = l.source.kind === "port" && !l.visible;
    if (!h.active && !p) return;
    const g = n(l);
    if (!g) return;
    const b = Math.tan(h.hFOV_deg * 0.5 * Dt), x = Math.tan(h.vFOV_deg * 0.5 * Dt), { crop: S } = l;
    s.push({
      kind: "sticker",
      id: l.id,
      media: g.media,
      revision: g.revision,
      source: g.source,
      opacity: p ? vb : h.opacity,
      zIndex: r(l),
      quaternion: ko(Qn(h.yaw_deg, h.pitch_deg, h.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * b,
        x1: (2 * S.x1 - 1) * b,
        y0: (1 - 2 * S.y1) * x,
        y1: (1 - 2 * S.y0) * x
      }
    });
  });
  for (const l of i) s.push({ kind: "erp", ...l });
  return s.sort((l, u) => l.zIndex - u.zIndex);
}
function wb(e, t, n, { media: r, paintLayers: i, evaluated: a }) {
  const s = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !s.has(l.id) && s.set(l.id, l);
  return oP(e, t, {
    media: (l) => {
      const u = s.get(l.id);
      return u ? r(u) : null;
    },
    zIndex: (l) => {
      var u;
      return Number(((u = s.get(l.id)) == null ? void 0 : u.z_index) || 0);
    },
    paintLayers: i,
    evaluated: a
  });
}
function aP(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function sP(e, t, n, { media: r, evaluated: i = nc(e, t) }) {
  const a = /* @__PURE__ */ new Map();
  for (const l of n)
    typeof (l == null ? void 0 : l.id) == "string" && l.id && !a.has(l.id) && a.set(l.id, l);
  const s = [];
  return e.stickers.forEach((l, u) => {
    const h = i.stickers[u];
    if (l.placement !== "world" || !h.active) return;
    const p = a.get(l.id), g = p ? r(p) : null;
    if (!g) return;
    const { width: b, height: x } = aP(g.media), S = HN(h, l.crop, b, x);
    S && s.push({
      id: l.id,
      media: g.media,
      revision: g.revision,
      source: g.source,
      opacity: h.opacity,
      position: S.position,
      quaternion: S.quaternion,
      rotation: S.rotation,
      width: S.width,
      height: S.height,
      crop: l.crop
    });
  }), s;
}
function lP({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: i = () => {
}, load: a = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((s) => s.$) }) {
  let s = null, l = null, u = !1, h = 0;
  const p = () => {
    l = Ay(s.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, g = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(S) {
      return l && !g.lost ? l.render(S) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(S) {
      return l && !g.lost ? l.renderUnwrap(S) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(S, k) {
      return l && !g.lost ? l.resize(S, k) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(S, k) {
      l && !g.lost && l.clear(S, k);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(S) {
      return l ? l.sceneBox(S) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(S, k, N, I, j) {
      return l && !g.lost ? l.pick(S, k, N, I, j) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(S, k, N, I, j) {
      return l && !g.lost ? l.pickSurface(S, k, N, I, j) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(S, k, N, I, j) {
      return l && !g.lost ? l.pickSticker(S, k, N, I, j) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(S, k, N, I, j, R) {
      return l && !g.lost ? l.gizmoPointer(S, k, N, I, j, R) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return h + (l ? l.contentRevision() : 0);
    },
    dispose() {
      u = !0, e.removeEventListener("webglcontextlost", b), e.removeEventListener("webglcontextrestored", x), l == null || l.dispose(), l = null;
    }
  };
  function b(S) {
    S.preventDefault(), !(u || g.lost) && (g.lost = !0, g.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function x() {
    u || !g.lost || queueMicrotask(() => {
      u || !g.lost || (l && (h += l.contentRevision() + 1), l == null || l.dispose(), l = null, g.lost = !1, s && (p(), g.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", b), e.addEventListener("webglcontextrestored", x), a().then((S) => {
    u || (s = S, !g.lost && (p(), g.ready = !0, t()));
  }).catch((S) => {
    console.error("[PanoramaStickers] three.js view is unavailable", S), g.failed = !0, n();
  }), g;
}
const xb = "3D view unavailable. Check the browser console.";
function lc(e, t, n) {
  return _b({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function cP(e) {
  let t = null, n = !1, r = !1;
  const i = /* @__PURE__ */ new Set();
  function a() {
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
    const u = { onChange: l };
    let h = !1;
    return i.add(u), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(p) {
        return h ? null : (a(), t ? t.render({ ...p, owner: u }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(u);
      },
      dispose() {
        h || (h = !0, i.delete(u), t == null || t.release(u), !i.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const kb = cP(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => Ay(e.createThreeView({ createCanvas: () => En({ label: "three.node" }) }), "node"))
), ji = ["erp_image", "bg_erp", "bg_media"], Cl = ["source"], qd = ["sticker_image", "sticker"], Mb = ["scene"], uP = {
  background: [...ji, ...Cl],
  "external-sticker": [...qd, ...Cl],
  scene: [...Mb, ...Cl]
};
function Nb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Gf(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const i = Nb(e.graph ? e.getInputLink(r) : null);
    i && (t[String((n == null ? void 0 : n.name) || "")] = i);
  }), t;
}
function fP(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var i;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((i = e.getInputLink(r)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Pb(e, t) {
  var i;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const s = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((l) => String(l == null ? void 0 : l.id) === n[a]);
    if (!s || a === n.length - 1) return { graph: r, entry: s };
    r = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((l) => (l == null ? void 0 : l.id) === s.type);
  }
}
function dP(e, t) {
  const { graph: n, entry: r } = Pb(e, t), i = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), a = {};
  for (const s of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const l = Nb(i.get(s == null ? void 0 : s.link));
    l && (a[String((s == null ? void 0 : s.name) || "")] = l);
  }
  return a;
}
const Ab = [...ji, ...qd, ...Mb, ...Cl], pP = 256, Zo = /* @__PURE__ */ new Map(), Xu = /* @__PURE__ */ new WeakMap();
let Cb = () => null;
function Ib(e) {
  return Xu.has(e) || Xu.set(e, JSON.stringify(e)), Xu.get(e);
}
function hP(e) {
  Cb = e;
}
function cc(e, t) {
  const n = Ib(e);
  Zo.delete(n), Zo.set(n, t), Zo.size > pP && Zo.delete(Zo.keys().next().value);
}
function kn(e, t) {
  var a;
  const n = e ? Cb(e) : null;
  if (!n) return !0;
  const r = Gf(e);
  let i = Zo.get(Ib(n));
  if (i)
    cc(n, i);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((s) => Ab.includes(s == null ? void 0 : s.name)))) return !0;
    cc(n, r), i = r;
  }
  return uP[t].every((s) => i[s] === r[s]);
}
const uc = /* @__PURE__ */ new WeakSet();
async function Kf(e, t) {
  if (uc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && uc.add(e), n.ok && r !== void 0 ? r : null;
}
function Ob(e, t) {
  var a, s, l, u, h;
  const n = (l = (s = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : l.workflow, { entry: r } = Pb(n, t), i = (u = e == null ? void 0 : e.outputs) == null ? void 0 : u[t];
  return !i || !((h = r == null ? void 0 : r.inputs) != null && h.some((p) => Ab.includes(p == null ? void 0 : p.name))) ? null : { output: i, inputs: dP(n, t) };
}
const Il = /* @__PURE__ */ new Map();
function mP(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Il.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const i = await Kf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = Ob(i, a);
        s && cc(s.output, s.inputs);
      }
    });
}
const gP = 5;
function yP(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${gP}`, r = Kf(e, `/jobs?${n}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), a = (s) => (i.has(s) || i.set(s, Kf(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, l) {
      var h, p, g, b;
      const u = String(s.id);
      for (const { id: x } of await r) {
        if (!l()) return null;
        const S = await a(x);
        if ((h = S == null ? void 0 : S.outputs) != null && h[u])
          return ((b = (g = (p = S.workflow) == null ? void 0 : p.prompt) == null ? void 0 : g[u]) == null ? void 0 : b.class_type) !== s.comfyClass ? null : Ob(S, u);
      }
      return null;
    }
  };
}
function bP(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((i) => {
    var a, s;
    return ((a = i == null ? void 0 : i.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Go = null;
async function vP(e, t, n) {
  var l;
  const r = String(e.id), i = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || uc.has(n) || (l = Il.get(i)) != null && l.has(r) || bP(t)) return null;
  (Go == null ? void 0 : Go.workflowId) !== i && (Go = { workflowId: i, history: yP(n, i) }, queueMicrotask(() => {
    Go = null;
  }));
  const s = await Go.history.lastNodeOutput(e, a);
  return a() ? s ? (cc(s.output, s.inputs), t.nodeOutputs[r] = s.output, s.output) : (uc.has(n) || Il.set(i, (Il.get(i) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Og(e, t, n, r = ji) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((s == null ? void 0 : s.name) || ""));
}
const Eg = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ol(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Eg.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Eg.test(String((e == null ? void 0 : e.filename) || ""));
}
const qu = /* @__PURE__ */ new WeakMap();
function _P(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Wf(e) {
  return _P(e) ? (qu.has(e) || qu.set(e, Math.random().toString(36).slice(2, 10)), qu.get(e)) : "run";
}
function Eb(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function SP(e, t, n) {
  const r = /* @__PURE__ */ new Set(), i = (a, s) => {
    for (const l of s) {
      const u = n(a, l);
      (u == null ? void 0 : u.id) == null || r.has(String(u.id)) || (r.add(String(u.id)), i(u, (Array.isArray(u.inputs) ? u.inputs : []).map((h, p) => p)));
    }
  };
  return i(e, t), r;
}
function Jd(e, t = [], n = null) {
  var i;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[a], e == null ? void 0 : e[a]];
    for (const l of s)
      if (Array.isArray(l))
        for (const u of l) {
          const h = r(u);
          if (h && (/\.mp4(\?|$)/i.test(h) || String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4"))
            return h;
        }
  }
  return "";
}
function wP({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = Tc(e, "looping-preview");
  if (!r || !t) return null;
  const i = typeof n == "function" ? n : () => {
  };
  let a = !1, s = 0;
  const l = typeof r.requestVideoFrameCallback == "function", u = () => {
    a || !l || s || r.paused || r.ended || (s = r.requestVideoFrameCallback(() => {
      s = 0, !a && (i(), u());
    }));
  }, h = () => {
    a || i();
  }, p = () => i(), g = () => {
    i(), u();
  }, b = () => i();
  let x = !1;
  const S = () => {
    x = !0, i();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", h, { once: !0 }), r.addEventListener("loadeddata", h, { once: !0 }), l || r.addEventListener("timeupdate", p), r.addEventListener("play", g), r.addEventListener("pause", b), r.addEventListener("error", S), r.src = t, r.load();
  const k = () => {
    a || x || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, N = () => {
    !a && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var j, R;
      a || (a = !0, s && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(s), s = 0), r.removeEventListener("loadedmetadata", h), r.removeEventListener("loadeddata", h), r.removeEventListener("timeupdate", p), r.removeEventListener("play", g), r.removeEventListener("pause", b), r.removeEventListener("error", S), r.pause(), (j = r.removeAttribute) == null || j.call(r, "src"), (R = r.load) == null || R.call(r));
    },
    failed: () => x,
    play: k,
    pause: N,
    toggle() {
      r.paused ? k() : N();
    },
    get playing() {
      return !a && !r.paused && !r.ended;
    }
  };
}
function ro(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function xP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Tg(e, t, n = null) {
  var i, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, l = s ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(s.origin_slot ?? 0)) : null;
      l != null && l.outputNode && (r = l.outputNode);
    } catch {
    }
  return !r && n != null && (r = xP(e == null ? void 0 : e.graph, n)), r;
}
function kP(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function MP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function NP(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Tb({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const i = (v) => {
    if (!v) return "";
    if (typeof v == "string") return String(v || "").trim();
    if (Array.isArray(v)) {
      if (v.length === 0) return "";
      if (v.length === 1) return i(v[0]);
      const H = String(v[0] || "").trim();
      if (H)
        return ro(t, {
          filename: H,
          subfolder: String(v[1] || "").trim(),
          type: String(v[2] || "output").trim() || "output"
        });
      for (const B of v) {
        const ye = i(B);
        if (ye) return ye;
      }
      return "";
    }
    return typeof (v == null ? void 0 : v.src) == "string" && v.src ? v.src : typeof (v == null ? void 0 : v.url) == "string" && v.url ? v.url : ro(t, v);
  }, a = (v) => {
    if (!v || typeof v != "object") return "";
    const H = String(v.type || "").trim().toLowerCase();
    if (H === "dataurl") return String(v.value || "");
    if (H !== "comfy_image") return "";
    const B = String(v.filename || "").trim();
    return B ? ro(t, {
      filename: B,
      subfolder: String(v.subfolder || ""),
      type: String(v.storage || "input")
    }) : "";
  }, s = (v) => {
    const H = e == null ? void 0 : e.nodeOutputs;
    if (!H || v == null) return null;
    const B = String(v);
    return H instanceof Map ? H.get(v) || H.get(B) || H.get(Number(B)) || null : H[v] || H[B] || null;
  }, l = (v, H) => {
    var ye;
    const B = s(v == null ? void 0 : v.id);
    return Array.isArray((ye = B == null ? void 0 : B.ui) == null ? void 0 : ye[H]) ? B.ui[H] : Array.isArray(B == null ? void 0 : B[H]) ? B[H] : [];
  }, u = (v, H) => {
    const B = s(v == null ? void 0 : v.id);
    return B != null && B.ui && Object.prototype.hasOwnProperty.call(B.ui, H) ? B.ui[H] : B && Object.prototype.hasOwnProperty.call(B, H) ? B[H] : null;
  }, h = (v, H) => {
    const B = u(v, "pano_sticker_input_state_hash"), ye = Array.isArray(B) ? B[0] : B;
    return String(ye ?? "").trim() || NP(H);
  }, p = (v) => {
    const H = [], B = /* @__PURE__ */ new Set();
    for (const ye of v || []) {
      const Ae = i(ye);
      !Ae || B.has(Ae) || (B.add(Ae), H.push(Ae));
    }
    return H;
  }, g = (v, H) => {
    var Ae;
    const B = [];
    Array.isArray(v == null ? void 0 : v.images) && v.images.length && B.push(v.images), Array.isArray((Ae = v == null ? void 0 : v.ui) == null ? void 0 : Ae.images) && v.ui.images.length && B.push(v.ui.images);
    const ye = [];
    for (const E of B)
      H >= 0 && H < E.length && ye.push(E[H]), ye.push(...E);
    return ye;
  }, b = (v, H) => {
    var T;
    const B = String(H || "").trim();
    if (!B) return { src: "", sourceType: "", inputName: "" };
    const Ae = (Array.isArray(v == null ? void 0 : v.inputs) ? v.inputs : []).findIndex((ae) => String((ae == null ? void 0 : ae.name) || "") === B);
    if (Ae < 0) return { src: "", sourceType: "", inputName: B };
    const E = v.graph ? v.getInputLink(Ae) : null;
    if ((E == null ? void 0 : E.origin_id) == null) return { src: "", sourceType: "", inputName: B };
    const te = E.origin_id, re = Tg(v, Ae, te);
    if (!re) return { src: "", sourceType: "", inputName: B };
    const fe = Number(E.origin_slot ?? 0);
    let Me = [];
    try {
      Me = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(re) || [] : [];
    } catch {
      Me = [];
    }
    if (Array.isArray(Me) && Me.length) {
      const ae = [];
      fe >= 0 && fe < Me.length && ae.push(Me[fe]), ae.push(...Me);
      const _e = p(ae.filter((je) => !Ol(je)));
      if (_e.length)
        return { src: _e[0], srcCandidates: _e, sourceType: "appNodeImageUrls", inputName: B };
    }
    const xe = s((re == null ? void 0 : re.id) ?? te), he = p(g(xe, fe).filter((ae) => !Ol(ae))).map((ae) => `${ae}&pano_src=${Wf(xe)}`);
    if (he.length)
      return { src: he[0], srcCandidates: he, sourceType: "nodeOutputs", inputName: B };
    const J = Array.isArray(re == null ? void 0 : re.imgs) ? re.imgs : [];
    if (J.length) {
      const ae = [];
      fe >= 0 && fe < J.length && ae.push(J[fe]), ae.push(...J);
      const _e = p(ae);
      if (_e.length)
        return { src: _e[0], srcCandidates: _e, sourceType: "nodeImgs", inputName: B };
    }
    const D = (T = re == null ? void 0 : re.widgets) == null ? void 0 : T.find((ae) => String((ae == null ? void 0 : ae.name) || "").toLowerCase() === "image");
    if (D) {
      let ae = i(D.value);
      if (ae && !ae.includes("/") && !ae.includes(":") && (re.comfyClass === "LoadImage" || re.type === "LoadImage") && (ae = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(ae)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(ae)}&type=input&subfolder=`), ae) return { src: ae, sourceType: "widget", inputName: B };
    }
    return { src: "", sourceType: "", inputName: B };
  }, x = (v, H = []) => {
    var ye;
    const B = Array.isArray(v == null ? void 0 : v.inputs) ? v.inputs : [];
    for (const Ae of H) {
      const E = B.findIndex((Me) => String((Me == null ? void 0 : Me.name) || "") === Ae), te = E >= 0 && v.graph ? v.getInputLink(E) : null;
      if ((te == null ? void 0 : te.origin_id) == null) continue;
      const re = s(((ye = Tg(v, E, te.origin_id)) == null ? void 0 : ye.id) ?? te.origin_id), fe = (Array.isArray(re == null ? void 0 : re.images) ? re.images : []).find(Ol);
      return fe ? `${ro(t, fe)}&pano_src=${Wf(re)}` : "";
    }
    return "";
  }, S = (v, H = []) => {
    const B = Array.isArray(H) ? H : [H];
    for (const ye of B) {
      const Ae = b(v, ye);
      if (String((Ae == null ? void 0 : Ae.src) || "").trim()) return Ae;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, k = (v) => {
    const H = String(v || "").trim();
    if (!H) return [];
    if (kP(H)) return [H];
    const { filename: B, subfolder: ye } = MP(H);
    return B ? p([
      ro(t, { filename: B, subfolder: ye, type: "temp" }),
      ro(t, { filename: B, subfolder: ye, type: "output" }),
      ro(t, { filename: B, subfolder: ye, type: "input" }),
      H
    ]) : [H];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (v) => {
      var H, B;
      try {
        (B = (H = v == null ? void 0 : v.__panoLinkedInputImageCache) == null ? void 0 : H.forEach) == null || B.call(H, (ye, Ae, E) => {
          var te;
          ye != null && ye.img && ((te = r == null ? void 0 : r.isImageLoadFailed) != null && te.call(r, ye.img)) && E.delete(Ae);
        });
      } catch {
      }
    },
    externalStateHash: h,
    invalidateUiImage: (v, H) => {
      var B;
      (B = v == null ? void 0 : v.delete) == null || B.call(v, `__ui__${String(H || "")}`);
    },
    linkedValue: (v, H) => {
      var te, re, fe, Me;
      const B = String(H || ""), ye = Array.isArray(v == null ? void 0 : v.inputs) ? v.inputs.findIndex((xe) => String((xe == null ? void 0 : xe.name) || "") === B) : -1, Ae = ye >= 0 && v.graph ? v.getInputLink(ye) : null;
      if (Ae) {
        const xe = s(Ae.origin_id), he = [
          xe == null ? void 0 : xe.output,
          xe == null ? void 0 : xe.result,
          (te = xe == null ? void 0 : xe.data) == null ? void 0 : te.output,
          (re = xe == null ? void 0 : xe.data) == null ? void 0 : re.result,
          (fe = xe == null ? void 0 : xe.ui) == null ? void 0 : fe.output,
          (Me = xe == null ? void 0 : xe.ui) == null ? void 0 : Me.result
        ];
        for (const J of he) {
          if (!Array.isArray(J)) continue;
          const D = J[Number(Ae.origin_slot || 0)];
          if (typeof D == "string" && D.trim()) return D;
        }
      }
      const E = Array.isArray(v == null ? void 0 : v.widgets) ? v.widgets.find((xe) => String((xe == null ? void 0 : xe.name) || "") === B) : null;
      return String((E == null ? void 0 : E.value) || "");
    },
    linkedVideoFile: x,
    loadPreferredExactLinkedImage: (v, H = [], B = null, ye = "") => {
      var tt;
      const Ae = Array.isArray(H) ? H : [H], E = S(v, Ae), re = (Array.isArray(E == null ? void 0 : E.srcCandidates) && E.srcCandidates.length ? E.srcCandidates : [E == null ? void 0 : E.src]).map((st) => String(st || "").trim()).filter(Boolean);
      if (!re.length) return null;
      const fe = p(re.flatMap((st) => k(st)));
      if (!fe.length) return null;
      v.__panoLinkedInputImageCache || (v.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Me = String(ye || Ae.join("|") || "image_exact"), xe = re.join(`
`), he = v.__panoLinkedInputImageCache.get(Me);
      if (he && he.srcRaw === xe && he.img) return he.img;
      const J = n || globalThis.Image;
      if (typeof J != "function") return null;
      const D = new J();
      (tt = r == null ? void 0 : r.markImageLoading) == null || tt.call(r, D, xe);
      const T = { srcRaw: xe, resolvedSrc: "", img: D };
      v.__panoLinkedInputImageCache.set(Me, T);
      let ae = -1;
      const _e = (st) => {
        var Se, A, Te;
        st === "ready" ? (Se = r == null ? void 0 : r.markImageReady) == null || Se.call(r, D, xe) : (A = r == null ? void 0 : r.markImageFailed) == null || A.call(r, D, xe), B == null || B(D), (Te = v.setDirtyCanvas) == null || Te.call(v, !0, !0);
      }, je = () => {
        if (ae += 1, ae >= fe.length) {
          _e("failed");
          return;
        }
        T.resolvedSrc = fe[ae], D.src = T.resolvedSrc;
      };
      return D.onload = () => _e("ready"), D.onerror = () => {
        if (ae + 1 < fe.length) {
          je();
          return;
        }
        _e("failed");
      }, je(), D;
    },
    output: s,
    resolvePreferredExactLinkedSource: S,
    source: i,
    uiImage: (v, H, B, ye = null) => {
      var xe, he, J;
      const Ae = l(v, H)[0] || null, E = i(Ae);
      if (!E) return null;
      const te = `__ui__${H}`, re = (xe = B == null ? void 0 : B.get) == null ? void 0 : xe.call(B, te);
      if (re && re.__panoSrc === E) return re;
      const fe = n || globalThis.Image;
      if (typeof fe != "function") return null;
      const Me = new fe();
      return Me.__panoSrc = E, (he = r == null ? void 0 : r.markImageLoading) == null || he.call(r, Me, E), Me.onload = () => {
        var D;
        (D = r == null ? void 0 : r.markImageReady) == null || D.call(r, Me, E), ye == null || ye(Me);
      }, Me.onerror = () => {
        var D;
        (D = r == null ? void 0 : r.markImageFailed) == null || D.call(r, Me, E), ye == null || ye(Me);
      }, Me.src = E, (J = B == null ? void 0 : B.set) == null || J.call(B, te, Me), Me;
    },
    uiList: l,
    uiValue: u
  };
}
const PP = 1e-3;
function Fb(e, t, n, r) {
  if (!aa(e, t)) return null;
  const i = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < r.frames ? (s + 0.5) / r.fps : null;
  }
  const a = i / n + Math.max(PP / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function Db(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function AP(e, t) {
  return Math.floor(e * t.fps);
}
function Lb(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Fg = 4;
function Rb({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let i = null;
  function a(s) {
    return r.has(s) || r.set(s, e(n[s], t)), r.get(s);
  }
  return {
    picture(s, l, u, h) {
      if ((s.length !== n.length || s.some((b, x) => b !== n[x])) && (n = s, r.clear(), i = null), l === null) return null;
      const p = AP(l, u);
      for (let b = p; b < Math.min(n.length, p + Fg + 1); b += 1) a(b);
      for (const b of r.keys())
        (b < p || b > p + Fg) && b !== i && r.delete(b);
      const g = r.get(p);
      return g != null && g.complete && g.naturalWidth > 0 && (i !== null && i !== p && r.delete(i), i = p), i === null ? h : r.get(i);
    }
  };
}
function Vb({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: i,
  onChange: a = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let s = null, l = !1, u = !1;
  const h = () => s || e(), p = () => a(n(h()));
  return {
    model: () => n(h()),
    refresh() {
      return u ? this.model() : (p(), this.model());
    },
    beginGesture() {
      return u || s ? !1 : (s = e(), l = !1, p(), !0);
    },
    updateGesture(g) {
      if (u) return !1;
      s || this.beginGesture();
      const b = t(s, g);
      return b.changed ? (s = b.state, l = !0, r(s), p(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && l;
    },
    commitGesture() {
      if (u || !s) return !1;
      const g = l;
      return g && i(s), s = null, l = !1, r(null), p(), g;
    },
    cancelGesture() {
      return u || !s ? !1 : (s = null, l = !1, r(null), p(), !0);
    },
    apply(g) {
      if (u) return !1;
      s && this.commitGesture();
      const b = t(e(), g);
      return b.changed ? (i(b.state), p(), !0) : !1;
    },
    destroy() {
      if (u) return;
      u = !0;
      const g = s != null;
      s = null, l = !1, g && r(null);
    }
  };
}
const El = "sticker_image_1", $b = "external_image", ya = 0;
function sa(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Ju(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Ri(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Bf(e, t = ya) {
  return (e == null ? void 0 : e.version) !== 2 ? Ri(e) : Ri(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: _o(n, t).active,
    external: n.source.kind === "port",
    ...Kd(n, t)
  }));
}
function Zd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Ri(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function zb(e) {
  return String((e == null ? void 0 : e.id) || "") === El || String((e == null ? void 0 : e.source_kind) || "") === $b;
}
function Qd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : zb(t);
}
const jb = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Hb(e) {
  return !zb(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(jb.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(r) ? r : n];
  }));
}
function Gb(e) {
  const t = Hb(e);
  return t ? jb.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Kb(e, t = {}) {
  var $, v, H;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((B) => String((B == null ? void 0 : B.id) || "") === El);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const B = String((($ = e.active) == null ? void 0 : $.selected_sticker_id) || "") === El;
    return {
      state: {
        ...e,
        stickers: n.filter((ye, Ae) => Ae !== r),
        active: B ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), a = String(t.stateHash || ""), s = r >= 0 ? n[r] : null, l = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== a, u = Number(t.imageWidth || 0), h = Number(t.imageHeight || 0), p = u > 0 && h > 0, g = Math.max(1, u), b = Math.max(1, h), x = t.pose && typeof t.pose == "object" ? t.pose : {}, S = l ? x.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || x.hFOV_deg || 30, k = Math.min(179, Math.max(0.1, Number(S)));
  if (!l) {
    if (!p) return { state: e, changed: !1 };
    const B = sa(k, g, b), ye = Number(((v = s == null ? void 0 : s.initial_pose) == null ? void 0 : v.hFOV_deg) ?? k), Ae = sa(ye, g, b), E = Number(((H = s == null ? void 0 : s.initial_pose) == null ? void 0 : H.vFOV_deg) ?? Ae);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - B) <= 1e-6 && Math.abs(E - Ae) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((te, re) => re === r ? {
          ...te,
          vFOV_deg: B,
          initial_pose: te.initial_pose && typeof te.initial_pose == "object" ? { ...te.initial_pose, vFOV_deg: Ae } : te.initial_pose
        } : te)
      },
      changed: !0
    };
  }
  const N = n.reduce((B, ye) => Math.max(B, Number((ye == null ? void 0 : ye.z_index) || 0)), -1), I = {
    yaw_deg: Number(x.yaw_deg || 0),
    pitch_deg: Number(x.pitch_deg || 0),
    hFOV_deg: k,
    vFOV_deg: p ? sa(k, g, b) : Number(x.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || k),
    rot_deg: Number(x.rot_deg ?? x.roll_deg ?? 0)
  }, j = {
    ...s || {},
    id: El,
    source_kind: $b,
    source_link_id: i,
    source_state_hash: a,
    ...I,
    initial_pose: { ...I },
    visible: !0,
    z_index: N + 1
  }, R = r >= 0 ? n.map((B, ye) => ye === r ? j : B) : [...n, j];
  return { state: { ...e, stickers: R }, changed: !0 };
}
function Dg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const CP = ["IMAGE", "VIDEO"];
function Lg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => CP.includes(n)) ? "2d" : null;
}
function IP(e, t) {
  var i, a, s, l, u, h;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((p) => (p == null ? void 0 : p.name) === t), r = n >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, n) : null;
  return r ? Lg(r.type) ?? Lg((h = (u = (l = (s = (a = e.graph).getNodeById) == null ? void 0 : s.call(a, r.origin_id)) == null ? void 0 : l.outputs) == null ? void 0 : u[r.origin_slot]) == null ? void 0 : h.type) : null;
}
function Wb(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Dg(e, "sticker"),
    awaitingPose: !t && (Dg(e, "sticker_state") || IP(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Rg(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Zr({ version: 2, stickers: [n] }).stickers[0];
}
function Bb(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: i = 0, imageHeight: a = 0 } = {}) {
  var k;
  const s = e.stickers.findIndex((N) => Qd(e, N)), l = s >= 0 ? e.stickers[s] : null;
  if (!t) {
    if (!l) return { state: e, changed: !1 };
    const N = ((k = e.active) == null ? void 0 : k.selected_sticker_id) === l.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((I, j) => j !== s),
        active: N ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const u = i > 0 && a > 0;
  if (l && (r == null ? void 0 : r.placement) === "world" && r.replace && l.placement === "sky") {
    const N = { ...Rg(l.id, r), clip: l.clip, visible: l.visible, locked: l.locked };
    return { state: { ...e, stickers: e.stickers.map((I, j) => j === s ? N : I) }, changed: !0 };
  }
  if (l) {
    if (!u || l.placement !== "sky") return { state: e, changed: !1 };
    const N = [l.size.value, ...l.size.keyframes.map((R) => R.value)], I = N.map((R) => sa(R.hFOV_deg, i, a));
    if (N.every((R, $) => Math.abs(R.vFOV_deg - I[$]) <= 1e-6)) return { state: e, changed: !1 };
    const j = {
      value: { ...l.size.value, vFOV_deg: I[0] },
      keyframes: l.size.keyframes.map((R, $) => ({ ...R, value: { ...R.value, vFOV_deg: I[$ + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((R, $) => $ === s ? { ...R, size: j } : R) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const h = new Set(e.stickers.map((N) => N.id));
  let p = 1;
  for (; h.has(`sticker_${p}`); ) p += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Rg(`sticker_${p}`, r)] }, changed: !0 };
  const g = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), b = (N) => u ? sa(N, i, a) : N, x = Wd(`sticker_${p}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: g,
    vFOV_deg: b(g)
  }, Ri(e).reduce((N, I) => Math.max(N, I.z_index), -1) + 1), S = (r == null ? void 0 : r.keyframes) ?? {};
  return x.direction.keyframes = S.direction ?? [], x.roll.keyframes = S.roll ?? [], x.size.keyframes = (S.size ?? []).map((N) => ({ ...N, value: { ...N.value, vFOV_deg: b(N.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, x] }, changed: !0 };
}
function ep(e) {
  const t = Ri(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Ju(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Ju(a.z_index),
    item: a
  })), i = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Ju(a.z_index),
    item: a
  }));
  return [...t, ...r, ...i].sort((a, s) => a.z_index - s.z_index);
}
function Ub(e) {
  const t = Zd(e), n = Qd(e, t), r = Ri(e).some((l) => l && l.visible !== !1), i = ep(e), a = t ? i.findIndex((l) => l.type === "sticker" && l.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Gb(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: a >= 0 && a < i.length - 1,
    canMoveBackward: a > 0
  };
}
function OP(e) {
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
function Vg(e, t) {
  const n = Zd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = OP(e), i = String(n.id || ""), a = ep(r), s = a.findIndex((u) => u.type === "sticker" && u.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === a.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [l] = a.splice(s, 1);
  return t === "front" ? a.push(l) : a.unshift(l), a.forEach((u, h) => {
    u.item.z_index = h;
  }), { state: r, changed: !0 };
}
function EP(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function TP(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Kb(e, t.value);
  if (t.type === "sync-port") return Bb(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, a = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!a || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((b) => String((b == null ? void 0 : b.id) || "") === a))
      return { state: e, changed: !1 };
    const u = ep(e).reduce((b, x) => Math.max(b, Number(x.z_index || 0)), -1), h = 30, p = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: h,
      vFOV_deg: sa(h, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Wd(a, Al(i.asset), p, u + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const g = { id: a, asset_id: s, ...p, z_index: u + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [s]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], g],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !Ri(e).some((a) => String((a == null ? void 0 : a.id) || "") === i) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const n = Zd(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, locked: i } : a)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = Hb(n);
    return !i || !Gb(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...i } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Vg(e, "front");
  if (t.type === "send-back") return Vg(e, "back");
  if (t.type === "delete-selected") {
    if (Qd(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((u) => u === n ? { ...u, visible: !1 } : u)
        },
        changed: !0
      };
    const i = e.stickers.filter((u) => u !== n), a = Ri({ ...e, stickers: i })[0], s = (a == null ? void 0 : a.id) == null ? null : String(a.id), l = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (l.assets = EP(l)), { state: l, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Kd(n, ya) : n, l = {};
    if (a.forEach((u) => {
      const h = Number(i[u]);
      Number.isFinite(h) && Math.abs(h - Number(s[u] || 0)) > 1e-12 && (l[u] = h);
    }), !Object.keys(l).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const u = pN(n, l);
      if (!Object.keys(u).length) return { state: e, changed: !1 };
      const h = structuredClone(n);
      return lb(h, ya, u), { state: { ...e, stickers: e.stickers.map((p) => p === n ? h : p) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((u) => u === n ? { ...u, ...l } : u)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function FP(e = {}) {
  return Vb({
    ...e,
    reduce: TP,
    projectModel: Ub
  });
}
const Uf = 2;
function lo(e, t) {
  return Math.floor(e * t + 0.5);
}
function DP(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Yb({ video: e, clock: t, fps: n, span: r, loop: i, onFrame: a, onCapture: s, onChange: l }) {
  let u = 0, h = !1, p = !1, g = { name: "idle" }, b = [];
  const x = () => h && !p, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function k() {
    for (const T of b) T();
    b = [];
  }
  function N(T, ae = {}) {
    return k(), g = { name: T, ...ae }, l(), g;
  }
  function I(T, ae, _e) {
    const je = () => {
      g === T && _e();
    };
    e.addEventListener(ae, je), b.push(() => e.removeEventListener(ae, je));
  }
  function j(T, ae) {
    let _e = t.requestFrame(function je(tt) {
      g === T && (ae(tt), g === T && (_e = t.requestFrame(je)));
    });
    b.push(() => t.cancelFrame(_e));
  }
  function R(T) {
    u = T, a(u);
  }
  function $() {
    return N(p ? "error" : "idle");
  }
  function v() {
    p = !0, $();
  }
  function H() {
    const { seekable: T } = e, ae = T != null && T.length ? T.end(T.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(u / n(), Number.isFinite(ae) ? ae : 1 / 0));
  }
  function B(T) {
    if (!x()) return T === "play" ? re() : $();
    if (e.readyState < Uf) {
      const ae = N("loading", { then: T });
      return I(ae, "loadeddata", () => B(ae.then)), I(ae, "error", v), ae;
    }
    return T === "play" && u / n() >= Number(e.duration) ? re() : ye(T, !1);
  }
  function ye(T, ae) {
    const _e = H();
    if (!e.ended && lo(Number(e.currentTime), n()) === lo(_e, n())) return Ae(T);
    const je = N("seeking", { then: T, frame: u, retried: ae });
    return I(je, "seeked", () => {
      const tt = lo(Number(e.currentTime), n()) === lo(H(), n()), st = u === je.frame;
      tt || st && je.retried ? Ae(je.then) : ye(je.then, st);
    }), I(je, "error", v), e.currentTime = _e, je;
  }
  function Ae(T) {
    return T === "play" ? E() : (s(), $());
  }
  function E() {
    const T = N("playingVideo", { shown: !1 });
    if (I(T, "pause", () => e.ended ? te() : xe()), I(T, "ended", te), I(T, "error", v), i() && lo(Number(e.duration), n()) >= r()) {
      const _e = e.loop;
      e.loop = !0, b.push(() => {
        e.loop = _e;
      });
    }
    const ae = (_e, je) => {
      je && !T.shown && (T.shown = !0, l()), fe(lo(_e, n()));
    };
    if (S()) {
      let _e = e.requestVideoFrameCallback(function je(tt, st) {
        g === T && (ae(Number(st.mediaTime), !0), g === T && (_e = e.requestVideoFrameCallback(je)));
      });
      b.push(() => {
        var je;
        return (je = e.cancelVideoFrameCallback) == null ? void 0 : je.call(e, _e);
      });
    } else
      j(T, () => ae(Number(e.currentTime), e.readyState >= Uf));
    return Promise.resolve(e.play()).catch(() => {
      g === T && xe();
    }), T;
  }
  function te() {
    s(), re();
  }
  function re() {
    const T = N("playingClock", { startTs: t.now(), startFrame: u });
    return j(T, (ae) => fe(T.startFrame + Math.floor((ae - T.startTs) / 1e3 * n()))), T;
  }
  function fe(T) {
    if (T < r()) {
      R(T);
      return;
    }
    if (!i()) {
      Me(r() - 1);
      return;
    }
    g.name === "playingVideo" && (k(), e.pause()), R(0), B("play");
  }
  function Me(T) {
    g.name === "playingVideo" ? (k(), e.pause(), R(Math.max(0, T)), s()) : R(Math.max(0, T)), B("still");
  }
  function xe() {
    if (g.name === "loading" || g.name === "seeking")
      g.then = "still", l();
    else if (g.name === "playingVideo") {
      k(), e.pause();
      const T = DP(Number(e.currentTime), n());
      R(Math.min(T, r() - 1)), s(), u === T ? $() : B("still");
    } else g.name === "playingClock" && Me(Math.min(u, r() - 1));
  }
  function he() {
    if (!D()) {
      if (u >= r() - 1 && R(0), g.name === "loading" || g.name === "seeking") {
        g.then = "play", l();
        return;
      }
      B("play");
    }
  }
  function J(T) {
    const ae = Math.max(0, Math.round(T));
    if (g.name === "loading" || g.name === "seeking") {
      g.then = "still", R(ae), l();
      return;
    }
    g.name === "playingVideo" && (k(), e.pause()), R(ae), B("still");
  }
  function D() {
    return g.name === "playingVideo" || g.name === "playingClock" || g.then === "play";
  }
  return {
    get frame() {
      return u;
    },
    get state() {
      return g.name;
    },
    get playing() {
      return D();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return g.name === "playingVideo" || g.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return g.name === "playingVideo" && g.shown;
    },
    play: he,
    stop: xe,
    seek: J,
    toggle() {
      D() ? xe() : he();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(T) {
      k(), h = !!T, p = !1, B("still");
    },
    dispose() {
      k(), h = !1, g = { name: "idle" };
    }
  };
}
function Xb({ video: e, onCapture: t, onChange: n }) {
  let r = "", i = !1, a = { time: null, playing: !1, fps: 1 }, s = null, l = null, u = !1;
  function h(k) {
    l = k, t();
  }
  function p(k) {
    s = k, e.currentTime = k;
  }
  function g() {
    const k = u;
    b(), u !== k && n();
  }
  function b() {
    if (!r || i || e.readyState < Uf) return;
    const { time: k, playing: N, fps: I } = a;
    if (k === null) {
      e.pause(), u = !1;
      return;
    }
    if (N) {
      if (s !== null) return;
      const j = Number(e.duration), R = Number.isFinite(j) ? Math.min(k, j) : k, $ = Math.abs(Number(e.currentTime) - R) > 1.5 / I;
      if (e.ended && !$) return;
      $ && p(R), e.paused && (u = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), u = !1, h(NaN)), !(s !== null || l === k) && (Number(e.currentTime) === k ? h(k) : p(k));
  }
  const x = {
    loadeddata: g,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: g,
    seeked: () => {
      const k = s;
      s = null, !a.playing && k === a.time ? h(k) : g();
    },
    playing: () => {
      !a.playing || u || (u = !0, n());
    },
    error: () => {
      r && (i = !0, n());
    }
  };
  e.muted = !0;
  for (const [k, N] of Object.entries(x)) e.addEventListener(k, N);
  function S(k) {
    r = k, i = !1, s = null, l = null, u = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: k = "", time: N = null, playing: I = !1, fps: j }) {
      k !== r && (S(k), n()), a = { time: N, playing: I, fps: j }, g();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(k, N) {
      return !r || i ? N : a.time === null ? null : a.playing && u ? e : l === null ? N : k;
    },
    dispose() {
      for (const [k, N] of Object.entries(x)) e.removeEventListener(k, N);
      S("");
    }
  };
}
function Yf(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function LP({ video: e, stickerVideo: t, createImage: n, clock: r, readState: i, onFrame: a, onCapture: s, onStickerCapture: l, onChange: u, camera: h = !1 }) {
  let p = "", g = "", b = 0;
  const x = /* @__PURE__ */ new Set();
  let S = null, k = null;
  const N = () => i().timeline.fps, I = (te) => te.stickers.find((re) => re.source.kind === "port"), j = () => {
    const te = i(), re = I(te);
    return ib(te, {
      minimum: Math.round(N() * 5),
      frames: Math.max(
        p ? Math.round(b * N()) : 0,
        S && re ? Db(re.clip, N(), S.meta) : 0
      ),
      camera: h
    });
  }, R = Yb({
    video: e,
    clock: r,
    fps: N,
    span: j,
    loop: () => !0,
    onFrame: a,
    onCapture: s,
    onChange: u
  }), $ = () => {
    g === p && Number.isFinite(e.duration) && (b = e.duration);
  }, v = () => {
    g && (x.add(g), u());
  }, H = Xb({ video: t, onCapture: l, onChange: u }), B = Rb({ createImage: n, onLoad: u });
  e.muted = !0, e.addEventListener("loadedmetadata", $), e.addEventListener("error", v);
  function ye(te) {
    te !== g && (g = te, e.pause(), te ? e.src = te : e.removeAttribute("src"), e.load(), R.setSource(!!te));
  }
  function Ae() {
    R.playing && R.stop();
  }
  function E(te) {
    const re = I(te);
    k = S && re ? Fb(re.clip, R.frame, te.timeline.fps, S.meta) : null, H.follow({
      src: (S == null ? void 0 : S.src) || "",
      time: k,
      playing: R.advancing,
      fps: te.timeline.fps
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
      return g;
    },
    pause: Ae,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return S;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(te, re) {
      return S != null && S.frames ? B.picture(S.frames, k, S.meta, re) : H.picture(te, re);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: te, sources: re, state: fe, sticker: Me = null }) {
      if (S = te ? Me : null, !te)
        return Ae(), ye(""), E(fe), !1;
      for (const T of x)
        re.includes(T) || x.delete(T);
      const xe = re.find((T) => T && !x.has(T)) || "", he = xe !== p;
      he && (p = xe, b = 0), ye(p);
      const J = rb(fe, { camera: h }) || !!p && R.state !== "error" || !!S;
      return J || Ae(), (he || !J || !R.playing && R.frame >= j()) && R.frame !== ya && R.seek(ya), E(fe), J;
    },
    dispose() {
      R.dispose(), H.dispose(), e.removeEventListener("loadedmetadata", $), e.removeEventListener("error", v), e.pause(), e.removeAttribute("src"), e.load(), g = "";
    }
  };
}
const fc = Math.PI / 180, qr = 180 / Math.PI, RP = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), VP = 260;
function $g(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function qb(e, t) {
  return t ? qb(t, e % t) : e;
}
function $P(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / a * i)), l = Math.max(1, Math.round(t / a * i)), u = qb(s, l) || 1;
  return `${Math.round(s / u)}:${Math.round(l / u)}`;
}
function Ps(e, t) {
  const n = $g(e), r = $g(t);
  if (n == null || r == null) return null;
  const i = n / r;
  return !Number.isFinite(i) || i <= 0 ? null : { width: n, height: r, ratio: i, label: $P(n, r) };
}
function So(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === n) || t[0] || null;
}
function Jb(e) {
  const t = So(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? gi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function tp(e, t, n = RP) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), s = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), l = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), h = (N, I, j) => {
    const R = N + I, $ = Math.max(0, j - 1), v = R > $ && R > 0 ? $ / R : 1;
    return [N * v, I * v];
  }, [p, g] = h(u, s, r), [b, x] = h(a, l, i), S = {
    x: p,
    y: b,
    w: Math.max(1, r - p - g),
    h: Math.max(1, i - b - x)
  }, k = Od(S, t);
  return {
    x: S.x + (S.w - k.width) * 0.5,
    y: S.y + (S.h - k.height) * 0.5,
    w: k.width,
    h: k.height,
    safeRect: S
  };
}
function zP(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = tp({ width: n, height: r }, 1), a = ve(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = n / (2 * Math.tan(a * fc * 0.5)), l = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, u = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, h = Ry(u, Ty(
    { x: n * 0.5, y: r * 0.5 },
    s,
    l
  )), p = jP(h, va(
    u.yaw_deg,
    u.pitch_deg,
    u.roll_deg
  ).right), g = Ed({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: p.yaw,
    pitchDeg: p.pitch,
    rollDeg: p.roll,
    frameFovDeg: g.hFOV_deg
  };
}
function Zb(e) {
  return {
    yaw: Xt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * qr),
    pitch: ve(Math.asin(ve(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * qr, -89.9, 89.9)
  };
}
function jP(e, t) {
  const n = Zb(e), r = va(n.yaw, n.pitch, 0), i = Du(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(a.x, a.y, a.z);
  if (!(s > 1e-8)) return { ...n, roll: 0 };
  const l = {
    x: a.x / s,
    y: a.y / s,
    z: a.z / s
  };
  return {
    ...n,
    roll: Fc(Math.atan2(
      Du(l, r.up),
      Du(l, r.right)
    ) * qr)
  };
}
function Qb(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = tp({ width: n, height: r }, vo(e)), a = bo(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = Ry(e, Ty(
    s,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), u = Zb(l);
  return {
    yaw: u.yaw,
    pitch: u.pitch,
    fov: ve(2 * Math.atan(n / (2 * a)) * qr, 1, 179)
  };
}
function HP(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, l = bo(t, n), u = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: h, halfH: p } = Td(u, l), g = {
    x: a - h,
    y: s - p,
    w: h * 2,
    h: p * 2
  }, b = g.x <= 0 && g.y <= 0 && g.x + g.w >= r && g.y + g.h >= i, x = r / i, S = Math.tan(Af * fc), k = x >= 1 ? S : S * x, N = x >= 1 ? S / x : S;
  return {
    focalPx: l,
    rect: g,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(h / l) * qr,
      vFOV_deg: 2 * Math.atan(p / l) * qr
    },
    fallback: b ? null : {
      rect: { x: 0, y: 0, w: r, h: i },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(k) * qr,
        vFOV_deg: 2 * Math.atan(N) * qr
      }
    }
  };
}
function Ko(e, t) {
  const n = So(e);
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
function GP(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), i = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(i) && i > 0) {
    const s = bo(n, e);
    return Ed(Od(n, t), s);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Ml(a, t) };
}
function zg(e, t, n, { preserveOrientation: r = !1, safeRect: i = null } = {}) {
  let a = Ps(t, n);
  if (!a) return e;
  const s = vo(e) >= 1;
  r && a.ratio >= 1 !== s && (a = Ps(a.height, a.width));
  const l = GP(e, a.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - l.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - l.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...l, aspect_id: a.label };
}
function e1(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (So(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), i = Fy({
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
    const r = So(e);
    if (!r) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== r), a = ((n = i[0]) == null ? void 0 : n.id) == null ? null : String(i[0].id);
    return {
      state: {
        ...e,
        shots: i,
        active: { ...e.active || {}, selected_shot_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Ko(e, (r) => zg(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Ko(e, (r) => {
      const a = String(gi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), s = a ? Ps(a[1], a[2]) : Ps(vo(r), 1);
      return s ? zg(r, s.height, s.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Ko(e, (i) => {
      const a = Fc(r), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - a) <= 1e-12) return i;
      const l = { ...i, roll_deg: a };
      return delete l.rot_deg, l;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ko(e, (r) => {
    const i = Dy(r, t.scale);
    return i ? { ...r, ...i } : r;
  }) : t.type === "step-fov" ? Ko(e, (r) => {
    const i = Ly(r, t.direction);
    return i ? { ...r, ...i } : r;
  }) : t.type === "pan-camera" ? Ko(e, (r) => {
    const i = r1(t.startShot || r, t);
    return Math.abs(Number(i.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function t1({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: i = !1,
  allowAlt: a = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const l = a && i ? "alt" : r ? "shift" : "";
  if (!l || !e || !t) return null;
  const u = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, h = {
    x: u.x + u.w * 0.5,
    y: u.y + u.h * 0.5
  }, p = Math.hypot(Number(t.x || 0) - h.x, Number(t.y || 0) - h.y);
  if (l === "shift" && p < Math.min(u.w, u.h) * s) return null;
  const g = Math.atan2(Number(t.y || 0) - h.y, Number(t.x || 0) - h.x);
  return {
    source: l,
    frame: u,
    center: h,
    startRollDeg: Number(n || 0),
    lastAngle: g,
    accumulatedRad: 0
  };
}
function n1(e, t, n = {}) {
  var s, l;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((l = e.center) == null ? void 0 : l.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Oy(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: i },
    rollDeg: Ey(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function r1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, s = Number(t.dy || 0) * i, l = Number(e.roll_deg ?? e.rot_deg ?? 0) * fc, u = Math.cos(l), h = Math.sin(l), p = a / n, g = -s / n, b = p * u - g * h, x = p * h + g * u, S = Number(e.pitch_deg || 0) * fc, k = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Xt(Number(e.yaw_deg || 0) - Math.atan(b) / k * qr),
    pitch_deg: ve(Number(e.pitch_deg || 0) - Math.atan(x) * qr, -90, 90)
  };
}
function KP({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Vb({
    readState: e,
    reduce: e1,
    projectModel: Jb,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ke = Object.freeze({
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
}), WP = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, BP = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: WP(t[2])
})), UP = {
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
}, jg = Object.fromEntries(
  Object.entries(UP).map(([e, t]) => [e, {
    name: t.name,
    elements: BP(t.body)
  }])
), Jt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = wt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(jg, r) ? jg[r] : null;
    });
    return (r, i) => n.value ? (we(), Ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: xt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (we(!0), Ce(pt, null, Lt(n.value.elements, (a, s) => (we(), Ce(pt, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${s}`
      }, [
        a.tag === "path" ? (we(), Ce("path", pi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (we(), Ce("circle", pi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (we(), Ce("rect", pi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (we(), Ce("line", pi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (we(), Ce("polyline", pi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (we(), Ce("polygon", pi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : kt("", !0)
      ], 64))), 128))
    ], 2)) : kt("", !0);
  }
}, yn = {
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
    return (r, i) => (we(), _r(tx(e.tag), pi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: q0(() => [
        rt(Jt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, YP = ["aria-expanded", "disabled"], XP = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, qP = ["data-aspect", "disabled", "onClick"], JP = { class: "pano-cutout-aspect-custom" }, ZP = ["disabled"], QP = ["disabled"], e2 = ["data-custom-width", "data-custom-height", "disabled"], i1 = {
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
    ]), a = /* @__PURE__ */ ln("1"), s = /* @__PURE__ */ ln("1"), l = /* @__PURE__ */ ln(null), u = wt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), h = wt(() => {
      const k = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], N = String(n.model.aspectLabel || "");
      return k.length ? k.map((I) => {
        const j = typeof I == "string" ? I : String((I == null ? void 0 : I.value) || ""), R = typeof I == "string" ? I : String((I == null ? void 0 : I.label) || j);
        return {
          ...typeof I == "object" && I ? I : {},
          value: j,
          label: R,
          active: N ? j === N : (I == null ? void 0 : I.active) === !0
        };
      }) : i.map((I) => ({
        ...I,
        active: I.value === N
      }));
    }), p = wt(() => {
      var N;
      const k = String(n.model.aspectLabel || "").trim();
      return k || String(((N = h.value.find((I) => I.active === !0)) == null ? void 0 : N.label) || "Aspect");
    });
    go(p, (k) => {
      const N = String(k || "").match(/^([0-9.]+):([0-9.]+)$/);
      N && (a.value = N[1], s.value = N[2]);
    }, { immediate: !0 });
    function g(k) {
      r("action", k);
    }
    function b(k) {
      var N;
      n.model.aspectOpen === !0 && ((N = l.value) != null && N.contains(k.target) || g({ type: "close-aspect" }));
    }
    Cc(() => {
      document.addEventListener("pointerdown", b, !0);
    }), Ts(() => {
      document.removeEventListener("pointerdown", b, !0);
    });
    function x(k) {
      const [N, I] = String(k.value || "").split(":");
      g({
        type: "set-aspect",
        width: N,
        height: I,
        preserveOrientation: !0
      });
    }
    function S() {
      g({
        type: "set-aspect",
        width: a.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (k, N) => (we(), Ce("div", {
      ref_key: "rootElement",
      ref: l,
      class: xt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (we(), _r(yn, {
        key: 0,
        icon: e.model.aspectIcon || ht(Ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: u.value },
        onClick: N[0] || (N[0] = (I) => g({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (we(), Ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: u.value,
        onClick: N[1] || (N[1] = (I) => g({ type: "toggle-aspect" }))
      }, [
        rt(Jt, {
          icon: e.model.aspectIcon || ht(Ke).aspect
        }, null, 8, ["icon"]),
        se("span", null, bt(p.value), 1),
        rt(Jt, {
          icon: ht(Ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, YP)),
      vi(se("div", XP, [
        (we(!0), Ce(pt, null, Lt(h.value, (I) => (we(), Ce("button", {
          key: I.value,
          class: xt(["pano-btn pano-frame-aspect-choice", { active: I.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": I.value,
          disabled: u.value,
          onClick: (j) => x(I)
        }, bt(I.label), 11, qP))), 128)),
        se("div", JP, [
          vi(se("input", {
            "onUpdate:modelValue": N[2] || (N[2] = (I) => a.value = I),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: u.value
          }, null, 8, ZP), [
            [tg, a.value]
          ]),
          N[4] || (N[4] = se("span", { "aria-hidden": "true" }, ":", -1)),
          vi(se("input", {
            "onUpdate:modelValue": N[3] || (N[3] = (I) => s.value = I),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: u.value
          }, null, 8, QP), [
            [tg, s.value]
          ]),
          se("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": s.value,
            disabled: u.value,
            onClick: S
          }, "Apply", 8, e2)
        ])
      ], 512), [
        [wo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, t2 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, n2 = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ ln(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, i) => (we(), Ce("div", {
      class: xt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Kt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Kt(() => {
      }, ["stop"]))
    }, [
      rt(yn, {
        icon: ht(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Kt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      se("div", t2, [
        i[3] || (i[3] = se("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (we(!0), Ce(pt, null, Lt(ht(n), (a) => (we(), Ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          se("kbd", null, bt(a[0]), 1),
          se("span", null, bt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, r2 = {
  class: "pano-view-unavailable",
  role: "status"
}, np = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (we(), Ce("div", r2, bt(ht(xb)), 1));
  }
}, i2 = { class: "pano-cutout-node-surface" }, o2 = ["title", "disabled"], a2 = { class: "value" }, s2 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, l2 = {
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
    return (r, i) => (we(), Ce("div", i2, [
      se("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Kt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Kt(() => {
        }, ["stop"]))
      }, [
        se("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (a) => n({ type: "open-editor" }))
        }, [
          rt(Jt, {
            icon: ht(Ke).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = se("span", { class: "label" }, "Full Editor", -1))
        ]),
        rt(yn, {
          icon: e.model.hasShot ? ht(Ke).delete : ht(Ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        rt(i1, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        se("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Kt((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          rt(Jt, {
            icon: ht(Ke).roll
          }, null, 8, ["icon"]),
          se("span", a2, bt(e.model.rollLabel || "0.0°"), 1)
        ], 40, o2),
        rt(yn, {
          icon: ht(Ke).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        rt(n2)
      ], 32),
      e.model.hasShot === !1 ? (we(), Ce("div", s2, " Choose a view · + Add Frame ")) : kt("", !0),
      e.model.viewUnavailable ? (we(), _r(np, { key: 1 })) : kt("", !0)
    ]));
  }
}, o1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, i = /* @__PURE__ */ ln(null);
    let a, s = !1;
    function l() {
      if (!s) return { active: !1, intent: void 0 };
      const g = a;
      return a = void 0, s = !1, { active: !0, intent: g };
    }
    function u(g) {
      const b = i.value;
      return b instanceof HTMLInputElement ? (a = g, s = !0, b.value = "", b.click(), !0) : !1;
    }
    function h(g) {
      var k, N;
      const { active: b, intent: x } = l();
      if (!b) return;
      const S = ((N = (k = g.target) == null ? void 0 : k.files) == null ? void 0 : N[0]) || null;
      if (S) {
        r("file-selected", { intent: x, file: S });
        return;
      }
      r("file-cancelled", { intent: x });
    }
    function p() {
      const { active: g, intent: b } = l();
      g && r("file-cancelled", { intent: b });
    }
    return t({ open: u }), (g, b) => (we(), Ce("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: h,
      onCancel: p
    }, null, 544));
  }
}, c2 = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, u2 = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ ln(!1), n = Object.freeze([
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
    return (r, i) => (we(), Ce("div", {
      class: xt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Kt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Kt(() => {
      }, ["stop"]))
    }, [
      rt(yn, {
        icon: ht(Ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Kt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      se("div", c2, [
        i[3] || (i[3] = se("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (we(!0), Ce(pt, null, Lt(ht(n), (a) => (we(), Ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          se("kbd", null, bt(a[0]), 1),
          se("span", null, bt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, f2 = { class: "pano-stickers-node-surface" }, d2 = ["disabled"], p2 = ["aria-label", "data-tip"], h2 = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, m2 = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, g2 = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ ln(null);
    function r(s) {
      var l;
      (l = t.onAction) == null || l.call(t, s);
    }
    function i() {
      var s, l;
      (l = (s = n.value) == null ? void 0 : s.open) == null || l.call(s, "add");
    }
    function a(s) {
      r({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, l) => (we(), Ce("div", f2, [
      se("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: l[5] || (l[5] = Kt(() => {
        }, ["stop"])),
        onWheel: l[6] || (l[6] = Kt(() => {
        }, ["stop"]))
      }, [
        se("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: l[0] || (l[0] = (u) => r({ type: "open-editor" }))
        }, [
          rt(Jt, {
            icon: ht(Ke).fullscreen
          }, null, 8, ["icon"]),
          l[10] || (l[10] = se("span", { class: "label" }, "Full Editor", -1))
        ]),
        se("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          rt(Jt, {
            icon: ht(Ke).image
          }, null, 8, ["icon"]),
          l[11] || (l[11] = se("span", { class: "label" }, "Add Image", -1))
        ], 8, d2),
        rt(yn, {
          icon: e.model.locked ? ht(Ke).lock_closed : ht(Ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: l[1] || (l[1] = (u) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        rt(yn, {
          icon: ht(Ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: l[2] || (l[2] = (u) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        rt(yn, {
          icon: ht(Ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: l[3] || (l[3] = (u) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        rt(yn, {
          icon: e.model.isExternalSelection ? ht(Ke).back_initial : ht(Ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: l[4] || (l[4] = (u) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        rt(u2)
      ], 32),
      e.model.playable === !0 ? (we(), Ce("button", {
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
        onClick: l[9] || (l[9] = (u) => r({ type: "toggle-playback" }))
      }, [
        rt(Jt, {
          icon: e.model.playing ? ht(Ke).pause : ht(Ke).play
        }, null, 8, ["icon"])
      ], 40, p2)) : kt("", !0),
      e.model.hasStickers === !1 ? (we(), Ce("div", h2, " Add Image to place a sticker ")) : kt("", !0),
      e.model.dropActive === !0 ? (we(), Ce("div", m2, "Drop image to add")) : kt("", !0),
      rt(o1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (we(), _r(np, { key: 3 })) : kt("", !0)
    ]));
  }
}, Hg = 24;
function y2(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ps(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function a1(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r, r += 1) {
    const a = t[r], s = t[i];
    a.y > e.y != s.y > e.y && e.x < (s.x - a.x) * (e.y - a.y) / (s.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Xf(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => ps(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], i = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: i * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : a1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function b2(e, t, { edges: n = !1, resize: r = !0, emptyCursor: i = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((l) => ps(l, t) <= 169);
    if (s) {
      const l = s.edge === "left" || s.edge === "right";
      return { kind: l ? "scale_x" : "scale_y", cursor: l ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const a = r ? e.corners.findIndex((s) => ps(s, t) <= 121) : -1;
  if (a >= 0) {
    const s = e.corners[a], l = s.x - e.center.x, u = s.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: l * u >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : a1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function rp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function s1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Wa(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: ve(n.x, -r, t.width + r),
    y: ve(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function v2(e) {
  const t = va(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(ve(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Dt * 0.5),
    tanY: Math.tan(ve(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Dt * 0.5)
  };
}
function io(e, t, n) {
  return Id(ql(
    ql(e.centerDir, Jl(e.right, t)),
    Jl(e.up, n)
  ));
}
function ip(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = v2(e), r = Wa(n.centerDir, t);
  if (!r) return { visible: !1 };
  const i = [
    io(n, -n.tanX, n.tanY),
    io(n, n.tanX, n.tanY),
    io(n, n.tanX, -n.tanY),
    io(n, -n.tanX, -n.tanY)
  ].map((b) => Wa(b, t)), a = Array.from({ length: 4 }, (b, x) => {
    const S = [];
    for (let k = 0; k <= 28; k += 1) {
      const N = k / 28;
      let I, j;
      x === 0 ? (I = -n.tanX + 2 * n.tanX * N, j = n.tanY) : x === 1 ? (I = n.tanX, j = n.tanY - 2 * n.tanY * N) : x === 2 ? (I = n.tanX - 2 * n.tanX * N, j = -n.tanY) : (I = -n.tanX, j = -n.tanY + 2 * n.tanY * N);
      const R = Wa(io(n, I, j), t);
      R && S.push({ x: R.x, y: R.y });
    }
    return S;
  }), s = Wa(io(n, 0, n.tanY), t), l = Wa(
    io(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), u = [r, ...i, s, l];
  if (u.some((b) => !b || !Number.isFinite(b.x) || !Number.isFinite(b.y)))
    return { visible: !1 };
  if (!u.some((b) => b.rawZ > 1e-4)) return { visible: !1 };
  const h = l.x - s.x, p = l.y - s.y, g = Math.hypot(h, p) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: i.map((b) => ({ x: b.x, y: b.y })),
    boundaryEdges: a,
    rotateStemBase: { x: s.x, y: s.y },
    rotateHandle: {
      x: s.x + h / g * Hg,
      y: s.y + p / g * Hg
    },
    visible: !0
  };
}
function Gg(e, t, n, r) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: ip(s, r) })).filter((s) => s.geometry.visible).sort((s, l) => {
    var u, h;
    return Number(((u = l.item) == null ? void 0 : u.z_index) || 0) - Number(((h = s.item) == null ? void 0 : h.z_index) || 0);
  }), a = i.find((s) => {
    var l;
    return String(((l = s.item) == null ? void 0 : l.id) || "") === String(t || "");
  });
  if (a) {
    const s = Xf(a.geometry, n);
    if (s.kind === "scale" || s.kind === "rotate") return { ...a, hit: s };
  }
  for (const s of i) {
    const l = Xf(s.geometry, n);
    if (l.kind !== "none") return { ...s, hit: l };
  }
  return null;
}
function _2(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Xt(Math.atan2(r.x, r.z) * bn),
    pitch_deg: Math.asin(ve(r.y, -1, 1)) * bn
  };
}
function S2(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: ve(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: ve(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function w2(e, t, n, r = !1) {
  const i = (Number(n || 0) - Number(t || 0)) * bn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let dl = null;
function op() {
  return dl || (dl = new Promise((e) => {
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
  }), dl);
}
function gr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function x2(e, t = 1024) {
  const n = Math.max(1, Math.round(gr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(gr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function k2(e, t, n) {
  const r = gr(t), i = gr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || i < 1) return null;
  const s = gr(a.u0), l = gr(a.v0), u = gr(a.u1), h = gr(a.v1);
  if (u <= s || h <= l) return null;
  const p = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + u) * 0.5 + gr(p.du)) * r,
    centerY: ((l + h) * 0.5 + gr(p.dv)) * i,
    width: (u - s) * r,
    height: (h - l) * i,
    rotationRad: gr(p.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, gr(p.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function M2(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, a = (e == null ? void 0 : e.transform) || {};
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
    a.du,
    a.dv,
    a.rot_deg,
    a.scale
  ].join(":");
}
function N2() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(a));
      }
  }
  function r(a, s) {
    let l = e.get(a);
    if (l)
      return e.delete(a), e.set(a, l), !l.settled && typeof s == "function" && l.listeners.add(s), l.image;
    const u = new Image();
    l = { image: u, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(a, l);
    const h = () => {
      l.settled = !0;
      const p = [...l.listeners];
      l.listeners.clear(), p.forEach((g) => g()), n();
    };
    return u.onload = h, u.onerror = h, u.src = a, n(), u;
  }
  function i(a, s, l, u = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const h = String(a.rasterDataUrl || "").trim(), p = k2(a, s, l);
    if (!h.startsWith("data:") || !p) return null;
    const g = M2(a, s, l), b = String((a == null ? void 0 : a.id) || "").trim() || g, x = t.get(b);
    if ((x == null ? void 0 : x.revision) === g) return { source: x.source, revision: g };
    const S = r(h, u), k = Number(S.naturalWidth || S.width || 0), N = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || k < 1 || N < 1) return null;
    const I = En({ label: "raster-object" });
    I.width = Math.max(1, Math.round(s)), I.height = Math.max(1, Math.round(l));
    const j = I.getContext("2d");
    return j ? (p.wrapOffsets.forEach((R) => {
      j.save(), j.translate(p.centerX + R, p.centerY), j.rotate(p.rotationRad), j.scale(p.scale, p.scale), j.drawImage(
        S,
        -p.width * 0.5,
        -p.height * 0.5,
        p.width,
        p.height
      ), j.restore();
    }), t.set(b, { revision: g, source: I }), { source: I, revision: g }) : null;
  }
  return {
    get: i,
    retain(a = []) {
      const s = new Set(Array.from(a, (l) => String(l || "").trim()).filter(Boolean));
      for (const l of t.keys())
        s.has(l) || t.delete(l);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function P2(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function A2(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function C2({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function a(g) {
    if (!g) return;
    g.entry.listeners.delete(g);
    const b = r.get(g.owner);
    (b == null ? void 0 : b.get(g.key)) === g && b.delete(g.key);
  }
  function s(g, b, x, S) {
    if (!g || typeof S != "function" || x.settled) return;
    let k = r.get(g);
    k || (k = /* @__PURE__ */ new Map(), r.set(g, k));
    const N = k.get(b);
    if ((N == null ? void 0 : N.entry) === x) {
      N.callback = S;
      return;
    }
    a(N);
    const I = { owner: g, key: b, entry: x, callback: S };
    k.set(b, I), x.listeners.add(I);
  }
  function l(g, b) {
    g.settled || (g.settled = !0, g.image.onload = null, g.image.onerror = null, !b && n.get(g.key) === g && n.delete(g.key), [...g.listeners].forEach((x) => {
      a(x);
      try {
        x.callback(g.image, b);
      } catch {
      }
    }), u(i));
  }
  function u(g) {
    if (!(n.size <= g))
      for (const [b, x] of n) {
        if (n.size <= g) break;
        !x.settled || x.listeners.size > 0 || (x.image.onload = null, x.image.onerror = null, n.delete(b));
      }
  }
  function h(g, b, x, S = null) {
    const k = String(b || ""), N = String(x || "");
    if (!k || !N) return null;
    let I = n.get(k);
    if (I)
      n.delete(k), n.set(k, I);
    else {
      u(i - 1);
      const R = e || globalThis.Image;
      if (typeof R != "function") return null;
      const $ = new R();
      I = { key: k, image: $, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(k, I), $.onload = () => l(I, !0), $.onerror = () => l(I, !1), $.src = N;
    }
    return I.settled || I.image.complete && Number(I.image.naturalWidth || I.image.width || 0) > 0 || s(g, k, I, S), I.image;
  }
  function p(g) {
    const b = r.get(g);
    b && ([...b.values()].forEach(a), r.delete(g), u(i));
  }
  return { get: h, disposeOwner: p };
}
const Za = /* @__PURE__ */ new WeakMap();
function l1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Za.get(e);
  r || (r = [], Za.set(e, r));
  const i = { handler: t, editor: n };
  r.push(i);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const s = Za.get(e);
    if (!s) return;
    const l = s.indexOf(i);
    l >= 0 && s.splice(l, 1), s.length === 0 && Za.delete(e);
  };
}
function yi(e, ...t) {
  const n = Za.get(e), r = (n == null ? void 0 : n.findLast((i) => i.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Tl = Object.freeze({
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
}), c1 = "PanoramaSuite.Editor.ViewControls", I2 = {
  id: c1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Tl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function O2(e) {
  return Object.hasOwn(Tl, e) ? Tl[e] : Tl.default;
}
function E2(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: i = !1, metaKey: a = !1 }) {
  if (i || a) return null;
  const s = e.bindings.find((l) => l.button === t && !!l.shift === n && !!l.alt === r);
  return (s == null ? void 0 : s.action) ?? null;
}
function T2(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const dc = "state_json";
function bi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function F2(e) {
  var s, l;
  const t = bi(e, dc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = ab(n, {
    coverage: (s = bi(e, "coverage")) == null ? void 0 : s.value
  }), i = e1(r, { type: "add-frame" });
  if (!i.changed) return !1;
  const a = JSON.stringify(i.state);
  return t.value = a, (l = t.callback) == null || l.call(t, a), !0;
}
function ap(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = bi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...i) {
    var s, l, u, h, p, g, b, x, S;
    const a = r ? r(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (l = (s = e.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (u = e.__panoDomPreview) == null ? void 0 : u.requestDraw) == null || h.call(u), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0), (b = (g = e.graph) == null ? void 0 : g.setDirtyCanvas) == null || b.call(g, !0, !0), (S = (x = t == null ? void 0 : t.canvas) == null ? void 0 : x.setDirty) == null || S.call(x, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function D2(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Kg(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function L2(e) {
  var p, g, b, x, S, k;
  if (!e) return;
  const t = bi(e, "coverage"), n = bi(e, "bg_color"), r = bi(e, dc), i = bi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), s = String(n.value ?? "").trim(), l = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && D2(a) && (Kg(s) || s === ""))) return;
  let h = "360";
  if (Kg(s))
    try {
      h = String(Xn((p = JSON.parse(s)) == null ? void 0 : p.coverage));
    } catch {
      h = "360";
    }
  t.value = h, (g = t.callback) == null || g.call(t, h), n.value = a, (b = n.callback) == null || b.call(n, a), r.value = s, (x = r.callback) == null || x.call(r, s), i && (i.value = l, (S = i.callback) == null || S.call(i, l)), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0);
}
function Fl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, s;
    const i = String((r == null ? void 0 : r.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (s = r.parentEl) != null && s.style && (r.parentEl.style.display = "none")));
  });
}
function qf(e, t, n) {
  var a, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((l) => String((l == null ? void 0 : l.name) || "") === String(t));
  if (i) {
    i.callback = n, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (a = i.element) != null && a.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const l = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(l) || Number(l[0] || 0) <= 0 || Number(l[1] || 0) <= 0) && (i.computeSize = () => {
      var u;
      return [Math.max(120, Number(((u = e == null ? void 0 : e.size) == null ? void 0 : u[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, n), i && (i.serialize = !1), i;
}
async function R2(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, i]) => i)) : await Promise.all(r.map(([, i]) => i)), r.forEach(([i, a]) => {
        n.get(i) === a && n.delete(i);
      });
    }
}
function Qa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), s = a.catch(() => {
  });
  e.__panoStickerOperationTail = s, e.__panoPendingStickerUploads.set(t, a);
  const l = () => {
    var u, h;
    ((h = (u = e.__panoPendingStickerUploads) == null ? void 0 : u.get) == null ? void 0 : h.call(u, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(l, l), s.then(() => {
    e.__panoStickerOperationTail === s && (e.__panoStickerOperationTail = null);
  }), a;
}
async function u1(e, t = {}) {
  var r;
  await R2(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of n) await i();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function V2(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await u1(e), n ? n.apply(this, r) : this.value;
  };
}
function $2(e) {
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
function z2(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Ba(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: i,
  attachStickers: a,
  attachCutout: s,
  enableStickersPreview: l,
  sceneStateV2: u = !1,
  studio: h = !1
}) {
  if (!(e != null && e.prototype)) return;
  function p(g) {
    var S;
    const b = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === b) return;
    $2(g), ap(g, t), Fl(g, dc);
    const x = bi(g, dc);
    if (V2(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const k = x.callback;
      x.callback = (N) => {
        var j;
        const I = k ? k(N) : void 0;
        return (j = g.setDirtyCanvas) == null || j.call(g, !0, !1), I;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = u, g.__panoStudio = h;
      const k = bi(g, "bg_color");
      !u && k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (S = k.callback) == null || S.call(k, "#00ff00")), qf(g, r, () => i(g, "stickers")), l && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => i(g, "stickers")
      }), g.__panoStickersNodeSurface && Fl(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = b;
      return;
    }
    g.__panoSceneStateV2 = u, qf(g, r, () => i(g, "cutout")), u || s(g, {
      buttonText: r,
      onOpen: () => i(g, "cutout")
    }), g.__panoCutoutNodeSurface && Fl(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = b;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const b = e.prototype[g];
    e.prototype[g] = function() {
      const x = b ? b.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && !u && F2(this), g === "onConfigure" && n === "PanoramaStickers" && !u && this.widgets && L2(this);
      const S = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && p(this), g === "onAdded" && S && yi(this, "attach"), x;
    };
  }
}
function j2(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return z2(this), r;
  };
}
function H2(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: i
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const s = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = l, !s && l < 40) {
      i(a);
      return;
    }
    ap(e, t);
    const u = (h = e) => n(h, "stickers", { readOnly: !0, hideSidebar: !1 });
    qf(e, "Open Preview", () => u(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: u
    }), e.__panoPreviewNodeSurface && Fl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(a);
}
function G2({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: i,
  restoreOutput: a,
  requestFrame: s,
  enableStickersPreview: l = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [I2, Ck],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [og],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [og.id] }],
    beforeRegisterNodeDef(u, h) {
      const p = String((h == null ? void 0 : h.name) || "");
      (p === "PanoramaStickers" || p === "Panorama Stickers") && Ba(u, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l
      }), p === "PanoramaStickersNode" && Ba(u, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l,
        sceneStateV2: !0
      }), p === "PanoramaStudio" && Ba(u, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l,
        sceneStateV2: !0,
        studio: !0
      }), (p === "PanoramaCutout" || p === "Panorama Cutout") && Ba(u, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l
      }), p === "PanoramaCutoutNode" && Ba(u, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: l,
        sceneStateV2: !0
      }), Zl(p) && j2(u);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(u) {
      u.__panoPreviewAttached && a(u);
    },
    nodeCreated(u) {
      const h = String((u == null ? void 0 : u.comfyClass) || (u == null ? void 0 : u.type) || (u == null ? void 0 : u.title) || "");
      ap(u, e), Zl(h) && H2(u, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const K2 = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Or(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : K2.test(String(e.name || "")) : !1;
}
function sp(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Or(n)) : !1;
}
function W2(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (u) => {
    var h, p, g;
    (h = u == null ? void 0 : u.preventDefault) == null || h.call(u), (p = u == null ? void 0 : u.stopPropagation) == null || p.call(u), (g = u == null ? void 0 : u.stopImmediatePropagation) == null || g.call(u);
  }, a = (u) => {
    if (sp(u == null ? void 0 : u.dataTransfer)) {
      i(u);
      try {
        u.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, s = (u) => {
    var h;
    u != null && u.relatedTarget && ((h = e.contains) != null && h.call(e, u.relatedTarget)) || n(!1);
  }, l = (u) => {
    var p;
    const h = Array.from(((p = u == null ? void 0 : u.dataTransfer) == null ? void 0 : p.files) || []).find((g) => Or(g));
    if (!h) {
      n(!1);
      return;
    }
    i(u), n(!1), r(h);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", l, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", l, !0), n(!1);
  };
}
async function es(e, t = {}) {
  var s, l, u, h;
  if (!Or(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((l = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : l.bind(globalThis.URL)), i = t.revokeObjectURL || ((h = (u = globalThis.URL) == null ? void 0 : u.revokeObjectURL) == null ? void 0 : h.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const p = await new Promise((g, b) => {
      const x = new n();
      x.onload = () => g(x), x.onerror = () => b(new Error("image load failed")), x.src = a;
    });
    return {
      image: p,
      width: Math.max(1, Number(p.naturalWidth || p.width || 1)),
      height: Math.max(1, Number(p.naturalHeight || p.height || 1))
    };
  } finally {
    i == null || i(a);
  }
}
async function co(e, { fetchApi: t } = {}) {
  if (!Or(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const i = await r.json(), a = String((i == null ? void 0 : i.name) || "").trim();
  if (!a) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: a,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const Wg = /* @__PURE__ */ new WeakSet(), Bg = /* @__PURE__ */ new WeakSet();
let Ug = 0;
function Jf(e) {
  if (!e || typeof e != "object" || Bg.has(e)) return e;
  const t = String(e.type || "preview");
  return Ug += 1, e.type = `${t}:pano-${Ug}`, Bg.add(e), e;
}
function pc(e) {
  if (!e || typeof e != "object" || Wg.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Wg.add(e), e;
}
function f1(e, t) {
  var r, i;
  if (!t || ((i = (r = pc(t)) == null ? void 0 : r.onRemove) == null || i.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function B2({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, i = null, a = !1;
  return { schedule: (u) => a || r || typeof e != "function" ? !1 : (i = u, r = e(() => {
    r = 0;
    const h = i;
    i = null, a || n == null || n(h);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, i = null);
  } };
}
const { app: Zt } = vl;
hP((e) => Vi(e.id));
mP(sn);
const lp = C2(), { linkedVideoFile: U2 } = Tb({ app: Zt, api: sn });
function Zf() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (vl == null ? void 0 : vl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Y2 = "pano_suite.ui_settings.v1", X2 = 120, q2 = 2048;
function Yg() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Y2)) || "").trim();
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
function J2() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ua(e) {
  var n, r, i, a, s;
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
    stylePos: String(((a = e.style) == null ? void 0 : a.position) || ""),
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function Z2() {
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
function Qf(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, i) => {
    const a = Number(r), s = Number(i);
    return !Number.isFinite(a) || !Number.isFinite(s) ? null : [a, s];
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
function d1(e) {
  const t = Qf(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Q2(e, t, n) {
  d1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function ed(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function cp(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function p1(e) {
  return Zl(cp(e));
}
function Xg(e = null) {
  var a, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (a = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : s.name) || "");
  return [t, r, n, i].join("|");
}
function h1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", a = ed(e);
      this.activeBackend = a;
      const s = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", l = e.__panoPreviewNoPreview === !0, u = n.noPreview === !0;
      if (a === i && a !== "none" && s === r && l === u) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = u, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Dl(e), KA(e, { ...n, mode: r, __panoForcedPath: i }), this.activeBackend = ed(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Dl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Dl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function eA(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Dl(e, t = {}) {
  var r, i, a, s, l;
  if (!e) return;
  td.unregister(e), eA(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (a = n.state) != null && a.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (l = (s = n.root) == null ? void 0 : s.remove) == null || l.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((h) => {
      if (h === (n == null ? void 0 : n.widget)) return !0;
      const p = String((h == null ? void 0 : h.name) || ""), g = String((h == null ? void 0 : h.type) || ""), b = Zf();
      return p === b || g === b || p === "pano_preview" || g === "pano_preview" ? !0 : p === "preview" && g === "pano_preview";
    }).forEach((h) => SA(e, h));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function tA(e, t = "#00ff00") {
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
function nA(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = la(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Wn(e) {
  var l, u;
  const t = nA(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((l = la(e, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), i = Number(((u = la(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === i)
    return a.parsed;
  const s = e.__panoSceneStateV2 && typeof t == "string" ? sb(t, { backgroundColor: r, coverage: i, active: ub(e) }) : tA(t, r);
  return s.coverage = i, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: i, parsed: s }, s;
}
function la(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function rA(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function m1(e, t, n = null) {
  var i, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((i = r == null ? void 0 : r.isSubgraphNode) != null && i.call(r))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, l = s ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(s.origin_slot ?? 0)) : null;
      l != null && l.outputNode && (r = l.outputNode);
    } catch {
    }
  return !r && n != null && (r = rA(e == null ? void 0 : e.graph, n)), r;
}
function iA(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function g1(e, t = []) {
  const n = iA(e), r = [];
  return t.forEach((i) => {
    n.includes(String(i)) && r.push(String(i));
  }), n.forEach((i) => {
    ji.includes(i) && !r.includes(i) && r.push(i);
  }), r.length ? r : t;
}
function qg(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function hc(e, t) {
  const n = qg(e), r = qg(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function oA(e, t) {
  var n;
  return m1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function aA(e, t = ji) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const i = g1(e, t).map((l) => n.findIndex((u) => String((u == null ? void 0 : u.name) || "") === String(l))).filter((l) => l >= 0), a = n.map((l, u) => ({ input: l, idx: u })).filter(({ input: l }) => String((l == null ? void 0 : l.type) || "").toUpperCase() === "IMAGE").map(({ idx: l }) => l), s = [.../* @__PURE__ */ new Set([...i, ...a])];
  return SP(e, s, oA);
}
const td = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = sn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var u, h, p, g, b;
        if (!a) return;
        const s = hc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !s || !s && ![...aA(a)].some((x) => hc(r, x)) || Eb(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (y1(a), (h = (u = a.__panoDomPreview) == null ? void 0 : u.requestDraw) == null || h.call(u), (p = a.setDirtyCanvas) == null || p.call(a, !0, !0), (b = (g = a.graph) == null ? void 0 : g.setDirtyCanvas) == null || b.call(g, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, sn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = sn) != null && e.removeEventListener) || (sn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function mc(e) {
  var a;
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
  return typeof ((a = sn) == null ? void 0 : a.apiURL) == "function" ? sn.apiURL(i) : i;
}
function sA(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function lA(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const i = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: i, subfolder: a };
}
function cA(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const i = String(r || "").trim();
    !i || n.has(i) || (n.add(i), t.push(i));
  }), t;
}
function uA(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (sA(t)) return [t];
  const { filename: n, subfolder: r } = lA(t);
  if (!n) return [t];
  const i = ["temp", "output", "input"].map((a) => mc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return cA([...i, t]);
}
function fA(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? mc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Vi(e) {
  const t = Zt == null ? void 0 : Zt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const i = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (hc(a, i)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const s of a)
      if (hc(s, i)) return t[s];
  }
  return null;
}
function hs(e, t, n = null) {
  const r = n || Vi(e == null ? void 0 : e.id), i = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(i) ? i[0] : i;
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
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return mc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = ar(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : mc(e);
}
function gc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Zu(e) {
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
function up(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const i = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", a = new URL(n, i);
    return t > 0 && a.searchParams.set("pano_rev", String(t)), a.toString();
  } catch {
    const i = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${i}pano_rev=${t}` : n;
  }
}
function dA(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((s) => t.push(s));
  }, i = (a, s = 0) => {
    !a || s > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), i(a.output, s + 1), i(a.ui, s + 1), i(a.data, s + 1), i(a.result, s + 1));
  };
  return i(e, 0), t;
}
function pA(e, t) {
  try {
    e.__panoOwnOutputRev = P2(e.__panoOwnOutputRev);
    const n = dA(t);
    let r = "";
    for (const i of n)
      if (r = ar(i), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), up(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ca(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function hA(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!kn(e, "background"))
    return ca(e), null;
  const i = Vi(r), a = Jd(i, t, ar);
  if (!a)
    return ca(e), null;
  const s = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), l = up(a, s), u = `${t.join("|")}:${l}`, h = e.__panoOwnOutputVideoCache;
  if (h && h.key === u) return h.player.failed() ? null : h.player.video;
  ca(e);
  const p = wP({
    documentRef: document,
    src: l,
    onFrame: n
  });
  return p ? (e.__panoOwnOutputVideoCache = { key: u, player: p }, p.video) : null;
}
function mA(e, t = []) {
  var h, p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const i = g1(e, t).map((g) => n.findIndex((b) => String((b == null ? void 0 : b.name) || "") === String(g))).filter((g) => g >= 0), a = n.map((g, b) => ({ input: g, idx: b })).filter(({ input: g }) => String((g == null ? void 0 : g.type) || "").toUpperCase() === "IMAGE").map(({ idx: g }) => g), s = [.../* @__PURE__ */ new Set([...i, ...a])];
  for (const g of s) {
    const b = n[g], x = e.graph ? e.getInputLink(g) : null;
    if ((x == null ? void 0 : x.origin_id) == null) continue;
    const S = x.origin_id, k = m1(e, g, S);
    if (!k) continue;
    const N = Number(x.origin_slot ?? 0), I = Vi((k == null ? void 0 : k.id) ?? S), j = Array.isArray(I == null ? void 0 : I.images) ? I.images : [];
    if (j.length) {
      const H = [];
      N >= 0 && N < j.length && H.push(j[N]), H.push(...j);
      for (const B of H.filter((ye) => !Ol(ye))) {
        const ye = ar(B);
        if (ye)
          return String((b == null ? void 0 : b.name) || ""), { src: `${ye}&pano_src=${Wf(I)}`, sourceType: "nodeOutputs", inputName: String((b == null ? void 0 : b.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (Zt == null ? void 0 : Zt.getNodeImageUrls) == "function" ? Zt.getNodeImageUrls(k) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const H = [];
      N >= 0 && N < R.length && H.push(R[N]), H.push(...R);
      for (const B of H) {
        const ye = ar(B);
        if (ye)
          return String((b == null ? void 0 : b.name) || ""), { src: ye, sourceType: "appNodeImageUrls", inputName: String((b == null ? void 0 : b.name) || "") };
      }
    }
    const $ = Array.isArray(k == null ? void 0 : k.imgs) ? k.imgs : [];
    if ($.length) {
      const H = [];
      N >= 0 && N < $.length && H.push($[N]), H.push(...$);
      for (const B of H) {
        const ye = ar(B);
        if (ye)
          return String((b == null ? void 0 : b.name) || ""), { src: ye, sourceType: "nodeImgs", inputName: String((b == null ? void 0 : b.name) || "") };
      }
    }
    const v = (h = k == null ? void 0 : k.widgets) == null ? void 0 : h.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image");
    if (v) {
      let H = ar(v.value);
      if (H && !H.includes("/") && !H.includes(":") && (k.comfyClass === "LoadImage" || k.type === "LoadImage") && (H = sn.apiURL(`/view?filename=${encodeURIComponent(H)}&type=input&subfolder=`)), H)
        return String((b == null ? void 0 : b.name) || ""), { src: H, sourceType: "widget", inputName: String((b == null ? void 0 : b.name) || "") };
    }
  }
  const l = kn(e, "background") ? Vi(e == null ? void 0 : e.id) : null, u = [];
  if (Array.isArray(l == null ? void 0 : l.pano_input_images) && u.push(...l.pano_input_images), Array.isArray((p = l == null ? void 0 : l.ui) == null ? void 0 : p.pano_input_images) && u.push(...l.ui.pano_input_images), u.length > 0)
    for (const g of u) {
      const b = ar(g);
      if (b)
        return { src: b, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function gA(e, t = [], n = {}) {
  const r = mA(e, t), i = String((r == null ? void 0 : r.src) || "").trim();
  if (!i) return null;
  const a = uA(i);
  if (!a.length) return null;
  const s = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = t.join("|") || "image", u = e.__panoLinkedInputImageCache.get(l);
  if (u && u.srcRaw === i && u.img) return u.img;
  if (u && u.pendingSrcRaw === i && u.pendingImg)
    return s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : u.pendingImg;
  const h = new Image(), p = u || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  p.pendingSrcRaw = i, p.pendingResolvedSrc = "", p.pendingImg = h, e.__panoLinkedInputImageCache.set(l, p);
  let g = -1;
  const b = () => {
    var S, k, N, I;
    if (g += 1, g >= a.length) {
      if (((k = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : k.call(S, l)) === p && p.pendingImg === h && (p.pendingSrcRaw = "", p.pendingResolvedSrc = "", p.pendingImg = null, !p.img))
        try {
          (I = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || I.call(N, l);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const x = a[g];
    p.pendingResolvedSrc = x, h.src = x;
  };
  return h.onload = () => {
    var x, S, k;
    ((S = (x = e.__panoLinkedInputImageCache) == null ? void 0 : x.get) == null ? void 0 : S.call(x, l)) === p && p.pendingImg === h && (p.srcRaw = i, p.resolvedSrc = String(p.pendingResolvedSrc || h.src || ""), p.img = h, p.pendingSrcRaw = "", p.pendingResolvedSrc = "", p.pendingImg = null), String(p.pendingResolvedSrc || p.resolvedSrc || h.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0);
  }, h.onerror = (x) => {
    var S, k, N, I;
    if (g + 1 < a.length) {
      b();
      return;
    }
    if (((k = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : k.call(S, l)) === p && p.pendingImg === h && (p.pendingSrcRaw = "", p.pendingResolvedSrc = "", p.pendingImg = null, !p.img))
      try {
        (I = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || I.call(N, l);
      } catch {
      }
    String(p.pendingResolvedSrc || p.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((x == null ? void 0 : x.type) || "error");
  }, b(), s && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : h;
}
function yA(e, t = [], n = null, r = {}) {
  const i = gA(e, t, r);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
}
function y1(e) {
  var t, n;
  if (e) {
    lp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ca(e), e.__panoWrappedErpCache = null;
  }
}
function bA(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ca(e), e.__panoWrappedErpCache = null;
  }
}
function b1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function pl(e, t, n = "") {
  const r = b1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = i), !0) : r.isLoading ? i - Number(r.loadingSinceTs || 0) < X2 ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Jg(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), s = n / i, l = r / a, u = Math.min(s, l);
  return Number.isFinite(u) && u > 0 ? u : 1;
}
function vA(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || s <= 0) return;
  const l = Math.max(14, Math.round(14 * n)), u = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), h = Math.max(Math.round(34 * n), l + Math.round(14 * n)), p = r + (a - u) * 0.5, g = i + (s - h) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(p, g, u, h, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${l}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", p + u * 0.5, g + h * 0.5 + 0.5), e.restore();
}
function Qu(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function _A(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const i = t.find((a) => String((a == null ? void 0 : a.id) || "") === n);
    if (i) return i;
  }
  return t[0] || null;
}
function SA(e, t) {
  return f1(e, t);
}
function As(e, t, n, r = null) {
  var b;
  if (!String(t || "")) return null;
  let a = fA(n);
  if (!a && (r != null && r.external)) {
    if (!kn(e, "external-sticker")) return null;
    const x = Vi(e == null ? void 0 : e.id), S = ((b = x == null ? void 0 : x.ui) == null ? void 0 : b.pano_sticker_input_images) || (x == null ? void 0 : x.pano_sticker_input_images) || [];
    for (const k of Array.isArray(S) ? S : [S])
      if (a = ar(k), a) break;
  }
  if (!a) return null;
  const s = hs(e, "pano_sticker_input_state_hash"), l = r != null && r.external ? String(s ?? "") : "", u = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, h = r != null && r.external ? up(a, u) : a, p = A2(a, l, u);
  return lp.get(e, p, h, (x, S) => {
    var k, N;
    S && (r != null && r.external && e.__panoOutputFromRun && yi(e, "image-loaded"), (N = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || N.call(k));
  }) || null;
}
function wA(e, t) {
  var g, b, x, S;
  const n = PA(e, t), r = AA(t), i = Array.isArray((g = t == null ? void 0 : t.painting) == null ? void 0 : g.groups) ? t.painting.groups : [], a = new Map(
    i.filter((k) => k && typeof k == "object").map((k) => [String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim(), Number((k == null ? void 0 : k.z_index) || 0)])
  ), s = n ? r.map((k) => {
    const N = n.getGroupDisplayCanvas(k);
    return N ? {
      id: `paint_group:${k}`,
      source: N,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${k}`,
      zIndex: Number(a.get(k) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((b = t == null ? void 0 : t.painting) == null ? void 0 : b.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (S = (x = e.__panoRasterObjectSurfaceCache) == null ? void 0 : x.retain) == null || S.call(x, []), s;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = N2()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var k, N;
    return (N = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null ? void 0 : N.call(k);
  });
  const u = x2(t == null ? void 0 : t.output_preset), h = l.filter((k) => (k == null ? void 0 : k.visible) !== !1 && String((k == null ? void 0 : k.layerKind) || "paint") === "paint").map((k) => String((k == null ? void 0 : k.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(h);
  const p = l.map((k) => {
    const N = e.__panoRasterObjectSurfaceCache.get(
      k,
      u.width,
      u.height,
      e.__panoRasterObjectReady
    );
    return N ? {
      id: `raster:${String((k == null ? void 0 : k.id) || "")}`,
      source: N.source,
      revision: N.revision,
      zIndex: Number((k == null ? void 0 : k.z_index) || 0),
      opacity: 1,
      visible: (k == null ? void 0 : k.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...s, ...p];
}
function xA(e, t, n, r) {
  var a, s, l, u, h, p;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const g = r.convertEventToCanvasOffset(t);
      if (Array.isArray(g) && g.length >= 2)
        return {
          x: Number(g[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
          y: Number(g[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((h = e == null ? void 0 : e.pos) == null ? void 0 : h[0]) || 0),
      y: Number(t.canvasY) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
    };
  const i = MA(e, t, r);
  return i || null;
}
function kA(e, t) {
  var g, b;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (g = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : g.call(i), s = (t == null ? void 0 : t.ds) || ((b = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : b.ds);
  if (!a || !s) return null;
  const l = Number(s.scale || 1);
  if (!Number.isFinite(l) || Math.abs(l) < 1e-6) return null;
  const u = Array.isArray(s.offset) ? s.offset : [0, 0], h = (n - Number(a.left || 0)) / l - Number(u[0] || 0), p = (r - Number(a.top || 0)) / l - Number(u[1] || 0);
  return !Number.isFinite(h) || !Number.isFinite(p) ? null : { x: h, y: p };
}
function MA(e, t, n) {
  var i, a;
  const r = kA(t, n || (Zt == null ? void 0 : Zt.canvas));
  return r ? {
    x: r.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function NA(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function PA(e, t) {
  var h, p, g, b, x, S, k, N, I, j, R, $;
  const n = (p = (h = t == null ? void 0 : t.painting) == null ? void 0 : h.paint) == null ? void 0 : p.strokes, r = (b = (g = t == null ? void 0 : t.painting) == null ? void 0 : g.mask) == null ? void 0 : b.strokes, i = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!i && !a) return null;
  const s = NA(e, t), l = `${s.width}x${s.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== l) && (e.__panoPreviewPaintEngine = Nf(s), e.__panoPreviewPaintDescriptorKey = l, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const u = {
    paint: n || null,
    mask: r || null,
    groups: ((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.paint) !== u.paint || ((N = e.__panoPreviewPaintRevision) == null ? void 0 : N.mask) !== u.mask || ((I = e.__panoPreviewPaintRevision) == null ? void 0 : I.groups) !== u.groups || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.rasterObjects) !== u.rasterObjects) && (e.__panoPreviewPaintRevision = u, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.groups) ? t.painting.groups.length : 0),
    String(Array.isArray(($ = t == null ? void 0 : t.painting) == null ? void 0 : $.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function AA(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, i) => Number((r == null ? void 0 : r.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function CA(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function IA(e, t, n) {
  const r = ip(t, n);
  r.visible && rp(e, r.boundaryEdges, { selected: !1 });
}
function OA(e, t, n) {
  const r = ip(t, n);
  r.visible && (e.save(), rp(e, r.boundaryEdges, { selected: !0 }), s1(e, r, { accent: y2(t) }), e.restore());
}
function nd(e, t, n) {
  return Sb(lc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function yc(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ya;
}
function EA(e) {
  return [kn(e, "background") ? Jd(Vi(e.id), ["pano_input_videos"], ar) : "", U2(e, ji)];
}
function TA(e) {
  var a;
  if (!kn(e, "external-sticker")) return null;
  const t = Vi(e.id), n = hs(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(ar), meta: n };
  const i = Jd(t, ["pano_sticker_input_videos"], ar);
  return i ? { src: i, meta: n } : null;
}
function FA({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Zg(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Zr({ ...t, painting: null }) });
  const r = (s) => {
    var u;
    if (s.visible === !1) return null;
    let l;
    if (t.version === 2) {
      l = As(e, s.id, cb(s.source), { external: s.source.kind === "port" });
      const h = e.__panoSurfacePlayback;
      if (s.source.kind === "port" && h) {
        const p = h.playback.stickerPicture(h.stickerStill, l), g = Lb(h.playback.stickerMedia, l);
        return p ? { media: p, revision: Zu(p), source: g } : null;
      }
    } else {
      const h = s.type === "external_image" || s.source_kind === "external_image", p = String(s.asset_id || "") || (h ? String(s.id || "") : "");
      l = As(e, p, (u = t.assets) == null ? void 0 : u[s.asset_id], { external: h });
    }
    return gc(l) ? { media: l, revision: Zu(l) } : null;
  }, i = (t.painting_visible === !1 ? [] : wA(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: gc(n) ? { media: n, revision: Zu(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: wb(e.__panoSurfaceScene.sceneState, yc(e), t.stickers, { media: r, paintLayers: i })
  };
}
function DA(e, t, n) {
  var $, v, H, B, ye, Ae, E;
  const r = String(e.__panoPreviewMode || "stickers");
  b1(e, r);
  const i = Wn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (H = (v = ($ = e.__panoCutoutNodeSurface) == null ? void 0 : $.session) == null ? void 0 : v.refresh) == null || H.call(v)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (Ae = (ye = (B = e.__panoStickersNodeSurface) == null ? void 0 : B.session) == null ? void 0 : ye.refresh) == null || Ae.call(ye));
  const a = t.parentElement, s = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), u = t.getContext("2d");
  if (!u) return;
  (t.width !== s || t.height !== l) && (t.width = s, t.height = l);
  const h = { x: 0, y: 0, w: s, h: l };
  u.setTransform(1, 0, 0, 1, 0, 0), u.fillStyle = "#070707", u.fillRect(0, 0, s, l);
  const p = (e.__panoSurfacePlayback ? FA(e.__panoSurfacePlayback) : hA(e, ["pano_input_videos"], () => {
    var te, re;
    return (re = (te = e.__panoDomPreview) == null ? void 0 : te.requestDraw) == null ? void 0 : re.call(te);
  })) || yA(
    e,
    ji,
    () => {
      var te, re;
      return (re = (te = e.__panoDomPreview) == null ? void 0 : te.requestDraw) == null ? void 0 : re.call(te);
    },
    { preserveReadyWhilePending: !1 }
  ), g = gc(p);
  let b = null;
  const x = (te, re) => {
    b || (b = Zg(e, i, p));
    const fe = n.render({ width: te.w, height: te.h, camera: re, ...b });
    return fe && u.drawImage(fe.canvas, fe.x, fe.y, fe.width, fe.height, te.x, te.y, te.w, te.h), !!fe;
  };
  if (r === "cutout") {
    const te = _A(i), re = CA(p), fe = te ? ve($i(te).aspect, 0.1, 10) : g ? ve(Number(re.width / re.height), 0.05, 20) : 1, Me = tp(h, fe);
    e.__panoCutoutNodeFrame = Me;
    let xe = "none";
    const he = String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "");
    if (te)
      if (p && !g)
        xe = "loading";
      else if (g) {
        const J = HP({ width: s, height: l }, Me, te);
        [
          !J.fallback || x(J.fallback.rect, ds(J.fallback.shot)),
          x(J.rect, ds(J.shot)),
          !J.fallback || x(Me, ds(te))
        ].every(Boolean) || (xe = "loading");
      } else
        xe = "empty";
    else {
      const J = e.__panoLastCutoutShot;
      J ? (e.__panoPreviewView = Qb(J, { width: s, height: l }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), g ? x(h, lc(e.__panoPreviewView, s, l)) || (xe = "loading") : p ? xe = "loading" : xe = "empty";
    }
    g || n.release(), n.failed && xe === "loading" && (xe = "none"), te && (e.__panoLastCutoutShot = { ...te }, u.save(), u.fillStyle = "rgba(0,0,0,0.58)", u.beginPath(), u.rect(0, 0, s, l), u.rect(Me.x, Me.y, Me.w, Me.h), u.fill("evenodd"), u.restore(), u.save(), u.strokeStyle = "rgba(255,221,87,0.72)", u.lineWidth = 2, u.strokeRect(Me.x + 0.5, Me.y + 0.5, Math.max(0, Me.w - 1), Math.max(0, Me.h - 1)), u.restore()), xe === "loading" ? (Qu(e, !1), pl(e, !0, he)) : xe === "empty" ? (Qu(e, !0), pl(e, !1, "")) : (Qu(e, !1), pl(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!p || g) && (b = Zg(e, i, p), !b.background && !b.layers.length ? (n.release(), S = !0) : S = x(h, lc(e.__panoPreviewView, s, l)));
  const k = !S && !n.failed;
  pl(e, k, k ? String((p == null ? void 0 : p.currentSrc) || (p == null ? void 0 : p.src) || "") : ""), k && vA(u, h, Jg(t, h));
  const N = nd(e, s, l);
  !p && S && LA(u, N, Jg(t, h));
  const I = String(((E = i == null ? void 0 : i.active) == null ? void 0 : E.selected_sticker_id) || ""), j = Bf(i, yc(e)), R = S ? j.find((te) => String((te == null ? void 0 : te.id) || "") === I && (te == null ? void 0 : te.visible) !== !1) : null;
  S && j.filter((te) => te !== R && (te == null ? void 0 : te.visible) !== !1 && (te.external || te.source_kind === "external_image")).filter((te) => !gc(As(e, te.id, null, { external: !0 }))).forEach((te) => IA(u, te, N)), R && OA(u, R, N);
}
function Qg(e, t, n, r, i = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const l = n.project(s);
    if (l.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(l.x, l.y) : (e.moveTo(l.x, l.y), a = !0);
  }
  e.stroke();
}
function LA(e, t, n) {
  e.save();
  const r = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let l = -75; l <= 75; l += 15) {
    const u = [];
    for (let h = -180; h <= 180; h += 4) u.push(qn(h, l));
    Qg(e, u, t, l === 0 ? i : r, l === 0 ? 1.5 : 1);
  }
  for (let l = -180; l <= 180; l += 15) {
    const u = [];
    for (let h = -89; h <= 89; h += 4) u.push(qn(l, h));
    Qg(e, u, t, r, l % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: qn(0, 0) },
    { name: "Right", dir: qn(90, 0) },
    { name: "Back", dir: qn(180, 0) },
    { name: "Left", dir: qn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * n));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((l) => {
    const u = t.project(l.dir);
    u.z > 1e-4 && e.fillText(l.name, u.x, u.y + 24 * n);
  }), e.restore();
}
function rd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function RA(e, t, n = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!r) return !1;
  const i = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return i >= r.width - n && a >= r.height - n;
}
function hr(e, t) {
  return RA(e, t) ? !1 : (rd(e), !0);
}
function e0() {
  var n;
  const e = (n = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function VA(e) {
  var n;
  if (!e) return;
  const t = (n = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function $A(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !d1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function zA(e, t = 0, n = null, r = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, s;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (s = e.setDirtyCanvas) == null || s.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function t0(e, t = null, n = 0, r = 0, i = !0) {
  const a = Math.max(0, Number(r || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(a, Math.max(0, Number(n || 0))) : a;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(a, Math.max(0, Number(n || 0))) : a > 0 ? a : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), i && jA(e, 180, t);
    }
  };
}
function jA(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ts(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const HA = /* @__PURE__ */ new WeakMap();
function v1(e, t) {
  return Eb(HA, e, t) ? !1 : (pA(e, t), y1(e), ts(e), !0);
}
async function GA(e) {
  var n, r;
  const t = await vP(e, Zt, sn);
  t && (v1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function KA(e, t = {}) {
  var et;
  const n = t.__allowStandalone === !0, r = p1(e);
  if (r && !n) {
    cp(e);
    return;
  }
  r && $A(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const s = {
    signature: Xg(e)
  }, l = "dom", u = s.signature || Xg(e);
  if (Number(e.__panoRebindGeneration || 0), ed(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Qf(e), e.__panoFrontendSig = u, e.__panoStickersPath = l, (et = e.__panoDomPreview) != null && et.widget || (e.__panoLegacyPreviewHooked && Dl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const h = t.noPreview === !0, p = h ? 0 : 56, g = h ? 0 : VP, b = document.createElement("div");
  if (Z2(), b.className = "pano-node-preview-dom", b.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), h && b.classList.add("pano-node-preview--no-preview"), b.setAttribute("data-capture-wheel", "true"), b.tabIndex = 0, b.style.cssText = [
    "width:100%",
    h ? "height:auto" : "height:100%",
    g > 0 ? `min-height:${g}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), h) {
    const F = pc(Jf(
      e.addDOMWidget(Zf(), "preview", b, t0(e, null))
    ));
    ts(e), e.__panoDomPreview = { widget: F, root: b, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const x = document.createElement("div");
  x.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const S = En({ label: "node.surface" });
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
  const k = document.createElement("div");
  k.style.cssText = [
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
  ].join(";"), k.textContent = "Connect ERP image", x.appendChild(S), x.appendChild(k), b.appendChild(x);
  const N = Iy(b), I = document.createElement("div");
  I && (I.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", I.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", b.appendChild(I)), Q2(e, 120, 120), ts(e);
  let j = null;
  try {
    zA(e, p, () => {
      var F, de;
      return (de = (F = e.__panoDomPreview) == null ? void 0 : F.requestDraw) == null ? void 0 : de.call(F);
    }), j = pc(Jf(e.addDOMWidget(
      Zf(),
      "preview",
      b,
      t0(
        e,
        () => {
          var F, de;
          return (de = (F = e.__panoDomPreview) == null ? void 0 : F.requestDraw) == null ? void 0 : de.call(F);
        },
        p,
        g,
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
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(me)));
  }, v = kb($), H = /* @__PURE__ */ ba(i ? { ...Ub(Wn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Jb(Wn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((F) => ({ value: F, label: F }))
  });
  let B = null;
  if (i && e.__panoSceneStateV2) {
    const [F, de] = [0, 1].map(() => {
      const Re = Tc(document, "node.playback");
      return Re.playsInline = !0, Re.preload = "auto", Re.crossOrigin = "anonymous", Re.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", x.appendChild(Re), Re;
    }), ce = En({ label: "node.still" });
    ce.__panoFrameIdx = 0;
    const Ie = En({ label: "node.port-still" });
    Ie.__panoFrameIdx = 0;
    const Ue = LP({
      video: F,
      stickerVideo: de,
      createImage: (Re, qe) => {
        const lt = new Image();
        return lt.onload = qe, lt.onerror = qe, lt.src = Re, lt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Re) => requestAnimationFrame(Re),
        cancelFrame: (Re) => cancelAnimationFrame(Re)
      },
      readState: () => Wn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: $,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var qe;
        if (!(F.videoWidth > 0 && F.videoHeight > 0)) return;
        const Re = Math.min(1, q2 / F.videoWidth);
        ce.width = Math.round(F.videoWidth * Re), ce.height = Math.round(F.videoHeight * Re), (qe = ce.getContext("2d")) == null || qe.drawImage(F, 0, 0, ce.width, ce.height), ce.__panoFrameIdx += 1, $();
      },
      onStickerCapture: () => {
        var Re;
        de.videoWidth > 0 && de.videoHeight > 0 && (Ie.width = de.videoWidth, Ie.height = de.videoHeight, (Re = Ie.getContext("2d")) == null || Re.drawImage(de, 0, 0), Ie.__panoFrameIdx += 1, $());
      },
      onChange: () => {
        H.playing = Ue.playing, $();
      }
    });
    B = { playback: Ue, video: F, still: ce, stickerVideo: de, stickerStill: Ie, stickerSource: "" }, e.__panoSurfacePlayback = B;
  }
  const ye = () => {
    var lt;
    const { playback: F, still: de, stickerStill: ce } = B, Ie = Yf(x, !!((lt = e.flags) != null && lt.collapsed)), Ue = F.source, Re = Ie ? TA(e) : null, qe = F.follow({
      shown: Ie,
      sources: Ie ? EA(e) : [],
      state: Wn(e),
      sticker: Re
    });
    ((Re == null ? void 0 : Re.src) || "") !== B.stickerSource && (B.stickerSource = (Re == null ? void 0 : Re.src) || "", Mf(ce)), F.source !== Ue && (Mf(de), de.__panoFrameIdx = 0), H.playable = qe, H.playing = F.playing;
  }, Ae = () => {
    var de, ce;
    const F = ((de = e.__panoOwnOutputVideoCache) == null ? void 0 : de.player) ?? null;
    F && !Yf(x, !!((ce = e.flags) != null && ce.collapsed)) && F.pause(), i && (H.playable = !!F && !F.failed(), H.playing = !!(F != null && F.playing));
  }, E = () => {
    var F;
    B == null || B.playback.pause(), (F = e.__panoOwnOutputVideoCache) == null || F.player.pause();
  };
  let te = null;
  const re = (i ? FP : KP)({
    readState: () => Wn(e),
    publishLiveState: (F) => {
      F ? (te = F, e.__panoLiveStateOverride = F) : (e.__panoLiveStateOverride === te && (e.__panoLiveStateOverride = null), te = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, $();
    },
    commitState: (F) => {
      var Ie, Ue, Re, qe;
      const de = la(e, "state_json");
      if (!de) return;
      fb(e, F.active);
      const ce = pb(e, F);
      hb(e, ce, String(de.value ?? "")) || (de.value = ce, (Ie = de.callback) == null || Ie.call(de, ce), e.__panoStateCache = null, (Ue = e.setDirtyCanvas) == null || Ue.call(e, !0, !0), (qe = (Re = e.graph) == null ? void 0 : Re.setDirtyCanvas) == null || qe.call(Re, !0, !0));
    },
    onChange: (F) => Object.assign(H, F)
  }), Me = i ? l1(e, (F = "sync", de = null) => {
    var tn;
    if (!i || !e.graph || !re || re.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ut = kn(e, "external-sticker"), Rt = Wn(e).stickers.find((er) => er.source.kind === "port");
      return re.apply({
        type: "sync-port",
        value: Wb(e, {
          pose: Ut ? hs(e, "pano_sticker_input_pose", de) : null,
          image: Rt ? As(e, Rt.id, null, { external: !0 }) : null
        })
      });
    }
    const ce = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ut) => String((Ut == null ? void 0 : Ut.name) || "") === "sticker_image") : -1, Ie = ce >= 0 ? ((tn = e.getInputLink(ce)) == null ? void 0 : tn.id) ?? null : null;
    if (Ie == null)
      return re.apply({ type: "sync-external", value: { connected: !1 } });
    if (!kn(e, "external-sticker")) return !1;
    const Ue = hs(e, "pano_sticker_input_pose", de), Re = Array.isArray(Ue) ? Ue[0] : Ue, qe = String(hs(e, "pano_sticker_input_state_hash", de) ?? ""), lt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, It = Wn(e), en = (Array.isArray(It == null ? void 0 : It.stickers) ? It.stickers : []).find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === "sticker_image_1"), Bt = As(e, "sticker_image_1", null, { external: !0 }), Mo = Re && typeof Re == "object" ? Re : en || { yaw_deg: lt.yaw, pitch_deg: lt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return re.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ie,
        stateHash: qe,
        pose: Mo,
        imageWidth: Number((Bt == null ? void 0 : Bt.naturalWidth) || (Bt == null ? void 0 : Bt.width) || 0),
        imageHeight: Number((Bt == null ? void 0 : Bt.naturalHeight) || (Bt == null ? void 0 : Bt.height) || 0)
      }
    });
  }) : () => {
  };
  let xe = 0;
  const he = async (F) => {
    if (!i || !re || !Or(F)) return !1;
    E();
    const de = `asset_${Math.random().toString(16).slice(2, 10)}`, ce = `st_${Math.random().toString(16).slice(2, 10)}`, Ie = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    xe += 1, H.importing = !0;
    const Ue = Qa(e, `add:${de}`, async () => {
      const Re = await es(F), qe = await co(F, {
        fetchApi: (lt, It) => sn.fetchApi(lt, It)
      });
      return je(), re.apply({
        type: "add-sticker",
        value: {
          stickerId: ce,
          assetId: de,
          asset: qe,
          imageWidth: Re.width,
          imageHeight: Re.height,
          yaw_deg: Number(Ie.yaw || 0),
          pitch_deg: Number(Ie.pitch || 0)
        }
      });
    });
    try {
      return await Ue;
    } catch {
      return !1;
    } finally {
      xe = Math.max(0, xe - 1), H.importing = xe > 0, $();
    }
  };
  let J = null, D = null, T = null, ae = !1;
  const _e = () => {
    var F;
    return T && (clearTimeout(T), T = null), ae ? (ae = !1, ((F = re == null ? void 0 : re.commitGesture) == null ? void 0 : F.call(re)) ?? !1) : !1;
  }, je = () => {
    var Ie, Ue, Re;
    const F = _e(), de = (J == null ? void 0 : J.pointerId) ?? (D == null ? void 0 : D.pointerId);
    if (J = null, D = null, de != null) {
      try {
        (Ie = S.hasPointerCapture) != null && Ie.call(S, de) && ((Ue = S.releasePointerCapture) == null || Ue.call(S, de));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const ce = ((Re = re == null ? void 0 : re.commitGesture) == null ? void 0 : Re.call(re)) ?? !1;
    return F || ce;
  }, tt = () => {
    var Ie, Ue, Re;
    const F = _e(), de = J == null ? void 0 : J.pointerId;
    if (J = null, de != null) {
      try {
        (Ie = S.hasPointerCapture) != null && Ie.call(S, de) && ((Ue = S.releasePointerCapture) == null || Ue.call(S, de));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const ce = ((Re = re == null ? void 0 : re.cancelGesture) == null ? void 0 : Re.call(re)) ?? !1;
    return F || ce;
  }, st = () => je();
  re && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(st));
  let Se = null, A = !1;
  if (I && re)
    try {
      op(), Se = kd(i ? g2 : l2, {
        model: H,
        onAction: (F) => {
          var Ie, Ue, Re;
          if ((F == null ? void 0 : F.type) === "toggle-playback") {
            je(), B ? B.playback.toggle() : (Ie = e.__panoOwnOutputVideoCache) == null || Ie.player.toggle(), $();
            return;
          }
          if (E(), (F == null ? void 0 : F.type) === "open-editor") {
            je(), i || (H.aspectOpen = !1), (Ue = e.__panoOpenEditor) == null || Ue.call(e);
            return;
          }
          if (i) {
            if ((F == null ? void 0 : F.type) === "add-image-file") {
              he(F.file);
              return;
            }
            re.apply(F) && $();
            return;
          }
          if ((F == null ? void 0 : F.type) === "toggle-aspect") {
            H.aspectOpen = !H.aspectOpen;
            return;
          }
          if ((F == null ? void 0 : F.type) === "close-aspect") {
            H.aspectOpen = !1;
            return;
          }
          let de = F;
          if ((F == null ? void 0 : F.type) === "add-frame") {
            const qe = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            de = {
              ...F,
              ...zP(qe, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((F == null ? void 0 : F.type) === "delete-frame") {
            const qe = So(Wn(e));
            qe && (e.__panoPreviewView = Qb(qe, {
              width: S.width,
              height: S.height
            }));
          }
          const ce = ((Re = e.__panoCutoutNodeFrame) == null ? void 0 : Re.safeRect) || null;
          H.aspectOpen = !1, re.apply({ ...de, safeRect: ce }) && $();
        }
      }), Se.mount(I), A = !0;
    } catch {
      Se = null, A = !1;
    }
  const Te = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    B && ye(), $();
  }) : null;
  Te == null || Te.observe(x);
  const me = (F) => {
    var ce, Ie;
    R.raf = 0, R.inTick = !0;
    let de = !1;
    try {
      de = We.stepInertia(F), (R.needsDraw || de) && (R.needsDraw = !1, B ? ye() : Ae(), (ce = e.flags) != null && ce.collapsed || DA(e, S, v), H.viewUnavailable = v.failed);
    } finally {
      R.inTick = !1;
    }
    (de || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(me)), J2() && (!e.__panoDebugLastTs || F - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = F, e.__panoPreviewMode, Qf(e), Ua(b), Ua(x), Ua(S), Ua(b.parentElement), Ua((Ie = b.parentElement) == null ? void 0 : Ie.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, We = Cd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (F) => {
      e.__panoPreviewView = F;
    },
    getViewportSize: () => {
      const F = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(F.width || S.clientWidth || 0)),
        h: Math.max(1, Number(F.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const F = Yg();
      return {
        x: F.invert_view_x ? -1 : 1,
        y: F.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      $();
    }
  }), le = i ? x : b, Oe = (F) => {
    const de = S.getBoundingClientRect();
    return {
      x: (Number(F.clientX) - de.left) * (S.width / Math.max(1, de.width)),
      y: (Number(F.clientY) - de.top) * (S.height / Math.max(1, de.height))
    };
  }, O = (F) => {
    var Ie, Ue;
    if (!i || !a) return;
    const de = Wn(e), ce = Gg(
      Bf(de, yc(e)),
      String(((Ie = de == null ? void 0 : de.active) == null ? void 0 : Ie.selected_sticker_id) || ""),
      Oe(F),
      nd(e, S.width, S.height)
    );
    if (!ce) {
      S.style.cursor = "grab";
      return;
    }
    if (((Ue = ce.item) == null ? void 0 : Ue.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = ce.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (F) => {
    var lt, It, en, Bt, Mo, Wt, tn, Ut, Rt, er, ni;
    if (!hr(F, le) || F.button !== 0) return;
    if (!i) {
      const vn = So(Wn(e)), xr = e.__panoCutoutNodeFrame;
      if (!vn) {
        (lt = b.focus) == null || lt.call(b, { preventScroll: !0 }), (It = S.setPointerCapture) == null || It.call(S, F.pointerId), S.style.cursor = "grabbing", We.startDrag(F.clientX, F.clientY, F.pointerId);
        return;
      }
      if (vn.locked === !0 || !xr || !re) return;
      const No = Oe(F);
      let Po;
      if (F.shiftKey) {
        const Sn = t1({
          frame: xr,
          point: No,
          startRollDeg: Number(vn.roll_deg ?? vn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Sn) return;
        Po = { kind: "roll", pointerId: F.pointerId, rollGesture: Sn };
      } else {
        const Sn = ((en = Wn(e)) == null ? void 0 : en.ui_settings) || Yg();
        Po = {
          kind: "pan",
          pointerId: F.pointerId,
          startPoint: No,
          startShot: { ...vn },
          focalPx: bo(xr, vn),
          invertX: Sn.invert_view_x === !0,
          invertY: Sn.invert_view_y === !0
        };
      }
      je(), (Bt = b.focus) == null || Bt.call(b, { preventScroll: !0 }), (Mo = S.setPointerCapture) == null || Mo.call(S, F.pointerId), S.style.cursor = "grabbing", re.beginGesture(), J = Po;
      return;
    }
    if (!a) return;
    const de = Oe(F), ce = Wn(e), Ie = String(((Wt = ce == null ? void 0 : ce.active) == null ? void 0 : Wt.selected_sticker_id) || ""), Ue = nd(e, S.width, S.height);
    (tn = b.focus) == null || tn.call(b, { preventScroll: !0 });
    const Re = () => Gg(Bf(ce, yc(e)), Ie, de, Ue);
    let qe = Re();
    if (qe && (B != null && B.playback.playing) && (E(), qe = Re()), qe && re) {
      if (We.stopMotion(), je(), String(((Ut = qe.item) == null ? void 0 : Ut.id) || "") !== Ie && re.apply({ type: "select-sticker", id: qe.item.id }), ((Rt = qe.item) == null ? void 0 : Rt.locked) === !0) {
        $();
        return;
      }
      const vn = de, xr = qe.geometry.center;
      D = {
        active: !0,
        kind: qe.hit.kind,
        pointerId: F.pointerId,
        startPoint: vn,
        startCenter: { ...xr },
        startSticker: { ...qe.item },
        startDistance: Math.max(1, Math.hypot(vn.x - xr.x, vn.y - xr.y)),
        startAngle: Math.atan2(vn.y - xr.y, vn.x - xr.x),
        projection: Ue
      }, re.beginGesture(), (er = S.setPointerCapture) == null || er.call(S, F.pointerId), S.style.cursor = qe.hit.kind === "rotate" ? "grabbing" : qe.hit.kind === "move" ? "move" : qe.hit.cursor, $();
      return;
    }
    (ni = S.setPointerCapture) == null || ni.call(S, F.pointerId), S.style.cursor = "grabbing", We.startDrag(F.clientX, F.clientY, F.pointerId);
  }), S.addEventListener("pointermove", (F) => {
    if (!i) {
      if (!J) {
        if (!We.state.drag.active) return;
        hr(F, le), We.moveDrag(F.clientX, F.clientY, "pano");
        return;
      }
      if (J.pointerId !== F.pointerId || !re) return;
      if (hr(F, le), J.kind === "pan") {
        const ce = Oe(F);
        re.updateGesture({
          type: "pan-camera",
          startShot: J.startShot,
          dx: ce.x - J.startPoint.x,
          dy: ce.y - J.startPoint.y,
          focalPx: J.focalPx,
          invertX: J.invertX,
          invertY: J.invertY
        });
        return;
      }
      const de = n1(J.rollGesture, Oe(F), F);
      if (!de) return;
      J.rollGesture = de.gesture, re.updateGesture({ type: "set-roll", value: de.rollDeg });
      return;
    }
    if (!D && !We.state.drag.active) {
      O(F);
      return;
    }
    if (D) {
      if (D.pointerId !== F.pointerId || !re) return;
      hr(F, le);
      const de = Oe(F);
      let ce = D.startSticker;
      if (D.kind === "move")
        ce = _2(
          D.startSticker,
          {
            x: D.startCenter.x + de.x - D.startPoint.x,
            y: D.startCenter.y + de.y - D.startPoint.y
          },
          D.projection
        );
      else if (D.kind === "scale") {
        const Ie = Math.hypot(de.x - D.startCenter.x, de.y - D.startCenter.y);
        ce = S2(D.startSticker, D.startDistance, Ie);
      } else if (D.kind === "rotate") {
        const Ie = Math.atan2(de.y - D.startCenter.y, de.x - D.startCenter.x);
        ce = w2(D.startSticker, D.startAngle, Ie, F.shiftKey === !0);
      }
      re.updateGesture({ type: "set-transform", value: ce }), $();
      return;
    }
    !a || !We.state.drag.active || (hr(F, le), We.moveDrag(F.clientX, F.clientY, "pano"));
  });
  const V = () => {
    var de, ce;
    if (!J && !D) {
      if (!We.state.drag.active) return;
      We.endDrag(), S.style.cursor = "grab", $();
      return;
    }
    if (!re) return;
    const F = (J == null ? void 0 : J.pointerId) ?? (D == null ? void 0 : D.pointerId);
    J = null, D = null;
    try {
      (de = S.hasPointerCapture) != null && de.call(S, F) && ((ce = S.releasePointerCapture) == null || ce.call(S, F));
    } catch {
    }
    re.cancelGesture(), S.style.cursor = "grab", $();
  }, U = (F, de = !1) => {
    var ce, Ie, Ue, Re;
    if (!i) {
      if (!J) {
        if (!We.state.drag.active) return;
        hr(F, le), (ce = S.releasePointerCapture) == null || ce.call(S, F.pointerId), S.style.cursor = "grab", We.endDrag(), $();
        return;
      }
      if (J.pointerId !== F.pointerId || !re) return;
      hr(F, le), J = null, (Ie = S.releasePointerCapture) == null || Ie.call(S, F.pointerId), S.style.cursor = "grab", de ? re.cancelGesture() : re.commitGesture(), O(F), $();
      return;
    }
    if (D) {
      if (D.pointerId !== F.pointerId || !re) return;
      hr(F, le), D = null, (Ue = S.releasePointerCapture) == null || Ue.call(S, F.pointerId), S.style.cursor = "grab", de ? re.cancelGesture() : re.commitGesture(), $();
      return;
    }
    !a || !We.state.drag.active || (hr(F, le), (Re = S.releasePointerCapture) == null || Re.call(S, F.pointerId), S.style.cursor = "grab", We.endDrag(), $());
  };
  S.addEventListener("pointerup", U), S.addEventListener("pointercancel", (F) => U(F, !0)), S.addEventListener("lostpointercapture", V), S.addEventListener("pointerleave", (F) => {
    !i && J || D || We.state.drag.active && U(F);
  });
  const be = (F) => {
    const de = document.activeElement;
    if (de !== b && !b.contains(de)) return;
    if (F.key === "Escape" && (J || D) && re) {
      V(), rd(F);
      return;
    }
    if (!i || F.key !== "Delete" && F.key !== "Backspace" || !re) return;
    const ce = F.target, Ie = String((ce == null ? void 0 : ce.tagName) || "").toUpperCase();
    Ie === "INPUT" || Ie === "TEXTAREA" || ce != null && ce.isContentEditable || H.canDelete === !0 && (E(), je(), re.apply({ type: "delete-selected" }) && $(), rd(F));
  };
  window.addEventListener("keydown", be, !0);
  const L = B2({
    requestFrame: (F) => requestAnimationFrame(F),
    cancelFrame: (F) => cancelAnimationFrame(F),
    restore: (F) => VA(F)
  }), Y = (F) => {
    var ce, Ie, Ue, Re, qe, lt;
    if (!hr(F, le)) return;
    if (!i) {
      const It = So(Wn(e));
      if (It && It.locked !== !0 && re) {
        const en = Xl(F);
        en !== 0 && (ae || (je(), re.beginGesture(), ae = !0), re.updateGesture({
          type: "step-fov",
          direction: en
        }) ? (T && clearTimeout(T), T = setTimeout(_e, 180), $()) : re.hasGestureChanges() || (re.cancelGesture(), ae = !1));
      } else if (!It) {
        const en = e0();
        We.applyWheelEvent(F) && $(), L.schedule(en);
      }
      (ce = F.preventDefault) == null || ce.call(F), (Ie = F.stopPropagation) == null || Ie.call(F), (Ue = F.stopImmediatePropagation) == null || Ue.call(F);
      return;
    }
    if (!a) return;
    const de = e0();
    We.applyWheelEvent(F) && $(), (Re = F.preventDefault) == null || Re.call(F), (qe = F.stopPropagation) == null || qe.call(F), (lt = F.stopImmediatePropagation) == null || lt.call(F), L.schedule(de);
  }, ee = i ? [x, S] : [x];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((F) => {
    ee.forEach((de) => de.addEventListener(F, Y, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((F) => {
    S.addEventListener(F, (de) => hr(de, le)), x.addEventListener(F, (de) => hr(de, le));
  });
  const Q = la(e, "state_json");
  let ne = null, q = null;
  Q && !Q.__panoPreviewPatchedCb && (ne = Q.callback, q = (F) => {
    const de = ne ? ne(F) : void 0;
    return $(), de;
  }, Q.callback = q, Q.__panoPreviewPatchedCb = q);
  const ie = la(e, "bg_color");
  let oe = null, Ne = null;
  ie && !ie.__panoPreviewPatchedCb && (oe = ie.callback, Ne = (F) => {
    const de = oe ? oe(F) : void 0;
    return $(), de;
  }, ie.callback = Ne, ie.__panoPreviewPatchedCb = Ne);
  const Ve = e.onRemoved, ze = e.onResize, Ze = e.onExecuted, ot = e.onDragOver, He = e.onDragDrop;
  let Ye = null;
  const gt = () => {
    i && (H.dropActive = !0, Ye && clearTimeout(Ye), Ye = setTimeout(() => {
      Ye = null, H.dropActive = !1;
    }, 140));
  }, M = i ? function(F) {
    return (ot ? ot.apply(this, arguments) : !1) === !0 ? !0 : sp(F == null ? void 0 : F.dataTransfer) ? (gt(), !0) : !1;
  } : null, G = i ? function(F) {
    var Ie;
    if ((He ? He.apply(this, arguments) : !1) === !0) return !0;
    const ce = Array.from(((Ie = F == null ? void 0 : F.dataTransfer) == null ? void 0 : Ie.files) || []).find((Ue) => Or(Ue));
    return ce ? (Ye && clearTimeout(Ye), Ye = null, H.dropActive = !1, he(ce), !0) : !1;
  } : null;
  i && (e.onDragOver = M, e.onDragDrop = G);
  const f = i ? W2(b, {
    onActive: (F) => {
      if (F) {
        gt();
        return;
      }
      Ye && clearTimeout(Ye), Ye = null, H.dropActive = !1;
    },
    onDrop: (F) => {
      he(F);
    }
  }) : () => {
  }, W = function(F) {
    e.__panoOutputFromRun = !0;
    const de = v1(e, F);
    yi(e, de ? "executed" : "sync", F), $();
    const ce = Ze ? Ze.apply(this, arguments) : void 0;
    return ts(e), ce;
  };
  e.onExecuted = W;
  const X = e.onConnectionsChange, ge = function(F, de) {
    const ce = Og(e, F, de, qd), Ie = Og(e, F, de, ji), Ue = arguments, Re = X ? X.apply(this, Ue) : void 0, qe = () => {
      R.destroyed || (Ie && bA(e), ce && yi(e, "connection-change"), ts(e), $());
    };
    return qe(), queueMicrotask(qe), Re;
  };
  e.onConnectionsChange = ge;
  const Fe = function() {
    const F = ze ? ze.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, $(), F;
  };
  e.onResize = Fe;
  const ke = function() {
    return nt(), td.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = ke;
  const nt = () => {
    var F, de, ce, Ie, Ue, Re, qe, lt, It;
    R.destroyed = !0, (F = Te == null ? void 0 : Te.disconnect) == null || F.call(Te), i ? je() : tt(), S.removeEventListener("lostpointercapture", V), f(), N(), window.removeEventListener("keydown", be, !0), (ce = (de = e.__panoStateFlushers) == null ? void 0 : de.delete) == null || ce.call(de, st), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ie = re == null ? void 0 : re.destroy) == null || Ie.call(re), (Ue = Se == null ? void 0 : Se.unmount) == null || Ue.call(Se), B && (B.playback.dispose(), B.video.remove(), B.stickerVideo.remove(), e.__panoSurfacePlayback === B && (e.__panoSurfacePlayback = null)), v.dispose(), e.__panoSurfaceScene = null, (qe = (Re = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Re.dispose) == null || qe.call(Re), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Me(), L.dispose(), Ye && clearTimeout(Ye), Ye = null, lp.disposeOwner(e), ca(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((lt = e.__panoCutoutNodeSurface) == null ? void 0 : lt.session) === re && (e.__panoCutoutNodeSurface = null), ((It = e.__panoStickersNodeSurface) == null ? void 0 : It.session) === re && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Fe && (e.onResize = ze), e.onExecuted === W && (e.onExecuted = Ze), e.onConnectionsChange === ge && (e.onConnectionsChange = X), q && (Q == null ? void 0 : Q.callback) === q && (Q.callback = ne), q && (Q == null ? void 0 : Q.__panoPreviewPatchedCb) === q && delete Q.__panoPreviewPatchedCb, Ne && (ie == null ? void 0 : ie.callback) === Ne && (ie.callback = oe), Ne && (ie == null ? void 0 : ie.__panoPreviewPatchedCb) === Ne && delete ie.__panoPreviewPatchedCb, e.onDragOver === M && (e.onDragOver = ot), e.onDragDrop === G && (e.onDragDrop = He), e.onRemoved === ke && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = nt, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = re && A && !i ? { session: re, model: H } : null, e.__panoStickersNodeSurface = re && A && i ? { session: re, model: H } : null, e.__panoDomPreview = {
    widget: j,
    root: b,
    canvas: S,
    requestDraw: $,
    state: R,
    emptyHintEl: k,
    nodeSurface: e.__panoCutoutNodeSurface
  }, td.register(e), e.graph && yi(e, "attach"), $();
}
function n0(e, t = {}) {
  h1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function r0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (p1(e) && !n) {
    cp(e);
    return;
  }
  h1(e).attach(t);
}
function WA(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function BA(e, t = 1, n = 1 / 0, r = null) {
  const i = Number(t), a = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), l = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(s) ? s : 0) * a, h = Math.max(0, Number.isFinite(l) ? l : 0) * a, p = Number(n), g = p > 0 ? p : 1 / 0, b = Math.max(u, h);
  let x = b > 0 ? Math.min(1, g / b) : 1;
  return r && u > 0 && h > 0 && (x = Math.min(x, r.width * a / u, r.height * a / h)), {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(h * x))
  };
}
function UA({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var x;
  const i = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let s = !1, l = null;
  const u = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, h = () => {
    const S = u();
    return S === l || (l = S, i(S)), S;
  }, p = () => h();
  return (x = t == null ? void 0 : t.addEventListener) == null || x.call(t, "fullscreenchange", p), h(), { toggle: async () => {
    var S;
    if (s || !e || !t) return !1;
    if (u()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
      } catch {
      }
      return s ? !1 : (h(), u());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), s) return !1;
        if (u())
          return h(), !0;
      } catch {
      }
    return s || (a(), h()), !1;
  }, isActive: u, destroy: () => {
    var S, k, N;
    if (!s) {
      if (s = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", p), u())
        try {
          const I = (k = t.exitFullscreen) == null ? void 0 : k.call(t);
          (N = I == null ? void 0 : I.catch) == null || N.call(I, () => {
          });
        } catch {
        }
      l = !1, i(!1);
    }
  } };
}
const YA = { class: "pano-preview-node-surface" }, XA = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (we(), Ce("div", YA, [
      rt(yn, {
        icon: e.model.fullscreen ? ht(Ke).fullscreen_close : ht(Ke).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (i) => {
          var a;
          return (a = t.onAction) == null ? void 0 : a.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (we(), _r(np, { key: 0 })) : kt("", !0)
    ]));
  }
}, hl = 140, qA = 180, i0 = 40, ef = 10;
function o0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function a0(e, t) {
  const n = o0(e), r = o0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function s0(e) {
  var a;
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
  return typeof ((a = sn) == null ? void 0 : a.apiURL) == "function" ? sn.apiURL(i) : i;
}
function ua(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ua(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return s0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ua(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : s0(e);
}
function _1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function JA(e) {
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
function id(e) {
  var i;
  const t = (i = sr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (a0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (a0(a, n)) return t[a];
  return null;
}
function ZA(e) {
  var r, i;
  const t = id(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const s of a) {
        const l = ua(s);
        if (l && /\.mp4(\?|$)/i.test(l) || l && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return l;
      }
  return "";
}
function QA(e, t = "erp_image") {
  var x, S, k, N, I, j, R;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex(($) => String(($ == null ? void 0 : $.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex(($, v) => String(($ == null ? void 0 : $.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(v))), r < 0) return "";
  const i = e.getInputLink(r);
  if (!i) return "";
  const a = Number(i.origin_id);
  if (!Number.isFinite(a)) return "";
  const s = (k = (S = (x = sr) == null ? void 0 : x.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : k.call(S, a), l = id(a), u = id(e == null ? void 0 : e.id), h = [
    (N = u == null ? void 0 : u.ui) == null ? void 0 : N.pano_input_images,
    u == null ? void 0 : u.pano_input_images,
    l == null ? void 0 : l.images,
    (I = l == null ? void 0 : l.ui) == null ? void 0 : I.pano_input_images,
    l == null ? void 0 : l.pano_input_images
  ];
  for (const $ of h)
    if (Array.isArray($))
      for (const v of $) {
        const H = ua(v);
        if (H) return H;
      }
  let p = [];
  try {
    p = typeof ((j = sr) == null ? void 0 : j.getNodeImageUrls) == "function" ? sr.getNodeImageUrls(s) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const $ of p) {
      const v = ua($);
      if (v) return v;
    }
  if (s) {
    const $ = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const v of $) {
      const H = ua(v);
      if (H) return H;
    }
  }
  const g = (R = s == null ? void 0 : s.widgets) == null ? void 0 : R.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image"), b = String((g == null ? void 0 : g.value) || "").trim();
  return b ? sn.apiURL(`/view?filename=${encodeURIComponent(b)}&type=input&subfolder=`) : "";
}
function tf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function l0(e, t, n, r, i, a, s) {
  var h, p, g;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !_1(a) || n <= 1 || r <= 1) {
    tf(t, n, r);
    return;
  }
  if (s.failed) {
    tf(t, n, r);
    return;
  }
  const l = Number(((g = (p = (h = e == null ? void 0 : e.widgets) == null ? void 0 : h.find) == null ? void 0 : p.call(h, (b) => (b == null ? void 0 : b.name) === "coverage")) == null ? void 0 : g.value) || 360) === 180 ? 180 : 360, u = s.render({
    width: n,
    height: r,
    camera: lc(i, n, r),
    background: { media: a, revision: JA(a), coverage: l },
    layers: []
  });
  u ? t.drawImage(u.canvas, u.x, u.y, u.width, u.height, 0, 0, n, r) : tf(t, n, r);
}
function c0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class eC {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = kb(() => this.requestDraw()), this.controller = Cd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Xt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: ve(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: ve(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, a, s, l;
        const r = (a = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : a.call(i);
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
    var r, i, a;
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
    const n = ((a = (i = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : i.find) == null ? void 0 : a.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...s) => {
      const l = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), l;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var a;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (a = this.flags) != null && a.collapsed || !t.errorText) return r;
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
        `min-height:${hl}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = En({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return hl;
        },
        getHeight() {
          return hl;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = pc(Jf(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const a = r ? r(i) || {} : {};
          return {
            ...a,
            minHeight: Math.max(hl, Number(a.minHeight || 0)),
            minWidth: Math.max(qA, Number(a.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, i, a, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return op(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ba({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = UA({
        root: this.root,
        documentRef: document,
        onChange: (l) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = l), this.requestDraw();
        },
        onFallback: () => {
          var l, u;
          return (u = (l = this.options).onOpen) == null ? void 0 : u.call(l, this.node);
        }
      }), this.surfaceApp = kd(XA, {
        model: this.surfaceModel,
        onAction: (l) => {
          var u, h;
          (l == null ? void 0 : l.type) === "toggle-fullscreen" && ((h = (u = this.fullscreenController) == null ? void 0 : u.toggle) == null || h.call(u));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var l, u;
          return (u = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null ? void 0 : u.call(l);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (i = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || i.call(r), this.surfaceApp = null, (s = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || s.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Iy(n), t.addEventListener("pointerdown", (a) => {
      var s, l, u;
      a.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (l = t.setPointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a));
    });
    const r = (a) => {
      var s, l;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var s;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var s;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a);
    }), n.addEventListener("keydown", (a) => {
      var s;
      WA(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !_1(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Yf(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = sr.canvas) != null && r.graph) || this.node.graph === sr.canvas.graph);
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
      const a = t.getLegacyPreviewRect();
      return c0(i.x, i.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - a.x, i.y - a.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(r);
      if (!i) return !0;
      const a = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - a.x, i.y - a.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, i) {
      var u, h, p, g, b, x;
      const a = xA(this, n, r, i), s = t.getLegacyPreviewRect();
      if (!a || !c0(a.x, a.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((u = t.view) == null ? void 0 : u.fov) || 100);
      const l = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((h = t.view) == null ? void 0 : h.fov) || 100), l && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (g = n == null ? void 0 : n.preventDefault) == null || g.call(n), (b = n == null ? void 0 : n.stopPropagation) == null || b.call(n), (x = n == null ? void 0 : n.stopImmediatePropagation) == null || x.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, i, a, s;
    const t = Math.max(80, Number(((i = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : i[0]) || 0) - ef * 2), n = Math.max(60, Number(((s = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : s[1]) || 0) - i0 - ef);
    return { x: ef, y: i0, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), l0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? xb : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = BA(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var i, a, s;
    const t = ZA(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const l = Tc(document, "preview-node.video");
      l.muted = !0, l.loop = !0, l.preload = "auto", l.playsInline = !0, l.crossOrigin = "anonymous";
      const u = () => {
        this.imgSrc === t && (this.img = l, this.requestDraw());
      }, h = () => this.requestDraw();
      l.addEventListener("loadedmetadata", u), l.addEventListener("loadeddata", u), l.addEventListener("timeupdate", h), l.addEventListener("play", h), l.addEventListener("pause", h), l.src = t, l.load(), this.mediaCleanup = () => {
        l.pause(), l.removeEventListener("loadedmetadata", u), l.removeEventListener("loadeddata", u), l.removeEventListener("timeupdate", h), l.removeEventListener("play", h), l.removeEventListener("pause", h), l.removeAttribute("src"), l.load();
      };
      return;
    }
    const n = QA(this.node, this.imageInputName);
    if (!n) {
      (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
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
    var i, a;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), l0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (i = this.node).setDirtyCanvas) == null || a.call(i, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, i, a, s, l, u, h, p, g, b, x, S, k, N, I;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || i.call(r), this.resizeObserver = null, (s = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || s.call(a), this.fullscreenController = null, (l = this.wheelCaptureCleanup) == null || l.call(this), this.wheelCaptureCleanup = null, (h = (u = this.surfaceApp) == null ? void 0 : u.unmount) == null || h.call(u), this.surfaceApp = null, (g = (p = this.surfaceHost) == null ? void 0 : p.remove) == null || g.call(p), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (b = this.mediaCleanup) == null || b.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (x = this.root) == null ? void 0 : x.remove) == null || S.call(x);
    } catch {
    }
    try {
      f1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((I = (N = (k = this.node) == null ? void 0 : k.widgets) == null ? void 0 : N.find) == null ? void 0 : I.call(N, (j) => (j == null ? void 0 : j.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function tC(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new eC(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function S1(e, t, n) {
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
  const a = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const l = a ? a.apply(this, arguments) : void 0;
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
function fp(e) {
  return !!(e != null && e.prototype);
}
function Cs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function nC(e, t = {}) {
  fp(e) || tC(e, {
    ...t,
    onOpen: Cs(e, t.onOpen)
  });
}
function rC(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!fp(e)) {
    r0(e, {
      ...r,
      onOpen: Cs(e, t.onOpen)
    });
    return;
  }
  S1(e, "stickers_node_preview", (i) => {
    r0(i, {
      ...r,
      onOpen: Cs(i, t.onOpen)
    });
  });
}
function iC(e, t = {}) {
  if (!fp(e)) {
    n0(e, {
      ...t,
      onOpen: Cs(e, t.onOpen)
    });
    return;
  }
  S1(e, "cutout_preview", (n) => {
    n0(n, {
      ...t,
      onOpen: Cs(n, t.onOpen)
    });
  });
}
const Yn = {
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
}, fi = "pen";
function u0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function oC({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let i = null;
  function a() {
    i = null;
    for (const [s, l] of Object.entries(n))
      r.delete(s) && l();
  }
  return {
    request(s) {
      r.add(s), i ?? (i = e(a));
    },
    cancel() {
      r.clear(), i !== null && t(i), i = null;
    }
  };
}
const At = Object.freeze({
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
}), aC = new Set(Object.values(At));
function sC({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r, onError: i = (a) => console.error("[PanoramaStickers] editor frame callback failed", a) }) {
  let a = 0, s = !1, l = !1, u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), p = 1, g = 0;
  function b(k) {
    try {
      k();
    } catch (N) {
      i(N);
    }
  }
  function x() {
    !a && !s && !l && (a = e(S));
  }
  function S(k) {
    a = 0, s = !0;
    try {
      const N = h;
      h = /* @__PURE__ */ new Map();
      for (const j of N.values()) b(() => j(k));
      if (l) return;
      const I = u;
      u = /* @__PURE__ */ new Set(), (I.size || r()) && b(() => n(k, I));
    } finally {
      s = !1;
    }
    (u.size || h.size || r()) && x();
  }
  return {
    requestDraw(k) {
      if (!aC.has(k)) throw new Error(`Unknown draw reason: ${k}`);
      k === At.STATE && (g += 1), u.add(k), x();
    },
    requestFrame(k) {
      const N = p++;
      return h.set(N, k), x(), N;
    },
    cancelFrame(k) {
      h.delete(k);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      x();
    },
    get stateRevision() {
      return g;
    },
    // Whether a frame is pending.
    get pending() {
      return a !== 0;
    },
    stop() {
      l = !0, a && t(a), a = 0, h.clear(), u.clear();
    }
  };
}
const lC = 250, cC = 600, uC = 180, fC = 2;
function dC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ns(e, t, n) {
  return e + (t - e) * n;
}
function pC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Ad(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, l) => s - e.position[l])) / Math.max(n, 1e-6), a = Math.min(1, r / uC + i / fC);
  return Math.round(ns(lC, cC, a));
}
function hC(e, t, n) {
  const r = dC(ve(n, 0, 1));
  return {
    position: e.position.map((i, a) => ns(i, t.position[a], r)),
    yaw_deg: Xt(e.yaw_deg + Ad(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: ns(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: ns(e.hFOV_deg, t.hFOV_deg, r),
    distance: ns(e.distance, t.distance, r)
  };
}
function mC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Ad(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function gC(e, t, n, { scale: r = 1, end: i = null } = {}) {
  return mC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: pC(e, t, r), end: i };
}
function yC(e, t) {
  const n = ve((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: hC(e.from, e.to, n), done: !1 };
}
function Ll(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function bC(e, t, n) {
  const r = Ll(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function Wo(e, t, n, r) {
  const i = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  i && Object.assign(i, r);
}
function vC(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function _C({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: a,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: l,
  isActiveLassoTool: u
}) {
  var R, $;
  const h = e.primaryTool === "paint" || e.primaryTool === "mask", p = {
    visible: h,
    activePane: h ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: h ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (v, H) => ({ index: H, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!h) return p;
  const g = ((R = t.find((v) => i(e.paintColor, v.color))) == null ? void 0 : R.id) || "", b = !g, x = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number((($ = e.customPaintColor) == null ? void 0 : $.a) ?? 1))) * 100), k = l(e.primaryTool === "paint" ? e.paintTool : e.maskTool), N = e.brushSizes[k] ?? 10, I = u(), j = Array.from({ length: 8 }, (v, H) => e.customPaintHistory[H] || null);
  return {
    ...p,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: g,
    customColorActive: b,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...s(x.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, x.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, x.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, x.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, x.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, x.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, x.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: j.map((v, H) => ({
      index: H,
      color: v ? { cssColor: r(v, 1) } : null
    })),
    sizeValue: N,
    sizeText: String(N),
    sizeFill: `${Math.max(0, Math.min(100, (N - 1) / 119 * 100))}%`,
    sizeDisabled: I,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function SC({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const wC = {
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
function xC(e) {
  const t = [];
  for (const n of e) {
    const [r, i, a] = wC[n.key] || [], s = t[t.length - 1];
    r && (s != null && s.grouped) && s.label === r ? s.fields.push({ ...n, short: i, drag: a }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: i, drag: a }] });
  }
  return t;
}
function nf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function kC({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: i }) {
  const a = !r && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: a ? Ke.eye : Ke.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function MC({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const i = !e || t;
  let a = null;
  return r && i && (n ? a = "The camera is hidden" : a = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: a };
}
function NC(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const fa = "erp", PC = ["1:1", "4:3", "3:2", "16:9"];
function w1(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...PC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: fa, label: Number(n) === 180 ? "180°" : "360°", active: e === fa }] : []
  ];
}
function AC({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: i,
  selectedItems: a,
  params: s,
  notes: l,
  uiSettings: u,
  normalizeCoverageValue: h
}) {
  return {
    coverage: { value: h(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || i === "stroke" || i === "camera" || i === "world" || a.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: xC(s),
    notes: l,
    paramsDisabled: !r,
    uiSettings: t ? null : u,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function CC({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: i,
  allLocked: a,
  anyLocked: s,
  selectedLocked: l,
  activeAspect: u,
  cutoutAspectOpen: h,
  isExternalSticker: p,
  isStickerHidden: g,
  canRestoreSelectedToInitial: b,
  iconSet: x,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: S = !1,
  cameraDeletable: k = !1,
  erpChoice: N = !1,
  coverage: I = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let j = [];
  if (n.length > 1)
    j = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: x.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: x.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? x.lock_open : x.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete, disabled: !!s }
    ];
  else if (r === "stroke")
    j = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: x.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: x.send_back, disabled: !!l },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? x.lock_open : x.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete, disabled: !!l }
    ];
  else if (r === "image") {
    if (j = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: x.bring_front, disabled: !!l },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: x.send_back, disabled: !!l }
    ], p(t) || (j.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: x.duplicate }), j.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: x.replace_image })), p(t)) {
      const R = b(), $ = g(t);
      j.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: x.back_initial,
        disabled: !R
      }), j.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: $ ? "Show" : "Hide",
        tip: $ ? "Show input image" : "Hide input image",
        icon: $ ? x.eye : x.eye_dashed
      });
    }
    j.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? x.lock_open : x.lock_closed }), p(t) || j.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete, disabled: !!l });
  } else
    j = [
      {
        key: "aspect",
        kind: "aspect",
        icon: x.aspect,
        open: !!h,
        choices: w1(u, { erp: N, coverage: I })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: x.rotate_90, disabled: u === fa }
    ], S ? k && j.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete }) : j.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? x.lock_open : x.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: x.delete, disabled: !!l }
    );
  return x1(i.corners, j);
}
const f0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function IC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: i = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], s = r ? f0.filter((l) => l.cameraTip) : f0;
  return x1([...e, ...a], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: s.map(({ key: l, label: u, tip: h, cameraTip: p }) => ({ key: l, label: u, tip: r ? p : h, pressed: l === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Ke.delete }] : []
  ]);
}
function OC(e, t, n, r, i) {
  const { minX: l, maxX: u, minY: h, maxY: p } = e || {};
  if (![l, u, h, p].every(Number.isFinite)) return null;
  const g = Math.min(Math.max((l + u) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), b = Math.max(14, i - n - 14), x = p + 18, S = h - 18 - n;
  let k;
  return x <= b ? k = Math.max(x, 14) : S >= 14 ? k = Math.min(S, b) : k = Math.min(Math.max(x, 14), b), { left: g, top: k };
}
function x1(e, t) {
  const n = e.map((h) => ({ x: Number(h == null ? void 0 : h.x), y: Number(h == null ? void 0 : h.y) })).filter((h) => Number.isFinite(h.x) && Number.isFinite(h.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((h) => h.x), i = n.map((h) => h.y), a = Math.min(...r), s = Math.max(...r), l = Math.min(...i), u = Math.max(...i);
  return {
    visible: !0,
    left: (a + s) * 0.5,
    top: u + 18,
    items: t,
    anchor: { minX: a, maxX: s, minY: l, maxY: u }
  };
}
const k1 = "painting";
function EC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const TC = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function FC(e, { span: t, selection: n, selectedId: r, expanded: i, openRows: a, audio: s = null, fpsLocked: l = !1, camera: u = !1, cameraHideable: h = !1, stickers: p = !0, scene: g = !1, sceneLocked: b = !1 }) {
  const x = (j, R, $, v, H, B, { keyable: ye = !0, hideable: Ae = !0 } = {}) => {
    const E = (te) => (n == null ? void 0 : n.owner) === j && n.lane === te ? n.frames.map((re) => re + B) : [];
    return {
      id: j,
      label: $,
      icon: v,
      clip: H,
      selected: j === r,
      hideable: Ae,
      visible: R.visible,
      keyable: ye,
      open: ye && a.has(j),
      keys: zM(R).map((te) => ({ frame: te.frame + B, full: te.full })),
      selectedFrames: E(null),
      lanes: (ye ? Sa(R) : []).map((te) => ({
        key: `${j}:${te}`,
        lane: te,
        label: TC[te],
        frames: R[te].keyframes.map((re) => re.frame + B),
        selectedFrames: E(te)
      }))
    };
  }, S = p ? e.stickers : [], k = S.filter((j) => j.placement === "sky").sort((j, R) => R.z_index - j.z_index), N = S.filter((j) => j.placement === "world"), I = ({ start: j, in: R, duration: $ }) => ({ clip: { start: j, end: $ === null ? null : j + $ }, offset: j - R });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!s,
    muted: !!(s != null && s.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: l || b,
    lengthLocked: b,
    lockTip: b ? "Set by the scene" : "Set by the video input",
    length: b ? t : e.timeline.length,
    rows: [
      ...u ? [x("camera", e.camera, "Camera", Ke.camera, null, 0, { hideable: h })] : [],
      ...[...k, ...N].map((j) => {
        const { clip: R, offset: $ } = I(j.clip);
        return x(j.id, j, Lf(j), Ke.image, R, $);
      }),
      ...p && (EC(e.painting) || !e.painting_visible) ? [{
        id: k1,
        label: "Paint",
        icon: Ke.paintbrush_vertical_tool,
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
      ...p && (g || oc(e.scene)) ? [(() => {
        const { clip: j, offset: R } = I(e.scene.clip);
        return x("scene", e.scene, "Scene", Ke.box, j, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function DC(e, t, n, r) {
  const i = KM(e, t, n);
  if (!i) return null;
  const a = Math.min(...n) + r, s = Math.max(...n) + r;
  return { label: a === s ? `Frame ${a}` : `${a} – ${s}`, ...i };
}
const LC = { class: "pano-floating-right" }, RC = {
  key: 0,
  class: "pano-floating-space"
}, VC = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, $C = ["data-settled"], zC = ["data-ready", "data-settled"], jC = ["aria-label", "data-tip"], HC = {
  key: 1,
  class: "pano-camera-preview-label"
}, GC = {
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
    return (t, n) => (we(), Ce(pt, null, [
      se("div", LC, [
        e.space ? vi((we(), Ce("div", RC, [
          se("div", VC, [
            (we(!0), Ce(pt, null, Lt(e.space.modes, (r) => (we(), _r(yn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          rt(yn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [wo, e.space.visible]
        ]) : kt("", !0),
        (we(!0), Ce(pt, null, Lt(e.buttons, (r) => (we(), _r(yn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      vi(se("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        se("div", {
          class: xt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: zt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = se("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            se("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (we(), Ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            rt(Jt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, jC)) : kt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (we(), Ce("div", HC, bt(e.preview.label || "Preview unavailable"), 1)) : kt("", !0)
        ], 14, zC)
      ], 8, $C), [
        [wo, e.preview.visible]
      ])
    ], 64));
  }
}, KC = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, WC = ["y2", "transform"], BC = ["transform"], UC = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (i, a) => a * 15), r = wt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, a) => vi((we(), Ce("div", {
      class: xt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (we(), Ce("svg", KC, [
        a[1] || (a[1] = se("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (we(!0), Ce(pt, null, Lt(ht(n), (s) => (we(), Ce("line", {
          key: s,
          class: xt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, WC))), 128)),
        se("g", { transform: r.value }, [...a[0] || (a[0] = [
          se("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, BC),
        a[2] || (a[2] = se("circle", {
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
}, YC = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (we(), Ce("div", {
      class: xt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      rt(i1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      rt(yn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      rt(UC, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, XC = ["aria-label"], qC = { class: "pano-canvas-confirm-title" }, JC = { class: "pano-canvas-confirm-text" }, ZC = { class: "pano-canvas-confirm-actions" }, QC = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, eI = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ ln(null), r = /* @__PURE__ */ ln(null);
    let i = null;
    function a() {
      const g = r.value;
      return g ? Array.from(g.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((b) => b instanceof HTMLElement ? !b.hidden && b.tabIndex >= 0 && b.offsetParent !== null : !1) : [];
    }
    function s(g) {
      const b = r.value;
      if (!b) return;
      const x = b.querySelector(`[data-action='${g}']`);
      x instanceof HTMLButtonElement && x.click();
    }
    function l() {
      var k;
      const g = r.value;
      if (!g) return;
      const b = g.querySelector("[data-action='confirm-accept']");
      if (b instanceof HTMLElement) {
        b.focus();
        return;
      }
      const S = a()[0] || g;
      (k = S == null ? void 0 : S.focus) == null || k.call(S);
    }
    function u() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function h(g) {
      var I;
      if (g.defaultPrevented) return;
      if (g.key === "Escape") {
        g.preventDefault(), g.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (g.key !== "Tab") return;
      const b = a(), x = r.value;
      if (!b.length) {
        g.preventDefault(), (I = x == null ? void 0 : x.focus) == null || I.call(x);
        return;
      }
      const S = b[0], k = b[b.length - 1], N = document.activeElement;
      if (g.shiftKey) {
        (N === S || N === x || !(x != null && x.contains(N))) && (g.preventDefault(), k.focus());
        return;
      }
      (N === k || !(x != null && x.contains(N))) && (g.preventDefault(), S.focus());
    }
    function p(g) {
      g.target === n.value && s("confirm-cancel");
    }
    return go(() => t.model.visible, (g, b) => {
      if (g) {
        i = document.activeElement, Pc(() => {
          l();
        });
        return;
      }
      b && u();
    }, { immediate: !0 }), Ts(() => {
      u();
    }), (g, b) => e.model.visible === !0 ? (we(), Ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Kt(p, ["self"])
    }, [
      se("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: h
      }, [
        se("div", qC, bt(e.model.title), 1),
        se("div", JC, bt(e.model.text), 1),
        se("div", ZC, [
          b[0] || (b[0] = se("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          se("button", QC, bt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, XC)
    ], 512)) : kt("", !0);
  }
}, tI = ["data-paint-pane"], nI = ["hidden"], rI = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], iI = ["aria-pressed", "disabled"], oI = ["hidden"], aI = { class: "pano-paint-color-pop-head" }, sI = { class: "pano-paint-color-field" }, lI = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, cI = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, uI = { class: "pano-paint-color-field" }, fI = { class: "pano-paint-alpha-wrap" }, dI = ["value"], pI = { "data-paint-alpha-value": "" }, hI = ["hidden"], mI = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, gI = ["data-paint-history-index", "aria-label", "disabled"], yI = ["data-paint-footer"], bI = ["data-paint-group"], vI = ["hidden"], _I = ["value", "disabled"], SI = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, wI = ["hidden"], xI = {
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
    return (r, i) => (we(), Ce("div", {
      class: xt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (we(!0), Ce(pt, null, Lt(e.panes, (a) => {
        var s;
        return we(), Ce("div", {
          key: a.key,
          class: xt(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (we(), Ce("div", {
            key: 0,
            class: xt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (we(!0), Ce(pt, null, Lt(e.paintSwatches, (l) => (we(), Ce("button", {
              key: l.id,
              class: xt(["pano-paint-color-dot", { active: e.state.activeSwatchId === l.id }]),
              type: "button",
              "data-paint-color-swatch": l.id,
              "aria-label": l.label,
              style: zt(t(l)),
              "aria-pressed": e.state.activeSwatchId === l.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, rI))), 128)),
            se("button", {
              class: xt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: zt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, iI),
            se("div", {
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
              se("div", aI, [
                se("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: zt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = se("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              se("div", sI, [
                se("div", lI, [
                  se("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: zt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                se("div", cI, [
                  se("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: zt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              se("label", uI, [
                i[1] || (i[1] = se("span", null, "Opacity", -1)),
                se("div", fI, [
                  se("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, dI),
                  se("span", pI, bt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              se("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                se("div", mI, [
                  (we(!0), Ce(pt, null, Lt(e.state.historyEntries || [], (l) => (we(), Ce("button", {
                    key: l.index,
                    class: xt(["pano-paint-color-history-dot", { empty: !l.color }]),
                    type: "button",
                    "data-paint-history-index": l.index,
                    "aria-label": `Recent color ${l.index + 1}`,
                    disabled: !l.color,
                    style: zt(n(l.color))
                  }, null, 14, gI))), 128))
                ])
              ], 8, hI)
            ], 12, oI)
          ], 10, nI)) : kt("", !0),
          se("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            se("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (we(!0), Ce(pt, null, Lt(a.tools, (l) => {
                var u;
                return we(), _r(yn, {
                  key: `${a.key}-${l.key}`,
                  icon: l.icon,
                  label: l.label,
                  tip: l.tip,
                  "extra-class": { active: ((u = e.state.activeTools) == null ? void 0 : u[a.key]) === l.key },
                  attrs: { [l.attr]: l.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, bI),
            se("div", {
              class: xt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              se("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: zt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, _I),
              se("span", SI, bt(e.state.sizeText || "10"), 1)
            ], 10, vI),
            se("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[a.key]) ?? !a.clearHidden)
            }, [
              rt(yn, {
                icon: ht(Ke).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, wI)
          ], 8, yI)
        ], 10, tI);
      }), 128))
    ], 2));
  }
}, kI = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ ln(null), r = /* @__PURE__ */ ln(null), i = /* @__PURE__ */ ln(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: a }), (s, l) => (we(), Ce(pt, null, [
      se("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      se("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        se("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, MI = ["aria-label"], NI = ["data-tip", "aria-pressed"], PI = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = wt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, i) => (we(), Ce("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: zt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (we(!0), Ce(pt, null, Lt(e.buttons, (a) => (we(), Ce("button", pi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), bt(a.label), 17, NI))), 128))
    ], 12, MI));
  }
}, AI = {
  key: 0,
  class: "pano-cutout-menu"
}, CI = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, II = ["data-aspect"], OI = ["data-action", "aria-label", "data-tip", "disabled"], EI = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (we(), Ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: zt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (we(!0), Ce(pt, null, Lt(e.model.items || [], (r) => (we(), Ce(pt, {
        key: r.key
      }, [
        r.kind === "aspect" ? (we(), Ce("div", AI, [
          se("button", CI, [
            rt(Jt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          se("div", {
            class: xt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (we(!0), Ce(pt, null, Lt(r.choices || [], (i) => (we(), Ce("button", {
              key: i.value,
              class: xt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, bt(i.label), 11, II))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (we(), _r(PI, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (we(), Ce("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          rt(Jt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, OI))
      ], 64))), 128))
    ], 4));
  }
}, TI = {
  key: 0,
  class: "pano-easing"
}, FI = { class: "pano-section-title" }, DI = { class: "pano-easing-range" }, LI = { class: "pano-easing-modes" }, RI = ["aria-pressed", "onClick"], VI = ["viewBox"], $I = ["x", "y"], zI = ["x1", "y1", "x2", "y2"], jI = ["d"], HI = ["x1", "y1", "x2", "y2"], GI = ["x1", "y1", "x2", "y2"], KI = ["cx", "cy"], WI = ["cx", "cy"], BI = { class: "pano-easing-note" }, ci = 132, oo = 14, UI = {
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
    ], a = /* @__PURE__ */ ln(null), s = wt(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), l = (S) => oo + S * ci, u = (S) => oo + (1 - S) * ci, h = wt(() => {
      var j;
      if (((j = n.model) == null ? void 0 : j.easing) === "hold") return `M${l(0)} ${u(0)} H${l(1)} V${u(1)}`;
      const [S, k, N, I] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${l(0)} ${u(0)} C${l(S)} ${u(k)} ${l(N)} ${u(I)} ${l(1)} ${u(1)}`;
    }), p = wt(() => s.value ? s.value.map((S) => S.toFixed(2)).join(", ") : "");
    function g(S) {
      var k;
      return JSON.stringify(S.easing) === JSON.stringify((k = n.model) == null ? void 0 : k.easing);
    }
    function b(S, k) {
      r("timeline", { type: "easing", easing: S, commit: k });
    }
    function x(S, k) {
      var $;
      if (S.button !== 0 || !s.value) return;
      const N = S.currentTarget;
      ($ = N.setPointerCapture) == null || $.call(N, S.pointerId);
      let I = null;
      const j = (v) => {
        const H = a.value.getBoundingClientRect(), B = H.width / (ci + oo * 2), ye = ((v.clientX - H.left) / B - oo) / ci, Ae = 1 - ((v.clientY - H.top) / B - oo) / ci;
        I = [...I || s.value], I[k] = Math.round(Math.min(1, Math.max(0, ye)) * 100) / 100, I[k + 1] = Math.round(Math.min(1, Math.max(0, Ae)) * 100) / 100, b(I, !1);
      }, R = () => {
        N.removeEventListener("pointermove", j), N.removeEventListener("pointerup", R), N.removeEventListener("pointercancel", R), I && b(I, !0);
      };
      N.addEventListener("pointermove", j), N.addEventListener("pointerup", R), N.addEventListener("pointercancel", R);
    }
    return (S, k) => e.model ? (we(), Ce("div", TI, [
      se("div", FI, [
        k[2] || (k[2] = se("span", null, "Easing", -1)),
        se("span", DI, bt(e.model.label), 1)
      ]),
      se("div", LI, [
        (we(), Ce(pt, null, Lt(i, (N) => se("button", {
          key: N.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": g(N) ? "true" : "false",
          onClick: (I) => b(N.easing, !0)
        }, bt(N.label), 9, RI)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (we(), Ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${ci + oo * 2} ${ci + oo * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        se("rect", {
          class: "pano-easing-square",
          x: l(0),
          y: u(1),
          width: ci,
          height: ci
        }, null, 8, $I),
        se("line", {
          class: "pano-easing-diagonal",
          x1: l(0),
          y1: u(0),
          x2: l(1),
          y2: u(1)
        }, null, 8, zI),
        se("path", {
          class: "pano-easing-curve",
          d: h.value
        }, null, 8, jI),
        s.value ? (we(), Ce(pt, { key: 0 }, [
          se("line", {
            class: "pano-easing-arm",
            x1: l(0),
            y1: u(0),
            x2: l(s.value[0]),
            y2: u(s.value[1])
          }, null, 8, HI),
          se("line", {
            class: "pano-easing-arm",
            x1: l(1),
            y1: u(1),
            x2: l(s.value[2]),
            y2: u(s.value[3])
          }, null, 8, GI),
          se("circle", {
            class: "pano-easing-handle",
            cx: l(s.value[0]),
            cy: u(s.value[1]),
            r: "6",
            onPointerdown: k[0] || (k[0] = (N) => x(N, 0))
          }, null, 40, KI),
          se("circle", {
            class: "pano-easing-handle",
            cx: l(s.value[2]),
            cy: u(s.value[3]),
            r: "6",
            onPointerdown: k[1] || (k[1] = (N) => x(N, 2))
          }, null, 40, WI)
        ], 64)) : kt("", !0)
      ], 8, VI)) : kt("", !0),
      se("div", BI, [
        e.model.mixed ? (we(), Ce(pt, { key: 0 }, [
          qa("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (we(), Ce(pt, { key: 1 }, [
          qa("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (we(), Ce(pt, { key: 2 }, [
          qa("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (we(), Ce(pt, { key: 3 }, [
          qa("cubic-bezier(" + bt(p.value) + ")", 1)
        ], 64)) : kt("", !0)
      ])
    ])) : kt("", !0);
  }
}, YI = {
  class: "pano-side",
  "data-side": ""
}, XI = { class: "pano-side-head" }, qI = { class: "pano-side-title" }, JI = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, ZI = {
  key: 0,
  class: "pano-side-scroll"
}, QI = { class: "pano-inspector" }, eO = { class: "pano-ui-row pano-coverage-row" }, tO = ["data-selected"], nO = ["aria-pressed", "disabled"], rO = ["aria-pressed", "disabled"], iO = {
  key: 0,
  class: "pano-section-title"
}, oO = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, aO = {
  class: "pano-picker",
  "data-picker": "selection"
}, sO = ["disabled"], lO = { class: "pano-picker-label" }, cO = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, uO = ["hidden"], fO = ["data-selection-id"], dO = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, pO = {
  key: 2,
  class: "pano-state-actions"
}, hO = ["disabled"], mO = ["data-key"], gO = { class: "pano-field-group-values" }, yO = ["title", "onPointerdown"], bO = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], vO = ["data-key"], _O = ["min", "max", "step", "value", "disabled", "data-param-key"], SO = ["min", "max", "step", "value", "disabled", "data-param-key"], wO = ["open"], xO = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, kO = { class: "pano-ui-settings-body" }, MO = { class: "pano-ui-row" }, NO = ["data-selected"], PO = ["aria-pressed"], AO = ["aria-pressed"], CO = { class: "pano-ui-row" }, IO = ["data-selected"], OO = ["aria-pressed"], EO = ["aria-pressed"], TO = {
  key: 1,
  class: "pano-side-footer"
}, FO = ["data-action"], DO = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = wt(() => {
      const h = n.model;
      return !h || typeof h != "object" ? !1 : Object.keys(h).length > 0 && !!h.coverage;
    });
    function a(h) {
      return { "--v": `${Number((h == null ? void 0 : h.fillPct) || 0)}%` };
    }
    function s(h, p) {
      return (p == null ? void 0 : p.paramsDisabled) === !0 || (h == null ? void 0 : h.enabled) === !1;
    }
    const l = {};
    function u(h, p) {
      const g = l[p.key];
      if (h.button !== 0 || !g || s(p, n.model)) return;
      h.preventDefault();
      const b = h.currentTarget, x = h.clientX, S = Number(g.value) || 0;
      let k = !1;
      b.setPointerCapture(h.pointerId);
      const N = (j) => {
        if (!k && Math.abs(j.clientX - x) < 3) return;
        k = !0;
        const R = S + (j.clientX - x) * p.drag * (j.shiftKey ? 0.1 : 1);
        g.value = String(Number(R.toFixed(3))), g.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, I = () => {
        b.removeEventListener("pointermove", N), b.removeEventListener("pointerup", I), b.removeEventListener("pointercancel", I), b.removeEventListener("lostpointercapture", I), k ? g.dispatchEvent(new Event("change", { bubbles: !0 })) : g.focus();
      };
      b.addEventListener("pointermove", N), b.addEventListener("pointerup", I), b.addEventListener("pointercancel", I), b.addEventListener("lostpointercapture", I);
    }
    return (h, p) => {
      var g, b, x, S, k;
      return we(), Ce("div", YI, [
        se("div", XI, [
          se("div", qI, [
            se("span", JI, [
              rt(Jt, {
                icon: ht(Ke).globe
              }, null, 8, ["icon"])
            ]),
            se("span", null, bt(e.nodeTitle), 1)
          ]),
          p[1] || (p[1] = se("div", { class: "pano-side-actions" }, null, -1))
        ]),
        p[10] || (p[10] = se("div", { class: "pano-divider" }, null, -1)),
        i.value ? (we(), Ce("div", ZI, [
          se("div", QI, [
            p[9] || (p[9] = se("div", { class: "pano-section-title" }, [
              se("span", null, "Scene")
            ], -1)),
            se("div", eO, [
              p[2] || (p[2] = se("label", null, "Coverage", -1)),
              se("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((g = e.model.coverage) == null ? void 0 : g.value) === 180 ? "1" : "0"
              }, [
                se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((b = e.model.coverage) == null ? void 0 : b.value) === 360 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "360", 8, nO),
                se("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((k = e.model.coverage) == null ? void 0 : k.disabled) === !0
                }, "180", 8, rO)
              ], 8, tO)
            ]),
            e.model.transformTitle !== !1 ? (we(), Ce("div", iO, [...p[3] || (p[3] = [
              se("span", null, "Transform", -1)
            ])])) : kt("", !0),
            e.model.selectionPicker ? (we(), Ce("div", oO, [
              se("label", null, bt(e.model.selectionPicker.label), 1),
              se("div", aO, [
                se("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  se("span", lO, [
                    e.model.selectionPicker.currentIcon ? (we(), Ce("span", cO, [
                      rt(Jt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : kt("", !0),
                    se("span", null, bt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  p[4] || (p[4] = se("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, sO),
                se("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (we(!0), Ce(pt, null, Lt(e.model.selectionPicker.items || [], (N) => (we(), Ce("button", {
                    key: N.id,
                    type: "button",
                    class: xt(["pano-picker-item", { active: N.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": N.id
                  }, [
                    N.icon ? (we(), Ce("span", dO, [
                      rt(Jt, {
                        icon: N.icon
                      }, null, 8, ["icon"])
                    ])) : kt("", !0),
                    se("span", null, bt(N.label), 1)
                  ], 10, fO))), 128))
                ], 8, uO)
              ])
            ])) : kt("", !0),
            e.model.copyStateButton ? (we(), Ce("div", pO, [
              se("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                rt(Jt, {
                  icon: ht(Ke).copy
                }, null, 8, ["icon"]),
                se("span", null, bt(e.model.copyStateButton.label), 1)
              ], 8, hO)
            ])) : kt("", !0),
            se("div", {
              class: xt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (we(!0), Ce(pt, { key: 0 }, Lt(e.model.notes, (N) => (we(), Ce("div", {
                key: N,
                class: "pano-param-note"
              }, bt(N), 1))), 128)) : (we(!0), Ce(pt, { key: 1 }, Lt(e.model.rows || [], (N) => (we(), Ce(pt, {
                key: N.key
              }, [
                N.grouped ? (we(), Ce("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": N.key
                }, [
                  se("label", null, bt(N.label), 1),
                  se("div", gO, [
                    (we(!0), Ce(pt, null, Lt(N.fields, (I) => (we(), Ce("div", {
                      key: I.key,
                      class: "pano-axis-field"
                    }, [
                      se("span", {
                        class: xt(["pano-axis", { disabled: s(I, e.model) }]),
                        title: I.label,
                        onPointerdown: (j) => u(j, I)
                      }, bt(I.short), 43, yO),
                      se("input", {
                        ref_for: !0,
                        ref: (j) => {
                          l[I.key] = j;
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
                      }, null, 8, bO)
                    ]))), 128))
                  ])
                ], 8, mO)) : (we(), Ce("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": N.key
                }, [
                  se("label", null, bt(N.label), 1),
                  se("input", {
                    type: "range",
                    min: N.fields[0].min,
                    max: N.fields[0].max,
                    step: N.fields[0].step,
                    value: N.fields[0].value,
                    disabled: s(N.fields[0], e.model),
                    style: zt(a(N.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": N.fields[0].key
                  }, null, 12, _O),
                  se("input", {
                    type: "number",
                    min: N.fields[0].min,
                    max: N.fields[0].max,
                    step: N.fields[0].step,
                    value: N.fields[0].displayValue,
                    disabled: s(N.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": N.fields[0].key
                  }, null, 8, SO)
                ], 8, vO))
              ], 64))), 128))
            ], 2),
            rt(UI, {
              model: e.easing,
              onTimeline: p[0] || (p[0] = (N) => r("timeline", N))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (we(), Ce("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              se("summary", null, [
                p[5] || (p[5] = se("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                se("span", xO, [
                  rt(Jt, {
                    icon: ht(Ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              se("div", kO, [
                se("div", MO, [
                  p[6] || (p[6] = se("label", null, "Drag X", -1)),
                  se("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, PO),
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, AO)
                  ], 8, NO)
                ]),
                se("div", CO, [
                  p[7] || (p[7] = se("label", null, "Drag Y", -1)),
                  se("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, OO),
                    se("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, EO)
                  ], 8, IO)
                ]),
                p[8] || (p[8] = se("div", { class: "pano-ui-row" }, [
                  se("span"),
                  se("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, wO)) : kt("", !0)
          ])
        ])) : kt("", !0),
        (e.model.footerButtons || []).length ? (we(), Ce("div", TO, [
          (we(!0), Ce(pt, null, Lt(e.model.footerButtons, (N) => (we(), Ce("button", {
            key: N.action,
            class: xt(["pano-btn", { "pano-btn-primary": N.primary === !0 }]),
            type: "button",
            "data-action": N.action
          }, bt(N.label), 11, FO))), 128))
        ])) : kt("", !0)
      ]);
    };
  }
}, LO = { class: "pano-timeline-bar" }, RO = ["aria-label", "data-tip"], VO = ["aria-label", "data-tip"], $O = { class: "pano-timeline-time" }, zO = ["data-tip"], jO = { key: 0 }, HO = ["min", "max", "value"], GO = ["data-tip"], KO = { key: 0 }, WO = ["max", "value"], BO = ["aria-expanded"], UO = ["inert"], YO = { class: "pano-timeline-name" }, XO = ["aria-pressed", "aria-label", "data-tip", "onClick"], qO = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, JO = ["disabled", "aria-expanded", "aria-label", "onClick"], ZO = ["title", "aria-current", "onClick"], QO = ["data-keyed", "aria-label", "onClick"], eE = ["onPointerdown"], tE = ["onPointerdown"], nE = ["onPointerdown"], rE = ["onPointerdown"], iE = ["aria-label", "data-tip", "onPointerdown"], oE = { key: 0 }, aE = ["onPointerdown"], sE = ["aria-label", "data-tip", "onPointerdown"], lE = { key: 0 }, cE = 10, uE = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ zl(0), playing: /* @__PURE__ */ zl(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = /* @__PURE__ */ ln(null), a = /* @__PURE__ */ ln(null), s = /* @__PURE__ */ ln(1), l = /* @__PURE__ */ ln(0), u = /* @__PURE__ */ ln(!1);
    let h = null, p = null, g = null;
    Cc(() => {
      h = new ResizeObserver(([he]) => {
        s.value = Math.max(1, he.contentRect.width);
      }), i.value && h.observe(i.value), p = new ResizeObserver(([he]) => {
        l.value = he.contentRect.height;
      }), a.value && p.observe(a.value);
    }), Ts(() => {
      h == null || h.disconnect(), p == null || p.disconnect(), g == null || g();
    });
    const b = wt(() => Math.max(1, Number(n.model.span || 1))), x = wt(() => n.playhead.frame.value), S = wt(() => n.playhead.playing.value), k = wt(() => jM(x.value, Number(n.model.fps || 1))), N = wt(() => s.value / b.value), I = (he) => `${he / b.value * 100}%`, j = wt(() => tN(b.value, N.value));
    function R(he) {
      const J = i.value.getBoundingClientRect(), D = Math.floor((he - J.left) / Math.max(1, J.width) * b.value);
      return Math.min(b.value - 1, Math.max(0, D));
    }
    function $(he, J, D) {
      const T = Math.ceil(cE / Math.max(1e-6, N.value)), ae = new Map(J.map((_e) => [_e.frame, _e.full]));
      return nN(J.map((_e) => _e.frame), T).map((_e, je) => ({
        ..._e,
        key: `${he}:${je}`,
        partial: _e.frames.some((tt) => !ae.get(tt)),
        selected: _e.frames.some((tt) => D.includes(tt))
      }));
    }
    const v = wt(() => {
      const he = /* @__PURE__ */ new Map();
      for (const J of n.model.rows || []) {
        he.set(J.id, $(J.id, J.keys, J.selectedFrames));
        for (const D of J.lanes) he.set(D.key, $(D.key, D.frames.map((T) => ({ frame: T, full: !0 })), D.selectedFrames));
      }
      return he;
    });
    function H(he) {
      const J = he.end === null ? b.value : he.end;
      return { left: I(he.start), width: I(Math.max(0, J - he.start)) };
    }
    function B(he, J) {
      const D = he.clientX, T = Math.max(1e-6, N.value);
      let ae = 0;
      J("start", 0, he);
      const _e = (tt) => {
        if (tt.pointerId !== he.pointerId) return;
        const st = Math.round((tt.clientX - D) / T);
        st !== ae && (ae = st, J("move", ae, tt));
      }, je = (tt) => {
        tt.pointerId === he.pointerId && (g(), J("end", ae, tt));
      };
      g == null || g(), g = () => {
        window.removeEventListener("pointermove", _e), window.removeEventListener("pointerup", je), window.removeEventListener("pointercancel", je), g = null;
      }, window.addEventListener("pointermove", _e), window.addEventListener("pointerup", je), window.addEventListener("pointercancel", je);
    }
    function ye(he) {
      he.button === 0 && B(he, (J, D, T) => r("action", { type: "seek", frame: R(T.clientX), phase: J }));
    }
    function Ae(he, J, D) {
      he.button === 0 && (r("action", { type: "select-row", id: J.id }), B(he, (T, ae) => r("action", { type: "clip", id: J.id, mode: D, delta: ae, phase: T })));
    }
    function E(he, J, D, T, ae) {
      if (he.button === 0) {
        if (he.shiftKey) {
          r("action", { type: "select-keys", owner: J.id, lane: D, frames: T.frames, additive: !0 });
          return;
        }
        T.frames.every((_e) => ae.includes(_e)) || r("action", { type: "select-keys", owner: J.id, lane: D, frames: T.frames, additive: !1 }), B(he, (_e, je) => r("action", { type: "move-keys", delta: je, phase: _e }));
      }
    }
    const te = wt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function re(he, J, D) {
      r("action", J), await Pc(), he.target.value = D();
    }
    function fe(he) {
      re(he, { type: "fps", fps: Number(he.target.value) }, () => te.value);
    }
    function Me(he) {
      const J = he.target.value.trim();
      re(he, { type: "length", length: J ? Number(J) : null }, () => n.model.length ?? "");
    }
    function xe(he, J, D) {
      he.button !== 0 || he.target !== he.currentTarget || r("action", { type: "select-keys", owner: J.id, lane: D, frames: [], additive: !1 });
    }
    return (he, J) => vi((we(), Ce("section", {
      class: xt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      se("div", LO, [
        se("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": S.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": S.value ? "Pause (Space)" : "Play (Space)",
          onClick: J[0] || (J[0] = (D) => r("action", { type: "play" }))
        }, [
          rt(Jt, {
            icon: S.value ? ht(Ke).pause : ht(Ke).play
          }, null, 8, ["icon"])
        ], 8, RO),
        e.model.hasAudio ? (we(), Ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: J[1] || (J[1] = (D) => r("action", { type: "mute" }))
        }, [
          rt(Jt, {
            icon: e.model.muted ? ht(Ke).volume_muted : ht(Ke).volume2
          }, null, 8, ["icon"])
        ], 8, VO)) : kt("", !0),
        se("span", $O, bt(k.value), 1),
        se("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (we(), Ce("span", jO, bt(te.value), 1)) : (we(), Ce("input", {
            key: 1,
            type: "number",
            min: ht(Wy),
            max: ht(Ld),
            step: "any",
            value: te.value,
            "aria-label": "Timeline fps",
            onChange: fe
          }, null, 40, HO)),
          J[6] || (J[6] = se("span", null, "fps", -1))
        ], 8, zO),
        se("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          J[7] || (J[7] = se("span", null, "Length", -1)),
          e.model.lengthLocked ? (we(), Ce("span", KO, bt(e.model.length), 1)) : (we(), Ce("input", {
            key: 1,
            type: "number",
            min: "1",
            max: ht(Rd),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Me
          }, null, 40, WO))
        ], 8, GO),
        se("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: J[2] || (J[2] = (D) => r("action", { type: "toggle-expanded" }))
        }, [
          J[8] || (J[8] = se("span", null, "Timeline", -1)),
          rt(Jt, {
            icon: ht(Ke).chevron
          }, null, 8, ["icon"])
        ], 8, BO)
      ]),
      se("div", {
        class: xt(["pano-timeline-body", { open: e.model.expanded, sliding: u.value }]),
        style: zt({ "--pano-timeline-rows": `${l.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: J[3] || (J[3] = Kt((D) => u.value = !0, ["self"])),
        onTransitionend: J[4] || (J[4] = Kt((D) => u.value = !1, ["self"])),
        onTransitioncancel: J[5] || (J[5] = Kt((D) => u.value = !1, ["self"]))
      }, [
        se("div", {
          ref_key: "gridRef",
          ref: a,
          class: "pano-timeline-grid"
        }, [
          J[9] || (J[9] = se("div", { class: "pano-timeline-corner" }, null, -1)),
          se("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ye
          }, [
            (we(!0), Ce(pt, null, Lt(j.value, (D) => (we(), Ce("span", {
              key: D,
              class: "pano-timeline-tick",
              style: zt({ left: I(D) })
            }, bt(D), 5))), 128)),
            se("span", {
              class: "pano-timeline-playhead",
              style: zt({ left: I(x.value + 0.5) })
            }, null, 4)
          ], 544),
          (we(!0), Ce(pt, null, Lt(e.model.rows || [], (D) => (we(), Ce(pt, {
            key: D.id
          }, [
            se("div", {
              class: xt(["pano-timeline-head", { selected: D.selected, "is-hidden": !D.visible }])
            }, [
              se("div", YO, [
                D.hideable ? (we(), Ce("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": D.visible ? "true" : "false",
                  "aria-label": `${D.label} visible`,
                  "data-tip": D.visible ? "Hide" : "Show",
                  onClick: Kt((T) => r("action", { type: "toggle-visible", id: D.id }), ["stop"])
                }, [
                  rt(Jt, {
                    icon: D.visible ? ht(Ke).eye : ht(Ke).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, XO)) : (we(), Ce("span", qO)),
                se("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !D.keyable,
                  "aria-expanded": D.open ? "true" : "false",
                  "aria-label": D.open ? `Hide ${D.label} parameters` : `Show ${D.label} parameters`,
                  onClick: Kt((T) => r("action", { type: "toggle-row", id: D.id }), ["stop"])
                }, [
                  rt(Jt, {
                    icon: ht(Ke).chevron
                  }, null, 8, ["icon"])
                ], 8, JO),
                se("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: D.label,
                  "aria-current": D.selected ? "true" : void 0,
                  onClick: (T) => r("action", { type: "select-row", id: D.id })
                }, [
                  rt(Jt, {
                    icon: D.icon
                  }, null, 8, ["icon"]),
                  se("span", null, bt(D.label), 1)
                ], 8, ZO),
                D.keyable ? (we(), Ce("button", {
                  key: 2,
                  class: xt(["pano-timeline-key", { keyed: ht(Ku)(D.keys, x.value) }]),
                  type: "button",
                  "data-keyed": ht(Ku)(D.keys, x.value) ? "true" : "false",
                  "aria-label": ht(Ku)(D.keys, x.value) ? `Every ${D.label} parameter has a keyframe here; update them` : `Add keyframes for every ${D.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Kt((T) => r("action", { type: "key-row", owner: D.id }), ["stop"])
                }, [
                  rt(Jt, {
                    icon: ht(Ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, QO)) : kt("", !0)
              ]),
              D.open ? (we(!0), Ce(pt, { key: 0 }, Lt(D.lanes, (T) => (we(), Ce("div", {
                key: T.key,
                class: "pano-timeline-lane-head"
              }, bt(T.label), 1))), 128)) : kt("", !0)
            ], 2),
            se("div", {
              class: xt(["pano-timeline-track", { selected: D.selected }])
            }, [
              se("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (T) => xe(T, D, null)
              }, [
                D.clip ? (we(), Ce("div", {
                  key: 0,
                  class: xt(["pano-timeline-clip", { open: D.clip.end === null }]),
                  style: zt(H(D.clip)),
                  onPointerdown: Kt((T) => Ae(T, D, "move"), ["stop"])
                }, [
                  se("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Kt((T) => Ae(T, D, "start"), ["stop"])
                  }, null, 40, nE),
                  se("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Kt((T) => Ae(T, D, "end"), ["stop"])
                  }, null, 40, rE)
                ], 46, tE)) : kt("", !0),
                (we(!0), Ce(pt, null, Lt(v.value.get(D.id), (T) => (we(), Ce("button", {
                  key: T.key,
                  type: "button",
                  class: xt(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1, partial: T.partial }]),
                  style: zt({ left: I(T.frame + 0.5) }),
                  "aria-label": `${D.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: Kt((ae) => E(ae, D, null, T, D.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (we(), Ce("span", oE, bt(T.frames.length), 1)) : kt("", !0)
                ], 46, iE))), 128))
              ], 40, eE),
              D.open ? (we(!0), Ce(pt, { key: 0 }, Lt(D.lanes, (T) => (we(), Ce("div", {
                key: T.key,
                class: "pano-timeline-lane",
                onPointerdown: (ae) => xe(ae, D, T.lane)
              }, [
                (we(!0), Ce(pt, null, Lt(v.value.get(T.key), (ae) => (we(), Ce("button", {
                  key: ae.key,
                  type: "button",
                  class: xt(["pano-timeline-pin", { selected: ae.selected, cluster: ae.frames.length > 1 }]),
                  style: zt({ left: I(ae.frame + 0.5) }),
                  "aria-label": `${T.label}: ${ae.frames.length > 1 ? `${ae.frames.length} keyframes` : `keyframe at frame ${ae.frames[0]}`}`,
                  "data-tip": ae.frames.length > 1 ? `${ae.frames.length} keyframes` : `Frame ${ae.frames[0]}`,
                  onPointerdown: Kt((_e) => E(_e, D, T.lane, ae, T.selectedFrames), ["stop"])
                }, [
                  ae.frames.length > 1 ? (we(), Ce("span", lE, bt(ae.frames.length), 1)) : kt("", !0)
                ], 46, sE))), 128))
              ], 40, aE))), 128)) : kt("", !0),
              se("span", {
                class: "pano-timeline-playhead",
                style: zt({ left: I(x.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, UO)
    ], 2)), [
      [wo, e.model.visible]
    ]);
  }
}, fE = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (we(), Ce("div", {
      class: xt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: zt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, bt(e.model.text || ""), 7));
  }
}, dE = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, pE = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (we(), Ce("div", dE, [
      (we(!0), Ce(pt, null, Lt(e.buttons, (r) => vi((we(), _r(yn, {
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
}, hE = ["data-video-ready"], mE = { class: "pano-video-transport-shell" }, gE = { class: "pano-video-controls-left" }, yE = { class: "pano-video-filmstrip" }, bE = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, vE = ["src", "onLoad"], _E = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, SE = ["max", "value", "disabled"], wE = { class: "pano-video-controls-right" }, xE = ["data-has-audio"], kE = { class: "pano-video-volume-pop" }, ME = ["value", "disabled"], NE = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = wt(() => {
      var v;
      return ((v = t.state) == null ? void 0 : v.playing) === !0 ? "Pause" : "Play";
    }), r = wt(() => {
      var v;
      return ((v = t.state) == null ? void 0 : v.playing) === !0 ? "Pause video" : "Play video";
    }), i = wt(() => {
      var v;
      return ((v = t.state) == null ? void 0 : v.playing) === !0 ? Ke.pause : Ke.play;
    }), a = wt(() => {
      var v;
      return ((v = t.state) == null ? void 0 : v.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = wt(() => {
      var v;
      return ((v = t.state) == null ? void 0 : v.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), l = wt(() => {
      var v;
      return ((v = t.state) == null ? void 0 : v.loop) === !1 ? Ke.loop_off : Ke.loop;
    }), u = wt(() => {
      var v, H;
      return ((v = t.state) == null ? void 0 : v.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), h = wt(() => {
      var v, H, B;
      return ((v = t.state) == null ? void 0 : v.hasAudio) !== !0 ? Ke.volume : ((H = t.state) == null ? void 0 : H.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? Ke.volume_muted : Ke.volume2;
    }), p = wt(() => {
      var v;
      return Math.max(0, Math.min(100, Number(((v = t.state) == null ? void 0 : v.progressPct) || 0)));
    }), g = wt(() => ({ left: `${p.value}%` })), b = wt(() => {
      var ye, Ae;
      const v = (ye = t.state) == null ? void 0 : ye.volumePct, H = Number(((Ae = t.state) == null ? void 0 : Ae.volume) ?? 1) * 100, B = Number(v ?? H ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, B))}%`
      };
    }), x = wt(() => {
      var B, ye;
      const H = [
        String(((B = t.state) == null ? void 0 : B.currentTimeLabel) || "0:00"),
        String(((ye = t.state) == null ? void 0 : ye.durationLabel) || "0:00")
      ].reduce((Ae, E) => Math.max(Ae, E.length), 4);
      return `${Math.max(4, H)}ch`;
    }), S = wt(() => ({ "--pano-video-time-ch": x.value })), k = wt(() => {
      var B, ye;
      const v = Array.isArray((B = t.state) == null ? void 0 : B.thumbnails) ? t.state.thumbnails : [];
      if (v.length) return v;
      const H = Math.max(7, Number(((ye = t.state) == null ? void 0 : ye.thumbnailCount) || 9));
      return Array.from({ length: H }, (Ae, E) => ({
        id: `placeholder-${E}`,
        src: "",
        label: ""
      }));
    }), N = /* @__PURE__ */ ln(/* @__PURE__ */ new Set()), I = (v) => String((v == null ? void 0 : v.id) || (v == null ? void 0 : v.src) || (v == null ? void 0 : v.label) || ""), j = (v) => N.value.has(I(v)), R = (v) => {
      const H = new Set(N.value);
      H.add(I(v)), N.value = H;
    };
    go(k, (v) => {
      const H = new Set(v.map(I)), B = /* @__PURE__ */ new Set();
      for (const ye of N.value)
        H.has(ye) && B.add(ye);
      N.value = B;
    }, { immediate: !0 });
    const $ = wt(() => {
      var v;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((v = t.state) == null ? void 0 : v.shellMaxWidthPx) || 640))}px`
      };
    });
    return (v, H) => (we(), Ce("div", {
      class: xt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: zt($.value)
    }, [
      H[1] || (H[1] = se("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      H[2] || (H[2] = se("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      se("div", mE, [
        se("div", gE, [
          rt(yn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          se("div", {
            class: "pano-video-time pano-video-time-start",
            style: zt(S.value)
          }, bt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        se("div", yE, [
          se("div", bE, [
            (we(!0), Ce(pt, null, Lt(k.value, (B) => (we(), Ce("div", {
              key: I(B),
              class: xt(["pano-video-thumb", {
                "is-placeholder": !B.src,
                "is-loaded": B.src && j(B)
              }])
            }, [
              B.src ? (we(), Ce("img", {
                key: 0,
                src: B.src,
                alt: "",
                draggable: "false",
                onLoad: (ye) => R(B)
              }, null, 40, vE)) : (we(), Ce("span", _E))
            ], 2))), 128))
          ]),
          se("div", {
            class: "pano-video-playhead",
            style: zt(g.value),
            "aria-hidden": "true"
          }, [...H[0] || (H[0] = [
            se("span", { class: "pano-video-playhead-line" }, null, -1),
            se("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          se("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, SE)
        ]),
        se("div", wE, [
          se("div", {
            class: "pano-video-time pano-video-time-end",
            style: zt(S.value)
          }, bt(e.state.durationLabel || "0:00"), 5),
          rt(yn, {
            "extra-class": "pano-video-control",
            icon: l.value,
            label: a.value,
            tip: s.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          se("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            se("div", kE, [
              se("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: zt(b.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, ME)
            ]),
            rt(yn, {
              "extra-class": "pano-video-control",
              icon: h.value,
              label: u.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, xE)
        ])
      ])
    ], 14, hE));
  }
}, PE = { class: "pano-floating-top" }, AE = ["data-selected", "data-view-count"], CE = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], IE = { class: "label" }, OE = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return we(), Ce("div", PE, [
        se("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (we(!0), Ce(pt, null, Lt(e.buttons, (i) => vi((we(), Ce("button", {
            key: i.key,
            class: xt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            rt(Jt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            se("span", IE, bt(i.label), 1)
          ], 10, CE)), [
            [wo, i.visible !== !1]
          ])), 128))
        ], 8, AE)
      ]);
    };
  }
};
function M1(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ke.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ke.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Ke.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ke.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ke.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ke.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ke.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ke.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ke.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ke.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ke.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ke.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ke.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Ke.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ke.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ke.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ke.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ke.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ke.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ke.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ke.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ke.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ke.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ke.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ke.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ke.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ke.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ke.lasso_tool }
        ]
      }
    ]
  };
}
const EE = ["aria-label"], TE = { class: "pano-stage-column" }, FE = { class: "pano-stage-wrap" }, DE = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, LE = {
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
    let a = "", s = !1, l = null;
    const u = /* @__PURE__ */ ln(null), h = /* @__PURE__ */ ln(null), p = /* @__PURE__ */ ln(null);
    function g() {
      var E, te;
      return ((te = (E = p.value) == null ? void 0 : E.getRefs) == null ? void 0 : te.call(E)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function b(E) {
      var te, re;
      return ((re = (te = h.value) == null ? void 0 : te.open) == null ? void 0 : re.call(te, E)) === !0;
    }
    function x(E) {
      i("image-file-selected", E);
    }
    function S(E) {
      i("image-file-cancelled", E);
    }
    t({ getPaintOverlayRefs: g, openImagePicker: b });
    const k = wt(() => r.readOnly === !0), N = wt(() => r.shellPreset || M1(r.type)), I = wt(() => {
      var te, re, fe;
      const E = String((((te = r.uiState) == null ? void 0 : te.stageStatus) === "failed" ? (re = r.uiState) == null ? void 0 : re.stageStatusDetail : (fe = r.uiState) == null ? void 0 : fe.stageWarningDetail) ?? "");
      return E === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : E === "stickers" ? "One or more sticker previews are unavailable." : E === "frame" ? "The editor hit a rendering error. Check the browser console for details." : E === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : E.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), j = wt(() => {
      var te;
      const E = Array.isArray((te = N.value) == null ? void 0 : te.floatingButtons) ? N.value.floatingButtons.slice() : [];
      return k.value && E.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ke.fullscreen
      }), E;
    });
    function R() {
      const E = u.value;
      return E ? Array.from(E.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((te) => te instanceof HTMLElement ? !te.hidden && te.tabIndex >= 0 && te.offsetParent !== null : !1) : [];
    }
    function $() {
      var re;
      const te = R()[0] || u.value;
      (re = te == null ? void 0 : te.focus) == null || re.call(te);
    }
    function v() {
      var E;
      l != null && l.isConnected && ((E = l.focus) == null || E.call(l)), l = null;
    }
    function H(E) {
      var te, re, fe, Me;
      if (!E.defaultPrevented) {
        if (E.key === "Tab") {
          const xe = R();
          if (!xe.length) {
            E.preventDefault(), (re = (te = u.value) == null ? void 0 : te.focus) == null || re.call(te);
            return;
          }
          const he = xe[0], J = xe[xe.length - 1], D = document.activeElement;
          if (E.shiftKey) {
            (D === he || D === u.value || !((fe = u.value) != null && fe.contains(D))) && (E.preventDefault(), J.focus());
            return;
          }
          (D === J || !((Me = u.value) != null && Me.contains(D))) && (E.preventDefault(), he.focus());
          return;
        }
        E.key === "Escape" && i("close");
      }
    }
    function B() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ye() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function Ae(E) {
      document.removeEventListener("keydown", H), E ? (l || (l = document.activeElement), B(), document.addEventListener("keydown", H), Pc(() => {
        $();
      })) : (ye(), v());
    }
    return Cc(() => {
      Ae(r.open);
    }), Ts(() => {
      ye(), document.removeEventListener("keydown", H), v();
    }), go(() => r.open, (E) => {
      Ae(E);
    }), (E, te) => e.open ? (we(), Ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: te[2] || (te[2] = Kt((re) => i("close"), ["self"]))
    }, [
      se("section", {
        ref_key: "modalRef",
        ref: u,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        se("div", TE, [
          se("div", FE, [
            te[3] || (te[3] = se("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            te[4] || (te[4] = se("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            te[5] || (te[5] = se("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (we(), Ce("div", DE, bt(I.value), 1)) : kt("", !0),
            te[6] || (te[6] = se("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              se("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            rt(kI, {
              ref_key: "paintOverlaysRef",
              ref: p
            }, null, 512),
            rt(o1, {
              ref_key: "imageFilePickerRef",
              ref: h,
              onFileSelected: x,
              onFileCancelled: S
            }, null, 512),
            k.value ? kt("", !0) : (we(), Ce(pt, { key: 1 }, [
              rt(pE, {
                buttons: e.uiState.toolButtons || N.value.toolButtons || []
              }, null, 8, ["buttons"]),
              rt(YC, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              rt(xI, {
                "paint-swatches": e.paintSwatches,
                panes: N.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            rt(NE, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            rt(OE, {
              buttons: e.uiState.viewButtons || N.value.viewButtons || []
            }, null, 8, ["buttons"]),
            rt(GC, {
              buttons: e.uiState.floatingButtons || j.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            rt(EI, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            rt(fE, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            rt(eI, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          rt(uE, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: te[0] || (te[0] = (re) => i("timeline", re))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? kt("", !0) : (we(), _r(DO, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: te[1] || (te[1] = (re) => i("timeline", re))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, EE)
    ])) : kt("", !0);
  }
}, Ir = "loading", Is = "ready", yr = "failed";
function N1(e, t = "") {
  return e && (e.__panoLoadState = Ir, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function P1(e, t = "") {
  return e && (e.__panoLoadState = Is, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function A1(e, t = "") {
  return e && (e.__panoLoadState = yr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function od(e, t) {
  return e ? e.__panoLoadState === yr ? yr : typeof t == "function" && t(e) ? Is : Ir : Is;
}
function ad(e) {
  return od(e) === yr;
}
function RE({ presented: e, background: t = Is, stickers: n = [] } = {}) {
  if (!e) return { status: Ir, detail: "boot" };
  const r = Array.isArray(n) ? n : [], i = t === Ir, a = r.includes(Ir);
  if (i && a) return { status: Ir, detail: "mixed" };
  if (i) return { status: Ir, detail: "background" };
  if (a) return { status: Ir, detail: "stickers" };
  const s = t === yr, l = r.includes(yr);
  return s && l ? { status: yr, detail: "mixed" } : s ? { status: yr, detail: "background" } : l ? { status: yr, detail: "stickers" } : { status: Is, detail: "" };
}
const VE = "state_json", $E = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), dp = "sticker_image_1", zE = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), d0 = 0.01, jE = "external_image", bc = "pano_sticker_input_images", HE = "pano_sticker_input_videos", GE = "pano_sticker_input_frames", KE = "pano_sticker_input_video_meta", WE = !0, Rl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Xr = Math.PI / 180, fo = 180 / Math.PI, rf = 1, p0 = "rgb(255, 221, 87)", BE = "rgb(228, 228, 231)", UE = "rgb(180, 150, 60)", YE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, XE = 64, h0 = 40, of = 16, qE = 0.45, m0 = 180, JE = 160, vc = 24, ZE = 4, QE = 4, eT = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function af(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function tT(e) {
  return 1 - Math.pow(1 - e, 3);
}
function nT(e, t, n) {
  const r = ve((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function rT(e) {
  return e * e * e;
}
function $c(e, t, n) {
  return { x: e, y: t, z: n };
}
function g0(e, t) {
  return $c(e.x + t.x, e.y + t.y, e.z + t.z);
}
function y0(e, t) {
  return $c(e.x * t, e.y * t, e.z * t);
}
function sf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function iT(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return $c(e.x / t, e.y / t, e.z / t);
}
function ml(e) {
  return {
    yaw: Xt(Math.atan2(e.x, e.z) * fo),
    pitch: ve(Math.asin(ve(e.y, -1, 1)) * fo, -90, 90)
  };
}
function Ei(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const a = t[r].x, s = t[r].y, l = t[i].x, u = t[i].y;
    s > e.y != u > e.y && e.x < (l - a) * (e.y - s) / (u - s || 1e-6) + a && (n = !n);
  }
  return n;
}
function rs(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function lf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), i = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), l = r * r + i * i;
  if (l <= 1e-6) return rs(e, t);
  const u = ve((a * r + s * i) / l, 0, 1), h = Number(t.x || 0) + r * u, p = Number(t.y || 0) + i * u, g = Number(e.x || 0) - h, b = Number(e.y || 0) - p;
  return g * g + b * b;
}
function mr(e, t, n) {
  return e + (t - e) * n;
}
function Gr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(ve(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(ve(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(ve(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${ve(n, 0, 1)})`;
}
function oT(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let gl = { fillStyle: "", url: "" };
function aT(e, t, n) {
  if (gl.url && gl.fillStyle === String(e || ""))
    return gl.url;
  const r = oT(`
<svg xmlns="http://www.w3.org/2000/svg" width="${vc}" height="${vc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return gl = { fillStyle: String(e || ""), url: r }, r;
}
function Vl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function or(e) {
  return {
    r: ve(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: ve(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: ve(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: ve(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function An(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function sT(e) {
  return Rl.some((t) => Vl(e, t.color));
}
function cf(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, i = ve(Number(t), 0, 1), a = ve(Number(n), 0, 1);
  if (i <= 1e-6) return { r: a, g: a, b: a };
  const s = Math.floor(r * 6), l = r * 6 - s, u = a * (1 - i), h = a * (1 - l * i), p = a * (1 - (1 - l) * i);
  switch (s % 6) {
    case 0:
      return { r: a, g: p, b: u };
    case 1:
      return { r: h, g: a, b: u };
    case 2:
      return { r: u, g: a, b: p };
    case 3:
      return { r: u, g: h, b: a };
    case 4:
      return { r: p, g: u, b: a };
    default:
      return { r: a, g: u, b: h };
  }
}
function uf(e) {
  const t = ve(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = ve(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = ve(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, n, r), a = Math.min(t, n, r), s = i - a;
  let l = 0;
  s > 1e-6 && (i === t ? l = ((n - r) / s + (n < r ? 6 : 0)) / 6 : i === n ? l = ((r - t) / s + 2) / 6 : l = ((t - n) / s + 4) / 6);
  const u = i <= 1e-6 ? 0 : s / i;
  return { h: l, s: u, v: i };
}
function Bo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function lT(e) {
  var r, i;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function b0(e) {
  const { paintCount: t, maskCount: n } = lT(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, a = 0;
  return r.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? a += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: i,
    maskRasterCount: a,
    totalPaintCount: t + i,
    totalMaskCount: n + a
  };
}
function Uo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function yl(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function cT(e, t) {
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
function ao(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function uT(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, i = Number(r);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function fT(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function dT(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const C1 = "pano_suite.ui_settings.v1", I1 = "pano_suite.node_grid_visibility.v1";
let Qo = null, Kr = null;
function $l(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function pT() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(C1)) || "").trim();
    if (!t) return Qo ? $l(Qo) : null;
    const n = JSON.parse(t), r = $l(n);
    return Qo = r, r;
  } catch {
    return Qo ? $l(Qo) : null;
  }
}
function hT(e) {
  var n;
  const t = $l(e);
  Qo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(C1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function O1() {
  var e;
  if (Kr && typeof Kr == "object")
    return Kr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(I1)) || "").trim();
    if (!t)
      return Kr = {}, Kr;
    const n = JSON.parse(t);
    return Kr = n && typeof n == "object" ? n : {}, Kr;
  } catch {
    return Kr = {}, Kr;
  }
}
function mT(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const i = O1()[n];
  return typeof i == "boolean" ? i : !!t;
}
function gT(e, t) {
  var i;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = O1();
  r[n] = !!t, Kr = r;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(I1, JSON.stringify(r));
  } catch {
  }
}
const Di = /* @__PURE__ */ new Map(), yT = 12;
function bT(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Di.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Di.delete(t), Di.set(t, n), n);
}
function vT(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Di.delete(n), Di.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Di.size > yT; ) {
      const i = Di.keys().next().value;
      if (!i) break;
      Di.delete(i);
    }
}
function _T(e, t) {
  const n = { ...e }, r = t.map((i) => i(e));
  for (const { connect: i, ...a } of r) {
    for (const s of Object.keys(a))
      if (s in n) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(n, a);
  }
  for (const i of r) i.connect(n);
  return n;
}
function ST(e = 80, t = null, n = 8) {
  const r = [];
  let i = -1;
  const a = Math.max(1, Number(e || 80)), s = Math.max(1, Number(n || 8));
  function l(h) {
    if (r.splice(0, r.length), i = -1, !h || typeof h != "object" || !Array.isArray(h.entries) || (h.entries.forEach((g) => {
      r.push(String(g || ""));
    }), !r.length)) return;
    const p = Number(h.index);
    Number.isInteger(p) ? p === -1 ? i = -1 : i = Math.max(0, Math.min(r.length - 1, p)) : i = r.length - 1;
  }
  function u(h) {
    r[i] !== h && (r.splice(i + 1), r.push(h), r.length > a && r.shift(), i = r.length - 1);
  }
  return l(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(h) {
      u(String(h || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const h = i - 1;
      return h < 0 || h >= r.length ? null : (i = h, r[i]);
    },
    redo() {
      const h = i + 1;
      return h < 0 || h >= r.length ? null : (i = h, r[i]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const h = r.length, p = Math.max(0, h - s), g = i >= 0 ? Math.max(0, Math.min(i, p)) : p, b = r.slice(g, g + s), x = i < 0 ? -1 : Math.max(-1, Math.min(b.length - 1, i - g));
      return {
        version: 1,
        entries: b,
        index: x
      };
    },
    hydrate: l
  };
}
const wT = 80;
function E1(e) {
  return JSON.stringify(lN(e));
}
function xT(e) {
  return ST(wT, { entries: [E1(e)], index: 0 });
}
function kT(e) {
  const {
    editor: t,
    playback: n,
    readOnly: r,
    runtime: i,
    state: a,
    stateV2: s,
    studio: l,
    type: u
  } = e;
  let h, p, g, b, x, S, k, N, I, j, R, $, v;
  function H() {
    r || (j(), db(a), !(s && a.stickers.some(b)) && (t.historyController.commitActionGroup(E1(a)), $()));
  }
  function B(Ae) {
    var fe, Me;
    if (r) return;
    I();
    const E = Ae < 0 ? t.historyController.undo() : t.historyController.redo();
    if ($(), !E) return;
    const te = cN(a, E), re = (fe = a.timeline) == null ? void 0 : fe.fps;
    Object.keys(a).forEach((xe) => delete a[xe]), Object.assign(a, te.state), j(!1), s && a.timeline.fps !== re && n.seek(Math.round(t.frame * a.timeline.fps / re)), t.selectedId = u === "stickers" || u === "cutout" ? a.active.selected_sticker_id : a.active.selected_shot_id, l && !t.selectedId && a.active.selected_shot_id && (t.selectedId = ((Me = g()) == null ? void 0 : Me.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && h(), k(), i.backgroundDirty = !0, te.paintingChanged ? S() : x(), R(), v(), p(), N({ cause: "cutout_frame" });
  }
  function ye() {
    var te, re;
    const Ae = Array.isArray((te = t.historyController) == null ? void 0 : te.entries) ? t.historyController.entries : [], E = Number((re = t.historyController) == null ? void 0 : re.index);
    return {
      canUndo: !r && Ae.length > 1 && E > 0,
      canRedo: !r && Ae.length > 1 && E >= 0 && E < Ae.length - 1
    };
  }
  return {
    connect(Ae) {
      ({
        clearWorldSelection: h,
        commitState: p,
        getActiveCutoutShot: g,
        isUploadingSticker: b,
        markObjectVisualsDirty: x,
        markPaintStrokeVisualsDirty: S,
        releaseHiddenSelection: k,
        requestDraw: N,
        stopTimelinePlayback: I,
        syncCutoutShot: j,
        syncPaintUi: R,
        syncUndoRedoButtons: $,
        updateSidePanel: v
      } = Ae);
    },
    pushHistory: H,
    restoreHistory: B,
    getHistoryCapabilities: ye
  };
}
function MT(e) {
  const {
    canvas: t,
    cutoutV2: n,
    editor: r,
    sceneV2: i,
    state: a,
    stateV2: s,
    type: l
  } = e;
  let u, h, p, g, b, x, S;
  function k() {
    return l === "stickers" ? N() : a.shots;
  }
  function N() {
    return i ? a.stickers.filter((M) => M.placement === "sky") : a.stickers;
  }
  function I(M) {
    return i && A(M);
  }
  function j(M) {
    return M.source.kind === "file" && !M.source.filename && !M.source.data_url;
  }
  function R(M) {
    return I(M) ? Kd(M, r.frame) : M;
  }
  function $(M, G) {
    I(M) ? lb(M, r.frame, G) : Object.assign(M, G);
  }
  function v() {
    const M = a.painting || (a.painting = ha(null));
    return Array.isArray(M.groups) || (M.groups = []), M.groups;
  }
  function H(M = "paint") {
    var X, ge;
    const G = Array.isArray((ge = (X = a.painting) == null ? void 0 : X[M]) == null ? void 0 : ge.strokes) ? a.painting[M].strokes : [], f = [], W = /* @__PURE__ */ new Set();
    for (const Fe of G) {
      const ke = String((Fe == null ? void 0 : Fe.actionGroupId) || "").trim();
      !ke || W.has(ke) || (W.add(ke), f.push(ke));
    }
    return f;
  }
  function B() {
    return H("paint");
  }
  function ye(M, G) {
    const f = String(G || "").trim();
    return f ? `${M === "mask" ? "mask" : "paint"}:${f}` : "";
  }
  function Ae(M) {
    const G = String(M || "").trim();
    return G ? `raster:${G}` : "";
  }
  function E(M) {
    const G = String(M || "").trim();
    if (!G) return "";
    const f = G.match(/^raster:(.*)$/);
    return String(f ? f[1] || "" : G).trim();
  }
  function te(M, G = null) {
    const f = String(M || "").trim();
    if (!f) return { layerKind: "paint", actionGroupId: "" };
    const W = f.match(/^(paint|mask):(.*)$/);
    return W ? { layerKind: W[1] === "mask" ? "mask" : "paint", actionGroupId: String(W[2] || "").trim() } : { layerKind: G === "mask" ? "mask" : "paint", actionGroupId: f };
  }
  function re() {
    var G;
    let M = -1;
    for (const f of N())
      M = Math.max(M, Number((f == null ? void 0 : f.z_index) || 0));
    for (const f of v())
      M = Math.max(M, Number((f == null ? void 0 : f.z_index) || 0));
    for (const f of Array.isArray((G = a.painting) == null ? void 0 : G.raster_objects) ? a.painting.raster_objects : [])
      String((f == null ? void 0 : f.layerKind) || "paint") === "paint" && (M = Math.max(M, Number((f == null ? void 0 : f.z_index) || 0)));
    return M + 1;
  }
  function fe(M, G = null) {
    const f = String(M || "").trim();
    if (!f) return null;
    const W = v();
    let X = W.find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === f);
    return X ? G != null && (X.z_index = Math.max(0, Number(G || 0))) : (X = {
      id: f,
      type: "strokeGroup",
      actionGroupId: f,
      z_index: G == null ? re() : Math.max(0, Number(G || 0)),
      locked: !1,
      frame: null
    }, W.push(X)), X;
  }
  function Me(M) {
    if (!(M != null && M.centerUv)) return [];
    const G = Number(M.centerUv.u || 0), f = Number(M.centerUv.v || 0), W = Number(M.halfW || 0), X = Number(M.halfH || 0);
    return [
      {
        u: ((G - W) % 1 + 1) % 1,
        v: ve(f - X, 0, 1)
      },
      {
        u: ((G + W) % 1 + 1) % 1,
        v: ve(f - X, 0, 1)
      },
      {
        u: ((G + W) % 1 + 1) % 1,
        v: ve(f + X, 0, 1)
      },
      {
        u: ((G - W) % 1 + 1) % 1,
        v: ve(f + X, 0, 1)
      }
    ];
  }
  function xe() {
    const M = new Set(B()), f = v().filter((W) => M.has(String((W == null ? void 0 : W.actionGroupId) || "")));
    return M.forEach((W) => {
      f.some((X) => String((X == null ? void 0 : X.actionGroupId) || "") === W) || f.push({
        id: W,
        type: "strokeGroup",
        actionGroupId: W,
        z_index: re(),
        locked: !1,
        frame: null
      });
    }), f.sort((W, X) => Number((W == null ? void 0 : W.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)), a.painting.groups = f, f;
  }
  function he(M, G, f) {
    var Re;
    const W = (qe) => (Number(qe || 0) % 1 + 1) % 1, X = [];
    for (const qe of f) {
      const lt = qe == null ? void 0 : qe.geometry, It = (lt == null ? void 0 : lt.geometryKind) === "lasso_fill" ? lt == null ? void 0 : lt.points : (lt == null ? void 0 : lt.processedPoints) || (lt == null ? void 0 : lt.rawPoints) || (lt == null ? void 0 : lt.points) || [];
      Array.isArray(It) && X.push(...It);
    }
    if (!X.length) return null;
    const ge = W(((Re = X[0]) == null ? void 0 : Re.u) || 0);
    let Fe = 0, ke = 0;
    X.forEach((qe) => {
      const lt = W((qe == null ? void 0 : qe.u) || 0);
      Fe += ge + be(lt, ge), ke += Number((qe == null ? void 0 : qe.v) || 0);
    });
    const nt = (Fe / X.length % 1 + 1) % 1;
    let et = 1 / 0, F = -1 / 0, de = 1 / 0, ce = -1 / 0;
    X.forEach((qe) => {
      const lt = W((qe == null ? void 0 : qe.u) || 0), It = be(lt, nt);
      et = Math.min(et, It), F = Math.max(F, It);
      const en = Number((qe == null ? void 0 : qe.v) || 0);
      de = Math.min(de, en), ce = Math.max(ce, en);
    });
    const Ie = f.reduce((qe, lt) => {
      const It = h(String((lt == null ? void 0 : lt.toolKind) || "pen")), en = Yn[It] || Yn[fi], Bt = Math.max(1, Number((lt == null ? void 0 : lt.size) || 10)) * Math.max(0.1, Number((en == null ? void 0 : en.sizeScale) ?? 1));
      return Math.max(qe, Bt);
    }, 0), Ue = Math.max(35e-4, Ie / 2048);
    return {
      centerUv: { u: ((nt + (et + F) * 0.5) % 1 + 1) % 1, v: ve((de + ce) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (F - et) * 0.5 + Ue,
      halfH: (ce - de) * 0.5 + Ue,
      uvPad: Ue
    };
  }
  function J(M, G, f) {
    const W = String(M || "").trim();
    if (!W) return null;
    const X = v().find((Fe) => String((Fe == null ? void 0 : Fe.actionGroupId) || "") === W);
    if (!X) return null;
    const ge = f || O(W, G);
    return X.frame = he(W, G, ge), X.frame;
  }
  function D() {
    var W;
    const M = N().map((X) => ({
      type: "sticker",
      id: String((X == null ? void 0 : X.id) || ""),
      z_index: Number((X == null ? void 0 : X.z_index) || 0),
      item: X
    })), G = xe().map((X) => ({
      type: "strokeGroup",
      id: String((X == null ? void 0 : X.id) || (X == null ? void 0 : X.actionGroupId) || ""),
      actionGroupId: String((X == null ? void 0 : X.actionGroupId) || ""),
      z_index: Number((X == null ? void 0 : X.z_index) || 0),
      item: X
    })), f = (Array.isArray((W = a.painting) == null ? void 0 : W.raster_objects) ? a.painting.raster_objects : []).filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") === "paint").map((X) => ({
      type: "rasterObject",
      id: String((X == null ? void 0 : X.id) || ""),
      z_index: Number((X == null ? void 0 : X.z_index) || 0),
      item: X
    }));
    return [...M, ...G, ...f].sort((X, ge) => Number(X.z_index || 0) - Number(ge.z_index || 0));
  }
  function T(M = !0) {
    var f, W, X, ge, Fe, ke;
    const G = D().filter((nt) => nt.type === "strokeGroup").map((nt) => String(nt.actionGroupId || "")).filter((nt) => !!nt);
    if (M) {
      const nt = String(((W = (f = r.interaction) == null ? void 0 : f.stroke) == null ? void 0 : W.actionGroupId) || "").trim(), et = String(((ge = (X = r.interaction) == null ? void 0 : X.stroke) == null ? void 0 : ge.layerKind) || "").trim(), F = String(((ke = (Fe = r.interaction) == null ? void 0 : Fe.stroke) == null ? void 0 : ke.toolKind) || "").trim();
      nt && et === "paint" && F !== "eraser" && !G.includes(nt) && G.push(nt);
    }
    return G;
  }
  function ae(M = !0) {
    var ke, nt, et, F, de, ce;
    const G = D();
    if (!M) return G;
    const f = String(((nt = (ke = r.interaction) == null ? void 0 : ke.stroke) == null ? void 0 : nt.actionGroupId) || "").trim(), W = String(((F = (et = r.interaction) == null ? void 0 : et.stroke) == null ? void 0 : F.layerKind) || "").trim(), X = String(((ce = (de = r.interaction) == null ? void 0 : de.stroke) == null ? void 0 : ce.toolKind) || "").trim();
    if (!f || W !== "paint" || X === "eraser" || G.some((Ie) => Ie.type === "strokeGroup" && String(Ie.actionGroupId || "") === f))
      return G;
    const ge = x();
    let Fe = G.reduce((Ie, Ue) => Math.max(Ie, Number((Ue == null ? void 0 : Ue.z_index) || 0)), -1) + 1;
    return ge && Oe(ge) && String(ge.actionGroupId || "") === f && (Fe = Number(ge.z_index || 0)), [
      ...G,
      {
        type: "strokeGroup",
        id: f,
        actionGroupId: f,
        z_index: Fe,
        item: null
      }
    ].sort((Ie, Ue) => Number((Ie == null ? void 0 : Ie.z_index) || 0) - Number((Ue == null ? void 0 : Ue.z_index) || 0));
  }
  function _e() {
    return v().slice().sort((M, G) => Number((M == null ? void 0 : M.z_index) || 0) - Number((G == null ? void 0 : G.z_index) || 0)).map((M) => le(ye("paint", (M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))).filter(Boolean);
  }
  function je() {
    var M;
    return (Array.isArray((M = a.painting) == null ? void 0 : M.raster_objects) ? a.painting.raster_objects : []).filter((G) => String((G == null ? void 0 : G.layerKind) || "paint") === "paint").slice().sort((G, f) => Number((G == null ? void 0 : G.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((G) => me(Ae((G == null ? void 0 : G.id) || ""))).filter(Boolean);
  }
  function tt() {
    return n || !Array.isArray(a.stickers) ? [] : N();
  }
  function st() {
    return [...Array.isArray(a.shots) ? a.shots : [], ...tt()];
  }
  function Se(M) {
    return !!M && Array.isArray(a.shots) && a.shots.includes(M);
  }
  function A(M) {
    return !!M && Array.isArray(a.stickers) && a.stickers.includes(M);
  }
  function Te() {
    var M;
    return Array.isArray((M = a.painting) == null ? void 0 : M.raster_objects) ? a.painting.raster_objects : [];
  }
  function me(M) {
    const G = E(M);
    if (!G) return null;
    const f = Te().find((W) => String((W == null ? void 0 : W.id) || "").trim() === G);
    return !f || String((f == null ? void 0 : f.layerKind) || "paint") !== "paint" ? null : {
      ...f,
      id: Ae(G),
      type: "rasterObject",
      rasterObjectId: G
    };
  }
  function We(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "rasterObject") return !1;
    const G = E(M.rasterObjectId || M.id || "");
    return !!G && !!me(Ae(G));
  }
  function le(M) {
    const G = te(M), f = String(G.actionGroupId || "").trim();
    if (!f) return null;
    const W = v().find((X) => String((X == null ? void 0 : X.id) || (X == null ? void 0 : X.actionGroupId) || "") === f || String((X == null ? void 0 : X.actionGroupId) || "") === f);
    return W ? {
      ...W,
      id: ye("paint", f),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: f
    } : null;
  }
  function Oe(M) {
    if (!M || typeof M != "object" || String(M.type || "") !== "strokeGroup") return !1;
    const G = String(M.actionGroupId || "").trim(), f = String(M.layerKind || "paint").trim() || "paint";
    return !!G && !!le(ye(f, G));
  }
  function O(M, G = null) {
    const f = te(M, G), W = String(f.actionGroupId || "").trim();
    return W ? g(f.layerKind).filter((X) => String((X == null ? void 0 : X.actionGroupId) || "").trim() === W) : [];
  }
  function V(M, G = "paint") {
    const f = String(M || "").trim(), X = `geomv5:${String(G || "paint").trim() || "paint"}:${f}:${r.mode}:${b()}`;
    if (r.mode === "frame") {
      const ge = u(), Fe = String((ge == null ? void 0 : ge.id) || ""), ke = ge ? p(ge) : null;
      return `${X}:frame:${Fe}:${Math.round(Number((ge == null ? void 0 : ge.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.roll_deg) ?? (ge == null ? void 0 : ge.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ke == null ? void 0 : ke.x) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.y) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.w) || 0))}:${Math.round(Number((ke == null ? void 0 : ke.h) || 0))}`;
    }
    return `${X}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function U(M, G, f) {
    return !M || typeof M != "object" ? M : {
      ...M,
      u: ((Number(M.u || 0) + Number(G || 0)) % 1 + 1) % 1,
      v: ve(Number(M.v || 0) + Number(f || 0), 0, 1)
    };
  }
  function be(M, G) {
    let f = Number(M || 0) - Number(G || 0);
    for (; f > 0.5; ) f -= 1;
    for (; f < -0.5; ) f += 1;
    return f;
  }
  function L(M, G = null, f = null) {
    var et;
    const W = te(M, G), X = Array.isArray(f) ? f : O(W.actionGroupId, W.layerKind), ge = [];
    if (X.forEach((F) => {
      const de = (F == null ? void 0 : F.geometry) || null, ce = (de == null ? void 0 : de.geometryKind) === "lasso_fill" ? de == null ? void 0 : de.points : (de == null ? void 0 : de.processedPoints) || (de == null ? void 0 : de.rawPoints) || (de == null ? void 0 : de.points) || [];
      Array.isArray(ce) && ge.push(...ce);
    }), !ge.length) return { u: 0.5, v: 0.5 };
    const Fe = Number(((et = ge[0]) == null ? void 0 : et.u) || 0);
    let ke = 0, nt = 0;
    return ge.forEach((F) => {
      ke += Fe + be(Number((F == null ? void 0 : F.u) || 0), Fe), nt += Number((F == null ? void 0 : F.v) || 0);
    }), {
      u: (ke / ge.length % 1 + 1) % 1,
      v: ve(nt / ge.length, 0, 1)
    };
  }
  function Y(M, G, f = 1, W = 0) {
    if (!M || typeof M != "object") return M;
    const X = Number((G == null ? void 0 : G.u) || 0), ge = Number((G == null ? void 0 : G.v) || 0), Fe = be(Number(M.u || 0), X), ke = Number(M.v || 0) - ge, nt = Number(W || 0) * Xr, et = Math.cos(nt), F = Math.sin(nt), de = Math.max(0.02, Number(f || 1)), ce = (Fe * et - ke * F) * de, Ie = (Fe * F + ke * et) * de;
    return {
      ...M,
      u: ((X + ce) % 1 + 1) % 1,
      v: ve(ge + Ie, 0, 1)
    };
  }
  function ee(M, G, f, W = null, X = null, ge = null) {
    const Fe = te(M, X), ke = String(Fe.actionGroupId || "").trim();
    if (!ke) return !1;
    const nt = g(Fe.layerKind), et = Array.isArray(W) ? new Map(W.map((de) => [String((de == null ? void 0 : de.id) || ""), de])) : null;
    let F = !1;
    if (nt.forEach((de) => {
      if (String((de == null ? void 0 : de.actionGroupId) || "").trim() !== ke) return;
      const ce = (et == null ? void 0 : et.get(String((de == null ? void 0 : de.id) || ""))) || de, Ie = de == null ? void 0 : de.geometry, Ue = ce == null ? void 0 : ce.geometry;
      !Ie || !Ue || (Array.isArray(Ue.points) && (Ie.points = Ue.points.map((Re) => U(Re, G, f)), F = !0), Array.isArray(Ue.rawPoints) && (Ie.rawPoints = Ue.rawPoints.map((Re) => U(Re, G, f)), F = !0), Array.isArray(Ue.processedPoints) && (Ie.processedPoints = Ue.processedPoints.map((Re) => U(Re, G, f)), F = !0));
    }), F && ge) {
      const de = v().find((ce) => String((ce == null ? void 0 : ce.actionGroupId) || "") === ke);
      de && (de.frame = null);
    }
    return F;
  }
  function Q(M, G = 1, f = 0, W = null, X = null, ge = null) {
    const Fe = te(M, X), ke = String(Fe.actionGroupId || "").trim();
    if (!ke) return !1;
    const nt = g(Fe.layerKind), et = Array.isArray(W) ? W : O(ke, Fe.layerKind), F = Array.isArray(et) ? new Map(et.map((Ie) => [String((Ie == null ? void 0 : Ie.id) || ""), Ie])) : null, de = (ge == null ? void 0 : ge.centerUv) ?? L(ke, Fe.layerKind, et);
    let ce = !1;
    if (nt.forEach((Ie) => {
      if (String((Ie == null ? void 0 : Ie.actionGroupId) || "").trim() !== ke) return;
      const Ue = (F == null ? void 0 : F.get(String((Ie == null ? void 0 : Ie.id) || ""))) || Ie, Re = Ie == null ? void 0 : Ie.geometry, qe = Ue == null ? void 0 : Ue.geometry;
      !Re || !qe || (Array.isArray(qe.points) && (Re.points = qe.points.map((lt) => Y(lt, de, G, f)), ce = !0), Array.isArray(qe.rawPoints) && (Re.rawPoints = qe.rawPoints.map((lt) => Y(lt, de, G, f)), ce = !0), Array.isArray(qe.processedPoints) && (Re.processedPoints = qe.processedPoints.map((lt) => Y(lt, de, G, f)), ce = !0));
    }), ce && ge) {
      const Ie = v().find((Ue) => String((Ue == null ? void 0 : Ue.actionGroupId) || "") === ke);
      Ie && (Ie.frame = null);
    }
    return ce;
  }
  function ne(M, G, f, W = null) {
    const X = E(M);
    if (!X) return !1;
    const ge = Te().find((F) => String((F == null ? void 0 : F.id) || "").trim() === X);
    if (!ge) return !1;
    const Fe = W && typeof W == "object" ? W : ge, ke = (Fe == null ? void 0 : Fe.transform) || {}, nt = Number(ke.du || 0) + Number(G || 0), et = ve(Number(ke.dv || 0) + Number(f || 0), -1, 1);
    return ge.transform || (ge.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ge.transform.du = nt, ge.transform.dv = et, !0;
  }
  function q(M, G = 1, f = null) {
    const W = E(M);
    if (!W) return !1;
    const X = Te().find((et) => String((et == null ? void 0 : et.id) || "").trim() === W);
    if (!X) return !1;
    const ge = f && typeof f == "object" ? f : X, Fe = (ge == null ? void 0 : ge.transform) || {}, ke = Math.max(0.01, Number(Fe.scale || 1)), nt = ve(ke * Math.max(0.01, Number(G || 1)), 0.01, 100);
    return X.transform || (X.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), X.transform.scale = nt, !0;
  }
  function ie() {
    return re();
  }
  function oe(M) {
    var G;
    return !M || typeof M != "object" ? !1 : s ? ((G = M.source) == null ? void 0 : G.kind) === "port" : String(M.id || "") === dp || String(M.source_kind || "") === jE;
  }
  function Ne(M) {
    return !!(M && typeof M == "object" && M.visible === !1);
  }
  function Ve(M) {
    return oe(M) && Ne(M) ? vb : 1;
  }
  function ze(M, G, f = 1, W = 0) {
    if (!M || typeof M != "object") return M;
    const X = Number((G == null ? void 0 : G.u) || 0), ge = Number((G == null ? void 0 : G.v) || 0), Fe = be(Number(M.u || 0), X), ke = Number(M.v || 0) - ge, nt = Math.max(0.02, Number(f || 1)), et = Number(W || 0) * Xr, F = Math.cos(et), de = Math.sin(et), ce = Fe / nt, Ie = ke / nt, Ue = ce * F + Ie * de, Re = -ce * de + Ie * F;
    return {
      ...M,
      u: ((X + Ue) % 1 + 1) % 1,
      v: ge + Re
    };
  }
  function Ze(M) {
    const G = (M == null ? void 0 : M.bbox) || null, f = (M == null ? void 0 : M.transform) || {};
    return G ? {
      u: (((Number(G.u0 || 0) + Number(G.u1 || 0)) * 0.5 + Number(f.du || 0)) % 1 + 1) % 1,
      v: ve((Number(G.v0 || 0) + Number(G.v1 || 0)) * 0.5 + Number(f.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function ot(M) {
    var nt, et, F, de;
    const G = (M == null ? void 0 : M.bbox) || null;
    if (!G) return [];
    const f = {
      u: (Number(G.u0 || 0) + Number(G.u1 || 0)) * 0.5,
      v: (Number(G.v0 || 0) + Number(G.v1 || 0)) * 0.5
    }, W = Math.max(0.01, Number(((nt = M == null ? void 0 : M.transform) == null ? void 0 : nt.scale) || 1)), X = Number(((et = M == null ? void 0 : M.transform) == null ? void 0 : et.rot_deg) || 0), ge = Number(((F = M == null ? void 0 : M.transform) == null ? void 0 : F.du) || 0), Fe = Number(((de = M == null ? void 0 : M.transform) == null ? void 0 : de.dv) || 0);
    return [
      { u: Number(G.u0 || 0), v: Number(G.v0 || 0) },
      { u: Number(G.u1 || 0), v: Number(G.v0 || 0) },
      { u: Number(G.u1 || 0), v: Number(G.v1 || 0) },
      { u: Number(G.u0 || 0), v: Number(G.v1 || 0) }
    ].map((ce) => U(Y(ce, f, W, X), ge, Fe));
  }
  function He(M) {
    const G = E((M == null ? void 0 : M.rasterObjectId) || (M == null ? void 0 : M.id) || ""), f = (M == null ? void 0 : M.transform) || {}, W = (M == null ? void 0 : M.bbox) || {}, X = `${G}:${r.mode}:${b()}:${W.u0}:${W.v0}:${W.u1}:${W.v1}:${f.du}:${f.dv}:${f.rot_deg}:${f.scale}`;
    if (r.mode === "frame") {
      const ge = u(), Fe = ge ? p(ge) : null;
      return `${X}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((Fe == null ? void 0 : Fe.x) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.y) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.w) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.h) || 0))}`;
    }
    return `${X}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Ye(M) {
    const G = String((M == null ? void 0 : M.id) || ""), f = Se(M) ? "frame" : A(M) ? "sticker" : "item", W = R(M), X = [
      f,
      G,
      r.mode,
      Number((W == null ? void 0 : W.yaw_deg) || 0).toFixed(4),
      Number((W == null ? void 0 : W.pitch_deg) || 0).toFixed(4),
      Number((W == null ? void 0 : W.hFOV_deg) || 0).toFixed(4),
      Number((W == null ? void 0 : W.vFOV_deg) || 0).toFixed(4),
      Number((W == null ? void 0 : W.rot_deg) || 0).toFixed(4),
      Number((W == null ? void 0 : W.roll_deg) || 0).toFixed(4),
      gi(W),
      I(M) && S(M)
    ].join(":");
    if (r.mode === "frame") {
      const ge = u(), Fe = ge ? p(ge) : null;
      return `${X}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((Fe == null ? void 0 : Fe.x) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.y) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.w) || 0))}:${Math.round(Number((Fe == null ? void 0 : Fe.h) || 0))}`;
    }
    return `${X}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function gt() {
    D().forEach((G, f) => {
      G.type === "sticker" && G.item && (G.item.z_index = f), G.type === "strokeGroup" && G.item && (G.item.z_index = f), G.type === "rasterObject" && G.item && (G.item.z_index = f);
    });
  }
  return {
    connect(M) {
      ({
        getActiveCutoutShot: u,
        getBrushPresetIdForTool: h,
        getFrameViewRect: p,
        getPaintingLayerList: g,
        getPaintingRevisionKey: b,
        getSelected: x,
        sceneStickerShown: S
      } = M);
    },
    getList: k,
    skyStickers: N,
    isSceneSticker: I,
    isUploadingSticker: j,
    poseOf: R,
    writePose: $,
    getPaintingGroupList: v,
    makeStrokeGroupSelectionId: ye,
    makeRasterObjectSelectionId: Ae,
    parseRasterObjectSelectionId: E,
    ensurePaintingGroupEntry: fe,
    getFrameCornersUv: Me,
    ensureGroupFrame: J,
    getDisplayListObjects: D,
    getOrderedPaintGroupIds: T,
    getOrderedDisplayListObjects: ae,
    getSelectableStrokeGroupItems: _e,
    getSelectableRasterObjectItems: je,
    cutoutStickers: tt,
    getCutoutSelectableItems: st,
    isShotItem: Se,
    isStickerItem: A,
    getRasterObjectList: Te,
    getRasterObjectItem: me,
    isRasterObjectItem: We,
    getStrokeGroupItem: le,
    isStrokeGroupItem: Oe,
    getStrokeGroupStrokes: O,
    getStrokeGeomCacheKey: V,
    shortestWrappedDelta: be,
    getStrokeGroupCenterUv: L,
    applyStrokeGroupOffset: ee,
    applyStrokeGroupTransform: Q,
    applyRasterObjectOffset: ne,
    applyRasterObjectTransform: q,
    getNextStickerZIndex: ie,
    isExternalSticker: oe,
    isStickerHidden: Ne,
    getStickerDisplayAlpha: Ve,
    inverseTransformErpPointAround: ze,
    getRasterObjectCenterUv: Ze,
    getRasterObjectTransformedErpPoints: ot,
    getRasterObjectGeomCacheKey: He,
    getSceneItemGeomCacheKey: Ye,
    normalizeDisplayZIndices: gt
  };
}
function NT(e) {
  const {
    editor: t,
    readOnly: n,
    runtime: r,
    sceneV2: i,
    shotEditor: a,
    state: s,
    timeline: l,
    type: u
  } = e;
  let h, p, g, b, x, S, k, N, I, j, R, $, v, H, B, ye, Ae, E, te, re, fe, Me, xe, he, J, D, T, ae, _e, je, tt, st;
  function Se() {
    const M = String(t.selectedId || "");
    if (!M) return null;
    const G = v(M);
    if (G) return G;
    const f = j(M);
    return f || (a ? S().find((W) => String((W == null ? void 0 : W.id) || "") === M) || null : N().find((W) => String((W == null ? void 0 : W.id) || "") === M) || null);
  }
  function A() {
    const M = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], G = [], f = /* @__PURE__ */ new Set();
    return M.forEach((W) => {
      const X = String(W || "").trim();
      if (!X || f.has(X)) return;
      f.add(X);
      const ge = X === String(t.selectedId || "") ? Se() : v(X) || j(X) || (a ? S().find((Fe) => String((Fe == null ? void 0 : Fe.id) || "") === X) : N().find((Fe) => String((Fe == null ? void 0 : Fe.id) || "") === X));
      ge && G.push(ge);
    }), G;
  }
  function Te(M = null) {
    const G = Array.isArray(M) ? M : A();
    if (!G || G.length < 2) return null;
    const f = G.map((et) => he(et)).filter((et) => (et == null ? void 0 : et.visible) && Array.isArray(et.corners) && et.corners.length);
    if (!f.length) return null;
    const W = f.flatMap((et) => et.corners.map((F) => Number((F == null ? void 0 : F.x) || 0))), X = f.flatMap((et) => et.corners.map((F) => Number((F == null ? void 0 : F.y) || 0))), ge = Math.min(...W), Fe = Math.max(...W), ke = Math.min(...X), nt = Math.max(...X);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ge + Fe) * 0.5, y: (ke + nt) * 0.5 },
      corners: [
        { x: ge, y: ke },
        { x: Fe, y: ke },
        { x: Fe, y: nt },
        { x: ge, y: nt }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ge + Fe) * 0.5, y: ke, a: { x: ge, y: ke }, b: { x: Fe, y: ke } },
        { edge: "right", x: Fe, y: (ke + nt) * 0.5, a: { x: Fe, y: ke }, b: { x: Fe, y: nt } },
        { edge: "bottom", x: (ge + Fe) * 0.5, y: nt, a: { x: Fe, y: nt }, b: { x: ge, y: nt } },
        { edge: "left", x: ge, y: (ke + nt) * 0.5, a: { x: ge, y: nt }, b: { x: ge, y: ke } }
      ],
      rotateStemBase: { x: (ge + Fe) * 0.5, y: ke },
      rotateHandle: { x: (ge + Fe) * 0.5, y: ke - 30 }
    };
  }
  function me(M) {
    const G = String((M == null ? void 0 : M.id) || "").trim();
    return !!G && Array.isArray(t.selectedIds) && t.selectedIds.includes(G);
  }
  function We() {
    const M = Se();
    return M ? fe(M) || ye(M) ? "stroke" : E(M) ? "frame" : "image" : null;
  }
  function le(M) {
    if (!M || typeof M != "object") return !1;
    if (fe(M)) {
      const G = String(M.actionGroupId || M.id || "").trim(), f = I().find((W) => String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim() === G);
      return (f == null ? void 0 : f.locked) === !0;
    }
    if (ye(M)) {
      const G = D(M.rasterObjectId || M.id || ""), f = R().find((W) => String((W == null ? void 0 : W.id) || "").trim() === G);
      return (f == null ? void 0 : f.locked) === !0;
    }
    return M.locked === !0;
  }
  function Oe(M = null) {
    const G = Array.isArray(M) ? M : A();
    return G.length > 0 && G.every((f) => le(f));
  }
  function O(M, G) {
    const f = G === !0;
    if (!M || typeof M != "object") return !1;
    if (fe(M)) {
      const W = String(M.actionGroupId || M.id || "").trim(), X = I().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || "").trim() === W);
      return !X || X.locked === f ? !1 : (X.locked = f, !0);
    }
    if (ye(M)) {
      const W = D(M.rasterObjectId || M.id || ""), X = R().find((ge) => String((ge == null ? void 0 : ge.id) || "").trim() === W);
      return !X || X.locked === f ? !1 : (X.locked = f, !0);
    }
    return M.locked === f ? !1 : (M.locked = f, !0);
  }
  function V() {
    if (n) return;
    const M = A();
    if (!M.length) return;
    const G = !Oe(M);
    let f = !1;
    M.forEach((W) => {
      O(W, G) && (f = !0);
    }), f && (ae(), p(), tt(), st(), _e());
  }
  function U(M) {
    ze(), l.selection = null, t.selectedId = (M == null ? void 0 : M.id) || null, t.selectedIds = M != null && M.id ? [M.id] : [], M && re(M) ? s.active.selected_sticker_id = M.id || null : s.active.selected_sticker_id = null, M && E(M) ? s.active.selected_shot_id = M.id || null : M ? E(M) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function be(M, G = null) {
    const f = [], W = /* @__PURE__ */ new Set();
    (Array.isArray(M) ? M : []).forEach((Fe) => {
      const ke = String((Fe == null ? void 0 : Fe.id) || "").trim();
      !ke || W.has(ke) || (W.add(ke), f.push(ke));
    }), t.selectedIds = f, ze(), l.selection = null;
    const X = String(G || "").trim();
    t.selectedId = X && f.includes(X) ? X : f[f.length - 1] || null;
    const ge = Se();
    s.active.selected_sticker_id = ge && re(ge) && ge.id || null, ge && E(ge) ? s.active.selected_shot_id = ge.id || null : f.length || (s.active.selected_shot_id = null);
  }
  function L() {
    const M = (Array.isArray(s.shots) ? s.shots : []).map((f, W) => ({
      kind: "frame",
      item: f,
      label: String((f == null ? void 0 : f.label) || `Frame ${W + 1}`)
    })), G = b().map((f, W) => {
      var ge, Fe;
      const X = B(f) ? String(f.id || dp) : String(((Fe = (ge = s.assets) == null ? void 0 : ge[f.asset_id]) == null ? void 0 : Fe.name) || f.asset_id || f.id || `Image ${W + 1}`);
      return {
        kind: "image",
        item: f,
        label: X
      };
    });
    return [...M, ...G];
  }
  function Y(M) {
    return M === "frame" ? Ke.camera : M === "stroke" ? Ke.paintbrush_vertical_tool : Ke.image;
  }
  function ee(M) {
    return !M || !M.item ? {
      label: String((M == null ? void 0 : M.label) || ""),
      icon: null
    } : {
      label: String(M.label || ""),
      icon: Y(M.kind)
    };
  }
  function Q() {
    if (n) return;
    const M = Se();
    !M || !B(M) || (M.visible = te(M), He(), Me(), ae(), p(), st(), tt(), _e());
  }
  function ne() {
    if (n || u !== "stickers") return;
    const M = Se();
    if (!M || !B(M)) return;
    const G = M.initial_pose;
    if (!G || typeof G != "object") return;
    M.yaw_deg = Number(G.yaw_deg ?? M.yaw_deg ?? 0), M.pitch_deg = Number(G.pitch_deg ?? M.pitch_deg ?? 0), M.hFOV_deg = Number(G.hFOV_deg ?? M.hFOV_deg ?? 30);
    const f = $(bc, () => {
      _e();
    });
    f && (f.complete || f.naturalWidth || f.width) ? M.vFOV_deg = g(
      Number(G.hFOV_deg ?? M.hFOV_deg ?? 30),
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    ) : M.vFOV_deg = Number(G.vFOV_deg ?? M.vFOV_deg ?? 30), M.rot_deg = Number(G.rot_deg ?? M.rot_deg ?? 0), ae(), p(), st(), tt(), _e();
  }
  function q(M) {
    if (!M || !B(M)) return null;
    const G = M.initial_pose;
    if (!G || typeof G != "object") return null;
    const f = {
      yaw_deg: Number(G.yaw_deg ?? M.yaw_deg ?? 0),
      pitch_deg: Number(G.pitch_deg ?? M.pitch_deg ?? 0),
      hFOV_deg: Number(G.hFOV_deg ?? M.hFOV_deg ?? 30),
      vFOV_deg: Number(G.vFOV_deg ?? M.vFOV_deg ?? 30),
      rot_deg: Number(G.rot_deg ?? M.rot_deg ?? 0)
    }, W = $(bc, () => {
      _e();
    });
    return W && (W.complete || W.naturalWidth || W.width) && (f.vFOV_deg = g(
      f.hFOV_deg,
      Number(W.naturalWidth || W.width || 1),
      Number(W.naturalHeight || W.height || 1)
    )), f;
  }
  function ie() {
    const M = Se();
    if (!M || !B(M)) return !1;
    const G = q(M);
    if (!G) return !1;
    const f = (W, X) => Math.abs(Number(W || 0) - Number(X || 0)) <= 1e-4;
    return !(f(M.yaw_deg, G.yaw_deg) && f(M.pitch_deg, G.pitch_deg) && f(M.hFOV_deg, G.hFOV_deg) && f(M.vFOV_deg, G.vFOV_deg) && f(M.rot_deg, G.rot_deg));
  }
  function oe(M = {}) {
    const f = M.preservePanelValues !== !1 ? T(Se()) : null;
    f && (t.panelLastValues = {
      yaw_deg: Number(f.yaw_deg || 0),
      pitch_deg: Number(f.pitch_deg || 0),
      hFOV_deg: Number(f.hFOV_deg || (u === "stickers" ? 30 : 90)),
      vFOV_deg: Number(f.vFOV_deg || (u === "stickers" ? 30 : 60)),
      rot_deg: Number(f.rot_deg || 0),
      roll_deg: Number(f.roll_deg || 0),
      aspect_id: gi(f)
    }), t.selectedId = null, t.selectedIds = [], ze(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function Ne() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((M) => M.id === t.worldSelectedId && M.placement === "world") || null;
  }
  function Ve(M) {
    U(null), t.worldSelectedId = M, r.backgroundDirty = !0;
  }
  function ze() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, r.backgroundDirty = !0);
  }
  function Ze(M) {
    return !!M && !n && !M.locked;
  }
  function ot() {
    if (u !== "cutout") return;
    const M = x();
    M && (t.selectedId = String(M.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function He() {
    var G;
    const M = Se();
    (Ae(M) && !je(M) || t.selectedId === sc && H() && !h() || We() === "stroke" && !J()) && U(null), ((G = Ne()) == null ? void 0 : G.visible) === !1 && ze();
  }
  function Ye() {
    if (n) return;
    const M = A();
    if (!Se() || M.length === 0 || M.some((ke) => le(ke))) return;
    xe();
    const f = k(), W = new Set(M.map((ke) => re(ke) ? `sticker:${String(ke.id || "")}` : ye(ke) ? `rasterObject:${D(ke.rasterObjectId || ke.id || "")}` : `strokeGroup:${String(ke.actionGroupId || ke.id || "")}`)), X = [], ge = [];
    if (f.forEach((ke) => {
      var et, F;
      const nt = ke.type === "sticker" ? `sticker:${String(((et = ke.item) == null ? void 0 : et.id) || "")}` : ke.type === "rasterObject" ? `rasterObject:${String(((F = ke.item) == null ? void 0 : F.id) || ke.id || "")}` : `strokeGroup:${String(ke.actionGroupId || "")}`;
      W.has(nt) ? X.push(ke) : ge.push(ke);
    }), !X.length || X[X.length - 1] === f[f.length - 1]) return;
    [...ge, ...X].forEach((ke, nt) => {
      ke.type === "sticker" && ke.item && (ke.item.z_index = nt), ke.type === "strokeGroup" && ke.item && (ke.item.z_index = nt), ke.type === "rasterObject" && ke.item && (ke.item.z_index = nt);
    }), Me(), ae(), p(), tt(), _e();
  }
  function gt() {
    if (n) return;
    const M = A();
    if (!Se() || M.length === 0 || M.some((ke) => le(ke))) return;
    xe();
    const f = k(), W = new Set(M.map((ke) => re(ke) ? `sticker:${String(ke.id || "")}` : ye(ke) ? `rasterObject:${D(ke.rasterObjectId || ke.id || "")}` : `strokeGroup:${String(ke.actionGroupId || ke.id || "")}`)), X = [], ge = [];
    if (f.forEach((ke) => {
      var et, F;
      const nt = ke.type === "sticker" ? `sticker:${String(((et = ke.item) == null ? void 0 : et.id) || "")}` : ke.type === "rasterObject" ? `rasterObject:${String(((F = ke.item) == null ? void 0 : F.id) || ke.id || "")}` : `strokeGroup:${String(ke.actionGroupId || "")}`;
      W.has(nt) ? X.push(ke) : ge.push(ke);
    }), !X.length || X[0] === f[0]) return;
    [...X, ...ge].forEach((ke, nt) => {
      ke.type === "sticker" && ke.item && (ke.item.z_index = nt), ke.type === "strokeGroup" && ke.item && (ke.item.z_index = nt), ke.type === "rasterObject" && ke.item && (ke.item.z_index = nt);
    }), Me(), ae(), p(), tt(), _e();
  }
  return {
    connect(M) {
      ({
        cameraShoots: h,
        commitAndRefreshNode: p,
        computeStickerVFov: g,
        cutoutStickers: b,
        getActiveCutoutShot: x,
        getCutoutSelectableItems: S,
        getDisplayListObjects: k,
        getList: N,
        getPaintingGroupList: I,
        getRasterObjectItem: j,
        getRasterObjectList: R,
        getStickerUiImage: $,
        getStrokeGroupItem: v,
        hasCamera: H,
        isExternalSticker: B,
        isRasterObjectItem: ye,
        isSceneSticker: Ae,
        isShotItem: E,
        isStickerHidden: te,
        isStickerItem: re,
        isStrokeGroupItem: fe,
        markObjectVisualsDirty: Me,
        normalizeDisplayZIndices: xe,
        objectGeom: he,
        paintingShown: J,
        parseRasterObjectSelectionId: D,
        poseOf: T,
        pushHistory: ae,
        requestDraw: _e,
        sceneStickerShown: je,
        updateSelectionMenu: tt,
        updateSidePanel: st
      } = M);
    },
    getSelected: Se,
    getSelectedItems: A,
    getMultiSelectionGeom: Te,
    isItemSelected: me,
    getSelectedKind: We,
    isItemLocked: le,
    areAllSelectedItemsLocked: Oe,
    toggleSelectedLock: V,
    setSelectedItem: U,
    setSelectedItems: be,
    getCutoutInspectorItems: L,
    getSelectionItemIcon: Y,
    getSelectionItemLabelData: ee,
    toggleSelectedExternalStickerVisibility: Q,
    restoreSelectedToInitialPose: ne,
    canRestoreSelectedToInitial: ie,
    clearSelection: oe,
    selectedWorldSticker: Ne,
    selectWorldSticker: Ve,
    clearWorldSelection: ze,
    worldStickerEditable: Ze,
    applyInitialCutoutFocus: ot,
    releaseHiddenSelection: He,
    bringSelectedToFront: Ye,
    sendSelectedToBack: gt
  };
}
function PT(e) {
  const {
    backgroundCanvas: t,
    canvas: n,
    editor: r,
    state: i,
    studio: a
  } = e;
  let s, l, u, h, p, g, b = { key: [], projection: null };
  function x() {
    return a && s() && i.camera.projection === "erp";
  }
  function S() {
    const A = ye({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !A || A.length !== 4 ? !1 : A[0].y >= A[3].y;
  }
  function k() {
    return _b({ yaw_deg: r.viewYaw, pitch_deg: r.viewPitch, roll_deg: 0, hFOV_deg: r.viewFov }, n.width, n.height);
  }
  function N() {
    const Se = [r.viewYaw, r.viewPitch, r.viewFov, n.width, n.height];
    return Se.some((A, Te) => A !== b.key[Te]) && (b = { key: Se, projection: Sb(k(), n.width, n.height) }), b.projection;
  }
  function I(Se) {
    const A = N().project(Se);
    return A.z > 1e-4 ? A : null;
  }
  function j(Se, A) {
    return N().ray(Se, A);
  }
  function R() {
    const Se = n.width, A = n.height, Te = 2;
    if (Se / Math.max(A, 1) >= Te) {
      const O = A, V = O * Te;
      return { x: (Se - V) * 0.5, y: 0, w: V, h: O };
    }
    const We = Se, le = We / Te;
    return { x: 0, y: (A - le) * 0.5, w: We, h: le };
  }
  function $(Se) {
    return {
      lon: Math.atan2(Se.x, Se.z),
      lat: Math.asin(ve(Se.y, -1, 1))
    };
  }
  function v(Se, A = null) {
    const { lon: Te, lat: me } = $(Se), We = R();
    let le = We.x + (Te / (2 * Math.PI) + 0.5) * We.w;
    const Oe = We.y + (0.5 - me / Math.PI) * We.h;
    if (A !== null) {
      for (; le - A > We.w / 2; ) le -= We.w;
      for (; le - A < -We.w / 2; ) le += We.w;
    }
    return { x: le, y: Oe, z: 1 };
  }
  function H(Se) {
    const A = h(Se), Te = va(
      Number(A.yaw_deg || 0),
      Number(A.pitch_deg || 0),
      Number(A.rot_deg || A.roll_deg || 0)
    ), me = Math.tan(ve(Number(A.hFOV_deg || 20), 0.1, 179) * 0.5 * Xr), We = Math.tan(ve(Number(A.vFOV_deg || 20), 0.1, 179) * 0.5 * Xr);
    return {
      centerDir: Te.fwd,
      right: Te.right,
      up: Te.up,
      tanX: me,
      tanY: We
    };
  }
  function B(Se, A, Te) {
    return iT(g0(g0(Se.centerDir, y0(Se.right, A)), y0(Se.up, Te)));
  }
  function ye(Se) {
    const A = H(Se);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: me, v: We }) => B(A, me * A.tanX, We * A.tanY));
  }
  function Ae(Se, A, Te) {
    const me = H(Se), We = (A * 2 - 1) * me.tanX, le = (1 - Te * 2) * me.tanY;
    return B(me, We, le);
  }
  function E(Se) {
    const A = t.width / Math.max(1, n.width), Te = t.height / Math.max(1, n.height);
    return { x: Se.x * A, y: Se.y * Te, w: Se.w * A, h: Se.h * Te };
  }
  function te(Se, A = null, Te = null, me = null) {
    if (r.mode === "frame") {
      const We = A || l();
      if (!We) return [];
      const le = Te || u(We);
      return ae(Se, We, le);
    }
    return J(Se, me);
  }
  function re(Se, A = null, Te = null, me = null, We = null) {
    if (!Se) return null;
    if (r.mode === "unwrap") {
      const Oe = J([Se], We);
      return Oe[0] ? { x: Oe[0].x, y: Oe[0].y, z: 1 } : null;
    }
    const le = Me(Se);
    return le ? p(le, A, Te, me) : null;
  }
  function fe(Se, A) {
    if (!Se || !A) return null;
    const Te = Number(A.x || 0), me = Number(A.y || 0);
    return Ae(Se, Te, me);
  }
  function Me(Se) {
    if (!Se) return null;
    const A = (Number(Se.u || 0) - 0.5) * (2 * Math.PI), Te = (0.5 - Number(Se.v || 0)) * Math.PI, me = Math.cos(Te);
    return $c(me * Math.sin(A), Math.sin(Te), me * Math.cos(A));
  }
  function xe(Se, A) {
    if (!Se || !A) return null;
    const Te = H(Se), me = sf(A, Te.centerDir);
    if (!Number.isFinite(me) || me <= 1e-6) return null;
    const We = sf(A, Te.right) / me, le = sf(A, Te.up) / me;
    return {
      x: (We / Math.max(1e-6, Te.tanX) + 1) * 0.5,
      y: (1 - le / Math.max(1e-6, Te.tanY)) * 0.5
    };
  }
  function he(Se) {
    if (!Array.isArray(Se) || Se.length < 3) return [];
    if (r.mode === "unwrap") {
      const Te = R();
      return Se.map((me) => ({
        x: Te.x + Number(me.u || 0) * Te.w,
        y: Te.y + Number(me.v || 0) * Te.h
      }));
    }
    const A = Se.map((Te) => I(Me(Te))).filter(Boolean);
    return A.every((Te) => Number(Te.z || 0) > 0) ? A.map((Te) => ({ x: Number(Te.x || 0), y: Number(Te.y || 0) })) : [];
  }
  function J(Se, A = null) {
    if (!Array.isArray(Se) || Se.length < 1) return [];
    if (r.mode === "unwrap") {
      const me = R();
      return Se.map((We) => {
        const le = (Number(We.u || 0) % 1 + 1) % 1, Oe = A == null ? le : Number(A || 0) + g(le, A);
        return {
          x: me.x + Oe * me.w,
          y: me.y + Number(We.v || 0) * me.h
        };
      });
    }
    const Te = Se.map((me) => I(Me(me))).filter(Boolean);
    return Te.every((me) => Number(me.z || 0) > 0) ? Te.map((me) => ({ x: Number(me.x || 0), y: Number(me.y || 0) })) : [];
  }
  function D(Se, A = 160) {
    if (!Array.isArray(Se) || Se.length < 3) return !1;
    for (let Te = 0; Te < Se.length; Te += 1) {
      const me = Se[Te], We = Se[(Te + 1) % Se.length];
      if (!me || !We || !Number.isFinite(me.x) || !Number.isFinite(me.y) || !Number.isFinite(We.x) || !Number.isFinite(We.y) || Math.hypot(Number(We.x) - Number(me.x), Number(We.y) - Number(me.y)) > A) return !1;
    }
    return !0;
  }
  function T(Se, A, Te) {
    if (!Array.isArray(Se) || Se.length < 3 || !A || !Te) return [];
    const me = [];
    for (const We of Se) {
      const le = Me(We), Oe = xe(A, le);
      if (!Oe) return [];
      me.push({
        x: Number(Te.x || 0) + Number(Oe.x || 0) * Number(Te.w || 0),
        y: Number(Te.y || 0) + Number(Oe.y || 0) * Number(Te.h || 0)
      });
    }
    return D(me, Math.max(80, Math.max(Te.w, Te.h) * 0.75)) ? me : [];
  }
  function ae(Se, A, Te) {
    if (!Array.isArray(Se) || Se.length < 1 || !A || !Te) return [];
    const me = [];
    for (const We of Se) {
      const le = Me(We), Oe = xe(A, le);
      Oe && me.push({
        x: Number(Te.x || 0) + Number(Oe.x || 0) * Number(Te.w || 0),
        y: Number(Te.y || 0) + Number(Oe.y || 0) * Number(Te.h || 0)
      });
    }
    return me;
  }
  function _e(Se) {
    const A = n.getBoundingClientRect();
    return {
      x: (Se.clientX - A.left) / A.width * n.width,
      y: (Se.clientY - A.top) / A.height * n.height
    };
  }
  function je(Se) {
    const A = n.getBoundingClientRect();
    return {
      x: Number(Se.clientX) - Number(A.left || 0),
      y: Number(Se.clientY) - Number(A.top || 0)
    };
  }
  function tt(Se, A = performance.now()) {
    if (r.mode === "unwrap") {
      const le = R(), Oe = (Se.x - le.x) / Math.max(1, le.w), O = (Se.y - le.y) / Math.max(1, le.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Oe % 1 + 1) % 1,
        v: ve(O, 0, 1),
        t: Number(A || 0)
      };
    }
    const Te = j(Se.x, Se.y), { lon: me, lat: We } = $(Te);
    return {
      targetKind: "ERP_GLOBAL",
      u: (me / (2 * Math.PI) + 0.5 + 1) % 1,
      v: ve(0.5 - We / Math.PI, 0, 1),
      t: Number(A || 0)
    };
  }
  function st(Se, A, Te = performance.now()) {
    const me = u(A);
    if (!me) return null;
    const We = {
      x: (Number(Se.x) - me.x) / Math.max(1, me.w),
      y: (Number(Se.y) - me.y) / Math.max(1, me.h)
    };
    if (We.x < 0 || We.x > 1 || We.y < 0 || We.y > 1) return null;
    const le = fe(A, We);
    if (!le) return null;
    const { lon: Oe, lat: O } = $(le);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Oe / (2 * Math.PI) + 0.5 + 1) % 1,
      v: ve(0.5 - O / Math.PI, 0, 1),
      t: Number(Te || 0)
    };
  }
  return {
    connect(Se) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: l,
        getFrameViewRect: u,
        poseOf: h,
        projectSceneItemDir: p,
        shortestWrappedDelta: g
      } = Se);
    },
    isErpCamera: x,
    currentViewCamera: k,
    currentViewProjection: N,
    projectDir: I,
    screenToWorldDir: j,
    getUnwrapRect: R,
    projectDirUnwrap: v,
    getStickerFrame: H,
    stickerDirFromFrame: B,
    stickerCornersDir: ye,
    stickerSampleDir: Ae,
    stickerCornerOrderSanity: S,
    projectEditorPoints: te,
    projectErpPointToEditor: re,
    frameLocalPointToWorldDir: fe,
    erpPointToWorldDir: Me,
    worldDirToFrameLocalPoint: xe,
    projectLassoPointsToCurrentView: he,
    projectErpLassoPointsToFrameRect: T,
    screenPos: _e,
    screenPosCss: je,
    screenPosToErpPoint: tt,
    screenPosToFrameAsErpPoint: st,
    deviceRect: E
  };
}
function AT(e) {
  const {
    cameraV2: t,
    canvas: n,
    editor: r,
    state: i
  } = e;
  let a, s, l, u, h, p, g, b, x, S, k, N, I, j, R, $, v, H, B, ye, Ae, E, te, re, fe, Me, xe, he, J, D, T, ae;
  function _e(le, Oe) {
    const O = String(le.actionGroupId || le.id || "").trim(), V = R(O, le.layerKind), U = l(O, le.layerKind, V), be = (U == null ? void 0 : U.centerUv) || j(O, le.layerKind, V), L = r.mode === "unwrap" ? Number((be == null ? void 0 : be.u) || 0) : null, Y = [], ee = r.mode === "frame" ? u() : null, Q = ee ? g(ee) : null;
    for (const He of V) {
      const Ye = (He == null ? void 0 : He.geometry) || null, gt = (Ye == null ? void 0 : Ye.geometryKind) === "lasso_fill" ? Ye == null ? void 0 : Ye.points : (Ye == null ? void 0 : Ye.processedPoints) || (Ye == null ? void 0 : Ye.rawPoints) || (Ye == null ? void 0 : Ye.points) || [], M = Me(gt, ee, Q, L).filter((W) => Number.isFinite(W == null ? void 0 : W.x) && Number.isFinite(W == null ? void 0 : W.y));
      if (!M.length) continue;
      const G = h(String((He == null ? void 0 : He.toolKind) || "pen")), f = Yn[G] || Yn[fi];
      Y.push({
        points: M,
        closed: String((Ye == null ? void 0 : Ye.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((He == null ? void 0 : He.size) || 10) * Math.max(0.1, Number((f == null ? void 0 : f.sizeScale) ?? 1)) + 10),
        layerKind: String((He == null ? void 0 : He.layerKind) || le.layerKind || "paint")
      });
    }
    const ne = xe(be, null, ee, Q, L);
    if (!ne) {
      const He = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Oe, He), He;
    }
    const ie = p(U).map((He) => xe(He, ne.x, ee, Q, L)).filter((He) => Number.isFinite(He == null ? void 0 : He.x) && Number.isFinite(He == null ? void 0 : He.y)).map((He) => ({ x: Number(He.x || 0), y: Number(He.y || 0) }));
    if (ie.length < 4) {
      const He = { visible: !1, kind: "strokeGroup" };
      return r._strokeGeomCache.set(Oe, He), He;
    }
    const oe = (He, Ye) => ({
      x: (Number((He == null ? void 0 : He.x) || 0) + Number((Ye == null ? void 0 : Ye.x) || 0)) * 0.5,
      y: (Number((He == null ? void 0 : He.y) || 0) + Number((Ye == null ? void 0 : Ye.y) || 0)) * 0.5,
      a: He,
      b: Ye
    }), Ne = oe(ie[0], ie[1]), Ve = oe(ie[1], ie[2]), ze = oe(ie[2], ie[3]), Ze = oe(ie[3], ie[0]), ot = {
      kind: "strokeGroup",
      center: { x: Number(ne.x || 0), y: Number(ne.y || 0) },
      corners: ie,
      edgeMidpoints: [
        { edge: "top", ...Ne },
        { edge: "right", ...Ve },
        { edge: "bottom", ...ze },
        { edge: "left", ...Ze }
      ],
      rotateStemBase: { x: Ne.x, y: Ne.y },
      rotateHandle: { x: Ne.x, y: Ne.y - 30 },
      strokePaths: Y,
      visible: !0
    };
    return r._strokeGeomCache.set(Oe, ot), ot;
  }
  function je(le, Oe) {
    const O = r.mode === "frame" ? u() : null, V = O ? g(O) : null, U = b(le), be = r.mode === "unwrap" ? Number((U == null ? void 0 : U.u) || 0) : null, L = xe(U, null, O, V, be), ee = S(le).map((ie) => xe(ie, (L == null ? void 0 : L.x) ?? null, O, V, be)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y));
    if (!Array.isArray(ee) || ee.length < 4) {
      const ie = { visible: !1, kind: "rasterObject" };
      return r._strokeGeomCache.set(Oe, ie), ie;
    }
    const Q = ee.slice(0, 4).map((ie) => ({ x: Number((ie == null ? void 0 : ie.x) || 0), y: Number((ie == null ? void 0 : ie.y) || 0) })), q = {
      kind: "rasterObject",
      center: {
        x: Q.reduce((ie, oe) => ie + Number(oe.x || 0), 0) / Q.length,
        y: Q.reduce((ie, oe) => ie + Number(oe.y || 0), 0) / Q.length
      },
      corners: Q,
      visible: !0
    };
    return r._strokeGeomCache.set(Oe, q), q;
  }
  function tt(le, Oe = null, O = null, V = null, U = {}) {
    if (r.mode === "frame") {
      const ne = O || u(), q = V || g(ne);
      if (!ne || !q) return null;
      const ie = ne ? ae(ne, le) : null;
      return ie ? {
        x: Number(q.x || 0) + Number(ie.x || 0) * Number(q.w || 0),
        y: Number(q.y || 0) + Number(ie.y || 0) * Number(q.h || 0),
        z: 1
      } : null;
    }
    if (r.mode === "unwrap") return fe(le, Oe);
    const be = 1e-4, L = a().project(le, be);
    if (!Number.isFinite(L.z) || L.z <= be && !(U != null && U.clipBehind)) return null;
    const Y = n.width, ee = n.height, Q = Math.max(Y, ee) * 2;
    return {
      x: ve(L.x, -Q, Y + Q),
      y: ve(L.y, -Q, ee + Q),
      z: Math.max(L.z, be),
      rawZ: L.z,
      clipped: L.z <= be
    };
  }
  function st(le, Oe = []) {
    if (r.mode !== "pano" || ye(le)) return 1;
    const O = Oe.map((V) => Number((V == null ? void 0 : V.rawZ) ?? (V == null ? void 0 : V.z))).filter((V) => Number.isFinite(V));
    return O.length ? nT(0.035, 0.2, Math.min(...O)) : 1;
  }
  function Se(le) {
    if (H(le) && !he(le)) return { visible: !1 };
    const Oe = te(le), O = qn(Number(Oe.yaw_deg || 0), Number(Oe.pitch_deg || 0)), V = r.mode === "frame" ? u() : null, U = V ? g(V) : null, be = r.mode === "pano" && (ye(le) || B(le)), L = be ? { clipBehind: !0 } : null, Y = tt(O, null, V, U, L);
    if (!Y) return { visible: !1 };
    const ee = N(le), ne = J(le).map((X) => tt(X, Y.x, V, U, L)).filter((X) => Number.isFinite(X == null ? void 0 : X.x) && Number.isFinite(X == null ? void 0 : X.y));
    if (ne.length < 4) return { visible: !1 };
    const q = D(ee, 0, ee.tanY), ie = D(ee, 0, ee.tanY + Math.max(ee.tanY * 0.43, 0.053)), oe = tt(q, Y.x, V, U, L);
    if (!oe) return { visible: !1 };
    const Ne = tt(ie, (oe == null ? void 0 : oe.x) ?? Y.x, V, U, L), Ve = ((Ne == null ? void 0 : Ne.x) ?? oe.x) - oe.x, ze = ((Ne == null ? void 0 : Ne.y) ?? oe.y) - oe.y, Ze = Math.hypot(Ve, ze) || 1, ot = {
      x: oe.x + Ve / Ze * 30,
      y: oe.y + ze / Ze * 30
    }, He = tt(D(ee, 0, ee.tanY), Y.x, V, U, L), Ye = tt(D(ee, ee.tanX, 0), Y.x, V, U, L), gt = tt(D(ee, 0, -ee.tanY), Y.x, V, U, L), M = tt(D(ee, -ee.tanX, 0), Y.x, V, U, L);
    if (!He || !Ye || !gt || !M) return { visible: !1 };
    const G = [
      Y,
      ...ne,
      oe,
      Ne,
      He,
      Ye,
      gt,
      M
    ];
    if (be && !G.some((X) => Number((X == null ? void 0 : X.rawZ) ?? (X == null ? void 0 : X.z)) > 1e-4)) return { visible: !1 };
    const f = st(le, G), W = [
      {
        edge: "top",
        x: He.x,
        y: He.y,
        a: { x: ne[0].x, y: ne[0].y },
        b: { x: ne[1].x, y: ne[1].y }
      },
      {
        edge: "right",
        x: Ye.x,
        y: Ye.y,
        a: { x: ne[1].x, y: ne[1].y },
        b: { x: ne[2].x, y: ne[2].y }
      },
      {
        edge: "bottom",
        x: gt.x,
        y: gt.y,
        a: { x: ne[2].x, y: ne[2].y },
        b: { x: ne[3].x, y: ne[3].y }
      },
      {
        edge: "left",
        x: M.x,
        y: M.y,
        a: { x: ne[3].x, y: ne[3].y },
        b: { x: ne[0].x, y: ne[0].y }
      }
    ];
    return {
      center: { x: Y.x, y: Y.y },
      corners: ne.map((X) => ({ x: X.x, y: X.y })),
      edgeMidpoints: W,
      rotateStemBase: { x: oe.x, y: oe.y },
      rotateHandle: ot,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: f,
      visible: !0
    };
  }
  function A(le) {
    if (t && B(le) && $()) return { visible: !1 };
    if (!E() && (Ae(le) || v(le))) return { visible: !1 };
    if (Ae(le)) {
      const U = String(le.actionGroupId || le.id || "").trim(), be = I(U, le.layerKind), L = r._strokeGeomCache.get(be);
      return L || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), _e(le, be));
    }
    if (v(le)) {
      const U = x(le), be = r._strokeGeomCache.get(U);
      return be || (r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear(), je(le, U));
    }
    const Oe = k(le), O = r._strokeGeomCache.get(Oe);
    if (O) return O;
    r._strokeGeomCache.size > 256 && r._strokeGeomCache.clear();
    const V = Se(le);
    return r._strokeGeomCache.set(Oe, V), V;
  }
  function Te(le, Oe, O, V = null) {
    const U = [];
    for (let be = 0; be <= O; be += 1) {
      const L = be / O;
      let Y = 0, ee = 0;
      Oe === 0 ? (Y = L, ee = 0) : Oe === 1 ? (Y = 1, ee = L) : Oe === 2 ? (Y = 1 - L, ee = 1) : (Y = 0, ee = 1 - L);
      const Q = T(le, Y, ee), ne = r.mode === "unwrap" ? fe(Q, V) : re(Q);
      ne && U.push(ne);
    }
    return U;
  }
  function me() {
    const le = [...Array.isArray(i.shots) ? i.shots : []], Oe = [...s()].sort((O, V) => Number(O.z_index || 0) - Number(V.z_index || 0));
    return [...le, ...Oe];
  }
  function We() {
    const le = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((O, V) => Number(V.z_index || 0) - Number(O.z_index || 0)), ...le];
  }
  return {
    connect(le) {
      ({
        currentViewProjection: a,
        cutoutStickers: s,
        ensureGroupFrame: l,
        getActiveCutoutShot: u,
        getBrushPresetIdForTool: h,
        getFrameCornersUv: p,
        getFrameViewRect: g,
        getRasterObjectCenterUv: b,
        getRasterObjectGeomCacheKey: x,
        getRasterObjectTransformedErpPoints: S,
        getSceneItemGeomCacheKey: k,
        getStickerFrame: N,
        getStrokeGeomCacheKey: I,
        getStrokeGroupCenterUv: j,
        getStrokeGroupStrokes: R,
        isFreeSpaceView: $,
        isRasterObjectItem: v,
        isSceneSticker: H,
        isShotItem: B,
        isStickerItem: ye,
        isStrokeGroupItem: Ae,
        paintingShown: E,
        poseOf: te,
        projectDir: re,
        projectDirUnwrap: fe,
        projectEditorPoints: Me,
        projectErpPointToEditor: xe,
        sceneStickerShown: he,
        stickerCornersDir: J,
        stickerDirFromFrame: D,
        stickerSampleDir: T,
        worldDirToFrameLocalPoint: ae
      } = le);
    },
    projectSceneItemDir: tt,
    objectGeom: A,
    sampleStickerEdge: Te,
    getCutoutSelectableItemsForDisplay: me,
    getCutoutSelectableItemsForHit: We
  };
}
const bl = /* @__PURE__ */ new Map();
function CT(e) {
  const {
    api: t,
    cutoutV2: n,
    editor: r,
    node: i,
    rasterErpCanvasCache: a,
    rasterImageAlphaCache: s,
    rasterImageCache: l,
    state: u
  } = e;
  let h, p, g, b, x, S, k, N, I, j, R, $, v, H, B, ye, Ae, E, te, re;
  function fe(L = r.interaction) {
    const Y = String((L == null ? void 0 : L.kind) || "");
    if (Y === "paint_stroke" || Y === "paint_lasso_fill" || Y === "move_stroke_group" || Y === "scale_stroke_group" || Y === "rotate_stroke_group" || Y === "move_raster_object" || Y === "scale_raster_object") return !0;
    if (Y === "move_multi") {
      const ee = Array.isArray(L == null ? void 0 : L.strokeSnapshots) && L.strokeSnapshots.length > 0, Q = Array.isArray(L == null ? void 0 : L.rasterSnapshots) && L.rasterSnapshots.length > 0;
      return ee || Q;
    }
    return !1;
  }
  function Me() {
    var Y, ee, Q, ne;
    let L = null;
    try {
      const q = N(), ie = ((ne = (Q = (ee = (Y = r.paintEngine) == null ? void 0 : Y.getErpTarget) == null ? void 0 : ee.call(Y, q)) == null ? void 0 : Q.displayPaint) == null ? void 0 : ne.canvas) || null;
      ie && (L = {
        source: ie,
        revision: `${I()}:${xe()}`
      });
    } catch {
      L = null;
    }
    return L;
  }
  function xe() {
    var ne, q, ie, oe, Ne, Ve, ze;
    const L = r.interaction, Y = String((L == null ? void 0 : L.kind) || "");
    if (!fe(L)) return "";
    if (Y === "paint_stroke" || Y === "paint_lasso_fill") {
      const Ze = ((ne = L == null ? void 0 : L.stroke) == null ? void 0 : ne.geometry) || null, ot = String(((q = L == null ? void 0 : L.stroke) == null ? void 0 : q.layerKind) || ""), He = ((ie = Ze == null ? void 0 : Ze.rawPoints) == null ? void 0 : ie.length) ?? ((oe = Ze == null ? void 0 : Ze.points) == null ? void 0 : oe.length) ?? 0, Ye = String((L == null ? void 0 : L._livePreviewToken) || "");
      return `_${ot || "paint"}_${Y}_live${Ye}_${He}_${r.livePaintInteractionRevision}`;
    }
    const ee = String(((Ne = L == null ? void 0 : L.item) == null ? void 0 : Ne.actionGroupId) || ""), Q = String(((Ve = L == null ? void 0 : L.item) == null ? void 0 : Ve.rasterObjectId) || ((ze = L == null ? void 0 : L.item) == null ? void 0 : ze.id) || "");
    return `_${Y}_${ee || Q || "active"}_${r.livePaintInteractionRevision}`;
  }
  function he(L, Y = null) {
    const ee = String((L == null ? void 0 : L.rasterDataUrl) || "").trim();
    if (!ee) return null;
    const Q = l.get(ee);
    if (Q)
      return Q.complete || Q.width || Q.naturalWidth, Q;
    const ne = new Image();
    return ne.onload = () => {
      typeof Y == "function" && Y();
    }, ne.src = ee, l.set(ee, ne), ne;
  }
  function J(L) {
    const Y = String((L == null ? void 0 : L.rasterDataUrl) || "").trim();
    if (!Y) return null;
    const ee = s.get(Y);
    if (ee) return ee.ready ? ee : null;
    const Q = he(L, () => {
      const ze = s.get(Y);
      ze && (ze.ready = !1), E({ localOnly: !0 });
    });
    if (!Q || !(Q.complete || Q.width || Q.naturalWidth)) return null;
    const ne = Number(Q.naturalWidth || Q.width || 0), q = Number(Q.naturalHeight || Q.height || 0);
    if (ne < 1 || q < 1) return null;
    const ie = En({ label: "editor.image-pixels" });
    ie.width = ne, ie.height = q;
    const oe = ie.getContext("2d", { willReadFrequently: !0 });
    if (!oe) return null;
    oe.clearRect(0, 0, ne, q), oe.drawImage(Q, 0, 0, ne, q);
    const Ne = oe.getImageData(0, 0, ne, q).data, Ve = { canvas: ie, width: ne, height: q, alpha: Ne, ready: !0 };
    return s.set(Y, Ve), Ve;
  }
  function D(L, Y) {
    if (!L || !Y) return null;
    const ee = (L == null ? void 0 : L.bbox) || null;
    if (!ee) return null;
    const Q = (L == null ? void 0 : L.transform) || {}, ne = {
      u: (Number(ee.u0 || 0) + Number(ee.u1 || 0)) * 0.5,
      v: (Number(ee.v0 || 0) + Number(ee.v1 || 0)) * 0.5
    }, q = {
      u: ((Number(Y.u || 0) - Number(Q.du || 0)) % 1 + 1) % 1,
      v: Number(Y.v || 0) - Number(Q.dv || 0)
    }, ie = $(
      q,
      ne,
      Number(Q.scale || 1),
      Number(Q.rot_deg || 0)
    ), oe = Number(ee.u1 || 0) - Number(ee.u0 || 0), Ne = Number(ee.v1 || 0) - Number(ee.v0 || 0);
    if (!(oe > 1e-6) || !(Ne > 1e-6)) return null;
    const Ve = re(Number(ie.u || 0), Number(ee.u0 || 0)) / oe, ze = (Number(ie.v || 0) - Number(ee.v0 || 0)) / Ne;
    if (Ve < 0 || Ve > 1 || ze < 0 || ze > 1) return 0;
    const Ze = J(L);
    if (!Ze) return null;
    const ot = ve(Math.floor(Ve * Ze.width), 0, Ze.width - 1), He = ve(Math.floor(ze * Ze.height), 0, Ze.height - 1);
    return Number(Ze.alpha[(He * Ze.width + ot) * 4 + 3] || 0);
  }
  function T(L, Y, ee, Q = null) {
    if (!(Y != null && Y.visible) || !Ei(ee, Y.corners)) return !1;
    const ne = Q || te(ee, performance.now()), q = D(L, ne);
    return q === null ? !0 : q > 8;
  }
  function ae() {
    var Q, ne, q, ie, oe, Ne, Ve, ze;
    const L = ((ne = (Q = r.paintEngine) == null ? void 0 : Q.getErpTarget) == null ? void 0 : ne.call(Q, N(!1))) || null, Y = Math.max(1, Number(((q = L == null ? void 0 : L.descriptor) == null ? void 0 : q.width) || ((oe = (ie = L == null ? void 0 : L.displayPaint) == null ? void 0 : ie.canvas) == null ? void 0 : oe.width) || 2048)), ee = Math.max(1, Number(((Ne = L == null ? void 0 : L.descriptor) == null ? void 0 : Ne.height) || ((ze = (Ve = L == null ? void 0 : L.displayPaint) == null ? void 0 : Ve.canvas) == null ? void 0 : ze.height) || 1024));
    return { width: Y, height: ee };
  }
  function _e() {
    var He, Ye, gt;
    const L = r.interaction;
    if ((L == null ? void 0 : L.kind) !== "paint_stroke") return null;
    const Y = (L == null ? void 0 : L.stroke) || null;
    if (!Y || String((Y == null ? void 0 : Y.layerKind) || "") !== "paint" || String((Y == null ? void 0 : Y.toolKind) || "") !== "eraser") return null;
    const ee = b(), Q = `${xe()}:${ee.width}:${ee.height}`;
    if (((He = r._activePaintEraserPreviewInfo) == null ? void 0 : He.cacheKey) === Q)
      return r._activePaintEraserPreviewInfo.value || null;
    const ne = An(Y), q = (ne == null ? void 0 : ne.geometry) || null;
    if (q && String(q.geometryKind || "") !== "lasso_fill") {
      const M = Array.isArray(q.rawPoints) && q.rawPoints.length ? q.rawPoints : Array.isArray(q.points) ? q.points : [];
      q.processedPoints = B(M, ne.targetSpace, !0);
    }
    const ie = p(ee.width, ee.height, { readback: !0 });
    if (!ye(ie, ne, { w: ee.width, h: ee.height })) return null;
    const oe = ((gt = (Ye = ie.ctx) == null ? void 0 : Ye.getImageData(0, 0, ee.width, ee.height)) == null ? void 0 : gt.data) || null;
    if (!oe) return null;
    let Ne = ee.width, Ve = ee.height, ze = -1, Ze = -1;
    for (let M = 0; M < ee.height; M += 1)
      for (let G = 0; G < ee.width; G += 1)
        oe[(M * ee.width + G) * 4 + 3] <= 8 || (G < Ne && (Ne = G), M < Ve && (Ve = M), G > ze && (ze = G), M > Ze && (Ze = M));
    if (ze < Ne || Ze < Ve)
      return r._activePaintEraserPreviewInfo = { cacheKey: Q, value: null }, null;
    const ot = {
      surface: ie,
      bounds: { minX: Ne, minY: Ve, maxX: ze, maxY: Ze },
      key: `${Q}:${Ne}:${Ve}:${ze}:${Ze}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: Q, value: ot }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), ot;
  }
  function je() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function tt(L, Y, ee) {
    var Q, ne;
    if (!L) return null;
    if (L.type === "rasterObject" && ((Q = L.item) != null && Q.bbox)) {
      const q = L.item.bbox, ie = ((ne = L.item) == null ? void 0 : ne.transform) || {}, oe = Number(q.u0 || 0) + Number(ie.du || 0), Ne = Number(q.u1 || 0) + Number(ie.du || 0), Ve = Number(q.v0 || 0) + Number(ie.dv || 0), ze = Number(q.v1 || 0) + Number(ie.dv || 0);
      return {
        minX: Math.floor((oe % 1 + 1) % 1 * Y),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * Y),
        minY: Math.floor(ve(Ve, 0, 1) * ee),
        maxY: Math.ceil(ve(ze, 0, 1) * ee),
        wraps: Ne - oe >= 1 || oe < 0 || Ne > 1
      };
    }
    if (L.type === "strokeGroup") {
      const q = R(L.actionGroupId, "paint"), ie = g(L.actionGroupId, "paint", q);
      if (!ie) return null;
      const oe = ie.centerUv.u - ie.halfW, Ne = ie.centerUv.u + ie.halfW, Ve = ie.centerUv.v - ie.halfH, ze = ie.centerUv.v + ie.halfH;
      return {
        minX: Math.floor((oe % 1 + 1) % 1 * Y),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * Y),
        minY: Math.floor(ve(Ve, 0, 1) * ee),
        maxY: Math.ceil(ve(ze, 0, 1) * ee),
        wraps: Ne - oe >= 1 || oe < 0 || Ne > 1
      };
    }
    return null;
  }
  function st(L, Y, ee) {
    if (!L || !Y) return !1;
    const Q = (ie) => ie.wraps ? [
      { minX: 0, maxX: ie.maxX, minY: ie.minY, maxY: ie.maxY, wraps: !1 },
      { minX: ie.minX, maxX: ee - 1, minY: ie.minY, maxY: ie.maxY, wraps: !1 }
    ] : [ie], ne = Q(L), q = Q(Y);
    return ne.some((ie) => q.some((oe) => !(ie.maxX < oe.minX || oe.maxX < ie.minX || ie.maxY < oe.minY || oe.maxY < ie.minY)));
  }
  function Se(L, Y, ee) {
    var X, ge, Fe, ke, nt, et, F;
    if (!L || !Y || !((X = ee == null ? void 0 : ee.surface) != null && X.canvas) || Y.type !== "rasterObject") return L;
    const Q = Number(L.width || ee.surface.canvas.width || 0), ne = Number(L.height || ee.surface.canvas.height || 0);
    if (Q < 1 || ne < 1) return L;
    const q = tt(Y, Q, ne);
    if (q && !st(q, ee.bounds, Q)) return L;
    const ie = String(((ge = Y.item) == null ? void 0 : ge.id) || Y.id || ""), oe = ((Fe = Y.item) == null ? void 0 : Fe.transform) || {}, Ne = `${ee.key}:${ie}:${Q}:${ne}:${Number(oe.du || 0).toFixed(6)}:${Number(oe.dv || 0).toFixed(6)}:${Number(oe.rot_deg || 0).toFixed(3)}:${Number(oe.scale || 1).toFixed(4)}`, Ve = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (Ve.has(Ne)) return Ve.get(Ne);
    const ze = ve(Math.floor(Number(((ke = ee.bounds) == null ? void 0 : ke.minX) || 0)), 0, Math.max(0, Q - 1)), Ze = ve(Math.floor(Number(((nt = ee.bounds) == null ? void 0 : nt.minY) || 0)), 0, Math.max(0, ne - 1)), ot = ve(Math.ceil(Number(((et = ee.bounds) == null ? void 0 : et.maxX) || 0)), ze, Math.max(0, Q - 1)), He = ve(Math.ceil(Number(((F = ee.bounds) == null ? void 0 : F.maxY) || 0)), Ze, Math.max(0, ne - 1)), Ye = Math.max(1, ot - ze + 1), gt = Math.max(1, He - Ze + 1), M = p(Q, ne, { readback: !0 });
    M.ctx.clearRect(0, 0, Q, ne), M.ctx.drawImage(L, 0, 0);
    const G = M.ctx.getImageData(ze, Ze, Ye, gt);
    M.ctx.save(), M.ctx.globalCompositeOperation = "destination-out", M.ctx.drawImage(ee.surface.canvas, 0, 0), M.ctx.restore();
    const f = M.ctx.getImageData(ze, Ze, Ye, gt);
    let W = !1;
    for (let de = 0; de < Ye * gt; de += 1) {
      const ce = G.data[de * 4 + 3], Ie = f.data[de * 4 + 3];
      if (ce > Ie) {
        W = !0;
        break;
      }
    }
    return W ? (Ve.size > 64 && Ve.clear(), Ve.set(Ne, M.canvas), M.canvas) : (Ve.set(Ne, L), L);
  }
  function A(L, Y = null) {
    const ee = H((L == null ? void 0 : L.rasterObjectId) || (L == null ? void 0 : L.id) || ""), Q = (L == null ? void 0 : L.bbox) || null;
    if (!ee || !Q) return null;
    const ne = he(L, Y);
    if (!ne || !(ne.complete || ne.width || ne.naturalWidth)) return null;
    const { width: q, height: ie } = ae(), oe = (L == null ? void 0 : L.transform) || {}, Ne = [
      ee,
      q,
      ie,
      Q.u0,
      Q.v0,
      Q.u1,
      Q.v1,
      oe.du,
      oe.dv,
      oe.rot_deg,
      oe.scale,
      j()
    ].join(":"), Ve = a.get(Ne);
    if (Ve) return Ve;
    a.size > 64 && a.clear();
    const ze = En({ label: "editor.raster-erp" });
    ze.width = q, ze.height = ie;
    const Ze = ze.getContext("2d");
    if (!Ze) return null;
    const ot = Number(Q.u0 || 0) * q, He = Number(Q.v0 || 0) * ie, Ye = Math.max(1, (Number(Q.u1 || 0) - Number(Q.u0 || 0)) * q), gt = Math.max(1, (Number(Q.v1 || 0) - Number(Q.v0 || 0)) * ie), M = ot + Ye * 0.5 + Number(oe.du || 0) * q, G = He + gt * 0.5 + Number(oe.dv || 0) * ie, f = Number(oe.rot_deg || 0) * Xr, W = Math.max(0.01, Number(oe.scale || 1));
    for (const X of [-q, 0, q])
      Ze.save(), Ze.translate(M + X, G), Ze.rotate(f), Ze.scale(W, W), Ze.drawImage(ne, -Ye * 0.5, -gt * 0.5, Ye, gt), Ze.restore();
    return a.set(Ne, ze), ze;
  }
  async function Te(L, Y) {
    const ee = await new Promise((oe) => L.toBlob(oe, "image/png")), Q = new FormData();
    Q.append("image", ee, Y), Q.append("type", "input"), Q.append("subfolder", "panorama_stickers"), Q.append("overwrite", "1");
    const ne = await t.fetchApi("/upload/image", { method: "POST", body: Q });
    if (!ne || ne.status !== 200) throw new Error(`upload failed (${ne == null ? void 0 : ne.status})`);
    const q = await ne.json(), ie = String((q == null ? void 0 : q.name) || "").trim();
    if (!ie) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: ie,
      subfolder: String((q == null ? void 0 : q.subfolder) || "panorama_stickers"),
      storage: String((q == null ? void 0 : q.type) || "input")
    };
  }
  let me = null, We = !1;
  function le() {
    if (n) return !1;
    const L = b0(u.painting), { width: Y, height: ee } = x();
    return uN(u.painting_layer, { paintCount: L.totalPaintCount, maskCount: L.totalMaskCount, width: Y, height: ee, nodeId: String(i.id ?? "0") });
  }
  function Oe() {
    const L = String(i.id ?? "0"), Y = bl.get(L);
    if (We && Y) return Y;
    const ee = (async () => {
      var q, ie, oe, Ne, Ve, ze, Ze, ot, He, Ye, gt, M;
      const Q = I(), ne = b0(u.painting);
      if (ne.totalPaintCount <= 0 && ne.totalMaskCount <= 0) {
        u.painting_layer !== null && (u.painting_layer = null, me = Q, h());
        return;
      }
      if (me !== Q && !We) {
        We = !0;
        try {
          Ae();
          const G = N(!1), f = ((ie = (q = r.paintEngine) == null ? void 0 : q.getErpTarget) == null ? void 0 : ie.call(q, G)) || null, W = ((oe = f == null ? void 0 : f.displayPaint) == null ? void 0 : oe.canvas) || null, X = ((Ne = f == null ? void 0 : f.committedMask) == null ? void 0 : Ne.canvas) || null, ge = Math.max(1, Number(((Ve = f == null ? void 0 : f.descriptor) == null ? void 0 : Ve.width) || (W == null ? void 0 : W.width) || (X == null ? void 0 : X.width) || 2048)), Fe = Math.max(1, Number(((ze = f == null ? void 0 : f.descriptor) == null ? void 0 : ze.height) || (W == null ? void 0 : W.height) || (X == null ? void 0 : X.height) || 1024));
          (!W && ne.totalPaintCount > 0 || !X && ne.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((Ze = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Ze.width) || 0) !== ge || Number(((ot = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ot.height) || 0) !== Fe) && (r._paintLayerSyncBlankSurface = p(ge, Fe)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ge, Fe));
          const ke = W || ne.totalPaintCount > 0 && ((He = r._paintLayerSyncBlankSurface) == null ? void 0 : He.canvas) || null, nt = X || ne.totalMaskCount > 0 && ((Ye = r._paintLayerSyncBlankSurface) == null ? void 0 : Ye.canvas) || null;
          if (!ke && !nt) return;
          let et = null, F = null;
          const de = [];
          if (ne.totalPaintCount > 0) {
            et = await Te(ke, `pano_paint_${L}.png`);
            for (const ce of G) {
              const Ie = String(ce || "").trim();
              if (!Ie) continue;
              const Ue = ((M = (gt = r.paintEngine) == null ? void 0 : gt.getGroupDisplayCanvas) == null ? void 0 : M.call(gt, Ie)) || null;
              if (!Ue) continue;
              const Re = Ie.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await Te(Ue, `pano_group_${L}_${Re}.png`);
              qe && de.push({
                id: Ie,
                actionGroupId: Ie,
                image: qe
              });
            }
          }
          ne.totalMaskCount > 0 && (F = await Te(nt, `pano_mask_${L}.png`)), Q === I() && (u.painting_layer = {
            paint: et,
            mask: F,
            groups: de,
            revision: Q
          }, me = Q, h());
        } catch (G) {
          throw G;
        } finally {
          We = !1;
        }
      }
    })();
    return bl.set(L, ee), ee.finally(() => {
      bl.get(L) === ee && bl.delete(L);
    }), ee;
  }
  function O(L) {
    var ie;
    const Y = ((ie = r.paintEngine) == null ? void 0 : ie.getMaskDisplayCanvas()) || null;
    if (!Y) return L;
    const ee = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, Q = L.reduce((oe, Ne) => Math.max(oe, Number((Ne == null ? void 0 : Ne.zIndex) || 0)), -1), ne = (Array.isArray(u.stickers) ? u.stickers : []).reduce((oe, Ne) => Math.max(oe, Number((Ne == null ? void 0 : Ne.z_index) || 0)), -1), q = Math.max(Q, ne);
    return L.push({
      id: "mask_display",
      source: Y,
      revision: ee,
      zIndex: q + 1,
      opacity: 1,
      visible: !0
    }), L;
  }
  function V() {
    var Q, ne;
    const L = k(!0), Y = _e(), ee = [];
    for (const q of L) {
      if ((q == null ? void 0 : q.type) === "strokeGroup") {
        const ie = String(q.actionGroupId || q.id || "");
        if (!ie) continue;
        const oe = ((ne = (Q = r.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : ne.call(Q, ie)) || null;
        if (!oe) continue;
        ee.push({
          id: `paint_group:${ie}`,
          source: oe,
          revision: `${S()}:${ie}`,
          zIndex: Number((q == null ? void 0 : q.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((q == null ? void 0 : q.type) === "rasterObject") {
        const ie = q.item || null, oe = H((ie == null ? void 0 : ie.id) || q.id || "");
        if (!oe) continue;
        const Ne = A(ie, () => E());
        if (!Ne) continue;
        const Ve = Se(Ne, q, Y), ze = (ie == null ? void 0 : ie.transform) || {};
        ee.push({
          id: `raster:${oe}`,
          source: Ve,
          revision: [
            I(),
            (Y == null ? void 0 : Y.key) || "",
            oe,
            Number(ze.du || 0).toFixed(6),
            Number(ze.dv || 0).toFixed(6),
            Number(ze.rot_deg || 0).toFixed(3),
            Number(ze.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((q == null ? void 0 : q.z_index) || 0),
          opacity: 1,
          visible: (ie == null ? void 0 : ie.visible) !== !1
        });
      }
    }
    return O(ee);
  }
  function U() {
    return v() ? V().filter((L) => L.visible !== !1).map((L) => ({ id: L.id, media: L.source, revision: L.revision, opacity: L.opacity, zIndex: L.zIndex })) : [];
  }
  function be() {
    u.painting_layer !== null && (u.painting_layer = null), me = "";
  }
  return {
    connect(L) {
      ({
        commitState: h,
        createRasterSurface: p,
        ensureGroupFrame: g,
        getActivePaintTargetDescriptor: b,
        getDesiredPaintTargetDescriptor: x,
        getDisplayPaintRevisionKey: S,
        getOrderedDisplayListObjects: k,
        getOrderedPaintGroupIds: N,
        getPaintingCompositeRevisionKey: I,
        getPaintingRevisionKey: j,
        getStrokeGroupStrokes: R,
        inverseTransformErpPointAround: $,
        paintingShown: v,
        parseRasterObjectSelectionId: H,
        processFreehandPoints: B,
        rasterizeStrokeToSurface: ye,
        rebuildPaintEngineIfNeeded: Ae,
        requestDraw: E,
        screenPosToErpPoint: te,
        shortestWrappedDelta: re
      } = L);
    },
    getSharedLivePaintSurface: Me,
    getLivePaintRevisionSuffix: xe,
    isPaintCompositeInteraction: fe,
    hitRasterObjectAt: T,
    invalidateLivePaintPreviewCaches: je,
    buildRasterObjectEditCanvas: A,
    needsPaintingLayerSync: le,
    syncPaintingLayerAsync: Oe,
    invalidatePaintingLayerState: be,
    buildEditorViewPaintLayers: U
  };
}
const v0 = /* @__PURE__ */ new Map(), $n = Tb({
  app: sr,
  api: sn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: ad,
    markImageFailed: A1,
    markImageLoading: N1,
    markImageReady: P1
  }
});
function ff(e) {
  if (!kn(e, "background") || !kn(e, "external-sticker")) return null;
  const t = $n.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? _a(t[0]) : null;
}
function IT(e) {
  if (!kn(e, "background")) return null;
  const [t] = $n.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = $n.uiValue(e, "pano_timeline_frames") || [], [r] = $n.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Xn(r) };
}
const OT = $n.assetSource, Ya = $n.source, df = $n.uiImage, ET = $n.invalidateUiImage, pf = $n.loadPreferredExactLinkedImage;
async function TT(e, t, n = {}) {
  var vm, _m;
  await u1(e, { tolerateOperationFailure: !0 }), $n.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, i = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, s = cT(e, t);
  await op();
  const l = yl(e, "output_preset"), u = yl(e, "coverage"), h = yl(e, "bg_color"), p = yl(e, VE), g = () => {
    const o = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return pf(
      e,
      o,
      () => Ee(),
      `background:size:${o.join("|")}`
    );
  }, b = () => {
    const o = g();
    return dT(o);
  }, x = (o = 2048) => {
    const c = l == null ? void 0 : l.value;
    return fT(c) ? b() || Math.max(1, Math.round(Number(o || 2048))) : uT(c, o);
  }, S = e.__panoSceneStateV2 === !0, k = t === "stickers" && S, N = t === "cutout" && S, I = k && e.__panoStudio === !0, j = N || I, R = t === "cutout" || I, $ = N ? IT(e) : null, v = (S ? sb : ab)(String((p == null ? void 0 : p.value) || ""), {
    outputPreset: x(2048),
    backgroundColor: String((h == null ? void 0 : h.value) || "#00ff00"),
    coverage: $ ? $.coverage : Xn(u == null ? void 0 : u.value),
    sharedUiSettings: pT(),
    active: ub(e),
    fps: S ? ff(e) : null,
    scene: ($ == null ? void 0 : $.state) ?? null,
    camera: N
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0;
  let H = null;
  j ? (H = v.camera && (!I || v.camera.visible !== !1) ? bg(v.camera, 0) : null, v.shots = H ? [{ ...H, position: [...H.position] }] : [], v.active.selected_shot_id = H && N ? sc : null) : t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const B = t === "cutout" ? (() => {
    var d;
    const o = Array.isArray(v.shots) ? v.shots : [], c = String(((d = v == null ? void 0 : v.active) == null ? void 0 : d.selected_shot_id) || "");
    return o.find((m) => String((m == null ? void 0 : m.id) || "") === c) || o[0] || null;
  })() : null, ye = B ? ch(B, !1) : { width: 220, height: 132 }, Ae = M1(I ? "studio" : t), E = /* @__PURE__ */ ba({
    stageStatus: Ir,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (Ae.viewButtons || []).map((o) => ({ ...o, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (vm = Ae.spaceButtons) != null && vm.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: Ae.spaceButtons, frame: Ae.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (Ae.toolButtons || []).map((o) => ({
      ...o,
      disabled: !1,
      ...o.key === "add-world" ? { visible: k } : {},
      ...N && eT.has(o.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(Ae.floatingButtons || []).map((o) => ({ ...o, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ke.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ke.aspect,
      rotateIcon: Ke.rotate_90,
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
      icon: Ke.fullscreen,
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
      customColorCss: Gr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Gr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (o, c) => ({ index: c, color: null })),
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
      width: ye.width,
      height: ye.height,
      label: B ? "Loading preview" : "Add Frame to preview"
    }
  }), te = { frame: /* @__PURE__ */ zl(0), playing: /* @__PURE__ */ zl(!1) }, re = document.createElement("div");
  document.body.appendChild(re);
  const fe = ({ intent: o, file: c } = {}) => {
    if (Or(c)) {
      if (o === "add") {
        Nh(c);
        return;
      }
      if (o === "add-world") {
        D_(c);
        return;
      }
      o === "replace" && V_(c);
    }
  }, Me = ({ intent: o } = {}) => {
  }, xe = kd(LE, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: Ae,
    paintSwatches: Rl.map((o) => ({
      id: o.id,
      label: o.label,
      cssColor: Gr(o.color, 1)
    })),
    uiState: E,
    playhead: te,
    onClose: () => {
      jo();
    },
    onTimeline: (o) => E_(o),
    onImageFileSelected: fe,
    onImageFileCancelled: Me
  });
  let he = null;
  try {
    he = xe.mount(re);
  } catch (o) {
    try {
      xe.unmount();
    } catch {
    }
    throw re.remove(), o;
  }
  const J = re.querySelector(".pano-modal-overlay"), D = re.querySelector(".pano-modal"), T = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), ae = D == null ? void 0 : D.querySelector("[data-stage-background]"), _e = D == null ? void 0 : D.querySelector(".pano-stage-wrap"), je = ((_m = he == null ? void 0 : he.getPaintOverlayRefs) == null ? void 0 : _m.call(he)) || {}, tt = je.cursor || null, st = je.sizePreview || null, Se = je.sizeSample || null;
  if (!J || !D || !T || !ae || !_e || !tt || !st || !Se)
    throw xe.unmount(), re.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const A = T.getContext("2d"), Te = D.querySelector("[data-side]"), me = D.querySelector("[data-video-element]"), We = D.querySelector("[data-port-video-element]");
  Ou(T, "editor.stage-overlay"), Ou(ae, "editor.stage-background"), ig(me, "editor.video"), ig(We, "editor.port-video");
  const le = D.querySelector(".pano-floating-right"), Oe = D.querySelector(".pano-floating-top"), O = D.querySelector("[data-tool-rail]"), V = D.querySelector("[data-frame-rail]"), U = D.querySelector("[data-frame-roll-knob]"), be = D.querySelector("[data-paint-dock]"), L = D.querySelector(".pano-video-transport"), Y = D.querySelector("[data-selection-menu]");
  let ee = !1;
  const Q = D.querySelector("[data-tooltip]"), ne = D.querySelector("[data-camera-preview-host]"), q = D.querySelector("[data-camera-preview-canvas]");
  Ou(q, "editor.camera-preview");
  const ie = D.querySelector("[data-paint-color-row]"), oe = D.querySelector("[data-paint-color-pop]"), Ne = D.querySelector("[data-paint-color-sv]"), Ve = D.querySelector("[data-paint-color-sv-cursor]"), ze = D.querySelector("[data-paint-hue-strip]"), Ze = D.querySelector("[data-paint-hue-handle]");
  let ot = 0, He = 0;
  _e == null || _e.removeAttribute("data-stage-ready"), _e == null || _e.setAttribute("data-stage-loading-kind", "boot"), T.style.opacity = "1", ae.style.opacity = "0", i && (Te == null || Te.remove(), D.classList.add("pano-modal-readonly"));
  const Ye = () => {
    if (!f.customPaintSessionStart) return;
    if (Vl(f.customPaintSessionStart, f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    if (sT(f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    const o = [
      or(f.customPaintColor),
      ...f.customPaintHistory.filter((c) => !Vl(c, f.customPaintColor))
    ];
    f.customPaintHistory = o.slice(0, 8), f.customPaintSessionStart = null;
  }, gt = (o = !1) => {
    !oe || oe.hidden || (o ? Ye() : f.customPaintSessionStart = null, oe.hidden = !0, E.paintDock.colorPopOpen = !1);
  }, M = () => {
    oe && (oe.hidden && (f.customPaintSessionStart = or(f.customPaintColor)), oe.hidden = !1, E.paintDock.colorPopOpen = !0);
  };
  D.addEventListener("pointerdown", () => Ie.wake(), !0), D.addEventListener("pointerdown", (o) => {
    var c;
    o.target.closest("[data-frame-roll-knob]") || Ji(), !o.target.closest(".pano-picker") && (o.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((d) => {
      d.hidden = !0;
    }), gt(!0), R && f.cutoutAspectOpen && !o.target.closest(".pano-aspect-popover") && !o.target.closest("[data-action='aspect']") && (f.cutoutAspectOpen = !1, f.menuMode = "", f.menuSize.measured = !1, dt(), Ee()), (c = E.frameRail) != null && c.aspectOpen && !o.target.closest(".pano-frame-aspect-control") && (E.frameRail.aspectOpen = !1)));
  });
  const f = {
    mode: "pano",
    selectedId: t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Cr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Xn(v.coverage),
    historyController: xT(v),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: fi,
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
    showGrid: mT(e == null ? void 0 : e.id, !0),
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
    paintEngine: Nf(),
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
  }, W = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let X = null;
  t === "stickers" && (f.selectedId = null, v.active.selected_sticker_id = null), f.selectedIds = f.selectedId ? [f.selectedId] : [];
  const ge = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), et = En({ label: "editor.still" });
  et.__panoFrameIdx = 0;
  const F = En({ label: "editor.port-still" });
  F.__panoFrameIdx = 0;
  let de = () => {
  };
  const ce = {
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
  }, Ie = sC({
    requestAnimationFrame: (o) => requestAnimationFrame(o),
    cancelAnimationFrame: (o) => cancelAnimationFrame(o),
    draw: (o, c) => k_(o, c),
    animating: () => w_()
  }), Ue = oC({
    requestFrame: (o) => Ie.requestFrame(o),
    cancelFrame: (o) => Ie.cancelFrame(o),
    tasks: {
      seek: () => nn.seek(W.scrubFrame),
      timeline: () => $r(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        pr(), Ee({ localOnly: !0, reason: At.STATE });
      },
      sidePanel: () => at()
    }
  }), Re = lP({
    canvas: ae,
    onReady: () => {
      Bs(), Ee({ reason: At.CONTEXT });
    },
    onFailed: () => Ee(),
    onUpdate: () => Ee({ localOnly: !0, reason: At.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      It = null, Bs(), Ee({ reason: At.CONTEXT });
    }
  });
  let qe = { revision: -1, sceneState: null }, lt = null, It = null, en = null, Bt = null;
  const Mo = Number.parseFloat(
    getComputedStyle(D).getPropertyValue("--pano-float-radius")
  ) || 10, Wt = (o) => {
    const c = String(o || "default");
    T.style.cursor !== c && (T.style.cursor = c);
  }, tn = {
    timer: 0,
    target: null
  }, Ut = {
    active: !1,
    depth: 0
  }, Rt = {
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
  }, er = 9, ni = [];
  let vn = 0;
  const xr = () => {
    var Z, z;
    const o = (Z = _e == null ? void 0 : _e.getBoundingClientRect) == null ? void 0 : Z.call(_e), c = (z = le == null ? void 0 : le.getBoundingClientRect) == null ? void 0 : z.call(le), d = Math.max(0, Number((o == null ? void 0 : o.width) || 0)), m = c ? Math.max(0, Number(c.width || 0)) : 0, w = m > 0 ? m + 14 + 12 : 72, P = Math.max(280, Math.floor(d - w * 2)), C = f.fullscreen ? Math.min(1200, P) : P;
    E.videoTransport.shellMaxWidthPx = C;
  }, No = () => {
    vn || (vn = Ie.requestFrame(() => {
      vn = 0, xr();
    }));
  }, Po = (o) => {
    if (!(o instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(o.audioTracks) && o.audioTracks.length > 0 || o.audioTracks && typeof o.audioTracks.length == "number" && o.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof o.mozHasAudio == "boolean") return o.mozHasAudio;
    } catch {
    }
    try {
      if (Number(o.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!E.videoTransport.hasAudio;
  }, Sn = typeof ResizeObserver < "u" ? new ResizeObserver(() => No()) : null;
  Sn == null || Sn.observe(_e), le && (Sn == null || Sn.observe(le)), ni.push(() => {
    var o;
    vn && (Ie.cancelFrame(vn), vn = 0), (o = Sn == null ? void 0 : Sn.disconnect) == null || o.call(Sn);
  }), No();
  const Ds = () => {
    Rt.thumbnailJobId += 1, Rt.thumbnailSrc = "", E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = er;
  }, T1 = async (o, c, d) => {
    const m = String(o || "").trim();
    if (!m) {
      Ds();
      return;
    }
    const y = bT(m);
    if (y) {
      Rt.thumbnailSrc = m, E.videoTransport.thumbnails = y.thumbnails, E.videoTransport.thumbnailCount = y.thumbnailCount;
      return;
    }
    const _ = ++Rt.thumbnailJobId;
    Rt.thumbnailSrc = m, E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = er;
    const w = Tc(document, "editor.thumbnails");
    w.preload = "auto", w.muted = !0, w.playsInline = !0, w.crossOrigin = "anonymous";
    const P = En({ label: "editor.thumbnail" });
    try {
      const C = await new Promise((Qe) => {
        let Be = !1;
        const Je = (it) => {
          Be || (Be = !0, Qe(it));
        };
        w.addEventListener("loadedmetadata", () => Je(!0), { once: !0 }), w.addEventListener("canplay", () => Je(!0), { once: !0 }), w.addEventListener("error", () => Je(!1), { once: !0 }), w.src = m, w.load();
      });
      if (Rt.thumbnailJobId !== _) return;
      const Z = Number(w.videoWidth || 0), z = Number(w.videoHeight || 0);
      if (!C || Z < 1 || z < 1) {
        Rt.thumbnailFailedSrcs.add(m);
        return;
      }
      const K = Math.max(0, Number(w.duration || c || 0)), ue = 46, Le = Math.max(72, Math.round(Z / z * ue));
      P.width = Le, P.height = ue;
      const pe = P.getContext("2d");
      if (!pe) return;
      const Pe = [], $e = (Qe) => new Promise((Be) => {
        let Je = !1;
        const it = () => {
          Je || (Je = !0, Be());
        };
        w.addEventListener("seeked", it, { once: !0 }), w.addEventListener("error", it, { once: !0 });
        try {
          w.currentTime = Qe;
        } catch {
          it();
        }
      });
      for (let Qe = 0; Qe < er; Qe += 1) {
        if (Rt.thumbnailJobId !== _) return;
        const Be = er <= 1 ? 0 : Qe / (er - 1), Je = K > 0 ? Math.max(0, Math.min(K - Math.max(1e-3, 0.5 / Math.max(1, Number(d || 24))), K * Be)) : 0;
        if (await $e(Je), Rt.thumbnailJobId !== _) return;
        pe.clearRect(0, 0, Le, ue), pe.drawImage(w, 0, 0, Le, ue), Pe.push({
          id: `thumb-${Qe}`,
          src: P.toDataURL("image/jpeg", 0.72),
          time: Je,
          label: Xc(Je)
        });
      }
      if (Rt.thumbnailJobId !== _) return;
      E.videoTransport.thumbnails = Pe, E.videoTransport.thumbnailCount = Pe.length || er, vT(m, {
        thumbnails: Pe,
        thumbnailCount: Pe.length || er,
        duration: K,
        fps: d
      });
    } finally {
      w.removeAttribute("src"), w.load(), Mf(P);
    }
  };
  ni.push(() => {
    Ds();
  });
  const nn = Yb({
    video: me instanceof HTMLVideoElement ? me : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (o) => Ie.requestFrame(o),
      cancelFrame: (o) => Ie.cancelFrame(o)
    },
    fps: Gs,
    span: () => {
      if (S) return Us();
      const o = Math.round(Number(E.videoTransport.duration || 0) * Gs());
      return me.loop || !(o > 0) ? 1 / 0 : o;
    },
    loop: () => S,
    onFrame: (o) => {
      S ? P_(o) : Pi(), Ee({ cause: "frame_view", localOnly: !0, reason: At.PLAYHEAD });
    },
    onCapture: () => {
      yv() && (ce.backgroundDirty = !0);
    },
    onChange: () => {
      Pi(), te.playing.value = nn.playing, $r(), Ee({ cause: "frame_view", localOnly: !0, reason: At.PLAYHEAD });
    }
  });
  ni.push(() => nn.dispose());
  const Ao = S && We instanceof HTMLVideoElement ? Xb({
    video: We,
    onCapture: () => {
      var d;
      const o = Number(We.videoWidth || 0), c = Number(We.videoHeight || 0);
      o < 1 || c < 1 || (F.width = o, F.height = c, (d = F.getContext("2d")) == null || d.drawImage(We, 0, 0), F.__panoFrameIdx += 1, Ee({ cause: "frame_view", localOnly: !0, reason: At.MEDIA }));
    },
    onChange: () => Ee({ cause: "frame_view", localOnly: !0, reason: At.MEDIA })
  }) : null;
  Ao && ni.push(() => Ao.dispose());
  const F1 = S ? Rb({
    createImage: (o, c) => {
      const d = new Image();
      return d.onload = c, d.onerror = c, d.src = o, d;
    },
    onLoad: () => Ee({ cause: "frame_view", localOnly: !0, reason: At.MEDIA })
  }) : null;
  if (me instanceof HTMLVideoElement) {
    const o = () => {
      Ai(), Ee({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      Pi({
        hasAudio: E.videoTransport.hasAudio,
        muted: me.muted,
        volume: Number(me.volume ?? E.videoTransport.volume ?? 1)
      });
    }, d = () => {
      const m = me.dataset.panoSrc;
      m && (Rt.failedSrcs.add(m), Ai(), Ee());
    };
    for (const [m, y] of [
      ["loadedmetadata", o],
      ["loadeddata", o],
      ["canplay", o],
      ["volumechange", c],
      ["error", d]
    ])
      me.addEventListener(m, y), ni.push(() => me.removeEventListener(m, y));
  }
  const {
    applyInitialCutoutFocus: D1,
    applyRasterObjectOffset: pp,
    applyRasterObjectTransform: L1,
    applyStrokeGroupOffset: hp,
    applyStrokeGroupTransform: mp,
    areAllSelectedItemsLocked: gp,
    bringSelectedToFront: R1,
    buildEditorViewPaintLayers: V1,
    buildRasterObjectEditCanvas: $1,
    canRestoreSelectedToInitial: z1,
    clearSelection: xa,
    clearWorldSelection: yp,
    currentViewCamera: j1,
    deviceRect: zc,
    ensureGroupFrame: Co,
    ensurePaintingGroupEntry: bp,
    erpPointToWorldDir: H1,
    frameLocalPointToWorldDir: vp,
    getCutoutInspectorItems: _p,
    getCutoutSelectableItems: G1,
    getCutoutSelectableItemsForDisplay: K1,
    getCutoutSelectableItemsForHit: jc,
    getDisplayListObjects: W1,
    getHistoryCapabilities: Sp,
    getList: Hi,
    getLivePaintRevisionSuffix: B1,
    getMultiSelectionGeom: ka,
    getNextStickerZIndex: Ls,
    getOrderedDisplayListObjects: wp,
    getPaintingGroupList: Io,
    getRasterObjectCenterUv: U1,
    getRasterObjectItem: xp,
    getRasterObjectList: ri,
    getSelectableRasterObjectItems: Y1,
    getSelectableStrokeGroupItems: X1,
    getSelected: Ln,
    getSelectedItems: ki,
    getSelectedKind: Rs,
    getSelectionItemIcon: q1,
    getSelectionItemLabelData: Hc,
    getSharedLivePaintSurface: J1,
    getStickerDisplayAlpha: Z1,
    getStrokeGroupCenterUv: Q1,
    getStrokeGroupItem: kp,
    getStrokeGroupStrokes: Oo,
    getUnwrapRect: Vs,
    hitRasterObjectAt: Mp,
    invalidateLivePaintPreviewCaches: Eo,
    invalidatePaintingLayerState: Np,
    isErpCamera: Gi,
    isExternalSticker: Mn,
    isItemLocked: jn,
    isItemSelected: Pp,
    isPaintCompositeInteraction: ev,
    isRasterObjectItem: Fr,
    isSceneSticker: ii,
    isShotItem: tr,
    isStickerHidden: $s,
    isStickerItem: hn,
    isStrokeGroupItem: Hn,
    isUploadingSticker: Ap,
    makeRasterObjectSelectionId: Cp,
    makeStrokeGroupSelectionId: Ip,
    needsPaintingLayerSync: tv,
    objectGeom: mn,
    parseRasterObjectSelectionId: Ki,
    poseOf: Nn,
    projectDir: Op,
    projectDirUnwrap: nv,
    projectErpLassoPointsToFrameRect: rv,
    projectLassoPointsToCurrentView: iv,
    pushHistory: St,
    releaseHiddenSelection: Gc,
    restoreHistory: Kc,
    restoreSelectedToInitialPose: ov,
    sampleStickerEdge: zs,
    screenPos: Mi,
    screenPosCss: js,
    screenPosToErpPoint: Dr,
    screenPosToFrameAsErpPoint: kr,
    screenToWorldDir: Ep,
    selectWorldSticker: Wc,
    selectedWorldSticker: To,
    sendSelectedToBack: av,
    setSelectedItem: nr,
    setSelectedItems: sv,
    shortestWrappedDelta: Ma,
    skyStickers: lv,
    stickerCornerOrderSanity: cv,
    syncPaintingLayerAsync: Tp,
    toggleSelectedExternalStickerVisibility: uv,
    toggleSelectedLock: fv,
    worldDirToFrameLocalPoint: Fp,
    worldStickerEditable: Hs,
    writePose: Mr
  } = _T({
    api: sn,
    backgroundCanvas: ae,
    cameraShoots: ai,
    cameraV2: j,
    canvas: T,
    commitAndRefreshNode: Mt,
    commitState: ir,
    computeStickerVFov: Ui,
    createRasterSurface: ou,
    cutoutV2: N,
    editor: f,
    getActiveCutoutShot: ft,
    getActivePaintTargetDescriptor: rr,
    getBrushPresetIdForTool: qi,
    getDesiredPaintTargetDescriptor: Oa,
    getDisplayPaintRevisionKey: t_,
    getFrameViewRect: Ar,
    getPaintingCompositeRevisionKey: dh,
    getPaintingLayerList: Qs,
    getPaintingRevisionKey: au,
    getStickerUiImage: Gp,
    hasCamera: Ci,
    isFreeSpaceView: fr,
    markObjectVisualsDirty: un,
    markPaintStrokeVisualsDirty: Pr,
    node: e,
    paintingShown: Xp,
    playback: nn,
    processFreehandPoints: iu,
    rasterErpCanvasCache: nt,
    rasterImageAlphaCache: ke,
    rasterImageCache: Fe,
    rasterizeStrokeToSurface: mh,
    readOnly: r,
    rebuildPaintEngineIfNeeded: Ia,
    requestDraw: Ee,
    runtime: ce,
    sceneStickerShown: qp,
    sceneV2: k,
    shotEditor: R,
    state: v,
    stateV2: S,
    stopTimelinePlayback: xn,
    studio: I,
    syncCutoutShot: pr,
    syncPaintUi: Gn,
    syncUndoRedoButtons: im,
    timeline: W,
    type: t,
    updateSelectionMenu: dt,
    updateSidePanel: at
  }, [
    kT,
    MT,
    NT,
    PT,
    AT,
    CT
  ]);
  function dv() {
    E.toolButtons.forEach((o) => {
      const c = o.attr === "data-tool-mode", d = o.attr === "data-paint-tool", m = o.attr === "data-mask-tool";
      o.active = c ? o.value === f.primaryTool : d ? o.key === f.paintTool : m ? o.key === f.maskTool : !1, o.pressed = o.active ? "true" : o.pressed == null ? null : "false";
    });
  }
  function Bc(o) {
    return sp(o == null ? void 0 : o.dataTransfer);
  }
  function Wi(o) {
    const c = !!o;
    Ut.active !== c && (Ut.active = c, _e.classList.toggle("drop-active", c));
  }
  function Bi(o, c = null) {
    const d = wn();
    Ea(() => {
      f.viewTransition = gC(d, o, performance.now(), { scale: Vr(), end: c });
    }), !f.viewTransition && c && Dp(c), fn.state.inertia.active = !1, fn.state.inertia.vx = 0, fn.state.inertia.vy = 0, Lr(), Ee({ localOnly: !0, reason: At.VIEW });
  }
  function Dp(o) {
    Aa(Rf({ ...Qc(), moved: o.moved }, o.mode, Fo())), ce.backgroundDirty = !0;
  }
  function Na() {
    f.viewTransition && (f.viewTransition = null, Lr());
  }
  function Lp(o, c) {
    Bi({ ...wn(), yaw_deg: o, pitch_deg: c });
  }
  cv();
  function pv() {
    return f.primaryTool === "mask" ? f.maskTool : f.paintTool;
  }
  function hv() {
    return String(pv() || "") === "lasso_fill";
  }
  function Ni(o) {
    return $n.uiList(e, o);
  }
  function Uc(o) {
    return $n.uiValue(e, o);
  }
  function Rp() {
    const o = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Zl(o) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function mv() {
    const { metaKey: o } = Rp(), c = Uc(o);
    return Array.isArray(c) && c.length > 0 && c[0] && typeof c[0] == "object" ? c[0] : c && typeof c == "object" ? c : null;
  }
  function Yc(o) {
    return o ? o instanceof HTMLVideoElement ? [
      String(o.currentSrc || o.src || ""),
      Number(o.videoWidth || 0),
      Number(o.videoHeight || 0)
    ].join("|") : o instanceof HTMLCanvasElement ? [
      "canvas",
      Number(o.width || 0),
      Number(o.height || 0),
      String(o.__panoFrameIdx || 0)
    ].join("|") : [
      String(o.currentSrc || o.src || ""),
      Number(o.naturalWidth || o.width || 0),
      Number(o.naturalHeight || o.height || 0)
    ].join("|") : "none";
  }
  function Xc(o) {
    const c = Math.max(0, Math.floor(Number(o || 0))), d = Math.floor(c / 60), m = c % 60;
    return `${d}:${String(m).padStart(2, "0")}`;
  }
  function Gs() {
    return S ? v.timeline.fps : Rt.metaFps || 1e3;
  }
  function Pi(o = {}) {
    const c = Number(o.duration ?? E.videoTransport.duration ?? 0), d = Math.max(1, Number(o.fps ?? E.videoTransport.fps ?? 24)), m = nn.frame / Gs(), y = Object.prototype.hasOwnProperty.call(o, "ready") ? !!o.ready : !!E.videoTransport.ready, _ = nn.playing, w = Object.prototype.hasOwnProperty.call(o, "visible") ? !!o.visible : !!E.videoTransport.visible, P = Object.prototype.hasOwnProperty.call(o, "muted") ? !!o.muted : !!(me instanceof HTMLVideoElement ? me.muted : E.videoTransport.muted), C = Number(
      Object.prototype.hasOwnProperty.call(o, "volume") ? o.volume : me instanceof HTMLVideoElement ? me.volume : E.videoTransport.volume
    ), Z = Object.prototype.hasOwnProperty.call(o, "hasAudio") ? !!o.hasAudio : Po(me), z = Object.prototype.hasOwnProperty.call(o, "loop") ? !!o.loop : !!E.videoTransport.loop;
    Object.assign(E.videoTransport, {
      ready: y,
      playing: _,
      visible: w,
      loop: z,
      currentTime: Number.isFinite(m) ? m : 0,
      duration: Number.isFinite(c) ? c : 0,
      progressPct: c > 1e-6 ? Math.max(0, Math.min(100, m / c * 100)) : 0,
      currentTimeLabel: Xc(m),
      durationLabel: Xc(c),
      frameCount: Math.max(0, Number(o.frameCount ?? E.videoTransport.frameCount ?? 0)),
      fps: d,
      hasAudio: Z,
      muted: P,
      volume: Math.max(0, Math.min(1, Number.isFinite(C) ? C : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(C) ? C : 1)) * 100),
      thumbnails: Array.isArray(o.thumbnails) ? o.thumbnails : E.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(o.thumbnailCount ?? E.videoTransport.thumbnailCount ?? er))
    });
  }
  function Vp() {
    return !!(me instanceof HTMLVideoElement && !S && me.getAttribute("src") && f.primaryTool !== "paint" && f.primaryTool !== "mask");
  }
  function $p() {
    if (!(me instanceof HTMLVideoElement) || !E.videoTransport.hasAudio) return;
    const o = !me.muted;
    me.muted = o, !o && Number(me.volume || 0) <= 0 && (me.volume = Math.max(0.01, Number(E.videoTransport.volume || 1))), Pi({
      hasAudio: E.videoTransport.hasAudio,
      muted: me.muted,
      volume: Number(me.volume ?? E.videoTransport.volume ?? 1)
    });
  }
  function gv() {
    Pi({
      visible: Vp()
    });
  }
  function yv() {
    if (!(me instanceof HTMLVideoElement) || Number(me.videoWidth || 0) < 1 || Number(me.videoHeight || 0) < 1) return !1;
    const o = Number(me.videoWidth || 0), c = Number(me.videoHeight || 0);
    (et.width !== o || et.height !== c) && (et.width = o, et.height = c);
    const d = et.getContext("2d");
    return d ? (d.clearRect(0, 0, o, c), d.drawImage(me, 0, 0, o, c), et.__panoFrameIdx = Number(et.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function zp() {
    return !nn.showsVideo && Number(et.width || 0) > 0 && Number(et.height || 0) > 0 && Number(et.__panoFrameIdx || 0) > 0 ? et : me instanceof HTMLVideoElement && Number(me.videoWidth || 0) > 0 && Number(me.videoHeight || 0) > 0 && Number(me.readyState || 0) >= 2 ? me : null;
  }
  function jp() {
    et.__panoFrameIdx = 0, ce.backgroundDirty = !0;
  }
  function Ai() {
    if (!(me instanceof HTMLVideoElement)) return null;
    const { videoKey: o } = Rp(), c = kn(e, "background") && Ni(o)[0] || null, d = Ya(c), m = [d, $n.linkedVideoFile(e, nh())].filter(Boolean), y = m.find((K) => !Rt.failedSrcs.has(K)) || "";
    Rt.videoFailed = !y && m.length > 0;
    const _ = y && y === d ? mv() : null;
    Rt.metaFps = Number(_ == null ? void 0 : _.fps) > 0 ? Number(_.fps) : 0;
    const w = Math.max(1, Number((_ == null ? void 0 : _.fps) || (S ? v.timeline.fps : 24))), P = me.dataset.panoSrc === y && Number.isFinite(me.duration) ? me.duration : 0, C = Number((_ == null ? void 0 : _.duration) || ((_ == null ? void 0 : _.frames) > 0 ? _.frames / w : P)), Z = Math.max(0, Number((_ == null ? void 0 : _.frames) || Math.round(C * w))), z = !!(_ != null && _.has_audio) || Po(me);
    return y && me.dataset.panoSrc !== y ? (me.pause(), jp(), me.dataset.panoSrc = y, me.loop = !S && !!E.videoTransport.loop, me.muted = !!E.videoTransport.muted, me.volume = Math.max(0, Math.min(1, Number(E.videoTransport.volume ?? 1))), me.src = y, me.load(), nn.setSource(!0), S || nn.seek(0)) : !y && me.getAttribute("src") && (me.pause(), me.removeAttribute("src"), delete me.dataset.panoSrc, me.load(), jp(), Ds(), nn.setSource(!1)), S || (me.loop = !!E.videoTransport.loop), y && !S && Rt.thumbnailSrc !== y && !Rt.thumbnailFailedSrcs.has(y) && T1(y, C, w), y || Ds(), Pi({
      ready: !!y,
      visible: !!y && Vp(),
      duration: C,
      frameCount: Z,
      fps: w,
      hasAudio: z,
      loop: !!me.loop,
      muted: !!me.muted,
      volume: Number(me.volume ?? E.videoTransport.volume ?? 1),
      thumbnailCount: E.videoTransport.thumbnailCount
    }), y || null;
  }
  function Hp(o, c = null) {
    var d;
    if (o && typeof o == "object" && !Array.isArray(o)) return o;
    if (Array.isArray(o) && o.length > 0) {
      const m = o[0];
      if (m && typeof m == "object" && !Array.isArray(m)) return m;
    }
    if (Array.isArray(c) && c.length > 0) {
      const m = (d = c[0]) == null ? void 0 : d.parsed_state;
      if (m && typeof m == "object" && !Array.isArray(m))
        return {
          yaw_deg: Number(m.yaw_deg || 0),
          pitch_deg: Number(m.pitch_deg || 0),
          hFOV_deg: Number(m.hFOV_deg || 30),
          rot_deg: Number(m.roll_deg || 0)
        };
    }
    return null;
  }
  function Gp(o, c = null) {
    return df(e, o, ge, c || (() => Ee()));
  }
  function qc(o = null) {
    return kn(e, "external-sticker") ? Gp(bc, o) : null;
  }
  function Kp() {
    if (!kn(e, "external-sticker")) return null;
    const o = Ni(KE)[0];
    if (!o || typeof o != "object") return null;
    const c = Ni(GE).map(Ya).filter(Boolean);
    if (c.length) return { frames: c, meta: o };
    const d = Ya(Ni(HE)[0] || null);
    return d ? { src: d, meta: o } : null;
  }
  function bv() {
    const o = v.stickers.find(Mn), c = o ? Kp() : null, d = c ? Fb(o.clip, f.frame, v.timeline.fps, c.meta) : null;
    Ao.follow({ src: (c == null ? void 0 : c.src) || "", time: d, playing: nn.advancing, fps: v.timeline.fps });
    const m = o ? eu(o) : null, y = c != null && c.frames ? F1.picture(c.frames, d, c.meta, m) : Ao.picture(F, m);
    return y ? { media: y, revision: Yc(y), source: Lb(c, m) } : null;
  }
  function Ui(o, c, d) {
    const m = Math.max(1, Number(c || 1)), y = Math.max(1, Number(d || 1)), _ = ve(Number(o || 30), 0.1, 179) * Xr, w = 2 * Math.atan(Math.tan(_ * 0.5) * (y / m));
    return ve(w * fo, 0.1, 179);
  }
  function vv(o) {
    const c = String(o || "").trim();
    if (!c) return null;
    try {
      const d = JSON.parse(c);
      if (!d || typeof d != "object" || String(d.kind || "") !== "pano_sticker_state") return null;
      const m = d.version;
      let y = null;
      if (typeof m == "number" && Number.isInteger(m) ? y = m : typeof m == "string" && /^\d+$/.test(m) && (y = Number.parseInt(m, 10)), y !== 1) return null;
      const _ = d.pose;
      if (!_ || typeof _ != "object") return null;
      const w = Number(_.yaw_deg), P = Number(_.pitch_deg), C = Number(_.roll_deg), Z = Number(_.hFOV_deg);
      if (![w, P, C, Z].every((Le) => Number.isFinite(Le))) return null;
      let z = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(z, -0) && (z = 0);
      const K = {
        yaw_deg: z,
        pitch_deg: ve(P, -89.9, 89.9),
        roll_deg: C,
        hFOV_deg: ve(Z, 0.1, 179)
      }, ue = Number(d.source_aspect);
      return Number.isFinite(ue) && ue > 0 && (K.source_aspect = ue), K;
    } catch {
      return null;
    }
  }
  function Wp(o) {
    const c = Number(o == null ? void 0 : o.yaw_deg), d = Number(o == null ? void 0 : o.pitch_deg), m = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg)), y = Number(o == null ? void 0 : o.hFOV_deg), _ = vo(o);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Xt(Number.isFinite(c) ? c : 0),
        pitch_deg: ve(Number.isFinite(d) ? d : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(m) ? m : 0,
        hFOV_deg: ve(Number.isFinite(y) ? y : 90, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function _v(o) {
    var P;
    if (!o || typeof o != "object") return Wp(null);
    const c = Number(o == null ? void 0 : o.yaw_deg), d = Number(o == null ? void 0 : o.pitch_deg), m = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg)), y = Number(o == null ? void 0 : o.hFOV_deg), _ = Number(o == null ? void 0 : o.vFOV_deg);
    let w = 1;
    if (Number.isFinite(y) && Number.isFinite(_)) {
      const C = ve(y, 0.1, 179) * Xr, Z = ve(_, 0.1, 179) * Xr, z = Math.tan(Z * 0.5);
      if (Math.abs(z) > 1e-6) {
        const K = Math.tan(C * 0.5) / z;
        Number.isFinite(K) && K > 0 && (w = K);
      }
    }
    if (o != null && o.asset_id && ((P = v == null ? void 0 : v.assets) != null && P[o.asset_id])) {
      const C = v.assets[o.asset_id], Z = Number((C == null ? void 0 : C.w) || 0), z = Number((C == null ? void 0 : C.h) || 0);
      Z > 0 && z > 0 && (w = Z / z);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Xt(Number.isFinite(c) ? c : 0),
        pitch_deg: ve(Number.isFinite(d) ? d : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(m) ? m : 0,
        hFOV_deg: ve(Number.isFinite(y) ? y : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function Sv(o) {
    return $n.linkedValue(e, o);
  }
  function wv(o, c, d) {
    const m = o && typeof o == "object" ? {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      roll_deg: Number(o.rot_deg ?? o.roll_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg || 30)
    } : vv(c);
    if (m) {
      const w = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.width) || m.source_aspect || 1), P = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.height) || 1);
      return {
        yaw_deg: Number(m.yaw_deg || 0),
        pitch_deg: Number(m.pitch_deg || 0),
        hFOV_deg: Number(m.hFOV_deg || 30),
        vFOV_deg: Ui(m.hFOV_deg, w, P),
        rot_deg: Number(m.roll_deg || 0)
      };
    }
    const y = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.width) || 1), _ = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.height) || 1);
    return {
      yaw_deg: Number(f.viewYaw || 0),
      pitch_deg: Number(f.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ui(30, y, _),
      rot_deg: 0
    };
  }
  function xv() {
    const o = qc(() => {
      yi(e, "image-loaded");
    }), c = kn(e, "external-sticker") ? Hp(Uc("pano_sticker_input_pose"), null) : null;
    return Bb(v, Wb(e, { pose: c, image: o }));
  }
  function kv() {
    var P;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((C) => String((C == null ? void 0 : C.name) || "") === "sticker_image") : -1, c = o >= 0 ? ((P = e.getInputLink(o)) == null ? void 0 : P.id) ?? null : null, d = qc(() => {
      yi(e, "image-loaded");
    }), m = Hp(Uc("pano_sticker_input_pose"), null), y = Sv("sticker_state"), _ = $n.externalStateHash(e, y), w = c == null ? null : wv(m, y, d);
    return Kb(v, {
      connected: c != null,
      linkId: c,
      stateHash: _,
      pose: w,
      imageWidth: Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.width) || 0),
      imageHeight: Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.height) || 0)
    });
  }
  function Bp(o = "sync") {
    if (t !== "stickers" || r) return;
    const c = e.__panoSceneStateV2 ? xv() : kv();
    if (c.changed) {
      const d = v.stickers.find(Mn);
      v.stickers = c.state.stickers, v.active = c.state.active, d && f.selectedId === d.id && !v.stickers.some((m) => m.id === d.id) && (f.selectedId = null, f.selectedIds = []), Mt(), at(), dt();
    }
    Ee();
  }
  function Jc() {
    if (I && Wo(E.toolButtons, "value", "add-camera", { disabled: Ci() }), t !== "cutout") return;
    const o = ft();
    Wo(E.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: o ? "Look At Frame" : "Add Frame",
      tip: o ? "Look at frame" : "Add frame",
      icon: o ? Ke.camera : Ke.plus_circle
    });
  }
  function Lr() {
    const o = kC({
      spaceView: Yi(),
      spaceMode: Ll(f.spaceMode, f.viewTransition),
      readOnly: r,
      frameMode: R && f.mode === "frame",
      showGrid: f.showGrid
    });
    E.space && Object.assign(E.space, o.space);
    for (const [c, d] of Object.entries(o.buttons)) Wo(E.floatingButtons, "action", c, d);
  }
  function oi() {
    var d;
    const o = MC({ hasShot: !!ft(), erp: Gi(), hidden: Ci() && !ai(), studio: I });
    f.mode === "frame" && o.disabled && (I ? Dh(ft()) : f.mode = "pano"), f.outputPreviewRect = null, E.viewButtons.forEach((m) => {
      const y = m.key === f.mode;
      m.pressed = y ? "true" : "false", m.visible = !(m.key === "frame" && !R), m.key === "frame" ? Object.assign(m, o) : m.disabled = !1;
    });
    const c = R && f.mode === "frame" ? ft() : null;
    E.frameRail.visible = !!c, E.frameRail.disabled = r || (c == null ? void 0 : c.locked) === !0, E.frameRollKnob.visible = !!c && !r && c.locked !== !0, E.frameRollKnob.disabled = r || (c == null ? void 0 : c.locked) === !0, E.frameRollKnob.rollDeg = Number((c == null ? void 0 : c.roll_deg) ?? (c == null ? void 0 : c.rot_deg) ?? 0), E.frameRollKnob.displayValue = Bo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((d = f.interaction) == null ? void 0 : d.kind) === "roll_frame", E.frameRollKnob.armed = !!c && f.altModifier === !0, E.frameRail.rollKnob = E.frameRollKnob, E.frameRail.aspectLabel = c ? gi(c) : "", E.frameRail.aspectChoices = w1(c ? String(gi(c)) : null, { erp: I, coverage: v.coverage }), c || (E.frameRail.aspectOpen = !1), E.outputPreviewToggle.visible = t === "cutout" && f.mode !== "frame" && !!ft(), R && E.cameraPreview && (E.cameraPreview.visible = f.mode !== "frame" && Up(), E.cameraPreview.expanded = !!f.outputPreviewExpanded, E.cameraPreview.settled = E.cameraPreview.settled === !0 && ce.pendingStableLayoutFrames <= 0 && ce.hasPresentedFrame), Lr(), Gh() ? Ot(f.pointerPos) : Wt(f.mode === "pano" ? "grab" : "default");
  }
  function Up() {
    return !I || ai() && !Gi();
  }
  function Yp() {
    return !S || !kn(e, "scene") ? null : Ng(Ni("pano_scene_files"), Ni("pano_scene_meta"), Ya);
  }
  function Mv() {
    return !S || !kn(e, "external-sticker") ? null : Ng(Ni("pano_sticker_files"), Ni("pano_sticker_meta"), Ya);
  }
  function Yi() {
    return f.mode === "pano" && Pa();
  }
  function Pa() {
    return S && RN({ sceneLinked: k && !!Gf(e).scene, files: Yp(), stickers: v.stickers });
  }
  function fr() {
    return f.spaceMode === "6dof" && Yi();
  }
  function Zc() {
    var o, c, d;
    return O2((d = (c = (o = sr.ui) == null ? void 0 : o.settings) == null ? void 0 : c.getSettingValue) == null ? void 0 : d.call(c, c1));
  }
  function Qc() {
    return { mode: f.spaceMode, position: f.viewPosition, moved: f.viewMoved };
  }
  function Aa(o) {
    f.spaceMode = o.mode, f.viewPosition = o.position, f.viewMoved = o.moved;
  }
  function Nv(o) {
    var d;
    const c = bC(f.spaceMode, f.viewTransition, o);
    if (c !== "keep") {
      if (c === "return") {
        Bi({ ...wn(), position: Fo(), distance: ((d = Rr()) == null ? void 0 : d.radius) || Cr }, { mode: o, moved: !1 });
        return;
      }
      Na(), Aa(Rf({ ...Qc(), position: wn().position }, o, Fo())), ce.backgroundDirty = !0, Lr(), Ee({ localOnly: !0, reason: At.VIEW });
    }
  }
  function wn() {
    var d;
    const o = f.viewMoved ? f.viewDistance : ((d = Rr()) == null ? void 0 : d.radius) || Cr, c = { position: f.viewPosition, yaw_deg: f.viewYaw, pitch_deg: f.viewPitch, hFOV_deg: f.viewFov, distance: o };
    return EN(f.spaceMode, c, Fo());
  }
  function Fo() {
    return ai() ? Xi().position : [0, 0, 0];
  }
  function Ci() {
    return j && v.camera !== null;
  }
  function ai() {
    return Ci() && (!I || v.camera.visible);
  }
  function Xp() {
    return v.painting_visible !== !1;
  }
  function qp(o) {
    return o.visible && aa(o.clip, f.frame);
  }
  function Xi() {
    return Dd(v.camera, f.frame);
  }
  function Rr() {
    var c;
    const o = Nr();
    return ((c = o.space ?? o.content) == null ? void 0 : c.sphere) ?? null;
  }
  function Jp(o) {
    f.viewPosition = o.position, f.viewYaw = o.yaw_deg, f.viewPitch = o.pitch_deg, f.viewDistance = o.distance, f.viewMoved = !0, ce.backgroundDirty = !0, Ee({ localOnly: !0, reason: At.VIEW });
  }
  function Vr() {
    var o;
    return ((o = Rr()) == null ? void 0 : o.radius) || Cr;
  }
  function Pv() {
    var P;
    const o = Nr().space, c = qe.sceneState, d = f.worldSelectedId || f.selectedId, m = c.stickers.findIndex((C) => C.id === d), y = m < 0 ? null : {
      sticker: c.stickers[m],
      value: nc(c, f.frame).stickers[m],
      plane: o.stickers.find((C) => C.id === d) ?? null,
      item: ((P = o.sticker) == null ? void 0 : P.id) === d && o.sticker.url ? { kind: o.sticker.kind, box: Re.sceneBox(o.sticker.url) } : null
    }, _ = dr() ? rh() : GN(Rr(), y);
    if (!_) return;
    const w = wn();
    f.viewDistance = w.distance, f.viewMoved = !0, Bi(Mg(w, _, T.width, T.height));
  }
  function Zp(o) {
    return Re.pickSurface($o(), o.x, o.y, T.width, T.height);
  }
  function Qp(o, c) {
    var d;
    return Uu(o, c, f.viewMoved ? null : (d = Rr()) == null ? void 0 : d.center, Vr());
  }
  function eh() {
    return JSON.stringify([f.viewPosition, f.viewYaw, f.viewPitch]);
  }
  function Av(o, c) {
    const d = performance.now(), m = { x: o.x, y: o.y, time: d, key: Re.contentRevision(), view: eh() };
    if (!Sg(en, m)) {
      const _ = Zp(o);
      en = { ...m, cost: performance.now() - d, hit: _ };
    }
    const y = wn();
    Jp(kg(y, Qp(y, en.hit), c, Vr())), en.view = eh(), en.wheelTime = d;
  }
  function th(o, c, d) {
    const m = wn();
    f.interaction = o === "orbit" ? { kind: "space_orbit", last: c, pivot: Qp(m, Zp(c)) } : { kind: "space_pan", last: c, depth: _g(m, Vr()) }, Ot(c), T.setPointerCapture(d);
  }
  function eu(o) {
    var w;
    if (o && typeof o == "object" && (Mn(o) || o.external === !0))
      return qc(() => {
        yi(e, "image-loaded");
      });
    const c = S ? Ca(o) : String(o && typeof o == "object" ? o.asset_id || o.assetId || "" : o || "");
    if (!c) return null;
    const d = ge.get(c);
    if (d) return d;
    const m = S ? cb(o.source) : (w = v.assets) == null ? void 0 : w[c], y = OT(m);
    if (!y) return null;
    const _ = new Image();
    return N1(_, y), _.onload = () => {
      P1(_, y), Ee();
    }, _.onerror = () => {
      A1(_, y), Ee();
    }, _.src = y, ge.set(c, _), _;
  }
  function Ca(o) {
    const { source: c } = o;
    return c.filename ? `file:${c.storage}:${c.subfolder}:${c.filename}` : `sticker:${o.id}`;
  }
  function tu() {
    if (t === "cutout" && !N) {
      const y = zp();
      if (y) return y;
      const _ = pf(
        e,
        ["erp_image", "bg_erp"],
        () => Ee(),
        "background:cutout:erp_image|bg_erp"
      );
      return _ && !ad(_) ? _ : df(e, "pano_input_images", ge, () => Ee()) || _ || null;
    }
    const o = zp();
    if (o) return o;
    const c = kn(e, "background") ? df(e, "pano_input_images", ge, () => Ee()) : null;
    if (c && !ad(c)) return c;
    if (me instanceof HTMLVideoElement && me.dataset.panoSrc) return me;
    const d = nh();
    return pf(e, d, () => Ee(), `background:${d.join("|")}`) || c || null;
  }
  function Cv() {
    var c;
    const o = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === "source");
    return o >= 0 && e.graph ? String(((c = e.getInputLink(o)) == null ? void 0 : c.type) || "") : "";
  }
  function nh() {
    if (t === "cutout") return N ? Cv() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((m) => String((m == null ? void 0 : m.name) || "")) : [], c = o.includes("erp_image"), d = o.includes("bg_erp");
    return r && (c || d) ? c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function nu(o) {
    return o ? o instanceof HTMLImageElement ? !!o.complete && Number(o.naturalWidth || o.width || 0) > 0 && Number(o.naturalHeight || o.height || 0) > 0 : o instanceof HTMLVideoElement ? Number(o.videoWidth || 0) > 0 && Number(o.videoHeight || 0) > 0 && Number(o.readyState || 0) >= 2 : Number(o.width || o.naturalWidth || 0) > 0 && Number(o.height || o.naturalHeight || 0) > 0 : !1;
  }
  function Iv() {
    if (Re.failed) return { status: yr, detail: "renderer" };
    if (!Re.ready) return { status: Ir, detail: "boot" };
    const o = tu(), c = Rt.videoFailed ? yr : od(o, nu), d = [];
    for (const m of lv()) {
      if ((m == null ? void 0 : m.visible) === !1) continue;
      const y = eu(m);
      d.push(od(y, nu));
    }
    return RE({
      presented: ce.hasPresentedFrame,
      background: c,
      stickers: d
    });
  }
  function Do() {
    const o = new Set(
      (v.stickers || []).map((c) => String((c == null ? void 0 : c.asset_id) || "")).filter((c) => !!c)
    );
    Object.keys(v.assets || {}).forEach((c) => {
      o.has(c) || (delete v.assets[c], ge.delete(c));
    });
  }
  function Nr() {
    return lt || (lt = Ov()), lt;
  }
  function Ov() {
    const o = tu(), c = V1(), d = { ...v.assets };
    for (const pe of S ? [] : v.stickers) {
      const Pe = String((pe == null ? void 0 : pe.asset_id) || "");
      Pe && !d[Pe] && ge.has(Pe) && (d[Pe] = { type: "comfy_image", filename: Pe });
    }
    const m = S ? v.stickers.map((pe) => Ap(pe) ? { ...pe, source: { kind: "file", filename: Ca(pe) } } : pe) : v.stickers;
    qe.revision !== Ie.stateRevision && (qe = { revision: Ie.stateRevision, sceneState: Zr({ ...v, stickers: m, assets: d, painting: null }) }), S && Ev(qe.sceneState);
    const y = nc(qe.sceneState, f.frame), _ = Ao ? bv() : null, w = (pe) => {
      if (S && !pe.visible) return null;
      if (Ao && Mn(pe)) return _;
      const Pe = eu(pe);
      return Pe ? { media: Pe, revision: Yc(Pe) } : null;
    }, P = wb(qe.sceneState, f.frame, v.stickers, { media: w, paintLayers: c, evaluated: y }), C = o && (o === me || o === et) ? me.dataset.panoSrc : o, Z = nu(o) ? { media: o, revision: Yc(o), coverage: Xn(v.coverage), source: C } : null, z = Pa(), K = TN(Qc(), z, Fo());
    K.mode !== f.spaceMode && Na(), Aa(K);
    const ue = z ? Tv(qe.sceneState, y, w) : null, Le = Yi() ? { ...ue, ...Fv(ue) } : null;
    return { background: Z, layers: P, space: Le, content: ue };
  }
  function Ev(o) {
    const c = new Map(v.stickers.map((d) => [d.id, d.clip]));
    o.scene.clip = { ...v.scene.clip };
    for (const d of o.stickers) {
      const m = c.get(d.id);
      m && (d.clip = { ...m });
    }
  }
  function Tv(o, c, d) {
    const m = Yp(), y = yb(m, c.scene), _ = y != null && y.url ? Re.sceneBox(y.url) : null, w = _ && zf(y.kind, _), P = Mv(), C = VN(P, o, c), Z = C != null && C.url ? Re.sceneBox(C.url) : null, z = Z ? [{ box: zf(C.kind, Z), value: C.value }] : [], K = sP(o, f.frame, v.stickers, { media: d, evaluated: c }), ue = Hf(jN(c, w, K, z));
    return {
      evaluated: c,
      sceneUrls: m ? m.urls.filter(Boolean) : [],
      scene: y,
      stickerUrls: $N(P, o),
      sticker: C,
      stickers: K,
      sphere: ue
    };
  }
  function Fv(o) {
    var d;
    const c = ((d = o.sphere) == null ? void 0 : d.radius) || Cr;
    return {
      gizmo: dr() ? Vv() : Dv(o.evaluated),
      grid: f.showGrid && !f.fullscreen ? eP(c) : null,
      lines: ai() ? Rv(c) : []
    };
  }
  function Dv(o) {
    const c = To(), d = o.stickers.find((m) => m.id === (c == null ? void 0 : c.id));
    return !Hs(c) || !(d != null && d.active) ? null : { mode: f.gizmoMode, transform: Vf(d) };
  }
  function ru(o) {
    return o * 0.2;
  }
  function rh() {
    return { center: Xi().position, radius: ru(Vr()) };
  }
  function Lv(o, c) {
    const { yaw_deg: d, pitch_deg: m } = bb(o.position, c);
    return { ...o, yaw_deg: d, pitch_deg: m };
  }
  function dr() {
    return ai() && f.selectedId === sc;
  }
  let Ks = { revision: -1, span: -1, segments: [] };
  function Rv(o) {
    const c = Us();
    (Ks.revision !== Ie.stateRevision || Ks.span !== c) && (Ks = { revision: Ie.stateRevision, span: c, segments: nP(rP(v, c)) });
    const { segments: d } = Ks, m = d.length ? [{ segments: d, color: UE }] : [];
    if (!fr()) return m;
    const y = dr() ? p0 : BE;
    return [...m, { segments: Cg(Xi(), ru(o)), color: y }];
  }
  function Vv() {
    return !fr() || !dr() || r ? null : { mode: f.gizmoMode === "rotate" ? "rotate" : "translate", transform: Vf({ ...Xi(), scale: 1 }) };
  }
  function $v(o, c) {
    var y;
    const d = (y = Nr().space) == null ? void 0 : y.gizmo;
    if (dr() && d && Zi("hover", c) !== null && Zi("down", c))
      return f.interaction = { kind: "world_gizmo", camera: !0, mode: d.mode, start: d.transform, base: Xi(), changed: !1 }, T.setPointerCapture(o.pointerId), Ot(c), !0;
    const m = Cg(Xi(), ru(Vr()));
    return tP($o(), m, c, T.width, T.height) ? (dr() || (nr(ft()), at(), dt(), Ee()), f.interaction = { kind: "world_select" }, T.setPointerCapture(o.pointerId), !0) : !1;
  }
  function zv() {
    const { background: o, layers: c, space: d } = Nr(), m = T.width, y = T.height, _ = zc({ x: 0, y: 0, w: m, h: y });
    let w = !1;
    return !o && !c.length && !d ? (Re.clear(460551), w = Re.ready) : (Re.clear(), w = !!Re.render({
      rect: _,
      camera: d ? Yu(wn(), m, y, d.sphere) : j1(),
      background: o,
      layers: c,
      space: d
    })), Lr(), (f.worldSelectedId || dr() || ee) && dt(), w;
  }
  function ih(o) {
    const { content: c } = Nr();
    return !c || !o.position ? ds(o) : mb(ds(o), o.position, Rh(), c.sphere);
  }
  function oh(o, c, d, m = null) {
    const { background: y, layers: _, content: w } = Nr();
    if (!y && !_.length && !w) return null;
    const P = w && c.position ? w : null;
    return Re.render({ rect: o, camera: ih(c), background: y, layers: _, space: P, owner: d, clearColor: m });
  }
  function jv(o) {
    return Re.clear(460551), !!Re.renderUnwrap({ rect: zc(o), ...Nr() });
  }
  function Hv(o) {
    const c = T.width, d = T.height, m = Vs();
    if (A.globalAlpha = 1, A.lineWidth = 1, A.clearRect(0, 0, c, d), Ia(), o && (ce.backgroundDirty = !jv(m)), f.showGrid && !f.fullscreen) {
      A.strokeStyle = "#3f3f46";
      for (let _ = 0; _ <= 16; _ += 1) {
        const w = m.x + m.w * _ / 16;
        A.beginPath(), A.moveTo(w, m.y), A.lineTo(w, m.y + m.h), A.stroke();
      }
      for (let _ = 0; _ <= 8; _ += 1) {
        const w = m.y + m.h * _ / 8;
        A.beginPath(), A.moveTo(m.x, w), A.lineTo(m.x + m.w, w), A.stroke();
      }
      A.strokeStyle = "rgba(250, 250, 250, 0.86)", A.lineWidth = 1.2, A.beginPath(), A.moveTo(m.x, m.y + m.h / 2), A.lineTo(m.x + m.w, m.y + m.h / 2), A.stroke(), A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center";
      const y = m.y + m.h * 0.57;
      A.fillText("Left", m.x + m.w * 0.25, y), A.fillText("Front", m.x + m.w * 0.5, y), A.fillText("Right", m.x + m.w * 0.75, y), A.fillText("Back", m.x + 38, y), A.fillText("Back", m.x + m.w - 38, y);
    }
  }
  function ah(o, c, d = 1) {
    let m = !1;
    A.strokeStyle = c, A.lineWidth = d, A.beginPath();
    for (const y of o) {
      const _ = Op(y);
      if (!_) {
        m = !1;
        continue;
      }
      m ? A.lineTo(_.x, _.y) : (A.moveTo(_.x, _.y), m = !0);
    }
    A.stroke();
  }
  function Gv(o) {
    const c = T.width, d = T.height;
    if (A.clearRect(0, 0, c, d), Ia(), o && (ce.backgroundDirty = !zv()), f.showGrid && !f.fullscreen && Nr().space)
      Kv();
    else if (f.showGrid && !f.fullscreen) {
      for (let y = -180; y <= 180; y += 15) {
        const _ = [];
        for (let w = -89; w <= 89; w += 4) _.push(qn(y, w));
        ah(_, "#3f3f46", y % 90 === 0 ? 1.3 : 1);
      }
      for (let y = -75; y <= 75; y += 15) {
        const _ = [];
        for (let w = -180; w <= 180; w += 4) _.push(qn(w, y));
        ah(_, y === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", y === 0 ? 1.5 : 1);
      }
      const m = [
        { name: "Left", dir: qn(-90, 0) },
        { name: "Front", dir: qn(0, 0) },
        { name: "Right", dir: qn(90, 0) },
        { name: "Back", dir: qn(180, 0) }
      ];
      A.fillStyle = "rgba(250, 250, 250, 0.42)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", m.forEach((y) => {
        const _ = Op(y.dir);
        _ && A.fillText(y.name, _.x, _.y + 24);
      });
    }
  }
  function Kv() {
    const o = Yu(wn(), T.width, T.height, Rr()), c = Ns(o, [0, 0, 0], T.width, T.height);
    c && (A.fillStyle = "rgba(255, 221, 87, 0.9)", A.font = "500 11px Geist, sans-serif", A.textAlign = "center", A.fillText("ERP origin", c.x, c.y - 12));
  }
  function Wv(o, c) {
    const d = Nn(o), m = qn(Number(d.yaw_deg || 0), Number(d.pitch_deg || 0)), y = f.mode === "unwrap" ? nv(m) : null, _ = y ? y.x : null, w = f.mode === "pano" ? 28 : 20, P = [
      zs(o, 0, w, _),
      zs(o, 1, w, _),
      zs(o, 2, w, _),
      zs(o, 3, w, _)
    ];
    rp(A, P, { selected: c });
  }
  function Ws(o, c = []) {
    if (!(!o || !Array.isArray(c) || c.length < 4)) {
      o.beginPath(), o.moveTo(c[0].x, c[0].y);
      for (let d = 1; d < 4; d += 1) o.lineTo(c[d].x, c[d].y);
      o.closePath();
    }
  }
  function sh(o, c, d) {
    const m = Array.isArray(o == null ? void 0 : o.corners) ? o.corners : [];
    if (m.length < 4) return;
    const y = ve(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (y <= 0.01) return;
    const _ = A.globalAlpha;
    A.globalAlpha = _ * y;
    const w = d ? "rgba(255, 116, 116, 0.96)" : c ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", P = d ? "rgba(255, 89, 89, 0.08)" : c ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", C = c ? 3.2 : 2.6;
    Ws(A, m), A.fillStyle = P, A.fill(), A.strokeStyle = w, A.lineWidth = C, A.stroke(), A.save(), A.strokeStyle = w, A.lineWidth = c ? 3.2 : 2.6, A.lineCap = "round";
    const Z = Array.isArray(o == null ? void 0 : o.edgeMidpoints) && o.edgeMidpoints.length >= 4 ? o.edgeMidpoints : [
      { edge: "top", x: (m[0].x + m[1].x) * 0.5, y: (m[0].y + m[1].y) * 0.5 },
      { edge: "right", x: (m[1].x + m[2].x) * 0.5, y: (m[1].y + m[2].y) * 0.5 },
      { edge: "bottom", x: (m[2].x + m[3].x) * 0.5, y: (m[2].y + m[3].y) * 0.5 },
      { edge: "left", x: (m[3].x + m[0].x) * 0.5, y: (m[3].y + m[0].y) * 0.5 }
    ], z = { top: "bottom", right: "left", bottom: "top", left: "right" }, K = c ? 12 : 9;
    Z.forEach((ue) => {
      const pe = Z.find((Be) => (Be == null ? void 0 : Be.edge) === z[ue == null ? void 0 : ue.edge]) || {
        x: (m[0].x + m[1].x + m[2].x + m[3].x) * 0.25,
        y: (m[0].y + m[1].y + m[2].y + m[3].y) * 0.25
      }, Pe = pe.x - ue.x, $e = pe.y - ue.y, Qe = Math.hypot(Pe, $e) || 1;
      A.beginPath(), A.moveTo(ue.x, ue.y), A.lineTo(ue.x + Pe / Qe * K, ue.y + $e / Qe * K), A.stroke();
    }), A.restore(), A.globalAlpha = _;
  }
  function Bv(o, c, d, m) {
    const y = ve(Number((c == null ? void 0 : c.visibilityAlpha) ?? 1), 0, 1);
    if (y <= 0.01) return;
    if (tr(o)) {
      sh(c, d, m);
      return;
    }
    if (hn(o)) {
      const w = A.globalAlpha;
      A.globalAlpha = w * Z1(o) * y, f.mode === "frame" ? (A.strokeStyle = d ? "rgba(250, 250, 250, 0.9)" : m ? "rgba(255, 89, 89, 0.72)" : "#71717a", A.lineWidth = d ? 2 : 1, Ws(A, c.corners), A.stroke()) : Wv(o, d), A.globalAlpha = w;
      return;
    }
    const _ = A.globalAlpha;
    A.globalAlpha = _ * y, A.fillStyle = d ? "rgba(0, 112, 243, 0.24)" : m ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ws(A, c.corners), A.fill(), A.strokeStyle = d ? "rgba(255, 255, 255, 1)" : m ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", A.lineWidth = d ? 2.8 : 1.9, Ws(A, c.corners), A.stroke(), A.globalAlpha = _;
  }
  function lh(o, c, d) {
    if (hn(o)) {
      s1(A, c, { accent: d });
      return;
    }
    const m = !(tr(o) && Gi());
    A.fillStyle = d, m && c.corners.forEach((y) => {
      A.beginPath(), A.arc(y.x, y.y, 6.5, 0, Math.PI * 2), A.fill();
    }), m && tr(o) && (A.strokeStyle = d, A.lineCap = "round", A.lineWidth = 4, c.edgeMidpoints.forEach((y) => {
      var K, ue, Le, pe;
      const _ = (((K = y.b) == null ? void 0 : K.x) ?? y.x) - (((ue = y.a) == null ? void 0 : ue.x) ?? y.x), w = (((Le = y.b) == null ? void 0 : Le.y) ?? y.y) - (((pe = y.a) == null ? void 0 : pe.y) ?? y.y), P = Math.hypot(_, w) || 1, C = _ / P, Z = w / P, z = 10;
      A.beginPath(), A.moveTo(y.x - C * z, y.y - Z * z), A.lineTo(y.x + C * z, y.y + Z * z), A.stroke();
    }), A.lineCap = "butt"), Hn(o) || (A.strokeStyle = "rgba(250, 250, 250, 0.9)", A.lineWidth = 1.8, A.beginPath(), A.moveTo(c.rotateStemBase.x, c.rotateStemBase.y), A.lineTo(c.rotateHandle.x, c.rotateHandle.y), A.stroke(), A.fillStyle = d, A.beginPath(), A.arc(c.rotateHandle.x, c.rotateHandle.y, 10, 0, Math.PI * 2), A.fill());
  }
  function Uv() {
    var _;
    const o = f.mode === "frame" ? [] : ki(), c = o.length > 1, d = R ? K1() : Hi(), m = d.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${tr(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!f._sortedItemsCache || f._sortedItemsCache.src !== d || f._sortedItemsCache.orderKey !== m) && (f._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const y = f._sortedItemsCache.sorted;
    for (const w of y) {
      const P = f.mode !== "frame" && !c && Pp(w);
      if (f.mode === "frame" && !P) continue;
      const C = hn(w), Z = tr(w), z = jn(w);
      if (!C && !Z || ii(w) && !qp(w)) continue;
      const K = mn(w);
      if (t !== "stickers" && !K.visible)
        continue;
      const ue = ve(Number((K == null ? void 0 : K.visibilityAlpha) ?? 1), 0, 1);
      if (ue <= 0.01) continue;
      const Le = Z && R && f.mode === "pano" ? ve(Number(f.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (A.save(), A.globalAlpha *= Le, Bv(w, K, P, z), P && K.visible) {
        const pe = z ? "#ff4d4f" : C && Mn(w) ? "#f59e0b" : "#0070f3", Pe = A.globalAlpha;
        A.globalAlpha = Pe * ue, lh(w, K, pe), A.globalAlpha = Pe;
      }
      A.restore();
    }
    if (R && f.mode === "pano" && !ft() && f.cutoutPanoFrameVisual && f.cutoutPanoFrameAlpha > 1e-4) {
      const w = f.cutoutPanoFrameVisual, P = ve(Number(f.cutoutPanoFrameAlpha || 0), 0, 1);
      A.save(), A.globalAlpha *= P, sh(w.geom, w.selected, w.locked), w.selected && lh(
        w.item,
        w.geom,
        w.locked ? "#ff4d4f" : "#0070f3"
      ), A.restore();
    }
    if (c) {
      const w = ka(o);
      if (w != null && w.visible) {
        const P = gp(o) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(w.corners[0].x, w.corners[0].y);
        for (let C = 1; C < w.corners.length; C += 1) A.lineTo(w.corners[C].x, w.corners[C].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = P, w.corners.forEach((C) => {
          A.beginPath(), A.arc(C.x, C.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      }
    } else
      o.forEach((w) => {
        if (!Hn(w) && !Fr(w)) return;
        const P = mn(w);
        if (!(P != null && P.visible)) return;
        const C = jn(w) ? "#ff4d4f" : "#0070f3";
        A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.95)", A.lineWidth = 2, A.setLineDash([6, 4]), A.beginPath(), A.moveTo(P.corners[0].x, P.corners[0].y);
        for (let Z = 1; Z < P.corners.length; Z += 1) A.lineTo(P.corners[Z].x, P.corners[Z].y);
        A.closePath(), A.stroke(), A.setLineDash([]), A.fillStyle = C, P.corners.forEach((Z) => {
          A.beginPath(), A.arc(Z.x, Z.y, 6.5, 0, Math.PI * 2), A.fill();
        }), A.restore();
      });
    if (((_ = f.interaction) == null ? void 0 : _.kind) === "marquee_select") {
      const w = Yh(f.interaction.start, f.interaction.current);
      A.save(), A.strokeStyle = "rgba(255, 255, 255, 0.9)", A.fillStyle = "rgba(255, 255, 255, 0.08)", A.lineWidth = 1, A.setLineDash([5, 4]), A.beginPath(), A.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), A.fill(), A.stroke(), A.restore();
    }
  }
  function ch(o, c = !1) {
    const d = ve(vo(o), 0.05, 20), m = c ? 320 : 220;
    return d >= 1 ? { width: m, height: Math.max(1, Math.round(m / d)) } : { width: Math.max(1, Math.round(m * d)), height: m };
  }
  function Yv(o) {
    if (!ne || !o) return !1;
    const c = ne.closest(".pano-camera-preview");
    if (!c) return !1;
    const d = Math.round(Number(c.clientWidth || ne.clientWidth || 0)), m = Math.round(Number(c.clientHeight || ne.clientHeight || 0));
    return Math.abs(d - Number(o.width || 0)) <= 1 && Math.abs(m - Number(o.height || 0)) <= 1;
  }
  function Xv(o, c) {
    if (f.outputPreviewRect = null, E.outputPreviewToggle.visible = f.mode !== "frame" && !!ft(), I && (E.outputPreviewToggle.visible = !1), !R || !E.cameraPreview) return;
    if (f.mode === "frame" || !Up()) {
      E.cameraPreview.visible = !1, E.cameraPreview.settled = !1, It = null;
      return;
    }
    const d = ft();
    if (E.cameraPreview.visible = !0, E.cameraPreview.expanded = !!f.outputPreviewExpanded, !d || !q) {
      E.cameraPreview.ready = !1, E.cameraPreview.settled = !1, E.cameraPreview.width = 220, E.cameraPreview.height = 132, E.cameraPreview.label = d ? "Preview unavailable" : "Add Frame to preview", It = null;
      return;
    }
    const m = ch(d, !!f.outputPreviewExpanded);
    E.cameraPreview.width = m.width, E.cameraPreview.height = m.height;
    const y = window.devicePixelRatio || 1, _ = Math.max(1, m.width * y), w = Math.max(1, m.height * y), P = Math.min(1, ae.width / _, ae.height / w), C = { width: Math.max(1, Math.floor(_ * P)), height: Math.max(1, Math.floor(w * P)) }, Z = [...c].some((ue) => ue !== At.VIEW && ue !== At.OVERLAY), z = !It || It.width !== C.width || It.height !== C.height || Z;
    if (o && z) {
      const ue = oh({ x: 0, y: ae.height - C.height, w: C.width, h: C.height }, d, "camera_preview");
      It = ue ? C : null, ue && qv(ue);
    }
    if (!It) {
      E.cameraPreview.ready = !1, E.cameraPreview.label = tu() ? "Loading preview" : "Connect ERP image", E.cameraPreview.settled = !1;
      return;
    }
    const K = Yv(m);
    E.cameraPreview.ready = !0, E.cameraPreview.label = K ? "" : "Loading preview", E.cameraPreview.settled = K && ce.pendingStableLayoutFrames <= 0 && ce.hasPresentedFrame;
  }
  let uh = 0, fh = !1;
  function qv(o) {
    const c = ++uh;
    createImageBitmap(o.canvas, o.x, o.y, o.width, o.height).then((d) => {
      var m;
      if (c !== uh || !ce.running) {
        d.close();
        return;
      }
      (m = q.getContext("bitmaprenderer")) == null || m.transferFromImageBitmap(d);
    }).catch((d) => {
      fh || (fh = !0, console.error("[PanoramaStickers] camera preview frame failed", d));
    });
  }
  function Jv(o) {
    return !o || typeof o != "object" ? { x: 0, y: 0 } : { x: Number((o == null ? void 0 : o.u) || 0), y: Number((o == null ? void 0 : o.v) || 0) };
  }
  function Zv(o, c, d, m = {}) {
    return { ...{
      ...o,
      t: Number((o == null ? void 0 : o.t) || 0),
      widthScale: Pn(o, "widthScale", 1),
      pressureLike: Pn(o, "pressureLike", 1)
    }, ...m, u: c, v: d };
  }
  function Qv(o, c = !1) {
    return c ? 12e-4 : 18e-4;
  }
  function iu(o, c, d = !1) {
    if (!Array.isArray(o) || !o.length) return [];
    const m = String((c == null ? void 0 : c.kind) || "") === "ERP_GLOBAL", y = /* @__PURE__ */ new WeakMap();
    if (m) {
      let Pe = null;
      o.forEach(($e) => {
        const Qe = Number(($e == null ? void 0 : $e.u) || 0), Be = Number(($e == null ? void 0 : $e.v) || 0), Je = (Qe % 1 + 1) % 1, it = Pe == null ? Je : Pe + Ma(Je, (Pe % 1 + 1) % 1);
        y.set($e, { x: it, y: Be }), Pe = it;
      });
    }
    const _ = (Pe) => !Pe || typeof Pe != "object" ? { x: 0, y: 0 } : y.get(Pe) || Jv(Pe), w = (Pe, $e, Qe, Be = {}) => {
      const Je = m ? (Number($e) % 1 + 1) % 1 : Number($e), it = Zv(Pe, Je, Qe, Be);
      return y.set(it, { x: Number($e), y: Number(Qe) }), it;
    }, P = (Pe, $e, Qe) => {
      const Be = _(Pe), Je = _($e);
      return w(Pe, mr(Be.x, Je.x, Qe), mr(Be.y, Je.y, Qe), {
        t: mr(Number((Pe == null ? void 0 : Pe.t) || 0), Number(($e == null ? void 0 : $e.t) || 0), Qe),
        widthScale: mr(Pn(Pe, "widthScale", 1), Pn($e, "widthScale", 1), Qe),
        pressureLike: mr(Pn(Pe, "pressureLike", 1), Pn($e, "pressureLike", 1), Qe)
      });
    };
    if (o.length === 1) {
      const Pe = _(o[0]);
      return [w(o[0], Pe.x, Pe.y)];
    }
    const C = Qv(c, d), Z = (Pe, $e) => {
      const Qe = [0];
      for (let De = 1; De < Pe.length; De += 1) {
        const Xe = _(Pe[De - 1]), ct = _(Pe[De]);
        Qe.push(Qe[De - 1] + Math.hypot(ct.x - Xe.x, ct.y - Xe.y));
      }
      const Be = Qe[Qe.length - 1] || 0;
      if (Be <= 1e-8) {
        const De = Pe[0], Xe = _(De);
        return [w(De, Xe.x, Xe.y)];
      }
      const Je = [];
      let it = 0;
      for (let De = 0; De <= Be + 1e-9; De += $e) {
        for (; it < Qe.length - 2 && Qe[it + 1] < De; ) it += 1;
        const Xe = Qe[it], ct = Qe[it + 1], ut = Math.max(1e-8, ct - Xe);
        Je.push(P(Pe[it], Pe[it + 1], ve((De - Xe) / ut, 0, 1)));
      }
      const _t = Pe[Pe.length - 1], Et = _(_t), Vt = Je[Je.length - 1], Ge = Vt ? _(Vt) : null;
      return (!Ge || Math.hypot(Ge.x - Et.x, Ge.y - Et.y) > $e * 0.35) && Je.push(w(_t, Et.x, Et.y)), Je;
    }, z = (Pe) => {
      if (!Array.isArray(Pe) || Pe.length < 3) return Pe ? Pe.slice() : [];
      const $e = _(Pe[0]), Qe = [w(Pe[0], $e.x, $e.y)];
      for (let it = 0; it < Pe.length - 1; it += 1) {
        const _t = Pe[it], Et = Pe[it + 1], Vt = _(_t), Ge = _(Et), De = w(
          _t,
          Vt.x * 0.75 + Ge.x * 0.25,
          Vt.y * 0.75 + Ge.y * 0.25,
          {
            t: Number(_t.t || 0) * 0.75 + Number(Et.t || 0) * 0.25,
            widthScale: Pn(_t, "widthScale", 1) * 0.75 + Pn(Et, "widthScale", 1) * 0.25,
            pressureLike: Pn(_t, "pressureLike", 1) * 0.75 + Pn(Et, "pressureLike", 1) * 0.25
          }
        ), Xe = w(
          _t,
          Vt.x * 0.25 + Ge.x * 0.75,
          Vt.y * 0.25 + Ge.y * 0.75,
          {
            t: Number(_t.t || 0) * 0.25 + Number(Et.t || 0) * 0.75,
            widthScale: Pn(_t, "widthScale", 1) * 0.25 + Pn(Et, "widthScale", 1) * 0.75,
            pressureLike: Pn(_t, "pressureLike", 1) * 0.25 + Pn(Et, "pressureLike", 1) * 0.75
          }
        );
        Qe.push(De, Xe);
      }
      const Be = Pe[Pe.length - 1], Je = _(Be);
      return Qe.push(w(Be, Je.x, Je.y)), Qe;
    }, K = Z(o, C);
    if (K.length < 3) return K;
    const ue = d ? 2 : 1;
    let Le = K.slice();
    for (let Pe = 0; Pe < ue; Pe += 1) Le = z(Le);
    return Z(Le, Math.max(C * 0.75, 55e-5));
  }
  function Pn(o, c, d = 1) {
    const m = Number(o == null ? void 0 : o[c]);
    return Number.isFinite(m) ? Math.max(0, m) : d;
  }
  function e_(o) {
    const c = Number(o == null ? void 0 : o.radiusValue);
    if (Number.isFinite(c) && c > 0) {
      const d = String((o == null ? void 0 : o.radiusModel) || "").trim() || "erp_uv_norm";
      return d === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((o == null ? void 0 : o.size) || 10) * 0.5 / 2048)
      } : {
        model: d,
        value: c
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((o == null ? void 0 : o.size) || 10) * 0.5 / 2048)
    };
  }
  function ou(o, c, d = {}) {
    const m = En({ label: "editor.raster-surface" });
    m.width = Math.max(1, Math.round(o)), m.height = Math.max(1, Math.round(c));
    const y = m.getContext("2d", d.readback ? { willReadFrequently: !0 } : void 0);
    return y && (y.clearRect(0, 0, m.width, m.height), y.imageSmoothingEnabled = !0), { canvas: m, ctx: y };
  }
  function au() {
    const o = Oa();
    return `${String(f.paintStrokeRevision)}:${o.width}x${o.height}`;
  }
  function dh() {
    const o = Oa();
    return `${String(f.paintStrokeRevision)}:${String(f.paintCompositeRevision)}:${o.width}x${o.height}`;
  }
  function t_() {
    const o = B1(), c = dh();
    return o ? `${c}:${o}` : c;
  }
  function n_() {
    f.paintStrokeRevision += 1, f.paintCompositeRevision += 1;
  }
  function r_() {
    f.paintCompositeRevision += 1;
  }
  function i_() {
    f._sortedItemsCache = null, f._strokeGeomCache.clear();
  }
  function ph() {
    var o, c;
    f.paintEngineRevisionKey = null, (c = (o = f.paintEngine) == null ? void 0 : o.rebuildCommitted) == null || c.call(o, v), f.paintEngineRevisionKey = au();
  }
  function un() {
    i_(), ce.backgroundDirty = !0, ce.dirty = !0;
  }
  function Pr({ rebuildPaintEngine: o = !1 } = {}) {
    Np(), n_(), un(), o && ph();
  }
  function Lo() {
    Np(), r_(), un();
  }
  function Ia() {
    var m;
    const o = Oa(), c = `${o.width}x${o.height}`;
    f.paintEngineDescriptorKey !== c && (f.paintEngine = Nf(o), f.paintEngineDescriptorKey = c, f.paintEngineRevisionKey = "");
    const d = au();
    f.paintEngineRevisionKey !== d && (f.paintEngineRevisionKey = d, (m = f.paintEngine) == null || m.rebuildCommitted(v));
  }
  function Oa() {
    const o = Math.max(1, x(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: o,
      height: Math.max(1, Math.round(o * 0.5))
    };
  }
  function rr() {
    return Oa();
  }
  function o_(o, c, d, m, y = null) {
    const _ = e_(o), w = Pn(c, "widthScale", 1) * Pn(c, "pressureLike", 1);
    return _.model === "erp_uv_norm" ? Math.max(0.5, _.value * d * w) : _.model === "world_angle" ? y ? Math.max(0.5, _.value / Math.max(1e-6, Number(y.hFOV_deg || 90) * Xr) * d * w) : Math.max(0.5, _.value / (2 * Math.PI) * d * w) : Math.max(0.5, Number((o == null ? void 0 : o.size) || 10) * 0.5 * w);
  }
  function a_(o, c, d = {}) {
    const m = String((c == null ? void 0 : c.layerKind) || "paint"), y = String((c == null ? void 0 : c.toolKind) || "pen"), _ = d.preview === !0, w = _ ? 0.78 : 1;
    if (o.globalAlpha = y === "marker" ? 0.7 * w : 1, m === "mask") {
      o.fillStyle = _ ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (y === "eraser") {
      o.globalCompositeOperation = "destination-out", o.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const P = String((c == null ? void 0 : c.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, C = _ ? Math.max(0.28, Number(P.a ?? 1) * 0.88) : Math.max(0.12, Number(P.a ?? 1));
    o.fillStyle = `rgba(${Math.round(Number(P.r || 0) * 255)}, ${Math.round(Number(P.g || 0) * 255)}, ${Math.round(Number(P.b || 0) * 255)}, ${C})`;
  }
  function s_(o, c, d) {
    const m = Math.max(0.5, Math.min(d, Number((c == null ? void 0 : c.radiusPx) || 0.5)));
    !Number.isFinite(c == null ? void 0 : c.x) || !Number.isFinite(c == null ? void 0 : c.y) || !Number.isFinite(m) || (o.beginPath(), o.arc(Number(c.x || 0), Number(c.y || 0), m, 0, Math.PI * 2), o.fill());
  }
  function l_(o, c, d, m, y = {}) {
    if (!o || !Array.isArray(c) || !c.length) return;
    const _ = Math.max(m.w, m.h) * 0.25;
    o.save(), a_(o, d, y);
    const w = (P) => s_(o, P, _);
    if (c.length === 1) {
      w(c[0]), o.restore();
      return;
    }
    for (let P = 0; P < c.length - 1; P += 1) {
      const C = c[P], Z = c[P + 1];
      if (!C || !Z) continue;
      const z = Number(C.x || 0), K = Number(C.y || 0), ue = Number(Z.x || 0), Le = Number(Z.y || 0), pe = Math.max(0.5, Math.min(_, Number(C.radiusPx || 0.5))), Pe = Math.max(0.5, Math.min(_, Number(Z.radiusPx || 0.5)));
      if (!Number.isFinite(z) || !Number.isFinite(K) || !Number.isFinite(ue) || !Number.isFinite(Le) || !Number.isFinite(pe) || !Number.isFinite(Pe)) continue;
      const $e = ue - z, Qe = Le - K, Be = Math.hypot($e, Qe);
      if (!Number.isFinite(Be) || Be < 1e-6) {
        w(C);
        continue;
      }
      if (Be > Math.max(m.w, m.h) * 0.5) continue;
      const Je = Math.max(0.5, Math.min(pe, Pe)), it = Math.max(0.35, Math.min(Je * 0.4, 2.25)), _t = Math.max(1, Math.ceil(Be / it));
      for (let Et = 0; Et <= _t; Et += 1) {
        const Vt = Et / _t;
        w({
          x: mr(z, ue, Vt),
          y: mr(K, Le, Vt),
          radiusPx: mr(pe, Pe, Vt)
        });
      }
    }
    w(c[c.length - 1]), o.restore();
  }
  function c_(o, c, d, m) {
    l_(o, c, d, m, { preview: !1 });
  }
  function u_(o, c, d, m, y) {
    var P, C, Z, z;
    if (!o || !Array.isArray(c) || c.length < 3) return;
    const _ = "u", w = "v";
    if (o.save(), String((d == null ? void 0 : d.layerKind) || "") === "mask")
      o.fillStyle = "rgba(255,255,255,1)";
    else if (String((d == null ? void 0 : d.toolKind) || "") === "eraser")
      o.globalCompositeOperation = "destination-out", o.fillStyle = "rgba(0,0,0,1)";
    else {
      const K = (d == null ? void 0 : d.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      o.fillStyle = `rgba(${Math.round(Number(K.r || 0) * 255)}, ${Math.round(Number(K.g || 0) * 255)}, ${Math.round(Number(K.b || 0) * 255)}, ${Number(K.a ?? 1)})`;
    }
    o.beginPath(), o.moveTo(Number(((P = c[0]) == null ? void 0 : P[_]) || 0) * m.w, Number(((C = c[0]) == null ? void 0 : C[w]) || 0) * m.h);
    for (let K = 1; K < c.length; K += 1)
      o.lineTo(Number(((Z = c[K]) == null ? void 0 : Z[_]) || 0) * m.w, Number(((z = c[K]) == null ? void 0 : z[w]) || 0) * m.h);
    o.closePath(), o.fill(), o.restore();
  }
  function hh(o) {
    const c = (o == null ? void 0 : o.geometry) || null;
    return c ? String(c.geometryKind || "") === "lasso_fill" ? Array.isArray(c.points) ? c.points : [] : Array.isArray(c.processedPoints) && c.processedPoints.length ? c.processedPoints : Array.isArray(c.rawPoints) && c.rawPoints.length ? c.rawPoints : Array.isArray(c.points) ? c.points : [] : [];
  }
  function f_(o, c) {
    const d = hh(o);
    return !Array.isArray(d) || !d.length ? [] : d.map((m) => ({
      x: Number((m == null ? void 0 : m.u) || 0) * Number((c == null ? void 0 : c.w) || 1),
      y: Number((m == null ? void 0 : m.v) || 0) * Number((c == null ? void 0 : c.h) || 1),
      radiusPx: o_(o, m, Number((c == null ? void 0 : c.w) || 1), Number((c == null ? void 0 : c.h) || 1))
    }));
  }
  function mh(o, c, d = null) {
    var P, C, Z, z;
    if (!(o != null && o.ctx) || !c) return !1;
    const m = d || { w: Number(((P = o.canvas) == null ? void 0 : P.width) || 0), h: Number(((C = o.canvas) == null ? void 0 : C.height) || 0) }, y = String((c == null ? void 0 : c.toolKind) || "") === "eraser" ? {
      ...c,
      layerKind: "mask",
      toolKind: String(((Z = c == null ? void 0 : c.geometry) == null ? void 0 : Z.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : c;
    if (String(((z = c == null ? void 0 : c.geometry) == null ? void 0 : z.geometryKind) || "") === "lasso_fill")
      return u_(o.ctx, hh(y), y, m), !0;
    const w = f_(y, m);
    return w.length ? (c_(o.ctx, w, y, m), !0) : !1;
  }
  function d_(o, c, d, m = 8) {
    const y = new Uint8Array(c * d), _ = [], w = new Int32Array(c * d), P = new Int32Array(c * d);
    for (let C = 0; C < d; C += 1)
      for (let Z = 0; Z < c; Z += 1) {
        const z = C * c + Z;
        if (y[z] || o[z] <= m) continue;
        let K = 0, ue = 0;
        w[ue] = Z, P[ue] = C, ue += 1, y[z] = 1;
        const Le = [];
        let pe = Z, Pe = C, $e = Z, Qe = C;
        for (; K < ue; ) {
          const Be = w[K], Je = P[K];
          K += 1, Le.push({ x: Be, y: Je }), Be < pe && (pe = Be), Je < Pe && (Pe = Je), Be > $e && ($e = Be), Je > Qe && (Qe = Je);
          const it = [
            [(Be - 1 + c) % c, Je],
            [(Be + 1) % c, Je],
            [Be, Je - 1],
            [Be, Je + 1]
          ];
          for (const [_t, Et] of it) {
            if (Et < 0 || Et >= d) continue;
            const Vt = Et * c + _t;
            y[Vt] || o[Vt] <= m || (y[Vt] = 1, w[ue] = _t, P[ue] = Et, ue += 1);
          }
        }
        _.push({ pixels: Le, minX: pe, minY: Pe, maxX: $e, maxY: Qe });
      }
    return _;
  }
  function p_(o, c) {
    const d = [...new Set((Array.isArray(o == null ? void 0 : o.pixels) ? o.pixels : []).map((C) => Number((C == null ? void 0 : C.x) || 0)).filter((C) => Number.isFinite(C)))].sort((C, Z) => C - Z);
    if (!d.length) return null;
    if (d.length === 1)
      return { startX: d[0], widthPx: 1 };
    let m = -1, y = 0;
    for (let C = 0; C < d.length; C += 1) {
      const Z = d[C], K = (C === d.length - 1 ? d[0] + c : d[C + 1]) - Z - 1;
      K > m && (m = K, y = C);
    }
    const _ = (d[(y + 1) % d.length] + c) % c;
    let w = 1 / 0, P = -1 / 0;
    for (const C of d) {
      const Z = (C - _ + c) % c;
      w = Math.min(w, Z), P = Math.max(P, Z);
    }
    return {
      startX: _,
      widthPx: Math.max(1, P - w + 1)
    };
  }
  function h_(o, c, d = {}) {
    var Z;
    const m = Number((o == null ? void 0 : o.width) || 0), y = Number((o == null ? void 0 : o.height) || 0), _ = (Z = o == null ? void 0 : o.getContext) == null ? void 0 : Z.call(o, "2d");
    if (!_ || m < 1 || y < 1) return [];
    const w = _.getImageData(0, 0, m, y), P = new Uint8Array(m * y);
    for (let z = 0; z < P.length; z += 1) P[z] = w.data[z * 4 + 3];
    return d_(P, m, y, 8).map((z, K) => {
      const ue = p_(z, m);
      if (!ue) return null;
      const Le = Number(ue.widthPx || 0), pe = z.maxY - z.minY + 1, Pe = Number(ue.startX || 0), $e = En({ label: "editor.lasso-fill" });
      $e.width = Le, $e.height = pe;
      const Qe = $e.getContext("2d");
      if (!Qe) return null;
      const Be = Qe.createImageData(Le, pe);
      return z.pixels.forEach(({ x: Je, y: it }) => {
        const _t = (it * m + Je) * 4, Et = (Number(Je || 0) - Pe + m) % m, Vt = ((it - z.minY) * Le + Et) * 4;
        Be.data[Vt + 0] = w.data[_t + 0], Be.data[Vt + 1] = w.data[_t + 1], Be.data[Vt + 2] = w.data[_t + 2], Be.data[Vt + 3] = w.data[_t + 3];
      }), Qe.putImageData(Be, 0, 0), {
        id: Uo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((d == null ? void 0 : d.z_index) || 0) + K * 1e-3,
        locked: (d == null ? void 0 : d.locked) === !0,
        bbox: {
          u0: 0,
          v0: z.minY / y,
          u1: Le / m,
          v1: (z.maxY + 1) / y
        },
        rasterDataUrl: $e.toDataURL("image/png"),
        transform: {
          du: Pe / m,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function m_(o) {
    const c = ft(), d = qs(c);
    if (!c || !d)
      return A.clearRect(0, 0, T.width, T.height), o && Re.clear(657930), !1;
    const m = { x: d.x, y: d.y, w: d.w, h: d.h }, { rect: y, shot: _ } = Ig(c, d, { width: T.width, height: T.height }), w = g_(m);
    if (A.clearRect(0, 0, T.width, T.height), o) {
      Re.clear(657930);
      const P = zc(y), C = !!oh(P, _, void 0, 657930);
      C || Re.clear(1118481, P), ce.backgroundDirty = !C;
    }
    return A.save(), A.fillStyle = "rgba(0, 0, 0, 0.58)", A.beginPath(), A.rect(0, 0, T.width, T.height), A.roundRect(m.x, m.y, m.w, m.h, w), A.fill("evenodd"), A.restore(), A.save(), A.strokeStyle = p0, A.globalAlpha = 0.62, A.lineWidth = 2, A.beginPath(), A.roundRect(m.x + 1, m.y + 1, m.w - 2, m.h - 2, Math.max(0, w - 1)), A.stroke(), A.restore(), !0;
  }
  function g_(o) {
    const c = Math.max(1e-6, Number(ce.frameCanvasScale || 1));
    return Math.min(Mo * c, Number((o == null ? void 0 : o.w) || 0) * 0.5, Number((o == null ? void 0 : o.h) || 0) * 0.5);
  }
  function si() {
    var c;
    const o = f.mode === "frame" ? ft() : null;
    E.frameRollKnob.visible = !!o && !r && o.locked !== !0, E.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), E.frameRollKnob.displayValue = Bo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((c = f.interaction) == null ? void 0 : c.kind) === "roll_frame", E.frameRollKnob.armed = !!o && f.altModifier === !0;
  }
  function y_() {
    var C, Z;
    if (((C = f.interaction) == null ? void 0 : C.kind) !== "paint_lasso_fill") return;
    const o = f.interaction.stroke, c = (Z = o == null ? void 0 : o.geometry) == null ? void 0 : Z.points;
    let d;
    if (f.mode === "frame") {
      const z = ft(), K = Ar(z);
      d = rv(c, z, K);
    } else
      d = iv(c);
    if (!Array.isArray(d) || d.length < 3) return;
    const m = String((o == null ? void 0 : o.layerKind) || "") === "mask", y = (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25 }, _ = Math.round(Number(y.r || 0) * 255), w = Math.round(Number(y.g || 0) * 255), P = Math.round(Number(y.b || 0) * 255);
    A.save(), A.beginPath(), A.moveTo(Number(d[0].x || 0), Number(d[0].y || 0));
    for (let z = 1; z < d.length; z++) A.lineTo(Number(d[z].x || 0), Number(d[z].y || 0));
    A.closePath(), m ? (A.lineWidth = 2, A.setLineDash([6, 6]), A.lineDashOffset = 0, A.strokeStyle = "rgba(0,0,0,0.96)", A.stroke(), A.lineDashOffset = -6, A.strokeStyle = "rgba(255,255,255,0.96)", A.stroke(), A.setLineDash([]), A.lineDashOffset = 0) : (A.lineWidth = 1.5, A.setLineDash([6, 4]), A.strokeStyle = `rgba(${_},${w},${P},1)`, A.stroke(), A.setLineDash([])), A.restore();
  }
  function b_() {
    const o = f.frameRollOverlayVisual, c = ve(Number(f.frameRollOverlayAlpha || 0), 0, 1);
    if (f.mode !== "frame" || !(o != null && o.shot) || c <= 1e-4) return;
    const d = Ar(o.shot);
    if (!d) return;
    const m = { x: d.x + d.w * 0.5, y: d.y + d.h * 0.5 }, y = Number(o.shot.roll_deg ?? o.shot.rot_deg ?? 0) * Xr, _ = Math.hypot(d.w, d.h) * 0.55, w = Math.cos(y) * _, P = Math.sin(y) * _;
    A.save(), A.globalAlpha *= c, A.beginPath(), A.rect(d.x, d.y, d.w, d.h), A.clip(), A.translate(m.x, m.y), A.rotate(y);
    const C = Math.max(12, Math.min(d.w, d.h) / 6);
    A.beginPath();
    for (let Z = -_; Z <= _; Z += C)
      A.moveTo(Z, -_), A.lineTo(Z, _);
    for (let Z = -_; Z <= _; Z += C)
      A.moveTo(-_, Z), A.lineTo(_, Z);
    A.lineWidth = 1, A.strokeStyle = "rgba(255, 255, 255, 0.22)", A.stroke(), A.setTransform(1, 0, 0, 1, 0, 0), A.beginPath(), A.moveTo(m.x - w, m.y - P), A.lineTo(m.x + w, m.y + P), A.lineWidth = 1.5, A.setLineDash([8, 6]), A.strokeStyle = "rgba(255, 255, 255, 0.92)", A.shadowColor = "rgba(0, 0, 0, 0.8)", A.shadowBlur = 3, A.stroke(), A.setLineDash([]), A.restore();
  }
  function v_() {
    return !R || !ft() || j && fr() || I && !dr() ? 0 : qE;
  }
  function __() {
    const o = ve(Number(f.cutoutPanoDimAlpha || 0), 0, 1);
    if (o <= 1e-4 || !R || f.mode !== "pano") return;
    const c = ft(), d = c ? mn(c) : null, m = Array.isArray(d == null ? void 0 : d.corners) && d.corners.length >= 4 ? d.corners.map((w) => ({ x: Number(w.x || 0), y: Number(w.y || 0) })) : null;
    d != null && d.visible && m && (f.cutoutPanoDimCorners = m), c && (d != null && d.visible) && m && (f.cutoutPanoFrameVisual = {
      item: c,
      geom: d,
      selected: Pp(c),
      locked: jn(c)
    });
    const y = Number(f.cutoutPanoDimTarget || 0) <= 1e-6, _ = d != null && d.visible ? m : y ? f.cutoutPanoDimCorners || [] : [];
    if (A.save(), A.fillStyle = `rgba(0, 0, 0, ${o})`, A.beginPath(), A.rect(0, 0, T.width, T.height), _.length >= 4) {
      A.moveTo(_[0].x, _[0].y);
      for (let w = 1; w < 4; w += 1) A.lineTo(_[w].x, _[w].y);
      A.closePath();
    }
    A.fill("evenodd"), A.restore();
  }
  function gh(o = /* @__PURE__ */ new Set()) {
    lt = null;
    const c = ce.backgroundDirty;
    R && (Ia(), Xv(c, o)), f.mode === "frame" ? (ce.frameSafeRect = nS(), m_(c)) : f.mode === "unwrap" ? Hv(c) : Gv(c), __(), Uv(), si(), y_(), b_(), E.fovValue = `${Math.round(f.viewFov)}°`, Math.abs(Number(f.outputPreviewAnim || 0) - Number(f.outputPreviewAnimTo || 0)) < 1e-6 && dt(), ce.hasPresentedFrame || (ce.hasPresentedFrame = !0, ae.style.opacity = "1"), R && E.cameraPreview && (E.cameraPreview.settled = ce.pendingStableLayoutFrames <= 0 && ce.hasPresentedFrame && f.mode !== "frame");
    const d = Iv();
    E.stageStatus = d.status, E.stageStatusDetail = d.detail, d.status === Ir ? (_e == null || _e.removeAttribute("data-stage-ready"), _e == null || _e.setAttribute("data-stage-loading-kind", d.detail)) : (_e == null || _e.setAttribute("data-stage-ready", ""), _e == null || _e.removeAttribute("data-stage-loading-kind"));
  }
  function S_(o = f.interaction) {
    if (t !== "stickers" || f.mode !== "pano") return !1;
    const c = String((o == null ? void 0 : o.kind) || "");
    return c === "move" || c === "scale" || c === "scale_x" || c === "scale_y" || c === "rotate" ? !0 : c === "move_multi" ? Array.isArray(o == null ? void 0 : o.stickerSnapshots) && o.stickerSnapshots.length > 0 : !1;
  }
  function su() {
    return !!f.interaction || !!W.drag;
  }
  function yh() {
    ce.nodePreviewPending = !1, e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = J1();
  }
  function Ee(o = {}) {
    var C, Z, z, K, ue, Le, pe, Pe, $e;
    const c = o.reason ?? At.STATE, d = !!o.localOnly, m = o.externalSync === !0, y = String(o.cause || ""), _ = String(((C = f.interaction) == null ? void 0 : C.kind) || "");
    (!d || _ === "view" || _ === "pan_frame" || S_() || !!f.viewTransition || y === "mode" || y === "frame_view" || y === "cutout_frame") && (ce.backgroundDirty = !0), d && ev() && (f.livePaintInteractionRevision += 1, ce.backgroundDirty = !0), (!d || y === "selection" || y === "mode" || y === "cutout_frame") && (Jc(), oi()), su() ? ce.nodePreviewPending = !0 : yh(), m && ((z = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null || z.call(Z), (K = e.setDirtyCanvas) == null || K.call(e, !0, !1)), m && !d && ((Le = (ue = e.graph) == null ? void 0 : ue.setDirtyCanvas) == null || Le.call(ue, !0, !0), ($e = (Pe = (pe = sr) == null ? void 0 : pe.canvas) == null ? void 0 : Pe.setDirty) == null || $e.call(Pe, !0, !0)), Ie.requestDraw(c);
  }
  function Bs() {
    const o = T.getBoundingClientRect(), c = Math.max(2, Math.round(o.width)), d = Math.max(2, Math.round(o.height)), m = window.devicePixelRatio || 1, y = [T.width, T.height, ae.width, ae.height].join("x");
    (T.width !== c || T.height !== d) && (T.width = c, T.height = d);
    const _ = iP(o.width || c, o.height || d, m, window.innerWidth || o.width, window.innerHeight || o.height);
    return Re.resize(_.width, _.height), [T.width, T.height, ae.width, ae.height].join("x") === y ? !1 : (ce.backgroundDirty = !0, ce.dirty = !0, R && Ea(() => {
      ce.pendingStableLayoutFrames = Math.max(Number(ce.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function Ea(o) {
    o(), Ie.wake();
  }
  function w_() {
    return !!f.viewTransition || !!fn.state.inertia.active || ce.pendingStableLayoutFrames > 0 || Math.abs(Number(f.frameRollOverlayAlpha || 0) - Number(f.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(f.cutoutPanoDimAlpha || 0) - Number(f.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(f.cutoutPanoFrameAlpha || 0) - Number(f.cutoutPanoFrameTarget || 0)) > 1e-6 || f.outputPreviewAnim !== f.outputPreviewAnimTo || su();
  }
  function x_(o = performance.now(), c = /* @__PURE__ */ new Set()) {
    var w;
    ce.nodePreviewPending && !su() && yh(), c.forEach((P) => ce.reasons.add(P)), c.size && (ce.dirty = !0), [...c].some((P) => P !== At.OVERLAY) && (ce.backgroundDirty = !0), pr(), ce.lastTickTs > 0 ? Math.max(1e-3, (o - ce.lastTickTs) / 1e3) : 1 / 60, ce.lastTickTs = o;
    const d = f.mode === "frame" && ((w = f.interaction) == null ? void 0 : w.kind) === "roll_frame" ? f.interaction : null;
    d != null && d.shot && (f.frameRollOverlayVisual = { shot: d.shot });
    const m = d ? 1 : 0;
    if (Math.abs(m - Number(f.frameRollOverlayTarget || 0)) > 1e-6 && (f.frameRollOverlayFrom = Number(f.frameRollOverlayAlpha || 0), f.frameRollOverlayTarget = m, f.frameRollOverlayStartTs = o), Math.abs(Number(f.frameRollOverlayAlpha || 0) - m) > 1e-6) {
      const P = ve(
        (o - Number(f.frameRollOverlayStartTs || o)) / JE,
        0,
        1
      );
      f.frameRollOverlayAlpha = mr(
        Number(f.frameRollOverlayFrom || 0),
        m,
        af(P)
      ), P >= 1 && (f.frameRollOverlayAlpha = m, m === 0 && (f.frameRollOverlayVisual = null)), ce.dirty = !0;
    }
    const y = v_();
    if (Math.abs(y - Number(f.cutoutPanoDimTarget || 0)) > 1e-6 && (f.cutoutPanoDimFrom = Number(f.cutoutPanoDimAlpha || 0), f.cutoutPanoDimTarget = y, f.cutoutPanoDimStartTs = o), Math.abs(Number(f.cutoutPanoDimAlpha || 0) - y) > 1e-6) {
      const P = ve(
        (o - Number(f.cutoutPanoDimStartTs || o)) / m0,
        0,
        1
      );
      f.cutoutPanoDimAlpha = mr(
        Number(f.cutoutPanoDimFrom || 0),
        y,
        af(P)
      ), P >= 1 && (f.cutoutPanoDimAlpha = y), P >= 1 && y === 0 && (f.cutoutPanoDimCorners = null), ce.dirty = !0;
    }
    const _ = R && ft() ? 1 : 0;
    if (Math.abs(_ - Number(f.cutoutPanoFrameTarget || 0)) > 1e-6 && (f.cutoutPanoFrameFrom = Number(f.cutoutPanoFrameAlpha || 0), f.cutoutPanoFrameTarget = _, f.cutoutPanoFrameStartTs = o), Math.abs(Number(f.cutoutPanoFrameAlpha || 0) - _) > 1e-6) {
      const P = ve(
        (o - Number(f.cutoutPanoFrameStartTs || o)) / m0,
        0,
        1
      );
      f.cutoutPanoFrameAlpha = mr(
        Number(f.cutoutPanoFrameFrom || 0),
        _,
        af(P)
      ), P >= 1 && (f.cutoutPanoFrameAlpha = _, _ === 0 && (f.cutoutPanoFrameVisual = null)), ce.dirty = !0;
    }
    if (f.outputPreviewAnim !== f.outputPreviewAnimTo) {
      const P = Math.max(1, Number(f.outputPreviewAnimDurationMs || 180)), C = ve((o - Number(f.outputPreviewAnimStartTs || 0)) / P, 0, 1), z = f.outputPreviewAnimTo > f.outputPreviewAnimFrom ? tT(C) : rT(C);
      f.outputPreviewAnim = mr(f.outputPreviewAnimFrom, f.outputPreviewAnimTo, z), ce.dirty = !0, C >= 1 && (f.outputPreviewAnim = f.outputPreviewAnimTo);
    }
    if (f.viewTransition) {
      const { view: P, done: C } = yC(f.viewTransition, o);
      if (f.viewPosition = P.position, f.viewYaw = P.yaw_deg, f.viewPitch = P.pitch_deg, f.viewFov = P.hFOV_deg, f.viewDistance = P.distance, C) {
        const { end: Z } = f.viewTransition;
        f.viewTransition = null, Z && Dp(Z), Lr();
      }
      ce.backgroundDirty = !0, ce.dirty = !0;
    }
    if (f.viewInertia.vx = Number(fn.state.inertia.vx || 0), f.viewInertia.vy = Number(fn.state.inertia.vy || 0), f.viewInertia.active = !!fn.state.inertia.active, fn.stepInertia(o) && (f.viewInertia.vx = Number(fn.state.inertia.vx || 0), f.viewInertia.vy = Number(fn.state.inertia.vy || 0), f.viewInertia.active = !!fn.state.inertia.active, ce.backgroundDirty = !0, ce.dirty = !0), ce.pendingStableLayoutFrames > 0 && (ce.pendingStableLayoutFrames -= 1, ce.dirty = !0), ce.dirty) {
      if (ce.pendingStableLayoutFrames > 0)
        return;
      ce.dirty = !1;
      const P = ce.reasons;
      ce.reasons = /* @__PURE__ */ new Set(), gh(P);
    }
  }
  function bh(o) {
    try {
      o();
    } catch (c) {
      const d = String((c == null ? void 0 : c.stack) || (c == null ? void 0 : c.message) || c || "unknown editor frame error");
      ce.tickErrorSignature !== d && (ce.tickErrorSignature = d, console.error("[PanoramaStickers] editor frame failed", c)), E.stageStatus = yr, E.stageStatusDetail = "frame", _e == null || _e.setAttribute("data-stage-ready", ""), _e == null || _e.removeAttribute("data-stage-loading-kind");
    }
  }
  function k_(o = performance.now(), c = /* @__PURE__ */ new Set()) {
    if (!ce.running) return;
    const d = Pk();
    bh(() => x_(o, c)), Ak(d);
  }
  function vh() {
    !ce.running || !Bs() || bh(() => {
      ce.dirty = !1, gh(/* @__PURE__ */ new Set([At.RESIZE]));
    });
  }
  const _h = new ResizeObserver(vh);
  _h.observe(T);
  let Ro = null;
  function Sh() {
    Ro == null || Ro.removeEventListener("change", lu), Ro = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), Ro.addEventListener("change", lu);
  }
  function lu() {
    Sh(), vh();
  }
  Sh();
  function M_() {
    de(), ce.running = !1, Ie.stop(), _h.disconnect(), Ro.removeEventListener("change", lu);
  }
  function Gn() {
    dv();
    const o = _C({
      editor: f,
      swatches: Rl,
      paintColorPopOpen: oe ? !oe.hidden : !1,
      colorToCss: Gr,
      colorsApproximatelyEqual: Vl,
      rgb01ToHsv: uf,
      hsv01ToRgb: cf,
      getBrushPresetIdForTool: qi,
      isActiveLassoTool: hv
    });
    if (Object.assign(E.paintDock, o), gv(), !o.visible) {
      oe && (oe.hidden = !0);
      return;
    }
    He && (clearTimeout(He), He = 0), ie && (!o.colorEnabled && oe && !oe.hidden && (He = window.setTimeout(() => {
      oe.hidden = !0, E.paintDock.colorPopOpen = !1, He = 0;
    }, 170)), oe && (oe.style.setProperty("--picker-hue-color", o.pickerHueColor), oe.style.setProperty("--picker-sat", o.pickerSat), oe.style.setProperty("--picker-val", o.pickerVal), oe.style.setProperty("--picker-hue", o.pickerHue)), Ve && (Ve.style.left = o.pickerSvLeft, Ve.style.top = o.pickerSvTop), Ze && (Ze.style.left = o.pickerHueLeft));
  }
  function Vo() {
    const o = Nn(R && f.mode === "frame" ? ft() : Ln());
    o && (f.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: gi(o)
    }, at());
  }
  function at() {
    pr(), $r(), wh();
  }
  function N_() {
    const o = R && f.mode === "frame" ? ft() : null;
    return [...ki(), To(), o].some((c) => ii(c) ? oc(c) : tr(c) && Ci() && oc(v.camera));
  }
  function wh() {
    if (i) return;
    v.ui_settings = v.ui_settings || {};
    const o = vC(v.ui_settings);
    if (a) {
      E.sidePanel = SC({
        coverage: v.coverage,
        uiSettings: o,
        normalizeCoverageValue: Xn
      });
      return;
    }
    const c = Ln(), d = R && f.mode === "frame" ? ft() : null, m = d || c, y = d ? [d] : ki(), _ = d ? "shot" : Rs();
    if (y.length > 1 && (f.panelLastValues = f.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), m && _ !== "stroke") {
      const $e = Nn(m);
      f.panelLastValues = {
        yaw_deg: Number($e.yaw_deg || 0),
        pitch_deg: Number($e.pitch_deg || 0),
        hFOV_deg: Number($e.hFOV_deg || (_ === "image" ? 30 : 90)),
        vFOV_deg: Number($e.vFOV_deg || (_ === "image" ? 30 : 60)),
        rot_deg: Number($e.rot_deg || 0),
        roll_deg: Number($e.roll_deg || 0),
        aspect_id: gi($e)
      }, ii(m) && (f.panelLastValues.opacity = _o(m, f.frame).opacity * 100);
    }
    const w = f.panelLastValues || (t === "stickers" || _ === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), P = _ === "stroke" ? null : m, C = To(), Z = j && (_ === "shot" || _ === "frame") && Pa(), z = C ? _N(C, f.frame) : Z ? { ...P, ...yN(v.camera, f.frame), vFOV_deg: P.vFOV_deg } : ii(P) ? f.panelLastValues : P || w, K = C ? Hs(C) : !!P && !jn(P);
    f.panelWasEnabled = K, Jc();
    let ue = null;
    if (d) {
      const $e = Hc({ item: d, kind: "shot", label: "Frame" });
      ue = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: $e.label,
        currentIcon: $e.icon || null,
        items: [{
          id: String(d.id || ""),
          label: $e.label,
          icon: $e.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const $e = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const Je = ft();
        Je && $e.push({ id: Je.id, label: "Camera", icon: q1("frame"), item: Je, kind: "frame" }), Hi().forEach((it, _t) => {
          var De, Xe;
          if (!it || ii(it) && !it.visible) return;
          const Et = k ? Lf(it) : Mn(it) ? String(it.id || dp) : String(((Xe = (De = v.assets) == null ? void 0 : De[it.asset_id]) == null ? void 0 : Xe.name) || it.asset_id || it.id), Vt = `${_t + 1}. ${Et}${Mn(it) && $s(it) ? " (hidden)" : ""}`, Ge = Hc({ item: it, label: Vt, kind: "image" });
          $e.push({ id: it.id, label: Ge.label, icon: Ge.icon, item: it, kind: "image" });
        });
      } else
        _p().forEach((Je) => {
          if (!(Je != null && Je.item)) return;
          const it = Hc(Je);
          $e.push({ id: Je.item.id, label: it.label, icon: it.icon, item: Je.item, kind: Je.kind });
        });
      const Qe = (P == null ? void 0 : P.id) || "", Be = C ? { label: Lf(C), icon: Ke.globe } : $e.find((Je) => Je.id === Qe) || $e[0];
      ue = {
        label: "Selection",
        open: !1,
        disabled: $e.length <= 1,
        currentLabel: Be.label,
        currentIcon: Be.icon || null,
        items: $e.map((Je) => ({
          id: Je.id,
          label: Je.label,
          icon: Je.icon || null,
          active: Je.id === Qe
        }))
      };
    }
    const Le = [], pe = ($e, Qe, Be, Je, it) => {
      const _t = ve(Number(z[$e] || 0), Be, Je);
      Le.push({
        key: $e,
        label: Qe,
        min: Be,
        max: Je,
        step: it,
        value: _t,
        displayValue: Bo(_t),
        fillPct: ve((_t - Be) / Math.max(1e-6, Je - Be) * 100, 0, 100),
        enabled: K && !r
      });
    }, Pe = [];
    if (C) {
      for (const [$e, Qe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Be = nf(z[$e]);
        pe($e, Qe, -Be, Be, 0.01);
      }
      pe("yaw_deg", "Yaw", -180, 180, 0.1), pe("pitch_deg", "Pitch", -90, 90, 0.1), pe("roll_deg", "Roll", -180, 180, 0.1), pe("scale", "Scale", d0, nf(z.scale), 0.01), pe("opacity", "Opacity", 0, 100, 1);
    } else if (y.length > 1)
      Pe.push(`Selected objects: ${y.length}`), Pe.push("Multi-selection supports z-order and delete.");
    else {
      const $e = _ === "shot" || _ === "frame";
      if (Z)
        for (const [Qe, Be] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Je = nf(z[Qe]);
          pe(Qe, Be, -Je, Je, 0.01);
        }
      pe("yaw_deg", "Yaw", -180, 180, 0.1), pe("pitch_deg", "Pitch", -90, 90, 0.1), pe(_ === "image" || t === "stickers" && !$e ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), pe("hFOV_deg", "H FOV", 1, 179, 0.1), pe("vFOV_deg", "V FOV", 1, 179, 0.1), $e && Le.forEach((Qe) => {
        Qe.enabled = Qe.enabled && NC(Qe.key, { erp: Gi() });
      }), k && !$e && pe("opacity", "Opacity", 0, 100, 1);
    }
    E.sidePanel = AC({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: ue,
      enabled: K,
      selectedKind: C ? "world" : _,
      selectedItems: y,
      params: Le,
      notes: Pe,
      uiSettings: o,
      normalizeCoverageValue: Xn
    });
  }
  function $r() {
    if (!S || r) return;
    const o = Us(), c = W.selection, d = c && zr(c.owner);
    if (c) {
      const m = d ? Ta(c) : [];
      c.frames = c.frames.filter((y) => m.some((_) => d[_].keyframes.some((w) => w.frame === y))), c.frames.length || (W.selection = null);
    }
    E.timeline = FC(v, {
      span: o,
      selection: W.selection,
      selectedId: f.worldSelectedId || f.selectedId,
      expanded: W.expanded ?? xh(),
      openRows: W.openRows,
      audio: A_() && E.videoTransport.hasAudio ? { muted: me.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: ff(e) !== null || fP(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Ci(),
      cameraHideable: I,
      stickers: !N,
      scene: k && !!Gf(e).scene,
      sceneLocked: !!$
    }), E.easing = W.selection ? DC(d, Ta(W.selection), W.selection.frames, Fa(W.selection.owner)) : null;
  }
  function xh() {
    return qM(v, { cameraOnly: N, camera: I });
  }
  function Us(o = null) {
    if ($ != null && $.frames) return $.frames;
    const c = v.timeline.fps, d = v.stickers.find(Mn), m = d ? Kp() : null, y = Math.max(
      E.videoTransport.ready ? Math.round(Number(E.videoTransport.duration || 0) * c) : 0,
      m ? Db(d.clip, c, m.meta) : 0
    );
    return ib(v, { minimum: Math.round(c * 5), frames: y, openClip: o, camera: N && !$ || I });
  }
  function zr(o) {
    return o === "camera" ? Ci() ? v.camera : null : o === "scene" ? k ? v.scene : null : v.stickers.find((c) => c.id === o) || null;
  }
  function Ta(o) {
    return o.lane ? [o.lane] : Sa(zr(o.owner));
  }
  function Fa(o) {
    if (o === "camera") return 0;
    const { clip: c } = zr(o);
    return c.start - c.in;
  }
  function kh(o) {
    return `${aa(o, f.frame)}:${o.start - o.in}`;
  }
  function Ys(o) {
    const c = zr(o);
    return !!c && c.locked !== !0;
  }
  function P_(o) {
    const c = Math.max(0, Math.round(o));
    if (c === f.frame) return;
    pr(), f.frame = c, te.frame.value = c, pr();
    const d = [f.selectedId, f.worldSelectedId];
    Gc(), un(), d[0] !== f.selectedId || d[1] !== f.worldSelectedId ? at() : N_() && wh(), dt(), Ee({ reason: At.PLAYHEAD });
  }
  function A_() {
    return me instanceof HTMLVideoElement && !!me.getAttribute("src");
  }
  function C_(o) {
    Ai(), nn.seek(o);
  }
  function xn() {
    S && nn.stop();
  }
  function cu() {
    Ai(), nn.toggle();
  }
  function Xs() {
    pr(), un(), at(), dt(), Ee();
  }
  function Ii() {
    St(), Mt(), Xs();
  }
  function I_() {
    const { selection: o } = W;
    Ys(o.owner) && (xn(), HM(zr(o.owner), Ta(o), o.frames, f.frame - Fa(o.owner)), W.selection = null, Ii());
  }
  function Mh(o) {
    const c = _a(o);
    if (c === null || c === v.timeline.fps) return;
    xn();
    const d = Math.round(f.frame * c / v.timeline.fps);
    fN(v, c), W.selection = null, nn.seek(d), Ii();
  }
  function O_() {
    const o = ff(e);
    o !== null && o !== v.timeline.fps && Mh(o);
  }
  function E_(o) {
    if (!(r || !S)) {
      if (o.type === "seek") {
        if (o.phase === "move") {
          W.scrubFrame = o.frame, Ue.request("seek");
          return;
        }
        Ue.cancel(), o.phase === "start" && Ai(), nn.seek(o.frame);
        return;
      }
      if (o.type === "play") {
        cu();
        return;
      }
      if (o.type === "mute") {
        $p(), $r();
        return;
      }
      if (o.type === "toggle-expanded") {
        W.expanded = !(W.expanded ?? xh()), W.selection = null, $r();
        return;
      }
      if (o.type === "toggle-row") {
        W.openRows.has(o.id) ? W.openRows.delete(o.id) : W.openRows.add(o.id), $r();
        return;
      }
      if (o.type === "toggle-visible") {
        if (o.id === k1) v.painting_visible = !v.painting_visible;
        else {
          const c = zr(o.id);
          if (!c || o.id === "camera" && !I) return;
          c.visible = !c.visible;
        }
        Gc(), Ii();
        return;
      }
      if (o.type === "select-row") {
        const c = v.stickers.find((d) => d.id === o.id);
        if (c && !c.visible || o.id === "camera" && !ai()) return;
        c && !aa(c.clip, f.frame) && C_(c.clip.start), (c == null ? void 0 : c.placement) === "world" ? Wc(c.id) : o.id === "camera" ? nr(ft()) : nr(Hi().find((d) => d.id === o.id) || null), Lr(), W.selection = null, at(), dt(), Ee();
        return;
      }
      if (o.type === "select-keys") {
        const c = Fa(o.owner), d = o.frames.map((_) => _ - c), m = W.selection, y = (m == null ? void 0 : m.owner) === o.owner && m.lane === o.lane;
        if (o.additive && y) {
          const _ = new Set(m.frames);
          for (const w of d)
            _.has(w) ? _.delete(w) : _.add(w);
          m.frames = [..._].sort((w, P) => w - P);
        } else
          W.selection = d.length ? { owner: o.owner, lane: o.lane, frames: d } : null;
        $r();
        return;
      }
      if (o.type === "move-keys") {
        const c = W.selection;
        if (!c || !Ys(c.owner)) return;
        const d = zr(c.owner), m = Ta(c);
        if (o.phase === "start") {
          xn(), W.drag = { keyframes: m.map((w) => structuredClone(d[w].keyframes)), frames: c.frames };
          return;
        }
        const { drag: y } = W;
        if (!(y != null && y.keyframes)) return;
        m.forEach((w, P) => {
          d[w].keyframes = structuredClone(y.keyframes[P]);
        });
        const _ = GM(d, m, y.frames, o.delta, -Fa(c.owner));
        if (c.frames = y.frames.map((w) => w + _), o.phase !== "end") {
          Ue.request("timeline"), Ue.request("view");
          return;
        }
        Ue.cancel(), W.drag = null, _ ? Ii() : Xs();
        return;
      }
      if (o.type === "clip") {
        const c = o.id === "scene" ? zr("scene") : v.stickers.find((_) => _.id === o.id);
        if (!c || c.locked) return;
        if (o.phase === "start") {
          xn(), W.drag = { clip: { ...c.clip }, span: Us(c.clip) };
          return;
        }
        const { drag: d } = W;
        if (!(d != null && d.clip)) return;
        const m = d.clip, y = kh(c.clip);
        if (c.clip = { ...m }, o.delta && o.mode === "move" ? BM(c.clip, o.delta) : o.delta && o.mode === "start" ? UM(c.clip, m.start + o.delta) : o.delta && YM(c.clip, (m.duration === null ? d.span : m.start + m.duration) + o.delta, d.span), o.phase !== "end") {
          Ue.request("timeline"), kh(c.clip) !== y && Ue.request("view");
          return;
        }
        Ue.cancel(), W.drag = null, Gc(), JSON.stringify(c.clip) !== JSON.stringify(m) ? Ii() : Xs();
        return;
      }
      if (o.type === "key-row") {
        if (o.owner === "scene" || !Ys(o.owner)) return;
        xn(), $M(zr(o.owner), f.frame - Fa(o.owner)), Ii();
        return;
      }
      if (o.type === "fps") {
        const c = ZM(o.fps);
        if (c === null || c === v.timeline.fps || E.timeline.fpsLocked) {
          $r();
          return;
        }
        Mh(c);
        return;
      }
      if (o.type === "length") {
        const c = QM(o.length);
        if (c === void 0 || c === v.timeline.length) {
          $r();
          return;
        }
        xn(), v.timeline.length = c, Ii();
        return;
      }
      if (o.type === "easing") {
        const c = W.selection;
        if (!c || !Ys(c.owner)) return;
        xn(), WM(zr(c.owner), Ta(c), c.frames, o.easing), o.commit ? Ii() : Xs();
      }
    }
  }
  async function Nh(o) {
    if (r || N || t !== "stickers" && t !== "cutout" || !Or(o)) return;
    if (k) {
      xn(), await Ph(o);
      return;
    }
    const c = ao("asset"), d = Qa(e, `add:${c}`, async () => {
      try {
        const { image: m } = await es(o);
        ge.set(c, m);
        const y = ao("st");
        v.stickers.push({
          id: y,
          asset_id: c,
          yaw_deg: f.viewYaw,
          pitch_deg: f.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ui(30, Number(m.naturalWidth || m.width || 1), Number(m.naturalHeight || m.height || 1)),
          rot_deg: 0,
          z_index: Ls()
        }), nr(v.stickers[v.stickers.length - 1]), Da(), at(), dt(), Ee();
        const _ = await co(o, {
          fetchApi: (C, Z) => sn.fetchApi(C, Z)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((C) => String((C == null ? void 0 : C.asset_id) || "") === c).length) return;
        v.assets[c] = _, Do(), St(), Mt(), at(), dt(), Ee();
      } catch (m) {
        delete v.assets[c], ge.delete(c);
        const y = Array.isArray(v.stickers) ? v.stickers : [], _ = y.filter((w) => String((w == null ? void 0 : w.asset_id) || "") === c);
        throw _.length && (v.stickers = y.filter((w) => String((w == null ? void 0 : w.asset_id) || "") !== c), _.some((w) => String((w == null ? void 0 : w.id) || "") === String(f.selectedId || "")) && nr(null), at(), dt(), Ee(), Mt()), m;
      }
    });
    try {
      await d;
    } catch {
    }
  }
  function T_() {
    var o;
    r || t !== "stickers" && t !== "cutout" || (o = he == null ? void 0 : he.openImagePicker) == null || o.call(he, "add");
  }
  function F_() {
    var o;
    r || !k || (o = he == null ? void 0 : he.openImagePicker) == null || o.call(he, "add-world");
  }
  async function D_(o) {
    r || !k || !Or(o) || (xn(), await Ph(o, "world"));
  }
  function L_() {
    const o = { x: T.width / 2, y: T.height / 2 }, c = Yi() ? Re.pick($o(), o.x, o.y, T.width, T.height) : null;
    return UN(wn(), c, Rr());
  }
  async function Ph(o, c = "sky") {
    const d = ao("st"), m = Qa(e, `add:${d}`, async () => {
      const { image: y } = await es(o), _ = {
        yaw_deg: f.viewYaw,
        pitch_deg: f.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ui(30, Number(y.naturalWidth || y.width || 1), Number(y.naturalHeight || y.height || 1)),
        rot_deg: 0
      }, w = { kind: "file", filename: "" }, P = c === "world" ? kN(d, w, L_()) : Wd(d, w, _, Ls());
      ge.set(Ca(P), y), v.stickers.push(P), c === "world" ? Wc(d) : nr(P), Da(), at(), dt(), Ee();
      try {
        const C = await co(o, {
          fetchApi: (z, K) => sn.fetchApi(z, K)
        }), Z = v.stickers.find((z) => z.id === d);
        if (!Z) return;
        Z.source = Al(C), ge.set(Ca(Z), y), St(), Mt();
      } catch (C) {
        throw v.stickers = v.stickers.filter((Z) => Z.id !== d), f.selectedId === d && nr(null), f.worldSelectedId === d && yp(), St(), Mt(), C;
      } finally {
        at(), dt(), Ee();
      }
    });
    try {
      await m;
    } catch {
    }
  }
  async function R_(o, c) {
    const d = Qa(e, `replace:${c}:${ao("asset")}`, async () => {
      const { image: m } = await es(o), y = await co(o, {
        fetchApi: (w, P) => sn.fetchApi(w, P)
      }), _ = v.stickers.find((w) => w.id === c);
      if (_) {
        _.source = Al(y), _.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const w of [_.size.value, ..._.size.keyframes.map((P) => P.value)])
          w.vFOV_deg = Ui(w.hFOV_deg, Number(m.naturalWidth || m.width || 1), Number(m.naturalHeight || m.height || 1));
        ge.set(Ca(_), m), un(), St(), Mt(), at(), dt(), Ee();
      }
    });
    try {
      await d;
    } catch {
    }
  }
  async function V_(o) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const c = Ln();
    if (!c || !hn(c) || Mn(c) || !Or(o)) return;
    if (k) {
      await R_(o, c.id);
      return;
    }
    const d = String(c.id || ""), m = ao("asset"), y = Qa(e, `replace:${d}:${m}`, async () => {
      var z;
      const _ = (Array.isArray(v.stickers) ? v.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === d) || null;
      if (!_ || !hn(_) || Mn(_)) return;
      const w = String(_.asset_id || ""), P = w ? An(((z = v.assets) == null ? void 0 : z[w]) || null) : null, C = Number(_.vFOV_deg || 0), Z = _.crop && typeof _.crop == "object" ? { ..._.crop } : null;
      try {
        const { image: K } = await es(o);
        ge.set(m, K), _.asset_id = m, _.vFOV_deg = Ui(
          Number(_.hFOV_deg || 30),
          Number(K.naturalWidth || K.width || 1),
          Number(K.naturalHeight || K.height || 1)
        ), _.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, un(), at(), dt(), Ee();
        const ue = await co(o, {
          fetchApi: (pe, Pe) => sn.fetchApi(pe, Pe)
        }), Le = (Array.isArray(v.stickers) ? v.stickers : []).find((pe) => String((pe == null ? void 0 : pe.id) || "") === d) || null;
        if (!Le || String(Le.asset_id || "") !== m) return;
        v.assets[m] = ue, Do(), St(), Mt(), at(), dt(), Ee();
      } catch (K) {
        delete v.assets[m], ge.delete(m);
        const ue = (Array.isArray(v.stickers) ? v.stickers : []).find((Le) => String((Le == null ? void 0 : Le.id) || "") === d) || null;
        throw ue && String(ue.asset_id || "") === m && (w && P && (v.assets[w] = P), ue.asset_id = w, ue.vFOV_deg = C, ue.crop = Z ? { ...Z } : null), un(), Mt(), at(), dt(), Ee(), K;
      }
    });
    try {
      await y;
    } catch {
    }
  }
  function $_() {
    var c;
    if (r) return;
    const o = Ln();
    !o || !hn(o) || Mn(o) || (c = he == null ? void 0 : he.openImagePicker) == null || c.call(he, "replace");
  }
  async function z_() {
    if (r || t !== "stickers") return;
    if (k) {
      await j_();
      return;
    }
    const o = v.assets && typeof v.assets == "object" ? v.assets : {}, c = Object.entries(o).filter(([, m]) => {
      const y = String((m == null ? void 0 : m.type) || "").toLowerCase(), _ = String((m == null ? void 0 : m.value) || "");
      return y === "dataurl" && _.startsWith("data:image");
    });
    if (!c.length) return;
    let d = !1;
    for (const [m, y] of c)
      try {
        const _ = String((y == null ? void 0 : y.value) || "");
        if (!_) continue;
        const w = await fetch(_).then((K) => K.blob()), P = String(w.type || "image/png").split("/")[1] || "png", C = String((y == null ? void 0 : y.name) || `${m}.${P}`), Z = new File([w], C, { type: w.type || "image/png" }), z = await co(Z, {
          fetchApi: (K, ue) => sn.fetchApi(K, ue)
        });
        v.assets[m] = {
          ...z,
          w: Number((y == null ? void 0 : y.w) || 0),
          h: Number((y == null ? void 0 : y.h) || 0)
        }, d = !0;
      } catch {
      }
    d && (Mt(), Ee());
  }
  async function j_() {
    let o = !1;
    for (const c of v.stickers) {
      const d = c.source.data_url;
      if (d)
        try {
          const m = await fetch(d).then((P) => P.blob()), y = String(m.type || "image/png").split("/")[1] || "png", _ = new File([m], `${c.id}.${y}`, { type: m.type || "image/png" }), w = await co(_, {
            fetchApi: (P, C) => sn.fetchApi(P, C)
          });
          c.source = Al(w), o = !0;
        } catch {
        }
    }
    o && (Mt(), Ee());
  }
  function H_() {
    if (r || t !== "cutout") return;
    const o = ft();
    if (o) {
      nr(o), f.mode = "pano", N && fr() ? Bi(Mg(Lv(wn(), o.position), rh(), T.width, T.height)) : Lp(Xt(Number(o.yaw_deg || 0)), ve(Number(o.pitch_deg || 0), -89.9, 89.9)), at(), dt(), Ee({ cause: "cutout_frame" });
      return;
    }
    const c = Fy({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Xt(Number(f.viewYaw || 0)),
      pitchDeg: Number(f.viewPitch || 0),
      viewFovDeg: Number(f.viewFov || 90)
    });
    v.shots = [c], nr(c), Da(), f.mode = "pano", St(), Mt(), at(), dt(), Ee({ cause: "cutout_frame" });
  }
  function G_() {
    r || !I || Ci() || (xn(), v.camera = hN(wn()), pr(), nr(ft()), Da(), St(), Mt(), at(), dt(), Ee({ cause: "cutout_frame" }));
  }
  function K_() {
    xn(), v.camera = null, nr(null), pr(), St(), Mt(), at(), dt(), Ee({ cause: "cutout_frame" });
  }
  function Ah(o, c) {
    I && tr(o) && (v.camera.projection = c === fa ? "erp" : "perspective", c === fa) || J_(o, c);
  }
  function W_() {
    r || t !== "cutout" || (v.shots = [], f.selectedId = null, f.selectedIds = [], f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, v.active.selected_shot_id = null, St(), Mt(), at(), dt(), Ee());
  }
  function B_() {
    const o = Array.isArray(v.stickers) ? v.stickers : [], c = [];
    for (const d of o)
      Mn(d) && (d.visible = !1, c.push(d));
    return c;
  }
  function Ch(o, c, d = "Clear") {
    return new Promise((m) => {
      E.confirmDialog = {
        visible: !0,
        title: String(o || ""),
        text: String(c || ""),
        confirmLabel: String(d || "Confirm"),
        resolve: m
      };
    });
  }
  async function U_() {
    var d, m;
    if (r || !await Ch(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = ha(null), Pr();
    const c = B_();
    if (t === "stickers")
      v.stickers = k ? v.stickers.filter((y) => y.placement === "world" || c.includes(y)) : c, k || (v.assets = {}), f.selectedId = ((d = c[0]) == null ? void 0 : d.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = ((m = c[0]) == null ? void 0 : m.id) || null, Do();
    else {
      const y = sN(v.shots, v.active.selected_shot_id);
      v.stickers = c, v.assets = {}, v.shots = y.shots, f.selectedId = y.selectedShotId, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = y.selectedShotId, !y.selectedShotId && f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, Do();
    }
    St(), Mt(), at(), dt(), Ee();
  }
  async function Y_(o) {
    var _, w, P, C;
    if (r) return;
    const c = o === "mask" ? "mask" : "paint", d = c === "mask" ? "Mask" : "Paint", m = Qs(c);
    if (!(!m.length && !(((_ = f.interaction) == null ? void 0 : _.kind) === "draw" && ((w = f.interaction) == null ? void 0 : w.layerKind) === c) || !await Ch(
      `Clear ${d}`,
      `This will remove all ${c} strokes in the current node.`,
      `Clear ${d}`
    ))) {
      if (((P = f.interaction) == null ? void 0 : P.kind) === "draw" && ((C = f.interaction) == null ? void 0 : C.layerKind) === c) {
        const Z = rr(f.interaction);
        Z && f.paintEngine.cancelActiveStroke(Z), f.interaction = null;
      }
      m.length = 0, v.painting.raster_objects = ri().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") !== c), c === "paint" && (Io().length = 0), Pr(), St(), Mt(), at(), dt(), Gn(), Ee();
    }
  }
  function X_() {
    if (r) return;
    const o = Ln();
    if (!o || !hn(o) || Mn(o) || k && Ap(o)) return;
    let c;
    k ? c = MN(o, ao("st"), Ls()) : (c = JSON.parse(JSON.stringify(o)), c.id = ao("st"), c.yaw_deg = Xt((c.yaw_deg || 0) + 8), c.z_index = Ls()), v.stickers.push(c), v.active.selected_sticker_id = c.id, f.selectedId = c.id, f.selectedIds = [c.id], un(), St(), Mt(), dt(), at(), Ee();
  }
  function q_() {
    const o = To();
    return o ? (Hs(o) && (xn(), xN(v, o.id), yp(), un(), St(), Mt(), at(), dt(), Lr(), Ee()), !0) : !1;
  }
  function Ih() {
    var d, m, y, _, w;
    if (r || N) return;
    const o = ki(), c = Ln();
    if (!(!c && o.length === 0) && !o.some((P) => jn(P))) {
      if (xn(), o.length > 1) {
        const P = new Set(o.filter((z) => Hn(z)).map((z) => String(z.actionGroupId || z.id || ""))), C = new Set(o.filter((z) => Fr(z)).map((z) => Ki(z.rasterObjectId || z.id || ""))), Z = new Set(o.filter(hn).map((z) => String(z.id || "")));
        P.size > 0 && (v.painting.paint.strokes = (Array.isArray((m = (d = v.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((z) => !P.has(String((z == null ? void 0 : z.actionGroupId) || ""))), v.painting.groups = Io().filter((z) => !P.has(String((z == null ? void 0 : z.actionGroupId) || (z == null ? void 0 : z.id) || ""))), Pr()), C.size > 0 && (v.painting.raster_objects = ri().filter((z) => !C.has(String((z == null ? void 0 : z.id) || ""))), Lo()), Z.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((z) => Z.has(String((z == null ? void 0 : z.id) || "")) ? Mn(z) ? ($s(z) || (z.visible = !1), !0) : !1 : !0), Do(), un()), f.selectedId = null, f.selectedIds = [], St(), Mt(), at(), dt(), Ee();
        return;
      }
      if (Hn(c)) {
        const P = String(c.actionGroupId || c.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((_ = (y = v.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes) ? v.painting.paint.strokes : []).filter((C) => String((C == null ? void 0 : C.actionGroupId) || "").trim() !== P), v.painting.groups = Io().filter((C) => String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || "").trim() !== P), Pr(), f.selectedId = null, f.selectedIds = [], St(), Mt(), at(), dt(), Ee();
        return;
      }
      if (Fr(c)) {
        const P = Ki(c.rasterObjectId || c.id || "");
        v.painting.raster_objects = ri().filter((C) => String((C == null ? void 0 : C.id) || "").trim() !== P), Lo(), f.selectedId = null, f.selectedIds = [], St(), Mt(), at(), dt(), Ee();
        return;
      }
      if (I && tr(c)) {
        K_();
        return;
      }
      if (t === "stickers" || hn(c)) {
        if (Mn(c)) {
          if ($s(c)) return;
          c.visible = !1, un(), St(), Mt(), at(), dt(), Ee();
          return;
        }
        v.stickers = v.stickers.filter((P) => P.id !== c.id), Do(), un(), f.selectedId = ((w = Hi()[0]) == null ? void 0 : w.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = f.selectedId, St(), Mt(), at(), dt(), Ee();
        return;
      }
      W_();
    }
  }
  function uu(o, c) {
    const d = ce.frameSafeRect;
    if (!o || !d || f.mode !== "frame") return !1;
    const m = rf * bo(d, o), y = Ed(Od(d, c), m);
    return o.hFOV_deg = y.hFOV_deg, o.vFOV_deg = y.vFOV_deg, !0;
  }
  function J_(o, c) {
    if (!o || o.locked === !0) return;
    const d = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, m = (() => {
      const P = String(o.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(P)) {
        const [z, K] = P.split(":").map((ue) => Number(ue));
        if (Number.isFinite(z) && Number.isFinite(K)) return z >= K;
      }
      const C = Number(o.hFOV_deg || 64), Z = Number(o.vFOV_deg || 40);
      return Math.abs(C - Z) > 1e-6 ? C >= Z : vo(o) >= 1;
    })();
    let [y, _] = d[String(c)] || d["1:1"];
    y >= _ !== m && ([y, _] = [_, y]);
    const w = y / _;
    if (!uu(o, w)) {
      const P = ve(Number(o.vFOV_deg || 40), 1, 179);
      o.vFOV_deg = P, o.hFOV_deg = Ml(P, w);
    }
    o.aspect_id = `${y}:${_}`;
  }
  function Z_(o, c, d) {
    if (!o || o.locked === !0) return !1;
    const m = Ps(c, d);
    if (!m) return !1;
    const y = m.ratio;
    if (!uu(o, y)) {
      const _ = ve(Number(o.vFOV_deg || 40), 1, 179);
      o.vFOV_deg = _, o.hFOV_deg = Ml(_, y);
    }
    return o.aspect_id = m.label, !0;
  }
  function Oh(o) {
    if (!o || o.locked === !0) return;
    const c = String(o.aspect_id || "").trim(), d = $i(o), m = d.tanHalfX / Math.max(1e-12, d.tanHalfY), y = 1 / Math.max(1e-12, m);
    if (!uu(o, y)) {
      const _ = ve(Number(o.vFOV_deg || 60), 1, 179);
      o.vFOV_deg = _, o.hFOV_deg = Ml(_, y);
    }
    if (/^\d+:\d+$/.test(c)) {
      const [_, w] = c.split(":");
      o.aspect_id = `${w}:${_}`;
    } else
      o.aspect_id = uo(o);
  }
  function Q_() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", l && (v.output_preset = x(Number(v.output_preset || 2048))), u && (v.coverage = Xn(u.value)), h && (v.bg_color = String(h.value || v.bg_color || "#00ff00")), ir(), e.setDirtyCanvas(!0, !0));
  }
  function ir() {
    var c;
    if (r) return;
    pr(), db(v), v.coverage = Xn(v.coverage), fb(e, v.active);
    const o = pb(e, v);
    p && !hb(e, o, String(p.value ?? ""), { rebased: j }) && (p.value = o, (c = p.callback) == null || c.call(p, o));
  }
  const Eh = () => ir();
  r || (e.__panoFlushStateBeforeQueue = Eh);
  function fu() {
    v.ui_settings = hT(v.ui_settings), r || ir();
  }
  function Mt() {
    var o;
    r || (ir(), (o = e.setDirtyCanvas) == null || o.call(e, !0, !0));
  }
  function eS() {
    r || tv() && Tp().catch((o) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", o);
    });
  }
  function tS(o = {}) {
    var m, y, _, w, P, C, Z, z, K, ue;
    const c = o.syncPreview !== !1, d = o.syncGraph !== !1;
    c && ((y = (m = e.__panoPreviewNodeRuntime) == null ? void 0 : m.requestDraw) == null || y.call(m), (w = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || w.call(_), (P = e.setDirtyCanvas) == null || P.call(e, !0, !1)), d && ((Z = (C = e.graph) == null ? void 0 : C.setDirtyCanvas) == null || Z.call(C, !0, !0), (ue = (K = (z = sr) == null ? void 0 : z.canvas) == null ? void 0 : K.setDirty) == null || ue.call(K, !0, !0));
  }
  function Da() {
    f.primaryTool !== "cursor" && (f.primaryTool = "cursor", Gn(), at());
  }
  function Th() {
    return f.mode === "pano" || f.mode === "unwrap";
  }
  function pr(o = !0) {
    var m, y;
    if (!j) return;
    const c = H;
    if (!ai()) {
      H = null, (m = v.shots) != null && m.length && (v.shots = []), c && Fh(c, null);
      return;
    }
    const d = (y = v.shots) == null ? void 0 : y[0];
    o && d && H && gN(v.camera, f.frame, d, H), H = bg(v.camera, f.frame), d ? Object.assign(d, H, { position: [...H.position] }) : v.shots = [{ ...H, position: [...H.position] }], c || Fh(null, H);
  }
  function Fh(o, c) {
    var _, w;
    !c && f.mode === "frame" && Dh(o);
    const d = (c == null ? void 0 : c.position) ?? [0, 0, 0];
    if (((w = (_ = f.viewTransition) == null ? void 0 : _.end) == null ? void 0 : w.mode) === "3dof") {
      Bi({ ...wn(), position: d }, f.viewTransition.end);
      return;
    }
    if (f.mode !== "pano" || f.spaceMode !== "3dof" || !Pa()) return;
    const m = (o == null ? void 0 : o.position) ?? [0, 0, 0];
    if (m.every((P, C) => P === d[C])) return;
    const y = { ...wn(), position: m };
    Aa({ mode: "6dof", position: m, moved: !0 }), f.viewDistance = y.distance, Bi({ ...y, position: d }, { mode: "3dof", moved: !1 });
  }
  function Dh(o) {
    if (f.mode = "pano", !o) return;
    Na();
    const c = wn().distance;
    f.viewYaw = Xt(o.yaw_deg), f.viewPitch = ve(o.pitch_deg, -89.9, 89.9), f.viewFov = ve(o.hFOV_deg, 35, 140), f.spaceMode === "6dof" && Aa({ mode: "6dof", position: [...o.position], moved: !0 }), f.viewDistance = c, ce.backgroundDirty = !0;
  }
  function ft() {
    if (!R) return null;
    const o = Array.isArray(v.shots) ? v.shots : [];
    if (!o.length) return null;
    const c = String(v.active.selected_shot_id || "");
    return o.find((d) => String((d == null ? void 0 : d.id) || "") === c) || o[0] || null;
  }
  function nS() {
    var Le, pe, Pe, $e, Qe;
    if (!T) return null;
    const o = (Le = T.getBoundingClientRect) == null ? void 0 : Le.call(T), c = Number((o == null ? void 0 : o.width) || 0) > 0 ? T.width / o.width : 1, d = Number((o == null ? void 0 : o.height) || 0) > 0 ? T.height / o.height : 1;
    ce.frameCanvasScale = Math.min(c, d);
    let m = 24, y = 24;
    const _ = Math.max(m + 1, T.width - 24);
    let w = Math.max(y + 1, T.height - 24);
    const P = (pe = O == null ? void 0 : O.getBoundingClientRect) == null ? void 0 : pe.call(O), C = (Pe = V == null ? void 0 : V.getBoundingClientRect) == null ? void 0 : Pe.call(V);
    let Z = 24;
    P && o && P.width > 0 && P.height > 0 && (Z = Math.max(Z, (P.right - o.left) * c + h0)), C && o && C.width > 0 && C.height > 0 && (($e = E.frameRail) == null ? void 0 : $e.visible) === !0 && (Z = Math.max(Z, (o.right - C.left) * c + h0)), m = Math.max(m, Z);
    const z = Math.min(_, T.width - Z);
    let K = 24;
    const ue = (Qe = Oe == null ? void 0 : Oe.getBoundingClientRect) == null ? void 0 : Qe.call(Oe);
    if (ue && o && ue.width > 0 && ue.height > 0 && (K = Math.max(K, (ue.bottom - o.top) * d + of)), [be, L].forEach((Be) => {
      var _t;
      if (!Be || !o) return;
      const Je = getComputedStyle(Be);
      if (Je.display === "none" || Je.visibility === "hidden" || Number(Je.opacity) <= 0) return;
      const it = (_t = Be.getBoundingClientRect) == null ? void 0 : _t.call(Be);
      !it || it.width <= 0 || it.height <= 0 || (K = Math.max(K, (o.bottom - it.top) * d + of));
    }), le && o) {
      const Be = getComputedStyle(le);
      Be.display !== "none" && Be.visibility !== "hidden" && Number(Be.opacity) > 0 && (K = Math.max(K, (XE + of) * d));
    }
    return y = Math.max(y, K), w = Math.max(y + 1, Math.min(w, T.height - K)), {
      x: m,
      y,
      w: Math.max(1, z - m),
      h: Math.max(1, w - y)
    };
  }
  function qs(o = ft()) {
    if (!o || !T) return null;
    const c = ce.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, T.width - 48),
      h: Math.max(1, T.height - 48)
    };
    return oM(c, o, rf * bo(c, o));
  }
  function Ar(o = ft()) {
    const c = qs(o);
    return c ? { x: c.x, y: c.y, w: c.w, h: c.h } : null;
  }
  function du() {
    return R && !!ft();
  }
  function rS(o, c) {
    const d = ft();
    if (!d || d.locked === !0) return !1;
    const m = Number(c) > 0, y = Ly(d, c);
    if (!y) return !1;
    if (m) {
      const _ = rf * bo(
        ce.frameSafeRect || { w: T.width, h: T.height },
        y
      ), w = Td({ width: T.width, height: T.height }, _);
      if (w.halfW < T.width * 0.5 - 1e-6 || w.halfH < T.height * 0.5 - 1e-6) return !1;
    }
    return d.hFOV_deg = y.hFOV_deg, d.vFOV_deg = y.vFOV_deg, Lh(), at(), !0;
  }
  function Lh() {
    f.frameWheelChanged = !0, f.frameWheelCommitTimer && window.clearTimeout(f.frameWheelCommitTimer), f.frameWheelCommitTimer = window.setTimeout(() => {
      f.frameWheelCommitTimer = 0, f.frameWheelChanged && (f.frameWheelChanged = !1, St(), Mt(), at());
    }, 180);
  }
  function pu() {
    return j && f.mode === "frame" && Pa();
  }
  function La() {
    const o = ft(), c = qs(o);
    return o && c ? Ig(o, c, { width: T.width, height: T.height }) : null;
  }
  function Rh() {
    var o;
    return ((o = Rr()) == null ? void 0 : o.radius) || Cr;
  }
  function Ra(o) {
    const { position: c, yaw_deg: d, pitch_deg: m, roll_deg: y, hFOV_deg: _ } = o.shot;
    return { position: c, yaw_deg: d, pitch_deg: m, roll_deg: y, hFOV_deg: _, distance: Rh() };
  }
  function Vh(o, c) {
    const { rect: d } = o;
    return Re.pickSurface(ih(o.shot), c.x - d.x, c.y - d.y, d.w, d.h);
  }
  function $h(o, c, d) {
    return Uu(c, Vh(o, d), null, Vr());
  }
  function zh(o) {
    return JSON.stringify([Ra(o), o.rect]);
  }
  function jh(o) {
    const c = ft();
    c.position = [...o.position], c.yaw_deg = o.yaw_deg, c.pitch_deg = o.pitch_deg;
  }
  function Hh(o, c) {
    const d = ft();
    !d || r || d.locked === !0 || (f.interaction = {
      kind: "pan_frame",
      shot: d,
      last: o,
      start: { yaw_deg: Number(d.yaw_deg || 0), pitch_deg: Number(d.pitch_deg || 0) },
      changed: !1
    }, Ot(o), T.setPointerCapture(c));
  }
  function iS(o, c, d) {
    const m = La();
    if (!m || r) return;
    const y = Ra(m);
    f.interaction = o === "orbit" ? { kind: "frame_orbit", last: c, pivot: $h(m, y, c), changed: !1 } : { kind: "frame_pan", last: c, depth: _g(y, Vr()), changed: !1 }, Ot(c), T.setPointerCapture(d);
  }
  function oS(o, c) {
    const d = La();
    if (!d) return;
    const m = Ra(d), y = c.x - o.last.x, _ = c.y - o.last.y;
    jh(o.kind === "frame_pan" ? xg(m, y, _, d.rect.w, d.rect.h, o.depth) : wg(m, y, _, T.height, o.pivot)), o.changed = o.changed || y !== 0 || _ !== 0, o.last = c, Ee({ localOnly: !0, cause: "frame_view" });
  }
  function aS(o, c) {
    const d = La();
    if (!d || r) return;
    const m = Ra(d), y = performance.now(), _ = { x: o.x, y: o.y, time: y, key: Re.contentRevision(), view: zh(d) };
    if (!Sg(Bt, _)) {
      const w = Vh(d, o);
      Bt = { ..._, cost: performance.now() - y, hit: w };
    }
    jh(kg(m, Uu(m, Bt.hit, null, Vr()), c, Vr())), Bt.view = zh(La() ?? d), Bt.wheelTime = y, Lh(), at(), Ee({ localOnly: !0, cause: "frame_view" });
  }
  function sS() {
    return f.frameWheelCommitTimer && (window.clearTimeout(f.frameWheelCommitTimer), f.frameWheelCommitTimer = 0), f.frameWheelChanged ? (f.frameWheelChanged = !1, St(), Mt(), at(), !0) : !1;
  }
  function Va() {
    const o = f.interaction;
    if (!(o != null && o.shot) || !o.start || o.kind !== "pan_frame" && o.kind !== "roll_frame") return !1;
    const c = o.kind === "roll_frame";
    return o.kind === "pan_frame" ? (o.shot.yaw_deg = o.start.yaw_deg, o.shot.pitch_deg = o.start.pitch_deg) : o.shot.roll_deg = o.start.roll_deg, c && Ji(), f.interaction = null, Eo(), oi(), at(), Ot(f.pointerPos), Ee({ localOnly: !0 }), !0;
  }
  function lS(o, c) {
    const d = Number(c || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, d / 2048)
    };
  }
  function qi(o) {
    const c = String(o || "").trim();
    return c === "eraser" ? fi : Yn[c] ? c : f.activeBrushPresetId || fi;
  }
  function Gh() {
    return (f.primaryTool === "paint" || f.primaryTool === "mask") && (Th() || du());
  }
  function Kh() {
    var o;
    return Gh() && ((o = f.pointerPos) == null ? void 0 : o.inside) === !0;
  }
  function Js(o, c = !0) {
    const d = Number((o == null ? void 0 : o.x) || 0), m = Number((o == null ? void 0 : o.y) || 0), y = c !== !1, _ = f.pointerPos || { x: 0, y: 0, inside: !1 }, w = _.inside !== y || Math.abs(_.x - d) > 0.01 || Math.abs(_.y - m) > 0.01;
    return f.pointerPos = { x: d, y: m, inside: y }, w;
  }
  function cS() {
    var z, K;
    if (!Kh()) return null;
    const o = f.primaryTool === "mask" ? "mask" : "paint", c = o === "mask" ? f.maskTool : f.paintTool, d = qi(c), m = Yn[d] || Yn[fi], y = Number(f.brushSizes[d] ?? 10), _ = Math.max(1, y) * Math.max(0.1, Number(m.sizeScale ?? 1)), w = Math.max(3, _ * 0.5), P = o === "mask" ? c === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : c === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : or(f.paintColor), C = o === "mask" ? c === "lasso_fill" ? 0.18 : 0.2 : c === "eraser" ? 0.06 : ve(Math.max(0.16, Number(P.a ?? 1) * 0.3), 0.16, 0.52), Z = o === "mask" ? 0.95 : c === "eraser" ? 0.75 : ve(Math.max(0.46, Number(P.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: o,
      toolKind: c,
      preset: m,
      radius: w,
      fillStyle: Gr(P, C),
      strokeStyle: Gr(P, Z),
      x: Number(((z = f.pointerPos) == null ? void 0 : z.x) || 0),
      y: Number(((K = f.pointerPos) == null ? void 0 : K.y) || 0),
      hotspotX: w,
      hotspotY: w
    };
  }
  function uS() {
    var ue, Le, pe;
    const o = cS();
    if (!tt) return;
    if (!o) {
      tt.style.display = "none";
      return;
    }
    let c = o.radius * 2, d = o.radius * 2, m = "999px", y = 0, _ = o.fillStyle, w = "1px solid rgba(222, 222, 222, 0.72)", P = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const C = "rgba(222, 222, 222, 0.72)", Z = "rgba(52, 52, 52, 0.72)";
    let z = Number(o.hotspotX ?? c * 0.5), K = Number(o.hotspotY ?? d * 0.5);
    if (o.toolKind === "lasso_fill")
      c = vc, d = vc, m = "0", w = "0", P = "none", z = ZE, K = QE, _ = aT(o.fillStyle, Z, C);
    else if (o.layerKind === "mask")
      _ = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (o.toolKind === "marker") {
      const Pe = Math.max(1, Number(((ue = o.preset) == null ? void 0 : ue.aspect) ?? 1));
      c = Math.max(10, o.radius * 2 * Pe), d = Math.max(6, o.radius * 2), m = `${Math.min(6, d * 0.42)}px`, y = Number(((pe = (Le = o.preset) == null ? void 0 : Le.angle) == null ? void 0 : pe.value) || 0) * fo;
    } else o.toolKind === "brush" ? _ = `radial-gradient(circle at 50% 50%, ${o.strokeStyle} 0%, ${o.fillStyle} 45%, rgba(0,0,0,0) 100%)` : o.toolKind === "eraser" && (_ = "rgba(255,255,255,0.14)");
    tt.style.display = "block", tt.style.width = `${Math.round(c)}px`, tt.style.height = `${Math.round(d)}px`, tt.style.borderRadius = m, tt.style.border = w, tt.style.boxShadow = P, tt.style.background = _, tt.style.backgroundRepeat = "no-repeat", tt.style.backgroundPosition = "center", tt.style.backgroundSize = "contain", tt.style.transform = `translate(${Math.round(o.x - z)}px, ${Math.round(o.y - K)}px) rotate(${y}deg)`;
  }
  function fS() {
    var Be;
    if (!st || !Se) return;
    const o = f.primaryTool === "mask" ? "mask" : "paint", c = o === "mask" ? f.maskTool : f.paintTool;
    if (c === "lasso_fill") return;
    const d = qi(c), m = Yn[d] || Yn[fi], y = Number(f.brushSizes[d] ?? 10), _ = Math.max(1, y) * Math.max(0.1, Number(m.sizeScale ?? 1)), w = Math.max(6, _ * 0.5), P = c === "eraser", C = o === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : P ? { r: 1, g: 1, b: 1, a: 0.22 } : or(f.paintColor), Z = o === "mask" ? Gr(C, 0.22) : P ? "rgba(255,255,255,0.14)" : Gr(C, ve(Math.max(0.18, Number(C.a ?? 1) * 0.34), 0.18, 0.56)), z = o === "mask" ? Gr(C, 0.96) : P ? "rgba(255,255,255,0.72)" : Gr(C, ve(Math.max(0.56, Number(C.a ?? 1) * 0.96), 0.56, 1));
    let K = w * 2, ue = w * 2, Le = "999px", pe = 0, Pe = Z;
    const $e = "rgba(222, 222, 222, 0.72)", Qe = "rgba(52, 52, 52, 0.72)";
    if (o === "mask")
      Pe = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (c === "marker") {
      const Je = Math.max(1, Number((m == null ? void 0 : m.aspect) ?? 1));
      K = Math.max(16, w * 2 * Je), ue = Math.max(10, w * 2), Le = `${Math.min(8, ue * 0.42)}px`, pe = Number(((Be = m == null ? void 0 : m.angle) == null ? void 0 : Be.value) || 0) * fo;
    } else c === "brush" ? Pe = `radial-gradient(circle at 50% 50%, ${z} 0%, ${Z} 48%, rgba(0,0,0,0) 100%)` : c === "lasso_fill" ? (K = Math.max(18, w * 1.8), ue = K, Pe = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${z} 43%, ${z} 58%, rgba(0,0,0,0) 59%)`) : P && (Pe = "rgba(255,255,255,0.12)");
    Se.style.width = `${Math.round(K)}px`, Se.style.height = `${Math.round(ue)}px`, Se.style.borderRadius = Le, Se.style.background = Pe, Se.style.border = `1px solid ${$e}`, Se.style.boxShadow = `0 0 0 1px ${Qe}`, Se.style.transform = `rotate(${pe}deg)`, ot && (clearTimeout(ot), ot = 0), st.classList.remove("fade-out"), st.classList.add("show");
  }
  function Zs() {
    !st || !st.classList.contains("show") || (st.classList.add("fade-out"), ot && clearTimeout(ot), ot = window.setTimeout(() => {
      st.classList.remove("show", "fade-out"), ot = 0;
    }, 180));
  }
  function Wh(o, c, d, m) {
    const y = qi(c), _ = Yn[y] || Yn[fi], w = f.brushSizes[y] ?? 10, P = Math.max(1, w) * Math.max(0.1, _.sizeScale ?? 1), C = lS(m, P), Z = d.map((K) => ({
      ...K,
      t: Number((K == null ? void 0 : K.t) || 0),
      widthScale: Number.isFinite(Number(K == null ? void 0 : K.widthScale)) ? Math.max(0, Number(K.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(K == null ? void 0 : K.pressureLike)) ? Math.max(0, Number(K.pressureLike)) : 1
    })), z = {
      id: Uo(o),
      actionGroupId: Uo("ag"),
      targetSpace: m && typeof m == "object" ? { ...m, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: o,
      toolKind: c,
      size: P,
      createdAt: Date.now(),
      color: o === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: C.radiusModel,
      radiusValue: C.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: Z.map((K) => ({ ...K })),
        points: Z.map((K) => ({ ...K }))
      }
    };
    return u0(z, _), f.mode, Number(_.aspect ?? 1), Number(z.aspect ?? 1), String(z.stampKind || ""), Number(z.size || 0), String(z.radiusModel || ""), Number(z.radiusValue || 0), { ...z.targetSpace }, z;
  }
  function Bh(o, c, d, m) {
    const y = d.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), _ = qi(c), w = Yn[_] || Yn[fi], P = {
      id: Uo(o),
      actionGroupId: Uo("ag"),
      targetSpace: m && typeof m == "object" ? { ...m, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: o,
      toolKind: c,
      size: 10,
      createdAt: Date.now(),
      color: o === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: y.map((C) => ({ ...C }))
      }
    };
    return u0(P, w), f.mode, Number(w.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), { ...P.targetSpace }, P;
  }
  function Qs(o) {
    const c = v.painting || (v.painting = ha(null)), d = c[o] || (c[o] = { strokes: [] });
    return Array.isArray(d.strokes) || (d.strokes = []), d.strokes;
  }
  function dS(o, c, d = performance.now()) {
    let m;
    if (f.mode === "frame") {
      const Z = ft();
      if (!Z || (m = kr(c, Z, d), !m)) return !1;
    } else
      m = Dr(c, d);
    if (!m) return !1;
    const y = o.stroke.geometry.rawPoints || o.stroke.geometry.points, _ = o.stroke.geometry.points, w = y[y.length - 1];
    if (w) {
      const Z = Math.abs(Number(m.u ?? m.x ?? 0) - Number(w.u ?? w.x ?? 0)), z = Math.abs(Number(m.v ?? m.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (Z < 15e-4 && z < 15e-4) return !1;
    }
    const P = {
      ...m,
      t: Number((m == null ? void 0 : m.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    y.push({ ...P }), _.push({ ...P });
    const C = rr();
    if (C) {
      const Z = f.paintEngine.ensureTarget(C);
      f.paintEngine.appendStrokePoint(Z, Number(P.u ?? 0), Number(P.v ?? 0), o.stroke);
    }
    return !0;
  }
  function pS(o, c, d = performance.now()) {
    var w, P;
    let m;
    if (f.mode === "frame") {
      const C = ft();
      if (!C) return !1;
      m = kr(c, C, d);
    } else
      m = Dr(c, d);
    const y = (P = (w = o == null ? void 0 : o.stroke) == null ? void 0 : w.geometry) == null ? void 0 : P.points;
    if (!m || !Array.isArray(y)) return !1;
    const _ = y[y.length - 1];
    if (_) {
      const C = Math.abs(Number(m.u ?? m.x ?? 0) - Number(_.u ?? _.x ?? 0)), Z = Math.abs(Number(m.v ?? m.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (C < 15e-4 && Z < 15e-4) return !1;
    }
    return y.push({
      ...m,
      t: Number((m == null ? void 0 : m.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function hS(o) {
    var Je, it, _t, Et, Vt;
    const c = (o == null ? void 0 : o.stroke) || null;
    if (!c || (o == null ? void 0 : o.layerKind) !== "paint" || String((c == null ? void 0 : c.toolKind) || "") !== "eraser") return !1;
    Ia();
    const d = rr(), m = ou(d.width, d.height);
    if (!mh(m, c, { w: d.width, h: d.height })) return !1;
    const y = ((it = (Je = m.ctx) == null ? void 0 : Je.getImageData(0, 0, d.width, d.height)) == null ? void 0 : it.data) || null;
    if (!y) return !1;
    const _ = new Map(Io().map((Ge) => [String((Ge == null ? void 0 : Ge.actionGroupId) || (Ge == null ? void 0 : Ge.id) || "").trim(), Ge ? { ...Ge } : null])), w = [], P = [], C = [...ri().filter((Ge) => String((Ge == null ? void 0 : Ge.layerKind) || "paint") !== "paint")];
    let Z = !1, z = W1().reduce((Ge, De) => Math.max(Ge, Number((De == null ? void 0 : De.z_index) || 0)), -1) + 1;
    function K(Ge, De, Xe, ct = 8) {
      let ut = De, Ct = Xe, Nt = -1, Yt = -1;
      for (let Pt = 0; Pt < Xe; Pt += 1)
        for (let dn = 0; dn < De; dn += 1)
          Ge[(Pt * De + dn) * 4 + 3] <= ct || (dn < ut && (ut = dn), Pt < Ct && (Ct = Pt), dn > Nt && (Nt = dn), Pt > Yt && (Yt = Pt));
      return Nt < ut || Yt < Ct ? null : { minX: ut, minY: Ct, maxX: Nt, maxY: Yt };
    }
    const ue = K(y, d.width, d.height, 8);
    if (!ue) return !1;
    function Le(Ge, De) {
      return !Ge || !De ? !1 : !(Ge.maxX < De.minX || De.maxX < Ge.minX || Ge.maxY < De.minY || De.maxY < Ge.minY);
    }
    function pe(Ge, De) {
      const Xe = Co((Ge == null ? void 0 : Ge.actionGroupId) || (Ge == null ? void 0 : Ge.id) || "", "paint", De);
      if (!Xe) return null;
      const ct = Xe.centerUv.u - Xe.halfW, ut = Xe.centerUv.u + Xe.halfW, Ct = Xe.centerUv.v - Xe.halfH, Nt = Xe.centerUv.v + Xe.halfH, Yt = d.width, Pt = d.height;
      return {
        minX: Math.floor((ct % 1 + 1) % 1 * Yt),
        maxX: Math.ceil((ut % 1 + 1) % 1 * Yt),
        minY: Math.floor(ve(Ct, 0, 1) * Pt),
        maxY: Math.ceil(ve(Nt, 0, 1) * Pt),
        wraps: ut - ct >= 1 || ct < 0 || ut > 1
      };
    }
    function Pe(Ge) {
      const De = (Ge == null ? void 0 : Ge.bbox) || null;
      if (!De) return null;
      const Xe = (Ge == null ? void 0 : Ge.transform) || {}, ct = d.width, ut = d.height, Ct = Number(De.u0 || 0) + Number(Xe.du || 0), Nt = Number(De.u1 || 0) + Number(Xe.du || 0), Yt = Number(De.v0 || 0) + Number(Xe.dv || 0), Pt = Number(De.v1 || 0) + Number(Xe.dv || 0);
      return {
        minX: Math.floor((Ct % 1 + 1) % 1 * ct),
        maxX: Math.ceil((Nt % 1 + 1) % 1 * ct),
        minY: Math.floor(ve(Yt, 0, 1) * ut),
        maxY: Math.ceil(ve(Pt, 0, 1) * ut),
        wraps: Nt - Ct >= 1 || Ct < 0 || Nt > 1
      };
    }
    function $e(Ge) {
      return Ge ? Ge.wraps ? Le(ue, { minX: 0, maxX: Ge.maxX, minY: Ge.minY, maxY: Ge.maxY }) || Le(ue, { minX: Ge.minX, maxX: d.width - 1, minY: Ge.minY, maxY: Ge.maxY }) : Le(ue, Ge) : !0;
    }
    function Qe(Ge) {
      if (!Ge) return { touched: !1, canvas: null };
      const De = ou(d.width, d.height, { readback: !0 });
      De.ctx.drawImage(Ge, 0, 0);
      const Xe = De.ctx.getImageData(0, 0, d.width, d.height);
      De.ctx.save(), De.ctx.globalCompositeOperation = "destination-out", De.ctx.drawImage(m.canvas, 0, 0), De.ctx.restore();
      const ct = De.ctx.getImageData(0, 0, d.width, d.height);
      for (let ut = 0; ut < d.width * d.height; ut += 1) {
        if (y[ut * 4 + 3] <= 8) continue;
        const Nt = Xe.data[ut * 4 + 3], Yt = ct.data[ut * 4 + 3];
        if (Nt > Yt)
          return { touched: !0, canvas: De.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Be(Ge, De, Xe) {
      const ct = Number(Xe == null ? void 0 : Xe.z_index), ut = h_(Ge, De, Xe).map((Ct, Nt) => ({
        ...Ct,
        z_index: Number.isFinite(ct) ? ct + Nt * 1e-3 : z + Nt * 1e-3
      }));
      return ut.length && (z = Math.max(z, ...ut.map((Ct) => Number((Ct == null ? void 0 : Ct.z_index) || 0))) + 1), ut;
    }
    for (const Ge of Io()) {
      const De = String((Ge == null ? void 0 : Ge.actionGroupId) || (Ge == null ? void 0 : Ge.id) || "").trim();
      if (!De) continue;
      const Xe = Oo(De, "paint");
      if (!$e(pe(Ge, Xe))) {
        P.push(Ge), w.push(...Xe);
        continue;
      }
      const ct = ((Et = (_t = f.paintEngine) == null ? void 0 : _t.getGroupTarget) == null ? void 0 : Et.call(_t, De)) || null, ut = ((Vt = ct == null ? void 0 : ct.committedPaint) == null ? void 0 : Vt.canvas) || null;
      if (!ut) {
        P.push(Ge), w.push(...Xe);
        continue;
      }
      const Ct = Qe(ut);
      if (!Ct.touched || !Ct.canvas) {
        P.push(Ge), w.push(...Xe);
        continue;
      }
      Z = !0;
      const Nt = Be(Ct.canvas, "paint", _.get(De) || Ge || {});
      C.push(...Nt);
    }
    for (const Ge of ri().filter((De) => String((De == null ? void 0 : De.layerKind) || "paint") === "paint")) {
      if (!$e(Pe(Ge))) {
        C.push(Ge);
        continue;
      }
      const De = $1(Ge, null);
      if (!De) {
        C.push(Ge);
        continue;
      }
      const Xe = Qe(De);
      if (!Xe.touched || !Xe.canvas) {
        C.push(Ge);
        continue;
      }
      Z = !0;
      const ct = Be(Xe.canvas, "paint", Ge);
      C.push(...ct);
    }
    return Z ? (v.painting.paint.strokes = w, v.painting.groups = P.sort((Ge, De) => Number((Ge == null ? void 0 : Ge.z_index) || 0) - Number((De == null ? void 0 : De.z_index) || 0)), v.painting.raster_objects = C.sort((Ge, De) => Number((Ge == null ? void 0 : Ge.z_index) || 0) - Number((De == null ? void 0 : De.z_index) || 0)), xa({ preservePanelValues: !1 }), !0) : !1;
  }
  function mS(o) {
    var w, P, C, Z, z;
    if ((((P = (w = o.stroke) == null ? void 0 : w.geometry) == null ? void 0 : P.rawPoints) || ((Z = (C = o.stroke) == null ? void 0 : C.geometry) == null ? void 0 : Z.points) || []).length >= 1) {
      hu(o);
      const K = rr();
      K && (String(((z = o.stroke) == null ? void 0 : z.toolKind) || "") === "eraser" ? f.paintEngine.cancelActiveStroke(K) : f.paintEngine.commitActiveStroke(o.stroke, K)), o._hasCommittedSegments = !0;
    }
    const d = o.stroke, m = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, y = Wh(o.layerKind, d.toolKind, [], m);
    y.actionGroupId = d.actionGroupId, o.stroke = y;
    const _ = rr();
    _ && f.paintEngine.beginStroke(y, _);
  }
  function gS(o) {
    var w, P;
    if ((((P = (w = o.stroke) == null ? void 0 : w.geometry) == null ? void 0 : P.points) || []).length >= 3) {
      hu(o);
      const C = rr();
      C && f.paintEngine.commitActiveStroke(o.stroke, C), o._hasCommittedSegments = !0;
    }
    const d = o.stroke, m = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, y = Bh(o.layerKind, d.toolKind, [], m);
    y.actionGroupId = d.actionGroupId, o.stroke = y;
    const _ = rr();
    _ && f.paintEngine.beginStroke(y, _);
  }
  function hu(o) {
    var _, w, P, C;
    const c = ((_ = o == null ? void 0 : o.stroke) == null ? void 0 : _.geometry) || null;
    if (!c) return !1;
    const d = String(((w = o == null ? void 0 : o.stroke) == null ? void 0 : w.toolKind) || "pen");
    if (o.layerKind === "paint" && d === "eraser")
      return c.geometryKind !== "lasso_fill" && (c.processedPoints = iu(c.rawPoints || c.points || [], o.stroke.targetSpace, !0)), hS(o);
    const m = o.layerKind === "paint" && d !== "eraser";
    if (c.geometryKind === "lasso_fill")
      return (Array.isArray(c.points) ? c.points : []).length < 3 ? !1 : (m && bp((P = o.stroke) == null ? void 0 : P.actionGroupId), Qs(o.layerKind).push(o.stroke), !0);
    const y = c.rawPoints || c.points || [];
    return y.length < 1 ? !1 : (c.processedPoints = iu(y, o.stroke.targetSpace, !0), m && bp((C = o.stroke) == null ? void 0 : C.actionGroupId), Qs(o.layerKind).push(o.stroke), !0);
  }
  function Uh(o) {
    var d;
    if (R && f.mode === "frame") {
      const m = ft(), y = Ar(m);
      if (!m || !y || !(Number((o == null ? void 0 : o.x) || 0) >= Number(y.x || 0) && Number((o == null ? void 0 : o.x) || 0) <= Number(y.x || 0) + Number(y.w || 0) && Number((o == null ? void 0 : o.y) || 0) >= Number(y.y || 0) && Number((o == null ? void 0 : o.y) || 0) <= Number(y.y || 0) + Number(y.h || 0))) return null;
      const w = kr(o, m, performance.now()), P = w ? H1(w) : null;
      if (P)
        for (const Z of jc()) {
          if (!hn(Z)) continue;
          const z = Fp(Z, P);
          if (z && Number(z.x) >= 0 && Number(z.x) <= 1 && Number(z.y) >= 0 && Number(z.y) <= 1) {
            const K = mn(Z);
            if (K != null && K.visible) return { item: Z, geom: K };
          }
        }
      const C = wp(!1).slice().sort((Z, z) => Number((z == null ? void 0 : z.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0));
      for (const Z of C) {
        if (Z.type === "strokeGroup") {
          const ue = kp(Ip("paint", Z.actionGroupId || Z.id || ""));
          if (!ue) continue;
          const Le = mn(ue);
          if (!(Le != null && Le.visible)) continue;
          const pe = Array.isArray(Le.strokePaths) ? Le.strokePaths : [];
          for (const Pe of pe) {
            const $e = Array.isArray(Pe == null ? void 0 : Pe.points) ? Pe.points : [];
            if (!$e.length) continue;
            if (Pe.closed && $e.length >= 3 && Ei(o, $e)) return { item: ue, geom: Le };
            const Qe = Math.max(8, Number((Pe == null ? void 0 : Pe.lineWidth) || 0) * 0.5 + 6);
            for (let Be = 0; Be < $e.length - 1; Be += 1)
              if (lf(o, $e[Be], $e[Be + 1]) <= Qe * Qe) return { item: ue, geom: Le };
            if ($e.length === 1 && rs(o, $e[0]) <= Qe * Qe) return { item: ue, geom: Le };
          }
          continue;
        }
        if (Z.type === "rasterObject") {
          const ue = xp(Cp(((d = Z.item) == null ? void 0 : d.id) || Z.id || ""));
          if (!ue) continue;
          const Le = mn(ue);
          if (Mp(ue, Le, o, w)) return { item: ue, geom: Le };
          continue;
        }
        const z = Z.item;
        if (!z || !hn(z) || !P) continue;
        const K = Fp(z, P);
        if (K && Number(K.x) >= 0 && Number(K.x) <= 1 && Number(K.y) >= 0 && Number(K.y) <= 1) {
          const ue = mn(z);
          if (ue != null && ue.visible) return { item: z, geom: ue };
        }
      }
      return null;
    }
    const c = [
      ...wp(!1).slice().sort((m, y) => Number((y == null ? void 0 : y.z_index) || 0) - Number((m == null ? void 0 : m.z_index) || 0)).map((m) => {
        var y;
        return m.type === "strokeGroup" ? kp(Ip("paint", m.actionGroupId || m.id || "")) : m.type === "rasterObject" ? xp(Cp(((y = m.item) == null ? void 0 : y.id) || m.id || "")) : m.item;
      }).filter(Boolean),
      ...R ? jc().filter((m) => tr(m)) : []
    ];
    for (const m of c) {
      if (Hn(m)) {
        const _ = mn(m);
        if (!(_ != null && _.visible)) continue;
        const w = Array.isArray(_.strokePaths) ? _.strokePaths : [];
        for (const P of w) {
          const C = Array.isArray(P == null ? void 0 : P.points) ? P.points : [];
          if (!C.length) continue;
          if (P.closed && C.length >= 3 && Ei(o, C)) return { item: m, geom: _ };
          const Z = Math.max(8, Number((P == null ? void 0 : P.lineWidth) || 0) * 0.5 + 6);
          for (let z = 0; z < C.length - 1; z += 1)
            if (lf(o, C[z], C[z + 1]) <= Z * Z) return { item: m, geom: _ };
          if (C.length === 1 && rs(o, C[0]) <= Z * Z) return { item: m, geom: _ };
        }
        continue;
      }
      if (Fr(m)) {
        const _ = mn(m);
        if (!(_ != null && _.visible)) continue;
        if (Mp(m, _, o)) return { item: m, geom: _ };
        continue;
      }
      const y = mn(m);
      if (y.visible && Ei(o, y.corners))
        return { item: m, geom: y };
    }
    return null;
  }
  function $a(o, c, d = null) {
    if (!o || !o.visible) return { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (hn(d)) return Xf(o, c);
    if (o.kind === "strokeGroup") {
      const m = o.corners.findIndex((_) => rs(_, c) <= 121);
      if (m >= 0) {
        const _ = o.corners[m], w = _.x - o.center.x, P = _.y - o.center.y, C = w * P >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: m, cursor: C };
      }
      const y = Array.isArray(o.strokePaths) ? o.strokePaths : [];
      for (const _ of y) {
        const w = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
        if (_.closed && w.length >= 3 && Ei(c, w)) return { kind: "move", cursor: "default" };
        const P = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
        for (let C = 0; C < w.length - 1; C += 1)
          if (lf(c, w[C], w[C + 1]) <= P * P) return { kind: "move", cursor: "default" };
      }
      return Ei(c, o.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (o.kind === "rasterObject") {
      const m = o.corners.findIndex((y) => rs(y, c) <= 121);
      if (m >= 0) {
        const y = o.corners[m], _ = y.x - o.center.x, w = y.y - o.center.y, P = _ * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: m, cursor: P };
      }
      return Ei(c, o.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    return b2(o, c, {
      edges: t === "cutout" || tr(d),
      resize: !(tr(d) && Gi()),
      emptyCursor: f.mode === "pano" ? "grab" : "default"
    });
  }
  function Yh(o, c) {
    return {
      x0: Math.min(Number((o == null ? void 0 : o.x) || 0), Number((c == null ? void 0 : c.x) || 0)),
      y0: Math.min(Number((o == null ? void 0 : o.y) || 0), Number((c == null ? void 0 : c.y) || 0)),
      x1: Math.max(Number((o == null ? void 0 : o.x) || 0), Number((c == null ? void 0 : c.x) || 0)),
      y1: Math.max(Number((o == null ? void 0 : o.y) || 0), Number((c == null ? void 0 : c.y) || 0))
    };
  }
  function yS(o, c) {
    return !!o && !!c && Number(c.x) >= Number(o.x0) && Number(c.x) <= Number(o.x1) && Number(c.y) >= Number(o.y0) && Number(c.y) <= Number(o.y1);
  }
  function bS(o, c) {
    if (!o || !(c != null && c.visible) || !Array.isArray(c.corners)) return !1;
    if (c.corners.some((y) => yS(o, y))) return !0;
    const d = (Number(o.x0) + Number(o.x1)) * 0.5, m = (Number(o.y0) + Number(o.y1)) * 0.5;
    return !!Ei({ x: d, y: m }, c.corners);
  }
  function Ot(o) {
    if (uS(), f.interaction) {
      f.interaction.kind === "paint_stroke" || f.interaction.kind === "paint_lasso_fill" ? Wt("none") : f.interaction.kind === "view" || f.interaction.kind === "pan_frame" ? Wt("grabbing") : f.interaction.kind === "space_pan" || f.interaction.kind === "frame_pan" ? Wt("move") : f.interaction.kind === "space_orbit" || f.interaction.kind === "frame_orbit" || f.interaction.kind === "world_gizmo" || f.interaction.kind === "roll_frame" ? Wt("grabbing") : f.interaction.kind === "move" || f.interaction.kind === "move_multi" || f.interaction.kind === "move_stroke_group" || f.interaction.kind === "move_raster_object" ? Wt("move") : f.interaction.kind === "scale" || f.interaction.kind === "scale_x" || f.interaction.kind === "scale_y" || f.interaction.kind === "scale_raster_object" ? Wt(f.interaction.cursor || "nwse-resize") : f.interaction.kind === "rotate" ? Wt("grabbing") : Wt("default");
      return;
    }
    if (Kh()) {
      Wt("none");
      return;
    }
    if (f.mode === "frame") {
      if (f.altModifier && !r) {
        Wt(YE);
        return;
      }
      if (f.primaryTool !== "cursor") {
        Wt("default");
        return;
      }
      Wt("grab");
      return;
    }
    if (f.primaryTool === "cursor" && f.marqueeModifier) {
      Wt("default");
      return;
    }
    if (f.gizmoAxis) {
      Wt("grab");
      return;
    }
    const c = Ln(), d = c ? mn(c) : null, m = c ? jn(c) : !1, y = m ? { kind: "none", cursor: "default" } : $a(d, o, c);
    if (!m && y.kind !== "none") {
      Wt(y.cursor);
      return;
    }
    if (f.primaryTool === "cursor" && Uh(o)) {
      Wt("default");
      return;
    }
    Wt(f.mode === "pano" ? "grab" : "default");
  }
  function dt() {
    if (!Y) return;
    if (ee = !1, f.mode === "frame") {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (f.worldSelectedId || dr() && fr()) {
      const y = vS();
      ee = y.visible, Xh(y);
      return;
    }
    const o = Ln(), c = ki();
    if (!o && c.length === 0 || f.interaction) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const d = Rs(), m = CC({
      type: t,
      selected: o,
      selectedItems: c,
      selectedKind: d,
      geom: c.length > 1 ? ka(c) : mn(o),
      allLocked: gp(c),
      anyLocked: c.some((y) => jn(y)),
      selectedLocked: jn(o),
      activeAspect: tr(o) && Gi() ? fa : gi(o),
      cutoutAspectOpen: f.cutoutAspectOpen,
      isExternalSticker: Mn,
      isStickerHidden: $s,
      canRestoreSelectedToInitial: z1,
      iconSet: Ke,
      cameraShot: j,
      cameraDeletable: I,
      erpChoice: I,
      coverage: v.coverage
    });
    Xh(m);
  }
  function vS() {
    const o = Yi() && !f.interaction ? Nr().space : null;
    if (!(o != null && o.gizmo)) return { visible: !1 };
    const c = $o(), d = o.stickers.find((w) => w.id === f.worldSelectedId), y = (d ? Xd(d) : [o.gizmo.transform.position]).map((w) => Ns(c, w, T.width, T.height)).filter(Boolean), _ = ZN(c, o.gizmo.transform.position, o.gizmo.mode, T.width, T.height);
    return IC({ corners: y, gizmoBox: _, gizmoMode: o.gizmo.mode, camera: dr(), deletable: I && dr() });
  }
  function Xh(o) {
    var _, w;
    if (!o.visible) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = (P, C) => OC(o.anchor, P, C, T.width, T.height), d = Math.max(1, Number(((_ = f.menuSize) == null ? void 0 : _.w) || 220)), m = Math.max(1, Number(((w = f.menuSize) == null ? void 0 : w.h) || 40)), y = c(d, m);
    if (!y) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    E.selectionMenu = {
      visible: !0,
      left: y.left,
      top: y.top,
      items: o.items
    }, Ie.requestFrame(() => {
      if (!Y || E.selectionMenu.visible !== !0) return;
      const P = Y.getBoundingClientRect(), C = Math.round(Number((P == null ? void 0 : P.width) || 0)) || 220, Z = Math.round(Number((P == null ? void 0 : P.height) || 0)) || 40;
      f.menuSize = { w: C, h: Z, measured: !0 };
      const z = c(C, Z);
      z && (E.selectionMenu.left = z.left, E.selectionMenu.top = z.top);
    });
  }
  function Ji() {
    tn.timer && (clearTimeout(tn.timer), tn.timer = 0), tn.target = null, E.tooltip.visible = !1;
  }
  function _S(o) {
    if (!Q || !o || !o.isConnected) return;
    const c = String(o.getAttribute("data-tip") || "").trim();
    if (!c) return;
    E.tooltip.text = c, E.tooltip.visible = !0;
    const d = o;
    Ie.requestFrame(() => {
      var Pe, $e;
      if (tn.target !== d || !Q || !(d != null && d.isConnected)) return;
      const m = _e.getBoundingClientRect(), y = d.getBoundingClientRect(), _ = 8, w = 12, P = Math.round(Number(((Pe = Q.getBoundingClientRect()) == null ? void 0 : Pe.width) || 0)) || 100, C = Math.round(Number((($e = Q.getBoundingClientRect()) == null ? void 0 : $e.height) || 0)) || 24, Z = !!d.closest(".pano-floating-left"), z = !!d.closest(".pano-frame-rail"), K = !!d.closest(".pano-paint-footer") || !!d.closest(".pano-paint-color-float");
      let ue = "", Le = y.left - m.left + y.width * 0.5 - P * 0.5, pe = y.top - m.top - C - w;
      if (d.closest(".pano-floating-top") && (pe = y.bottom - m.top + w), Z)
        ue = "tool-rail", Le = y.right - m.left + 10, pe = y.top - m.top + y.height * 0.5 - C * 0.5, Le = ve(Le, _, Math.max(_, m.width - P - _)), pe = ve(pe, _, Math.max(_, m.height - C - _));
      else if (z)
        ue = "frame-rail", Le = y.left - m.left - P - 10, pe = y.top - m.top + y.height * 0.5 - C * 0.5, Le = ve(Le, _, Math.max(_, m.width - P - _)), pe = ve(pe, _, Math.max(_, m.height - C - _));
      else if (K) {
        ue = "footer";
        const Qe = d.closest(".pano-paint-footer"), Be = Qe ? Qe.getBoundingClientRect() : y;
        Le = Be.left - m.left + Be.width * 0.5 - P * 0.5, pe = Be.bottom - m.top + 5, Le = ve(Le, _, Math.max(_, m.width - P - _)), pe = Math.max(_, pe);
      }
      Le = ve(Le, _, Math.max(_, m.width - P - _)), pe = Math.max(_, pe), E.tooltip.left = Le, E.tooltip.top = pe, E.tooltip.variant = ue, E.tooltip.visible = !0;
    });
  }
  const fn = Cd({
    getView: () => ({ yaw: f.viewYaw, pitch: f.viewPitch, fov: f.viewFov }),
    setView: (o) => {
      f.viewYaw = Xt(Number(o.yaw || 0)), f.viewPitch = ve(Number(o.pitch || 0), -89.9, 89.9), f.viewFov = ve(Number(o.fov || f.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const o = T.getBoundingClientRect();
      return {
        w: Math.max(1, Number(o.width || T.clientWidth || 0)),
        h: Math.max(1, Number(o.height || T.clientHeight || 0))
      };
    },
    getInvert: () => {
      var o, c;
      return {
        x: (o = v.ui_settings) != null && o.invert_view_x ? -1 : 1,
        y: (c = v.ui_settings) != null && c.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Vs,
    onInteraction: () => Ie.requestDraw(At.VIEW)
  });
  function SS(o, c, d = {}) {
    var _;
    if ((o == null ? void 0 : o.kind) !== "roll_frame" || !o.shot) return;
    o.accumulatedRad += Oy(c, o.lastAngle), o.lastAngle = c;
    const m = Ey(o.start.roll_deg, o.accumulatedRad, {
      shiftKey: d.shiftKey,
      altKey: o.altStarted ? !1 : d.altKey
    });
    o.shot.roll_deg = m, o.changed = o.changed || Math.abs(o.accumulatedRad) > 1e-9;
    const y = (((_ = E.sidePanel) == null ? void 0 : _.params) || []).find((w) => w.key === "roll_deg");
    y && (y.value = m, y.displayValue = Bo(m), y.fillPct = (m + 180) / 360 * 100), si(), mu(o), Ee({ localOnly: !0 });
  }
  function wS(o, c, d = {}) {
    var _;
    if ((o == null ? void 0 : o.kind) !== "roll_frame" || !o.shot || !o.rollGesture) return;
    const m = n1(o.rollGesture, c, d);
    if (!m) return;
    o.rollGesture = m.gesture, o.center = m.gesture.center, o.lastAngle = m.gesture.lastAngle, o.accumulatedRad = m.gesture.accumulatedRad, o.shot.roll_deg = m.rollDeg, o.changed = o.changed || Math.abs(m.gesture.accumulatedRad) > 1e-9;
    const y = (((_ = E.sidePanel) == null ? void 0 : _.params) || []).find((w) => w.key === "roll_deg");
    y && (y.value = m.rollDeg, y.displayValue = Bo(m.rollDeg), y.fillPct = (m.rollDeg + 180) / 360 * 100), si(), mu(o), Ee({ localOnly: !0 });
  }
  function qh(o, c) {
    const d = Mi(o);
    return Math.atan2(d.y - c.y, d.x - c.x);
  }
  function mu(o) {
    var w, P;
    if ((o == null ? void 0 : o.kind) !== "roll_frame" || !o.shot) return;
    tn.timer && (clearTimeout(tn.timer), tn.timer = 0), tn.target = null;
    const c = Ar(o.shot), d = (w = T.getBoundingClientRect) == null ? void 0 : w.call(T), m = (P = _e.getBoundingClientRect) == null ? void 0 : P.call(_e);
    if (!c || !d || !m || T.width <= 0 || T.height <= 0) return;
    const y = d.width / T.width, _ = d.height / T.height;
    E.tooltip.text = `${Bo(o.shot.roll_deg)}°`, E.tooltip.left = d.left - m.left + (c.x + c.w * 0.5) * y, E.tooltip.top = d.top - m.top + (c.y + c.h * 0.5) * _ + 12, E.tooltip.variant = "roll", E.tooltip.visible = !0;
  }
  function xS(o) {
    var _;
    if (o.button !== 0 || r || f.mode !== "frame") return;
    const c = ft();
    if (!c || c.locked === !0) return;
    const d = Ar(c);
    if (!d) return;
    const m = { x: d.x + d.w * 0.5, y: d.y + d.h * 0.5 }, y = qh(o, m);
    f.interaction = {
      kind: "roll_frame",
      shot: c,
      center: m,
      lastAngle: y,
      accumulatedRad: 0,
      start: { roll_deg: Number(c.roll_deg ?? c.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (_ = U.setPointerCapture) == null || _.call(U, o.pointerId), o.preventDefault(), si(), mu(f.interaction), Ee({ localOnly: !0 });
  }
  U == null || U.addEventListener("pointerdown", xS);
  function kS(o) {
    var c;
    ((c = f.interaction) == null ? void 0 : c.kind) !== "roll_frame" || f.interaction.source !== "knob" || SS(
      f.interaction,
      qh(o, f.interaction.center),
      o
    );
  }
  U == null || U.addEventListener("pointermove", kS);
  function MS() {
    const o = f.interaction;
    (o == null ? void 0 : o.kind) !== "roll_frame" || o.source !== "knob" || (o.changed && (St(), Mt(), at()), f.interaction = null, Ji(), oi(), si(), Ee());
  }
  U == null || U.addEventListener("pointerup", MS), U == null || U.addEventListener("pointercancel", () => Va()), U == null || U.addEventListener("lostpointercapture", () => {
    var o;
    ((o = f.interaction) == null ? void 0 : o.source) === "knob" && Va();
  });
  function NS(o) {
    const c = f.mode === "frame" && !r ? ft() : null;
    !c || c.locked === !0 || Math.abs(Number(c.roll_deg ?? c.rot_deg ?? 0)) <= 1e-9 || (c.roll_deg = 0, St(), Mt(), at(), si(), Ee(), o.preventDefault());
  }
  U == null || U.addEventListener("dblclick", NS);
  function PS(o) {
    W.selection && (W.selection = null, $r());
    const c = Mi(o);
    X = c, Js(c, !0), Na(), fn.state.inertia.active = !1, fn.state.inertia.vx = 0, fn.state.inertia.vy = 0;
    const d = fr(), m = pu(), y = d || m ? E2(Zc(), o) : null;
    if (m && y) {
      o.preventDefault(), y === "look" ? Hh(c, o.pointerId) : iS(y, c, o.pointerId);
      return;
    }
    if (y === "look") {
      o.preventDefault();
      const z = js(o);
      f.interaction = { kind: "view", last: z, lastTs: performance.now() }, fn.startDrag(z.x, z.y, o.pointerId, performance.now()), Ot(c), T.setPointerCapture(o.pointerId);
      return;
    }
    if (y) {
      o.preventDefault(), th(y, c, o.pointerId);
      return;
    }
    if ((d || m) && o.button !== 0) {
      o.preventDefault();
      return;
    }
    if (o.button === 1) {
      if (o.preventDefault(), f.mode === "frame") {
        const z = ft();
        if (!z || r || z.locked === !0) return;
        f.interaction = {
          kind: "pan_frame",
          shot: z,
          last: c,
          start: {
            yaw_deg: Number(z.yaw_deg || 0),
            pitch_deg: Number(z.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const z = f.mode === "unwrap" ? c : js(o);
        f.interaction = { kind: "view", last: z, lastTs: performance.now() }, fn.startDrag(z.x, z.y, o.pointerId, performance.now());
      }
      Ot(c), T.setPointerCapture(o.pointerId);
      return;
    }
    if (o.button !== 0) return;
    if (f.mode === "frame" && (o.altKey || o.shiftKey) && !r) {
      const z = ft(), K = Ar(z);
      if (!z || z.locked === !0 || !K) return;
      const ue = t1({
        frame: K,
        point: c,
        startRollDeg: Number(z.roll_deg ?? z.rot_deg ?? 0),
        shiftKey: o.shiftKey,
        altKey: o.altKey,
        allowAlt: !0
      });
      if (!ue) return;
      f.interaction = {
        kind: "roll_frame",
        shot: z,
        center: ue.center,
        lastAngle: ue.lastAngle,
        accumulatedRad: ue.accumulatedRad,
        rollGesture: ue,
        start: { roll_deg: Number(z.roll_deg ?? z.rot_deg ?? 0) },
        changed: !1,
        altStarted: ue.source === "alt",
        source: ue.source
      }, T.setPointerCapture(o.pointerId), o.preventDefault(), si(), Ee({ localOnly: !0 });
      return;
    }
    if (f.mode === "frame" && f.primaryTool === "cursor") {
      Hh(c, o.pointerId), o.preventDefault();
      return;
    }
    if (r) {
      f.mode === "pano" && Qh(o, c);
      return;
    }
    if (oe && !oe.hidden)
      return;
    if ((f.primaryTool === "paint" || f.primaryTool === "mask") && (Th() || du())) {
      if (!Xp()) return;
      xn();
      const z = f.primaryTool === "mask" ? "mask" : "paint", K = f.primaryTool === "mask" ? f.maskTool : f.paintTool, ue = f.mode === "frame" && du() ? ft() : null, Le = { kind: "ERP_GLOBAL" }, pe = ue ? kr(c, ue, performance.now()) : Dr(c, performance.now());
      if (!pe) {
        Ot(c);
        return;
      }
      f.interaction = {
        kind: K === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: z,
        _livePreviewToken: Uo("live"),
        stroke: K === "lasso_fill" ? Bh(z, K, [pe], Le) : Wh(z, K, [pe], Le)
      }, Eo();
      const Pe = rr(f.interaction);
      if (Pe)
        if (f.paintEngine.beginStroke(f.interaction.stroke, Pe), f.interaction.kind === "paint_stroke") {
          const $e = f.paintEngine.ensureTarget(Pe), Qe = Number((pe == null ? void 0 : pe.u) ?? (pe == null ? void 0 : pe.x) ?? 0), Be = Number((pe == null ? void 0 : pe.v) ?? (pe == null ? void 0 : pe.y) ?? 0);
          f.paintEngine.appendStrokePoint($e, Qe, Be, f.interaction.stroke);
        } else
          f.paintEngine.updateActiveStroke(f.interaction.stroke, Pe);
      Ot(c), T.setPointerCapture(o.pointerId), Ee();
      return;
    }
    const _ = ki(), w = Ln(), P = _.length > 1 ? ka(_) : w ? mn(w) : null;
    if (f.primaryTool === "cursor" && (o.ctrlKey || o.metaKey)) {
      f.interaction = { kind: "marquee_select", start: c, current: c }, Ot(c), T.setPointerCapture(o.pointerId), Ee({ localOnly: !0, reason: At.OVERLAY });
      return;
    }
    if (f.primaryTool === "cursor" && ai() && fr() && $v(o, c) || f.primaryTool === "cursor" && k && Yi() && AS(o, c)) return;
    if (_.length > 1 && (P != null && P.visible)) {
      if ((_.some((K) => jn(K)) ? { kind: "none" } : $a(P, c)).kind === "move") {
        f.interaction = {
          kind: "move_multi",
          items: _.map((K) => K),
          offset: { x: c.x - P.center.x, y: c.y - P.center.y },
          startCenter: { x: P.center.x, y: P.center.y },
          stickerSnapshots: _.filter((K) => hn(K)).map((K) => ({
            id: String(K.id || ""),
            yaw_deg: Number(Nn(K).yaw_deg || 0),
            pitch_deg: Number(Nn(K).pitch_deg || 0),
            center: (() => {
              var Le, pe;
              const ue = mn(K);
              return ue != null && ue.visible ? { x: Number(((Le = ue.center) == null ? void 0 : Le.x) || 0), y: Number(((pe = ue.center) == null ? void 0 : pe.y) || 0) } : { x: c.x, y: c.y };
            })()
          })),
          strokeSnapshots: _.filter((K) => Hn(K)).map((K) => ({
            id: String(K.actionGroupId || K.id || ""),
            layerKind: String(K.layerKind || "paint"),
            snapshot: An(Oo(K.actionGroupId, K.layerKind)),
            frameSnapshot: An(Co(K.actionGroupId, K.layerKind)),
            center: (() => {
              var Le, pe;
              const ue = mn(K);
              return ue != null && ue.visible ? { x: Number(((Le = ue.center) == null ? void 0 : Le.x) || 0), y: Number(((pe = ue.center) == null ? void 0 : pe.y) || 0) } : { x: c.x, y: c.y };
            })(),
            centerUv: Q1(K.actionGroupId, K.layerKind)
          })),
          rasterSnapshots: _.filter((K) => Fr(K)).map((K) => ({
            id: Ki(K.rasterObjectId || K.id || ""),
            snapshot: An(ri().find((ue) => String((ue == null ? void 0 : ue.id) || "") === Ki(K.rasterObjectId || K.id || ""))),
            center: (() => {
              var Le, pe;
              const ue = mn(K);
              return ue != null && ue.visible ? { x: Number(((Le = ue.center) == null ? void 0 : Le.x) || 0), y: Number(((pe = ue.center) == null ? void 0 : pe.y) || 0) } : { x: c.x, y: c.y };
            })(),
            centerUv: U1(K)
          }))
        }, Ot(c), T.setPointerCapture(o.pointerId);
        return;
      }
    } else if (w && (P != null && P.visible)) {
      const z = jn(w) ? { kind: "none" } : $a(P, c, w);
      if (z.kind === "scale") {
        f.interaction = Hn(w) ? {
          kind: "scale_stroke_group",
          item: w,
          center: P.center,
          startDist: Math.max(1, Math.hypot(c.x - P.center.x, c.y - P.center.y)),
          snapshot: An(Oo(w.actionGroupId, w.layerKind)),
          frameSnapshot: An(Co(w.actionGroupId, w.layerKind)),
          cursor: z.cursor
        } : Fr(w) ? {
          kind: "scale_raster_object",
          item: w,
          center: P.center,
          startDist: Math.max(1, Math.hypot(c.x - P.center.x, c.y - P.center.y)),
          snapshot: An(ri().find((K) => String((K == null ? void 0 : K.id) || "") === Ki(w.rasterObjectId || w.id || ""))),
          cursor: z.cursor
        } : {
          kind: "scale",
          item: w,
          center: P.center,
          startDist: Math.max(1, Math.hypot(c.x - P.center.x, c.y - P.center.y)),
          startHFOV: Number(Nn(w).hFOV_deg || 20),
          startVFOV: Number(Nn(w).vFOV_deg || 20),
          cursor: z.cursor
        }, Ot(c), T.setPointerCapture(o.pointerId);
        return;
      }
      if (z.kind === "scale_x" || z.kind === "scale_y") {
        f.interaction = {
          kind: z.kind,
          item: w,
          center: P.center,
          startDist: Math.max(1, Math.hypot(c.x - P.center.x, c.y - P.center.y)),
          startHFOV: Number(Nn(w).hFOV_deg || 20),
          startVFOV: Number(Nn(w).vFOV_deg || 20),
          cursor: z.cursor,
          edge: z.edge
        }, Ot(c), T.setPointerCapture(o.pointerId);
        return;
      }
      if (z.kind === "rotate") {
        f.interaction = Hn(w) ? {
          kind: "rotate_stroke_group",
          item: w,
          center: P.center,
          startAng: Math.atan2(c.y - P.center.y, c.x - P.center.x),
          snapshot: An(Oo(w.actionGroupId, w.layerKind)),
          frameSnapshot: An(Co(w.actionGroupId, w.layerKind))
        } : {
          kind: "rotate",
          item: w,
          center: P.center,
          startRot: Number(Nn(w).rot_deg || Nn(w).roll_deg || 0),
          startAng: Math.atan2(c.y - P.center.y, c.x - P.center.x)
        }, Ot(c), T.setPointerCapture(o.pointerId);
        return;
      }
      if (z.kind === "move") {
        if (Hn(w)) {
          const K = f.mode === "frame" ? (() => {
            const ue = ft();
            return ue ? kr(c, ue, performance.now()) : null;
          })() : Dr(c, performance.now());
          f.interaction = {
            kind: "move_stroke_group",
            item: w,
            startUv: K,
            snapshot: An(Oo(w.actionGroupId, w.layerKind)),
            frameSnapshot: An(Co(w.actionGroupId, w.layerKind))
          }, Ot(c), T.setPointerCapture(o.pointerId);
          return;
        }
        if (Fr(w)) {
          const K = f.mode === "frame" ? (() => {
            const ue = ft();
            return ue ? kr(c, ue, performance.now()) : null;
          })() : Dr(c, performance.now());
          f.interaction = {
            kind: "move_raster_object",
            item: w,
            startUv: K,
            snapshot: An(ri().find((ue) => String((ue == null ? void 0 : ue.id) || "") === Ki(w.rasterObjectId || w.id || "")))
          }, Ot(c), T.setPointerCapture(o.pointerId);
          return;
        }
        f.interaction = {
          kind: "move",
          item: w,
          offset: { x: c.x - P.center.x, y: c.y - P.center.y }
        }, Ot(c), T.setPointerCapture(o.pointerId);
        return;
      }
    }
    const C = Uh(c);
    if (C) {
      const z = f.selectedId !== C.item.id;
      if (z && f.selectedId && (St(), ir()), nr(C.item), R && z && (f.cutoutAspectOpen = !1), z && at(), dt(), Ee(), jn(C.item)) {
        Ot(c);
        return;
      }
      f.interaction = {
        kind: Hn(C.item) ? "move_stroke_group" : Fr(C.item) ? "move_raster_object" : "move",
        item: C.item,
        offset: { x: c.x - C.geom.center.x, y: c.y - C.geom.center.y },
        startUv: Hn(C.item) || Fr(C.item) ? f.mode === "frame" ? (() => {
          const K = ft();
          return K ? kr(c, K, performance.now()) : null;
        })() : Dr(c, performance.now()) : null,
        snapshot: Hn(C.item) ? An(Oo(C.item.actionGroupId, C.item.layerKind)) : Fr(C.item) ? An(ri().find((K) => String((K == null ? void 0 : K.id) || "") === Ki(C.item.rasterObjectId || C.item.id || ""))) : null,
        frameSnapshot: Hn(C.item) ? An(Co(C.item.actionGroupId, C.item.layerKind)) : null
      }, Ot(c), T.setPointerCapture(o.pointerId);
      return;
    }
    const Z = !!f.selectedId;
    Z && (St(), ir()), xa(), Z && at(), dt(), Ee(), f.mode === "pano" && Qh(o, c);
  }
  T.onpointerdown = PS;
  function $o() {
    return Yu(wn(), T.width, T.height, Rr());
  }
  function Zi(o, c) {
    return Re.gizmoPointer(o, $o(), c.x, c.y, T.width, T.height);
  }
  function AS(o, c) {
    var P;
    const d = (P = Nr().space) == null ? void 0 : P.gizmo;
    if (d && Zi("hover", c) !== null && Zi("down", c))
      return f.interaction = {
        kind: "world_gizmo",
        id: f.worldSelectedId,
        mode: d.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: d.transform,
        base: _o(To(), f.frame),
        changed: !1
      }, T.setPointerCapture(o.pointerId), Ot(c), !0;
    const m = ki(), y = Ln(), _ = m.length > 1 ? m.some((C) => jn(C)) ? "none" : $a(ka(m), c).kind : y && !jn(y) ? $a(mn(y), c, y).kind : "none";
    if (_ !== "none" && _ !== "move") return !1;
    const w = Re.pickSticker($o(), c.x, c.y, T.width, T.height);
    return v.stickers.some((C) => C.id === w && C.placement === "world") ? (f.worldSelectedId !== w && (f.selectedId && (St(), ir()), Wc(w), at(), dt(), Lr(), Ee()), f.interaction = { kind: "world_select" }, T.setPointerCapture(o.pointerId), !0) : !1;
  }
  function Jh(o) {
    var m;
    const d = !!(f.worldSelectedId || dr()) && f.primaryTool === "cursor" && Yi() && !!((m = Nr().space) != null && m.gizmo) ? Zi("hover", o) : null;
    d !== f.gizmoAxis && (f.gizmoAxis = d, ce.backgroundDirty = !0, Ee({ localOnly: !0, reason: At.VIEW }));
  }
  function CS(o, c) {
    const d = Zi("move", c);
    if (d && o.camera) {
      for (const [y, _] of Object.entries(Ag(o.mode, o.base, o.start, d))) Tn(v.camera, y, f.frame, _);
      pr(), o.changed = !0, Ue.request("sidePanel"), Ee({ localOnly: !0 });
      return;
    }
    const m = v.stickers.find((y) => y.id === o.id);
    !d || !m || (wN(m, f.frame, Ag(o.mode, o.base, o.start, d)), o.changed = !0, un(), Ue.request("sidePanel"), Ee({ localOnly: !0 }));
  }
  function Zh(o) {
    f.interaction = null, f.gizmoAxis = null, o.kind === "world_gizmo" && (Zi("up", f.pointerPos), ce.backgroundDirty = !0, o.changed && (St(), Mt(), at())), Ot(f.pointerPos), Ee();
  }
  function Qh(o, c) {
    if (fr()) {
      const m = Zc().emptyLeft;
      m && th(m, c, o.pointerId);
      return;
    }
    const d = js(o);
    f.interaction = { kind: "view", last: d, lastTs: performance.now() }, fn.startDrag(d.x, d.y, o.pointerId, performance.now()), Ot(c), T.setPointerCapture(o.pointerId);
  }
  function IS(o, c) {
    if (!S || !nn.playing || (nn.stop(), o.kind === "frame_pan")) return;
    if (o.kind === "frame_orbit") {
      const y = La();
      y && (o.pivot = $h(y, Ra(y), c));
      return;
    }
    if (o.kind === "world_gizmo") {
      const y = v.stickers.find((_) => _.id === o.id);
      o.camera ? o.base = Xi() : y && (o.base = _o(y, f.frame));
      return;
    }
    if (o.kind === "move_multi") {
      const y = ka(o.items);
      if (!(y != null && y.visible)) return;
      o.offset = { x: c.x - y.center.x, y: c.y - y.center.y }, o.startCenter = { x: y.center.x, y: y.center.y };
      for (const _ of o.stickerSnapshots) {
        const w = o.items.find((C) => String((C == null ? void 0 : C.id) || "") === _.id), P = w ? mn(w) : null;
        P != null && P.visible && (_.yaw_deg = Number(Nn(w).yaw_deg || 0), _.pitch_deg = Number(Nn(w).pitch_deg || 0), _.center = { x: P.center.x, y: P.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(o.kind)) return;
    const d = mn(o.item);
    if (!(d != null && d.visible)) return;
    const m = Nn(o.item);
    if (o.kind === "move") {
      o.offset = { x: c.x - d.center.x, y: c.y - d.center.y };
      return;
    }
    if (o.center = d.center, o.kind === "rotate") {
      o.startRot = Number(m.rot_deg || m.roll_deg || 0), o.startAng = Math.atan2(c.y - d.center.y, c.x - d.center.x);
      return;
    }
    o.startDist = Math.max(1, Math.hypot(c.x - d.center.x, c.y - d.center.y)), o.startHFOV = Number(m.hFOV_deg || 20), o.startVFOV = Number(m.vFOV_deg || 20);
  }
  function OS(o) {
    var m, y, _, w, P, C, Z, z, K, ue, Le, pe, Pe, $e, Qe, Be, Je, it, _t, Et, Vt, Ge;
    const c = Mi(o);
    if (Js(c, !0), !f.interaction) {
      Jh(c), Ot(c);
      return;
    }
    Ot(c);
    const d = f.interaction;
    if (X && (c.x !== X.x || c.y !== X.y)) {
      const De = X;
      X = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(d.kind) || IS(d, De);
    }
    if (d.kind !== "world_select") {
      if (d.kind === "world_gizmo") {
        CS(d, c);
        return;
      }
      if (d.kind === "paint_stroke") {
        const De = typeof o.getCoalescedEvents == "function" ? o.getCoalescedEvents() : [o];
        let Xe = !1;
        De.forEach((ct) => {
          const ut = Mi(ct);
          if (f.mode === "frame") {
            const Ct = ft(), Nt = Ct ? Ar(Ct) : null;
            if (Nt) {
              const Yt = (ut.x - Nt.x) / Math.max(1, Nt.w), Pt = (ut.y - Nt.y) / Math.max(1, Nt.h);
              if (!(Yt >= 0 && Yt <= 1 && Pt >= 0 && Pt <= 1)) {
                d._outOfFrame = !0;
                return;
              }
              d._outOfFrame && (d._outOfFrame = !1, mS(d));
            }
          }
          dS(d, ut, performance.now()) && (Xe = !0);
        }), Xe && Ee({ localOnly: !0, reason: At.PAINT });
        return;
      }
      if (d.kind === "paint_lasso_fill") {
        const De = typeof o.getCoalescedEvents == "function" ? o.getCoalescedEvents() : [o];
        let Xe = !1;
        if (De.forEach((ct) => {
          const ut = Mi(ct);
          if (f.mode === "frame") {
            const Ct = ft(), Nt = Ct ? Ar(Ct) : null;
            if (Nt) {
              const Yt = (ut.x - Nt.x) / Math.max(1, Nt.w), Pt = (ut.y - Nt.y) / Math.max(1, Nt.h);
              if (!(Yt >= 0 && Yt <= 1 && Pt >= 0 && Pt <= 1)) {
                d._outOfFrame = !0;
                return;
              }
              d._outOfFrame && (d._outOfFrame = !1, gS(d));
            }
          }
          pS(d, ut, performance.now()) && (Xe = !0);
        }), Xe) {
          const ct = rr();
          ct && f.paintEngine.updateActiveStroke(d.stroke, ct), Ee({ localOnly: !0, reason: At.PAINT });
        }
        return;
      }
      if (d.kind === "view") {
        const De = performance.now(), Xe = f.mode === "unwrap" ? c : js(o);
        fn.moveDrag(Xe.x, Xe.y, f.mode === "unwrap" ? "unwrap" : "pano", De), d.lastTs = De, d.last = Xe, Ee({ localOnly: !0, reason: At.VIEW });
        return;
      }
      if (d.kind === "frame_pan" || d.kind === "frame_orbit") {
        oS(d, c);
        return;
      }
      if (d.kind === "space_pan" || d.kind === "space_orbit") {
        const De = wn();
        Jp(d.kind === "space_pan" ? xg(De, c.x - d.last.x, c.y - d.last.y, T.width, T.height, d.depth) : wg(De, c.x - d.last.x, c.y - d.last.y, T.height, d.pivot)), d.last = c;
        return;
      }
      if (d.kind === "pan_frame") {
        const De = qs(d.shot);
        if (!De || !d.shot) return;
        const Xe = c.x - d.last.x, ct = c.y - d.last.y, ut = r1(d.shot, {
          dx: Xe,
          dy: ct,
          focalPx: De.focalPx,
          invertX: ((m = v.ui_settings) == null ? void 0 : m.invert_view_x) === !0,
          invertY: ((y = v.ui_settings) == null ? void 0 : y.invert_view_y) === !0
        });
        d.shot.yaw_deg = ut.yaw_deg, d.shot.pitch_deg = ut.pitch_deg, d.changed = d.changed || Math.abs(Xe) > 0 || Math.abs(ct) > 0, d.last = c, Ee({ localOnly: !0 });
        return;
      }
      if (d.kind === "roll_frame") {
        if (d.source === "knob") return;
        wS(d, c, o);
        return;
      }
      if (d.kind === "move") {
        const De = c.x - d.offset.x, Xe = c.y - d.offset.y;
        if (f.mode === "frame" && R) {
          const ct = ft(), ut = Ar(ct);
          if (!ct || !ut) return;
          const Ct = {
            x: ve((De - ut.x) / Math.max(1, ut.w), 0, 1),
            y: ve((Xe - ut.y) / Math.max(1, ut.h), 0, 1)
          }, Nt = vp(ct, Ct);
          if (!Nt) return;
          const Yt = ml(Nt);
          Mr(d.item, { yaw_deg: Yt.yaw, pitch_deg: Yt.pitch });
        } else if (f.mode === "unwrap") {
          const ct = Vs(), ut = ve((De - ct.x) / Math.max(ct.w, 1), 0, 1), Ct = ve((Xe - ct.y) / Math.max(ct.h, 1), 0, 1);
          Mr(d.item, { yaw_deg: Xt(ut * 360 - 180), pitch_deg: ve(90 - Ct * 180, -90, 90) });
        } else {
          const ct = Ep(De, Xe), ut = ml(ct);
          Mr(d.item, { yaw_deg: ut.yaw, pitch_deg: ut.pitch });
        }
        hn(d.item) && un(), Ee({ localOnly: !0 });
        return;
      }
      if (d.kind === "move_stroke_group") {
        const De = f.mode === "frame" ? (() => {
          const ut = ft();
          return ut ? kr(c, ut, performance.now()) : null;
        })() : Dr(c, performance.now());
        if (!De || !d.startUv) return;
        const Xe = Ma(Number(De.u || 0), Number(d.startUv.u || 0)), ct = Number(De.v || 0) - Number(d.startUv.v || 0);
        hp((_ = d.item) == null ? void 0 : _.actionGroupId, Xe, ct, d.snapshot, (w = d.item) == null ? void 0 : w.layerKind, d.frameSnapshot) && (Pr({ rebuildPaintEngine: !1 }), Ee({ localOnly: !0, reason: At.PAINT }));
        return;
      }
      if (d.kind === "move_raster_object") {
        const De = f.mode === "frame" ? (() => {
          const ut = ft();
          return ut ? kr(c, ut, performance.now()) : null;
        })() : Dr(c, performance.now());
        if (!De || !d.startUv) return;
        const Xe = Ma(Number(De.u || 0), Number(d.startUv.u || 0)), ct = Number(De.v || 0) - Number(d.startUv.v || 0);
        pp(((P = d.item) == null ? void 0 : P.rasterObjectId) || ((C = d.item) == null ? void 0 : C.id) || "", Xe, ct, d.snapshot) && (Lo(), Ee({ localOnly: !0, reason: At.PAINT }));
        return;
      }
      if (d.kind === "scale_raster_object") {
        const Xe = Math.max(1, Math.hypot(c.x - d.center.x, c.y - d.center.y)) / Math.max(1, Number(d.startDist || 1));
        L1(((Z = d.item) == null ? void 0 : Z.rasterObjectId) || ((z = d.item) == null ? void 0 : z.id) || "", Xe, d.snapshot) && (Lo(), Ee({ localOnly: !0, reason: At.PAINT }));
        return;
      }
      if (d.kind === "move_multi") {
        const De = c.x - Number(((K = d.offset) == null ? void 0 : K.x) || 0), Xe = c.y - Number(((ue = d.offset) == null ? void 0 : ue.y) || 0);
        let ct = !1, ut = !1, Ct = !1;
        const Nt = De - Number(((Le = d.startCenter) == null ? void 0 : Le.x) || De), Yt = Xe - Number(((pe = d.startCenter) == null ? void 0 : pe.y) || Xe);
        for (const Pt of Array.isArray(d.stickerSnapshots) ? d.stickerSnapshots : []) {
          const dn = (t === "cutout" ? G1() : Hi()).find((rn) => String((rn == null ? void 0 : rn.id) || "") === String(Pt.id || ""));
          if (!dn || !hn(dn)) continue;
          const Kn = {
            x: Number(((Pe = Pt.center) == null ? void 0 : Pe.x) || 0) + Nt,
            y: Number((($e = Pt.center) == null ? void 0 : $e.y) || 0) + Yt
          };
          if (f.mode === "frame" && R) {
            const rn = ft(), gn = Ar(rn);
            if (!rn || !gn) continue;
            const Qi = {
              x: ve((Kn.x - gn.x) / Math.max(1, gn.w), 0, 1),
              y: ve((Kn.y - gn.y) / Math.max(1, gn.h), 0, 1)
            }, Sm = vp(rn, Qi);
            if (!Sm) continue;
            const wm = ml(Sm);
            Mr(dn, { yaw_deg: wm.yaw, pitch_deg: wm.pitch });
          } else if (f.mode === "unwrap") {
            const rn = Vs(), gn = ve((Kn.x - rn.x) / Math.max(rn.w, 1), 0, 1), Qi = ve((Kn.y - rn.y) / Math.max(rn.h, 1), 0, 1);
            Mr(dn, { yaw_deg: Xt(gn * 360 - 180), pitch_deg: ve(90 - Qi * 180, -90, 90) });
          } else {
            const rn = Ep(Kn.x, Kn.y), gn = ml(rn);
            Mr(dn, { yaw_deg: gn.yaw, pitch_deg: gn.pitch });
          }
          ct = !0;
        }
        for (const Pt of Array.isArray(d.strokeSnapshots) ? d.strokeSnapshots : []) {
          const dn = {
            x: Number(((Qe = Pt.center) == null ? void 0 : Qe.x) || 0) + Nt,
            y: Number(((Be = Pt.center) == null ? void 0 : Be.y) || 0) + Yt
          }, Kn = f.mode === "frame" ? (() => {
            const gn = ft();
            return gn ? kr(dn, gn, performance.now()) : null;
          })() : Dr(dn, performance.now()), rn = Pt.centerUv || null;
          if (Kn && rn) {
            const gn = Ma(Number(Kn.u || 0), Number(rn.u || 0)), Qi = Number(Kn.v || 0) - Number(rn.v || 0);
            hp(Pt.id, gn, Qi, Pt.snapshot, Pt.layerKind, Pt.frameSnapshot) && (ct = !0, ut = !0);
          }
        }
        for (const Pt of Array.isArray(d.rasterSnapshots) ? d.rasterSnapshots : []) {
          const dn = {
            x: Number(((Je = Pt.center) == null ? void 0 : Je.x) || 0) + Nt,
            y: Number(((it = Pt.center) == null ? void 0 : it.y) || 0) + Yt
          }, Kn = f.mode === "frame" ? (() => {
            const gn = ft();
            return gn ? kr(dn, gn, performance.now()) : null;
          })() : Dr(dn, performance.now()), rn = Pt.centerUv || null;
          if (Kn && rn) {
            const gn = Ma(Number(Kn.u || 0), Number(rn.u || 0)), Qi = Number(Kn.v || 0) - Number(rn.v || 0);
            pp(Pt.id, gn, Qi, Pt.snapshot) && (ct = !0, Ct = !0);
          }
        }
        ct && (ut ? Pr({ rebuildPaintEngine: !1 }) : Ct ? Lo() : un(), Ee({ localOnly: !0 }));
        return;
      }
      if (d.kind === "scale_stroke_group") {
        const Xe = Math.max(1, Math.hypot(c.x - d.center.x, c.y - d.center.y)) / Math.max(1, Number(d.startDist || 1));
        mp((_t = d.item) == null ? void 0 : _t.actionGroupId, Xe, 0, d.snapshot, (Et = d.item) == null ? void 0 : Et.layerKind, d.frameSnapshot) && (Pr({ rebuildPaintEngine: !1 }), Ee({ localOnly: !0, reason: At.PAINT }));
        return;
      }
      if (d.kind === "rotate_stroke_group") {
        let De = (Math.atan2(c.y - d.center.y, c.x - d.center.x) - Number(d.startAng || 0)) * fo;
        o.shiftKey && (De = Math.round(De / 45) * 45), mp((Vt = d.item) == null ? void 0 : Vt.actionGroupId, 1, De, d.snapshot, (Ge = d.item) == null ? void 0 : Ge.layerKind, d.frameSnapshot) && (Pr({ rebuildPaintEngine: !1 }), Ee({ localOnly: !0, reason: At.PAINT }));
        return;
      }
      if (d.kind === "marquee_select") {
        d.current = c, Ee({ localOnly: !0, reason: At.OVERLAY });
        return;
      }
      if (d.kind === "scale") {
        const Xe = Math.max(1, Math.hypot(c.x - d.center.x, c.y - d.center.y)) / d.startDist;
        Mr(d.item, { hFOV_deg: ve(d.startHFOV * Xe, 1, 179), vFOV_deg: ve(d.startVFOV * Xe, 1, 179) }), ii(d.item) || (d.item.aspect_id = uo(d.item)), hn(d.item) && un(), Ee({ localOnly: !0 });
        return;
      }
      if (d.kind === "scale_x") {
        const Xe = Math.max(1, Math.hypot(c.x - d.center.x, c.y - d.center.y)) / d.startDist;
        Mr(d.item, { hFOV_deg: ve(d.startHFOV * Xe, 1, 179) }), ii(d.item) || (d.item.aspect_id = uo(d.item)), hn(d.item) && un(), Ee({ localOnly: !0 });
        return;
      }
      if (d.kind === "scale_y") {
        const Xe = Math.max(1, Math.hypot(c.x - d.center.x, c.y - d.center.y)) / d.startDist;
        Mr(d.item, { vFOV_deg: ve(d.startVFOV * Xe, 1, 179) }), ii(d.item) || (d.item.aspect_id = uo(d.item)), hn(d.item) && un(), Ee({ localOnly: !0 });
        return;
      }
      if (d.kind === "rotate") {
        let Xe = (Math.atan2(c.y - d.center.y, c.x - d.center.x) - d.startAng) * fo, ct = d.startRot - Xe;
        o.shiftKey && (ct = Math.round(ct / 45) * 45), Mr(d.item, { [hn(d.item) ? "rot_deg" : "roll_deg"]: ct }), hn(d.item) && un(), Ee({ localOnly: !0 });
      }
    }
  }
  T.onpointermove = OS;
  function ES() {
    var c, d, m, y, _, w, P;
    const o = f.interaction;
    if (!((o == null ? void 0 : o.kind) === "roll_frame" && o.source === "knob")) {
      if ((o == null ? void 0 : o.kind) === "space_pan" || (o == null ? void 0 : o.kind) === "space_orbit") {
        f.interaction = null, Ot(f.pointerPos), dt();
        return;
      }
      if ((o == null ? void 0 : o.kind) === "world_select" || (o == null ? void 0 : o.kind) === "world_gizmo") {
        Zh(o);
        return;
      }
      if (((c = f.interaction) == null ? void 0 : c.kind) === "paint_stroke" || ((d = f.interaction) == null ? void 0 : d.kind) === "paint_lasso_fill") {
        Eo();
        const C = hu(f.interaction), Z = !!f.interaction._hasCommittedSegments;
        if (C || Z) {
          Pr();
          const z = String(((m = f.interaction.stroke) == null ? void 0 : m.actionGroupId) || "").trim();
          if (z) {
            const ue = Io().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === z);
            ue && (ue.frame = null);
          }
          const K = rr(f.interaction);
          K && (C ? String(((y = f.interaction.stroke) == null ? void 0 : y.toolKind) || "") === "eraser" ? (f.paintEngine.cancelActiveStroke(K), ph()) : f.paintEngine.commitActiveStroke(f.interaction.stroke, K) : f.paintEngine.cancelActiveStroke(K)), St(), ir(), at(), dt(), e.setDirtyCanvas(!0, !0), Ee();
        } else {
          const z = rr(f.interaction);
          z && f.paintEngine.cancelActiveStroke(z);
        }
      } else if (((_ = f.interaction) == null ? void 0 : _.kind) === "marquee_select") {
        const C = Yh(f.interaction.start, f.interaction.current), z = [
          ...t === "cutout" ? jc().filter((K) => !tr(K)) : [...Hi()],
          ...X1(),
          ...Y1()
        ].filter((K) => bS(C, mn(K)));
        sv(z, ((w = z[z.length - 1]) == null ? void 0 : w.id) || null), R && z.length && (f.cutoutAspectOpen = !1), at(), dt(), Ee();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((P = f.interaction) == null ? void 0 : P.kind))
        f.interaction.changed && (St(), Mt(), at());
      else if (f.interaction && f.interaction.kind !== "view") {
        let C = !1;
        (f.interaction.kind === "move_stroke_group" || f.interaction.kind === "scale_stroke_group" || f.interaction.kind === "rotate_stroke_group") && (C = !0), (f.interaction.kind === "move_raster_object" || f.interaction.kind === "scale_raster_object") && (C = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length && (C = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.rasterSnapshots) && f.interaction.rasterSnapshots.length && (C = !0), C && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(f.interaction.kind) || f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length ? Pr({ rebuildPaintEngine: !0 }) : Lo()), St(), ir(), e.setDirtyCanvas(!0, !0), Vo(), dt(), Ee();
      }
      f.interaction = null, (o == null ? void 0 : o.kind) === "roll_frame" && Ji(), Eo(), o && o.kind === "view" && Ea(() => fn.endDrag(performance.now())), oi(), dt(), Ot(f.pointerPos), Ee();
    }
  }
  T.onpointerup = ES;
  function TS() {
    var o, c, d, m, y;
    if (!Va()) {
      if (((o = f.interaction) == null ? void 0 : o.kind) === "world_select" || ((c = f.interaction) == null ? void 0 : c.kind) === "world_gizmo") {
        Zh(f.interaction);
        return;
      }
      if (((d = f.interaction) == null ? void 0 : d.kind) === "view" && Ea(() => fn.endDrag(performance.now())), ((m = f.interaction) == null ? void 0 : m.kind) === "paint_stroke" || ((y = f.interaction) == null ? void 0 : y.kind) === "paint_lasso_fill") {
        Eo();
        const _ = rr(f.interaction);
        _ && f.paintEngine.cancelActiveStroke(_);
      }
      f.interaction = null, Eo(), oi(), Ot(f.pointerPos), Ee({ localOnly: !0 });
    }
  }
  T.onpointercancel = TS, T.onlostpointercapture = () => {
    Va();
  }, T.onauxclick = (o) => {
    o.button === 1 && o.preventDefault();
  }, T.oncontextmenu = (o) => {
    (fr() || pu()) && T2(Zc(), 2) && o.preventDefault();
  };
  function FS(o) {
    const c = Mi(o), d = Js(c, !0);
    f.interaction || (Ot(c), d && f.mode === "frame" && f.primaryTool === "cursor" && Ee({ localOnly: !0, reason: At.OVERLAY }));
  }
  T.onmousemove = FS, T.onpointerleave = () => {
    f.interaction || Jh({ x: -1e6, y: -1e6 });
  }, T.onmouseleave = () => {
    Js(f.pointerPos, !1), Ot(f.pointerPos), f.mode === "frame" && f.primaryTool === "cursor" && Ee({ localOnly: !0, reason: At.OVERLAY });
  };
  function DS(o) {
    if (f.mode === "frame") {
      const c = Mi(o), d = Xl(o);
      d && xn(), d && pu() ? aS(c, -d) : d && rS(c, d) && Ee({ localOnly: !0 }), o.preventDefault();
      return;
    }
    if (f.mode === "pano") {
      if (Na(), fr()) {
        const c = Xl(o);
        c && Av(Mi(o), -c);
      } else fn.applyWheelEvent(o) && Ee({ localOnly: !0, reason: At.VIEW });
      o.preventDefault();
    }
  }
  T.onwheel = DS;
  function LS(o) {
    t !== "stickers" && t !== "cutout" || r || (o.preventDefault(), Wi(!0));
  }
  T.ondragover = LS;
  function RS(o) {
    var m;
    if (t !== "stickers" && t !== "cutout" || r) return;
    o.preventDefault(), o.stopPropagation(), Ut.depth = 0, Wi(!1);
    const d = Array.from(((m = o.dataTransfer) == null ? void 0 : m.files) || []).find((y) => Or(y));
    d && Nh(d);
  }
  T.ondrop = RS;
  function em(o) {
    t !== "stickers" && t !== "cutout" || r || Bc(o) && (Ut.depth += 1, Wi(!0), o.preventDefault());
  }
  function tm(o) {
    t !== "stickers" && t !== "cutout" || r || (!Ut.active && Bc(o) && Wi(!0), Ut.active && o.preventDefault());
  }
  function nm(o) {
    if (t !== "stickers" && t !== "cutout" || r || !Ut.active) return;
    Ut.depth = Math.max(0, Ut.depth - 1);
    const c = Number(o.clientX) <= 0 && Number(o.clientY) <= 0;
    (Ut.depth === 0 || c) && Wi(!1);
  }
  function rm(o) {
    t !== "stickers" && t !== "cutout" || r || (Ut.depth = 0, Wi(!1), Bc(o) && o.preventDefault());
  }
  window.addEventListener("dragenter", em, !0), window.addEventListener("dragover", tm, !0), window.addEventListener("dragleave", nm, !0), window.addEventListener("drop", rm, !0);
  function im() {
    const { canUndo: o, canRedo: c } = Sp();
    Wo(E.toolButtons, "value", "undo", { disabled: !o }), Wo(E.toolButtons, "value", "redo", { disabled: !c });
  }
  function om(o, c, d = !1) {
    var Z;
    xn();
    const m = R && f.mode === "frame" ? ft() : null, y = m || Ln(), _ = m ? "shot" : Rs(), w = To();
    if (w && !Hs(w) || !w && (!y || _ === "stroke" || jn(y))) return;
    const P = (((Z = E.sidePanel) == null ? void 0 : Z.params) || []).find((z) => z.key === o);
    if (!P || P.enabled === !1) return;
    let C = Number(c);
    if (Number.isNaN(C) && (C = 0), (w || j) && zE.has(o) ? C = o === "scale" ? Math.max(C, d0) : C : C = ve(C, Number(P.min), Number(P.max)), o === "yaw_deg" && (C = Xt(C)), !w && j && o.startsWith("position_")) {
      pr(), bN(v.camera, f.frame, o, C), at(), Ee(), d && St();
      return;
    }
    if (w) {
      SN(w, f.frame, o, C), un(), at(), Ee(), d && St();
      return;
    }
    o === "opacity" ? vN(y, f.frame, C / 100) : Mr(y, { [o]: C }), R && !ii(y) && (o === "hFOV_deg" || o === "vFOV_deg") && (y.aspect_id = uo(y)), at(), Ee(), d && St();
  }
  async function VS(o) {
    var m, y, _, w, P, C, Z;
    const c = o.target.closest("[data-action]");
    if (!c) return;
    const d = String(c.getAttribute("data-action") || "");
    if (d === "coverage-set") {
      const z = Xn(c.getAttribute("data-coverage"));
      if (z === Xn(v.coverage)) return;
      v.coverage = z, f.coverage = z, u && (u.value = String(z)), a ? ce.backgroundDirty = !0 : (ir(), tS({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), at(), dt(), Ee();
      return;
    }
    if (d === "toggle-selection-picker") {
      if ((y = (m = E.sidePanel) == null ? void 0 : m.selectionPicker) != null && y.disabled) return;
      E.sidePanel.selectionPicker.open = !E.sidePanel.selectionPicker.open;
      return;
    }
    if (d === "select-picker-item") {
      E.sidePanel.selectionPicker.open = !1;
      const z = String(c.getAttribute("data-selection-id") || "");
      let K = null;
      if (z && (t === "stickers" ? K = [...Hi(), ...I ? v.shots : []].find((ue) => String((ue == null ? void 0 : ue.id) || "") === z) || null : K = ((_ = _p().find((ue) => {
        var Le;
        return String(((Le = ue == null ? void 0 : ue.item) == null ? void 0 : Le.id) || "") === z;
      })) == null ? void 0 : _.item) || null), nr(K || null), K && !Hn(K)) {
        const ue = Nn(K);
        Lp(Xt(Number(ue.yaw_deg || 0)), ve(Number(ue.pitch_deg || 0), -89.9, 89.9));
      }
      at(), dt(), Ee();
      return;
    }
    if (d === "copy-state-inline") {
      const z = Ln(), K = Rs();
      if (!z || K === "stroke" || ki().length > 1) return;
      const ue = JSON.stringify(R && K !== "image" ? Wp(z) : _v(Nn(z)));
      try {
        await navigator.clipboard.writeText(ue), (w = E.sidePanel) != null && w.copyStateButton && (E.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Le;
          (Le = E.sidePanel) != null && Le.copyStateButton && (E.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (d === "set-invert-x") {
      v.ui_settings.invert_view_x = c.getAttribute("data-value") === "1", fu(), at(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), Ee();
      return;
    }
    if (d === "set-invert-y") {
      v.ui_settings.invert_view_y = c.getAttribute("data-value") === "1", fu(), at(), (C = e.setDirtyCanvas) == null || C.call(e, !0, !0), Ee();
      return;
    }
    if (d === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, fu(), at(), (Z = e.setDirtyCanvas) == null || Z.call(e, !0, !0), Ee();
      return;
    }
    if (d === "close-preview") {
      jo();
      return;
    }
    if (d === "cancel-close") {
      jo();
      return;
    }
    d === "save-close" && (Q_(), jo());
  }
  Te == null || Te.addEventListener("click", VS);
  function $S(o) {
    const c = o.target.closest("[data-action='param-input']");
    c && om(String(c.getAttribute("data-param-key") || ""), c.value, !1);
  }
  Te == null || Te.addEventListener("input", $S);
  function zS(o) {
    const c = o.target.closest("[data-action='param-input']");
    c && om(String(c.getAttribute("data-param-key") || ""), c.value, !0);
  }
  Te == null || Te.addEventListener("change", zS);
  const gu = () => Lr();
  gu();
  function jS(o) {
    var Z, z, K, ue, Le;
    if ((z = (Z = o.target) == null ? void 0 : Z.matches) != null && z.call(Z, "[data-confirm-overlay]")) {
      const pe = (K = E.confirmDialog) == null ? void 0 : K.resolve;
      E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, pe == null || pe(!1);
      return;
    }
    const c = o.target.closest("[data-space-mode]");
    if (c) {
      Nv(c.getAttribute("data-space-mode"));
      return;
    }
    const d = o.target.closest("[data-gizmo-mode]");
    if (d) {
      f.gizmoMode = d.getAttribute("data-gizmo-mode"), ce.backgroundDirty = !0, dt(), Ee({ localOnly: !0, reason: At.VIEW });
      return;
    }
    const m = o.target.closest("[data-view]");
    if (m) {
      if (m.getAttribute("aria-disabled") === "true") return;
      const pe = f.mode;
      f.mode = String(m.getAttribute("data-view") || "pano"), R && f.mode === "frame" && (pe !== "frame" && (ce.frameSafeRect = null), at(), dt()), Da(), oi(), Ee();
      return;
    }
    const y = o.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (y && !r) {
      if (y.matches("[data-tool-mode]")) {
        const pe = String(y.getAttribute("data-tool-mode") || "cursor");
        f.primaryTool = pe, (pe === "paint" || pe === "mask") && xa({ preservePanelValues: !0 }), Gn(), at(), dt(), Ee();
        return;
      }
      if (y.matches("[data-tool-ui-action]")) {
        const pe = String(y.getAttribute("data-tool-ui-action") || "");
        if ((pe === "undo" || pe === "redo") && y.disabled) return;
        pe === "undo" ? Kc(-1) : pe === "redo" ? Kc(1) : pe === "clear" ? U_() : pe === "add" || pe === "add-image" ? T_() : pe === "add-world" ? F_() : pe === "add-or-look" ? H_() : pe === "add-camera" && G_();
        return;
      }
      if (y.matches("[data-paint-tool]")) {
        f.primaryTool = "paint";
        const pe = String(y.getAttribute("data-paint-tool") || "pen");
        f.paintTool = pe, xa({ preservePanelValues: !0 }), Yn[pe] && (f.activeBrushPresetId = pe), Gn(), at(), dt(), Ee();
        return;
      }
      if (y.matches("[data-mask-tool]")) {
        f.primaryTool = "mask", f.maskTool = String(y.getAttribute("data-mask-tool") || "pen"), xa({ preservePanelValues: !0 }), Gn(), at(), dt(), Ee();
        return;
      }
      if (y.matches("[data-paint-layer-clear-current]")) {
        const pe = String(y.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Y_(pe);
        return;
      }
      if (y.matches("[data-paint-color-swatch]")) {
        const pe = Rl.find((Pe) => Pe.id === y.getAttribute("data-paint-color-swatch"));
        if (!pe) return;
        f.paintColor = or(pe.color), gt(!0), Gn();
        return;
      }
      if (y.matches("[data-paint-color-custom]")) {
        o.preventDefault(), o.stopPropagation(), oe && !oe.hidden ? gt(!0) : M(), Gn();
        return;
      }
    }
    const _ = String(((ue = y == null ? void 0 : y.getAttribute) == null ? void 0 : ue.call(y, "data-action")) || "");
    if (_ === "video-play-toggle") {
      if (o.preventDefault(), o.stopPropagation(), !(me instanceof HTMLVideoElement)) return;
      Rt.resumeAfterScrub = !1, cu();
      return;
    }
    if (_ === "video-audio-toggle") {
      o.preventDefault(), o.stopPropagation(), $p(), typeof (y == null ? void 0 : y.blur) == "function" && y.blur();
      return;
    }
    if (_ === "video-loop-toggle") {
      if (o.preventDefault(), o.stopPropagation(), !(me instanceof HTMLVideoElement)) return;
      const pe = !E.videoTransport.loop;
      E.videoTransport.loop = pe, me.loop = pe, Pi({
        hasAudio: E.videoTransport.hasAudio,
        loop: pe,
        muted: me.muted,
        volume: Number(me.volume ?? E.videoTransport.volume ?? 1)
      }), typeof (y == null ? void 0 : y.blur) == "function" && y.blur();
      return;
    }
    if (!r) {
      if (_ === "frame-aspect") {
        E.frameRail.aspectOpen = !E.frameRail.aspectOpen;
        return;
      }
      if (_ === "frame-aspect-set") {
        const pe = f.mode === "frame" ? ft() : null;
        if (!pe || pe.locked === !0) return;
        Ah(pe, String(y.getAttribute("data-aspect") || "1:1")), E.frameRail.aspectOpen = !1, Vo(), St(), Mt(), oi(), at(), dt(), Ee();
        return;
      }
      if (_ === "frame-aspect-custom") {
        const pe = f.mode === "frame" ? ft() : null, Pe = y.getAttribute("data-custom-width"), $e = y.getAttribute("data-custom-height");
        if (!pe || !Z_(pe, Pe, $e)) return;
        E.frameRail.aspectOpen = !1, Vo(), St(), Mt(), oi(), Ee();
        return;
      }
      if (_ === "frame-rotate-90") {
        const pe = f.mode === "frame" ? ft() : null;
        if (!pe || pe.locked === !0) return;
        Oh(pe), E.frameRail.aspectOpen = !1, Vo(), St(), Mt(), oi(), Ee();
        return;
      }
      if (_ === "aspect") {
        f.cutoutAspectOpen = !f.cutoutAspectOpen, f.menuSize.measured = !1, dt(), Ee();
        return;
      }
      if (_ === "aspect-set") {
        const pe = Ln();
        if (!pe) return;
        const Pe = String(y.getAttribute("data-aspect") || "1:1");
        Ah(pe, Pe), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, Vo(), St(), Mt(), dt(), Ee();
        return;
      }
      if (_ === "rotate-90") {
        const pe = Ln();
        if (!pe || Gi()) return;
        Oh(pe), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, Vo(), St(), Mt(), dt(), Ee();
        return;
      }
      if (_ === "bring-front") {
        R1();
        return;
      }
      if (_ === "send-back") {
        av();
        return;
      }
      if (_ === "duplicate") {
        X_();
        return;
      }
      if (_ === "replace-image") {
        $_();
        return;
      }
      if (_ === "toggle-lock") {
        fv();
        return;
      }
      if (_ === "back-initial") {
        ov();
        return;
      }
      if (_ === "toggle-visible") {
        uv();
        return;
      }
      if (_ === "delete") {
        Ih();
        return;
      }
    }
    if (_ === "reset-view") {
      if (f.mode === "frame") return;
      Bi(
        { position: Fo(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Le = Rr()) == null ? void 0 : Le.radius) || Cr },
        { mode: Ll(f.spaceMode, f.viewTransition), moved: !1 }
      );
      return;
    }
    if (_ === "frame-view") {
      if (!fr() || Ll(f.spaceMode, f.viewTransition) !== "6dof") return;
      Pv();
      return;
    }
    if (_ === "toggle-grid") {
      if (f.mode === "frame") return;
      f.showGrid = !f.showGrid, gT(e == null ? void 0 : e.id, f.showGrid), gu(), Ee();
      return;
    }
    if (_ === "toggle-fullscreen") {
      o.preventDefault(), o.stopPropagation(), YS();
      return;
    }
    if (_ === "toggle-output-preview-size") {
      o.preventDefault(), o.stopPropagation();
      const pe = !f.outputPreviewExpanded;
      f.outputPreviewExpanded = pe, Ea(() => {
        f.outputPreviewAnimFrom = f.outputPreviewAnim, f.outputPreviewAnimTo = pe ? 1 : 0, f.outputPreviewAnimStartTs = performance.now();
      }), um(), Ee();
      return;
    }
    const w = o.target.closest("[data-paint-history-index]");
    if (!w) return;
    const P = Number(w.getAttribute("data-paint-history-index")), C = f.customPaintHistory[P];
    C && (f.customPaintColor = or(C), f.paintColor = or(C), Gn());
  }
  D.addEventListener("click", jS);
  function HS(o) {
    const c = o.target.closest("[data-video-seek]");
    if (c) {
      if (!(me instanceof HTMLVideoElement)) return;
      nn.playing && (Rt.resumeAfterScrub = !0), nn.seek(lo(Number(c.value || 0), Gs()));
      return;
    }
    const d = o.target.closest("[data-video-volume]");
    if (d) {
      if (!(me instanceof HTMLVideoElement)) return;
      const _ = ve(Number(d.value || 0), 0, 1);
      me.volume = _, me.muted = _ <= 1e-4, Pi({
        hasAudio: E.videoTransport.hasAudio,
        muted: me.muted,
        volume: _
      });
      return;
    }
    const m = o.target.closest("[data-paint-size-slider]");
    if (m) {
      if (m.disabled) return;
      const _ = Math.max(1, Math.min(120, Math.round(Number(m.value)))), w = qi(f.primaryTool === "paint" ? f.paintTool : f.maskTool);
      f.brushSizes[w] = _, Gn(), fS();
      return;
    }
    const y = o.target.closest("[data-paint-alpha-slider]");
    if (y) {
      const _ = { ...f.customPaintColor, a: ve(Number(y.value) / 100, 0, 1) };
      f.customPaintColor = or(_), f.paintColor = or(_), Gn();
    }
  }
  D.addEventListener("input", HS);
  function GS(o) {
    var c;
    if (o.target.closest("[data-video-seek]")) {
      if (!(me instanceof HTMLVideoElement)) return;
      Rt.resumeAfterScrub && nn.play(), Rt.resumeAfterScrub = !1;
      return;
    }
    if (o.target.closest("[data-video-volume]")) {
      typeof ((c = o.target) == null ? void 0 : c.blur) == "function" && o.target.blur();
      return;
    }
    o.target.closest("[data-paint-size-slider]") && Zs();
  }
  D.addEventListener("change", GS), D.addEventListener("pointerup", (o) => {
    var c;
    if (o.target.closest("[data-video-volume]")) {
      typeof ((c = o.target) == null ? void 0 : c.blur) == "function" && o.target.blur();
      return;
    }
    o.target.closest("[data-paint-size-slider]") && Zs();
  }), D.addEventListener("pointercancel", (o) => {
    var c;
    if (o.target.closest("[data-video-volume]")) {
      typeof ((c = o.target) == null ? void 0 : c.blur) == "function" && o.target.blur();
      return;
    }
    o.target.closest("[data-paint-size-slider]") && Zs();
  }), D.addEventListener("focusout", (o) => {
    o.target.closest("[data-paint-size-slider]") && Zs();
  });
  function KS(o) {
    const c = o.target.closest("[data-tip]");
    !c || !D.contains(c) || tn.target !== c && (tn.target = c, tn.timer && clearTimeout(tn.timer), tn.timer = window.setTimeout(() => {
      tn.target === c && _S(c);
    }, 220));
  }
  D.addEventListener("pointerover", KS);
  function WS(o) {
    var m, y;
    const c = o.target.closest("[data-tip]");
    !c || tn.target !== c || (o.relatedTarget instanceof Element ? (y = (m = o.relatedTarget).closest) == null ? void 0 : y.call(m, "[data-tip]") : null) === c || Ji();
  }
  D.addEventListener("pointerout", WS), D.addEventListener("pointerdown", (o) => {
    o.target.closest("[data-frame-roll-knob]") || Ji();
  });
  function BS(o, c) {
    var P;
    if (!Ne) return;
    const d = Ne.getBoundingClientRect(), m = ve((o - d.left) / Math.max(1, d.width), 0, 1), y = 1 - ve((c - d.top) / Math.max(1, d.height), 0, 1), _ = uf(f.customPaintColor), w = { ...cf(_.h, m, y), a: Number(((P = f.customPaintColor) == null ? void 0 : P.a) ?? 1) };
    f.customPaintColor = or(w), f.paintColor = or(w), Gn();
  }
  function US(o) {
    var _;
    if (!ze) return;
    const c = ze.getBoundingClientRect(), d = ve((o - c.left) / Math.max(1, c.width), 0, 1), m = uf(f.customPaintColor), y = { ...cf(d, m.s, m.v), a: Number(((_ = f.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    f.customPaintColor = or(y), f.paintColor = or(y), Gn();
  }
  function am(o, c) {
    const d = o.pointerId;
    c(o);
    const m = (_) => {
      _.pointerId === d && c(_);
    }, y = (_) => {
      _.pointerId === d && (window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", y));
    };
    window.addEventListener("pointermove", m), window.addEventListener("pointerup", y), window.addEventListener("pointercancel", y);
  }
  Ne && (Ne.onpointerdown = (o) => {
    o.preventDefault(), o.stopPropagation(), am(o, (c) => BS(c.clientX, c.clientY));
  }), ze && (ze.onpointerdown = (o) => {
    o.preventDefault(), o.stopPropagation(), am(o, (c) => US(c.clientX));
  }), D.addEventListener("click", (o) => {
    var y;
    const c = o.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!c) return;
    const d = c.getAttribute("data-action") === "confirm-accept", m = (y = E.confirmDialog) == null ? void 0 : y.resolve;
    E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, m == null || m(d);
  });
  function sm() {
    const o = !!f.fullscreen;
    Wo(E.floatingButtons, "action", "toggle-fullscreen", {
      icon: o ? Ke.fullscreen_close : Ke.fullscreen,
      label: o ? "Exit Fullscreen" : "Fullscreen",
      tip: o ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function el(o) {
    const c = !!o;
    f.fullscreen !== c && (f.fullscreen = c, D.classList.toggle("pano-modal-fullscreen", c), c ? (f.fullscreenPrevShowGrid = !!f.showGrid, f.showGrid = !1) : f.fullscreenPrevShowGrid !== null && (f.showGrid = !!f.fullscreenPrevShowGrid, f.fullscreenPrevShowGrid = null), gu(), sm(), No(), Ee());
  }
  const lm = () => document.fullscreenElement === J;
  async function YS() {
    var o, c;
    try {
      if (!document.fullscreenEnabled) {
        el(!f.fullscreen);
        return;
      }
      lm() ? await ((c = document.exitFullscreen) == null ? void 0 : c.call(document)) : await ((o = J.requestFullscreen) == null ? void 0 : o.call(J));
    } catch {
      el(!f.fullscreen);
    }
  }
  function cm() {
    document.fullscreenEnabled && el(lm());
  }
  document.addEventListener("fullscreenchange", cm), sm();
  function um() {
    const o = !!f.outputPreviewExpanded;
    E.outputPreviewToggle.icon = o ? Ke.fullscreen_close : Ke.fullscreen, E.outputPreviewToggle.label = o ? "Reduce Preview" : "Expand Preview", E.outputPreviewToggle.tip = o ? "Reduce preview" : "Expand preview";
  }
  um();
  const yu = e.onConnectionsChange;
  let bu = null, fm = () => {
  };
  !r && t === "stickers" && (fm = l1(e, (o = "sync") => {
    o === "executed" && (ET(ge, bc), Ai(), k && O_()), Bp(o);
  }, { editor: !0 }), bu = function(...c) {
    typeof yu == "function" && yu.apply(this, c), Ai(), yi(this, "connections");
  }, e.onConnectionsChange = bu), !r && !N && v0.set(String(e.id ?? "0"), () => Tp());
  let zo = null;
  async function jo() {
    return zo || (zo = (async () => {
      var o, c, d, m, y, _, w, P;
      return v0.delete(String(e.id ?? "0")), sS(), r || ir(), document.fullscreenElement === J && ((o = document.exitFullscreen) == null || o.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", cm), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Eh && (e.__panoFlushStateBeforeQueue = null), (d = (c = e.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || d.call(c), (y = (m = e.graph) == null ? void 0 : m.setDirtyCanvas) == null || y.call(m, !0, !0), (P = (w = (_ = sr) == null ? void 0 : _.canvas) == null ? void 0 : w.setDirty) == null || P.call(w, !0, !0), Ji(), Ue.cancel(), M_(), me instanceof HTMLVideoElement && me.pause(), ni.forEach((C) => {
        try {
          C();
        } catch {
        }
      }), Re.dispose(), Wi(!1), window.removeEventListener("keydown", dm, !0), window.removeEventListener("keydown", pm, !0), window.removeEventListener("keydown", mm, !0), window.removeEventListener("keyup", gm, !0), window.removeEventListener("keydown", tl, !0), window.removeEventListener("keyup", tl, !0), window.removeEventListener("blur", ym), window.removeEventListener("keydown", bm, !0), window.removeEventListener("dragenter", em, !0), window.removeEventListener("dragover", tm, !0), window.removeEventListener("dragleave", nm, !0), window.removeEventListener("drop", rm, !0), !r && t === "stickers" && (e.onConnectionsChange === bu && (e.onConnectionsChange = yu), fm()), xe.unmount(), re.remove(), eS(), zo = null, !0;
    })().catch((o) => (console.error("[PanoramaCutoutSync] closeEditor failed", o), zo = null, !1)), zo);
  }
  function dm(o) {
    var c, d, m, y, _;
    if (o.key === "Escape") {
      if (Va()) {
        o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o);
        return;
      }
      if (f.fullscreen && document.fullscreenElement === J) {
        o.preventDefault(), o.stopPropagation(), (d = o.stopImmediatePropagation) == null || d.call(o), (m = document.exitFullscreen) == null || m.call(document).catch(() => {
        });
        return;
      }
      if (f.fullscreen) {
        o.preventDefault(), o.stopPropagation(), (y = o.stopImmediatePropagation) == null || y.call(o), el(!1);
        return;
      }
      o.preventDefault(), o.stopPropagation(), (_ = o.stopImmediatePropagation) == null || _.call(o), jo();
    }
  }
  function pm(o) {
    const c = String(o.key || ""), d = String(o.code || ""), m = Number(o.keyCode || 0);
    if (!(c === "Delete" || d === "Delete" || m === 46) && !(c === "Backspace" || d === "Backspace" || m === 8)) return;
    const w = o.target, P = ((w == null ? void 0 : w.tagName) || "").toUpperCase();
    if (P === "INPUT" || P === "TEXTAREA" || w != null && w.isContentEditable) return;
    if (W.selection) {
      I_(), o.preventDefault(), o.stopPropagation();
      return;
    }
    if (q_()) {
      o.preventDefault(), o.stopPropagation();
      return;
    }
    Ln() && (Ih(), o.preventDefault(), o.stopPropagation());
  }
  function hm(o) {
    if (o.code !== "Space" || o.ctrlKey || o.metaKey || o.altKey || r || !S || !E.timeline.visible || E.confirmDialog.visible) return !1;
    const c = o.composedPath()[0];
    if (c !== document.body && c !== document.documentElement && !J.contains(c)) return !1;
    const d = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    return d === "INPUT" ? !$E.has(String(c.type || "text").toLowerCase()) : d !== "TEXTAREA" && d !== "SELECT" && !(c != null && c.isContentEditable);
  }
  function mm(o) {
    hm(o) && (o.preventDefault(), o.stopPropagation(), o.repeat || cu());
  }
  function gm(o) {
    hm(o) && (o.preventDefault(), o.stopPropagation());
  }
  function tl(o) {
    const c = !!(o.ctrlKey || o.metaKey), d = !!o.altKey;
    f.marqueeModifier === c && f.altModifier === d || (f.marqueeModifier = c, f.altModifier = d, si(), Ot(f.pointerPos));
  }
  function ym() {
    f.marqueeModifier = !1, f.altModifier = !1, si(), Ot(f.pointerPos);
  }
  function bm(o) {
    if (r || !o.ctrlKey && !o.metaKey) return;
    const c = String(o.key || "").toLowerCase(), d = String(o.code || "");
    if (c !== "z" && d !== "KeyZ") return;
    const m = o.target, y = ((m == null ? void 0 : m.tagName) || "").toUpperCase();
    if (y === "INPUT" || y === "TEXTAREA" || m != null && m.isContentEditable) return;
    const { canUndo: _, canRedo: w } = Sp();
    o.shiftKey && !w || !o.shiftKey && !_ || (Kc(o.shiftKey ? 1 : -1), o.preventDefault(), o.stopPropagation());
  }
  window.addEventListener("keydown", dm, !0), window.addEventListener("keydown", pm, !0), window.addEventListener("keydown", mm, !0), window.addEventListener("keyup", gm, !0), window.addEventListener("keydown", tl, !0), window.addEventListener("keyup", tl, !0), window.addEventListener("blur", ym), window.addEventListener("keydown", bm, !0), J.addEventListener("pointerdown", (o) => {
    o.target === J && jo();
  });
  function jr(o, c, { rollbackState: d = !1 } = {}) {
    let m = "";
    try {
      d && (m = JSON.stringify(v)), c();
    } catch (y) {
      if (m)
        try {
          const _ = JSON.parse(m);
          Object.keys(v).forEach((w) => delete v[w]), Object.assign(v, _), r || ir();
        } catch (_) {
          console.error(`[PanoramaStickers] editor boot step "${o}" rollback failed`, _);
        }
      E.stageWarningDetail = `boot:${o}`, console.error(`[PanoramaStickers] editor boot step "${o}" failed`, y);
    }
  }
  jr("cutout-focus", D1), !r && t === "stickers" && jr("external-sticker-sync", () => Bp("open"), { rollbackState: !0 }), z_().catch((o) => {
    E.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', o);
  }), jr("history", St), jr("undo-redo", im), jr("paint-ui", Gn), jr("side-panel", at), jr("look-at-frame", Jc), jr("video-source", Ai), jr("canvas-size", Bs), jr("cursor", () => Ot(f.pointerPos)), Ee(), de = Nk("editor", () => {
    var o;
    return {
      type: t,
      readOnly: r,
      mode: f.mode,
      interaction: ((o = f.interaction) == null ? void 0 : o.kind) ?? null,
      timelineDrag: !!W.drag,
      playing: !!nn.playing
    };
  });
}
sr.registerExtension(G2({
  app: sr,
  openEditor: TT,
  attachStickers: rC,
  attachCutout: iC,
  attachPreview: nC,
  restoreOutput: GA,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: WE
}));
