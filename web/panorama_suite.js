import * as Fs from "../../scripts/app.js";
import { app as Zn } from "../../scripts/app.js";
import { api as qt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function sd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Dt = {}, wo = [], Ar = () => {
}, Am = () => !1, Ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fl = (e) => e.startsWith("onUpdate:"), _n = Object.assign, ld = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, cv = Object.prototype.hasOwnProperty, At = (e, t) => cv.call(e, t), ct = Array.isArray, xo = (e) => Ua(e) === "[object Map]", Cm = (e) => Ua(e) === "[object Set]", Rp = (e) => Ua(e) === "[object Date]", pt = (e) => typeof e == "function", en = (e) => typeof e == "string", Or = (e) => typeof e == "symbol", Tt = (e) => e !== null && typeof e == "object", Im = (e) => (Tt(e) || pt(e)) && pt(e.then) && pt(e.catch), Em = Object.prototype.toString, Ua = (e) => Em.call(e), uv = (e) => Ua(e).slice(8, -1), Om = (e) => Ua(e) === "[object Object]", cd = (e) => en(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _a = /* @__PURE__ */ sd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, dv = /-\w/g, xn = Tl(
  (e) => e.replace(dv, (t) => t.slice(1).toUpperCase())
), fv = /\B([A-Z])/g, Ui = Tl(
  (e) => e.replace(fv, "-$1").toLowerCase()
), Dl = Tl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pc = Tl(
  (e) => e ? `on${Dl(e)}` : ""
), Pr = (e, t) => !Object.is(e, t), Ts = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Fm = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ud = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Vp;
const Ll = () => Vp || (Vp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (ct(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = en(n) ? gv(n) : Ft(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (en(e) || Tt(e))
    return e;
}
const pv = /;(?![^(]*\))/g, hv = /:([^]+)/, mv = /\/\*[^]*?\*\//g;
function gv(e) {
  const t = {};
  return e.replace(mv, "").split(pv).forEach((r) => {
    if (r) {
      const n = r.split(hv);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function bt(e) {
  let t = "";
  if (en(e))
    t = e;
  else if (ct(e))
    for (let r = 0; r < e.length; r++) {
      const n = bt(e[r]);
      n && (t += n + " ");
    }
  else if (Tt(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const yv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bv = /* @__PURE__ */ sd(yv);
function Tm(e) {
  return !!e || e === "";
}
function vv(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = dd(e[n], t[n]);
  return r;
}
function dd(e, t) {
  if (e === t) return !0;
  let r = Rp(e), n = Rp(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Or(e), n = Or(t), r || n)
    return e === t;
  if (r = ct(e), n = ct(t), r || n)
    return r && n ? vv(e, t) : !1;
  if (r = Tt(e), n = Tt(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !dd(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Dm = (e) => !!(e && e.__v_isRef === !0), ft = (e) => en(e) ? e : e == null ? "" : ct(e) || Tt(e) && (e.toString === Em || !pt(e.toString)) ? Dm(e) ? ft(e.value) : JSON.stringify(e, Lm, 2) : String(e), Lm = (e, t) => Dm(t) ? Lm(e, t.value) : xo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Nc(n, o) + " =>"] = i, r),
    {}
  )
} : Cm(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Nc(r))
} : Or(t) ? Nc(t) : Tt(t) && !ct(t) && !Om(t) ? String(t) : t, Nc = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Or(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let An;
class _v {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = An, !t && An && (this.index = (An.scopes || (An.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = An;
      try {
        return An = this, t();
      } finally {
        An = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = An, An = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (An = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
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
function Sv() {
  return An;
}
let Rt;
const Ac = /* @__PURE__ */ new WeakSet();
class Rm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, An && An.active && An.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ac.has(this) && (Ac.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $m(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $p(this), zm(this);
    const t = Rt, r = ur;
    Rt = this, ur = !0;
    try {
      return this.fn();
    } finally {
      jm(this), Rt = t, ur = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hd(t);
      this.deps = this.depsTail = void 0, $p(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ac.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    pu(this) && this.run();
  }
  get dirty() {
    return pu(this);
  }
}
let Vm = 0, Sa, wa;
function $m(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = wa, wa = e;
    return;
  }
  e.next = Sa, Sa = e;
}
function fd() {
  Vm++;
}
function pd() {
  if (--Vm > 0)
    return;
  if (wa) {
    let t = wa;
    for (wa = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Sa; ) {
    let t = Sa;
    for (Sa = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function zm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jm(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), hd(n), wv(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function pu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Hm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Hm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ea) || (e.globalVersion = Ea, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !pu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Rt, n = ur;
  Rt = e, ur = !0;
  try {
    zm(e);
    const i = e.fn(e._value);
    (t.version === 0 || Pr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Rt = r, ur = n, jm(e), e.flags &= -3;
  }
}
function hd(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      hd(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function wv(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let ur = !0;
const Gm = [];
function Xr() {
  Gm.push(ur), ur = !1;
}
function Jr() {
  const e = Gm.pop();
  ur = e === void 0 ? !0 : e;
}
function $p(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Rt;
    Rt = void 0;
    try {
      t();
    } finally {
      Rt = r;
    }
  }
}
let Ea = 0;
class xv {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class md {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Rt || !ur || Rt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Rt)
      r = this.activeLink = new xv(Rt, this), Rt.deps ? (r.prevDep = Rt.depsTail, Rt.depsTail.nextDep = r, Rt.depsTail = r) : Rt.deps = Rt.depsTail = r, Wm(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Rt.depsTail, r.nextDep = void 0, Rt.depsTail.nextDep = r, Rt.depsTail = r, Rt.deps === r && (Rt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Ea++, this.notify(t);
  }
  notify(t) {
    fd();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      pd();
    }
  }
}
function Wm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Wm(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const hu = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ Symbol(
  ""
), mu = /* @__PURE__ */ Symbol(
  ""
), Oa = /* @__PURE__ */ Symbol(
  ""
);
function mn(e, t, r) {
  if (ur && Rt) {
    let n = hu.get(e);
    n || hu.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new md()), i.map = n, i.key = r), i.track();
  }
}
function Wr(e, t, r, n, i, o) {
  const a = hu.get(e);
  if (!a) {
    Ea++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (fd(), t === "clear")
    a.forEach(s);
  else {
    const l = ct(e), p = l && cd(r);
    if (l && r === "length") {
      const d = Number(n);
      a.forEach((f, h) => {
        (h === "length" || h === Oa || !Or(h) && h >= d) && s(f);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), p && s(a.get(Oa)), t) {
        case "add":
          l ? p && s(a.get("length")) : (s(a.get($i)), xo(e) && s(a.get(mu)));
          break;
        case "delete":
          l || (s(a.get($i)), xo(e) && s(a.get(mu)));
          break;
        case "set":
          xo(e) && s(a.get($i));
          break;
      }
  }
  pd();
}
function co(e) {
  const t = /* @__PURE__ */ Nt(e);
  return t === e ? t : (mn(t, "iterate", Oa), /* @__PURE__ */ Qn(e) ? t : t.map(pr));
}
function Rl(e) {
  return mn(e = /* @__PURE__ */ Nt(e), "iterate", Oa), e;
}
function kr(e, t) {
  return /* @__PURE__ */ Zr(e) ? Fo(/* @__PURE__ */ zi(e) ? pr(t) : t) : pr(t);
}
const kv = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cc(this, Symbol.iterator, (e) => kr(this, e));
  },
  concat(...e) {
    return co(this).concat(
      ...e.map((t) => ct(t) ? co(t) : t)
    );
  },
  entries() {
    return Cc(this, "entries", (e) => (e[1] = kr(this, e[1]), e));
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
      (r) => r.map((n) => kr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Vr(
      this,
      "find",
      e,
      t,
      (r) => kr(this, r),
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
      (r) => kr(this, r),
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
    return Ic(this, "includes", e);
  },
  indexOf(...e) {
    return Ic(this, "indexOf", e);
  },
  join(e) {
    return co(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ic(this, "lastIndexOf", e);
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
    return zp(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zp(this, "reduceRight", e, t);
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
    return co(this).toReversed();
  },
  toSorted(e) {
    return co(this).toSorted(e);
  },
  toSpliced(...e) {
    return co(this).toSpliced(...e);
  },
  unshift(...e) {
    return ra(this, "unshift", e);
  },
  values() {
    return Cc(this, "values", (e) => kr(this, e));
  }
};
function Cc(e, t, r) {
  const n = Rl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Qn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const Mv = Array.prototype;
function Vr(e, t, r, n, i, o) {
  const a = Rl(e), s = a !== e && !/* @__PURE__ */ Qn(e), l = a[t];
  if (l !== Mv[t]) {
    const f = l.apply(e, o);
    return s ? pr(f) : f;
  }
  let p = r;
  a !== e && (s ? p = function(f, h) {
    return r.call(this, kr(e, f), h, e);
  } : r.length > 2 && (p = function(f, h) {
    return r.call(this, f, h, e);
  }));
  const d = l.call(a, p, n);
  return s && i ? i(d) : d;
}
function zp(e, t, r, n) {
  const i = Rl(e), o = i !== e && !/* @__PURE__ */ Qn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(p, d, f) {
    return s && (s = !1, p = kr(e, p)), r.call(this, p, kr(e, d), f, e);
  }) : r.length > 3 && (a = function(p, d, f) {
    return r.call(this, p, d, f, e);
  }));
  const l = i[t](a, ...n);
  return s ? kr(e, l) : l;
}
function Ic(e, t, r) {
  const n = /* @__PURE__ */ Nt(e);
  mn(n, "iterate", Oa);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ bd(r[0]) ? (r[0] = /* @__PURE__ */ Nt(r[0]), n[t](...r)) : i;
}
function ra(e, t, r = []) {
  Xr(), fd();
  const n = (/* @__PURE__ */ Nt(e))[t].apply(e, r);
  return pd(), Jr(), n;
}
const Pv = /* @__PURE__ */ sd("__proto__,__v_isRef,__isVue"), Km = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Or)
);
function Nv(e) {
  Or(e) || (e = String(e));
  const t = /* @__PURE__ */ Nt(this);
  return mn(t, "has", e), t.hasOwnProperty(e);
}
class Bm {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? Rv : Xm : o ? qm : Ym).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = ct(t);
    if (!i) {
      let l;
      if (a && (l = kv[r]))
        return l;
      if (r === "hasOwnProperty")
        return Nv;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ bn(t) ? t : n
    );
    if ((Or(r) ? Km.has(r) : Pv(r)) || (i || mn(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ bn(s)) {
      const l = a && cd(r) ? s : s.value;
      return i && Tt(l) ? /* @__PURE__ */ yu(l) : l;
    }
    return Tt(s) ? i ? /* @__PURE__ */ yu(s) : /* @__PURE__ */ $o(s) : s;
  }
}
class Um extends Bm {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = ct(t) && cd(r);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ Zr(o);
      if (!/* @__PURE__ */ Qn(n) && !/* @__PURE__ */ Zr(n) && (o = /* @__PURE__ */ Nt(o), n = /* @__PURE__ */ Nt(n)), !a && /* @__PURE__ */ bn(o) && !/* @__PURE__ */ bn(n))
        return p || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : At(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ bn(t) ? t : i
    );
    return t === /* @__PURE__ */ Nt(i) && (s ? Pr(n, o) && Wr(t, "set", r, n) : Wr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = At(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Wr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Or(r) || !Km.has(r)) && mn(t, "has", r), n;
  }
  ownKeys(t) {
    return mn(
      t,
      "iterate",
      ct(t) ? "length" : $i
    ), Reflect.ownKeys(t);
  }
}
class Av extends Bm {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Cv = /* @__PURE__ */ new Um(), Iv = /* @__PURE__ */ new Av(), Ev = /* @__PURE__ */ new Um(!0);
const gu = (e) => e, gs = (e) => Reflect.getPrototypeOf(e);
function Ov(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ Nt(i), a = xo(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, p = i[e](...n), d = r ? gu : t ? Fo : pr;
    return !t && mn(
      o,
      "iterate",
      l ? mu : $i
    ), _n(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: f, done: h } = p.next();
          return h ? { value: f, done: h } : {
            value: s ? [d(f[0]), d(f[1])] : d(f),
            done: h
          };
        }
      }
    );
  };
}
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fv(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Nt(o), s = /* @__PURE__ */ Nt(i);
      e || (Pr(i, s) && mn(a, "get", i), mn(a, "get", s));
      const { has: l } = gs(a), p = t ? gu : e ? Fo : pr;
      if (l.call(a, i))
        return p(o.get(i));
      if (l.call(a, s))
        return p(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && mn(/* @__PURE__ */ Nt(i), "iterate", $i), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ Nt(o), s = /* @__PURE__ */ Nt(i);
      return e || (Pr(i, s) && mn(a, "has", i), mn(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ Nt(s), p = t ? gu : e ? Fo : pr;
      return !e && mn(l, "iterate", $i), s.forEach((d, f) => i.call(o, p(d), p(f), a));
    }
  };
  return _n(
    r,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ Nt(this), a = gs(o), s = /* @__PURE__ */ Nt(i), l = !t && !/* @__PURE__ */ Qn(i) && !/* @__PURE__ */ Zr(i) ? s : i;
        return a.has.call(o, l) || Pr(i, l) && a.has.call(o, i) || Pr(s, l) && a.has.call(o, s) || (o.add(l), Wr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Qn(o) && !/* @__PURE__ */ Zr(o) && (o = /* @__PURE__ */ Nt(o));
        const a = /* @__PURE__ */ Nt(this), { has: s, get: l } = gs(a);
        let p = s.call(a, i);
        p || (i = /* @__PURE__ */ Nt(i), p = s.call(a, i));
        const d = l.call(a, i);
        return a.set(i, o), p ? Pr(o, d) && Wr(a, "set", i, o) : Wr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ Nt(this), { has: a, get: s } = gs(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ Nt(i), l = a.call(o, i)), s && s.call(o, i);
        const p = o.delete(i);
        return l && Wr(o, "delete", i, void 0), p;
      },
      clear() {
        const i = /* @__PURE__ */ Nt(this), o = i.size !== 0, a = i.clear();
        return o && Wr(
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
    r[i] = Ov(i, e, t);
  }), r;
}
function gd(e, t) {
  const r = Fv(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    At(r, i) && i in n ? r : n,
    i,
    o
  );
}
const Tv = {
  get: /* @__PURE__ */ gd(!1, !1)
}, Dv = {
  get: /* @__PURE__ */ gd(!1, !0)
}, Lv = {
  get: /* @__PURE__ */ gd(!0, !1)
};
const Ym = /* @__PURE__ */ new WeakMap(), qm = /* @__PURE__ */ new WeakMap(), Xm = /* @__PURE__ */ new WeakMap(), Rv = /* @__PURE__ */ new WeakMap();
function Vv(e) {
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
function $v(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vv(uv(e));
}
// @__NO_SIDE_EFFECTS__
function $o(e) {
  return /* @__PURE__ */ Zr(e) ? e : yd(
    e,
    !1,
    Cv,
    Tv,
    Ym
  );
}
// @__NO_SIDE_EFFECTS__
function zv(e) {
  return yd(
    e,
    !1,
    Ev,
    Dv,
    qm
  );
}
// @__NO_SIDE_EFFECTS__
function yu(e) {
  return yd(
    e,
    !0,
    Iv,
    Lv,
    Xm
  );
}
function yd(e, t, r, n, i) {
  if (!Tt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = $v(e);
  if (o === 0)
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function zi(e) {
  return /* @__PURE__ */ Zr(e) ? /* @__PURE__ */ zi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Nt(t) : e;
}
function jv(e) {
  return !At(e, "__v_skip") && Object.isExtensible(e) && Fm(e, "__v_skip", !0), e;
}
const pr = (e) => Tt(e) ? /* @__PURE__ */ $o(e) : e, Fo = (e) => Tt(e) ? /* @__PURE__ */ yu(e) : e;
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return Jm(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return Jm(e, !0);
}
function Jm(e, t) {
  return /* @__PURE__ */ bn(e) ? e : new Hv(e, t);
}
class Hv {
  constructor(t, r) {
    this.dep = new md(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ Nt(t), this._value = r ? t : pr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Qn(t) || /* @__PURE__ */ Zr(t);
    t = n ? t : /* @__PURE__ */ Nt(t), Pr(t, r) && (this._rawValue = t, this._value = n ? t : pr(t), this.dep.trigger());
  }
}
function st(e) {
  return /* @__PURE__ */ bn(e) ? e.value : e;
}
const Gv = {
  get: (e, t, r) => t === "__v_raw" ? e : st(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ bn(i) && !/* @__PURE__ */ bn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Zm(e) {
  return /* @__PURE__ */ zi(e) ? e : new Proxy(e, Gv);
}
class Wv {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new md(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ea - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Rt !== this)
      return $m(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Hm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Kv(e, t, r = !1) {
  let n, i;
  return pt(e) ? n = e : (n = e.get, i = e.set), new Wv(n, i, r);
}
const bs = {}, Zs = /* @__PURE__ */ new WeakMap();
let Fi;
function Bv(e, t = !1, r = Fi) {
  if (r) {
    let n = Zs.get(r);
    n || Zs.set(r, n = []), n.push(e);
  }
}
function Uv(e, t, r = Dt) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, p = (T) => i ? T : /* @__PURE__ */ Qn(T) || i === !1 || i === 0 ? Kr(T, 1) : Kr(T);
  let d, f, h, b, v = !1, S = !1;
  if (/* @__PURE__ */ bn(e) ? (f = () => e.value, v = /* @__PURE__ */ Qn(e)) : /* @__PURE__ */ zi(e) ? (f = () => p(e), v = !0) : ct(e) ? (S = !0, v = e.some((T) => /* @__PURE__ */ zi(T) || /* @__PURE__ */ Qn(T)), f = () => e.map((T) => {
    if (/* @__PURE__ */ bn(T))
      return T.value;
    if (/* @__PURE__ */ zi(T))
      return p(T);
    if (pt(T))
      return l ? l(T, 2) : T();
  })) : pt(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      Xr();
      try {
        h();
      } finally {
        Jr();
      }
    }
    const T = Fi;
    Fi = d;
    try {
      return l ? l(e, 3, [b]) : e(b);
    } finally {
      Fi = T;
    }
  } : f = Ar, t && i) {
    const T = f, y = i === !0 ? 1 / 0 : i;
    f = () => Kr(T(), y);
  }
  const w = Sv(), P = () => {
    d.stop(), w && w.active && ld(w.effects, d);
  };
  if (o && t) {
    const T = t;
    t = (...y) => {
      T(...y), P();
    };
  }
  let G = S ? new Array(e.length).fill(bs) : bs;
  const F = (T) => {
    if (!(!(d.flags & 1) || !d.dirty && !T))
      if (t) {
        const y = d.run();
        if (i || v || (S ? y.some(($, z) => Pr($, G[z])) : Pr(y, G))) {
          h && h();
          const $ = Fi;
          Fi = d;
          try {
            const z = [
              y,
              // pass undefined as the old value when it's changed for the first time
              G === bs ? void 0 : S && G[0] === bs ? [] : G,
              b
            ];
            G = y, l ? l(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            Fi = $;
          }
        }
      } else
        d.run();
  };
  return s && s(F), d = new Rm(f), d.scheduler = a ? () => a(F, !1) : F, b = (T) => Bv(T, !1, d), h = d.onStop = () => {
    const T = Zs.get(d);
    if (T) {
      if (l)
        l(T, 4);
      else
        for (const y of T) y();
      Zs.delete(d);
    }
  }, t ? n ? F(!0) : G = d.run() : a ? a(F.bind(null, !0), !0) : d.run(), P.pause = d.pause.bind(d), P.resume = d.resume.bind(d), P.stop = P, P;
}
function Kr(e, t = 1 / 0, r) {
  if (t <= 0 || !Tt(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ bn(e))
    Kr(e.value, t, r);
  else if (ct(e))
    for (let n = 0; n < e.length; n++)
      Kr(e[n], t, r);
  else if (Cm(e) || xo(e))
    e.forEach((n) => {
      Kr(n, t, r);
    });
  else if (Om(e)) {
    for (const n in e)
      Kr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Kr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ya(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Vl(i, t, r);
  }
}
function Fr(e, t, r, n) {
  if (pt(e)) {
    const i = Ya(e, t, r, n);
    return i && Im(i) && i.catch((o) => {
      Vl(o, t, r);
    }), i;
  }
  if (ct(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Fr(e[o], t, r, n));
    return i;
  }
}
function Vl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || Dt;
  if (t) {
    let s = t.parent;
    const l = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, l, p) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Xr(), Ya(o, null, 10, [
        e,
        l,
        p
      ]), Jr();
      return;
    }
  }
  Yv(e, r, i, n, a);
}
function Yv(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const wn = [];
let xr = -1;
const ko = [];
let si = null, po = 0;
const Qm = /* @__PURE__ */ Promise.resolve();
let Qs = null;
function $l(e) {
  const t = Qs || Qm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qv(e) {
  let t = xr + 1, r = wn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = wn[n], o = Fa(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function vd(e) {
  if (!(e.flags & 1)) {
    const t = Fa(e), r = wn[wn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Fa(r) ? wn.push(e) : wn.splice(qv(t), 0, e), e.flags |= 1, eg();
  }
}
function eg() {
  Qs || (Qs = Qm.then(ng));
}
function Xv(e) {
  ct(e) ? ko.push(...e) : si && e.id === -1 ? si.splice(po + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), eg();
}
function jp(e, t, r = xr + 1) {
  for (; r < wn.length; r++) {
    const n = wn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      wn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function tg(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (r, n) => Fa(r) - Fa(n)
    );
    if (ko.length = 0, si) {
      si.push(...t);
      return;
    }
    for (si = t, po = 0; po < si.length; po++) {
      const r = si[po];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    si = null, po = 0;
  }
}
const Fa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ng(e) {
  try {
    for (xr = 0; xr < wn.length; xr++) {
      const t = wn[xr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ya(
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
    xr = -1, wn.length = 0, tg(), Qs = null, (wn.length || ko.length) && ng();
  }
}
let jn = null, rg = null;
function el(e) {
  const t = jn;
  return jn = e, rg = e && e.type.__scopeId || null, t;
}
function ig(e, t = jn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Qp(-1);
    const o = el(t);
    let a;
    try {
      a = e(...i);
    } finally {
      el(o), n._d && Qp(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Yr(e, t) {
  if (jn === null)
    return e;
  const r = Wl(jn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = Dt] = t[i];
    o && (pt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Kr(a), n.push({
      dir: o,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function Pi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Xr(), Fr(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), Jr());
  }
}
function Jv(e, t) {
  if (gn) {
    let r = gn.provides;
    const n = gn.parent && gn.parent.provides;
    n === r && (r = gn.provides = Object.create(n)), r[e] = t;
  }
}
function Ds(e, t, r = !1) {
  const n = q_();
  if (n || Mo) {
    let i = Mo ? Mo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && pt(t) ? t.call(n && n.proxy) : t;
  }
}
const Zv = /* @__PURE__ */ Symbol.for("v-scx"), Qv = () => Ds(Zv);
function ji(e, t, r) {
  return og(e, t, r);
}
function og(e, t, r = Dt) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = _n({}, r), l = t && n || !t && o !== "post";
  let p;
  if (Da) {
    if (o === "sync") {
      const b = Qv();
      p = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!l) {
      const b = () => {
      };
      return b.stop = Ar, b.resume = Ar, b.pause = Ar, b;
    }
  }
  const d = gn;
  s.call = (b, v, S) => Fr(b, d, v, S);
  let f = !1;
  o === "post" ? s.scheduler = (b) => {
    Nn(b, d && d.suspense);
  } : o !== "sync" && (f = !0, s.scheduler = (b, v) => {
    v ? b() : vd(b);
  }), s.augmentJob = (b) => {
    t && (b.flags |= 4), f && (b.flags |= 2, d && (b.id = d.uid, b.i = d));
  };
  const h = Uv(e, t, s);
  return Da && (p ? p.push(h) : l && h()), h;
}
function e_(e, t, r) {
  const n = this.proxy, i = en(e) ? e.includes(".") ? ag(n, e) : () => n[e] : e.bind(n, n);
  let o;
  pt(t) ? o = t : (o = t.handler, r = t);
  const a = Xa(this), s = og(i, o.bind(n), r);
  return a(), s;
}
function ag(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const t_ = /* @__PURE__ */ Symbol("_vte"), n_ = (e) => e.__isTeleport, r_ = /* @__PURE__ */ Symbol("_leaveCb");
function _d(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _d(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sg(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Hp(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const tl = /* @__PURE__ */ new WeakMap();
function xa(e, t, r, n, i = !1) {
  if (ct(e)) {
    e.forEach(
      (S, w) => xa(
        S,
        t && (ct(t) ? t[w] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (ka(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && xa(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Wl(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, p = t && t.r, d = s.refs === Dt ? s.refs = {} : s.refs, f = s.setupState, h = /* @__PURE__ */ Nt(f), b = f === Dt ? Am : (S) => Hp(d, S) ? !1 : At(h, S), v = (S, w) => !(w && Hp(d, w));
  if (p != null && p !== l) {
    if (Gp(t), en(p))
      d[p] = null, b(p) && (f[p] = null);
    else if (/* @__PURE__ */ bn(p)) {
      const S = t;
      v(p, S.k) && (p.value = null), S.k && (d[S.k] = null);
    }
  }
  if (pt(l))
    Ya(l, s, 12, [a, d]);
  else {
    const S = en(l), w = /* @__PURE__ */ bn(l);
    if (S || w) {
      const P = () => {
        if (e.f) {
          const G = S ? b(l) ? f[l] : d[l] : v() || !e.k ? l.value : d[e.k];
          if (i)
            ct(G) && ld(G, o);
          else if (ct(G))
            G.includes(o) || G.push(o);
          else if (S)
            d[l] = [o], b(l) && (f[l] = d[l]);
          else {
            const F = [o];
            v(l, e.k) && (l.value = F), e.k && (d[e.k] = F);
          }
        } else S ? (d[l] = a, b(l) && (f[l] = a)) : w && (v(l, e.k) && (l.value = a), e.k && (d[e.k] = a));
      };
      if (a) {
        const G = () => {
          P(), tl.delete(e);
        };
        G.id = -1, tl.set(e, G), Nn(G, r);
      } else
        Gp(e), P();
    }
  }
}
function Gp(e) {
  const t = tl.get(e);
  t && (t.flags |= 8, tl.delete(e));
}
Ll().requestIdleCallback;
Ll().cancelIdleCallback;
const ka = (e) => !!e.type.__asyncLoader, lg = (e) => e.type.__isKeepAlive;
function i_(e, t) {
  cg(e, "a", t);
}
function o_(e, t) {
  cg(e, "da", t);
}
function cg(e, t, r = gn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (zl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      lg(i.parent.vnode) && a_(n, t, r, i), i = i.parent;
  }
}
function a_(e, t, r, n) {
  const i = zl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ug(() => {
    ld(n[t], i);
  }, r);
}
function zl(e, t, r = gn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Xr();
      const s = Xa(r), l = Fr(t, r, e, a);
      return s(), Jr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Qr = (e) => (t, r = gn) => {
  (!Da || e === "sp") && zl(e, (...n) => t(...n), r);
}, s_ = Qr("bm"), jl = Qr("m"), l_ = Qr(
  "bu"
), c_ = Qr("u"), qa = Qr(
  "bum"
), ug = Qr("um"), u_ = Qr(
  "sp"
), d_ = Qr("rtg"), f_ = Qr("rtc");
function p_(e, t = gn) {
  zl("ec", e, t);
}
const h_ = "components", dg = /* @__PURE__ */ Symbol.for("v-ndc");
function m_(e) {
  return en(e) ? g_(h_, e, !1) || e : e || dg;
}
function g_(e, t, r = !0, n = !1) {
  const i = jn || gn;
  if (i) {
    const o = i.type;
    {
      const s = eS(
        o,
        !1
      );
      if (s && (s === t || s === xn(t) || s === Dl(xn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wp(i[e] || o[e], t) || // global registration
      Wp(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function Wp(e, t) {
  return e && (e[t] || e[xn(t)] || e[Dl(xn(t))]);
}
function Et(e, t, r, n) {
  let i;
  const o = r, a = ct(e);
  if (a || en(e)) {
    const s = a && /* @__PURE__ */ zi(e);
    let l = !1, p = !1;
    s && (l = !/* @__PURE__ */ Qn(e), p = /* @__PURE__ */ Zr(e), e = Rl(e)), i = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      i[d] = t(
        l ? p ? Fo(pr(e[d])) : pr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Tt(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let l = 0, p = s.length; l < p; l++) {
        const d = s[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const bu = (e) => e ? Og(e) ? Wl(e) : bu(e.parent) : null, Ma = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _n(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bu(e.parent),
    $root: (e) => bu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pg(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      vd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = $l.bind(e.proxy)),
    $watch: (e) => e_.bind(e)
  })
), Ec = (e, t) => e !== Dt && !e.__isScriptSetup && At(e, t), y_ = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const h = a[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (Ec(n, t))
          return a[t] = 1, n[t];
        if (i !== Dt && At(i, t))
          return a[t] = 2, i[t];
        if (At(o, t))
          return a[t] = 3, o[t];
        if (r !== Dt && At(r, t))
          return a[t] = 4, r[t];
        vu && (a[t] = 0);
      }
    }
    const p = Ma[t];
    let d, f;
    if (p)
      return t === "$attrs" && mn(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Dt && At(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      f = l.config.globalProperties, At(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Ec(i, t) ? (i[t] = r, !0) : n !== Dt && At(n, t) ? (n[t] = r, !0) : At(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== Dt && s[0] !== "$" && At(e, s) || Ec(t, s) || At(o, s) || At(n, s) || At(Ma, s) || At(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : At(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Kp(e) {
  return ct(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let vu = !0;
function b_(e) {
  const t = pg(e), r = e.proxy, n = e.ctx;
  vu = !1, t.beforeCreate && Bp(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: a,
    watch: s,
    provide: l,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: h,
    beforeUpdate: b,
    updated: v,
    activated: S,
    deactivated: w,
    beforeDestroy: P,
    beforeUnmount: G,
    destroyed: F,
    unmounted: T,
    render: y,
    renderTracked: $,
    renderTriggered: z,
    errorCaptured: ee,
    serverPrefetch: ie,
    // public API
    expose: j,
    inheritAttrs: H,
    // assets
    components: U,
    directives: ae,
    filters: Pe
  } = t;
  if (p && v_(p, n, null), a)
    for (const X in a) {
      const A = a[X];
      pt(A) && (n[X] = A.bind(r));
    }
  if (i) {
    const X = i.call(r, r);
    Tt(X) && (e.data = /* @__PURE__ */ $o(X));
  }
  if (vu = !0, o)
    for (const X in o) {
      const A = o[X], L = pt(A) ? A.bind(r, r) : pt(A.get) ? A.get.bind(r, r) : Ar, me = !pt(A) && pt(A.set) ? A.set.bind(r) : Ar, ge = mt({
        get: L,
        set: me
      });
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => ge.value,
        set: (Ne) => ge.value = Ne
      });
    }
  if (s)
    for (const X in s)
      fg(s[X], n, r, X);
  if (l) {
    const X = pt(l) ? l.call(r) : l;
    Reflect.ownKeys(X).forEach((A) => {
      Jv(A, X[A]);
    });
  }
  d && Bp(d, e, "c");
  function he(X, A) {
    ct(A) ? A.forEach((L) => X(L.bind(r))) : A && X(A.bind(r));
  }
  if (he(s_, f), he(jl, h), he(l_, b), he(c_, v), he(i_, S), he(o_, w), he(p_, ee), he(f_, $), he(d_, z), he(qa, G), he(ug, T), he(u_, ie), ct(j))
    if (j.length) {
      const X = e.exposed || (e.exposed = {});
      j.forEach((A) => {
        Object.defineProperty(X, A, {
          get: () => r[A],
          set: (L) => r[A] = L,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === Ar && (e.render = y), H != null && (e.inheritAttrs = H), U && (e.components = U), ae && (e.directives = ae), ie && sg(e);
}
function v_(e, t, r = Ar) {
  ct(e) && (e = _u(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Tt(i) ? "default" in i ? o = Ds(
      i.from || n,
      i.default,
      !0
    ) : o = Ds(i.from || n) : o = Ds(i), /* @__PURE__ */ bn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function Bp(e, t, r) {
  Fr(
    ct(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function fg(e, t, r, n) {
  let i = n.includes(".") ? ag(r, n) : () => r[n];
  if (en(e)) {
    const o = t[e];
    pt(o) && ji(i, o);
  } else if (pt(e))
    ji(i, e.bind(r));
  else if (Tt(e))
    if (ct(e))
      e.forEach((o) => fg(o, t, r, n));
    else {
      const o = pt(e.handler) ? e.handler.bind(r) : t[e.handler];
      pt(o) && ji(i, o, e);
    }
}
function pg(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (p) => nl(l, p, a, !0)
  ), nl(l, t, a)), Tt(t) && o.set(t, l), l;
}
function nl(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && nl(e, o, r, !0), i && i.forEach(
    (a) => nl(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = __[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const __ = {
  data: Up,
  props: Yp,
  emits: Yp,
  // objects
  methods: da,
  computed: da,
  // lifecycle
  beforeCreate: Sn,
  created: Sn,
  beforeMount: Sn,
  mounted: Sn,
  beforeUpdate: Sn,
  updated: Sn,
  beforeDestroy: Sn,
  beforeUnmount: Sn,
  destroyed: Sn,
  unmounted: Sn,
  activated: Sn,
  deactivated: Sn,
  errorCaptured: Sn,
  serverPrefetch: Sn,
  // assets
  components: da,
  directives: da,
  // watch
  watch: w_,
  // provide / inject
  provide: Up,
  inject: S_
};
function Up(e, t) {
  return t ? e ? function() {
    return _n(
      pt(e) ? e.call(this, this) : e,
      pt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function S_(e, t) {
  return da(_u(e), _u(t));
}
function _u(e) {
  if (ct(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Sn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function da(e, t) {
  return e ? _n(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yp(e, t) {
  return e ? ct(e) && ct(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _n(
    /* @__PURE__ */ Object.create(null),
    Kp(e),
    Kp(t ?? {})
  ) : t;
}
function w_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = _n(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Sn(e[n], t[n]);
  return r;
}
function hg() {
  return {
    app: null,
    config: {
      isNativeTag: Am,
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
let x_ = 0;
function k_(e, t) {
  return function(n, i = null) {
    pt(n) || (n = _n({}, n)), i != null && !Tt(i) && (i = null);
    const o = hg(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const p = o.app = {
      _uid: x_++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: nS,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...f) {
        return a.has(d) || (d && pt(d.install) ? (a.add(d), d.install(p, ...f)) : pt(d) && (a.add(d), d(p, ...f))), p;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), p;
      },
      component(d, f) {
        return f ? (o.components[d] = f, p) : o.components[d];
      },
      directive(d, f) {
        return f ? (o.directives[d] = f, p) : o.directives[d];
      },
      mount(d, f, h) {
        if (!l) {
          const b = p._ceVNode || nt(n, i);
          return b.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(b, d, h), l = !0, p._container = d, d.__vue_app__ = p, Wl(b.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        l && (Fr(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(d, f) {
        return o.provides[d] = f, p;
      },
      runWithContext(d) {
        const f = Mo;
        Mo = p;
        try {
          return d();
        } finally {
          Mo = f;
        }
      }
    };
    return p;
  };
}
let Mo = null;
const M_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${Ui(t)}Modifiers`];
function P_(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Dt;
  let i = r;
  const o = t.startsWith("update:"), a = o && M_(n, t.slice(7));
  a && (a.trim && (i = r.map((d) => en(d) ? d.trim() : d)), a.number && (i = r.map(ud)));
  let s, l = n[s = Pc(t)] || // also try camelCase event handler (#2249)
  n[s = Pc(xn(t))];
  !l && o && (l = n[s = Pc(Ui(t))]), l && Fr(
    l,
    e,
    6,
    i
  );
  const p = n[s + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Fr(
      p,
      e,
      6,
      i
    );
  }
}
const N_ = /* @__PURE__ */ new WeakMap();
function mg(e, t, r = !1) {
  const n = r ? N_ : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!pt(e)) {
    const l = (p) => {
      const d = mg(p, t, !0);
      d && (s = !0, _n(a, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Tt(e) && n.set(e, null), null) : (ct(o) ? o.forEach((l) => a[l] = null) : _n(a, o), Tt(e) && n.set(e, a), a);
}
function Hl(e, t) {
  return !e || !Ol(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), At(e, t[0].toLowerCase() + t.slice(1)) || At(e, Ui(t)) || At(e, t));
}
function qp(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: p,
    renderCache: d,
    props: f,
    data: h,
    setupState: b,
    ctx: v,
    inheritAttrs: S
  } = e, w = el(e);
  let P, G;
  try {
    if (r.shapeFlag & 4) {
      const T = i || n, y = T;
      P = Mr(
        p.call(
          y,
          T,
          d,
          f,
          b,
          h,
          v
        )
      ), G = s;
    } else {
      const T = t;
      P = Mr(
        T.length > 1 ? T(
          f,
          { attrs: s, slots: a, emit: l }
        ) : T(
          f,
          null
        )
      ), G = t.props ? s : A_(s);
    }
  } catch (T) {
    Pa.length = 0, Vl(T, e, 1), P = nt(ui);
  }
  let F = P;
  if (G && S !== !1) {
    const T = Object.keys(G), { shapeFlag: y } = F;
    T.length && y & 7 && (o && T.some(Fl) && (G = C_(
      G,
      o
    )), F = To(F, G, !1, !0));
  }
  return r.dirs && (F = To(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(r.dirs) : r.dirs), r.transition && _d(F, r.transition), P = F, el(w), P;
}
const A_ = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Ol(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, C_ = (e, t) => {
  const r = {};
  for (const n in e)
    (!Fl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function I_(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, p = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Xp(n, a, p) : !!a;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const h = d[f];
        if (gg(a, n, h) && !Hl(p, h))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? Xp(n, a, p) : !0 : !!a;
  return !1;
}
function Xp(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (gg(t, e, o) && !Hl(r, o))
      return !0;
  }
  return !1;
}
function gg(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Tt(n) && Tt(i) ? !dd(n, i) : n !== i;
}
function E_({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const yg = {}, bg = () => Object.create(yg), vg = (e) => Object.getPrototypeOf(e) === yg;
function O_(e, t, r, n = !1) {
  const i = {}, o = bg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _g(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ zv(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function F_(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ Nt(i), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let h = d[f];
        if (Hl(e.emitsOptions, h))
          continue;
        const b = t[h];
        if (l)
          if (At(o, h))
            b !== o[h] && (o[h] = b, p = !0);
          else {
            const v = xn(h);
            i[v] = Su(
              l,
              s,
              v,
              b,
              e,
              !1
            );
          }
        else
          b !== o[h] && (o[h] = b, p = !0);
      }
    }
  } else {
    _g(e, t, i, o) && (p = !0);
    let d;
    for (const f in s)
      (!t || // for camelCase
      !At(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ui(f)) === f || !At(t, d))) && (l ? r && // for camelCase
      (r[f] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[f] = Su(
        l,
        s,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (o !== s)
      for (const f in o)
        (!t || !At(t, f)) && (delete o[f], p = !0);
  }
  p && Wr(e.attrs, "set", "");
}
function _g(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (_a(l))
        continue;
      const p = t[l];
      let d;
      i && At(i, d = xn(l)) ? !o || !o.includes(d) ? r[d] = p : (s || (s = {}))[d] = p : Hl(e.emitsOptions, l) || (!(l in n) || p !== n[l]) && (n[l] = p, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ Nt(r), p = s || Dt;
    for (let d = 0; d < o.length; d++) {
      const f = o[d];
      r[f] = Su(
        i,
        l,
        f,
        p[f],
        e,
        !At(p, f)
      );
    }
  }
  return a;
}
function Su(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = At(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && pt(l)) {
        const { propsDefaults: p } = i;
        if (r in p)
          n = p[r];
        else {
          const d = Xa(i);
          n = p[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    a[
      0
      /* shouldCast */
    ] && (o && !s ? n = !1 : a[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Ui(r)) && (n = !0));
  }
  return n;
}
const T_ = /* @__PURE__ */ new WeakMap();
function Sg(e, t, r = !1) {
  const n = r ? T_ : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!pt(e)) {
    const d = (f) => {
      l = !0;
      const [h, b] = Sg(f, t, !0);
      _n(a, h), b && s.push(...b);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Tt(e) && n.set(e, wo), wo;
  if (ct(o))
    for (let d = 0; d < o.length; d++) {
      const f = xn(o[d]);
      Jp(f) && (a[f] = Dt);
    }
  else if (o)
    for (const d in o) {
      const f = xn(d);
      if (Jp(f)) {
        const h = o[d], b = a[f] = ct(h) || pt(h) ? { type: h } : _n({}, h), v = b.type;
        let S = !1, w = !0;
        if (ct(v))
          for (let P = 0; P < v.length; ++P) {
            const G = v[P], F = pt(G) && G.name;
            if (F === "Boolean") {
              S = !0;
              break;
            } else F === "String" && (w = !1);
          }
        else
          S = pt(v) && v.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = S, b[
          1
          /* shouldCastTrue */
        ] = w, (S || At(b, "default")) && s.push(f);
      }
    }
  const p = [a, s];
  return Tt(e) && n.set(e, p), p;
}
function Jp(e) {
  return e[0] !== "$" && !_a(e);
}
const Sd = (e) => e === "_" || e === "_ctx" || e === "$stable", wd = (e) => ct(e) ? e.map(Mr) : [Mr(e)], D_ = (e, t, r) => {
  if (t._n)
    return t;
  const n = ig((...i) => wd(t(...i)), r);
  return n._c = !1, n;
}, wg = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Sd(i)) continue;
    const o = e[i];
    if (pt(o))
      t[i] = D_(i, o, n);
    else if (o != null) {
      const a = wd(o);
      t[i] = () => a;
    }
  }
}, xg = (e, t) => {
  const r = wd(t);
  e.slots.default = () => r;
}, kg = (e, t, r) => {
  for (const n in t)
    (r || !Sd(n)) && (e[n] = t[n]);
}, L_ = (e, t, r) => {
  const n = e.slots = bg();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (kg(n, t, r), r && Fm(n, "_", i, !0)) : wg(t, n);
  } else t && xg(e, t);
}, R_ = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = Dt;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : kg(i, t, r) : (o = !t.$stable, wg(t, i)), a = t;
  } else t && (xg(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !Sd(s) && a[s] == null && delete i[s];
}, Nn = H_;
function V_(e) {
  return $_(e);
}
function $_(e, t) {
  const r = Ll();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: p,
    setElementText: d,
    parentNode: f,
    nextSibling: h,
    setScopeId: b = Ar,
    insertStaticContent: v
  } = e, S = (x, M, K, be = null, I = null, Z = null, ne = void 0, C = null, B = !!M.dynamicChildren) => {
    if (x === M)
      return;
    x && !ia(x, M) && (be = pe(x), Ne(x, I, Z, !0), x = null), M.patchFlag === -2 && (B = !1, M.dynamicChildren = null);
    const { type: W, ref: Q, shapeFlag: ue } = M;
    switch (W) {
      case Gl:
        w(x, M, K, be);
        break;
      case ui:
        P(x, M, K, be);
        break;
      case Fc:
        x == null && G(M, K, be, ne);
        break;
      case at:
        U(
          x,
          M,
          K,
          be,
          I,
          Z,
          ne,
          C,
          B
        );
        break;
      default:
        ue & 1 ? y(
          x,
          M,
          K,
          be,
          I,
          Z,
          ne,
          C,
          B
        ) : ue & 6 ? ae(
          x,
          M,
          K,
          be,
          I,
          Z,
          ne,
          C,
          B
        ) : (ue & 64 || ue & 128) && W.process(
          x,
          M,
          K,
          be,
          I,
          Z,
          ne,
          C,
          B,
          te
        );
    }
    Q != null && I ? xa(Q, x && x.ref, Z, M || x, !M) : Q == null && x && x.ref != null && xa(x.ref, null, Z, x, !0);
  }, w = (x, M, K, be) => {
    if (x == null)
      n(
        M.el = s(M.children),
        K,
        be
      );
    else {
      const I = M.el = x.el;
      M.children !== x.children && p(I, M.children);
    }
  }, P = (x, M, K, be) => {
    x == null ? n(
      M.el = l(M.children || ""),
      K,
      be
    ) : M.el = x.el;
  }, G = (x, M, K, be) => {
    [x.el, x.anchor] = v(
      x.children,
      M,
      K,
      be,
      x.el,
      x.anchor
    );
  }, F = ({ el: x, anchor: M }, K, be) => {
    let I;
    for (; x && x !== M; )
      I = h(x), n(x, K, be), x = I;
    n(M, K, be);
  }, T = ({ el: x, anchor: M }) => {
    let K;
    for (; x && x !== M; )
      K = h(x), i(x), x = K;
    i(M);
  }, y = (x, M, K, be, I, Z, ne, C, B) => {
    if (M.type === "svg" ? ne = "svg" : M.type === "math" && (ne = "mathml"), x == null)
      $(
        M,
        K,
        be,
        I,
        Z,
        ne,
        C,
        B
      );
    else {
      const W = x.el && x.el._isVueCE ? x.el : null;
      try {
        W && W._beginPatch(), ie(
          x,
          M,
          I,
          Z,
          ne,
          C,
          B
        );
      } finally {
        W && W._endPatch();
      }
    }
  }, $ = (x, M, K, be, I, Z, ne, C) => {
    let B, W;
    const { props: Q, shapeFlag: ue, transition: de, dirs: J } = x;
    if (B = x.el = a(
      x.type,
      Z,
      Q && Q.is,
      Q
    ), ue & 8 ? d(B, x.children) : ue & 16 && ee(
      x.children,
      B,
      null,
      be,
      I,
      Oc(x, Z),
      ne,
      C
    ), J && Pi(x, null, be, "created"), z(B, x, x.scopeId, ne, be), Q) {
      for (const Ee in Q)
        Ee !== "value" && !_a(Ee) && o(B, Ee, null, Q[Ee], Z, be);
      "value" in Q && o(B, "value", null, Q.value, Z), (W = Q.onVnodeBeforeMount) && _r(W, be, x);
    }
    J && Pi(x, null, be, "beforeMount");
    const fe = z_(I, de);
    fe && de.beforeEnter(B), n(B, M, K), ((W = Q && Q.onVnodeMounted) || fe || J) && Nn(() => {
      try {
        W && _r(W, be, x), fe && de.enter(B), J && Pi(x, null, be, "mounted");
      } finally {
      }
    }, I);
  }, z = (x, M, K, be, I) => {
    if (K && b(x, K), be)
      for (let Z = 0; Z < be.length; Z++)
        b(x, be[Z]);
    if (I) {
      let Z = I.subTree;
      if (M === Z || Ag(Z.type) && (Z.ssContent === M || Z.ssFallback === M)) {
        const ne = I.vnode;
        z(
          x,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          I.parent
        );
      }
    }
  }, ee = (x, M, K, be, I, Z, ne, C, B = 0) => {
    for (let W = B; W < x.length; W++) {
      const Q = x[W] = C ? Hr(x[W]) : Mr(x[W]);
      S(
        null,
        Q,
        M,
        K,
        be,
        I,
        Z,
        ne,
        C
      );
    }
  }, ie = (x, M, K, be, I, Z, ne) => {
    const C = M.el = x.el;
    let { patchFlag: B, dynamicChildren: W, dirs: Q } = M;
    B |= x.patchFlag & 16;
    const ue = x.props || Dt, de = M.props || Dt;
    let J;
    if (K && Ni(K, !1), (J = de.onVnodeBeforeUpdate) && _r(J, K, M, x), Q && Pi(M, x, K, "beforeUpdate"), K && Ni(K, !0), (ue.innerHTML && de.innerHTML == null || ue.textContent && de.textContent == null) && d(C, ""), W ? j(
      x.dynamicChildren,
      W,
      C,
      K,
      be,
      Oc(M, I),
      Z
    ) : ne || A(
      x,
      M,
      C,
      null,
      K,
      be,
      Oc(M, I),
      Z,
      !1
    ), B > 0) {
      if (B & 16)
        H(C, ue, de, K, I);
      else if (B & 2 && ue.class !== de.class && o(C, "class", null, de.class, I), B & 4 && o(C, "style", ue.style, de.style, I), B & 8) {
        const fe = M.dynamicProps;
        for (let Ee = 0; Ee < fe.length; Ee++) {
          const je = fe[Ee], ce = ue[je], xe = de[je];
          (xe !== ce || je === "value") && o(C, je, ce, xe, I, K);
        }
      }
      B & 1 && x.children !== M.children && d(C, M.children);
    } else !ne && W == null && H(C, ue, de, K, I);
    ((J = de.onVnodeUpdated) || Q) && Nn(() => {
      J && _r(J, K, M, x), Q && Pi(M, x, K, "updated");
    }, be);
  }, j = (x, M, K, be, I, Z, ne) => {
    for (let C = 0; C < M.length; C++) {
      const B = x[C], W = M[C], Q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        B.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (B.type === at || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ia(B, W) || // - In the case of a component, it could contain anything.
        B.shapeFlag & 198) ? f(B.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          K
        )
      );
      S(
        B,
        W,
        Q,
        null,
        be,
        I,
        Z,
        ne,
        !0
      );
    }
  }, H = (x, M, K, be, I) => {
    if (M !== K) {
      if (M !== Dt)
        for (const Z in M)
          !_a(Z) && !(Z in K) && o(
            x,
            Z,
            M[Z],
            null,
            I,
            be
          );
      for (const Z in K) {
        if (_a(Z)) continue;
        const ne = K[Z], C = M[Z];
        ne !== C && Z !== "value" && o(x, Z, C, ne, I, be);
      }
      "value" in K && o(x, "value", M.value, K.value, I);
    }
  }, U = (x, M, K, be, I, Z, ne, C, B) => {
    const W = M.el = x ? x.el : s(""), Q = M.anchor = x ? x.anchor : s("");
    let { patchFlag: ue, dynamicChildren: de, slotScopeIds: J } = M;
    J && (C = C ? C.concat(J) : J), x == null ? (n(W, K, be), n(Q, K, be), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      M.children || [],
      K,
      Q,
      I,
      Z,
      ne,
      C,
      B
    )) : ue > 0 && ue & 64 && de && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    x.dynamicChildren && x.dynamicChildren.length === de.length ? (j(
      x.dynamicChildren,
      de,
      K,
      I,
      Z,
      ne,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (M.key != null || I && M === I.subTree) && Mg(
      x,
      M,
      !0
      /* shallow */
    )) : A(
      x,
      M,
      K,
      Q,
      I,
      Z,
      ne,
      C,
      B
    );
  }, ae = (x, M, K, be, I, Z, ne, C, B) => {
    M.slotScopeIds = C, x == null ? M.shapeFlag & 512 ? I.ctx.activate(
      M,
      K,
      be,
      ne,
      B
    ) : Pe(
      M,
      K,
      be,
      I,
      Z,
      ne,
      B
    ) : we(x, M, B);
  }, Pe = (x, M, K, be, I, Z, ne) => {
    const C = x.component = Y_(
      x,
      be,
      I
    );
    if (lg(x) && (C.ctx.renderer = te), X_(C, !1, ne), C.asyncDep) {
      if (I && I.registerDep(C, he, ne), !x.el) {
        const B = C.subTree = nt(ui);
        P(null, B, M, K), x.placeholder = B.el;
      }
    } else
      he(
        C,
        x,
        M,
        K,
        I,
        Z,
        ne
      );
  }, we = (x, M, K) => {
    const be = M.component = x.component;
    if (I_(x, M, K))
      if (be.asyncDep && !be.asyncResolved) {
        X(be, M, K);
        return;
      } else
        be.next = M, be.update();
    else
      M.el = x.el, be.vnode = M;
  }, he = (x, M, K, be, I, Z, ne) => {
    const C = () => {
      if (x.isMounted) {
        let { next: ue, bu: de, u: J, parent: fe, vnode: Ee } = x;
        {
          const g = Pg(x);
          if (g) {
            ue && (ue.el = Ee.el, X(x, ue, ne)), g.asyncDep.then(() => {
              Nn(() => {
                x.isUnmounted || W();
              }, I);
            });
            return;
          }
        }
        let je = ue, ce;
        Ni(x, !1), ue ? (ue.el = Ee.el, X(x, ue, ne)) : ue = Ee, de && Ts(de), (ce = ue.props && ue.props.onVnodeBeforeUpdate) && _r(ce, fe, ue, Ee), Ni(x, !0);
        const xe = qp(x), Ie = x.subTree;
        x.subTree = xe, S(
          Ie,
          xe,
          // parent may have changed if it's in a teleport
          f(Ie.el),
          // anchor may have changed if it's in a fragment
          pe(Ie),
          x,
          I,
          Z
        ), ue.el = xe.el, je === null && E_(x, xe.el), J && Nn(J, I), (ce = ue.props && ue.props.onVnodeUpdated) && Nn(
          () => _r(ce, fe, ue, Ee),
          I
        );
      } else {
        let ue;
        const { el: de, props: J } = M, { bm: fe, m: Ee, parent: je, root: ce, type: xe } = x, Ie = ka(M);
        Ni(x, !1), fe && Ts(fe), !Ie && (ue = J && J.onVnodeBeforeMount) && _r(ue, je, M), Ni(x, !0);
        {
          ce.ce && ce.ce._hasShadowRoot() && ce.ce._injectChildStyle(
            xe,
            x.parent ? x.parent.type : void 0
          );
          const g = x.subTree = qp(x);
          S(
            null,
            g,
            K,
            be,
            x,
            I,
            Z
          ), M.el = g.el;
        }
        if (Ee && Nn(Ee, I), !Ie && (ue = J && J.onVnodeMounted)) {
          const g = M;
          Nn(
            () => _r(ue, je, g),
            I
          );
        }
        (M.shapeFlag & 256 || je && ka(je.vnode) && je.vnode.shapeFlag & 256) && x.a && Nn(x.a, I), x.isMounted = !0, M = K = be = null;
      }
    };
    x.scope.on();
    const B = x.effect = new Rm(C);
    x.scope.off();
    const W = x.update = B.run.bind(B), Q = x.job = B.runIfDirty.bind(B);
    Q.i = x, Q.id = x.uid, B.scheduler = () => vd(Q), Ni(x, !0), W();
  }, X = (x, M, K) => {
    M.component = x;
    const be = x.vnode.props;
    x.vnode = M, x.next = null, F_(x, M.props, be, K), R_(x, M.children, K), Xr(), jp(x), Jr();
  }, A = (x, M, K, be, I, Z, ne, C, B = !1) => {
    const W = x && x.children, Q = x ? x.shapeFlag : 0, ue = M.children, { patchFlag: de, shapeFlag: J } = M;
    if (de > 0) {
      if (de & 128) {
        me(
          W,
          ue,
          K,
          be,
          I,
          Z,
          ne,
          C,
          B
        );
        return;
      } else if (de & 256) {
        L(
          W,
          ue,
          K,
          be,
          I,
          Z,
          ne,
          C,
          B
        );
        return;
      }
    }
    J & 8 ? (Q & 16 && oe(W, I, Z), ue !== W && d(K, ue)) : Q & 16 ? J & 16 ? me(
      W,
      ue,
      K,
      be,
      I,
      Z,
      ne,
      C,
      B
    ) : oe(W, I, Z, !0) : (Q & 8 && d(K, ""), J & 16 && ee(
      ue,
      K,
      be,
      I,
      Z,
      ne,
      C,
      B
    ));
  }, L = (x, M, K, be, I, Z, ne, C, B) => {
    x = x || wo, M = M || wo;
    const W = x.length, Q = M.length, ue = Math.min(W, Q);
    let de;
    for (de = 0; de < ue; de++) {
      const J = M[de] = B ? Hr(M[de]) : Mr(M[de]);
      S(
        x[de],
        J,
        K,
        null,
        I,
        Z,
        ne,
        C,
        B
      );
    }
    W > Q ? oe(
      x,
      I,
      Z,
      !0,
      !1,
      ue
    ) : ee(
      M,
      K,
      be,
      I,
      Z,
      ne,
      C,
      B,
      ue
    );
  }, me = (x, M, K, be, I, Z, ne, C, B) => {
    let W = 0;
    const Q = M.length;
    let ue = x.length - 1, de = Q - 1;
    for (; W <= ue && W <= de; ) {
      const J = x[W], fe = M[W] = B ? Hr(M[W]) : Mr(M[W]);
      if (ia(J, fe))
        S(
          J,
          fe,
          K,
          null,
          I,
          Z,
          ne,
          C,
          B
        );
      else
        break;
      W++;
    }
    for (; W <= ue && W <= de; ) {
      const J = x[ue], fe = M[de] = B ? Hr(M[de]) : Mr(M[de]);
      if (ia(J, fe))
        S(
          J,
          fe,
          K,
          null,
          I,
          Z,
          ne,
          C,
          B
        );
      else
        break;
      ue--, de--;
    }
    if (W > ue) {
      if (W <= de) {
        const J = de + 1, fe = J < Q ? M[J].el : be;
        for (; W <= de; )
          S(
            null,
            M[W] = B ? Hr(M[W]) : Mr(M[W]),
            K,
            fe,
            I,
            Z,
            ne,
            C,
            B
          ), W++;
      }
    } else if (W > de)
      for (; W <= ue; )
        Ne(x[W], I, Z, !0), W++;
    else {
      const J = W, fe = W, Ee = /* @__PURE__ */ new Map();
      for (W = fe; W <= de; W++) {
        const V = M[W] = B ? Hr(M[W]) : Mr(M[W]);
        V.key != null && Ee.set(V.key, W);
      }
      let je, ce = 0;
      const xe = de - fe + 1;
      let Ie = !1, g = 0;
      const u = new Array(xe);
      for (W = 0; W < xe; W++) u[W] = 0;
      for (W = J; W <= ue; W++) {
        const V = x[W];
        if (ce >= xe) {
          Ne(V, I, Z, !0);
          continue;
        }
        let k;
        if (V.key != null)
          k = Ee.get(V.key);
        else
          for (je = fe; je <= de; je++)
            if (u[je - fe] === 0 && ia(V, M[je])) {
              k = je;
              break;
            }
        k === void 0 ? Ne(V, I, Z, !0) : (u[k - fe] = W + 1, k >= g ? g = k : Ie = !0, S(
          V,
          M[k],
          K,
          null,
          I,
          Z,
          ne,
          C,
          B
        ), ce++);
      }
      const O = Ie ? j_(u) : wo;
      for (je = O.length - 1, W = xe - 1; W >= 0; W--) {
        const V = fe + W, k = M[V], q = M[V + 1], ve = V + 1 < Q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          q.el || Ng(q)
        ) : be;
        u[W] === 0 ? S(
          null,
          k,
          K,
          ve,
          I,
          Z,
          ne,
          C,
          B
        ) : Ie && (je < 0 || W !== O[je] ? ge(k, K, ve, 2) : je--);
      }
    }
  }, ge = (x, M, K, be, I = null) => {
    const { el: Z, type: ne, transition: C, children: B, shapeFlag: W } = x;
    if (W & 6) {
      ge(x.component.subTree, M, K, be);
      return;
    }
    if (W & 128) {
      x.suspense.move(M, K, be);
      return;
    }
    if (W & 64) {
      ne.move(x, M, K, te);
      return;
    }
    if (ne === at) {
      n(Z, M, K);
      for (let ue = 0; ue < B.length; ue++)
        ge(B[ue], M, K, be);
      n(x.anchor, M, K);
      return;
    }
    if (ne === Fc) {
      F(x, M, K);
      return;
    }
    if (be !== 2 && W & 1 && C)
      if (be === 0)
        C.beforeEnter(Z), n(Z, M, K), Nn(() => C.enter(Z), I);
      else {
        const { leave: ue, delayLeave: de, afterLeave: J } = C, fe = () => {
          x.ctx.isUnmounted ? i(Z) : n(Z, M, K);
        }, Ee = () => {
          Z._isLeaving && Z[r_](
            !0
            /* cancelled */
          ), ue(Z, () => {
            fe(), J && J();
          });
        };
        de ? de(Z, fe, Ee) : Ee();
      }
    else
      n(Z, M, K);
  }, Ne = (x, M, K, be = !1, I = !1) => {
    const {
      type: Z,
      props: ne,
      ref: C,
      children: B,
      dynamicChildren: W,
      shapeFlag: Q,
      patchFlag: ue,
      dirs: de,
      cacheIndex: J,
      memo: fe
    } = x;
    if (ue === -2 && (I = !1), C != null && (Xr(), xa(C, null, K, x, !0), Jr()), J != null && (M.renderCache[J] = void 0), Q & 256) {
      M.ctx.deactivate(x);
      return;
    }
    const Ee = Q & 1 && de, je = !ka(x);
    let ce;
    if (je && (ce = ne && ne.onVnodeBeforeUnmount) && _r(ce, M, x), Q & 6)
      R(x.component, K, be);
    else {
      if (Q & 128) {
        x.suspense.unmount(K, be);
        return;
      }
      Ee && Pi(x, null, M, "beforeUnmount"), Q & 64 ? x.type.remove(
        x,
        M,
        K,
        te,
        be
      ) : W && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !W.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Z !== at || ue > 0 && ue & 64) ? oe(
        W,
        M,
        K,
        !1,
        !0
      ) : (Z === at && ue & 384 || !I && Q & 16) && oe(B, M, K), be && He(x);
    }
    const xe = fe != null && J == null;
    (je && (ce = ne && ne.onVnodeUnmounted) || Ee || xe) && Nn(() => {
      ce && _r(ce, M, x), Ee && Pi(x, null, M, "unmounted"), xe && (x.el = null);
    }, K);
  }, He = (x) => {
    const { type: M, el: K, anchor: be, transition: I } = x;
    if (M === at) {
      re(K, be);
      return;
    }
    if (M === Fc) {
      T(x);
      return;
    }
    const Z = () => {
      i(K), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (x.shapeFlag & 1 && I && !I.persisted) {
      const { leave: ne, delayLeave: C } = I, B = () => ne(K, Z);
      C ? C(x.el, Z, B) : B();
    } else
      Z();
  }, re = (x, M) => {
    let K;
    for (; x !== M; )
      K = h(x), i(x), x = K;
    i(M);
  }, R = (x, M, K) => {
    const { bum: be, scope: I, job: Z, subTree: ne, um: C, m: B, a: W } = x;
    Zp(B), Zp(W), be && Ts(be), I.stop(), Z && (Z.flags |= 8, Ne(ne, x, M, K)), C && Nn(C, M), Nn(() => {
      x.isUnmounted = !0;
    }, M);
  }, oe = (x, M, K, be = !1, I = !1, Z = 0) => {
    for (let ne = Z; ne < x.length; ne++)
      Ne(x[ne], M, K, be, I);
  }, pe = (x) => {
    if (x.shapeFlag & 6)
      return pe(x.component.subTree);
    if (x.shapeFlag & 128)
      return x.suspense.next();
    const M = h(x.anchor || x.el), K = M && M[t_];
    return K ? h(K) : M;
  };
  let Ae = !1;
  const Le = (x, M, K) => {
    let be;
    x == null ? M._vnode && (Ne(M._vnode, null, null, !0), be = M._vnode.component) : S(
      M._vnode || null,
      x,
      M,
      null,
      null,
      null,
      K
    ), M._vnode = x, Ae || (Ae = !0, jp(be), tg(), Ae = !1);
  }, te = {
    p: S,
    um: Ne,
    m: ge,
    r: He,
    mt: Pe,
    mc: ee,
    pc: A,
    pbc: j,
    n: pe,
    o: e
  };
  return {
    render: Le,
    hydrate: void 0,
    createApp: k_(Le)
  };
}
function Oc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Ni({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function z_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mg(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ct(n) && ct(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Hr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && Mg(a, s)), s.type === Gl && (s.patchFlag === -1 && (s = i[o] = Hr(s)), s.el = a.el), s.type === ui && !s.el && (s.el = a.el);
    }
}
function j_(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const p = e[n];
    if (p !== 0) {
      if (i = r[r.length - 1], e[i] < p) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < p ? o = s + 1 : a = s;
      p < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function Pg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pg(t);
}
function Zp(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ng(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ng(t.subTree) : null;
}
const Ag = (e) => e.__isSuspense;
function H_(e, t) {
  t && t.pendingBranch ? ct(e) ? t.effects.push(...e) : t.effects.push(e) : Xv(e);
}
const at = /* @__PURE__ */ Symbol.for("v-fgt"), Gl = /* @__PURE__ */ Symbol.for("v-txt"), ui = /* @__PURE__ */ Symbol.for("v-cmt"), Fc = /* @__PURE__ */ Symbol.for("v-stc"), Pa = [];
let Hn = null;
function $e(e = !1) {
  Pa.push(Hn = e ? null : []);
}
function G_() {
  Pa.pop(), Hn = Pa[Pa.length - 1] || null;
}
let Ta = 1;
function Qp(e, t = !1) {
  Ta += e, e < 0 && Hn && t && (Hn.hasOnce = !0);
}
function Cg(e) {
  return e.dynamicChildren = Ta > 0 ? Hn || wo : null, G_(), Ta > 0 && Hn && Hn.push(e), e;
}
function ze(e, t, r, n, i, o) {
  return Cg(
    ke(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function tr(e, t, r, n, i) {
  return Cg(
    nt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function Ig(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Eg = ({ key: e }) => e ?? null, Ls = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? en(e) || /* @__PURE__ */ bn(e) || pt(e) ? { i: jn, r: e, k: t, f: !!r } : e : null);
function ke(e, t = null, r = null, n = 0, i = null, o = e === at ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Eg(t),
    ref: t && Ls(t),
    scopeId: rg,
    slotScopeIds: null,
    children: r,
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
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: jn
  };
  return s ? (xd(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= en(r) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Hn.push(l), l;
}
const nt = W_;
function W_(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === dg) && (e = ui), Ig(e)) {
    const s = To(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && xd(s, r), Ta > 0 && !o && Hn && (s.shapeFlag & 6 ? Hn[Hn.indexOf(e)] = s : Hn.push(s)), s.patchFlag = -2, s;
  }
  if (tS(e) && (e = e.__vccOpts), t) {
    t = K_(t);
    let { class: s, style: l } = t;
    s && !en(s) && (t.class = bt(s)), Tt(l) && (/* @__PURE__ */ bd(l) && !ct(l) && (l = _n({}, l)), t.style = Ft(l));
  }
  const a = en(e) ? 1 : Ag(e) ? 128 : n_(e) ? 64 : Tt(e) ? 4 : pt(e) ? 2 : 0;
  return ke(
    e,
    t,
    r,
    n,
    i,
    a,
    o,
    !0
  );
}
function K_(e) {
  return e ? /* @__PURE__ */ bd(e) || vg(e) ? _n({}, e) : e : null;
}
function To(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, p = t ? Gr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Eg(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ct(o) ? o.concat(Ls(t)) : [o, Ls(t)] : Ls(t)
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
    patchFlag: t && e.type !== at ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && To(e.ssContent),
    ssFallback: e.ssFallback && To(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && _d(
    d,
    l.clone(d)
  ), d;
}
function fa(e = " ", t = 0) {
  return nt(Gl, null, e, t);
}
function vt(e = "", t = !1) {
  return t ? ($e(), tr(ui, null, e)) : nt(ui, null, e);
}
function Mr(e) {
  return e == null || typeof e == "boolean" ? nt(ui) : ct(e) ? nt(
    at,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ig(e) ? Hr(e) : nt(Gl, null, String(e));
}
function Hr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : To(e);
}
function xd(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ct(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), xd(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !vg(t) ? t._ctx = jn : i === 3 && jn && (jn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else pt(t) ? (t = { default: t, _ctx: jn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [fa(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Gr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = bt([t.class, n.class]));
      else if (i === "style")
        t.style = Ft([t.style, n.style]);
      else if (Ol(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(ct(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Fl(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function _r(e, t, r, n = null) {
  Fr(e, t, 7, [
    r,
    n
  ]);
}
const B_ = hg();
let U_ = 0;
function Y_(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || B_, o = {
    uid: U_++,
    vnode: e,
    type: n,
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
    scope: new _v(
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
    propsOptions: Sg(n, i),
    emitsOptions: mg(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Dt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Dt,
    data: Dt,
    props: Dt,
    attrs: Dt,
    slots: Dt,
    refs: Dt,
    setupState: Dt,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = P_.bind(null, o), e.ce && e.ce(o), o;
}
let gn = null;
const q_ = () => gn || jn;
let rl, wu;
{
  const e = Ll(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  rl = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => gn = r
  ), wu = t(
    "__VUE_SSR_SETTERS__",
    (r) => Da = r
  );
}
const Xa = (e) => {
  const t = gn;
  return rl(e), e.scope.on(), () => {
    e.scope.off(), rl(t);
  };
}, eh = () => {
  gn && gn.scope.off(), rl(null);
};
function Og(e) {
  return e.vnode.shapeFlag & 4;
}
let Da = !1;
function X_(e, t = !1, r = !1) {
  t && wu(t);
  const { props: n, children: i } = e.vnode, o = Og(e);
  O_(e, n, o, t), L_(e, i, r || t);
  const a = o ? J_(e, t) : void 0;
  return t && wu(!1), a;
}
function J_(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, y_);
  const { setup: n } = r;
  if (n) {
    Xr();
    const i = e.setupContext = n.length > 1 ? Q_(e) : null, o = Xa(e), a = Ya(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = Im(a);
    if (Jr(), o(), (s || e.sp) && !ka(e) && sg(e), s) {
      if (a.then(eh, eh), t)
        return a.then((l) => {
          th(e, l);
        }).catch((l) => {
          Vl(l, e, 0);
        });
      e.asyncDep = a;
    } else
      th(e, a);
  } else
    Fg(e);
}
function th(e, t, r) {
  pt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Tt(t) && (e.setupState = Zm(t)), Fg(e);
}
function Fg(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Ar);
  {
    const i = Xa(e);
    Xr();
    try {
      b_(e);
    } finally {
      Jr(), i();
    }
  }
}
const Z_ = {
  get(e, t) {
    return mn(e, "get", ""), e[t];
  }
};
function Q_(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Z_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Wl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zm(jv(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Ma)
        return Ma[r](e);
    },
    has(t, r) {
      return r in t || r in Ma;
    }
  })) : e.proxy;
}
function eS(e, t = !0) {
  return pt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function tS(e) {
  return pt(e) && "__vccOpts" in e;
}
const mt = (e, t) => /* @__PURE__ */ Kv(e, t, Da), nS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xu;
const nh = typeof window < "u" && window.trustedTypes;
if (nh)
  try {
    xu = /* @__PURE__ */ nh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tg = xu ? (e) => xu.createHTML(e) : (e) => e, rS = "http://www.w3.org/2000/svg", iS = "http://www.w3.org/1998/Math/MathML", zr = typeof document < "u" ? document : null, rh = zr && /* @__PURE__ */ zr.createElement("template"), oS = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? zr.createElementNS(rS, e) : t === "mathml" ? zr.createElementNS(iS, e) : r ? zr.createElement(e, { is: r }) : zr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => zr.createTextNode(e),
  createComment: (e) => zr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => zr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const a = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      rh.innerHTML = Tg(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = rh.content;
      if (n === "svg" || n === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, r);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, aS = /* @__PURE__ */ Symbol("_vtc");
function sS(e, t, r) {
  const n = e[aS];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const il = /* @__PURE__ */ Symbol("_vod"), Dg = /* @__PURE__ */ Symbol("_vsh"), Ki = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[il] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : oa(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), oa(e, !0), n.enter(e)) : n.leave(e, () => {
      oa(e, !1);
    }) : oa(e, t));
  },
  beforeUnmount(e, { value: t }) {
    oa(e, t);
  }
};
function oa(e, t) {
  e.style.display = t ? e[il] : "none", e[Dg] = !t;
}
const lS = /* @__PURE__ */ Symbol(""), cS = /(?:^|;)\s*display\s*:/;
function uS(e, t, r) {
  const n = e.style, i = en(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (en(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && Rs(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && Rs(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), Rs(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[lS];
      a && (r += ";" + a), n.cssText = r, o = cS.test(r);
    }
  } else t && e.removeAttribute("style");
  il in e && (e[il] = o ? n.display : "", e[Dg] && (n.display = "none"));
}
const ih = /\s*!important$/;
function Rs(e, t, r) {
  if (ct(r))
    r.forEach((n) => Rs(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = dS(e, t);
    ih.test(r) ? e.setProperty(
      Ui(n),
      r.replace(ih, ""),
      "important"
    ) : e[n] = r;
  }
}
const oh = ["Webkit", "Moz", "ms"], Tc = {};
function dS(e, t) {
  const r = Tc[t];
  if (r)
    return r;
  let n = xn(t);
  if (n !== "filter" && n in e)
    return Tc[t] = n;
  n = Dl(n);
  for (let i = 0; i < oh.length; i++) {
    const o = oh[i] + n;
    if (o in e)
      return Tc[t] = o;
  }
  return t;
}
const ah = "http://www.w3.org/1999/xlink";
function sh(e, t, r, n, i, o = bv(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(ah, t.slice(6, t.length)) : e.setAttributeNS(ah, t, r) : r == null || o && !Tm(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Or(r) ? String(r) : r
  );
}
function lh(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Tg(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (s !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let a = !1;
  if (r === "" || r == null) {
    const s = typeof e[t];
    s === "boolean" ? r = Tm(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function ho(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function fS(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const ch = /* @__PURE__ */ Symbol("_vei");
function pS(e, t, r, n, i = null) {
  const o = e[ch] || (e[ch] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = hS(t);
    if (n) {
      const p = o[t] = yS(
        n,
        i
      );
      ho(e, s, p, l);
    } else a && (fS(e, s, a, l), o[t] = void 0);
  }
}
const uh = /(?:Once|Passive|Capture)$/;
function hS(e) {
  let t;
  if (uh.test(e)) {
    t = {};
    let n;
    for (; n = e.match(uh); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ui(e.slice(2)), t];
}
let Dc = 0;
const mS = /* @__PURE__ */ Promise.resolve(), gS = () => Dc || (mS.then(() => Dc = 0), Dc = Date.now());
function yS(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Fr(
      bS(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = gS(), r;
}
function bS(e, t) {
  if (ct(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const dh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vS = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? sS(e, n, a) : t === "style" ? uS(e, r, n) : Ol(t) ? Fl(t) || pS(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _S(e, t, n, a)) ? (lh(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sh(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (SS(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !en(n))) ? lh(e, xn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), sh(e, t, n, a));
};
function _S(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && dh(t) && pt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return dh(t) && en(r) ? !1 : t in e;
}
function SS(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = xn(t);
  return Array.isArray(r) ? r.some((i) => xn(i) === n) : Object.keys(r).some((i) => xn(i) === n);
}
const fh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ct(t) ? (r) => Ts(t, r) : t;
};
function wS(e) {
  e.target.composing = !0;
}
function ph(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Lc = /* @__PURE__ */ Symbol("_assign");
function hh(e, t, r) {
  return t && (e = e.trim()), r && (e = ud(e)), e;
}
const mh = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Lc] = fh(i);
    const o = n || i.props && i.props.type === "number";
    ho(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Lc](hh(e.value, r, o));
    }), (r || o) && ho(e, "change", () => {
      e.value = hh(e.value, r, o);
    }), t || (ho(e, "compositionstart", wS), ho(e, "compositionend", ph), ho(e, "change", ph));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Lc] = fh(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? ud(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, xS = ["ctrl", "shift", "alt", "meta"], kS = {
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
  exact: (e, t) => xS.some((r) => e[`${r}Key`] && !t.includes(r))
}, Vt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = kS[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, MS = /* @__PURE__ */ _n({ patchProp: vS }, oS);
let gh;
function PS() {
  return gh || (gh = V_(MS));
}
const kd = ((...e) => {
  const t = PS().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = AS(n);
    if (!i) return;
    const o = t._component;
    !pt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, NS(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function NS(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function AS(e) {
  return en(e) ? document.querySelector(e) : e;
}
const CS = "PanoramaSuite.Debug.Diagnostics", IS = "PanoramaSuite.Debug.ExportDiagnostics", Rc = "pano_suite.diagnostics.v1", yh = "pano_suite.diagnostics.previous.v1", ES = 300, OS = 2e5, FS = 100, TS = 20, DS = 1e3, LS = 2, vs = 1024 * 1024;
function oi(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function RS() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function VS() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: RS,
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
      var n;
      const t = globalThis.PerformanceObserver;
      if (!((n = t == null ? void 0 : t.supportedEntryTypes) != null && n.includes("longtask"))) return null;
      const r = new t((i) => e(i.getEntries()));
      return r.observe({ type: "longtask" }), () => r.disconnect();
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
function $S(e = {}) {
  const t = { ...VS(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, p = 0;
  const d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), h = { created: 0, released: 0, collected: 0 }, b = { created: 0, collected: 0 }, v = t.FinalizationRegistry ? new t.FinalizationRegistry((te) => {
    d.delete(te), h.collected += 1;
  }) : null, S = t.FinalizationRegistry ? new t.FinalizationRegistry((te) => {
    f.delete(te), b.collected += 1;
  }) : null, w = /* @__PURE__ */ new Set(), P = { created: 0, lost: 0, restored: 0, disposed: 0 }, G = [], F = /* @__PURE__ */ new Map();
  let T = { count: 0, maxMs: 0 }, y = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 };
  const z = [];
  function ee(te, Ce, x = void 0) {
    G.push(x === void 0 ? { t: t.clock(), type: te, label: Ce } : { t: t.clock(), type: te, label: Ce, detail: x }), G.length > FS && G.shift();
  }
  function ie(te, Ce, x, M, K) {
    if (!r || !M || !t.WeakRef) return M;
    const be = { ref: new t.WeakRef(M), label: K };
    return te.add(be), Ce == null || Ce.register(M, be), x.created += 1, M;
  }
  function j(te, Ce = "") {
    return ie(d, v, h, te, Ce);
  }
  function H(te, Ce = "") {
    return ie(f, S, b, te, Ce);
  }
  function U({ label: te = "", width: Ce, height: x, offscreen: M = !1 } = {}) {
    const K = globalThis.OffscreenCanvas;
    let be;
    return M && typeof K < "u" ? be = new K(Ce, x) : (be = t.document().createElement("canvas"), Ce !== void 0 && x !== void 0 && (be.width = Ce, be.height = x)), j(be, te);
  }
  function ae(te) {
    te.width = 0, te.height = 0, r && (h.released += 1);
  }
  function Pe(te = t.document(), Ce = "") {
    var x;
    return H(((x = te == null ? void 0 : te.createElement) == null ? void 0 : x.call(te, "video")) || null, Ce);
  }
  function we(te, Ce) {
    if (!r || !te) return () => {
    };
    const x = { label: Ce, lost: !1, disposed: !1 };
    w.add(x), P.created += 1, ee("webgl-created", Ce);
    const M = () => {
      x.disposed || (x.lost = !0, P.lost += 1, ee("webglcontextlost", Ce));
    }, K = () => {
      x.disposed || (x.lost = !1, P.restored += 1, ee("webglcontextrestored", Ce));
    };
    return te.addEventListener("webglcontextlost", M), te.addEventListener("webglcontextrestored", K), () => {
      x.disposed || (x.disposed = !0, w.delete(x), P.disposed += 1, ee("webgl-disposed", Ce));
    };
  }
  function he(te, Ce) {
    return F.set(te, Ce), () => {
      F.get(te) === Ce && F.delete(te);
    };
  }
  function X() {
    return r ? t.now() : -1;
  }
  function A(te) {
    if (te < 0 || !r) return;
    const Ce = t.now() - te;
    T.count += 1, T.maxMs = Math.max(T.maxMs, Ce);
  }
  function L(te, Ce) {
    if (Ce < 0 || !r) return;
    const x = t.now() - Ce, M = y.get(te) ?? { count: 0, maxMs: 0 };
    M.count += 1, M.maxMs = Math.max(M.maxMs, x), y.set(te, M);
  }
  function me() {
    let te = 0, Ce = 0, x = 0, M = [0, 0];
    const K = {};
    for (const be of d) {
      const I = be.ref.deref();
      if (!I) continue;
      te += 1;
      const Z = I.width * I.height;
      Z > 0 && (Ce += 1), x += Z, Z > M[0] * M[1] && (M = [I.width, I.height]);
      const ne = K[be.label] ?? (K[be.label] = [0, 0]);
      ne[0] += 1, ne[1] += Z;
    }
    return { ...h, alive: te, sized: Ce, pixels: x, mb: oi(x * 4 / vs, 1), largest: M, byLabel: K };
  }
  function ge() {
    const te = [];
    let Ce = 0, x = 0;
    for (const M of f) {
      const K = M.ref.deref();
      if (!K) continue;
      Ce += 1;
      const be = !K.paused && !K.ended;
      be && (x += 1), te.length < TS && te.push({
        label: M.label,
        playing: be,
        src: !!(K.currentSrc || K.src),
        size: [K.videoWidth || 0, K.videoHeight || 0],
        ready: K.readyState ?? 0,
        connected: !!K.isConnected
      });
    }
    return { ...b, alive: Ce, playing: x, list: te };
  }
  function Ne() {
    const te = t.now(), Ce = t.memory(), x = {
      t: t.clock(),
      heap: Ce ? { used: oi(Ce.usedJSHeapSize / vs, 1), total: oi(Ce.totalJSHeapSize / vs, 1), limit: oi(Ce.jsHeapSizeLimit / vs, 1) } : null,
      canvas: me(),
      webgl: { ...P, alive: [...w].filter((M) => !M.lost).length },
      video: ge(),
      frame: { count: T.count, maxMs: oi(T.maxMs), longTasks: $.count, longTaskMaxMs: oi($.maxMs) },
      renders: Object.fromEntries([...y].map(([M, K]) => [M, { count: K.count, maxMs: oi(K.maxMs) }])),
      sources: Object.fromEntries([...F].map(([M, K]) => [M, K()])),
      costMs: oi(p, 3)
    };
    return T = { count: 0, maxMs: 0 }, y = /* @__PURE__ */ new Map(), $ = { count: 0, maxMs: 0 }, z.push({ record: x, text: JSON.stringify(x) }), z.length > ES && z.shift(), l += 1, l % LS === 0 && re(), p = t.now() - te, x;
  }
  function He(te = OS) {
    const Ce = JSON.stringify({ ...o, events: G }).slice(0, -1);
    let x = te - Ce.length - 14, M = z.length;
    for (; M > 0 && x - z[M - 1].text.length - 1 >= 0; )
      M -= 1, x -= z[M].text.length + 1;
    return `${Ce},"records":[${z.slice(M).map((K) => K.text).join(",")}]}`;
  }
  function re() {
    if (!o) return;
    const te = t.storage();
    if (te) {
      o.savedAt = t.clock();
      try {
        te.setItem(Rc, He());
      } catch {
      }
    }
  }
  function R() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", re();
  }
  function oe() {
    var K;
    if (n) return i;
    n = !0;
    const te = t.storage();
    if (!te) return null;
    let Ce = null;
    try {
      if (Ce = te.getItem(Rc), Ce === null) {
        const be = te.getItem(yh);
        return i = be === null ? null : JSON.parse(be), i;
      }
      te.setItem(yh, Ce), te.removeItem(Rc), i = JSON.parse(Ce);
    } catch {
      return i;
    }
    const x = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], M = x.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${x.length} records kept. Its last records:`,
      JSON.stringify(M)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((K = x.at(-1)) == null ? void 0 : K.t) || 0).toISOString()}; ${x.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(M)
    ), i;
  }
  function pe(te) {
    const Ce = te === !0;
    if (oe(), Ce !== r) {
      if (r = Ce, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, z.length = 0, s = t.observeLongTasks((x) => {
          for (const M of x)
            $.count += 1, $.maxMs = Math.max($.maxMs, M.duration);
        }), t.addUnload(R), a = t.setInterval(Ne, DS), re();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(R), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", re();
    }
  }
  function Ae() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...G], records: z.map((te) => te.record) } : null,
      previous: i
    };
  }
  function Le() {
    const te = t.document(), Ce = new Blob([JSON.stringify(Ae(), null, 1)], { type: "application/json" }), x = URL.createObjectURL(Ce), M = te.createElement("a");
    M.href = x, M.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, M.click(), setTimeout(() => URL.revokeObjectURL(x), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: U,
    releaseCanvas: ae,
    trackCanvas: j,
    createVideo: Pe,
    trackVideo: H,
    watchContext: we,
    addSource: he,
    frameStart: X,
    frameEnd: A,
    renderEnd: L,
    sample: Ne,
    serialize: He,
    recoverPrevious: oe,
    setEnabled: pe,
    exportData: Ae,
    download: Le
  };
}
const On = $S(), vn = On.createCanvas, ku = On.releaseCanvas, Vc = On.trackCanvas, Kl = On.createVideo, bh = On.trackVideo, zS = On.addSource, jS = On.frameStart, HS = On.frameEnd;
function Lg(e, t) {
  const r = On.watchContext(e.canvas, t), n = On.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = On.frameStart(), l = o(a);
    return On.renderEnd(t, s), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (n(), r());
    }
  };
}
const GS = {
  id: CS,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => On.setEnabled(e === !0)
}, vh = {
  id: IS,
  label: "Export Panorama Suite diagnostics",
  function: () => On.download()
};
function mo(e, t) {
  const r = vn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function WS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function _h(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, p = -1;
  for (let f = 0; f < i; f += 1)
    for (let h = 0; h < n; h += 1)
      o[(f * n + h) * 4 + 3] <= t || (h < a && (a = h), f < s && (s = f), h > l && (l = h), f > p && (p = f));
  return l < a || p < s ? null : {
    minX: a,
    minY: s,
    maxX: l,
    maxY: p,
    width: l - a + 1,
    height: p - s + 1,
    aspect: Number(((l - a + 1) / Math.max(1, p - s + 1)).toFixed(4))
  };
}
function Md(e, t) {
  return vn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function li(e, t, r) {
  if (!e) return mo(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Yt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function hn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let $c = null, zc = null, Sh = null, wh = null, Ut = null, aa = null;
function KS() {
  if (zc) return zc;
  const e = 6, t = 17, r = vn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), zc = r, r;
}
function jc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  $c = li($c, r, n);
  const i = $c;
  Yt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", wh !== i.ctx && (Sh = i.ctx.createPattern(KS(), "repeat"), wh = i.ctx), i.ctx.fillStyle = Sh, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function BS(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function US(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function YS(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function qS(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const jt = /* @__PURE__ */ new Map(), Pd = 128;
function XS(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (jt.has(l)) {
    const G = jt.get(l);
    return jt.delete(l), jt.set(l, G), G;
  }
  jt.size >= Pd && jt.delete(jt.keys().next().value);
  const p = a * 2 + 2, d = a + 1, f = Md(p, p), h = f.getContext("2d"), b = s * a, v = a + 1, S = `rgba(${r},${n},${i},${o})`, w = `rgba(${r},${n},${i},0)`, P = h.createRadialGradient(d, d, b, d, d, v);
  return P.addColorStop(0, S), P.addColorStop(1, w), h.fillStyle = P, h.fillRect(0, 0, p, p), jt.set(l, f), f;
}
function JS(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: p, a: d } = n, f = Math.max(2, Math.ceil(e) * 2), h = Math.max(2, Math.ceil(t) * 2), b = Math.max(0, i), v = Math.max(0, Math.min(0.99, o)), S = Math.max(0, Math.min(1, a ?? 0)), w = `chisel:${f}:${h}:${r.toFixed(2)}:${s}:${l}:${p}:${d.toFixed(3)}:${b.toFixed(2)}:${v.toFixed(2)}:${S.toFixed(2)}`;
  if (jt.has(w)) {
    const ee = jt.get(w);
    return jt.delete(w), jt.set(w, ee), ee;
  }
  jt.size >= Pd && jt.delete(jt.keys().next().value);
  const P = Md(f, h), G = P.getContext("2d"), F = G.createImageData(f, h), T = F.data, y = Math.max(0, e - t), $ = Math.max(0, Math.min(1, r)), z = 1 + b;
  for (let ee = 0; ee < h; ee++)
    for (let ie = 0; ie < f; ie++) {
      const j = ie + 0.5 - e, H = ee + 0.5 - t, U = Math.max(Math.abs(j) - y, 0), Pe = Math.hypot(U, H) / t;
      if (Pe >= 1) continue;
      const we = Pe <= $ ? 1 : Math.max(0, (1 - Pe) / Math.max(1e-4, 1 - $)), he = 1 - Pe, X = 1 + b * (1 - he) * (1 - he), A = 1 - v * he * he, L = X * A / z;
      let me = 1;
      if (S > 0) {
        const He = Math.floor((H + t) / 1.5), re = Math.floor((j + e) / 8), R = Hi(Po(He * 41 + 500, re * 19 + 300));
        me = 1 - S * 0.42 * R;
      }
      const ge = Math.round(255 * Math.min(1, d * we * L * me));
      if (ge <= 0) continue;
      const Ne = (ee * f + ie) * 4;
      T[Ne] = s, T[Ne + 1] = l, T[Ne + 2] = p, T[Ne + 3] = ge;
    }
  return G.putImageData(F, 0, 0), jt.set(w, P), P;
}
function Po(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Hi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ZS(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, p = Math.max(0, r - n), d = Math.max(Math.abs(s) - p, 0), f = Math.hypot(d, l) / n;
  if (f >= 1) return 0;
  const h = Hi(Po(e * 17 + 3, t * 13 + 7)), b = f + o * 0.22 * (h - 0.5);
  if (b >= 1) return 0;
  const v = b <= i ? 1 : Math.max(0, (1 - b) / Math.max(1e-4, 1 - i)), S = QS(e, t, s, l, r, n), w = o * 0.55;
  if (S < w) return 0;
  const G = 0.45 + 0.55 * ((S - w) / Math.max(1e-4, 1 - w));
  return Math.round(255 * Math.min(1, a * v * G));
}
function QS(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = Hi(Po(a * 13 + 700, s * 17 + 400)), p = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), f = Hi(Po(p * 23 + 800, d * 29 + 500)), h = Hi(Po(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + f * 0.3 + h * 0.15;
}
function ew(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, p = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), f = Math.max(0, Math.min(1, i)), h = `crayon:${p}:${d}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${f.toFixed(2)}`;
  if (jt.has(h)) {
    const G = jt.get(h);
    return jt.delete(h), jt.set(h, G), G;
  }
  jt.size >= Pd && jt.delete(jt.keys().next().value);
  const b = Md(p, d), v = b.getContext("2d"), S = v.createImageData(p, d), w = S.data, P = Math.max(0, Math.min(1, r));
  for (let G = 0; G < d; G++)
    for (let F = 0; F < p; F++) {
      const T = ZS(F, G, e, t, P, f, l);
      if (T <= 0) continue;
      const y = (G * p + F) * 4;
      w[y] = o, w[y + 1] = a, w[y + 2] = s, w[y + 3] = T;
    }
  return v.putImageData(S, 0, 0), jt.set(h, b), b;
}
function Rg(e, t, r) {
  var S, w;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = YS(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = tw(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((S = t == null ? void 0 : t.angle) == null ? void 0 : S.value) ?? 0), p = qS(t, i), d = String(((w = t == null ? void 0 : t.targetSpace) == null ? void 0 : w.viewMode) || ""), f = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", h = t == null ? void 0 : t.scatter, b = h ? { radius: Number(h.radius ?? 1.5), count: Math.max(1, Math.round(h.count ?? 6)) } : null;
  let v;
  if (n === "chisel") {
    const P = i * s, G = i, F = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), y = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = JS(P, G, o, a, F, T, y);
  } else if (n === "crayon") {
    const P = i * s, G = i, F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = ew(P, G, o, a, F);
  } else
    v = XS(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: v, radiusPx: i, spacingPx: p, desc: r, aspect: s, angle: l, stampKind: n, scatter: b, latitudeCorrection: f };
}
function tw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(n.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(n.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(n.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(n.b || 0))) * 255),
    a: o
  };
}
function nw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function xh(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(p, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, p - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(p, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function Nd(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: p, count: d } = e.scatter, f = p * e.radiusPx * i, h = Po(t, r);
    for (let b = 0; b < d; b++) {
      const v = Hi(h + b * 2) * Math.PI * 2, S = Math.sqrt(Hi(h + b * 2 + 1)) * f, w = t + Math.cos(v) * S, P = r + Math.sin(v) * S, G = Math.max(0.5, e.radiusPx * i * 0.48), F = (0.5 - P / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(F)) : 1, y = G * e.aspect * T;
      xh(e, w, P, G, y);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  xh(e, t, r, o, l);
}
function kh(e, t, r) {
  const n = US(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = Rg(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let h = 0; h < n.length; h++) {
    let b = Number(n[h].u || 0) * i;
    const v = Number(n[h].v || 0) * o;
    h > 0 && Math.abs(b - s[h - 1].x) > i * 0.5 && (b += b < s[h - 1].x ? i : -i), s.push({ x: b, y: v });
  }
  if (Nd(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], p = s[0], d = s[0], f = 0;
  for (let h = 1; h < s.length; h++) {
    const b = s[h], v = { x: (p.x + b.x) * 0.5, y: (p.y + b.y) * 0.5 };
    h === 1 ? f = La(a, d.x, d.y, v.x, v.y, f) : f = ol(a, l, d, v, b, f), l = p, p = b, d = v;
  }
  s.length === 2 ? La(a, d.x, d.y, p.x, p.y, f) : ol(a, l, d, p, p, f), e.restore();
}
function Vs(e, t, r) {
  var f;
  const n = Array.isArray((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = nw(t), s = [];
  let l = 1 / 0, p = -1 / 0;
  for (let h = 0; h < n.length; h++) {
    const b = BS(n[h]);
    let v = Number(b.x || 0) * i;
    h > 0 && Math.abs(v - s[h - 1].x) > i * 0.5 && (v += v < s[h - 1].x ? i : -i), s.push({ x: v, y: Number(b.y || 0) * o }), v < l && (l = v), v > p && (p = v);
  }
  function d(h) {
    e.beginPath(), e.moveTo(s[0].x + h, s[0].y);
    for (let b = 1; b < s.length; b++) e.lineTo(s[b].x + h, s[b].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, d(0), l < 0 && d(i), p > i && d(-i), e.restore();
}
function _s(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    Vs(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? kh(e, t, r) : (aa = li(aa, r.width, r.height), Yt(aa), kh(aa.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(aa.canvas, 0, 0), e.restore());
}
function Ai(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function La(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let p = e.spacingPx - o;
  for (; p <= l; ) {
    const d = p / l;
    Nd(e, t + a * d, r + s * d, 1), p += e.spacingPx;
  }
  return l - p + e.spacingPx;
}
function ol(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, f = s, h = f + l, b = h + p, v = h - f, S = 16;
  let w = o, P = r.x, G = r.y;
  for (let F = 1; F <= S; F++) {
    const T = f + v * F / S, y = ((f - T) * t.x + (T - d) * r.x) / (f - d), $ = ((f - T) * t.y + (T - d) * r.y) / (f - d), z = ((h - T) * r.x + (T - f) * n.x) / (h - f), ee = ((h - T) * r.y + (T - f) * n.y) / (h - f), ie = ((b - T) * n.x + (T - h) * i.x) / (b - h), j = ((b - T) * n.y + (T - h) * i.y) / (b - h), H = ((h - T) * y + (T - d) * z) / (h - d), U = ((h - T) * $ + (T - d) * ee) / (h - d), ae = ((b - T) * z + (T - f) * ie) / (b - f), Pe = ((b - T) * ee + (T - f) * j) / (b - f), we = ((h - T) * H + (T - f) * ae) / (h - f), he = ((h - T) * U + (T - f) * Pe) / (h - f);
    w = La(e, P, G, we, he, w), P = we, G = he;
  }
  return w;
}
function rw(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let p = t * a;
  if (l && Math.abs(p - l.prev.x) > a * 0.5 && (p += p < l.prev.x ? a : -a), !l) {
    const b = Rg(i, n, o), v = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), S = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), w = String((n == null ? void 0 : n.toolKind) || "") === "eraser", P = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Nd(b, p, s, 1), e.activeStroke = {
      pprev: { x: p, y: s },
      prev: { x: p, y: s },
      lastMidX: p,
      lastMidY: s,
      stampTex: b.stampTex,
      radiusPx: b.radiusPx,
      spacingPx: b.spacingPx,
      aspect: b.aspect,
      angle: b.angle,
      stampKind: b.stampKind,
      scatter: b.scatter,
      latitudeCorrection: b.latitudeCorrection,
      strokeOpacity: v,
      velocityWidthFactor: S,
      distSinceStamp: 0,
      isEraser: w,
      layerKind: P,
      pointCount: 1
    }, hn(e);
    return;
  }
  const d = (l.prev.x + p) * 0.5, f = (l.prev.y + s) * 0.5;
  i.globalCompositeOperation = "source-over";
  const h = {
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
  l.pointCount === 1 ? l.distSinceStamp = La(h, l.lastMidX, l.lastMidY, d, f, l.distSinceStamp) : l.distSinceStamp = ol(
    h,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: f },
    { x: p, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: p, y: s }, l.lastMidX = d, l.lastMidY = f, l.pointCount++, hn(e);
}
function Ad(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = mo(t, r), a = {
    descriptor: n,
    committedMask: mo(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, s = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: mo(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = mo(t, r);
  let p = null, d = "", f = null;
  const h = /* @__PURE__ */ new Map();
  let b = null;
  function v(ae) {
    return {
      actionGroupId: ae,
      descriptor: n,
      committedPaint: mo(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function S(ae) {
    let Pe = i.get(ae);
    return Pe || (Pe = v(ae), i.set(ae, Pe)), Pe;
  }
  function w(ae) {
    return d === "mask" ? a : p ? S(p) : s;
  }
  function P(ae) {
    var L;
    const Pe = !f || f.length !== ae.length || ae.some((me, ge) => me !== f[ge]), we = d === "paint" && ((L = p ? i.get(p) : s) == null ? void 0 : L.activeStroke) || null;
    let he = a.displayDirty || s.displayDirty || Pe;
    for (const me of ae) {
      const ge = i.get(me);
      if (ge != null && ge.displayDirty) {
        he = !0;
        break;
      }
    }
    if (we && (he = !0), !he) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const me of ae) {
      const ge = i.get(me);
      ge && (ge.displayDirty = !1);
    }
    f = [...ae];
    const X = l.ctx;
    Yt(l);
    const A = !!(we != null && we.isEraser);
    for (const me of ae) {
      const ge = i.get(me);
      if (!ge) continue;
      const He = p === ge.actionGroupId && d === "paint" ? ge.activeStroke : null;
      if (A)
        Ut = li(Ut, t, r), Yt(Ut), Ut.ctx.drawImage(ge.committedPaint.canvas, 0, 0), Ai(Ut.ctx, o.canvas), X.drawImage(Ut.canvas, 0, 0);
      else if (X.drawImage(ge.committedPaint.canvas, 0, 0), He) {
        const re = ge.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, He.strokeOpacity ?? 1));
        X.save(), X.globalAlpha = re, X.drawImage(o.canvas, 0, 0), X.restore();
      }
    }
  }
  function G(ae) {
    var we, he, X, A, L;
    for (const me of i.values())
      Yt(me.committedPaint), Yt(me.currentStroke), me.activeStroke = null, hn(me);
    Yt(a.committedMask), Yt(a.currentStroke), a.activeStroke = null, a.painted = !1, h.clear(), hn(a), hn(s), f = null;
    const Pe = [
      ...Array.isArray((he = (we = ae == null ? void 0 : ae.painting) == null ? void 0 : we.paint) == null ? void 0 : he.strokes) ? ae.painting.paint.strokes : [],
      ...Array.isArray((A = (X = ae == null ? void 0 : ae.painting) == null ? void 0 : X.mask) == null ? void 0 : A.strokes) ? ae.painting.mask.strokes : []
    ];
    for (const me of Pe) {
      if (((L = me == null ? void 0 : me.targetSpace) == null ? void 0 : L.kind) !== "ERP_GLOBAL") continue;
      const ge = String((me == null ? void 0 : me.layerKind) || "paint"), He = String((me == null ? void 0 : me.toolKind) || "pen") === "eraser";
      if (ge === "mask") {
        const re = a.descriptor;
        He ? (Ut = li(Ut, re.width, re.height), Yt(Ut), _s(Ut.ctx, me, re), Ai(a.committedMask.ctx, Ut.canvas)) : (_s(a.committedMask.ctx, me, re), a.painted = !0);
        continue;
      }
      if (He) {
        Ut = li(Ut, n.width, n.height), Yt(Ut), _s(Ut.ctx, me, n);
        for (const re of i.values())
          Ai(re.committedPaint.ctx, Ut.canvas), hn(re);
      } else {
        const re = String((me == null ? void 0 : me.actionGroupId) || "__default__"), R = S(re), oe = R.descriptor;
        _s(R.committedPaint.ctx, me, oe), hn(R);
      }
    }
    P([...i.keys()]);
  }
  function F(ae, Pe) {
    d = String((ae == null ? void 0 : ae.layerKind) || "");
    const we = String((ae == null ? void 0 : ae.toolKind) || "") === "eraser";
    if (d === "mask")
      p = null, Yt(a.currentStroke), a.activeStroke = null, hn(a);
    else {
      const he = we ? s : S(String((ae == null ? void 0 : ae.actionGroupId) || "__default__"));
      p = we ? "" : String((ae == null ? void 0 : ae.actionGroupId) || "__default__"), Yt(he.currentStroke), he.activeStroke = null, hn(he);
    }
  }
  function T(ae, Pe) {
    var ge;
    const we = String((ae == null ? void 0 : ae.layerKind) || "paint"), he = String((ae == null ? void 0 : ae.toolKind) || "") === "eraser", X = we === "mask" ? a : he ? s : S(String((ae == null ? void 0 : ae.actionGroupId) || p || "__default__")), A = X.activeStroke, L = X.descriptor;
    if (A && A.pointCount > 1) {
      const Ne = X.currentStroke.ctx;
      Ne.globalCompositeOperation = "source-over";
      const He = {
        ctx: Ne,
        stampTex: A.stampTex,
        radiusPx: A.radiusPx,
        spacingPx: A.spacingPx,
        desc: L,
        aspect: A.aspect,
        angle: A.angle,
        stampKind: A.stampKind,
        scatter: A.scatter,
        latitudeCorrection: A.latitudeCorrection
      };
      A.pointCount === 2 ? La(He, A.lastMidX, A.lastMidY, A.prev.x, A.prev.y, A.distSinceStamp) : ol(He, A.pprev, { x: A.lastMidX, y: A.lastMidY }, A.prev, A.prev, A.distSinceStamp);
    }
    X.lassoPreviewActive && (Yt(X.currentStroke), Vs(X.currentStroke.ctx, ae, L), X.lassoPreviewActive = !1);
    const me = we === "mask" ? a.committedMask : X.committedPaint;
    if (he && we === "paint")
      for (const Ne of i.values())
        Ai(Ne.committedPaint.ctx, X.currentStroke.canvas), hn(Ne);
    else if (he)
      Ai(me.ctx, X.currentStroke.canvas);
    else {
      we === "mask" && (a.painted = !0);
      const Ne = Math.max(0, Math.min(1, (A == null ? void 0 : A.strokeOpacity) ?? 1));
      me.ctx.save(), me.ctx.globalAlpha = Ne, me.ctx.drawImage(X.currentStroke.canvas, 0, 0), me.ctx.restore();
    }
    WS() && (String((ae == null ? void 0 : ae.toolKind) || ""), String((L == null ? void 0 : L.kind) || ""), Number((L == null ? void 0 : L.width) || 0), Number((L == null ? void 0 : L.height) || 0), String(((ge = ae == null ? void 0 : ae.targetSpace) == null ? void 0 : ge.viewMode) || ""), Number((ae == null ? void 0 : ae.aspect) ?? 1), _h(X.currentStroke.canvas), _h(me.canvas), void 0), Yt(X.currentStroke), X.activeStroke = null, hn(X), h.clear(), p = null, d = "", P([...i.keys()]);
  }
  function y(ae) {
    if (d === "mask")
      Yt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, hn(a);
    else if (d === "paint" && !p)
      Yt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, hn(s);
    else if (p) {
      const Pe = i.get(p);
      Pe && (Yt(Pe.currentStroke), Pe.activeStroke = null, Pe.lassoPreviewActive = !1, hn(Pe));
    }
    h.clear(), p = null, d = "", P([...i.keys()]);
  }
  function $(ae, Pe) {
    var he;
    if (d = String((ae == null ? void 0 : ae.layerKind) || ""), String(((he = ae == null ? void 0 : ae.geometry) == null ? void 0 : he.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Yt(a.currentStroke), Vs(a.currentStroke.ctx, ae, a.descriptor), a.lassoPreviewActive = !0, hn(a);
      else {
        const X = String((ae == null ? void 0 : ae.toolKind) || "") === "eraser", A = X ? s : S(String((ae == null ? void 0 : ae.actionGroupId) || p || "__default__"));
        p = X ? "" : String((ae == null ? void 0 : ae.actionGroupId) || p || "__default__"), Yt(A.currentStroke), Vs(A.currentStroke.ctx, ae, A.descriptor), A.lassoPreviewActive = !0, hn(A);
      }
      P([...i.keys()]);
    }
  }
  function z(ae) {
    return P(ae ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ee(ae) {
    return i.get(String(ae)) ?? null;
  }
  function ie() {
    return [...i.keys()];
  }
  function j(ae) {
    var Ne;
    const Pe = i.get(String(ae));
    if (!Pe) return null;
    const we = d === "paint" && p === Pe.actionGroupId, he = d === "paint" && ((Ne = p ? i.get(p) : s) == null ? void 0 : Ne.activeStroke) || null, X = !!(he != null && he.isEraser), A = we ? Pe.activeStroke : null;
    if (!X && !A) return Pe.committedPaint.canvas;
    const L = `${Pe.revision}:${s.revision}:${X}`, me = h.get(Pe.actionGroupId);
    if ((me == null ? void 0 : me.key) === L) return me.surface.canvas;
    const ge = li((me == null ? void 0 : me.surface) ?? null, t, r);
    return Yt(ge), ge.ctx.drawImage(Pe.committedPaint.canvas, 0, 0), X ? Ai(ge.ctx, o.canvas) : (ge.ctx.save(), ge.ctx.globalAlpha = Pe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, A.strokeOpacity ?? 1)), ge.ctx.drawImage(o.canvas, 0, 0), ge.ctx.restore()), h.set(Pe.actionGroupId, { key: L, surface: ge }), ge.canvas;
  }
  function H() {
    const ae = d === "mask" ? a.activeStroke : null;
    return !a.painted && (!ae || ae.isEraser) ? null : `${a.revision}:${!!ae}`;
  }
  function U() {
    const ae = H();
    if (ae === null)
      return b = null, null;
    if ((b == null ? void 0 : b.key) === ae) return b.surface.canvas;
    const Pe = li((b == null ? void 0 : b.surface) ?? null, t, r);
    Yt(Pe);
    const we = d === "mask" ? a.activeStroke : null;
    return we != null && we.isEraser ? (Ut = li(Ut, t, r), Yt(Ut), Ut.ctx.drawImage(a.committedMask.canvas, 0, 0), Ai(Ut.ctx, o.canvas), jc(Pe.ctx, Ut.canvas)) : (jc(Pe.ctx, a.committedMask.canvas), we && jc(Pe.ctx, o.canvas)), b = { key: ae, surface: Pe }, Pe.canvas;
  }
  return {
    rebuildCommitted: G,
    beginStroke: F,
    appendStrokePoint: rw,
    updateActiveStroke: $,
    commitActiveStroke: T,
    cancelActiveStroke: y,
    getErpTarget: z,
    ensureTarget: w,
    getGroupTarget: ee,
    getGroupDisplayCanvas: j,
    getMaskDisplayCanvas: U,
    getMaskDisplayRevision: H,
    getAllGroupIds: ie
  };
}
function De(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function zt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Cd(e, t) {
  let r = zt(t) - zt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Mu = 3;
function sa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function al(e, t = 0) {
  const r = sa(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = sa(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = sa(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = sa(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(sa(t) || 0);
}
function Vg(e) {
  if (!(e != null && e.addEventListener)) return () => {
  };
  const t = () => {
    var r;
    return (r = e.focus) == null ? void 0 : r.call(e, { preventScroll: !0 });
  };
  return e.addEventListener("pointerenter", t), () => {
    var r;
    return (r = e.removeEventListener) == null ? void 0 : r.call(e, "pointerenter", t);
  };
}
const Mh = Math.PI / 180, Ph = 0.12, iw = Mu, ow = 35, aw = 140, pa = 100, sw = 20, Nh = 0.8;
function lw(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = De(Number(e || pa), 1, 179) * Mh;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Mh;
}
function Id(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: pa })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function p(G, F = null) {
    s && s(G, F);
  }
  function d(G, F, T = null, y = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(G || 0), l.drag.lastY = Number(F || 0), l.drag.lastTs = Number(y || performance.now()), l.drag.pointerId = T, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], p("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: T }), !0;
  }
  function f(G, F, T = "pano", y = performance.now()) {
    if (!l.drag.active) return !1;
    const $ = Number(y || performance.now()), z = Number(G), ee = Number(F), ie = z - l.drag.lastX, j = ee - l.drag.lastY;
    l.drag.lastX = z, l.drag.lastY = ee, l.drag.lastTs = $;
    const H = n() || { x: 1, y: 1 }, U = Number(H.x || 1), ae = Number(H.y || 1), Pe = { ...t() };
    let we = 0, he = 0;
    if (T === "unwrap") {
      const A = i() || { w: 1, h: 1 }, L = Math.max(1, Number(A.w || 1)), me = Math.max(1, Number(A.h || 1)), ge = ie / L, Ne = j / me;
      we = -ge * 360 * U, he = Ne * 180 * ae;
    } else {
      const A = o() || { w: 0, h: 0 }, L = Math.max(1, Number(A.w || 0)), me = Math.max(1, Number(A.h || 0));
      if (L > 1 && me > 1) {
        const ge = De(Number(Pe.fov || pa), 1, 179), Ne = De(lw(ge, L, me), 0.1, 179);
        we = -(ie / L) * ge * U, he = j / me * Ne * ae;
      } else
        we = -ie * Ph * U, he = j * Ph * ae;
    }
    Pe.yaw = zt(Number(Pe.yaw || 0) + we), Pe.pitch = De(Number(Pe.pitch || 0) + he, -89.9, 89.9), r(Pe), l.velHistory.push({ ts: $, yaw: Pe.yaw, pitch: Pe.pitch });
    let X = 0;
    for (; X < l.velHistory.length - 1 && l.velHistory[X].ts < $ - 100; ) X++;
    return X > 0 && l.velHistory.splice(0, X), l.inertia.active = !1, l.inertia.lastTs = $, a(), p("drag", { phase: "move", dx: ie, dy: j, dYaw: we, dPitch: he }), !0;
  }
  function h(G = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const F = Number(G || performance.now());
    l.drag.lastTs = F;
    const T = l.velHistory.filter(($) => F - $.ts <= 80);
    if (T.length >= 2) {
      const $ = T[0], z = T.at(-1), ee = Math.max(1e-3, (z.ts - $.ts) / 1e3);
      let ie = z.yaw - $.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), l.inertia.vx = ie / ee, l.inertia.vy = (z.pitch - $.pitch) / ee;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const y = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = y > sw, l.inertia.lastTs = F, p("drag", { phase: "end", speed: y, inertiaActive: l.inertia.active }), !0;
  }
  function b(G = performance.now()) {
    if (!l.inertia.active) return !1;
    const F = Number(G || performance.now()), T = Math.max(1e-3, (F - (l.inertia.lastTs || F)) / 1e3);
    l.inertia.lastTs = F;
    const y = { ...t() };
    y.yaw = zt(Number(y.yaw || 0) + l.inertia.vx * T), y.pitch = De(Number(y.pitch || 0) + l.inertia.vy * T, -89.9, 89.9);
    const $ = Math.exp(-5.5 * T);
    return l.inertia.vx *= $, l.inertia.vy *= $, Math.abs(l.inertia.vx) < Nh && Math.abs(l.inertia.vy) < Nh && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(y), a(), l.inertia.active;
  }
  function v() {
    const G = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], G;
  }
  function S(G) {
    const F = Math.sign(Number(G || 0));
    if (!F) return !1;
    const T = { ...t() }, y = Number(T.fov || pa);
    return T.fov = De(y + F * iw, ow, aw), r(T), a(), p("wheel", { deltaSign: F, fovBefore: y, fovAfter: T.fov }), !0;
  }
  function w(G, F = 0) {
    return S(al(G, F));
  }
  function P() {
    r({ yaw: 0, pitch: 0, fov: pa }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: f,
    endDrag: h,
    stepInertia: b,
    stopMotion: v,
    applyWheel: S,
    applyWheelEvent: w,
    resetView: P
  };
}
const Ct = Math.PI / 180, on = 180 / Math.PI;
function er(e, t, r) {
  return { x: e, y: t, z: r };
}
function sl(e, t) {
  return er(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ll(e, t) {
  return er(e.x * t, e.y * t, e.z * t);
}
function Hc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ed(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return er(e.x / t, e.y / t, e.z / t);
}
function In(e, t) {
  const r = e * Ct, n = t * Ct, i = Math.cos(n);
  return er(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function zo(e, t, r = 0) {
  const n = Number(e || 0) * Ct, i = Number(t || 0) * Ct, o = r * Ct, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), p = Math.sin(i), d = Math.cos(o), f = Math.sin(o);
  return {
    right: er(
      a * d - s * p * f,
      l * f,
      -s * d - a * p * f
    ),
    up: er(
      -a * f - s * p * d,
      l * d,
      s * f - a * p * d
    ),
    fwd: er(s * l, p, a * l)
  };
}
function cl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ot(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function cw() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function uw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Ot(n.z_index ?? n.zIndex, t.length);
    t.push({
      id: String(n.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: n.locked === !0
    });
  }
  return t;
}
function dw(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function fw(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Ot(e.t, 0), n = Ot(e.widthScale, null), i = Ot(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Ot(e.u, null), a = Ot(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, a)),
      t: r
    };
    return n != null && (s.widthScale = Math.max(0, n)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = Ot(e.u, null), a = Ot(e.v, null);
    if (o == null || a == null) return null;
    const s = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: a,
      t: r
    };
    return n != null && (s.widthScale = Math.max(0, n)), i != null && (s.pressureLike = Math.max(0, i)), s;
  }
  return null;
}
function Ss(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = fw(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function pw(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Ss(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Ss(e.points, t, 1);
  if (!o) return null;
  const a = Ss(e.rawPoints, t, 1), s = Ss(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function hw(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = dw(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = pw(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Ot(e.size, null), a = Ot(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const p = Ot(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let f = null;
  if (t === "paint") {
    const h = e.color;
    if (!h || typeof h != "object") return null;
    f = {
      r: Math.max(0, Math.min(1, Ot(h.r, 0))),
      g: Math.max(0, Math.min(1, Ot(h.g, 0))),
      b: Math.max(0, Math.min(1, Ot(h.b, 0))),
      a: Math.max(0, Math.min(1, Ot(h.a, 1)))
    };
  }
  return {
    id: s,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, a)),
    hardness: Ot(e.hardness, null),
    flow: Ot(e.flow, null),
    spacing: Ot(e.spacing, null),
    createdAt: Math.trunc(Ot(e.createdAt, 0)),
    color: f,
    radiusModel: d,
    radiusValue: p == null ? null : Math.max(0, p),
    geometry: i
  };
}
function Ah(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = hw(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function mw(e) {
  if (!e || typeof e != "object") return null;
  const t = Ot(e.u0, null), r = Ot(e.v0, null), n = Ot(e.u1, null), i = Ot(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function gw(e) {
  const t = e || {};
  return {
    du: Ot(t.du, 0) ?? 0,
    dv: Ot(t.dv, 0) ?? 0,
    rot_deg: Ot(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ot(t.scale, 1) ?? 1)
  };
}
function yw(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = mw(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Ot(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: gw(e.transform)
  } : null;
}
function bw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = yw(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function Do(e) {
  const t = cw();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: uw(e.groups),
    paint: Ah(e.paint, "paint"),
    mask: Ah(e.mask, "mask"),
    raster_objects: bw(e.raster_objects)
  };
}
const nr = 1, rr = 179, Pu = 85;
function Bl(e) {
  const t = ((ut(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function $g(e, t) {
  let r = ut(e, 0) - ut(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function zg(e, t, { shiftKey: r = !1 } = {}) {
  let n = ut(e, 0) + ut(t, 0) * on;
  return r && (n = Math.round(n / 15) * 15), Bl(n);
}
function ut(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function pi(e = {}) {
  const t = De(ut(e.hFOV_deg || 90, 90), nr, rr), r = De(ut(e.vFOV_deg || 60, 60), nr, rr), n = Math.tan(t * Ct * 0.5), i = Math.tan(r * Ct * 0.5);
  return {
    yawDeg: ut(e.yaw_deg, 0),
    pitchDeg: ut(e.pitch_deg, 0),
    rollDeg: ut(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Gi(e, t) {
  const r = Math.max(1, ut((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ut((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = pi(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Od(e, t) {
  const r = Math.max(1, ut((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ut((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ut(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Fd(e, t) {
  const r = Math.max(1e-12, ut(t, 1)), n = Math.max(1e-6, ut((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ut((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = De(2 * Math.atan(n / (2 * r)) * on, nr, rr), a = De(2 * Math.atan(i / (2 * r)) * on, nr, rr);
  return { hFOV_deg: o, vFOV_deg: a };
}
function vw(e, t, r) {
  const n = ut(e == null ? void 0 : e.x, 0), i = ut(e == null ? void 0 : e.y, 0), o = Math.max(1, ut((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, ut((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = pi(t), l = Math.max(1e-12, ut(r, 1)), p = 2 * l * s.tanHalfX, d = 2 * l * s.tanHalfY;
  return {
    x: n + (o - p) * 0.5,
    y: i + (a - d) * 0.5,
    w: p,
    h: d,
    focalPx: l
  };
}
function Td(e, t, r = Pu) {
  const n = Math.max(1e-12, ut(t, 1)), i = De(ut(r, Pu), 1, 89.999), o = n * Math.tan(i * Ct), a = Math.max(1, ut((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, ut((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function jg(e, t, r) {
  const n = Math.max(1e-12, ut(t, 1));
  return {
    x: (ut(r == null ? void 0 : r.x, 0) - ut(e == null ? void 0 : e.x, 0)) / n,
    y: -(ut(r == null ? void 0 : r.y, 0) - ut(e == null ? void 0 : e.y, 0)) / n
  };
}
function _w(e, t) {
  const r = De(ut(e, 90), nr, rr), n = Math.max(1e-6, ut(t, 1));
  return De(
    2 * Math.atan(Math.tan(r * Ct * 0.5) / n) * on,
    nr,
    rr
  );
}
function $s(e, t) {
  const r = De(ut(e, 60), nr, rr), n = Math.max(1e-6, ut(t, 1));
  return De(
    2 * Math.atan(Math.tan(r * Ct * 0.5) * n) * on,
    nr,
    rr
  );
}
function Ch(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Sw(e, t) {
  const r = Ch(e, 1), n = Ch(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (p, d) => d ? s(d, p % d) : p, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function Yi(e) {
  const t = De(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Ct, r = De(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Ct;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Li(e) {
  const t = Yi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Sw(t, 1);
}
function Dd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Li(t), t;
}
function Hg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? De(a, nr, rr) : De(Math.min(42, ut(i, 100) * 0.42), 8, 96);
  return Dd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ut(t, 0),
    pitch_deg: De(ut(r, 0), -89.9, 89.9),
    roll_deg: Bl(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Br(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Li(e);
}
function Gg(e, t) {
  const r = pi(e), n = ut(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * on, o = 2 * Math.atan(r.tanHalfY * n) * on;
  return i < nr || i > rr || o < nr || o > rr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Wg(e, t, r = Mu) {
  const n = Math.sign(ut(t, 0)), i = Math.abs(ut(r, Mu));
  if (!n || !(i > 0)) return null;
  const o = pi(e), a = o.hFovDeg + n * i;
  if (a < nr || a > rr) return null;
  const s = Math.tan(a * Ct * 0.5);
  return Gg(e, s / o.tanHalfX);
}
function Kg(e, t) {
  const r = pi(e), n = zo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ut(t == null ? void 0 : t.x, 0), o = ut(t == null ? void 0 : t.y, 0);
  return Ed(sl(sl(n.fwd, ll(n.right, i)), ll(n.up, o)));
}
function ww(e) {
  return er(e.x, e.y, -e.z);
}
function zs(e) {
  return er(e.x, e.y, -e.z);
}
function Tn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = zo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Bg(e) {
  const t = zs(er(e[0][0], e[1][0], e[2][0])), r = zs(er(e[0][1], e[1][1], e[2][1])), n = zs(er(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * on, pitchDeg: o * on, rollDeg: l * on };
}
function Ra(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function qi(e) {
  const [[t, r, n], [i, o, a], [s, l, p]] = e, d = t + o + p;
  if (d > 0) {
    const h = 0.5 / Math.sqrt(d + 1);
    return { x: (l - a) * h, y: (n - s) * h, z: (i - r) * h, w: 0.25 / h };
  }
  if (t > o && t > p) {
    const h = 2 * Math.sqrt(1 + t - o - p);
    return { x: 0.25 * h, y: (r + i) / h, z: (n + s) / h, w: (l - a) / h };
  }
  if (o > p) {
    const h = 2 * Math.sqrt(1 + o - t - p);
    return { x: (r + i) / h, y: 0.25 * h, z: (a + l) / h, w: (n - s) / h };
  }
  const f = 2 * Math.sqrt(1 + p - t - o);
  return { x: (n + s) / f, y: (a + l) / f, z: 0.25 * f, w: (i - r) / f };
}
function ws(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ri = 1e-6, Nu = 1e-6, xw = 1e-9;
function Va(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function kw(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const p = 0.5 * (a + s);
    Va(0, r, i, 1, p) < t ? a = p : s = p;
  }
  return Va(0, n, o, 1, 0.5 * (a + s));
}
function Lo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ro(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((h) => -h / i), s = n.map((h) => h / o);
  if (a.reduce((h, b, v) => h + b * s[v], 0) < 0) return r.map(() => 0);
  const l = a.map((h, b) => (h * o + s[b] * i) / (i + o)), p = (h) => Math.sqrt(h.reduce((b, v) => b + v * v, 0)), d = 3 * Math.min(p(a), p(s)), f = p(l);
  return f <= d ? l : l.map((h) => h * d / f);
}
function Ug(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((d, f) => o[f] - d);
  let l = s;
  Lo(e, n) && (l = Ro(t, n, r[n - 1].map((d, f) => d - i[f]), s).map((d) => d * a));
  let p = s;
  return Lo(e, n + 1) && (p = Ro(t, n + 1, s.map((d) => -d), r[n + 2].map((d, f) => d - o[f])).map((d) => d * a)), [l.map((d) => d / 3), p.map((d) => -d / 3)];
}
function Yg(e, t, r, n, i) {
  const [[o], [a]] = Ug(e, t, r.map((s) => [s]), n);
  return Va(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function Mw(e, t, r, n) {
  var p, d;
  const i = e.map((f) => f.value);
  let [o, a] = Ug(e, t, i, r);
  o = ((p = e[r].handles) == null ? void 0 : p.out) ?? o, a = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((f) => Va(s[f], s[f] + o[f], l[f] + a[f], l[f], n));
}
function ul([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function Pw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Gc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Nw([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Au(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function So(e, t) {
  return Nw(ul([-e[0], -e[1], -e[2], e[3]], t));
}
function Wc(e, t, r) {
  return ul(e, Au(So(e, t).map((n) => r * n)));
}
function Kc(e, t) {
  const r = Pw(e, t);
  if (Math.abs(r) > Nu) return r < 0;
  const [n, i, o] = So(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > Nu) return a < 0;
  return !1;
}
function xs(e) {
  const { x: t, y: r, z: n, w: i } = qi(Tn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Cu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Aw(e, t, r, n) {
  const i = xs(e[r].value);
  let o = xs(e[r + 1].value);
  Kc(i, o) && (o = Gc(o));
  const a = t[r + 1] - t[r], s = So(i, o);
  let l = s;
  if (Lo(e, r)) {
    let y = xs(e[r - 1].value);
    Kc(y, i) && (y = Gc(y)), l = Ro(t, r, So(i, y), s).map(($) => $ * a);
  }
  let p = s;
  if (Lo(e, r + 1)) {
    let y = xs(e[r + 2].value);
    Kc(o, y) && (y = Gc(y)), p = Ro(t, r + 1, So(o, i), So(o, y)).map(($) => $ * a);
  }
  const d = ul(i, Au(l.map((y, $) => 0.5 * (y - s[$])))), f = ul(o, Au(s.map((y, $) => 0.5 * (y - p[$])))), [h, b, v, S] = Wc(Wc(i, o, n), Wc(d, f, n), 2 * n * (1 - n)), { yawDeg: w, pitchDeg: P, rollDeg: G } = Bg(Ra({ x: h, y: b, z: v, w: S })), F = e[r].value, T = e[r + 1].value;
  return {
    yaw_deg: Cu(w, F.yaw_deg, T.yaw_deg, n),
    pitch_deg: P,
    roll_deg: Cu(G, F.roll_deg, T.roll_deg, n)
  };
}
function $a(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function dl(e) {
  return Math.sqrt($a(e, e));
}
function fl(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function qg(e, t) {
  const r = $a(e, t), n = t.map((a, s) => a - r * e[s]), i = dl(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function go(e, t) {
  const r = dl(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ks(e, t, r) {
  return go(e, qg(e, t).map((n) => r * n));
}
function Bc(e, t) {
  const r = fl(e[t].value), n = fl(e[t + 1].value), i = $a(r, n), o = i < 0 && dl(n.map((l, p) => l - i * r[p])) <= Nu;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = qg(r, n);
  const s = dl(a);
  return [a, a.map((l, p) => Math.cos(s) * l - s * Math.sin(s) * r[p]), o];
}
function Cw(e, t, r, n) {
  const i = fl(e[r].value), o = fl(e[r + 1].value), [a, s, l] = Bc(e, r);
  let p = a, d = s;
  const f = t[r + 1] - t[r];
  Lo(e, r) && (p = Ro(t, r, Bc(e, r - 1)[1].map((F) => -F), p).map((F) => F * f)), Lo(e, r + 1) && (d = Ro(t, r + 1, d.map((F) => -F), Bc(e, r + 1)[0]).map((F) => F * f));
  let h, b, v;
  if (l) {
    const F = Math.PI, T = Va(0, $a(p, a) / F / 3, F - $a(d, s) / F / 3, F, n);
    [h, b, v] = go(i, a.map((y) => T * y / F));
  } else {
    const F = ks(go(i, p.map(($) => $ / 3)), go(o, d.map(($) => -$ / 3)), n), T = ks(go(i, p.map(($) => n * $ / 3)), F, n), y = ks(F, go(o, d.map(($) => -(1 - n) * $ / 3)), n);
    [h, b, v] = ks(T, y, n);
  }
  const S = Math.hypot(h, v), w = e[r].value.yaw_deg, P = e[r + 1].value.yaw_deg;
  return { yaw_deg: S <= xw ? w + (P - w) * n : Cu(Math.atan2(h, v) * 180 / Math.PI, w, P, n), pitch_deg: Math.atan2(b, S) * 180 / Math.PI };
}
function Iw(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Yg(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function Ew(e, t, r, n) {
  return Yg(e, t, e.map((i) => i.value), r, n);
}
const Ow = { position: Mw, rotation: Aw, direction: Cw, size: Iw };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return ws(e[t].value);
  if (r <= n[0].frame + Ri) return ws(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ri) return ws(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ri; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= Ri || a.easing === "hold") return ws(a.value);
  const s = n.map((p) => p.frame), l = kw(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (Ow[t] ?? Ew)(n, s, o, l);
}
function Iu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Fw(e) {
  return Math.min(1, Math.max(0, e));
}
function Xg(e) {
  return Math.max(1e-6, e);
}
function Jg(e, t) {
  return t - (e.start - e.in);
}
function jo(e, t) {
  return t >= e.start - Ri && (e.duration === null || t < e.start + e.duration - Ri);
}
function Ld(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: Iu(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Ul(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Jg(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Ld(n, r),
    scene: {
      active: i.visible && jo(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: Xg(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => Bi(a, r))
  };
}
function Tw(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: Xg(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: Iu(r.hFOV_deg),
    vFOV_deg: Iu(r.vFOV_deg)
  };
}
function Bi(e, t) {
  const r = Jg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && jo(e.clip, t),
    clip_frame: r,
    ...Tw(e, r),
    opacity: Fw(Wt(e, "opacity", r))
  };
}
const Dw = 2, Lw = ["sky", "world"], Eu = ["perspective", "erp"], Rw = ["input", "output", "temp"], Zg = [0.42, 0, 0.58, 1], Qg = 1, Rd = 1e3, Ou = 1e7, Vd = Ou;
function sn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Jt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function $d(e, t) {
  const r = Jt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Fn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Yl(e) {
  const t = Jt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function js(e) {
  const t = Yl(e);
  return t === null ? null : Fn(t, -Ou, Ou);
}
function Ho(e) {
  const t = $d(e, null);
  return t === null ? null : Fn(t, Qg, Rd);
}
function e0(e) {
  const t = Yl(e);
  return t !== null && t >= 1 ? Math.min(t, Vd) : null;
}
function za(e, t) {
  return typeof e == "boolean" ? e : t;
}
function t0(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Jt(r, null));
  return t.includes(null) ? null : t;
}
function n0(e) {
  return t0(e) || [0, 0, 0];
}
function r0(e) {
  const t = sn(e) ? e : {};
  return {
    yaw_deg: Jt(t.yaw_deg, 0),
    pitch_deg: Fn(Jt(t.pitch_deg, 0), -90, 90),
    roll_deg: Jt(t.roll_deg, 0)
  };
}
function Vw(e) {
  return Fn(Jt(e, 90), 0.1, 179);
}
function $w(e) {
  return $d(e, 1);
}
function zw(e) {
  const t = sn(e) ? e : {};
  return {
    yaw_deg: Jt(t.yaw_deg, 0),
    pitch_deg: Fn(Jt(t.pitch_deg, 0), -90, 90)
  };
}
function jw(e) {
  return Jt(e, 0);
}
function Hw(e) {
  const t = sn(e) ? e : {};
  return {
    hFOV_deg: Fn(Jt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Fn(Jt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function i0(e) {
  return Fn(Jt(e, 1), 0, 1);
}
const zd = [["position", n0], ["rotation", r0], ["fov", Vw]], ql = [["position", n0], ["rotation", r0], ["scale", $w]], jd = [["direction", zw], ["roll", jw], ["size", Hw], ["opacity", i0]], Hd = [...ql, ["opacity", i0]];
function Gw(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Jt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Zg];
}
function Ww(e) {
  if (!sn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = t0(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function Kw(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!sn(i)) continue;
    const o = js(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: Gw(i.easing) }, s = r ? Ww(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Gd(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = sn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: Kw(o.keyframes, i, n === "position") };
  }
  return r;
}
function o0(e) {
  const t = sn(e) ? e : {}, r = js(t.start), n = js(t.in), i = js(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Bw(e) {
  const t = sn(e) ? e : {}, r = Fn(Jt(t.x0, 0), 0, 1), n = Fn(Jt(t.y0, 0), 0, 1), i = Fn(Jt(t.x1, 1), 0, 1), o = Fn(Jt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function Uw(e) {
  if (!sn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Rw.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Yw(e) {
  const t = Uw(e.source);
  if (!t) return null;
  const r = Lw.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: o0(e.clip),
    visible: za(e.visible, !0),
    locked: za(e.locked, !1),
    crop: Bw(e.crop),
    ...Gd(e, n ? Hd : jd)
  };
  return n || (i.z_index = Yl(e.z_index) ?? 0), i;
}
function qw(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = sn(o) ? Yw(o) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (r) continue;
        r = !0;
      }
      t.push(a);
    }
  }
  const n = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !n.has(o.id) ? n.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; n.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, n.add(o.id);
    }
  return t;
}
function a0(e) {
  if (!sn(e)) return null;
  const t = Eu.includes(e.projection) ? e.projection : Eu[0];
  return { aspect: $d(e.aspect, 1), projection: t, visible: za(e.visible, !0), ...Gd(e, zd) };
}
function Wd() {
  return a0({});
}
function pl(e) {
  const t = sn(e.timeline) ? e.timeline : {}, r = sn(e.scene) ? e.scene : {};
  return {
    version: Dw,
    timeline: {
      fps: Ho(t.fps) ?? 24,
      length: e0(t.length)
    },
    camera: a0(e.camera),
    scene: { clip: o0(r.clip), visible: za(r.visible, !0), ...Gd(r, ql) },
    stickers: qw(e.stickers),
    painting: Do(e.painting),
    painting_layer: sn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: za(e.painting_visible, !0)
  };
}
function Xw(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!sn(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function Jw(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!sn(t)) return null;
  const r = Fn(Jt(t.hFOV_deg, 90), 1, 179), n = Fn(Jt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Zw(e) {
  const t = sn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(sn) : [];
  return r.sort((n, i) => Jt(n.z_index, 0) - Jt(i.z_index, 0)), pl({
    camera: Jw(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: Xw(n, t),
      visible: n.visible,
      locked: n.locked,
      crop: n.crop,
      z_index: n.z_index,
      direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg } },
      roll: { value: n.rot_deg },
      size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Cr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return pl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!sn(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? Zw(t) : pl(t);
}
const Uc = {
  state: { painting_visible: !0 },
  camera: { projection: Eu[0], visible: !0 },
  scene: { visible: !0 }
};
function Yc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Fu(e) {
  return JSON.stringify({
    ...Yc(e, Uc.state),
    camera: e.camera && Yc(e.camera, Uc.camera),
    scene: Yc(e.scene, Uc.scene)
  });
}
function qc(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function Ih(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function ja(e, t) {
  const r = Ho(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => Yl(s * n), { length: o } = e.timeline, a = Ih(e.scene.clip, i);
  return pl({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...qc(e.camera, zd, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...qc(e.scene, ql, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: p, newAnchor: d } = Ih(s.clip, i), f = s.placement === "world" ? Hd : jd;
      return { ...s, clip: l, ...qc(s, f, i, p, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Xc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function s0(e) {
  return Array.isArray(e) ? [...e] : e;
}
function l0(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ri);
}
function c0(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? s0(e.keyframes[n - 1].easing) : [...Zg];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function yn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Xc(i.value, n);
    return;
  }
  const o = l0(i, r);
  o ? o.value = Xc(o.value, n) : c0(i, r, Xc(Wt(e, t, r), n));
}
function Go(e) {
  return e.placement === "world" ? Hd.map(([t]) => t) : e.placement === "sky" ? jd.map(([t]) => t) : (e.clip ? ql : zd).map(([t]) => t);
}
function Qw(e, t) {
  for (const r of Go(e))
    l0(e[r], t) || c0(e[r], t, Wt(e, r, t));
}
function ex(e) {
  const t = Go(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Jc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function tx(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function nx(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Wt(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function rx(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), p = new Set(l.map((d) => d.frame));
    s.keyframes = [
      ...s.keyframes.filter((d) => !o.has(d.frame) && !p.has(d.frame)),
      ...l
    ].sort((d, f) => d.frame - f.frame);
  }
  return n;
}
function u0(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function ix(e, t, r) {
  const n = u0(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function ox(e, t, r, n) {
  for (const i of u0(e, t, r)) i.easing = s0(n);
}
function ax(e, t) {
  e.start = Math.max(0, e.start + t);
}
function sx(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function lx(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function cx(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function hl(e) {
  return Go(e).map((t) => e[t]);
}
function ux(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? hl(e.camera).some((n) => n.keyframes.length > 0) : d0(e, { camera: r });
}
function ml(e) {
  return hl(e).some((t) => t.keyframes.length > 0) || !!e.clip && !cx(e.clip);
}
function d0(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(ml);
}
const dx = 1e5;
function f0(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of hl(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of hl(a))
      for (const p of l.keyframes) o = Math.max(o, s.start - s.in + p.frame + 1);
  }
  return Number.isFinite(o) ? o : dx;
}
function fx(e) {
  return e > 0 ? Ho(Math.min(e, Rd)) : null;
}
function px(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : e0(Math.max(1, Math.min(e, Vd)));
}
const Zc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], hx = 2e3;
function mx(e, t, r = 56) {
  const n = Zc.find((o) => o * t >= r) || Zc[Zc.length - 1], i = [];
  for (let o = 0; o < e && i.length < hx; o += n) i.push(o);
  return i;
}
function gx(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Ms = { text: null, parsed: null };
function En(e) {
  return Number(e) === 180 ? 180 : 360;
}
function gl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function yx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: En(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Do(null),
    painting_layer: null,
    ui_settings: gl(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function p0(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function bx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function vx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function _x(e) {
  return Array.isArray(e) ? e.map((t) => Dd(t)) : [];
}
function Sx(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function h0(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = yx(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Ms.text === i ? o = Ms.parsed : (o = JSON.parse(i), Ms = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: bx(o.assets),
      stickers: vx(o.stickers),
      shots: _x(o.shots),
      painting: Do(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: gl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = gl({ ...s.ui_settings, ...a })), s.output_preset = p0(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = En(r.coverage), delete s.editor_history, s;
  } catch {
    return Ms = { text: i, parsed: null }, n;
  }
}
function wx(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function xx(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function kx(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function m0(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, p = Ho(t.fps);
  let d;
  try {
    d = Cr(e);
  } catch {
    d = Cr(null);
  }
  p && p !== d.timeline.fps && (d = ja(d, p));
  const f = l && d.camera === null;
  if (f && (d = { ...d, camera: Wd() }), s) {
    let h = Cr(s);
    p && p !== h.timeline.fps && (h = ja(h, p)), d = { ...h, camera: d.camera, cutout_state: d };
  }
  return {
    ...d,
    ...f ? { default_camera: !0 } : {},
    coverage: En(i),
    bg_color: n,
    output_preset: p0(r),
    ui_settings: gl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function Mx(e, t) {
  e.cutout_state && (e.cutout_state = ja(e.cutout_state, t));
  const r = ja(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of Go(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Kd(e, t) {
  const r = Bi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const Px = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Eh(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function Nx(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Px[r]].keyframes.length));
}
function g0(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Eh(r, ["yaw_deg", "pitch_deg"]), o = Eh(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && yn(e, "direction", n, i), r.rot_deg !== void 0 && yn(e, "roll", n, r.rot_deg), Object.keys(o).length && yn(e, "size", n, o);
}
const Xl = ["position_x", "position_y", "position_z"], Jl = "camera";
function Oh(e, t) {
  const r = Ld(e, t);
  return Dd({
    id: Jl,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: _w(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function Ax(e) {
  return Cr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: zt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Cx(e) {
  return e - 360 * Math.round(e / 360);
}
function Ix(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + Cx(r[o] - n[o]));
  Object.keys(i).length && yn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && yn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * Ct * 0.5) / Math.tan(r.vFOV_deg * Ct * 0.5)), r.position.some((o, a) => o !== n.position[a]) && yn(e, "position", t, [...r.position]);
}
function Ex(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Xl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function Ox(e, t, r, n) {
  const i = Xl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, yn(e, "position", t, o);
  } else r === "hFOV_deg" ? yn(e, "fov", t, n) : yn(e, "rotation", t, { [r]: n });
}
function Fx(e, t, r) {
  yn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function Tx(e, t) {
  const r = Bi(e, t);
  return {
    ...Object.fromEntries(Xl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function Dx(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Xl.indexOf(r);
  if (o >= 0) {
    const a = Wt(e, "position", i);
    a[o] = n, yn(e, "position", i, a);
  } else r === "scale" ? yn(e, "scale", i, n) : r === "opacity" ? yn(e, "opacity", i, n / 100) : yn(e, "rotation", i, { [r]: n });
}
function Lx(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && yn(e, i, n, r[i]);
}
function Rx(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function Vx(e, t, r) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...r.position], keyframes: [] },
    rotation: { value: { ...r.rotation }, keyframes: [] },
    scale: { value: r.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function Hs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function y0(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Bd(e, t, r, n) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg }, keyframes: [] },
    roll: { value: r.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: n
  };
}
function $x(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = zt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Tu(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function b0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function v0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function _0(e) {
  e.default_camera && JSON.stringify(Cr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Wd()) && delete e.default_camera;
}
function S0(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = Cr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Wd()) && (r.camera = null), Fu(r);
}
function w0(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Cr(r);
    if (Fu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Fu(ja(i, o)) === t;
  } catch {
    return !1;
  }
}
const Qc = 0.15, zx = 0.01, jx = 1e-3, Hx = 0.05, Gx = 4, Fh = 250, Wx = 16, dr = 1, Kx = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Gn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Ir(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Zl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Wo(e, t, r = 0) {
  const n = Tn(e, t, r), i = Ir(n, 2);
  return { right: Ir(n, 0), up: Ir(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function Bx(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Du(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function Ux(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Du(e, "3dof", r);
}
function Yx(e) {
  return Wo(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function qx(e) {
  return Gn(e.position, Wo(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function hi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Na(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ud(e, t) {
  return Na(hi(t, e.position), Wo(e.yaw_deg, e.pitch_deg).forward);
}
function Yd(e) {
  return Math.max(e, 1e-6) * Hx;
}
function Lu(e, t, r = null, n = dr) {
  if (t) return t;
  const i = Yd(n);
  if (r && Ud(e, r) > 0) {
    const o = hi(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Gn(e.position, o, i / a);
  }
  return Gn(e.position, Wo(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function x0(e, t = dr) {
  return Math.max(e.distance, Yd(t));
}
function k0(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Gx ? !1 : t.time - e.time < Fh || e.cost > Wx && t.time - e.wheelTime < Fh;
}
function qd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * Ct);
  return { tanX: n, tanY: n * r / t };
}
function Th(e, t, r, n, i = qx(e)) {
  const o = e.roll_deg ?? 0, [a, s] = Xx(t, r, o), l = zt(e.yaw_deg + a / n * 360), p = De(e.pitch_deg - s / n * 360, -89.9, 89.9), d = Tn(e.yaw_deg, e.pitch_deg, o), f = Tn(l, p, o), h = hi(e.position, i), b = [0, 1, 2].map((S) => Na(Ir(d, S), h)), v = { ...e, yaw_deg: l, pitch_deg: p, position: Gn(i, Zl(f, b)) };
  return { ...v, distance: Ud(v, i) };
}
function Xx(e, t, r) {
  const n = Math.cos(r * Ct), i = Math.sin(r * Ct);
  return [e * n + t * i, t * n - e * i];
}
function Dh(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = Yx(e), l = 2 * o * qd(e, n, i).tanY / i;
  return { ...e, position: Gn(Gn(e.position, a, -t * l), s, r * l), distance: o };
}
function M0(e, t, r, n = dr) {
  const i = hi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * zx, l = r > 0 ? Math.min(Math.max(o * Qc, s), o - a * jx) : -Math.max(o * Qc / (1 - Qc), s);
  if (r > 0 && l <= 0) return e;
  const p = { ...e, position: Gn(e.position, i, l / o) };
  return { ...p, distance: Math.max(Ud(p, t), Yd(n)) };
}
function P0(e, t, r, n) {
  const { tanX: i, tanY: o } = qd(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = Wo(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Gn(t.center, l, -s), distance: s };
}
function Xd(e, t, r, n = null) {
  return N0({
    quaternion: qi(Tn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(qd(e, t, r).tanY) * on,
    aspect: t / r
  }, e.position, e.distance, n);
}
function N0(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: dr }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function Ha(e, t, r, n) {
  const { right: i, up: o, forward: a } = A0(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const p = Math.tan(e.fovY_deg * 0.5 * Ct), d = p * e.aspect, f = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], h = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + f / l / d), y: n * 0.5 * (1 - h / l / p), z: l };
}
function A0(e) {
  const t = Ra(e.quaternion), r = Ir(t, 2);
  return { right: Ir(t, 0), up: Ir(t, 1), forward: r.map((n) => -n) };
}
function Lh(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function Jx({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function C0(e, t) {
  if (!e || !t.active) return null;
  const r = ek(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Ru(t),
    itemQuaternion: e.kind === "splat" ? Kx : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Zx(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = C0(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function Qx(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function ek(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Ru(e) {
  return {
    position: [...e.position],
    quaternion: qi(Tn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Vu(e, t) {
  return Gn(e.position, Zl(Tn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function $u(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function zu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function ju(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function tk(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...zu(t).map((o) => Vu(e.scene, o)));
  for (const o of r) i.push(...Jd(o));
  for (const { box: o, value: a } of n) i.push(...zu(o).map((s) => Vu(a, s)));
  return i;
}
function nk(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: qi(Tn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Tn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Jd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Gn(e.position, Zl(e.rotation, [n, i, 0])));
}
function rk(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? ju(Jd(i)) : o != null && o.box ? ju(zu($u(o.kind, o.box)).map((a) => Vu(n, a))) : { center: [...n.position], radius: n.scale };
}
const ik = 2, ok = 0.5, ak = 30;
function I0(e, t) {
  const r = hi(t, e), n = Math.atan2(r[0], -r[2]) * on, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * on;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function sk(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * ok : ik, o = t ? [...t] : Gn(e.position, Wo(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...hi(o, e.position)), s = a > 0 ? I0(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(ak * 0.5 * Ct);
  return { position: o, rotation: s, scale: l };
}
function Rh(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function lk(e) {
  return [0, 1, 2].map((t) => Ir(e, t));
}
function Vh(e, t, r, n) {
  if (e === "translate") return { position: Gn(t.position, hi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * pk(r.scale, n.scale) / r.scale };
  const i = Rh(Ra(n.quaternion), lk(Ra(r.quaternion))), o = Rh(i, Tn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = Bg(o);
  return Math.abs(s) <= ck ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: uk(o, t.yaw_deg) } };
}
const ck = 89.9;
function uk(e, t) {
  const r = Ir(e, 0), n = Ir(e, 1), i = Math.cos(t * Ct), o = Math.sin(t * Ct);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * on + 0;
}
const dk = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function fk(e, t, r, n, i) {
  if (!Ha(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = A0(e), l = hi(t, e.position), p = Na(l, o), d = Na(l, a), f = Na(l, s), h = Math.tan(e.fovY_deg * 0.5 * Ct), b = h * e.aspect, v = Math.hypot(p, d, f) * dk[r] * Math.min(1.9 * h, 7) / 4;
  if (!(f > v)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const S = (T) => {
    const y = v * Math.sqrt(T * T + f * f - v * v);
    return [(T * f - y) / (f * f - v * v), (T * f + y) / (f * f - v * v)];
  }, [w, P] = S(p), [G, F] = S(d);
  return {
    minX: n * 0.5 * (1 + w / b),
    maxX: n * 0.5 * (1 + P / b),
    minY: i * 0.5 * (1 - F / h),
    maxY: i * 0.5 * (1 - G / h)
  };
}
function pk(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function hk(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function E0(e, t) {
  const r = Tn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * Ct) * t, i = n / e.aspect, o = (p, d, f) => Gn(e.position, Zl(r, [p, d, f])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((p) => [e.position, p]);
  a.forEach((p, d) => s.push([p, a[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function mk(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = Ha(e, a, n, i), p = Ha(e, s, n, i);
    if (!l || !p) return !1;
    const d = p.x - l.x, f = p.y - l.y, h = De(((r.x - l.x) * d + (r.y - l.y) * f) / Math.max(d * d + f * f, 1e-12), 0, 1);
    return Math.hypot(l.x + d * h - r.x, l.y + f * h - r.y) <= o;
  });
}
function gk(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function yk(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function bk(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const O0 = 0.28;
function F0(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * Ct);
  return {
    quaternion: qi(Tn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * on,
    aspect: n
  };
}
function Aa(e) {
  const t = pi(e);
  return {
    quaternion: qi(Tn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function T0(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Td(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * on,
      vFOV_deg: 2 * Math.atan(o / n) * on
    }
  };
}
function D0(e, t, r) {
  const [[n, i, o], [a, s, l], [p, d, f]] = Ra(e.quaternion), h = Math.tan(e.fovY_deg * 0.5 * Ct), b = h * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(v, S = 1e-4) {
      const w = ww(v), P = n * w.x + a * w.y + p * w.z, G = i * w.x + s * w.y + d * w.z, F = -(o * w.x + l * w.y + f * w.z), T = Math.max(F, S);
      return {
        x: t * 0.5 * (1 + P / T / b),
        y: r * 0.5 * (1 - G / T / h),
        z: F
      };
    },
    // The unit direction seen at the point (x, y).
    ray(v, S) {
      const w = (v / t * 2 - 1) * b, P = (1 - S / r * 2) * h;
      return Ed(zs({
        x: n * w + i * P - o,
        y: a * w + s * P - l,
        z: p * w + d * P - f
      }));
    }
  };
}
function vk(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Ul(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const p = o.stickers[l];
    if (s.placement !== "sky") return;
    const d = s.source.kind === "port" && !s.visible;
    if (!p.active && !d) return;
    const f = r(s);
    if (!f) return;
    const h = Math.tan(p.hFOV_deg * 0.5 * Ct), b = Math.tan(p.vFOV_deg * 0.5 * Ct), { crop: v } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: f.media,
      revision: f.revision,
      source: f.source,
      opacity: d ? O0 : p.opacity,
      zIndex: n(s),
      quaternion: qi(Tn(p.yaw_deg, p.pitch_deg, p.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * v.x0 - 1) * h,
        x1: (2 * v.x1 - 1) * h,
        y0: (1 - 2 * v.y1) * b,
        y1: (1 - 2 * v.y0) * b
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function L0(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return vk(e, t, {
    media: (s) => {
      const l = a.get(s.id);
      return l ? n(l) : null;
    },
    zIndex: (s) => {
      var l;
      return Number(((l = a.get(s.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function _k(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Sk(e, t, r, { media: n, evaluated: i = Ul(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const p = i.stickers[l];
    if (s.placement !== "world" || !p.active) return;
    const d = o.get(s.id), f = d ? n(d) : null;
    if (!f) return;
    const { width: h, height: b } = _k(f.media), v = nk(p, s.crop, h, b);
    v && a.push({
      id: s.id,
      media: f.media,
      revision: f.revision,
      source: f.source,
      opacity: p.opacity,
      position: v.position,
      quaternion: v.quaternion,
      rotation: v.rotation,
      width: v.width,
      height: v.height,
      crop: s.crop
    });
  }), a;
}
function wk({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, l = !1, p = 0;
  const d = () => {
    s = Lg(a.createThreeView({ onUpdate: n, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(v) {
      return s && !f.lost ? s.render(v) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(v) {
      return s && !f.lost ? s.renderUnwrap(v) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(v, S) {
      return s && !f.lost ? s.resize(v, S) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(v, S) {
      s && !f.lost && s.clear(v, S);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(v) {
      return s ? s.sceneBox(v) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(v, S, w, P, G) {
      return s && !f.lost ? s.pick(v, S, w, P, G) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(v, S, w, P, G) {
      return s && !f.lost ? s.pickSurface(v, S, w, P, G) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(v, S, w, P, G) {
      return s && !f.lost ? s.pickSticker(v, S, w, P, G) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(v, S, w, P, G, F) {
      return s && !f.lost ? s.gizmoPointer(v, S, w, P, G, F) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return p + (s ? s.contentRevision() : 0);
    },
    dispose() {
      l = !0, e.removeEventListener("webglcontextlost", h), e.removeEventListener("webglcontextrestored", b), s == null || s.dispose(), s = null;
    }
  };
  function h(v) {
    v.preventDefault(), !(l || f.lost) && (f.lost = !0, f.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function b() {
    l || !f.lost || queueMicrotask(() => {
      l || !f.lost || (s && (p += s.contentRevision() + 1), s == null || s.dispose(), s = null, f.lost = !1, a && (d(), f.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", h), e.addEventListener("webglcontextrestored", b), o().then((v) => {
    l || (a = v, !f.lost && (d(), f.ready = !0, t()));
  }).catch((v) => {
    console.error("[PanoramaStickers] three.js view is unavailable", v), f.failed = !0, r();
  }), f;
}
const R0 = "3D view unavailable. Check the browser console.";
function yl(e, t, r) {
  return F0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function xk(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((a) => {
      if (r = !1, !i.size) {
        a.dispose();
        return;
      }
      t = a, i.forEach((s) => s.onChange());
    }).catch((a) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", a), i.forEach((s) => s.onChange()));
    }));
  }
  return function(s) {
    const l = { onChange: s };
    let p = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(d) {
        return p ? null : (o(), t ? t.render({ ...d, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        p || (p = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const V0 = xk(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => Lg(e.createThreeView({ createCanvas: () => vn({ label: "three.node" }) }), "node"))
), mi = ["erp_image", "bg_erp", "bg_media"], Gs = ["source"], Zd = ["sticker_image", "sticker"], $0 = ["scene"], kk = {
  background: [...mi, ...Gs],
  "external-sticker": [...Zd, ...Gs],
  scene: [...$0, ...Gs]
};
function z0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Qd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = z0(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Mk(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function j0(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function Pk(e, t) {
  const { graph: r, entry: n } = j0(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = z0(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const H0 = [...mi, ...Zd, ...$0, ...Gs], Nk = 256, yo = /* @__PURE__ */ new Map(), eu = /* @__PURE__ */ new WeakMap();
let G0 = () => null;
function W0(e) {
  return eu.has(e) || eu.set(e, JSON.stringify(e)), eu.get(e);
}
function Ak(e) {
  G0 = e;
}
function bl(e, t) {
  const r = W0(e);
  yo.delete(r), yo.set(r, t), yo.size > Nk && yo.delete(yo.keys().next().value);
}
function un(e, t) {
  var o;
  const r = e ? G0(e) : null;
  if (!r) return !0;
  const n = Qd(e);
  let i = yo.get(W0(r));
  if (i)
    bl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => H0.includes(a == null ? void 0 : a.name)))) return !0;
    bl(r, n), i = n;
  }
  return kk[t].every((a) => i[a] === n[a]);
}
const vl = /* @__PURE__ */ new WeakSet();
async function Hu(e, t) {
  if (vl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && vl.add(e), r.ok && n !== void 0 ? n : null;
}
function K0(e, t) {
  var o, a, s, l, p;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = j0(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((p = n == null ? void 0 : n.inputs) != null && p.some((d) => H0.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: Pk(r, t) };
}
const Ws = /* @__PURE__ */ new Map();
function Ck(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Ws.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Hu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = K0(i, o);
        a && bl(a.output, a.inputs);
      }
    });
}
const Ik = 5;
function Ek(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Ik}`, n = Hu(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Hu(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var p, d, f, h;
      const l = String(a.id);
      for (const { id: b } of await n) {
        if (!s()) return null;
        const v = await o(b);
        if ((p = v == null ? void 0 : v.outputs) != null && p[l])
          return ((h = (f = (d = v.workflow) == null ? void 0 : d.prompt) == null ? void 0 : f[l]) == null ? void 0 : h.class_type) !== a.comfyClass ? null : K0(v, l);
      }
      return null;
    }
  };
}
function Ok(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let uo = null;
async function Fk(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || vl.has(r) || (s = Ws.get(i)) != null && s.has(n) || Ok(t)) return null;
  (uo == null ? void 0 : uo.workflowId) !== i && (uo = { workflowId: i, history: Ek(r, i) }, queueMicrotask(() => {
    uo = null;
  }));
  const a = await uo.history.lastNodeOutput(e, o);
  return o() ? a ? (bl(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (vl.has(r) || Ws.set(i, (Ws.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function $h(e, t, r, n = mi) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const zh = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ks(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return zh.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return zh.test(String((e == null ? void 0 : e.filename) || ""));
}
const tu = /* @__PURE__ */ new WeakMap();
function Tk(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Gu(e) {
  return Tk(e) ? (tu.has(e) || tu.set(e, Math.random().toString(36).slice(2, 10)), tu.get(e)) : "run";
}
function B0(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function Dk(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((p, d) => d)));
    }
  };
  return i(e, t), n;
}
function ef(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const p = n(l);
          if (p && (/\.mp4(\?|$)/i.test(p) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return p;
        }
  }
  return "";
}
function Lk({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Kl(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, p = () => {
    o || i();
  }, d = () => i(), f = () => {
    i(), l();
  }, h = () => i();
  let b = !1;
  const v = () => {
    b = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", p, { once: !0 }), n.addEventListener("loadeddata", p, { once: !0 }), s || n.addEventListener("timeupdate", d), n.addEventListener("play", f), n.addEventListener("pause", h), n.addEventListener("error", v), n.src = t, n.load();
  const S = () => {
    o || b || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, w = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var G, F;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", p), n.removeEventListener("loadeddata", p), n.removeEventListener("timeupdate", d), n.removeEventListener("play", f), n.removeEventListener("pause", h), n.removeEventListener("error", v), n.pause(), (G = n.removeAttribute) == null || G.call(n, "src"), (F = n.load) == null || F.call(n));
    },
    failed: () => b,
    play: S,
    pause: w,
    toggle() {
      n.paused ? S() : w();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function Ci(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function Rk(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function jh(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (n = s.outputNode);
    } catch {
    }
  return !n && r != null && (n = Rk(e == null ? void 0 : e.graph, r)), n;
}
function Vk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function $k(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function zk(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function U0({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (y) => {
    if (!y) return "";
    if (typeof y == "string") return String(y || "").trim();
    if (Array.isArray(y)) {
      if (y.length === 0) return "";
      if (y.length === 1) return i(y[0]);
      const $ = String(y[0] || "").trim();
      if ($)
        return Ci(t, {
          filename: $,
          subfolder: String(y[1] || "").trim(),
          type: String(y[2] || "output").trim() || "output"
        });
      for (const z of y) {
        const ee = i(z);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (y == null ? void 0 : y.src) == "string" && y.src ? y.src : typeof (y == null ? void 0 : y.url) == "string" && y.url ? y.url : Ci(t, y);
  }, o = (y) => {
    if (!y || typeof y != "object") return "";
    const $ = String(y.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(y.value || "");
    if ($ !== "comfy_image") return "";
    const z = String(y.filename || "").trim();
    return z ? Ci(t, {
      filename: z,
      subfolder: String(y.subfolder || ""),
      type: String(y.storage || "input")
    }) : "";
  }, a = (y) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || y == null) return null;
    const z = String(y);
    return $ instanceof Map ? $.get(y) || $.get(z) || $.get(Number(z)) || null : $[y] || $[z] || null;
  }, s = (y, $) => {
    var ee;
    const z = a(y == null ? void 0 : y.id);
    return Array.isArray((ee = z == null ? void 0 : z.ui) == null ? void 0 : ee[$]) ? z.ui[$] : Array.isArray(z == null ? void 0 : z[$]) ? z[$] : [];
  }, l = (y, $) => {
    const z = a(y == null ? void 0 : y.id);
    return z != null && z.ui && Object.prototype.hasOwnProperty.call(z.ui, $) ? z.ui[$] : z && Object.prototype.hasOwnProperty.call(z, $) ? z[$] : null;
  }, p = (y, $) => {
    const z = l(y, "pano_sticker_input_state_hash"), ee = Array.isArray(z) ? z[0] : z;
    return String(ee ?? "").trim() || zk($);
  }, d = (y) => {
    const $ = [], z = /* @__PURE__ */ new Set();
    for (const ee of y || []) {
      const ie = i(ee);
      !ie || z.has(ie) || (z.add(ie), $.push(ie));
    }
    return $;
  }, f = (y, $) => {
    var ie;
    const z = [];
    Array.isArray(y == null ? void 0 : y.images) && y.images.length && z.push(y.images), Array.isArray((ie = y == null ? void 0 : y.ui) == null ? void 0 : ie.images) && y.ui.images.length && z.push(y.ui.images);
    const ee = [];
    for (const j of z)
      $ >= 0 && $ < j.length && ee.push(j[$]), ee.push(...j);
    return ee;
  }, h = (y, $) => {
    var L;
    const z = String($ || "").trim();
    if (!z) return { src: "", sourceType: "", inputName: "" };
    const ie = (Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs : []).findIndex((me) => String((me == null ? void 0 : me.name) || "") === z);
    if (ie < 0) return { src: "", sourceType: "", inputName: z };
    const j = y.graph ? y.getInputLink(ie) : null;
    if ((j == null ? void 0 : j.origin_id) == null) return { src: "", sourceType: "", inputName: z };
    const H = j.origin_id, U = jh(y, ie, H);
    if (!U) return { src: "", sourceType: "", inputName: z };
    const ae = Number(j.origin_slot ?? 0);
    let Pe = [];
    try {
      Pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(U) || [] : [];
    } catch {
      Pe = [];
    }
    if (Array.isArray(Pe) && Pe.length) {
      const me = [];
      ae >= 0 && ae < Pe.length && me.push(Pe[ae]), me.push(...Pe);
      const ge = d(me.filter((Ne) => !Ks(Ne)));
      if (ge.length)
        return { src: ge[0], srcCandidates: ge, sourceType: "appNodeImageUrls", inputName: z };
    }
    const we = a((U == null ? void 0 : U.id) ?? H), he = d(f(we, ae).filter((me) => !Ks(me))).map((me) => `${me}&pano_src=${Gu(we)}`);
    if (he.length)
      return { src: he[0], srcCandidates: he, sourceType: "nodeOutputs", inputName: z };
    const X = Array.isArray(U == null ? void 0 : U.imgs) ? U.imgs : [];
    if (X.length) {
      const me = [];
      ae >= 0 && ae < X.length && me.push(X[ae]), me.push(...X);
      const ge = d(me);
      if (ge.length)
        return { src: ge[0], srcCandidates: ge, sourceType: "nodeImgs", inputName: z };
    }
    const A = (L = U == null ? void 0 : U.widgets) == null ? void 0 : L.find((me) => String((me == null ? void 0 : me.name) || "").toLowerCase() === "image");
    if (A) {
      let me = i(A.value);
      if (me && !me.includes("/") && !me.includes(":") && (U.comfyClass === "LoadImage" || U.type === "LoadImage") && (me = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(me)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(me)}&type=input&subfolder=`), me) return { src: me, sourceType: "widget", inputName: z };
    }
    return { src: "", sourceType: "", inputName: z };
  }, b = (y, $ = []) => {
    var ee;
    const z = Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs : [];
    for (const ie of $) {
      const j = z.findIndex((Pe) => String((Pe == null ? void 0 : Pe.name) || "") === ie), H = j >= 0 && y.graph ? y.getInputLink(j) : null;
      if ((H == null ? void 0 : H.origin_id) == null) continue;
      const U = a(((ee = jh(y, j, H.origin_id)) == null ? void 0 : ee.id) ?? H.origin_id), ae = (Array.isArray(U == null ? void 0 : U.images) ? U.images : []).find(Ks);
      return ae ? `${Ci(t, ae)}&pano_src=${Gu(U)}` : "";
    }
    return "";
  }, v = (y, $ = []) => {
    const z = Array.isArray($) ? $ : [$];
    for (const ee of z) {
      const ie = h(y, ee);
      if (String((ie == null ? void 0 : ie.src) || "").trim()) return ie;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, S = (y) => {
    const $ = String(y || "").trim();
    if (!$) return [];
    if (Vk($)) return [$];
    const { filename: z, subfolder: ee } = $k($);
    return z ? d([
      Ci(t, { filename: z, subfolder: ee, type: "temp" }),
      Ci(t, { filename: z, subfolder: ee, type: "output" }),
      Ci(t, { filename: z, subfolder: ee, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (y) => {
      var $, z;
      try {
        (z = ($ = y == null ? void 0 : y.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || z.call($, (ee, ie, j) => {
          var H;
          ee != null && ee.img && ((H = n == null ? void 0 : n.isImageLoadFailed) != null && H.call(n, ee.img)) && j.delete(ie);
        });
      } catch {
      }
    },
    externalStateHash: p,
    invalidateUiImage: (y, $) => {
      var z;
      (z = y == null ? void 0 : y.delete) == null || z.call(y, `__ui__${String($ || "")}`);
    },
    linkedValue: (y, $) => {
      var H, U, ae, Pe;
      const z = String($ || ""), ee = Array.isArray(y == null ? void 0 : y.inputs) ? y.inputs.findIndex((we) => String((we == null ? void 0 : we.name) || "") === z) : -1, ie = ee >= 0 && y.graph ? y.getInputLink(ee) : null;
      if (ie) {
        const we = a(ie.origin_id), he = [
          we == null ? void 0 : we.output,
          we == null ? void 0 : we.result,
          (H = we == null ? void 0 : we.data) == null ? void 0 : H.output,
          (U = we == null ? void 0 : we.data) == null ? void 0 : U.result,
          (ae = we == null ? void 0 : we.ui) == null ? void 0 : ae.output,
          (Pe = we == null ? void 0 : we.ui) == null ? void 0 : Pe.result
        ];
        for (const X of he) {
          if (!Array.isArray(X)) continue;
          const A = X[Number(ie.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const j = Array.isArray(y == null ? void 0 : y.widgets) ? y.widgets.find((we) => String((we == null ? void 0 : we.name) || "") === z) : null;
      return String((j == null ? void 0 : j.value) || "");
    },
    linkedVideoFile: b,
    loadPreferredExactLinkedImage: (y, $ = [], z = null, ee = "") => {
      var He;
      const ie = Array.isArray($) ? $ : [$], j = v(y, ie), U = (Array.isArray(j == null ? void 0 : j.srcCandidates) && j.srcCandidates.length ? j.srcCandidates : [j == null ? void 0 : j.src]).map((re) => String(re || "").trim()).filter(Boolean);
      if (!U.length) return null;
      const ae = d(U.flatMap((re) => S(re)));
      if (!ae.length) return null;
      y.__panoLinkedInputImageCache || (y.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const Pe = String(ee || ie.join("|") || "image_exact"), we = U.join(`
`), he = y.__panoLinkedInputImageCache.get(Pe);
      if (he && he.srcRaw === we && he.img) return he.img;
      const X = r || globalThis.Image;
      if (typeof X != "function") return null;
      const A = new X();
      (He = n == null ? void 0 : n.markImageLoading) == null || He.call(n, A, we);
      const L = { srcRaw: we, resolvedSrc: "", img: A };
      y.__panoLinkedInputImageCache.set(Pe, L);
      let me = -1;
      const ge = (re) => {
        var R, oe, pe;
        re === "ready" ? (R = n == null ? void 0 : n.markImageReady) == null || R.call(n, A, we) : (oe = n == null ? void 0 : n.markImageFailed) == null || oe.call(n, A, we), z == null || z(A), (pe = y.setDirtyCanvas) == null || pe.call(y, !0, !0);
      }, Ne = () => {
        if (me += 1, me >= ae.length) {
          ge("failed");
          return;
        }
        L.resolvedSrc = ae[me], A.src = L.resolvedSrc;
      };
      return A.onload = () => ge("ready"), A.onerror = () => {
        if (me + 1 < ae.length) {
          Ne();
          return;
        }
        ge("failed");
      }, Ne(), A;
    },
    output: a,
    resolvePreferredExactLinkedSource: v,
    source: i,
    uiImage: (y, $, z, ee = null) => {
      var we, he, X;
      const ie = s(y, $)[0] || null, j = i(ie);
      if (!j) return null;
      const H = `__ui__${$}`, U = (we = z == null ? void 0 : z.get) == null ? void 0 : we.call(z, H);
      if (U && U.__panoSrc === j) return U;
      const ae = r || globalThis.Image;
      if (typeof ae != "function") return null;
      const Pe = new ae();
      return Pe.__panoSrc = j, (he = n == null ? void 0 : n.markImageLoading) == null || he.call(n, Pe, j), Pe.onload = () => {
        var A;
        (A = n == null ? void 0 : n.markImageReady) == null || A.call(n, Pe, j), ee == null || ee(Pe);
      }, Pe.onerror = () => {
        var A;
        (A = n == null ? void 0 : n.markImageFailed) == null || A.call(n, Pe, j), ee == null || ee(Pe);
      }, Pe.src = j, (X = z == null ? void 0 : z.set) == null || X.call(z, H, Pe), Pe;
    },
    uiList: s,
    uiValue: l
  };
}
const jk = 1e-3;
function Y0(e, t, r, n) {
  if (!jo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(jk / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function q0(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function Hk(e, t) {
  return Math.floor(e * t.fps);
}
function X0(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Hh = 4;
function J0({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, p) {
      if ((a.length !== r.length || a.some((h, b) => h !== r[b])) && (r = a, n.clear(), i = null), s === null) return null;
      const d = Hk(s, l);
      for (let h = d; h < Math.min(r.length, d + Hh + 1); h += 1) o(h);
      for (const h of n.keys())
        (h < d || h > d + Hh) && h !== i && n.delete(h);
      const f = n.get(d);
      return f != null && f.complete && f.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? p : n.get(i);
    }
  };
}
function Z0({
  readState: e,
  reduce: t,
  projectModel: r,
  publishLiveState: n = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof r != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let a = null, s = !1, l = !1;
  const p = () => a || e(), d = () => o(r(p()));
  return {
    model: () => r(p()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, d(), !0);
    },
    updateGesture(f) {
      if (l) return !1;
      a || this.beginGesture();
      const h = t(a, f);
      return h.changed ? (a = h.state, s = !0, n(a), d(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const f = s;
      return f && i(a), a = null, s = !1, n(null), d(), f;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), d(), !0);
    },
    apply(f) {
      if (l) return !1;
      a && this.commitGesture();
      const h = t(e(), f);
      return h.changed ? (i(h.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const f = a != null;
      a = null, s = !1, f && n(null);
    }
  };
}
const Bs = "sticker_image_1", Q0 = "external_image", Vo = 0;
function No(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function nu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function di(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Wu(e, t = Vo) {
  return (e == null ? void 0 : e.version) !== 2 ? di(e) : di(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Bi(r, t).active,
    external: r.source.kind === "port",
    ...Kd(r, t)
  }));
}
function tf(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && di(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function ey(e) {
  return String((e == null ? void 0 : e.id) || "") === Bs || String((e == null ? void 0 : e.source_kind) || "") === Q0;
}
function nf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : ey(t);
}
const ty = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function ny(e) {
  return !ey(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(ty.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function ry(e) {
  const t = ny(e);
  return t ? ty.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function iy(e, t = {}) {
  var T, y, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((z) => String((z == null ? void 0 : z.id) || "") === Bs);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const z = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === Bs;
    return {
      state: {
        ...e,
        stickers: r.filter((ee, ie) => ie !== n),
        active: z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), p = Number(t.imageHeight || 0), d = l > 0 && p > 0, f = Math.max(1, l), h = Math.max(1, p), b = t.pose && typeof t.pose == "object" ? t.pose : {}, v = s ? b.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || b.hFOV_deg || 30, S = Math.min(179, Math.max(0.1, Number(v)));
  if (!s) {
    if (!d) return { state: e, changed: !1 };
    const z = No(S, f, h), ee = Number(((y = a == null ? void 0 : a.initial_pose) == null ? void 0 : y.hFOV_deg) ?? S), ie = No(ee, f, h), j = Number((($ = a == null ? void 0 : a.initial_pose) == null ? void 0 : $.vFOV_deg) ?? ie);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - z) <= 1e-6 && Math.abs(j - ie) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((H, U) => U === n ? {
          ...H,
          vFOV_deg: z,
          initial_pose: H.initial_pose && typeof H.initial_pose == "object" ? { ...H.initial_pose, vFOV_deg: ie } : H.initial_pose
        } : H)
      },
      changed: !0
    };
  }
  const w = r.reduce((z, ee) => Math.max(z, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), P = {
    yaw_deg: Number(b.yaw_deg || 0),
    pitch_deg: Number(b.pitch_deg || 0),
    hFOV_deg: S,
    vFOV_deg: d ? No(S, f, h) : Number(b.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || S),
    rot_deg: Number(b.rot_deg ?? b.roll_deg ?? 0)
  }, G = {
    ...a || {},
    id: Bs,
    source_kind: Q0,
    source_link_id: i,
    source_state_hash: o,
    ...P,
    initial_pose: { ...P },
    visible: !0,
    z_index: w + 1
  }, F = n >= 0 ? r.map((z, ee) => ee === n ? G : z) : [...r, G];
  return { state: { ...e, stickers: F }, changed: !0 };
}
function Gh(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const Gk = ["IMAGE", "VIDEO"];
function Wh(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => Gk.includes(r)) ? "2d" : null;
}
function Wk(e, t) {
  var i, o, a, s, l, p;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Wh(n.type) ?? Wh((p = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : p.type) : null;
}
function oy(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: Gh(e, "sticker"),
    awaitingPose: !t && (Gh(e, "sticker_state") || Wk(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Kh(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Cr({ version: 2, stickers: [r] }).stickers[0];
}
function ay(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var S;
  const a = e.stickers.findIndex((w) => nf(e, w)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const w = ((S = e.active) == null ? void 0 : S.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((P, G) => G !== a),
        active: w ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const w = { ...Kh(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((P, G) => G === a ? w : P) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const w = [s.size.value, ...s.size.keyframes.map((F) => F.value)], P = w.map((F) => No(F.hFOV_deg, i, o));
    if (w.every((F, T) => Math.abs(F.vFOV_deg - P[T]) <= 1e-6)) return { state: e, changed: !1 };
    const G = {
      value: { ...s.size.value, vFOV_deg: P[0] },
      keyframes: s.size.keyframes.map((F, T) => ({ ...F, value: { ...F.value, vFOV_deg: P[T + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((F, T) => T === a ? { ...F, size: G } : F) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const p = new Set(e.stickers.map((w) => w.id));
  let d = 1;
  for (; p.has(`sticker_${d}`); ) d += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Kh(`sticker_${d}`, n)] }, changed: !0 };
  const f = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), h = (w) => l ? No(w, i, o) : w, b = Bd(`sticker_${d}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: f,
    vFOV_deg: h(f)
  }, di(e).reduce((w, P) => Math.max(w, P.z_index), -1) + 1), v = (n == null ? void 0 : n.keyframes) ?? {};
  return b.direction.keyframes = v.direction ?? [], b.roll.keyframes = v.roll ?? [], b.size.keyframes = (v.size ?? []).map((w) => ({ ...w, value: { ...w.value, vFOV_deg: h(w.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, b] }, changed: !0 };
}
function rf(e) {
  const t = di(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: nu(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: nu(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: nu(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function sy(e) {
  const t = tf(e), r = nf(e, t), n = di(e).some((s) => s && s.visible !== !1), i = rf(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: ry(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Kk(e) {
  var t, r;
  return {
    ...e,
    stickers: (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).map((n) => ({ ...n })),
    painting: {
      ...(e == null ? void 0 : e.painting) || {},
      groups: (Array.isArray((t = e == null ? void 0 : e.painting) == null ? void 0 : t.groups) ? e.painting.groups : []).map((n) => ({ ...n })),
      raster_objects: (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.raster_objects) ? e.painting.raster_objects : []).map((n) => ({ ...n }))
    }
  };
}
function Bh(e, t) {
  const r = tf(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = Kk(e), i = String(r.id || ""), o = rf(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, p) => {
    l.item.z_index = p;
  }), { state: n, changed: !0 };
}
function Bk(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function Uk(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return iy(e, t.value);
  if (t.type === "sync-port") return ay(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((h) => String((h == null ? void 0 : h.id) || "") === o))
      return { state: e, changed: !1 };
    const l = rf(e).reduce((h, b) => Math.max(h, Number(b.z_index || 0)), -1), p = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: p,
      vFOV_deg: No(p, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Bd(o, Hs(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
    const f = { id: o, asset_id: a, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [a]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], f],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !di(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = tf(e);
  if (!r) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = r.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = ny(r);
    return !i || !ry(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Bh(e, "front");
  if (t.type === "send-back") return Bh(e, "back");
  if (t.type === "delete-selected") {
    if (nf(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = di({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = Bk(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Kd(r, Vo) : r, s = {};
    if (o.forEach((l) => {
      const p = Number(i[l]);
      Number.isFinite(p) && Math.abs(p - Number(a[l] || 0)) > 1e-12 && (s[l] = p);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = Nx(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const p = structuredClone(r);
      return g0(p, Vo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? p : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...s } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function Yk(e = {}) {
  return Z0({
    ...e,
    reduce: Uk,
    projectModel: sy
  });
}
const Ku = 2;
function Ti(e, t) {
  return Math.floor(e * t + 0.5);
}
function qk(e, t) {
  return Math.floor(e * t + 1e-3);
}
function ly({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, p = !1, d = !1, f = { name: "idle" }, h = [];
  const b = () => p && !d, v = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function S() {
    for (const L of h) L();
    h = [];
  }
  function w(L, me = {}) {
    return S(), f = { name: L, ...me }, s(), f;
  }
  function P(L, me, ge) {
    const Ne = () => {
      f === L && ge();
    };
    e.addEventListener(me, Ne), h.push(() => e.removeEventListener(me, Ne));
  }
  function G(L, me) {
    let ge = t.requestFrame(function Ne(He) {
      f === L && (me(He), f === L && (ge = t.requestFrame(Ne)));
    });
    h.push(() => t.cancelFrame(ge));
  }
  function F(L) {
    l = L, o(l);
  }
  function T() {
    return w(d ? "error" : "idle");
  }
  function y() {
    d = !0, T();
  }
  function $() {
    const { seekable: L } = e, me = L != null && L.length ? L.end(L.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(me) ? me : 1 / 0));
  }
  function z(L) {
    if (!b()) return L === "play" ? U() : T();
    if (e.readyState < Ku) {
      const me = w("loading", { then: L });
      return P(me, "loadeddata", () => z(me.then)), P(me, "error", y), me;
    }
    return L === "play" && l / r() >= Number(e.duration) ? U() : ee(L, !1);
  }
  function ee(L, me) {
    const ge = $();
    if (!e.ended && Ti(Number(e.currentTime), r()) === Ti(ge, r())) return ie(L);
    const Ne = w("seeking", { then: L, frame: l, retried: me });
    return P(Ne, "seeked", () => {
      const He = Ti(Number(e.currentTime), r()) === Ti($(), r()), re = l === Ne.frame;
      He || re && Ne.retried ? ie(Ne.then) : ee(Ne.then, re);
    }), P(Ne, "error", y), e.currentTime = ge, Ne;
  }
  function ie(L) {
    return L === "play" ? j() : (a(), T());
  }
  function j() {
    const L = w("playingVideo", { shown: !1 });
    if (P(L, "pause", () => e.ended ? H() : we()), P(L, "ended", H), P(L, "error", y), i() && Ti(Number(e.duration), r()) >= n()) {
      const ge = e.loop;
      e.loop = !0, h.push(() => {
        e.loop = ge;
      });
    }
    const me = (ge, Ne) => {
      Ne && !L.shown && (L.shown = !0, s()), ae(Ti(ge, r()));
    };
    if (v()) {
      let ge = e.requestVideoFrameCallback(function Ne(He, re) {
        f === L && (me(Number(re.mediaTime), !0), f === L && (ge = e.requestVideoFrameCallback(Ne)));
      });
      h.push(() => {
        var Ne;
        return (Ne = e.cancelVideoFrameCallback) == null ? void 0 : Ne.call(e, ge);
      });
    } else
      G(L, () => me(Number(e.currentTime), e.readyState >= Ku));
    return Promise.resolve(e.play()).catch(() => {
      f === L && we();
    }), L;
  }
  function H() {
    a(), U();
  }
  function U() {
    const L = w("playingClock", { startTs: t.now(), startFrame: l });
    return G(L, (me) => ae(L.startFrame + Math.floor((me - L.startTs) / 1e3 * r()))), L;
  }
  function ae(L) {
    if (L < n()) {
      F(L);
      return;
    }
    if (!i()) {
      Pe(n() - 1);
      return;
    }
    f.name === "playingVideo" && (S(), e.pause()), F(0), z("play");
  }
  function Pe(L) {
    f.name === "playingVideo" ? (S(), e.pause(), F(Math.max(0, L)), a()) : F(Math.max(0, L)), z("still");
  }
  function we() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", s();
    else if (f.name === "playingVideo") {
      S(), e.pause();
      const L = qk(Number(e.currentTime), r());
      F(Math.min(L, n() - 1)), a(), l === L ? T() : z("still");
    } else f.name === "playingClock" && Pe(Math.min(l, n() - 1));
  }
  function he() {
    if (!A()) {
      if (l >= n() - 1 && F(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", s();
        return;
      }
      z("play");
    }
  }
  function X(L) {
    const me = Math.max(0, Math.round(L));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", F(me), s();
      return;
    }
    f.name === "playingVideo" && (S(), e.pause()), F(me), z("still");
  }
  function A() {
    return f.name === "playingVideo" || f.name === "playingClock" || f.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return f.name;
    },
    get playing() {
      return A();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return f.name === "playingVideo" || f.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return f.name === "playingVideo" && f.shown;
    },
    play: he,
    stop: we,
    seek: X,
    toggle() {
      A() ? we() : he();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(L) {
      S(), p = !!L, d = !1, z("still");
    },
    dispose() {
      S(), p = !1, f = { name: "idle" };
    }
  };
}
function cy({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function p(S) {
    s = S, t();
  }
  function d(S) {
    a = S, e.currentTime = S;
  }
  function f() {
    const S = l;
    h(), l !== S && r();
  }
  function h() {
    if (!n || i || e.readyState < Ku) return;
    const { time: S, playing: w, fps: P } = o;
    if (S === null) {
      e.pause(), l = !1;
      return;
    }
    if (w) {
      if (a !== null) return;
      const G = Number(e.duration), F = Number.isFinite(G) ? Math.min(S, G) : S, T = Math.abs(Number(e.currentTime) - F) > 1.5 / P;
      if (e.ended && !T) return;
      T && d(F), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, p(NaN)), !(a !== null || s === S) && (Number(e.currentTime) === S ? p(S) : d(S));
  }
  const b = {
    loadeddata: f,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: f,
    seeked: () => {
      const S = a;
      a = null, !o.playing && S === o.time ? p(S) : f();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [S, w] of Object.entries(b)) e.addEventListener(S, w);
  function v(S) {
    n = S, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: S = "", time: w = null, playing: P = !1, fps: G }) {
      S !== n && (v(S), r()), o = { time: w, playing: P, fps: G }, f();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(S, w) {
      return !n || i ? w : o.time === null ? null : o.playing && l ? e : s === null ? w : S;
    },
    dispose() {
      for (const [S, w] of Object.entries(b)) e.removeEventListener(S, w);
      v("");
    }
  };
}
function Bu(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function Xk({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: p = !1 }) {
  let d = "", f = "", h = 0;
  const b = /* @__PURE__ */ new Set();
  let v = null, S = null;
  const w = () => i().timeline.fps, P = (H) => H.stickers.find((U) => U.source.kind === "port"), G = () => {
    const H = i(), U = P(H);
    return f0(H, {
      minimum: Math.round(w() * 5),
      frames: Math.max(
        d ? Math.round(h * w()) : 0,
        v && U ? q0(U.clip, w(), v.meta) : 0
      ),
      camera: p
    });
  }, F = ly({
    video: e,
    clock: n,
    fps: w,
    span: G,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), T = () => {
    f === d && Number.isFinite(e.duration) && (h = e.duration);
  }, y = () => {
    f && (b.add(f), l());
  }, $ = cy({ video: t, onCapture: s, onChange: l }), z = J0({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", T), e.addEventListener("error", y);
  function ee(H) {
    H !== f && (f = H, e.pause(), H ? e.src = H : e.removeAttribute("src"), e.load(), F.setSource(!!H));
  }
  function ie() {
    F.playing && F.stop();
  }
  function j(H) {
    const U = P(H);
    S = v && U ? Y0(U.clip, F.frame, H.timeline.fps, v.meta) : null, $.follow({
      src: (v == null ? void 0 : v.src) || "",
      time: S,
      playing: F.advancing,
      fps: H.timeline.fps
    });
  }
  return {
    get frame() {
      return F.frame;
    },
    get playing() {
      return F.playing;
    },
    get showsVideo() {
      return F.showsVideo;
    },
    get source() {
      return f;
    },
    pause: ie,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return v;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(H, U) {
      return v != null && v.frames ? z.picture(v.frames, S, v.meta, U) : $.picture(H, U);
    },
    toggle() {
      F.playing ? F.stop() : F.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: H, sources: U, state: ae, sticker: Pe = null }) {
      if (v = H ? Pe : null, !H)
        return ie(), ee(""), j(ae), !1;
      for (const L of b)
        U.includes(L) || b.delete(L);
      const we = U.find((L) => L && !b.has(L)) || "", he = we !== d;
      he && (d = we, h = 0), ee(d);
      const X = d0(ae, { camera: p }) || !!d && F.state !== "error" || !!v;
      return X || ie(), (he || !X || !F.playing && F.frame >= G()) && F.frame !== Vo && F.seek(Vo), j(ae), X;
    },
    dispose() {
      F.dispose(), $.dispose(), e.removeEventListener("loadedmetadata", T), e.removeEventListener("error", y), e.pause(), e.removeAttribute("src"), e.load(), f = "";
    }
  };
}
const _l = Math.PI / 180, Nr = 180 / Math.PI, Jk = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Zk = 260;
function Uh(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function uy(e, t) {
  return t ? uy(t, e % t) : e;
}
function Qk(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = uy(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function Ga(e, t) {
  const r = Uh(e), n = Uh(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: Qk(r, n) };
}
function Wi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function dy(e) {
  const t = Wi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Br(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function of(e, t, r = Jk) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), p = (w, P, G) => {
    const F = w + P, T = Math.max(0, G - 1), y = F > T && F > 0 ? T / F : 1;
    return [w * y, P * y];
  }, [d, f] = p(l, a, n), [h, b] = p(o, s, i), v = {
    x: d,
    y: h,
    w: Math.max(1, n - d - f),
    h: Math.max(1, i - h - b)
  }, S = Od(v, t);
  return {
    x: v.x + (v.w - S.width) * 0.5,
    y: v.y + (v.h - S.height) * 0.5,
    w: S.width,
    h: S.height,
    safeRect: v
  };
}
function eM(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = of({ width: r, height: n }, 1), o = De(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * _l * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, p = Kg(l, jg(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), d = tM(p, zo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), f = Fd({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: f.hFOV_deg
  };
}
function fy(e) {
  return {
    yaw: zt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Nr),
    pitch: De(Math.asin(De(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Nr, -89.9, 89.9)
  };
}
function tM(e, t) {
  const r = fy(e), n = zo(r.yaw, r.pitch, 0), i = Hc(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, a = Math.hypot(o.x, o.y, o.z);
  if (!(a > 1e-8)) return { ...r, roll: 0 };
  const s = {
    x: o.x / a,
    y: o.y / a,
    z: o.z / a
  };
  return {
    ...r,
    roll: Bl(Math.atan2(
      Hc(s, n.up),
      Hc(s, n.right)
    ) * Nr)
  };
}
function py(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = of({ width: r, height: n }, Yi(e)), o = Gi(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = Kg(e, jg(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = fy(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: De(2 * Math.atan(r / (2 * o)) * Nr, 1, 179)
  };
}
function nM(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = Gi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: p, halfH: d } = Td(l, s), f = {
    x: o - p,
    y: a - d,
    w: p * 2,
    h: d * 2
  }, h = f.x <= 0 && f.y <= 0 && f.x + f.w >= n && f.y + f.h >= i, b = n / i, v = Math.tan(Pu * _l), S = b >= 1 ? v : v * b, w = b >= 1 ? v / b : v;
  return {
    focalPx: s,
    rect: f,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(p / s) * Nr,
      vFOV_deg: 2 * Math.atan(d / s) * Nr
    },
    fallback: h ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(S) * Nr,
        vFOV_deg: 2 * Math.atan(w) * Nr
      }
    }
  };
}
function fo(e, t) {
  const r = Wi(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = t(r);
  return !n || n === r ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((i) => i === r ? n : i)
    },
    changed: !0
  };
}
function rM(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = Gi(r, e);
    return Fd(Od(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: $s(o, t) };
}
function Yh(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = Ga(t, r);
  if (!o) return e;
  const a = Yi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = Ga(o.height, o.width));
  const s = rM(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function hy(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Wi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Hg({
      id: n,
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
        active: { ...e.active || {}, selected_shot_id: n }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const n = Wi(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((a) => a !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
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
    return fo(e, (n) => Yh(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return fo(e, (n) => {
      const o = String(Br(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? Ga(o[1], o[2]) : Ga(Yi(n), 1);
      return a ? Yh(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? fo(e, (i) => {
      const o = Bl(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? fo(e, (n) => {
    const i = Gg(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? fo(e, (n) => {
    const i = Wg(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? fo(e, (n) => {
    const i = yy(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function my({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: a = 0.05
} = {}) {
  const s = o && i ? "alt" : n ? "shift" : "";
  if (!s || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, p = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - p.x, Number(t.y || 0) - p.y);
  if (s === "shift" && d < Math.min(l.w, l.h) * a) return null;
  const f = Math.atan2(Number(t.y || 0) - p.y, Number(t.x || 0) - p.x);
  return {
    source: s,
    frame: l,
    center: p,
    startRollDeg: Number(r || 0),
    lastAngle: f,
    accumulatedRad: 0
  };
}
function gy(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + $g(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: zg(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function yy(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * _l, l = Math.cos(s), p = Math.sin(s), d = o / r, f = -a / r, h = d * l - f * p, b = d * p + f * l, v = Number(e.pitch_deg || 0) * _l, S = Math.max(0.25, Math.abs(Math.cos(v)));
  return {
    ...e,
    yaw_deg: zt(Number(e.yaw_deg || 0) - Math.atan(h) / S * Nr),
    pitch_deg: De(Number(e.pitch_deg || 0) - Math.atan(b) * Nr, -90, 90)
  };
}
function iM({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Z0({
    readState: e,
    reduce: hy,
    projectModel: dy,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const Xe = Object.freeze({
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
}), oM = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, aM = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: oM(t[2])
})), sM = {
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
}, qh = Object.fromEntries(
  Object.entries(sM).map(([e, t]) => [e, {
    name: t.name,
    elements: aM(t.body)
  }])
), Ht = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = mt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(qh, n) ? qh[n] : null;
    });
    return (n, i) => r.value ? ($e(), ze("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: bt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      ($e(!0), ze(at, null, Et(r.value.elements, (o, a) => ($e(), ze(at, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? ($e(), ze("path", Gr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? ($e(), ze("circle", Gr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? ($e(), ze("rect", Gr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? ($e(), ze("line", Gr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? ($e(), ze("polyline", Gr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? ($e(), ze("polygon", Gr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : vt("", !0)
      ], 64))), 128))
    ], 2)) : vt("", !0);
  }
}, rn = {
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
    const t = e, r = mt(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => ($e(), tr(m_(e.tag), Gr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: ig(() => [
        nt(Ht, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, lM = ["aria-expanded", "disabled"], cM = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, uM = ["data-aspect", "disabled", "onClick"], dM = { class: "pano-cutout-aspect-custom" }, fM = ["disabled"], pM = ["disabled"], hM = ["data-custom-width", "data-custom-height", "disabled"], by = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ Xt("1"), a = /* @__PURE__ */ Xt("1"), s = /* @__PURE__ */ Xt(null), l = mt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), p = mt(() => {
      const S = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], w = String(r.model.aspectLabel || "");
      return S.length ? S.map((P) => {
        const G = typeof P == "string" ? P : String((P == null ? void 0 : P.value) || ""), F = typeof P == "string" ? P : String((P == null ? void 0 : P.label) || G);
        return {
          ...typeof P == "object" && P ? P : {},
          value: G,
          label: F,
          active: w ? G === w : (P == null ? void 0 : P.active) === !0
        };
      }) : i.map((P) => ({
        ...P,
        active: P.value === w
      }));
    }), d = mt(() => {
      var w;
      const S = String(r.model.aspectLabel || "").trim();
      return S || String(((w = p.value.find((P) => P.active === !0)) == null ? void 0 : w.label) || "Aspect");
    });
    ji(d, (S) => {
      const w = String(S || "").match(/^([0-9.]+):([0-9.]+)$/);
      w && (o.value = w[1], a.value = w[2]);
    }, { immediate: !0 });
    function f(S) {
      n("action", S);
    }
    function h(S) {
      var w;
      r.model.aspectOpen === !0 && ((w = s.value) != null && w.contains(S.target) || f({ type: "close-aspect" }));
    }
    jl(() => {
      document.addEventListener("pointerdown", h, !0);
    }), qa(() => {
      document.removeEventListener("pointerdown", h, !0);
    });
    function b(S) {
      const [w, P] = String(S.value || "").split(":");
      f({
        type: "set-aspect",
        width: w,
        height: P,
        preserveOrientation: !0
      });
    }
    function v() {
      f({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (S, w) => ($e(), ze("div", {
      ref_key: "rootElement",
      ref: s,
      class: bt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? ($e(), tr(rn, {
        key: 0,
        icon: e.model.aspectIcon || st(Xe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: w[0] || (w[0] = (P) => f({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : ($e(), ze("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: w[1] || (w[1] = (P) => f({ type: "toggle-aspect" }))
      }, [
        nt(Ht, {
          icon: e.model.aspectIcon || st(Xe).aspect
        }, null, 8, ["icon"]),
        ke("span", null, ft(d.value), 1),
        nt(Ht, {
          icon: st(Xe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, lM)),
      Yr(ke("div", cM, [
        ($e(!0), ze(at, null, Et(p.value, (P) => ($e(), ze("button", {
          key: P.value,
          class: bt(["pano-btn pano-frame-aspect-choice", { active: P.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": P.value,
          disabled: l.value,
          onClick: (G) => b(P)
        }, ft(P.label), 11, uM))), 128)),
        ke("div", dM, [
          Yr(ke("input", {
            "onUpdate:modelValue": w[2] || (w[2] = (P) => o.value = P),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, fM), [
            [mh, o.value]
          ]),
          w[4] || (w[4] = ke("span", { "aria-hidden": "true" }, ":", -1)),
          Yr(ke("input", {
            "onUpdate:modelValue": w[3] || (w[3] = (P) => a.value = P),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, pM), [
            [mh, a.value]
          ]),
          ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: v
          }, "Apply", 8, hM)
        ])
      ], 512), [
        [Ki, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, mM = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, gM = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Xt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => ($e(), ze("div", {
      class: bt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Vt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Vt(() => {
      }, ["stop"]))
    }, [
      nt(rn, {
        icon: st(Xe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Vt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", mM, [
        i[3] || (i[3] = ke("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        ($e(!0), ze(at, null, Et(st(r), (o) => ($e(), ze("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          ke("kbd", null, ft(o[0]), 1),
          ke("span", null, ft(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, yM = {
  class: "pano-view-unavailable",
  role: "status"
}, af = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => ($e(), ze("div", yM, ft(st(R0)), 1));
  }
}, bM = { class: "pano-cutout-node-surface" }, vM = ["title", "disabled"], _M = { class: "value" }, SM = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, wM = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function r(n) {
      var i;
      (i = t.onAction) == null || i.call(t, n);
    }
    return (n, i) => ($e(), ze("div", bM, [
      ke("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Vt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Vt(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          nt(Ht, {
            icon: st(Xe).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        nt(rn, {
          icon: e.model.hasShot ? st(Xe).delete : st(Xe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        nt(by, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        ke("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Vt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          nt(Ht, {
            icon: st(Xe).roll
          }, null, 8, ["icon"]),
          ke("span", _M, ft(e.model.rollLabel || "0.0°"), 1)
        ], 40, vM),
        nt(rn, {
          icon: st(Xe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        nt(gM)
      ], 32),
      e.model.hasShot === !1 ? ($e(), ze("div", SM, " Choose a view · + Add Frame ")) : vt("", !0),
      e.model.viewUnavailable ? ($e(), tr(af, { key: 1 })) : vt("", !0)
    ]));
  }
}, vy = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Xt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const f = o;
      return o = void 0, a = !1, { active: !0, intent: f };
    }
    function l(f) {
      const h = i.value;
      return h instanceof HTMLInputElement ? (o = f, a = !0, h.value = "", h.click(), !0) : !1;
    }
    function p(f) {
      var S, w;
      const { active: h, intent: b } = s();
      if (!h) return;
      const v = ((w = (S = f.target) == null ? void 0 : S.files) == null ? void 0 : w[0]) || null;
      if (v) {
        n("file-selected", { intent: b, file: v });
        return;
      }
      n("file-cancelled", { intent: b });
    }
    function d() {
      const { active: f, intent: h } = s();
      f && n("file-cancelled", { intent: h });
    }
    return t({ open: l }), (f, h) => ($e(), ze("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: p,
      onCancel: d
    }, null, 544));
  }
}, xM = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, kM = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Xt(!1), r = Object.freeze([
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
    return (n, i) => ($e(), ze("div", {
      class: bt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Vt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Vt(() => {
      }, ["stop"]))
    }, [
      nt(rn, {
        icon: st(Xe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Vt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", xM, [
        i[3] || (i[3] = ke("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        ($e(!0), ze(at, null, Et(st(r), (o) => ($e(), ze("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          ke("kbd", null, ft(o[0]), 1),
          ke("span", null, ft(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, MM = { class: "pano-stickers-node-surface" }, PM = ["disabled"], NM = ["aria-label", "data-tip"], AM = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, CM = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, IM = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Xt(null);
    function n(a) {
      var s;
      (s = t.onAction) == null || s.call(t, a);
    }
    function i() {
      var a, s;
      (s = (a = r.value) == null ? void 0 : a.open) == null || s.call(a, "add");
    }
    function o(a) {
      n({ type: "add-image-file", file: (a == null ? void 0 : a.file) || null });
    }
    return (a, s) => ($e(), ze("div", MM, [
      ke("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: s[5] || (s[5] = Vt(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Vt(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          nt(Ht, {
            icon: st(Xe).fullscreen
          }, null, 8, ["icon"]),
          s[10] || (s[10] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          nt(Ht, {
            icon: st(Xe).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = ke("span", { class: "label" }, "Add Image", -1))
        ], 8, PM),
        nt(rn, {
          icon: e.model.locked ? st(Xe).lock_closed : st(Xe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        nt(rn, {
          icon: st(Xe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        nt(rn, {
          icon: st(Xe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        nt(rn, {
          icon: e.model.isExternalSelection ? st(Xe).back_initial : st(Xe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        nt(kM)
      ], 32),
      e.model.playable === !0 ? ($e(), ze("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: s[7] || (s[7] = Vt(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Vt(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        nt(Ht, {
          icon: e.model.playing ? st(Xe).pause : st(Xe).play
        }, null, 8, ["icon"])
      ], 40, NM)) : vt("", !0),
      e.model.hasStickers === !1 ? ($e(), ze("div", AM, " Add Image to place a sticker ")) : vt("", !0),
      e.model.dropActive === !0 ? ($e(), ze("div", CM, "Drop image to add")) : vt("", !0),
      nt(vy, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? ($e(), tr(af, { key: 3 })) : vt("", !0)
    ]));
  }
}, Xh = 24;
function EM(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ca(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function _y(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Uu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Ca(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ca(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : _y(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function OM(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Ca(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = n ? e.corners.findIndex((a) => Ca(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ca(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : _y(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function sf(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Sy(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function la(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: De(r.x, -n, t.width + n),
    y: De(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function FM(e) {
  const t = zo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(De(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Ct * 0.5),
    tanY: Math.tan(De(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Ct * 0.5)
  };
}
function Ii(e, t, r) {
  return Ed(sl(
    sl(e.centerDir, ll(e.right, t)),
    ll(e.up, r)
  ));
}
function lf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = FM(e), n = la(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    Ii(r, -r.tanX, r.tanY),
    Ii(r, r.tanX, r.tanY),
    Ii(r, r.tanX, -r.tanY),
    Ii(r, -r.tanX, -r.tanY)
  ].map((h) => la(h, t)), o = Array.from({ length: 4 }, (h, b) => {
    const v = [];
    for (let S = 0; S <= 28; S += 1) {
      const w = S / 28;
      let P, G;
      b === 0 ? (P = -r.tanX + 2 * r.tanX * w, G = r.tanY) : b === 1 ? (P = r.tanX, G = r.tanY - 2 * r.tanY * w) : b === 2 ? (P = r.tanX - 2 * r.tanX * w, G = -r.tanY) : (P = -r.tanX, G = -r.tanY + 2 * r.tanY * w);
      const F = la(Ii(r, P, G), t);
      F && v.push({ x: F.x, y: F.y });
    }
    return v;
  }), a = la(Ii(r, 0, r.tanY), t), s = la(
    Ii(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((h) => !h || !Number.isFinite(h.x) || !Number.isFinite(h.y)))
    return { visible: !1 };
  if (!l.some((h) => h.rawZ > 1e-4)) return { visible: !1 };
  const p = s.x - a.x, d = s.y - a.y, f = Math.hypot(p, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((h) => ({ x: h.x, y: h.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + p / f * Xh,
      y: a.y + d / f * Xh
    },
    visible: !0
  };
}
function Jh(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: lf(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, p;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((p = a.item) == null ? void 0 : p.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Uu(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Uu(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function TM(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: zt(Math.atan2(n.x, n.z) * on),
    pitch_deg: Math.asin(De(n.y, -1, 1)) * on
  };
}
function DM(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: De(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: De(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function LM(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * on;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Ps = null;
function cf() {
  return Ps || (Ps = new Promise((e) => {
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
    const r = document.createElement("link");
    r.id = "pano-suite-style-link", r.rel = "stylesheet", r.href = new URL("./pano_editor.css", import.meta.url).toString(), r.addEventListener("load", () => {
      r.dataset.loaded = "true", e();
    }, { once: !0 }), r.addEventListener("error", () => e(), { once: !0 }), document.head.appendChild(r);
  }), Ps);
}
function qn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function RM(e, t = 1024) {
  const r = Math.max(1, Math.round(qn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(qn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function VM(e, t, r) {
  const n = qn(t), i = qn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = qn(o.u0), s = qn(o.v0), l = qn(o.u1), p = qn(o.v1);
  if (l <= a || p <= s) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + qn(d.du)) * n,
    centerY: ((s + p) * 0.5 + qn(d.dv)) * i,
    width: (l - a) * n,
    height: (p - s) * i,
    rotationRad: qn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, qn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function $M(e, t, r) {
  const n = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    r,
    n.length,
    n.slice(-24),
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
function zM() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, a] of e) {
        if (e.size <= 16) break;
        a.settled && (a.image.onload = null, a.image.onerror = null, e.delete(o));
      }
  }
  function n(o, a) {
    let s = e.get(o);
    if (s)
      return e.delete(o), e.set(o, s), !s.settled && typeof a == "function" && s.listeners.add(a), s.image;
    const l = new Image();
    s = { image: l, listeners: new Set(typeof a == "function" ? [a] : []), settled: !1 }, e.set(o, s);
    const p = () => {
      s.settled = !0;
      const d = [...s.listeners];
      s.listeners.clear(), d.forEach((f) => f()), r();
    };
    return l.onload = p, l.onerror = p, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const p = String(o.rasterDataUrl || "").trim(), d = VM(o, a, s);
    if (!p.startsWith("data:") || !d) return null;
    const f = $M(o, a, s), h = String((o == null ? void 0 : o.id) || "").trim() || f, b = t.get(h);
    if ((b == null ? void 0 : b.revision) === f) return { source: b.source, revision: f };
    const v = n(p, l), S = Number(v.naturalWidth || v.width || 0), w = Number(v.naturalHeight || v.height || 0);
    if (!v.complete || S < 1 || w < 1) return null;
    const P = vn({ label: "raster-object" });
    P.width = Math.max(1, Math.round(a)), P.height = Math.max(1, Math.round(s));
    const G = P.getContext("2d");
    return G ? (d.wrapOffsets.forEach((F) => {
      G.save(), G.translate(d.centerX + F, d.centerY), G.rotate(d.rotationRad), G.scale(d.scale, d.scale), G.drawImage(
        v,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), G.restore();
    }), t.set(h, { revision: f, source: P }), { source: P, revision: f }) : null;
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
function jM(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function HM(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function GM({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(f) {
    if (!f) return;
    f.entry.listeners.delete(f);
    const h = n.get(f.owner);
    (h == null ? void 0 : h.get(f.key)) === f && h.delete(f.key);
  }
  function a(f, h, b, v) {
    if (!f || typeof v != "function" || b.settled) return;
    let S = n.get(f);
    S || (S = /* @__PURE__ */ new Map(), n.set(f, S));
    const w = S.get(h);
    if ((w == null ? void 0 : w.entry) === b) {
      w.callback = v;
      return;
    }
    o(w);
    const P = { owner: f, key: h, entry: b, callback: v };
    S.set(h, P), b.listeners.add(P);
  }
  function s(f, h) {
    f.settled || (f.settled = !0, f.image.onload = null, f.image.onerror = null, !h && r.get(f.key) === f && r.delete(f.key), [...f.listeners].forEach((b) => {
      o(b);
      try {
        b.callback(f.image, h);
      } catch {
      }
    }), l(i));
  }
  function l(f) {
    if (!(r.size <= f))
      for (const [h, b] of r) {
        if (r.size <= f) break;
        !b.settled || b.listeners.size > 0 || (b.image.onload = null, b.image.onerror = null, r.delete(h));
      }
  }
  function p(f, h, b, v = null) {
    const S = String(h || ""), w = String(b || "");
    if (!S || !w) return null;
    let P = r.get(S);
    if (P)
      r.delete(S), r.set(S, P);
    else {
      l(i - 1);
      const F = e || globalThis.Image;
      if (typeof F != "function") return null;
      const T = new F();
      P = { key: S, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(S, P), T.onload = () => s(P, !0), T.onerror = () => s(P, !1), T.src = w;
    }
    return P.settled || P.image.complete && Number(P.image.naturalWidth || P.image.width || 0) > 0 || a(f, S, P, v), P.image;
  }
  function d(f) {
    const h = n.get(f);
    h && ([...h.values()].forEach(o), n.delete(f), l(i));
  }
  return { get: p, disposeOwner: d };
}
const ha = /* @__PURE__ */ new WeakMap();
function wy(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = ha.get(e);
  n || (n = [], ha.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = ha.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && ha.delete(e);
  };
}
function qr(e, ...t) {
  const r = ha.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Us = Object.freeze({
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
}), xy = "PanoramaSuite.Editor.ViewControls", WM = {
  id: xy,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Us).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function KM(e) {
  return Object.hasOwn(Us, e) ? Us[e] : Us.default;
}
function BM(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function UM(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Sl = "state_json";
function Ur(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function YM(e) {
  var a, s;
  const t = Ur(e, Sl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = h0(r, {
    coverage: (a = Ur(e, "coverage")) == null ? void 0 : a.value
  }), i = hy(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function uf(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Ur(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, p, d, f, h, b, v;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (p = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || p.call(l), (d = e.setDirtyCanvas) == null || d.call(e, !0, !0), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (v = (b = t == null ? void 0 : t.canvas) == null ? void 0 : b.setDirty) == null || v.call(b, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function qM(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Zh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function XM(e) {
  var d, f, h, b, v, S;
  if (!e) return;
  const t = Ur(e, "coverage"), r = Ur(e, "bg_color"), n = Ur(e, Sl), i = Ur(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && qM(o) && (Zh(a) || a === ""))) return;
  let p = "360";
  if (Zh(a))
    try {
      p = String(En((d = JSON.parse(a)) == null ? void 0 : d.coverage));
    } catch {
      p = "360";
    }
  t.value = p, (f = t.callback) == null || f.call(t, p), r.value = o, (h = r.callback) == null || h.call(r, o), n.value = a, (b = n.callback) == null || b.call(n, a), i && (i.value = s, (v = i.callback) == null || v.call(i, s)), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
}
function Ys(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function Yu(e, t, r) {
  var o, a;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((s) => String((s == null ? void 0 : s.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (a = i.parentEl) != null && a.style && (i.parentEl.style.display = "");
    const s = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(s) || Number(s[0] || 0) <= 0 || Number(s[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function JM(e, { tolerateOperationFailure: t = !1 } = {}) {
  const r = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (r instanceof Map)
    for (; r.size > 0; ) {
      const n = Array.from(r.entries());
      t ? await Promise.allSettled(n.map(([, i]) => i)) : await Promise.all(n.map(([, i]) => i)), n.forEach(([i, o]) => {
        r.get(i) === o && r.delete(i);
      });
    }
}
function ma(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const n = e.__panoStickerOperationTail, o = (n && typeof n.then == "function" ? n.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = o.catch(() => {
  });
  e.__panoStickerOperationTail = a, e.__panoPendingStickerUploads.set(t, o);
  const s = () => {
    var l, p;
    ((p = (l = e.__panoPendingStickerUploads) == null ? void 0 : l.get) == null ? void 0 : p.call(l, t)) === o && e.__panoPendingStickerUploads.delete(t);
  };
  return o.then(s, s), a.then(() => {
    e.__panoStickerOperationTail === a && (e.__panoStickerOperationTail = null);
  }), o;
}
async function ky(e, t = {}) {
  var n;
  await JM(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function ZM(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await ky(e), r ? r.apply(this, n) : this.value;
  };
}
function QM(e) {
  var t, r;
  try {
    (t = e.__panoDomRestore) == null || t.call(e);
  } catch {
  }
  try {
    (r = e.__panoLegacyRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null;
}
function eP(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function ca(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: p = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(f) {
    var v;
    const h = `editor_btn|${r}`;
    if (f.__panoPreviewAttached === !0 && f.__panoPreviewMountKey === h) return;
    QM(f), uf(f, t), Ys(f, Sl);
    const b = Ur(f, Sl);
    if (ZM(f, b), b && !b.__panoPreviewPatchedCb) {
      b.__panoPreviewPatchedCb = !0;
      const S = b.callback;
      b.callback = (w) => {
        var G;
        const P = S ? S(w) : void 0;
        return (G = f.setDirtyCanvas) == null || G.call(f, !0, !1), P;
      };
    }
    if (r === "PanoramaStickers") {
      f.__panoSceneStateV2 = l, f.__panoStudio = p;
      const S = Ur(f, "bg_color");
      !l && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (v = S.callback) == null || v.call(S, "#00ff00")), Yu(f, n, () => i(f, "stickers")), s && (o(f, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(f, "stickers")
      }), f.__panoStickersNodeSurface && Ys(f, n), (!Array.isArray(f.size) || f.size[0] < 10 || f.size[1] < 10) && (f.size = [360, 260])), f.__panoPreviewAttached = !0, f.__panoPreviewMountKey = h;
      return;
    }
    f.__panoSceneStateV2 = l, Yu(f, n, () => i(f, "cutout")), l || a(f, {
      buttonText: n,
      onOpen: () => i(f, "cutout")
    }), f.__panoCutoutNodeSurface && Ys(f, n), (!Array.isArray(f.size) || f.size[0] < 10 || f.size[1] < 10) && (f.size = [360, 260]), f.__panoPreviewAttached = !0, f.__panoPreviewMountKey = h;
  }
  for (const f of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const h = e.prototype[f];
    e.prototype[f] = function() {
      const b = h ? h.apply(this, arguments) : void 0;
      f === "onNodeCreated" && r === "PanoramaCutout" && !l && YM(this), f === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && XM(this);
      const v = !!this.__panoPreviewAttached;
      return (f === "onNodeCreated" || this.widgets) && d(this), f === "onAdded" && v && qr(this, "attach"), b;
    };
  }
}
function tP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return eP(this), n;
  };
}
function nP(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
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
    uf(e, t);
    const l = (p = e) => r(p, "stickers", { readOnly: !0, hideSidebar: !1 });
    Yu(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && Ys(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function rP({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: a,
  enableStickersPreview: s = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [WM, GS],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [vh],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [vh.id] }],
    beforeRegisterNodeDef(l, p) {
      const d = String((p == null ? void 0 : p.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && ca(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaStickersNode" && ca(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), d === "PanoramaStudio" && ca(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && ca(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), d === "PanoramaCutoutNode" && ca(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), cl(d) && tP(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const p = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      uf(l, e), cl(p) && nP(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const iP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function cr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : iP.test(String(e.name || "")) : !1;
}
function df(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => cr(r)) : !1;
}
function oP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var p, d, f;
    (p = l == null ? void 0 : l.preventDefault) == null || p.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (f = l == null ? void 0 : l.stopImmediatePropagation) == null || f.call(l);
  }, o = (l) => {
    if (df(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var p;
    l != null && l.relatedTarget && ((p = e.contains) != null && p.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var d;
    const p = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((f) => cr(f));
    if (!p) {
      r(!1);
      return;
    }
    i(l), r(!1), n(p);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function ga(e, t = {}) {
  var a, s, l, p;
  if (!cr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((p = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : p.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((f, h) => {
      const b = new r();
      b.onload = () => f(b), b.onerror = () => h(new Error("image load failed")), b.src = o;
    });
    return {
      image: d,
      width: Math.max(1, Number(d.naturalWidth || d.width || 1)),
      height: Math.max(1, Number(d.naturalHeight || d.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function Di(e, { fetchApi: t } = {}) {
  if (!cr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const r = new FormData();
  r.append("image", e), r.append("type", "input"), r.append("subfolder", "panorama_stickers");
  const n = await t("/upload/image", { method: "POST", body: r });
  if (!n || n.status !== 200)
    throw new Error(`upload failed (${(n == null ? void 0 : n.status) || "no-response"})`);
  const i = await n.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const Qh = /* @__PURE__ */ new WeakSet(), em = /* @__PURE__ */ new WeakSet();
let tm = 0;
function qu(e) {
  if (!e || typeof e != "object" || em.has(e)) return e;
  const t = String(e.type || "preview");
  return tm += 1, e.type = `${t}:pano-${tm}`, em.add(e), e;
}
function wl(e) {
  if (!e || typeof e != "object" || Qh.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Qh.add(e), e;
}
function My(e, t) {
  var n, i;
  if (!t || ((i = (n = wl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function aP({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const p = i;
    i = null, o || r == null || r(p);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Gt } = Fs;
Ak((e) => fi(e.id));
Ck(qt);
const ff = GM(), { linkedVideoFile: sP } = U0({ app: Gt, api: qt });
function Xu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Fs == null ? void 0 : Fs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const lP = "pano_suite.ui_settings.v1", cP = 120, uP = 2048;
function nm() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(lP)) || "").trim();
    if (!r) return e;
    const n = JSON.parse(r);
    return {
      invert_view_x: !!(n != null && n.invert_view_x),
      invert_view_y: !!(n != null && n.invert_view_y)
    };
  } catch {
    return e;
  }
}
function dP() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ua(e) {
  var r, n, i, o, a;
  if (!e) return null;
  const t = (r = e.getBoundingClientRect) == null ? void 0 : r.call(e);
  return {
    tag: String(e.tagName || "").toLowerCase(),
    className: String(e.className || ""),
    clientW: Number(e.clientWidth || 0),
    clientH: Number(e.clientHeight || 0),
    offsetW: Number(e.offsetWidth || 0),
    offsetH: Number(e.offsetHeight || 0),
    rectW: Number((t == null ? void 0 : t.width) || 0),
    rectH: Number((t == null ? void 0 : t.height) || 0),
    styleHeight: String(((n = e.style) == null ? void 0 : n.height) || ""),
    styleWidth: String(((i = e.style) == null ? void 0 : i.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((a = e.style) == null ? void 0 : a.transform) || "")
  };
}
function fP() {
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
function Ju(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), a = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(a) ? null : [o, a];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const n = r(t[0], t[1]);
      if (n) return n;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const n = r(t.width, t.height);
      if (n) return n;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const n = r(t.w, t.h);
      if (n) return n;
    }
  }
  return null;
}
function Py(e) {
  const t = Ju(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function pP(e, t, r) {
  Py(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Zu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function pf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Ny(e) {
  return cl(pf(e));
}
function rm(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function Ay(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Zu(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && qs(e), iN(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Zu(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      qs(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      qs(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function hP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function qs(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  Qu.unregister(e), hP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const r = e.__panoDomPreview;
  try {
    (n = e.__panoDomRestore) == null || n.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (i = e.__panoLegacyRestore) == null || i.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, r) {
    try {
      (o = r.state) != null && o.raf && cancelAnimationFrame(r.state.raf);
    } catch {
    }
    try {
      (s = (a = r.root) == null ? void 0 : a.remove) == null || s.call(a);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((p) => {
      if (p === (r == null ? void 0 : r.widget)) return !0;
      const d = String((p == null ? void 0 : p.name) || ""), f = String((p == null ? void 0 : p.type) || ""), h = Xu();
      return d === h || f === h || d === "pano_preview" || f === "pano_preview" ? !0 : d === "preview" && f === "pano_preview";
    }).forEach((p) => DP(e, p));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function mP(e, t = "#00ff00") {
  const r = {
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
  let n = null;
  if (e && typeof e == "object")
    n = e;
  else if (typeof e == "string") {
    const i = e.trim();
    if (!i) return r;
    try {
      n = JSON.parse(i);
    } catch {
      return r;
    }
  } else
    return r;
  try {
    const i = n;
    return !i || typeof i != "object" || Array.isArray(i) ? r : {
      ...r,
      ...i,
      coverage: Number(i.coverage) === 180 ? 180 : 360,
      assets: i.assets && typeof i.assets == "object" ? i.assets : {},
      stickers: Array.isArray(i.stickers) ? i.stickers : [],
      shots: Array.isArray(i.shots) ? i.shots : [],
      active: i.active && typeof i.active == "object" ? i.active : r.active
    };
  } catch {
    return r;
  }
}
function gP(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = Ao(e, "state_json")) == null ? void 0 : r.value) || "");
}
function Pn(e) {
  var s, l;
  const t = gP(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = Ao(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = Ao(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? m0(t, { backgroundColor: n, coverage: i, active: b0(e) }) : mP(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function Ao(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function yP(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Cy(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const a = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, s = a ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(a.origin_slot ?? 0)) : null;
      s != null && s.outputNode && (n = s.outputNode);
    } catch {
    }
  return !n && r != null && (n = yP(e == null ? void 0 : e.graph, r)), n;
}
function bP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function Iy(e, t = []) {
  const r = bP(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    mi.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function im(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function xl(e, t) {
  const r = im(e), n = im(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function vP(e, t) {
  var r;
  return Cy(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function _P(e, t = mi) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = Iy(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Dk(e, a, vP);
}
const Qu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = qt) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, p, d, f, h;
        if (!o) return;
        const a = xl(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![..._P(o)].some((b) => xl(n, b)) || B0(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (Ey(o), (p = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || p.call(l), (d = o.setDirtyCanvas) == null || d.call(o, !0, !0), (h = (f = o.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
function kl(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = qt) == null ? void 0 : o.apiURL) == "function" ? qt.apiURL(i) : i;
}
function SP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function wP(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function xP(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function kP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (SP(t)) return [t];
  const { filename: r, subfolder: n } = wP(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => kl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return xP([...i, t]);
}
function MP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? kl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function fi(e) {
  const t = Gt == null ? void 0 : Gt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (xl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (xl(a, i)) return t[a];
  }
  return null;
}
function Ia(e, t, r = null) {
  const n = r || fi(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function zn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return zn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return kl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = zn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : kl(e);
}
function Ml(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function ru(e) {
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
function hf(e, t) {
  var n;
  const r = String(e || "").trim();
  if (!r) return "";
  try {
    const i = typeof window < "u" && ((n = window == null ? void 0 : window.location) != null && n.href) ? window.location.href : "http://127.0.0.1/", o = new URL(r, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = r.includes("?") ? "&" : "?";
    return t > 0 ? `${r}${i}pano_rev=${t}` : r;
  }
}
function PP(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function NP(e, t) {
  try {
    e.__panoOwnOutputRev = jM(e.__panoOwnOutputRev);
    const r = PP(t);
    let n = "";
    for (const i of r)
      if (n = zn(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), hf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Co(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function AP(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!un(e, "background"))
    return Co(e), null;
  const i = fi(n), o = ef(i, t, zn);
  if (!o)
    return Co(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = hf(o, a), l = `${t.join("|")}:${s}`, p = e.__panoOwnOutputVideoCache;
  if (p && p.key === l) return p.player.failed() ? null : p.player.video;
  Co(e);
  const d = Lk({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return d ? (e.__panoOwnOutputVideoCache = { key: l, player: d }, d.video) : null;
}
function CP(e, t = []) {
  var p, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = Iy(e, t).map((f) => r.findIndex((h) => String((h == null ? void 0 : h.name) || "") === String(f))).filter((f) => f >= 0), o = r.map((f, h) => ({ input: f, idx: h })).filter(({ input: f }) => String((f == null ? void 0 : f.type) || "").toUpperCase() === "IMAGE").map(({ idx: f }) => f), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const f of a) {
    const h = r[f], b = e.graph ? e.getInputLink(f) : null;
    if ((b == null ? void 0 : b.origin_id) == null) continue;
    const v = b.origin_id, S = Cy(e, f, v);
    if (!S) continue;
    const w = Number(b.origin_slot ?? 0), P = fi((S == null ? void 0 : S.id) ?? v), G = Array.isArray(P == null ? void 0 : P.images) ? P.images : [];
    if (G.length) {
      const $ = [];
      w >= 0 && w < G.length && $.push(G[w]), $.push(...G);
      for (const z of $.filter((ee) => !Ks(ee))) {
        const ee = zn(z);
        if (ee)
          return String((h == null ? void 0 : h.name) || ""), { src: `${ee}&pano_src=${Gu(P)}`, sourceType: "nodeOutputs", inputName: String((h == null ? void 0 : h.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (Gt == null ? void 0 : Gt.getNodeImageUrls) == "function" ? Gt.getNodeImageUrls(S) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const $ = [];
      w >= 0 && w < F.length && $.push(F[w]), $.push(...F);
      for (const z of $) {
        const ee = zn(z);
        if (ee)
          return String((h == null ? void 0 : h.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((h == null ? void 0 : h.name) || "") };
      }
    }
    const T = Array.isArray(S == null ? void 0 : S.imgs) ? S.imgs : [];
    if (T.length) {
      const $ = [];
      w >= 0 && w < T.length && $.push(T[w]), $.push(...T);
      for (const z of $) {
        const ee = zn(z);
        if (ee)
          return String((h == null ? void 0 : h.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((h == null ? void 0 : h.name) || "") };
      }
    }
    const y = (p = S == null ? void 0 : S.widgets) == null ? void 0 : p.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (y) {
      let $ = zn(y.value);
      if ($ && !$.includes("/") && !$.includes(":") && (S.comfyClass === "LoadImage" || S.type === "LoadImage") && ($ = qt.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((h == null ? void 0 : h.name) || ""), { src: $, sourceType: "widget", inputName: String((h == null ? void 0 : h.name) || "") };
    }
  }
  const s = un(e, "background") ? fi(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((d = s == null ? void 0 : s.ui) == null ? void 0 : d.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const f of l) {
      const h = zn(f);
      if (h)
        return { src: h, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function IP(e, t = [], r = {}) {
  const n = CP(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = kP(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const p = new Image(), d = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  d.pendingSrcRaw = i, d.pendingResolvedSrc = "", d.pendingImg = p, e.__panoLinkedInputImageCache.set(s, d);
  let f = -1;
  const h = () => {
    var v, S, w, P;
    if (f += 1, f >= o.length) {
      if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === d && d.pendingImg === p && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
        try {
          (P = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || P.call(w, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const b = o[f];
    d.pendingResolvedSrc = b, p.src = b;
  };
  return p.onload = () => {
    var b, v, S;
    ((v = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.get) == null ? void 0 : v.call(b, s)) === d && d.pendingImg === p && (d.srcRaw = i, d.resolvedSrc = String(d.pendingResolvedSrc || p.src || ""), d.img = p, d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null), String(d.pendingResolvedSrc || d.resolvedSrc || p.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = (b) => {
    var v, S, w, P;
    if (f + 1 < o.length) {
      h();
      return;
    }
    if (((S = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : S.call(v, s)) === d && d.pendingImg === p && (d.pendingSrcRaw = "", d.pendingResolvedSrc = "", d.pendingImg = null, !d.img))
      try {
        (P = (w = e.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || P.call(w, s);
      } catch {
      }
    String(d.pendingResolvedSrc || d.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((b == null ? void 0 : b.type) || "error");
  }, h(), a && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : p;
}
function EP(e, t = [], r = null, n = {}) {
  const i = IP(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Ey(e) {
  var t, r;
  if (e) {
    ff.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Co(e), e.__panoWrappedErpCache = null;
  }
}
function OP(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Co(e), e.__panoWrappedErpCache = null;
  }
}
function Oy(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ns(e, t, r = "") {
  const n = Oy(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < cP ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function om(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function FP(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), p = Math.max(Math.round(34 * r), s + Math.round(14 * r)), d = n + (o - l) * 0.5, f = i + (a - p) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, f, l, p, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, f + p * 0.5 + 0.5), e.restore();
}
function iu(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function TP(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  if (r) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === r);
    if (i) return i;
  }
  return t[0] || null;
}
function DP(e, t) {
  return My(e, t);
}
function Wa(e, t, r, n = null) {
  var h;
  if (!String(t || "")) return null;
  let o = MP(r);
  if (!o && (n != null && n.external)) {
    if (!un(e, "external-sticker")) return null;
    const b = fi(e == null ? void 0 : e.id), v = ((h = b == null ? void 0 : b.ui) == null ? void 0 : h.pano_sticker_input_images) || (b == null ? void 0 : b.pano_sticker_input_images) || [];
    for (const S of Array.isArray(v) ? v : [v])
      if (o = zn(S), o) break;
  }
  if (!o) return null;
  const a = Ia(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, p = n != null && n.external ? hf(o, l) : o, d = HM(o, s, l);
  return ff.get(e, d, p, (b, v) => {
    var S, w;
    v && (n != null && n.external && e.__panoOutputFromRun && qr(e, "image-loaded"), (w = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || w.call(S));
  }) || null;
}
function LP(e, t) {
  var f, h, b, v;
  const r = jP(e, t), n = HP(t), i = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], o = new Map(
    i.filter((S) => S && typeof S == "object").map((S) => [String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim(), Number((S == null ? void 0 : S.z_index) || 0)])
  ), a = r ? n.map((S) => {
    const w = r.getGroupDisplayCanvas(S);
    return w ? {
      id: `paint_group:${S}`,
      source: w,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${S}`,
      zIndex: Number(o.get(S) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((h = t == null ? void 0 : t.painting) == null ? void 0 : h.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (v = (b = e.__panoRasterObjectSurfaceCache) == null ? void 0 : b.retain) == null || v.call(b, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = zM()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var S, w;
    return (w = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null ? void 0 : w.call(S);
  });
  const l = RM(t == null ? void 0 : t.output_preset), p = s.filter((S) => (S == null ? void 0 : S.visible) !== !1 && String((S == null ? void 0 : S.layerKind) || "paint") === "paint").map((S) => String((S == null ? void 0 : S.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(p);
  const d = s.map((S) => {
    const w = e.__panoRasterObjectSurfaceCache.get(
      S,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return w ? {
      id: `raster:${String((S == null ? void 0 : S.id) || "")}`,
      source: w.source,
      revision: w.revision,
      zIndex: Number((S == null ? void 0 : S.z_index) || 0),
      opacity: 1,
      visible: (S == null ? void 0 : S.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...d];
}
function RP(e, t, r, n) {
  var o, a, s, l, p, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const f = n.convertEventToCanvasOffset(t);
      if (Array.isArray(f) && f.length >= 2)
        return {
          x: Number(f[0]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[0]) || 0),
          y: Number(f[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = $P(e, t, n);
  return i || null;
}
function VP(e, t) {
  var f, h;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (f = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : f.call(i), a = (t == null ? void 0 : t.ds) || ((h = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : h.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], p = (r - Number(o.left || 0)) / s - Number(l[0] || 0), d = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(p) || !Number.isFinite(d) ? null : { x: p, y: d };
}
function $P(e, t, r) {
  var i, o;
  const n = VP(t, r || (Gt == null ? void 0 : Gt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function zP(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function jP(e, t) {
  var p, d, f, h, b, v, S, w, P, G, F, T;
  const r = (d = (p = t == null ? void 0 : t.painting) == null ? void 0 : p.paint) == null ? void 0 : d.strokes, n = (h = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : h.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = zP(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Ad(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((b = t == null ? void 0 : t.painting) == null ? void 0 : b.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((S = e.__panoPreviewPaintRevision) == null ? void 0 : S.paint) !== l.paint || ((w = e.__panoPreviewPaintRevision) == null ? void 0 : w.mask) !== l.mask || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.groups) !== l.groups || ((G = e.__panoPreviewPaintRevision) == null ? void 0 : G.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((F = t == null ? void 0 : t.painting) == null ? void 0 : F.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function HP(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function GP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function WP(e, t, r) {
  const n = lf(t, r);
  n.visible && sf(e, n.boundaryEdges, { selected: !1 });
}
function KP(e, t, r) {
  const n = lf(t, r);
  n.visible && (e.save(), sf(e, n.boundaryEdges, { selected: !0 }), Sy(e, n, { accent: EM(t) }), e.restore());
}
function ed(e, t, r) {
  return D0(yl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Pl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Vo;
}
function BP(e) {
  return [un(e, "background") ? ef(fi(e.id), ["pano_input_videos"], zn) : "", sP(e, mi)];
}
function UP(e) {
  var o;
  if (!un(e, "external-sticker")) return null;
  const t = fi(e.id), r = Ia(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(zn), meta: r };
  const i = ef(t, ["pano_sticker_input_videos"], zn);
  return i ? { src: i, meta: r } : null;
}
function YP({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function am(e, t, r) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Cr({ ...t, painting: null }) });
  const n = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = Wa(e, a.id, y0(a.source), { external: a.source.kind === "port" });
      const p = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && p) {
        const d = p.playback.stickerPicture(p.stickerStill, s), f = X0(p.playback.stickerMedia, s);
        return d ? { media: d, revision: ru(d), source: f } : null;
      }
    } else {
      const p = a.type === "external_image" || a.source_kind === "external_image", d = String(a.asset_id || "") || (p ? String(a.id || "") : "");
      s = Wa(e, d, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: p });
    }
    return Ml(s) ? { media: s, revision: ru(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : LP(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: Ml(r) ? { media: r, revision: ru(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: L0(e.__panoSurfaceScene.sceneState, Pl(e), t.stickers, { media: n, paintLayers: i })
  };
}
function qP(e, t, r) {
  var T, y, $, z, ee, ie, j;
  const n = String(e.__panoPreviewMode || "stickers");
  Oy(e, n);
  const i = Pn(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, ($ = (y = (T = e.__panoCutoutNodeSurface) == null ? void 0 : T.session) == null ? void 0 : y.refresh) == null || $.call(y)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (ie = (ee = (z = e.__panoStickersNodeSurface) == null ? void 0 : z.session) == null ? void 0 : ee.refresh) == null || ie.call(ee));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const p = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const d = (e.__panoSurfacePlayback ? YP(e.__panoSurfacePlayback) : AP(e, ["pano_input_videos"], () => {
    var H, U;
    return (U = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : U.call(H);
  })) || EP(
    e,
    mi,
    () => {
      var H, U;
      return (U = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : U.call(H);
    },
    { preserveReadyWhilePending: !1 }
  ), f = Ml(d);
  let h = null;
  const b = (H, U) => {
    h || (h = am(e, i, d));
    const ae = r.render({ width: H.w, height: H.h, camera: U, ...h });
    return ae && l.drawImage(ae.canvas, ae.x, ae.y, ae.width, ae.height, H.x, H.y, H.w, H.h), !!ae;
  };
  if (n === "cutout") {
    const H = TP(i), U = GP(d), ae = H ? De(pi(H).aspect, 0.1, 10) : f ? De(Number(U.width / U.height), 0.05, 20) : 1, Pe = of(p, ae);
    e.__panoCutoutNodeFrame = Pe;
    let we = "none";
    const he = String((d == null ? void 0 : d.currentSrc) || (d == null ? void 0 : d.src) || "");
    if (H)
      if (d && !f)
        we = "loading";
      else if (f) {
        const X = nM({ width: a, height: s }, Pe, H);
        [
          !X.fallback || b(X.fallback.rect, Aa(X.fallback.shot)),
          b(X.rect, Aa(X.shot)),
          !X.fallback || b(Pe, Aa(H))
        ].every(Boolean) || (we = "loading");
      } else
        we = "empty";
    else {
      const X = e.__panoLastCutoutShot;
      X ? (e.__panoPreviewView = py(X, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), f ? b(p, yl(e.__panoPreviewView, a, s)) || (we = "loading") : d ? we = "loading" : we = "empty";
    }
    f || r.release(), r.failed && we === "loading" && (we = "none"), H && (e.__panoLastCutoutShot = { ...H }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(Pe.x, Pe.y, Pe.w, Pe.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(Pe.x + 0.5, Pe.y + 0.5, Math.max(0, Pe.w - 1), Math.max(0, Pe.h - 1)), l.restore()), we === "loading" ? (iu(e, !1), Ns(e, !0, he)) : we === "empty" ? (iu(e, !0), Ns(e, !1, "")) : (iu(e, !1), Ns(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let v = !1;
  (!d || f) && (h = am(e, i, d), !h.background && !h.layers.length ? (r.release(), v = !0) : v = b(p, yl(e.__panoPreviewView, a, s)));
  const S = !v && !r.failed;
  Ns(e, S, S ? String((d == null ? void 0 : d.currentSrc) || (d == null ? void 0 : d.src) || "") : ""), S && FP(l, p, om(t, p));
  const w = ed(e, a, s);
  !d && v && XP(l, w, om(t, p));
  const P = String(((j = i == null ? void 0 : i.active) == null ? void 0 : j.selected_sticker_id) || ""), G = Wu(i, Pl(e)), F = v ? G.find((H) => String((H == null ? void 0 : H.id) || "") === P && (H == null ? void 0 : H.visible) !== !1) : null;
  v && G.filter((H) => H !== F && (H == null ? void 0 : H.visible) !== !1 && (H.external || H.source_kind === "external_image")).filter((H) => !Ml(Wa(e, H.id, null, { external: !0 }))).forEach((H) => WP(l, H, w)), F && KP(l, F, w);
}
function sm(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const a of t) {
    const s = r.project(a);
    if (s.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(s.x, s.y) : (e.moveTo(s.x, s.y), o = !0);
  }
  e.stroke();
}
function XP(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let p = -180; p <= 180; p += 4) l.push(In(p, s));
    sm(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let p = -89; p <= 89; p += 4) l.push(In(s, p));
    sm(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: In(0, 0) },
    { name: "Right", dir: In(90, 0) },
    { name: "Back", dir: In(180, 0) },
    { name: "Left", dir: In(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function td(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function JP(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Yn(e, t) {
  return JP(e, t) ? !1 : (td(e), !0);
}
function lm() {
  var r;
  const e = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function ZP(e) {
  var r;
  if (!e) return;
  const t = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function QP(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Py(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function eN(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function cm(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), i && tN(e, 180, t);
    }
  };
}
function tN(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ya(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const nN = /* @__PURE__ */ new WeakMap();
function Fy(e, t) {
  return B0(nN, e, t) ? !1 : (NP(e, t), Ey(e), ya(e), !0);
}
async function rN(e) {
  var r, n;
  const t = await Fk(e, Gt, qt);
  t && (Fy(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function iN(e, t = {}) {
  var Te;
  const r = t.__allowStandalone === !0, n = Ny(e);
  if (n && !r) {
    pf(e);
    return;
  }
  n && QP(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: rm(e)
  }, s = "dom", l = a.signature || rm(e);
  if (Number(e.__panoRebindGeneration || 0), Zu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Ju(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (Te = e.__panoDomPreview) != null && Te.widget || (e.__panoLegacyPreviewHooked && qs(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const p = t.noPreview === !0, d = p ? 0 : 56, f = p ? 0 : Zk, h = document.createElement("div");
  if (fP(), h.className = "pano-node-preview-dom", h.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && h.classList.add("pano-node-preview--no-preview"), h.setAttribute("data-capture-wheel", "true"), h.tabIndex = 0, h.style.cssText = [
    "width:100%",
    p ? "height:auto" : "height:100%",
    f > 0 ? `min-height:${f}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), p) {
    const N = wl(qu(
      e.addDOMWidget(Xu(), "preview", h, cm(e, null))
    ));
    ya(e), e.__panoDomPreview = { widget: N, root: h, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const b = document.createElement("div");
  b.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const v = vn({ label: "node.surface" });
  v.style.cssText = [
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
  const S = document.createElement("div");
  S.style.cssText = [
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
  ].join(";"), S.textContent = "Connect ERP image", b.appendChild(v), b.appendChild(S), h.appendChild(b);
  const w = Vg(h), P = document.createElement("div");
  P && (P.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", P.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", h.appendChild(P)), pP(e, 120, 120), ya(e);
  let G = null;
  try {
    eN(e, d, () => {
      var N, ye;
      return (ye = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null ? void 0 : ye.call(N);
    }), G = wl(qu(e.addDOMWidget(
      Xu(),
      "preview",
      h,
      cm(
        e,
        () => {
          var N, ye;
          return (ye = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null ? void 0 : ye.call(N);
        },
        d,
        f,
        !1
      )
    )));
  } catch {
    return;
  }
  const F = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    F.destroyed || (F.needsDraw = !0, !F.inTick && !F.raf && (F.raf = requestAnimationFrame(Ae)));
  }, y = V0(T), $ = /* @__PURE__ */ $o(i ? { ...sy(Pn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...dy(Pn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((N) => ({ value: N, label: N }))
  });
  let z = null;
  if (i && e.__panoSceneStateV2) {
    const [N, ye] = [0, 1].map(() => {
      const qe = Kl(document, "node.playback");
      return qe.playsInline = !0, qe.preload = "auto", qe.crossOrigin = "anonymous", qe.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", b.appendChild(qe), qe;
    }), Fe = vn({ label: "node.still" });
    Fe.__panoFrameIdx = 0;
    const Re = vn({ label: "node.port-still" });
    Re.__panoFrameIdx = 0;
    const Ue = Xk({
      video: N,
      stickerVideo: ye,
      createImage: (qe, Be) => {
        const Qe = new Image();
        return Qe.onload = Be, Qe.onerror = Be, Qe.src = qe, Qe;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (qe) => requestAnimationFrame(qe),
        cancelFrame: (qe) => cancelAnimationFrame(qe)
      },
      readState: () => Pn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: T,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Be;
        if (!(N.videoWidth > 0 && N.videoHeight > 0)) return;
        const qe = Math.min(1, uP / N.videoWidth);
        Fe.width = Math.round(N.videoWidth * qe), Fe.height = Math.round(N.videoHeight * qe), (Be = Fe.getContext("2d")) == null || Be.drawImage(N, 0, 0, Fe.width, Fe.height), Fe.__panoFrameIdx += 1, T();
      },
      onStickerCapture: () => {
        var qe;
        ye.videoWidth > 0 && ye.videoHeight > 0 && (Re.width = ye.videoWidth, Re.height = ye.videoHeight, (qe = Re.getContext("2d")) == null || qe.drawImage(ye, 0, 0), Re.__panoFrameIdx += 1, T());
      },
      onChange: () => {
        $.playing = Ue.playing, T();
      }
    });
    z = { playback: Ue, video: N, still: Fe, stickerVideo: ye, stickerStill: Re, stickerSource: "" }, e.__panoSurfacePlayback = z;
  }
  const ee = () => {
    var Qe;
    const { playback: N, still: ye, stickerStill: Fe } = z, Re = Bu(b, !!((Qe = e.flags) != null && Qe.collapsed)), Ue = N.source, qe = Re ? UP(e) : null, Be = N.follow({
      shown: Re,
      sources: Re ? BP(e) : [],
      state: Pn(e),
      sticker: qe
    });
    ((qe == null ? void 0 : qe.src) || "") !== z.stickerSource && (z.stickerSource = (qe == null ? void 0 : qe.src) || "", ku(Fe)), N.source !== Ue && (ku(ye), ye.__panoFrameIdx = 0), $.playable = Be, $.playing = N.playing;
  }, ie = () => {
    var ye, Fe;
    const N = ((ye = e.__panoOwnOutputVideoCache) == null ? void 0 : ye.player) ?? null;
    N && !Bu(b, !!((Fe = e.flags) != null && Fe.collapsed)) && N.pause(), i && ($.playable = !!N && !N.failed(), $.playing = !!(N != null && N.playing));
  }, j = () => {
    var N;
    z == null || z.playback.pause(), (N = e.__panoOwnOutputVideoCache) == null || N.player.pause();
  };
  let H = null;
  const U = (i ? Yk : iM)({
    readState: () => Pn(e),
    publishLiveState: (N) => {
      N ? (H = N, e.__panoLiveStateOverride = N) : (e.__panoLiveStateOverride === H && (e.__panoLiveStateOverride = null), H = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: (N) => {
      var Re, Ue, qe, Be;
      const ye = Ao(e, "state_json");
      if (!ye) return;
      v0(e, N.active);
      const Fe = S0(e, N);
      w0(e, Fe, String(ye.value ?? "")) || (ye.value = Fe, (Re = ye.callback) == null || Re.call(ye, Fe), e.__panoStateCache = null, (Ue = e.setDirtyCanvas) == null || Ue.call(e, !0, !0), (Be = (qe = e.graph) == null ? void 0 : qe.setDirtyCanvas) == null || Be.call(qe, !0, !0));
    },
    onChange: (N) => Object.assign($, N)
  }), Pe = i ? wy(e, (N = "sync", ye = null) => {
    var an;
    if (!i || !e.graph || !U || U.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Zt = un(e, "external-sticker"), ei = Pn(e).stickers.find((Xi) => Xi.source.kind === "port");
      return U.apply({
        type: "sync-port",
        value: oy(e, {
          pose: Zt ? Ia(e, "pano_sticker_input_pose", ye) : null,
          image: ei ? Wa(e, ei.id, null, { external: !0 }) : null
        })
      });
    }
    const Fe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Zt) => String((Zt == null ? void 0 : Zt.name) || "") === "sticker_image") : -1, Re = Fe >= 0 ? ((an = e.getInputLink(Fe)) == null ? void 0 : an.id) ?? null : null;
    if (Re == null)
      return U.apply({ type: "sync-external", value: { connected: !1 } });
    if (!un(e, "external-sticker")) return !1;
    const Ue = Ia(e, "pano_sticker_input_pose", ye), qe = Array.isArray(Ue) ? Ue[0] : Ue, Be = String(Ia(e, "pano_sticker_input_state_hash", ye) ?? ""), Qe = e.__panoPreviewView || { yaw: 0, pitch: 0 }, dt = Pn(e), yt = (Array.isArray(dt == null ? void 0 : dt.stickers) ? dt.stickers : []).find((Zt) => String((Zt == null ? void 0 : Zt.id) || "") === "sticker_image_1"), Kt = Wa(e, "sticker_image_1", null, { external: !0 }), dn = qe && typeof qe == "object" ? qe : yt || { yaw_deg: Qe.yaw, pitch_deg: Qe.pitch, hFOV_deg: 30, rot_deg: 0 };
    return U.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: Be,
        pose: dn,
        imageWidth: Number((Kt == null ? void 0 : Kt.naturalWidth) || (Kt == null ? void 0 : Kt.width) || 0),
        imageHeight: Number((Kt == null ? void 0 : Kt.naturalHeight) || (Kt == null ? void 0 : Kt.height) || 0)
      }
    });
  }) : () => {
  };
  let we = 0;
  const he = async (N) => {
    if (!i || !U || !cr(N)) return !1;
    j();
    const ye = `asset_${Math.random().toString(16).slice(2, 10)}`, Fe = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    we += 1, $.importing = !0;
    const Ue = ma(e, `add:${ye}`, async () => {
      const qe = await ga(N), Be = await Di(N, {
        fetchApi: (Qe, dt) => qt.fetchApi(Qe, dt)
      });
      return Ne(), U.apply({
        type: "add-sticker",
        value: {
          stickerId: Fe,
          assetId: ye,
          asset: Be,
          imageWidth: qe.width,
          imageHeight: qe.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Ue;
    } catch {
      return !1;
    } finally {
      we = Math.max(0, we - 1), $.importing = we > 0, T();
    }
  };
  let X = null, A = null, L = null, me = !1;
  const ge = () => {
    var N;
    return L && (clearTimeout(L), L = null), me ? (me = !1, ((N = U == null ? void 0 : U.commitGesture) == null ? void 0 : N.call(U)) ?? !1) : !1;
  }, Ne = () => {
    var Re, Ue, qe;
    const N = ge(), ye = (X == null ? void 0 : X.pointerId) ?? (A == null ? void 0 : A.pointerId);
    if (X = null, A = null, ye != null) {
      try {
        (Re = v.hasPointerCapture) != null && Re.call(v, ye) && ((Ue = v.releasePointerCapture) == null || Ue.call(v, ye));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const Fe = ((qe = U == null ? void 0 : U.commitGesture) == null ? void 0 : qe.call(U)) ?? !1;
    return N || Fe;
  }, He = () => {
    var Re, Ue, qe;
    const N = ge(), ye = X == null ? void 0 : X.pointerId;
    if (X = null, ye != null) {
      try {
        (Re = v.hasPointerCapture) != null && Re.call(v, ye) && ((Ue = v.releasePointerCapture) == null || Ue.call(v, ye));
      } catch {
      }
      v.style.cursor = "grab";
    }
    const Fe = ((qe = U == null ? void 0 : U.cancelGesture) == null ? void 0 : qe.call(U)) ?? !1;
    return N || Fe;
  }, re = () => Ne();
  U && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(re));
  let R = null, oe = !1;
  if (P && U)
    try {
      cf(), R = kd(i ? IM : wM, {
        model: $,
        onAction: (N) => {
          var Re, Ue, qe;
          if ((N == null ? void 0 : N.type) === "toggle-playback") {
            Ne(), z ? z.playback.toggle() : (Re = e.__panoOwnOutputVideoCache) == null || Re.player.toggle(), T();
            return;
          }
          if (j(), (N == null ? void 0 : N.type) === "open-editor") {
            Ne(), i || ($.aspectOpen = !1), (Ue = e.__panoOpenEditor) == null || Ue.call(e);
            return;
          }
          if (i) {
            if ((N == null ? void 0 : N.type) === "add-image-file") {
              he(N.file);
              return;
            }
            U.apply(N) && T();
            return;
          }
          if ((N == null ? void 0 : N.type) === "toggle-aspect") {
            $.aspectOpen = !$.aspectOpen;
            return;
          }
          if ((N == null ? void 0 : N.type) === "close-aspect") {
            $.aspectOpen = !1;
            return;
          }
          let ye = N;
          if ((N == null ? void 0 : N.type) === "add-frame") {
            const Be = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ye = {
              ...N,
              ...eM(Be, {
                width: v.width,
                height: v.height
              })
            };
          } else if ((N == null ? void 0 : N.type) === "delete-frame") {
            const Be = Wi(Pn(e));
            Be && (e.__panoPreviewView = py(Be, {
              width: v.width,
              height: v.height
            }));
          }
          const Fe = ((qe = e.__panoCutoutNodeFrame) == null ? void 0 : qe.safeRect) || null;
          $.aspectOpen = !1, U.apply({ ...ye, safeRect: Fe }) && T();
        }
      }), R.mount(P), oe = !0;
    } catch {
      R = null, oe = !1;
    }
  const pe = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    z && ee(), T();
  }) : null;
  pe == null || pe.observe(b);
  const Ae = (N) => {
    var Fe, Re;
    F.raf = 0, F.inTick = !0;
    let ye = !1;
    try {
      ye = Le.stepInertia(N), (F.needsDraw || ye) && (F.needsDraw = !1, z ? ee() : ie(), (Fe = e.flags) != null && Fe.collapsed || qP(e, v, y), $.viewUnavailable = y.failed);
    } finally {
      F.inTick = !1;
    }
    (ye || F.needsDraw) && !F.raf && (F.raf = requestAnimationFrame(Ae)), dP() && (!e.__panoDebugLastTs || N - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = N, e.__panoPreviewMode, Ju(e), ua(h), ua(b), ua(v), ua(h.parentElement), ua((Re = h.parentElement) == null ? void 0 : Re.parentElement), Number(v.width || 0), Number(v.height || 0), void 0);
  }, Le = Id({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (N) => {
      e.__panoPreviewView = N;
    },
    getViewportSize: () => {
      const N = v.getBoundingClientRect();
      return {
        w: Math.max(1, Number(N.width || v.clientWidth || 0)),
        h: Math.max(1, Number(N.height || v.clientHeight || 0))
      };
    },
    getInvert: () => {
      const N = nm();
      return {
        x: N.invert_view_x ? -1 : 1,
        y: N.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), te = i ? b : h, Ce = (N) => {
    const ye = v.getBoundingClientRect();
    return {
      x: (Number(N.clientX) - ye.left) * (v.width / Math.max(1, ye.width)),
      y: (Number(N.clientY) - ye.top) * (v.height / Math.max(1, ye.height))
    };
  }, x = (N) => {
    var Re, Ue;
    if (!i || !o) return;
    const ye = Pn(e), Fe = Jh(
      Wu(ye, Pl(e)),
      String(((Re = ye == null ? void 0 : ye.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      Ce(N),
      ed(e, v.width, v.height)
    );
    if (!Fe) {
      v.style.cursor = "grab";
      return;
    }
    if (((Ue = Fe.item) == null ? void 0 : Ue.locked) === !0) {
      v.style.cursor = "default";
      return;
    }
    v.style.cursor = Fe.hit.cursor || "default";
  };
  v.addEventListener("pointerdown", (N) => {
    var Qe, dt, yt, Kt, dn, Wn, an, Zt, ei, Xi, Ja;
    if (!Yn(N, te) || N.button !== 0) return;
    if (!i) {
      const kn = Wi(Pn(e)), ir = e.__panoCutoutNodeFrame;
      if (!kn) {
        (Qe = h.focus) == null || Qe.call(h, { preventScroll: !0 }), (dt = v.setPointerCapture) == null || dt.call(v, N.pointerId), v.style.cursor = "grabbing", Le.startDrag(N.clientX, N.clientY, N.pointerId);
        return;
      }
      if (kn.locked === !0 || !ir || !U) return;
      const Za = Ce(N);
      let Ko;
      if (N.shiftKey) {
        const gi = my({
          frame: ir,
          point: Za,
          startRollDeg: Number(kn.roll_deg ?? kn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!gi) return;
        Ko = { kind: "roll", pointerId: N.pointerId, rollGesture: gi };
      } else {
        const gi = ((yt = Pn(e)) == null ? void 0 : yt.ui_settings) || nm();
        Ko = {
          kind: "pan",
          pointerId: N.pointerId,
          startPoint: Za,
          startShot: { ...kn },
          focalPx: Gi(ir, kn),
          invertX: gi.invert_view_x === !0,
          invertY: gi.invert_view_y === !0
        };
      }
      Ne(), (Kt = h.focus) == null || Kt.call(h, { preventScroll: !0 }), (dn = v.setPointerCapture) == null || dn.call(v, N.pointerId), v.style.cursor = "grabbing", U.beginGesture(), X = Ko;
      return;
    }
    if (!o) return;
    const ye = Ce(N), Fe = Pn(e), Re = String(((Wn = Fe == null ? void 0 : Fe.active) == null ? void 0 : Wn.selected_sticker_id) || ""), Ue = ed(e, v.width, v.height);
    (an = h.focus) == null || an.call(h, { preventScroll: !0 });
    const qe = () => Jh(Wu(Fe, Pl(e)), Re, ye, Ue);
    let Be = qe();
    if (Be && (z != null && z.playback.playing) && (j(), Be = qe()), Be && U) {
      if (Le.stopMotion(), Ne(), String(((Zt = Be.item) == null ? void 0 : Zt.id) || "") !== Re && U.apply({ type: "select-sticker", id: Be.item.id }), ((ei = Be.item) == null ? void 0 : ei.locked) === !0) {
        T();
        return;
      }
      const kn = ye, ir = Be.geometry.center;
      A = {
        active: !0,
        kind: Be.hit.kind,
        pointerId: N.pointerId,
        startPoint: kn,
        startCenter: { ...ir },
        startSticker: { ...Be.item },
        startDistance: Math.max(1, Math.hypot(kn.x - ir.x, kn.y - ir.y)),
        startAngle: Math.atan2(kn.y - ir.y, kn.x - ir.x),
        projection: Ue
      }, U.beginGesture(), (Xi = v.setPointerCapture) == null || Xi.call(v, N.pointerId), v.style.cursor = Be.hit.kind === "rotate" ? "grabbing" : Be.hit.kind === "move" ? "move" : Be.hit.cursor, T();
      return;
    }
    (Ja = v.setPointerCapture) == null || Ja.call(v, N.pointerId), v.style.cursor = "grabbing", Le.startDrag(N.clientX, N.clientY, N.pointerId);
  }), v.addEventListener("pointermove", (N) => {
    if (!i) {
      if (!X) {
        if (!Le.state.drag.active) return;
        Yn(N, te), Le.moveDrag(N.clientX, N.clientY, "pano");
        return;
      }
      if (X.pointerId !== N.pointerId || !U) return;
      if (Yn(N, te), X.kind === "pan") {
        const Fe = Ce(N);
        U.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Fe.x - X.startPoint.x,
          dy: Fe.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const ye = gy(X.rollGesture, Ce(N), N);
      if (!ye) return;
      X.rollGesture = ye.gesture, U.updateGesture({ type: "set-roll", value: ye.rollDeg });
      return;
    }
    if (!A && !Le.state.drag.active) {
      x(N);
      return;
    }
    if (A) {
      if (A.pointerId !== N.pointerId || !U) return;
      Yn(N, te);
      const ye = Ce(N);
      let Fe = A.startSticker;
      if (A.kind === "move")
        Fe = TM(
          A.startSticker,
          {
            x: A.startCenter.x + ye.x - A.startPoint.x,
            y: A.startCenter.y + ye.y - A.startPoint.y
          },
          A.projection
        );
      else if (A.kind === "scale") {
        const Re = Math.hypot(ye.x - A.startCenter.x, ye.y - A.startCenter.y);
        Fe = DM(A.startSticker, A.startDistance, Re);
      } else if (A.kind === "rotate") {
        const Re = Math.atan2(ye.y - A.startCenter.y, ye.x - A.startCenter.x);
        Fe = LM(A.startSticker, A.startAngle, Re, N.shiftKey === !0);
      }
      U.updateGesture({ type: "set-transform", value: Fe }), T();
      return;
    }
    !o || !Le.state.drag.active || (Yn(N, te), Le.moveDrag(N.clientX, N.clientY, "pano"));
  });
  const M = () => {
    var ye, Fe;
    if (!X && !A) {
      if (!Le.state.drag.active) return;
      Le.endDrag(), v.style.cursor = "grab", T();
      return;
    }
    if (!U) return;
    const N = (X == null ? void 0 : X.pointerId) ?? (A == null ? void 0 : A.pointerId);
    X = null, A = null;
    try {
      (ye = v.hasPointerCapture) != null && ye.call(v, N) && ((Fe = v.releasePointerCapture) == null || Fe.call(v, N));
    } catch {
    }
    U.cancelGesture(), v.style.cursor = "grab", T();
  }, K = (N, ye = !1) => {
    var Fe, Re, Ue, qe;
    if (!i) {
      if (!X) {
        if (!Le.state.drag.active) return;
        Yn(N, te), (Fe = v.releasePointerCapture) == null || Fe.call(v, N.pointerId), v.style.cursor = "grab", Le.endDrag(), T();
        return;
      }
      if (X.pointerId !== N.pointerId || !U) return;
      Yn(N, te), X = null, (Re = v.releasePointerCapture) == null || Re.call(v, N.pointerId), v.style.cursor = "grab", ye ? U.cancelGesture() : U.commitGesture(), x(N), T();
      return;
    }
    if (A) {
      if (A.pointerId !== N.pointerId || !U) return;
      Yn(N, te), A = null, (Ue = v.releasePointerCapture) == null || Ue.call(v, N.pointerId), v.style.cursor = "grab", ye ? U.cancelGesture() : U.commitGesture(), T();
      return;
    }
    !o || !Le.state.drag.active || (Yn(N, te), (qe = v.releasePointerCapture) == null || qe.call(v, N.pointerId), v.style.cursor = "grab", Le.endDrag(), T());
  };
  v.addEventListener("pointerup", K), v.addEventListener("pointercancel", (N) => K(N, !0)), v.addEventListener("lostpointercapture", M), v.addEventListener("pointerleave", (N) => {
    !i && X || A || Le.state.drag.active && K(N);
  });
  const be = (N) => {
    const ye = document.activeElement;
    if (ye !== h && !h.contains(ye)) return;
    if (N.key === "Escape" && (X || A) && U) {
      M(), td(N);
      return;
    }
    if (!i || N.key !== "Delete" && N.key !== "Backspace" || !U) return;
    const Fe = N.target, Re = String((Fe == null ? void 0 : Fe.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Fe != null && Fe.isContentEditable || $.canDelete === !0 && (j(), Ne(), U.apply({ type: "delete-selected" }) && T(), td(N));
  };
  window.addEventListener("keydown", be, !0);
  const I = aP({
    requestFrame: (N) => requestAnimationFrame(N),
    cancelFrame: (N) => cancelAnimationFrame(N),
    restore: (N) => ZP(N)
  }), Z = (N) => {
    var Fe, Re, Ue, qe, Be, Qe;
    if (!Yn(N, te)) return;
    if (!i) {
      const dt = Wi(Pn(e));
      if (dt && dt.locked !== !0 && U) {
        const yt = al(N);
        yt !== 0 && (me || (Ne(), U.beginGesture(), me = !0), U.updateGesture({
          type: "step-fov",
          direction: yt
        }) ? (L && clearTimeout(L), L = setTimeout(ge, 180), T()) : U.hasGestureChanges() || (U.cancelGesture(), me = !1));
      } else if (!dt) {
        const yt = lm();
        Le.applyWheelEvent(N) && T(), I.schedule(yt);
      }
      (Fe = N.preventDefault) == null || Fe.call(N), (Re = N.stopPropagation) == null || Re.call(N), (Ue = N.stopImmediatePropagation) == null || Ue.call(N);
      return;
    }
    if (!o) return;
    const ye = lm();
    Le.applyWheelEvent(N) && T(), (qe = N.preventDefault) == null || qe.call(N), (Be = N.stopPropagation) == null || Be.call(N), (Qe = N.stopImmediatePropagation) == null || Qe.call(N), I.schedule(ye);
  }, ne = i ? [b, v] : [b];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((N) => {
    ne.forEach((ye) => ye.addEventListener(N, Z, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((N) => {
    v.addEventListener(N, (ye) => Yn(ye, te)), b.addEventListener(N, (ye) => Yn(ye, te));
  });
  const C = Ao(e, "state_json");
  let B = null, W = null;
  C && !C.__panoPreviewPatchedCb && (B = C.callback, W = (N) => {
    const ye = B ? B(N) : void 0;
    return T(), ye;
  }, C.callback = W, C.__panoPreviewPatchedCb = W);
  const Q = Ao(e, "bg_color");
  let ue = null, de = null;
  Q && !Q.__panoPreviewPatchedCb && (ue = Q.callback, de = (N) => {
    const ye = ue ? ue(N) : void 0;
    return T(), ye;
  }, Q.callback = de, Q.__panoPreviewPatchedCb = de);
  const J = e.onRemoved, fe = e.onResize, Ee = e.onExecuted, je = e.onDragOver, ce = e.onDragDrop;
  let xe = null;
  const Ie = () => {
    i && ($.dropActive = !0, xe && clearTimeout(xe), xe = setTimeout(() => {
      xe = null, $.dropActive = !1;
    }, 140));
  }, g = i ? function(N) {
    return (je ? je.apply(this, arguments) : !1) === !0 ? !0 : df(N == null ? void 0 : N.dataTransfer) ? (Ie(), !0) : !1;
  } : null, u = i ? function(N) {
    var Re;
    if ((ce ? ce.apply(this, arguments) : !1) === !0) return !0;
    const Fe = Array.from(((Re = N == null ? void 0 : N.dataTransfer) == null ? void 0 : Re.files) || []).find((Ue) => cr(Ue));
    return Fe ? (xe && clearTimeout(xe), xe = null, $.dropActive = !1, he(Fe), !0) : !1;
  } : null;
  i && (e.onDragOver = g, e.onDragDrop = u);
  const O = i ? oP(h, {
    onActive: (N) => {
      if (N) {
        Ie();
        return;
      }
      xe && clearTimeout(xe), xe = null, $.dropActive = !1;
    },
    onDrop: (N) => {
      he(N);
    }
  }) : () => {
  }, V = function(N) {
    e.__panoOutputFromRun = !0;
    const ye = Fy(e, N);
    qr(e, ye ? "executed" : "sync", N), T();
    const Fe = Ee ? Ee.apply(this, arguments) : void 0;
    return ya(e), Fe;
  };
  e.onExecuted = V;
  const k = e.onConnectionsChange, q = function(N, ye) {
    const Fe = $h(e, N, ye, Zd), Re = $h(e, N, ye, mi), Ue = arguments, qe = k ? k.apply(this, Ue) : void 0, Be = () => {
      F.destroyed || (Re && OP(e), Fe && qr(e, "connection-change"), ya(e), T());
    };
    return Be(), queueMicrotask(Be), qe;
  };
  e.onConnectionsChange = q;
  const ve = function() {
    const N = fe ? fe.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, T(), N;
  };
  e.onResize = ve;
  const se = function() {
    return Ve(), Qu.unregister(this), J ? J.apply(this, arguments) : void 0;
  };
  e.onRemoved = se;
  const Ve = () => {
    var N, ye, Fe, Re, Ue, qe, Be, Qe, dt;
    F.destroyed = !0, (N = pe == null ? void 0 : pe.disconnect) == null || N.call(pe), i ? Ne() : He(), v.removeEventListener("lostpointercapture", M), O(), w(), window.removeEventListener("keydown", be, !0), (Fe = (ye = e.__panoStateFlushers) == null ? void 0 : ye.delete) == null || Fe.call(ye, re), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Re = U == null ? void 0 : U.destroy) == null || Re.call(U), (Ue = R == null ? void 0 : R.unmount) == null || Ue.call(R), z && (z.playback.dispose(), z.video.remove(), z.stickerVideo.remove(), e.__panoSurfacePlayback === z && (e.__panoSurfacePlayback = null)), y.dispose(), e.__panoSurfaceScene = null, (Be = (qe = e.__panoRasterObjectSurfaceCache) == null ? void 0 : qe.dispose) == null || Be.call(qe), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Pe(), I.dispose(), xe && clearTimeout(xe), xe = null, ff.disposeOwner(e), Co(e), F.raf && cancelAnimationFrame(F.raf), F.raf = 0, ((Qe = e.__panoCutoutNodeSurface) == null ? void 0 : Qe.session) === U && (e.__panoCutoutNodeSurface = null), ((dt = e.__panoStickersNodeSurface) == null ? void 0 : dt.session) === U && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ve && (e.onResize = fe), e.onExecuted === V && (e.onExecuted = Ee), e.onConnectionsChange === q && (e.onConnectionsChange = k), W && (C == null ? void 0 : C.callback) === W && (C.callback = B), W && (C == null ? void 0 : C.__panoPreviewPatchedCb) === W && delete C.__panoPreviewPatchedCb, de && (Q == null ? void 0 : Q.callback) === de && (Q.callback = ue), de && (Q == null ? void 0 : Q.__panoPreviewPatchedCb) === de && delete Q.__panoPreviewPatchedCb, e.onDragOver === g && (e.onDragOver = je), e.onDragDrop === u && (e.onDragDrop = ce), e.onRemoved === se && (e.onRemoved = J);
  };
  e.__panoDomRestore = Ve, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = U && oe && !i ? { session: U, model: $ } : null, e.__panoStickersNodeSurface = U && oe && i ? { session: U, model: $ } : null, e.__panoDomPreview = {
    widget: G,
    root: h,
    canvas: v,
    requestDraw: T,
    state: F,
    emptyHintEl: S,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Qu.register(e), e.graph && qr(e, "attach"), T();
}
function um(e, t = {}) {
  Ay(e).attach({
    ...t,
    mode: "cutout"
  });
}
function dm(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Ny(e) && !r) {
    pf(e);
    return;
  }
  Ay(e).attach(t);
}
function oN(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function aN(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, p = Math.max(0, Number.isFinite(s) ? s : 0) * o, d = Number(r), f = d > 0 ? d : 1 / 0, h = Math.max(l, p);
  let b = h > 0 ? Math.min(1, f / h) : 1;
  return n && l > 0 && p > 0 && (b = Math.min(b, n.width * o / l, n.height * o / p)), {
    width: Math.max(1, Math.round(l * b)),
    height: Math.max(1, Math.round(p * b))
  };
}
function sN({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var b;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, p = () => {
    const v = l();
    return v === s || (s = v, i(v)), v;
  }, d = () => p();
  return (b = t == null ? void 0 : t.addEventListener) == null || b.call(t, "fullscreenchange", d), p(), { toggle: async () => {
    var v;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((v = t.exitFullscreen) == null ? void 0 : v.call(t));
      } catch {
      }
      return a ? !1 : (p(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), a) return !1;
        if (l())
          return p(), !0;
      } catch {
      }
    return a || (o(), p()), !1;
  }, isActive: l, destroy: () => {
    var v, S, w;
    if (!a) {
      if (a = !0, (v = t == null ? void 0 : t.removeEventListener) == null || v.call(t, "fullscreenchange", d), l())
        try {
          const P = (S = t.exitFullscreen) == null ? void 0 : S.call(t);
          (w = P == null ? void 0 : P.catch) == null || w.call(P, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const lN = { class: "pano-preview-node-surface" }, cN = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => ($e(), ze("div", lN, [
      nt(rn, {
        icon: e.model.fullscreen ? st(Xe).fullscreen_close : st(Xe).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: n[0] || (n[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? ($e(), tr(af, { key: 0 })) : vt("", !0)
    ]));
  }
}, As = 140, uN = 180, fm = 40, ou = 10;
function pm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function hm(e, t) {
  const r = pm(e), n = pm(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function mm(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = qt) == null ? void 0 : o.apiURL) == "function" ? qt.apiURL(i) : i;
}
function Io(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Io(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return mm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Io(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : mm(e);
}
function Ty(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function dN(e) {
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
function nd(e) {
  var i;
  const t = (i = Zn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (hm(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (hm(o, r)) return t[o];
  return null;
}
function fN(e) {
  var n, i;
  const t = nd(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Io(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function pN(e, t = "erp_image") {
  var b, v, S, w, P, G, F;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((T) => String((T == null ? void 0 : T.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((T, y) => String((T == null ? void 0 : T.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(y))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (S = (v = (b = Zn) == null ? void 0 : b.graph) == null ? void 0 : v.getNodeById) == null ? void 0 : S.call(v, o), s = nd(o), l = nd(e == null ? void 0 : e.id), p = [
    (w = l == null ? void 0 : l.ui) == null ? void 0 : w.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (P = s == null ? void 0 : s.ui) == null ? void 0 : P.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const T of p)
    if (Array.isArray(T))
      for (const y of T) {
        const $ = Io(y);
        if ($) return $;
      }
  let d = [];
  try {
    d = typeof ((G = Zn) == null ? void 0 : G.getNodeImageUrls) == "function" ? Zn.getNodeImageUrls(a) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const T of d) {
      const y = Io(T);
      if (y) return y;
    }
  if (a) {
    const T = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const y of T) {
      const $ = Io(y);
      if ($) return $;
    }
  }
  const f = (F = a == null ? void 0 : a.widgets) == null ? void 0 : F.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image"), h = String((f == null ? void 0 : f.value) || "").trim();
  return h ? qt.apiURL(`/view?filename=${encodeURIComponent(h)}&type=input&subfolder=`) : "";
}
function au(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function gm(e, t, r, n, i, o, a) {
  var p, d, f;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !Ty(o) || r <= 1 || n <= 1) {
    au(t, r, n);
    return;
  }
  if (a.failed) {
    au(t, r, n);
    return;
  }
  const s = Number(((f = (d = (p = e == null ? void 0 : e.widgets) == null ? void 0 : p.find) == null ? void 0 : d.call(p, (h) => (h == null ? void 0 : h.name) === "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: yl(i, r, n),
    background: { media: o, revision: dN(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : au(t, r, n);
}
function ym(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class hN {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = V0(() => this.requestDraw()), this.controller = Id({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: zt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: De(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: De(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, a, s;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((a = this.canvas) == null ? void 0 : a.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((s = this.canvas) == null ? void 0 : s.clientHeight) || 0))
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
    var n, i, o;
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
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (a) => (a == null ? void 0 : a.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...a) => {
      const s = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...a) : void 0;
      return t.requestDraw(), s;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      var o;
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!r || (o = this.flags) != null && o.collapsed || !t.errorText) return n;
      const i = t.getLegacyPreviewRect();
      return r.save(), r.fillStyle = "rgba(18,18,22,0.92)", r.strokeStyle = "rgba(82,82,89,1)", r.lineWidth = 1, r.beginPath(), r.roundRect(i.x, i.y, i.w, i.h, 8), r.fill(), r.stroke(), r.fillStyle = "rgba(236,236,242,0.92)", r.font = "600 12px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t.errorText, i.x + i.w * 0.5, i.y + i.h * 0.5), r.restore(), n;
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
      ].join(";"), this.canvas = vn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
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
      if (this.widget = wl(qu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(As, Number(o.minHeight || 0)),
            minWidth: Math.max(uN, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, a;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return cf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ $o({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = sN({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = kd(cN, {
        model: this.surfaceModel,
        onAction: (s) => {
          var l, p;
          (s == null ? void 0 : s.type) === "toggle-fullscreen" && ((p = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || p.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var s, l;
          return (l = (s = this.fullscreenController) == null ? void 0 : s.toggle) == null ? void 0 : l.call(s);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Vg(r), t.addEventListener("pointerdown", (o) => {
      var a, s, l;
      o.button === 0 && ((a = r.focus) == null || a.call(r, { preventScroll: !0 }), (s = t.setPointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var a;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
    const n = (o) => {
      var a, s;
      this.controller.state.drag.active && ((a = t.releasePointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var a;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var a;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o);
    }), r.addEventListener("keydown", (o) => {
      var a;
      oN(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Ty(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Bu(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Zn.canvas) != null && n.graph) || this.node.graph === Zn.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var a;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return ym(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var a;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, p, d, f, h, b;
      const o = RP(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !ym(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((p = t.view) == null ? void 0 : p.fov) || 100), s && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (f = r == null ? void 0 : r.preventDefault) == null || f.call(r), (h = r == null ? void 0 : r.stopPropagation) == null || h.call(r), (b = r == null ? void 0 : r.stopImmediatePropagation) == null || b.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - ou * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - fm - ou);
    return { x: ou, y: fm, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), gm(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? R0 : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = aN(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = fN(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = Kl(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, p = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", p), s.addEventListener("play", p), s.addEventListener("pause", p), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", p), s.removeEventListener("play", p), s.removeEventListener("pause", p), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = pN(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.imgSrc = r;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === r && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === r && (this.img = null, this.previewView.release(), this.requestDraw());
    }, this.mediaCleanup = () => {
      n.onload = null, n.onerror = null;
    }, n.src = r;
  }
  requestDraw() {
    var t, r;
    if (!this.tearingDown) {
      if (this.needsDraw = !0, this.inTick) {
        this.queuedDuringTick = !0;
        return;
      }
      this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (r = (t = this.node).setDirtyCanvas) == null || r.call(t, !0, !1);
    }
  }
  tick(t = performance.now()) {
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const r = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), gm(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, p, d, f, h, b, v, S, w, P;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (p = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || p.call(l), this.surfaceApp = null, (f = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || f.call(d), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (h = this.mediaCleanup) == null || h.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (v = (b = this.root) == null ? void 0 : b.remove) == null || v.call(b);
    } catch {
    }
    try {
      My(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((P = (w = (S = this.node) == null ? void 0 : S.widgets) == null ? void 0 : w.find) == null ? void 0 : P.call(w, (G) => (G == null ? void 0 : G.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function mN(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new hN(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function Dy(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const s = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const s = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
  const a = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const s = a ? a.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return s;
  };
}
function mf(e) {
  return !!(e != null && e.prototype);
}
function Ka(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function gN(e, t = {}) {
  mf(e) || mN(e, {
    ...t,
    onOpen: Ka(e, t.onOpen)
  });
}
function yN(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!mf(e)) {
    dm(e, {
      ...n,
      onOpen: Ka(e, t.onOpen)
    });
    return;
  }
  Dy(e, "stickers_node_preview", (i) => {
    dm(i, {
      ...n,
      onOpen: Ka(i, t.onOpen)
    });
  });
}
function bN(e, t = {}) {
  if (!mf(e)) {
    um(e, {
      ...t,
      onOpen: Ka(e, t.onOpen)
    });
    return;
  }
  Dy(e, "cutout_preview", (r) => {
    um(r, {
      ...t,
      onOpen: Ka(r, t.onOpen)
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
function bm(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function vN({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [a, s] of Object.entries(r))
      n.delete(a) && s();
  }
  return {
    request(a) {
      n.add(a), i ?? (i = e(o));
    },
    cancel() {
      n.clear(), i !== null && t(i), i = null;
    }
  };
}
const wt = Object.freeze({
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
}), _N = new Set(Object.values(wt));
function SN({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), d = 1, f = 0;
  function h(S) {
    try {
      S();
    } catch (w) {
      i(w);
    }
  }
  function b() {
    !o && !a && !s && (o = e(v));
  }
  function v(S) {
    o = 0, a = !0;
    try {
      const w = p;
      p = /* @__PURE__ */ new Map();
      for (const G of w.values()) h(() => G(S));
      if (s) return;
      const P = l;
      l = /* @__PURE__ */ new Set(), (P.size || n()) && h(() => r(S, P));
    } finally {
      a = !1;
    }
    (l.size || p.size || n()) && b();
  }
  return {
    requestDraw(S) {
      if (!_N.has(S)) throw new Error(`Unknown draw reason: ${S}`);
      S === wt.STATE && (f += 1), l.add(S), b();
    },
    requestFrame(S) {
      const w = d++;
      return p.set(w, S), b(), w;
    },
    cancelFrame(S) {
      p.delete(S);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      b();
    },
    get stateRevision() {
      return f;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      s = !0, o && t(o), o = 0, p.clear(), l.clear();
    }
  };
}
const wN = 250, xN = 600, kN = 180, MN = 2;
function PN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ba(e, t, r) {
  return e + (t - e) * r;
}
function NN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Cd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / kN + i / MN);
  return Math.round(ba(wN, xN, o));
}
function AN(e, t, r) {
  const n = PN(De(r, 0, 1));
  return {
    position: e.position.map((i, o) => ba(i, t.position[o], n)),
    yaw_deg: zt(e.yaw_deg + Cd(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: ba(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: ba(e.hFOV_deg, t.hFOV_deg, n),
    distance: ba(e.distance, t.distance, n)
  };
}
function CN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Cd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function IN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return CN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: NN(e, t, n), end: i };
}
function EN(e, t) {
  const r = De((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: AN(e.from, e.to, r), done: !1 };
}
function Nl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function ON(e, t, r) {
  const n = Nl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function bo(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function FN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function TN({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: a,
  getBrushPresetIdForTool: s,
  isActiveLassoTool: l
}) {
  var F, T;
  const p = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
    visible: p,
    activePane: p ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: p ? !!r : !1,
    pickerHueColor: n({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (y, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!p) return d;
  const f = ((F = t.find((y) => i(e.paintColor, y.color))) == null ? void 0 : F.id) || "", h = !f, b = o(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), S = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), w = e.brushSizes[S] ?? 10, P = l(), G = Array.from({ length: 8 }, (y, $) => e.customPaintHistory[$] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: f,
    customColorActive: h,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(b.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, b.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, b.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, b.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, b.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, b.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, b.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: G.map((y, $) => ({
      index: $,
      color: y ? { cssColor: n(y, 1) } : null
    })),
    sizeValue: w,
    sizeText: String(w),
    sizeFill: `${Math.max(0, Math.min(100, (w - 1) / 119 * 100))}%`,
    sizeDisabled: P,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function DN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
  return {
    coverage: { value: r(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const LN = {
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
function RN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = LN[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function su(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function VN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
  const o = !n && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!r || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!r || !!n },
      "toggle-grid": {
        icon: o ? Xe.eye : Xe.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function $N({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function zN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Eo = "erp", jN = ["1:1", "4:3", "3:2", "16:9"];
function Ly(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...jN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: Eo, label: Number(r) === 180 ? "180°" : "360°", active: e === Eo }] : []
  ];
}
function HN({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: a,
  notes: s,
  uiSettings: l,
  normalizeCoverageValue: p
}) {
  return {
    coverage: { value: p(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: RN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function GN({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: p,
  isExternalSticker: d,
  isStickerHidden: f,
  canRestoreSelectedToInitial: h,
  iconSet: b,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: v = !1,
  cameraDeletable: S = !1,
  erpChoice: w = !1,
  coverage: P = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let G = [];
  if (r.length > 1)
    G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: b.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: b.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? b.lock_open : b.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: b.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: b.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: b.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? b.lock_open : b.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: b.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: b.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: b.send_back, disabled: !!s }
    ], d(t) || (G.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: b.duplicate }), G.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: b.replace_image })), d(t)) {
      const F = h(), T = f(t);
      G.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: F ? "Back to initial position" : "Already at initial position",
        icon: b.back_initial,
        disabled: !F
      }), G.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? b.eye : b.eye_dashed
      });
    }
    G.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? b.lock_open : b.lock_closed }), d(t) || G.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: b.delete, disabled: !!s });
  } else
    G = [
      {
        key: "aspect",
        kind: "aspect",
        icon: b.aspect,
        open: !!p,
        choices: Ly(l, { erp: w, coverage: P })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: b.rotate_90, disabled: l === Eo }
    ], v ? S && G.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: b.delete }) : G.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? b.lock_open : b.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: b.delete, disabled: !!s }
    );
  return Ry(i.corners, G);
}
const vm = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function WN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? vm.filter((s) => s.cameraTip) : vm;
  return Ry([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: p, cameraTip: d }) => ({ key: s, label: l, tip: n ? d : p, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Xe.delete }] : []
  ]);
}
function KN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: p, maxY: d } = e || {};
  if (![s, l, p, d].every(Number.isFinite)) return null;
  const f = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), h = Math.max(14, i - r - 14), b = d + 18, v = p - 18 - r;
  let S;
  return b <= h ? S = Math.max(b, 14) : v >= 14 ? S = Math.min(v, h) : S = Math.min(Math.max(b, 14), h), { left: f, top: S };
}
function Ry(e, t) {
  const r = e.map((p) => ({ x: Number(p == null ? void 0 : p.x), y: Number(p == null ? void 0 : p.y) })).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((p) => p.x), i = r.map((p) => p.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const Vy = "painting";
function BN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const UN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function YN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: p = !1, stickers: d = !0, scene: f = !1, sceneLocked: h = !1 }) {
  const b = (G, F, T, y, $, z, { keyable: ee = !0, hideable: ie = !0 } = {}) => {
    const j = (H) => (r == null ? void 0 : r.owner) === G && r.lane === H ? r.frames.map((U) => U + z) : [];
    return {
      id: G,
      label: T,
      icon: y,
      clip: $,
      selected: G === n,
      hideable: ie,
      visible: F.visible,
      keyable: ee,
      open: ee && o.has(G),
      keys: ex(F).map((H) => ({ frame: H.frame + z, full: H.full })),
      selectedFrames: j(null),
      lanes: (ee ? Go(F) : []).map((H) => ({
        key: `${G}:${H}`,
        lane: H,
        label: UN[H],
        frames: F[H].keyframes.map((U) => U.frame + z),
        selectedFrames: j(H)
      }))
    };
  }, v = d ? e.stickers : [], S = v.filter((G) => G.placement === "sky").sort((G, F) => F.z_index - G.z_index), w = v.filter((G) => G.placement === "world"), P = ({ start: G, in: F, duration: T }) => ({ clip: { start: G, end: T === null ? null : G + T }, offset: G - F });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || h,
    lengthLocked: h,
    lockTip: h ? "Set by the scene" : "Set by the video input",
    length: h ? t : e.timeline.length,
    rows: [
      ...l ? [b("camera", e.camera, "Camera", Xe.camera, null, 0, { hideable: p })] : [],
      ...[...S, ...w].map((G) => {
        const { clip: F, offset: T } = P(G.clip);
        return b(G.id, G, Tu(G), Xe.image, F, T);
      }),
      ...d && (BN(e.painting) || !e.painting_visible) ? [{
        id: Vy,
        label: "Paint",
        icon: Xe.paintbrush_vertical_tool,
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
      ...d && (f || ml(e.scene)) ? [(() => {
        const { clip: G, offset: F } = P(e.scene.clip);
        return b("scene", e.scene, "Scene", Xe.box, G, F, { keyable: !1 });
      })()] : []
    ]
  };
}
function qN(e, t, r, n) {
  const i = ix(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
const XN = { class: "pano-floating-right" }, JN = {
  key: 0,
  class: "pano-floating-space"
}, ZN = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, QN = ["data-settled"], e2 = ["data-ready", "data-settled"], t2 = ["aria-label", "data-tip"], n2 = {
  key: 1,
  class: "pano-camera-preview-label"
}, r2 = {
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
    return (t, r) => ($e(), ze(at, null, [
      ke("div", XN, [
        e.space ? Yr(($e(), ze("div", JN, [
          ke("div", ZN, [
            ($e(!0), ze(at, null, Et(e.space.modes, (n) => ($e(), tr(rn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          nt(rn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ki, e.space.visible]
        ]) : vt("", !0),
        ($e(!0), ze(at, null, Et(e.buttons, (n) => ($e(), tr(rn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Yr(ke("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ke("div", {
          class: bt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Ft({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = ke("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            ke("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? ($e(), ze("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            nt(Ht, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, t2)) : vt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? ($e(), ze("div", n2, ft(e.preview.label || "Preview unavailable"), 1)) : vt("", !0)
        ], 14, e2)
      ], 8, QN), [
        [Ki, e.preview.visible]
      ])
    ], 64));
  }
}, i2 = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, o2 = ["y2", "transform"], a2 = ["transform"], s2 = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = mt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Yr(($e(), ze("div", {
      class: bt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      ($e(), ze("svg", i2, [
        o[1] || (o[1] = ke("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        ($e(!0), ze(at, null, Et(st(r), (a) => ($e(), ze("line", {
          key: a,
          class: bt(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, o2))), 128)),
        ke("g", { transform: n.value }, [...o[0] || (o[0] = [
          ke("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, a2),
        o[2] || (o[2] = ke("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ki, e.model.visible === !0]
    ]);
  }
}, l2 = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => ($e(), ze("div", {
      class: bt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      nt(by, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      nt(rn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      nt(s2, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, c2 = ["aria-label"], u2 = { class: "pano-canvas-confirm-title" }, d2 = { class: "pano-canvas-confirm-text" }, f2 = { class: "pano-canvas-confirm-actions" }, p2 = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, h2 = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Xt(null), n = /* @__PURE__ */ Xt(null);
    let i = null;
    function o() {
      const f = n.value;
      return f ? Array.from(f.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((h) => h instanceof HTMLElement ? !h.hidden && h.tabIndex >= 0 && h.offsetParent !== null : !1) : [];
    }
    function a(f) {
      const h = n.value;
      if (!h) return;
      const b = h.querySelector(`[data-action='${f}']`);
      b instanceof HTMLButtonElement && b.click();
    }
    function s() {
      var S;
      const f = n.value;
      if (!f) return;
      const h = f.querySelector("[data-action='confirm-accept']");
      if (h instanceof HTMLElement) {
        h.focus();
        return;
      }
      const v = o()[0] || f;
      (S = v == null ? void 0 : v.focus) == null || S.call(v);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function p(f) {
      var P;
      if (f.defaultPrevented) return;
      if (f.key === "Escape") {
        f.preventDefault(), f.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (f.key !== "Tab") return;
      const h = o(), b = n.value;
      if (!h.length) {
        f.preventDefault(), (P = b == null ? void 0 : b.focus) == null || P.call(b);
        return;
      }
      const v = h[0], S = h[h.length - 1], w = document.activeElement;
      if (f.shiftKey) {
        (w === v || w === b || !(b != null && b.contains(w))) && (f.preventDefault(), S.focus());
        return;
      }
      (w === S || !(b != null && b.contains(w))) && (f.preventDefault(), v.focus());
    }
    function d(f) {
      f.target === r.value && a("confirm-cancel");
    }
    return ji(() => t.model.visible, (f, h) => {
      if (f) {
        i = document.activeElement, $l(() => {
          s();
        });
        return;
      }
      h && l();
    }, { immediate: !0 }), qa(() => {
      l();
    }), (f, h) => e.model.visible === !0 ? ($e(), ze("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Vt(d, ["self"])
    }, [
      ke("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: p
      }, [
        ke("div", u2, ft(e.model.title), 1),
        ke("div", d2, ft(e.model.text), 1),
        ke("div", f2, [
          h[0] || (h[0] = ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ke("button", p2, ft(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, c2)
    ], 512)) : vt("", !0);
  }
}, m2 = ["data-paint-pane"], g2 = ["hidden"], y2 = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], b2 = ["aria-pressed", "disabled"], v2 = ["hidden"], _2 = { class: "pano-paint-color-pop-head" }, S2 = { class: "pano-paint-color-field" }, w2 = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, x2 = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, k2 = { class: "pano-paint-color-field" }, M2 = { class: "pano-paint-alpha-wrap" }, P2 = ["value"], N2 = { "data-paint-alpha-value": "" }, A2 = ["hidden"], C2 = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, I2 = ["data-paint-history-index", "aria-label", "disabled"], E2 = ["data-paint-footer"], O2 = ["data-paint-group"], F2 = ["hidden"], T2 = ["value", "disabled"], D2 = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, L2 = ["hidden"], R2 = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    function r(n) {
      return n ? { "--swatch": String(n.cssColor || "") } : {};
    }
    return (n, i) => ($e(), ze("div", {
      class: bt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      ($e(!0), ze(at, null, Et(e.panes, (o) => {
        var a;
        return $e(), ze("div", {
          key: o.key,
          class: bt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? ($e(), ze("div", {
            key: 0,
            class: bt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            ($e(!0), ze(at, null, Et(e.paintSwatches, (s) => ($e(), ze("button", {
              key: s.id,
              class: bt(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: Ft(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, y2))), 128)),
            ke("button", {
              class: bt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ft({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, b2),
            ke("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Ft({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ke("div", _2, [
                ke("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ft({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = ke("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ke("div", S2, [
                ke("div", w2, [
                  ke("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ft({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ke("div", x2, [
                  ke("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ft({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ke("label", k2, [
                i[1] || (i[1] = ke("span", null, "Opacity", -1)),
                ke("div", M2, [
                  ke("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, P2),
                  ke("span", N2, ft(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ke("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ke("div", C2, [
                  ($e(!0), ze(at, null, Et(e.state.historyEntries || [], (s) => ($e(), ze("button", {
                    key: s.index,
                    class: bt(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Ft(r(s.color))
                  }, null, 14, I2))), 128))
                ])
              ], 8, A2)
            ], 12, v2)
          ], 10, g2)) : vt("", !0),
          ke("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            ke("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              ($e(!0), ze(at, null, Et(o.tools, (s) => {
                var l;
                return $e(), tr(rn, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, O2),
            ke("div", {
              class: bt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ke("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Ft({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, T2),
              ke("span", D2, ft(e.state.sizeText || "10"), 1)
            ], 10, F2),
            ke("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              nt(rn, {
                icon: st(Xe).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, L2)
          ], 8, E2)
        ], 10, m2);
      }), 128))
    ], 2));
  }
}, V2 = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Xt(null), n = /* @__PURE__ */ Xt(null), i = /* @__PURE__ */ Xt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => ($e(), ze(at, null, [
      ke("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ke("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ke("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, $2 = ["aria-label"], z2 = ["data-tip", "aria-pressed"], j2 = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = mt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => ($e(), ze("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Ft({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      ($e(!0), ze(at, null, Et(e.buttons, (o) => ($e(), ze("button", Gr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), ft(o.label), 17, z2))), 128))
    ], 12, $2));
  }
}, H2 = {
  key: 0,
  class: "pano-cutout-menu"
}, G2 = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, W2 = ["data-aspect"], K2 = ["data-action", "aria-label", "data-tip", "disabled"], B2 = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => ($e(), ze("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ft({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      ($e(!0), ze(at, null, Et(e.model.items || [], (n) => ($e(), ze(at, {
        key: n.key
      }, [
        n.kind === "aspect" ? ($e(), ze("div", H2, [
          ke("button", G2, [
            nt(Ht, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          ke("div", {
            class: bt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            ($e(!0), ze(at, null, Et(n.choices || [], (i) => ($e(), ze("button", {
              key: i.value,
              class: bt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, ft(i.label), 11, W2))), 128))
          ], 2)
        ])) : n.kind === "segments" ? ($e(), tr(j2, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : ($e(), ze("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          nt(Ht, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, K2))
      ], 64))), 128))
    ], 4));
  }
}, U2 = {
  key: 0,
  class: "pano-easing"
}, Y2 = { class: "pano-section-title" }, q2 = { class: "pano-easing-range" }, X2 = { class: "pano-easing-modes" }, J2 = ["aria-pressed", "onClick"], Z2 = ["viewBox"], Q2 = ["x", "y"], eA = ["x1", "y1", "x2", "y2"], tA = ["d"], nA = ["x1", "y1", "x2", "y2"], rA = ["x1", "y1", "x2", "y2"], iA = ["cx", "cy"], oA = ["cx", "cy"], aA = { class: "pano-easing-note" }, $r = 132, Ei = 14, sA = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], o = /* @__PURE__ */ Xt(null), a = mt(() => {
      var v;
      return Array.isArray((v = r.model) == null ? void 0 : v.easing) ? r.model.easing : null;
    }), s = (v) => Ei + v * $r, l = (v) => Ei + (1 - v) * $r, p = mt(() => {
      var G;
      if (((G = r.model) == null ? void 0 : G.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [v, S, w, P] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(v)} ${l(S)} ${s(w)} ${l(P)} ${s(1)} ${l(1)}`;
    }), d = mt(() => a.value ? a.value.map((v) => v.toFixed(2)).join(", ") : "");
    function f(v) {
      var S;
      return JSON.stringify(v.easing) === JSON.stringify((S = r.model) == null ? void 0 : S.easing);
    }
    function h(v, S) {
      n("timeline", { type: "easing", easing: v, commit: S });
    }
    function b(v, S) {
      var T;
      if (v.button !== 0 || !a.value) return;
      const w = v.currentTarget;
      (T = w.setPointerCapture) == null || T.call(w, v.pointerId);
      let P = null;
      const G = (y) => {
        const $ = o.value.getBoundingClientRect(), z = $.width / ($r + Ei * 2), ee = ((y.clientX - $.left) / z - Ei) / $r, ie = 1 - ((y.clientY - $.top) / z - Ei) / $r;
        P = [...P || a.value], P[S] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, P[S + 1] = Math.round(Math.min(1, Math.max(0, ie)) * 100) / 100, h(P, !1);
      }, F = () => {
        w.removeEventListener("pointermove", G), w.removeEventListener("pointerup", F), w.removeEventListener("pointercancel", F), P && h(P, !0);
      };
      w.addEventListener("pointermove", G), w.addEventListener("pointerup", F), w.addEventListener("pointercancel", F);
    }
    return (v, S) => e.model ? ($e(), ze("div", U2, [
      ke("div", Y2, [
        S[2] || (S[2] = ke("span", null, "Easing", -1)),
        ke("span", q2, ft(e.model.label), 1)
      ]),
      ke("div", X2, [
        ($e(), ze(at, null, Et(i, (w) => ke("button", {
          key: w.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": f(w) ? "true" : "false",
          onClick: (P) => h(w.easing, !0)
        }, ft(w.label), 9, J2)), 64))
      ]),
      a.value || e.model.easing === "hold" ? ($e(), ze("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${$r + Ei * 2} ${$r + Ei * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        ke("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: $r,
          height: $r
        }, null, 8, Q2),
        ke("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, eA),
        ke("path", {
          class: "pano-easing-curve",
          d: p.value
        }, null, 8, tA),
        a.value ? ($e(), ze(at, { key: 0 }, [
          ke("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, nA),
          ke("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, rA),
          ke("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: S[0] || (S[0] = (w) => b(w, 0))
          }, null, 40, iA),
          ke("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: S[1] || (S[1] = (w) => b(w, 2))
          }, null, 40, oA)
        ], 64)) : vt("", !0)
      ], 8, Z2)) : vt("", !0),
      ke("div", aA, [
        e.model.mixed ? ($e(), ze(at, { key: 0 }, [
          fa("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? ($e(), ze(at, { key: 1 }, [
          fa("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? ($e(), ze(at, { key: 2 }, [
          fa("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? ($e(), ze(at, { key: 3 }, [
          fa("cubic-bezier(" + ft(d.value) + ")", 1)
        ], 64)) : vt("", !0)
      ])
    ])) : vt("", !0);
  }
}, lA = {
  class: "pano-side",
  "data-side": ""
}, cA = { class: "pano-side-head" }, uA = { class: "pano-side-title" }, dA = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, fA = {
  key: 0,
  class: "pano-side-scroll"
}, pA = { class: "pano-inspector" }, hA = { class: "pano-ui-row pano-coverage-row" }, mA = ["data-selected"], gA = ["aria-pressed", "disabled"], yA = ["aria-pressed", "disabled"], bA = {
  key: 0,
  class: "pano-section-title"
}, vA = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, _A = {
  class: "pano-picker",
  "data-picker": "selection"
}, SA = ["disabled"], wA = { class: "pano-picker-label" }, xA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, kA = ["hidden"], MA = ["data-selection-id"], PA = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, NA = {
  key: 2,
  class: "pano-state-actions"
}, AA = ["disabled"], CA = ["data-key"], IA = { class: "pano-field-group-values" }, EA = ["title", "onPointerdown"], OA = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], FA = ["data-key"], TA = ["min", "max", "step", "value", "disabled", "data-param-key"], DA = ["min", "max", "step", "value", "disabled", "data-param-key"], LA = ["open"], RA = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, VA = { class: "pano-ui-settings-body" }, $A = { class: "pano-ui-row" }, zA = ["data-selected"], jA = ["aria-pressed"], HA = ["aria-pressed"], GA = { class: "pano-ui-row" }, WA = ["data-selected"], KA = ["aria-pressed"], BA = ["aria-pressed"], UA = {
  key: 1,
  class: "pano-side-footer"
}, YA = ["data-action"], qA = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = mt(() => {
      const p = r.model;
      return !p || typeof p != "object" ? !1 : Object.keys(p).length > 0 && !!p.coverage;
    });
    function o(p) {
      return { "--v": `${Number((p == null ? void 0 : p.fillPct) || 0)}%` };
    }
    function a(p, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (p == null ? void 0 : p.enabled) === !1;
    }
    const s = {};
    function l(p, d) {
      const f = s[d.key];
      if (p.button !== 0 || !f || a(d, r.model)) return;
      p.preventDefault();
      const h = p.currentTarget, b = p.clientX, v = Number(f.value) || 0;
      let S = !1;
      h.setPointerCapture(p.pointerId);
      const w = (G) => {
        if (!S && Math.abs(G.clientX - b) < 3) return;
        S = !0;
        const F = v + (G.clientX - b) * d.drag * (G.shiftKey ? 0.1 : 1);
        f.value = String(Number(F.toFixed(3))), f.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, P = () => {
        h.removeEventListener("pointermove", w), h.removeEventListener("pointerup", P), h.removeEventListener("pointercancel", P), h.removeEventListener("lostpointercapture", P), S ? f.dispatchEvent(new Event("change", { bubbles: !0 })) : f.focus();
      };
      h.addEventListener("pointermove", w), h.addEventListener("pointerup", P), h.addEventListener("pointercancel", P), h.addEventListener("lostpointercapture", P);
    }
    return (p, d) => {
      var f, h, b, v, S;
      return $e(), ze("div", lA, [
        ke("div", cA, [
          ke("div", uA, [
            ke("span", dA, [
              nt(Ht, {
                icon: st(Xe).globe
              }, null, 8, ["icon"])
            ]),
            ke("span", null, ft(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = ke("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = ke("div", { class: "pano-divider" }, null, -1)),
        i.value ? ($e(), ze("div", fA, [
          ke("div", pA, [
            d[9] || (d[9] = ke("div", { class: "pano-section-title" }, [
              ke("span", null, "Scene")
            ], -1)),
            ke("div", hA, [
              d[2] || (d[2] = ke("label", null, "Coverage", -1)),
              ke("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((h = e.model.coverage) == null ? void 0 : h.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, gA),
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "true" : "false",
                  disabled: ((S = e.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "180", 8, yA)
              ], 8, mA)
            ]),
            e.model.transformTitle !== !1 ? ($e(), ze("div", bA, [...d[3] || (d[3] = [
              ke("span", null, "Transform", -1)
            ])])) : vt("", !0),
            e.model.selectionPicker ? ($e(), ze("div", vA, [
              ke("label", null, ft(e.model.selectionPicker.label), 1),
              ke("div", _A, [
                ke("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ke("span", wA, [
                    e.model.selectionPicker.currentIcon ? ($e(), ze("span", xA, [
                      nt(Ht, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : vt("", !0),
                    ke("span", null, ft(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = ke("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, SA),
                ke("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  ($e(!0), ze(at, null, Et(e.model.selectionPicker.items || [], (w) => ($e(), ze("button", {
                    key: w.id,
                    type: "button",
                    class: bt(["pano-picker-item", { active: w.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": w.id
                  }, [
                    w.icon ? ($e(), ze("span", PA, [
                      nt(Ht, {
                        icon: w.icon
                      }, null, 8, ["icon"])
                    ])) : vt("", !0),
                    ke("span", null, ft(w.label), 1)
                  ], 10, MA))), 128))
                ], 8, kA)
              ])
            ])) : vt("", !0),
            e.model.copyStateButton ? ($e(), ze("div", NA, [
              ke("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                nt(Ht, {
                  icon: st(Xe).copy
                }, null, 8, ["icon"]),
                ke("span", null, ft(e.model.copyStateButton.label), 1)
              ], 8, AA)
            ])) : vt("", !0),
            ke("div", {
              class: bt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? ($e(!0), ze(at, { key: 0 }, Et(e.model.notes, (w) => ($e(), ze("div", {
                key: w,
                class: "pano-param-note"
              }, ft(w), 1))), 128)) : ($e(!0), ze(at, { key: 1 }, Et(e.model.rows || [], (w) => ($e(), ze(at, {
                key: w.key
              }, [
                w.grouped ? ($e(), ze("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": w.key
                }, [
                  ke("label", null, ft(w.label), 1),
                  ke("div", IA, [
                    ($e(!0), ze(at, null, Et(w.fields, (P) => ($e(), ze("div", {
                      key: P.key,
                      class: "pano-axis-field"
                    }, [
                      ke("span", {
                        class: bt(["pano-axis", { disabled: a(P, e.model) }]),
                        title: P.label,
                        onPointerdown: (G) => l(G, P)
                      }, ft(P.short), 43, EA),
                      ke("input", {
                        ref_for: !0,
                        ref: (G) => {
                          s[P.key] = G;
                        },
                        type: "number",
                        min: P.min,
                        max: P.max,
                        step: P.step,
                        value: P.displayValue,
                        disabled: a(P, e.model),
                        "aria-label": `${w.label} ${P.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": P.key
                      }, null, 8, OA)
                    ]))), 128))
                  ])
                ], 8, CA)) : ($e(), ze("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": w.key
                }, [
                  ke("label", null, ft(w.label), 1),
                  ke("input", {
                    type: "range",
                    min: w.fields[0].min,
                    max: w.fields[0].max,
                    step: w.fields[0].step,
                    value: w.fields[0].value,
                    disabled: a(w.fields[0], e.model),
                    style: Ft(o(w.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": w.fields[0].key
                  }, null, 12, TA),
                  ke("input", {
                    type: "number",
                    min: w.fields[0].min,
                    max: w.fields[0].max,
                    step: w.fields[0].step,
                    value: w.fields[0].displayValue,
                    disabled: a(w.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": w.fields[0].key
                  }, null, 8, DA)
                ], 8, FA))
              ], 64))), 128))
            ], 2),
            nt(sA, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (w) => n("timeline", w))
            }, null, 8, ["model"]),
            e.model.uiSettings ? ($e(), ze("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ke("summary", null, [
                d[5] || (d[5] = ke("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ke("span", RA, [
                  nt(Ht, {
                    icon: st(Xe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ke("div", VA, [
                ke("div", $A, [
                  d[6] || (d[6] = ke("label", null, "Drag X", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, jA),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, HA)
                  ], 8, zA)
                ]),
                ke("div", GA, [
                  d[7] || (d[7] = ke("label", null, "Drag Y", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, KA),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, BA)
                  ], 8, WA)
                ]),
                d[8] || (d[8] = ke("div", { class: "pano-ui-row" }, [
                  ke("span"),
                  ke("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, LA)) : vt("", !0)
          ])
        ])) : vt("", !0),
        (e.model.footerButtons || []).length ? ($e(), ze("div", UA, [
          ($e(!0), ze(at, null, Et(e.model.footerButtons, (w) => ($e(), ze("button", {
            key: w.action,
            class: bt(["pano-btn", { "pano-btn-primary": w.primary === !0 }]),
            type: "button",
            "data-action": w.action
          }, ft(w.label), 11, YA))), 128))
        ])) : vt("", !0)
      ]);
    };
  }
}, XA = { class: "pano-timeline-bar" }, JA = ["aria-label", "data-tip"], ZA = ["aria-label", "data-tip"], QA = { class: "pano-timeline-time" }, eC = ["data-tip"], tC = { key: 0 }, nC = ["min", "max", "value"], rC = ["data-tip"], iC = { key: 0 }, oC = ["max", "value"], aC = ["aria-expanded"], sC = ["inert"], lC = { class: "pano-timeline-name" }, cC = ["aria-pressed", "aria-label", "data-tip", "onClick"], uC = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, dC = ["disabled", "aria-expanded", "aria-label", "onClick"], fC = ["title", "aria-current", "onClick"], pC = ["data-keyed", "aria-label", "onClick"], hC = ["onPointerdown"], mC = ["onPointerdown"], gC = ["onPointerdown"], yC = ["onPointerdown"], bC = ["aria-label", "data-tip", "onPointerdown"], vC = { key: 0 }, _C = ["onPointerdown"], SC = ["aria-label", "data-tip", "onPointerdown"], wC = { key: 0 }, xC = 10, kC = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Js(0), playing: /* @__PURE__ */ Js(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Xt(null), o = /* @__PURE__ */ Xt(null), a = /* @__PURE__ */ Xt(1), s = /* @__PURE__ */ Xt(0), l = /* @__PURE__ */ Xt(!1);
    let p = null, d = null, f = null;
    jl(() => {
      p = new ResizeObserver(([he]) => {
        a.value = Math.max(1, he.contentRect.width);
      }), i.value && p.observe(i.value), d = new ResizeObserver(([he]) => {
        s.value = he.contentRect.height;
      }), o.value && d.observe(o.value);
    }), qa(() => {
      p == null || p.disconnect(), d == null || d.disconnect(), f == null || f();
    });
    const h = mt(() => Math.max(1, Number(r.model.span || 1))), b = mt(() => r.playhead.frame.value), v = mt(() => r.playhead.playing.value), S = mt(() => tx(b.value, Number(r.model.fps || 1))), w = mt(() => a.value / h.value), P = (he) => `${he / h.value * 100}%`, G = mt(() => mx(h.value, w.value));
    function F(he) {
      const X = i.value.getBoundingClientRect(), A = Math.floor((he - X.left) / Math.max(1, X.width) * h.value);
      return Math.min(h.value - 1, Math.max(0, A));
    }
    function T(he, X, A) {
      const L = Math.ceil(xC / Math.max(1e-6, w.value)), me = new Map(X.map((ge) => [ge.frame, ge.full]));
      return gx(X.map((ge) => ge.frame), L).map((ge, Ne) => ({
        ...ge,
        key: `${he}:${Ne}`,
        partial: ge.frames.some((He) => !me.get(He)),
        selected: ge.frames.some((He) => A.includes(He))
      }));
    }
    const y = mt(() => {
      const he = /* @__PURE__ */ new Map();
      for (const X of r.model.rows || []) {
        he.set(X.id, T(X.id, X.keys, X.selectedFrames));
        for (const A of X.lanes) he.set(A.key, T(A.key, A.frames.map((L) => ({ frame: L, full: !0 })), A.selectedFrames));
      }
      return he;
    });
    function $(he) {
      const X = he.end === null ? h.value : he.end;
      return { left: P(he.start), width: P(Math.max(0, X - he.start)) };
    }
    function z(he, X) {
      const A = he.clientX, L = Math.max(1e-6, w.value);
      let me = 0;
      X("start", 0, he);
      const ge = (He) => {
        if (He.pointerId !== he.pointerId) return;
        const re = Math.round((He.clientX - A) / L);
        re !== me && (me = re, X("move", me, He));
      }, Ne = (He) => {
        He.pointerId === he.pointerId && (f(), X("end", me, He));
      };
      f == null || f(), f = () => {
        window.removeEventListener("pointermove", ge), window.removeEventListener("pointerup", Ne), window.removeEventListener("pointercancel", Ne), f = null;
      }, window.addEventListener("pointermove", ge), window.addEventListener("pointerup", Ne), window.addEventListener("pointercancel", Ne);
    }
    function ee(he) {
      he.button === 0 && z(he, (X, A, L) => n("action", { type: "seek", frame: F(L.clientX), phase: X }));
    }
    function ie(he, X, A) {
      he.button === 0 && (n("action", { type: "select-row", id: X.id }), z(he, (L, me) => n("action", { type: "clip", id: X.id, mode: A, delta: me, phase: L })));
    }
    function j(he, X, A, L, me) {
      if (he.button === 0) {
        if (he.shiftKey) {
          n("action", { type: "select-keys", owner: X.id, lane: A, frames: L.frames, additive: !0 });
          return;
        }
        L.frames.every((ge) => me.includes(ge)) || n("action", { type: "select-keys", owner: X.id, lane: A, frames: L.frames, additive: !1 }), z(he, (ge, Ne) => n("action", { type: "move-keys", delta: Ne, phase: ge }));
      }
    }
    const H = mt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function U(he, X, A) {
      n("action", X), await $l(), he.target.value = A();
    }
    function ae(he) {
      U(he, { type: "fps", fps: Number(he.target.value) }, () => H.value);
    }
    function Pe(he) {
      const X = he.target.value.trim();
      U(he, { type: "length", length: X ? Number(X) : null }, () => r.model.length ?? "");
    }
    function we(he, X, A) {
      he.button !== 0 || he.target !== he.currentTarget || n("action", { type: "select-keys", owner: X.id, lane: A, frames: [], additive: !1 });
    }
    return (he, X) => Yr(($e(), ze("section", {
      class: bt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      ke("div", XA, [
        ke("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": v.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": v.value ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (A) => n("action", { type: "play" }))
        }, [
          nt(Ht, {
            icon: v.value ? st(Xe).pause : st(Xe).play
          }, null, 8, ["icon"])
        ], 8, JA),
        e.model.hasAudio ? ($e(), ze("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (A) => n("action", { type: "mute" }))
        }, [
          nt(Ht, {
            icon: e.model.muted ? st(Xe).volume_muted : st(Xe).volume2
          }, null, 8, ["icon"])
        ], 8, ZA)) : vt("", !0),
        ke("span", QA, ft(S.value), 1),
        ke("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? ($e(), ze("span", tC, ft(H.value), 1)) : ($e(), ze("input", {
            key: 1,
            type: "number",
            min: st(Qg),
            max: st(Rd),
            step: "any",
            value: H.value,
            "aria-label": "Timeline fps",
            onChange: ae
          }, null, 40, nC)),
          X[6] || (X[6] = ke("span", null, "fps", -1))
        ], 8, eC),
        ke("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          X[7] || (X[7] = ke("span", null, "Length", -1)),
          e.model.lengthLocked ? ($e(), ze("span", iC, ft(e.model.length), 1)) : ($e(), ze("input", {
            key: 1,
            type: "number",
            min: "1",
            max: st(Vd),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Pe
          }, null, 40, oC))
        ], 8, rC),
        ke("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (A) => n("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = ke("span", null, "Timeline", -1)),
          nt(Ht, {
            icon: st(Xe).chevron
          }, null, 8, ["icon"])
        ], 8, aC)
      ]),
      ke("div", {
        class: bt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Ft({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = Vt((A) => l.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = Vt((A) => l.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = Vt((A) => l.value = !1, ["self"]))
      }, [
        ke("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = ke("div", { class: "pano-timeline-corner" }, null, -1)),
          ke("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ee
          }, [
            ($e(!0), ze(at, null, Et(G.value, (A) => ($e(), ze("span", {
              key: A,
              class: "pano-timeline-tick",
              style: Ft({ left: P(A) })
            }, ft(A), 5))), 128)),
            ke("span", {
              class: "pano-timeline-playhead",
              style: Ft({ left: P(b.value + 0.5) })
            }, null, 4)
          ], 544),
          ($e(!0), ze(at, null, Et(e.model.rows || [], (A) => ($e(), ze(at, {
            key: A.id
          }, [
            ke("div", {
              class: bt(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              ke("div", lC, [
                A.hideable ? ($e(), ze("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.visible ? "Hide" : "Show",
                  onClick: Vt((L) => n("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  nt(Ht, {
                    icon: A.visible ? st(Xe).eye : st(Xe).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, cC)) : ($e(), ze("span", uC)),
                ke("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: Vt((L) => n("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  nt(Ht, {
                    icon: st(Xe).chevron
                  }, null, 8, ["icon"])
                ], 8, dC),
                ke("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (L) => n("action", { type: "select-row", id: A.id })
                }, [
                  nt(Ht, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  ke("span", null, ft(A.label), 1)
                ], 8, fC),
                A.keyable ? ($e(), ze("button", {
                  key: 2,
                  class: bt(["pano-timeline-key", { keyed: st(Jc)(A.keys, b.value) }]),
                  type: "button",
                  "data-keyed": st(Jc)(A.keys, b.value) ? "true" : "false",
                  "aria-label": st(Jc)(A.keys, b.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Vt((L) => n("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  nt(Ht, {
                    icon: st(Xe).keyframe
                  }, null, 8, ["icon"])
                ], 10, pC)) : vt("", !0)
              ]),
              A.open ? ($e(!0), ze(at, { key: 0 }, Et(A.lanes, (L) => ($e(), ze("div", {
                key: L.key,
                class: "pano-timeline-lane-head"
              }, ft(L.label), 1))), 128)) : vt("", !0)
            ], 2),
            ke("div", {
              class: bt(["pano-timeline-track", { selected: A.selected }])
            }, [
              ke("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (L) => we(L, A, null)
              }, [
                A.clip ? ($e(), ze("div", {
                  key: 0,
                  class: bt(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: Ft($(A.clip)),
                  onPointerdown: Vt((L) => ie(L, A, "move"), ["stop"])
                }, [
                  ke("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Vt((L) => ie(L, A, "start"), ["stop"])
                  }, null, 40, gC),
                  ke("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Vt((L) => ie(L, A, "end"), ["stop"])
                  }, null, 40, yC)
                ], 46, mC)) : vt("", !0),
                ($e(!0), ze(at, null, Et(y.value.get(A.id), (L) => ($e(), ze("button", {
                  key: L.key,
                  type: "button",
                  class: bt(["pano-timeline-pin", { selected: L.selected, cluster: L.frames.length > 1, partial: L.partial }]),
                  style: Ft({ left: P(L.frame + 0.5) }),
                  "aria-label": `${A.label}: ${L.frames.length > 1 ? `${L.frames.length} keyframes` : `keyframe at frame ${L.frames[0]}`}`,
                  "data-tip": L.frames.length > 1 ? `${L.frames.length} keyframes` : `Frame ${L.frames[0]}`,
                  onPointerdown: Vt((me) => j(me, A, null, L, A.selectedFrames), ["stop"])
                }, [
                  L.frames.length > 1 ? ($e(), ze("span", vC, ft(L.frames.length), 1)) : vt("", !0)
                ], 46, bC))), 128))
              ], 40, hC),
              A.open ? ($e(!0), ze(at, { key: 0 }, Et(A.lanes, (L) => ($e(), ze("div", {
                key: L.key,
                class: "pano-timeline-lane",
                onPointerdown: (me) => we(me, A, L.lane)
              }, [
                ($e(!0), ze(at, null, Et(y.value.get(L.key), (me) => ($e(), ze("button", {
                  key: me.key,
                  type: "button",
                  class: bt(["pano-timeline-pin", { selected: me.selected, cluster: me.frames.length > 1 }]),
                  style: Ft({ left: P(me.frame + 0.5) }),
                  "aria-label": `${L.label}: ${me.frames.length > 1 ? `${me.frames.length} keyframes` : `keyframe at frame ${me.frames[0]}`}`,
                  "data-tip": me.frames.length > 1 ? `${me.frames.length} keyframes` : `Frame ${me.frames[0]}`,
                  onPointerdown: Vt((ge) => j(ge, A, L.lane, me, L.selectedFrames), ["stop"])
                }, [
                  me.frames.length > 1 ? ($e(), ze("span", wC, ft(me.frames.length), 1)) : vt("", !0)
                ], 46, SC))), 128))
              ], 40, _C))), 128)) : vt("", !0),
              ke("span", {
                class: "pano-timeline-playhead",
                style: Ft({ left: P(b.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, sC)
    ], 2)), [
      [Ki, e.model.visible]
    ]);
  }
}, MC = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => ($e(), ze("div", {
      class: bt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Ft({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ft(e.model.text || ""), 7));
  }
}, PC = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, NC = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => ($e(), ze("div", PC, [
      ($e(!0), ze(at, null, Et(e.buttons, (n) => Yr(($e(), tr(rn, {
        key: n.key,
        "extra-class": {
          active: n.active,
          "pano-btn-icon-accent": n.accent
        },
        icon: n.icon,
        label: n.label,
        tip: n.tip,
        pressed: n.pressed,
        attrs: { [n.attr]: n.value, disabled: n.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Ki, n.visible !== !1]
      ])), 128))
    ]));
  }
}, AC = ["data-video-ready"], CC = { class: "pano-video-transport-shell" }, IC = { class: "pano-video-controls-left" }, EC = { class: "pano-video-filmstrip" }, OC = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, FC = ["src", "onLoad"], TC = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, DC = ["max", "value", "disabled"], LC = { class: "pano-video-controls-right" }, RC = ["data-has-audio"], VC = { class: "pano-video-volume-pop" }, $C = ["value", "disabled"], zC = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = mt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? "Pause" : "Play";
    }), n = mt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? "Pause video" : "Play video";
    }), i = mt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.playing) === !0 ? Xe.pause : Xe.play;
    }), o = mt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = mt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = mt(() => {
      var y;
      return ((y = t.state) == null ? void 0 : y.loop) === !1 ? Xe.loop_off : Xe.loop;
    }), l = mt(() => {
      var y, $;
      return ((y = t.state) == null ? void 0 : y.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), p = mt(() => {
      var y, $, z;
      return ((y = t.state) == null ? void 0 : y.hasAudio) !== !0 ? Xe.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? Xe.volume_muted : Xe.volume2;
    }), d = mt(() => {
      var y;
      return Math.max(0, Math.min(100, Number(((y = t.state) == null ? void 0 : y.progressPct) || 0)));
    }), f = mt(() => ({ left: `${d.value}%` })), h = mt(() => {
      var ee, ie;
      const y = (ee = t.state) == null ? void 0 : ee.volumePct, $ = Number(((ie = t.state) == null ? void 0 : ie.volume) ?? 1) * 100, z = Number(y ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, z))}%`
      };
    }), b = mt(() => {
      var z, ee;
      const $ = [
        String(((z = t.state) == null ? void 0 : z.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((ie, j) => Math.max(ie, j.length), 4);
      return `${Math.max(4, $)}ch`;
    }), v = mt(() => ({ "--pano-video-time-ch": b.value })), S = mt(() => {
      var z, ee;
      const y = Array.isArray((z = t.state) == null ? void 0 : z.thumbnails) ? t.state.thumbnails : [];
      if (y.length) return y;
      const $ = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: $ }, (ie, j) => ({
        id: `placeholder-${j}`,
        src: "",
        label: ""
      }));
    }), w = /* @__PURE__ */ Xt(/* @__PURE__ */ new Set()), P = (y) => String((y == null ? void 0 : y.id) || (y == null ? void 0 : y.src) || (y == null ? void 0 : y.label) || ""), G = (y) => w.value.has(P(y)), F = (y) => {
      const $ = new Set(w.value);
      $.add(P(y)), w.value = $;
    };
    ji(S, (y) => {
      const $ = new Set(y.map(P)), z = /* @__PURE__ */ new Set();
      for (const ee of w.value)
        $.has(ee) && z.add(ee);
      w.value = z;
    }, { immediate: !0 });
    const T = mt(() => {
      var y;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((y = t.state) == null ? void 0 : y.shellMaxWidthPx) || 640))}px`
      };
    });
    return (y, $) => ($e(), ze("div", {
      class: bt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ft(T.value)
    }, [
      $[1] || ($[1] = ke("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = ke("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ke("div", CC, [
        ke("div", IC, [
          nt(rn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ke("div", {
            class: "pano-video-time pano-video-time-start",
            style: Ft(v.value)
          }, ft(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ke("div", EC, [
          ke("div", OC, [
            ($e(!0), ze(at, null, Et(S.value, (z) => ($e(), ze("div", {
              key: P(z),
              class: bt(["pano-video-thumb", {
                "is-placeholder": !z.src,
                "is-loaded": z.src && G(z)
              }])
            }, [
              z.src ? ($e(), ze("img", {
                key: 0,
                src: z.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => F(z)
              }, null, 40, FC)) : ($e(), ze("span", TC))
            ], 2))), 128))
          ]),
          ke("div", {
            class: "pano-video-playhead",
            style: Ft(f.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
            ke("span", { class: "pano-video-playhead-line" }, null, -1),
            ke("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ke("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, DC)
        ]),
        ke("div", LC, [
          ke("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ft(v.value)
          }, ft(e.state.durationLabel || "0:00"), 5),
          nt(rn, {
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
          ke("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ke("div", VC, [
              ke("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Ft(h.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, $C)
            ]),
            nt(rn, {
              "extra-class": "pano-video-control",
              icon: p.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, RC)
        ])
      ])
    ], 14, AC));
  }
}, jC = { class: "pano-floating-top" }, HC = ["data-selected", "data-view-count"], GC = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], WC = { class: "label" }, KC = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return $e(), ze("div", jC, [
        ke("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          ($e(!0), ze(at, null, Et(e.buttons, (i) => Yr(($e(), ze("button", {
            key: i.key,
            class: bt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            nt(Ht, {
              icon: i.icon
            }, null, 8, ["icon"]),
            ke("span", WC, ft(i.label), 1)
          ], 10, GC)), [
            [Ki, i.visible !== !1]
          ])), 128))
        ], 8, HC)
      ]);
    };
  }
};
function $y(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Xe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Xe.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: Xe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Xe.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Xe.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Xe.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Xe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Xe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Xe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Xe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Xe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Xe.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Xe.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Xe.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Xe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Xe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Xe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Xe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Xe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Xe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Xe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Xe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Xe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Xe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Xe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Xe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Xe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Xe.lasso_tool }
        ]
      }
    ]
  };
}
const BC = ["aria-label"], UC = { class: "pano-stage-column" }, YC = { class: "pano-stage-wrap" }, qC = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, XC = {
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
  setup(e, { expose: t, emit: r }) {
    const n = e, i = r;
    let o = "", a = !1, s = null;
    const l = /* @__PURE__ */ Xt(null), p = /* @__PURE__ */ Xt(null), d = /* @__PURE__ */ Xt(null);
    function f() {
      var j, H;
      return ((H = (j = d.value) == null ? void 0 : j.getRefs) == null ? void 0 : H.call(j)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function h(j) {
      var H, U;
      return ((U = (H = p.value) == null ? void 0 : H.open) == null ? void 0 : U.call(H, j)) === !0;
    }
    function b(j) {
      i("image-file-selected", j);
    }
    function v(j) {
      i("image-file-cancelled", j);
    }
    t({ getPaintOverlayRefs: f, openImagePicker: h });
    const S = mt(() => n.readOnly === !0), w = mt(() => n.shellPreset || $y(n.type)), P = mt(() => {
      var H, U, ae;
      const j = String((((H = n.uiState) == null ? void 0 : H.stageStatus) === "failed" ? (U = n.uiState) == null ? void 0 : U.stageStatusDetail : (ae = n.uiState) == null ? void 0 : ae.stageWarningDetail) ?? "");
      return j === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : j === "stickers" ? "One or more sticker previews are unavailable." : j === "frame" ? "The editor hit a rendering error. Check the browser console for details." : j === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : j.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), G = mt(() => {
      var H;
      const j = Array.isArray((H = w.value) == null ? void 0 : H.floatingButtons) ? w.value.floatingButtons.slice() : [];
      return S.value && j.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Xe.fullscreen
      }), j;
    });
    function F() {
      const j = l.value;
      return j ? Array.from(j.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((H) => H instanceof HTMLElement ? !H.hidden && H.tabIndex >= 0 && H.offsetParent !== null : !1) : [];
    }
    function T() {
      var U;
      const H = F()[0] || l.value;
      (U = H == null ? void 0 : H.focus) == null || U.call(H);
    }
    function y() {
      var j;
      s != null && s.isConnected && ((j = s.focus) == null || j.call(s)), s = null;
    }
    function $(j) {
      var H, U, ae, Pe;
      if (!j.defaultPrevented) {
        if (j.key === "Tab") {
          const we = F();
          if (!we.length) {
            j.preventDefault(), (U = (H = l.value) == null ? void 0 : H.focus) == null || U.call(H);
            return;
          }
          const he = we[0], X = we[we.length - 1], A = document.activeElement;
          if (j.shiftKey) {
            (A === he || A === l.value || !((ae = l.value) != null && ae.contains(A))) && (j.preventDefault(), X.focus());
            return;
          }
          (A === X || !((Pe = l.value) != null && Pe.contains(A))) && (j.preventDefault(), he.focus());
          return;
        }
        j.key === "Escape" && i("close");
      }
    }
    function z() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function ee() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function ie(j) {
      document.removeEventListener("keydown", $), j ? (s || (s = document.activeElement), z(), document.addEventListener("keydown", $), $l(() => {
        T();
      })) : (ee(), y());
    }
    return jl(() => {
      ie(n.open);
    }), qa(() => {
      ee(), document.removeEventListener("keydown", $), y();
    }), ji(() => n.open, (j) => {
      ie(j);
    }), (j, H) => e.open ? ($e(), ze("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: H[2] || (H[2] = Vt((U) => i("close"), ["self"]))
    }, [
      ke("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ke("div", UC, [
          ke("div", YC, [
            H[3] || (H[3] = ke("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            H[4] || (H[4] = ke("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            H[5] || (H[5] = ke("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? ($e(), ze("div", qC, ft(P.value), 1)) : vt("", !0),
            H[6] || (H[6] = ke("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              ke("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            nt(V2, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            nt(vy, {
              ref_key: "imageFilePickerRef",
              ref: p,
              onFileSelected: b,
              onFileCancelled: v
            }, null, 512),
            S.value ? vt("", !0) : ($e(), ze(at, { key: 1 }, [
              nt(NC, {
                buttons: e.uiState.toolButtons || w.value.toolButtons || []
              }, null, 8, ["buttons"]),
              nt(l2, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              nt(R2, {
                "paint-swatches": e.paintSwatches,
                panes: w.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            nt(zC, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            nt(KC, {
              buttons: e.uiState.viewButtons || w.value.viewButtons || []
            }, null, 8, ["buttons"]),
            nt(r2, {
              buttons: e.uiState.floatingButtons || G.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            nt(B2, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            nt(MC, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            nt(h2, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          nt(kC, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: H[0] || (H[0] = (U) => i("timeline", U))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? vt("", !0) : ($e(), tr(qA, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: H[1] || (H[1] = (U) => i("timeline", U))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, BC)
    ])) : vt("", !0);
  }
}, lr = "loading", Ba = "ready", Jn = "failed";
function zy(e, t = "") {
  return e && (e.__panoLoadState = lr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function jy(e, t = "") {
  return e && (e.__panoLoadState = Ba, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Hy(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function rd(e, t) {
  return e ? e.__panoLoadState === Jn ? Jn : typeof t == "function" && t(e) ? Ba : lr : Ba;
}
function id(e) {
  return rd(e) === Jn;
}
function JC({ presented: e, background: t = Ba, stickers: r = [] } = {}) {
  if (!e) return { status: lr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === lr, o = n.includes(lr);
  if (i && o) return { status: lr, detail: "mixed" };
  if (i) return { status: lr, detail: "background" };
  if (o) return { status: lr, detail: "stickers" };
  const a = t === Jn, s = n.includes(Jn);
  return a && s ? { status: Jn, detail: "mixed" } : a ? { status: Jn, detail: "background" } : s ? { status: Jn, detail: "stickers" } : { status: Ba, detail: "" };
}
const ZC = "state_json", QC = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), gf = "sticker_image_1", eI = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Gy = 0.01, tI = "external_image", Al = "pano_sticker_input_images", nI = "pano_sticker_input_videos", rI = "pano_sticker_input_frames", iI = "pano_sticker_input_video_meta", oI = !0, Cl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Er = Math.PI / 180, Vi = 180 / Math.PI, lu = 1, Wy = "rgb(255, 221, 87)", aI = "rgb(228, 228, 231)", sI = "rgb(180, 150, 60)", lI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, cI = 64, _m = 40, cu = 16, uI = 0.45, Sm = 180, dI = 160, Il = 24, fI = 4, pI = 4, hI = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function uu(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function mI(e) {
  return 1 - Math.pow(1 - e, 3);
}
function gI(e, t, r) {
  const n = De((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function yI(e) {
  return e * e * e;
}
function Ql(e, t, r) {
  return { x: e, y: t, z: r };
}
function wm(e, t) {
  return Ql(e.x + t.x, e.y + t.y, e.z + t.z);
}
function xm(e, t) {
  return Ql(e.x * t, e.y * t, e.z * t);
}
function du(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function bI(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ql(e.x / t, e.y / t, e.z / t);
}
function Cs(e) {
  return {
    yaw: zt(Math.atan2(e.x, e.z) * Vi),
    pitch: De(Math.asin(De(e.y, -1, 1)) * Vi, -90, 90)
  };
}
function ai(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function va(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function fu(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return va(e, t);
  const l = De((o * n + a * i) / s, 0, 1), p = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, f = Number(e.x || 0) - p, h = Number(e.y || 0) - d;
  return f * f + h * h;
}
function Xn(e, t, r) {
  return e + (t - e) * r;
}
function Sr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(De(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(De(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(De(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${De(r, 0, 1)})`;
}
function vI(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Is = { fillStyle: "", url: "" };
function _I(e, t, r) {
  if (Is.url && Is.fillStyle === String(e || ""))
    return Is.url;
  const n = vI(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Il}" height="${Il}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Is = { fillStyle: String(e || ""), url: n }, n;
}
function El(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function $n(e) {
  return {
    r: De(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: De(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: De(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: De(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function pn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function SI(e) {
  return Cl.some((t) => El(e, t.color));
}
function od(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = De(Number(t), 0, 1), o = De(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), p = o * (1 - s * i), d = o * (1 - (1 - s) * i);
  switch (a % 6) {
    case 0:
      return { r: o, g: d, b: l };
    case 1:
      return { r: p, g: o, b: l };
    case 2:
      return { r: l, g: o, b: d };
    case 3:
      return { r: l, g: p, b: o };
    case 4:
      return { r: d, g: l, b: o };
    default:
      return { r: o, g: l, b: p };
  }
}
function ad(e) {
  const t = De(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = De(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = De(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Oo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function wI(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function km(e) {
  const { paintCount: t, maskCount: r } = wI(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((a) => {
    String((a == null ? void 0 : a.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function vo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Es(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function xI(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Oi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function kI(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function MI(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function PI(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Ky = "pano_suite.ui_settings.v1", By = "pano_suite.node_grid_visibility.v1";
let _o = null, wr = null;
function Xs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function NI() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Ky)) || "").trim();
    if (!t) return _o ? Xs(_o) : null;
    const r = JSON.parse(t), n = Xs(r);
    return _o = n, n;
  } catch {
    return _o ? Xs(_o) : null;
  }
}
function AI(e) {
  var r;
  const t = Xs(e);
  _o = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Ky, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Uy() {
  var e;
  if (wr && typeof wr == "object")
    return wr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(By)) || "").trim();
    if (!t)
      return wr = {}, wr;
    const r = JSON.parse(t);
    return wr = r && typeof r == "object" ? r : {}, wr;
  } catch {
    return wr = {}, wr;
  }
}
function CI(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = Uy()[r];
  return typeof i == "boolean" ? i : !!t;
}
function II(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = Uy();
  n[r] = !!t, wr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(By, JSON.stringify(n));
  } catch {
  }
}
function EI(e, t) {
  const r = { ...e }, n = t.map((i) => i(e));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  for (const i of n) i.connect(r);
  return r;
}
const ci = /* @__PURE__ */ new Map(), OI = 12;
function FI(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ci.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ci.delete(t), ci.set(t, r), r);
}
function TI(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ci.delete(r), ci.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ci.size > OI; ) {
      const i = ci.keys().next().value;
      if (!i) break;
      ci.delete(i);
    }
}
function DI(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: p,
    mediaUiImage: d,
    node: f,
    portStillCanvas: h,
    portVideoEl: b,
    readOnly: v,
    runtime: S,
    scheduler: w,
    stageWrap: P,
    state: G,
    stateV2: F,
    stillCanvas: T,
    timelinePlayhead: y,
    type: $,
    uiState: z,
    videoEl: ee
  } = e;
  let ie, j, H, U, ae, Pe;
  const we = {
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
  }, he = 9, X = [];
  let A = 0;
  const L = () => {
    var Re, Ue;
    const k = (Re = P == null ? void 0 : P.getBoundingClientRect) == null ? void 0 : Re.call(P), q = (Ue = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ue.call(o), ve = Math.max(0, Number((k == null ? void 0 : k.width) || 0)), se = q ? Math.max(0, Number(q.width || 0)) : 0, N = se > 0 ? se + 14 + 12 : 72, ye = Math.max(280, Math.floor(ve - N * 2)), Fe = n.fullscreen ? Math.min(1200, ye) : ye;
    z.videoTransport.shellMaxWidthPx = Fe;
  }, me = () => {
    A || (A = w.requestFrame(() => {
      A = 0, L();
    }));
  }, ge = (k) => {
    if (!(k instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(k.audioTracks) && k.audioTracks.length > 0 || k.audioTracks && typeof k.audioTracks.length == "number" && k.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof k.mozHasAudio == "boolean") return k.mozHasAudio;
    } catch {
    }
    try {
      if (Number(k.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!z.videoTransport.hasAudio;
  }, Ne = typeof ResizeObserver < "u" ? new ResizeObserver(() => me()) : null;
  Ne == null || Ne.observe(P), o && (Ne == null || Ne.observe(o)), X.push(() => {
    var k;
    A && (w.cancelFrame(A), A = 0), (k = Ne == null ? void 0 : Ne.disconnect) == null || k.call(Ne);
  }), me();
  const He = () => {
    we.thumbnailJobId += 1, we.thumbnailSrc = "", z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = he;
  }, re = async (k, q, ve) => {
    const se = String(k || "").trim();
    if (!se) {
      He();
      return;
    }
    const Ve = FI(se);
    if (Ve) {
      we.thumbnailSrc = se, z.videoTransport.thumbnails = Ve.thumbnails, z.videoTransport.thumbnailCount = Ve.thumbnailCount;
      return;
    }
    const Te = ++we.thumbnailJobId;
    we.thumbnailSrc = se, z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = he;
    const N = Kl(document, "editor.thumbnails");
    N.preload = "auto", N.muted = !0, N.playsInline = !0, N.crossOrigin = "anonymous";
    const ye = vn({ label: "editor.thumbnail" });
    try {
      const Fe = await new Promise((dn) => {
        let Wn = !1;
        const an = (Zt) => {
          Wn || (Wn = !0, dn(Zt));
        };
        N.addEventListener("loadedmetadata", () => an(!0), { once: !0 }), N.addEventListener("canplay", () => an(!0), { once: !0 }), N.addEventListener("error", () => an(!1), { once: !0 }), N.src = se, N.load();
      });
      if (we.thumbnailJobId !== Te) return;
      const Re = Number(N.videoWidth || 0), Ue = Number(N.videoHeight || 0);
      if (!Fe || Re < 1 || Ue < 1) {
        we.thumbnailFailedSrcs.add(se);
        return;
      }
      const qe = Math.max(0, Number(N.duration || q || 0)), Be = 46, Qe = Math.max(72, Math.round(Re / Ue * Be));
      ye.width = Qe, ye.height = Be;
      const dt = ye.getContext("2d");
      if (!dt) return;
      const yt = [], Kt = (dn) => new Promise((Wn) => {
        let an = !1;
        const Zt = () => {
          an || (an = !0, Wn());
        };
        N.addEventListener("seeked", Zt, { once: !0 }), N.addEventListener("error", Zt, { once: !0 });
        try {
          N.currentTime = dn;
        } catch {
          Zt();
        }
      });
      for (let dn = 0; dn < he; dn += 1) {
        if (we.thumbnailJobId !== Te) return;
        const Wn = he <= 1 ? 0 : dn / (he - 1), an = qe > 0 ? Math.max(0, Math.min(qe - Math.max(1e-3, 0.5 / Math.max(1, Number(ve || 24))), qe * Wn)) : 0;
        if (await Kt(an), we.thumbnailJobId !== Te) return;
        dt.clearRect(0, 0, Qe, Be), dt.drawImage(N, 0, 0, Qe, Be), yt.push({
          id: `thumb-${dn}`,
          src: ye.toDataURL("image/jpeg", 0.72),
          time: an,
          label: M(an)
        });
      }
      if (we.thumbnailJobId !== Te) return;
      z.videoTransport.thumbnails = yt, z.videoTransport.thumbnailCount = yt.length || he, TI(se, {
        thumbnails: yt,
        thumbnailCount: yt.length || he,
        duration: qe,
        fps: ve
      });
    } finally {
      N.removeAttribute("src"), N.load(), ku(ye);
    }
  };
  X.push(() => {
    He();
  });
  const R = ly({
    video: ee instanceof HTMLVideoElement ? ee : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (k) => w.requestFrame(k),
      cancelFrame: (k) => w.cancelFrame(k)
    },
    fps: K,
    span: () => {
      if (F) return Pe();
      const k = Math.round(Number(z.videoTransport.duration || 0) * K());
      return ee.loop || !(k > 0) ? 1 / 0 : k;
    },
    loop: () => F,
    onFrame: (k) => {
      F ? H(k) : be(), j({ cause: "frame_view", localOnly: !0, reason: wt.PLAYHEAD });
    },
    onCapture: () => {
      C() && (S.backgroundDirty = !0);
    },
    onChange: () => {
      be(), y.playing.value = R.playing, ae(), j({ cause: "frame_view", localOnly: !0, reason: wt.PLAYHEAD });
    }
  });
  X.push(() => R.dispose());
  const oe = F && b instanceof HTMLVideoElement ? cy({
    video: b,
    onCapture: () => {
      var ve;
      const k = Number(b.videoWidth || 0), q = Number(b.videoHeight || 0);
      k < 1 || q < 1 || (h.width = k, h.height = q, (ve = h.getContext("2d")) == null || ve.drawImage(b, 0, 0), h.__panoFrameIdx += 1, j({ cause: "frame_view", localOnly: !0, reason: wt.MEDIA }));
    },
    onChange: () => j({ cause: "frame_view", localOnly: !0, reason: wt.MEDIA })
  }) : null;
  oe && X.push(() => oe.dispose());
  const pe = F ? J0({
    createImage: (k, q) => {
      const ve = new Image();
      return ve.onload = q, ve.onerror = q, ve.src = k, ve;
    },
    onLoad: () => j({ cause: "frame_view", localOnly: !0, reason: wt.MEDIA })
  }) : null;
  if (ee instanceof HTMLVideoElement) {
    const k = () => {
      Q(), j({ cause: "frame_view", localOnly: !0 });
    }, q = () => {
      be({
        hasAudio: z.videoTransport.hasAudio,
        muted: ee.muted,
        volume: Number(ee.volume ?? z.videoTransport.volume ?? 1)
      });
    }, ve = () => {
      const se = ee.dataset.panoSrc;
      se && (we.failedSrcs.add(se), Q(), j());
    };
    for (const [se, Ve] of [
      ["loadedmetadata", k],
      ["loadeddata", k],
      ["canplay", k],
      ["volumechange", q],
      ["error", ve]
    ])
      ee.addEventListener(se, Ve), X.push(() => ee.removeEventListener(se, Ve));
  }
  function Ae(k) {
    return t.uiList(f, k);
  }
  function Le(k) {
    return t.uiValue(f, k);
  }
  function te() {
    const k = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
    return cl(k) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : $ === "stickers" || $ === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Ce() {
    const { metaKey: k } = te(), q = Le(k);
    return Array.isArray(q) && q.length > 0 && q[0] && typeof q[0] == "object" ? q[0] : q && typeof q == "object" ? q : null;
  }
  function x(k) {
    return k ? k instanceof HTMLVideoElement ? [
      String(k.currentSrc || k.src || ""),
      Number(k.videoWidth || 0),
      Number(k.videoHeight || 0)
    ].join("|") : k instanceof HTMLCanvasElement ? [
      "canvas",
      Number(k.width || 0),
      Number(k.height || 0),
      String(k.__panoFrameIdx || 0)
    ].join("|") : [
      String(k.currentSrc || k.src || ""),
      Number(k.naturalWidth || k.width || 0),
      Number(k.naturalHeight || k.height || 0)
    ].join("|") : "none";
  }
  function M(k) {
    const q = Math.max(0, Math.floor(Number(k || 0))), ve = Math.floor(q / 60), se = q % 60;
    return `${ve}:${String(se).padStart(2, "0")}`;
  }
  function K() {
    return F ? G.timeline.fps : we.metaFps || 1e3;
  }
  function be(k = {}) {
    const q = Number(k.duration ?? z.videoTransport.duration ?? 0), ve = Math.max(1, Number(k.fps ?? z.videoTransport.fps ?? 24)), se = R.frame / K(), Ve = Object.prototype.hasOwnProperty.call(k, "ready") ? !!k.ready : !!z.videoTransport.ready, Te = R.playing, N = Object.prototype.hasOwnProperty.call(k, "visible") ? !!k.visible : !!z.videoTransport.visible, ye = Object.prototype.hasOwnProperty.call(k, "muted") ? !!k.muted : !!(ee instanceof HTMLVideoElement ? ee.muted : z.videoTransport.muted), Fe = Number(
      Object.prototype.hasOwnProperty.call(k, "volume") ? k.volume : ee instanceof HTMLVideoElement ? ee.volume : z.videoTransport.volume
    ), Re = Object.prototype.hasOwnProperty.call(k, "hasAudio") ? !!k.hasAudio : ge(ee), Ue = Object.prototype.hasOwnProperty.call(k, "loop") ? !!k.loop : !!z.videoTransport.loop;
    Object.assign(z.videoTransport, {
      ready: Ve,
      playing: Te,
      visible: N,
      loop: Ue,
      currentTime: Number.isFinite(se) ? se : 0,
      duration: Number.isFinite(q) ? q : 0,
      progressPct: q > 1e-6 ? Math.max(0, Math.min(100, se / q * 100)) : 0,
      currentTimeLabel: M(se),
      durationLabel: M(q),
      frameCount: Math.max(0, Number(k.frameCount ?? z.videoTransport.frameCount ?? 0)),
      fps: ve,
      hasAudio: Re,
      muted: ye,
      volume: Math.max(0, Math.min(1, Number.isFinite(Fe) ? Fe : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Fe) ? Fe : 1)) * 100),
      thumbnails: Array.isArray(k.thumbnails) ? k.thumbnails : z.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(k.thumbnailCount ?? z.videoTransport.thumbnailCount ?? he))
    });
  }
  function I() {
    return !!(ee instanceof HTMLVideoElement && !F && ee.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function Z() {
    if (!(ee instanceof HTMLVideoElement) || !z.videoTransport.hasAudio) return;
    const k = !ee.muted;
    ee.muted = k, !k && Number(ee.volume || 0) <= 0 && (ee.volume = Math.max(0.01, Number(z.videoTransport.volume || 1))), be({
      hasAudio: z.videoTransport.hasAudio,
      muted: ee.muted,
      volume: Number(ee.volume ?? z.videoTransport.volume ?? 1)
    });
  }
  function ne() {
    be({
      visible: I()
    });
  }
  function C() {
    if (!(ee instanceof HTMLVideoElement) || Number(ee.videoWidth || 0) < 1 || Number(ee.videoHeight || 0) < 1) return !1;
    const k = Number(ee.videoWidth || 0), q = Number(ee.videoHeight || 0);
    (T.width !== k || T.height !== q) && (T.width = k, T.height = q);
    const ve = T.getContext("2d");
    return ve ? (ve.clearRect(0, 0, k, q), ve.drawImage(ee, 0, 0, k, q), T.__panoFrameIdx = Number(T.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function B() {
    return !R.showsVideo && Number(T.width || 0) > 0 && Number(T.height || 0) > 0 && Number(T.__panoFrameIdx || 0) > 0 ? T : ee instanceof HTMLVideoElement && Number(ee.videoWidth || 0) > 0 && Number(ee.videoHeight || 0) > 0 && Number(ee.readyState || 0) >= 2 ? ee : null;
  }
  function W() {
    T.__panoFrameIdx = 0, S.backgroundDirty = !0;
  }
  function Q() {
    if (!(ee instanceof HTMLVideoElement)) return null;
    const { videoKey: k } = te(), q = un(f, "background") && Ae(k)[0] || null, ve = p(q), se = [ve, t.linkedVideoFile(f, u())].filter(Boolean), Ve = se.find((qe) => !we.failedSrcs.has(qe)) || "";
    we.videoFailed = !Ve && se.length > 0;
    const Te = Ve && Ve === ve ? Ce() : null;
    we.metaFps = Number(Te == null ? void 0 : Te.fps) > 0 ? Number(Te.fps) : 0;
    const N = Math.max(1, Number((Te == null ? void 0 : Te.fps) || (F ? G.timeline.fps : 24))), ye = ee.dataset.panoSrc === Ve && Number.isFinite(ee.duration) ? ee.duration : 0, Fe = Number((Te == null ? void 0 : Te.duration) || ((Te == null ? void 0 : Te.frames) > 0 ? Te.frames / N : ye)), Re = Math.max(0, Number((Te == null ? void 0 : Te.frames) || Math.round(Fe * N))), Ue = !!(Te != null && Te.has_audio) || ge(ee);
    return Ve && ee.dataset.panoSrc !== Ve ? (ee.pause(), W(), ee.dataset.panoSrc = Ve, ee.loop = !F && !!z.videoTransport.loop, ee.muted = !!z.videoTransport.muted, ee.volume = Math.max(0, Math.min(1, Number(z.videoTransport.volume ?? 1))), ee.src = Ve, ee.load(), R.setSource(!0), F || R.seek(0)) : !Ve && ee.getAttribute("src") && (ee.pause(), ee.removeAttribute("src"), delete ee.dataset.panoSrc, ee.load(), W(), He(), R.setSource(!1)), F || (ee.loop = !!z.videoTransport.loop), Ve && !F && we.thumbnailSrc !== Ve && !we.thumbnailFailedSrcs.has(Ve) && re(Ve, Fe, N), Ve || He(), be({
      ready: !!Ve,
      visible: !!Ve && I(),
      duration: Fe,
      frameCount: Re,
      fps: N,
      hasAudio: Ue,
      loop: !!ee.loop,
      muted: !!ee.muted,
      volume: Number(ee.volume ?? z.videoTransport.volume ?? 1),
      thumbnailCount: z.videoTransport.thumbnailCount
    }), Ve || null;
  }
  function ue(k, q = null) {
    return d(f, k, a, q || (() => j()));
  }
  function de(k = null) {
    return un(f, "external-sticker") ? ue(Al, k) : null;
  }
  function J() {
    if (!un(f, "external-sticker")) return null;
    const k = Ae(iI)[0];
    if (!k || typeof k != "object") return null;
    const q = Ae(rI).map(p).filter(Boolean);
    if (q.length) return { frames: q, meta: k };
    const ve = p(Ae(nI)[0] || null);
    return ve ? { src: ve, meta: k } : null;
  }
  function fe() {
    const k = G.stickers.find(ie), q = k ? J() : null, ve = q ? Y0(k.clip, n.frame, G.timeline.fps, q.meta) : null;
    oe.follow({ src: (q == null ? void 0 : q.src) || "", time: ve, playing: R.advancing, fps: G.timeline.fps });
    const se = k ? ce(k) : null, Ve = q != null && q.frames ? pe.picture(q.frames, ve, q.meta, se) : oe.picture(h, se);
    return Ve ? { media: Ve, revision: x(Ve), source: X0(q, se) } : null;
  }
  function Ee() {
    return !F || !un(f, "scene") ? null : Lh(Ae("pano_scene_files"), Ae("pano_scene_meta"), p);
  }
  function je() {
    return !F || !un(f, "external-sticker") ? null : Lh(Ae("pano_sticker_files"), Ae("pano_sticker_meta"), p);
  }
  function ce(k) {
    var N;
    if (k && typeof k == "object" && (ie(k) || k.external === !0))
      return de(() => {
        qr(f, "image-loaded");
      });
    const q = F ? xe(k) : String(k && typeof k == "object" ? k.asset_id || k.assetId || "" : k || "");
    if (!q) return null;
    const ve = a.get(q);
    if (ve) return ve;
    const se = F ? y0(k.source) : (N = G.assets) == null ? void 0 : N[q], Ve = l(se);
    if (!Ve) return null;
    const Te = new Image();
    return zy(Te, Ve), Te.onload = () => {
      jy(Te, Ve), j();
    }, Te.onerror = () => {
      Hy(Te, Ve), j();
    }, Te.src = Ve, a.set(q, Te), Te;
  }
  function xe(k) {
    const { source: q } = k;
    return q.filename ? `file:${q.storage}:${q.subfolder}:${q.filename}` : `sticker:${k.id}`;
  }
  function Ie() {
    if ($ === "cutout" && !r) {
      const Ve = B();
      if (Ve) return Ve;
      const Te = s(
        f,
        ["erp_image", "bg_erp"],
        () => j(),
        "background:cutout:erp_image|bg_erp"
      );
      return Te && !id(Te) ? Te : d(f, "pano_input_images", a, () => j()) || Te || null;
    }
    const k = B();
    if (k) return k;
    const q = un(f, "background") ? d(f, "pano_input_images", a, () => j()) : null;
    if (q && !id(q)) return q;
    if (ee instanceof HTMLVideoElement && ee.dataset.panoSrc) return ee;
    const ve = u();
    return s(f, ve, () => j(), `background:${ve.join("|")}`) || q || null;
  }
  function g() {
    var q;
    const k = (Array.isArray(f == null ? void 0 : f.inputs) ? f.inputs : []).findIndex((ve) => (ve == null ? void 0 : ve.name) === "source");
    return k >= 0 && f.graph ? String(((q = f.getInputLink(k)) == null ? void 0 : q.type) || "") : "";
  }
  function u() {
    if ($ === "cutout") return r ? g() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const k = Array.isArray(f == null ? void 0 : f.inputs) ? f.inputs.map((se) => String((se == null ? void 0 : se.name) || "")) : [], q = k.includes("erp_image"), ve = k.includes("bg_erp");
    return v && (q || ve) ? q ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : $ === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function O(k) {
    return k ? k instanceof HTMLImageElement ? !!k.complete && Number(k.naturalWidth || k.width || 0) > 0 && Number(k.naturalHeight || k.height || 0) > 0 : k instanceof HTMLVideoElement ? Number(k.videoWidth || 0) > 0 && Number(k.videoHeight || 0) > 0 && Number(k.readyState || 0) >= 2 : Number(k.width || k.naturalWidth || 0) > 0 && Number(k.height || k.naturalHeight || 0) > 0 : !1;
  }
  function V() {
    if (i.failed) return { status: Jn, detail: "renderer" };
    if (!i.ready) return { status: lr, detail: "boot" };
    const k = Ie(), q = we.videoFailed ? Jn : rd(k, O), ve = [];
    for (const se of U()) {
      if ((se == null ? void 0 : se.visible) === !1) continue;
      const Ve = ce(se);
      ve.push(rd(Ve, O));
    }
    return JC({
      presented: S.hasPresentedFrame,
      background: q,
      stickers: ve
    });
  }
  return {
    connect(k) {
      ({
        isExternalSticker: ie,
        requestDraw: j,
        setTimelineFrame: H,
        skyStickers: U,
        syncTimeline: ae,
        timelineSpanFrames: Pe
      } = k);
    },
    videoState: we,
    videoCleanupFns: X,
    queueVideoTransportLayout: me,
    playback: R,
    portVideo: oe,
    getNodeUiValue: Le,
    getMediaRevisionToken: x,
    playbackFps: K,
    syncVideoTransportState: be,
    toggleVideoMuted: Z,
    syncVideoTransportVisibility: ne,
    refreshModalVideoSource: Q,
    getStickerUiImage: ue,
    getExternalStickerPreviewImage: de,
    getPortMedia: J,
    followPortSticker: fe,
    getStickerImage: ce,
    stickerImageKey: xe,
    getConnectedErpImage: Ie,
    isDecodedImageReady: O,
    getStageImageStatus: V,
    sceneFiles: Ee,
    stickerFiles: je
  };
}
function LI(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(p) {
    if (n.splice(0, n.length), i = -1, !p || typeof p != "object" || !Array.isArray(p.entries) || (p.entries.forEach((f) => {
      n.push(String(f || ""));
    }), !n.length)) return;
    const d = Number(p.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(p) {
    n[i] !== p && (n.splice(i + 1), n.push(p), n.length > o && n.shift(), i = n.length - 1);
  }
  return s(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(p) {
      l(String(p || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const p = i - 1;
      return p < 0 || p >= n.length ? null : (i = p, n[i]);
    },
    redo() {
      const p = i + 1;
      return p < 0 || p >= n.length ? null : (i = p, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const p = n.length, d = Math.max(0, p - a), f = i >= 0 ? Math.max(0, Math.min(i, d)) : d, h = n.slice(f, f + a), b = i < 0 ? -1 : Math.max(-1, Math.min(h.length - 1, i - f));
      return {
        version: 1,
        entries: h,
        index: b
      };
    },
    hydrate: s
  };
}
const RI = 80;
function Yy(e) {
  return JSON.stringify(wx(e));
}
function VI(e) {
  return LI(RI, { entries: [Yy(e)], index: 0 });
}
function $I(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, p, d, f, h, b, v, S, w, P, G, F, T, y;
  function $() {
    r || (G(), _0(i), !(o && i.stickers.some(f)) && (t.historyController.commitActionGroup(Yy(i)), T()));
  }
  function z(ie) {
    var ae, Pe;
    if (r) return;
    P();
    const j = ie < 0 ? t.historyController.undo() : t.historyController.redo();
    if (T(), !j) return;
    const H = xx(i, j), U = (ae = i.timeline) == null ? void 0 : ae.fps;
    Object.keys(i).forEach((we) => delete i[we]), Object.assign(i, H.state), G(!1), o && i.timeline.fps !== U && v.seek(Math.round(t.frame * i.timeline.fps / U)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Pe = d()) == null ? void 0 : Pe.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), S(), n.backgroundDirty = !0, H.paintingChanged ? b() : h(), F(), y(), p(), w({ cause: "cutout_frame" });
  }
  function ee() {
    var H, U;
    const ie = Array.isArray((H = t.historyController) == null ? void 0 : H.entries) ? t.historyController.entries : [], j = Number((U = t.historyController) == null ? void 0 : U.index);
    return {
      canUndo: !r && ie.length > 1 && j > 0,
      canRedo: !r && ie.length > 1 && j >= 0 && j < ie.length - 1
    };
  }
  return {
    connect(ie) {
      ({
        clearWorldSelection: l,
        commitState: p,
        getActiveCutoutShot: d,
        isUploadingSticker: f,
        markObjectVisualsDirty: h,
        markPaintStrokeVisualsDirty: b,
        playback: v,
        releaseHiddenSelection: S,
        requestDraw: w,
        stopTimelinePlayback: P,
        syncCutoutShot: G,
        syncPaintUi: F,
        syncUndoRedoButtons: T,
        updateSidePanel: y
      } = ie);
    },
    pushHistory: $,
    restoreHistory: z,
    getHistoryCapabilities: ee
  };
}
function zI(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, p, d, f, h, b, v;
  function S() {
    return s === "stickers" ? w() : o.shots;
  }
  function w() {
    return i ? o.stickers.filter((g) => g.placement === "sky") : o.stickers;
  }
  function P(g) {
    return i && oe(g);
  }
  function G(g) {
    return g.source.kind === "file" && !g.source.filename && !g.source.data_url;
  }
  function F(g) {
    return P(g) ? Kd(g, n.frame) : g;
  }
  function T(g, u) {
    P(g) ? g0(g, n.frame, u) : Object.assign(g, u);
  }
  function y() {
    const g = o.painting || (o.painting = Do(null));
    return Array.isArray(g.groups) || (g.groups = []), g.groups;
  }
  function $(g = "paint") {
    var k, q;
    const u = Array.isArray((q = (k = o.painting) == null ? void 0 : k[g]) == null ? void 0 : q.strokes) ? o.painting[g].strokes : [], O = [], V = /* @__PURE__ */ new Set();
    for (const ve of u) {
      const se = String((ve == null ? void 0 : ve.actionGroupId) || "").trim();
      !se || V.has(se) || (V.add(se), O.push(se));
    }
    return O;
  }
  function z() {
    return $("paint");
  }
  function ee(g, u) {
    const O = String(u || "").trim();
    return O ? `${g === "mask" ? "mask" : "paint"}:${O}` : "";
  }
  function ie(g) {
    const u = String(g || "").trim();
    return u ? `raster:${u}` : "";
  }
  function j(g) {
    const u = String(g || "").trim();
    if (!u) return "";
    const O = u.match(/^raster:(.*)$/);
    return String(O ? O[1] || "" : u).trim();
  }
  function H(g, u = null) {
    const O = String(g || "").trim();
    if (!O) return { layerKind: "paint", actionGroupId: "" };
    const V = O.match(/^(paint|mask):(.*)$/);
    return V ? { layerKind: V[1] === "mask" ? "mask" : "paint", actionGroupId: String(V[2] || "").trim() } : { layerKind: u === "mask" ? "mask" : "paint", actionGroupId: O };
  }
  function U() {
    var u;
    let g = -1;
    for (const O of w())
      g = Math.max(g, Number((O == null ? void 0 : O.z_index) || 0));
    for (const O of y())
      g = Math.max(g, Number((O == null ? void 0 : O.z_index) || 0));
    for (const O of Array.isArray((u = o.painting) == null ? void 0 : u.raster_objects) ? o.painting.raster_objects : [])
      String((O == null ? void 0 : O.layerKind) || "paint") === "paint" && (g = Math.max(g, Number((O == null ? void 0 : O.z_index) || 0)));
    return g + 1;
  }
  function ae(g, u = null) {
    const O = String(g || "").trim();
    if (!O) return null;
    const V = y();
    let k = V.find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === O);
    return k ? u != null && (k.z_index = Math.max(0, Number(u || 0))) : (k = {
      id: O,
      type: "strokeGroup",
      actionGroupId: O,
      z_index: u == null ? U() : Math.max(0, Number(u || 0)),
      locked: !1,
      frame: null
    }, V.push(k)), k;
  }
  function Pe(g) {
    if (!(g != null && g.centerUv)) return [];
    const u = Number(g.centerUv.u || 0), O = Number(g.centerUv.v || 0), V = Number(g.halfW || 0), k = Number(g.halfH || 0);
    return [
      {
        u: ((u - V) % 1 + 1) % 1,
        v: De(O - k, 0, 1)
      },
      {
        u: ((u + V) % 1 + 1) % 1,
        v: De(O - k, 0, 1)
      },
      {
        u: ((u + V) % 1 + 1) % 1,
        v: De(O + k, 0, 1)
      },
      {
        u: ((u - V) % 1 + 1) % 1,
        v: De(O + k, 0, 1)
      }
    ];
  }
  function we() {
    const g = new Set(z()), O = y().filter((V) => g.has(String((V == null ? void 0 : V.actionGroupId) || "")));
    return g.forEach((V) => {
      O.some((k) => String((k == null ? void 0 : k.actionGroupId) || "") === V) || O.push({
        id: V,
        type: "strokeGroup",
        actionGroupId: V,
        z_index: U(),
        locked: !1,
        frame: null
      });
    }), O.sort((V, k) => Number((V == null ? void 0 : V.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0)), o.painting.groups = O, O;
  }
  function he(g, u, O) {
    var qe;
    const V = (Be) => (Number(Be || 0) % 1 + 1) % 1, k = [];
    for (const Be of O) {
      const Qe = Be == null ? void 0 : Be.geometry, dt = (Qe == null ? void 0 : Qe.geometryKind) === "lasso_fill" ? Qe == null ? void 0 : Qe.points : (Qe == null ? void 0 : Qe.processedPoints) || (Qe == null ? void 0 : Qe.rawPoints) || (Qe == null ? void 0 : Qe.points) || [];
      Array.isArray(dt) && k.push(...dt);
    }
    if (!k.length) return null;
    const q = V(((qe = k[0]) == null ? void 0 : qe.u) || 0);
    let ve = 0, se = 0;
    k.forEach((Be) => {
      const Qe = V((Be == null ? void 0 : Be.u) || 0);
      ve += q + be(Qe, q), se += Number((Be == null ? void 0 : Be.v) || 0);
    });
    const Ve = (ve / k.length % 1 + 1) % 1;
    let Te = 1 / 0, N = -1 / 0, ye = 1 / 0, Fe = -1 / 0;
    k.forEach((Be) => {
      const Qe = V((Be == null ? void 0 : Be.u) || 0), dt = be(Qe, Ve);
      Te = Math.min(Te, dt), N = Math.max(N, dt);
      const yt = Number((Be == null ? void 0 : Be.v) || 0);
      ye = Math.min(ye, yt), Fe = Math.max(Fe, yt);
    });
    const Re = O.reduce((Be, Qe) => {
      const dt = p(String((Qe == null ? void 0 : Qe.toolKind) || "pen")), yt = Cn[dt] || Cn[jr], Kt = Math.max(1, Number((Qe == null ? void 0 : Qe.size) || 10)) * Math.max(0.1, Number((yt == null ? void 0 : yt.sizeScale) ?? 1));
      return Math.max(Be, Kt);
    }, 0), Ue = Math.max(35e-4, Re / 2048);
    return {
      centerUv: { u: ((Ve + (Te + N) * 0.5) % 1 + 1) % 1, v: De((ye + Fe) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (N - Te) * 0.5 + Ue,
      halfH: (Fe - ye) * 0.5 + Ue,
      uvPad: Ue
    };
  }
  function X(g, u, O) {
    const V = String(g || "").trim();
    if (!V) return null;
    const k = y().find((ve) => String((ve == null ? void 0 : ve.actionGroupId) || "") === V);
    if (!k) return null;
    const q = O || x(V, u);
    return k.frame = he(V, u, q), k.frame;
  }
  function A() {
    var V;
    const g = w().map((k) => ({
      type: "sticker",
      id: String((k == null ? void 0 : k.id) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    })), u = we().map((k) => ({
      type: "strokeGroup",
      id: String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.actionGroupId) || ""),
      actionGroupId: String((k == null ? void 0 : k.actionGroupId) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    })), O = (Array.isArray((V = o.painting) == null ? void 0 : V.raster_objects) ? o.painting.raster_objects : []).filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") === "paint").map((k) => ({
      type: "rasterObject",
      id: String((k == null ? void 0 : k.id) || ""),
      z_index: Number((k == null ? void 0 : k.z_index) || 0),
      item: k
    }));
    return [...g, ...u, ...O].sort((k, q) => Number(k.z_index || 0) - Number(q.z_index || 0));
  }
  function L(g = !0) {
    var O, V, k, q, ve, se;
    const u = A().filter((Ve) => Ve.type === "strokeGroup").map((Ve) => String(Ve.actionGroupId || "")).filter((Ve) => !!Ve);
    if (g) {
      const Ve = String(((V = (O = n.interaction) == null ? void 0 : O.stroke) == null ? void 0 : V.actionGroupId) || "").trim(), Te = String(((q = (k = n.interaction) == null ? void 0 : k.stroke) == null ? void 0 : q.layerKind) || "").trim(), N = String(((se = (ve = n.interaction) == null ? void 0 : ve.stroke) == null ? void 0 : se.toolKind) || "").trim();
      Ve && Te === "paint" && N !== "eraser" && !u.includes(Ve) && u.push(Ve);
    }
    return u;
  }
  function me(g = !0) {
    var se, Ve, Te, N, ye, Fe;
    const u = A();
    if (!g) return u;
    const O = String(((Ve = (se = n.interaction) == null ? void 0 : se.stroke) == null ? void 0 : Ve.actionGroupId) || "").trim(), V = String(((N = (Te = n.interaction) == null ? void 0 : Te.stroke) == null ? void 0 : N.layerKind) || "").trim(), k = String(((Fe = (ye = n.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : Fe.toolKind) || "").trim();
    if (!O || V !== "paint" || k === "eraser" || u.some((Re) => Re.type === "strokeGroup" && String(Re.actionGroupId || "") === O))
      return u;
    const q = b();
    let ve = u.reduce((Re, Ue) => Math.max(Re, Number((Ue == null ? void 0 : Ue.z_index) || 0)), -1) + 1;
    return q && Ce(q) && String(q.actionGroupId || "") === O && (ve = Number(q.z_index || 0)), [
      ...u,
      {
        type: "strokeGroup",
        id: O,
        actionGroupId: O,
        z_index: ve,
        item: null
      }
    ].sort((Re, Ue) => Number((Re == null ? void 0 : Re.z_index) || 0) - Number((Ue == null ? void 0 : Ue.z_index) || 0));
  }
  function ge() {
    return y().slice().sort((g, u) => Number((g == null ? void 0 : g.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((g) => te(ee("paint", (g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || ""))).filter(Boolean);
  }
  function Ne() {
    var g;
    return (Array.isArray((g = o.painting) == null ? void 0 : g.raster_objects) ? o.painting.raster_objects : []).filter((u) => String((u == null ? void 0 : u.layerKind) || "paint") === "paint").slice().sort((u, O) => Number((u == null ? void 0 : u.z_index) || 0) - Number((O == null ? void 0 : O.z_index) || 0)).map((u) => Ae(ie((u == null ? void 0 : u.id) || ""))).filter(Boolean);
  }
  function He() {
    return r || !Array.isArray(o.stickers) ? [] : w();
  }
  function re() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...He()];
  }
  function R(g) {
    return !!g && Array.isArray(o.shots) && o.shots.includes(g);
  }
  function oe(g) {
    return !!g && Array.isArray(o.stickers) && o.stickers.includes(g);
  }
  function pe() {
    var g;
    return Array.isArray((g = o.painting) == null ? void 0 : g.raster_objects) ? o.painting.raster_objects : [];
  }
  function Ae(g) {
    const u = j(g);
    if (!u) return null;
    const O = pe().find((V) => String((V == null ? void 0 : V.id) || "").trim() === u);
    return !O || String((O == null ? void 0 : O.layerKind) || "paint") !== "paint" ? null : {
      ...O,
      id: ie(u),
      type: "rasterObject",
      rasterObjectId: u
    };
  }
  function Le(g) {
    if (!g || typeof g != "object" || String(g.type || "") !== "rasterObject") return !1;
    const u = j(g.rasterObjectId || g.id || "");
    return !!u && !!Ae(ie(u));
  }
  function te(g) {
    const u = H(g), O = String(u.actionGroupId || "").trim();
    if (!O) return null;
    const V = y().find((k) => String((k == null ? void 0 : k.id) || (k == null ? void 0 : k.actionGroupId) || "") === O || String((k == null ? void 0 : k.actionGroupId) || "") === O);
    return V ? {
      ...V,
      id: ee("paint", O),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: O
    } : null;
  }
  function Ce(g) {
    if (!g || typeof g != "object" || String(g.type || "") !== "strokeGroup") return !1;
    const u = String(g.actionGroupId || "").trim(), O = String(g.layerKind || "paint").trim() || "paint";
    return !!u && !!te(ee(O, u));
  }
  function x(g, u = null) {
    const O = H(g, u), V = String(O.actionGroupId || "").trim();
    return V ? f(O.layerKind).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() === V) : [];
  }
  function M(g, u = "paint") {
    const O = String(g || "").trim(), k = `geomv5:${String(u || "paint").trim() || "paint"}:${O}:${n.mode}:${h()}`;
    if (n.mode === "frame") {
      const q = l(), ve = String((q == null ? void 0 : q.id) || ""), se = q ? d(q) : null;
      return `${k}:frame:${ve}:${Math.round(Number((q == null ? void 0 : q.yaw_deg) || 0) * 1e3)}:${Math.round(Number((q == null ? void 0 : q.pitch_deg) || 0) * 1e3)}:${Math.round(Number((q == null ? void 0 : q.roll_deg) ?? (q == null ? void 0 : q.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((q == null ? void 0 : q.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((q == null ? void 0 : q.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((se == null ? void 0 : se.x) || 0))}:${Math.round(Number((se == null ? void 0 : se.y) || 0))}:${Math.round(Number((se == null ? void 0 : se.w) || 0))}:${Math.round(Number((se == null ? void 0 : se.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function K(g, u, O) {
    return !g || typeof g != "object" ? g : {
      ...g,
      u: ((Number(g.u || 0) + Number(u || 0)) % 1 + 1) % 1,
      v: De(Number(g.v || 0) + Number(O || 0), 0, 1)
    };
  }
  function be(g, u) {
    let O = Number(g || 0) - Number(u || 0);
    for (; O > 0.5; ) O -= 1;
    for (; O < -0.5; ) O += 1;
    return O;
  }
  function I(g, u = null, O = null) {
    var Te;
    const V = H(g, u), k = Array.isArray(O) ? O : x(V.actionGroupId, V.layerKind), q = [];
    if (k.forEach((N) => {
      const ye = (N == null ? void 0 : N.geometry) || null, Fe = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [];
      Array.isArray(Fe) && q.push(...Fe);
    }), !q.length) return { u: 0.5, v: 0.5 };
    const ve = Number(((Te = q[0]) == null ? void 0 : Te.u) || 0);
    let se = 0, Ve = 0;
    return q.forEach((N) => {
      se += ve + be(Number((N == null ? void 0 : N.u) || 0), ve), Ve += Number((N == null ? void 0 : N.v) || 0);
    }), {
      u: (se / q.length % 1 + 1) % 1,
      v: De(Ve / q.length, 0, 1)
    };
  }
  function Z(g, u, O = 1, V = 0) {
    if (!g || typeof g != "object") return g;
    const k = Number((u == null ? void 0 : u.u) || 0), q = Number((u == null ? void 0 : u.v) || 0), ve = be(Number(g.u || 0), k), se = Number(g.v || 0) - q, Ve = Number(V || 0) * Er, Te = Math.cos(Ve), N = Math.sin(Ve), ye = Math.max(0.02, Number(O || 1)), Fe = (ve * Te - se * N) * ye, Re = (ve * N + se * Te) * ye;
    return {
      ...g,
      u: ((k + Fe) % 1 + 1) % 1,
      v: De(q + Re, 0, 1)
    };
  }
  function ne(g, u, O, V = null, k = null, q = null) {
    const ve = H(g, k), se = String(ve.actionGroupId || "").trim();
    if (!se) return !1;
    const Ve = f(ve.layerKind), Te = Array.isArray(V) ? new Map(V.map((ye) => [String((ye == null ? void 0 : ye.id) || ""), ye])) : null;
    let N = !1;
    if (Ve.forEach((ye) => {
      if (String((ye == null ? void 0 : ye.actionGroupId) || "").trim() !== se) return;
      const Fe = (Te == null ? void 0 : Te.get(String((ye == null ? void 0 : ye.id) || ""))) || ye, Re = ye == null ? void 0 : ye.geometry, Ue = Fe == null ? void 0 : Fe.geometry;
      !Re || !Ue || (Array.isArray(Ue.points) && (Re.points = Ue.points.map((qe) => K(qe, u, O)), N = !0), Array.isArray(Ue.rawPoints) && (Re.rawPoints = Ue.rawPoints.map((qe) => K(qe, u, O)), N = !0), Array.isArray(Ue.processedPoints) && (Re.processedPoints = Ue.processedPoints.map((qe) => K(qe, u, O)), N = !0));
    }), N && q) {
      const ye = y().find((Fe) => String((Fe == null ? void 0 : Fe.actionGroupId) || "") === se);
      ye && (ye.frame = null);
    }
    return N;
  }
  function C(g, u = 1, O = 0, V = null, k = null, q = null) {
    const ve = H(g, k), se = String(ve.actionGroupId || "").trim();
    if (!se) return !1;
    const Ve = f(ve.layerKind), Te = Array.isArray(V) ? V : x(se, ve.layerKind), N = Array.isArray(Te) ? new Map(Te.map((Re) => [String((Re == null ? void 0 : Re.id) || ""), Re])) : null, ye = (q == null ? void 0 : q.centerUv) ?? I(se, ve.layerKind, Te);
    let Fe = !1;
    if (Ve.forEach((Re) => {
      if (String((Re == null ? void 0 : Re.actionGroupId) || "").trim() !== se) return;
      const Ue = (N == null ? void 0 : N.get(String((Re == null ? void 0 : Re.id) || ""))) || Re, qe = Re == null ? void 0 : Re.geometry, Be = Ue == null ? void 0 : Ue.geometry;
      !qe || !Be || (Array.isArray(Be.points) && (qe.points = Be.points.map((Qe) => Z(Qe, ye, u, O)), Fe = !0), Array.isArray(Be.rawPoints) && (qe.rawPoints = Be.rawPoints.map((Qe) => Z(Qe, ye, u, O)), Fe = !0), Array.isArray(Be.processedPoints) && (qe.processedPoints = Be.processedPoints.map((Qe) => Z(Qe, ye, u, O)), Fe = !0));
    }), Fe && q) {
      const Re = y().find((Ue) => String((Ue == null ? void 0 : Ue.actionGroupId) || "") === se);
      Re && (Re.frame = null);
    }
    return Fe;
  }
  function B(g, u, O, V = null) {
    const k = j(g);
    if (!k) return !1;
    const q = pe().find((N) => String((N == null ? void 0 : N.id) || "").trim() === k);
    if (!q) return !1;
    const ve = V && typeof V == "object" ? V : q, se = (ve == null ? void 0 : ve.transform) || {}, Ve = Number(se.du || 0) + Number(u || 0), Te = De(Number(se.dv || 0) + Number(O || 0), -1, 1);
    return q.transform || (q.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), q.transform.du = Ve, q.transform.dv = Te, !0;
  }
  function W(g, u = 1, O = null) {
    const V = j(g);
    if (!V) return !1;
    const k = pe().find((Te) => String((Te == null ? void 0 : Te.id) || "").trim() === V);
    if (!k) return !1;
    const q = O && typeof O == "object" ? O : k, ve = (q == null ? void 0 : q.transform) || {}, se = Math.max(0.01, Number(ve.scale || 1)), Ve = De(se * Math.max(0.01, Number(u || 1)), 0.01, 100);
    return k.transform || (k.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), k.transform.scale = Ve, !0;
  }
  function Q() {
    return U();
  }
  function ue(g) {
    var u;
    return !g || typeof g != "object" ? !1 : a ? ((u = g.source) == null ? void 0 : u.kind) === "port" : String(g.id || "") === gf || String(g.source_kind || "") === tI;
  }
  function de(g) {
    return !!(g && typeof g == "object" && g.visible === !1);
  }
  function J(g) {
    return ue(g) && de(g) ? O0 : 1;
  }
  function fe(g, u, O = 1, V = 0) {
    if (!g || typeof g != "object") return g;
    const k = Number((u == null ? void 0 : u.u) || 0), q = Number((u == null ? void 0 : u.v) || 0), ve = be(Number(g.u || 0), k), se = Number(g.v || 0) - q, Ve = Math.max(0.02, Number(O || 1)), Te = Number(V || 0) * Er, N = Math.cos(Te), ye = Math.sin(Te), Fe = ve / Ve, Re = se / Ve, Ue = Fe * N + Re * ye, qe = -Fe * ye + Re * N;
    return {
      ...g,
      u: ((k + Ue) % 1 + 1) % 1,
      v: q + qe
    };
  }
  function Ee(g) {
    const u = (g == null ? void 0 : g.bbox) || null, O = (g == null ? void 0 : g.transform) || {};
    return u ? {
      u: (((Number(u.u0 || 0) + Number(u.u1 || 0)) * 0.5 + Number(O.du || 0)) % 1 + 1) % 1,
      v: De((Number(u.v0 || 0) + Number(u.v1 || 0)) * 0.5 + Number(O.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function je(g) {
    var Ve, Te, N, ye;
    const u = (g == null ? void 0 : g.bbox) || null;
    if (!u) return [];
    const O = {
      u: (Number(u.u0 || 0) + Number(u.u1 || 0)) * 0.5,
      v: (Number(u.v0 || 0) + Number(u.v1 || 0)) * 0.5
    }, V = Math.max(0.01, Number(((Ve = g == null ? void 0 : g.transform) == null ? void 0 : Ve.scale) || 1)), k = Number(((Te = g == null ? void 0 : g.transform) == null ? void 0 : Te.rot_deg) || 0), q = Number(((N = g == null ? void 0 : g.transform) == null ? void 0 : N.du) || 0), ve = Number(((ye = g == null ? void 0 : g.transform) == null ? void 0 : ye.dv) || 0);
    return [
      { u: Number(u.u0 || 0), v: Number(u.v0 || 0) },
      { u: Number(u.u1 || 0), v: Number(u.v0 || 0) },
      { u: Number(u.u1 || 0), v: Number(u.v1 || 0) },
      { u: Number(u.u0 || 0), v: Number(u.v1 || 0) }
    ].map((Fe) => K(Z(Fe, O, V, k), q, ve));
  }
  function ce(g) {
    const u = j((g == null ? void 0 : g.rasterObjectId) || (g == null ? void 0 : g.id) || ""), O = (g == null ? void 0 : g.transform) || {}, V = (g == null ? void 0 : g.bbox) || {}, k = `${u}:${n.mode}:${h()}:${V.u0}:${V.v0}:${V.u1}:${V.v1}:${O.du}:${O.dv}:${O.rot_deg}:${O.scale}`;
    if (n.mode === "frame") {
      const q = l(), ve = q ? d(q) : null;
      return `${k}:frame:${String((q == null ? void 0 : q.id) || "")}:${Math.round(Number((ve == null ? void 0 : ve.x) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.y) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.w) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function xe(g) {
    const u = String((g == null ? void 0 : g.id) || ""), O = R(g) ? "frame" : oe(g) ? "sticker" : "item", V = F(g), k = [
      O,
      u,
      n.mode,
      Number((V == null ? void 0 : V.yaw_deg) || 0).toFixed(4),
      Number((V == null ? void 0 : V.pitch_deg) || 0).toFixed(4),
      Number((V == null ? void 0 : V.hFOV_deg) || 0).toFixed(4),
      Number((V == null ? void 0 : V.vFOV_deg) || 0).toFixed(4),
      Number((V == null ? void 0 : V.rot_deg) || 0).toFixed(4),
      Number((V == null ? void 0 : V.roll_deg) || 0).toFixed(4),
      Br(V),
      P(g) && v(g)
    ].join(":");
    if (n.mode === "frame") {
      const q = l(), ve = q ? d(q) : null;
      return `${k}:frame:${String((q == null ? void 0 : q.id) || "")}:${Math.round(Number((ve == null ? void 0 : ve.x) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.y) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.w) || 0))}:${Math.round(Number((ve == null ? void 0 : ve.h) || 0))}`;
    }
    return `${k}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function Ie() {
    A().forEach((u, O) => {
      u.type === "sticker" && u.item && (u.item.z_index = O), u.type === "strokeGroup" && u.item && (u.item.z_index = O), u.type === "rasterObject" && u.item && (u.item.z_index = O);
    });
  }
  return {
    connect(g) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: p,
        getFrameViewRect: d,
        getPaintingLayerList: f,
        getPaintingRevisionKey: h,
        getSelected: b,
        sceneStickerShown: v
      } = g);
    },
    getList: S,
    skyStickers: w,
    isSceneSticker: P,
    isUploadingSticker: G,
    poseOf: F,
    writePose: T,
    getPaintingGroupList: y,
    makeStrokeGroupSelectionId: ee,
    makeRasterObjectSelectionId: ie,
    parseRasterObjectSelectionId: j,
    ensurePaintingGroupEntry: ae,
    getFrameCornersUv: Pe,
    ensureGroupFrame: X,
    getDisplayListObjects: A,
    getOrderedPaintGroupIds: L,
    getOrderedDisplayListObjects: me,
    getSelectableStrokeGroupItems: ge,
    getSelectableRasterObjectItems: Ne,
    cutoutStickers: He,
    getCutoutSelectableItems: re,
    isShotItem: R,
    isStickerItem: oe,
    getRasterObjectList: pe,
    getRasterObjectItem: Ae,
    isRasterObjectItem: Le,
    getStrokeGroupItem: te,
    isStrokeGroupItem: Ce,
    getStrokeGroupStrokes: x,
    getStrokeGeomCacheKey: M,
    shortestWrappedDelta: be,
    getStrokeGroupCenterUv: I,
    applyStrokeGroupOffset: ne,
    applyStrokeGroupTransform: C,
    applyRasterObjectOffset: B,
    applyRasterObjectTransform: W,
    getNextStickerZIndex: Q,
    isExternalSticker: ue,
    isStickerHidden: de,
    getStickerDisplayAlpha: J,
    inverseTransformErpPointAround: fe,
    getRasterObjectCenterUv: Ee,
    getRasterObjectTransformedErpPoints: je,
    getRasterObjectGeomCacheKey: ce,
    getSceneItemGeomCacheKey: xe,
    normalizeDisplayZIndices: Ie
  };
}
function jI(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: a,
    timeline: s,
    type: l
  } = e;
  let p, d, f, h, b, v, S, w, P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L, me, ge, Ne, He, re;
  function R() {
    const g = String(t.selectedId || "");
    if (!g) return null;
    const u = y(g);
    if (u) return u;
    const O = G(g);
    return O || (o ? v().find((V) => String((V == null ? void 0 : V.id) || "") === g) || null : w().find((V) => String((V == null ? void 0 : V.id) || "") === g) || null);
  }
  function oe() {
    const g = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], u = [], O = /* @__PURE__ */ new Set();
    return g.forEach((V) => {
      const k = String(V || "").trim();
      if (!k || O.has(k)) return;
      O.add(k);
      const q = k === String(t.selectedId || "") ? R() : y(k) || G(k) || (o ? v().find((ve) => String((ve == null ? void 0 : ve.id) || "") === k) : w().find((ve) => String((ve == null ? void 0 : ve.id) || "") === k));
      q && u.push(q);
    }), u;
  }
  function pe(g = null) {
    const u = Array.isArray(g) ? g : oe();
    if (!u || u.length < 2) return null;
    const O = u.map((Te) => he(Te)).filter((Te) => (Te == null ? void 0 : Te.visible) && Array.isArray(Te.corners) && Te.corners.length);
    if (!O.length) return null;
    const V = O.flatMap((Te) => Te.corners.map((N) => Number((N == null ? void 0 : N.x) || 0))), k = O.flatMap((Te) => Te.corners.map((N) => Number((N == null ? void 0 : N.y) || 0))), q = Math.min(...V), ve = Math.max(...V), se = Math.min(...k), Ve = Math.max(...k);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (q + ve) * 0.5, y: (se + Ve) * 0.5 },
      corners: [
        { x: q, y: se },
        { x: ve, y: se },
        { x: ve, y: Ve },
        { x: q, y: Ve }
      ],
      edgeMidpoints: [
        { edge: "top", x: (q + ve) * 0.5, y: se, a: { x: q, y: se }, b: { x: ve, y: se } },
        { edge: "right", x: ve, y: (se + Ve) * 0.5, a: { x: ve, y: se }, b: { x: ve, y: Ve } },
        { edge: "bottom", x: (q + ve) * 0.5, y: Ve, a: { x: ve, y: Ve }, b: { x: q, y: Ve } },
        { edge: "left", x: q, y: (se + Ve) * 0.5, a: { x: q, y: Ve }, b: { x: q, y: se } }
      ],
      rotateStemBase: { x: (q + ve) * 0.5, y: se },
      rotateHandle: { x: (q + ve) * 0.5, y: se - 30 }
    };
  }
  function Ae(g) {
    const u = String((g == null ? void 0 : g.id) || "").trim();
    return !!u && Array.isArray(t.selectedIds) && t.selectedIds.includes(u);
  }
  function Le() {
    const g = R();
    return g ? ae(g) || ee(g) ? "stroke" : j(g) ? "frame" : "image" : null;
  }
  function te(g) {
    if (!g || typeof g != "object") return !1;
    if (ae(g)) {
      const u = String(g.actionGroupId || g.id || "").trim(), O = P().find((V) => String((V == null ? void 0 : V.actionGroupId) || (V == null ? void 0 : V.id) || "").trim() === u);
      return (O == null ? void 0 : O.locked) === !0;
    }
    if (ee(g)) {
      const u = A(g.rasterObjectId || g.id || ""), O = F().find((V) => String((V == null ? void 0 : V.id) || "").trim() === u);
      return (O == null ? void 0 : O.locked) === !0;
    }
    return g.locked === !0;
  }
  function Ce(g = null) {
    const u = Array.isArray(g) ? g : oe();
    return u.length > 0 && u.every((O) => te(O));
  }
  function x(g, u) {
    const O = u === !0;
    if (!g || typeof g != "object") return !1;
    if (ae(g)) {
      const V = String(g.actionGroupId || g.id || "").trim(), k = P().find((q) => String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim() === V);
      return !k || k.locked === O ? !1 : (k.locked = O, !0);
    }
    if (ee(g)) {
      const V = A(g.rasterObjectId || g.id || ""), k = F().find((q) => String((q == null ? void 0 : q.id) || "").trim() === V);
      return !k || k.locked === O ? !1 : (k.locked = O, !0);
    }
    return g.locked === O ? !1 : (g.locked = O, !0);
  }
  function M() {
    if (r) return;
    const g = oe();
    if (!g.length) return;
    const u = !Ce(g);
    let O = !1;
    g.forEach((V) => {
      x(V, u) && (O = !0);
    }), O && (me(), d(), He(), re(), ge());
  }
  function K(g) {
    fe(), s.selection = null, t.selectedId = (g == null ? void 0 : g.id) || null, t.selectedIds = g != null && g.id ? [g.id] : [], g && U(g) ? a.active.selected_sticker_id = g.id || null : a.active.selected_sticker_id = null, g && j(g) ? a.active.selected_shot_id = g.id || null : g ? j(g) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function be(g, u = null) {
    const O = [], V = /* @__PURE__ */ new Set();
    (Array.isArray(g) ? g : []).forEach((ve) => {
      const se = String((ve == null ? void 0 : ve.id) || "").trim();
      !se || V.has(se) || (V.add(se), O.push(se));
    }), t.selectedIds = O, fe(), s.selection = null;
    const k = String(u || "").trim();
    t.selectedId = k && O.includes(k) ? k : O[O.length - 1] || null;
    const q = R();
    a.active.selected_sticker_id = q && U(q) && q.id || null, q && j(q) ? a.active.selected_shot_id = q.id || null : O.length || (a.active.selected_shot_id = null);
  }
  function I() {
    const g = (Array.isArray(a.shots) ? a.shots : []).map((O, V) => ({
      kind: "frame",
      item: O,
      label: String((O == null ? void 0 : O.label) || `Frame ${V + 1}`)
    })), u = h().map((O, V) => {
      var q, ve;
      const k = z(O) ? String(O.id || gf) : String(((ve = (q = a.assets) == null ? void 0 : q[O.asset_id]) == null ? void 0 : ve.name) || O.asset_id || O.id || `Image ${V + 1}`);
      return {
        kind: "image",
        item: O,
        label: k
      };
    });
    return [...g, ...u];
  }
  function Z(g) {
    return g === "frame" ? Xe.camera : g === "stroke" ? Xe.paintbrush_vertical_tool : Xe.image;
  }
  function ne(g) {
    return !g || !g.item ? {
      label: String((g == null ? void 0 : g.label) || ""),
      icon: null
    } : {
      label: String(g.label || ""),
      icon: Z(g.kind)
    };
  }
  function C() {
    if (r) return;
    const g = R();
    !g || !z(g) || (g.visible = H(g), ce(), Pe(), me(), d(), re(), He(), ge());
  }
  function B() {
    if (r || l !== "stickers") return;
    const g = R();
    if (!g || !z(g)) return;
    const u = g.initial_pose;
    if (!u || typeof u != "object") return;
    g.yaw_deg = Number(u.yaw_deg ?? g.yaw_deg ?? 0), g.pitch_deg = Number(u.pitch_deg ?? g.pitch_deg ?? 0), g.hFOV_deg = Number(u.hFOV_deg ?? g.hFOV_deg ?? 30);
    const O = T(Al, () => {
      ge();
    });
    O && (O.complete || O.naturalWidth || O.width) ? g.vFOV_deg = f(
      Number(u.hFOV_deg ?? g.hFOV_deg ?? 30),
      Number(O.naturalWidth || O.width || 1),
      Number(O.naturalHeight || O.height || 1)
    ) : g.vFOV_deg = Number(u.vFOV_deg ?? g.vFOV_deg ?? 30), g.rot_deg = Number(u.rot_deg ?? g.rot_deg ?? 0), me(), d(), re(), He(), ge();
  }
  function W(g) {
    if (!g || !z(g)) return null;
    const u = g.initial_pose;
    if (!u || typeof u != "object") return null;
    const O = {
      yaw_deg: Number(u.yaw_deg ?? g.yaw_deg ?? 0),
      pitch_deg: Number(u.pitch_deg ?? g.pitch_deg ?? 0),
      hFOV_deg: Number(u.hFOV_deg ?? g.hFOV_deg ?? 30),
      vFOV_deg: Number(u.vFOV_deg ?? g.vFOV_deg ?? 30),
      rot_deg: Number(u.rot_deg ?? g.rot_deg ?? 0)
    }, V = T(Al, () => {
      ge();
    });
    return V && (V.complete || V.naturalWidth || V.width) && (O.vFOV_deg = f(
      O.hFOV_deg,
      Number(V.naturalWidth || V.width || 1),
      Number(V.naturalHeight || V.height || 1)
    )), O;
  }
  function Q() {
    const g = R();
    if (!g || !z(g)) return !1;
    const u = W(g);
    if (!u) return !1;
    const O = (V, k) => Math.abs(Number(V || 0) - Number(k || 0)) <= 1e-4;
    return !(O(g.yaw_deg, u.yaw_deg) && O(g.pitch_deg, u.pitch_deg) && O(g.hFOV_deg, u.hFOV_deg) && O(g.vFOV_deg, u.vFOV_deg) && O(g.rot_deg, u.rot_deg));
  }
  function ue(g = {}) {
    const O = g.preservePanelValues !== !1 ? L(R()) : null;
    O && (t.panelLastValues = {
      yaw_deg: Number(O.yaw_deg || 0),
      pitch_deg: Number(O.pitch_deg || 0),
      hFOV_deg: Number(O.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(O.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(O.rot_deg || 0),
      roll_deg: Number(O.roll_deg || 0),
      aspect_id: Br(O)
    }), t.selectedId = null, t.selectedIds = [], fe(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function de() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((g) => g.id === t.worldSelectedId && g.placement === "world") || null;
  }
  function J(g) {
    K(null), t.worldSelectedId = g, n.backgroundDirty = !0;
  }
  function fe() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Ee(g) {
    return !!g && !r && !g.locked;
  }
  function je() {
    if (l !== "cutout") return;
    const g = b();
    g && (t.selectedId = String(g.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ce() {
    var u;
    const g = R();
    (ie(g) && !Ne(g) || t.selectedId === Jl && $() && !p() || Le() === "stroke" && !X()) && K(null), ((u = de()) == null ? void 0 : u.visible) === !1 && fe();
  }
  function xe() {
    if (r) return;
    const g = oe();
    if (!R() || g.length === 0 || g.some((se) => te(se))) return;
    we();
    const O = S(), V = new Set(g.map((se) => U(se) ? `sticker:${String(se.id || "")}` : ee(se) ? `rasterObject:${A(se.rasterObjectId || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || se.id || "")}`)), k = [], q = [];
    if (O.forEach((se) => {
      var Te, N;
      const Ve = se.type === "sticker" ? `sticker:${String(((Te = se.item) == null ? void 0 : Te.id) || "")}` : se.type === "rasterObject" ? `rasterObject:${String(((N = se.item) == null ? void 0 : N.id) || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || "")}`;
      V.has(Ve) ? k.push(se) : q.push(se);
    }), !k.length || k[k.length - 1] === O[O.length - 1]) return;
    [...q, ...k].forEach((se, Ve) => {
      se.type === "sticker" && se.item && (se.item.z_index = Ve), se.type === "strokeGroup" && se.item && (se.item.z_index = Ve), se.type === "rasterObject" && se.item && (se.item.z_index = Ve);
    }), Pe(), me(), d(), He(), ge();
  }
  function Ie() {
    if (r) return;
    const g = oe();
    if (!R() || g.length === 0 || g.some((se) => te(se))) return;
    we();
    const O = S(), V = new Set(g.map((se) => U(se) ? `sticker:${String(se.id || "")}` : ee(se) ? `rasterObject:${A(se.rasterObjectId || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || se.id || "")}`)), k = [], q = [];
    if (O.forEach((se) => {
      var Te, N;
      const Ve = se.type === "sticker" ? `sticker:${String(((Te = se.item) == null ? void 0 : Te.id) || "")}` : se.type === "rasterObject" ? `rasterObject:${String(((N = se.item) == null ? void 0 : N.id) || se.id || "")}` : `strokeGroup:${String(se.actionGroupId || "")}`;
      V.has(Ve) ? k.push(se) : q.push(se);
    }), !k.length || k[0] === O[0]) return;
    [...k, ...q].forEach((se, Ve) => {
      se.type === "sticker" && se.item && (se.item.z_index = Ve), se.type === "strokeGroup" && se.item && (se.item.z_index = Ve), se.type === "rasterObject" && se.item && (se.item.z_index = Ve);
    }), Pe(), me(), d(), He(), ge();
  }
  return {
    connect(g) {
      ({
        cameraShoots: p,
        commitAndRefreshNode: d,
        computeStickerVFov: f,
        cutoutStickers: h,
        getActiveCutoutShot: b,
        getCutoutSelectableItems: v,
        getDisplayListObjects: S,
        getList: w,
        getPaintingGroupList: P,
        getRasterObjectItem: G,
        getRasterObjectList: F,
        getStickerUiImage: T,
        getStrokeGroupItem: y,
        hasCamera: $,
        isExternalSticker: z,
        isRasterObjectItem: ee,
        isSceneSticker: ie,
        isShotItem: j,
        isStickerHidden: H,
        isStickerItem: U,
        isStrokeGroupItem: ae,
        markObjectVisualsDirty: Pe,
        normalizeDisplayZIndices: we,
        objectGeom: he,
        paintingShown: X,
        parseRasterObjectSelectionId: A,
        poseOf: L,
        pushHistory: me,
        requestDraw: ge,
        sceneStickerShown: Ne,
        updateSelectionMenu: He,
        updateSidePanel: re
      } = g);
    },
    getSelected: R,
    getSelectedItems: oe,
    getMultiSelectionGeom: pe,
    isItemSelected: Ae,
    getSelectedKind: Le,
    isItemLocked: te,
    areAllSelectedItemsLocked: Ce,
    toggleSelectedLock: M,
    setSelectedItem: K,
    setSelectedItems: be,
    getCutoutInspectorItems: I,
    getSelectionItemIcon: Z,
    getSelectionItemLabelData: ne,
    toggleSelectedExternalStickerVisibility: C,
    restoreSelectedToInitialPose: B,
    canRestoreSelectedToInitial: Q,
    clearSelection: ue,
    selectedWorldSticker: de,
    selectWorldSticker: J,
    clearWorldSelection: fe,
    worldStickerEditable: Ee,
    applyInitialCutoutFocus: je,
    releaseHiddenSelection: ce,
    bringSelectedToFront: xe,
    sendSelectedToBack: Ie
  };
}
function HI(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, p, d, f, h = { key: [], projection: null };
  function b() {
    return o && a() && i.camera.projection === "erp";
  }
  function v() {
    const oe = ee({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !oe || oe.length !== 4 ? !1 : oe[0].y >= oe[3].y;
  }
  function S() {
    return F0({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function w() {
    const R = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return R.some((oe, pe) => oe !== h.key[pe]) && (h = { key: R, projection: D0(S(), r.width, r.height) }), h.projection;
  }
  function P(R) {
    const oe = w().project(R);
    return oe.z > 1e-4 ? oe : null;
  }
  function G(R, oe) {
    return w().ray(R, oe);
  }
  function F() {
    const R = r.width, oe = r.height, pe = 2;
    if (R / Math.max(oe, 1) >= pe) {
      const x = oe, M = x * pe;
      return { x: (R - M) * 0.5, y: 0, w: M, h: x };
    }
    const Le = R, te = Le / pe;
    return { x: 0, y: (oe - te) * 0.5, w: Le, h: te };
  }
  function T(R) {
    return {
      lon: Math.atan2(R.x, R.z),
      lat: Math.asin(De(R.y, -1, 1))
    };
  }
  function y(R, oe = null) {
    const { lon: pe, lat: Ae } = T(R), Le = F();
    let te = Le.x + (pe / (2 * Math.PI) + 0.5) * Le.w;
    const Ce = Le.y + (0.5 - Ae / Math.PI) * Le.h;
    if (oe !== null) {
      for (; te - oe > Le.w / 2; ) te -= Le.w;
      for (; te - oe < -Le.w / 2; ) te += Le.w;
    }
    return { x: te, y: Ce, z: 1 };
  }
  function $(R) {
    const oe = p(R), pe = zo(
      Number(oe.yaw_deg || 0),
      Number(oe.pitch_deg || 0),
      Number(oe.rot_deg || oe.roll_deg || 0)
    ), Ae = Math.tan(De(Number(oe.hFOV_deg || 20), 0.1, 179) * 0.5 * Er), Le = Math.tan(De(Number(oe.vFOV_deg || 20), 0.1, 179) * 0.5 * Er);
    return {
      centerDir: pe.fwd,
      right: pe.right,
      up: pe.up,
      tanX: Ae,
      tanY: Le
    };
  }
  function z(R, oe, pe) {
    return bI(wm(wm(R.centerDir, xm(R.right, oe)), xm(R.up, pe)));
  }
  function ee(R) {
    const oe = $(R);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Ae, v: Le }) => z(oe, Ae * oe.tanX, Le * oe.tanY));
  }
  function ie(R, oe, pe) {
    const Ae = $(R), Le = (oe * 2 - 1) * Ae.tanX, te = (1 - pe * 2) * Ae.tanY;
    return z(Ae, Le, te);
  }
  function j(R) {
    const oe = t.width / Math.max(1, r.width), pe = t.height / Math.max(1, r.height);
    return { x: R.x * oe, y: R.y * pe, w: R.w * oe, h: R.h * pe };
  }
  function H(R, oe = null, pe = null, Ae = null) {
    if (n.mode === "frame") {
      const Le = oe || s();
      if (!Le) return [];
      const te = pe || l(Le);
      return me(R, Le, te);
    }
    return X(R, Ae);
  }
  function U(R, oe = null, pe = null, Ae = null, Le = null) {
    if (!R) return null;
    if (n.mode === "unwrap") {
      const Ce = X([R], Le);
      return Ce[0] ? { x: Ce[0].x, y: Ce[0].y, z: 1 } : null;
    }
    const te = Pe(R);
    return te ? d(te, oe, pe, Ae) : null;
  }
  function ae(R, oe) {
    if (!R || !oe) return null;
    const pe = Number(oe.x || 0), Ae = Number(oe.y || 0);
    return ie(R, pe, Ae);
  }
  function Pe(R) {
    if (!R) return null;
    const oe = (Number(R.u || 0) - 0.5) * (2 * Math.PI), pe = (0.5 - Number(R.v || 0)) * Math.PI, Ae = Math.cos(pe);
    return Ql(Ae * Math.sin(oe), Math.sin(pe), Ae * Math.cos(oe));
  }
  function we(R, oe) {
    if (!R || !oe) return null;
    const pe = $(R), Ae = du(oe, pe.centerDir);
    if (!Number.isFinite(Ae) || Ae <= 1e-6) return null;
    const Le = du(oe, pe.right) / Ae, te = du(oe, pe.up) / Ae;
    return {
      x: (Le / Math.max(1e-6, pe.tanX) + 1) * 0.5,
      y: (1 - te / Math.max(1e-6, pe.tanY)) * 0.5
    };
  }
  function he(R) {
    if (!Array.isArray(R) || R.length < 3) return [];
    if (n.mode === "unwrap") {
      const pe = F();
      return R.map((Ae) => ({
        x: pe.x + Number(Ae.u || 0) * pe.w,
        y: pe.y + Number(Ae.v || 0) * pe.h
      }));
    }
    const oe = R.map((pe) => P(Pe(pe))).filter(Boolean);
    return oe.every((pe) => Number(pe.z || 0) > 0) ? oe.map((pe) => ({ x: Number(pe.x || 0), y: Number(pe.y || 0) })) : [];
  }
  function X(R, oe = null) {
    if (!Array.isArray(R) || R.length < 1) return [];
    if (n.mode === "unwrap") {
      const Ae = F();
      return R.map((Le) => {
        const te = (Number(Le.u || 0) % 1 + 1) % 1, Ce = oe == null ? te : Number(oe || 0) + f(te, oe);
        return {
          x: Ae.x + Ce * Ae.w,
          y: Ae.y + Number(Le.v || 0) * Ae.h
        };
      });
    }
    const pe = R.map((Ae) => P(Pe(Ae))).filter(Boolean);
    return pe.every((Ae) => Number(Ae.z || 0) > 0) ? pe.map((Ae) => ({ x: Number(Ae.x || 0), y: Number(Ae.y || 0) })) : [];
  }
  function A(R, oe = 160) {
    if (!Array.isArray(R) || R.length < 3) return !1;
    for (let pe = 0; pe < R.length; pe += 1) {
      const Ae = R[pe], Le = R[(pe + 1) % R.length];
      if (!Ae || !Le || !Number.isFinite(Ae.x) || !Number.isFinite(Ae.y) || !Number.isFinite(Le.x) || !Number.isFinite(Le.y) || Math.hypot(Number(Le.x) - Number(Ae.x), Number(Le.y) - Number(Ae.y)) > oe) return !1;
    }
    return !0;
  }
  function L(R, oe, pe) {
    if (!Array.isArray(R) || R.length < 3 || !oe || !pe) return [];
    const Ae = [];
    for (const Le of R) {
      const te = Pe(Le), Ce = we(oe, te);
      if (!Ce) return [];
      Ae.push({
        x: Number(pe.x || 0) + Number(Ce.x || 0) * Number(pe.w || 0),
        y: Number(pe.y || 0) + Number(Ce.y || 0) * Number(pe.h || 0)
      });
    }
    return A(Ae, Math.max(80, Math.max(pe.w, pe.h) * 0.75)) ? Ae : [];
  }
  function me(R, oe, pe) {
    if (!Array.isArray(R) || R.length < 1 || !oe || !pe) return [];
    const Ae = [];
    for (const Le of R) {
      const te = Pe(Le), Ce = we(oe, te);
      Ce && Ae.push({
        x: Number(pe.x || 0) + Number(Ce.x || 0) * Number(pe.w || 0),
        y: Number(pe.y || 0) + Number(Ce.y || 0) * Number(pe.h || 0)
      });
    }
    return Ae;
  }
  function ge(R) {
    const oe = r.getBoundingClientRect();
    return {
      x: (R.clientX - oe.left) / oe.width * r.width,
      y: (R.clientY - oe.top) / oe.height * r.height
    };
  }
  function Ne(R) {
    const oe = r.getBoundingClientRect();
    return {
      x: Number(R.clientX) - Number(oe.left || 0),
      y: Number(R.clientY) - Number(oe.top || 0)
    };
  }
  function He(R, oe = performance.now()) {
    if (n.mode === "unwrap") {
      const te = F(), Ce = (R.x - te.x) / Math.max(1, te.w), x = (R.y - te.y) / Math.max(1, te.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (Ce % 1 + 1) % 1,
        v: De(x, 0, 1),
        t: Number(oe || 0)
      };
    }
    const pe = G(R.x, R.y), { lon: Ae, lat: Le } = T(pe);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: De(0.5 - Le / Math.PI, 0, 1),
      t: Number(oe || 0)
    };
  }
  function re(R, oe, pe = performance.now()) {
    const Ae = l(oe);
    if (!Ae) return null;
    const Le = {
      x: (Number(R.x) - Ae.x) / Math.max(1, Ae.w),
      y: (Number(R.y) - Ae.y) / Math.max(1, Ae.h)
    };
    if (Le.x < 0 || Le.x > 1 || Le.y < 0 || Le.y > 1) return null;
    const te = ae(oe, Le);
    if (!te) return null;
    const { lon: Ce, lat: x } = T(te);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Ce / (2 * Math.PI) + 0.5 + 1) % 1,
      v: De(0.5 - x / Math.PI, 0, 1),
      t: Number(pe || 0)
    };
  }
  return {
    connect(R) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: p,
        projectSceneItemDir: d,
        shortestWrappedDelta: f
      } = R);
    },
    isErpCamera: b,
    currentViewCamera: S,
    currentViewProjection: w,
    projectDir: P,
    screenToWorldDir: G,
    getUnwrapRect: F,
    projectDirUnwrap: y,
    getStickerFrame: $,
    stickerDirFromFrame: z,
    stickerCornersDir: ee,
    stickerSampleDir: ie,
    stickerCornerOrderSanity: v,
    projectEditorPoints: H,
    projectErpPointToEditor: U,
    frameLocalPointToWorldDir: ae,
    erpPointToWorldDir: Pe,
    worldDirToFrameLocalPoint: we,
    projectLassoPointsToCurrentView: he,
    projectErpLassoPointsToFrameRect: L,
    screenPos: ge,
    screenPosCss: Ne,
    screenPosToErpPoint: He,
    screenPosToFrameAsErpPoint: re,
    deviceRect: j
  };
}
function GI(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, p, d, f, h, b, v, S, w, P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L, me;
  function ge(te, Ce) {
    const x = String(te.actionGroupId || te.id || "").trim(), M = F(x, te.layerKind), K = s(x, te.layerKind, M), be = (K == null ? void 0 : K.centerUv) || G(x, te.layerKind, M), I = n.mode === "unwrap" ? Number((be == null ? void 0 : be.u) || 0) : null, Z = [], ne = n.mode === "frame" ? l() : null, C = ne ? f(ne) : null;
    for (const ce of M) {
      const xe = (ce == null ? void 0 : ce.geometry) || null, Ie = (xe == null ? void 0 : xe.geometryKind) === "lasso_fill" ? xe == null ? void 0 : xe.points : (xe == null ? void 0 : xe.processedPoints) || (xe == null ? void 0 : xe.rawPoints) || (xe == null ? void 0 : xe.points) || [], g = Pe(Ie, ne, C, I).filter((V) => Number.isFinite(V == null ? void 0 : V.x) && Number.isFinite(V == null ? void 0 : V.y));
      if (!g.length) continue;
      const u = p(String((ce == null ? void 0 : ce.toolKind) || "pen")), O = Cn[u] || Cn[jr];
      Z.push({
        points: g,
        closed: String((xe == null ? void 0 : xe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ce == null ? void 0 : ce.size) || 10) * Math.max(0.1, Number((O == null ? void 0 : O.sizeScale) ?? 1)) + 10),
        layerKind: String((ce == null ? void 0 : ce.layerKind) || te.layerKind || "paint")
      });
    }
    const B = we(be, null, ne, C, I);
    if (!B) {
      const ce = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(Ce, ce), ce;
    }
    const Q = d(K).map((ce) => we(ce, B.x, ne, C, I)).filter((ce) => Number.isFinite(ce == null ? void 0 : ce.x) && Number.isFinite(ce == null ? void 0 : ce.y)).map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) }));
    if (Q.length < 4) {
      const ce = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(Ce, ce), ce;
    }
    const ue = (ce, xe) => ({
      x: (Number((ce == null ? void 0 : ce.x) || 0) + Number((xe == null ? void 0 : xe.x) || 0)) * 0.5,
      y: (Number((ce == null ? void 0 : ce.y) || 0) + Number((xe == null ? void 0 : xe.y) || 0)) * 0.5,
      a: ce,
      b: xe
    }), de = ue(Q[0], Q[1]), J = ue(Q[1], Q[2]), fe = ue(Q[2], Q[3]), Ee = ue(Q[3], Q[0]), je = {
      kind: "strokeGroup",
      center: { x: Number(B.x || 0), y: Number(B.y || 0) },
      corners: Q,
      edgeMidpoints: [
        { edge: "top", ...de },
        { edge: "right", ...J },
        { edge: "bottom", ...fe },
        { edge: "left", ...Ee }
      ],
      rotateStemBase: { x: de.x, y: de.y },
      rotateHandle: { x: de.x, y: de.y - 30 },
      strokePaths: Z,
      visible: !0
    };
    return n._strokeGeomCache.set(Ce, je), je;
  }
  function Ne(te, Ce) {
    const x = n.mode === "frame" ? l() : null, M = x ? f(x) : null, K = h(te), be = n.mode === "unwrap" ? Number((K == null ? void 0 : K.u) || 0) : null, I = we(K, null, x, M, be), ne = v(te).map((Q) => we(Q, (I == null ? void 0 : I.x) ?? null, x, M, be)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y));
    if (!Array.isArray(ne) || ne.length < 4) {
      const Q = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(Ce, Q), Q;
    }
    const C = ne.slice(0, 4).map((Q) => ({ x: Number((Q == null ? void 0 : Q.x) || 0), y: Number((Q == null ? void 0 : Q.y) || 0) })), W = {
      kind: "rasterObject",
      center: {
        x: C.reduce((Q, ue) => Q + Number(ue.x || 0), 0) / C.length,
        y: C.reduce((Q, ue) => Q + Number(ue.y || 0), 0) / C.length
      },
      corners: C,
      visible: !0
    };
    return n._strokeGeomCache.set(Ce, W), W;
  }
  function He(te, Ce = null, x = null, M = null, K = {}) {
    if (n.mode === "frame") {
      const B = x || l(), W = M || f(B);
      if (!B || !W) return null;
      const Q = B ? me(B, te) : null;
      return Q ? {
        x: Number(W.x || 0) + Number(Q.x || 0) * Number(W.w || 0),
        y: Number(W.y || 0) + Number(Q.y || 0) * Number(W.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ae(te, Ce);
    const be = 1e-4, I = o().project(te, be);
    if (!Number.isFinite(I.z) || I.z <= be && !(K != null && K.clipBehind)) return null;
    const Z = r.width, ne = r.height, C = Math.max(Z, ne) * 2;
    return {
      x: De(I.x, -C, Z + C),
      y: De(I.y, -C, ne + C),
      z: Math.max(I.z, be),
      rawZ: I.z,
      clipped: I.z <= be
    };
  }
  function re(te, Ce = []) {
    if (n.mode !== "pano" || ee(te)) return 1;
    const x = Ce.map((M) => Number((M == null ? void 0 : M.rawZ) ?? (M == null ? void 0 : M.z))).filter((M) => Number.isFinite(M));
    return x.length ? gI(0.035, 0.2, Math.min(...x)) : 1;
  }
  function R(te) {
    if ($(te) && !he(te)) return { visible: !1 };
    const Ce = H(te), x = In(Number(Ce.yaw_deg || 0), Number(Ce.pitch_deg || 0)), M = n.mode === "frame" ? l() : null, K = M ? f(M) : null, be = n.mode === "pano" && (ee(te) || z(te)), I = be ? { clipBehind: !0 } : null, Z = He(x, null, M, K, I);
    if (!Z) return { visible: !1 };
    const ne = w(te), B = X(te).map((k) => He(k, Z.x, M, K, I)).filter((k) => Number.isFinite(k == null ? void 0 : k.x) && Number.isFinite(k == null ? void 0 : k.y));
    if (B.length < 4) return { visible: !1 };
    const W = A(ne, 0, ne.tanY), Q = A(ne, 0, ne.tanY + Math.max(ne.tanY * 0.43, 0.053)), ue = He(W, Z.x, M, K, I);
    if (!ue) return { visible: !1 };
    const de = He(Q, (ue == null ? void 0 : ue.x) ?? Z.x, M, K, I), J = ((de == null ? void 0 : de.x) ?? ue.x) - ue.x, fe = ((de == null ? void 0 : de.y) ?? ue.y) - ue.y, Ee = Math.hypot(J, fe) || 1, je = {
      x: ue.x + J / Ee * 30,
      y: ue.y + fe / Ee * 30
    }, ce = He(A(ne, 0, ne.tanY), Z.x, M, K, I), xe = He(A(ne, ne.tanX, 0), Z.x, M, K, I), Ie = He(A(ne, 0, -ne.tanY), Z.x, M, K, I), g = He(A(ne, -ne.tanX, 0), Z.x, M, K, I);
    if (!ce || !xe || !Ie || !g) return { visible: !1 };
    const u = [
      Z,
      ...B,
      ue,
      de,
      ce,
      xe,
      Ie,
      g
    ];
    if (be && !u.some((k) => Number((k == null ? void 0 : k.rawZ) ?? (k == null ? void 0 : k.z)) > 1e-4)) return { visible: !1 };
    const O = re(te, u), V = [
      {
        edge: "top",
        x: ce.x,
        y: ce.y,
        a: { x: B[0].x, y: B[0].y },
        b: { x: B[1].x, y: B[1].y }
      },
      {
        edge: "right",
        x: xe.x,
        y: xe.y,
        a: { x: B[1].x, y: B[1].y },
        b: { x: B[2].x, y: B[2].y }
      },
      {
        edge: "bottom",
        x: Ie.x,
        y: Ie.y,
        a: { x: B[2].x, y: B[2].y },
        b: { x: B[3].x, y: B[3].y }
      },
      {
        edge: "left",
        x: g.x,
        y: g.y,
        a: { x: B[3].x, y: B[3].y },
        b: { x: B[0].x, y: B[0].y }
      }
    ];
    return {
      center: { x: Z.x, y: Z.y },
      corners: B.map((k) => ({ x: k.x, y: k.y })),
      edgeMidpoints: V,
      rotateStemBase: { x: ue.x, y: ue.y },
      rotateHandle: je,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: O,
      visible: !0
    };
  }
  function oe(te) {
    if (t && z(te) && T()) return { visible: !1 };
    if (!j() && (ie(te) || y(te))) return { visible: !1 };
    if (ie(te)) {
      const K = String(te.actionGroupId || te.id || "").trim(), be = P(K, te.layerKind), I = n._strokeGeomCache.get(be);
      return I || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ge(te, be));
    }
    if (y(te)) {
      const K = b(te), be = n._strokeGeomCache.get(K);
      return be || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), Ne(te, K));
    }
    const Ce = S(te), x = n._strokeGeomCache.get(Ce);
    if (x) return x;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const M = R(te);
    return n._strokeGeomCache.set(Ce, M), M;
  }
  function pe(te, Ce, x, M = null) {
    const K = [];
    for (let be = 0; be <= x; be += 1) {
      const I = be / x;
      let Z = 0, ne = 0;
      Ce === 0 ? (Z = I, ne = 0) : Ce === 1 ? (Z = 1, ne = I) : Ce === 2 ? (Z = 1 - I, ne = 1) : (Z = 0, ne = 1 - I);
      const C = L(te, Z, ne), B = n.mode === "unwrap" ? ae(C, M) : U(C);
      B && K.push(B);
    }
    return K;
  }
  function Ae() {
    const te = [...Array.isArray(i.shots) ? i.shots : []], Ce = [...a()].sort((x, M) => Number(x.z_index || 0) - Number(M.z_index || 0));
    return [...te, ...Ce];
  }
  function Le() {
    const te = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((x, M) => Number(M.z_index || 0) - Number(x.z_index || 0)), ...te];
  }
  return {
    connect(te) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: p,
        getFrameCornersUv: d,
        getFrameViewRect: f,
        getRasterObjectCenterUv: h,
        getRasterObjectGeomCacheKey: b,
        getRasterObjectTransformedErpPoints: v,
        getSceneItemGeomCacheKey: S,
        getStickerFrame: w,
        getStrokeGeomCacheKey: P,
        getStrokeGroupCenterUv: G,
        getStrokeGroupStrokes: F,
        isFreeSpaceView: T,
        isRasterObjectItem: y,
        isSceneSticker: $,
        isShotItem: z,
        isStickerItem: ee,
        isStrokeGroupItem: ie,
        paintingShown: j,
        poseOf: H,
        projectDir: U,
        projectDirUnwrap: ae,
        projectEditorPoints: Pe,
        projectErpPointToEditor: we,
        sceneStickerShown: he,
        stickerCornersDir: X,
        stickerDirFromFrame: A,
        stickerSampleDir: L,
        worldDirToFrameLocalPoint: me
      } = te);
    },
    projectSceneItemDir: He,
    objectGeom: oe,
    sampleStickerEdge: pe,
    getCutoutSelectableItemsForDisplay: Ae,
    getCutoutSelectableItemsForHit: Le
  };
}
const Os = /* @__PURE__ */ new Map();
function WI(e) {
  const {
    api: t,
    cutoutV2: r,
    editor: n,
    node: i,
    rasterErpCanvasCache: o,
    rasterImageAlphaCache: a,
    rasterImageCache: s,
    state: l
  } = e;
  let p, d, f, h, b, v, S, w, P, G, F, T, y, $, z, ee, ie, j, H, U;
  function ae(I = n.interaction) {
    const Z = String((I == null ? void 0 : I.kind) || "");
    if (Z === "paint_stroke" || Z === "paint_lasso_fill" || Z === "move_stroke_group" || Z === "scale_stroke_group" || Z === "rotate_stroke_group" || Z === "move_raster_object" || Z === "scale_raster_object") return !0;
    if (Z === "move_multi") {
      const ne = Array.isArray(I == null ? void 0 : I.strokeSnapshots) && I.strokeSnapshots.length > 0, C = Array.isArray(I == null ? void 0 : I.rasterSnapshots) && I.rasterSnapshots.length > 0;
      return ne || C;
    }
    return !1;
  }
  function Pe() {
    var Z, ne, C, B;
    let I = null;
    try {
      const W = w(), Q = ((B = (C = (ne = (Z = n.paintEngine) == null ? void 0 : Z.getErpTarget) == null ? void 0 : ne.call(Z, W)) == null ? void 0 : C.displayPaint) == null ? void 0 : B.canvas) || null;
      Q && (I = {
        source: Q,
        revision: `${P()}:${we()}`
      });
    } catch {
      I = null;
    }
    return I;
  }
  function we() {
    var B, W, Q, ue, de, J, fe;
    const I = n.interaction, Z = String((I == null ? void 0 : I.kind) || "");
    if (!ae(I)) return "";
    if (Z === "paint_stroke" || Z === "paint_lasso_fill") {
      const Ee = ((B = I == null ? void 0 : I.stroke) == null ? void 0 : B.geometry) || null, je = String(((W = I == null ? void 0 : I.stroke) == null ? void 0 : W.layerKind) || ""), ce = ((Q = Ee == null ? void 0 : Ee.rawPoints) == null ? void 0 : Q.length) ?? ((ue = Ee == null ? void 0 : Ee.points) == null ? void 0 : ue.length) ?? 0, xe = String((I == null ? void 0 : I._livePreviewToken) || "");
      return `_${je || "paint"}_${Z}_live${xe}_${ce}_${n.livePaintInteractionRevision}`;
    }
    const ne = String(((de = I == null ? void 0 : I.item) == null ? void 0 : de.actionGroupId) || ""), C = String(((J = I == null ? void 0 : I.item) == null ? void 0 : J.rasterObjectId) || ((fe = I == null ? void 0 : I.item) == null ? void 0 : fe.id) || "");
    return `_${Z}_${ne || C || "active"}_${n.livePaintInteractionRevision}`;
  }
  function he(I, Z = null) {
    const ne = String((I == null ? void 0 : I.rasterDataUrl) || "").trim();
    if (!ne) return null;
    const C = s.get(ne);
    if (C)
      return C.complete || C.width || C.naturalWidth, C;
    const B = new Image();
    return B.onload = () => {
      typeof Z == "function" && Z();
    }, B.src = ne, s.set(ne, B), B;
  }
  function X(I) {
    const Z = String((I == null ? void 0 : I.rasterDataUrl) || "").trim();
    if (!Z) return null;
    const ne = a.get(Z);
    if (ne) return ne.ready ? ne : null;
    const C = he(I, () => {
      const fe = a.get(Z);
      fe && (fe.ready = !1), j({ localOnly: !0 });
    });
    if (!C || !(C.complete || C.width || C.naturalWidth)) return null;
    const B = Number(C.naturalWidth || C.width || 0), W = Number(C.naturalHeight || C.height || 0);
    if (B < 1 || W < 1) return null;
    const Q = vn({ label: "editor.image-pixels" });
    Q.width = B, Q.height = W;
    const ue = Q.getContext("2d", { willReadFrequently: !0 });
    if (!ue) return null;
    ue.clearRect(0, 0, B, W), ue.drawImage(C, 0, 0, B, W);
    const de = ue.getImageData(0, 0, B, W).data, J = { canvas: Q, width: B, height: W, alpha: de, ready: !0 };
    return a.set(Z, J), J;
  }
  function A(I, Z) {
    if (!I || !Z) return null;
    const ne = (I == null ? void 0 : I.bbox) || null;
    if (!ne) return null;
    const C = (I == null ? void 0 : I.transform) || {}, B = {
      u: (Number(ne.u0 || 0) + Number(ne.u1 || 0)) * 0.5,
      v: (Number(ne.v0 || 0) + Number(ne.v1 || 0)) * 0.5
    }, W = {
      u: ((Number(Z.u || 0) - Number(C.du || 0)) % 1 + 1) % 1,
      v: Number(Z.v || 0) - Number(C.dv || 0)
    }, Q = T(
      W,
      B,
      Number(C.scale || 1),
      Number(C.rot_deg || 0)
    ), ue = Number(ne.u1 || 0) - Number(ne.u0 || 0), de = Number(ne.v1 || 0) - Number(ne.v0 || 0);
    if (!(ue > 1e-6) || !(de > 1e-6)) return null;
    const J = U(Number(Q.u || 0), Number(ne.u0 || 0)) / ue, fe = (Number(Q.v || 0) - Number(ne.v0 || 0)) / de;
    if (J < 0 || J > 1 || fe < 0 || fe > 1) return 0;
    const Ee = X(I);
    if (!Ee) return null;
    const je = De(Math.floor(J * Ee.width), 0, Ee.width - 1), ce = De(Math.floor(fe * Ee.height), 0, Ee.height - 1);
    return Number(Ee.alpha[(ce * Ee.width + je) * 4 + 3] || 0);
  }
  function L(I, Z, ne, C = null) {
    if (!(Z != null && Z.visible) || !ai(ne, Z.corners)) return !1;
    const B = C || H(ne, performance.now()), W = A(I, B);
    return W === null ? !0 : W > 8;
  }
  function me() {
    var C, B, W, Q, ue, de, J, fe;
    const I = ((B = (C = n.paintEngine) == null ? void 0 : C.getErpTarget) == null ? void 0 : B.call(C, w(!1))) || null, Z = Math.max(1, Number(((W = I == null ? void 0 : I.descriptor) == null ? void 0 : W.width) || ((ue = (Q = I == null ? void 0 : I.displayPaint) == null ? void 0 : Q.canvas) == null ? void 0 : ue.width) || 2048)), ne = Math.max(1, Number(((de = I == null ? void 0 : I.descriptor) == null ? void 0 : de.height) || ((fe = (J = I == null ? void 0 : I.displayPaint) == null ? void 0 : J.canvas) == null ? void 0 : fe.height) || 1024));
    return { width: Z, height: ne };
  }
  function ge() {
    var ce, xe, Ie;
    const I = n.interaction;
    if ((I == null ? void 0 : I.kind) !== "paint_stroke") return null;
    const Z = (I == null ? void 0 : I.stroke) || null;
    if (!Z || String((Z == null ? void 0 : Z.layerKind) || "") !== "paint" || String((Z == null ? void 0 : Z.toolKind) || "") !== "eraser") return null;
    const ne = h(), C = `${we()}:${ne.width}:${ne.height}`;
    if (((ce = n._activePaintEraserPreviewInfo) == null ? void 0 : ce.cacheKey) === C)
      return n._activePaintEraserPreviewInfo.value || null;
    const B = pn(Z), W = (B == null ? void 0 : B.geometry) || null;
    if (W && String(W.geometryKind || "") !== "lasso_fill") {
      const g = Array.isArray(W.rawPoints) && W.rawPoints.length ? W.rawPoints : Array.isArray(W.points) ? W.points : [];
      W.processedPoints = z(g, B.targetSpace, !0);
    }
    const Q = d(ne.width, ne.height, { readback: !0 });
    if (!ee(Q, B, { w: ne.width, h: ne.height })) return null;
    const ue = ((Ie = (xe = Q.ctx) == null ? void 0 : xe.getImageData(0, 0, ne.width, ne.height)) == null ? void 0 : Ie.data) || null;
    if (!ue) return null;
    let de = ne.width, J = ne.height, fe = -1, Ee = -1;
    for (let g = 0; g < ne.height; g += 1)
      for (let u = 0; u < ne.width; u += 1)
        ue[(g * ne.width + u) * 4 + 3] <= 8 || (u < de && (de = u), g < J && (J = g), u > fe && (fe = u), g > Ee && (Ee = g));
    if (fe < de || Ee < J)
      return n._activePaintEraserPreviewInfo = { cacheKey: C, value: null }, null;
    const je = {
      surface: Q,
      bounds: { minX: de, minY: J, maxX: fe, maxY: Ee },
      key: `${C}:${de}:${J}:${fe}:${Ee}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: C, value: je }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), je;
  }
  function Ne() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function He(I, Z, ne) {
    var C, B;
    if (!I) return null;
    if (I.type === "rasterObject" && ((C = I.item) != null && C.bbox)) {
      const W = I.item.bbox, Q = ((B = I.item) == null ? void 0 : B.transform) || {}, ue = Number(W.u0 || 0) + Number(Q.du || 0), de = Number(W.u1 || 0) + Number(Q.du || 0), J = Number(W.v0 || 0) + Number(Q.dv || 0), fe = Number(W.v1 || 0) + Number(Q.dv || 0);
      return {
        minX: Math.floor((ue % 1 + 1) % 1 * Z),
        maxX: Math.ceil((de % 1 + 1) % 1 * Z),
        minY: Math.floor(De(J, 0, 1) * ne),
        maxY: Math.ceil(De(fe, 0, 1) * ne),
        wraps: de - ue >= 1 || ue < 0 || de > 1
      };
    }
    if (I.type === "strokeGroup") {
      const W = F(I.actionGroupId, "paint"), Q = f(I.actionGroupId, "paint", W);
      if (!Q) return null;
      const ue = Q.centerUv.u - Q.halfW, de = Q.centerUv.u + Q.halfW, J = Q.centerUv.v - Q.halfH, fe = Q.centerUv.v + Q.halfH;
      return {
        minX: Math.floor((ue % 1 + 1) % 1 * Z),
        maxX: Math.ceil((de % 1 + 1) % 1 * Z),
        minY: Math.floor(De(J, 0, 1) * ne),
        maxY: Math.ceil(De(fe, 0, 1) * ne),
        wraps: de - ue >= 1 || ue < 0 || de > 1
      };
    }
    return null;
  }
  function re(I, Z, ne) {
    if (!I || !Z) return !1;
    const C = (Q) => Q.wraps ? [
      { minX: 0, maxX: Q.maxX, minY: Q.minY, maxY: Q.maxY, wraps: !1 },
      { minX: Q.minX, maxX: ne - 1, minY: Q.minY, maxY: Q.maxY, wraps: !1 }
    ] : [Q], B = C(I), W = C(Z);
    return B.some((Q) => W.some((ue) => !(Q.maxX < ue.minX || ue.maxX < Q.minX || Q.maxY < ue.minY || ue.maxY < Q.minY)));
  }
  function R(I, Z, ne) {
    var k, q, ve, se, Ve, Te, N;
    if (!I || !Z || !((k = ne == null ? void 0 : ne.surface) != null && k.canvas) || Z.type !== "rasterObject") return I;
    const C = Number(I.width || ne.surface.canvas.width || 0), B = Number(I.height || ne.surface.canvas.height || 0);
    if (C < 1 || B < 1) return I;
    const W = He(Z, C, B);
    if (W && !re(W, ne.bounds, C)) return I;
    const Q = String(((q = Z.item) == null ? void 0 : q.id) || Z.id || ""), ue = ((ve = Z.item) == null ? void 0 : ve.transform) || {}, de = `${ne.key}:${Q}:${C}:${B}:${Number(ue.du || 0).toFixed(6)}:${Number(ue.dv || 0).toFixed(6)}:${Number(ue.rot_deg || 0).toFixed(3)}:${Number(ue.scale || 1).toFixed(4)}`, J = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (J.has(de)) return J.get(de);
    const fe = De(Math.floor(Number(((se = ne.bounds) == null ? void 0 : se.minX) || 0)), 0, Math.max(0, C - 1)), Ee = De(Math.floor(Number(((Ve = ne.bounds) == null ? void 0 : Ve.minY) || 0)), 0, Math.max(0, B - 1)), je = De(Math.ceil(Number(((Te = ne.bounds) == null ? void 0 : Te.maxX) || 0)), fe, Math.max(0, C - 1)), ce = De(Math.ceil(Number(((N = ne.bounds) == null ? void 0 : N.maxY) || 0)), Ee, Math.max(0, B - 1)), xe = Math.max(1, je - fe + 1), Ie = Math.max(1, ce - Ee + 1), g = d(C, B, { readback: !0 });
    g.ctx.clearRect(0, 0, C, B), g.ctx.drawImage(I, 0, 0);
    const u = g.ctx.getImageData(fe, Ee, xe, Ie);
    g.ctx.save(), g.ctx.globalCompositeOperation = "destination-out", g.ctx.drawImage(ne.surface.canvas, 0, 0), g.ctx.restore();
    const O = g.ctx.getImageData(fe, Ee, xe, Ie);
    let V = !1;
    for (let ye = 0; ye < xe * Ie; ye += 1) {
      const Fe = u.data[ye * 4 + 3], Re = O.data[ye * 4 + 3];
      if (Fe > Re) {
        V = !0;
        break;
      }
    }
    return V ? (J.size > 64 && J.clear(), J.set(de, g.canvas), g.canvas) : (J.set(de, I), I);
  }
  function oe(I, Z = null) {
    const ne = $((I == null ? void 0 : I.rasterObjectId) || (I == null ? void 0 : I.id) || ""), C = (I == null ? void 0 : I.bbox) || null;
    if (!ne || !C) return null;
    const B = he(I, Z);
    if (!B || !(B.complete || B.width || B.naturalWidth)) return null;
    const { width: W, height: Q } = me(), ue = (I == null ? void 0 : I.transform) || {}, de = [
      ne,
      W,
      Q,
      C.u0,
      C.v0,
      C.u1,
      C.v1,
      ue.du,
      ue.dv,
      ue.rot_deg,
      ue.scale,
      G()
    ].join(":"), J = o.get(de);
    if (J) return J;
    o.size > 64 && o.clear();
    const fe = vn({ label: "editor.raster-erp" });
    fe.width = W, fe.height = Q;
    const Ee = fe.getContext("2d");
    if (!Ee) return null;
    const je = Number(C.u0 || 0) * W, ce = Number(C.v0 || 0) * Q, xe = Math.max(1, (Number(C.u1 || 0) - Number(C.u0 || 0)) * W), Ie = Math.max(1, (Number(C.v1 || 0) - Number(C.v0 || 0)) * Q), g = je + xe * 0.5 + Number(ue.du || 0) * W, u = ce + Ie * 0.5 + Number(ue.dv || 0) * Q, O = Number(ue.rot_deg || 0) * Er, V = Math.max(0.01, Number(ue.scale || 1));
    for (const k of [-W, 0, W])
      Ee.save(), Ee.translate(g + k, u), Ee.rotate(O), Ee.scale(V, V), Ee.drawImage(B, -xe * 0.5, -Ie * 0.5, xe, Ie), Ee.restore();
    return o.set(de, fe), fe;
  }
  async function pe(I, Z) {
    const ne = await new Promise((ue) => I.toBlob(ue, "image/png")), C = new FormData();
    C.append("image", ne, Z), C.append("type", "input"), C.append("subfolder", "panorama_stickers"), C.append("overwrite", "1");
    const B = await t.fetchApi("/upload/image", { method: "POST", body: C });
    if (!B || B.status !== 200) throw new Error(`upload failed (${B == null ? void 0 : B.status})`);
    const W = await B.json(), Q = String((W == null ? void 0 : W.name) || "").trim();
    if (!Q) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: Q,
      subfolder: String((W == null ? void 0 : W.subfolder) || "panorama_stickers"),
      storage: String((W == null ? void 0 : W.type) || "input")
    };
  }
  let Ae = null, Le = !1;
  function te() {
    if (r) return !1;
    const I = km(l.painting), { width: Z, height: ne } = b();
    return kx(l.painting_layer, { paintCount: I.totalPaintCount, maskCount: I.totalMaskCount, width: Z, height: ne, nodeId: String(i.id ?? "0") });
  }
  function Ce() {
    const I = String(i.id ?? "0"), Z = Os.get(I);
    if (Le && Z) return Z;
    const ne = (async () => {
      var W, Q, ue, de, J, fe, Ee, je, ce, xe, Ie, g;
      const C = P(), B = km(l.painting);
      if (B.totalPaintCount <= 0 && B.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, Ae = C, p());
        return;
      }
      if (Ae !== C && !Le) {
        Le = !0;
        try {
          ie();
          const u = w(!1), O = ((Q = (W = n.paintEngine) == null ? void 0 : W.getErpTarget) == null ? void 0 : Q.call(W, u)) || null, V = ((ue = O == null ? void 0 : O.displayPaint) == null ? void 0 : ue.canvas) || null, k = ((de = O == null ? void 0 : O.committedMask) == null ? void 0 : de.canvas) || null, q = Math.max(1, Number(((J = O == null ? void 0 : O.descriptor) == null ? void 0 : J.width) || (V == null ? void 0 : V.width) || (k == null ? void 0 : k.width) || 2048)), ve = Math.max(1, Number(((fe = O == null ? void 0 : O.descriptor) == null ? void 0 : fe.height) || (V == null ? void 0 : V.height) || (k == null ? void 0 : k.height) || 1024));
          (!V && B.totalPaintCount > 0 || !k && B.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((Ee = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Ee.width) || 0) !== q || Number(((je = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : je.height) || 0) !== ve) && (n._paintLayerSyncBlankSurface = d(q, ve)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, q, ve));
          const se = V || B.totalPaintCount > 0 && ((ce = n._paintLayerSyncBlankSurface) == null ? void 0 : ce.canvas) || null, Ve = k || B.totalMaskCount > 0 && ((xe = n._paintLayerSyncBlankSurface) == null ? void 0 : xe.canvas) || null;
          if (!se && !Ve) return;
          let Te = null, N = null;
          const ye = [];
          if (B.totalPaintCount > 0) {
            Te = await pe(se, `pano_paint_${I}.png`);
            for (const Fe of u) {
              const Re = String(Fe || "").trim();
              if (!Re) continue;
              const Ue = ((g = (Ie = n.paintEngine) == null ? void 0 : Ie.getGroupDisplayCanvas) == null ? void 0 : g.call(Ie, Re)) || null;
              if (!Ue) continue;
              const qe = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), Be = await pe(Ue, `pano_group_${I}_${qe}.png`);
              Be && ye.push({
                id: Re,
                actionGroupId: Re,
                image: Be
              });
            }
          }
          B.totalMaskCount > 0 && (N = await pe(Ve, `pano_mask_${I}.png`)), C === P() && (l.painting_layer = {
            paint: Te,
            mask: N,
            groups: ye,
            revision: C
          }, Ae = C, p());
        } catch (u) {
          throw u;
        } finally {
          Le = !1;
        }
      }
    })();
    return Os.set(I, ne), ne.finally(() => {
      Os.get(I) === ne && Os.delete(I);
    }), ne;
  }
  function x(I) {
    var Q;
    const Z = ((Q = n.paintEngine) == null ? void 0 : Q.getMaskDisplayCanvas()) || null;
    if (!Z) return I;
    const ne = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, C = I.reduce((ue, de) => Math.max(ue, Number((de == null ? void 0 : de.zIndex) || 0)), -1), B = (Array.isArray(l.stickers) ? l.stickers : []).reduce((ue, de) => Math.max(ue, Number((de == null ? void 0 : de.z_index) || 0)), -1), W = Math.max(C, B);
    return I.push({
      id: "mask_display",
      source: Z,
      revision: ne,
      zIndex: W + 1,
      opacity: 1,
      visible: !0
    }), I;
  }
  function M() {
    var C, B;
    const I = S(!0), Z = ge(), ne = [];
    for (const W of I) {
      if ((W == null ? void 0 : W.type) === "strokeGroup") {
        const Q = String(W.actionGroupId || W.id || "");
        if (!Q) continue;
        const ue = ((B = (C = n.paintEngine) == null ? void 0 : C.getGroupDisplayCanvas) == null ? void 0 : B.call(C, Q)) || null;
        if (!ue) continue;
        ne.push({
          id: `paint_group:${Q}`,
          source: ue,
          revision: `${v()}:${Q}`,
          zIndex: Number((W == null ? void 0 : W.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((W == null ? void 0 : W.type) === "rasterObject") {
        const Q = W.item || null, ue = $((Q == null ? void 0 : Q.id) || W.id || "");
        if (!ue) continue;
        const de = oe(Q, () => j());
        if (!de) continue;
        const J = R(de, W, Z), fe = (Q == null ? void 0 : Q.transform) || {};
        ne.push({
          id: `raster:${ue}`,
          source: J,
          revision: [
            P(),
            (Z == null ? void 0 : Z.key) || "",
            ue,
            Number(fe.du || 0).toFixed(6),
            Number(fe.dv || 0).toFixed(6),
            Number(fe.rot_deg || 0).toFixed(3),
            Number(fe.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((W == null ? void 0 : W.z_index) || 0),
          opacity: 1,
          visible: (Q == null ? void 0 : Q.visible) !== !1
        });
      }
    }
    return x(ne);
  }
  function K() {
    return y() ? M().filter((I) => I.visible !== !1).map((I) => ({ id: I.id, media: I.source, revision: I.revision, opacity: I.opacity, zIndex: I.zIndex })) : [];
  }
  function be() {
    l.painting_layer !== null && (l.painting_layer = null), Ae = "";
  }
  return {
    connect(I) {
      ({
        commitState: p,
        createRasterSurface: d,
        ensureGroupFrame: f,
        getActivePaintTargetDescriptor: h,
        getDesiredPaintTargetDescriptor: b,
        getDisplayPaintRevisionKey: v,
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: w,
        getPaintingCompositeRevisionKey: P,
        getPaintingRevisionKey: G,
        getStrokeGroupStrokes: F,
        inverseTransformErpPointAround: T,
        paintingShown: y,
        parseRasterObjectSelectionId: $,
        processFreehandPoints: z,
        rasterizeStrokeToSurface: ee,
        rebuildPaintEngineIfNeeded: ie,
        requestDraw: j,
        screenPosToErpPoint: H,
        shortestWrappedDelta: U
      } = I);
    },
    getSharedLivePaintSurface: Pe,
    getLivePaintRevisionSuffix: we,
    isPaintCompositeInteraction: ae,
    hitRasterObjectAt: L,
    invalidateLivePaintPreviewCaches: Ne,
    buildRasterObjectEditCanvas: oe,
    needsPaintingLayerSync: te,
    syncPaintingLayerAsync: Ce,
    invalidatePaintingLayerState: be,
    buildEditorViewPaintLayers: K
  };
}
function KI(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(re) {
    return !re || typeof re != "object" ? { x: 0, y: 0 } : { x: Number((re == null ? void 0 : re.u) || 0), y: Number((re == null ? void 0 : re.v) || 0) };
  }
  function p(re, R, oe, pe = {}) {
    return { ...{
      ...re,
      t: Number((re == null ? void 0 : re.t) || 0),
      widthScale: h(re, "widthScale", 1),
      pressureLike: h(re, "pressureLike", 1)
    }, ...pe, u: R, v: oe };
  }
  function d(re, R = !1) {
    return R ? 12e-4 : 18e-4;
  }
  function f(re, R, oe = !1) {
    if (!Array.isArray(re) || !re.length) return [];
    const pe = String((R == null ? void 0 : R.kind) || "") === "ERP_GLOBAL", Ae = /* @__PURE__ */ new WeakMap();
    if (pe) {
      let C = null;
      re.forEach((B) => {
        const W = Number((B == null ? void 0 : B.u) || 0), Q = Number((B == null ? void 0 : B.v) || 0), ue = (W % 1 + 1) % 1, de = C == null ? ue : C + s(ue, (C % 1 + 1) % 1);
        Ae.set(B, { x: de, y: Q }), C = de;
      });
    }
    const Le = (C) => !C || typeof C != "object" ? { x: 0, y: 0 } : Ae.get(C) || l(C), te = (C, B, W, Q = {}) => {
      const ue = pe ? (Number(B) % 1 + 1) % 1 : Number(B), de = p(C, ue, W, Q);
      return Ae.set(de, { x: Number(B), y: Number(W) }), de;
    }, Ce = (C, B, W) => {
      const Q = Le(C), ue = Le(B);
      return te(C, Xn(Q.x, ue.x, W), Xn(Q.y, ue.y, W), {
        t: Xn(Number((C == null ? void 0 : C.t) || 0), Number((B == null ? void 0 : B.t) || 0), W),
        widthScale: Xn(h(C, "widthScale", 1), h(B, "widthScale", 1), W),
        pressureLike: Xn(h(C, "pressureLike", 1), h(B, "pressureLike", 1), W)
      });
    };
    if (re.length === 1) {
      const C = Le(re[0]);
      return [te(re[0], C.x, C.y)];
    }
    const x = d(R, oe), M = (C, B) => {
      const W = [0];
      for (let ce = 1; ce < C.length; ce += 1) {
        const xe = Le(C[ce - 1]), Ie = Le(C[ce]);
        W.push(W[ce - 1] + Math.hypot(Ie.x - xe.x, Ie.y - xe.y));
      }
      const Q = W[W.length - 1] || 0;
      if (Q <= 1e-8) {
        const ce = C[0], xe = Le(ce);
        return [te(ce, xe.x, xe.y)];
      }
      const ue = [];
      let de = 0;
      for (let ce = 0; ce <= Q + 1e-9; ce += B) {
        for (; de < W.length - 2 && W[de + 1] < ce; ) de += 1;
        const xe = W[de], Ie = W[de + 1], g = Math.max(1e-8, Ie - xe);
        ue.push(Ce(C[de], C[de + 1], De((ce - xe) / g, 0, 1)));
      }
      const J = C[C.length - 1], fe = Le(J), Ee = ue[ue.length - 1], je = Ee ? Le(Ee) : null;
      return (!je || Math.hypot(je.x - fe.x, je.y - fe.y) > B * 0.35) && ue.push(te(J, fe.x, fe.y)), ue;
    }, K = (C) => {
      if (!Array.isArray(C) || C.length < 3) return C ? C.slice() : [];
      const B = Le(C[0]), W = [te(C[0], B.x, B.y)];
      for (let de = 0; de < C.length - 1; de += 1) {
        const J = C[de], fe = C[de + 1], Ee = Le(J), je = Le(fe), ce = te(
          J,
          Ee.x * 0.75 + je.x * 0.25,
          Ee.y * 0.75 + je.y * 0.25,
          {
            t: Number(J.t || 0) * 0.75 + Number(fe.t || 0) * 0.25,
            widthScale: h(J, "widthScale", 1) * 0.75 + h(fe, "widthScale", 1) * 0.25,
            pressureLike: h(J, "pressureLike", 1) * 0.75 + h(fe, "pressureLike", 1) * 0.25
          }
        ), xe = te(
          J,
          Ee.x * 0.25 + je.x * 0.75,
          Ee.y * 0.25 + je.y * 0.75,
          {
            t: Number(J.t || 0) * 0.25 + Number(fe.t || 0) * 0.75,
            widthScale: h(J, "widthScale", 1) * 0.25 + h(fe, "widthScale", 1) * 0.75,
            pressureLike: h(J, "pressureLike", 1) * 0.25 + h(fe, "pressureLike", 1) * 0.75
          }
        );
        W.push(ce, xe);
      }
      const Q = C[C.length - 1], ue = Le(Q);
      return W.push(te(Q, ue.x, ue.y)), W;
    }, be = M(re, x);
    if (be.length < 3) return be;
    const I = oe ? 2 : 1;
    let Z = be.slice();
    for (let C = 0; C < I; C += 1) Z = K(Z);
    return M(Z, Math.max(x * 0.75, 55e-5));
  }
  function h(re, R, oe = 1) {
    const pe = Number(re == null ? void 0 : re[R]);
    return Number.isFinite(pe) ? Math.max(0, pe) : oe;
  }
  function b(re) {
    const R = Number(re == null ? void 0 : re.radiusValue);
    if (Number.isFinite(R) && R > 0) {
      const oe = String((re == null ? void 0 : re.radiusModel) || "").trim() || "erp_uv_norm";
      return oe === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((re == null ? void 0 : re.size) || 10) * 0.5 / 2048)
      } : {
        model: oe,
        value: R
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((re == null ? void 0 : re.size) || 10) * 0.5 / 2048)
    };
  }
  function v(re, R, oe = {}) {
    const pe = vn({ label: "editor.raster-surface" });
    pe.width = Math.max(1, Math.round(re)), pe.height = Math.max(1, Math.round(R));
    const Ae = pe.getContext("2d", oe.readback ? { willReadFrequently: !0 } : void 0);
    return Ae && (Ae.clearRect(0, 0, pe.width, pe.height), Ae.imageSmoothingEnabled = !0), { canvas: pe, ctx: Ae };
  }
  function S() {
    const re = j();
    return `${String(t.paintStrokeRevision)}:${re.width}x${re.height}`;
  }
  function w() {
    const re = j();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${re.width}x${re.height}`;
  }
  function P() {
    const re = i(), R = w();
    return re ? `${R}:${re}` : R;
  }
  function G() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function F() {
    t.paintCompositeRevision += 1;
  }
  function T() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function y() {
    var re, R;
    t.paintEngineRevisionKey = null, (R = (re = t.paintEngine) == null ? void 0 : re.rebuildCommitted) == null || R.call(re, n), t.paintEngineRevisionKey = S();
  }
  function $() {
    T(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function z({ rebuildPaintEngine: re = !1 } = {}) {
    o(), G(), $(), re && y();
  }
  function ee() {
    o(), F(), $();
  }
  function ie() {
    var pe;
    const re = j(), R = `${re.width}x${re.height}`;
    t.paintEngineDescriptorKey !== R && (t.paintEngine = Ad(re), t.paintEngineDescriptorKey = R, t.paintEngineRevisionKey = "");
    const oe = S();
    t.paintEngineRevisionKey !== oe && (t.paintEngineRevisionKey = oe, (pe = t.paintEngine) == null || pe.rebuildCommitted(n));
  }
  function j() {
    const re = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: re,
      height: Math.max(1, Math.round(re * 0.5))
    };
  }
  function H() {
    return j();
  }
  function U(re, R, oe, pe, Ae = null) {
    const Le = b(re), te = h(R, "widthScale", 1) * h(R, "pressureLike", 1);
    return Le.model === "erp_uv_norm" ? Math.max(0.5, Le.value * oe * te) : Le.model === "world_angle" ? Ae ? Math.max(0.5, Le.value / Math.max(1e-6, Number(Ae.hFOV_deg || 90) * Er) * oe * te) : Math.max(0.5, Le.value / (2 * Math.PI) * oe * te) : Math.max(0.5, Number((re == null ? void 0 : re.size) || 10) * 0.5 * te);
  }
  function ae(re, R, oe = {}) {
    const pe = String((R == null ? void 0 : R.layerKind) || "paint"), Ae = String((R == null ? void 0 : R.toolKind) || "pen"), Le = oe.preview === !0, te = Le ? 0.78 : 1;
    if (re.globalAlpha = Ae === "marker" ? 0.7 * te : 1, pe === "mask") {
      re.fillStyle = Le ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Ae === "eraser") {
      re.globalCompositeOperation = "destination-out", re.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const Ce = String((R == null ? void 0 : R.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (R == null ? void 0 : R.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = Le ? Math.max(0.28, Number(Ce.a ?? 1) * 0.88) : Math.max(0.12, Number(Ce.a ?? 1));
    re.fillStyle = `rgba(${Math.round(Number(Ce.r || 0) * 255)}, ${Math.round(Number(Ce.g || 0) * 255)}, ${Math.round(Number(Ce.b || 0) * 255)}, ${x})`;
  }
  function Pe(re, R, oe) {
    const pe = Math.max(0.5, Math.min(oe, Number((R == null ? void 0 : R.radiusPx) || 0.5)));
    !Number.isFinite(R == null ? void 0 : R.x) || !Number.isFinite(R == null ? void 0 : R.y) || !Number.isFinite(pe) || (re.beginPath(), re.arc(Number(R.x || 0), Number(R.y || 0), pe, 0, Math.PI * 2), re.fill());
  }
  function we(re, R, oe, pe, Ae = {}) {
    if (!re || !Array.isArray(R) || !R.length) return;
    const Le = Math.max(pe.w, pe.h) * 0.25;
    re.save(), ae(re, oe, Ae);
    const te = (Ce) => Pe(re, Ce, Le);
    if (R.length === 1) {
      te(R[0]), re.restore();
      return;
    }
    for (let Ce = 0; Ce < R.length - 1; Ce += 1) {
      const x = R[Ce], M = R[Ce + 1];
      if (!x || !M) continue;
      const K = Number(x.x || 0), be = Number(x.y || 0), I = Number(M.x || 0), Z = Number(M.y || 0), ne = Math.max(0.5, Math.min(Le, Number(x.radiusPx || 0.5))), C = Math.max(0.5, Math.min(Le, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(K) || !Number.isFinite(be) || !Number.isFinite(I) || !Number.isFinite(Z) || !Number.isFinite(ne) || !Number.isFinite(C)) continue;
      const B = I - K, W = Z - be, Q = Math.hypot(B, W);
      if (!Number.isFinite(Q) || Q < 1e-6) {
        te(x);
        continue;
      }
      if (Q > Math.max(pe.w, pe.h) * 0.5) continue;
      const ue = Math.max(0.5, Math.min(ne, C)), de = Math.max(0.35, Math.min(ue * 0.4, 2.25)), J = Math.max(1, Math.ceil(Q / de));
      for (let fe = 0; fe <= J; fe += 1) {
        const Ee = fe / J;
        te({
          x: Xn(K, I, Ee),
          y: Xn(be, Z, Ee),
          radiusPx: Xn(ne, C, Ee)
        });
      }
    }
    te(R[R.length - 1]), re.restore();
  }
  function he(re, R, oe, pe) {
    we(re, R, oe, pe, { preview: !1 });
  }
  function X(re, R, oe, pe, Ae) {
    var Ce, x, M, K;
    if (!re || !Array.isArray(R) || R.length < 3) return;
    const Le = "u", te = "v";
    if (re.save(), String((oe == null ? void 0 : oe.layerKind) || "") === "mask")
      re.fillStyle = "rgba(255,255,255,1)";
    else if (String((oe == null ? void 0 : oe.toolKind) || "") === "eraser")
      re.globalCompositeOperation = "destination-out", re.fillStyle = "rgba(0,0,0,1)";
    else {
      const be = (oe == null ? void 0 : oe.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      re.fillStyle = `rgba(${Math.round(Number(be.r || 0) * 255)}, ${Math.round(Number(be.g || 0) * 255)}, ${Math.round(Number(be.b || 0) * 255)}, ${Number(be.a ?? 1)})`;
    }
    re.beginPath(), re.moveTo(Number(((Ce = R[0]) == null ? void 0 : Ce[Le]) || 0) * pe.w, Number(((x = R[0]) == null ? void 0 : x[te]) || 0) * pe.h);
    for (let be = 1; be < R.length; be += 1)
      re.lineTo(Number(((M = R[be]) == null ? void 0 : M[Le]) || 0) * pe.w, Number(((K = R[be]) == null ? void 0 : K[te]) || 0) * pe.h);
    re.closePath(), re.fill(), re.restore();
  }
  function A(re) {
    const R = (re == null ? void 0 : re.geometry) || null;
    return R ? String(R.geometryKind || "") === "lasso_fill" ? Array.isArray(R.points) ? R.points : [] : Array.isArray(R.processedPoints) && R.processedPoints.length ? R.processedPoints : Array.isArray(R.rawPoints) && R.rawPoints.length ? R.rawPoints : Array.isArray(R.points) ? R.points : [] : [];
  }
  function L(re, R) {
    const oe = A(re);
    return !Array.isArray(oe) || !oe.length ? [] : oe.map((pe) => ({
      x: Number((pe == null ? void 0 : pe.u) || 0) * Number((R == null ? void 0 : R.w) || 1),
      y: Number((pe == null ? void 0 : pe.v) || 0) * Number((R == null ? void 0 : R.h) || 1),
      radiusPx: U(re, pe, Number((R == null ? void 0 : R.w) || 1), Number((R == null ? void 0 : R.h) || 1))
    }));
  }
  function me(re, R, oe = null) {
    var Ce, x, M, K;
    if (!(re != null && re.ctx) || !R) return !1;
    const pe = oe || { w: Number(((Ce = re.canvas) == null ? void 0 : Ce.width) || 0), h: Number(((x = re.canvas) == null ? void 0 : x.height) || 0) }, Ae = String((R == null ? void 0 : R.toolKind) || "") === "eraser" ? {
      ...R,
      layerKind: "mask",
      toolKind: String(((M = R == null ? void 0 : R.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : R;
    if (String(((K = R == null ? void 0 : R.geometry) == null ? void 0 : K.geometryKind) || "") === "lasso_fill")
      return X(re.ctx, A(Ae), Ae, pe), !0;
    const te = L(Ae, pe);
    return te.length ? (he(re.ctx, te, Ae, pe), !0) : !1;
  }
  function ge(re, R, oe, pe = 8) {
    const Ae = new Uint8Array(R * oe), Le = [], te = new Int32Array(R * oe), Ce = new Int32Array(R * oe);
    for (let x = 0; x < oe; x += 1)
      for (let M = 0; M < R; M += 1) {
        const K = x * R + M;
        if (Ae[K] || re[K] <= pe) continue;
        let be = 0, I = 0;
        te[I] = M, Ce[I] = x, I += 1, Ae[K] = 1;
        const Z = [];
        let ne = M, C = x, B = M, W = x;
        for (; be < I; ) {
          const Q = te[be], ue = Ce[be];
          be += 1, Z.push({ x: Q, y: ue }), Q < ne && (ne = Q), ue < C && (C = ue), Q > B && (B = Q), ue > W && (W = ue);
          const de = [
            [(Q - 1 + R) % R, ue],
            [(Q + 1) % R, ue],
            [Q, ue - 1],
            [Q, ue + 1]
          ];
          for (const [J, fe] of de) {
            if (fe < 0 || fe >= oe) continue;
            const Ee = fe * R + J;
            Ae[Ee] || re[Ee] <= pe || (Ae[Ee] = 1, te[I] = J, Ce[I] = fe, I += 1);
          }
        }
        Le.push({ pixels: Z, minX: ne, minY: C, maxX: B, maxY: W });
      }
    return Le;
  }
  function Ne(re, R) {
    const oe = [...new Set((Array.isArray(re == null ? void 0 : re.pixels) ? re.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, M) => x - M);
    if (!oe.length) return null;
    if (oe.length === 1)
      return { startX: oe[0], widthPx: 1 };
    let pe = -1, Ae = 0;
    for (let x = 0; x < oe.length; x += 1) {
      const M = oe[x], be = (x === oe.length - 1 ? oe[0] + R : oe[x + 1]) - M - 1;
      be > pe && (pe = be, Ae = x);
    }
    const Le = (oe[(Ae + 1) % oe.length] + R) % R;
    let te = 1 / 0, Ce = -1 / 0;
    for (const x of oe) {
      const M = (x - Le + R) % R;
      te = Math.min(te, M), Ce = Math.max(Ce, M);
    }
    return {
      startX: Le,
      widthPx: Math.max(1, Ce - te + 1)
    };
  }
  function He(re, R, oe = {}) {
    var M;
    const pe = Number((re == null ? void 0 : re.width) || 0), Ae = Number((re == null ? void 0 : re.height) || 0), Le = (M = re == null ? void 0 : re.getContext) == null ? void 0 : M.call(re, "2d");
    if (!Le || pe < 1 || Ae < 1) return [];
    const te = Le.getImageData(0, 0, pe, Ae), Ce = new Uint8Array(pe * Ae);
    for (let K = 0; K < Ce.length; K += 1) Ce[K] = te.data[K * 4 + 3];
    return ge(Ce, pe, Ae, 8).map((K, be) => {
      const I = Ne(K, pe);
      if (!I) return null;
      const Z = Number(I.widthPx || 0), ne = K.maxY - K.minY + 1, C = Number(I.startX || 0), B = vn({ label: "editor.lasso-fill" });
      B.width = Z, B.height = ne;
      const W = B.getContext("2d");
      if (!W) return null;
      const Q = W.createImageData(Z, ne);
      return K.pixels.forEach(({ x: ue, y: de }) => {
        const J = (de * pe + ue) * 4, fe = (Number(ue || 0) - C + pe) % pe, Ee = ((de - K.minY) * Z + fe) * 4;
        Q.data[Ee + 0] = te.data[J + 0], Q.data[Ee + 1] = te.data[J + 1], Q.data[Ee + 2] = te.data[J + 2], Q.data[Ee + 3] = te.data[J + 3];
      }), W.putImageData(Q, 0, 0), {
        id: vo("raster"),
        type: "raster_frozen",
        layerKind: R === "mask" ? "mask" : "paint",
        z_index: Number((oe == null ? void 0 : oe.z_index) || 0) + be * 1e-3,
        locked: (oe == null ? void 0 : oe.locked) === !0,
        bbox: {
          u0: 0,
          v0: K.minY / Ae,
          u1: Z / pe,
          v1: (K.maxY + 1) / Ae
        },
        rasterDataUrl: B.toDataURL("image/png"),
        transform: {
          du: C / pe,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(re) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = re);
    },
    processFreehandPoints: f,
    createRasterSurface: v,
    getPaintingRevisionKey: S,
    getPaintingCompositeRevisionKey: w,
    getDisplayPaintRevisionKey: P,
    refreshPaintEngineRevisionCache: y,
    markObjectVisualsDirty: $,
    markPaintStrokeVisualsDirty: z,
    markPaintCompositeVisualsDirty: ee,
    rebuildPaintEngineIfNeeded: ie,
    getDesiredPaintTargetDescriptor: j,
    getActivePaintTargetDescriptor: H,
    rasterizeStrokeToSurface: me,
    createRasterFrozenObjectsFromCanvas: He
  };
}
function BI(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, p, d, f, h, b;
  function v(ie, j = null) {
    var H;
    if (ie && typeof ie == "object" && !Array.isArray(ie)) return ie;
    if (Array.isArray(ie) && ie.length > 0) {
      const U = ie[0];
      if (U && typeof U == "object" && !Array.isArray(U)) return U;
    }
    if (Array.isArray(j) && j.length > 0) {
      const U = (H = j[0]) == null ? void 0 : H.parsed_state;
      if (U && typeof U == "object" && !Array.isArray(U))
        return {
          yaw_deg: Number(U.yaw_deg || 0),
          pitch_deg: Number(U.pitch_deg || 0),
          hFOV_deg: Number(U.hFOV_deg || 30),
          rot_deg: Number(U.roll_deg || 0)
        };
    }
    return null;
  }
  function S(ie, j, H) {
    const U = Math.max(1, Number(j || 1)), ae = Math.max(1, Number(H || 1)), Pe = De(Number(ie || 30), 0.1, 179) * Er, we = 2 * Math.atan(Math.tan(Pe * 0.5) * (ae / U));
    return De(we * Vi, 0.1, 179);
  }
  function w(ie) {
    const j = String(ie || "").trim();
    if (!j) return null;
    try {
      const H = JSON.parse(j);
      if (!H || typeof H != "object" || String(H.kind || "") !== "pano_sticker_state") return null;
      const U = H.version;
      let ae = null;
      if (typeof U == "number" && Number.isInteger(U) ? ae = U : typeof U == "string" && /^\d+$/.test(U) && (ae = Number.parseInt(U, 10)), ae !== 1) return null;
      const Pe = H.pose;
      if (!Pe || typeof Pe != "object") return null;
      const we = Number(Pe.yaw_deg), he = Number(Pe.pitch_deg), X = Number(Pe.roll_deg), A = Number(Pe.hFOV_deg);
      if (![we, he, X, A].every((Ne) => Number.isFinite(Ne))) return null;
      let L = ((we + 180) % 360 + 360) % 360 - 180;
      Object.is(L, -0) && (L = 0);
      const me = {
        yaw_deg: L,
        pitch_deg: De(he, -89.9, 89.9),
        roll_deg: X,
        hFOV_deg: De(A, 0.1, 179)
      }, ge = Number(H.source_aspect);
      return Number.isFinite(ge) && ge > 0 && (me.source_aspect = ge), me;
    } catch {
      return null;
    }
  }
  function P(ie) {
    const j = Number(ie == null ? void 0 : ie.yaw_deg), H = Number(ie == null ? void 0 : ie.pitch_deg), U = Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg)), ae = Number(ie == null ? void 0 : ie.hFOV_deg), Pe = Yi(ie);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(j) ? j : 0),
        pitch_deg: De(Number.isFinite(H) ? H : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(U) ? U : 0,
        hFOV_deg: De(Number.isFinite(ae) ? ae : 90, 0.1, 179)
      },
      source_aspect: Pe
    };
  }
  function G(ie) {
    var he;
    if (!ie || typeof ie != "object") return P(null);
    const j = Number(ie == null ? void 0 : ie.yaw_deg), H = Number(ie == null ? void 0 : ie.pitch_deg), U = Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg)), ae = Number(ie == null ? void 0 : ie.hFOV_deg), Pe = Number(ie == null ? void 0 : ie.vFOV_deg);
    let we = 1;
    if (Number.isFinite(ae) && Number.isFinite(Pe)) {
      const X = De(ae, 0.1, 179) * Er, A = De(Pe, 0.1, 179) * Er, L = Math.tan(A * 0.5);
      if (Math.abs(L) > 1e-6) {
        const me = Math.tan(X * 0.5) / L;
        Number.isFinite(me) && me > 0 && (we = me);
      }
    }
    if (ie != null && ie.asset_id && ((he = o == null ? void 0 : o.assets) != null && he[ie.asset_id])) {
      const X = o.assets[ie.asset_id], A = Number((X == null ? void 0 : X.w) || 0), L = Number((X == null ? void 0 : X.h) || 0);
      A > 0 && L > 0 && (we = A / L);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(j) ? j : 0),
        pitch_deg: De(Number.isFinite(H) ? H : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(U) ? U : 0,
        hFOV_deg: De(Number.isFinite(ae) ? ae : 30, 0.1, 179)
      },
      source_aspect: we
    };
  }
  function F(ie) {
    return t.linkedValue(n, ie);
  }
  function T(ie, j, H) {
    const U = ie && typeof ie == "object" ? {
      yaw_deg: Number(ie.yaw_deg || 0),
      pitch_deg: Number(ie.pitch_deg || 0),
      roll_deg: Number(ie.rot_deg ?? ie.roll_deg ?? 0),
      hFOV_deg: Number(ie.hFOV_deg || 30)
    } : w(j);
    if (U) {
      const we = Number((H == null ? void 0 : H.naturalWidth) || (H == null ? void 0 : H.width) || U.source_aspect || 1), he = Number((H == null ? void 0 : H.naturalHeight) || (H == null ? void 0 : H.height) || 1);
      return {
        yaw_deg: Number(U.yaw_deg || 0),
        pitch_deg: Number(U.pitch_deg || 0),
        hFOV_deg: Number(U.hFOV_deg || 30),
        vFOV_deg: S(U.hFOV_deg, we, he),
        rot_deg: Number(U.roll_deg || 0)
      };
    }
    const ae = Number((H == null ? void 0 : H.naturalWidth) || (H == null ? void 0 : H.width) || 1), Pe = Number((H == null ? void 0 : H.naturalHeight) || (H == null ? void 0 : H.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: S(30, ae, Pe),
      rot_deg: 0
    };
  }
  function y() {
    const ie = l(() => {
      qr(n, "image-loaded");
    }), j = un(n, "external-sticker") ? v(p("pano_sticker_input_pose"), null) : null;
    return ay(o, oy(n, { pose: j, image: ie }));
  }
  function $() {
    var he;
    const ie = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((X) => String((X == null ? void 0 : X.name) || "") === "sticker_image") : -1, j = ie >= 0 ? ((he = n.getInputLink(ie)) == null ? void 0 : he.id) ?? null : null, H = l(() => {
      qr(n, "image-loaded");
    }), U = v(p("pano_sticker_input_pose"), null), ae = F("sticker_state"), Pe = t.externalStateHash(n, ae), we = j == null ? null : T(U, ae, H);
    return iy(o, {
      connected: j != null,
      linkId: j,
      stateHash: Pe,
      pose: we,
      imageWidth: Number((H == null ? void 0 : H.naturalWidth) || (H == null ? void 0 : H.width) || 0),
      imageHeight: Number((H == null ? void 0 : H.naturalHeight) || (H == null ? void 0 : H.height) || 0)
    });
  }
  function z(ie = "sync") {
    if (a !== "stickers" || i) return;
    const j = n.__panoSceneStateV2 ? y() : $();
    if (j.changed) {
      const H = o.stickers.find(d);
      o.stickers = j.state.stickers, o.active = j.state.active, H && r.selectedId === H.id && !o.stickers.some((U) => U.id === H.id) && (r.selectedId = null, r.selectedIds = []), s(), b(), h();
    }
    f();
  }
  function ee() {
    const ie = Array.isArray(o.stickers) ? o.stickers : [], j = [];
    for (const H of ie)
      d(H) && (H.visible = !1, j.push(H));
    return j;
  }
  return {
    connect(ie) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: p,
        isExternalSticker: d,
        requestDraw: f,
        updateSelectionMenu: h,
        updateSidePanel: b
      } = ie);
    },
    computeStickerVFov: S,
    buildCanonicalCutoutStickerState: P,
    buildCanonicalSelectedStickerState: G,
    reconcileExternalStickerFromInputs: z,
    collectExternalStickersForClearAll: ee
  };
}
function UI(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: p,
    stateV2: d,
    studio: f,
    viewController: h
  } = e;
  let b, v, S, w, P, G, F, T, y, $ = null;
  function z(C, B = null) {
    const W = L();
    F(() => {
      i.viewTransition = IN(W, C, performance.now(), { scale: Ae(), end: B });
    }), !i.viewTransition && B && ee(B), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0, T(), P({ localOnly: !0, reason: wt.VIEW });
  }
  function ee(C) {
    X(Du({ ...he(), moved: C.moved }, C.mode, me())), s.backgroundDirty = !0;
  }
  function ie() {
    i.viewTransition && (i.viewTransition = null, T());
  }
  function j(C, B) {
    z({ ...L(), yaw_deg: C, pitch_deg: B });
  }
  function H() {
    return !f || Ne() && !w();
  }
  function U() {
    return i.mode === "pano" && ae();
  }
  function ae() {
    return d && Jx({ sceneLinked: l && !!Qd(a).scene, files: G(), stickers: p.stickers });
  }
  function Pe() {
    return i.spaceMode === "6dof" && U();
  }
  function we() {
    var C, B, W;
    return KM((W = (B = (C = t.ui) == null ? void 0 : C.settings) == null ? void 0 : B.getSettingValue) == null ? void 0 : W.call(B, xy));
  }
  function he() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function X(C) {
    i.spaceMode = C.mode, i.viewPosition = C.position, i.viewMoved = C.moved;
  }
  function A(C) {
    var W;
    const B = ON(i.spaceMode, i.viewTransition, C);
    if (B !== "keep") {
      if (B === "return") {
        z({ ...L(), position: me(), distance: ((W = oe()) == null ? void 0 : W.radius) || dr }, { mode: C, moved: !1 });
        return;
      }
      ie(), X(Du({ ...he(), position: L().position }, C, me())), s.backgroundDirty = !0, T(), P({ localOnly: !0, reason: wt.VIEW });
    }
  }
  function L() {
    var W;
    const C = i.viewMoved ? i.viewDistance : ((W = oe()) == null ? void 0 : W.radius) || dr, B = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: C };
    return Bx(i.spaceMode, B, me());
  }
  function me() {
    return Ne() ? R().position : [0, 0, 0];
  }
  function ge() {
    return r && p.camera !== null;
  }
  function Ne() {
    return ge() && (!f || p.camera.visible);
  }
  function He() {
    return p.painting_visible !== !1;
  }
  function re(C) {
    return C.visible && jo(C.clip, i.frame);
  }
  function R() {
    return Ld(p.camera, i.frame);
  }
  function oe() {
    var B;
    const C = b();
    return ((B = C.space ?? C.content) == null ? void 0 : B.sphere) ?? null;
  }
  function pe(C) {
    i.viewPosition = C.position, i.viewYaw = C.yaw_deg, i.viewPitch = C.pitch_deg, i.viewDistance = C.distance, i.viewMoved = !0, s.backgroundDirty = !0, P({ localOnly: !0, reason: wt.VIEW });
  }
  function Ae() {
    var C;
    return ((C = oe()) == null ? void 0 : C.radius) || dr;
  }
  function Le() {
    var fe;
    const C = b().space, B = v(), W = i.worldSelectedId || i.selectedId, Q = B.stickers.findIndex((Ee) => Ee.id === W), ue = Q < 0 ? null : {
      sticker: B.stickers[Q],
      value: Ul(B, i.frame).stickers[Q],
      plane: C.stickers.find((Ee) => Ee.id === W) ?? null,
      item: ((fe = C.sticker) == null ? void 0 : fe.id) === W && C.sticker.url ? { kind: C.sticker.kind, box: o.sceneBox(C.sticker.url) } : null
    }, de = S() ? I() : rk(oe(), ue);
    if (!de) return;
    const J = L();
    i.viewDistance = J.distance, i.viewMoved = !0, z(P0(J, de, n.width, n.height));
  }
  function te(C) {
    return o.pickSurface(ne(), C.x, C.y, n.width, n.height);
  }
  function Ce(C, B) {
    var W;
    return Lu(C, B, i.viewMoved ? null : (W = oe()) == null ? void 0 : W.center, Ae());
  }
  function x() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function M(C, B) {
    const W = performance.now(), Q = { x: C.x, y: C.y, time: W, key: o.contentRevision(), view: x() };
    if (!k0($, Q)) {
      const de = te(C);
      $ = { ...Q, cost: performance.now() - W, hit: de };
    }
    const ue = L();
    pe(M0(ue, Ce(ue, $.hit), B, Ae())), $.view = x(), $.wheelTime = W;
  }
  function K(C, B, W) {
    const Q = L();
    i.interaction = C === "orbit" ? { kind: "space_orbit", last: B, pivot: Ce(Q, te(B)) } : { kind: "space_pan", last: B, depth: x0(Q, Ae()) }, y(B), n.setPointerCapture(W);
  }
  function be(C) {
    return C * 0.2;
  }
  function I() {
    return { center: R().position, radius: be(Ae()) };
  }
  function Z(C, B) {
    const { yaw_deg: W, pitch_deg: Q } = I0(C.position, B);
    return { ...C, yaw_deg: W, pitch_deg: Q };
  }
  function ne() {
    return Xd(L(), n.width, n.height, oe());
  }
  return {
    connect(C) {
      ({
        editorViewInput: b,
        editorViewSceneState: v,
        isCameraSelected: S,
        isErpCamera: w,
        requestDraw: P,
        sceneFiles: G,
        startAnimation: F,
        syncFloatingViewButtonState: T,
        updateCursor: y
      } = C);
    },
    transitionView: z,
    applyViewTransitionEnd: ee,
    cancelViewTransition: ie,
    turnViewTo: j,
    cameraPreviewShown: H,
    isSpaceView: U,
    hasSpaceContent: ae,
    isFreeSpaceView: Pe,
    viewControls: we,
    spaceModeState: he,
    applySpaceMode: X,
    setSpaceMode: A,
    spaceViewState: L,
    spaceOrigin: me,
    hasCamera: ge,
    cameraShoots: Ne,
    paintingShown: He,
    sceneStickerShown: re,
    cutoutCamera: R,
    contentSphere: oe,
    setSpaceView: pe,
    spaceScale: Ae,
    frameSpaceContent: Le,
    zoomSpaceAt: M,
    startSpaceDrag: K,
    currentSpaceCamera: ne,
    cameraFrustumLength: be,
    cameraSphere: I,
    lookingAt: Z
  };
}
function YI(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: p,
    videoEl: d
  } = e;
  let f, h, b, v, S, w, P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L, me, ge, Ne, He, re, R, oe, pe = { revision: -1, sceneState: null }, Ae = null;
  function Le() {
    return Ae || (Ae = x()), Ae;
  }
  function te() {
    Ae = null;
  }
  function Ce() {
    return pe.sceneState;
  }
  function x() {
    const J = y(), fe = h(), Ee = { ...s.assets };
    for (const se of l ? [] : s.stickers) {
      const Ve = String((se == null ? void 0 : se.asset_id) || "");
      Ve && !Ee[Ve] && i.has(Ve) && (Ee[Ve] = { type: "comfy_image", filename: Ve });
    }
    const je = l ? s.stickers.map((se) => ae(se) ? { ...se, source: { kind: "file", filename: Ne(se) } } : se) : s.stickers;
    pe.revision !== a.stateRevision && (pe = { revision: a.stateRevision, sceneState: Cr({ ...s, stickers: je, assets: Ee, painting: null }) }), l && M(pe.sceneState);
    const ce = Ul(pe.sceneState, r.frame), xe = we ? F() : null, Ie = (se) => {
      if (l && !se.visible) return null;
      if (we && j(se)) return xe;
      const Ve = z(se);
      return Ve ? { media: Ve, revision: $(Ve) } : null;
    }, g = L0(pe.sceneState, r.frame, s.stickers, { media: Ie, paintLayers: fe, evaluated: ce }), u = J && (J === d || J === p) ? d.dataset.panoSrc : J, O = ie(J) ? { media: J, revision: $(J), coverage: En(s.coverage), source: u } : null, V = ee(), k = Ux(A(), V, L());
    k.mode !== r.spaceMode && S(), f(k);
    const q = V ? K(pe.sceneState, ce, Ie) : null, ve = U() ? { ...q, ...be(q) } : null;
    return { background: O, layers: g, space: ve, content: q };
  }
  function M(J) {
    const fe = new Map(s.stickers.map((Ee) => [Ee.id, Ee.clip]));
    J.scene.clip = { ...s.scene.clip };
    for (const Ee of J.stickers) {
      const je = fe.get(Ee.id);
      je && (Ee.clip = { ...je });
    }
  }
  function K(J, fe, Ee) {
    const je = he(), ce = C0(je, fe.scene), xe = ce != null && ce.url ? n.sceneBox(ce.url) : null, Ie = xe && $u(ce.kind, xe), g = ge(), u = Zx(g, J, fe), O = u != null && u.url ? n.sceneBox(u.url) : null, V = O ? [{ box: $u(u.kind, O), value: u.value }] : [], k = Sk(J, r.frame, s.stickers, { media: Ee, evaluated: fe }), q = ju(tk(fe, Ie, k, V));
    return {
      evaluated: fe,
      sceneUrls: je ? je.urls.filter(Boolean) : [],
      scene: ce,
      stickerUrls: Qx(g, J),
      sticker: u,
      stickers: k,
      sphere: q
    };
  }
  function be(J) {
    var Ee;
    const fe = ((Ee = J.sphere) == null ? void 0 : Ee.radius) || dr;
    return {
      gizmo: Z() ? B() : I(J.evaluated),
      grid: r.showGrid && !r.fullscreen ? hk(fe) : null,
      lines: v() ? C(fe) : []
    };
  }
  function I(J) {
    const fe = X(), Ee = J.stickers.find((je) => je.id === (fe == null ? void 0 : fe.id));
    return !oe(fe) || !(Ee != null && Ee.active) ? null : { mode: r.gizmoMode, transform: Ru(Ee) };
  }
  function Z() {
    return v() && r.selectedId === Jl;
  }
  let ne = { revision: -1, span: -1, segments: [] };
  function C(J) {
    const fe = re();
    (ne.revision !== a.stateRevision || ne.span !== fe) && (ne = { revision: a.stateRevision, span: fe, segments: gk(yk(s, fe)) });
    const { segments: Ee } = ne, je = Ee.length ? [{ segments: Ee, color: sI }] : [];
    if (!H()) return je;
    const ce = Z() ? Wy : aI;
    return [...je, { segments: E0(P(), b(J)), color: ce }];
  }
  function B() {
    return !H() || !Z() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Ru({ ...P(), scale: 1 }) };
  }
  function W() {
    const { background: J, layers: fe, space: Ee } = Le(), je = t.width, ce = t.height, xe = G({ x: 0, y: 0, w: je, h: ce });
    let Ie = !1;
    return !J && !fe.length && !Ee ? (n.clear(460551), Ie = n.ready) : (n.clear(), Ie = !!n.render({
      rect: xe,
      camera: Ee ? Xd(me(), je, ce, Ee.sphere) : w(),
      background: J,
      layers: fe,
      space: Ee
    })), He(), (r.worldSelectedId || Z() || Pe()) && R(), Ie;
  }
  function Q(J) {
    const { content: fe } = Le();
    return !fe || !J.position ? Aa(J) : N0(Aa(J), J.position, T(), fe.sphere);
  }
  function ue(J, fe, Ee, je = null) {
    const { background: ce, layers: xe, content: Ie } = Le();
    if (!ce && !xe.length && !Ie) return null;
    const g = Ie && fe.position ? Ie : null;
    return n.render({ rect: J, camera: Q(fe), background: ce, layers: xe, space: g, owner: Ee, clearColor: je });
  }
  function de(J) {
    return n.clear(460551), !!n.renderUnwrap({ rect: G(J), ...Le() });
  }
  return {
    connect(J) {
      ({
        applySpaceMode: f,
        buildEditorViewPaintLayers: h,
        cameraFrustumLength: b,
        cameraShoots: v,
        cancelViewTransition: S,
        currentViewCamera: w,
        cutoutCamera: P,
        deviceRect: G,
        followPortSticker: F,
        frameViewDistance: T,
        getConnectedErpImage: y,
        getMediaRevisionToken: $,
        getStickerImage: z,
        hasSpaceContent: ee,
        isDecodedImageReady: ie,
        isExternalSticker: j,
        isFreeSpaceView: H,
        isSpaceView: U,
        isUploadingSticker: ae,
        isWorldMenuShown: Pe,
        portVideo: we,
        sceneFiles: he,
        selectedWorldSticker: X,
        spaceModeState: A,
        spaceOrigin: L,
        spaceViewState: me,
        stickerFiles: ge,
        stickerImageKey: Ne,
        syncFloatingViewButtonState: He,
        timelineSpanFrames: re,
        updateSelectionMenu: R,
        worldStickerEditable: oe
      } = J);
    },
    editorViewInput: Le,
    endEditorViewFrame: te,
    editorViewSceneState: Ce,
    isCameraSelected: Z,
    renderEditorView: W,
    shotViewCamera: Q,
    drawEditorViewShot: ue,
    renderEditorViewUnwrap: de
  };
}
function qy(e, t = !1) {
  const r = De(Yi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function qI(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    runtime: o,
    shotEditor: a,
    studio: s,
    uiState: l
  } = e;
  let p, d, f, h, b = null;
  function v(T) {
    if (!n || !T) return !1;
    const y = n.closest(".pano-camera-preview");
    if (!y) return !1;
    const $ = Math.round(Number(y.clientWidth || n.clientWidth || 0)), z = Math.round(Number(y.clientHeight || n.clientHeight || 0));
    return Math.abs($ - Number(T.width || 0)) <= 1 && Math.abs(z - Number(T.height || 0)) <= 1;
  }
  function S(T, y) {
    if (i.outputPreviewRect = null, l.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), s && (l.outputPreviewToggle.visible = !1), !a || !l.cameraPreview) return;
    if (i.mode === "frame" || !p()) {
      l.cameraPreview.visible = !1, l.cameraPreview.settled = !1, b = null;
      return;
    }
    const $ = f();
    if (l.cameraPreview.visible = !0, l.cameraPreview.expanded = !!i.outputPreviewExpanded, !$ || !r) {
      l.cameraPreview.ready = !1, l.cameraPreview.settled = !1, l.cameraPreview.width = 220, l.cameraPreview.height = 132, l.cameraPreview.label = $ ? "Preview unavailable" : "Add Frame to preview", b = null;
      return;
    }
    const z = qy($, !!i.outputPreviewExpanded);
    l.cameraPreview.width = z.width, l.cameraPreview.height = z.height;
    const ee = window.devicePixelRatio || 1, ie = Math.max(1, z.width * ee), j = Math.max(1, z.height * ee), H = Math.min(1, t.width / ie, t.height / j), U = { width: Math.max(1, Math.floor(ie * H)), height: Math.max(1, Math.floor(j * H)) }, ae = [...y].some((he) => he !== wt.VIEW && he !== wt.OVERLAY), Pe = !b || b.width !== U.width || b.height !== U.height || ae;
    if (T && Pe) {
      const he = d({ x: 0, y: t.height - U.height, w: U.width, h: U.height }, $, "camera_preview");
      b = he ? U : null, he && F(he);
    }
    if (!b) {
      l.cameraPreview.ready = !1, l.cameraPreview.label = h() ? "Loading preview" : "Connect ERP image", l.cameraPreview.settled = !1;
      return;
    }
    const we = v(z);
    l.cameraPreview.ready = !0, l.cameraPreview.label = we ? "" : "Loading preview", l.cameraPreview.settled = we && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function w() {
    b = null;
  }
  let P = 0, G = !1;
  function F(T) {
    const y = ++P;
    createImageBitmap(T.canvas, T.x, T.y, T.width, T.height).then(($) => {
      var z;
      if (y !== P || !o.running) {
        $.close();
        return;
      }
      (z = r.getContext("bitmaprenderer")) == null || z.transferFromImageBitmap($);
    }).catch(($) => {
      G || (G = !0, console.error("[PanoramaStickers] camera preview frame failed", $));
    });
  }
  return {
    connect(T) {
      ({
        cameraPreviewShown: p,
        drawEditorViewShot: d,
        getActiveCutoutShot: f,
        getConnectedErpImage: h
      } = T);
    },
    drawCutoutOutputPreview: S,
    forgetCameraPreviewFrame: w
  };
}
function XI(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: p,
    type: d
  } = e;
  let f, h, b, v, S, w, P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L, me, ge, Ne, He, re, R, oe, pe, Ae, Le, te, Ce, x;
  function M(ce) {
    const xe = r.width, Ie = r.height, g = ee();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, xe, Ie), oe(), ce && (s.backgroundDirty = !Le(g)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let O = 0; O <= 16; O += 1) {
        const V = g.x + g.w * O / 16;
        n.beginPath(), n.moveTo(V, g.y), n.lineTo(V, g.y + g.h), n.stroke();
      }
      for (let O = 0; O <= 8; O += 1) {
        const V = g.y + g.h * O / 8;
        n.beginPath(), n.moveTo(g.x, V), n.lineTo(g.x + g.w, V), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(g.x, g.y + g.h / 2), n.lineTo(g.x + g.w, g.y + g.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const u = g.y + g.h * 0.57;
      n.fillText("Left", g.x + g.w * 0.25, u), n.fillText("Front", g.x + g.w * 0.5, u), n.fillText("Right", g.x + g.w * 0.75, u), n.fillText("Back", g.x + 38, u), n.fillText("Back", g.x + g.w - 38, u);
    }
  }
  function K(ce, xe, Ie = 1) {
    let g = !1;
    n.strokeStyle = xe, n.lineWidth = Ie, n.beginPath();
    for (const u of ce) {
      const O = Ne(u);
      if (!O) {
        g = !1;
        continue;
      }
      g ? n.lineTo(O.x, O.y) : (n.moveTo(O.x, O.y), g = !0);
    }
    n.stroke();
  }
  function be(ce) {
    const xe = r.width, Ie = r.height;
    if (n.clearRect(0, 0, xe, Ie), oe(), ce && (s.backgroundDirty = !Ae()), i.showGrid && !i.fullscreen && S().space)
      I();
    else if (i.showGrid && !i.fullscreen) {
      for (let u = -180; u <= 180; u += 15) {
        const O = [];
        for (let V = -89; V <= 89; V += 4) O.push(In(u, V));
        K(O, "#3f3f46", u % 90 === 0 ? 1.3 : 1);
      }
      for (let u = -75; u <= 75; u += 15) {
        const O = [];
        for (let V = -180; V <= 180; V += 4) O.push(In(V, u));
        K(O, u === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", u === 0 ? 1.5 : 1);
      }
      const g = [
        { name: "Left", dir: In(-90, 0) },
        { name: "Front", dir: In(0, 0) },
        { name: "Right", dir: In(90, 0) },
        { name: "Back", dir: In(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", g.forEach((u) => {
        const O = Ne(u.dir);
        O && n.fillText(u.name, O.x, O.y + 24);
      });
    }
  }
  function I() {
    const ce = Xd(x(), r.width, r.height, h()), xe = Ha(ce, [0, 0, 0], r.width, r.height);
    xe && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", xe.x, xe.y - 12));
  }
  function Z(ce, xe) {
    const Ie = ge(ce), g = In(Number(Ie.yaw_deg || 0), Number(Ie.pitch_deg || 0)), u = i.mode === "unwrap" ? He(g) : null, O = u ? u.x : null, V = i.mode === "pano" ? 28 : 20, k = [
      te(ce, 0, V, O),
      te(ce, 1, V, O),
      te(ce, 2, V, O),
      te(ce, 3, V, O)
    ];
    sf(n, k, { selected: xe });
  }
  function ne(ce, xe = []) {
    if (!(!ce || !Array.isArray(xe) || xe.length < 4)) {
      ce.beginPath(), ce.moveTo(xe[0].x, xe[0].y);
      for (let Ie = 1; Ie < 4; Ie += 1) ce.lineTo(xe[Ie].x, xe[Ie].y);
      ce.closePath();
    }
  }
  function C(ce, xe, Ie) {
    const g = Array.isArray(ce == null ? void 0 : ce.corners) ? ce.corners : [];
    if (g.length < 4) return;
    const u = De(Number((ce == null ? void 0 : ce.visibilityAlpha) ?? 1), 0, 1);
    if (u <= 0.01) return;
    const O = n.globalAlpha;
    n.globalAlpha = O * u;
    const V = Ie ? "rgba(255, 116, 116, 0.96)" : xe ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", k = Ie ? "rgba(255, 89, 89, 0.08)" : xe ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", q = xe ? 3.2 : 2.6;
    ne(n, g), n.fillStyle = k, n.fill(), n.strokeStyle = V, n.lineWidth = q, n.stroke(), n.save(), n.strokeStyle = V, n.lineWidth = xe ? 3.2 : 2.6, n.lineCap = "round";
    const ve = Array.isArray(ce == null ? void 0 : ce.edgeMidpoints) && ce.edgeMidpoints.length >= 4 ? ce.edgeMidpoints : [
      { edge: "top", x: (g[0].x + g[1].x) * 0.5, y: (g[0].y + g[1].y) * 0.5 },
      { edge: "right", x: (g[1].x + g[2].x) * 0.5, y: (g[1].y + g[2].y) * 0.5 },
      { edge: "bottom", x: (g[2].x + g[3].x) * 0.5, y: (g[2].y + g[3].y) * 0.5 },
      { edge: "left", x: (g[3].x + g[0].x) * 0.5, y: (g[3].y + g[0].y) * 0.5 }
    ], se = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ve = xe ? 12 : 9;
    ve.forEach((Te) => {
      const ye = ve.find((qe) => (qe == null ? void 0 : qe.edge) === se[Te == null ? void 0 : Te.edge]) || {
        x: (g[0].x + g[1].x + g[2].x + g[3].x) * 0.25,
        y: (g[0].y + g[1].y + g[2].y + g[3].y) * 0.25
      }, Fe = ye.x - Te.x, Re = ye.y - Te.y, Ue = Math.hypot(Fe, Re) || 1;
      n.beginPath(), n.moveTo(Te.x, Te.y), n.lineTo(Te.x + Fe / Ue * Ve, Te.y + Re / Ue * Ve), n.stroke();
    }), n.restore(), n.globalAlpha = O;
  }
  function B(ce, xe, Ie, g) {
    const u = De(Number((xe == null ? void 0 : xe.visibilityAlpha) ?? 1), 0, 1);
    if (u <= 0.01) return;
    if (X(ce)) {
      C(xe, Ie, g);
      return;
    }
    if (A(ce)) {
      const V = n.globalAlpha;
      n.globalAlpha = V * z(ce) * u, i.mode === "frame" ? (n.strokeStyle = Ie ? "rgba(250, 250, 250, 0.9)" : g ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = Ie ? 2 : 1, ne(n, xe.corners), n.stroke()) : Z(ce, Ie), n.globalAlpha = V;
      return;
    }
    const O = n.globalAlpha;
    n.globalAlpha = O * u, n.fillStyle = Ie ? "rgba(0, 112, 243, 0.24)" : g ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ne(n, xe.corners), n.fill(), n.strokeStyle = Ie ? "rgba(255, 255, 255, 1)" : g ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = Ie ? 2.8 : 1.9, ne(n, xe.corners), n.stroke(), n.globalAlpha = O;
  }
  function W(ce, xe, Ie) {
    if (A(ce)) {
      Sy(n, xe, { accent: Ie });
      return;
    }
    const g = !(X(ce) && j());
    n.fillStyle = Ie, g && xe.corners.forEach((u) => {
      n.beginPath(), n.arc(u.x, u.y, 6.5, 0, Math.PI * 2), n.fill();
    }), g && X(ce) && (n.strokeStyle = Ie, n.lineCap = "round", n.lineWidth = 4, xe.edgeMidpoints.forEach((u) => {
      var Ve, Te, N, ye;
      const O = (((Ve = u.b) == null ? void 0 : Ve.x) ?? u.x) - (((Te = u.a) == null ? void 0 : Te.x) ?? u.x), V = (((N = u.b) == null ? void 0 : N.y) ?? u.y) - (((ye = u.a) == null ? void 0 : ye.y) ?? u.y), k = Math.hypot(O, V) || 1, q = O / k, ve = V / k, se = 10;
      n.beginPath(), n.moveTo(u.x - q * se, u.y - ve * se), n.lineTo(u.x + q * se, u.y + ve * se), n.stroke();
    }), n.lineCap = "butt"), L(ce) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(xe.rotateStemBase.x, xe.rotateStemBase.y), n.lineTo(xe.rotateHandle.x, xe.rotateHandle.y), n.stroke(), n.fillStyle = Ie, n.beginPath(), n.arc(xe.rotateHandle.x, xe.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function Q() {
    var O;
    const ce = i.mode === "frame" ? [] : $(), xe = ce.length > 1, Ie = l ? P() : T(), g = Ie.map((V) => `${String((V == null ? void 0 : V.id) || "")}:${X(V) ? "frame" : Number((V == null ? void 0 : V.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== Ie || i._sortedItemsCache.orderKey !== g) && (i._sortedItemsCache = {
      src: Ie,
      orderKey: g,
      sorted: [...Ie]
    });
    const u = i._sortedItemsCache.sorted;
    for (const V of u) {
      const k = i.mode !== "frame" && !xe && Pe(V);
      if (i.mode === "frame" && !k) continue;
      const q = A(V), ve = X(V), se = ae(V);
      if (!q && !ve || he(V) && !Ce(V)) continue;
      const Ve = me(V);
      if (d !== "stickers" && !Ve.visible)
        continue;
      const Te = De(Number((Ve == null ? void 0 : Ve.visibilityAlpha) ?? 1), 0, 1);
      if (Te <= 0.01) continue;
      const N = ve && l && i.mode === "pano" ? De(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= N, B(V, Ve, k, se), k && Ve.visible) {
        const ye = se ? "#ff4d4f" : q && H(V) ? "#f59e0b" : "#0070f3", Fe = n.globalAlpha;
        n.globalAlpha = Fe * Te, W(V, Ve, ye), n.globalAlpha = Fe;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !w() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const V = i.cutoutPanoFrameVisual, k = De(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= k, C(V.geom, V.selected, V.locked), V.selected && W(
        V.item,
        V.geom,
        V.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (xe) {
      const V = y(ce);
      if (V != null && V.visible) {
        const k = f(ce) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(V.corners[0].x, V.corners[0].y);
        for (let q = 1; q < V.corners.length; q += 1) n.lineTo(V.corners[q].x, V.corners[q].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = k, V.corners.forEach((q) => {
          n.beginPath(), n.arc(q.x, q.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      ce.forEach((V) => {
        if (!L(V) && !we(V)) return;
        const k = me(V);
        if (!(k != null && k.visible)) return;
        const q = ae(V) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(k.corners[0].x, k.corners[0].y);
        for (let ve = 1; ve < k.corners.length; ve += 1) n.lineTo(k.corners[ve].x, k.corners[ve].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = q, k.corners.forEach((ve) => {
          n.beginPath(), n.arc(ve.x, ve.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((O = i.interaction) == null ? void 0 : O.kind) === "marquee_select") {
      const V = pe(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(V.x0, V.y0, V.x1 - V.x0, V.y1 - V.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function ue(ce) {
    const xe = w(), Ie = G(xe);
    if (!xe || !Ie)
      return n.clearRect(0, 0, r.width, r.height), ce && o.clear(657930), !1;
    const g = { x: Ie.x, y: Ie.y, w: Ie.w, h: Ie.h }, { rect: u, shot: O } = T0(xe, Ie, { width: r.width, height: r.height }), V = de(g);
    if (n.clearRect(0, 0, r.width, r.height), ce) {
      o.clear(657930);
      const k = b(u), q = !!v(k, O, void 0, 657930);
      q || o.clear(1118481, k), s.backgroundDirty = !q;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(g.x, g.y, g.w, g.h, V), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Wy, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(g.x + 1, g.y + 1, g.w - 2, g.h - 2, Math.max(0, V - 1)), n.stroke(), n.restore(), !0;
  }
  function de(ce) {
    const xe = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * xe, Number((ce == null ? void 0 : ce.w) || 0) * 0.5, Number((ce == null ? void 0 : ce.h) || 0) * 0.5);
  }
  function J() {
    var q, ve;
    if (((q = i.interaction) == null ? void 0 : q.kind) !== "paint_lasso_fill") return;
    const ce = i.interaction.stroke, xe = (ve = ce == null ? void 0 : ce.geometry) == null ? void 0 : ve.points;
    let Ie;
    if (i.mode === "frame") {
      const se = w(), Ve = F(se);
      Ie = re(xe, se, Ve);
    } else
      Ie = R(xe);
    if (!Array.isArray(Ie) || Ie.length < 3) return;
    const g = String((ce == null ? void 0 : ce.layerKind) || "") === "mask", u = (ce == null ? void 0 : ce.color) || { r: 1, g: 0.25, b: 0.25 }, O = Math.round(Number(u.r || 0) * 255), V = Math.round(Number(u.g || 0) * 255), k = Math.round(Number(u.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(Ie[0].x || 0), Number(Ie[0].y || 0));
    for (let se = 1; se < Ie.length; se++) n.lineTo(Number(Ie[se].x || 0), Number(Ie[se].y || 0));
    n.closePath(), g ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${O},${V},${k},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function fe() {
    const ce = i.frameRollOverlayVisual, xe = De(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(ce != null && ce.shot) || xe <= 1e-4) return;
    const Ie = F(ce.shot);
    if (!Ie) return;
    const g = { x: Ie.x + Ie.w * 0.5, y: Ie.y + Ie.h * 0.5 }, u = Number(ce.shot.roll_deg ?? ce.shot.rot_deg ?? 0) * Er, O = Math.hypot(Ie.w, Ie.h) * 0.55, V = Math.cos(u) * O, k = Math.sin(u) * O;
    n.save(), n.globalAlpha *= xe, n.beginPath(), n.rect(Ie.x, Ie.y, Ie.w, Ie.h), n.clip(), n.translate(g.x, g.y), n.rotate(u);
    const q = Math.max(12, Math.min(Ie.w, Ie.h) / 6);
    n.beginPath();
    for (let ve = -O; ve <= O; ve += q)
      n.moveTo(ve, -O), n.lineTo(ve, O);
    for (let ve = -O; ve <= O; ve += q)
      n.moveTo(-O, ve), n.lineTo(O, ve);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(g.x - V, g.y - k), n.lineTo(g.x + V, g.y + k), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Ee() {
    return !l || !w() || t && U() || p && !ie() ? 0 : uI;
  }
  function je() {
    const ce = De(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (ce <= 1e-4 || !l || i.mode !== "pano") return;
    const xe = w(), Ie = xe ? me(xe) : null, g = Array.isArray(Ie == null ? void 0 : Ie.corners) && Ie.corners.length >= 4 ? Ie.corners.map((V) => ({ x: Number(V.x || 0), y: Number(V.y || 0) })) : null;
    Ie != null && Ie.visible && g && (i.cutoutPanoDimCorners = g), xe && (Ie != null && Ie.visible) && g && (i.cutoutPanoFrameVisual = {
      item: xe,
      geom: Ie,
      selected: Pe(xe),
      locked: ae(xe)
    });
    const u = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, O = Ie != null && Ie.visible ? g : u ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${ce})`, n.beginPath(), n.rect(0, 0, r.width, r.height), O.length >= 4) {
      n.moveTo(O[0].x, O[0].y);
      for (let V = 1; V < 4; V += 1) n.lineTo(O[V].x, O[V].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(ce) {
      ({
        areAllSelectedItemsLocked: f,
        contentSphere: h,
        deviceRect: b,
        drawEditorViewShot: v,
        editorViewInput: S,
        getActiveCutoutShot: w,
        getCutoutSelectableItemsForDisplay: P,
        getFrameViewLayout: G,
        getFrameViewRect: F,
        getList: T,
        getMultiSelectionGeom: y,
        getSelectedItems: $,
        getStickerDisplayAlpha: z,
        getUnwrapRect: ee,
        isCameraSelected: ie,
        isErpCamera: j,
        isExternalSticker: H,
        isFreeSpaceView: U,
        isItemLocked: ae,
        isItemSelected: Pe,
        isRasterObjectItem: we,
        isSceneSticker: he,
        isShotItem: X,
        isStickerItem: A,
        isStrokeGroupItem: L,
        objectGeom: me,
        poseOf: ge,
        projectDir: Ne,
        projectDirUnwrap: He,
        projectErpLassoPointsToFrameRect: re,
        projectLassoPointsToCurrentView: R,
        rebuildPaintEngineIfNeeded: oe,
        rectFromPoints: pe,
        renderEditorView: Ae,
        renderEditorViewUnwrap: Le,
        sampleStickerEdge: te,
        sceneStickerShown: Ce,
        spaceViewState: x
      } = ce);
    },
    drawGridUnwrap: M,
    drawGridPano: be,
    drawObjects: Q,
    drawFrameViewBackground: ue,
    drawLassoOutlineOverlay: J,
    drawFrameRollOverlay: fe,
    getCutoutPanoDimTarget: Ee,
    drawCutoutPanoPassepartout: je
  };
}
function JI(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: p,
    shotEditor: d,
    stageWrap: f,
    state: h,
    timeline: b,
    type: v,
    uiState: S,
    viewController: w
  } = e;
  let P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L, me, ge, Ne, He, re, R = () => {
  };
  function oe(de = /* @__PURE__ */ new Set()) {
    j();
    const J = l.backgroundDirty;
    d && (A(), G(J, de)), i.mode === "frame" ? (l.frameSafeRect = he(), y(J)) : i.mode === "unwrap" ? z(J) : $(J), F(), ie(), ge(), ee(), T(), S.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && re(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && S.cameraPreview && (S.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const fe = Pe();
    S.stageStatus = fe.status, S.stageStatusDetail = fe.detail, fe.status === lr ? (f == null || f.removeAttribute("data-stage-ready"), f == null || f.setAttribute("data-stage-loading-kind", fe.detail)) : (f == null || f.setAttribute("data-stage-ready", ""), f == null || f.removeAttribute("data-stage-loading-kind"));
  }
  function pe(de = i.interaction) {
    if (v !== "stickers" || i.mode !== "pano") return !1;
    const J = String((de == null ? void 0 : de.kind) || "");
    return J === "move" || J === "scale" || J === "scale_x" || J === "scale_y" || J === "rotate" ? !0 : J === "move_multi" ? Array.isArray(de == null ? void 0 : de.stickerSnapshots) && de.stickerSnapshots.length > 0 : !1;
  }
  function Ae() {
    return !!i.interaction || !!b.drag;
  }
  function Le() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = h, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = ae();
  }
  function te(de = {}) {
    var g, u, O, V, k, q, ve, se;
    const J = de.reason ?? wt.STATE, fe = !!de.localOnly, Ee = de.externalSync === !0, je = String(de.cause || ""), ce = String(((g = i.interaction) == null ? void 0 : g.kind) || "");
    (!fe || ce === "view" || ce === "pan_frame" || pe() || !!i.viewTransition || je === "mode" || je === "frame_view" || je === "cutout_frame") && (l.backgroundDirty = !0), fe && we() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!fe || je === "selection" || je === "mode" || je === "cutout_frame") && (Ne(), He()), Ae() ? l.nodePreviewPending = !0 : Le(), Ee && ((O = (u = a.__panoDomPreview) == null ? void 0 : u.requestDraw) == null || O.call(u), (V = a.setDirtyCanvas) == null || V.call(a, !0, !1)), Ee && !fe && ((q = (k = a.graph) == null ? void 0 : k.setDirtyCanvas) == null || q.call(k, !0, !0), (se = (ve = t == null ? void 0 : t.canvas) == null ? void 0 : ve.setDirty) == null || se.call(ve, !0, !0)), p.requestDraw(J);
  }
  function Ce() {
    const de = n.getBoundingClientRect(), J = Math.max(2, Math.round(de.width)), fe = Math.max(2, Math.round(de.height)), Ee = window.devicePixelRatio || 1, je = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== J || n.height !== fe) && (n.width = J, n.height = fe);
    const ce = bk(de.width || J, de.height || fe, Ee, window.innerWidth || de.width, window.innerHeight || de.height);
    return o.resize(ce.width, ce.height), [n.width, n.height, r.width, r.height].join("x") === je ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && x(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function x(de) {
    de(), p.wake();
  }
  function M() {
    return !!i.viewTransition || !!w.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || Ae();
  }
  function K(de = performance.now(), J = /* @__PURE__ */ new Set()) {
    var xe;
    l.nodePreviewPending && !Ae() && Le(), J.forEach((Ie) => l.reasons.add(Ie)), J.size && (l.dirty = !0), [...J].some((Ie) => Ie !== wt.OVERLAY) && (l.backgroundDirty = !0), L(), l.lastTickTs > 0 ? Math.max(1e-3, (de - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = de;
    const fe = i.mode === "frame" && ((xe = i.interaction) == null ? void 0 : xe.kind) === "roll_frame" ? i.interaction : null;
    fe != null && fe.shot && (i.frameRollOverlayVisual = { shot: fe.shot });
    const Ee = fe ? 1 : 0;
    if (Math.abs(Ee - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Ee, i.frameRollOverlayStartTs = de), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Ee) > 1e-6) {
      const Ie = De(
        (de - Number(i.frameRollOverlayStartTs || de)) / dI,
        0,
        1
      );
      i.frameRollOverlayAlpha = Xn(
        Number(i.frameRollOverlayFrom || 0),
        Ee,
        uu(Ie)
      ), Ie >= 1 && (i.frameRollOverlayAlpha = Ee, Ee === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const je = U();
    if (Math.abs(je - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = je, i.cutoutPanoDimStartTs = de), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - je) > 1e-6) {
      const Ie = De(
        (de - Number(i.cutoutPanoDimStartTs || de)) / Sm,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Xn(
        Number(i.cutoutPanoDimFrom || 0),
        je,
        uu(Ie)
      ), Ie >= 1 && (i.cutoutPanoDimAlpha = je), Ie >= 1 && je === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ce = d && H() ? 1 : 0;
    if (Math.abs(ce - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ce, i.cutoutPanoFrameStartTs = de), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ce) > 1e-6) {
      const Ie = De(
        (de - Number(i.cutoutPanoFrameStartTs || de)) / Sm,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Xn(
        Number(i.cutoutPanoFrameFrom || 0),
        ce,
        uu(Ie)
      ), Ie >= 1 && (i.cutoutPanoFrameAlpha = ce, ce === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const Ie = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), g = De((de - Number(i.outputPreviewAnimStartTs || 0)) / Ie, 0, 1), O = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? mI(g) : yI(g);
      i.outputPreviewAnim = Xn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, O), l.dirty = !0, g >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: Ie, done: g } = EN(i.viewTransition, de);
      if (i.viewPosition = Ie.position, i.viewYaw = Ie.yaw_deg, i.viewPitch = Ie.pitch_deg, i.viewFov = Ie.hFOV_deg, i.viewDistance = Ie.distance, g) {
        const { end: u } = i.viewTransition;
        i.viewTransition = null, u && P(u), me();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(w.state.inertia.vx || 0), i.viewInertia.vy = Number(w.state.inertia.vy || 0), i.viewInertia.active = !!w.state.inertia.active, w.stepInertia(de) && (i.viewInertia.vx = Number(w.state.inertia.vx || 0), i.viewInertia.vy = Number(w.state.inertia.vy || 0), i.viewInertia.active = !!w.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const Ie = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), oe(Ie);
    }
  }
  function be(de) {
    try {
      de();
    } catch (J) {
      const fe = String((J == null ? void 0 : J.stack) || (J == null ? void 0 : J.message) || J || "unknown editor frame error");
      l.tickErrorSignature !== fe && (l.tickErrorSignature = fe, console.error("[PanoramaStickers] editor frame failed", J)), S.stageStatus = Jn, S.stageStatusDetail = "frame", f == null || f.setAttribute("data-stage-ready", ""), f == null || f.removeAttribute("data-stage-loading-kind");
    }
  }
  function I(de = performance.now(), J = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const fe = jS();
    be(() => K(de, J)), HS(fe);
  }
  function Z() {
    !l.running || !Ce() || be(() => {
      l.dirty = !1, oe(/* @__PURE__ */ new Set([wt.RESIZE]));
    });
  }
  const ne = new ResizeObserver(Z);
  let C = null;
  function B() {
    C == null || C.removeEventListener("change", W), C = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), C.addEventListener("change", W);
  }
  function W() {
    B(), Z();
  }
  function Q() {
    R = zS("editor", () => {
      var de;
      return {
        type: v,
        readOnly: s,
        mode: i.mode,
        interaction: ((de = i.interaction) == null ? void 0 : de.kind) ?? null,
        timelineDrag: !!b.drag,
        playing: !!X.playing
      };
    });
  }
  function ue() {
    R(), l.running = !1, p.stop(), ne.disconnect(), C.removeEventListener("change", W);
  }
  return {
    connect(de) {
      ({
        applyViewTransitionEnd: P,
        drawCutoutOutputPreview: G,
        drawCutoutPanoPassepartout: F,
        drawFrameRollOverlay: T,
        drawFrameViewBackground: y,
        drawGridPano: $,
        drawGridUnwrap: z,
        drawLassoOutlineOverlay: ee,
        drawObjects: ie,
        endEditorViewFrame: j,
        getActiveCutoutShot: H,
        getCutoutPanoDimTarget: U,
        getSharedLivePaintSurface: ae,
        getStageImageStatus: Pe,
        isPaintCompositeInteraction: we,
        measureFrameSafeRect: he,
        playback: X,
        rebuildPaintEngineIfNeeded: A,
        syncCutoutShot: L,
        syncFloatingViewButtonState: me,
        syncFrameRollKnob: ge,
        syncLookAtFrameButtonState: Ne,
        syncViewToggleState: He,
        updateSelectionMenu: re
      } = de);
    },
    requestDraw: te,
    syncCanvasSize: Ce,
    startAnimation: x,
    editorAnimating: M,
    tick: I,
    stageResizeObserver: ne,
    watchPixelRatio: B,
    sampleEditorDiagnostics: Q,
    stopRenderLoop: ue
  };
}
function ZI(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: p,
    runtime: d,
    sceneV2: f,
    shotEditor: h,
    state: b,
    studio: v,
    type: S,
    uiState: w
  } = e;
  let P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L, me, ge, Ne, He, re, R, oe, pe, Ae, Le, te, Ce, x, M = 0;
  function K() {
    w.toolButtons.forEach((J) => {
      const fe = J.attr === "data-tool-mode", Ee = J.attr === "data-paint-tool", je = J.attr === "data-mask-tool";
      J.active = fe ? J.value === r.primaryTool : Ee ? J.key === r.paintTool : je ? J.key === r.maskTool : !1, J.pressed = J.active ? "true" : J.pressed == null ? null : "false";
    });
  }
  function be() {
    if (v && bo(w.toolButtons, "value", "add-camera", { disabled: ae() }), S !== "cutout") return;
    const J = F();
    bo(w.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: J ? "Look At Frame" : "Add Frame",
      tip: J ? "Look at frame" : "Add frame",
      icon: J ? Xe.camera : Xe.plus_circle
    });
  }
  function I() {
    const J = VN({
      spaceView: Ne(),
      spaceMode: Nl(r.spaceMode, r.viewTransition),
      readOnly: p,
      frameMode: h && r.mode === "frame",
      showGrid: r.showGrid
    });
    w.space && Object.assign(w.space, J.space);
    for (const [fe, Ee] of Object.entries(J.buttons)) bo(w.floatingButtons, "action", fe, Ee);
  }
  function Z() {
    var Ee;
    const J = $N({ hasShot: !!F(), erp: he(), hidden: ae() && !G(), studio: v });
    r.mode === "frame" && J.disabled && (v ? re(F()) : r.mode = "pano"), r.outputPreviewRect = null, w.viewButtons.forEach((je) => {
      const ce = je.key === r.mode;
      je.pressed = ce ? "true" : "false", je.visible = !(je.key === "frame" && !h), je.key === "frame" ? Object.assign(je, J) : je.disabled = !1;
    });
    const fe = h && r.mode === "frame" ? F() : null;
    w.frameRail.visible = !!fe, w.frameRail.disabled = p || (fe == null ? void 0 : fe.locked) === !0, w.frameRollKnob.visible = !!fe && !p && fe.locked !== !0, w.frameRollKnob.disabled = p || (fe == null ? void 0 : fe.locked) === !0, w.frameRollKnob.rollDeg = Number((fe == null ? void 0 : fe.roll_deg) ?? (fe == null ? void 0 : fe.rot_deg) ?? 0), w.frameRollKnob.displayValue = Oo(w.frameRollKnob.rollDeg), w.frameRollKnob.dragging = ((Ee = r.interaction) == null ? void 0 : Ee.kind) === "roll_frame", w.frameRollKnob.armed = !!fe && r.altModifier === !0, w.frameRail.rollKnob = w.frameRollKnob, w.frameRail.aspectLabel = fe ? Br(fe) : "", w.frameRail.aspectChoices = Ly(fe ? String(Br(fe)) : null, { erp: v, coverage: b.coverage }), fe || (w.frameRail.aspectOpen = !1), w.outputPreviewToggle.visible = S === "cutout" && r.mode !== "frame" && !!F(), h && w.cameraPreview && (w.cameraPreview.visible = r.mode !== "frame" && P(), w.cameraPreview.expanded = !!r.outputPreviewExpanded, w.cameraPreview.settled = w.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), I(), L() ? Ce(r.pointerPos) : pe(r.mode === "pano" ? "grab" : "default");
  }
  function ne() {
    var fe;
    const J = r.mode === "frame" ? F() : null;
    w.frameRollKnob.visible = !!J && !p && J.locked !== !0, w.frameRollKnob.rollDeg = Number((J == null ? void 0 : J.roll_deg) ?? (J == null ? void 0 : J.rot_deg) ?? 0), w.frameRollKnob.displayValue = Oo(w.frameRollKnob.rollDeg), w.frameRollKnob.dragging = ((fe = r.interaction) == null ? void 0 : fe.kind) === "roll_frame", w.frameRollKnob.armed = !!J && r.altModifier === !0;
  }
  function C() {
    K();
    const J = TN({
      editor: r,
      swatches: Cl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: Sr,
      colorsApproximatelyEqual: El,
      rgb01ToHsv: ad,
      hsv01ToRgb: od,
      getBrushPresetIdForTool: T,
      isActiveLassoTool: we
    });
    if (Object.assign(w.paintDock, J), te(), !J.visible) {
      i && (i.hidden = !0);
      return;
    }
    M && (clearTimeout(M), M = 0), o && (!J.colorEnabled && i && !i.hidden && (M = window.setTimeout(() => {
      i.hidden = !0, w.paintDock.colorPopOpen = !1, M = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", J.pickerHueColor), i.style.setProperty("--picker-sat", J.pickerSat), i.style.setProperty("--picker-val", J.pickerVal), i.style.setProperty("--picker-hue", J.pickerHue)), a && (a.style.left = J.pickerSvLeft, a.style.top = J.pickerSvTop), s && (s.style.left = J.pickerHueLeft));
  }
  function B() {
    const J = R(h && r.mode === "frame" ? F() : ee());
    J && (r.panelLastValues = {
      yaw_deg: Number(J.yaw_deg || 0),
      pitch_deg: Number(J.pitch_deg || 0),
      hFOV_deg: Number(J.hFOV_deg || (S === "stickers" ? 30 : 90)),
      vFOV_deg: Number(J.vFOV_deg || (S === "stickers" ? 30 : 60)),
      rot_deg: Number(J.rot_deg || 0),
      roll_deg: Number(J.roll_deg || 0),
      aspect_id: Br(J)
    }, W());
  }
  function W() {
    Ae(), Le(), ue();
  }
  function Q() {
    const J = h && r.mode === "frame" ? F() : null;
    return [...ie(), oe(), J].some((fe) => me(fe) ? ml(fe) : ge(fe) && ae() && ml(b.camera));
  }
  function ue() {
    if (n) return;
    b.ui_settings = b.ui_settings || {};
    const J = FN(b.ui_settings);
    if (l) {
      w.sidePanel = DN({
        coverage: b.coverage,
        uiSettings: J,
        normalizeCoverageValue: En
      });
      return;
    }
    const fe = ee(), Ee = h && r.mode === "frame" ? F() : null, je = Ee || fe, ce = Ee ? [Ee] : ie(), xe = Ee ? "shot" : j();
    if (ce.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), je && xe !== "stroke") {
      const Te = R(je);
      r.panelLastValues = {
        yaw_deg: Number(Te.yaw_deg || 0),
        pitch_deg: Number(Te.pitch_deg || 0),
        hFOV_deg: Number(Te.hFOV_deg || (xe === "image" ? 30 : 90)),
        vFOV_deg: Number(Te.vFOV_deg || (xe === "image" ? 30 : 60)),
        rot_deg: Number(Te.rot_deg || 0),
        roll_deg: Number(Te.roll_deg || 0),
        aspect_id: Br(Te)
      }, me(je) && (r.panelLastValues.opacity = Bi(je, r.frame).opacity * 100);
    }
    const Ie = r.panelLastValues || (S === "stickers" || xe === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = xe === "stroke" ? null : je, u = oe(), O = t && (xe === "shot" || xe === "frame") && Pe(), V = u ? Tx(u, r.frame) : O ? { ...g, ...Ex(b.camera, r.frame), vFOV_deg: g.vFOV_deg } : me(g) ? r.panelLastValues : g || Ie, k = u ? x(u) : !!g && !A(g);
    r.panelWasEnabled = k, be();
    let q = null;
    if (Ee) {
      const Te = U({ item: Ee, kind: "shot", label: "Frame" });
      q = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Te.label,
        currentIcon: Te.icon || null,
        items: [{
          id: String(Ee.id || ""),
          label: Te.label,
          icon: Te.icon || null,
          active: !0
        }]
      };
    } else if (S === "stickers" || S === "cutout") {
      const Te = [{
        id: "",
        label: S === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (S === "stickers") {
        const Fe = F();
        Fe && Te.push({ id: Fe.id, label: "Camera", icon: H("frame"), item: Fe, kind: "frame" }), z().forEach((Re, Ue) => {
          var dt, yt;
          if (!Re || me(Re) && !Re.visible) return;
          const qe = f ? Tu(Re) : X(Re) ? String(Re.id || gf) : String(((yt = (dt = b.assets) == null ? void 0 : dt[Re.asset_id]) == null ? void 0 : yt.name) || Re.asset_id || Re.id), Be = `${Ue + 1}. ${qe}${X(Re) && He(Re) ? " (hidden)" : ""}`, Qe = U({ item: Re, label: Be, kind: "image" });
          Te.push({ id: Re.id, label: Qe.label, icon: Qe.icon, item: Re, kind: "image" });
        });
      } else
        y().forEach((Fe) => {
          if (!(Fe != null && Fe.item)) return;
          const Re = U(Fe);
          Te.push({ id: Fe.item.id, label: Re.label, icon: Re.icon, item: Fe.item, kind: Fe.kind });
        });
      const N = (g == null ? void 0 : g.id) || "", ye = u ? { label: Tu(u), icon: Xe.globe } : Te.find((Fe) => Fe.id === N) || Te[0];
      q = {
        label: "Selection",
        open: !1,
        disabled: Te.length <= 1,
        currentLabel: ye.label,
        currentIcon: ye.icon || null,
        items: Te.map((Fe) => ({
          id: Fe.id,
          label: Fe.label,
          icon: Fe.icon || null,
          active: Fe.id === N
        }))
      };
    }
    const ve = [], se = (Te, N, ye, Fe, Re) => {
      const Ue = De(Number(V[Te] || 0), ye, Fe);
      ve.push({
        key: Te,
        label: N,
        min: ye,
        max: Fe,
        step: Re,
        value: Ue,
        displayValue: Oo(Ue),
        fillPct: De((Ue - ye) / Math.max(1e-6, Fe - ye) * 100, 0, 100),
        enabled: k && !p
      });
    }, Ve = [];
    if (u) {
      for (const [Te, N] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const ye = su(V[Te]);
        se(Te, N, -ye, ye, 0.01);
      }
      se("yaw_deg", "Yaw", -180, 180, 0.1), se("pitch_deg", "Pitch", -90, 90, 0.1), se("roll_deg", "Roll", -180, 180, 0.1), se("scale", "Scale", Gy, su(V.scale), 0.01), se("opacity", "Opacity", 0, 100, 1);
    } else if (ce.length > 1)
      Ve.push(`Selected objects: ${ce.length}`), Ve.push("Multi-selection supports z-order and delete.");
    else {
      const Te = xe === "shot" || xe === "frame";
      if (O)
        for (const [N, ye] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Fe = su(V[N]);
          se(N, ye, -Fe, Fe, 0.01);
        }
      se("yaw_deg", "Yaw", -180, 180, 0.1), se("pitch_deg", "Pitch", -90, 90, 0.1), se(xe === "image" || S === "stickers" && !Te ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), se("hFOV_deg", "H FOV", 1, 179, 0.1), se("vFOV_deg", "V FOV", 1, 179, 0.1), Te && ve.forEach((N) => {
        N.enabled = N.enabled && zN(N.key, { erp: he() });
      }), f && !Te && se("opacity", "Opacity", 0, 100, 1);
    }
    w.sidePanel = HN({
      coverage: b.coverage,
      readOnly: p,
      selectionPicker: q,
      enabled: k,
      selectedKind: u ? "world" : xe,
      selectedItems: ce,
      params: ve,
      notes: Ve,
      uiSettings: J,
      normalizeCoverageValue: En
    });
  }
  function de() {
    const { canUndo: J, canRedo: fe } = $();
    bo(w.toolButtons, "value", "undo", { disabled: !J }), bo(w.toolButtons, "value", "redo", { disabled: !fe });
  }
  return {
    connect(J) {
      ({
        cameraPreviewShown: P,
        cameraShoots: G,
        getActiveCutoutShot: F,
        getBrushPresetIdForTool: T,
        getCutoutInspectorItems: y,
        getHistoryCapabilities: $,
        getList: z,
        getSelected: ee,
        getSelectedItems: ie,
        getSelectedKind: j,
        getSelectionItemIcon: H,
        getSelectionItemLabelData: U,
        hasCamera: ae,
        hasSpaceContent: Pe,
        isActiveLassoTool: we,
        isErpCamera: he,
        isExternalSticker: X,
        isItemLocked: A,
        isPaintCursorEnabled: L,
        isSceneSticker: me,
        isShotItem: ge,
        isSpaceView: Ne,
        isStickerHidden: He,
        leaveFrameView: re,
        poseOf: R,
        selectedWorldSticker: oe,
        setCanvasCursor: pe,
        syncCutoutShot: Ae,
        syncTimeline: Le,
        syncVideoTransportVisibility: te,
        updateCursor: Ce,
        worldStickerEditable: x
      } = J);
    },
    syncLookAtFrameButtonState: be,
    syncFloatingViewButtonState: I,
    syncViewToggleState: Z,
    syncFrameRollKnob: ne,
    syncPaintUi: C,
    syncSidePanelControls: B,
    updateSidePanel: W,
    inspectorTimed: Q,
    syncSidePanelModel: ue,
    syncUndoRedoButtons: de
  };
}
function QI(e) {
  const {
    capture: t,
    cutoutV2: r,
    editor: n,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: p,
    timeline: d,
    timelinePlayhead: f,
    uiState: h,
    videoEl: b,
    videoTimelineFps: v
  } = e;
  let S, w, P, G, F, T, y, $, z, ee, ie, j, H, U, ae;
  function Pe() {
    if (!l || o) return;
    const x = he(), M = d.selection, K = M && X(M.owner);
    if (M) {
      const be = K ? A(M) : [];
      M.frames = M.frames.filter((I) => be.some((Z) => K[Z].keyframes.some((ne) => ne.frame === I))), M.frames.length || (d.selection = null);
    }
    h.timeline = YN(s, {
      span: x,
      selection: d.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: d.expanded ?? we(),
      openRows: d.openRows,
      audio: He() && h.videoTransport.hasAudio ? { muted: b.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: v(i) !== null || Mk(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: P(),
      cameraHideable: p,
      stickers: !r,
      scene: a && !!Qd(i).scene,
      sceneLocked: !!t
    }), h.easing = d.selection ? qN(K, A(d.selection), d.selection.frames, L(d.selection.owner)) : null;
  }
  function we() {
    return ux(s, { cameraOnly: r, camera: p });
  }
  function he(x = null) {
    if (t != null && t.frames) return t.frames;
    const M = s.timeline.fps, K = s.stickers.find(F), be = K ? w() : null, I = Math.max(
      h.videoTransport.ready ? Math.round(Number(h.videoTransport.duration || 0) * M) : 0,
      be ? q0(K.clip, M, be.meta) : 0
    );
    return f0(s, { minimum: Math.round(M * 5), frames: I, openClip: x, camera: r && !t || p });
  }
  function X(x) {
    return x === "camera" ? P() ? s.camera : null : x === "scene" ? a ? s.scene : null : s.stickers.find((M) => M.id === x) || null;
  }
  function A(x) {
    return x.lane ? [x.lane] : Go(X(x.owner));
  }
  function L(x) {
    if (x === "camera") return 0;
    const { clip: M } = X(x);
    return M.start - M.in;
  }
  function me(x) {
    return `${jo(x, n.frame)}:${x.start - x.in}`;
  }
  function ge(x) {
    const M = X(x);
    return !!M && M.locked !== !0;
  }
  function Ne(x) {
    const M = Math.max(0, Math.round(x));
    if (M === n.frame) return;
    j(), n.frame = M, f.frame.value = M, j();
    const K = [n.selectedId, n.worldSelectedId];
    ee(), T(), K[0] !== n.selectedId || K[1] !== n.worldSelectedId ? ae() : G() && H(), U(), ie({ reason: wt.PLAYHEAD });
  }
  function He() {
    return b instanceof HTMLVideoElement && !!b.getAttribute("src");
  }
  function re(x) {
    z(), y.seek(x);
  }
  function R() {
    l && y.stop();
  }
  function oe() {
    z(), y.toggle();
  }
  function pe() {
    j(), T(), ae(), U(), ie();
  }
  function Ae() {
    $(), S(), pe();
  }
  function Le() {
    const { selection: x } = d;
    ge(x.owner) && (R(), nx(X(x.owner), A(x), x.frames, n.frame - L(x.owner)), d.selection = null, Ae());
  }
  function te(x) {
    const M = Ho(x);
    if (M === null || M === s.timeline.fps) return;
    R();
    const K = Math.round(n.frame * M / s.timeline.fps);
    Mx(s, M), d.selection = null, y.seek(K), Ae();
  }
  function Ce() {
    const x = v(i);
    x !== null && x !== s.timeline.fps && te(x);
  }
  return {
    connect(x) {
      ({
        commitAndRefreshNode: S,
        getPortMedia: w,
        hasCamera: P,
        inspectorTimed: G,
        isExternalSticker: F,
        markObjectVisualsDirty: T,
        playback: y,
        pushHistory: $,
        refreshModalVideoSource: z,
        releaseHiddenSelection: ee,
        requestDraw: ie,
        syncCutoutShot: j,
        syncSidePanelModel: H,
        updateSelectionMenu: U,
        updateSidePanel: ae
      } = x);
    },
    syncTimeline: Pe,
    timelineTimed: we,
    timelineSpanFrames: he,
    timelineOwner: X,
    selectedLanes: A,
    timelineOffset: L,
    clipView: me,
    timelineEditable: ge,
    setTimelineFrame: Ne,
    jumpTimelineTo: re,
    stopTimelinePlayback: R,
    togglePlayback: oe,
    refreshTimelineEdit: pe,
    commitTimelineEdit: Ae,
    deleteSelectedKeyframes: Le,
    changeTimelineFps: te,
    applyVideoTimelineFps: Ce
  };
}
function eE(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    studio: a,
    timeline: s,
    uiState: l
  } = e;
  let p, d, f, h, b, v, S, w, P, G, F, T, y, $, z, ee, ie, j, H, U, ae, Pe, we, he, X, A, L;
  function me(ge) {
    if (!(n || !o)) {
      if (ge.type === "seek") {
        if (ge.phase === "move") {
          s.scrubFrame = ge.frame, t.request("seek");
          return;
        }
        t.cancel(), ge.phase === "start" && P(), w.seek(ge.frame);
        return;
      }
      if (ge.type === "play") {
        he();
        return;
      }
      if (ge.type === "mute") {
        X(), j();
        return;
      }
      if (ge.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? we()), s.selection = null, j();
        return;
      }
      if (ge.type === "toggle-row") {
        s.openRows.has(ge.id) ? s.openRows.delete(ge.id) : s.openRows.add(ge.id), j();
        return;
      }
      if (ge.type === "toggle-visible") {
        if (ge.id === Vy) i.painting_visible = !i.painting_visible;
        else {
          const Ne = ae(ge.id);
          if (!Ne || ge.id === "camera" && !a) return;
          Ne.visible = !Ne.visible;
        }
        F(), h();
        return;
      }
      if (ge.type === "select-row") {
        const Ne = i.stickers.find((He) => He.id === ge.id);
        if (Ne && !Ne.visible || ge.id === "camera" && !p()) return;
        Ne && !jo(Ne.clip, r.frame) && S(Ne.clip.start), (Ne == null ? void 0 : Ne.placement) === "world" ? y(Ne.id) : ge.id === "camera" ? z(b()) : z(v().find((He) => He.id === ge.id) || null), ie(), s.selection = null, L(), A(), T();
        return;
      }
      if (ge.type === "select-keys") {
        const Ne = U(ge.owner), He = ge.frames.map((oe) => oe - Ne), re = s.selection, R = (re == null ? void 0 : re.owner) === ge.owner && re.lane === ge.lane;
        if (ge.additive && R) {
          const oe = new Set(re.frames);
          for (const pe of He)
            oe.has(pe) ? oe.delete(pe) : oe.add(pe);
          re.frames = [...oe].sort((pe, Ae) => pe - Ae);
        } else
          s.selection = He.length ? { owner: ge.owner, lane: ge.lane, frames: He } : null;
        j();
        return;
      }
      if (ge.type === "move-keys") {
        const Ne = s.selection;
        if (!Ne || !H(Ne.owner)) return;
        const He = ae(Ne.owner), re = $(Ne);
        if (ge.phase === "start") {
          ee(), s.drag = { keyframes: re.map((pe) => structuredClone(He[pe].keyframes)), frames: Ne.frames };
          return;
        }
        const { drag: R } = s;
        if (!(R != null && R.keyframes)) return;
        re.forEach((pe, Ae) => {
          He[pe].keyframes = structuredClone(R.keyframes[Ae]);
        });
        const oe = rx(He, re, R.frames, ge.delta, -U(Ne.owner));
        if (Ne.frames = R.frames.map((pe) => pe + oe), ge.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, oe ? h() : G();
        return;
      }
      if (ge.type === "clip") {
        const Ne = ge.id === "scene" ? ae("scene") : i.stickers.find((oe) => oe.id === ge.id);
        if (!Ne || Ne.locked) return;
        if (ge.phase === "start") {
          ee(), s.drag = { clip: { ...Ne.clip }, span: Pe(Ne.clip) };
          return;
        }
        const { drag: He } = s;
        if (!(He != null && He.clip)) return;
        const re = He.clip, R = f(Ne.clip);
        if (Ne.clip = { ...re }, ge.delta && ge.mode === "move" ? ax(Ne.clip, ge.delta) : ge.delta && ge.mode === "start" ? sx(Ne.clip, re.start + ge.delta) : ge.delta && lx(Ne.clip, (re.duration === null ? He.span : re.start + re.duration) + ge.delta, He.span), ge.phase !== "end") {
          t.request("timeline"), f(Ne.clip) !== R && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, F(), JSON.stringify(Ne.clip) !== JSON.stringify(re) ? h() : G();
        return;
      }
      if (ge.type === "key-row") {
        if (ge.owner === "scene" || !H(ge.owner)) return;
        ee(), Qw(ae(ge.owner), r.frame - U(ge.owner)), h();
        return;
      }
      if (ge.type === "fps") {
        const Ne = fx(ge.fps);
        if (Ne === null || Ne === i.timeline.fps || l.timeline.fpsLocked) {
          j();
          return;
        }
        d(Ne);
        return;
      }
      if (ge.type === "length") {
        const Ne = px(ge.length);
        if (Ne === void 0 || Ne === i.timeline.length) {
          j();
          return;
        }
        ee(), i.timeline.length = Ne, h();
        return;
      }
      if (ge.type === "easing") {
        const Ne = s.selection;
        if (!Ne || !H(Ne.owner)) return;
        ee(), ox(ae(Ne.owner), $(Ne), Ne.frames, ge.easing), ge.commit ? h() : G();
      }
    }
  }
  return {
    connect(ge) {
      ({
        cameraShoots: p,
        changeTimelineFps: d,
        clipView: f,
        commitTimelineEdit: h,
        getActiveCutoutShot: b,
        getList: v,
        jumpTimelineTo: S,
        playback: w,
        refreshModalVideoSource: P,
        refreshTimelineEdit: G,
        releaseHiddenSelection: F,
        requestDraw: T,
        selectWorldSticker: y,
        selectedLanes: $,
        setSelectedItem: z,
        stopTimelinePlayback: ee,
        syncFloatingViewButtonState: ie,
        syncTimeline: j,
        timelineEditable: H,
        timelineOffset: U,
        timelineOwner: ae,
        timelineSpanFrames: Pe,
        timelineTimed: we,
        togglePlayback: he,
        toggleVideoMuted: X,
        updateSelectionMenu: A,
        updateSidePanel: L
      } = ge);
    },
    onTimelineAction: me
  };
}
const Mm = /* @__PURE__ */ new Map(), fr = U0({
  app: Zn,
  api: qt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: id,
    markImageFailed: Hy,
    markImageLoading: zy,
    markImageReady: jy
  }
});
function Pm(e) {
  if (!un(e, "background") || !un(e, "external-sticker")) return null;
  const t = fr.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Ho(t[0]) : null;
}
function tE(e) {
  if (!un(e, "background")) return null;
  const [t] = fr.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = fr.uiValue(e, "pano_timeline_frames") || [], [n] = fr.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: En(n) };
}
const nE = fr.assetSource, rE = fr.source, iE = fr.uiImage, oE = fr.invalidateUiImage, Nm = fr.loadPreferredExactLinkedImage;
async function aE(e, t, r = {}) {
  var Fp, Tp;
  await ky(e, { tolerateOperationFailure: !0 }), fr.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = xI(e, t);
  await cf();
  const s = Es(e, "output_preset"), l = Es(e, "coverage"), p = Es(e, "bg_color"), d = Es(e, ZC), f = () => {
    const c = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Nm(
      e,
      c,
      () => Ye(),
      `background:size:${c.join("|")}`
    );
  }, h = () => {
    const c = f();
    return PI(c);
  }, b = (c = 2048) => {
    const m = s == null ? void 0 : s.value;
    return MI(m) ? h() || Math.max(1, Math.round(Number(c || 2048))) : kI(m, c);
  }, v = e.__panoSceneStateV2 === !0, S = t === "stickers" && v, w = t === "cutout" && v, P = S && e.__panoStudio === !0, G = w || P, F = t === "cutout" || P, T = w ? tE(e) : null, y = (v ? m0 : h0)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: b(2048),
    backgroundColor: String((p == null ? void 0 : p.value) || "#00ff00"),
    coverage: T ? T.coverage : En(l == null ? void 0 : l.value),
    sharedUiSettings: NI(),
    active: b0(e),
    fps: v ? Pm(e) : null,
    scene: (T == null ? void 0 : T.state) ?? null,
    camera: w
  });
  e.__panoLiveStateOverride = y, e.__panoLiveStateVersion = 0;
  let $ = null;
  G ? ($ = y.camera && (!P || y.camera.visible !== !1) ? Oh(y.camera, 0) : null, y.shots = $ ? [{ ...$, position: [...$.position] }] : [], y.active.selected_shot_id = $ && w ? Jl : null) : t === "cutout" && (y.shots = Array.isArray(y.shots) ? y.shots.slice(0, 1) : [], y.shots.length || (y.active.selected_shot_id = null));
  const z = t === "cutout" ? (() => {
    var _;
    const c = Array.isArray(y.shots) ? y.shots : [], m = String(((_ = y == null ? void 0 : y.active) == null ? void 0 : _.selected_shot_id) || "");
    return c.find((E) => String((E == null ? void 0 : E.id) || "") === m) || c[0] || null;
  })() : null, ee = z ? qy(z, !1) : { width: 220, height: 132 }, ie = $y(P ? "studio" : t), j = /* @__PURE__ */ $o({
    stageStatus: lr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (ie.viewButtons || []).map((c) => ({ ...c, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Fp = ie.spaceButtons) != null && Fp.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: ie.spaceButtons, frame: ie.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (ie.toolButtons || []).map((c) => ({
      ...c,
      disabled: !1,
      ...c.key === "add-world" ? { visible: S } : {},
      ...w && hI.has(c.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(ie.floatingButtons || []).map((c) => ({ ...c, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Xe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: Xe.aspect,
      rotateIcon: Xe.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: n,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Xe.fullscreen,
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
      customColorCss: Sr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Sr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (c, m) => ({ index: m, color: null })),
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
  }), H = { frame: /* @__PURE__ */ Js(0), playing: /* @__PURE__ */ Js(!1) }, U = document.createElement("div");
  document.body.appendChild(U);
  const ae = ({ intent: c, file: m } = {}) => {
    if (cr(m)) {
      if (c === "add") {
        jf(m);
        return;
      }
      if (c === "add-world") {
        qb(m);
        return;
      }
      c === "replace" && Zb(m);
    }
  }, Pe = ({ intent: c } = {}) => {
  }, we = kd(XC, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: ie,
    paintSwatches: Cl.map((c) => ({
      id: c.id,
      label: c.label,
      cssColor: Sr(c.color, 1)
    })),
    uiState: j,
    playhead: H,
    onClose: () => {
      lo();
    },
    onTimeline: (c) => yb(c),
    onImageFileSelected: ae,
    onImageFileCancelled: Pe
  });
  let he = null;
  try {
    he = we.mount(U);
  } catch (c) {
    try {
      we.unmount();
    } catch {
    }
    throw U.remove(), c;
  }
  const X = U.querySelector(".pano-modal-overlay"), A = U.querySelector(".pano-modal"), L = A == null ? void 0 : A.querySelector("[data-stage-overlay]"), me = A == null ? void 0 : A.querySelector("[data-stage-background]"), ge = A == null ? void 0 : A.querySelector(".pano-stage-wrap"), Ne = ((Tp = he == null ? void 0 : he.getPaintOverlayRefs) == null ? void 0 : Tp.call(he)) || {}, He = Ne.cursor || null, re = Ne.sizePreview || null, R = Ne.sizeSample || null;
  if (!X || !A || !L || !me || !ge || !He || !re || !R)
    throw we.unmount(), U.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const oe = L.getContext("2d"), pe = A.querySelector("[data-side]"), Ae = A.querySelector("[data-video-element]"), Le = A.querySelector("[data-port-video-element]");
  Vc(L, "editor.stage-overlay"), Vc(me, "editor.stage-background"), bh(Ae, "editor.video"), bh(Le, "editor.port-video");
  const te = A.querySelector(".pano-floating-right"), Ce = A.querySelector(".pano-floating-top"), x = A.querySelector("[data-tool-rail]"), M = A.querySelector("[data-frame-rail]"), K = A.querySelector("[data-frame-roll-knob]"), be = A.querySelector("[data-paint-dock]"), I = A.querySelector(".pano-video-transport"), Z = A.querySelector("[data-selection-menu]");
  let ne = !1;
  const C = A.querySelector("[data-tooltip]"), B = A.querySelector("[data-camera-preview-host]"), W = A.querySelector("[data-camera-preview-canvas]");
  Vc(W, "editor.camera-preview");
  const Q = A.querySelector("[data-paint-color-row]"), ue = A.querySelector("[data-paint-color-pop]"), de = A.querySelector("[data-paint-color-sv]"), J = A.querySelector("[data-paint-color-sv-cursor]"), fe = A.querySelector("[data-paint-hue-strip]"), Ee = A.querySelector("[data-paint-hue-handle]");
  let je = 0;
  ge == null || ge.removeAttribute("data-stage-ready"), ge == null || ge.setAttribute("data-stage-loading-kind", "boot"), L.style.opacity = "1", me.style.opacity = "0", i && (pe == null || pe.remove(), A.classList.add("pano-modal-readonly"));
  const ce = () => {
    if (!u.customPaintSessionStart) return;
    if (El(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (SI(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const c = [
      $n(u.customPaintColor),
      ...u.customPaintHistory.filter((m) => !El(m, u.customPaintColor))
    ];
    u.customPaintHistory = c.slice(0, 8), u.customPaintSessionStart = null;
  }, xe = (c = !1) => {
    !ue || ue.hidden || (c ? ce() : u.customPaintSessionStart = null, ue.hidden = !0, j.paintDock.colorPopOpen = !1);
  }, Ie = () => {
    ue && (ue.hidden && (u.customPaintSessionStart = $n(u.customPaintColor)), ue.hidden = !1, j.paintDock.colorPopOpen = !0);
  };
  A.addEventListener("pointerdown", () => ye.wake(), !0), A.addEventListener("pointerdown", (c) => {
    var m;
    c.target.closest("[data-frame-roll-knob]") || xi(), !c.target.closest(".pano-picker") && (c.target.closest("[data-paint-color-row]") || (A.querySelectorAll(".pano-picker-pop").forEach((_) => {
      _.hidden = !0;
    }), xe(!0), F && u.cutoutAspectOpen && !c.target.closest(".pano-aspect-popover") && !c.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, lt(), Ye()), (m = j.frameRail) != null && m.aspectOpen && !c.target.closest(".pano-frame-aspect-control") && (j.frameRail.aspectOpen = !1)));
  });
  const u = {
    mode: "pano",
    selectedId: t === "stickers" ? y.active.selected_sticker_id : y.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: dr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: En(y.coverage),
    historyController: VI(y),
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
    showGrid: CI(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ad(),
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
  }, O = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let V = null;
  t === "stickers" && (u.selectedId = null, y.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const k = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), Ve = vn({ label: "editor.still" });
  Ve.__panoFrameIdx = 0;
  const Te = vn({ label: "editor.port-still" });
  Te.__panoFrameIdx = 0;
  const N = {
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
  }, ye = SN({
    requestAnimationFrame: (c) => requestAnimationFrame(c),
    cancelAnimationFrame: (c) => cancelAnimationFrame(c),
    draw: (c, m) => Rb(c, m),
    animating: () => tb()
  }), Fe = vN({
    requestFrame: (c) => ye.requestFrame(c),
    cancelFrame: (c) => ye.cancelFrame(c),
    tasks: {
      seek: () => ro.seek(O.scrubFrame),
      timeline: () => Df(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        wi(), Ye({ localOnly: !0, reason: wt.STATE });
      },
      sidePanel: () => it()
    }
  }), Re = wk({
    canvas: me,
    onReady: () => {
      pc(), Ye({ reason: wt.CONTEXT });
    },
    onFailed: () => Ye(),
    onUpdate: () => Ye({ localOnly: !0, reason: wt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      rb(), pc(), Ye({ reason: wt.CONTEXT });
    }
  });
  let Ue = null;
  const qe = Number.parseFloat(
    getComputedStyle(A).getPropertyValue("--pano-float-radius")
  ) || 10, Be = (c) => {
    const m = String(c || "default");
    L.style.cursor !== m && (L.style.cursor = m);
  }, Qe = {
    timer: 0,
    target: null
  }, dt = {
    active: !1,
    depth: 0
  }, yt = Id({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (c) => {
      u.viewYaw = zt(Number(c.yaw || 0)), u.viewPitch = De(Number(c.pitch || 0), -89.9, 89.9), u.viewFov = De(Number(c.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const c = L.getBoundingClientRect();
      return {
        w: Math.max(1, Number(c.width || L.clientWidth || 0)),
        h: Math.max(1, Number(c.height || L.clientHeight || 0))
      };
    },
    getInvert: () => {
      var c, m;
      return {
        x: (c = y.ui_settings) != null && c.invert_view_x ? -1 : 1,
        y: (m = y.ui_settings) != null && m.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => oc(),
    onInteraction: () => ye.requestDraw(wt.VIEW)
  }), {
    applyInitialCutoutFocus: Kt,
    applyRasterObjectOffset: dn,
    applyRasterObjectTransform: Wn,
    applySpaceMode: an,
    applyStrokeGroupOffset: Zt,
    applyStrokeGroupTransform: ei,
    applyVideoTimelineFps: Xi,
    areAllSelectedItemsLocked: Ja,
    bringSelectedToFront: kn,
    buildCanonicalCutoutStickerState: ir,
    buildCanonicalSelectedStickerState: Za,
    buildRasterObjectEditCanvas: Ko,
    cameraFrustumLength: gi,
    cameraShoots: yf,
    cameraSphere: Xy,
    canRestoreSelectedToInitial: Jy,
    cancelViewTransition: ec,
    clearSelection: Bo,
    clearWorldSelection: bf,
    collectExternalStickersForClearAll: Zy,
    computeStickerVFov: Qa,
    contentSphere: tc,
    createRasterFrozenObjectsFromCanvas: Qy,
    createRasterSurface: vf,
    currentSpaceCamera: Uo,
    cutoutCamera: nc,
    deleteSelectedKeyframes: eb,
    editorAnimating: tb,
    editorViewInput: es,
    ensureGroupFrame: Ji,
    ensurePaintingGroupEntry: _f,
    erpPointToWorldDir: nb,
    forgetCameraPreviewFrame: rb,
    frameLocalPointToWorldDir: Sf,
    frameSpaceContent: ib,
    getActivePaintTargetDescriptor: Kn,
    getCutoutInspectorItems: ob,
    getCutoutSelectableItems: ab,
    getCutoutSelectableItemsForHit: rc,
    getDisplayListObjects: sb,
    getHistoryCapabilities: lb,
    getList: ts,
    getMultiSelectionGeom: ns,
    getNextStickerZIndex: rs,
    getOrderedDisplayListObjects: wf,
    getPaintingGroupList: Zi,
    getRasterObjectCenterUv: cb,
    getRasterObjectItem: xf,
    getRasterObjectList: Tr,
    getSelectableRasterObjectItems: ub,
    getSelectableStrokeGroupItems: db,
    getSelected: Dn,
    getSelectedItems: Yo,
    getSelectedKind: ic,
    getStrokeGroupCenterUv: fb,
    getStrokeGroupItem: kf,
    getStrokeGroupStrokes: Qi,
    getUnwrapRect: oc,
    hasCamera: pb,
    hasSpaceContent: Mf,
    hitRasterObjectAt: Pf,
    invalidateLivePaintPreviewCaches: eo,
    isCameraSelected: to,
    isErpCamera: ac,
    isExternalSticker: yi,
    isFreeSpaceView: ti,
    isItemLocked: hr,
    isRasterObjectItem: Dr,
    isSceneSticker: is,
    isShotItem: bi,
    isSpaceView: os,
    isStickerHidden: sc,
    isStickerItem: ln,
    isStrokeGroupItem: Bn,
    isUploadingSticker: hb,
    lookingAt: mb,
    makeRasterObjectSelectionId: Nf,
    makeStrokeGroupSelectionId: Af,
    markObjectVisualsDirty: fn,
    markPaintCompositeVisualsDirty: no,
    markPaintStrokeVisualsDirty: mr,
    needsPaintingLayerSync: gb,
    objectGeom: cn,
    onTimelineAction: yb,
    paintingShown: bb,
    parseRasterObjectSelectionId: vi,
    playback: ro,
    playbackFps: vb,
    poseOf: Ln,
    processFreehandPoints: Cf,
    pushHistory: gt,
    queueVideoTransportLayout: _b,
    rasterizeStrokeToSurface: Sb,
    rebuildPaintEngineIfNeeded: wb,
    reconcileExternalStickerFromInputs: If,
    refreshModalVideoSource: lc,
    refreshPaintEngineRevisionCache: xb,
    requestDraw: Ye,
    restoreHistory: cc,
    restoreSelectedToInitialPose: kb,
    sampleEditorDiagnostics: Mb,
    screenPos: ni,
    screenPosCss: as,
    screenPosToErpPoint: gr,
    screenPosToFrameAsErpPoint: or,
    screenToWorldDir: Ef,
    selectWorldSticker: Of,
    selectedWorldSticker: uc,
    sendSelectedToBack: Pb,
    setSelectedItem: ar,
    setSelectedItems: Nb,
    setSpaceMode: Ab,
    setSpaceView: Cb,
    shortestWrappedDelta: ss,
    shotViewCamera: Ib,
    spaceOrigin: Eb,
    spaceScale: qo,
    spaceViewState: _i,
    stageResizeObserver: Ob,
    startAnimation: dc,
    startSpaceDrag: Ff,
    stickerCornerOrderSanity: Fb,
    stickerImageKey: fc,
    stopRenderLoop: Tb,
    stopTimelinePlayback: Lr,
    syncCanvasSize: pc,
    syncFloatingViewButtonState: hc,
    syncFrameRollKnob: ri,
    syncLookAtFrameButtonState: Db,
    syncPaintUi: Rn,
    syncPaintingLayerAsync: Tf,
    syncSidePanelControls: io,
    syncTimeline: Df,
    syncUndoRedoButtons: Lb,
    syncVideoTransportState: Lf,
    syncViewToggleState: ii,
    tick: Rb,
    togglePlayback: Rf,
    toggleSelectedExternalStickerVisibility: Vb,
    toggleSelectedLock: $b,
    toggleVideoMuted: zb,
    transitionView: ls,
    turnViewTo: Vf,
    updateSidePanel: it,
    videoCleanupFns: jb,
    videoState: cs,
    viewControls: mc,
    watchPixelRatio: Hb,
    worldDirToFrameLocalPoint: $f,
    worldStickerEditable: zf,
    writePose: sr,
    zoomSpaceAt: Gb
  } = EI({
    api: qt,
    app: Zn,
    backgroundCanvas: me,
    cameraV2: G,
    canvas: L,
    capture: T,
    comfyMedia: fr,
    commitAndRefreshNode: xt,
    commitState: Vn,
    ctx: oe,
    cutoutPreviewCanvas: W,
    cutoutPreviewHost: B,
    cutoutV2: w,
    dragFrames: Fe,
    editor: u,
    editorView: Re,
    floatingRightEl: te,
    frameGateCssRadius: qe,
    frameViewDistance: Zf,
    getActiveCutoutShot: kt,
    getBrushPresetIdForTool: ao,
    getFrameViewLayout: us,
    getFrameViewRect: Rr,
    getPaintingLayerList: ps,
    hideSidebar: i,
    imageCache: k,
    isActiveLassoTool: Kb,
    isPaintCursorEnabled: ip,
    isWorldMenuShown: O1,
    leaveFrameView: Xf,
    loadPreferredExactLinkedImage: Nm,
    measureFrameSafeRect: m1,
    mediaAssetSource: nE,
    mediaSource: rE,
    mediaUiImage: iE,
    node: e,
    paintColorPop: ue,
    paintColorRow: Q,
    paintColorSvCursor: J,
    paintHueHandle: Ee,
    portStillCanvas: Te,
    portVideoEl: Le,
    previewMode: o,
    rasterErpCanvasCache: se,
    rasterImageAlphaCache: ve,
    rasterImageCache: q,
    readOnly: n,
    rectFromPoints: cp,
    resolveEditorOutputPresetWidth: b,
    runtime: N,
    sceneV2: S,
    scheduler: ye,
    setCanvasCursor: Be,
    shotEditor: F,
    stageWrap: ge,
    state: y,
    stateV2: v,
    stillCanvas: Ve,
    studio: P,
    syncCutoutShot: wi,
    timeline: O,
    timelinePlayhead: H,
    type: t,
    uiState: j,
    updateCursor: Pt,
    updateSelectionMenu: lt,
    videoEl: Ae,
    videoTimelineFps: Pm,
    viewController: yt
  }, [
    DI,
    $I,
    zI,
    jI,
    HI,
    GI,
    WI,
    KI,
    BI,
    UI,
    YI,
    qI,
    XI,
    JI,
    ZI,
    QI,
    eE
  ]);
  function gc(c) {
    return df(c == null ? void 0 : c.dataTransfer);
  }
  function Si(c) {
    const m = !!c;
    dt.active !== m && (dt.active = m, ge.classList.toggle("drop-active", m));
  }
  Fb();
  function Wb() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function Kb() {
    return String(Wb() || "") === "lasso_fill";
  }
  function oo() {
    const c = new Set(
      (y.stickers || []).map((m) => String((m == null ? void 0 : m.asset_id) || "")).filter((m) => !!m)
    );
    Object.keys(y.assets || {}).forEach((m) => {
      c.has(m) || (delete y.assets[m], k.delete(m));
    });
  }
  function Bb(c, m) {
    var D;
    const _ = (D = es().space) == null ? void 0 : D.gizmo;
    if (to() && _ && ki("hover", m) !== null && ki("down", m))
      return u.interaction = { kind: "world_gizmo", camera: !0, mode: _.mode, start: _.transform, base: nc(), changed: !1 }, L.setPointerCapture(c.pointerId), Pt(m), !0;
    const E = E0(nc(), gi(qo()));
    return mk(Uo(), E, m, L.width, L.height) ? (to() || (ar(kt()), it(), lt(), Ye()), u.interaction = { kind: "world_select" }, L.setPointerCapture(c.pointerId), !0) : !1;
  }
  Ob.observe(L), Hb();
  async function jf(c) {
    if (n || w || t !== "stickers" && t !== "cutout" || !cr(c)) return;
    if (S) {
      Lr(), await Hf(c);
      return;
    }
    const m = Oi("asset"), _ = ma(e, `add:${m}`, async () => {
      try {
        const { image: E } = await ga(c);
        k.set(m, E);
        const D = Oi("st");
        y.stickers.push({
          id: D,
          asset_id: m,
          yaw_deg: u.viewYaw,
          pitch_deg: u.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Qa(30, Number(E.naturalWidth || E.width || 1), Number(E.naturalHeight || E.height || 1)),
          rot_deg: 0,
          z_index: rs()
        }), ar(y.stickers[y.stickers.length - 1]), Xo(), it(), lt(), Ye();
        const Y = await Di(c, {
          fetchApi: (Se, Ke) => qt.fetchApi(Se, Ke)
        });
        if (!(Array.isArray(y.stickers) ? y.stickers : []).filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === m).length) return;
        y.assets[m] = Y, oo(), gt(), xt(), it(), lt(), Ye();
      } catch (E) {
        delete y.assets[m], k.delete(m);
        const D = Array.isArray(y.stickers) ? y.stickers : [], Y = D.filter((le) => String((le == null ? void 0 : le.asset_id) || "") === m);
        throw Y.length && (y.stickers = D.filter((le) => String((le == null ? void 0 : le.asset_id) || "") !== m), Y.some((le) => String((le == null ? void 0 : le.id) || "") === String(u.selectedId || "")) && ar(null), it(), lt(), Ye(), xt()), E;
      }
    });
    try {
      await _;
    } catch {
    }
  }
  function Ub() {
    var c;
    n || t !== "stickers" && t !== "cutout" || (c = he == null ? void 0 : he.openImagePicker) == null || c.call(he, "add");
  }
  function Yb() {
    var c;
    n || !S || (c = he == null ? void 0 : he.openImagePicker) == null || c.call(he, "add-world");
  }
  async function qb(c) {
    n || !S || !cr(c) || (Lr(), await Hf(c, "world"));
  }
  function Xb() {
    const c = { x: L.width / 2, y: L.height / 2 }, m = os() ? Re.pick(Uo(), c.x, c.y, L.width, L.height) : null;
    return sk(_i(), m, tc());
  }
  async function Hf(c, m = "sky") {
    const _ = Oi("st"), E = ma(e, `add:${_}`, async () => {
      const { image: D } = await ga(c), Y = {
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Qa(30, Number(D.naturalWidth || D.width || 1), Number(D.naturalHeight || D.height || 1)),
        rot_deg: 0
      }, le = { kind: "file", filename: "" }, _e = m === "world" ? Vx(_, le, Xb()) : Bd(_, le, Y, rs());
      k.set(fc(_e), D), y.stickers.push(_e), m === "world" ? Of(_) : ar(_e), Xo(), it(), lt(), Ye();
      try {
        const Se = await Di(c, {
          fetchApi: (Me, Oe) => qt.fetchApi(Me, Oe)
        }), Ke = y.stickers.find((Me) => Me.id === _);
        if (!Ke) return;
        Ke.source = Hs(Se), k.set(fc(Ke), D), gt(), xt();
      } catch (Se) {
        throw y.stickers = y.stickers.filter((Ke) => Ke.id !== _), u.selectedId === _ && ar(null), u.worldSelectedId === _ && bf(), gt(), xt(), Se;
      } finally {
        it(), lt(), Ye();
      }
    });
    try {
      await E;
    } catch {
    }
  }
  async function Jb(c, m) {
    const _ = ma(e, `replace:${m}:${Oi("asset")}`, async () => {
      const { image: E } = await ga(c), D = await Di(c, {
        fetchApi: (le, _e) => qt.fetchApi(le, _e)
      }), Y = y.stickers.find((le) => le.id === m);
      if (Y) {
        Y.source = Hs(D), Y.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const le of [Y.size.value, ...Y.size.keyframes.map((_e) => _e.value)])
          le.vFOV_deg = Qa(le.hFOV_deg, Number(E.naturalWidth || E.width || 1), Number(E.naturalHeight || E.height || 1));
        k.set(fc(Y), E), fn(), gt(), xt(), it(), lt(), Ye();
      }
    });
    try {
      await _;
    } catch {
    }
  }
  async function Zb(c) {
    if (n || t !== "stickers" && t !== "cutout") return;
    const m = Dn();
    if (!m || !ln(m) || yi(m) || !cr(c)) return;
    if (S) {
      await Jb(c, m.id);
      return;
    }
    const _ = String(m.id || ""), E = Oi("asset"), D = ma(e, `replace:${_}:${E}`, async () => {
      var Me;
      const Y = (Array.isArray(y.stickers) ? y.stickers : []).find((Oe) => String((Oe == null ? void 0 : Oe.id) || "") === _) || null;
      if (!Y || !ln(Y) || yi(Y)) return;
      const le = String(Y.asset_id || ""), _e = le ? pn(((Me = y.assets) == null ? void 0 : Me[le]) || null) : null, Se = Number(Y.vFOV_deg || 0), Ke = Y.crop && typeof Y.crop == "object" ? { ...Y.crop } : null;
      try {
        const { image: Oe } = await ga(c);
        k.set(E, Oe), Y.asset_id = E, Y.vFOV_deg = Qa(
          Number(Y.hFOV_deg || 30),
          Number(Oe.naturalWidth || Oe.width || 1),
          Number(Oe.naturalHeight || Oe.height || 1)
        ), Y.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, fn(), it(), lt(), Ye();
        const Ge = await Di(c, {
          fetchApi: (We, ht) => qt.fetchApi(We, ht)
        }), et = (Array.isArray(y.stickers) ? y.stickers : []).find((We) => String((We == null ? void 0 : We.id) || "") === _) || null;
        if (!et || String(et.asset_id || "") !== E) return;
        y.assets[E] = Ge, oo(), gt(), xt(), it(), lt(), Ye();
      } catch (Oe) {
        delete y.assets[E], k.delete(E);
        const Ge = (Array.isArray(y.stickers) ? y.stickers : []).find((et) => String((et == null ? void 0 : et.id) || "") === _) || null;
        throw Ge && String(Ge.asset_id || "") === E && (le && _e && (y.assets[le] = _e), Ge.asset_id = le, Ge.vFOV_deg = Se, Ge.crop = Ke ? { ...Ke } : null), fn(), xt(), it(), lt(), Ye(), Oe;
      }
    });
    try {
      await D;
    } catch {
    }
  }
  function Qb() {
    var m;
    if (n) return;
    const c = Dn();
    !c || !ln(c) || yi(c) || (m = he == null ? void 0 : he.openImagePicker) == null || m.call(he, "replace");
  }
  async function e1() {
    if (n || t !== "stickers") return;
    if (S) {
      await t1();
      return;
    }
    const c = y.assets && typeof y.assets == "object" ? y.assets : {}, m = Object.entries(c).filter(([, E]) => {
      const D = String((E == null ? void 0 : E.type) || "").toLowerCase(), Y = String((E == null ? void 0 : E.value) || "");
      return D === "dataurl" && Y.startsWith("data:image");
    });
    if (!m.length) return;
    let _ = !1;
    for (const [E, D] of m)
      try {
        const Y = String((D == null ? void 0 : D.value) || "");
        if (!Y) continue;
        const le = await fetch(Y).then((Oe) => Oe.blob()), _e = String(le.type || "image/png").split("/")[1] || "png", Se = String((D == null ? void 0 : D.name) || `${E}.${_e}`), Ke = new File([le], Se, { type: le.type || "image/png" }), Me = await Di(Ke, {
          fetchApi: (Oe, Ge) => qt.fetchApi(Oe, Ge)
        });
        y.assets[E] = {
          ...Me,
          w: Number((D == null ? void 0 : D.w) || 0),
          h: Number((D == null ? void 0 : D.h) || 0)
        }, _ = !0;
      } catch {
      }
    _ && (xt(), Ye());
  }
  async function t1() {
    let c = !1;
    for (const m of y.stickers) {
      const _ = m.source.data_url;
      if (_)
        try {
          const E = await fetch(_).then((_e) => _e.blob()), D = String(E.type || "image/png").split("/")[1] || "png", Y = new File([E], `${m.id}.${D}`, { type: E.type || "image/png" }), le = await Di(Y, {
            fetchApi: (_e, Se) => qt.fetchApi(_e, Se)
          });
          m.source = Hs(le), c = !0;
        } catch {
        }
    }
    c && (xt(), Ye());
  }
  function n1() {
    if (n || t !== "cutout") return;
    const c = kt();
    if (c) {
      ar(c), u.mode = "pano", w && ti() ? ls(P0(mb(_i(), c.position), Xy(), L.width, L.height)) : Vf(zt(Number(c.yaw_deg || 0)), De(Number(c.pitch_deg || 0), -89.9, 89.9)), it(), lt(), Ye({ cause: "cutout_frame" });
      return;
    }
    const m = Hg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: zt(Number(u.viewYaw || 0)),
      pitchDeg: Number(u.viewPitch || 0),
      viewFovDeg: Number(u.viewFov || 90)
    });
    y.shots = [m], ar(m), Xo(), u.mode = "pano", gt(), xt(), it(), lt(), Ye({ cause: "cutout_frame" });
  }
  function r1() {
    n || !P || pb() || (Lr(), y.camera = Ax(_i()), wi(), ar(kt()), Xo(), gt(), xt(), it(), lt(), Ye({ cause: "cutout_frame" }));
  }
  function i1() {
    Lr(), y.camera = null, ar(null), wi(), gt(), xt(), it(), lt(), Ye({ cause: "cutout_frame" });
  }
  function Gf(c, m) {
    P && bi(c) && (y.camera.projection = m === Eo ? "erp" : "perspective", m === Eo) || u1(c, m);
  }
  function o1() {
    n || t !== "cutout" || (y.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, y.active.selected_shot_id = null, gt(), xt(), it(), lt(), Ye());
  }
  function Wf(c, m, _ = "Clear") {
    return new Promise((E) => {
      j.confirmDialog = {
        visible: !0,
        title: String(c || ""),
        text: String(m || ""),
        confirmLabel: String(_ || "Confirm"),
        resolve: E
      };
    });
  }
  async function a1() {
    var _, E;
    if (n || !await Wf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    y.painting = Do(null), mr();
    const m = Zy();
    if (t === "stickers")
      y.stickers = S ? y.stickers.filter((D) => D.placement === "world" || m.includes(D)) : m, S || (y.assets = {}), u.selectedId = ((_ = m[0]) == null ? void 0 : _.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = ((E = m[0]) == null ? void 0 : E.id) || null, oo();
    else {
      const D = Sx(y.shots, y.active.selected_shot_id);
      y.stickers = m, y.assets = {}, y.shots = D.shots, u.selectedId = D.selectedShotId, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = null, y.active.selected_shot_id = D.selectedShotId, !D.selectedShotId && u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, oo();
    }
    gt(), xt(), it(), lt(), Ye();
  }
  async function s1(c) {
    var Y, le, _e, Se;
    if (n) return;
    const m = c === "mask" ? "mask" : "paint", _ = m === "mask" ? "Mask" : "Paint", E = ps(m);
    if (!(!E.length && !(((Y = u.interaction) == null ? void 0 : Y.kind) === "draw" && ((le = u.interaction) == null ? void 0 : le.layerKind) === m) || !await Wf(
      `Clear ${_}`,
      `This will remove all ${m} strokes in the current node.`,
      `Clear ${_}`
    ))) {
      if (((_e = u.interaction) == null ? void 0 : _e.kind) === "draw" && ((Se = u.interaction) == null ? void 0 : Se.layerKind) === m) {
        const Ke = Kn(u.interaction);
        Ke && u.paintEngine.cancelActiveStroke(Ke), u.interaction = null;
      }
      E.length = 0, y.painting.raster_objects = Tr().filter((Ke) => String((Ke == null ? void 0 : Ke.layerKind) || "paint") !== m), m === "paint" && (Zi().length = 0), mr(), gt(), xt(), it(), lt(), Rn(), Ye();
    }
  }
  function l1() {
    if (n) return;
    const c = Dn();
    if (!c || !ln(c) || yi(c) || S && hb(c)) return;
    let m;
    S ? m = $x(c, Oi("st"), rs()) : (m = JSON.parse(JSON.stringify(c)), m.id = Oi("st"), m.yaw_deg = zt((m.yaw_deg || 0) + 8), m.z_index = rs()), y.stickers.push(m), y.active.selected_sticker_id = m.id, u.selectedId = m.id, u.selectedIds = [m.id], fn(), gt(), xt(), lt(), it(), Ye();
  }
  function c1() {
    const c = uc();
    return c ? (zf(c) && (Lr(), Rx(y, c.id), bf(), fn(), gt(), xt(), it(), lt(), hc(), Ye()), !0) : !1;
  }
  function Kf() {
    var _, E, D, Y, le;
    if (n || w) return;
    const c = Yo(), m = Dn();
    if (!(!m && c.length === 0) && !c.some((_e) => hr(_e))) {
      if (Lr(), c.length > 1) {
        const _e = new Set(c.filter((Me) => Bn(Me)).map((Me) => String(Me.actionGroupId || Me.id || ""))), Se = new Set(c.filter((Me) => Dr(Me)).map((Me) => vi(Me.rasterObjectId || Me.id || ""))), Ke = new Set(c.filter(ln).map((Me) => String(Me.id || "")));
        _e.size > 0 && (y.painting.paint.strokes = (Array.isArray((E = (_ = y.painting) == null ? void 0 : _.paint) == null ? void 0 : E.strokes) ? y.painting.paint.strokes : []).filter((Me) => !_e.has(String((Me == null ? void 0 : Me.actionGroupId) || ""))), y.painting.groups = Zi().filter((Me) => !_e.has(String((Me == null ? void 0 : Me.actionGroupId) || (Me == null ? void 0 : Me.id) || ""))), mr()), Se.size > 0 && (y.painting.raster_objects = Tr().filter((Me) => !Se.has(String((Me == null ? void 0 : Me.id) || ""))), no()), Ke.size > 0 && (y.stickers = (Array.isArray(y.stickers) ? y.stickers : []).filter((Me) => Ke.has(String((Me == null ? void 0 : Me.id) || "")) ? yi(Me) ? (sc(Me) || (Me.visible = !1), !0) : !1 : !0), oo(), fn()), u.selectedId = null, u.selectedIds = [], gt(), xt(), it(), lt(), Ye();
        return;
      }
      if (Bn(m)) {
        const _e = String(m.actionGroupId || m.id || "").trim();
        y.painting.paint.strokes = (Array.isArray((Y = (D = y.painting) == null ? void 0 : D.paint) == null ? void 0 : Y.strokes) ? y.painting.paint.strokes : []).filter((Se) => String((Se == null ? void 0 : Se.actionGroupId) || "").trim() !== _e), y.painting.groups = Zi().filter((Se) => String((Se == null ? void 0 : Se.actionGroupId) || (Se == null ? void 0 : Se.id) || "").trim() !== _e), mr(), u.selectedId = null, u.selectedIds = [], gt(), xt(), it(), lt(), Ye();
        return;
      }
      if (Dr(m)) {
        const _e = vi(m.rasterObjectId || m.id || "");
        y.painting.raster_objects = Tr().filter((Se) => String((Se == null ? void 0 : Se.id) || "").trim() !== _e), no(), u.selectedId = null, u.selectedIds = [], gt(), xt(), it(), lt(), Ye();
        return;
      }
      if (P && bi(m)) {
        i1();
        return;
      }
      if (t === "stickers" || ln(m)) {
        if (yi(m)) {
          if (sc(m)) return;
          m.visible = !1, fn(), gt(), xt(), it(), lt(), Ye();
          return;
        }
        y.stickers = y.stickers.filter((_e) => _e.id !== m.id), oo(), fn(), u.selectedId = ((le = ts()[0]) == null ? void 0 : le.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], y.active.selected_sticker_id = u.selectedId, gt(), xt(), it(), lt(), Ye();
        return;
      }
      o1();
    }
  }
  function yc(c, m) {
    const _ = N.frameSafeRect;
    if (!c || !_ || u.mode !== "frame") return !1;
    const E = lu * Gi(_, c), D = Fd(Od(_, m), E);
    return c.hFOV_deg = D.hFOV_deg, c.vFOV_deg = D.vFOV_deg, !0;
  }
  function u1(c, m) {
    if (!c || c.locked === !0) return;
    const _ = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, E = (() => {
      const _e = String(c.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_e)) {
        const [Me, Oe] = _e.split(":").map((Ge) => Number(Ge));
        if (Number.isFinite(Me) && Number.isFinite(Oe)) return Me >= Oe;
      }
      const Se = Number(c.hFOV_deg || 64), Ke = Number(c.vFOV_deg || 40);
      return Math.abs(Se - Ke) > 1e-6 ? Se >= Ke : Yi(c) >= 1;
    })();
    let [D, Y] = _[String(m)] || _["1:1"];
    D >= Y !== E && ([D, Y] = [Y, D]);
    const le = D / Y;
    if (!yc(c, le)) {
      const _e = De(Number(c.vFOV_deg || 40), 1, 179);
      c.vFOV_deg = _e, c.hFOV_deg = $s(_e, le);
    }
    c.aspect_id = `${D}:${Y}`;
  }
  function d1(c, m, _) {
    if (!c || c.locked === !0) return !1;
    const E = Ga(m, _);
    if (!E) return !1;
    const D = E.ratio;
    if (!yc(c, D)) {
      const Y = De(Number(c.vFOV_deg || 40), 1, 179);
      c.vFOV_deg = Y, c.hFOV_deg = $s(Y, D);
    }
    return c.aspect_id = E.label, !0;
  }
  function Bf(c) {
    if (!c || c.locked === !0) return;
    const m = String(c.aspect_id || "").trim(), _ = pi(c), E = _.tanHalfX / Math.max(1e-12, _.tanHalfY), D = 1 / Math.max(1e-12, E);
    if (!yc(c, D)) {
      const Y = De(Number(c.vFOV_deg || 60), 1, 179);
      c.vFOV_deg = Y, c.hFOV_deg = $s(Y, D);
    }
    if (/^\d+:\d+$/.test(m)) {
      const [Y, le] = m.split(":");
      c.aspect_id = `${le}:${Y}`;
    } else
      c.aspect_id = Li(c);
  }
  function f1() {
    n || (y.projection_model = "pinhole_rectilinear", y.alpha_mode = "straight", s && (y.output_preset = b(Number(y.output_preset || 2048))), l && (y.coverage = En(l.value)), p && (y.bg_color = String(p.value || y.bg_color || "#00ff00")), Vn(), e.setDirtyCanvas(!0, !0));
  }
  function Vn() {
    var m;
    if (n) return;
    wi(), _0(y), y.coverage = En(y.coverage), v0(e, y.active);
    const c = S0(e, y);
    d && !w0(e, c, String(d.value ?? ""), { rebased: G }) && (d.value = c, (m = d.callback) == null || m.call(d, c));
  }
  const Uf = () => Vn();
  n || (e.__panoFlushStateBeforeQueue = Uf);
  function bc() {
    y.ui_settings = AI(y.ui_settings), n || Vn();
  }
  function xt() {
    var c;
    n || (Vn(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }
  function p1() {
    n || gb() && Tf().catch((c) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", c);
    });
  }
  function h1(c = {}) {
    var E, D, Y, le, _e, Se, Ke, Me, Oe, Ge;
    const m = c.syncPreview !== !1, _ = c.syncGraph !== !1;
    m && ((D = (E = e.__panoPreviewNodeRuntime) == null ? void 0 : E.requestDraw) == null || D.call(E), (le = (Y = e.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null || le.call(Y), (_e = e.setDirtyCanvas) == null || _e.call(e, !0, !1)), _ && ((Ke = (Se = e.graph) == null ? void 0 : Se.setDirtyCanvas) == null || Ke.call(Se, !0, !0), (Ge = (Oe = (Me = Zn) == null ? void 0 : Me.canvas) == null ? void 0 : Oe.setDirty) == null || Ge.call(Oe, !0, !0));
  }
  function Xo() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", Rn(), it());
  }
  function Yf() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function wi(c = !0) {
    var E, D;
    if (!G) return;
    const m = $;
    if (!yf()) {
      $ = null, (E = y.shots) != null && E.length && (y.shots = []), m && qf(m, null);
      return;
    }
    const _ = (D = y.shots) == null ? void 0 : D[0];
    c && _ && $ && Ix(y.camera, u.frame, _, $), $ = Oh(y.camera, u.frame), _ ? Object.assign(_, $, { position: [...$.position] }) : y.shots = [{ ...$, position: [...$.position] }], m || qf(null, $);
  }
  function qf(c, m) {
    var Y, le;
    !m && u.mode === "frame" && Xf(c);
    const _ = (m == null ? void 0 : m.position) ?? [0, 0, 0];
    if (((le = (Y = u.viewTransition) == null ? void 0 : Y.end) == null ? void 0 : le.mode) === "3dof") {
      ls({ ..._i(), position: _ }, u.viewTransition.end);
      return;
    }
    if (u.mode !== "pano" || u.spaceMode !== "3dof" || !Mf()) return;
    const E = (c == null ? void 0 : c.position) ?? [0, 0, 0];
    if (E.every((_e, Se) => _e === _[Se])) return;
    const D = { ..._i(), position: E };
    an({ mode: "6dof", position: E, moved: !0 }), u.viewDistance = D.distance, ls({ ...D, position: _ }, { mode: "3dof", moved: !1 });
  }
  function Xf(c) {
    if (u.mode = "pano", !c) return;
    ec();
    const m = _i().distance;
    u.viewYaw = zt(c.yaw_deg), u.viewPitch = De(c.pitch_deg, -89.9, 89.9), u.viewFov = De(c.hFOV_deg, 35, 140), u.spaceMode === "6dof" && an({ mode: "6dof", position: [...c.position], moved: !0 }), u.viewDistance = m, N.backgroundDirty = !0;
  }
  function kt() {
    if (!F) return null;
    const c = Array.isArray(y.shots) ? y.shots : [];
    if (!c.length) return null;
    const m = String(y.active.selected_shot_id || "");
    return c.find((_) => String((_ == null ? void 0 : _.id) || "") === m) || c[0] || null;
  }
  function m1() {
    var et, We, ht, Lt, tn;
    if (!L) return null;
    const c = (et = L.getBoundingClientRect) == null ? void 0 : et.call(L), m = Number((c == null ? void 0 : c.width) || 0) > 0 ? L.width / c.width : 1, _ = Number((c == null ? void 0 : c.height) || 0) > 0 ? L.height / c.height : 1;
    N.frameCanvasScale = Math.min(m, _);
    let E = 24, D = 24;
    const Y = Math.max(E + 1, L.width - 24);
    let le = Math.max(D + 1, L.height - 24);
    const _e = (We = x == null ? void 0 : x.getBoundingClientRect) == null ? void 0 : We.call(x), Se = (ht = M == null ? void 0 : M.getBoundingClientRect) == null ? void 0 : ht.call(M);
    let Ke = 24;
    _e && c && _e.width > 0 && _e.height > 0 && (Ke = Math.max(Ke, (_e.right - c.left) * m + _m)), Se && c && Se.width > 0 && Se.height > 0 && ((Lt = j.frameRail) == null ? void 0 : Lt.visible) === !0 && (Ke = Math.max(Ke, (c.right - Se.left) * m + _m)), E = Math.max(E, Ke);
    const Me = Math.min(Y, L.width - Ke);
    let Oe = 24;
    const Ge = (tn = Ce == null ? void 0 : Ce.getBoundingClientRect) == null ? void 0 : tn.call(Ce);
    if (Ge && c && Ge.width > 0 && Ge.height > 0 && (Oe = Math.max(Oe, (Ge.bottom - c.top) * _ + cu)), [be, I].forEach((It) => {
      var vr;
      if (!It || !c) return;
      const Un = getComputedStyle(It);
      if (Un.display === "none" || Un.visibility === "hidden" || Number(Un.opacity) <= 0) return;
      const br = (vr = It.getBoundingClientRect) == null ? void 0 : vr.call(It);
      !br || br.width <= 0 || br.height <= 0 || (Oe = Math.max(Oe, (c.bottom - br.top) * _ + cu));
    }), te && c) {
      const It = getComputedStyle(te);
      It.display !== "none" && It.visibility !== "hidden" && Number(It.opacity) > 0 && (Oe = Math.max(Oe, (cI + cu) * _));
    }
    return D = Math.max(D, Oe), le = Math.max(D + 1, Math.min(le, L.height - Oe)), {
      x: E,
      y: D,
      w: Math.max(1, Me - E),
      h: Math.max(1, le - D)
    };
  }
  function us(c = kt()) {
    if (!c || !L) return null;
    const m = N.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, L.width - 48),
      h: Math.max(1, L.height - 48)
    };
    return vw(m, c, lu * Gi(m, c));
  }
  function Rr(c = kt()) {
    const m = us(c);
    return m ? { x: m.x, y: m.y, w: m.w, h: m.h } : null;
  }
  function vc() {
    return F && !!kt();
  }
  function g1(c, m) {
    const _ = kt();
    if (!_ || _.locked === !0) return !1;
    const E = Number(m) > 0, D = Wg(_, m);
    if (!D) return !1;
    if (E) {
      const Y = lu * Gi(
        N.frameSafeRect || { w: L.width, h: L.height },
        D
      ), le = Td({ width: L.width, height: L.height }, Y);
      if (le.halfW < L.width * 0.5 - 1e-6 || le.halfH < L.height * 0.5 - 1e-6) return !1;
    }
    return _.hFOV_deg = D.hFOV_deg, _.vFOV_deg = D.vFOV_deg, Jf(), it(), !0;
  }
  function Jf() {
    u.frameWheelChanged = !0, u.frameWheelCommitTimer && window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = window.setTimeout(() => {
      u.frameWheelCommitTimer = 0, u.frameWheelChanged && (u.frameWheelChanged = !1, gt(), xt(), it());
    }, 180);
  }
  function _c() {
    return G && u.mode === "frame" && Mf();
  }
  function Jo() {
    const c = kt(), m = us(c);
    return c && m ? T0(c, m, { width: L.width, height: L.height }) : null;
  }
  function Zf() {
    var c;
    return ((c = tc()) == null ? void 0 : c.radius) || dr;
  }
  function Zo(c) {
    const { position: m, yaw_deg: _, pitch_deg: E, roll_deg: D, hFOV_deg: Y } = c.shot;
    return { position: m, yaw_deg: _, pitch_deg: E, roll_deg: D, hFOV_deg: Y, distance: Zf() };
  }
  function Qf(c, m) {
    const { rect: _ } = c;
    return Re.pickSurface(Ib(c.shot), m.x - _.x, m.y - _.y, _.w, _.h);
  }
  function ep(c, m, _) {
    return Lu(m, Qf(c, _), null, qo());
  }
  function tp(c) {
    return JSON.stringify([Zo(c), c.rect]);
  }
  function np(c) {
    const m = kt();
    m.position = [...c.position], m.yaw_deg = c.yaw_deg, m.pitch_deg = c.pitch_deg;
  }
  function rp(c, m) {
    const _ = kt();
    !_ || n || _.locked === !0 || (u.interaction = {
      kind: "pan_frame",
      shot: _,
      last: c,
      start: { yaw_deg: Number(_.yaw_deg || 0), pitch_deg: Number(_.pitch_deg || 0) },
      changed: !1
    }, Pt(c), L.setPointerCapture(m));
  }
  function y1(c, m, _) {
    const E = Jo();
    if (!E || n) return;
    const D = Zo(E);
    u.interaction = c === "orbit" ? { kind: "frame_orbit", last: m, pivot: ep(E, D, m), changed: !1 } : { kind: "frame_pan", last: m, depth: x0(D, qo()), changed: !1 }, Pt(m), L.setPointerCapture(_);
  }
  function b1(c, m) {
    const _ = Jo();
    if (!_) return;
    const E = Zo(_), D = m.x - c.last.x, Y = m.y - c.last.y;
    np(c.kind === "frame_pan" ? Dh(E, D, Y, _.rect.w, _.rect.h, c.depth) : Th(E, D, Y, L.height, c.pivot)), c.changed = c.changed || D !== 0 || Y !== 0, c.last = m, Ye({ localOnly: !0, cause: "frame_view" });
  }
  function v1(c, m) {
    const _ = Jo();
    if (!_ || n) return;
    const E = Zo(_), D = performance.now(), Y = { x: c.x, y: c.y, time: D, key: Re.contentRevision(), view: tp(_) };
    if (!k0(Ue, Y)) {
      const le = Qf(_, c);
      Ue = { ...Y, cost: performance.now() - D, hit: le };
    }
    np(M0(E, Lu(E, Ue.hit, null, qo()), m, qo())), Ue.view = tp(Jo() ?? _), Ue.wheelTime = D, Jf(), it(), Ye({ localOnly: !0, cause: "frame_view" });
  }
  function _1() {
    return u.frameWheelCommitTimer && (window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = 0), u.frameWheelChanged ? (u.frameWheelChanged = !1, gt(), xt(), it(), !0) : !1;
  }
  function Qo() {
    const c = u.interaction;
    if (!(c != null && c.shot) || !c.start || c.kind !== "pan_frame" && c.kind !== "roll_frame") return !1;
    const m = c.kind === "roll_frame";
    return c.kind === "pan_frame" ? (c.shot.yaw_deg = c.start.yaw_deg, c.shot.pitch_deg = c.start.pitch_deg) : c.shot.roll_deg = c.start.roll_deg, m && xi(), u.interaction = null, eo(), ii(), it(), Pt(u.pointerPos), Ye({ localOnly: !0 }), !0;
  }
  function S1(c, m) {
    const _ = Number(m || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, _ / 2048)
    };
  }
  function ao(c) {
    const m = String(c || "").trim();
    return m === "eraser" ? jr : Cn[m] ? m : u.activeBrushPresetId || jr;
  }
  function ip() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (Yf() || vc());
  }
  function op() {
    var c;
    return ip() && ((c = u.pointerPos) == null ? void 0 : c.inside) === !0;
  }
  function ds(c, m = !0) {
    const _ = Number((c == null ? void 0 : c.x) || 0), E = Number((c == null ? void 0 : c.y) || 0), D = m !== !1, Y = u.pointerPos || { x: 0, y: 0, inside: !1 }, le = Y.inside !== D || Math.abs(Y.x - _) > 0.01 || Math.abs(Y.y - E) > 0.01;
    return u.pointerPos = { x: _, y: E, inside: D }, le;
  }
  function w1() {
    var Me, Oe;
    if (!op()) return null;
    const c = u.primaryTool === "mask" ? "mask" : "paint", m = c === "mask" ? u.maskTool : u.paintTool, _ = ao(m), E = Cn[_] || Cn[jr], D = Number(u.brushSizes[_] ?? 10), Y = Math.max(1, D) * Math.max(0.1, Number(E.sizeScale ?? 1)), le = Math.max(3, Y * 0.5), _e = c === "mask" ? m === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : m === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(u.paintColor), Se = c === "mask" ? m === "lasso_fill" ? 0.18 : 0.2 : m === "eraser" ? 0.06 : De(Math.max(0.16, Number(_e.a ?? 1) * 0.3), 0.16, 0.52), Ke = c === "mask" ? 0.95 : m === "eraser" ? 0.75 : De(Math.max(0.46, Number(_e.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: c,
      toolKind: m,
      preset: E,
      radius: le,
      fillStyle: Sr(_e, Se),
      strokeStyle: Sr(_e, Ke),
      x: Number(((Me = u.pointerPos) == null ? void 0 : Me.x) || 0),
      y: Number(((Oe = u.pointerPos) == null ? void 0 : Oe.y) || 0),
      hotspotX: le,
      hotspotY: le
    };
  }
  function x1() {
    var Ge, et, We;
    const c = w1();
    if (!He) return;
    if (!c) {
      He.style.display = "none";
      return;
    }
    let m = c.radius * 2, _ = c.radius * 2, E = "999px", D = 0, Y = c.fillStyle, le = "1px solid rgba(222, 222, 222, 0.72)", _e = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const Se = "rgba(222, 222, 222, 0.72)", Ke = "rgba(52, 52, 52, 0.72)";
    let Me = Number(c.hotspotX ?? m * 0.5), Oe = Number(c.hotspotY ?? _ * 0.5);
    if (c.toolKind === "lasso_fill")
      m = Il, _ = Il, E = "0", le = "0", _e = "none", Me = fI, Oe = pI, Y = _I(c.fillStyle, Ke, Se);
    else if (c.layerKind === "mask")
      Y = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (c.toolKind === "marker") {
      const ht = Math.max(1, Number(((Ge = c.preset) == null ? void 0 : Ge.aspect) ?? 1));
      m = Math.max(10, c.radius * 2 * ht), _ = Math.max(6, c.radius * 2), E = `${Math.min(6, _ * 0.42)}px`, D = Number(((We = (et = c.preset) == null ? void 0 : et.angle) == null ? void 0 : We.value) || 0) * Vi;
    } else c.toolKind === "brush" ? Y = `radial-gradient(circle at 50% 50%, ${c.strokeStyle} 0%, ${c.fillStyle} 45%, rgba(0,0,0,0) 100%)` : c.toolKind === "eraser" && (Y = "rgba(255,255,255,0.14)");
    He.style.display = "block", He.style.width = `${Math.round(m)}px`, He.style.height = `${Math.round(_)}px`, He.style.borderRadius = E, He.style.border = le, He.style.boxShadow = _e, He.style.background = Y, He.style.backgroundRepeat = "no-repeat", He.style.backgroundPosition = "center", He.style.backgroundSize = "contain", He.style.transform = `translate(${Math.round(c.x - Me)}px, ${Math.round(c.y - Oe)}px) rotate(${D}deg)`;
  }
  function k1() {
    var It;
    if (!re || !R) return;
    const c = u.primaryTool === "mask" ? "mask" : "paint", m = c === "mask" ? u.maskTool : u.paintTool;
    if (m === "lasso_fill") return;
    const _ = ao(m), E = Cn[_] || Cn[jr], D = Number(u.brushSizes[_] ?? 10), Y = Math.max(1, D) * Math.max(0.1, Number(E.sizeScale ?? 1)), le = Math.max(6, Y * 0.5), _e = m === "eraser", Se = c === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _e ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(u.paintColor), Ke = c === "mask" ? Sr(Se, 0.22) : _e ? "rgba(255,255,255,0.14)" : Sr(Se, De(Math.max(0.18, Number(Se.a ?? 1) * 0.34), 0.18, 0.56)), Me = c === "mask" ? Sr(Se, 0.96) : _e ? "rgba(255,255,255,0.72)" : Sr(Se, De(Math.max(0.56, Number(Se.a ?? 1) * 0.96), 0.56, 1));
    let Oe = le * 2, Ge = le * 2, et = "999px", We = 0, ht = Ke;
    const Lt = "rgba(222, 222, 222, 0.72)", tn = "rgba(52, 52, 52, 0.72)";
    if (c === "mask")
      ht = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (m === "marker") {
      const Un = Math.max(1, Number((E == null ? void 0 : E.aspect) ?? 1));
      Oe = Math.max(16, le * 2 * Un), Ge = Math.max(10, le * 2), et = `${Math.min(8, Ge * 0.42)}px`, We = Number(((It = E == null ? void 0 : E.angle) == null ? void 0 : It.value) || 0) * Vi;
    } else m === "brush" ? ht = `radial-gradient(circle at 50% 50%, ${Me} 0%, ${Ke} 48%, rgba(0,0,0,0) 100%)` : m === "lasso_fill" ? (Oe = Math.max(18, le * 1.8), Ge = Oe, ht = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${Me} 43%, ${Me} 58%, rgba(0,0,0,0) 59%)`) : _e && (ht = "rgba(255,255,255,0.12)");
    R.style.width = `${Math.round(Oe)}px`, R.style.height = `${Math.round(Ge)}px`, R.style.borderRadius = et, R.style.background = ht, R.style.border = `1px solid ${Lt}`, R.style.boxShadow = `0 0 0 1px ${tn}`, R.style.transform = `rotate(${We}deg)`, je && (clearTimeout(je), je = 0), re.classList.remove("fade-out"), re.classList.add("show");
  }
  function fs() {
    !re || !re.classList.contains("show") || (re.classList.add("fade-out"), je && clearTimeout(je), je = window.setTimeout(() => {
      re.classList.remove("show", "fade-out"), je = 0;
    }, 180));
  }
  function ap(c, m, _, E) {
    const D = ao(m), Y = Cn[D] || Cn[jr], le = u.brushSizes[D] ?? 10, _e = Math.max(1, le) * Math.max(0.1, Y.sizeScale ?? 1), Se = S1(E, _e), Ke = _.map((Oe) => ({
      ...Oe,
      t: Number((Oe == null ? void 0 : Oe.t) || 0),
      widthScale: Number.isFinite(Number(Oe == null ? void 0 : Oe.widthScale)) ? Math.max(0, Number(Oe.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Oe == null ? void 0 : Oe.pressureLike)) ? Math.max(0, Number(Oe.pressureLike)) : 1
    })), Me = {
      id: vo(c),
      actionGroupId: vo("ag"),
      targetSpace: E && typeof E == "object" ? { ...E, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: c,
      toolKind: m,
      size: _e,
      createdAt: Date.now(),
      color: c === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: Se.radiusModel,
      radiusValue: Se.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: Ke.map((Oe) => ({ ...Oe })),
        points: Ke.map((Oe) => ({ ...Oe }))
      }
    };
    return bm(Me, Y), u.mode, Number(Y.aspect ?? 1), Number(Me.aspect ?? 1), String(Me.stampKind || ""), Number(Me.size || 0), String(Me.radiusModel || ""), Number(Me.radiusValue || 0), { ...Me.targetSpace }, Me;
  }
  function sp(c, m, _, E) {
    const D = _.map((Se) => ({
      ...Se,
      t: Number((Se == null ? void 0 : Se.t) || 0),
      widthScale: Number.isFinite(Number(Se == null ? void 0 : Se.widthScale)) ? Math.max(0, Number(Se.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(Se == null ? void 0 : Se.pressureLike)) ? Math.max(0, Number(Se.pressureLike)) : 1
    })), Y = ao(m), le = Cn[Y] || Cn[jr], _e = {
      id: vo(c),
      actionGroupId: vo("ag"),
      targetSpace: E && typeof E == "object" ? { ...E, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: c,
      toolKind: m,
      size: 10,
      createdAt: Date.now(),
      color: c === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: D.map((Se) => ({ ...Se }))
      }
    };
    return bm(_e, le), u.mode, Number(le.aspect ?? 1), Number(_e.aspect ?? 1), String(_e.stampKind || ""), { ..._e.targetSpace }, _e;
  }
  function ps(c) {
    const m = y.painting || (y.painting = Do(null)), _ = m[c] || (m[c] = { strokes: [] });
    return Array.isArray(_.strokes) || (_.strokes = []), _.strokes;
  }
  function M1(c, m, _ = performance.now()) {
    let E;
    if (u.mode === "frame") {
      const Ke = kt();
      if (!Ke || (E = or(m, Ke, _), !E)) return !1;
    } else
      E = gr(m, _);
    if (!E) return !1;
    const D = c.stroke.geometry.rawPoints || c.stroke.geometry.points, Y = c.stroke.geometry.points, le = D[D.length - 1];
    if (le) {
      const Ke = Math.abs(Number(E.u ?? E.x ?? 0) - Number(le.u ?? le.x ?? 0)), Me = Math.abs(Number(E.v ?? E.y ?? 0) - Number(le.v ?? le.y ?? 0));
      if (Ke < 15e-4 && Me < 15e-4) return !1;
    }
    const _e = {
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    D.push({ ..._e }), Y.push({ ..._e });
    const Se = Kn(c);
    if (Se) {
      const Ke = u.paintEngine.ensureTarget(Se);
      u.paintEngine.appendStrokePoint(Ke, Number(_e.u ?? 0), Number(_e.v ?? 0), c.stroke);
    }
    return !0;
  }
  function P1(c, m, _ = performance.now()) {
    var le, _e;
    let E;
    if (u.mode === "frame") {
      const Se = kt();
      if (!Se) return !1;
      E = or(m, Se, _);
    } else
      E = gr(m, _);
    const D = (_e = (le = c == null ? void 0 : c.stroke) == null ? void 0 : le.geometry) == null ? void 0 : _e.points;
    if (!E || !Array.isArray(D)) return !1;
    const Y = D[D.length - 1];
    if (Y) {
      const Se = Math.abs(Number(E.u ?? E.x ?? 0) - Number(Y.u ?? Y.x ?? 0)), Ke = Math.abs(Number(E.v ?? E.y ?? 0) - Number(Y.v ?? Y.y ?? 0));
      if (Se < 15e-4 && Ke < 15e-4) return !1;
    }
    return D.push({
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function N1(c) {
    var Un, br, vr, ta, na;
    const m = (c == null ? void 0 : c.stroke) || null;
    if (!m || (c == null ? void 0 : c.layerKind) !== "paint" || String((m == null ? void 0 : m.toolKind) || "") !== "eraser") return !1;
    wb();
    const _ = Kn(), E = vf(_.width, _.height);
    if (!Sb(E, m, { w: _.width, h: _.height })) return !1;
    const D = ((br = (Un = E.ctx) == null ? void 0 : Un.getImageData(0, 0, _.width, _.height)) == null ? void 0 : br.data) || null;
    if (!D) return !1;
    const Y = new Map(Zi().map((Ze) => [String((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "").trim(), Ze ? { ...Ze } : null])), le = [], _e = [], Se = [...Tr().filter((Ze) => String((Ze == null ? void 0 : Ze.layerKind) || "paint") !== "paint")];
    let Ke = !1, Me = sb().reduce((Ze, Je) => Math.max(Ze, Number((Je == null ? void 0 : Je.z_index) || 0)), -1) + 1;
    function Oe(Ze, Je, tt, ot = 8) {
      let rt = Je, Mt = tt, _t = -1, $t = -1;
      for (let St = 0; St < tt; St += 1)
        for (let Qt = 0; Qt < Je; Qt += 1)
          Ze[(St * Je + Qt) * 4 + 3] <= ot || (Qt < rt && (rt = Qt), St < Mt && (Mt = St), Qt > _t && (_t = Qt), St > $t && ($t = St));
      return _t < rt || $t < Mt ? null : { minX: rt, minY: Mt, maxX: _t, maxY: $t };
    }
    const Ge = Oe(D, _.width, _.height, 8);
    if (!Ge) return !1;
    function et(Ze, Je) {
      return !Ze || !Je ? !1 : !(Ze.maxX < Je.minX || Je.maxX < Ze.minX || Ze.maxY < Je.minY || Je.maxY < Ze.minY);
    }
    function We(Ze, Je) {
      const tt = Ji((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "", "paint", Je);
      if (!tt) return null;
      const ot = tt.centerUv.u - tt.halfW, rt = tt.centerUv.u + tt.halfW, Mt = tt.centerUv.v - tt.halfH, _t = tt.centerUv.v + tt.halfH, $t = _.width, St = _.height;
      return {
        minX: Math.floor((ot % 1 + 1) % 1 * $t),
        maxX: Math.ceil((rt % 1 + 1) % 1 * $t),
        minY: Math.floor(De(Mt, 0, 1) * St),
        maxY: Math.ceil(De(_t, 0, 1) * St),
        wraps: rt - ot >= 1 || ot < 0 || rt > 1
      };
    }
    function ht(Ze) {
      const Je = (Ze == null ? void 0 : Ze.bbox) || null;
      if (!Je) return null;
      const tt = (Ze == null ? void 0 : Ze.transform) || {}, ot = _.width, rt = _.height, Mt = Number(Je.u0 || 0) + Number(tt.du || 0), _t = Number(Je.u1 || 0) + Number(tt.du || 0), $t = Number(Je.v0 || 0) + Number(tt.dv || 0), St = Number(Je.v1 || 0) + Number(tt.dv || 0);
      return {
        minX: Math.floor((Mt % 1 + 1) % 1 * ot),
        maxX: Math.ceil((_t % 1 + 1) % 1 * ot),
        minY: Math.floor(De($t, 0, 1) * rt),
        maxY: Math.ceil(De(St, 0, 1) * rt),
        wraps: _t - Mt >= 1 || Mt < 0 || _t > 1
      };
    }
    function Lt(Ze) {
      return Ze ? Ze.wraps ? et(Ge, { minX: 0, maxX: Ze.maxX, minY: Ze.minY, maxY: Ze.maxY }) || et(Ge, { minX: Ze.minX, maxX: _.width - 1, minY: Ze.minY, maxY: Ze.maxY }) : et(Ge, Ze) : !0;
    }
    function tn(Ze) {
      if (!Ze) return { touched: !1, canvas: null };
      const Je = vf(_.width, _.height, { readback: !0 });
      Je.ctx.drawImage(Ze, 0, 0);
      const tt = Je.ctx.getImageData(0, 0, _.width, _.height);
      Je.ctx.save(), Je.ctx.globalCompositeOperation = "destination-out", Je.ctx.drawImage(E.canvas, 0, 0), Je.ctx.restore();
      const ot = Je.ctx.getImageData(0, 0, _.width, _.height);
      for (let rt = 0; rt < _.width * _.height; rt += 1) {
        if (D[rt * 4 + 3] <= 8) continue;
        const _t = tt.data[rt * 4 + 3], $t = ot.data[rt * 4 + 3];
        if (_t > $t)
          return { touched: !0, canvas: Je.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function It(Ze, Je, tt) {
      const ot = Number(tt == null ? void 0 : tt.z_index), rt = Qy(Ze, Je, tt).map((Mt, _t) => ({
        ...Mt,
        z_index: Number.isFinite(ot) ? ot + _t * 1e-3 : Me + _t * 1e-3
      }));
      return rt.length && (Me = Math.max(Me, ...rt.map((Mt) => Number((Mt == null ? void 0 : Mt.z_index) || 0))) + 1), rt;
    }
    for (const Ze of Zi()) {
      const Je = String((Ze == null ? void 0 : Ze.actionGroupId) || (Ze == null ? void 0 : Ze.id) || "").trim();
      if (!Je) continue;
      const tt = Qi(Je, "paint");
      if (!Lt(We(Ze, tt))) {
        _e.push(Ze), le.push(...tt);
        continue;
      }
      const ot = ((ta = (vr = u.paintEngine) == null ? void 0 : vr.getGroupTarget) == null ? void 0 : ta.call(vr, Je)) || null, rt = ((na = ot == null ? void 0 : ot.committedPaint) == null ? void 0 : na.canvas) || null;
      if (!rt) {
        _e.push(Ze), le.push(...tt);
        continue;
      }
      const Mt = tn(rt);
      if (!Mt.touched || !Mt.canvas) {
        _e.push(Ze), le.push(...tt);
        continue;
      }
      Ke = !0;
      const _t = It(Mt.canvas, "paint", Y.get(Je) || Ze || {});
      Se.push(..._t);
    }
    for (const Ze of Tr().filter((Je) => String((Je == null ? void 0 : Je.layerKind) || "paint") === "paint")) {
      if (!Lt(ht(Ze))) {
        Se.push(Ze);
        continue;
      }
      const Je = Ko(Ze, null);
      if (!Je) {
        Se.push(Ze);
        continue;
      }
      const tt = tn(Je);
      if (!tt.touched || !tt.canvas) {
        Se.push(Ze);
        continue;
      }
      Ke = !0;
      const ot = It(tt.canvas, "paint", Ze);
      Se.push(...ot);
    }
    return Ke ? (y.painting.paint.strokes = le, y.painting.groups = _e.sort((Ze, Je) => Number((Ze == null ? void 0 : Ze.z_index) || 0) - Number((Je == null ? void 0 : Je.z_index) || 0)), y.painting.raster_objects = Se.sort((Ze, Je) => Number((Ze == null ? void 0 : Ze.z_index) || 0) - Number((Je == null ? void 0 : Je.z_index) || 0)), Bo({ preservePanelValues: !1 }), !0) : !1;
  }
  function A1(c) {
    var le, _e, Se, Ke, Me;
    if ((((_e = (le = c.stroke) == null ? void 0 : le.geometry) == null ? void 0 : _e.rawPoints) || ((Ke = (Se = c.stroke) == null ? void 0 : Se.geometry) == null ? void 0 : Ke.points) || []).length >= 1) {
      Sc(c);
      const Oe = Kn(c);
      Oe && (String(((Me = c.stroke) == null ? void 0 : Me.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(Oe) : u.paintEngine.commitActiveStroke(c.stroke, Oe)), c._hasCommittedSegments = !0;
    }
    const _ = c.stroke, E = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, D = ap(c.layerKind, _.toolKind, [], E);
    D.actionGroupId = _.actionGroupId, c.stroke = D;
    const Y = Kn(c);
    Y && u.paintEngine.beginStroke(D, Y);
  }
  function C1(c) {
    var le, _e;
    if ((((_e = (le = c.stroke) == null ? void 0 : le.geometry) == null ? void 0 : _e.points) || []).length >= 3) {
      Sc(c);
      const Se = Kn(c);
      Se && u.paintEngine.commitActiveStroke(c.stroke, Se), c._hasCommittedSegments = !0;
    }
    const _ = c.stroke, E = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, D = sp(c.layerKind, _.toolKind, [], E);
    D.actionGroupId = _.actionGroupId, c.stroke = D;
    const Y = Kn(c);
    Y && u.paintEngine.beginStroke(D, Y);
  }
  function Sc(c) {
    var Y, le, _e, Se;
    const m = ((Y = c == null ? void 0 : c.stroke) == null ? void 0 : Y.geometry) || null;
    if (!m) return !1;
    const _ = String(((le = c == null ? void 0 : c.stroke) == null ? void 0 : le.toolKind) || "pen");
    if (c.layerKind === "paint" && _ === "eraser")
      return m.geometryKind !== "lasso_fill" && (m.processedPoints = Cf(m.rawPoints || m.points || [], c.stroke.targetSpace, !0)), N1(c);
    const E = c.layerKind === "paint" && _ !== "eraser";
    if (m.geometryKind === "lasso_fill")
      return (Array.isArray(m.points) ? m.points : []).length < 3 ? !1 : (E && _f((_e = c.stroke) == null ? void 0 : _e.actionGroupId), ps(c.layerKind).push(c.stroke), !0);
    const D = m.rawPoints || m.points || [];
    return D.length < 1 ? !1 : (m.processedPoints = Cf(D, c.stroke.targetSpace, !0), E && _f((Se = c.stroke) == null ? void 0 : Se.actionGroupId), ps(c.layerKind).push(c.stroke), !0);
  }
  function lp(c) {
    var _;
    if (F && u.mode === "frame") {
      const E = kt(), D = Rr(E);
      if (!E || !D || !(Number((c == null ? void 0 : c.x) || 0) >= Number(D.x || 0) && Number((c == null ? void 0 : c.x) || 0) <= Number(D.x || 0) + Number(D.w || 0) && Number((c == null ? void 0 : c.y) || 0) >= Number(D.y || 0) && Number((c == null ? void 0 : c.y) || 0) <= Number(D.y || 0) + Number(D.h || 0))) return null;
      const le = or(c, E, performance.now()), _e = le ? nb(le) : null;
      if (_e)
        for (const Ke of rc()) {
          if (!ln(Ke)) continue;
          const Me = $f(Ke, _e);
          if (Me && Number(Me.x) >= 0 && Number(Me.x) <= 1 && Number(Me.y) >= 0 && Number(Me.y) <= 1) {
            const Oe = cn(Ke);
            if (Oe != null && Oe.visible) return { item: Ke, geom: Oe };
          }
        }
      const Se = wf(!1).slice().sort((Ke, Me) => Number((Me == null ? void 0 : Me.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
      for (const Ke of Se) {
        if (Ke.type === "strokeGroup") {
          const Ge = kf(Af("paint", Ke.actionGroupId || Ke.id || ""));
          if (!Ge) continue;
          const et = cn(Ge);
          if (!(et != null && et.visible)) continue;
          const We = Array.isArray(et.strokePaths) ? et.strokePaths : [];
          for (const ht of We) {
            const Lt = Array.isArray(ht == null ? void 0 : ht.points) ? ht.points : [];
            if (!Lt.length) continue;
            if (ht.closed && Lt.length >= 3 && ai(c, Lt)) return { item: Ge, geom: et };
            const tn = Math.max(8, Number((ht == null ? void 0 : ht.lineWidth) || 0) * 0.5 + 6);
            for (let It = 0; It < Lt.length - 1; It += 1)
              if (fu(c, Lt[It], Lt[It + 1]) <= tn * tn) return { item: Ge, geom: et };
            if (Lt.length === 1 && va(c, Lt[0]) <= tn * tn) return { item: Ge, geom: et };
          }
          continue;
        }
        if (Ke.type === "rasterObject") {
          const Ge = xf(Nf(((_ = Ke.item) == null ? void 0 : _.id) || Ke.id || ""));
          if (!Ge) continue;
          const et = cn(Ge);
          if (Pf(Ge, et, c, le)) return { item: Ge, geom: et };
          continue;
        }
        const Me = Ke.item;
        if (!Me || !ln(Me) || !_e) continue;
        const Oe = $f(Me, _e);
        if (Oe && Number(Oe.x) >= 0 && Number(Oe.x) <= 1 && Number(Oe.y) >= 0 && Number(Oe.y) <= 1) {
          const Ge = cn(Me);
          if (Ge != null && Ge.visible) return { item: Me, geom: Ge };
        }
      }
      return null;
    }
    const m = [
      ...wf(!1).slice().sort((E, D) => Number((D == null ? void 0 : D.z_index) || 0) - Number((E == null ? void 0 : E.z_index) || 0)).map((E) => {
        var D;
        return E.type === "strokeGroup" ? kf(Af("paint", E.actionGroupId || E.id || "")) : E.type === "rasterObject" ? xf(Nf(((D = E.item) == null ? void 0 : D.id) || E.id || "")) : E.item;
      }).filter(Boolean),
      ...F ? rc().filter((E) => bi(E)) : []
    ];
    for (const E of m) {
      if (Bn(E)) {
        const Y = cn(E);
        if (!(Y != null && Y.visible)) continue;
        const le = Array.isArray(Y.strokePaths) ? Y.strokePaths : [];
        for (const _e of le) {
          const Se = Array.isArray(_e == null ? void 0 : _e.points) ? _e.points : [];
          if (!Se.length) continue;
          if (_e.closed && Se.length >= 3 && ai(c, Se)) return { item: E, geom: Y };
          const Ke = Math.max(8, Number((_e == null ? void 0 : _e.lineWidth) || 0) * 0.5 + 6);
          for (let Me = 0; Me < Se.length - 1; Me += 1)
            if (fu(c, Se[Me], Se[Me + 1]) <= Ke * Ke) return { item: E, geom: Y };
          if (Se.length === 1 && va(c, Se[0]) <= Ke * Ke) return { item: E, geom: Y };
        }
        continue;
      }
      if (Dr(E)) {
        const Y = cn(E);
        if (!(Y != null && Y.visible)) continue;
        if (Pf(E, Y, c)) return { item: E, geom: Y };
        continue;
      }
      const D = cn(E);
      if (D.visible && ai(c, D.corners))
        return { item: E, geom: D };
    }
    return null;
  }
  function ea(c, m, _ = null) {
    if (!c || !c.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (ln(_)) return Uu(c, m);
    if (c.kind === "strokeGroup") {
      const E = c.corners.findIndex((Y) => va(Y, m) <= 121);
      if (E >= 0) {
        const Y = c.corners[E], le = Y.x - c.center.x, _e = Y.y - c.center.y, Se = le * _e >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: E, cursor: Se };
      }
      const D = Array.isArray(c.strokePaths) ? c.strokePaths : [];
      for (const Y of D) {
        const le = Array.isArray(Y == null ? void 0 : Y.points) ? Y.points : [];
        if (Y.closed && le.length >= 3 && ai(m, le)) return { kind: "move", cursor: "default" };
        const _e = Math.max(8, Number((Y == null ? void 0 : Y.lineWidth) || 0) * 0.5 + 6);
        for (let Se = 0; Se < le.length - 1; Se += 1)
          if (fu(m, le[Se], le[Se + 1]) <= _e * _e) return { kind: "move", cursor: "default" };
      }
      return ai(m, c.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (c.kind === "rasterObject") {
      const E = c.corners.findIndex((D) => va(D, m) <= 121);
      if (E >= 0) {
        const D = c.corners[E], Y = D.x - c.center.x, le = D.y - c.center.y, _e = Y * le >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: E, cursor: _e };
      }
      return ai(m, c.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    return OM(c, m, {
      edges: t === "cutout" || bi(_),
      resize: !(bi(_) && ac()),
      emptyCursor: u.mode === "pano" ? "grab" : "default"
    });
  }
  function cp(c, m) {
    return {
      x0: Math.min(Number((c == null ? void 0 : c.x) || 0), Number((m == null ? void 0 : m.x) || 0)),
      y0: Math.min(Number((c == null ? void 0 : c.y) || 0), Number((m == null ? void 0 : m.y) || 0)),
      x1: Math.max(Number((c == null ? void 0 : c.x) || 0), Number((m == null ? void 0 : m.x) || 0)),
      y1: Math.max(Number((c == null ? void 0 : c.y) || 0), Number((m == null ? void 0 : m.y) || 0))
    };
  }
  function I1(c, m) {
    return !!c && !!m && Number(m.x) >= Number(c.x0) && Number(m.x) <= Number(c.x1) && Number(m.y) >= Number(c.y0) && Number(m.y) <= Number(c.y1);
  }
  function E1(c, m) {
    if (!c || !(m != null && m.visible) || !Array.isArray(m.corners)) return !1;
    if (m.corners.some((D) => I1(c, D))) return !0;
    const _ = (Number(c.x0) + Number(c.x1)) * 0.5, E = (Number(c.y0) + Number(c.y1)) * 0.5;
    return !!ai({ x: _, y: E }, m.corners);
  }
  function Pt(c) {
    if (x1(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? Be("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" ? Be("grabbing") : u.interaction.kind === "space_pan" || u.interaction.kind === "frame_pan" ? Be("move") : u.interaction.kind === "space_orbit" || u.interaction.kind === "frame_orbit" || u.interaction.kind === "world_gizmo" || u.interaction.kind === "roll_frame" ? Be("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? Be("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? Be(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? Be("grabbing") : Be("default");
      return;
    }
    if (op()) {
      Be("none");
      return;
    }
    if (u.mode === "frame") {
      if (u.altModifier && !n) {
        Be(lI);
        return;
      }
      if (u.primaryTool !== "cursor") {
        Be("default");
        return;
      }
      Be("grab");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      Be("default");
      return;
    }
    if (u.gizmoAxis) {
      Be("grab");
      return;
    }
    const m = Dn(), _ = m ? cn(m) : null, E = m ? hr(m) : !1, D = E ? { kind: "none", cursor: "default" } : ea(_, c, m);
    if (!E && D.kind !== "none") {
      Be(D.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && lp(c)) {
      Be("default");
      return;
    }
    Be(u.mode === "pano" ? "grab" : "default");
  }
  function O1() {
    return ne;
  }
  function lt() {
    if (!Z) return;
    if (ne = !1, u.mode === "frame") {
      j.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (u.worldSelectedId || to() && ti()) {
      const D = F1();
      ne = D.visible, up(D);
      return;
    }
    const c = Dn(), m = Yo();
    if (!c && m.length === 0 || u.interaction) {
      j.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const _ = ic(), E = GN({
      type: t,
      selected: c,
      selectedItems: m,
      selectedKind: _,
      geom: m.length > 1 ? ns(m) : cn(c),
      allLocked: Ja(m),
      anyLocked: m.some((D) => hr(D)),
      selectedLocked: hr(c),
      activeAspect: bi(c) && ac() ? Eo : Br(c),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: yi,
      isStickerHidden: sc,
      canRestoreSelectedToInitial: Jy,
      iconSet: Xe,
      cameraShot: G,
      cameraDeletable: P,
      erpChoice: P,
      coverage: y.coverage
    });
    up(E);
  }
  function F1() {
    const c = os() && !u.interaction ? es().space : null;
    if (!(c != null && c.gizmo)) return { visible: !1 };
    const m = Uo(), _ = c.stickers.find((le) => le.id === u.worldSelectedId), D = (_ ? Jd(_) : [c.gizmo.transform.position]).map((le) => Ha(m, le, L.width, L.height)).filter(Boolean), Y = fk(m, c.gizmo.transform.position, c.gizmo.mode, L.width, L.height);
    return WN({ corners: D, gizmoBox: Y, gizmoMode: c.gizmo.mode, camera: to(), deletable: P && to() });
  }
  function up(c) {
    var Y, le;
    if (!c.visible) {
      j.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const m = (_e, Se) => KN(c.anchor, _e, Se, L.width, L.height), _ = Math.max(1, Number(((Y = u.menuSize) == null ? void 0 : Y.w) || 220)), E = Math.max(1, Number(((le = u.menuSize) == null ? void 0 : le.h) || 40)), D = m(_, E);
    if (!D) {
      j.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    j.selectionMenu = {
      visible: !0,
      left: D.left,
      top: D.top,
      items: c.items
    }, ye.requestFrame(() => {
      if (!Z || j.selectionMenu.visible !== !0) return;
      const _e = Z.getBoundingClientRect(), Se = Math.round(Number((_e == null ? void 0 : _e.width) || 0)) || 220, Ke = Math.round(Number((_e == null ? void 0 : _e.height) || 0)) || 40;
      u.menuSize = { w: Se, h: Ke, measured: !0 };
      const Me = m(Se, Ke);
      Me && (j.selectionMenu.left = Me.left, j.selectionMenu.top = Me.top);
    });
  }
  function xi() {
    Qe.timer && (clearTimeout(Qe.timer), Qe.timer = 0), Qe.target = null, j.tooltip.visible = !1;
  }
  function T1(c) {
    if (!C || !c || !c.isConnected) return;
    const m = String(c.getAttribute("data-tip") || "").trim();
    if (!m) return;
    j.tooltip.text = m, j.tooltip.visible = !0;
    const _ = c;
    ye.requestFrame(() => {
      var ht, Lt;
      if (Qe.target !== _ || !C || !(_ != null && _.isConnected)) return;
      const E = ge.getBoundingClientRect(), D = _.getBoundingClientRect(), Y = 8, le = 12, _e = Math.round(Number(((ht = C.getBoundingClientRect()) == null ? void 0 : ht.width) || 0)) || 100, Se = Math.round(Number(((Lt = C.getBoundingClientRect()) == null ? void 0 : Lt.height) || 0)) || 24, Ke = !!_.closest(".pano-floating-left"), Me = !!_.closest(".pano-frame-rail"), Oe = !!_.closest(".pano-paint-footer") || !!_.closest(".pano-paint-color-float");
      let Ge = "", et = D.left - E.left + D.width * 0.5 - _e * 0.5, We = D.top - E.top - Se - le;
      if (_.closest(".pano-floating-top") && (We = D.bottom - E.top + le), Ke)
        Ge = "tool-rail", et = D.right - E.left + 10, We = D.top - E.top + D.height * 0.5 - Se * 0.5, et = De(et, Y, Math.max(Y, E.width - _e - Y)), We = De(We, Y, Math.max(Y, E.height - Se - Y));
      else if (Me)
        Ge = "frame-rail", et = D.left - E.left - _e - 10, We = D.top - E.top + D.height * 0.5 - Se * 0.5, et = De(et, Y, Math.max(Y, E.width - _e - Y)), We = De(We, Y, Math.max(Y, E.height - Se - Y));
      else if (Oe) {
        Ge = "footer";
        const tn = _.closest(".pano-paint-footer"), It = tn ? tn.getBoundingClientRect() : D;
        et = It.left - E.left + It.width * 0.5 - _e * 0.5, We = It.bottom - E.top + 5, et = De(et, Y, Math.max(Y, E.width - _e - Y)), We = Math.max(Y, We);
      }
      et = De(et, Y, Math.max(Y, E.width - _e - Y)), We = Math.max(Y, We), j.tooltip.left = et, j.tooltip.top = We, j.tooltip.variant = Ge, j.tooltip.visible = !0;
    });
  }
  function D1(c, m, _ = {}) {
    var Y;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot) return;
    c.accumulatedRad += $g(m, c.lastAngle), c.lastAngle = m;
    const E = zg(c.start.roll_deg, c.accumulatedRad, {
      shiftKey: _.shiftKey,
      altKey: c.altStarted ? !1 : _.altKey
    });
    c.shot.roll_deg = E, c.changed = c.changed || Math.abs(c.accumulatedRad) > 1e-9;
    const D = (((Y = j.sidePanel) == null ? void 0 : Y.params) || []).find((le) => le.key === "roll_deg");
    D && (D.value = E, D.displayValue = Oo(E), D.fillPct = (E + 180) / 360 * 100), ri(), wc(c), Ye({ localOnly: !0 });
  }
  function L1(c, m, _ = {}) {
    var Y;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot || !c.rollGesture) return;
    const E = gy(c.rollGesture, m, _);
    if (!E) return;
    c.rollGesture = E.gesture, c.center = E.gesture.center, c.lastAngle = E.gesture.lastAngle, c.accumulatedRad = E.gesture.accumulatedRad, c.shot.roll_deg = E.rollDeg, c.changed = c.changed || Math.abs(E.gesture.accumulatedRad) > 1e-9;
    const D = (((Y = j.sidePanel) == null ? void 0 : Y.params) || []).find((le) => le.key === "roll_deg");
    D && (D.value = E.rollDeg, D.displayValue = Oo(E.rollDeg), D.fillPct = (E.rollDeg + 180) / 360 * 100), ri(), wc(c), Ye({ localOnly: !0 });
  }
  function dp(c, m) {
    const _ = ni(c);
    return Math.atan2(_.y - m.y, _.x - m.x);
  }
  function wc(c) {
    var le, _e;
    if ((c == null ? void 0 : c.kind) !== "roll_frame" || !c.shot) return;
    Qe.timer && (clearTimeout(Qe.timer), Qe.timer = 0), Qe.target = null;
    const m = Rr(c.shot), _ = (le = L.getBoundingClientRect) == null ? void 0 : le.call(L), E = (_e = ge.getBoundingClientRect) == null ? void 0 : _e.call(ge);
    if (!m || !_ || !E || L.width <= 0 || L.height <= 0) return;
    const D = _.width / L.width, Y = _.height / L.height;
    j.tooltip.text = `${Oo(c.shot.roll_deg)}°`, j.tooltip.left = _.left - E.left + (m.x + m.w * 0.5) * D, j.tooltip.top = _.top - E.top + (m.y + m.h * 0.5) * Y + 12, j.tooltip.variant = "roll", j.tooltip.visible = !0;
  }
  function R1(c) {
    var Y;
    if (c.button !== 0 || n || u.mode !== "frame") return;
    const m = kt();
    if (!m || m.locked === !0) return;
    const _ = Rr(m);
    if (!_) return;
    const E = { x: _.x + _.w * 0.5, y: _.y + _.h * 0.5 }, D = dp(c, E);
    u.interaction = {
      kind: "roll_frame",
      shot: m,
      center: E,
      lastAngle: D,
      accumulatedRad: 0,
      start: { roll_deg: Number(m.roll_deg ?? m.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (Y = K.setPointerCapture) == null || Y.call(K, c.pointerId), c.preventDefault(), ri(), wc(u.interaction), Ye({ localOnly: !0 });
  }
  K == null || K.addEventListener("pointerdown", R1);
  function V1(c) {
    var m;
    ((m = u.interaction) == null ? void 0 : m.kind) !== "roll_frame" || u.interaction.source !== "knob" || D1(
      u.interaction,
      dp(c, u.interaction.center),
      c
    );
  }
  K == null || K.addEventListener("pointermove", V1);
  function $1() {
    const c = u.interaction;
    (c == null ? void 0 : c.kind) !== "roll_frame" || c.source !== "knob" || (c.changed && (gt(), xt(), it()), u.interaction = null, xi(), ii(), ri(), Ye());
  }
  K == null || K.addEventListener("pointerup", $1), K == null || K.addEventListener("pointercancel", () => Qo()), K == null || K.addEventListener("lostpointercapture", () => {
    var c;
    ((c = u.interaction) == null ? void 0 : c.source) === "knob" && Qo();
  });
  function z1(c) {
    const m = u.mode === "frame" && !n ? kt() : null;
    !m || m.locked === !0 || Math.abs(Number(m.roll_deg ?? m.rot_deg ?? 0)) <= 1e-9 || (m.roll_deg = 0, gt(), xt(), it(), ri(), Ye(), c.preventDefault());
  }
  K == null || K.addEventListener("dblclick", z1);
  function j1(c) {
    O.selection && (O.selection = null, Df());
    const m = ni(c);
    V = m, ds(m, !0), ec(), yt.state.inertia.active = !1, yt.state.inertia.vx = 0, yt.state.inertia.vy = 0;
    const _ = ti(), E = _c(), D = _ || E ? BM(mc(), c) : null;
    if (E && D) {
      c.preventDefault(), D === "look" ? rp(m, c.pointerId) : y1(D, m, c.pointerId);
      return;
    }
    if (D === "look") {
      c.preventDefault();
      const Me = as(c);
      u.interaction = { kind: "view", last: Me, lastTs: performance.now() }, yt.startDrag(Me.x, Me.y, c.pointerId, performance.now()), Pt(m), L.setPointerCapture(c.pointerId);
      return;
    }
    if (D) {
      c.preventDefault(), Ff(D, m, c.pointerId);
      return;
    }
    if ((_ || E) && c.button !== 0) {
      c.preventDefault();
      return;
    }
    if (c.button === 1) {
      if (c.preventDefault(), u.mode === "frame") {
        const Me = kt();
        if (!Me || n || Me.locked === !0) return;
        u.interaction = {
          kind: "pan_frame",
          shot: Me,
          last: m,
          start: {
            yaw_deg: Number(Me.yaw_deg || 0),
            pitch_deg: Number(Me.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Me = u.mode === "unwrap" ? m : as(c);
        u.interaction = { kind: "view", last: Me, lastTs: performance.now() }, yt.startDrag(Me.x, Me.y, c.pointerId, performance.now());
      }
      Pt(m), L.setPointerCapture(c.pointerId);
      return;
    }
    if (c.button !== 0) return;
    if (u.mode === "frame" && (c.altKey || c.shiftKey) && !n) {
      const Me = kt(), Oe = Rr(Me);
      if (!Me || Me.locked === !0 || !Oe) return;
      const Ge = my({
        frame: Oe,
        point: m,
        startRollDeg: Number(Me.roll_deg ?? Me.rot_deg ?? 0),
        shiftKey: c.shiftKey,
        altKey: c.altKey,
        allowAlt: !0
      });
      if (!Ge) return;
      u.interaction = {
        kind: "roll_frame",
        shot: Me,
        center: Ge.center,
        lastAngle: Ge.lastAngle,
        accumulatedRad: Ge.accumulatedRad,
        rollGesture: Ge,
        start: { roll_deg: Number(Me.roll_deg ?? Me.rot_deg ?? 0) },
        changed: !1,
        altStarted: Ge.source === "alt",
        source: Ge.source
      }, L.setPointerCapture(c.pointerId), c.preventDefault(), ri(), Ye({ localOnly: !0 });
      return;
    }
    if (u.mode === "frame" && u.primaryTool === "cursor") {
      rp(m, c.pointerId), c.preventDefault();
      return;
    }
    if (n) {
      u.mode === "pano" && hp(c, m);
      return;
    }
    if (ue && !ue.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (Yf() || vc())) {
      if (!bb()) return;
      Lr();
      const Me = u.primaryTool === "mask" ? "mask" : "paint", Oe = u.primaryTool === "mask" ? u.maskTool : u.paintTool, Ge = u.mode === "frame" && vc() ? kt() : null, et = { kind: "ERP_GLOBAL" }, We = Ge ? or(m, Ge, performance.now()) : gr(m, performance.now());
      if (!We) {
        Pt(m);
        return;
      }
      u.interaction = {
        kind: Oe === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Me,
        _livePreviewToken: vo("live"),
        stroke: Oe === "lasso_fill" ? sp(Me, Oe, [We], et) : ap(Me, Oe, [We], et)
      }, eo();
      const ht = Kn(u.interaction);
      if (ht)
        if (u.paintEngine.beginStroke(u.interaction.stroke, ht), u.interaction.kind === "paint_stroke") {
          const Lt = u.paintEngine.ensureTarget(ht), tn = Number((We == null ? void 0 : We.u) ?? (We == null ? void 0 : We.x) ?? 0), It = Number((We == null ? void 0 : We.v) ?? (We == null ? void 0 : We.y) ?? 0);
          u.paintEngine.appendStrokePoint(Lt, tn, It, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, ht);
      Pt(m), L.setPointerCapture(c.pointerId), Ye();
      return;
    }
    const Y = Yo(), le = Dn(), _e = Y.length > 1 ? ns(Y) : le ? cn(le) : null;
    if (u.primaryTool === "cursor" && (c.ctrlKey || c.metaKey)) {
      u.interaction = { kind: "marquee_select", start: m, current: m }, Pt(m), L.setPointerCapture(c.pointerId), Ye({ localOnly: !0, reason: wt.OVERLAY });
      return;
    }
    if (u.primaryTool === "cursor" && yf() && ti() && Bb(c, m) || u.primaryTool === "cursor" && S && os() && H1(c, m)) return;
    if (Y.length > 1 && (_e != null && _e.visible)) {
      if ((Y.some((Oe) => hr(Oe)) ? { kind: "none" } : ea(_e, m)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: Y.map((Oe) => Oe),
          offset: { x: m.x - _e.center.x, y: m.y - _e.center.y },
          startCenter: { x: _e.center.x, y: _e.center.y },
          stickerSnapshots: Y.filter((Oe) => ln(Oe)).map((Oe) => ({
            id: String(Oe.id || ""),
            yaw_deg: Number(Ln(Oe).yaw_deg || 0),
            pitch_deg: Number(Ln(Oe).pitch_deg || 0),
            center: (() => {
              var et, We;
              const Ge = cn(Oe);
              return Ge != null && Ge.visible ? { x: Number(((et = Ge.center) == null ? void 0 : et.x) || 0), y: Number(((We = Ge.center) == null ? void 0 : We.y) || 0) } : { x: m.x, y: m.y };
            })()
          })),
          strokeSnapshots: Y.filter((Oe) => Bn(Oe)).map((Oe) => ({
            id: String(Oe.actionGroupId || Oe.id || ""),
            layerKind: String(Oe.layerKind || "paint"),
            snapshot: pn(Qi(Oe.actionGroupId, Oe.layerKind)),
            frameSnapshot: pn(Ji(Oe.actionGroupId, Oe.layerKind)),
            center: (() => {
              var et, We;
              const Ge = cn(Oe);
              return Ge != null && Ge.visible ? { x: Number(((et = Ge.center) == null ? void 0 : et.x) || 0), y: Number(((We = Ge.center) == null ? void 0 : We.y) || 0) } : { x: m.x, y: m.y };
            })(),
            centerUv: fb(Oe.actionGroupId, Oe.layerKind)
          })),
          rasterSnapshots: Y.filter((Oe) => Dr(Oe)).map((Oe) => ({
            id: vi(Oe.rasterObjectId || Oe.id || ""),
            snapshot: pn(Tr().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === vi(Oe.rasterObjectId || Oe.id || ""))),
            center: (() => {
              var et, We;
              const Ge = cn(Oe);
              return Ge != null && Ge.visible ? { x: Number(((et = Ge.center) == null ? void 0 : et.x) || 0), y: Number(((We = Ge.center) == null ? void 0 : We.y) || 0) } : { x: m.x, y: m.y };
            })(),
            centerUv: cb(Oe)
          }))
        }, Pt(m), L.setPointerCapture(c.pointerId);
        return;
      }
    } else if (le && (_e != null && _e.visible)) {
      const Me = hr(le) ? { kind: "none" } : ea(_e, m, le);
      if (Me.kind === "scale") {
        u.interaction = Bn(le) ? {
          kind: "scale_stroke_group",
          item: le,
          center: _e.center,
          startDist: Math.max(1, Math.hypot(m.x - _e.center.x, m.y - _e.center.y)),
          snapshot: pn(Qi(le.actionGroupId, le.layerKind)),
          frameSnapshot: pn(Ji(le.actionGroupId, le.layerKind)),
          cursor: Me.cursor
        } : Dr(le) ? {
          kind: "scale_raster_object",
          item: le,
          center: _e.center,
          startDist: Math.max(1, Math.hypot(m.x - _e.center.x, m.y - _e.center.y)),
          snapshot: pn(Tr().find((Oe) => String((Oe == null ? void 0 : Oe.id) || "") === vi(le.rasterObjectId || le.id || ""))),
          cursor: Me.cursor
        } : {
          kind: "scale",
          item: le,
          center: _e.center,
          startDist: Math.max(1, Math.hypot(m.x - _e.center.x, m.y - _e.center.y)),
          startHFOV: Number(Ln(le).hFOV_deg || 20),
          startVFOV: Number(Ln(le).vFOV_deg || 20),
          cursor: Me.cursor
        }, Pt(m), L.setPointerCapture(c.pointerId);
        return;
      }
      if (Me.kind === "scale_x" || Me.kind === "scale_y") {
        u.interaction = {
          kind: Me.kind,
          item: le,
          center: _e.center,
          startDist: Math.max(1, Math.hypot(m.x - _e.center.x, m.y - _e.center.y)),
          startHFOV: Number(Ln(le).hFOV_deg || 20),
          startVFOV: Number(Ln(le).vFOV_deg || 20),
          cursor: Me.cursor,
          edge: Me.edge
        }, Pt(m), L.setPointerCapture(c.pointerId);
        return;
      }
      if (Me.kind === "rotate") {
        u.interaction = Bn(le) ? {
          kind: "rotate_stroke_group",
          item: le,
          center: _e.center,
          startAng: Math.atan2(m.y - _e.center.y, m.x - _e.center.x),
          snapshot: pn(Qi(le.actionGroupId, le.layerKind)),
          frameSnapshot: pn(Ji(le.actionGroupId, le.layerKind))
        } : {
          kind: "rotate",
          item: le,
          center: _e.center,
          startRot: Number(Ln(le).rot_deg || Ln(le).roll_deg || 0),
          startAng: Math.atan2(m.y - _e.center.y, m.x - _e.center.x)
        }, Pt(m), L.setPointerCapture(c.pointerId);
        return;
      }
      if (Me.kind === "move") {
        if (Bn(le)) {
          const Oe = u.mode === "frame" ? (() => {
            const Ge = kt();
            return Ge ? or(m, Ge, performance.now()) : null;
          })() : gr(m, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: le,
            startUv: Oe,
            snapshot: pn(Qi(le.actionGroupId, le.layerKind)),
            frameSnapshot: pn(Ji(le.actionGroupId, le.layerKind))
          }, Pt(m), L.setPointerCapture(c.pointerId);
          return;
        }
        if (Dr(le)) {
          const Oe = u.mode === "frame" ? (() => {
            const Ge = kt();
            return Ge ? or(m, Ge, performance.now()) : null;
          })() : gr(m, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: le,
            startUv: Oe,
            snapshot: pn(Tr().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === vi(le.rasterObjectId || le.id || "")))
          }, Pt(m), L.setPointerCapture(c.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: le,
          offset: { x: m.x - _e.center.x, y: m.y - _e.center.y }
        }, Pt(m), L.setPointerCapture(c.pointerId);
        return;
      }
    }
    const Se = lp(m);
    if (Se) {
      const Me = u.selectedId !== Se.item.id;
      if (Me && u.selectedId && (gt(), Vn()), ar(Se.item), F && Me && (u.cutoutAspectOpen = !1), Me && it(), lt(), Ye(), hr(Se.item)) {
        Pt(m);
        return;
      }
      u.interaction = {
        kind: Bn(Se.item) ? "move_stroke_group" : Dr(Se.item) ? "move_raster_object" : "move",
        item: Se.item,
        offset: { x: m.x - Se.geom.center.x, y: m.y - Se.geom.center.y },
        startUv: Bn(Se.item) || Dr(Se.item) ? u.mode === "frame" ? (() => {
          const Oe = kt();
          return Oe ? or(m, Oe, performance.now()) : null;
        })() : gr(m, performance.now()) : null,
        snapshot: Bn(Se.item) ? pn(Qi(Se.item.actionGroupId, Se.item.layerKind)) : Dr(Se.item) ? pn(Tr().find((Oe) => String((Oe == null ? void 0 : Oe.id) || "") === vi(Se.item.rasterObjectId || Se.item.id || ""))) : null,
        frameSnapshot: Bn(Se.item) ? pn(Ji(Se.item.actionGroupId, Se.item.layerKind)) : null
      }, Pt(m), L.setPointerCapture(c.pointerId);
      return;
    }
    const Ke = !!u.selectedId;
    Ke && (gt(), Vn()), Bo(), Ke && it(), lt(), Ye(), u.mode === "pano" && hp(c, m);
  }
  L.onpointerdown = j1;
  function ki(c, m) {
    return Re.gizmoPointer(c, Uo(), m.x, m.y, L.width, L.height);
  }
  function H1(c, m) {
    var _e;
    const _ = (_e = es().space) == null ? void 0 : _e.gizmo;
    if (_ && ki("hover", m) !== null && ki("down", m))
      return u.interaction = {
        kind: "world_gizmo",
        id: u.worldSelectedId,
        mode: _.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: _.transform,
        base: Bi(uc(), u.frame),
        changed: !1
      }, L.setPointerCapture(c.pointerId), Pt(m), !0;
    const E = Yo(), D = Dn(), Y = E.length > 1 ? E.some((Se) => hr(Se)) ? "none" : ea(ns(E), m).kind : D && !hr(D) ? ea(cn(D), m, D).kind : "none";
    if (Y !== "none" && Y !== "move") return !1;
    const le = Re.pickSticker(Uo(), m.x, m.y, L.width, L.height);
    return y.stickers.some((Se) => Se.id === le && Se.placement === "world") ? (u.worldSelectedId !== le && (u.selectedId && (gt(), Vn()), Of(le), it(), lt(), hc(), Ye()), u.interaction = { kind: "world_select" }, L.setPointerCapture(c.pointerId), !0) : !1;
  }
  function fp(c) {
    var E;
    const _ = !!(u.worldSelectedId || to()) && u.primaryTool === "cursor" && os() && !!((E = es().space) != null && E.gizmo) ? ki("hover", c) : null;
    _ !== u.gizmoAxis && (u.gizmoAxis = _, N.backgroundDirty = !0, Ye({ localOnly: !0, reason: wt.VIEW }));
  }
  function G1(c, m) {
    const _ = ki("move", m);
    if (_ && c.camera) {
      for (const [D, Y] of Object.entries(Vh(c.mode, c.base, c.start, _))) yn(y.camera, D, u.frame, Y);
      wi(), c.changed = !0, Fe.request("sidePanel"), Ye({ localOnly: !0 });
      return;
    }
    const E = y.stickers.find((D) => D.id === c.id);
    !_ || !E || (Lx(E, u.frame, Vh(c.mode, c.base, c.start, _)), c.changed = !0, fn(), Fe.request("sidePanel"), Ye({ localOnly: !0 }));
  }
  function pp(c) {
    u.interaction = null, u.gizmoAxis = null, c.kind === "world_gizmo" && (ki("up", u.pointerPos), N.backgroundDirty = !0, c.changed && (gt(), xt(), it())), Pt(u.pointerPos), Ye();
  }
  function hp(c, m) {
    if (ti()) {
      const E = mc().emptyLeft;
      E && Ff(E, m, c.pointerId);
      return;
    }
    const _ = as(c);
    u.interaction = { kind: "view", last: _, lastTs: performance.now() }, yt.startDrag(_.x, _.y, c.pointerId, performance.now()), Pt(m), L.setPointerCapture(c.pointerId);
  }
  function W1(c, m) {
    if (!v || !ro.playing || (ro.stop(), c.kind === "frame_pan")) return;
    if (c.kind === "frame_orbit") {
      const D = Jo();
      D && (c.pivot = ep(D, Zo(D), m));
      return;
    }
    if (c.kind === "world_gizmo") {
      const D = y.stickers.find((Y) => Y.id === c.id);
      c.camera ? c.base = nc() : D && (c.base = Bi(D, u.frame));
      return;
    }
    if (c.kind === "move_multi") {
      const D = ns(c.items);
      if (!(D != null && D.visible)) return;
      c.offset = { x: m.x - D.center.x, y: m.y - D.center.y }, c.startCenter = { x: D.center.x, y: D.center.y };
      for (const Y of c.stickerSnapshots) {
        const le = c.items.find((Se) => String((Se == null ? void 0 : Se.id) || "") === Y.id), _e = le ? cn(le) : null;
        _e != null && _e.visible && (Y.yaw_deg = Number(Ln(le).yaw_deg || 0), Y.pitch_deg = Number(Ln(le).pitch_deg || 0), Y.center = { x: _e.center.x, y: _e.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(c.kind)) return;
    const _ = cn(c.item);
    if (!(_ != null && _.visible)) return;
    const E = Ln(c.item);
    if (c.kind === "move") {
      c.offset = { x: m.x - _.center.x, y: m.y - _.center.y };
      return;
    }
    if (c.center = _.center, c.kind === "rotate") {
      c.startRot = Number(E.rot_deg || E.roll_deg || 0), c.startAng = Math.atan2(m.y - _.center.y, m.x - _.center.x);
      return;
    }
    c.startDist = Math.max(1, Math.hypot(m.x - _.center.x, m.y - _.center.y)), c.startHFOV = Number(E.hFOV_deg || 20), c.startVFOV = Number(E.vFOV_deg || 20);
  }
  function K1(c) {
    var E, D, Y, le, _e, Se, Ke, Me, Oe, Ge, et, We, ht, Lt, tn, It, Un, br, vr, ta, na, Ze;
    const m = ni(c);
    if (ds(m, !0), !u.interaction) {
      fp(m), Pt(m);
      return;
    }
    Pt(m);
    const _ = u.interaction;
    if (V && (m.x !== V.x || m.y !== V.y)) {
      const Je = V;
      V = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(_.kind) || W1(_, Je);
    }
    if (_.kind !== "world_select") {
      if (_.kind === "world_gizmo") {
        G1(_, m);
        return;
      }
      if (_.kind === "paint_stroke") {
        const Je = typeof c.getCoalescedEvents == "function" ? c.getCoalescedEvents() : [c];
        let tt = !1;
        Je.forEach((ot) => {
          const rt = ni(ot);
          if (u.mode === "frame") {
            const Mt = kt(), _t = Mt ? Rr(Mt) : null;
            if (_t) {
              const $t = (rt.x - _t.x) / Math.max(1, _t.w), St = (rt.y - _t.y) / Math.max(1, _t.h);
              if (!($t >= 0 && $t <= 1 && St >= 0 && St <= 1)) {
                _._outOfFrame = !0;
                return;
              }
              _._outOfFrame && (_._outOfFrame = !1, A1(_));
            }
          }
          M1(_, rt, performance.now()) && (tt = !0);
        }), tt && Ye({ localOnly: !0, reason: wt.PAINT });
        return;
      }
      if (_.kind === "paint_lasso_fill") {
        const Je = typeof c.getCoalescedEvents == "function" ? c.getCoalescedEvents() : [c];
        let tt = !1;
        if (Je.forEach((ot) => {
          const rt = ni(ot);
          if (u.mode === "frame") {
            const Mt = kt(), _t = Mt ? Rr(Mt) : null;
            if (_t) {
              const $t = (rt.x - _t.x) / Math.max(1, _t.w), St = (rt.y - _t.y) / Math.max(1, _t.h);
              if (!($t >= 0 && $t <= 1 && St >= 0 && St <= 1)) {
                _._outOfFrame = !0;
                return;
              }
              _._outOfFrame && (_._outOfFrame = !1, C1(_));
            }
          }
          P1(_, rt, performance.now()) && (tt = !0);
        }), tt) {
          const ot = Kn(_);
          ot && u.paintEngine.updateActiveStroke(_.stroke, ot), Ye({ localOnly: !0, reason: wt.PAINT });
        }
        return;
      }
      if (_.kind === "view") {
        const Je = performance.now(), tt = u.mode === "unwrap" ? m : as(c);
        yt.moveDrag(tt.x, tt.y, u.mode === "unwrap" ? "unwrap" : "pano", Je), _.lastTs = Je, _.last = tt, Ye({ localOnly: !0, reason: wt.VIEW });
        return;
      }
      if (_.kind === "frame_pan" || _.kind === "frame_orbit") {
        b1(_, m);
        return;
      }
      if (_.kind === "space_pan" || _.kind === "space_orbit") {
        const Je = _i();
        Cb(_.kind === "space_pan" ? Dh(Je, m.x - _.last.x, m.y - _.last.y, L.width, L.height, _.depth) : Th(Je, m.x - _.last.x, m.y - _.last.y, L.height, _.pivot)), _.last = m;
        return;
      }
      if (_.kind === "pan_frame") {
        const Je = us(_.shot);
        if (!Je || !_.shot) return;
        const tt = m.x - _.last.x, ot = m.y - _.last.y, rt = yy(_.shot, {
          dx: tt,
          dy: ot,
          focalPx: Je.focalPx,
          invertX: ((E = y.ui_settings) == null ? void 0 : E.invert_view_x) === !0,
          invertY: ((D = y.ui_settings) == null ? void 0 : D.invert_view_y) === !0
        });
        _.shot.yaw_deg = rt.yaw_deg, _.shot.pitch_deg = rt.pitch_deg, _.changed = _.changed || Math.abs(tt) > 0 || Math.abs(ot) > 0, _.last = m, Ye({ localOnly: !0 });
        return;
      }
      if (_.kind === "roll_frame") {
        if (_.source === "knob") return;
        L1(_, m, c);
        return;
      }
      if (_.kind === "move") {
        const Je = m.x - _.offset.x, tt = m.y - _.offset.y;
        if (u.mode === "frame" && F) {
          const ot = kt(), rt = Rr(ot);
          if (!ot || !rt) return;
          const Mt = {
            x: De((Je - rt.x) / Math.max(1, rt.w), 0, 1),
            y: De((tt - rt.y) / Math.max(1, rt.h), 0, 1)
          }, _t = Sf(ot, Mt);
          if (!_t) return;
          const $t = Cs(_t);
          sr(_.item, { yaw_deg: $t.yaw, pitch_deg: $t.pitch });
        } else if (u.mode === "unwrap") {
          const ot = oc(), rt = De((Je - ot.x) / Math.max(ot.w, 1), 0, 1), Mt = De((tt - ot.y) / Math.max(ot.h, 1), 0, 1);
          sr(_.item, { yaw_deg: zt(rt * 360 - 180), pitch_deg: De(90 - Mt * 180, -90, 90) });
        } else {
          const ot = Ef(Je, tt), rt = Cs(ot);
          sr(_.item, { yaw_deg: rt.yaw, pitch_deg: rt.pitch });
        }
        ln(_.item) && fn(), Ye({ localOnly: !0 });
        return;
      }
      if (_.kind === "move_stroke_group") {
        const Je = u.mode === "frame" ? (() => {
          const rt = kt();
          return rt ? or(m, rt, performance.now()) : null;
        })() : gr(m, performance.now());
        if (!Je || !_.startUv) return;
        const tt = ss(Number(Je.u || 0), Number(_.startUv.u || 0)), ot = Number(Je.v || 0) - Number(_.startUv.v || 0);
        Zt((Y = _.item) == null ? void 0 : Y.actionGroupId, tt, ot, _.snapshot, (le = _.item) == null ? void 0 : le.layerKind, _.frameSnapshot) && (mr({ rebuildPaintEngine: !1 }), Ye({ localOnly: !0, reason: wt.PAINT }));
        return;
      }
      if (_.kind === "move_raster_object") {
        const Je = u.mode === "frame" ? (() => {
          const rt = kt();
          return rt ? or(m, rt, performance.now()) : null;
        })() : gr(m, performance.now());
        if (!Je || !_.startUv) return;
        const tt = ss(Number(Je.u || 0), Number(_.startUv.u || 0)), ot = Number(Je.v || 0) - Number(_.startUv.v || 0);
        dn(((_e = _.item) == null ? void 0 : _e.rasterObjectId) || ((Se = _.item) == null ? void 0 : Se.id) || "", tt, ot, _.snapshot) && (no(), Ye({ localOnly: !0, reason: wt.PAINT }));
        return;
      }
      if (_.kind === "scale_raster_object") {
        const tt = Math.max(1, Math.hypot(m.x - _.center.x, m.y - _.center.y)) / Math.max(1, Number(_.startDist || 1));
        Wn(((Ke = _.item) == null ? void 0 : Ke.rasterObjectId) || ((Me = _.item) == null ? void 0 : Me.id) || "", tt, _.snapshot) && (no(), Ye({ localOnly: !0, reason: wt.PAINT }));
        return;
      }
      if (_.kind === "move_multi") {
        const Je = m.x - Number(((Oe = _.offset) == null ? void 0 : Oe.x) || 0), tt = m.y - Number(((Ge = _.offset) == null ? void 0 : Ge.y) || 0);
        let ot = !1, rt = !1, Mt = !1;
        const _t = Je - Number(((et = _.startCenter) == null ? void 0 : et.x) || Je), $t = tt - Number(((We = _.startCenter) == null ? void 0 : We.y) || tt);
        for (const St of Array.isArray(_.stickerSnapshots) ? _.stickerSnapshots : []) {
          const Qt = (t === "cutout" ? ab() : ts()).find((Bt) => String((Bt == null ? void 0 : Bt.id) || "") === String(St.id || ""));
          if (!Qt || !ln(Qt)) continue;
          const Mn = {
            x: Number(((ht = St.center) == null ? void 0 : ht.x) || 0) + _t,
            y: Number(((Lt = St.center) == null ? void 0 : Lt.y) || 0) + $t
          };
          if (u.mode === "frame" && F) {
            const Bt = kt(), nn = Rr(Bt);
            if (!Bt || !nn) continue;
            const Mi = {
              x: De((Mn.x - nn.x) / Math.max(1, nn.w), 0, 1),
              y: De((Mn.y - nn.y) / Math.max(1, nn.h), 0, 1)
            }, Dp = Sf(Bt, Mi);
            if (!Dp) continue;
            const Lp = Cs(Dp);
            sr(Qt, { yaw_deg: Lp.yaw, pitch_deg: Lp.pitch });
          } else if (u.mode === "unwrap") {
            const Bt = oc(), nn = De((Mn.x - Bt.x) / Math.max(Bt.w, 1), 0, 1), Mi = De((Mn.y - Bt.y) / Math.max(Bt.h, 1), 0, 1);
            sr(Qt, { yaw_deg: zt(nn * 360 - 180), pitch_deg: De(90 - Mi * 180, -90, 90) });
          } else {
            const Bt = Ef(Mn.x, Mn.y), nn = Cs(Bt);
            sr(Qt, { yaw_deg: nn.yaw, pitch_deg: nn.pitch });
          }
          ot = !0;
        }
        for (const St of Array.isArray(_.strokeSnapshots) ? _.strokeSnapshots : []) {
          const Qt = {
            x: Number(((tn = St.center) == null ? void 0 : tn.x) || 0) + _t,
            y: Number(((It = St.center) == null ? void 0 : It.y) || 0) + $t
          }, Mn = u.mode === "frame" ? (() => {
            const nn = kt();
            return nn ? or(Qt, nn, performance.now()) : null;
          })() : gr(Qt, performance.now()), Bt = St.centerUv || null;
          if (Mn && Bt) {
            const nn = ss(Number(Mn.u || 0), Number(Bt.u || 0)), Mi = Number(Mn.v || 0) - Number(Bt.v || 0);
            Zt(St.id, nn, Mi, St.snapshot, St.layerKind, St.frameSnapshot) && (ot = !0, rt = !0);
          }
        }
        for (const St of Array.isArray(_.rasterSnapshots) ? _.rasterSnapshots : []) {
          const Qt = {
            x: Number(((Un = St.center) == null ? void 0 : Un.x) || 0) + _t,
            y: Number(((br = St.center) == null ? void 0 : br.y) || 0) + $t
          }, Mn = u.mode === "frame" ? (() => {
            const nn = kt();
            return nn ? or(Qt, nn, performance.now()) : null;
          })() : gr(Qt, performance.now()), Bt = St.centerUv || null;
          if (Mn && Bt) {
            const nn = ss(Number(Mn.u || 0), Number(Bt.u || 0)), Mi = Number(Mn.v || 0) - Number(Bt.v || 0);
            dn(St.id, nn, Mi, St.snapshot) && (ot = !0, Mt = !0);
          }
        }
        ot && (rt ? mr({ rebuildPaintEngine: !1 }) : Mt ? no() : fn(), Ye({ localOnly: !0 }));
        return;
      }
      if (_.kind === "scale_stroke_group") {
        const tt = Math.max(1, Math.hypot(m.x - _.center.x, m.y - _.center.y)) / Math.max(1, Number(_.startDist || 1));
        ei((vr = _.item) == null ? void 0 : vr.actionGroupId, tt, 0, _.snapshot, (ta = _.item) == null ? void 0 : ta.layerKind, _.frameSnapshot) && (mr({ rebuildPaintEngine: !1 }), Ye({ localOnly: !0, reason: wt.PAINT }));
        return;
      }
      if (_.kind === "rotate_stroke_group") {
        let Je = (Math.atan2(m.y - _.center.y, m.x - _.center.x) - Number(_.startAng || 0)) * Vi;
        c.shiftKey && (Je = Math.round(Je / 45) * 45), ei((na = _.item) == null ? void 0 : na.actionGroupId, 1, Je, _.snapshot, (Ze = _.item) == null ? void 0 : Ze.layerKind, _.frameSnapshot) && (mr({ rebuildPaintEngine: !1 }), Ye({ localOnly: !0, reason: wt.PAINT }));
        return;
      }
      if (_.kind === "marquee_select") {
        _.current = m, Ye({ localOnly: !0, reason: wt.OVERLAY });
        return;
      }
      if (_.kind === "scale") {
        const tt = Math.max(1, Math.hypot(m.x - _.center.x, m.y - _.center.y)) / _.startDist;
        sr(_.item, { hFOV_deg: De(_.startHFOV * tt, 1, 179), vFOV_deg: De(_.startVFOV * tt, 1, 179) }), is(_.item) || (_.item.aspect_id = Li(_.item)), ln(_.item) && fn(), Ye({ localOnly: !0 });
        return;
      }
      if (_.kind === "scale_x") {
        const tt = Math.max(1, Math.hypot(m.x - _.center.x, m.y - _.center.y)) / _.startDist;
        sr(_.item, { hFOV_deg: De(_.startHFOV * tt, 1, 179) }), is(_.item) || (_.item.aspect_id = Li(_.item)), ln(_.item) && fn(), Ye({ localOnly: !0 });
        return;
      }
      if (_.kind === "scale_y") {
        const tt = Math.max(1, Math.hypot(m.x - _.center.x, m.y - _.center.y)) / _.startDist;
        sr(_.item, { vFOV_deg: De(_.startVFOV * tt, 1, 179) }), is(_.item) || (_.item.aspect_id = Li(_.item)), ln(_.item) && fn(), Ye({ localOnly: !0 });
        return;
      }
      if (_.kind === "rotate") {
        let tt = (Math.atan2(m.y - _.center.y, m.x - _.center.x) - _.startAng) * Vi, ot = _.startRot - tt;
        c.shiftKey && (ot = Math.round(ot / 45) * 45), sr(_.item, { [ln(_.item) ? "rot_deg" : "roll_deg"]: ot }), ln(_.item) && fn(), Ye({ localOnly: !0 });
      }
    }
  }
  L.onpointermove = K1;
  function B1() {
    var m, _, E, D, Y, le, _e;
    const c = u.interaction;
    if (!((c == null ? void 0 : c.kind) === "roll_frame" && c.source === "knob")) {
      if ((c == null ? void 0 : c.kind) === "space_pan" || (c == null ? void 0 : c.kind) === "space_orbit") {
        u.interaction = null, Pt(u.pointerPos), lt();
        return;
      }
      if ((c == null ? void 0 : c.kind) === "world_select" || (c == null ? void 0 : c.kind) === "world_gizmo") {
        pp(c);
        return;
      }
      if (((m = u.interaction) == null ? void 0 : m.kind) === "paint_stroke" || ((_ = u.interaction) == null ? void 0 : _.kind) === "paint_lasso_fill") {
        eo();
        const Se = Sc(u.interaction), Ke = !!u.interaction._hasCommittedSegments;
        if (Se || Ke) {
          mr();
          const Me = String(((E = u.interaction.stroke) == null ? void 0 : E.actionGroupId) || "").trim();
          if (Me) {
            const Ge = Zi().find((et) => String((et == null ? void 0 : et.actionGroupId) || "") === Me);
            Ge && (Ge.frame = null);
          }
          const Oe = Kn(u.interaction);
          Oe && (Se ? String(((D = u.interaction.stroke) == null ? void 0 : D.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(Oe), xb()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, Oe) : u.paintEngine.cancelActiveStroke(Oe)), gt(), Vn(), it(), lt(), e.setDirtyCanvas(!0, !0), Ye();
        } else {
          const Me = Kn(u.interaction);
          Me && u.paintEngine.cancelActiveStroke(Me);
        }
      } else if (((Y = u.interaction) == null ? void 0 : Y.kind) === "marquee_select") {
        const Se = cp(u.interaction.start, u.interaction.current), Me = [
          ...t === "cutout" ? rc().filter((Oe) => !bi(Oe)) : [...ts()],
          ...db(),
          ...ub()
        ].filter((Oe) => E1(Se, cn(Oe)));
        Nb(Me, ((le = Me[Me.length - 1]) == null ? void 0 : le.id) || null), F && Me.length && (u.cutoutAspectOpen = !1), it(), lt(), Ye();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((_e = u.interaction) == null ? void 0 : _e.kind))
        u.interaction.changed && (gt(), xt(), it());
      else if (u.interaction && u.interaction.kind !== "view") {
        let Se = !1;
        (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (Se = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (Se = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (Se = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (Se = !0), Se && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? mr({ rebuildPaintEngine: !0 }) : no()), gt(), Vn(), e.setDirtyCanvas(!0, !0), io(), lt(), Ye();
      }
      u.interaction = null, (c == null ? void 0 : c.kind) === "roll_frame" && xi(), eo(), c && c.kind === "view" && dc(() => yt.endDrag(performance.now())), ii(), lt(), Pt(u.pointerPos), Ye();
    }
  }
  L.onpointerup = B1;
  function U1() {
    var c, m, _, E, D;
    if (!Qo()) {
      if (((c = u.interaction) == null ? void 0 : c.kind) === "world_select" || ((m = u.interaction) == null ? void 0 : m.kind) === "world_gizmo") {
        pp(u.interaction);
        return;
      }
      if (((_ = u.interaction) == null ? void 0 : _.kind) === "view" && dc(() => yt.endDrag(performance.now())), ((E = u.interaction) == null ? void 0 : E.kind) === "paint_stroke" || ((D = u.interaction) == null ? void 0 : D.kind) === "paint_lasso_fill") {
        eo();
        const Y = Kn(u.interaction);
        Y && u.paintEngine.cancelActiveStroke(Y);
      }
      u.interaction = null, eo(), ii(), Pt(u.pointerPos), Ye({ localOnly: !0 });
    }
  }
  L.onpointercancel = U1, L.onlostpointercapture = () => {
    Qo();
  }, L.onauxclick = (c) => {
    c.button === 1 && c.preventDefault();
  }, L.oncontextmenu = (c) => {
    (ti() || _c()) && UM(mc(), 2) && c.preventDefault();
  };
  function Y1(c) {
    const m = ni(c), _ = ds(m, !0);
    u.interaction || (Pt(m), _ && u.mode === "frame" && u.primaryTool === "cursor" && Ye({ localOnly: !0, reason: wt.OVERLAY }));
  }
  L.onmousemove = Y1, L.onpointerleave = () => {
    u.interaction || fp({ x: -1e6, y: -1e6 });
  }, L.onmouseleave = () => {
    ds(u.pointerPos, !1), Pt(u.pointerPos), u.mode === "frame" && u.primaryTool === "cursor" && Ye({ localOnly: !0, reason: wt.OVERLAY });
  };
  function q1(c) {
    if (u.mode === "frame") {
      const m = ni(c), _ = al(c);
      _ && Lr(), _ && _c() ? v1(m, -_) : _ && g1(m, _) && Ye({ localOnly: !0 }), c.preventDefault();
      return;
    }
    if (u.mode === "pano") {
      if (ec(), ti()) {
        const m = al(c);
        m && Gb(ni(c), -m);
      } else yt.applyWheelEvent(c) && Ye({ localOnly: !0, reason: wt.VIEW });
      c.preventDefault();
    }
  }
  L.onwheel = q1;
  function X1(c) {
    t !== "stickers" && t !== "cutout" || n || (c.preventDefault(), Si(!0));
  }
  L.ondragover = X1;
  function J1(c) {
    var E;
    if (t !== "stickers" && t !== "cutout" || n) return;
    c.preventDefault(), c.stopPropagation(), dt.depth = 0, Si(!1);
    const _ = Array.from(((E = c.dataTransfer) == null ? void 0 : E.files) || []).find((D) => cr(D));
    _ && jf(_);
  }
  L.ondrop = J1;
  function mp(c) {
    t !== "stickers" && t !== "cutout" || n || gc(c) && (dt.depth += 1, Si(!0), c.preventDefault());
  }
  function gp(c) {
    t !== "stickers" && t !== "cutout" || n || (!dt.active && gc(c) && Si(!0), dt.active && c.preventDefault());
  }
  function yp(c) {
    if (t !== "stickers" && t !== "cutout" || n || !dt.active) return;
    dt.depth = Math.max(0, dt.depth - 1);
    const m = Number(c.clientX) <= 0 && Number(c.clientY) <= 0;
    (dt.depth === 0 || m) && Si(!1);
  }
  function bp(c) {
    t !== "stickers" && t !== "cutout" || n || (dt.depth = 0, Si(!1), gc(c) && c.preventDefault());
  }
  window.addEventListener("dragenter", mp, !0), window.addEventListener("dragover", gp, !0), window.addEventListener("dragleave", yp, !0), window.addEventListener("drop", bp, !0);
  function vp(c, m, _ = !1) {
    var Ke;
    Lr();
    const E = F && u.mode === "frame" ? kt() : null, D = E || Dn(), Y = E ? "shot" : ic(), le = uc();
    if (le && !zf(le) || !le && (!D || Y === "stroke" || hr(D))) return;
    const _e = (((Ke = j.sidePanel) == null ? void 0 : Ke.params) || []).find((Me) => Me.key === c);
    if (!_e || _e.enabled === !1) return;
    let Se = Number(m);
    if (Number.isNaN(Se) && (Se = 0), (le || G) && eI.has(c) ? Se = c === "scale" ? Math.max(Se, Gy) : Se : Se = De(Se, Number(_e.min), Number(_e.max)), c === "yaw_deg" && (Se = zt(Se)), !le && G && c.startsWith("position_")) {
      wi(), Ox(y.camera, u.frame, c, Se), it(), Ye(), _ && gt();
      return;
    }
    if (le) {
      Dx(le, u.frame, c, Se), fn(), it(), Ye(), _ && gt();
      return;
    }
    c === "opacity" ? Fx(D, u.frame, Se / 100) : sr(D, { [c]: Se }), F && !is(D) && (c === "hFOV_deg" || c === "vFOV_deg") && (D.aspect_id = Li(D)), it(), Ye(), _ && gt();
  }
  async function Z1(c) {
    var E, D, Y, le, _e, Se, Ke;
    const m = c.target.closest("[data-action]");
    if (!m) return;
    const _ = String(m.getAttribute("data-action") || "");
    if (_ === "coverage-set") {
      const Me = En(m.getAttribute("data-coverage"));
      if (Me === En(y.coverage)) return;
      y.coverage = Me, u.coverage = Me, l && (l.value = String(Me)), o ? N.backgroundDirty = !0 : (Vn(), h1({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), it(), lt(), Ye();
      return;
    }
    if (_ === "toggle-selection-picker") {
      if ((D = (E = j.sidePanel) == null ? void 0 : E.selectionPicker) != null && D.disabled) return;
      j.sidePanel.selectionPicker.open = !j.sidePanel.selectionPicker.open;
      return;
    }
    if (_ === "select-picker-item") {
      j.sidePanel.selectionPicker.open = !1;
      const Me = String(m.getAttribute("data-selection-id") || "");
      let Oe = null;
      if (Me && (t === "stickers" ? Oe = [...ts(), ...P ? y.shots : []].find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === Me) || null : Oe = ((Y = ob().find((Ge) => {
        var et;
        return String(((et = Ge == null ? void 0 : Ge.item) == null ? void 0 : et.id) || "") === Me;
      })) == null ? void 0 : Y.item) || null), ar(Oe || null), Oe && !Bn(Oe)) {
        const Ge = Ln(Oe);
        Vf(zt(Number(Ge.yaw_deg || 0)), De(Number(Ge.pitch_deg || 0), -89.9, 89.9));
      }
      it(), lt(), Ye();
      return;
    }
    if (_ === "copy-state-inline") {
      const Me = Dn(), Oe = ic();
      if (!Me || Oe === "stroke" || Yo().length > 1) return;
      const Ge = JSON.stringify(F && Oe !== "image" ? ir(Me) : Za(Ln(Me)));
      try {
        await navigator.clipboard.writeText(Ge), (le = j.sidePanel) != null && le.copyStateButton && (j.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var et;
          (et = j.sidePanel) != null && et.copyStateButton && (j.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (_ === "set-invert-x") {
      y.ui_settings.invert_view_x = m.getAttribute("data-value") === "1", bc(), it(), (_e = e.setDirtyCanvas) == null || _e.call(e, !0, !0), Ye();
      return;
    }
    if (_ === "set-invert-y") {
      y.ui_settings.invert_view_y = m.getAttribute("data-value") === "1", bc(), it(), (Se = e.setDirtyCanvas) == null || Se.call(e, !0, !0), Ye();
      return;
    }
    if (_ === "ui-reset-defaults") {
      y.ui_settings.invert_view_x = !1, y.ui_settings.invert_view_y = !1, bc(), it(), (Ke = e.setDirtyCanvas) == null || Ke.call(e, !0, !0), Ye();
      return;
    }
    if (_ === "close-preview") {
      lo();
      return;
    }
    if (_ === "cancel-close") {
      lo();
      return;
    }
    _ === "save-close" && (f1(), lo());
  }
  pe == null || pe.addEventListener("click", Z1);
  function Q1(c) {
    const m = c.target.closest("[data-action='param-input']");
    m && vp(String(m.getAttribute("data-param-key") || ""), m.value, !1);
  }
  pe == null || pe.addEventListener("input", Q1);
  function ev(c) {
    const m = c.target.closest("[data-action='param-input']");
    m && vp(String(m.getAttribute("data-param-key") || ""), m.value, !0);
  }
  pe == null || pe.addEventListener("change", ev);
  function xc() {
    hc();
  }
  xc();
  function tv(c) {
    var Ke, Me, Oe, Ge, et;
    if ((Me = (Ke = c.target) == null ? void 0 : Ke.matches) != null && Me.call(Ke, "[data-confirm-overlay]")) {
      const We = (Oe = j.confirmDialog) == null ? void 0 : Oe.resolve;
      j.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, We == null || We(!1);
      return;
    }
    const m = c.target.closest("[data-space-mode]");
    if (m) {
      Ab(m.getAttribute("data-space-mode"));
      return;
    }
    const _ = c.target.closest("[data-gizmo-mode]");
    if (_) {
      u.gizmoMode = _.getAttribute("data-gizmo-mode"), N.backgroundDirty = !0, lt(), Ye({ localOnly: !0, reason: wt.VIEW });
      return;
    }
    const E = c.target.closest("[data-view]");
    if (E) {
      if (E.getAttribute("aria-disabled") === "true") return;
      const We = u.mode;
      u.mode = String(E.getAttribute("data-view") || "pano"), F && u.mode === "frame" && (We !== "frame" && (N.frameSafeRect = null), it(), lt()), Xo(), ii(), Ye();
      return;
    }
    const D = c.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (D && !n) {
      if (D.matches("[data-tool-mode]")) {
        const We = String(D.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = We, (We === "paint" || We === "mask") && Bo({ preservePanelValues: !0 }), Rn(), it(), lt(), Ye();
        return;
      }
      if (D.matches("[data-tool-ui-action]")) {
        const We = String(D.getAttribute("data-tool-ui-action") || "");
        if ((We === "undo" || We === "redo") && D.disabled) return;
        We === "undo" ? cc(-1) : We === "redo" ? cc(1) : We === "clear" ? a1() : We === "add" || We === "add-image" ? Ub() : We === "add-world" ? Yb() : We === "add-or-look" ? n1() : We === "add-camera" && r1();
        return;
      }
      if (D.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const We = String(D.getAttribute("data-paint-tool") || "pen");
        u.paintTool = We, Bo({ preservePanelValues: !0 }), Cn[We] && (u.activeBrushPresetId = We), Rn(), it(), lt(), Ye();
        return;
      }
      if (D.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(D.getAttribute("data-mask-tool") || "pen"), Bo({ preservePanelValues: !0 }), Rn(), it(), lt(), Ye();
        return;
      }
      if (D.matches("[data-paint-layer-clear-current]")) {
        const We = String(D.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        s1(We);
        return;
      }
      if (D.matches("[data-paint-color-swatch]")) {
        const We = Cl.find((ht) => ht.id === D.getAttribute("data-paint-color-swatch"));
        if (!We) return;
        u.paintColor = $n(We.color), xe(!0), Rn();
        return;
      }
      if (D.matches("[data-paint-color-custom]")) {
        c.preventDefault(), c.stopPropagation(), ue && !ue.hidden ? xe(!0) : Ie(), Rn();
        return;
      }
    }
    const Y = String(((Ge = D == null ? void 0 : D.getAttribute) == null ? void 0 : Ge.call(D, "data-action")) || "");
    if (Y === "video-play-toggle") {
      if (c.preventDefault(), c.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      cs.resumeAfterScrub = !1, Rf();
      return;
    }
    if (Y === "video-audio-toggle") {
      c.preventDefault(), c.stopPropagation(), zb(), typeof (D == null ? void 0 : D.blur) == "function" && D.blur();
      return;
    }
    if (Y === "video-loop-toggle") {
      if (c.preventDefault(), c.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      const We = !j.videoTransport.loop;
      j.videoTransport.loop = We, Ae.loop = We, Lf({
        hasAudio: j.videoTransport.hasAudio,
        loop: We,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? j.videoTransport.volume ?? 1)
      }), typeof (D == null ? void 0 : D.blur) == "function" && D.blur();
      return;
    }
    if (!n) {
      if (Y === "frame-aspect") {
        j.frameRail.aspectOpen = !j.frameRail.aspectOpen;
        return;
      }
      if (Y === "frame-aspect-set") {
        const We = u.mode === "frame" ? kt() : null;
        if (!We || We.locked === !0) return;
        Gf(We, String(D.getAttribute("data-aspect") || "1:1")), j.frameRail.aspectOpen = !1, io(), gt(), xt(), ii(), it(), lt(), Ye();
        return;
      }
      if (Y === "frame-aspect-custom") {
        const We = u.mode === "frame" ? kt() : null, ht = D.getAttribute("data-custom-width"), Lt = D.getAttribute("data-custom-height");
        if (!We || !d1(We, ht, Lt)) return;
        j.frameRail.aspectOpen = !1, io(), gt(), xt(), ii(), Ye();
        return;
      }
      if (Y === "frame-rotate-90") {
        const We = u.mode === "frame" ? kt() : null;
        if (!We || We.locked === !0) return;
        Bf(We), j.frameRail.aspectOpen = !1, io(), gt(), xt(), ii(), Ye();
        return;
      }
      if (Y === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, lt(), Ye();
        return;
      }
      if (Y === "aspect-set") {
        const We = Dn();
        if (!We) return;
        const ht = String(D.getAttribute("data-aspect") || "1:1");
        Gf(We, ht), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, io(), gt(), xt(), lt(), Ye();
        return;
      }
      if (Y === "rotate-90") {
        const We = Dn();
        if (!We || ac()) return;
        Bf(We), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, io(), gt(), xt(), lt(), Ye();
        return;
      }
      if (Y === "bring-front") {
        kn();
        return;
      }
      if (Y === "send-back") {
        Pb();
        return;
      }
      if (Y === "duplicate") {
        l1();
        return;
      }
      if (Y === "replace-image") {
        Qb();
        return;
      }
      if (Y === "toggle-lock") {
        $b();
        return;
      }
      if (Y === "back-initial") {
        kb();
        return;
      }
      if (Y === "toggle-visible") {
        Vb();
        return;
      }
      if (Y === "delete") {
        Kf();
        return;
      }
    }
    if (Y === "reset-view") {
      if (u.mode === "frame") return;
      ls(
        { position: Eb(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((et = tc()) == null ? void 0 : et.radius) || dr },
        { mode: Nl(u.spaceMode, u.viewTransition), moved: !1 }
      );
      return;
    }
    if (Y === "frame-view") {
      if (!ti() || Nl(u.spaceMode, u.viewTransition) !== "6dof") return;
      ib();
      return;
    }
    if (Y === "toggle-grid") {
      if (u.mode === "frame") return;
      u.showGrid = !u.showGrid, II(e == null ? void 0 : e.id, u.showGrid), xc(), Ye();
      return;
    }
    if (Y === "toggle-fullscreen") {
      c.preventDefault(), c.stopPropagation(), lv();
      return;
    }
    if (Y === "toggle-output-preview-size") {
      c.preventDefault(), c.stopPropagation();
      const We = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = We, dc(() => {
        u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = We ? 1 : 0, u.outputPreviewAnimStartTs = performance.now();
      }), kp(), Ye();
      return;
    }
    const le = c.target.closest("[data-paint-history-index]");
    if (!le) return;
    const _e = Number(le.getAttribute("data-paint-history-index")), Se = u.customPaintHistory[_e];
    Se && (u.customPaintColor = $n(Se), u.paintColor = $n(Se), Rn());
  }
  A.addEventListener("click", tv);
  function nv(c) {
    const m = c.target.closest("[data-video-seek]");
    if (m) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      ro.playing && (cs.resumeAfterScrub = !0), ro.seek(Ti(Number(m.value || 0), vb()));
      return;
    }
    const _ = c.target.closest("[data-video-volume]");
    if (_) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      const Y = De(Number(_.value || 0), 0, 1);
      Ae.volume = Y, Ae.muted = Y <= 1e-4, Lf({
        hasAudio: j.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: Y
      });
      return;
    }
    const E = c.target.closest("[data-paint-size-slider]");
    if (E) {
      if (E.disabled) return;
      const Y = Math.max(1, Math.min(120, Math.round(Number(E.value)))), le = ao(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[le] = Y, Rn(), k1();
      return;
    }
    const D = c.target.closest("[data-paint-alpha-slider]");
    if (D) {
      const Y = { ...u.customPaintColor, a: De(Number(D.value) / 100, 0, 1) };
      u.customPaintColor = $n(Y), u.paintColor = $n(Y), Rn();
    }
  }
  A.addEventListener("input", nv);
  function rv(c) {
    var m;
    if (c.target.closest("[data-video-seek]")) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      cs.resumeAfterScrub && ro.play(), cs.resumeAfterScrub = !1;
      return;
    }
    if (c.target.closest("[data-video-volume]")) {
      typeof ((m = c.target) == null ? void 0 : m.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && fs();
  }
  A.addEventListener("change", rv), A.addEventListener("pointerup", (c) => {
    var m;
    if (c.target.closest("[data-video-volume]")) {
      typeof ((m = c.target) == null ? void 0 : m.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && fs();
  }), A.addEventListener("pointercancel", (c) => {
    var m;
    if (c.target.closest("[data-video-volume]")) {
      typeof ((m = c.target) == null ? void 0 : m.blur) == "function" && c.target.blur();
      return;
    }
    c.target.closest("[data-paint-size-slider]") && fs();
  }), A.addEventListener("focusout", (c) => {
    c.target.closest("[data-paint-size-slider]") && fs();
  });
  function iv(c) {
    const m = c.target.closest("[data-tip]");
    !m || !A.contains(m) || Qe.target !== m && (Qe.target = m, Qe.timer && clearTimeout(Qe.timer), Qe.timer = window.setTimeout(() => {
      Qe.target === m && T1(m);
    }, 220));
  }
  A.addEventListener("pointerover", iv);
  function ov(c) {
    var E, D;
    const m = c.target.closest("[data-tip]");
    !m || Qe.target !== m || (c.relatedTarget instanceof Element ? (D = (E = c.relatedTarget).closest) == null ? void 0 : D.call(E, "[data-tip]") : null) === m || xi();
  }
  A.addEventListener("pointerout", ov), A.addEventListener("pointerdown", (c) => {
    c.target.closest("[data-frame-roll-knob]") || xi();
  });
  function av(c, m) {
    var _e;
    if (!de) return;
    const _ = de.getBoundingClientRect(), E = De((c - _.left) / Math.max(1, _.width), 0, 1), D = 1 - De((m - _.top) / Math.max(1, _.height), 0, 1), Y = ad(u.customPaintColor), le = { ...od(Y.h, E, D), a: Number(((_e = u.customPaintColor) == null ? void 0 : _e.a) ?? 1) };
    u.customPaintColor = $n(le), u.paintColor = $n(le), Rn();
  }
  function sv(c) {
    var Y;
    if (!fe) return;
    const m = fe.getBoundingClientRect(), _ = De((c - m.left) / Math.max(1, m.width), 0, 1), E = ad(u.customPaintColor), D = { ...od(_, E.s, E.v), a: Number(((Y = u.customPaintColor) == null ? void 0 : Y.a) ?? 1) };
    u.customPaintColor = $n(D), u.paintColor = $n(D), Rn();
  }
  function _p(c, m) {
    const _ = c.pointerId;
    m(c);
    const E = (Y) => {
      Y.pointerId === _ && m(Y);
    }, D = (Y) => {
      Y.pointerId === _ && (window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", D), window.removeEventListener("pointercancel", D));
    };
    window.addEventListener("pointermove", E), window.addEventListener("pointerup", D), window.addEventListener("pointercancel", D);
  }
  de && (de.onpointerdown = (c) => {
    c.preventDefault(), c.stopPropagation(), _p(c, (m) => av(m.clientX, m.clientY));
  }), fe && (fe.onpointerdown = (c) => {
    c.preventDefault(), c.stopPropagation(), _p(c, (m) => sv(m.clientX));
  }), A.addEventListener("click", (c) => {
    var D;
    const m = c.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!m) return;
    const _ = m.getAttribute("data-action") === "confirm-accept", E = (D = j.confirmDialog) == null ? void 0 : D.resolve;
    j.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, E == null || E(_);
  });
  function Sp() {
    const c = !!u.fullscreen;
    bo(j.floatingButtons, "action", "toggle-fullscreen", {
      icon: c ? Xe.fullscreen_close : Xe.fullscreen,
      label: c ? "Exit Fullscreen" : "Fullscreen",
      tip: c ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function hs(c) {
    const m = !!c;
    u.fullscreen !== m && (u.fullscreen = m, A.classList.toggle("pano-modal-fullscreen", m), m ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), xc(), Sp(), _b(), Ye());
  }
  function wp() {
    return document.fullscreenElement === X;
  }
  async function lv() {
    var c, m;
    try {
      if (!document.fullscreenEnabled) {
        hs(!u.fullscreen);
        return;
      }
      wp() ? await ((m = document.exitFullscreen) == null ? void 0 : m.call(document)) : await ((c = X.requestFullscreen) == null ? void 0 : c.call(X));
    } catch {
      hs(!u.fullscreen);
    }
  }
  function xp() {
    document.fullscreenEnabled && hs(wp());
  }
  document.addEventListener("fullscreenchange", xp), Sp();
  function kp() {
    const c = !!u.outputPreviewExpanded;
    j.outputPreviewToggle.icon = c ? Xe.fullscreen_close : Xe.fullscreen, j.outputPreviewToggle.label = c ? "Reduce Preview" : "Expand Preview", j.outputPreviewToggle.tip = c ? "Reduce preview" : "Expand preview";
  }
  kp();
  const kc = e.onConnectionsChange;
  let Mc = null, Mp = () => {
  };
  !n && t === "stickers" && (Mp = wy(e, (c = "sync") => {
    c === "executed" && (oE(k, Al), lc(), S && Xi()), If(c);
  }, { editor: !0 }), Mc = function(...m) {
    typeof kc == "function" && kc.apply(this, m), lc(), qr(this, "connections");
  }, e.onConnectionsChange = Mc), !n && !w && Mm.set(String(e.id ?? "0"), () => Tf());
  let so = null;
  async function lo() {
    return so || (so = (async () => {
      var c, m, _, E, D, Y, le, _e;
      return Mm.delete(String(e.id ?? "0")), _1(), n || Vn(), document.fullscreenElement === X && ((c = document.exitFullscreen) == null || c.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", xp), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Uf && (e.__panoFlushStateBeforeQueue = null), (_ = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || _.call(m), (D = (E = e.graph) == null ? void 0 : E.setDirtyCanvas) == null || D.call(E, !0, !0), (_e = (le = (Y = Zn) == null ? void 0 : Y.canvas) == null ? void 0 : le.setDirty) == null || _e.call(le, !0, !0), xi(), Fe.cancel(), Tb(), Ae instanceof HTMLVideoElement && Ae.pause(), jb.forEach((Se) => {
        try {
          Se();
        } catch {
        }
      }), Re.dispose(), Si(!1), window.removeEventListener("keydown", Pp, !0), window.removeEventListener("keydown", Np, !0), window.removeEventListener("keydown", Cp, !0), window.removeEventListener("keyup", Ip, !0), window.removeEventListener("keydown", ms, !0), window.removeEventListener("keyup", ms, !0), window.removeEventListener("blur", Ep), window.removeEventListener("keydown", Op, !0), window.removeEventListener("dragenter", mp, !0), window.removeEventListener("dragover", gp, !0), window.removeEventListener("dragleave", yp, !0), window.removeEventListener("drop", bp, !0), !n && t === "stickers" && (e.onConnectionsChange === Mc && (e.onConnectionsChange = kc), Mp()), we.unmount(), U.remove(), p1(), so = null, !0;
    })().catch((c) => (console.error("[PanoramaCutoutSync] closeEditor failed", c), so = null, !1)), so);
  }
  function Pp(c) {
    var m, _, E, D, Y;
    if (c.key === "Escape") {
      if (Qo()) {
        c.preventDefault(), c.stopPropagation(), (m = c.stopImmediatePropagation) == null || m.call(c);
        return;
      }
      if (u.fullscreen && document.fullscreenElement === X) {
        c.preventDefault(), c.stopPropagation(), (_ = c.stopImmediatePropagation) == null || _.call(c), (E = document.exitFullscreen) == null || E.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        c.preventDefault(), c.stopPropagation(), (D = c.stopImmediatePropagation) == null || D.call(c), hs(!1);
        return;
      }
      c.preventDefault(), c.stopPropagation(), (Y = c.stopImmediatePropagation) == null || Y.call(c), lo();
    }
  }
  function Np(c) {
    const m = String(c.key || ""), _ = String(c.code || ""), E = Number(c.keyCode || 0);
    if (!(m === "Delete" || _ === "Delete" || E === 46) && !(m === "Backspace" || _ === "Backspace" || E === 8)) return;
    const le = c.target, _e = ((le == null ? void 0 : le.tagName) || "").toUpperCase();
    if (_e === "INPUT" || _e === "TEXTAREA" || le != null && le.isContentEditable) return;
    if (O.selection) {
      eb(), c.preventDefault(), c.stopPropagation();
      return;
    }
    if (c1()) {
      c.preventDefault(), c.stopPropagation();
      return;
    }
    Dn() && (Kf(), c.preventDefault(), c.stopPropagation());
  }
  function Ap(c) {
    if (c.code !== "Space" || c.ctrlKey || c.metaKey || c.altKey || n || !v || !j.timeline.visible || j.confirmDialog.visible) return !1;
    const m = c.composedPath()[0];
    if (m !== document.body && m !== document.documentElement && !X.contains(m)) return !1;
    const _ = ((m == null ? void 0 : m.tagName) || "").toUpperCase();
    return _ === "INPUT" ? !QC.has(String(m.type || "text").toLowerCase()) : _ !== "TEXTAREA" && _ !== "SELECT" && !(m != null && m.isContentEditable);
  }
  function Cp(c) {
    Ap(c) && (c.preventDefault(), c.stopPropagation(), c.repeat || Rf());
  }
  function Ip(c) {
    Ap(c) && (c.preventDefault(), c.stopPropagation());
  }
  function ms(c) {
    const m = !!(c.ctrlKey || c.metaKey), _ = !!c.altKey;
    u.marqueeModifier === m && u.altModifier === _ || (u.marqueeModifier = m, u.altModifier = _, ri(), Pt(u.pointerPos));
  }
  function Ep() {
    u.marqueeModifier = !1, u.altModifier = !1, ri(), Pt(u.pointerPos);
  }
  function Op(c) {
    if (n || !c.ctrlKey && !c.metaKey) return;
    const m = String(c.key || "").toLowerCase(), _ = String(c.code || "");
    if (m !== "z" && _ !== "KeyZ") return;
    const E = c.target, D = ((E == null ? void 0 : E.tagName) || "").toUpperCase();
    if (D === "INPUT" || D === "TEXTAREA" || E != null && E.isContentEditable) return;
    const { canUndo: Y, canRedo: le } = lb();
    c.shiftKey && !le || !c.shiftKey && !Y || (cc(c.shiftKey ? 1 : -1), c.preventDefault(), c.stopPropagation());
  }
  window.addEventListener("keydown", Pp, !0), window.addEventListener("keydown", Np, !0), window.addEventListener("keydown", Cp, !0), window.addEventListener("keyup", Ip, !0), window.addEventListener("keydown", ms, !0), window.addEventListener("keyup", ms, !0), window.addEventListener("blur", Ep), window.addEventListener("keydown", Op, !0), X.addEventListener("pointerdown", (c) => {
    c.target === X && lo();
  });
  function yr(c, m, { rollbackState: _ = !1 } = {}) {
    let E = "";
    try {
      _ && (E = JSON.stringify(y)), m();
    } catch (D) {
      if (E)
        try {
          const Y = JSON.parse(E);
          Object.keys(y).forEach((le) => delete y[le]), Object.assign(y, Y), n || Vn();
        } catch (Y) {
          console.error(`[PanoramaStickers] editor boot step "${c}" rollback failed`, Y);
        }
      j.stageWarningDetail = `boot:${c}`, console.error(`[PanoramaStickers] editor boot step "${c}" failed`, D);
    }
  }
  yr("cutout-focus", Kt), !n && t === "stickers" && yr("external-sticker-sync", () => If("open"), { rollbackState: !0 }), e1().catch((c) => {
    j.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', c);
  }), yr("history", gt), yr("undo-redo", Lb), yr("paint-ui", Rn), yr("side-panel", it), yr("look-at-frame", Db), yr("video-source", lc), yr("canvas-size", pc), yr("cursor", () => Pt(u.pointerPos)), Ye(), Mb();
}
Zn.registerExtension(rP({
  app: Zn,
  openEditor: aE,
  attachStickers: yN,
  attachCutout: bN,
  attachPreview: gN,
  restoreOutput: rN,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: oI
}));
