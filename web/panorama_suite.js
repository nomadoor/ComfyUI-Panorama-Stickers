import * as jl from "../../scripts/app.js";
import { app as Fr } from "../../scripts/app.js";
import { api as qt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ld(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ot = {}, ua = [], Qr = () => {
}, U0 = () => !1, $c = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), zc = (e) => e.startsWith("onUpdate:"), Tn = Object.assign, Rd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pS = Object.prototype.hasOwnProperty, St = (e, t) => pS.call(e, t), Je = Array.isArray, fa = (e) => Ys(e) === "[object Map]", Y0 = (e) => Ys(e) === "[object Set]", Km = (e) => Ys(e) === "[object Date]", rt = (e) => typeof e == "function", nn = (e) => typeof e == "string", ni = (e) => typeof e == "symbol", Ct = (e) => e !== null && typeof e == "object", X0 = (e) => (Ct(e) || rt(e)) && rt(e.then) && rt(e.catch), q0 = Object.prototype.toString, Ys = (e) => q0.call(e), hS = (e) => Ys(e).slice(8, -1), J0 = (e) => Ys(e) === "[object Object]", Vd = (e) => nn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ws = /* @__PURE__ */ Ld(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, mS = /-\w/g, Hn = jc(
  (e) => e.replace(mS, (t) => t.slice(1).toUpperCase())
), gS = /\B([A-Z])/g, Oo = jc(
  (e) => e.replace(gS, "-$1").toLowerCase()
), Hc = jc((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yu = jc(
  (e) => e ? `on${Hc(e)}` : ""
), Jr = (e, t) => !Object.is(e, t), Hl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Z0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, $d = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Wm;
const Gc = () => Wm || (Wm = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = nn(r) ? _S(r) : At(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (nn(e) || Ct(e))
    return e;
}
const yS = /;(?![^(]*\))/g, bS = /:([^]+)/, vS = /\/\*[^]*?\*\//g;
function _S(e) {
  const t = {};
  return e.replace(vS, "").split(yS).forEach((n) => {
    if (n) {
      const r = n.split(bS);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ft(e) {
  let t = "";
  if (nn(e))
    t = e;
  else if (Je(e))
    for (let n = 0; n < e.length; n++) {
      const r = ft(e[n]);
      r && (t += r + " ");
    }
  else if (Ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", SS = /* @__PURE__ */ Ld(wS);
function Q0(e) {
  return !!e || e === "";
}
function xS(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = zd(e[r], t[r]);
  return n;
}
function zd(e, t) {
  if (e === t) return !0;
  let n = Km(e), r = Km(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ni(e), r = ni(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? xS(e, t) : !1;
  if (n = Ct(e), r = Ct(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !zd(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ey = (e) => !!(e && e.__v_isRef === !0), tt = (e) => nn(e) ? e : e == null ? "" : Je(e) || Ct(e) && (e.toString === q0 || !rt(e.toString)) ? ey(e) ? tt(e.value) : JSON.stringify(e, ty, 2) : String(e), ty = (e, t) => ey(t) ? ty(e, t.value) : fa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Xu(r, a) + " =>"] = o, n),
    {}
  )
} : Y0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Xu(n))
} : ni(t) ? Xu(t) : Ct(t) && !Je(t) && !J0(t) ? String(t) : t, Xu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ni(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xn;
class kS {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Xn, !t && Xn && (this.index = (Xn.scopes || (Xn.scopes = [])).push(
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
      const n = Xn;
      try {
        return Xn = this, t();
      } finally {
        Xn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Xn, Xn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Xn = this.prevScope, this.prevScope = void 0);
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
function MS() {
  return Xn;
}
let Tt;
const qu = /* @__PURE__ */ new WeakSet();
class ny {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Xn && Xn.active && Xn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qu.has(this) && (qu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || iy(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bm(this), oy(this);
    const t = Tt, n = Tr;
    Tt = this, Tr = !0;
    try {
      return this.fn();
    } finally {
      ay(this), Tt = t, Tr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Gd(t);
      this.deps = this.depsTail = void 0, Bm(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Kf(this) && this.run();
  }
  get dirty() {
    return Kf(this);
  }
}
let ry = 0, Ss, xs;
function iy(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xs, xs = e;
    return;
  }
  e.next = Ss, Ss = e;
}
function jd() {
  ry++;
}
function Hd() {
  if (--ry > 0)
    return;
  if (xs) {
    let t = xs;
    for (xs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ss; ) {
    let t = Ss;
    for (Ss = void 0; t; ) {
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
function oy(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ay(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Gd(r), NS(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Kf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sy(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sy(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Es) || (e.globalVersion = Es, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Kf(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Tt, r = Tr;
  Tt = e, Tr = !0;
  try {
    oy(e);
    const o = e.fn(e._value);
    (t.version === 0 || Jr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Tt = n, Tr = r, ay(e), e.flags &= -3;
  }
}
function Gd(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Gd(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function NS(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Tr = !0;
const ly = [];
function ki() {
  ly.push(Tr), Tr = !1;
}
function Mi() {
  const e = ly.pop();
  Tr = e === void 0 ? !0 : e;
}
function Bm(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Tt;
    Tt = void 0;
    try {
      t();
    } finally {
      Tt = n;
    }
  }
}
let Es = 0;
class PS {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Kd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Tt || !Tr || Tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Tt)
      n = this.activeLink = new PS(Tt, this), Tt.deps ? (n.prevDep = Tt.depsTail, Tt.depsTail.nextDep = n, Tt.depsTail = n) : Tt.deps = Tt.depsTail = n, cy(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Tt.depsTail, n.nextDep = void 0, Tt.depsTail.nextDep = n, Tt.depsTail = n, Tt.deps === n && (Tt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Es++, this.notify(t);
  }
  notify(t) {
    jd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Hd();
    }
  }
}
function cy(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        cy(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Wf = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ Symbol(
  ""
), Bf = /* @__PURE__ */ Symbol(
  ""
), Fs = /* @__PURE__ */ Symbol(
  ""
);
function In(e, t, n) {
  if (Tr && Tt) {
    let r = Wf.get(e);
    r || Wf.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Kd()), o.map = r, o.key = n), o.track();
  }
}
function vi(e, t, n, r, o, a) {
  const c = Wf.get(e);
  if (!c) {
    Es++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (jd(), t === "clear")
    c.forEach(u);
  else {
    const d = Je(e), b = d && Vd(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((v, S) => {
        (S === "length" || S === Fs || !ni(S) && S >= y) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Fs)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(So)), fa(e) && u(c.get(Bf)));
          break;
        case "delete":
          d || (u(c.get(So)), fa(e) && u(c.get(Bf)));
          break;
        case "set":
          fa(e) && u(c.get(So));
          break;
      }
  }
  Hd();
}
function Jo(e) {
  const t = /* @__PURE__ */ wt(e);
  return t === e ? t : (In(t, "iterate", Fs), /* @__PURE__ */ vr(e) ? t : t.map(Dr));
}
function Kc(e) {
  return In(e = /* @__PURE__ */ wt(e), "iterate", Fs), e;
}
function Xr(e, t) {
  return /* @__PURE__ */ Ni(e) ? Sa(/* @__PURE__ */ xo(e) ? Dr(t) : t) : Dr(t);
}
const AS = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ju(this, Symbol.iterator, (e) => Xr(this, e));
  },
  concat(...e) {
    return Jo(this).concat(
      ...e.map((t) => Je(t) ? Jo(t) : t)
    );
  },
  entries() {
    return Ju(this, "entries", (e) => (e[1] = Xr(this, e[1]), e));
  },
  every(e, t) {
    return di(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return di(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Xr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return di(
      this,
      "find",
      e,
      t,
      (n) => Xr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return di(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return di(
      this,
      "findLast",
      e,
      t,
      (n) => Xr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return di(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return di(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zu(this, "includes", e);
  },
  indexOf(...e) {
    return Zu(this, "indexOf", e);
  },
  join(e) {
    return Jo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return di(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rs(this, "pop");
  },
  push(...e) {
    return rs(this, "push", e);
  },
  reduce(e, ...t) {
    return Um(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Um(this, "reduceRight", e, t);
  },
  shift() {
    return rs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return di(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rs(this, "splice", e);
  },
  toReversed() {
    return Jo(this).toReversed();
  },
  toSorted(e) {
    return Jo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Jo(this).toSpliced(...e);
  },
  unshift(...e) {
    return rs(this, "unshift", e);
  },
  values() {
    return Ju(this, "values", (e) => Xr(this, e));
  }
};
function Ju(e, t, n) {
  const r = Kc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ vr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const CS = Array.prototype;
function di(e, t, n, r, o, a) {
  const c = Kc(e), u = c !== e && !/* @__PURE__ */ vr(e), d = c[t];
  if (d !== CS[t]) {
    const v = d.apply(e, a);
    return u ? Dr(v) : v;
  }
  let b = n;
  c !== e && (u ? b = function(v, S) {
    return n.call(this, Xr(e, v), S, e);
  } : n.length > 2 && (b = function(v, S) {
    return n.call(this, v, S, e);
  }));
  const y = d.call(c, b, r);
  return u && o ? o(y) : y;
}
function Um(e, t, n, r) {
  const o = Kc(e), a = o !== e && !/* @__PURE__ */ vr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, y, v) {
    return u && (u = !1, b = Xr(e, b)), n.call(this, b, Xr(e, y), v, e);
  }) : n.length > 3 && (c = function(b, y, v) {
    return n.call(this, b, y, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Xr(e, d) : d;
}
function Zu(e, t, n) {
  const r = /* @__PURE__ */ wt(e);
  In(r, "iterate", Fs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ud(n[0]) ? (n[0] = /* @__PURE__ */ wt(n[0]), r[t](...n)) : o;
}
function rs(e, t, n = []) {
  ki(), jd();
  const r = (/* @__PURE__ */ wt(e))[t].apply(e, n);
  return Hd(), Mi(), r;
}
const IS = /* @__PURE__ */ Ld("__proto__,__v_isRef,__isVue"), uy = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ni)
);
function OS(e) {
  ni(e) || (e = String(e));
  const t = /* @__PURE__ */ wt(this);
  return In(t, "has", e), t.hasOwnProperty(e);
}
class fy {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (o ? a ? jS : my : a ? hy : py).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Je(t);
    if (!o) {
      let d;
      if (c && (d = AS[n]))
        return d;
      if (n === "hasOwnProperty")
        return OS;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Fn(t) ? t : r
    );
    if ((ni(n) ? uy.has(n) : IS(n)) || (o || In(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ Fn(u)) {
      const d = c && Vd(n) ? u : u.value;
      return o && Ct(d) ? /* @__PURE__ */ Yf(d) : d;
    }
    return Ct(u) ? o ? /* @__PURE__ */ Yf(u) : /* @__PURE__ */ Pa(u) : u;
  }
}
class dy extends fy {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Je(t) && Vd(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Ni(a);
      if (!/* @__PURE__ */ vr(r) && !/* @__PURE__ */ Ni(r) && (a = /* @__PURE__ */ wt(a), r = /* @__PURE__ */ wt(r)), !c && /* @__PURE__ */ Fn(a) && !/* @__PURE__ */ Fn(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : St(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Fn(t) ? t : o
    );
    return t === /* @__PURE__ */ wt(o) && (u ? Jr(r, a) && vi(t, "set", n, r) : vi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = St(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && vi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ni(n) || !uy.has(n)) && In(t, "has", n), r;
  }
  ownKeys(t) {
    return In(
      t,
      "iterate",
      Je(t) ? "length" : So
    ), Reflect.ownKeys(t);
  }
}
class ES extends fy {
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
const FS = /* @__PURE__ */ new dy(), TS = /* @__PURE__ */ new ES(), DS = /* @__PURE__ */ new dy(!0);
const Uf = (e) => e, xl = (e) => Reflect.getPrototypeOf(e);
function LS(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ wt(o), c = fa(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), y = n ? Uf : t ? Sa : Dr;
    return !t && In(
      a,
      "iterate",
      d ? Bf : So
    ), Tn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: S } = b.next();
          return S ? { value: v, done: S } : {
            value: u ? [y(v[0]), y(v[1])] : y(v),
            done: S
          };
        }
      }
    );
  };
}
function kl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function RS(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ wt(a), u = /* @__PURE__ */ wt(o);
      e || (Jr(o, u) && In(c, "get", o), In(c, "get", u));
      const { has: d } = xl(c), b = t ? Uf : e ? Sa : Dr;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && In(/* @__PURE__ */ wt(o), "iterate", So), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ wt(a), u = /* @__PURE__ */ wt(o);
      return e || (Jr(o, u) && In(c, "has", o), In(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ wt(u), b = t ? Uf : e ? Sa : Dr;
      return !e && In(d, "iterate", So), u.forEach((y, v) => o.call(a, b(y), b(v), c));
    }
  };
  return Tn(
    n,
    e ? {
      add: kl("add"),
      set: kl("set"),
      delete: kl("delete"),
      clear: kl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ wt(this), c = xl(a), u = /* @__PURE__ */ wt(o), d = !t && !/* @__PURE__ */ vr(o) && !/* @__PURE__ */ Ni(o) ? u : o;
        return c.has.call(a, d) || Jr(o, d) && c.has.call(a, o) || Jr(u, d) && c.has.call(a, u) || (a.add(d), vi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ vr(a) && !/* @__PURE__ */ Ni(a) && (a = /* @__PURE__ */ wt(a));
        const c = /* @__PURE__ */ wt(this), { has: u, get: d } = xl(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ wt(o), b = u.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), b ? Jr(a, y) && vi(c, "set", o, a) : vi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ wt(this), { has: c, get: u } = xl(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ wt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && vi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ wt(this), a = o.size !== 0, c = o.clear();
        return a && vi(
          o,
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
  ].forEach((o) => {
    n[o] = LS(o, e, t);
  }), n;
}
function Wd(e, t) {
  const n = RS(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    St(n, o) && o in r ? n : r,
    o,
    a
  );
}
const VS = {
  get: /* @__PURE__ */ Wd(!1, !1)
}, $S = {
  get: /* @__PURE__ */ Wd(!1, !0)
}, zS = {
  get: /* @__PURE__ */ Wd(!0, !1)
};
const py = /* @__PURE__ */ new WeakMap(), hy = /* @__PURE__ */ new WeakMap(), my = /* @__PURE__ */ new WeakMap(), jS = /* @__PURE__ */ new WeakMap();
function HS(e) {
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
function GS(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : HS(hS(e));
}
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  return /* @__PURE__ */ Ni(e) ? e : Bd(
    e,
    !1,
    FS,
    VS,
    py
  );
}
// @__NO_SIDE_EFFECTS__
function KS(e) {
  return Bd(
    e,
    !1,
    DS,
    $S,
    hy
  );
}
// @__NO_SIDE_EFFECTS__
function Yf(e) {
  return Bd(
    e,
    !0,
    TS,
    zS,
    my
  );
}
function Bd(e, t, n, r, o) {
  if (!Ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = GS(e);
  if (a === 0)
    return e;
  const c = o.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function xo(e) {
  return /* @__PURE__ */ Ni(e) ? /* @__PURE__ */ xo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ud(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ wt(t) : e;
}
function WS(e) {
  return !St(e, "__v_skip") && Object.isExtensible(e) && Z0(e, "__v_skip", !0), e;
}
const Dr = (e) => Ct(e) ? /* @__PURE__ */ Pa(e) : e, Sa = (e) => Ct(e) ? /* @__PURE__ */ Yf(e) : e;
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return BS(e, !1);
}
function BS(e, t) {
  return /* @__PURE__ */ Fn(e) ? e : new US(e, t);
}
class US {
  constructor(t, n) {
    this.dep = new Kd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ wt(t), this._value = n ? t : Dr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ vr(t) || /* @__PURE__ */ Ni(t);
    t = r ? t : /* @__PURE__ */ wt(t), Jr(t, n) && (this._rawValue = t, this._value = r ? t : Dr(t), this.dep.trigger());
  }
}
function et(e) {
  return /* @__PURE__ */ Fn(e) ? e.value : e;
}
const YS = {
  get: (e, t, n) => t === "__v_raw" ? e : et(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ Fn(o) && !/* @__PURE__ */ Fn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function gy(e) {
  return /* @__PURE__ */ xo(e) ? e : new Proxy(e, YS);
}
class XS {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Kd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Es - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Tt !== this)
      return iy(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return sy(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function qS(e, t, n = !1) {
  let r, o;
  return rt(e) ? r = e : (r = e.get, o = e.set), new XS(r, o, n);
}
const Ml = {}, cc = /* @__PURE__ */ new WeakMap();
let go;
function JS(e, t = !1, n = go) {
  if (n) {
    let r = cc.get(n);
    r || cc.set(n, r = []), r.push(e);
  }
}
function ZS(e, t, n = Ot) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (z) => o ? z : /* @__PURE__ */ vr(z) || o === !1 || o === 0 ? _i(z, 1) : _i(z);
  let y, v, S, N, k = !1, P = !1;
  if (/* @__PURE__ */ Fn(e) ? (v = () => e.value, k = /* @__PURE__ */ vr(e)) : /* @__PURE__ */ xo(e) ? (v = () => b(e), k = !0) : Je(e) ? (P = !0, k = e.some((z) => /* @__PURE__ */ xo(z) || /* @__PURE__ */ vr(z)), v = () => e.map((z) => {
    if (/* @__PURE__ */ Fn(z))
      return z.value;
    if (/* @__PURE__ */ xo(z))
      return b(z);
    if (rt(z))
      return d ? d(z, 2) : z();
  })) : rt(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (S) {
      ki();
      try {
        S();
      } finally {
        Mi();
      }
    }
    const z = go;
    go = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      go = z;
    }
  } : v = Qr, t && o) {
    const z = v, _ = o === !0 ? 1 / 0 : o;
    v = () => _i(z(), _);
  }
  const A = MS(), F = () => {
    y.stop(), A && A.active && Rd(A.effects, y);
  };
  if (a && t) {
    const z = t;
    t = (..._) => {
      z(..._), F();
    };
  }
  let B = P ? new Array(e.length).fill(Ml) : Ml;
  const V = (z) => {
    if (!(!(y.flags & 1) || !y.dirty && !z))
      if (t) {
        const _ = y.run();
        if (o || k || (P ? _.some((R, W) => Jr(R, B[W])) : Jr(_, B))) {
          S && S();
          const R = go;
          go = y;
          try {
            const W = [
              _,
              // pass undefined as the old value when it's changed for the first time
              B === Ml ? void 0 : P && B[0] === Ml ? [] : B,
              N
            ];
            B = _, d ? d(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            go = R;
          }
        }
      } else
        y.run();
  };
  return u && u(V), y = new ny(v), y.scheduler = c ? () => c(V, !1) : V, N = (z) => JS(z, !1, y), S = y.onStop = () => {
    const z = cc.get(y);
    if (z) {
      if (d)
        d(z, 4);
      else
        for (const _ of z) _();
      cc.delete(y);
    }
  }, t ? r ? V(!0) : B = y.run() : c ? c(V.bind(null, !0), !0) : y.run(), F.pause = y.pause.bind(y), F.resume = y.resume.bind(y), F.stop = F, F;
}
function _i(e, t = 1 / 0, n) {
  if (t <= 0 || !Ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Fn(e))
    _i(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      _i(e[r], t, n);
  else if (Y0(e) || fa(e))
    e.forEach((r) => {
      _i(r, t, n);
    });
  else if (J0(e)) {
    for (const r in e)
      _i(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && _i(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Wc(o, t, n);
  }
}
function ri(e, t, n, r) {
  if (rt(e)) {
    const o = Xs(e, t, n, r);
    return o && X0(o) && o.catch((a) => {
      Wc(a, t, n);
    }), o;
  }
  if (Je(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(ri(e[a], t, n, r));
    return o;
  }
}
function Wc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Ot;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let v = 0; v < y.length; v++)
          if (y[v](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      ki(), Xs(a, null, 10, [
        e,
        d,
        b
      ]), Mi();
      return;
    }
  }
  QS(e, n, o, r, c);
}
function QS(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const zn = [];
let Yr = -1;
const da = [];
let Hi = null, ra = 0;
const yy = /* @__PURE__ */ Promise.resolve();
let uc = null;
function Bc(e) {
  const t = uc || yy;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ex(e) {
  let t = Yr + 1, n = zn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = zn[r], a = Ts(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Yd(e) {
  if (!(e.flags & 1)) {
    const t = Ts(e), n = zn[zn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ts(n) ? zn.push(e) : zn.splice(ex(t), 0, e), e.flags |= 1, by();
  }
}
function by() {
  uc || (uc = yy.then(_y));
}
function tx(e) {
  Je(e) ? da.push(...e) : Hi && e.id === -1 ? Hi.splice(ra + 1, 0, e) : e.flags & 1 || (da.push(e), e.flags |= 1), by();
}
function Ym(e, t, n = Yr + 1) {
  for (; n < zn.length; n++) {
    const r = zn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      zn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function vy(e) {
  if (da.length) {
    const t = [...new Set(da)].sort(
      (n, r) => Ts(n) - Ts(r)
    );
    if (da.length = 0, Hi) {
      Hi.push(...t);
      return;
    }
    for (Hi = t, ra = 0; ra < Hi.length; ra++) {
      const n = Hi[ra];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Hi = null, ra = 0;
  }
}
const Ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _y(e) {
  try {
    for (Yr = 0; Yr < zn.length; Yr++) {
      const t = zn[Yr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Yr < zn.length; Yr++) {
      const t = zn[Yr];
      t && (t.flags &= -2);
    }
    Yr = -1, zn.length = 0, vy(), uc = null, (zn.length || da.length) && _y();
  }
}
let lr = null, wy = null;
function fc(e) {
  const t = lr;
  return lr = e, wy = e && e.type.__scopeId || null, t;
}
function Sy(e, t = lr, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && ag(-1);
    const a = fc(t);
    let c;
    try {
      c = e(...o);
    } finally {
      fc(a), r._d && ag(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xi(e, t) {
  if (lr === null)
    return e;
  const n = Jc(lr), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Ot] = t[o];
    a && (rt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && _i(c), r.push({
      dir: a,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function lo(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (ki(), ri(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Mi());
  }
}
function nx(e, t) {
  if (On) {
    let n = On.provides;
    const r = On.parent && On.parent.provides;
    r === n && (n = On.provides = Object.create(r)), n[e] = t;
  }
}
function Gl(e, t, n = !1) {
  const r = ek();
  if (r || pa) {
    let o = pa ? pa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && rt(t) ? t.call(r && r.proxy) : t;
  }
}
const rx = /* @__PURE__ */ Symbol.for("v-scx"), ix = () => Gl(rx);
function ko(e, t, n) {
  return xy(e, t, n);
}
function xy(e, t, n = Ot) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = Tn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Ls) {
    if (a === "sync") {
      const N = ix();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Qr, N.resume = Qr, N.pause = Qr, N;
    }
  }
  const y = On;
  u.call = (N, k, P) => ri(N, y, k, P);
  let v = !1;
  a === "post" ? u.scheduler = (N) => {
    Yn(N, y && y.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (N, k) => {
    k ? N() : Yd(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), v && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const S = ZS(e, t, u);
  return Ls && (b ? b.push(S) : d && S()), S;
}
function ox(e, t, n) {
  const r = this.proxy, o = nn(e) ? e.includes(".") ? ky(r, e) : () => r[e] : e.bind(r, r);
  let a;
  rt(t) ? a = t : (a = t.handler, n = t);
  const c = Js(this), u = xy(o, a.bind(r), n);
  return c(), u;
}
function ky(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const ax = /* @__PURE__ */ Symbol("_vte"), sx = (e) => e.__isTeleport, lx = /* @__PURE__ */ Symbol("_leaveCb");
function Xd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function My(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Xm(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const dc = /* @__PURE__ */ new WeakMap();
function ks(e, t, n, r, o = !1) {
  if (Je(e)) {
    e.forEach(
      (P, A) => ks(
        P,
        t && (Je(t) ? t[A] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Ms(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ks(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Jc(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === Ot ? u.refs = {} : u.refs, v = u.setupState, S = /* @__PURE__ */ wt(v), N = v === Ot ? U0 : (P) => Xm(y, P) ? !1 : St(S, P), k = (P, A) => !(A && Xm(y, A));
  if (b != null && b !== d) {
    if (qm(t), nn(b))
      y[b] = null, N(b) && (v[b] = null);
    else if (/* @__PURE__ */ Fn(b)) {
      const P = t;
      k(b, P.k) && (b.value = null), P.k && (y[P.k] = null);
    }
  }
  if (rt(d))
    Xs(d, u, 12, [c, y]);
  else {
    const P = nn(d), A = /* @__PURE__ */ Fn(d);
    if (P || A) {
      const F = () => {
        if (e.f) {
          const B = P ? N(d) ? v[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Je(B) && Rd(B, a);
          else if (Je(B))
            B.includes(a) || B.push(a);
          else if (P)
            y[d] = [a], N(d) && (v[d] = y[d]);
          else {
            const V = [a];
            k(d, e.k) && (d.value = V), e.k && (y[e.k] = V);
          }
        } else P ? (y[d] = c, N(d) && (v[d] = c)) : A && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const B = () => {
          F(), dc.delete(e);
        };
        B.id = -1, dc.set(e, B), Yn(B, n);
      } else
        qm(e), F();
    }
  }
}
function qm(e) {
  const t = dc.get(e);
  t && (t.flags |= 8, dc.delete(e));
}
Gc().requestIdleCallback;
Gc().cancelIdleCallback;
const Ms = (e) => !!e.type.__asyncLoader, Ny = (e) => e.type.__isKeepAlive;
function cx(e, t) {
  Py(e, "a", t);
}
function ux(e, t) {
  Py(e, "da", t);
}
function Py(e, t, n = On) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Uc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ny(o.parent.vnode) && fx(r, t, n, o), o = o.parent;
  }
}
function fx(e, t, n, r) {
  const o = Uc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ay(() => {
    Rd(r[t], o);
  }, n);
}
function Uc(e, t, n = On, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      ki();
      const u = Js(n), d = ri(t, n, e, c);
      return u(), Mi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Ai = (e) => (t, n = On) => {
  (!Ls || e === "sp") && Uc(e, (...r) => t(...r), n);
}, dx = Ai("bm"), Yc = Ai("m"), px = Ai(
  "bu"
), hx = Ai("u"), qs = Ai(
  "bum"
), Ay = Ai("um"), mx = Ai(
  "sp"
), gx = Ai("rtg"), yx = Ai("rtc");
function bx(e, t = On) {
  Uc("ec", e, t);
}
const vx = "components", Cy = /* @__PURE__ */ Symbol.for("v-ndc");
function _x(e) {
  return nn(e) ? wx(vx, e, !1) || e : e || Cy;
}
function wx(e, t, n = !0, r = !1) {
  const o = lr || On;
  if (o) {
    const a = o.type;
    {
      const u = ok(
        a,
        !1
      );
      if (u && (u === t || u === Hn(t) || u === Hc(Hn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jm(o[e] || a[e], t) || // global registration
      Jm(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function Jm(e, t) {
  return e && (e[t] || e[Hn(t)] || e[Hc(Hn(t))]);
}
function kt(e, t, n, r) {
  let o;
  const a = n, c = Je(e);
  if (c || nn(e)) {
    const u = c && /* @__PURE__ */ xo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ vr(e), b = /* @__PURE__ */ Ni(e), e = Kc(e)), o = new Array(e.length);
    for (let y = 0, v = e.length; y < v; y++)
      o[y] = t(
        d ? b ? Sa(Dr(e[y])) : Dr(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Ct(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (u, d) => t(u, d, void 0, a)
      );
    else {
      const u = Object.keys(e);
      o = new Array(u.length);
      for (let d = 0, b = u.length; d < b; d++) {
        const y = u[d];
        o[d] = t(e[y], y, d, a);
      }
    }
  else
    o = [];
  return o;
}
const Xf = (e) => e ? qy(e) ? Jc(e) : Xf(e.parent) : null, Ns = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Tn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xf(e.parent),
    $root: (e) => Xf(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Oy(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bc.bind(e.proxy)),
    $watch: (e) => ox.bind(e)
  })
), Qu = (e, t) => e !== Ot && !e.__isScriptSetup && St(e, t), Sx = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const S = c[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (Qu(r, t))
          return c[t] = 1, r[t];
        if (o !== Ot && St(o, t))
          return c[t] = 2, o[t];
        if (St(a, t))
          return c[t] = 3, a[t];
        if (n !== Ot && St(n, t))
          return c[t] = 4, n[t];
        qf && (c[t] = 0);
      }
    }
    const b = Ns[t];
    let y, v;
    if (b)
      return t === "$attrs" && In(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== Ot && St(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, St(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Qu(o, t) ? (o[t] = n, !0) : r !== Ot && St(r, t) ? (r[t] = n, !0) : St(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Ot && u[0] !== "$" && St(e, u) || Qu(t, u) || St(a, u) || St(r, u) || St(Ns, u) || St(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : St(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Zm(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let qf = !0;
function xx(e) {
  const t = Oy(e), n = e.proxy, r = e.ctx;
  qf = !1, t.beforeCreate && Qm(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: y,
    beforeMount: v,
    mounted: S,
    beforeUpdate: N,
    updated: k,
    activated: P,
    deactivated: A,
    beforeDestroy: F,
    beforeUnmount: B,
    destroyed: V,
    unmounted: z,
    render: _,
    renderTracked: R,
    renderTriggered: W,
    errorCaptured: ce,
    serverPrefetch: Se,
    // public API
    expose: E,
    inheritAttrs: j,
    // assets
    components: xe,
    directives: ne,
    filters: J
  } = t;
  if (b && kx(b, r, null), c)
    for (const H in c) {
      const O = c[H];
      rt(O) && (r[H] = O.bind(n));
    }
  if (o) {
    const H = o.call(n, n);
    Ct(H) && (e.data = /* @__PURE__ */ Pa(H));
  }
  if (qf = !0, a)
    for (const H in a) {
      const O = a[H], ie = rt(O) ? O.bind(n, n) : rt(O.get) ? O.get.bind(n, n) : Qr, Q = !rt(O) && rt(O.set) ? O.set.bind(n) : Qr, ke = yt({
        get: ie,
        set: Q
      });
      Object.defineProperty(r, H, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Fe) => ke.value = Fe
      });
    }
  if (u)
    for (const H in u)
      Iy(u[H], r, n, H);
  if (d) {
    const H = rt(d) ? d.call(n) : d;
    Reflect.ownKeys(H).forEach((O) => {
      nx(O, H[O]);
    });
  }
  y && Qm(y, e, "c");
  function U(H, O) {
    Je(O) ? O.forEach((ie) => H(ie.bind(n))) : O && H(O.bind(n));
  }
  if (U(dx, v), U(Yc, S), U(px, N), U(hx, k), U(cx, P), U(ux, A), U(bx, ce), U(yx, R), U(gx, W), U(qs, B), U(Ay, z), U(mx, Se), Je(E))
    if (E.length) {
      const H = e.exposed || (e.exposed = {});
      E.forEach((O) => {
        Object.defineProperty(H, O, {
          get: () => n[O],
          set: (ie) => n[O] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === Qr && (e.render = _), j != null && (e.inheritAttrs = j), xe && (e.components = xe), ne && (e.directives = ne), Se && My(e);
}
function kx(e, t, n = Qr) {
  Je(e) && (e = Jf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Ct(o) ? "default" in o ? a = Gl(
      o.from || r,
      o.default,
      !0
    ) : a = Gl(o.from || r) : a = Gl(o), /* @__PURE__ */ Fn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Qm(e, t, n) {
  ri(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Iy(e, t, n, r) {
  let o = r.includes(".") ? ky(n, r) : () => n[r];
  if (nn(e)) {
    const a = t[e];
    rt(a) && ko(o, a);
  } else if (rt(e))
    ko(o, e.bind(n));
  else if (Ct(e))
    if (Je(e))
      e.forEach((a) => Iy(a, t, n, r));
    else {
      const a = rt(e.handler) ? e.handler.bind(n) : t[e.handler];
      rt(a) && ko(o, a, e);
    }
}
function Oy(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => pc(d, b, c, !0)
  ), pc(d, t, c)), Ct(t) && a.set(t, d), d;
}
function pc(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && pc(e, a, n, !0), o && o.forEach(
    (c) => pc(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = Mx[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Mx = {
  data: eg,
  props: tg,
  emits: tg,
  // objects
  methods: ds,
  computed: ds,
  // lifecycle
  beforeCreate: $n,
  created: $n,
  beforeMount: $n,
  mounted: $n,
  beforeUpdate: $n,
  updated: $n,
  beforeDestroy: $n,
  beforeUnmount: $n,
  destroyed: $n,
  unmounted: $n,
  activated: $n,
  deactivated: $n,
  errorCaptured: $n,
  serverPrefetch: $n,
  // assets
  components: ds,
  directives: ds,
  // watch
  watch: Px,
  // provide / inject
  provide: eg,
  inject: Nx
};
function eg(e, t) {
  return t ? e ? function() {
    return Tn(
      rt(e) ? e.call(this, this) : e,
      rt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nx(e, t) {
  return ds(Jf(e), Jf(t));
}
function Jf(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function $n(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ds(e, t) {
  return e ? Tn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tg(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Tn(
    /* @__PURE__ */ Object.create(null),
    Zm(e),
    Zm(t ?? {})
  ) : t;
}
function Px(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Tn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = $n(e[r], t[r]);
  return n;
}
function Ey() {
  return {
    app: null,
    config: {
      isNativeTag: U0,
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
let Ax = 0;
function Cx(e, t) {
  return function(r, o = null) {
    rt(r) || (r = Tn({}, r)), o != null && !Ct(o) && (o = null);
    const a = Ey(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Ax++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: sk,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...v) {
        return c.has(y) || (y && rt(y.install) ? (c.add(y), y.install(b, ...v)) : rt(y) && (c.add(y), y(b, ...v))), b;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), b;
      },
      component(y, v) {
        return v ? (a.components[y] = v, b) : a.components[y];
      },
      directive(y, v) {
        return v ? (a.directives[y] = v, b) : a.directives[y];
      },
      mount(y, v, S) {
        if (!d) {
          const N = b._ceVNode || Le(r, o);
          return N.appContext = a, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(N, y, S), d = !0, b._container = y, y.__vue_app__ = b, Jc(N.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && (ri(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, v) {
        return a.provides[y] = v, b;
      },
      runWithContext(y) {
        const v = pa;
        pa = b;
        try {
          return y();
        } finally {
          pa = v;
        }
      }
    };
    return b;
  };
}
let pa = null;
const Ix = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Hn(t)}Modifiers`] || e[`${Oo(t)}Modifiers`];
function Ox(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ot;
  let o = n;
  const a = t.startsWith("update:"), c = a && Ix(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => nn(y) ? y.trim() : y)), c.number && (o = n.map($d)));
  let u, d = r[u = Yu(t)] || // also try camelCase event handler (#2249)
  r[u = Yu(Hn(t))];
  !d && a && (d = r[u = Yu(Oo(t))]), d && ri(
    d,
    e,
    6,
    o
  );
  const b = r[u + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ri(
      b,
      e,
      6,
      o
    );
  }
}
const Ex = /* @__PURE__ */ new WeakMap();
function Fy(e, t, n = !1) {
  const r = n ? Ex : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!rt(e)) {
    const d = (b) => {
      const y = Fy(b, t, !0);
      y && (u = !0, Tn(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Ct(e) && r.set(e, null), null) : (Je(a) ? a.forEach((d) => c[d] = null) : Tn(c, a), Ct(e) && r.set(e, c), c);
}
function Xc(e, t) {
  return !e || !$c(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), St(e, t[0].toLowerCase() + t.slice(1)) || St(e, Oo(t)) || St(e, t));
}
function ng(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: c,
    attrs: u,
    emit: d,
    render: b,
    renderCache: y,
    props: v,
    data: S,
    setupState: N,
    ctx: k,
    inheritAttrs: P
  } = e, A = fc(e);
  let F, B;
  try {
    if (n.shapeFlag & 4) {
      const z = o || r, _ = z;
      F = qr(
        b.call(
          _,
          z,
          y,
          v,
          N,
          S,
          k
        )
      ), B = u;
    } else {
      const z = t;
      F = qr(
        z.length > 1 ? z(
          v,
          { attrs: u, slots: c, emit: d }
        ) : z(
          v,
          null
        )
      ), B = t.props ? u : Fx(u);
    }
  } catch (z) {
    Ps.length = 0, Wc(z, e, 1), F = Le(Wi);
  }
  let V = F;
  if (B && P !== !1) {
    const z = Object.keys(B), { shapeFlag: _ } = V;
    z.length && _ & 7 && (a && z.some(zc) && (B = Tx(
      B,
      a
    )), V = xa(V, B, !1, !0));
  }
  return n.dirs && (V = xa(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && Xd(V, n.transition), F = V, fc(A), F;
}
const Fx = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $c(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tx = (e, t) => {
  const n = {};
  for (const r in e)
    (!zc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Dx(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? rg(r, c, b) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        const S = y[v];
        if (Ty(c, r, S) && !Xc(b, S))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? rg(r, c, b) : !0 : !!c;
  return !1;
}
function rg(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Ty(t, e, a) && !Xc(n, a))
      return !0;
  }
  return !1;
}
function Ty(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Ct(r) && Ct(o) ? !zd(r, o) : r !== o;
}
function Lx({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Dy = {}, Ly = () => Object.create(Dy), Ry = (e) => Object.getPrototypeOf(e) === Dy;
function Rx(e, t, n, r = !1) {
  const o = {}, a = Ly();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vy(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ KS(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Vx(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ wt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const y = e.vnode.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        let S = y[v];
        if (Xc(e.emitsOptions, S))
          continue;
        const N = t[S];
        if (d)
          if (St(a, S))
            N !== a[S] && (a[S] = N, b = !0);
          else {
            const k = Hn(S);
            o[k] = Zf(
              d,
              u,
              k,
              N,
              e,
              !1
            );
          }
        else
          N !== a[S] && (a[S] = N, b = !0);
      }
    }
  } else {
    Vy(e, t, o, a) && (b = !0);
    let y;
    for (const v in u)
      (!t || // for camelCase
      !St(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Oo(v)) === v || !St(t, y))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[v] = Zf(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !St(t, v)) && (delete a[v], b = !0);
  }
  b && vi(e.attrs, "set", "");
}
function Vy(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ws(d))
        continue;
      const b = t[d];
      let y;
      o && St(o, y = Hn(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : Xc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ wt(n), b = u || Ot;
    for (let y = 0; y < a.length; y++) {
      const v = a[y];
      n[v] = Zf(
        o,
        d,
        v,
        b[v],
        e,
        !St(b, v)
      );
    }
  }
  return c;
}
function Zf(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = St(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && rt(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = Js(o);
          r = b[n] = d.call(
            null,
            t
          ), y();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    c[
      0
      /* shouldCast */
    ] && (a && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Oo(n)) && (r = !0));
  }
  return r;
}
const $x = /* @__PURE__ */ new WeakMap();
function $y(e, t, n = !1) {
  const r = n ? $x : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!rt(e)) {
    const y = (v) => {
      d = !0;
      const [S, N] = $y(v, t, !0);
      Tn(c, S), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return Ct(e) && r.set(e, ua), ua;
  if (Je(a))
    for (let y = 0; y < a.length; y++) {
      const v = Hn(a[y]);
      ig(v) && (c[v] = Ot);
    }
  else if (a)
    for (const y in a) {
      const v = Hn(y);
      if (ig(v)) {
        const S = a[y], N = c[v] = Je(S) || rt(S) ? { type: S } : Tn({}, S), k = N.type;
        let P = !1, A = !0;
        if (Je(k))
          for (let F = 0; F < k.length; ++F) {
            const B = k[F], V = rt(B) && B.name;
            if (V === "Boolean") {
              P = !0;
              break;
            } else V === "String" && (A = !1);
          }
        else
          P = rt(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = P, N[
          1
          /* shouldCastTrue */
        ] = A, (P || St(N, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Ct(e) && r.set(e, b), b;
}
function ig(e) {
  return e[0] !== "$" && !ws(e);
}
const qd = (e) => e === "_" || e === "_ctx" || e === "$stable", Jd = (e) => Je(e) ? e.map(qr) : [qr(e)], zx = (e, t, n) => {
  if (t._n)
    return t;
  const r = Sy((...o) => Jd(t(...o)), n);
  return r._c = !1, r;
}, zy = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (qd(o)) continue;
    const a = e[o];
    if (rt(a))
      t[o] = zx(o, a, r);
    else if (a != null) {
      const c = Jd(a);
      t[o] = () => c;
    }
  }
}, jy = (e, t) => {
  const n = Jd(t);
  e.slots.default = () => n;
}, Hy = (e, t, n) => {
  for (const r in t)
    (n || !qd(r)) && (e[r] = t[r]);
}, jx = (e, t, n) => {
  const r = e.slots = Ly();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Hy(r, t, n), n && Z0(r, "_", o, !0)) : zy(t, r);
  } else t && jy(e, t);
}, Hx = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Ot;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : Hy(o, t, n) : (a = !t.$stable, zy(t, o)), c = t;
  } else t && (jy(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !qd(u) && c[u] == null && delete o[u];
}, Yn = Ux;
function Gx(e) {
  return Kx(e);
}
function Kx(e, t) {
  const n = Gc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: y,
    parentNode: v,
    nextSibling: S,
    setScopeId: N = Qr,
    insertStaticContent: k
  } = e, P = (T, L, te, pe = null, ge = null, be = null, Ne = void 0, Ce = null, Me = !!L.dynamicChildren) => {
    if (T === L)
      return;
    T && !is(T, L) && (pe = Ae(T), Fe(T, ge, be, !0), T = null), L.patchFlag === -2 && (Me = !1, L.dynamicChildren = null);
    const { type: me, ref: Te, shapeFlag: Ee } = L;
    switch (me) {
      case qc:
        A(T, L, te, pe);
        break;
      case Wi:
        F(T, L, te, pe);
        break;
      case tf:
        T == null && B(L, te, pe, Ne);
        break;
      case Xe:
        xe(
          T,
          L,
          te,
          pe,
          ge,
          be,
          Ne,
          Ce,
          Me
        );
        break;
      default:
        Ee & 1 ? _(
          T,
          L,
          te,
          pe,
          ge,
          be,
          Ne,
          Ce,
          Me
        ) : Ee & 6 ? ne(
          T,
          L,
          te,
          pe,
          ge,
          be,
          Ne,
          Ce,
          Me
        ) : (Ee & 64 || Ee & 128) && me.process(
          T,
          L,
          te,
          pe,
          ge,
          be,
          Ne,
          Ce,
          Me,
          Oe
        );
    }
    Te != null && ge ? ks(Te, T && T.ref, be, L || T, !L) : Te == null && T && T.ref != null && ks(T.ref, null, be, T, !0);
  }, A = (T, L, te, pe) => {
    if (T == null)
      r(
        L.el = u(L.children),
        te,
        pe
      );
    else {
      const ge = L.el = T.el;
      L.children !== T.children && b(ge, L.children);
    }
  }, F = (T, L, te, pe) => {
    T == null ? r(
      L.el = d(L.children || ""),
      te,
      pe
    ) : L.el = T.el;
  }, B = (T, L, te, pe) => {
    [T.el, T.anchor] = k(
      T.children,
      L,
      te,
      pe,
      T.el,
      T.anchor
    );
  }, V = ({ el: T, anchor: L }, te, pe) => {
    let ge;
    for (; T && T !== L; )
      ge = S(T), r(T, te, pe), T = ge;
    r(L, te, pe);
  }, z = ({ el: T, anchor: L }) => {
    let te;
    for (; T && T !== L; )
      te = S(T), o(T), T = te;
    o(L);
  }, _ = (T, L, te, pe, ge, be, Ne, Ce, Me) => {
    if (L.type === "svg" ? Ne = "svg" : L.type === "math" && (Ne = "mathml"), T == null)
      R(
        L,
        te,
        pe,
        ge,
        be,
        Ne,
        Ce,
        Me
      );
    else {
      const me = T.el && T.el._isVueCE ? T.el : null;
      try {
        me && me._beginPatch(), Se(
          T,
          L,
          ge,
          be,
          Ne,
          Ce,
          Me
        );
      } finally {
        me && me._endPatch();
      }
    }
  }, R = (T, L, te, pe, ge, be, Ne, Ce) => {
    let Me, me;
    const { props: Te, shapeFlag: Ee, transition: ze, dirs: Ke } = T;
    if (Me = T.el = c(
      T.type,
      be,
      Te && Te.is,
      Te
    ), Ee & 8 ? y(Me, T.children) : Ee & 16 && ce(
      T.children,
      Me,
      null,
      pe,
      ge,
      ef(T, be),
      Ne,
      Ce
    ), Ke && lo(T, null, pe, "created"), W(Me, T, T.scopeId, Ne, pe), Te) {
      for (const st in Te)
        st !== "value" && !ws(st) && a(Me, st, null, Te[st], be, pe);
      "value" in Te && a(Me, "value", null, Te.value, be), (me = Te.onVnodeBeforeMount) && Kr(me, pe, T);
    }
    Ke && lo(T, null, pe, "beforeMount");
    const at = Wx(ge, ze);
    at && ze.beforeEnter(Me), r(Me, L, te), ((me = Te && Te.onVnodeMounted) || at || Ke) && Yn(() => {
      try {
        me && Kr(me, pe, T), at && ze.enter(Me), Ke && lo(T, null, pe, "mounted");
      } finally {
      }
    }, ge);
  }, W = (T, L, te, pe, ge) => {
    if (te && N(T, te), pe)
      for (let be = 0; be < pe.length; be++)
        N(T, pe[be]);
    if (ge) {
      let be = ge.subTree;
      if (L === be || By(be.type) && (be.ssContent === L || be.ssFallback === L)) {
        const Ne = ge.vnode;
        W(
          T,
          Ne,
          Ne.scopeId,
          Ne.slotScopeIds,
          ge.parent
        );
      }
    }
  }, ce = (T, L, te, pe, ge, be, Ne, Ce, Me = 0) => {
    for (let me = Me; me < T.length; me++) {
      const Te = T[me] = Ce ? yi(T[me]) : qr(T[me]);
      P(
        null,
        Te,
        L,
        te,
        pe,
        ge,
        be,
        Ne,
        Ce
      );
    }
  }, Se = (T, L, te, pe, ge, be, Ne) => {
    const Ce = L.el = T.el;
    let { patchFlag: Me, dynamicChildren: me, dirs: Te } = L;
    Me |= T.patchFlag & 16;
    const Ee = T.props || Ot, ze = L.props || Ot;
    let Ke;
    if (te && co(te, !1), (Ke = ze.onVnodeBeforeUpdate) && Kr(Ke, te, L, T), Te && lo(L, T, te, "beforeUpdate"), te && co(te, !0), (Ee.innerHTML && ze.innerHTML == null || Ee.textContent && ze.textContent == null) && y(Ce, ""), me ? E(
      T.dynamicChildren,
      me,
      Ce,
      te,
      pe,
      ef(L, ge),
      be
    ) : Ne || O(
      T,
      L,
      Ce,
      null,
      te,
      pe,
      ef(L, ge),
      be,
      !1
    ), Me > 0) {
      if (Me & 16)
        j(Ce, Ee, ze, te, ge);
      else if (Me & 2 && Ee.class !== ze.class && a(Ce, "class", null, ze.class, ge), Me & 4 && a(Ce, "style", Ee.style, ze.style, ge), Me & 8) {
        const at = L.dynamicProps;
        for (let st = 0; st < at.length; st++) {
          const ht = at[st], mt = Ee[ht], Rt = ze[ht];
          (Rt !== mt || ht === "value") && a(Ce, ht, mt, Rt, ge, te);
        }
      }
      Me & 1 && T.children !== L.children && y(Ce, L.children);
    } else !Ne && me == null && j(Ce, Ee, ze, te, ge);
    ((Ke = ze.onVnodeUpdated) || Te) && Yn(() => {
      Ke && Kr(Ke, te, L, T), Te && lo(L, T, te, "updated");
    }, pe);
  }, E = (T, L, te, pe, ge, be, Ne) => {
    for (let Ce = 0; Ce < L.length; Ce++) {
      const Me = T[Ce], me = L[Ce], Te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Me.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !is(Me, me) || // - In the case of a component, it could contain anything.
        Me.shapeFlag & 198) ? v(Me.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      P(
        Me,
        me,
        Te,
        null,
        pe,
        ge,
        be,
        Ne,
        !0
      );
    }
  }, j = (T, L, te, pe, ge) => {
    if (L !== te) {
      if (L !== Ot)
        for (const be in L)
          !ws(be) && !(be in te) && a(
            T,
            be,
            L[be],
            null,
            ge,
            pe
          );
      for (const be in te) {
        if (ws(be)) continue;
        const Ne = te[be], Ce = L[be];
        Ne !== Ce && be !== "value" && a(T, be, Ce, Ne, ge, pe);
      }
      "value" in te && a(T, "value", L.value, te.value, ge);
    }
  }, xe = (T, L, te, pe, ge, be, Ne, Ce, Me) => {
    const me = L.el = T ? T.el : u(""), Te = L.anchor = T ? T.anchor : u("");
    let { patchFlag: Ee, dynamicChildren: ze, slotScopeIds: Ke } = L;
    Ke && (Ce = Ce ? Ce.concat(Ke) : Ke), T == null ? (r(me, te, pe), r(Te, te, pe), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      te,
      Te,
      ge,
      be,
      Ne,
      Ce,
      Me
    )) : Ee > 0 && Ee & 64 && ze && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === ze.length ? (E(
      T.dynamicChildren,
      ze,
      te,
      ge,
      be,
      Ne,
      Ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || ge && L === ge.subTree) && Gy(
      T,
      L,
      !0
      /* shallow */
    )) : O(
      T,
      L,
      te,
      Te,
      ge,
      be,
      Ne,
      Ce,
      Me
    );
  }, ne = (T, L, te, pe, ge, be, Ne, Ce, Me) => {
    L.slotScopeIds = Ce, T == null ? L.shapeFlag & 512 ? ge.ctx.activate(
      L,
      te,
      pe,
      Ne,
      Me
    ) : J(
      L,
      te,
      pe,
      ge,
      be,
      Ne,
      Me
    ) : q(T, L, Me);
  }, J = (T, L, te, pe, ge, be, Ne) => {
    const Ce = T.component = Qx(
      T,
      pe,
      ge
    );
    if (Ny(T) && (Ce.ctx.renderer = Oe), tk(Ce, !1, Ne), Ce.asyncDep) {
      if (ge && ge.registerDep(Ce, U, Ne), !T.el) {
        const Me = Ce.subTree = Le(Wi);
        F(null, Me, L, te), T.placeholder = Me.el;
      }
    } else
      U(
        Ce,
        T,
        L,
        te,
        ge,
        be,
        Ne
      );
  }, q = (T, L, te) => {
    const pe = L.component = T.component;
    if (Dx(T, L, te))
      if (pe.asyncDep && !pe.asyncResolved) {
        H(pe, L, te);
        return;
      } else
        pe.next = L, pe.update();
    else
      L.el = T.el, pe.vnode = L;
  }, U = (T, L, te, pe, ge, be, Ne) => {
    const Ce = () => {
      if (T.isMounted) {
        let { next: Ee, bu: ze, u: Ke, parent: at, vnode: st } = T;
        {
          const Ln = Ky(T);
          if (Ln) {
            Ee && (Ee.el = st.el, H(T, Ee, Ne)), Ln.asyncDep.then(() => {
              Yn(() => {
                T.isUnmounted || me();
              }, ge);
            });
            return;
          }
        }
        let ht = Ee, mt;
        co(T, !1), Ee ? (Ee.el = st.el, H(T, Ee, Ne)) : Ee = st, ze && Hl(ze), (mt = Ee.props && Ee.props.onVnodeBeforeUpdate) && Kr(mt, at, Ee, st), co(T, !0);
        const Rt = ng(T), Dn = T.subTree;
        T.subTree = Rt, P(
          Dn,
          Rt,
          // parent may have changed if it's in a teleport
          v(Dn.el),
          // anchor may have changed if it's in a fragment
          Ae(Dn),
          T,
          ge,
          be
        ), Ee.el = Rt.el, ht === null && Lx(T, Rt.el), Ke && Yn(Ke, ge), (mt = Ee.props && Ee.props.onVnodeUpdated) && Yn(
          () => Kr(mt, at, Ee, st),
          ge
        );
      } else {
        let Ee;
        const { el: ze, props: Ke } = L, { bm: at, m: st, parent: ht, root: mt, type: Rt } = T, Dn = Ms(L);
        co(T, !1), at && Hl(at), !Dn && (Ee = Ke && Ke.onVnodeBeforeMount) && Kr(Ee, ht, L), co(T, !0);
        {
          mt.ce && mt.ce._hasShadowRoot() && mt.ce._injectChildStyle(
            Rt,
            T.parent ? T.parent.type : void 0
          );
          const Ln = T.subTree = ng(T);
          P(
            null,
            Ln,
            te,
            pe,
            T,
            ge,
            be
          ), L.el = Ln.el;
        }
        if (st && Yn(st, ge), !Dn && (Ee = Ke && Ke.onVnodeMounted)) {
          const Ln = L;
          Yn(
            () => Kr(Ee, ht, Ln),
            ge
          );
        }
        (L.shapeFlag & 256 || ht && Ms(ht.vnode) && ht.vnode.shapeFlag & 256) && T.a && Yn(T.a, ge), T.isMounted = !0, L = te = pe = null;
      }
    };
    T.scope.on();
    const Me = T.effect = new ny(Ce);
    T.scope.off();
    const me = T.update = Me.run.bind(Me), Te = T.job = Me.runIfDirty.bind(Me);
    Te.i = T, Te.id = T.uid, Me.scheduler = () => Yd(Te), co(T, !0), me();
  }, H = (T, L, te) => {
    L.component = T;
    const pe = T.vnode.props;
    T.vnode = L, T.next = null, Vx(T, L.props, pe, te), Hx(T, L.children, te), ki(), Ym(T), Mi();
  }, O = (T, L, te, pe, ge, be, Ne, Ce, Me = !1) => {
    const me = T && T.children, Te = T ? T.shapeFlag : 0, Ee = L.children, { patchFlag: ze, shapeFlag: Ke } = L;
    if (ze > 0) {
      if (ze & 128) {
        Q(
          me,
          Ee,
          te,
          pe,
          ge,
          be,
          Ne,
          Ce,
          Me
        );
        return;
      } else if (ze & 256) {
        ie(
          me,
          Ee,
          te,
          pe,
          ge,
          be,
          Ne,
          Ce,
          Me
        );
        return;
      }
    }
    Ke & 8 ? (Te & 16 && gt(me, ge, be), Ee !== me && y(te, Ee)) : Te & 16 ? Ke & 16 ? Q(
      me,
      Ee,
      te,
      pe,
      ge,
      be,
      Ne,
      Ce,
      Me
    ) : gt(me, ge, be, !0) : (Te & 8 && y(te, ""), Ke & 16 && ce(
      Ee,
      te,
      pe,
      ge,
      be,
      Ne,
      Ce,
      Me
    ));
  }, ie = (T, L, te, pe, ge, be, Ne, Ce, Me) => {
    T = T || ua, L = L || ua;
    const me = T.length, Te = L.length, Ee = Math.min(me, Te);
    let ze;
    for (ze = 0; ze < Ee; ze++) {
      const Ke = L[ze] = Me ? yi(L[ze]) : qr(L[ze]);
      P(
        T[ze],
        Ke,
        te,
        null,
        ge,
        be,
        Ne,
        Ce,
        Me
      );
    }
    me > Te ? gt(
      T,
      ge,
      be,
      !0,
      !1,
      Ee
    ) : ce(
      L,
      te,
      pe,
      ge,
      be,
      Ne,
      Ce,
      Me,
      Ee
    );
  }, Q = (T, L, te, pe, ge, be, Ne, Ce, Me) => {
    let me = 0;
    const Te = L.length;
    let Ee = T.length - 1, ze = Te - 1;
    for (; me <= Ee && me <= ze; ) {
      const Ke = T[me], at = L[me] = Me ? yi(L[me]) : qr(L[me]);
      if (is(Ke, at))
        P(
          Ke,
          at,
          te,
          null,
          ge,
          be,
          Ne,
          Ce,
          Me
        );
      else
        break;
      me++;
    }
    for (; me <= Ee && me <= ze; ) {
      const Ke = T[Ee], at = L[ze] = Me ? yi(L[ze]) : qr(L[ze]);
      if (is(Ke, at))
        P(
          Ke,
          at,
          te,
          null,
          ge,
          be,
          Ne,
          Ce,
          Me
        );
      else
        break;
      Ee--, ze--;
    }
    if (me > Ee) {
      if (me <= ze) {
        const Ke = ze + 1, at = Ke < Te ? L[Ke].el : pe;
        for (; me <= ze; )
          P(
            null,
            L[me] = Me ? yi(L[me]) : qr(L[me]),
            te,
            at,
            ge,
            be,
            Ne,
            Ce,
            Me
          ), me++;
      }
    } else if (me > ze)
      for (; me <= Ee; )
        Fe(T[me], ge, be, !0), me++;
    else {
      const Ke = me, at = me, st = /* @__PURE__ */ new Map();
      for (me = at; me <= ze; me++) {
        const Ge = L[me] = Me ? yi(L[me]) : qr(L[me]);
        Ge.key != null && st.set(Ge.key, me);
      }
      let ht, mt = 0;
      const Rt = ze - at + 1;
      let Dn = !1, Ln = 0;
      const ii = new Array(Rt);
      for (me = 0; me < Rt; me++) ii[me] = 0;
      for (me = Ke; me <= Ee; me++) {
        const Ge = T[me];
        if (mt >= Rt) {
          Fe(Ge, ge, be, !0);
          continue;
        }
        let rn;
        if (Ge.key != null)
          rn = st.get(Ge.key);
        else
          for (ht = at; ht <= ze; ht++)
            if (ii[ht - at] === 0 && is(Ge, L[ht])) {
              rn = ht;
              break;
            }
        rn === void 0 ? Fe(Ge, ge, be, !0) : (ii[rn - at] = me + 1, rn >= Ln ? Ln = rn : Dn = !0, P(
          Ge,
          L[rn],
          te,
          null,
          ge,
          be,
          Ne,
          Ce,
          Me
        ), mt++);
      }
      const h = Dn ? Bx(ii) : ua;
      for (ht = h.length - 1, me = Rt - 1; me >= 0; me--) {
        const Ge = at + me, rn = L[Ge], Qt = L[Ge + 1], Ci = Ge + 1 < Te ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Qt.el || Wy(Qt)
        ) : pe;
        ii[me] === 0 ? P(
          null,
          rn,
          te,
          Ci,
          ge,
          be,
          Ne,
          Ce,
          Me
        ) : Dn && (ht < 0 || me !== h[ht] ? ke(rn, te, Ci, 2) : ht--);
      }
    }
  }, ke = (T, L, te, pe, ge = null) => {
    const { el: be, type: Ne, transition: Ce, children: Me, shapeFlag: me } = T;
    if (me & 6) {
      ke(T.component.subTree, L, te, pe);
      return;
    }
    if (me & 128) {
      T.suspense.move(L, te, pe);
      return;
    }
    if (me & 64) {
      Ne.move(T, L, te, Oe);
      return;
    }
    if (Ne === Xe) {
      r(be, L, te);
      for (let Ee = 0; Ee < Me.length; Ee++)
        ke(Me[Ee], L, te, pe);
      r(T.anchor, L, te);
      return;
    }
    if (Ne === tf) {
      V(T, L, te);
      return;
    }
    if (pe !== 2 && me & 1 && Ce)
      if (pe === 0)
        Ce.beforeEnter(be), r(be, L, te), Yn(() => Ce.enter(be), ge);
      else {
        const { leave: Ee, delayLeave: ze, afterLeave: Ke } = Ce, at = () => {
          T.ctx.isUnmounted ? o(be) : r(be, L, te);
        }, st = () => {
          be._isLeaving && be[lx](
            !0
            /* cancelled */
          ), Ee(be, () => {
            at(), Ke && Ke();
          });
        };
        ze ? ze(be, at, st) : st();
      }
    else
      r(be, L, te);
  }, Fe = (T, L, te, pe = !1, ge = !1) => {
    const {
      type: be,
      props: Ne,
      ref: Ce,
      children: Me,
      dynamicChildren: me,
      shapeFlag: Te,
      patchFlag: Ee,
      dirs: ze,
      cacheIndex: Ke,
      memo: at
    } = T;
    if (Ee === -2 && (ge = !1), Ce != null && (ki(), ks(Ce, null, te, T, !0), Mi()), Ke != null && (L.renderCache[Ke] = void 0), Te & 256) {
      L.ctx.deactivate(T);
      return;
    }
    const st = Te & 1 && ze, ht = !Ms(T);
    let mt;
    if (ht && (mt = Ne && Ne.onVnodeBeforeUnmount) && Kr(mt, L, T), Te & 6)
      $(T.component, te, pe);
    else {
      if (Te & 128) {
        T.suspense.unmount(te, pe);
        return;
      }
      st && lo(T, null, L, "beforeUnmount"), Te & 64 ? T.type.remove(
        T,
        L,
        te,
        Oe,
        pe
      ) : me && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !me.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (be !== Xe || Ee > 0 && Ee & 64) ? gt(
        me,
        L,
        te,
        !1,
        !0
      ) : (be === Xe && Ee & 384 || !ge && Te & 16) && gt(Me, L, te), pe && pt(T);
    }
    const Rt = at != null && Ke == null;
    (ht && (mt = Ne && Ne.onVnodeUnmounted) || st || Rt) && Yn(() => {
      mt && Kr(mt, L, T), st && lo(T, null, L, "unmounted"), Rt && (T.el = null);
    }, te);
  }, pt = (T) => {
    const { type: L, el: te, anchor: pe, transition: ge } = T;
    if (L === Xe) {
      Ye(te, pe);
      return;
    }
    if (L === tf) {
      z(T);
      return;
    }
    const be = () => {
      o(te), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if (T.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: Ne, delayLeave: Ce } = ge, Me = () => Ne(te, be);
      Ce ? Ce(T.el, be, Me) : Me();
    } else
      be();
  }, Ye = (T, L) => {
    let te;
    for (; T !== L; )
      te = S(T), o(T), T = te;
    o(L);
  }, $ = (T, L, te) => {
    const { bum: pe, scope: ge, job: be, subTree: Ne, um: Ce, m: Me, a: me } = T;
    og(Me), og(me), pe && Hl(pe), ge.stop(), be && (be.flags |= 8, Fe(Ne, T, L, te)), Ce && Yn(Ce, L), Yn(() => {
      T.isUnmounted = !0;
    }, L);
  }, gt = (T, L, te, pe = !1, ge = !1, be = 0) => {
    for (let Ne = be; Ne < T.length; Ne++)
      Fe(T[Ne], L, te, pe, ge);
  }, Ae = (T) => {
    if (T.shapeFlag & 6)
      return Ae(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const L = S(T.anchor || T.el), te = L && L[ax];
    return te ? S(te) : L;
  };
  let _t = !1;
  const It = (T, L, te) => {
    let pe;
    T == null ? L._vnode && (Fe(L._vnode, null, null, !0), pe = L._vnode.component) : P(
      L._vnode || null,
      T,
      L,
      null,
      null,
      null,
      te
    ), L._vnode = T, _t || (_t = !0, Ym(pe), vy(), _t = !1);
  }, Oe = {
    p: P,
    um: Fe,
    m: ke,
    r: pt,
    mt: J,
    mc: ce,
    pc: O,
    pbc: E,
    n: Ae,
    o: e
  };
  return {
    render: It,
    hydrate: void 0,
    createApp: Cx(It)
  };
}
function ef({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function co({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wx(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gy(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Je(r) && Je(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = yi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && Gy(c, u)), u.type === qc && (u.patchFlag === -1 && (u = o[a] = yi(u)), u.el = c.el), u.type === Wi && !u.el && (u.el = c.el);
    }
}
function Bx(e) {
  const t = e.slice(), n = [0];
  let r, o, a, c, u;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (o = n[n.length - 1], e[o] < b) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        u = a + c >> 1, e[n[u]] < b ? a = u + 1 : c = u;
      b < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; )
    n[a] = c, c = t[c];
  return n;
}
function Ky(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ky(t);
}
function og(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Wy(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Wy(t.subTree) : null;
}
const By = (e) => e.__isSuspense;
function Ux(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : tx(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), qc = /* @__PURE__ */ Symbol.for("v-txt"), Wi = /* @__PURE__ */ Symbol.for("v-cmt"), tf = /* @__PURE__ */ Symbol.for("v-stc"), Ps = [];
let cr = null;
function ae(e = !1) {
  Ps.push(cr = e ? null : []);
}
function Yx() {
  Ps.pop(), cr = Ps[Ps.length - 1] || null;
}
let Ds = 1;
function ag(e, t = !1) {
  Ds += e, e < 0 && cr && t && (cr.hasOnce = !0);
}
function Uy(e) {
  return e.dynamicChildren = Ds > 0 ? cr || ua : null, Yx(), Ds > 0 && cr && cr.push(e), e;
}
function fe(e, t, n, r, o, a) {
  return Uy(
    X(
      e,
      t,
      n,
      r,
      o,
      a,
      !0
    )
  );
}
function wr(e, t, n, r, o) {
  return Uy(
    Le(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Yy(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function is(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Xy = ({ key: e }) => e ?? null, Kl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nn(e) || /* @__PURE__ */ Fn(e) || rt(e) ? { i: lr, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, o = null, a = e === Xe ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Xy(t),
    ref: t && Kl(t),
    scopeId: wy,
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
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: lr
  };
  return u ? (Zd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= nn(n) ? 8 : 16), Ds > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  cr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && cr.push(d), d;
}
const Le = Xx;
function Xx(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Cy) && (e = Wi), Yy(e)) {
    const u = xa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Zd(u, n), Ds > 0 && !a && cr && (u.shapeFlag & 6 ? cr[cr.indexOf(e)] = u : cr.push(u)), u.patchFlag = -2, u;
  }
  if (ak(e) && (e = e.__vccOpts), t) {
    t = qx(t);
    let { class: u, style: d } = t;
    u && !nn(u) && (t.class = ft(u)), Ct(d) && (/* @__PURE__ */ Ud(d) && !Je(d) && (d = Tn({}, d)), t.style = At(d));
  }
  const c = nn(e) ? 1 : By(e) ? 128 : sx(e) ? 64 : Ct(e) ? 4 : rt(e) ? 2 : 0;
  return X(
    e,
    t,
    n,
    r,
    o,
    c,
    a,
    !0
  );
}
function qx(e) {
  return e ? /* @__PURE__ */ Ud(e) || Ry(e) ? Tn({}, e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? bi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Xy(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Je(a) ? a.concat(Kl(t)) : [a, Kl(t)] : Kl(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Xe ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && xa(e.ssContent),
    ssFallback: e.ssFallback && xa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Xd(
    y,
    d.clone(y)
  ), y;
}
function ps(e = " ", t = 0) {
  return Le(qc, null, e, t);
}
function dt(e = "", t = !1) {
  return t ? (ae(), wr(Wi, null, e)) : Le(Wi, null, e);
}
function qr(e) {
  return e == null || typeof e == "boolean" ? Le(Wi) : Je(e) ? Le(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yy(e) ? yi(e) : Le(qc, null, String(e));
}
function yi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function Zd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Zd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ry(t) ? t._ctx = lr : o === 3 && lr && (lr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else rt(t) ? (t = { default: t, _ctx: lr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ps(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ft([t.class, r.class]));
      else if (o === "style")
        t.style = At([t.style, r.style]);
      else if ($c(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Je(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !zc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Kr(e, t, n, r = null) {
  ri(e, t, 7, [
    n,
    r
  ]);
}
const Jx = Ey();
let Zx = 0;
function Qx(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Jx, a = {
    uid: Zx++,
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
    scope: new kS(
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
    propsOptions: $y(r, o),
    emitsOptions: Fy(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ot,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ot,
    data: Ot,
    props: Ot,
    attrs: Ot,
    slots: Ot,
    refs: Ot,
    setupState: Ot,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Ox.bind(null, a), e.ce && e.ce(a), a;
}
let On = null;
const ek = () => On || lr;
let hc, Qf;
{
  const e = Gc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  hc = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => On = n
  ), Qf = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ls = n
  );
}
const Js = (e) => {
  const t = On;
  return hc(e), e.scope.on(), () => {
    e.scope.off(), hc(t);
  };
}, sg = () => {
  On && On.scope.off(), hc(null);
};
function qy(e) {
  return e.vnode.shapeFlag & 4;
}
let Ls = !1;
function tk(e, t = !1, n = !1) {
  t && Qf(t);
  const { props: r, children: o } = e.vnode, a = qy(e);
  Rx(e, r, a, t), jx(e, o, n || t);
  const c = a ? nk(e, t) : void 0;
  return t && Qf(!1), c;
}
function nk(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sx);
  const { setup: r } = n;
  if (r) {
    ki();
    const o = e.setupContext = r.length > 1 ? ik(e) : null, a = Js(e), c = Xs(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = X0(c);
    if (Mi(), a(), (u || e.sp) && !Ms(e) && My(e), u) {
      if (c.then(sg, sg), t)
        return c.then((d) => {
          lg(e, d);
        }).catch((d) => {
          Wc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      lg(e, c);
  } else
    Jy(e);
}
function lg(e, t, n) {
  rt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ct(t) && (e.setupState = gy(t)), Jy(e);
}
function Jy(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Qr);
  {
    const o = Js(e);
    ki();
    try {
      xx(e);
    } finally {
      Mi(), o();
    }
  }
}
const rk = {
  get(e, t) {
    return In(e, "get", ""), e[t];
  }
};
function ik(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, rk),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Jc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gy(WS(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ns)
        return Ns[n](e);
    },
    has(t, n) {
      return n in t || n in Ns;
    }
  })) : e.proxy;
}
function ok(e, t = !0) {
  return rt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ak(e) {
  return rt(e) && "__vccOpts" in e;
}
const yt = (e, t) => /* @__PURE__ */ qS(e, t, Ls), sk = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ed;
const cg = typeof window < "u" && window.trustedTypes;
if (cg)
  try {
    ed = /* @__PURE__ */ cg.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zy = ed ? (e) => ed.createHTML(e) : (e) => e, lk = "http://www.w3.org/2000/svg", ck = "http://www.w3.org/1998/Math/MathML", mi = typeof document < "u" ? document : null, ug = mi && /* @__PURE__ */ mi.createElement("template"), uk = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? mi.createElementNS(lk, e) : t === "mathml" ? mi.createElementNS(ck, e) : n ? mi.createElement(e, { is: n }) : mi.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => mi.createTextNode(e),
  createComment: (e) => mi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mi.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const c = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      ug.innerHTML = Zy(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ug.content;
      if (r === "svg" || r === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, fk = /* @__PURE__ */ Symbol("_vtc");
function dk(e, t, n) {
  const r = e[fk];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mc = /* @__PURE__ */ Symbol("_vod"), Qy = /* @__PURE__ */ Symbol("_vsh"), Io = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[mc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : os(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), os(e, !0), r.enter(e)) : r.leave(e, () => {
      os(e, !1);
    }) : os(e, t));
  },
  beforeUnmount(e, { value: t }) {
    os(e, t);
  }
};
function os(e, t) {
  e.style.display = t ? e[mc] : "none", e[Qy] = !t;
}
const pk = /* @__PURE__ */ Symbol(""), hk = /(?:^|;)\s*display\s*:/;
function mk(e, t, n) {
  const r = e.style, o = nn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (nn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Wl(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Wl(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Wl(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[pk];
      c && (n += ";" + c), r.cssText = n, a = hk.test(n);
    }
  } else t && e.removeAttribute("style");
  mc in e && (e[mc] = a ? r.display : "", e[Qy] && (r.display = "none"));
}
const fg = /\s*!important$/;
function Wl(e, t, n) {
  if (Je(n))
    n.forEach((r) => Wl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = gk(e, t);
    fg.test(n) ? e.setProperty(
      Oo(r),
      n.replace(fg, ""),
      "important"
    ) : e[r] = n;
  }
}
const dg = ["Webkit", "Moz", "ms"], nf = {};
function gk(e, t) {
  const n = nf[t];
  if (n)
    return n;
  let r = Hn(t);
  if (r !== "filter" && r in e)
    return nf[t] = r;
  r = Hc(r);
  for (let o = 0; o < dg.length; o++) {
    const a = dg[o] + r;
    if (a in e)
      return nf[t] = a;
  }
  return t;
}
const pg = "http://www.w3.org/1999/xlink";
function hg(e, t, n, r, o, a = SS(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pg, t.slice(6, t.length)) : e.setAttributeNS(pg, t, n) : n == null || a && !Q0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : ni(n) ? String(n) : n
  );
}
function mg(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zy(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Q0(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function ia(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function yk(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const gg = /* @__PURE__ */ Symbol("_vei");
function bk(e, t, n, r, o = null) {
  const a = e[gg] || (e[gg] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = vk(t);
    if (r) {
      const b = a[t] = Sk(
        r,
        o
      );
      ia(e, u, b, d);
    } else c && (yk(e, u, c, d), a[t] = void 0);
  }
}
const yg = /(?:Once|Passive|Capture)$/;
function vk(e) {
  let t;
  if (yg.test(e)) {
    t = {};
    let r;
    for (; r = e.match(yg); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Oo(e.slice(2)), t];
}
let rf = 0;
const _k = /* @__PURE__ */ Promise.resolve(), wk = () => rf || (_k.then(() => rf = 0), rf = Date.now());
function Sk(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ri(
      xk(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = wk(), n;
}
function xk(e, t) {
  if (Je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const bg = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kk = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? dk(e, r, c) : t === "style" ? mk(e, n, r) : $c(t) ? zc(t) || bk(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Mk(e, t, r, c)) ? (mg(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hg(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Nk(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nn(r))) ? mg(e, Hn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), hg(e, t, r, c));
};
function Mk(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bg(t) && rt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return bg(t) && nn(n) ? !1 : t in e;
}
function Nk(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Hn(t);
  return Array.isArray(n) ? n.some((o) => Hn(o) === r) : Object.keys(n).some((o) => Hn(o) === r);
}
const vg = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => Hl(t, n) : t;
};
function Pk(e) {
  e.target.composing = !0;
}
function _g(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const of = /* @__PURE__ */ Symbol("_assign");
function wg(e, t, n) {
  return t && (e = e.trim()), n && (e = $d(e)), e;
}
const Sg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[of] = vg(o);
    const a = r || o.props && o.props.type === "number";
    ia(e, t ? "change" : "input", (c) => {
      c.target.composing || e[of](wg(e.value, n, a));
    }), (n || a) && ia(e, "change", () => {
      e.value = wg(e.value, n, a);
    }), t || (ia(e, "compositionstart", Pk), ia(e, "compositionend", _g), ia(e, "change", _g));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[of] = vg(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? $d(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, Ak = ["ctrl", "shift", "alt", "meta"], Ck = {
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
  exact: (e, t) => Ak.some((n) => e[`${n}Key`] && !t.includes(n))
}, Dt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = Ck[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, Ik = /* @__PURE__ */ Tn({ patchProp: kk }, uk);
let xg;
function Ok() {
  return xg || (xg = Gx(Ik));
}
const Qd = ((...e) => {
  const t = Ok().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Fk(r);
    if (!o) return;
    const a = t._component;
    !rt(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, Ek(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function Ek(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Fk(e) {
  return nn(e) ? document.querySelector(e) : e;
}
const Tk = "PanoramaSuite.Debug.Diagnostics", Dk = "PanoramaSuite.Debug.ExportDiagnostics", af = "pano_suite.diagnostics.v1", kg = "pano_suite.diagnostics.previous.v1", Lk = 300, Rk = 2e5, Vk = 100, $k = 20, zk = 1e3, jk = 2, Nl = 1024 * 1024;
function zi(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function Hk() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Gk() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Hk,
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
      const n = new t((o) => e(o.getEntries()));
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
function Kk(e = {}) {
  const t = { ...Gk(), ...e };
  let n = !1, r = !1, o = null, a = null, c = 0, u = null, d = 0, b = 0;
  const y = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), S = { created: 0, released: 0, collected: 0 }, N = { created: 0, collected: 0 }, k = t.FinalizationRegistry ? new t.FinalizationRegistry((Oe) => {
    y.delete(Oe), S.collected += 1;
  }) : null, P = t.FinalizationRegistry ? new t.FinalizationRegistry((Oe) => {
    v.delete(Oe), N.collected += 1;
  }) : null, A = /* @__PURE__ */ new Set(), F = { created: 0, lost: 0, restored: 0, disposed: 0 }, B = [], V = /* @__PURE__ */ new Map();
  let z = { count: 0, maxMs: 0 }, _ = /* @__PURE__ */ new Map(), R = { count: 0, maxMs: 0 };
  const W = [];
  function ce(Oe, Ve, T = void 0) {
    B.push(T === void 0 ? { t: t.clock(), type: Oe, label: Ve } : { t: t.clock(), type: Oe, label: Ve, detail: T }), B.length > Vk && B.shift();
  }
  function Se(Oe, Ve, T, L, te) {
    if (!n || !L || !t.WeakRef) return L;
    const pe = { ref: new t.WeakRef(L), label: te };
    return Oe.add(pe), Ve == null || Ve.register(L, pe), T.created += 1, L;
  }
  function E(Oe, Ve = "") {
    return Se(y, k, S, Oe, Ve);
  }
  function j(Oe, Ve = "") {
    return Se(v, P, N, Oe, Ve);
  }
  function xe({ label: Oe = "", width: Ve, height: T, offscreen: L = !1 } = {}) {
    const te = globalThis.OffscreenCanvas;
    let pe;
    return L && typeof te < "u" ? pe = new te(Ve, T) : (pe = t.document().createElement("canvas"), Ve !== void 0 && T !== void 0 && (pe.width = Ve, pe.height = T)), E(pe, Oe);
  }
  function ne(Oe) {
    Oe.width = 0, Oe.height = 0, n && (S.released += 1);
  }
  function J(Oe = t.document(), Ve = "") {
    var T;
    return j(((T = Oe == null ? void 0 : Oe.createElement) == null ? void 0 : T.call(Oe, "video")) || null, Ve);
  }
  function q(Oe, Ve) {
    if (!n || !Oe) return () => {
    };
    const T = { label: Ve, lost: !1, disposed: !1 };
    A.add(T), F.created += 1, ce("webgl-created", Ve);
    const L = () => {
      T.disposed || (T.lost = !0, F.lost += 1, ce("webglcontextlost", Ve));
    }, te = () => {
      T.disposed || (T.lost = !1, F.restored += 1, ce("webglcontextrestored", Ve));
    };
    return Oe.addEventListener("webglcontextlost", L), Oe.addEventListener("webglcontextrestored", te), () => {
      T.disposed || (T.disposed = !0, A.delete(T), F.disposed += 1, ce("webgl-disposed", Ve));
    };
  }
  function U(Oe, Ve) {
    return V.set(Oe, Ve), () => {
      V.get(Oe) === Ve && V.delete(Oe);
    };
  }
  function H() {
    return n ? t.now() : -1;
  }
  function O(Oe) {
    if (Oe < 0 || !n) return;
    const Ve = t.now() - Oe;
    z.count += 1, z.maxMs = Math.max(z.maxMs, Ve);
  }
  function ie(Oe, Ve) {
    if (Ve < 0 || !n) return;
    const T = t.now() - Ve, L = _.get(Oe) ?? { count: 0, maxMs: 0 };
    L.count += 1, L.maxMs = Math.max(L.maxMs, T), _.set(Oe, L);
  }
  function Q() {
    let Oe = 0, Ve = 0, T = 0, L = [0, 0];
    const te = {};
    for (const pe of y) {
      const ge = pe.ref.deref();
      if (!ge) continue;
      Oe += 1;
      const be = ge.width * ge.height;
      be > 0 && (Ve += 1), T += be, be > L[0] * L[1] && (L = [ge.width, ge.height]);
      const Ne = te[pe.label] ?? (te[pe.label] = [0, 0]);
      Ne[0] += 1, Ne[1] += be;
    }
    return { ...S, alive: Oe, sized: Ve, pixels: T, mb: zi(T * 4 / Nl, 1), largest: L, byLabel: te };
  }
  function ke() {
    const Oe = [];
    let Ve = 0, T = 0;
    for (const L of v) {
      const te = L.ref.deref();
      if (!te) continue;
      Ve += 1;
      const pe = !te.paused && !te.ended;
      pe && (T += 1), Oe.length < $k && Oe.push({
        label: L.label,
        playing: pe,
        src: !!(te.currentSrc || te.src),
        size: [te.videoWidth || 0, te.videoHeight || 0],
        ready: te.readyState ?? 0,
        connected: !!te.isConnected
      });
    }
    return { ...N, alive: Ve, playing: T, list: Oe };
  }
  function Fe() {
    const Oe = t.now(), Ve = t.memory(), T = {
      t: t.clock(),
      heap: Ve ? { used: zi(Ve.usedJSHeapSize / Nl, 1), total: zi(Ve.totalJSHeapSize / Nl, 1), limit: zi(Ve.jsHeapSizeLimit / Nl, 1) } : null,
      canvas: Q(),
      webgl: { ...F, alive: [...A].filter((L) => !L.lost).length },
      video: ke(),
      frame: { count: z.count, maxMs: zi(z.maxMs), longTasks: R.count, longTaskMaxMs: zi(R.maxMs) },
      renders: Object.fromEntries([..._].map(([L, te]) => [L, { count: te.count, maxMs: zi(te.maxMs) }])),
      sources: Object.fromEntries([...V].map(([L, te]) => [L, te()])),
      costMs: zi(b, 3)
    };
    return z = { count: 0, maxMs: 0 }, _ = /* @__PURE__ */ new Map(), R = { count: 0, maxMs: 0 }, W.push({ record: T, text: JSON.stringify(T) }), W.length > Lk && W.shift(), d += 1, d % jk === 0 && Ye(), b = t.now() - Oe, T;
  }
  function pt(Oe = Rk) {
    const Ve = JSON.stringify({ ...a, events: B }).slice(0, -1);
    let T = Oe - Ve.length - 14, L = W.length;
    for (; L > 0 && T - W[L - 1].text.length - 1 >= 0; )
      L -= 1, T -= W[L].text.length + 1;
    return `${Ve},"records":[${W.slice(L).map((te) => te.text).join(",")}]}`;
  }
  function Ye() {
    if (!a) return;
    const Oe = t.storage();
    if (Oe) {
      a.savedAt = t.clock();
      try {
        Oe.setItem(af, pt());
      } catch {
      }
    }
  }
  function $() {
    a.closed = !0, a.closedAt = t.clock(), a.closedBy = "unload", Ye();
  }
  function gt() {
    var te;
    if (r) return o;
    r = !0;
    const Oe = t.storage();
    if (!Oe) return null;
    let Ve = null;
    try {
      if (Ve = Oe.getItem(af), Ve === null) {
        const pe = Oe.getItem(kg);
        return o = pe === null ? null : JSON.parse(pe), o;
      }
      Oe.setItem(kg, Ve), Oe.removeItem(af), o = JSON.parse(Ve);
    } catch {
      return o;
    }
    const T = Array.isArray(o == null ? void 0 : o.records) ? o.records : [], L = T.slice(-5);
    return o != null && o.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${o.closedBy || "unload"}); ${T.length} records kept. Its last records:`,
      JSON.stringify(L)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((o == null ? void 0 : o.startedAt) || 0).toISOString()}, last saved ${new Date((o == null ? void 0 : o.savedAt) || ((te = T.at(-1)) == null ? void 0 : te.t) || 0).toISOString()}; ${T.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(L)
    ), o;
  }
  function Ae(Oe) {
    const Ve = Oe === !0;
    if (gt(), Ve !== n) {
      if (n = Ve, n) {
        a = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, d = 0, W.length = 0, u = t.observeLongTasks((T) => {
          for (const L of T)
            R.count += 1, R.maxMs = Math.max(R.maxMs, L.duration);
        }), t.addUnload($), c = t.setInterval(Fe, zk), Ye();
        return;
      }
      t.clearInterval(c), c = 0, u == null || u(), u = null, t.removeUnload($), a.closed = !0, a.closedAt = t.clock(), a.closedBy = "disabled", Ye();
    }
  }
  function _t() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: a ? { ...a, events: [...B], records: W.map((Oe) => Oe.record) } : null,
      previous: o
    };
  }
  function It() {
    const Oe = t.document(), Ve = new Blob([JSON.stringify(_t(), null, 1)], { type: "application/json" }), T = URL.createObjectURL(Ve), L = Oe.createElement("a");
    L.href = T, L.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, L.click(), setTimeout(() => URL.revokeObjectURL(T), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: xe,
    releaseCanvas: ne,
    trackCanvas: E,
    createVideo: J,
    trackVideo: j,
    watchContext: q,
    addSource: U,
    frameStart: H,
    frameEnd: O,
    renderEnd: ie,
    sample: Fe,
    serialize: pt,
    recoverPrevious: gt,
    setEnabled: Ae,
    exportData: _t,
    download: It
  };
}
const Zn = Kk(), Sn = Zn.createCanvas, Mg = Zn.releaseCanvas, sf = Zn.trackCanvas, Zc = Zn.createVideo, Ng = Zn.trackVideo, Wk = Zn.addSource, Bk = Zn.frameStart, Uk = Zn.frameEnd;
function eb(e, t) {
  const n = Zn.watchContext(e.canvas, t), r = Zn.addSource(`three.${t}`, () => e.stats()), o = (a) => (c) => {
    const u = Zn.frameStart(), d = a(c);
    return Zn.renderEnd(t, u), d;
  };
  return {
    ...e,
    render: o(e.render),
    renderUnwrap: o(e.renderUnwrap),
    dispose() {
      r(), n(), e.dispose();
    }
  };
}
const Yk = {
  id: Tk,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Zn.setEnabled(e === !0)
}, Pg = {
  id: Dk,
  label: "Export Panorama Suite diagnostics",
  function: () => Zn.download()
};
function oa(e, t) {
  const n = Sn({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Xk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ag(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, u = o, d = -1, b = -1;
  for (let v = 0; v < o; v += 1)
    for (let S = 0; S < r; S += 1)
      a[(v * r + S) * 4 + 3] <= t || (S < c && (c = S), v < u && (u = v), S > d && (d = S), v > b && (b = v));
  return d < c || b < u ? null : {
    minX: c,
    minY: u,
    maxX: d,
    maxY: b,
    width: d - c + 1,
    height: b - u + 1,
    aspect: Number(((d - c + 1) / Math.max(1, b - u + 1)).toFixed(4))
  };
}
function ep(e, t) {
  return Sn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Gi(e, t, n) {
  if (!e) return oa(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Xt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let lf = null, cf = null, Cg = null, Ig = null, Yt = null, as = null;
function qk() {
  if (cf) return cf;
  const e = 6, t = 17, n = Sn({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), cf = n, n;
}
function uf(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  lf = Gi(lf, n, r);
  const o = lf;
  Xt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Ig !== o.ctx && (Cg = o.ctx.createPattern(qk(), "repeat"), Ig = o.ctx), o.ctx.fillStyle = Cg, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function Jk(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Zk(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Qk(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function eM(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const zt = /* @__PURE__ */ new Map(), tp = 128;
function tM(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (zt.has(d)) {
    const B = zt.get(d);
    return zt.delete(d), zt.set(d, B), B;
  }
  zt.size >= tp && zt.delete(zt.keys().next().value);
  const b = c * 2 + 2, y = c + 1, v = ep(b, b), S = v.getContext("2d"), N = u * c, k = c + 1, P = `rgba(${n},${r},${o},${a})`, A = `rgba(${n},${r},${o},0)`, F = S.createRadialGradient(y, y, N, y, y, k);
  return F.addColorStop(0, P), F.addColorStop(1, A), S.fillStyle = F, S.fillRect(0, 0, b, b), zt.set(d, v), v;
}
function nM(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: y } = r, v = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), P = Math.max(0, Math.min(1, c ?? 0)), A = `chisel:${v}:${S}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${P.toFixed(2)}`;
  if (zt.has(A)) {
    const ce = zt.get(A);
    return zt.delete(A), zt.set(A, ce), ce;
  }
  zt.size >= tp && zt.delete(zt.keys().next().value);
  const F = ep(v, S), B = F.getContext("2d"), V = B.createImageData(v, S), z = V.data, _ = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), W = 1 + N;
  for (let ce = 0; ce < S; ce++)
    for (let Se = 0; Se < v; Se++) {
      const E = Se + 0.5 - e, j = ce + 0.5 - t, xe = Math.max(Math.abs(E) - _, 0), J = Math.hypot(xe, j) / t;
      if (J >= 1) continue;
      const q = J <= R ? 1 : Math.max(0, (1 - J) / Math.max(1e-4, 1 - R)), U = 1 - J, H = 1 + N * (1 - U) * (1 - U), O = 1 - k * U * U, ie = H * O / W;
      let Q = 1;
      if (P > 0) {
        const pt = Math.floor((j + t) / 1.5), Ye = Math.floor((E + e) / 8), $ = Mo(ha(pt * 41 + 500, Ye * 19 + 300));
        Q = 1 - P * 0.42 * $;
      }
      const ke = Math.round(255 * Math.min(1, y * q * ie * Q));
      if (ke <= 0) continue;
      const Fe = (ce * v + Se) * 4;
      z[Fe] = u, z[Fe + 1] = d, z[Fe + 2] = b, z[Fe + 3] = ke;
    }
  return B.putImageData(V, 0, 0), zt.set(A, F), F;
}
function ha(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Mo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function rM(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), v = Math.hypot(y, d) / r;
  if (v >= 1) return 0;
  const S = Mo(ha(e * 17 + 3, t * 13 + 7)), N = v + a * 0.22 * (S - 0.5);
  if (N >= 1) return 0;
  const k = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), P = iM(e, t, u, d, n, r), A = a * 0.55;
  if (P < A) return 0;
  const B = 0.45 + 0.55 * ((P - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, c * k * B));
}
function iM(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = Mo(ha(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), v = Mo(ha(b * 23 + 800, y * 29 + 500)), S = Mo(ha(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + S * 0.15;
}
function oM(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), S = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (zt.has(S)) {
    const B = zt.get(S);
    return zt.delete(S), zt.set(S, B), B;
  }
  zt.size >= tp && zt.delete(zt.keys().next().value);
  const N = ep(b, y), k = N.getContext("2d"), P = k.createImageData(b, y), A = P.data, F = Math.max(0, Math.min(1, n));
  for (let B = 0; B < y; B++)
    for (let V = 0; V < b; V++) {
      const z = rM(V, B, e, t, F, v, d);
      if (z <= 0) continue;
      const _ = (B * b + V) * 4;
      A[_] = a, A[_ + 1] = c, A[_ + 2] = u, A[_ + 3] = z;
    }
  return k.putImageData(P, 0, 0), zt.set(S, N), N;
}
function tb(e, t, n) {
  var P, A;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = Qk(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = aM(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((P = t == null ? void 0 : t.angle) == null ? void 0 : P.value) ?? 0), b = eM(t, o), y = String(((A = t == null ? void 0 : t.targetSpace) == null ? void 0 : A.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", S = t == null ? void 0 : t.scatter, N = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const F = o * u, B = o, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), z = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), _ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = nM(F, B, a, c, V, z, _);
  } else if (r === "crayon") {
    const F = o * u, B = o, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = oM(F, B, a, c, V);
  } else
    k = tM(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: v };
}
function aM(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), a = Math.max(0, Math.min(1, Number(r.a ?? 1))) * o;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a
  };
}
function sM(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Og(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function np(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, v = b * e.radiusPx * o, S = ha(t, n);
    for (let N = 0; N < y; N++) {
      const k = Mo(S + N * 2) * Math.PI * 2, P = Math.sqrt(Mo(S + N * 2 + 1)) * v, A = t + Math.cos(k) * P, F = n + Math.sin(k) * P, B = Math.max(0.5, e.radiusPx * o * 0.48), V = (0.5 - F / Math.max(1, e.desc.height)) * Math.PI, z = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, _ = B * e.aspect * z;
      Og(e, A, F, B, _);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  Og(e, t, n, a, d);
}
function Eg(e, t, n) {
  const r = Zk(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = tb(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let S = 0; S < r.length; S++) {
    let N = Number(r[S].u || 0) * o;
    const k = Number(r[S].v || 0) * a;
    S > 0 && Math.abs(N - u[S - 1].x) > o * 0.5 && (N += N < u[S - 1].x ? o : -o), u.push({ x: N, y: k });
  }
  if (np(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], v = 0;
  for (let S = 1; S < u.length; S++) {
    const N = u[S], k = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    S === 1 ? v = Rs(c, y.x, y.y, k.x, k.y, v) : v = gc(c, d, y, k, N, v), d = b, b = N, y = k;
  }
  u.length === 2 ? Rs(c, y.x, y.y, b.x, b.y, v) : gc(c, d, y, b, b, v), e.restore();
}
function Bl(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = sM(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const N = Jk(r[S]);
    let k = Number(N.x || 0) * o;
    S > 0 && Math.abs(k - u[S - 1].x) > o * 0.5 && (k += k < u[S - 1].x ? o : -o), u.push({ x: k, y: Number(N.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function y(S) {
    e.beginPath(), e.moveTo(u[0].x + S, u[0].y);
    for (let N = 1; N < u.length; N++) e.lineTo(u[N].x + S, u[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, y(0), d < 0 && y(o), b > o && y(-o), e.restore();
}
function Pl(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Bl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Eg(e, t, n) : (as = Gi(as, n.width, n.height), Xt(as), Eg(as.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(as.canvas, 0, 0), e.restore());
}
function uo(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Rs(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    np(e, t + c * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function gc(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, v = u, S = v + d, N = S + b, k = S - v, P = 16;
  let A = a, F = n.x, B = n.y;
  for (let V = 1; V <= P; V++) {
    const z = v + k * V / P, _ = ((v - z) * t.x + (z - y) * n.x) / (v - y), R = ((v - z) * t.y + (z - y) * n.y) / (v - y), W = ((S - z) * n.x + (z - v) * r.x) / (S - v), ce = ((S - z) * n.y + (z - v) * r.y) / (S - v), Se = ((N - z) * r.x + (z - S) * o.x) / (N - S), E = ((N - z) * r.y + (z - S) * o.y) / (N - S), j = ((S - z) * _ + (z - y) * W) / (S - y), xe = ((S - z) * R + (z - y) * ce) / (S - y), ne = ((N - z) * W + (z - v) * Se) / (N - v), J = ((N - z) * ce + (z - v) * E) / (N - v), q = ((S - z) * j + (z - v) * ne) / (S - v), U = ((S - z) * xe + (z - v) * J) / (S - v);
    A = Rs(e, F, B, q, U, A), F = q, B = U;
  }
  return A;
}
function lM(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const N = tb(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), P = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", F = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", np(N, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: N.stampTex,
      radiusPx: N.radiusPx,
      spacingPx: N.spacingPx,
      aspect: N.aspect,
      angle: N.angle,
      stampKind: N.stampKind,
      scatter: N.scatter,
      latitudeCorrection: N.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: P,
      distSinceStamp: 0,
      isEraser: A,
      layerKind: F,
      pointCount: 1
    }, Cn(e);
    return;
  }
  const y = (d.prev.x + b) * 0.5, v = (d.prev.y + u) * 0.5;
  o.globalCompositeOperation = "source-over";
  const S = {
    ctx: o,
    stampTex: d.stampTex,
    radiusPx: d.radiusPx,
    spacingPx: d.spacingPx,
    desc: a,
    aspect: d.aspect,
    angle: d.angle,
    stampKind: d.stampKind,
    scatter: d.scatter,
    latitudeCorrection: d.latitudeCorrection
  };
  d.pointCount === 1 ? d.distSinceStamp = Rs(S, d.lastMidX, d.lastMidY, y, v, d.distSinceStamp) : d.distSinceStamp = gc(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = v, d.pointCount++, Cn(e);
}
function td(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = oa(t, n), c = {
    descriptor: r,
    committedMask: oa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: oa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, d = oa(t, n);
  let b = null, y = "", v = null;
  const S = /* @__PURE__ */ new Map();
  let N = null;
  function k(ne) {
    return {
      actionGroupId: ne,
      descriptor: r,
      committedPaint: oa(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function P(ne) {
    let J = o.get(ne);
    return J || (J = k(ne), o.set(ne, J)), J;
  }
  function A(ne) {
    return y === "mask" ? c : b ? P(b) : u;
  }
  function F(ne) {
    var ie;
    const J = !v || v.length !== ne.length || ne.some((Q, ke) => Q !== v[ke]), q = y === "paint" && ((ie = b ? o.get(b) : u) == null ? void 0 : ie.activeStroke) || null;
    let U = c.displayDirty || u.displayDirty || J;
    for (const Q of ne) {
      const ke = o.get(Q);
      if (ke != null && ke.displayDirty) {
        U = !0;
        break;
      }
    }
    if (q && (U = !0), !U) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const Q of ne) {
      const ke = o.get(Q);
      ke && (ke.displayDirty = !1);
    }
    v = [...ne];
    const H = d.ctx;
    Xt(d);
    const O = !!(q != null && q.isEraser);
    for (const Q of ne) {
      const ke = o.get(Q);
      if (!ke) continue;
      const pt = b === ke.actionGroupId && y === "paint" ? ke.activeStroke : null;
      if (O)
        Yt = Gi(Yt, t, n), Xt(Yt), Yt.ctx.drawImage(ke.committedPaint.canvas, 0, 0), uo(Yt.ctx, a.canvas), H.drawImage(Yt.canvas, 0, 0);
      else if (H.drawImage(ke.committedPaint.canvas, 0, 0), pt) {
        const Ye = ke.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, pt.strokeOpacity ?? 1));
        H.save(), H.globalAlpha = Ye, H.drawImage(a.canvas, 0, 0), H.restore();
      }
    }
  }
  function B(ne) {
    var q, U, H, O, ie;
    for (const Q of o.values())
      Xt(Q.committedPaint), Xt(Q.currentStroke), Q.activeStroke = null, Cn(Q);
    Xt(c.committedMask), Xt(c.currentStroke), c.activeStroke = null, c.painted = !1, S.clear(), Cn(c), Cn(u), v = null;
    const J = [
      ...Array.isArray((U = (q = ne == null ? void 0 : ne.painting) == null ? void 0 : q.paint) == null ? void 0 : U.strokes) ? ne.painting.paint.strokes : [],
      ...Array.isArray((O = (H = ne == null ? void 0 : ne.painting) == null ? void 0 : H.mask) == null ? void 0 : O.strokes) ? ne.painting.mask.strokes : []
    ];
    for (const Q of J) {
      if (((ie = Q == null ? void 0 : Q.targetSpace) == null ? void 0 : ie.kind) !== "ERP_GLOBAL") continue;
      const ke = String((Q == null ? void 0 : Q.layerKind) || "paint"), pt = String((Q == null ? void 0 : Q.toolKind) || "pen") === "eraser";
      if (ke === "mask") {
        const Ye = c.descriptor;
        pt ? (Yt = Gi(Yt, Ye.width, Ye.height), Xt(Yt), Pl(Yt.ctx, Q, Ye), uo(c.committedMask.ctx, Yt.canvas)) : (Pl(c.committedMask.ctx, Q, Ye), c.painted = !0);
        continue;
      }
      if (pt) {
        Yt = Gi(Yt, r.width, r.height), Xt(Yt), Pl(Yt.ctx, Q, r);
        for (const Ye of o.values())
          uo(Ye.committedPaint.ctx, Yt.canvas), Cn(Ye);
      } else {
        const Ye = String((Q == null ? void 0 : Q.actionGroupId) || "__default__"), $ = P(Ye), gt = $.descriptor;
        Pl($.committedPaint.ctx, Q, gt), Cn($);
      }
    }
    F([...o.keys()]);
  }
  function V(ne, J) {
    y = String((ne == null ? void 0 : ne.layerKind) || "");
    const q = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, Xt(c.currentStroke), c.activeStroke = null, Cn(c);
    else {
      const U = q ? u : P(String((ne == null ? void 0 : ne.actionGroupId) || "__default__"));
      b = q ? "" : String((ne == null ? void 0 : ne.actionGroupId) || "__default__"), Xt(U.currentStroke), U.activeStroke = null, Cn(U);
    }
  }
  function z(ne, J) {
    var ke;
    const q = String((ne == null ? void 0 : ne.layerKind) || "paint"), U = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", H = q === "mask" ? c : U ? u : P(String((ne == null ? void 0 : ne.actionGroupId) || b || "__default__")), O = H.activeStroke, ie = H.descriptor;
    if (O && O.pointCount > 1) {
      const Fe = H.currentStroke.ctx;
      Fe.globalCompositeOperation = "source-over";
      const pt = {
        ctx: Fe,
        stampTex: O.stampTex,
        radiusPx: O.radiusPx,
        spacingPx: O.spacingPx,
        desc: ie,
        aspect: O.aspect,
        angle: O.angle,
        stampKind: O.stampKind,
        scatter: O.scatter,
        latitudeCorrection: O.latitudeCorrection
      };
      O.pointCount === 2 ? Rs(pt, O.lastMidX, O.lastMidY, O.prev.x, O.prev.y, O.distSinceStamp) : gc(pt, O.pprev, { x: O.lastMidX, y: O.lastMidY }, O.prev, O.prev, O.distSinceStamp);
    }
    H.lassoPreviewActive && (Xt(H.currentStroke), Bl(H.currentStroke.ctx, ne, ie), H.lassoPreviewActive = !1);
    const Q = q === "mask" ? c.committedMask : H.committedPaint;
    if (U && q === "paint")
      for (const Fe of o.values())
        uo(Fe.committedPaint.ctx, H.currentStroke.canvas), Cn(Fe);
    else if (U)
      uo(Q.ctx, H.currentStroke.canvas);
    else {
      q === "mask" && (c.painted = !0);
      const Fe = Math.max(0, Math.min(1, (O == null ? void 0 : O.strokeOpacity) ?? 1));
      Q.ctx.save(), Q.ctx.globalAlpha = Fe, Q.ctx.drawImage(H.currentStroke.canvas, 0, 0), Q.ctx.restore();
    }
    Xk() && (String((ne == null ? void 0 : ne.toolKind) || ""), String((ie == null ? void 0 : ie.kind) || ""), Number((ie == null ? void 0 : ie.width) || 0), Number((ie == null ? void 0 : ie.height) || 0), String(((ke = ne == null ? void 0 : ne.targetSpace) == null ? void 0 : ke.viewMode) || ""), Number((ne == null ? void 0 : ne.aspect) ?? 1), Ag(H.currentStroke.canvas), Ag(Q.canvas), void 0), Xt(H.currentStroke), H.activeStroke = null, Cn(H), S.clear(), b = null, y = "", F([...o.keys()]);
  }
  function _(ne) {
    if (y === "mask")
      Xt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, Cn(c);
    else if (y === "paint" && !b)
      Xt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, Cn(u);
    else if (b) {
      const J = o.get(b);
      J && (Xt(J.currentStroke), J.activeStroke = null, J.lassoPreviewActive = !1, Cn(J));
    }
    S.clear(), b = null, y = "", F([...o.keys()]);
  }
  function R(ne, J) {
    var U;
    if (y = String((ne == null ? void 0 : ne.layerKind) || ""), String(((U = ne == null ? void 0 : ne.geometry) == null ? void 0 : U.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Xt(c.currentStroke), Bl(c.currentStroke.ctx, ne, c.descriptor), c.lassoPreviewActive = !0, Cn(c);
      else {
        const H = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", O = H ? u : P(String((ne == null ? void 0 : ne.actionGroupId) || b || "__default__"));
        b = H ? "" : String((ne == null ? void 0 : ne.actionGroupId) || b || "__default__"), Xt(O.currentStroke), Bl(O.currentStroke.ctx, ne, O.descriptor), O.lassoPreviewActive = !0, Cn(O);
      }
      F([...o.keys()]);
    }
  }
  function W(ne) {
    return F(ne ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function ce(ne) {
    return o.get(String(ne)) ?? null;
  }
  function Se() {
    return [...o.keys()];
  }
  function E(ne) {
    var Fe;
    const J = o.get(String(ne));
    if (!J) return null;
    const q = y === "paint" && b === J.actionGroupId, U = y === "paint" && ((Fe = b ? o.get(b) : u) == null ? void 0 : Fe.activeStroke) || null, H = !!(U != null && U.isEraser), O = q ? J.activeStroke : null;
    if (!H && !O) return J.committedPaint.canvas;
    const ie = `${J.revision}:${u.revision}:${H}`, Q = S.get(J.actionGroupId);
    if ((Q == null ? void 0 : Q.key) === ie) return Q.surface.canvas;
    const ke = Gi((Q == null ? void 0 : Q.surface) ?? null, t, n);
    return Xt(ke), ke.ctx.drawImage(J.committedPaint.canvas, 0, 0), H ? uo(ke.ctx, a.canvas) : (ke.ctx.save(), ke.ctx.globalAlpha = J.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, O.strokeOpacity ?? 1)), ke.ctx.drawImage(a.canvas, 0, 0), ke.ctx.restore()), S.set(J.actionGroupId, { key: ie, surface: ke }), ke.canvas;
  }
  function j() {
    const ne = y === "mask" ? c.activeStroke : null;
    return !c.painted && (!ne || ne.isEraser) ? null : `${c.revision}:${!!ne}`;
  }
  function xe() {
    const ne = j();
    if (ne === null)
      return N = null, null;
    if ((N == null ? void 0 : N.key) === ne) return N.surface.canvas;
    const J = Gi((N == null ? void 0 : N.surface) ?? null, t, n);
    Xt(J);
    const q = y === "mask" ? c.activeStroke : null;
    return q != null && q.isEraser ? (Yt = Gi(Yt, t, n), Xt(Yt), Yt.ctx.drawImage(c.committedMask.canvas, 0, 0), uo(Yt.ctx, a.canvas), uf(J.ctx, Yt.canvas)) : (uf(J.ctx, c.committedMask.canvas), q && uf(J.ctx, a.canvas)), N = { key: ne, surface: J }, J.canvas;
  }
  return {
    rebuildCommitted: B,
    beginStroke: V,
    appendStrokePoint: lM,
    updateActiveStroke: R,
    commitActiveStroke: z,
    cancelActiveStroke: _,
    getErpTarget: W,
    ensureTarget: A,
    getGroupTarget: ce,
    getGroupDisplayCanvas: E,
    getMaskDisplayCanvas: xe,
    getMaskDisplayRevision: j,
    getAllGroupIds: Se
  };
}
function re(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function rp(e, t) {
  let n = $t(t) - $t(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const nd = 3;
function ss(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function yc(e, t = 0) {
  const n = ss(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = ss(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = ss(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = ss(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(ss(t) || 0);
}
function nb(e) {
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
const Fg = Math.PI / 180, Tg = 0.12, cM = nd, uM = 35, fM = 140, hs = 100, dM = 20, Dg = 0.8;
function pM(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = re(Number(e || hs), 1, 179) * Fg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Fg;
}
function ip(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: hs })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(B, V = null) {
    u && u(B, V);
  }
  function y(B, V, z = null, _ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(B || 0), d.drag.lastY = Number(V || 0), d.drag.lastTs = Number(_ || performance.now()), d.drag.pointerId = z, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: z }), !0;
  }
  function v(B, V, z = "pano", _ = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(_ || performance.now()), W = Number(B), ce = Number(V), Se = W - d.drag.lastX, E = ce - d.drag.lastY;
    d.drag.lastX = W, d.drag.lastY = ce, d.drag.lastTs = R;
    const j = r() || { x: 1, y: 1 }, xe = Number(j.x || 1), ne = Number(j.y || 1), J = { ...t() };
    let q = 0, U = 0;
    if (z === "unwrap") {
      const O = o() || { w: 1, h: 1 }, ie = Math.max(1, Number(O.w || 1)), Q = Math.max(1, Number(O.h || 1)), ke = Se / ie, Fe = E / Q;
      q = -ke * 360 * xe, U = Fe * 180 * ne;
    } else {
      const O = a() || { w: 0, h: 0 }, ie = Math.max(1, Number(O.w || 0)), Q = Math.max(1, Number(O.h || 0));
      if (ie > 1 && Q > 1) {
        const ke = re(Number(J.fov || hs), 1, 179), Fe = re(pM(ke, ie, Q), 0.1, 179);
        q = -(Se / ie) * ke * xe, U = E / Q * Fe * ne;
      } else
        q = -Se * Tg * xe, U = E * Tg * ne;
    }
    J.yaw = $t(Number(J.yaw || 0) + q), J.pitch = re(Number(J.pitch || 0) + U, -89.9, 89.9), n(J), d.velHistory.push({ ts: R, yaw: J.yaw, pitch: J.pitch });
    let H = 0;
    for (; H < d.velHistory.length - 1 && d.velHistory[H].ts < R - 100; ) H++;
    return H > 0 && d.velHistory.splice(0, H), d.inertia.active = !1, d.inertia.lastTs = R, c(), b("drag", { phase: "move", dx: Se, dy: E, dYaw: q, dPitch: U }), !0;
  }
  function S(B = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const V = Number(B || performance.now());
    d.drag.lastTs = V;
    const z = d.velHistory.filter((R) => V - R.ts <= 80);
    if (z.length >= 2) {
      const R = z[0], W = z.at(-1), ce = Math.max(1e-3, (W.ts - R.ts) / 1e3);
      let Se = W.yaw - R.yaw;
      Se > 180 && (Se -= 360), Se < -180 && (Se += 360), d.inertia.vx = Se / ce, d.inertia.vy = (W.pitch - R.pitch) / ce;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const _ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = _ > dM, d.inertia.lastTs = V, b("drag", { phase: "end", speed: _, inertiaActive: d.inertia.active }), !0;
  }
  function N(B = performance.now()) {
    if (!d.inertia.active) return !1;
    const V = Number(B || performance.now()), z = Math.max(1e-3, (V - (d.inertia.lastTs || V)) / 1e3);
    d.inertia.lastTs = V;
    const _ = { ...t() };
    _.yaw = $t(Number(_.yaw || 0) + d.inertia.vx * z), _.pitch = re(Number(_.pitch || 0) + d.inertia.vy * z, -89.9, 89.9);
    const R = Math.exp(-5.5 * z);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < Dg && Math.abs(d.inertia.vy) < Dg && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(_), c(), d.inertia.active;
  }
  function k() {
    const B = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], B;
  }
  function P(B) {
    const V = Math.sign(Number(B || 0));
    if (!V) return !1;
    const z = { ...t() }, _ = Number(z.fov || hs);
    return z.fov = re(_ + V * cM, uM, fM), n(z), c(), b("wheel", { deltaSign: V, fovBefore: _, fovAfter: z.fov }), !0;
  }
  function A(B, V = 0) {
    return P(yc(B, V));
  }
  function F() {
    n({ yaw: 0, pitch: 0, fov: hs }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: v,
    endDrag: S,
    stepInertia: N,
    stopMotion: k,
    applyWheel: P,
    applyWheelEvent: A,
    resetView: F
  };
}
const xt = Math.PI / 180, pn = 180 / Math.PI;
function _r(e, t, n) {
  return { x: e, y: t, z: n };
}
function bc(e, t) {
  return _r(e.x + t.x, e.y + t.y, e.z + t.z);
}
function vc(e, t) {
  return _r(e.x * t, e.y * t, e.z * t);
}
function ff(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function op(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return _r(e.x / t, e.y / t, e.z / t);
}
function Jn(e, t) {
  const n = e * xt, r = t * xt, o = Math.cos(r);
  return _r(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Aa(e, t, n = 0) {
  const r = Number(e || 0) * xt, o = Number(t || 0) * xt, a = n * xt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), v = Math.sin(a);
  return {
    right: _r(
      c * y - u * b * v,
      d * v,
      -u * y - c * b * v
    ),
    up: _r(
      -c * v - u * b * y,
      d * y,
      u * v - c * b * y
    ),
    fwd: _r(u * d, b, c * d)
  };
}
function _c(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Pt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function hM() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function mM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = Pt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || o),
      type: "strokeGroup",
      actionGroupId: o,
      z_index: Math.max(0, Math.round(a ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function gM(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function yM(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = Pt(e.t, 0), r = Pt(e.widthScale, null), o = Pt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = Pt(e.u, null), c = Pt(e.v, null);
    if (a == null || c == null) return null;
    const u = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = Pt(e.u, null), c = Pt(e.v, null);
    if (a == null || c == null) return null;
    const u = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: c,
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  return null;
}
function Al(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = yM(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function bM(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Al(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Al(e.points, t, 1);
  if (!a) return null;
  const c = Al(e.rawPoints, t, 1), u = Al(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function vM(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = gM(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = bM(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = Pt(e.size, null), c = Pt(e.opacity, null);
  if (a == null || c == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = Pt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, Pt(S.r, 0))),
      g: Math.max(0, Math.min(1, Pt(S.g, 0))),
      b: Math.max(0, Math.min(1, Pt(S.b, 0))),
      a: Math.max(0, Math.min(1, Pt(S.a, 1)))
    };
  }
  return {
    id: u,
    actionGroupId: d,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, a),
    opacity: Math.max(0, Math.min(1, c)),
    hardness: Pt(e.hardness, null),
    flow: Pt(e.flow, null),
    spacing: Pt(e.spacing, null),
    createdAt: Math.trunc(Pt(e.createdAt, 0)),
    color: v,
    radiusModel: y,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Lg(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = vM(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function _M(e) {
  if (!e || typeof e != "object") return null;
  const t = Pt(e.u0, null), n = Pt(e.v0, null), r = Pt(e.u1, null), o = Pt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function wM(e) {
  const t = e || {};
  return {
    du: Pt(t.du, 0) ?? 0,
    dv: Pt(t.dv, 0) ?? 0,
    rot_deg: Pt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Pt(t.scale, 1) ?? 1)
  };
}
function SM(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = _M(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Pt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: wM(e.transform)
  } : null;
}
function xM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = SM(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function ma(e) {
  const t = hM();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: mM(e.groups),
    paint: Lg(e.paint, "paint"),
    mask: Lg(e.mask, "mask"),
    raster_objects: xM(e.raster_objects)
  };
}
const Sr = 1, xr = 179, rd = 85;
function Qc(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function rb(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function ib(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * pn;
  return n && (r = Math.round(r / 15) * 15), Qc(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Pi(e = {}) {
  const t = re(Qe(e.hFOV_deg || 90, 90), Sr, xr), n = re(Qe(e.vFOV_deg || 60, 60), Sr, xr), r = Math.tan(t * xt * 0.5), o = Math.tan(n * xt * 0.5);
  return {
    yawDeg: Qe(e.yaw_deg, 0),
    pitchDeg: Qe(e.pitch_deg, 0),
    rollDeg: Qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function No(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Pi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function ap(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Qe(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function sp(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = re(2 * Math.atan(r / (2 * n)) * pn, Sr, xr), c = re(2 * Math.atan(o / (2 * n)) * pn, Sr, xr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function kM(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), o = Qe(e == null ? void 0 : e.y, 0), a = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Pi(t), d = Math.max(1e-12, Qe(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function lp(e, t, n = rd) {
  const r = Math.max(1e-12, Qe(t, 1)), o = re(Qe(n, rd), 1, 89.999), a = r * Math.tan(o * xt), c = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function ob(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function MM(e, t) {
  const n = re(Qe(e, 90), Sr, xr), r = Math.max(1e-6, Qe(t, 1));
  return re(
    2 * Math.atan(Math.tan(n * xt * 0.5) / r) * pn,
    Sr,
    xr
  );
}
function Ul(e, t) {
  const n = re(Qe(e, 60), Sr, xr), r = Math.max(1e-6, Qe(t, 1));
  return re(
    2 * Math.atan(Math.tan(n * xt * 0.5) * r) * pn,
    Sr,
    xr
  );
}
function Rg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function NM(e, t) {
  const n = Rg(e, 1), r = Rg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Po(e) {
  const t = re(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * xt, n = re(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * xt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function vo(e) {
  const t = Po(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || NM(t, 1);
}
function cp(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = vo(t), t;
}
function ab({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? re(c, Sr, xr) : re(Math.min(42, Qe(o, 100) * 0.42), 8, 96);
  return cp({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: re(Qe(n, 0), -89.9, 89.9),
    roll_deg: Qc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function gi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : vo(e);
}
function sb(e, t) {
  const n = Pi(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * pn, a = 2 * Math.atan(n.tanHalfY * r) * pn;
  return o < Sr || o > xr || a < Sr || a > xr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function lb(e, t, n = nd) {
  const r = Math.sign(Qe(t, 0)), o = Math.abs(Qe(n, nd));
  if (!r || !(o > 0)) return null;
  const a = Pi(e), c = a.hFovDeg + r * o;
  if (c < Sr || c > xr) return null;
  const u = Math.tan(c * xt * 0.5);
  return sb(e, u / a.tanHalfX);
}
function cb(e, t) {
  const n = Pi(e), r = Aa(n.yawDeg, n.pitchDeg, n.rollDeg), o = Qe(t == null ? void 0 : t.x, 0), a = Qe(t == null ? void 0 : t.y, 0);
  return op(bc(bc(r.fwd, vc(r.right, o)), vc(r.up, a)));
}
function PM(e) {
  return _r(e.x, e.y, -e.z);
}
function Yl(e) {
  return _r(e.x, e.y, -e.z);
}
function er(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Aa(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function ub(e) {
  const t = Yl(_r(e[0][0], e[1][0], e[2][0])), n = Yl(_r(e[0][1], e[1][1], e[2][1])), r = Yl(_r(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * pn, pitchDeg: a * pn, rollDeg: d * pn };
}
function Vs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Eo(e) {
  const [[t, n, r], [o, a, c], [u, d, b]] = e, y = t + a + b;
  if (y > 0) {
    const S = 0.5 / Math.sqrt(y + 1);
    return { x: (d - c) * S, y: (r - u) * S, z: (o - n) * S, w: 0.25 / S };
  }
  if (t > a && t > b) {
    const S = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * S, y: (n + o) / S, z: (r + u) / S, w: (d - c) / S };
  }
  if (a > b) {
    const S = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / S, y: 0.25 * S, z: (c + d) / S, w: (r - u) / S };
  }
  const v = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / v, y: (c + d) / v, z: 0.25 * v, w: (o - n) / v };
}
function Cl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const wo = 1e-6, id = 1e-6, AM = 1e-9;
function $s(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function CM(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    $s(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return $s(0, r, a, 1, 0.5 * (c + u));
}
function ka(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ma(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((S) => -S / o), u = r.map((S) => S / a);
  if (c.reduce((S, N, k) => S + N * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((S, N) => (S * a + u[N] * o) / (o + a)), b = (S) => Math.sqrt(S.reduce((N, k) => N + k * k, 0)), y = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= y ? d : d.map((S) => S * y / v);
}
function fb(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((y, v) => a[v] - y);
  let d = u;
  ka(e, r) && (d = Ma(t, r, n[r - 1].map((y, v) => y - o[v]), u).map((y) => y * c));
  let b = u;
  return ka(e, r + 1) && (b = Ma(t, r + 1, u.map((y) => -y), n[r + 2].map((y, v) => y - a[v])).map((y) => y * c)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function db(e, t, n, r, o) {
  const [[a], [c]] = fb(e, t, n.map((u) => [u]), r);
  return $s(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function IM(e, t, n, r) {
  var b, y;
  const o = e.map((v) => v.value);
  let [a, c] = fb(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => $s(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function wc([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function OM(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function df(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function EM([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function od(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ca(e, t) {
  return EM(wc([-e[0], -e[1], -e[2], e[3]], t));
}
function pf(e, t, n) {
  return wc(e, od(ca(e, t).map((r) => n * r)));
}
function hf(e, t) {
  const n = OM(e, t);
  if (Math.abs(n) > id) return n < 0;
  const [r, o, a] = ca(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > id) return c < 0;
  return !1;
}
function Il(e) {
  const { x: t, y: n, z: r, w: o } = Eo(er(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function ad(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function FM(e, t, n, r) {
  const o = Il(e[n].value);
  let a = Il(e[n + 1].value);
  hf(o, a) && (a = df(a));
  const c = t[n + 1] - t[n], u = ca(o, a);
  let d = u;
  if (ka(e, n)) {
    let _ = Il(e[n - 1].value);
    hf(_, o) && (_ = df(_)), d = Ma(t, n, ca(o, _), u).map((R) => R * c);
  }
  let b = u;
  if (ka(e, n + 1)) {
    let _ = Il(e[n + 2].value);
    hf(a, _) && (_ = df(_)), b = Ma(t, n + 1, ca(a, o), ca(a, _)).map((R) => R * c);
  }
  const y = wc(o, od(d.map((_, R) => 0.5 * (_ - u[R])))), v = wc(a, od(u.map((_, R) => 0.5 * (_ - b[R])))), [S, N, k, P] = pf(pf(o, a, r), pf(y, v, r), 2 * r * (1 - r)), { yawDeg: A, pitchDeg: F, rollDeg: B } = ub(Vs({ x: S, y: N, z: k, w: P })), V = e[n].value, z = e[n + 1].value;
  return {
    yaw_deg: ad(A, V.yaw_deg, z.yaw_deg, r),
    pitch_deg: F,
    roll_deg: ad(B, V.roll_deg, z.roll_deg, r)
  };
}
function zs(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function Sc(e) {
  return Math.sqrt(zs(e, e));
}
function xc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function pb(e, t) {
  const n = zs(e, t), r = t.map((c, u) => c - n * e[u]), o = Sc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function aa(e, t) {
  const n = Sc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Ol(e, t, n) {
  return aa(e, pb(e, t).map((r) => n * r));
}
function mf(e, t) {
  const n = xc(e[t].value), r = xc(e[t + 1].value), o = zs(n, r), a = o < 0 && Sc(r.map((d, b) => d - o * n[b])) <= id;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = pb(n, r);
  const u = Sc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function TM(e, t, n, r) {
  const o = xc(e[n].value), a = xc(e[n + 1].value), [c, u, d] = mf(e, n);
  let b = c, y = u;
  const v = t[n + 1] - t[n];
  ka(e, n) && (b = Ma(t, n, mf(e, n - 1)[1].map((V) => -V), b).map((V) => V * v)), ka(e, n + 1) && (y = Ma(t, n + 1, y.map((V) => -V), mf(e, n + 1)[0]).map((V) => V * v));
  let S, N, k;
  if (d) {
    const V = Math.PI, z = $s(0, zs(b, c) / V / 3, V - zs(y, u) / V / 3, V, r);
    [S, N, k] = aa(o, c.map((_) => z * _ / V));
  } else {
    const V = Ol(aa(o, b.map((R) => R / 3)), aa(a, y.map((R) => -R / 3)), r), z = Ol(aa(o, b.map((R) => r * R / 3)), V, r), _ = Ol(V, aa(a, y.map((R) => -(1 - r) * R / 3)), r);
    [S, N, k] = Ol(z, _, r);
  }
  const P = Math.hypot(S, k), A = e[n].value.yaw_deg, F = e[n + 1].value.yaw_deg;
  return { yaw_deg: P <= AM ? A + (F - A) * r : ad(Math.atan2(S, k) * 180 / Math.PI, A, F, r), pitch_deg: Math.atan2(N, P) * 180 / Math.PI };
}
function DM(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = db(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function LM(e, t, n, r) {
  return db(e, t, e.map((o) => o.value), n, r);
}
const RM = { position: IM, rotation: FM, direction: TM, size: DM };
function Gt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Cl(e[t].value);
  if (n <= r[0].frame + wo) return Cl(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - wo) return Cl(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + wo; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= wo || c.easing === "hold") return Cl(c.value);
  const u = r.map((b) => b.frame), d = CM(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (RM[t] ?? LM)(r, u, a, d);
}
function sd(e) {
  return Math.min(179, Math.max(0.1, e));
}
function VM(e) {
  return Math.min(1, Math.max(0, e));
}
function hb(e) {
  return Math.max(1e-6, e);
}
function mb(e, t) {
  return t - (e.start - e.in);
}
function ga(e, t) {
  return t >= e.start - wo && (e.duration === null || t < e.start + e.duration - wo);
}
function up(e, t) {
  return {
    position: Gt(e, "position", t),
    ...Gt(e, "rotation", t),
    hFOV_deg: sd(Gt(e, "fov", t)),
    aspect: e.aspect
  };
}
function kc(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = mb(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : up(r, n),
    scene: {
      active: o.visible && ga(o.clip, n),
      clip_frame: a,
      position: Gt(o, "position", a),
      ...Gt(o, "rotation", a),
      scale: hb(Gt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => Ao(c, n))
  };
}
function $M(e, t) {
  if (e.placement === "world")
    return {
      position: Gt(e, "position", t),
      ...Gt(e, "rotation", t),
      scale: hb(Gt(e, "scale", t))
    };
  const n = Gt(e, "size", t);
  return {
    ...Gt(e, "direction", t),
    roll_deg: Gt(e, "roll", t),
    hFOV_deg: sd(n.hFOV_deg),
    vFOV_deg: sd(n.vFOV_deg)
  };
}
function Ao(e, t) {
  const n = mb(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ga(e.clip, t),
    clip_frame: n,
    ...$M(e, n),
    opacity: VM(Gt(e, "opacity", n))
  };
}
const zM = 2, jM = ["sky", "world"], ld = ["perspective", "erp"], HM = ["input", "output", "temp"], gb = [0.42, 0, 0.58, 1], yb = 1, fp = 1e3, cd = 1e7, dp = cd;
function gn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function pp(e, t) {
  const n = Zt(e, t);
  return n !== null && n > 0 ? n : t;
}
function Qn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function eu(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Xl(e) {
  const t = eu(e);
  return t === null ? null : Qn(t, -cd, cd);
}
function Ca(e) {
  const t = pp(e, null);
  return t === null ? null : Qn(t, yb, fp);
}
function bb(e) {
  const t = eu(e);
  return t !== null && t >= 1 ? Math.min(t, dp) : null;
}
function js(e, t) {
  return typeof e == "boolean" ? e : t;
}
function vb(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Zt(n, null));
  return t.includes(null) ? null : t;
}
function _b(e) {
  return vb(e) || [0, 0, 0];
}
function wb(e) {
  const t = gn(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: Qn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function GM(e) {
  return Qn(Zt(e, 90), 0.1, 179);
}
function KM(e) {
  return pp(e, 1);
}
function WM(e) {
  const t = gn(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: Qn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function BM(e) {
  return Zt(e, 0);
}
function UM(e) {
  const t = gn(e) ? e : {};
  return {
    hFOV_deg: Qn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Qn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Sb(e) {
  return Qn(Zt(e, 1), 0, 1);
}
const hp = [["position", _b], ["rotation", wb], ["fov", GM]], tu = [["position", _b], ["rotation", wb], ["scale", KM]], mp = [["direction", WM], ["roll", BM], ["size", UM], ["opacity", Sb]], gp = [...tu, ["opacity", Sb]];
function YM(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Zt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...gb];
}
function XM(e) {
  if (!gn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = vb(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function qM(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!gn(o)) continue;
    const a = Xl(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: YM(o.easing) }, u = n ? XM(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function yp(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = gn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: qM(a.keyframes, o, r === "position") };
  }
  return n;
}
function xb(e) {
  const t = gn(e) ? e : {}, n = Xl(t.start), r = Xl(t.in), o = Xl(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function JM(e) {
  const t = gn(e) ? e : {}, n = Qn(Zt(t.x0, 0), 0, 1), r = Qn(Zt(t.y0, 0), 0, 1), o = Qn(Zt(t.x1, 1), 0, 1), a = Qn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function ZM(e) {
  if (!gn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: HM.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function QM(e) {
  const t = ZM(e.source);
  if (!t) return null;
  const n = jM.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: xb(e.clip),
    visible: js(e.visible, !0),
    locked: js(e.locked, !1),
    crop: JM(e.crop),
    ...yp(e, r ? gp : mp)
  };
  return r || (o.z_index = eu(e.z_index) ?? 0), o;
}
function eN(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = gn(a) ? QM(a) : null;
    if (c) {
      if (c.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(c);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const a of t)
    typeof a.id == "string" && a.id && !r.has(a.id) ? r.add(a.id) : a.id = null;
  let o = 1;
  for (const a of t)
    if (a.id === null) {
      for (; r.has(`sticker_${o}`); ) o += 1;
      a.id = `sticker_${o}`, r.add(a.id);
    }
  return t;
}
function kb(e) {
  if (!gn(e)) return null;
  const t = ld.includes(e.projection) ? e.projection : ld[0];
  return { aspect: pp(e.aspect, 1), projection: t, visible: js(e.visible, !0), ...yp(e, hp) };
}
function bp() {
  return kb({});
}
function Mc(e) {
  const t = gn(e.timeline) ? e.timeline : {}, n = gn(e.scene) ? e.scene : {};
  return {
    version: zM,
    timeline: {
      fps: Ca(t.fps) ?? 24,
      length: bb(t.length)
    },
    camera: kb(e.camera),
    scene: { clip: xb(n.clip), visible: js(n.visible, !0), ...yp(n, tu) },
    stickers: eN(e.stickers),
    painting: ma(e.painting),
    painting_layer: gn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: js(e.painting_visible, !0)
  };
}
function tN(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!gn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function nN(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!gn(t)) return null;
  const n = Qn(Zt(t.hFOV_deg, 90), 1, 179), r = Qn(Zt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function rN(e) {
  const t = gn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(gn) : [];
  return n.sort((r, o) => Zt(r.z_index, 0) - Zt(o.z_index, 0)), Mc({
    camera: nN(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: tN(r, t),
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
function ei(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Mc({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!gn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? rN(t) : Mc(t);
}
const gf = {
  state: { painting_visible: !0 },
  camera: { projection: ld[0], visible: !0 },
  scene: { visible: !0 }
};
function yf(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function ud(e) {
  return JSON.stringify({
    ...yf(e, gf.state),
    camera: e.camera && yf(e.camera, gf.camera),
    scene: yf(e.scene, gf.scene)
  });
}
function bf(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function Vg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Hs(e, t) {
  const n = Ca(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, o = (u) => eu(u * r), { length: a } = e.timeline, c = Vg(e.scene.clip, o);
  return Mc({
    timeline: { fps: n, length: a === null ? null : Math.max(1, o(a)) },
    camera: e.camera === null ? null : { ...e.camera, ...bf(e.camera, hp, o, 0, 0) },
    scene: { clip: c.clip, visible: e.scene.visible, ...bf(e.scene, tu, o, c.anchor, c.newAnchor) },
    stickers: e.stickers.map((u) => {
      const { clip: d, anchor: b, newAnchor: y } = Vg(u.clip, o), v = u.placement === "world" ? gp : mp;
      return { ...u, clip: d, ...bf(u, v, o, b, y) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function vf(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Mb(e) {
  return Array.isArray(e) ? [...e] : e;
}
function vp(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= wo);
}
function Nb(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Mb(e.keyframes[r - 1].easing) : [...gb];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function En(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = vf(o.value, r);
    return;
  }
  const a = vp(o, n);
  a ? a.value = vf(a.value, r) : Nb(o, n, vf(Gt(e, t, n), r));
}
function Fo(e) {
  return e.placement === "world" ? gp.map(([t]) => t) : e.placement === "sky" ? mp.map(([t]) => t) : (e.clip ? tu : hp).map(([t]) => t);
}
function iN(e, t) {
  for (const n of Fo(e))
    vp(e[n], t) || Nb(e[n], t, Gt(e, n, t));
}
function oN(e) {
  const t = Fo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function aN(e, t) {
  return Fo(e).every((n) => !!vp(e[n], t));
}
function sN(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Gt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function lN(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const u = e[c], d = u.keyframes.filter((y) => a.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), b = new Set(d.map((y) => y.frame));
    u.keyframes = [
      ...u.keyframes.filter((y) => !a.has(y.frame) && !b.has(y.frame)),
      ...d
    ].sort((y, v) => y.frame - v.frame);
  }
  return r;
}
function Pb(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function cN(e, t, n) {
  const r = Pb(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function uN(e, t, n, r) {
  for (const o of Pb(e, t, n)) o.easing = Mb(r);
}
function fN(e, t) {
  e.start = Math.max(0, e.start + t);
}
function dN(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function pN(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function hN(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Nc(e) {
  return Fo(e).map((t) => e[t]);
}
function mN(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? Nc(e.camera).some((r) => r.keyframes.length > 0) : Cb(e, { camera: n });
}
function Ab(e) {
  return Nc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !hN(e.clip);
}
function Cb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Ab);
}
const gN = 1e5;
function Ib(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of Nc(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of Nc(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return Number.isFinite(a) ? a : gN;
}
function yN(e) {
  return e > 0 ? Ca(Math.min(e, fp)) : null;
}
function bN(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : bb(Math.max(1, Math.min(e, dp)));
}
const _f = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], vN = 2e3;
function _N(e, t, n = 56) {
  const r = _f.find((a) => a * t >= n) || _f[_f.length - 1], o = [];
  for (let a = 0; a < e && o.length < vN; a += r) o.push(a);
  return o;
}
function wN(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let El = { text: null, parsed: null };
function qn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Pc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function SN({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: qn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ma(null),
    painting_layer: null,
    ui_settings: Pc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ob(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function xN(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function kN(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function MN(e) {
  return Array.isArray(e) ? e.map((t) => cp(t)) : [];
}
function NN(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function Eb(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = SN(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (El.text === o ? a = El.parsed : (a = JSON.parse(o), El = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: xN(a.assets),
      stickers: kN(a.stickers),
      shots: MN(a.shots),
      painting: ma(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Pc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = Pc({ ...u.ui_settings, ...c })), u.output_preset = Ob(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = qn(n.coverage), delete u.editor_history, u;
  } catch {
    return El = { text: o, parsed: null }, r;
  }
}
function $g(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function PN(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function AN(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Fb(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, scene: u = null, camera: d = !1 } = t, b = Ca(t.fps);
  let y;
  try {
    y = ei(e);
  } catch {
    y = ei(null);
  }
  b && b !== y.timeline.fps && (y = Hs(y, b));
  const v = d && y.camera === null;
  if (v && (y = { ...y, camera: bp() }), u) {
    let S = ei(u);
    b && b !== S.timeline.fps && (S = Hs(S, b)), y = { ...S, camera: y.camera, cutout_state: y };
  }
  return {
    ...y,
    ...v ? { default_camera: !0 } : {},
    coverage: qn(o),
    bg_color: r,
    output_preset: Ob(n),
    ui_settings: Pc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function CN(e, t) {
  e.cutout_state && (e.cutout_state = Hs(e.cutout_state, t));
  const n = Hs(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Fo(a)) a[u].keyframes = c[u].keyframes;
    }
}
function _p(e, t) {
  const n = Ao(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const IN = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function zg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function ON(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[IN[n]].keyframes.length));
}
function Tb(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = zg(n, ["yaw_deg", "pitch_deg"]), a = zg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && En(e, "direction", r, o), n.rot_deg !== void 0 && En(e, "roll", r, n.rot_deg), Object.keys(a).length && En(e, "size", r, a);
}
const nu = ["position_x", "position_y", "position_z"], ql = "camera";
function jg(e, t) {
  const n = up(e, t);
  return cp({
    id: ql,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: MM(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function EN(e) {
  return ei({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: $t(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function FN(e) {
  return e - 360 * Math.round(e / 360);
}
function TN(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + FN(n[a] - r[a]));
  Object.keys(o).length && En(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && En(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * xt * 0.5) / Math.tan(n.vFOV_deg * xt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && En(e, "position", t, [...n.position]);
}
function DN(e, t) {
  const n = Gt(e, "position", t), r = Gt(e, "rotation", t);
  return {
    ...Object.fromEntries(nu.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Gt(e, "fov", t)
  };
}
function LN(e, t, n, r) {
  const o = nu.indexOf(n);
  if (o >= 0) {
    const a = Gt(e, "position", t);
    a[o] = r, En(e, "position", t, a);
  } else n === "hFOV_deg" ? En(e, "fov", t, r) : En(e, "rotation", t, { [n]: r });
}
function RN(e, t, n) {
  En(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function VN(e, t) {
  const n = Ao(e, t);
  return {
    ...Object.fromEntries(nu.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function $N(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = nu.indexOf(n);
  if (a >= 0) {
    const c = Gt(e, "position", o);
    c[a] = r, En(e, "position", o, c);
  } else n === "scale" ? En(e, "scale", o, r) : n === "opacity" ? En(e, "opacity", o, r / 100) : En(e, "rotation", o, { [n]: r });
}
function zN(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && En(e, o, r, n[o]);
}
function jN(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function HN(e, t, n) {
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
function Jl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Db(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function wp(e, t, n, r) {
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
function GN(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = $t(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function fd(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Lb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Rb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Hg(e) {
  e.default_camera && JSON.stringify(ei({ version: 2, camera: e.camera }).camera) !== JSON.stringify(bp()) && delete e.default_camera;
}
function Vb(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = ei(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(bp()) && (n.camera = null), ud(n);
}
function $b(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = ei(n);
    if (ud(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && ud(Hs(o, a)) === t;
  } catch {
    return !1;
  }
}
const wf = 0.15, KN = 0.01, WN = 1e-3, BN = 0.05, UN = 4, Gg = 250, YN = 16, Ir = 1, XN = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function ur(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function ti(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function ru(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Ia(e, t, n = 0) {
  const r = er(e, t, n), o = ti(r, 2);
  return { right: ti(r, 0), up: ti(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function qN(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function dd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function JN(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : dd(e, "3dof", n);
}
function ZN(e) {
  return Ia(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function QN(e) {
  return ur(e.position, Ia(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Yi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function As(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Sp(e, t) {
  return As(Yi(t, e.position), Ia(e.yaw_deg, e.pitch_deg).forward);
}
function xp(e) {
  return Math.max(e, 1e-6) * BN;
}
function Sf(e, t, n = null, r = Ir) {
  if (t) return t;
  const o = xp(r);
  if (n && Sp(e, n) > 0) {
    const a = Yi(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : ur(e.position, a, o / c);
  }
  return ur(e.position, Ia(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function Kg(e, t = Ir) {
  return Math.max(e.distance, xp(t));
}
function Wg(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > UN ? !1 : t.time - e.time < Gg || e.cost > YN && t.time - e.wheelTime < Gg;
}
function kp(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * xt);
  return { tanX: r, tanY: r * n / t };
}
function Bg(e, t, n, r, o = QN(e)) {
  const a = e.roll_deg ?? 0, [c, u] = e2(t, n, a), d = $t(e.yaw_deg + c / r * 360), b = re(e.pitch_deg - u / r * 360, -89.9, 89.9), y = er(e.yaw_deg, e.pitch_deg, a), v = er(d, b, a), S = Yi(e.position, o), N = [0, 1, 2].map((P) => As(ti(y, P), S)), k = { ...e, yaw_deg: d, pitch_deg: b, position: ur(o, ru(v, N)) };
  return { ...k, distance: Sp(k, o) };
}
function e2(e, t, n) {
  const r = Math.cos(n * xt), o = Math.sin(n * xt);
  return [e * r + t * o, t * r - e * o];
}
function Ug(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = ZN(e), d = 2 * a * kp(e, r, o).tanY / o;
  return { ...e, position: ur(ur(e.position, c, -t * d), u, n * d), distance: a };
}
function Yg(e, t, n, r = Ir) {
  const o = Yi(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * KN, d = n > 0 ? Math.min(Math.max(a * wf, u), a - c * WN) : -Math.max(a * wf / (1 - wf), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: ur(e.position, o, d / a) };
  return { ...b, distance: Math.max(Sp(b, t), xp(r)) };
}
function Xg(e, t, n, r) {
  const { tanX: o, tanY: a } = kp(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Ia(e.yaw_deg, e.pitch_deg);
  return { ...e, position: ur(t.center, d, -u), distance: u };
}
function xf(e, t, n, r = null) {
  return zb({
    quaternion: Eo(er(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(kp(e, t, n).tanY) * pn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function zb(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Ir }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function Gs(e, t, n, r) {
  const { right: o, up: a, forward: c } = jb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * xt), y = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], S = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / y), y: r * 0.5 * (1 - S / d / b), z: d };
}
function jb(e) {
  const t = Vs(e.quaternion), n = ti(t, 2);
  return { right: ti(t, 0), up: ti(t, 1), forward: n.map((r) => -r) };
}
function qg(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function t2({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Hb(e, t) {
  if (!e || !t.active) return null;
  const n = i2(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: pd(t),
    itemQuaternion: e.kind === "splat" ? XN : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function n2(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = Hb(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function r2(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function i2(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function pd(e) {
  return {
    position: [...e.position],
    quaternion: Eo(er(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function hd(e, t) {
  return ur(e.position, ru(er(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function md(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function gd({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function yd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function o2(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...gd(t).map((a) => hd(e.scene, a)));
  for (const a of n) o.push(...Mp(a));
  for (const { box: a, value: c } of r) o.push(...gd(a).map((u) => hd(c, u)));
  return o;
}
function a2(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Eo(er(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: er(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function Mp(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => ur(e.position, ru(e.rotation, [r, o, 0])));
}
function s2(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? yd(Mp(o)) : a != null && a.box ? yd(gd(md(a.kind, a.box)).map((c) => hd(r, c))) : { center: [...r.position], radius: r.scale };
}
const l2 = 2, c2 = 0.5, u2 = 30;
function Gb(e, t) {
  const n = Yi(t, e), r = Math.atan2(n[0], -n[2]) * pn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * pn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function f2(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * c2 : l2, a = t ? [...t] : ur(e.position, Ia(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Yi(a, e.position)), u = c > 0 ? Gb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(u2 * 0.5 * xt);
  return { position: a, rotation: u, scale: d };
}
function Jg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function d2(e) {
  return [0, 1, 2].map((t) => ti(e, t));
}
function Zg(e, t, n, r) {
  if (e === "translate") return { position: ur(t.position, Yi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * y2(n.scale, r.scale) / n.scale };
  const o = Jg(Vs(r.quaternion), d2(Vs(n.quaternion))), a = Jg(o, er(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = ub(a);
  return Math.abs(u) <= p2 ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: h2(a, t.yaw_deg) } };
}
const p2 = 89.9;
function h2(e, t) {
  const n = ti(e, 0), r = ti(e, 1), o = Math.cos(t * xt), a = Math.sin(t * xt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * pn + 0;
}
const m2 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function g2(e, t, n, r, o) {
  if (!Gs(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = jb(e), d = Yi(t, e.position), b = As(d, a), y = As(d, c), v = As(d, u), S = Math.tan(e.fovY_deg * 0.5 * xt), N = S * e.aspect, k = Math.hypot(b, y, v) * m2[n] * Math.min(1.9 * S, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const P = (z) => {
    const _ = k * Math.sqrt(z * z + v * v - k * k);
    return [(z * v - _) / (v * v - k * k), (z * v + _) / (v * v - k * k)];
  }, [A, F] = P(b), [B, V] = P(y);
  return {
    minX: r * 0.5 * (1 + A / N),
    maxX: r * 0.5 * (1 + F / N),
    minY: o * 0.5 * (1 - V / S),
    maxY: o * 0.5 * (1 - B / S)
  };
}
function y2(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function b2(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Qg(e, t) {
  const n = er(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * xt) * t, o = r / e.aspect, a = (b, y, v) => ur(e.position, ru(n, [b, y, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, y) => u.push([b, c[(y + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function v2(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = Gs(e, c, r, o), b = Gs(e, u, r, o);
    if (!d || !b) return !1;
    const y = b.x - d.x, v = b.y - d.y, S = re(((n.x - d.x) * y + (n.y - d.y) * v) / Math.max(y * y + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + y * S - n.x, d.y + v * S - n.y) <= a;
  });
}
function _2(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function w2(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Gt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Gt(r, "position", d);
  });
}
const e0 = 2048, Kb = 0.28;
function Wb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * xt);
  return {
    quaternion: Eo(er(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * pn,
    aspect: r
  };
}
function Cs(e) {
  const t = Pi(e);
  return {
    quaternion: Eo(er(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function t0(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = lp(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * pn,
      vFOV_deg: 2 * Math.atan(a / r) * pn
    }
  };
}
function Bb(e, t, n) {
  const [[r, o, a], [c, u, d], [b, y, v]] = Vs(e.quaternion), S = Math.tan(e.fovY_deg * 0.5 * xt), N = S * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, P = 1e-4) {
      const A = PM(k), F = r * A.x + c * A.y + b * A.z, B = o * A.x + u * A.y + y * A.z, V = -(a * A.x + d * A.y + v * A.z), z = Math.max(V, P);
      return {
        x: t * 0.5 * (1 + F / z / N),
        y: n * 0.5 * (1 - B / z / S),
        z: V
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, P) {
      const A = (k / t * 2 - 1) * N, F = (1 - P / n * 2) * S;
      return op(Yl({
        x: r * A + o * F - a,
        y: c * A + u * F - d,
        z: b * A + y * F - v
      }));
    }
  };
}
function S2(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = kc(e, t), c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const v = n(u);
    if (!v) return;
    const S = Math.tan(b.hFOV_deg * 0.5 * xt), N = Math.tan(b.vFOV_deg * 0.5 * xt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: y ? Kb : b.opacity,
      zIndex: r(u),
      quaternion: Eo(er(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * S,
        x1: (2 * k.x1 - 1) * S,
        y0: (1 - 2 * k.y1) * N,
        y1: (1 - 2 * k.y0) * N
      }
    });
  });
  for (const u of o) c.push({ kind: "erp", ...u });
  return c.sort((u, d) => u.zIndex - d.zIndex);
}
function Ub(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return S2(e, t, {
    media: (c) => {
      const u = a.get(c.id);
      return u ? r(u) : null;
    },
    zIndex: (c) => {
      var u;
      return Number(((u = a.get(c.id)) == null ? void 0 : u.z_index) || 0);
    },
    paintLayers: o
  });
}
function x2(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function k2(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = kc(e, t), c = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), v = y ? r(y) : null;
    if (!v) return;
    const { width: S, height: N } = x2(v.media), k = a2(b, u.crop, S, N);
    k && c.push({
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: b.opacity,
      position: k.position,
      quaternion: k.quaternion,
      rotation: k.rotation,
      width: k.width,
      height: k.height,
      crop: u.crop
    });
  }), c;
}
const kf = /* @__PURE__ */ new WeakMap();
let M2 = 1;
function bd(e) {
  return kf.has(e) || kf.set(e, M2++), kf.get(e);
}
function n0(e) {
  return e && typeof e == "object" ? bd(e) : e;
}
function r0({ background: e, layers: t }) {
  return JSON.stringify([
    e && [bd(e.media), n0(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, bd(n.media), n0(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function N2({ onReady: e, onFailed: t, onUpdate: n = () => {
} }) {
  let r = null, o = !1;
  const a = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(c) {
      return r ? r.render(c) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(c) {
      return r ? r.renderUnwrap(c) : null;
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(c) {
      return r ? r.sceneBox(c) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(c, u, d, b, y) {
      return r ? r.pick(c, u, d, b, y) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(c, u, d, b, y) {
      return r ? r.pickSurface(c, u, d, b, y) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(c, u, d, b, y) {
      return r ? r.pickSticker(c, u, d, b, y) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(c, u, d, b, y, v) {
      return r ? r.gizmoPointer(c, u, d, b, y, v) : null;
    },
    // What pick() hits, as a string that changes with it (pano_three_view.js contentKey).
    contentKey() {
      return r ? r.contentKey() : "";
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-BEyIGLTG.js").then((c) => c.$).then((c) => {
    o || (r = eb(c.createThreeView({ onUpdate: n, createCanvas: () => Sn({ label: "three.editor" }) }), "editor"), a.ready = !0, e());
  }).catch((c) => {
    console.error("[PanoramaStickers] three.js view is unavailable", c), a.failed = !0, t();
  }), a;
}
const Yb = "3D view unavailable. Check the browser console.";
function Ac(e, t, n) {
  return Wb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function P2(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((c) => {
      if (n = !1, !o.size) {
        c.dispose();
        return;
      }
      t = c, o.forEach((u) => u.onChange());
    }).catch((c) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", c), o.forEach((u) => u.onChange()));
    }));
  }
  return function(u) {
    const d = { onChange: u };
    let b = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(y) {
        return b ? null : (a(), t ? t.render({ ...y, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        b || (b = !0, o.delete(d), t == null || t.release(d), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Xb = P2(
  () => import("./.lazy/pano_three_view-BEyIGLTG.js").then((e) => e.$).then((e) => eb(e.createThreeView({ createCanvas: () => Sn({ label: "three.node" }) }), "node"))
), Xi = ["erp_image", "bg_erp", "bg_media"], Zl = ["source"], Np = ["sticker_image", "sticker"], qb = ["scene"], A2 = {
  background: [...Xi, ...Zl],
  "external-sticker": [...Np, ...Zl],
  scene: [...qb, ...Zl]
};
function Jb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function vd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = Jb(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function C2(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function Zb(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function I2(e, t) {
  const { graph: n, entry: r } = Zb(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = Jb(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const Qb = [...Xi, ...Np, ...qb, ...Zl], O2 = 256, sa = /* @__PURE__ */ new Map(), Mf = /* @__PURE__ */ new WeakMap();
let e1 = () => null;
function t1(e) {
  return Mf.has(e) || Mf.set(e, JSON.stringify(e)), Mf.get(e);
}
function E2(e) {
  e1 = e;
}
function Cc(e, t) {
  const n = t1(e);
  sa.delete(n), sa.set(n, t), sa.size > O2 && sa.delete(sa.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? e1(e) : null;
  if (!n) return !0;
  const r = vd(e);
  let o = sa.get(t1(n));
  if (o)
    Cc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => Qb.includes(c == null ? void 0 : c.name)))) return !0;
    Cc(n, r), o = r;
  }
  return A2[t].every((c) => o[c] === r[c]);
}
const Ic = /* @__PURE__ */ new WeakSet();
async function _d(e, t) {
  if (Ic.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Ic.add(e), n.ok && r !== void 0 ? r : null;
}
function n1(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = Zb(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => Qb.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: I2(n, t) };
}
const Ql = /* @__PURE__ */ new Map();
function F2(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Ql.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await _d(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = n1(o, a);
        c && Cc(c.output, c.inputs);
      }
    });
}
const T2 = 5;
function D2(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${T2}`, r = _d(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, _d(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, y, v, S;
      const d = String(c.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const k = await a(N);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((S = (v = (y = k.workflow) == null ? void 0 : y.prompt) == null ? void 0 : v[d]) == null ? void 0 : S.class_type) !== c.comfyClass ? null : n1(k, d);
      }
      return null;
    }
  };
}
function L2(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let Zo = null;
async function R2(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Ic.has(n) || (u = Ql.get(o)) != null && u.has(r) || L2(t)) return null;
  (Zo == null ? void 0 : Zo.workflowId) !== o && (Zo = { workflowId: o, history: D2(n, o) }, queueMicrotask(() => {
    Zo = null;
  }));
  const c = await Zo.history.lastNodeOutput(e, a);
  return a() ? c ? (Cc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (Ic.has(n) || Ql.set(o, (Ql.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function i0(e, t, n, r = Xi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const o0 = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ec(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return o0.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return o0.test(String((e == null ? void 0 : e.filename) || ""));
}
const Nf = /* @__PURE__ */ new WeakMap();
function V2(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function wd(e) {
  return V2(e) ? (Nf.has(e) || Nf.set(e, Math.random().toString(36).slice(2, 10)), Nf.get(e)) : "run";
}
function r1(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function $2(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function Pp(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const c = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const u of c)
      if (Array.isArray(u))
        for (const d of u) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function z2({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = Zc(e, "looping-preview");
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !a && (o(), d());
    }));
  }, b = () => {
    if (!a) {
      o();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, y = () => o(), v = () => {
    o(), d();
  }, S = () => o();
  let N = !1;
  const k = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", v), r.addEventListener("pause", S), r.addEventListener("error", k), r.src = t, r.load(), { video: r, destroy: () => {
    var A, F;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", v), r.removeEventListener("pause", S), r.removeEventListener("error", k), r.pause(), (A = r.removeAttribute) == null || A.call(r, "src"), (F = r.load) == null || F.call(r));
  }, failed: () => N };
}
function fo(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function j2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function a0(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = j2(e == null ? void 0 : e.graph, n)), r;
}
function H2(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function G2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function K2(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function i1({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (_) => {
    if (!_) return "";
    if (typeof _ == "string") return String(_ || "").trim();
    if (Array.isArray(_)) {
      if (_.length === 0) return "";
      if (_.length === 1) return o(_[0]);
      const R = String(_[0] || "").trim();
      if (R)
        return fo(t, {
          filename: R,
          subfolder: String(_[1] || "").trim(),
          type: String(_[2] || "output").trim() || "output"
        });
      for (const W of _) {
        const ce = o(W);
        if (ce) return ce;
      }
      return "";
    }
    return typeof (_ == null ? void 0 : _.src) == "string" && _.src ? _.src : typeof (_ == null ? void 0 : _.url) == "string" && _.url ? _.url : fo(t, _);
  }, a = (_) => {
    if (!_ || typeof _ != "object") return "";
    const R = String(_.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(_.value || "");
    if (R !== "comfy_image") return "";
    const W = String(_.filename || "").trim();
    return W ? fo(t, {
      filename: W,
      subfolder: String(_.subfolder || ""),
      type: String(_.storage || "input")
    }) : "";
  }, c = (_) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || _ == null) return null;
    const W = String(_);
    return R instanceof Map ? R.get(_) || R.get(W) || R.get(Number(W)) || null : R[_] || R[W] || null;
  }, u = (_, R) => {
    var ce;
    const W = c(_ == null ? void 0 : _.id);
    return Array.isArray((ce = W == null ? void 0 : W.ui) == null ? void 0 : ce[R]) ? W.ui[R] : Array.isArray(W == null ? void 0 : W[R]) ? W[R] : [];
  }, d = (_, R) => {
    const W = c(_ == null ? void 0 : _.id);
    return W != null && W.ui && Object.prototype.hasOwnProperty.call(W.ui, R) ? W.ui[R] : W && Object.prototype.hasOwnProperty.call(W, R) ? W[R] : null;
  }, b = (_, R) => {
    const W = d(_, "pano_sticker_input_state_hash"), ce = Array.isArray(W) ? W[0] : W;
    return String(ce ?? "").trim() || K2(R);
  }, y = (_) => {
    const R = [], W = /* @__PURE__ */ new Set();
    for (const ce of _ || []) {
      const Se = o(ce);
      !Se || W.has(Se) || (W.add(Se), R.push(Se));
    }
    return R;
  }, v = (_, R) => {
    var Se;
    const W = [];
    Array.isArray(_ == null ? void 0 : _.images) && _.images.length && W.push(_.images), Array.isArray((Se = _ == null ? void 0 : _.ui) == null ? void 0 : Se.images) && _.ui.images.length && W.push(_.ui.images);
    const ce = [];
    for (const E of W)
      R >= 0 && R < E.length && ce.push(E[R]), ce.push(...E);
    return ce;
  }, S = (_, R) => {
    var ie;
    const W = String(R || "").trim();
    if (!W) return { src: "", sourceType: "", inputName: "" };
    const Se = (Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : []).findIndex((Q) => String((Q == null ? void 0 : Q.name) || "") === W);
    if (Se < 0) return { src: "", sourceType: "", inputName: W };
    const E = _.graph ? _.getInputLink(Se) : null;
    if ((E == null ? void 0 : E.origin_id) == null) return { src: "", sourceType: "", inputName: W };
    const j = E.origin_id, xe = a0(_, Se, j);
    if (!xe) return { src: "", sourceType: "", inputName: W };
    const ne = Number(E.origin_slot ?? 0);
    let J = [];
    try {
      J = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(xe) || [] : [];
    } catch {
      J = [];
    }
    if (Array.isArray(J) && J.length) {
      const Q = [];
      ne >= 0 && ne < J.length && Q.push(J[ne]), Q.push(...J);
      const ke = y(Q.filter((Fe) => !ec(Fe)));
      if (ke.length)
        return { src: ke[0], srcCandidates: ke, sourceType: "appNodeImageUrls", inputName: W };
    }
    const q = c((xe == null ? void 0 : xe.id) ?? j), U = y(v(q, ne).filter((Q) => !ec(Q))).map((Q) => `${Q}&pano_src=${wd(q)}`);
    if (U.length)
      return { src: U[0], srcCandidates: U, sourceType: "nodeOutputs", inputName: W };
    const H = Array.isArray(xe == null ? void 0 : xe.imgs) ? xe.imgs : [];
    if (H.length) {
      const Q = [];
      ne >= 0 && ne < H.length && Q.push(H[ne]), Q.push(...H);
      const ke = y(Q);
      if (ke.length)
        return { src: ke[0], srcCandidates: ke, sourceType: "nodeImgs", inputName: W };
    }
    const O = (ie = xe == null ? void 0 : xe.widgets) == null ? void 0 : ie.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (O) {
      let Q = o(O.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (xe.comfyClass === "LoadImage" || xe.type === "LoadImage") && (Q = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`), Q) return { src: Q, sourceType: "widget", inputName: W };
    }
    return { src: "", sourceType: "", inputName: W };
  }, N = (_, R = []) => {
    var ce;
    const W = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : [];
    for (const Se of R) {
      const E = W.findIndex((J) => String((J == null ? void 0 : J.name) || "") === Se), j = E >= 0 && _.graph ? _.getInputLink(E) : null;
      if ((j == null ? void 0 : j.origin_id) == null) continue;
      const xe = c(((ce = a0(_, E, j.origin_id)) == null ? void 0 : ce.id) ?? j.origin_id), ne = (Array.isArray(xe == null ? void 0 : xe.images) ? xe.images : []).find(ec);
      return ne ? `${fo(t, ne)}&pano_src=${wd(xe)}` : "";
    }
    return "";
  }, k = (_, R = []) => {
    const W = Array.isArray(R) ? R : [R];
    for (const ce of W) {
      const Se = S(_, ce);
      if (String((Se == null ? void 0 : Se.src) || "").trim()) return Se;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, P = (_) => {
    const R = String(_ || "").trim();
    if (!R) return [];
    if (H2(R)) return [R];
    const { filename: W, subfolder: ce } = G2(R);
    return W ? y([
      fo(t, { filename: W, subfolder: ce, type: "temp" }),
      fo(t, { filename: W, subfolder: ce, type: "output" }),
      fo(t, { filename: W, subfolder: ce, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (_) => {
      var R, W;
      try {
        (W = (R = _ == null ? void 0 : _.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || W.call(R, (ce, Se, E) => {
          var j;
          ce != null && ce.img && ((j = r == null ? void 0 : r.isImageLoadFailed) != null && j.call(r, ce.img)) && E.delete(Se);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (_, R) => {
      var W;
      (W = _ == null ? void 0 : _.delete) == null || W.call(_, `__ui__${String(R || "")}`);
    },
    linkedValue: (_, R) => {
      var j, xe, ne, J;
      const W = String(R || ""), ce = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs.findIndex((q) => String((q == null ? void 0 : q.name) || "") === W) : -1, Se = ce >= 0 && _.graph ? _.getInputLink(ce) : null;
      if (Se) {
        const q = c(Se.origin_id), U = [
          q == null ? void 0 : q.output,
          q == null ? void 0 : q.result,
          (j = q == null ? void 0 : q.data) == null ? void 0 : j.output,
          (xe = q == null ? void 0 : q.data) == null ? void 0 : xe.result,
          (ne = q == null ? void 0 : q.ui) == null ? void 0 : ne.output,
          (J = q == null ? void 0 : q.ui) == null ? void 0 : J.result
        ];
        for (const H of U) {
          if (!Array.isArray(H)) continue;
          const O = H[Number(Se.origin_slot || 0)];
          if (typeof O == "string" && O.trim()) return O;
        }
      }
      const E = Array.isArray(_ == null ? void 0 : _.widgets) ? _.widgets.find((q) => String((q == null ? void 0 : q.name) || "") === W) : null;
      return String((E == null ? void 0 : E.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (_, R = [], W = null, ce = "") => {
      var pt;
      const Se = Array.isArray(R) ? R : [R], E = k(_, Se), xe = (Array.isArray(E == null ? void 0 : E.srcCandidates) && E.srcCandidates.length ? E.srcCandidates : [E == null ? void 0 : E.src]).map((Ye) => String(Ye || "").trim()).filter(Boolean);
      if (!xe.length) return null;
      const ne = y(xe.flatMap((Ye) => P(Ye)));
      if (!ne.length) return null;
      _.__panoLinkedInputImageCache || (_.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(ce || Se.join("|") || "image_exact"), q = xe.join(`
`), U = _.__panoLinkedInputImageCache.get(J);
      if (U && U.srcRaw === q && U.img) return U.img;
      const H = n || globalThis.Image;
      if (typeof H != "function") return null;
      const O = new H();
      (pt = r == null ? void 0 : r.markImageLoading) == null || pt.call(r, O, q);
      const ie = { srcRaw: q, resolvedSrc: "", img: O };
      _.__panoLinkedInputImageCache.set(J, ie);
      let Q = -1;
      const ke = (Ye) => {
        var $, gt, Ae;
        Ye === "ready" ? ($ = r == null ? void 0 : r.markImageReady) == null || $.call(r, O, q) : (gt = r == null ? void 0 : r.markImageFailed) == null || gt.call(r, O, q), W == null || W(O), (Ae = _.setDirtyCanvas) == null || Ae.call(_, !0, !0);
      }, Fe = () => {
        if (Q += 1, Q >= ne.length) {
          ke("failed");
          return;
        }
        ie.resolvedSrc = ne[Q], O.src = ie.resolvedSrc;
      };
      return O.onload = () => ke("ready"), O.onerror = () => {
        if (Q + 1 < ne.length) {
          Fe();
          return;
        }
        ke("failed");
      }, Fe(), O;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (_, R, W, ce = null) => {
      var q, U, H;
      const Se = u(_, R)[0] || null, E = o(Se);
      if (!E) return null;
      const j = `__ui__${R}`, xe = (q = W == null ? void 0 : W.get) == null ? void 0 : q.call(W, j);
      if (xe && xe.__panoSrc === E) return xe;
      const ne = n || globalThis.Image;
      if (typeof ne != "function") return null;
      const J = new ne();
      return J.__panoSrc = E, (U = r == null ? void 0 : r.markImageLoading) == null || U.call(r, J, E), J.onload = () => {
        var O;
        (O = r == null ? void 0 : r.markImageReady) == null || O.call(r, J, E), ce == null || ce(J);
      }, J.onerror = () => {
        var O;
        (O = r == null ? void 0 : r.markImageFailed) == null || O.call(r, J, E), ce == null || ce(J);
      }, J.src = E, (H = W == null ? void 0 : W.set) == null || H.call(W, j, J), J;
    },
    uiList: u,
    uiValue: d
  };
}
const W2 = 1e-3;
function o1(e, t, n, r) {
  if (!ga(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(W2 / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function a1(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function B2(e, t) {
  return Math.floor(e * t.fps);
}
function s1(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const s0 = 4;
function l1({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((S, N) => S !== n[N])) && (n = c, r.clear(), o = null), u === null) return null;
      const y = B2(u, d);
      for (let S = y; S < Math.min(n.length, y + s0 + 1); S += 1) a(S);
      for (const S of r.keys())
        (S < y || S > y + s0) && S !== o && r.delete(S);
      const v = r.get(y);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function c1({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: o,
  onChange: a = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof o != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let c = null, u = !1, d = !1;
  const b = () => c || e(), y = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), u = !1, y(), !0);
    },
    updateGesture(v) {
      if (d) return !1;
      c || this.beginGesture();
      const S = t(c, v);
      return S.changed ? (c = S.state, u = !0, r(c), y(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && u;
    },
    commitGesture() {
      if (d || !c) return !1;
      const v = u;
      return v && o(c), c = null, u = !1, r(null), y(), v;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, u = !1, r(null), y(), !0);
    },
    apply(v) {
      if (d) return !1;
      c && this.commitGesture();
      const S = t(e(), v);
      return S.changed ? (o(S.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = c != null;
      c = null, u = !1, v && r(null);
    }
  };
}
const tc = "sticker_image_1", u1 = "external_image", Na = 0;
function ya(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Pf(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Bi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Sd(e, t = Na) {
  return (e == null ? void 0 : e.version) !== 2 ? Bi(e) : Bi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Ao(n, t).active,
    external: n.source.kind === "port",
    ..._p(n, t)
  }));
}
function Ap(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Bi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function f1(e) {
  return String((e == null ? void 0 : e.id) || "") === tc || String((e == null ? void 0 : e.source_kind) || "") === u1;
}
function Cp(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : f1(t);
}
const d1 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function p1(e) {
  return !f1(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(d1.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function h1(e) {
  const t = p1(e);
  return t ? d1.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function m1(e, t = {}) {
  var z, _, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((W) => String((W == null ? void 0 : W.id) || "") === tc);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const W = String(((z = e.active) == null ? void 0 : z.selected_sticker_id) || "") === tc;
    return {
      state: {
        ...e,
        stickers: n.filter((ce, Se) => Se !== r),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, v = Math.max(1, d), S = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, P = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const W = ya(P, v, S), ce = Number(((_ = c == null ? void 0 : c.initial_pose) == null ? void 0 : _.hFOV_deg) ?? P), Se = ya(ce, v, S), E = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? Se);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(E - Se) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((j, xe) => xe === r ? {
          ...j,
          vFOV_deg: W,
          initial_pose: j.initial_pose && typeof j.initial_pose == "object" ? { ...j.initial_pose, vFOV_deg: Se } : j.initial_pose
        } : j)
      },
      changed: !0
    };
  }
  const A = n.reduce((W, ce) => Math.max(W, Number((ce == null ? void 0 : ce.z_index) || 0)), -1), F = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: P,
    vFOV_deg: y ? ya(P, v, S) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || P),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, B = {
    ...c || {},
    id: tc,
    source_kind: u1,
    source_link_id: o,
    source_state_hash: a,
    ...F,
    initial_pose: { ...F },
    visible: !0,
    z_index: A + 1
  }, V = r >= 0 ? n.map((W, ce) => ce === r ? B : W) : [...n, B];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function l0(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const U2 = ["IMAGE", "VIDEO"];
function c0(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => U2.includes(n)) ? "2d" : null;
}
function Y2(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? c0(r.type) ?? c0((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function g1(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: l0(e, "sticker"),
    awaitingPose: !t && (l0(e, "sticker_state") || Y2(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function u0(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return ei({ version: 2, stickers: [n] }).stickers[0];
}
function y1(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((A) => Cp(e, A)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const A = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((F, B) => B !== c),
        active: A ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const A = { ...u0(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((F, B) => B === c ? A : F) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const A = [u.size.value, ...u.size.keyframes.map((V) => V.value)], F = A.map((V) => ya(V.hFOV_deg, o, a));
    if (A.every((V, z) => Math.abs(V.vFOV_deg - F[z]) <= 1e-6)) return { state: e, changed: !1 };
    const B = {
      value: { ...u.size.value, vFOV_deg: F[0] },
      keyframes: u.size.keyframes.map((V, z) => ({ ...V, value: { ...V.value, vFOV_deg: F[z + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((V, z) => z === c ? { ...V, size: B } : V) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((A) => A.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, u0(`sticker_${y}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), S = (A) => d ? ya(A, o, a) : A, N = wp(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: S(v)
  }, Bi(e).reduce((A, F) => Math.max(A, F.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = k.direction ?? [], N.roll.keyframes = k.roll ?? [], N.size.keyframes = (k.size ?? []).map((A) => ({ ...A, value: { ...A.value, vFOV_deg: S(A.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function Ip(e) {
  const t = Bi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Pf(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Pf(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Pf(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function b1(e) {
  const t = Ap(e), n = Cp(e, t), r = Bi(e).some((u) => u && u.visible !== !1), o = Ip(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: h1(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function X2(e) {
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
function f0(e, t) {
  const n = Ap(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = X2(e), o = String(n.id || ""), a = Ip(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function q2(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function J2(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return m1(e, t.value);
  if (t.type === "sync-port") return y1(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === a))
      return { state: e, changed: !1 };
    const d = Ip(e).reduce((S, N) => Math.max(S, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ya(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, wp(a, Jl(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const v = { id: a, asset_id: c, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [c]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], v],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Bi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Ap(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, locked: o } : a)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = p1(n);
    return !o || !h1(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return f0(e, "front");
  if (t.type === "send-back") return f0(e, "back");
  if (t.type === "delete-selected") {
    if (Cp(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Bi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = q2(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? _p(n, Na) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = ON(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return Tb(b, Na, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((d) => d === n ? { ...d, ...u } : d)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function Z2(e = {}) {
  return c1({
    ...e,
    reduce: J2,
    projectModel: b1
  });
}
const xd = 2;
function yo(e, t) {
  return Math.floor(e * t + 0.5);
}
function Q2(e, t) {
  return Math.floor(e * t + 1e-3);
}
function v1({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, y = !1, v = { name: "idle" }, S = [];
  const N = () => b && !y, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function P() {
    for (const ie of S) ie();
    S = [];
  }
  function A(ie, Q = {}) {
    return P(), v = { name: ie, ...Q }, u(), v;
  }
  function F(ie, Q, ke) {
    const Fe = () => {
      v === ie && ke();
    };
    e.addEventListener(Q, Fe), S.push(() => e.removeEventListener(Q, Fe));
  }
  function B(ie, Q) {
    let ke = t.requestFrame(function Fe(pt) {
      v === ie && (Q(pt), v === ie && (ke = t.requestFrame(Fe)));
    });
    S.push(() => t.cancelFrame(ke));
  }
  function V(ie) {
    d = ie, a(d);
  }
  function z() {
    return A(y ? "error" : "idle");
  }
  function _() {
    y = !0, z();
  }
  function R() {
    const { seekable: ie } = e, Q = ie != null && ie.length ? ie.end(ie.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Q) ? Q : 1 / 0));
  }
  function W(ie) {
    if (!N()) return ie === "play" ? xe() : z();
    if (e.readyState < xd) {
      const Q = A("loading", { then: ie });
      return F(Q, "loadeddata", () => W(Q.then)), F(Q, "error", _), Q;
    }
    return ie === "play" && d / n() >= Number(e.duration) ? xe() : ce(ie, !1);
  }
  function ce(ie, Q) {
    const ke = R();
    if (!e.ended && yo(Number(e.currentTime), n()) === yo(ke, n())) return Se(ie);
    const Fe = A("seeking", { then: ie, frame: d, retried: Q });
    return F(Fe, "seeked", () => {
      const pt = yo(Number(e.currentTime), n()) === yo(R(), n()), Ye = d === Fe.frame;
      pt || Ye && Fe.retried ? Se(Fe.then) : ce(Fe.then, Ye);
    }), F(Fe, "error", _), e.currentTime = ke, Fe;
  }
  function Se(ie) {
    return ie === "play" ? E() : (c(), z());
  }
  function E() {
    const ie = A("playingVideo", { shown: !1 });
    if (F(ie, "pause", () => e.ended ? j() : q()), F(ie, "ended", j), F(ie, "error", _), o() && yo(Number(e.duration), n()) >= r()) {
      const ke = e.loop;
      e.loop = !0, S.push(() => {
        e.loop = ke;
      });
    }
    const Q = (ke, Fe) => {
      Fe && !ie.shown && (ie.shown = !0, u()), ne(yo(ke, n()));
    };
    if (k()) {
      let ke = e.requestVideoFrameCallback(function Fe(pt, Ye) {
        v === ie && (Q(Number(Ye.mediaTime), !0), v === ie && (ke = e.requestVideoFrameCallback(Fe)));
      });
      S.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, ke);
      });
    } else
      B(ie, () => Q(Number(e.currentTime), e.readyState >= xd));
    return Promise.resolve(e.play()).catch(() => {
      v === ie && q();
    }), ie;
  }
  function j() {
    c(), xe();
  }
  function xe() {
    const ie = A("playingClock", { startTs: t.now(), startFrame: d });
    return B(ie, (Q) => ne(ie.startFrame + Math.floor((Q - ie.startTs) / 1e3 * n()))), ie;
  }
  function ne(ie) {
    if (ie < r()) {
      V(ie);
      return;
    }
    if (!o()) {
      J(r() - 1);
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), V(0), W("play");
  }
  function J(ie) {
    v.name === "playingVideo" ? (P(), e.pause(), V(Math.max(0, ie)), c()) : V(Math.max(0, ie)), W("still");
  }
  function q() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      P(), e.pause();
      const ie = Q2(Number(e.currentTime), n());
      V(Math.min(ie, r() - 1)), c(), d === ie ? z() : W("still");
    } else v.name === "playingClock" && J(Math.min(d, r() - 1));
  }
  function U() {
    if (!O()) {
      if (d >= r() - 1 && V(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      W("play");
    }
  }
  function H(ie) {
    const Q = Math.max(0, Math.round(ie));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", V(Q), u();
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), V(Q), W("still");
  }
  function O() {
    return v.name === "playingVideo" || v.name === "playingClock" || v.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return v.name;
    },
    get playing() {
      return O();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return v.name === "playingVideo" || v.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return v.name === "playingVideo" && v.shown;
    },
    play: U,
    stop: q,
    seek: H,
    toggle() {
      O() ? q() : U();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(ie) {
      P(), b = !!ie, y = !1, W("still");
    },
    dispose() {
      P(), b = !1, v = { name: "idle" };
    }
  };
}
function _1({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(P) {
    u = P, t();
  }
  function y(P) {
    c = P, e.currentTime = P;
  }
  function v() {
    const P = d;
    S(), d !== P && n();
  }
  function S() {
    if (!r || o || e.readyState < xd) return;
    const { time: P, playing: A, fps: F } = a;
    if (P === null) {
      e.pause(), d = !1;
      return;
    }
    if (A) {
      if (c !== null) return;
      const B = Number(e.duration), V = Number.isFinite(B) ? Math.min(P, B) : P, z = Math.abs(Number(e.currentTime) - V) > 1.5 / F;
      if (e.ended && !z) return;
      z && y(V), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || u === P) && (Number(e.currentTime) === P ? b(P) : y(P));
  }
  const N = {
    loadeddata: v,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: v,
    seeked: () => {
      const P = c;
      c = null, !a.playing && P === a.time ? b(P) : v();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [P, A] of Object.entries(N)) e.addEventListener(P, A);
  function k(P) {
    r = P, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: P = "", time: A = null, playing: F = !1, fps: B }) {
      P !== r && (k(P), n()), a = { time: A, playing: F, fps: B }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(P, A) {
      return !r || o ? A : a.time === null ? null : a.playing && d ? e : u === null ? A : P;
    },
    dispose() {
      for (const [P, A] of Object.entries(N)) e.removeEventListener(P, A);
      k("");
    }
  };
}
function eP(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function tP({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d, camera: b = !1 }) {
  let y = "", v = "", S = 0;
  const N = /* @__PURE__ */ new Set();
  let k = null, P = null;
  const A = () => o().timeline.fps, F = (j) => j.stickers.find((xe) => xe.source.kind === "port"), B = () => {
    const j = o(), xe = F(j);
    return Ib(j, {
      minimum: Math.round(A() * 5),
      frames: Math.max(
        y ? Math.round(S * A()) : 0,
        k && xe ? a1(xe.clip, A(), k.meta) : 0
      ),
      camera: b
    });
  }, V = v1({
    video: e,
    clock: r,
    fps: A,
    span: B,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), z = () => {
    v === y && Number.isFinite(e.duration) && (S = e.duration);
  }, _ = () => {
    v && (N.add(v), d());
  }, R = _1({ video: t, onCapture: u, onChange: d }), W = l1({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", z), e.addEventListener("error", _);
  function ce(j) {
    j !== v && (v = j, e.pause(), j ? e.src = j : e.removeAttribute("src"), e.load(), V.setSource(!!j));
  }
  function Se() {
    V.playing && V.stop();
  }
  function E(j) {
    const xe = F(j);
    P = k && xe ? o1(xe.clip, V.frame, j.timeline.fps, k.meta) : null, R.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: P,
      playing: V.advancing,
      fps: j.timeline.fps
    });
  }
  return {
    get frame() {
      return V.frame;
    },
    get playing() {
      return V.playing;
    },
    get showsVideo() {
      return V.showsVideo;
    },
    get source() {
      return v;
    },
    pause: Se,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(j, xe) {
      return k != null && k.frames ? W.picture(k.frames, P, k.meta, xe) : R.picture(j, xe);
    },
    toggle() {
      V.playing ? V.stop() : V.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: j, sources: xe, state: ne, sticker: J = null }) {
      if (k = j ? J : null, !j)
        return Se(), ce(""), E(ne), !1;
      for (const ie of N)
        xe.includes(ie) || N.delete(ie);
      const q = xe.find((ie) => ie && !N.has(ie)) || "", U = q !== y;
      U && (y = q, S = 0), ce(y);
      const H = Cb(ne, { camera: b }) || !!y && V.state !== "error" || !!k;
      return H || Se(), (U || !H || !V.playing && V.frame >= B()) && V.frame !== Na && V.seek(Na), E(ne), H;
    },
    dispose() {
      V.dispose(), R.dispose(), e.removeEventListener("loadedmetadata", z), e.removeEventListener("error", _), e.pause(), e.removeAttribute("src"), e.load(), v = "";
    }
  };
}
const Oc = Math.PI / 180, Zr = 180 / Math.PI, nP = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), rP = 260;
function d0(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function w1(e, t) {
  return t ? w1(t, e % t) : e;
}
function iP(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = w1(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function Ks(e, t) {
  const n = d0(e), r = d0(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: iP(n, r) };
}
function Co(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function S1(e) {
  const t = Co(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? gi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Op(e, t, n = nP) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (A, F, B) => {
    const V = A + F, z = Math.max(0, B - 1), _ = V > z && V > 0 ? z / V : 1;
    return [A * _, F * _];
  }, [y, v] = b(d, c, r), [S, N] = b(a, u, o), k = {
    x: y,
    y: S,
    w: Math.max(1, r - y - v),
    h: Math.max(1, o - S - N)
  }, P = ap(k, t);
  return {
    x: k.x + (k.w - P.width) * 0.5,
    y: k.y + (k.h - P.height) * 0.5,
    w: P.width,
    h: P.height,
    safeRect: k
  };
}
function oP(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Op({ width: n, height: r }, 1), a = re(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * Oc * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = cb(d, ob(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), y = aP(b, Aa(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = sp({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function x1(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Zr),
    pitch: re(Math.asin(re(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Zr, -89.9, 89.9)
  };
}
function aP(e, t) {
  const n = x1(e), r = Aa(n.yaw, n.pitch, 0), o = ff(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, c = Math.hypot(a.x, a.y, a.z);
  if (!(c > 1e-8)) return { ...n, roll: 0 };
  const u = {
    x: a.x / c,
    y: a.y / c,
    z: a.z / c
  };
  return {
    ...n,
    roll: Qc(Math.atan2(
      ff(u, r.up),
      ff(u, r.right)
    ) * Zr)
  };
}
function k1(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Op({ width: n, height: r }, Po(e)), a = No(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = cb(e, ob(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = x1(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: re(2 * Math.atan(n / (2 * a)) * Zr, 1, 179)
  };
}
function sP(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = No(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: y } = lp(d, u), v = {
    x: a - b,
    y: c - y,
    w: b * 2,
    h: y * 2
  }, S = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, N = r / o, k = Math.tan(rd * Oc), P = N >= 1 ? k : k * N, A = N >= 1 ? k / N : k;
  return {
    focalPx: u,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Zr,
      vFOV_deg: 2 * Math.atan(y / u) * Zr
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(P) * Zr,
        vFOV_deg: 2 * Math.atan(A) * Zr
      }
    }
  };
}
function Qo(e, t) {
  const n = Co(e);
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
function lP(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = No(n, e);
    return sp(ap(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Ul(a, t) };
}
function p0(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Ks(t, n);
  if (!a) return e;
  const c = Po(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Ks(a.height, a.width));
  const u = lP(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function M1(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Co(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = ab({
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
    const r = Co(e);
    if (!r) return { state: e, changed: !1 };
    const o = (Array.isArray(e.shots) ? e.shots : []).filter((c) => c !== r), a = ((n = o[0]) == null ? void 0 : n.id) == null ? null : String(o[0].id);
    return {
      state: {
        ...e,
        shots: o,
        active: { ...e.active || {}, selected_shot_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Qo(e, (r) => p0(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Qo(e, (r) => {
      const a = String(gi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Ks(a[1], a[2]) : Ks(Po(r), 1);
      return c ? p0(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Qo(e, (o) => {
      const a = Qc(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Qo(e, (r) => {
    const o = sb(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Qo(e, (r) => {
    const o = lb(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Qo(e, (r) => {
    const o = A1(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function N1({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const u = a && o ? "alt" : r ? "shift" : "";
  if (!u || !e || !t) return null;
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, b = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && y < Math.min(d.w, d.h) * c) return null;
  const v = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: v,
    accumulatedRad: 0
  };
}
function P1(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + rb(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: ib(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function A1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Oc, d = Math.cos(u), b = Math.sin(u), y = a / n, v = -c / n, S = y * d - v * b, N = y * b + v * d, k = Number(e.pitch_deg || 0) * Oc, P = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(S) / P * Zr),
    pitch_deg: re(Number(e.pitch_deg || 0) - Math.atan(N) * Zr, -90, 90)
  };
}
function cP({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return c1({
    readState: e,
    reduce: M1,
    projectModel: S1,
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
}), uP = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, fP = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: uP(t[2])
})), dP = {
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
}, h0 = Object.fromEntries(
  Object.entries(dP).map(([e, t]) => [e, {
    name: t.name,
    elements: fP(t.body)
  }])
), jt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = yt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(h0, r) ? h0[r] : null;
    });
    return (r, o) => n.value ? (ae(), fe("svg", {
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
      (ae(!0), fe(Xe, null, kt(n.value.elements, (a, c) => (ae(), fe(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ae(), fe("path", bi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ae(), fe("circle", bi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ae(), fe("rect", bi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ae(), fe("line", bi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ae(), fe("polyline", bi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ae(), fe("polygon", bi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : dt("", !0)
      ], 64))), 128))
    ], 2)) : dt("", !0);
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
    const t = e, n = yt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ae(), wr(_x(e.tag), bi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Sy(() => [
        Le(jt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, pP = ["aria-expanded", "disabled"], hP = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, mP = ["data-aspect", "disabled", "onClick"], gP = { class: "pano-cutout-aspect-custom" }, yP = ["disabled"], bP = ["disabled"], vP = ["data-custom-width", "data-custom-height", "disabled"], C1 = {
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
    ]), a = /* @__PURE__ */ Jt("1"), c = /* @__PURE__ */ Jt("1"), u = /* @__PURE__ */ Jt(null), d = yt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = yt(() => {
      const P = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], A = String(n.model.aspectLabel || "");
      return P.length ? P.map((F) => {
        const B = typeof F == "string" ? F : String((F == null ? void 0 : F.value) || ""), V = typeof F == "string" ? F : String((F == null ? void 0 : F.label) || B);
        return {
          ...typeof F == "object" && F ? F : {},
          value: B,
          label: V,
          active: A ? B === A : (F == null ? void 0 : F.active) === !0
        };
      }) : o.map((F) => ({
        ...F,
        active: F.value === A
      }));
    }), y = yt(() => {
      var A;
      const P = String(n.model.aspectLabel || "").trim();
      return P || String(((A = b.value.find((F) => F.active === !0)) == null ? void 0 : A.label) || "Aspect");
    });
    ko(y, (P) => {
      const A = String(P || "").match(/^([0-9.]+):([0-9.]+)$/);
      A && (a.value = A[1], c.value = A[2]);
    }, { immediate: !0 });
    function v(P) {
      r("action", P);
    }
    function S(P) {
      var A;
      n.model.aspectOpen === !0 && ((A = u.value) != null && A.contains(P.target) || v({ type: "close-aspect" }));
    }
    Yc(() => {
      document.addEventListener("pointerdown", S, !0);
    }), qs(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function N(P) {
      const [A, F] = String(P.value || "").split(":");
      v({
        type: "set-aspect",
        width: A,
        height: F,
        preserveOrientation: !0
      });
    }
    function k() {
      v({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (P, A) => (ae(), fe("div", {
      ref_key: "rootElement",
      ref: u,
      class: ft(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ae(), wr(dn, {
        key: 0,
        icon: e.model.aspectIcon || et(Pe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: A[0] || (A[0] = (F) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ae(), fe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: A[1] || (A[1] = (F) => v({ type: "toggle-aspect" }))
      }, [
        Le(jt, {
          icon: e.model.aspectIcon || et(Pe).aspect
        }, null, 8, ["icon"]),
        X("span", null, tt(y.value), 1),
        Le(jt, {
          icon: et(Pe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, pP)),
      xi(X("div", hP, [
        (ae(!0), fe(Xe, null, kt(b.value, (F) => (ae(), fe("button", {
          key: F.value,
          class: ft(["pano-btn pano-frame-aspect-choice", { active: F.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": F.value,
          disabled: d.value,
          onClick: (B) => N(F)
        }, tt(F.label), 11, mP))), 128)),
        X("div", gP, [
          xi(X("input", {
            "onUpdate:modelValue": A[2] || (A[2] = (F) => a.value = F),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, yP), [
            [Sg, a.value]
          ]),
          A[4] || (A[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          xi(X("input", {
            "onUpdate:modelValue": A[3] || (A[3] = (F) => c.value = F),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, bP), [
            [Sg, c.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, vP)
        ])
      ], 512), [
        [Io, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, _P = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, wP = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ae(), fe("div", {
      class: ft(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Dt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Dt(() => {
      }, ["stop"]))
    }, [
      Le(dn, {
        icon: et(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Dt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", _P, [
        o[3] || (o[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Xe, null, kt(et(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, tt(a[0]), 1),
          X("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, SP = {
  class: "pano-view-unavailable",
  role: "status"
}, Ep = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ae(), fe("div", SP, tt(et(Yb)), 1));
  }
}, xP = { class: "pano-cutout-node-surface" }, kP = ["title", "disabled"], MP = { class: "value" }, NP = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, PP = {
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
    return (r, o) => (ae(), fe("div", xP, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Dt(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Dt(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Le(jt, {
            icon: et(Pe).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        Le(dn, {
          icon: e.model.hasShot ? et(Pe).delete : et(Pe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Le(C1, {
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
          onDblclick: o[2] || (o[2] = Dt((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Le(jt, {
            icon: et(Pe).roll
          }, null, 8, ["icon"]),
          X("span", MP, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, kP),
        Le(dn, {
          icon: et(Pe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Le(wP)
      ], 32),
      e.model.hasShot === !1 ? (ae(), fe("div", NP, " Choose a view · + Add Frame ")) : dt("", !0),
      e.model.viewUnavailable ? (ae(), wr(Ep, { key: 1 })) : dt("", !0)
    ]));
  }
}, I1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Jt(null);
    let a, c = !1;
    function u() {
      if (!c) return { active: !1, intent: void 0 };
      const v = a;
      return a = void 0, c = !1, { active: !0, intent: v };
    }
    function d(v) {
      const S = o.value;
      return S instanceof HTMLInputElement ? (a = v, c = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(v) {
      var P, A;
      const { active: S, intent: N } = u();
      if (!S) return;
      const k = ((A = (P = v.target) == null ? void 0 : P.files) == null ? void 0 : A[0]) || null;
      if (k) {
        r("file-selected", { intent: N, file: k });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function y() {
      const { active: v, intent: S } = u();
      v && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (v, S) => (ae(), fe("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: y
    }, null, 544));
  }
}, AP = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, CP = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), n = Object.freeze([
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
    return (r, o) => (ae(), fe("div", {
      class: ft(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Dt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Dt(() => {
      }, ["stop"]))
    }, [
      Le(dn, {
        icon: et(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Dt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", AP, [
        o[3] || (o[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Xe, null, kt(et(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, tt(a[0]), 1),
          X("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, IP = { class: "pano-stickers-node-surface" }, OP = ["disabled"], EP = ["aria-label", "data-tip"], FP = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, TP = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, DP = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Jt(null);
    function r(c) {
      var u;
      (u = t.onAction) == null || u.call(t, c);
    }
    function o() {
      var c, u;
      (u = (c = n.value) == null ? void 0 : c.open) == null || u.call(c, "add");
    }
    function a(c) {
      r({ type: "add-image-file", file: (c == null ? void 0 : c.file) || null });
    }
    return (c, u) => (ae(), fe("div", IP, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Dt(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Dt(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          Le(jt, {
            icon: et(Pe).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Le(jt, {
            icon: et(Pe).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, OP),
        Le(dn, {
          icon: e.model.locked ? et(Pe).lock_closed : et(Pe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Le(dn, {
          icon: et(Pe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Le(dn, {
          icon: et(Pe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Le(dn, {
          icon: e.model.isExternalSelection ? et(Pe).back_initial : et(Pe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Le(CP)
      ], 32),
      e.model.playable === !0 ? (ae(), fe("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Dt(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Dt(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        Le(jt, {
          icon: e.model.playing ? et(Pe).pause : et(Pe).play
        }, null, 8, ["icon"])
      ], 40, EP)) : dt("", !0),
      e.model.hasStickers === !1 ? (ae(), fe("div", FP, " Add Image to place a sticker ")) : dt("", !0),
      e.model.dropActive === !0 ? (ae(), fe("div", TP, "Drop image to add")) : dt("", !0),
      Le(I1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ae(), wr(Ep, { key: 3 })) : dt("", !0)
    ]));
  }
}, m0 = 24;
function LP(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Is(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function O1(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function kd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Is(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Is(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : O1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function RP(e, t, { edges: n = !1, resize: r = !0, emptyCursor: o = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const c = e.edgeMidpoints.find((u) => Is(u, t) <= 169);
    if (c) {
      const u = c.edge === "left" || c.edge === "right";
      return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
    }
  }
  const a = r ? e.corners.findIndex((c) => Is(c, t) <= 121) : -1;
  if (a >= 0) {
    const c = e.corners[a], u = c.x - e.center.x, d = c.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: u * d >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Is(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : O1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: o };
}
function Fp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function E1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ls(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: re(n.x, -r, t.width + r),
    y: re(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function VP(e) {
  const t = Aa(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(re(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * xt * 0.5),
    tanY: Math.tan(re(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * xt * 0.5)
  };
}
function po(e, t, n) {
  return op(bc(
    bc(e.centerDir, vc(e.right, t)),
    vc(e.up, n)
  ));
}
function Tp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = VP(e), r = ls(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    po(n, -n.tanX, n.tanY),
    po(n, n.tanX, n.tanY),
    po(n, n.tanX, -n.tanY),
    po(n, -n.tanX, -n.tanY)
  ].map((S) => ls(S, t)), a = Array.from({ length: 4 }, (S, N) => {
    const k = [];
    for (let P = 0; P <= 28; P += 1) {
      const A = P / 28;
      let F, B;
      N === 0 ? (F = -n.tanX + 2 * n.tanX * A, B = n.tanY) : N === 1 ? (F = n.tanX, B = n.tanY - 2 * n.tanY * A) : N === 2 ? (F = n.tanX - 2 * n.tanX * A, B = -n.tanY) : (F = -n.tanX, B = -n.tanY + 2 * n.tanY * A);
      const V = ls(po(n, F, B), t);
      V && k.push({ x: V.x, y: V.y });
    }
    return k;
  }), c = ls(po(n, 0, n.tanY), t), u = ls(
    po(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, u];
  if (d.some((S) => !S || !Number.isFinite(S.x) || !Number.isFinite(S.y)))
    return { visible: !1 };
  if (!d.some((S) => S.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - c.x, y = u.y - c.y, v = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((S) => ({ x: S.x, y: S.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / v * m0,
      y: c.y + y / v * m0
    },
    visible: !0
  };
}
function g0(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Tp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = kd(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = kd(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function $P(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(r.x, r.z) * pn),
    pitch_deg: Math.asin(re(r.y, -1, 1)) * pn
  };
}
function zP(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: re(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: re(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function jP(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * pn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Fl = null;
function Dp() {
  return Fl || (Fl = new Promise((e) => {
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
  }), Fl);
}
function yr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function HP(e, t = 1024) {
  const n = Math.max(1, Math.round(yr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(yr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function GP(e, t, n) {
  const r = yr(t), o = yr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = yr(a.u0), u = yr(a.v0), d = yr(a.u1), b = yr(a.v1);
  if (d <= c || b <= u) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + yr(y.du)) * r,
    centerY: ((u + b) * 0.5 + yr(y.dv)) * o,
    width: (d - c) * r,
    height: (b - u) * o,
    rotationRad: yr(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, yr(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function KP(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), o = (e == null ? void 0 : e.bbox) || {}, a = (e == null ? void 0 : e.transform) || {};
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
    a.du,
    a.dv,
    a.rot_deg,
    a.scale
  ].join(":");
}
function WP() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, c] of e) {
        if (e.size <= 16) break;
        c.settled && (c.image.onload = null, c.image.onerror = null, e.delete(a));
      }
  }
  function r(a, c) {
    let u = e.get(a);
    if (u)
      return e.delete(a), e.set(a, u), !u.settled && typeof c == "function" && u.listeners.add(c), u.image;
    const d = new Image();
    u = { image: d, listeners: new Set(typeof c == "function" ? [c] : []), settled: !1 }, e.set(a, u);
    const b = () => {
      u.settled = !0;
      const y = [...u.listeners];
      u.listeners.clear(), y.forEach((v) => v()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, c, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), y = GP(a, c, u);
    if (!b.startsWith("data:") || !y) return null;
    const v = KP(a, c, u), S = String((a == null ? void 0 : a.id) || "").trim() || v, N = t.get(S);
    if ((N == null ? void 0 : N.revision) === v) return { source: N.source, revision: v };
    const k = r(b, d), P = Number(k.naturalWidth || k.width || 0), A = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || P < 1 || A < 1) return null;
    const F = Sn({ label: "raster-object" });
    F.width = Math.max(1, Math.round(c)), F.height = Math.max(1, Math.round(u));
    const B = F.getContext("2d");
    return B ? (y.wrapOffsets.forEach((V) => {
      B.save(), B.translate(y.centerX + V, y.centerY), B.rotate(y.rotationRad), B.scale(y.scale, y.scale), B.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), B.restore();
    }), t.set(S, { revision: v, source: F }), { source: F, revision: v }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const c = new Set(Array.from(a, (u) => String(u || "").trim()).filter(Boolean));
      for (const u of t.keys())
        c.has(u) || t.delete(u);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function BP(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function UP(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function YP({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const S = r.get(v.owner);
    (S == null ? void 0 : S.get(v.key)) === v && S.delete(v.key);
  }
  function c(v, S, N, k) {
    if (!v || typeof k != "function" || N.settled) return;
    let P = r.get(v);
    P || (P = /* @__PURE__ */ new Map(), r.set(v, P));
    const A = P.get(S);
    if ((A == null ? void 0 : A.entry) === N) {
      A.callback = k;
      return;
    }
    a(A);
    const F = { owner: v, key: S, entry: N, callback: k };
    P.set(S, F), N.listeners.add(F);
  }
  function u(v, S) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !S && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(v.image, S);
      } catch {
      }
    }), d(o));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [S, N] of n) {
        if (n.size <= v) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(S));
      }
  }
  function b(v, S, N, k = null) {
    const P = String(S || ""), A = String(N || "");
    if (!P || !A) return null;
    let F = n.get(P);
    if (F)
      n.delete(P), n.set(P, F);
    else {
      d(o - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const z = new V();
      F = { key: P, image: z, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(P, F), z.onload = () => u(F, !0), z.onerror = () => u(F, !1), z.src = A;
    }
    return F.settled || F.image.complete && Number(F.image.naturalWidth || F.image.width || 0) > 0 || c(v, P, F, k), F.image;
  }
  function y(v) {
    const S = r.get(v);
    S && ([...S.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: y };
}
const ms = /* @__PURE__ */ new WeakMap();
function F1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = ms.get(e);
  r || (r = [], ms.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = ms.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && ms.delete(e);
  };
}
function wi(e, ...t) {
  const n = ms.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const nc = Object.freeze({
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
}), T1 = "PanoramaSuite.Editor.ViewControls", XP = {
  id: T1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(nc).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function qP(e) {
  return Object.hasOwn(nc, e) ? nc[e] : nc.default;
}
function JP(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function ZP(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Ec = "state_json";
function Si(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function QP(e) {
  var c, u;
  const t = Si(e, Ec);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Eb(n, {
    coverage: (c = Si(e, "coverage")) == null ? void 0 : c.value
  }), o = M1(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Lp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Si(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, y, v, S, N, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (S = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), (k = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function eA(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function y0(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function tA(e) {
  var y, v, S, N, k, P;
  if (!e) return;
  const t = Si(e, "coverage"), n = Si(e, "bg_color"), r = Si(e, Ec), o = Si(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && eA(a) && (y0(c) || c === ""))) return;
  let b = "360";
  if (y0(c))
    try {
      b = String(qn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (S = n.callback) == null || S.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
}
function rc(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Md(e, t, n) {
  var a, c;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((u) => String((u == null ? void 0 : u.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (c = o.parentEl) != null && c.style && (o.parentEl.style.display = "");
    const u = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(u) || Number(u[0] || 0) <= 0 || Number(u[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function nA(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function gs(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = a.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, a);
  const u = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(u, u), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function D1(e, t = {}) {
  var r;
  await nA(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function rA(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await D1(e), n ? n.apply(this, r) : this.value;
  };
}
function iA(e) {
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
function oA(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function cs(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: c,
  enableStickersPreview: u,
  sceneStateV2: d = !1,
  studio: b = !1
}) {
  if (!(e != null && e.prototype)) return;
  function y(v) {
    var k;
    const S = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === S) return;
    iA(v), Lp(v, t), rc(v, Ec);
    const N = Si(v, Ec);
    if (rA(v, N), N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const P = N.callback;
      N.callback = (A) => {
        var B;
        const F = P ? P(A) : void 0;
        return (B = v.setDirtyCanvas) == null || B.call(v, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const P = Si(v, "bg_color");
      !d && P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (k = P.callback) == null || k.call(P, "#00ff00")), Md(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && rc(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = S;
      return;
    }
    v.__panoSceneStateV2 = d, Md(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && rc(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = S;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const S = e.prototype[v];
    e.prototype[v] = function() {
      const N = S ? S.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && QP(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && tA(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && y(this), v === "onAdded" && k && wi(this, "attach"), N;
    };
  }
}
function aA(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return oA(this), r;
  };
}
function sA(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), u = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = u, !c && u < 40) {
      o(a);
      return;
    }
    Lp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Md(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && rc(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function lA({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  restoreOutput: a,
  requestFrame: c,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [XP, Yk],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Pg],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Pg.id] }],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && cs(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && cs(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), y === "PanoramaStudio" && cs(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && cs(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaCutoutNode" && cs(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), _c(y) && aA(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Lp(d, e), _c(b) && sA(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const cA = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Er(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : cA.test(String(e.name || "")) : !1;
}
function Rp(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Er(n)) : !1;
}
function uA(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (Rp(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, c = (d) => {
    var b;
    d != null && d.relatedTarget && ((b = e.contains) != null && b.call(e, d.relatedTarget)) || n(!1);
  }, u = (d) => {
    var y;
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((v) => Er(v));
    if (!b) {
      n(!1);
      return;
    }
    o(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", u, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", u, !0), n(!1);
  };
}
async function ys(e, t = {}) {
  var c, u, d, b;
  if (!Er(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((v, S) => {
      const N = new n();
      N.onload = () => v(N), N.onerror = () => S(new Error("image load failed")), N.src = a;
    });
    return {
      image: y,
      width: Math.max(1, Number(y.naturalWidth || y.width || 1)),
      height: Math.max(1, Number(y.naturalHeight || y.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function bo(e, { fetchApi: t } = {}) {
  if (!Er(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const o = await r.json(), a = String((o == null ? void 0 : o.name) || "").trim();
  if (!a) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: a,
    subfolder: String((o == null ? void 0 : o.subfolder) || "panorama_stickers"),
    storage: String((o == null ? void 0 : o.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const b0 = /* @__PURE__ */ new WeakSet(), v0 = /* @__PURE__ */ new WeakSet();
let _0 = 0;
function Nd(e) {
  if (!e || typeof e != "object" || v0.has(e)) return e;
  const t = String(e.type || "preview");
  return _0 += 1, e.type = `${t}:pano-${_0}`, v0.add(e), e;
}
function Fc(e) {
  if (!e || typeof e != "object" || b0.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, b0.add(e), e;
}
function L1(e, t) {
  var r, o;
  if (!t || ((o = (r = Fc(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function fA({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Ht } = jl;
E2((e) => Ui(e.id));
F2(qt);
const Vp = YP(), { linkedVideoFile: dA } = i1({ app: Ht, api: qt });
function Pd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (jl == null ? void 0 : jl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const pA = "pano_suite.ui_settings.v1", hA = 120, mA = 2048;
function w0() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(pA)) || "").trim();
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
function gA() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function us(e) {
  var n, r, o, a, c;
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
    stylePos: String(((a = e.style) == null ? void 0 : a.position) || ""),
    styleTransform: String(((c = e.style) == null ? void 0 : c.transform) || "")
  };
}
function yA() {
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
function Ad(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, o) => {
    const a = Number(r), c = Number(o);
    return !Number.isFinite(a) || !Number.isFinite(c) ? null : [a, c];
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
function R1(e) {
  const t = Ad(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function bA(e, t, n) {
  R1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Cd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function $p(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function V1(e) {
  return _c($p(e));
}
function S0(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function $1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Cd(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && ic(e), cC(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Cd(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ic(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      ic(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function vA(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ic(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  Id.unregister(e), vA(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (a = n.state) != null && a.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (u = (c = n.root) == null ? void 0 : c.remove) == null || u.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const y = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), S = Pd();
      return y === S || v === S || y === "pano_preview" || v === "pano_preview" ? !0 : y === "preview" && v === "pano_preview";
    }).forEach((b) => zA(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function _A(e, t = "#00ff00") {
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
function wA(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ba(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Un(e) {
  var u, d;
  const t = wA(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ba(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ba(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? Fb(t, { backgroundColor: r, coverage: o, active: Lb(e) }) : _A(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function ba(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function SA(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function z1(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = SA(e == null ? void 0 : e.graph, n)), r;
}
function xA(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function j1(e, t = []) {
  const n = xA(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Xi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function x0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Tc(e, t) {
  const n = x0(e), r = x0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function kA(e, t) {
  var n;
  return z1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function MA(e, t = Xi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = j1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return $2(e, c, kA);
}
const Id = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = qt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, v, S;
        if (!a) return;
        const c = Tc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...MA(a)].some((N) => Tc(r, N)) || r1(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (H1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (S = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, qt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = qt) != null && e.removeEventListener) || (qt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Dc(e) {
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
  const o = `/view?${n.toString()}`;
  return typeof ((a = qt) == null ? void 0 : a.apiURL) == "function" ? qt.apiURL(o) : o;
}
function NA(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function PA(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function AA(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function CA(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (NA(t)) return [t];
  const { filename: n, subfolder: r } = PA(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Dc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return AA([...o, t]);
}
function IA(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Dc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ui(e) {
  const t = Ht == null ? void 0 : Ht.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Tc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Tc(c, o)) return t[c];
  }
  return null;
}
function Os(e, t, n = null) {
  const r = n || Ui(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function sr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return sr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Dc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = sr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Dc(e);
}
function Lc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Af(e) {
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
function zp(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const o = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", a = new URL(n, o);
    return t > 0 && a.searchParams.set("pano_rev", String(t)), a.toString();
  } catch {
    const o = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${o}pano_rev=${t}` : n;
  }
}
function OA(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function EA(e, t) {
  try {
    e.__panoOwnOutputRev = BP(e.__panoOwnOutputRev);
    const n = OA(t);
    let r = "";
    for (const o of n)
      if (r = sr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), zp(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function va(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function FA(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return va(e), null;
  const o = Ui(r), a = Pp(o, t, sr);
  if (!a)
    return va(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = zp(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  va(e);
  const y = z2({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function TA(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = j1(e, t).map((v) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, S) => ({ input: v, idx: S })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const S = n[v], N = e.graph ? e.getInputLink(v) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const k = N.origin_id, P = z1(e, v, k);
    if (!P) continue;
    const A = Number(N.origin_slot ?? 0), F = Ui((P == null ? void 0 : P.id) ?? k), B = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (B.length) {
      const R = [];
      A >= 0 && A < B.length && R.push(B[A]), R.push(...B);
      for (const W of R.filter((ce) => !ec(ce))) {
        const ce = sr(W);
        if (ce)
          return String((S == null ? void 0 : S.name) || ""), { src: `${ce}&pano_src=${wd(F)}`, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let V = [];
    try {
      V = typeof (Ht == null ? void 0 : Ht.getNodeImageUrls) == "function" ? Ht.getNodeImageUrls(P) || [] : [];
    } catch {
      V = [];
    }
    if (Array.isArray(V) && V.length) {
      const R = [];
      A >= 0 && A < V.length && R.push(V[A]), R.push(...V);
      for (const W of R) {
        const ce = sr(W);
        if (ce)
          return String((S == null ? void 0 : S.name) || ""), { src: ce, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const z = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
    if (z.length) {
      const R = [];
      A >= 0 && A < z.length && R.push(z[A]), R.push(...z);
      for (const W of R) {
        const ce = sr(W);
        if (ce)
          return String((S == null ? void 0 : S.name) || ""), { src: ce, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const _ = (b = P == null ? void 0 : P.widgets) == null ? void 0 : b.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (_) {
      let R = sr(_.value);
      if (R && !R.includes("/") && !R.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (R = qt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((S == null ? void 0 : S.name) || ""), { src: R, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const u = xn(e, "background") ? Ui(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const S = sr(v);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function DA(e, t = [], n = {}) {
  const r = TA(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = CA(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = b, e.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const S = () => {
    var k, P, A, F;
    if (v += 1, v >= a.length) {
      if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (F = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || F.call(A, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[v];
    y.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, k, P;
    ((k = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : k.call(N, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
  }, b.onerror = (N) => {
    var k, P, A, F;
    if (v + 1 < a.length) {
      S();
      return;
    }
    if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (F = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || F.call(A, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, S(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function LA(e, t = [], n = null, r = {}) {
  const o = DA(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function H1(e) {
  var t, n;
  if (e) {
    Vp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, va(e), e.__panoWrappedErpCache = null;
  }
}
function RA(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, va(e), e.__panoWrappedErpCache = null;
  }
}
function G1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Tl(e, t, n = "") {
  const r = G1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < hA ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function k0(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function VA(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function Cf(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function $A(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const o = t.find((a) => String((a == null ? void 0 : a.id) || "") === n);
    if (o) return o;
  }
  return t[0] || null;
}
function zA(e, t) {
  return L1(e, t);
}
function Ws(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let a = IA(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const N = Ui(e == null ? void 0 : e.id), k = ((S = N == null ? void 0 : N.ui) == null ? void 0 : S.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const P of Array.isArray(k) ? k : [k])
      if (a = sr(P), a) break;
  }
  if (!a) return null;
  const c = Os(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? zp(a, d) : a, y = UP(a, u, d);
  return Vp.get(e, y, b, (N, k) => {
    var P, A;
    k && (r != null && r.external && e.__panoOutputFromRun && wi(e, "image-loaded"), (A = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || A.call(P));
  }) || null;
}
function jA(e, t) {
  var v, S, N, k;
  const n = BA(e, t), r = UA(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((P) => P && typeof P == "object").map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), Number((P == null ? void 0 : P.z_index) || 0)])
  ), c = n ? r.map((P) => {
    const A = n.getGroupDisplayCanvas(P);
    return A ? {
      id: `paint_group:${P}`,
      source: A,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${P}`,
      zIndex: Number(a.get(P) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || k.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = WP()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var P, A;
    return (A = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : A.call(P);
  });
  const d = HP(t == null ? void 0 : t.output_preset), b = u.filter((P) => (P == null ? void 0 : P.visible) !== !1 && String((P == null ? void 0 : P.layerKind) || "paint") === "paint").map((P) => String((P == null ? void 0 : P.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((P) => {
    const A = e.__panoRasterObjectSurfaceCache.get(
      P,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return A ? {
      id: `raster:${String((P == null ? void 0 : P.id) || "")}`,
      source: A.source,
      revision: A.revision,
      zIndex: Number((P == null ? void 0 : P.z_index) || 0),
      opacity: 1,
      visible: (P == null ? void 0 : P.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function HA(e, t, n, r) {
  var a, c, u, d, b, y;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const v = r.convertEventToCanvasOffset(t);
      if (Array.isArray(v) && v.length >= 2)
        return {
          x: Number(v[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(v[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = KA(e, t, r);
  return o || null;
}
function GA(e, t) {
  var v, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((S = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : S.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function KA(e, t, n) {
  var o, a;
  const r = GA(t, n || (Ht == null ? void 0 : Ht.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function WA(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function BA(e, t) {
  var b, y, v, S, N, k, P, A, F, B, V, z;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (S = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : S.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = WA(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = td(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.paint) !== d.paint || ((A = e.__panoPreviewPaintRevision) == null ? void 0 : A.mask) !== d.mask || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== d.groups || ((B = e.__panoPreviewPaintRevision) == null ? void 0 : B.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function UA(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function YA(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function XA(e, t, n) {
  const r = Tp(t, n);
  r.visible && Fp(e, r.boundaryEdges, { selected: !1 });
}
function qA(e, t, n) {
  const r = Tp(t, n);
  r.visible && (e.save(), Fp(e, r.boundaryEdges, { selected: !0 }), E1(e, r, { accent: LP(t) }), e.restore());
}
function Od(e, t, n) {
  return Bb(Ac(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Rc(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Na;
}
function JA(e) {
  return [xn(e, "background") ? Pp(Ui(e.id), ["pano_input_videos"], sr) : "", dA(e, Xi)];
}
function ZA(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Ui(e.id), n = Os(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(sr), meta: n };
  const o = Pp(t, ["pano_sticker_input_videos"], sr);
  return o ? { src: o, meta: n } : null;
}
function QA({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function M0(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: ei({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Ws(e, c.id, Db(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), v = s1(b.playback.stickerMedia, u);
        return y ? { media: y, revision: Af(y), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = Ws(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Lc(u) ? { media: u, revision: Af(u) } : null;
  }, o = (t.painting_visible === !1 ? [] : jA(e, t)).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Lc(n) ? { media: n, revision: Af(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Ub(e.__panoSurfaceScene.sceneState, Rc(e), t.stickers, { media: r, paintLayers: o })
  };
}
function eC(e, t, n) {
  var z, _, R, W, ce, Se, E;
  const r = String(e.__panoPreviewMode || "stickers");
  G1(e, r);
  const o = Un(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (R = (_ = (z = e.__panoCutoutNodeSurface) == null ? void 0 : z.session) == null ? void 0 : _.refresh) == null || R.call(_)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (Se = (ce = (W = e.__panoStickersNodeSurface) == null ? void 0 : W.session) == null ? void 0 : ce.refresh) == null || Se.call(ce));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const y = (e.__panoSurfacePlayback ? QA(e.__panoSurfacePlayback) : FA(e, ["pano_input_videos"], () => {
    var j, xe;
    return (xe = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : xe.call(j);
  })) || LA(
    e,
    Xi,
    () => {
      var j, xe;
      return (xe = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : xe.call(j);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Lc(y);
  let S = null;
  const N = (j, xe) => {
    S || (S = M0(e, o, y));
    const ne = n.render({ width: j.w, height: j.h, camera: xe, ...S });
    return ne && d.drawImage(ne.canvas, ne.x, ne.y, ne.width, ne.height, j.x, j.y, j.w, j.h), !!ne;
  };
  if (r === "cutout") {
    const j = $A(o), xe = YA(y), ne = j ? re(Pi(j).aspect, 0.1, 10) : v ? re(Number(xe.width / xe.height), 0.05, 20) : 1, J = Op(b, ne);
    e.__panoCutoutNodeFrame = J;
    let q = "none";
    const U = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (j)
      if (y && !v)
        q = "loading";
      else if (v) {
        const H = sP({ width: c, height: u }, J, j);
        [
          !H.fallback || N(H.fallback.rect, Cs(H.fallback.shot)),
          N(H.rect, Cs(H.shot)),
          !H.fallback || N(J, Cs(j))
        ].every(Boolean) || (q = "loading");
      } else
        q = "empty";
    else {
      const H = e.__panoLastCutoutShot;
      H ? (e.__panoPreviewView = k1(H, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? N(b, Ac(e.__panoPreviewView, c, u)) || (q = "loading") : y ? q = "loading" : q = "empty";
    }
    v || n.release(), n.failed && q === "loading" && (q = "none"), j && (e.__panoLastCutoutShot = { ...j }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(J.x, J.y, J.w, J.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(J.x + 0.5, J.y + 0.5, Math.max(0, J.w - 1), Math.max(0, J.h - 1)), d.restore()), q === "loading" ? (Cf(e, !1), Tl(e, !0, U)) : q === "empty" ? (Cf(e, !0), Tl(e, !1, "")) : (Cf(e, !1), Tl(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || v) && (S = M0(e, o, y), !S.background && !S.layers.length ? (n.release(), k = !0) : k = N(b, Ac(e.__panoPreviewView, c, u)));
  const P = !k && !n.failed;
  Tl(e, P, P ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), P && VA(d, b, k0(t, b));
  const A = Od(e, c, u);
  !y && k && tC(d, A, k0(t, b));
  const F = String(((E = o == null ? void 0 : o.active) == null ? void 0 : E.selected_sticker_id) || ""), B = Sd(o, Rc(e)), V = k ? B.find((j) => String((j == null ? void 0 : j.id) || "") === F && (j == null ? void 0 : j.visible) !== !1) : null;
  k && B.filter((j) => j !== V && (j == null ? void 0 : j.visible) !== !1 && (j.external || j.source_kind === "external_image")).filter((j) => !Lc(Ws(e, j.id, null, { external: !0 }))).forEach((j) => XA(d, j, A)), V && qA(d, V, A);
}
function N0(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const c of t) {
    const u = n.project(c);
    if (u.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(u.x, u.y) : (e.moveTo(u.x, u.y), a = !0);
  }
  e.stroke();
}
function tC(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Jn(b, u));
    N0(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Jn(u, b));
    N0(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Jn(0, 0) },
    { name: "Right", dir: Jn(90, 0) },
    { name: "Back", dir: Jn(180, 0) },
    { name: "Left", dir: Jn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Ed(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function nC(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function mr(e, t) {
  return nC(e, t) ? !1 : (Ed(e), !0);
}
function P0() {
  var n;
  const e = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function rC(e) {
  var n;
  if (!e) return;
  const t = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function iC(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !R1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function oC(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function A0(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && aC(e, 180, t);
    }
  };
}
function aC(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function bs(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const sC = /* @__PURE__ */ new WeakMap();
function K1(e, t) {
  return r1(sC, e, t) ? !1 : (EA(e, t), H1(e), bs(e), !0);
}
async function lC(e) {
  var n, r;
  const t = await R2(e, Ht, qt);
  t && (K1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function cC(e, t = {}) {
  var qi;
  const n = t.__allowStandalone === !0, r = V1(e);
  if (r && !n) {
    $p(e);
    return;
  }
  r && iC(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: S0(e)
  }, u = "dom", d = c.signature || S0(e);
  if (Number(e.__panoRebindGeneration || 0), Cd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Ad(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (qi = e.__panoDomPreview) != null && qi.widget || (e.__panoLegacyPreviewHooked && ic(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, v = b ? 0 : rP, S = document.createElement("div");
  if (yA(), S.className = "pano-node-preview-dom", S.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    v > 0 ? `min-height:${v}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const G = Fc(Nd(
      e.addDOMWidget(Pd(), "preview", S, A0(e, null))
    ));
    bs(e), e.__panoDomPreview = { widget: G, root: S, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const N = document.createElement("div");
  N.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const k = Sn({ label: "node.surface" });
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
  const P = document.createElement("div");
  P.style.cssText = [
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
  ].join(";"), P.textContent = "Connect ERP image", N.appendChild(k), N.appendChild(P), S.appendChild(N);
  const A = nb(S), F = document.createElement("div");
  F && (F.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(F)), bA(e, 120, 120), bs(e);
  let B = null;
  try {
    oC(e, y, () => {
      var G, ve;
      return (ve = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : ve.call(G);
    }), B = Fc(Nd(e.addDOMWidget(
      Pd(),
      "preview",
      S,
      A0(
        e,
        () => {
          var G, ve;
          return (ve = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : ve.call(G);
        },
        y,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const V = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, z = () => {
    V.destroyed || (V.needsDraw = !0, !V.inTick && !V.raf && (V.raf = requestAnimationFrame(Ae)));
  }, _ = Xb(z), R = /* @__PURE__ */ Pa(o ? { ...b1(Un(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...S1(Un(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((G) => ({ value: G, label: G }))
  });
  let W = null;
  if (o && e.__panoSceneStateV2) {
    const [G, ve] = [0, 1].map(() => {
      const Ie = Zc(document, "node.playback");
      return Ie.playsInline = !0, Ie.preload = "auto", Ie.crossOrigin = "anonymous", Ie.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Ie), Ie;
    }), De = Sn({ label: "node.still" });
    De.__panoFrameIdx = 0;
    const se = Sn({ label: "node.port-still" });
    se.__panoFrameIdx = 0;
    const Ue = tP({
      video: G,
      stickerVideo: ve,
      createImage: (Ie, it) => {
        const Mt = new Image();
        return Mt.onload = it, Mt.onerror = it, Mt.src = Ie, Mt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ie) => requestAnimationFrame(Ie),
        cancelFrame: (Ie) => cancelAnimationFrame(Ie)
      },
      readState: () => Un(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: z,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var it;
        if (!(G.videoWidth > 0 && G.videoHeight > 0)) return;
        const Ie = Math.min(1, mA / G.videoWidth);
        De.width = Math.round(G.videoWidth * Ie), De.height = Math.round(G.videoHeight * Ie), (it = De.getContext("2d")) == null || it.drawImage(G, 0, 0, De.width, De.height), De.__panoFrameIdx += 1, z();
      },
      onStickerCapture: () => {
        var Ie;
        ve.videoWidth > 0 && ve.videoHeight > 0 && (se.width = ve.videoWidth, se.height = ve.videoHeight, (Ie = se.getContext("2d")) == null || Ie.drawImage(ve, 0, 0), se.__panoFrameIdx += 1, z());
      },
      onChange: () => {
        R.playing = Ue.playing, z();
      }
    });
    W = { playback: Ue, video: G, still: De, stickerVideo: ve, stickerStill: se, stickerSource: "" }, e.__panoSurfacePlayback = W;
  }
  const ce = () => {
    var Mt;
    const { playback: G, still: ve, stickerStill: De } = W, se = eP(N, !!((Mt = e.flags) != null && Mt.collapsed)), Ue = G.source, Ie = se ? ZA(e) : null, it = G.follow({
      shown: se,
      sources: se ? JA(e) : [],
      state: Un(e),
      sticker: Ie
    });
    ((Ie == null ? void 0 : Ie.src) || "") !== W.stickerSource && (W.stickerSource = (Ie == null ? void 0 : Ie.src) || "", Mg(De)), G.source !== Ue && (Mg(ve), ve.__panoFrameIdx = 0), R.playable = it, R.playing = G.playing;
  }, Se = () => W == null ? void 0 : W.playback.pause();
  let E = null;
  const j = (o ? Z2 : cP)({
    readState: () => Un(e),
    publishLiveState: (G) => {
      G ? (E = G, e.__panoLiveStateOverride = G) : (e.__panoLiveStateOverride === E && (e.__panoLiveStateOverride = null), E = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, z();
    },
    commitState: (G) => {
      var se, Ue, Ie, it;
      const ve = ba(e, "state_json");
      if (!ve) return;
      Rb(e, G.active);
      const De = Vb(e, G);
      $b(e, De, String(ve.value ?? "")) || (ve.value = De, (se = ve.callback) == null || se.call(ve, De), e.__panoStateCache = null, (Ue = e.setDirtyCanvas) == null || Ue.call(e, !0, !0), (it = (Ie = e.graph) == null ? void 0 : Ie.setDirtyCanvas) == null || it.call(Ie, !0, !0));
    },
    onChange: (G) => Object.assign(R, G)
  }), ne = o ? F1(e, (G = "sync", ve = null) => {
    var Ji;
    if (!o || !e.graph || !j || j.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const bt = xn(e, "external-sticker"), Kt = Un(e).stickers.find((kn) => kn.source.kind === "port");
      return j.apply({
        type: "sync-port",
        value: g1(e, {
          pose: bt ? Os(e, "pano_sticker_input_pose", ve) : null,
          image: Kt ? Ws(e, Kt.id, null, { external: !0 }) : null
        })
      });
    }
    const De = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((bt) => String((bt == null ? void 0 : bt.name) || "") === "sticker_image") : -1, se = De >= 0 ? ((Ji = e.getInputLink(De)) == null ? void 0 : Ji.id) ?? null : null;
    if (se == null)
      return j.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const Ue = Os(e, "pano_sticker_input_pose", ve), Ie = Array.isArray(Ue) ? Ue[0] : Ue, it = String(Os(e, "pano_sticker_input_state_hash", ve) ?? ""), Mt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, on = Un(e), tr = (Array.isArray(on == null ? void 0 : on.stickers) ? on.stickers : []).find((bt) => String((bt == null ? void 0 : bt.id) || "") === "sticker_image_1"), an = Ws(e, "sticker_image_1", null, { external: !0 }), Lr = Ie && typeof Ie == "object" ? Ie : tr || { yaw_deg: Mt.yaw, pitch_deg: Mt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return j.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: se,
        stateHash: it,
        pose: Lr,
        imageWidth: Number((an == null ? void 0 : an.naturalWidth) || (an == null ? void 0 : an.width) || 0),
        imageHeight: Number((an == null ? void 0 : an.naturalHeight) || (an == null ? void 0 : an.height) || 0)
      }
    });
  }) : () => {
  };
  let J = 0;
  const q = async (G) => {
    if (!o || !j || !Er(G)) return !1;
    Se();
    const ve = `asset_${Math.random().toString(16).slice(2, 10)}`, De = `st_${Math.random().toString(16).slice(2, 10)}`, se = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    J += 1, R.importing = !0;
    const Ue = gs(e, `add:${ve}`, async () => {
      const Ie = await ys(G), it = await bo(G, {
        fetchApi: (Mt, on) => qt.fetchApi(Mt, on)
      });
      return ke(), j.apply({
        type: "add-sticker",
        value: {
          stickerId: De,
          assetId: ve,
          asset: it,
          imageWidth: Ie.width,
          imageHeight: Ie.height,
          yaw_deg: Number(se.yaw || 0),
          pitch_deg: Number(se.pitch || 0)
        }
      });
    });
    try {
      return await Ue;
    } catch {
      return !1;
    } finally {
      J = Math.max(0, J - 1), R.importing = J > 0, z();
    }
  };
  let U = null, H = null, O = null, ie = !1;
  const Q = () => {
    var G;
    return O && (clearTimeout(O), O = null), ie ? (ie = !1, ((G = j == null ? void 0 : j.commitGesture) == null ? void 0 : G.call(j)) ?? !1) : !1;
  }, ke = () => {
    var se, Ue, Ie;
    const G = Q(), ve = (U == null ? void 0 : U.pointerId) ?? (H == null ? void 0 : H.pointerId);
    if (U = null, H = null, ve != null) {
      try {
        (se = k.hasPointerCapture) != null && se.call(k, ve) && ((Ue = k.releasePointerCapture) == null || Ue.call(k, ve));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const De = ((Ie = j == null ? void 0 : j.commitGesture) == null ? void 0 : Ie.call(j)) ?? !1;
    return G || De;
  }, Fe = () => {
    var se, Ue, Ie;
    const G = Q(), ve = U == null ? void 0 : U.pointerId;
    if (U = null, ve != null) {
      try {
        (se = k.hasPointerCapture) != null && se.call(k, ve) && ((Ue = k.releasePointerCapture) == null || Ue.call(k, ve));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const De = ((Ie = j == null ? void 0 : j.cancelGesture) == null ? void 0 : Ie.call(j)) ?? !1;
    return G || De;
  }, pt = () => ke();
  j && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(pt));
  let Ye = null, $ = !1;
  if (F && j)
    try {
      Dp(), Ye = Qd(o ? DP : PP, {
        model: R,
        onAction: (G) => {
          var se, Ue;
          if ((G == null ? void 0 : G.type) === "toggle-playback") {
            ke(), W == null || W.playback.toggle();
            return;
          }
          if (Se(), (G == null ? void 0 : G.type) === "open-editor") {
            ke(), o || (R.aspectOpen = !1), (se = e.__panoOpenEditor) == null || se.call(e);
            return;
          }
          if (o) {
            if ((G == null ? void 0 : G.type) === "add-image-file") {
              q(G.file);
              return;
            }
            j.apply(G) && z();
            return;
          }
          if ((G == null ? void 0 : G.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((G == null ? void 0 : G.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let ve = G;
          if ((G == null ? void 0 : G.type) === "add-frame") {
            const Ie = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ve = {
              ...G,
              ...oP(Ie, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((G == null ? void 0 : G.type) === "delete-frame") {
            const Ie = Co(Un(e));
            Ie && (e.__panoPreviewView = k1(Ie, {
              width: k.width,
              height: k.height
            }));
          }
          const De = ((Ue = e.__panoCutoutNodeFrame) == null ? void 0 : Ue.safeRect) || null;
          R.aspectOpen = !1, j.apply({ ...ve, safeRect: De }) && z();
        }
      }), Ye.mount(F), $ = !0;
    } catch {
      Ye = null, $ = !1;
    }
  const gt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    W && ce(), z();
  }) : null;
  gt == null || gt.observe(N);
  const Ae = (G) => {
    var De, se;
    V.raf = 0, V.inTick = !0;
    let ve = !1;
    try {
      ve = _t.stepInertia(G), (V.needsDraw || ve) && (V.needsDraw = !1, W && ce(), (De = e.flags) != null && De.collapsed || eC(e, k, _), R.viewUnavailable = _.failed);
    } finally {
      V.inTick = !1;
    }
    (ve || V.needsDraw) && !V.raf && (V.raf = requestAnimationFrame(Ae)), gA() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, Ad(e), us(S), us(N), us(k), us(S.parentElement), us((se = S.parentElement) == null ? void 0 : se.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, _t = ip({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (G) => {
      e.__panoPreviewView = G;
    },
    getViewportSize: () => {
      const G = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(G.width || k.clientWidth || 0)),
        h: Math.max(1, Number(G.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const G = w0();
      return {
        x: G.invert_view_x ? -1 : 1,
        y: G.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      z();
    }
  }), It = o ? N : S, Oe = (G) => {
    const ve = k.getBoundingClientRect();
    return {
      x: (Number(G.clientX) - ve.left) * (k.width / Math.max(1, ve.width)),
      y: (Number(G.clientY) - ve.top) * (k.height / Math.max(1, ve.height))
    };
  }, Ve = (G) => {
    var se, Ue;
    if (!o || !a) return;
    const ve = Un(e), De = g0(
      Sd(ve, Rc(e)),
      String(((se = ve == null ? void 0 : ve.active) == null ? void 0 : se.selected_sticker_id) || ""),
      Oe(G),
      Od(e, k.width, k.height)
    );
    if (!De) {
      k.style.cursor = "grab";
      return;
    }
    if (((Ue = De.item) == null ? void 0 : Ue.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = De.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (G) => {
    var Mt, on, tr, an, Lr, oi, Ji, bt, Kt, kn, Lt;
    if (!mr(G, It) || G.button !== 0) return;
    if (!o) {
      const sn = Co(Un(e)), Mn = e.__panoCutoutNodeFrame;
      if (!sn) {
        (Mt = S.focus) == null || Mt.call(S, { preventScroll: !0 }), (on = k.setPointerCapture) == null || on.call(k, G.pointerId), k.style.cursor = "grabbing", _t.startDrag(G.clientX, G.clientY, G.pointerId);
        return;
      }
      if (sn.locked === !0 || !Mn || !j) return;
      const ai = Oe(G);
      let Oa;
      if (G.shiftKey) {
        const si = N1({
          frame: Mn,
          point: ai,
          startRollDeg: Number(sn.roll_deg ?? sn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!si) return;
        Oa = { kind: "roll", pointerId: G.pointerId, rollGesture: si };
      } else {
        const si = ((tr = Un(e)) == null ? void 0 : tr.ui_settings) || w0();
        Oa = {
          kind: "pan",
          pointerId: G.pointerId,
          startPoint: ai,
          startShot: { ...sn },
          focalPx: No(Mn, sn),
          invertX: si.invert_view_x === !0,
          invertY: si.invert_view_y === !0
        };
      }
      ke(), (an = S.focus) == null || an.call(S, { preventScroll: !0 }), (Lr = k.setPointerCapture) == null || Lr.call(k, G.pointerId), k.style.cursor = "grabbing", j.beginGesture(), U = Oa;
      return;
    }
    if (!a) return;
    const ve = Oe(G), De = Un(e), se = String(((oi = De == null ? void 0 : De.active) == null ? void 0 : oi.selected_sticker_id) || ""), Ue = Od(e, k.width, k.height);
    (Ji = S.focus) == null || Ji.call(S, { preventScroll: !0 });
    const Ie = () => g0(Sd(De, Rc(e)), se, ve, Ue);
    let it = Ie();
    if (it && (W != null && W.playback.playing) && (Se(), it = Ie()), it && j) {
      if (_t.stopMotion(), ke(), String(((bt = it.item) == null ? void 0 : bt.id) || "") !== se && j.apply({ type: "select-sticker", id: it.item.id }), ((Kt = it.item) == null ? void 0 : Kt.locked) === !0) {
        z();
        return;
      }
      const sn = ve, Mn = it.geometry.center;
      H = {
        active: !0,
        kind: it.hit.kind,
        pointerId: G.pointerId,
        startPoint: sn,
        startCenter: { ...Mn },
        startSticker: { ...it.item },
        startDistance: Math.max(1, Math.hypot(sn.x - Mn.x, sn.y - Mn.y)),
        startAngle: Math.atan2(sn.y - Mn.y, sn.x - Mn.x),
        projection: Ue
      }, j.beginGesture(), (kn = k.setPointerCapture) == null || kn.call(k, G.pointerId), k.style.cursor = it.hit.kind === "rotate" ? "grabbing" : it.hit.kind === "move" ? "move" : it.hit.cursor, z();
      return;
    }
    (Lt = k.setPointerCapture) == null || Lt.call(k, G.pointerId), k.style.cursor = "grabbing", _t.startDrag(G.clientX, G.clientY, G.pointerId);
  }), k.addEventListener("pointermove", (G) => {
    if (!o) {
      if (!U) {
        if (!_t.state.drag.active) return;
        mr(G, It), _t.moveDrag(G.clientX, G.clientY, "pano");
        return;
      }
      if (U.pointerId !== G.pointerId || !j) return;
      if (mr(G, It), U.kind === "pan") {
        const De = Oe(G);
        j.updateGesture({
          type: "pan-camera",
          startShot: U.startShot,
          dx: De.x - U.startPoint.x,
          dy: De.y - U.startPoint.y,
          focalPx: U.focalPx,
          invertX: U.invertX,
          invertY: U.invertY
        });
        return;
      }
      const ve = P1(U.rollGesture, Oe(G), G);
      if (!ve) return;
      U.rollGesture = ve.gesture, j.updateGesture({ type: "set-roll", value: ve.rollDeg });
      return;
    }
    if (!H && !_t.state.drag.active) {
      Ve(G);
      return;
    }
    if (H) {
      if (H.pointerId !== G.pointerId || !j) return;
      mr(G, It);
      const ve = Oe(G);
      let De = H.startSticker;
      if (H.kind === "move")
        De = $P(
          H.startSticker,
          {
            x: H.startCenter.x + ve.x - H.startPoint.x,
            y: H.startCenter.y + ve.y - H.startPoint.y
          },
          H.projection
        );
      else if (H.kind === "scale") {
        const se = Math.hypot(ve.x - H.startCenter.x, ve.y - H.startCenter.y);
        De = zP(H.startSticker, H.startDistance, se);
      } else if (H.kind === "rotate") {
        const se = Math.atan2(ve.y - H.startCenter.y, ve.x - H.startCenter.x);
        De = jP(H.startSticker, H.startAngle, se, G.shiftKey === !0);
      }
      j.updateGesture({ type: "set-transform", value: De }), z();
      return;
    }
    !a || !_t.state.drag.active || (mr(G, It), _t.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const T = () => {
    var ve, De;
    if (!U && !H) {
      if (!_t.state.drag.active) return;
      _t.endDrag(), k.style.cursor = "grab", z();
      return;
    }
    if (!j) return;
    const G = (U == null ? void 0 : U.pointerId) ?? (H == null ? void 0 : H.pointerId);
    U = null, H = null;
    try {
      (ve = k.hasPointerCapture) != null && ve.call(k, G) && ((De = k.releasePointerCapture) == null || De.call(k, G));
    } catch {
    }
    j.cancelGesture(), k.style.cursor = "grab", z();
  }, L = (G, ve = !1) => {
    var De, se, Ue, Ie;
    if (!o) {
      if (!U) {
        if (!_t.state.drag.active) return;
        mr(G, It), (De = k.releasePointerCapture) == null || De.call(k, G.pointerId), k.style.cursor = "grab", _t.endDrag(), z();
        return;
      }
      if (U.pointerId !== G.pointerId || !j) return;
      mr(G, It), U = null, (se = k.releasePointerCapture) == null || se.call(k, G.pointerId), k.style.cursor = "grab", ve ? j.cancelGesture() : j.commitGesture(), Ve(G), z();
      return;
    }
    if (H) {
      if (H.pointerId !== G.pointerId || !j) return;
      mr(G, It), H = null, (Ue = k.releasePointerCapture) == null || Ue.call(k, G.pointerId), k.style.cursor = "grab", ve ? j.cancelGesture() : j.commitGesture(), z();
      return;
    }
    !a || !_t.state.drag.active || (mr(G, It), (Ie = k.releasePointerCapture) == null || Ie.call(k, G.pointerId), k.style.cursor = "grab", _t.endDrag(), z());
  };
  k.addEventListener("pointerup", L), k.addEventListener("pointercancel", (G) => L(G, !0)), k.addEventListener("lostpointercapture", T), k.addEventListener("pointerleave", (G) => {
    !o && U || H || _t.state.drag.active && L(G);
  });
  const te = (G) => {
    const ve = document.activeElement;
    if (ve !== S && !S.contains(ve)) return;
    if (G.key === "Escape" && (U || H) && j) {
      T(), Ed(G);
      return;
    }
    if (!o || G.key !== "Delete" && G.key !== "Backspace" || !j) return;
    const De = G.target, se = String((De == null ? void 0 : De.tagName) || "").toUpperCase();
    se === "INPUT" || se === "TEXTAREA" || De != null && De.isContentEditable || R.canDelete === !0 && (Se(), ke(), j.apply({ type: "delete-selected" }) && z(), Ed(G));
  };
  window.addEventListener("keydown", te, !0);
  const pe = fA({
    requestFrame: (G) => requestAnimationFrame(G),
    cancelFrame: (G) => cancelAnimationFrame(G),
    restore: (G) => rC(G)
  }), ge = (G) => {
    var De, se, Ue, Ie, it, Mt;
    if (!mr(G, It)) return;
    if (!o) {
      const on = Co(Un(e));
      if (on && on.locked !== !0 && j) {
        const tr = yc(G);
        tr !== 0 && (ie || (ke(), j.beginGesture(), ie = !0), j.updateGesture({
          type: "step-fov",
          direction: tr
        }) ? (O && clearTimeout(O), O = setTimeout(Q, 180), z()) : j.hasGestureChanges() || (j.cancelGesture(), ie = !1));
      } else if (!on) {
        const tr = P0();
        _t.applyWheelEvent(G) && z(), pe.schedule(tr);
      }
      (De = G.preventDefault) == null || De.call(G), (se = G.stopPropagation) == null || se.call(G), (Ue = G.stopImmediatePropagation) == null || Ue.call(G);
      return;
    }
    if (!a) return;
    const ve = P0();
    _t.applyWheelEvent(G) && z(), (Ie = G.preventDefault) == null || Ie.call(G), (it = G.stopPropagation) == null || it.call(G), (Mt = G.stopImmediatePropagation) == null || Mt.call(G), pe.schedule(ve);
  }, be = o ? [N, k] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    be.forEach((ve) => ve.addEventListener(G, ge, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    k.addEventListener(G, (ve) => mr(ve, It)), N.addEventListener(G, (ve) => mr(ve, It));
  });
  const Ne = ba(e, "state_json");
  let Ce = null, Me = null;
  Ne && !Ne.__panoPreviewPatchedCb && (Ce = Ne.callback, Me = (G) => {
    const ve = Ce ? Ce(G) : void 0;
    return z(), ve;
  }, Ne.callback = Me, Ne.__panoPreviewPatchedCb = Me);
  const me = ba(e, "bg_color");
  let Te = null, Ee = null;
  me && !me.__panoPreviewPatchedCb && (Te = me.callback, Ee = (G) => {
    const ve = Te ? Te(G) : void 0;
    return z(), ve;
  }, me.callback = Ee, me.__panoPreviewPatchedCb = Ee);
  const ze = e.onRemoved, Ke = e.onResize, at = e.onExecuted, st = e.onDragOver, ht = e.onDragDrop;
  let mt = null;
  const Rt = () => {
    o && (R.dropActive = !0, mt && clearTimeout(mt), mt = setTimeout(() => {
      mt = null, R.dropActive = !1;
    }, 140));
  }, Dn = o ? function(G) {
    return (st ? st.apply(this, arguments) : !1) === !0 ? !0 : Rp(G == null ? void 0 : G.dataTransfer) ? (Rt(), !0) : !1;
  } : null, Ln = o ? function(G) {
    var se;
    if ((ht ? ht.apply(this, arguments) : !1) === !0) return !0;
    const De = Array.from(((se = G == null ? void 0 : G.dataTransfer) == null ? void 0 : se.files) || []).find((Ue) => Er(Ue));
    return De ? (mt && clearTimeout(mt), mt = null, R.dropActive = !1, q(De), !0) : !1;
  } : null;
  o && (e.onDragOver = Dn, e.onDragDrop = Ln);
  const ii = o ? uA(S, {
    onActive: (G) => {
      if (G) {
        Rt();
        return;
      }
      mt && clearTimeout(mt), mt = null, R.dropActive = !1;
    },
    onDrop: (G) => {
      q(G);
    }
  }) : () => {
  }, h = function(G) {
    e.__panoOutputFromRun = !0;
    const ve = K1(e, G);
    wi(e, ve ? "executed" : "sync", G), z();
    const De = at ? at.apply(this, arguments) : void 0;
    return bs(e), De;
  };
  e.onExecuted = h;
  const Ge = e.onConnectionsChange, rn = function(G, ve) {
    const De = i0(e, G, ve, Np), se = i0(e, G, ve, Xi), Ue = arguments, Ie = Ge ? Ge.apply(this, Ue) : void 0, it = () => {
      V.destroyed || (se && RA(e), De && wi(e, "connection-change"), bs(e), z());
    };
    return it(), queueMicrotask(it), Ie;
  };
  e.onConnectionsChange = rn;
  const Qt = function() {
    const G = Ke ? Ke.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, z(), G;
  };
  e.onResize = Qt;
  const Ci = function() {
    return To(), Id.unregister(this), ze ? ze.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ci;
  const To = () => {
    var G, ve, De, se, Ue, Ie, it, Mt, on;
    V.destroyed = !0, (G = gt == null ? void 0 : gt.disconnect) == null || G.call(gt), o ? ke() : Fe(), k.removeEventListener("lostpointercapture", T), ii(), A(), window.removeEventListener("keydown", te, !0), (De = (ve = e.__panoStateFlushers) == null ? void 0 : ve.delete) == null || De.call(ve, pt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (se = j == null ? void 0 : j.destroy) == null || se.call(j), (Ue = Ye == null ? void 0 : Ye.unmount) == null || Ue.call(Ye), W && (W.playback.dispose(), W.video.remove(), W.stickerVideo.remove(), e.__panoSurfacePlayback === W && (e.__panoSurfacePlayback = null)), _.dispose(), e.__panoSurfaceScene = null, (it = (Ie = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ie.dispose) == null || it.call(Ie), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ne(), pe.dispose(), mt && clearTimeout(mt), mt = null, Vp.disposeOwner(e), va(e), V.raf && cancelAnimationFrame(V.raf), V.raf = 0, ((Mt = e.__panoCutoutNodeSurface) == null ? void 0 : Mt.session) === j && (e.__panoCutoutNodeSurface = null), ((on = e.__panoStickersNodeSurface) == null ? void 0 : on.session) === j && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Qt && (e.onResize = Ke), e.onExecuted === h && (e.onExecuted = at), e.onConnectionsChange === rn && (e.onConnectionsChange = Ge), Me && (Ne == null ? void 0 : Ne.callback) === Me && (Ne.callback = Ce), Me && (Ne == null ? void 0 : Ne.__panoPreviewPatchedCb) === Me && delete Ne.__panoPreviewPatchedCb, Ee && (me == null ? void 0 : me.callback) === Ee && (me.callback = Te), Ee && (me == null ? void 0 : me.__panoPreviewPatchedCb) === Ee && delete me.__panoPreviewPatchedCb, e.onDragOver === Dn && (e.onDragOver = st), e.onDragDrop === Ln && (e.onDragDrop = ht), e.onRemoved === Ci && (e.onRemoved = ze);
  };
  e.__panoDomRestore = To, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = j && $ && !o ? { session: j, model: R } : null, e.__panoStickersNodeSurface = j && $ && o ? { session: j, model: R } : null, e.__panoDomPreview = {
    widget: B,
    root: S,
    canvas: k,
    requestDraw: z,
    state: V,
    emptyHintEl: P,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Id.register(e), e.graph && wi(e, "attach"), z();
}
function C0(e, t = {}) {
  $1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function I0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (V1(e) && !n) {
    $p(e);
    return;
  }
  $1(e).attach(t);
}
function uC(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function fC(e, t = 1, n = e0) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : e0, v = Math.max(u, d), S = v > 0 ? Math.min(1, y / v) : 1;
  return {
    width: Math.max(1, Math.round(u * S)),
    height: Math.max(1, Math.round(d * S))
  };
}
function dC({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const k = d();
    return k === u || (u = k, o(k)), k;
  }, y = () => b();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", y), b(), { toggle: async () => {
    var k;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
      } catch {
      }
      return c ? !1 : (b(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), c) return !1;
        if (d())
          return b(), !0;
      } catch {
      }
    return c || (a(), b()), !1;
  }, isActive: d, destroy: () => {
    var k, P, A;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const F = (P = t.exitFullscreen) == null ? void 0 : P.call(t);
          (A = F == null ? void 0 : F.catch) == null || A.call(F, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const pC = { class: "pano-preview-node-surface" }, hC = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ae(), fe("div", pC, [
      Le(dn, {
        icon: e.model.fullscreen ? et(Pe).fullscreen_close : et(Pe).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (o) => {
          var a;
          return (a = t.onAction) == null ? void 0 : a.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (ae(), wr(Ep, { key: 0 })) : dt("", !0)
    ]));
  }
}, Dl = 140, mC = 180, O0 = 40, If = 10;
function E0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function F0(e, t) {
  const n = E0(e), r = E0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function T0(e) {
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
  const o = `/view?${n.toString()}`;
  return typeof ((a = qt) == null ? void 0 : a.apiURL) == "function" ? qt.apiURL(o) : o;
}
function _a(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return _a(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return T0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = _a(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : T0(e);
}
function W1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function gC(e) {
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
function Fd(e) {
  var o;
  const t = (o = Fr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (F0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (F0(a, n)) return t[a];
  return null;
}
function yC(e) {
  var r, o;
  const t = Fd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = _a(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function bC(e, t = "erp_image") {
  var N, k, P, A, F, B, V;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((z) => String((z == null ? void 0 : z.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((z, _) => String((z == null ? void 0 : z.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(_))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (P = (k = (N = Fr) == null ? void 0 : N.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : P.call(k, a), u = Fd(a), d = Fd(e == null ? void 0 : e.id), b = [
    (A = d == null ? void 0 : d.ui) == null ? void 0 : A.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (F = u == null ? void 0 : u.ui) == null ? void 0 : F.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const z of b)
    if (Array.isArray(z))
      for (const _ of z) {
        const R = _a(_);
        if (R) return R;
      }
  let y = [];
  try {
    y = typeof ((B = Fr) == null ? void 0 : B.getNodeImageUrls) == "function" ? Fr.getNodeImageUrls(c) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const z of y) {
      const _ = _a(z);
      if (_) return _;
    }
  if (c) {
    const z = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const _ of z) {
      const R = _a(_);
      if (R) return R;
    }
  }
  const v = (V = c == null ? void 0 : c.widgets) == null ? void 0 : V.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), S = String((v == null ? void 0 : v.value) || "").trim();
  return S ? qt.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`) : "";
}
function Of(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function D0(e, t, n, r, o, a, c) {
  var b, y, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !W1(a) || n <= 1 || r <= 1) {
    Of(t, n, r);
    return;
  }
  if (c.failed) {
    Of(t, n, r);
    return;
  }
  const u = Number(((v = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (S) => (S == null ? void 0 : S.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: Ac(o, n, r),
    background: { media: a, revision: gC(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Of(t, n, r);
}
function L0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class vC {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Xb(() => this.requestDraw()), this.controller = ip({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: $t(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: re(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: re(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, c, u;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((u = this.canvas) == null ? void 0 : u.clientHeight) || 0))
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
    var r, o, a;
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
    const n = ((a = (o = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (c) => (c == null ? void 0 : c.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...c) => {
      const u = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
      return t.requestDraw(), u;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var a;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (a = this.flags) != null && a.collapsed || !t.errorText) return r;
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
        `min-height:${Dl}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = Sn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Dl;
        },
        getHeight() {
          return Dl;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Fc(Nd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Dl, Number(a.minHeight || 0)),
            minWidth: Math.max(mC, Number(a.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, o, a, c;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Dp(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Pa({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = dC({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Qd(hC, {
        model: this.surfaceModel,
        onAction: (u) => {
          var d, b;
          (u == null ? void 0 : u.type) === "toggle-fullscreen" && ((b = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || b.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var u, d;
          return (d = (u = this.fullscreenController) == null ? void 0 : u.toggle) == null ? void 0 : d.call(u);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (c = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || c.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = nb(n), t.addEventListener("pointerdown", (a) => {
      var c, u, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const r = (a) => {
      var c, u;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      uC(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !W1(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var c;
      const o = t.localPoint(r);
      if (!o) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const a = t.getLegacyPreviewRect();
      return L0(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var c;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = t.localPoint(r);
      if (!o) return !0;
      const a = t.getLegacyPreviewRect();
      return t.controller.moveDrag(o.x - a.x, o.y - a.y, "pano"), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var d, b, y, v, S, N;
      const a = HA(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !L0(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - If * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - O0 - If);
    return { x: If, y: O0, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), D0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Yb : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = fC(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = yC(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const u = Zc(document, "preview-node.video");
      u.muted = !0, u.loop = !0, u.playsInline = !0, u.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = u, this.videoPaused || u.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      u.addEventListener("loadedmetadata", d), u.addEventListener("canplay", d), u.addEventListener("timeupdate", b), u.addEventListener("play", b), u.addEventListener("pause", b), u.src = t, u.load(), this.mediaCleanup = () => {
        u.pause(), u.removeEventListener("loadedmetadata", d), u.removeEventListener("canplay", d), u.removeEventListener("timeupdate", b), u.removeEventListener("play", b), u.removeEventListener("pause", b);
      };
      return;
    }
    const n = bC(this.node, this.imageInputName);
    if (!n) {
      (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    var o, a;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), D0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, y, v, S, N, k, P, A, F;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || v.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (N = this.root) == null ? void 0 : N.remove) == null || k.call(N);
    } catch {
    }
    try {
      L1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((F = (A = (P = this.node) == null ? void 0 : P.widgets) == null ? void 0 : A.find) == null ? void 0 : F.call(A, (B) => (B == null ? void 0 : B.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function _C(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new vC(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function B1(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const u = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
  const a = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const u = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const u = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
}
function jp(e) {
  return !!(e != null && e.prototype);
}
function Bs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function wC(e, t = {}) {
  jp(e) || _C(e, {
    ...t,
    onOpen: Bs(e, t.onOpen)
  });
}
function SC(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!jp(e)) {
    I0(e, {
      ...r,
      onOpen: Bs(e, t.onOpen)
    });
    return;
  }
  B1(e, "stickers_node_preview", (o) => {
    I0(o, {
      ...r,
      onOpen: Bs(o, t.onOpen)
    });
  });
}
function xC(e, t = {}) {
  if (!jp(e)) {
    C0(e, {
      ...t,
      onOpen: Bs(e, t.onOpen)
    });
    return;
  }
  B1(e, "cutout_preview", (n) => {
    C0(n, {
      ...t,
      onOpen: Bs(n, t.onOpen)
    });
  });
}
const Bn = {
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
}, pi = "pen";
function R0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function kC(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      r.push(String(v || ""));
    }), !r.length)) return;
    const y = Number(b.index);
    Number.isInteger(y) ? y === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, y)) : o = r.length - 1;
  }
  function d(b) {
    r[o] !== b && (r.splice(o + 1), r.push(b), r.length > a && r.shift(), o = r.length - 1);
  }
  return u(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      d(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = o - 1;
      return b < 0 || b >= r.length ? null : (o = b, r[o]);
    },
    redo() {
      const b = o + 1;
      return b < 0 || b >= r.length ? null : (o = b, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const b = r.length, y = Math.max(0, b - c), v = o >= 0 ? Math.max(0, Math.min(o, y)) : y, S = r.slice(v, v + c), N = o < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, o - v));
      return {
        version: 1,
        entries: S,
        index: N
      };
    },
    hydrate: u
  };
}
function MC({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let o = null;
  function a() {
    o = null;
    for (const [c, u] of Object.entries(n))
      r.delete(c) && u();
  }
  return {
    request(c) {
      r.add(c), o ?? (o = e(a));
    },
    cancel() {
      r.clear(), o !== null && t(o), o = null;
    }
  };
}
const NC = 250, PC = 600, AC = 180, CC = 2;
function IC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function vs(e, t, n) {
  return e + (t - e) * n;
}
function OC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(rp(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / AC + o / CC);
  return Math.round(vs(NC, PC, a));
}
function EC(e, t, n) {
  const r = IC(re(n, 0, 1));
  return {
    position: e.position.map((o, a) => vs(o, t.position[a], r)),
    yaw_deg: $t(e.yaw_deg + rp(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: vs(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: vs(e.hFOV_deg, t.hFOV_deg, r),
    distance: vs(e.distance, t.distance, r)
  };
}
function FC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(rp(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function TC(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return FC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: OC(e, t, r), end: o };
}
function DC(e, t) {
  const n = re((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: EC(e.from, e.to, n), done: !1 };
}
function oc(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function LC(e, t, n) {
  const r = oc(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function ea(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function RC(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function VC({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: u,
  isActiveLassoTool: d
}) {
  var V, z;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
    visible: b,
    activePane: b ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: b ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (_, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const v = ((V = t.find((_) => o(e.paintColor, _.color))) == null ? void 0 : V.id) || "", S = !v, N = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((z = e.customPaintColor) == null ? void 0 : z.a) ?? 1))) * 100), P = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), A = e.brushSizes[P] ?? 10, F = d(), B = Array.from({ length: 8 }, (_, R) => e.customPaintHistory[R] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: S,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: B.map((_, R) => ({
      index: R,
      color: _ ? { cssColor: r(_, 1) } : null
    })),
    sizeValue: A,
    sizeText: String(A),
    sizeFill: `${Math.max(0, Math.min(100, (A - 1) / 119 * 100))}%`,
    sizeDisabled: F,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function $C({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const zC = {
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
function jC(e) {
  const t = [];
  for (const n of e) {
    const [r, o, a] = zC[n.key] || [], c = t[t.length - 1];
    r && (c != null && c.grouped) && c.label === r ? c.fields.push({ ...n, short: o, drag: a }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: o, drag: a }] });
  }
  return t;
}
function Ef(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function HC({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
  const a = !r && !!o;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: a ? Pe.eye : Pe.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function GC({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const o = !e || t;
  let a = null;
  return r && o && (n ? a = "The camera is hidden" : a = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: o, tip: a };
}
function KC(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const wa = "erp", WC = ["1:1", "4:3", "3:2", "16:9"];
function U1(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...WC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: wa, label: Number(n) === 180 ? "180°" : "360°", active: e === wa }] : []
  ];
}
function BC({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: u,
  uiSettings: d,
  normalizeCoverageValue: b
}) {
  return {
    coverage: { value: b(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || o === "world" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    rows: jC(c),
    notes: u,
    paramsDisabled: !r,
    uiSettings: t ? null : d,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function UC({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: c,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: y,
  isStickerHidden: v,
  canRestoreSelectedToInitial: S,
  iconSet: N,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: k = !1,
  cameraDeletable: P = !1,
  erpChoice: A = !1,
  coverage: F = 360
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let B = [];
  if (n.length > 1)
    B = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    B = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (r === "image") {
    if (B = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], y(t) || (B.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), B.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), y(t)) {
      const V = S(), z = v(t);
      B.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !V
      }), B.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: z ? "Show" : "Hide",
        tip: z ? "Show input image" : "Hide input image",
        icon: z ? N.eye : N.eye_dashed
      });
    }
    B.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), y(t) || B.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    B = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: U1(d, { erp: A, coverage: F })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90, disabled: d === wa }
    ], k ? P && B.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete }) : B.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    );
  return Y1(o.corners, B);
}
const V0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function YC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? V0.filter((u) => u.cameraTip) : V0;
  return Y1([...e, ...a], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: c.map(({ key: u, label: d, tip: b, cameraTip: y }) => ({ key: u, label: d, tip: r ? y : b, pressed: u === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...o ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Pe.delete }] : []
  ]);
}
function XC(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), S = Math.max(14, o - n - 14), N = y + 18, k = b - 18 - n;
  let P;
  return N <= S ? P = Math.max(N, 14) : k >= 14 ? P = Math.min(k, S) : P = Math.min(Math.max(N, 14), S), { left: v, top: P };
}
function Y1(e, t) {
  const n = e.map((b) => ({ x: Number(b == null ? void 0 : b.x), y: Number(b == null ? void 0 : b.y) })).filter((b) => Number.isFinite(b.x) && Number.isFinite(b.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((b) => b.x), o = n.map((b) => b.y), a = Math.min(...r), c = Math.max(...r), u = Math.min(...o), d = Math.max(...o);
  return {
    visible: !0,
    left: (a + c) * 0.5,
    top: d + 18,
    items: t,
    anchor: { minX: a, maxX: c, minY: u, maxY: d }
  };
}
const X1 = "painting";
function qC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const JC = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function ZC(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: v = !1, cameraHideable: S = !1, stickers: N = !0, scene: k = !1, sceneLocked: P = !1 }) {
  const A = (_, R, W, ce, Se, E, { keyable: j = !0, hideable: xe = !0 } = {}) => {
    const ne = (J) => (r == null ? void 0 : r.owner) === _ && r.lane === J ? r.frames.map((q) => q + E) : [];
    return {
      id: _,
      label: W,
      icon: ce,
      clip: Se,
      selected: _ === o,
      hideable: xe,
      visible: R.visible,
      keyable: j,
      open: j && c.has(_),
      keyed: aN(R, t - E),
      keys: oN(R).map((J) => ({ frame: J.frame + E, full: J.full })),
      selectedFrames: ne(null),
      lanes: (j ? Fo(R) : []).map((J) => ({
        key: `${_}:${J}`,
        lane: J,
        label: JC[J],
        frames: R[J].keyframes.map((q) => q.frame + E),
        selectedFrames: ne(J)
      }))
    };
  }, F = N ? e.stickers : [], B = F.filter((_) => _.placement === "sky").sort((_, R) => R.z_index - _.z_index), V = F.filter((_) => _.placement === "world"), z = ({ start: _, in: R, duration: W }) => ({ clip: { start: _, end: W === null ? null : _ + W }, offset: _ - R });
  return {
    visible: !0,
    expanded: a,
    playing: u,
    hasAudio: !!b,
    muted: !!(b != null && b.muted),
    frame: t,
    span: n,
    label: d,
    fps: e.timeline.fps,
    fpsLocked: y || P,
    lengthLocked: P,
    lockTip: P ? "Set by the scene" : "Set by the video input",
    length: P ? n : e.timeline.length,
    rows: [
      ...v ? [A("camera", e.camera, "Camera", Pe.camera, null, 0, { hideable: S })] : [],
      ...[...B, ...V].map((_) => {
        const { clip: R, offset: W } = z(_.clip);
        return A(_.id, _, fd(_), Pe.image, R, W);
      }),
      ...N && (qC(e.painting) || !e.painting_visible) ? [{
        id: X1,
        label: "Paint",
        icon: Pe.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: e.painting_visible,
        keyable: !1,
        open: !1,
        keyed: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...N && (k || Ab(e.scene)) ? [(() => {
        const { clip: _, offset: R } = z(e.scene.clip);
        return A("scene", e.scene, "Scene", Pe.box, _, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function QC(e, t, n, r) {
  const o = cN(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const eI = { class: "pano-floating-right" }, tI = {
  key: 0,
  class: "pano-floating-space"
}, nI = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, rI = ["data-settled"], iI = ["data-ready", "data-settled"], oI = ["aria-label", "data-tip"], aI = {
  key: 1,
  class: "pano-camera-preview-label"
}, sI = {
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
    return (t, n) => (ae(), fe(Xe, null, [
      X("div", eI, [
        e.space ? xi((ae(), fe("div", tI, [
          X("div", nI, [
            (ae(!0), fe(Xe, null, kt(e.space.modes, (r) => (ae(), wr(dn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Le(dn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Io, e.space.visible]
        ]) : dt("", !0),
        (ae(!0), fe(Xe, null, kt(e.buttons, (r) => (ae(), wr(dn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      xi(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: ft(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: At({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = X("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            X("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ae(), fe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Le(jt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, oI)) : dt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ae(), fe("div", aI, tt(e.preview.label || "Preview unavailable"), 1)) : dt("", !0)
        ], 14, iI)
      ], 8, rI), [
        [Io, e.preview.visible]
      ])
    ], 64));
  }
}, lI = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, cI = ["y2", "transform"], uI = ["transform"], fI = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = yt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => xi((ae(), fe("div", {
      class: ft(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ae(), fe("svg", lI, [
        a[1] || (a[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ae(!0), fe(Xe, null, kt(et(n), (c) => (ae(), fe("line", {
          key: c,
          class: ft(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, cI))), 128)),
        X("g", { transform: r.value }, [...a[0] || (a[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, uI),
        a[2] || (a[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Io, e.model.visible === !0]
    ]);
  }
}, dI = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: ft(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Le(C1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Le(dn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Le(fI, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, pI = ["aria-label"], hI = { class: "pano-canvas-confirm-title" }, mI = { class: "pano-canvas-confirm-text" }, gI = { class: "pano-canvas-confirm-actions" }, yI = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, bI = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Jt(null), r = /* @__PURE__ */ Jt(null);
    let o = null;
    function a() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const S = r.value;
      if (!S) return;
      const N = S.querySelector(`[data-action='${v}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var P;
      const v = r.value;
      if (!v) return;
      const S = v.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const k = a()[0] || v;
      (P = k == null ? void 0 : k.focus) == null || P.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var F;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const S = a(), N = r.value;
      if (!S.length) {
        v.preventDefault(), (F = N == null ? void 0 : N.focus) == null || F.call(N);
        return;
      }
      const k = S[0], P = S[S.length - 1], A = document.activeElement;
      if (v.shiftKey) {
        (A === k || A === N || !(N != null && N.contains(A))) && (v.preventDefault(), P.focus());
        return;
      }
      (A === P || !(N != null && N.contains(A))) && (v.preventDefault(), k.focus());
    }
    function y(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return ko(() => t.model.visible, (v, S) => {
      if (v) {
        o = document.activeElement, Bc(() => {
          u();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), qs(() => {
      d();
    }), (v, S) => e.model.visible === !0 ? (ae(), fe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Dt(y, ["self"])
    }, [
      X("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        X("div", hI, tt(e.model.title), 1),
        X("div", mI, tt(e.model.text), 1),
        X("div", gI, [
          S[0] || (S[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", yI, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, pI)
    ], 512)) : dt("", !0);
  }
}, vI = ["data-paint-pane"], _I = ["hidden"], wI = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], SI = ["aria-pressed", "disabled"], xI = ["hidden"], kI = { class: "pano-paint-color-pop-head" }, MI = { class: "pano-paint-color-field" }, NI = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, PI = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, AI = { class: "pano-paint-color-field" }, CI = { class: "pano-paint-alpha-wrap" }, II = ["value"], OI = { "data-paint-alpha-value": "" }, EI = ["hidden"], FI = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, TI = ["data-paint-history-index", "aria-label", "disabled"], DI = ["data-paint-footer"], LI = ["data-paint-group"], RI = ["hidden"], VI = ["value", "disabled"], $I = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, zI = ["hidden"], jI = {
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
    return (r, o) => (ae(), fe("div", {
      class: ft(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ae(!0), fe(Xe, null, kt(e.panes, (a) => {
        var c;
        return ae(), fe("div", {
          key: a.key,
          class: ft(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ae(), fe("div", {
            key: 0,
            class: ft(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ae(!0), fe(Xe, null, kt(e.paintSwatches, (u) => (ae(), fe("button", {
              key: u.id,
              class: ft(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: At(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, wI))), 128)),
            X("button", {
              class: ft(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: At({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, SI),
            X("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: At({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              X("div", kI, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: At({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", MI, [
                X("div", NI, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: At({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", PI, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: At({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", AI, [
                o[1] || (o[1] = X("span", null, "Opacity", -1)),
                X("div", CI, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, II),
                  X("span", OI, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", FI, [
                  (ae(!0), fe(Xe, null, kt(e.state.historyEntries || [], (u) => (ae(), fe("button", {
                    key: u.index,
                    class: ft(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: At(n(u.color))
                  }, null, 14, TI))), 128))
                ])
              ], 8, EI)
            ], 12, xI)
          ], 10, _I)) : dt("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ae(!0), fe(Xe, null, kt(a.tools, (u) => {
                var d;
                return ae(), wr(dn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, LI),
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
                style: At({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, VI),
              X("span", $I, tt(e.state.sizeText || "10"), 1)
            ], 10, RI),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Le(dn, {
                icon: et(Pe).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, zI)
          ], 8, DI)
        ], 10, vI);
      }), 128))
    ], 2));
  }
}, HI = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Jt(null), r = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (ae(), fe(Xe, null, [
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
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, GI = ["aria-label"], KI = ["data-tip", "aria-pressed"], WI = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = yt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (ae(), fe("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: At({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (ae(!0), fe(Xe, null, kt(e.buttons, (a) => (ae(), fe("button", bi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), tt(a.label), 17, KI))), 128))
    ], 12, GI));
  }
}, BI = {
  key: 0,
  class: "pano-cutout-menu"
}, UI = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, YI = ["data-aspect"], XI = ["data-action", "aria-label", "data-tip", "disabled"], qI = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: At({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ae(!0), fe(Xe, null, kt(e.model.items || [], (r) => (ae(), fe(Xe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ae(), fe("div", BI, [
          X("button", UI, [
            Le(jt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: ft(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ae(!0), fe(Xe, null, kt(r.choices || [], (o) => (ae(), fe("button", {
              key: o.value,
              class: ft(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, YI))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ae(), wr(WI, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (ae(), fe("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Le(jt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, XI))
      ], 64))), 128))
    ], 4));
  }
}, JI = {
  key: 0,
  class: "pano-easing"
}, ZI = { class: "pano-section-title" }, QI = { class: "pano-easing-range" }, eO = { class: "pano-easing-modes" }, tO = ["aria-pressed", "onClick"], nO = ["viewBox"], rO = ["x", "y"], iO = ["x1", "y1", "x2", "y2"], oO = ["d"], aO = ["x1", "y1", "x2", "y2"], sO = ["x1", "y1", "x2", "y2"], lO = ["cx", "cy"], cO = ["cx", "cy"], uO = { class: "pano-easing-note" }, hi = 132, ho = 14, fO = {
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
    ], a = /* @__PURE__ */ Jt(null), c = yt(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => ho + k * hi, d = (k) => ho + (1 - k) * hi, b = yt(() => {
      var B;
      if (((B = n.model) == null ? void 0 : B.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, P, A, F] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(P)} ${u(A)} ${d(F)} ${u(1)} ${d(1)}`;
    }), y = yt(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var P;
      return JSON.stringify(k.easing) === JSON.stringify((P = n.model) == null ? void 0 : P.easing);
    }
    function S(k, P) {
      r("timeline", { type: "easing", easing: k, commit: P });
    }
    function N(k, P) {
      var z;
      if (k.button !== 0 || !c.value) return;
      const A = k.currentTarget;
      (z = A.setPointerCapture) == null || z.call(A, k.pointerId);
      let F = null;
      const B = (_) => {
        const R = a.value.getBoundingClientRect(), W = R.width / (hi + ho * 2), ce = ((_.clientX - R.left) / W - ho) / hi, Se = 1 - ((_.clientY - R.top) / W - ho) / hi;
        F = [...F || c.value], F[P] = Math.round(Math.min(1, Math.max(0, ce)) * 100) / 100, F[P + 1] = Math.round(Math.min(1, Math.max(0, Se)) * 100) / 100, S(F, !1);
      }, V = () => {
        A.removeEventListener("pointermove", B), A.removeEventListener("pointerup", V), A.removeEventListener("pointercancel", V), F && S(F, !0);
      };
      A.addEventListener("pointermove", B), A.addEventListener("pointerup", V), A.addEventListener("pointercancel", V);
    }
    return (k, P) => e.model ? (ae(), fe("div", JI, [
      X("div", ZI, [
        P[2] || (P[2] = X("span", null, "Easing", -1)),
        X("span", QI, tt(e.model.label), 1)
      ]),
      X("div", eO, [
        (ae(), fe(Xe, null, kt(o, (A) => X("button", {
          key: A.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(A) ? "true" : "false",
          onClick: (F) => S(A.easing, !0)
        }, tt(A.label), 9, tO)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ae(), fe("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${hi + ho * 2} ${hi + ho * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        X("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: hi,
          height: hi
        }, null, 8, rO),
        X("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, iO),
        X("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, oO),
        c.value ? (ae(), fe(Xe, { key: 0 }, [
          X("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, aO),
          X("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, sO),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: P[0] || (P[0] = (A) => N(A, 0))
          }, null, 40, lO),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: P[1] || (P[1] = (A) => N(A, 2))
          }, null, 40, cO)
        ], 64)) : dt("", !0)
      ], 8, nO)) : dt("", !0),
      X("div", uO, [
        e.model.mixed ? (ae(), fe(Xe, { key: 0 }, [
          ps("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ae(), fe(Xe, { key: 1 }, [
          ps("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ae(), fe(Xe, { key: 2 }, [
          ps("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ae(), fe(Xe, { key: 3 }, [
          ps("cubic-bezier(" + tt(y.value) + ")", 1)
        ], 64)) : dt("", !0)
      ])
    ])) : dt("", !0);
  }
}, dO = {
  class: "pano-side",
  "data-side": ""
}, pO = { class: "pano-side-head" }, hO = { class: "pano-side-title" }, mO = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, gO = {
  key: 0,
  class: "pano-side-scroll"
}, yO = { class: "pano-inspector" }, bO = { class: "pano-ui-row pano-coverage-row" }, vO = ["data-selected"], _O = ["aria-pressed", "disabled"], wO = ["aria-pressed", "disabled"], SO = {
  key: 0,
  class: "pano-section-title"
}, xO = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, kO = {
  class: "pano-picker",
  "data-picker": "selection"
}, MO = ["disabled"], NO = { class: "pano-picker-label" }, PO = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, AO = ["hidden"], CO = ["data-selection-id"], IO = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, OO = {
  key: 2,
  class: "pano-state-actions"
}, EO = ["disabled"], FO = ["data-key"], TO = { class: "pano-field-group-values" }, DO = ["title", "onPointerdown"], LO = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], RO = ["data-key"], VO = ["min", "max", "step", "value", "disabled", "data-param-key"], $O = ["min", "max", "step", "value", "disabled", "data-param-key"], zO = ["open"], jO = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, HO = { class: "pano-ui-settings-body" }, GO = { class: "pano-ui-row" }, KO = ["data-selected"], WO = ["aria-pressed"], BO = ["aria-pressed"], UO = { class: "pano-ui-row" }, YO = ["data-selected"], XO = ["aria-pressed"], qO = ["aria-pressed"], JO = {
  key: 1,
  class: "pano-side-footer"
}, ZO = ["data-action"], QO = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = yt(() => {
      const b = n.model;
      return !b || typeof b != "object" ? !1 : Object.keys(b).length > 0 && !!b.coverage;
    });
    function a(b) {
      return { "--v": `${Number((b == null ? void 0 : b.fillPct) || 0)}%` };
    }
    function c(b, y) {
      return (y == null ? void 0 : y.paramsDisabled) === !0 || (b == null ? void 0 : b.enabled) === !1;
    }
    const u = {};
    function d(b, y) {
      const v = u[y.key];
      if (b.button !== 0 || !v || c(y, n.model)) return;
      b.preventDefault();
      const S = b.currentTarget, N = b.clientX, k = Number(v.value) || 0;
      let P = !1;
      S.setPointerCapture(b.pointerId);
      const A = (B) => {
        if (!P && Math.abs(B.clientX - N) < 3) return;
        P = !0;
        const V = k + (B.clientX - N) * y.drag * (B.shiftKey ? 0.1 : 1);
        v.value = String(Number(V.toFixed(3))), v.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, F = () => {
        S.removeEventListener("pointermove", A), S.removeEventListener("pointerup", F), S.removeEventListener("pointercancel", F), S.removeEventListener("lostpointercapture", F), P ? v.dispatchEvent(new Event("change", { bubbles: !0 })) : v.focus();
      };
      S.addEventListener("pointermove", A), S.addEventListener("pointerup", F), S.addEventListener("pointercancel", F), S.addEventListener("lostpointercapture", F);
    }
    return (b, y) => {
      var v, S, N, k, P;
      return ae(), fe("div", dO, [
        X("div", pO, [
          X("div", hO, [
            X("span", mO, [
              Le(jt, {
                icon: et(Pe).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, tt(e.nodeTitle), 1)
          ]),
          y[1] || (y[1] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        y[10] || (y[10] = X("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ae(), fe("div", gO, [
          X("div", yO, [
            y[9] || (y[9] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", bO, [
              y[2] || (y[2] = X("label", null, "Coverage", -1)),
              X("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 360 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "360", 8, _O),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, wO)
              ], 8, vO)
            ]),
            e.model.transformTitle !== !1 ? (ae(), fe("div", SO, [...y[3] || (y[3] = [
              X("span", null, "Transform", -1)
            ])])) : dt("", !0),
            e.model.selectionPicker ? (ae(), fe("div", xO, [
              X("label", null, tt(e.model.selectionPicker.label), 1),
              X("div", kO, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", NO, [
                    e.model.selectionPicker.currentIcon ? (ae(), fe("span", PO, [
                      Le(jt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : dt("", !0),
                    X("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  y[4] || (y[4] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, MO),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ae(!0), fe(Xe, null, kt(e.model.selectionPicker.items || [], (A) => (ae(), fe("button", {
                    key: A.id,
                    type: "button",
                    class: ft(["pano-picker-item", { active: A.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": A.id
                  }, [
                    A.icon ? (ae(), fe("span", IO, [
                      Le(jt, {
                        icon: A.icon
                      }, null, 8, ["icon"])
                    ])) : dt("", !0),
                    X("span", null, tt(A.label), 1)
                  ], 10, CO))), 128))
                ], 8, AO)
              ])
            ])) : dt("", !0),
            e.model.copyStateButton ? (ae(), fe("div", OO, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Le(jt, {
                  icon: et(Pe).copy
                }, null, 8, ["icon"]),
                X("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, EO)
            ])) : dt("", !0),
            X("div", {
              class: ft(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ae(!0), fe(Xe, { key: 0 }, kt(e.model.notes, (A) => (ae(), fe("div", {
                key: A,
                class: "pano-param-note"
              }, tt(A), 1))), 128)) : (ae(!0), fe(Xe, { key: 1 }, kt(e.model.rows || [], (A) => (ae(), fe(Xe, {
                key: A.key
              }, [
                A.grouped ? (ae(), fe("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": A.key
                }, [
                  X("label", null, tt(A.label), 1),
                  X("div", TO, [
                    (ae(!0), fe(Xe, null, kt(A.fields, (F) => (ae(), fe("div", {
                      key: F.key,
                      class: "pano-axis-field"
                    }, [
                      X("span", {
                        class: ft(["pano-axis", { disabled: c(F, e.model) }]),
                        title: F.label,
                        onPointerdown: (B) => d(B, F)
                      }, tt(F.short), 43, DO),
                      X("input", {
                        ref_for: !0,
                        ref: (B) => {
                          u[F.key] = B;
                        },
                        type: "number",
                        min: F.min,
                        max: F.max,
                        step: F.step,
                        value: F.displayValue,
                        disabled: c(F, e.model),
                        "aria-label": `${A.label} ${F.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": F.key
                      }, null, 8, LO)
                    ]))), 128))
                  ])
                ], 8, FO)) : (ae(), fe("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": A.key
                }, [
                  X("label", null, tt(A.label), 1),
                  X("input", {
                    type: "range",
                    min: A.fields[0].min,
                    max: A.fields[0].max,
                    step: A.fields[0].step,
                    value: A.fields[0].value,
                    disabled: c(A.fields[0], e.model),
                    style: At(a(A.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": A.fields[0].key
                  }, null, 12, VO),
                  X("input", {
                    type: "number",
                    min: A.fields[0].min,
                    max: A.fields[0].max,
                    step: A.fields[0].step,
                    value: A.fields[0].displayValue,
                    disabled: c(A.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": A.fields[0].key
                  }, null, 8, $O)
                ], 8, RO))
              ], 64))), 128))
            ], 2),
            Le(fO, {
              model: e.easing,
              onTimeline: y[0] || (y[0] = (A) => r("timeline", A))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (ae(), fe("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                y[5] || (y[5] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", jO, [
                  Le(jt, {
                    icon: et(Pe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", HO, [
                X("div", GO, [
                  y[6] || (y[6] = X("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, WO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, BO)
                  ], 8, KO)
                ]),
                X("div", UO, [
                  y[7] || (y[7] = X("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, XO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, qO)
                  ], 8, YO)
                ]),
                y[8] || (y[8] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, zO)) : dt("", !0)
          ])
        ])) : dt("", !0),
        (e.model.footerButtons || []).length ? (ae(), fe("div", JO, [
          (ae(!0), fe(Xe, null, kt(e.model.footerButtons, (A) => (ae(), fe("button", {
            key: A.action,
            class: ft(["pano-btn", { "pano-btn-primary": A.primary === !0 }]),
            type: "button",
            "data-action": A.action
          }, tt(A.label), 11, ZO))), 128))
        ])) : dt("", !0)
      ]);
    };
  }
}, eE = { class: "pano-timeline-bar" }, tE = ["aria-label", "data-tip"], nE = ["aria-label", "data-tip"], rE = { class: "pano-timeline-time" }, iE = ["data-tip"], oE = { key: 0 }, aE = ["min", "max", "value"], sE = ["data-tip"], lE = { key: 0 }, cE = ["max", "value"], uE = ["aria-expanded"], fE = ["inert"], dE = { class: "pano-timeline-name" }, pE = ["aria-pressed", "aria-label", "data-tip", "onClick"], hE = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, mE = ["disabled", "aria-expanded", "aria-label", "onClick"], gE = ["title", "aria-current", "onClick"], yE = ["data-keyed", "aria-label", "onClick"], bE = ["onPointerdown"], vE = ["onPointerdown"], _E = ["onPointerdown"], wE = ["onPointerdown"], SE = ["aria-label", "data-tip", "onPointerdown"], xE = { key: 0 }, kE = ["onPointerdown"], ME = ["aria-label", "data-tip", "onPointerdown"], NE = { key: 0 }, PE = 10, AE = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = /* @__PURE__ */ Jt(null), a = /* @__PURE__ */ Jt(null), c = /* @__PURE__ */ Jt(1), u = /* @__PURE__ */ Jt(0), d = /* @__PURE__ */ Jt(!1);
    let b = null, y = null, v = null;
    Yc(() => {
      b = new ResizeObserver(([J]) => {
        c.value = Math.max(1, J.contentRect.width);
      }), o.value && b.observe(o.value), y = new ResizeObserver(([J]) => {
        u.value = J.contentRect.height;
      }), a.value && y.observe(a.value);
    }), qs(() => {
      b == null || b.disconnect(), y == null || y.disconnect(), v == null || v();
    });
    const S = yt(() => Math.max(1, Number(n.model.span || 1))), N = yt(() => c.value / S.value), k = (J) => `${J / S.value * 100}%`, P = yt(() => _N(S.value, N.value));
    function A(J) {
      const q = o.value.getBoundingClientRect(), U = Math.floor((J - q.left) / Math.max(1, q.width) * S.value);
      return Math.min(S.value - 1, Math.max(0, U));
    }
    function F(J, q, U) {
      const H = Math.ceil(PE / Math.max(1e-6, N.value)), O = new Map(q.map((ie) => [ie.frame, ie.full]));
      return wN(q.map((ie) => ie.frame), H).map((ie, Q) => ({
        ...ie,
        key: `${J}:${Q}`,
        partial: ie.frames.some((ke) => !O.get(ke)),
        selected: ie.frames.some((ke) => U.includes(ke))
      }));
    }
    function B(J) {
      return F(J.id, J.keys, J.selectedFrames);
    }
    function V(J) {
      return F(J.key, J.frames.map((q) => ({ frame: q, full: !0 })), J.selectedFrames);
    }
    function z(J) {
      const q = J.end === null ? S.value : J.end;
      return { left: k(J.start), width: k(Math.max(0, q - J.start)) };
    }
    function _(J, q) {
      const U = J.clientX, H = Math.max(1e-6, N.value);
      let O = 0;
      q("start", 0, J);
      const ie = (ke) => {
        if (ke.pointerId !== J.pointerId) return;
        const Fe = Math.round((ke.clientX - U) / H);
        Fe !== O && (O = Fe, q("move", O, ke));
      }, Q = (ke) => {
        ke.pointerId === J.pointerId && (v(), q("end", O, ke));
      };
      v == null || v(), v = () => {
        window.removeEventListener("pointermove", ie), window.removeEventListener("pointerup", Q), window.removeEventListener("pointercancel", Q), v = null;
      }, window.addEventListener("pointermove", ie), window.addEventListener("pointerup", Q), window.addEventListener("pointercancel", Q);
    }
    function R(J) {
      J.button === 0 && _(J, (q, U, H) => r("action", { type: "seek", frame: A(H.clientX), phase: q }));
    }
    function W(J, q, U) {
      J.button === 0 && (r("action", { type: "select-row", id: q.id }), _(J, (H, O) => r("action", { type: "clip", id: q.id, mode: U, delta: O, phase: H })));
    }
    function ce(J, q, U, H, O) {
      if (J.button === 0) {
        if (J.shiftKey) {
          r("action", { type: "select-keys", owner: q.id, lane: U, frames: H.frames, additive: !0 });
          return;
        }
        H.frames.every((ie) => O.includes(ie)) || r("action", { type: "select-keys", owner: q.id, lane: U, frames: H.frames, additive: !1 }), _(J, (ie, Q) => r("action", { type: "move-keys", delta: Q, phase: ie }));
      }
    }
    const Se = yt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function E(J, q, U) {
      r("action", q), await Bc(), J.target.value = U();
    }
    function j(J) {
      E(J, { type: "fps", fps: Number(J.target.value) }, () => Se.value);
    }
    function xe(J) {
      const q = J.target.value.trim();
      E(J, { type: "length", length: q ? Number(q) : null }, () => n.model.length ?? "");
    }
    function ne(J, q, U) {
      J.button !== 0 || J.target !== J.currentTarget || r("action", { type: "select-keys", owner: q.id, lane: U, frames: [], additive: !1 });
    }
    return (J, q) => xi((ae(), fe("section", {
      class: ft(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      X("div", eE, [
        X("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: q[0] || (q[0] = (U) => r("action", { type: "play" }))
        }, [
          Le(jt, {
            icon: e.model.playing ? et(Pe).pause : et(Pe).play
          }, null, 8, ["icon"])
        ], 8, tE),
        e.model.hasAudio ? (ae(), fe("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: q[1] || (q[1] = (U) => r("action", { type: "mute" }))
        }, [
          Le(jt, {
            icon: e.model.muted ? et(Pe).volume_muted : et(Pe).volume2
          }, null, 8, ["icon"])
        ], 8, nE)) : dt("", !0),
        X("span", rE, tt(e.model.label), 1),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ae(), fe("span", oE, tt(Se.value), 1)) : (ae(), fe("input", {
            key: 1,
            type: "number",
            min: et(yb),
            max: et(fp),
            step: "any",
            value: Se.value,
            "aria-label": "Timeline fps",
            onChange: j
          }, null, 40, aE)),
          q[6] || (q[6] = X("span", null, "fps", -1))
        ], 8, iE),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          q[7] || (q[7] = X("span", null, "Length", -1)),
          e.model.lengthLocked ? (ae(), fe("span", lE, tt(e.model.length), 1)) : (ae(), fe("input", {
            key: 1,
            type: "number",
            min: "1",
            max: et(dp),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: xe
          }, null, 40, cE))
        ], 8, sE),
        X("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: q[2] || (q[2] = (U) => r("action", { type: "toggle-expanded" }))
        }, [
          q[8] || (q[8] = X("span", null, "Timeline", -1)),
          Le(jt, {
            icon: et(Pe).chevron
          }, null, 8, ["icon"])
        ], 8, uE)
      ]),
      X("div", {
        class: ft(["pano-timeline-body", { open: e.model.expanded, sliding: d.value }]),
        style: At({ "--pano-timeline-rows": `${u.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: q[3] || (q[3] = Dt((U) => d.value = !0, ["self"])),
        onTransitionend: q[4] || (q[4] = Dt((U) => d.value = !1, ["self"])),
        onTransitioncancel: q[5] || (q[5] = Dt((U) => d.value = !1, ["self"]))
      }, [
        X("div", {
          ref_key: "gridRef",
          ref: a,
          class: "pano-timeline-grid"
        }, [
          q[9] || (q[9] = X("div", { class: "pano-timeline-corner" }, null, -1)),
          X("div", {
            ref_key: "rulerRef",
            ref: o,
            class: "pano-timeline-ruler",
            onPointerdown: R
          }, [
            (ae(!0), fe(Xe, null, kt(P.value, (U) => (ae(), fe("span", {
              key: U,
              class: "pano-timeline-tick",
              style: At({ left: k(U) })
            }, tt(U), 5))), 128)),
            X("span", {
              class: "pano-timeline-playhead",
              style: At({ left: k(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ae(!0), fe(Xe, null, kt(e.model.rows || [], (U) => (ae(), fe(Xe, {
            key: U.id
          }, [
            X("div", {
              class: ft(["pano-timeline-head", { selected: U.selected, "is-hidden": !U.visible }])
            }, [
              X("div", dE, [
                U.hideable ? (ae(), fe("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": U.visible ? "true" : "false",
                  "aria-label": `${U.label} visible`,
                  "data-tip": U.visible ? "Hide" : "Show",
                  onClick: Dt((H) => r("action", { type: "toggle-visible", id: U.id }), ["stop"])
                }, [
                  Le(jt, {
                    icon: U.visible ? et(Pe).eye : et(Pe).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, pE)) : (ae(), fe("span", hE)),
                X("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !U.keyable,
                  "aria-expanded": U.open ? "true" : "false",
                  "aria-label": U.open ? `Hide ${U.label} parameters` : `Show ${U.label} parameters`,
                  onClick: Dt((H) => r("action", { type: "toggle-row", id: U.id }), ["stop"])
                }, [
                  Le(jt, {
                    icon: et(Pe).chevron
                  }, null, 8, ["icon"])
                ], 8, mE),
                X("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: U.label,
                  "aria-current": U.selected ? "true" : void 0,
                  onClick: (H) => r("action", { type: "select-row", id: U.id })
                }, [
                  Le(jt, {
                    icon: U.icon
                  }, null, 8, ["icon"]),
                  X("span", null, tt(U.label), 1)
                ], 8, gE),
                U.keyable ? (ae(), fe("button", {
                  key: 2,
                  class: ft(["pano-timeline-key", { keyed: U.keyed }]),
                  type: "button",
                  "data-keyed": U.keyed ? "true" : "false",
                  "aria-label": U.keyed ? `Every ${U.label} parameter has a keyframe here; update them` : `Add keyframes for every ${U.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Dt((H) => r("action", { type: "key-row", owner: U.id }), ["stop"])
                }, [
                  Le(jt, {
                    icon: et(Pe).keyframe
                  }, null, 8, ["icon"])
                ], 10, yE)) : dt("", !0)
              ]),
              U.open ? (ae(!0), fe(Xe, { key: 0 }, kt(U.lanes, (H) => (ae(), fe("div", {
                key: H.key,
                class: "pano-timeline-lane-head"
              }, tt(H.label), 1))), 128)) : dt("", !0)
            ], 2),
            X("div", {
              class: ft(["pano-timeline-track", { selected: U.selected }])
            }, [
              X("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (H) => ne(H, U, null)
              }, [
                U.clip ? (ae(), fe("div", {
                  key: 0,
                  class: ft(["pano-timeline-clip", { open: U.clip.end === null }]),
                  style: At(z(U.clip)),
                  onPointerdown: Dt((H) => W(H, U, "move"), ["stop"])
                }, [
                  X("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Dt((H) => W(H, U, "start"), ["stop"])
                  }, null, 40, _E),
                  X("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Dt((H) => W(H, U, "end"), ["stop"])
                  }, null, 40, wE)
                ], 46, vE)) : dt("", !0),
                (ae(!0), fe(Xe, null, kt(B(U), (H) => (ae(), fe("button", {
                  key: H.key,
                  type: "button",
                  class: ft(["pano-timeline-pin", { selected: H.selected, cluster: H.frames.length > 1, partial: H.partial }]),
                  style: At({ left: k(H.frame + 0.5) }),
                  "aria-label": `${U.label}: ${H.frames.length > 1 ? `${H.frames.length} keyframes` : `keyframe at frame ${H.frames[0]}`}`,
                  "data-tip": H.frames.length > 1 ? `${H.frames.length} keyframes` : `Frame ${H.frames[0]}`,
                  onPointerdown: Dt((O) => ce(O, U, null, H, U.selectedFrames), ["stop"])
                }, [
                  H.frames.length > 1 ? (ae(), fe("span", xE, tt(H.frames.length), 1)) : dt("", !0)
                ], 46, SE))), 128))
              ], 40, bE),
              U.open ? (ae(!0), fe(Xe, { key: 0 }, kt(U.lanes, (H) => (ae(), fe("div", {
                key: H.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => ne(O, U, H.lane)
              }, [
                (ae(!0), fe(Xe, null, kt(V(H), (O) => (ae(), fe("button", {
                  key: O.key,
                  type: "button",
                  class: ft(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: At({ left: k(O.frame + 0.5) }),
                  "aria-label": `${H.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Dt((ie) => ce(ie, U, H.lane, O, H.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (ae(), fe("span", NE, tt(O.frames.length), 1)) : dt("", !0)
                ], 46, ME))), 128))
              ], 40, kE))), 128)) : dt("", !0),
              X("span", {
                class: "pano-timeline-playhead",
                style: At({ left: k(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, fE)
    ], 2)), [
      [Io, e.model.visible]
    ]);
  }
}, CE = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: ft(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: At({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, IE = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, OE = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", IE, [
      (ae(!0), fe(Xe, null, kt(e.buttons, (r) => xi((ae(), wr(dn, {
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
        [Io, r.visible !== !1]
      ])), 128))
    ]));
  }
}, EE = ["data-video-ready"], FE = { class: "pano-video-transport-shell" }, TE = { class: "pano-video-controls-left" }, DE = { class: "pano-video-filmstrip" }, LE = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, RE = ["src", "onLoad"], VE = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, $E = ["max", "value", "disabled"], zE = { class: "pano-video-controls-right" }, jE = ["data-has-audio"], HE = { class: "pano-video-volume-pop" }, GE = ["value", "disabled"], KE = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = yt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause" : "Play";
    }), r = yt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause video" : "Play video";
    }), o = yt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? Pe.pause : Pe.play;
    }), a = yt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = yt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = yt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? Pe.loop_off : Pe.loop;
    }), d = yt(() => {
      var _, R;
      return ((_ = t.state) == null ? void 0 : _.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = yt(() => {
      var _, R, W;
      return ((_ = t.state) == null ? void 0 : _.hasAudio) !== !0 ? Pe.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Pe.volume_muted : Pe.volume2;
    }), y = yt(() => {
      var _;
      return Math.max(0, Math.min(100, Number(((_ = t.state) == null ? void 0 : _.progressPct) || 0)));
    }), v = yt(() => ({ left: `${y.value}%` })), S = yt(() => {
      var ce, Se;
      const _ = (ce = t.state) == null ? void 0 : ce.volumePct, R = Number(((Se = t.state) == null ? void 0 : Se.volume) ?? 1) * 100, W = Number(_ ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), N = yt(() => {
      var W, ce;
      const R = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((ce = t.state) == null ? void 0 : ce.durationLabel) || "0:00")
      ].reduce((Se, E) => Math.max(Se, E.length), 4);
      return `${Math.max(4, R)}ch`;
    }), k = yt(() => ({ "--pano-video-time-ch": N.value })), P = yt(() => {
      var W, ce;
      const _ = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if (_.length) return _;
      const R = Math.max(7, Number(((ce = t.state) == null ? void 0 : ce.thumbnailCount) || 9));
      return Array.from({ length: R }, (Se, E) => ({
        id: `placeholder-${E}`,
        src: "",
        label: ""
      }));
    }), A = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), F = (_) => String((_ == null ? void 0 : _.id) || (_ == null ? void 0 : _.src) || (_ == null ? void 0 : _.label) || ""), B = (_) => A.value.has(F(_)), V = (_) => {
      const R = new Set(A.value);
      R.add(F(_)), A.value = R;
    };
    ko(P, (_) => {
      const R = new Set(_.map(F)), W = /* @__PURE__ */ new Set();
      for (const ce of A.value)
        R.has(ce) && W.add(ce);
      A.value = W;
    }, { immediate: !0 });
    const z = yt(() => {
      var _;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((_ = t.state) == null ? void 0 : _.shellMaxWidthPx) || 640))}px`
      };
    });
    return (_, R) => (ae(), fe("div", {
      class: ft(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: At(z.value)
    }, [
      R[1] || (R[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      R[2] || (R[2] = X("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", FE, [
        X("div", TE, [
          Le(dn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          X("div", {
            class: "pano-video-time pano-video-time-start",
            style: At(k.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", DE, [
          X("div", LE, [
            (ae(!0), fe(Xe, null, kt(P.value, (W) => (ae(), fe("div", {
              key: F(W),
              class: ft(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && B(W)
              }])
            }, [
              W.src ? (ae(), fe("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (ce) => V(W)
              }, null, 40, RE)) : (ae(), fe("span", VE))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: At(v.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
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
          }, null, 8, $E)
        ]),
        X("div", zE, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: At(k.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Le(dn, {
            "extra-class": "pano-video-control",
            icon: u.value,
            label: a.value,
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
            X("div", HE, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: At(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, GE)
            ]),
            Le(dn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, jE)
        ])
      ])
    ], 14, EE));
  }
}, WE = { class: "pano-floating-top" }, BE = ["data-selected", "data-view-count"], UE = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], YE = { class: "label" }, XE = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ae(), fe("div", WE, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ae(!0), fe(Xe, null, kt(e.buttons, (o) => xi((ae(), fe("button", {
            key: o.key,
            class: ft(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            tabindex: o.disabled === !0 ? -1 : null,
            "data-tip": o.tip || null
          }, [
            Le(jt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            X("span", YE, tt(o.label), 1)
          ], 10, UE)), [
            [Io, o.visible !== !1]
          ])), 128))
        ], 8, BE)
      ]);
    };
  }
};
function q1(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Pe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Pe.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Pe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Pe.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Pe.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Pe.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Pe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Pe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Pe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Pe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Pe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Pe.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Pe.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Pe.camera_plus, pressed: null }] : []
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
const qE = ["aria-label"], JE = { class: "pano-stage-column" }, ZE = { class: "pano-stage-wrap" }, QE = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, eF = {
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
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ Jt(null), b = /* @__PURE__ */ Jt(null), y = /* @__PURE__ */ Jt(null);
    function v() {
      var E, j;
      return ((j = (E = y.value) == null ? void 0 : E.getRefs) == null ? void 0 : j.call(E)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(E) {
      var j, xe;
      return ((xe = (j = b.value) == null ? void 0 : j.open) == null ? void 0 : xe.call(j, E)) === !0;
    }
    function N(E) {
      o("image-file-selected", E);
    }
    function k(E) {
      o("image-file-cancelled", E);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: S });
    const P = yt(() => r.readOnly === !0), A = yt(() => r.shellPreset || q1(r.type)), F = yt(() => {
      var j, xe, ne;
      const E = String((((j = r.uiState) == null ? void 0 : j.stageStatus) === "failed" ? (xe = r.uiState) == null ? void 0 : xe.stageStatusDetail : (ne = r.uiState) == null ? void 0 : ne.stageWarningDetail) ?? "");
      return E === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : E === "stickers" ? "One or more sticker previews are unavailable." : E === "frame" ? "The editor hit a rendering error. Check the browser console for details." : E === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : E.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), B = yt(() => {
      var j;
      const E = Array.isArray((j = A.value) == null ? void 0 : j.floatingButtons) ? A.value.floatingButtons.slice() : [];
      return P.value && E.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Pe.fullscreen
      }), E;
    });
    function V() {
      const E = d.value;
      return E ? Array.from(E.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((j) => j instanceof HTMLElement ? !j.hidden && j.tabIndex >= 0 && j.offsetParent !== null : !1) : [];
    }
    function z() {
      var xe;
      const j = V()[0] || d.value;
      (xe = j == null ? void 0 : j.focus) == null || xe.call(j);
    }
    function _() {
      var E;
      u != null && u.isConnected && ((E = u.focus) == null || E.call(u)), u = null;
    }
    function R(E) {
      var j, xe, ne, J;
      if (!E.defaultPrevented) {
        if (E.key === "Tab") {
          const q = V();
          if (!q.length) {
            E.preventDefault(), (xe = (j = d.value) == null ? void 0 : j.focus) == null || xe.call(j);
            return;
          }
          const U = q[0], H = q[q.length - 1], O = document.activeElement;
          if (E.shiftKey) {
            (O === U || O === d.value || !((ne = d.value) != null && ne.contains(O))) && (E.preventDefault(), H.focus());
            return;
          }
          (O === H || !((J = d.value) != null && J.contains(O))) && (E.preventDefault(), U.focus());
          return;
        }
        E.key === "Escape" && o("close");
      }
    }
    function W() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function ce() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function Se(E) {
      document.removeEventListener("keydown", R), E ? (u || (u = document.activeElement), W(), document.addEventListener("keydown", R), Bc(() => {
        z();
      })) : (ce(), _());
    }
    return Yc(() => {
      Se(r.open);
    }), qs(() => {
      ce(), document.removeEventListener("keydown", R), _();
    }), ko(() => r.open, (E) => {
      Se(E);
    }), (E, j) => e.open ? (ae(), fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: j[2] || (j[2] = Dt((xe) => o("close"), ["self"]))
    }, [
      X("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        X("div", JE, [
          X("div", ZE, [
            j[3] || (j[3] = X("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            j[4] || (j[4] = X("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            j[5] || (j[5] = X("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ae(), fe("div", QE, tt(F.value), 1)) : dt("", !0),
            j[6] || (j[6] = X("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Le(HI, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Le(I1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: k
            }, null, 512),
            P.value ? dt("", !0) : (ae(), fe(Xe, { key: 1 }, [
              Le(OE, {
                buttons: e.uiState.toolButtons || A.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Le(dI, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Le(jI, {
                "paint-swatches": e.paintSwatches,
                panes: A.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Le(KE, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Le(XE, {
              buttons: e.uiState.viewButtons || A.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Le(sI, {
              buttons: e.uiState.floatingButtons || B.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Le(qI, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Le(CE, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Le(bI, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Le(AE, {
            model: e.uiState.timeline || {},
            onAction: j[0] || (j[0] = (xe) => o("timeline", xe))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? dt("", !0) : (ae(), wr(QO, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: j[1] || (j[1] = (xe) => o("timeline", xe))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, qE)
    ])) : dt("", !0);
  }
}, Or = "loading", Us = "ready", br = "failed";
function J1(e, t = "") {
  return e && (e.__panoLoadState = Or, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Z1(e, t = "") {
  return e && (e.__panoLoadState = Us, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Q1(e, t = "") {
  return e && (e.__panoLoadState = br, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Td(e, t) {
  return e ? e.__panoLoadState === br ? br : typeof t == "function" && t(e) ? Us : Or : Us;
}
function Dd(e) {
  return Td(e) === br;
}
function tF({ presented: e, background: t = Us, stickers: n = [] } = {}) {
  if (!e) return { status: Or, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Or, a = r.includes(Or);
  if (o && a) return { status: Or, detail: "mixed" };
  if (o) return { status: Or, detail: "background" };
  if (a) return { status: Or, detail: "stickers" };
  const c = t === br, u = r.includes(br);
  return c && u ? { status: br, detail: "mixed" } : c ? { status: br, detail: "background" } : u ? { status: br, detail: "stickers" } : { status: Us, detail: "" };
}
const nF = "state_json", rF = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Ff = "sticker_image_1", iF = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), $0 = 0.01, oF = "external_image", Ll = "pano_sticker_input_images", aF = "pano_sticker_input_videos", sF = "pano_sticker_input_frames", lF = "pano_sticker_input_video_meta", cF = !0, ac = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Wr = Math.PI / 180, _o = 180 / Math.PI, Tf = 1, z0 = "rgb(255, 221, 87)", uF = "rgb(228, 228, 231)", fF = "rgb(180, 150, 60)", dF = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, pF = 64, j0 = 40, Df = 16, hF = 0.45, H0 = 180, mF = 160, Vc = 24, gF = 4, yF = 4, Rl = /* @__PURE__ */ new Map(), G0 = /* @__PURE__ */ new Map(), Ki = /* @__PURE__ */ new Map(), bF = 12, jn = i1({
  app: Fr,
  api: qt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Dd,
    markImageFailed: Q1,
    markImageLoading: J1,
    markImageReady: Z1
  }
});
function Lf(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = jn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Ca(t[0]) : null;
}
const vF = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function _F(e) {
  if (!xn(e, "background")) return null;
  const [t] = jn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = jn.uiValue(e, "pano_timeline_frames") || [], [r] = jn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: qn(r) };
}
const wF = jn.assetSource, fs = jn.source, Rf = jn.uiImage, SF = jn.invalidateUiImage, Vf = jn.loadPreferredExactLinkedImage;
function $f(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function xF(e) {
  return 1 - Math.pow(1 - e, 3);
}
function kF(e, t, n) {
  const r = re((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function MF(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ki.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ki.delete(t), Ki.set(t, n), n);
}
function NF(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ki.delete(n), Ki.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ki.size > bF; ) {
      const o = Ki.keys().next().value;
      if (!o) break;
      Ki.delete(o);
    }
}
function PF(e) {
  return e * e * e;
}
function iu(e, t, n) {
  return { x: e, y: t, z: n };
}
function K0(e, t) {
  return iu(e.x + t.x, e.y + t.y, e.z + t.z);
}
function W0(e, t) {
  return iu(e.x * t, e.y * t, e.z * t);
}
function zf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function AF(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return iu(e.x / t, e.y / t, e.z / t);
}
function Vl(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * _o),
    pitch: re(Math.asin(re(e.y, -1, 1)) * _o, -90, 90)
  };
}
function ji(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function _s(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function jf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return _s(e, t);
  const d = re((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, S = Number(e.y || 0) - y;
  return v * v + S * S;
}
function gr(e, t, n) {
  return e + (t - e) * n;
}
function Br(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(re(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(re(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(re(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${re(n, 0, 1)})`;
}
function CF(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let $l = { fillStyle: "", url: "" };
function IF(e, t, n) {
  if ($l.url && $l.fillStyle === String(e || ""))
    return $l.url;
  const r = CF(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Vc}" height="${Vc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return $l = { fillStyle: String(e || ""), url: r }, r;
}
function sc(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function ar(e) {
  return {
    r: re(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: re(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: re(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: re(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function An(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function OF(e) {
  return ac.some((t) => sc(e, t.color));
}
function Hf(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = re(Number(t), 0, 1), a = re(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), u = r * 6 - c, d = a * (1 - o), b = a * (1 - u * o), y = a * (1 - (1 - u) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g: y, b: d };
    case 1:
      return { r: b, g: a, b: d };
    case 2:
      return { r: d, g: a, b: y };
    case 3:
      return { r: d, g: b, b: a };
    case 4:
      return { r: y, g: d, b: a };
    default:
      return { r: a, g: d, b };
  }
}
function Gf(e) {
  const t = re(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = re(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = re(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function ta(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const ev = "pano_suite.ui_settings.v1", tv = "pano_suite.node_grid_visibility.v1";
let la = null, Ur = null;
function lc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function EF() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ev)) || "").trim();
    if (!t) return la ? lc(la) : null;
    const n = JSON.parse(t), r = lc(n);
    return la = r, r;
  } catch {
    return la ? lc(la) : null;
  }
}
function FF(e) {
  var n;
  const t = lc(e);
  la = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(ev, JSON.stringify(t));
  } catch {
  }
  return t;
}
function nv() {
  var e;
  if (Ur && typeof Ur == "object")
    return Ur;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(tv)) || "").trim();
    if (!t)
      return Ur = {}, Ur;
    const n = JSON.parse(t);
    return Ur = n && typeof n == "object" ? n : {}, Ur;
  } catch {
    return Ur = {}, Ur;
  }
}
function TF(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = nv()[n];
  return typeof o == "boolean" ? o : !!t;
}
function DF(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = nv();
  r[n] = !!t, Ur = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(tv, JSON.stringify(r));
  } catch {
  }
}
function LF(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function B0(e) {
  const { paintCount: t, maskCount: n } = LF(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let o = 0, a = 0;
  return r.forEach((c) => {
    String((c == null ? void 0 : c.layerKind) || "paint") === "mask" ? a += 1 : o += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: a,
    totalPaintCount: t + o,
    totalMaskCount: n + a
  };
}
function na(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function zl(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function RF(e, t) {
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
function mo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function VF(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function $F(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function zF(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function jF(e, t, n = {}) {
  var zm, jm;
  await D1(e, { tolerateOperationFailure: !0 }), jn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = RF(e, t);
  await Dp();
  const u = zl(e, "output_preset"), d = zl(e, "coverage"), b = zl(e, "bg_color"), y = zl(e, nF), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Vf(
      e,
      i,
      () => ue(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = v();
    return zF(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return $F(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : VF(s, i);
  }, k = e.__panoSceneStateV2 === !0, P = t === "stickers" && k, A = t === "cutout" && k, F = P && e.__panoStudio === !0, B = A || F, V = t === "cutout" || F, z = A ? _F(e) : null, _ = (k ? Fb : Eb)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: z ? z.coverage : qn(d == null ? void 0 : d.value),
    sharedUiSettings: EF(),
    active: Lb(e),
    fps: k ? Lf(e) : null,
    scene: (z == null ? void 0 : z.state) ?? null,
    camera: A
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0;
  let R = null;
  B ? (R = _.camera && (!F || _.camera.visible !== !1) ? jg(_.camera, 0) : null, _.shots = R ? [{ ...R, position: [...R.position] }] : [], _.active.selected_shot_id = R && A ? ql : null) : t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const W = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, ce = W ? Ih(W, !1) : { width: 220, height: 132 }, Se = q1(F ? "studio" : t), E = /* @__PURE__ */ Pa({
    stageStatus: Or,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (Se.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (zm = Se.spaceButtons) != null && zm.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: Se.spaceButtons, frame: Se.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (Se.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: P } : {},
      ...A && vF.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(Se.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Pe.fullscreen, disabled: !1 }] : []
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
      customColorCss: Br({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Br({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: ce.width,
      height: ce.height,
      label: W ? "Loading preview" : "Add Frame to preview"
    }
  }), j = document.createElement("div");
  document.body.appendChild(j);
  const xe = ({ intent: i, file: s } = {}) => {
    if (Er(s)) {
      if (i === "add") {
        Uh(s);
        return;
      }
      if (i === "add-world") {
        gw(s);
        return;
      }
      i === "replace" && vw(s);
    }
  }, ne = ({ intent: i } = {}) => {
  }, J = Qd(eF, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: Se,
    paintSwatches: ac.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Br(i.color, 1)
    })),
    uiState: E,
    onClose: () => {
      qo();
    },
    onTimeline: (i) => pw(i),
    onImageFileSelected: xe,
    onImageFileCancelled: ne
  });
  let q = null;
  try {
    q = J.mount(j);
  } catch (i) {
    try {
      J.unmount();
    } catch {
    }
    throw j.remove(), i;
  }
  const U = j.querySelector(".pano-modal-overlay"), H = j.querySelector(".pano-modal"), O = H == null ? void 0 : H.querySelector("[data-stage-overlay]"), ie = H == null ? void 0 : H.querySelector("[data-stage-background]"), Q = H == null ? void 0 : H.querySelector(".pano-stage-wrap"), ke = ((jm = q == null ? void 0 : q.getPaintOverlayRefs) == null ? void 0 : jm.call(q)) || {}, Fe = ke.cursor || null, pt = ke.sizePreview || null, Ye = ke.sizeSample || null;
  if (!U || !H || !O || !ie || !Q || !Fe || !pt || !Ye)
    throw J.unmount(), j.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const $ = O.getContext("2d"), gt = H.querySelector("[data-side]"), Ae = H.querySelector("[data-video-element]"), _t = H.querySelector("[data-port-video-element]");
  sf(O, "editor.stage-overlay"), sf(ie, "editor.stage-background"), Ng(Ae, "editor.video"), Ng(_t, "editor.port-video");
  const It = H.querySelector(".pano-floating-right"), Oe = H.querySelector(".pano-floating-top"), Ve = H.querySelector("[data-tool-rail]"), T = H.querySelector("[data-frame-rail]"), L = H.querySelector("[data-frame-roll-knob]"), te = H.querySelector("[data-paint-dock]"), pe = H.querySelector(".pano-video-transport"), ge = H.querySelector("[data-selection-menu]");
  let be = !1;
  const Ne = H.querySelector("[data-tooltip]"), Ce = H.querySelector("[data-camera-preview-host]"), Me = H.querySelector("[data-camera-preview-canvas]");
  sf(Me, "editor.camera-preview");
  const me = H.querySelector("[data-paint-color-row]"), Te = H.querySelector("[data-paint-color-pop]"), Ee = H.querySelector("[data-paint-color-sv]"), ze = H.querySelector("[data-paint-color-sv-cursor]"), Ke = H.querySelector("[data-paint-hue-strip]"), at = H.querySelector("[data-paint-hue-handle]");
  let st = 0, ht = 0;
  Q == null || Q.removeAttribute("data-stage-ready"), Q == null || Q.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", ie.style.opacity = "0", o && (gt == null || gt.remove(), H.classList.add("pano-modal-readonly"));
  const mt = () => {
    if (!h.customPaintSessionStart) return;
    if (sc(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (OF(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      ar(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !sc(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Rt = (i = !1) => {
    !Te || Te.hidden || (i ? mt() : h.customPaintSessionStart = null, Te.hidden = !0, E.paintDock.colorPopOpen = !1);
  }, Dn = () => {
    Te && (Te.hidden && (h.customPaintSessionStart = ar(h.customPaintColor)), Te.hidden = !1, E.paintDock.colorPopOpen = !0);
  };
  H.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || oo(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (H.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), Rt(!0), V && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, We(), ue()), (s = E.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (E.frameRail.aspectOpen = !1)));
  });
  const Ln = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, ii = JSON.stringify($g(_)), h = {
    mode: "pano",
    selectedId: Ln,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Ir,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: qn(_.coverage),
    historyController: kC(80, { entries: [ii], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: pi,
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
    showGrid: TF(e == null ? void 0 : e.id, !0),
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
    paintEngine: td(),
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
  }, Ge = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let rn = null;
  t === "stickers" && (h.selectedId = null, _.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const Qt = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), G = Sn({ label: "editor.still" });
  G.__panoFrameIdx = 0;
  const ve = Sn({ label: "editor.port-still" });
  ve.__panoFrameIdx = 0;
  let De = () => {
  };
  const se = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, Ue = MC({
    requestFrame: (i) => requestAnimationFrame(i),
    cancelFrame: (i) => cancelAnimationFrame(i),
    tasks: {
      seek: () => Wt.seek(Ge.scrubFrame),
      timeline: () => jr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      view: () => {
        or(), se.backgroundDirty = !0, se.dirty = !0;
      },
      sidePanel: () => $e()
    }
  }), Ie = N2({
    onReady: () => ue(),
    onFailed: () => ue(),
    onUpdate: () => {
      se.backgroundDirty = !0, ue({ localOnly: !0 });
    }
  });
  let it = { key: "", projection: null }, Mt = { key: null, sceneState: null }, on = null, tr = null, an = null, Lr = null, oi = null;
  const Ji = Number.parseFloat(
    getComputedStyle(H).getPropertyValue("--pano-float-radius")
  ) || 10, bt = (i) => {
    const s = String(i || "default");
    O.style.cursor !== s && (O.style.cursor = s);
  }, Kt = {
    timer: 0,
    target: null
  }, kn = {
    active: !1,
    depth: 0
  }, Lt = {
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
  }, sn = 9, Mn = [];
  let ai = 0;
  const Oa = () => {
    var I, M;
    const i = (I = Q == null ? void 0 : Q.getBoundingClientRect) == null ? void 0 : I.call(Q), s = (M = It == null ? void 0 : It.getBoundingClientRect) == null ? void 0 : M.call(It), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(l - g * 2)), x = h.fullscreen ? Math.min(1200, w) : w;
    E.videoTransport.shellMaxWidthPx = x;
  }, si = () => {
    ai || (ai = window.requestAnimationFrame(() => {
      ai = 0, Oa();
    }));
  }, Hp = (i) => {
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
    return !!E.videoTransport.hasAudio;
  }, kr = typeof ResizeObserver < "u" ? new ResizeObserver(() => si()) : null;
  kr == null || kr.observe(Q), It && (kr == null || kr.observe(It)), Mn.push(() => {
    var i;
    ai && (window.cancelAnimationFrame(ai), ai = 0), (i = kr == null ? void 0 : kr.disconnect) == null || i.call(kr);
  }), si();
  const Zs = () => {
    Lt.thumbnailJobId += 1, Lt.thumbnailSrc = "", E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = sn;
  }, rv = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      Zs();
      return;
    }
    const p = MF(f);
    if (p) {
      Lt.thumbnailSrc = f, E.videoTransport.thumbnails = p.thumbnails, E.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++Lt.thumbnailJobId;
    Lt.thumbnailSrc = f, E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = sn;
    const g = Zc(document, "editor.thumbnails");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const w = await new Promise((le) => {
      let he = !1;
      const oe = (ye) => {
        he || (he = !0, le(ye));
      };
      g.addEventListener("loadedmetadata", () => oe(!0), { once: !0 }), g.addEventListener("canplay", () => oe(!0), { once: !0 }), g.addEventListener("error", () => oe(!1), { once: !0 }), g.src = f, g.load();
    });
    if (Lt.thumbnailJobId !== m) return;
    const x = Number(g.videoWidth || 0), I = Number(g.videoHeight || 0);
    if (!w || x < 1 || I < 1) {
      Lt.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), C = Sn({ label: "editor.thumbnail" }), D = 46, Y = Math.max(72, Math.round(x / I * D));
    C.width = Y, C.height = D;
    const K = C.getContext("2d");
    if (!K) return;
    const ee = [], Z = (le) => new Promise((he) => {
      let oe = !1;
      const ye = () => {
        oe || (oe = !0, he());
      };
      g.addEventListener("seeked", ye, { once: !0 }), g.addEventListener("error", ye, { once: !0 });
      try {
        g.currentTime = le;
      } catch {
        ye();
      }
    });
    for (let le = 0; le < sn; le += 1) {
      if (Lt.thumbnailJobId !== m) return;
      const he = le / (sn - 1), oe = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), M * he)) : 0;
      if (await Z(oe), Lt.thumbnailJobId !== m) return;
      K.clearRect(0, 0, Y, D), K.drawImage(g, 0, 0, Y, D), ee.push({
        id: `thumb-${le}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: oe,
        label: yu(oe)
      });
    }
    Lt.thumbnailJobId === m && (E.videoTransport.thumbnails = ee, E.videoTransport.thumbnailCount = ee.length || sn, NF(f, {
      thumbnails: ee,
      thumbnailCount: ee.length || sn,
      duration: M,
      fps: l
    }));
  };
  Mn.push(() => {
    Zs();
  });
  const Wt = v1({
    video: Ae instanceof HTMLVideoElement ? Ae : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: rl,
    span: () => {
      if (k) return hl();
      const i = Math.round(Number(E.videoTransport.duration || 0) * rl());
      return Ae.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? lw(i) : Ei(), ue({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Av() && (se.backgroundDirty = !0);
    },
    onChange: () => {
      Ei(), jr(), ue({ cause: "frame_view", localOnly: !0 });
    }
  });
  Mn.push(() => Wt.dispose());
  const Do = k && _t instanceof HTMLVideoElement ? _1({
    video: _t,
    onCapture: () => {
      var l;
      const i = Number(_t.videoWidth || 0), s = Number(_t.videoHeight || 0);
      i < 1 || s < 1 || (ve.width = i, ve.height = s, (l = ve.getContext("2d")) == null || l.drawImage(_t, 0, 0), ve.__panoFrameIdx += 1, ue({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  Do && Mn.push(() => Do.dispose());
  const iv = k ? l1({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Ae instanceof HTMLVideoElement) {
    const i = () => {
      Fi(), ue({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ei({
        hasAudio: E.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Ae.dataset.panoSrc;
      f && (Lt.failedSrcs.add(f), Fi(), ue());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Ae.addEventListener(f, p), Mn.push(() => Ae.removeEventListener(f, p));
  }
  function ov() {
    E.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function ou(i) {
    return Rp(i == null ? void 0 : i.dataTransfer);
  }
  function Zi(i) {
    const s = !!i;
    kn.active !== s && (kn.active = s, Q.classList.toggle("drop-active", s));
  }
  function Qi(i, s = null) {
    const l = _n();
    h.viewTransition = TC(l, i, performance.now(), { scale: zr(), end: s }), !h.viewTransition && s && Gp(s), un.state.inertia.active = !1, un.state.inertia.vx = 0, un.state.inertia.vy = 0, Rr(), ue({ localOnly: !0 });
  }
  function Gp(i) {
    ja(dd({ ...xu(), moved: i.moved }, i.mode, jo())), se.backgroundDirty = !0;
  }
  function Ea() {
    h.viewTransition && (h.viewTransition = null, Rr());
  }
  function Kp(i, s) {
    Qi({ ..._n(), yaw_deg: i, pitch_deg: s });
  }
  Rv();
  function li() {
    return t === "stickers" ? Fa() : _.shots;
  }
  function Fa() {
    return P ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function nr(i) {
    return P && Nt(i);
  }
  function au(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function ln(i) {
    return nr(i) ? _p(i, h.frame) : i;
  }
  function Mr(i, s) {
    nr(i) ? Tb(i, h.frame, s) : Object.assign(i, s);
  }
  function Nn() {
    const i = _.painting || (_.painting = ma(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function av(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = _.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const w = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }
    return l;
  }
  function sv() {
    return av("paint");
  }
  function Ta(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Da(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function yn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function La(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const f = l.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function su() {
    var s;
    let i = -1;
    for (const l of Fa())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Nn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Wp(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = Nn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? su() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function lv(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: re(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: re(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: re(l + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: re(l + p, 0, 1)
      }
    ];
  }
  function cv() {
    const i = new Set(sv()), l = Nn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: su(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), _.painting.groups = l, l;
  }
  function uv(i, s, l) {
    var ee;
    const f = (Z) => (Number(Z || 0) % 1 + 1) % 1, p = [];
    for (const Z of l) {
      const le = Z == null ? void 0 : Z.geometry, he = (le == null ? void 0 : le.geometryKind) === "lasso_fill" ? le == null ? void 0 : le.points : (le == null ? void 0 : le.processedPoints) || (le == null ? void 0 : le.rawPoints) || (le == null ? void 0 : le.points) || [];
      Array.isArray(he) && p.push(...he);
    }
    if (!p.length) return null;
    const m = f(((ee = p[0]) == null ? void 0 : ee.u) || 0);
    let g = 0, w = 0;
    p.forEach((Z) => {
      const le = f((Z == null ? void 0 : Z.u) || 0);
      g += m + fr(le, m), w += Number((Z == null ? void 0 : Z.v) || 0);
    });
    const x = (g / p.length % 1 + 1) % 1;
    let I = 1 / 0, M = -1 / 0, C = 1 / 0, D = -1 / 0;
    p.forEach((Z) => {
      const le = f((Z == null ? void 0 : Z.u) || 0), he = fr(le, x);
      I = Math.min(I, he), M = Math.max(M, he);
      const oe = Number((Z == null ? void 0 : Z.v) || 0);
      C = Math.min(C, oe), D = Math.max(D, oe);
    });
    const Y = l.reduce((Z, le) => {
      const he = $i(String((le == null ? void 0 : le.toolKind) || "pen")), oe = Bn[he] || Bn[pi], ye = Math.max(1, Number((le == null ? void 0 : le.size) || 10)) * Math.max(0.1, Number((oe == null ? void 0 : oe.sizeScale) ?? 1));
      return Math.max(Z, ye);
    }, 0), K = Math.max(35e-4, Y / 2048);
    return {
      centerUv: { u: ((x + (I + M) * 0.5) % 1 + 1) % 1, v: re((C + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - I) * 0.5 + K,
      halfH: (D - C) * 0.5 + K,
      uvPad: K
    };
  }
  function Ii(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = Nn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || Nr(f, s);
    return p.frame = uv(f, s, m), p.frame;
  }
  function Lo() {
    var f;
    const i = Fa().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = cv().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((f = _.painting) == null ? void 0 : f.raster_objects) ? _.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function lu(i = !0) {
    var l, f, p, m, g, w;
    const s = Lo().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (i) {
      const x = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), I = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.toolKind) || "").trim();
      x && I === "paint" && M !== "eraser" && !s.includes(x) && s.push(x);
    }
    return s;
  }
  function cu(i = !0) {
    var w, x, I, M, C, D;
    const s = Lo();
    if (!i) return s;
    const l = String(((x = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), f = String(((M = (I = h.interaction) == null ? void 0 : I.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((D = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((Y) => Y.type === "strokeGroup" && String(Y.actionGroupId || "") === l))
      return s;
    const m = Et();
    let g = s.reduce((Y, K) => Math.max(Y, Number((K == null ? void 0 : K.z_index) || 0)), -1) + 1;
    return m && cn(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((Y, K) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((K == null ? void 0 : K.z_index) || 0));
  }
  function fv() {
    return Nn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Vo(Ta("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function dv() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Ro(Da((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Bp(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function pv() {
    var s, l, f, p;
    let i = null;
    try {
      const m = lu(), g = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ba()}:${uu()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function uu() {
    var p, m, g, w, x, I, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Bp(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, D = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), Y = ((g = C == null ? void 0 : C.rawPoints) == null ? void 0 : g.length) ?? ((w = C == null ? void 0 : C.points) == null ? void 0 : w.length) ?? 0, K = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${D || "paint"}_${s}_live${K}_${Y}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.actionGroupId) || ""), f = String(((I = i == null ? void 0 : i.item) == null ? void 0 : I.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Qs() {
    return A || !Array.isArray(_.stickers) ? [] : Fa();
  }
  function fu() {
    return [...Array.isArray(_.shots) ? _.shots : [], ...Qs()];
  }
  function hn(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function Nt(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Gn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Ro(i) {
    const s = yn(i);
    if (!s) return null;
    const l = Gn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Da(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function bn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = yn(i.rasterObjectId || i.id || "");
    return !!s && !!Ro(Da(s));
  }
  function Vo(i) {
    const s = La(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = Nn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: Ta("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function cn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Vo(Ta(l, s));
  }
  function Nr(i, s = null) {
    const l = La(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Uo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function hv(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Wa()}`;
    if (h.mode === "frame") {
      const m = je(), g = String((m == null ? void 0 : m.id) || ""), w = m ? mn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function el(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: re(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function fr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function du(i, s = null, l = null) {
    var I;
    const f = La(i, s), p = Array.isArray(l) ? l : Nr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const C = (M == null ? void 0 : M.geometry) || null, D = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(D) && m.push(...D);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((I = m[0]) == null ? void 0 : I.u) || 0);
    let w = 0, x = 0;
    return m.forEach((M) => {
      w += g + fr(Number((M == null ? void 0 : M.u) || 0), g), x += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: re(x / m.length, 0, 1)
    };
  }
  function tl(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = fr(Number(i.u || 0), p), w = Number(i.v || 0) - m, x = Number(f || 0) * Wr, I = Math.cos(x), M = Math.sin(x), C = Math.max(0.02, Number(l || 1)), D = (g * I - w * M) * C, Y = (g * M + w * I) * C;
    return {
      ...i,
      u: ((p + D) % 1 + 1) % 1,
      v: re(m + Y, 0, 1)
    };
  }
  function Up(i, s, l, f = null, p = null, m = null) {
    const g = La(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const x = Uo(g.layerKind), I = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let M = !1;
    if (x.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== w) return;
      const D = (I == null ? void 0 : I.get(String((C == null ? void 0 : C.id) || ""))) || C, Y = C == null ? void 0 : C.geometry, K = D == null ? void 0 : D.geometry;
      !Y || !K || (Array.isArray(K.points) && (Y.points = K.points.map((ee) => el(ee, s, l)), M = !0), Array.isArray(K.rawPoints) && (Y.rawPoints = K.rawPoints.map((ee) => el(ee, s, l)), M = !0), Array.isArray(K.processedPoints) && (Y.processedPoints = K.processedPoints.map((ee) => el(ee, s, l)), M = !0));
    }), M && m) {
      const C = Nn().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === w);
      C && (C.frame = null);
    }
    return M;
  }
  function Yp(i, s = 1, l = 0, f = null, p = null, m = null) {
    const g = La(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const x = Uo(g.layerKind), I = Array.isArray(f) ? f : Nr(w, g.layerKind), M = Array.isArray(I) ? new Map(I.map((Y) => [String((Y == null ? void 0 : Y.id) || ""), Y])) : null, C = (m == null ? void 0 : m.centerUv) ?? du(w, g.layerKind, I);
    let D = !1;
    if (x.forEach((Y) => {
      if (String((Y == null ? void 0 : Y.actionGroupId) || "").trim() !== w) return;
      const K = (M == null ? void 0 : M.get(String((Y == null ? void 0 : Y.id) || ""))) || Y, ee = Y == null ? void 0 : Y.geometry, Z = K == null ? void 0 : K.geometry;
      !ee || !Z || (Array.isArray(Z.points) && (ee.points = Z.points.map((le) => tl(le, C, s, l)), D = !0), Array.isArray(Z.rawPoints) && (ee.rawPoints = Z.rawPoints.map((le) => tl(le, C, s, l)), D = !0), Array.isArray(Z.processedPoints) && (ee.processedPoints = Z.processedPoints.map((le) => tl(le, C, s, l)), D = !0));
    }), D && m) {
      const Y = Nn().find((K) => String((K == null ? void 0 : K.actionGroupId) || "") === w);
      Y && (Y.frame = null);
    }
    return D;
  }
  function Xp(i, s, l, f = null) {
    const p = yn(i);
    if (!p) return !1;
    const m = Gn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, w = (g == null ? void 0 : g.transform) || {}, x = Number(w.du || 0) + Number(s || 0), I = re(Number(w.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = I, !0;
  }
  function mv(i, s = 1, l = null) {
    const f = yn(i);
    if (!f) return !1;
    const p = Gn().find((I) => String((I == null ? void 0 : I.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, g = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(g.scale || 1)), x = re(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = x, !0;
  }
  function Et() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = Vo(i);
    if (s) return s;
    const l = Ro(i);
    return l || (V ? fu().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : li().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function dr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? Et() : Vo(p) || Ro(p) || (V ? fu().find((g) => String((g == null ? void 0 : g.id) || "") === p) : li().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function Ra(i = null) {
    const s = Array.isArray(i) ? i : dr();
    if (!s || s.length < 2) return null;
    const l = s.map((I) => en(I)).filter((I) => (I == null ? void 0 : I.visible) && Array.isArray(I.corners) && I.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), w = Math.min(...p), x = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (w + x) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: g, y: w },
        { x: g, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: w, a: { x: m, y: w }, b: { x: g, y: w } },
        { edge: "right", x: g, y: (w + x) * 0.5, a: { x: g, y: w }, b: { x: g, y: x } },
        { edge: "bottom", x: (m + g) * 0.5, y: x, a: { x: g, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (w + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: w },
      rotateHandle: { x: (m + g) * 0.5, y: w - 30 }
    };
  }
  function qp(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function Va() {
    const i = Et();
    return i ? cn(i) || bn(i) ? "stroke" : hn(i) ? "frame" : "image" : null;
  }
  function vn(i) {
    if (!i || typeof i != "object") return !1;
    if (cn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = Nn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (bn(i)) {
      const s = yn(i.rasterObjectId || i.id || ""), l = Gn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function pu(i = null) {
    const s = Array.isArray(i) ? i : dr();
    return s.length > 0 && s.every((l) => vn(l));
  }
  function gv(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (cn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = Nn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (bn(i)) {
      const f = yn(i.rasterObjectId || i.id || ""), p = Gn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function yv() {
    if (r) return;
    const i = dr();
    if (!i.length) return;
    const s = !pu(i);
    let l = !1;
    i.forEach((f) => {
      gv(f, s) && (l = !0);
    }), l && (Ze(), ot(), We(), $e(), ue());
  }
  function Rn(i) {
    eo(), Ge.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && Nt(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && hn(i) ? _.active.selected_shot_id = i.id || null : i ? hn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function bv(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const w = String((g == null ? void 0 : g.id) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }), h.selectedIds = l, eo(), Ge.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = Et();
    _.active.selected_sticker_id = m && Nt(m) && m.id || null, m && hn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Jp() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = Qs().map((l, f) => {
      var m, g;
      const p = Bt(l) ? String(l.id || Ff) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Zp(i) {
    return i === "frame" ? Pe.camera : i === "stroke" ? Pe.paintbrush_vertical_tool : Pe.image;
  }
  function hu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Zp(i.kind)
    };
  }
  function nl() {
    return su();
  }
  function Bt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Ff || String(i.source_kind || "") === oF;
  }
  function $o(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function vv(i) {
    return Bt(i) && $o(i) ? Kb : 1;
  }
  function _v() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function wv() {
    return String(_v() || "") === "lasso_fill";
  }
  function Sv() {
    if (r) return;
    const i = Et();
    !i || !Bt(i) || (i.visible = $o(i), Ja(), Vt(), Ze(), ot(), $e(), We(), ue());
  }
  function xv() {
    if (r || t !== "stickers") return;
    const i = Et();
    if (!i || !Bt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = bu(Ll, () => {
      ue();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Ti(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), Ze(), ot(), $e(), We(), ue();
  }
  function kv(i) {
    if (!i || !Bt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = bu(Ll, () => {
      ue();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Ti(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function Mv() {
    const i = Et();
    if (!i || !Bt(i)) return !1;
    const s = kv(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Oi(i) {
    return jn.uiList(e, i);
  }
  function mu(i) {
    return jn.uiValue(e, i);
  }
  function Qp() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return _c(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Nv() {
    const { metaKey: i } = Qp(), s = mu(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function gu(i) {
    return i ? i instanceof HTMLVideoElement ? [
      String(i.currentSrc || i.src || ""),
      Number(i.videoWidth || 0),
      Number(i.videoHeight || 0)
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
  function yu(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function rl() {
    return k ? _.timeline.fps : Lt.metaFps || 1e3;
  }
  function Ei(i = {}) {
    const s = Number(i.duration ?? E.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? E.videoTransport.fps ?? 24)), f = Wt.frame / rl(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!E.videoTransport.ready, m = Wt.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!E.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Ae instanceof HTMLVideoElement ? Ae.muted : E.videoTransport.muted), x = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Ae instanceof HTMLVideoElement ? Ae.volume : E.videoTransport.volume
    ), I = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Hp(Ae), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!E.videoTransport.loop;
    Object.assign(E.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: yu(f),
      durationLabel: yu(s),
      frameCount: Math.max(0, Number(i.frameCount ?? E.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: I,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : E.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? E.videoTransport.thumbnailCount ?? sn))
    });
  }
  function eh() {
    return !!(Ae instanceof HTMLVideoElement && !k && Ae.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function th() {
    if (!(Ae instanceof HTMLVideoElement) || !E.videoTransport.hasAudio) return;
    const i = !Ae.muted;
    Ae.muted = i, !i && Number(Ae.volume || 0) <= 0 && (Ae.volume = Math.max(0.01, Number(E.videoTransport.volume || 1))), Ei({
      hasAudio: E.videoTransport.hasAudio,
      muted: Ae.muted,
      volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1)
    });
  }
  function Pv() {
    Ei({
      visible: eh()
    });
  }
  function Av() {
    if (!(Ae instanceof HTMLVideoElement) || Number(Ae.videoWidth || 0) < 1 || Number(Ae.videoHeight || 0) < 1) return !1;
    const i = Number(Ae.videoWidth || 0), s = Number(Ae.videoHeight || 0);
    (G.width !== i || G.height !== s) && (G.width = i, G.height = s);
    const l = G.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Ae, 0, 0, i, s), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function nh() {
    return !Wt.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : Ae instanceof HTMLVideoElement && Number(Ae.videoWidth || 0) > 0 && Number(Ae.videoHeight || 0) > 0 && Number(Ae.readyState || 0) >= 2 ? Ae : null;
  }
  function rh() {
    G.__panoFrameIdx = 0, se.backgroundDirty = !0;
  }
  function Fi() {
    if (!(Ae instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Qp(), s = xn(e, "background") && Oi(i)[0] || null, l = fs(s), f = [l, jn.linkedVideoFile(e, _h())].filter(Boolean), p = f.find((C) => !Lt.failedSrcs.has(C)) || "";
    Lt.videoFailed = !p && f.length > 0;
    const m = p && p === l ? Nv() : null;
    Lt.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), w = Ae.dataset.panoSrc === p && Number.isFinite(Ae.duration) ? Ae.duration : 0, x = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : w)), I = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(x * g))), M = !!(m != null && m.has_audio) || Hp(Ae);
    return p && Ae.dataset.panoSrc !== p ? (Ae.pause(), rh(), Ae.dataset.panoSrc = p, Ae.loop = !k && !!E.videoTransport.loop, Ae.muted = !!E.videoTransport.muted, Ae.volume = Math.max(0, Math.min(1, Number(E.videoTransport.volume ?? 1))), Ae.src = p, Ae.load(), Wt.setSource(!0), k || Wt.seek(0)) : !p && Ae.getAttribute("src") && (Ae.pause(), Ae.removeAttribute("src"), delete Ae.dataset.panoSrc, Ae.load(), rh(), Zs(), Wt.setSource(!1)), k || (Ae.loop = !!E.videoTransport.loop), p && !k && Lt.thumbnailSrc !== p && !Lt.thumbnailFailedSrcs.has(p) && rv(p, x, g), p || Zs(), Ei({
      ready: !!p,
      visible: !!p && eh(),
      duration: x,
      frameCount: I,
      fps: g,
      hasAudio: M,
      loop: !!Ae.loop,
      muted: !!Ae.muted,
      volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1),
      thumbnailCount: E.videoTransport.thumbnailCount
    }), p || null;
  }
  function ih(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const f = i[0];
      if (f && typeof f == "object" && !Array.isArray(f)) return f;
    }
    if (Array.isArray(s) && s.length > 0) {
      const f = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (f && typeof f == "object" && !Array.isArray(f))
        return {
          yaw_deg: Number(f.yaw_deg || 0),
          pitch_deg: Number(f.pitch_deg || 0),
          hFOV_deg: Number(f.hFOV_deg || 30),
          rot_deg: Number(f.roll_deg || 0)
        };
    }
    return null;
  }
  function bu(i, s = null) {
    return Rf(e, i, Qt, s || (() => ue()));
  }
  function vu(i = null) {
    return xn(e, "external-sticker") ? bu(Ll, i) : null;
  }
  function oh() {
    if (!xn(e, "external-sticker")) return null;
    const i = Oi(lF)[0];
    if (!i || typeof i != "object") return null;
    const s = Oi(sF).map(fs).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = fs(Oi(aF)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function Cv() {
    const i = _.stickers.find(Bt), s = i ? oh() : null, l = s ? o1(i.clip, h.frame, _.timeline.fps, s.meta) : null;
    Do.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: Wt.advancing, fps: _.timeline.fps });
    const f = i ? Nu(i) : null, p = s != null && s.frames ? iv.picture(s.frames, l, s.meta, f) : Do.picture(ve, f);
    return p ? { media: p, revision: gu(p), source: s1(s, f) } : null;
  }
  function Ti(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = re(Number(i || 30), 0.1, 179) * Wr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return re(g * _o, 0.1, 179);
  }
  function Iv(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const f = l.version;
      let p = null;
      if (typeof f == "number" && Number.isInteger(f) ? p = f : typeof f == "string" && /^\d+$/.test(f) && (p = Number.parseInt(f, 10)), p !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), w = Number(m.pitch_deg), x = Number(m.roll_deg), I = Number(m.hFOV_deg);
      if (![g, w, x, I].every((Y) => Number.isFinite(Y))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const C = {
        yaw_deg: M,
        pitch_deg: re(w, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: re(I, 0.1, 179)
      }, D = Number(l.source_aspect);
      return Number.isFinite(D) && D > 0 && (C.source_aspect = D), C;
    } catch {
      return null;
    }
  }
  function ah(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Po(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(s) ? s : 0),
        pitch_deg: re(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: re(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Ov(i) {
    var w;
    if (!i || typeof i != "object") return ah(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const x = re(p, 0.1, 179) * Wr, I = re(m, 0.1, 179) * Wr, M = Math.tan(I * 0.5);
      if (Math.abs(M) > 1e-6) {
        const C = Math.tan(x * 0.5) / M;
        Number.isFinite(C) && C > 0 && (g = C);
      }
    }
    if (i != null && i.asset_id && ((w = _ == null ? void 0 : _.assets) != null && w[i.asset_id])) {
      const x = _.assets[i.asset_id], I = Number((x == null ? void 0 : x.w) || 0), M = Number((x == null ? void 0 : x.h) || 0);
      I > 0 && M > 0 && (g = I / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(s) ? s : 0),
        pitch_deg: re(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: re(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function Ev(i) {
    return jn.linkedValue(e, i);
  }
  function Fv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Iv(s);
    if (f) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), w = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Ti(f.hFOV_deg, g, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ti(30, p, m),
      rot_deg: 0
    };
  }
  function Tv() {
    const i = vu(() => {
      wi(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? ih(mu("pano_sticker_input_pose"), null) : null;
    return y1(_, g1(e, { pose: s, image: i }));
  }
  function Dv() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((x) => String((x == null ? void 0 : x.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, l = vu(() => {
      wi(e, "image-loaded");
    }), f = ih(mu("pano_sticker_input_pose"), null), p = Ev("sticker_state"), m = jn.externalStateHash(e, p), g = s == null ? null : Fv(f, p, l);
    return m1(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function sh(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? Tv() : Dv();
    if (s.changed) {
      const l = _.stickers.find(Bt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && h.selectedId === l.id && !_.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), ot(), $e(), We();
    }
    ue();
  }
  function $a(i = {}) {
    const l = i.preservePanelValues !== !1 ? ln(Et()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: gi(l)
    }), h.selectedId = null, h.selectedIds = [], eo(), h.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function zo() {
    return !P || !h.worldSelectedId ? null : _.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function _u(i) {
    Rn(null), h.worldSelectedId = i, se.backgroundDirty = !0;
  }
  function eo() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, se.backgroundDirty = !0);
  }
  function il(i) {
    return !!i && !r && !i.locked;
  }
  function Lv() {
    if (t !== "cutout") return;
    const i = je();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function wu() {
    if (F && ea(E.toolButtons, "value", "add-camera", { disabled: ro() }), t !== "cutout") return;
    const i = je();
    ea(E.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Pe.camera : Pe.plus_circle
    });
  }
  function Rr() {
    const i = HC({
      spaceView: no(),
      spaceMode: oc(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: V && h.mode === "frame",
      showGrid: h.showGrid
    });
    E.space && Object.assign(E.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) ea(E.floatingButtons, "action", s, l);
  }
  function ci() {
    var l;
    const i = GC({ hasShot: !!je(), erp: to(), hidden: ro() && !Vr(), studio: F });
    h.mode === "frame" && i.disabled && (F ? rm(je()) : h.mode = "pano"), h.outputPreviewRect = null, E.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !V), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = V && h.mode === "frame" ? je() : null;
    E.frameRail.visible = !!s, E.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.visible = !!s && !r && s.locked !== !0, E.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), E.frameRollKnob.displayValue = ta(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", E.frameRollKnob.armed = !!s && h.altModifier === !0, E.frameRail.rollKnob = E.frameRollKnob, E.frameRail.aspectLabel = s ? gi(s) : "", E.frameRail.aspectChoices = U1(s ? String(gi(s)) : null, { erp: F, coverage: _.coverage }), s || (E.frameRail.aspectOpen = !1), E.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!je(), V && E.cameraPreview && (E.cameraPreview.visible = h.mode !== "frame" && lh(), E.cameraPreview.expanded = !!h.outputPreviewExpanded, E.cameraPreview.settled = E.cameraPreview.settled === !0 && se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame), Rr(), fm() ? vt(h.pointerPos) : bt(h.mode === "pano" ? "grab" : "default");
  }
  function lh() {
    return !F || Vr() && !to();
  }
  function to() {
    return F && Vr() && _.camera.projection === "erp";
  }
  function Rv() {
    const s = wh({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function ch() {
    return Wb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, O.width, O.height);
  }
  function uh() {
    return !k || !xn(e, "scene") ? null : qg(Oi("pano_scene_files"), Oi("pano_scene_meta"), fs);
  }
  function Vv() {
    return !k || !xn(e, "external-sticker") ? null : qg(Oi("pano_sticker_files"), Oi("pano_sticker_meta"), fs);
  }
  function no() {
    return h.mode === "pano" && za();
  }
  function za() {
    return k && t2({ sceneLinked: P && !!vd(e).scene, files: uh(), stickers: _.stickers });
  }
  function pr() {
    return h.spaceMode === "6dof" && no();
  }
  function Su() {
    var i, s, l;
    return qP((l = (s = (i = Fr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, T1));
  }
  function xu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function ja(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function $v(i) {
    var l;
    const s = LC(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        Qi({ ..._n(), position: jo(), distance: ((l = $r()) == null ? void 0 : l.radius) || Ir }, { mode: i, moved: !1 });
        return;
      }
      Ea(), ja(dd({ ...xu(), position: _n().position }, i, jo())), se.backgroundDirty = !0, Rr(), ue({ localOnly: !0 });
    }
  }
  function _n() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = $r()) == null ? void 0 : l.radius) || Ir, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return qN(h.spaceMode, s, jo());
  }
  function jo() {
    return Vr() ? io().position : [0, 0, 0];
  }
  function ro() {
    return B && _.camera !== null;
  }
  function Vr() {
    return ro() && (!F || _.camera.visible);
  }
  function ol() {
    return _.painting_visible !== !1;
  }
  function al(i) {
    return i.visible && ga(i.clip, h.frame);
  }
  function io() {
    return up(_.camera, h.frame);
  }
  function $r() {
    var s;
    const i = rr();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function fh(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, se.backgroundDirty = !0, ue({ localOnly: !0 });
  }
  function zr() {
    var i;
    return ((i = $r()) == null ? void 0 : i.radius) || Ir;
  }
  function zv() {
    var w;
    const i = rr().space, s = Mt.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((x) => x.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: kc(s, h.frame).stickers[f],
      plane: i.stickers.find((x) => x.id === l) ?? null,
      item: ((w = i.sticker) == null ? void 0 : w.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: Ie.sceneBox(i.sticker.url) } : null
    }, m = hr() ? kh() : s2($r(), p);
    if (!m) return;
    const g = _n();
    h.viewDistance = g.distance, h.viewMoved = !0, Qi(Xg(g, m, O.width, O.height));
  }
  function dh(i) {
    return Ie.pickSurface(Yo(), i.x, i.y, O.width, O.height);
  }
  function ph(i, s) {
    var l;
    return Sf(i, s, h.viewMoved ? null : (l = $r()) == null ? void 0 : l.center, zr());
  }
  function hh() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function jv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: Ie.contentKey(), view: hh() };
    if (!Wg(Lr, f)) {
      const m = dh(i);
      Lr = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = _n();
    fh(Yg(p, ph(p, Lr.hit), s, zr())), Lr.view = hh(), Lr.wheelTime = l;
  }
  function mh(i, s, l) {
    const f = _n();
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: ph(f, dh(s)) } : { kind: "space_pan", last: s, depth: Kg(f, zr()) }, vt(s), O.setPointerCapture(l);
  }
  function ku() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${O.width}|${O.height}`;
    return it.key !== i && (it = { key: i, projection: Bb(ch(), O.width, O.height) }), it.projection;
  }
  function Ha(i) {
    const s = ku().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Mu(i, s) {
    return ku().ray(i, s);
  }
  function Di() {
    const i = O.width, s = O.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const w = s, x = w * l;
      return { x: (i - x) * 0.5, y: 0, w: x, h: w };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function Nu(i) {
    var g;
    if (i && typeof i == "object" && (Bt(i) || i.external === !0))
      return vu(() => {
        wi(e, "image-loaded");
      });
    const s = k ? Ga(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Qt.get(s);
    if (l) return l;
    const f = k ? Db(i.source) : (g = _.assets) == null ? void 0 : g[s], p = wF(f);
    if (!p) return null;
    const m = new Image();
    return J1(m, p), m.onload = () => {
      Z1(m, p), ue();
    }, m.onerror = () => {
      Q1(m, p), ue();
    }, m.src = p, Qt.set(s, m), m;
  }
  function Ga(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function gh(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Ci.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ci.set(l, p), p;
  }
  function Hv(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = To.get(s);
    if (l) return l.ready ? l : null;
    const f = gh(i, () => {
      const M = To.get(s);
      M && (M.ready = !1), ue({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = Sn({ label: "editor.image-pixels" });
    g.width = p, g.height = m;
    const w = g.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, p, m), w.drawImage(f, 0, 0, p, m);
    const x = w.getImageData(0, 0, p, m).data, I = { canvas: g, width: p, height: m, alpha: x, ready: !0 };
    return To.set(s, I), I;
  }
  function Gv(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = fr(Number(i.u || 0), p), w = Number(i.v || 0) - m, x = Math.max(0.02, Number(l || 1)), I = Number(f || 0) * Wr, M = Math.cos(I), C = Math.sin(I), D = g / x, Y = w / x, K = D * M + Y * C, ee = -D * C + Y * M;
    return {
      ...i,
      u: ((p + K) % 1 + 1) % 1,
      v: m + ee
    };
  }
  function Kv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = Gv(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(l.u1 || 0) - Number(l.u0 || 0), x = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(w > 1e-6) || !(x > 1e-6)) return null;
    const I = fr(Number(g.u || 0), Number(l.u0 || 0)) / w, M = (Number(g.v || 0) - Number(l.v0 || 0)) / x;
    if (I < 0 || I > 1 || M < 0 || M > 1) return 0;
    const C = Hv(i);
    if (!C) return null;
    const D = re(Math.floor(I * C.width), 0, C.width - 1), Y = re(Math.floor(M * C.height), 0, C.height - 1);
    return Number(C.alpha[(Y * C.width + D) * 4 + 3] || 0);
  }
  function yh(i, s, l, f = null) {
    if (!(s != null && s.visible) || !ji(l, s.corners)) return !1;
    const p = f || Ar(l, performance.now()), m = Kv(i, p);
    return m === null ? !0 : m > 8;
  }
  function Wv() {
    var f, p, m, g, w, x, I, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, lu(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : w.width) || 2048)), l = Math.max(1, Number(((x = i == null ? void 0 : i.descriptor) == null ? void 0 : x.height) || ((M = (I = i == null ? void 0 : i.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: l };
  }
  function Bv() {
    var Y, K, ee;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = ir(), f = `${uu()}:${l.width}:${l.height}`;
    if (((Y = h._activePaintEraserPreviewInfo) == null ? void 0 : Y.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = An(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Du(Z, p.targetSpace, !0);
    }
    const g = Ka(l.width, l.height, { readback: !0 });
    if (!Th(g, p, { w: l.width, h: l.height })) return null;
    const w = ((ee = (K = g.ctx) == null ? void 0 : K.getImageData(0, 0, l.width, l.height)) == null ? void 0 : ee.data) || null;
    if (!w) return null;
    let x = l.width, I = l.height, M = -1, C = -1;
    for (let Z = 0; Z < l.height; Z += 1)
      for (let le = 0; le < l.width; le += 1)
        w[(Z * l.width + le) * 4 + 3] <= 8 || (le < x && (x = le), Z < I && (I = Z), le > M && (M = le), Z > C && (C = Z));
    if (M < x || C < I)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const D = {
      surface: g,
      bounds: { minX: x, minY: I, maxX: M, maxY: C },
      key: `${f}:${x}:${I}:${M}:${C}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: D }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function Ho() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function Uv(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, w = Number(m.u0 || 0) + Number(g.du || 0), x = Number(m.u1 || 0) + Number(g.du || 0), I = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(re(I, 0, 1) * l),
        maxY: Math.ceil(re(M, 0, 1) * l),
        wraps: x - w >= 1 || w < 0 || x > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Nr(i.actionGroupId, "paint"), g = Ii(i.actionGroupId, "paint", m);
      if (!g) return null;
      const w = g.centerUv.u - g.halfW, x = g.centerUv.u + g.halfW, I = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(re(I, 0, 1) * l),
        maxY: Math.ceil(re(M, 0, 1) * l),
        wraps: x - w >= 1 || w < 0 || x > 1
      };
    }
    return null;
  }
  function Yv(i, s, l) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((w) => !(g.maxX < w.minX || w.maxX < g.minX || g.maxY < w.minY || w.maxY < g.minY)));
  }
  function Xv(i, s, l) {
    var ye, Be, qe, lt, we, de, _e;
    if (!i || !s || !((ye = l == null ? void 0 : l.surface) != null && ye.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = Uv(s, f, p);
    if (m && !Yv(m, l.bounds, f)) return i;
    const g = String(((Be = s.item) == null ? void 0 : Be.id) || s.id || ""), w = ((qe = s.item) == null ? void 0 : qe.transform) || {}, x = `${l.key}:${g}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, I = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (I.has(x)) return I.get(x);
    const M = re(Math.floor(Number(((lt = l.bounds) == null ? void 0 : lt.minX) || 0)), 0, Math.max(0, f - 1)), C = re(Math.floor(Number(((we = l.bounds) == null ? void 0 : we.minY) || 0)), 0, Math.max(0, p - 1)), D = re(Math.ceil(Number(((de = l.bounds) == null ? void 0 : de.maxX) || 0)), M, Math.max(0, f - 1)), Y = re(Math.ceil(Number(((_e = l.bounds) == null ? void 0 : _e.maxY) || 0)), C, Math.max(0, p - 1)), K = Math.max(1, D - M + 1), ee = Math.max(1, Y - C + 1), Z = Ka(f, p, { readback: !0 });
    Z.ctx.clearRect(0, 0, f, p), Z.ctx.drawImage(i, 0, 0);
    const le = Z.ctx.getImageData(M, C, K, ee);
    Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(l.surface.canvas, 0, 0), Z.ctx.restore();
    const he = Z.ctx.getImageData(M, C, K, ee);
    let oe = !1;
    for (let Re = 0; Re < K * ee; Re += 1) {
      const He = le.data[Re * 4 + 3], nt = he.data[Re * 4 + 3];
      if (He > nt) {
        oe = !0;
        break;
      }
    }
    return oe ? (I.size > 64 && I.clear(), I.set(x, Z.canvas), Z.canvas) : (I.set(x, i), i);
  }
  function bh(i, s = null) {
    const l = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = gh(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = Wv(), w = (i == null ? void 0 : i.transform) || {}, x = [
      l,
      m,
      g,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      w.du,
      w.dv,
      w.rot_deg,
      w.scale,
      Wa()
    ].join(":"), I = qi.get(x);
    if (I) return I;
    qi.size > 64 && qi.clear();
    const M = Sn({ label: "editor.raster-erp" });
    M.width = m, M.height = g;
    const C = M.getContext("2d");
    if (!C) return null;
    const D = Number(f.u0 || 0) * m, Y = Number(f.v0 || 0) * g, K = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), ee = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), Z = D + K * 0.5 + Number(w.du || 0) * m, le = Y + ee * 0.5 + Number(w.dv || 0) * g, he = Number(w.rot_deg || 0) * Wr, oe = Math.max(0.01, Number(w.scale || 1));
    for (const ye of [-m, 0, m])
      C.save(), C.translate(Z + ye, le), C.rotate(he), C.scale(oe, oe), C.drawImage(p, -K * 0.5, -ee * 0.5, K, ee), C.restore();
    return qi.set(x, M), M;
  }
  async function Pu(i, s) {
    const l = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await qt.fetchApi("/upload/image", { method: "POST", body: f });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let sl = null, ll = !1;
  function qv() {
    if (A) return !1;
    const i = B0(_.painting), { width: s, height: l } = Ua();
    return AN(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function vh() {
    const i = String(e.id ?? "0"), s = Rl.get(i);
    if (ll && s) return s;
    const l = (async () => {
      var m, g, w, x, I, M, C, D, Y, K, ee, Z;
      const f = Ba(), p = B0(_.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, sl = f, Vn());
        return;
      }
      if (sl !== f && !ll) {
        ll = !0;
        try {
          pl();
          const le = lu(!1), he = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, le)) || null, oe = ((w = he == null ? void 0 : he.displayPaint) == null ? void 0 : w.canvas) || null, ye = ((x = he == null ? void 0 : he.committedMask) == null ? void 0 : x.canvas) || null, Be = Math.max(1, Number(((I = he == null ? void 0 : he.descriptor) == null ? void 0 : I.width) || (oe == null ? void 0 : oe.width) || (ye == null ? void 0 : ye.width) || 2048)), qe = Math.max(1, Number(((M = he == null ? void 0 : he.descriptor) == null ? void 0 : M.height) || (oe == null ? void 0 : oe.height) || (ye == null ? void 0 : ye.height) || 1024));
          (!oe && p.totalPaintCount > 0 || !ye && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Be || Number(((D = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== qe) && (h._paintLayerSyncBlankSurface = Ka(Be, qe)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Be, qe));
          const lt = oe || p.totalPaintCount > 0 && ((Y = h._paintLayerSyncBlankSurface) == null ? void 0 : Y.canvas) || null, we = ye || p.totalMaskCount > 0 && ((K = h._paintLayerSyncBlankSurface) == null ? void 0 : K.canvas) || null;
          if (!lt && !we) return;
          let de = null, _e = null;
          const Re = [];
          if (p.totalPaintCount > 0) {
            de = await Pu(lt, `pano_paint_${i}.png`);
            for (const He of le) {
              const nt = String(He || "").trim();
              if (!nt) continue;
              const ct = ((Z = (ee = h.paintEngine) == null ? void 0 : ee.getGroupDisplayCanvas) == null ? void 0 : Z.call(ee, nt)) || null;
              if (!ct) continue;
              const Ft = nt.replace(/[^a-zA-Z0-9_-]+/g, "_"), ut = await Pu(ct, `pano_group_${i}_${Ft}.png`);
              ut && Re.push({
                id: nt,
                actionGroupId: nt,
                image: ut
              });
            }
          }
          p.totalMaskCount > 0 && (_e = await Pu(we, `pano_mask_${i}.png`)), f === Ba() && (_.painting_layer = {
            paint: de,
            mask: _e,
            groups: Re,
            revision: f
          }, sl = f, Vn());
        } catch (le) {
          throw le;
        } finally {
          ll = !1;
        }
      }
    })();
    return Rl.set(i, l), l.finally(() => {
      Rl.get(i) === l && Rl.delete(i);
    }), l;
  }
  function Au() {
    if (t === "cutout" && !A) {
      const p = nh();
      if (p) return p;
      const m = Vf(
        e,
        ["erp_image", "bg_erp"],
        () => ue(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Dd(m) ? m : Rf(e, "pano_input_images", Qt, () => ue()) || m || null;
    }
    const i = nh();
    if (i) return i;
    const s = xn(e, "background") ? Rf(e, "pano_input_images", Qt, () => ue()) : null;
    if (s && !Dd(s)) return s;
    if (Ae instanceof HTMLVideoElement && Ae.dataset.panoSrc) return Ae;
    const l = _h();
    return Vf(e, l, () => ue(), `background:${l.join("|")}`) || s || null;
  }
  function Jv() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function _h() {
    if (t === "cutout") return A ? Jv() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Cu(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Zv() {
    if (Ie.failed) return { status: br, detail: "renderer" };
    if (!Ie.ready) return { status: Or, detail: "boot" };
    const i = Au(), s = Lt.videoFailed ? br : Td(i, Cu), l = [];
    for (const f of Fa()) {
      if ((f == null ? void 0 : f.visible) === !1) continue;
      const p = Nu(f);
      l.push(Td(p, Cu));
    }
    return tF({
      presented: se.hasPresentedFrame,
      background: s,
      stickers: l
    });
  }
  function Go() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], Qt.delete(s));
    });
  }
  function Iu(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(re(i.y, -1, 1))
    };
  }
  function Ou(i, s = null) {
    const { lon: l, lat: f } = Iu(i), p = Di();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function cl(i) {
    const s = ln(i), l = Aa(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(re(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Wr), p = Math.tan(re(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Wr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Li(i, s, l) {
    return AF(K0(K0(i.centerDir, W0(i.right, s)), W0(i.up, l)));
  }
  function wh(i) {
    const s = cl(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Li(s, f * s.tanX, p * s.tanY));
  }
  function Sh(i, s, l) {
    const f = cl(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Li(f, p, m);
  }
  function xh(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: re((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Qv(i) {
    var x, I, M, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.scale) || 1)), p = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((D) => el(tl(D, l, f, p), m, g));
  }
  function e_(i) {
    const s = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Wa()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = je(), g = m ? mn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function t_(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = hn(i) ? "frame" : Nt(i) ? "sticker" : "item", f = ln(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      gi(f),
      nr(i) && al(i)
    ].join(":");
    if (h.mode === "frame") {
      const m = je(), g = m ? mn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function n_(i) {
    var g;
    const s = ((g = h.paintEngine) == null ? void 0 : g.getMaskDisplayCanvas()) || null;
    if (!s) return i;
    const l = `mask_display:${h.paintEngine.getMaskDisplayRevision()}`, f = i.reduce((w, x) => Math.max(w, Number((x == null ? void 0 : x.zIndex) || 0)), -1), p = (Array.isArray(_.stickers) ? _.stickers : []).reduce((w, x) => Math.max(w, Number((x == null ? void 0 : x.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function r_() {
    var f, p;
    const i = cu(!0), s = Bv(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!w) continue;
        l.push({
          id: `paint_group:${g}`,
          source: w,
          revision: `${T_()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, w = yn((g == null ? void 0 : g.id) || m.id || "");
        if (!w) continue;
        const x = bh(g, () => ue());
        if (!x) continue;
        const I = Xv(x, m, s), M = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${w}`,
          source: I,
          revision: [
            Ba(),
            (s == null ? void 0 : s.key) || "",
            w,
            Number(M.du || 0).toFixed(6),
            Number(M.dv || 0).toFixed(6),
            Number(M.rot_deg || 0).toFixed(3),
            Number(M.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return n_(l);
  }
  function i_() {
    return ol() ? r_().filter((i) => i.visible !== !1).map((i) => ({ id: i.id, media: i.source, revision: i.revision, opacity: i.opacity, zIndex: i.zIndex })) : [];
  }
  function rr() {
    return on || (on = o_()), on;
  }
  function o_() {
    const i = Au(), s = i_(), l = { ..._.assets };
    for (const ee of k ? [] : _.stickers) {
      const Z = String((ee == null ? void 0 : ee.asset_id) || "");
      Z && !l[Z] && Qt.has(Z) && (l[Z] = { type: "comfy_image", filename: Z });
    }
    const f = k ? _.stickers.map((ee) => au(ee) ? { ...ee, source: { kind: "file", filename: Ga(ee) } } : ee) : _.stickers, p = ({ clip: ee, ...Z }) => Z, m = JSON.stringify([f.map(p), Object.keys(l), p(_.scene ?? {})]);
    Mt.key !== m && (Mt = { key: m, sceneState: ei({ ..._, stickers: f, assets: l, painting: null }) }), k && a_(Mt.sceneState);
    const g = Do ? Cv() : null, w = (ee) => {
      if (k && !ee.visible) return null;
      if (Do && Bt(ee)) return g;
      const Z = Nu(ee);
      return Z ? { media: Z, revision: gu(Z) } : null;
    }, x = Ub(Mt.sceneState, h.frame, _.stickers, { media: w, paintLayers: s }), I = i && (i === Ae || i === G) ? Ae.dataset.panoSrc : i, M = Cu(i) ? { media: i, revision: gu(i), coverage: qn(_.coverage), source: I } : null, C = za(), D = JN(xu(), C, jo());
    D.mode !== h.spaceMode && Ea(), ja(D);
    const Y = C ? s_(Mt.sceneState, w) : null, K = no() ? { ...Y, ...l_(Y) } : null;
    return { background: M, layers: x, space: K, content: Y };
  }
  function a_(i) {
    const s = new Map(_.stickers.map((l) => [l.id, l.clip]));
    i.scene.clip = { ..._.scene.clip };
    for (const l of i.stickers) {
      const f = s.get(l.id);
      f && (l.clip = { ...f });
    }
  }
  function s_(i, s) {
    const l = kc(i, h.frame), f = uh(), p = Hb(f, l.scene), m = p != null && p.url ? Ie.sceneBox(p.url) : null, g = m && md(p.kind, m), w = Vv(), x = n2(w, i, l), I = x != null && x.url ? Ie.sceneBox(x.url) : null, M = I ? [{ box: md(x.kind, I), value: x.value }] : [], C = k2(i, h.frame, _.stickers, { media: s }), D = yd(o2(l, g, C, M));
    return {
      evaluated: l,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: r2(w, i),
      sticker: x,
      stickers: C,
      sphere: D
    };
  }
  function l_(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Ir;
    return {
      gizmo: hr() ? d_() : c_(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? b2(s) : null,
      lines: Vr() ? f_(s) : []
    };
  }
  function c_(i) {
    const s = zo(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !il(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: pd(l) };
  }
  function Eu(i) {
    return i * 0.2;
  }
  function kh() {
    return { center: io().position, radius: Eu(zr()) };
  }
  function u_(i, s) {
    const { yaw_deg: l, pitch_deg: f } = Gb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function hr() {
    return Vr() && h.selectedId === ql;
  }
  function f_(i) {
    const s = _2(w2(_, hl())), l = s.length ? [{ segments: s, color: fF }] : [];
    if (!pr()) return l;
    const f = hr() ? z0 : uF;
    return [...l, { segments: Qg(io(), Eu(i)), color: f }];
  }
  function d_() {
    return !pr() || !hr() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: pd({ ...io(), scale: 1 }) };
  }
  function p_(i, s) {
    var p;
    const l = (p = rr().space) == null ? void 0 : p.gizmo;
    if (hr() && l && ao("hover", s) !== null && ao("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: io(), changed: !1 }, O.setPointerCapture(i.pointerId), vt(s), !0;
    const f = Qg(io(), Eu(zr()));
    return v2(Yo(), f, s, O.width, O.height) ? (hr() || (Rn(je()), $e(), We(), ue()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function h_() {
    if (!se.backgroundDirty && se.backgroundWasVisible) return;
    const { background: i, layers: s, space: l } = rr(), f = ie.width, p = ie.height, m = Ie.render({
      width: f,
      height: p,
      camera: l ? xf(_n(), f, p, l.sphere) : ch(),
      background: i,
      layers: s,
      space: l
    }), g = ie.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !l ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), se.backgroundWasVisible = !!m, se.backgroundDirty = !1, an = null, Rr(), (h.worldSelectedId || hr() || be) && We();
  }
  function Mh(i) {
    const { content: s } = rr();
    return !s || !i.position ? Cs(i) : zb(Cs(i), i.position, om(), s.sphere);
  }
  function Nh(i, s, l, f) {
    const { background: p, layers: m, content: g } = rr();
    if (!p && !m.length && !g) return !1;
    const w = g && l.position ? g : null, x = Ie.render({ width: s.w, height: s.h, camera: Mh(l), background: p, layers: m, space: w, owner: f });
    return x ? (i.drawImage(x.canvas, x.x, x.y, x.width, x.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function m_(i) {
    const s = rr(), l = JSON.stringify([i, ie.width, ie.height, r0(s)]);
    if (l === an) return;
    const f = Ie.renderUnwrap({ width: i.w, height: i.h, ...s }), p = ie.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, ie.width, ie.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), an = f ? l : null, se.backgroundWasVisible = !1;
  }
  function g_(i = !1) {
    const s = O.width, l = O.height, f = Di();
    if ($.globalAlpha = 1, $.lineWidth = 1, i || $.clearRect(0, 0, s, l), pl(), m_(f), h.showGrid && !h.fullscreen) {
      $.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        $.beginPath(), $.moveTo(g, f.y), $.lineTo(g, f.y + f.h), $.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        $.beginPath(), $.moveTo(f.x, g), $.lineTo(f.x + f.w, g), $.stroke();
      }
      $.strokeStyle = "rgba(250, 250, 250, 0.86)", $.lineWidth = 1.2, $.beginPath(), $.moveTo(f.x, f.y + f.h / 2), $.lineTo(f.x + f.w, f.y + f.h / 2), $.stroke(), $.fillStyle = "rgba(250, 250, 250, 0.42)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center";
      const p = f.y + f.h * 0.57;
      $.fillText("Left", f.x + f.w * 0.25, p), $.fillText("Front", f.x + f.w * 0.5, p), $.fillText("Right", f.x + f.w * 0.75, p), $.fillText("Back", f.x + 38, p), $.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function Ph(i, s, l = 1) {
    let f = !1;
    $.strokeStyle = s, $.lineWidth = l, $.beginPath();
    for (const p of i) {
      const m = Ha(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? $.lineTo(m.x, m.y) : ($.moveTo(m.x, m.y), f = !0);
    }
    $.stroke();
  }
  function y_(i = !1) {
    const s = O.width, l = O.height;
    if (i || $.clearRect(0, 0, s, l), pl(), h_(), h.showGrid && !h.fullscreen && rr().space)
      b_();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(Jn(p, g));
        Ph(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(Jn(g, p));
        Ph(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: Jn(-90, 0) },
        { name: "Front", dir: Jn(0, 0) },
        { name: "Right", dir: Jn(90, 0) },
        { name: "Back", dir: Jn(180, 0) }
      ];
      $.fillStyle = "rgba(250, 250, 250, 0.42)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", f.forEach((p) => {
        const m = Ha(p.dir);
        m && $.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function b_() {
    const i = xf(_n(), O.width, O.height, $r()), s = Gs(i, [0, 0, 0], O.width, O.height);
    s && ($.fillStyle = "rgba(255, 221, 87, 0.9)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", $.fillText("ERP origin", s.x, s.y - 12));
  }
  function v_(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || je();
      if (!p) return [];
      const m = l || mn(p);
      return J_(i, p, m);
    }
    return Dh(i, f);
  }
  function ul(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = Dh([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Ko(i);
    return m ? ui(m, s, l, f) : null;
  }
  function __(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = Nr(l, i.layerKind), p = Ii(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || du(l, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], x = h.mode === "frame" ? je() : null, I = x ? mn(x) : null;
    for (const oe of f) {
      const ye = (oe == null ? void 0 : oe.geometry) || null, Be = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [], qe = v_(Be, x, I, g).filter((de) => Number.isFinite(de == null ? void 0 : de.x) && Number.isFinite(de == null ? void 0 : de.y));
      if (!qe.length) continue;
      const lt = $i(String((oe == null ? void 0 : oe.toolKind) || "pen")), we = Bn[lt] || Bn[pi];
      w.push({
        points: qe,
        closed: String((ye == null ? void 0 : ye.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((oe == null ? void 0 : oe.size) || 10) * Math.max(0.1, Number((we == null ? void 0 : we.sizeScale) ?? 1)) + 10),
        layerKind: String((oe == null ? void 0 : oe.layerKind) || i.layerKind || "paint")
      });
    }
    const M = ul(m, null, x, I, g);
    if (!M) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, oe), oe;
    }
    const D = lv(p).map((oe) => ul(oe, M.x, x, I, g)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y)).map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) }));
    if (D.length < 4) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, oe), oe;
    }
    const Y = (oe, ye) => ({
      x: (Number((oe == null ? void 0 : oe.x) || 0) + Number((ye == null ? void 0 : ye.x) || 0)) * 0.5,
      y: (Number((oe == null ? void 0 : oe.y) || 0) + Number((ye == null ? void 0 : ye.y) || 0)) * 0.5,
      a: oe,
      b: ye
    }), K = Y(D[0], D[1]), ee = Y(D[1], D[2]), Z = Y(D[2], D[3]), le = Y(D[3], D[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...K },
        { edge: "right", ...ee },
        { edge: "bottom", ...Z },
        { edge: "left", ...le }
      ],
      rotateStemBase: { x: K.x, y: K.y },
      rotateHandle: { x: K.x, y: K.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, he), he;
  }
  function w_(i, s) {
    const l = h.mode === "frame" ? je() : null, f = l ? mn(l) : null, p = xh(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = ul(p, null, l, f, m), x = Qv(i).map((D) => ul(D, (g == null ? void 0 : g.x) ?? null, l, f, m)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(x) || x.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, D), D;
    }
    const I = x.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: I.reduce((D, Y) => D + Number(Y.x || 0), 0) / I.length,
        y: I.reduce((D, Y) => D + Number(Y.y || 0), 0) / I.length
      },
      corners: I,
      visible: !0
    };
    return h._strokeGeomCache.set(s, C), C;
  }
  function ui(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = l || je(), C = f || mn(M);
      if (!M || !C) return null;
      const D = M ? Ya(M, i) : null;
      return D ? {
        x: Number(C.x || 0) + Number(D.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(D.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Ou(i, s);
    const m = 1e-4, g = ku().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const w = O.width, x = O.height, I = Math.max(w, x) * 2;
    return {
      x: re(g.x, -I, w + I),
      y: re(g.y, -I, x + I),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function S_(i, s = []) {
    if (h.mode !== "pano" || Nt(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? kF(0.035, 0.2, Math.min(...l)) : 1;
  }
  function x_(i) {
    if (nr(i) && !al(i)) return { visible: !1 };
    const s = ln(i), l = Jn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? je() : null, p = f ? mn(f) : null, m = h.mode === "pano" && (Nt(i) || hn(i)), g = m ? { clipBehind: !0 } : null, w = ui(l, null, f, p, g);
    if (!w) return { visible: !1 };
    const x = cl(i), M = wh(i).map((_e) => ui(_e, w.x, f, p, g)).filter((_e) => Number.isFinite(_e == null ? void 0 : _e.x) && Number.isFinite(_e == null ? void 0 : _e.y));
    if (M.length < 4) return { visible: !1 };
    const C = Li(x, 0, x.tanY), D = Li(x, 0, x.tanY + Math.max(x.tanY * 0.43, 0.053)), Y = ui(C, w.x, f, p, g);
    if (!Y) return { visible: !1 };
    const K = ui(D, (Y == null ? void 0 : Y.x) ?? w.x, f, p, g), ee = ((K == null ? void 0 : K.x) ?? Y.x) - Y.x, Z = ((K == null ? void 0 : K.y) ?? Y.y) - Y.y, le = Math.hypot(ee, Z) || 1, he = {
      x: Y.x + ee / le * 30,
      y: Y.y + Z / le * 30
    }, oe = ui(Li(x, 0, x.tanY), w.x, f, p, g), ye = ui(Li(x, x.tanX, 0), w.x, f, p, g), Be = ui(Li(x, 0, -x.tanY), w.x, f, p, g), qe = ui(Li(x, -x.tanX, 0), w.x, f, p, g);
    if (!oe || !ye || !Be || !qe) return { visible: !1 };
    const lt = [
      w,
      ...M,
      Y,
      K,
      oe,
      ye,
      Be,
      qe
    ];
    if (m && !lt.some((_e) => Number((_e == null ? void 0 : _e.rawZ) ?? (_e == null ? void 0 : _e.z)) > 1e-4)) return { visible: !1 };
    const we = S_(i, lt), de = [
      {
        edge: "top",
        x: oe.x,
        y: oe.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ye.x,
        y: ye.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Be.x,
        y: Be.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: qe.x,
        y: qe.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((_e) => ({ x: _e.x, y: _e.y })),
      edgeMidpoints: de,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: we,
      visible: !0
    };
  }
  function en(i) {
    if (B && hn(i) && pr()) return { visible: !1 };
    if (!ol() && (cn(i) || bn(i))) return { visible: !1 };
    if (cn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = hv(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), __(i, m));
    }
    if (bn(i)) {
      const p = e_(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), w_(i, p));
    }
    const s = t_(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = x_(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function fl(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let w = 0, x = 0;
      s === 0 ? (w = g, x = 0) : s === 1 ? (w = 1, x = g) : s === 2 ? (w = 1 - g, x = 1) : (w = 0, x = 1 - g);
      const I = Sh(i, w, x), M = h.mode === "unwrap" ? Ou(I, f) : Ha(I);
      M && p.push(M);
    }
    return p;
  }
  function k_(i, s) {
    const l = ln(i), f = Jn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? Ou(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, w = [
      fl(i, 0, g, m),
      fl(i, 1, g, m),
      fl(i, 2, g, m),
      fl(i, 3, g, m)
    ];
    Fp($, w, { selected: s });
  }
  function M_() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Qs()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Fu() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Qs()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function dl(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function Ah(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = re(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = $.globalAlpha;
    $.globalAlpha = m * p;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = s ? 3.2 : 2.6;
    dl($, f), $.fillStyle = w, $.fill(), $.strokeStyle = g, $.lineWidth = x, $.stroke(), $.save(), $.strokeStyle = g, $.lineWidth = s ? 3.2 : 2.6, $.lineCap = "round";
    const I = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    I.forEach((D) => {
      const K = I.find((he) => (he == null ? void 0 : he.edge) === M[D == null ? void 0 : D.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, ee = K.x - D.x, Z = K.y - D.y, le = Math.hypot(ee, Z) || 1;
      $.beginPath(), $.moveTo(D.x, D.y), $.lineTo(D.x + ee / le * C, D.y + Z / le * C), $.stroke();
    }), $.restore(), $.globalAlpha = m;
  }
  function N_(i, s, l, f) {
    const p = re(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (hn(i)) {
      Ah(s, l, f);
      return;
    }
    if (Nt(i)) {
      const g = $.globalAlpha;
      $.globalAlpha = g * vv(i) * p, h.mode === "frame" ? ($.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", $.lineWidth = l ? 2 : 1, dl($, s.corners), $.stroke()) : k_(i, l), $.globalAlpha = g;
      return;
    }
    const m = $.globalAlpha;
    $.globalAlpha = m * p, $.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", dl($, s.corners), $.fill(), $.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", $.lineWidth = l ? 2.8 : 1.9, dl($, s.corners), $.stroke(), $.globalAlpha = m;
  }
  function Ch(i, s, l) {
    if (Nt(i)) {
      E1($, s, { accent: l });
      return;
    }
    const f = !(hn(i) && to());
    $.fillStyle = l, f && s.corners.forEach((p) => {
      $.beginPath(), $.arc(p.x, p.y, 6.5, 0, Math.PI * 2), $.fill();
    }), f && hn(i) && ($.strokeStyle = l, $.lineCap = "round", $.lineWidth = 4, s.edgeMidpoints.forEach((p) => {
      var C, D, Y, K;
      const m = (((C = p.b) == null ? void 0 : C.x) ?? p.x) - (((D = p.a) == null ? void 0 : D.x) ?? p.x), g = (((Y = p.b) == null ? void 0 : Y.y) ?? p.y) - (((K = p.a) == null ? void 0 : K.y) ?? p.y), w = Math.hypot(m, g) || 1, x = m / w, I = g / w, M = 10;
      $.beginPath(), $.moveTo(p.x - x * M, p.y - I * M), $.lineTo(p.x + x * M, p.y + I * M), $.stroke();
    }), $.lineCap = "butt"), cn(i) || ($.strokeStyle = "rgba(250, 250, 250, 0.9)", $.lineWidth = 1.8, $.beginPath(), $.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), $.lineTo(s.rotateHandle.x, s.rotateHandle.y), $.stroke(), $.fillStyle = l, $.beginPath(), $.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), $.fill());
  }
  function P_() {
    var m;
    const i = h.mode === "frame" ? [] : dr(), s = i.length > 1, l = V ? M_() : li(), f = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${hn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const w = h.mode !== "frame" && !s && qp(g);
      if (h.mode === "frame" && !w) continue;
      const x = Nt(g), I = hn(g), M = vn(g);
      if (!x && !I || nr(g) && !al(g)) continue;
      const C = en(g);
      if (t !== "stickers" && !C.visible)
        continue;
      const D = re(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (D <= 0.01) continue;
      const Y = I && V && h.mode === "pano" ? re(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if ($.save(), $.globalAlpha *= Y, N_(g, C, w, M), w && C.visible) {
        const K = M ? "#ff4d4f" : x && Bt(g) ? "#f59e0b" : "#0070f3", ee = $.globalAlpha;
        $.globalAlpha = ee * D, Ch(g, C, K), $.globalAlpha = ee;
      }
      $.restore();
    }
    if (V && h.mode === "pano" && !je() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, w = re(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      $.save(), $.globalAlpha *= w, Ah(g.geom, g.selected, g.locked), g.selected && Ch(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), $.restore();
    }
    if (s) {
      const g = Ra(i);
      if (g != null && g.visible) {
        const w = pu(i) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(g.corners[0].x, g.corners[0].y);
        for (let x = 1; x < g.corners.length; x += 1) $.lineTo(g.corners[x].x, g.corners[x].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = w, g.corners.forEach((x) => {
          $.beginPath(), $.arc(x.x, x.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      }
    } else
      i.forEach((g) => {
        if (!cn(g) && !bn(g)) return;
        const w = en(g);
        if (!(w != null && w.visible)) return;
        const x = vn(g) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(w.corners[0].x, w.corners[0].y);
        for (let I = 1; I < w.corners.length; I += 1) $.lineTo(w.corners[I].x, w.corners[I].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = x, w.corners.forEach((I) => {
          $.beginPath(), $.arc(I.x, I.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = gm(h.interaction.start, h.interaction.current);
      $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.9)", $.fillStyle = "rgba(255, 255, 255, 0.08)", $.lineWidth = 1, $.setLineDash([5, 4]), $.beginPath(), $.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), $.fill(), $.stroke(), $.restore();
    }
  }
  function Ih(i, s = !1) {
    const l = re(Po(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function A_(i) {
    if (!Ce || !i) return !1;
    const s = Ce.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ce.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ce.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function C_() {
    if (h.outputPreviewRect = null, E.outputPreviewToggle.visible = h.mode !== "frame" && !!je(), F && (E.outputPreviewToggle.visible = !1), !V || !E.cameraPreview) return;
    if (h.mode === "frame" || !lh()) {
      E.cameraPreview.visible = !1, E.cameraPreview.settled = !1;
      return;
    }
    const i = je();
    E.cameraPreview.visible = !0, E.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = Me == null ? void 0 : Me.getContext("2d");
    if (!i || !s) {
      E.cameraPreview.ready = !1, E.cameraPreview.settled = !1, E.cameraPreview.width = 220, E.cameraPreview.height = 132, E.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, Me.width, Me.height), tr = null;
      return;
    }
    const l = Ih(i, !!h.outputPreviewExpanded);
    E.cameraPreview.width = l.width, E.cameraPreview.height = l.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * f)), h: Math.max(1, Math.round(l.height * f)) };
    (Me.width !== p.w || Me.height !== p.h) && (Me.width = p.w, Me.height = p.h);
    const { content: m } = rr(), g = m && [i.position, Ie.contentKey(), m.stickers.map((M) => [M.id, M.revision, M.opacity, M.position, M.quaternion, M.width])], w = JSON.stringify([p, Pi(i), r0(rr()), g]);
    let x = w === tr;
    if (x || (s.clearRect(0, 0, p.w, p.h), x = Nh(s, p, i, "camera_preview"), tr = x ? w : null), !x) {
      E.cameraPreview.ready = !1, E.cameraPreview.label = Au() ? "Loading preview" : "Connect ERP image", E.cameraPreview.settled = !1;
      return;
    }
    const I = A_(l);
    E.cameraPreview.ready = !0, E.cameraPreview.label = I ? "" : "Loading preview", E.cameraPreview.settled = I && se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame;
  }
  function Tu(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return Sh(i, l, f);
  }
  function Ko(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return iu(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function I_(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function O_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Pn(i, "widthScale", 1),
      pressureLike: Pn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function E_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Du(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let ee = null;
      i.forEach((Z) => {
        const le = Number((Z == null ? void 0 : Z.u) || 0), he = Number((Z == null ? void 0 : Z.v) || 0), oe = (le % 1 + 1) % 1, ye = ee == null ? oe : ee + fr(oe, (ee % 1 + 1) % 1);
        p.set(Z, { x: ye, y: he }), ee = ye;
      });
    }
    const m = (ee) => !ee || typeof ee != "object" ? { x: 0, y: 0 } : p.get(ee) || I_(ee), g = (ee, Z, le, he = {}) => {
      const oe = f ? (Number(Z) % 1 + 1) % 1 : Number(Z), ye = O_(ee, oe, le, he);
      return p.set(ye, { x: Number(Z), y: Number(le) }), ye;
    }, w = (ee, Z, le) => {
      const he = m(ee), oe = m(Z);
      return g(ee, gr(he.x, oe.x, le), gr(he.y, oe.y, le), {
        t: gr(Number((ee == null ? void 0 : ee.t) || 0), Number((Z == null ? void 0 : Z.t) || 0), le),
        widthScale: gr(Pn(ee, "widthScale", 1), Pn(Z, "widthScale", 1), le),
        pressureLike: gr(Pn(ee, "pressureLike", 1), Pn(Z, "pressureLike", 1), le)
      });
    };
    if (i.length === 1) {
      const ee = m(i[0]);
      return [g(i[0], ee.x, ee.y)];
    }
    const x = E_(s, l), I = (ee, Z) => {
      const le = [0];
      for (let de = 1; de < ee.length; de += 1) {
        const _e = m(ee[de - 1]), Re = m(ee[de]);
        le.push(le[de - 1] + Math.hypot(Re.x - _e.x, Re.y - _e.y));
      }
      const he = le[le.length - 1] || 0;
      if (he <= 1e-8) {
        const de = ee[0], _e = m(de);
        return [g(de, _e.x, _e.y)];
      }
      const oe = [];
      let ye = 0;
      for (let de = 0; de <= he + 1e-9; de += Z) {
        for (; ye < le.length - 2 && le[ye + 1] < de; ) ye += 1;
        const _e = le[ye], Re = le[ye + 1], He = Math.max(1e-8, Re - _e);
        oe.push(w(ee[ye], ee[ye + 1], re((de - _e) / He, 0, 1)));
      }
      const Be = ee[ee.length - 1], qe = m(Be), lt = oe[oe.length - 1], we = lt ? m(lt) : null;
      return (!we || Math.hypot(we.x - qe.x, we.y - qe.y) > Z * 0.35) && oe.push(g(Be, qe.x, qe.y)), oe;
    }, M = (ee) => {
      if (!Array.isArray(ee) || ee.length < 3) return ee ? ee.slice() : [];
      const Z = m(ee[0]), le = [g(ee[0], Z.x, Z.y)];
      for (let ye = 0; ye < ee.length - 1; ye += 1) {
        const Be = ee[ye], qe = ee[ye + 1], lt = m(Be), we = m(qe), de = g(
          Be,
          lt.x * 0.75 + we.x * 0.25,
          lt.y * 0.75 + we.y * 0.25,
          {
            t: Number(Be.t || 0) * 0.75 + Number(qe.t || 0) * 0.25,
            widthScale: Pn(Be, "widthScale", 1) * 0.75 + Pn(qe, "widthScale", 1) * 0.25,
            pressureLike: Pn(Be, "pressureLike", 1) * 0.75 + Pn(qe, "pressureLike", 1) * 0.25
          }
        ), _e = g(
          Be,
          lt.x * 0.25 + we.x * 0.75,
          lt.y * 0.25 + we.y * 0.75,
          {
            t: Number(Be.t || 0) * 0.25 + Number(qe.t || 0) * 0.75,
            widthScale: Pn(Be, "widthScale", 1) * 0.25 + Pn(qe, "widthScale", 1) * 0.75,
            pressureLike: Pn(Be, "pressureLike", 1) * 0.25 + Pn(qe, "pressureLike", 1) * 0.75
          }
        );
        le.push(de, _e);
      }
      const he = ee[ee.length - 1], oe = m(he);
      return le.push(g(he, oe.x, oe.y)), le;
    }, C = I(i, x);
    if (C.length < 3) return C;
    const D = l ? 2 : 1;
    let Y = C.slice();
    for (let ee = 0; ee < D; ee += 1) Y = M(Y);
    return I(Y, Math.max(x * 0.75, 55e-5));
  }
  function Pn(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function F_(i) {
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
  function Ka(i, s, l = {}) {
    const f = Sn({ label: "editor.raster-surface" });
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Wa() {
    const i = Ua();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ba() {
    const i = Ua();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function T_() {
    const i = uu(), s = Ba();
    return i ? `${s}:${i}` : s;
  }
  function D_() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function L_() {
    h.paintCompositeRevision += 1;
  }
  function R_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function Oh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), h.paintEngineRevisionKey = Wa();
  }
  function Eh() {
    _.painting_layer !== null && (_.painting_layer = null), sl = "";
  }
  function Vt() {
    R_(), se.backgroundDirty = !0, se.dirty = !0;
  }
  function Pr({ rebuildPaintEngine: i = !1 } = {}) {
    Eh(), D_(), Vt(), i && Oh();
  }
  function Wo() {
    Eh(), L_(), Vt();
  }
  function pl() {
    var f;
    const i = Ua(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = td(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = Wa();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(_));
  }
  function Ua() {
    const i = Math.max(1, N(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function ir() {
    return Ua();
  }
  function V_(i, s, l, f, p = null) {
    const m = F_(i), g = Pn(s, "widthScale", 1) * Pn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Wr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function $_(i, s, l = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * g : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${x})`;
  }
  function z_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function j_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), $_(i, l, p);
    const g = (w) => z_(i, w, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const x = s[w], I = s[w + 1];
      if (!x || !I) continue;
      const M = Number(x.x || 0), C = Number(x.y || 0), D = Number(I.x || 0), Y = Number(I.y || 0), K = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), ee = Math.max(0.5, Math.min(m, Number(I.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(C) || !Number.isFinite(D) || !Number.isFinite(Y) || !Number.isFinite(K) || !Number.isFinite(ee)) continue;
      const Z = D - M, le = Y - C, he = Math.hypot(Z, le);
      if (!Number.isFinite(he) || he < 1e-6) {
        g(x);
        continue;
      }
      if (he > Math.max(f.w, f.h) * 0.5) continue;
      const oe = Math.max(0.5, Math.min(K, ee)), ye = Math.max(0.35, Math.min(oe * 0.4, 2.25)), Be = Math.max(1, Math.ceil(he / ye));
      for (let qe = 0; qe <= Be; qe += 1) {
        const lt = qe / Be;
        g({
          x: gr(M, D, lt),
          y: gr(C, Y, lt),
          radiusPx: gr(K, ee, lt)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function H_(i, s, l, f) {
    j_(i, s, l, f, { preview: !1 });
  }
  function G_(i, s, l, f, p) {
    var w, x, I, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((x = s[0]) == null ? void 0 : x[g]) || 0) * f.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((I = s[C]) == null ? void 0 : I[m]) || 0) * f.w, Number(((M = s[C]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Fh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function K_(i, s) {
    const l = Fh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: V_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Th(i, s, l = null) {
    var w, x, I, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((x = i.canvas) == null ? void 0 : x.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((I = s == null ? void 0 : s.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return G_(i.ctx, Fh(p), p, f), !0;
    const g = K_(p, f);
    return g.length ? (H_(i.ctx, g, p, f), !0) : !1;
  }
  function W_(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), w = new Int32Array(s * l);
    for (let x = 0; x < l; x += 1)
      for (let I = 0; I < s; I += 1) {
        const M = x * s + I;
        if (p[M] || i[M] <= f) continue;
        let C = 0, D = 0;
        g[D] = I, w[D] = x, D += 1, p[M] = 1;
        const Y = [];
        let K = I, ee = x, Z = I, le = x;
        for (; C < D; ) {
          const he = g[C], oe = w[C];
          C += 1, Y.push({ x: he, y: oe }), he < K && (K = he), oe < ee && (ee = oe), he > Z && (Z = he), oe > le && (le = oe);
          const ye = [
            [(he - 1 + s) % s, oe],
            [(he + 1) % s, oe],
            [he, oe - 1],
            [he, oe + 1]
          ];
          for (const [Be, qe] of ye) {
            if (qe < 0 || qe >= l) continue;
            const lt = qe * s + Be;
            p[lt] || i[lt] <= f || (p[lt] = 1, g[D] = Be, w[D] = qe, D += 1);
          }
        }
        m.push({ pixels: Y, minX: K, minY: ee, maxX: Z, maxY: le });
      }
    return m;
  }
  function B_(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, I) => x - I);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let x = 0; x < l.length; x += 1) {
      const I = l[x], C = (x === l.length - 1 ? l[0] + s : l[x + 1]) - I - 1;
      C > f && (f = C, p = x);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let g = 1 / 0, w = -1 / 0;
    for (const x of l) {
      const I = (x - m + s) % s;
      g = Math.min(g, I), w = Math.max(w, I);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - g + 1)
    };
  }
  function U_(i, s, l = {}) {
    var I;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (I = i == null ? void 0 : i.getContext) == null ? void 0 : I.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let M = 0; M < w.length; M += 1) w[M] = g.data[M * 4 + 3];
    return W_(w, f, p, 8).map((M, C) => {
      const D = B_(M, f);
      if (!D) return null;
      const Y = Number(D.widthPx || 0), K = M.maxY - M.minY + 1, ee = Number(D.startX || 0), Z = Sn({ label: "editor.lasso-fill" });
      Z.width = Y, Z.height = K;
      const le = Z.getContext("2d");
      if (!le) return null;
      const he = le.createImageData(Y, K);
      return M.pixels.forEach(({ x: oe, y: ye }) => {
        const Be = (ye * f + oe) * 4, qe = (Number(oe || 0) - ee + f) % f, lt = ((ye - M.minY) * Y + qe) * 4;
        he.data[lt + 0] = g.data[Be + 0], he.data[lt + 1] = g.data[Be + 1], he.data[lt + 2] = g.data[Be + 2], he.data[lt + 3] = g.data[Be + 3];
      }), le.putImageData(he, 0, 0), {
        id: na("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: Y / f,
          v1: (M.maxY + 1) / p
        },
        rasterDataUrl: Z.toDataURL("image/png"),
        transform: {
          du: ee / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ya(i, s) {
    if (!i || !s) return null;
    const l = cl(i), f = zf(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = zf(s, l.right) / f, m = zf(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function Y_(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Di();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Ha(Ko(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Dh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Di();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + fr(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => Ha(Ko(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function X_(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function q_(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ko(p), g = Ya(s, m);
      if (!g) return [];
      f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return X_(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function J_(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ko(p), g = Ya(s, m);
      g && f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function Z_() {
    const i = je(), s = bl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = t0(i, s, { width: O.width, height: O.height }), m = Q_(l);
    return $.save(), $.fillStyle = "#0a0a0a", $.fillRect(0, 0, O.width, O.height), Nh($, f, p) || ($.fillStyle = "rgba(255, 255, 255, 0.03)", $.fillRect(f.x, f.y, f.w, f.h)), $.restore(), $.save(), $.fillStyle = "rgba(0, 0, 0, 0.58)", $.beginPath(), $.rect(0, 0, O.width, O.height), $.roundRect(l.x, l.y, l.w, l.h, m), $.fill("evenodd"), $.restore(), $.save(), $.strokeStyle = z0, $.globalAlpha = 0.62, $.lineWidth = 2, $.beginPath(), $.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), $.stroke(), $.restore(), !0;
  }
  function Q_(i) {
    const s = Math.max(1e-6, Number(se.frameCanvasScale || 1));
    return Math.min(Ji * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function fi() {
    var s;
    const i = h.mode === "frame" ? je() : null;
    E.frameRollKnob.visible = !!i && !r && i.locked !== !0, E.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), E.frameRollKnob.displayValue = ta(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", E.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function ew() {
    var x, I;
    if (((x = h.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (I = i == null ? void 0 : i.geometry) == null ? void 0 : I.points;
    let l;
    if (h.mode === "frame") {
      const M = je(), C = mn(M);
      l = q_(s, M, C);
    } else
      l = Y_(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    $.save(), $.beginPath(), $.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let M = 1; M < l.length; M++) $.lineTo(Number(l[M].x || 0), Number(l[M].y || 0));
    $.closePath(), f ? ($.lineWidth = 2, $.setLineDash([6, 6]), $.lineDashOffset = 0, $.strokeStyle = "rgba(0,0,0,0.96)", $.stroke(), $.lineDashOffset = -6, $.strokeStyle = "rgba(255,255,255,0.96)", $.stroke(), $.setLineDash([]), $.lineDashOffset = 0) : ($.lineWidth = 1.5, $.setLineDash([6, 4]), $.strokeStyle = `rgba(${m},${g},${w},1)`, $.stroke(), $.setLineDash([])), $.restore();
  }
  function tw() {
    const i = h.frameRollOverlayVisual, s = re(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = mn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Wr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(p) * m, w = Math.sin(p) * m;
    $.save(), $.globalAlpha *= s, $.beginPath(), $.rect(l.x, l.y, l.w, l.h), $.clip(), $.translate(f.x, f.y), $.rotate(p);
    const x = Math.max(12, Math.min(l.w, l.h) / 6);
    $.beginPath();
    for (let I = -m; I <= m; I += x)
      $.moveTo(I, -m), $.lineTo(I, m);
    for (let I = -m; I <= m; I += x)
      $.moveTo(-m, I), $.lineTo(m, I);
    $.lineWidth = 1, $.strokeStyle = "rgba(255, 255, 255, 0.22)", $.stroke(), $.setTransform(1, 0, 0, 1, 0, 0), $.beginPath(), $.moveTo(f.x - g, f.y - w), $.lineTo(f.x + g, f.y + w), $.lineWidth = 1.5, $.setLineDash([8, 6]), $.strokeStyle = "rgba(255, 255, 255, 0.92)", $.shadowColor = "rgba(0, 0, 0, 0.8)", $.shadowBlur = 3, $.stroke(), $.setLineDash([]), $.restore();
  }
  function nw() {
    return !V || !je() || B && pr() || F && !hr() ? 0 : hF;
  }
  function rw() {
    const i = re(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !V || h.mode !== "pano") return;
    const s = je(), l = s ? en(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: qp(s),
      locked: vn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if ($.save(), $.fillStyle = `rgba(0, 0, 0, ${i})`, $.beginPath(), $.rect(0, 0, O.width, O.height), m.length >= 4) {
      $.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) $.lineTo(m[g].x, m[g].y);
      $.closePath();
    }
    $.fill("evenodd"), $.restore();
  }
  function Lh() {
    on = null, h.mode === "frame" ? (se.frameSafeRect = $w(), Z_()) : h.mode === "unwrap" ? g_(!1) : y_(!1), rw(), V && C_(), P_(), fi(), ew(), tw(), E.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && We(), se.hasPresentedFrame || (se.hasPresentedFrame = !0, ie.style.opacity = "1"), V && E.cameraPreview && (E.cameraPreview.settled = se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame && h.mode !== "frame");
    const i = Zv();
    E.stageStatus = i.status, E.stageStatusDetail = i.detail, i.status === Or ? (Q == null || Q.removeAttribute("data-stage-ready"), Q == null || Q.setAttribute("data-stage-loading-kind", i.detail)) : (Q == null || Q.setAttribute("data-stage-ready", ""), Q == null || Q.removeAttribute("data-stage-loading-kind"));
  }
  function iw(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Rh() {
    return !!h.interaction || !!Ge.drag;
  }
  function Vh() {
    se.nodePreviewPending = !1, e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = pv();
  }
  function ue(i = {}) {
    var w, x, I, M, C, D, Y, K, ee;
    const s = !!i.localOnly, l = i.externalSync === !0, f = String(i.cause || ""), p = String(((w = h.interaction) == null ? void 0 : w.kind) || "");
    (!s || p === "view" || p === "pan_frame" || iw() || !!h.viewTransition || f === "mode" || f === "frame_view" || f === "cutout_frame") && (se.backgroundDirty = !0), s && Bp() && (h.livePaintInteractionRevision += 1, se.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (wu(), ci()), Rh() ? se.nodePreviewPending = !0 : Vh(), l && ((I = (x = e.__panoDomPreview) == null ? void 0 : x.requestDraw) == null || I.call(x), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((D = (C = e.graph) == null ? void 0 : C.setDirtyCanvas) == null || D.call(C, !0, !0), (ee = (K = (Y = Fr) == null ? void 0 : Y.canvas) == null ? void 0 : K.setDirty) == null || ee.call(K, !0, !0)), se.dirty = !0;
  }
  function $h() {
    const i = O.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== s || O.height !== l || ie.width !== s || ie.height !== l ? (O.width = s, O.height = l, ie.width = s, ie.height = l, se.backgroundDirty = !0, se.dirty = !0, V && (se.pendingStableLayoutFrames = Math.max(Number(se.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function ow(i = performance.now()) {
    var m;
    se.nodePreviewPending && !Rh() && Vh(), or(), se.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = l, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const g = re(
        (i - Number(h.frameRollOverlayStartTs || i)) / mF,
        0,
        1
      );
      h.frameRollOverlayAlpha = gr(
        Number(h.frameRollOverlayFrom || 0),
        l,
        $f(g)
      ), g >= 1 && (h.frameRollOverlayAlpha = l, l === 0 && (h.frameRollOverlayVisual = null)), se.dirty = !0;
    }
    const f = nw();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const g = re(
        (i - Number(h.cutoutPanoDimStartTs || i)) / H0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = gr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        $f(g)
      ), g >= 1 && (h.cutoutPanoDimAlpha = f), g >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), se.dirty = !0;
    }
    const p = V && je() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const g = re(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / H0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = gr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        $f(g)
      ), g >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), se.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const g = Math.max(1, Number(h.outputPreviewAnimDurationMs)), w = re((i - Number(h.outputPreviewAnimStartTs || 0)) / g, 0, 1), I = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? xF(w) : PF(w);
      h.outputPreviewAnim = gr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, I), se.dirty = !0, w >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: g, done: w } = DC(h.viewTransition, i);
      if (h.viewPosition = g.position, h.viewYaw = g.yaw_deg, h.viewPitch = g.pitch_deg, h.viewFov = g.hFOV_deg, h.viewDistance = g.distance, w) {
        const { end: x } = h.viewTransition;
        h.viewTransition = null, x && Gp(x), Rr();
      }
      se.backgroundDirty = !0, se.dirty = !0;
    }
    if (h.viewInertia.vx = Number(un.state.inertia.vx || 0), h.viewInertia.vy = Number(un.state.inertia.vy || 0), h.viewInertia.active = !!un.state.inertia.active, un.stepInertia(i) && (h.viewInertia.vx = Number(un.state.inertia.vx || 0), h.viewInertia.vy = Number(un.state.inertia.vy || 0), h.viewInertia.active = !!un.state.inertia.active, se.backgroundDirty = !0, se.dirty = !0), se.pendingStableLayoutFrames > 0 && (se.pendingStableLayoutFrames -= 1, se.dirty = !0), se.dirty) {
      if (se.pendingStableLayoutFrames > 0)
        return;
      se.dirty = !1, Lh();
    }
  }
  function zh(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      se.tickErrorSignature !== l && (se.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), E.stageStatus = br, E.stageStatusDetail = "frame", Q == null || Q.setAttribute("data-stage-ready", ""), Q == null || Q.removeAttribute("data-stage-loading-kind");
    }
  }
  function jh(i = performance.now()) {
    if (!se.running) return;
    const s = Bk();
    zh(() => ow(i)), Uk(s), se.running && (se.rafId = requestAnimationFrame(jh));
  }
  function aw() {
    !se.running || !$h() || zh(() => {
      se.dirty = !1, Lh();
    });
  }
  const Hh = new ResizeObserver(aw);
  Hh.observe(O);
  function sw() {
    De(), se.running = !1, se.rafId && cancelAnimationFrame(se.rafId), se.rafId = 0, Hh.disconnect();
  }
  function Ze() {
    r || (or(), Hg(_), !(k && _.stickers.some(au)) && (h.historyController.commitActionGroup(JSON.stringify($g(_))), Ku()));
  }
  function Lu(i) {
    var p, m;
    if (r) return;
    wn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Ku(), !s) return;
    const l = PN(_, s), f = (p = _.timeline) == null ? void 0 : p.fps;
    Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, l.state), or(!1), k && _.timeline.fps !== f && Wt.seek(Math.round(h.frame * _.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, F && !h.selectedId && _.active.selected_shot_id && (h.selectedId = ((m = je()) == null ? void 0 : m.id) ?? null), h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && eo(), Ja(), se.backgroundDirty = !0, l.paintingChanged ? Pr() : Vt(), Kn(), $e(), Vn(), ue({ cause: "cutout_frame" });
  }
  function Gh() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Kn() {
    ov();
    const i = VC({
      editor: h,
      swatches: ac,
      paintColorPopOpen: Te ? !Te.hidden : !1,
      colorToCss: Br,
      colorsApproximatelyEqual: sc,
      rgb01ToHsv: Gf,
      hsv01ToRgb: Hf,
      getBrushPresetIdForTool: $i,
      isActiveLassoTool: wv
    });
    if (Object.assign(E.paintDock, i), Pv(), !i.visible) {
      Te && (Te.hidden = !0);
      return;
    }
    ht && (clearTimeout(ht), ht = 0), me && (!i.colorEnabled && Te && !Te.hidden && (ht = window.setTimeout(() => {
      Te.hidden = !0, E.paintDock.colorPopOpen = !1, ht = 0;
    }, 170)), Te && (Te.style.setProperty("--picker-hue-color", i.pickerHueColor), Te.style.setProperty("--picker-sat", i.pickerSat), Te.style.setProperty("--picker-val", i.pickerVal), Te.style.setProperty("--picker-hue", i.pickerHue)), ze && (ze.style.left = i.pickerSvLeft, ze.style.top = i.pickerSvTop), at && (at.style.left = i.pickerHueLeft));
  }
  function Bo() {
    const i = ln(V && h.mode === "frame" ? je() : Et());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: gi(i)
    }, $e());
  }
  function $e() {
    if (or(), jr(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = RC(_.ui_settings);
    if (a) {
      E.sidePanel = $C({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: qn
      });
      return;
    }
    const s = Et(), l = V && h.mode === "frame" ? je() : null, f = l || s, p = l ? [l] : dr(), m = l ? "shot" : Va();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const Z = ln(f);
      h.panelLastValues = {
        yaw_deg: Number(Z.yaw_deg || 0),
        pitch_deg: Number(Z.pitch_deg || 0),
        hFOV_deg: Number(Z.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(Z.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(Z.rot_deg || 0),
        roll_deg: Number(Z.roll_deg || 0),
        aspect_id: gi(Z)
      }, nr(f) && (h.panelLastValues.opacity = Ao(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, x = zo(), I = B && (m === "shot" || m === "frame") && za(), M = x ? VN(x, h.frame) : I ? { ...w, ...DN(_.camera, h.frame), vFOV_deg: w.vFOV_deg } : nr(w) ? h.panelLastValues : w || g, C = x ? il(x) : !!w && !vn(w);
    h.panelWasEnabled = C, wu();
    let D = null;
    if (l) {
      const Z = hu({ item: l, kind: "shot", label: "Frame" });
      D = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Z.label,
        currentIcon: Z.icon || null,
        items: [{
          id: String(l.id || ""),
          label: Z.label,
          icon: Z.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const Z = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const oe = je();
        oe && Z.push({ id: oe.id, label: "Camera", icon: Zp("frame"), item: oe, kind: "frame" }), li().forEach((ye, Be) => {
          var de, _e;
          if (!ye || nr(ye) && !ye.visible) return;
          const qe = P ? fd(ye) : Bt(ye) ? String(ye.id || Ff) : String(((_e = (de = _.assets) == null ? void 0 : de[ye.asset_id]) == null ? void 0 : _e.name) || ye.asset_id || ye.id), lt = `${Be + 1}. ${qe}${Bt(ye) && $o(ye) ? " (hidden)" : ""}`, we = hu({ item: ye, label: lt, kind: "image" });
          Z.push({ id: ye.id, label: we.label, icon: we.icon, item: ye, kind: "image" });
        });
      } else
        Jp().forEach((oe) => {
          if (!(oe != null && oe.item)) return;
          const ye = hu(oe);
          Z.push({ id: oe.item.id, label: ye.label, icon: ye.icon, item: oe.item, kind: oe.kind });
        });
      const le = (w == null ? void 0 : w.id) || "", he = x ? { label: fd(x), icon: Pe.globe } : Z.find((oe) => oe.id === le) || Z[0];
      D = {
        label: "Selection",
        open: !1,
        disabled: Z.length <= 1,
        currentLabel: he.label,
        currentIcon: he.icon || null,
        items: Z.map((oe) => ({
          id: oe.id,
          label: oe.label,
          icon: oe.icon || null,
          active: oe.id === le
        }))
      };
    }
    const Y = [], K = (Z, le, he, oe, ye) => {
      const Be = re(Number(M[Z] || 0), he, oe);
      Y.push({
        key: Z,
        label: le,
        min: he,
        max: oe,
        step: ye,
        value: Be,
        displayValue: ta(Be),
        fillPct: re((Be - he) / Math.max(1e-6, oe - he) * 100, 0, 100),
        enabled: C && !r
      });
    }, ee = [];
    if (x) {
      for (const [Z, le] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const he = Ef(M[Z]);
        K(Z, le, -he, he, 0.01);
      }
      K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("roll_deg", "Roll", -180, 180, 0.1), K("scale", "Scale", $0, Ef(M.scale), 0.01), K("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      ee.push(`Selected objects: ${p.length}`), ee.push("Multi-selection supports z-order and delete.");
    else {
      const Z = m === "shot" || m === "frame";
      if (I)
        for (const [le, he] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const oe = Ef(M[le]);
          K(le, he, -oe, oe, 0.01);
        }
      K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K(m === "image" || t === "stickers" && !Z ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), K("hFOV_deg", "H FOV", 1, 179, 0.1), K("vFOV_deg", "V FOV", 1, 179, 0.1), Z && Y.forEach((le) => {
        le.enabled = le.enabled && KC(le.key, { erp: to() });
      }), P && !Z && K("opacity", "Opacity", 0, 100, 1);
    }
    E.sidePanel = BC({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: D,
      enabled: C,
      selectedKind: x ? "world" : m,
      selectedItems: p,
      params: Y,
      notes: ee,
      uiSettings: i,
      normalizeCoverageValue: qn
    });
  }
  function jr() {
    if (!k || r) return;
    const i = hl(), s = Ge.selection, l = s && Hr(s.owner);
    if (s) {
      const p = l ? Xa(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => l[g].keyframes.some((w) => w.frame === m))), s.frames.length || (Ge.selection = null);
    }
    const f = _.timeline.fps;
    E.timeline = ZC(_, {
      frame: h.frame,
      span: i,
      selection: Ge.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Ge.expanded ?? Kh(),
      openRows: Ge.openRows,
      audio: cw() && E.videoTransport.hasAudio ? { muted: Ae.muted } : null,
      playing: Wt.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Lf(e) !== null || C2(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: ro(),
      cameraHideable: F,
      stickers: !A,
      scene: P && !!vd(e).scene,
      sceneLocked: !!z
    }), E.easing = Ge.selection ? QC(l, Xa(Ge.selection), Ge.selection.frames, qa(Ge.selection.owner)) : null;
  }
  function Kh() {
    return mN(_, { cameraOnly: A, camera: F });
  }
  function hl(i = null) {
    if (z != null && z.frames) return z.frames;
    const s = _.timeline.fps, l = _.stickers.find(Bt), f = l ? oh() : null, p = Math.max(
      E.videoTransport.ready ? Math.round(Number(E.videoTransport.duration || 0) * s) : 0,
      f ? a1(l.clip, s, f.meta) : 0
    );
    return Ib(_, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: A && !z || F });
  }
  function Hr(i) {
    return i === "camera" ? ro() ? _.camera : null : i === "scene" ? P ? _.scene : null : _.stickers.find((s) => s.id === i) || null;
  }
  function Xa(i) {
    return i.lane ? [i.lane] : Fo(Hr(i.owner));
  }
  function qa(i) {
    if (i === "camera") return 0;
    const { clip: s } = Hr(i);
    return s.start - s.in;
  }
  function Wh(i) {
    return `${ga(i, h.frame)}:${i.start - i.in}`;
  }
  function ml(i) {
    const s = Hr(i);
    return !!s && s.locked !== !0;
  }
  function Ja() {
    var s;
    const i = Et();
    (nr(i) && !al(i) || h.selectedId === ql && ro() && !Vr() || Va() === "stroke" && !ol()) && Rn(null), ((s = zo()) == null ? void 0 : s.visible) === !1 && eo();
  }
  function lw(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (or(), h.frame = s, or(), Ja(), Vt(), $e(), We(), ue());
  }
  function cw() {
    return Ae instanceof HTMLVideoElement && !!Ae.getAttribute("src");
  }
  function uw(i) {
    Fi(), Wt.seek(i);
  }
  function wn() {
    k && Wt.stop();
  }
  function Ru() {
    Fi(), Wt.toggle();
  }
  function gl() {
    or(), Vt(), $e(), We(), ue();
  }
  function Ri() {
    Ze(), ot(), gl();
  }
  function fw() {
    const { selection: i } = Ge;
    ml(i.owner) && (wn(), sN(Hr(i.owner), Xa(i), i.frames, h.frame - qa(i.owner)), Ge.selection = null, Ri());
  }
  function Bh(i) {
    const s = Ca(i);
    if (s === null || s === _.timeline.fps) return;
    wn();
    const l = Math.round(h.frame * s / _.timeline.fps);
    CN(_, s), Ge.selection = null, Wt.seek(l), Ri();
  }
  function dw() {
    const i = Lf(e);
    i !== null && i !== _.timeline.fps && Bh(i);
  }
  function pw(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        if (i.phase === "move") {
          Ge.scrubFrame = i.frame, Ue.request("seek");
          return;
        }
        Ue.cancel(), i.phase === "start" && Fi(), Wt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Ru();
        return;
      }
      if (i.type === "mute") {
        th(), jr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ge.expanded = !(Ge.expanded ?? Kh()), Ge.selection = null, jr();
        return;
      }
      if (i.type === "toggle-row") {
        Ge.openRows.has(i.id) ? Ge.openRows.delete(i.id) : Ge.openRows.add(i.id), jr();
        return;
      }
      if (i.type === "toggle-visible") {
        if (i.id === X1) _.painting_visible = !_.painting_visible;
        else {
          const s = Hr(i.id);
          if (!s || i.id === "camera" && !F) return;
          s.visible = !s.visible;
        }
        Ja(), Ri();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        if (s && !s.visible || i.id === "camera" && !Vr()) return;
        s && !ga(s.clip, h.frame) && uw(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? _u(s.id) : i.id === "camera" ? Rn(je()) : Rn(li().find((l) => l.id === i.id) || null), Rr(), Ge.selection = null, $e(), We(), ue();
        return;
      }
      if (i.type === "select-keys") {
        const s = qa(i.owner), l = i.frames.map((m) => m - s), f = Ge.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, w) => g - w);
        } else
          Ge.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        jr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ge.selection;
        if (!s || !ml(s.owner)) return;
        const l = Hr(s.owner), f = Xa(s);
        if (i.phase === "start") {
          wn(), Ge.drag = { keyframes: f.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Ge;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, w) => {
          l[g].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = lN(l, f, p.frames, i.delta, -qa(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Ue.request("timeline"), Ue.request("view");
          return;
        }
        Ue.cancel(), Ge.drag = null, m ? Ri() : gl();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? Hr("scene") : _.stickers.find((m) => m.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          wn(), Ge.drag = { clip: { ...s.clip }, span: hl(s.clip) };
          return;
        }
        const { drag: l } = Ge;
        if (!(l != null && l.clip)) return;
        const f = l.clip, p = Wh(s.clip);
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? fN(s.clip, i.delta) : i.delta && i.mode === "start" ? dN(s.clip, f.start + i.delta) : i.delta && pN(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Ue.request("timeline"), Wh(s.clip) !== p && Ue.request("view");
          return;
        }
        Ue.cancel(), Ge.drag = null, Ja(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Ri() : gl();
        return;
      }
      if (i.type === "key-row") {
        if (i.owner === "scene" || !ml(i.owner)) return;
        wn(), iN(Hr(i.owner), h.frame - qa(i.owner)), Ri();
        return;
      }
      if (i.type === "fps") {
        const s = yN(i.fps);
        if (s === null || s === _.timeline.fps || E.timeline.fpsLocked) {
          jr();
          return;
        }
        Bh(s);
        return;
      }
      if (i.type === "length") {
        const s = bN(i.length);
        if (s === void 0 || s === _.timeline.length) {
          jr();
          return;
        }
        wn(), _.timeline.length = s, Ri();
        return;
      }
      if (i.type === "easing") {
        const s = Ge.selection;
        if (!s || !ml(s.owner)) return;
        wn(), uN(Hr(s.owner), Xa(s), s.frames, i.easing), i.commit ? Ri() : gl();
      }
    }
  }
  async function Uh(i) {
    if (r || A || t !== "stickers" && t !== "cutout" || !Er(i)) return;
    if (P) {
      wn(), await Yh(i);
      return;
    }
    const s = mo("asset"), l = gs(e, `add:${s}`, async () => {
      try {
        const { image: f } = await ys(i);
        Qt.set(s, f);
        const p = mo("st");
        _.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ti(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: nl()
        }), Rn(_.stickers[_.stickers.length - 1]), Za(), $e(), We(), ue();
        const m = await bo(i, {
          fetchApi: (x, I) => qt.fetchApi(x, I)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((x) => String((x == null ? void 0 : x.asset_id) || "") === s).length) return;
        _.assets[s] = m, Go(), Ze(), ot(), $e(), We(), ue();
      } catch (f) {
        delete _.assets[s], Qt.delete(s);
        const p = Array.isArray(_.stickers) ? _.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && Rn(null), $e(), We(), ue(), ot()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function hw() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = q == null ? void 0 : q.openImagePicker) == null || i.call(q, "add");
  }
  function mw() {
    var i;
    r || !P || (i = q == null ? void 0 : q.openImagePicker) == null || i.call(q, "add-world");
  }
  async function gw(i) {
    r || !P || !Er(i) || (wn(), await Yh(i, "world"));
  }
  function yw() {
    const i = { x: O.width / 2, y: O.height / 2 }, s = no() ? Ie.pick(Yo(), i.x, i.y, O.width, O.height) : null;
    return f2(_n(), s, $r());
  }
  async function Yh(i, s = "sky") {
    const l = mo("st"), f = gs(e, `add:${l}`, async () => {
      const { image: p } = await ys(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ti(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, w = s === "world" ? HN(l, g, yw()) : wp(l, g, m, nl());
      Qt.set(Ga(w), p), _.stickers.push(w), s === "world" ? _u(l) : Rn(w), Za(), $e(), We(), ue();
      try {
        const x = await bo(i, {
          fetchApi: (M, C) => qt.fetchApi(M, C)
        }), I = _.stickers.find((M) => M.id === l);
        if (!I) return;
        I.source = Jl(x), Qt.set(Ga(I), p), Ze(), ot();
      } catch (x) {
        throw _.stickers = _.stickers.filter((I) => I.id !== l), h.selectedId === l && Rn(null), h.worldSelectedId === l && eo(), Ze(), ot(), x;
      } finally {
        $e(), We(), ue();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function bw(i, s) {
    const l = gs(e, `replace:${s}:${mo("asset")}`, async () => {
      const { image: f } = await ys(i), p = await bo(i, {
        fetchApi: (g, w) => qt.fetchApi(g, w)
      }), m = _.stickers.find((g) => g.id === s);
      if (m) {
        m.source = Jl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          g.vFOV_deg = Ti(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        Qt.set(Ga(m), f), Vt(), Ze(), ot(), $e(), We(), ue();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function vw(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Et();
    if (!s || !Nt(s) || Bt(s) || !Er(i)) return;
    if (P) {
      await bw(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = mo("asset"), p = gs(e, `replace:${l}:${f}`, async () => {
      var M;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !Nt(m) || Bt(m)) return;
      const g = String(m.asset_id || ""), w = g ? An(((M = _.assets) == null ? void 0 : M[g]) || null) : null, x = Number(m.vFOV_deg || 0), I = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await ys(i);
        Qt.set(f, C), m.asset_id = f, m.vFOV_deg = Ti(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Vt(), $e(), We(), ue();
        const D = await bo(i, {
          fetchApi: (K, ee) => qt.fetchApi(K, ee)
        }), Y = (Array.isArray(_.stickers) ? _.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === l) || null;
        if (!Y || String(Y.asset_id || "") !== f) return;
        _.assets[f] = D, Go(), Ze(), ot(), $e(), We(), ue();
      } catch (C) {
        delete _.assets[f], Qt.delete(f);
        const D = (Array.isArray(_.stickers) ? _.stickers : []).find((Y) => String((Y == null ? void 0 : Y.id) || "") === l) || null;
        throw D && String(D.asset_id || "") === f && (g && w && (_.assets[g] = w), D.asset_id = g, D.vFOV_deg = x, D.crop = I ? { ...I } : null), Vt(), ot(), $e(), We(), ue(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function _w() {
    var s;
    if (r) return;
    const i = Et();
    !i || !Nt(i) || Bt(i) || (s = q == null ? void 0 : q.openImagePicker) == null || s.call(q, "replace");
  }
  async function ww() {
    if (r || t !== "stickers") return;
    if (P) {
      await Sw();
      return;
    }
    const i = _.assets && typeof _.assets == "object" ? _.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const p = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [f, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((C) => C.blob()), w = String(g.type || "image/png").split("/")[1] || "png", x = String((p == null ? void 0 : p.name) || `${f}.${w}`), I = new File([g], x, { type: g.type || "image/png" }), M = await bo(I, {
          fetchApi: (C, D) => qt.fetchApi(C, D)
        });
        _.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ot(), ue());
  }
  async function Sw() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await bo(m, {
            fetchApi: (w, x) => qt.fetchApi(w, x)
          });
          s.source = Jl(g), i = !0;
        } catch {
        }
    }
    i && (ot(), ue());
  }
  function xw() {
    if (r || t !== "cutout") return;
    const i = je();
    if (i) {
      Rn(i), h.mode = "pano", A && pr() ? Qi(Xg(u_(_n(), i.position), kh(), O.width, O.height)) : Kp($t(Number(i.yaw_deg || 0)), re(Number(i.pitch_deg || 0), -89.9, 89.9)), $e(), We(), ue({ cause: "cutout_frame" });
      return;
    }
    const s = ab({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    _.shots = [s], Rn(s), Za(), h.mode = "pano", Ze(), ot(), $e(), We(), ue({ cause: "cutout_frame" });
  }
  function kw() {
    r || !F || ro() || (wn(), _.camera = EN(_n()), or(), Rn(je()), Za(), Ze(), ot(), $e(), We(), ue({ cause: "cutout_frame" }));
  }
  function Mw() {
    wn(), _.camera = null, Rn(null), or(), Ze(), ot(), $e(), We(), ue({ cause: "cutout_frame" });
  }
  function Xh(i, s) {
    F && hn(i) && (_.camera.projection = s === wa ? "erp" : "perspective", s === wa) || Ew(i, s);
  }
  function Nw() {
    r || t !== "cutout" || (_.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, _.active.selected_shot_id = null, Ze(), ot(), $e(), We(), ue());
  }
  function Pw() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Bt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function qh(i, s, l = "Clear") {
    return new Promise((f) => {
      E.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function Aw() {
    var l, f;
    if (r || !await qh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = ma(null), Pr();
    const s = Pw();
    if (t === "stickers")
      _.stickers = P ? _.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, P || (_.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Go();
    else {
      const p = NN(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Go();
    }
    Ze(), ot(), $e(), We(), ue();
  }
  async function Cw(i) {
    var m, g, w, x;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Uo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await qh(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((x = h.interaction) == null ? void 0 : x.layerKind) === s) {
        const I = ir();
        I && h.paintEngine.cancelActiveStroke(I), h.interaction = null;
      }
      f.length = 0, _.painting.raster_objects = Gn().filter((I) => String((I == null ? void 0 : I.layerKind) || "paint") !== s), s === "paint" && (Nn().length = 0), Pr(), Ze(), ot(), $e(), We(), Kn(), ue();
    }
  }
  function Iw() {
    if (r) return;
    const i = Et();
    if (!i || !Nt(i) || Bt(i) || P && au(i)) return;
    let s;
    P ? s = GN(i, mo("st"), nl()) : (s = JSON.parse(JSON.stringify(i)), s.id = mo("st"), s.yaw_deg = $t((s.yaw_deg || 0) + 8), s.z_index = nl()), _.stickers.push(s), _.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], Vt(), Ze(), ot(), We(), $e(), ue();
  }
  function Ow() {
    const i = zo();
    return i ? (il(i) && (wn(), jN(_, i.id), eo(), Vt(), Ze(), ot(), $e(), We(), Rr(), ue()), !0) : !1;
  }
  function Jh() {
    var l, f, p, m, g;
    if (r || A) return;
    const i = dr(), s = Et();
    if (!(!s && i.length === 0) && !i.some((w) => vn(w))) {
      if (wn(), i.length > 1) {
        const w = new Set(i.filter((M) => cn(M)).map((M) => String(M.actionGroupId || M.id || ""))), x = new Set(i.filter((M) => bn(M)).map((M) => yn(M.rasterObjectId || M.id || ""))), I = new Set(i.filter(Nt).map((M) => String(M.id || "")));
        w.size > 0 && (_.painting.paint.strokes = (Array.isArray((f = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? _.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), _.painting.groups = Nn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Pr()), x.size > 0 && (_.painting.raster_objects = Gn().filter((M) => !x.has(String((M == null ? void 0 : M.id) || ""))), Wo()), I.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((M) => I.has(String((M == null ? void 0 : M.id) || "")) ? Bt(M) ? ($o(M) || (M.visible = !1), !0) : !1 : !0), Go(), Vt()), h.selectedId = null, h.selectedIds = [], Ze(), ot(), $e(), We(), ue();
        return;
      }
      if (cn(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (p = _.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== w), _.painting.groups = Nn().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== w), Pr(), h.selectedId = null, h.selectedIds = [], Ze(), ot(), $e(), We(), ue();
        return;
      }
      if (bn(s)) {
        const w = yn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = Gn().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== w), Wo(), h.selectedId = null, h.selectedIds = [], Ze(), ot(), $e(), We(), ue();
        return;
      }
      if (F && hn(s)) {
        Mw();
        return;
      }
      if (t === "stickers" || Nt(s)) {
        if (Bt(s)) {
          if ($o(s)) return;
          s.visible = !1, Vt(), Ze(), ot(), $e(), We(), ue();
          return;
        }
        _.stickers = _.stickers.filter((w) => w.id !== s.id), Go(), Vt(), h.selectedId = ((g = li()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = h.selectedId, Ze(), ot(), $e(), We(), ue();
        return;
      }
      Nw();
    }
  }
  function Vu(i, s) {
    const l = se.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = Tf * No(l, i), p = sp(ap(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Ew(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [M, C] = w.split(":").map((D) => Number(D));
        if (Number.isFinite(M) && Number.isFinite(C)) return M >= C;
      }
      const x = Number(i.hFOV_deg || 64), I = Number(i.vFOV_deg || 40);
      return Math.abs(x - I) > 1e-6 ? x >= I : Po(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Vu(i, g)) {
      const w = re(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = Ul(w, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function Fw(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = Ks(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Vu(i, p)) {
      const m = re(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Ul(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Zh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Pi(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Vu(i, p)) {
      const m = re(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Ul(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = vo(i);
  }
  function Qh() {
    Lo().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Tw() {
    if (r) return;
    const i = dr();
    if (!Et() || i.length === 0 || i.some((w) => vn(w))) return;
    Qh();
    const l = Lo(), f = new Set(i.map((w) => Nt(w) ? `sticker:${String(w.id || "")}` : bn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const x = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(x) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((w, x) => {
      w.type === "sticker" && w.item && (w.item.z_index = x), w.type === "strokeGroup" && w.item && (w.item.z_index = x), w.type === "rasterObject" && w.item && (w.item.z_index = x);
    }), Vt(), Ze(), ot(), We(), ue();
  }
  function Dw() {
    if (r) return;
    const i = dr();
    if (!Et() || i.length === 0 || i.some((w) => vn(w))) return;
    Qh();
    const l = Lo(), f = new Set(i.map((w) => Nt(w) ? `sticker:${String(w.id || "")}` : bn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const x = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(x) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((w, x) => {
      w.type === "sticker" && w.item && (w.item.z_index = x), w.type === "strokeGroup" && w.item && (w.item.z_index = x), w.type === "rasterObject" && w.item && (w.item.z_index = x);
    }), Vt(), Ze(), ot(), We(), ue();
  }
  function Lw() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", u && (_.output_preset = N(Number(_.output_preset || 2048))), d && (_.coverage = qn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), Vn(), e.setDirtyCanvas(!0, !0));
  }
  function Vn() {
    var s;
    if (r) return;
    or(), Hg(_), _.coverage = qn(_.coverage), Rb(e, _.active);
    const i = Vb(e, _);
    y && !$b(e, i, String(y.value ?? ""), { rebased: B }) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const em = () => Vn();
  r || (e.__panoFlushStateBeforeQueue = em);
  function $u() {
    _.ui_settings = FF(_.ui_settings), r || Vn();
  }
  function ot() {
    var i;
    r || (Vn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Rw() {
    r || qv() && vh().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Vw(i = {}) {
    var f, p, m, g, w, x, I, M, C, D;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), l && ((I = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || I.call(x, !0, !0), (D = (C = (M = Fr) == null ? void 0 : M.canvas) == null ? void 0 : C.setDirty) == null || D.call(C, !0, !0));
  }
  function Za() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Kn(), $e());
  }
  function Vi(i) {
    const s = O.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * O.width,
      y: (i.clientY - s.top) / s.height * O.height
    };
  }
  function yl(i) {
    const s = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function tm() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function or(i = !0) {
    var f, p;
    if (!B) return;
    const s = R;
    if (!Vr()) {
      R = null, (f = _.shots) != null && f.length && (_.shots = []), s && nm(s, null);
      return;
    }
    const l = (p = _.shots) == null ? void 0 : p[0];
    i && l && R && TN(_.camera, h.frame, l, R), R = jg(_.camera, h.frame), l ? Object.assign(l, R, { position: [...R.position] }) : _.shots = [{ ...R, position: [...R.position] }], s || nm(null, R);
  }
  function nm(i, s) {
    var m, g;
    !s && h.mode === "frame" && rm(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((g = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : g.mode) === "3dof") {
      Qi({ ..._n(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !za()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((w, x) => w === l[x])) return;
    const p = { ..._n(), position: f };
    ja({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, Qi({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function rm(i) {
    if (h.mode = "pano", !i) return;
    Ea();
    const s = _n().distance;
    h.viewYaw = $t(i.yaw_deg), h.viewPitch = re(i.pitch_deg, -89.9, 89.9), h.viewFov = re(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && ja({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, se.backgroundDirty = !0;
  }
  function je() {
    if (!V) return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function $w() {
    var Y, K, ee, Z, le;
    if (!O) return null;
    const i = (Y = O.getBoundingClientRect) == null ? void 0 : Y.call(O), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    se.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, O.width - 24);
    let g = Math.max(p + 1, O.height - 24);
    const w = (K = Ve == null ? void 0 : Ve.getBoundingClientRect) == null ? void 0 : K.call(Ve), x = (ee = T == null ? void 0 : T.getBoundingClientRect) == null ? void 0 : ee.call(T);
    let I = 24;
    w && i && w.width > 0 && w.height > 0 && (I = Math.max(I, (w.right - i.left) * s + j0)), x && i && x.width > 0 && x.height > 0 && ((Z = E.frameRail) == null ? void 0 : Z.visible) === !0 && (I = Math.max(I, (i.right - x.left) * s + j0)), f = Math.max(f, I);
    const M = Math.min(m, O.width - I);
    let C = 24;
    const D = (le = Oe == null ? void 0 : Oe.getBoundingClientRect) == null ? void 0 : le.call(Oe);
    if (D && i && D.width > 0 && D.height > 0 && (C = Math.max(C, (D.bottom - i.top) * l + Df)), [te, pe].forEach((he) => {
      var Be;
      if (!he || !i) return;
      const oe = getComputedStyle(he);
      if (oe.display === "none" || oe.visibility === "hidden" || Number(oe.opacity) <= 0) return;
      const ye = (Be = he.getBoundingClientRect) == null ? void 0 : Be.call(he);
      !ye || ye.width <= 0 || ye.height <= 0 || (C = Math.max(C, (i.bottom - ye.top) * l + Df));
    }), It && i) {
      const he = getComputedStyle(It);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (C = Math.max(C, (pF + Df) * l));
    }
    return p = Math.max(p, C), g = Math.max(p + 1, Math.min(g, O.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function bl(i = je()) {
    if (!i || !O) return null;
    const s = se.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return kM(s, i, Tf * No(s, i));
  }
  function mn(i = je()) {
    const s = bl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function zu() {
    return V && !!je();
  }
  function Ar(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Di(), g = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: re(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = Mu(i.x, i.y), { lon: f, lat: p } = Iu(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: re(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Cr(i, s, l = performance.now()) {
    const f = mn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Tu(s, p);
    if (!m) return null;
    const { lon: g, lat: w } = Iu(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: re(0.5 - w / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function zw(i, s) {
    const l = je();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = lb(l, s);
    if (!p) return !1;
    if (f) {
      const m = Tf * No(
        se.frameSafeRect || { w: O.width, h: O.height },
        p
      ), g = lp({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, im(), $e(), !0;
  }
  function im() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, Ze(), ot(), $e());
    }, 180);
  }
  function ju() {
    return B && h.mode === "frame" && za();
  }
  function Qa() {
    const i = je(), s = bl(i);
    return i && s ? t0(i, s, { width: O.width, height: O.height }) : null;
  }
  function om() {
    var i;
    return ((i = $r()) == null ? void 0 : i.radius) || Ir;
  }
  function es(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: om() };
  }
  function am(i, s) {
    const { rect: l } = i;
    return Ie.pickSurface(Mh(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function sm(i, s, l) {
    return Sf(s, am(i, l), null, zr());
  }
  function lm(i) {
    return JSON.stringify([es(i), i.rect]);
  }
  function cm(i) {
    const s = je();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg;
  }
  function um(i, s) {
    const l = je();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, vt(i), O.setPointerCapture(s));
  }
  function jw(i, s, l) {
    const f = Qa();
    if (!f || r) return;
    const p = es(f);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: sm(f, p, s), changed: !1 } : { kind: "frame_pan", last: s, depth: Kg(p, zr()), changed: !1 }, vt(s), O.setPointerCapture(l);
  }
  function Hw(i, s) {
    const l = Qa();
    if (!l) return;
    const f = es(l), p = s.x - i.last.x, m = s.y - i.last.y;
    cm(i.kind === "frame_pan" ? Ug(f, p, m, l.rect.w, l.rect.h, i.depth) : Bg(f, p, m, O.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, ue({ localOnly: !0, cause: "frame_view" });
  }
  function Gw(i, s) {
    const l = Qa();
    if (!l || r) return;
    const f = es(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: Ie.contentKey(), view: lm(l) };
    if (!Wg(oi, m)) {
      const g = am(l, i);
      oi = { ...m, cost: performance.now() - p, hit: g };
    }
    cm(Yg(f, Sf(f, oi.hit, null, zr()), s, zr())), oi.view = lm(Qa() ?? l), oi.wheelTime = p, im(), $e(), ue({ localOnly: !0, cause: "frame_view" });
  }
  function Kw() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, Ze(), ot(), $e(), !0) : !1;
  }
  function ts() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && oo(), h.interaction = null, Ho(), ci(), $e(), vt(h.pointerPos), ue({ localOnly: !0 }), !0;
  }
  function Ww(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function $i(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? pi : Bn[s] ? s : h.activeBrushPresetId || pi;
  }
  function fm() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (tm() || zu());
  }
  function dm() {
    var i;
    return fm() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function vl(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, g;
  }
  function Bw() {
    var M, C;
    if (!dm()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = $i(s), f = Bn[l] || Bn[pi], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : ar(h.paintColor), x = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : re(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), I = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : re(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: Br(w, x),
      strokeStyle: Br(w, I),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((C = h.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Uw() {
    var D, Y, K;
    const i = Bw();
    if (!Fe) return;
    if (!i) {
      Fe.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", I = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Vc, l = Vc, f = "0", g = "0", w = "none", M = gF, C = yF, m = IF(i.fillStyle, I, x);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const ee = Math.max(1, Number(((D = i.preset) == null ? void 0 : D.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * ee), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((K = (Y = i.preset) == null ? void 0 : Y.angle) == null ? void 0 : K.value) || 0) * _o;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Fe.style.display = "block", Fe.style.width = `${Math.round(s)}px`, Fe.style.height = `${Math.round(l)}px`, Fe.style.borderRadius = f, Fe.style.border = g, Fe.style.boxShadow = w, Fe.style.background = m, Fe.style.backgroundRepeat = "no-repeat", Fe.style.backgroundPosition = "center", Fe.style.backgroundSize = "contain", Fe.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function Yw() {
    var he;
    if (!pt || !Ye) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = $i(s), f = Bn[l] || Bn[pi], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), w = s === "eraser", x = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : ar(h.paintColor), I = i === "mask" ? Br(x, 0.22) : w ? "rgba(255,255,255,0.14)" : Br(x, re(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Br(x, 0.96) : w ? "rgba(255,255,255,0.72)" : Br(x, re(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let C = g * 2, D = g * 2, Y = "999px", K = 0, ee = I;
    const Z = "rgba(222, 222, 222, 0.72)", le = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      ee = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const oe = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, g * 2 * oe), D = Math.max(10, g * 2), Y = `${Math.min(8, D * 0.42)}px`, K = Number(((he = f == null ? void 0 : f.angle) == null ? void 0 : he.value) || 0) * _o;
    } else s === "brush" ? ee = `radial-gradient(circle at 50% 50%, ${M} 0%, ${I} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, g * 1.8), D = C, ee = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (ee = "rgba(255,255,255,0.12)");
    Ye.style.width = `${Math.round(C)}px`, Ye.style.height = `${Math.round(D)}px`, Ye.style.borderRadius = Y, Ye.style.background = ee, Ye.style.border = `1px solid ${Z}`, Ye.style.boxShadow = `0 0 0 1px ${le}`, Ye.style.transform = `rotate(${K}deg)`, st && (clearTimeout(st), st = 0), pt.classList.remove("fade-out"), pt.classList.add("show");
  }
  function _l() {
    !pt || !pt.classList.contains("show") || (pt.classList.add("fade-out"), st && clearTimeout(st), st = window.setTimeout(() => {
      pt.classList.remove("show", "fade-out"), st = 0;
    }, 180));
  }
  function pm(i, s, l, f) {
    const p = $i(s), m = Bn[p] || Bn[pi], g = h.brushSizes[p] ?? 10, w = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), x = Ww(f, w), I = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), M = {
      id: na(i),
      actionGroupId: na("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: I.map((C) => ({ ...C })),
        points: I.map((C) => ({ ...C }))
      }
    };
    return R0(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function hm(i, s, l, f) {
    const p = l.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = $i(s), g = Bn[m] || Bn[pi], w = {
      id: na(i),
      actionGroupId: na("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: p.map((x) => ({ ...x }))
      }
    };
    return R0(w, g), Number(g.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Uo(i) {
    const s = _.painting || (_.painting = ma(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function Xw(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const I = je();
      if (!I || (f = Cr(s, I, l), !f)) return !1;
    } else
      f = Ar(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const I = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (I < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...w }), m.push({ ...w });
    const x = ir();
    if (x) {
      const I = h.paintEngine.ensureTarget(x);
      h.paintEngine.appendStrokePoint(I, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function qw(i, s, l = performance.now()) {
    var g, w;
    let f;
    if (h.mode === "frame") {
      const x = je();
      if (!x) return !1;
      f = Cr(s, x, l);
    } else
      f = Ar(s, l);
    const p = (w = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const x = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), I = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && I < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Jw(i) {
    var oe, ye, Be, qe, lt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    pl();
    const l = ir(), f = Ka(l.width, l.height);
    if (!Th(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((ye = (oe = f.ctx) == null ? void 0 : oe.getImageData(0, 0, l.width, l.height)) == null ? void 0 : ye.data) || null;
    if (!p) return !1;
    const m = new Map(Nn().map((we) => [String((we == null ? void 0 : we.actionGroupId) || (we == null ? void 0 : we.id) || "").trim(), we ? { ...we } : null])), g = [], w = [], x = [...Gn().filter((we) => String((we == null ? void 0 : we.layerKind) || "paint") !== "paint")];
    let I = !1, M = Lo().reduce((we, de) => Math.max(we, Number((de == null ? void 0 : de.z_index) || 0)), -1) + 1;
    function C(we, de, _e, Re = 8) {
      let He = de, nt = _e, ct = -1, Ft = -1;
      for (let ut = 0; ut < _e; ut += 1)
        for (let tn = 0; tn < de; tn += 1)
          we[(ut * de + tn) * 4 + 3] <= Re || (tn < He && (He = tn), ut < nt && (nt = ut), tn > ct && (ct = tn), ut > Ft && (Ft = ut));
      return ct < He || Ft < nt ? null : { minX: He, minY: nt, maxX: ct, maxY: Ft };
    }
    const D = C(p, l.width, l.height, 8);
    if (!D) return !1;
    function Y(we, de) {
      return !we || !de ? !1 : !(we.maxX < de.minX || de.maxX < we.minX || we.maxY < de.minY || de.maxY < we.minY);
    }
    function K(we, de) {
      const _e = Ii((we == null ? void 0 : we.actionGroupId) || (we == null ? void 0 : we.id) || "", "paint", de);
      if (!_e) return null;
      const Re = _e.centerUv.u - _e.halfW, He = _e.centerUv.u + _e.halfW, nt = _e.centerUv.v - _e.halfH, ct = _e.centerUv.v + _e.halfH, Ft = l.width, ut = l.height;
      return {
        minX: Math.floor((Re % 1 + 1) % 1 * Ft),
        maxX: Math.ceil((He % 1 + 1) % 1 * Ft),
        minY: Math.floor(re(nt, 0, 1) * ut),
        maxY: Math.ceil(re(ct, 0, 1) * ut),
        wraps: He - Re >= 1 || Re < 0 || He > 1
      };
    }
    function ee(we) {
      const de = (we == null ? void 0 : we.bbox) || null;
      if (!de) return null;
      const _e = (we == null ? void 0 : we.transform) || {}, Re = l.width, He = l.height, nt = Number(de.u0 || 0) + Number(_e.du || 0), ct = Number(de.u1 || 0) + Number(_e.du || 0), Ft = Number(de.v0 || 0) + Number(_e.dv || 0), ut = Number(de.v1 || 0) + Number(_e.dv || 0);
      return {
        minX: Math.floor((nt % 1 + 1) % 1 * Re),
        maxX: Math.ceil((ct % 1 + 1) % 1 * Re),
        minY: Math.floor(re(Ft, 0, 1) * He),
        maxY: Math.ceil(re(ut, 0, 1) * He),
        wraps: ct - nt >= 1 || nt < 0 || ct > 1
      };
    }
    function Z(we) {
      return we ? we.wraps ? Y(D, { minX: 0, maxX: we.maxX, minY: we.minY, maxY: we.maxY }) || Y(D, { minX: we.minX, maxX: l.width - 1, minY: we.minY, maxY: we.maxY }) : Y(D, we) : !0;
    }
    function le(we) {
      if (!we) return { touched: !1, canvas: null };
      const de = Ka(l.width, l.height, { readback: !0 });
      de.ctx.drawImage(we, 0, 0);
      const _e = de.ctx.getImageData(0, 0, l.width, l.height);
      de.ctx.save(), de.ctx.globalCompositeOperation = "destination-out", de.ctx.drawImage(f.canvas, 0, 0), de.ctx.restore();
      const Re = de.ctx.getImageData(0, 0, l.width, l.height);
      for (let He = 0; He < l.width * l.height; He += 1) {
        if (p[He * 4 + 3] <= 8) continue;
        const ct = _e.data[He * 4 + 3], Ft = Re.data[He * 4 + 3];
        if (ct > Ft)
          return { touched: !0, canvas: de.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(we, de, _e) {
      const Re = Number(_e == null ? void 0 : _e.z_index), He = U_(we, de, _e).map((nt, ct) => ({
        ...nt,
        z_index: Number.isFinite(Re) ? Re + ct * 1e-3 : M + ct * 1e-3
      }));
      return He.length && (M = Math.max(M, ...He.map((nt) => Number((nt == null ? void 0 : nt.z_index) || 0))) + 1), He;
    }
    for (const we of Nn()) {
      const de = String((we == null ? void 0 : we.actionGroupId) || (we == null ? void 0 : we.id) || "").trim();
      if (!de) continue;
      const _e = Nr(de, "paint");
      if (!Z(K(we, _e))) {
        w.push(we), g.push(..._e);
        continue;
      }
      const Re = ((qe = (Be = h.paintEngine) == null ? void 0 : Be.getGroupTarget) == null ? void 0 : qe.call(Be, de)) || null, He = ((lt = Re == null ? void 0 : Re.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!He) {
        w.push(we), g.push(..._e);
        continue;
      }
      const nt = le(He);
      if (!nt.touched || !nt.canvas) {
        w.push(we), g.push(..._e);
        continue;
      }
      I = !0;
      const ct = he(nt.canvas, "paint", m.get(de) || we || {});
      x.push(...ct);
    }
    for (const we of Gn().filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") === "paint")) {
      if (!Z(ee(we))) {
        x.push(we);
        continue;
      }
      const de = bh(we, null);
      if (!de) {
        x.push(we);
        continue;
      }
      const _e = le(de);
      if (!_e.touched || !_e.canvas) {
        x.push(we);
        continue;
      }
      I = !0;
      const Re = he(_e.canvas, "paint", we);
      x.push(...Re);
    }
    return I ? (_.painting.paint.strokes = g, _.painting.groups = w.sort((we, de) => Number((we == null ? void 0 : we.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), _.painting.raster_objects = x.sort((we, de) => Number((we == null ? void 0 : we.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), $a({ preservePanelValues: !1 }), !0) : !1;
  }
  function Zw(i) {
    var g, w, x, I, M;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.rawPoints) || ((I = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : I.points) || []).length >= 1) {
      Hu(i);
      const C = ir();
      C && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = pm(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = ir();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Qw(i) {
    var g, w;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Hu(i);
      const x = ir();
      x && h.paintEngine.commitActiveStroke(i.stroke, x), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = hm(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = ir();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Hu(i) {
    var m, g, w, x;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Du(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Jw(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && Wp((w = i.stroke) == null ? void 0 : w.actionGroupId), Uo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Du(p, i.stroke.targetSpace, !0), f && Wp((x = i.stroke) == null ? void 0 : x.actionGroupId), Uo(i.layerKind).push(i.stroke), !0);
  }
  function mm(i) {
    var l;
    if (V && h.mode === "frame") {
      const f = je(), p = mn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = Cr(i, f, performance.now()), w = g ? Ko(g) : null;
      if (w)
        for (const I of Fu()) {
          if (!Nt(I)) continue;
          const M = Ya(I, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const C = en(I);
            if (C != null && C.visible) return { item: I, geom: C };
          }
        }
      const x = cu(!1).slice().sort((I, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of x) {
        if (I.type === "strokeGroup") {
          const D = Vo(Ta("paint", I.actionGroupId || I.id || ""));
          if (!D) continue;
          const Y = en(D);
          if (!(Y != null && Y.visible)) continue;
          const K = Array.isArray(Y.strokePaths) ? Y.strokePaths : [];
          for (const ee of K) {
            const Z = Array.isArray(ee == null ? void 0 : ee.points) ? ee.points : [];
            if (!Z.length) continue;
            if (ee.closed && Z.length >= 3 && ji(i, Z)) return { item: D, geom: Y };
            const le = Math.max(8, Number((ee == null ? void 0 : ee.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < Z.length - 1; he += 1)
              if (jf(i, Z[he], Z[he + 1]) <= le * le) return { item: D, geom: Y };
            if (Z.length === 1 && _s(i, Z[0]) <= le * le) return { item: D, geom: Y };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const D = Ro(Da(((l = I.item) == null ? void 0 : l.id) || I.id || ""));
          if (!D) continue;
          const Y = en(D);
          if (yh(D, Y, i, g)) return { item: D, geom: Y };
          continue;
        }
        const M = I.item;
        if (!M || !Nt(M) || !w) continue;
        const C = Ya(M, w);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const D = en(M);
          if (D != null && D.visible) return { item: M, geom: D };
        }
      }
      return null;
    }
    const s = [
      ...cu(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Vo(Ta("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Ro(Da(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...V ? Fu().filter((f) => hn(f)) : []
    ];
    for (const f of s) {
      if (cn(f)) {
        const m = en(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of g) {
          const x = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!x.length) continue;
          if (w.closed && x.length >= 3 && ji(i, x)) return { item: f, geom: m };
          const I = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < x.length - 1; M += 1)
            if (jf(i, x[M], x[M + 1]) <= I * I) return { item: f, geom: m };
          if (x.length === 1 && _s(i, x[0]) <= I * I) return { item: f, geom: m };
        }
        continue;
      }
      if (bn(f)) {
        const m = en(f);
        if (!(m != null && m.visible)) continue;
        if (yh(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = en(f);
      if (p.visible && ji(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function ns(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (Nt(l)) return kd(i, s);
    if (i.kind === "strokeGroup") {
      const f = i.corners.findIndex((m) => _s(m, s) <= 121);
      if (f >= 0) {
        const m = i.corners[f], g = m.x - i.center.x, w = m.y - i.center.y, x = g * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: x };
      }
      const p = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of p) {
        const g = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && g.length >= 3 && ji(s, g)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < g.length - 1; x += 1)
          if (jf(s, g[x], g[x + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return ji(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const f = i.corners.findIndex((p) => _s(p, s) <= 121);
      if (f >= 0) {
        const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, w = m * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: w };
      }
      return ji(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    return RP(i, s, {
      edges: t === "cutout" || hn(l),
      resize: !(hn(l) && to()),
      emptyCursor: h.mode === "pano" ? "grab" : "default"
    });
  }
  function gm(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function eS(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function tS(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => eS(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ji({ x: l, y: f }, s.corners);
  }
  function vt(i) {
    if (Uw(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? bt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? bt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? bt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? bt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? bt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? bt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? bt("grabbing") : bt("default");
      return;
    }
    if (dm()) {
      bt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        bt(dF);
        return;
      }
      if (h.primaryTool !== "cursor") {
        bt("default");
        return;
      }
      bt("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      bt("default");
      return;
    }
    if (h.gizmoAxis) {
      bt("grab");
      return;
    }
    const s = Et(), l = s ? en(s) : null, f = s ? vn(s) : !1, p = f ? { kind: "none", cursor: "default" } : ns(l, i, s);
    if (!f && p.kind !== "none") {
      bt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && mm(i)) {
      bt("default");
      return;
    }
    bt(h.mode === "pano" ? "grab" : "default");
  }
  function We() {
    if (!ge) return;
    if (be = !1, h.mode === "frame") {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || hr() && pr()) {
      const p = nS();
      be = p.visible, ym(p);
      return;
    }
    const i = Et(), s = dr();
    if (!i && s.length === 0 || h.interaction) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Va(), f = UC({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Ra(s) : en(i),
      allLocked: pu(s),
      anyLocked: s.some((p) => vn(p)),
      selectedLocked: vn(i),
      activeAspect: hn(i) && to() ? wa : gi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Bt,
      isStickerHidden: $o,
      canRestoreSelectedToInitial: Mv,
      iconSet: Pe,
      cameraShot: B,
      cameraDeletable: F,
      erpChoice: F,
      coverage: _.coverage
    });
    ym(f);
  }
  function nS() {
    const i = no() && !h.interaction ? rr().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Yo(), l = i.stickers.find((g) => g.id === h.worldSelectedId), p = (l ? Mp(l) : [i.gizmo.transform.position]).map((g) => Gs(s, g, O.width, O.height)).filter(Boolean), m = g2(s, i.gizmo.transform.position, i.gizmo.mode, O.width, O.height);
    return YC({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: hr(), deletable: F && hr() });
  }
  function ym(i) {
    var m, g;
    if (!i.visible) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, x) => XC(i.anchor, w, x, O.width, O.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(l, f);
    if (!p) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    E.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, requestAnimationFrame(() => {
      if (!ge || E.selectionMenu.visible !== !0) return;
      const w = ge.getBoundingClientRect(), x = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, I = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: x, h: I, measured: !0 };
      const M = s(x, I);
      M && (E.selectionMenu.left = M.left, E.selectionMenu.top = M.top);
    });
  }
  function oo() {
    Kt.timer && (clearTimeout(Kt.timer), Kt.timer = 0), Kt.target = null, E.tooltip.visible = !1;
  }
  function rS(i) {
    if (!Ne || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    E.tooltip.text = s, E.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var ee, Z;
      if (Kt.target !== l || !Ne || !(l != null && l.isConnected)) return;
      const f = Q.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, g = 12, w = Math.round(Number(((ee = Ne.getBoundingClientRect()) == null ? void 0 : ee.width) || 0)) || 100, x = Math.round(Number(((Z = Ne.getBoundingClientRect()) == null ? void 0 : Z.height) || 0)) || 24, I = !!l.closest(".pano-floating-left"), M = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let D = "", Y = p.left - f.left + p.width * 0.5 - w * 0.5, K = p.top - f.top - x - g;
      if (l.closest(".pano-floating-top") && (K = p.bottom - f.top + g), I)
        D = "tool-rail", Y = p.right - f.left + 10, K = p.top - f.top + p.height * 0.5 - x * 0.5, Y = re(Y, m, Math.max(m, f.width - w - m)), K = re(K, m, Math.max(m, f.height - x - m));
      else if (M)
        D = "frame-rail", Y = p.left - f.left - w - 10, K = p.top - f.top + p.height * 0.5 - x * 0.5, Y = re(Y, m, Math.max(m, f.width - w - m)), K = re(K, m, Math.max(m, f.height - x - m));
      else if (C) {
        D = "footer";
        const le = l.closest(".pano-paint-footer"), he = le ? le.getBoundingClientRect() : p;
        Y = he.left - f.left + he.width * 0.5 - w * 0.5, K = he.bottom - f.top + 5, Y = re(Y, m, Math.max(m, f.width - w - m)), K = Math.max(m, K);
      }
      Y = re(Y, m, Math.max(m, f.width - w - m)), K = Math.max(m, K), E.tooltip.left = Y, E.tooltip.top = K, E.tooltip.variant = D, E.tooltip.visible = !0;
    });
  }
  const un = ip({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = $t(Number(i.yaw || 0)), h.viewPitch = re(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = re(Number(i.fov || h.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = O.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || O.clientWidth || 0)),
        h: Math.max(1, Number(i.height || O.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = _.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Di,
    onInteraction: () => {
      se.backgroundDirty = !0, se.dirty = !0;
    }
  });
  function iS(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += rb(s, i.lastAngle), i.lastAngle = s;
    const f = ib(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = ta(f), p.fillPct = (f + 180) / 360 * 100), fi(), Gu(i), ue({ localOnly: !0 });
  }
  function oS(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = P1(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = ta(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), fi(), Gu(i), ue({ localOnly: !0 });
  }
  const bm = (i, s) => {
    const l = Vi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Gu(i) {
    var g, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Kt.timer && (clearTimeout(Kt.timer), Kt.timer = 0), Kt.target = null;
    const s = mn(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), f = (w = Q.getBoundingClientRect) == null ? void 0 : w.call(Q);
    if (!s || !l || !f || O.width <= 0 || O.height <= 0) return;
    const p = l.width / O.width, m = l.height / O.height;
    E.tooltip.text = `${ta(i.shot.roll_deg)}°`, E.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, E.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, E.tooltip.variant = "roll", E.tooltip.visible = !0;
  }
  L == null || L.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = je();
    if (!s || s.locked === !0) return;
    const l = mn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = bm(i, f);
    h.interaction = {
      kind: "roll_frame",
      shot: s,
      center: f,
      lastAngle: p,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = L.setPointerCapture) == null || m.call(L, i.pointerId), i.preventDefault(), fi(), Gu(h.interaction), ue({ localOnly: !0 });
  }), L == null || L.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || iS(
      h.interaction,
      bm(i, h.interaction.center),
      i
    );
  });
  const aS = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (Ze(), ot(), $e()), h.interaction = null, oo(), ci(), fi(), ue());
  };
  L == null || L.addEventListener("pointerup", aS), L == null || L.addEventListener("pointercancel", () => ts()), L == null || L.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && ts();
  }), L == null || L.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? je() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, Ze(), ot(), $e(), fi(), ue(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    Ge.selection && (Ge.selection = null, jr());
    const s = Vi(i);
    rn = s, vl(s, !0), Ea(), un.state.inertia.active = !1, un.state.inertia.vx = 0, un.state.inertia.vy = 0;
    const l = pr(), f = ju(), p = l || f ? JP(Su(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? um(s, i.pointerId) : jw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const M = yl(i);
      h.interaction = { kind: "view", last: M, lastTs: performance.now() }, un.startDrag(M.x, M.y, i.pointerId, performance.now()), vt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), mh(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const M = je();
        if (!M || r || M.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: M,
          last: s,
          start: {
            yaw_deg: Number(M.yaw_deg || 0),
            pitch_deg: Number(M.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const M = h.mode === "unwrap" ? s : yl(i);
        h.interaction = { kind: "view", last: M, lastTs: performance.now() }, un.startDrag(M.x, M.y, i.pointerId, performance.now());
      }
      vt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const M = je(), C = mn(M);
      if (!M || M.locked === !0 || !C) return;
      const D = N1({
        frame: C,
        point: s,
        startRollDeg: Number(M.roll_deg ?? M.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!D) return;
      h.interaction = {
        kind: "roll_frame",
        shot: M,
        center: D.center,
        lastAngle: D.lastAngle,
        accumulatedRad: D.accumulatedRad,
        rollGesture: D,
        start: { roll_deg: Number(M.roll_deg ?? M.rot_deg ?? 0) },
        changed: !1,
        altStarted: D.source === "alt",
        source: D.source
      }, O.setPointerCapture(i.pointerId), i.preventDefault(), fi(), ue({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      um(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && wm(i, s);
      return;
    }
    if (Te && !Te.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (tm() || zu())) {
      if (!ol()) return;
      wn();
      const M = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, D = h.mode === "frame" && zu() ? je() : null, Y = { kind: "ERP_GLOBAL" }, K = D ? Cr(s, D, performance.now()) : Ar(s, performance.now());
      if (!K) {
        vt(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: M,
        _livePreviewToken: na("live"),
        stroke: C === "lasso_fill" ? hm(M, C, [K], Y) : pm(M, C, [K], Y)
      }, Ho();
      const ee = ir();
      if (ee)
        if (h.paintEngine.beginStroke(h.interaction.stroke, ee), h.interaction.kind === "paint_stroke") {
          const Z = h.paintEngine.ensureTarget(ee), le = Number((K == null ? void 0 : K.u) ?? (K == null ? void 0 : K.x) ?? 0), he = Number((K == null ? void 0 : K.v) ?? (K == null ? void 0 : K.y) ?? 0);
          h.paintEngine.appendStrokePoint(Z, le, he, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, ee);
      vt(s), O.setPointerCapture(i.pointerId), ue();
      return;
    }
    const m = dr(), g = Et(), w = m.length > 1 ? Ra(m) : g ? en(g) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, vt(s), O.setPointerCapture(i.pointerId), ue({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && Vr() && pr() && p_(i, s) || h.primaryTool === "cursor" && P && no() && sS(i, s)) return;
    if (m.length > 1 && (w != null && w.visible)) {
      if ((m.some((C) => vn(C)) ? { kind: "none" } : ns(w, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((C) => C),
          offset: { x: s.x - w.center.x, y: s.y - w.center.y },
          startCenter: { x: w.center.x, y: w.center.y },
          stickerSnapshots: m.filter((C) => Nt(C)).map((C) => ({
            id: String(C.id || ""),
            yaw_deg: Number(ln(C).yaw_deg || 0),
            pitch_deg: Number(ln(C).pitch_deg || 0),
            center: (() => {
              var Y, K;
              const D = en(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((K = D.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((C) => cn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: An(Nr(C.actionGroupId, C.layerKind)),
            frameSnapshot: An(Ii(C.actionGroupId, C.layerKind)),
            center: (() => {
              var Y, K;
              const D = en(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((K = D.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: du(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => bn(C)).map((C) => ({
            id: yn(C.rasterObjectId || C.id || ""),
            snapshot: An(Gn().find((D) => String((D == null ? void 0 : D.id) || "") === yn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var Y, K;
              const D = en(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((K = D.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: xh(C)
          }))
        }, vt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (g && (w != null && w.visible)) {
      const M = vn(g) ? { kind: "none" } : ns(w, s, g);
      if (M.kind === "scale") {
        h.interaction = cn(g) ? {
          kind: "scale_stroke_group",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: An(Nr(g.actionGroupId, g.layerKind)),
          frameSnapshot: An(Ii(g.actionGroupId, g.layerKind)),
          cursor: M.cursor
        } : bn(g) ? {
          kind: "scale_raster_object",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: An(Gn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(g.rasterObjectId || g.id || ""))),
          cursor: M.cursor
        } : {
          kind: "scale",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(ln(g).hFOV_deg || 20),
          startVFOV: Number(ln(g).vFOV_deg || 20),
          cursor: M.cursor
        }, vt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "scale_x" || M.kind === "scale_y") {
        h.interaction = {
          kind: M.kind,
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(ln(g).hFOV_deg || 20),
          startVFOV: Number(ln(g).vFOV_deg || 20),
          cursor: M.cursor,
          edge: M.edge
        }, vt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "rotate") {
        h.interaction = cn(g) ? {
          kind: "rotate_stroke_group",
          item: g,
          center: w.center,
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x),
          snapshot: An(Nr(g.actionGroupId, g.layerKind)),
          frameSnapshot: An(Ii(g.actionGroupId, g.layerKind))
        } : {
          kind: "rotate",
          item: g,
          center: w.center,
          startRot: Number(ln(g).rot_deg || ln(g).roll_deg || 0),
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x)
        }, vt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "move") {
        if (cn(g)) {
          const C = h.mode === "frame" ? (() => {
            const D = je();
            return D ? Cr(s, D, performance.now()) : null;
          })() : Ar(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: g,
            startUv: C,
            snapshot: An(Nr(g.actionGroupId, g.layerKind)),
            frameSnapshot: An(Ii(g.actionGroupId, g.layerKind))
          }, vt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        if (bn(g)) {
          const C = h.mode === "frame" ? (() => {
            const D = je();
            return D ? Cr(s, D, performance.now()) : null;
          })() : Ar(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: g,
            startUv: C,
            snapshot: An(Gn().find((D) => String((D == null ? void 0 : D.id) || "") === yn(g.rasterObjectId || g.id || "")))
          }, vt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: g,
          offset: { x: s.x - w.center.x, y: s.y - w.center.y }
        }, vt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    }
    const x = mm(s);
    if (x) {
      const M = h.selectedId !== x.item.id;
      if (M && h.selectedId && (Ze(), Vn()), Rn(x.item), V && M && (h.cutoutAspectOpen = !1), M && $e(), We(), ue(), vn(x.item)) {
        vt(s);
        return;
      }
      h.interaction = {
        kind: cn(x.item) ? "move_stroke_group" : bn(x.item) ? "move_raster_object" : "move",
        item: x.item,
        offset: { x: s.x - x.geom.center.x, y: s.y - x.geom.center.y },
        startUv: cn(x.item) || bn(x.item) ? h.mode === "frame" ? (() => {
          const C = je();
          return C ? Cr(s, C, performance.now()) : null;
        })() : Ar(s, performance.now()) : null,
        snapshot: cn(x.item) ? An(Nr(x.item.actionGroupId, x.item.layerKind)) : bn(x.item) ? An(Gn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(x.item.rasterObjectId || x.item.id || ""))) : null,
        frameSnapshot: cn(x.item) ? An(Ii(x.item.actionGroupId, x.item.layerKind)) : null
      }, vt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    const I = !!h.selectedId;
    I && (Ze(), Vn()), $a(), I && $e(), We(), ue(), h.mode === "pano" && wm(i, s);
  };
  function Yo() {
    return xf(_n(), O.width, O.height, $r());
  }
  function ao(i, s) {
    return Ie.gizmoPointer(i, Yo(), s.x, s.y, O.width, O.height);
  }
  function sS(i, s) {
    var w;
    const l = (w = rr().space) == null ? void 0 : w.gizmo;
    if (l && ao("hover", s) !== null && ao("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: Ao(zo(), h.frame),
        changed: !1
      }, O.setPointerCapture(i.pointerId), vt(s), !0;
    const f = dr(), p = Et(), m = f.length > 1 ? f.some((x) => vn(x)) ? "none" : ns(Ra(f), s).kind : p && !vn(p) ? ns(en(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = Ie.pickSticker(Yo(), s.x, s.y, O.width, O.height);
    return _.stickers.some((x) => x.id === g && x.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (Ze(), Vn()), _u(g), $e(), We(), Rr(), ue()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function vm(i) {
    var f;
    const l = !!(h.worldSelectedId || hr()) && h.primaryTool === "cursor" && no() && !!((f = rr().space) != null && f.gizmo) ? ao("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, se.backgroundDirty = !0, ue({ localOnly: !0 }));
  }
  function lS(i, s) {
    const l = ao("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(Zg(i.mode, i.base, i.start, l))) En(_.camera, p, h.frame, m);
      or(), i.changed = !0, Ue.request("sidePanel"), ue({ localOnly: !0 });
      return;
    }
    const f = _.stickers.find((p) => p.id === i.id);
    !l || !f || (zN(f, h.frame, Zg(i.mode, i.base, i.start, l)), i.changed = !0, Vt(), Ue.request("sidePanel"), ue({ localOnly: !0 }));
  }
  function _m(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (ao("up", h.pointerPos), se.backgroundDirty = !0, i.changed && (Ze(), ot(), $e())), vt(h.pointerPos), ue();
  }
  function wm(i, s) {
    if (pr()) {
      const f = Su().emptyLeft;
      f && mh(f, s, i.pointerId);
      return;
    }
    const l = yl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, un.startDrag(l.x, l.y, i.pointerId, performance.now()), vt(s), O.setPointerCapture(i.pointerId);
  }
  function cS(i, s) {
    if (!k || !Wt.playing || (Wt.stop(), i.kind === "frame_pan")) return;
    if (i.kind === "frame_orbit") {
      const p = Qa();
      p && (i.pivot = sm(p, es(p), s));
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = _.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = io() : p && (i.base = Ao(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = Ra(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((x) => String((x == null ? void 0 : x.id) || "") === m.id), w = g ? en(g) : null;
        w != null && w.visible && (m.yaw_deg = Number(ln(g).yaw_deg || 0), m.pitch_deg = Number(ln(g).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = en(i.item);
    if (!(l != null && l.visible)) return;
    const f = ln(i.item);
    if (i.kind === "move") {
      i.offset = { x: s.x - l.center.x, y: s.y - l.center.y };
      return;
    }
    if (i.center = l.center, i.kind === "rotate") {
      i.startRot = Number(f.rot_deg || f.roll_deg || 0), i.startAng = Math.atan2(s.y - l.center.y, s.x - l.center.x);
      return;
    }
    i.startDist = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)), i.startHFOV = Number(f.hFOV_deg || 20), i.startVFOV = Number(f.vFOV_deg || 20);
  }
  O.onpointermove = (i) => {
    var f, p, m, g, w, x, I, M, C, D, Y, K, ee, Z, le, he, oe, ye, Be, qe, lt, we;
    const s = Vi(i);
    if (vl(s, !0), !h.interaction) {
      vm(s), vt(s);
      return;
    }
    vt(s);
    const l = h.interaction;
    if (rn && (s.x !== rn.x || s.y !== rn.y)) {
      const de = rn;
      rn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || cS(l, de);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        lS(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let _e = !1;
        de.forEach((Re) => {
          const He = Vi(Re);
          if (h.mode === "frame") {
            const nt = je(), ct = nt ? mn(nt) : null;
            if (ct) {
              const Ft = (He.x - ct.x) / Math.max(1, ct.w), ut = (He.y - ct.y) / Math.max(1, ct.h);
              if (!(Ft >= 0 && Ft <= 1 && ut >= 0 && ut <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Zw(l));
            }
          }
          Xw(l, He, performance.now()) && (_e = !0);
        }), _e && ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let _e = !1;
        if (de.forEach((Re) => {
          const He = Vi(Re);
          if (h.mode === "frame") {
            const nt = je(), ct = nt ? mn(nt) : null;
            if (ct) {
              const Ft = (He.x - ct.x) / Math.max(1, ct.w), ut = (He.y - ct.y) / Math.max(1, ct.h);
              if (!(Ft >= 0 && Ft <= 1 && ut >= 0 && ut <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Qw(l));
            }
          }
          qw(l, He, performance.now()) && (_e = !0);
        }), _e) {
          const Re = ir();
          Re && h.paintEngine.updateActiveStroke(l.stroke, Re), ue({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const de = performance.now(), _e = h.mode === "unwrap" ? s : yl(i);
        un.moveDrag(_e.x, _e.y, h.mode === "unwrap" ? "unwrap" : "pano", de), l.lastTs = de, l.last = _e, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        Hw(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const de = _n();
        fh(l.kind === "space_pan" ? Ug(de, s.x - l.last.x, s.y - l.last.y, O.width, O.height, l.depth) : Bg(de, s.x - l.last.x, s.y - l.last.y, O.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const de = bl(l.shot);
        if (!de || !l.shot) return;
        const _e = s.x - l.last.x, Re = s.y - l.last.y, He = A1(l.shot, {
          dx: _e,
          dy: Re,
          focalPx: de.focalPx,
          invertX: ((f = _.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = _.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = He.yaw_deg, l.shot.pitch_deg = He.pitch_deg, l.changed = l.changed || Math.abs(_e) > 0 || Math.abs(Re) > 0, l.last = s, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        oS(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const de = s.x - l.offset.x, _e = s.y - l.offset.y;
        if (h.mode === "frame" && V) {
          const Re = je(), He = mn(Re);
          if (!Re || !He) return;
          const nt = {
            x: re((de - He.x) / Math.max(1, He.w), 0, 1),
            y: re((_e - He.y) / Math.max(1, He.h), 0, 1)
          }, ct = Tu(Re, nt);
          if (!ct) return;
          const Ft = Vl(ct);
          Mr(l.item, { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch });
        } else if (h.mode === "unwrap") {
          const Re = Di(), He = re((de - Re.x) / Math.max(Re.w, 1), 0, 1), nt = re((_e - Re.y) / Math.max(Re.h, 1), 0, 1);
          Mr(l.item, { yaw_deg: $t(He * 360 - 180), pitch_deg: re(90 - nt * 180, -90, 90) });
        } else {
          const Re = Mu(de, _e), He = Vl(Re);
          Mr(l.item, { yaw_deg: He.yaw, pitch_deg: He.pitch });
        }
        Nt(l.item) && Vt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const de = h.mode === "frame" ? (() => {
          const He = je();
          return He ? Cr(s, He, performance.now()) : null;
        })() : Ar(s, performance.now());
        if (!de || !l.startUv) return;
        const _e = fr(Number(de.u || 0), Number(l.startUv.u || 0)), Re = Number(de.v || 0) - Number(l.startUv.v || 0);
        Up((m = l.item) == null ? void 0 : m.actionGroupId, _e, Re, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (Pr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const de = h.mode === "frame" ? (() => {
          const He = je();
          return He ? Cr(s, He, performance.now()) : null;
        })() : Ar(s, performance.now());
        if (!de || !l.startUv) return;
        const _e = fr(Number(de.u || 0), Number(l.startUv.u || 0)), Re = Number(de.v || 0) - Number(l.startUv.v || 0);
        Xp(((w = l.item) == null ? void 0 : w.rasterObjectId) || ((x = l.item) == null ? void 0 : x.id) || "", _e, Re, l.snapshot) && (Wo(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const _e = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        mv(((I = l.item) == null ? void 0 : I.rasterObjectId) || ((M = l.item) == null ? void 0 : M.id) || "", _e, l.snapshot) && (Wo(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const de = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), _e = s.y - Number(((D = l.offset) == null ? void 0 : D.y) || 0);
        let Re = !1, He = !1, nt = !1;
        const ct = de - Number(((Y = l.startCenter) == null ? void 0 : Y.x) || de), Ft = _e - Number(((K = l.startCenter) == null ? void 0 : K.y) || _e);
        for (const ut of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const tn = (t === "cutout" ? fu() : li()).find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === String(ut.id || ""));
          if (!tn || !Nt(tn)) continue;
          const Wn = {
            x: Number(((ee = ut.center) == null ? void 0 : ee.x) || 0) + ct,
            y: Number(((Z = ut.center) == null ? void 0 : Z.y) || 0) + Ft
          };
          if (h.mode === "frame" && V) {
            const Ut = je(), fn = mn(Ut);
            if (!Ut || !fn) continue;
            const so = {
              x: re((Wn.x - fn.x) / Math.max(1, fn.w), 0, 1),
              y: re((Wn.y - fn.y) / Math.max(1, fn.h), 0, 1)
            }, Hm = Tu(Ut, so);
            if (!Hm) continue;
            const Gm = Vl(Hm);
            Mr(tn, { yaw_deg: Gm.yaw, pitch_deg: Gm.pitch });
          } else if (h.mode === "unwrap") {
            const Ut = Di(), fn = re((Wn.x - Ut.x) / Math.max(Ut.w, 1), 0, 1), so = re((Wn.y - Ut.y) / Math.max(Ut.h, 1), 0, 1);
            Mr(tn, { yaw_deg: $t(fn * 360 - 180), pitch_deg: re(90 - so * 180, -90, 90) });
          } else {
            const Ut = Mu(Wn.x, Wn.y), fn = Vl(Ut);
            Mr(tn, { yaw_deg: fn.yaw, pitch_deg: fn.pitch });
          }
          Re = !0;
        }
        for (const ut of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const tn = {
            x: Number(((le = ut.center) == null ? void 0 : le.x) || 0) + ct,
            y: Number(((he = ut.center) == null ? void 0 : he.y) || 0) + Ft
          }, Wn = h.mode === "frame" ? (() => {
            const fn = je();
            return fn ? Cr(tn, fn, performance.now()) : null;
          })() : Ar(tn, performance.now()), Ut = ut.centerUv || null;
          if (Wn && Ut) {
            const fn = fr(Number(Wn.u || 0), Number(Ut.u || 0)), so = Number(Wn.v || 0) - Number(Ut.v || 0);
            Up(ut.id, fn, so, ut.snapshot, ut.layerKind, ut.frameSnapshot) && (Re = !0, He = !0);
          }
        }
        for (const ut of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const tn = {
            x: Number(((oe = ut.center) == null ? void 0 : oe.x) || 0) + ct,
            y: Number(((ye = ut.center) == null ? void 0 : ye.y) || 0) + Ft
          }, Wn = h.mode === "frame" ? (() => {
            const fn = je();
            return fn ? Cr(tn, fn, performance.now()) : null;
          })() : Ar(tn, performance.now()), Ut = ut.centerUv || null;
          if (Wn && Ut) {
            const fn = fr(Number(Wn.u || 0), Number(Ut.u || 0)), so = Number(Wn.v || 0) - Number(Ut.v || 0);
            Xp(ut.id, fn, so, ut.snapshot) && (Re = !0, nt = !0);
          }
        }
        Re && (He ? Pr({ rebuildPaintEngine: !1 }) : nt ? Wo() : Vt(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const _e = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        Yp((Be = l.item) == null ? void 0 : Be.actionGroupId, _e, 0, l.snapshot, (qe = l.item) == null ? void 0 : qe.layerKind, l.frameSnapshot) && (Pr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let de = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * _o;
        i.shiftKey && (de = Math.round(de / 45) * 45), Yp((lt = l.item) == null ? void 0 : lt.actionGroupId, 1, de, l.snapshot, (we = l.item) == null ? void 0 : we.layerKind, l.frameSnapshot) && (Pr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale") {
        const _e = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Mr(l.item, { hFOV_deg: re(l.startHFOV * _e, 1, 179), vFOV_deg: re(l.startVFOV * _e, 1, 179) }), nr(l.item) || (l.item.aspect_id = vo(l.item)), Nt(l.item) && Vt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const _e = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Mr(l.item, { hFOV_deg: re(l.startHFOV * _e, 1, 179) }), nr(l.item) || (l.item.aspect_id = vo(l.item)), Nt(l.item) && Vt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const _e = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Mr(l.item, { vFOV_deg: re(l.startVFOV * _e, 1, 179) }), nr(l.item) || (l.item.aspect_id = vo(l.item)), Nt(l.item) && Vt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let _e = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * _o, Re = l.startRot - _e;
        i.shiftKey && (Re = Math.round(Re / 45) * 45), Mr(l.item, { [Nt(l.item) ? "rot_deg" : "roll_deg"]: Re }), Nt(l.item) && Vt(), ue({ localOnly: !0 });
      }
    }
  }, O.onpointerup = () => {
    var s, l, f, p, m, g, w;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, vt(h.pointerPos), We();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        _m(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ho();
        const x = Hu(h.interaction), I = !!h.interaction._hasCommittedSegments;
        if (x || I) {
          Pr();
          const M = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (M) {
            const D = Nn().find((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "") === M);
            D && (D.frame = null);
          }
          const C = ir();
          C && (x ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), Oh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), Ze(), Vn(), $e(), We(), e.setDirtyCanvas(!0, !0), ue();
        } else {
          const M = ir();
          M && h.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const x = gm(h.interaction.start, h.interaction.current), M = [
          ...t === "cutout" ? Fu().filter((C) => !hn(C)) : [...li()],
          ...fv(),
          ...dv()
        ].filter((C) => tS(x, en(C)));
        bv(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), V && M.length && (h.cutoutAspectOpen = !1), $e(), We(), ue();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((w = h.interaction) == null ? void 0 : w.kind))
        h.interaction.changed && (Ze(), ot(), $e());
      else if (h.interaction && h.interaction.kind !== "view") {
        let x = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (x = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (x = !0), x && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Pr({ rebuildPaintEngine: !0 }) : Wo()), Ze(), Vn(), e.setDirtyCanvas(!0, !0), Bo(), We(), ue();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && oo(), Ho(), i && i.kind === "view" && un.endDrag(performance.now()), ci(), We(), vt(h.pointerPos), ue();
    }
  }, O.onpointercancel = () => {
    var i, s, l, f, p;
    if (!ts()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        _m(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && un.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        Ho();
        const m = ir();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, Ho(), ci(), vt(h.pointerPos), ue({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    ts();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.oncontextmenu = (i) => {
    (pr() || ju()) && ZP(Su(), 2) && i.preventDefault();
  }, O.onmousemove = (i) => {
    const s = Vi(i), l = vl(s, !0);
    h.interaction || (vt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0 }));
  }, O.onpointerleave = () => {
    h.interaction || vm({ x: -1e6, y: -1e6 });
  }, O.onmouseleave = () => {
    vl(h.pointerPos, !1), vt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Vi(i), l = yc(i);
      l && wn(), l && ju() ? Gw(s, -l) : l && zw(s, l) && ue({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Ea(), pr()) {
        const s = yc(i);
        s && jv(Vi(i), -s);
      } else un.applyWheelEvent(i) && ue({ localOnly: !0 });
      i.preventDefault();
    }
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Zi(!0));
  }, O.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), kn.depth = 0, Zi(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Er(p));
    l && Uh(l);
  };
  const Sm = (i) => {
    t !== "stickers" && t !== "cutout" || r || ou(i) && (kn.depth += 1, Zi(!0), i.preventDefault());
  }, xm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!kn.active && ou(i) && Zi(!0), kn.active && i.preventDefault());
  }, km = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !kn.active) return;
    kn.depth = Math.max(0, kn.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (kn.depth === 0 || s) && Zi(!1);
  }, Mm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (kn.depth = 0, Zi(!1), ou(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Sm, !0), window.addEventListener("dragover", xm, !0), window.addEventListener("dragleave", km, !0), window.addEventListener("drop", Mm, !0);
  function Ku() {
    const { canUndo: i, canRedo: s } = Gh();
    ea(E.toolButtons, "value", "undo", { disabled: !i }), ea(E.toolButtons, "value", "redo", { disabled: !s });
  }
  const Nm = (i, s, l = !1) => {
    var I;
    wn();
    const f = V && h.mode === "frame" ? je() : null, p = f || Et(), m = f ? "shot" : Va(), g = zo();
    if (g && !il(g) || !g && (!p || m === "stroke" || vn(p))) return;
    const w = (((I = E.sidePanel) == null ? void 0 : I.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let x = Number(s);
    if (Number.isNaN(x) && (x = 0), (g || B) && iF.has(i) ? x = i === "scale" ? Math.max(x, $0) : x : x = re(x, Number(w.min), Number(w.max)), i === "yaw_deg" && (x = $t(x)), !g && B && i.startsWith("position_")) {
      or(), LN(_.camera, h.frame, i, x), $e(), ue(), l && Ze();
      return;
    }
    if (g) {
      $N(g, h.frame, i, x), Vt(), $e(), ue(), l && Ze();
      return;
    }
    i === "opacity" ? RN(p, h.frame, x / 100) : Mr(p, { [i]: x }), V && !nr(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = vo(p)), $e(), ue(), l && Ze();
  };
  gt == null || gt.addEventListener("click", async (i) => {
    var f, p, m, g, w, x, I;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const M = qn(s.getAttribute("data-coverage"));
      if (M === qn(_.coverage)) return;
      _.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? se.backgroundDirty = !0 : (Vn(), Vw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), $e(), We(), ue();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = E.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      E.sidePanel.selectionPicker.open = !E.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      E.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (M && (t === "stickers" ? C = [...li(), ...F ? _.shots : []].find((D) => String((D == null ? void 0 : D.id) || "") === M) || null : C = ((m = Jp().find((D) => {
        var Y;
        return String(((Y = D == null ? void 0 : D.item) == null ? void 0 : Y.id) || "") === M;
      })) == null ? void 0 : m.item) || null), Rn(C || null), C && !cn(C)) {
        const D = ln(C);
        Kp($t(Number(D.yaw_deg || 0)), re(Number(D.pitch_deg || 0), -89.9, 89.9));
      }
      $e(), We(), ue();
      return;
    }
    if (l === "copy-state-inline") {
      const M = Et(), C = Va();
      if (!M || C === "stroke" || dr().length > 1) return;
      const D = JSON.stringify(V && C !== "image" ? ah(M) : Ov(ln(M)));
      try {
        await navigator.clipboard.writeText(D), (g = E.sidePanel) != null && g.copyStateButton && (E.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Y;
          (Y = E.sidePanel) != null && Y.copyStateButton && (E.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", $u(), $e(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ue();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", $u(), $e(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ue();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, $u(), $e(), (I = e.setDirtyCanvas) == null || I.call(e, !0, !0), ue();
      return;
    }
    if (l === "close-preview") {
      qo();
      return;
    }
    if (l === "cancel-close") {
      qo();
      return;
    }
    l === "save-close" && (Lw(), qo());
  }), gt == null || gt.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Nm(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), gt == null || gt.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Nm(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Wu = () => Rr();
  Wu(), H.addEventListener("click", (i) => {
    var I, M, C, D, Y;
    if ((M = (I = i.target) == null ? void 0 : I.matches) != null && M.call(I, "[data-confirm-overlay]")) {
      const K = (C = E.confirmDialog) == null ? void 0 : C.resolve;
      E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, K == null || K(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      $v(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), se.backgroundDirty = !0, We(), ue({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const K = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), V && h.mode === "frame" && (K !== "frame" && (se.frameSafeRect = null), $e(), We()), Za(), ci(), ue();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const K = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = K, (K === "paint" || K === "mask") && $a({ preservePanelValues: !0 }), Kn(), $e(), We(), ue();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const K = String(p.getAttribute("data-tool-ui-action") || "");
        if ((K === "undo" || K === "redo") && p.disabled) return;
        K === "undo" ? Lu(-1) : K === "redo" ? Lu(1) : K === "clear" ? Aw() : K === "add" || K === "add-image" ? hw() : K === "add-world" ? mw() : K === "add-or-look" ? xw() : K === "add-camera" && kw();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const K = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = K, $a({ preservePanelValues: !0 }), Bn[K] && (h.activeBrushPresetId = K), Kn(), $e(), We(), ue();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), $a({ preservePanelValues: !0 }), Kn(), $e(), We(), ue();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const K = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Cw(K);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const K = ac.find((ee) => ee.id === p.getAttribute("data-paint-color-swatch"));
        if (!K) return;
        h.paintColor = ar(K.color), Rt(!0), Kn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Te && !Te.hidden ? Rt(!0) : Dn(), Kn();
        return;
      }
    }
    const m = String(((D = p == null ? void 0 : p.getAttribute) == null ? void 0 : D.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      Lt.resumeAfterScrub = !1, Ru();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), th(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      const K = !E.videoTransport.loop;
      E.videoTransport.loop = K, Ae.loop = K, Ei({
        hasAudio: E.videoTransport.hasAudio,
        loop: K,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        E.frameRail.aspectOpen = !E.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const K = h.mode === "frame" ? je() : null;
        if (!K || K.locked === !0) return;
        Xh(K, String(p.getAttribute("data-aspect") || "1:1")), E.frameRail.aspectOpen = !1, Bo(), Ze(), ot(), ci(), $e(), We(), ue();
        return;
      }
      if (m === "frame-aspect-custom") {
        const K = h.mode === "frame" ? je() : null, ee = p.getAttribute("data-custom-width"), Z = p.getAttribute("data-custom-height");
        if (!K || !Fw(K, ee, Z)) return;
        E.frameRail.aspectOpen = !1, Bo(), Ze(), ot(), ci(), ue();
        return;
      }
      if (m === "frame-rotate-90") {
        const K = h.mode === "frame" ? je() : null;
        if (!K || K.locked === !0) return;
        Zh(K), E.frameRail.aspectOpen = !1, Bo(), Ze(), ot(), ci(), ue();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, We(), ue();
        return;
      }
      if (m === "aspect-set") {
        const K = Et();
        if (!K) return;
        const ee = String(p.getAttribute("data-aspect") || "1:1");
        Xh(K, ee), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Bo(), Ze(), ot(), We(), ue();
        return;
      }
      if (m === "rotate-90") {
        const K = Et();
        if (!K || to()) return;
        Zh(K), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Bo(), Ze(), ot(), We(), ue();
        return;
      }
      if (m === "bring-front") {
        Tw();
        return;
      }
      if (m === "send-back") {
        Dw();
        return;
      }
      if (m === "duplicate") {
        Iw();
        return;
      }
      if (m === "replace-image") {
        _w();
        return;
      }
      if (m === "toggle-lock") {
        yv();
        return;
      }
      if (m === "back-initial") {
        xv();
        return;
      }
      if (m === "toggle-visible") {
        Sv();
        return;
      }
      if (m === "delete") {
        Jh();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      Qi(
        { position: jo(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Y = $r()) == null ? void 0 : Y.radius) || Ir },
        { mode: oc(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!pr() || oc(h.spaceMode, h.viewTransition) !== "6dof") return;
      zv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, DF(e == null ? void 0 : e.id, h.showGrid), Wu(), ue();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), dS();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const K = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = K, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = K ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), Om(), ue();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const w = Number(g.getAttribute("data-paint-history-index")), x = h.customPaintHistory[w];
    x && (h.customPaintColor = ar(x), h.paintColor = ar(x), Kn());
  }), H.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      Wt.playing && (Lt.resumeAfterScrub = !0), Wt.seek(yo(Number(s.value || 0), rl()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      const m = re(Number(l.value || 0), 0, 1);
      Ae.volume = m, Ae.muted = m <= 1e-4, Ei({
        hasAudio: E.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = $i(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Kn(), Yw();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: re(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = ar(m), h.paintColor = ar(m), Kn();
    }
  }), H.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      Lt.resumeAfterScrub && Wt.play(), Lt.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && _l();
  }), H.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && _l();
  }), H.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && _l();
  }), H.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && _l();
  }), H.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !H.contains(s) || Kt.target !== s && (Kt.target = s, Kt.timer && clearTimeout(Kt.timer), Kt.timer = window.setTimeout(() => {
      Kt.target === s && rS(s);
    }, 220));
  }), H.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Kt.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || oo();
  }), H.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || oo();
  });
  const uS = (i, s) => {
    var w;
    if (!Ee) return;
    const l = Ee.getBoundingClientRect(), f = re((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - re((s - l.top) / Math.max(1, l.height), 0, 1), m = Gf(h.customPaintColor), g = { ...Hf(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = ar(g), h.paintColor = ar(g), Kn();
  }, fS = (i) => {
    var m;
    if (!Ke) return;
    const s = Ke.getBoundingClientRect(), l = re((i - s.left) / Math.max(1, s.width), 0, 1), f = Gf(h.customPaintColor), p = { ...Hf(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = ar(p), h.paintColor = ar(p), Kn();
  }, Pm = (i, s) => {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Ee && (Ee.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Pm(i, (s) => uS(s.clientX, s.clientY));
  }), Ke && (Ke.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Pm(i, (s) => fS(s.clientX));
  }), H.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = E.confirmDialog) == null ? void 0 : p.resolve;
    E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const Am = () => {
    const i = !!h.fullscreen;
    ea(E.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Pe.fullscreen_close : Pe.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, wl = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, H.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Wu(), Am(), si(), ue());
  }, Cm = () => document.fullscreenElement === U, dS = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        wl(!h.fullscreen);
        return;
      }
      Cm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = U.requestFullscreen) == null ? void 0 : i.call(U));
    } catch {
      wl(!h.fullscreen);
    }
  }, Im = () => {
    document.fullscreenEnabled && wl(Cm());
  };
  document.addEventListener("fullscreenchange", Im), Am();
  const Om = () => {
    const i = !!h.outputPreviewExpanded;
    E.outputPreviewToggle.icon = i ? Pe.fullscreen_close : Pe.fullscreen, E.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", E.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Om();
  const Bu = e.onConnectionsChange;
  let Uu = null, Em = () => {
  };
  !r && t === "stickers" && (Em = F1(e, (i = "sync") => {
    i === "executed" && (SF(Qt, Ll), Fi(), P && dw()), sh(i);
  }, { editor: !0 }), Uu = function(...s) {
    typeof Bu == "function" && Bu.apply(this, s), Fi(), wi(this, "connections");
  }, e.onConnectionsChange = Uu), !r && !A && G0.set(String(e.id ?? "0"), () => vh());
  let Xo = null;
  const qo = async () => Xo || (Xo = (async () => {
    var i, s, l, f, p, m, g, w;
    return G0.delete(String(e.id ?? "0")), Kw(), r || Vn(), document.fullscreenElement === U && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Im), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === em && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (g = (m = Fr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), oo(), Ue.cancel(), sw(), Ae instanceof HTMLVideoElement && Ae.pause(), Mn.forEach((x) => {
      try {
        x();
      } catch {
      }
    }), Ie.dispose(), Zi(!1), window.removeEventListener("keydown", Fm, !0), window.removeEventListener("keydown", Tm, !0), window.removeEventListener("keydown", Lm, !0), window.removeEventListener("keyup", Rm, !0), window.removeEventListener("keydown", Sl, !0), window.removeEventListener("keyup", Sl, !0), window.removeEventListener("blur", Vm), window.removeEventListener("keydown", $m, !0), window.removeEventListener("dragenter", Sm, !0), window.removeEventListener("dragover", xm, !0), window.removeEventListener("dragleave", km, !0), window.removeEventListener("drop", Mm, !0), !r && t === "stickers" && (e.onConnectionsChange === Uu && (e.onConnectionsChange = Bu), Em()), J.unmount(), j.remove(), Rw(), Xo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Xo = null, !1)), Xo), Fm = (i) => {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (ts()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === U) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), wl(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), qo();
    }
  }, Tm = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const g = i.target, w = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Ge.selection) {
      fw(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (Ow()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Et() && (Jh(), i.preventDefault(), i.stopPropagation());
  }, Dm = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !E.timeline.visible || E.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !U.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !rF.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, Lm = (i) => {
    Dm(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Ru());
  }, Rm = (i) => {
    Dm(i) && (i.preventDefault(), i.stopPropagation());
  }, Sl = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, fi(), vt(h.pointerPos));
  }, Vm = () => {
    h.marqueeModifier = !1, h.altModifier = !1, fi(), vt(h.pointerPos);
  }, $m = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Gh();
    i.shiftKey && !g || !i.shiftKey && !m || (Lu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Fm, !0), window.addEventListener("keydown", Tm, !0), window.addEventListener("keydown", Lm, !0), window.addEventListener("keyup", Rm, !0), window.addEventListener("keydown", Sl, !0), window.addEventListener("keyup", Sl, !0), window.addEventListener("blur", Vm), window.addEventListener("keydown", $m, !0), U.addEventListener("pointerdown", (i) => {
    i.target === U && qo();
  });
  function Gr(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(_)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || Vn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      E.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Gr("cutout-focus", Lv), !r && t === "stickers" && Gr("external-sticker-sync", () => sh("open"), { rollbackState: !0 }), ww().catch((i) => {
    E.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Gr("history", Ze), Gr("undo-redo", Ku), Gr("paint-ui", Kn), Gr("side-panel", $e), Gr("look-at-frame", wu), Gr("video-source", Fi), Gr("canvas-size", $h), Gr("cursor", () => vt(h.pointerPos)), ue(), De = Wk("editor", () => {
    var i;
    return {
      type: t,
      readOnly: r,
      mode: h.mode,
      interaction: ((i = h.interaction) == null ? void 0 : i.kind) ?? null,
      timelineDrag: !!Ge.drag,
      playing: !!Wt.playing
    };
  }), se.rafId = requestAnimationFrame(jh);
}
Fr.registerExtension(lA({
  app: Fr,
  openEditor: jF,
  attachStickers: SC,
  attachCutout: xC,
  attachPreview: wC,
  restoreOutput: lC,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: cF
}));
