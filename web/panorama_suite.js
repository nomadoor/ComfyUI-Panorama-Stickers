import * as Ya from "../../scripts/app.js";
import { app as qn } from "../../scripts/app.js";
import { api as ln } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function eu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const At = {}, Di = [], ur = () => {
}, Qf = () => !1, Bs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Us = (e) => e.startsWith("onUpdate:"), fn = Object.assign, tu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, kg = Object.prototype.hasOwnProperty, bt = (e, t) => kg.call(e, t), tt = Array.isArray, Li = (e) => ca(e) === "[object Map]", ep = (e) => ca(e) === "[object Set]", ud = (e) => ca(e) === "[object Date]", it = (e) => typeof e == "function", Bt = (e) => typeof e == "string", hr = (e) => typeof e == "symbol", Nt = (e) => e !== null && typeof e == "object", tp = (e) => (Nt(e) || it(e)) && it(e.then) && it(e.catch), np = Object.prototype.toString, ca = (e) => np.call(e), Mg = (e) => ca(e).slice(8, -1), rp = (e) => ca(e) === "[object Object]", nu = (e) => Bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = /* @__PURE__ */ eu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ys = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Pg = /-\w/g, mn = Ys(
  (e) => e.replace(Pg, (t) => t.slice(1).toUpperCase())
), Ng = /\B([A-Z])/g, hi = Ys(
  (e) => e.replace(Ng, "-$1").toLowerCase()
), qs = Ys((e) => e.charAt(0).toUpperCase() + e.slice(1)), bl = Ys(
  (e) => e ? `on${qs(e)}` : ""
), lr = (e, t) => !Object.is(e, t), qa = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, ip = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ru = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dd;
const Xs = () => dd || (dd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Bt(n) ? Eg(n) : Pt(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Bt(e) || Nt(e))
    return e;
}
const Cg = /;(?![^(]*\))/g, Ag = /:([^]+)/, Ig = /\/\*[^]*?\*\//g;
function Eg(e) {
  const t = {};
  return e.replace(Ig, "").split(Cg).forEach((r) => {
    if (r) {
      const n = r.split(Ag);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (Bt(e))
    t = e;
  else if (tt(e))
    for (let r = 0; r < e.length; r++) {
      const n = ct(e[r]);
      n && (t += n + " ");
    }
  else if (Nt(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Og = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fg = /* @__PURE__ */ eu(Og);
function op(e) {
  return !!e || e === "";
}
function Tg(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = iu(e[n], t[n]);
  return r;
}
function iu(e, t) {
  if (e === t) return !0;
  let r = ud(e), n = ud(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = hr(e), n = hr(t), r || n)
    return e === t;
  if (r = tt(e), n = tt(t), r || n)
    return r && n ? Tg(e, t) : !1;
  if (r = Nt(e), n = Nt(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !iu(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ap = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Bt(e) ? e : e == null ? "" : tt(e) || Nt(e) && (e.toString === np || !it(e.toString)) ? ap(e) ? rt(e.value) : JSON.stringify(e, sp, 2) : String(e), sp = (e, t) => ap(t) ? sp(e, t.value) : Li(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[vl(n, o) + " =>"] = i, r),
    {}
  )
} : ep(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => vl(r))
} : hr(t) ? vl(t) : Nt(t) && !tt(t) && !rp(t) ? String(t) : t, vl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    hr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _n;
class Dg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = _n, !t && _n && (this.index = (_n.scopes || (_n.scopes = [])).push(
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
      const r = _n;
      try {
        return _n = this, t();
      } finally {
        _n = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _n, _n = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (_n = this.prevScope, this.prevScope = void 0);
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
function Lg() {
  return _n;
}
let It;
const _l = /* @__PURE__ */ new WeakSet();
class lp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _n && _n.active && _n.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _l.has(this) && (_l.delete(this), this.trigger()));
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
    this.flags |= 2, fd(this), dp(this);
    const t = It, r = Xn;
    It = this, Xn = !0;
    try {
      return this.fn();
    } finally {
      fp(this), It = t, Xn = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        su(t);
      this.deps = this.depsTail = void 0, fd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _l.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oc(this) && this.run();
  }
  get dirty() {
    return oc(this);
  }
}
let cp = 0, Vo, Ro;
function up(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ro, Ro = e;
    return;
  }
  e.next = Vo, Vo = e;
}
function ou() {
  cp++;
}
function au() {
  if (--cp > 0)
    return;
  if (Ro) {
    let t = Ro;
    for (Ro = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Vo; ) {
    let t = Vo;
    for (Vo = void 0; t; ) {
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
function dp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), su(n), Vg(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function oc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (pp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function pp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Uo) || (e.globalVersion = Uo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = It, n = Xn;
  It = e, Xn = !0;
  try {
    dp(e);
    const i = e.fn(e._value);
    (t.version === 0 || lr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    It = r, Xn = n, fp(e), e.flags &= -3;
  }
}
function su(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      su(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Vg(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Xn = !0;
const hp = [];
function Ir() {
  hp.push(Xn), Xn = !1;
}
function Er() {
  const e = hp.pop();
  Xn = e === void 0 ? !0 : e;
}
function fd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = It;
    It = void 0;
    try {
      t();
    } finally {
      It = r;
    }
  }
}
let Uo = 0;
class Rg {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!It || !Xn || It === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== It)
      r = this.activeLink = new Rg(It, this), It.deps ? (r.prevDep = It.depsTail, It.depsTail.nextDep = r, It.depsTail = r) : It.deps = It.depsTail = r, mp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = It.depsTail, r.nextDep = void 0, It.depsTail.nextDep = r, It.depsTail = r, It.deps === r && (It.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Uo++, this.notify(t);
  }
  notify(t) {
    ou();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      au();
    }
  }
}
function mp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        mp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const ac = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ Symbol(
  ""
), sc = /* @__PURE__ */ Symbol(
  ""
), Yo = /* @__PURE__ */ Symbol(
  ""
);
function an(e, t, r) {
  if (Xn && It) {
    let n = ac.get(e);
    n || ac.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new lu()), i.map = n, i.key = r), i.track();
  }
}
function kr(e, t, r, n, i, o) {
  const a = ac.get(e);
  if (!a) {
    Uo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (ou(), t === "clear")
    a.forEach(s);
  else {
    const l = tt(e), d = l && nu(r);
    if (l && r === "length") {
      const u = Number(n);
      a.forEach((c, f) => {
        (f === "length" || f === Yo || !hr(f) && f >= u) && s(c);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), d && s(a.get(Yo)), t) {
        case "add":
          l ? d && s(a.get("length")) : (s(a.get(ii)), Li(e) && s(a.get(sc)));
          break;
        case "delete":
          l || (s(a.get(ii)), Li(e) && s(a.get(sc)));
          break;
        case "set":
          Li(e) && s(a.get(ii));
          break;
      }
  }
  au();
}
function xi(e) {
  const t = /* @__PURE__ */ yt(e);
  return t === e ? t : (an(t, "iterate", Yo), /* @__PURE__ */ zn(e) ? t : t.map(Qn));
}
function Js(e) {
  return an(e = /* @__PURE__ */ yt(e), "iterate", Yo), e;
}
function or(e, t) {
  return /* @__PURE__ */ Or(e) ? Ki(/* @__PURE__ */ oi(e) ? Qn(t) : t) : Qn(t);
}
const $g = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sl(this, Symbol.iterator, (e) => or(this, e));
  },
  concat(...e) {
    return xi(this).concat(
      ...e.map((t) => tt(t) ? xi(t) : t)
    );
  },
  entries() {
    return Sl(this, "entries", (e) => (e[1] = or(this, e[1]), e));
  },
  every(e, t) {
    return br(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return br(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => or(this, n)),
      arguments
    );
  },
  find(e, t) {
    return br(
      this,
      "find",
      e,
      t,
      (r) => or(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return br(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return br(
      this,
      "findLast",
      e,
      t,
      (r) => or(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return br(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return br(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return wl(this, "includes", e);
  },
  indexOf(...e) {
    return wl(this, "indexOf", e);
  },
  join(e) {
    return xi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return wl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return br(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vo(this, "pop");
  },
  push(...e) {
    return vo(this, "push", e);
  },
  reduce(e, ...t) {
    return pd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return pd(this, "reduceRight", e, t);
  },
  shift() {
    return vo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return br(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vo(this, "splice", e);
  },
  toReversed() {
    return xi(this).toReversed();
  },
  toSorted(e) {
    return xi(this).toSorted(e);
  },
  toSpliced(...e) {
    return xi(this).toSpliced(...e);
  },
  unshift(...e) {
    return vo(this, "unshift", e);
  },
  values() {
    return Sl(this, "values", (e) => or(this, e));
  }
};
function Sl(e, t, r) {
  const n = Js(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ zn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const zg = Array.prototype;
function br(e, t, r, n, i, o) {
  const a = Js(e), s = a !== e && !/* @__PURE__ */ zn(e), l = a[t];
  if (l !== zg[t]) {
    const c = l.apply(e, o);
    return s ? Qn(c) : c;
  }
  let d = r;
  a !== e && (s ? d = function(c, f) {
    return r.call(this, or(e, c), f, e);
  } : r.length > 2 && (d = function(c, f) {
    return r.call(this, c, f, e);
  }));
  const u = l.call(a, d, n);
  return s && i ? i(u) : u;
}
function pd(e, t, r, n) {
  const i = Js(e), o = i !== e && !/* @__PURE__ */ zn(e);
  let a = r, s = !1;
  i !== e && (o ? (s = n.length === 0, a = function(d, u, c) {
    return s && (s = !1, d = or(e, d)), r.call(this, d, or(e, u), c, e);
  }) : r.length > 3 && (a = function(d, u, c) {
    return r.call(this, d, u, c, e);
  }));
  const l = i[t](a, ...n);
  return s ? or(e, l) : l;
}
function wl(e, t, r) {
  const n = /* @__PURE__ */ yt(e);
  an(n, "iterate", Yo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ du(r[0]) ? (r[0] = /* @__PURE__ */ yt(r[0]), n[t](...r)) : i;
}
function vo(e, t, r = []) {
  Ir(), ou();
  const n = (/* @__PURE__ */ yt(e))[t].apply(e, r);
  return au(), Er(), n;
}
const jg = /* @__PURE__ */ eu("__proto__,__v_isRef,__isVue"), gp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hr)
);
function Hg(e) {
  hr(e) || (e = String(e));
  const t = /* @__PURE__ */ yt(this);
  return an(t, "has", e), t.hasOwnProperty(e);
}
class yp {
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
      return n === (i ? o ? Zg : Sp : o ? _p : vp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = tt(t);
    if (!i) {
      let l;
      if (a && (l = $g[r]))
        return l;
      if (r === "hasOwnProperty")
        return Hg;
    }
    const s = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ un(t) ? t : n
    );
    if ((hr(r) ? gp.has(r) : jg(r)) || (i || an(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ un(s)) {
      const l = a && nu(r) ? s : s.value;
      return i && Nt(l) ? /* @__PURE__ */ cc(l) : l;
    }
    return Nt(s) ? i ? /* @__PURE__ */ cc(s) : /* @__PURE__ */ Ji(s) : s;
  }
}
class bp extends yp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = tt(t) && nu(r);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Or(o);
      if (!/* @__PURE__ */ zn(n) && !/* @__PURE__ */ Or(n) && (o = /* @__PURE__ */ yt(o), n = /* @__PURE__ */ yt(n)), !a && /* @__PURE__ */ un(o) && !/* @__PURE__ */ un(n))
        return d || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : bt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ un(t) ? t : i
    );
    return t === /* @__PURE__ */ yt(i) && (s ? lr(n, o) && kr(t, "set", r, n) : kr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = bt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && kr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!hr(r) || !gp.has(r)) && an(t, "has", r), n;
  }
  ownKeys(t) {
    return an(
      t,
      "iterate",
      tt(t) ? "length" : ii
    ), Reflect.ownKeys(t);
  }
}
class Gg extends yp {
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
const Wg = /* @__PURE__ */ new bp(), Kg = /* @__PURE__ */ new Gg(), Bg = /* @__PURE__ */ new bp(!0);
const lc = (e) => e, Ea = (e) => Reflect.getPrototypeOf(e);
function Ug(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ yt(i), a = Li(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...n), u = r ? lc : t ? Ki : Qn;
    return !t && an(
      o,
      "iterate",
      l ? sc : ii
    ), fn(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: c, done: f } = d.next();
          return f ? { value: c, done: f } : {
            value: s ? [u(c[0]), u(c[1])] : u(c),
            done: f
          };
        }
      }
    );
  };
}
function Oa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yg(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ yt(o), s = /* @__PURE__ */ yt(i);
      e || (lr(i, s) && an(a, "get", i), an(a, "get", s));
      const { has: l } = Ea(a), d = t ? lc : e ? Ki : Qn;
      if (l.call(a, i))
        return d(o.get(i));
      if (l.call(a, s))
        return d(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && an(/* @__PURE__ */ yt(i), "iterate", ii), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ yt(o), s = /* @__PURE__ */ yt(i);
      return e || (lr(i, s) && an(a, "has", i), an(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ yt(s), d = t ? lc : e ? Ki : Qn;
      return !e && an(l, "iterate", ii), s.forEach((u, c) => i.call(o, d(u), d(c), a));
    }
  };
  return fn(
    r,
    e ? {
      add: Oa("add"),
      set: Oa("set"),
      delete: Oa("delete"),
      clear: Oa("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ yt(this), a = Ea(o), s = /* @__PURE__ */ yt(i), l = !t && !/* @__PURE__ */ zn(i) && !/* @__PURE__ */ Or(i) ? s : i;
        return a.has.call(o, l) || lr(i, l) && a.has.call(o, i) || lr(s, l) && a.has.call(o, s) || (o.add(l), kr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ zn(o) && !/* @__PURE__ */ Or(o) && (o = /* @__PURE__ */ yt(o));
        const a = /* @__PURE__ */ yt(this), { has: s, get: l } = Ea(a);
        let d = s.call(a, i);
        d || (i = /* @__PURE__ */ yt(i), d = s.call(a, i));
        const u = l.call(a, i);
        return a.set(i, o), d ? lr(o, u) && kr(a, "set", i, o) : kr(a, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ yt(this), { has: a, get: s } = Ea(o);
        let l = a.call(o, i);
        l || (i = /* @__PURE__ */ yt(i), l = a.call(o, i)), s && s.call(o, i);
        const d = o.delete(i);
        return l && kr(o, "delete", i, void 0), d;
      },
      clear() {
        const i = /* @__PURE__ */ yt(this), o = i.size !== 0, a = i.clear();
        return o && kr(
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
    r[i] = Ug(i, e, t);
  }), r;
}
function cu(e, t) {
  const r = Yg(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    bt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const qg = {
  get: /* @__PURE__ */ cu(!1, !1)
}, Xg = {
  get: /* @__PURE__ */ cu(!1, !0)
}, Jg = {
  get: /* @__PURE__ */ cu(!0, !1)
};
const vp = /* @__PURE__ */ new WeakMap(), _p = /* @__PURE__ */ new WeakMap(), Sp = /* @__PURE__ */ new WeakMap(), Zg = /* @__PURE__ */ new WeakMap();
function Qg(e) {
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
function e0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Qg(Mg(e));
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  return /* @__PURE__ */ Or(e) ? e : uu(
    e,
    !1,
    Wg,
    qg,
    vp
  );
}
// @__NO_SIDE_EFFECTS__
function t0(e) {
  return uu(
    e,
    !1,
    Bg,
    Xg,
    _p
  );
}
// @__NO_SIDE_EFFECTS__
function cc(e) {
  return uu(
    e,
    !0,
    Kg,
    Jg,
    Sp
  );
}
function uu(e, t, r, n, i) {
  if (!Nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = e0(e);
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
function oi(e) {
  return /* @__PURE__ */ Or(e) ? /* @__PURE__ */ oi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function du(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ yt(t) : e;
}
function n0(e) {
  return !bt(e, "__v_skip") && Object.isExtensible(e) && ip(e, "__v_skip", !0), e;
}
const Qn = (e) => Nt(e) ? /* @__PURE__ */ Ji(e) : e, Ki = (e) => Nt(e) ? /* @__PURE__ */ cc(e) : e;
// @__NO_SIDE_EFFECTS__
function un(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return wp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return wp(e, !0);
}
function wp(e, t) {
  return /* @__PURE__ */ un(e) ? e : new r0(e, t);
}
class r0 {
  constructor(t, r) {
    this.dep = new lu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ yt(t), this._value = r ? t : Qn(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ zn(t) || /* @__PURE__ */ Or(t);
    t = n ? t : /* @__PURE__ */ yt(t), lr(t, r) && (this._rawValue = t, this._value = n ? t : Qn(t), this.dep.trigger());
  }
}
function et(e) {
  return /* @__PURE__ */ un(e) ? e.value : e;
}
const i0 = {
  get: (e, t, r) => t === "__v_raw" ? e : et(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ un(i) && !/* @__PURE__ */ un(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function xp(e) {
  return /* @__PURE__ */ oi(e) ? e : new Proxy(e, i0);
}
class o0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new lu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    It !== this)
      return up(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return pp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function a0(e, t, r = !1) {
  let n, i;
  return it(e) ? n = e : (n = e.get, i = e.set), new o0(n, i, r);
}
const Fa = {}, ps = /* @__PURE__ */ new WeakMap();
let Qr;
function s0(e, t = !1, r = Qr) {
  if (r) {
    let n = ps.get(r);
    n || ps.set(r, n = []), n.push(e);
  }
}
function l0(e, t, r = At) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, d = (D) => i ? D : /* @__PURE__ */ zn(D) || i === !1 || i === 0 ? Mr(D, 1) : Mr(D);
  let u, c, f, p, m = !1, y = !1;
  if (/* @__PURE__ */ un(e) ? (c = () => e.value, m = /* @__PURE__ */ zn(e)) : /* @__PURE__ */ oi(e) ? (c = () => d(e), m = !0) : tt(e) ? (y = !0, m = e.some((D) => /* @__PURE__ */ oi(D) || /* @__PURE__ */ zn(D)), c = () => e.map((D) => {
    if (/* @__PURE__ */ un(D))
      return D.value;
    if (/* @__PURE__ */ oi(D))
      return d(D);
    if (it(D))
      return l ? l(D, 2) : D();
  })) : it(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (f) {
      Ir();
      try {
        f();
      } finally {
        Er();
      }
    }
    const D = Qr;
    Qr = u;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      Qr = D;
    }
  } : c = ur, t && i) {
    const D = c, P = i === !0 ? 1 / 0 : i;
    c = () => Mr(D(), P);
  }
  const b = Lg(), T = () => {
    u.stop(), b && b.active && tu(b.effects, u);
  };
  if (o && t) {
    const D = t;
    t = (...P) => {
      D(...P), T();
    };
  }
  let U = y ? new Array(e.length).fill(Fa) : Fa;
  const H = (D) => {
    if (!(!(u.flags & 1) || !u.dirty && !D))
      if (t) {
        const P = u.run();
        if (i || m || (y ? P.some((W, $) => lr(W, U[$])) : lr(P, U))) {
          f && f();
          const W = Qr;
          Qr = u;
          try {
            const $ = [
              P,
              // pass undefined as the old value when it's changed for the first time
              U === Fa ? void 0 : y && U[0] === Fa ? [] : U,
              p
            ];
            U = P, l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Qr = W;
          }
        }
      } else
        u.run();
  };
  return s && s(H), u = new lp(c), u.scheduler = a ? () => a(H, !1) : H, p = (D) => s0(D, !1, u), f = u.onStop = () => {
    const D = ps.get(u);
    if (D) {
      if (l)
        l(D, 4);
      else
        for (const P of D) P();
      ps.delete(u);
    }
  }, t ? n ? H(!0) : U = u.run() : a ? a(H.bind(null, !0), !0) : u.run(), T.pause = u.pause.bind(u), T.resume = u.resume.bind(u), T.stop = T, T;
}
function Mr(e, t = 1 / 0, r) {
  if (t <= 0 || !Nt(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ un(e))
    Mr(e.value, t, r);
  else if (tt(e))
    for (let n = 0; n < e.length; n++)
      Mr(e[n], t, r);
  else if (ep(e) || Li(e))
    e.forEach((n) => {
      Mr(n, t, r);
    });
  else if (rp(e)) {
    for (const n in e)
      Mr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Mr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ua(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Zs(i, t, r);
  }
}
function mr(e, t, r, n) {
  if (it(e)) {
    const i = ua(e, t, r, n);
    return i && tp(i) && i.catch((o) => {
      Zs(o, t, r);
    }), i;
  }
  if (tt(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(mr(e[o], t, r, n));
    return i;
  }
}
function Zs(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: a } = t && t.appContext.config || At;
  if (t) {
    let s = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${r}`;
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
      Ir(), ua(o, null, 10, [
        e,
        l,
        d
      ]), Er();
      return;
    }
  }
  c0(e, r, i, n, a);
}
function c0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const hn = [];
let ir = -1;
const Vi = [];
let Vr = null, Pi = 0;
const kp = /* @__PURE__ */ Promise.resolve();
let hs = null;
function Qs(e) {
  const t = hs || kp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function u0(e) {
  let t = ir + 1, r = hn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = hn[n], o = qo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function fu(e) {
  if (!(e.flags & 1)) {
    const t = qo(e), r = hn[hn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qo(r) ? hn.push(e) : hn.splice(u0(t), 0, e), e.flags |= 1, Mp();
  }
}
function Mp() {
  hs || (hs = kp.then(Np));
}
function d0(e) {
  tt(e) ? Vi.push(...e) : Vr && e.id === -1 ? Vr.splice(Pi + 1, 0, e) : e.flags & 1 || (Vi.push(e), e.flags |= 1), Mp();
}
function hd(e, t, r = ir + 1) {
  for (; r < hn.length; r++) {
    const n = hn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      hn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Pp(e) {
  if (Vi.length) {
    const t = [...new Set(Vi)].sort(
      (r, n) => qo(r) - qo(n)
    );
    if (Vi.length = 0, Vr) {
      Vr.push(...t);
      return;
    }
    for (Vr = t, Pi = 0; Pi < Vr.length; Pi++) {
      const r = Vr[Pi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Vr = null, Pi = 0;
  }
}
const qo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Np(e) {
  try {
    for (ir = 0; ir < hn.length; ir++) {
      const t = hn[ir];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ua(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ir < hn.length; ir++) {
      const t = hn[ir];
      t && (t.flags &= -2);
    }
    ir = -1, hn.length = 0, Pp(), hs = null, (hn.length || Vi.length) && Np();
  }
}
let On = null, Cp = null;
function ms(e) {
  const t = On;
  return On = e, Cp = e && e.type.__scopeId || null, t;
}
function Ap(e, t = On, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Pd(-1);
    const o = ms(t);
    let a;
    try {
      a = e(...i);
    } finally {
      ms(o), n._d && Pd(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Cr(e, t) {
  if (On === null)
    return e;
  const r = il(On), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, a, s, l = At] = t[i];
    o && (it(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Mr(a), n.push({
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
function Ur(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    o && (s.oldValue = o[a].value);
    let l = s.dir[n];
    l && (Ir(), mr(l, r, 8, [
      e.el,
      s,
      e,
      t
    ]), Er());
  }
}
function f0(e, t) {
  if (sn) {
    let r = sn.provides;
    const n = sn.parent && sn.parent.provides;
    n === r && (r = sn.provides = Object.create(n)), r[e] = t;
  }
}
function Xa(e, t, r = !1) {
  const n = uy();
  if (n || Ri) {
    let i = Ri ? Ri._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && it(t) ? t.call(n && n.proxy) : t;
  }
}
const p0 = /* @__PURE__ */ Symbol.for("v-scx"), h0 = () => Xa(p0);
function ai(e, t, r) {
  return Ip(e, t, r);
}
function Ip(e, t, r = At) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = fn({}, r), l = t && n || !t && o !== "post";
  let d;
  if (Jo) {
    if (o === "sync") {
      const p = h0();
      d = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!l) {
      const p = () => {
      };
      return p.stop = ur, p.resume = ur, p.pause = ur, p;
    }
  }
  const u = sn;
  s.call = (p, m, y) => mr(p, u, m, y);
  let c = !1;
  o === "post" ? s.scheduler = (p) => {
    vn(p, u && u.suspense);
  } : o !== "sync" && (c = !0, s.scheduler = (p, m) => {
    m ? p() : fu(p);
  }), s.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const f = l0(e, t, s);
  return Jo && (d ? d.push(f) : l && f()), f;
}
function m0(e, t, r) {
  const n = this.proxy, i = Bt(e) ? e.includes(".") ? Ep(n, e) : () => n[e] : e.bind(n, n);
  let o;
  it(t) ? o = t : (o = t.handler, r = t);
  const a = fa(this), s = Ip(i, o.bind(n), r);
  return a(), s;
}
function Ep(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const g0 = /* @__PURE__ */ Symbol("_vte"), y0 = (e) => e.__isTeleport, b0 = /* @__PURE__ */ Symbol("_leaveCb");
function pu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, pu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Op(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function md(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const gs = /* @__PURE__ */ new WeakMap();
function $o(e, t, r, n, i = !1) {
  if (tt(e)) {
    e.forEach(
      (y, b) => $o(
        y,
        t && (tt(t) ? t[b] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (zo(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && $o(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? il(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === At ? s.refs = {} : s.refs, c = s.setupState, f = /* @__PURE__ */ yt(c), p = c === At ? Qf : (y) => md(u, y) ? !1 : bt(f, y), m = (y, b) => !(b && md(u, b));
  if (d != null && d !== l) {
    if (gd(t), Bt(d))
      u[d] = null, p(d) && (c[d] = null);
    else if (/* @__PURE__ */ un(d)) {
      const y = t;
      m(d, y.k) && (d.value = null), y.k && (u[y.k] = null);
    }
  }
  if (it(l))
    ua(l, s, 12, [a, u]);
  else {
    const y = Bt(l), b = /* @__PURE__ */ un(l);
    if (y || b) {
      const T = () => {
        if (e.f) {
          const U = y ? p(l) ? c[l] : u[l] : m() || !e.k ? l.value : u[e.k];
          if (i)
            tt(U) && tu(U, o);
          else if (tt(U))
            U.includes(o) || U.push(o);
          else if (y)
            u[l] = [o], p(l) && (c[l] = u[l]);
          else {
            const H = [o];
            m(l, e.k) && (l.value = H), e.k && (u[e.k] = H);
          }
        } else y ? (u[l] = a, p(l) && (c[l] = a)) : b && (m(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const U = () => {
          T(), gs.delete(e);
        };
        U.id = -1, gs.set(e, U), vn(U, r);
      } else
        gd(e), T();
    }
  }
}
function gd(e) {
  const t = gs.get(e);
  t && (t.flags |= 8, gs.delete(e));
}
Xs().requestIdleCallback;
Xs().cancelIdleCallback;
const zo = (e) => !!e.type.__asyncLoader, Fp = (e) => e.type.__isKeepAlive;
function v0(e, t) {
  Tp(e, "a", t);
}
function _0(e, t) {
  Tp(e, "da", t);
}
function Tp(e, t, r = sn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (el(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Fp(i.parent.vnode) && S0(n, t, r, i), i = i.parent;
  }
}
function S0(e, t, r, n) {
  const i = el(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Dp(() => {
    tu(n[t], i);
  }, r);
}
function el(e, t, r = sn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Ir();
      const s = fa(r), l = mr(t, r, e, a);
      return s(), Er(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Fr = (e) => (t, r = sn) => {
  (!Jo || e === "sp") && el(e, (...n) => t(...n), r);
}, w0 = Fr("bm"), tl = Fr("m"), x0 = Fr(
  "bu"
), k0 = Fr("u"), da = Fr(
  "bum"
), Dp = Fr("um"), M0 = Fr(
  "sp"
), P0 = Fr("rtg"), N0 = Fr("rtc");
function C0(e, t = sn) {
  el("ec", e, t);
}
const A0 = "components", Lp = /* @__PURE__ */ Symbol.for("v-ndc");
function I0(e) {
  return Bt(e) ? E0(A0, e, !1) || e : e || Lp;
}
function E0(e, t, r = !0, n = !1) {
  const i = On || sn;
  if (i) {
    const o = i.type;
    {
      const s = my(
        o,
        !1
      );
      if (s && (s === t || s === mn(t) || s === qs(mn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      yd(i[e] || o[e], t) || // global registration
      yd(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function yd(e, t) {
  return e && (e[t] || e[mn(t)] || e[qs(mn(t))]);
}
function xt(e, t, r, n) {
  let i;
  const o = r, a = tt(e);
  if (a || Bt(e)) {
    const s = a && /* @__PURE__ */ oi(e);
    let l = !1, d = !1;
    s && (l = !/* @__PURE__ */ zn(e), d = /* @__PURE__ */ Or(e), e = Js(e)), i = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(
        l ? d ? Ki(Qn(e[u])) : Qn(e[u]) : e[u],
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
const uc = (e) => e ? rh(e) ? il(e) : uc(e.parent) : null, jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => uc(e.parent),
    $root: (e) => uc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Rp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qs.bind(e.proxy)),
    $watch: (e) => m0.bind(e)
  })
), xl = (e, t) => e !== At && !e.__isScriptSetup && bt(e, t), O0 = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: a, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const f = a[t];
      if (f !== void 0)
        switch (f) {
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
        if (xl(n, t))
          return a[t] = 1, n[t];
        if (i !== At && bt(i, t))
          return a[t] = 2, i[t];
        if (bt(o, t))
          return a[t] = 3, o[t];
        if (r !== At && bt(r, t))
          return a[t] = 4, r[t];
        dc && (a[t] = 0);
      }
    }
    const d = jo[t];
    let u, c;
    if (d)
      return t === "$attrs" && an(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = s.__cssModules) && (u = u[t])
    )
      return u;
    if (r !== At && bt(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      c = l.config.globalProperties, bt(c, t)
    )
      return c[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return xl(i, t) ? (i[t] = r, !0) : n !== At && bt(n, t) ? (n[t] = r, !0) : bt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: a }
  }, s) {
    let l;
    return !!(r[s] || e !== At && s[0] !== "$" && bt(e, s) || xl(t, s) || bt(o, s) || bt(n, s) || bt(jo, s) || bt(i.config.globalProperties, s) || (l = a.__cssModules) && l[s]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : bt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function bd(e) {
  return tt(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let dc = !0;
function F0(e) {
  const t = Rp(e), r = e.proxy, n = e.ctx;
  dc = !1, t.beforeCreate && vd(t.beforeCreate, e, "bc");
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
    mounted: f,
    beforeUpdate: p,
    updated: m,
    activated: y,
    deactivated: b,
    beforeDestroy: T,
    beforeUnmount: U,
    destroyed: H,
    unmounted: D,
    render: P,
    renderTracked: W,
    renderTriggered: $,
    errorCaptured: te,
    serverPrefetch: re,
    // public API
    expose: ce,
    inheritAttrs: E,
    // assets
    components: G,
    directives: ie,
    filters: pe
  } = t;
  if (d && T0(d, n, null), a)
    for (const ee in a) {
      const S = a[ee];
      it(S) && (n[ee] = S.bind(r));
    }
  if (i) {
    const ee = i.call(r, r);
    Nt(ee) && (e.data = /* @__PURE__ */ Ji(ee));
  }
  if (dc = !0, o)
    for (const ee in o) {
      const S = o[ee], K = it(S) ? S.bind(r, r) : it(S.get) ? S.get.bind(r, r) : ur, de = !it(S) && it(S.set) ? S.set.bind(r) : ur, q = st({
        get: K,
        set: de
      });
      Object.defineProperty(n, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => q.value,
        set: (ue) => q.value = ue
      });
    }
  if (s)
    for (const ee in s)
      Vp(s[ee], n, r, ee);
  if (l) {
    const ee = it(l) ? l.call(r) : l;
    Reflect.ownKeys(ee).forEach((S) => {
      f0(S, ee[S]);
    });
  }
  u && vd(u, e, "c");
  function ge(ee, S) {
    tt(S) ? S.forEach((K) => ee(K.bind(r))) : S && ee(S.bind(r));
  }
  if (ge(w0, c), ge(tl, f), ge(x0, p), ge(k0, m), ge(v0, y), ge(_0, b), ge(C0, te), ge(N0, W), ge(P0, $), ge(da, U), ge(Dp, D), ge(M0, re), tt(ce))
    if (ce.length) {
      const ee = e.exposed || (e.exposed = {});
      ce.forEach((S) => {
        Object.defineProperty(ee, S, {
          get: () => r[S],
          set: (K) => r[S] = K,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === ur && (e.render = P), E != null && (e.inheritAttrs = E), G && (e.components = G), ie && (e.directives = ie), re && Op(e);
}
function T0(e, t, r = ur) {
  tt(e) && (e = fc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Nt(i) ? "default" in i ? o = Xa(
      i.from || n,
      i.default,
      !0
    ) : o = Xa(i.from || n) : o = Xa(i), /* @__PURE__ */ un(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function vd(e, t, r) {
  mr(
    tt(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Vp(e, t, r, n) {
  let i = n.includes(".") ? Ep(r, n) : () => r[n];
  if (Bt(e)) {
    const o = t[e];
    it(o) && ai(i, o);
  } else if (it(e))
    ai(i, e.bind(r));
  else if (Nt(e))
    if (tt(e))
      e.forEach((o) => Vp(o, t, r, n));
    else {
      const o = it(e.handler) ? e.handler.bind(r) : t[e.handler];
      it(o) && ai(i, o, e);
    }
}
function Rp(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (d) => ys(l, d, a, !0)
  ), ys(l, t, a)), Nt(t) && o.set(t, l), l;
}
function ys(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && ys(e, o, r, !0), i && i.forEach(
    (a) => ys(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const s = D0[a] || r && r[a];
      e[a] = s ? s(e[a], t[a]) : t[a];
    }
  return e;
}
const D0 = {
  data: _d,
  props: Sd,
  emits: Sd,
  // objects
  methods: No,
  computed: No,
  // lifecycle
  beforeCreate: pn,
  created: pn,
  beforeMount: pn,
  mounted: pn,
  beforeUpdate: pn,
  updated: pn,
  beforeDestroy: pn,
  beforeUnmount: pn,
  destroyed: pn,
  unmounted: pn,
  activated: pn,
  deactivated: pn,
  errorCaptured: pn,
  serverPrefetch: pn,
  // assets
  components: No,
  directives: No,
  // watch
  watch: V0,
  // provide / inject
  provide: _d,
  inject: L0
};
function _d(e, t) {
  return t ? e ? function() {
    return fn(
      it(e) ? e.call(this, this) : e,
      it(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function L0(e, t) {
  return No(fc(e), fc(t));
}
function fc(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function pn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function No(e, t) {
  return e ? fn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sd(e, t) {
  return e ? tt(e) && tt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fn(
    /* @__PURE__ */ Object.create(null),
    bd(e),
    bd(t ?? {})
  ) : t;
}
function V0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = fn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = pn(e[n], t[n]);
  return r;
}
function $p() {
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
let R0 = 0;
function $0(e, t) {
  return function(n, i = null) {
    it(n) || (n = fn({}, n)), i != null && !Nt(i) && (i = null);
    const o = $p(), a = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const d = o.app = {
      _uid: R0++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: yy,
      get config() {
        return o.config;
      },
      set config(u) {
      },
      use(u, ...c) {
        return a.has(u) || (u && it(u.install) ? (a.add(u), u.install(d, ...c)) : it(u) && (a.add(u), u(d, ...c))), d;
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
      mount(u, c, f) {
        if (!l) {
          const p = d._ceVNode || Ke(n, i);
          return p.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, u, f), l = !0, d._container = u, u.__vue_app__ = d, il(p.component);
        }
      },
      onUnmount(u) {
        s.push(u);
      },
      unmount() {
        l && (mr(
          s,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, c) {
        return o.provides[u] = c, d;
      },
      runWithContext(u) {
        const c = Ri;
        Ri = d;
        try {
          return u();
        } finally {
          Ri = c;
        }
      }
    };
    return d;
  };
}
let Ri = null;
const z0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${mn(t)}Modifiers`] || e[`${hi(t)}Modifiers`];
function j0(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || At;
  let i = r;
  const o = t.startsWith("update:"), a = o && z0(n, t.slice(7));
  a && (a.trim && (i = r.map((u) => Bt(u) ? u.trim() : u)), a.number && (i = r.map(ru)));
  let s, l = n[s = bl(t)] || // also try camelCase event handler (#2249)
  n[s = bl(mn(t))];
  !l && o && (l = n[s = bl(hi(t))]), l && mr(
    l,
    e,
    6,
    i
  );
  const d = n[s + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, mr(
      d,
      e,
      6,
      i
    );
  }
}
const H0 = /* @__PURE__ */ new WeakMap();
function zp(e, t, r = !1) {
  const n = r ? H0 : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!it(e)) {
    const l = (d) => {
      const u = zp(d, t, !0);
      u && (s = !0, fn(a, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Nt(e) && n.set(e, null), null) : (tt(o) ? o.forEach((l) => a[l] = null) : fn(a, o), Nt(e) && n.set(e, a), a);
}
function nl(e, t) {
  return !e || !Bs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), bt(e, t[0].toLowerCase() + t.slice(1)) || bt(e, hi(t)) || bt(e, t));
}
function wd(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: a,
    attrs: s,
    emit: l,
    render: d,
    renderCache: u,
    props: c,
    data: f,
    setupState: p,
    ctx: m,
    inheritAttrs: y
  } = e, b = ms(e);
  let T, U;
  try {
    if (r.shapeFlag & 4) {
      const D = i || n, P = D;
      T = ar(
        d.call(
          P,
          D,
          u,
          c,
          p,
          f,
          m
        )
      ), U = s;
    } else {
      const D = t;
      T = ar(
        D.length > 1 ? D(
          c,
          { attrs: s, slots: a, emit: l }
        ) : D(
          c,
          null
        )
      ), U = t.props ? s : G0(s);
    }
  } catch (D) {
    Ho.length = 0, Zs(D, e, 1), T = Ke(zr);
  }
  let H = T;
  if (U && y !== !1) {
    const D = Object.keys(U), { shapeFlag: P } = H;
    D.length && P & 7 && (o && D.some(Us) && (U = W0(
      U,
      o
    )), H = Bi(H, U, !1, !0));
  }
  return r.dirs && (H = Bi(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(r.dirs) : r.dirs), r.transition && pu(H, r.transition), T = H, ms(b), T;
}
const G0 = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Bs(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, W0 = (e, t) => {
  const r = {};
  for (const n in e)
    (!Us(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function K0(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: a, children: s, patchFlag: l } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? xd(n, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        if (jp(a, n, f) && !nl(d, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? xd(n, a, d) : !0 : !!a;
  return !1;
}
function xd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (jp(t, e, o) && !nl(r, o))
      return !0;
  }
  return !1;
}
function jp(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Nt(n) && Nt(i) ? !iu(n, i) : n !== i;
}
function B0({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Hp = {}, Gp = () => Object.create(Hp), Wp = (e) => Object.getPrototypeOf(e) === Hp;
function U0(e, t, r, n = !1) {
  const i = {}, o = Gp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Kp(e, t, i, o);
  for (const a in e.propsOptions[0])
    a in i || (i[a] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ t0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Y0(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: a }
  } = e, s = /* @__PURE__ */ yt(i), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let f = u[c];
        if (nl(e.emitsOptions, f))
          continue;
        const p = t[f];
        if (l)
          if (bt(o, f))
            p !== o[f] && (o[f] = p, d = !0);
          else {
            const m = mn(f);
            i[m] = pc(
              l,
              s,
              m,
              p,
              e,
              !1
            );
          }
        else
          p !== o[f] && (o[f] = p, d = !0);
      }
    }
  } else {
    Kp(e, t, i, o) && (d = !0);
    let u;
    for (const c in s)
      (!t || // for camelCase
      !bt(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = hi(c)) === c || !bt(t, u))) && (l ? r && // for camelCase
      (r[c] !== void 0 || // for kebab-case
      r[u] !== void 0) && (i[c] = pc(
        l,
        s,
        c,
        void 0,
        e,
        !0
      )) : delete i[c]);
    if (o !== s)
      for (const c in o)
        (!t || !bt(t, c)) && (delete o[c], d = !0);
  }
  d && kr(e.attrs, "set", "");
}
function Kp(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (Lo(l))
        continue;
      const d = t[l];
      let u;
      i && bt(i, u = mn(l)) ? !o || !o.includes(u) ? r[u] = d : (s || (s = {}))[u] = d : nl(e.emitsOptions, l) || (!(l in n) || d !== n[l]) && (n[l] = d, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ yt(r), d = s || At;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      r[c] = pc(
        i,
        l,
        c,
        d[c],
        e,
        !bt(d, c)
      );
    }
  }
  return a;
}
function pc(e, t, r, n, i, o) {
  const a = e[r];
  if (a != null) {
    const s = bt(a, "default");
    if (s && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && it(l)) {
        const { propsDefaults: d } = i;
        if (r in d)
          n = d[r];
        else {
          const u = fa(i);
          n = d[r] = l.call(
            null,
            t
          ), u();
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
    ] && (n === "" || n === hi(r)) && (n = !0));
  }
  return n;
}
const q0 = /* @__PURE__ */ new WeakMap();
function Bp(e, t, r = !1) {
  const n = r ? q0 : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!it(e)) {
    const u = (c) => {
      l = !0;
      const [f, p] = Bp(c, t, !0);
      fn(a, f), p && s.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Nt(e) && n.set(e, Di), Di;
  if (tt(o))
    for (let u = 0; u < o.length; u++) {
      const c = mn(o[u]);
      kd(c) && (a[c] = At);
    }
  else if (o)
    for (const u in o) {
      const c = mn(u);
      if (kd(c)) {
        const f = o[u], p = a[c] = tt(f) || it(f) ? { type: f } : fn({}, f), m = p.type;
        let y = !1, b = !0;
        if (tt(m))
          for (let T = 0; T < m.length; ++T) {
            const U = m[T], H = it(U) && U.name;
            if (H === "Boolean") {
              y = !0;
              break;
            } else H === "String" && (b = !1);
          }
        else
          y = it(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = y, p[
          1
          /* shouldCastTrue */
        ] = b, (y || bt(p, "default")) && s.push(c);
      }
    }
  const d = [a, s];
  return Nt(e) && n.set(e, d), d;
}
function kd(e) {
  return e[0] !== "$" && !Lo(e);
}
const hu = (e) => e === "_" || e === "_ctx" || e === "$stable", mu = (e) => tt(e) ? e.map(ar) : [ar(e)], X0 = (e, t, r) => {
  if (t._n)
    return t;
  const n = Ap((...i) => mu(t(...i)), r);
  return n._c = !1, n;
}, Up = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (hu(i)) continue;
    const o = e[i];
    if (it(o))
      t[i] = X0(i, o, n);
    else if (o != null) {
      const a = mu(o);
      t[i] = () => a;
    }
  }
}, Yp = (e, t) => {
  const r = mu(t);
  e.slots.default = () => r;
}, qp = (e, t, r) => {
  for (const n in t)
    (r || !hu(n)) && (e[n] = t[n]);
}, J0 = (e, t, r) => {
  const n = e.slots = Gp();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (qp(n, t, r), r && ip(n, "_", i, !0)) : Up(t, n);
  } else t && Yp(e, t);
}, Z0 = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = At;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : qp(i, t, r) : (o = !t.$stable, Up(t, i)), a = t;
  } else t && (Yp(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !hu(s) && a[s] == null && delete i[s];
}, vn = ry;
function Q0(e) {
  return ey(e);
}
function ey(e, t) {
  const r = Xs();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: a,
    createText: s,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: f,
    setScopeId: p = ur,
    insertStaticContent: m
  } = e, y = (g, _, R, Y = null, w = null, k = null, L = void 0, x = null, N = !!_.dynamicChildren) => {
    if (g === _)
      return;
    g && !_o(g, _) && (Y = ae(g), ue(g, w, k, !0), g = null), _.patchFlag === -2 && (N = !1, _.dynamicChildren = null);
    const { type: C, ref: B, shapeFlag: J } = _;
    switch (C) {
      case rl:
        b(g, _, R, Y);
        break;
      case zr:
        T(g, _, R, Y);
        break;
      case Ml:
        g == null && U(_, R, Y, L);
        break;
      case Je:
        G(
          g,
          _,
          R,
          Y,
          w,
          k,
          L,
          x,
          N
        );
        break;
      default:
        J & 1 ? P(
          g,
          _,
          R,
          Y,
          w,
          k,
          L,
          x,
          N
        ) : J & 6 ? ie(
          g,
          _,
          R,
          Y,
          w,
          k,
          L,
          x,
          N
        ) : (J & 64 || J & 128) && C.process(
          g,
          _,
          R,
          Y,
          w,
          k,
          L,
          x,
          N,
          I
        );
    }
    B != null && w ? $o(B, g && g.ref, k, _ || g, !_) : B == null && g && g.ref != null && $o(g.ref, null, k, g, !0);
  }, b = (g, _, R, Y) => {
    if (g == null)
      n(
        _.el = s(_.children),
        R,
        Y
      );
    else {
      const w = _.el = g.el;
      _.children !== g.children && d(w, _.children);
    }
  }, T = (g, _, R, Y) => {
    g == null ? n(
      _.el = l(_.children || ""),
      R,
      Y
    ) : _.el = g.el;
  }, U = (g, _, R, Y) => {
    [g.el, g.anchor] = m(
      g.children,
      _,
      R,
      Y,
      g.el,
      g.anchor
    );
  }, H = ({ el: g, anchor: _ }, R, Y) => {
    let w;
    for (; g && g !== _; )
      w = f(g), n(g, R, Y), g = w;
    n(_, R, Y);
  }, D = ({ el: g, anchor: _ }) => {
    let R;
    for (; g && g !== _; )
      R = f(g), i(g), g = R;
    i(_);
  }, P = (g, _, R, Y, w, k, L, x, N) => {
    if (_.type === "svg" ? L = "svg" : _.type === "math" && (L = "mathml"), g == null)
      W(
        _,
        R,
        Y,
        w,
        k,
        L,
        x,
        N
      );
    else {
      const C = g.el && g.el._isVueCE ? g.el : null;
      try {
        C && C._beginPatch(), re(
          g,
          _,
          w,
          k,
          L,
          x,
          N
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, W = (g, _, R, Y, w, k, L, x) => {
    let N, C;
    const { props: B, shapeFlag: J, transition: oe, dirs: z } = g;
    if (N = g.el = a(
      g.type,
      k,
      B && B.is,
      B
    ), J & 8 ? u(N, g.children) : J & 16 && te(
      g.children,
      N,
      null,
      Y,
      w,
      kl(g, k),
      L,
      x
    ), z && Ur(g, null, Y, "created"), $(N, g, g.scopeId, L, Y), B) {
      for (const Se in B)
        Se !== "value" && !Lo(Se) && o(N, Se, null, B[Se], k, Y);
      "value" in B && o(N, "value", null, B.value, k), (C = B.onVnodeBeforeMount) && nr(C, Y, g);
    }
    z && Ur(g, null, Y, "beforeMount");
    const le = ty(w, oe);
    le && oe.beforeEnter(N), n(N, _, R), ((C = B && B.onVnodeMounted) || le || z) && vn(() => {
      try {
        C && nr(C, Y, g), le && oe.enter(N), z && Ur(g, null, Y, "mounted");
      } finally {
      }
    }, w);
  }, $ = (g, _, R, Y, w) => {
    if (R && p(g, R), Y)
      for (let k = 0; k < Y.length; k++)
        p(g, Y[k]);
    if (w) {
      let k = w.subTree;
      if (_ === k || Qp(k.type) && (k.ssContent === _ || k.ssFallback === _)) {
        const L = w.vnode;
        $(
          g,
          L,
          L.scopeId,
          L.slotScopeIds,
          w.parent
        );
      }
    }
  }, te = (g, _, R, Y, w, k, L, x, N = 0) => {
    for (let C = N; C < g.length; C++) {
      const B = g[C] = x ? Sr(g[C]) : ar(g[C]);
      y(
        null,
        B,
        _,
        R,
        Y,
        w,
        k,
        L,
        x
      );
    }
  }, re = (g, _, R, Y, w, k, L) => {
    const x = _.el = g.el;
    let { patchFlag: N, dynamicChildren: C, dirs: B } = _;
    N |= g.patchFlag & 16;
    const J = g.props || At, oe = _.props || At;
    let z;
    if (R && Yr(R, !1), (z = oe.onVnodeBeforeUpdate) && nr(z, R, _, g), B && Ur(_, g, R, "beforeUpdate"), R && Yr(R, !0), (J.innerHTML && oe.innerHTML == null || J.textContent && oe.textContent == null) && u(x, ""), C ? ce(
      g.dynamicChildren,
      C,
      x,
      R,
      Y,
      kl(_, w),
      k
    ) : L || S(
      g,
      _,
      x,
      null,
      R,
      Y,
      kl(_, w),
      k,
      !1
    ), N > 0) {
      if (N & 16)
        E(x, J, oe, R, w);
      else if (N & 2 && J.class !== oe.class && o(x, "class", null, oe.class, w), N & 4 && o(x, "style", J.style, oe.style, w), N & 8) {
        const le = _.dynamicProps;
        for (let Se = 0; Se < le.length; Se++) {
          const Me = le[Se], fe = J[Me], be = oe[Me];
          (be !== fe || Me === "value") && o(x, Me, fe, be, w, R);
        }
      }
      N & 1 && g.children !== _.children && u(x, _.children);
    } else !L && C == null && E(x, J, oe, R, w);
    ((z = oe.onVnodeUpdated) || B) && vn(() => {
      z && nr(z, R, _, g), B && Ur(_, g, R, "updated");
    }, Y);
  }, ce = (g, _, R, Y, w, k, L) => {
    for (let x = 0; x < _.length; x++) {
      const N = g[x], C = _[x], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_o(N, C) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? c(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      y(
        N,
        C,
        B,
        null,
        Y,
        w,
        k,
        L,
        !0
      );
    }
  }, E = (g, _, R, Y, w) => {
    if (_ !== R) {
      if (_ !== At)
        for (const k in _)
          !Lo(k) && !(k in R) && o(
            g,
            k,
            _[k],
            null,
            w,
            Y
          );
      for (const k in R) {
        if (Lo(k)) continue;
        const L = R[k], x = _[k];
        L !== x && k !== "value" && o(g, k, x, L, w, Y);
      }
      "value" in R && o(g, "value", _.value, R.value, w);
    }
  }, G = (g, _, R, Y, w, k, L, x, N) => {
    const C = _.el = g ? g.el : s(""), B = _.anchor = g ? g.anchor : s("");
    let { patchFlag: J, dynamicChildren: oe, slotScopeIds: z } = _;
    z && (x = x ? x.concat(z) : z), g == null ? (n(C, R, Y), n(B, R, Y), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      R,
      B,
      w,
      k,
      L,
      x,
      N
    )) : J > 0 && J & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === oe.length ? (ce(
      g.dynamicChildren,
      oe,
      R,
      w,
      k,
      L,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || w && _ === w.subTree) && Xp(
      g,
      _,
      !0
      /* shallow */
    )) : S(
      g,
      _,
      R,
      B,
      w,
      k,
      L,
      x,
      N
    );
  }, ie = (g, _, R, Y, w, k, L, x, N) => {
    _.slotScopeIds = x, g == null ? _.shapeFlag & 512 ? w.ctx.activate(
      _,
      R,
      Y,
      L,
      N
    ) : pe(
      _,
      R,
      Y,
      w,
      k,
      L,
      N
    ) : me(g, _, N);
  }, pe = (g, _, R, Y, w, k, L) => {
    const x = g.component = cy(
      g,
      Y,
      w
    );
    if (Fp(g) && (x.ctx.renderer = I), dy(x, !1, L), x.asyncDep) {
      if (w && w.registerDep(x, ge, L), !g.el) {
        const N = x.subTree = Ke(zr);
        T(null, N, _, R), g.placeholder = N.el;
      }
    } else
      ge(
        x,
        g,
        _,
        R,
        w,
        k,
        L
      );
  }, me = (g, _, R) => {
    const Y = _.component = g.component;
    if (K0(g, _, R))
      if (Y.asyncDep && !Y.asyncResolved) {
        ee(Y, _, R);
        return;
      } else
        Y.next = _, Y.update();
    else
      _.el = g.el, Y.vnode = _;
  }, ge = (g, _, R, Y, w, k, L) => {
    const x = () => {
      if (g.isMounted) {
        let { next: J, bu: oe, u: z, parent: le, vnode: Se } = g;
        {
          const h = Jp(g);
          if (h) {
            J && (J.el = Se.el, ee(g, J, L)), h.asyncDep.then(() => {
              vn(() => {
                g.isUnmounted || C();
              }, w);
            });
            return;
          }
        }
        let Me = J, fe;
        Yr(g, !1), J ? (J.el = Se.el, ee(g, J, L)) : J = Se, oe && qa(oe), (fe = J.props && J.props.onVnodeBeforeUpdate) && nr(fe, le, J, Se), Yr(g, !0);
        const be = wd(g), _e = g.subTree;
        g.subTree = be, y(
          _e,
          be,
          // parent may have changed if it's in a teleport
          c(_e.el),
          // anchor may have changed if it's in a fragment
          ae(_e),
          g,
          w,
          k
        ), J.el = be.el, Me === null && B0(g, be.el), z && vn(z, w), (fe = J.props && J.props.onVnodeUpdated) && vn(
          () => nr(fe, le, J, Se),
          w
        );
      } else {
        let J;
        const { el: oe, props: z } = _, { bm: le, m: Se, parent: Me, root: fe, type: be } = g, _e = zo(_);
        Yr(g, !1), le && qa(le), !_e && (J = z && z.onVnodeBeforeMount) && nr(J, Me, _), Yr(g, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            be,
            g.parent ? g.parent.type : void 0
          );
          const h = g.subTree = wd(g);
          y(
            null,
            h,
            R,
            Y,
            g,
            w,
            k
          ), _.el = h.el;
        }
        if (Se && vn(Se, w), !_e && (J = z && z.onVnodeMounted)) {
          const h = _;
          vn(
            () => nr(J, Me, h),
            w
          );
        }
        (_.shapeFlag & 256 || Me && zo(Me.vnode) && Me.vnode.shapeFlag & 256) && g.a && vn(g.a, w), g.isMounted = !0, _ = R = Y = null;
      }
    };
    g.scope.on();
    const N = g.effect = new lp(x);
    g.scope.off();
    const C = g.update = N.run.bind(N), B = g.job = N.runIfDirty.bind(N);
    B.i = g, B.id = g.uid, N.scheduler = () => fu(B), Yr(g, !0), C();
  }, ee = (g, _, R) => {
    _.component = g;
    const Y = g.vnode.props;
    g.vnode = _, g.next = null, Y0(g, _.props, Y, R), Z0(g, _.children, R), Ir(), hd(g), Er();
  }, S = (g, _, R, Y, w, k, L, x, N = !1) => {
    const C = g && g.children, B = g ? g.shapeFlag : 0, J = _.children, { patchFlag: oe, shapeFlag: z } = _;
    if (oe > 0) {
      if (oe & 128) {
        de(
          C,
          J,
          R,
          Y,
          w,
          k,
          L,
          x,
          N
        );
        return;
      } else if (oe & 256) {
        K(
          C,
          J,
          R,
          Y,
          w,
          k,
          L,
          x,
          N
        );
        return;
      }
    }
    z & 8 ? (B & 16 && Z(C, w, k), J !== C && u(R, J)) : B & 16 ? z & 16 ? de(
      C,
      J,
      R,
      Y,
      w,
      k,
      L,
      x,
      N
    ) : Z(C, w, k, !0) : (B & 8 && u(R, ""), z & 16 && te(
      J,
      R,
      Y,
      w,
      k,
      L,
      x,
      N
    ));
  }, K = (g, _, R, Y, w, k, L, x, N) => {
    g = g || Di, _ = _ || Di;
    const C = g.length, B = _.length, J = Math.min(C, B);
    let oe;
    for (oe = 0; oe < J; oe++) {
      const z = _[oe] = N ? Sr(_[oe]) : ar(_[oe]);
      y(
        g[oe],
        z,
        R,
        null,
        w,
        k,
        L,
        x,
        N
      );
    }
    C > B ? Z(
      g,
      w,
      k,
      !0,
      !1,
      J
    ) : te(
      _,
      R,
      Y,
      w,
      k,
      L,
      x,
      N,
      J
    );
  }, de = (g, _, R, Y, w, k, L, x, N) => {
    let C = 0;
    const B = _.length;
    let J = g.length - 1, oe = B - 1;
    for (; C <= J && C <= oe; ) {
      const z = g[C], le = _[C] = N ? Sr(_[C]) : ar(_[C]);
      if (_o(z, le))
        y(
          z,
          le,
          R,
          null,
          w,
          k,
          L,
          x,
          N
        );
      else
        break;
      C++;
    }
    for (; C <= J && C <= oe; ) {
      const z = g[J], le = _[oe] = N ? Sr(_[oe]) : ar(_[oe]);
      if (_o(z, le))
        y(
          z,
          le,
          R,
          null,
          w,
          k,
          L,
          x,
          N
        );
      else
        break;
      J--, oe--;
    }
    if (C > J) {
      if (C <= oe) {
        const z = oe + 1, le = z < B ? _[z].el : Y;
        for (; C <= oe; )
          y(
            null,
            _[C] = N ? Sr(_[C]) : ar(_[C]),
            R,
            le,
            w,
            k,
            L,
            x,
            N
          ), C++;
      }
    } else if (C > oe)
      for (; C <= J; )
        ue(g[C], w, k, !0), C++;
    else {
      const z = C, le = C, Se = /* @__PURE__ */ new Map();
      for (C = le; C <= oe; C++) {
        const v = _[C] = N ? Sr(_[C]) : ar(_[C]);
        v.key != null && Se.set(v.key, C);
      }
      let Me, fe = 0;
      const be = oe - le + 1;
      let _e = !1, h = 0;
      const j = new Array(be);
      for (C = 0; C < be; C++) j[C] = 0;
      for (C = z; C <= J; C++) {
        const v = g[C];
        if (fe >= be) {
          ue(v, w, k, !0);
          continue;
        }
        let V;
        if (v.key != null)
          V = Se.get(v.key);
        else
          for (Me = le; Me <= oe; Me++)
            if (j[Me - le] === 0 && _o(v, _[Me])) {
              V = Me;
              break;
            }
        V === void 0 ? ue(v, w, k, !0) : (j[V - le] = C + 1, V >= h ? h = V : _e = !0, y(
          v,
          _[V],
          R,
          null,
          w,
          k,
          L,
          x,
          N
        ), fe++);
      }
      const A = _e ? ny(j) : Di;
      for (Me = A.length - 1, C = be - 1; C >= 0; C--) {
        const v = le + C, V = _[v], M = _[v + 1], X = v + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          M.el || Zp(M)
        ) : Y;
        j[C] === 0 ? y(
          null,
          V,
          R,
          X,
          w,
          k,
          L,
          x,
          N
        ) : _e && (Me < 0 || C !== A[Me] ? q(V, R, X, 2) : Me--);
      }
    }
  }, q = (g, _, R, Y, w = null) => {
    const { el: k, type: L, transition: x, children: N, shapeFlag: C } = g;
    if (C & 6) {
      q(g.component.subTree, _, R, Y);
      return;
    }
    if (C & 128) {
      g.suspense.move(_, R, Y);
      return;
    }
    if (C & 64) {
      L.move(g, _, R, I);
      return;
    }
    if (L === Je) {
      n(k, _, R);
      for (let J = 0; J < N.length; J++)
        q(N[J], _, R, Y);
      n(g.anchor, _, R);
      return;
    }
    if (L === Ml) {
      H(g, _, R);
      return;
    }
    if (Y !== 2 && C & 1 && x)
      if (Y === 0)
        x.beforeEnter(k), n(k, _, R), vn(() => x.enter(k), w);
      else {
        const { leave: J, delayLeave: oe, afterLeave: z } = x, le = () => {
          g.ctx.isUnmounted ? i(k) : n(k, _, R);
        }, Se = () => {
          k._isLeaving && k[b0](
            !0
            /* cancelled */
          ), J(k, () => {
            le(), z && z();
          });
        };
        oe ? oe(k, le, Se) : Se();
      }
    else
      n(k, _, R);
  }, ue = (g, _, R, Y = !1, w = !1) => {
    const {
      type: k,
      props: L,
      ref: x,
      children: N,
      dynamicChildren: C,
      shapeFlag: B,
      patchFlag: J,
      dirs: oe,
      cacheIndex: z,
      memo: le
    } = g;
    if (J === -2 && (w = !1), x != null && (Ir(), $o(x, null, R, g, !0), Er()), z != null && (_.renderCache[z] = void 0), B & 256) {
      _.ctx.deactivate(g);
      return;
    }
    const Se = B & 1 && oe, Me = !zo(g);
    let fe;
    if (Me && (fe = L && L.onVnodeBeforeUnmount) && nr(fe, _, g), B & 6)
      O(g.component, R, Y);
    else {
      if (B & 128) {
        g.suspense.unmount(R, Y);
        return;
      }
      Se && Ur(g, null, _, "beforeUnmount"), B & 64 ? g.type.remove(
        g,
        _,
        R,
        I,
        Y
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Je || J > 0 && J & 64) ? Z(
        C,
        _,
        R,
        !1,
        !0
      ) : (k === Je && J & 384 || !w && B & 16) && Z(N, _, R), Y && Pe(g);
    }
    const be = le != null && z == null;
    (Me && (fe = L && L.onVnodeUnmounted) || Se || be) && vn(() => {
      fe && nr(fe, _, g), Se && Ur(g, null, _, "unmounted"), be && (g.el = null);
    }, R);
  }, Pe = (g) => {
    const { type: _, el: R, anchor: Y, transition: w } = g;
    if (_ === Je) {
      ne(R, Y);
      return;
    }
    if (_ === Ml) {
      D(g);
      return;
    }
    const k = () => {
      i(R), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (g.shapeFlag & 1 && w && !w.persisted) {
      const { leave: L, delayLeave: x } = w, N = () => L(R, k);
      x ? x(g.el, k, N) : N();
    } else
      k();
  }, ne = (g, _) => {
    let R;
    for (; g !== _; )
      R = f(g), i(g), g = R;
    i(_);
  }, O = (g, _, R) => {
    const { bum: Y, scope: w, job: k, subTree: L, um: x, m: N, a: C } = g;
    Md(N), Md(C), Y && qa(Y), w.stop(), k && (k.flags |= 8, ue(L, g, _, R)), x && vn(x, _), vn(() => {
      g.isUnmounted = !0;
    }, _);
  }, Z = (g, _, R, Y = !1, w = !1, k = 0) => {
    for (let L = k; L < g.length; L++)
      ue(g[L], _, R, Y, w);
  }, ae = (g) => {
    if (g.shapeFlag & 6)
      return ae(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const _ = f(g.anchor || g.el), R = _ && _[g0];
    return R ? f(R) : _;
  };
  let ye = !1;
  const ve = (g, _, R) => {
    let Y;
    g == null ? _._vnode && (ue(_._vnode, null, null, !0), Y = _._vnode.component) : y(
      _._vnode || null,
      g,
      _,
      null,
      null,
      null,
      R
    ), _._vnode = g, ye || (ye = !0, hd(Y), Pp(), ye = !1);
  }, I = {
    p: y,
    um: ue,
    m: q,
    r: Pe,
    mt: pe,
    mc: te,
    pc: S,
    pbc: ce,
    n: ae,
    o: e
  };
  return {
    render: ve,
    hydrate: void 0,
    createApp: $0(ve)
  };
}
function kl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Yr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ty(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xp(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (tt(n) && tt(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Sr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && Xp(a, s)), s.type === rl && (s.patchFlag === -1 && (s = i[o] = Sr(s)), s.el = a.el), s.type === zr && !s.el && (s.el = a.el);
    }
}
function ny(e) {
  const t = e.slice(), r = [0];
  let n, i, o, a, s;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const d = e[n];
    if (d !== 0) {
      if (i = r[r.length - 1], e[i] < d) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, a = r.length - 1; o < a; )
        s = o + a >> 1, e[r[s]] < d ? o = s + 1 : a = s;
      d < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, a = r[o - 1]; o-- > 0; )
    r[o] = a, a = t[a];
  return r;
}
function Jp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jp(t);
}
function Md(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Zp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Zp(t.subTree) : null;
}
const Qp = (e) => e.__isSuspense;
function ry(e, t) {
  t && t.pendingBranch ? tt(e) ? t.effects.push(...e) : t.effects.push(e) : d0(e);
}
const Je = /* @__PURE__ */ Symbol.for("v-fgt"), rl = /* @__PURE__ */ Symbol.for("v-txt"), zr = /* @__PURE__ */ Symbol.for("v-cmt"), Ml = /* @__PURE__ */ Symbol.for("v-stc"), Ho = [];
let Fn = null;
function Te(e = !1) {
  Ho.push(Fn = e ? null : []);
}
function iy() {
  Ho.pop(), Fn = Ho[Ho.length - 1] || null;
}
let Xo = 1;
function Pd(e, t = !1) {
  Xo += e, e < 0 && Fn && t && (Fn.hasOnce = !0);
}
function eh(e) {
  return e.dynamicChildren = Xo > 0 ? Fn || Di : null, iy(), Xo > 0 && Fn && Fn.push(e), e;
}
function Le(e, t, r, n, i, o) {
  return eh(
    Ne(
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
function Hn(e, t, r, n, i) {
  return eh(
    Ke(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function th(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _o(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nh = ({ key: e }) => e ?? null, Ja = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Bt(e) || /* @__PURE__ */ un(e) || it(e) ? { i: On, r: e, k: t, f: !!r } : e : null);
function Ne(e, t = null, r = null, n = 0, i = null, o = e === Je ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nh(t),
    ref: t && Ja(t),
    scopeId: Cp,
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
    ctx: On
  };
  return s ? (gu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Bt(r) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Fn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Fn.push(l), l;
}
const Ke = oy;
function oy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Lp) && (e = zr), th(e)) {
    const s = Bi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && gu(s, r), Xo > 0 && !o && Fn && (s.shapeFlag & 6 ? Fn[Fn.indexOf(e)] = s : Fn.push(s)), s.patchFlag = -2, s;
  }
  if (gy(e) && (e = e.__vccOpts), t) {
    t = ay(t);
    let { class: s, style: l } = t;
    s && !Bt(s) && (t.class = ct(s)), Nt(l) && (/* @__PURE__ */ du(l) && !tt(l) && (l = fn({}, l)), t.style = Pt(l));
  }
  const a = Bt(e) ? 1 : Qp(e) ? 128 : y0(e) ? 64 : Nt(e) ? 4 : it(e) ? 2 : 0;
  return Ne(
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
function ay(e) {
  return e ? /* @__PURE__ */ du(e) || Wp(e) ? fn({}, e) : e : null;
}
function Bi(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, d = t ? wr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && nh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? tt(o) ? o.concat(Ja(t)) : [o, Ja(t)] : Ja(t)
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
    patchFlag: t && e.type !== Je ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Bi(e.ssContent),
    ssFallback: e.ssFallback && Bi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && pu(
    u,
    l.clone(u)
  ), u;
}
function Co(e = " ", t = 0) {
  return Ke(rl, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (Te(), Hn(zr, null, e)) : Ke(zr, null, e);
}
function ar(e) {
  return e == null || typeof e == "boolean" ? Ke(zr) : tt(e) ? Ke(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : th(e) ? Sr(e) : Ke(rl, null, String(e));
}
function Sr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function gu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (tt(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), gu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Wp(t) ? t._ctx = On : i === 3 && On && (On.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else it(t) ? (t = { default: t, _ctx: On }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Co(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function wr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ct([t.class, n.class]));
      else if (i === "style")
        t.style = Pt([t.style, n.style]);
      else if (Bs(i)) {
        const o = t[i], a = n[i];
        a && o !== a && !(tt(o) && o.includes(a)) ? t[i] = o ? [].concat(o, a) : a : a == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Us(i) && (t[i] = a);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function nr(e, t, r, n = null) {
  mr(e, t, 7, [
    r,
    n
  ]);
}
const sy = $p();
let ly = 0;
function cy(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || sy, o = {
    uid: ly++,
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
    scope: new Dg(
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
    propsOptions: Bp(n, i),
    emitsOptions: zp(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: At,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: At,
    data: At,
    props: At,
    attrs: At,
    slots: At,
    refs: At,
    setupState: At,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = j0.bind(null, o), e.ce && e.ce(o), o;
}
let sn = null;
const uy = () => sn || On;
let bs, hc;
{
  const e = Xs(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  bs = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => sn = r
  ), hc = t(
    "__VUE_SSR_SETTERS__",
    (r) => Jo = r
  );
}
const fa = (e) => {
  const t = sn;
  return bs(e), e.scope.on(), () => {
    e.scope.off(), bs(t);
  };
}, Nd = () => {
  sn && sn.scope.off(), bs(null);
};
function rh(e) {
  return e.vnode.shapeFlag & 4;
}
let Jo = !1;
function dy(e, t = !1, r = !1) {
  t && hc(t);
  const { props: n, children: i } = e.vnode, o = rh(e);
  U0(e, n, o, t), J0(e, i, r || t);
  const a = o ? fy(e, t) : void 0;
  return t && hc(!1), a;
}
function fy(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, O0);
  const { setup: n } = r;
  if (n) {
    Ir();
    const i = e.setupContext = n.length > 1 ? hy(e) : null, o = fa(e), a = ua(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), s = tp(a);
    if (Er(), o(), (s || e.sp) && !zo(e) && Op(e), s) {
      if (a.then(Nd, Nd), t)
        return a.then((l) => {
          Cd(e, l);
        }).catch((l) => {
          Zs(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Cd(e, a);
  } else
    ih(e);
}
function Cd(e, t, r) {
  it(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Nt(t) && (e.setupState = xp(t)), ih(e);
}
function ih(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || ur);
  {
    const i = fa(e);
    Ir();
    try {
      F0(e);
    } finally {
      Er(), i();
    }
  }
}
const py = {
  get(e, t) {
    return an(e, "get", ""), e[t];
  }
};
function hy(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, py),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function il(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xp(n0(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in jo)
        return jo[r](e);
    },
    has(t, r) {
      return r in t || r in jo;
    }
  })) : e.proxy;
}
function my(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gy(e) {
  return it(e) && "__vccOpts" in e;
}
const st = (e, t) => /* @__PURE__ */ a0(e, t, Jo), yy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mc;
const Ad = typeof window < "u" && window.trustedTypes;
if (Ad)
  try {
    mc = /* @__PURE__ */ Ad.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const oh = mc ? (e) => mc.createHTML(e) : (e) => e, by = "http://www.w3.org/2000/svg", vy = "http://www.w3.org/1998/Math/MathML", _r = typeof document < "u" ? document : null, Id = _r && /* @__PURE__ */ _r.createElement("template"), _y = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? _r.createElementNS(by, e) : t === "mathml" ? _r.createElementNS(vy, e) : r ? _r.createElement(e, { is: r }) : _r.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => _r.createTextNode(e),
  createComment: (e) => _r.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _r.querySelector(e),
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
      Id.innerHTML = oh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Id.content;
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
}, Sy = /* @__PURE__ */ Symbol("_vtc");
function wy(e, t, r) {
  const n = e[Sy];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const vs = /* @__PURE__ */ Symbol("_vod"), ah = /* @__PURE__ */ Symbol("_vsh"), ui = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[vs] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : So(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), So(e, !0), n.enter(e)) : n.leave(e, () => {
      So(e, !1);
    }) : So(e, t));
  },
  beforeUnmount(e, { value: t }) {
    So(e, t);
  }
};
function So(e, t) {
  e.style.display = t ? e[vs] : "none", e[ah] = !t;
}
const xy = /* @__PURE__ */ Symbol(""), ky = /(?:^|;)\s*display\s*:/;
function My(e, t, r) {
  const n = e.style, i = Bt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Bt(t))
        for (const a of t.split(";")) {
          const s = a.slice(0, a.indexOf(":")).trim();
          r[s] == null && Za(n, s, "");
        }
      else
        for (const a in t)
          r[a] == null && Za(n, a, "");
    for (const a in r)
      a === "display" && (o = !0), Za(n, a, r[a]);
  } else if (i) {
    if (t !== r) {
      const a = n[xy];
      a && (r += ";" + a), n.cssText = r, o = ky.test(r);
    }
  } else t && e.removeAttribute("style");
  vs in e && (e[vs] = o ? n.display : "", e[ah] && (n.display = "none"));
}
const Ed = /\s*!important$/;
function Za(e, t, r) {
  if (tt(r))
    r.forEach((n) => Za(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Py(e, t);
    Ed.test(r) ? e.setProperty(
      hi(n),
      r.replace(Ed, ""),
      "important"
    ) : e[n] = r;
  }
}
const Od = ["Webkit", "Moz", "ms"], Pl = {};
function Py(e, t) {
  const r = Pl[t];
  if (r)
    return r;
  let n = mn(t);
  if (n !== "filter" && n in e)
    return Pl[t] = n;
  n = qs(n);
  for (let i = 0; i < Od.length; i++) {
    const o = Od[i] + n;
    if (o in e)
      return Pl[t] = o;
  }
  return t;
}
const Fd = "http://www.w3.org/1999/xlink";
function Td(e, t, r, n, i, o = Fg(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Fd, t.slice(6, t.length)) : e.setAttributeNS(Fd, t, r) : r == null || o && !op(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : hr(r) ? String(r) : r
  );
}
function Dd(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? oh(r) : r);
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
    s === "boolean" ? r = op(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Ni(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Ny(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ld = /* @__PURE__ */ Symbol("_vei");
function Cy(e, t, r, n, i = null) {
  const o = e[Ld] || (e[Ld] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = Ay(t);
    if (n) {
      const d = o[t] = Oy(
        n,
        i
      );
      Ni(e, s, d, l);
    } else a && (Ny(e, s, a, l), o[t] = void 0);
  }
}
const Vd = /(?:Once|Passive|Capture)$/;
function Ay(e) {
  let t;
  if (Vd.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Vd); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : hi(e.slice(2)), t];
}
let Nl = 0;
const Iy = /* @__PURE__ */ Promise.resolve(), Ey = () => Nl || (Iy.then(() => Nl = 0), Nl = Date.now());
function Oy(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    mr(
      Fy(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Ey(), r;
}
function Fy(e, t) {
  if (tt(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Rd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ty = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? wy(e, n, a) : t === "style" ? My(e, r, n) : Bs(t) ? Us(t) || Cy(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dy(e, t, n, a)) ? (Dd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Td(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ly(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Bt(n))) ? Dd(e, mn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Td(e, t, n, a));
};
function Dy(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rd(t) && it(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Rd(t) && Bt(r) ? !1 : t in e;
}
function Ly(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = mn(t);
  return Array.isArray(r) ? r.some((i) => mn(i) === n) : Object.keys(r).some((i) => mn(i) === n);
}
const $d = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return tt(t) ? (r) => qa(t, r) : t;
};
function Vy(e) {
  e.target.composing = !0;
}
function zd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Cl = /* @__PURE__ */ Symbol("_assign");
function jd(e, t, r) {
  return t && (e = e.trim()), r && (e = ru(e)), e;
}
const Hd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Cl] = $d(i);
    const o = n || i.props && i.props.type === "number";
    Ni(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Cl](jd(e.value, r, o));
    }), (r || o) && Ni(e, "change", () => {
      e.value = jd(e.value, r, o);
    }), t || (Ni(e, "compositionstart", Vy), Ni(e, "compositionend", zd), Ni(e, "change", zd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Cl] = $d(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? ru(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, Ry = ["ctrl", "shift", "alt", "meta"], $y = {
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
  exact: (e, t) => Ry.some((r) => e[`${r}Key`] && !t.includes(r))
}, Et = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = $y[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, zy = /* @__PURE__ */ fn({ patchProp: Ty }, _y);
let Gd;
function jy() {
  return Gd || (Gd = Q0(zy));
}
const yu = ((...e) => {
  const t = jy().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Gy(n);
    if (!i) return;
    const o = t._component;
    !it(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const a = r(i, !1, Hy(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), a;
  }, t;
});
function Hy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gy(e) {
  return Bt(e) ? document.querySelector(e) : e;
}
const Wy = "PanoramaSuite.Debug.Diagnostics", Ky = "PanoramaSuite.Debug.ExportDiagnostics", Al = "pano_suite.diagnostics.v1", Wd = "pano_suite.diagnostics.previous.v1", By = 300, Uy = 2e5, Yy = 100, qy = 20, Xy = 1e3, Jy = 2, Ta = 1024 * 1024;
function Dr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Zy() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Qy() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Zy,
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
function eb(e = {}) {
  const t = { ...Qy(), ...e };
  let r = !1, n = !1, i = null, o = null, a = 0, s = null, l = 0, d = 0;
  const u = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, p = { created: 0, collected: 0 }, m = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    u.delete(I), f.collected += 1;
  }) : null, y = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    c.delete(I), p.collected += 1;
  }) : null, b = /* @__PURE__ */ new Set(), T = { created: 0, lost: 0, restored: 0, disposed: 0 }, U = [], H = /* @__PURE__ */ new Map();
  let D = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 };
  const $ = [];
  function te(I, se, g = void 0) {
    U.push(g === void 0 ? { t: t.clock(), type: I, label: se } : { t: t.clock(), type: I, label: se, detail: g }), U.length > Yy && U.shift();
  }
  function re(I, se, g, _, R) {
    if (!r || !_ || !t.WeakRef) return _;
    const Y = { ref: new t.WeakRef(_), label: R };
    return I.add(Y), se == null || se.register(_, Y), g.created += 1, _;
  }
  function ce(I, se = "") {
    return re(u, m, f, I, se);
  }
  function E(I, se = "") {
    return re(c, y, p, I, se);
  }
  function G({ label: I = "", width: se, height: g, offscreen: _ = !1 } = {}) {
    const R = globalThis.OffscreenCanvas;
    let Y;
    return _ && typeof R < "u" ? Y = new R(se, g) : (Y = t.document().createElement("canvas"), se !== void 0 && g !== void 0 && (Y.width = se, Y.height = g)), ce(Y, I);
  }
  function ie(I) {
    I.width = 0, I.height = 0, r && (f.released += 1);
  }
  function pe(I = t.document(), se = "") {
    var g;
    return E(((g = I == null ? void 0 : I.createElement) == null ? void 0 : g.call(I, "video")) || null, se);
  }
  function me(I, se) {
    if (!r || !I) return () => {
    };
    const g = { label: se, lost: !1, disposed: !1 };
    b.add(g), T.created += 1, te("webgl-created", se);
    const _ = () => {
      g.disposed || (g.lost = !0, T.lost += 1, te("webglcontextlost", se));
    }, R = () => {
      g.disposed || (g.lost = !1, T.restored += 1, te("webglcontextrestored", se));
    };
    return I.addEventListener("webglcontextlost", _), I.addEventListener("webglcontextrestored", R), () => {
      g.disposed || (g.disposed = !0, b.delete(g), T.disposed += 1, te("webgl-disposed", se));
    };
  }
  function ge(I, se) {
    return H.set(I, se), () => {
      H.get(I) === se && H.delete(I);
    };
  }
  function ee() {
    return r ? t.now() : -1;
  }
  function S(I) {
    if (I < 0 || !r) return;
    const se = t.now() - I;
    D.count += 1, D.maxMs = Math.max(D.maxMs, se);
  }
  function K(I, se) {
    if (se < 0 || !r) return;
    const g = t.now() - se, _ = P.get(I) ?? { count: 0, maxMs: 0 };
    _.count += 1, _.maxMs = Math.max(_.maxMs, g), P.set(I, _);
  }
  function de() {
    let I = 0, se = 0, g = 0, _ = [0, 0];
    const R = {};
    for (const Y of u) {
      const w = Y.ref.deref();
      if (!w) continue;
      I += 1;
      const k = w.width * w.height;
      k > 0 && (se += 1), g += k, k > _[0] * _[1] && (_ = [w.width, w.height]);
      const L = R[Y.label] ?? (R[Y.label] = [0, 0]);
      L[0] += 1, L[1] += k;
    }
    return { ...f, alive: I, sized: se, pixels: g, mb: Dr(g * 4 / Ta, 1), largest: _, byLabel: R };
  }
  function q() {
    const I = [];
    let se = 0, g = 0;
    for (const _ of c) {
      const R = _.ref.deref();
      if (!R) continue;
      se += 1;
      const Y = !R.paused && !R.ended;
      Y && (g += 1), I.length < qy && I.push({
        label: _.label,
        playing: Y,
        src: !!(R.currentSrc || R.src),
        size: [R.videoWidth || 0, R.videoHeight || 0],
        ready: R.readyState ?? 0,
        connected: !!R.isConnected
      });
    }
    return { ...p, alive: se, playing: g, list: I };
  }
  function ue() {
    const I = t.now(), se = t.memory(), g = {
      t: t.clock(),
      heap: se ? { used: Dr(se.usedJSHeapSize / Ta, 1), total: Dr(se.totalJSHeapSize / Ta, 1), limit: Dr(se.jsHeapSizeLimit / Ta, 1) } : null,
      canvas: de(),
      webgl: { ...T, alive: [...b].filter((_) => !_.lost).length },
      video: q(),
      frame: { count: D.count, maxMs: Dr(D.maxMs), longTasks: W.count, longTaskMaxMs: Dr(W.maxMs) },
      renders: Object.fromEntries([...P].map(([_, R]) => [_, { count: R.count, maxMs: Dr(R.maxMs) }])),
      sources: Object.fromEntries([...H].map(([_, R]) => [_, R()])),
      costMs: Dr(d, 3)
    };
    return D = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 }, $.push({ record: g, text: JSON.stringify(g) }), $.length > By && $.shift(), l += 1, l % Jy === 0 && ne(), d = t.now() - I, g;
  }
  function Pe(I = Uy) {
    const se = JSON.stringify({ ...o, events: U }).slice(0, -1);
    let g = I - se.length - 14, _ = $.length;
    for (; _ > 0 && g - $[_ - 1].text.length - 1 >= 0; )
      _ -= 1, g -= $[_].text.length + 1;
    return `${se},"records":[${$.slice(_).map((R) => R.text).join(",")}]}`;
  }
  function ne() {
    if (!o) return;
    const I = t.storage();
    if (I) {
      o.savedAt = t.clock();
      try {
        I.setItem(Al, Pe());
      } catch {
      }
    }
  }
  function O() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", ne();
  }
  function Z() {
    var R;
    if (n) return i;
    n = !0;
    const I = t.storage();
    if (!I) return null;
    let se = null;
    try {
      if (se = I.getItem(Al), se === null) {
        const Y = I.getItem(Wd);
        return i = Y === null ? null : JSON.parse(Y), i;
      }
      I.setItem(Wd, se), I.removeItem(Al), i = JSON.parse(se);
    } catch {
      return i;
    }
    const g = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], _ = g.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${g.length} records kept. Its last records:`,
      JSON.stringify(_)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((R = g.at(-1)) == null ? void 0 : R.t) || 0).toISOString()}; ${g.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(_)
    ), i;
  }
  function ae(I) {
    const se = I === !0;
    if (Z(), se !== r) {
      if (r = se, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, $.length = 0, s = t.observeLongTasks((g) => {
          for (const _ of g)
            W.count += 1, W.maxMs = Math.max(W.maxMs, _.duration);
        }), t.addUnload(O), a = t.setInterval(ue, Xy), ne();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(O), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", ne();
    }
  }
  function ye() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...U], records: $.map((I) => I.record) } : null,
      previous: i
    };
  }
  function ve() {
    const I = t.document(), se = new Blob([JSON.stringify(ye(), null, 1)], { type: "application/json" }), g = URL.createObjectURL(se), _ = I.createElement("a");
    _.href = g, _.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, _.click(), setTimeout(() => URL.revokeObjectURL(g), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: G,
    releaseCanvas: ie,
    trackCanvas: ce,
    createVideo: pe,
    trackVideo: E,
    watchContext: me,
    addSource: ge,
    frameStart: ee,
    frameEnd: S,
    renderEnd: K,
    sample: ue,
    serialize: Pe,
    recoverPrevious: Z,
    setEnabled: ae,
    exportData: ye,
    download: ve
  };
}
const xn = eb(), dn = xn.createCanvas, gc = xn.releaseCanvas, Il = xn.trackCanvas, ol = xn.createVideo, Kd = xn.trackVideo, tb = xn.addSource, nb = xn.frameStart, rb = xn.frameEnd;
function sh(e, t) {
  const r = xn.watchContext(e.canvas, t), n = xn.addSource(`three.${t}`, () => e.stats()), i = (o) => (a) => {
    const s = xn.frameStart(), l = o(a);
    return xn.renderEnd(t, s), l;
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
const ib = {
  id: Wy,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => xn.setEnabled(e === !0)
}, Bd = {
  id: Ky,
  label: "Export Panorama Suite diagnostics",
  function: () => xn.download()
};
function Ci(e, t) {
  const r = dn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function ob() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ud(e, t = 8) {
  var u;
  const r = (u = e == null ? void 0 : e.getContext) == null ? void 0 : u.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let a = n, s = i, l = -1, d = -1;
  for (let c = 0; c < i; c += 1)
    for (let f = 0; f < n; f += 1)
      o[(c * n + f) * 4 + 3] <= t || (f < a && (a = f), c < s && (s = c), f > l && (l = f), c > d && (d = c));
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
function bu(e, t) {
  return dn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Rr(e, t, r) {
  if (!e) return Ci(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ht(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function rn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let El = null, Ol = null, Yd = null, qd = null, jt = null, wo = null;
function ab() {
  if (Ol) return Ol;
  const e = 6, t = 17, r = dn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Ol = r, r;
}
function Fl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  El = Rr(El, r, n);
  const i = El;
  Ht(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", qd !== i.ctx && (Yd = i.ctx.createPattern(ab(), "repeat"), qd = i.ctx), i.ctx.fillStyle = Yd, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function sb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function lb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function cb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function ub(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Tt = /* @__PURE__ */ new Map(), vu = 128;
function db(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Tt.has(l)) {
    const U = Tt.get(l);
    return Tt.delete(l), Tt.set(l, U), U;
  }
  Tt.size >= vu && Tt.delete(Tt.keys().next().value);
  const d = a * 2 + 2, u = a + 1, c = bu(d, d), f = c.getContext("2d"), p = s * a, m = a + 1, y = `rgba(${r},${n},${i},${o})`, b = `rgba(${r},${n},${i},0)`, T = f.createRadialGradient(u, u, p, u, u, m);
  return T.addColorStop(0, y), T.addColorStop(1, b), f.fillStyle = T, f.fillRect(0, 0, d, d), Tt.set(l, c), c;
}
function fb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: d, a: u } = n, c = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), m = Math.max(0, Math.min(0.99, o)), y = Math.max(0, Math.min(1, a ?? 0)), b = `chisel:${c}:${f}:${r.toFixed(2)}:${s}:${l}:${d}:${u.toFixed(3)}:${p.toFixed(2)}:${m.toFixed(2)}:${y.toFixed(2)}`;
  if (Tt.has(b)) {
    const te = Tt.get(b);
    return Tt.delete(b), Tt.set(b, te), te;
  }
  Tt.size >= vu && Tt.delete(Tt.keys().next().value);
  const T = bu(c, f), U = T.getContext("2d"), H = U.createImageData(c, f), D = H.data, P = Math.max(0, e - t), W = Math.max(0, Math.min(1, r)), $ = 1 + p;
  for (let te = 0; te < f; te++)
    for (let re = 0; re < c; re++) {
      const ce = re + 0.5 - e, E = te + 0.5 - t, G = Math.max(Math.abs(ce) - P, 0), pe = Math.hypot(G, E) / t;
      if (pe >= 1) continue;
      const me = pe <= W ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - W)), ge = 1 - pe, ee = 1 + p * (1 - ge) * (1 - ge), S = 1 - m * ge * ge, K = ee * S / $;
      let de = 1;
      if (y > 0) {
        const Pe = Math.floor((E + t) / 1.5), ne = Math.floor((ce + e) / 8), O = si($i(Pe * 41 + 500, ne * 19 + 300));
        de = 1 - y * 0.42 * O;
      }
      const q = Math.round(255 * Math.min(1, u * me * K * de));
      if (q <= 0) continue;
      const ue = (te * c + re) * 4;
      D[ue] = s, D[ue + 1] = l, D[ue + 2] = d, D[ue + 3] = q;
    }
  return U.putImageData(H, 0, 0), Tt.set(b, T), T;
}
function $i(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function si(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function pb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, d = Math.max(0, r - n), u = Math.max(Math.abs(s) - d, 0), c = Math.hypot(u, l) / n;
  if (c >= 1) return 0;
  const f = si($i(e * 17 + 3, t * 13 + 7)), p = c + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const m = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), y = hb(e, t, s, l, r, n), b = o * 0.55;
  if (y < b) return 0;
  const U = 0.45 + 0.55 * ((y - b) / Math.max(1e-4, 1 - b));
  return Math.round(255 * Math.min(1, a * m * U));
}
function hb(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = si($i(a * 13 + 700, s * 17 + 400)), d = Math.floor((r + i) / 1.5), u = Math.floor((n + o) / 1.5), c = si($i(d * 23 + 800, u * 29 + 500)), f = si($i(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + c * 0.3 + f * 0.15;
}
function mb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, d = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), c = Math.max(0, Math.min(1, i)), f = `crayon:${d}:${u}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${c.toFixed(2)}`;
  if (Tt.has(f)) {
    const U = Tt.get(f);
    return Tt.delete(f), Tt.set(f, U), U;
  }
  Tt.size >= vu && Tt.delete(Tt.keys().next().value);
  const p = bu(d, u), m = p.getContext("2d"), y = m.createImageData(d, u), b = y.data, T = Math.max(0, Math.min(1, r));
  for (let U = 0; U < u; U++)
    for (let H = 0; H < d; H++) {
      const D = pb(H, U, e, t, T, c, l);
      if (D <= 0) continue;
      const P = (U * d + H) * 4;
      b[P] = o, b[P + 1] = a, b[P + 2] = s, b[P + 3] = D;
    }
  return m.putImageData(y, 0, 0), Tt.set(f, p), p;
}
function lh(e, t, r) {
  var y, b;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = cb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = gb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((y = t == null ? void 0 : t.angle) == null ? void 0 : y.value) ?? 0), d = ub(t, i), u = String(((b = t == null ? void 0 : t.targetSpace) == null ? void 0 : b.viewMode) || ""), c = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && u !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let m;
  if (n === "chisel") {
    const T = i * s, U = i, H = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), P = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    m = fb(T, U, o, a, H, D, P);
  } else if (n === "crayon") {
    const T = i * s, U = i, H = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    m = mb(T, U, o, a, H);
  } else
    m = db(i, o, a.r, a.g, a.b, a.a);
  return { ctx: e, stampTex: m, radiusPx: i, spacingPx: d, desc: r, aspect: s, angle: l, stampKind: n, scatter: p, latitudeCorrection: c };
}
function gb(e) {
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
function yb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Xd(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(d, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, d - i, u - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(d, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function _u(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: d, count: u } = e.scatter, c = d * e.radiusPx * i, f = $i(t, r);
    for (let p = 0; p < u; p++) {
      const m = si(f + p * 2) * Math.PI * 2, y = Math.sqrt(si(f + p * 2 + 1)) * c, b = t + Math.cos(m) * y, T = r + Math.sin(m) * y, U = Math.max(0.5, e.radiusPx * i * 0.48), H = (0.5 - T / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, P = U * e.aspect * D;
      Xd(e, b, T, U, P);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  Xd(e, t, r, o, l);
}
function Jd(e, t, r) {
  const n = lb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = lh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const m = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - s[f - 1].x) > i * 0.5 && (p += p < s[f - 1].x ? i : -i), s.push({ x: p, y: m });
  }
  if (_u(a, s[0].x, s[0].y, 1), s.length === 1) {
    e.restore();
    return;
  }
  let l = s[0], d = s[0], u = s[0], c = 0;
  for (let f = 1; f < s.length; f++) {
    const p = s[f], m = { x: (d.x + p.x) * 0.5, y: (d.y + p.y) * 0.5 };
    f === 1 ? c = Zo(a, u.x, u.y, m.x, m.y, c) : c = _s(a, l, u, m, p, c), l = d, d = p, u = m;
  }
  s.length === 2 ? Zo(a, u.x, u.y, d.x, d.y, c) : _s(a, l, u, d, d, c), e.restore();
}
function Qa(e, t, r) {
  var c;
  const n = Array.isArray((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, a = yb(t), s = [];
  let l = 1 / 0, d = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const p = sb(n[f]);
    let m = Number(p.x || 0) * i;
    f > 0 && Math.abs(m - s[f - 1].x) > i * 0.5 && (m += m < s[f - 1].x ? i : -i), s.push({ x: m, y: Number(p.y || 0) * o }), m < l && (l = m), m > d && (d = m);
  }
  function u(f) {
    e.beginPath(), e.moveTo(s[0].x + f, s[0].y);
    for (let p = 1; p < s.length; p++) e.lineTo(s[p].x + f, s[p].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = a, u(0), l < 0 && u(i), d > i && u(-i), e.restore();
}
function Da(e, t, r) {
  var a;
  if (String(((a = t == null ? void 0 : t.geometry) == null ? void 0 : a.geometryKind) || "") === "lasso_fill") {
    Qa(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Jd(e, t, r) : (wo = Rr(wo, r.width, r.height), Ht(wo), Jd(wo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(wo.canvas, 0, 0), e.restore());
}
function qr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Zo(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let d = e.spacingPx - o;
  for (; d <= l; ) {
    const u = d / l;
    _u(e, t + a * u, r + s * u, 1), d += e.spacingPx;
  }
  return l - d + e.spacingPx;
}
function _s(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, d = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, u = 0, c = s, f = c + l, p = f + d, m = f - c, y = 16;
  let b = o, T = r.x, U = r.y;
  for (let H = 1; H <= y; H++) {
    const D = c + m * H / y, P = ((c - D) * t.x + (D - u) * r.x) / (c - u), W = ((c - D) * t.y + (D - u) * r.y) / (c - u), $ = ((f - D) * r.x + (D - c) * n.x) / (f - c), te = ((f - D) * r.y + (D - c) * n.y) / (f - c), re = ((p - D) * n.x + (D - f) * i.x) / (p - f), ce = ((p - D) * n.y + (D - f) * i.y) / (p - f), E = ((f - D) * P + (D - u) * $) / (f - u), G = ((f - D) * W + (D - u) * te) / (f - u), ie = ((p - D) * $ + (D - c) * re) / (p - c), pe = ((p - D) * te + (D - c) * ce) / (p - c), me = ((f - D) * E + (D - c) * ie) / (f - c), ge = ((f - D) * G + (D - c) * pe) / (f - c);
    b = Zo(e, T, U, me, ge, b), T = me, U = ge;
  }
  return b;
}
function bb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let d = t * a;
  if (l && Math.abs(d - l.prev.x) > a * 0.5 && (d += d < l.prev.x ? a : -a), !l) {
    const p = lh(i, n, o), m = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), y = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), b = String((n == null ? void 0 : n.toolKind) || "") === "eraser", T = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", _u(p, d, s, 1), e.activeStroke = {
      pprev: { x: d, y: s },
      prev: { x: d, y: s },
      lastMidX: d,
      lastMidY: s,
      stampTex: p.stampTex,
      radiusPx: p.radiusPx,
      spacingPx: p.spacingPx,
      aspect: p.aspect,
      angle: p.angle,
      stampKind: p.stampKind,
      scatter: p.scatter,
      latitudeCorrection: p.latitudeCorrection,
      strokeOpacity: m,
      velocityWidthFactor: y,
      distSinceStamp: 0,
      isEraser: b,
      layerKind: T,
      pointCount: 1
    }, rn(e);
    return;
  }
  const u = (l.prev.x + d) * 0.5, c = (l.prev.y + s) * 0.5;
  i.globalCompositeOperation = "source-over";
  const f = {
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
  l.pointCount === 1 ? l.distSinceStamp = Zo(f, l.lastMidX, l.lastMidY, u, c, l.distSinceStamp) : l.distSinceStamp = _s(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: u, y: c },
    { x: d, y: s },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: d, y: s }, l.lastMidX = u, l.lastMidY = c, l.pointCount++, rn(e);
}
function Su(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Ci(t, r), a = {
    descriptor: n,
    committedMask: Ci(t, r),
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
    committedPaint: Ci(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Ci(t, r);
  let d = null, u = "", c = null;
  const f = /* @__PURE__ */ new Map();
  let p = null;
  function m(ie) {
    return {
      actionGroupId: ie,
      descriptor: n,
      committedPaint: Ci(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function y(ie) {
    let pe = i.get(ie);
    return pe || (pe = m(ie), i.set(ie, pe)), pe;
  }
  function b(ie) {
    return u === "mask" ? a : d ? y(d) : s;
  }
  function T(ie) {
    var K;
    const pe = !c || c.length !== ie.length || ie.some((de, q) => de !== c[q]), me = u === "paint" && ((K = d ? i.get(d) : s) == null ? void 0 : K.activeStroke) || null;
    let ge = a.displayDirty || s.displayDirty || pe;
    for (const de of ie) {
      const q = i.get(de);
      if (q != null && q.displayDirty) {
        ge = !0;
        break;
      }
    }
    if (me && (ge = !0), !ge) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const de of ie) {
      const q = i.get(de);
      q && (q.displayDirty = !1);
    }
    c = [...ie];
    const ee = l.ctx;
    Ht(l);
    const S = !!(me != null && me.isEraser);
    for (const de of ie) {
      const q = i.get(de);
      if (!q) continue;
      const Pe = d === q.actionGroupId && u === "paint" ? q.activeStroke : null;
      if (S)
        jt = Rr(jt, t, r), Ht(jt), jt.ctx.drawImage(q.committedPaint.canvas, 0, 0), qr(jt.ctx, o.canvas), ee.drawImage(jt.canvas, 0, 0);
      else if (ee.drawImage(q.committedPaint.canvas, 0, 0), Pe) {
        const ne = q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Pe.strokeOpacity ?? 1));
        ee.save(), ee.globalAlpha = ne, ee.drawImage(o.canvas, 0, 0), ee.restore();
      }
    }
  }
  function U(ie) {
    var me, ge, ee, S, K;
    for (const de of i.values())
      Ht(de.committedPaint), Ht(de.currentStroke), de.activeStroke = null, rn(de);
    Ht(a.committedMask), Ht(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), rn(a), rn(s), c = null;
    const pe = [
      ...Array.isArray((ge = (me = ie == null ? void 0 : ie.painting) == null ? void 0 : me.paint) == null ? void 0 : ge.strokes) ? ie.painting.paint.strokes : [],
      ...Array.isArray((S = (ee = ie == null ? void 0 : ie.painting) == null ? void 0 : ee.mask) == null ? void 0 : S.strokes) ? ie.painting.mask.strokes : []
    ];
    for (const de of pe) {
      if (((K = de == null ? void 0 : de.targetSpace) == null ? void 0 : K.kind) !== "ERP_GLOBAL") continue;
      const q = String((de == null ? void 0 : de.layerKind) || "paint"), Pe = String((de == null ? void 0 : de.toolKind) || "pen") === "eraser";
      if (q === "mask") {
        const ne = a.descriptor;
        Pe ? (jt = Rr(jt, ne.width, ne.height), Ht(jt), Da(jt.ctx, de, ne), qr(a.committedMask.ctx, jt.canvas)) : (Da(a.committedMask.ctx, de, ne), a.painted = !0);
        continue;
      }
      if (Pe) {
        jt = Rr(jt, n.width, n.height), Ht(jt), Da(jt.ctx, de, n);
        for (const ne of i.values())
          qr(ne.committedPaint.ctx, jt.canvas), rn(ne);
      } else {
        const ne = String((de == null ? void 0 : de.actionGroupId) || "__default__"), O = y(ne), Z = O.descriptor;
        Da(O.committedPaint.ctx, de, Z), rn(O);
      }
    }
    T([...i.keys()]);
  }
  function H(ie, pe) {
    u = String((ie == null ? void 0 : ie.layerKind) || "");
    const me = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser";
    if (u === "mask")
      d = null, Ht(a.currentStroke), a.activeStroke = null, rn(a);
    else {
      const ge = me ? s : y(String((ie == null ? void 0 : ie.actionGroupId) || "__default__"));
      d = me ? "" : String((ie == null ? void 0 : ie.actionGroupId) || "__default__"), Ht(ge.currentStroke), ge.activeStroke = null, rn(ge);
    }
  }
  function D(ie, pe) {
    var q;
    const me = String((ie == null ? void 0 : ie.layerKind) || "paint"), ge = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", ee = me === "mask" ? a : ge ? s : y(String((ie == null ? void 0 : ie.actionGroupId) || d || "__default__")), S = ee.activeStroke, K = ee.descriptor;
    if (S && S.pointCount > 1) {
      const ue = ee.currentStroke.ctx;
      ue.globalCompositeOperation = "source-over";
      const Pe = {
        ctx: ue,
        stampTex: S.stampTex,
        radiusPx: S.radiusPx,
        spacingPx: S.spacingPx,
        desc: K,
        aspect: S.aspect,
        angle: S.angle,
        stampKind: S.stampKind,
        scatter: S.scatter,
        latitudeCorrection: S.latitudeCorrection
      };
      S.pointCount === 2 ? Zo(Pe, S.lastMidX, S.lastMidY, S.prev.x, S.prev.y, S.distSinceStamp) : _s(Pe, S.pprev, { x: S.lastMidX, y: S.lastMidY }, S.prev, S.prev, S.distSinceStamp);
    }
    ee.lassoPreviewActive && (Ht(ee.currentStroke), Qa(ee.currentStroke.ctx, ie, K), ee.lassoPreviewActive = !1);
    const de = me === "mask" ? a.committedMask : ee.committedPaint;
    if (ge && me === "paint")
      for (const ue of i.values())
        qr(ue.committedPaint.ctx, ee.currentStroke.canvas), rn(ue);
    else if (ge)
      qr(de.ctx, ee.currentStroke.canvas);
    else {
      me === "mask" && (a.painted = !0);
      const ue = Math.max(0, Math.min(1, (S == null ? void 0 : S.strokeOpacity) ?? 1));
      de.ctx.save(), de.ctx.globalAlpha = ue, de.ctx.drawImage(ee.currentStroke.canvas, 0, 0), de.ctx.restore();
    }
    ob() && (String((ie == null ? void 0 : ie.toolKind) || ""), String((K == null ? void 0 : K.kind) || ""), Number((K == null ? void 0 : K.width) || 0), Number((K == null ? void 0 : K.height) || 0), String(((q = ie == null ? void 0 : ie.targetSpace) == null ? void 0 : q.viewMode) || ""), Number((ie == null ? void 0 : ie.aspect) ?? 1), Ud(ee.currentStroke.canvas), Ud(de.canvas), void 0), Ht(ee.currentStroke), ee.activeStroke = null, rn(ee), f.clear(), d = null, u = "", T([...i.keys()]);
  }
  function P(ie) {
    if (u === "mask")
      Ht(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, rn(a);
    else if (u === "paint" && !d)
      Ht(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, rn(s);
    else if (d) {
      const pe = i.get(d);
      pe && (Ht(pe.currentStroke), pe.activeStroke = null, pe.lassoPreviewActive = !1, rn(pe));
    }
    f.clear(), d = null, u = "", T([...i.keys()]);
  }
  function W(ie, pe) {
    var ge;
    if (u = String((ie == null ? void 0 : ie.layerKind) || ""), String(((ge = ie == null ? void 0 : ie.geometry) == null ? void 0 : ge.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        Ht(a.currentStroke), Qa(a.currentStroke.ctx, ie, a.descriptor), a.lassoPreviewActive = !0, rn(a);
      else {
        const ee = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", S = ee ? s : y(String((ie == null ? void 0 : ie.actionGroupId) || d || "__default__"));
        d = ee ? "" : String((ie == null ? void 0 : ie.actionGroupId) || d || "__default__"), Ht(S.currentStroke), Qa(S.currentStroke.ctx, ie, S.descriptor), S.lassoPreviewActive = !0, rn(S);
      }
      T([...i.keys()]);
    }
  }
  function $(ie) {
    return T(ie ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function te(ie) {
    return i.get(String(ie)) ?? null;
  }
  function re() {
    return [...i.keys()];
  }
  function ce(ie) {
    var ue;
    const pe = i.get(String(ie));
    if (!pe) return null;
    const me = u === "paint" && d === pe.actionGroupId, ge = u === "paint" && ((ue = d ? i.get(d) : s) == null ? void 0 : ue.activeStroke) || null, ee = !!(ge != null && ge.isEraser), S = me ? pe.activeStroke : null;
    if (!ee && !S) return pe.committedPaint.canvas;
    const K = `${pe.revision}:${s.revision}:${ee}`, de = f.get(pe.actionGroupId);
    if ((de == null ? void 0 : de.key) === K) return de.surface.canvas;
    const q = Rr((de == null ? void 0 : de.surface) ?? null, t, r);
    return Ht(q), q.ctx.drawImage(pe.committedPaint.canvas, 0, 0), ee ? qr(q.ctx, o.canvas) : (q.ctx.save(), q.ctx.globalAlpha = pe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, S.strokeOpacity ?? 1)), q.ctx.drawImage(o.canvas, 0, 0), q.ctx.restore()), f.set(pe.actionGroupId, { key: K, surface: q }), q.canvas;
  }
  function E() {
    const ie = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!ie || ie.isEraser) ? null : `${a.revision}:${!!ie}`;
  }
  function G() {
    const ie = E();
    if (ie === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === ie) return p.surface.canvas;
    const pe = Rr((p == null ? void 0 : p.surface) ?? null, t, r);
    Ht(pe);
    const me = u === "mask" ? a.activeStroke : null;
    return me != null && me.isEraser ? (jt = Rr(jt, t, r), Ht(jt), jt.ctx.drawImage(a.committedMask.canvas, 0, 0), qr(jt.ctx, o.canvas), Fl(pe.ctx, jt.canvas)) : (Fl(pe.ctx, a.committedMask.canvas), me && Fl(pe.ctx, o.canvas)), p = { key: ie, surface: pe }, pe.canvas;
  }
  return {
    rebuildCommitted: U,
    beginStroke: H,
    appendStrokePoint: bb,
    updateActiveStroke: W,
    commitActiveStroke: D,
    cancelActiveStroke: P,
    getErpTarget: $,
    ensureTarget: b,
    getGroupTarget: te,
    getGroupDisplayCanvas: ce,
    getMaskDisplayCanvas: G,
    getMaskDisplayRevision: E,
    getAllGroupIds: re
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Vt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function wu(e, t) {
  let r = Vt(t) - Vt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const yc = 3;
function xo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ss(e, t = 0) {
  const r = xo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = xo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = xo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = xo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(xo(t) || 0);
}
function ch(e) {
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
const Zd = Math.PI / 180, Qd = 0.12, vb = yc, _b = 35, Sb = 140, Ao = 100, wb = 20, ef = 0.8;
function xb(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Ao), 1, 179) * Zd;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Zd;
}
function xu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ao })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), a = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), s = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function d(U, H = null) {
    s && s(U, H);
  }
  function u(U, H, D = null, P = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(U || 0), l.drag.lastY = Number(H || 0), l.drag.lastTs = Number(P || performance.now()), l.drag.pointerId = D, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], d("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: D }), !0;
  }
  function c(U, H, D = "pano", P = performance.now()) {
    if (!l.drag.active) return !1;
    const W = Number(P || performance.now()), $ = Number(U), te = Number(H), re = $ - l.drag.lastX, ce = te - l.drag.lastY;
    l.drag.lastX = $, l.drag.lastY = te, l.drag.lastTs = W;
    const E = n() || { x: 1, y: 1 }, G = Number(E.x || 1), ie = Number(E.y || 1), pe = { ...t() };
    let me = 0, ge = 0;
    if (D === "unwrap") {
      const S = i() || { w: 1, h: 1 }, K = Math.max(1, Number(S.w || 1)), de = Math.max(1, Number(S.h || 1)), q = re / K, ue = ce / de;
      me = -q * 360 * G, ge = ue * 180 * ie;
    } else {
      const S = o() || { w: 0, h: 0 }, K = Math.max(1, Number(S.w || 0)), de = Math.max(1, Number(S.h || 0));
      if (K > 1 && de > 1) {
        const q = Ee(Number(pe.fov || Ao), 1, 179), ue = Ee(xb(q, K, de), 0.1, 179);
        me = -(re / K) * q * G, ge = ce / de * ue * ie;
      } else
        me = -re * Qd * G, ge = ce * Qd * ie;
    }
    pe.yaw = Vt(Number(pe.yaw || 0) + me), pe.pitch = Ee(Number(pe.pitch || 0) + ge, -89.9, 89.9), r(pe), l.velHistory.push({ ts: W, yaw: pe.yaw, pitch: pe.pitch });
    let ee = 0;
    for (; ee < l.velHistory.length - 1 && l.velHistory[ee].ts < W - 100; ) ee++;
    return ee > 0 && l.velHistory.splice(0, ee), l.inertia.active = !1, l.inertia.lastTs = W, a(), d("drag", { phase: "move", dx: re, dy: ce, dYaw: me, dPitch: ge }), !0;
  }
  function f(U = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const H = Number(U || performance.now());
    l.drag.lastTs = H;
    const D = l.velHistory.filter((W) => H - W.ts <= 80);
    if (D.length >= 2) {
      const W = D[0], $ = D.at(-1), te = Math.max(1e-3, ($.ts - W.ts) / 1e3);
      let re = $.yaw - W.yaw;
      re > 180 && (re -= 360), re < -180 && (re += 360), l.inertia.vx = re / te, l.inertia.vy = ($.pitch - W.pitch) / te;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const P = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = P > wb, l.inertia.lastTs = H, d("drag", { phase: "end", speed: P, inertiaActive: l.inertia.active }), !0;
  }
  function p(U = performance.now()) {
    if (!l.inertia.active) return !1;
    const H = Number(U || performance.now()), D = Math.max(1e-3, (H - (l.inertia.lastTs || H)) / 1e3);
    l.inertia.lastTs = H;
    const P = { ...t() };
    P.yaw = Vt(Number(P.yaw || 0) + l.inertia.vx * D), P.pitch = Ee(Number(P.pitch || 0) + l.inertia.vy * D, -89.9, 89.9);
    const W = Math.exp(-5.5 * D);
    return l.inertia.vx *= W, l.inertia.vy *= W, Math.abs(l.inertia.vx) < ef && Math.abs(l.inertia.vy) < ef && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(P), a(), l.inertia.active;
  }
  function m() {
    const U = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], U;
  }
  function y(U) {
    const H = Math.sign(Number(U || 0));
    if (!H) return !1;
    const D = { ...t() }, P = Number(D.fov || Ao);
    return D.fov = Ee(P + H * vb, _b, Sb), r(D), a(), d("wheel", { deltaSign: H, fovBefore: P, fovAfter: D.fov }), !0;
  }
  function b(U, H = 0) {
    return y(Ss(U, H));
  }
  function T() {
    r({ yaw: 0, pitch: 0, fov: Ao }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: c,
    endDrag: f,
    stepInertia: p,
    stopMotion: m,
    applyWheel: y,
    applyWheelEvent: b,
    resetView: T
  };
}
const vt = Math.PI / 180, qt = 180 / Math.PI;
function jn(e, t, r) {
  return { x: e, y: t, z: r };
}
function ws(e, t) {
  return jn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function xs(e, t) {
  return jn(e.x * t, e.y * t, e.z * t);
}
function Tl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ku(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return jn(e.x / t, e.y / t, e.z / t);
}
function wn(e, t) {
  const r = e * vt, n = t * vt, i = Math.cos(n);
  return jn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function Zi(e, t, r = 0) {
  const n = Number(e || 0) * vt, i = Number(t || 0) * vt, o = r * vt, a = Math.cos(n), s = Math.sin(n), l = Math.cos(i), d = Math.sin(i), u = Math.cos(o), c = Math.sin(o);
  return {
    right: jn(
      a * u - s * d * c,
      l * c,
      -s * u - a * d * c
    ),
    up: jn(
      -a * c - s * d * u,
      l * u,
      s * c - a * d * u
    ),
    fwd: jn(s * l, d, a * l)
  };
}
function ks(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Mt(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function kb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Mb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Mt(n.z_index ?? n.zIndex, t.length);
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
function Pb(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Nb(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Mt(e.t, 0), n = Mt(e.widthScale, null), i = Mt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Mt(e.u, null), a = Mt(e.v, null);
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
    const o = Mt(e.u, null), a = Mt(e.v, null);
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
function La(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Nb(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Cb(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = La(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = La(e.points, t, 1);
  if (!o) return null;
  const a = La(e.rawPoints, t, 1), s = La(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: a || o.map((l) => ({ ...l })),
    processedPoints: s || o.map((l) => ({ ...l }))
  };
}
function Ab(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Pb(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Cb(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Mt(e.size, null), a = Mt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const d = Mt(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let c = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    c = {
      r: Math.max(0, Math.min(1, Mt(f.r, 0))),
      g: Math.max(0, Math.min(1, Mt(f.g, 0))),
      b: Math.max(0, Math.min(1, Mt(f.b, 0))),
      a: Math.max(0, Math.min(1, Mt(f.a, 1)))
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
function tf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Ab(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Ib(e) {
  if (!e || typeof e != "object") return null;
  const t = Mt(e.u0, null), r = Mt(e.v0, null), n = Mt(e.u1, null), i = Mt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function Eb(e) {
  const t = e || {};
  return {
    du: Mt(t.du, 0) ?? 0,
    dv: Mt(t.dv, 0) ?? 0,
    rot_deg: Mt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Mt(t.scale, 1) ?? 1)
  };
}
function Ob(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Ib(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Mt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: Eb(e.transform)
  } : null;
}
function Fb(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = Ob(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function Qi(e) {
  const t = kb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Mb(e.groups),
    paint: tf(e.paint, "paint"),
    mask: tf(e.mask, "mask"),
    raster_objects: Fb(e.raster_objects)
  };
}
const Gn = 1, Wn = 179, bc = 85;
function al(e) {
  const t = ((nt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function uh(e, t) {
  let r = nt(e, 0) - nt(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function dh(e, t, { shiftKey: r = !1 } = {}) {
  let n = nt(e, 0) + nt(t, 0) * qt;
  return r && (n = Math.round(n / 15) * 15), al(n);
}
function nt(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Gr(e = {}) {
  const t = Ee(nt(e.hFOV_deg || 90, 90), Gn, Wn), r = Ee(nt(e.vFOV_deg || 60, 60), Gn, Wn), n = Math.tan(t * vt * 0.5), i = Math.tan(r * vt * 0.5);
  return {
    yawDeg: nt(e.yaw_deg, 0),
    pitchDeg: nt(e.pitch_deg, 0),
    rollDeg: nt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function di(e, t) {
  const r = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Gr(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Mu(e, t) {
  const r = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, nt(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Pu(e, t) {
  const r = Math.max(1e-12, nt(t, 1)), n = Math.max(1e-6, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * qt, Gn, Wn), a = Ee(2 * Math.atan(i / (2 * r)) * qt, Gn, Wn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Tb(e, t, r) {
  const n = nt(e == null ? void 0 : e.x, 0), i = nt(e == null ? void 0 : e.y, 0), o = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Gr(t), l = Math.max(1e-12, nt(r, 1)), d = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: n + (o - d) * 0.5,
    y: i + (a - u) * 0.5,
    w: d,
    h: u,
    focalPx: l
  };
}
function Nu(e, t, r = bc) {
  const n = Math.max(1e-12, nt(t, 1)), i = Ee(nt(r, bc), 1, 89.999), o = n * Math.tan(i * vt), a = Math.max(1, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function fh(e, t, r) {
  const n = Math.max(1e-12, nt(t, 1));
  return {
    x: (nt(r == null ? void 0 : r.x, 0) - nt(e == null ? void 0 : e.x, 0)) / n,
    y: -(nt(r == null ? void 0 : r.y, 0) - nt(e == null ? void 0 : e.y, 0)) / n
  };
}
function Db(e, t) {
  const r = Ee(nt(e, 90), Gn, Wn), n = Math.max(1e-6, nt(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * vt * 0.5) / n) * qt,
    Gn,
    Wn
  );
}
function es(e, t) {
  const r = Ee(nt(e, 60), Gn, Wn), n = Math.max(1e-6, nt(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * vt * 0.5) * n) * qt,
    Gn,
    Wn
  );
}
function nf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Lb(e, t) {
  const r = nf(e, 1), n = nf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (d, u) => u ? s(u, d % u) : d, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function mi(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * vt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * vt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function li(e) {
  const t = mi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Lb(t, 1);
}
function Cu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = li(t), t;
}
function ph({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Gn, Wn) : Ee(Math.min(42, nt(i, 100) * 0.42), 8, 96);
  return Cu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: nt(t, 0),
    pitch_deg: Ee(nt(r, 0), -89.9, 89.9),
    roll_deg: al(n),
    hFOV_deg: s,
    vFOV_deg: s,
    locked: !1
  });
}
function Pr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : li(e);
}
function hh(e, t) {
  const r = Gr(e), n = nt(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * qt, o = 2 * Math.atan(r.tanHalfY * n) * qt;
  return i < Gn || i > Wn || o < Gn || o > Wn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function mh(e, t, r = yc) {
  const n = Math.sign(nt(t, 0)), i = Math.abs(nt(r, yc));
  if (!n || !(i > 0)) return null;
  const o = Gr(e), a = o.hFovDeg + n * i;
  if (a < Gn || a > Wn) return null;
  const s = Math.tan(a * vt * 0.5);
  return hh(e, s / o.tanHalfX);
}
function gh(e, t) {
  const r = Gr(e), n = Zi(r.yawDeg, r.pitchDeg, r.rollDeg), i = nt(t == null ? void 0 : t.x, 0), o = nt(t == null ? void 0 : t.y, 0);
  return ku(ws(ws(n.fwd, xs(n.right, i)), xs(n.up, o)));
}
function Vb(e) {
  return jn(e.x, e.y, -e.z);
}
function ts(e) {
  return jn(e.x, e.y, -e.z);
}
function Mn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = Zi(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function yh(e) {
  const t = ts(jn(e[0][0], e[1][0], e[2][0])), r = ts(jn(e[0][1], e[1][1], e[2][1])), n = ts(jn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), a = Math.cos(i), s = Math.sin(i), l = Math.atan2(s * r.z - a * r.x, a * t.x - s * t.z);
  return { yawDeg: i * qt, pitchDeg: o * qt, rollDeg: l * qt };
}
function Qo(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function gi(e) {
  const [[t, r, n], [i, o, a], [s, l, d]] = e, u = t + o + d;
  if (u > 0) {
    const f = 0.5 / Math.sqrt(u + 1);
    return { x: (l - a) * f, y: (n - s) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > d) {
    const f = 2 * Math.sqrt(1 + t - o - d);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + s) / f, w: (l - a) / f };
  }
  if (o > d) {
    const f = 2 * Math.sqrt(1 + o - t - d);
    return { x: (r + i) / f, y: 0.25 * f, z: (a + l) / f, w: (n - s) / f };
  }
  const c = 2 * Math.sqrt(1 + d - t - o);
  return { x: (n + s) / c, y: (a + l) / c, z: 0.25 * c, w: (i - r) / c };
}
function Va(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ri = 1e-6, vc = 1e-6, Rb = 1e-9;
function ea(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function $b(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let a = 0, s = 1;
  for (let l = 0; l < 50; l += 1) {
    const d = 0.5 * (a + s);
    ea(0, r, i, 1, d) < t ? a = d : s = d;
  }
  return ea(0, n, o, 1, 0.5 * (a + s));
}
function Ui(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Yi(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((f) => -f / i), s = n.map((f) => f / o);
  if (a.reduce((f, p, m) => f + p * s[m], 0) < 0) return r.map(() => 0);
  const l = a.map((f, p) => (f * o + s[p] * i) / (i + o)), d = (f) => Math.sqrt(f.reduce((p, m) => p + m * m, 0)), u = 3 * Math.min(d(a), d(s)), c = d(l);
  return c <= u ? l : l.map((f) => f * u / c);
}
function bh(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((u, c) => o[c] - u);
  let l = s;
  Ui(e, n) && (l = Yi(t, n, r[n - 1].map((u, c) => u - i[c]), s).map((u) => u * a));
  let d = s;
  return Ui(e, n + 1) && (d = Yi(t, n + 1, s.map((u) => -u), r[n + 2].map((u, c) => u - o[c])).map((u) => u * a)), [l.map((u) => u / 3), d.map((u) => -u / 3)];
}
function vh(e, t, r, n, i) {
  const [[o], [a]] = bh(e, t, r.map((s) => [s]), n);
  return ea(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function zb(e, t, r, n) {
  var d, u;
  const i = e.map((c) => c.value);
  let [o, a] = bh(e, t, i, r);
  o = ((d = e[r].handles) == null ? void 0 : d.out) ?? o, a = ((u = e[r + 1].handles) == null ? void 0 : u.in) ?? a;
  const s = i[r], l = i[r + 1];
  return [0, 1, 2].map((c) => ea(s[c], s[c] + o[c], l[c] + a[c], l[c], n));
}
function Ms([e, t, r, n], [i, o, a, s]) {
  return [
    n * i + e * s + t * a - r * o,
    n * o - e * a + t * s + r * i,
    n * a + e * o - t * i + r * s,
    n * s - e * i - t * o - r * a
  ];
}
function jb(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Dl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Hb([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function _c(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Fi(e, t) {
  return Hb(Ms([-e[0], -e[1], -e[2], e[3]], t));
}
function Ll(e, t, r) {
  return Ms(e, _c(Fi(e, t).map((n) => r * n)));
}
function Vl(e, t) {
  const r = jb(e, t);
  if (Math.abs(r) > vc) return r < 0;
  const [n, i, o] = Fi(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > vc) return a < 0;
  return !1;
}
function Ra(e) {
  const { x: t, y: r, z: n, w: i } = gi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Sc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Gb(e, t, r, n) {
  const i = Ra(e[r].value);
  let o = Ra(e[r + 1].value);
  Vl(i, o) && (o = Dl(o));
  const a = t[r + 1] - t[r], s = Fi(i, o);
  let l = s;
  if (Ui(e, r)) {
    let P = Ra(e[r - 1].value);
    Vl(P, i) && (P = Dl(P)), l = Yi(t, r, Fi(i, P), s).map((W) => W * a);
  }
  let d = s;
  if (Ui(e, r + 1)) {
    let P = Ra(e[r + 2].value);
    Vl(o, P) && (P = Dl(P)), d = Yi(t, r + 1, Fi(o, i), Fi(o, P)).map((W) => W * a);
  }
  const u = Ms(i, _c(l.map((P, W) => 0.5 * (P - s[W])))), c = Ms(o, _c(s.map((P, W) => 0.5 * (P - d[W])))), [f, p, m, y] = Ll(Ll(i, o, n), Ll(u, c, n), 2 * n * (1 - n)), { yawDeg: b, pitchDeg: T, rollDeg: U } = yh(Qo({ x: f, y: p, z: m, w: y })), H = e[r].value, D = e[r + 1].value;
  return {
    yaw_deg: Sc(b, H.yaw_deg, D.yaw_deg, n),
    pitch_deg: T,
    roll_deg: Sc(U, H.roll_deg, D.roll_deg, n)
  };
}
function ta(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ps(e) {
  return Math.sqrt(ta(e, e));
}
function Ns(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function _h(e, t) {
  const r = ta(e, t), n = t.map((a, s) => a - r * e[s]), i = Ps(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Ai(e, t) {
  const r = Ps(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function $a(e, t, r) {
  return Ai(e, _h(e, t).map((n) => r * n));
}
function Rl(e, t) {
  const r = Ns(e[t].value), n = Ns(e[t + 1].value), i = ta(r, n), o = i < 0 && Ps(n.map((l, d) => l - i * r[d])) <= vc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = _h(r, n);
  const s = Ps(a);
  return [a, a.map((l, d) => Math.cos(s) * l - s * Math.sin(s) * r[d]), o];
}
function Wb(e, t, r, n) {
  const i = Ns(e[r].value), o = Ns(e[r + 1].value), [a, s, l] = Rl(e, r);
  let d = a, u = s;
  const c = t[r + 1] - t[r];
  Ui(e, r) && (d = Yi(t, r, Rl(e, r - 1)[1].map((H) => -H), d).map((H) => H * c)), Ui(e, r + 1) && (u = Yi(t, r + 1, u.map((H) => -H), Rl(e, r + 1)[0]).map((H) => H * c));
  let f, p, m;
  if (l) {
    const H = Math.PI, D = ea(0, ta(d, a) / H / 3, H - ta(u, s) / H / 3, H, n);
    [f, p, m] = Ai(i, a.map((P) => D * P / H));
  } else {
    const H = $a(Ai(i, d.map((W) => W / 3)), Ai(o, u.map((W) => -W / 3)), n), D = $a(Ai(i, d.map((W) => n * W / 3)), H, n), P = $a(H, Ai(o, u.map((W) => -(1 - n) * W / 3)), n);
    [f, p, m] = $a(D, P, n);
  }
  const y = Math.hypot(f, m), b = e[r].value.yaw_deg, T = e[r + 1].value.yaw_deg;
  return { yaw_deg: y <= Rb ? b + (T - b) * n : Sc(Math.atan2(f, m) * 180 / Math.PI, b, T, n), pitch_deg: Math.atan2(p, y) * 180 / Math.PI };
}
function Kb(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = vh(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function Bb(e, t, r, n) {
  return vh(e, t, e.map((i) => i.value), r, n);
}
const Ub = { position: zb, rotation: Gb, direction: Wb, size: Kb };
function Rt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Va(e[t].value);
  if (r <= n[0].frame + ri) return Va(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - ri) return Va(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + ri; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= ri || a.easing === "hold") return Va(a.value);
  const s = n.map((d) => d.frame), l = $b(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (Ub[t] ?? Bb)(n, s, o, l);
}
function wc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Yb(e) {
  return Math.min(1, Math.max(0, e));
}
function Sh(e) {
  return Math.max(1e-6, e);
}
function wh(e, t) {
  return t - (e.start - e.in);
}
function eo(e, t) {
  return t >= e.start - ri && (e.duration === null || t < e.start + e.duration - ri);
}
function Au(e, t) {
  return {
    position: Rt(e, "position", t),
    ...Rt(e, "rotation", t),
    hFOV_deg: wc(Rt(e, "fov", t)),
    aspect: e.aspect
  };
}
function sl(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = wh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Au(n, r),
    scene: {
      active: i.visible && eo(i.clip, r),
      clip_frame: o,
      position: Rt(i, "position", o),
      ...Rt(i, "rotation", o),
      scale: Sh(Rt(i, "scale", o))
    },
    stickers: e.stickers.map((a) => fi(a, r))
  };
}
function qb(e, t) {
  if (e.placement === "world")
    return {
      position: Rt(e, "position", t),
      ...Rt(e, "rotation", t),
      scale: Sh(Rt(e, "scale", t))
    };
  const r = Rt(e, "size", t);
  return {
    ...Rt(e, "direction", t),
    roll_deg: Rt(e, "roll", t),
    hFOV_deg: wc(r.hFOV_deg),
    vFOV_deg: wc(r.vFOV_deg)
  };
}
function fi(e, t) {
  const r = wh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && eo(e.clip, t),
    clip_frame: r,
    ...qb(e, r),
    opacity: Yb(Rt(e, "opacity", r))
  };
}
const Xb = 2, Jb = ["sky", "world"], xc = ["perspective", "erp"], Zb = ["input", "output", "temp"], xh = [0.42, 0, 0.58, 1], kh = 1, Iu = 1e3, kc = 1e7, Eu = kc;
function Qt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Wt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Ou(e, t) {
  const r = Wt(e, t);
  return r !== null && r > 0 ? r : t;
}
function kn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ll(e) {
  const t = Wt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ns(e) {
  const t = ll(e);
  return t === null ? null : kn(t, -kc, kc);
}
function to(e) {
  const t = Ou(e, null);
  return t === null ? null : kn(t, kh, Iu);
}
function Mh(e) {
  const t = ll(e);
  return t !== null && t >= 1 ? Math.min(t, Eu) : null;
}
function na(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ph(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Wt(r, null));
  return t.includes(null) ? null : t;
}
function Nh(e) {
  return Ph(e) || [0, 0, 0];
}
function Ch(e) {
  const t = Qt(e) ? e : {};
  return {
    yaw_deg: Wt(t.yaw_deg, 0),
    pitch_deg: kn(Wt(t.pitch_deg, 0), -90, 90),
    roll_deg: Wt(t.roll_deg, 0)
  };
}
function Qb(e) {
  return kn(Wt(e, 90), 0.1, 179);
}
function e1(e) {
  return Ou(e, 1);
}
function t1(e) {
  const t = Qt(e) ? e : {};
  return {
    yaw_deg: Wt(t.yaw_deg, 0),
    pitch_deg: kn(Wt(t.pitch_deg, 0), -90, 90)
  };
}
function n1(e) {
  return Wt(e, 0);
}
function r1(e) {
  const t = Qt(e) ? e : {};
  return {
    hFOV_deg: kn(Wt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: kn(Wt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Ah(e) {
  return kn(Wt(e, 1), 0, 1);
}
const Fu = [["position", Nh], ["rotation", Ch], ["fov", Qb]], cl = [["position", Nh], ["rotation", Ch], ["scale", e1]], Tu = [["direction", t1], ["roll", n1], ["size", r1], ["opacity", Ah]], Du = [...cl, ["opacity", Ah]];
function i1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Wt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...xh];
}
function o1(e) {
  if (!Qt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Ph(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function a1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Qt(i)) continue;
    const o = ns(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: i1(i.easing) }, s = r ? o1(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Lu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Qt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: a1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Ih(e) {
  const t = Qt(e) ? e : {}, r = ns(t.start), n = ns(t.in), i = ns(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function s1(e) {
  const t = Qt(e) ? e : {}, r = kn(Wt(t.x0, 0), 0, 1), n = kn(Wt(t.y0, 0), 0, 1), i = kn(Wt(t.x1, 1), 0, 1), o = kn(Wt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function l1(e) {
  if (!Qt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Zb.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function c1(e) {
  const t = l1(e.source);
  if (!t) return null;
  const r = Jb.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Ih(e.clip),
    visible: na(e.visible, !0),
    locked: na(e.locked, !1),
    crop: s1(e.crop),
    ...Lu(e, n ? Du : Tu)
  };
  return n || (i.z_index = ll(e.z_index) ?? 0), i;
}
function u1(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = Qt(o) ? c1(o) : null;
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
function Eh(e) {
  if (!Qt(e)) return null;
  const t = xc.includes(e.projection) ? e.projection : xc[0];
  return { aspect: Ou(e.aspect, 1), projection: t, visible: na(e.visible, !0), ...Lu(e, Fu) };
}
function Vu() {
  return Eh({});
}
function Cs(e) {
  const t = Qt(e.timeline) ? e.timeline : {}, r = Qt(e.scene) ? e.scene : {};
  return {
    version: Xb,
    timeline: {
      fps: to(t.fps) ?? 24,
      length: Mh(t.length)
    },
    camera: Eh(e.camera),
    scene: { clip: Ih(r.clip), visible: na(r.visible, !0), ...Lu(r, cl) },
    stickers: u1(e.stickers),
    painting: Qi(e.painting),
    painting_layer: Qt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: na(e.painting_visible, !0)
  };
}
function d1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Qt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function f1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Qt(t)) return null;
  const r = kn(Wt(t.hFOV_deg, 90), 1, 179), n = kn(Wt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function p1(e) {
  const t = Qt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Qt) : [];
  return r.sort((n, i) => Wt(n.z_index, 0) - Wt(i.z_index, 0)), Cs({
    camera: f1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: d1(n, t),
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
function dr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Cs({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Qt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? p1(t) : Cs(t);
}
const $l = {
  state: { painting_visible: !0 },
  camera: { projection: xc[0], visible: !0 },
  scene: { visible: !0 }
};
function zl(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Mc(e) {
  return JSON.stringify({
    ...zl(e, $l.state),
    camera: e.camera && zl(e.camera, $l.camera),
    scene: zl(e.scene, $l.scene)
  });
}
function jl(e, t, r, n, i) {
  const o = {};
  for (const [a] of t)
    o[a] = {
      value: e[a].value,
      keyframes: e[a].keyframes.map((s) => ({ ...s, frame: r(n + s.frame) - i }))
    };
  return o;
}
function rf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function ra(e, t) {
  const r = to(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => ll(s * n), { length: o } = e.timeline, a = rf(e.scene.clip, i);
  return Cs({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...jl(e.camera, Fu, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...jl(e.scene, cl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: d, newAnchor: u } = rf(s.clip, i), c = s.placement === "world" ? Du : Tu;
      return { ...s, clip: l, ...jl(s, c, i, d, u) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Hl(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Oh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Fh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= ri);
}
function Th(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Oh(e.keyframes[n - 1].easing) : [...xh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function cn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Hl(i.value, n);
    return;
  }
  const o = Fh(i, r);
  o ? o.value = Hl(o.value, n) : Th(i, r, Hl(Rt(e, t, r), n));
}
function no(e) {
  return e.placement === "world" ? Du.map(([t]) => t) : e.placement === "sky" ? Tu.map(([t]) => t) : (e.clip ? cl : Fu).map(([t]) => t);
}
function h1(e, t) {
  for (const r of no(e))
    Fh(e[r], t) || Th(e[r], t, Rt(e, r, t));
}
function m1(e) {
  const t = no(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Gl(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function g1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function y1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const a = e[o];
    if (!a.keyframes.some((l) => i.has(l.frame))) continue;
    const s = Rt(e, o, n);
    a.keyframes = a.keyframes.filter((l) => !i.has(l.frame)), a.keyframes.length || (a.value = s);
  }
}
function b1(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const a of t) {
    const s = e[a], l = s.keyframes.filter((u) => o.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), d = new Set(l.map((u) => u.frame));
    s.keyframes = [
      ...s.keyframes.filter((u) => !o.has(u.frame) && !d.has(u.frame)),
      ...l
    ].sort((u, c) => u.frame - c.frame);
  }
  return n;
}
function Dh(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function v1(e, t, r) {
  const n = Dh(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function _1(e, t, r, n) {
  for (const i of Dh(e, t, r)) i.easing = Oh(n);
}
function S1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function w1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function x1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function k1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function As(e) {
  return no(e).map((t) => e[t]);
}
function M1(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? As(e.camera).some((n) => n.keyframes.length > 0) : Lh(e, { camera: r });
}
function Is(e) {
  return As(e).some((t) => t.keyframes.length > 0) || !!e.clip && !k1(e.clip);
}
function Lh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Is);
}
const P1 = 1e5;
function Vh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const a of As(e.camera))
      for (const s of a.keyframes) o = Math.max(o, s.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: s } = a;
    o = Math.max(o, s.duration === null || s === n ? s.start + 1 : s.start + s.duration);
    for (const l of As(a))
      for (const d of l.keyframes) o = Math.max(o, s.start - s.in + d.frame + 1);
  }
  return Number.isFinite(o) ? o : P1;
}
function N1(e) {
  return e > 0 ? to(Math.min(e, Iu)) : null;
}
function C1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Mh(Math.max(1, Math.min(e, Eu)));
}
const Wl = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], A1 = 2e3;
function I1(e, t, r = 56) {
  const n = Wl.find((o) => o * t >= r) || Wl[Wl.length - 1], i = [];
  for (let o = 0; o < e && i.length < A1; o += n) i.push(o);
  return i;
}
function E1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let za = { text: null, parsed: null };
function Pn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Es(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function O1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Pn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Qi(null),
    painting_layer: null,
    ui_settings: Es(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Rh(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function F1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function T1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function D1(e) {
  return Array.isArray(e) ? e.map((t) => Cu(t)) : [];
}
function L1(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function $h(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = O1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (za.text === i ? o = za.parsed : (o = JSON.parse(i), za = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const a = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, s = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: F1(o.assets),
      stickers: T1(o.stickers),
      shots: D1(o.shots),
      painting: Qi(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Es(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Es({ ...s.ui_settings, ...a })), s.output_preset = Rh(
      r.outputPreset,
      Number(s.output_preset || n.output_preset)
    ), s.bg_color = String(r.backgroundColor || s.bg_color || n.bg_color), s.coverage = Pn(r.coverage), delete s.editor_history, s;
  } catch {
    return za = { text: i, parsed: null }, n;
  }
}
function V1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function R1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function $1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function zh(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, d = to(t.fps);
  let u;
  try {
    u = dr(e);
  } catch {
    u = dr(null);
  }
  d && d !== u.timeline.fps && (u = ra(u, d));
  const c = l && u.camera === null;
  if (c && (u = { ...u, camera: Vu() }), s) {
    let f = dr(s);
    d && d !== f.timeline.fps && (f = ra(f, d)), u = { ...f, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...c ? { default_camera: !0 } : {},
    coverage: Pn(i),
    bg_color: n,
    output_preset: Rh(r),
    ui_settings: Es(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...a }
  };
}
function z1(e, t) {
  e.cutout_state && (e.cutout_state = ra(e.cutout_state, t));
  const r = ra(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, a] of i)
    if (a) {
      o.clip && (o.clip = a.clip);
      for (const s of no(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Ru(e, t) {
  const r = fi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const j1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function of(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function H1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[j1[r]].keyframes.length));
}
function jh(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = of(r, ["yaw_deg", "pitch_deg"]), o = of(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && cn(e, "direction", n, i), r.rot_deg !== void 0 && cn(e, "roll", n, r.rot_deg), Object.keys(o).length && cn(e, "size", n, o);
}
const ul = ["position_x", "position_y", "position_z"], dl = "camera";
function Hh(e, t) {
  const r = Au(e, t);
  return Cu({
    id: dl,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Db(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function G1(e) {
  return dr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Vt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function W1(e) {
  return e - 360 * Math.round(e / 360);
}
function K1(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + W1(r[o] - n[o]));
  Object.keys(i).length && cn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && cn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * vt * 0.5) / Math.tan(r.vFOV_deg * vt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && cn(e, "position", t, [...r.position]);
}
function B1(e, t) {
  const r = Rt(e, "position", t), n = Rt(e, "rotation", t);
  return {
    ...Object.fromEntries(ul.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Rt(e, "fov", t)
  };
}
function U1(e, t, r, n) {
  const i = ul.indexOf(r);
  if (i >= 0) {
    const o = Rt(e, "position", t);
    o[i] = n, cn(e, "position", t, o);
  } else r === "hFOV_deg" ? cn(e, "fov", t, n) : cn(e, "rotation", t, { [r]: n });
}
function Y1(e, t, r) {
  cn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function q1(e, t) {
  const r = fi(e, t);
  return {
    ...Object.fromEntries(ul.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function X1(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = ul.indexOf(r);
  if (o >= 0) {
    const a = Rt(e, "position", i);
    a[o] = n, cn(e, "position", i, a);
  } else r === "scale" ? cn(e, "scale", i, n) : r === "opacity" ? cn(e, "opacity", i, n / 100) : cn(e, "rotation", i, { [r]: n });
}
function J1(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && cn(e, i, n, r[i]);
}
function Z1(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function Q1(e, t, r) {
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
function rs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Gh(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function $u(e, t, r, n) {
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
function ev(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Vt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Pc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Wh(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Kh(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Bh(e) {
  e.default_camera && JSON.stringify(dr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Vu()) && delete e.default_camera;
}
function Uh(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = dr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Vu()) && (r.camera = null), Mc(r);
}
function Yh(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = dr(r);
    if (Mc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Mc(ra(i, o)) === t;
  } catch {
    return !1;
  }
}
const Kl = 0.15, tv = 0.01, nv = 1e-3, rv = 0.05, iv = 4, af = 250, ov = 16, Jn = 1, av = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Tn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function fr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function fl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function ro(e, t, r = 0) {
  const n = Mn(e, t, r), i = fr(n, 2);
  return { right: fr(n, 0), up: fr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function sv(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Nc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function lv(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Nc(e, "3dof", r);
}
function cv(e) {
  return ro(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function uv(e) {
  return Tn(e.position, ro(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Wr(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Go(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function zu(e, t) {
  return Go(Wr(t, e.position), ro(e.yaw_deg, e.pitch_deg).forward);
}
function ju(e) {
  return Math.max(e, 1e-6) * rv;
}
function Cc(e, t, r = null, n = Jn) {
  if (t) return t;
  const i = ju(n);
  if (r && zu(e, r) > 0) {
    const o = Wr(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Tn(e.position, o, i / a);
  }
  return Tn(e.position, ro(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function qh(e, t = Jn) {
  return Math.max(e.distance, ju(t));
}
function Xh(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > iv ? !1 : t.time - e.time < af || e.cost > ov && t.time - e.wheelTime < af;
}
function Hu(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * vt);
  return { tanX: n, tanY: n * r / t };
}
function Jh(e, t, r, n, i = uv(e)) {
  const o = e.roll_deg ?? 0, [a, s] = dv(t, r, o), l = Vt(e.yaw_deg + a / n * 360), d = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), u = Mn(e.yaw_deg, e.pitch_deg, o), c = Mn(l, d, o), f = Wr(e.position, i), p = [0, 1, 2].map((y) => Go(fr(u, y), f)), m = { ...e, yaw_deg: l, pitch_deg: d, position: Tn(i, fl(c, p)) };
  return { ...m, distance: zu(m, i) };
}
function dv(e, t, r) {
  const n = Math.cos(r * vt), i = Math.sin(r * vt);
  return [e * n + t * i, t * n - e * i];
}
function Zh(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = cv(e), l = 2 * o * Hu(e, n, i).tanY / i;
  return { ...e, position: Tn(Tn(e.position, a, -t * l), s, r * l), distance: o };
}
function Qh(e, t, r, n = Jn) {
  const i = Wr(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * tv, l = r > 0 ? Math.min(Math.max(o * Kl, s), o - a * nv) : -Math.max(o * Kl / (1 - Kl), s);
  if (r > 0 && l <= 0) return e;
  const d = { ...e, position: Tn(e.position, i, l / o) };
  return { ...d, distance: Math.max(zu(d, t), ju(n)) };
}
function em(e, t, r, n) {
  const { tanX: i, tanY: o } = Hu(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = ro(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Tn(t.center, l, -s), distance: s };
}
function Gu(e, t, r, n = null) {
  return tm({
    quaternion: gi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Hu(e, t, r).tanY) * qt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function tm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: Jn }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function ia(e, t, r, n) {
  const { right: i, up: o, forward: a } = nm(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const d = Math.tan(e.fovY_deg * 0.5 * vt), u = d * e.aspect, c = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + c / l / u), y: n * 0.5 * (1 - f / l / d), z: l };
}
function nm(e) {
  const t = Qo(e.quaternion), r = fr(t, 2);
  return { right: fr(t, 0), up: fr(t, 1), forward: r.map((n) => -n) };
}
function sf(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function fv({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function rm(e, t) {
  if (!e || !t.active) return null;
  const r = mv(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Ac(t),
    itemQuaternion: e.kind === "splat" ? av : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function pv(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = rm(e, o);
  return a && { ...a, id: i.id, opacity: o.opacity, value: o };
}
function hv(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function mv(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Ac(e) {
  return {
    position: [...e.position],
    quaternion: gi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Ic(e, t) {
  return Tn(e.position, fl(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Ec(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Oc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Fc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function gv(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Oc(t).map((o) => Ic(e.scene, o)));
  for (const o of r) i.push(...Wu(o));
  for (const { box: o, value: a } of n) i.push(...Oc(o).map((s) => Ic(a, s)));
  return i;
}
function yv(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: gi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Mn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Wu(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Tn(e.position, fl(e.rotation, [n, i, 0])));
}
function bv(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Fc(Wu(i)) : o != null && o.box ? Fc(Oc(Ec(o.kind, o.box)).map((a) => Ic(n, a))) : { center: [...n.position], radius: n.scale };
}
const vv = 2, _v = 0.5, Sv = 30;
function im(e, t) {
  const r = Wr(t, e), n = Math.atan2(r[0], -r[2]) * qt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * qt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function wv(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * _v : vv, o = t ? [...t] : Tn(e.position, ro(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...Wr(o, e.position)), s = a > 0 ? im(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(Sv * 0.5 * vt);
  return { position: o, rotation: s, scale: l };
}
function lf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function xv(e) {
  return [0, 1, 2].map((t) => fr(e, t));
}
function cf(e, t, r, n) {
  if (e === "translate") return { position: Tn(t.position, Wr(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * Cv(r.scale, n.scale) / r.scale };
  const i = lf(Qo(n.quaternion), xv(Qo(r.quaternion))), o = lf(i, Mn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = yh(o);
  return Math.abs(s) <= kv ? { rotation: { yaw_deg: a + 0, pitch_deg: s, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: s, roll_deg: Mv(o, t.yaw_deg) } };
}
const kv = 89.9;
function Mv(e, t) {
  const r = fr(e, 0), n = fr(e, 1), i = Math.cos(t * vt), o = Math.sin(t * vt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * qt + 0;
}
const Pv = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function Nv(e, t, r, n, i) {
  if (!ia(e, t, n, i)) return null;
  const { right: o, up: a, forward: s } = nm(e), l = Wr(t, e.position), d = Go(l, o), u = Go(l, a), c = Go(l, s), f = Math.tan(e.fovY_deg * 0.5 * vt), p = f * e.aspect, m = Math.hypot(d, u, c) * Pv[r] * Math.min(1.9 * f, 7) / 4;
  if (!(c > m)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const y = (D) => {
    const P = m * Math.sqrt(D * D + c * c - m * m);
    return [(D * c - P) / (c * c - m * m), (D * c + P) / (c * c - m * m)];
  }, [b, T] = y(d), [U, H] = y(u);
  return {
    minX: n * 0.5 * (1 + b / p),
    maxX: n * 0.5 * (1 + T / p),
    minY: i * 0.5 * (1 - H / f),
    maxY: i * 0.5 * (1 - U / f)
  };
}
function Cv(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, a) => Math.abs(a - e) > Math.abs(o - e) ? a : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function Av(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function om(e, t) {
  const r = Mn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * vt) * t, i = n / e.aspect, o = (d, u, c) => Tn(e.position, fl(r, [d, u, c])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((d) => [e.position, d]);
  a.forEach((d, u) => s.push([d, a[(u + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return s.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), s;
}
function Iv(e, t, r, n, i, o = 6) {
  return t.some(([a, s]) => {
    const l = ia(e, a, n, i), d = ia(e, s, n, i);
    if (!l || !d) return !1;
    const u = d.x - l.x, c = d.y - l.y, f = Ee(((r.x - l.x) * u + (r.y - l.y) * c) / Math.max(u * u + c * c, 1e-12), 0, 1);
    return Math.hypot(l.x + u * f - r.x, l.y + c * f - r.y) <= o;
  });
}
function Ev(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function Ov(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Rt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return Rt(n, "position", l);
  });
}
function Fv(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const am = 0.28;
function sm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * vt);
  return {
    quaternion: gi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * qt,
    aspect: n
  };
}
function Wo(e) {
  const t = Gr(e);
  return {
    quaternion: gi(Mn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function lm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Nu(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * qt,
      vFOV_deg: 2 * Math.atan(o / n) * qt
    }
  };
}
function cm(e, t, r) {
  const [[n, i, o], [a, s, l], [d, u, c]] = Qo(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * vt), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(m, y = 1e-4) {
      const b = Vb(m), T = n * b.x + a * b.y + d * b.z, U = i * b.x + s * b.y + u * b.z, H = -(o * b.x + l * b.y + c * b.z), D = Math.max(H, y);
      return {
        x: t * 0.5 * (1 + T / D / p),
        y: r * 0.5 * (1 - U / D / f),
        z: H
      };
    },
    // The unit direction seen at the point (x, y).
    ray(m, y) {
      const b = (m / t * 2 - 1) * p, T = (1 - y / r * 2) * f;
      return ku(ts({
        x: n * b + i * T - o,
        y: a * b + s * T - l,
        z: d * b + u * T - c
      }));
    }
  };
}
function Tv(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = sl(e, t) }) {
  const a = [];
  e.stickers.forEach((s, l) => {
    const d = o.stickers[l];
    if (s.placement !== "sky") return;
    const u = s.source.kind === "port" && !s.visible;
    if (!d.active && !u) return;
    const c = r(s);
    if (!c) return;
    const f = Math.tan(d.hFOV_deg * 0.5 * vt), p = Math.tan(d.vFOV_deg * 0.5 * vt), { crop: m } = s;
    a.push({
      kind: "sticker",
      id: s.id,
      media: c.media,
      revision: c.revision,
      source: c.source,
      opacity: u ? am : d.opacity,
      zIndex: n(s),
      quaternion: gi(Mn(d.yaw_deg, d.pitch_deg, d.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * m.x0 - 1) * f,
        x1: (2 * m.x1 - 1) * f,
        y0: (1 - 2 * m.y1) * p,
        y1: (1 - 2 * m.y0) * p
      }
    });
  });
  for (const s of i) a.push({ kind: "erp", ...s });
  return a.sort((s, l) => s.zIndex - l.zIndex);
}
function um(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !a.has(s.id) && a.set(s.id, s);
  return Tv(e, t, {
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
function Dv(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Lv(e, t, r, { media: n, evaluated: i = sl(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const s of r)
    typeof (s == null ? void 0 : s.id) == "string" && s.id && !o.has(s.id) && o.set(s.id, s);
  const a = [];
  return e.stickers.forEach((s, l) => {
    const d = i.stickers[l];
    if (s.placement !== "world" || !d.active) return;
    const u = o.get(s.id), c = u ? n(u) : null;
    if (!c) return;
    const { width: f, height: p } = Dv(c.media), m = yv(d, s.crop, f, p);
    m && a.push({
      id: s.id,
      media: c.media,
      revision: c.revision,
      source: c.source,
      opacity: d.opacity,
      position: m.position,
      quaternion: m.quaternion,
      rotation: m.rotation,
      width: m.width,
      height: m.height,
      crop: s.crop
    });
  }), a;
}
function Vv({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onRestored: i = () => {
}, load: o = () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((a) => a.$) }) {
  let a = null, s = null, l = !1, d = 0;
  const u = () => {
    s = sh(a.createThreeView({ onUpdate: n, createCanvas: () => e }), "editor");
  }, c = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(m) {
      return s && !c.lost ? s.render(m) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(m) {
      return s && !c.lost ? s.renderUnwrap(m) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(m, y) {
      return s && !c.lost ? s.resize(m, y) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(m, y) {
      s && !c.lost && s.clear(m, y);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(m) {
      return s ? s.sceneBox(m) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(m, y, b, T, U) {
      return s && !c.lost ? s.pick(m, y, b, T, U) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, y, b, T, U) {
      return s && !c.lost ? s.pickSurface(m, y, b, T, U) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, y, b, T, U) {
      return s && !c.lost ? s.pickSticker(m, y, b, T, U) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, y, b, T, U, H) {
      return s && !c.lost ? s.gizmoPointer(m, y, b, T, U, H) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (s ? s.contentRevision() : 0);
    },
    dispose() {
      l = !0, e.removeEventListener("webglcontextlost", f), e.removeEventListener("webglcontextrestored", p), s == null || s.dispose(), s = null;
    }
  };
  function f(m) {
    m.preventDefault(), !(l || c.lost) && (c.lost = !0, c.ready = !1, s == null || s.dispose({ lost: !0 }));
  }
  function p() {
    l || !c.lost || queueMicrotask(() => {
      l || !c.lost || (s && (d += s.contentRevision() + 1), s == null || s.dispose(), s = null, c.lost = !1, a && (u(), c.ready = !0, i()));
    });
  }
  return e.addEventListener("webglcontextlost", f), e.addEventListener("webglcontextrestored", p), o().then((m) => {
    l || (a = m, !c.lost && (u(), c.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), c.failed = !0, r();
  }), c;
}
const dm = "3D view unavailable. Check the browser console.";
function Os(e, t, r) {
  return sm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function Rv(e) {
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
    let d = !1;
    return i.add(l), {
      get failed() {
        return n;
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
        d || (d = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const fm = Rv(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => sh(e.createThreeView({ createCanvas: () => dn({ label: "three.node" }) }), "node"))
), Kr = ["erp_image", "bg_erp", "bg_media"], is = ["source"], Ku = ["sticker_image", "sticker"], pm = ["scene"], $v = {
  background: [...Kr, ...is],
  "external-sticker": [...Ku, ...is],
  scene: [...pm, ...is]
};
function hm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Bu(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = hm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function zv(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function mm(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const a = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((s) => String(s == null ? void 0 : s.id) === r[o]);
    if (!a || o === r.length - 1) return { graph: n, entry: a };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((s) => (s == null ? void 0 : s.id) === a.type);
  }
}
function jv(e, t) {
  const { graph: r, entry: n } = mm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = hm(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const gm = [...Kr, ...Ku, ...pm, ...is], Hv = 256, Ii = /* @__PURE__ */ new Map(), Bl = /* @__PURE__ */ new WeakMap();
let ym = () => null;
function bm(e) {
  return Bl.has(e) || Bl.set(e, JSON.stringify(e)), Bl.get(e);
}
function Gv(e) {
  ym = e;
}
function Fs(e, t) {
  const r = bm(e);
  Ii.delete(r), Ii.set(r, t), Ii.size > Hv && Ii.delete(Ii.keys().next().value);
}
function tn(e, t) {
  var o;
  const r = e ? ym(e) : null;
  if (!r) return !0;
  const n = Bu(e);
  let i = Ii.get(bm(r));
  if (i)
    Fs(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => gm.includes(a == null ? void 0 : a.name)))) return !0;
    Fs(r, n), i = n;
  }
  return $v[t].every((a) => i[a] === n[a]);
}
const Ts = /* @__PURE__ */ new WeakSet();
async function Tc(e, t) {
  if (Ts.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Ts.add(e), r.ok && n !== void 0 ? n : null;
}
function vm(e, t) {
  var o, a, s, l, d;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = mm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((d = n == null ? void 0 : n.inputs) != null && d.some((u) => gm.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: jv(r, t) };
}
const os = /* @__PURE__ */ new Map();
function Wv(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && os.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Tc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = vm(i, o);
        a && Fs(a.output, a.inputs);
      }
    });
}
const Kv = 5;
function Bv(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Kv}`, n = Tc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Tc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var d, u, c, f;
      const l = String(a.id);
      for (const { id: p } of await n) {
        if (!s()) return null;
        const m = await o(p);
        if ((d = m == null ? void 0 : m.outputs) != null && d[l])
          return ((f = (c = (u = m.workflow) == null ? void 0 : u.prompt) == null ? void 0 : c[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : vm(m, l);
      }
      return null;
    }
  };
}
function Uv(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, a;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((a = i.changeTracker) == null ? void 0 : a.nodeOutputs);
  });
}
let ki = null;
async function Yv(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Ts.has(r) || (s = os.get(i)) != null && s.has(n) || Uv(t)) return null;
  (ki == null ? void 0 : ki.workflowId) !== i && (ki = { workflowId: i, history: Bv(r, i) }, queueMicrotask(() => {
    ki = null;
  }));
  const a = await ki.history.lastNodeOutput(e, o);
  return o() ? a ? (Fs(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Ts.has(r) || os.set(i, (os.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function uf(e, t, r, n = Kr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const df = /\.(mp4|webm|mov|m4v|mkv)$/i;
function as(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return df.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return df.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ul = /* @__PURE__ */ new WeakMap();
function qv(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Dc(e) {
  return qv(e) ? (Ul.has(e) || Ul.set(e, Math.random().toString(36).slice(2, 10)), Ul.get(e)) : "run";
}
function _m(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function Xv(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, a) => {
    for (const s of a) {
      const l = r(o, s);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((d, u) => u)));
    }
  };
  return i(e, t), n;
}
function Uu(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const a = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const s of a)
      if (Array.isArray(s))
        for (const l of s) {
          const d = n(l);
          if (d && (/\.mp4(\?|$)/i.test(d) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return d;
        }
  }
  return "";
}
function Jv({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = ol(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, a = 0;
  const s = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !s || a || n.paused || n.ended || (a = n.requestVideoFrameCallback(() => {
      a = 0, !o && (i(), l());
    }));
  }, d = () => {
    o || i();
  }, u = () => i(), c = () => {
    i(), l();
  }, f = () => i();
  let p = !1;
  const m = () => {
    p = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", d, { once: !0 }), n.addEventListener("loadeddata", d, { once: !0 }), s || n.addEventListener("timeupdate", u), n.addEventListener("play", c), n.addEventListener("pause", f), n.addEventListener("error", m), n.src = t, n.load();
  const y = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, b = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var U, H;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", d), n.removeEventListener("loadeddata", d), n.removeEventListener("timeupdate", u), n.removeEventListener("play", c), n.removeEventListener("pause", f), n.removeEventListener("error", m), n.pause(), (U = n.removeAttribute) == null || U.call(n, "src"), (H = n.load) == null || H.call(n));
    },
    failed: () => p,
    play: y,
    pause: b,
    toggle() {
      n.paused ? y() : b();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function Xr(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function Zv(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function ff(e, t, r = null) {
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
  return !n && r != null && (n = Zv(e == null ? void 0 : e.graph, r)), n;
}
function Qv(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function e_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function t_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Sm({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (P) => {
    if (!P) return "";
    if (typeof P == "string") return String(P || "").trim();
    if (Array.isArray(P)) {
      if (P.length === 0) return "";
      if (P.length === 1) return i(P[0]);
      const W = String(P[0] || "").trim();
      if (W)
        return Xr(t, {
          filename: W,
          subfolder: String(P[1] || "").trim(),
          type: String(P[2] || "output").trim() || "output"
        });
      for (const $ of P) {
        const te = i($);
        if (te) return te;
      }
      return "";
    }
    return typeof (P == null ? void 0 : P.src) == "string" && P.src ? P.src : typeof (P == null ? void 0 : P.url) == "string" && P.url ? P.url : Xr(t, P);
  }, o = (P) => {
    if (!P || typeof P != "object") return "";
    const W = String(P.type || "").trim().toLowerCase();
    if (W === "dataurl") return String(P.value || "");
    if (W !== "comfy_image") return "";
    const $ = String(P.filename || "").trim();
    return $ ? Xr(t, {
      filename: $,
      subfolder: String(P.subfolder || ""),
      type: String(P.storage || "input")
    }) : "";
  }, a = (P) => {
    const W = e == null ? void 0 : e.nodeOutputs;
    if (!W || P == null) return null;
    const $ = String(P);
    return W instanceof Map ? W.get(P) || W.get($) || W.get(Number($)) || null : W[P] || W[$] || null;
  }, s = (P, W) => {
    var te;
    const $ = a(P == null ? void 0 : P.id);
    return Array.isArray((te = $ == null ? void 0 : $.ui) == null ? void 0 : te[W]) ? $.ui[W] : Array.isArray($ == null ? void 0 : $[W]) ? $[W] : [];
  }, l = (P, W) => {
    const $ = a(P == null ? void 0 : P.id);
    return $ != null && $.ui && Object.prototype.hasOwnProperty.call($.ui, W) ? $.ui[W] : $ && Object.prototype.hasOwnProperty.call($, W) ? $[W] : null;
  }, d = (P, W) => {
    const $ = l(P, "pano_sticker_input_state_hash"), te = Array.isArray($) ? $[0] : $;
    return String(te ?? "").trim() || t_(W);
  }, u = (P) => {
    const W = [], $ = /* @__PURE__ */ new Set();
    for (const te of P || []) {
      const re = i(te);
      !re || $.has(re) || ($.add(re), W.push(re));
    }
    return W;
  }, c = (P, W) => {
    var re;
    const $ = [];
    Array.isArray(P == null ? void 0 : P.images) && P.images.length && $.push(P.images), Array.isArray((re = P == null ? void 0 : P.ui) == null ? void 0 : re.images) && P.ui.images.length && $.push(P.ui.images);
    const te = [];
    for (const ce of $)
      W >= 0 && W < ce.length && te.push(ce[W]), te.push(...ce);
    return te;
  }, f = (P, W) => {
    var K;
    const $ = String(W || "").trim();
    if (!$) return { src: "", sourceType: "", inputName: "" };
    const re = (Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : []).findIndex((de) => String((de == null ? void 0 : de.name) || "") === $);
    if (re < 0) return { src: "", sourceType: "", inputName: $ };
    const ce = P.graph ? P.getInputLink(re) : null;
    if ((ce == null ? void 0 : ce.origin_id) == null) return { src: "", sourceType: "", inputName: $ };
    const E = ce.origin_id, G = ff(P, re, E);
    if (!G) return { src: "", sourceType: "", inputName: $ };
    const ie = Number(ce.origin_slot ?? 0);
    let pe = [];
    try {
      pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(G) || [] : [];
    } catch {
      pe = [];
    }
    if (Array.isArray(pe) && pe.length) {
      const de = [];
      ie >= 0 && ie < pe.length && de.push(pe[ie]), de.push(...pe);
      const q = u(de.filter((ue) => !as(ue)));
      if (q.length)
        return { src: q[0], srcCandidates: q, sourceType: "appNodeImageUrls", inputName: $ };
    }
    const me = a((G == null ? void 0 : G.id) ?? E), ge = u(c(me, ie).filter((de) => !as(de))).map((de) => `${de}&pano_src=${Dc(me)}`);
    if (ge.length)
      return { src: ge[0], srcCandidates: ge, sourceType: "nodeOutputs", inputName: $ };
    const ee = Array.isArray(G == null ? void 0 : G.imgs) ? G.imgs : [];
    if (ee.length) {
      const de = [];
      ie >= 0 && ie < ee.length && de.push(ee[ie]), de.push(...ee);
      const q = u(de);
      if (q.length)
        return { src: q[0], srcCandidates: q, sourceType: "nodeImgs", inputName: $ };
    }
    const S = (K = G == null ? void 0 : G.widgets) == null ? void 0 : K.find((de) => String((de == null ? void 0 : de.name) || "").toLowerCase() === "image");
    if (S) {
      let de = i(S.value);
      if (de && !de.includes("/") && !de.includes(":") && (G.comfyClass === "LoadImage" || G.type === "LoadImage") && (de = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`), de) return { src: de, sourceType: "widget", inputName: $ };
    }
    return { src: "", sourceType: "", inputName: $ };
  }, p = (P, W = []) => {
    var te;
    const $ = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : [];
    for (const re of W) {
      const ce = $.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === re), E = ce >= 0 && P.graph ? P.getInputLink(ce) : null;
      if ((E == null ? void 0 : E.origin_id) == null) continue;
      const G = a(((te = ff(P, ce, E.origin_id)) == null ? void 0 : te.id) ?? E.origin_id), ie = (Array.isArray(G == null ? void 0 : G.images) ? G.images : []).find(as);
      return ie ? `${Xr(t, ie)}&pano_src=${Dc(G)}` : "";
    }
    return "";
  }, m = (P, W = []) => {
    const $ = Array.isArray(W) ? W : [W];
    for (const te of $) {
      const re = f(P, te);
      if (String((re == null ? void 0 : re.src) || "").trim()) return re;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, y = (P) => {
    const W = String(P || "").trim();
    if (!W) return [];
    if (Qv(W)) return [W];
    const { filename: $, subfolder: te } = e_(W);
    return $ ? u([
      Xr(t, { filename: $, subfolder: te, type: "temp" }),
      Xr(t, { filename: $, subfolder: te, type: "output" }),
      Xr(t, { filename: $, subfolder: te, type: "input" }),
      W
    ]) : [W];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (P) => {
      var W, $;
      try {
        ($ = (W = P == null ? void 0 : P.__panoLinkedInputImageCache) == null ? void 0 : W.forEach) == null || $.call(W, (te, re, ce) => {
          var E;
          te != null && te.img && ((E = n == null ? void 0 : n.isImageLoadFailed) != null && E.call(n, te.img)) && ce.delete(re);
        });
      } catch {
      }
    },
    externalStateHash: d,
    invalidateUiImage: (P, W) => {
      var $;
      ($ = P == null ? void 0 : P.delete) == null || $.call(P, `__ui__${String(W || "")}`);
    },
    linkedValue: (P, W) => {
      var E, G, ie, pe;
      const $ = String(W || ""), te = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs.findIndex((me) => String((me == null ? void 0 : me.name) || "") === $) : -1, re = te >= 0 && P.graph ? P.getInputLink(te) : null;
      if (re) {
        const me = a(re.origin_id), ge = [
          me == null ? void 0 : me.output,
          me == null ? void 0 : me.result,
          (E = me == null ? void 0 : me.data) == null ? void 0 : E.output,
          (G = me == null ? void 0 : me.data) == null ? void 0 : G.result,
          (ie = me == null ? void 0 : me.ui) == null ? void 0 : ie.output,
          (pe = me == null ? void 0 : me.ui) == null ? void 0 : pe.result
        ];
        for (const ee of ge) {
          if (!Array.isArray(ee)) continue;
          const S = ee[Number(re.origin_slot || 0)];
          if (typeof S == "string" && S.trim()) return S;
        }
      }
      const ce = Array.isArray(P == null ? void 0 : P.widgets) ? P.widgets.find((me) => String((me == null ? void 0 : me.name) || "") === $) : null;
      return String((ce == null ? void 0 : ce.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (P, W = [], $ = null, te = "") => {
      var Pe;
      const re = Array.isArray(W) ? W : [W], ce = m(P, re), G = (Array.isArray(ce == null ? void 0 : ce.srcCandidates) && ce.srcCandidates.length ? ce.srcCandidates : [ce == null ? void 0 : ce.src]).map((ne) => String(ne || "").trim()).filter(Boolean);
      if (!G.length) return null;
      const ie = u(G.flatMap((ne) => y(ne)));
      if (!ie.length) return null;
      P.__panoLinkedInputImageCache || (P.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const pe = String(te || re.join("|") || "image_exact"), me = G.join(`
`), ge = P.__panoLinkedInputImageCache.get(pe);
      if (ge && ge.srcRaw === me && ge.img) return ge.img;
      const ee = r || globalThis.Image;
      if (typeof ee != "function") return null;
      const S = new ee();
      (Pe = n == null ? void 0 : n.markImageLoading) == null || Pe.call(n, S, me);
      const K = { srcRaw: me, resolvedSrc: "", img: S };
      P.__panoLinkedInputImageCache.set(pe, K);
      let de = -1;
      const q = (ne) => {
        var O, Z, ae;
        ne === "ready" ? (O = n == null ? void 0 : n.markImageReady) == null || O.call(n, S, me) : (Z = n == null ? void 0 : n.markImageFailed) == null || Z.call(n, S, me), $ == null || $(S), (ae = P.setDirtyCanvas) == null || ae.call(P, !0, !0);
      }, ue = () => {
        if (de += 1, de >= ie.length) {
          q("failed");
          return;
        }
        K.resolvedSrc = ie[de], S.src = K.resolvedSrc;
      };
      return S.onload = () => q("ready"), S.onerror = () => {
        if (de + 1 < ie.length) {
          ue();
          return;
        }
        q("failed");
      }, ue(), S;
    },
    output: a,
    resolvePreferredExactLinkedSource: m,
    source: i,
    uiImage: (P, W, $, te = null) => {
      var me, ge, ee;
      const re = s(P, W)[0] || null, ce = i(re);
      if (!ce) return null;
      const E = `__ui__${W}`, G = (me = $ == null ? void 0 : $.get) == null ? void 0 : me.call($, E);
      if (G && G.__panoSrc === ce) return G;
      const ie = r || globalThis.Image;
      if (typeof ie != "function") return null;
      const pe = new ie();
      return pe.__panoSrc = ce, (ge = n == null ? void 0 : n.markImageLoading) == null || ge.call(n, pe, ce), pe.onload = () => {
        var S;
        (S = n == null ? void 0 : n.markImageReady) == null || S.call(n, pe, ce), te == null || te(pe);
      }, pe.onerror = () => {
        var S;
        (S = n == null ? void 0 : n.markImageFailed) == null || S.call(n, pe, ce), te == null || te(pe);
      }, pe.src = ce, (ee = $ == null ? void 0 : $.set) == null || ee.call($, E, pe), pe;
    },
    uiList: s,
    uiValue: l
  };
}
const n_ = 1e-3;
function wm(e, t, r, n) {
  if (!eo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(n_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function xm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function r_(e, t) {
  return Math.floor(e * t.fps);
}
function km(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const pf = 4;
function Mm({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(a) {
    return n.has(a) || n.set(a, e(r[a], t)), n.get(a);
  }
  return {
    picture(a, s, l, d) {
      if ((a.length !== r.length || a.some((f, p) => f !== r[p])) && (r = a, n.clear(), i = null), s === null) return null;
      const u = r_(s, l);
      for (let f = u; f < Math.min(r.length, u + pf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < u || f > u + pf) && f !== i && n.delete(f);
      const c = n.get(u);
      return c != null && c.complete && c.naturalWidth > 0 && (i !== null && i !== u && n.delete(i), i = u), i === null ? d : n.get(i);
    }
  };
}
function Pm({
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
  const d = () => a || e(), u = () => o(r(d()));
  return {
    model: () => r(d()),
    refresh() {
      return l ? this.model() : (u(), this.model());
    },
    beginGesture() {
      return l || a ? !1 : (a = e(), s = !1, u(), !0);
    },
    updateGesture(c) {
      if (l) return !1;
      a || this.beginGesture();
      const f = t(a, c);
      return f.changed ? (a = f.state, s = !0, n(a), u(), !0) : !1;
    },
    hasGestureChanges() {
      return a != null && s;
    },
    commitGesture() {
      if (l || !a) return !1;
      const c = s;
      return c && i(a), a = null, s = !1, n(null), u(), c;
    },
    cancelGesture() {
      return l || !a ? !1 : (a = null, s = !1, n(null), u(), !0);
    },
    apply(c) {
      if (l) return !1;
      a && this.commitGesture();
      const f = t(e(), c);
      return f.changed ? (i(f.state), u(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const c = a != null;
      a = null, s = !1, c && n(null);
    }
  };
}
const ss = "sticker_image_1", Nm = "external_image", qi = 0;
function zi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Yl(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function jr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Lc(e, t = qi) {
  return (e == null ? void 0 : e.version) !== 2 ? jr(e) : jr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: fi(r, t).active,
    external: r.source.kind === "port",
    ...Ru(r, t)
  }));
}
function Yu(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && jr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Cm(e) {
  return String((e == null ? void 0 : e.id) || "") === ss || String((e == null ? void 0 : e.source_kind) || "") === Nm;
}
function qu(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Cm(t);
}
const Am = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Im(e) {
  return !Cm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Am.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Em(e) {
  const t = Im(e);
  return t ? Am.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Om(e, t = {}) {
  var D, P, W;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === ss);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const $ = String(((D = e.active) == null ? void 0 : D.selected_sticker_id) || "") === ss;
    return {
      state: {
        ...e,
        stickers: r.filter((te, re) => re !== n),
        active: $ ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), d = Number(t.imageHeight || 0), u = l > 0 && d > 0, c = Math.max(1, l), f = Math.max(1, d), p = t.pose && typeof t.pose == "object" ? t.pose : {}, m = s ? p.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || p.hFOV_deg || 30, y = Math.min(179, Math.max(0.1, Number(m)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const $ = zi(y, c, f), te = Number(((P = a == null ? void 0 : a.initial_pose) == null ? void 0 : P.hFOV_deg) ?? y), re = zi(te, c, f), ce = Number(((W = a == null ? void 0 : a.initial_pose) == null ? void 0 : W.vFOV_deg) ?? re);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - $) <= 1e-6 && Math.abs(ce - re) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((E, G) => G === n ? {
          ...E,
          vFOV_deg: $,
          initial_pose: E.initial_pose && typeof E.initial_pose == "object" ? { ...E.initial_pose, vFOV_deg: re } : E.initial_pose
        } : E)
      },
      changed: !0
    };
  }
  const b = r.reduce(($, te) => Math.max($, Number((te == null ? void 0 : te.z_index) || 0)), -1), T = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: y,
    vFOV_deg: u ? zi(y, c, f) : Number(p.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || y),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, U = {
    ...a || {},
    id: ss,
    source_kind: Nm,
    source_link_id: i,
    source_state_hash: o,
    ...T,
    initial_pose: { ...T },
    visible: !0,
    z_index: b + 1
  }, H = n >= 0 ? r.map(($, te) => te === n ? U : $) : [...r, U];
  return { state: { ...e, stickers: H }, changed: !0 };
}
function hf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const i_ = ["IMAGE", "VIDEO"];
function mf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => i_.includes(r)) ? "2d" : null;
}
function o_(e, t) {
  var i, o, a, s, l, d;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? mf(n.type) ?? mf((d = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : d.type) : null;
}
function Fm(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: hf(e, "sticker"),
    awaitingPose: !t && (hf(e, "sticker_state") || o_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function gf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return dr({ version: 2, stickers: [r] }).stickers[0];
}
function Tm(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var y;
  const a = e.stickers.findIndex((b) => qu(e, b)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const b = ((y = e.active) == null ? void 0 : y.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((T, U) => U !== a),
        active: b ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const b = { ...gf(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((T, U) => U === a ? b : T) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const b = [s.size.value, ...s.size.keyframes.map((H) => H.value)], T = b.map((H) => zi(H.hFOV_deg, i, o));
    if (b.every((H, D) => Math.abs(H.vFOV_deg - T[D]) <= 1e-6)) return { state: e, changed: !1 };
    const U = {
      value: { ...s.size.value, vFOV_deg: T[0] },
      keyframes: s.size.keyframes.map((H, D) => ({ ...H, value: { ...H.value, vFOV_deg: T[D + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((H, D) => D === a ? { ...H, size: U } : H) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const d = new Set(e.stickers.map((b) => b.id));
  let u = 1;
  for (; d.has(`sticker_${u}`); ) u += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, gf(`sticker_${u}`, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (b) => l ? zi(b, i, o) : b, p = $u(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: f(c)
  }, jr(e).reduce((b, T) => Math.max(b, T.z_index), -1) + 1), m = (n == null ? void 0 : n.keyframes) ?? {};
  return p.direction.keyframes = m.direction ?? [], p.roll.keyframes = m.roll ?? [], p.size.keyframes = (m.size ?? []).map((b) => ({ ...b, value: { ...b.value, vFOV_deg: f(b.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, p] }, changed: !0 };
}
function Xu(e) {
  const t = jr(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Yl(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Yl(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Yl(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, a) => o.z_index - a.z_index);
}
function Dm(e) {
  const t = Yu(e), r = qu(e, t), n = jr(e).some((s) => s && s.visible !== !1), i = Xu(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Em(t),
    selectedId: t ? String(t.id || "") : null,
    locked: a,
    canDelete: !!t && !a,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function a_(e) {
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
function yf(e, t) {
  const r = Yu(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = a_(e), i = String(r.id || ""), o = Xu(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (a < 0) return { state: e, changed: !1 };
  if (t === "front" && a === o.length - 1 || t === "back" && a === 0)
    return { state: e, changed: !1 };
  const [s] = o.splice(a, 1);
  return t === "front" ? o.push(s) : o.unshift(s), o.forEach((l, d) => {
    l.item.z_index = d;
  }), { state: n, changed: !0 };
}
function s_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function l_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Om(e, t.value);
  if (t.type === "sync-port") return Tm(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Xu(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), d = 30, u = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: d,
      vFOV_deg: zi(d, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, $u(o, rs(i.asset), u, l + 1)],
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
    return !i || !jr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Yu(e);
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
    const i = Im(r);
    return !i || !Em(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return yf(e, "front");
  if (t.type === "send-back") return yf(e, "back");
  if (t.type === "delete-selected") {
    if (qu(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = jr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = s_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Ru(r, qi) : r, s = {};
    if (o.forEach((l) => {
      const d = Number(i[l]);
      Number.isFinite(d) && Math.abs(d - Number(a[l] || 0)) > 1e-12 && (s[l] = d);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = H1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const d = structuredClone(r);
      return jh(d, qi, l), { state: { ...e, stickers: e.stickers.map((u) => u === r ? d : u) }, changed: !0 };
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
function c_(e = {}) {
  return Pm({
    ...e,
    reduce: l_,
    projectModel: Dm
  });
}
const Vc = 2;
function ei(e, t) {
  return Math.floor(e * t + 0.5);
}
function u_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Lm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, d = !1, u = !1, c = { name: "idle" }, f = [];
  const p = () => d && !u, m = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function y() {
    for (const K of f) K();
    f = [];
  }
  function b(K, de = {}) {
    return y(), c = { name: K, ...de }, s(), c;
  }
  function T(K, de, q) {
    const ue = () => {
      c === K && q();
    };
    e.addEventListener(de, ue), f.push(() => e.removeEventListener(de, ue));
  }
  function U(K, de) {
    let q = t.requestFrame(function ue(Pe) {
      c === K && (de(Pe), c === K && (q = t.requestFrame(ue)));
    });
    f.push(() => t.cancelFrame(q));
  }
  function H(K) {
    l = K, o(l);
  }
  function D() {
    return b(u ? "error" : "idle");
  }
  function P() {
    u = !0, D();
  }
  function W() {
    const { seekable: K } = e, de = K != null && K.length ? K.end(K.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(de) ? de : 1 / 0));
  }
  function $(K) {
    if (!p()) return K === "play" ? G() : D();
    if (e.readyState < Vc) {
      const de = b("loading", { then: K });
      return T(de, "loadeddata", () => $(de.then)), T(de, "error", P), de;
    }
    return K === "play" && l / r() >= Number(e.duration) ? G() : te(K, !1);
  }
  function te(K, de) {
    const q = W();
    if (!e.ended && ei(Number(e.currentTime), r()) === ei(q, r())) return re(K);
    const ue = b("seeking", { then: K, frame: l, retried: de });
    return T(ue, "seeked", () => {
      const Pe = ei(Number(e.currentTime), r()) === ei(W(), r()), ne = l === ue.frame;
      Pe || ne && ue.retried ? re(ue.then) : te(ue.then, ne);
    }), T(ue, "error", P), e.currentTime = q, ue;
  }
  function re(K) {
    return K === "play" ? ce() : (a(), D());
  }
  function ce() {
    const K = b("playingVideo", { shown: !1 });
    if (T(K, "pause", () => e.ended ? E() : me()), T(K, "ended", E), T(K, "error", P), i() && ei(Number(e.duration), r()) >= n()) {
      const q = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = q;
      });
    }
    const de = (q, ue) => {
      ue && !K.shown && (K.shown = !0, s()), ie(ei(q, r()));
    };
    if (m()) {
      let q = e.requestVideoFrameCallback(function ue(Pe, ne) {
        c === K && (de(Number(ne.mediaTime), !0), c === K && (q = e.requestVideoFrameCallback(ue)));
      });
      f.push(() => {
        var ue;
        return (ue = e.cancelVideoFrameCallback) == null ? void 0 : ue.call(e, q);
      });
    } else
      U(K, () => de(Number(e.currentTime), e.readyState >= Vc));
    return Promise.resolve(e.play()).catch(() => {
      c === K && me();
    }), K;
  }
  function E() {
    a(), G();
  }
  function G() {
    const K = b("playingClock", { startTs: t.now(), startFrame: l });
    return U(K, (de) => ie(K.startFrame + Math.floor((de - K.startTs) / 1e3 * r()))), K;
  }
  function ie(K) {
    if (K < n()) {
      H(K);
      return;
    }
    if (!i()) {
      pe(n() - 1);
      return;
    }
    c.name === "playingVideo" && (y(), e.pause()), H(0), $("play");
  }
  function pe(K) {
    c.name === "playingVideo" ? (y(), e.pause(), H(Math.max(0, K)), a()) : H(Math.max(0, K)), $("still");
  }
  function me() {
    if (c.name === "loading" || c.name === "seeking")
      c.then = "still", s();
    else if (c.name === "playingVideo") {
      y(), e.pause();
      const K = u_(Number(e.currentTime), r());
      H(Math.min(K, n() - 1)), a(), l === K ? D() : $("still");
    } else c.name === "playingClock" && pe(Math.min(l, n() - 1));
  }
  function ge() {
    if (!S()) {
      if (l >= n() - 1 && H(0), c.name === "loading" || c.name === "seeking") {
        c.then = "play", s();
        return;
      }
      $("play");
    }
  }
  function ee(K) {
    const de = Math.max(0, Math.round(K));
    if (c.name === "loading" || c.name === "seeking") {
      c.then = "still", H(de), s();
      return;
    }
    c.name === "playingVideo" && (y(), e.pause()), H(de), $("still");
  }
  function S() {
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
      return S();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return c.name === "playingVideo" || c.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return c.name === "playingVideo" && c.shown;
    },
    play: ge,
    stop: me,
    seek: ee,
    toggle() {
      S() ? me() : ge();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(K) {
      y(), d = !!K, u = !1, $("still");
    },
    dispose() {
      y(), d = !1, c = { name: "idle" };
    }
  };
}
function Vm({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function d(y) {
    s = y, t();
  }
  function u(y) {
    a = y, e.currentTime = y;
  }
  function c() {
    const y = l;
    f(), l !== y && r();
  }
  function f() {
    if (!n || i || e.readyState < Vc) return;
    const { time: y, playing: b, fps: T } = o;
    if (y === null) {
      e.pause(), l = !1;
      return;
    }
    if (b) {
      if (a !== null) return;
      const U = Number(e.duration), H = Number.isFinite(U) ? Math.min(y, U) : y, D = Math.abs(Number(e.currentTime) - H) > 1.5 / T;
      if (e.ended && !D) return;
      D && u(H), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, d(NaN)), !(a !== null || s === y) && (Number(e.currentTime) === y ? d(y) : u(y));
  }
  const p = {
    loadeddata: c,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: c,
    seeked: () => {
      const y = a;
      a = null, !o.playing && y === o.time ? d(y) : c();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [y, b] of Object.entries(p)) e.addEventListener(y, b);
  function m(y) {
    n = y, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: y = "", time: b = null, playing: T = !1, fps: U }) {
      y !== n && (m(y), r()), o = { time: b, playing: T, fps: U }, c();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(y, b) {
      return !n || i ? b : o.time === null ? null : o.playing && l ? e : s === null ? b : y;
    },
    dispose() {
      for (const [y, b] of Object.entries(p)) e.removeEventListener(y, b);
      m("");
    }
  };
}
function Rc(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function d_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: d = !1 }) {
  let u = "", c = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let m = null, y = null;
  const b = () => i().timeline.fps, T = (E) => E.stickers.find((G) => G.source.kind === "port"), U = () => {
    const E = i(), G = T(E);
    return Vh(E, {
      minimum: Math.round(b() * 5),
      frames: Math.max(
        u ? Math.round(f * b()) : 0,
        m && G ? xm(G.clip, b(), m.meta) : 0
      ),
      camera: d
    });
  }, H = Lm({
    video: e,
    clock: n,
    fps: b,
    span: U,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), D = () => {
    c === u && Number.isFinite(e.duration) && (f = e.duration);
  }, P = () => {
    c && (p.add(c), l());
  }, W = Vm({ video: t, onCapture: s, onChange: l }), $ = Mm({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", D), e.addEventListener("error", P);
  function te(E) {
    E !== c && (c = E, e.pause(), E ? e.src = E : e.removeAttribute("src"), e.load(), H.setSource(!!E));
  }
  function re() {
    H.playing && H.stop();
  }
  function ce(E) {
    const G = T(E);
    y = m && G ? wm(G.clip, H.frame, E.timeline.fps, m.meta) : null, W.follow({
      src: (m == null ? void 0 : m.src) || "",
      time: y,
      playing: H.advancing,
      fps: E.timeline.fps
    });
  }
  return {
    get frame() {
      return H.frame;
    },
    get playing() {
      return H.playing;
    },
    get showsVideo() {
      return H.showsVideo;
    },
    get source() {
      return c;
    },
    pause: re,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return m;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(E, G) {
      return m != null && m.frames ? $.picture(m.frames, y, m.meta, G) : W.picture(E, G);
    },
    toggle() {
      H.playing ? H.stop() : H.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: E, sources: G, state: ie, sticker: pe = null }) {
      if (m = E ? pe : null, !E)
        return re(), te(""), ce(ie), !1;
      for (const K of p)
        G.includes(K) || p.delete(K);
      const me = G.find((K) => K && !p.has(K)) || "", ge = me !== u;
      ge && (u = me, f = 0), te(u);
      const ee = Lh(ie, { camera: d }) || !!u && H.state !== "error" || !!m;
      return ee || re(), (ge || !ee || !H.playing && H.frame >= U()) && H.frame !== qi && H.seek(qi), ce(ie), ee;
    },
    dispose() {
      H.dispose(), W.dispose(), e.removeEventListener("loadedmetadata", D), e.removeEventListener("error", P), e.pause(), e.removeAttribute("src"), e.load(), c = "";
    }
  };
}
const Ds = Math.PI / 180, cr = 180 / Math.PI, f_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), p_ = 260;
function bf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Rm(e, t) {
  return t ? Rm(t, e % t) : e;
}
function h_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Rm(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function oa(e, t) {
  const r = bf(e), n = bf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: h_(r, n) };
}
function ci(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function $m(e) {
  const t = ci(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Pr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Ju(e, t, r = f_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), d = (b, T, U) => {
    const H = b + T, D = Math.max(0, U - 1), P = H > D && H > 0 ? D / H : 1;
    return [b * P, T * P];
  }, [u, c] = d(l, a, n), [f, p] = d(o, s, i), m = {
    x: u,
    y: f,
    w: Math.max(1, n - u - c),
    h: Math.max(1, i - f - p)
  }, y = Mu(m, t);
  return {
    x: m.x + (m.w - y.width) * 0.5,
    y: m.y + (m.h - y.height) * 0.5,
    w: y.width,
    h: y.height,
    safeRect: m
  };
}
function m_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ju({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Ds * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, d = gh(l, fh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), u = g_(d, Zi(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), c = Pu({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: c.hFOV_deg
  };
}
function zm(e) {
  return {
    yaw: Vt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * cr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * cr, -89.9, 89.9)
  };
}
function g_(e, t) {
  const r = zm(e), n = Zi(r.yaw, r.pitch, 0), i = Tl(t, e), o = {
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
    roll: al(Math.atan2(
      Tl(s, n.up),
      Tl(s, n.right)
    ) * cr)
  };
}
function jm(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ju({ width: r, height: n }, mi(e)), o = di(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = gh(e, fh(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = zm(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * cr, 1, 179)
  };
}
function y_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = di(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: d, halfH: u } = Nu(l, s), c = {
    x: o - d,
    y: a - u,
    w: d * 2,
    h: u * 2
  }, f = c.x <= 0 && c.y <= 0 && c.x + c.w >= n && c.y + c.h >= i, p = n / i, m = Math.tan(bc * Ds), y = p >= 1 ? m : m * p, b = p >= 1 ? m / p : m;
  return {
    focalPx: s,
    rect: c,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(d / s) * cr,
      vFOV_deg: 2 * Math.atan(u / s) * cr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(y) * cr,
        vFOV_deg: 2 * Math.atan(b) * cr
      }
    }
  };
}
function Mi(e, t) {
  const r = ci(e);
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
function b_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const a = di(r, e);
    return Pu(Mu(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: es(o, t) };
}
function vf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = oa(t, r);
  if (!o) return e;
  const a = mi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = oa(o.height, o.width));
  const s = b_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function Hm(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ci(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = ph({
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
    const n = ci(e);
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
    return Mi(e, (n) => vf(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Mi(e, (n) => {
      const o = String(Pr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? oa(o[1], o[2]) : oa(mi(n), 1);
      return a ? vf(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Mi(e, (i) => {
      const o = al(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Mi(e, (n) => {
    const i = hh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Mi(e, (n) => {
    const i = mh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Mi(e, (n) => {
    const i = Km(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Gm({
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
    startRollDeg: Number(r || 0),
    lastAngle: c,
    accumulatedRad: 0
  };
}
function Wm(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + uh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: dh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Km(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ds, l = Math.cos(s), d = Math.sin(s), u = o / r, c = -a / r, f = u * l - c * d, p = u * d + c * l, m = Number(e.pitch_deg || 0) * Ds, y = Math.max(0.25, Math.abs(Math.cos(m)));
  return {
    ...e,
    yaw_deg: Vt(Number(e.yaw_deg || 0) - Math.atan(f) / y * cr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(p) * cr, -90, 90)
  };
}
function v_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Pm({
    readState: e,
    reduce: Hm,
    projectModel: $m,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const ze = Object.freeze({
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
}), __ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, S_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: __(t[2])
})), w_ = {
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
}, _f = Object.fromEntries(
  Object.entries(w_).map(([e, t]) => [e, {
    name: t.name,
    elements: S_(t.body)
  }])
), Dt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = st(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(_f, n) ? _f[n] : null;
    });
    return (n, i) => r.value ? (Te(), Le("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ct(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Te(!0), Le(Je, null, xt(r.value.elements, (o, a) => (Te(), Le(Je, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${a}`
      }, [
        o.tag === "path" ? (Te(), Le("path", wr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), Le("circle", wr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), Le("rect", wr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), Le("line", wr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), Le("polyline", wr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), Le("polygon", wr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : ut("", !0)
      ], 64))), 128))
    ], 2)) : ut("", !0);
  }
}, Yt = {
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
    const t = e, r = st(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Te(), Hn(I0(e.tag), wr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Ap(() => [
        Ke(Dt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, x_ = ["aria-expanded", "disabled"], k_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, M_ = ["data-aspect", "disabled", "onClick"], P_ = { class: "pano-cutout-aspect-custom" }, N_ = ["disabled"], C_ = ["disabled"], A_ = ["data-custom-width", "data-custom-height", "disabled"], Bm = {
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
    ]), o = /* @__PURE__ */ Gt("1"), a = /* @__PURE__ */ Gt("1"), s = /* @__PURE__ */ Gt(null), l = st(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), d = st(() => {
      const y = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], b = String(r.model.aspectLabel || "");
      return y.length ? y.map((T) => {
        const U = typeof T == "string" ? T : String((T == null ? void 0 : T.value) || ""), H = typeof T == "string" ? T : String((T == null ? void 0 : T.label) || U);
        return {
          ...typeof T == "object" && T ? T : {},
          value: U,
          label: H,
          active: b ? U === b : (T == null ? void 0 : T.active) === !0
        };
      }) : i.map((T) => ({
        ...T,
        active: T.value === b
      }));
    }), u = st(() => {
      var b;
      const y = String(r.model.aspectLabel || "").trim();
      return y || String(((b = d.value.find((T) => T.active === !0)) == null ? void 0 : b.label) || "Aspect");
    });
    ai(u, (y) => {
      const b = String(y || "").match(/^([0-9.]+):([0-9.]+)$/);
      b && (o.value = b[1], a.value = b[2]);
    }, { immediate: !0 });
    function c(y) {
      n("action", y);
    }
    function f(y) {
      var b;
      r.model.aspectOpen === !0 && ((b = s.value) != null && b.contains(y.target) || c({ type: "close-aspect" }));
    }
    tl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), da(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(y) {
      const [b, T] = String(y.value || "").split(":");
      c({
        type: "set-aspect",
        width: b,
        height: T,
        preserveOrientation: !0
      });
    }
    function m() {
      c({
        type: "set-aspect",
        width: o.value,
        height: a.value,
        preserveOrientation: !1
      });
    }
    return (y, b) => (Te(), Le("div", {
      ref_key: "rootElement",
      ref: s,
      class: ct(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), Hn(Yt, {
        key: 0,
        icon: e.model.aspectIcon || et(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: b[0] || (b[0] = (T) => c({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: b[1] || (b[1] = (T) => c({ type: "toggle-aspect" }))
      }, [
        Ke(Dt, {
          icon: e.model.aspectIcon || et(ze).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, rt(u.value), 1),
        Ke(Dt, {
          icon: et(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, x_)),
      Cr(Ne("div", k_, [
        (Te(!0), Le(Je, null, xt(d.value, (T) => (Te(), Le("button", {
          key: T.value,
          class: ct(["pano-btn pano-frame-aspect-choice", { active: T.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": T.value,
          disabled: l.value,
          onClick: (U) => p(T)
        }, rt(T.label), 11, M_))), 128)),
        Ne("div", P_, [
          Cr(Ne("input", {
            "onUpdate:modelValue": b[2] || (b[2] = (T) => o.value = T),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, N_), [
            [Hd, o.value]
          ]),
          b[4] || (b[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          Cr(Ne("input", {
            "onUpdate:modelValue": b[3] || (b[3] = (T) => a.value = T),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, C_), [
            [Hd, a.value]
          ]),
          Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": a.value,
            disabled: l.value,
            onClick: m
          }, "Apply", 8, A_)
        ])
      ], 512), [
        [ui, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, I_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, E_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Gt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Te(), Le("div", {
      class: ct(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Et(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Et(() => {
      }, ["stop"]))
    }, [
      Ke(Yt, {
        icon: et(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Et((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", I_, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), Le(Je, null, xt(et(r), (o) => (Te(), Le("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Ne("kbd", null, rt(o[0]), 1),
          Ne("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, O_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Zu = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), Le("div", O_, rt(et(dm)), 1));
  }
}, F_ = { class: "pano-cutout-node-surface" }, T_ = ["title", "disabled"], D_ = { class: "value" }, L_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, V_ = {
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
    return (n, i) => (Te(), Le("div", F_, [
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
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ke(Dt, {
            icon: et(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ke(Yt, {
          icon: e.model.hasShot ? et(ze).delete : et(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke(Bm, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Ne("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Et((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ke(Dt, {
            icon: et(ze).roll
          }, null, 8, ["icon"]),
          Ne("span", D_, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, T_),
        Ke(Yt, {
          icon: et(ze).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(E_)
      ], 32),
      e.model.hasShot === !1 ? (Te(), Le("div", L_, " Choose a view · + Add Frame ")) : ut("", !0),
      e.model.viewUnavailable ? (Te(), Hn(Zu, { key: 1 })) : ut("", !0)
    ]));
  }
}, Um = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Gt(null);
    let o, a = !1;
    function s() {
      if (!a) return { active: !1, intent: void 0 };
      const c = o;
      return o = void 0, a = !1, { active: !0, intent: c };
    }
    function l(c) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = c, a = !0, f.value = "", f.click(), !0) : !1;
    }
    function d(c) {
      var y, b;
      const { active: f, intent: p } = s();
      if (!f) return;
      const m = ((b = (y = c.target) == null ? void 0 : y.files) == null ? void 0 : b[0]) || null;
      if (m) {
        n("file-selected", { intent: p, file: m });
        return;
      }
      n("file-cancelled", { intent: p });
    }
    function u() {
      const { active: c, intent: f } = s();
      c && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (c, f) => (Te(), Le("input", {
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
}, R_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, $_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Gt(!1), r = Object.freeze([
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
    return (n, i) => (Te(), Le("div", {
      class: ct(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Et(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Et(() => {
      }, ["stop"]))
    }, [
      Ke(Yt, {
        icon: et(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Et((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", R_, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), Le(Je, null, xt(et(r), (o) => (Te(), Le("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Ne("kbd", null, rt(o[0]), 1),
          Ne("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, z_ = { class: "pano-stickers-node-surface" }, j_ = ["disabled"], H_ = ["aria-label", "data-tip"], G_ = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, W_ = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, K_ = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Gt(null);
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
    return (a, s) => (Te(), Le("div", z_, [
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
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ke(Dt, {
            icon: et(ze).fullscreen
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
          Ke(Dt, {
            icon: et(ze).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, j_),
        Ke(Yt, {
          icon: e.model.locked ? et(ze).lock_closed : et(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ke(Yt, {
          icon: et(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(Yt, {
          icon: et(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(Yt, {
          icon: e.model.isExternalSelection ? et(ze).back_initial : et(ze).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: s[4] || (s[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke($_)
      ], 32),
      e.model.playable === !0 ? (Te(), Le("button", {
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
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ke(Dt, {
          icon: e.model.playing ? et(ze).pause : et(ze).play
        }, null, 8, ["icon"])
      ], 40, H_)) : ut("", !0),
      e.model.hasStickers === !1 ? (Te(), Le("div", G_, " Add Image to place a sticker ")) : ut("", !0),
      e.model.dropActive === !0 ? (Te(), Le("div", W_, "Drop image to add")) : ut("", !0),
      Ke(Um, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), Hn(Zu, { key: 3 })) : ut("", !0)
    ]));
  }
}, Sf = 24;
function B_(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ko(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Ym(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function $c(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Ko(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ko(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Ym(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function U_(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const a = e.edgeMidpoints.find((s) => Ko(s, t) <= 169);
    if (a) {
      const s = a.edge === "left" || a.edge === "right";
      return { kind: s ? "scale_x" : "scale_y", cursor: s ? "ew-resize" : "ns-resize", edge: a.edge, mid: a };
    }
  }
  const o = n ? e.corners.findIndex((a) => Ko(a, t) <= 121) : -1;
  if (o >= 0) {
    const a = e.corners[o], s = a.x - e.center.x, l = a.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: s * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ko(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Ym(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Qu(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function qm(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ko(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ee(r.x, -n, t.width + n),
    y: Ee(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function Y_(e) {
  const t = Zi(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * vt * 0.5),
    tanY: Math.tan(Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * vt * 0.5)
  };
}
function Jr(e, t, r) {
  return ku(ws(
    ws(e.centerDir, xs(e.right, t)),
    xs(e.up, r)
  ));
}
function ed(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Y_(e), n = ko(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    Jr(r, -r.tanX, r.tanY),
    Jr(r, r.tanX, r.tanY),
    Jr(r, r.tanX, -r.tanY),
    Jr(r, -r.tanX, -r.tanY)
  ].map((f) => ko(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const m = [];
    for (let y = 0; y <= 28; y += 1) {
      const b = y / 28;
      let T, U;
      p === 0 ? (T = -r.tanX + 2 * r.tanX * b, U = r.tanY) : p === 1 ? (T = r.tanX, U = r.tanY - 2 * r.tanY * b) : p === 2 ? (T = r.tanX - 2 * r.tanX * b, U = -r.tanY) : (T = -r.tanX, U = -r.tanY + 2 * r.tanY * b);
      const H = ko(Jr(r, T, U), t);
      H && m.push({ x: H.x, y: H.y });
    }
    return m;
  }), a = ko(Jr(r, 0, r.tanY), t), s = ko(
    Jr(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, a, s];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const d = s.x - a.x, u = s.y - a.y, c = Math.hypot(d, u) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: a.x, y: a.y },
    rotateHandle: {
      x: a.x + d / c * Sf,
      y: a.y + u / c * Sf
    },
    visible: !0
  };
}
function wf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: ed(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, d;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((d = a.item) == null ? void 0 : d.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = $c(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = $c(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function q_(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Vt(Math.atan2(n.x, n.z) * qt),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * qt
  };
}
function X_(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function J_(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * qt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let ja = null;
function td() {
  return ja || (ja = new Promise((e) => {
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
  }), ja);
}
function Vn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Z_(e, t = 1024) {
  const r = Math.max(1, Math.round(Vn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Vn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function Q_(e, t, r) {
  const n = Vn(t), i = Vn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const a = Vn(o.u0), s = Vn(o.v0), l = Vn(o.u1), d = Vn(o.v1);
  if (l <= a || d <= s) return null;
  const u = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((a + l) * 0.5 + Vn(u.du)) * n,
    centerY: ((s + d) * 0.5 + Vn(u.dv)) * i,
    width: (l - a) * n,
    height: (d - s) * i,
    rotationRad: Vn(u.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Vn(u.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function eS(e, t, r) {
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
function tS() {
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
    const d = () => {
      s.settled = !0;
      const u = [...s.listeners];
      s.listeners.clear(), u.forEach((c) => c()), r();
    };
    return l.onload = d, l.onerror = d, l.src = o, r(), l;
  }
  function i(o, a, s, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const d = String(o.rasterDataUrl || "").trim(), u = Q_(o, a, s);
    if (!d.startsWith("data:") || !u) return null;
    const c = eS(o, a, s), f = String((o == null ? void 0 : o.id) || "").trim() || c, p = t.get(f);
    if ((p == null ? void 0 : p.revision) === c) return { source: p.source, revision: c };
    const m = n(d, l), y = Number(m.naturalWidth || m.width || 0), b = Number(m.naturalHeight || m.height || 0);
    if (!m.complete || y < 1 || b < 1) return null;
    const T = dn({ label: "raster-object" });
    T.width = Math.max(1, Math.round(a)), T.height = Math.max(1, Math.round(s));
    const U = T.getContext("2d");
    return U ? (u.wrapOffsets.forEach((H) => {
      U.save(), U.translate(u.centerX + H, u.centerY), U.rotate(u.rotationRad), U.scale(u.scale, u.scale), U.drawImage(
        m,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), U.restore();
    }), t.set(f, { revision: c, source: T }), { source: T, revision: c }) : null;
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
function nS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function rS(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function iS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(c) {
    if (!c) return;
    c.entry.listeners.delete(c);
    const f = n.get(c.owner);
    (f == null ? void 0 : f.get(c.key)) === c && f.delete(c.key);
  }
  function a(c, f, p, m) {
    if (!c || typeof m != "function" || p.settled) return;
    let y = n.get(c);
    y || (y = /* @__PURE__ */ new Map(), n.set(c, y));
    const b = y.get(f);
    if ((b == null ? void 0 : b.entry) === p) {
      b.callback = m;
      return;
    }
    o(b);
    const T = { owner: c, key: f, entry: p, callback: m };
    y.set(f, T), p.listeners.add(T);
  }
  function s(c, f) {
    c.settled || (c.settled = !0, c.image.onload = null, c.image.onerror = null, !f && r.get(c.key) === c && r.delete(c.key), [...c.listeners].forEach((p) => {
      o(p);
      try {
        p.callback(c.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(c) {
    if (!(r.size <= c))
      for (const [f, p] of r) {
        if (r.size <= c) break;
        !p.settled || p.listeners.size > 0 || (p.image.onload = null, p.image.onerror = null, r.delete(f));
      }
  }
  function d(c, f, p, m = null) {
    const y = String(f || ""), b = String(p || "");
    if (!y || !b) return null;
    let T = r.get(y);
    if (T)
      r.delete(y), r.set(y, T);
    else {
      l(i - 1);
      const H = e || globalThis.Image;
      if (typeof H != "function") return null;
      const D = new H();
      T = { key: y, image: D, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(y, T), D.onload = () => s(T, !0), D.onerror = () => s(T, !1), D.src = b;
    }
    return T.settled || T.image.complete && Number(T.image.naturalWidth || T.image.width || 0) > 0 || a(c, y, T, m), T.image;
  }
  function u(c) {
    const f = n.get(c);
    f && ([...f.values()].forEach(o), n.delete(c), l(i));
  }
  return { get: d, disposeOwner: u };
}
const Io = /* @__PURE__ */ new WeakMap();
function Xm(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Io.get(e);
  n || (n = [], Io.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = Io.get(e);
    if (!a) return;
    const s = a.indexOf(i);
    s >= 0 && a.splice(s, 1), a.length === 0 && Io.delete(e);
  };
}
function Ar(e, ...t) {
  const r = Io.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const ls = Object.freeze({
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
}), Jm = "PanoramaSuite.Editor.ViewControls", oS = {
  id: Jm,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(ls).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function aS(e) {
  return Object.hasOwn(ls, e) ? ls[e] : ls.default;
}
function sS(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const a = e.bindings.find((s) => s.button === t && !!s.shift === r && !!s.alt === n);
  return (a == null ? void 0 : a.action) ?? null;
}
function lS(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Ls = "state_json";
function Nr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function cS(e) {
  var a, s;
  const t = Nr(e, Ls);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = $h(r, {
    coverage: (a = Nr(e, "coverage")) == null ? void 0 : a.value
  }), i = Hm(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function nd(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const r = Nr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, s, l, d, u, c, f, p, m;
    const o = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (s = (a = e.__panoPreviewNodeRuntime) == null ? void 0 : a.requestDraw) == null || s.call(a), (d = (l = e.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (f = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || f.call(c, !0, !0), (m = (p = t == null ? void 0 : t.canvas) == null ? void 0 : p.setDirty) == null || m.call(p, !0, !0), o;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function uS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function xf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function dS(e) {
  var u, c, f, p, m, y;
  if (!e) return;
  const t = Nr(e, "coverage"), r = Nr(e, "bg_color"), n = Nr(e, Ls), i = Nr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && uS(o) && (xf(a) || a === ""))) return;
  let d = "360";
  if (xf(a))
    try {
      d = String(Pn((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      d = "360";
    }
  t.value = d, (c = t.callback) == null || c.call(t, d), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (p = n.callback) == null || p.call(n, a), i && (i.value = s, (m = i.callback) == null || m.call(i, s)), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0);
}
function cs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function zc(e, t, r) {
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
async function fS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const r = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (r instanceof Map)
    for (; r.size > 0; ) {
      const n = Array.from(r.entries());
      t ? await Promise.allSettled(n.map(([, i]) => i)) : await Promise.all(n.map(([, i]) => i)), n.forEach(([i, o]) => {
        r.get(i) === o && r.delete(i);
      });
    }
}
function Eo(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const n = e.__panoStickerOperationTail, o = (n && typeof n.then == "function" ? n.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = o.catch(() => {
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
async function Zm(e, t = {}) {
  var n;
  await fS(e, t);
  const r = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const i of r) await i();
  await ((n = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : n.call(e));
}
function pS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await Zm(e), r ? r.apply(this, n) : this.value;
  };
}
function hS(e) {
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
function mS(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Mo(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: a,
  enableStickersPreview: s,
  sceneStateV2: l = !1,
  studio: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function u(c) {
    var m;
    const f = `editor_btn|${r}`;
    if (c.__panoPreviewAttached === !0 && c.__panoPreviewMountKey === f) return;
    hS(c), nd(c, t), cs(c, Ls);
    const p = Nr(c, Ls);
    if (pS(c, p), p && !p.__panoPreviewPatchedCb) {
      p.__panoPreviewPatchedCb = !0;
      const y = p.callback;
      p.callback = (b) => {
        var U;
        const T = y ? y(b) : void 0;
        return (U = c.setDirtyCanvas) == null || U.call(c, !0, !1), T;
      };
    }
    if (r === "PanoramaStickers") {
      c.__panoSceneStateV2 = l, c.__panoStudio = d;
      const y = Nr(c, "bg_color");
      !l && y && (y.value == null || String(y.value).trim() === "" || String(y.value).toLowerCase() === "#000000") && (y.value = "#00ff00", (m = y.callback) == null || m.call(y, "#00ff00")), zc(c, n, () => i(c, "stickers")), s && (o(c, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(c, "stickers")
      }), c.__panoStickersNodeSurface && cs(c, n), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260])), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = f;
      return;
    }
    c.__panoSceneStateV2 = l, zc(c, n, () => i(c, "cutout")), l || a(c, {
      buttonText: n,
      onOpen: () => i(c, "cutout")
    }), c.__panoCutoutNodeSurface && cs(c, n), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260]), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = f;
  }
  for (const c of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[c];
    e.prototype[c] = function() {
      const p = f ? f.apply(this, arguments) : void 0;
      c === "onNodeCreated" && r === "PanoramaCutout" && !l && cS(this), c === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && dS(this);
      const m = !!this.__panoPreviewAttached;
      return (c === "onNodeCreated" || this.widgets) && u(this), c === "onAdded" && m && Ar(this, "attach"), p;
    };
  }
}
function gS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return mS(this), n;
  };
}
function yS(e, {
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
    nd(e, t);
    const l = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    zc(e, "Open Preview", () => l(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: l
    }), e.__panoPreviewNodeSurface && cs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  i(o);
}
function bS({
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
    settings: [oS, ib],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Bd],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Bd.id] }],
    beforeRegisterNodeDef(l, d) {
      const u = String((d == null ? void 0 : d.name) || "");
      (u === "PanoramaStickers" || u === "Panorama Stickers") && Mo(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), u === "PanoramaStickersNode" && Mo(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), u === "PanoramaStudio" && Mo(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0,
        studio: !0
      }), (u === "PanoramaCutout" || u === "Panorama Cutout") && Mo(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s
      }), u === "PanoramaCutoutNode" && Mo(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: s,
        sceneStateV2: !0
      }), ks(u) && gS(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      l.__panoPreviewAttached && o(l);
    },
    nodeCreated(l) {
      const d = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      nd(l, e), ks(d) && yS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const vS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Yn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : vS.test(String(e.name || "")) : !1;
}
function rd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Yn(r)) : !1;
}
function _S(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var d, u, c;
    (d = l == null ? void 0 : l.preventDefault) == null || d.call(l), (u = l == null ? void 0 : l.stopPropagation) == null || u.call(l), (c = l == null ? void 0 : l.stopImmediatePropagation) == null || c.call(l);
  }, o = (l) => {
    if (rd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, a = (l) => {
    var d;
    l != null && l.relatedTarget && ((d = e.contains) != null && d.call(e, l.relatedTarget)) || r(!1);
  }, s = (l) => {
    var u;
    const d = Array.from(((u = l == null ? void 0 : l.dataTransfer) == null ? void 0 : u.files) || []).find((c) => Yn(c));
    if (!d) {
      r(!1);
      return;
    }
    i(l), r(!1), n(d);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", a, !0), e.addEventListener("drop", s, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", a, !0), e.removeEventListener("drop", s, !0), r(!1);
  };
}
async function Oo(e, t = {}) {
  var a, s, l, d;
  if (!Yn(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((s = (a = globalThis.URL) == null ? void 0 : a.createObjectURL) == null ? void 0 : s.bind(globalThis.URL)), i = t.revokeObjectURL || ((d = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : d.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const u = await new Promise((c, f) => {
      const p = new r();
      p.onload = () => c(p), p.onerror = () => f(new Error("image load failed")), p.src = o;
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
async function ti(e, { fetchApi: t } = {}) {
  if (!Yn(e)) throw new TypeError("A supported image file is required.");
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
const kf = /* @__PURE__ */ new WeakSet(), Mf = /* @__PURE__ */ new WeakSet();
let Pf = 0;
function jc(e) {
  if (!e || typeof e != "object" || Mf.has(e)) return e;
  const t = String(e.type || "preview");
  return Pf += 1, e.type = `${t}:pano-${Pf}`, Mf.add(e), e;
}
function Vs(e) {
  if (!e || typeof e != "object" || kf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, kf.add(e), e;
}
function Qm(e, t) {
  var n, i;
  if (!t || ((i = (n = Vs(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function SS({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const d = i;
    i = null, o || r == null || r(d);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Lt } = Ya;
Gv((e) => Hr(e.id));
Wv(ln);
const id = iS(), { linkedVideoFile: wS } = Sm({ app: Lt, api: ln });
function Hc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ya == null ? void 0 : Ya.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const xS = "pano_suite.ui_settings.v1", kS = 120, MS = 2048;
function Nf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(xS)) || "").trim();
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
function PS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Po(e) {
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
function NS() {
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
function Gc(e) {
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
function eg(e) {
  const t = Gc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function CS(e, t, r) {
  eg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Wc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function od(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function tg(e) {
  return ks(od(e));
}
function Cf(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function ng(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Wc(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && us(e), vw(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Wc(e);
    },
    rebind(r = {}) {
      const n = String(r.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      us(e), this.activeBackend = "none", this.attach({ ...r, mode: n });
    },
    teardown() {
      us(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function AS(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function us(e, t = {}) {
  var n, i, o, a, s;
  if (!e) return;
  Kc.unregister(e), AS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && e.widgets.filter((d) => {
      if (d === (r == null ? void 0 : r.widget)) return !0;
      const u = String((d == null ? void 0 : d.name) || ""), c = String((d == null ? void 0 : d.type) || ""), f = Hc();
      return u === f || c === f || u === "pano_preview" || c === "pano_preview" ? !0 : u === "preview" && c === "pano_preview";
    }).forEach((d) => XS(e, d));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function IS(e, t = "#00ff00") {
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
function ES(e) {
  var r;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = ji(e, "state_json")) == null ? void 0 : r.value) || "");
}
function bn(e) {
  var s, l;
  const t = ES(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = ji(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = ji(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? zh(t, { backgroundColor: n, coverage: i, active: Wh(e) }) : IS(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function ji(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function OS(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function rg(e, t, r = null) {
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
  return !n && r != null && (n = OS(e == null ? void 0 : e.graph, r)), n;
}
function FS(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function ig(e, t = []) {
  const r = FS(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    Kr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Af(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Rs(e, t) {
  const r = Af(e), n = Af(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function TS(e, t) {
  var r;
  return rg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function DS(e, t = Kr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = ig(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Xv(e, a, TS);
}
const Kc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = ln) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, d, u, c, f;
        if (!o) return;
        const a = Rs(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...DS(o)].some((p) => Rs(n, p)) || _m(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (og(o), (d = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (f = (c = o.graph) == null ? void 0 : c.setDirtyCanvas) == null || f.call(c, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
      });
    }, ln.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = ln) != null && e.removeEventListener) || (ln.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function $s(e) {
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
  return typeof ((o = ln) == null ? void 0 : o.apiURL) == "function" ? ln.apiURL(i) : i;
}
function LS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function VS(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function RS(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function $S(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (LS(t)) return [t];
  const { filename: r, subfolder: n } = VS(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => $s({
    filename: r,
    subfolder: n,
    type: o
  }));
  return RS([...i, t]);
}
function zS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? $s({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Hr(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Rs(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const a of o)
      if (Rs(a, i)) return t[a];
  }
  return null;
}
function Bo(e, t, r = null) {
  const n = r || Hr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function En(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return En(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return $s({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = En(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : $s(e);
}
function zs(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function ql(e) {
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
function ad(e, t) {
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
function jS(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((a) => t.push(a));
  }, i = (o, a = 0) => {
    !o || a > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, a + 1), i(o.ui, a + 1), i(o.data, a + 1), i(o.result, a + 1));
  };
  return i(e, 0), t;
}
function HS(e, t) {
  try {
    e.__panoOwnOutputRev = nS(e.__panoOwnOutputRev);
    const r = jS(t);
    let n = "";
    for (const i of r)
      if (n = En(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), ad(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Hi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function GS(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!tn(e, "background"))
    return Hi(e), null;
  const i = Hr(n), o = Uu(i, t, En);
  if (!o)
    return Hi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = ad(o, a), l = `${t.join("|")}:${s}`, d = e.__panoOwnOutputVideoCache;
  if (d && d.key === l) return d.player.failed() ? null : d.player.video;
  Hi(e);
  const u = Jv({
    documentRef: document,
    src: s,
    onFrame: r
  });
  return u ? (e.__panoOwnOutputVideoCache = { key: l, player: u }, u.video) : null;
}
function WS(e, t = []) {
  var d, u;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = ig(e, t).map((c) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(c))).filter((c) => c >= 0), o = r.map((c, f) => ({ input: c, idx: f })).filter(({ input: c }) => String((c == null ? void 0 : c.type) || "").toUpperCase() === "IMAGE").map(({ idx: c }) => c), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const c of a) {
    const f = r[c], p = e.graph ? e.getInputLink(c) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const m = p.origin_id, y = rg(e, c, m);
    if (!y) continue;
    const b = Number(p.origin_slot ?? 0), T = Hr((y == null ? void 0 : y.id) ?? m), U = Array.isArray(T == null ? void 0 : T.images) ? T.images : [];
    if (U.length) {
      const W = [];
      b >= 0 && b < U.length && W.push(U[b]), W.push(...U);
      for (const $ of W.filter((te) => !as(te))) {
        const te = En($);
        if (te)
          return String((f == null ? void 0 : f.name) || ""), { src: `${te}&pano_src=${Dc(T)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let H = [];
    try {
      H = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(y) || [] : [];
    } catch {
      H = [];
    }
    if (Array.isArray(H) && H.length) {
      const W = [];
      b >= 0 && b < H.length && W.push(H[b]), W.push(...H);
      for (const $ of W) {
        const te = En($);
        if (te)
          return String((f == null ? void 0 : f.name) || ""), { src: te, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const D = Array.isArray(y == null ? void 0 : y.imgs) ? y.imgs : [];
    if (D.length) {
      const W = [];
      b >= 0 && b < D.length && W.push(D[b]), W.push(...D);
      for (const $ of W) {
        const te = En($);
        if (te)
          return String((f == null ? void 0 : f.name) || ""), { src: te, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const P = (d = y == null ? void 0 : y.widgets) == null ? void 0 : d.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image");
    if (P) {
      let W = En(P.value);
      if (W && !W.includes("/") && !W.includes(":") && (y.comfyClass === "LoadImage" || y.type === "LoadImage") && (W = ln.apiURL(`/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`)), W)
        return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = tn(e, "background") ? Hr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const c of l) {
      const f = En(c);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function KS(e, t = [], r = {}) {
  const n = WS(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = $S(i);
  if (!o.length) return null;
  const a = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = t.join("|") || "image", l = e.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === i && l.img) return l.img;
  if (l && l.pendingSrcRaw === i && l.pendingImg)
    return a && l.img && (l.img.complete || l.img.naturalWidth || l.img.width) ? l.img : l.pendingImg;
  const d = new Image(), u = l || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, e.__panoLinkedInputImageCache.set(s, u);
  let c = -1;
  const f = () => {
    var m, y, b, T;
    if (c += 1, c >= o.length) {
      if (((y = (m = e.__panoLinkedInputImageCache) == null ? void 0 : m.get) == null ? void 0 : y.call(m, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (T = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.delete) == null || T.call(b, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const p = o[c];
    u.pendingResolvedSrc = p, d.src = p;
  };
  return d.onload = () => {
    var p, m, y;
    ((m = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.get) == null ? void 0 : m.call(p, s)) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0);
  }, d.onerror = (p) => {
    var m, y, b, T;
    if (c + 1 < o.length) {
      f();
      return;
    }
    if (((y = (m = e.__panoLinkedInputImageCache) == null ? void 0 : m.get) == null ? void 0 : y.call(m, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (T = (b = e.__panoLinkedInputImageCache) == null ? void 0 : b.delete) == null || T.call(b, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((p == null ? void 0 : p.type) || "error");
  }, f(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function BS(e, t = [], r = null, n = {}) {
  const i = KS(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function og(e) {
  var t, r;
  if (e) {
    id.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Hi(e), e.__panoWrappedErpCache = null;
  }
}
function US(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Hi(e), e.__panoWrappedErpCache = null;
  }
}
function ag(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ha(e, t, r = "") {
  const n = ag(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < kS ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function If(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), a = r / i, s = n / o, l = Math.min(a, s);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function YS(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), a = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || a <= 0) return;
  const s = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), d = Math.max(Math.round(34 * r), s + Math.round(14 * r)), u = n + (o - l) * 0.5, c = i + (a - d) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(u, c, l, d, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", u + l * 0.5, c + d * 0.5 + 0.5), e.restore();
}
function Xl(e, t) {
  var n;
  const r = (n = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : n.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function qS(e) {
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
function XS(e, t) {
  return Qm(e, t);
}
function aa(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = zS(r);
  if (!o && (n != null && n.external)) {
    if (!tn(e, "external-sticker")) return null;
    const p = Hr(e == null ? void 0 : e.id), m = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const y of Array.isArray(m) ? m : [m])
      if (o = En(y), o) break;
  }
  if (!o) return null;
  const a = Bo(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, d = n != null && n.external ? ad(o, l) : o, u = rS(o, s, l);
  return id.get(e, u, d, (p, m) => {
    var y, b;
    m && (n != null && n.external && e.__panoOutputFromRun && Ar(e, "image-loaded"), (b = (y = e.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || b.call(y));
  }) || null;
}
function JS(e, t) {
  var c, f, p, m;
  const r = nw(e, t), n = rw(t), i = Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.groups) ? t.painting.groups : [], o = new Map(
    i.filter((y) => y && typeof y == "object").map((y) => [String((y == null ? void 0 : y.actionGroupId) || (y == null ? void 0 : y.id) || "").trim(), Number((y == null ? void 0 : y.z_index) || 0)])
  ), a = r ? n.map((y) => {
    const b = r.getGroupDisplayCanvas(y);
    return b ? {
      id: `paint_group:${y}`,
      source: b,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${y}`,
      zIndex: Number(o.get(y) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (m = (p = e.__panoRasterObjectSurfaceCache) == null ? void 0 : p.retain) == null || m.call(p, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = tS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var y, b;
    return (b = (y = e.__panoDomPreview) == null ? void 0 : y.requestDraw) == null ? void 0 : b.call(y);
  });
  const l = Z_(t == null ? void 0 : t.output_preset), d = s.filter((y) => (y == null ? void 0 : y.visible) !== !1 && String((y == null ? void 0 : y.layerKind) || "paint") === "paint").map((y) => String((y == null ? void 0 : y.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(d);
  const u = s.map((y) => {
    const b = e.__panoRasterObjectSurfaceCache.get(
      y,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return b ? {
      id: `raster:${String((y == null ? void 0 : y.id) || "")}`,
      source: b.source,
      revision: b.revision,
      zIndex: Number((y == null ? void 0 : y.z_index) || 0),
      opacity: 1,
      visible: (y == null ? void 0 : y.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function ZS(e, t, r, n) {
  var o, a, s, l, d, u;
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
      const c = n.convertEventToCanvasOffset(t);
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
  const i = ew(e, t, n);
  return i || null;
}
function QS(e, t) {
  var c, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (c = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : c.call(i), a = (t == null ? void 0 : t.ds) || ((f = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], d = (r - Number(o.left || 0)) / s - Number(l[0] || 0), u = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(d) || !Number.isFinite(u) ? null : { x: d, y: u };
}
function ew(e, t, r) {
  var i, o;
  const n = QS(t, r || (Lt == null ? void 0 : Lt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function tw(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function nw(e, t) {
  var d, u, c, f, p, m, y, b, T, U, H, D;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (f = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = tw(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = Su(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((p = t == null ? void 0 : t.painting) == null ? void 0 : p.groups) || null,
    rasterObjects: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) || null
  };
  return (((y = e.__panoPreviewPaintRevision) == null ? void 0 : y.paint) !== l.paint || ((b = e.__panoPreviewPaintRevision) == null ? void 0 : b.mask) !== l.mask || ((T = e.__panoPreviewPaintRevision) == null ? void 0 : T.groups) !== l.groups || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((H = t == null ? void 0 : t.painting) == null ? void 0 : H.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function rw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function iw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function ow(e, t, r) {
  const n = ed(t, r);
  n.visible && Qu(e, n.boundaryEdges, { selected: !1 });
}
function aw(e, t, r) {
  const n = ed(t, r);
  n.visible && (e.save(), Qu(e, n.boundaryEdges, { selected: !0 }), qm(e, n, { accent: B_(t) }), e.restore());
}
function Bc(e, t, r) {
  return cm(Os(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function js(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? qi;
}
function sw(e) {
  return [tn(e, "background") ? Uu(Hr(e.id), ["pano_input_videos"], En) : "", wS(e, Kr)];
}
function lw(e) {
  var o;
  if (!tn(e, "external-sticker")) return null;
  const t = Hr(e.id), r = Bo(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(En), meta: r };
  const i = Uu(t, ["pano_sticker_input_videos"], En);
  return i ? { src: i, meta: r } : null;
}
function cw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Ef(e, t, r) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: dr({ ...t, painting: null }) });
  const n = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = aa(e, a.id, Gh(a.source), { external: a.source.kind === "port" });
      const d = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && d) {
        const u = d.playback.stickerPicture(d.stickerStill, s), c = km(d.playback.stickerMedia, s);
        return u ? { media: u, revision: ql(u), source: c } : null;
      }
    } else {
      const d = a.type === "external_image" || a.source_kind === "external_image", u = String(a.asset_id || "") || (d ? String(a.id || "") : "");
      s = aa(e, u, (l = t.assets) == null ? void 0 : l[a.asset_id], { external: d });
    }
    return zs(s) ? { media: s, revision: ql(s) } : null;
  }, i = (t.painting_visible === !1 ? [] : JS(e, t)).filter((a) => a.visible !== !1).map((a) => ({ id: a.id, media: a.source, revision: a.revision, opacity: a.opacity, zIndex: a.zIndex }));
  return {
    background: zs(r) ? { media: r, revision: ql(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: um(e.__panoSurfaceScene.sceneState, js(e), t.stickers, { media: n, paintLayers: i })
  };
}
function uw(e, t, r) {
  var D, P, W, $, te, re, ce;
  const n = String(e.__panoPreviewMode || "stickers");
  ag(e, n);
  const i = bn(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (W = (P = (D = e.__panoCutoutNodeSurface) == null ? void 0 : D.session) == null ? void 0 : P.refresh) == null || W.call(P)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (re = (te = ($ = e.__panoStickersNodeSurface) == null ? void 0 : $.session) == null ? void 0 : te.refresh) == null || re.call(te));
  const o = t.parentElement, a = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientWidth) || t.clientWidth || 0))), s = Math.max(64, Math.round(Number((o == null ? void 0 : o.clientHeight) || t.clientHeight || 0))), l = t.getContext("2d");
  if (!l) return;
  (t.width !== a || t.height !== s) && (t.width = a, t.height = s);
  const d = { x: 0, y: 0, w: a, h: s };
  l.setTransform(1, 0, 0, 1, 0, 0), l.fillStyle = "#070707", l.fillRect(0, 0, a, s);
  const u = (e.__panoSurfacePlayback ? cw(e.__panoSurfacePlayback) : GS(e, ["pano_input_videos"], () => {
    var E, G;
    return (G = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : G.call(E);
  })) || BS(
    e,
    Kr,
    () => {
      var E, G;
      return (G = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : G.call(E);
    },
    { preserveReadyWhilePending: !1 }
  ), c = zs(u);
  let f = null;
  const p = (E, G) => {
    f || (f = Ef(e, i, u));
    const ie = r.render({ width: E.w, height: E.h, camera: G, ...f });
    return ie && l.drawImage(ie.canvas, ie.x, ie.y, ie.width, ie.height, E.x, E.y, E.w, E.h), !!ie;
  };
  if (n === "cutout") {
    const E = qS(i), G = iw(u), ie = E ? Ee(Gr(E).aspect, 0.1, 10) : c ? Ee(Number(G.width / G.height), 0.05, 20) : 1, pe = Ju(d, ie);
    e.__panoCutoutNodeFrame = pe;
    let me = "none";
    const ge = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (E)
      if (u && !c)
        me = "loading";
      else if (c) {
        const ee = y_({ width: a, height: s }, pe, E);
        [
          !ee.fallback || p(ee.fallback.rect, Wo(ee.fallback.shot)),
          p(ee.rect, Wo(ee.shot)),
          !ee.fallback || p(pe, Wo(E))
        ].every(Boolean) || (me = "loading");
      } else
        me = "empty";
    else {
      const ee = e.__panoLastCutoutShot;
      ee ? (e.__panoPreviewView = jm(ee, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), c ? p(d, Os(e.__panoPreviewView, a, s)) || (me = "loading") : u ? me = "loading" : me = "empty";
    }
    c || r.release(), r.failed && me === "loading" && (me = "none"), E && (e.__panoLastCutoutShot = { ...E }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(pe.x, pe.y, pe.w, pe.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(pe.x + 0.5, pe.y + 0.5, Math.max(0, pe.w - 1), Math.max(0, pe.h - 1)), l.restore()), me === "loading" ? (Xl(e, !1), Ha(e, !0, ge)) : me === "empty" ? (Xl(e, !0), Ha(e, !1, "")) : (Xl(e, !1), Ha(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let m = !1;
  (!u || c) && (f = Ef(e, i, u), !f.background && !f.layers.length ? (r.release(), m = !0) : m = p(d, Os(e.__panoPreviewView, a, s)));
  const y = !m && !r.failed;
  Ha(e, y, y ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), y && YS(l, d, If(t, d));
  const b = Bc(e, a, s);
  !u && m && dw(l, b, If(t, d));
  const T = String(((ce = i == null ? void 0 : i.active) == null ? void 0 : ce.selected_sticker_id) || ""), U = Lc(i, js(e)), H = m ? U.find((E) => String((E == null ? void 0 : E.id) || "") === T && (E == null ? void 0 : E.visible) !== !1) : null;
  m && U.filter((E) => E !== H && (E == null ? void 0 : E.visible) !== !1 && (E.external || E.source_kind === "external_image")).filter((E) => !zs(aa(e, E.id, null, { external: !0 }))).forEach((E) => ow(l, E, b)), H && aw(l, H, b);
}
function Of(e, t, r, n, i = 1) {
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
function dw(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let s = -75; s <= 75; s += 15) {
    const l = [];
    for (let d = -180; d <= 180; d += 4) l.push(wn(d, s));
    Of(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let d = -89; d <= 89; d += 4) l.push(wn(s, d));
    Of(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: wn(0, 0) },
    { name: "Right", dir: wn(90, 0) },
    { name: "Back", dir: wn(180, 0) },
    { name: "Left", dir: wn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const a = Math.max(9, Math.round(11 * r));
  e.font = `500 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((s) => {
    const l = t.project(s.dir);
    l.z > 1e-4 && e.fillText(s.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Uc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function fw(e, t, r = 20) {
  var a;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (a = t.getBoundingClientRect) == null ? void 0 : a.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Ln(e, t) {
  return fw(e, t) ? !1 : (Uc(e), !0);
}
function Ff() {
  var r;
  const e = (r = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function pw(e) {
  var r;
  if (!e) return;
  const t = (r = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function hw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !eg(e)) return;
  const n = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(n) : e.size = n, e.__panoStandaloneBootSized = !0;
  } catch (i) {
    String((i == null ? void 0 : i.message) || i || "unknown");
  }
}
function mw(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = i > 0, !(i <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var o, a;
    e.__panoBootMinHeightTimer = null, (o = e == null ? void 0 : e.__panoDomPreview) != null && o.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Tf(e, t = null, r = 0, n = 0, i = !0) {
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
      e.__panoUserResized = !0, t == null || t(), i && gw(e, 180, t);
    }
  };
}
function gw(e, t = 180, r = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var n;
    e.__panoResizeSettleTimer = null, r == null || r(), (n = e.setDirtyCanvas) == null || n.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Fo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const yw = /* @__PURE__ */ new WeakMap();
function sg(e, t) {
  return _m(yw, e, t) ? !1 : (HS(e, t), og(e), Fo(e), !0);
}
async function bw(e) {
  var r, n;
  const t = await Yv(e, Lt, ln);
  t && (sg(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function vw(e, t = {}) {
  var xe;
  const r = t.__allowStandalone === !0, n = tg(e);
  if (n && !r) {
    od(e);
    return;
  }
  n && hw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: Cf(e)
  }, s = "dom", l = a.signature || Cf(e);
  if (Number(e.__panoRebindGeneration || 0), Wc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Gc(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (xe = e.__panoDomPreview) != null && xe.widget || (e.__panoLegacyPreviewHooked && us(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const d = t.noPreview === !0, u = d ? 0 : 56, c = d ? 0 : p_, f = document.createElement("div");
  if (NS(), f.className = "pano-node-preview-dom", f.classList.add(i ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && f.classList.add("pano-node-preview--no-preview"), f.setAttribute("data-capture-wheel", "true"), f.tabIndex = 0, f.style.cssText = [
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
    const F = Vs(jc(
      e.addDOMWidget(Hc(), "preview", f, Tf(e, null))
    ));
    Fo(e), e.__panoDomPreview = { widget: F, root: f, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const p = document.createElement("div");
  p.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const m = dn({ label: "node.surface" });
  m.style.cssText = [
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
  const y = document.createElement("div");
  y.style.cssText = [
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
  ].join(";"), y.textContent = "Connect ERP image", p.appendChild(m), p.appendChild(y), f.appendChild(p);
  const b = ch(f), T = document.createElement("div");
  T && (T.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", T.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", f.appendChild(T)), CS(e, 120, 120), Fo(e);
  let U = null;
  try {
    mw(e, u, () => {
      var F, he;
      return (he = (F = e.__panoDomPreview) == null ? void 0 : F.requestDraw) == null ? void 0 : he.call(F);
    }), U = Vs(jc(e.addDOMWidget(
      Hc(),
      "preview",
      f,
      Tf(
        e,
        () => {
          var F, he;
          return (he = (F = e.__panoDomPreview) == null ? void 0 : F.requestDraw) == null ? void 0 : he.call(F);
        },
        u,
        c,
        !1
      )
    )));
  } catch {
    return;
  }
  const H = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, D = () => {
    H.destroyed || (H.needsDraw = !0, !H.inTick && !H.raf && (H.raf = requestAnimationFrame(ye)));
  }, P = fm(D), W = /* @__PURE__ */ Ji(i ? { ...Dm(bn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...$m(bn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((F) => ({ value: F, label: F }))
  });
  let $ = null;
  if (i && e.__panoSceneStateV2) {
    const [F, he] = [0, 1].map(() => {
      const Ce = ol(document, "node.playback");
      return Ce.playsInline = !0, Ce.preload = "auto", Ce.crossOrigin = "anonymous", Ce.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", p.appendChild(Ce), Ce;
    }), Ae = dn({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Oe = dn({ label: "node.port-still" });
    Oe.__panoFrameIdx = 0;
    const Re = d_({
      video: F,
      stickerVideo: he,
      createImage: (Ce, Ve) => {
        const je = new Image();
        return je.onload = Ve, je.onerror = Ve, je.src = Ce, je;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ce) => requestAnimationFrame(Ce),
        cancelFrame: (Ce) => cancelAnimationFrame(Ce)
      },
      readState: () => bn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: D,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ve;
        if (!(F.videoWidth > 0 && F.videoHeight > 0)) return;
        const Ce = Math.min(1, MS / F.videoWidth);
        Ae.width = Math.round(F.videoWidth * Ce), Ae.height = Math.round(F.videoHeight * Ce), (Ve = Ae.getContext("2d")) == null || Ve.drawImage(F, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, D();
      },
      onStickerCapture: () => {
        var Ce;
        he.videoWidth > 0 && he.videoHeight > 0 && (Oe.width = he.videoWidth, Oe.height = he.videoHeight, (Ce = Oe.getContext("2d")) == null || Ce.drawImage(he, 0, 0), Oe.__panoFrameIdx += 1, D());
      },
      onChange: () => {
        W.playing = Re.playing, D();
      }
    });
    $ = { playback: Re, video: F, still: Ae, stickerVideo: he, stickerStill: Oe, stickerSource: "" }, e.__panoSurfacePlayback = $;
  }
  const te = () => {
    var je;
    const { playback: F, still: he, stickerStill: Ae } = $, Oe = Rc(p, !!((je = e.flags) != null && je.collapsed)), Re = F.source, Ce = Oe ? lw(e) : null, Ve = F.follow({
      shown: Oe,
      sources: Oe ? sw(e) : [],
      state: bn(e),
      sticker: Ce
    });
    ((Ce == null ? void 0 : Ce.src) || "") !== $.stickerSource && ($.stickerSource = (Ce == null ? void 0 : Ce.src) || "", gc(Ae)), F.source !== Re && (gc(he), he.__panoFrameIdx = 0), W.playable = Ve, W.playing = F.playing;
  }, re = () => {
    var he, Ae;
    const F = ((he = e.__panoOwnOutputVideoCache) == null ? void 0 : he.player) ?? null;
    F && !Rc(p, !!((Ae = e.flags) != null && Ae.collapsed)) && F.pause(), i && (W.playable = !!F && !F.failed(), W.playing = !!(F != null && F.playing));
  }, ce = () => {
    var F;
    $ == null || $.playback.pause(), (F = e.__panoOwnOutputVideoCache) == null || F.player.pause();
  };
  let E = null;
  const G = (i ? c_ : v_)({
    readState: () => bn(e),
    publishLiveState: (F) => {
      F ? (E = F, e.__panoLiveStateOverride = F) : (e.__panoLiveStateOverride === E && (e.__panoLiveStateOverride = null), E = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, D();
    },
    commitState: (F) => {
      var Oe, Re, Ce, Ve;
      const he = ji(e, "state_json");
      if (!he) return;
      Kh(e, F.active);
      const Ae = Uh(e, F);
      Yh(e, Ae, String(he.value ?? "")) || (he.value = Ae, (Oe = he.callback) == null || Oe.call(he, Ae), e.__panoStateCache = null, (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !0), (Ve = (Ce = e.graph) == null ? void 0 : Ce.setDirtyCanvas) == null || Ve.call(Ce, !0, !0));
    },
    onChange: (F) => Object.assign(W, F)
  }), pe = i ? Xm(e, (F = "sync", he = null) => {
    var kt;
    if (!i || !e.graph || !G || G.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const pt = tn(e, "external-sticker"), Xt = bn(e).stickers.find((Dn) => Dn.source.kind === "port");
      return G.apply({
        type: "sync-port",
        value: Fm(e, {
          pose: pt ? Bo(e, "pano_sticker_input_pose", he) : null,
          image: Xt ? aa(e, Xt.id, null, { external: !0 }) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((pt) => String((pt == null ? void 0 : pt.name) || "") === "sticker_image") : -1, Oe = Ae >= 0 ? ((kt = e.getInputLink(Ae)) == null ? void 0 : kt.id) ?? null : null;
    if (Oe == null)
      return G.apply({ type: "sync-external", value: { connected: !1 } });
    if (!tn(e, "external-sticker")) return !1;
    const Re = Bo(e, "pano_sticker_input_pose", he), Ce = Array.isArray(Re) ? Re[0] : Re, Ve = String(Bo(e, "pano_sticker_input_state_hash", he) ?? ""), je = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Ye = bn(e), $e = (Array.isArray(Ye == null ? void 0 : Ye.stickers) ? Ye.stickers : []).find((pt) => String((pt == null ? void 0 : pt.id) || "") === "sticker_image_1"), He = aa(e, "sticker_image_1", null, { external: !0 }), $t = Ce && typeof Ce == "object" ? Ce : $e || { yaw_deg: je.yaw, pitch_deg: je.pitch, hFOV_deg: 30, rot_deg: 0 };
    return G.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Oe,
        stateHash: Ve,
        pose: $t,
        imageWidth: Number((He == null ? void 0 : He.naturalWidth) || (He == null ? void 0 : He.width) || 0),
        imageHeight: Number((He == null ? void 0 : He.naturalHeight) || (He == null ? void 0 : He.height) || 0)
      }
    });
  }) : () => {
  };
  let me = 0;
  const ge = async (F) => {
    if (!i || !G || !Yn(F)) return !1;
    ce();
    const he = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Oe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    me += 1, W.importing = !0;
    const Re = Eo(e, `add:${he}`, async () => {
      const Ce = await Oo(F), Ve = await ti(F, {
        fetchApi: (je, Ye) => ln.fetchApi(je, Ye)
      });
      return ue(), G.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: he,
          asset: Ve,
          imageWidth: Ce.width,
          imageHeight: Ce.height,
          yaw_deg: Number(Oe.yaw || 0),
          pitch_deg: Number(Oe.pitch || 0)
        }
      });
    });
    try {
      return await Re;
    } catch {
      return !1;
    } finally {
      me = Math.max(0, me - 1), W.importing = me > 0, D();
    }
  };
  let ee = null, S = null, K = null, de = !1;
  const q = () => {
    var F;
    return K && (clearTimeout(K), K = null), de ? (de = !1, ((F = G == null ? void 0 : G.commitGesture) == null ? void 0 : F.call(G)) ?? !1) : !1;
  }, ue = () => {
    var Oe, Re, Ce;
    const F = q(), he = (ee == null ? void 0 : ee.pointerId) ?? (S == null ? void 0 : S.pointerId);
    if (ee = null, S = null, he != null) {
      try {
        (Oe = m.hasPointerCapture) != null && Oe.call(m, he) && ((Re = m.releasePointerCapture) == null || Re.call(m, he));
      } catch {
      }
      m.style.cursor = "grab";
    }
    const Ae = ((Ce = G == null ? void 0 : G.commitGesture) == null ? void 0 : Ce.call(G)) ?? !1;
    return F || Ae;
  }, Pe = () => {
    var Oe, Re, Ce;
    const F = q(), he = ee == null ? void 0 : ee.pointerId;
    if (ee = null, he != null) {
      try {
        (Oe = m.hasPointerCapture) != null && Oe.call(m, he) && ((Re = m.releasePointerCapture) == null || Re.call(m, he));
      } catch {
      }
      m.style.cursor = "grab";
    }
    const Ae = ((Ce = G == null ? void 0 : G.cancelGesture) == null ? void 0 : Ce.call(G)) ?? !1;
    return F || Ae;
  }, ne = () => ue();
  G && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ne));
  let O = null, Z = !1;
  if (T && G)
    try {
      td(), O = yu(i ? K_ : V_, {
        model: W,
        onAction: (F) => {
          var Oe, Re, Ce;
          if ((F == null ? void 0 : F.type) === "toggle-playback") {
            ue(), $ ? $.playback.toggle() : (Oe = e.__panoOwnOutputVideoCache) == null || Oe.player.toggle(), D();
            return;
          }
          if (ce(), (F == null ? void 0 : F.type) === "open-editor") {
            ue(), i || (W.aspectOpen = !1), (Re = e.__panoOpenEditor) == null || Re.call(e);
            return;
          }
          if (i) {
            if ((F == null ? void 0 : F.type) === "add-image-file") {
              ge(F.file);
              return;
            }
            G.apply(F) && D();
            return;
          }
          if ((F == null ? void 0 : F.type) === "toggle-aspect") {
            W.aspectOpen = !W.aspectOpen;
            return;
          }
          if ((F == null ? void 0 : F.type) === "close-aspect") {
            W.aspectOpen = !1;
            return;
          }
          let he = F;
          if ((F == null ? void 0 : F.type) === "add-frame") {
            const Ve = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            he = {
              ...F,
              ...m_(Ve, {
                width: m.width,
                height: m.height
              })
            };
          } else if ((F == null ? void 0 : F.type) === "delete-frame") {
            const Ve = ci(bn(e));
            Ve && (e.__panoPreviewView = jm(Ve, {
              width: m.width,
              height: m.height
            }));
          }
          const Ae = ((Ce = e.__panoCutoutNodeFrame) == null ? void 0 : Ce.safeRect) || null;
          W.aspectOpen = !1, G.apply({ ...he, safeRect: Ae }) && D();
        }
      }), O.mount(T), Z = !0;
    } catch {
      O = null, Z = !1;
    }
  const ae = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    $ && te(), D();
  }) : null;
  ae == null || ae.observe(p);
  const ye = (F) => {
    var Ae, Oe;
    H.raf = 0, H.inTick = !0;
    let he = !1;
    try {
      he = ve.stepInertia(F), (H.needsDraw || he) && (H.needsDraw = !1, $ ? te() : re(), (Ae = e.flags) != null && Ae.collapsed || uw(e, m, P), W.viewUnavailable = P.failed);
    } finally {
      H.inTick = !1;
    }
    (he || H.needsDraw) && !H.raf && (H.raf = requestAnimationFrame(ye)), PS() && (!e.__panoDebugLastTs || F - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = F, e.__panoPreviewMode, Gc(e), Po(f), Po(p), Po(m), Po(f.parentElement), Po((Oe = f.parentElement) == null ? void 0 : Oe.parentElement), Number(m.width || 0), Number(m.height || 0), void 0);
  }, ve = xu({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (F) => {
      e.__panoPreviewView = F;
    },
    getViewportSize: () => {
      const F = m.getBoundingClientRect();
      return {
        w: Math.max(1, Number(F.width || m.clientWidth || 0)),
        h: Math.max(1, Number(F.height || m.clientHeight || 0))
      };
    },
    getInvert: () => {
      const F = Nf();
      return {
        x: F.invert_view_x ? -1 : 1,
        y: F.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      D();
    }
  }), I = i ? p : f, se = (F) => {
    const he = m.getBoundingClientRect();
    return {
      x: (Number(F.clientX) - he.left) * (m.width / Math.max(1, he.width)),
      y: (Number(F.clientY) - he.top) * (m.height / Math.max(1, he.height))
    };
  }, g = (F) => {
    var Oe, Re;
    if (!i || !o) return;
    const he = bn(e), Ae = wf(
      Lc(he, js(e)),
      String(((Oe = he == null ? void 0 : he.active) == null ? void 0 : Oe.selected_sticker_id) || ""),
      se(F),
      Bc(e, m.width, m.height)
    );
    if (!Ae) {
      m.style.cursor = "grab";
      return;
    }
    if (((Re = Ae.item) == null ? void 0 : Re.locked) === !0) {
      m.style.cursor = "default";
      return;
    }
    m.style.cursor = Ae.hit.cursor || "default";
  };
  m.addEventListener("pointerdown", (F) => {
    var je, Ye, $e, He, $t, _t, kt, pt, Xt, Dn, gn;
    if (!Ln(F, I) || F.button !== 0) return;
    if (!i) {
      const zt = ci(bn(e)), We = e.__panoCutoutNodeFrame;
      if (!zt) {
        (je = f.focus) == null || je.call(f, { preventScroll: !0 }), (Ye = m.setPointerCapture) == null || Ye.call(m, F.pointerId), m.style.cursor = "grabbing", ve.startDrag(F.clientX, F.clientY, F.pointerId);
        return;
      }
      if (zt.locked === !0 || !We || !G) return;
      const Nn = se(F);
      let Cn;
      if (F.shiftKey) {
        const er = Gm({
          frame: We,
          point: Nn,
          startRollDeg: Number(zt.roll_deg ?? zt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!er) return;
        Cn = { kind: "roll", pointerId: F.pointerId, rollGesture: er };
      } else {
        const er = (($e = bn(e)) == null ? void 0 : $e.ui_settings) || Nf();
        Cn = {
          kind: "pan",
          pointerId: F.pointerId,
          startPoint: Nn,
          startShot: { ...zt },
          focalPx: di(We, zt),
          invertX: er.invert_view_x === !0,
          invertY: er.invert_view_y === !0
        };
      }
      ue(), (He = f.focus) == null || He.call(f, { preventScroll: !0 }), ($t = m.setPointerCapture) == null || $t.call(m, F.pointerId), m.style.cursor = "grabbing", G.beginGesture(), ee = Cn;
      return;
    }
    if (!o) return;
    const he = se(F), Ae = bn(e), Oe = String(((_t = Ae == null ? void 0 : Ae.active) == null ? void 0 : _t.selected_sticker_id) || ""), Re = Bc(e, m.width, m.height);
    (kt = f.focus) == null || kt.call(f, { preventScroll: !0 });
    const Ce = () => wf(Lc(Ae, js(e)), Oe, he, Re);
    let Ve = Ce();
    if (Ve && ($ != null && $.playback.playing) && (ce(), Ve = Ce()), Ve && G) {
      if (ve.stopMotion(), ue(), String(((pt = Ve.item) == null ? void 0 : pt.id) || "") !== Oe && G.apply({ type: "select-sticker", id: Ve.item.id }), ((Xt = Ve.item) == null ? void 0 : Xt.locked) === !0) {
        D();
        return;
      }
      const zt = he, We = Ve.geometry.center;
      S = {
        active: !0,
        kind: Ve.hit.kind,
        pointerId: F.pointerId,
        startPoint: zt,
        startCenter: { ...We },
        startSticker: { ...Ve.item },
        startDistance: Math.max(1, Math.hypot(zt.x - We.x, zt.y - We.y)),
        startAngle: Math.atan2(zt.y - We.y, zt.x - We.x),
        projection: Re
      }, G.beginGesture(), (Dn = m.setPointerCapture) == null || Dn.call(m, F.pointerId), m.style.cursor = Ve.hit.kind === "rotate" ? "grabbing" : Ve.hit.kind === "move" ? "move" : Ve.hit.cursor, D();
      return;
    }
    (gn = m.setPointerCapture) == null || gn.call(m, F.pointerId), m.style.cursor = "grabbing", ve.startDrag(F.clientX, F.clientY, F.pointerId);
  }), m.addEventListener("pointermove", (F) => {
    if (!i) {
      if (!ee) {
        if (!ve.state.drag.active) return;
        Ln(F, I), ve.moveDrag(F.clientX, F.clientY, "pano");
        return;
      }
      if (ee.pointerId !== F.pointerId || !G) return;
      if (Ln(F, I), ee.kind === "pan") {
        const Ae = se(F);
        G.updateGesture({
          type: "pan-camera",
          startShot: ee.startShot,
          dx: Ae.x - ee.startPoint.x,
          dy: Ae.y - ee.startPoint.y,
          focalPx: ee.focalPx,
          invertX: ee.invertX,
          invertY: ee.invertY
        });
        return;
      }
      const he = Wm(ee.rollGesture, se(F), F);
      if (!he) return;
      ee.rollGesture = he.gesture, G.updateGesture({ type: "set-roll", value: he.rollDeg });
      return;
    }
    if (!S && !ve.state.drag.active) {
      g(F);
      return;
    }
    if (S) {
      if (S.pointerId !== F.pointerId || !G) return;
      Ln(F, I);
      const he = se(F);
      let Ae = S.startSticker;
      if (S.kind === "move")
        Ae = q_(
          S.startSticker,
          {
            x: S.startCenter.x + he.x - S.startPoint.x,
            y: S.startCenter.y + he.y - S.startPoint.y
          },
          S.projection
        );
      else if (S.kind === "scale") {
        const Oe = Math.hypot(he.x - S.startCenter.x, he.y - S.startCenter.y);
        Ae = X_(S.startSticker, S.startDistance, Oe);
      } else if (S.kind === "rotate") {
        const Oe = Math.atan2(he.y - S.startCenter.y, he.x - S.startCenter.x);
        Ae = J_(S.startSticker, S.startAngle, Oe, F.shiftKey === !0);
      }
      G.updateGesture({ type: "set-transform", value: Ae }), D();
      return;
    }
    !o || !ve.state.drag.active || (Ln(F, I), ve.moveDrag(F.clientX, F.clientY, "pano"));
  });
  const _ = () => {
    var he, Ae;
    if (!ee && !S) {
      if (!ve.state.drag.active) return;
      ve.endDrag(), m.style.cursor = "grab", D();
      return;
    }
    if (!G) return;
    const F = (ee == null ? void 0 : ee.pointerId) ?? (S == null ? void 0 : S.pointerId);
    ee = null, S = null;
    try {
      (he = m.hasPointerCapture) != null && he.call(m, F) && ((Ae = m.releasePointerCapture) == null || Ae.call(m, F));
    } catch {
    }
    G.cancelGesture(), m.style.cursor = "grab", D();
  }, R = (F, he = !1) => {
    var Ae, Oe, Re, Ce;
    if (!i) {
      if (!ee) {
        if (!ve.state.drag.active) return;
        Ln(F, I), (Ae = m.releasePointerCapture) == null || Ae.call(m, F.pointerId), m.style.cursor = "grab", ve.endDrag(), D();
        return;
      }
      if (ee.pointerId !== F.pointerId || !G) return;
      Ln(F, I), ee = null, (Oe = m.releasePointerCapture) == null || Oe.call(m, F.pointerId), m.style.cursor = "grab", he ? G.cancelGesture() : G.commitGesture(), g(F), D();
      return;
    }
    if (S) {
      if (S.pointerId !== F.pointerId || !G) return;
      Ln(F, I), S = null, (Re = m.releasePointerCapture) == null || Re.call(m, F.pointerId), m.style.cursor = "grab", he ? G.cancelGesture() : G.commitGesture(), D();
      return;
    }
    !o || !ve.state.drag.active || (Ln(F, I), (Ce = m.releasePointerCapture) == null || Ce.call(m, F.pointerId), m.style.cursor = "grab", ve.endDrag(), D());
  };
  m.addEventListener("pointerup", R), m.addEventListener("pointercancel", (F) => R(F, !0)), m.addEventListener("lostpointercapture", _), m.addEventListener("pointerleave", (F) => {
    !i && ee || S || ve.state.drag.active && R(F);
  });
  const Y = (F) => {
    const he = document.activeElement;
    if (he !== f && !f.contains(he)) return;
    if (F.key === "Escape" && (ee || S) && G) {
      _(), Uc(F);
      return;
    }
    if (!i || F.key !== "Delete" && F.key !== "Backspace" || !G) return;
    const Ae = F.target, Oe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Oe === "INPUT" || Oe === "TEXTAREA" || Ae != null && Ae.isContentEditable || W.canDelete === !0 && (ce(), ue(), G.apply({ type: "delete-selected" }) && D(), Uc(F));
  };
  window.addEventListener("keydown", Y, !0);
  const w = SS({
    requestFrame: (F) => requestAnimationFrame(F),
    cancelFrame: (F) => cancelAnimationFrame(F),
    restore: (F) => pw(F)
  }), k = (F) => {
    var Ae, Oe, Re, Ce, Ve, je;
    if (!Ln(F, I)) return;
    if (!i) {
      const Ye = ci(bn(e));
      if (Ye && Ye.locked !== !0 && G) {
        const $e = Ss(F);
        $e !== 0 && (de || (ue(), G.beginGesture(), de = !0), G.updateGesture({
          type: "step-fov",
          direction: $e
        }) ? (K && clearTimeout(K), K = setTimeout(q, 180), D()) : G.hasGestureChanges() || (G.cancelGesture(), de = !1));
      } else if (!Ye) {
        const $e = Ff();
        ve.applyWheelEvent(F) && D(), w.schedule($e);
      }
      (Ae = F.preventDefault) == null || Ae.call(F), (Oe = F.stopPropagation) == null || Oe.call(F), (Re = F.stopImmediatePropagation) == null || Re.call(F);
      return;
    }
    if (!o) return;
    const he = Ff();
    ve.applyWheelEvent(F) && D(), (Ce = F.preventDefault) == null || Ce.call(F), (Ve = F.stopPropagation) == null || Ve.call(F), (je = F.stopImmediatePropagation) == null || je.call(F), w.schedule(he);
  }, L = i ? [p, m] : [p];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((F) => {
    L.forEach((he) => he.addEventListener(F, k, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((F) => {
    m.addEventListener(F, (he) => Ln(he, I)), p.addEventListener(F, (he) => Ln(he, I));
  });
  const x = ji(e, "state_json");
  let N = null, C = null;
  x && !x.__panoPreviewPatchedCb && (N = x.callback, C = (F) => {
    const he = N ? N(F) : void 0;
    return D(), he;
  }, x.callback = C, x.__panoPreviewPatchedCb = C);
  const B = ji(e, "bg_color");
  let J = null, oe = null;
  B && !B.__panoPreviewPatchedCb && (J = B.callback, oe = (F) => {
    const he = J ? J(F) : void 0;
    return D(), he;
  }, B.callback = oe, B.__panoPreviewPatchedCb = oe);
  const z = e.onRemoved, le = e.onResize, Se = e.onExecuted, Me = e.onDragOver, fe = e.onDragDrop;
  let be = null;
  const _e = () => {
    i && (W.dropActive = !0, be && clearTimeout(be), be = setTimeout(() => {
      be = null, W.dropActive = !1;
    }, 140));
  }, h = i ? function(F) {
    return (Me ? Me.apply(this, arguments) : !1) === !0 ? !0 : rd(F == null ? void 0 : F.dataTransfer) ? (_e(), !0) : !1;
  } : null, j = i ? function(F) {
    var Oe;
    if ((fe ? fe.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Oe = F == null ? void 0 : F.dataTransfer) == null ? void 0 : Oe.files) || []).find((Re) => Yn(Re));
    return Ae ? (be && clearTimeout(be), be = null, W.dropActive = !1, ge(Ae), !0) : !1;
  } : null;
  i && (e.onDragOver = h, e.onDragDrop = j);
  const A = i ? _S(f, {
    onActive: (F) => {
      if (F) {
        _e();
        return;
      }
      be && clearTimeout(be), be = null, W.dropActive = !1;
    },
    onDrop: (F) => {
      ge(F);
    }
  }) : () => {
  }, v = function(F) {
    e.__panoOutputFromRun = !0;
    const he = sg(e, F);
    Ar(e, he ? "executed" : "sync", F), D();
    const Ae = Se ? Se.apply(this, arguments) : void 0;
    return Fo(e), Ae;
  };
  e.onExecuted = v;
  const V = e.onConnectionsChange, M = function(F, he) {
    const Ae = uf(e, F, he, Ku), Oe = uf(e, F, he, Kr), Re = arguments, Ce = V ? V.apply(this, Re) : void 0, Ve = () => {
      H.destroyed || (Oe && US(e), Ae && Ar(e, "connection-change"), Fo(e), D());
    };
    return Ve(), queueMicrotask(Ve), Ce;
  };
  e.onConnectionsChange = M;
  const X = function() {
    const F = le ? le.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, D(), F;
  };
  e.onResize = X;
  const Q = function() {
    return we(), Kc.unregister(this), z ? z.apply(this, arguments) : void 0;
  };
  e.onRemoved = Q;
  const we = () => {
    var F, he, Ae, Oe, Re, Ce, Ve, je, Ye;
    H.destroyed = !0, (F = ae == null ? void 0 : ae.disconnect) == null || F.call(ae), i ? ue() : Pe(), m.removeEventListener("lostpointercapture", _), A(), b(), window.removeEventListener("keydown", Y, !0), (Ae = (he = e.__panoStateFlushers) == null ? void 0 : he.delete) == null || Ae.call(he, ne), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Oe = G == null ? void 0 : G.destroy) == null || Oe.call(G), (Re = O == null ? void 0 : O.unmount) == null || Re.call(O), $ && ($.playback.dispose(), $.video.remove(), $.stickerVideo.remove(), e.__panoSurfacePlayback === $ && (e.__panoSurfacePlayback = null)), P.dispose(), e.__panoSurfaceScene = null, (Ve = (Ce = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ce.dispose) == null || Ve.call(Ce), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, pe(), w.dispose(), be && clearTimeout(be), be = null, id.disposeOwner(e), Hi(e), H.raf && cancelAnimationFrame(H.raf), H.raf = 0, ((je = e.__panoCutoutNodeSurface) == null ? void 0 : je.session) === G && (e.__panoCutoutNodeSurface = null), ((Ye = e.__panoStickersNodeSurface) == null ? void 0 : Ye.session) === G && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === X && (e.onResize = le), e.onExecuted === v && (e.onExecuted = Se), e.onConnectionsChange === M && (e.onConnectionsChange = V), C && (x == null ? void 0 : x.callback) === C && (x.callback = N), C && (x == null ? void 0 : x.__panoPreviewPatchedCb) === C && delete x.__panoPreviewPatchedCb, oe && (B == null ? void 0 : B.callback) === oe && (B.callback = J), oe && (B == null ? void 0 : B.__panoPreviewPatchedCb) === oe && delete B.__panoPreviewPatchedCb, e.onDragOver === h && (e.onDragOver = Me), e.onDragDrop === j && (e.onDragDrop = fe), e.onRemoved === Q && (e.onRemoved = z);
  };
  e.__panoDomRestore = we, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = G && Z && !i ? { session: G, model: W } : null, e.__panoStickersNodeSurface = G && Z && i ? { session: G, model: W } : null, e.__panoDomPreview = {
    widget: U,
    root: f,
    canvas: m,
    requestDraw: D,
    state: H,
    emptyHintEl: y,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Kc.register(e), e.graph && Ar(e, "attach"), D();
}
function Df(e, t = {}) {
  ng(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Lf(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (tg(e) && !r) {
    od(e);
    return;
  }
  ng(e).attach(t);
}
function _w(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Sw(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, a = Number(e == null ? void 0 : e.width), s = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(s) ? s : 0) * o, u = Number(r), c = u > 0 ? u : 1 / 0, f = Math.max(l, d);
  let p = f > 0 ? Math.min(1, c / f) : 1;
  return n && l > 0 && d > 0 && (p = Math.min(p, n.width * o / l, n.height * o / d)), {
    width: Math.max(1, Math.round(l * p)),
    height: Math.max(1, Math.round(d * p))
  };
}
function ww({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var p;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let a = !1, s = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, d = () => {
    const m = l();
    return m === s || (s = m, i(m)), m;
  }, u = () => d();
  return (p = t == null ? void 0 : t.addEventListener) == null || p.call(t, "fullscreenchange", u), d(), { toggle: async () => {
    var m;
    if (a || !e || !t) return !1;
    if (l()) {
      try {
        await ((m = t.exitFullscreen) == null ? void 0 : m.call(t));
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
    var m, y, b;
    if (!a) {
      if (a = !0, (m = t == null ? void 0 : t.removeEventListener) == null || m.call(t, "fullscreenchange", u), l())
        try {
          const T = (y = t.exitFullscreen) == null ? void 0 : y.call(t);
          (b = T == null ? void 0 : T.catch) == null || b.call(T, () => {
          });
        } catch {
        }
      s = !1, i(!1);
    }
  } };
}
const xw = { class: "pano-preview-node-surface" }, kw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), Le("div", xw, [
      Ke(Yt, {
        icon: e.model.fullscreen ? et(ze).fullscreen_close : et(ze).fullscreen,
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
      e.model.viewUnavailable ? (Te(), Hn(Zu, { key: 0 })) : ut("", !0)
    ]));
  }
}, Ga = 140, Mw = 180, Vf = 40, Jl = 10;
function Rf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function $f(e, t) {
  const r = Rf(e), n = Rf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function zf(e) {
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
  return typeof ((o = ln) == null ? void 0 : o.apiURL) == "function" ? ln.apiURL(i) : i;
}
function Gi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Gi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return zf({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Gi(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : zf(e);
}
function lg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Pw(e) {
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
function Yc(e) {
  var i;
  const t = (i = qn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if ($f(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if ($f(o, r)) return t[o];
  return null;
}
function Nw(e) {
  var n, i;
  const t = Yc(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Gi(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function Cw(e, t = "erp_image") {
  var p, m, y, b, T, U, H;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((D) => String((D == null ? void 0 : D.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((D, P) => String((D == null ? void 0 : D.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(P))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (y = (m = (p = qn) == null ? void 0 : p.graph) == null ? void 0 : m.getNodeById) == null ? void 0 : y.call(m, o), s = Yc(o), l = Yc(e == null ? void 0 : e.id), d = [
    (b = l == null ? void 0 : l.ui) == null ? void 0 : b.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (T = s == null ? void 0 : s.ui) == null ? void 0 : T.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const D of d)
    if (Array.isArray(D))
      for (const P of D) {
        const W = Gi(P);
        if (W) return W;
      }
  let u = [];
  try {
    u = typeof ((U = qn) == null ? void 0 : U.getNodeImageUrls) == "function" ? qn.getNodeImageUrls(a) || [] : [];
  } catch {
    u = [];
  }
  if (Array.isArray(u) && u.length > 0)
    for (const D of u) {
      const P = Gi(D);
      if (P) return P;
    }
  if (a) {
    const D = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const P of D) {
      const W = Gi(P);
      if (W) return W;
    }
  }
  const c = (H = a == null ? void 0 : a.widgets) == null ? void 0 : H.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image"), f = String((c == null ? void 0 : c.value) || "").trim();
  return f ? ln.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Zl(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function jf(e, t, r, n, i, o, a) {
  var d, u, c;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !lg(o) || r <= 1 || n <= 1) {
    Zl(t, r, n);
    return;
  }
  if (a.failed) {
    Zl(t, r, n);
    return;
  }
  const s = Number(((c = (u = (d = e == null ? void 0 : e.widgets) == null ? void 0 : d.find) == null ? void 0 : u.call(d, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, l = a.render({
    width: r,
    height: n,
    camera: Os(i, r, n),
    background: { media: o, revision: Pw(o), coverage: s },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Zl(t, r, n);
}
function Hf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Aw {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = fm(() => this.requestDraw()), this.controller = xu({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Vt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ee(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ee(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
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
        `min-height:${Ga}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = dn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Ga;
        },
        getHeight() {
          return Ga;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Vs(jc(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Ga, Number(o.minHeight || 0)),
            minWidth: Math.max(Mw, Number(o.minWidth || 0))
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
      return td(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ji({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = ww({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = yu(kw, {
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
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (a = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || a.call(o), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = ch(r), t.addEventListener("pointerdown", (o) => {
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
      _w(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !lg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Rc(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = qn.canvas) != null && n.graph) || this.node.graph === qn.canvas.graph);
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
      return Hf(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, d, u, c, f, p;
      const o = ZS(this, r, n, i), a = t.getLegacyPreviewRect();
      if (!o || !Hf(o.x, o.y, a))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const s = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((d = t.view) == null ? void 0 : d.fov) || 100), s && ((u = this.setDirtyCanvas) == null || u.call(this, !0, !1)), (c = r == null ? void 0 : r.preventDefault) == null || c.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (p = r == null ? void 0 : r.stopImmediatePropagation) == null || p.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, a;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Jl * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Vf - Jl);
    return { x: Jl, y: Vf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), jf(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? dm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Sw(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, a;
    const t = Nw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const s = ol(document, "preview-node.video");
      s.muted = !0, s.loop = !0, s.preload = "auto", s.playsInline = !0, s.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = s, this.requestDraw());
      }, d = () => this.requestDraw();
      s.addEventListener("loadedmetadata", l), s.addEventListener("loadeddata", l), s.addEventListener("timeupdate", d), s.addEventListener("play", d), s.addEventListener("pause", d), s.src = t, s.load(), this.mediaCleanup = () => {
        s.pause(), s.removeEventListener("loadedmetadata", l), s.removeEventListener("loadeddata", l), s.removeEventListener("timeupdate", d), s.removeEventListener("play", d), s.removeEventListener("pause", d), s.removeAttribute("src"), s.load();
      };
      return;
    }
    const r = Cw(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), jf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, d, u, c, f, p, m, y, b, T;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (d = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || d.call(l), this.surfaceApp = null, (c = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || c.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (m = (p = this.root) == null ? void 0 : p.remove) == null || m.call(p);
    } catch {
    }
    try {
      Qm(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((T = (b = (y = this.node) == null ? void 0 : y.widgets) == null ? void 0 : b.find) == null ? void 0 : T.call(b, (U) => (U == null ? void 0 : U.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Iw(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new Aw(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function cg(e, t, r) {
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
function sd(e) {
  return !!(e != null && e.prototype);
}
function sa(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Ew(e, t = {}) {
  sd(e) || Iw(e, {
    ...t,
    onOpen: sa(e, t.onOpen)
  });
}
function Ow(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!sd(e)) {
    Lf(e, {
      ...n,
      onOpen: sa(e, t.onOpen)
    });
    return;
  }
  cg(e, "stickers_node_preview", (i) => {
    Lf(i, {
      ...n,
      onOpen: sa(i, t.onOpen)
    });
  });
}
function Fw(e, t = {}) {
  if (!sd(e)) {
    Df(e, {
      ...t,
      onOpen: sa(e, t.onOpen)
    });
    return;
  }
  cg(e, "cutout_preview", (r) => {
    Df(r, {
      ...t,
      onOpen: sa(r, t.onOpen)
    });
  });
}
const Sn = {
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
}, xr = "pen";
function Gf(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Tw({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const ft = Object.freeze({
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
}), Dw = new Set(Object.values(ft));
function Lw({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, a = !1, s = !1, l = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = 1, c = 0;
  function f(y) {
    try {
      y();
    } catch (b) {
      i(b);
    }
  }
  function p() {
    !o && !a && !s && (o = e(m));
  }
  function m(y) {
    o = 0, a = !0;
    try {
      const b = d;
      d = /* @__PURE__ */ new Map();
      for (const U of b.values()) f(() => U(y));
      if (s) return;
      const T = l;
      l = /* @__PURE__ */ new Set(), (T.size || n()) && f(() => r(y, T));
    } finally {
      a = !1;
    }
    (l.size || d.size || n()) && p();
  }
  return {
    requestDraw(y) {
      if (!Dw.has(y)) throw new Error(`Unknown draw reason: ${y}`);
      y === ft.STATE && (c += 1), l.add(y), p();
    },
    requestFrame(y) {
      const b = u++;
      return d.set(b, y), p(), b;
    },
    cancelFrame(y) {
      d.delete(y);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      p();
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
const Vw = { class: "pano-floating-right" }, Rw = {
  key: 0,
  class: "pano-floating-space"
}, $w = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, zw = ["data-settled"], jw = ["data-ready", "data-settled"], Hw = ["aria-label", "data-tip"], Gw = {
  key: 1,
  class: "pano-camera-preview-label"
}, Ww = {
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
    return (t, r) => (Te(), Le(Je, null, [
      Ne("div", Vw, [
        e.space ? Cr((Te(), Le("div", Rw, [
          Ne("div", $w, [
            (Te(!0), Le(Je, null, xt(e.space.modes, (n) => (Te(), Hn(Yt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ke(Yt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [ui, e.space.visible]
        ]) : ut("", !0),
        (Te(!0), Le(Je, null, xt(e.buttons, (n) => (Te(), Hn(Yt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Cr(Ne("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Ne("div", {
          class: ct(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Pt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Ne("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Ne("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Te(), Le("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ke(Dt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Hw)) : ut("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), Le("div", Gw, rt(e.preview.label || "Preview unavailable"), 1)) : ut("", !0)
        ], 14, jw)
      ], 8, zw), [
        [ui, e.preview.visible]
      ])
    ], 64));
  }
}, Kw = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Bw = ["y2", "transform"], Uw = ["transform"], Yw = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = st(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Cr((Te(), Le("div", {
      class: ct(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), Le("svg", Kw, [
        o[1] || (o[1] = Ne("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), Le(Je, null, xt(et(r), (a) => (Te(), Le("line", {
          key: a,
          class: ct(["pano-frame-roll-knob-tick", { zero: a === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: a % 45 === 0 ? 7 : 6,
          transform: `rotate(${a} 20 20)`
        }, null, 10, Bw))), 128)),
        Ne("g", { transform: n.value }, [...o[0] || (o[0] = [
          Ne("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Uw),
        o[2] || (o[2] = Ne("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [ui, e.model.visible === !0]
    ]);
  }
}, qw = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", {
      class: ct(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ke(Bm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ke(Yt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ke(Yw, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Xw = ["aria-label"], Jw = { class: "pano-canvas-confirm-title" }, Zw = { class: "pano-canvas-confirm-text" }, Qw = { class: "pano-canvas-confirm-actions" }, ex = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, tx = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Gt(null), n = /* @__PURE__ */ Gt(null);
    let i = null;
    function o() {
      const c = n.value;
      return c ? Array.from(c.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function a(c) {
      const f = n.value;
      if (!f) return;
      const p = f.querySelector(`[data-action='${c}']`);
      p instanceof HTMLButtonElement && p.click();
    }
    function s() {
      var y;
      const c = n.value;
      if (!c) return;
      const f = c.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const m = o()[0] || c;
      (y = m == null ? void 0 : m.focus) == null || y.call(m);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function d(c) {
      var T;
      if (c.defaultPrevented) return;
      if (c.key === "Escape") {
        c.preventDefault(), c.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (c.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        c.preventDefault(), (T = p == null ? void 0 : p.focus) == null || T.call(p);
        return;
      }
      const m = f[0], y = f[f.length - 1], b = document.activeElement;
      if (c.shiftKey) {
        (b === m || b === p || !(p != null && p.contains(b))) && (c.preventDefault(), y.focus());
        return;
      }
      (b === y || !(p != null && p.contains(b))) && (c.preventDefault(), m.focus());
    }
    function u(c) {
      c.target === r.value && a("confirm-cancel");
    }
    return ai(() => t.model.visible, (c, f) => {
      if (c) {
        i = document.activeElement, Qs(() => {
          s();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), da(() => {
      l();
    }), (c, f) => e.model.visible === !0 ? (Te(), Le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Et(u, ["self"])
    }, [
      Ne("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: d
      }, [
        Ne("div", Jw, rt(e.model.title), 1),
        Ne("div", Zw, rt(e.model.text), 1),
        Ne("div", Qw, [
          f[0] || (f[0] = Ne("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Ne("button", ex, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Xw)
    ], 512)) : ut("", !0);
  }
}, nx = ["data-paint-pane"], rx = ["hidden"], ix = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], ox = ["aria-pressed", "disabled"], ax = ["hidden"], sx = { class: "pano-paint-color-pop-head" }, lx = { class: "pano-paint-color-field" }, cx = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, ux = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, dx = { class: "pano-paint-color-field" }, fx = { class: "pano-paint-alpha-wrap" }, px = ["value"], hx = { "data-paint-alpha-value": "" }, mx = ["hidden"], gx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, yx = ["data-paint-history-index", "aria-label", "disabled"], bx = ["data-paint-footer"], vx = ["data-paint-group"], _x = ["hidden"], Sx = ["value", "disabled"], wx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, xx = ["hidden"], kx = {
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
    return (n, i) => (Te(), Le("div", {
      class: ct(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), Le(Je, null, xt(e.panes, (o) => {
        var a;
        return Te(), Le("div", {
          key: o.key,
          class: ct(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), Le("div", {
            key: 0,
            class: ct(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), Le(Je, null, xt(e.paintSwatches, (s) => (Te(), Le("button", {
              key: s.id,
              class: ct(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: Pt(t(s)),
              "aria-pressed": e.state.activeSwatchId === s.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, ix))), 128)),
            Ne("button", {
              class: ct(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Pt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, ox),
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
              Ne("div", sx, [
                Ne("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Pt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", lx, [
                Ne("div", cx, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Pt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", ux, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Pt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Ne("label", dx, [
                i[1] || (i[1] = Ne("span", null, "Opacity", -1)),
                Ne("div", fx, [
                  Ne("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, px),
                  Ne("span", hx, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Ne("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Ne("div", gx, [
                  (Te(!0), Le(Je, null, xt(e.state.historyEntries || [], (s) => (Te(), Le("button", {
                    key: s.index,
                    class: ct(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Pt(r(s.color))
                  }, null, 14, yx))), 128))
                ])
              ], 8, mx)
            ], 12, ax)
          ], 10, rx)) : ut("", !0),
          Ne("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Ne("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), Le(Je, null, xt(o.tools, (s) => {
                var l;
                return Te(), Hn(Yt, {
                  key: `${o.key}-${s.key}`,
                  icon: s.icon,
                  label: s.label,
                  tip: s.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === s.key },
                  attrs: { [s.attr]: s.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, vx),
            Ne("div", {
              class: ct(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
              }, null, 12, Sx),
              Ne("span", wx, rt(e.state.sizeText || "10"), 1)
            ], 10, _x),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Ke(Yt, {
                icon: et(ze).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, xx)
          ], 8, bx)
        ], 10, nx);
      }), 128))
    ], 2));
  }
}, Mx = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Gt(null), n = /* @__PURE__ */ Gt(null), i = /* @__PURE__ */ Gt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Te(), Le(Je, null, [
      Ne("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Ne("div", {
        ref_key: "sizePreviewRef",
        ref: n,
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
}, Px = ["aria-label"], Nx = ["data-tip", "aria-pressed"], Cx = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = st(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Te(), Le("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Pt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), Le(Je, null, xt(e.buttons, (o) => (Te(), Le("button", wr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, Nx))), 128))
    ], 12, Px));
  }
}, Ax = {
  key: 0,
  class: "pano-cutout-menu"
}, Ix = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Ex = ["data-aspect"], Ox = ["data-action", "aria-label", "data-tip", "disabled"], Fx = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Pt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), Le(Je, null, xt(e.model.items || [], (n) => (Te(), Le(Je, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), Le("div", Ax, [
          Ne("button", Ix, [
            Ke(Dt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: ct(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), Le(Je, null, xt(n.choices || [], (i) => (Te(), Le("button", {
              key: i.value,
              class: ct(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, rt(i.label), 11, Ex))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), Hn(Cx, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), Le("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ke(Dt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, Ox))
      ], 64))), 128))
    ], 4));
  }
}, Tx = {
  key: 0,
  class: "pano-easing"
}, Dx = { class: "pano-section-title" }, Lx = { class: "pano-easing-range" }, Vx = { class: "pano-easing-modes" }, Rx = ["aria-pressed", "onClick"], $x = ["viewBox"], zx = ["x", "y"], jx = ["x1", "y1", "x2", "y2"], Hx = ["d"], Gx = ["x1", "y1", "x2", "y2"], Wx = ["x1", "y1", "x2", "y2"], Kx = ["cx", "cy"], Bx = ["cx", "cy"], Ux = { class: "pano-easing-note" }, vr = 132, Zr = 14, Yx = {
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
    ], o = /* @__PURE__ */ Gt(null), a = st(() => {
      var m;
      return Array.isArray((m = r.model) == null ? void 0 : m.easing) ? r.model.easing : null;
    }), s = (m) => Zr + m * vr, l = (m) => Zr + (1 - m) * vr, d = st(() => {
      var U;
      if (((U = r.model) == null ? void 0 : U.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [m, y, b, T] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(m)} ${l(y)} ${s(b)} ${l(T)} ${s(1)} ${l(1)}`;
    }), u = st(() => a.value ? a.value.map((m) => m.toFixed(2)).join(", ") : "");
    function c(m) {
      var y;
      return JSON.stringify(m.easing) === JSON.stringify((y = r.model) == null ? void 0 : y.easing);
    }
    function f(m, y) {
      n("timeline", { type: "easing", easing: m, commit: y });
    }
    function p(m, y) {
      var D;
      if (m.button !== 0 || !a.value) return;
      const b = m.currentTarget;
      (D = b.setPointerCapture) == null || D.call(b, m.pointerId);
      let T = null;
      const U = (P) => {
        const W = o.value.getBoundingClientRect(), $ = W.width / (vr + Zr * 2), te = ((P.clientX - W.left) / $ - Zr) / vr, re = 1 - ((P.clientY - W.top) / $ - Zr) / vr;
        T = [...T || a.value], T[y] = Math.round(Math.min(1, Math.max(0, te)) * 100) / 100, T[y + 1] = Math.round(Math.min(1, Math.max(0, re)) * 100) / 100, f(T, !1);
      }, H = () => {
        b.removeEventListener("pointermove", U), b.removeEventListener("pointerup", H), b.removeEventListener("pointercancel", H), T && f(T, !0);
      };
      b.addEventListener("pointermove", U), b.addEventListener("pointerup", H), b.addEventListener("pointercancel", H);
    }
    return (m, y) => e.model ? (Te(), Le("div", Tx, [
      Ne("div", Dx, [
        y[2] || (y[2] = Ne("span", null, "Easing", -1)),
        Ne("span", Lx, rt(e.model.label), 1)
      ]),
      Ne("div", Vx, [
        (Te(), Le(Je, null, xt(i, (b) => Ne("button", {
          key: b.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": c(b) ? "true" : "false",
          onClick: (T) => f(b.easing, !0)
        }, rt(b.label), 9, Rx)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Te(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${vr + Zr * 2} ${vr + Zr * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Ne("rect", {
          class: "pano-easing-square",
          x: s(0),
          y: l(1),
          width: vr,
          height: vr
        }, null, 8, zx),
        Ne("line", {
          class: "pano-easing-diagonal",
          x1: s(0),
          y1: l(0),
          x2: s(1),
          y2: l(1)
        }, null, 8, jx),
        Ne("path", {
          class: "pano-easing-curve",
          d: d.value
        }, null, 8, Hx),
        a.value ? (Te(), Le(Je, { key: 0 }, [
          Ne("line", {
            class: "pano-easing-arm",
            x1: s(0),
            y1: l(0),
            x2: s(a.value[0]),
            y2: l(a.value[1])
          }, null, 8, Gx),
          Ne("line", {
            class: "pano-easing-arm",
            x1: s(1),
            y1: l(1),
            x2: s(a.value[2]),
            y2: l(a.value[3])
          }, null, 8, Wx),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[0]),
            cy: l(a.value[1]),
            r: "6",
            onPointerdown: y[0] || (y[0] = (b) => p(b, 0))
          }, null, 40, Kx),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: y[1] || (y[1] = (b) => p(b, 2))
          }, null, 40, Bx)
        ], 64)) : ut("", !0)
      ], 8, $x)) : ut("", !0),
      Ne("div", Ux, [
        e.model.mixed ? (Te(), Le(Je, { key: 0 }, [
          Co("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), Le(Je, { key: 1 }, [
          Co("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), Le(Je, { key: 2 }, [
          Co("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Te(), Le(Je, { key: 3 }, [
          Co("cubic-bezier(" + rt(u.value) + ")", 1)
        ], 64)) : ut("", !0)
      ])
    ])) : ut("", !0);
  }
}, qx = {
  class: "pano-side",
  "data-side": ""
}, Xx = { class: "pano-side-head" }, Jx = { class: "pano-side-title" }, Zx = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Qx = {
  key: 0,
  class: "pano-side-scroll"
}, ek = { class: "pano-inspector" }, tk = { class: "pano-ui-row pano-coverage-row" }, nk = ["data-selected"], rk = ["aria-pressed", "disabled"], ik = ["aria-pressed", "disabled"], ok = {
  key: 0,
  class: "pano-section-title"
}, ak = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, sk = {
  class: "pano-picker",
  "data-picker": "selection"
}, lk = ["disabled"], ck = { class: "pano-picker-label" }, uk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, dk = ["hidden"], fk = ["data-selection-id"], pk = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, hk = {
  key: 2,
  class: "pano-state-actions"
}, mk = ["disabled"], gk = ["data-key"], yk = { class: "pano-field-group-values" }, bk = ["title", "onPointerdown"], vk = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], _k = ["data-key"], Sk = ["min", "max", "step", "value", "disabled", "data-param-key"], wk = ["min", "max", "step", "value", "disabled", "data-param-key"], xk = ["open"], kk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Mk = { class: "pano-ui-settings-body" }, Pk = { class: "pano-ui-row" }, Nk = ["data-selected"], Ck = ["aria-pressed"], Ak = ["aria-pressed"], Ik = { class: "pano-ui-row" }, Ek = ["data-selected"], Ok = ["aria-pressed"], Fk = ["aria-pressed"], Tk = {
  key: 1,
  class: "pano-side-footer"
}, Dk = ["data-action"], Lk = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = st(() => {
      const d = r.model;
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
      if (d.button !== 0 || !c || a(u, r.model)) return;
      d.preventDefault();
      const f = d.currentTarget, p = d.clientX, m = Number(c.value) || 0;
      let y = !1;
      f.setPointerCapture(d.pointerId);
      const b = (U) => {
        if (!y && Math.abs(U.clientX - p) < 3) return;
        y = !0;
        const H = m + (U.clientX - p) * u.drag * (U.shiftKey ? 0.1 : 1);
        c.value = String(Number(H.toFixed(3))), c.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, T = () => {
        f.removeEventListener("pointermove", b), f.removeEventListener("pointerup", T), f.removeEventListener("pointercancel", T), f.removeEventListener("lostpointercapture", T), y ? c.dispatchEvent(new Event("change", { bubbles: !0 })) : c.focus();
      };
      f.addEventListener("pointermove", b), f.addEventListener("pointerup", T), f.addEventListener("pointercancel", T), f.addEventListener("lostpointercapture", T);
    }
    return (d, u) => {
      var c, f, p, m, y;
      return Te(), Le("div", qx, [
        Ne("div", Xx, [
          Ne("div", Jx, [
            Ne("span", Zx, [
              Ke(Dt, {
                icon: et(ze).globe
              }, null, 8, ["icon"])
            ]),
            Ne("span", null, rt(e.nodeTitle), 1)
          ]),
          u[1] || (u[1] = Ne("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[10] || (u[10] = Ne("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), Le("div", Qx, [
          Ne("div", ek, [
            u[9] || (u[9] = Ne("div", { class: "pano-section-title" }, [
              Ne("span", null, "Scene")
            ], -1)),
            Ne("div", tk, [
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
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((p = e.model.coverage) == null ? void 0 : p.disabled) === !0
                }, "360", 8, rk),
                Ne("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((m = e.model.coverage) == null ? void 0 : m.value) === 180 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "180", 8, ik)
              ], 8, nk)
            ]),
            e.model.transformTitle !== !1 ? (Te(), Le("div", ok, [...u[3] || (u[3] = [
              Ne("span", null, "Transform", -1)
            ])])) : ut("", !0),
            e.model.selectionPicker ? (Te(), Le("div", ak, [
              Ne("label", null, rt(e.model.selectionPicker.label), 1),
              Ne("div", sk, [
                Ne("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Ne("span", ck, [
                    e.model.selectionPicker.currentIcon ? (Te(), Le("span", uk, [
                      Ke(Dt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    Ne("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[4] || (u[4] = Ne("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, lk),
                Ne("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), Le(Je, null, xt(e.model.selectionPicker.items || [], (b) => (Te(), Le("button", {
                    key: b.id,
                    type: "button",
                    class: ct(["pano-picker-item", { active: b.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": b.id
                  }, [
                    b.icon ? (Te(), Le("span", pk, [
                      Ke(Dt, {
                        icon: b.icon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    Ne("span", null, rt(b.label), 1)
                  ], 10, fk))), 128))
                ], 8, dk)
              ])
            ])) : ut("", !0),
            e.model.copyStateButton ? (Te(), Le("div", hk, [
              Ne("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ke(Dt, {
                  icon: et(ze).copy
                }, null, 8, ["icon"]),
                Ne("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, mk)
            ])) : ut("", !0),
            Ne("div", {
              class: ct(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), Le(Je, { key: 0 }, xt(e.model.notes, (b) => (Te(), Le("div", {
                key: b,
                class: "pano-param-note"
              }, rt(b), 1))), 128)) : (Te(!0), Le(Je, { key: 1 }, xt(e.model.rows || [], (b) => (Te(), Le(Je, {
                key: b.key
              }, [
                b.grouped ? (Te(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": b.key
                }, [
                  Ne("label", null, rt(b.label), 1),
                  Ne("div", yk, [
                    (Te(!0), Le(Je, null, xt(b.fields, (T) => (Te(), Le("div", {
                      key: T.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: ct(["pano-axis", { disabled: a(T, e.model) }]),
                        title: T.label,
                        onPointerdown: (U) => l(U, T)
                      }, rt(T.short), 43, bk),
                      Ne("input", {
                        ref_for: !0,
                        ref: (U) => {
                          s[T.key] = U;
                        },
                        type: "number",
                        min: T.min,
                        max: T.max,
                        step: T.step,
                        value: T.displayValue,
                        disabled: a(T, e.model),
                        "aria-label": `${b.label} ${T.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": T.key
                      }, null, 8, vk)
                    ]))), 128))
                  ])
                ], 8, gk)) : (Te(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": b.key
                }, [
                  Ne("label", null, rt(b.label), 1),
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
                  }, null, 12, Sk),
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
                  }, null, 8, wk)
                ], 8, _k))
              ], 64))), 128))
            ], 2),
            Ke(Yx, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (b) => n("timeline", b))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                u[5] || (u[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", kk, [
                  Ke(Dt, {
                    icon: et(ze).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Ne("div", Mk, [
                Ne("div", Pk, [
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
                    }, "Normal", 8, Ck),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Ak)
                  ], 8, Nk)
                ]),
                Ne("div", Ik, [
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
                    }, "Normal", 8, Ok),
                    Ne("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, Fk)
                  ], 8, Ek)
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
            ], 8, xk)) : ut("", !0)
          ])
        ])) : ut("", !0),
        (e.model.footerButtons || []).length ? (Te(), Le("div", Tk, [
          (Te(!0), Le(Je, null, xt(e.model.footerButtons, (b) => (Te(), Le("button", {
            key: b.action,
            class: ct(["pano-btn", { "pano-btn-primary": b.primary === !0 }]),
            type: "button",
            "data-action": b.action
          }, rt(b.label), 11, Dk))), 128))
        ])) : ut("", !0)
      ]);
    };
  }
}, Vk = { class: "pano-timeline-bar" }, Rk = ["aria-label", "data-tip"], $k = ["aria-label", "data-tip"], zk = { class: "pano-timeline-time" }, jk = ["data-tip"], Hk = { key: 0 }, Gk = ["min", "max", "value"], Wk = ["data-tip"], Kk = { key: 0 }, Bk = ["max", "value"], Uk = ["aria-expanded"], Yk = ["inert"], qk = { class: "pano-timeline-name" }, Xk = ["aria-pressed", "aria-label", "data-tip", "onClick"], Jk = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, Zk = ["disabled", "aria-expanded", "aria-label", "onClick"], Qk = ["title", "aria-current", "onClick"], eM = ["data-keyed", "aria-label", "onClick"], tM = ["onPointerdown"], nM = ["onPointerdown"], rM = ["onPointerdown"], iM = ["onPointerdown"], oM = ["aria-label", "data-tip", "onPointerdown"], aM = { key: 0 }, sM = ["onPointerdown"], lM = ["aria-label", "data-tip", "onPointerdown"], cM = { key: 0 }, uM = 10, dM = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ fs(0), playing: /* @__PURE__ */ fs(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Gt(null), o = /* @__PURE__ */ Gt(null), a = /* @__PURE__ */ Gt(1), s = /* @__PURE__ */ Gt(0), l = /* @__PURE__ */ Gt(!1);
    let d = null, u = null, c = null;
    tl(() => {
      d = new ResizeObserver(([ge]) => {
        a.value = Math.max(1, ge.contentRect.width);
      }), i.value && d.observe(i.value), u = new ResizeObserver(([ge]) => {
        s.value = ge.contentRect.height;
      }), o.value && u.observe(o.value);
    }), da(() => {
      d == null || d.disconnect(), u == null || u.disconnect(), c == null || c();
    });
    const f = st(() => Math.max(1, Number(r.model.span || 1))), p = st(() => r.playhead.frame.value), m = st(() => r.playhead.playing.value), y = st(() => g1(p.value, Number(r.model.fps || 1))), b = st(() => a.value / f.value), T = (ge) => `${ge / f.value * 100}%`, U = st(() => I1(f.value, b.value));
    function H(ge) {
      const ee = i.value.getBoundingClientRect(), S = Math.floor((ge - ee.left) / Math.max(1, ee.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, S));
    }
    function D(ge, ee, S) {
      const K = Math.ceil(uM / Math.max(1e-6, b.value)), de = new Map(ee.map((q) => [q.frame, q.full]));
      return E1(ee.map((q) => q.frame), K).map((q, ue) => ({
        ...q,
        key: `${ge}:${ue}`,
        partial: q.frames.some((Pe) => !de.get(Pe)),
        selected: q.frames.some((Pe) => S.includes(Pe))
      }));
    }
    const P = st(() => {
      const ge = /* @__PURE__ */ new Map();
      for (const ee of r.model.rows || []) {
        ge.set(ee.id, D(ee.id, ee.keys, ee.selectedFrames));
        for (const S of ee.lanes) ge.set(S.key, D(S.key, S.frames.map((K) => ({ frame: K, full: !0 })), S.selectedFrames));
      }
      return ge;
    });
    function W(ge) {
      const ee = ge.end === null ? f.value : ge.end;
      return { left: T(ge.start), width: T(Math.max(0, ee - ge.start)) };
    }
    function $(ge, ee) {
      const S = ge.clientX, K = Math.max(1e-6, b.value);
      let de = 0;
      ee("start", 0, ge);
      const q = (Pe) => {
        if (Pe.pointerId !== ge.pointerId) return;
        const ne = Math.round((Pe.clientX - S) / K);
        ne !== de && (de = ne, ee("move", de, Pe));
      }, ue = (Pe) => {
        Pe.pointerId === ge.pointerId && (c(), ee("end", de, Pe));
      };
      c == null || c(), c = () => {
        window.removeEventListener("pointermove", q), window.removeEventListener("pointerup", ue), window.removeEventListener("pointercancel", ue), c = null;
      }, window.addEventListener("pointermove", q), window.addEventListener("pointerup", ue), window.addEventListener("pointercancel", ue);
    }
    function te(ge) {
      ge.button === 0 && $(ge, (ee, S, K) => n("action", { type: "seek", frame: H(K.clientX), phase: ee }));
    }
    function re(ge, ee, S) {
      ge.button === 0 && (n("action", { type: "select-row", id: ee.id }), $(ge, (K, de) => n("action", { type: "clip", id: ee.id, mode: S, delta: de, phase: K })));
    }
    function ce(ge, ee, S, K, de) {
      if (ge.button === 0) {
        if (ge.shiftKey) {
          n("action", { type: "select-keys", owner: ee.id, lane: S, frames: K.frames, additive: !0 });
          return;
        }
        K.frames.every((q) => de.includes(q)) || n("action", { type: "select-keys", owner: ee.id, lane: S, frames: K.frames, additive: !1 }), $(ge, (q, ue) => n("action", { type: "move-keys", delta: ue, phase: q }));
      }
    }
    const E = st(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function G(ge, ee, S) {
      n("action", ee), await Qs(), ge.target.value = S();
    }
    function ie(ge) {
      G(ge, { type: "fps", fps: Number(ge.target.value) }, () => E.value);
    }
    function pe(ge) {
      const ee = ge.target.value.trim();
      G(ge, { type: "length", length: ee ? Number(ee) : null }, () => r.model.length ?? "");
    }
    function me(ge, ee, S) {
      ge.button !== 0 || ge.target !== ge.currentTarget || n("action", { type: "select-keys", owner: ee.id, lane: S, frames: [], additive: !1 });
    }
    return (ge, ee) => Cr((Te(), Le("section", {
      class: ct(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", Vk, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": m.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": m.value ? "Pause (Space)" : "Play (Space)",
          onClick: ee[0] || (ee[0] = (S) => n("action", { type: "play" }))
        }, [
          Ke(Dt, {
            icon: m.value ? et(ze).pause : et(ze).play
          }, null, 8, ["icon"])
        ], 8, Rk),
        e.model.hasAudio ? (Te(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: ee[1] || (ee[1] = (S) => n("action", { type: "mute" }))
        }, [
          Ke(Dt, {
            icon: e.model.muted ? et(ze).volume_muted : et(ze).volume2
          }, null, 8, ["icon"])
        ], 8, $k)) : ut("", !0),
        Ne("span", zk, rt(y.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), Le("span", Hk, rt(E.value), 1)) : (Te(), Le("input", {
            key: 1,
            type: "number",
            min: et(kh),
            max: et(Iu),
            step: "any",
            value: E.value,
            "aria-label": "Timeline fps",
            onChange: ie
          }, null, 40, Gk)),
          ee[6] || (ee[6] = Ne("span", null, "fps", -1))
        ], 8, jk),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          ee[7] || (ee[7] = Ne("span", null, "Length", -1)),
          e.model.lengthLocked ? (Te(), Le("span", Kk, rt(e.model.length), 1)) : (Te(), Le("input", {
            key: 1,
            type: "number",
            min: "1",
            max: et(Eu),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: pe
          }, null, 40, Bk))
        ], 8, Wk),
        Ne("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: ee[2] || (ee[2] = (S) => n("action", { type: "toggle-expanded" }))
        }, [
          ee[8] || (ee[8] = Ne("span", null, "Timeline", -1)),
          Ke(Dt, {
            icon: et(ze).chevron
          }, null, 8, ["icon"])
        ], 8, Uk)
      ]),
      Ne("div", {
        class: ct(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Pt({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: ee[3] || (ee[3] = Et((S) => l.value = !0, ["self"])),
        onTransitionend: ee[4] || (ee[4] = Et((S) => l.value = !1, ["self"])),
        onTransitioncancel: ee[5] || (ee[5] = Et((S) => l.value = !1, ["self"]))
      }, [
        Ne("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          ee[9] || (ee[9] = Ne("div", { class: "pano-timeline-corner" }, null, -1)),
          Ne("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: te
          }, [
            (Te(!0), Le(Je, null, xt(U.value, (S) => (Te(), Le("span", {
              key: S,
              class: "pano-timeline-tick",
              style: Pt({ left: T(S) })
            }, rt(S), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: Pt({ left: T(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), Le(Je, null, xt(e.model.rows || [], (S) => (Te(), Le(Je, {
            key: S.id
          }, [
            Ne("div", {
              class: ct(["pano-timeline-head", { selected: S.selected, "is-hidden": !S.visible }])
            }, [
              Ne("div", qk, [
                S.hideable ? (Te(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": S.visible ? "true" : "false",
                  "aria-label": `${S.label} visible`,
                  "data-tip": S.visible ? "Hide" : "Show",
                  onClick: Et((K) => n("action", { type: "toggle-visible", id: S.id }), ["stop"])
                }, [
                  Ke(Dt, {
                    icon: S.visible ? et(ze).eye : et(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, Xk)) : (Te(), Le("span", Jk)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !S.keyable,
                  "aria-expanded": S.open ? "true" : "false",
                  "aria-label": S.open ? `Hide ${S.label} parameters` : `Show ${S.label} parameters`,
                  onClick: Et((K) => n("action", { type: "toggle-row", id: S.id }), ["stop"])
                }, [
                  Ke(Dt, {
                    icon: et(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, Zk),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: S.label,
                  "aria-current": S.selected ? "true" : void 0,
                  onClick: (K) => n("action", { type: "select-row", id: S.id })
                }, [
                  Ke(Dt, {
                    icon: S.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, rt(S.label), 1)
                ], 8, Qk),
                S.keyable ? (Te(), Le("button", {
                  key: 2,
                  class: ct(["pano-timeline-key", { keyed: et(Gl)(S.keys, p.value) }]),
                  type: "button",
                  "data-keyed": et(Gl)(S.keys, p.value) ? "true" : "false",
                  "aria-label": et(Gl)(S.keys, p.value) ? `Every ${S.label} parameter has a keyframe here; update them` : `Add keyframes for every ${S.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Et((K) => n("action", { type: "key-row", owner: S.id }), ["stop"])
                }, [
                  Ke(Dt, {
                    icon: et(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, eM)) : ut("", !0)
              ]),
              S.open ? (Te(!0), Le(Je, { key: 0 }, xt(S.lanes, (K) => (Te(), Le("div", {
                key: K.key,
                class: "pano-timeline-lane-head"
              }, rt(K.label), 1))), 128)) : ut("", !0)
            ], 2),
            Ne("div", {
              class: ct(["pano-timeline-track", { selected: S.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (K) => me(K, S, null)
              }, [
                S.clip ? (Te(), Le("div", {
                  key: 0,
                  class: ct(["pano-timeline-clip", { open: S.clip.end === null }]),
                  style: Pt(W(S.clip)),
                  onPointerdown: Et((K) => re(K, S, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Et((K) => re(K, S, "start"), ["stop"])
                  }, null, 40, rM),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Et((K) => re(K, S, "end"), ["stop"])
                  }, null, 40, iM)
                ], 46, nM)) : ut("", !0),
                (Te(!0), Le(Je, null, xt(P.value.get(S.id), (K) => (Te(), Le("button", {
                  key: K.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: K.selected, cluster: K.frames.length > 1, partial: K.partial }]),
                  style: Pt({ left: T(K.frame + 0.5) }),
                  "aria-label": `${S.label}: ${K.frames.length > 1 ? `${K.frames.length} keyframes` : `keyframe at frame ${K.frames[0]}`}`,
                  "data-tip": K.frames.length > 1 ? `${K.frames.length} keyframes` : `Frame ${K.frames[0]}`,
                  onPointerdown: Et((de) => ce(de, S, null, K, S.selectedFrames), ["stop"])
                }, [
                  K.frames.length > 1 ? (Te(), Le("span", aM, rt(K.frames.length), 1)) : ut("", !0)
                ], 46, oM))), 128))
              ], 40, tM),
              S.open ? (Te(!0), Le(Je, { key: 0 }, xt(S.lanes, (K) => (Te(), Le("div", {
                key: K.key,
                class: "pano-timeline-lane",
                onPointerdown: (de) => me(de, S, K.lane)
              }, [
                (Te(!0), Le(Je, null, xt(P.value.get(K.key), (de) => (Te(), Le("button", {
                  key: de.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: de.selected, cluster: de.frames.length > 1 }]),
                  style: Pt({ left: T(de.frame + 0.5) }),
                  "aria-label": `${K.label}: ${de.frames.length > 1 ? `${de.frames.length} keyframes` : `keyframe at frame ${de.frames[0]}`}`,
                  "data-tip": de.frames.length > 1 ? `${de.frames.length} keyframes` : `Frame ${de.frames[0]}`,
                  onPointerdown: Et((q) => ce(q, S, K.lane, de, K.selectedFrames), ["stop"])
                }, [
                  de.frames.length > 1 ? (Te(), Le("span", cM, rt(de.frames.length), 1)) : ut("", !0)
                ], 46, lM))), 128))
              ], 40, sM))), 128)) : ut("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: Pt({ left: T(p.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, Yk)
    ], 2)), [
      [ui, e.model.visible]
    ]);
  }
}, fM = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", {
      class: ct(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Pt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, pM = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, hM = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", pM, [
      (Te(!0), Le(Je, null, xt(e.buttons, (n) => Cr((Te(), Hn(Yt, {
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
        [ui, n.visible !== !1]
      ])), 128))
    ]));
  }
}, mM = ["data-video-ready"], gM = { class: "pano-video-transport-shell" }, yM = { class: "pano-video-controls-left" }, bM = { class: "pano-video-filmstrip" }, vM = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, _M = ["src", "onLoad"], SM = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, wM = ["max", "value", "disabled"], xM = { class: "pano-video-controls-right" }, kM = ["data-has-audio"], MM = { class: "pano-video-volume-pop" }, PM = ["value", "disabled"], NM = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = st(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause" : "Play";
    }), n = st(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? "Pause video" : "Play video";
    }), i = st(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.playing) === !0 ? ze.pause : ze.play;
    }), o = st(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop" : "Disable loop";
    }), a = st(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), s = st(() => {
      var P;
      return ((P = t.state) == null ? void 0 : P.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = st(() => {
      var P, W;
      return ((P = t.state) == null ? void 0 : P.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), d = st(() => {
      var P, W, $;
      return ((P = t.state) == null ? void 0 : P.hasAudio) !== !0 ? ze.volume : ((W = t.state) == null ? void 0 : W.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), u = st(() => {
      var P;
      return Math.max(0, Math.min(100, Number(((P = t.state) == null ? void 0 : P.progressPct) || 0)));
    }), c = st(() => ({ left: `${u.value}%` })), f = st(() => {
      var te, re;
      const P = (te = t.state) == null ? void 0 : te.volumePct, W = Number(((re = t.state) == null ? void 0 : re.volume) ?? 1) * 100, $ = Number(P ?? W ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, $))}%`
      };
    }), p = st(() => {
      var $, te;
      const W = [
        String((($ = t.state) == null ? void 0 : $.currentTimeLabel) || "0:00"),
        String(((te = t.state) == null ? void 0 : te.durationLabel) || "0:00")
      ].reduce((re, ce) => Math.max(re, ce.length), 4);
      return `${Math.max(4, W)}ch`;
    }), m = st(() => ({ "--pano-video-time-ch": p.value })), y = st(() => {
      var $, te;
      const P = Array.isArray(($ = t.state) == null ? void 0 : $.thumbnails) ? t.state.thumbnails : [];
      if (P.length) return P;
      const W = Math.max(7, Number(((te = t.state) == null ? void 0 : te.thumbnailCount) || 9));
      return Array.from({ length: W }, (re, ce) => ({
        id: `placeholder-${ce}`,
        src: "",
        label: ""
      }));
    }), b = /* @__PURE__ */ Gt(/* @__PURE__ */ new Set()), T = (P) => String((P == null ? void 0 : P.id) || (P == null ? void 0 : P.src) || (P == null ? void 0 : P.label) || ""), U = (P) => b.value.has(T(P)), H = (P) => {
      const W = new Set(b.value);
      W.add(T(P)), b.value = W;
    };
    ai(y, (P) => {
      const W = new Set(P.map(T)), $ = /* @__PURE__ */ new Set();
      for (const te of b.value)
        W.has(te) && $.add(te);
      b.value = $;
    }, { immediate: !0 });
    const D = st(() => {
      var P;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((P = t.state) == null ? void 0 : P.shellMaxWidthPx) || 640))}px`
      };
    });
    return (P, W) => (Te(), Le("div", {
      class: ct(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Pt(D.value)
    }, [
      W[1] || (W[1] = Ne("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      W[2] || (W[2] = Ne("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Ne("div", gM, [
        Ne("div", yM, [
          Ke(Yt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Ne("div", {
            class: "pano-video-time pano-video-time-start",
            style: Pt(m.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", bM, [
          Ne("div", vM, [
            (Te(!0), Le(Je, null, xt(y.value, ($) => (Te(), Le("div", {
              key: T($),
              class: ct(["pano-video-thumb", {
                "is-placeholder": !$.src,
                "is-loaded": $.src && U($)
              }])
            }, [
              $.src ? (Te(), Le("img", {
                key: 0,
                src: $.src,
                alt: "",
                draggable: "false",
                onLoad: (te) => H($)
              }, null, 40, _M)) : (Te(), Le("span", SM))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: Pt(c.value),
            "aria-hidden": "true"
          }, [...W[0] || (W[0] = [
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
          }, null, 8, wM)
        ]),
        Ne("div", xM, [
          Ne("div", {
            class: "pano-video-time pano-video-time-end",
            style: Pt(m.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Ke(Yt, {
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
            Ne("div", MM, [
              Ne("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Pt(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, PM)
            ]),
            Ke(Yt, {
              "extra-class": "pano-video-control",
              icon: d.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, kM)
        ])
      ])
    ], 14, mM));
  }
}, CM = { class: "pano-floating-top" }, AM = ["data-selected", "data-view-count"], IM = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], EM = { class: "label" }, OM = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), Le("div", CM, [
        Ne("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), Le(Je, null, xt(e.buttons, (i) => Cr((Te(), Le("button", {
            key: i.key,
            class: ct(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ke(Dt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", EM, rt(i.label), 1)
          ], 10, IM)), [
            [ui, i.visible !== !1]
          ])), 128))
        ], 8, AM)
      ]);
    };
  }
};
function ug(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ze.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ze.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: ze.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: ze.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: ze.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: ze.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ze.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ze.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ze.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ze.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ze.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ze.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: ze.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: ze.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ze.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ze.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ze.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ze.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ze.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ze.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ze.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ze.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ze.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ze.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ze.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ze.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ze.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ze.lasso_tool }
        ]
      }
    ]
  };
}
const FM = ["aria-label"], TM = { class: "pano-stage-column" }, DM = { class: "pano-stage-wrap" }, LM = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, VM = {
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
    const l = /* @__PURE__ */ Gt(null), d = /* @__PURE__ */ Gt(null), u = /* @__PURE__ */ Gt(null);
    function c() {
      var ce, E;
      return ((E = (ce = u.value) == null ? void 0 : ce.getRefs) == null ? void 0 : E.call(ce)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(ce) {
      var E, G;
      return ((G = (E = d.value) == null ? void 0 : E.open) == null ? void 0 : G.call(E, ce)) === !0;
    }
    function p(ce) {
      i("image-file-selected", ce);
    }
    function m(ce) {
      i("image-file-cancelled", ce);
    }
    t({ getPaintOverlayRefs: c, openImagePicker: f });
    const y = st(() => n.readOnly === !0), b = st(() => n.shellPreset || ug(n.type)), T = st(() => {
      var E, G, ie;
      const ce = String((((E = n.uiState) == null ? void 0 : E.stageStatus) === "failed" ? (G = n.uiState) == null ? void 0 : G.stageStatusDetail : (ie = n.uiState) == null ? void 0 : ie.stageWarningDetail) ?? "");
      return ce === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : ce === "stickers" ? "One or more sticker previews are unavailable." : ce === "frame" ? "The editor hit a rendering error. Check the browser console for details." : ce === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : ce.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), U = st(() => {
      var E;
      const ce = Array.isArray((E = b.value) == null ? void 0 : E.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return y.value && ce.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), ce;
    });
    function H() {
      const ce = l.value;
      return ce ? Array.from(ce.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function D() {
      var G;
      const E = H()[0] || l.value;
      (G = E == null ? void 0 : E.focus) == null || G.call(E);
    }
    function P() {
      var ce;
      s != null && s.isConnected && ((ce = s.focus) == null || ce.call(s)), s = null;
    }
    function W(ce) {
      var E, G, ie, pe;
      if (!ce.defaultPrevented) {
        if (ce.key === "Tab") {
          const me = H();
          if (!me.length) {
            ce.preventDefault(), (G = (E = l.value) == null ? void 0 : E.focus) == null || G.call(E);
            return;
          }
          const ge = me[0], ee = me[me.length - 1], S = document.activeElement;
          if (ce.shiftKey) {
            (S === ge || S === l.value || !((ie = l.value) != null && ie.contains(S))) && (ce.preventDefault(), ee.focus());
            return;
          }
          (S === ee || !((pe = l.value) != null && pe.contains(S))) && (ce.preventDefault(), ge.focus());
          return;
        }
        ce.key === "Escape" && i("close");
      }
    }
    function $() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function te() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function re(ce) {
      document.removeEventListener("keydown", W), ce ? (s || (s = document.activeElement), $(), document.addEventListener("keydown", W), Qs(() => {
        D();
      })) : (te(), P());
    }
    return tl(() => {
      re(n.open);
    }), da(() => {
      te(), document.removeEventListener("keydown", W), P();
    }), ai(() => n.open, (ce) => {
      re(ce);
    }), (ce, E) => e.open ? (Te(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[2] || (E[2] = Et((G) => i("close"), ["self"]))
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
        Ne("div", TM, [
          Ne("div", DM, [
            E[3] || (E[3] = Ne("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            E[4] || (E[4] = Ne("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            E[5] || (E[5] = Ne("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Te(), Le("div", LM, rt(T.value), 1)) : ut("", !0),
            E[6] || (E[6] = Ne("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Ne("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ke(Mx, {
              ref_key: "paintOverlaysRef",
              ref: u
            }, null, 512),
            Ke(Um, {
              ref_key: "imageFilePickerRef",
              ref: d,
              onFileSelected: p,
              onFileCancelled: m
            }, null, 512),
            y.value ? ut("", !0) : (Te(), Le(Je, { key: 1 }, [
              Ke(hM, {
                buttons: e.uiState.toolButtons || b.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ke(qw, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ke(kx, {
                "paint-swatches": e.paintSwatches,
                panes: b.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ke(NM, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ke(OM, {
              buttons: e.uiState.viewButtons || b.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ke(Ww, {
              buttons: e.uiState.floatingButtons || U.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ke(Fx, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ke(fM, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ke(tx, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ke(dM, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: E[0] || (E[0] = (G) => i("timeline", G))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ut("", !0) : (Te(), Hn(Lk, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: E[1] || (E[1] = (G) => i("timeline", G))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, FM)
    ])) : ut("", !0);
  }
}, Un = "loading", la = "ready", $n = "failed";
function dg(e, t = "") {
  return e && (e.__panoLoadState = Un, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function fg(e, t = "") {
  return e && (e.__panoLoadState = la, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function pg(e, t = "") {
  return e && (e.__panoLoadState = $n, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function qc(e, t) {
  return e ? e.__panoLoadState === $n ? $n : typeof t == "function" && t(e) ? la : Un : la;
}
function Xc(e) {
  return qc(e) === $n;
}
function RM({ presented: e, background: t = la, stickers: r = [] } = {}) {
  if (!e) return { status: Un, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Un, o = n.includes(Un);
  if (i && o) return { status: Un, detail: "mixed" };
  if (i) return { status: Un, detail: "background" };
  if (o) return { status: Un, detail: "stickers" };
  const a = t === $n, s = n.includes($n);
  return a && s ? { status: $n, detail: "mixed" } : a ? { status: $n, detail: "background" } : s ? { status: $n, detail: "stickers" } : { status: la, detail: "" };
}
const $M = "state_json", zM = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), ld = "sticker_image_1", jM = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), hg = 0.01, HM = "external_image", Hs = "pano_sticker_input_images", GM = "pano_sticker_input_videos", WM = "pano_sticker_input_frames", KM = "pano_sticker_input_video_meta", BM = !0, pl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], pr = Math.PI / 180, pi = 180 / Math.PI, Jc = 1, mg = "rgb(255, 221, 87)", UM = "rgb(228, 228, 231)", YM = "rgb(180, 150, 60)", qM = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, XM = 64, Wf = 40, Ql = 16, JM = 0.45, Kf = 180, ZM = 160, Gs = 24, QM = 4, eP = 4, tP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function ec(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function nP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function rP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function iP(e) {
  return e * e * e;
}
function hl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Bf(e, t) {
  return hl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Uf(e, t) {
  return hl(e.x * t, e.y * t, e.z * t);
}
function tc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function oP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return hl(e.x / t, e.y / t, e.z / t);
}
function Wa(e) {
  return {
    yaw: Vt(Math.atan2(e.x, e.z) * pi),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * pi, -90, 90)
  };
}
function Lr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, a = t[n].y, s = t[i].x, l = t[i].y;
    a > e.y != l > e.y && e.x < (s - o) * (e.y - a) / (l - a || 1e-6) + o && (r = !r);
  }
  return r;
}
function To(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function nc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), a = Number(e.y || 0) - Number(t.y || 0), s = n * n + i * i;
  if (s <= 1e-6) return To(e, t);
  const l = Ee((o * n + a * i) / s, 0, 1), d = Number(t.x || 0) + n * l, u = Number(t.y || 0) + i * l, c = Number(e.x || 0) - d, f = Number(e.y || 0) - u;
  return c * c + f * f;
}
function Rn(e, t, r) {
  return e + (t - e) * r;
}
function sr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function aP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ka = { fillStyle: "", url: "" };
function sP(e, t, r) {
  if (Ka.url && Ka.fillStyle === String(e || ""))
    return Ka.url;
  const n = aP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Gs}" height="${Gs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ka = { fillStyle: String(e || ""), url: n }, n;
}
function Ws(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function In(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function on(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function lP(e) {
  return pl.some((t) => Ws(e, t.color));
}
function Zc(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const a = Math.floor(n * 6), s = n * 6 - a, l = o * (1 - i), d = o * (1 - s * i), u = o * (1 - (1 - s) * i);
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
function Qc(e) {
  const t = Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Wi(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function cP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Yf(e) {
  const { paintCount: t, maskCount: r } = cP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Ti(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ba(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function uP(e, t) {
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
function ni(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function dP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function fP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function pP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const gg = "pano_suite.ui_settings.v1", yg = "pano_suite.node_grid_visibility.v1";
let Ei = null, rr = null;
function ds(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function hP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(gg)) || "").trim();
    if (!t) return Ei ? ds(Ei) : null;
    const r = JSON.parse(t), n = ds(r);
    return Ei = n, n;
  } catch {
    return Ei ? ds(Ei) : null;
  }
}
function mP(e) {
  var r;
  const t = ds(e);
  Ei = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(gg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function bg() {
  var e;
  if (rr && typeof rr == "object")
    return rr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(yg)) || "").trim();
    if (!t)
      return rr = {}, rr;
    const r = JSON.parse(t);
    return rr = r && typeof r == "object" ? r : {}, rr;
  } catch {
    return rr = {}, rr;
  }
}
function gP(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = bg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function yP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = bg();
  n[r] = !!t, rr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(yg, JSON.stringify(n));
  } catch {
  }
}
function bP(e, t) {
  const r = { ...e }, n = t.map((i) => i(rc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(rc(r, t[o].name))), rc(r, "showEditor");
}
function rc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const $r = /* @__PURE__ */ new Map(), vP = 12;
function _P(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = $r.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : ($r.delete(t), $r.set(t, r), r);
}
function SP(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for ($r.delete(r), $r.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); $r.size > vP; ) {
      const i = $r.keys().next().value;
      if (!i) break;
      $r.delete(i);
    }
}
function wP(e) {
  const {
    comfyMedia: t,
    cutoutV2: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    imageCache: a,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: l,
    mediaSource: d,
    mediaUiImage: u,
    node: c,
    portStillCanvas: f,
    portVideoEl: p,
    readOnly: m,
    runtime: y,
    scheduler: b,
    stageWrap: T,
    state: U,
    stateV2: H,
    stillCanvas: D,
    timelinePlayhead: P,
    type: W,
    uiState: $,
    videoEl: te
  } = e;
  let re, ce, E, G, ie, pe;
  const me = {
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
  }, ge = 9, ee = [];
  let S = 0;
  const K = () => {
    var Re, Ce;
    const M = (Re = T == null ? void 0 : T.getBoundingClientRect) == null ? void 0 : Re.call(T), X = (Ce = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Ce.call(o), Q = Math.max(0, Number((M == null ? void 0 : M.width) || 0)), we = X ? Math.max(0, Number(X.width || 0)) : 0, he = we > 0 ? we + 14 + 12 : 72, Ae = Math.max(280, Math.floor(Q - he * 2)), Oe = n.fullscreen ? Math.min(1200, Ae) : Ae;
    $.videoTransport.shellMaxWidthPx = Oe;
  }, de = () => {
    S || (S = b.requestFrame(() => {
      S = 0, K();
    }));
  }, q = (M) => {
    if (!(M instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(M.audioTracks) && M.audioTracks.length > 0 || M.audioTracks && typeof M.audioTracks.length == "number" && M.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof M.mozHasAudio == "boolean") return M.mozHasAudio;
    } catch {
    }
    try {
      if (Number(M.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!$.videoTransport.hasAudio;
  }, ue = typeof ResizeObserver < "u" ? new ResizeObserver(() => de()) : null;
  ue == null || ue.observe(T), o && (ue == null || ue.observe(o)), ee.push(() => {
    var M;
    S && (b.cancelFrame(S), S = 0), (M = ue == null ? void 0 : ue.disconnect) == null || M.call(ue);
  }), de();
  const Pe = () => {
    me.thumbnailJobId += 1, me.thumbnailSrc = "", $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = ge;
  }, ne = async (M, X, Q) => {
    const we = String(M || "").trim();
    if (!we) {
      Pe();
      return;
    }
    const xe = _P(we);
    if (xe) {
      me.thumbnailSrc = we, $.videoTransport.thumbnails = xe.thumbnails, $.videoTransport.thumbnailCount = xe.thumbnailCount;
      return;
    }
    const F = ++me.thumbnailJobId;
    me.thumbnailSrc = we, $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = ge;
    const he = ol(document, "editor.thumbnails");
    he.preload = "auto", he.muted = !0, he.playsInline = !0, he.crossOrigin = "anonymous";
    const Ae = dn({ label: "editor.thumbnail" });
    try {
      const Oe = await new Promise((_t) => {
        let kt = !1;
        const pt = (Xt) => {
          kt || (kt = !0, _t(Xt));
        };
        he.addEventListener("loadedmetadata", () => pt(!0), { once: !0 }), he.addEventListener("canplay", () => pt(!0), { once: !0 }), he.addEventListener("error", () => pt(!1), { once: !0 }), he.src = we, he.load();
      });
      if (me.thumbnailJobId !== F) return;
      const Re = Number(he.videoWidth || 0), Ce = Number(he.videoHeight || 0);
      if (!Oe || Re < 1 || Ce < 1) {
        me.thumbnailFailedSrcs.add(we);
        return;
      }
      const Ve = Math.max(0, Number(he.duration || X || 0)), je = 46, Ye = Math.max(72, Math.round(Re / Ce * je));
      Ae.width = Ye, Ae.height = je;
      const $e = Ae.getContext("2d");
      if (!$e) return;
      const He = [], $t = (_t) => new Promise((kt) => {
        let pt = !1;
        const Xt = () => {
          pt || (pt = !0, kt());
        };
        he.addEventListener("seeked", Xt, { once: !0 }), he.addEventListener("error", Xt, { once: !0 });
        try {
          he.currentTime = _t;
        } catch {
          Xt();
        }
      });
      for (let _t = 0; _t < ge; _t += 1) {
        if (me.thumbnailJobId !== F) return;
        const kt = ge <= 1 ? 0 : _t / (ge - 1), pt = Ve > 0 ? Math.max(0, Math.min(Ve - Math.max(1e-3, 0.5 / Math.max(1, Number(Q || 24))), Ve * kt)) : 0;
        if (await $t(pt), me.thumbnailJobId !== F) return;
        $e.clearRect(0, 0, Ye, je), $e.drawImage(he, 0, 0, Ye, je), He.push({
          id: `thumb-${_t}`,
          src: Ae.toDataURL("image/jpeg", 0.72),
          time: pt,
          label: _(pt)
        });
      }
      if (me.thumbnailJobId !== F) return;
      $.videoTransport.thumbnails = He, $.videoTransport.thumbnailCount = He.length || ge, SP(we, {
        thumbnails: He,
        thumbnailCount: He.length || ge,
        duration: Ve,
        fps: Q
      });
    } finally {
      he.removeAttribute("src"), he.load(), gc(Ae);
    }
  };
  ee.push(() => {
    Pe();
  });
  const O = Lm({
    video: te instanceof HTMLVideoElement ? te : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (M) => b.requestFrame(M),
      cancelFrame: (M) => b.cancelFrame(M)
    },
    fps: R,
    span: () => {
      if (H) return pe();
      const M = Math.round(Number($.videoTransport.duration || 0) * R());
      return te.loop || !(M > 0) ? 1 / 0 : M;
    },
    loop: () => H,
    onFrame: (M) => {
      H ? E(M) : Y(), ce({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      x() && (y.backgroundDirty = !0);
    },
    onChange: () => {
      Y(), P.playing.value = O.playing, ie(), ce({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  ee.push(() => O.dispose());
  const Z = H && p instanceof HTMLVideoElement ? Vm({
    video: p,
    onCapture: () => {
      var Q;
      const M = Number(p.videoWidth || 0), X = Number(p.videoHeight || 0);
      M < 1 || X < 1 || (f.width = M, f.height = X, (Q = f.getContext("2d")) == null || Q.drawImage(p, 0, 0), f.__panoFrameIdx += 1, ce({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => ce({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  Z && ee.push(() => Z.dispose());
  const ae = H ? Mm({
    createImage: (M, X) => {
      const Q = new Image();
      return Q.onload = X, Q.onerror = X, Q.src = M, Q;
    },
    onLoad: () => ce({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (te instanceof HTMLVideoElement) {
    const M = () => {
      B(), ce({ cause: "frame_view", localOnly: !0 });
    }, X = () => {
      Y({
        hasAudio: $.videoTransport.hasAudio,
        muted: te.muted,
        volume: Number(te.volume ?? $.videoTransport.volume ?? 1)
      });
    }, Q = () => {
      const we = te.dataset.panoSrc;
      we && (me.failedSrcs.add(we), B(), ce());
    };
    for (const [we, xe] of [
      ["loadedmetadata", M],
      ["loadeddata", M],
      ["canplay", M],
      ["volumechange", X],
      ["error", Q]
    ])
      te.addEventListener(we, xe), ee.push(() => te.removeEventListener(we, xe));
  }
  function ye(M) {
    return t.uiList(c, M);
  }
  function ve(M) {
    return t.uiValue(c, M);
  }
  function I() {
    const M = String((c == null ? void 0 : c.comfyClass) || (c == null ? void 0 : c.type) || (c == null ? void 0 : c.title) || "");
    return ks(M) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : W === "stickers" || W === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function se() {
    const { metaKey: M } = I(), X = ve(M);
    return Array.isArray(X) && X.length > 0 && X[0] && typeof X[0] == "object" ? X[0] : X && typeof X == "object" ? X : null;
  }
  function g(M) {
    return M ? M instanceof HTMLVideoElement ? [
      String(M.currentSrc || M.src || ""),
      Number(M.videoWidth || 0),
      Number(M.videoHeight || 0)
    ].join("|") : M instanceof HTMLCanvasElement ? [
      "canvas",
      Number(M.width || 0),
      Number(M.height || 0),
      String(M.__panoFrameIdx || 0)
    ].join("|") : [
      String(M.currentSrc || M.src || ""),
      Number(M.naturalWidth || M.width || 0),
      Number(M.naturalHeight || M.height || 0)
    ].join("|") : "none";
  }
  function _(M) {
    const X = Math.max(0, Math.floor(Number(M || 0))), Q = Math.floor(X / 60), we = X % 60;
    return `${Q}:${String(we).padStart(2, "0")}`;
  }
  function R() {
    return H ? U.timeline.fps : me.metaFps || 1e3;
  }
  function Y(M = {}) {
    const X = Number(M.duration ?? $.videoTransport.duration ?? 0), Q = Math.max(1, Number(M.fps ?? $.videoTransport.fps ?? 24)), we = O.frame / R(), xe = Object.prototype.hasOwnProperty.call(M, "ready") ? !!M.ready : !!$.videoTransport.ready, F = O.playing, he = Object.prototype.hasOwnProperty.call(M, "visible") ? !!M.visible : !!$.videoTransport.visible, Ae = Object.prototype.hasOwnProperty.call(M, "muted") ? !!M.muted : !!(te instanceof HTMLVideoElement ? te.muted : $.videoTransport.muted), Oe = Number(
      Object.prototype.hasOwnProperty.call(M, "volume") ? M.volume : te instanceof HTMLVideoElement ? te.volume : $.videoTransport.volume
    ), Re = Object.prototype.hasOwnProperty.call(M, "hasAudio") ? !!M.hasAudio : q(te), Ce = Object.prototype.hasOwnProperty.call(M, "loop") ? !!M.loop : !!$.videoTransport.loop;
    Object.assign($.videoTransport, {
      ready: xe,
      playing: F,
      visible: he,
      loop: Ce,
      currentTime: Number.isFinite(we) ? we : 0,
      duration: Number.isFinite(X) ? X : 0,
      progressPct: X > 1e-6 ? Math.max(0, Math.min(100, we / X * 100)) : 0,
      currentTimeLabel: _(we),
      durationLabel: _(X),
      frameCount: Math.max(0, Number(M.frameCount ?? $.videoTransport.frameCount ?? 0)),
      fps: Q,
      hasAudio: Re,
      muted: Ae,
      volume: Math.max(0, Math.min(1, Number.isFinite(Oe) ? Oe : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Oe) ? Oe : 1)) * 100),
      thumbnails: Array.isArray(M.thumbnails) ? M.thumbnails : $.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(M.thumbnailCount ?? $.videoTransport.thumbnailCount ?? ge))
    });
  }
  function w() {
    return !!(te instanceof HTMLVideoElement && !H && te.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function k() {
    if (!(te instanceof HTMLVideoElement) || !$.videoTransport.hasAudio) return;
    const M = !te.muted;
    te.muted = M, !M && Number(te.volume || 0) <= 0 && (te.volume = Math.max(0.01, Number($.videoTransport.volume || 1))), Y({
      hasAudio: $.videoTransport.hasAudio,
      muted: te.muted,
      volume: Number(te.volume ?? $.videoTransport.volume ?? 1)
    });
  }
  function L() {
    Y({
      visible: w()
    });
  }
  function x() {
    if (!(te instanceof HTMLVideoElement) || Number(te.videoWidth || 0) < 1 || Number(te.videoHeight || 0) < 1) return !1;
    const M = Number(te.videoWidth || 0), X = Number(te.videoHeight || 0);
    (D.width !== M || D.height !== X) && (D.width = M, D.height = X);
    const Q = D.getContext("2d");
    return Q ? (Q.clearRect(0, 0, M, X), Q.drawImage(te, 0, 0, M, X), D.__panoFrameIdx = Number(D.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !O.showsVideo && Number(D.width || 0) > 0 && Number(D.height || 0) > 0 && Number(D.__panoFrameIdx || 0) > 0 ? D : te instanceof HTMLVideoElement && Number(te.videoWidth || 0) > 0 && Number(te.videoHeight || 0) > 0 && Number(te.readyState || 0) >= 2 ? te : null;
  }
  function C() {
    D.__panoFrameIdx = 0, y.backgroundDirty = !0;
  }
  function B() {
    if (!(te instanceof HTMLVideoElement)) return null;
    const { videoKey: M } = I(), X = tn(c, "background") && ye(M)[0] || null, Q = d(X), we = [Q, t.linkedVideoFile(c, j())].filter(Boolean), xe = we.find((Ve) => !me.failedSrcs.has(Ve)) || "";
    me.videoFailed = !xe && we.length > 0;
    const F = xe && xe === Q ? se() : null;
    me.metaFps = Number(F == null ? void 0 : F.fps) > 0 ? Number(F.fps) : 0;
    const he = Math.max(1, Number((F == null ? void 0 : F.fps) || (H ? U.timeline.fps : 24))), Ae = te.dataset.panoSrc === xe && Number.isFinite(te.duration) ? te.duration : 0, Oe = Number((F == null ? void 0 : F.duration) || ((F == null ? void 0 : F.frames) > 0 ? F.frames / he : Ae)), Re = Math.max(0, Number((F == null ? void 0 : F.frames) || Math.round(Oe * he))), Ce = !!(F != null && F.has_audio) || q(te);
    return xe && te.dataset.panoSrc !== xe ? (te.pause(), C(), te.dataset.panoSrc = xe, te.loop = !H && !!$.videoTransport.loop, te.muted = !!$.videoTransport.muted, te.volume = Math.max(0, Math.min(1, Number($.videoTransport.volume ?? 1))), te.src = xe, te.load(), O.setSource(!0), H || O.seek(0)) : !xe && te.getAttribute("src") && (te.pause(), te.removeAttribute("src"), delete te.dataset.panoSrc, te.load(), C(), Pe(), O.setSource(!1)), H || (te.loop = !!$.videoTransport.loop), xe && !H && me.thumbnailSrc !== xe && !me.thumbnailFailedSrcs.has(xe) && ne(xe, Oe, he), xe || Pe(), Y({
      ready: !!xe,
      visible: !!xe && w(),
      duration: Oe,
      frameCount: Re,
      fps: he,
      hasAudio: Ce,
      loop: !!te.loop,
      muted: !!te.muted,
      volume: Number(te.volume ?? $.videoTransport.volume ?? 1),
      thumbnailCount: $.videoTransport.thumbnailCount
    }), xe || null;
  }
  function J(M, X = null) {
    return u(c, M, a, X || (() => ce()));
  }
  function oe(M = null) {
    return tn(c, "external-sticker") ? J(Hs, M) : null;
  }
  function z() {
    if (!tn(c, "external-sticker")) return null;
    const M = ye(KM)[0];
    if (!M || typeof M != "object") return null;
    const X = ye(WM).map(d).filter(Boolean);
    if (X.length) return { frames: X, meta: M };
    const Q = d(ye(GM)[0] || null);
    return Q ? { src: Q, meta: M } : null;
  }
  function le() {
    const M = U.stickers.find(re), X = M ? z() : null, Q = X ? wm(M.clip, n.frame, U.timeline.fps, X.meta) : null;
    Z.follow({ src: (X == null ? void 0 : X.src) || "", time: Q, playing: O.advancing, fps: U.timeline.fps });
    const we = M ? fe(M) : null, xe = X != null && X.frames ? ae.picture(X.frames, Q, X.meta, we) : Z.picture(f, we);
    return xe ? { media: xe, revision: g(xe), source: km(X, we) } : null;
  }
  function Se() {
    return !H || !tn(c, "scene") ? null : sf(ye("pano_scene_files"), ye("pano_scene_meta"), d);
  }
  function Me() {
    return !H || !tn(c, "external-sticker") ? null : sf(ye("pano_sticker_files"), ye("pano_sticker_meta"), d);
  }
  function fe(M) {
    var he;
    if (M && typeof M == "object" && (re(M) || M.external === !0))
      return oe(() => {
        Ar(c, "image-loaded");
      });
    const X = H ? be(M) : String(M && typeof M == "object" ? M.asset_id || M.assetId || "" : M || "");
    if (!X) return null;
    const Q = a.get(X);
    if (Q) return Q;
    const we = H ? Gh(M.source) : (he = U.assets) == null ? void 0 : he[X], xe = l(we);
    if (!xe) return null;
    const F = new Image();
    return dg(F, xe), F.onload = () => {
      fg(F, xe), ce();
    }, F.onerror = () => {
      pg(F, xe), ce();
    }, F.src = xe, a.set(X, F), F;
  }
  function be(M) {
    const { source: X } = M;
    return X.filename ? `file:${X.storage}:${X.subfolder}:${X.filename}` : `sticker:${M.id}`;
  }
  function _e() {
    if (W === "cutout" && !r) {
      const xe = N();
      if (xe) return xe;
      const F = s(
        c,
        ["erp_image", "bg_erp"],
        () => ce(),
        "background:cutout:erp_image|bg_erp"
      );
      return F && !Xc(F) ? F : u(c, "pano_input_images", a, () => ce()) || F || null;
    }
    const M = N();
    if (M) return M;
    const X = tn(c, "background") ? u(c, "pano_input_images", a, () => ce()) : null;
    if (X && !Xc(X)) return X;
    if (te instanceof HTMLVideoElement && te.dataset.panoSrc) return te;
    const Q = j();
    return s(c, Q, () => ce(), `background:${Q.join("|")}`) || X || null;
  }
  function h() {
    var X;
    const M = (Array.isArray(c == null ? void 0 : c.inputs) ? c.inputs : []).findIndex((Q) => (Q == null ? void 0 : Q.name) === "source");
    return M >= 0 && c.graph ? String(((X = c.getInputLink(M)) == null ? void 0 : X.type) || "") : "";
  }
  function j() {
    if (W === "cutout") return r ? h() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const M = Array.isArray(c == null ? void 0 : c.inputs) ? c.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], X = M.includes("erp_image"), Q = M.includes("bg_erp");
    return m && (X || Q) ? X ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : W === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function A(M) {
    return M ? M instanceof HTMLImageElement ? !!M.complete && Number(M.naturalWidth || M.width || 0) > 0 && Number(M.naturalHeight || M.height || 0) > 0 : M instanceof HTMLVideoElement ? Number(M.videoWidth || 0) > 0 && Number(M.videoHeight || 0) > 0 && Number(M.readyState || 0) >= 2 : Number(M.width || M.naturalWidth || 0) > 0 && Number(M.height || M.naturalHeight || 0) > 0 : !1;
  }
  function v() {
    if (i.failed) return { status: $n, detail: "renderer" };
    if (!i.ready) return { status: Un, detail: "boot" };
    const M = _e(), X = me.videoFailed ? $n : qc(M, A), Q = [];
    for (const we of G()) {
      if ((we == null ? void 0 : we.visible) === !1) continue;
      const xe = fe(we);
      Q.push(qc(xe, A));
    }
    return RM({
      presented: y.hasPresentedFrame,
      background: X,
      stickers: Q
    });
  }
  function V() {
    te instanceof HTMLVideoElement && te.pause(), ee.forEach((M) => {
      try {
        M();
      } catch {
      }
    });
  }
  return {
    connect(M) {
      ({
        isExternalSticker: re,
        requestDraw: ce,
        setTimelineFrame: E,
        skyStickers: G,
        syncTimeline: ie,
        timelineSpanFrames: pe
      } = M);
    },
    videoState: me,
    queueVideoTransportLayout: de,
    playback: O,
    portVideo: Z,
    getNodeUiValue: ve,
    getMediaRevisionToken: g,
    playbackFps: R,
    syncVideoTransportState: Y,
    toggleVideoMuted: k,
    syncVideoTransportVisibility: L,
    refreshModalVideoSource: B,
    getStickerUiImage: J,
    getExternalStickerPreviewImage: oe,
    getPortMedia: z,
    followPortSticker: le,
    getStickerImage: fe,
    stickerImageKey: be,
    getConnectedErpImage: _e,
    isDecodedImageReady: A,
    getStageImageStatus: v,
    sceneFiles: Se,
    stickerFiles: Me,
    disposeMediaSession: V
  };
}
function xP(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), a = Math.max(1, Number(r || 8));
  function s(d) {
    if (n.splice(0, n.length), i = -1, !d || typeof d != "object" || !Array.isArray(d.entries) || (d.entries.forEach((c) => {
      n.push(String(c || ""));
    }), !n.length)) return;
    const u = Number(d.index);
    Number.isInteger(u) ? u === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, u)) : i = n.length - 1;
  }
  function l(d) {
    n[i] !== d && (n.splice(i + 1), n.push(d), n.length > o && n.shift(), i = n.length - 1);
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
      return d < 0 || d >= n.length ? null : (i = d, n[i]);
    },
    redo() {
      const d = i + 1;
      return d < 0 || d >= n.length ? null : (i = d, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const d = n.length, u = Math.max(0, d - a), c = i >= 0 ? Math.max(0, Math.min(i, u)) : u, f = n.slice(c, c + a), p = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - c));
      return {
        version: 1,
        entries: f,
        index: p
      };
    },
    hydrate: s
  };
}
const kP = 80;
function vg(e) {
  return JSON.stringify(V1(e));
}
function MP(e) {
  return xP(kP, { entries: [vg(e)], index: 0 });
}
function PP(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: a,
    type: s
  } = e;
  let l, d, u, c, f, p, m, y, b, T, U, H, D, P;
  function W() {
    r || (U(), Bh(i), !(o && i.stickers.some(c)) && (t.historyController.commitActionGroup(vg(i)), D()));
  }
  function $(re) {
    var ie, pe;
    if (r) return;
    T();
    const ce = re < 0 ? t.historyController.undo() : t.historyController.redo();
    if (D(), !ce) return;
    const E = R1(i, ce), G = (ie = i.timeline) == null ? void 0 : ie.fps;
    Object.keys(i).forEach((me) => delete i[me]), Object.assign(i, E.state), U(!1), o && i.timeline.fps !== G && m.seek(Math.round(t.frame * i.timeline.fps / G)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((pe = u()) == null ? void 0 : pe.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), n.backgroundDirty = !0, E.paintingChanged ? p() : f(), H(), P(), d(), b({ cause: "cutout_frame" });
  }
  function te() {
    var E, G;
    const re = Array.isArray((E = t.historyController) == null ? void 0 : E.entries) ? t.historyController.entries : [], ce = Number((G = t.historyController) == null ? void 0 : G.index);
    return {
      canUndo: !r && re.length > 1 && ce > 0,
      canRedo: !r && re.length > 1 && ce >= 0 && ce < re.length - 1
    };
  }
  return {
    connect(re) {
      ({
        clearWorldSelection: l,
        commitState: d,
        getActiveCutoutShot: u,
        isUploadingSticker: c,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: m,
        releaseHiddenSelection: y,
        requestDraw: b,
        stopTimelinePlayback: T,
        syncCutoutShot: U,
        syncPaintUi: H,
        syncUndoRedoButtons: D,
        updateSidePanel: P
      } = re);
    },
    pushHistory: W,
    restoreHistory: $,
    getHistoryCapabilities: te
  };
}
function NP(e) {
  const {
    canvas: t,
    cutoutV2: r,
    editor: n,
    sceneV2: i,
    state: o,
    stateV2: a,
    type: s
  } = e;
  let l, d, u, c, f, p, m;
  function y() {
    return s === "stickers" ? b() : o.shots;
  }
  function b() {
    return i ? o.stickers.filter((h) => h.placement === "sky") : o.stickers;
  }
  function T(h) {
    return i && Z(h);
  }
  function U(h) {
    return h.source.kind === "file" && !h.source.filename && !h.source.data_url;
  }
  function H(h) {
    return T(h) ? Ru(h, n.frame) : h;
  }
  function D(h, j) {
    T(h) ? jh(h, n.frame, j) : Object.assign(h, j);
  }
  function P() {
    const h = o.painting || (o.painting = Qi(null));
    return Array.isArray(h.groups) || (h.groups = []), h.groups;
  }
  function W(h = "paint") {
    var V, M;
    const j = Array.isArray((M = (V = o.painting) == null ? void 0 : V[h]) == null ? void 0 : M.strokes) ? o.painting[h].strokes : [], A = [], v = /* @__PURE__ */ new Set();
    for (const X of j) {
      const Q = String((X == null ? void 0 : X.actionGroupId) || "").trim();
      !Q || v.has(Q) || (v.add(Q), A.push(Q));
    }
    return A;
  }
  function $() {
    return W("paint");
  }
  function te(h, j) {
    const A = String(j || "").trim();
    return A ? `${h === "mask" ? "mask" : "paint"}:${A}` : "";
  }
  function re(h) {
    const j = String(h || "").trim();
    return j ? `raster:${j}` : "";
  }
  function ce(h) {
    const j = String(h || "").trim();
    if (!j) return "";
    const A = j.match(/^raster:(.*)$/);
    return String(A ? A[1] || "" : j).trim();
  }
  function E(h, j = null) {
    const A = String(h || "").trim();
    if (!A) return { layerKind: "paint", actionGroupId: "" };
    const v = A.match(/^(paint|mask):(.*)$/);
    return v ? { layerKind: v[1] === "mask" ? "mask" : "paint", actionGroupId: String(v[2] || "").trim() } : { layerKind: j === "mask" ? "mask" : "paint", actionGroupId: A };
  }
  function G() {
    var j;
    let h = -1;
    for (const A of b())
      h = Math.max(h, Number((A == null ? void 0 : A.z_index) || 0));
    for (const A of P())
      h = Math.max(h, Number((A == null ? void 0 : A.z_index) || 0));
    for (const A of Array.isArray((j = o.painting) == null ? void 0 : j.raster_objects) ? o.painting.raster_objects : [])
      String((A == null ? void 0 : A.layerKind) || "paint") === "paint" && (h = Math.max(h, Number((A == null ? void 0 : A.z_index) || 0)));
    return h + 1;
  }
  function ie(h, j = null) {
    const A = String(h || "").trim();
    if (!A) return null;
    const v = P();
    let V = v.find((M) => String((M == null ? void 0 : M.actionGroupId) || "") === A);
    return V ? j != null && (V.z_index = Math.max(0, Number(j || 0))) : (V = {
      id: A,
      type: "strokeGroup",
      actionGroupId: A,
      z_index: j == null ? G() : Math.max(0, Number(j || 0)),
      locked: !1,
      frame: null
    }, v.push(V)), V;
  }
  function pe(h) {
    if (!(h != null && h.centerUv)) return [];
    const j = Number(h.centerUv.u || 0), A = Number(h.centerUv.v || 0), v = Number(h.halfW || 0), V = Number(h.halfH || 0);
    return [
      {
        u: ((j - v) % 1 + 1) % 1,
        v: Ee(A - V, 0, 1)
      },
      {
        u: ((j + v) % 1 + 1) % 1,
        v: Ee(A - V, 0, 1)
      },
      {
        u: ((j + v) % 1 + 1) % 1,
        v: Ee(A + V, 0, 1)
      },
      {
        u: ((j - v) % 1 + 1) % 1,
        v: Ee(A + V, 0, 1)
      }
    ];
  }
  function me() {
    const h = new Set($()), A = P().filter((v) => h.has(String((v == null ? void 0 : v.actionGroupId) || "")));
    return h.forEach((v) => {
      A.some((V) => String((V == null ? void 0 : V.actionGroupId) || "") === v) || A.push({
        id: v,
        type: "strokeGroup",
        actionGroupId: v,
        z_index: G(),
        locked: !1,
        frame: null
      });
    }), A.sort((v, V) => Number((v == null ? void 0 : v.z_index) || 0) - Number((V == null ? void 0 : V.z_index) || 0)), o.painting.groups = A, A;
  }
  function ge(h, j, A) {
    var Ce;
    const v = (Ve) => (Number(Ve || 0) % 1 + 1) % 1, V = [];
    for (const Ve of A) {
      const je = Ve == null ? void 0 : Ve.geometry, Ye = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(Ye) && V.push(...Ye);
    }
    if (!V.length) return null;
    const M = v(((Ce = V[0]) == null ? void 0 : Ce.u) || 0);
    let X = 0, Q = 0;
    V.forEach((Ve) => {
      const je = v((Ve == null ? void 0 : Ve.u) || 0);
      X += M + Y(je, M), Q += Number((Ve == null ? void 0 : Ve.v) || 0);
    });
    const we = (X / V.length % 1 + 1) % 1;
    let xe = 1 / 0, F = -1 / 0, he = 1 / 0, Ae = -1 / 0;
    V.forEach((Ve) => {
      const je = v((Ve == null ? void 0 : Ve.u) || 0), Ye = Y(je, we);
      xe = Math.min(xe, Ye), F = Math.max(F, Ye);
      const $e = Number((Ve == null ? void 0 : Ve.v) || 0);
      he = Math.min(he, $e), Ae = Math.max(Ae, $e);
    });
    const Oe = A.reduce((Ve, je) => {
      const Ye = d(String((je == null ? void 0 : je.toolKind) || "pen")), $e = Sn[Ye] || Sn[xr], He = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number(($e == null ? void 0 : $e.sizeScale) ?? 1));
      return Math.max(Ve, He);
    }, 0), Re = Math.max(35e-4, Oe / 2048);
    return {
      centerUv: { u: ((we + (xe + F) * 0.5) % 1 + 1) % 1, v: Ee((he + Ae) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (F - xe) * 0.5 + Re,
      halfH: (Ae - he) * 0.5 + Re,
      uvPad: Re
    };
  }
  function ee(h, j, A) {
    const v = String(h || "").trim();
    if (!v) return null;
    const V = P().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === v);
    if (!V) return null;
    const M = A || g(v, j);
    return V.frame = ge(v, j, M), V.frame;
  }
  function S() {
    var v;
    const h = b().map((V) => ({
      type: "sticker",
      id: String((V == null ? void 0 : V.id) || ""),
      z_index: Number((V == null ? void 0 : V.z_index) || 0),
      item: V
    })), j = me().map((V) => ({
      type: "strokeGroup",
      id: String((V == null ? void 0 : V.id) || (V == null ? void 0 : V.actionGroupId) || ""),
      actionGroupId: String((V == null ? void 0 : V.actionGroupId) || ""),
      z_index: Number((V == null ? void 0 : V.z_index) || 0),
      item: V
    })), A = (Array.isArray((v = o.painting) == null ? void 0 : v.raster_objects) ? o.painting.raster_objects : []).filter((V) => String((V == null ? void 0 : V.layerKind) || "paint") === "paint").map((V) => ({
      type: "rasterObject",
      id: String((V == null ? void 0 : V.id) || ""),
      z_index: Number((V == null ? void 0 : V.z_index) || 0),
      item: V
    }));
    return [...h, ...j, ...A].sort((V, M) => Number(V.z_index || 0) - Number(M.z_index || 0));
  }
  function K(h = !0) {
    var A, v, V, M, X, Q;
    const j = S().filter((we) => we.type === "strokeGroup").map((we) => String(we.actionGroupId || "")).filter((we) => !!we);
    if (h) {
      const we = String(((v = (A = n.interaction) == null ? void 0 : A.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), xe = String(((M = (V = n.interaction) == null ? void 0 : V.stroke) == null ? void 0 : M.layerKind) || "").trim(), F = String(((Q = (X = n.interaction) == null ? void 0 : X.stroke) == null ? void 0 : Q.toolKind) || "").trim();
      we && xe === "paint" && F !== "eraser" && !j.includes(we) && j.push(we);
    }
    return j;
  }
  function de(h = !0) {
    var Q, we, xe, F, he, Ae;
    const j = S();
    if (!h) return j;
    const A = String(((we = (Q = n.interaction) == null ? void 0 : Q.stroke) == null ? void 0 : we.actionGroupId) || "").trim(), v = String(((F = (xe = n.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : F.layerKind) || "").trim(), V = String(((Ae = (he = n.interaction) == null ? void 0 : he.stroke) == null ? void 0 : Ae.toolKind) || "").trim();
    if (!A || v !== "paint" || V === "eraser" || j.some((Oe) => Oe.type === "strokeGroup" && String(Oe.actionGroupId || "") === A))
      return j;
    const M = p();
    let X = j.reduce((Oe, Re) => Math.max(Oe, Number((Re == null ? void 0 : Re.z_index) || 0)), -1) + 1;
    return M && se(M) && String(M.actionGroupId || "") === A && (X = Number(M.z_index || 0)), [
      ...j,
      {
        type: "strokeGroup",
        id: A,
        actionGroupId: A,
        z_index: X,
        item: null
      }
    ].sort((Oe, Re) => Number((Oe == null ? void 0 : Oe.z_index) || 0) - Number((Re == null ? void 0 : Re.z_index) || 0));
  }
  function q() {
    return P().slice().sort((h, j) => Number((h == null ? void 0 : h.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)).map((h) => I(te("paint", (h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || ""))).filter(Boolean);
  }
  function ue() {
    var h;
    return (Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : []).filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") === "paint").slice().sort((j, A) => Number((j == null ? void 0 : j.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)).map((j) => ye(re((j == null ? void 0 : j.id) || ""))).filter(Boolean);
  }
  function Pe() {
    return r || !Array.isArray(o.stickers) ? [] : b();
  }
  function ne() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Pe()];
  }
  function O(h) {
    return !!h && Array.isArray(o.shots) && o.shots.includes(h);
  }
  function Z(h) {
    return !!h && Array.isArray(o.stickers) && o.stickers.includes(h);
  }
  function ae() {
    var h;
    return Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : [];
  }
  function ye(h) {
    const j = ce(h);
    if (!j) return null;
    const A = ae().find((v) => String((v == null ? void 0 : v.id) || "").trim() === j);
    return !A || String((A == null ? void 0 : A.layerKind) || "paint") !== "paint" ? null : {
      ...A,
      id: re(j),
      type: "rasterObject",
      rasterObjectId: j
    };
  }
  function ve(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "rasterObject") return !1;
    const j = ce(h.rasterObjectId || h.id || "");
    return !!j && !!ye(re(j));
  }
  function I(h) {
    const j = E(h), A = String(j.actionGroupId || "").trim();
    if (!A) return null;
    const v = P().find((V) => String((V == null ? void 0 : V.id) || (V == null ? void 0 : V.actionGroupId) || "") === A || String((V == null ? void 0 : V.actionGroupId) || "") === A);
    return v ? {
      ...v,
      id: te("paint", A),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: A
    } : null;
  }
  function se(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "strokeGroup") return !1;
    const j = String(h.actionGroupId || "").trim(), A = String(h.layerKind || "paint").trim() || "paint";
    return !!j && !!I(te(A, j));
  }
  function g(h, j = null) {
    const A = E(h, j), v = String(A.actionGroupId || "").trim();
    return v ? c(A.layerKind).filter((V) => String((V == null ? void 0 : V.actionGroupId) || "").trim() === v) : [];
  }
  function _(h, j = "paint") {
    const A = String(h || "").trim(), V = `geomv5:${String(j || "paint").trim() || "paint"}:${A}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const M = l(), X = String((M == null ? void 0 : M.id) || ""), Q = M ? u(M) : null;
      return `${V}:frame:${X}:${Math.round(Number((M == null ? void 0 : M.yaw_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.pitch_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.roll_deg) ?? (M == null ? void 0 : M.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((M == null ? void 0 : M.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Q == null ? void 0 : Q.x) || 0))}:${Math.round(Number((Q == null ? void 0 : Q.y) || 0))}:${Math.round(Number((Q == null ? void 0 : Q.w) || 0))}:${Math.round(Number((Q == null ? void 0 : Q.h) || 0))}`;
    }
    return `${V}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function R(h, j, A) {
    return !h || typeof h != "object" ? h : {
      ...h,
      u: ((Number(h.u || 0) + Number(j || 0)) % 1 + 1) % 1,
      v: Ee(Number(h.v || 0) + Number(A || 0), 0, 1)
    };
  }
  function Y(h, j) {
    let A = Number(h || 0) - Number(j || 0);
    for (; A > 0.5; ) A -= 1;
    for (; A < -0.5; ) A += 1;
    return A;
  }
  function w(h, j = null, A = null) {
    var xe;
    const v = E(h, j), V = Array.isArray(A) ? A : g(v.actionGroupId, v.layerKind), M = [];
    if (V.forEach((F) => {
      const he = (F == null ? void 0 : F.geometry) || null, Ae = (he == null ? void 0 : he.geometryKind) === "lasso_fill" ? he == null ? void 0 : he.points : (he == null ? void 0 : he.processedPoints) || (he == null ? void 0 : he.rawPoints) || (he == null ? void 0 : he.points) || [];
      Array.isArray(Ae) && M.push(...Ae);
    }), !M.length) return { u: 0.5, v: 0.5 };
    const X = Number(((xe = M[0]) == null ? void 0 : xe.u) || 0);
    let Q = 0, we = 0;
    return M.forEach((F) => {
      Q += X + Y(Number((F == null ? void 0 : F.u) || 0), X), we += Number((F == null ? void 0 : F.v) || 0);
    }), {
      u: (Q / M.length % 1 + 1) % 1,
      v: Ee(we / M.length, 0, 1)
    };
  }
  function k(h, j, A = 1, v = 0) {
    if (!h || typeof h != "object") return h;
    const V = Number((j == null ? void 0 : j.u) || 0), M = Number((j == null ? void 0 : j.v) || 0), X = Y(Number(h.u || 0), V), Q = Number(h.v || 0) - M, we = Number(v || 0) * pr, xe = Math.cos(we), F = Math.sin(we), he = Math.max(0.02, Number(A || 1)), Ae = (X * xe - Q * F) * he, Oe = (X * F + Q * xe) * he;
    return {
      ...h,
      u: ((V + Ae) % 1 + 1) % 1,
      v: Ee(M + Oe, 0, 1)
    };
  }
  function L(h, j, A, v = null, V = null, M = null) {
    const X = E(h, V), Q = String(X.actionGroupId || "").trim();
    if (!Q) return !1;
    const we = c(X.layerKind), xe = Array.isArray(v) ? new Map(v.map((he) => [String((he == null ? void 0 : he.id) || ""), he])) : null;
    let F = !1;
    if (we.forEach((he) => {
      if (String((he == null ? void 0 : he.actionGroupId) || "").trim() !== Q) return;
      const Ae = (xe == null ? void 0 : xe.get(String((he == null ? void 0 : he.id) || ""))) || he, Oe = he == null ? void 0 : he.geometry, Re = Ae == null ? void 0 : Ae.geometry;
      !Oe || !Re || (Array.isArray(Re.points) && (Oe.points = Re.points.map((Ce) => R(Ce, j, A)), F = !0), Array.isArray(Re.rawPoints) && (Oe.rawPoints = Re.rawPoints.map((Ce) => R(Ce, j, A)), F = !0), Array.isArray(Re.processedPoints) && (Oe.processedPoints = Re.processedPoints.map((Ce) => R(Ce, j, A)), F = !0));
    }), F && M) {
      const he = P().find((Ae) => String((Ae == null ? void 0 : Ae.actionGroupId) || "") === Q);
      he && (he.frame = null);
    }
    return F;
  }
  function x(h, j = 1, A = 0, v = null, V = null, M = null) {
    const X = E(h, V), Q = String(X.actionGroupId || "").trim();
    if (!Q) return !1;
    const we = c(X.layerKind), xe = Array.isArray(v) ? v : g(Q, X.layerKind), F = Array.isArray(xe) ? new Map(xe.map((Oe) => [String((Oe == null ? void 0 : Oe.id) || ""), Oe])) : null, he = (M == null ? void 0 : M.centerUv) ?? w(Q, X.layerKind, xe);
    let Ae = !1;
    if (we.forEach((Oe) => {
      if (String((Oe == null ? void 0 : Oe.actionGroupId) || "").trim() !== Q) return;
      const Re = (F == null ? void 0 : F.get(String((Oe == null ? void 0 : Oe.id) || ""))) || Oe, Ce = Oe == null ? void 0 : Oe.geometry, Ve = Re == null ? void 0 : Re.geometry;
      !Ce || !Ve || (Array.isArray(Ve.points) && (Ce.points = Ve.points.map((je) => k(je, he, j, A)), Ae = !0), Array.isArray(Ve.rawPoints) && (Ce.rawPoints = Ve.rawPoints.map((je) => k(je, he, j, A)), Ae = !0), Array.isArray(Ve.processedPoints) && (Ce.processedPoints = Ve.processedPoints.map((je) => k(je, he, j, A)), Ae = !0));
    }), Ae && M) {
      const Oe = P().find((Re) => String((Re == null ? void 0 : Re.actionGroupId) || "") === Q);
      Oe && (Oe.frame = null);
    }
    return Ae;
  }
  function N(h, j, A, v = null) {
    const V = ce(h);
    if (!V) return !1;
    const M = ae().find((F) => String((F == null ? void 0 : F.id) || "").trim() === V);
    if (!M) return !1;
    const X = v && typeof v == "object" ? v : M, Q = (X == null ? void 0 : X.transform) || {}, we = Number(Q.du || 0) + Number(j || 0), xe = Ee(Number(Q.dv || 0) + Number(A || 0), -1, 1);
    return M.transform || (M.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), M.transform.du = we, M.transform.dv = xe, !0;
  }
  function C(h, j = 1, A = null) {
    const v = ce(h);
    if (!v) return !1;
    const V = ae().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === v);
    if (!V) return !1;
    const M = A && typeof A == "object" ? A : V, X = (M == null ? void 0 : M.transform) || {}, Q = Math.max(0.01, Number(X.scale || 1)), we = Ee(Q * Math.max(0.01, Number(j || 1)), 0.01, 100);
    return V.transform || (V.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), V.transform.scale = we, !0;
  }
  function B() {
    return G();
  }
  function J(h) {
    var j;
    return !h || typeof h != "object" ? !1 : a ? ((j = h.source) == null ? void 0 : j.kind) === "port" : String(h.id || "") === ld || String(h.source_kind || "") === HM;
  }
  function oe(h) {
    return !!(h && typeof h == "object" && h.visible === !1);
  }
  function z(h) {
    return J(h) && oe(h) ? am : 1;
  }
  function le(h, j, A = 1, v = 0) {
    if (!h || typeof h != "object") return h;
    const V = Number((j == null ? void 0 : j.u) || 0), M = Number((j == null ? void 0 : j.v) || 0), X = Y(Number(h.u || 0), V), Q = Number(h.v || 0) - M, we = Math.max(0.02, Number(A || 1)), xe = Number(v || 0) * pr, F = Math.cos(xe), he = Math.sin(xe), Ae = X / we, Oe = Q / we, Re = Ae * F + Oe * he, Ce = -Ae * he + Oe * F;
    return {
      ...h,
      u: ((V + Re) % 1 + 1) % 1,
      v: M + Ce
    };
  }
  function Se(h) {
    const j = (h == null ? void 0 : h.bbox) || null, A = (h == null ? void 0 : h.transform) || {};
    return j ? {
      u: (((Number(j.u0 || 0) + Number(j.u1 || 0)) * 0.5 + Number(A.du || 0)) % 1 + 1) % 1,
      v: Ee((Number(j.v0 || 0) + Number(j.v1 || 0)) * 0.5 + Number(A.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Me(h) {
    var we, xe, F, he;
    const j = (h == null ? void 0 : h.bbox) || null;
    if (!j) return [];
    const A = {
      u: (Number(j.u0 || 0) + Number(j.u1 || 0)) * 0.5,
      v: (Number(j.v0 || 0) + Number(j.v1 || 0)) * 0.5
    }, v = Math.max(0.01, Number(((we = h == null ? void 0 : h.transform) == null ? void 0 : we.scale) || 1)), V = Number(((xe = h == null ? void 0 : h.transform) == null ? void 0 : xe.rot_deg) || 0), M = Number(((F = h == null ? void 0 : h.transform) == null ? void 0 : F.du) || 0), X = Number(((he = h == null ? void 0 : h.transform) == null ? void 0 : he.dv) || 0);
    return [
      { u: Number(j.u0 || 0), v: Number(j.v0 || 0) },
      { u: Number(j.u1 || 0), v: Number(j.v0 || 0) },
      { u: Number(j.u1 || 0), v: Number(j.v1 || 0) },
      { u: Number(j.u0 || 0), v: Number(j.v1 || 0) }
    ].map((Ae) => R(k(Ae, A, v, V), M, X));
  }
  function fe(h) {
    const j = ce((h == null ? void 0 : h.rasterObjectId) || (h == null ? void 0 : h.id) || ""), A = (h == null ? void 0 : h.transform) || {}, v = (h == null ? void 0 : h.bbox) || {}, V = `${j}:${n.mode}:${f()}:${v.u0}:${v.v0}:${v.u1}:${v.v1}:${A.du}:${A.dv}:${A.rot_deg}:${A.scale}`;
    if (n.mode === "frame") {
      const M = l(), X = M ? u(M) : null;
      return `${V}:frame:${String((M == null ? void 0 : M.id) || "")}:${Math.round(Number((X == null ? void 0 : X.x) || 0))}:${Math.round(Number((X == null ? void 0 : X.y) || 0))}:${Math.round(Number((X == null ? void 0 : X.w) || 0))}:${Math.round(Number((X == null ? void 0 : X.h) || 0))}`;
    }
    return `${V}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function be(h) {
    const j = String((h == null ? void 0 : h.id) || ""), A = O(h) ? "frame" : Z(h) ? "sticker" : "item", v = H(h), V = [
      A,
      j,
      n.mode,
      Number((v == null ? void 0 : v.yaw_deg) || 0).toFixed(4),
      Number((v == null ? void 0 : v.pitch_deg) || 0).toFixed(4),
      Number((v == null ? void 0 : v.hFOV_deg) || 0).toFixed(4),
      Number((v == null ? void 0 : v.vFOV_deg) || 0).toFixed(4),
      Number((v == null ? void 0 : v.rot_deg) || 0).toFixed(4),
      Number((v == null ? void 0 : v.roll_deg) || 0).toFixed(4),
      Pr(v),
      T(h) && m(h)
    ].join(":");
    if (n.mode === "frame") {
      const M = l(), X = M ? u(M) : null;
      return `${V}:frame:${String((M == null ? void 0 : M.id) || "")}:${Math.round(Number((X == null ? void 0 : X.x) || 0))}:${Math.round(Number((X == null ? void 0 : X.y) || 0))}:${Math.round(Number((X == null ? void 0 : X.w) || 0))}:${Math.round(Number((X == null ? void 0 : X.h) || 0))}`;
    }
    return `${V}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function _e() {
    S().forEach((j, A) => {
      j.type === "sticker" && j.item && (j.item.z_index = A), j.type === "strokeGroup" && j.item && (j.item.z_index = A), j.type === "rasterObject" && j.item && (j.item.z_index = A);
    });
  }
  return {
    connect(h) {
      ({
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: d,
        getFrameViewRect: u,
        getPaintingLayerList: c,
        getPaintingRevisionKey: f,
        getSelected: p,
        sceneStickerShown: m
      } = h);
    },
    getList: y,
    skyStickers: b,
    isSceneSticker: T,
    isUploadingSticker: U,
    poseOf: H,
    writePose: D,
    getPaintingGroupList: P,
    makeStrokeGroupSelectionId: te,
    makeRasterObjectSelectionId: re,
    parseRasterObjectSelectionId: ce,
    ensurePaintingGroupEntry: ie,
    getFrameCornersUv: pe,
    ensureGroupFrame: ee,
    getDisplayListObjects: S,
    getOrderedPaintGroupIds: K,
    getOrderedDisplayListObjects: de,
    getSelectableStrokeGroupItems: q,
    getSelectableRasterObjectItems: ue,
    cutoutStickers: Pe,
    getCutoutSelectableItems: ne,
    isShotItem: O,
    isStickerItem: Z,
    getRasterObjectList: ae,
    getRasterObjectItem: ye,
    isRasterObjectItem: ve,
    getStrokeGroupItem: I,
    isStrokeGroupItem: se,
    getStrokeGroupStrokes: g,
    getStrokeGeomCacheKey: _,
    shortestWrappedDelta: Y,
    getStrokeGroupCenterUv: w,
    applyStrokeGroupOffset: L,
    applyStrokeGroupTransform: x,
    applyRasterObjectOffset: N,
    applyRasterObjectTransform: C,
    getNextStickerZIndex: B,
    isExternalSticker: J,
    isStickerHidden: oe,
    getStickerDisplayAlpha: z,
    inverseTransformErpPointAround: le,
    getRasterObjectCenterUv: Se,
    getRasterObjectTransformedErpPoints: Me,
    getRasterObjectGeomCacheKey: fe,
    getSceneItemGeomCacheKey: be,
    normalizeDisplayZIndices: _e
  };
}
function CP(e) {
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
  let d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne;
  function O() {
    const h = String(t.selectedId || "");
    if (!h) return null;
    const j = P(h);
    if (j) return j;
    const A = U(h);
    return A || (o ? m().find((v) => String((v == null ? void 0 : v.id) || "") === h) || null : b().find((v) => String((v == null ? void 0 : v.id) || "") === h) || null);
  }
  function Z() {
    const h = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], j = [], A = /* @__PURE__ */ new Set();
    return h.forEach((v) => {
      const V = String(v || "").trim();
      if (!V || A.has(V)) return;
      A.add(V);
      const M = V === String(t.selectedId || "") ? O() : P(V) || U(V) || (o ? m().find((X) => String((X == null ? void 0 : X.id) || "") === V) : b().find((X) => String((X == null ? void 0 : X.id) || "") === V));
      M && j.push(M);
    }), j;
  }
  function ae(h = null) {
    const j = Array.isArray(h) ? h : Z();
    if (!j || j.length < 2) return null;
    const A = j.map((xe) => ge(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!A.length) return null;
    const v = A.flatMap((xe) => xe.corners.map((F) => Number((F == null ? void 0 : F.x) || 0))), V = A.flatMap((xe) => xe.corners.map((F) => Number((F == null ? void 0 : F.y) || 0))), M = Math.min(...v), X = Math.max(...v), Q = Math.min(...V), we = Math.max(...V);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (M + X) * 0.5, y: (Q + we) * 0.5 },
      corners: [
        { x: M, y: Q },
        { x: X, y: Q },
        { x: X, y: we },
        { x: M, y: we }
      ],
      edgeMidpoints: [
        { edge: "top", x: (M + X) * 0.5, y: Q, a: { x: M, y: Q }, b: { x: X, y: Q } },
        { edge: "right", x: X, y: (Q + we) * 0.5, a: { x: X, y: Q }, b: { x: X, y: we } },
        { edge: "bottom", x: (M + X) * 0.5, y: we, a: { x: X, y: we }, b: { x: M, y: we } },
        { edge: "left", x: M, y: (Q + we) * 0.5, a: { x: M, y: we }, b: { x: M, y: Q } }
      ],
      rotateStemBase: { x: (M + X) * 0.5, y: Q },
      rotateHandle: { x: (M + X) * 0.5, y: Q - 30 }
    };
  }
  function ye(h) {
    const j = String((h == null ? void 0 : h.id) || "").trim();
    return !!j && Array.isArray(t.selectedIds) && t.selectedIds.includes(j);
  }
  function ve() {
    const h = O();
    return h ? ie(h) || te(h) ? "stroke" : ce(h) ? "frame" : "image" : null;
  }
  function I(h) {
    if (!h || typeof h != "object") return !1;
    if (ie(h)) {
      const j = String(h.actionGroupId || h.id || "").trim(), A = T().find((v) => String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim() === j);
      return (A == null ? void 0 : A.locked) === !0;
    }
    if (te(h)) {
      const j = S(h.rasterObjectId || h.id || ""), A = H().find((v) => String((v == null ? void 0 : v.id) || "").trim() === j);
      return (A == null ? void 0 : A.locked) === !0;
    }
    return h.locked === !0;
  }
  function se(h = null) {
    const j = Array.isArray(h) ? h : Z();
    return j.length > 0 && j.every((A) => I(A));
  }
  function g(h, j) {
    const A = j === !0;
    if (!h || typeof h != "object") return !1;
    if (ie(h)) {
      const v = String(h.actionGroupId || h.id || "").trim(), V = T().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === v);
      return !V || V.locked === A ? !1 : (V.locked = A, !0);
    }
    if (te(h)) {
      const v = S(h.rasterObjectId || h.id || ""), V = H().find((M) => String((M == null ? void 0 : M.id) || "").trim() === v);
      return !V || V.locked === A ? !1 : (V.locked = A, !0);
    }
    return h.locked === A ? !1 : (h.locked = A, !0);
  }
  function _() {
    if (r) return;
    const h = Z();
    if (!h.length) return;
    const j = !se(h);
    let A = !1;
    h.forEach((v) => {
      g(v, j) && (A = !0);
    }), A && (de(), u(), Pe(), ne(), q());
  }
  function R(h) {
    le(), s.selection = null, t.selectedId = (h == null ? void 0 : h.id) || null, t.selectedIds = h != null && h.id ? [h.id] : [], h && G(h) ? a.active.selected_sticker_id = h.id || null : a.active.selected_sticker_id = null, h && ce(h) ? a.active.selected_shot_id = h.id || null : h ? ce(h) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function Y(h, j = null) {
    const A = [], v = /* @__PURE__ */ new Set();
    (Array.isArray(h) ? h : []).forEach((X) => {
      const Q = String((X == null ? void 0 : X.id) || "").trim();
      !Q || v.has(Q) || (v.add(Q), A.push(Q));
    }), t.selectedIds = A, le(), s.selection = null;
    const V = String(j || "").trim();
    t.selectedId = V && A.includes(V) ? V : A[A.length - 1] || null;
    const M = O();
    a.active.selected_sticker_id = M && G(M) && M.id || null, M && ce(M) ? a.active.selected_shot_id = M.id || null : A.length || (a.active.selected_shot_id = null);
  }
  function w() {
    const h = (Array.isArray(a.shots) ? a.shots : []).map((A, v) => ({
      kind: "frame",
      item: A,
      label: String((A == null ? void 0 : A.label) || `Frame ${v + 1}`)
    })), j = f().map((A, v) => {
      var M, X;
      const V = $(A) ? String(A.id || ld) : String(((X = (M = a.assets) == null ? void 0 : M[A.asset_id]) == null ? void 0 : X.name) || A.asset_id || A.id || `Image ${v + 1}`);
      return {
        kind: "image",
        item: A,
        label: V
      };
    });
    return [...h, ...j];
  }
  function k(h) {
    return h === "frame" ? ze.camera : h === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function L(h) {
    return !h || !h.item ? {
      label: String((h == null ? void 0 : h.label) || ""),
      icon: null
    } : {
      label: String(h.label || ""),
      icon: k(h.kind)
    };
  }
  function x() {
    if (r) return;
    const h = O();
    !h || !$(h) || (h.visible = E(h), fe(), pe(), de(), u(), ne(), Pe(), q());
  }
  function N() {
    if (r || l !== "stickers") return;
    const h = O();
    if (!h || !$(h)) return;
    const j = h.initial_pose;
    if (!j || typeof j != "object") return;
    h.yaw_deg = Number(j.yaw_deg ?? h.yaw_deg ?? 0), h.pitch_deg = Number(j.pitch_deg ?? h.pitch_deg ?? 0), h.hFOV_deg = Number(j.hFOV_deg ?? h.hFOV_deg ?? 30);
    const A = D(Hs, () => {
      q();
    });
    A && (A.complete || A.naturalWidth || A.width) ? h.vFOV_deg = c(
      Number(j.hFOV_deg ?? h.hFOV_deg ?? 30),
      Number(A.naturalWidth || A.width || 1),
      Number(A.naturalHeight || A.height || 1)
    ) : h.vFOV_deg = Number(j.vFOV_deg ?? h.vFOV_deg ?? 30), h.rot_deg = Number(j.rot_deg ?? h.rot_deg ?? 0), de(), u(), ne(), Pe(), q();
  }
  function C(h) {
    if (!h || !$(h)) return null;
    const j = h.initial_pose;
    if (!j || typeof j != "object") return null;
    const A = {
      yaw_deg: Number(j.yaw_deg ?? h.yaw_deg ?? 0),
      pitch_deg: Number(j.pitch_deg ?? h.pitch_deg ?? 0),
      hFOV_deg: Number(j.hFOV_deg ?? h.hFOV_deg ?? 30),
      vFOV_deg: Number(j.vFOV_deg ?? h.vFOV_deg ?? 30),
      rot_deg: Number(j.rot_deg ?? h.rot_deg ?? 0)
    }, v = D(Hs, () => {
      q();
    });
    return v && (v.complete || v.naturalWidth || v.width) && (A.vFOV_deg = c(
      A.hFOV_deg,
      Number(v.naturalWidth || v.width || 1),
      Number(v.naturalHeight || v.height || 1)
    )), A;
  }
  function B() {
    const h = O();
    if (!h || !$(h)) return !1;
    const j = C(h);
    if (!j) return !1;
    const A = (v, V) => Math.abs(Number(v || 0) - Number(V || 0)) <= 1e-4;
    return !(A(h.yaw_deg, j.yaw_deg) && A(h.pitch_deg, j.pitch_deg) && A(h.hFOV_deg, j.hFOV_deg) && A(h.vFOV_deg, j.vFOV_deg) && A(h.rot_deg, j.rot_deg));
  }
  function J(h = {}) {
    const A = h.preservePanelValues !== !1 ? K(O()) : null;
    A && (t.panelLastValues = {
      yaw_deg: Number(A.yaw_deg || 0),
      pitch_deg: Number(A.pitch_deg || 0),
      hFOV_deg: Number(A.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(A.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(A.rot_deg || 0),
      roll_deg: Number(A.roll_deg || 0),
      aspect_id: Pr(A)
    }), t.selectedId = null, t.selectedIds = [], le(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function oe() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((h) => h.id === t.worldSelectedId && h.placement === "world") || null;
  }
  function z(h) {
    R(null), t.worldSelectedId = h, n.backgroundDirty = !0;
  }
  function le() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Se(h) {
    return !!h && !r && !h.locked;
  }
  function Me() {
    if (l !== "cutout") return;
    const h = p();
    h && (t.selectedId = String(h.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function fe() {
    var j;
    const h = O();
    (re(h) && !ue(h) || t.selectedId === dl && W() && !d() || ve() === "stroke" && !ee()) && R(null), ((j = oe()) == null ? void 0 : j.visible) === !1 && le();
  }
  function be() {
    if (r) return;
    const h = Z();
    if (!O() || h.length === 0 || h.some((Q) => I(Q))) return;
    me();
    const A = y(), v = new Set(h.map((Q) => G(Q) ? `sticker:${String(Q.id || "")}` : te(Q) ? `rasterObject:${S(Q.rasterObjectId || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || Q.id || "")}`)), V = [], M = [];
    if (A.forEach((Q) => {
      var xe, F;
      const we = Q.type === "sticker" ? `sticker:${String(((xe = Q.item) == null ? void 0 : xe.id) || "")}` : Q.type === "rasterObject" ? `rasterObject:${String(((F = Q.item) == null ? void 0 : F.id) || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || "")}`;
      v.has(we) ? V.push(Q) : M.push(Q);
    }), !V.length || V[V.length - 1] === A[A.length - 1]) return;
    [...M, ...V].forEach((Q, we) => {
      Q.type === "sticker" && Q.item && (Q.item.z_index = we), Q.type === "strokeGroup" && Q.item && (Q.item.z_index = we), Q.type === "rasterObject" && Q.item && (Q.item.z_index = we);
    }), pe(), de(), u(), Pe(), q();
  }
  function _e() {
    if (r) return;
    const h = Z();
    if (!O() || h.length === 0 || h.some((Q) => I(Q))) return;
    me();
    const A = y(), v = new Set(h.map((Q) => G(Q) ? `sticker:${String(Q.id || "")}` : te(Q) ? `rasterObject:${S(Q.rasterObjectId || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || Q.id || "")}`)), V = [], M = [];
    if (A.forEach((Q) => {
      var xe, F;
      const we = Q.type === "sticker" ? `sticker:${String(((xe = Q.item) == null ? void 0 : xe.id) || "")}` : Q.type === "rasterObject" ? `rasterObject:${String(((F = Q.item) == null ? void 0 : F.id) || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || "")}`;
      v.has(we) ? V.push(Q) : M.push(Q);
    }), !V.length || V[0] === A[0]) return;
    [...V, ...M].forEach((Q, we) => {
      Q.type === "sticker" && Q.item && (Q.item.z_index = we), Q.type === "strokeGroup" && Q.item && (Q.item.z_index = we), Q.type === "rasterObject" && Q.item && (Q.item.z_index = we);
    }), pe(), de(), u(), Pe(), q();
  }
  return {
    connect(h) {
      ({
        cameraShoots: d,
        commitAndRefreshNode: u,
        computeStickerVFov: c,
        cutoutStickers: f,
        getActiveCutoutShot: p,
        getCutoutSelectableItems: m,
        getDisplayListObjects: y,
        getList: b,
        getPaintingGroupList: T,
        getRasterObjectItem: U,
        getRasterObjectList: H,
        getStickerUiImage: D,
        getStrokeGroupItem: P,
        hasCamera: W,
        isExternalSticker: $,
        isRasterObjectItem: te,
        isSceneSticker: re,
        isShotItem: ce,
        isStickerHidden: E,
        isStickerItem: G,
        isStrokeGroupItem: ie,
        markObjectVisualsDirty: pe,
        normalizeDisplayZIndices: me,
        objectGeom: ge,
        paintingShown: ee,
        parseRasterObjectSelectionId: S,
        poseOf: K,
        pushHistory: de,
        requestDraw: q,
        sceneStickerShown: ue,
        updateSelectionMenu: Pe,
        updateSidePanel: ne
      } = h);
    },
    getSelected: O,
    getSelectedItems: Z,
    getMultiSelectionGeom: ae,
    isItemSelected: ye,
    getSelectedKind: ve,
    isItemLocked: I,
    areAllSelectedItemsLocked: se,
    toggleSelectedLock: _,
    setSelectedItem: R,
    setSelectedItems: Y,
    getCutoutInspectorItems: w,
    getSelectionItemIcon: k,
    getSelectionItemLabelData: L,
    toggleSelectedExternalStickerVisibility: x,
    restoreSelectedToInitialPose: N,
    canRestoreSelectedToInitial: B,
    clearSelection: J,
    selectedWorldSticker: oe,
    selectWorldSticker: z,
    clearWorldSelection: le,
    worldStickerEditable: Se,
    applyInitialCutoutFocus: Me,
    releaseHiddenSelection: fe,
    bringSelectedToFront: be,
    sendSelectedToBack: _e
  };
}
function AP(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let a, s, l, d, u, c, f = { key: [], projection: null };
  function p() {
    return o && a() && i.camera.projection === "erp";
  }
  function m() {
    const Z = te({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !Z || Z.length !== 4 ? !1 : Z[0].y >= Z[3].y;
  }
  function y() {
    return sm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function b() {
    const O = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return O.some((Z, ae) => Z !== f.key[ae]) && (f = { key: O, projection: cm(y(), r.width, r.height) }), f.projection;
  }
  function T(O) {
    const Z = b().project(O);
    return Z.z > 1e-4 ? Z : null;
  }
  function U(O, Z) {
    return b().ray(O, Z);
  }
  function H() {
    const O = r.width, Z = r.height, ae = 2;
    if (O / Math.max(Z, 1) >= ae) {
      const g = Z, _ = g * ae;
      return { x: (O - _) * 0.5, y: 0, w: _, h: g };
    }
    const ve = O, I = ve / ae;
    return { x: 0, y: (Z - I) * 0.5, w: ve, h: I };
  }
  function D(O) {
    return {
      lon: Math.atan2(O.x, O.z),
      lat: Math.asin(Ee(O.y, -1, 1))
    };
  }
  function P(O, Z = null) {
    const { lon: ae, lat: ye } = D(O), ve = H();
    let I = ve.x + (ae / (2 * Math.PI) + 0.5) * ve.w;
    const se = ve.y + (0.5 - ye / Math.PI) * ve.h;
    if (Z !== null) {
      for (; I - Z > ve.w / 2; ) I -= ve.w;
      for (; I - Z < -ve.w / 2; ) I += ve.w;
    }
    return { x: I, y: se, z: 1 };
  }
  function W(O) {
    const Z = d(O), ae = Zi(
      Number(Z.yaw_deg || 0),
      Number(Z.pitch_deg || 0),
      Number(Z.rot_deg || Z.roll_deg || 0)
    ), ye = Math.tan(Ee(Number(Z.hFOV_deg || 20), 0.1, 179) * 0.5 * pr), ve = Math.tan(Ee(Number(Z.vFOV_deg || 20), 0.1, 179) * 0.5 * pr);
    return {
      centerDir: ae.fwd,
      right: ae.right,
      up: ae.up,
      tanX: ye,
      tanY: ve
    };
  }
  function $(O, Z, ae) {
    return oP(Bf(Bf(O.centerDir, Uf(O.right, Z)), Uf(O.up, ae)));
  }
  function te(O) {
    const Z = W(O);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: ye, v: ve }) => $(Z, ye * Z.tanX, ve * Z.tanY));
  }
  function re(O, Z, ae) {
    const ye = W(O), ve = (Z * 2 - 1) * ye.tanX, I = (1 - ae * 2) * ye.tanY;
    return $(ye, ve, I);
  }
  function ce(O) {
    const Z = t.width / Math.max(1, r.width), ae = t.height / Math.max(1, r.height);
    return { x: O.x * Z, y: O.y * ae, w: O.w * Z, h: O.h * ae };
  }
  function E(O, Z = null, ae = null, ye = null) {
    if (n.mode === "frame") {
      const ve = Z || s();
      if (!ve) return [];
      const I = ae || l(ve);
      return de(O, ve, I);
    }
    return ee(O, ye);
  }
  function G(O, Z = null, ae = null, ye = null, ve = null) {
    if (!O) return null;
    if (n.mode === "unwrap") {
      const se = ee([O], ve);
      return se[0] ? { x: se[0].x, y: se[0].y, z: 1 } : null;
    }
    const I = pe(O);
    return I ? u(I, Z, ae, ye) : null;
  }
  function ie(O, Z) {
    if (!O || !Z) return null;
    const ae = Number(Z.x || 0), ye = Number(Z.y || 0);
    return re(O, ae, ye);
  }
  function pe(O) {
    if (!O) return null;
    const Z = (Number(O.u || 0) - 0.5) * (2 * Math.PI), ae = (0.5 - Number(O.v || 0)) * Math.PI, ye = Math.cos(ae);
    return hl(ye * Math.sin(Z), Math.sin(ae), ye * Math.cos(Z));
  }
  function me(O, Z) {
    if (!O || !Z) return null;
    const ae = W(O), ye = tc(Z, ae.centerDir);
    if (!Number.isFinite(ye) || ye <= 1e-6) return null;
    const ve = tc(Z, ae.right) / ye, I = tc(Z, ae.up) / ye;
    return {
      x: (ve / Math.max(1e-6, ae.tanX) + 1) * 0.5,
      y: (1 - I / Math.max(1e-6, ae.tanY)) * 0.5
    };
  }
  function ge(O) {
    if (!Array.isArray(O) || O.length < 3) return [];
    if (n.mode === "unwrap") {
      const ae = H();
      return O.map((ye) => ({
        x: ae.x + Number(ye.u || 0) * ae.w,
        y: ae.y + Number(ye.v || 0) * ae.h
      }));
    }
    const Z = O.map((ae) => T(pe(ae))).filter(Boolean);
    return Z.every((ae) => Number(ae.z || 0) > 0) ? Z.map((ae) => ({ x: Number(ae.x || 0), y: Number(ae.y || 0) })) : [];
  }
  function ee(O, Z = null) {
    if (!Array.isArray(O) || O.length < 1) return [];
    if (n.mode === "unwrap") {
      const ye = H();
      return O.map((ve) => {
        const I = (Number(ve.u || 0) % 1 + 1) % 1, se = Z == null ? I : Number(Z || 0) + c(I, Z);
        return {
          x: ye.x + se * ye.w,
          y: ye.y + Number(ve.v || 0) * ye.h
        };
      });
    }
    const ae = O.map((ye) => T(pe(ye))).filter(Boolean);
    return ae.every((ye) => Number(ye.z || 0) > 0) ? ae.map((ye) => ({ x: Number(ye.x || 0), y: Number(ye.y || 0) })) : [];
  }
  function S(O, Z = 160) {
    if (!Array.isArray(O) || O.length < 3) return !1;
    for (let ae = 0; ae < O.length; ae += 1) {
      const ye = O[ae], ve = O[(ae + 1) % O.length];
      if (!ye || !ve || !Number.isFinite(ye.x) || !Number.isFinite(ye.y) || !Number.isFinite(ve.x) || !Number.isFinite(ve.y) || Math.hypot(Number(ve.x) - Number(ye.x), Number(ve.y) - Number(ye.y)) > Z) return !1;
    }
    return !0;
  }
  function K(O, Z, ae) {
    if (!Array.isArray(O) || O.length < 3 || !Z || !ae) return [];
    const ye = [];
    for (const ve of O) {
      const I = pe(ve), se = me(Z, I);
      if (!se) return [];
      ye.push({
        x: Number(ae.x || 0) + Number(se.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(se.y || 0) * Number(ae.h || 0)
      });
    }
    return S(ye, Math.max(80, Math.max(ae.w, ae.h) * 0.75)) ? ye : [];
  }
  function de(O, Z, ae) {
    if (!Array.isArray(O) || O.length < 1 || !Z || !ae) return [];
    const ye = [];
    for (const ve of O) {
      const I = pe(ve), se = me(Z, I);
      se && ye.push({
        x: Number(ae.x || 0) + Number(se.x || 0) * Number(ae.w || 0),
        y: Number(ae.y || 0) + Number(se.y || 0) * Number(ae.h || 0)
      });
    }
    return ye;
  }
  function q(O) {
    const Z = r.getBoundingClientRect();
    return {
      x: (O.clientX - Z.left) / Z.width * r.width,
      y: (O.clientY - Z.top) / Z.height * r.height
    };
  }
  function ue(O) {
    const Z = r.getBoundingClientRect();
    return {
      x: Number(O.clientX) - Number(Z.left || 0),
      y: Number(O.clientY) - Number(Z.top || 0)
    };
  }
  function Pe(O, Z = performance.now()) {
    if (n.mode === "unwrap") {
      const I = H(), se = (O.x - I.x) / Math.max(1, I.w), g = (O.y - I.y) / Math.max(1, I.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (se % 1 + 1) % 1,
        v: Ee(g, 0, 1),
        t: Number(Z || 0)
      };
    }
    const ae = U(O.x, O.y), { lon: ye, lat: ve } = D(ae);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ye / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - ve / Math.PI, 0, 1),
      t: Number(Z || 0)
    };
  }
  function ne(O, Z, ae = performance.now()) {
    const ye = l(Z);
    if (!ye) return null;
    const ve = {
      x: (Number(O.x) - ye.x) / Math.max(1, ye.w),
      y: (Number(O.y) - ye.y) / Math.max(1, ye.h)
    };
    if (ve.x < 0 || ve.x > 1 || ve.y < 0 || ve.y > 1) return null;
    const I = ie(Z, ve);
    if (!I) return null;
    const { lon: se, lat: g } = D(I);
    return {
      targetKind: "ERP_GLOBAL",
      u: (se / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - g / Math.PI, 0, 1),
      t: Number(ae || 0)
    };
  }
  return {
    connect(O) {
      ({
        cameraShoots: a,
        getActiveCutoutShot: s,
        getFrameViewRect: l,
        poseOf: d,
        projectSceneItemDir: u,
        shortestWrappedDelta: c
      } = O);
    },
    isErpCamera: p,
    currentViewCamera: y,
    currentViewProjection: b,
    projectDir: T,
    screenToWorldDir: U,
    getUnwrapRect: H,
    projectDirUnwrap: P,
    getStickerFrame: W,
    stickerDirFromFrame: $,
    stickerCornersDir: te,
    stickerSampleDir: re,
    stickerCornerOrderSanity: m,
    projectEditorPoints: E,
    projectErpPointToEditor: G,
    frameLocalPointToWorldDir: ie,
    erpPointToWorldDir: pe,
    worldDirToFrameLocalPoint: me,
    projectLassoPointsToCurrentView: ge,
    projectErpLassoPointsToFrameRect: K,
    screenPos: q,
    screenPosCss: ue,
    screenPosToErpPoint: Pe,
    screenPosToFrameAsErpPoint: ne,
    deviceRect: ce
  };
}
function IP(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de;
  function q(I, se) {
    const g = String(I.actionGroupId || I.id || "").trim(), _ = H(g, I.layerKind), R = s(g, I.layerKind, _), Y = (R == null ? void 0 : R.centerUv) || U(g, I.layerKind, _), w = n.mode === "unwrap" ? Number((Y == null ? void 0 : Y.u) || 0) : null, k = [], L = n.mode === "frame" ? l() : null, x = L ? c(L) : null;
    for (const fe of _) {
      const be = (fe == null ? void 0 : fe.geometry) || null, _e = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], h = pe(_e, L, x, w).filter((v) => Number.isFinite(v == null ? void 0 : v.x) && Number.isFinite(v == null ? void 0 : v.y));
      if (!h.length) continue;
      const j = d(String((fe == null ? void 0 : fe.toolKind) || "pen")), A = Sn[j] || Sn[xr];
      k.push({
        points: h,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((fe == null ? void 0 : fe.size) || 10) * Math.max(0.1, Number((A == null ? void 0 : A.sizeScale) ?? 1)) + 10),
        layerKind: String((fe == null ? void 0 : fe.layerKind) || I.layerKind || "paint")
      });
    }
    const N = me(Y, null, L, x, w);
    if (!N) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(se, fe), fe;
    }
    const B = u(R).map((fe) => me(fe, N.x, L, x, w)).filter((fe) => Number.isFinite(fe == null ? void 0 : fe.x) && Number.isFinite(fe == null ? void 0 : fe.y)).map((fe) => ({ x: Number(fe.x || 0), y: Number(fe.y || 0) }));
    if (B.length < 4) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(se, fe), fe;
    }
    const J = (fe, be) => ({
      x: (Number((fe == null ? void 0 : fe.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((fe == null ? void 0 : fe.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: fe,
      b: be
    }), oe = J(B[0], B[1]), z = J(B[1], B[2]), le = J(B[2], B[3]), Se = J(B[3], B[0]), Me = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: B,
      edgeMidpoints: [
        { edge: "top", ...oe },
        { edge: "right", ...z },
        { edge: "bottom", ...le },
        { edge: "left", ...Se }
      ],
      rotateStemBase: { x: oe.x, y: oe.y },
      rotateHandle: { x: oe.x, y: oe.y - 30 },
      strokePaths: k,
      visible: !0
    };
    return n._strokeGeomCache.set(se, Me), Me;
  }
  function ue(I, se) {
    const g = n.mode === "frame" ? l() : null, _ = g ? c(g) : null, R = f(I), Y = n.mode === "unwrap" ? Number((R == null ? void 0 : R.u) || 0) : null, w = me(R, null, g, _, Y), L = m(I).map((B) => me(B, (w == null ? void 0 : w.x) ?? null, g, _, Y)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (!Array.isArray(L) || L.length < 4) {
      const B = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(se, B), B;
    }
    const x = L.slice(0, 4).map((B) => ({ x: Number((B == null ? void 0 : B.x) || 0), y: Number((B == null ? void 0 : B.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: x.reduce((B, J) => B + Number(J.x || 0), 0) / x.length,
        y: x.reduce((B, J) => B + Number(J.y || 0), 0) / x.length
      },
      corners: x,
      visible: !0
    };
    return n._strokeGeomCache.set(se, C), C;
  }
  function Pe(I, se = null, g = null, _ = null, R = {}) {
    if (n.mode === "frame") {
      const N = g || l(), C = _ || c(N);
      if (!N || !C) return null;
      const B = N ? de(N, I) : null;
      return B ? {
        x: Number(C.x || 0) + Number(B.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(B.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ie(I, se);
    const Y = 1e-4, w = o().project(I, Y);
    if (!Number.isFinite(w.z) || w.z <= Y && !(R != null && R.clipBehind)) return null;
    const k = r.width, L = r.height, x = Math.max(k, L) * 2;
    return {
      x: Ee(w.x, -x, k + x),
      y: Ee(w.y, -x, L + x),
      z: Math.max(w.z, Y),
      rawZ: w.z,
      clipped: w.z <= Y
    };
  }
  function ne(I, se = []) {
    if (n.mode !== "pano" || te(I)) return 1;
    const g = se.map((_) => Number((_ == null ? void 0 : _.rawZ) ?? (_ == null ? void 0 : _.z))).filter((_) => Number.isFinite(_));
    return g.length ? rP(0.035, 0.2, Math.min(...g)) : 1;
  }
  function O(I) {
    if (W(I) && !ge(I)) return { visible: !1 };
    const se = E(I), g = wn(Number(se.yaw_deg || 0), Number(se.pitch_deg || 0)), _ = n.mode === "frame" ? l() : null, R = _ ? c(_) : null, Y = n.mode === "pano" && (te(I) || $(I)), w = Y ? { clipBehind: !0 } : null, k = Pe(g, null, _, R, w);
    if (!k) return { visible: !1 };
    const L = b(I), N = ee(I).map((V) => Pe(V, k.x, _, R, w)).filter((V) => Number.isFinite(V == null ? void 0 : V.x) && Number.isFinite(V == null ? void 0 : V.y));
    if (N.length < 4) return { visible: !1 };
    const C = S(L, 0, L.tanY), B = S(L, 0, L.tanY + Math.max(L.tanY * 0.43, 0.053)), J = Pe(C, k.x, _, R, w);
    if (!J) return { visible: !1 };
    const oe = Pe(B, (J == null ? void 0 : J.x) ?? k.x, _, R, w), z = ((oe == null ? void 0 : oe.x) ?? J.x) - J.x, le = ((oe == null ? void 0 : oe.y) ?? J.y) - J.y, Se = Math.hypot(z, le) || 1, Me = {
      x: J.x + z / Se * 30,
      y: J.y + le / Se * 30
    }, fe = Pe(S(L, 0, L.tanY), k.x, _, R, w), be = Pe(S(L, L.tanX, 0), k.x, _, R, w), _e = Pe(S(L, 0, -L.tanY), k.x, _, R, w), h = Pe(S(L, -L.tanX, 0), k.x, _, R, w);
    if (!fe || !be || !_e || !h) return { visible: !1 };
    const j = [
      k,
      ...N,
      J,
      oe,
      fe,
      be,
      _e,
      h
    ];
    if (Y && !j.some((V) => Number((V == null ? void 0 : V.rawZ) ?? (V == null ? void 0 : V.z)) > 1e-4)) return { visible: !1 };
    const A = ne(I, j), v = [
      {
        edge: "top",
        x: fe.x,
        y: fe.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: be.x,
        y: be.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: _e.x,
        y: _e.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: h.x,
        y: h.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: k.x, y: k.y },
      corners: N.map((V) => ({ x: V.x, y: V.y })),
      edgeMidpoints: v,
      rotateStemBase: { x: J.x, y: J.y },
      rotateHandle: Me,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: A,
      visible: !0
    };
  }
  function Z(I) {
    if (t && $(I) && D()) return { visible: !1 };
    if (!ce() && (re(I) || P(I))) return { visible: !1 };
    if (re(I)) {
      const R = String(I.actionGroupId || I.id || "").trim(), Y = T(R, I.layerKind), w = n._strokeGeomCache.get(Y);
      return w || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), q(I, Y));
    }
    if (P(I)) {
      const R = p(I), Y = n._strokeGeomCache.get(R);
      return Y || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ue(I, R));
    }
    const se = y(I), g = n._strokeGeomCache.get(se);
    if (g) return g;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const _ = O(I);
    return n._strokeGeomCache.set(se, _), _;
  }
  function ae(I, se, g, _ = null) {
    const R = [];
    for (let Y = 0; Y <= g; Y += 1) {
      const w = Y / g;
      let k = 0, L = 0;
      se === 0 ? (k = w, L = 0) : se === 1 ? (k = 1, L = w) : se === 2 ? (k = 1 - w, L = 1) : (k = 0, L = 1 - w);
      const x = K(I, k, L), N = n.mode === "unwrap" ? ie(x, _) : G(x);
      N && R.push(N);
    }
    return R;
  }
  function ye() {
    const I = [...Array.isArray(i.shots) ? i.shots : []], se = [...a()].sort((g, _) => Number(g.z_index || 0) - Number(_.z_index || 0));
    return [...I, ...se];
  }
  function ve() {
    const I = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((g, _) => Number(_.z_index || 0) - Number(g.z_index || 0)), ...I];
  }
  return {
    connect(I) {
      ({
        currentViewProjection: o,
        cutoutStickers: a,
        ensureGroupFrame: s,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: d,
        getFrameCornersUv: u,
        getFrameViewRect: c,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: p,
        getRasterObjectTransformedErpPoints: m,
        getSceneItemGeomCacheKey: y,
        getStickerFrame: b,
        getStrokeGeomCacheKey: T,
        getStrokeGroupCenterUv: U,
        getStrokeGroupStrokes: H,
        isFreeSpaceView: D,
        isRasterObjectItem: P,
        isSceneSticker: W,
        isShotItem: $,
        isStickerItem: te,
        isStrokeGroupItem: re,
        paintingShown: ce,
        poseOf: E,
        projectDir: G,
        projectDirUnwrap: ie,
        projectEditorPoints: pe,
        projectErpPointToEditor: me,
        sceneStickerShown: ge,
        stickerCornersDir: ee,
        stickerDirFromFrame: S,
        stickerSampleDir: K,
        worldDirToFrameLocalPoint: de
      } = I);
    },
    projectSceneItemDir: Pe,
    objectGeom: Z,
    sampleStickerEdge: ae,
    getCutoutSelectableItemsForDisplay: ye,
    getCutoutSelectableItemsForHit: ve
  };
}
const Ua = /* @__PURE__ */ new Map();
function EP(e) {
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
  let d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G;
  function ie(w = n.interaction) {
    const k = String((w == null ? void 0 : w.kind) || "");
    if (k === "paint_stroke" || k === "paint_lasso_fill" || k === "move_stroke_group" || k === "scale_stroke_group" || k === "rotate_stroke_group" || k === "move_raster_object" || k === "scale_raster_object") return !0;
    if (k === "move_multi") {
      const L = Array.isArray(w == null ? void 0 : w.strokeSnapshots) && w.strokeSnapshots.length > 0, x = Array.isArray(w == null ? void 0 : w.rasterSnapshots) && w.rasterSnapshots.length > 0;
      return L || x;
    }
    return !1;
  }
  function pe() {
    var k, L, x, N;
    let w = null;
    try {
      const C = b(), B = ((N = (x = (L = (k = n.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : L.call(k, C)) == null ? void 0 : x.displayPaint) == null ? void 0 : N.canvas) || null;
      B && (w = {
        source: B,
        revision: `${T()}:${me()}`
      });
    } catch {
      w = null;
    }
    return w;
  }
  function me() {
    var N, C, B, J, oe, z, le;
    const w = n.interaction, k = String((w == null ? void 0 : w.kind) || "");
    if (!ie(w)) return "";
    if (k === "paint_stroke" || k === "paint_lasso_fill") {
      const Se = ((N = w == null ? void 0 : w.stroke) == null ? void 0 : N.geometry) || null, Me = String(((C = w == null ? void 0 : w.stroke) == null ? void 0 : C.layerKind) || ""), fe = ((B = Se == null ? void 0 : Se.rawPoints) == null ? void 0 : B.length) ?? ((J = Se == null ? void 0 : Se.points) == null ? void 0 : J.length) ?? 0, be = String((w == null ? void 0 : w._livePreviewToken) || "");
      return `_${Me || "paint"}_${k}_live${be}_${fe}_${n.livePaintInteractionRevision}`;
    }
    const L = String(((oe = w == null ? void 0 : w.item) == null ? void 0 : oe.actionGroupId) || ""), x = String(((z = w == null ? void 0 : w.item) == null ? void 0 : z.rasterObjectId) || ((le = w == null ? void 0 : w.item) == null ? void 0 : le.id) || "");
    return `_${k}_${L || x || "active"}_${n.livePaintInteractionRevision}`;
  }
  function ge(w, k = null) {
    const L = String((w == null ? void 0 : w.rasterDataUrl) || "").trim();
    if (!L) return null;
    const x = s.get(L);
    if (x)
      return x.complete || x.width || x.naturalWidth, x;
    const N = new Image();
    return N.onload = () => {
      typeof k == "function" && k();
    }, N.src = L, s.set(L, N), N;
  }
  function ee(w) {
    const k = String((w == null ? void 0 : w.rasterDataUrl) || "").trim();
    if (!k) return null;
    const L = a.get(k);
    if (L) return L.ready ? L : null;
    const x = ge(w, () => {
      const le = a.get(k);
      le && (le.ready = !1), ce({ localOnly: !0 });
    });
    if (!x || !(x.complete || x.width || x.naturalWidth)) return null;
    const N = Number(x.naturalWidth || x.width || 0), C = Number(x.naturalHeight || x.height || 0);
    if (N < 1 || C < 1) return null;
    const B = dn({ label: "editor.image-pixels" });
    B.width = N, B.height = C;
    const J = B.getContext("2d", { willReadFrequently: !0 });
    if (!J) return null;
    J.clearRect(0, 0, N, C), J.drawImage(x, 0, 0, N, C);
    const oe = J.getImageData(0, 0, N, C).data, z = { canvas: B, width: N, height: C, alpha: oe, ready: !0 };
    return a.set(k, z), z;
  }
  function S(w, k) {
    if (!w || !k) return null;
    const L = (w == null ? void 0 : w.bbox) || null;
    if (!L) return null;
    const x = (w == null ? void 0 : w.transform) || {}, N = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, C = {
      u: ((Number(k.u || 0) - Number(x.du || 0)) % 1 + 1) % 1,
      v: Number(k.v || 0) - Number(x.dv || 0)
    }, B = D(
      C,
      N,
      Number(x.scale || 1),
      Number(x.rot_deg || 0)
    ), J = Number(L.u1 || 0) - Number(L.u0 || 0), oe = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(J > 1e-6) || !(oe > 1e-6)) return null;
    const z = G(Number(B.u || 0), Number(L.u0 || 0)) / J, le = (Number(B.v || 0) - Number(L.v0 || 0)) / oe;
    if (z < 0 || z > 1 || le < 0 || le > 1) return 0;
    const Se = ee(w);
    if (!Se) return null;
    const Me = Ee(Math.floor(z * Se.width), 0, Se.width - 1), fe = Ee(Math.floor(le * Se.height), 0, Se.height - 1);
    return Number(Se.alpha[(fe * Se.width + Me) * 4 + 3] || 0);
  }
  function K(w, k, L, x = null) {
    if (!(k != null && k.visible) || !Lr(L, k.corners)) return !1;
    const N = x || E(L, performance.now()), C = S(w, N);
    return C === null ? !0 : C > 8;
  }
  function de() {
    var x, N, C, B, J, oe, z, le;
    const w = ((N = (x = n.paintEngine) == null ? void 0 : x.getErpTarget) == null ? void 0 : N.call(x, b(!1))) || null, k = Math.max(1, Number(((C = w == null ? void 0 : w.descriptor) == null ? void 0 : C.width) || ((J = (B = w == null ? void 0 : w.displayPaint) == null ? void 0 : B.canvas) == null ? void 0 : J.width) || 2048)), L = Math.max(1, Number(((oe = w == null ? void 0 : w.descriptor) == null ? void 0 : oe.height) || ((le = (z = w == null ? void 0 : w.displayPaint) == null ? void 0 : z.canvas) == null ? void 0 : le.height) || 1024));
    return { width: k, height: L };
  }
  function q() {
    var fe, be, _e;
    const w = n.interaction;
    if ((w == null ? void 0 : w.kind) !== "paint_stroke") return null;
    const k = (w == null ? void 0 : w.stroke) || null;
    if (!k || String((k == null ? void 0 : k.layerKind) || "") !== "paint" || String((k == null ? void 0 : k.toolKind) || "") !== "eraser") return null;
    const L = f(), x = `${me()}:${L.width}:${L.height}`;
    if (((fe = n._activePaintEraserPreviewInfo) == null ? void 0 : fe.cacheKey) === x)
      return n._activePaintEraserPreviewInfo.value || null;
    const N = on(k), C = (N == null ? void 0 : N.geometry) || null;
    if (C && String(C.geometryKind || "") !== "lasso_fill") {
      const h = Array.isArray(C.rawPoints) && C.rawPoints.length ? C.rawPoints : Array.isArray(C.points) ? C.points : [];
      C.processedPoints = $(h, N.targetSpace, !0);
    }
    const B = u(L.width, L.height, { readback: !0 });
    if (!te(B, N, { w: L.width, h: L.height })) return null;
    const J = ((_e = (be = B.ctx) == null ? void 0 : be.getImageData(0, 0, L.width, L.height)) == null ? void 0 : _e.data) || null;
    if (!J) return null;
    let oe = L.width, z = L.height, le = -1, Se = -1;
    for (let h = 0; h < L.height; h += 1)
      for (let j = 0; j < L.width; j += 1)
        J[(h * L.width + j) * 4 + 3] <= 8 || (j < oe && (oe = j), h < z && (z = h), j > le && (le = j), h > Se && (Se = h));
    if (le < oe || Se < z)
      return n._activePaintEraserPreviewInfo = { cacheKey: x, value: null }, null;
    const Me = {
      surface: B,
      bounds: { minX: oe, minY: z, maxX: le, maxY: Se },
      key: `${x}:${oe}:${z}:${le}:${Se}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: x, value: Me }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Me;
  }
  function ue() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function Pe(w, k, L) {
    var x, N;
    if (!w) return null;
    if (w.type === "rasterObject" && ((x = w.item) != null && x.bbox)) {
      const C = w.item.bbox, B = ((N = w.item) == null ? void 0 : N.transform) || {}, J = Number(C.u0 || 0) + Number(B.du || 0), oe = Number(C.u1 || 0) + Number(B.du || 0), z = Number(C.v0 || 0) + Number(B.dv || 0), le = Number(C.v1 || 0) + Number(B.dv || 0);
      return {
        minX: Math.floor((J % 1 + 1) % 1 * k),
        maxX: Math.ceil((oe % 1 + 1) % 1 * k),
        minY: Math.floor(Ee(z, 0, 1) * L),
        maxY: Math.ceil(Ee(le, 0, 1) * L),
        wraps: oe - J >= 1 || J < 0 || oe > 1
      };
    }
    if (w.type === "strokeGroup") {
      const C = H(w.actionGroupId, "paint"), B = c(w.actionGroupId, "paint", C);
      if (!B) return null;
      const J = B.centerUv.u - B.halfW, oe = B.centerUv.u + B.halfW, z = B.centerUv.v - B.halfH, le = B.centerUv.v + B.halfH;
      return {
        minX: Math.floor((J % 1 + 1) % 1 * k),
        maxX: Math.ceil((oe % 1 + 1) % 1 * k),
        minY: Math.floor(Ee(z, 0, 1) * L),
        maxY: Math.ceil(Ee(le, 0, 1) * L),
        wraps: oe - J >= 1 || J < 0 || oe > 1
      };
    }
    return null;
  }
  function ne(w, k, L) {
    if (!w || !k) return !1;
    const x = (B) => B.wraps ? [
      { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY, wraps: !1 },
      { minX: B.minX, maxX: L - 1, minY: B.minY, maxY: B.maxY, wraps: !1 }
    ] : [B], N = x(w), C = x(k);
    return N.some((B) => C.some((J) => !(B.maxX < J.minX || J.maxX < B.minX || B.maxY < J.minY || J.maxY < B.minY)));
  }
  function O(w, k, L) {
    var V, M, X, Q, we, xe, F;
    if (!w || !k || !((V = L == null ? void 0 : L.surface) != null && V.canvas) || k.type !== "rasterObject") return w;
    const x = Number(w.width || L.surface.canvas.width || 0), N = Number(w.height || L.surface.canvas.height || 0);
    if (x < 1 || N < 1) return w;
    const C = Pe(k, x, N);
    if (C && !ne(C, L.bounds, x)) return w;
    const B = String(((M = k.item) == null ? void 0 : M.id) || k.id || ""), J = ((X = k.item) == null ? void 0 : X.transform) || {}, oe = `${L.key}:${B}:${x}:${N}:${Number(J.du || 0).toFixed(6)}:${Number(J.dv || 0).toFixed(6)}:${Number(J.rot_deg || 0).toFixed(3)}:${Number(J.scale || 1).toFixed(4)}`, z = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (z.has(oe)) return z.get(oe);
    const le = Ee(Math.floor(Number(((Q = L.bounds) == null ? void 0 : Q.minX) || 0)), 0, Math.max(0, x - 1)), Se = Ee(Math.floor(Number(((we = L.bounds) == null ? void 0 : we.minY) || 0)), 0, Math.max(0, N - 1)), Me = Ee(Math.ceil(Number(((xe = L.bounds) == null ? void 0 : xe.maxX) || 0)), le, Math.max(0, x - 1)), fe = Ee(Math.ceil(Number(((F = L.bounds) == null ? void 0 : F.maxY) || 0)), Se, Math.max(0, N - 1)), be = Math.max(1, Me - le + 1), _e = Math.max(1, fe - Se + 1), h = u(x, N, { readback: !0 });
    h.ctx.clearRect(0, 0, x, N), h.ctx.drawImage(w, 0, 0);
    const j = h.ctx.getImageData(le, Se, be, _e);
    h.ctx.save(), h.ctx.globalCompositeOperation = "destination-out", h.ctx.drawImage(L.surface.canvas, 0, 0), h.ctx.restore();
    const A = h.ctx.getImageData(le, Se, be, _e);
    let v = !1;
    for (let he = 0; he < be * _e; he += 1) {
      const Ae = j.data[he * 4 + 3], Oe = A.data[he * 4 + 3];
      if (Ae > Oe) {
        v = !0;
        break;
      }
    }
    return v ? (z.size > 64 && z.clear(), z.set(oe, h.canvas), h.canvas) : (z.set(oe, w), w);
  }
  function Z(w, k = null) {
    const L = W((w == null ? void 0 : w.rasterObjectId) || (w == null ? void 0 : w.id) || ""), x = (w == null ? void 0 : w.bbox) || null;
    if (!L || !x) return null;
    const N = ge(w, k);
    if (!N || !(N.complete || N.width || N.naturalWidth)) return null;
    const { width: C, height: B } = de(), J = (w == null ? void 0 : w.transform) || {}, oe = [
      L,
      C,
      B,
      x.u0,
      x.v0,
      x.u1,
      x.v1,
      J.du,
      J.dv,
      J.rot_deg,
      J.scale,
      U()
    ].join(":"), z = o.get(oe);
    if (z) return z;
    o.size > 64 && o.clear();
    const le = dn({ label: "editor.raster-erp" });
    le.width = C, le.height = B;
    const Se = le.getContext("2d");
    if (!Se) return null;
    const Me = Number(x.u0 || 0) * C, fe = Number(x.v0 || 0) * B, be = Math.max(1, (Number(x.u1 || 0) - Number(x.u0 || 0)) * C), _e = Math.max(1, (Number(x.v1 || 0) - Number(x.v0 || 0)) * B), h = Me + be * 0.5 + Number(J.du || 0) * C, j = fe + _e * 0.5 + Number(J.dv || 0) * B, A = Number(J.rot_deg || 0) * pr, v = Math.max(0.01, Number(J.scale || 1));
    for (const V of [-C, 0, C])
      Se.save(), Se.translate(h + V, j), Se.rotate(A), Se.scale(v, v), Se.drawImage(N, -be * 0.5, -_e * 0.5, be, _e), Se.restore();
    return o.set(oe, le), le;
  }
  async function ae(w, k) {
    const L = await new Promise((J) => w.toBlob(J, "image/png")), x = new FormData();
    x.append("image", L, k), x.append("type", "input"), x.append("subfolder", "panorama_stickers"), x.append("overwrite", "1");
    const N = await t.fetchApi("/upload/image", { method: "POST", body: x });
    if (!N || N.status !== 200) throw new Error(`upload failed (${N == null ? void 0 : N.status})`);
    const C = await N.json(), B = String((C == null ? void 0 : C.name) || "").trim();
    if (!B) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: B,
      subfolder: String((C == null ? void 0 : C.subfolder) || "panorama_stickers"),
      storage: String((C == null ? void 0 : C.type) || "input")
    };
  }
  let ye = null, ve = !1;
  function I() {
    if (r) return !1;
    const w = Yf(l.painting), { width: k, height: L } = p();
    return $1(l.painting_layer, { paintCount: w.totalPaintCount, maskCount: w.totalMaskCount, width: k, height: L, nodeId: String(i.id ?? "0") });
  }
  function se() {
    const w = String(i.id ?? "0"), k = Ua.get(w);
    if (ve && k) return k;
    const L = (async () => {
      var C, B, J, oe, z, le, Se, Me, fe, be, _e, h;
      const x = T(), N = Yf(l.painting);
      if (N.totalPaintCount <= 0 && N.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, ye = x, d());
        return;
      }
      if (ye !== x && !ve) {
        ve = !0;
        try {
          re();
          const j = b(!1), A = ((B = (C = n.paintEngine) == null ? void 0 : C.getErpTarget) == null ? void 0 : B.call(C, j)) || null, v = ((J = A == null ? void 0 : A.displayPaint) == null ? void 0 : J.canvas) || null, V = ((oe = A == null ? void 0 : A.committedMask) == null ? void 0 : oe.canvas) || null, M = Math.max(1, Number(((z = A == null ? void 0 : A.descriptor) == null ? void 0 : z.width) || (v == null ? void 0 : v.width) || (V == null ? void 0 : V.width) || 2048)), X = Math.max(1, Number(((le = A == null ? void 0 : A.descriptor) == null ? void 0 : le.height) || (v == null ? void 0 : v.height) || (V == null ? void 0 : V.height) || 1024));
          (!v && N.totalPaintCount > 0 || !V && N.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((Se = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Se.width) || 0) !== M || Number(((Me = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Me.height) || 0) !== X) && (n._paintLayerSyncBlankSurface = u(M, X)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, M, X));
          const Q = v || N.totalPaintCount > 0 && ((fe = n._paintLayerSyncBlankSurface) == null ? void 0 : fe.canvas) || null, we = V || N.totalMaskCount > 0 && ((be = n._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null;
          if (!Q && !we) return;
          let xe = null, F = null;
          const he = [];
          if (N.totalPaintCount > 0) {
            xe = await ae(Q, `pano_paint_${w}.png`);
            for (const Ae of j) {
              const Oe = String(Ae || "").trim();
              if (!Oe) continue;
              const Re = ((h = (_e = n.paintEngine) == null ? void 0 : _e.getGroupDisplayCanvas) == null ? void 0 : h.call(_e, Oe)) || null;
              if (!Re) continue;
              const Ce = Oe.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ve = await ae(Re, `pano_group_${w}_${Ce}.png`);
              Ve && he.push({
                id: Oe,
                actionGroupId: Oe,
                image: Ve
              });
            }
          }
          N.totalMaskCount > 0 && (F = await ae(we, `pano_mask_${w}.png`)), x === T() && (l.painting_layer = {
            paint: xe,
            mask: F,
            groups: he,
            revision: x
          }, ye = x, d());
        } catch (j) {
          throw j;
        } finally {
          ve = !1;
        }
      }
    })();
    return Ua.set(w, L), L.finally(() => {
      Ua.get(w) === L && Ua.delete(w);
    }), L;
  }
  function g(w) {
    var B;
    const k = ((B = n.paintEngine) == null ? void 0 : B.getMaskDisplayCanvas()) || null;
    if (!k) return w;
    const L = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, x = w.reduce((J, oe) => Math.max(J, Number((oe == null ? void 0 : oe.zIndex) || 0)), -1), N = (Array.isArray(l.stickers) ? l.stickers : []).reduce((J, oe) => Math.max(J, Number((oe == null ? void 0 : oe.z_index) || 0)), -1), C = Math.max(x, N);
    return w.push({
      id: "mask_display",
      source: k,
      revision: L,
      zIndex: C + 1,
      opacity: 1,
      visible: !0
    }), w;
  }
  function _() {
    var x, N;
    const w = y(!0), k = q(), L = [];
    for (const C of w) {
      if ((C == null ? void 0 : C.type) === "strokeGroup") {
        const B = String(C.actionGroupId || C.id || "");
        if (!B) continue;
        const J = ((N = (x = n.paintEngine) == null ? void 0 : x.getGroupDisplayCanvas) == null ? void 0 : N.call(x, B)) || null;
        if (!J) continue;
        L.push({
          id: `paint_group:${B}`,
          source: J,
          revision: `${m()}:${B}`,
          zIndex: Number((C == null ? void 0 : C.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((C == null ? void 0 : C.type) === "rasterObject") {
        const B = C.item || null, J = W((B == null ? void 0 : B.id) || C.id || "");
        if (!J) continue;
        const oe = Z(B, () => ce());
        if (!oe) continue;
        const z = O(oe, C, k), le = (B == null ? void 0 : B.transform) || {};
        L.push({
          id: `raster:${J}`,
          source: z,
          revision: [
            T(),
            (k == null ? void 0 : k.key) || "",
            J,
            Number(le.du || 0).toFixed(6),
            Number(le.dv || 0).toFixed(6),
            Number(le.rot_deg || 0).toFixed(3),
            Number(le.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((C == null ? void 0 : C.z_index) || 0),
          opacity: 1,
          visible: (B == null ? void 0 : B.visible) !== !1
        });
      }
    }
    return g(L);
  }
  function R() {
    return P() ? _().filter((w) => w.visible !== !1).map((w) => ({ id: w.id, media: w.source, revision: w.revision, opacity: w.opacity, zIndex: w.zIndex })) : [];
  }
  function Y() {
    l.painting_layer !== null && (l.painting_layer = null), ye = "";
  }
  return {
    connect(w) {
      ({
        commitState: d,
        createRasterSurface: u,
        ensureGroupFrame: c,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: p,
        getDisplayPaintRevisionKey: m,
        getOrderedDisplayListObjects: y,
        getOrderedPaintGroupIds: b,
        getPaintingCompositeRevisionKey: T,
        getPaintingRevisionKey: U,
        getStrokeGroupStrokes: H,
        inverseTransformErpPointAround: D,
        paintingShown: P,
        parseRasterObjectSelectionId: W,
        processFreehandPoints: $,
        rasterizeStrokeToSurface: te,
        rebuildPaintEngineIfNeeded: re,
        requestDraw: ce,
        screenPosToErpPoint: E,
        shortestWrappedDelta: G
      } = w);
    },
    getSharedLivePaintSurface: pe,
    getLivePaintRevisionSuffix: me,
    isPaintCompositeInteraction: ie,
    hitRasterObjectAt: K,
    invalidateLivePaintPreviewCaches: ue,
    buildRasterObjectEditCanvas: Z,
    needsPaintingLayerSync: I,
    syncPaintingLayerAsync: se,
    invalidatePaintingLayerState: Y,
    buildEditorViewPaintLayers: R
  };
}
function OP(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(ne) {
    return !ne || typeof ne != "object" ? { x: 0, y: 0 } : { x: Number((ne == null ? void 0 : ne.u) || 0), y: Number((ne == null ? void 0 : ne.v) || 0) };
  }
  function d(ne, O, Z, ae = {}) {
    return { ...{
      ...ne,
      t: Number((ne == null ? void 0 : ne.t) || 0),
      widthScale: f(ne, "widthScale", 1),
      pressureLike: f(ne, "pressureLike", 1)
    }, ...ae, u: O, v: Z };
  }
  function u(ne, O = !1) {
    return O ? 12e-4 : 18e-4;
  }
  function c(ne, O, Z = !1) {
    if (!Array.isArray(ne) || !ne.length) return [];
    const ae = String((O == null ? void 0 : O.kind) || "") === "ERP_GLOBAL", ye = /* @__PURE__ */ new WeakMap();
    if (ae) {
      let x = null;
      ne.forEach((N) => {
        const C = Number((N == null ? void 0 : N.u) || 0), B = Number((N == null ? void 0 : N.v) || 0), J = (C % 1 + 1) % 1, oe = x == null ? J : x + s(J, (x % 1 + 1) % 1);
        ye.set(N, { x: oe, y: B }), x = oe;
      });
    }
    const ve = (x) => !x || typeof x != "object" ? { x: 0, y: 0 } : ye.get(x) || l(x), I = (x, N, C, B = {}) => {
      const J = ae ? (Number(N) % 1 + 1) % 1 : Number(N), oe = d(x, J, C, B);
      return ye.set(oe, { x: Number(N), y: Number(C) }), oe;
    }, se = (x, N, C) => {
      const B = ve(x), J = ve(N);
      return I(x, Rn(B.x, J.x, C), Rn(B.y, J.y, C), {
        t: Rn(Number((x == null ? void 0 : x.t) || 0), Number((N == null ? void 0 : N.t) || 0), C),
        widthScale: Rn(f(x, "widthScale", 1), f(N, "widthScale", 1), C),
        pressureLike: Rn(f(x, "pressureLike", 1), f(N, "pressureLike", 1), C)
      });
    };
    if (ne.length === 1) {
      const x = ve(ne[0]);
      return [I(ne[0], x.x, x.y)];
    }
    const g = u(O, Z), _ = (x, N) => {
      const C = [0];
      for (let fe = 1; fe < x.length; fe += 1) {
        const be = ve(x[fe - 1]), _e = ve(x[fe]);
        C.push(C[fe - 1] + Math.hypot(_e.x - be.x, _e.y - be.y));
      }
      const B = C[C.length - 1] || 0;
      if (B <= 1e-8) {
        const fe = x[0], be = ve(fe);
        return [I(fe, be.x, be.y)];
      }
      const J = [];
      let oe = 0;
      for (let fe = 0; fe <= B + 1e-9; fe += N) {
        for (; oe < C.length - 2 && C[oe + 1] < fe; ) oe += 1;
        const be = C[oe], _e = C[oe + 1], h = Math.max(1e-8, _e - be);
        J.push(se(x[oe], x[oe + 1], Ee((fe - be) / h, 0, 1)));
      }
      const z = x[x.length - 1], le = ve(z), Se = J[J.length - 1], Me = Se ? ve(Se) : null;
      return (!Me || Math.hypot(Me.x - le.x, Me.y - le.y) > N * 0.35) && J.push(I(z, le.x, le.y)), J;
    }, R = (x) => {
      if (!Array.isArray(x) || x.length < 3) return x ? x.slice() : [];
      const N = ve(x[0]), C = [I(x[0], N.x, N.y)];
      for (let oe = 0; oe < x.length - 1; oe += 1) {
        const z = x[oe], le = x[oe + 1], Se = ve(z), Me = ve(le), fe = I(
          z,
          Se.x * 0.75 + Me.x * 0.25,
          Se.y * 0.75 + Me.y * 0.25,
          {
            t: Number(z.t || 0) * 0.75 + Number(le.t || 0) * 0.25,
            widthScale: f(z, "widthScale", 1) * 0.75 + f(le, "widthScale", 1) * 0.25,
            pressureLike: f(z, "pressureLike", 1) * 0.75 + f(le, "pressureLike", 1) * 0.25
          }
        ), be = I(
          z,
          Se.x * 0.25 + Me.x * 0.75,
          Se.y * 0.25 + Me.y * 0.75,
          {
            t: Number(z.t || 0) * 0.25 + Number(le.t || 0) * 0.75,
            widthScale: f(z, "widthScale", 1) * 0.25 + f(le, "widthScale", 1) * 0.75,
            pressureLike: f(z, "pressureLike", 1) * 0.25 + f(le, "pressureLike", 1) * 0.75
          }
        );
        C.push(fe, be);
      }
      const B = x[x.length - 1], J = ve(B);
      return C.push(I(B, J.x, J.y)), C;
    }, Y = _(ne, g);
    if (Y.length < 3) return Y;
    const w = Z ? 2 : 1;
    let k = Y.slice();
    for (let x = 0; x < w; x += 1) k = R(k);
    return _(k, Math.max(g * 0.75, 55e-5));
  }
  function f(ne, O, Z = 1) {
    const ae = Number(ne == null ? void 0 : ne[O]);
    return Number.isFinite(ae) ? Math.max(0, ae) : Z;
  }
  function p(ne) {
    const O = Number(ne == null ? void 0 : ne.radiusValue);
    if (Number.isFinite(O) && O > 0) {
      const Z = String((ne == null ? void 0 : ne.radiusModel) || "").trim() || "erp_uv_norm";
      return Z === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((ne == null ? void 0 : ne.size) || 10) * 0.5 / 2048)
      } : {
        model: Z,
        value: O
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((ne == null ? void 0 : ne.size) || 10) * 0.5 / 2048)
    };
  }
  function m(ne, O, Z = {}) {
    const ae = dn({ label: "editor.raster-surface" });
    ae.width = Math.max(1, Math.round(ne)), ae.height = Math.max(1, Math.round(O));
    const ye = ae.getContext("2d", Z.readback ? { willReadFrequently: !0 } : void 0);
    return ye && (ye.clearRect(0, 0, ae.width, ae.height), ye.imageSmoothingEnabled = !0), { canvas: ae, ctx: ye };
  }
  function y() {
    const ne = ce();
    return `${String(t.paintStrokeRevision)}:${ne.width}x${ne.height}`;
  }
  function b() {
    const ne = ce();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${ne.width}x${ne.height}`;
  }
  function T() {
    const ne = i(), O = b();
    return ne ? `${O}:${ne}` : O;
  }
  function U() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function H() {
    t.paintCompositeRevision += 1;
  }
  function D() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function P() {
    var ne, O;
    t.paintEngineRevisionKey = null, (O = (ne = t.paintEngine) == null ? void 0 : ne.rebuildCommitted) == null || O.call(ne, n), t.paintEngineRevisionKey = y();
  }
  function W() {
    D(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function $({ rebuildPaintEngine: ne = !1 } = {}) {
    o(), U(), W(), ne && P();
  }
  function te() {
    o(), H(), W();
  }
  function re() {
    var ae;
    const ne = ce(), O = `${ne.width}x${ne.height}`;
    t.paintEngineDescriptorKey !== O && (t.paintEngine = Su(ne), t.paintEngineDescriptorKey = O, t.paintEngineRevisionKey = "");
    const Z = y();
    t.paintEngineRevisionKey !== Z && (t.paintEngineRevisionKey = Z, (ae = t.paintEngine) == null || ae.rebuildCommitted(n));
  }
  function ce() {
    const ne = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: ne,
      height: Math.max(1, Math.round(ne * 0.5))
    };
  }
  function E() {
    return ce();
  }
  function G(ne, O, Z, ae, ye = null) {
    const ve = p(ne), I = f(O, "widthScale", 1) * f(O, "pressureLike", 1);
    return ve.model === "erp_uv_norm" ? Math.max(0.5, ve.value * Z * I) : ve.model === "world_angle" ? ye ? Math.max(0.5, ve.value / Math.max(1e-6, Number(ye.hFOV_deg || 90) * pr) * Z * I) : Math.max(0.5, ve.value / (2 * Math.PI) * Z * I) : Math.max(0.5, Number((ne == null ? void 0 : ne.size) || 10) * 0.5 * I);
  }
  function ie(ne, O, Z = {}) {
    const ae = String((O == null ? void 0 : O.layerKind) || "paint"), ye = String((O == null ? void 0 : O.toolKind) || "pen"), ve = Z.preview === !0, I = ve ? 0.78 : 1;
    if (ne.globalAlpha = ye === "marker" ? 0.7 * I : 1, ae === "mask") {
      ne.fillStyle = ve ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (ye === "eraser") {
      ne.globalCompositeOperation = "destination-out", ne.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const se = String((O == null ? void 0 : O.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (O == null ? void 0 : O.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, g = ve ? Math.max(0.28, Number(se.a ?? 1) * 0.88) : Math.max(0.12, Number(se.a ?? 1));
    ne.fillStyle = `rgba(${Math.round(Number(se.r || 0) * 255)}, ${Math.round(Number(se.g || 0) * 255)}, ${Math.round(Number(se.b || 0) * 255)}, ${g})`;
  }
  function pe(ne, O, Z) {
    const ae = Math.max(0.5, Math.min(Z, Number((O == null ? void 0 : O.radiusPx) || 0.5)));
    !Number.isFinite(O == null ? void 0 : O.x) || !Number.isFinite(O == null ? void 0 : O.y) || !Number.isFinite(ae) || (ne.beginPath(), ne.arc(Number(O.x || 0), Number(O.y || 0), ae, 0, Math.PI * 2), ne.fill());
  }
  function me(ne, O, Z, ae, ye = {}) {
    if (!ne || !Array.isArray(O) || !O.length) return;
    const ve = Math.max(ae.w, ae.h) * 0.25;
    ne.save(), ie(ne, Z, ye);
    const I = (se) => pe(ne, se, ve);
    if (O.length === 1) {
      I(O[0]), ne.restore();
      return;
    }
    for (let se = 0; se < O.length - 1; se += 1) {
      const g = O[se], _ = O[se + 1];
      if (!g || !_) continue;
      const R = Number(g.x || 0), Y = Number(g.y || 0), w = Number(_.x || 0), k = Number(_.y || 0), L = Math.max(0.5, Math.min(ve, Number(g.radiusPx || 0.5))), x = Math.max(0.5, Math.min(ve, Number(_.radiusPx || 0.5)));
      if (!Number.isFinite(R) || !Number.isFinite(Y) || !Number.isFinite(w) || !Number.isFinite(k) || !Number.isFinite(L) || !Number.isFinite(x)) continue;
      const N = w - R, C = k - Y, B = Math.hypot(N, C);
      if (!Number.isFinite(B) || B < 1e-6) {
        I(g);
        continue;
      }
      if (B > Math.max(ae.w, ae.h) * 0.5) continue;
      const J = Math.max(0.5, Math.min(L, x)), oe = Math.max(0.35, Math.min(J * 0.4, 2.25)), z = Math.max(1, Math.ceil(B / oe));
      for (let le = 0; le <= z; le += 1) {
        const Se = le / z;
        I({
          x: Rn(R, w, Se),
          y: Rn(Y, k, Se),
          radiusPx: Rn(L, x, Se)
        });
      }
    }
    I(O[O.length - 1]), ne.restore();
  }
  function ge(ne, O, Z, ae) {
    me(ne, O, Z, ae, { preview: !1 });
  }
  function ee(ne, O, Z, ae, ye) {
    var se, g, _, R;
    if (!ne || !Array.isArray(O) || O.length < 3) return;
    const ve = "u", I = "v";
    if (ne.save(), String((Z == null ? void 0 : Z.layerKind) || "") === "mask")
      ne.fillStyle = "rgba(255,255,255,1)";
    else if (String((Z == null ? void 0 : Z.toolKind) || "") === "eraser")
      ne.globalCompositeOperation = "destination-out", ne.fillStyle = "rgba(0,0,0,1)";
    else {
      const Y = (Z == null ? void 0 : Z.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      ne.fillStyle = `rgba(${Math.round(Number(Y.r || 0) * 255)}, ${Math.round(Number(Y.g || 0) * 255)}, ${Math.round(Number(Y.b || 0) * 255)}, ${Number(Y.a ?? 1)})`;
    }
    ne.beginPath(), ne.moveTo(Number(((se = O[0]) == null ? void 0 : se[ve]) || 0) * ae.w, Number(((g = O[0]) == null ? void 0 : g[I]) || 0) * ae.h);
    for (let Y = 1; Y < O.length; Y += 1)
      ne.lineTo(Number(((_ = O[Y]) == null ? void 0 : _[ve]) || 0) * ae.w, Number(((R = O[Y]) == null ? void 0 : R[I]) || 0) * ae.h);
    ne.closePath(), ne.fill(), ne.restore();
  }
  function S(ne) {
    const O = (ne == null ? void 0 : ne.geometry) || null;
    return O ? String(O.geometryKind || "") === "lasso_fill" ? Array.isArray(O.points) ? O.points : [] : Array.isArray(O.processedPoints) && O.processedPoints.length ? O.processedPoints : Array.isArray(O.rawPoints) && O.rawPoints.length ? O.rawPoints : Array.isArray(O.points) ? O.points : [] : [];
  }
  function K(ne, O) {
    const Z = S(ne);
    return !Array.isArray(Z) || !Z.length ? [] : Z.map((ae) => ({
      x: Number((ae == null ? void 0 : ae.u) || 0) * Number((O == null ? void 0 : O.w) || 1),
      y: Number((ae == null ? void 0 : ae.v) || 0) * Number((O == null ? void 0 : O.h) || 1),
      radiusPx: G(ne, ae, Number((O == null ? void 0 : O.w) || 1), Number((O == null ? void 0 : O.h) || 1))
    }));
  }
  function de(ne, O, Z = null) {
    var se, g, _, R;
    if (!(ne != null && ne.ctx) || !O) return !1;
    const ae = Z || { w: Number(((se = ne.canvas) == null ? void 0 : se.width) || 0), h: Number(((g = ne.canvas) == null ? void 0 : g.height) || 0) }, ye = String((O == null ? void 0 : O.toolKind) || "") === "eraser" ? {
      ...O,
      layerKind: "mask",
      toolKind: String(((_ = O == null ? void 0 : O.geometry) == null ? void 0 : _.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : O;
    if (String(((R = O == null ? void 0 : O.geometry) == null ? void 0 : R.geometryKind) || "") === "lasso_fill")
      return ee(ne.ctx, S(ye), ye, ae), !0;
    const I = K(ye, ae);
    return I.length ? (ge(ne.ctx, I, ye, ae), !0) : !1;
  }
  function q(ne, O, Z, ae = 8) {
    const ye = new Uint8Array(O * Z), ve = [], I = new Int32Array(O * Z), se = new Int32Array(O * Z);
    for (let g = 0; g < Z; g += 1)
      for (let _ = 0; _ < O; _ += 1) {
        const R = g * O + _;
        if (ye[R] || ne[R] <= ae) continue;
        let Y = 0, w = 0;
        I[w] = _, se[w] = g, w += 1, ye[R] = 1;
        const k = [];
        let L = _, x = g, N = _, C = g;
        for (; Y < w; ) {
          const B = I[Y], J = se[Y];
          Y += 1, k.push({ x: B, y: J }), B < L && (L = B), J < x && (x = J), B > N && (N = B), J > C && (C = J);
          const oe = [
            [(B - 1 + O) % O, J],
            [(B + 1) % O, J],
            [B, J - 1],
            [B, J + 1]
          ];
          for (const [z, le] of oe) {
            if (le < 0 || le >= Z) continue;
            const Se = le * O + z;
            ye[Se] || ne[Se] <= ae || (ye[Se] = 1, I[w] = z, se[w] = le, w += 1);
          }
        }
        ve.push({ pixels: k, minX: L, minY: x, maxX: N, maxY: C });
      }
    return ve;
  }
  function ue(ne, O) {
    const Z = [...new Set((Array.isArray(ne == null ? void 0 : ne.pixels) ? ne.pixels : []).map((g) => Number((g == null ? void 0 : g.x) || 0)).filter((g) => Number.isFinite(g)))].sort((g, _) => g - _);
    if (!Z.length) return null;
    if (Z.length === 1)
      return { startX: Z[0], widthPx: 1 };
    let ae = -1, ye = 0;
    for (let g = 0; g < Z.length; g += 1) {
      const _ = Z[g], Y = (g === Z.length - 1 ? Z[0] + O : Z[g + 1]) - _ - 1;
      Y > ae && (ae = Y, ye = g);
    }
    const ve = (Z[(ye + 1) % Z.length] + O) % O;
    let I = 1 / 0, se = -1 / 0;
    for (const g of Z) {
      const _ = (g - ve + O) % O;
      I = Math.min(I, _), se = Math.max(se, _);
    }
    return {
      startX: ve,
      widthPx: Math.max(1, se - I + 1)
    };
  }
  function Pe(ne, O, Z = {}) {
    var _;
    const ae = Number((ne == null ? void 0 : ne.width) || 0), ye = Number((ne == null ? void 0 : ne.height) || 0), ve = (_ = ne == null ? void 0 : ne.getContext) == null ? void 0 : _.call(ne, "2d");
    if (!ve || ae < 1 || ye < 1) return [];
    const I = ve.getImageData(0, 0, ae, ye), se = new Uint8Array(ae * ye);
    for (let R = 0; R < se.length; R += 1) se[R] = I.data[R * 4 + 3];
    return q(se, ae, ye, 8).map((R, Y) => {
      const w = ue(R, ae);
      if (!w) return null;
      const k = Number(w.widthPx || 0), L = R.maxY - R.minY + 1, x = Number(w.startX || 0), N = dn({ label: "editor.lasso-fill" });
      N.width = k, N.height = L;
      const C = N.getContext("2d");
      if (!C) return null;
      const B = C.createImageData(k, L);
      return R.pixels.forEach(({ x: J, y: oe }) => {
        const z = (oe * ae + J) * 4, le = (Number(J || 0) - x + ae) % ae, Se = ((oe - R.minY) * k + le) * 4;
        B.data[Se + 0] = I.data[z + 0], B.data[Se + 1] = I.data[z + 1], B.data[Se + 2] = I.data[z + 2], B.data[Se + 3] = I.data[z + 3];
      }), C.putImageData(B, 0, 0), {
        id: Ti("raster"),
        type: "raster_frozen",
        layerKind: O === "mask" ? "mask" : "paint",
        z_index: Number((Z == null ? void 0 : Z.z_index) || 0) + Y * 1e-3,
        locked: (Z == null ? void 0 : Z.locked) === !0,
        bbox: {
          u0: 0,
          v0: R.minY / ye,
          u1: k / ae,
          v1: (R.maxY + 1) / ye
        },
        rasterDataUrl: N.toDataURL("image/png"),
        transform: {
          du: x / ae,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(ne) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = ne);
    },
    processFreehandPoints: c,
    createRasterSurface: m,
    getPaintingRevisionKey: y,
    getPaintingCompositeRevisionKey: b,
    getDisplayPaintRevisionKey: T,
    refreshPaintEngineRevisionCache: P,
    markObjectVisualsDirty: W,
    markPaintStrokeVisualsDirty: $,
    markPaintCompositeVisualsDirty: te,
    rebuildPaintEngineIfNeeded: re,
    getDesiredPaintTargetDescriptor: ce,
    getActivePaintTargetDescriptor: E,
    rasterizeStrokeToSurface: de,
    createRasterFrozenObjectsFromCanvas: Pe
  };
}
function FP(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: a
  } = e;
  let s, l, d, u, c, f, p;
  function m(re, ce = null) {
    var E;
    if (re && typeof re == "object" && !Array.isArray(re)) return re;
    if (Array.isArray(re) && re.length > 0) {
      const G = re[0];
      if (G && typeof G == "object" && !Array.isArray(G)) return G;
    }
    if (Array.isArray(ce) && ce.length > 0) {
      const G = (E = ce[0]) == null ? void 0 : E.parsed_state;
      if (G && typeof G == "object" && !Array.isArray(G))
        return {
          yaw_deg: Number(G.yaw_deg || 0),
          pitch_deg: Number(G.pitch_deg || 0),
          hFOV_deg: Number(G.hFOV_deg || 30),
          rot_deg: Number(G.roll_deg || 0)
        };
    }
    return null;
  }
  function y(re, ce, E) {
    const G = Math.max(1, Number(ce || 1)), ie = Math.max(1, Number(E || 1)), pe = Ee(Number(re || 30), 0.1, 179) * pr, me = 2 * Math.atan(Math.tan(pe * 0.5) * (ie / G));
    return Ee(me * pi, 0.1, 179);
  }
  function b(re) {
    const ce = String(re || "").trim();
    if (!ce) return null;
    try {
      const E = JSON.parse(ce);
      if (!E || typeof E != "object" || String(E.kind || "") !== "pano_sticker_state") return null;
      const G = E.version;
      let ie = null;
      if (typeof G == "number" && Number.isInteger(G) ? ie = G : typeof G == "string" && /^\d+$/.test(G) && (ie = Number.parseInt(G, 10)), ie !== 1) return null;
      const pe = E.pose;
      if (!pe || typeof pe != "object") return null;
      const me = Number(pe.yaw_deg), ge = Number(pe.pitch_deg), ee = Number(pe.roll_deg), S = Number(pe.hFOV_deg);
      if (![me, ge, ee, S].every((ue) => Number.isFinite(ue))) return null;
      let K = ((me + 180) % 360 + 360) % 360 - 180;
      Object.is(K, -0) && (K = 0);
      const de = {
        yaw_deg: K,
        pitch_deg: Ee(ge, -89.9, 89.9),
        roll_deg: ee,
        hFOV_deg: Ee(S, 0.1, 179)
      }, q = Number(E.source_aspect);
      return Number.isFinite(q) && q > 0 && (de.source_aspect = q), de;
    } catch {
      return null;
    }
  }
  function T(re) {
    const ce = Number(re == null ? void 0 : re.yaw_deg), E = Number(re == null ? void 0 : re.pitch_deg), G = Number((re == null ? void 0 : re.roll_deg) ?? (re == null ? void 0 : re.rot_deg)), ie = Number(re == null ? void 0 : re.hFOV_deg), pe = mi(re);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(ce) ? ce : 0),
        pitch_deg: Ee(Number.isFinite(E) ? E : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(G) ? G : 0,
        hFOV_deg: Ee(Number.isFinite(ie) ? ie : 90, 0.1, 179)
      },
      source_aspect: pe
    };
  }
  function U(re) {
    var ge;
    if (!re || typeof re != "object") return T(null);
    const ce = Number(re == null ? void 0 : re.yaw_deg), E = Number(re == null ? void 0 : re.pitch_deg), G = Number((re == null ? void 0 : re.roll_deg) ?? (re == null ? void 0 : re.rot_deg)), ie = Number(re == null ? void 0 : re.hFOV_deg), pe = Number(re == null ? void 0 : re.vFOV_deg);
    let me = 1;
    if (Number.isFinite(ie) && Number.isFinite(pe)) {
      const ee = Ee(ie, 0.1, 179) * pr, S = Ee(pe, 0.1, 179) * pr, K = Math.tan(S * 0.5);
      if (Math.abs(K) > 1e-6) {
        const de = Math.tan(ee * 0.5) / K;
        Number.isFinite(de) && de > 0 && (me = de);
      }
    }
    if (re != null && re.asset_id && ((ge = o == null ? void 0 : o.assets) != null && ge[re.asset_id])) {
      const ee = o.assets[re.asset_id], S = Number((ee == null ? void 0 : ee.w) || 0), K = Number((ee == null ? void 0 : ee.h) || 0);
      S > 0 && K > 0 && (me = S / K);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(ce) ? ce : 0),
        pitch_deg: Ee(Number.isFinite(E) ? E : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(G) ? G : 0,
        hFOV_deg: Ee(Number.isFinite(ie) ? ie : 30, 0.1, 179)
      },
      source_aspect: me
    };
  }
  function H(re) {
    return t.linkedValue(n, re);
  }
  function D(re, ce, E) {
    const G = re && typeof re == "object" ? {
      yaw_deg: Number(re.yaw_deg || 0),
      pitch_deg: Number(re.pitch_deg || 0),
      roll_deg: Number(re.rot_deg ?? re.roll_deg ?? 0),
      hFOV_deg: Number(re.hFOV_deg || 30)
    } : b(ce);
    if (G) {
      const me = Number((E == null ? void 0 : E.naturalWidth) || (E == null ? void 0 : E.width) || G.source_aspect || 1), ge = Number((E == null ? void 0 : E.naturalHeight) || (E == null ? void 0 : E.height) || 1);
      return {
        yaw_deg: Number(G.yaw_deg || 0),
        pitch_deg: Number(G.pitch_deg || 0),
        hFOV_deg: Number(G.hFOV_deg || 30),
        vFOV_deg: y(G.hFOV_deg, me, ge),
        rot_deg: Number(G.roll_deg || 0)
      };
    }
    const ie = Number((E == null ? void 0 : E.naturalWidth) || (E == null ? void 0 : E.width) || 1), pe = Number((E == null ? void 0 : E.naturalHeight) || (E == null ? void 0 : E.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: y(30, ie, pe),
      rot_deg: 0
    };
  }
  function P() {
    const re = l(() => {
      Ar(n, "image-loaded");
    }), ce = tn(n, "external-sticker") ? m(d("pano_sticker_input_pose"), null) : null;
    return Tm(o, Fm(n, { pose: ce, image: re }));
  }
  function W() {
    var ge;
    const re = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((ee) => String((ee == null ? void 0 : ee.name) || "") === "sticker_image") : -1, ce = re >= 0 ? ((ge = n.getInputLink(re)) == null ? void 0 : ge.id) ?? null : null, E = l(() => {
      Ar(n, "image-loaded");
    }), G = m(d("pano_sticker_input_pose"), null), ie = H("sticker_state"), pe = t.externalStateHash(n, ie), me = ce == null ? null : D(G, ie, E);
    return Om(o, {
      connected: ce != null,
      linkId: ce,
      stateHash: pe,
      pose: me,
      imageWidth: Number((E == null ? void 0 : E.naturalWidth) || (E == null ? void 0 : E.width) || 0),
      imageHeight: Number((E == null ? void 0 : E.naturalHeight) || (E == null ? void 0 : E.height) || 0)
    });
  }
  function $(re = "sync") {
    if (a !== "stickers" || i) return;
    const ce = n.__panoSceneStateV2 ? P() : W();
    if (ce.changed) {
      const E = o.stickers.find(u);
      o.stickers = ce.state.stickers, o.active = ce.state.active, E && r.selectedId === E.id && !o.stickers.some((G) => G.id === E.id) && (r.selectedId = null, r.selectedIds = []), s(), p(), f();
    }
    c();
  }
  function te() {
    const re = Array.isArray(o.stickers) ? o.stickers : [], ce = [];
    for (const E of re)
      u(E) && (E.visible = !1, ce.push(E));
    return ce;
  }
  return {
    connect(re) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: d,
        isExternalSticker: u,
        requestDraw: c,
        updateSelectionMenu: f,
        updateSidePanel: p
      } = re);
    },
    computeStickerVFov: y,
    buildCanonicalCutoutStickerState: T,
    buildCanonicalSelectedStickerState: U,
    reconcileExternalStickerFromInputs: $,
    collectExternalStickersForClearAll: te
  };
}
const TP = 250, DP = 600, LP = 180, VP = 2;
function RP(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Do(e, t, r) {
  return e + (t - e) * r;
}
function $P(e, t, r = 1) {
  const n = Math.max(
    Math.abs(wu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / LP + i / VP);
  return Math.round(Do(TP, DP, o));
}
function zP(e, t, r) {
  const n = RP(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Do(i, t.position[o], n)),
    yaw_deg: Vt(e.yaw_deg + wu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Do(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Do(e.hFOV_deg, t.hFOV_deg, n),
    distance: Do(e.distance, t.distance, n)
  };
}
function jP(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(wu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function HP(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return jP(e, t) ? null : { from: e, to: t, startTs: r, durationMs: $P(e, t, n), end: i };
}
function GP(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: zP(e.from, e.to, r), done: !1 };
}
function Ks(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function WP(e, t, r) {
  const n = Ks(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function KP(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    runtime: s,
    sceneV2: l,
    state: d,
    stateV2: u,
    studio: c,
    viewController: f
  } = e;
  let p, m, y, b, T, U, H, D, P, W = null;
  function $(x, N = null) {
    const C = K();
    H(() => {
      i.viewTransition = HP(C, x, performance.now(), { scale: ye(), end: N });
    }), !i.viewTransition && N && te(N), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, D(), T({ localOnly: !0, reason: ft.VIEW });
  }
  function te(x) {
    ee(Nc({ ...ge(), moved: x.moved }, x.mode, de())), s.backgroundDirty = !0;
  }
  function re() {
    i.viewTransition && (i.viewTransition = null, D());
  }
  function ce(x, N) {
    $({ ...K(), yaw_deg: x, pitch_deg: N });
  }
  function E() {
    return !c || ue() && !b();
  }
  function G() {
    return i.mode === "pano" && ie();
  }
  function ie() {
    return u && fv({ sceneLinked: l && !!Bu(a).scene, files: U(), stickers: d.stickers });
  }
  function pe() {
    return i.spaceMode === "6dof" && G();
  }
  function me() {
    var x, N, C;
    return aS((C = (N = (x = t.ui) == null ? void 0 : x.settings) == null ? void 0 : N.getSettingValue) == null ? void 0 : C.call(N, Jm));
  }
  function ge() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function ee(x) {
    i.spaceMode = x.mode, i.viewPosition = x.position, i.viewMoved = x.moved;
  }
  function S(x) {
    var C;
    const N = WP(i.spaceMode, i.viewTransition, x);
    if (N !== "keep") {
      if (N === "return") {
        $({ ...K(), position: de(), distance: ((C = Z()) == null ? void 0 : C.radius) || Jn }, { mode: x, moved: !1 });
        return;
      }
      re(), ee(Nc({ ...ge(), position: K().position }, x, de())), s.backgroundDirty = !0, D(), T({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function K() {
    var C;
    const x = i.viewMoved ? i.viewDistance : ((C = Z()) == null ? void 0 : C.radius) || Jn, N = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: x };
    return sv(i.spaceMode, N, de());
  }
  function de() {
    return ue() ? O().position : [0, 0, 0];
  }
  function q() {
    return r && d.camera !== null;
  }
  function ue() {
    return q() && (!c || d.camera.visible);
  }
  function Pe() {
    return d.painting_visible !== !1;
  }
  function ne(x) {
    return x.visible && eo(x.clip, i.frame);
  }
  function O() {
    return Au(d.camera, i.frame);
  }
  function Z() {
    var N;
    const x = p();
    return ((N = x.space ?? x.content) == null ? void 0 : N.sphere) ?? null;
  }
  function ae(x) {
    i.viewPosition = x.position, i.viewYaw = x.yaw_deg, i.viewPitch = x.pitch_deg, i.viewDistance = x.distance, i.viewMoved = !0, s.backgroundDirty = !0, T({ localOnly: !0, reason: ft.VIEW });
  }
  function ye() {
    var x;
    return ((x = Z()) == null ? void 0 : x.radius) || Jn;
  }
  function ve() {
    var le;
    const x = p().space, N = m(), C = i.worldSelectedId || i.selectedId, B = N.stickers.findIndex((Se) => Se.id === C), J = B < 0 ? null : {
      sticker: N.stickers[B],
      value: sl(N, i.frame).stickers[B],
      plane: x.stickers.find((Se) => Se.id === C) ?? null,
      item: ((le = x.sticker) == null ? void 0 : le.id) === C && x.sticker.url ? { kind: x.sticker.kind, box: o.sceneBox(x.sticker.url) } : null
    }, oe = y() ? w() : bv(Z(), J);
    if (!oe) return;
    const z = K();
    i.viewDistance = z.distance, i.viewMoved = !0, $(em(z, oe, n.width, n.height));
  }
  function I(x) {
    return o.pickSurface(L(), x.x, x.y, n.width, n.height);
  }
  function se(x, N) {
    var C;
    return Cc(x, N, i.viewMoved ? null : (C = Z()) == null ? void 0 : C.center, ye());
  }
  function g() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function _(x, N) {
    const C = performance.now(), B = { x: x.x, y: x.y, time: C, key: o.contentRevision(), view: g() };
    if (!Xh(W, B)) {
      const oe = I(x);
      W = { ...B, cost: performance.now() - C, hit: oe };
    }
    const J = K();
    ae(Qh(J, se(J, W.hit), N, ye())), W.view = g(), W.wheelTime = C;
  }
  function R(x, N, C) {
    const B = K();
    i.interaction = x === "orbit" ? { kind: "space_orbit", last: N, pivot: se(B, I(N)) } : { kind: "space_pan", last: N, depth: qh(B, ye()) }, P(N), n.setPointerCapture(C);
  }
  function Y(x) {
    return x * 0.2;
  }
  function w() {
    return { center: O().position, radius: Y(ye()) };
  }
  function k(x, N) {
    const { yaw_deg: C, pitch_deg: B } = im(x.position, N);
    return { ...x, yaw_deg: C, pitch_deg: B };
  }
  function L() {
    return Gu(K(), n.width, n.height, Z());
  }
  return {
    connect(x) {
      ({
        editorViewInput: p,
        editorViewSceneState: m,
        isCameraSelected: y,
        isErpCamera: b,
        requestDraw: T,
        sceneFiles: U,
        startAnimation: H,
        syncFloatingViewButtonState: D,
        updateCursor: P
      } = x);
    },
    transitionView: $,
    applyViewTransitionEnd: te,
    cancelViewTransition: re,
    turnViewTo: ce,
    cameraPreviewShown: E,
    isSpaceView: G,
    hasSpaceContent: ie,
    isFreeSpaceView: pe,
    viewControls: me,
    spaceModeState: ge,
    applySpaceMode: ee,
    setSpaceMode: S,
    spaceViewState: K,
    spaceOrigin: de,
    hasCamera: q,
    cameraShoots: ue,
    paintingShown: Pe,
    sceneStickerShown: ne,
    cutoutCamera: O,
    contentSphere: Z,
    setSpaceView: ae,
    spaceScale: ye,
    frameSpaceContent: ve,
    zoomSpaceAt: _,
    startSpaceDrag: R,
    currentSpaceCamera: L,
    cameraFrustumLength: Y,
    cameraSphere: w,
    lookingAt: k
  };
}
function BP(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: a,
    state: s,
    stateV2: l,
    stillCanvas: d,
    videoEl: u
  } = e;
  let c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae = { revision: -1, sceneState: null }, ye = null;
  function ve() {
    return ye || (ye = g()), ye;
  }
  function I() {
    ye = null;
  }
  function se() {
    return ae.sceneState;
  }
  function g() {
    const z = P(), le = f(), Se = { ...s.assets };
    for (const Q of l ? [] : s.stickers) {
      const we = String((Q == null ? void 0 : Q.asset_id) || "");
      we && !Se[we] && i.has(we) && (Se[we] = { type: "comfy_image", filename: we });
    }
    const Me = l ? s.stickers.map((Q) => ie(Q) ? { ...Q, source: { kind: "file", filename: ue(Q) } } : Q) : s.stickers;
    ae.revision !== a.stateRevision && (ae = { revision: a.stateRevision, sceneState: dr({ ...s, stickers: Me, assets: Se, painting: null }) }), l && _(ae.sceneState);
    const fe = sl(ae.sceneState, r.frame), be = me ? H() : null, _e = (Q) => {
      if (l && !Q.visible) return null;
      if (me && ce(Q)) return be;
      const we = $(Q);
      return we ? { media: we, revision: W(we) } : null;
    }, h = um(ae.sceneState, r.frame, s.stickers, { media: _e, paintLayers: le, evaluated: fe }), j = z && (z === u || z === d) ? u.dataset.panoSrc : z, A = re(z) ? { media: z, revision: W(z), coverage: Pn(s.coverage), source: j } : null, v = te(), V = lv(S(), v, K());
    V.mode !== r.spaceMode && y(), c(V);
    const M = v ? R(ae.sceneState, fe, _e) : null, X = G() ? { ...M, ...Y(M) } : null;
    return { background: A, layers: h, space: X, content: M };
  }
  function _(z) {
    const le = new Map(s.stickers.map((Se) => [Se.id, Se.clip]));
    z.scene.clip = { ...s.scene.clip };
    for (const Se of z.stickers) {
      const Me = le.get(Se.id);
      Me && (Se.clip = { ...Me });
    }
  }
  function R(z, le, Se) {
    const Me = ge(), fe = rm(Me, le.scene), be = fe != null && fe.url ? n.sceneBox(fe.url) : null, _e = be && Ec(fe.kind, be), h = q(), j = pv(h, z, le), A = j != null && j.url ? n.sceneBox(j.url) : null, v = A ? [{ box: Ec(j.kind, A), value: j.value }] : [], V = Lv(z, r.frame, s.stickers, { media: Se, evaluated: le }), M = Fc(gv(le, _e, V, v));
    return {
      evaluated: le,
      sceneUrls: Me ? Me.urls.filter(Boolean) : [],
      scene: fe,
      stickerUrls: hv(h, z),
      sticker: j,
      stickers: V,
      sphere: M
    };
  }
  function Y(z) {
    var Se;
    const le = ((Se = z.sphere) == null ? void 0 : Se.radius) || Jn;
    return {
      gizmo: k() ? N() : w(z.evaluated),
      grid: r.showGrid && !r.fullscreen ? Av(le) : null,
      lines: m() ? x(le) : []
    };
  }
  function w(z) {
    const le = ee(), Se = z.stickers.find((Me) => Me.id === (le == null ? void 0 : le.id));
    return !Z(le) || !(Se != null && Se.active) ? null : { mode: r.gizmoMode, transform: Ac(Se) };
  }
  function k() {
    return m() && r.selectedId === dl;
  }
  let L = { revision: -1, span: -1, segments: [] };
  function x(z) {
    const le = ne();
    (L.revision !== a.stateRevision || L.span !== le) && (L = { revision: a.stateRevision, span: le, segments: Ev(Ov(s, le)) });
    const { segments: Se } = L, Me = Se.length ? [{ segments: Se, color: YM }] : [];
    if (!E()) return Me;
    const fe = k() ? mg : UM;
    return [...Me, { segments: om(T(), p(z)), color: fe }];
  }
  function N() {
    return !E() || !k() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Ac({ ...T(), scale: 1 }) };
  }
  function C() {
    const { background: z, layers: le, space: Se } = ve(), Me = t.width, fe = t.height, be = U({ x: 0, y: 0, w: Me, h: fe });
    let _e = !1;
    return !z && !le.length && !Se ? (n.clear(460551), _e = n.ready) : (n.clear(), _e = !!n.render({
      rect: be,
      camera: Se ? Gu(de(), Me, fe, Se.sphere) : b(),
      background: z,
      layers: le,
      space: Se
    })), Pe(), (r.worldSelectedId || k() || pe()) && O(), _e;
  }
  function B(z) {
    const { content: le } = ve();
    return !le || !z.position ? Wo(z) : tm(Wo(z), z.position, D(), le.sphere);
  }
  function J(z, le, Se, Me = null) {
    const { background: fe, layers: be, content: _e } = ve();
    if (!fe && !be.length && !_e) return null;
    const h = _e && le.position ? _e : null;
    return n.render({ rect: z, camera: B(le), background: fe, layers: be, space: h, owner: Se, clearColor: Me });
  }
  function oe(z) {
    return n.clear(460551), !!n.renderUnwrap({ rect: U(z), ...ve() });
  }
  return {
    connect(z) {
      ({
        applySpaceMode: c,
        buildEditorViewPaintLayers: f,
        cameraFrustumLength: p,
        cameraShoots: m,
        cancelViewTransition: y,
        currentViewCamera: b,
        cutoutCamera: T,
        deviceRect: U,
        followPortSticker: H,
        frameViewDistance: D,
        getConnectedErpImage: P,
        getMediaRevisionToken: W,
        getStickerImage: $,
        hasSpaceContent: te,
        isDecodedImageReady: re,
        isExternalSticker: ce,
        isFreeSpaceView: E,
        isSpaceView: G,
        isUploadingSticker: ie,
        isWorldMenuShown: pe,
        portVideo: me,
        sceneFiles: ge,
        selectedWorldSticker: ee,
        spaceModeState: S,
        spaceOrigin: K,
        spaceViewState: de,
        stickerFiles: q,
        stickerImageKey: ue,
        syncFloatingViewButtonState: Pe,
        timelineSpanFrames: ne,
        updateSelectionMenu: O,
        worldStickerEditable: Z
      } = z);
    },
    editorViewInput: ve,
    endEditorViewFrame: I,
    editorViewSceneState: se,
    isCameraSelected: k,
    renderEditorView: C,
    shotViewCamera: B,
    drawEditorViewShot: J,
    renderEditorViewUnwrap: oe
  };
}
function _g(e, t = !1) {
  const r = Ee(mi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function UP(e) {
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
  let d, u, c, f, p = null;
  function m(D) {
    if (!n || !D) return !1;
    const P = n.closest(".pano-camera-preview");
    if (!P) return !1;
    const W = Math.round(Number(P.clientWidth || n.clientWidth || 0)), $ = Math.round(Number(P.clientHeight || n.clientHeight || 0));
    return Math.abs(W - Number(D.width || 0)) <= 1 && Math.abs($ - Number(D.height || 0)) <= 1;
  }
  function y(D, P) {
    if (i.outputPreviewRect = null, l.outputPreviewToggle.visible = i.mode !== "frame" && !!c(), s && (l.outputPreviewToggle.visible = !1), !a || !l.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      l.cameraPreview.visible = !1, l.cameraPreview.settled = !1, p = null;
      return;
    }
    const W = c();
    if (l.cameraPreview.visible = !0, l.cameraPreview.expanded = !!i.outputPreviewExpanded, !W || !r) {
      l.cameraPreview.ready = !1, l.cameraPreview.settled = !1, l.cameraPreview.width = 220, l.cameraPreview.height = 132, l.cameraPreview.label = W ? "Preview unavailable" : "Add Frame to preview", p = null;
      return;
    }
    const $ = _g(W, !!i.outputPreviewExpanded);
    l.cameraPreview.width = $.width, l.cameraPreview.height = $.height;
    const te = window.devicePixelRatio || 1, re = Math.max(1, $.width * te), ce = Math.max(1, $.height * te), E = Math.min(1, t.width / re, t.height / ce), G = { width: Math.max(1, Math.floor(re * E)), height: Math.max(1, Math.floor(ce * E)) }, ie = [...P].some((ge) => ge !== ft.VIEW && ge !== ft.OVERLAY), pe = !p || p.width !== G.width || p.height !== G.height || ie;
    if (D && pe) {
      const ge = u({ x: 0, y: t.height - G.height, w: G.width, h: G.height }, W, "camera_preview");
      p = ge ? G : null, ge && H(ge);
    }
    if (!p) {
      l.cameraPreview.ready = !1, l.cameraPreview.label = f() ? "Loading preview" : "Connect ERP image", l.cameraPreview.settled = !1;
      return;
    }
    const me = m($);
    l.cameraPreview.ready = !0, l.cameraPreview.label = me ? "" : "Loading preview", l.cameraPreview.settled = me && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function b() {
    p = null;
  }
  let T = 0, U = !1;
  function H(D) {
    const P = ++T;
    createImageBitmap(D.canvas, D.x, D.y, D.width, D.height).then((W) => {
      var $;
      if (P !== T || !o.running) {
        W.close();
        return;
      }
      ($ = r.getContext("bitmaprenderer")) == null || $.transferFromImageBitmap(W);
    }).catch((W) => {
      U || (U = !0, console.error("[PanoramaStickers] camera preview frame failed", W));
    });
  }
  return {
    connect(D) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: c,
        getConnectedErpImage: f
      } = D);
    },
    drawCutoutOutputPreview: y,
    forgetCameraPreviewFrame: b
  };
}
function YP(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: a,
    runtime: s,
    shotEditor: l,
    studio: d,
    type: u
  } = e;
  let c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae, ye, ve, I, se, g;
  function _(fe) {
    const be = r.width, _e = r.height, h = te();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, be, _e), Z(), fe && (s.backgroundDirty = !ve(h)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let A = 0; A <= 16; A += 1) {
        const v = h.x + h.w * A / 16;
        n.beginPath(), n.moveTo(v, h.y), n.lineTo(v, h.y + h.h), n.stroke();
      }
      for (let A = 0; A <= 8; A += 1) {
        const v = h.y + h.h * A / 8;
        n.beginPath(), n.moveTo(h.x, v), n.lineTo(h.x + h.w, v), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(h.x, h.y + h.h / 2), n.lineTo(h.x + h.w, h.y + h.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const j = h.y + h.h * 0.57;
      n.fillText("Left", h.x + h.w * 0.25, j), n.fillText("Front", h.x + h.w * 0.5, j), n.fillText("Right", h.x + h.w * 0.75, j), n.fillText("Back", h.x + 38, j), n.fillText("Back", h.x + h.w - 38, j);
    }
  }
  function R(fe, be, _e = 1) {
    let h = !1;
    n.strokeStyle = be, n.lineWidth = _e, n.beginPath();
    for (const j of fe) {
      const A = ue(j);
      if (!A) {
        h = !1;
        continue;
      }
      h ? n.lineTo(A.x, A.y) : (n.moveTo(A.x, A.y), h = !0);
    }
    n.stroke();
  }
  function Y(fe) {
    const be = r.width, _e = r.height;
    if (n.clearRect(0, 0, be, _e), Z(), fe && (s.backgroundDirty = !ye()), i.showGrid && !i.fullscreen && y().space)
      w();
    else if (i.showGrid && !i.fullscreen) {
      for (let j = -180; j <= 180; j += 15) {
        const A = [];
        for (let v = -89; v <= 89; v += 4) A.push(wn(j, v));
        R(A, "#3f3f46", j % 90 === 0 ? 1.3 : 1);
      }
      for (let j = -75; j <= 75; j += 15) {
        const A = [];
        for (let v = -180; v <= 180; v += 4) A.push(wn(v, j));
        R(A, j === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", j === 0 ? 1.5 : 1);
      }
      const h = [
        { name: "Left", dir: wn(-90, 0) },
        { name: "Front", dir: wn(0, 0) },
        { name: "Right", dir: wn(90, 0) },
        { name: "Back", dir: wn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", h.forEach((j) => {
        const A = ue(j.dir);
        A && n.fillText(j.name, A.x, A.y + 24);
      });
    }
  }
  function w() {
    const fe = Gu(g(), r.width, r.height, f()), be = ia(fe, [0, 0, 0], r.width, r.height);
    be && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", be.x, be.y - 12));
  }
  function k(fe, be) {
    const _e = q(fe), h = wn(Number(_e.yaw_deg || 0), Number(_e.pitch_deg || 0)), j = i.mode === "unwrap" ? Pe(h) : null, A = j ? j.x : null, v = i.mode === "pano" ? 28 : 20, V = [
      I(fe, 0, v, A),
      I(fe, 1, v, A),
      I(fe, 2, v, A),
      I(fe, 3, v, A)
    ];
    Qu(n, V, { selected: be });
  }
  function L(fe, be = []) {
    if (!(!fe || !Array.isArray(be) || be.length < 4)) {
      fe.beginPath(), fe.moveTo(be[0].x, be[0].y);
      for (let _e = 1; _e < 4; _e += 1) fe.lineTo(be[_e].x, be[_e].y);
      fe.closePath();
    }
  }
  function x(fe, be, _e) {
    const h = Array.isArray(fe == null ? void 0 : fe.corners) ? fe.corners : [];
    if (h.length < 4) return;
    const j = Ee(Number((fe == null ? void 0 : fe.visibilityAlpha) ?? 1), 0, 1);
    if (j <= 0.01) return;
    const A = n.globalAlpha;
    n.globalAlpha = A * j;
    const v = _e ? "rgba(255, 116, 116, 0.96)" : be ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", V = _e ? "rgba(255, 89, 89, 0.08)" : be ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", M = be ? 3.2 : 2.6;
    L(n, h), n.fillStyle = V, n.fill(), n.strokeStyle = v, n.lineWidth = M, n.stroke(), n.save(), n.strokeStyle = v, n.lineWidth = be ? 3.2 : 2.6, n.lineCap = "round";
    const X = Array.isArray(fe == null ? void 0 : fe.edgeMidpoints) && fe.edgeMidpoints.length >= 4 ? fe.edgeMidpoints : [
      { edge: "top", x: (h[0].x + h[1].x) * 0.5, y: (h[0].y + h[1].y) * 0.5 },
      { edge: "right", x: (h[1].x + h[2].x) * 0.5, y: (h[1].y + h[2].y) * 0.5 },
      { edge: "bottom", x: (h[2].x + h[3].x) * 0.5, y: (h[2].y + h[3].y) * 0.5 },
      { edge: "left", x: (h[3].x + h[0].x) * 0.5, y: (h[3].y + h[0].y) * 0.5 }
    ], Q = { top: "bottom", right: "left", bottom: "top", left: "right" }, we = be ? 12 : 9;
    X.forEach((xe) => {
      const he = X.find((Ce) => (Ce == null ? void 0 : Ce.edge) === Q[xe == null ? void 0 : xe.edge]) || {
        x: (h[0].x + h[1].x + h[2].x + h[3].x) * 0.25,
        y: (h[0].y + h[1].y + h[2].y + h[3].y) * 0.25
      }, Ae = he.x - xe.x, Oe = he.y - xe.y, Re = Math.hypot(Ae, Oe) || 1;
      n.beginPath(), n.moveTo(xe.x, xe.y), n.lineTo(xe.x + Ae / Re * we, xe.y + Oe / Re * we), n.stroke();
    }), n.restore(), n.globalAlpha = A;
  }
  function N(fe, be, _e, h) {
    const j = Ee(Number((be == null ? void 0 : be.visibilityAlpha) ?? 1), 0, 1);
    if (j <= 0.01) return;
    if (ee(fe)) {
      x(be, _e, h);
      return;
    }
    if (S(fe)) {
      const v = n.globalAlpha;
      n.globalAlpha = v * $(fe) * j, i.mode === "frame" ? (n.strokeStyle = _e ? "rgba(250, 250, 250, 0.9)" : h ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = _e ? 2 : 1, L(n, be.corners), n.stroke()) : k(fe, _e), n.globalAlpha = v;
      return;
    }
    const A = n.globalAlpha;
    n.globalAlpha = A * j, n.fillStyle = _e ? "rgba(0, 112, 243, 0.24)" : h ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", L(n, be.corners), n.fill(), n.strokeStyle = _e ? "rgba(255, 255, 255, 1)" : h ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = _e ? 2.8 : 1.9, L(n, be.corners), n.stroke(), n.globalAlpha = A;
  }
  function C(fe, be, _e) {
    if (S(fe)) {
      qm(n, be, { accent: _e });
      return;
    }
    const h = !(ee(fe) && ce());
    n.fillStyle = _e, h && be.corners.forEach((j) => {
      n.beginPath(), n.arc(j.x, j.y, 6.5, 0, Math.PI * 2), n.fill();
    }), h && ee(fe) && (n.strokeStyle = _e, n.lineCap = "round", n.lineWidth = 4, be.edgeMidpoints.forEach((j) => {
      var we, xe, F, he;
      const A = (((we = j.b) == null ? void 0 : we.x) ?? j.x) - (((xe = j.a) == null ? void 0 : xe.x) ?? j.x), v = (((F = j.b) == null ? void 0 : F.y) ?? j.y) - (((he = j.a) == null ? void 0 : he.y) ?? j.y), V = Math.hypot(A, v) || 1, M = A / V, X = v / V, Q = 10;
      n.beginPath(), n.moveTo(j.x - M * Q, j.y - X * Q), n.lineTo(j.x + M * Q, j.y + X * Q), n.stroke();
    }), n.lineCap = "butt"), K(fe) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(be.rotateStemBase.x, be.rotateStemBase.y), n.lineTo(be.rotateHandle.x, be.rotateHandle.y), n.stroke(), n.fillStyle = _e, n.beginPath(), n.arc(be.rotateHandle.x, be.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function B() {
    var A;
    const fe = i.mode === "frame" ? [] : W(), be = fe.length > 1, _e = l ? T() : D(), h = _e.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${ee(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== _e || i._sortedItemsCache.orderKey !== h) && (i._sortedItemsCache = {
      src: _e,
      orderKey: h,
      sorted: [..._e]
    });
    const j = i._sortedItemsCache.sorted;
    for (const v of j) {
      const V = i.mode !== "frame" && !be && pe(v);
      if (i.mode === "frame" && !V) continue;
      const M = S(v), X = ee(v), Q = ie(v);
      if (!M && !X || ge(v) && !se(v)) continue;
      const we = de(v);
      if (u !== "stickers" && !we.visible)
        continue;
      const xe = Ee(Number((we == null ? void 0 : we.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const F = X && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= F, N(v, we, V, Q), V && we.visible) {
        const he = Q ? "#ff4d4f" : M && E(v) ? "#f59e0b" : "#0070f3", Ae = n.globalAlpha;
        n.globalAlpha = Ae * xe, C(v, we, he), n.globalAlpha = Ae;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !b() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const v = i.cutoutPanoFrameVisual, V = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= V, x(v.geom, v.selected, v.locked), v.selected && C(
        v.item,
        v.geom,
        v.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (be) {
      const v = P(fe);
      if (v != null && v.visible) {
        const V = c(fe) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(v.corners[0].x, v.corners[0].y);
        for (let M = 1; M < v.corners.length; M += 1) n.lineTo(v.corners[M].x, v.corners[M].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = V, v.corners.forEach((M) => {
          n.beginPath(), n.arc(M.x, M.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      fe.forEach((v) => {
        if (!K(v) && !me(v)) return;
        const V = de(v);
        if (!(V != null && V.visible)) return;
        const M = ie(v) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(V.corners[0].x, V.corners[0].y);
        for (let X = 1; X < V.corners.length; X += 1) n.lineTo(V.corners[X].x, V.corners[X].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = M, V.corners.forEach((X) => {
          n.beginPath(), n.arc(X.x, X.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((A = i.interaction) == null ? void 0 : A.kind) === "marquee_select") {
      const v = ae(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function J(fe) {
    const be = b(), _e = U(be);
    if (!be || !_e)
      return n.clearRect(0, 0, r.width, r.height), fe && o.clear(657930), !1;
    const h = { x: _e.x, y: _e.y, w: _e.w, h: _e.h }, { rect: j, shot: A } = lm(be, _e, { width: r.width, height: r.height }), v = oe(h);
    if (n.clearRect(0, 0, r.width, r.height), fe) {
      o.clear(657930);
      const V = p(j), M = !!m(V, A, void 0, 657930);
      M || o.clear(1118481, V), s.backgroundDirty = !M;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(h.x, h.y, h.w, h.h, v), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = mg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(h.x + 1, h.y + 1, h.w - 2, h.h - 2, Math.max(0, v - 1)), n.stroke(), n.restore(), !0;
  }
  function oe(fe) {
    const be = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * be, Number((fe == null ? void 0 : fe.w) || 0) * 0.5, Number((fe == null ? void 0 : fe.h) || 0) * 0.5);
  }
  function z() {
    var M, X;
    if (((M = i.interaction) == null ? void 0 : M.kind) !== "paint_lasso_fill") return;
    const fe = i.interaction.stroke, be = (X = fe == null ? void 0 : fe.geometry) == null ? void 0 : X.points;
    let _e;
    if (i.mode === "frame") {
      const Q = b(), we = H(Q);
      _e = ne(be, Q, we);
    } else
      _e = O(be);
    if (!Array.isArray(_e) || _e.length < 3) return;
    const h = String((fe == null ? void 0 : fe.layerKind) || "") === "mask", j = (fe == null ? void 0 : fe.color) || { r: 1, g: 0.25, b: 0.25 }, A = Math.round(Number(j.r || 0) * 255), v = Math.round(Number(j.g || 0) * 255), V = Math.round(Number(j.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(_e[0].x || 0), Number(_e[0].y || 0));
    for (let Q = 1; Q < _e.length; Q++) n.lineTo(Number(_e[Q].x || 0), Number(_e[Q].y || 0));
    n.closePath(), h ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${A},${v},${V},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function le() {
    const fe = i.frameRollOverlayVisual, be = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(fe != null && fe.shot) || be <= 1e-4) return;
    const _e = H(fe.shot);
    if (!_e) return;
    const h = { x: _e.x + _e.w * 0.5, y: _e.y + _e.h * 0.5 }, j = Number(fe.shot.roll_deg ?? fe.shot.rot_deg ?? 0) * pr, A = Math.hypot(_e.w, _e.h) * 0.55, v = Math.cos(j) * A, V = Math.sin(j) * A;
    n.save(), n.globalAlpha *= be, n.beginPath(), n.rect(_e.x, _e.y, _e.w, _e.h), n.clip(), n.translate(h.x, h.y), n.rotate(j);
    const M = Math.max(12, Math.min(_e.w, _e.h) / 6);
    n.beginPath();
    for (let X = -A; X <= A; X += M)
      n.moveTo(X, -A), n.lineTo(X, A);
    for (let X = -A; X <= A; X += M)
      n.moveTo(-A, X), n.lineTo(A, X);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(h.x - v, h.y - V), n.lineTo(h.x + v, h.y + V), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Se() {
    return !l || !b() || t && G() || d && !re() ? 0 : JM;
  }
  function Me() {
    const fe = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (fe <= 1e-4 || !l || i.mode !== "pano") return;
    const be = b(), _e = be ? de(be) : null, h = Array.isArray(_e == null ? void 0 : _e.corners) && _e.corners.length >= 4 ? _e.corners.map((v) => ({ x: Number(v.x || 0), y: Number(v.y || 0) })) : null;
    _e != null && _e.visible && h && (i.cutoutPanoDimCorners = h), be && (_e != null && _e.visible) && h && (i.cutoutPanoFrameVisual = {
      item: be,
      geom: _e,
      selected: pe(be),
      locked: ie(be)
    });
    const j = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, A = _e != null && _e.visible ? h : j ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${fe})`, n.beginPath(), n.rect(0, 0, r.width, r.height), A.length >= 4) {
      n.moveTo(A[0].x, A[0].y);
      for (let v = 1; v < 4; v += 1) n.lineTo(A[v].x, A[v].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(fe) {
      ({
        areAllSelectedItemsLocked: c,
        contentSphere: f,
        deviceRect: p,
        drawEditorViewShot: m,
        editorViewInput: y,
        getActiveCutoutShot: b,
        getCutoutSelectableItemsForDisplay: T,
        getFrameViewLayout: U,
        getFrameViewRect: H,
        getList: D,
        getMultiSelectionGeom: P,
        getSelectedItems: W,
        getStickerDisplayAlpha: $,
        getUnwrapRect: te,
        isCameraSelected: re,
        isErpCamera: ce,
        isExternalSticker: E,
        isFreeSpaceView: G,
        isItemLocked: ie,
        isItemSelected: pe,
        isRasterObjectItem: me,
        isSceneSticker: ge,
        isShotItem: ee,
        isStickerItem: S,
        isStrokeGroupItem: K,
        objectGeom: de,
        poseOf: q,
        projectDir: ue,
        projectDirUnwrap: Pe,
        projectErpLassoPointsToFrameRect: ne,
        projectLassoPointsToCurrentView: O,
        rebuildPaintEngineIfNeeded: Z,
        rectFromPoints: ae,
        renderEditorView: ye,
        renderEditorViewUnwrap: ve,
        sampleStickerEdge: I,
        sceneStickerShown: se,
        spaceViewState: g
      } = fe);
    },
    drawGridUnwrap: _,
    drawGridPano: Y,
    drawObjects: B,
    drawFrameViewBackground: J,
    drawLassoOutlineOverlay: z,
    drawFrameRollOverlay: le,
    getCutoutPanoDimTarget: Se,
    drawCutoutPanoPassepartout: Me
  };
}
function qP(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: a,
    readOnly: s,
    runtime: l,
    scheduler: d,
    shotEditor: u,
    stageWrap: c,
    state: f,
    timeline: p,
    type: m,
    uiState: y,
    viewController: b
  } = e;
  let T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O = () => {
  };
  function Z(oe = /* @__PURE__ */ new Set()) {
    ce();
    const z = l.backgroundDirty;
    u && (S(), U(z, oe)), i.mode === "frame" ? (l.frameSafeRect = ge(), P(z)) : i.mode === "unwrap" ? $(z) : W(z), H(), re(), q(), te(), D(), y.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && ne(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), u && y.cameraPreview && (y.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const le = pe();
    y.stageStatus = le.status, y.stageStatusDetail = le.detail, le.status === Un ? (c == null || c.removeAttribute("data-stage-ready"), c == null || c.setAttribute("data-stage-loading-kind", le.detail)) : (c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind"));
  }
  function ae(oe = i.interaction) {
    if (m !== "stickers" || i.mode !== "pano") return !1;
    const z = String((oe == null ? void 0 : oe.kind) || "");
    return z === "move" || z === "scale" || z === "scale_x" || z === "scale_y" || z === "rotate" ? !0 : z === "move_multi" ? Array.isArray(oe == null ? void 0 : oe.stickerSnapshots) && oe.stickerSnapshots.length > 0 : !1;
  }
  function ye() {
    return !!i.interaction || !!p.drag;
  }
  function ve() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = ie();
  }
  function I(oe = {}) {
    var h, j, A, v, V, M, X, Q;
    const z = oe.reason ?? ft.STATE, le = !!oe.localOnly, Se = oe.externalSync === !0, Me = String(oe.cause || ""), fe = String(((h = i.interaction) == null ? void 0 : h.kind) || "");
    (!le || fe === "view" || fe === "pan_frame" || ae() || !!i.viewTransition || Me === "mode" || Me === "frame_view" || Me === "cutout_frame") && (l.backgroundDirty = !0), le && me() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!le || Me === "selection" || Me === "mode" || Me === "cutout_frame") && (ue(), Pe()), ye() ? l.nodePreviewPending = !0 : ve(), Se && ((A = (j = a.__panoDomPreview) == null ? void 0 : j.requestDraw) == null || A.call(j), (v = a.setDirtyCanvas) == null || v.call(a, !0, !1)), Se && !le && ((M = (V = a.graph) == null ? void 0 : V.setDirtyCanvas) == null || M.call(V, !0, !0), (Q = (X = t == null ? void 0 : t.canvas) == null ? void 0 : X.setDirty) == null || Q.call(X, !0, !0)), d.requestDraw(z);
  }
  function se() {
    const oe = n.getBoundingClientRect(), z = Math.max(2, Math.round(oe.width)), le = Math.max(2, Math.round(oe.height)), Se = window.devicePixelRatio || 1, Me = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== z || n.height !== le) && (n.width = z, n.height = le);
    const fe = Fv(oe.width || z, oe.height || le, Se, window.innerWidth || oe.width, window.innerHeight || oe.height);
    return o.resize(fe.width, fe.height), [n.width, n.height, r.width, r.height].join("x") === Me ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && g(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function g(oe) {
    oe(), d.wake();
  }
  function _() {
    return !!i.viewTransition || !!b.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ye();
  }
  function R(oe = performance.now(), z = /* @__PURE__ */ new Set()) {
    var be;
    l.nodePreviewPending && !ye() && ve(), z.forEach((_e) => l.reasons.add(_e)), z.size && (l.dirty = !0), [...z].some((_e) => _e !== ft.OVERLAY) && (l.backgroundDirty = !0), K(), l.lastTickTs > 0 ? Math.max(1e-3, (oe - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = oe;
    const le = i.mode === "frame" && ((be = i.interaction) == null ? void 0 : be.kind) === "roll_frame" ? i.interaction : null;
    le != null && le.shot && (i.frameRollOverlayVisual = { shot: le.shot });
    const Se = le ? 1 : 0;
    if (Math.abs(Se - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Se, i.frameRollOverlayStartTs = oe), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Se) > 1e-6) {
      const _e = Ee(
        (oe - Number(i.frameRollOverlayStartTs || oe)) / ZM,
        0,
        1
      );
      i.frameRollOverlayAlpha = Rn(
        Number(i.frameRollOverlayFrom || 0),
        Se,
        ec(_e)
      ), _e >= 1 && (i.frameRollOverlayAlpha = Se, Se === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const Me = G();
    if (Math.abs(Me - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = Me, i.cutoutPanoDimStartTs = oe), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Me) > 1e-6) {
      const _e = Ee(
        (oe - Number(i.cutoutPanoDimStartTs || oe)) / Kf,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Rn(
        Number(i.cutoutPanoDimFrom || 0),
        Me,
        ec(_e)
      ), _e >= 1 && (i.cutoutPanoDimAlpha = Me), _e >= 1 && Me === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const fe = u && E() ? 1 : 0;
    if (Math.abs(fe - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = fe, i.cutoutPanoFrameStartTs = oe), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - fe) > 1e-6) {
      const _e = Ee(
        (oe - Number(i.cutoutPanoFrameStartTs || oe)) / Kf,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Rn(
        Number(i.cutoutPanoFrameFrom || 0),
        fe,
        ec(_e)
      ), _e >= 1 && (i.cutoutPanoFrameAlpha = fe, fe === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const _e = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), h = Ee((oe - Number(i.outputPreviewAnimStartTs || 0)) / _e, 0, 1), A = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? nP(h) : iP(h);
      i.outputPreviewAnim = Rn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, A), l.dirty = !0, h >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: _e, done: h } = GP(i.viewTransition, oe);
      if (i.viewPosition = _e.position, i.viewYaw = _e.yaw_deg, i.viewPitch = _e.pitch_deg, i.viewFov = _e.hFOV_deg, i.viewDistance = _e.distance, h) {
        const { end: j } = i.viewTransition;
        i.viewTransition = null, j && T(j), de();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, b.stepInertia(oe) && (i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const _e = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), Z(_e);
    }
  }
  function Y(oe) {
    try {
      oe();
    } catch (z) {
      const le = String((z == null ? void 0 : z.stack) || (z == null ? void 0 : z.message) || z || "unknown editor frame error");
      l.tickErrorSignature !== le && (l.tickErrorSignature = le, console.error("[PanoramaStickers] editor frame failed", z)), y.stageStatus = $n, y.stageStatusDetail = "frame", c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind");
    }
  }
  function w(oe = performance.now(), z = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const le = nb();
    Y(() => R(oe, z)), rb(le);
  }
  function k() {
    !l.running || !se() || Y(() => {
      l.dirty = !1, Z(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const L = new ResizeObserver(k);
  let x = null;
  function N() {
    x == null || x.removeEventListener("change", C), x = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), x.addEventListener("change", C);
  }
  function C() {
    N(), k();
  }
  function B() {
    O = tb("editor", () => {
      var oe;
      return {
        type: m,
        readOnly: s,
        mode: i.mode,
        interaction: ((oe = i.interaction) == null ? void 0 : oe.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!ee.playing
      };
    });
  }
  function J() {
    O(), l.running = !1, d.stop(), L.disconnect(), x.removeEventListener("change", C);
  }
  return {
    connect(oe) {
      ({
        applyViewTransitionEnd: T,
        drawCutoutOutputPreview: U,
        drawCutoutPanoPassepartout: H,
        drawFrameRollOverlay: D,
        drawFrameViewBackground: P,
        drawGridPano: W,
        drawGridUnwrap: $,
        drawLassoOutlineOverlay: te,
        drawObjects: re,
        endEditorViewFrame: ce,
        getActiveCutoutShot: E,
        getCutoutPanoDimTarget: G,
        getSharedLivePaintSurface: ie,
        getStageImageStatus: pe,
        isPaintCompositeInteraction: me,
        measureFrameSafeRect: ge,
        playback: ee,
        rebuildPaintEngineIfNeeded: S,
        syncCutoutShot: K,
        syncFloatingViewButtonState: de,
        syncFrameRollKnob: q,
        syncLookAtFrameButtonState: ue,
        syncViewToggleState: Pe,
        updateSelectionMenu: ne
      } = oe);
    },
    requestDraw: I,
    syncCanvasSize: se,
    startAnimation: g,
    editorAnimating: _,
    tick: w,
    stageResizeObserver: L,
    watchPixelRatio: N,
    sampleEditorDiagnostics: B,
    stopRenderLoop: J
  };
}
function Oi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function XP(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function JP({
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
  var H, D;
  const d = e.primaryTool === "paint" || e.primaryTool === "mask", u = {
    visible: d,
    activePane: d ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: d ? !!r : !1,
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
    historyEntries: Array.from({ length: 8 }, (P, W) => ({ index: W, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!d) return u;
  const c = ((H = t.find((P) => i(e.paintColor, P.color))) == null ? void 0 : H.id) || "", f = !c, p = o(e.customPaintColor), m = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), y = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), b = e.brushSizes[y] ?? 10, T = l(), U = Array.from({ length: 8 }, (P, W) => e.customPaintHistory[W] || null);
  return {
    ...u,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: c,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...a(p.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, p.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, p.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, p.h)) * 100}%`,
    alphaValue: m,
    alphaText: `${m}%`,
    historyEntries: U.map((P, W) => ({
      index: W,
      color: P ? { cssColor: n(P, 1) } : null
    })),
    sizeValue: b,
    sizeText: String(b),
    sizeFill: `${Math.max(0, Math.min(100, (b - 1) / 119 * 100))}%`,
    sizeDisabled: T,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function ZP({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const QP = {
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
function eN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = QP[r.key] || [], a = t[t.length - 1];
    n && (a != null && a.grouped) && a.label === n ? a.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function ic(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function tN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? ze.eye : ze.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function nN({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function rN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Xi = "erp", iN = ["1:1", "4:3", "3:2", "16:9"];
function Sg(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...iN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: Xi, label: Number(r) === 180 ? "180°" : "360°", active: e === Xi }] : []
  ];
}
function oN({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
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
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: a,
    rows: eN(a),
    notes: s,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function aN({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: a,
  selectedLocked: s,
  activeAspect: l,
  cutoutAspectOpen: d,
  isExternalSticker: u,
  isStickerHidden: c,
  canRestoreSelectedToInitial: f,
  iconSet: p,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: m = !1,
  cameraDeletable: y = !1,
  erpChoice: b = !1,
  coverage: T = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let U = [];
  if (r.length > 1)
    U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!a }
    ];
  else if (n === "stroke")
    U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    ];
  else if (n === "image") {
    if (U = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: p.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: p.send_back, disabled: !!s }
    ], u(t) || (U.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: p.duplicate }), U.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: p.replace_image })), u(t)) {
      const H = f(), D = c(t);
      U.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: H ? "Back to initial position" : "Already at initial position",
        icon: p.back_initial,
        disabled: !H
      }), U.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: D ? "Show" : "Hide",
        tip: D ? "Show input image" : "Hide input image",
        icon: D ? p.eye : p.eye_dashed
      });
    }
    U.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? p.lock_open : p.lock_closed }), u(t) || U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s });
  } else
    U = [
      {
        key: "aspect",
        kind: "aspect",
        icon: p.aspect,
        open: !!d,
        choices: Sg(l, { erp: b, coverage: T })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === Xi }
    ], m ? y && U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : U.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    );
  return wg(i.corners, U);
}
const qf = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function sN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? qf.filter((s) => s.cameraTip) : qf;
  return wg([...e, ...o], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: a.map(({ key: s, label: l, tip: d, cameraTip: u }) => ({ key: s, label: l, tip: n ? u : d, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...i ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: ze.delete }] : []
  ]);
}
function lN(e, t, r, n, i) {
  const { minX: s, maxX: l, minY: d, maxY: u } = e || {};
  if (![s, l, d, u].every(Number.isFinite)) return null;
  const c = Math.min(Math.max((s + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), p = u + 18, m = d - 18 - r;
  let y;
  return p <= f ? y = Math.max(p, 14) : m >= 14 ? y = Math.min(m, f) : y = Math.min(Math.max(p, 14), f), { left: c, top: y };
}
function wg(e, t) {
  const r = e.map((d) => ({ x: Number(d == null ? void 0 : d.x), y: Number(d == null ? void 0 : d.y) })).filter((d) => Number.isFinite(d.x) && Number.isFinite(d.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((d) => d.x), i = r.map((d) => d.y), o = Math.min(...n), a = Math.max(...n), s = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + a) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: a, minY: s, maxY: l }
  };
}
const xg = "painting";
function cN(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const uN = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function dN(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: a = null, fpsLocked: s = !1, camera: l = !1, cameraHideable: d = !1, stickers: u = !0, scene: c = !1, sceneLocked: f = !1 }) {
  const p = (U, H, D, P, W, $, { keyable: te = !0, hideable: re = !0 } = {}) => {
    const ce = (E) => (r == null ? void 0 : r.owner) === U && r.lane === E ? r.frames.map((G) => G + $) : [];
    return {
      id: U,
      label: D,
      icon: P,
      clip: W,
      selected: U === n,
      hideable: re,
      visible: H.visible,
      keyable: te,
      open: te && o.has(U),
      keys: m1(H).map((E) => ({ frame: E.frame + $, full: E.full })),
      selectedFrames: ce(null),
      lanes: (te ? no(H) : []).map((E) => ({
        key: `${U}:${E}`,
        lane: E,
        label: uN[E],
        frames: H[E].keyframes.map((G) => G.frame + $),
        selectedFrames: ce(E)
      }))
    };
  }, m = u ? e.stickers : [], y = m.filter((U) => U.placement === "sky").sort((U, H) => H.z_index - U.z_index), b = m.filter((U) => U.placement === "world"), T = ({ start: U, in: H, duration: D }) => ({ clip: { start: U, end: D === null ? null : U + D }, offset: U - H });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: s || f,
    lengthLocked: f,
    lockTip: f ? "Set by the scene" : "Set by the video input",
    length: f ? t : e.timeline.length,
    rows: [
      ...l ? [p("camera", e.camera, "Camera", ze.camera, null, 0, { hideable: d })] : [],
      ...[...y, ...b].map((U) => {
        const { clip: H, offset: D } = T(U.clip);
        return p(U.id, U, Pc(U), ze.image, H, D);
      }),
      ...u && (cN(e.painting) || !e.painting_visible) ? [{
        id: xg,
        label: "Paint",
        icon: ze.paintbrush_vertical_tool,
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
      ...u && (c || Is(e.scene)) ? [(() => {
        const { clip: U, offset: H } = T(e.scene.clip);
        return p("scene", e.scene, "Scene", ze.box, U, H, { keyable: !1 });
      })()] : []
    ]
  };
}
function fN(e, t, r, n) {
  const i = v1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, a = Math.max(...r) + n;
  return { label: o === a ? `Frame ${o}` : `${o} – ${a}`, ...i };
}
function pN(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: a,
    paintHueHandle: s,
    previewMode: l,
    readOnly: d,
    runtime: u,
    sceneV2: c,
    shotEditor: f,
    state: p,
    studio: m,
    type: y,
    uiState: b
  } = e;
  let T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae, ye, ve, I, se, g, _ = 0;
  function R() {
    b.toolButtons.forEach((z) => {
      const le = z.attr === "data-tool-mode", Se = z.attr === "data-paint-tool", Me = z.attr === "data-mask-tool";
      z.active = le ? z.value === r.primaryTool : Se ? z.key === r.paintTool : Me ? z.key === r.maskTool : !1, z.pressed = z.active ? "true" : z.pressed == null ? null : "false";
    });
  }
  function Y() {
    if (m && Oi(b.toolButtons, "value", "add-camera", { disabled: ie() }), y !== "cutout") return;
    const z = H();
    Oi(b.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: z ? "Look At Frame" : "Add Frame",
      tip: z ? "Look at frame" : "Add frame",
      icon: z ? ze.camera : ze.plus_circle
    });
  }
  function w() {
    const z = tN({
      spaceView: ue(),
      spaceMode: Ks(r.spaceMode, r.viewTransition),
      readOnly: d,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    b.space && Object.assign(b.space, z.space);
    for (const [le, Se] of Object.entries(z.buttons)) Oi(b.floatingButtons, "action", le, Se);
  }
  function k() {
    var Se;
    const z = nN({ hasShot: !!H(), erp: ge(), hidden: ie() && !U(), studio: m });
    r.mode === "frame" && z.disabled && (m ? ne(H()) : r.mode = "pano"), r.outputPreviewRect = null, b.viewButtons.forEach((Me) => {
      const fe = Me.key === r.mode;
      Me.pressed = fe ? "true" : "false", Me.visible = !(Me.key === "frame" && !f), Me.key === "frame" ? Object.assign(Me, z) : Me.disabled = !1;
    });
    const le = f && r.mode === "frame" ? H() : null;
    b.frameRail.visible = !!le, b.frameRail.disabled = d || (le == null ? void 0 : le.locked) === !0, b.frameRollKnob.visible = !!le && !d && le.locked !== !0, b.frameRollKnob.disabled = d || (le == null ? void 0 : le.locked) === !0, b.frameRollKnob.rollDeg = Number((le == null ? void 0 : le.roll_deg) ?? (le == null ? void 0 : le.rot_deg) ?? 0), b.frameRollKnob.displayValue = Wi(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((Se = r.interaction) == null ? void 0 : Se.kind) === "roll_frame", b.frameRollKnob.armed = !!le && r.altModifier === !0, b.frameRail.rollKnob = b.frameRollKnob, b.frameRail.aspectLabel = le ? Pr(le) : "", b.frameRail.aspectChoices = Sg(le ? String(Pr(le)) : null, { erp: m, coverage: p.coverage }), le || (b.frameRail.aspectOpen = !1), b.outputPreviewToggle.visible = y === "cutout" && r.mode !== "frame" && !!H(), f && b.cameraPreview && (b.cameraPreview.visible = r.mode !== "frame" && T(), b.cameraPreview.expanded = !!r.outputPreviewExpanded, b.cameraPreview.settled = b.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), w(), K() ? se(r.pointerPos) : ae(r.mode === "pano" ? "grab" : "default");
  }
  function L() {
    var le;
    const z = r.mode === "frame" ? H() : null;
    b.frameRollKnob.visible = !!z && !d && z.locked !== !0, b.frameRollKnob.rollDeg = Number((z == null ? void 0 : z.roll_deg) ?? (z == null ? void 0 : z.rot_deg) ?? 0), b.frameRollKnob.displayValue = Wi(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((le = r.interaction) == null ? void 0 : le.kind) === "roll_frame", b.frameRollKnob.armed = !!z && r.altModifier === !0;
  }
  function x() {
    R();
    const z = JP({
      editor: r,
      swatches: pl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: sr,
      colorsApproximatelyEqual: Ws,
      rgb01ToHsv: Qc,
      hsv01ToRgb: Zc,
      getBrushPresetIdForTool: D,
      isActiveLassoTool: me
    });
    if (Object.assign(b.paintDock, z), I(), !z.visible) {
      i && (i.hidden = !0);
      return;
    }
    _ && (clearTimeout(_), _ = 0), o && (!z.colorEnabled && i && !i.hidden && (_ = window.setTimeout(() => {
      i.hidden = !0, b.paintDock.colorPopOpen = !1, _ = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", z.pickerHueColor), i.style.setProperty("--picker-sat", z.pickerSat), i.style.setProperty("--picker-val", z.pickerVal), i.style.setProperty("--picker-hue", z.pickerHue)), a && (a.style.left = z.pickerSvLeft, a.style.top = z.pickerSvTop), s && (s.style.left = z.pickerHueLeft));
  }
  function N() {
    const z = O(f && r.mode === "frame" ? H() : te());
    z && (r.panelLastValues = {
      yaw_deg: Number(z.yaw_deg || 0),
      pitch_deg: Number(z.pitch_deg || 0),
      hFOV_deg: Number(z.hFOV_deg || (y === "stickers" ? 30 : 90)),
      vFOV_deg: Number(z.vFOV_deg || (y === "stickers" ? 30 : 60)),
      rot_deg: Number(z.rot_deg || 0),
      roll_deg: Number(z.roll_deg || 0),
      aspect_id: Pr(z)
    }, C());
  }
  function C() {
    ye(), ve(), J();
  }
  function B() {
    const z = f && r.mode === "frame" ? H() : null;
    return [...re(), Z(), z].some((le) => de(le) ? Is(le) : q(le) && ie() && Is(p.camera));
  }
  function J() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const z = XP(p.ui_settings);
    if (l) {
      b.sidePanel = ZP({
        coverage: p.coverage,
        uiSettings: z,
        normalizeCoverageValue: Pn
      });
      return;
    }
    const le = te(), Se = f && r.mode === "frame" ? H() : null, Me = Se || le, fe = Se ? [Se] : re(), be = Se ? "shot" : ce();
    if (fe.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Me && be !== "stroke") {
      const xe = O(Me);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (be === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (be === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Pr(xe)
      }, de(Me) && (r.panelLastValues.opacity = fi(Me, r.frame).opacity * 100);
    }
    const _e = r.panelLastValues || (y === "stickers" || be === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), h = be === "stroke" ? null : Me, j = Z(), A = t && (be === "shot" || be === "frame") && pe(), v = j ? q1(j, r.frame) : A ? { ...h, ...B1(p.camera, r.frame), vFOV_deg: h.vFOV_deg } : de(h) ? r.panelLastValues : h || _e, V = j ? g(j) : !!h && !S(h);
    r.panelWasEnabled = V, Y();
    let M = null;
    if (Se) {
      const xe = G({ item: Se, kind: "shot", label: "Frame" });
      M = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(Se.id || ""),
          label: xe.label,
          icon: xe.icon || null,
          active: !0
        }]
      };
    } else if (y === "stickers" || y === "cutout") {
      const xe = [{
        id: "",
        label: y === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (y === "stickers") {
        const Ae = H();
        Ae && xe.push({ id: Ae.id, label: "Camera", icon: E("frame"), item: Ae, kind: "frame" }), $().forEach((Oe, Re) => {
          var Ye, $e;
          if (!Oe || de(Oe) && !Oe.visible) return;
          const Ce = c ? Pc(Oe) : ee(Oe) ? String(Oe.id || ld) : String((($e = (Ye = p.assets) == null ? void 0 : Ye[Oe.asset_id]) == null ? void 0 : $e.name) || Oe.asset_id || Oe.id), Ve = `${Re + 1}. ${Ce}${ee(Oe) && Pe(Oe) ? " (hidden)" : ""}`, je = G({ item: Oe, label: Ve, kind: "image" });
          xe.push({ id: Oe.id, label: je.label, icon: je.icon, item: Oe, kind: "image" });
        });
      } else
        P().forEach((Ae) => {
          if (!(Ae != null && Ae.item)) return;
          const Oe = G(Ae);
          xe.push({ id: Ae.item.id, label: Oe.label, icon: Oe.icon, item: Ae.item, kind: Ae.kind });
        });
      const F = (h == null ? void 0 : h.id) || "", he = j ? { label: Pc(j), icon: ze.globe } : xe.find((Ae) => Ae.id === F) || xe[0];
      M = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: he.label,
        currentIcon: he.icon || null,
        items: xe.map((Ae) => ({
          id: Ae.id,
          label: Ae.label,
          icon: Ae.icon || null,
          active: Ae.id === F
        }))
      };
    }
    const X = [], Q = (xe, F, he, Ae, Oe) => {
      const Re = Ee(Number(v[xe] || 0), he, Ae);
      X.push({
        key: xe,
        label: F,
        min: he,
        max: Ae,
        step: Oe,
        value: Re,
        displayValue: Wi(Re),
        fillPct: Ee((Re - he) / Math.max(1e-6, Ae - he) * 100, 0, 100),
        enabled: V && !d
      });
    }, we = [];
    if (j) {
      for (const [xe, F] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const he = ic(v[xe]);
        Q(xe, F, -he, he, 0.01);
      }
      Q("yaw_deg", "Yaw", -180, 180, 0.1), Q("pitch_deg", "Pitch", -90, 90, 0.1), Q("roll_deg", "Roll", -180, 180, 0.1), Q("scale", "Scale", hg, ic(v.scale), 0.01), Q("opacity", "Opacity", 0, 100, 1);
    } else if (fe.length > 1)
      we.push(`Selected objects: ${fe.length}`), we.push("Multi-selection supports z-order and delete.");
    else {
      const xe = be === "shot" || be === "frame";
      if (A)
        for (const [F, he] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ae = ic(v[F]);
          Q(F, he, -Ae, Ae, 0.01);
        }
      Q("yaw_deg", "Yaw", -180, 180, 0.1), Q("pitch_deg", "Pitch", -90, 90, 0.1), Q(be === "image" || y === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Q("hFOV_deg", "H FOV", 1, 179, 0.1), Q("vFOV_deg", "V FOV", 1, 179, 0.1), xe && X.forEach((F) => {
        F.enabled = F.enabled && rN(F.key, { erp: ge() });
      }), c && !xe && Q("opacity", "Opacity", 0, 100, 1);
    }
    b.sidePanel = oN({
      coverage: p.coverage,
      readOnly: d,
      selectionPicker: M,
      enabled: V,
      selectedKind: j ? "world" : be,
      selectedItems: fe,
      params: X,
      notes: we,
      uiSettings: z,
      normalizeCoverageValue: Pn
    });
  }
  function oe() {
    const { canUndo: z, canRedo: le } = W();
    Oi(b.toolButtons, "value", "undo", { disabled: !z }), Oi(b.toolButtons, "value", "redo", { disabled: !le });
  }
  return {
    connect(z) {
      ({
        cameraPreviewShown: T,
        cameraShoots: U,
        getActiveCutoutShot: H,
        getBrushPresetIdForTool: D,
        getCutoutInspectorItems: P,
        getHistoryCapabilities: W,
        getList: $,
        getSelected: te,
        getSelectedItems: re,
        getSelectedKind: ce,
        getSelectionItemIcon: E,
        getSelectionItemLabelData: G,
        hasCamera: ie,
        hasSpaceContent: pe,
        isActiveLassoTool: me,
        isErpCamera: ge,
        isExternalSticker: ee,
        isItemLocked: S,
        isPaintCursorEnabled: K,
        isSceneSticker: de,
        isShotItem: q,
        isSpaceView: ue,
        isStickerHidden: Pe,
        leaveFrameView: ne,
        poseOf: O,
        selectedWorldSticker: Z,
        setCanvasCursor: ae,
        syncCutoutShot: ye,
        syncTimeline: ve,
        syncVideoTransportVisibility: I,
        updateCursor: se,
        worldStickerEditable: g
      } = z);
    },
    syncLookAtFrameButtonState: Y,
    syncFloatingViewButtonState: w,
    syncViewToggleState: k,
    syncFrameRollKnob: L,
    syncPaintUi: x,
    syncSidePanelControls: N,
    updateSidePanel: C,
    inspectorTimed: B,
    syncSidePanelModel: J,
    syncUndoRedoButtons: oe
  };
}
function hN(e) {
  const {
    capture: t,
    cutoutV2: r,
    editor: n,
    node: i,
    readOnly: o,
    sceneV2: a,
    state: s,
    stateV2: l,
    studio: d,
    timeline: u,
    timelinePlayhead: c,
    uiState: f,
    videoEl: p,
    videoTimelineFps: m
  } = e;
  let y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie;
  function pe() {
    if (!l || o) return;
    const g = ge(), _ = u.selection, R = _ && ee(_.owner);
    if (_) {
      const Y = R ? S(_) : [];
      _.frames = _.frames.filter((w) => Y.some((k) => R[k].keyframes.some((L) => L.frame === w))), _.frames.length || (u.selection = null);
    }
    f.timeline = dN(s, {
      span: g,
      selection: u.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: u.expanded ?? me(),
      openRows: u.openRows,
      audio: Pe() && f.videoTransport.hasAudio ? { muted: p.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: m(i) !== null || zv(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: T(),
      cameraHideable: d,
      stickers: !r,
      scene: a && !!Bu(i).scene,
      sceneLocked: !!t
    }), f.easing = u.selection ? fN(R, S(u.selection), u.selection.frames, K(u.selection.owner)) : null;
  }
  function me() {
    return M1(s, { cameraOnly: r, camera: d });
  }
  function ge(g = null) {
    if (t != null && t.frames) return t.frames;
    const _ = s.timeline.fps, R = s.stickers.find(H), Y = R ? b() : null, w = Math.max(
      f.videoTransport.ready ? Math.round(Number(f.videoTransport.duration || 0) * _) : 0,
      Y ? xm(R.clip, _, Y.meta) : 0
    );
    return Vh(s, { minimum: Math.round(_ * 5), frames: w, openClip: g, camera: r && !t || d });
  }
  function ee(g) {
    return g === "camera" ? T() ? s.camera : null : g === "scene" ? a ? s.scene : null : s.stickers.find((_) => _.id === g) || null;
  }
  function S(g) {
    return g.lane ? [g.lane] : no(ee(g.owner));
  }
  function K(g) {
    if (g === "camera") return 0;
    const { clip: _ } = ee(g);
    return _.start - _.in;
  }
  function de(g) {
    return `${eo(g, n.frame)}:${g.start - g.in}`;
  }
  function q(g) {
    const _ = ee(g);
    return !!_ && _.locked !== !0;
  }
  function ue(g) {
    const _ = Math.max(0, Math.round(g));
    if (_ === n.frame) return;
    ce(), n.frame = _, c.frame.value = _, ce();
    const R = [n.selectedId, n.worldSelectedId];
    te(), D(), R[0] !== n.selectedId || R[1] !== n.worldSelectedId ? ie() : U() && E(), G(), re({ reason: ft.PLAYHEAD });
  }
  function Pe() {
    return p instanceof HTMLVideoElement && !!p.getAttribute("src");
  }
  function ne(g) {
    $(), P.seek(g);
  }
  function O() {
    l && P.stop();
  }
  function Z() {
    $(), P.toggle();
  }
  function ae() {
    ce(), D(), ie(), G(), re();
  }
  function ye() {
    W(), y(), ae();
  }
  function ve() {
    const { selection: g } = u;
    q(g.owner) && (O(), y1(ee(g.owner), S(g), g.frames, n.frame - K(g.owner)), u.selection = null, ye());
  }
  function I(g) {
    const _ = to(g);
    if (_ === null || _ === s.timeline.fps) return;
    O();
    const R = Math.round(n.frame * _ / s.timeline.fps);
    z1(s, _), u.selection = null, P.seek(R), ye();
  }
  function se() {
    const g = m(i);
    g !== null && g !== s.timeline.fps && I(g);
  }
  return {
    connect(g) {
      ({
        commitAndRefreshNode: y,
        getPortMedia: b,
        hasCamera: T,
        inspectorTimed: U,
        isExternalSticker: H,
        markObjectVisualsDirty: D,
        playback: P,
        pushHistory: W,
        refreshModalVideoSource: $,
        releaseHiddenSelection: te,
        requestDraw: re,
        syncCutoutShot: ce,
        syncSidePanelModel: E,
        updateSelectionMenu: G,
        updateSidePanel: ie
      } = g);
    },
    syncTimeline: pe,
    timelineTimed: me,
    timelineSpanFrames: ge,
    timelineOwner: ee,
    selectedLanes: S,
    timelineOffset: K,
    clipView: de,
    timelineEditable: q,
    setTimelineFrame: ue,
    jumpTimelineTo: ne,
    stopTimelinePlayback: O,
    togglePlayback: Z,
    refreshTimelineEdit: ae,
    commitTimelineEdit: ye,
    deleteSelectedKeyframes: ve,
    changeTimelineFps: I,
    applyVideoTimelineFps: se
  };
}
function mN(e) {
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
  let d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K;
  function de(q) {
    if (!(n || !o)) {
      if (q.type === "seek") {
        if (q.phase === "move") {
          s.scrubFrame = q.frame, t.request("seek");
          return;
        }
        t.cancel(), q.phase === "start" && T(), b.seek(q.frame);
        return;
      }
      if (q.type === "play") {
        ge();
        return;
      }
      if (q.type === "mute") {
        ee(), ce();
        return;
      }
      if (q.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? me()), s.selection = null, ce();
        return;
      }
      if (q.type === "toggle-row") {
        s.openRows.has(q.id) ? s.openRows.delete(q.id) : s.openRows.add(q.id), ce();
        return;
      }
      if (q.type === "toggle-visible") {
        if (q.id === xg) i.painting_visible = !i.painting_visible;
        else {
          const ue = ie(q.id);
          if (!ue || q.id === "camera" && !a) return;
          ue.visible = !ue.visible;
        }
        H(), f();
        return;
      }
      if (q.type === "select-row") {
        const ue = i.stickers.find((Pe) => Pe.id === q.id);
        if (ue && !ue.visible || q.id === "camera" && !d()) return;
        ue && !eo(ue.clip, r.frame) && y(ue.clip.start), (ue == null ? void 0 : ue.placement) === "world" ? P(ue.id) : q.id === "camera" ? $(p()) : $(m().find((Pe) => Pe.id === q.id) || null), re(), s.selection = null, K(), S(), D();
        return;
      }
      if (q.type === "select-keys") {
        const ue = G(q.owner), Pe = q.frames.map((Z) => Z - ue), ne = s.selection, O = (ne == null ? void 0 : ne.owner) === q.owner && ne.lane === q.lane;
        if (q.additive && O) {
          const Z = new Set(ne.frames);
          for (const ae of Pe)
            Z.has(ae) ? Z.delete(ae) : Z.add(ae);
          ne.frames = [...Z].sort((ae, ye) => ae - ye);
        } else
          s.selection = Pe.length ? { owner: q.owner, lane: q.lane, frames: Pe } : null;
        ce();
        return;
      }
      if (q.type === "move-keys") {
        const ue = s.selection;
        if (!ue || !E(ue.owner)) return;
        const Pe = ie(ue.owner), ne = W(ue);
        if (q.phase === "start") {
          te(), s.drag = { keyframes: ne.map((ae) => structuredClone(Pe[ae].keyframes)), frames: ue.frames };
          return;
        }
        const { drag: O } = s;
        if (!(O != null && O.keyframes)) return;
        ne.forEach((ae, ye) => {
          Pe[ae].keyframes = structuredClone(O.keyframes[ye]);
        });
        const Z = b1(Pe, ne, O.frames, q.delta, -G(ue.owner));
        if (ue.frames = O.frames.map((ae) => ae + Z), q.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, Z ? f() : U();
        return;
      }
      if (q.type === "clip") {
        const ue = q.id === "scene" ? ie("scene") : i.stickers.find((Z) => Z.id === q.id);
        if (!ue || ue.locked) return;
        if (q.phase === "start") {
          te(), s.drag = { clip: { ...ue.clip }, span: pe(ue.clip) };
          return;
        }
        const { drag: Pe } = s;
        if (!(Pe != null && Pe.clip)) return;
        const ne = Pe.clip, O = c(ue.clip);
        if (ue.clip = { ...ne }, q.delta && q.mode === "move" ? S1(ue.clip, q.delta) : q.delta && q.mode === "start" ? w1(ue.clip, ne.start + q.delta) : q.delta && x1(ue.clip, (ne.duration === null ? Pe.span : ne.start + ne.duration) + q.delta, Pe.span), q.phase !== "end") {
          t.request("timeline"), c(ue.clip) !== O && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, H(), JSON.stringify(ue.clip) !== JSON.stringify(ne) ? f() : U();
        return;
      }
      if (q.type === "key-row") {
        if (q.owner === "scene" || !E(q.owner)) return;
        te(), h1(ie(q.owner), r.frame - G(q.owner)), f();
        return;
      }
      if (q.type === "fps") {
        const ue = N1(q.fps);
        if (ue === null || ue === i.timeline.fps || l.timeline.fpsLocked) {
          ce();
          return;
        }
        u(ue);
        return;
      }
      if (q.type === "length") {
        const ue = C1(q.length);
        if (ue === void 0 || ue === i.timeline.length) {
          ce();
          return;
        }
        te(), i.timeline.length = ue, f();
        return;
      }
      if (q.type === "easing") {
        const ue = s.selection;
        if (!ue || !E(ue.owner)) return;
        te(), _1(ie(ue.owner), W(ue), ue.frames, q.easing), q.commit ? f() : U();
      }
    }
  }
  return {
    connect(q) {
      ({
        cameraShoots: d,
        changeTimelineFps: u,
        clipView: c,
        commitTimelineEdit: f,
        getActiveCutoutShot: p,
        getList: m,
        jumpTimelineTo: y,
        playback: b,
        refreshModalVideoSource: T,
        refreshTimelineEdit: U,
        releaseHiddenSelection: H,
        requestDraw: D,
        selectWorldSticker: P,
        selectedLanes: W,
        setSelectedItem: $,
        stopTimelinePlayback: te,
        syncFloatingViewButtonState: re,
        syncTimeline: ce,
        timelineEditable: E,
        timelineOffset: G,
        timelineOwner: ie,
        timelineSpanFrames: pe,
        timelineTimed: me,
        togglePlayback: ge,
        toggleVideoMuted: ee,
        updateSelectionMenu: S,
        updateSidePanel: K
      } = q);
    },
    onTimelineAction: de
  };
}
function gN(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: a,
    readOnly: s,
    state: l,
    stateWidget: d
  } = e;
  let u, c, f, p;
  function m() {
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = c(Number(l.output_preset || 2048))), i && (l.coverage = Pn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), y(), o.setDirtyCanvas(!0, !0));
  }
  function y() {
    var P;
    if (s) return;
    f(), Bh(l), l.coverage = Pn(l.coverage), Kh(o, l.active);
    const D = Uh(o, l);
    d && !Yh(o, D, String(d.value ?? ""), { rebased: n }) && (d.value = D, (P = d.callback) == null || P.call(d, D));
  }
  function b() {
    l.ui_settings = mP(l.ui_settings), s || y();
  }
  function T() {
    var D;
    s || (y(), (D = o.setDirtyCanvas) == null || D.call(o, !0, !0));
  }
  function U() {
    s || u() && p().catch((D) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", D);
    });
  }
  function H(D = {}) {
    var $, te, re, ce, E, G, ie, pe, me;
    const P = D.syncPreview !== !1, W = D.syncGraph !== !1;
    P && ((te = ($ = o.__panoPreviewNodeRuntime) == null ? void 0 : $.requestDraw) == null || te.call($), (ce = (re = o.__panoDomPreview) == null ? void 0 : re.requestDraw) == null || ce.call(re), (E = o.setDirtyCanvas) == null || E.call(o, !0, !1)), W && ((ie = (G = o.graph) == null ? void 0 : G.setDirtyCanvas) == null || ie.call(G, !0, !0), (me = (pe = t == null ? void 0 : t.canvas) == null ? void 0 : pe.setDirty) == null || me.call(pe, !0, !0));
  }
  return {
    connect(D) {
      ({
        needsPaintingLayerSync: u,
        resolveEditorOutputPresetWidth: c,
        syncCutoutShot: f,
        syncPaintingLayerAsync: p
      } = D);
    },
    apply: m,
    commitState: y,
    persistUiSettings: b,
    commitAndRefreshNode: T,
    triggerBackgroundPersistenceOnClose: U,
    syncCoverageChangeToNodePreviews: H
  };
}
function yN(e) {
  const {
    cutoutV2: t,
    editor: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    studio: a,
    type: s,
    uiState: l
  } = e;
  let d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae;
  function ye(Y, w, k = "Clear") {
    return new Promise((L) => {
      l.confirmDialog = {
        visible: !0,
        title: String(Y || ""),
        text: String(w || ""),
        confirmLabel: String(k || "Confirm"),
        resolve: L
      };
    });
  }
  async function ve() {
    var k, L;
    if (n || !await ye(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = Qi(null), ge();
    const w = c();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((x) => x.placement === "world" || w.includes(x)) : w, i || (o.assets = {}), r.selectedId = ((k = w[0]) == null ? void 0 : k.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((L = w[0]) == null ? void 0 : L.id) || null, S();
    else {
      const x = L1(o.shots, o.active.selected_shot_id);
      o.stickers = w, o.assets = {}, o.shots = x.shots, r.selectedId = x.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = x.selectedShotId, !x.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, S();
    }
    K(), f(), Z(), O(), de();
  }
  async function I(Y) {
    var N, C, B, J;
    if (n) return;
    const w = Y === "mask" ? "mask" : "paint", k = w === "mask" ? "Mask" : "Paint", L = U(w);
    if (!(!L.length && !(((N = r.interaction) == null ? void 0 : N.kind) === "draw" && ((C = r.interaction) == null ? void 0 : C.layerKind) === w) || !await ye(
      `Clear ${k}`,
      `This will remove all ${w} strokes in the current node.`,
      `Clear ${k}`
    ))) {
      if (((B = r.interaction) == null ? void 0 : B.kind) === "draw" && ((J = r.interaction) == null ? void 0 : J.layerKind) === w) {
        const oe = m(r.interaction);
        oe && r.paintEngine.cancelActiveStroke(oe), r.interaction = null;
      }
      L.length = 0, o.painting.raster_objects = H().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") !== w), w === "paint" && (T().length = 0), ge(), K(), f(), Z(), O(), ne(), de();
    }
  }
  function se() {
    if (n) return;
    const Y = D();
    if (!Y || !E(Y) || W(Y) || i && ie(Y)) return;
    let w;
    i ? w = ev(Y, ni("st"), b()) : (w = JSON.parse(JSON.stringify(Y)), w.id = ni("st"), w.yaw_deg = Vt((w.yaw_deg || 0) + 8), w.z_index = b()), o.stickers.push(w), o.active.selected_sticker_id = w.id, r.selectedId = w.id, r.selectedIds = [w.id], pe(), K(), f(), O(), Z(), de();
  }
  function g() {
    const Y = q();
    return Y ? (ae(Y) && (ue(), Z1(o, Y.id), u(), pe(), K(), f(), Z(), O(), Pe(), de()), !0) : !1;
  }
  function _() {
    var k, L, x, N, C;
    if (n || t) return;
    const Y = P(), w = D();
    if (!(!w && Y.length === 0) && !Y.some((B) => $(B))) {
      if (ue(), Y.length > 1) {
        const B = new Set(Y.filter((z) => G(z)).map((z) => String(z.actionGroupId || z.id || ""))), J = new Set(Y.filter((z) => te(z)).map((z) => ee(z.rasterObjectId || z.id || ""))), oe = new Set(Y.filter(E).map((z) => String(z.id || "")));
        B.size > 0 && (o.painting.paint.strokes = (Array.isArray((L = (k = o.painting) == null ? void 0 : k.paint) == null ? void 0 : L.strokes) ? o.painting.paint.strokes : []).filter((z) => !B.has(String((z == null ? void 0 : z.actionGroupId) || ""))), o.painting.groups = T().filter((z) => !B.has(String((z == null ? void 0 : z.actionGroupId) || (z == null ? void 0 : z.id) || ""))), ge()), J.size > 0 && (o.painting.raster_objects = H().filter((z) => !J.has(String((z == null ? void 0 : z.id) || ""))), me()), oe.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter((z) => oe.has(String((z == null ? void 0 : z.id) || "")) ? W(z) ? (ce(z) || (z.visible = !1), !0) : !1 : !0), S(), pe()), r.selectedId = null, r.selectedIds = [], K(), f(), Z(), O(), de();
        return;
      }
      if (G(w)) {
        const B = String(w.actionGroupId || w.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((N = (x = o.painting) == null ? void 0 : x.paint) == null ? void 0 : N.strokes) ? o.painting.paint.strokes : []).filter((J) => String((J == null ? void 0 : J.actionGroupId) || "").trim() !== B), o.painting.groups = T().filter((J) => String((J == null ? void 0 : J.actionGroupId) || (J == null ? void 0 : J.id) || "").trim() !== B), ge(), r.selectedId = null, r.selectedIds = [], K(), f(), Z(), O(), de();
        return;
      }
      if (te(w)) {
        const B = ee(w.rasterObjectId || w.id || "");
        o.painting.raster_objects = H().filter((J) => String((J == null ? void 0 : J.id) || "").trim() !== B), me(), r.selectedId = null, r.selectedIds = [], K(), f(), Z(), O(), de();
        return;
      }
      if (a && re(w)) {
        p();
        return;
      }
      if (s === "stickers" || E(w)) {
        if (W(w)) {
          if (ce(w)) return;
          w.visible = !1, pe(), K(), f(), Z(), O(), de();
          return;
        }
        o.stickers = o.stickers.filter((B) => B.id !== w.id), S(), pe(), r.selectedId = ((C = y()[0]) == null ? void 0 : C.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, K(), f(), Z(), O(), de();
        return;
      }
      d();
    }
  }
  function R() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", ne(), Z());
  }
  return {
    connect(Y) {
      ({
        clearCutoutFrame: d,
        clearWorldSelection: u,
        collectExternalStickersForClearAll: c,
        commitAndRefreshNode: f,
        deleteStudioCamera: p,
        getActivePaintTargetDescriptor: m,
        getList: y,
        getNextStickerZIndex: b,
        getPaintingGroupList: T,
        getPaintingLayerList: U,
        getRasterObjectList: H,
        getSelected: D,
        getSelectedItems: P,
        isExternalSticker: W,
        isItemLocked: $,
        isRasterObjectItem: te,
        isShotItem: re,
        isStickerHidden: ce,
        isStickerItem: E,
        isStrokeGroupItem: G,
        isUploadingSticker: ie,
        markObjectVisualsDirty: pe,
        markPaintCompositeVisualsDirty: me,
        markPaintStrokeVisualsDirty: ge,
        parseRasterObjectSelectionId: ee,
        pruneUnusedAssets: S,
        pushHistory: K,
        requestDraw: de,
        selectedWorldSticker: q,
        stopTimelinePlayback: ue,
        syncFloatingViewButtonState: Pe,
        syncPaintUi: ne,
        updateSelectionMenu: O,
        updateSidePanel: Z,
        worldStickerEditable: ae
      } = Y);
    },
    clearAll: ve,
    clearPaintingLayer: I,
    duplicateSelected: se,
    deleteSelectedWorldSticker: g,
    deleteSelected: _,
    forceCursorTool: R
  };
}
function bN(e) {
  const {
    api: t,
    canvas: r,
    cutoutV2: n,
    dragCue: i,
    editor: o,
    editorView: a,
    imageCache: s,
    node: l,
    readOnly: d,
    sceneV2: u,
    stageWrap: c,
    state: f,
    type: p,
    vueModal: m
  } = e;
  let y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K;
  function de(N) {
    return rd(N == null ? void 0 : N.dataTransfer);
  }
  function q(N) {
    const C = !!N;
    i.active !== C && (i.active = C, c.classList.toggle("drop-active", C));
  }
  function ue() {
    const N = new Set(
      (f.stickers || []).map((C) => String((C == null ? void 0 : C.asset_id) || "")).filter((C) => !!C)
    );
    Object.keys(f.assets || {}).forEach((C) => {
      N.has(C) || (delete f.assets[C], s.delete(C));
    });
  }
  async function Pe(N) {
    if (d || n || p !== "stickers" && p !== "cutout" || !Yn(N)) return;
    if (u) {
      ee(), await ye(N);
      return;
    }
    const C = ni("asset"), B = Eo(l, `add:${C}`, async () => {
      try {
        const { image: J } = await Oo(N);
        s.set(C, J);
        const oe = ni("st");
        f.stickers.push({
          id: oe,
          asset_id: C,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: T(30, Number(J.naturalWidth || J.width || 1), Number(J.naturalHeight || J.height || 1)),
          rot_deg: 0,
          z_index: P()
        }), pe(f.stickers[f.stickers.length - 1]), D(), K(), S(), G();
        const z = await ti(N, {
          fetchApi: (Me, fe) => t.fetchApi(Me, fe)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((Me) => String((Me == null ? void 0 : Me.asset_id) || "") === C).length) return;
        f.assets[C] = z, ue(), E(), b(), K(), S(), G();
      } catch (J) {
        delete f.assets[C], s.delete(C);
        const oe = Array.isArray(f.stickers) ? f.stickers : [], z = oe.filter((le) => String((le == null ? void 0 : le.asset_id) || "") === C);
        throw z.length && (f.stickers = oe.filter((le) => String((le == null ? void 0 : le.asset_id) || "") !== C), z.some((le) => String((le == null ? void 0 : le.id) || "") === String(o.selectedId || "")) && pe(null), K(), S(), G(), b()), J;
      }
    });
    try {
      await B;
    } catch {
    }
  }
  function ne() {
    var N;
    d || p !== "stickers" && p !== "cutout" || (N = m == null ? void 0 : m.openImagePicker) == null || N.call(m, "add");
  }
  function O() {
    var N;
    d || !u || (N = m == null ? void 0 : m.openImagePicker) == null || N.call(m, "add-world");
  }
  async function Z(N) {
    d || !u || !Yn(N) || (ee(), await ye(N, "world"));
  }
  function ae() {
    const N = { x: r.width / 2, y: r.height / 2 }, C = te() ? a.pick(H(), N.x, N.y, r.width, r.height) : null;
    return wv(me(), C, U());
  }
  async function ye(N, C = "sky") {
    const B = ni("st"), J = Eo(l, `add:${B}`, async () => {
      const { image: oe } = await Oo(N), z = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: T(30, Number(oe.naturalWidth || oe.width || 1), Number(oe.naturalHeight || oe.height || 1)),
        rot_deg: 0
      }, le = { kind: "file", filename: "" }, Se = C === "world" ? Q1(B, le, ae()) : $u(B, le, z, P());
      s.set(ge(Se), oe), f.stickers.push(Se), C === "world" ? ie(B) : pe(Se), D(), K(), S(), G();
      try {
        const Me = await ti(N, {
          fetchApi: (be, _e) => t.fetchApi(be, _e)
        }), fe = f.stickers.find((be) => be.id === B);
        if (!fe) return;
        fe.source = rs(Me), s.set(ge(fe), oe), E(), b();
      } catch (Me) {
        throw f.stickers = f.stickers.filter((fe) => fe.id !== B), o.selectedId === B && pe(null), o.worldSelectedId === B && y(), E(), b(), Me;
      } finally {
        K(), S(), G();
      }
    });
    try {
      await J;
    } catch {
    }
  }
  async function ve(N, C) {
    const B = Eo(l, `replace:${C}:${ni("asset")}`, async () => {
      const { image: J } = await Oo(N), oe = await ti(N, {
        fetchApi: (le, Se) => t.fetchApi(le, Se)
      }), z = f.stickers.find((le) => le.id === C);
      if (z) {
        z.source = rs(oe), z.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const le of [z.size.value, ...z.size.keyframes.map((Se) => Se.value)])
          le.vFOV_deg = T(le.hFOV_deg, Number(J.naturalWidth || J.width || 1), Number(J.naturalHeight || J.height || 1));
        s.set(ge(z), J), ce(), E(), b(), K(), S(), G();
      }
    });
    try {
      await B;
    } catch {
    }
  }
  async function I(N) {
    if (d || p !== "stickers" && p !== "cutout") return;
    const C = W();
    if (!C || !re(C) || $(C) || !Yn(N)) return;
    if (u) {
      await ve(N, C.id);
      return;
    }
    const B = String(C.id || ""), J = ni("asset"), oe = Eo(l, `replace:${B}:${J}`, async () => {
      var be;
      const z = (Array.isArray(f.stickers) ? f.stickers : []).find((_e) => String((_e == null ? void 0 : _e.id) || "") === B) || null;
      if (!z || !re(z) || $(z)) return;
      const le = String(z.asset_id || ""), Se = le ? on(((be = f.assets) == null ? void 0 : be[le]) || null) : null, Me = Number(z.vFOV_deg || 0), fe = z.crop && typeof z.crop == "object" ? { ...z.crop } : null;
      try {
        const { image: _e } = await Oo(N);
        s.set(J, _e), z.asset_id = J, z.vFOV_deg = T(
          Number(z.hFOV_deg || 30),
          Number(_e.naturalWidth || _e.width || 1),
          Number(_e.naturalHeight || _e.height || 1)
        ), z.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ce(), K(), S(), G();
        const h = await ti(N, {
          fetchApi: (A, v) => t.fetchApi(A, v)
        }), j = (Array.isArray(f.stickers) ? f.stickers : []).find((A) => String((A == null ? void 0 : A.id) || "") === B) || null;
        if (!j || String(j.asset_id || "") !== J) return;
        f.assets[J] = h, ue(), E(), b(), K(), S(), G();
      } catch (_e) {
        delete f.assets[J], s.delete(J);
        const h = (Array.isArray(f.stickers) ? f.stickers : []).find((j) => String((j == null ? void 0 : j.id) || "") === B) || null;
        throw h && String(h.asset_id || "") === J && (le && Se && (f.assets[le] = Se), h.asset_id = le, h.vFOV_deg = Me, h.crop = fe ? { ...fe } : null), ce(), b(), K(), S(), G(), _e;
      }
    });
    try {
      await oe;
    } catch {
    }
  }
  function se() {
    var C;
    if (d) return;
    const N = W();
    !N || !re(N) || $(N) || (C = m == null ? void 0 : m.openImagePicker) == null || C.call(m, "replace");
  }
  async function g() {
    if (d || p !== "stickers") return;
    if (u) {
      await _();
      return;
    }
    const N = f.assets && typeof f.assets == "object" ? f.assets : {}, C = Object.entries(N).filter(([, J]) => {
      const oe = String((J == null ? void 0 : J.type) || "").toLowerCase(), z = String((J == null ? void 0 : J.value) || "");
      return oe === "dataurl" && z.startsWith("data:image");
    });
    if (!C.length) return;
    let B = !1;
    for (const [J, oe] of C)
      try {
        const z = String((oe == null ? void 0 : oe.value) || "");
        if (!z) continue;
        const le = await fetch(z).then((_e) => _e.blob()), Se = String(le.type || "image/png").split("/")[1] || "png", Me = String((oe == null ? void 0 : oe.name) || `${J}.${Se}`), fe = new File([le], Me, { type: le.type || "image/png" }), be = await ti(fe, {
          fetchApi: (_e, h) => t.fetchApi(_e, h)
        });
        f.assets[J] = {
          ...be,
          w: Number((oe == null ? void 0 : oe.w) || 0),
          h: Number((oe == null ? void 0 : oe.h) || 0)
        }, B = !0;
      } catch {
      }
    B && (b(), G());
  }
  async function _() {
    let N = !1;
    for (const C of f.stickers) {
      const B = C.source.data_url;
      if (B)
        try {
          const J = await fetch(B).then((Se) => Se.blob()), oe = String(J.type || "image/png").split("/")[1] || "png", z = new File([J], `${C.id}.${oe}`, { type: J.type || "image/png" }), le = await ti(z, {
            fetchApi: (Se, Me) => t.fetchApi(Se, Me)
          });
          C.source = rs(le), N = !0;
        } catch {
        }
    }
    N && (b(), G());
  }
  function R(N) {
    p !== "stickers" && p !== "cutout" || d || (N.preventDefault(), q(!0));
  }
  function Y(N) {
    var J;
    if (p !== "stickers" && p !== "cutout" || d) return;
    N.preventDefault(), N.stopPropagation(), i.depth = 0, q(!1);
    const B = Array.from(((J = N.dataTransfer) == null ? void 0 : J.files) || []).find((oe) => Yn(oe));
    B && Pe(B);
  }
  function w(N) {
    p !== "stickers" && p !== "cutout" || d || de(N) && (i.depth += 1, q(!0), N.preventDefault());
  }
  function k(N) {
    p !== "stickers" && p !== "cutout" || d || (!i.active && de(N) && q(!0), i.active && N.preventDefault());
  }
  function L(N) {
    if (p !== "stickers" && p !== "cutout" || d || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const C = Number(N.clientX) <= 0 && Number(N.clientY) <= 0;
    (i.depth === 0 || C) && q(!1);
  }
  function x(N) {
    p !== "stickers" && p !== "cutout" || d || (i.depth = 0, q(!1), de(N) && N.preventDefault());
  }
  return {
    connect(N) {
      ({
        clearWorldSelection: y,
        commitAndRefreshNode: b,
        computeStickerVFov: T,
        contentSphere: U,
        currentSpaceCamera: H,
        forceCursorTool: D,
        getNextStickerZIndex: P,
        getSelected: W,
        isExternalSticker: $,
        isSpaceView: te,
        isStickerItem: re,
        markObjectVisualsDirty: ce,
        pushHistory: E,
        requestDraw: G,
        selectWorldSticker: ie,
        setSelectedItem: pe,
        spaceViewState: me,
        stickerImageKey: ge,
        stopTimelinePlayback: ee,
        updateSelectionMenu: S,
        updateSidePanel: K
      } = N);
    },
    addImageStickerFromFile: Pe,
    addImageSticker: ne,
    addWorldImageSticker: O,
    addWorldStickerFromFile: Z,
    replaceSelectedImageFromFile: I,
    replaceSelectedImage: se,
    migrateLegacyEmbeddedAssets: g,
    pruneUnusedAssets: ue,
    setDropCue: q,
    onCanvasDragOver: R,
    onCanvasDrop: Y,
    onWindowDragEnter: w,
    onWindowDragOver: k,
    onWindowDragLeave: L,
    onWindowDrop: x
  };
}
function vN(e) {
  const {
    cameraV2: t,
    canvas: r,
    cutoutV2: n,
    editor: i,
    frameRollKnobEl: o,
    initialShotBase: a,
    readOnly: s,
    runtime: l,
    shotEditor: d,
    stageWrap: u,
    state: c,
    studio: f,
    tooltip: p,
    type: m,
    uiState: y
  } = e;
  let b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae, ye, ve, I, se, g, _ = a;
  function R(v, V) {
    var Q;
    const M = (Q = $().space) == null ? void 0 : Q.gizmo;
    if (ie() && M && g("hover", V) !== null && g("down", V))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: M.mode, start: M.transform, base: W(), changed: !1 }, r.setPointerCapture(v.pointerId), ve(V), !0;
    const X = om(W(), T(ue()));
    return Iv(P(), X, V, r.width, r.height) ? (ie() || (q(le()), se(), I(), K()), i.interaction = { kind: "world_select" }, r.setPointerCapture(v.pointerId), !0) : !1;
  }
  function Y() {
    if (s || m !== "cutout") return;
    const v = le();
    if (v) {
      q(v), i.mode = "pano", n && pe() ? ae(em(ee(Pe(), v.position), H(), r.width, r.height)) : ye(Vt(Number(v.yaw_deg || 0)), Ee(Number(v.pitch_deg || 0), -89.9, 89.9)), se(), I(), K({ cause: "cutout_frame" });
      return;
    }
    const V = ph({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Vt(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    c.shots = [V], q(V), te(), i.mode = "pano", S(), D(), se(), I(), K({ cause: "cutout_frame" });
  }
  function w() {
    s || !f || ce() || (ne(), c.camera = G1(Pe()), oe(), q(le()), te(), S(), D(), se(), I(), K({ cause: "cutout_frame" }));
  }
  function k() {
    ne(), c.camera = null, q(null), oe(), S(), D(), se(), I(), K({ cause: "cutout_frame" });
  }
  function L(v, V) {
    f && me(v) && (c.camera.projection = V === Xi ? "erp" : "perspective", V === Xi) || C(v, V);
  }
  function x() {
    s || m !== "cutout" || (c.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, c.active.selected_shot_id = null, S(), D(), se(), I(), K());
  }
  function N(v, V) {
    const M = l.frameSafeRect;
    if (!v || !M || i.mode !== "frame") return !1;
    const X = Jc * di(M, v), Q = Pu(Mu(M, V), X);
    return v.hFOV_deg = Q.hFOV_deg, v.vFOV_deg = Q.vFOV_deg, !0;
  }
  function C(v, V) {
    if (!v || v.locked === !0) return;
    const M = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, X = (() => {
      const F = String(v.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(F)) {
        const [Oe, Re] = F.split(":").map((Ce) => Number(Ce));
        if (Number.isFinite(Oe) && Number.isFinite(Re)) return Oe >= Re;
      }
      const he = Number(v.hFOV_deg || 64), Ae = Number(v.vFOV_deg || 40);
      return Math.abs(he - Ae) > 1e-6 ? he >= Ae : mi(v) >= 1;
    })();
    let [Q, we] = M[String(V)] || M["1:1"];
    Q >= we !== X && ([Q, we] = [we, Q]);
    const xe = Q / we;
    if (!N(v, xe)) {
      const F = Ee(Number(v.vFOV_deg || 40), 1, 179);
      v.vFOV_deg = F, v.hFOV_deg = es(F, xe);
    }
    v.aspect_id = `${Q}:${we}`;
  }
  function B(v, V, M) {
    if (!v || v.locked === !0) return !1;
    const X = oa(V, M);
    if (!X) return !1;
    const Q = X.ratio;
    if (!N(v, Q)) {
      const we = Ee(Number(v.vFOV_deg || 40), 1, 179);
      v.vFOV_deg = we, v.hFOV_deg = es(we, Q);
    }
    return v.aspect_id = X.label, !0;
  }
  function J(v) {
    if (!v || v.locked === !0) return;
    const V = String(v.aspect_id || "").trim(), M = Gr(v), X = M.tanHalfX / Math.max(1e-12, M.tanHalfY), Q = 1 / Math.max(1e-12, X);
    if (!N(v, Q)) {
      const we = Ee(Number(v.vFOV_deg || 60), 1, 179);
      v.vFOV_deg = we, v.hFOV_deg = es(we, Q);
    }
    if (/^\d+:\d+$/.test(V)) {
      const [we, xe] = V.split(":");
      v.aspect_id = `${xe}:${we}`;
    } else
      v.aspect_id = li(v);
  }
  function oe(v = !0) {
    var X, Q;
    if (!t) return;
    const V = _;
    if (!U()) {
      _ = null, (X = c.shots) != null && X.length && (c.shots = []), V && z(V, null);
      return;
    }
    const M = (Q = c.shots) == null ? void 0 : Q[0];
    v && M && _ && K1(c.camera, i.frame, M, _), _ = Hh(c.camera, i.frame), M ? Object.assign(M, _, { position: [..._.position] }) : c.shots = [{ ..._, position: [..._.position] }], V || z(null, _);
  }
  function z(v, V) {
    var we, xe;
    !V && i.mode === "frame" && ge(v);
    const M = (V == null ? void 0 : V.position) ?? [0, 0, 0];
    if (((xe = (we = i.viewTransition) == null ? void 0 : we.end) == null ? void 0 : xe.mode) === "3dof") {
      ae({ ...Pe(), position: M }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !E()) return;
    const X = (v == null ? void 0 : v.position) ?? [0, 0, 0];
    if (X.every((F, he) => F === M[he])) return;
    const Q = { ...Pe(), position: X };
    b({ mode: "6dof", position: X, moved: !0 }), i.viewDistance = Q.distance, ae({ ...Q, position: M }, { mode: "3dof", moved: !1 });
  }
  function le() {
    if (!d) return null;
    const v = Array.isArray(c.shots) ? c.shots : [];
    if (!v.length) return null;
    const V = String(c.active.selected_shot_id || "");
    return v.find((M) => String((M == null ? void 0 : M.id) || "") === V) || v[0] || null;
  }
  function Se(v, V, M = {}) {
    var we;
    if ((v == null ? void 0 : v.kind) !== "roll_frame" || !v.shot) return;
    v.accumulatedRad += uh(V, v.lastAngle), v.lastAngle = V;
    const X = dh(v.start.roll_deg, v.accumulatedRad, {
      shiftKey: M.shiftKey,
      altKey: v.altStarted ? !1 : M.altKey
    });
    v.shot.roll_deg = X, v.changed = v.changed || Math.abs(v.accumulatedRad) > 1e-9;
    const Q = (((we = y.sidePanel) == null ? void 0 : we.params) || []).find((xe) => xe.key === "roll_deg");
    Q && (Q.value = X, Q.displayValue = Wi(X), Q.fillPct = (X + 180) / 360 * 100), O(), be(v), K({ localOnly: !0 });
  }
  function Me(v, V, M = {}) {
    var we;
    if ((v == null ? void 0 : v.kind) !== "roll_frame" || !v.shot || !v.rollGesture) return;
    const X = Wm(v.rollGesture, V, M);
    if (!X) return;
    v.rollGesture = X.gesture, v.center = X.gesture.center, v.lastAngle = X.gesture.lastAngle, v.accumulatedRad = X.gesture.accumulatedRad, v.shot.roll_deg = X.rollDeg, v.changed = v.changed || Math.abs(X.gesture.accumulatedRad) > 1e-9;
    const Q = (((we = y.sidePanel) == null ? void 0 : we.params) || []).find((xe) => xe.key === "roll_deg");
    Q && (Q.value = X.rollDeg, Q.displayValue = Wi(X.rollDeg), Q.fillPct = (X.rollDeg + 180) / 360 * 100), O(), be(v), K({ localOnly: !0 });
  }
  function fe(v, V) {
    const M = de(v);
    return Math.atan2(M.y - V.y, M.x - V.x);
  }
  function be(v) {
    var xe, F;
    if ((v == null ? void 0 : v.kind) !== "roll_frame" || !v.shot) return;
    p.timer && (clearTimeout(p.timer), p.timer = 0), p.target = null;
    const V = re(v.shot), M = (xe = r.getBoundingClientRect) == null ? void 0 : xe.call(r), X = (F = u.getBoundingClientRect) == null ? void 0 : F.call(u);
    if (!V || !M || !X || r.width <= 0 || r.height <= 0) return;
    const Q = M.width / r.width, we = M.height / r.height;
    y.tooltip.text = `${Wi(v.shot.roll_deg)}°`, y.tooltip.left = M.left - X.left + (V.x + V.w * 0.5) * Q, y.tooltip.top = M.top - X.top + (V.y + V.h * 0.5) * we + 12, y.tooltip.variant = "roll", y.tooltip.visible = !0;
  }
  function _e(v) {
    var we;
    if (v.button !== 0 || s || i.mode !== "frame") return;
    const V = le();
    if (!V || V.locked === !0) return;
    const M = re(V);
    if (!M) return;
    const X = { x: M.x + M.w * 0.5, y: M.y + M.h * 0.5 }, Q = fe(v, X);
    i.interaction = {
      kind: "roll_frame",
      shot: V,
      center: X,
      lastAngle: Q,
      accumulatedRad: 0,
      start: { roll_deg: Number(V.roll_deg ?? V.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (we = o.setPointerCapture) == null || we.call(o, v.pointerId), v.preventDefault(), O(), be(i.interaction), K({ localOnly: !0 });
  }
  function h(v) {
    var V;
    ((V = i.interaction) == null ? void 0 : V.kind) !== "roll_frame" || i.interaction.source !== "knob" || Se(
      i.interaction,
      fe(v, i.interaction.center),
      v
    );
  }
  function j() {
    const v = i.interaction;
    (v == null ? void 0 : v.kind) !== "roll_frame" || v.source !== "knob" || (v.changed && (S(), D(), se()), i.interaction = null, G(), Z(), O(), K());
  }
  function A(v) {
    const V = i.mode === "frame" && !s ? le() : null;
    !V || V.locked === !0 || Math.abs(Number(V.roll_deg ?? V.rot_deg ?? 0)) <= 1e-9 || (V.roll_deg = 0, S(), D(), se(), O(), K(), v.preventDefault());
  }
  return {
    connect(v) {
      ({
        applySpaceMode: b,
        cameraFrustumLength: T,
        cameraShoots: U,
        cameraSphere: H,
        commitAndRefreshNode: D,
        currentSpaceCamera: P,
        cutoutCamera: W,
        editorViewInput: $,
        forceCursorTool: te,
        getFrameViewRect: re,
        hasCamera: ce,
        hasSpaceContent: E,
        hideTooltip: G,
        isCameraSelected: ie,
        isFreeSpaceView: pe,
        isShotItem: me,
        leaveFrameView: ge,
        lookingAt: ee,
        pushHistory: S,
        requestDraw: K,
        screenPos: de,
        setSelectedItem: q,
        spaceScale: ue,
        spaceViewState: Pe,
        stopTimelinePlayback: ne,
        syncFrameRollKnob: O,
        syncViewToggleState: Z,
        transitionView: ae,
        turnViewTo: ye,
        updateCursor: ve,
        updateSelectionMenu: I,
        updateSidePanel: se,
        worldGizmoPointer: g
      } = v);
    },
    addCutoutFrame: Y,
    addStudioCamera: w,
    deleteStudioCamera: k,
    setShotAspect: L,
    clearCutoutFrame: x,
    applyCutoutAspectCustom: B,
    rotateCutoutAspect90: J,
    syncCutoutShot: oe,
    getActiveCutoutShot: le,
    startCameraPress: R,
    applySharedRollInteractionPoint: Me,
    onFrameRollKnobPointerDown: _e,
    onFrameRollKnobPointerMove: h,
    finishKnobRoll: j,
    onFrameRollKnobDoubleClick: A
  };
}
function _N(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: a,
    frameRailEl: s,
    paintDockEl: l,
    readOnly: d,
    runtime: u,
    shotEditor: c,
    toolRailEl: f,
    uiState: p,
    videoTransportEl: m
  } = e;
  let y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me = null;
  function ge(k) {
    if (n.mode = "pano", !k) return;
    b();
    const L = E().distance;
    n.viewYaw = Vt(k.yaw_deg), n.viewPitch = Ee(k.pitch_deg, -89.9, 89.9), n.viewFov = Ee(k.hFOV_deg, 35, 140), n.spaceMode === "6dof" && y({ mode: "6dof", position: [...k.position], moved: !0 }), n.viewDistance = L, u.backgroundDirty = !0;
  }
  function ee() {
    var be, _e, h, j, A;
    if (!r) return null;
    const k = (be = r.getBoundingClientRect) == null ? void 0 : be.call(r), L = Number((k == null ? void 0 : k.width) || 0) > 0 ? r.width / k.width : 1, x = Number((k == null ? void 0 : k.height) || 0) > 0 ? r.height / k.height : 1;
    u.frameCanvasScale = Math.min(L, x);
    let N = 24, C = 24;
    const B = Math.max(N + 1, r.width - 24);
    let J = Math.max(C + 1, r.height - 24);
    const oe = (_e = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : _e.call(f), z = (h = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : h.call(s);
    let le = 24;
    oe && k && oe.width > 0 && oe.height > 0 && (le = Math.max(le, (oe.right - k.left) * L + Wf)), z && k && z.width > 0 && z.height > 0 && ((j = p.frameRail) == null ? void 0 : j.visible) === !0 && (le = Math.max(le, (k.right - z.left) * L + Wf)), N = Math.max(N, le);
    const Se = Math.min(B, r.width - le);
    let Me = 24;
    const fe = (A = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : A.call(a);
    if (fe && k && fe.width > 0 && fe.height > 0 && (Me = Math.max(Me, (fe.bottom - k.top) * x + Ql)), [l, m].forEach((v) => {
      var X;
      if (!v || !k) return;
      const V = getComputedStyle(v);
      if (V.display === "none" || V.visibility === "hidden" || Number(V.opacity) <= 0) return;
      const M = (X = v.getBoundingClientRect) == null ? void 0 : X.call(v);
      !M || M.width <= 0 || M.height <= 0 || (Me = Math.max(Me, (k.bottom - M.top) * x + Ql));
    }), o && k) {
      const v = getComputedStyle(o);
      v.display !== "none" && v.visibility !== "hidden" && Number(v.opacity) > 0 && (Me = Math.max(Me, (XM + Ql) * x));
    }
    return C = Math.max(C, Me), J = Math.max(C + 1, Math.min(J, r.height - Me)), {
      x: N,
      y: C,
      w: Math.max(1, Se - N),
      h: Math.max(1, J - C)
    };
  }
  function S(k = H()) {
    if (!k || !r) return null;
    const L = u.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Tb(L, k, Jc * di(L, k));
  }
  function K(k = H()) {
    const L = S(k);
    return L ? { x: L.x, y: L.y, w: L.w, h: L.h } : null;
  }
  function de() {
    return c && !!H();
  }
  function q(k, L) {
    const x = H();
    if (!x || x.locked === !0) return !1;
    const N = Number(L) > 0, C = mh(x, L);
    if (!C) return !1;
    if (N) {
      const B = Jc * di(
        u.frameSafeRect || { w: r.width, h: r.height },
        C
      ), J = Nu({ width: r.width, height: r.height }, B);
      if (J.halfW < r.width * 0.5 - 1e-6 || J.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return x.hFOV_deg = C.hFOV_deg, x.vFOV_deg = C.vFOV_deg, ue(), pe(), !0;
  }
  function ue() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, $(), T(), pe());
    }, 180);
  }
  function Pe() {
    return t && n.mode === "frame" && D();
  }
  function ne() {
    const k = H(), L = S(k);
    return k && L ? lm(k, L, { width: r.width, height: r.height }) : null;
  }
  function O() {
    var k;
    return ((k = U()) == null ? void 0 : k.radius) || Jn;
  }
  function Z(k) {
    const { position: L, yaw_deg: x, pitch_deg: N, roll_deg: C, hFOV_deg: B } = k.shot;
    return { position: L, yaw_deg: x, pitch_deg: N, roll_deg: C, hFOV_deg: B, distance: O() };
  }
  function ae(k, L) {
    const { rect: x } = k;
    return i.pickSurface(re(k.shot), L.x - x.x, L.y - x.y, x.w, x.h);
  }
  function ye(k, L, x) {
    return Cc(L, ae(k, x), null, ce());
  }
  function ve(k) {
    return JSON.stringify([Z(k), k.rect]);
  }
  function I(k) {
    const L = H();
    L.position = [...k.position], L.yaw_deg = k.yaw_deg, L.pitch_deg = k.pitch_deg;
  }
  function se(k, L) {
    const x = H();
    !x || d || x.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: x,
      last: k,
      start: { yaw_deg: Number(x.yaw_deg || 0), pitch_deg: Number(x.pitch_deg || 0) },
      changed: !1
    }, ie(k), r.setPointerCapture(L));
  }
  function g(k, L, x) {
    const N = ne();
    if (!N || d) return;
    const C = Z(N);
    n.interaction = k === "orbit" ? { kind: "frame_orbit", last: L, pivot: ye(N, C, L), changed: !1 } : { kind: "frame_pan", last: L, depth: qh(C, ce()), changed: !1 }, ie(L), r.setPointerCapture(x);
  }
  function _(k, L) {
    const x = ne();
    if (!x) return;
    const N = Z(x), C = L.x - k.last.x, B = L.y - k.last.y;
    I(k.kind === "frame_pan" ? Zh(N, C, B, x.rect.w, x.rect.h, k.depth) : Jh(N, C, B, r.height, k.pivot)), k.changed = k.changed || C !== 0 || B !== 0, k.last = L, te({ localOnly: !0, cause: "frame_view" });
  }
  function R(k, L) {
    const x = ne();
    if (!x || d) return;
    const N = Z(x), C = performance.now(), B = { x: k.x, y: k.y, time: C, key: i.contentRevision(), view: ve(x) };
    if (!Xh(me, B)) {
      const J = ae(x, k);
      me = { ...B, cost: performance.now() - C, hit: J };
    }
    I(Qh(N, Cc(N, me.hit, null, ce()), L, ce())), me.view = ve(ne() ?? x), me.wheelTime = C, ue(), pe(), te({ localOnly: !0, cause: "frame_view" });
  }
  function Y() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, $(), T(), pe(), !0) : !1;
  }
  function w() {
    const k = n.interaction;
    if (!(k != null && k.shot) || !k.start || k.kind !== "pan_frame" && k.kind !== "roll_frame") return !1;
    const L = k.kind === "roll_frame";
    return k.kind === "pan_frame" ? (k.shot.yaw_deg = k.start.yaw_deg, k.shot.pitch_deg = k.start.pitch_deg) : k.shot.roll_deg = k.start.roll_deg, L && P(), n.interaction = null, W(), G(), pe(), ie(n.pointerPos), te({ localOnly: !0 }), !0;
  }
  return {
    connect(k) {
      ({
        applySpaceMode: y,
        cancelViewTransition: b,
        commitAndRefreshNode: T,
        contentSphere: U,
        getActiveCutoutShot: H,
        hasSpaceContent: D,
        hideTooltip: P,
        invalidateLivePaintPreviewCaches: W,
        pushHistory: $,
        requestDraw: te,
        shotViewCamera: re,
        spaceScale: ce,
        spaceViewState: E,
        syncViewToggleState: G,
        updateCursor: ie,
        updateSidePanel: pe
      } = k);
    },
    leaveFrameView: ge,
    measureFrameSafeRect: ee,
    getFrameViewLayout: S,
    getFrameViewRect: K,
    supportsFramePainting: de,
    zoomFrameViewAt: q,
    isFreeFrameView: Pe,
    frameContext: ne,
    frameViewDistance: O,
    frameSpaceView: Z,
    frameTarget: ye,
    startPanFrame: se,
    startFrameDrag: g,
    dragFrame: _,
    zoomFrameAt: R,
    flushFrameWheelCommit: Y,
    cancelFrameCameraGesture: w
  };
}
function SN(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let a, s, l, d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te = 0;
  function re() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function ce() {
    return String(re() || "") === "lasso_fill";
  }
  function E() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function G(I, se) {
    const g = Number(se || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, g / 2048)
    };
  }
  function ie(I) {
    const se = String(I || "").trim();
    return se === "eraser" ? xr : Sn[se] ? se : t.activeBrushPresetId || xr;
  }
  function pe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (E() || $());
  }
  function me() {
    var I;
    return pe() && ((I = t.pointerPos) == null ? void 0 : I.inside) === !0;
  }
  function ge(I, se = !0) {
    const g = Number((I == null ? void 0 : I.x) || 0), _ = Number((I == null ? void 0 : I.y) || 0), R = se !== !1, Y = t.pointerPos || { x: 0, y: 0, inside: !1 }, w = Y.inside !== R || Math.abs(Y.x - g) > 0.01 || Math.abs(Y.y - _) > 0.01;
    return t.pointerPos = { x: g, y: _, inside: R }, w;
  }
  function ee() {
    var N, C;
    if (!me()) return null;
    const I = t.primaryTool === "mask" ? "mask" : "paint", se = I === "mask" ? t.maskTool : t.paintTool, g = ie(se), _ = Sn[g] || Sn[xr], R = Number(t.brushSizes[g] ?? 10), Y = Math.max(1, R) * Math.max(0.1, Number(_.sizeScale ?? 1)), w = Math.max(3, Y * 0.5), k = I === "mask" ? se === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : se === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : In(t.paintColor), L = I === "mask" ? se === "lasso_fill" ? 0.18 : 0.2 : se === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(k.a ?? 1) * 0.3), 0.16, 0.52), x = I === "mask" ? 0.95 : se === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(k.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: I,
      toolKind: se,
      preset: _,
      radius: w,
      fillStyle: sr(k, L),
      strokeStyle: sr(k, x),
      x: Number(((N = t.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((C = t.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: w,
      hotspotY: w
    };
  }
  function S() {
    var B, J, oe;
    const I = ee();
    if (!r) return;
    if (!I) {
      r.style.display = "none";
      return;
    }
    let se = I.radius * 2, g = I.radius * 2, _ = "999px", R = 0, Y = I.fillStyle, w = "1px solid rgba(222, 222, 222, 0.72)", k = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const L = "rgba(222, 222, 222, 0.72)", x = "rgba(52, 52, 52, 0.72)";
    let N = Number(I.hotspotX ?? se * 0.5), C = Number(I.hotspotY ?? g * 0.5);
    if (I.toolKind === "lasso_fill")
      se = Gs, g = Gs, _ = "0", w = "0", k = "none", N = QM, C = eP, Y = sP(I.fillStyle, x, L);
    else if (I.layerKind === "mask")
      Y = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (I.toolKind === "marker") {
      const z = Math.max(1, Number(((B = I.preset) == null ? void 0 : B.aspect) ?? 1));
      se = Math.max(10, I.radius * 2 * z), g = Math.max(6, I.radius * 2), _ = `${Math.min(6, g * 0.42)}px`, R = Number(((oe = (J = I.preset) == null ? void 0 : J.angle) == null ? void 0 : oe.value) || 0) * pi;
    } else I.toolKind === "brush" ? Y = `radial-gradient(circle at 50% 50%, ${I.strokeStyle} 0%, ${I.fillStyle} 45%, rgba(0,0,0,0) 100%)` : I.toolKind === "eraser" && (Y = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(se)}px`, r.style.height = `${Math.round(g)}px`, r.style.borderRadius = _, r.style.border = w, r.style.boxShadow = k, r.style.background = Y, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(I.x - N)}px, ${Math.round(I.y - C)}px) rotate(${R}deg)`;
  }
  function K() {
    var Me;
    if (!n || !i) return;
    const I = t.primaryTool === "mask" ? "mask" : "paint", se = I === "mask" ? t.maskTool : t.paintTool;
    if (se === "lasso_fill") return;
    const g = ie(se), _ = Sn[g] || Sn[xr], R = Number(t.brushSizes[g] ?? 10), Y = Math.max(1, R) * Math.max(0.1, Number(_.sizeScale ?? 1)), w = Math.max(6, Y * 0.5), k = se === "eraser", L = I === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : k ? { r: 1, g: 1, b: 1, a: 0.22 } : In(t.paintColor), x = I === "mask" ? sr(L, 0.22) : k ? "rgba(255,255,255,0.14)" : sr(L, Ee(Math.max(0.18, Number(L.a ?? 1) * 0.34), 0.18, 0.56)), N = I === "mask" ? sr(L, 0.96) : k ? "rgba(255,255,255,0.72)" : sr(L, Ee(Math.max(0.56, Number(L.a ?? 1) * 0.96), 0.56, 1));
    let C = w * 2, B = w * 2, J = "999px", oe = 0, z = x;
    const le = "rgba(222, 222, 222, 0.72)", Se = "rgba(52, 52, 52, 0.72)";
    if (I === "mask")
      z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (se === "marker") {
      const fe = Math.max(1, Number((_ == null ? void 0 : _.aspect) ?? 1));
      C = Math.max(16, w * 2 * fe), B = Math.max(10, w * 2), J = `${Math.min(8, B * 0.42)}px`, oe = Number(((Me = _ == null ? void 0 : _.angle) == null ? void 0 : Me.value) || 0) * pi;
    } else se === "brush" ? z = `radial-gradient(circle at 50% 50%, ${N} 0%, ${x} 48%, rgba(0,0,0,0) 100%)` : se === "lasso_fill" ? (C = Math.max(18, w * 1.8), B = C, z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : k && (z = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(C)}px`, i.style.height = `${Math.round(B)}px`, i.style.borderRadius = J, i.style.background = z, i.style.border = `1px solid ${le}`, i.style.boxShadow = `0 0 0 1px ${Se}`, i.style.transform = `rotate(${oe}deg)`, te && (clearTimeout(te), te = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function de() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), te && clearTimeout(te), te = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), te = 0;
    }, 180));
  }
  function q(I, se, g, _) {
    const R = ie(se), Y = Sn[R] || Sn[xr], w = t.brushSizes[R] ?? 10, k = Math.max(1, w) * Math.max(0.1, Y.sizeScale ?? 1), L = G(_, k), x = g.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), N = {
      id: Ti(I),
      actionGroupId: Ti("ag"),
      targetSpace: _ && typeof _ == "object" ? { ..._, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: se,
      size: k,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: L.radiusModel,
      radiusValue: L.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: x.map((C) => ({ ...C })),
        points: x.map((C) => ({ ...C }))
      }
    };
    return Gf(N, Y), t.mode, Number(Y.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function ue(I, se, g, _) {
    const R = g.map((L) => ({
      ...L,
      t: Number((L == null ? void 0 : L.t) || 0),
      widthScale: Number.isFinite(Number(L == null ? void 0 : L.widthScale)) ? Math.max(0, Number(L.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(L == null ? void 0 : L.pressureLike)) ? Math.max(0, Number(L.pressureLike)) : 1
    })), Y = ie(se), w = Sn[Y] || Sn[xr], k = {
      id: Ti(I),
      actionGroupId: Ti("ag"),
      targetSpace: _ && typeof _ == "object" ? { ..._, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: se,
      size: 10,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: R.map((L) => ({ ...L }))
      }
    };
    return Gf(k, w), t.mode, Number(w.aspect ?? 1), Number(k.aspect ?? 1), String(k.stampKind || ""), { ...k.targetSpace }, k;
  }
  function Pe(I) {
    const se = o.painting || (o.painting = Qi(null)), g = se[I] || (se[I] = { strokes: [] });
    return Array.isArray(g.strokes) || (g.strokes = []), g.strokes;
  }
  function ne(I, se, g = performance.now()) {
    let _;
    if (t.mode === "frame") {
      const x = f();
      if (!x || (_ = W(se, x, g), !_)) return !1;
    } else
      _ = P(se, g);
    if (!_) return !1;
    const R = I.stroke.geometry.rawPoints || I.stroke.geometry.points, Y = I.stroke.geometry.points, w = R[R.length - 1];
    if (w) {
      const x = Math.abs(Number(_.u ?? _.x ?? 0) - Number(w.u ?? w.x ?? 0)), N = Math.abs(Number(_.v ?? _.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (x < 15e-4 && N < 15e-4) return !1;
    }
    const k = {
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    R.push({ ...k }), Y.push({ ...k });
    const L = p(I);
    if (L) {
      const x = t.paintEngine.ensureTarget(L);
      t.paintEngine.appendStrokePoint(x, Number(k.u ?? 0), Number(k.v ?? 0), I.stroke);
    }
    return !0;
  }
  function O(I, se, g = performance.now()) {
    var w, k;
    let _;
    if (t.mode === "frame") {
      const L = f();
      if (!L) return !1;
      _ = W(se, L, g);
    } else
      _ = P(se, g);
    const R = (k = (w = I == null ? void 0 : I.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points;
    if (!_ || !Array.isArray(R)) return !1;
    const Y = R[R.length - 1];
    if (Y) {
      const L = Math.abs(Number(_.u ?? _.x ?? 0) - Number(Y.u ?? Y.x ?? 0)), x = Math.abs(Number(_.v ?? _.y ?? 0) - Number(Y.v ?? Y.y ?? 0));
      if (L < 15e-4 && x < 15e-4) return !1;
    }
    return R.push({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Z(I) {
    var fe, be, _e, h, j;
    const se = (I == null ? void 0 : I.stroke) || null;
    if (!se || (I == null ? void 0 : I.layerKind) !== "paint" || String((se == null ? void 0 : se.toolKind) || "") !== "eraser") return !1;
    D();
    const g = p(), _ = d(g.width, g.height);
    if (!H(_, se, { w: g.width, h: g.height })) return !1;
    const R = ((be = (fe = _.ctx) == null ? void 0 : fe.getImageData(0, 0, g.width, g.height)) == null ? void 0 : be.data) || null;
    if (!R) return !1;
    const Y = new Map(y().map((A) => [String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "").trim(), A ? { ...A } : null])), w = [], k = [], L = [...b().filter((A) => String((A == null ? void 0 : A.layerKind) || "paint") !== "paint")];
    let x = !1, N = m().reduce((A, v) => Math.max(A, Number((v == null ? void 0 : v.z_index) || 0)), -1) + 1;
    function C(A, v, V, M = 8) {
      let X = v, Q = V, we = -1, xe = -1;
      for (let F = 0; F < V; F += 1)
        for (let he = 0; he < v; he += 1)
          A[(F * v + he) * 4 + 3] <= M || (he < X && (X = he), F < Q && (Q = F), he > we && (we = he), F > xe && (xe = F));
      return we < X || xe < Q ? null : { minX: X, minY: Q, maxX: we, maxY: xe };
    }
    const B = C(R, g.width, g.height, 8);
    if (!B) return !1;
    function J(A, v) {
      return !A || !v ? !1 : !(A.maxX < v.minX || v.maxX < A.minX || A.maxY < v.minY || v.maxY < A.minY);
    }
    function oe(A, v) {
      const V = u((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "", "paint", v);
      if (!V) return null;
      const M = V.centerUv.u - V.halfW, X = V.centerUv.u + V.halfW, Q = V.centerUv.v - V.halfH, we = V.centerUv.v + V.halfH, xe = g.width, F = g.height;
      return {
        minX: Math.floor((M % 1 + 1) % 1 * xe),
        maxX: Math.ceil((X % 1 + 1) % 1 * xe),
        minY: Math.floor(Ee(Q, 0, 1) * F),
        maxY: Math.ceil(Ee(we, 0, 1) * F),
        wraps: X - M >= 1 || M < 0 || X > 1
      };
    }
    function z(A) {
      const v = (A == null ? void 0 : A.bbox) || null;
      if (!v) return null;
      const V = (A == null ? void 0 : A.transform) || {}, M = g.width, X = g.height, Q = Number(v.u0 || 0) + Number(V.du || 0), we = Number(v.u1 || 0) + Number(V.du || 0), xe = Number(v.v0 || 0) + Number(V.dv || 0), F = Number(v.v1 || 0) + Number(V.dv || 0);
      return {
        minX: Math.floor((Q % 1 + 1) % 1 * M),
        maxX: Math.ceil((we % 1 + 1) % 1 * M),
        minY: Math.floor(Ee(xe, 0, 1) * X),
        maxY: Math.ceil(Ee(F, 0, 1) * X),
        wraps: we - Q >= 1 || Q < 0 || we > 1
      };
    }
    function le(A) {
      return A ? A.wraps ? J(B, { minX: 0, maxX: A.maxX, minY: A.minY, maxY: A.maxY }) || J(B, { minX: A.minX, maxX: g.width - 1, minY: A.minY, maxY: A.maxY }) : J(B, A) : !0;
    }
    function Se(A) {
      if (!A) return { touched: !1, canvas: null };
      const v = d(g.width, g.height, { readback: !0 });
      v.ctx.drawImage(A, 0, 0);
      const V = v.ctx.getImageData(0, 0, g.width, g.height);
      v.ctx.save(), v.ctx.globalCompositeOperation = "destination-out", v.ctx.drawImage(_.canvas, 0, 0), v.ctx.restore();
      const M = v.ctx.getImageData(0, 0, g.width, g.height);
      for (let X = 0; X < g.width * g.height; X += 1) {
        if (R[X * 4 + 3] <= 8) continue;
        const we = V.data[X * 4 + 3], xe = M.data[X * 4 + 3];
        if (we > xe)
          return { touched: !0, canvas: v.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Me(A, v, V) {
      const M = Number(V == null ? void 0 : V.z_index), X = l(A, v, V).map((Q, we) => ({
        ...Q,
        z_index: Number.isFinite(M) ? M + we * 1e-3 : N + we * 1e-3
      }));
      return X.length && (N = Math.max(N, ...X.map((Q) => Number((Q == null ? void 0 : Q.z_index) || 0))) + 1), X;
    }
    for (const A of y()) {
      const v = String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "").trim();
      if (!v) continue;
      const V = T(v, "paint");
      if (!le(oe(A, V))) {
        k.push(A), w.push(...V);
        continue;
      }
      const M = ((h = (_e = t.paintEngine) == null ? void 0 : _e.getGroupTarget) == null ? void 0 : h.call(_e, v)) || null, X = ((j = M == null ? void 0 : M.committedPaint) == null ? void 0 : j.canvas) || null;
      if (!X) {
        k.push(A), w.push(...V);
        continue;
      }
      const Q = Se(X);
      if (!Q.touched || !Q.canvas) {
        k.push(A), w.push(...V);
        continue;
      }
      x = !0;
      const we = Me(Q.canvas, "paint", Y.get(v) || A || {});
      L.push(...we);
    }
    for (const A of b().filter((v) => String((v == null ? void 0 : v.layerKind) || "paint") === "paint")) {
      if (!le(z(A))) {
        L.push(A);
        continue;
      }
      const v = a(A, null);
      if (!v) {
        L.push(A);
        continue;
      }
      const V = Se(v);
      if (!V.touched || !V.canvas) {
        L.push(A);
        continue;
      }
      x = !0;
      const M = Me(V.canvas, "paint", A);
      L.push(...M);
    }
    return x ? (o.painting.paint.strokes = w, o.painting.groups = k.sort((A, v) => Number((A == null ? void 0 : A.z_index) || 0) - Number((v == null ? void 0 : v.z_index) || 0)), o.painting.raster_objects = L.sort((A, v) => Number((A == null ? void 0 : A.z_index) || 0) - Number((v == null ? void 0 : v.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function ae(I) {
    var w, k, L, x, N;
    if ((((k = (w = I.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.rawPoints) || ((x = (L = I.stroke) == null ? void 0 : L.geometry) == null ? void 0 : x.points) || []).length >= 1) {
      ve(I);
      const C = p(I);
      C && (String(((N = I.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(C) : t.paintEngine.commitActiveStroke(I.stroke, C)), I._hasCommittedSegments = !0;
    }
    const g = I.stroke, _ = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, R = q(I.layerKind, g.toolKind, [], _);
    R.actionGroupId = g.actionGroupId, I.stroke = R;
    const Y = p(I);
    Y && t.paintEngine.beginStroke(R, Y);
  }
  function ye(I) {
    var w, k;
    if ((((k = (w = I.stroke) == null ? void 0 : w.geometry) == null ? void 0 : k.points) || []).length >= 3) {
      ve(I);
      const L = p(I);
      L && t.paintEngine.commitActiveStroke(I.stroke, L), I._hasCommittedSegments = !0;
    }
    const g = I.stroke, _ = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, R = ue(I.layerKind, g.toolKind, [], _);
    R.actionGroupId = g.actionGroupId, I.stroke = R;
    const Y = p(I);
    Y && t.paintEngine.beginStroke(R, Y);
  }
  function ve(I) {
    var Y, w, k, L;
    const se = ((Y = I == null ? void 0 : I.stroke) == null ? void 0 : Y.geometry) || null;
    if (!se) return !1;
    const g = String(((w = I == null ? void 0 : I.stroke) == null ? void 0 : w.toolKind) || "pen");
    if (I.layerKind === "paint" && g === "eraser")
      return se.geometryKind !== "lasso_fill" && (se.processedPoints = U(se.rawPoints || se.points || [], I.stroke.targetSpace, !0)), Z(I);
    const _ = I.layerKind === "paint" && g !== "eraser";
    if (se.geometryKind === "lasso_fill")
      return (Array.isArray(se.points) ? se.points : []).length < 3 ? !1 : (_ && c((k = I.stroke) == null ? void 0 : k.actionGroupId), Pe(I.layerKind).push(I.stroke), !0);
    const R = se.rawPoints || se.points || [];
    return R.length < 1 ? !1 : (se.processedPoints = U(R, I.stroke.targetSpace, !0), _ && c((L = I.stroke) == null ? void 0 : L.actionGroupId), Pe(I.layerKind).push(I.stroke), !0);
  }
  return {
    connect(I) {
      ({
        buildRasterObjectEditCanvas: a,
        clearSelection: s,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: d,
        ensureGroupFrame: u,
        ensurePaintingGroupEntry: c,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: p,
        getDisplayListObjects: m,
        getPaintingGroupList: y,
        getRasterObjectList: b,
        getStrokeGroupStrokes: T,
        processFreehandPoints: U,
        rasterizeStrokeToSurface: H,
        rebuildPaintEngineIfNeeded: D,
        screenPosToErpPoint: P,
        screenPosToFrameAsErpPoint: W,
        supportsFramePainting: $
      } = I);
    },
    isActiveLassoTool: ce,
    supportsErpPainting: E,
    getBrushPresetIdForTool: ie,
    isPaintCursorEnabled: pe,
    isActivePaintCursorVisible: me,
    setPointerPos: ge,
    syncPaintCursorElement: S,
    showPaintSizePreview: K,
    hidePaintSizePreview: de,
    buildFreehandStrokeRecord: q,
    buildLassoFillStrokeRecord: ue,
    getPaintingLayerList: Pe,
    appendPaintPoint: ne,
    appendLassoPoint: O,
    _segmentFrameStroke: ae,
    _segmentFrameLassoFill: ye,
    commitPaintInteraction: ve
  };
}
function wN(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, a, s, l, d, u, c, f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E;
  function G(S) {
    var de;
    if (n && t.mode === "frame") {
      const q = a(), ue = l(q);
      if (!q || !ue || !(Number((S == null ? void 0 : S.x) || 0) >= Number(ue.x || 0) && Number((S == null ? void 0 : S.x) || 0) <= Number(ue.x || 0) + Number(ue.w || 0) && Number((S == null ? void 0 : S.y) || 0) >= Number(ue.y || 0) && Number((S == null ? void 0 : S.y) || 0) <= Number(ue.y || 0) + Number(ue.h || 0))) return null;
      const ne = te(S, q, performance.now()), O = ne ? o(ne) : null;
      if (O)
        for (const ae of s()) {
          if (!H(ae)) continue;
          const ye = E(ae, O);
          if (ye && Number(ye.x) >= 0 && Number(ye.x) <= 1 && Number(ye.y) >= 0 && Number(ye.y) <= 1) {
            const ve = $(ae);
            if (ve != null && ve.visible) return { item: ae, geom: ve };
          }
        }
      const Z = d(!1).slice().sort((ae, ye) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0));
      for (const ae of Z) {
        if (ae.type === "strokeGroup") {
          const I = f(W("paint", ae.actionGroupId || ae.id || ""));
          if (!I) continue;
          const se = $(I);
          if (!(se != null && se.visible)) continue;
          const g = Array.isArray(se.strokePaths) ? se.strokePaths : [];
          for (const _ of g) {
            const R = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
            if (!R.length) continue;
            if (_.closed && R.length >= 3 && Lr(S, R)) return { item: I, geom: se };
            const Y = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
            for (let w = 0; w < R.length - 1; w += 1)
              if (nc(S, R[w], R[w + 1]) <= Y * Y) return { item: I, geom: se };
            if (R.length === 1 && To(S, R[0]) <= Y * Y) return { item: I, geom: se };
          }
          continue;
        }
        if (ae.type === "rasterObject") {
          const I = u(P(((de = ae.item) == null ? void 0 : de.id) || ae.id || ""));
          if (!I) continue;
          const se = $(I);
          if (p(I, se, S, ne)) return { item: I, geom: se };
          continue;
        }
        const ye = ae.item;
        if (!ye || !H(ye) || !O) continue;
        const ve = E(ye, O);
        if (ve && Number(ve.x) >= 0 && Number(ve.x) <= 1 && Number(ve.y) >= 0 && Number(ve.y) <= 1) {
          const I = $(ye);
          if (I != null && I.visible) return { item: ye, geom: I };
        }
      }
      return null;
    }
    const K = [
      ...d(!1).slice().sort((q, ue) => Number((ue == null ? void 0 : ue.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0)).map((q) => {
        var ue;
        return q.type === "strokeGroup" ? f(W("paint", q.actionGroupId || q.id || "")) : q.type === "rasterObject" ? u(P(((ue = q.item) == null ? void 0 : ue.id) || q.id || "")) : q.item;
      }).filter(Boolean),
      ...n ? s().filter((q) => U(q)) : []
    ];
    for (const q of K) {
      if (D(q)) {
        const Pe = $(q);
        if (!(Pe != null && Pe.visible)) continue;
        const ne = Array.isArray(Pe.strokePaths) ? Pe.strokePaths : [];
        for (const O of ne) {
          const Z = Array.isArray(O == null ? void 0 : O.points) ? O.points : [];
          if (!Z.length) continue;
          if (O.closed && Z.length >= 3 && Lr(S, Z)) return { item: q, geom: Pe };
          const ae = Math.max(8, Number((O == null ? void 0 : O.lineWidth) || 0) * 0.5 + 6);
          for (let ye = 0; ye < Z.length - 1; ye += 1)
            if (nc(S, Z[ye], Z[ye + 1]) <= ae * ae) return { item: q, geom: Pe };
          if (Z.length === 1 && To(S, Z[0]) <= ae * ae) return { item: q, geom: Pe };
        }
        continue;
      }
      if (T(q)) {
        const Pe = $(q);
        if (!(Pe != null && Pe.visible)) continue;
        if (p(q, Pe, S)) return { item: q, geom: Pe };
        continue;
      }
      const ue = $(q);
      if (ue.visible && Lr(S, ue.corners))
        return { item: q, geom: ue };
    }
    return null;
  }
  function ie(S, K, de = null) {
    if (!S || !S.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (H(de)) return $c(S, K);
    if (S.kind === "strokeGroup") {
      const q = S.corners.findIndex((Pe) => To(Pe, K) <= 121);
      if (q >= 0) {
        const Pe = S.corners[q], ne = Pe.x - S.center.x, O = Pe.y - S.center.y, Z = ne * O >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: Z };
      }
      const ue = Array.isArray(S.strokePaths) ? S.strokePaths : [];
      for (const Pe of ue) {
        const ne = Array.isArray(Pe == null ? void 0 : Pe.points) ? Pe.points : [];
        if (Pe.closed && ne.length >= 3 && Lr(K, ne)) return { kind: "move", cursor: "default" };
        const O = Math.max(8, Number((Pe == null ? void 0 : Pe.lineWidth) || 0) * 0.5 + 6);
        for (let Z = 0; Z < ne.length - 1; Z += 1)
          if (nc(K, ne[Z], ne[Z + 1]) <= O * O) return { kind: "move", cursor: "default" };
      }
      return Lr(K, S.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (S.kind === "rasterObject") {
      const q = S.corners.findIndex((ue) => To(ue, K) <= 121);
      if (q >= 0) {
        const ue = S.corners[q], Pe = ue.x - S.center.x, ne = ue.y - S.center.y, O = Pe * ne >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: O };
      }
      return Lr(K, S.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return U_(S, K, {
      edges: i === "cutout" || U(de),
      resize: !(U(de) && y()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function pe(S, K) {
    return {
      x0: Math.min(Number((S == null ? void 0 : S.x) || 0), Number((K == null ? void 0 : K.x) || 0)),
      y0: Math.min(Number((S == null ? void 0 : S.y) || 0), Number((K == null ? void 0 : K.y) || 0)),
      x1: Math.max(Number((S == null ? void 0 : S.x) || 0), Number((K == null ? void 0 : K.x) || 0)),
      y1: Math.max(Number((S == null ? void 0 : S.y) || 0), Number((K == null ? void 0 : K.y) || 0))
    };
  }
  function me(S, K) {
    return !!S && !!K && Number(K.x) >= Number(S.x0) && Number(K.x) <= Number(S.x1) && Number(K.y) >= Number(S.y0) && Number(K.y) <= Number(S.y1);
  }
  function ge(S, K) {
    if (!S || !(K != null && K.visible) || !Array.isArray(K.corners)) return !1;
    if (K.corners.some((ue) => me(S, ue))) return !0;
    const de = (Number(S.x0) + Number(S.x1)) * 0.5, q = (Number(S.y0) + Number(S.y1)) * 0.5;
    return !!Lr({ x: de, y: q }, K.corners);
  }
  function ee(S) {
    if (ce(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? re("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? re("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? re("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? re("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? re("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? re(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? re("grabbing") : re("default");
      return;
    }
    if (m()) {
      re("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        re(qM);
        return;
      }
      if (t.primaryTool !== "cursor") {
        re("default");
        return;
      }
      re("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      re("default");
      return;
    }
    if (t.gizmoAxis) {
      re("grab");
      return;
    }
    const K = c(), de = K ? $(K) : null, q = K ? b(K) : !1, ue = q ? { kind: "none", cursor: "default" } : ie(de, S, K);
    if (!q && ue.kind !== "none") {
      re(ue.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && G(S)) {
      re("default");
      return;
    }
    re(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(S) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: a,
        getCutoutSelectableItemsForHit: s,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: d,
        getRasterObjectItem: u,
        getSelected: c,
        getStrokeGroupItem: f,
        hitRasterObjectAt: p,
        isActivePaintCursorVisible: m,
        isErpCamera: y,
        isItemLocked: b,
        isRasterObjectItem: T,
        isShotItem: U,
        isStickerItem: H,
        isStrokeGroupItem: D,
        makeRasterObjectSelectionId: P,
        makeStrokeGroupSelectionId: W,
        objectGeom: $,
        screenPosToFrameAsErpPoint: te,
        setCanvasCursor: re,
        syncPaintCursorElement: ce,
        worldDirToFrameLocalPoint: E
      } = S);
    },
    hitObjectAt: G,
    handleHit: ie,
    rectFromPoints: pe,
    rectIntersectsGeom: ge,
    updateCursor: ee
  };
}
function xN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: a,
    state: s,
    studio: l,
    tooltip: d,
    tooltipEl: u,
    type: c,
    uiState: f
  } = e;
  let p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe = !1;
  function me() {
    return pe;
  }
  function ge() {
    if (!o) return;
    if (pe = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || P() && te()) {
      const O = ee();
      pe = O.visible, S(O);
      return;
    }
    const q = U(), ue = H();
    if (!q && ue.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Pe = D(), ne = aN({
      type: c,
      selected: q,
      selectedItems: ue,
      selectedKind: Pe,
      geom: ue.length > 1 ? T(ue) : ie(q),
      allLocked: p(ue),
      anyLocked: ue.some((O) => re(O)),
      selectedLocked: re(q),
      activeAspect: ce(q) && W() ? Xi : Pr(q),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: $,
      isStickerHidden: G,
      canRestoreSelectedToInitial: m,
      iconSet: ze,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    S(ne);
  }
  function ee() {
    const q = E() && !n.interaction ? b().space : null;
    if (!(q != null && q.gizmo)) return { visible: !1 };
    const ue = y(), Pe = q.stickers.find((ae) => ae.id === n.worldSelectedId), O = (Pe ? Wu(Pe) : [q.gizmo.transform.position]).map((ae) => ia(ue, ae, r.width, r.height)).filter(Boolean), Z = Nv(ue, q.gizmo.transform.position, q.gizmo.mode, r.width, r.height);
    return sN({ corners: O, gizmoBox: Z, gizmoMode: q.gizmo.mode, camera: P(), deletable: l && P() });
  }
  function S(q) {
    var Z, ae;
    if (!q.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ue = (ye, ve) => lN(q.anchor, ye, ve, r.width, r.height), Pe = Math.max(1, Number(((Z = n.menuSize) == null ? void 0 : Z.w) || 220)), ne = Math.max(1, Number(((ae = n.menuSize) == null ? void 0 : ae.h) || 40)), O = ue(Pe, ne);
    if (!O) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    f.selectionMenu = {
      visible: !0,
      left: O.left,
      top: O.top,
      items: q.items
    }, i.requestFrame(() => {
      if (!o || f.selectionMenu.visible !== !0) return;
      const ye = o.getBoundingClientRect(), ve = Math.round(Number((ye == null ? void 0 : ye.width) || 0)) || 220, I = Math.round(Number((ye == null ? void 0 : ye.height) || 0)) || 40;
      n.menuSize = { w: ve, h: I, measured: !0 };
      const se = ue(ve, I);
      se && (f.selectionMenu.left = se.left, f.selectionMenu.top = se.top);
    });
  }
  function K() {
    d.timer && (clearTimeout(d.timer), d.timer = 0), d.target = null, f.tooltip.visible = !1;
  }
  function de(q) {
    if (!u || !q || !q.isConnected) return;
    const ue = String(q.getAttribute("data-tip") || "").trim();
    if (!ue) return;
    f.tooltip.text = ue, f.tooltip.visible = !0;
    const Pe = q;
    i.requestFrame(() => {
      var w, k;
      if (d.target !== Pe || !u || !(Pe != null && Pe.isConnected)) return;
      const ne = a.getBoundingClientRect(), O = Pe.getBoundingClientRect(), Z = 8, ae = 12, ye = Math.round(Number(((w = u.getBoundingClientRect()) == null ? void 0 : w.width) || 0)) || 100, ve = Math.round(Number(((k = u.getBoundingClientRect()) == null ? void 0 : k.height) || 0)) || 24, I = !!Pe.closest(".pano-floating-left"), se = !!Pe.closest(".pano-frame-rail"), g = !!Pe.closest(".pano-paint-footer") || !!Pe.closest(".pano-paint-color-float");
      let _ = "", R = O.left - ne.left + O.width * 0.5 - ye * 0.5, Y = O.top - ne.top - ve - ae;
      if (Pe.closest(".pano-floating-top") && (Y = O.bottom - ne.top + ae), I)
        _ = "tool-rail", R = O.right - ne.left + 10, Y = O.top - ne.top + O.height * 0.5 - ve * 0.5, R = Ee(R, Z, Math.max(Z, ne.width - ye - Z)), Y = Ee(Y, Z, Math.max(Z, ne.height - ve - Z));
      else if (se)
        _ = "frame-rail", R = O.left - ne.left - ye - 10, Y = O.top - ne.top + O.height * 0.5 - ve * 0.5, R = Ee(R, Z, Math.max(Z, ne.width - ye - Z)), Y = Ee(Y, Z, Math.max(Z, ne.height - ve - Z));
      else if (g) {
        _ = "footer";
        const L = Pe.closest(".pano-paint-footer"), x = L ? L.getBoundingClientRect() : O;
        R = x.left - ne.left + x.width * 0.5 - ye * 0.5, Y = x.bottom - ne.top + 5, R = Ee(R, Z, Math.max(Z, ne.width - ye - Z)), Y = Math.max(Z, Y);
      }
      R = Ee(R, Z, Math.max(Z, ne.width - ye - Z)), Y = Math.max(Z, Y), f.tooltip.left = R, f.tooltip.top = Y, f.tooltip.variant = _, f.tooltip.visible = !0;
    });
  }
  return {
    connect(q) {
      ({
        areAllSelectedItemsLocked: p,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: y,
        editorViewInput: b,
        getMultiSelectionGeom: T,
        getSelected: U,
        getSelectedItems: H,
        getSelectedKind: D,
        isCameraSelected: P,
        isErpCamera: W,
        isExternalSticker: $,
        isFreeSpaceView: te,
        isItemLocked: re,
        isShotItem: ce,
        isSpaceView: E,
        isStickerHidden: G,
        objectGeom: ie
      } = q);
    },
    isWorldMenuShown: me,
    updateSelectionMenu: ge,
    hideTooltip: K,
    showTooltipFor: de
  };
}
function kN(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: a,
    readOnly: s,
    runtime: l,
    sceneV2: d,
    shotEditor: u,
    state: c,
    stateV2: f,
    timeline: p,
    type: m,
    viewController: y
  } = e;
  let b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae, ye, ve, I, se, g, _, R, Y, w, k, L, x, N, C, B, J, oe, z, le, Se, Me, fe, be, _e, h, j, A, v, V, M, X, Q, we, xe, F, he, Ae, Oe, Re, Ce, Ve, je, Ye, $e, He, $t, _t, kt, pt, Xt, Dn, gn, zt, We, Nn, Cn, er, io, pa, ha, oo, ao, so, ma, lo, co, uo, ga, ya, ba, yi, St, Kn, tr, fo, An, va, _a, Sa, Tr = null;
  function wa(Fe) {
    p.selection && (p.selection = null, ba());
    const Ie = He(Fe);
    Tr = Ie, gn(Ie, !0), ie(), y.state.inertia.active = !1, y.state.inertia.vx = 0, y.state.inertia.vy = 0;
    const ke = _e(), mt = be(), ot = ke || mt ? sS(fo(), Fe) : null;
    if (mt && ot) {
      Fe.preventDefault(), ot === "look" ? oo(Ie, Fe.pointerId) : ha(ot, Ie, Fe.pointerId);
      return;
    }
    if (ot === "look") {
      Fe.preventDefault();
      const Be = $t(Fe);
      n.interaction = { kind: "view", last: Be, lastTs: performance.now() }, y.startDrag(Be.x, Be.y, Fe.pointerId, performance.now()), St(Ie), t.setPointerCapture(Fe.pointerId);
      return;
    }
    if (ot) {
      Fe.preventDefault(), ao(ot, Ie, Fe.pointerId);
      return;
    }
    if ((ke || mt) && Fe.button !== 0) {
      Fe.preventDefault();
      return;
    }
    if (Fe.button === 1) {
      if (Fe.preventDefault(), n.mode === "frame") {
        const Be = ae();
        if (!Be || s || Be.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Be,
          last: Ie,
          start: {
            yaw_deg: Number(Be.yaw_deg || 0),
            pitch_deg: Number(Be.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Be = n.mode === "unwrap" ? Ie : $t(Fe);
        n.interaction = { kind: "view", last: Be, lastTs: performance.now() }, y.startDrag(Be.x, Be.y, Fe.pointerId, performance.now());
      }
      St(Ie), t.setPointerCapture(Fe.pointerId);
      return;
    }
    if (Fe.button !== 0) return;
    if (n.mode === "frame" && (Fe.altKey || Fe.shiftKey) && !s) {
      const Be = ae(), Ge = g(Be);
      if (!Be || Be.locked === !0 || !Ge) return;
      const Xe = Gm({
        frame: Ge,
        point: Ie,
        startRollDeg: Number(Be.roll_deg ?? Be.rot_deg ?? 0),
        shiftKey: Fe.shiftKey,
        altKey: Fe.altKey,
        allowAlt: !0
      });
      if (!Xe) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Be,
        center: Xe.center,
        lastAngle: Xe.lastAngle,
        accumulatedRad: Xe.accumulatedRad,
        rollGesture: Xe,
        start: { roll_deg: Number(Be.roll_deg ?? Be.rot_deg ?? 0) },
        changed: !1,
        altStarted: Xe.source === "alt",
        source: Xe.source
      }, t.setPointerCapture(Fe.pointerId), Fe.preventDefault(), ga(), $e({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      oo(Ie, Fe.pointerId), Fe.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && mo(Fe, Ie);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ma() || lo())) {
      if (!he()) return;
      so();
      const Be = n.primaryTool === "mask" ? "mask" : "paint", Ge = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Xe = n.mode === "frame" && lo() ? ae() : null, Ut = { kind: "ERP_GLOBAL" }, wt = Xe ? kt(Ie, Xe, performance.now()) : _t(Ie, performance.now());
      if (!wt) {
        St(Ie);
        return;
      }
      n.interaction = {
        kind: Ge === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Be,
        _livePreviewToken: Ti("live"),
        stroke: Ge === "lasso_fill" ? ce(Be, Ge, [wt], Ut) : re(Be, Ge, [wt], Ut)
      }, Me();
      const yr = ye(n.interaction);
      if (yr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, yr), n.interaction.kind === "paint_stroke") {
          const bi = n.paintEngine.ensureTarget(yr), vi = Number((wt == null ? void 0 : wt.u) ?? (wt == null ? void 0 : wt.x) ?? 0), _i = Number((wt == null ? void 0 : wt.v) ?? (wt == null ? void 0 : wt.y) ?? 0);
          n.paintEngine.appendStrokePoint(bi, vi, _i, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, yr);
      St(Ie), t.setPointerCapture(Fe.pointerId), $e();
      return;
    }
    const gt = C(), Ue = N(), Ze = gt.length > 1 ? R(gt) : Ue ? F(Ue) : null;
    if (n.primaryTool === "cursor" && (Fe.ctrlKey || Fe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ie, current: Ie }, St(Ie), t.setPointerCapture(Fe.pointerId), $e({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && E() && _e() && pa(Fe, Ie) || n.primaryTool === "cursor" && d && V() && ml(Fe, Ie)) return;
    if (gt.length > 1 && (Ze != null && Ze.visible)) {
      if ((gt.some((Ge) => h(Ge)) ? { kind: "none" } : z(Ze, Ie)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: gt.map((Ge) => Ge),
          offset: { x: Ie.x - Ze.center.x, y: Ie.y - Ze.center.y },
          startCenter: { x: Ze.center.x, y: Ze.center.y },
          stickerSnapshots: gt.filter((Ge) => M(Ge)).map((Ge) => ({
            id: String(Ge.id || ""),
            yaw_deg: Number(Re(Ge).yaw_deg || 0),
            pitch_deg: Number(Re(Ge).pitch_deg || 0),
            center: (() => {
              var Ut, wt;
              const Xe = F(Ge);
              return Xe != null && Xe.visible ? { x: Number(((Ut = Xe.center) == null ? void 0 : Ut.x) || 0), y: Number(((wt = Xe.center) == null ? void 0 : wt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })()
          })),
          strokeSnapshots: gt.filter((Ge) => X(Ge)).map((Ge) => ({
            id: String(Ge.actionGroupId || Ge.id || ""),
            layerKind: String(Ge.layerKind || "paint"),
            snapshot: on(J(Ge.actionGroupId, Ge.layerKind)),
            frameSnapshot: on(ue(Ge.actionGroupId, Ge.layerKind)),
            center: (() => {
              var Ut, wt;
              const Xe = F(Ge);
              return Xe != null && Xe.visible ? { x: Number(((Ut = Xe.center) == null ? void 0 : Ut.x) || 0), y: Number(((wt = Xe.center) == null ? void 0 : wt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })(),
            centerUv: B(Ge.actionGroupId, Ge.layerKind)
          })),
          rasterSnapshots: gt.filter((Ge) => j(Ge)).map((Ge) => ({
            id: Ae(Ge.rasterObjectId || Ge.id || ""),
            snapshot: on(k().find((Xe) => String((Xe == null ? void 0 : Xe.id) || "") === Ae(Ge.rasterObjectId || Ge.id || ""))),
            center: (() => {
              var Ut, wt;
              const Xe = F(Ge);
              return Xe != null && Xe.visible ? { x: Number(((Ut = Xe.center) == null ? void 0 : Ut.x) || 0), y: Number(((wt = Xe.center) == null ? void 0 : wt.y) || 0) } : { x: Ie.x, y: Ie.y };
            })(),
            centerUv: w(Ge)
          }))
        }, St(Ie), t.setPointerCapture(Fe.pointerId);
        return;
      }
    } else if (Ue && (Ze != null && Ze.visible)) {
      const Be = h(Ue) ? { kind: "none" } : z(Ze, Ie, Ue);
      if (Be.kind === "scale") {
        n.interaction = X(Ue) ? {
          kind: "scale_stroke_group",
          item: Ue,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ie.x - Ze.center.x, Ie.y - Ze.center.y)),
          snapshot: on(J(Ue.actionGroupId, Ue.layerKind)),
          frameSnapshot: on(ue(Ue.actionGroupId, Ue.layerKind)),
          cursor: Be.cursor
        } : j(Ue) ? {
          kind: "scale_raster_object",
          item: Ue,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ie.x - Ze.center.x, Ie.y - Ze.center.y)),
          snapshot: on(k().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === Ae(Ue.rasterObjectId || Ue.id || ""))),
          cursor: Be.cursor
        } : {
          kind: "scale",
          item: Ue,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ie.x - Ze.center.x, Ie.y - Ze.center.y)),
          startHFOV: Number(Re(Ue).hFOV_deg || 20),
          startVFOV: Number(Re(Ue).vFOV_deg || 20),
          cursor: Be.cursor
        }, St(Ie), t.setPointerCapture(Fe.pointerId);
        return;
      }
      if (Be.kind === "scale_x" || Be.kind === "scale_y") {
        n.interaction = {
          kind: Be.kind,
          item: Ue,
          center: Ze.center,
          startDist: Math.max(1, Math.hypot(Ie.x - Ze.center.x, Ie.y - Ze.center.y)),
          startHFOV: Number(Re(Ue).hFOV_deg || 20),
          startVFOV: Number(Re(Ue).vFOV_deg || 20),
          cursor: Be.cursor,
          edge: Be.edge
        }, St(Ie), t.setPointerCapture(Fe.pointerId);
        return;
      }
      if (Be.kind === "rotate") {
        n.interaction = X(Ue) ? {
          kind: "rotate_stroke_group",
          item: Ue,
          center: Ze.center,
          startAng: Math.atan2(Ie.y - Ze.center.y, Ie.x - Ze.center.x),
          snapshot: on(J(Ue.actionGroupId, Ue.layerKind)),
          frameSnapshot: on(ue(Ue.actionGroupId, Ue.layerKind))
        } : {
          kind: "rotate",
          item: Ue,
          center: Ze.center,
          startRot: Number(Re(Ue).rot_deg || Re(Ue).roll_deg || 0),
          startAng: Math.atan2(Ie.y - Ze.center.y, Ie.x - Ze.center.x)
        }, St(Ie), t.setPointerCapture(Fe.pointerId);
        return;
      }
      if (Be.kind === "move") {
        if (X(Ue)) {
          const Ge = n.mode === "frame" ? (() => {
            const Xe = ae();
            return Xe ? kt(Ie, Xe, performance.now()) : null;
          })() : _t(Ie, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Ue,
            startUv: Ge,
            snapshot: on(J(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: on(ue(Ue.actionGroupId, Ue.layerKind))
          }, St(Ie), t.setPointerCapture(Fe.pointerId);
          return;
        }
        if (j(Ue)) {
          const Ge = n.mode === "frame" ? (() => {
            const Xe = ae();
            return Xe ? kt(Ie, Xe, performance.now()) : null;
          })() : _t(Ie, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Ue,
            startUv: Ge,
            snapshot: on(k().find((Xe) => String((Xe == null ? void 0 : Xe.id) || "") === Ae(Ue.rasterObjectId || Ue.id || "")))
          }, St(Ie), t.setPointerCapture(Fe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Ue,
          offset: { x: Ie.x - Ze.center.x, y: Ie.y - Ze.center.y }
        }, St(Ie), t.setPointerCapture(Fe.pointerId);
        return;
      }
    }
    const Qe = Se(Ie);
    if (Qe) {
      const Be = n.selectedId !== Qe.item.id;
      if (Be && n.selectedId && (Ce(), ee()), zt(Qe.item), u && Be && (n.cutoutAspectOpen = !1), Be && tr(), Kn(), $e(), h(Qe.item)) {
        St(Ie);
        return;
      }
      n.interaction = {
        kind: X(Qe.item) ? "move_stroke_group" : j(Qe.item) ? "move_raster_object" : "move",
        item: Qe.item,
        offset: { x: Ie.x - Qe.geom.center.x, y: Ie.y - Qe.geom.center.y },
        startUv: X(Qe.item) || j(Qe.item) ? n.mode === "frame" ? (() => {
          const Ge = ae();
          return Ge ? kt(Ie, Ge, performance.now()) : null;
        })() : _t(Ie, performance.now()) : null,
        snapshot: X(Qe.item) ? on(J(Qe.item.actionGroupId, Qe.item.layerKind)) : j(Qe.item) ? on(k().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === Ae(Qe.item.rasterObjectId || Qe.item.id || ""))) : null,
        frameSnapshot: X(Qe.item) ? on(ue(Qe.item.actionGroupId, Qe.item.layerKind)) : null
      }, St(Ie), t.setPointerCapture(Fe.pointerId);
      return;
    }
    const Bn = !!n.selectedId;
    Bn && (Ce(), ee()), pe(), Bn && tr(), Kn(), $e(), n.mode === "pano" && mo(Fe, Ie);
  }
  function gr(Fe, Ie) {
    return i.gizmoPointer(Fe, S(), Ie.x, Ie.y, t.width, t.height);
  }
  function ml(Fe, Ie) {
    var Ze;
    const ke = (Ze = q().space) == null ? void 0 : Ze.gizmo;
    if (ke && gr("hover", Ie) !== null && gr("down", Ie))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: fi(Dn(), n.frame),
        changed: !1
      }, t.setPointerCapture(Fe.pointerId), St(Ie), !0;
    const mt = C(), ot = N(), gt = mt.length > 1 ? mt.some((Qe) => h(Qe)) ? "none" : z(R(mt), Ie).kind : ot && !h(ot) ? z(F(ot), Ie, ot).kind : "none";
    if (gt !== "none" && gt !== "move") return !1;
    const Ue = i.pickSticker(S(), Ie.x, Ie.y, t.width, t.height);
    return c.stickers.some((Qe) => Qe.id === Ue && Qe.placement === "world") ? (n.worldSelectedId !== Ue && (n.selectedId && (Ce(), ee()), Xt(Ue), tr(), Kn(), uo(), $e()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Fe.pointerId), !0) : !1;
  }
  function po(Fe) {
    var mt;
    const ke = !!(n.worldSelectedId || fe()) && n.primaryTool === "cursor" && V() && !!((mt = q().space) != null && mt.gizmo) ? gr("hover", Fe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, $e({ localOnly: !0, reason: ft.VIEW }));
  }
  function xa(Fe, Ie) {
    const ke = gr("move", Ie);
    if (ke && Fe.camera) {
      for (const [ot, gt] of Object.entries(cf(Fe.mode, Fe.base, Fe.start, ke))) cn(c.camera, ot, n.frame, gt);
      co(), Fe.changed = !0, r.request("sidePanel"), $e({ localOnly: !0 });
      return;
    }
    const mt = c.stickers.find((ot) => ot.id === Fe.id);
    !ke || !mt || (J1(mt, n.frame, cf(Fe.mode, Fe.base, Fe.start, ke)), Fe.changed = !0, Q(), r.request("sidePanel"), $e({ localOnly: !0 }));
  }
  function ho(Fe) {
    n.interaction = null, n.gizmoAxis = null, Fe.kind === "world_gizmo" && (gr("up", n.pointerPos), l.backgroundDirty = !0, Fe.changed && (Ce(), me(), tr())), St(n.pointerPos), $e();
  }
  function mo(Fe, Ie) {
    if (_e()) {
      const mt = fo().emptyLeft;
      mt && ao(mt, Ie, Fe.pointerId);
      return;
    }
    const ke = $t(Fe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, y.startDrag(ke.x, ke.y, Fe.pointerId, performance.now()), St(Ie), t.setPointerCapture(Fe.pointerId);
  }
  function ka(Fe, Ie) {
    if (!f || !Oe.playing || (Oe.stop(), Fe.kind === "frame_pan")) return;
    if (Fe.kind === "frame_orbit") {
      const ot = Pe();
      ot && (Fe.pivot = Z(ot, O(ot), Ie));
      return;
    }
    if (Fe.kind === "world_gizmo") {
      const ot = c.stickers.find((gt) => gt.id === Fe.id);
      Fe.camera ? Fe.base = K() : ot && (Fe.base = fi(ot, n.frame));
      return;
    }
    if (Fe.kind === "move_multi") {
      const ot = R(Fe.items);
      if (!(ot != null && ot.visible)) return;
      Fe.offset = { x: Ie.x - ot.center.x, y: Ie.y - ot.center.y }, Fe.startCenter = { x: ot.center.x, y: ot.center.y };
      for (const gt of Fe.stickerSnapshots) {
        const Ue = Fe.items.find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === gt.id), Ze = Ue ? F(Ue) : null;
        Ze != null && Ze.visible && (gt.yaw_deg = Number(Re(Ue).yaw_deg || 0), gt.pitch_deg = Number(Re(Ue).pitch_deg || 0), gt.center = { x: Ze.center.x, y: Ze.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Fe.kind)) return;
    const ke = F(Fe.item);
    if (!(ke != null && ke.visible)) return;
    const mt = Re(Fe.item);
    if (Fe.kind === "move") {
      Fe.offset = { x: Ie.x - ke.center.x, y: Ie.y - ke.center.y };
      return;
    }
    if (Fe.center = ke.center, Fe.kind === "rotate") {
      Fe.startRot = Number(mt.rot_deg || mt.roll_deg || 0), Fe.startAng = Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x);
      return;
    }
    Fe.startDist = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)), Fe.startHFOV = Number(mt.hFOV_deg || 20), Fe.startVFOV = Number(mt.vFOV_deg || 20);
  }
  function Ma(Fe) {
    var mt, ot, gt, Ue, Ze, Qe, Bn, Be, Ge, Xe, Ut, wt, yr, bi, vi, _i, Na, yo, Ca, Aa, Ia, bo;
    const Ie = He(Fe);
    if (gn(Ie, !0), !n.interaction) {
      po(Ie), St(Ie);
      return;
    }
    St(Ie);
    const ke = n.interaction;
    if (Tr && (Ie.x !== Tr.x || Ie.y !== Tr.y)) {
      const at = Tr;
      Tr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || ka(ke, at);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        xa(ke, Ie);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const at = typeof Fe.getCoalescedEvents == "function" ? Fe.getCoalescedEvents() : [Fe];
        let lt = !1;
        at.forEach((dt) => {
          const ht = He(dt);
          if (n.mode === "frame") {
            const nn = ae(), Kt = nn ? g(nn) : null;
            if (Kt) {
              const Jt = (ht.x - Kt.x) / Math.max(1, Kt.w), Ct = (ht.y - Kt.y) / Math.max(1, Kt.h);
              if (!(Jt >= 0 && Jt <= 1 && Ct >= 0 && Ct <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, T(ke));
            }
          }
          H(ke, ht, performance.now()) && (lt = !0);
        }), lt && $e({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const at = typeof Fe.getCoalescedEvents == "function" ? Fe.getCoalescedEvents() : [Fe];
        let lt = !1;
        if (at.forEach((dt) => {
          const ht = He(dt);
          if (n.mode === "frame") {
            const nn = ae(), Kt = nn ? g(nn) : null;
            if (Kt) {
              const Jt = (ht.x - Kt.x) / Math.max(1, Kt.w), Ct = (ht.y - Kt.y) / Math.max(1, Kt.h);
              if (!(Jt >= 0 && Jt <= 1 && Ct >= 0 && Ct <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, b(ke));
            }
          }
          U(ke, ht, performance.now()) && (lt = !0);
        }), lt) {
          const dt = ye(ke);
          dt && n.paintEngine.updateActiveStroke(ke.stroke, dt), $e({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const at = performance.now(), lt = n.mode === "unwrap" ? Ie : $t(Fe);
        y.moveDrag(lt.x, lt.y, n.mode === "unwrap" ? "unwrap" : "pano", at), ke.lastTs = at, ke.last = lt, $e({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        de(ke, Ie);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const at = er();
        Nn(ke.kind === "space_pan" ? Zh(at, Ie.x - ke.last.x, Ie.y - ke.last.y, t.width, t.height, ke.depth) : Jh(at, Ie.x - ke.last.x, Ie.y - ke.last.y, t.height, ke.pivot)), ke.last = Ie;
        return;
      }
      if (ke.kind === "pan_frame") {
        const at = se(ke.shot);
        if (!at || !ke.shot) return;
        const lt = Ie.x - ke.last.x, dt = Ie.y - ke.last.y, ht = Km(ke.shot, {
          dx: lt,
          dy: dt,
          focalPx: at.focalPx,
          invertX: ((mt = c.ui_settings) == null ? void 0 : mt.invert_view_x) === !0,
          invertY: ((ot = c.ui_settings) == null ? void 0 : ot.invert_view_y) === !0
        });
        ke.shot.yaw_deg = ht.yaw_deg, ke.shot.pitch_deg = ht.pitch_deg, ke.changed = ke.changed || Math.abs(lt) > 0 || Math.abs(dt) > 0, ke.last = Ie, $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        W(ke, Ie, Fe);
        return;
      }
      if (ke.kind === "move") {
        const at = Ie.x - ke.offset.x, lt = Ie.y - ke.offset.y;
        if (n.mode === "frame" && u) {
          const dt = ae(), ht = g(dt);
          if (!dt || !ht) return;
          const nn = {
            x: Ee((at - ht.x) / Math.max(1, ht.w), 0, 1),
            y: Ee((lt - ht.y) / Math.max(1, ht.h), 0, 1)
          }, Kt = ne(dt, nn);
          if (!Kt) return;
          const Jt = Wa(Kt);
          An(ke.item, { yaw_deg: Jt.yaw, pitch_deg: Jt.pitch });
        } else if (n.mode === "unwrap") {
          const dt = oe(), ht = Ee((at - dt.x) / Math.max(dt.w, 1), 0, 1), nn = Ee((lt - dt.y) / Math.max(dt.h, 1), 0, 1);
          An(ke.item, { yaw_deg: Vt(ht * 360 - 180), pitch_deg: Ee(90 - nn * 180, -90, 90) });
        } else {
          const dt = pt(at, lt), ht = Wa(dt);
          An(ke.item, { yaw_deg: ht.yaw, pitch_deg: ht.pitch });
        }
        M(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const at = n.mode === "frame" ? (() => {
          const ht = ae();
          return ht ? kt(Ie, ht, performance.now()) : null;
        })() : _t(Ie, performance.now());
        if (!at || !ke.startUv) return;
        const lt = Cn(Number(at.u || 0), Number(ke.startUv.u || 0)), dt = Number(at.v || 0) - Number(ke.startUv.v || 0);
        $((gt = ke.item) == null ? void 0 : gt.actionGroupId, lt, dt, ke.snapshot, (Ue = ke.item) == null ? void 0 : Ue.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const at = n.mode === "frame" ? (() => {
          const ht = ae();
          return ht ? kt(Ie, ht, performance.now()) : null;
        })() : _t(Ie, performance.now());
        if (!at || !ke.startUv) return;
        const lt = Cn(Number(at.u || 0), Number(ke.startUv.u || 0)), dt = Number(at.v || 0) - Number(ke.startUv.v || 0);
        D(((Ze = ke.item) == null ? void 0 : Ze.rasterObjectId) || ((Qe = ke.item) == null ? void 0 : Qe.id) || "", lt, dt, ke.snapshot) && (we(), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const lt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        P(((Bn = ke.item) == null ? void 0 : Bn.rasterObjectId) || ((Be = ke.item) == null ? void 0 : Be.id) || "", lt, ke.snapshot) && (we(), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const at = Ie.x - Number(((Ge = ke.offset) == null ? void 0 : Ge.x) || 0), lt = Ie.y - Number(((Xe = ke.offset) == null ? void 0 : Xe.y) || 0);
        let dt = !1, ht = !1, nn = !1;
        const Kt = at - Number(((Ut = ke.startCenter) == null ? void 0 : Ut.x) || at), Jt = lt - Number(((wt = ke.startCenter) == null ? void 0 : wt.y) || lt);
        for (const Ct of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const Ft = (m === "cutout" ? ve() : _()).find((Ot) => String((Ot == null ? void 0 : Ot.id) || "") === String(Ct.id || ""));
          if (!Ft || !M(Ft)) continue;
          const en = {
            x: Number(((yr = Ct.center) == null ? void 0 : yr.x) || 0) + Kt,
            y: Number(((bi = Ct.center) == null ? void 0 : bi.y) || 0) + Jt
          };
          if (n.mode === "frame" && u) {
            const Ot = ae(), De = g(Ot);
            if (!Ot || !De) continue;
            const qe = {
              x: Ee((en.x - De.x) / Math.max(1, De.w), 0, 1),
              y: Ee((en.y - De.y) / Math.max(1, De.h), 0, 1)
            }, yn = ne(Ot, qe);
            if (!yn) continue;
            const Zt = Wa(yn);
            An(Ft, { yaw_deg: Zt.yaw, pitch_deg: Zt.pitch });
          } else if (n.mode === "unwrap") {
            const Ot = oe(), De = Ee((en.x - Ot.x) / Math.max(Ot.w, 1), 0, 1), qe = Ee((en.y - Ot.y) / Math.max(Ot.h, 1), 0, 1);
            An(Ft, { yaw_deg: Vt(De * 360 - 180), pitch_deg: Ee(90 - qe * 180, -90, 90) });
          } else {
            const Ot = pt(en.x, en.y), De = Wa(Ot);
            An(Ft, { yaw_deg: De.yaw, pitch_deg: De.pitch });
          }
          dt = !0;
        }
        for (const Ct of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const Ft = {
            x: Number(((vi = Ct.center) == null ? void 0 : vi.x) || 0) + Kt,
            y: Number(((_i = Ct.center) == null ? void 0 : _i.y) || 0) + Jt
          }, en = n.mode === "frame" ? (() => {
            const De = ae();
            return De ? kt(Ft, De, performance.now()) : null;
          })() : _t(Ft, performance.now()), Ot = Ct.centerUv || null;
          if (en && Ot) {
            const De = Cn(Number(en.u || 0), Number(Ot.u || 0)), qe = Number(en.v || 0) - Number(Ot.v || 0);
            $(Ct.id, De, qe, Ct.snapshot, Ct.layerKind, Ct.frameSnapshot) && (dt = !0, ht = !0);
          }
        }
        for (const Ct of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const Ft = {
            x: Number(((Na = Ct.center) == null ? void 0 : Na.x) || 0) + Kt,
            y: Number(((yo = Ct.center) == null ? void 0 : yo.y) || 0) + Jt
          }, en = n.mode === "frame" ? (() => {
            const De = ae();
            return De ? kt(Ft, De, performance.now()) : null;
          })() : _t(Ft, performance.now()), Ot = Ct.centerUv || null;
          if (en && Ot) {
            const De = Cn(Number(en.u || 0), Number(Ot.u || 0)), qe = Number(en.v || 0) - Number(Ot.v || 0);
            D(Ct.id, De, qe, Ct.snapshot) && (dt = !0, nn = !0);
          }
        }
        dt && (ht ? xe({ rebuildPaintEngine: !1 }) : nn ? we() : Q(), $e({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const lt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        te((Ca = ke.item) == null ? void 0 : Ca.actionGroupId, lt, 0, ke.snapshot, (Aa = ke.item) == null ? void 0 : Aa.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let at = (Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x) - Number(ke.startAng || 0)) * pi;
        Fe.shiftKey && (at = Math.round(at / 45) * 45), te((Ia = ke.item) == null ? void 0 : Ia.actionGroupId, 1, at, ke.snapshot, (bo = ke.item) == null ? void 0 : bo.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Ie, $e({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const lt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        An(ke.item, { hFOV_deg: Ee(ke.startHFOV * lt, 1, 179), vFOV_deg: Ee(ke.startVFOV * lt, 1, 179) }), A(ke.item) || (ke.item.aspect_id = li(ke.item)), M(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const lt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        An(ke.item, { hFOV_deg: Ee(ke.startHFOV * lt, 1, 179) }), A(ke.item) || (ke.item.aspect_id = li(ke.item)), M(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const lt = Math.max(1, Math.hypot(Ie.x - ke.center.x, Ie.y - ke.center.y)) / ke.startDist;
        An(ke.item, { vFOV_deg: Ee(ke.startVFOV * lt, 1, 179) }), A(ke.item) || (ke.item.aspect_id = li(ke.item)), M(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let lt = (Math.atan2(Ie.y - ke.center.y, Ie.x - ke.center.x) - ke.startAng) * pi, dt = ke.startRot - lt;
        Fe.shiftKey && (dt = Math.round(dt / 45) * 45), An(ke.item, { [M(ke.item) ? "rot_deg" : "roll_deg"]: dt }), M(ke.item) && Q(), $e({ localOnly: !0 });
      }
    }
  }
  function gl() {
    var Ie, ke, mt, ot, gt, Ue, Ze;
    const Fe = n.interaction;
    if (!((Fe == null ? void 0 : Fe.kind) === "roll_frame" && Fe.source === "knob")) {
      if ((Fe == null ? void 0 : Fe.kind) === "space_pan" || (Fe == null ? void 0 : Fe.kind) === "space_orbit") {
        n.interaction = null, St(n.pointerPos), Kn();
        return;
      }
      if ((Fe == null ? void 0 : Fe.kind) === "world_select" || (Fe == null ? void 0 : Fe.kind) === "world_gizmo") {
        ho(Fe);
        return;
      }
      if (((Ie = n.interaction) == null ? void 0 : Ie.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        Me();
        const Qe = ge(n.interaction), Bn = !!n.interaction._hasCommittedSegments;
        if (Qe || Bn) {
          xe();
          const Be = String(((mt = n.interaction.stroke) == null ? void 0 : mt.actionGroupId) || "").trim();
          if (Be) {
            const Xe = Y().find((Ut) => String((Ut == null ? void 0 : Ut.actionGroupId) || "") === Be);
            Xe && (Xe.frame = null);
          }
          const Ge = ye(n.interaction);
          Ge && (Qe ? String(((ot = n.interaction.stroke) == null ? void 0 : ot.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ge), Ye()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ge) : n.paintEngine.cancelActiveStroke(Ge)), Ce(), ee(), tr(), Kn(), o.setDirtyCanvas(!0, !0), $e();
        } else {
          const Be = ye(n.interaction);
          Be && n.paintEngine.cancelActiveStroke(Be);
        }
      } else if (((gt = n.interaction) == null ? void 0 : gt.kind) === "marquee_select") {
        const Qe = Ve(n.interaction.start, n.interaction.current), Be = [
          ...m === "cutout" ? I().filter((Ge) => !v(Ge)) : [..._()],
          ...x(),
          ...L()
        ].filter((Ge) => je(Qe, F(Ge)));
        We(Be, ((Ue = Be[Be.length - 1]) == null ? void 0 : Ue.id) || null), u && Be.length && (n.cutoutAspectOpen = !1), tr(), Kn(), $e();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Ze = n.interaction) == null ? void 0 : Ze.kind))
        n.interaction.changed && (Ce(), me(), tr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let Qe = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (Qe = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (Qe = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (Qe = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (Qe = !0), Qe && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : we()), Ce(), ee(), o.setDirtyCanvas(!0, !0), ya(), Kn(), $e();
      }
      n.interaction = null, (Fe == null ? void 0 : Fe.kind) === "roll_frame" && le(), Me(), Fe && Fe.kind === "view" && io(() => y.endDrag(performance.now())), yi(), Kn(), St(n.pointerPos), $e();
    }
  }
  function yl() {
    var Fe, Ie, ke, mt, ot;
    if (!G()) {
      if (((Fe = n.interaction) == null ? void 0 : Fe.kind) === "world_select" || ((Ie = n.interaction) == null ? void 0 : Ie.kind) === "world_gizmo") {
        ho(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && io(() => y.endDrag(performance.now())), ((mt = n.interaction) == null ? void 0 : mt.kind) === "paint_stroke" || ((ot = n.interaction) == null ? void 0 : ot.kind) === "paint_lasso_fill") {
        Me();
        const gt = ye(n.interaction);
        gt && n.paintEngine.cancelActiveStroke(gt);
      }
      n.interaction = null, Me(), yi(), St(n.pointerPos), $e({ localOnly: !0 });
    }
  }
  function Pa(Fe) {
    const Ie = He(Fe), ke = gn(Ie, !0);
    n.interaction || (St(Ie), ke && n.mode === "frame" && n.primaryTool === "cursor" && $e({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function go(Fe) {
    if (n.mode === "frame") {
      const Ie = He(Fe), ke = Ss(Fe);
      ke && so(), ke && be() ? va(Ie, -ke) : ke && _a(Ie, ke) && $e({ localOnly: !0 }), Fe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ie(), _e()) {
        const Ie = Ss(Fe);
        Ie && Sa(He(Fe), -Ie);
      } else y.applyWheelEvent(Fe) && $e({ localOnly: !0, reason: ft.VIEW });
      Fe.preventDefault();
    }
  }
  return {
    connect(Fe) {
      ({
        _segmentFrameLassoFill: b,
        _segmentFrameStroke: T,
        appendLassoPoint: U,
        appendPaintPoint: H,
        applyRasterObjectOffset: D,
        applyRasterObjectTransform: P,
        applySharedRollInteractionPoint: W,
        applyStrokeGroupOffset: $,
        applyStrokeGroupTransform: te,
        buildFreehandStrokeRecord: re,
        buildLassoFillStrokeRecord: ce,
        cameraShoots: E,
        cancelFrameCameraGesture: G,
        cancelViewTransition: ie,
        clearSelection: pe,
        commitAndRefreshNode: me,
        commitPaintInteraction: ge,
        commitState: ee,
        currentSpaceCamera: S,
        cutoutCamera: K,
        dragFrame: de,
        editorViewInput: q,
        ensureGroupFrame: ue,
        frameContext: Pe,
        frameLocalPointToWorldDir: ne,
        frameSpaceView: O,
        frameTarget: Z,
        getActiveCutoutShot: ae,
        getActivePaintTargetDescriptor: ye,
        getCutoutSelectableItems: ve,
        getCutoutSelectableItemsForHit: I,
        getFrameViewLayout: se,
        getFrameViewRect: g,
        getList: _,
        getMultiSelectionGeom: R,
        getPaintingGroupList: Y,
        getRasterObjectCenterUv: w,
        getRasterObjectList: k,
        getSelectableRasterObjectItems: L,
        getSelectableStrokeGroupItems: x,
        getSelected: N,
        getSelectedItems: C,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: J,
        getUnwrapRect: oe,
        handleHit: z,
        hideTooltip: le,
        hitObjectAt: Se,
        invalidateLivePaintPreviewCaches: Me,
        isCameraSelected: fe,
        isFreeFrameView: be,
        isFreeSpaceView: _e,
        isItemLocked: h,
        isRasterObjectItem: j,
        isSceneSticker: A,
        isShotItem: v,
        isSpaceView: V,
        isStickerItem: M,
        isStrokeGroupItem: X,
        markObjectVisualsDirty: Q,
        markPaintCompositeVisualsDirty: we,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: F,
        paintingShown: he,
        parseRasterObjectSelectionId: Ae,
        playback: Oe,
        poseOf: Re,
        pushHistory: Ce,
        rectFromPoints: Ve,
        rectIntersectsGeom: je,
        refreshPaintEngineRevisionCache: Ye,
        requestDraw: $e,
        screenPos: He,
        screenPosCss: $t,
        screenPosToErpPoint: _t,
        screenPosToFrameAsErpPoint: kt,
        screenToWorldDir: pt,
        selectWorldSticker: Xt,
        selectedWorldSticker: Dn,
        setPointerPos: gn,
        setSelectedItem: zt,
        setSelectedItems: We,
        setSpaceView: Nn,
        shortestWrappedDelta: Cn,
        spaceViewState: er,
        startAnimation: io,
        startCameraPress: pa,
        startFrameDrag: ha,
        startPanFrame: oo,
        startSpaceDrag: ao,
        stopTimelinePlayback: so,
        supportsErpPainting: ma,
        supportsFramePainting: lo,
        syncCutoutShot: co,
        syncFloatingViewButtonState: uo,
        syncFrameRollKnob: ga,
        syncSidePanelControls: ya,
        syncTimeline: ba,
        syncViewToggleState: yi,
        updateCursor: St,
        updateSelectionMenu: Kn,
        updateSidePanel: tr,
        viewControls: fo,
        writePose: An,
        zoomFrameAt: va,
        zoomFrameViewAt: _a,
        zoomSpaceAt: Sa
      } = Fe);
    },
    onCanvasPointerDown: wa,
    worldGizmoPointer: gr,
    hoverWorldGizmo: po,
    onCanvasPointerMove: Ma,
    onCanvasPointerUp: gl,
    onCanvasPointerCancel: yl,
    onCanvasMouseMove: Pa,
    onCanvasWheel: go
  };
}
function MN(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: a,
    shotEditor: s,
    state: l,
    studio: d,
    type: u,
    uiState: c
  } = e;
  let f, p, m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne;
  function O(ve, I, se = !1) {
    var L;
    ee();
    const g = s && n.mode === "frame" ? T() : null, _ = g || D(), R = g ? "shot" : W(), Y = me();
    if (Y && !Pe(Y) || !Y && (!_ || R === "stroke" || $(_))) return;
    const w = (((L = c.sidePanel) == null ? void 0 : L.params) || []).find((x) => x.key === ve);
    if (!w || w.enabled === !1) return;
    let k = Number(I);
    if (Number.isNaN(k) && (k = 0), (Y || t) && jM.has(ve) ? k = ve === "scale" ? Math.max(k, hg) : k : k = Ee(k, Number(w.min), Number(w.max)), ve === "yaw_deg" && (k = Vt(k)), !Y && t && ve.startsWith("position_")) {
      K(), U1(l.camera, n.frame, ve, k), ue(), pe(), se && ie();
      return;
    }
    if (Y) {
      X1(Y, n.frame, ve, k), ce(), ue(), pe(), se && ie();
      return;
    }
    ve === "opacity" ? Y1(_, n.frame, k / 100) : ne(_, { [ve]: k }), s && !te(_) && (ve === "hFOV_deg" || ve === "vFOV_deg") && (_.aspect_id = li(_)), ue(), pe(), se && ie();
  }
  async function Z(ve) {
    var g, _, R, Y, w, k, L;
    const I = ve.target.closest("[data-action]");
    if (!I) return;
    const se = String(I.getAttribute("data-action") || "");
    if (se === "coverage-set") {
      const x = Pn(I.getAttribute("data-coverage"));
      if (x === Pn(l.coverage)) return;
      l.coverage = x, n.coverage = x, r && (r.value = String(x)), o ? a.backgroundDirty = !0 : (b(), S({
        syncPreview: u !== "cutout",
        syncGraph: u !== "cutout"
      })), ue(), q(), pe();
      return;
    }
    if (se === "toggle-selection-picker") {
      if ((_ = (g = c.sidePanel) == null ? void 0 : g.selectionPicker) != null && _.disabled) return;
      c.sidePanel.selectionPicker.open = !c.sidePanel.selectionPicker.open;
      return;
    }
    if (se === "select-picker-item") {
      c.sidePanel.selectionPicker.open = !1;
      const x = String(I.getAttribute("data-selection-id") || "");
      let N = null;
      if (x && (u === "stickers" ? N = [...H(), ...d ? l.shots : []].find((C) => String((C == null ? void 0 : C.id) || "") === x) || null : N = ((R = U().find((C) => {
        var B;
        return String(((B = C == null ? void 0 : C.item) == null ? void 0 : B.id) || "") === x;
      })) == null ? void 0 : R.item) || null), ge(N || null), N && !re(N)) {
        const C = G(N);
        de(Vt(Number(C.yaw_deg || 0)), Ee(Number(C.pitch_deg || 0), -89.9, 89.9));
      }
      ue(), q(), pe();
      return;
    }
    if (se === "copy-state-inline") {
      const x = D(), N = W();
      if (!x || N === "stroke" || P().length > 1) return;
      const C = JSON.stringify(s && N !== "image" ? p(x) : m(G(x)));
      try {
        await navigator.clipboard.writeText(C), (Y = c.sidePanel) != null && Y.copyStateButton && (c.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = c.sidePanel) != null && B.copyStateButton && (c.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (se === "set-invert-x") {
      l.ui_settings.invert_view_x = I.getAttribute("data-value") === "1", E(), ue(), (w = i.setDirtyCanvas) == null || w.call(i, !0, !0), pe();
      return;
    }
    if (se === "set-invert-y") {
      l.ui_settings.invert_view_y = I.getAttribute("data-value") === "1", E(), ue(), (k = i.setDirtyCanvas) == null || k.call(i, !0, !0), pe();
      return;
    }
    if (se === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, E(), ue(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), pe();
      return;
    }
    if (se === "close-preview") {
      y();
      return;
    }
    if (se === "cancel-close") {
      y();
      return;
    }
    se === "save-close" && (f(), y());
  }
  function ae(ve) {
    const I = ve.target.closest("[data-action='param-input']");
    I && O(String(I.getAttribute("data-param-key") || ""), I.value, !1);
  }
  function ye(ve) {
    const I = ve.target.closest("[data-action='param-input']");
    I && O(String(I.getAttribute("data-param-key") || ""), I.value, !0);
  }
  return {
    connect(ve) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: m,
        closeEditor: y,
        commitState: b,
        getActiveCutoutShot: T,
        getCutoutInspectorItems: U,
        getList: H,
        getSelected: D,
        getSelectedItems: P,
        getSelectedKind: W,
        isItemLocked: $,
        isSceneSticker: te,
        isStrokeGroupItem: re,
        markObjectVisualsDirty: ce,
        persistUiSettings: E,
        poseOf: G,
        pushHistory: ie,
        requestDraw: pe,
        selectedWorldSticker: me,
        setSelectedItem: ge,
        stopTimelinePlayback: ee,
        syncCoverageChangeToNodePreviews: S,
        syncCutoutShot: K,
        turnViewTo: de,
        updateSelectionMenu: q,
        updateSidePanel: ue,
        worldStickerEditable: Pe,
        writePose: ne
      } = ve);
    },
    onSidePanelClick: Z,
    onSidePanelInput: ae,
    onSidePanelChange: ye
  };
}
function PN(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: a,
    readOnly: s,
    root: l,
    runtime: d,
    shotEditor: u,
    tooltip: c,
    uiState: f,
    videoEl: p
  } = e;
  let m, y, b, T, U, H, D, P, W, $, te, re, ce, E, G, ie, pe, me, ge, ee, S, K, de, q, ue, Pe, ne, O, Z, ae, ye, ve, I, se, g, _, R, Y, w, k, L, x, N, C, B, J, oe, z, le, Se, Me;
  const fe = () => {
    if (!t.customPaintSessionStart) return;
    if (Ws(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (lP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      In(t.customPaintColor),
      ...t.customPaintHistory.filter((Ve) => !Ws(Ve, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, be = (Ce = !1) => {
    !i || i.hidden || (Ce ? fe() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, _e = () => {
    i && (i.hidden && (t.customPaintSessionStart = In(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function h() {
    w();
  }
  function j(Ce) {
    var pt, Xt, Dn, gn, zt;
    if ((Xt = (pt = Ce.target) == null ? void 0 : pt.matches) != null && Xt.call(pt, "[data-confirm-overlay]")) {
      const We = (Dn = f.confirmDialog) == null ? void 0 : Dn.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, We == null || We(!1);
      return;
    }
    const Ve = Ce.target.closest("[data-space-mode]");
    if (Ve) {
      se(Ve.getAttribute("data-space-mode"));
      return;
    }
    const je = Ce.target.closest("[data-gizmo-mode]");
    if (je) {
      t.gizmoMode = je.getAttribute("data-gizmo-mode"), d.backgroundDirty = !0, le(), O({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Ye = Ce.target.closest("[data-view]");
    if (Ye) {
      if (Ye.getAttribute("aria-disabled") === "true") return;
      const We = t.mode;
      t.mode = String(Ye.getAttribute("data-view") || "pano"), u && t.mode === "frame" && (We !== "frame" && (d.frameSafeRect = null), Se(), le()), E(), N(), O();
      return;
    }
    const $e = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if ($e && !s) {
      if ($e.matches("[data-tool-mode]")) {
        const We = String($e.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = We, (We === "paint" || We === "mask") && W({ preservePanelValues: !0 }), k(), Se(), le(), O();
        return;
      }
      if ($e.matches("[data-tool-ui-action]")) {
        const We = String($e.getAttribute("data-tool-ui-action") || "");
        if ((We === "undo" || We === "redo") && $e.disabled) return;
        We === "undo" ? Z(-1) : We === "redo" ? Z(1) : We === "clear" ? D() : We === "add" || We === "add-image" ? y() : We === "add-world" ? T() : We === "add-or-look" ? m() : We === "add-camera" && b();
        return;
      }
      if ($e.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const We = String($e.getAttribute("data-paint-tool") || "pen");
        t.paintTool = We, W({ preservePanelValues: !0 }), Sn[We] && (t.activeBrushPresetId = We), k(), Se(), le(), O();
        return;
      }
      if ($e.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String($e.getAttribute("data-mask-tool") || "pen"), W({ preservePanelValues: !0 }), k(), Se(), le(), O();
        return;
      }
      if ($e.matches("[data-paint-layer-clear-current]")) {
        const We = String($e.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        P(We);
        return;
      }
      if ($e.matches("[data-paint-color-swatch]")) {
        const We = pl.find((Nn) => Nn.id === $e.getAttribute("data-paint-color-swatch"));
        if (!We) return;
        t.paintColor = In(We.color), be(!0), k();
        return;
      }
      if ($e.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? be(!0) : _e(), k();
        return;
      }
    }
    const He = String(((gn = $e == null ? void 0 : $e.getAttribute) == null ? void 0 : gn.call($e, "data-action")) || "");
    if (He === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      Me.resumeAfterScrub = !1, C();
      return;
    }
    if (He === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), oe(), typeof ($e == null ? void 0 : $e.blur) == "function" && $e.blur();
      return;
    }
    if (He === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      const We = !f.videoTransport.loop;
      f.videoTransport.loop = We, p.loop = We, x({
        hasAudio: f.videoTransport.hasAudio,
        loop: We,
        muted: p.muted,
        volume: Number(p.volume ?? f.videoTransport.volume ?? 1)
      }), typeof ($e == null ? void 0 : $e.blur) == "function" && $e.blur();
      return;
    }
    if (!s) {
      if (He === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (He === "frame-aspect-set") {
        const We = t.mode === "frame" ? ie() : null;
        if (!We || We.locked === !0) return;
        I(We, String($e.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, L(), ue(), $(), N(), Se(), le(), O();
        return;
      }
      if (He === "frame-aspect-custom") {
        const We = t.mode === "frame" ? ie() : null, Nn = $e.getAttribute("data-custom-width"), Cn = $e.getAttribute("data-custom-height");
        if (!We || !U(We, Nn, Cn)) return;
        f.frameRail.aspectOpen = !1, L(), ue(), $(), N(), O();
        return;
      }
      if (He === "frame-rotate-90") {
        const We = t.mode === "frame" ? ie() : null;
        if (!We || We.locked === !0) return;
        ye(We), f.frameRail.aspectOpen = !1, L(), ue(), $(), N(), O();
        return;
      }
      if (He === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, le(), O();
        return;
      }
      if (He === "aspect-set") {
        const We = me();
        if (!We) return;
        const Nn = String($e.getAttribute("data-aspect") || "1:1");
        I(We, Nn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), ue(), $(), le(), O();
        return;
      }
      if (He === "rotate-90") {
        const We = me();
        if (!We || S()) return;
        ye(We), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), ue(), $(), le(), O();
        return;
      }
      if (He === "bring-front") {
        H();
        return;
      }
      if (He === "send-back") {
        ve();
        return;
      }
      if (He === "duplicate") {
        ce();
        return;
      }
      if (He === "replace-image") {
        ne();
        return;
      }
      if (He === "toggle-lock") {
        J();
        return;
      }
      if (He === "back-initial") {
        ae();
        return;
      }
      if (He === "toggle-visible") {
        B();
        return;
      }
      if (He === "delete") {
        re();
        return;
      }
    }
    if (He === "reset-view") {
      if (t.mode === "frame") return;
      z(
        { position: R(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((zt = te()) == null ? void 0 : zt.radius) || Jn },
        { mode: Ks(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (He === "frame-view") {
      if (!K() || Ks(t.spaceMode, t.viewTransition) !== "6dof") return;
      G();
      return;
    }
    if (He === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, yP(r == null ? void 0 : r.id, t.showGrid), h(), O();
      return;
    }
    if (He === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Ae();
      return;
    }
    if (He === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const We = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = We, Y(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = We ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Re(), O();
      return;
    }
    const $t = Ce.target.closest("[data-paint-history-index]");
    if (!$t) return;
    const _t = Number($t.getAttribute("data-paint-history-index")), kt = t.customPaintHistory[_t];
    kt && (t.customPaintColor = In(kt), t.paintColor = In(kt), k());
  }
  function A(Ce) {
    const Ve = Ce.target.closest("[data-video-seek]");
    if (Ve) {
      if (!(p instanceof HTMLVideoElement)) return;
      de.playing && (Me.resumeAfterScrub = !0), de.seek(ei(Number(Ve.value || 0), q()));
      return;
    }
    const je = Ce.target.closest("[data-video-volume]");
    if (je) {
      if (!(p instanceof HTMLVideoElement)) return;
      const He = Ee(Number(je.value || 0), 0, 1);
      p.volume = He, p.muted = He <= 1e-4, x({
        hasAudio: f.videoTransport.hasAudio,
        muted: p.muted,
        volume: He
      });
      return;
    }
    const Ye = Ce.target.closest("[data-paint-size-slider]");
    if (Ye) {
      if (Ye.disabled) return;
      const He = Math.max(1, Math.min(120, Math.round(Number(Ye.value)))), $t = pe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[$t] = He, k(), g();
      return;
    }
    const $e = Ce.target.closest("[data-paint-alpha-slider]");
    if ($e) {
      const He = { ...t.customPaintColor, a: Ee(Number($e.value) / 100, 0, 1) };
      t.customPaintColor = In(He), t.paintColor = In(He), k();
    }
  }
  function v(Ce) {
    var Ve;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      Me.resumeAfterScrub && de.play(), Me.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((Ve = Ce.target) == null ? void 0 : Ve.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && ge();
  }
  function V(Ce) {
    const Ve = Ce.target.closest("[data-tip]");
    !Ve || !l.contains(Ve) || c.target !== Ve && (c.target = Ve, c.timer && clearTimeout(c.timer), c.timer = window.setTimeout(() => {
      c.target === Ve && _(Ve);
    }, 220));
  }
  function M(Ce) {
    var Ye, $e;
    const Ve = Ce.target.closest("[data-tip]");
    !Ve || c.target !== Ve || (Ce.relatedTarget instanceof Element ? ($e = (Ye = Ce.relatedTarget).closest) == null ? void 0 : $e.call(Ye, "[data-tip]") : null) === Ve || ee();
  }
  function X(Ce, Ve) {
    var _t;
    if (!o) return;
    const je = o.getBoundingClientRect(), Ye = Ee((Ce - je.left) / Math.max(1, je.width), 0, 1), $e = 1 - Ee((Ve - je.top) / Math.max(1, je.height), 0, 1), He = Qc(t.customPaintColor), $t = { ...Zc(He.h, Ye, $e), a: Number(((_t = t.customPaintColor) == null ? void 0 : _t.a) ?? 1) };
    t.customPaintColor = In($t), t.paintColor = In($t), k();
  }
  function Q(Ce) {
    var He;
    if (!a) return;
    const Ve = a.getBoundingClientRect(), je = Ee((Ce - Ve.left) / Math.max(1, Ve.width), 0, 1), Ye = Qc(t.customPaintColor), $e = { ...Zc(je, Ye.s, Ye.v), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = In($e), t.paintColor = In($e), k();
  }
  function we(Ce, Ve) {
    const je = Ce.pointerId;
    Ve(Ce);
    const Ye = (He) => {
      He.pointerId === je && Ve(He);
    }, $e = (He) => {
      He.pointerId === je && (window.removeEventListener("pointermove", Ye), window.removeEventListener("pointerup", $e), window.removeEventListener("pointercancel", $e));
    };
    window.addEventListener("pointermove", Ye), window.addEventListener("pointerup", $e), window.addEventListener("pointercancel", $e);
  }
  function xe() {
    const Ce = !!t.fullscreen;
    Oi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? ze.fullscreen_close : ze.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function F(Ce) {
    const Ve = !!Ce;
    t.fullscreen !== Ve && (t.fullscreen = Ve, l.classList.toggle("pano-modal-fullscreen", Ve), Ve ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), h(), xe(), Pe(), O());
  }
  function he() {
    return document.fullscreenElement === n;
  }
  async function Ae() {
    var Ce, Ve;
    try {
      if (!document.fullscreenEnabled) {
        F(!t.fullscreen);
        return;
      }
      he() ? await ((Ve = document.exitFullscreen) == null ? void 0 : Ve.call(document)) : await ((Ce = n.requestFullscreen) == null ? void 0 : Ce.call(n));
    } catch {
      F(!t.fullscreen);
    }
  }
  function Oe() {
    document.fullscreenEnabled && F(he());
  }
  function Re() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: m,
        addImageSticker: y,
        addStudioCamera: b,
        addWorldImageSticker: T,
        applyCutoutAspectCustom: U,
        bringSelectedToFront: H,
        clearAll: D,
        clearPaintingLayer: P,
        clearSelection: W,
        commitAndRefreshNode: $,
        contentSphere: te,
        deleteSelected: re,
        duplicateSelected: ce,
        forceCursorTool: E,
        frameSpaceContent: G,
        getActiveCutoutShot: ie,
        getBrushPresetIdForTool: pe,
        getSelected: me,
        hidePaintSizePreview: ge,
        hideTooltip: ee,
        isErpCamera: S,
        isFreeSpaceView: K,
        playback: de,
        playbackFps: q,
        pushHistory: ue,
        queueVideoTransportLayout: Pe,
        replaceSelectedImage: ne,
        requestDraw: O,
        restoreHistory: Z,
        restoreSelectedToInitialPose: ae,
        rotateCutoutAspect90: ye,
        sendSelectedToBack: ve,
        setShotAspect: I,
        setSpaceMode: se,
        showPaintSizePreview: g,
        showTooltipFor: _,
        spaceOrigin: R,
        startAnimation: Y,
        syncFloatingViewButtonState: w,
        syncPaintUi: k,
        syncSidePanelControls: L,
        syncVideoTransportState: x,
        syncViewToggleState: N,
        togglePlayback: C,
        toggleSelectedExternalStickerVisibility: B,
        toggleSelectedLock: J,
        toggleVideoMuted: oe,
        transitionView: z,
        updateSelectionMenu: le,
        updateSidePanel: Se,
        videoState: Me
      } = Ce);
    },
    closePaintColorPop: be,
    syncGridToggleButton: h,
    onRootClick: j,
    onRootInput: A,
    onRootChange: v,
    onRootPointerOver: V,
    onRootPointerOut: M,
    updatePaintColorFromSv: X,
    updatePaintColorFromHue: Q,
    bindDrag: we,
    syncFullscreenButton: xe,
    setFullscreenState: F,
    onFullscreenChange: Oe,
    syncOutputPreviewToggleButton: Re
  };
}
function NN(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: a
  } = e;
  let s, l, d, u, c, f, p, m, y, b, T, U;
  function H(E) {
    var G, ie, pe, me, ge;
    if (E.key === "Escape") {
      if (s()) {
        E.preventDefault(), E.stopPropagation(), (G = E.stopImmediatePropagation) == null || G.call(E);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        E.preventDefault(), E.stopPropagation(), (ie = E.stopImmediatePropagation) == null || ie.call(E), (pe = document.exitFullscreen) == null || pe.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        E.preventDefault(), E.stopPropagation(), (me = E.stopImmediatePropagation) == null || me.call(E), y(!1);
        return;
      }
      E.preventDefault(), E.stopPropagation(), (ge = E.stopImmediatePropagation) == null || ge.call(E), l();
    }
  }
  function D(E) {
    const G = String(E.key || ""), ie = String(E.code || ""), pe = Number(E.keyCode || 0);
    if (!(G === "Delete" || ie === "Delete" || pe === 46) && !(G === "Backspace" || ie === "Backspace" || pe === 8)) return;
    const ee = E.target, S = ((ee == null ? void 0 : ee.tagName) || "").toUpperCase();
    if (S === "INPUT" || S === "TEXTAREA" || ee != null && ee.isContentEditable) return;
    if (o.selection) {
      u(), E.preventDefault(), E.stopPropagation();
      return;
    }
    if (c()) {
      E.preventDefault(), E.stopPropagation();
      return;
    }
    p() && (d(), E.preventDefault(), E.stopPropagation());
  }
  function P(E) {
    if (E.code !== "Space" || E.ctrlKey || E.metaKey || E.altKey || n || !i || !a.timeline.visible || a.confirmDialog.visible) return !1;
    const G = E.composedPath()[0];
    if (G !== document.body && G !== document.documentElement && !r.contains(G)) return !1;
    const ie = ((G == null ? void 0 : G.tagName) || "").toUpperCase();
    return ie === "INPUT" ? !zM.has(String(G.type || "text").toLowerCase()) : ie !== "TEXTAREA" && ie !== "SELECT" && !(G != null && G.isContentEditable);
  }
  function W(E) {
    P(E) && (E.preventDefault(), E.stopPropagation(), E.repeat || T());
  }
  function $(E) {
    P(E) && (E.preventDefault(), E.stopPropagation());
  }
  function te(E) {
    const G = !!(E.ctrlKey || E.metaKey), ie = !!E.altKey;
    t.marqueeModifier === G && t.altModifier === ie || (t.marqueeModifier = G, t.altModifier = ie, b(), U(t.pointerPos));
  }
  function re() {
    t.marqueeModifier = !1, t.altModifier = !1, b(), U(t.pointerPos);
  }
  function ce(E) {
    if (n || !E.ctrlKey && !E.metaKey) return;
    const G = String(E.key || "").toLowerCase(), ie = String(E.code || "");
    if (G !== "z" && ie !== "KeyZ") return;
    const pe = E.target, me = ((pe == null ? void 0 : pe.tagName) || "").toUpperCase();
    if (me === "INPUT" || me === "TEXTAREA" || pe != null && pe.isContentEditable) return;
    const { canUndo: ge, canRedo: ee } = f();
    E.shiftKey && !ee || !E.shiftKey && !ge || (m(E.shiftKey ? 1 : -1), E.preventDefault(), E.stopPropagation());
  }
  return {
    connect(E) {
      ({
        cancelFrameCameraGesture: s,
        closeEditor: l,
        deleteSelected: d,
        deleteSelectedKeyframes: u,
        deleteSelectedWorldSticker: c,
        getHistoryCapabilities: f,
        getSelected: p,
        restoreHistory: m,
        setFullscreenState: y,
        syncFrameRollKnob: b,
        togglePlayback: T,
        updateCursor: U
      } = E);
    },
    onEscClose: H,
    onDeleteKey: D,
    onSpaceKey: W,
    onSpaceKeyUp: $,
    onModifierKeyChange: te,
    onWindowBlur: re,
    onUndoRedoKey: ce
  };
}
const Xf = /* @__PURE__ */ new Map(), Zn = Sm({
  app: qn,
  api: ln,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Xc,
    markImageFailed: pg,
    markImageLoading: dg,
    markImageReady: fg
  }
});
function Jf(e) {
  if (!tn(e, "background") || !tn(e, "external-sticker")) return null;
  const t = Zn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? to(t[0]) : null;
}
function CN(e) {
  if (!tn(e, "background")) return null;
  const [t] = Zn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = Zn.uiValue(e, "pano_timeline_frames") || [], [n] = Zn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: Pn(n) };
}
const AN = Zn.assetSource, IN = Zn.source, EN = Zn.uiImage, ON = Zn.invalidateUiImage, Zf = Zn.loadPreferredExactLinkedImage;
async function FN(e, t, r = {}) {
  var en, Ot;
  await Zm(e, { tolerateOperationFailure: !0 }), Zn.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = uP(e, t);
  await td();
  const s = Ba(e, "output_preset"), l = Ba(e, "coverage"), d = Ba(e, "bg_color"), u = Ba(e, $M), c = () => {
    const De = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Zf(
      e,
      De,
      () => Ie(),
      `background:size:${De.join("|")}`
    );
  }, f = () => {
    const De = c();
    return pP(De);
  }, p = (De = 2048) => {
    const qe = s == null ? void 0 : s.value;
    return fP(qe) ? f() || Math.max(1, Math.round(Number(De || 2048))) : dP(qe, De);
  }, m = e.__panoSceneStateV2 === !0, y = t === "stickers" && m, b = t === "cutout" && m, T = y && e.__panoStudio === !0, U = b || T, H = t === "cutout" || T, D = b ? CN(e) : null, P = (m ? zh : $h)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((d == null ? void 0 : d.value) || "#00ff00"),
    coverage: D ? D.coverage : Pn(l == null ? void 0 : l.value),
    sharedUiSettings: hP(),
    active: Wh(e),
    fps: m ? Jf(e) : null,
    scene: (D == null ? void 0 : D.state) ?? null,
    camera: b
  });
  e.__panoLiveStateOverride = P, e.__panoLiveStateVersion = 0;
  let W = null;
  U ? (W = P.camera && (!T || P.camera.visible !== !1) ? Hh(P.camera, 0) : null, P.shots = W ? [{ ...W, position: [...W.position] }] : [], P.active.selected_shot_id = W && b ? dl : null) : t === "cutout" && (P.shots = Array.isArray(P.shots) ? P.shots.slice(0, 1) : [], P.shots.length || (P.active.selected_shot_id = null));
  const $ = t === "cutout" ? (() => {
    var yn;
    const De = Array.isArray(P.shots) ? P.shots : [], qe = String(((yn = P == null ? void 0 : P.active) == null ? void 0 : yn.selected_shot_id) || "");
    return De.find((Zt) => String((Zt == null ? void 0 : Zt.id) || "") === qe) || De[0] || null;
  })() : null, te = $ ? _g($, !1) : { width: 220, height: 132 }, re = ug(T ? "studio" : t), ce = /* @__PURE__ */ Ji({
    stageStatus: Un,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (re.viewButtons || []).map((De) => ({ ...De, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (en = re.spaceButtons) != null && en.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: re.spaceButtons, frame: re.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (re.toolButtons || []).map((De) => ({
      ...De,
      disabled: !1,
      ...De.key === "add-world" ? { visible: y } : {},
      ...b && tP.has(De.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(re.floatingButtons || []).map((De) => ({ ...De, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ze.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: ze.aspect,
      rotateIcon: ze.rotate_90,
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
      icon: ze.fullscreen,
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
      customColorCss: sr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: sr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (De, qe) => ({ index: qe, color: null })),
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
      width: te.width,
      height: te.height,
      label: $ ? "Loading preview" : "Add Frame to preview"
    }
  }), E = { frame: /* @__PURE__ */ fs(0), playing: /* @__PURE__ */ fs(!1) }, G = document.createElement("div");
  document.body.appendChild(G);
  const ie = ({ intent: De, file: qe } = {}) => {
    if (Yn(qe)) {
      if (De === "add") {
        Oe(qe);
        return;
      }
      if (De === "add-world") {
        Re(qe);
        return;
      }
      De === "replace" && Fe(qe);
    }
  }, pe = ({ intent: De } = {}) => {
  }, me = yu(VM, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: re,
    paintSwatches: pl.map((De) => ({
      id: De.id,
      label: De.label,
      cssColor: sr(De.color, 1)
    })),
    uiState: ce,
    playhead: E,
    onClose: () => {
      Ct();
    },
    onTimeline: (De) => ml(De),
    onImageFileSelected: ie,
    onImageFileCancelled: pe
  });
  let ge = null;
  try {
    ge = me.mount(G);
  } catch (De) {
    try {
      me.unmount();
    } catch {
    }
    throw G.remove(), De;
  }
  const ee = G.querySelector(".pano-modal-overlay"), S = G.querySelector(".pano-modal"), K = S == null ? void 0 : S.querySelector("[data-stage-overlay]"), de = S == null ? void 0 : S.querySelector("[data-stage-background]"), q = S == null ? void 0 : S.querySelector(".pano-stage-wrap"), ue = ((Ot = ge == null ? void 0 : ge.getPaintOverlayRefs) == null ? void 0 : Ot.call(ge)) || {}, Pe = ue.cursor || null, ne = ue.sizePreview || null, O = ue.sizeSample || null;
  if (!ee || !S || !K || !de || !q || !Pe || !ne || !O)
    throw me.unmount(), G.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const Z = K.getContext("2d"), ae = S.querySelector("[data-side]"), ye = S.querySelector("[data-video-element]"), ve = S.querySelector("[data-port-video-element]");
  Il(K, "editor.stage-overlay"), Il(de, "editor.stage-background"), Kd(ye, "editor.video"), Kd(ve, "editor.port-video");
  const I = S.querySelector(".pano-floating-right"), se = S.querySelector(".pano-floating-top"), g = S.querySelector("[data-tool-rail]"), _ = S.querySelector("[data-frame-rail]"), R = S.querySelector("[data-frame-roll-knob]"), Y = S.querySelector("[data-paint-dock]"), w = S.querySelector(".pano-video-transport"), k = S.querySelector("[data-selection-menu]"), L = S.querySelector("[data-tooltip]"), x = S.querySelector("[data-camera-preview-host]"), N = S.querySelector("[data-camera-preview-canvas]");
  Il(N, "editor.camera-preview");
  const C = S.querySelector("[data-paint-color-row]"), B = S.querySelector("[data-paint-color-pop]"), J = S.querySelector("[data-paint-color-sv]"), oe = S.querySelector("[data-paint-color-sv-cursor]"), z = S.querySelector("[data-paint-hue-strip]"), le = S.querySelector("[data-paint-hue-handle]");
  q == null || q.removeAttribute("data-stage-ready"), q == null || q.setAttribute("data-stage-loading-kind", "boot"), K.style.opacity = "1", de.style.opacity = "0", i && (ae == null || ae.remove(), S.classList.add("pano-modal-readonly")), S.addEventListener("pointerdown", () => M.wake(), !0), S.addEventListener("pointerdown", (De) => {
    var qe;
    De.target.closest("[data-frame-roll-knob]") || zt(), !De.target.closest(".pano-picker") && (De.target.closest("[data-paint-color-row]") || (S.querySelectorAll(".pano-picker-pop").forEach((yn) => {
      yn.hidden = !0;
    }), $e(!0), H && Me.cutoutAspectOpen && !De.target.closest(".pano-aspect-popover") && !De.target.closest("[data-action='aspect']") && (Me.cutoutAspectOpen = !1, Me.menuMode = "", Me.menuSize.measured = !1, Ia(), Ie()), (qe = ce.frameRail) != null && qe.aspectOpen && !De.target.closest(".pano-frame-aspect-control") && (ce.frameRail.aspectOpen = !1)));
  });
  const Me = {
    mode: "pano",
    selectedId: t === "stickers" ? P.active.selected_sticker_id : P.active.selected_shot_id,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Jn,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Pn(P.coverage),
    historyController: MP(P),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: xr,
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
    showGrid: gP(e == null ? void 0 : e.id, !0),
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
    paintEngine: Su(),
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
  }, fe = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (Me.selectedId = null, P.active.selected_sticker_id = null), Me.selectedIds = Me.selectedId ? [Me.selectedId] : [];
  const be = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), A = dn({ label: "editor.still" });
  A.__panoFrameIdx = 0;
  const v = dn({ label: "editor.port-still" });
  v.__panoFrameIdx = 0;
  const V = {
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
  }, M = Lw({
    requestAnimationFrame: (De) => requestAnimationFrame(De),
    cancelAnimationFrame: (De) => cancelAnimationFrame(De),
    draw: (De, qe) => _i(De, qe),
    animating: () => _t()
  }), X = Tw({
    requestFrame: (De) => M.requestFrame(De),
    cancelFrame: (De) => M.cancelFrame(De),
    tasks: {
      seek: () => gl.seek(fe.scrubFrame),
      timeline: () => bi(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Bn(), Ie({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => bo()
    }
  }), Q = Vv({
    canvas: de,
    onReady: () => {
      Qe(), Ie({ reason: ft.CONTEXT });
    },
    onFailed: () => Ie(),
    onUpdate: () => Ie({ localOnly: !0, reason: ft.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      Xt(), Qe(), Ie({ reason: ft.CONTEXT });
    }
  }), we = Number.parseFloat(
    getComputedStyle(S).getPropertyValue("--pano-float-radius")
  ) || 10, xe = (De) => {
    const qe = String(De || "default");
    K.style.cursor !== qe && (K.style.cursor = qe);
  }, F = {
    timer: 0,
    target: null
  }, he = {
    active: !1,
    depth: 0
  }, Ae = xu({
    getView: () => ({ yaw: Me.viewYaw, pitch: Me.viewPitch, fov: Me.viewFov }),
    setView: (De) => {
      Me.viewYaw = Vt(Number(De.yaw || 0)), Me.viewPitch = Ee(Number(De.pitch || 0), -89.9, 89.9), Me.viewFov = Ee(Number(De.fov || Me.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const De = K.getBoundingClientRect();
      return {
        w: Math.max(1, Number(De.width || K.clientWidth || 0)),
        h: Math.max(1, Number(De.height || K.clientHeight || 0))
      };
    },
    getInvert: () => {
      var De, qe;
      return {
        x: (De = P.ui_settings) != null && De.invert_view_x ? -1 : 1,
        y: (qe = P.ui_settings) != null && qe.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Dn(),
    onInteraction: () => M.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Oe,
    addWorldStickerFromFile: Re,
    applyInitialCutoutFocus: Ce,
    applyVideoTimelineFps: Ve,
    bindDrag: je,
    cancelFrameCameraGesture: Ye,
    closePaintColorPop: $e,
    commitState: He,
    disposeMediaSession: $t,
    editorAnimating: _t,
    finishKnobRoll: kt,
    flushFrameWheelCommit: pt,
    forgetCameraPreviewFrame: Xt,
    getUnwrapRect: Dn,
    hidePaintSizePreview: gn,
    hideTooltip: zt,
    hoverWorldGizmo: We,
    isFreeFrameView: Nn,
    isFreeSpaceView: Cn,
    migrateLegacyEmbeddedAssets: er,
    onCanvasDragOver: io,
    onCanvasDrop: pa,
    onCanvasMouseMove: ha,
    onCanvasPointerCancel: oo,
    onCanvasPointerDown: ao,
    onCanvasPointerMove: so,
    onCanvasPointerUp: ma,
    onCanvasWheel: lo,
    onDeleteKey: co,
    onEscClose: uo,
    onFrameRollKnobDoubleClick: ga,
    onFrameRollKnobPointerDown: ya,
    onFrameRollKnobPointerMove: ba,
    onFullscreenChange: yi,
    onModifierKeyChange: St,
    onRootChange: Kn,
    onRootClick: tr,
    onRootInput: fo,
    onRootPointerOut: An,
    onRootPointerOver: va,
    onSidePanelChange: _a,
    onSidePanelClick: Sa,
    onSidePanelInput: Tr,
    onSpaceKey: wa,
    onSpaceKeyUp: gr,
    onTimelineAction: ml,
    onUndoRedoKey: po,
    onWindowBlur: xa,
    onWindowDragEnter: ho,
    onWindowDragLeave: mo,
    onWindowDragOver: ka,
    onWindowDrop: Ma,
    playback: gl,
    pushHistory: yl,
    reconcileExternalStickerFromInputs: Pa,
    refreshModalVideoSource: go,
    replaceSelectedImageFromFile: Fe,
    requestDraw: Ie,
    sampleEditorDiagnostics: ke,
    setDropCue: mt,
    setPointerPos: ot,
    stageResizeObserver: gt,
    stickerCornerOrderSanity: Ue,
    stopRenderLoop: Ze,
    syncCanvasSize: Qe,
    syncCutoutShot: Bn,
    syncFullscreenButton: Be,
    syncGridToggleButton: Ge,
    syncLookAtFrameButtonState: Xe,
    syncOutputPreviewToggleButton: Ut,
    syncPaintUi: wt,
    syncPaintingLayerAsync: yr,
    syncTimeline: bi,
    syncUndoRedoButtons: vi,
    tick: _i,
    triggerBackgroundPersistenceOnClose: Na,
    updateCursor: yo,
    updatePaintColorFromHue: Ca,
    updatePaintColorFromSv: Aa,
    updateSelectionMenu: Ia,
    updateSidePanel: bo,
    viewControls: at,
    watchPixelRatio: lt
  } = bP({
    api: ln,
    app: qn,
    backgroundCanvas: de,
    bgWidget: d,
    cameraV2: U,
    canvas: K,
    capture: D,
    closeEditor: Ct,
    comfyMedia: Zn,
    coverageWidget: l,
    ctx: Z,
    cutoutPreviewCanvas: N,
    cutoutPreviewHost: x,
    cutoutV2: b,
    dragCue: he,
    dragFrames: X,
    editor: Me,
    editorView: Q,
    floatingRightEl: I,
    floatingTopEl: se,
    frameGateCssRadius: we,
    frameRailEl: _,
    frameRollKnobEl: R,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: W,
    loadPreferredExactLinkedImage: Zf,
    mediaAssetSource: AN,
    mediaSource: IN,
    mediaUiImage: EN,
    node: e,
    overlay: ee,
    paintColorPop: B,
    paintColorRow: C,
    paintColorSv: J,
    paintColorSvCursor: oe,
    paintCursorEl: Pe,
    paintDockEl: Y,
    paintHueHandle: le,
    paintHueStrip: z,
    paintSizePreviewEl: ne,
    paintSizePreviewSampleEl: O,
    portStillCanvas: v,
    portVideoEl: ve,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: j,
    rasterImageAlphaCache: h,
    rasterImageCache: _e,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: S,
    runtime: V,
    sceneV2: y,
    scheduler: M,
    selectionMenu: k,
    setCanvasCursor: xe,
    shotEditor: H,
    stageWrap: q,
    state: P,
    stateV2: m,
    stateWidget: u,
    stillCanvas: A,
    studio: T,
    timeline: fe,
    timelinePlayhead: E,
    toolRailEl: g,
    tooltip: F,
    tooltipEl: L,
    type: t,
    uiState: ce,
    videoEl: ye,
    videoTimelineFps: Jf,
    videoTransportEl: w,
    viewController: Ae,
    vueModal: ge
  }, [
    wP,
    PP,
    NP,
    CP,
    AP,
    IP,
    EP,
    OP,
    FP,
    KP,
    BP,
    UP,
    YP,
    qP,
    pN,
    hN,
    mN,
    gN,
    yN,
    bN,
    vN,
    _N,
    SN,
    wN,
    xN,
    kN,
    MN,
    PN,
    NN
  ]);
  Ue(), gt.observe(K), lt();
  const dt = () => He();
  n || (e.__panoFlushStateBeforeQueue = dt), R == null || R.addEventListener("pointerdown", ya), R == null || R.addEventListener("pointermove", ba), R == null || R.addEventListener("pointerup", kt), R == null || R.addEventListener("pointercancel", () => Ye()), R == null || R.addEventListener("lostpointercapture", () => {
    var De;
    ((De = Me.interaction) == null ? void 0 : De.source) === "knob" && Ye();
  }), R == null || R.addEventListener("dblclick", ga), K.onpointerdown = ao, K.onpointermove = so, K.onpointerup = ma, K.onpointercancel = oo, K.onlostpointercapture = () => {
    Ye();
  }, K.onauxclick = (De) => {
    De.button === 1 && De.preventDefault();
  }, K.oncontextmenu = (De) => {
    (Cn() || Nn()) && lS(at(), 2) && De.preventDefault();
  }, K.onmousemove = ha, K.onpointerleave = () => {
    Me.interaction || We({ x: -1e6, y: -1e6 });
  }, K.onmouseleave = () => {
    ot(Me.pointerPos, !1), yo(Me.pointerPos), Me.mode === "frame" && Me.primaryTool === "cursor" && Ie({ localOnly: !0, reason: ft.OVERLAY });
  }, K.onwheel = lo, K.ondragover = io, K.ondrop = pa, window.addEventListener("dragenter", ho, !0), window.addEventListener("dragover", ka, !0), window.addEventListener("dragleave", mo, !0), window.addEventListener("drop", Ma, !0), ae == null || ae.addEventListener("click", Sa), ae == null || ae.addEventListener("input", Tr), ae == null || ae.addEventListener("change", _a), Ge(), S.addEventListener("click", tr), S.addEventListener("input", fo), S.addEventListener("change", Kn), S.addEventListener("pointerup", (De) => {
    var qe;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((qe = De.target) == null ? void 0 : qe.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && gn();
  }), S.addEventListener("pointercancel", (De) => {
    var qe;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((qe = De.target) == null ? void 0 : qe.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && gn();
  }), S.addEventListener("focusout", (De) => {
    De.target.closest("[data-paint-size-slider]") && gn();
  }), S.addEventListener("pointerover", va), S.addEventListener("pointerout", An), S.addEventListener("pointerdown", (De) => {
    De.target.closest("[data-frame-roll-knob]") || zt();
  }), J && (J.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), je(De, (qe) => Aa(qe.clientX, qe.clientY));
  }), z && (z.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), je(De, (qe) => Ca(qe.clientX));
  }), S.addEventListener("click", (De) => {
    var Br;
    const qe = De.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!qe) return;
    const yn = qe.getAttribute("data-action") === "confirm-accept", Zt = (Br = ce.confirmDialog) == null ? void 0 : Br.resolve;
    ce.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Zt == null || Zt(yn);
  }), document.addEventListener("fullscreenchange", yi), Be(), Ut();
  const ht = e.onConnectionsChange;
  let nn = null, Kt = () => {
  };
  !n && t === "stickers" && (Kt = Xm(e, (De = "sync") => {
    De === "executed" && (ON(be, Hs), go(), y && Ve()), Pa(De);
  }, { editor: !0 }), nn = function(...qe) {
    typeof ht == "function" && ht.apply(this, qe), go(), Ar(this, "connections");
  }, e.onConnectionsChange = nn), !n && !b && Xf.set(String(e.id ?? "0"), () => yr());
  let Jt = null;
  async function Ct() {
    return Jt || (Jt = (async () => {
      var De, qe, yn, Zt, Br, Si, wi, cd;
      return Xf.delete(String(e.id ?? "0")), pt(), n || He(), document.fullscreenElement === ee && ((De = document.exitFullscreen) == null || De.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", yi), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === dt && (e.__panoFlushStateBeforeQueue = null), (yn = (qe = e.__panoDomPreview) == null ? void 0 : qe.requestDraw) == null || yn.call(qe), (Br = (Zt = e.graph) == null ? void 0 : Zt.setDirtyCanvas) == null || Br.call(Zt, !0, !0), (cd = (wi = (Si = qn) == null ? void 0 : Si.canvas) == null ? void 0 : wi.setDirty) == null || cd.call(wi, !0, !0), zt(), X.cancel(), Ze(), $t(), Q.dispose(), mt(!1), window.removeEventListener("keydown", uo, !0), window.removeEventListener("keydown", co, !0), window.removeEventListener("keydown", wa, !0), window.removeEventListener("keyup", gr, !0), window.removeEventListener("keydown", St, !0), window.removeEventListener("keyup", St, !0), window.removeEventListener("blur", xa), window.removeEventListener("keydown", po, !0), window.removeEventListener("dragenter", ho, !0), window.removeEventListener("dragover", ka, !0), window.removeEventListener("dragleave", mo, !0), window.removeEventListener("drop", Ma, !0), !n && t === "stickers" && (e.onConnectionsChange === nn && (e.onConnectionsChange = ht), Kt()), me.unmount(), G.remove(), Na(), Jt = null, !0;
    })().catch((De) => (console.error("[PanoramaCutoutSync] closeEditor failed", De), Jt = null, !1)), Jt);
  }
  window.addEventListener("keydown", uo, !0), window.addEventListener("keydown", co, !0), window.addEventListener("keydown", wa, !0), window.addEventListener("keyup", gr, !0), window.addEventListener("keydown", St, !0), window.addEventListener("keyup", St, !0), window.addEventListener("blur", xa), window.addEventListener("keydown", po, !0), ee.addEventListener("pointerdown", (De) => {
    De.target === ee && Ct();
  });
  function Ft(De, qe, { rollbackState: yn = !1 } = {}) {
    let Zt = "";
    try {
      yn && (Zt = JSON.stringify(P)), qe();
    } catch (Br) {
      if (Zt)
        try {
          const Si = JSON.parse(Zt);
          Object.keys(P).forEach((wi) => delete P[wi]), Object.assign(P, Si), n || He();
        } catch (Si) {
          console.error(`[PanoramaStickers] editor boot step "${De}" rollback failed`, Si);
        }
      ce.stageWarningDetail = `boot:${De}`, console.error(`[PanoramaStickers] editor boot step "${De}" failed`, Br);
    }
  }
  Ft("cutout-focus", Ce), !n && t === "stickers" && Ft("external-sticker-sync", () => Pa("open"), { rollbackState: !0 }), er().catch((De) => {
    ce.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', De);
  }), Ft("history", yl), Ft("undo-redo", vi), Ft("paint-ui", wt), Ft("side-panel", bo), Ft("look-at-frame", Xe), Ft("video-source", go), Ft("canvas-size", Qe), Ft("cursor", () => yo(Me.pointerPos)), Ie(), ke();
}
qn.registerExtension(bS({
  app: qn,
  openEditor: FN,
  attachStickers: Ow,
  attachCutout: Fw,
  attachPreview: Ew,
  restoreOutput: bw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: BM
}));
