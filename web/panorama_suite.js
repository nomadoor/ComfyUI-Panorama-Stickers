import * as Ya from "../../scripts/app.js";
import { app as qn } from "../../scripts/app.js";
import { api as sn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Qc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const At = {}, Li = [], ur = () => {
}, Zf = () => !1, Bs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Us = (e) => e.startsWith("onUpdate:"), dn = Object.assign, eu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, kg = Object.prototype.hasOwnProperty, bt = (e, t) => kg.call(e, t), tt = Array.isArray, Vi = (e) => ca(e) === "[object Map]", Qf = (e) => ca(e) === "[object Set]", cd = (e) => ca(e) === "[object Date]", it = (e) => typeof e == "function", Kt = (e) => typeof e == "string", hr = (e) => typeof e == "symbol", Pt = (e) => e !== null && typeof e == "object", ep = (e) => (Pt(e) || it(e)) && it(e.then) && it(e.catch), tp = Object.prototype.toString, ca = (e) => tp.call(e), Mg = (e) => ca(e).slice(8, -1), np = (e) => ca(e) === "[object Object]", tu = (e) => Kt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lo = /* @__PURE__ */ Qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ys = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Pg = /-\w/g, hn = Ys(
  (e) => e.replace(Pg, (t) => t.slice(1).toUpperCase())
), Ng = /\B([A-Z])/g, mi = Ys(
  (e) => e.replace(Ng, "-$1").toLowerCase()
), qs = Ys((e) => e.charAt(0).toUpperCase() + e.slice(1)), bl = Ys(
  (e) => e ? `on${qs(e)}` : ""
), lr = (e, t) => !Object.is(e, t), qa = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, rp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, nu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ud;
const Xs = () => ud || (ud = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Kt(n) ? Eg(n) : Mt(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Kt(e) || Pt(e))
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
  if (Kt(e))
    t = e;
  else if (tt(e))
    for (let r = 0; r < e.length; r++) {
      const n = ct(e[r]);
      n && (t += n + " ");
    }
  else if (Pt(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Og = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fg = /* @__PURE__ */ Qc(Og);
function ip(e) {
  return !!e || e === "";
}
function Tg(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = ru(e[n], t[n]);
  return r;
}
function ru(e, t) {
  if (e === t) return !0;
  let r = cd(e), n = cd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = hr(e), n = hr(t), r || n)
    return e === t;
  if (r = tt(e), n = tt(t), r || n)
    return r && n ? Tg(e, t) : !1;
  if (r = Pt(e), n = Pt(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const a in e) {
      const s = e.hasOwnProperty(a), l = t.hasOwnProperty(a);
      if (s && !l || !s && l || !ru(e[a], t[a]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const op = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Kt(e) ? e : e == null ? "" : tt(e) || Pt(e) && (e.toString === tp || !it(e.toString)) ? op(e) ? rt(e.value) : JSON.stringify(e, ap, 2) : String(e), ap = (e, t) => op(t) ? ap(e, t.value) : Vi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[vl(n, o) + " =>"] = i, r),
    {}
  )
} : Qf(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => vl(r))
} : hr(t) ? vl(t) : Pt(t) && !tt(t) && !np(t) ? String(t) : t, vl = (e, t = "") => {
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
let Et;
const _l = /* @__PURE__ */ new WeakSet();
class sp {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || cp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dd(this), up(this);
    const t = Et, r = Xn;
    Et = this, Xn = !0;
    try {
      return this.fn();
    } finally {
      dp(this), Et = t, Xn = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        au(t);
      this.deps = this.depsTail = void 0, dd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _l.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ic(this) && this.run();
  }
  get dirty() {
    return ic(this);
  }
}
let lp = 0, Vo, Ro;
function cp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ro, Ro = e;
    return;
  }
  e.next = Vo, Vo = e;
}
function iu() {
  lp++;
}
function ou() {
  if (--lp > 0)
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
function up(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function dp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), au(n), Vg(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function ic(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Uo) || (e.globalVersion = Uo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ic(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Et, n = Xn;
  Et = e, Xn = !0;
  try {
    up(e);
    const i = e.fn(e._value);
    (t.version === 0 || lr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Et = r, Xn = n, dp(e), e.flags &= -3;
  }
}
function au(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      au(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Vg(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Xn = !0;
const pp = [];
function Ir() {
  pp.push(Xn), Xn = !1;
}
function Er() {
  const e = pp.pop();
  Xn = e === void 0 ? !0 : e;
}
function dd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Et;
    Et = void 0;
    try {
      t();
    } finally {
      Et = r;
    }
  }
}
let Uo = 0;
class Rg {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class su {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Et || !Xn || Et === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Et)
      r = this.activeLink = new Rg(Et, this), Et.deps ? (r.prevDep = Et.depsTail, Et.depsTail.nextDep = r, Et.depsTail = r) : Et.deps = Et.depsTail = r, hp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Et.depsTail, r.nextDep = void 0, Et.depsTail.nextDep = r, Et.depsTail = r, Et.deps === r && (Et.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Uo++, this.notify(t);
  }
  notify(t) {
    iu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      ou();
    }
  }
}
function hp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        hp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const oc = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ Symbol(
  ""
), ac = /* @__PURE__ */ Symbol(
  ""
), Yo = /* @__PURE__ */ Symbol(
  ""
);
function on(e, t, r) {
  if (Xn && Et) {
    let n = oc.get(e);
    n || oc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new su()), i.map = n, i.key = r), i.track();
  }
}
function kr(e, t, r, n, i, o) {
  const a = oc.get(e);
  if (!a) {
    Uo++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (iu(), t === "clear")
    a.forEach(s);
  else {
    const l = tt(e), d = l && tu(r);
    if (l && r === "length") {
      const u = Number(n);
      a.forEach((c, f) => {
        (f === "length" || f === Yo || !hr(f) && f >= u) && s(c);
      });
    } else
      switch ((r !== void 0 || a.has(void 0)) && s(a.get(r)), d && s(a.get(Yo)), t) {
        case "add":
          l ? d && s(a.get("length")) : (s(a.get(oi)), Vi(e) && s(a.get(ac)));
          break;
        case "delete":
          l || (s(a.get(oi)), Vi(e) && s(a.get(ac)));
          break;
        case "set":
          Vi(e) && s(a.get(oi));
          break;
      }
  }
  ou();
}
function ki(e) {
  const t = /* @__PURE__ */ yt(e);
  return t === e ? t : (on(t, "iterate", Yo), /* @__PURE__ */ zn(e) ? t : t.map(Qn));
}
function Js(e) {
  return on(e = /* @__PURE__ */ yt(e), "iterate", Yo), e;
}
function or(e, t) {
  return /* @__PURE__ */ Or(e) ? Bi(/* @__PURE__ */ ai(e) ? Qn(t) : t) : Qn(t);
}
const $g = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sl(this, Symbol.iterator, (e) => or(this, e));
  },
  concat(...e) {
    return ki(this).concat(
      ...e.map((t) => tt(t) ? ki(t) : t)
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
    return ki(this).join(e);
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
    return fd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fd(this, "reduceRight", e, t);
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
    return ki(this).toReversed();
  },
  toSorted(e) {
    return ki(this).toSorted(e);
  },
  toSpliced(...e) {
    return ki(this).toSpliced(...e);
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
function fd(e, t, r, n) {
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
  on(n, "iterate", Yo);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ uu(r[0]) ? (r[0] = /* @__PURE__ */ yt(r[0]), n[t](...r)) : i;
}
function vo(e, t, r = []) {
  Ir(), iu();
  const n = (/* @__PURE__ */ yt(e))[t].apply(e, r);
  return ou(), Er(), n;
}
const jg = /* @__PURE__ */ Qc("__proto__,__v_isRef,__isVue"), mp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hr)
);
function Hg(e) {
  hr(e) || (e = String(e));
  const t = /* @__PURE__ */ yt(this);
  return on(t, "has", e), t.hasOwnProperty(e);
}
class gp {
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
      return n === (i ? o ? Zg : _p : o ? vp : bp).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
      /* @__PURE__ */ cn(t) ? t : n
    );
    if ((hr(r) ? mp.has(r) : jg(r)) || (i || on(t, "get", r), o))
      return s;
    if (/* @__PURE__ */ cn(s)) {
      const l = a && tu(r) ? s : s.value;
      return i && Pt(l) ? /* @__PURE__ */ lc(l) : l;
    }
    return Pt(s) ? i ? /* @__PURE__ */ lc(s) : /* @__PURE__ */ Zi(s) : s;
  }
}
class yp extends gp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const a = tt(t) && tu(r);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ Or(o);
      if (!/* @__PURE__ */ zn(n) && !/* @__PURE__ */ Or(n) && (o = /* @__PURE__ */ yt(o), n = /* @__PURE__ */ yt(n)), !a && /* @__PURE__ */ cn(o) && !/* @__PURE__ */ cn(n))
        return d || (o.value = n), !0;
    }
    const s = a ? Number(r) < t.length : bt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ cn(t) ? t : i
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
    return (!hr(r) || !mp.has(r)) && on(t, "has", r), n;
  }
  ownKeys(t) {
    return on(
      t,
      "iterate",
      tt(t) ? "length" : oi
    ), Reflect.ownKeys(t);
  }
}
class Gg extends gp {
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
const Wg = /* @__PURE__ */ new yp(), Kg = /* @__PURE__ */ new Gg(), Bg = /* @__PURE__ */ new yp(!0);
const sc = (e) => e, Ea = (e) => Reflect.getPrototypeOf(e);
function Ug(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ yt(i), a = Vi(o), s = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, d = i[e](...n), u = r ? sc : t ? Bi : Qn;
    return !t && on(
      o,
      "iterate",
      l ? ac : oi
    ), dn(
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
      e || (lr(i, s) && on(a, "get", i), on(a, "get", s));
      const { has: l } = Ea(a), d = t ? sc : e ? Bi : Qn;
      if (l.call(a, i))
        return d(o.get(i));
      if (l.call(a, s))
        return d(o.get(s));
      o !== a && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && on(/* @__PURE__ */ yt(i), "iterate", oi), i.size;
    },
    has(i) {
      const o = this.__v_raw, a = /* @__PURE__ */ yt(o), s = /* @__PURE__ */ yt(i);
      return e || (lr(i, s) && on(a, "has", i), on(a, "has", s)), i === s ? o.has(i) : o.has(i) || o.has(s);
    },
    forEach(i, o) {
      const a = this, s = a.__v_raw, l = /* @__PURE__ */ yt(s), d = t ? sc : e ? Bi : Qn;
      return !e && on(l, "iterate", oi), s.forEach((u, c) => i.call(o, d(u), d(c), a));
    }
  };
  return dn(
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
function lu(e, t) {
  const r = Yg(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    bt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const qg = {
  get: /* @__PURE__ */ lu(!1, !1)
}, Xg = {
  get: /* @__PURE__ */ lu(!1, !0)
}, Jg = {
  get: /* @__PURE__ */ lu(!0, !1)
};
const bp = /* @__PURE__ */ new WeakMap(), vp = /* @__PURE__ */ new WeakMap(), _p = /* @__PURE__ */ new WeakMap(), Zg = /* @__PURE__ */ new WeakMap();
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
function Zi(e) {
  return /* @__PURE__ */ Or(e) ? e : cu(
    e,
    !1,
    Wg,
    qg,
    bp
  );
}
// @__NO_SIDE_EFFECTS__
function t0(e) {
  return cu(
    e,
    !1,
    Bg,
    Xg,
    vp
  );
}
// @__NO_SIDE_EFFECTS__
function lc(e) {
  return cu(
    e,
    !0,
    Kg,
    Jg,
    _p
  );
}
function cu(e, t, r, n, i) {
  if (!Pt(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function ai(e) {
  return /* @__PURE__ */ Or(e) ? /* @__PURE__ */ ai(e.__v_raw) : !!(e && e.__v_isReactive);
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
function uu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ yt(t) : e;
}
function n0(e) {
  return !bt(e, "__v_skip") && Object.isExtensible(e) && rp(e, "__v_skip", !0), e;
}
const Qn = (e) => Pt(e) ? /* @__PURE__ */ Zi(e) : e, Bi = (e) => Pt(e) ? /* @__PURE__ */ lc(e) : e;
// @__NO_SIDE_EFFECTS__
function cn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return Sp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return Sp(e, !0);
}
function Sp(e, t) {
  return /* @__PURE__ */ cn(e) ? e : new r0(e, t);
}
class r0 {
  constructor(t, r) {
    this.dep = new su(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ yt(t), this._value = r ? t : Qn(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ zn(t) || /* @__PURE__ */ Or(t);
    t = n ? t : /* @__PURE__ */ yt(t), lr(t, r) && (this._rawValue = t, this._value = n ? t : Qn(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ cn(e) ? e.value : e;
}
const i0 = {
  get: (e, t, r) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ cn(i) && !/* @__PURE__ */ cn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function wp(e) {
  return /* @__PURE__ */ ai(e) ? e : new Proxy(e, i0);
}
class o0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new su(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Et !== this)
      return cp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fp(this), t && (t.version = this.dep.version), this._value;
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
let ei;
function s0(e, t = !1, r = ei) {
  if (r) {
    let n = ps.get(r);
    n || ps.set(r, n = []), n.push(e);
  }
}
function l0(e, t, r = At) {
  const { immediate: n, deep: i, once: o, scheduler: a, augmentJob: s, call: l } = r, d = (D) => i ? D : /* @__PURE__ */ zn(D) || i === !1 || i === 0 ? Mr(D, 1) : Mr(D);
  let u, c, f, p, m = !1, b = !1;
  if (/* @__PURE__ */ cn(e) ? (c = () => e.value, m = /* @__PURE__ */ zn(e)) : /* @__PURE__ */ ai(e) ? (c = () => d(e), m = !0) : tt(e) ? (b = !0, m = e.some((D) => /* @__PURE__ */ ai(D) || /* @__PURE__ */ zn(D)), c = () => e.map((D) => {
    if (/* @__PURE__ */ cn(D))
      return D.value;
    if (/* @__PURE__ */ ai(D))
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
    const D = ei;
    ei = u;
    try {
      return l ? l(e, 3, [p]) : e(p);
    } finally {
      ei = D;
    }
  } : c = ur, t && i) {
    const D = c, P = i === !0 ? 1 / 0 : i;
    c = () => Mr(D(), P);
  }
  const v = Lg(), F = () => {
    u.stop(), v && v.active && eu(v.effects, u);
  };
  if (o && t) {
    const D = t;
    t = (...P) => {
      D(...P), F();
    };
  }
  let U = b ? new Array(e.length).fill(Fa) : Fa;
  const H = (D) => {
    if (!(!(u.flags & 1) || !u.dirty && !D))
      if (t) {
        const P = u.run();
        if (i || m || (b ? P.some((W, R) => lr(W, U[R])) : lr(P, U))) {
          f && f();
          const W = ei;
          ei = u;
          try {
            const R = [
              P,
              // pass undefined as the old value when it's changed for the first time
              U === Fa ? void 0 : b && U[0] === Fa ? [] : U,
              p
            ];
            U = P, l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            ei = W;
          }
        }
      } else
        u.run();
  };
  return s && s(H), u = new sp(c), u.scheduler = a ? () => a(H, !1) : H, p = (D) => s0(D, !1, u), f = u.onStop = () => {
    const D = ps.get(u);
    if (D) {
      if (l)
        l(D, 4);
      else
        for (const P of D) P();
      ps.delete(u);
    }
  }, t ? n ? H(!0) : U = u.run() : a ? a(H.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function Mr(e, t = 1 / 0, r) {
  if (t <= 0 || !Pt(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ cn(e))
    Mr(e.value, t, r);
  else if (tt(e))
    for (let n = 0; n < e.length; n++)
      Mr(e[n], t, r);
  else if (Qf(e) || Vi(e))
    e.forEach((n) => {
      Mr(n, t, r);
    });
  else if (np(e)) {
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
    return i && ep(i) && i.catch((o) => {
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
const pn = [];
let ir = -1;
const Ri = [];
let Rr = null, Ni = 0;
const xp = /* @__PURE__ */ Promise.resolve();
let hs = null;
function Qs(e) {
  const t = hs || xp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function u0(e) {
  let t = ir + 1, r = pn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = pn[n], o = qo(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function du(e) {
  if (!(e.flags & 1)) {
    const t = qo(e), r = pn[pn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qo(r) ? pn.push(e) : pn.splice(u0(t), 0, e), e.flags |= 1, kp();
  }
}
function kp() {
  hs || (hs = xp.then(Pp));
}
function d0(e) {
  tt(e) ? Ri.push(...e) : Rr && e.id === -1 ? Rr.splice(Ni + 1, 0, e) : e.flags & 1 || (Ri.push(e), e.flags |= 1), kp();
}
function pd(e, t, r = ir + 1) {
  for (; r < pn.length; r++) {
    const n = pn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      pn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Mp(e) {
  if (Ri.length) {
    const t = [...new Set(Ri)].sort(
      (r, n) => qo(r) - qo(n)
    );
    if (Ri.length = 0, Rr) {
      Rr.push(...t);
      return;
    }
    for (Rr = t, Ni = 0; Ni < Rr.length; Ni++) {
      const r = Rr[Ni];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Rr = null, Ni = 0;
  }
}
const qo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pp(e) {
  try {
    for (ir = 0; ir < pn.length; ir++) {
      const t = pn[ir];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ua(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ir < pn.length; ir++) {
      const t = pn[ir];
      t && (t.flags &= -2);
    }
    ir = -1, pn.length = 0, Mp(), hs = null, (pn.length || Ri.length) && Pp();
  }
}
let Fn = null, Np = null;
function ms(e) {
  const t = Fn;
  return Fn = e, Np = e && e.type.__scopeId || null, t;
}
function Cp(e, t = Fn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Md(-1);
    const o = ms(t);
    let a;
    try {
      a = e(...i);
    } finally {
      ms(o), n._d && Md(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Cr(e, t) {
  if (Fn === null)
    return e;
  const r = il(Fn), n = e.dirs || (e.dirs = []);
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
function Yr(e, t, r, n) {
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
  if (an) {
    let r = an.provides;
    const n = an.parent && an.parent.provides;
    n === r && (r = an.provides = Object.create(n)), r[e] = t;
  }
}
function Xa(e, t, r = !1) {
  const n = uy();
  if (n || $i) {
    let i = $i ? $i._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && it(t) ? t.call(n && n.proxy) : t;
  }
}
const p0 = /* @__PURE__ */ Symbol.for("v-scx"), h0 = () => Xa(p0);
function si(e, t, r) {
  return Ap(e, t, r);
}
function Ap(e, t, r = At) {
  const { immediate: n, deep: i, flush: o, once: a } = r, s = dn({}, r), l = t && n || !t && o !== "post";
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
  const u = an;
  s.call = (p, m, b) => mr(p, u, m, b);
  let c = !1;
  o === "post" ? s.scheduler = (p) => {
    vn(p, u && u.suspense);
  } : o !== "sync" && (c = !0, s.scheduler = (p, m) => {
    m ? p() : du(p);
  }), s.augmentJob = (p) => {
    t && (p.flags |= 4), c && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const f = l0(e, t, s);
  return Jo && (d ? d.push(f) : l && f()), f;
}
function m0(e, t, r) {
  const n = this.proxy, i = Kt(e) ? e.includes(".") ? Ip(n, e) : () => n[e] : e.bind(n, n);
  let o;
  it(t) ? o = t : (o = t.handler, r = t);
  const a = fa(this), s = Ap(i, o.bind(n), r);
  return a(), s;
}
function Ip(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const g0 = /* @__PURE__ */ Symbol("_vte"), y0 = (e) => e.__isTeleport, b0 = /* @__PURE__ */ Symbol("_leaveCb");
function fu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ep(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const gs = /* @__PURE__ */ new WeakMap();
function $o(e, t, r, n, i = !1) {
  if (tt(e)) {
    e.forEach(
      (b, v) => $o(
        b,
        t && (tt(t) ? t[v] : t),
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
  const o = n.shapeFlag & 4 ? il(n.component) : n.el, a = i ? null : o, { i: s, r: l } = e, d = t && t.r, u = s.refs === At ? s.refs = {} : s.refs, c = s.setupState, f = /* @__PURE__ */ yt(c), p = c === At ? Zf : (b) => hd(u, b) ? !1 : bt(f, b), m = (b, v) => !(v && hd(u, v));
  if (d != null && d !== l) {
    if (md(t), Kt(d))
      u[d] = null, p(d) && (c[d] = null);
    else if (/* @__PURE__ */ cn(d)) {
      const b = t;
      m(d, b.k) && (d.value = null), b.k && (u[b.k] = null);
    }
  }
  if (it(l))
    ua(l, s, 12, [a, u]);
  else {
    const b = Kt(l), v = /* @__PURE__ */ cn(l);
    if (b || v) {
      const F = () => {
        if (e.f) {
          const U = b ? p(l) ? c[l] : u[l] : m() || !e.k ? l.value : u[e.k];
          if (i)
            tt(U) && eu(U, o);
          else if (tt(U))
            U.includes(o) || U.push(o);
          else if (b)
            u[l] = [o], p(l) && (c[l] = u[l]);
          else {
            const H = [o];
            m(l, e.k) && (l.value = H), e.k && (u[e.k] = H);
          }
        } else b ? (u[l] = a, p(l) && (c[l] = a)) : v && (m(l, e.k) && (l.value = a), e.k && (u[e.k] = a));
      };
      if (a) {
        const U = () => {
          F(), gs.delete(e);
        };
        U.id = -1, gs.set(e, U), vn(U, r);
      } else
        md(e), F();
    }
  }
}
function md(e) {
  const t = gs.get(e);
  t && (t.flags |= 8, gs.delete(e));
}
Xs().requestIdleCallback;
Xs().cancelIdleCallback;
const zo = (e) => !!e.type.__asyncLoader, Op = (e) => e.type.__isKeepAlive;
function v0(e, t) {
  Fp(e, "a", t);
}
function _0(e, t) {
  Fp(e, "da", t);
}
function Fp(e, t, r = an) {
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
      Op(i.parent.vnode) && S0(n, t, r, i), i = i.parent;
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
  Tp(() => {
    eu(n[t], i);
  }, r);
}
function el(e, t, r = an, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...a) => {
      Ir();
      const s = fa(r), l = mr(t, r, e, a);
      return s(), Er(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Fr = (e) => (t, r = an) => {
  (!Jo || e === "sp") && el(e, (...n) => t(...n), r);
}, w0 = Fr("bm"), tl = Fr("m"), x0 = Fr(
  "bu"
), k0 = Fr("u"), da = Fr(
  "bum"
), Tp = Fr("um"), M0 = Fr(
  "sp"
), P0 = Fr("rtg"), N0 = Fr("rtc");
function C0(e, t = an) {
  el("ec", e, t);
}
const A0 = "components", Dp = /* @__PURE__ */ Symbol.for("v-ndc");
function I0(e) {
  return Kt(e) ? E0(A0, e, !1) || e : e || Dp;
}
function E0(e, t, r = !0, n = !1) {
  const i = Fn || an;
  if (i) {
    const o = i.type;
    {
      const s = my(
        o,
        !1
      );
      if (s && (s === t || s === hn(t) || s === qs(hn(t))))
        return o;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      gd(i[e] || o[e], t) || // global registration
      gd(i.appContext[e], t)
    );
    return !a && n ? o : a;
  }
}
function gd(e, t) {
  return e && (e[t] || e[hn(t)] || e[qs(hn(t))]);
}
function xt(e, t, r, n) {
  let i;
  const o = r, a = tt(e);
  if (a || Kt(e)) {
    const s = a && /* @__PURE__ */ ai(e);
    let l = !1, d = !1;
    s && (l = !/* @__PURE__ */ zn(e), d = /* @__PURE__ */ Or(e), e = Js(e)), i = new Array(e.length);
    for (let u = 0, c = e.length; u < c; u++)
      i[u] = t(
        l ? d ? Bi(Qn(e[u])) : Qn(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, o);
  } else if (Pt(e))
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
const cc = (e) => e ? nh(e) ? il(e) : cc(e.parent) : null, jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cc(e.parent),
    $root: (e) => cc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      du(e.update);
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
        uc && (a[t] = 0);
      }
    }
    const d = jo[t];
    let u, c;
    if (d)
      return t === "$attrs" && on(e.attrs, "get", ""), d(e);
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
function yd(e) {
  return tt(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let uc = !0;
function F0(e) {
  const t = Vp(e), r = e.proxy, n = e.ctx;
  uc = !1, t.beforeCreate && bd(t.beforeCreate, e, "bc");
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
    activated: b,
    deactivated: v,
    beforeDestroy: F,
    beforeUnmount: U,
    destroyed: H,
    unmounted: D,
    render: P,
    renderTracked: W,
    renderTriggered: R,
    errorCaptured: ee,
    serverPrefetch: ne,
    // public API
    expose: le,
    inheritAttrs: E,
    // assets
    components: G,
    directives: re,
    filters: pe
  } = t;
  if (d && T0(d, n, null), a)
    for (const Z in a) {
      const w = a[Z];
      it(w) && (n[Z] = w.bind(r));
    }
  if (i) {
    const Z = i.call(r, r);
    Pt(Z) && (e.data = /* @__PURE__ */ Zi(Z));
  }
  if (uc = !0, o)
    for (const Z in o) {
      const w = o[Z], K = it(w) ? w.bind(r, r) : it(w.get) ? w.get.bind(r, r) : ur, de = !it(w) && it(w.set) ? w.set.bind(r) : ur, q = st({
        get: K,
        set: de
      });
      Object.defineProperty(n, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => q.value,
        set: (ue) => q.value = ue
      });
    }
  if (s)
    for (const Z in s)
      Lp(s[Z], n, r, Z);
  if (l) {
    const Z = it(l) ? l.call(r) : l;
    Reflect.ownKeys(Z).forEach((w) => {
      f0(w, Z[w]);
    });
  }
  u && bd(u, e, "c");
  function me(Z, w) {
    tt(w) ? w.forEach((K) => Z(K.bind(r))) : w && Z(w.bind(r));
  }
  if (me(w0, c), me(tl, f), me(x0, p), me(k0, m), me(v0, b), me(_0, v), me(C0, ee), me(N0, W), me(P0, R), me(da, U), me(Tp, D), me(M0, ne), tt(le))
    if (le.length) {
      const Z = e.exposed || (e.exposed = {});
      le.forEach((w) => {
        Object.defineProperty(Z, w, {
          get: () => r[w],
          set: (K) => r[w] = K,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === ur && (e.render = P), E != null && (e.inheritAttrs = E), G && (e.components = G), re && (e.directives = re), ne && Ep(e);
}
function T0(e, t, r = ur) {
  tt(e) && (e = dc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Pt(i) ? "default" in i ? o = Xa(
      i.from || n,
      i.default,
      !0
    ) : o = Xa(i.from || n) : o = Xa(i), /* @__PURE__ */ cn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (a) => o.value = a
    }) : t[n] = o;
  }
}
function bd(e, t, r) {
  mr(
    tt(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Lp(e, t, r, n) {
  let i = n.includes(".") ? Ip(r, n) : () => r[n];
  if (Kt(e)) {
    const o = t[e];
    it(o) && si(i, o);
  } else if (it(e))
    si(i, e.bind(r));
  else if (Pt(e))
    if (tt(e))
      e.forEach((o) => Lp(o, t, r, n));
    else {
      const o = it(e.handler) ? e.handler.bind(r) : t[e.handler];
      it(o) && si(i, o, e);
    }
}
function Vp(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: a }
  } = e.appContext, s = o.get(t);
  let l;
  return s ? l = s : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (d) => ys(l, d, a, !0)
  ), ys(l, t, a)), Pt(t) && o.set(t, l), l;
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
  data: vd,
  props: _d,
  emits: _d,
  // objects
  methods: No,
  computed: No,
  // lifecycle
  beforeCreate: fn,
  created: fn,
  beforeMount: fn,
  mounted: fn,
  beforeUpdate: fn,
  updated: fn,
  beforeDestroy: fn,
  beforeUnmount: fn,
  destroyed: fn,
  unmounted: fn,
  activated: fn,
  deactivated: fn,
  errorCaptured: fn,
  serverPrefetch: fn,
  // assets
  components: No,
  directives: No,
  // watch
  watch: V0,
  // provide / inject
  provide: vd,
  inject: L0
};
function vd(e, t) {
  return t ? e ? function() {
    return dn(
      it(e) ? e.call(this, this) : e,
      it(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function L0(e, t) {
  return No(dc(e), dc(t));
}
function dc(e) {
  if (tt(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function fn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function No(e, t) {
  return e ? dn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _d(e, t) {
  return e ? tt(e) && tt(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : dn(
    /* @__PURE__ */ Object.create(null),
    yd(e),
    yd(t ?? {})
  ) : t;
}
function V0(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = dn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = fn(e[n], t[n]);
  return r;
}
function Rp() {
  return {
    app: null,
    config: {
      isNativeTag: Zf,
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
    it(n) || (n = dn({}, n)), i != null && !Pt(i) && (i = null);
    const o = Rp(), a = /* @__PURE__ */ new WeakSet(), s = [];
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
        const c = $i;
        $i = d;
        try {
          return u();
        } finally {
          $i = c;
        }
      }
    };
    return d;
  };
}
let $i = null;
const z0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${hn(t)}Modifiers`] || e[`${mi(t)}Modifiers`];
function j0(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || At;
  let i = r;
  const o = t.startsWith("update:"), a = o && z0(n, t.slice(7));
  a && (a.trim && (i = r.map((u) => Kt(u) ? u.trim() : u)), a.number && (i = r.map(nu)));
  let s, l = n[s = bl(t)] || // also try camelCase event handler (#2249)
  n[s = bl(hn(t))];
  !l && o && (l = n[s = bl(mi(t))]), l && mr(
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
function $p(e, t, r = !1) {
  const n = r ? H0 : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let a = {}, s = !1;
  if (!it(e)) {
    const l = (d) => {
      const u = $p(d, t, !0);
      u && (s = !0, dn(a, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !s ? (Pt(e) && n.set(e, null), null) : (tt(o) ? o.forEach((l) => a[l] = null) : dn(a, o), Pt(e) && n.set(e, a), a);
}
function nl(e, t) {
  return !e || !Bs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), bt(e, t[0].toLowerCase() + t.slice(1)) || bt(e, mi(t)) || bt(e, t));
}
function Sd(e) {
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
    inheritAttrs: b
  } = e, v = ms(e);
  let F, U;
  try {
    if (r.shapeFlag & 4) {
      const D = i || n, P = D;
      F = ar(
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
      F = ar(
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
    Ho.length = 0, Zs(D, e, 1), F = Ke(jr);
  }
  let H = F;
  if (U && b !== !1) {
    const D = Object.keys(U), { shapeFlag: P } = H;
    D.length && P & 7 && (o && D.some(Us) && (U = W0(
      U,
      o
    )), H = Ui(H, U, !1, !0));
  }
  return r.dirs && (H = Ui(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(r.dirs) : r.dirs), r.transition && fu(H, r.transition), F = H, ms(v), F;
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
      return n ? wd(n, a, d) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const f = u[c];
        if (zp(a, n, f) && !nl(d, f))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : n === a ? !1 : n ? a ? wd(n, a, d) : !0 : !!a;
  return !1;
}
function wd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (zp(t, e, o) && !nl(r, o))
      return !0;
  }
  return !1;
}
function zp(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Pt(n) && Pt(i) ? !ru(n, i) : n !== i;
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
const jp = {}, Hp = () => Object.create(jp), Gp = (e) => Object.getPrototypeOf(e) === jp;
function U0(e, t, r, n = !1) {
  const i = {}, o = Hp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wp(e, t, i, o);
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
            const m = hn(f);
            i[m] = fc(
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
    Wp(e, t, i, o) && (d = !0);
    let u;
    for (const c in s)
      (!t || // for camelCase
      !bt(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = mi(c)) === c || !bt(t, u))) && (l ? r && // for camelCase
      (r[c] !== void 0 || // for kebab-case
      r[u] !== void 0) && (i[c] = fc(
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
function Wp(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let a = !1, s;
  if (t)
    for (let l in t) {
      if (Lo(l))
        continue;
      const d = t[l];
      let u;
      i && bt(i, u = hn(l)) ? !o || !o.includes(u) ? r[u] = d : (s || (s = {}))[u] = d : nl(e.emitsOptions, l) || (!(l in n) || d !== n[l]) && (n[l] = d, a = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ yt(r), d = s || At;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      r[c] = fc(
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
function fc(e, t, r, n, i, o) {
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
    ] && (n === "" || n === mi(r)) && (n = !0));
  }
  return n;
}
const q0 = /* @__PURE__ */ new WeakMap();
function Kp(e, t, r = !1) {
  const n = r ? q0 : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, a = {}, s = [];
  let l = !1;
  if (!it(e)) {
    const u = (c) => {
      l = !0;
      const [f, p] = Kp(c, t, !0);
      dn(a, f), p && s.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !l)
    return Pt(e) && n.set(e, Li), Li;
  if (tt(o))
    for (let u = 0; u < o.length; u++) {
      const c = hn(o[u]);
      xd(c) && (a[c] = At);
    }
  else if (o)
    for (const u in o) {
      const c = hn(u);
      if (xd(c)) {
        const f = o[u], p = a[c] = tt(f) || it(f) ? { type: f } : dn({}, f), m = p.type;
        let b = !1, v = !0;
        if (tt(m))
          for (let F = 0; F < m.length; ++F) {
            const U = m[F], H = it(U) && U.name;
            if (H === "Boolean") {
              b = !0;
              break;
            } else H === "String" && (v = !1);
          }
        else
          b = it(m) && m.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = b, p[
          1
          /* shouldCastTrue */
        ] = v, (b || bt(p, "default")) && s.push(c);
      }
    }
  const d = [a, s];
  return Pt(e) && n.set(e, d), d;
}
function xd(e) {
  return e[0] !== "$" && !Lo(e);
}
const pu = (e) => e === "_" || e === "_ctx" || e === "$stable", hu = (e) => tt(e) ? e.map(ar) : [ar(e)], X0 = (e, t, r) => {
  if (t._n)
    return t;
  const n = Cp((...i) => hu(t(...i)), r);
  return n._c = !1, n;
}, Bp = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (pu(i)) continue;
    const o = e[i];
    if (it(o))
      t[i] = X0(i, o, n);
    else if (o != null) {
      const a = hu(o);
      t[i] = () => a;
    }
  }
}, Up = (e, t) => {
  const r = hu(t);
  e.slots.default = () => r;
}, Yp = (e, t, r) => {
  for (const n in t)
    (r || !pu(n)) && (e[n] = t[n]);
}, J0 = (e, t, r) => {
  const n = e.slots = Hp();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Yp(n, t, r), r && rp(n, "_", i, !0)) : Bp(t, n);
  } else t && Up(e, t);
}, Z0 = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, a = At;
  if (n.shapeFlag & 32) {
    const s = t._;
    s ? r && s === 1 ? o = !1 : Yp(i, t, r) : (o = !t.$stable, Bp(t, i)), a = t;
  } else t && (Up(e, t), a = { default: 1 });
  if (o)
    for (const s in i)
      !pu(s) && a[s] == null && delete i[s];
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
  } = e, b = (y, S, V, Y = null, x = null, M = null, L = void 0, k = null, N = !!S.dynamicChildren) => {
    if (y === S)
      return;
    y && !_o(y, S) && (Y = oe(y), ue(y, x, M, !0), y = null), S.patchFlag === -2 && (N = !1, S.dynamicChildren = null);
    const { type: C, ref: B, shapeFlag: X } = S;
    switch (C) {
      case rl:
        v(y, S, V, Y);
        break;
      case jr:
        F(y, S, V, Y);
        break;
      case Ml:
        y == null && U(S, V, Y, L);
        break;
      case Ze:
        G(
          y,
          S,
          V,
          Y,
          x,
          M,
          L,
          k,
          N
        );
        break;
      default:
        X & 1 ? P(
          y,
          S,
          V,
          Y,
          x,
          M,
          L,
          k,
          N
        ) : X & 6 ? re(
          y,
          S,
          V,
          Y,
          x,
          M,
          L,
          k,
          N
        ) : (X & 64 || X & 128) && C.process(
          y,
          S,
          V,
          Y,
          x,
          M,
          L,
          k,
          N,
          I
        );
    }
    B != null && x ? $o(B, y && y.ref, M, S || y, !S) : B == null && y && y.ref != null && $o(y.ref, null, M, y, !0);
  }, v = (y, S, V, Y) => {
    if (y == null)
      n(
        S.el = s(S.children),
        V,
        Y
      );
    else {
      const x = S.el = y.el;
      S.children !== y.children && d(x, S.children);
    }
  }, F = (y, S, V, Y) => {
    y == null ? n(
      S.el = l(S.children || ""),
      V,
      Y
    ) : S.el = y.el;
  }, U = (y, S, V, Y) => {
    [y.el, y.anchor] = m(
      y.children,
      S,
      V,
      Y,
      y.el,
      y.anchor
    );
  }, H = ({ el: y, anchor: S }, V, Y) => {
    let x;
    for (; y && y !== S; )
      x = f(y), n(y, V, Y), y = x;
    n(S, V, Y);
  }, D = ({ el: y, anchor: S }) => {
    let V;
    for (; y && y !== S; )
      V = f(y), i(y), y = V;
    i(S);
  }, P = (y, S, V, Y, x, M, L, k, N) => {
    if (S.type === "svg" ? L = "svg" : S.type === "math" && (L = "mathml"), y == null)
      W(
        S,
        V,
        Y,
        x,
        M,
        L,
        k,
        N
      );
    else {
      const C = y.el && y.el._isVueCE ? y.el : null;
      try {
        C && C._beginPatch(), ne(
          y,
          S,
          x,
          M,
          L,
          k,
          N
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, W = (y, S, V, Y, x, M, L, k) => {
    let N, C;
    const { props: B, shapeFlag: X, transition: ie, dirs: $ } = y;
    if (N = y.el = a(
      y.type,
      M,
      B && B.is,
      B
    ), X & 8 ? u(N, y.children) : X & 16 && ee(
      y.children,
      N,
      null,
      Y,
      x,
      kl(y, M),
      L,
      k
    ), $ && Yr(y, null, Y, "created"), R(N, y, y.scopeId, L, Y), B) {
      for (const Se in B)
        Se !== "value" && !Lo(Se) && o(N, Se, null, B[Se], M, Y);
      "value" in B && o(N, "value", null, B.value, M), (C = B.onVnodeBeforeMount) && nr(C, Y, y);
    }
    $ && Yr(y, null, Y, "beforeMount");
    const se = ty(x, ie);
    se && ie.beforeEnter(N), n(N, S, V), ((C = B && B.onVnodeMounted) || se || $) && vn(() => {
      try {
        C && nr(C, Y, y), se && ie.enter(N), $ && Yr(y, null, Y, "mounted");
      } finally {
      }
    }, x);
  }, R = (y, S, V, Y, x) => {
    if (V && p(y, V), Y)
      for (let M = 0; M < Y.length; M++)
        p(y, Y[M]);
    if (x) {
      let M = x.subTree;
      if (S === M || Zp(M.type) && (M.ssContent === S || M.ssFallback === S)) {
        const L = x.vnode;
        R(
          y,
          L,
          L.scopeId,
          L.slotScopeIds,
          x.parent
        );
      }
    }
  }, ee = (y, S, V, Y, x, M, L, k, N = 0) => {
    for (let C = N; C < y.length; C++) {
      const B = y[C] = k ? Sr(y[C]) : ar(y[C]);
      b(
        null,
        B,
        S,
        V,
        Y,
        x,
        M,
        L,
        k
      );
    }
  }, ne = (y, S, V, Y, x, M, L) => {
    const k = S.el = y.el;
    let { patchFlag: N, dynamicChildren: C, dirs: B } = S;
    N |= y.patchFlag & 16;
    const X = y.props || At, ie = S.props || At;
    let $;
    if (V && qr(V, !1), ($ = ie.onVnodeBeforeUpdate) && nr($, V, S, y), B && Yr(S, y, V, "beforeUpdate"), V && qr(V, !0), (X.innerHTML && ie.innerHTML == null || X.textContent && ie.textContent == null) && u(k, ""), C ? le(
      y.dynamicChildren,
      C,
      k,
      V,
      Y,
      kl(S, x),
      M
    ) : L || w(
      y,
      S,
      k,
      null,
      V,
      Y,
      kl(S, x),
      M,
      !1
    ), N > 0) {
      if (N & 16)
        E(k, X, ie, V, x);
      else if (N & 2 && X.class !== ie.class && o(k, "class", null, ie.class, x), N & 4 && o(k, "style", X.style, ie.style, x), N & 8) {
        const se = S.dynamicProps;
        for (let Se = 0; Se < se.length; Se++) {
          const Me = se[Se], fe = X[Me], be = ie[Me];
          (be !== fe || Me === "value") && o(k, Me, fe, be, x, V);
        }
      }
      N & 1 && y.children !== S.children && u(k, S.children);
    } else !L && C == null && E(k, X, ie, V, x);
    (($ = ie.onVnodeUpdated) || B) && vn(() => {
      $ && nr($, V, S, y), B && Yr(S, y, V, "updated");
    }, Y);
  }, le = (y, S, V, Y, x, M, L) => {
    for (let k = 0; k < S.length; k++) {
      const N = y[k], C = S[k], B = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_o(N, C) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? c(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      b(
        N,
        C,
        B,
        null,
        Y,
        x,
        M,
        L,
        !0
      );
    }
  }, E = (y, S, V, Y, x) => {
    if (S !== V) {
      if (S !== At)
        for (const M in S)
          !Lo(M) && !(M in V) && o(
            y,
            M,
            S[M],
            null,
            x,
            Y
          );
      for (const M in V) {
        if (Lo(M)) continue;
        const L = V[M], k = S[M];
        L !== k && M !== "value" && o(y, M, k, L, x, Y);
      }
      "value" in V && o(y, "value", S.value, V.value, x);
    }
  }, G = (y, S, V, Y, x, M, L, k, N) => {
    const C = S.el = y ? y.el : s(""), B = S.anchor = y ? y.anchor : s("");
    let { patchFlag: X, dynamicChildren: ie, slotScopeIds: $ } = S;
    $ && (k = k ? k.concat($) : $), y == null ? (n(C, V, Y), n(B, V, Y), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      S.children || [],
      V,
      B,
      x,
      M,
      L,
      k,
      N
    )) : X > 0 && X & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === ie.length ? (le(
      y.dynamicChildren,
      ie,
      V,
      x,
      M,
      L,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (S.key != null || x && S === x.subTree) && qp(
      y,
      S,
      !0
      /* shallow */
    )) : w(
      y,
      S,
      V,
      B,
      x,
      M,
      L,
      k,
      N
    );
  }, re = (y, S, V, Y, x, M, L, k, N) => {
    S.slotScopeIds = k, y == null ? S.shapeFlag & 512 ? x.ctx.activate(
      S,
      V,
      Y,
      L,
      N
    ) : pe(
      S,
      V,
      Y,
      x,
      M,
      L,
      N
    ) : he(y, S, N);
  }, pe = (y, S, V, Y, x, M, L) => {
    const k = y.component = cy(
      y,
      Y,
      x
    );
    if (Op(y) && (k.ctx.renderer = I), dy(k, !1, L), k.asyncDep) {
      if (x && x.registerDep(k, me, L), !y.el) {
        const N = k.subTree = Ke(jr);
        F(null, N, S, V), y.placeholder = N.el;
      }
    } else
      me(
        k,
        y,
        S,
        V,
        x,
        M,
        L
      );
  }, he = (y, S, V) => {
    const Y = S.component = y.component;
    if (K0(y, S, V))
      if (Y.asyncDep && !Y.asyncResolved) {
        Z(Y, S, V);
        return;
      } else
        Y.next = S, Y.update();
    else
      S.el = y.el, Y.vnode = S;
  }, me = (y, S, V, Y, x, M, L) => {
    const k = () => {
      if (y.isMounted) {
        let { next: X, bu: ie, u: $, parent: se, vnode: Se } = y;
        {
          const h = Xp(y);
          if (h) {
            X && (X.el = Se.el, Z(y, X, L)), h.asyncDep.then(() => {
              vn(() => {
                y.isUnmounted || C();
              }, x);
            });
            return;
          }
        }
        let Me = X, fe;
        qr(y, !1), X ? (X.el = Se.el, Z(y, X, L)) : X = Se, ie && qa(ie), (fe = X.props && X.props.onVnodeBeforeUpdate) && nr(fe, se, X, Se), qr(y, !0);
        const be = Sd(y), _e = y.subTree;
        y.subTree = be, b(
          _e,
          be,
          // parent may have changed if it's in a teleport
          c(_e.el),
          // anchor may have changed if it's in a fragment
          oe(_e),
          y,
          x,
          M
        ), X.el = be.el, Me === null && B0(y, be.el), $ && vn($, x), (fe = X.props && X.props.onVnodeUpdated) && vn(
          () => nr(fe, se, X, Se),
          x
        );
      } else {
        let X;
        const { el: ie, props: $ } = S, { bm: se, m: Se, parent: Me, root: fe, type: be } = y, _e = zo(S);
        qr(y, !1), se && qa(se), !_e && (X = $ && $.onVnodeBeforeMount) && nr(X, Me, S), qr(y, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            be,
            y.parent ? y.parent.type : void 0
          );
          const h = y.subTree = Sd(y);
          b(
            null,
            h,
            V,
            Y,
            y,
            x,
            M
          ), S.el = h.el;
        }
        if (Se && vn(Se, x), !_e && (X = $ && $.onVnodeMounted)) {
          const h = S;
          vn(
            () => nr(X, Me, h),
            x
          );
        }
        (S.shapeFlag & 256 || Me && zo(Me.vnode) && Me.vnode.shapeFlag & 256) && y.a && vn(y.a, x), y.isMounted = !0, S = V = Y = null;
      }
    };
    y.scope.on();
    const N = y.effect = new sp(k);
    y.scope.off();
    const C = y.update = N.run.bind(N), B = y.job = N.runIfDirty.bind(N);
    B.i = y, B.id = y.uid, N.scheduler = () => du(B), qr(y, !0), C();
  }, Z = (y, S, V) => {
    S.component = y;
    const Y = y.vnode.props;
    y.vnode = S, y.next = null, Y0(y, S.props, Y, V), Z0(y, S.children, V), Ir(), pd(y), Er();
  }, w = (y, S, V, Y, x, M, L, k, N = !1) => {
    const C = y && y.children, B = y ? y.shapeFlag : 0, X = S.children, { patchFlag: ie, shapeFlag: $ } = S;
    if (ie > 0) {
      if (ie & 128) {
        de(
          C,
          X,
          V,
          Y,
          x,
          M,
          L,
          k,
          N
        );
        return;
      } else if (ie & 256) {
        K(
          C,
          X,
          V,
          Y,
          x,
          M,
          L,
          k,
          N
        );
        return;
      }
    }
    $ & 8 ? (B & 16 && J(C, x, M), X !== C && u(V, X)) : B & 16 ? $ & 16 ? de(
      C,
      X,
      V,
      Y,
      x,
      M,
      L,
      k,
      N
    ) : J(C, x, M, !0) : (B & 8 && u(V, ""), $ & 16 && ee(
      X,
      V,
      Y,
      x,
      M,
      L,
      k,
      N
    ));
  }, K = (y, S, V, Y, x, M, L, k, N) => {
    y = y || Li, S = S || Li;
    const C = y.length, B = S.length, X = Math.min(C, B);
    let ie;
    for (ie = 0; ie < X; ie++) {
      const $ = S[ie] = N ? Sr(S[ie]) : ar(S[ie]);
      b(
        y[ie],
        $,
        V,
        null,
        x,
        M,
        L,
        k,
        N
      );
    }
    C > B ? J(
      y,
      x,
      M,
      !0,
      !1,
      X
    ) : ee(
      S,
      V,
      Y,
      x,
      M,
      L,
      k,
      N,
      X
    );
  }, de = (y, S, V, Y, x, M, L, k, N) => {
    let C = 0;
    const B = S.length;
    let X = y.length - 1, ie = B - 1;
    for (; C <= X && C <= ie; ) {
      const $ = y[C], se = S[C] = N ? Sr(S[C]) : ar(S[C]);
      if (_o($, se))
        b(
          $,
          se,
          V,
          null,
          x,
          M,
          L,
          k,
          N
        );
      else
        break;
      C++;
    }
    for (; C <= X && C <= ie; ) {
      const $ = y[X], se = S[ie] = N ? Sr(S[ie]) : ar(S[ie]);
      if (_o($, se))
        b(
          $,
          se,
          V,
          null,
          x,
          M,
          L,
          k,
          N
        );
      else
        break;
      X--, ie--;
    }
    if (C > X) {
      if (C <= ie) {
        const $ = ie + 1, se = $ < B ? S[$].el : Y;
        for (; C <= ie; )
          b(
            null,
            S[C] = N ? Sr(S[C]) : ar(S[C]),
            V,
            se,
            x,
            M,
            L,
            k,
            N
          ), C++;
      }
    } else if (C > ie)
      for (; C <= X; )
        ue(y[C], x, M, !0), C++;
    else {
      const $ = C, se = C, Se = /* @__PURE__ */ new Map();
      for (C = se; C <= ie; C++) {
        const _ = S[C] = N ? Sr(S[C]) : ar(S[C]);
        _.key != null && Se.set(_.key, C);
      }
      let Me, fe = 0;
      const be = ie - se + 1;
      let _e = !1, h = 0;
      const z = new Array(be);
      for (C = 0; C < be; C++) z[C] = 0;
      for (C = $; C <= X; C++) {
        const _ = y[C];
        if (fe >= be) {
          ue(_, x, M, !0);
          continue;
        }
        let g;
        if (_.key != null)
          g = Se.get(_.key);
        else
          for (Me = se; Me <= ie; Me++)
            if (z[Me - se] === 0 && _o(_, S[Me])) {
              g = Me;
              break;
            }
        g === void 0 ? ue(_, x, M, !0) : (z[g - se] = C + 1, g >= h ? h = g : _e = !0, b(
          _,
          S[g],
          V,
          null,
          x,
          M,
          L,
          k,
          N
        ), fe++);
      }
      const A = _e ? ny(z) : Li;
      for (Me = A.length - 1, C = be - 1; C >= 0; C--) {
        const _ = se + C, g = S[_], j = S[_ + 1], ce = _ + 1 < B ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          j.el || Jp(j)
        ) : Y;
        z[C] === 0 ? b(
          null,
          g,
          V,
          ce,
          x,
          M,
          L,
          k,
          N
        ) : _e && (Me < 0 || C !== A[Me] ? q(g, V, ce, 2) : Me--);
      }
    }
  }, q = (y, S, V, Y, x = null) => {
    const { el: M, type: L, transition: k, children: N, shapeFlag: C } = y;
    if (C & 6) {
      q(y.component.subTree, S, V, Y);
      return;
    }
    if (C & 128) {
      y.suspense.move(S, V, Y);
      return;
    }
    if (C & 64) {
      L.move(y, S, V, I);
      return;
    }
    if (L === Ze) {
      n(M, S, V);
      for (let X = 0; X < N.length; X++)
        q(N[X], S, V, Y);
      n(y.anchor, S, V);
      return;
    }
    if (L === Ml) {
      H(y, S, V);
      return;
    }
    if (Y !== 2 && C & 1 && k)
      if (Y === 0)
        k.beforeEnter(M), n(M, S, V), vn(() => k.enter(M), x);
      else {
        const { leave: X, delayLeave: ie, afterLeave: $ } = k, se = () => {
          y.ctx.isUnmounted ? i(M) : n(M, S, V);
        }, Se = () => {
          M._isLeaving && M[b0](
            !0
            /* cancelled */
          ), X(M, () => {
            se(), $ && $();
          });
        };
        ie ? ie(M, se, Se) : Se();
      }
    else
      n(M, S, V);
  }, ue = (y, S, V, Y = !1, x = !1) => {
    const {
      type: M,
      props: L,
      ref: k,
      children: N,
      dynamicChildren: C,
      shapeFlag: B,
      patchFlag: X,
      dirs: ie,
      cacheIndex: $,
      memo: se
    } = y;
    if (X === -2 && (x = !1), k != null && (Ir(), $o(k, null, V, y, !0), Er()), $ != null && (S.renderCache[$] = void 0), B & 256) {
      S.ctx.deactivate(y);
      return;
    }
    const Se = B & 1 && ie, Me = !zo(y);
    let fe;
    if (Me && (fe = L && L.onVnodeBeforeUnmount) && nr(fe, S, y), B & 6)
      O(y.component, V, Y);
    else {
      if (B & 128) {
        y.suspense.unmount(V, Y);
        return;
      }
      Se && Yr(y, null, S, "beforeUnmount"), B & 64 ? y.type.remove(
        y,
        S,
        V,
        I,
        Y
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ze || X > 0 && X & 64) ? J(
        C,
        S,
        V,
        !1,
        !0
      ) : (M === Ze && X & 384 || !x && B & 16) && J(N, S, V), Y && Pe(y);
    }
    const be = se != null && $ == null;
    (Me && (fe = L && L.onVnodeUnmounted) || Se || be) && vn(() => {
      fe && nr(fe, S, y), Se && Yr(y, null, S, "unmounted"), be && (y.el = null);
    }, V);
  }, Pe = (y) => {
    const { type: S, el: V, anchor: Y, transition: x } = y;
    if (S === Ze) {
      te(V, Y);
      return;
    }
    if (S === Ml) {
      D(y);
      return;
    }
    const M = () => {
      i(V), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (y.shapeFlag & 1 && x && !x.persisted) {
      const { leave: L, delayLeave: k } = x, N = () => L(V, M);
      k ? k(y.el, M, N) : N();
    } else
      M();
  }, te = (y, S) => {
    let V;
    for (; y !== S; )
      V = f(y), i(y), y = V;
    i(S);
  }, O = (y, S, V) => {
    const { bum: Y, scope: x, job: M, subTree: L, um: k, m: N, a: C } = y;
    kd(N), kd(C), Y && qa(Y), x.stop(), M && (M.flags |= 8, ue(L, y, S, V)), k && vn(k, S), vn(() => {
      y.isUnmounted = !0;
    }, S);
  }, J = (y, S, V, Y = !1, x = !1, M = 0) => {
    for (let L = M; L < y.length; L++)
      ue(y[L], S, V, Y, x);
  }, oe = (y) => {
    if (y.shapeFlag & 6)
      return oe(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const S = f(y.anchor || y.el), V = S && S[g0];
    return V ? f(V) : S;
  };
  let ge = !1;
  const ve = (y, S, V) => {
    let Y;
    y == null ? S._vnode && (ue(S._vnode, null, null, !0), Y = S._vnode.component) : b(
      S._vnode || null,
      y,
      S,
      null,
      null,
      null,
      V
    ), S._vnode = y, ge || (ge = !0, pd(Y), Mp(), ge = !1);
  }, I = {
    p: b,
    um: ue,
    m: q,
    r: Pe,
    mt: pe,
    mc: ee,
    pc: w,
    pbc: le,
    n: oe,
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
function qr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ty(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function qp(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (tt(n) && tt(i))
    for (let o = 0; o < n.length; o++) {
      const a = n[o];
      let s = i[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = Sr(i[o]), s.el = a.el), !r && s.patchFlag !== -2 && qp(a, s)), s.type === rl && (s.patchFlag === -1 && (s = i[o] = Sr(s)), s.el = a.el), s.type === jr && !s.el && (s.el = a.el);
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
function Xp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xp(t);
}
function kd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Jp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Jp(t.subTree) : null;
}
const Zp = (e) => e.__isSuspense;
function ry(e, t) {
  t && t.pendingBranch ? tt(e) ? t.effects.push(...e) : t.effects.push(e) : d0(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), rl = /* @__PURE__ */ Symbol.for("v-txt"), jr = /* @__PURE__ */ Symbol.for("v-cmt"), Ml = /* @__PURE__ */ Symbol.for("v-stc"), Ho = [];
let Tn = null;
function Te(e = !1) {
  Ho.push(Tn = e ? null : []);
}
function iy() {
  Ho.pop(), Tn = Ho[Ho.length - 1] || null;
}
let Xo = 1;
function Md(e, t = !1) {
  Xo += e, e < 0 && Tn && t && (Tn.hasOnce = !0);
}
function Qp(e) {
  return e.dynamicChildren = Xo > 0 ? Tn || Li : null, iy(), Xo > 0 && Tn && Tn.push(e), e;
}
function Le(e, t, r, n, i, o) {
  return Qp(
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
  return Qp(
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
function eh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _o(e, t) {
  return e.type === t.type && e.key === t.key;
}
const th = ({ key: e }) => e ?? null, Ja = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Kt(e) || /* @__PURE__ */ cn(e) || it(e) ? { i: Fn, r: e, k: t, f: !!r } : e : null);
function Ne(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, a = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && th(t),
    ref: t && Ja(t),
    scopeId: Np,
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
    ctx: Fn
  };
  return s ? (mu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Kt(r) ? 8 : 16), Xo > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  Tn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Tn.push(l), l;
}
const Ke = oy;
function oy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Dp) && (e = jr), eh(e)) {
    const s = Ui(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && mu(s, r), Xo > 0 && !o && Tn && (s.shapeFlag & 6 ? Tn[Tn.indexOf(e)] = s : Tn.push(s)), s.patchFlag = -2, s;
  }
  if (gy(e) && (e = e.__vccOpts), t) {
    t = ay(t);
    let { class: s, style: l } = t;
    s && !Kt(s) && (t.class = ct(s)), Pt(l) && (/* @__PURE__ */ uu(l) && !tt(l) && (l = dn({}, l)), t.style = Mt(l));
  }
  const a = Kt(e) ? 1 : Zp(e) ? 128 : y0(e) ? 64 : Pt(e) ? 4 : it(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ uu(e) || Gp(e) ? dn({}, e) : e : null;
}
function Ui(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: a, children: s, transition: l } = e, d = t ? wr(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && th(d),
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
    patchFlag: t && e.type !== Ze ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && Ui(e.ssContent),
    ssFallback: e.ssFallback && Ui(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && fu(
    u,
    l.clone(u)
  ), u;
}
function Co(e = " ", t = 0) {
  return Ke(rl, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (Te(), Hn(jr, null, e)) : Ke(jr, null, e);
}
function ar(e) {
  return e == null || typeof e == "boolean" ? Ke(jr) : tt(e) ? Ke(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : eh(e) ? Sr(e) : Ke(rl, null, String(e));
}
function Sr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function mu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (tt(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), mu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Gp(t) ? t._ctx = Fn : i === 3 && Fn && (Fn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else it(t) ? (t = { default: t, _ctx: Fn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Co(t)]) : r = 8);
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
        t.style = Mt([t.style, n.style]);
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
const sy = Rp();
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
    propsOptions: Kp(n, i),
    emitsOptions: $p(n, i),
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
let an = null;
const uy = () => an || Fn;
let bs, pc;
{
  const e = Xs(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((a) => a(o)) : i[0](o);
    };
  };
  bs = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => an = r
  ), pc = t(
    "__VUE_SSR_SETTERS__",
    (r) => Jo = r
  );
}
const fa = (e) => {
  const t = an;
  return bs(e), e.scope.on(), () => {
    e.scope.off(), bs(t);
  };
}, Pd = () => {
  an && an.scope.off(), bs(null);
};
function nh(e) {
  return e.vnode.shapeFlag & 4;
}
let Jo = !1;
function dy(e, t = !1, r = !1) {
  t && pc(t);
  const { props: n, children: i } = e.vnode, o = nh(e);
  U0(e, n, o, t), J0(e, i, r || t);
  const a = o ? fy(e, t) : void 0;
  return t && pc(!1), a;
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
    ), s = ep(a);
    if (Er(), o(), (s || e.sp) && !zo(e) && Ep(e), s) {
      if (a.then(Pd, Pd), t)
        return a.then((l) => {
          Nd(e, l);
        }).catch((l) => {
          Zs(l, e, 0);
        });
      e.asyncDep = a;
    } else
      Nd(e, a);
  } else
    rh(e);
}
function Nd(e, t, r) {
  it(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pt(t) && (e.setupState = wp(t)), rh(e);
}
function rh(e, t, r) {
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
    return on(e, "get", ""), e[t];
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wp(n0(e.exposed)), {
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
let hc;
const Cd = typeof window < "u" && window.trustedTypes;
if (Cd)
  try {
    hc = /* @__PURE__ */ Cd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ih = hc ? (e) => hc.createHTML(e) : (e) => e, by = "http://www.w3.org/2000/svg", vy = "http://www.w3.org/1998/Math/MathML", _r = typeof document < "u" ? document : null, Ad = _r && /* @__PURE__ */ _r.createElement("template"), _y = {
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
      Ad.innerHTML = ih(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Ad.content;
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
const vs = /* @__PURE__ */ Symbol("_vod"), oh = /* @__PURE__ */ Symbol("_vsh"), di = {
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
  e.style.display = t ? e[vs] : "none", e[oh] = !t;
}
const xy = /* @__PURE__ */ Symbol(""), ky = /(?:^|;)\s*display\s*:/;
function My(e, t, r) {
  const n = e.style, i = Kt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Kt(t))
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
  vs in e && (e[vs] = o ? n.display : "", e[oh] && (n.display = "none"));
}
const Id = /\s*!important$/;
function Za(e, t, r) {
  if (tt(r))
    r.forEach((n) => Za(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Py(e, t);
    Id.test(r) ? e.setProperty(
      mi(n),
      r.replace(Id, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ed = ["Webkit", "Moz", "ms"], Pl = {};
function Py(e, t) {
  const r = Pl[t];
  if (r)
    return r;
  let n = hn(t);
  if (n !== "filter" && n in e)
    return Pl[t] = n;
  n = qs(n);
  for (let i = 0; i < Ed.length; i++) {
    const o = Ed[i] + n;
    if (o in e)
      return Pl[t] = o;
  }
  return t;
}
const Od = "http://www.w3.org/1999/xlink";
function Fd(e, t, r, n, i, o = Fg(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Od, t.slice(6, t.length)) : e.setAttributeNS(Od, t, r) : r == null || o && !ip(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : hr(r) ? String(r) : r
  );
}
function Td(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? ih(r) : r);
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
    s === "boolean" ? r = ip(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(i || t);
}
function Ci(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Ny(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Dd = /* @__PURE__ */ Symbol("_vei");
function Cy(e, t, r, n, i = null) {
  const o = e[Dd] || (e[Dd] = {}), a = o[t];
  if (n && a)
    a.value = n;
  else {
    const [s, l] = Ay(t);
    if (n) {
      const d = o[t] = Oy(
        n,
        i
      );
      Ci(e, s, d, l);
    } else a && (Ny(e, s, a, l), o[t] = void 0);
  }
}
const Ld = /(?:Once|Passive|Capture)$/;
function Ay(e) {
  let t;
  if (Ld.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Ld); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : mi(e.slice(2)), t];
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
const Vd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ty = (e, t, r, n, i, o) => {
  const a = i === "svg";
  t === "class" ? wy(e, n, a) : t === "style" ? My(e, r, n) : Bs(t) ? Us(t) || Cy(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dy(e, t, n, a)) ? (Td(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fd(e, t, n, a, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ly(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Kt(n))) ? Td(e, hn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Fd(e, t, n, a));
};
function Dy(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vd(t) && it(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Vd(t) && Kt(r) ? !1 : t in e;
}
function Ly(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = hn(t);
  return Array.isArray(r) ? r.some((i) => hn(i) === n) : Object.keys(r).some((i) => hn(i) === n);
}
const Rd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return tt(t) ? (r) => qa(t, r) : t;
};
function Vy(e) {
  e.target.composing = !0;
}
function $d(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Cl = /* @__PURE__ */ Symbol("_assign");
function zd(e, t, r) {
  return t && (e = e.trim()), r && (e = nu(e)), e;
}
const jd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Cl] = Rd(i);
    const o = n || i.props && i.props.type === "number";
    Ci(e, t ? "change" : "input", (a) => {
      a.target.composing || e[Cl](zd(e.value, r, o));
    }), (r || o) && Ci(e, "change", () => {
      e.value = zd(e.value, r, o);
    }), t || (Ci(e, "compositionstart", Vy), Ci(e, "compositionend", $d), Ci(e, "change", $d));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, a) {
    if (e[Cl] = Rd(a), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? nu(e.value) : e.value, l = t ?? "";
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
}, Ot = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let a = 0; a < t.length; a++) {
      const s = $y[t[a]];
      if (s && s(i, t)) return;
    }
    return e(i, ...o);
  }));
}, zy = /* @__PURE__ */ dn({ patchProp: Ty }, _y);
let Hd;
function jy() {
  return Hd || (Hd = Q0(zy));
}
const gu = ((...e) => {
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
  return Kt(e) ? document.querySelector(e) : e;
}
const Wy = "PanoramaSuite.Debug.Diagnostics", Ky = "PanoramaSuite.Debug.ExportDiagnostics", Al = "pano_suite.diagnostics.v1", Gd = "pano_suite.diagnostics.previous.v1", By = 300, Uy = 2e5, Yy = 100, qy = 20, Xy = 1e3, Jy = 2, Ta = 1024 * 1024;
function Lr(e, t = 2) {
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
  }) : null, b = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    c.delete(I), p.collected += 1;
  }) : null, v = /* @__PURE__ */ new Set(), F = { created: 0, lost: 0, restored: 0, disposed: 0 }, U = [], H = /* @__PURE__ */ new Map();
  let D = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 };
  const R = [];
  function ee(I, ae, y = void 0) {
    U.push(y === void 0 ? { t: t.clock(), type: I, label: ae } : { t: t.clock(), type: I, label: ae, detail: y }), U.length > Yy && U.shift();
  }
  function ne(I, ae, y, S, V) {
    if (!r || !S || !t.WeakRef) return S;
    const Y = { ref: new t.WeakRef(S), label: V };
    return I.add(Y), ae == null || ae.register(S, Y), y.created += 1, S;
  }
  function le(I, ae = "") {
    return ne(u, m, f, I, ae);
  }
  function E(I, ae = "") {
    return ne(c, b, p, I, ae);
  }
  function G({ label: I = "", width: ae, height: y, offscreen: S = !1 } = {}) {
    const V = globalThis.OffscreenCanvas;
    let Y;
    return S && typeof V < "u" ? Y = new V(ae, y) : (Y = t.document().createElement("canvas"), ae !== void 0 && y !== void 0 && (Y.width = ae, Y.height = y)), le(Y, I);
  }
  function re(I) {
    I.width = 0, I.height = 0, r && (f.released += 1);
  }
  function pe(I = t.document(), ae = "") {
    var y;
    return E(((y = I == null ? void 0 : I.createElement) == null ? void 0 : y.call(I, "video")) || null, ae);
  }
  function he(I, ae) {
    if (!r || !I) return () => {
    };
    const y = { label: ae, lost: !1, disposed: !1 };
    v.add(y), F.created += 1, ee("webgl-created", ae);
    const S = () => {
      y.disposed || (y.lost = !0, F.lost += 1, ee("webglcontextlost", ae));
    }, V = () => {
      y.disposed || (y.lost = !1, F.restored += 1, ee("webglcontextrestored", ae));
    };
    return I.addEventListener("webglcontextlost", S), I.addEventListener("webglcontextrestored", V), () => {
      y.disposed || (y.disposed = !0, v.delete(y), F.disposed += 1, ee("webgl-disposed", ae));
    };
  }
  function me(I, ae) {
    return H.set(I, ae), () => {
      H.get(I) === ae && H.delete(I);
    };
  }
  function Z() {
    return r ? t.now() : -1;
  }
  function w(I) {
    if (I < 0 || !r) return;
    const ae = t.now() - I;
    D.count += 1, D.maxMs = Math.max(D.maxMs, ae);
  }
  function K(I, ae) {
    if (ae < 0 || !r) return;
    const y = t.now() - ae, S = P.get(I) ?? { count: 0, maxMs: 0 };
    S.count += 1, S.maxMs = Math.max(S.maxMs, y), P.set(I, S);
  }
  function de() {
    let I = 0, ae = 0, y = 0, S = [0, 0];
    const V = {};
    for (const Y of u) {
      const x = Y.ref.deref();
      if (!x) continue;
      I += 1;
      const M = x.width * x.height;
      M > 0 && (ae += 1), y += M, M > S[0] * S[1] && (S = [x.width, x.height]);
      const L = V[Y.label] ?? (V[Y.label] = [0, 0]);
      L[0] += 1, L[1] += M;
    }
    return { ...f, alive: I, sized: ae, pixels: y, mb: Lr(y * 4 / Ta, 1), largest: S, byLabel: V };
  }
  function q() {
    const I = [];
    let ae = 0, y = 0;
    for (const S of c) {
      const V = S.ref.deref();
      if (!V) continue;
      ae += 1;
      const Y = !V.paused && !V.ended;
      Y && (y += 1), I.length < qy && I.push({
        label: S.label,
        playing: Y,
        src: !!(V.currentSrc || V.src),
        size: [V.videoWidth || 0, V.videoHeight || 0],
        ready: V.readyState ?? 0,
        connected: !!V.isConnected
      });
    }
    return { ...p, alive: ae, playing: y, list: I };
  }
  function ue() {
    const I = t.now(), ae = t.memory(), y = {
      t: t.clock(),
      heap: ae ? { used: Lr(ae.usedJSHeapSize / Ta, 1), total: Lr(ae.totalJSHeapSize / Ta, 1), limit: Lr(ae.jsHeapSizeLimit / Ta, 1) } : null,
      canvas: de(),
      webgl: { ...F, alive: [...v].filter((S) => !S.lost).length },
      video: q(),
      frame: { count: D.count, maxMs: Lr(D.maxMs), longTasks: W.count, longTaskMaxMs: Lr(W.maxMs) },
      renders: Object.fromEntries([...P].map(([S, V]) => [S, { count: V.count, maxMs: Lr(V.maxMs) }])),
      sources: Object.fromEntries([...H].map(([S, V]) => [S, V()])),
      costMs: Lr(d, 3)
    };
    return D = { count: 0, maxMs: 0 }, P = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 }, R.push({ record: y, text: JSON.stringify(y) }), R.length > By && R.shift(), l += 1, l % Jy === 0 && te(), d = t.now() - I, y;
  }
  function Pe(I = Uy) {
    const ae = JSON.stringify({ ...o, events: U }).slice(0, -1);
    let y = I - ae.length - 14, S = R.length;
    for (; S > 0 && y - R[S - 1].text.length - 1 >= 0; )
      S -= 1, y -= R[S].text.length + 1;
    return `${ae},"records":[${R.slice(S).map((V) => V.text).join(",")}]}`;
  }
  function te() {
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
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", te();
  }
  function J() {
    var V;
    if (n) return i;
    n = !0;
    const I = t.storage();
    if (!I) return null;
    let ae = null;
    try {
      if (ae = I.getItem(Al), ae === null) {
        const Y = I.getItem(Gd);
        return i = Y === null ? null : JSON.parse(Y), i;
      }
      I.setItem(Gd, ae), I.removeItem(Al), i = JSON.parse(ae);
    } catch {
      return i;
    }
    const y = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], S = y.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${y.length} records kept. Its last records:`,
      JSON.stringify(S)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((V = y.at(-1)) == null ? void 0 : V.t) || 0).toISOString()}; ${y.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(S)
    ), i;
  }
  function oe(I) {
    const ae = I === !0;
    if (J(), ae !== r) {
      if (r = ae, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, R.length = 0, s = t.observeLongTasks((y) => {
          for (const S of y)
            W.count += 1, W.maxMs = Math.max(W.maxMs, S.duration);
        }), t.addUnload(O), a = t.setInterval(ue, Xy), te();
        return;
      }
      t.clearInterval(a), a = 0, s == null || s(), s = null, t.removeUnload(O), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", te();
    }
  }
  function ge() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...U], records: R.map((I) => I.record) } : null,
      previous: i
    };
  }
  function ve() {
    const I = t.document(), ae = new Blob([JSON.stringify(ge(), null, 1)], { type: "application/json" }), y = URL.createObjectURL(ae), S = I.createElement("a");
    S.href = y, S.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, S.click(), setTimeout(() => URL.revokeObjectURL(y), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: G,
    releaseCanvas: re,
    trackCanvas: le,
    createVideo: pe,
    trackVideo: E,
    watchContext: he,
    addSource: me,
    frameStart: Z,
    frameEnd: w,
    renderEnd: K,
    sample: ue,
    serialize: Pe,
    recoverPrevious: J,
    setEnabled: oe,
    exportData: ge,
    download: ve
  };
}
const xn = eb(), un = xn.createCanvas, mc = xn.releaseCanvas, Il = xn.trackCanvas, ol = xn.createVideo, Wd = xn.trackVideo, tb = xn.addSource, nb = xn.frameStart, rb = xn.frameEnd;
function ah(e, t) {
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
}, Kd = {
  id: Ky,
  label: "Export Panorama Suite diagnostics",
  function: () => xn.download()
};
function Ai(e, t) {
  const r = un({ label: "paint.surface" });
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
function Bd(e, t = 8) {
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
function yu(e, t) {
  return un({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function $r(e, t, r) {
  if (!e) return Ai(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function jt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function nn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let El = null, Ol = null, Ud = null, Yd = null, zt = null, wo = null;
function ab() {
  if (Ol) return Ol;
  const e = 6, t = 17, r = un({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Ol = r, r;
}
function Fl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  El = $r(El, r, n);
  const i = El;
  jt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Yd !== i.ctx && (Ud = i.ctx.createPattern(ab(), "repeat"), Yd = i.ctx), i.ctx.fillStyle = Ud, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
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
const Dt = /* @__PURE__ */ new Map(), bu = 128;
function db(e, t, r, n, i, o) {
  const a = Math.max(1, Math.round(e)), s = Math.max(0, Math.min(1, t)), l = `${a}:${s.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Dt.has(l)) {
    const U = Dt.get(l);
    return Dt.delete(l), Dt.set(l, U), U;
  }
  Dt.size >= bu && Dt.delete(Dt.keys().next().value);
  const d = a * 2 + 2, u = a + 1, c = yu(d, d), f = c.getContext("2d"), p = s * a, m = a + 1, b = `rgba(${r},${n},${i},${o})`, v = `rgba(${r},${n},${i},0)`, F = f.createRadialGradient(u, u, p, u, u, m);
  return F.addColorStop(0, b), F.addColorStop(1, v), f.fillStyle = F, f.fillRect(0, 0, d, d), Dt.set(l, c), c;
}
function fb(e, t, r, n, i, o, a) {
  const { r: s, g: l, b: d, a: u } = n, c = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), p = Math.max(0, i), m = Math.max(0, Math.min(0.99, o)), b = Math.max(0, Math.min(1, a ?? 0)), v = `chisel:${c}:${f}:${r.toFixed(2)}:${s}:${l}:${d}:${u.toFixed(3)}:${p.toFixed(2)}:${m.toFixed(2)}:${b.toFixed(2)}`;
  if (Dt.has(v)) {
    const ee = Dt.get(v);
    return Dt.delete(v), Dt.set(v, ee), ee;
  }
  Dt.size >= bu && Dt.delete(Dt.keys().next().value);
  const F = yu(c, f), U = F.getContext("2d"), H = U.createImageData(c, f), D = H.data, P = Math.max(0, e - t), W = Math.max(0, Math.min(1, r)), R = 1 + p;
  for (let ee = 0; ee < f; ee++)
    for (let ne = 0; ne < c; ne++) {
      const le = ne + 0.5 - e, E = ee + 0.5 - t, G = Math.max(Math.abs(le) - P, 0), pe = Math.hypot(G, E) / t;
      if (pe >= 1) continue;
      const he = pe <= W ? 1 : Math.max(0, (1 - pe) / Math.max(1e-4, 1 - W)), me = 1 - pe, Z = 1 + p * (1 - me) * (1 - me), w = 1 - m * me * me, K = Z * w / R;
      let de = 1;
      if (b > 0) {
        const Pe = Math.floor((E + t) / 1.5), te = Math.floor((le + e) / 8), O = li(zi(Pe * 41 + 500, te * 19 + 300));
        de = 1 - b * 0.42 * O;
      }
      const q = Math.round(255 * Math.min(1, u * he * K * de));
      if (q <= 0) continue;
      const ue = (ee * c + ne) * 4;
      D[ue] = s, D[ue + 1] = l, D[ue + 2] = d, D[ue + 3] = q;
    }
  return U.putImageData(H, 0, 0), Dt.set(v, F), F;
}
function zi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function li(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function pb(e, t, r, n, i, o, a) {
  const s = e + 0.5 - r, l = t + 0.5 - n, d = Math.max(0, r - n), u = Math.max(Math.abs(s) - d, 0), c = Math.hypot(u, l) / n;
  if (c >= 1) return 0;
  const f = li(zi(e * 17 + 3, t * 13 + 7)), p = c + o * 0.22 * (f - 0.5);
  if (p >= 1) return 0;
  const m = p <= i ? 1 : Math.max(0, (1 - p) / Math.max(1e-4, 1 - i)), b = hb(e, t, s, l, r, n), v = o * 0.55;
  if (b < v) return 0;
  const U = 0.45 + 0.55 * ((b - v) / Math.max(1e-4, 1 - v));
  return Math.round(255 * Math.min(1, a * m * U));
}
function hb(e, t, r, n, i, o) {
  const a = Math.floor((r + i) / 3), s = Math.floor((n + o) / 2), l = li(zi(a * 13 + 700, s * 17 + 400)), d = Math.floor((r + i) / 1.5), u = Math.floor((n + o) / 1.5), c = li(zi(d * 23 + 800, u * 29 + 500)), f = li(zi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + c * 0.3 + f * 0.15;
}
function mb(e, t, r, n, i) {
  const { r: o, g: a, b: s, a: l } = n, d = Math.max(2, Math.ceil(e) * 2), u = Math.max(2, Math.ceil(t) * 2), c = Math.max(0, Math.min(1, i)), f = `crayon:${d}:${u}:${r.toFixed(2)}:${o}:${a}:${s}:${l.toFixed(3)}:${c.toFixed(2)}`;
  if (Dt.has(f)) {
    const U = Dt.get(f);
    return Dt.delete(f), Dt.set(f, U), U;
  }
  Dt.size >= bu && Dt.delete(Dt.keys().next().value);
  const p = yu(d, u), m = p.getContext("2d"), b = m.createImageData(d, u), v = b.data, F = Math.max(0, Math.min(1, r));
  for (let U = 0; U < u; U++)
    for (let H = 0; H < d; H++) {
      const D = pb(H, U, e, t, F, c, l);
      if (D <= 0) continue;
      const P = (U * d + H) * 4;
      v[P] = o, v[P + 1] = a, v[P + 2] = s, v[P + 3] = D;
    }
  return m.putImageData(b, 0, 0), Dt.set(f, p), p;
}
function sh(e, t, r) {
  var b, v;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = cb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), a = gb(t), s = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((b = t == null ? void 0 : t.angle) == null ? void 0 : b.value) ?? 0), d = ub(t, i), u = String(((v = t == null ? void 0 : t.targetSpace) == null ? void 0 : v.viewMode) || ""), c = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && u !== "unwrap", f = t == null ? void 0 : t.scatter, p = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let m;
  if (n === "chisel") {
    const F = i * s, U = i, H = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), P = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    m = fb(F, U, o, a, H, D, P);
  } else if (n === "crayon") {
    const F = i * s, U = i, H = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    m = mb(F, U, o, a, H);
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
function qd(e, t, r, n, i) {
  const o = e.angle, a = e.desc.width;
  function s(d, u) {
    o === 0 ? e.ctx.drawImage(e.stampTex, d - i, u - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(d, u), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  s(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && s(t + a, r), t + l > a && s(t - a, r);
}
function vu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: d, count: u } = e.scatter, c = d * e.radiusPx * i, f = zi(t, r);
    for (let p = 0; p < u; p++) {
      const m = li(f + p * 2) * Math.PI * 2, b = Math.sqrt(li(f + p * 2 + 1)) * c, v = t + Math.cos(m) * b, F = r + Math.sin(m) * b, U = Math.max(0.5, e.radiusPx * i * 0.48), H = (0.5 - F / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, P = U * e.aspect * D;
      qd(e, v, F, U, P);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), a = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, s = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(a)) : 1, l = o * e.aspect * s;
  qd(e, t, r, o, l);
}
function Xd(e, t, r) {
  const n = lb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, a = sh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const s = [];
  for (let f = 0; f < n.length; f++) {
    let p = Number(n[f].u || 0) * i;
    const m = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(p - s[f - 1].x) > i * 0.5 && (p += p < s[f - 1].x ? i : -i), s.push({ x: p, y: m });
  }
  if (vu(a, s[0].x, s[0].y, 1), s.length === 1) {
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
  o >= 0.999 ? Xd(e, t, r) : (wo = $r(wo, r.width, r.height), jt(wo), Xd(wo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(wo.canvas, 0, 0), e.restore());
}
function Xr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Zo(e, t, r, n, i, o) {
  const a = n - t, s = i - r, l = Math.hypot(a, s);
  if (l < 1e-9) return o;
  let d = e.spacingPx - o;
  for (; d <= l; ) {
    const u = d / l;
    vu(e, t + a * u, r + s * u, 1), d += e.spacingPx;
  }
  return l - d + e.spacingPx;
}
function _s(e, t, r, n, i, o) {
  const s = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, d = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, u = 0, c = s, f = c + l, p = f + d, m = f - c, b = 16;
  let v = o, F = r.x, U = r.y;
  for (let H = 1; H <= b; H++) {
    const D = c + m * H / b, P = ((c - D) * t.x + (D - u) * r.x) / (c - u), W = ((c - D) * t.y + (D - u) * r.y) / (c - u), R = ((f - D) * r.x + (D - c) * n.x) / (f - c), ee = ((f - D) * r.y + (D - c) * n.y) / (f - c), ne = ((p - D) * n.x + (D - f) * i.x) / (p - f), le = ((p - D) * n.y + (D - f) * i.y) / (p - f), E = ((f - D) * P + (D - u) * R) / (f - u), G = ((f - D) * W + (D - u) * ee) / (f - u), re = ((p - D) * R + (D - c) * ne) / (p - c), pe = ((p - D) * ee + (D - c) * le) / (p - c), he = ((f - D) * E + (D - c) * re) / (f - c), me = ((f - D) * G + (D - c) * pe) / (f - c);
    v = Zo(e, F, U, he, me, v), F = he, U = me;
  }
  return v;
}
function bb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, a = o.width, s = r * o.height, l = e.activeStroke;
  let d = t * a;
  if (l && Math.abs(d - l.prev.x) > a * 0.5 && (d += d < l.prev.x ? a : -a), !l) {
    const p = sh(i, n, o), m = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), b = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), v = String((n == null ? void 0 : n.toolKind) || "") === "eraser", F = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", vu(p, d, s, 1), e.activeStroke = {
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
      velocityWidthFactor: b,
      distSinceStamp: 0,
      isEraser: v,
      layerKind: F,
      pointCount: 1
    }, nn(e);
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
  ), l.pprev = l.prev, l.prev = { x: d, y: s }, l.lastMidX = u, l.lastMidY = c, l.pointCount++, nn(e);
}
function _u(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Ai(t, r), a = {
    descriptor: n,
    committedMask: Ai(t, r),
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
    committedPaint: Ai(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Ai(t, r);
  let d = null, u = "", c = null;
  const f = /* @__PURE__ */ new Map();
  let p = null;
  function m(re) {
    return {
      actionGroupId: re,
      descriptor: n,
      committedPaint: Ai(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function b(re) {
    let pe = i.get(re);
    return pe || (pe = m(re), i.set(re, pe)), pe;
  }
  function v(re) {
    return u === "mask" ? a : d ? b(d) : s;
  }
  function F(re) {
    var K;
    const pe = !c || c.length !== re.length || re.some((de, q) => de !== c[q]), he = u === "paint" && ((K = d ? i.get(d) : s) == null ? void 0 : K.activeStroke) || null;
    let me = a.displayDirty || s.displayDirty || pe;
    for (const de of re) {
      const q = i.get(de);
      if (q != null && q.displayDirty) {
        me = !0;
        break;
      }
    }
    if (he && (me = !0), !me) return;
    a.displayDirty = !1, s.displayDirty = !1;
    for (const de of re) {
      const q = i.get(de);
      q && (q.displayDirty = !1);
    }
    c = [...re];
    const Z = l.ctx;
    jt(l);
    const w = !!(he != null && he.isEraser);
    for (const de of re) {
      const q = i.get(de);
      if (!q) continue;
      const Pe = d === q.actionGroupId && u === "paint" ? q.activeStroke : null;
      if (w)
        zt = $r(zt, t, r), jt(zt), zt.ctx.drawImage(q.committedPaint.canvas, 0, 0), Xr(zt.ctx, o.canvas), Z.drawImage(zt.canvas, 0, 0);
      else if (Z.drawImage(q.committedPaint.canvas, 0, 0), Pe) {
        const te = q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Pe.strokeOpacity ?? 1));
        Z.save(), Z.globalAlpha = te, Z.drawImage(o.canvas, 0, 0), Z.restore();
      }
    }
  }
  function U(re) {
    var he, me, Z, w, K;
    for (const de of i.values())
      jt(de.committedPaint), jt(de.currentStroke), de.activeStroke = null, nn(de);
    jt(a.committedMask), jt(a.currentStroke), a.activeStroke = null, a.painted = !1, f.clear(), nn(a), nn(s), c = null;
    const pe = [
      ...Array.isArray((me = (he = re == null ? void 0 : re.painting) == null ? void 0 : he.paint) == null ? void 0 : me.strokes) ? re.painting.paint.strokes : [],
      ...Array.isArray((w = (Z = re == null ? void 0 : re.painting) == null ? void 0 : Z.mask) == null ? void 0 : w.strokes) ? re.painting.mask.strokes : []
    ];
    for (const de of pe) {
      if (((K = de == null ? void 0 : de.targetSpace) == null ? void 0 : K.kind) !== "ERP_GLOBAL") continue;
      const q = String((de == null ? void 0 : de.layerKind) || "paint"), Pe = String((de == null ? void 0 : de.toolKind) || "pen") === "eraser";
      if (q === "mask") {
        const te = a.descriptor;
        Pe ? (zt = $r(zt, te.width, te.height), jt(zt), Da(zt.ctx, de, te), Xr(a.committedMask.ctx, zt.canvas)) : (Da(a.committedMask.ctx, de, te), a.painted = !0);
        continue;
      }
      if (Pe) {
        zt = $r(zt, n.width, n.height), jt(zt), Da(zt.ctx, de, n);
        for (const te of i.values())
          Xr(te.committedPaint.ctx, zt.canvas), nn(te);
      } else {
        const te = String((de == null ? void 0 : de.actionGroupId) || "__default__"), O = b(te), J = O.descriptor;
        Da(O.committedPaint.ctx, de, J), nn(O);
      }
    }
    F([...i.keys()]);
  }
  function H(re, pe) {
    u = String((re == null ? void 0 : re.layerKind) || "");
    const he = String((re == null ? void 0 : re.toolKind) || "") === "eraser";
    if (u === "mask")
      d = null, jt(a.currentStroke), a.activeStroke = null, nn(a);
    else {
      const me = he ? s : b(String((re == null ? void 0 : re.actionGroupId) || "__default__"));
      d = he ? "" : String((re == null ? void 0 : re.actionGroupId) || "__default__"), jt(me.currentStroke), me.activeStroke = null, nn(me);
    }
  }
  function D(re, pe) {
    var q;
    const he = String((re == null ? void 0 : re.layerKind) || "paint"), me = String((re == null ? void 0 : re.toolKind) || "") === "eraser", Z = he === "mask" ? a : me ? s : b(String((re == null ? void 0 : re.actionGroupId) || d || "__default__")), w = Z.activeStroke, K = Z.descriptor;
    if (w && w.pointCount > 1) {
      const ue = Z.currentStroke.ctx;
      ue.globalCompositeOperation = "source-over";
      const Pe = {
        ctx: ue,
        stampTex: w.stampTex,
        radiusPx: w.radiusPx,
        spacingPx: w.spacingPx,
        desc: K,
        aspect: w.aspect,
        angle: w.angle,
        stampKind: w.stampKind,
        scatter: w.scatter,
        latitudeCorrection: w.latitudeCorrection
      };
      w.pointCount === 2 ? Zo(Pe, w.lastMidX, w.lastMidY, w.prev.x, w.prev.y, w.distSinceStamp) : _s(Pe, w.pprev, { x: w.lastMidX, y: w.lastMidY }, w.prev, w.prev, w.distSinceStamp);
    }
    Z.lassoPreviewActive && (jt(Z.currentStroke), Qa(Z.currentStroke.ctx, re, K), Z.lassoPreviewActive = !1);
    const de = he === "mask" ? a.committedMask : Z.committedPaint;
    if (me && he === "paint")
      for (const ue of i.values())
        Xr(ue.committedPaint.ctx, Z.currentStroke.canvas), nn(ue);
    else if (me)
      Xr(de.ctx, Z.currentStroke.canvas);
    else {
      he === "mask" && (a.painted = !0);
      const ue = Math.max(0, Math.min(1, (w == null ? void 0 : w.strokeOpacity) ?? 1));
      de.ctx.save(), de.ctx.globalAlpha = ue, de.ctx.drawImage(Z.currentStroke.canvas, 0, 0), de.ctx.restore();
    }
    ob() && (String((re == null ? void 0 : re.toolKind) || ""), String((K == null ? void 0 : K.kind) || ""), Number((K == null ? void 0 : K.width) || 0), Number((K == null ? void 0 : K.height) || 0), String(((q = re == null ? void 0 : re.targetSpace) == null ? void 0 : q.viewMode) || ""), Number((re == null ? void 0 : re.aspect) ?? 1), Bd(Z.currentStroke.canvas), Bd(de.canvas), void 0), jt(Z.currentStroke), Z.activeStroke = null, nn(Z), f.clear(), d = null, u = "", F([...i.keys()]);
  }
  function P(re) {
    if (u === "mask")
      jt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, nn(a);
    else if (u === "paint" && !d)
      jt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, nn(s);
    else if (d) {
      const pe = i.get(d);
      pe && (jt(pe.currentStroke), pe.activeStroke = null, pe.lassoPreviewActive = !1, nn(pe));
    }
    f.clear(), d = null, u = "", F([...i.keys()]);
  }
  function W(re, pe) {
    var me;
    if (u = String((re == null ? void 0 : re.layerKind) || ""), String(((me = re == null ? void 0 : re.geometry) == null ? void 0 : me.geometryKind) || "") === "lasso_fill") {
      if (u === "mask")
        jt(a.currentStroke), Qa(a.currentStroke.ctx, re, a.descriptor), a.lassoPreviewActive = !0, nn(a);
      else {
        const Z = String((re == null ? void 0 : re.toolKind) || "") === "eraser", w = Z ? s : b(String((re == null ? void 0 : re.actionGroupId) || d || "__default__"));
        d = Z ? "" : String((re == null ? void 0 : re.actionGroupId) || d || "__default__"), jt(w.currentStroke), Qa(w.currentStroke.ctx, re, w.descriptor), w.lassoPreviewActive = !0, nn(w);
      }
      F([...i.keys()]);
    }
  }
  function R(re) {
    return F(re ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: a.committedMask,
      descriptor: n
    };
  }
  function ee(re) {
    return i.get(String(re)) ?? null;
  }
  function ne() {
    return [...i.keys()];
  }
  function le(re) {
    var ue;
    const pe = i.get(String(re));
    if (!pe) return null;
    const he = u === "paint" && d === pe.actionGroupId, me = u === "paint" && ((ue = d ? i.get(d) : s) == null ? void 0 : ue.activeStroke) || null, Z = !!(me != null && me.isEraser), w = he ? pe.activeStroke : null;
    if (!Z && !w) return pe.committedPaint.canvas;
    const K = `${pe.revision}:${s.revision}:${Z}`, de = f.get(pe.actionGroupId);
    if ((de == null ? void 0 : de.key) === K) return de.surface.canvas;
    const q = $r((de == null ? void 0 : de.surface) ?? null, t, r);
    return jt(q), q.ctx.drawImage(pe.committedPaint.canvas, 0, 0), Z ? Xr(q.ctx, o.canvas) : (q.ctx.save(), q.ctx.globalAlpha = pe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, w.strokeOpacity ?? 1)), q.ctx.drawImage(o.canvas, 0, 0), q.ctx.restore()), f.set(pe.actionGroupId, { key: K, surface: q }), q.canvas;
  }
  function E() {
    const re = u === "mask" ? a.activeStroke : null;
    return !a.painted && (!re || re.isEraser) ? null : `${a.revision}:${!!re}`;
  }
  function G() {
    const re = E();
    if (re === null)
      return p = null, null;
    if ((p == null ? void 0 : p.key) === re) return p.surface.canvas;
    const pe = $r((p == null ? void 0 : p.surface) ?? null, t, r);
    jt(pe);
    const he = u === "mask" ? a.activeStroke : null;
    return he != null && he.isEraser ? (zt = $r(zt, t, r), jt(zt), zt.ctx.drawImage(a.committedMask.canvas, 0, 0), Xr(zt.ctx, o.canvas), Fl(pe.ctx, zt.canvas)) : (Fl(pe.ctx, a.committedMask.canvas), he && Fl(pe.ctx, o.canvas)), p = { key: re, surface: pe }, pe.canvas;
  }
  return {
    rebuildCommitted: U,
    beginStroke: H,
    appendStrokePoint: bb,
    updateActiveStroke: W,
    commitActiveStroke: D,
    cancelActiveStroke: P,
    getErpTarget: R,
    ensureTarget: v,
    getGroupTarget: ee,
    getGroupDisplayCanvas: le,
    getMaskDisplayCanvas: G,
    getMaskDisplayRevision: E,
    getAllGroupIds: ne
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Rt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Su(e, t) {
  let r = Rt(t) - Rt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const gc = 3;
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
function lh(e) {
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
const Jd = Math.PI / 180, Zd = 0.12, vb = gc, _b = 35, Sb = 140, Ao = 100, wb = 20, Qd = 0.8;
function xb(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Ao), 1, 179) * Jd;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Jd;
}
function wu(e = {}) {
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
    const W = Number(P || performance.now()), R = Number(U), ee = Number(H), ne = R - l.drag.lastX, le = ee - l.drag.lastY;
    l.drag.lastX = R, l.drag.lastY = ee, l.drag.lastTs = W;
    const E = n() || { x: 1, y: 1 }, G = Number(E.x || 1), re = Number(E.y || 1), pe = { ...t() };
    let he = 0, me = 0;
    if (D === "unwrap") {
      const w = i() || { w: 1, h: 1 }, K = Math.max(1, Number(w.w || 1)), de = Math.max(1, Number(w.h || 1)), q = ne / K, ue = le / de;
      he = -q * 360 * G, me = ue * 180 * re;
    } else {
      const w = o() || { w: 0, h: 0 }, K = Math.max(1, Number(w.w || 0)), de = Math.max(1, Number(w.h || 0));
      if (K > 1 && de > 1) {
        const q = Ee(Number(pe.fov || Ao), 1, 179), ue = Ee(xb(q, K, de), 0.1, 179);
        he = -(ne / K) * q * G, me = le / de * ue * re;
      } else
        he = -ne * Zd * G, me = le * Zd * re;
    }
    pe.yaw = Rt(Number(pe.yaw || 0) + he), pe.pitch = Ee(Number(pe.pitch || 0) + me, -89.9, 89.9), r(pe), l.velHistory.push({ ts: W, yaw: pe.yaw, pitch: pe.pitch });
    let Z = 0;
    for (; Z < l.velHistory.length - 1 && l.velHistory[Z].ts < W - 100; ) Z++;
    return Z > 0 && l.velHistory.splice(0, Z), l.inertia.active = !1, l.inertia.lastTs = W, a(), d("drag", { phase: "move", dx: ne, dy: le, dYaw: he, dPitch: me }), !0;
  }
  function f(U = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const H = Number(U || performance.now());
    l.drag.lastTs = H;
    const D = l.velHistory.filter((W) => H - W.ts <= 80);
    if (D.length >= 2) {
      const W = D[0], R = D.at(-1), ee = Math.max(1e-3, (R.ts - W.ts) / 1e3);
      let ne = R.yaw - W.yaw;
      ne > 180 && (ne -= 360), ne < -180 && (ne += 360), l.inertia.vx = ne / ee, l.inertia.vy = (R.pitch - W.pitch) / ee;
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
    P.yaw = Rt(Number(P.yaw || 0) + l.inertia.vx * D), P.pitch = Ee(Number(P.pitch || 0) + l.inertia.vy * D, -89.9, 89.9);
    const W = Math.exp(-5.5 * D);
    return l.inertia.vx *= W, l.inertia.vy *= W, Math.abs(l.inertia.vx) < Qd && Math.abs(l.inertia.vy) < Qd && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(P), a(), l.inertia.active;
  }
  function m() {
    const U = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], U;
  }
  function b(U) {
    const H = Math.sign(Number(U || 0));
    if (!H) return !1;
    const D = { ...t() }, P = Number(D.fov || Ao);
    return D.fov = Ee(P + H * vb, _b, Sb), r(D), a(), d("wheel", { deltaSign: H, fovBefore: P, fovAfter: D.fov }), !0;
  }
  function v(U, H = 0) {
    return b(Ss(U, H));
  }
  function F() {
    r({ yaw: 0, pitch: 0, fov: Ao }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, a();
  }
  return {
    state: l,
    startDrag: u,
    moveDrag: c,
    endDrag: f,
    stepInertia: p,
    stopMotion: m,
    applyWheel: b,
    applyWheelEvent: v,
    resetView: F
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
function xu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return jn(e.x / t, e.y / t, e.z / t);
}
function wn(e, t) {
  const r = e * vt, n = t * vt, i = Math.cos(n);
  return jn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function Qi(e, t, r = 0) {
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
function kt(e, t = null) {
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
    const o = kt(n.z_index ?? n.zIndex, t.length);
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
  const r = kt(e.t, 0), n = kt(e.widthScale, null), i = kt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = kt(e.u, null), a = kt(e.v, null);
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
    const o = kt(e.u, null), a = kt(e.v, null);
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
  const o = kt(e.size, null), a = kt(e.opacity, null);
  if (o == null || a == null) return null;
  const s = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!s || !l) return null;
  const d = kt(e.radiusValue, null), u = String(e.radiusModel || "").trim() || null;
  let c = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    c = {
      r: Math.max(0, Math.min(1, kt(f.r, 0))),
      g: Math.max(0, Math.min(1, kt(f.g, 0))),
      b: Math.max(0, Math.min(1, kt(f.b, 0))),
      a: Math.max(0, Math.min(1, kt(f.a, 1)))
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
    hardness: kt(e.hardness, null),
    flow: kt(e.flow, null),
    spacing: kt(e.spacing, null),
    createdAt: Math.trunc(kt(e.createdAt, 0)),
    color: c,
    radiusModel: u,
    radiusValue: d == null ? null : Math.max(0, d),
    geometry: i
  };
}
function ef(e, t) {
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
  const t = kt(e.u0, null), r = kt(e.v0, null), n = kt(e.u1, null), i = kt(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (s) => Math.max(0, Math.min(1, s)), a = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return a.u1 <= a.u0 || a.v1 <= a.v0 ? null : a;
}
function Eb(e) {
  const t = e || {};
  return {
    du: kt(t.du, 0) ?? 0,
    dv: kt(t.dv, 0) ?? 0,
    rot_deg: kt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, kt(t.scale, 1) ?? 1)
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
    z_index: Math.max(0, kt(e.z_index ?? e.zIndex, t) ?? t),
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
function eo(e) {
  const t = kb();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Mb(e.groups),
    paint: ef(e.paint, "paint"),
    mask: ef(e.mask, "mask"),
    raster_objects: Fb(e.raster_objects)
  };
}
const Gn = 1, Wn = 179, yc = 85;
function al(e) {
  const t = ((nt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function ch(e, t) {
  let r = nt(e, 0) - nt(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function uh(e, t, { shiftKey: r = !1 } = {}) {
  let n = nt(e, 0) + nt(t, 0) * qt;
  return r && (n = Math.round(n / 15) * 15), al(n);
}
function nt(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function Wr(e = {}) {
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
function fi(e, t) {
  const r = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Wr(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function ku(e, t) {
  const r = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, nt(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Mu(e, t) {
  const r = Math.max(1e-12, nt(t, 1)), n = Math.max(1e-6, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * qt, Gn, Wn), a = Ee(2 * Math.atan(i / (2 * r)) * qt, Gn, Wn);
  return { hFOV_deg: o, vFOV_deg: a };
}
function Tb(e, t, r) {
  const n = nt(e == null ? void 0 : e.x, 0), i = nt(e == null ? void 0 : e.y, 0), o = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), a = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), s = Wr(t), l = Math.max(1e-12, nt(r, 1)), d = 2 * l * s.tanHalfX, u = 2 * l * s.tanHalfY;
  return {
    x: n + (o - d) * 0.5,
    y: i + (a - u) * 0.5,
    w: d,
    h: u,
    focalPx: l
  };
}
function Pu(e, t, r = yc) {
  const n = Math.max(1e-12, nt(t, 1)), i = Ee(nt(r, yc), 1, 89.999), o = n * Math.tan(i * vt), a = Math.max(1, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), s = Math.max(1, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(a * 0.5, o),
    halfH: Math.min(s * 0.5, o)
  };
}
function dh(e, t, r) {
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
function tf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Lb(e, t) {
  const r = tf(e, 1), n = tf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), a = Math.max(1, Math.round(n * i)), s = (d, u) => u ? s(u, d % u) : d, l = s(o, a) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(a / l))}`;
}
function gi(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * vt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * vt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function ci(e) {
  const t = gi(e), n = [
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
function Nu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ci(t), t;
}
function fh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const a = o == null || String(o).trim() === "" ? NaN : Number(o), s = Number.isFinite(a) ? Ee(a, Gn, Wn) : Ee(Math.min(42, nt(i, 100) * 0.42), 8, 96);
  return Nu({
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
  return /^\d+:\d+$/.test(t) ? t : ci(e);
}
function ph(e, t) {
  const r = Wr(e), n = nt(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * qt, o = 2 * Math.atan(r.tanHalfY * n) * qt;
  return i < Gn || i > Wn || o < Gn || o > Wn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function hh(e, t, r = gc) {
  const n = Math.sign(nt(t, 0)), i = Math.abs(nt(r, gc));
  if (!n || !(i > 0)) return null;
  const o = Wr(e), a = o.hFovDeg + n * i;
  if (a < Gn || a > Wn) return null;
  const s = Math.tan(a * vt * 0.5);
  return ph(e, s / o.tanHalfX);
}
function mh(e, t) {
  const r = Wr(e), n = Qi(r.yawDeg, r.pitchDeg, r.rollDeg), i = nt(t == null ? void 0 : t.x, 0), o = nt(t == null ? void 0 : t.y, 0);
  return xu(ws(ws(n.fwd, xs(n.right, i)), xs(n.up, o)));
}
function Vb(e) {
  return jn(e.x, e.y, -e.z);
}
function ts(e) {
  return jn(e.x, e.y, -e.z);
}
function Mn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = Qi(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function gh(e) {
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
function yi(e) {
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
const ii = 1e-6, bc = 1e-6, Rb = 1e-9;
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
function Yi(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function qi(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], a = r.map((f) => -f / i), s = n.map((f) => f / o);
  if (a.reduce((f, p, m) => f + p * s[m], 0) < 0) return r.map(() => 0);
  const l = a.map((f, p) => (f * o + s[p] * i) / (i + o)), d = (f) => Math.sqrt(f.reduce((p, m) => p + m * m, 0)), u = 3 * Math.min(d(a), d(s)), c = d(l);
  return c <= u ? l : l.map((f) => f * u / c);
}
function yh(e, t, r, n) {
  const i = r[n], o = r[n + 1], a = t[n + 1] - t[n], s = i.map((u, c) => o[c] - u);
  let l = s;
  Yi(e, n) && (l = qi(t, n, r[n - 1].map((u, c) => u - i[c]), s).map((u) => u * a));
  let d = s;
  return Yi(e, n + 1) && (d = qi(t, n + 1, s.map((u) => -u), r[n + 2].map((u, c) => u - o[c])).map((u) => u * a)), [l.map((u) => u / 3), d.map((u) => -u / 3)];
}
function bh(e, t, r, n, i) {
  const [[o], [a]] = yh(e, t, r.map((s) => [s]), n);
  return ea(r[n], r[n] + o, r[n + 1] + a, r[n + 1], i);
}
function zb(e, t, r, n) {
  var d, u;
  const i = e.map((c) => c.value);
  let [o, a] = yh(e, t, i, r);
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
function vc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Ti(e, t) {
  return Hb(Ms([-e[0], -e[1], -e[2], e[3]], t));
}
function Ll(e, t, r) {
  return Ms(e, vc(Ti(e, t).map((n) => r * n)));
}
function Vl(e, t) {
  const r = jb(e, t);
  if (Math.abs(r) > bc) return r < 0;
  const [n, i, o] = Ti(e, t);
  for (const a of [-i, n, o])
    if (Math.abs(a) > bc) return a < 0;
  return !1;
}
function Ra(e) {
  const { x: t, y: r, z: n, w: i } = yi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function _c(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Gb(e, t, r, n) {
  const i = Ra(e[r].value);
  let o = Ra(e[r + 1].value);
  Vl(i, o) && (o = Dl(o));
  const a = t[r + 1] - t[r], s = Ti(i, o);
  let l = s;
  if (Yi(e, r)) {
    let P = Ra(e[r - 1].value);
    Vl(P, i) && (P = Dl(P)), l = qi(t, r, Ti(i, P), s).map((W) => W * a);
  }
  let d = s;
  if (Yi(e, r + 1)) {
    let P = Ra(e[r + 2].value);
    Vl(o, P) && (P = Dl(P)), d = qi(t, r + 1, Ti(o, i), Ti(o, P)).map((W) => W * a);
  }
  const u = Ms(i, vc(l.map((P, W) => 0.5 * (P - s[W])))), c = Ms(o, vc(s.map((P, W) => 0.5 * (P - d[W])))), [f, p, m, b] = Ll(Ll(i, o, n), Ll(u, c, n), 2 * n * (1 - n)), { yawDeg: v, pitchDeg: F, rollDeg: U } = gh(Qo({ x: f, y: p, z: m, w: b })), H = e[r].value, D = e[r + 1].value;
  return {
    yaw_deg: _c(v, H.yaw_deg, D.yaw_deg, n),
    pitch_deg: F,
    roll_deg: _c(U, H.roll_deg, D.roll_deg, n)
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
function vh(e, t) {
  const r = ta(e, t), n = t.map((a, s) => a - r * e[s]), i = Ps(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((a) => a * o);
}
function Ii(e, t) {
  const r = Ps(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function $a(e, t, r) {
  return Ii(e, vh(e, t).map((n) => r * n));
}
function Rl(e, t) {
  const r = Ns(e[t].value), n = Ns(e[t + 1].value), i = ta(r, n), o = i < 0 && Ps(n.map((l, d) => l - i * r[d])) <= bc;
  let a;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    a = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    a = vh(r, n);
  const s = Ps(a);
  return [a, a.map((l, d) => Math.cos(s) * l - s * Math.sin(s) * r[d]), o];
}
function Wb(e, t, r, n) {
  const i = Ns(e[r].value), o = Ns(e[r + 1].value), [a, s, l] = Rl(e, r);
  let d = a, u = s;
  const c = t[r + 1] - t[r];
  Yi(e, r) && (d = qi(t, r, Rl(e, r - 1)[1].map((H) => -H), d).map((H) => H * c)), Yi(e, r + 1) && (u = qi(t, r + 1, u.map((H) => -H), Rl(e, r + 1)[0]).map((H) => H * c));
  let f, p, m;
  if (l) {
    const H = Math.PI, D = ea(0, ta(d, a) / H / 3, H - ta(u, s) / H / 3, H, n);
    [f, p, m] = Ii(i, a.map((P) => D * P / H));
  } else {
    const H = $a(Ii(i, d.map((W) => W / 3)), Ii(o, u.map((W) => -W / 3)), n), D = $a(Ii(i, d.map((W) => n * W / 3)), H, n), P = $a(H, Ii(o, u.map((W) => -(1 - n) * W / 3)), n);
    [f, p, m] = $a(D, P, n);
  }
  const b = Math.hypot(f, m), v = e[r].value.yaw_deg, F = e[r + 1].value.yaw_deg;
  return { yaw_deg: b <= Rb ? v + (F - v) * n : _c(Math.atan2(f, m) * 180 / Math.PI, v, F, n), pitch_deg: Math.atan2(p, b) * 180 / Math.PI };
}
function Kb(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = bh(e, t, e.map((a) => a.value[o]), r, n);
  return i;
}
function Bb(e, t, r, n) {
  return bh(e, t, e.map((i) => i.value), r, n);
}
const Ub = { position: zb, rotation: Gb, direction: Wb, size: Kb };
function $t(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Va(e[t].value);
  if (r <= n[0].frame + ii) return Va(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - ii) return Va(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + ii; ) o += 1;
  const a = n[o];
  if (Math.abs(r - a.frame) <= ii || a.easing === "hold") return Va(a.value);
  const s = n.map((d) => d.frame), l = $b(a.easing, (r - s[o]) / (s[o + 1] - s[o]));
  return (Ub[t] ?? Bb)(n, s, o, l);
}
function Sc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Yb(e) {
  return Math.min(1, Math.max(0, e));
}
function _h(e) {
  return Math.max(1e-6, e);
}
function Sh(e, t) {
  return t - (e.start - e.in);
}
function to(e, t) {
  return t >= e.start - ii && (e.duration === null || t < e.start + e.duration - ii);
}
function Cu(e, t) {
  return {
    position: $t(e, "position", t),
    ...$t(e, "rotation", t),
    hFOV_deg: Sc($t(e, "fov", t)),
    aspect: e.aspect
  };
}
function sl(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Sh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Cu(n, r),
    scene: {
      active: i.visible && to(i.clip, r),
      clip_frame: o,
      position: $t(i, "position", o),
      ...$t(i, "rotation", o),
      scale: _h($t(i, "scale", o))
    },
    stickers: e.stickers.map((a) => pi(a, r))
  };
}
function qb(e, t) {
  if (e.placement === "world")
    return {
      position: $t(e, "position", t),
      ...$t(e, "rotation", t),
      scale: _h($t(e, "scale", t))
    };
  const r = $t(e, "size", t);
  return {
    ...$t(e, "direction", t),
    roll_deg: $t(e, "roll", t),
    hFOV_deg: Sc(r.hFOV_deg),
    vFOV_deg: Sc(r.vFOV_deg)
  };
}
function pi(e, t) {
  const r = Sh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && to(e.clip, t),
    clip_frame: r,
    ...qb(e, r),
    opacity: Yb($t(e, "opacity", r))
  };
}
const Xb = 2, Jb = ["sky", "world"], wc = ["perspective", "erp"], Zb = ["input", "output", "temp"], wh = [0.42, 0, 0.58, 1], xh = 1, Au = 1e3, xc = 1e7, Iu = xc;
function Zt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Gt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Eu(e, t) {
  const r = Gt(e, t);
  return r !== null && r > 0 ? r : t;
}
function kn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ll(e) {
  const t = Gt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ns(e) {
  const t = ll(e);
  return t === null ? null : kn(t, -xc, xc);
}
function no(e) {
  const t = Eu(e, null);
  return t === null ? null : kn(t, xh, Au);
}
function kh(e) {
  const t = ll(e);
  return t !== null && t >= 1 ? Math.min(t, Iu) : null;
}
function na(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Mh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Gt(r, null));
  return t.includes(null) ? null : t;
}
function Ph(e) {
  return Mh(e) || [0, 0, 0];
}
function Nh(e) {
  const t = Zt(e) ? e : {};
  return {
    yaw_deg: Gt(t.yaw_deg, 0),
    pitch_deg: kn(Gt(t.pitch_deg, 0), -90, 90),
    roll_deg: Gt(t.roll_deg, 0)
  };
}
function Qb(e) {
  return kn(Gt(e, 90), 0.1, 179);
}
function e1(e) {
  return Eu(e, 1);
}
function t1(e) {
  const t = Zt(e) ? e : {};
  return {
    yaw_deg: Gt(t.yaw_deg, 0),
    pitch_deg: kn(Gt(t.pitch_deg, 0), -90, 90)
  };
}
function n1(e) {
  return Gt(e, 0);
}
function r1(e) {
  const t = Zt(e) ? e : {};
  return {
    hFOV_deg: kn(Gt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: kn(Gt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Ch(e) {
  return kn(Gt(e, 1), 0, 1);
}
const Ou = [["position", Ph], ["rotation", Nh], ["fov", Qb]], cl = [["position", Ph], ["rotation", Nh], ["scale", e1]], Fu = [["direction", t1], ["roll", n1], ["size", r1], ["opacity", Ch]], Tu = [...cl, ["opacity", Ch]];
function i1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Gt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...wh];
}
function o1(e) {
  if (!Zt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Mh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function a1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Zt(i)) continue;
    const o = ns(i.frame);
    if (o === null) continue;
    const a = { frame: o, value: t(i.value), easing: i1(i.easing) }, s = r ? o1(i.handles) : null;
    s && (a.handles = s), n.set(o, a);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Du(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Zt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: a1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Ah(e) {
  const t = Zt(e) ? e : {}, r = ns(t.start), n = ns(t.in), i = ns(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function s1(e) {
  const t = Zt(e) ? e : {}, r = kn(Gt(t.x0, 0), 0, 1), n = kn(Gt(t.y0, 0), 0, 1), i = kn(Gt(t.x1, 1), 0, 1), o = kn(Gt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function l1(e) {
  if (!Zt(e)) return null;
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
    clip: Ah(e.clip),
    visible: na(e.visible, !0),
    locked: na(e.locked, !1),
    crop: s1(e.crop),
    ...Du(e, n ? Tu : Fu)
  };
  return n || (i.z_index = ll(e.z_index) ?? 0), i;
}
function u1(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const a = Zt(o) ? c1(o) : null;
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
function Ih(e) {
  if (!Zt(e)) return null;
  const t = wc.includes(e.projection) ? e.projection : wc[0];
  return { aspect: Eu(e.aspect, 1), projection: t, visible: na(e.visible, !0), ...Du(e, Ou) };
}
function Lu() {
  return Ih({});
}
function Cs(e) {
  const t = Zt(e.timeline) ? e.timeline : {}, r = Zt(e.scene) ? e.scene : {};
  return {
    version: Xb,
    timeline: {
      fps: no(t.fps) ?? 24,
      length: kh(t.length)
    },
    camera: Ih(e.camera),
    scene: { clip: Ah(r.clip), visible: na(r.visible, !0), ...Du(r, cl) },
    stickers: u1(e.stickers),
    painting: eo(e.painting),
    painting_layer: Zt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: na(e.painting_visible, !0)
  };
}
function d1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Zt(r)) return null;
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
  if (!Zt(t)) return null;
  const r = kn(Gt(t.hFOV_deg, 90), 1, 179), n = kn(Gt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function p1(e) {
  const t = Zt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Zt) : [];
  return r.sort((n, i) => Gt(n.z_index, 0) - Gt(i.z_index, 0)), Cs({
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
  if (!Zt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? p1(t) : Cs(t);
}
const $l = {
  state: { painting_visible: !0 },
  camera: { projection: wc[0], visible: !0 },
  scene: { visible: !0 }
};
function zl(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function kc(e) {
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
function nf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function ra(e, t) {
  const r = no(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (s) => ll(s * n), { length: o } = e.timeline, a = nf(e.scene.clip, i);
  return Cs({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...jl(e.camera, Ou, i, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...jl(e.scene, cl, i, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((s) => {
      const { clip: l, anchor: d, newAnchor: u } = nf(s.clip, i), c = s.placement === "world" ? Tu : Fu;
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
function Eh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Oh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= ii);
}
function Fh(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Eh(e.keyframes[n - 1].easing) : [...wh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function ln(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Hl(i.value, n);
    return;
  }
  const o = Oh(i, r);
  o ? o.value = Hl(o.value, n) : Fh(i, r, Hl($t(e, t, r), n));
}
function ro(e) {
  return e.placement === "world" ? Tu.map(([t]) => t) : e.placement === "sky" ? Fu.map(([t]) => t) : (e.clip ? cl : Ou).map(([t]) => t);
}
function h1(e, t) {
  for (const r of ro(e))
    Oh(e[r], t) || Fh(e[r], t, $t(e, r, t));
}
function m1(e) {
  const t = ro(e), r = /* @__PURE__ */ new Map();
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
    const s = $t(e, o, n);
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
function Th(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((a) => r.length > 1 ? a.frame >= n && a.frame < i : a.frame === n));
}
function v1(e, t, r) {
  const n = Th(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function _1(e, t, r, n) {
  for (const i of Th(e, t, r)) i.easing = Eh(n);
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
  return ro(e).map((t) => e[t]);
}
function M1(e, { cameraOnly: t = !1, camera: r = !1 } = {}) {
  return t ? As(e.camera).some((n) => n.keyframes.length > 0) : Dh(e, { camera: r });
}
function Is(e) {
  return As(e).some((t) => t.keyframes.length > 0) || !!e.clip && !k1(e.clip);
}
function Dh(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Is);
}
const P1 = 1e5;
function Lh(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
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
  return e > 0 ? no(Math.min(e, Au)) : null;
}
function C1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : kh(Math.max(1, Math.min(e, Iu)));
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
    painting: eo(null),
    painting_layer: null,
    ui_settings: Es(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Vh(e, t = 2048) {
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
  return Array.isArray(e) ? e.map((t) => Nu(t)) : [];
}
function L1(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((a) => String((a == null ? void 0 : a.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Rh(e, t = {}) {
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
      painting: eo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Es(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return a && (s.ui_settings = Es({ ...s.ui_settings, ...a })), s.output_preset = Vh(
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
function $h(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: a, scene: s = null, camera: l = !1 } = t, d = no(t.fps);
  let u;
  try {
    u = dr(e);
  } catch {
    u = dr(null);
  }
  d && d !== u.timeline.fps && (u = ra(u, d));
  const c = l && u.camera === null;
  if (c && (u = { ...u, camera: Lu() }), s) {
    let f = dr(s);
    d && d !== f.timeline.fps && (f = ra(f, d)), u = { ...f, camera: u.camera, cutout_state: u };
  }
  return {
    ...u,
    ...c ? { default_camera: !0 } : {},
    coverage: Pn(i),
    bg_color: n,
    output_preset: Vh(r),
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
      for (const s of ro(o)) o[s].keyframes = a[s].keyframes;
    }
}
function Vu(e, t) {
  const r = pi(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const j1 = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function rf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function H1(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[j1[r]].keyframes.length));
}
function zh(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = rf(r, ["yaw_deg", "pitch_deg"]), o = rf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && ln(e, "direction", n, i), r.rot_deg !== void 0 && ln(e, "roll", n, r.rot_deg), Object.keys(o).length && ln(e, "size", n, o);
}
const ul = ["position_x", "position_y", "position_z"], dl = "camera";
function jh(e, t) {
  const r = Cu(e, t);
  return Nu({
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
      rotation: { value: { yaw_deg: Rt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
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
  Object.keys(i).length && ln(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && ln(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * vt * 0.5) / Math.tan(r.vFOV_deg * vt * 0.5)), r.position.some((o, a) => o !== n.position[a]) && ln(e, "position", t, [...r.position]);
}
function B1(e, t) {
  const r = $t(e, "position", t), n = $t(e, "rotation", t);
  return {
    ...Object.fromEntries(ul.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: $t(e, "fov", t)
  };
}
function U1(e, t, r, n) {
  const i = ul.indexOf(r);
  if (i >= 0) {
    const o = $t(e, "position", t);
    o[i] = n, ln(e, "position", t, o);
  } else r === "hFOV_deg" ? ln(e, "fov", t, n) : ln(e, "rotation", t, { [r]: n });
}
function Y1(e, t, r) {
  ln(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function q1(e, t) {
  const r = pi(e, t);
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
    const a = $t(e, "position", i);
    a[o] = n, ln(e, "position", i, a);
  } else r === "scale" ? ln(e, "scale", i, n) : r === "opacity" ? ln(e, "opacity", i, n / 100) : ln(e, "rotation", i, { [r]: n });
}
function J1(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && ln(e, i, n, r[i]);
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
function Hh(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ru(e, t, r, n) {
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
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Rt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Mc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Gh(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Wh(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Kh(e) {
  e.default_camera && JSON.stringify(dr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Lu()) && delete e.default_camera;
}
function Bh(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const r = dr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(r.camera) === JSON.stringify(Lu()) && (r.camera = null), kc(r);
}
function Uh(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = dr(r);
    if (kc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && kc(ra(i, o)) === t;
  } catch {
    return !1;
  }
}
const Kl = 0.15, tv = 0.01, nv = 1e-3, rv = 0.05, iv = 4, of = 250, ov = 16, Jn = 1, av = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Dn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function fr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function fl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function io(e, t, r = 0) {
  const n = Mn(e, t, r), i = fr(n, 2);
  return { right: fr(n, 0), up: fr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function sv(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Pc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function lv(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Pc(e, "3dof", r);
}
function cv(e) {
  return io(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function uv(e) {
  return Dn(e.position, io(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Kr(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Go(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function $u(e, t) {
  return Go(Kr(t, e.position), io(e.yaw_deg, e.pitch_deg).forward);
}
function zu(e) {
  return Math.max(e, 1e-6) * rv;
}
function Nc(e, t, r = null, n = Jn) {
  if (t) return t;
  const i = zu(n);
  if (r && $u(e, r) > 0) {
    const o = Kr(r, e.position), a = Math.hypot(...o);
    return a >= i ? r : Dn(e.position, o, i / a);
  }
  return Dn(e.position, io(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Yh(e, t = Jn) {
  return Math.max(e.distance, zu(t));
}
function qh(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > iv ? !1 : t.time - e.time < of || e.cost > ov && t.time - e.wheelTime < of;
}
function ju(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * vt);
  return { tanX: n, tanY: n * r / t };
}
function Xh(e, t, r, n, i = uv(e)) {
  const o = e.roll_deg ?? 0, [a, s] = dv(t, r, o), l = Rt(e.yaw_deg + a / n * 360), d = Ee(e.pitch_deg - s / n * 360, -89.9, 89.9), u = Mn(e.yaw_deg, e.pitch_deg, o), c = Mn(l, d, o), f = Kr(e.position, i), p = [0, 1, 2].map((b) => Go(fr(u, b), f)), m = { ...e, yaw_deg: l, pitch_deg: d, position: Dn(i, fl(c, p)) };
  return { ...m, distance: $u(m, i) };
}
function dv(e, t, r) {
  const n = Math.cos(r * vt), i = Math.sin(r * vt);
  return [e * n + t * i, t * n - e * i];
}
function Jh(e, t, r, n, i, o = e.distance) {
  const { right: a, up: s } = cv(e), l = 2 * o * ju(e, n, i).tanY / i;
  return { ...e, position: Dn(Dn(e.position, a, -t * l), s, r * l), distance: o };
}
function Zh(e, t, r, n = Jn) {
  const i = Kr(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const a = Math.max(n, 1e-6), s = a * tv, l = r > 0 ? Math.min(Math.max(o * Kl, s), o - a * nv) : -Math.max(o * Kl / (1 - Kl), s);
  if (r > 0 && l <= 0) return e;
  const d = { ...e, position: Dn(e.position, i, l / o) };
  return { ...d, distance: Math.max($u(d, t), zu(n)) };
}
function Qh(e, t, r, n) {
  const { tanX: i, tanY: o } = ju(e, r, n), a = Math.atan(Math.min(i, o)), s = Math.max(t.radius, 1e-6) / Math.sin(a) * 1.1, { forward: l } = io(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Dn(t.center, l, -s), distance: s };
}
function Hu(e, t, r, n = null) {
  return em({
    quaternion: yi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(ju(e, t, r).tanY) * qt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function em(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: Jn }, a = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), s = Math.max(a + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: s * 2
  };
}
function ia(e, t, r, n) {
  const { right: i, up: o, forward: a } = tm(e), s = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = s[0] * a[0] + s[1] * a[1] + s[2] * a[2];
  if (!(l > e.near)) return null;
  const d = Math.tan(e.fovY_deg * 0.5 * vt), u = d * e.aspect, c = s[0] * i[0] + s[1] * i[1] + s[2] * i[2], f = s[0] * o[0] + s[1] * o[1] + s[2] * o[2];
  return { x: r * 0.5 * (1 + c / l / u), y: n * 0.5 * (1 - f / l / d), z: l };
}
function tm(e) {
  const t = Qo(e.quaternion), r = fr(t, 2);
  return { right: fr(t, 0), up: fr(t, 1), forward: r.map((n) => -n) };
}
function af(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function fv({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function nm(e, t) {
  if (!e || !t.active) return null;
  const r = mv(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Cc(t),
    itemQuaternion: e.kind === "splat" ? av : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function pv(e, t, r) {
  const n = t.stickers.findIndex((s) => s.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], a = nm(e, o);
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
function Cc(e) {
  return {
    position: [...e.position],
    quaternion: yi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Ac(e, t) {
  return Dn(e.position, fl(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Ic(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Ec({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Oc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((a) => a[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((a) => a[o]))), n = t.map((o, a) => (o + r[a]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function gv(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...Ec(t).map((o) => Ac(e.scene, o)));
  for (const o of r) i.push(...Gu(o));
  for (const { box: o, value: a } of n) i.push(...Ec(o).map((s) => Ac(a, s)));
  return i;
}
function yv(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: yi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Mn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function Gu(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Dn(e.position, fl(e.rotation, [n, i, 0])));
}
function bv(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Oc(Gu(i)) : o != null && o.box ? Oc(Ec(Ic(o.kind, o.box)).map((a) => Ac(n, a))) : { center: [...n.position], radius: n.scale };
}
const vv = 2, _v = 0.5, Sv = 30;
function rm(e, t) {
  const r = Kr(t, e), n = Math.atan2(r[0], -r[2]) * qt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * qt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function wv(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * _v : vv, o = t ? [...t] : Dn(e.position, io(e.yaw_deg, e.pitch_deg).forward, i), a = Math.hypot(...Kr(o, e.position)), s = a > 0 ? rm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(a, 1e-3) * Math.tan(Sv * 0.5 * vt);
  return { position: o, rotation: s, scale: l };
}
function sf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function xv(e) {
  return [0, 1, 2].map((t) => fr(e, t));
}
function lf(e, t, r, n) {
  if (e === "translate") return { position: Dn(t.position, Kr(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * Cv(r.scale, n.scale) / r.scale };
  const i = sf(Qo(n.quaternion), xv(Qo(r.quaternion))), o = sf(i, Mn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: a, pitchDeg: s, rollDeg: l } = gh(o);
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
  const { right: o, up: a, forward: s } = tm(e), l = Kr(t, e.position), d = Go(l, o), u = Go(l, a), c = Go(l, s), f = Math.tan(e.fovY_deg * 0.5 * vt), p = f * e.aspect, m = Math.hypot(d, u, c) * Pv[r] * Math.min(1.9 * f, 7) / 4;
  if (!(c > m)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const b = (D) => {
    const P = m * Math.sqrt(D * D + c * c - m * m);
    return [(D * c - P) / (c * c - m * m), (D * c + P) / (c * c - m * m)];
  }, [v, F] = b(d), [U, H] = b(u);
  return {
    minX: n * 0.5 * (1 + v / p),
    maxX: n * 0.5 * (1 + F / p),
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
function im(e, t) {
  const r = Mn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * vt) * t, i = n / e.aspect, o = (d, u, c) => Dn(e.position, fl(r, [d, u, c])), a = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], s = a.map((d) => [e.position, d]);
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
  if (!n.position.keyframes.length) return [$t(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (a, s) => {
    const l = o === 1 ? 0 : s * i / (o - 1);
    return $t(n, "position", l);
  });
}
function Fv(e, t, r, n, i) {
  const o = Math.max(0, e) * r, a = Math.max(0, t) * r, s = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(a, 1));
  return {
    width: Math.max(1, Math.round(o * s)),
    height: Math.max(1, Math.round(a * s))
  };
}
const om = 0.28;
function am(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * vt);
  return {
    quaternion: yi(Mn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * qt,
    aspect: n
  };
}
function Wo(e) {
  const t = Wr(e);
  return {
    quaternion: yi(Mn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function sm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Pu(r, n), a = t.x + t.w * 0.5, s = t.y + t.h * 0.5;
  return {
    rect: { x: a - i, y: s - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * qt,
      vFOV_deg: 2 * Math.atan(o / n) * qt
    }
  };
}
function lm(e, t, r) {
  const [[n, i, o], [a, s, l], [d, u, c]] = Qo(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * vt), p = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(m, b = 1e-4) {
      const v = Vb(m), F = n * v.x + a * v.y + d * v.z, U = i * v.x + s * v.y + u * v.z, H = -(o * v.x + l * v.y + c * v.z), D = Math.max(H, b);
      return {
        x: t * 0.5 * (1 + F / D / p),
        y: r * 0.5 * (1 - U / D / f),
        z: H
      };
    },
    // The unit direction seen at the point (x, y).
    ray(m, b) {
      const v = (m / t * 2 - 1) * p, F = (1 - b / r * 2) * f;
      return xu(ts({
        x: n * v + i * F - o,
        y: a * v + s * F - l,
        z: d * v + u * F - c
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
      opacity: u ? om : d.opacity,
      zIndex: n(s),
      quaternion: yi(Mn(d.yaw_deg, d.pitch_deg, d.roll_deg)),
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
function cm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
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
    s = ah(a.createThreeView({ onUpdate: n, createCanvas: () => e }), "editor");
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
    resize(m, b) {
      return s && !c.lost ? s.resize(m, b) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(m, b) {
      s && !c.lost && s.clear(m, b);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(m) {
      return s ? s.sceneBox(m) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(m, b, v, F, U) {
      return s && !c.lost ? s.pick(m, b, v, F, U) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, b, v, F, U) {
      return s && !c.lost ? s.pickSurface(m, b, v, F, U) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, b, v, F, U) {
      return s && !c.lost ? s.pickSticker(m, b, v, F, U) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, b, v, F, U, H) {
      return s && !c.lost ? s.gizmoPointer(m, b, v, F, U, H) : null;
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
const um = "3D view unavailable. Check the browser console.";
function Os(e, t, r) {
  return am({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
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
const dm = Rv(
  () => import("./.lazy/pano_three_view-CVShI2Xl.js").then((e) => e.$).then((e) => ah(e.createThreeView({ createCanvas: () => un({ label: "three.node" }) }), "node"))
), Br = ["erp_image", "bg_erp", "bg_media"], is = ["source"], Wu = ["sticker_image", "sticker"], fm = ["scene"], $v = {
  background: [...Br, ...is],
  "external-sticker": [...Wu, ...is],
  scene: [...fm, ...is]
};
function pm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Ku(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = pm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function zv(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function hm(e, t) {
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
  const { graph: r, entry: n } = hm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((a) => Array.isArray(a) ? [a[0], { origin_id: a[1], origin_slot: a[2] }] : [a == null ? void 0 : a.id, a])), o = {};
  for (const a of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const s = pm(i.get(a == null ? void 0 : a.link));
    s && (o[String((a == null ? void 0 : a.name) || "")] = s);
  }
  return o;
}
const mm = [...Br, ...Wu, ...fm, ...is], Hv = 256, Ei = /* @__PURE__ */ new Map(), Bl = /* @__PURE__ */ new WeakMap();
let gm = () => null;
function ym(e) {
  return Bl.has(e) || Bl.set(e, JSON.stringify(e)), Bl.get(e);
}
function Gv(e) {
  gm = e;
}
function Fs(e, t) {
  const r = ym(e);
  Ei.delete(r), Ei.set(r, t), Ei.size > Hv && Ei.delete(Ei.keys().next().value);
}
function en(e, t) {
  var o;
  const r = e ? gm(e) : null;
  if (!r) return !0;
  const n = Ku(e);
  let i = Ei.get(ym(r));
  if (i)
    Fs(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((a) => mm.includes(a == null ? void 0 : a.name)))) return !0;
    Fs(r, n), i = n;
  }
  return $v[t].every((a) => i[a] === n[a]);
}
const Ts = /* @__PURE__ */ new WeakSet();
async function Fc(e, t) {
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
function bm(e, t) {
  var o, a, s, l, d;
  const r = (s = (a = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : a.extra_pnginfo) == null ? void 0 : s.workflow, { entry: n } = hm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((d = n == null ? void 0 : n.inputs) != null && d.some((u) => mm.includes(u == null ? void 0 : u.name))) ? null : { output: i, inputs: jv(r, t) };
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
      const i = await Fc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const a = bm(i, o);
        a && Fs(a.output, a.inputs);
      }
    });
}
const Kv = 5;
function Bv(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Kv}`, n = Fc(e, `/jobs?${r}`).then((a) => (a == null ? void 0 : a.jobs) || []), i = /* @__PURE__ */ new Map(), o = (a) => (i.has(a) || i.set(a, Fc(e, `/jobs/${encodeURIComponent(a)}`)), i.get(a));
  return {
    async lastNodeOutput(a, s) {
      var d, u, c, f;
      const l = String(a.id);
      for (const { id: p } of await n) {
        if (!s()) return null;
        const m = await o(p);
        if ((d = m == null ? void 0 : m.outputs) != null && d[l])
          return ((f = (c = (u = m.workflow) == null ? void 0 : u.prompt) == null ? void 0 : c[l]) == null ? void 0 : f.class_type) !== a.comfyClass ? null : bm(m, l);
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
let Mi = null;
async function Yv(e, t, r) {
  var s;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Ts.has(r) || (s = os.get(i)) != null && s.has(n) || Uv(t)) return null;
  (Mi == null ? void 0 : Mi.workflowId) !== i && (Mi = { workflowId: i, history: Bv(r, i) }, queueMicrotask(() => {
    Mi = null;
  }));
  const a = await Mi.history.lastNodeOutput(e, o);
  return o() ? a ? (Fs(a.output, a.inputs), t.nodeOutputs[n] = a.output, a.output) : (Ts.has(r) || os.set(i, (os.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function cf(e, t, r, n = Br) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const a = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((a == null ? void 0 : a.name) || ""));
}
const uf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function as(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return uf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return uf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Ul = /* @__PURE__ */ new WeakMap();
function qv(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Tc(e) {
  return qv(e) ? (Ul.has(e) || Ul.set(e, Math.random().toString(36).slice(2, 10)), Ul.get(e)) : "run";
}
function vm(e, t, r) {
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
function Bu(e, t = [], r = null) {
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
  const b = () => {
    o || p || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, v = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var U, H;
      o || (o = !0, a && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(a), a = 0), n.removeEventListener("loadedmetadata", d), n.removeEventListener("loadeddata", d), n.removeEventListener("timeupdate", u), n.removeEventListener("play", c), n.removeEventListener("pause", f), n.removeEventListener("error", m), n.pause(), (U = n.removeAttribute) == null || U.call(n, "src"), (H = n.load) == null || H.call(n));
    },
    failed: () => p,
    play: b,
    pause: v,
    toggle() {
      n.paused ? b() : v();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
function Jr(e, t) {
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
function df(e, t, r = null) {
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
function _m({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (P) => {
    if (!P) return "";
    if (typeof P == "string") return String(P || "").trim();
    if (Array.isArray(P)) {
      if (P.length === 0) return "";
      if (P.length === 1) return i(P[0]);
      const W = String(P[0] || "").trim();
      if (W)
        return Jr(t, {
          filename: W,
          subfolder: String(P[1] || "").trim(),
          type: String(P[2] || "output").trim() || "output"
        });
      for (const R of P) {
        const ee = i(R);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (P == null ? void 0 : P.src) == "string" && P.src ? P.src : typeof (P == null ? void 0 : P.url) == "string" && P.url ? P.url : Jr(t, P);
  }, o = (P) => {
    if (!P || typeof P != "object") return "";
    const W = String(P.type || "").trim().toLowerCase();
    if (W === "dataurl") return String(P.value || "");
    if (W !== "comfy_image") return "";
    const R = String(P.filename || "").trim();
    return R ? Jr(t, {
      filename: R,
      subfolder: String(P.subfolder || ""),
      type: String(P.storage || "input")
    }) : "";
  }, a = (P) => {
    const W = e == null ? void 0 : e.nodeOutputs;
    if (!W || P == null) return null;
    const R = String(P);
    return W instanceof Map ? W.get(P) || W.get(R) || W.get(Number(R)) || null : W[P] || W[R] || null;
  }, s = (P, W) => {
    var ee;
    const R = a(P == null ? void 0 : P.id);
    return Array.isArray((ee = R == null ? void 0 : R.ui) == null ? void 0 : ee[W]) ? R.ui[W] : Array.isArray(R == null ? void 0 : R[W]) ? R[W] : [];
  }, l = (P, W) => {
    const R = a(P == null ? void 0 : P.id);
    return R != null && R.ui && Object.prototype.hasOwnProperty.call(R.ui, W) ? R.ui[W] : R && Object.prototype.hasOwnProperty.call(R, W) ? R[W] : null;
  }, d = (P, W) => {
    const R = l(P, "pano_sticker_input_state_hash"), ee = Array.isArray(R) ? R[0] : R;
    return String(ee ?? "").trim() || t_(W);
  }, u = (P) => {
    const W = [], R = /* @__PURE__ */ new Set();
    for (const ee of P || []) {
      const ne = i(ee);
      !ne || R.has(ne) || (R.add(ne), W.push(ne));
    }
    return W;
  }, c = (P, W) => {
    var ne;
    const R = [];
    Array.isArray(P == null ? void 0 : P.images) && P.images.length && R.push(P.images), Array.isArray((ne = P == null ? void 0 : P.ui) == null ? void 0 : ne.images) && P.ui.images.length && R.push(P.ui.images);
    const ee = [];
    for (const le of R)
      W >= 0 && W < le.length && ee.push(le[W]), ee.push(...le);
    return ee;
  }, f = (P, W) => {
    var K;
    const R = String(W || "").trim();
    if (!R) return { src: "", sourceType: "", inputName: "" };
    const ne = (Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : []).findIndex((de) => String((de == null ? void 0 : de.name) || "") === R);
    if (ne < 0) return { src: "", sourceType: "", inputName: R };
    const le = P.graph ? P.getInputLink(ne) : null;
    if ((le == null ? void 0 : le.origin_id) == null) return { src: "", sourceType: "", inputName: R };
    const E = le.origin_id, G = df(P, ne, E);
    if (!G) return { src: "", sourceType: "", inputName: R };
    const re = Number(le.origin_slot ?? 0);
    let pe = [];
    try {
      pe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(G) || [] : [];
    } catch {
      pe = [];
    }
    if (Array.isArray(pe) && pe.length) {
      const de = [];
      re >= 0 && re < pe.length && de.push(pe[re]), de.push(...pe);
      const q = u(de.filter((ue) => !as(ue)));
      if (q.length)
        return { src: q[0], srcCandidates: q, sourceType: "appNodeImageUrls", inputName: R };
    }
    const he = a((G == null ? void 0 : G.id) ?? E), me = u(c(he, re).filter((de) => !as(de))).map((de) => `${de}&pano_src=${Tc(he)}`);
    if (me.length)
      return { src: me[0], srcCandidates: me, sourceType: "nodeOutputs", inputName: R };
    const Z = Array.isArray(G == null ? void 0 : G.imgs) ? G.imgs : [];
    if (Z.length) {
      const de = [];
      re >= 0 && re < Z.length && de.push(Z[re]), de.push(...Z);
      const q = u(de);
      if (q.length)
        return { src: q[0], srcCandidates: q, sourceType: "nodeImgs", inputName: R };
    }
    const w = (K = G == null ? void 0 : G.widgets) == null ? void 0 : K.find((de) => String((de == null ? void 0 : de.name) || "").toLowerCase() === "image");
    if (w) {
      let de = i(w.value);
      if (de && !de.includes("/") && !de.includes(":") && (G.comfyClass === "LoadImage" || G.type === "LoadImage") && (de = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`), de) return { src: de, sourceType: "widget", inputName: R };
    }
    return { src: "", sourceType: "", inputName: R };
  }, p = (P, W = []) => {
    var ee;
    const R = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs : [];
    for (const ne of W) {
      const le = R.findIndex((pe) => String((pe == null ? void 0 : pe.name) || "") === ne), E = le >= 0 && P.graph ? P.getInputLink(le) : null;
      if ((E == null ? void 0 : E.origin_id) == null) continue;
      const G = a(((ee = df(P, le, E.origin_id)) == null ? void 0 : ee.id) ?? E.origin_id), re = (Array.isArray(G == null ? void 0 : G.images) ? G.images : []).find(as);
      return re ? `${Jr(t, re)}&pano_src=${Tc(G)}` : "";
    }
    return "";
  }, m = (P, W = []) => {
    const R = Array.isArray(W) ? W : [W];
    for (const ee of R) {
      const ne = f(P, ee);
      if (String((ne == null ? void 0 : ne.src) || "").trim()) return ne;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, b = (P) => {
    const W = String(P || "").trim();
    if (!W) return [];
    if (Qv(W)) return [W];
    const { filename: R, subfolder: ee } = e_(W);
    return R ? u([
      Jr(t, { filename: R, subfolder: ee, type: "temp" }),
      Jr(t, { filename: R, subfolder: ee, type: "output" }),
      Jr(t, { filename: R, subfolder: ee, type: "input" }),
      W
    ]) : [W];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (P) => {
      var W, R;
      try {
        (R = (W = P == null ? void 0 : P.__panoLinkedInputImageCache) == null ? void 0 : W.forEach) == null || R.call(W, (ee, ne, le) => {
          var E;
          ee != null && ee.img && ((E = n == null ? void 0 : n.isImageLoadFailed) != null && E.call(n, ee.img)) && le.delete(ne);
        });
      } catch {
      }
    },
    externalStateHash: d,
    invalidateUiImage: (P, W) => {
      var R;
      (R = P == null ? void 0 : P.delete) == null || R.call(P, `__ui__${String(W || "")}`);
    },
    linkedValue: (P, W) => {
      var E, G, re, pe;
      const R = String(W || ""), ee = Array.isArray(P == null ? void 0 : P.inputs) ? P.inputs.findIndex((he) => String((he == null ? void 0 : he.name) || "") === R) : -1, ne = ee >= 0 && P.graph ? P.getInputLink(ee) : null;
      if (ne) {
        const he = a(ne.origin_id), me = [
          he == null ? void 0 : he.output,
          he == null ? void 0 : he.result,
          (E = he == null ? void 0 : he.data) == null ? void 0 : E.output,
          (G = he == null ? void 0 : he.data) == null ? void 0 : G.result,
          (re = he == null ? void 0 : he.ui) == null ? void 0 : re.output,
          (pe = he == null ? void 0 : he.ui) == null ? void 0 : pe.result
        ];
        for (const Z of me) {
          if (!Array.isArray(Z)) continue;
          const w = Z[Number(ne.origin_slot || 0)];
          if (typeof w == "string" && w.trim()) return w;
        }
      }
      const le = Array.isArray(P == null ? void 0 : P.widgets) ? P.widgets.find((he) => String((he == null ? void 0 : he.name) || "") === R) : null;
      return String((le == null ? void 0 : le.value) || "");
    },
    linkedVideoFile: p,
    loadPreferredExactLinkedImage: (P, W = [], R = null, ee = "") => {
      var Pe;
      const ne = Array.isArray(W) ? W : [W], le = m(P, ne), G = (Array.isArray(le == null ? void 0 : le.srcCandidates) && le.srcCandidates.length ? le.srcCandidates : [le == null ? void 0 : le.src]).map((te) => String(te || "").trim()).filter(Boolean);
      if (!G.length) return null;
      const re = u(G.flatMap((te) => b(te)));
      if (!re.length) return null;
      P.__panoLinkedInputImageCache || (P.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const pe = String(ee || ne.join("|") || "image_exact"), he = G.join(`
`), me = P.__panoLinkedInputImageCache.get(pe);
      if (me && me.srcRaw === he && me.img) return me.img;
      const Z = r || globalThis.Image;
      if (typeof Z != "function") return null;
      const w = new Z();
      (Pe = n == null ? void 0 : n.markImageLoading) == null || Pe.call(n, w, he);
      const K = { srcRaw: he, resolvedSrc: "", img: w };
      P.__panoLinkedInputImageCache.set(pe, K);
      let de = -1;
      const q = (te) => {
        var O, J, oe;
        te === "ready" ? (O = n == null ? void 0 : n.markImageReady) == null || O.call(n, w, he) : (J = n == null ? void 0 : n.markImageFailed) == null || J.call(n, w, he), R == null || R(w), (oe = P.setDirtyCanvas) == null || oe.call(P, !0, !0);
      }, ue = () => {
        if (de += 1, de >= re.length) {
          q("failed");
          return;
        }
        K.resolvedSrc = re[de], w.src = K.resolvedSrc;
      };
      return w.onload = () => q("ready"), w.onerror = () => {
        if (de + 1 < re.length) {
          ue();
          return;
        }
        q("failed");
      }, ue(), w;
    },
    output: a,
    resolvePreferredExactLinkedSource: m,
    source: i,
    uiImage: (P, W, R, ee = null) => {
      var he, me, Z;
      const ne = s(P, W)[0] || null, le = i(ne);
      if (!le) return null;
      const E = `__ui__${W}`, G = (he = R == null ? void 0 : R.get) == null ? void 0 : he.call(R, E);
      if (G && G.__panoSrc === le) return G;
      const re = r || globalThis.Image;
      if (typeof re != "function") return null;
      const pe = new re();
      return pe.__panoSrc = le, (me = n == null ? void 0 : n.markImageLoading) == null || me.call(n, pe, le), pe.onload = () => {
        var w;
        (w = n == null ? void 0 : n.markImageReady) == null || w.call(n, pe, le), ee == null || ee(pe);
      }, pe.onerror = () => {
        var w;
        (w = n == null ? void 0 : n.markImageFailed) == null || w.call(n, pe, le), ee == null || ee(pe);
      }, pe.src = le, (Z = R == null ? void 0 : R.set) == null || Z.call(R, E, pe), pe;
    },
    uiList: s,
    uiValue: l
  };
}
const n_ = 1e-3;
function Sm(e, t, r, n) {
  if (!to(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const a = Math.floor(i + 0.5);
    return a >= 0 && a < n.frames ? (a + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(n_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function wm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function r_(e, t) {
  return Math.floor(e * t.fps);
}
function xm(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const ff = 4;
function km({ createImage: e, onLoad: t }) {
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
      for (let f = u; f < Math.min(r.length, u + ff + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < u || f > u + ff) && f !== i && n.delete(f);
      const c = n.get(u);
      return c != null && c.complete && c.naturalWidth > 0 && (i !== null && i !== u && n.delete(i), i = u), i === null ? d : n.get(i);
    }
  };
}
function Mm({
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
const ss = "sticker_image_1", Pm = "external_image", Xi = 0;
function ji(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Yl(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Hr(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Dc(e, t = Xi) {
  return (e == null ? void 0 : e.version) !== 2 ? Hr(e) : Hr(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: pi(r, t).active,
    external: r.source.kind === "port",
    ...Vu(r, t)
  }));
}
function Uu(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && Hr(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Nm(e) {
  return String((e == null ? void 0 : e.id) || "") === ss || String((e == null ? void 0 : e.source_kind) || "") === Pm;
}
function Yu(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Nm(t);
}
const Cm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Am(e) {
  return !Nm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Cm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Im(e) {
  const t = Am(e);
  return t ? Cm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Em(e, t = {}) {
  var D, P, W;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((R) => String((R == null ? void 0 : R.id) || "") === ss);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const R = String(((D = e.active) == null ? void 0 : D.selected_sticker_id) || "") === ss;
    return {
      state: {
        ...e,
        stickers: r.filter((ee, ne) => ne !== n),
        active: R ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), a = n >= 0 ? r[n] : null, s = !a || Number(a.source_link_id ?? -1) !== i || String(a.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), d = Number(t.imageHeight || 0), u = l > 0 && d > 0, c = Math.max(1, l), f = Math.max(1, d), p = t.pose && typeof t.pose == "object" ? t.pose : {}, m = s ? p.hFOV_deg || (a == null ? void 0 : a.hFOV_deg) || 30 : (a == null ? void 0 : a.hFOV_deg) || p.hFOV_deg || 30, b = Math.min(179, Math.max(0.1, Number(m)));
  if (!s) {
    if (!u) return { state: e, changed: !1 };
    const R = ji(b, c, f), ee = Number(((P = a == null ? void 0 : a.initial_pose) == null ? void 0 : P.hFOV_deg) ?? b), ne = ji(ee, c, f), le = Number(((W = a == null ? void 0 : a.initial_pose) == null ? void 0 : W.vFOV_deg) ?? ne);
    return Math.abs(Number((a == null ? void 0 : a.vFOV_deg) || 0) - R) <= 1e-6 && Math.abs(le - ne) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((E, G) => G === n ? {
          ...E,
          vFOV_deg: R,
          initial_pose: E.initial_pose && typeof E.initial_pose == "object" ? { ...E.initial_pose, vFOV_deg: ne } : E.initial_pose
        } : E)
      },
      changed: !0
    };
  }
  const v = r.reduce((R, ee) => Math.max(R, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), F = {
    yaw_deg: Number(p.yaw_deg || 0),
    pitch_deg: Number(p.pitch_deg || 0),
    hFOV_deg: b,
    vFOV_deg: u ? ji(b, c, f) : Number(p.vFOV_deg || (a == null ? void 0 : a.vFOV_deg) || b),
    rot_deg: Number(p.rot_deg ?? p.roll_deg ?? 0)
  }, U = {
    ...a || {},
    id: ss,
    source_kind: Pm,
    source_link_id: i,
    source_state_hash: o,
    ...F,
    initial_pose: { ...F },
    visible: !0,
    z_index: v + 1
  }, H = n >= 0 ? r.map((R, ee) => ee === n ? U : R) : [...r, U];
  return { state: { ...e, stickers: H }, changed: !0 };
}
function pf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const i_ = ["IMAGE", "VIDEO"];
function hf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => i_.includes(r)) ? "2d" : null;
}
function o_(e, t) {
  var i, o, a, s, l, d;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((u) => (u == null ? void 0 : u.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? hf(n.type) ?? hf((d = (l = (s = (a = (o = e.graph).getNodeById) == null ? void 0 : a.call(o, n.origin_id)) == null ? void 0 : s.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : d.type) : null;
}
function Om(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: pf(e, "sticker"),
    awaitingPose: !t && (pf(e, "sticker_state") || o_(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function mf(e, t) {
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
function Fm(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var b;
  const a = e.stickers.findIndex((v) => Yu(e, v)), s = a >= 0 ? e.stickers[a] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const v = ((b = e.active) == null ? void 0 : b.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((F, U) => U !== a),
        active: v ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky") {
    const v = { ...mf(s.id, n), clip: s.clip, visible: s.visible, locked: s.locked };
    return { state: { ...e, stickers: e.stickers.map((F, U) => U === a ? v : F) }, changed: !0 };
  }
  if (s) {
    if (!l || s.placement !== "sky") return { state: e, changed: !1 };
    const v = [s.size.value, ...s.size.keyframes.map((H) => H.value)], F = v.map((H) => ji(H.hFOV_deg, i, o));
    if (v.every((H, D) => Math.abs(H.vFOV_deg - F[D]) <= 1e-6)) return { state: e, changed: !1 };
    const U = {
      value: { ...s.size.value, vFOV_deg: F[0] },
      keyframes: s.size.keyframes.map((H, D) => ({ ...H, value: { ...H.value, vFOV_deg: F[D + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((H, D) => D === a ? { ...H, size: U } : H) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const d = new Set(e.stickers.map((v) => v.id));
  let u = 1;
  for (; d.has(`sticker_${u}`); ) u += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, mf(`sticker_${u}`, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (v) => l ? ji(v, i, o) : v, p = Ru(`sticker_${u}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: f(c)
  }, Hr(e).reduce((v, F) => Math.max(v, F.z_index), -1) + 1), m = (n == null ? void 0 : n.keyframes) ?? {};
  return p.direction.keyframes = m.direction ?? [], p.roll.keyframes = m.roll ?? [], p.size.keyframes = (m.size ?? []).map((v) => ({ ...v, value: { ...v.value, vFOV_deg: f(v.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, p] }, changed: !0 };
}
function qu(e) {
  const t = Hr(e).filter((o) => o && typeof o == "object").map((o) => ({
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
function Tm(e) {
  const t = Uu(e), r = Yu(e, t), n = Hr(e).some((s) => s && s.visible !== !1), i = qu(e), o = t ? i.findIndex((s) => s.type === "sticker" && s.item === t) : -1, a = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Im(t),
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
function gf(e, t) {
  const r = Uu(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = a_(e), i = String(r.id || ""), o = qu(n), a = o.findIndex((l) => l.type === "sticker" && l.id === i);
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
  if (t.type === "sync-external") return Em(e, t.value);
  if (t.type === "sync-port") return Fm(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), a = String(i.assetId || "").trim();
    if (!o || !a || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = qu(e).reduce((f, p) => Math.max(f, Number(p.z_index || 0)), -1), d = 30, u = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: d,
      vFOV_deg: ji(d, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Ru(o, rs(i.asset), u, l + 1)],
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
    return !i || !Hr(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Uu(e);
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
    const i = Am(r);
    return !i || !Im(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return gf(e, "front");
  if (t.type === "send-back") return gf(e, "back");
  if (t.type === "delete-selected") {
    if (Yu(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = Hr({ ...e, stickers: i })[0], a = (o == null ? void 0 : o.id) == null ? null : String(o.id), s = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: a }
    };
    return e.version !== 2 && (s.assets = s_(s)), { state: s, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], a = e.version === 2 ? Vu(r, Xi) : r, s = {};
    if (o.forEach((l) => {
      const d = Number(i[l]);
      Number.isFinite(d) && Math.abs(d - Number(a[l] || 0)) > 1e-12 && (s[l] = d);
    }), !Object.keys(s).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = H1(r, s);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const d = structuredClone(r);
      return zh(d, Xi, l), { state: { ...e, stickers: e.stickers.map((u) => u === r ? d : u) }, changed: !0 };
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
  return Mm({
    ...e,
    reduce: l_,
    projectModel: Tm
  });
}
const Lc = 2;
function ti(e, t) {
  return Math.floor(e * t + 0.5);
}
function u_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Dm({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: a, onChange: s }) {
  let l = 0, d = !1, u = !1, c = { name: "idle" }, f = [];
  const p = () => d && !u, m = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function b() {
    for (const K of f) K();
    f = [];
  }
  function v(K, de = {}) {
    return b(), c = { name: K, ...de }, s(), c;
  }
  function F(K, de, q) {
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
    return v(u ? "error" : "idle");
  }
  function P() {
    u = !0, D();
  }
  function W() {
    const { seekable: K } = e, de = K != null && K.length ? K.end(K.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(de) ? de : 1 / 0));
  }
  function R(K) {
    if (!p()) return K === "play" ? G() : D();
    if (e.readyState < Lc) {
      const de = v("loading", { then: K });
      return F(de, "loadeddata", () => R(de.then)), F(de, "error", P), de;
    }
    return K === "play" && l / r() >= Number(e.duration) ? G() : ee(K, !1);
  }
  function ee(K, de) {
    const q = W();
    if (!e.ended && ti(Number(e.currentTime), r()) === ti(q, r())) return ne(K);
    const ue = v("seeking", { then: K, frame: l, retried: de });
    return F(ue, "seeked", () => {
      const Pe = ti(Number(e.currentTime), r()) === ti(W(), r()), te = l === ue.frame;
      Pe || te && ue.retried ? ne(ue.then) : ee(ue.then, te);
    }), F(ue, "error", P), e.currentTime = q, ue;
  }
  function ne(K) {
    return K === "play" ? le() : (a(), D());
  }
  function le() {
    const K = v("playingVideo", { shown: !1 });
    if (F(K, "pause", () => e.ended ? E() : he()), F(K, "ended", E), F(K, "error", P), i() && ti(Number(e.duration), r()) >= n()) {
      const q = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = q;
      });
    }
    const de = (q, ue) => {
      ue && !K.shown && (K.shown = !0, s()), re(ti(q, r()));
    };
    if (m()) {
      let q = e.requestVideoFrameCallback(function ue(Pe, te) {
        c === K && (de(Number(te.mediaTime), !0), c === K && (q = e.requestVideoFrameCallback(ue)));
      });
      f.push(() => {
        var ue;
        return (ue = e.cancelVideoFrameCallback) == null ? void 0 : ue.call(e, q);
      });
    } else
      U(K, () => de(Number(e.currentTime), e.readyState >= Lc));
    return Promise.resolve(e.play()).catch(() => {
      c === K && he();
    }), K;
  }
  function E() {
    a(), G();
  }
  function G() {
    const K = v("playingClock", { startTs: t.now(), startFrame: l });
    return U(K, (de) => re(K.startFrame + Math.floor((de - K.startTs) / 1e3 * r()))), K;
  }
  function re(K) {
    if (K < n()) {
      H(K);
      return;
    }
    if (!i()) {
      pe(n() - 1);
      return;
    }
    c.name === "playingVideo" && (b(), e.pause()), H(0), R("play");
  }
  function pe(K) {
    c.name === "playingVideo" ? (b(), e.pause(), H(Math.max(0, K)), a()) : H(Math.max(0, K)), R("still");
  }
  function he() {
    if (c.name === "loading" || c.name === "seeking")
      c.then = "still", s();
    else if (c.name === "playingVideo") {
      b(), e.pause();
      const K = u_(Number(e.currentTime), r());
      H(Math.min(K, n() - 1)), a(), l === K ? D() : R("still");
    } else c.name === "playingClock" && pe(Math.min(l, n() - 1));
  }
  function me() {
    if (!w()) {
      if (l >= n() - 1 && H(0), c.name === "loading" || c.name === "seeking") {
        c.then = "play", s();
        return;
      }
      R("play");
    }
  }
  function Z(K) {
    const de = Math.max(0, Math.round(K));
    if (c.name === "loading" || c.name === "seeking") {
      c.then = "still", H(de), s();
      return;
    }
    c.name === "playingVideo" && (b(), e.pause()), H(de), R("still");
  }
  function w() {
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
      return w();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return c.name === "playingVideo" || c.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return c.name === "playingVideo" && c.shown;
    },
    play: me,
    stop: he,
    seek: Z,
    toggle() {
      w() ? he() : me();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(K) {
      b(), d = !!K, u = !1, R("still");
    },
    dispose() {
      b(), d = !1, c = { name: "idle" };
    }
  };
}
function Lm({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, a = null, s = null, l = !1;
  function d(b) {
    s = b, t();
  }
  function u(b) {
    a = b, e.currentTime = b;
  }
  function c() {
    const b = l;
    f(), l !== b && r();
  }
  function f() {
    if (!n || i || e.readyState < Lc) return;
    const { time: b, playing: v, fps: F } = o;
    if (b === null) {
      e.pause(), l = !1;
      return;
    }
    if (v) {
      if (a !== null) return;
      const U = Number(e.duration), H = Number.isFinite(U) ? Math.min(b, U) : b, D = Math.abs(Number(e.currentTime) - H) > 1.5 / F;
      if (e.ended && !D) return;
      D && u(H), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, d(NaN)), !(a !== null || s === b) && (Number(e.currentTime) === b ? d(b) : u(b));
  }
  const p = {
    loadeddata: c,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: c,
    seeked: () => {
      const b = a;
      a = null, !o.playing && b === o.time ? d(b) : c();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [b, v] of Object.entries(p)) e.addEventListener(b, v);
  function m(b) {
    n = b, i = !1, a = null, s = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: b = "", time: v = null, playing: F = !1, fps: U }) {
      b !== n && (m(b), r()), o = { time: v, playing: F, fps: U }, c();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(b, v) {
      return !n || i ? v : o.time === null ? null : o.playing && l ? e : s === null ? v : b;
    },
    dispose() {
      for (const [b, v] of Object.entries(p)) e.removeEventListener(b, v);
      m("");
    }
  };
}
function Vc(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function d_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: a, onStickerCapture: s, onChange: l, camera: d = !1 }) {
  let u = "", c = "", f = 0;
  const p = /* @__PURE__ */ new Set();
  let m = null, b = null;
  const v = () => i().timeline.fps, F = (E) => E.stickers.find((G) => G.source.kind === "port"), U = () => {
    const E = i(), G = F(E);
    return Lh(E, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        u ? Math.round(f * v()) : 0,
        m && G ? wm(G.clip, v(), m.meta) : 0
      ),
      camera: d
    });
  }, H = Dm({
    video: e,
    clock: n,
    fps: v,
    span: U,
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: l
  }), D = () => {
    c === u && Number.isFinite(e.duration) && (f = e.duration);
  }, P = () => {
    c && (p.add(c), l());
  }, W = Lm({ video: t, onCapture: s, onChange: l }), R = km({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", D), e.addEventListener("error", P);
  function ee(E) {
    E !== c && (c = E, e.pause(), E ? e.src = E : e.removeAttribute("src"), e.load(), H.setSource(!!E));
  }
  function ne() {
    H.playing && H.stop();
  }
  function le(E) {
    const G = F(E);
    b = m && G ? Sm(G.clip, H.frame, E.timeline.fps, m.meta) : null, W.follow({
      src: (m == null ? void 0 : m.src) || "",
      time: b,
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
    pause: ne,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return m;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(E, G) {
      return m != null && m.frames ? R.picture(m.frames, b, m.meta, G) : W.picture(E, G);
    },
    toggle() {
      H.playing ? H.stop() : H.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: E, sources: G, state: re, sticker: pe = null }) {
      if (m = E ? pe : null, !E)
        return ne(), ee(""), le(re), !1;
      for (const K of p)
        G.includes(K) || p.delete(K);
      const he = G.find((K) => K && !p.has(K)) || "", me = he !== u;
      me && (u = he, f = 0), ee(u);
      const Z = Dh(re, { camera: d }) || !!u && H.state !== "error" || !!m;
      return Z || ne(), (me || !Z || !H.playing && H.frame >= U()) && H.frame !== Xi && H.seek(Xi), le(re), Z;
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
function yf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Vm(e, t) {
  return t ? Vm(t, e % t) : e;
}
function h_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), a = Math.max(1, Math.round(e / o * i)), s = Math.max(1, Math.round(t / o * i)), l = Vm(a, s) || 1;
  return `${Math.round(a / l)}:${Math.round(s / l)}`;
}
function oa(e, t) {
  const r = yf(e), n = yf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: h_(r, n) };
}
function ui(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Rm(e) {
  const t = ui(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Pr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Xu(e, t, r = f_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), d = (v, F, U) => {
    const H = v + F, D = Math.max(0, U - 1), P = H > D && H > 0 ? D / H : 1;
    return [v * P, F * P];
  }, [u, c] = d(l, a, n), [f, p] = d(o, s, i), m = {
    x: u,
    y: f,
    w: Math.max(1, n - u - c),
    h: Math.max(1, i - f - p)
  }, b = ku(m, t);
  return {
    x: m.x + (m.w - b.width) * 0.5,
    y: m.y + (m.h - b.height) * 0.5,
    w: b.width,
    h: b.height,
    safeRect: m
  };
}
function m_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Xu({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), a = r / (2 * Math.tan(o * Ds * 0.5)), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, d = mh(l, dh(
    { x: r * 0.5, y: n * 0.5 },
    a,
    s
  )), u = g_(d, Qi(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), c = Mu({ width: i.w, height: i.h }, a);
  return {
    type: "add-frame",
    yawDeg: u.yaw,
    pitchDeg: u.pitch,
    rollDeg: u.roll,
    frameFovDeg: c.hFOV_deg
  };
}
function $m(e) {
  return {
    yaw: Rt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * cr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * cr, -89.9, 89.9)
  };
}
function g_(e, t) {
  const r = $m(e), n = Qi(r.yaw, r.pitch, 0), i = Tl(t, e), o = {
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
function zm(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Xu({ width: r, height: n }, gi(e)), o = fi(i, e), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, s = mh(e, dh(
    a,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = $m(s);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * cr, 1, 179)
  };
}
function y_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, a = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, s = fi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(a, i - a) * 2
  }, { halfW: d, halfH: u } = Pu(l, s), c = {
    x: o - d,
    y: a - u,
    w: d * 2,
    h: u * 2
  }, f = c.x <= 0 && c.y <= 0 && c.x + c.w >= n && c.y + c.h >= i, p = n / i, m = Math.tan(yc * Ds), b = p >= 1 ? m : m * p, v = p >= 1 ? m / p : m;
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
        hFOV_deg: 2 * Math.atan(b) * cr,
        vFOV_deg: 2 * Math.atan(v) * cr
      }
    }
  };
}
function Pi(e, t) {
  const r = ui(e);
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
    const a = fi(r, e);
    return Mu(ku(r, t), a);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: es(o, t) };
}
function bf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = oa(t, r);
  if (!o) return e;
  const a = gi(e) >= 1;
  n && o.ratio >= 1 !== a && (o = oa(o.height, o.width));
  const s = b_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - s.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - s.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...s, aspect_id: o.label };
}
function jm(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ui(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = fh({
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
    const n = ui(e);
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
    return Pi(e, (n) => bf(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Pi(e, (n) => {
      const o = String(Pr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), a = o ? oa(o[1], o[2]) : oa(gi(n), 1);
      return a ? bf(n, a.height, a.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Pi(e, (i) => {
      const o = al(n), a = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(a - o) <= 1e-12) return i;
      const s = { ...i, roll_deg: o };
      return delete s.rot_deg, s;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Pi(e, (n) => {
    const i = ph(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Pi(e, (n) => {
    const i = hh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Pi(e, (n) => {
    const i = Wm(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Hm({
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
function Gm(e, t, r = {}) {
  var a, s;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((a = e.center) == null ? void 0 : a.y) || 0),
    Number(t.x || 0) - Number(((s = e.center) == null ? void 0 : s.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + ch(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: uh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Wm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, a = Number(t.dy || 0) * i, s = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ds, l = Math.cos(s), d = Math.sin(s), u = o / r, c = -a / r, f = u * l - c * d, p = u * d + c * l, m = Number(e.pitch_deg || 0) * Ds, b = Math.max(0.25, Math.abs(Math.cos(m)));
  return {
    ...e,
    yaw_deg: Rt(Number(e.yaw_deg || 0) - Math.atan(f) / b * cr),
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
  return Mm({
    readState: e,
    reduce: jm,
    projectModel: Rm,
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
}, vf = Object.fromEntries(
  Object.entries(w_).map(([e, t]) => [e, {
    name: t.name,
    elements: S_(t.body)
  }])
), Lt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = st(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(vf, n) ? vf[n] : null;
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
      (Te(!0), Le(Ze, null, xt(r.value.elements, (o, a) => (Te(), Le(Ze, {
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
      default: Cp(() => [
        Ke(Lt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, x_ = ["aria-expanded", "disabled"], k_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, M_ = ["data-aspect", "disabled", "onClick"], P_ = { class: "pano-cutout-aspect-custom" }, N_ = ["disabled"], C_ = ["disabled"], A_ = ["data-custom-width", "data-custom-height", "disabled"], Km = {
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
    ]), o = /* @__PURE__ */ Ht("1"), a = /* @__PURE__ */ Ht("1"), s = /* @__PURE__ */ Ht(null), l = st(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), d = st(() => {
      const b = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], v = String(r.model.aspectLabel || "");
      return b.length ? b.map((F) => {
        const U = typeof F == "string" ? F : String((F == null ? void 0 : F.value) || ""), H = typeof F == "string" ? F : String((F == null ? void 0 : F.label) || U);
        return {
          ...typeof F == "object" && F ? F : {},
          value: U,
          label: H,
          active: v ? U === v : (F == null ? void 0 : F.active) === !0
        };
      }) : i.map((F) => ({
        ...F,
        active: F.value === v
      }));
    }), u = st(() => {
      var v;
      const b = String(r.model.aspectLabel || "").trim();
      return b || String(((v = d.value.find((F) => F.active === !0)) == null ? void 0 : v.label) || "Aspect");
    });
    si(u, (b) => {
      const v = String(b || "").match(/^([0-9.]+):([0-9.]+)$/);
      v && (o.value = v[1], a.value = v[2]);
    }, { immediate: !0 });
    function c(b) {
      n("action", b);
    }
    function f(b) {
      var v;
      r.model.aspectOpen === !0 && ((v = s.value) != null && v.contains(b.target) || c({ type: "close-aspect" }));
    }
    tl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), da(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function p(b) {
      const [v, F] = String(b.value || "").split(":");
      c({
        type: "set-aspect",
        width: v,
        height: F,
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
    return (b, v) => (Te(), Le("div", {
      ref_key: "rootElement",
      ref: s,
      class: ct(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), Hn(Yt, {
        key: 0,
        icon: e.model.aspectIcon || Qe(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: v[0] || (v[0] = (F) => c({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: v[1] || (v[1] = (F) => c({ type: "toggle-aspect" }))
      }, [
        Ke(Lt, {
          icon: e.model.aspectIcon || Qe(ze).aspect
        }, null, 8, ["icon"]),
        Ne("span", null, rt(u.value), 1),
        Ke(Lt, {
          icon: Qe(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, x_)),
      Cr(Ne("div", k_, [
        (Te(!0), Le(Ze, null, xt(d.value, (F) => (Te(), Le("button", {
          key: F.value,
          class: ct(["pano-btn pano-frame-aspect-choice", { active: F.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": F.value,
          disabled: l.value,
          onClick: (U) => p(F)
        }, rt(F.label), 11, M_))), 128)),
        Ne("div", P_, [
          Cr(Ne("input", {
            "onUpdate:modelValue": v[2] || (v[2] = (F) => o.value = F),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, N_), [
            [jd, o.value]
          ]),
          v[4] || (v[4] = Ne("span", { "aria-hidden": "true" }, ":", -1)),
          Cr(Ne("input", {
            "onUpdate:modelValue": v[3] || (v[3] = (F) => a.value = F),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, C_), [
            [jd, a.value]
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
        [di, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, I_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, E_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ht(!1), r = Object.freeze([
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
      onPointerdown: i[1] || (i[1] = Ot(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ot(() => {
      }, ["stop"]))
    }, [
      Ke(Yt, {
        icon: Qe(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Ot((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", I_, [
        i[3] || (i[3] = Ne("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), Le(Ze, null, xt(Qe(r), (o) => (Te(), Le("div", {
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
}, Ju = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), Le("div", O_, rt(Qe(um)), 1));
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
        onPointerdown: i[4] || (i[4] = Ot(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Ot(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ke(Lt, {
            icon: Qe(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Ne("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ke(Yt, {
          icon: e.model.hasShot ? Qe(ze).delete : Qe(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ke(Km, {
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
          onDblclick: i[2] || (i[2] = Ot((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ke(Lt, {
            icon: Qe(ze).roll
          }, null, 8, ["icon"]),
          Ne("span", D_, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, T_),
        Ke(Yt, {
          icon: Qe(ze).rotate_90,
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
      e.model.viewUnavailable ? (Te(), Hn(Ju, { key: 1 })) : ut("", !0)
    ]));
  }
}, Bm = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Ht(null);
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
      var b, v;
      const { active: f, intent: p } = s();
      if (!f) return;
      const m = ((v = (b = c.target) == null ? void 0 : b.files) == null ? void 0 : v[0]) || null;
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
    const t = /* @__PURE__ */ Ht(!1), r = Object.freeze([
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
      onPointerdown: i[1] || (i[1] = Ot(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ot(() => {
      }, ["stop"]))
    }, [
      Ke(Yt, {
        icon: Qe(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Ot((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Ne("div", R_, [
        i[3] || (i[3] = Ne("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), Le(Ze, null, xt(Qe(r), (o) => (Te(), Le("div", {
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
    const t = e, r = /* @__PURE__ */ Ht(null);
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
        onPointerdown: s[5] || (s[5] = Ot(() => {
        }, ["stop"])),
        onWheel: s[6] || (s[6] = Ot(() => {
        }, ["stop"]))
      }, [
        Ne("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: s[0] || (s[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ke(Lt, {
            icon: Qe(ze).fullscreen
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
          Ke(Lt, {
            icon: Qe(ze).image
          }, null, 8, ["icon"]),
          s[11] || (s[11] = Ne("span", { class: "label" }, "Add Image", -1))
        ], 8, j_),
        Ke(Yt, {
          icon: e.model.locked ? Qe(ze).lock_closed : Qe(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: s[1] || (s[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ke(Yt, {
          icon: Qe(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: s[2] || (s[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(Yt, {
          icon: Qe(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: s[3] || (s[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ke(Yt, {
          icon: e.model.isExternalSelection ? Qe(ze).back_initial : Qe(ze).delete,
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
        onPointerdown: s[7] || (s[7] = Ot(() => {
        }, ["stop"])),
        onWheel: s[8] || (s[8] = Ot(() => {
        }, ["stop"])),
        onClick: s[9] || (s[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ke(Lt, {
          icon: e.model.playing ? Qe(ze).pause : Qe(ze).play
        }, null, 8, ["icon"])
      ], 40, H_)) : ut("", !0),
      e.model.hasStickers === !1 ? (Te(), Le("div", G_, " Add Image to place a sticker ")) : ut("", !0),
      e.model.dropActive === !0 ? (Te(), Le("div", W_, "Drop image to add")) : ut("", !0),
      Ke(Bm, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), Hn(Ju, { key: 3 })) : ut("", !0)
    ]));
  }
}, _f = 24;
function B_(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ko(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Um(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], a = t[i];
    o.y > e.y != a.y > e.y && e.x < (a.x - o.x) * (e.y - o.y) / (a.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Rc(e, t) {
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
  return Ko(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Um(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
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
  return Ko(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Um(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Zu(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Ym(e, t, { accent: r = "#0070f3" } = {}) {
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
  const t = Qi(
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
function Zr(e, t, r) {
  return xu(ws(
    ws(e.centerDir, xs(e.right, t)),
    xs(e.up, r)
  ));
}
function Qu(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Y_(e), n = ko(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    Zr(r, -r.tanX, r.tanY),
    Zr(r, r.tanX, r.tanY),
    Zr(r, r.tanX, -r.tanY),
    Zr(r, -r.tanX, -r.tanY)
  ].map((f) => ko(f, t)), o = Array.from({ length: 4 }, (f, p) => {
    const m = [];
    for (let b = 0; b <= 28; b += 1) {
      const v = b / 28;
      let F, U;
      p === 0 ? (F = -r.tanX + 2 * r.tanX * v, U = r.tanY) : p === 1 ? (F = r.tanX, U = r.tanY - 2 * r.tanY * v) : p === 2 ? (F = r.tanX - 2 * r.tanX * v, U = -r.tanY) : (F = -r.tanX, U = -r.tanY + 2 * r.tanY * v);
      const H = ko(Zr(r, F, U), t);
      H && m.push({ x: H.x, y: H.y });
    }
    return m;
  }), a = ko(Zr(r, 0, r.tanY), t), s = ko(
    Zr(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: a.x + d / c * _f,
      y: a.y + u / c * _f
    },
    visible: !0
  };
}
function Sf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((a) => a && a.visible !== !1).map((a) => ({ item: a, geometry: Qu(a, n) })).filter((a) => a.geometry.visible).sort((a, s) => {
    var l, d;
    return Number(((l = s.item) == null ? void 0 : l.z_index) || 0) - Number(((d = a.item) == null ? void 0 : d.z_index) || 0);
  }), o = i.find((a) => {
    var s;
    return String(((s = a.item) == null ? void 0 : s.id) || "") === String(t || "");
  });
  if (o) {
    const a = Rc(o.geometry, r);
    if (a.kind === "scale" || a.kind === "rotate") return { ...o, hit: a };
  }
  for (const a of i) {
    const s = Rc(a.geometry, r);
    if (s.kind !== "none") return { ...a, hit: s };
  }
  return null;
}
function q_(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Rt(Math.atan2(n.x, n.z) * qt),
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
function ed() {
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
    const m = n(d, l), b = Number(m.naturalWidth || m.width || 0), v = Number(m.naturalHeight || m.height || 0);
    if (!m.complete || b < 1 || v < 1) return null;
    const F = un({ label: "raster-object" });
    F.width = Math.max(1, Math.round(a)), F.height = Math.max(1, Math.round(s));
    const U = F.getContext("2d");
    return U ? (u.wrapOffsets.forEach((H) => {
      U.save(), U.translate(u.centerX + H, u.centerY), U.rotate(u.rotationRad), U.scale(u.scale, u.scale), U.drawImage(
        m,
        -u.width * 0.5,
        -u.height * 0.5,
        u.width,
        u.height
      ), U.restore();
    }), t.set(f, { revision: c, source: F }), { source: F, revision: c }) : null;
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
    let b = n.get(c);
    b || (b = /* @__PURE__ */ new Map(), n.set(c, b));
    const v = b.get(f);
    if ((v == null ? void 0 : v.entry) === p) {
      v.callback = m;
      return;
    }
    o(v);
    const F = { owner: c, key: f, entry: p, callback: m };
    b.set(f, F), p.listeners.add(F);
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
    const b = String(f || ""), v = String(p || "");
    if (!b || !v) return null;
    let F = r.get(b);
    if (F)
      r.delete(b), r.set(b, F);
    else {
      l(i - 1);
      const H = e || globalThis.Image;
      if (typeof H != "function") return null;
      const D = new H();
      F = { key: b, image: D, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(b, F), D.onload = () => s(F, !0), D.onerror = () => s(F, !1), D.src = v;
    }
    return F.settled || F.image.complete && Number(F.image.naturalWidth || F.image.width || 0) > 0 || a(c, b, F, m), F.image;
  }
  function u(c) {
    const f = n.get(c);
    f && ([...f.values()].forEach(o), n.delete(c), l(i));
  }
  return { get: d, disposeOwner: u };
}
const Io = /* @__PURE__ */ new WeakMap();
function qm(e, t, { editor: r = !1 } = {}) {
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
}), Xm = "PanoramaSuite.Editor.ViewControls", oS = {
  id: Xm,
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
  const n = Rh(r, {
    coverage: (a = Nr(e, "coverage")) == null ? void 0 : a.value
  }), i = jm(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (s = t.callback) == null || s.call(t, o), !0;
}
function td(e, t) {
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
function wf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function dS(e) {
  var u, c, f, p, m, b;
  if (!e) return;
  const t = Nr(e, "coverage"), r = Nr(e, "bg_color"), n = Nr(e, Ls), i = Nr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), a = String(r.value ?? "").trim(), s = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && uS(o) && (wf(a) || a === ""))) return;
  let d = "360";
  if (wf(a))
    try {
      d = String(Pn((u = JSON.parse(a)) == null ? void 0 : u.coverage));
    } catch {
      d = "360";
    }
  t.value = d, (c = t.callback) == null || c.call(t, d), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = a, (p = n.callback) == null || p.call(n, a), i && (i.value = s, (m = i.callback) == null || m.call(i, s)), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0);
}
function cs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, a;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (a = n.parentEl) != null && a.style && (n.parentEl.style.display = "none")));
  });
}
function $c(e, t, r) {
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
async function Jm(e, t = {}) {
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
    return await Jm(e), r ? r.apply(this, n) : this.value;
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
    hS(c), td(c, t), cs(c, Ls);
    const p = Nr(c, Ls);
    if (pS(c, p), p && !p.__panoPreviewPatchedCb) {
      p.__panoPreviewPatchedCb = !0;
      const b = p.callback;
      p.callback = (v) => {
        var U;
        const F = b ? b(v) : void 0;
        return (U = c.setDirtyCanvas) == null || U.call(c, !0, !1), F;
      };
    }
    if (r === "PanoramaStickers") {
      c.__panoSceneStateV2 = l, c.__panoStudio = d;
      const b = Nr(c, "bg_color");
      !l && b && (b.value == null || String(b.value).trim() === "" || String(b.value).toLowerCase() === "#000000") && (b.value = "#00ff00", (m = b.callback) == null || m.call(b, "#00ff00")), $c(c, n, () => i(c, "stickers")), s && (o(c, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(c, "stickers")
      }), c.__panoStickersNodeSurface && cs(c, n), (!Array.isArray(c.size) || c.size[0] < 10 || c.size[1] < 10) && (c.size = [360, 260])), c.__panoPreviewAttached = !0, c.__panoPreviewMountKey = f;
      return;
    }
    c.__panoSceneStateV2 = l, $c(c, n, () => i(c, "cutout")), l || a(c, {
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
    td(e, t);
    const l = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    $c(e, "Open Preview", () => l(e)), n(e, {
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
    commands: [Kd],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Kd.id] }],
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
      td(l, e), ks(d) && yS(l, { app: e, openEditor: t, attachPreview: i, requestFrame: a });
    }
  };
}
const vS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Yn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : vS.test(String(e.name || "")) : !1;
}
function nd(e) {
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
    if (nd(l == null ? void 0 : l.dataTransfer)) {
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
async function ni(e, { fetchApi: t } = {}) {
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
const xf = /* @__PURE__ */ new WeakSet(), kf = /* @__PURE__ */ new WeakSet();
let Mf = 0;
function zc(e) {
  if (!e || typeof e != "object" || kf.has(e)) return e;
  const t = String(e.type || "preview");
  return Mf += 1, e.type = `${t}:pano-${Mf}`, kf.add(e), e;
}
function Vs(e) {
  if (!e || typeof e != "object" || xf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, xf.add(e), e;
}
function Zm(e, t) {
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
const { app: Vt } = Ya;
Gv((e) => Gr(e.id));
Wv(sn);
const rd = iS(), { linkedVideoFile: wS } = _m({ app: Vt, api: sn });
function jc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ya == null ? void 0 : Ya.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const xS = "pano_suite.ui_settings.v1", kS = 120, MS = 2048;
function Pf() {
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
function Hc(e) {
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
function Qm(e) {
  const t = Hc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function CS(e, t, r) {
  Qm(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Gc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function id(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function eg(e) {
  return ks(id(e));
}
function Nf(e = null) {
  var o, a;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((a = (o = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : a.name) || "");
  return [t, n, r, i].join("|");
}
function tg(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(r = {}) {
      const n = String(r.mode || "stickers") === "cutout" ? "cutout" : "stickers", i = "dom", o = Gc(e);
      this.activeBackend = o;
      const a = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", s = e.__panoPreviewNoPreview === !0, l = r.noPreview === !0;
      if (o === i && o !== "none" && a === n && s === l) {
        e.__panoAttachOptions = { ...r, mode: n }, e.__panoPreviewMode = n, e.__panoPreviewNoPreview = l, e.__panoPreviewButtonText = String(r.buttonText || (n === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof r.onOpen == "function" ? r.onOpen : e.__panoOpenEditor;
        return;
      }
      o !== "none" && us(e), vw(e, { ...r, mode: n, __panoForcedPath: i }), this.activeBackend = Gc(e);
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
  Wc.unregister(e), AS(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const u = String((d == null ? void 0 : d.name) || ""), c = String((d == null ? void 0 : d.type) || ""), f = jc();
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
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((r = Hi(e, "state_json")) == null ? void 0 : r.value) || "");
}
function bn(e) {
  var s, l;
  const t = ES(e), r = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), n = String(((s = Hi(e, "bg_color")) == null ? void 0 : s.value) || "#1a1a1e"), i = Number(((l = Hi(e, "coverage")) == null ? void 0 : l.value) || 360) === 180 ? 180 : 360, o = e.__panoStateCache;
  if (o && o.source === t && o.liveVersion === r && o.bg === n && o.coverage === i)
    return o.parsed;
  const a = e.__panoSceneStateV2 && typeof t == "string" ? $h(t, { backgroundColor: n, coverage: i, active: Gh(e) }) : IS(t, n);
  return a.coverage = i, e.__panoStateCache = { source: t, liveVersion: r, bg: n, coverage: i, parsed: a }, a;
}
function Hi(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function OS(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function ng(e, t, r = null) {
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
function rg(e, t = []) {
  const r = FS(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    Br.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Cf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Rs(e, t) {
  const r = Cf(e), n = Cf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function TS(e, t) {
  var r;
  return ng(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function DS(e, t = Br) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = rg(e, t).map((s) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(s))).filter((s) => s >= 0), o = r.map((s, l) => ({ input: s, idx: l })).filter(({ input: s }) => String((s == null ? void 0 : s.type) || "").toUpperCase() === "IMAGE").map(({ idx: s }) => s), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Xv(e, a, TS);
}
const Wc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = sn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, d, u, c, f;
        if (!o) return;
        const a = Rs(n, o == null ? void 0 : o.id);
        String(o.__panoPreviewMode || "") === "cutout" && !a || !a && ![...DS(o)].some((p) => Rs(n, p)) || vm(o.__panoExecutedOutputs ?? (o.__panoExecutedOutputs = /* @__PURE__ */ new Map()), n, r.output) || (ig(o), (d = (l = o.__panoDomPreview) == null ? void 0 : l.requestDraw) == null || d.call(l), (u = o.setDirtyCanvas) == null || u.call(o, !0, !0), (f = (c = o.graph) == null ? void 0 : c.setDirtyCanvas) == null || f.call(c, !0, !0), String(o.__panoPreviewMode || ""), String(o.__panoPreviewMode || ""), void 0);
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
  return typeof ((o = sn) == null ? void 0 : o.apiURL) == "function" ? sn.apiURL(i) : i;
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
function Gr(e) {
  const t = Vt == null ? void 0 : Vt.nodeOutputs;
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
  const n = r || Gr(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function On(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return On(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return $s({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = On(r);
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
function od(e, t) {
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
      if (n = On(i), n) break;
    n ? (e.__panoOwnOutputSrc = String(n || ""), od(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Gi(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function GS(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!en(e, "background"))
    return Gi(e), null;
  const i = Gr(n), o = Bu(i, t, On);
  if (!o)
    return Gi(e), null;
  const a = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), s = od(o, a), l = `${t.join("|")}:${s}`, d = e.__panoOwnOutputVideoCache;
  if (d && d.key === l) return d.player.failed() ? null : d.player.video;
  Gi(e);
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
  const i = rg(e, t).map((c) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(c))).filter((c) => c >= 0), o = r.map((c, f) => ({ input: c, idx: f })).filter(({ input: c }) => String((c == null ? void 0 : c.type) || "").toUpperCase() === "IMAGE").map(({ idx: c }) => c), a = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const c of a) {
    const f = r[c], p = e.graph ? e.getInputLink(c) : null;
    if ((p == null ? void 0 : p.origin_id) == null) continue;
    const m = p.origin_id, b = ng(e, c, m);
    if (!b) continue;
    const v = Number(p.origin_slot ?? 0), F = Gr((b == null ? void 0 : b.id) ?? m), U = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (U.length) {
      const W = [];
      v >= 0 && v < U.length && W.push(U[v]), W.push(...U);
      for (const R of W.filter((ee) => !as(ee))) {
        const ee = On(R);
        if (ee)
          return String((f == null ? void 0 : f.name) || ""), { src: `${ee}&pano_src=${Tc(F)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let H = [];
    try {
      H = typeof (Vt == null ? void 0 : Vt.getNodeImageUrls) == "function" ? Vt.getNodeImageUrls(b) || [] : [];
    } catch {
      H = [];
    }
    if (Array.isArray(H) && H.length) {
      const W = [];
      v >= 0 && v < H.length && W.push(H[v]), W.push(...H);
      for (const R of W) {
        const ee = On(R);
        if (ee)
          return String((f == null ? void 0 : f.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const D = Array.isArray(b == null ? void 0 : b.imgs) ? b.imgs : [];
    if (D.length) {
      const W = [];
      v >= 0 && v < D.length && W.push(D[v]), W.push(...D);
      for (const R of W) {
        const ee = On(R);
        if (ee)
          return String((f == null ? void 0 : f.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const P = (d = b == null ? void 0 : b.widgets) == null ? void 0 : d.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image");
    if (P) {
      let W = On(P.value);
      if (W && !W.includes("/") && !W.includes(":") && (b.comfyClass === "LoadImage" || b.type === "LoadImage") && (W = sn.apiURL(`/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`)), W)
        return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const s = en(e, "background") ? Gr(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(s == null ? void 0 : s.pano_input_images) && l.push(...s.pano_input_images), Array.isArray((u = s == null ? void 0 : s.ui) == null ? void 0 : u.pano_input_images) && l.push(...s.ui.pano_input_images), l.length > 0)
    for (const c of l) {
      const f = On(c);
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
    var m, b, v, F;
    if (c += 1, c >= o.length) {
      if (((b = (m = e.__panoLinkedInputImageCache) == null ? void 0 : m.get) == null ? void 0 : b.call(m, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
        try {
          (F = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.delete) == null || F.call(v, s);
        } catch {
        }
      String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const p = o[c];
    u.pendingResolvedSrc = p, d.src = p;
  };
  return d.onload = () => {
    var p, m, b;
    ((m = (p = e.__panoLinkedInputImageCache) == null ? void 0 : p.get) == null ? void 0 : m.call(p, s)) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0);
  }, d.onerror = (p) => {
    var m, b, v, F;
    if (c + 1 < o.length) {
      f();
      return;
    }
    if (((b = (m = e.__panoLinkedInputImageCache) == null ? void 0 : m.get) == null ? void 0 : b.call(m, s)) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, !u.img))
      try {
        (F = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.delete) == null || F.call(v, s);
      } catch {
      }
    String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((p == null ? void 0 : p.type) || "error");
  }, f(), a && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function BS(e, t = [], r = null, n = {}) {
  const i = KS(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function ig(e) {
  var t, r;
  if (e) {
    rd.disposeOwner(e);
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Gi(e), e.__panoWrappedErpCache = null;
  }
}
function US(e) {
  var t, r;
  if (e) {
    try {
      (r = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || r.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Gi(e), e.__panoWrappedErpCache = null;
  }
}
function og(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const r = e.__panoRenderCache, n = String(t || "");
  return r.mode !== n && (r.mode = n, r.isLoading = !1, r.loadingSinceTs = 0), r;
}
function Ha(e, t, r = "") {
  const n = og(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < kS ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Af(e, t) {
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
  return Zm(e, t);
}
function aa(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = zS(r);
  if (!o && (n != null && n.external)) {
    if (!en(e, "external-sticker")) return null;
    const p = Gr(e == null ? void 0 : e.id), m = ((f = p == null ? void 0 : p.ui) == null ? void 0 : f.pano_sticker_input_images) || (p == null ? void 0 : p.pano_sticker_input_images) || [];
    for (const b of Array.isArray(m) ? m : [m])
      if (o = On(b), o) break;
  }
  if (!o) return null;
  const a = Bo(e, "pano_sticker_input_state_hash"), s = n != null && n.external ? String(a ?? "") : "", l = n != null && n.external ? Number(e.__panoOwnOutputRev || 0) : 0, d = n != null && n.external ? od(o, l) : o, u = rS(o, s, l);
  return rd.get(e, u, d, (p, m) => {
    var b, v;
    m && (n != null && n.external && e.__panoOutputFromRun && Ar(e, "image-loaded"), (v = (b = e.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || v.call(b));
  }) || null;
}
function JS(e, t) {
  var c, f, p, m;
  const r = nw(e, t), n = rw(t), i = Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.groups) ? t.painting.groups : [], o = new Map(
    i.filter((b) => b && typeof b == "object").map((b) => [String((b == null ? void 0 : b.actionGroupId) || (b == null ? void 0 : b.id) || "").trim(), Number((b == null ? void 0 : b.z_index) || 0)])
  ), a = r ? n.map((b) => {
    const v = r.getGroupDisplayCanvas(b);
    return v ? {
      id: `paint_group:${b}`,
      source: v,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${b}`,
      zIndex: Number(o.get(b) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], s = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.raster_objects) ? t.painting.raster_objects : [];
  if (s.length === 0)
    return (m = (p = e.__panoRasterObjectSurfaceCache) == null ? void 0 : p.retain) == null || m.call(p, []), a;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = tS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var b, v;
    return (v = (b = e.__panoDomPreview) == null ? void 0 : b.requestDraw) == null ? void 0 : v.call(b);
  });
  const l = Z_(t == null ? void 0 : t.output_preset), d = s.filter((b) => (b == null ? void 0 : b.visible) !== !1 && String((b == null ? void 0 : b.layerKind) || "paint") === "paint").map((b) => String((b == null ? void 0 : b.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(d);
  const u = s.map((b) => {
    const v = e.__panoRasterObjectSurfaceCache.get(
      b,
      l.width,
      l.height,
      e.__panoRasterObjectReady
    );
    return v ? {
      id: `raster:${String((b == null ? void 0 : b.id) || "")}`,
      source: v.source,
      revision: v.revision,
      zIndex: Number((b == null ? void 0 : b.z_index) || 0),
      opacity: 1,
      visible: (b == null ? void 0 : b.visible) !== !1
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
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (c = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : c.call(i), a = (t == null ? void 0 : t.ds) || ((f = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : f.ds);
  if (!o || !a) return null;
  const s = Number(a.scale || 1);
  if (!Number.isFinite(s) || Math.abs(s) < 1e-6) return null;
  const l = Array.isArray(a.offset) ? a.offset : [0, 0], d = (r - Number(o.left || 0)) / s - Number(l[0] || 0), u = (n - Number(o.top || 0)) / s - Number(l[1] || 0);
  return !Number.isFinite(d) || !Number.isFinite(u) ? null : { x: d, y: u };
}
function ew(e, t, r) {
  var i, o;
  const n = QS(t, r || (Vt == null ? void 0 : Vt.canvas));
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
  var d, u, c, f, p, m, b, v, F, U, H, D;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (f = (c = t == null ? void 0 : t.painting) == null ? void 0 : c.mask) == null ? void 0 : f.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const a = tw(e, t), s = `${a.width}x${a.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== s) && (e.__panoPreviewPaintEngine = _u(a), e.__panoPreviewPaintDescriptorKey = s, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const l = {
    paint: r || null,
    mask: n || null,
    groups: ((p = t == null ? void 0 : t.painting) == null ? void 0 : p.groups) || null,
    rasterObjects: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) || null
  };
  return (((b = e.__panoPreviewPaintRevision) == null ? void 0 : b.paint) !== l.paint || ((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.mask) !== l.mask || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== l.groups || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.rasterObjects) !== l.rasterObjects) && (e.__panoPreviewPaintRevision = l, e.__panoPreviewPaintRevisionKey = [
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
  const n = Qu(t, r);
  n.visible && Zu(e, n.boundaryEdges, { selected: !1 });
}
function aw(e, t, r) {
  const n = Qu(t, r);
  n.visible && (e.save(), Zu(e, n.boundaryEdges, { selected: !0 }), Ym(e, n, { accent: B_(t) }), e.restore());
}
function Kc(e, t, r) {
  return lm(Os(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function js(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Xi;
}
function sw(e) {
  return [en(e, "background") ? Bu(Gr(e.id), ["pano_input_videos"], On) : "", wS(e, Br)];
}
function lw(e) {
  var o;
  if (!en(e, "external-sticker")) return null;
  const t = Gr(e.id), r = Bo(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(On), meta: r };
  const i = Bu(t, ["pano_sticker_input_videos"], On);
  return i ? { src: i, meta: r } : null;
}
function cw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function If(e, t, r) {
  var o;
  ((o = e.__panoSurfaceScene) == null ? void 0 : o.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: dr({ ...t, painting: null }) });
  const n = (a) => {
    var l;
    if (a.visible === !1) return null;
    let s;
    if (t.version === 2) {
      s = aa(e, a.id, Hh(a.source), { external: a.source.kind === "port" });
      const d = e.__panoSurfacePlayback;
      if (a.source.kind === "port" && d) {
        const u = d.playback.stickerPicture(d.stickerStill, s), c = xm(d.playback.stickerMedia, s);
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
    layers: cm(e.__panoSurfaceScene.sceneState, js(e), t.stickers, { media: n, paintLayers: i })
  };
}
function uw(e, t, r) {
  var D, P, W, R, ee, ne, le;
  const n = String(e.__panoPreviewMode || "stickers");
  og(e, n);
  const i = bn(e);
  n === "cutout" && e.__panoCutoutNodeSurfaceState !== i ? (e.__panoCutoutNodeSurfaceState = i, (W = (P = (D = e.__panoCutoutNodeSurface) == null ? void 0 : D.session) == null ? void 0 : P.refresh) == null || W.call(P)) : n === "stickers" && e.__panoStickersNodeSurfaceState !== i && (e.__panoStickersNodeSurfaceState = i, (ne = (ee = (R = e.__panoStickersNodeSurface) == null ? void 0 : R.session) == null ? void 0 : ee.refresh) == null || ne.call(ee));
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
    Br,
    () => {
      var E, G;
      return (G = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : G.call(E);
    },
    { preserveReadyWhilePending: !1 }
  ), c = zs(u);
  let f = null;
  const p = (E, G) => {
    f || (f = If(e, i, u));
    const re = r.render({ width: E.w, height: E.h, camera: G, ...f });
    return re && l.drawImage(re.canvas, re.x, re.y, re.width, re.height, E.x, E.y, E.w, E.h), !!re;
  };
  if (n === "cutout") {
    const E = qS(i), G = iw(u), re = E ? Ee(Wr(E).aspect, 0.1, 10) : c ? Ee(Number(G.width / G.height), 0.05, 20) : 1, pe = Xu(d, re);
    e.__panoCutoutNodeFrame = pe;
    let he = "none";
    const me = String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "");
    if (E)
      if (u && !c)
        he = "loading";
      else if (c) {
        const Z = y_({ width: a, height: s }, pe, E);
        [
          !Z.fallback || p(Z.fallback.rect, Wo(Z.fallback.shot)),
          p(Z.rect, Wo(Z.shot)),
          !Z.fallback || p(pe, Wo(E))
        ].every(Boolean) || (he = "loading");
      } else
        he = "empty";
    else {
      const Z = e.__panoLastCutoutShot;
      Z ? (e.__panoPreviewView = zm(Z, { width: a, height: s }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), c ? p(d, Os(e.__panoPreviewView, a, s)) || (he = "loading") : u ? he = "loading" : he = "empty";
    }
    c || r.release(), r.failed && he === "loading" && (he = "none"), E && (e.__panoLastCutoutShot = { ...E }, l.save(), l.fillStyle = "rgba(0,0,0,0.58)", l.beginPath(), l.rect(0, 0, a, s), l.rect(pe.x, pe.y, pe.w, pe.h), l.fill("evenodd"), l.restore(), l.save(), l.strokeStyle = "rgba(255,221,87,0.72)", l.lineWidth = 2, l.strokeRect(pe.x + 0.5, pe.y + 0.5, Math.max(0, pe.w - 1), Math.max(0, pe.h - 1)), l.restore()), he === "loading" ? (Xl(e, !1), Ha(e, !0, me)) : he === "empty" ? (Xl(e, !0), Ha(e, !1, "")) : (Xl(e, !1), Ha(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let m = !1;
  (!u || c) && (f = If(e, i, u), !f.background && !f.layers.length ? (r.release(), m = !0) : m = p(d, Os(e.__panoPreviewView, a, s)));
  const b = !m && !r.failed;
  Ha(e, b, b ? String((u == null ? void 0 : u.currentSrc) || (u == null ? void 0 : u.src) || "") : ""), b && YS(l, d, Af(t, d));
  const v = Kc(e, a, s);
  !u && m && dw(l, v, Af(t, d));
  const F = String(((le = i == null ? void 0 : i.active) == null ? void 0 : le.selected_sticker_id) || ""), U = Dc(i, js(e)), H = m ? U.find((E) => String((E == null ? void 0 : E.id) || "") === F && (E == null ? void 0 : E.visible) !== !1) : null;
  m && U.filter((E) => E !== H && (E == null ? void 0 : E.visible) !== !1 && (E.external || E.source_kind === "external_image")).filter((E) => !zs(aa(e, E.id, null, { external: !0 }))).forEach((E) => ow(l, E, v)), H && aw(l, H, v);
}
function Ef(e, t, r, n, i = 1) {
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
    Ef(e, l, t, s === 0 ? i : n, s === 0 ? 1.5 : 1);
  }
  for (let s = -180; s <= 180; s += 15) {
    const l = [];
    for (let d = -89; d <= 89; d += 4) l.push(wn(s, d));
    Ef(e, l, t, n, s % 90 === 0 ? 1.3 : 1);
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
function Bc(e) {
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
  return fw(e, t) ? !1 : (Bc(e), !0);
}
function Of() {
  var r;
  const e = (r = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function pw(e) {
  var r;
  if (!e) return;
  const t = (r = Vt == null ? void 0 : Vt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function hw(e, t = 360, r = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Qm(e)) return;
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
function Ff(e, t = null, r = 0, n = 0, i = !0) {
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
function ag(e, t) {
  return vm(yw, e, t) ? !1 : (HS(e, t), ig(e), Fo(e), !0);
}
async function bw(e) {
  var r, n;
  const t = await Yv(e, Vt, sn);
  t && (ag(e, t), (n = (r = e.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function vw(e, t = {}) {
  var xe;
  const r = t.__allowStandalone === !0, n = eg(e);
  if (n && !r) {
    id(e);
    return;
  }
  n && hw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const i = e.__panoPreviewMode === "stickers", o = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const a = {
    signature: Nf(e)
  }, s = "dom", l = a.signature || Nf(e);
  if (Number(e.__panoRebindGeneration || 0), Gc(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Hc(e), e.__panoFrontendSig = l, e.__panoStickersPath = s, (xe = e.__panoDomPreview) != null && xe.widget || (e.__panoLegacyPreviewHooked && us(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
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
    const T = Vs(zc(
      e.addDOMWidget(jc(), "preview", f, Ff(e, null))
    ));
    Fo(e), e.__panoDomPreview = { widget: T, root: f, requestDraw: () => {
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
  const m = un({ label: "node.surface" });
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
  const b = document.createElement("div");
  b.style.cssText = [
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
  ].join(";"), b.textContent = "Connect ERP image", p.appendChild(m), p.appendChild(b), f.appendChild(p);
  const v = lh(f), F = document.createElement("div");
  F && (F.className = i ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", f.appendChild(F)), CS(e, 120, 120), Fo(e);
  let U = null;
  try {
    mw(e, u, () => {
      var T, ye;
      return (ye = (T = e.__panoDomPreview) == null ? void 0 : T.requestDraw) == null ? void 0 : ye.call(T);
    }), U = Vs(zc(e.addDOMWidget(
      jc(),
      "preview",
      f,
      Ff(
        e,
        () => {
          var T, ye;
          return (ye = (T = e.__panoDomPreview) == null ? void 0 : T.requestDraw) == null ? void 0 : ye.call(T);
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
    H.destroyed || (H.needsDraw = !0, !H.inTick && !H.raf && (H.raf = requestAnimationFrame(ge)));
  }, P = dm(D), W = /* @__PURE__ */ Zi(i ? { ...Tm(bn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Rm(bn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((T) => ({ value: T, label: T }))
  });
  let R = null;
  if (i && e.__panoSceneStateV2) {
    const [T, ye] = [0, 1].map(() => {
      const Ae = ol(document, "node.playback");
      return Ae.playsInline = !0, Ae.preload = "auto", Ae.crossOrigin = "anonymous", Ae.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", p.appendChild(Ae), Ae;
    }), Ce = un({ label: "node.still" });
    Ce.__panoFrameIdx = 0;
    const Oe = un({ label: "node.port-still" });
    Oe.__panoFrameIdx = 0;
    const Re = d_({
      video: T,
      stickerVideo: ye,
      createImage: (Ae, Ve) => {
        const je = new Image();
        return je.onload = Ve, je.onerror = Ve, je.src = Ae, je;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ae) => requestAnimationFrame(Ae),
        cancelFrame: (Ae) => cancelAnimationFrame(Ae)
      },
      readState: () => bn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: D,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ve;
        if (!(T.videoWidth > 0 && T.videoHeight > 0)) return;
        const Ae = Math.min(1, MS / T.videoWidth);
        Ce.width = Math.round(T.videoWidth * Ae), Ce.height = Math.round(T.videoHeight * Ae), (Ve = Ce.getContext("2d")) == null || Ve.drawImage(T, 0, 0, Ce.width, Ce.height), Ce.__panoFrameIdx += 1, D();
      },
      onStickerCapture: () => {
        var Ae;
        ye.videoWidth > 0 && ye.videoHeight > 0 && (Oe.width = ye.videoWidth, Oe.height = ye.videoHeight, (Ae = Oe.getContext("2d")) == null || Ae.drawImage(ye, 0, 0), Oe.__panoFrameIdx += 1, D());
      },
      onChange: () => {
        W.playing = Re.playing, D();
      }
    });
    R = { playback: Re, video: T, still: Ce, stickerVideo: ye, stickerStill: Oe, stickerSource: "" }, e.__panoSurfacePlayback = R;
  }
  const ee = () => {
    var je;
    const { playback: T, still: ye, stickerStill: Ce } = R, Oe = Vc(p, !!((je = e.flags) != null && je.collapsed)), Re = T.source, Ae = Oe ? lw(e) : null, Ve = T.follow({
      shown: Oe,
      sources: Oe ? sw(e) : [],
      state: bn(e),
      sticker: Ae
    });
    ((Ae == null ? void 0 : Ae.src) || "") !== R.stickerSource && (R.stickerSource = (Ae == null ? void 0 : Ae.src) || "", mc(Ce)), T.source !== Re && (mc(ye), ye.__panoFrameIdx = 0), W.playable = Ve, W.playing = T.playing;
  }, ne = () => {
    var ye, Ce;
    const T = ((ye = e.__panoOwnOutputVideoCache) == null ? void 0 : ye.player) ?? null;
    T && !Vc(p, !!((Ce = e.flags) != null && Ce.collapsed)) && T.pause(), i && (W.playable = !!T && !T.failed(), W.playing = !!(T != null && T.playing));
  }, le = () => {
    var T;
    R == null || R.playback.pause(), (T = e.__panoOwnOutputVideoCache) == null || T.player.pause();
  };
  let E = null;
  const G = (i ? c_ : v_)({
    readState: () => bn(e),
    publishLiveState: (T) => {
      T ? (E = T, e.__panoLiveStateOverride = T) : (e.__panoLiveStateOverride === E && (e.__panoLiveStateOverride = null), E = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, D();
    },
    commitState: (T) => {
      var Oe, Re, Ae, Ve;
      const ye = Hi(e, "state_json");
      if (!ye) return;
      Wh(e, T.active);
      const Ce = Bh(e, T);
      Uh(e, Ce, String(ye.value ?? "")) || (ye.value = Ce, (Oe = ye.callback) == null || Oe.call(ye, Ce), e.__panoStateCache = null, (Re = e.setDirtyCanvas) == null || Re.call(e, !0, !0), (Ve = (Ae = e.graph) == null ? void 0 : Ae.setDirtyCanvas) == null || Ve.call(Ae, !0, !0));
    },
    onChange: (T) => Object.assign(W, T)
  }), pe = i ? qm(e, (T = "sync", ye = null) => {
    var ht;
    if (!i || !e.graph || !G || G.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const St = en(e, "external-sticker"), Nn = bn(e).stickers.find((mn) => mn.source.kind === "port");
      return G.apply({
        type: "sync-port",
        value: Om(e, {
          pose: St ? Bo(e, "pano_sticker_input_pose", ye) : null,
          image: Nn ? aa(e, Nn.id, null, { external: !0 }) : null
        })
      });
    }
    const Ce = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((St) => String((St == null ? void 0 : St.name) || "") === "sticker_image") : -1, Oe = Ce >= 0 ? ((ht = e.getInputLink(Ce)) == null ? void 0 : ht.id) ?? null : null;
    if (Oe == null)
      return G.apply({ type: "sync-external", value: { connected: !1 } });
    if (!en(e, "external-sticker")) return !1;
    const Re = Bo(e, "pano_sticker_input_pose", ye), Ae = Array.isArray(Re) ? Re[0] : Re, Ve = String(Bo(e, "pano_sticker_input_state_hash", ye) ?? ""), je = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Ye = bn(e), $e = (Array.isArray(Ye == null ? void 0 : Ye.stickers) ? Ye.stickers : []).find((St) => String((St == null ? void 0 : St.id) || "") === "sticker_image_1"), He = aa(e, "sticker_image_1", null, { external: !0 }), _t = Ae && typeof Ae == "object" ? Ae : $e || { yaw_deg: je.yaw, pitch_deg: je.pitch, hFOV_deg: 30, rot_deg: 0 };
    return G.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Oe,
        stateHash: Ve,
        pose: _t,
        imageWidth: Number((He == null ? void 0 : He.naturalWidth) || (He == null ? void 0 : He.width) || 0),
        imageHeight: Number((He == null ? void 0 : He.naturalHeight) || (He == null ? void 0 : He.height) || 0)
      }
    });
  }) : () => {
  };
  let he = 0;
  const me = async (T) => {
    if (!i || !G || !Yn(T)) return !1;
    le();
    const ye = `asset_${Math.random().toString(16).slice(2, 10)}`, Ce = `st_${Math.random().toString(16).slice(2, 10)}`, Oe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    he += 1, W.importing = !0;
    const Re = Eo(e, `add:${ye}`, async () => {
      const Ae = await Oo(T), Ve = await ni(T, {
        fetchApi: (je, Ye) => sn.fetchApi(je, Ye)
      });
      return ue(), G.apply({
        type: "add-sticker",
        value: {
          stickerId: Ce,
          assetId: ye,
          asset: Ve,
          imageWidth: Ae.width,
          imageHeight: Ae.height,
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
      he = Math.max(0, he - 1), W.importing = he > 0, D();
    }
  };
  let Z = null, w = null, K = null, de = !1;
  const q = () => {
    var T;
    return K && (clearTimeout(K), K = null), de ? (de = !1, ((T = G == null ? void 0 : G.commitGesture) == null ? void 0 : T.call(G)) ?? !1) : !1;
  }, ue = () => {
    var Oe, Re, Ae;
    const T = q(), ye = (Z == null ? void 0 : Z.pointerId) ?? (w == null ? void 0 : w.pointerId);
    if (Z = null, w = null, ye != null) {
      try {
        (Oe = m.hasPointerCapture) != null && Oe.call(m, ye) && ((Re = m.releasePointerCapture) == null || Re.call(m, ye));
      } catch {
      }
      m.style.cursor = "grab";
    }
    const Ce = ((Ae = G == null ? void 0 : G.commitGesture) == null ? void 0 : Ae.call(G)) ?? !1;
    return T || Ce;
  }, Pe = () => {
    var Oe, Re, Ae;
    const T = q(), ye = Z == null ? void 0 : Z.pointerId;
    if (Z = null, ye != null) {
      try {
        (Oe = m.hasPointerCapture) != null && Oe.call(m, ye) && ((Re = m.releasePointerCapture) == null || Re.call(m, ye));
      } catch {
      }
      m.style.cursor = "grab";
    }
    const Ce = ((Ae = G == null ? void 0 : G.cancelGesture) == null ? void 0 : Ae.call(G)) ?? !1;
    return T || Ce;
  }, te = () => ue();
  G && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(te));
  let O = null, J = !1;
  if (F && G)
    try {
      ed(), O = gu(i ? K_ : V_, {
        model: W,
        onAction: (T) => {
          var Oe, Re, Ae;
          if ((T == null ? void 0 : T.type) === "toggle-playback") {
            ue(), R ? R.playback.toggle() : (Oe = e.__panoOwnOutputVideoCache) == null || Oe.player.toggle(), D();
            return;
          }
          if (le(), (T == null ? void 0 : T.type) === "open-editor") {
            ue(), i || (W.aspectOpen = !1), (Re = e.__panoOpenEditor) == null || Re.call(e);
            return;
          }
          if (i) {
            if ((T == null ? void 0 : T.type) === "add-image-file") {
              me(T.file);
              return;
            }
            G.apply(T) && D();
            return;
          }
          if ((T == null ? void 0 : T.type) === "toggle-aspect") {
            W.aspectOpen = !W.aspectOpen;
            return;
          }
          if ((T == null ? void 0 : T.type) === "close-aspect") {
            W.aspectOpen = !1;
            return;
          }
          let ye = T;
          if ((T == null ? void 0 : T.type) === "add-frame") {
            const Ve = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ye = {
              ...T,
              ...m_(Ve, {
                width: m.width,
                height: m.height
              })
            };
          } else if ((T == null ? void 0 : T.type) === "delete-frame") {
            const Ve = ui(bn(e));
            Ve && (e.__panoPreviewView = zm(Ve, {
              width: m.width,
              height: m.height
            }));
          }
          const Ce = ((Ae = e.__panoCutoutNodeFrame) == null ? void 0 : Ae.safeRect) || null;
          W.aspectOpen = !1, G.apply({ ...ye, safeRect: Ce }) && D();
        }
      }), O.mount(F), J = !0;
    } catch {
      O = null, J = !1;
    }
  const oe = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    R && ee(), D();
  }) : null;
  oe == null || oe.observe(p);
  const ge = (T) => {
    var Ce, Oe;
    H.raf = 0, H.inTick = !0;
    let ye = !1;
    try {
      ye = ve.stepInertia(T), (H.needsDraw || ye) && (H.needsDraw = !1, R ? ee() : ne(), (Ce = e.flags) != null && Ce.collapsed || uw(e, m, P), W.viewUnavailable = P.failed);
    } finally {
      H.inTick = !1;
    }
    (ye || H.needsDraw) && !H.raf && (H.raf = requestAnimationFrame(ge)), PS() && (!e.__panoDebugLastTs || T - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = T, e.__panoPreviewMode, Hc(e), Po(f), Po(p), Po(m), Po(f.parentElement), Po((Oe = f.parentElement) == null ? void 0 : Oe.parentElement), Number(m.width || 0), Number(m.height || 0), void 0);
  }, ve = wu({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (T) => {
      e.__panoPreviewView = T;
    },
    getViewportSize: () => {
      const T = m.getBoundingClientRect();
      return {
        w: Math.max(1, Number(T.width || m.clientWidth || 0)),
        h: Math.max(1, Number(T.height || m.clientHeight || 0))
      };
    },
    getInvert: () => {
      const T = Pf();
      return {
        x: T.invert_view_x ? -1 : 1,
        y: T.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      D();
    }
  }), I = i ? p : f, ae = (T) => {
    const ye = m.getBoundingClientRect();
    return {
      x: (Number(T.clientX) - ye.left) * (m.width / Math.max(1, ye.width)),
      y: (Number(T.clientY) - ye.top) * (m.height / Math.max(1, ye.height))
    };
  }, y = (T) => {
    var Oe, Re;
    if (!i || !o) return;
    const ye = bn(e), Ce = Sf(
      Dc(ye, js(e)),
      String(((Oe = ye == null ? void 0 : ye.active) == null ? void 0 : Oe.selected_sticker_id) || ""),
      ae(T),
      Kc(e, m.width, m.height)
    );
    if (!Ce) {
      m.style.cursor = "grab";
      return;
    }
    if (((Re = Ce.item) == null ? void 0 : Re.locked) === !0) {
      m.style.cursor = "default";
      return;
    }
    m.style.cursor = Ce.hit.cursor || "default";
  };
  m.addEventListener("pointerdown", (T) => {
    var je, Ye, $e, He, _t, Nt, ht, St, Nn, mn, gn;
    if (!Ln(T, I) || T.button !== 0) return;
    if (!i) {
      const Bt = ui(bn(e)), We = e.__panoCutoutNodeFrame;
      if (!Bt) {
        (je = f.focus) == null || je.call(f, { preventScroll: !0 }), (Ye = m.setPointerCapture) == null || Ye.call(m, T.pointerId), m.style.cursor = "grabbing", ve.startDrag(T.clientX, T.clientY, T.pointerId);
        return;
      }
      if (Bt.locked === !0 || !We || !G) return;
      const Cn = ae(T);
      let An;
      if (T.shiftKey) {
        const er = Hm({
          frame: We,
          point: Cn,
          startRollDeg: Number(Bt.roll_deg ?? Bt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!er) return;
        An = { kind: "roll", pointerId: T.pointerId, rollGesture: er };
      } else {
        const er = (($e = bn(e)) == null ? void 0 : $e.ui_settings) || Pf();
        An = {
          kind: "pan",
          pointerId: T.pointerId,
          startPoint: Cn,
          startShot: { ...Bt },
          focalPx: fi(We, Bt),
          invertX: er.invert_view_x === !0,
          invertY: er.invert_view_y === !0
        };
      }
      ue(), (He = f.focus) == null || He.call(f, { preventScroll: !0 }), (_t = m.setPointerCapture) == null || _t.call(m, T.pointerId), m.style.cursor = "grabbing", G.beginGesture(), Z = An;
      return;
    }
    if (!o) return;
    const ye = ae(T), Ce = bn(e), Oe = String(((Nt = Ce == null ? void 0 : Ce.active) == null ? void 0 : Nt.selected_sticker_id) || ""), Re = Kc(e, m.width, m.height);
    (ht = f.focus) == null || ht.call(f, { preventScroll: !0 });
    const Ae = () => Sf(Dc(Ce, js(e)), Oe, ye, Re);
    let Ve = Ae();
    if (Ve && (R != null && R.playback.playing) && (le(), Ve = Ae()), Ve && G) {
      if (ve.stopMotion(), ue(), String(((St = Ve.item) == null ? void 0 : St.id) || "") !== Oe && G.apply({ type: "select-sticker", id: Ve.item.id }), ((Nn = Ve.item) == null ? void 0 : Nn.locked) === !0) {
        D();
        return;
      }
      const Bt = ye, We = Ve.geometry.center;
      w = {
        active: !0,
        kind: Ve.hit.kind,
        pointerId: T.pointerId,
        startPoint: Bt,
        startCenter: { ...We },
        startSticker: { ...Ve.item },
        startDistance: Math.max(1, Math.hypot(Bt.x - We.x, Bt.y - We.y)),
        startAngle: Math.atan2(Bt.y - We.y, Bt.x - We.x),
        projection: Re
      }, G.beginGesture(), (mn = m.setPointerCapture) == null || mn.call(m, T.pointerId), m.style.cursor = Ve.hit.kind === "rotate" ? "grabbing" : Ve.hit.kind === "move" ? "move" : Ve.hit.cursor, D();
      return;
    }
    (gn = m.setPointerCapture) == null || gn.call(m, T.pointerId), m.style.cursor = "grabbing", ve.startDrag(T.clientX, T.clientY, T.pointerId);
  }), m.addEventListener("pointermove", (T) => {
    if (!i) {
      if (!Z) {
        if (!ve.state.drag.active) return;
        Ln(T, I), ve.moveDrag(T.clientX, T.clientY, "pano");
        return;
      }
      if (Z.pointerId !== T.pointerId || !G) return;
      if (Ln(T, I), Z.kind === "pan") {
        const Ce = ae(T);
        G.updateGesture({
          type: "pan-camera",
          startShot: Z.startShot,
          dx: Ce.x - Z.startPoint.x,
          dy: Ce.y - Z.startPoint.y,
          focalPx: Z.focalPx,
          invertX: Z.invertX,
          invertY: Z.invertY
        });
        return;
      }
      const ye = Gm(Z.rollGesture, ae(T), T);
      if (!ye) return;
      Z.rollGesture = ye.gesture, G.updateGesture({ type: "set-roll", value: ye.rollDeg });
      return;
    }
    if (!w && !ve.state.drag.active) {
      y(T);
      return;
    }
    if (w) {
      if (w.pointerId !== T.pointerId || !G) return;
      Ln(T, I);
      const ye = ae(T);
      let Ce = w.startSticker;
      if (w.kind === "move")
        Ce = q_(
          w.startSticker,
          {
            x: w.startCenter.x + ye.x - w.startPoint.x,
            y: w.startCenter.y + ye.y - w.startPoint.y
          },
          w.projection
        );
      else if (w.kind === "scale") {
        const Oe = Math.hypot(ye.x - w.startCenter.x, ye.y - w.startCenter.y);
        Ce = X_(w.startSticker, w.startDistance, Oe);
      } else if (w.kind === "rotate") {
        const Oe = Math.atan2(ye.y - w.startCenter.y, ye.x - w.startCenter.x);
        Ce = J_(w.startSticker, w.startAngle, Oe, T.shiftKey === !0);
      }
      G.updateGesture({ type: "set-transform", value: Ce }), D();
      return;
    }
    !o || !ve.state.drag.active || (Ln(T, I), ve.moveDrag(T.clientX, T.clientY, "pano"));
  });
  const S = () => {
    var ye, Ce;
    if (!Z && !w) {
      if (!ve.state.drag.active) return;
      ve.endDrag(), m.style.cursor = "grab", D();
      return;
    }
    if (!G) return;
    const T = (Z == null ? void 0 : Z.pointerId) ?? (w == null ? void 0 : w.pointerId);
    Z = null, w = null;
    try {
      (ye = m.hasPointerCapture) != null && ye.call(m, T) && ((Ce = m.releasePointerCapture) == null || Ce.call(m, T));
    } catch {
    }
    G.cancelGesture(), m.style.cursor = "grab", D();
  }, V = (T, ye = !1) => {
    var Ce, Oe, Re, Ae;
    if (!i) {
      if (!Z) {
        if (!ve.state.drag.active) return;
        Ln(T, I), (Ce = m.releasePointerCapture) == null || Ce.call(m, T.pointerId), m.style.cursor = "grab", ve.endDrag(), D();
        return;
      }
      if (Z.pointerId !== T.pointerId || !G) return;
      Ln(T, I), Z = null, (Oe = m.releasePointerCapture) == null || Oe.call(m, T.pointerId), m.style.cursor = "grab", ye ? G.cancelGesture() : G.commitGesture(), y(T), D();
      return;
    }
    if (w) {
      if (w.pointerId !== T.pointerId || !G) return;
      Ln(T, I), w = null, (Re = m.releasePointerCapture) == null || Re.call(m, T.pointerId), m.style.cursor = "grab", ye ? G.cancelGesture() : G.commitGesture(), D();
      return;
    }
    !o || !ve.state.drag.active || (Ln(T, I), (Ae = m.releasePointerCapture) == null || Ae.call(m, T.pointerId), m.style.cursor = "grab", ve.endDrag(), D());
  };
  m.addEventListener("pointerup", V), m.addEventListener("pointercancel", (T) => V(T, !0)), m.addEventListener("lostpointercapture", S), m.addEventListener("pointerleave", (T) => {
    !i && Z || w || ve.state.drag.active && V(T);
  });
  const Y = (T) => {
    const ye = document.activeElement;
    if (ye !== f && !f.contains(ye)) return;
    if (T.key === "Escape" && (Z || w) && G) {
      S(), Bc(T);
      return;
    }
    if (!i || T.key !== "Delete" && T.key !== "Backspace" || !G) return;
    const Ce = T.target, Oe = String((Ce == null ? void 0 : Ce.tagName) || "").toUpperCase();
    Oe === "INPUT" || Oe === "TEXTAREA" || Ce != null && Ce.isContentEditable || W.canDelete === !0 && (le(), ue(), G.apply({ type: "delete-selected" }) && D(), Bc(T));
  };
  window.addEventListener("keydown", Y, !0);
  const x = SS({
    requestFrame: (T) => requestAnimationFrame(T),
    cancelFrame: (T) => cancelAnimationFrame(T),
    restore: (T) => pw(T)
  }), M = (T) => {
    var Ce, Oe, Re, Ae, Ve, je;
    if (!Ln(T, I)) return;
    if (!i) {
      const Ye = ui(bn(e));
      if (Ye && Ye.locked !== !0 && G) {
        const $e = Ss(T);
        $e !== 0 && (de || (ue(), G.beginGesture(), de = !0), G.updateGesture({
          type: "step-fov",
          direction: $e
        }) ? (K && clearTimeout(K), K = setTimeout(q, 180), D()) : G.hasGestureChanges() || (G.cancelGesture(), de = !1));
      } else if (!Ye) {
        const $e = Of();
        ve.applyWheelEvent(T) && D(), x.schedule($e);
      }
      (Ce = T.preventDefault) == null || Ce.call(T), (Oe = T.stopPropagation) == null || Oe.call(T), (Re = T.stopImmediatePropagation) == null || Re.call(T);
      return;
    }
    if (!o) return;
    const ye = Of();
    ve.applyWheelEvent(T) && D(), (Ae = T.preventDefault) == null || Ae.call(T), (Ve = T.stopPropagation) == null || Ve.call(T), (je = T.stopImmediatePropagation) == null || je.call(T), x.schedule(ye);
  }, L = i ? [p, m] : [p];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((T) => {
    L.forEach((ye) => ye.addEventListener(T, M, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((T) => {
    m.addEventListener(T, (ye) => Ln(ye, I)), p.addEventListener(T, (ye) => Ln(ye, I));
  });
  const k = Hi(e, "state_json");
  let N = null, C = null;
  k && !k.__panoPreviewPatchedCb && (N = k.callback, C = (T) => {
    const ye = N ? N(T) : void 0;
    return D(), ye;
  }, k.callback = C, k.__panoPreviewPatchedCb = C);
  const B = Hi(e, "bg_color");
  let X = null, ie = null;
  B && !B.__panoPreviewPatchedCb && (X = B.callback, ie = (T) => {
    const ye = X ? X(T) : void 0;
    return D(), ye;
  }, B.callback = ie, B.__panoPreviewPatchedCb = ie);
  const $ = e.onRemoved, se = e.onResize, Se = e.onExecuted, Me = e.onDragOver, fe = e.onDragDrop;
  let be = null;
  const _e = () => {
    i && (W.dropActive = !0, be && clearTimeout(be), be = setTimeout(() => {
      be = null, W.dropActive = !1;
    }, 140));
  }, h = i ? function(T) {
    return (Me ? Me.apply(this, arguments) : !1) === !0 ? !0 : nd(T == null ? void 0 : T.dataTransfer) ? (_e(), !0) : !1;
  } : null, z = i ? function(T) {
    var Oe;
    if ((fe ? fe.apply(this, arguments) : !1) === !0) return !0;
    const Ce = Array.from(((Oe = T == null ? void 0 : T.dataTransfer) == null ? void 0 : Oe.files) || []).find((Re) => Yn(Re));
    return Ce ? (be && clearTimeout(be), be = null, W.dropActive = !1, me(Ce), !0) : !1;
  } : null;
  i && (e.onDragOver = h, e.onDragDrop = z);
  const A = i ? _S(f, {
    onActive: (T) => {
      if (T) {
        _e();
        return;
      }
      be && clearTimeout(be), be = null, W.dropActive = !1;
    },
    onDrop: (T) => {
      me(T);
    }
  }) : () => {
  }, _ = function(T) {
    e.__panoOutputFromRun = !0;
    const ye = ag(e, T);
    Ar(e, ye ? "executed" : "sync", T), D();
    const Ce = Se ? Se.apply(this, arguments) : void 0;
    return Fo(e), Ce;
  };
  e.onExecuted = _;
  const g = e.onConnectionsChange, j = function(T, ye) {
    const Ce = cf(e, T, ye, Wu), Oe = cf(e, T, ye, Br), Re = arguments, Ae = g ? g.apply(this, Re) : void 0, Ve = () => {
      H.destroyed || (Oe && US(e), Ce && Ar(e, "connection-change"), Fo(e), D());
    };
    return Ve(), queueMicrotask(Ve), Ae;
  };
  e.onConnectionsChange = j;
  const ce = function() {
    const T = se ? se.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, D(), T;
  };
  e.onResize = ce;
  const Q = function() {
    return we(), Wc.unregister(this), $ ? $.apply(this, arguments) : void 0;
  };
  e.onRemoved = Q;
  const we = () => {
    var T, ye, Ce, Oe, Re, Ae, Ve, je, Ye;
    H.destroyed = !0, (T = oe == null ? void 0 : oe.disconnect) == null || T.call(oe), i ? ue() : Pe(), m.removeEventListener("lostpointercapture", S), A(), v(), window.removeEventListener("keydown", Y, !0), (Ce = (ye = e.__panoStateFlushers) == null ? void 0 : ye.delete) == null || Ce.call(ye, te), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Oe = G == null ? void 0 : G.destroy) == null || Oe.call(G), (Re = O == null ? void 0 : O.unmount) == null || Re.call(O), R && (R.playback.dispose(), R.video.remove(), R.stickerVideo.remove(), e.__panoSurfacePlayback === R && (e.__panoSurfacePlayback = null)), P.dispose(), e.__panoSurfaceScene = null, (Ve = (Ae = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ae.dispose) == null || Ve.call(Ae), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, pe(), x.dispose(), be && clearTimeout(be), be = null, rd.disposeOwner(e), Gi(e), H.raf && cancelAnimationFrame(H.raf), H.raf = 0, ((je = e.__panoCutoutNodeSurface) == null ? void 0 : je.session) === G && (e.__panoCutoutNodeSurface = null), ((Ye = e.__panoStickersNodeSurface) == null ? void 0 : Ye.session) === G && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === ce && (e.onResize = se), e.onExecuted === _ && (e.onExecuted = Se), e.onConnectionsChange === j && (e.onConnectionsChange = g), C && (k == null ? void 0 : k.callback) === C && (k.callback = N), C && (k == null ? void 0 : k.__panoPreviewPatchedCb) === C && delete k.__panoPreviewPatchedCb, ie && (B == null ? void 0 : B.callback) === ie && (B.callback = X), ie && (B == null ? void 0 : B.__panoPreviewPatchedCb) === ie && delete B.__panoPreviewPatchedCb, e.onDragOver === h && (e.onDragOver = Me), e.onDragDrop === z && (e.onDragDrop = fe), e.onRemoved === Q && (e.onRemoved = $);
  };
  e.__panoDomRestore = we, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = G && J && !i ? { session: G, model: W } : null, e.__panoStickersNodeSurface = G && J && i ? { session: G, model: W } : null, e.__panoDomPreview = {
    widget: U,
    root: f,
    canvas: m,
    requestDraw: D,
    state: H,
    emptyHintEl: b,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Wc.register(e), e.graph && Ar(e, "attach"), D();
}
function Tf(e, t = {}) {
  tg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Df(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (eg(e) && !r) {
    id(e);
    return;
  }
  tg(e).attach(t);
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
    var m, b, v;
    if (!a) {
      if (a = !0, (m = t == null ? void 0 : t.removeEventListener) == null || m.call(t, "fullscreenchange", u), l())
        try {
          const F = (b = t.exitFullscreen) == null ? void 0 : b.call(t);
          (v = F == null ? void 0 : F.catch) == null || v.call(F, () => {
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
        icon: e.model.fullscreen ? Qe(ze).fullscreen_close : Qe(ze).fullscreen,
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
      e.model.viewUnavailable ? (Te(), Hn(Ju, { key: 0 })) : ut("", !0)
    ]));
  }
}, Ga = 140, Mw = 180, Lf = 40, Jl = 10;
function Vf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Rf(e, t) {
  const r = Vf(e), n = Vf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function $f(e) {
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
  return typeof ((o = sn) == null ? void 0 : o.apiURL) == "function" ? sn.apiURL(i) : i;
}
function Wi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Wi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return $f({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = Wi(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : $f(e);
}
function sg(e) {
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
function Uc(e) {
  var i;
  const t = (i = qn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Rf(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Rf(o, r)) return t[o];
  return null;
}
function Nw(e) {
  var n, i;
  const t = Uc(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const a of o) {
        const s = Wi(a);
        if (s && /\.mp4(\?|$)/i.test(s) || s && String((a == null ? void 0 : a.format) || "").toLowerCase() === "video/mp4") return s;
      }
  return "";
}
function Cw(e, t = "erp_image") {
  var p, m, b, v, F, U, H;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((D) => String((D == null ? void 0 : D.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((D, P) => String((D == null ? void 0 : D.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(P))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const a = (b = (m = (p = qn) == null ? void 0 : p.graph) == null ? void 0 : m.getNodeById) == null ? void 0 : b.call(m, o), s = Uc(o), l = Uc(e == null ? void 0 : e.id), d = [
    (v = l == null ? void 0 : l.ui) == null ? void 0 : v.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    s == null ? void 0 : s.images,
    (F = s == null ? void 0 : s.ui) == null ? void 0 : F.pano_input_images,
    s == null ? void 0 : s.pano_input_images
  ];
  for (const D of d)
    if (Array.isArray(D))
      for (const P of D) {
        const W = Wi(P);
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
      const P = Wi(D);
      if (P) return P;
    }
  if (a) {
    const D = Array.isArray(a == null ? void 0 : a.imgs) ? a.imgs : [];
    for (const P of D) {
      const W = Wi(P);
      if (W) return W;
    }
  }
  const c = (H = a == null ? void 0 : a.widgets) == null ? void 0 : H.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image"), f = String((c == null ? void 0 : c.value) || "").trim();
  return f ? sn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Zl(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function zf(e, t, r, n, i, o, a) {
  var d, u, c;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !sg(o) || r <= 1 || n <= 1) {
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
function jf(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Aw {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = dm(() => this.requestDraw()), this.controller = wu({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Rt(Number((n == null ? void 0 : n.yaw) || 0)),
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
      ].join(";"), this.canvas = un({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
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
      if (this.widget = Vs(zc(
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
      return ed(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Zi({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = ww({
        root: this.root,
        documentRef: document,
        onChange: (s) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = s), this.requestDraw();
        },
        onFallback: () => {
          var s, l;
          return (l = (s = this.options).onOpen) == null ? void 0 : l.call(s, this.node);
        }
      }), this.surfaceApp = gu(kw, {
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = lh(r), t.addEventListener("pointerdown", (o) => {
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
    !(this.img instanceof HTMLVideoElement) || !sg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Vc(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = qn.canvas) != null && n.graph) || this.node.graph === qn.canvas.graph);
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
      return jf(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (a = this.setDirtyCanvas) == null || a.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      if (!o || !jf(o.x, o.y, a))
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
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Jl * 2), r = Math.max(60, Number(((a = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : a[1]) || 0) - Lf - Jl);
    return { x: Jl, y: Lf, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), zf(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? um : "");
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), zf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, a, s, l, d, u, c, f, p, m, b, v, F;
    if (((r = this.node) == null ? void 0 : r.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (a = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || a.call(o), this.fullscreenController = null, (s = this.wheelCaptureCleanup) == null || s.call(this), this.wheelCaptureCleanup = null, (d = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || d.call(l), this.surfaceApp = null, (c = (u = this.surfaceHost) == null ? void 0 : u.remove) == null || c.call(u), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (m = (p = this.root) == null ? void 0 : p.remove) == null || m.call(p);
    } catch {
    }
    try {
      Zm(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((F = (v = (b = this.node) == null ? void 0 : b.widgets) == null ? void 0 : v.find) == null ? void 0 : F.call(v, (U) => (U == null ? void 0 : U.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Iw(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const r = new Aw(e, t);
  e.__panoPreviewNodeRuntime = r, r.attach();
}
function lg(e, t, r) {
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
function ad(e) {
  return !!(e != null && e.prototype);
}
function sa(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Ew(e, t = {}) {
  ad(e) || Iw(e, {
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
  if (!ad(e)) {
    Df(e, {
      ...n,
      onOpen: sa(e, t.onOpen)
    });
    return;
  }
  lg(e, "stickers_node_preview", (i) => {
    Df(i, {
      ...n,
      onOpen: sa(i, t.onOpen)
    });
  });
}
function Fw(e, t = {}) {
  if (!ad(e)) {
    Tf(e, {
      ...t,
      onOpen: sa(e, t.onOpen)
    });
    return;
  }
  lg(e, "cutout_preview", (r) => {
    Tf(r, {
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
function Hf(e, t) {
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
  function f(b) {
    try {
      b();
    } catch (v) {
      i(v);
    }
  }
  function p() {
    !o && !a && !s && (o = e(m));
  }
  function m(b) {
    o = 0, a = !0;
    try {
      const v = d;
      d = /* @__PURE__ */ new Map();
      for (const U of v.values()) f(() => U(b));
      if (s) return;
      const F = l;
      l = /* @__PURE__ */ new Set(), (F.size || n()) && f(() => r(b, F));
    } finally {
      a = !1;
    }
    (l.size || d.size || n()) && p();
  }
  return {
    requestDraw(b) {
      if (!Dw.has(b)) throw new Error(`Unknown draw reason: ${b}`);
      b === ft.STATE && (c += 1), l.add(b), p();
    },
    requestFrame(b) {
      const v = u++;
      return d.set(v, b), p(), v;
    },
    cancelFrame(b) {
      d.delete(b);
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
    return (t, r) => (Te(), Le(Ze, null, [
      Ne("div", Vw, [
        e.space ? Cr((Te(), Le("div", Rw, [
          Ne("div", $w, [
            (Te(!0), Le(Ze, null, xt(e.space.modes, (n) => (Te(), Hn(Yt, {
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
          [di, e.space.visible]
        ]) : ut("", !0),
        (Te(!0), Le(Ze, null, xt(e.buttons, (n) => (Te(), Hn(Yt, {
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
          style: Mt({
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
            Ke(Lt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Hw)) : ut("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), Le("div", Gw, rt(e.preview.label || "Preview unavailable"), 1)) : ut("", !0)
        ], 14, jw)
      ], 8, zw), [
        [di, e.preview.visible]
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
        (Te(!0), Le(Ze, null, xt(Qe(r), (a) => (Te(), Le("line", {
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
      [di, e.model.visible === !0]
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
      Ke(Km, {
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
    const t = e, r = /* @__PURE__ */ Ht(null), n = /* @__PURE__ */ Ht(null);
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
      var b;
      const c = n.value;
      if (!c) return;
      const f = c.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const m = o()[0] || c;
      (b = m == null ? void 0 : m.focus) == null || b.call(m);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function d(c) {
      var F;
      if (c.defaultPrevented) return;
      if (c.key === "Escape") {
        c.preventDefault(), c.stopPropagation(), a("confirm-cancel");
        return;
      }
      if (c.key !== "Tab") return;
      const f = o(), p = n.value;
      if (!f.length) {
        c.preventDefault(), (F = p == null ? void 0 : p.focus) == null || F.call(p);
        return;
      }
      const m = f[0], b = f[f.length - 1], v = document.activeElement;
      if (c.shiftKey) {
        (v === m || v === p || !(p != null && p.contains(v))) && (c.preventDefault(), b.focus());
        return;
      }
      (v === b || !(p != null && p.contains(v))) && (c.preventDefault(), m.focus());
    }
    function u(c) {
      c.target === r.value && a("confirm-cancel");
    }
    return si(() => t.model.visible, (c, f) => {
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
      onClick: Ot(u, ["self"])
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
      (Te(!0), Le(Ze, null, xt(e.panes, (o) => {
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
            (Te(!0), Le(Ze, null, xt(e.paintSwatches, (s) => (Te(), Le("button", {
              key: s.id,
              class: ct(["pano-paint-color-dot", { active: e.state.activeSwatchId === s.id }]),
              type: "button",
              "data-paint-color-swatch": s.id,
              "aria-label": s.label,
              style: Mt(t(s)),
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
              style: Mt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, ox),
            Ne("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Mt({
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
                  style: Mt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Ne("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Ne("div", lx, [
                Ne("div", cx, [
                  Ne("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Mt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Ne("div", ux, [
                  Ne("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Mt({ left: String(e.state.pickerHueLeft || "0%") })
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
                  (Te(!0), Le(Ze, null, xt(e.state.historyEntries || [], (s) => (Te(), Le("button", {
                    key: s.index,
                    class: ct(["pano-paint-color-history-dot", { empty: !s.color }]),
                    type: "button",
                    "data-paint-history-index": s.index,
                    "aria-label": `Recent color ${s.index + 1}`,
                    disabled: !s.color,
                    style: Mt(r(s.color))
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
              (Te(!0), Le(Ze, null, xt(o.tools, (s) => {
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
                style: Mt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Sx),
              Ne("span", wx, rt(e.state.sizeText || "10"), 1)
            ], 10, _x),
            Ne("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((a = e.state.clearVisible) == null ? void 0 : a[o.key]) ?? !o.clearHidden)
            }, [
              Ke(Yt, {
                icon: Qe(ze).clear,
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
    const r = /* @__PURE__ */ Ht(null), n = /* @__PURE__ */ Ht(null), i = /* @__PURE__ */ Ht(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (a, s) => (Te(), Le(Ze, null, [
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
      style: Mt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), Le(Ze, null, xt(e.buttons, (o) => (Te(), Le("button", wr({
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
      style: Mt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), Le(Ze, null, xt(e.model.items || [], (n) => (Te(), Le(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), Le("div", Ax, [
          Ne("button", Ix, [
            Ke(Lt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Ne("div", {
            class: ct(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), Le(Ze, null, xt(n.choices || [], (i) => (Te(), Le("button", {
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
          Ke(Lt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, Ox))
      ], 64))), 128))
    ], 4));
  }
}, Tx = {
  key: 0,
  class: "pano-easing"
}, Dx = { class: "pano-section-title" }, Lx = { class: "pano-easing-range" }, Vx = { class: "pano-easing-modes" }, Rx = ["aria-pressed", "onClick"], $x = ["viewBox"], zx = ["x", "y"], jx = ["x1", "y1", "x2", "y2"], Hx = ["d"], Gx = ["x1", "y1", "x2", "y2"], Wx = ["x1", "y1", "x2", "y2"], Kx = ["cx", "cy"], Bx = ["cx", "cy"], Ux = { class: "pano-easing-note" }, vr = 132, Qr = 14, Yx = {
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
    ], o = /* @__PURE__ */ Ht(null), a = st(() => {
      var m;
      return Array.isArray((m = r.model) == null ? void 0 : m.easing) ? r.model.easing : null;
    }), s = (m) => Qr + m * vr, l = (m) => Qr + (1 - m) * vr, d = st(() => {
      var U;
      if (((U = r.model) == null ? void 0 : U.easing) === "hold") return `M${s(0)} ${l(0)} H${s(1)} V${l(1)}`;
      const [m, b, v, F] = a.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${s(0)} ${l(0)} C${s(m)} ${l(b)} ${s(v)} ${l(F)} ${s(1)} ${l(1)}`;
    }), u = st(() => a.value ? a.value.map((m) => m.toFixed(2)).join(", ") : "");
    function c(m) {
      var b;
      return JSON.stringify(m.easing) === JSON.stringify((b = r.model) == null ? void 0 : b.easing);
    }
    function f(m, b) {
      n("timeline", { type: "easing", easing: m, commit: b });
    }
    function p(m, b) {
      var D;
      if (m.button !== 0 || !a.value) return;
      const v = m.currentTarget;
      (D = v.setPointerCapture) == null || D.call(v, m.pointerId);
      let F = null;
      const U = (P) => {
        const W = o.value.getBoundingClientRect(), R = W.width / (vr + Qr * 2), ee = ((P.clientX - W.left) / R - Qr) / vr, ne = 1 - ((P.clientY - W.top) / R - Qr) / vr;
        F = [...F || a.value], F[b] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, F[b + 1] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, f(F, !1);
      }, H = () => {
        v.removeEventListener("pointermove", U), v.removeEventListener("pointerup", H), v.removeEventListener("pointercancel", H), F && f(F, !0);
      };
      v.addEventListener("pointermove", U), v.addEventListener("pointerup", H), v.addEventListener("pointercancel", H);
    }
    return (m, b) => e.model ? (Te(), Le("div", Tx, [
      Ne("div", Dx, [
        b[2] || (b[2] = Ne("span", null, "Easing", -1)),
        Ne("span", Lx, rt(e.model.label), 1)
      ]),
      Ne("div", Vx, [
        (Te(), Le(Ze, null, xt(i, (v) => Ne("button", {
          key: v.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": c(v) ? "true" : "false",
          onClick: (F) => f(v.easing, !0)
        }, rt(v.label), 9, Rx)), 64))
      ]),
      a.value || e.model.easing === "hold" ? (Te(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${vr + Qr * 2} ${vr + Qr * 2}`,
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
        a.value ? (Te(), Le(Ze, { key: 0 }, [
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
            onPointerdown: b[0] || (b[0] = (v) => p(v, 0))
          }, null, 40, Kx),
          Ne("circle", {
            class: "pano-easing-handle",
            cx: s(a.value[2]),
            cy: l(a.value[3]),
            r: "6",
            onPointerdown: b[1] || (b[1] = (v) => p(v, 2))
          }, null, 40, Bx)
        ], 64)) : ut("", !0)
      ], 8, $x)) : ut("", !0),
      Ne("div", Ux, [
        e.model.mixed ? (Te(), Le(Ze, { key: 0 }, [
          Co("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), Le(Ze, { key: 1 }, [
          Co("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), Le(Ze, { key: 2 }, [
          Co("Holds the value, then jumps to the next keyframe.")
        ], 64)) : a.value ? (Te(), Le(Ze, { key: 3 }, [
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
      let b = !1;
      f.setPointerCapture(d.pointerId);
      const v = (U) => {
        if (!b && Math.abs(U.clientX - p) < 3) return;
        b = !0;
        const H = m + (U.clientX - p) * u.drag * (U.shiftKey ? 0.1 : 1);
        c.value = String(Number(H.toFixed(3))), c.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, F = () => {
        f.removeEventListener("pointermove", v), f.removeEventListener("pointerup", F), f.removeEventListener("pointercancel", F), f.removeEventListener("lostpointercapture", F), b ? c.dispatchEvent(new Event("change", { bubbles: !0 })) : c.focus();
      };
      f.addEventListener("pointermove", v), f.addEventListener("pointerup", F), f.addEventListener("pointercancel", F), f.addEventListener("lostpointercapture", F);
    }
    return (d, u) => {
      var c, f, p, m, b;
      return Te(), Le("div", qx, [
        Ne("div", Xx, [
          Ne("div", Jx, [
            Ne("span", Zx, [
              Ke(Lt, {
                icon: Qe(ze).globe
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
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
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
                      Ke(Lt, {
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
                  (Te(!0), Le(Ze, null, xt(e.model.selectionPicker.items || [], (v) => (Te(), Le("button", {
                    key: v.id,
                    type: "button",
                    class: ct(["pano-picker-item", { active: v.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": v.id
                  }, [
                    v.icon ? (Te(), Le("span", pk, [
                      Ke(Lt, {
                        icon: v.icon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    Ne("span", null, rt(v.label), 1)
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
                Ke(Lt, {
                  icon: Qe(ze).copy
                }, null, 8, ["icon"]),
                Ne("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, mk)
            ])) : ut("", !0),
            Ne("div", {
              class: ct(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), Le(Ze, { key: 0 }, xt(e.model.notes, (v) => (Te(), Le("div", {
                key: v,
                class: "pano-param-note"
              }, rt(v), 1))), 128)) : (Te(!0), Le(Ze, { key: 1 }, xt(e.model.rows || [], (v) => (Te(), Le(Ze, {
                key: v.key
              }, [
                v.grouped ? (Te(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": v.key
                }, [
                  Ne("label", null, rt(v.label), 1),
                  Ne("div", yk, [
                    (Te(!0), Le(Ze, null, xt(v.fields, (F) => (Te(), Le("div", {
                      key: F.key,
                      class: "pano-axis-field"
                    }, [
                      Ne("span", {
                        class: ct(["pano-axis", { disabled: a(F, e.model) }]),
                        title: F.label,
                        onPointerdown: (U) => l(U, F)
                      }, rt(F.short), 43, bk),
                      Ne("input", {
                        ref_for: !0,
                        ref: (U) => {
                          s[F.key] = U;
                        },
                        type: "number",
                        min: F.min,
                        max: F.max,
                        step: F.step,
                        value: F.displayValue,
                        disabled: a(F, e.model),
                        "aria-label": `${v.label} ${F.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": F.key
                      }, null, 8, vk)
                    ]))), 128))
                  ])
                ], 8, gk)) : (Te(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": v.key
                }, [
                  Ne("label", null, rt(v.label), 1),
                  Ne("input", {
                    type: "range",
                    min: v.fields[0].min,
                    max: v.fields[0].max,
                    step: v.fields[0].step,
                    value: v.fields[0].value,
                    disabled: a(v.fields[0], e.model),
                    style: Mt(o(v.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": v.fields[0].key
                  }, null, 12, Sk),
                  Ne("input", {
                    type: "number",
                    min: v.fields[0].min,
                    max: v.fields[0].max,
                    step: v.fields[0].step,
                    value: v.fields[0].displayValue,
                    disabled: a(v.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": v.fields[0].key
                  }, null, 8, wk)
                ], 8, _k))
              ], 64))), 128))
            ], 2),
            Ke(Yx, {
              model: e.easing,
              onTimeline: u[0] || (u[0] = (v) => n("timeline", v))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Ne("summary", null, [
                u[5] || (u[5] = Ne("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Ne("span", kk, [
                  Ke(Lt, {
                    icon: Qe(ze).chevron
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
          (Te(!0), Le(Ze, null, xt(e.model.footerButtons, (v) => (Te(), Le("button", {
            key: v.action,
            class: ct(["pano-btn", { "pano-btn-primary": v.primary === !0 }]),
            type: "button",
            "data-action": v.action
          }, rt(v.label), 11, Dk))), 128))
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
    const r = e, n = t, i = /* @__PURE__ */ Ht(null), o = /* @__PURE__ */ Ht(null), a = /* @__PURE__ */ Ht(1), s = /* @__PURE__ */ Ht(0), l = /* @__PURE__ */ Ht(!1);
    let d = null, u = null, c = null;
    tl(() => {
      d = new ResizeObserver(([me]) => {
        a.value = Math.max(1, me.contentRect.width);
      }), i.value && d.observe(i.value), u = new ResizeObserver(([me]) => {
        s.value = me.contentRect.height;
      }), o.value && u.observe(o.value);
    }), da(() => {
      d == null || d.disconnect(), u == null || u.disconnect(), c == null || c();
    });
    const f = st(() => Math.max(1, Number(r.model.span || 1))), p = st(() => r.playhead.frame.value), m = st(() => r.playhead.playing.value), b = st(() => g1(p.value, Number(r.model.fps || 1))), v = st(() => a.value / f.value), F = (me) => `${me / f.value * 100}%`, U = st(() => I1(f.value, v.value));
    function H(me) {
      const Z = i.value.getBoundingClientRect(), w = Math.floor((me - Z.left) / Math.max(1, Z.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, w));
    }
    function D(me, Z, w) {
      const K = Math.ceil(uM / Math.max(1e-6, v.value)), de = new Map(Z.map((q) => [q.frame, q.full]));
      return E1(Z.map((q) => q.frame), K).map((q, ue) => ({
        ...q,
        key: `${me}:${ue}`,
        partial: q.frames.some((Pe) => !de.get(Pe)),
        selected: q.frames.some((Pe) => w.includes(Pe))
      }));
    }
    const P = st(() => {
      const me = /* @__PURE__ */ new Map();
      for (const Z of r.model.rows || []) {
        me.set(Z.id, D(Z.id, Z.keys, Z.selectedFrames));
        for (const w of Z.lanes) me.set(w.key, D(w.key, w.frames.map((K) => ({ frame: K, full: !0 })), w.selectedFrames));
      }
      return me;
    });
    function W(me) {
      const Z = me.end === null ? f.value : me.end;
      return { left: F(me.start), width: F(Math.max(0, Z - me.start)) };
    }
    function R(me, Z) {
      const w = me.clientX, K = Math.max(1e-6, v.value);
      let de = 0;
      Z("start", 0, me);
      const q = (Pe) => {
        if (Pe.pointerId !== me.pointerId) return;
        const te = Math.round((Pe.clientX - w) / K);
        te !== de && (de = te, Z("move", de, Pe));
      }, ue = (Pe) => {
        Pe.pointerId === me.pointerId && (c(), Z("end", de, Pe));
      };
      c == null || c(), c = () => {
        window.removeEventListener("pointermove", q), window.removeEventListener("pointerup", ue), window.removeEventListener("pointercancel", ue), c = null;
      }, window.addEventListener("pointermove", q), window.addEventListener("pointerup", ue), window.addEventListener("pointercancel", ue);
    }
    function ee(me) {
      me.button === 0 && R(me, (Z, w, K) => n("action", { type: "seek", frame: H(K.clientX), phase: Z }));
    }
    function ne(me, Z, w) {
      me.button === 0 && (n("action", { type: "select-row", id: Z.id }), R(me, (K, de) => n("action", { type: "clip", id: Z.id, mode: w, delta: de, phase: K })));
    }
    function le(me, Z, w, K, de) {
      if (me.button === 0) {
        if (me.shiftKey) {
          n("action", { type: "select-keys", owner: Z.id, lane: w, frames: K.frames, additive: !0 });
          return;
        }
        K.frames.every((q) => de.includes(q)) || n("action", { type: "select-keys", owner: Z.id, lane: w, frames: K.frames, additive: !1 }), R(me, (q, ue) => n("action", { type: "move-keys", delta: ue, phase: q }));
      }
    }
    const E = st(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function G(me, Z, w) {
      n("action", Z), await Qs(), me.target.value = w();
    }
    function re(me) {
      G(me, { type: "fps", fps: Number(me.target.value) }, () => E.value);
    }
    function pe(me) {
      const Z = me.target.value.trim();
      G(me, { type: "length", length: Z ? Number(Z) : null }, () => r.model.length ?? "");
    }
    function he(me, Z, w) {
      me.button !== 0 || me.target !== me.currentTarget || n("action", { type: "select-keys", owner: Z.id, lane: w, frames: [], additive: !1 });
    }
    return (me, Z) => Cr((Te(), Le("section", {
      class: ct(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Ne("div", Vk, [
        Ne("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": m.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": m.value ? "Pause (Space)" : "Play (Space)",
          onClick: Z[0] || (Z[0] = (w) => n("action", { type: "play" }))
        }, [
          Ke(Lt, {
            icon: m.value ? Qe(ze).pause : Qe(ze).play
          }, null, 8, ["icon"])
        ], 8, Rk),
        e.model.hasAudio ? (Te(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: Z[1] || (Z[1] = (w) => n("action", { type: "mute" }))
        }, [
          Ke(Lt, {
            icon: e.model.muted ? Qe(ze).volume_muted : Qe(ze).volume2
          }, null, 8, ["icon"])
        ], 8, $k)) : ut("", !0),
        Ne("span", zk, rt(b.value), 1),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), Le("span", Hk, rt(E.value), 1)) : (Te(), Le("input", {
            key: 1,
            type: "number",
            min: Qe(xh),
            max: Qe(Au),
            step: "any",
            value: E.value,
            "aria-label": "Timeline fps",
            onChange: re
          }, null, 40, Gk)),
          Z[6] || (Z[6] = Ne("span", null, "fps", -1))
        ], 8, jk),
        Ne("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          Z[7] || (Z[7] = Ne("span", null, "Length", -1)),
          e.model.lengthLocked ? (Te(), Le("span", Kk, rt(e.model.length), 1)) : (Te(), Le("input", {
            key: 1,
            type: "number",
            min: "1",
            max: Qe(Iu),
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
          onClick: Z[2] || (Z[2] = (w) => n("action", { type: "toggle-expanded" }))
        }, [
          Z[8] || (Z[8] = Ne("span", null, "Timeline", -1)),
          Ke(Lt, {
            icon: Qe(ze).chevron
          }, null, 8, ["icon"])
        ], 8, Uk)
      ]),
      Ne("div", {
        class: ct(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Mt({ "--pano-timeline-rows": `${s.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: Z[3] || (Z[3] = Ot((w) => l.value = !0, ["self"])),
        onTransitionend: Z[4] || (Z[4] = Ot((w) => l.value = !1, ["self"])),
        onTransitioncancel: Z[5] || (Z[5] = Ot((w) => l.value = !1, ["self"]))
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
            (Te(!0), Le(Ze, null, xt(U.value, (w) => (Te(), Le("span", {
              key: w,
              class: "pano-timeline-tick",
              style: Mt({ left: F(w) })
            }, rt(w), 5))), 128)),
            Ne("span", {
              class: "pano-timeline-playhead",
              style: Mt({ left: F(p.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), Le(Ze, null, xt(e.model.rows || [], (w) => (Te(), Le(Ze, {
            key: w.id
          }, [
            Ne("div", {
              class: ct(["pano-timeline-head", { selected: w.selected, "is-hidden": !w.visible }])
            }, [
              Ne("div", qk, [
                w.hideable ? (Te(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": w.visible ? "true" : "false",
                  "aria-label": `${w.label} visible`,
                  "data-tip": w.visible ? "Hide" : "Show",
                  onClick: Ot((K) => n("action", { type: "toggle-visible", id: w.id }), ["stop"])
                }, [
                  Ke(Lt, {
                    icon: w.visible ? Qe(ze).eye : Qe(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, Xk)) : (Te(), Le("span", Jk)),
                Ne("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !w.keyable,
                  "aria-expanded": w.open ? "true" : "false",
                  "aria-label": w.open ? `Hide ${w.label} parameters` : `Show ${w.label} parameters`,
                  onClick: Ot((K) => n("action", { type: "toggle-row", id: w.id }), ["stop"])
                }, [
                  Ke(Lt, {
                    icon: Qe(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, Zk),
                Ne("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: w.label,
                  "aria-current": w.selected ? "true" : void 0,
                  onClick: (K) => n("action", { type: "select-row", id: w.id })
                }, [
                  Ke(Lt, {
                    icon: w.icon
                  }, null, 8, ["icon"]),
                  Ne("span", null, rt(w.label), 1)
                ], 8, Qk),
                w.keyable ? (Te(), Le("button", {
                  key: 2,
                  class: ct(["pano-timeline-key", { keyed: Qe(Gl)(w.keys, p.value) }]),
                  type: "button",
                  "data-keyed": Qe(Gl)(w.keys, p.value) ? "true" : "false",
                  "aria-label": Qe(Gl)(w.keys, p.value) ? `Every ${w.label} parameter has a keyframe here; update them` : `Add keyframes for every ${w.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ot((K) => n("action", { type: "key-row", owner: w.id }), ["stop"])
                }, [
                  Ke(Lt, {
                    icon: Qe(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, eM)) : ut("", !0)
              ]),
              w.open ? (Te(!0), Le(Ze, { key: 0 }, xt(w.lanes, (K) => (Te(), Le("div", {
                key: K.key,
                class: "pano-timeline-lane-head"
              }, rt(K.label), 1))), 128)) : ut("", !0)
            ], 2),
            Ne("div", {
              class: ct(["pano-timeline-track", { selected: w.selected }])
            }, [
              Ne("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (K) => he(K, w, null)
              }, [
                w.clip ? (Te(), Le("div", {
                  key: 0,
                  class: ct(["pano-timeline-clip", { open: w.clip.end === null }]),
                  style: Mt(W(w.clip)),
                  onPointerdown: Ot((K) => ne(K, w, "move"), ["stop"])
                }, [
                  Ne("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ot((K) => ne(K, w, "start"), ["stop"])
                  }, null, 40, rM),
                  Ne("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ot((K) => ne(K, w, "end"), ["stop"])
                  }, null, 40, iM)
                ], 46, nM)) : ut("", !0),
                (Te(!0), Le(Ze, null, xt(P.value.get(w.id), (K) => (Te(), Le("button", {
                  key: K.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: K.selected, cluster: K.frames.length > 1, partial: K.partial }]),
                  style: Mt({ left: F(K.frame + 0.5) }),
                  "aria-label": `${w.label}: ${K.frames.length > 1 ? `${K.frames.length} keyframes` : `keyframe at frame ${K.frames[0]}`}`,
                  "data-tip": K.frames.length > 1 ? `${K.frames.length} keyframes` : `Frame ${K.frames[0]}`,
                  onPointerdown: Ot((de) => le(de, w, null, K, w.selectedFrames), ["stop"])
                }, [
                  K.frames.length > 1 ? (Te(), Le("span", aM, rt(K.frames.length), 1)) : ut("", !0)
                ], 46, oM))), 128))
              ], 40, tM),
              w.open ? (Te(!0), Le(Ze, { key: 0 }, xt(w.lanes, (K) => (Te(), Le("div", {
                key: K.key,
                class: "pano-timeline-lane",
                onPointerdown: (de) => he(de, w, K.lane)
              }, [
                (Te(!0), Le(Ze, null, xt(P.value.get(K.key), (de) => (Te(), Le("button", {
                  key: de.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: de.selected, cluster: de.frames.length > 1 }]),
                  style: Mt({ left: F(de.frame + 0.5) }),
                  "aria-label": `${K.label}: ${de.frames.length > 1 ? `${de.frames.length} keyframes` : `keyframe at frame ${de.frames[0]}`}`,
                  "data-tip": de.frames.length > 1 ? `${de.frames.length} keyframes` : `Frame ${de.frames[0]}`,
                  onPointerdown: Ot((q) => le(q, w, K.lane, de, K.selectedFrames), ["stop"])
                }, [
                  de.frames.length > 1 ? (Te(), Le("span", cM, rt(de.frames.length), 1)) : ut("", !0)
                ], 46, lM))), 128))
              ], 40, sM))), 128)) : ut("", !0),
              Ne("span", {
                class: "pano-timeline-playhead",
                style: Mt({ left: F(p.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, Yk)
    ], 2)), [
      [di, e.model.visible]
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
      style: Mt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
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
      (Te(!0), Le(Ze, null, xt(e.buttons, (n) => Cr((Te(), Hn(Yt, {
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
        [di, n.visible !== !1]
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
      var P, W, R;
      return ((P = t.state) == null ? void 0 : P.hasAudio) !== !0 ? ze.volume : ((W = t.state) == null ? void 0 : W.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), u = st(() => {
      var P;
      return Math.max(0, Math.min(100, Number(((P = t.state) == null ? void 0 : P.progressPct) || 0)));
    }), c = st(() => ({ left: `${u.value}%` })), f = st(() => {
      var ee, ne;
      const P = (ee = t.state) == null ? void 0 : ee.volumePct, W = Number(((ne = t.state) == null ? void 0 : ne.volume) ?? 1) * 100, R = Number(P ?? W ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, R))}%`
      };
    }), p = st(() => {
      var R, ee;
      const W = [
        String(((R = t.state) == null ? void 0 : R.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((ne, le) => Math.max(ne, le.length), 4);
      return `${Math.max(4, W)}ch`;
    }), m = st(() => ({ "--pano-video-time-ch": p.value })), b = st(() => {
      var R, ee;
      const P = Array.isArray((R = t.state) == null ? void 0 : R.thumbnails) ? t.state.thumbnails : [];
      if (P.length) return P;
      const W = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: W }, (ne, le) => ({
        id: `placeholder-${le}`,
        src: "",
        label: ""
      }));
    }), v = /* @__PURE__ */ Ht(/* @__PURE__ */ new Set()), F = (P) => String((P == null ? void 0 : P.id) || (P == null ? void 0 : P.src) || (P == null ? void 0 : P.label) || ""), U = (P) => v.value.has(F(P)), H = (P) => {
      const W = new Set(v.value);
      W.add(F(P)), v.value = W;
    };
    si(b, (P) => {
      const W = new Set(P.map(F)), R = /* @__PURE__ */ new Set();
      for (const ee of v.value)
        W.has(ee) && R.add(ee);
      v.value = R;
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
      style: Mt(D.value)
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
            style: Mt(m.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Ne("div", bM, [
          Ne("div", vM, [
            (Te(!0), Le(Ze, null, xt(b.value, (R) => (Te(), Le("div", {
              key: F(R),
              class: ct(["pano-video-thumb", {
                "is-placeholder": !R.src,
                "is-loaded": R.src && U(R)
              }])
            }, [
              R.src ? (Te(), Le("img", {
                key: 0,
                src: R.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => H(R)
              }, null, 40, _M)) : (Te(), Le("span", SM))
            ], 2))), 128))
          ]),
          Ne("div", {
            class: "pano-video-playhead",
            style: Mt(c.value),
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
            style: Mt(m.value)
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
                style: Mt(f.value),
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
          (Te(!0), Le(Ze, null, xt(e.buttons, (i) => Cr((Te(), Le("button", {
            key: i.key,
            class: ct(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ke(Lt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Ne("span", EM, rt(i.label), 1)
          ], 10, IM)), [
            [di, i.visible !== !1]
          ])), 128))
        ], 8, AM)
      ]);
    };
  }
};
function cg(e = "stickers") {
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
    const l = /* @__PURE__ */ Ht(null), d = /* @__PURE__ */ Ht(null), u = /* @__PURE__ */ Ht(null);
    function c() {
      var le, E;
      return ((E = (le = u.value) == null ? void 0 : le.getRefs) == null ? void 0 : E.call(le)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(le) {
      var E, G;
      return ((G = (E = d.value) == null ? void 0 : E.open) == null ? void 0 : G.call(E, le)) === !0;
    }
    function p(le) {
      i("image-file-selected", le);
    }
    function m(le) {
      i("image-file-cancelled", le);
    }
    t({ getPaintOverlayRefs: c, openImagePicker: f });
    const b = st(() => n.readOnly === !0), v = st(() => n.shellPreset || cg(n.type)), F = st(() => {
      var E, G, re;
      const le = String((((E = n.uiState) == null ? void 0 : E.stageStatus) === "failed" ? (G = n.uiState) == null ? void 0 : G.stageStatusDetail : (re = n.uiState) == null ? void 0 : re.stageWarningDetail) ?? "");
      return le === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : le === "stickers" ? "One or more sticker previews are unavailable." : le === "frame" ? "The editor hit a rendering error. Check the browser console for details." : le === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : le.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), U = st(() => {
      var E;
      const le = Array.isArray((E = v.value) == null ? void 0 : E.floatingButtons) ? v.value.floatingButtons.slice() : [];
      return b.value && le.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), le;
    });
    function H() {
      const le = l.value;
      return le ? Array.from(le.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function D() {
      var G;
      const E = H()[0] || l.value;
      (G = E == null ? void 0 : E.focus) == null || G.call(E);
    }
    function P() {
      var le;
      s != null && s.isConnected && ((le = s.focus) == null || le.call(s)), s = null;
    }
    function W(le) {
      var E, G, re, pe;
      if (!le.defaultPrevented) {
        if (le.key === "Tab") {
          const he = H();
          if (!he.length) {
            le.preventDefault(), (G = (E = l.value) == null ? void 0 : E.focus) == null || G.call(E);
            return;
          }
          const me = he[0], Z = he[he.length - 1], w = document.activeElement;
          if (le.shiftKey) {
            (w === me || w === l.value || !((re = l.value) != null && re.contains(w))) && (le.preventDefault(), Z.focus());
            return;
          }
          (w === Z || !((pe = l.value) != null && pe.contains(w))) && (le.preventDefault(), me.focus());
          return;
        }
        le.key === "Escape" && i("close");
      }
    }
    function R() {
      a || (o = document.body.style.overflow, document.body.style.overflow = "hidden", a = !0);
    }
    function ee() {
      a && (document.body.style.overflow = o, a = !1);
    }
    function ne(le) {
      document.removeEventListener("keydown", W), le ? (s || (s = document.activeElement), R(), document.addEventListener("keydown", W), Qs(() => {
        D();
      })) : (ee(), P());
    }
    return tl(() => {
      ne(n.open);
    }), da(() => {
      ee(), document.removeEventListener("keydown", W), P();
    }), si(() => n.open, (le) => {
      ne(le);
    }), (le, E) => e.open ? (Te(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[2] || (E[2] = Ot((G) => i("close"), ["self"]))
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
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Te(), Le("div", LM, rt(F.value), 1)) : ut("", !0),
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
            Ke(Bm, {
              ref_key: "imageFilePickerRef",
              ref: d,
              onFileSelected: p,
              onFileCancelled: m
            }, null, 512),
            b.value ? ut("", !0) : (Te(), Le(Ze, { key: 1 }, [
              Ke(hM, {
                buttons: e.uiState.toolButtons || v.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ke(qw, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ke(kx, {
                "paint-swatches": e.paintSwatches,
                panes: v.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ke(NM, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ke(OM, {
              buttons: e.uiState.viewButtons || v.value.viewButtons || []
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
function ug(e, t = "") {
  return e && (e.__panoLoadState = Un, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function dg(e, t = "") {
  return e && (e.__panoLoadState = la, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function fg(e, t = "") {
  return e && (e.__panoLoadState = $n, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Yc(e, t) {
  return e ? e.__panoLoadState === $n ? $n : typeof t == "function" && t(e) ? la : Un : la;
}
function qc(e) {
  return Yc(e) === $n;
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
const $M = "state_json", zM = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), sd = "sticker_image_1", jM = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), pg = 0.01, HM = "external_image", Hs = "pano_sticker_input_images", GM = "pano_sticker_input_videos", WM = "pano_sticker_input_frames", KM = "pano_sticker_input_video_meta", BM = !0, pl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], pr = Math.PI / 180, hi = 180 / Math.PI, Xc = 1, hg = "rgb(255, 221, 87)", UM = "rgb(228, 228, 231)", YM = "rgb(180, 150, 60)", qM = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, XM = 64, Gf = 40, Ql = 16, JM = 0.45, Wf = 180, ZM = 160, Gs = 24, QM = 4, eP = 4, tP = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
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
function Kf(e, t) {
  return hl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Bf(e, t) {
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
    yaw: Rt(Math.atan2(e.x, e.z) * hi),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * hi, -90, 90)
  };
}
function Vr(e, t) {
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
function En(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function rn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function lP(e) {
  return pl.some((t) => Ws(e, t.color));
}
function Jc(e, t, r) {
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
function Zc(e) {
  const t = Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), a = i - o;
  let s = 0;
  a > 1e-6 && (i === t ? s = ((r - n) / a + (r < n ? 6 : 0)) / 6 : i === r ? s = ((n - t) / a + 2) / 6 : s = ((t - r) / a + 4) / 6);
  const l = i <= 1e-6 ? 0 : a / i;
  return { h: s, s: l, v: i };
}
function Ki(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function cP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Uf(e) {
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
function Di(e) {
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
function ri(e) {
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
const mg = "pano_suite.ui_settings.v1", gg = "pano_suite.node_grid_visibility.v1";
let Oi = null, rr = null;
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
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(mg)) || "").trim();
    if (!t) return Oi ? ds(Oi) : null;
    const r = JSON.parse(t), n = ds(r);
    return Oi = n, n;
  } catch {
    return Oi ? ds(Oi) : null;
  }
}
function mP(e) {
  var r;
  const t = ds(e);
  Oi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(mg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function yg() {
  var e;
  if (rr && typeof rr == "object")
    return rr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(gg)) || "").trim();
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
  const i = yg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function yP(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = yg();
  n[r] = !!t, rr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(gg, JSON.stringify(n));
  } catch {
  }
}
function bP(e, t) {
  const r = { ...e }, n = t.map((i) => i(e));
  for (const { connect: i, ...o } of n) {
    for (const a of Object.keys(o))
      if (a in r) throw new Error(`Panorama editor: ${a} is provided twice`);
    Object.assign(r, o);
  }
  for (const i of n) i.connect(r);
  return r;
}
const zr = /* @__PURE__ */ new Map(), vP = 12;
function _P(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = zr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (zr.delete(t), zr.set(t, r), r);
}
function SP(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (zr.delete(r), zr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); zr.size > vP; ) {
      const i = zr.keys().next().value;
      if (!i) break;
      zr.delete(i);
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
    runtime: b,
    scheduler: v,
    stageWrap: F,
    state: U,
    stateV2: H,
    stillCanvas: D,
    timelinePlayhead: P,
    type: W,
    uiState: R,
    videoEl: ee
  } = e;
  let ne, le, E, G, re, pe;
  const he = {
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
  }, me = 9, Z = [];
  let w = 0;
  const K = () => {
    var Oe, Re;
    const g = (Oe = F == null ? void 0 : F.getBoundingClientRect) == null ? void 0 : Oe.call(F), j = (Re = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : Re.call(o), ce = Math.max(0, Number((g == null ? void 0 : g.width) || 0)), Q = j ? Math.max(0, Number(j.width || 0)) : 0, T = Q > 0 ? Q + 14 + 12 : 72, ye = Math.max(280, Math.floor(ce - T * 2)), Ce = n.fullscreen ? Math.min(1200, ye) : ye;
    R.videoTransport.shellMaxWidthPx = Ce;
  }, de = () => {
    w || (w = v.requestFrame(() => {
      w = 0, K();
    }));
  }, q = (g) => {
    if (!(g instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(g.audioTracks) && g.audioTracks.length > 0 || g.audioTracks && typeof g.audioTracks.length == "number" && g.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof g.mozHasAudio == "boolean") return g.mozHasAudio;
    } catch {
    }
    try {
      if (Number(g.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!R.videoTransport.hasAudio;
  }, ue = typeof ResizeObserver < "u" ? new ResizeObserver(() => de()) : null;
  ue == null || ue.observe(F), o && (ue == null || ue.observe(o)), Z.push(() => {
    var g;
    w && (v.cancelFrame(w), w = 0), (g = ue == null ? void 0 : ue.disconnect) == null || g.call(ue);
  }), de();
  const Pe = () => {
    he.thumbnailJobId += 1, he.thumbnailSrc = "", R.videoTransport.thumbnails = [], R.videoTransport.thumbnailCount = me;
  }, te = async (g, j, ce) => {
    const Q = String(g || "").trim();
    if (!Q) {
      Pe();
      return;
    }
    const we = _P(Q);
    if (we) {
      he.thumbnailSrc = Q, R.videoTransport.thumbnails = we.thumbnails, R.videoTransport.thumbnailCount = we.thumbnailCount;
      return;
    }
    const xe = ++he.thumbnailJobId;
    he.thumbnailSrc = Q, R.videoTransport.thumbnails = [], R.videoTransport.thumbnailCount = me;
    const T = ol(document, "editor.thumbnails");
    T.preload = "auto", T.muted = !0, T.playsInline = !0, T.crossOrigin = "anonymous";
    const ye = un({ label: "editor.thumbnail" });
    try {
      const Ce = await new Promise((_t) => {
        let Nt = !1;
        const ht = (St) => {
          Nt || (Nt = !0, _t(St));
        };
        T.addEventListener("loadedmetadata", () => ht(!0), { once: !0 }), T.addEventListener("canplay", () => ht(!0), { once: !0 }), T.addEventListener("error", () => ht(!1), { once: !0 }), T.src = Q, T.load();
      });
      if (he.thumbnailJobId !== xe) return;
      const Oe = Number(T.videoWidth || 0), Re = Number(T.videoHeight || 0);
      if (!Ce || Oe < 1 || Re < 1) {
        he.thumbnailFailedSrcs.add(Q);
        return;
      }
      const Ae = Math.max(0, Number(T.duration || j || 0)), Ve = 46, je = Math.max(72, Math.round(Oe / Re * Ve));
      ye.width = je, ye.height = Ve;
      const Ye = ye.getContext("2d");
      if (!Ye) return;
      const $e = [], He = (_t) => new Promise((Nt) => {
        let ht = !1;
        const St = () => {
          ht || (ht = !0, Nt());
        };
        T.addEventListener("seeked", St, { once: !0 }), T.addEventListener("error", St, { once: !0 });
        try {
          T.currentTime = _t;
        } catch {
          St();
        }
      });
      for (let _t = 0; _t < me; _t += 1) {
        if (he.thumbnailJobId !== xe) return;
        const Nt = me <= 1 ? 0 : _t / (me - 1), ht = Ae > 0 ? Math.max(0, Math.min(Ae - Math.max(1e-3, 0.5 / Math.max(1, Number(ce || 24))), Ae * Nt)) : 0;
        if (await He(ht), he.thumbnailJobId !== xe) return;
        Ye.clearRect(0, 0, je, Ve), Ye.drawImage(T, 0, 0, je, Ve), $e.push({
          id: `thumb-${_t}`,
          src: ye.toDataURL("image/jpeg", 0.72),
          time: ht,
          label: S(ht)
        });
      }
      if (he.thumbnailJobId !== xe) return;
      R.videoTransport.thumbnails = $e, R.videoTransport.thumbnailCount = $e.length || me, SP(Q, {
        thumbnails: $e,
        thumbnailCount: $e.length || me,
        duration: Ae,
        fps: ce
      });
    } finally {
      T.removeAttribute("src"), T.load(), mc(ye);
    }
  };
  Z.push(() => {
    Pe();
  });
  const O = Dm({
    video: ee instanceof HTMLVideoElement ? ee : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (g) => v.requestFrame(g),
      cancelFrame: (g) => v.cancelFrame(g)
    },
    fps: V,
    span: () => {
      if (H) return pe();
      const g = Math.round(Number(R.videoTransport.duration || 0) * V());
      return ee.loop || !(g > 0) ? 1 / 0 : g;
    },
    loop: () => H,
    onFrame: (g) => {
      H ? E(g) : Y(), le({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      k() && (b.backgroundDirty = !0);
    },
    onChange: () => {
      Y(), P.playing.value = O.playing, re(), le({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  Z.push(() => O.dispose());
  const J = H && p instanceof HTMLVideoElement ? Lm({
    video: p,
    onCapture: () => {
      var ce;
      const g = Number(p.videoWidth || 0), j = Number(p.videoHeight || 0);
      g < 1 || j < 1 || (f.width = g, f.height = j, (ce = f.getContext("2d")) == null || ce.drawImage(p, 0, 0), f.__panoFrameIdx += 1, le({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => le({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  J && Z.push(() => J.dispose());
  const oe = H ? km({
    createImage: (g, j) => {
      const ce = new Image();
      return ce.onload = j, ce.onerror = j, ce.src = g, ce;
    },
    onLoad: () => le({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (ee instanceof HTMLVideoElement) {
    const g = () => {
      B(), le({ cause: "frame_view", localOnly: !0 });
    }, j = () => {
      Y({
        hasAudio: R.videoTransport.hasAudio,
        muted: ee.muted,
        volume: Number(ee.volume ?? R.videoTransport.volume ?? 1)
      });
    }, ce = () => {
      const Q = ee.dataset.panoSrc;
      Q && (he.failedSrcs.add(Q), B(), le());
    };
    for (const [Q, we] of [
      ["loadedmetadata", g],
      ["loadeddata", g],
      ["canplay", g],
      ["volumechange", j],
      ["error", ce]
    ])
      ee.addEventListener(Q, we), Z.push(() => ee.removeEventListener(Q, we));
  }
  function ge(g) {
    return t.uiList(c, g);
  }
  function ve(g) {
    return t.uiValue(c, g);
  }
  function I() {
    const g = String((c == null ? void 0 : c.comfyClass) || (c == null ? void 0 : c.type) || (c == null ? void 0 : c.title) || "");
    return ks(g) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : W === "stickers" || W === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ae() {
    const { metaKey: g } = I(), j = ve(g);
    return Array.isArray(j) && j.length > 0 && j[0] && typeof j[0] == "object" ? j[0] : j && typeof j == "object" ? j : null;
  }
  function y(g) {
    return g ? g instanceof HTMLVideoElement ? [
      String(g.currentSrc || g.src || ""),
      Number(g.videoWidth || 0),
      Number(g.videoHeight || 0)
    ].join("|") : g instanceof HTMLCanvasElement ? [
      "canvas",
      Number(g.width || 0),
      Number(g.height || 0),
      String(g.__panoFrameIdx || 0)
    ].join("|") : [
      String(g.currentSrc || g.src || ""),
      Number(g.naturalWidth || g.width || 0),
      Number(g.naturalHeight || g.height || 0)
    ].join("|") : "none";
  }
  function S(g) {
    const j = Math.max(0, Math.floor(Number(g || 0))), ce = Math.floor(j / 60), Q = j % 60;
    return `${ce}:${String(Q).padStart(2, "0")}`;
  }
  function V() {
    return H ? U.timeline.fps : he.metaFps || 1e3;
  }
  function Y(g = {}) {
    const j = Number(g.duration ?? R.videoTransport.duration ?? 0), ce = Math.max(1, Number(g.fps ?? R.videoTransport.fps ?? 24)), Q = O.frame / V(), we = Object.prototype.hasOwnProperty.call(g, "ready") ? !!g.ready : !!R.videoTransport.ready, xe = O.playing, T = Object.prototype.hasOwnProperty.call(g, "visible") ? !!g.visible : !!R.videoTransport.visible, ye = Object.prototype.hasOwnProperty.call(g, "muted") ? !!g.muted : !!(ee instanceof HTMLVideoElement ? ee.muted : R.videoTransport.muted), Ce = Number(
      Object.prototype.hasOwnProperty.call(g, "volume") ? g.volume : ee instanceof HTMLVideoElement ? ee.volume : R.videoTransport.volume
    ), Oe = Object.prototype.hasOwnProperty.call(g, "hasAudio") ? !!g.hasAudio : q(ee), Re = Object.prototype.hasOwnProperty.call(g, "loop") ? !!g.loop : !!R.videoTransport.loop;
    Object.assign(R.videoTransport, {
      ready: we,
      playing: xe,
      visible: T,
      loop: Re,
      currentTime: Number.isFinite(Q) ? Q : 0,
      duration: Number.isFinite(j) ? j : 0,
      progressPct: j > 1e-6 ? Math.max(0, Math.min(100, Q / j * 100)) : 0,
      currentTimeLabel: S(Q),
      durationLabel: S(j),
      frameCount: Math.max(0, Number(g.frameCount ?? R.videoTransport.frameCount ?? 0)),
      fps: ce,
      hasAudio: Oe,
      muted: ye,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ce) ? Ce : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ce) ? Ce : 1)) * 100),
      thumbnails: Array.isArray(g.thumbnails) ? g.thumbnails : R.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(g.thumbnailCount ?? R.videoTransport.thumbnailCount ?? me))
    });
  }
  function x() {
    return !!(ee instanceof HTMLVideoElement && !H && ee.getAttribute("src") && n.primaryTool !== "paint" && n.primaryTool !== "mask");
  }
  function M() {
    if (!(ee instanceof HTMLVideoElement) || !R.videoTransport.hasAudio) return;
    const g = !ee.muted;
    ee.muted = g, !g && Number(ee.volume || 0) <= 0 && (ee.volume = Math.max(0.01, Number(R.videoTransport.volume || 1))), Y({
      hasAudio: R.videoTransport.hasAudio,
      muted: ee.muted,
      volume: Number(ee.volume ?? R.videoTransport.volume ?? 1)
    });
  }
  function L() {
    Y({
      visible: x()
    });
  }
  function k() {
    if (!(ee instanceof HTMLVideoElement) || Number(ee.videoWidth || 0) < 1 || Number(ee.videoHeight || 0) < 1) return !1;
    const g = Number(ee.videoWidth || 0), j = Number(ee.videoHeight || 0);
    (D.width !== g || D.height !== j) && (D.width = g, D.height = j);
    const ce = D.getContext("2d");
    return ce ? (ce.clearRect(0, 0, g, j), ce.drawImage(ee, 0, 0, g, j), D.__panoFrameIdx = Number(D.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !O.showsVideo && Number(D.width || 0) > 0 && Number(D.height || 0) > 0 && Number(D.__panoFrameIdx || 0) > 0 ? D : ee instanceof HTMLVideoElement && Number(ee.videoWidth || 0) > 0 && Number(ee.videoHeight || 0) > 0 && Number(ee.readyState || 0) >= 2 ? ee : null;
  }
  function C() {
    D.__panoFrameIdx = 0, b.backgroundDirty = !0;
  }
  function B() {
    if (!(ee instanceof HTMLVideoElement)) return null;
    const { videoKey: g } = I(), j = en(c, "background") && ge(g)[0] || null, ce = d(j), Q = [ce, t.linkedVideoFile(c, z())].filter(Boolean), we = Q.find((Ae) => !he.failedSrcs.has(Ae)) || "";
    he.videoFailed = !we && Q.length > 0;
    const xe = we && we === ce ? ae() : null;
    he.metaFps = Number(xe == null ? void 0 : xe.fps) > 0 ? Number(xe.fps) : 0;
    const T = Math.max(1, Number((xe == null ? void 0 : xe.fps) || (H ? U.timeline.fps : 24))), ye = ee.dataset.panoSrc === we && Number.isFinite(ee.duration) ? ee.duration : 0, Ce = Number((xe == null ? void 0 : xe.duration) || ((xe == null ? void 0 : xe.frames) > 0 ? xe.frames / T : ye)), Oe = Math.max(0, Number((xe == null ? void 0 : xe.frames) || Math.round(Ce * T))), Re = !!(xe != null && xe.has_audio) || q(ee);
    return we && ee.dataset.panoSrc !== we ? (ee.pause(), C(), ee.dataset.panoSrc = we, ee.loop = !H && !!R.videoTransport.loop, ee.muted = !!R.videoTransport.muted, ee.volume = Math.max(0, Math.min(1, Number(R.videoTransport.volume ?? 1))), ee.src = we, ee.load(), O.setSource(!0), H || O.seek(0)) : !we && ee.getAttribute("src") && (ee.pause(), ee.removeAttribute("src"), delete ee.dataset.panoSrc, ee.load(), C(), Pe(), O.setSource(!1)), H || (ee.loop = !!R.videoTransport.loop), we && !H && he.thumbnailSrc !== we && !he.thumbnailFailedSrcs.has(we) && te(we, Ce, T), we || Pe(), Y({
      ready: !!we,
      visible: !!we && x(),
      duration: Ce,
      frameCount: Oe,
      fps: T,
      hasAudio: Re,
      loop: !!ee.loop,
      muted: !!ee.muted,
      volume: Number(ee.volume ?? R.videoTransport.volume ?? 1),
      thumbnailCount: R.videoTransport.thumbnailCount
    }), we || null;
  }
  function X(g, j = null) {
    return u(c, g, a, j || (() => le()));
  }
  function ie(g = null) {
    return en(c, "external-sticker") ? X(Hs, g) : null;
  }
  function $() {
    if (!en(c, "external-sticker")) return null;
    const g = ge(KM)[0];
    if (!g || typeof g != "object") return null;
    const j = ge(WM).map(d).filter(Boolean);
    if (j.length) return { frames: j, meta: g };
    const ce = d(ge(GM)[0] || null);
    return ce ? { src: ce, meta: g } : null;
  }
  function se() {
    const g = U.stickers.find(ne), j = g ? $() : null, ce = j ? Sm(g.clip, n.frame, U.timeline.fps, j.meta) : null;
    J.follow({ src: (j == null ? void 0 : j.src) || "", time: ce, playing: O.advancing, fps: U.timeline.fps });
    const Q = g ? fe(g) : null, we = j != null && j.frames ? oe.picture(j.frames, ce, j.meta, Q) : J.picture(f, Q);
    return we ? { media: we, revision: y(we), source: xm(j, Q) } : null;
  }
  function Se() {
    return !H || !en(c, "scene") ? null : af(ge("pano_scene_files"), ge("pano_scene_meta"), d);
  }
  function Me() {
    return !H || !en(c, "external-sticker") ? null : af(ge("pano_sticker_files"), ge("pano_sticker_meta"), d);
  }
  function fe(g) {
    var T;
    if (g && typeof g == "object" && (ne(g) || g.external === !0))
      return ie(() => {
        Ar(c, "image-loaded");
      });
    const j = H ? be(g) : String(g && typeof g == "object" ? g.asset_id || g.assetId || "" : g || "");
    if (!j) return null;
    const ce = a.get(j);
    if (ce) return ce;
    const Q = H ? Hh(g.source) : (T = U.assets) == null ? void 0 : T[j], we = l(Q);
    if (!we) return null;
    const xe = new Image();
    return ug(xe, we), xe.onload = () => {
      dg(xe, we), le();
    }, xe.onerror = () => {
      fg(xe, we), le();
    }, xe.src = we, a.set(j, xe), xe;
  }
  function be(g) {
    const { source: j } = g;
    return j.filename ? `file:${j.storage}:${j.subfolder}:${j.filename}` : `sticker:${g.id}`;
  }
  function _e() {
    if (W === "cutout" && !r) {
      const we = N();
      if (we) return we;
      const xe = s(
        c,
        ["erp_image", "bg_erp"],
        () => le(),
        "background:cutout:erp_image|bg_erp"
      );
      return xe && !qc(xe) ? xe : u(c, "pano_input_images", a, () => le()) || xe || null;
    }
    const g = N();
    if (g) return g;
    const j = en(c, "background") ? u(c, "pano_input_images", a, () => le()) : null;
    if (j && !qc(j)) return j;
    if (ee instanceof HTMLVideoElement && ee.dataset.panoSrc) return ee;
    const ce = z();
    return s(c, ce, () => le(), `background:${ce.join("|")}`) || j || null;
  }
  function h() {
    var j;
    const g = (Array.isArray(c == null ? void 0 : c.inputs) ? c.inputs : []).findIndex((ce) => (ce == null ? void 0 : ce.name) === "source");
    return g >= 0 && c.graph ? String(((j = c.getInputLink(g)) == null ? void 0 : j.type) || "") : "";
  }
  function z() {
    if (W === "cutout") return r ? h() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const g = Array.isArray(c == null ? void 0 : c.inputs) ? c.inputs.map((Q) => String((Q == null ? void 0 : Q.name) || "")) : [], j = g.includes("erp_image"), ce = g.includes("bg_erp");
    return m && (j || ce) ? j ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : W === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function A(g) {
    return g ? g instanceof HTMLImageElement ? !!g.complete && Number(g.naturalWidth || g.width || 0) > 0 && Number(g.naturalHeight || g.height || 0) > 0 : g instanceof HTMLVideoElement ? Number(g.videoWidth || 0) > 0 && Number(g.videoHeight || 0) > 0 && Number(g.readyState || 0) >= 2 : Number(g.width || g.naturalWidth || 0) > 0 && Number(g.height || g.naturalHeight || 0) > 0 : !1;
  }
  function _() {
    if (i.failed) return { status: $n, detail: "renderer" };
    if (!i.ready) return { status: Un, detail: "boot" };
    const g = _e(), j = he.videoFailed ? $n : Yc(g, A), ce = [];
    for (const Q of G()) {
      if ((Q == null ? void 0 : Q.visible) === !1) continue;
      const we = fe(Q);
      ce.push(Yc(we, A));
    }
    return RM({
      presented: b.hasPresentedFrame,
      background: j,
      stickers: ce
    });
  }
  return {
    connect(g) {
      ({
        isExternalSticker: ne,
        requestDraw: le,
        setTimelineFrame: E,
        skyStickers: G,
        syncTimeline: re,
        timelineSpanFrames: pe
      } = g);
    },
    videoState: he,
    videoCleanupFns: Z,
    queueVideoTransportLayout: de,
    playback: O,
    portVideo: J,
    getNodeUiValue: ve,
    getMediaRevisionToken: y,
    playbackFps: V,
    syncVideoTransportState: Y,
    toggleVideoMuted: M,
    syncVideoTransportVisibility: L,
    refreshModalVideoSource: B,
    getStickerUiImage: X,
    getExternalStickerPreviewImage: ie,
    getPortMedia: $,
    followPortSticker: se,
    getStickerImage: fe,
    stickerImageKey: be,
    getConnectedErpImage: _e,
    isDecodedImageReady: A,
    getStageImageStatus: _,
    sceneFiles: Se,
    stickerFiles: Me
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
function bg(e) {
  return JSON.stringify(V1(e));
}
function MP(e) {
  return xP(kP, { entries: [bg(e)], index: 0 });
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
  let l, d, u, c, f, p, m, b, v, F, U, H, D, P;
  function W() {
    r || (U(), Kh(i), !(o && i.stickers.some(c)) && (t.historyController.commitActionGroup(bg(i)), D()));
  }
  function R(ne) {
    var re, pe;
    if (r) return;
    F();
    const le = ne < 0 ? t.historyController.undo() : t.historyController.redo();
    if (D(), !le) return;
    const E = R1(i, le), G = (re = i.timeline) == null ? void 0 : re.fps;
    Object.keys(i).forEach((he) => delete i[he]), Object.assign(i, E.state), U(!1), o && i.timeline.fps !== G && m.seek(Math.round(t.frame * i.timeline.fps / G)), t.selectedId = s === "stickers" || s === "cutout" ? i.active.selected_sticker_id : i.active.selected_shot_id, a && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((pe = u()) == null ? void 0 : pe.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), b(), n.backgroundDirty = !0, E.paintingChanged ? p() : f(), H(), P(), d(), v({ cause: "cutout_frame" });
  }
  function ee() {
    var E, G;
    const ne = Array.isArray((E = t.historyController) == null ? void 0 : E.entries) ? t.historyController.entries : [], le = Number((G = t.historyController) == null ? void 0 : G.index);
    return {
      canUndo: !r && ne.length > 1 && le > 0,
      canRedo: !r && ne.length > 1 && le >= 0 && le < ne.length - 1
    };
  }
  return {
    connect(ne) {
      ({
        clearWorldSelection: l,
        commitState: d,
        getActiveCutoutShot: u,
        isUploadingSticker: c,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: p,
        playback: m,
        releaseHiddenSelection: b,
        requestDraw: v,
        stopTimelinePlayback: F,
        syncCutoutShot: U,
        syncPaintUi: H,
        syncUndoRedoButtons: D,
        updateSidePanel: P
      } = ne);
    },
    pushHistory: W,
    restoreHistory: R,
    getHistoryCapabilities: ee
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
  function b() {
    return s === "stickers" ? v() : o.shots;
  }
  function v() {
    return i ? o.stickers.filter((h) => h.placement === "sky") : o.stickers;
  }
  function F(h) {
    return i && J(h);
  }
  function U(h) {
    return h.source.kind === "file" && !h.source.filename && !h.source.data_url;
  }
  function H(h) {
    return F(h) ? Vu(h, n.frame) : h;
  }
  function D(h, z) {
    F(h) ? zh(h, n.frame, z) : Object.assign(h, z);
  }
  function P() {
    const h = o.painting || (o.painting = eo(null));
    return Array.isArray(h.groups) || (h.groups = []), h.groups;
  }
  function W(h = "paint") {
    var g, j;
    const z = Array.isArray((j = (g = o.painting) == null ? void 0 : g[h]) == null ? void 0 : j.strokes) ? o.painting[h].strokes : [], A = [], _ = /* @__PURE__ */ new Set();
    for (const ce of z) {
      const Q = String((ce == null ? void 0 : ce.actionGroupId) || "").trim();
      !Q || _.has(Q) || (_.add(Q), A.push(Q));
    }
    return A;
  }
  function R() {
    return W("paint");
  }
  function ee(h, z) {
    const A = String(z || "").trim();
    return A ? `${h === "mask" ? "mask" : "paint"}:${A}` : "";
  }
  function ne(h) {
    const z = String(h || "").trim();
    return z ? `raster:${z}` : "";
  }
  function le(h) {
    const z = String(h || "").trim();
    if (!z) return "";
    const A = z.match(/^raster:(.*)$/);
    return String(A ? A[1] || "" : z).trim();
  }
  function E(h, z = null) {
    const A = String(h || "").trim();
    if (!A) return { layerKind: "paint", actionGroupId: "" };
    const _ = A.match(/^(paint|mask):(.*)$/);
    return _ ? { layerKind: _[1] === "mask" ? "mask" : "paint", actionGroupId: String(_[2] || "").trim() } : { layerKind: z === "mask" ? "mask" : "paint", actionGroupId: A };
  }
  function G() {
    var z;
    let h = -1;
    for (const A of v())
      h = Math.max(h, Number((A == null ? void 0 : A.z_index) || 0));
    for (const A of P())
      h = Math.max(h, Number((A == null ? void 0 : A.z_index) || 0));
    for (const A of Array.isArray((z = o.painting) == null ? void 0 : z.raster_objects) ? o.painting.raster_objects : [])
      String((A == null ? void 0 : A.layerKind) || "paint") === "paint" && (h = Math.max(h, Number((A == null ? void 0 : A.z_index) || 0)));
    return h + 1;
  }
  function re(h, z = null) {
    const A = String(h || "").trim();
    if (!A) return null;
    const _ = P();
    let g = _.find((j) => String((j == null ? void 0 : j.actionGroupId) || "") === A);
    return g ? z != null && (g.z_index = Math.max(0, Number(z || 0))) : (g = {
      id: A,
      type: "strokeGroup",
      actionGroupId: A,
      z_index: z == null ? G() : Math.max(0, Number(z || 0)),
      locked: !1,
      frame: null
    }, _.push(g)), g;
  }
  function pe(h) {
    if (!(h != null && h.centerUv)) return [];
    const z = Number(h.centerUv.u || 0), A = Number(h.centerUv.v || 0), _ = Number(h.halfW || 0), g = Number(h.halfH || 0);
    return [
      {
        u: ((z - _) % 1 + 1) % 1,
        v: Ee(A - g, 0, 1)
      },
      {
        u: ((z + _) % 1 + 1) % 1,
        v: Ee(A - g, 0, 1)
      },
      {
        u: ((z + _) % 1 + 1) % 1,
        v: Ee(A + g, 0, 1)
      },
      {
        u: ((z - _) % 1 + 1) % 1,
        v: Ee(A + g, 0, 1)
      }
    ];
  }
  function he() {
    const h = new Set(R()), A = P().filter((_) => h.has(String((_ == null ? void 0 : _.actionGroupId) || "")));
    return h.forEach((_) => {
      A.some((g) => String((g == null ? void 0 : g.actionGroupId) || "") === _) || A.push({
        id: _,
        type: "strokeGroup",
        actionGroupId: _,
        z_index: G(),
        locked: !1,
        frame: null
      });
    }), A.sort((_, g) => Number((_ == null ? void 0 : _.z_index) || 0) - Number((g == null ? void 0 : g.z_index) || 0)), o.painting.groups = A, A;
  }
  function me(h, z, A) {
    var Ae;
    const _ = (Ve) => (Number(Ve || 0) % 1 + 1) % 1, g = [];
    for (const Ve of A) {
      const je = Ve == null ? void 0 : Ve.geometry, Ye = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(Ye) && g.push(...Ye);
    }
    if (!g.length) return null;
    const j = _(((Ae = g[0]) == null ? void 0 : Ae.u) || 0);
    let ce = 0, Q = 0;
    g.forEach((Ve) => {
      const je = _((Ve == null ? void 0 : Ve.u) || 0);
      ce += j + Y(je, j), Q += Number((Ve == null ? void 0 : Ve.v) || 0);
    });
    const we = (ce / g.length % 1 + 1) % 1;
    let xe = 1 / 0, T = -1 / 0, ye = 1 / 0, Ce = -1 / 0;
    g.forEach((Ve) => {
      const je = _((Ve == null ? void 0 : Ve.u) || 0), Ye = Y(je, we);
      xe = Math.min(xe, Ye), T = Math.max(T, Ye);
      const $e = Number((Ve == null ? void 0 : Ve.v) || 0);
      ye = Math.min(ye, $e), Ce = Math.max(Ce, $e);
    });
    const Oe = A.reduce((Ve, je) => {
      const Ye = d(String((je == null ? void 0 : je.toolKind) || "pen")), $e = Sn[Ye] || Sn[xr], He = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number(($e == null ? void 0 : $e.sizeScale) ?? 1));
      return Math.max(Ve, He);
    }, 0), Re = Math.max(35e-4, Oe / 2048);
    return {
      centerUv: { u: ((we + (xe + T) * 0.5) % 1 + 1) % 1, v: Ee((ye + Ce) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (T - xe) * 0.5 + Re,
      halfH: (Ce - ye) * 0.5 + Re,
      uvPad: Re
    };
  }
  function Z(h, z, A) {
    const _ = String(h || "").trim();
    if (!_) return null;
    const g = P().find((ce) => String((ce == null ? void 0 : ce.actionGroupId) || "") === _);
    if (!g) return null;
    const j = A || y(_, z);
    return g.frame = me(_, z, j), g.frame;
  }
  function w() {
    var _;
    const h = v().map((g) => ({
      type: "sticker",
      id: String((g == null ? void 0 : g.id) || ""),
      z_index: Number((g == null ? void 0 : g.z_index) || 0),
      item: g
    })), z = he().map((g) => ({
      type: "strokeGroup",
      id: String((g == null ? void 0 : g.id) || (g == null ? void 0 : g.actionGroupId) || ""),
      actionGroupId: String((g == null ? void 0 : g.actionGroupId) || ""),
      z_index: Number((g == null ? void 0 : g.z_index) || 0),
      item: g
    })), A = (Array.isArray((_ = o.painting) == null ? void 0 : _.raster_objects) ? o.painting.raster_objects : []).filter((g) => String((g == null ? void 0 : g.layerKind) || "paint") === "paint").map((g) => ({
      type: "rasterObject",
      id: String((g == null ? void 0 : g.id) || ""),
      z_index: Number((g == null ? void 0 : g.z_index) || 0),
      item: g
    }));
    return [...h, ...z, ...A].sort((g, j) => Number(g.z_index || 0) - Number(j.z_index || 0));
  }
  function K(h = !0) {
    var A, _, g, j, ce, Q;
    const z = w().filter((we) => we.type === "strokeGroup").map((we) => String(we.actionGroupId || "")).filter((we) => !!we);
    if (h) {
      const we = String(((_ = (A = n.interaction) == null ? void 0 : A.stroke) == null ? void 0 : _.actionGroupId) || "").trim(), xe = String(((j = (g = n.interaction) == null ? void 0 : g.stroke) == null ? void 0 : j.layerKind) || "").trim(), T = String(((Q = (ce = n.interaction) == null ? void 0 : ce.stroke) == null ? void 0 : Q.toolKind) || "").trim();
      we && xe === "paint" && T !== "eraser" && !z.includes(we) && z.push(we);
    }
    return z;
  }
  function de(h = !0) {
    var Q, we, xe, T, ye, Ce;
    const z = w();
    if (!h) return z;
    const A = String(((we = (Q = n.interaction) == null ? void 0 : Q.stroke) == null ? void 0 : we.actionGroupId) || "").trim(), _ = String(((T = (xe = n.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : T.layerKind) || "").trim(), g = String(((Ce = (ye = n.interaction) == null ? void 0 : ye.stroke) == null ? void 0 : Ce.toolKind) || "").trim();
    if (!A || _ !== "paint" || g === "eraser" || z.some((Oe) => Oe.type === "strokeGroup" && String(Oe.actionGroupId || "") === A))
      return z;
    const j = p();
    let ce = z.reduce((Oe, Re) => Math.max(Oe, Number((Re == null ? void 0 : Re.z_index) || 0)), -1) + 1;
    return j && ae(j) && String(j.actionGroupId || "") === A && (ce = Number(j.z_index || 0)), [
      ...z,
      {
        type: "strokeGroup",
        id: A,
        actionGroupId: A,
        z_index: ce,
        item: null
      }
    ].sort((Oe, Re) => Number((Oe == null ? void 0 : Oe.z_index) || 0) - Number((Re == null ? void 0 : Re.z_index) || 0));
  }
  function q() {
    return P().slice().sort((h, z) => Number((h == null ? void 0 : h.z_index) || 0) - Number((z == null ? void 0 : z.z_index) || 0)).map((h) => I(ee("paint", (h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || ""))).filter(Boolean);
  }
  function ue() {
    var h;
    return (Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : []).filter((z) => String((z == null ? void 0 : z.layerKind) || "paint") === "paint").slice().sort((z, A) => Number((z == null ? void 0 : z.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)).map((z) => ge(ne((z == null ? void 0 : z.id) || ""))).filter(Boolean);
  }
  function Pe() {
    return r || !Array.isArray(o.stickers) ? [] : v();
  }
  function te() {
    return [...Array.isArray(o.shots) ? o.shots : [], ...Pe()];
  }
  function O(h) {
    return !!h && Array.isArray(o.shots) && o.shots.includes(h);
  }
  function J(h) {
    return !!h && Array.isArray(o.stickers) && o.stickers.includes(h);
  }
  function oe() {
    var h;
    return Array.isArray((h = o.painting) == null ? void 0 : h.raster_objects) ? o.painting.raster_objects : [];
  }
  function ge(h) {
    const z = le(h);
    if (!z) return null;
    const A = oe().find((_) => String((_ == null ? void 0 : _.id) || "").trim() === z);
    return !A || String((A == null ? void 0 : A.layerKind) || "paint") !== "paint" ? null : {
      ...A,
      id: ne(z),
      type: "rasterObject",
      rasterObjectId: z
    };
  }
  function ve(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "rasterObject") return !1;
    const z = le(h.rasterObjectId || h.id || "");
    return !!z && !!ge(ne(z));
  }
  function I(h) {
    const z = E(h), A = String(z.actionGroupId || "").trim();
    if (!A) return null;
    const _ = P().find((g) => String((g == null ? void 0 : g.id) || (g == null ? void 0 : g.actionGroupId) || "") === A || String((g == null ? void 0 : g.actionGroupId) || "") === A);
    return _ ? {
      ..._,
      id: ee("paint", A),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: A
    } : null;
  }
  function ae(h) {
    if (!h || typeof h != "object" || String(h.type || "") !== "strokeGroup") return !1;
    const z = String(h.actionGroupId || "").trim(), A = String(h.layerKind || "paint").trim() || "paint";
    return !!z && !!I(ee(A, z));
  }
  function y(h, z = null) {
    const A = E(h, z), _ = String(A.actionGroupId || "").trim();
    return _ ? c(A.layerKind).filter((g) => String((g == null ? void 0 : g.actionGroupId) || "").trim() === _) : [];
  }
  function S(h, z = "paint") {
    const A = String(h || "").trim(), g = `geomv5:${String(z || "paint").trim() || "paint"}:${A}:${n.mode}:${f()}`;
    if (n.mode === "frame") {
      const j = l(), ce = String((j == null ? void 0 : j.id) || ""), Q = j ? u(j) : null;
      return `${g}:frame:${ce}:${Math.round(Number((j == null ? void 0 : j.yaw_deg) || 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.pitch_deg) || 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.roll_deg) ?? (j == null ? void 0 : j.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((j == null ? void 0 : j.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Q == null ? void 0 : Q.x) || 0))}:${Math.round(Number((Q == null ? void 0 : Q.y) || 0))}:${Math.round(Number((Q == null ? void 0 : Q.w) || 0))}:${Math.round(Number((Q == null ? void 0 : Q.h) || 0))}`;
    }
    return `${g}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function V(h, z, A) {
    return !h || typeof h != "object" ? h : {
      ...h,
      u: ((Number(h.u || 0) + Number(z || 0)) % 1 + 1) % 1,
      v: Ee(Number(h.v || 0) + Number(A || 0), 0, 1)
    };
  }
  function Y(h, z) {
    let A = Number(h || 0) - Number(z || 0);
    for (; A > 0.5; ) A -= 1;
    for (; A < -0.5; ) A += 1;
    return A;
  }
  function x(h, z = null, A = null) {
    var xe;
    const _ = E(h, z), g = Array.isArray(A) ? A : y(_.actionGroupId, _.layerKind), j = [];
    if (g.forEach((T) => {
      const ye = (T == null ? void 0 : T.geometry) || null, Ce = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [];
      Array.isArray(Ce) && j.push(...Ce);
    }), !j.length) return { u: 0.5, v: 0.5 };
    const ce = Number(((xe = j[0]) == null ? void 0 : xe.u) || 0);
    let Q = 0, we = 0;
    return j.forEach((T) => {
      Q += ce + Y(Number((T == null ? void 0 : T.u) || 0), ce), we += Number((T == null ? void 0 : T.v) || 0);
    }), {
      u: (Q / j.length % 1 + 1) % 1,
      v: Ee(we / j.length, 0, 1)
    };
  }
  function M(h, z, A = 1, _ = 0) {
    if (!h || typeof h != "object") return h;
    const g = Number((z == null ? void 0 : z.u) || 0), j = Number((z == null ? void 0 : z.v) || 0), ce = Y(Number(h.u || 0), g), Q = Number(h.v || 0) - j, we = Number(_ || 0) * pr, xe = Math.cos(we), T = Math.sin(we), ye = Math.max(0.02, Number(A || 1)), Ce = (ce * xe - Q * T) * ye, Oe = (ce * T + Q * xe) * ye;
    return {
      ...h,
      u: ((g + Ce) % 1 + 1) % 1,
      v: Ee(j + Oe, 0, 1)
    };
  }
  function L(h, z, A, _ = null, g = null, j = null) {
    const ce = E(h, g), Q = String(ce.actionGroupId || "").trim();
    if (!Q) return !1;
    const we = c(ce.layerKind), xe = Array.isArray(_) ? new Map(_.map((ye) => [String((ye == null ? void 0 : ye.id) || ""), ye])) : null;
    let T = !1;
    if (we.forEach((ye) => {
      if (String((ye == null ? void 0 : ye.actionGroupId) || "").trim() !== Q) return;
      const Ce = (xe == null ? void 0 : xe.get(String((ye == null ? void 0 : ye.id) || ""))) || ye, Oe = ye == null ? void 0 : ye.geometry, Re = Ce == null ? void 0 : Ce.geometry;
      !Oe || !Re || (Array.isArray(Re.points) && (Oe.points = Re.points.map((Ae) => V(Ae, z, A)), T = !0), Array.isArray(Re.rawPoints) && (Oe.rawPoints = Re.rawPoints.map((Ae) => V(Ae, z, A)), T = !0), Array.isArray(Re.processedPoints) && (Oe.processedPoints = Re.processedPoints.map((Ae) => V(Ae, z, A)), T = !0));
    }), T && j) {
      const ye = P().find((Ce) => String((Ce == null ? void 0 : Ce.actionGroupId) || "") === Q);
      ye && (ye.frame = null);
    }
    return T;
  }
  function k(h, z = 1, A = 0, _ = null, g = null, j = null) {
    const ce = E(h, g), Q = String(ce.actionGroupId || "").trim();
    if (!Q) return !1;
    const we = c(ce.layerKind), xe = Array.isArray(_) ? _ : y(Q, ce.layerKind), T = Array.isArray(xe) ? new Map(xe.map((Oe) => [String((Oe == null ? void 0 : Oe.id) || ""), Oe])) : null, ye = (j == null ? void 0 : j.centerUv) ?? x(Q, ce.layerKind, xe);
    let Ce = !1;
    if (we.forEach((Oe) => {
      if (String((Oe == null ? void 0 : Oe.actionGroupId) || "").trim() !== Q) return;
      const Re = (T == null ? void 0 : T.get(String((Oe == null ? void 0 : Oe.id) || ""))) || Oe, Ae = Oe == null ? void 0 : Oe.geometry, Ve = Re == null ? void 0 : Re.geometry;
      !Ae || !Ve || (Array.isArray(Ve.points) && (Ae.points = Ve.points.map((je) => M(je, ye, z, A)), Ce = !0), Array.isArray(Ve.rawPoints) && (Ae.rawPoints = Ve.rawPoints.map((je) => M(je, ye, z, A)), Ce = !0), Array.isArray(Ve.processedPoints) && (Ae.processedPoints = Ve.processedPoints.map((je) => M(je, ye, z, A)), Ce = !0));
    }), Ce && j) {
      const Oe = P().find((Re) => String((Re == null ? void 0 : Re.actionGroupId) || "") === Q);
      Oe && (Oe.frame = null);
    }
    return Ce;
  }
  function N(h, z, A, _ = null) {
    const g = le(h);
    if (!g) return !1;
    const j = oe().find((T) => String((T == null ? void 0 : T.id) || "").trim() === g);
    if (!j) return !1;
    const ce = _ && typeof _ == "object" ? _ : j, Q = (ce == null ? void 0 : ce.transform) || {}, we = Number(Q.du || 0) + Number(z || 0), xe = Ee(Number(Q.dv || 0) + Number(A || 0), -1, 1);
    return j.transform || (j.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), j.transform.du = we, j.transform.dv = xe, !0;
  }
  function C(h, z = 1, A = null) {
    const _ = le(h);
    if (!_) return !1;
    const g = oe().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === _);
    if (!g) return !1;
    const j = A && typeof A == "object" ? A : g, ce = (j == null ? void 0 : j.transform) || {}, Q = Math.max(0.01, Number(ce.scale || 1)), we = Ee(Q * Math.max(0.01, Number(z || 1)), 0.01, 100);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.scale = we, !0;
  }
  function B() {
    return G();
  }
  function X(h) {
    var z;
    return !h || typeof h != "object" ? !1 : a ? ((z = h.source) == null ? void 0 : z.kind) === "port" : String(h.id || "") === sd || String(h.source_kind || "") === HM;
  }
  function ie(h) {
    return !!(h && typeof h == "object" && h.visible === !1);
  }
  function $(h) {
    return X(h) && ie(h) ? om : 1;
  }
  function se(h, z, A = 1, _ = 0) {
    if (!h || typeof h != "object") return h;
    const g = Number((z == null ? void 0 : z.u) || 0), j = Number((z == null ? void 0 : z.v) || 0), ce = Y(Number(h.u || 0), g), Q = Number(h.v || 0) - j, we = Math.max(0.02, Number(A || 1)), xe = Number(_ || 0) * pr, T = Math.cos(xe), ye = Math.sin(xe), Ce = ce / we, Oe = Q / we, Re = Ce * T + Oe * ye, Ae = -Ce * ye + Oe * T;
    return {
      ...h,
      u: ((g + Re) % 1 + 1) % 1,
      v: j + Ae
    };
  }
  function Se(h) {
    const z = (h == null ? void 0 : h.bbox) || null, A = (h == null ? void 0 : h.transform) || {};
    return z ? {
      u: (((Number(z.u0 || 0) + Number(z.u1 || 0)) * 0.5 + Number(A.du || 0)) % 1 + 1) % 1,
      v: Ee((Number(z.v0 || 0) + Number(z.v1 || 0)) * 0.5 + Number(A.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Me(h) {
    var we, xe, T, ye;
    const z = (h == null ? void 0 : h.bbox) || null;
    if (!z) return [];
    const A = {
      u: (Number(z.u0 || 0) + Number(z.u1 || 0)) * 0.5,
      v: (Number(z.v0 || 0) + Number(z.v1 || 0)) * 0.5
    }, _ = Math.max(0.01, Number(((we = h == null ? void 0 : h.transform) == null ? void 0 : we.scale) || 1)), g = Number(((xe = h == null ? void 0 : h.transform) == null ? void 0 : xe.rot_deg) || 0), j = Number(((T = h == null ? void 0 : h.transform) == null ? void 0 : T.du) || 0), ce = Number(((ye = h == null ? void 0 : h.transform) == null ? void 0 : ye.dv) || 0);
    return [
      { u: Number(z.u0 || 0), v: Number(z.v0 || 0) },
      { u: Number(z.u1 || 0), v: Number(z.v0 || 0) },
      { u: Number(z.u1 || 0), v: Number(z.v1 || 0) },
      { u: Number(z.u0 || 0), v: Number(z.v1 || 0) }
    ].map((Ce) => V(M(Ce, A, _, g), j, ce));
  }
  function fe(h) {
    const z = le((h == null ? void 0 : h.rasterObjectId) || (h == null ? void 0 : h.id) || ""), A = (h == null ? void 0 : h.transform) || {}, _ = (h == null ? void 0 : h.bbox) || {}, g = `${z}:${n.mode}:${f()}:${_.u0}:${_.v0}:${_.u1}:${_.v1}:${A.du}:${A.dv}:${A.rot_deg}:${A.scale}`;
    if (n.mode === "frame") {
      const j = l(), ce = j ? u(j) : null;
      return `${g}:frame:${String((j == null ? void 0 : j.id) || "")}:${Math.round(Number((ce == null ? void 0 : ce.x) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.y) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.w) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.h) || 0))}`;
    }
    return `${g}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function be(h) {
    const z = String((h == null ? void 0 : h.id) || ""), A = O(h) ? "frame" : J(h) ? "sticker" : "item", _ = H(h), g = [
      A,
      z,
      n.mode,
      Number((_ == null ? void 0 : _.yaw_deg) || 0).toFixed(4),
      Number((_ == null ? void 0 : _.pitch_deg) || 0).toFixed(4),
      Number((_ == null ? void 0 : _.hFOV_deg) || 0).toFixed(4),
      Number((_ == null ? void 0 : _.vFOV_deg) || 0).toFixed(4),
      Number((_ == null ? void 0 : _.rot_deg) || 0).toFixed(4),
      Number((_ == null ? void 0 : _.roll_deg) || 0).toFixed(4),
      Pr(_),
      F(h) && m(h)
    ].join(":");
    if (n.mode === "frame") {
      const j = l(), ce = j ? u(j) : null;
      return `${g}:frame:${String((j == null ? void 0 : j.id) || "")}:${Math.round(Number((ce == null ? void 0 : ce.x) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.y) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.w) || 0))}:${Math.round(Number((ce == null ? void 0 : ce.h) || 0))}`;
    }
    return `${g}:view:${Math.round(Number(n.viewYaw || 0) * 100)}:${Math.round(Number(n.viewPitch || 0) * 100)}:${Math.round(Number(n.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function _e() {
    w().forEach((z, A) => {
      z.type === "sticker" && z.item && (z.item.z_index = A), z.type === "strokeGroup" && z.item && (z.item.z_index = A), z.type === "rasterObject" && z.item && (z.item.z_index = A);
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
    getList: b,
    skyStickers: v,
    isSceneSticker: F,
    isUploadingSticker: U,
    poseOf: H,
    writePose: D,
    getPaintingGroupList: P,
    makeStrokeGroupSelectionId: ee,
    makeRasterObjectSelectionId: ne,
    parseRasterObjectSelectionId: le,
    ensurePaintingGroupEntry: re,
    getFrameCornersUv: pe,
    ensureGroupFrame: Z,
    getDisplayListObjects: w,
    getOrderedPaintGroupIds: K,
    getOrderedDisplayListObjects: de,
    getSelectableStrokeGroupItems: q,
    getSelectableRasterObjectItems: ue,
    cutoutStickers: Pe,
    getCutoutSelectableItems: te,
    isShotItem: O,
    isStickerItem: J,
    getRasterObjectList: oe,
    getRasterObjectItem: ge,
    isRasterObjectItem: ve,
    getStrokeGroupItem: I,
    isStrokeGroupItem: ae,
    getStrokeGroupStrokes: y,
    getStrokeGeomCacheKey: S,
    shortestWrappedDelta: Y,
    getStrokeGroupCenterUv: x,
    applyStrokeGroupOffset: L,
    applyStrokeGroupTransform: k,
    applyRasterObjectOffset: N,
    applyRasterObjectTransform: C,
    getNextStickerZIndex: B,
    isExternalSticker: X,
    isStickerHidden: ie,
    getStickerDisplayAlpha: $,
    inverseTransformErpPointAround: se,
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
  let d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te;
  function O() {
    const h = String(t.selectedId || "");
    if (!h) return null;
    const z = P(h);
    if (z) return z;
    const A = U(h);
    return A || (o ? m().find((_) => String((_ == null ? void 0 : _.id) || "") === h) || null : v().find((_) => String((_ == null ? void 0 : _.id) || "") === h) || null);
  }
  function J() {
    const h = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], z = [], A = /* @__PURE__ */ new Set();
    return h.forEach((_) => {
      const g = String(_ || "").trim();
      if (!g || A.has(g)) return;
      A.add(g);
      const j = g === String(t.selectedId || "") ? O() : P(g) || U(g) || (o ? m().find((ce) => String((ce == null ? void 0 : ce.id) || "") === g) : v().find((ce) => String((ce == null ? void 0 : ce.id) || "") === g));
      j && z.push(j);
    }), z;
  }
  function oe(h = null) {
    const z = Array.isArray(h) ? h : J();
    if (!z || z.length < 2) return null;
    const A = z.map((xe) => me(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!A.length) return null;
    const _ = A.flatMap((xe) => xe.corners.map((T) => Number((T == null ? void 0 : T.x) || 0))), g = A.flatMap((xe) => xe.corners.map((T) => Number((T == null ? void 0 : T.y) || 0))), j = Math.min(..._), ce = Math.max(..._), Q = Math.min(...g), we = Math.max(...g);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (j + ce) * 0.5, y: (Q + we) * 0.5 },
      corners: [
        { x: j, y: Q },
        { x: ce, y: Q },
        { x: ce, y: we },
        { x: j, y: we }
      ],
      edgeMidpoints: [
        { edge: "top", x: (j + ce) * 0.5, y: Q, a: { x: j, y: Q }, b: { x: ce, y: Q } },
        { edge: "right", x: ce, y: (Q + we) * 0.5, a: { x: ce, y: Q }, b: { x: ce, y: we } },
        { edge: "bottom", x: (j + ce) * 0.5, y: we, a: { x: ce, y: we }, b: { x: j, y: we } },
        { edge: "left", x: j, y: (Q + we) * 0.5, a: { x: j, y: we }, b: { x: j, y: Q } }
      ],
      rotateStemBase: { x: (j + ce) * 0.5, y: Q },
      rotateHandle: { x: (j + ce) * 0.5, y: Q - 30 }
    };
  }
  function ge(h) {
    const z = String((h == null ? void 0 : h.id) || "").trim();
    return !!z && Array.isArray(t.selectedIds) && t.selectedIds.includes(z);
  }
  function ve() {
    const h = O();
    return h ? re(h) || ee(h) ? "stroke" : le(h) ? "frame" : "image" : null;
  }
  function I(h) {
    if (!h || typeof h != "object") return !1;
    if (re(h)) {
      const z = String(h.actionGroupId || h.id || "").trim(), A = F().find((_) => String((_ == null ? void 0 : _.actionGroupId) || (_ == null ? void 0 : _.id) || "").trim() === z);
      return (A == null ? void 0 : A.locked) === !0;
    }
    if (ee(h)) {
      const z = w(h.rasterObjectId || h.id || ""), A = H().find((_) => String((_ == null ? void 0 : _.id) || "").trim() === z);
      return (A == null ? void 0 : A.locked) === !0;
    }
    return h.locked === !0;
  }
  function ae(h = null) {
    const z = Array.isArray(h) ? h : J();
    return z.length > 0 && z.every((A) => I(A));
  }
  function y(h, z) {
    const A = z === !0;
    if (!h || typeof h != "object") return !1;
    if (re(h)) {
      const _ = String(h.actionGroupId || h.id || "").trim(), g = F().find((j) => String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim() === _);
      return !g || g.locked === A ? !1 : (g.locked = A, !0);
    }
    if (ee(h)) {
      const _ = w(h.rasterObjectId || h.id || ""), g = H().find((j) => String((j == null ? void 0 : j.id) || "").trim() === _);
      return !g || g.locked === A ? !1 : (g.locked = A, !0);
    }
    return h.locked === A ? !1 : (h.locked = A, !0);
  }
  function S() {
    if (r) return;
    const h = J();
    if (!h.length) return;
    const z = !ae(h);
    let A = !1;
    h.forEach((_) => {
      y(_, z) && (A = !0);
    }), A && (de(), u(), Pe(), te(), q());
  }
  function V(h) {
    se(), s.selection = null, t.selectedId = (h == null ? void 0 : h.id) || null, t.selectedIds = h != null && h.id ? [h.id] : [], h && G(h) ? a.active.selected_sticker_id = h.id || null : a.active.selected_sticker_id = null, h && le(h) ? a.active.selected_shot_id = h.id || null : h ? le(h) || (a.active.selected_shot_id = a.active.selected_shot_id) : a.active.selected_shot_id = null;
  }
  function Y(h, z = null) {
    const A = [], _ = /* @__PURE__ */ new Set();
    (Array.isArray(h) ? h : []).forEach((ce) => {
      const Q = String((ce == null ? void 0 : ce.id) || "").trim();
      !Q || _.has(Q) || (_.add(Q), A.push(Q));
    }), t.selectedIds = A, se(), s.selection = null;
    const g = String(z || "").trim();
    t.selectedId = g && A.includes(g) ? g : A[A.length - 1] || null;
    const j = O();
    a.active.selected_sticker_id = j && G(j) && j.id || null, j && le(j) ? a.active.selected_shot_id = j.id || null : A.length || (a.active.selected_shot_id = null);
  }
  function x() {
    const h = (Array.isArray(a.shots) ? a.shots : []).map((A, _) => ({
      kind: "frame",
      item: A,
      label: String((A == null ? void 0 : A.label) || `Frame ${_ + 1}`)
    })), z = f().map((A, _) => {
      var j, ce;
      const g = R(A) ? String(A.id || sd) : String(((ce = (j = a.assets) == null ? void 0 : j[A.asset_id]) == null ? void 0 : ce.name) || A.asset_id || A.id || `Image ${_ + 1}`);
      return {
        kind: "image",
        item: A,
        label: g
      };
    });
    return [...h, ...z];
  }
  function M(h) {
    return h === "frame" ? ze.camera : h === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function L(h) {
    return !h || !h.item ? {
      label: String((h == null ? void 0 : h.label) || ""),
      icon: null
    } : {
      label: String(h.label || ""),
      icon: M(h.kind)
    };
  }
  function k() {
    if (r) return;
    const h = O();
    !h || !R(h) || (h.visible = E(h), fe(), pe(), de(), u(), te(), Pe(), q());
  }
  function N() {
    if (r || l !== "stickers") return;
    const h = O();
    if (!h || !R(h)) return;
    const z = h.initial_pose;
    if (!z || typeof z != "object") return;
    h.yaw_deg = Number(z.yaw_deg ?? h.yaw_deg ?? 0), h.pitch_deg = Number(z.pitch_deg ?? h.pitch_deg ?? 0), h.hFOV_deg = Number(z.hFOV_deg ?? h.hFOV_deg ?? 30);
    const A = D(Hs, () => {
      q();
    });
    A && (A.complete || A.naturalWidth || A.width) ? h.vFOV_deg = c(
      Number(z.hFOV_deg ?? h.hFOV_deg ?? 30),
      Number(A.naturalWidth || A.width || 1),
      Number(A.naturalHeight || A.height || 1)
    ) : h.vFOV_deg = Number(z.vFOV_deg ?? h.vFOV_deg ?? 30), h.rot_deg = Number(z.rot_deg ?? h.rot_deg ?? 0), de(), u(), te(), Pe(), q();
  }
  function C(h) {
    if (!h || !R(h)) return null;
    const z = h.initial_pose;
    if (!z || typeof z != "object") return null;
    const A = {
      yaw_deg: Number(z.yaw_deg ?? h.yaw_deg ?? 0),
      pitch_deg: Number(z.pitch_deg ?? h.pitch_deg ?? 0),
      hFOV_deg: Number(z.hFOV_deg ?? h.hFOV_deg ?? 30),
      vFOV_deg: Number(z.vFOV_deg ?? h.vFOV_deg ?? 30),
      rot_deg: Number(z.rot_deg ?? h.rot_deg ?? 0)
    }, _ = D(Hs, () => {
      q();
    });
    return _ && (_.complete || _.naturalWidth || _.width) && (A.vFOV_deg = c(
      A.hFOV_deg,
      Number(_.naturalWidth || _.width || 1),
      Number(_.naturalHeight || _.height || 1)
    )), A;
  }
  function B() {
    const h = O();
    if (!h || !R(h)) return !1;
    const z = C(h);
    if (!z) return !1;
    const A = (_, g) => Math.abs(Number(_ || 0) - Number(g || 0)) <= 1e-4;
    return !(A(h.yaw_deg, z.yaw_deg) && A(h.pitch_deg, z.pitch_deg) && A(h.hFOV_deg, z.hFOV_deg) && A(h.vFOV_deg, z.vFOV_deg) && A(h.rot_deg, z.rot_deg));
  }
  function X(h = {}) {
    const A = h.preservePanelValues !== !1 ? K(O()) : null;
    A && (t.panelLastValues = {
      yaw_deg: Number(A.yaw_deg || 0),
      pitch_deg: Number(A.pitch_deg || 0),
      hFOV_deg: Number(A.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(A.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(A.rot_deg || 0),
      roll_deg: Number(A.roll_deg || 0),
      aspect_id: Pr(A)
    }), t.selectedId = null, t.selectedIds = [], se(), t.cutoutAspectOpen = !1, a.active.selected_sticker_id = null, a.active.selected_shot_id = null;
  }
  function ie() {
    return !i || !t.worldSelectedId ? null : a.stickers.find((h) => h.id === t.worldSelectedId && h.placement === "world") || null;
  }
  function $(h) {
    V(null), t.worldSelectedId = h, n.backgroundDirty = !0;
  }
  function se() {
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
    var z;
    const h = O();
    (ne(h) && !ue(h) || t.selectedId === dl && W() && !d() || ve() === "stroke" && !Z()) && V(null), ((z = ie()) == null ? void 0 : z.visible) === !1 && se();
  }
  function be() {
    if (r) return;
    const h = J();
    if (!O() || h.length === 0 || h.some((Q) => I(Q))) return;
    he();
    const A = b(), _ = new Set(h.map((Q) => G(Q) ? `sticker:${String(Q.id || "")}` : ee(Q) ? `rasterObject:${w(Q.rasterObjectId || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || Q.id || "")}`)), g = [], j = [];
    if (A.forEach((Q) => {
      var xe, T;
      const we = Q.type === "sticker" ? `sticker:${String(((xe = Q.item) == null ? void 0 : xe.id) || "")}` : Q.type === "rasterObject" ? `rasterObject:${String(((T = Q.item) == null ? void 0 : T.id) || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || "")}`;
      _.has(we) ? g.push(Q) : j.push(Q);
    }), !g.length || g[g.length - 1] === A[A.length - 1]) return;
    [...j, ...g].forEach((Q, we) => {
      Q.type === "sticker" && Q.item && (Q.item.z_index = we), Q.type === "strokeGroup" && Q.item && (Q.item.z_index = we), Q.type === "rasterObject" && Q.item && (Q.item.z_index = we);
    }), pe(), de(), u(), Pe(), q();
  }
  function _e() {
    if (r) return;
    const h = J();
    if (!O() || h.length === 0 || h.some((Q) => I(Q))) return;
    he();
    const A = b(), _ = new Set(h.map((Q) => G(Q) ? `sticker:${String(Q.id || "")}` : ee(Q) ? `rasterObject:${w(Q.rasterObjectId || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || Q.id || "")}`)), g = [], j = [];
    if (A.forEach((Q) => {
      var xe, T;
      const we = Q.type === "sticker" ? `sticker:${String(((xe = Q.item) == null ? void 0 : xe.id) || "")}` : Q.type === "rasterObject" ? `rasterObject:${String(((T = Q.item) == null ? void 0 : T.id) || Q.id || "")}` : `strokeGroup:${String(Q.actionGroupId || "")}`;
      _.has(we) ? g.push(Q) : j.push(Q);
    }), !g.length || g[0] === A[0]) return;
    [...g, ...j].forEach((Q, we) => {
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
        getDisplayListObjects: b,
        getList: v,
        getPaintingGroupList: F,
        getRasterObjectItem: U,
        getRasterObjectList: H,
        getStickerUiImage: D,
        getStrokeGroupItem: P,
        hasCamera: W,
        isExternalSticker: R,
        isRasterObjectItem: ee,
        isSceneSticker: ne,
        isShotItem: le,
        isStickerHidden: E,
        isStickerItem: G,
        isStrokeGroupItem: re,
        markObjectVisualsDirty: pe,
        normalizeDisplayZIndices: he,
        objectGeom: me,
        paintingShown: Z,
        parseRasterObjectSelectionId: w,
        poseOf: K,
        pushHistory: de,
        requestDraw: q,
        sceneStickerShown: ue,
        updateSelectionMenu: Pe,
        updateSidePanel: te
      } = h);
    },
    getSelected: O,
    getSelectedItems: J,
    getMultiSelectionGeom: oe,
    isItemSelected: ge,
    getSelectedKind: ve,
    isItemLocked: I,
    areAllSelectedItemsLocked: ae,
    toggleSelectedLock: S,
    setSelectedItem: V,
    setSelectedItems: Y,
    getCutoutInspectorItems: x,
    getSelectionItemIcon: M,
    getSelectionItemLabelData: L,
    toggleSelectedExternalStickerVisibility: k,
    restoreSelectedToInitialPose: N,
    canRestoreSelectedToInitial: B,
    clearSelection: X,
    selectedWorldSticker: ie,
    selectWorldSticker: $,
    clearWorldSelection: se,
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
    const J = ee({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !J || J.length !== 4 ? !1 : J[0].y >= J[3].y;
  }
  function b() {
    return am({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function v() {
    const O = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return O.some((J, oe) => J !== f.key[oe]) && (f = { key: O, projection: lm(b(), r.width, r.height) }), f.projection;
  }
  function F(O) {
    const J = v().project(O);
    return J.z > 1e-4 ? J : null;
  }
  function U(O, J) {
    return v().ray(O, J);
  }
  function H() {
    const O = r.width, J = r.height, oe = 2;
    if (O / Math.max(J, 1) >= oe) {
      const y = J, S = y * oe;
      return { x: (O - S) * 0.5, y: 0, w: S, h: y };
    }
    const ve = O, I = ve / oe;
    return { x: 0, y: (J - I) * 0.5, w: ve, h: I };
  }
  function D(O) {
    return {
      lon: Math.atan2(O.x, O.z),
      lat: Math.asin(Ee(O.y, -1, 1))
    };
  }
  function P(O, J = null) {
    const { lon: oe, lat: ge } = D(O), ve = H();
    let I = ve.x + (oe / (2 * Math.PI) + 0.5) * ve.w;
    const ae = ve.y + (0.5 - ge / Math.PI) * ve.h;
    if (J !== null) {
      for (; I - J > ve.w / 2; ) I -= ve.w;
      for (; I - J < -ve.w / 2; ) I += ve.w;
    }
    return { x: I, y: ae, z: 1 };
  }
  function W(O) {
    const J = d(O), oe = Qi(
      Number(J.yaw_deg || 0),
      Number(J.pitch_deg || 0),
      Number(J.rot_deg || J.roll_deg || 0)
    ), ge = Math.tan(Ee(Number(J.hFOV_deg || 20), 0.1, 179) * 0.5 * pr), ve = Math.tan(Ee(Number(J.vFOV_deg || 20), 0.1, 179) * 0.5 * pr);
    return {
      centerDir: oe.fwd,
      right: oe.right,
      up: oe.up,
      tanX: ge,
      tanY: ve
    };
  }
  function R(O, J, oe) {
    return oP(Kf(Kf(O.centerDir, Bf(O.right, J)), Bf(O.up, oe)));
  }
  function ee(O) {
    const J = W(O);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: ge, v: ve }) => R(J, ge * J.tanX, ve * J.tanY));
  }
  function ne(O, J, oe) {
    const ge = W(O), ve = (J * 2 - 1) * ge.tanX, I = (1 - oe * 2) * ge.tanY;
    return R(ge, ve, I);
  }
  function le(O) {
    const J = t.width / Math.max(1, r.width), oe = t.height / Math.max(1, r.height);
    return { x: O.x * J, y: O.y * oe, w: O.w * J, h: O.h * oe };
  }
  function E(O, J = null, oe = null, ge = null) {
    if (n.mode === "frame") {
      const ve = J || s();
      if (!ve) return [];
      const I = oe || l(ve);
      return de(O, ve, I);
    }
    return Z(O, ge);
  }
  function G(O, J = null, oe = null, ge = null, ve = null) {
    if (!O) return null;
    if (n.mode === "unwrap") {
      const ae = Z([O], ve);
      return ae[0] ? { x: ae[0].x, y: ae[0].y, z: 1 } : null;
    }
    const I = pe(O);
    return I ? u(I, J, oe, ge) : null;
  }
  function re(O, J) {
    if (!O || !J) return null;
    const oe = Number(J.x || 0), ge = Number(J.y || 0);
    return ne(O, oe, ge);
  }
  function pe(O) {
    if (!O) return null;
    const J = (Number(O.u || 0) - 0.5) * (2 * Math.PI), oe = (0.5 - Number(O.v || 0)) * Math.PI, ge = Math.cos(oe);
    return hl(ge * Math.sin(J), Math.sin(oe), ge * Math.cos(J));
  }
  function he(O, J) {
    if (!O || !J) return null;
    const oe = W(O), ge = tc(J, oe.centerDir);
    if (!Number.isFinite(ge) || ge <= 1e-6) return null;
    const ve = tc(J, oe.right) / ge, I = tc(J, oe.up) / ge;
    return {
      x: (ve / Math.max(1e-6, oe.tanX) + 1) * 0.5,
      y: (1 - I / Math.max(1e-6, oe.tanY)) * 0.5
    };
  }
  function me(O) {
    if (!Array.isArray(O) || O.length < 3) return [];
    if (n.mode === "unwrap") {
      const oe = H();
      return O.map((ge) => ({
        x: oe.x + Number(ge.u || 0) * oe.w,
        y: oe.y + Number(ge.v || 0) * oe.h
      }));
    }
    const J = O.map((oe) => F(pe(oe))).filter(Boolean);
    return J.every((oe) => Number(oe.z || 0) > 0) ? J.map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) })) : [];
  }
  function Z(O, J = null) {
    if (!Array.isArray(O) || O.length < 1) return [];
    if (n.mode === "unwrap") {
      const ge = H();
      return O.map((ve) => {
        const I = (Number(ve.u || 0) % 1 + 1) % 1, ae = J == null ? I : Number(J || 0) + c(I, J);
        return {
          x: ge.x + ae * ge.w,
          y: ge.y + Number(ve.v || 0) * ge.h
        };
      });
    }
    const oe = O.map((ge) => F(pe(ge))).filter(Boolean);
    return oe.every((ge) => Number(ge.z || 0) > 0) ? oe.map((ge) => ({ x: Number(ge.x || 0), y: Number(ge.y || 0) })) : [];
  }
  function w(O, J = 160) {
    if (!Array.isArray(O) || O.length < 3) return !1;
    for (let oe = 0; oe < O.length; oe += 1) {
      const ge = O[oe], ve = O[(oe + 1) % O.length];
      if (!ge || !ve || !Number.isFinite(ge.x) || !Number.isFinite(ge.y) || !Number.isFinite(ve.x) || !Number.isFinite(ve.y) || Math.hypot(Number(ve.x) - Number(ge.x), Number(ve.y) - Number(ge.y)) > J) return !1;
    }
    return !0;
  }
  function K(O, J, oe) {
    if (!Array.isArray(O) || O.length < 3 || !J || !oe) return [];
    const ge = [];
    for (const ve of O) {
      const I = pe(ve), ae = he(J, I);
      if (!ae) return [];
      ge.push({
        x: Number(oe.x || 0) + Number(ae.x || 0) * Number(oe.w || 0),
        y: Number(oe.y || 0) + Number(ae.y || 0) * Number(oe.h || 0)
      });
    }
    return w(ge, Math.max(80, Math.max(oe.w, oe.h) * 0.75)) ? ge : [];
  }
  function de(O, J, oe) {
    if (!Array.isArray(O) || O.length < 1 || !J || !oe) return [];
    const ge = [];
    for (const ve of O) {
      const I = pe(ve), ae = he(J, I);
      ae && ge.push({
        x: Number(oe.x || 0) + Number(ae.x || 0) * Number(oe.w || 0),
        y: Number(oe.y || 0) + Number(ae.y || 0) * Number(oe.h || 0)
      });
    }
    return ge;
  }
  function q(O) {
    const J = r.getBoundingClientRect();
    return {
      x: (O.clientX - J.left) / J.width * r.width,
      y: (O.clientY - J.top) / J.height * r.height
    };
  }
  function ue(O) {
    const J = r.getBoundingClientRect();
    return {
      x: Number(O.clientX) - Number(J.left || 0),
      y: Number(O.clientY) - Number(J.top || 0)
    };
  }
  function Pe(O, J = performance.now()) {
    if (n.mode === "unwrap") {
      const I = H(), ae = (O.x - I.x) / Math.max(1, I.w), y = (O.y - I.y) / Math.max(1, I.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ae % 1 + 1) % 1,
        v: Ee(y, 0, 1),
        t: Number(J || 0)
      };
    }
    const oe = U(O.x, O.y), { lon: ge, lat: ve } = D(oe);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ge / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - ve / Math.PI, 0, 1),
      t: Number(J || 0)
    };
  }
  function te(O, J, oe = performance.now()) {
    const ge = l(J);
    if (!ge) return null;
    const ve = {
      x: (Number(O.x) - ge.x) / Math.max(1, ge.w),
      y: (Number(O.y) - ge.y) / Math.max(1, ge.h)
    };
    if (ve.x < 0 || ve.x > 1 || ve.y < 0 || ve.y > 1) return null;
    const I = re(J, ve);
    if (!I) return null;
    const { lon: ae, lat: y } = D(I);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ae / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - y / Math.PI, 0, 1),
      t: Number(oe || 0)
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
    currentViewCamera: b,
    currentViewProjection: v,
    projectDir: F,
    screenToWorldDir: U,
    getUnwrapRect: H,
    projectDirUnwrap: P,
    getStickerFrame: W,
    stickerDirFromFrame: R,
    stickerCornersDir: ee,
    stickerSampleDir: ne,
    stickerCornerOrderSanity: m,
    projectEditorPoints: E,
    projectErpPointToEditor: G,
    frameLocalPointToWorldDir: re,
    erpPointToWorldDir: pe,
    worldDirToFrameLocalPoint: he,
    projectLassoPointsToCurrentView: me,
    projectErpLassoPointsToFrameRect: K,
    screenPos: q,
    screenPosCss: ue,
    screenPosToErpPoint: Pe,
    screenPosToFrameAsErpPoint: te,
    deviceRect: le
  };
}
function IP(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, a, s, l, d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de;
  function q(I, ae) {
    const y = String(I.actionGroupId || I.id || "").trim(), S = H(y, I.layerKind), V = s(y, I.layerKind, S), Y = (V == null ? void 0 : V.centerUv) || U(y, I.layerKind, S), x = n.mode === "unwrap" ? Number((Y == null ? void 0 : Y.u) || 0) : null, M = [], L = n.mode === "frame" ? l() : null, k = L ? c(L) : null;
    for (const fe of S) {
      const be = (fe == null ? void 0 : fe.geometry) || null, _e = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], h = pe(_e, L, k, x).filter((_) => Number.isFinite(_ == null ? void 0 : _.x) && Number.isFinite(_ == null ? void 0 : _.y));
      if (!h.length) continue;
      const z = d(String((fe == null ? void 0 : fe.toolKind) || "pen")), A = Sn[z] || Sn[xr];
      M.push({
        points: h,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((fe == null ? void 0 : fe.size) || 10) * Math.max(0.1, Number((A == null ? void 0 : A.sizeScale) ?? 1)) + 10),
        layerKind: String((fe == null ? void 0 : fe.layerKind) || I.layerKind || "paint")
      });
    }
    const N = he(Y, null, L, k, x);
    if (!N) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ae, fe), fe;
    }
    const B = u(V).map((fe) => he(fe, N.x, L, k, x)).filter((fe) => Number.isFinite(fe == null ? void 0 : fe.x) && Number.isFinite(fe == null ? void 0 : fe.y)).map((fe) => ({ x: Number(fe.x || 0), y: Number(fe.y || 0) }));
    if (B.length < 4) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ae, fe), fe;
    }
    const X = (fe, be) => ({
      x: (Number((fe == null ? void 0 : fe.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((fe == null ? void 0 : fe.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: fe,
      b: be
    }), ie = X(B[0], B[1]), $ = X(B[1], B[2]), se = X(B[2], B[3]), Se = X(B[3], B[0]), Me = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: B,
      edgeMidpoints: [
        { edge: "top", ...ie },
        { edge: "right", ...$ },
        { edge: "bottom", ...se },
        { edge: "left", ...Se }
      ],
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: { x: ie.x, y: ie.y - 30 },
      strokePaths: M,
      visible: !0
    };
    return n._strokeGeomCache.set(ae, Me), Me;
  }
  function ue(I, ae) {
    const y = n.mode === "frame" ? l() : null, S = y ? c(y) : null, V = f(I), Y = n.mode === "unwrap" ? Number((V == null ? void 0 : V.u) || 0) : null, x = he(V, null, y, S, Y), L = m(I).map((B) => he(B, (x == null ? void 0 : x.x) ?? null, y, S, Y)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (!Array.isArray(L) || L.length < 4) {
      const B = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(ae, B), B;
    }
    const k = L.slice(0, 4).map((B) => ({ x: Number((B == null ? void 0 : B.x) || 0), y: Number((B == null ? void 0 : B.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: k.reduce((B, X) => B + Number(X.x || 0), 0) / k.length,
        y: k.reduce((B, X) => B + Number(X.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return n._strokeGeomCache.set(ae, C), C;
  }
  function Pe(I, ae = null, y = null, S = null, V = {}) {
    if (n.mode === "frame") {
      const N = y || l(), C = S || c(N);
      if (!N || !C) return null;
      const B = N ? de(N, I) : null;
      return B ? {
        x: Number(C.x || 0) + Number(B.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(B.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return re(I, ae);
    const Y = 1e-4, x = o().project(I, Y);
    if (!Number.isFinite(x.z) || x.z <= Y && !(V != null && V.clipBehind)) return null;
    const M = r.width, L = r.height, k = Math.max(M, L) * 2;
    return {
      x: Ee(x.x, -k, M + k),
      y: Ee(x.y, -k, L + k),
      z: Math.max(x.z, Y),
      rawZ: x.z,
      clipped: x.z <= Y
    };
  }
  function te(I, ae = []) {
    if (n.mode !== "pano" || ee(I)) return 1;
    const y = ae.map((S) => Number((S == null ? void 0 : S.rawZ) ?? (S == null ? void 0 : S.z))).filter((S) => Number.isFinite(S));
    return y.length ? rP(0.035, 0.2, Math.min(...y)) : 1;
  }
  function O(I) {
    if (W(I) && !me(I)) return { visible: !1 };
    const ae = E(I), y = wn(Number(ae.yaw_deg || 0), Number(ae.pitch_deg || 0)), S = n.mode === "frame" ? l() : null, V = S ? c(S) : null, Y = n.mode === "pano" && (ee(I) || R(I)), x = Y ? { clipBehind: !0 } : null, M = Pe(y, null, S, V, x);
    if (!M) return { visible: !1 };
    const L = v(I), N = Z(I).map((g) => Pe(g, M.x, S, V, x)).filter((g) => Number.isFinite(g == null ? void 0 : g.x) && Number.isFinite(g == null ? void 0 : g.y));
    if (N.length < 4) return { visible: !1 };
    const C = w(L, 0, L.tanY), B = w(L, 0, L.tanY + Math.max(L.tanY * 0.43, 0.053)), X = Pe(C, M.x, S, V, x);
    if (!X) return { visible: !1 };
    const ie = Pe(B, (X == null ? void 0 : X.x) ?? M.x, S, V, x), $ = ((ie == null ? void 0 : ie.x) ?? X.x) - X.x, se = ((ie == null ? void 0 : ie.y) ?? X.y) - X.y, Se = Math.hypot($, se) || 1, Me = {
      x: X.x + $ / Se * 30,
      y: X.y + se / Se * 30
    }, fe = Pe(w(L, 0, L.tanY), M.x, S, V, x), be = Pe(w(L, L.tanX, 0), M.x, S, V, x), _e = Pe(w(L, 0, -L.tanY), M.x, S, V, x), h = Pe(w(L, -L.tanX, 0), M.x, S, V, x);
    if (!fe || !be || !_e || !h) return { visible: !1 };
    const z = [
      M,
      ...N,
      X,
      ie,
      fe,
      be,
      _e,
      h
    ];
    if (Y && !z.some((g) => Number((g == null ? void 0 : g.rawZ) ?? (g == null ? void 0 : g.z)) > 1e-4)) return { visible: !1 };
    const A = te(I, z), _ = [
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
      center: { x: M.x, y: M.y },
      corners: N.map((g) => ({ x: g.x, y: g.y })),
      edgeMidpoints: _,
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: Me,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: A,
      visible: !0
    };
  }
  function J(I) {
    if (t && R(I) && D()) return { visible: !1 };
    if (!le() && (ne(I) || P(I))) return { visible: !1 };
    if (ne(I)) {
      const V = String(I.actionGroupId || I.id || "").trim(), Y = F(V, I.layerKind), x = n._strokeGeomCache.get(Y);
      return x || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), q(I, Y));
    }
    if (P(I)) {
      const V = p(I), Y = n._strokeGeomCache.get(V);
      return Y || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ue(I, V));
    }
    const ae = b(I), y = n._strokeGeomCache.get(ae);
    if (y) return y;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const S = O(I);
    return n._strokeGeomCache.set(ae, S), S;
  }
  function oe(I, ae, y, S = null) {
    const V = [];
    for (let Y = 0; Y <= y; Y += 1) {
      const x = Y / y;
      let M = 0, L = 0;
      ae === 0 ? (M = x, L = 0) : ae === 1 ? (M = 1, L = x) : ae === 2 ? (M = 1 - x, L = 1) : (M = 0, L = 1 - x);
      const k = K(I, M, L), N = n.mode === "unwrap" ? re(k, S) : G(k);
      N && V.push(N);
    }
    return V;
  }
  function ge() {
    const I = [...Array.isArray(i.shots) ? i.shots : []], ae = [...a()].sort((y, S) => Number(y.z_index || 0) - Number(S.z_index || 0));
    return [...I, ...ae];
  }
  function ve() {
    const I = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...a()].sort((y, S) => Number(S.z_index || 0) - Number(y.z_index || 0)), ...I];
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
        getSceneItemGeomCacheKey: b,
        getStickerFrame: v,
        getStrokeGeomCacheKey: F,
        getStrokeGroupCenterUv: U,
        getStrokeGroupStrokes: H,
        isFreeSpaceView: D,
        isRasterObjectItem: P,
        isSceneSticker: W,
        isShotItem: R,
        isStickerItem: ee,
        isStrokeGroupItem: ne,
        paintingShown: le,
        poseOf: E,
        projectDir: G,
        projectDirUnwrap: re,
        projectEditorPoints: pe,
        projectErpPointToEditor: he,
        sceneStickerShown: me,
        stickerCornersDir: Z,
        stickerDirFromFrame: w,
        stickerSampleDir: K,
        worldDirToFrameLocalPoint: de
      } = I);
    },
    projectSceneItemDir: Pe,
    objectGeom: J,
    sampleStickerEdge: oe,
    getCutoutSelectableItemsForDisplay: ge,
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
  let d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G;
  function re(x = n.interaction) {
    const M = String((x == null ? void 0 : x.kind) || "");
    if (M === "paint_stroke" || M === "paint_lasso_fill" || M === "move_stroke_group" || M === "scale_stroke_group" || M === "rotate_stroke_group" || M === "move_raster_object" || M === "scale_raster_object") return !0;
    if (M === "move_multi") {
      const L = Array.isArray(x == null ? void 0 : x.strokeSnapshots) && x.strokeSnapshots.length > 0, k = Array.isArray(x == null ? void 0 : x.rasterSnapshots) && x.rasterSnapshots.length > 0;
      return L || k;
    }
    return !1;
  }
  function pe() {
    var M, L, k, N;
    let x = null;
    try {
      const C = v(), B = ((N = (k = (L = (M = n.paintEngine) == null ? void 0 : M.getErpTarget) == null ? void 0 : L.call(M, C)) == null ? void 0 : k.displayPaint) == null ? void 0 : N.canvas) || null;
      B && (x = {
        source: B,
        revision: `${F()}:${he()}`
      });
    } catch {
      x = null;
    }
    return x;
  }
  function he() {
    var N, C, B, X, ie, $, se;
    const x = n.interaction, M = String((x == null ? void 0 : x.kind) || "");
    if (!re(x)) return "";
    if (M === "paint_stroke" || M === "paint_lasso_fill") {
      const Se = ((N = x == null ? void 0 : x.stroke) == null ? void 0 : N.geometry) || null, Me = String(((C = x == null ? void 0 : x.stroke) == null ? void 0 : C.layerKind) || ""), fe = ((B = Se == null ? void 0 : Se.rawPoints) == null ? void 0 : B.length) ?? ((X = Se == null ? void 0 : Se.points) == null ? void 0 : X.length) ?? 0, be = String((x == null ? void 0 : x._livePreviewToken) || "");
      return `_${Me || "paint"}_${M}_live${be}_${fe}_${n.livePaintInteractionRevision}`;
    }
    const L = String(((ie = x == null ? void 0 : x.item) == null ? void 0 : ie.actionGroupId) || ""), k = String((($ = x == null ? void 0 : x.item) == null ? void 0 : $.rasterObjectId) || ((se = x == null ? void 0 : x.item) == null ? void 0 : se.id) || "");
    return `_${M}_${L || k || "active"}_${n.livePaintInteractionRevision}`;
  }
  function me(x, M = null) {
    const L = String((x == null ? void 0 : x.rasterDataUrl) || "").trim();
    if (!L) return null;
    const k = s.get(L);
    if (k)
      return k.complete || k.width || k.naturalWidth, k;
    const N = new Image();
    return N.onload = () => {
      typeof M == "function" && M();
    }, N.src = L, s.set(L, N), N;
  }
  function Z(x) {
    const M = String((x == null ? void 0 : x.rasterDataUrl) || "").trim();
    if (!M) return null;
    const L = a.get(M);
    if (L) return L.ready ? L : null;
    const k = me(x, () => {
      const se = a.get(M);
      se && (se.ready = !1), le({ localOnly: !0 });
    });
    if (!k || !(k.complete || k.width || k.naturalWidth)) return null;
    const N = Number(k.naturalWidth || k.width || 0), C = Number(k.naturalHeight || k.height || 0);
    if (N < 1 || C < 1) return null;
    const B = un({ label: "editor.image-pixels" });
    B.width = N, B.height = C;
    const X = B.getContext("2d", { willReadFrequently: !0 });
    if (!X) return null;
    X.clearRect(0, 0, N, C), X.drawImage(k, 0, 0, N, C);
    const ie = X.getImageData(0, 0, N, C).data, $ = { canvas: B, width: N, height: C, alpha: ie, ready: !0 };
    return a.set(M, $), $;
  }
  function w(x, M) {
    if (!x || !M) return null;
    const L = (x == null ? void 0 : x.bbox) || null;
    if (!L) return null;
    const k = (x == null ? void 0 : x.transform) || {}, N = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, C = {
      u: ((Number(M.u || 0) - Number(k.du || 0)) % 1 + 1) % 1,
      v: Number(M.v || 0) - Number(k.dv || 0)
    }, B = D(
      C,
      N,
      Number(k.scale || 1),
      Number(k.rot_deg || 0)
    ), X = Number(L.u1 || 0) - Number(L.u0 || 0), ie = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(X > 1e-6) || !(ie > 1e-6)) return null;
    const $ = G(Number(B.u || 0), Number(L.u0 || 0)) / X, se = (Number(B.v || 0) - Number(L.v0 || 0)) / ie;
    if ($ < 0 || $ > 1 || se < 0 || se > 1) return 0;
    const Se = Z(x);
    if (!Se) return null;
    const Me = Ee(Math.floor($ * Se.width), 0, Se.width - 1), fe = Ee(Math.floor(se * Se.height), 0, Se.height - 1);
    return Number(Se.alpha[(fe * Se.width + Me) * 4 + 3] || 0);
  }
  function K(x, M, L, k = null) {
    if (!(M != null && M.visible) || !Vr(L, M.corners)) return !1;
    const N = k || E(L, performance.now()), C = w(x, N);
    return C === null ? !0 : C > 8;
  }
  function de() {
    var k, N, C, B, X, ie, $, se;
    const x = ((N = (k = n.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : N.call(k, v(!1))) || null, M = Math.max(1, Number(((C = x == null ? void 0 : x.descriptor) == null ? void 0 : C.width) || ((X = (B = x == null ? void 0 : x.displayPaint) == null ? void 0 : B.canvas) == null ? void 0 : X.width) || 2048)), L = Math.max(1, Number(((ie = x == null ? void 0 : x.descriptor) == null ? void 0 : ie.height) || ((se = ($ = x == null ? void 0 : x.displayPaint) == null ? void 0 : $.canvas) == null ? void 0 : se.height) || 1024));
    return { width: M, height: L };
  }
  function q() {
    var fe, be, _e;
    const x = n.interaction;
    if ((x == null ? void 0 : x.kind) !== "paint_stroke") return null;
    const M = (x == null ? void 0 : x.stroke) || null;
    if (!M || String((M == null ? void 0 : M.layerKind) || "") !== "paint" || String((M == null ? void 0 : M.toolKind) || "") !== "eraser") return null;
    const L = f(), k = `${he()}:${L.width}:${L.height}`;
    if (((fe = n._activePaintEraserPreviewInfo) == null ? void 0 : fe.cacheKey) === k)
      return n._activePaintEraserPreviewInfo.value || null;
    const N = rn(M), C = (N == null ? void 0 : N.geometry) || null;
    if (C && String(C.geometryKind || "") !== "lasso_fill") {
      const h = Array.isArray(C.rawPoints) && C.rawPoints.length ? C.rawPoints : Array.isArray(C.points) ? C.points : [];
      C.processedPoints = R(h, N.targetSpace, !0);
    }
    const B = u(L.width, L.height, { readback: !0 });
    if (!ee(B, N, { w: L.width, h: L.height })) return null;
    const X = ((_e = (be = B.ctx) == null ? void 0 : be.getImageData(0, 0, L.width, L.height)) == null ? void 0 : _e.data) || null;
    if (!X) return null;
    let ie = L.width, $ = L.height, se = -1, Se = -1;
    for (let h = 0; h < L.height; h += 1)
      for (let z = 0; z < L.width; z += 1)
        X[(h * L.width + z) * 4 + 3] <= 8 || (z < ie && (ie = z), h < $ && ($ = h), z > se && (se = z), h > Se && (Se = h));
    if (se < ie || Se < $)
      return n._activePaintEraserPreviewInfo = { cacheKey: k, value: null }, null;
    const Me = {
      surface: B,
      bounds: { minX: ie, minY: $, maxX: se, maxY: Se },
      key: `${k}:${ie}:${$}:${se}:${Se}`
    };
    return n._activePaintEraserPreviewInfo = { cacheKey: k, value: Me }, n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Me;
  }
  function ue() {
    n._activePaintEraserPreviewInfo = null, n._liveEraserPreviewCanvasCache = null;
  }
  function Pe(x, M, L) {
    var k, N;
    if (!x) return null;
    if (x.type === "rasterObject" && ((k = x.item) != null && k.bbox)) {
      const C = x.item.bbox, B = ((N = x.item) == null ? void 0 : N.transform) || {}, X = Number(C.u0 || 0) + Number(B.du || 0), ie = Number(C.u1 || 0) + Number(B.du || 0), $ = Number(C.v0 || 0) + Number(B.dv || 0), se = Number(C.v1 || 0) + Number(B.dv || 0);
      return {
        minX: Math.floor((X % 1 + 1) % 1 * M),
        maxX: Math.ceil((ie % 1 + 1) % 1 * M),
        minY: Math.floor(Ee($, 0, 1) * L),
        maxY: Math.ceil(Ee(se, 0, 1) * L),
        wraps: ie - X >= 1 || X < 0 || ie > 1
      };
    }
    if (x.type === "strokeGroup") {
      const C = H(x.actionGroupId, "paint"), B = c(x.actionGroupId, "paint", C);
      if (!B) return null;
      const X = B.centerUv.u - B.halfW, ie = B.centerUv.u + B.halfW, $ = B.centerUv.v - B.halfH, se = B.centerUv.v + B.halfH;
      return {
        minX: Math.floor((X % 1 + 1) % 1 * M),
        maxX: Math.ceil((ie % 1 + 1) % 1 * M),
        minY: Math.floor(Ee($, 0, 1) * L),
        maxY: Math.ceil(Ee(se, 0, 1) * L),
        wraps: ie - X >= 1 || X < 0 || ie > 1
      };
    }
    return null;
  }
  function te(x, M, L) {
    if (!x || !M) return !1;
    const k = (B) => B.wraps ? [
      { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY, wraps: !1 },
      { minX: B.minX, maxX: L - 1, minY: B.minY, maxY: B.maxY, wraps: !1 }
    ] : [B], N = k(x), C = k(M);
    return N.some((B) => C.some((X) => !(B.maxX < X.minX || X.maxX < B.minX || B.maxY < X.minY || X.maxY < B.minY)));
  }
  function O(x, M, L) {
    var g, j, ce, Q, we, xe, T;
    if (!x || !M || !((g = L == null ? void 0 : L.surface) != null && g.canvas) || M.type !== "rasterObject") return x;
    const k = Number(x.width || L.surface.canvas.width || 0), N = Number(x.height || L.surface.canvas.height || 0);
    if (k < 1 || N < 1) return x;
    const C = Pe(M, k, N);
    if (C && !te(C, L.bounds, k)) return x;
    const B = String(((j = M.item) == null ? void 0 : j.id) || M.id || ""), X = ((ce = M.item) == null ? void 0 : ce.transform) || {}, ie = `${L.key}:${B}:${k}:${N}:${Number(X.du || 0).toFixed(6)}:${Number(X.dv || 0).toFixed(6)}:${Number(X.rot_deg || 0).toFixed(3)}:${Number(X.scale || 1).toFixed(4)}`, $ = n._liveEraserPreviewCanvasCache instanceof Map ? n._liveEraserPreviewCanvasCache : n._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if ($.has(ie)) return $.get(ie);
    const se = Ee(Math.floor(Number(((Q = L.bounds) == null ? void 0 : Q.minX) || 0)), 0, Math.max(0, k - 1)), Se = Ee(Math.floor(Number(((we = L.bounds) == null ? void 0 : we.minY) || 0)), 0, Math.max(0, N - 1)), Me = Ee(Math.ceil(Number(((xe = L.bounds) == null ? void 0 : xe.maxX) || 0)), se, Math.max(0, k - 1)), fe = Ee(Math.ceil(Number(((T = L.bounds) == null ? void 0 : T.maxY) || 0)), Se, Math.max(0, N - 1)), be = Math.max(1, Me - se + 1), _e = Math.max(1, fe - Se + 1), h = u(k, N, { readback: !0 });
    h.ctx.clearRect(0, 0, k, N), h.ctx.drawImage(x, 0, 0);
    const z = h.ctx.getImageData(se, Se, be, _e);
    h.ctx.save(), h.ctx.globalCompositeOperation = "destination-out", h.ctx.drawImage(L.surface.canvas, 0, 0), h.ctx.restore();
    const A = h.ctx.getImageData(se, Se, be, _e);
    let _ = !1;
    for (let ye = 0; ye < be * _e; ye += 1) {
      const Ce = z.data[ye * 4 + 3], Oe = A.data[ye * 4 + 3];
      if (Ce > Oe) {
        _ = !0;
        break;
      }
    }
    return _ ? ($.size > 64 && $.clear(), $.set(ie, h.canvas), h.canvas) : ($.set(ie, x), x);
  }
  function J(x, M = null) {
    const L = W((x == null ? void 0 : x.rasterObjectId) || (x == null ? void 0 : x.id) || ""), k = (x == null ? void 0 : x.bbox) || null;
    if (!L || !k) return null;
    const N = me(x, M);
    if (!N || !(N.complete || N.width || N.naturalWidth)) return null;
    const { width: C, height: B } = de(), X = (x == null ? void 0 : x.transform) || {}, ie = [
      L,
      C,
      B,
      k.u0,
      k.v0,
      k.u1,
      k.v1,
      X.du,
      X.dv,
      X.rot_deg,
      X.scale,
      U()
    ].join(":"), $ = o.get(ie);
    if ($) return $;
    o.size > 64 && o.clear();
    const se = un({ label: "editor.raster-erp" });
    se.width = C, se.height = B;
    const Se = se.getContext("2d");
    if (!Se) return null;
    const Me = Number(k.u0 || 0) * C, fe = Number(k.v0 || 0) * B, be = Math.max(1, (Number(k.u1 || 0) - Number(k.u0 || 0)) * C), _e = Math.max(1, (Number(k.v1 || 0) - Number(k.v0 || 0)) * B), h = Me + be * 0.5 + Number(X.du || 0) * C, z = fe + _e * 0.5 + Number(X.dv || 0) * B, A = Number(X.rot_deg || 0) * pr, _ = Math.max(0.01, Number(X.scale || 1));
    for (const g of [-C, 0, C])
      Se.save(), Se.translate(h + g, z), Se.rotate(A), Se.scale(_, _), Se.drawImage(N, -be * 0.5, -_e * 0.5, be, _e), Se.restore();
    return o.set(ie, se), se;
  }
  async function oe(x, M) {
    const L = await new Promise((X) => x.toBlob(X, "image/png")), k = new FormData();
    k.append("image", L, M), k.append("type", "input"), k.append("subfolder", "panorama_stickers"), k.append("overwrite", "1");
    const N = await t.fetchApi("/upload/image", { method: "POST", body: k });
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
  let ge = null, ve = !1;
  function I() {
    if (r) return !1;
    const x = Uf(l.painting), { width: M, height: L } = p();
    return $1(l.painting_layer, { paintCount: x.totalPaintCount, maskCount: x.totalMaskCount, width: M, height: L, nodeId: String(i.id ?? "0") });
  }
  function ae() {
    const x = String(i.id ?? "0"), M = Ua.get(x);
    if (ve && M) return M;
    const L = (async () => {
      var C, B, X, ie, $, se, Se, Me, fe, be, _e, h;
      const k = F(), N = Uf(l.painting);
      if (N.totalPaintCount <= 0 && N.totalMaskCount <= 0) {
        l.painting_layer !== null && (l.painting_layer = null, ge = k, d());
        return;
      }
      if (ge !== k && !ve) {
        ve = !0;
        try {
          ne();
          const z = v(!1), A = ((B = (C = n.paintEngine) == null ? void 0 : C.getErpTarget) == null ? void 0 : B.call(C, z)) || null, _ = ((X = A == null ? void 0 : A.displayPaint) == null ? void 0 : X.canvas) || null, g = ((ie = A == null ? void 0 : A.committedMask) == null ? void 0 : ie.canvas) || null, j = Math.max(1, Number((($ = A == null ? void 0 : A.descriptor) == null ? void 0 : $.width) || (_ == null ? void 0 : _.width) || (g == null ? void 0 : g.width) || 2048)), ce = Math.max(1, Number(((se = A == null ? void 0 : A.descriptor) == null ? void 0 : se.height) || (_ == null ? void 0 : _.height) || (g == null ? void 0 : g.height) || 1024));
          (!_ && N.totalPaintCount > 0 || !g && N.totalMaskCount > 0) && ((!n._paintLayerSyncBlankSurface || Number(((Se = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Se.width) || 0) !== j || Number(((Me = n._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Me.height) || 0) !== ce) && (n._paintLayerSyncBlankSurface = u(j, ce)), n._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, j, ce));
          const Q = _ || N.totalPaintCount > 0 && ((fe = n._paintLayerSyncBlankSurface) == null ? void 0 : fe.canvas) || null, we = g || N.totalMaskCount > 0 && ((be = n._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null;
          if (!Q && !we) return;
          let xe = null, T = null;
          const ye = [];
          if (N.totalPaintCount > 0) {
            xe = await oe(Q, `pano_paint_${x}.png`);
            for (const Ce of z) {
              const Oe = String(Ce || "").trim();
              if (!Oe) continue;
              const Re = ((h = (_e = n.paintEngine) == null ? void 0 : _e.getGroupDisplayCanvas) == null ? void 0 : h.call(_e, Oe)) || null;
              if (!Re) continue;
              const Ae = Oe.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ve = await oe(Re, `pano_group_${x}_${Ae}.png`);
              Ve && ye.push({
                id: Oe,
                actionGroupId: Oe,
                image: Ve
              });
            }
          }
          N.totalMaskCount > 0 && (T = await oe(we, `pano_mask_${x}.png`)), k === F() && (l.painting_layer = {
            paint: xe,
            mask: T,
            groups: ye,
            revision: k
          }, ge = k, d());
        } catch (z) {
          throw z;
        } finally {
          ve = !1;
        }
      }
    })();
    return Ua.set(x, L), L.finally(() => {
      Ua.get(x) === L && Ua.delete(x);
    }), L;
  }
  function y(x) {
    var B;
    const M = ((B = n.paintEngine) == null ? void 0 : B.getMaskDisplayCanvas()) || null;
    if (!M) return x;
    const L = `mask_display:${n.paintEngine.getMaskDisplayRevision()}`, k = x.reduce((X, ie) => Math.max(X, Number((ie == null ? void 0 : ie.zIndex) || 0)), -1), N = (Array.isArray(l.stickers) ? l.stickers : []).reduce((X, ie) => Math.max(X, Number((ie == null ? void 0 : ie.z_index) || 0)), -1), C = Math.max(k, N);
    return x.push({
      id: "mask_display",
      source: M,
      revision: L,
      zIndex: C + 1,
      opacity: 1,
      visible: !0
    }), x;
  }
  function S() {
    var k, N;
    const x = b(!0), M = q(), L = [];
    for (const C of x) {
      if ((C == null ? void 0 : C.type) === "strokeGroup") {
        const B = String(C.actionGroupId || C.id || "");
        if (!B) continue;
        const X = ((N = (k = n.paintEngine) == null ? void 0 : k.getGroupDisplayCanvas) == null ? void 0 : N.call(k, B)) || null;
        if (!X) continue;
        L.push({
          id: `paint_group:${B}`,
          source: X,
          revision: `${m()}:${B}`,
          zIndex: Number((C == null ? void 0 : C.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((C == null ? void 0 : C.type) === "rasterObject") {
        const B = C.item || null, X = W((B == null ? void 0 : B.id) || C.id || "");
        if (!X) continue;
        const ie = J(B, () => le());
        if (!ie) continue;
        const $ = O(ie, C, M), se = (B == null ? void 0 : B.transform) || {};
        L.push({
          id: `raster:${X}`,
          source: $,
          revision: [
            F(),
            (M == null ? void 0 : M.key) || "",
            X,
            Number(se.du || 0).toFixed(6),
            Number(se.dv || 0).toFixed(6),
            Number(se.rot_deg || 0).toFixed(3),
            Number(se.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((C == null ? void 0 : C.z_index) || 0),
          opacity: 1,
          visible: (B == null ? void 0 : B.visible) !== !1
        });
      }
    }
    return y(L);
  }
  function V() {
    return P() ? S().filter((x) => x.visible !== !1).map((x) => ({ id: x.id, media: x.source, revision: x.revision, opacity: x.opacity, zIndex: x.zIndex })) : [];
  }
  function Y() {
    l.painting_layer !== null && (l.painting_layer = null), ge = "";
  }
  return {
    connect(x) {
      ({
        commitState: d,
        createRasterSurface: u,
        ensureGroupFrame: c,
        getActivePaintTargetDescriptor: f,
        getDesiredPaintTargetDescriptor: p,
        getDisplayPaintRevisionKey: m,
        getOrderedDisplayListObjects: b,
        getOrderedPaintGroupIds: v,
        getPaintingCompositeRevisionKey: F,
        getPaintingRevisionKey: U,
        getStrokeGroupStrokes: H,
        inverseTransformErpPointAround: D,
        paintingShown: P,
        parseRasterObjectSelectionId: W,
        processFreehandPoints: R,
        rasterizeStrokeToSurface: ee,
        rebuildPaintEngineIfNeeded: ne,
        requestDraw: le,
        screenPosToErpPoint: E,
        shortestWrappedDelta: G
      } = x);
    },
    getSharedLivePaintSurface: pe,
    getLivePaintRevisionSuffix: he,
    isPaintCompositeInteraction: re,
    hitRasterObjectAt: K,
    invalidateLivePaintPreviewCaches: ue,
    buildRasterObjectEditCanvas: J,
    needsPaintingLayerSync: I,
    syncPaintingLayerAsync: ae,
    invalidatePaintingLayerState: Y,
    buildEditorViewPaintLayers: V
  };
}
function OP(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, a, s;
  function l(te) {
    return !te || typeof te != "object" ? { x: 0, y: 0 } : { x: Number((te == null ? void 0 : te.u) || 0), y: Number((te == null ? void 0 : te.v) || 0) };
  }
  function d(te, O, J, oe = {}) {
    return { ...{
      ...te,
      t: Number((te == null ? void 0 : te.t) || 0),
      widthScale: f(te, "widthScale", 1),
      pressureLike: f(te, "pressureLike", 1)
    }, ...oe, u: O, v: J };
  }
  function u(te, O = !1) {
    return O ? 12e-4 : 18e-4;
  }
  function c(te, O, J = !1) {
    if (!Array.isArray(te) || !te.length) return [];
    const oe = String((O == null ? void 0 : O.kind) || "") === "ERP_GLOBAL", ge = /* @__PURE__ */ new WeakMap();
    if (oe) {
      let k = null;
      te.forEach((N) => {
        const C = Number((N == null ? void 0 : N.u) || 0), B = Number((N == null ? void 0 : N.v) || 0), X = (C % 1 + 1) % 1, ie = k == null ? X : k + s(X, (k % 1 + 1) % 1);
        ge.set(N, { x: ie, y: B }), k = ie;
      });
    }
    const ve = (k) => !k || typeof k != "object" ? { x: 0, y: 0 } : ge.get(k) || l(k), I = (k, N, C, B = {}) => {
      const X = oe ? (Number(N) % 1 + 1) % 1 : Number(N), ie = d(k, X, C, B);
      return ge.set(ie, { x: Number(N), y: Number(C) }), ie;
    }, ae = (k, N, C) => {
      const B = ve(k), X = ve(N);
      return I(k, Rn(B.x, X.x, C), Rn(B.y, X.y, C), {
        t: Rn(Number((k == null ? void 0 : k.t) || 0), Number((N == null ? void 0 : N.t) || 0), C),
        widthScale: Rn(f(k, "widthScale", 1), f(N, "widthScale", 1), C),
        pressureLike: Rn(f(k, "pressureLike", 1), f(N, "pressureLike", 1), C)
      });
    };
    if (te.length === 1) {
      const k = ve(te[0]);
      return [I(te[0], k.x, k.y)];
    }
    const y = u(O, J), S = (k, N) => {
      const C = [0];
      for (let fe = 1; fe < k.length; fe += 1) {
        const be = ve(k[fe - 1]), _e = ve(k[fe]);
        C.push(C[fe - 1] + Math.hypot(_e.x - be.x, _e.y - be.y));
      }
      const B = C[C.length - 1] || 0;
      if (B <= 1e-8) {
        const fe = k[0], be = ve(fe);
        return [I(fe, be.x, be.y)];
      }
      const X = [];
      let ie = 0;
      for (let fe = 0; fe <= B + 1e-9; fe += N) {
        for (; ie < C.length - 2 && C[ie + 1] < fe; ) ie += 1;
        const be = C[ie], _e = C[ie + 1], h = Math.max(1e-8, _e - be);
        X.push(ae(k[ie], k[ie + 1], Ee((fe - be) / h, 0, 1)));
      }
      const $ = k[k.length - 1], se = ve($), Se = X[X.length - 1], Me = Se ? ve(Se) : null;
      return (!Me || Math.hypot(Me.x - se.x, Me.y - se.y) > N * 0.35) && X.push(I($, se.x, se.y)), X;
    }, V = (k) => {
      if (!Array.isArray(k) || k.length < 3) return k ? k.slice() : [];
      const N = ve(k[0]), C = [I(k[0], N.x, N.y)];
      for (let ie = 0; ie < k.length - 1; ie += 1) {
        const $ = k[ie], se = k[ie + 1], Se = ve($), Me = ve(se), fe = I(
          $,
          Se.x * 0.75 + Me.x * 0.25,
          Se.y * 0.75 + Me.y * 0.25,
          {
            t: Number($.t || 0) * 0.75 + Number(se.t || 0) * 0.25,
            widthScale: f($, "widthScale", 1) * 0.75 + f(se, "widthScale", 1) * 0.25,
            pressureLike: f($, "pressureLike", 1) * 0.75 + f(se, "pressureLike", 1) * 0.25
          }
        ), be = I(
          $,
          Se.x * 0.25 + Me.x * 0.75,
          Se.y * 0.25 + Me.y * 0.75,
          {
            t: Number($.t || 0) * 0.25 + Number(se.t || 0) * 0.75,
            widthScale: f($, "widthScale", 1) * 0.25 + f(se, "widthScale", 1) * 0.75,
            pressureLike: f($, "pressureLike", 1) * 0.25 + f(se, "pressureLike", 1) * 0.75
          }
        );
        C.push(fe, be);
      }
      const B = k[k.length - 1], X = ve(B);
      return C.push(I(B, X.x, X.y)), C;
    }, Y = S(te, y);
    if (Y.length < 3) return Y;
    const x = J ? 2 : 1;
    let M = Y.slice();
    for (let k = 0; k < x; k += 1) M = V(M);
    return S(M, Math.max(y * 0.75, 55e-5));
  }
  function f(te, O, J = 1) {
    const oe = Number(te == null ? void 0 : te[O]);
    return Number.isFinite(oe) ? Math.max(0, oe) : J;
  }
  function p(te) {
    const O = Number(te == null ? void 0 : te.radiusValue);
    if (Number.isFinite(O) && O > 0) {
      const J = String((te == null ? void 0 : te.radiusModel) || "").trim() || "erp_uv_norm";
      return J === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((te == null ? void 0 : te.size) || 10) * 0.5 / 2048)
      } : {
        model: J,
        value: O
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((te == null ? void 0 : te.size) || 10) * 0.5 / 2048)
    };
  }
  function m(te, O, J = {}) {
    const oe = un({ label: "editor.raster-surface" });
    oe.width = Math.max(1, Math.round(te)), oe.height = Math.max(1, Math.round(O));
    const ge = oe.getContext("2d", J.readback ? { willReadFrequently: !0 } : void 0);
    return ge && (ge.clearRect(0, 0, oe.width, oe.height), ge.imageSmoothingEnabled = !0), { canvas: oe, ctx: ge };
  }
  function b() {
    const te = le();
    return `${String(t.paintStrokeRevision)}:${te.width}x${te.height}`;
  }
  function v() {
    const te = le();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${te.width}x${te.height}`;
  }
  function F() {
    const te = i(), O = v();
    return te ? `${O}:${te}` : O;
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
    var te, O;
    t.paintEngineRevisionKey = null, (O = (te = t.paintEngine) == null ? void 0 : te.rebuildCommitted) == null || O.call(te, n), t.paintEngineRevisionKey = b();
  }
  function W() {
    D(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function R({ rebuildPaintEngine: te = !1 } = {}) {
    o(), U(), W(), te && P();
  }
  function ee() {
    o(), H(), W();
  }
  function ne() {
    var oe;
    const te = le(), O = `${te.width}x${te.height}`;
    t.paintEngineDescriptorKey !== O && (t.paintEngine = _u(te), t.paintEngineDescriptorKey = O, t.paintEngineRevisionKey = "");
    const J = b();
    t.paintEngineRevisionKey !== J && (t.paintEngineRevisionKey = J, (oe = t.paintEngine) == null || oe.rebuildCommitted(n));
  }
  function le() {
    const te = Math.max(1, a(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: te,
      height: Math.max(1, Math.round(te * 0.5))
    };
  }
  function E() {
    return le();
  }
  function G(te, O, J, oe, ge = null) {
    const ve = p(te), I = f(O, "widthScale", 1) * f(O, "pressureLike", 1);
    return ve.model === "erp_uv_norm" ? Math.max(0.5, ve.value * J * I) : ve.model === "world_angle" ? ge ? Math.max(0.5, ve.value / Math.max(1e-6, Number(ge.hFOV_deg || 90) * pr) * J * I) : Math.max(0.5, ve.value / (2 * Math.PI) * J * I) : Math.max(0.5, Number((te == null ? void 0 : te.size) || 10) * 0.5 * I);
  }
  function re(te, O, J = {}) {
    const oe = String((O == null ? void 0 : O.layerKind) || "paint"), ge = String((O == null ? void 0 : O.toolKind) || "pen"), ve = J.preview === !0, I = ve ? 0.78 : 1;
    if (te.globalAlpha = ge === "marker" ? 0.7 * I : 1, oe === "mask") {
      te.fillStyle = ve ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (ge === "eraser") {
      te.globalCompositeOperation = "destination-out", te.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ae = String((O == null ? void 0 : O.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (O == null ? void 0 : O.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, y = ve ? Math.max(0.28, Number(ae.a ?? 1) * 0.88) : Math.max(0.12, Number(ae.a ?? 1));
    te.fillStyle = `rgba(${Math.round(Number(ae.r || 0) * 255)}, ${Math.round(Number(ae.g || 0) * 255)}, ${Math.round(Number(ae.b || 0) * 255)}, ${y})`;
  }
  function pe(te, O, J) {
    const oe = Math.max(0.5, Math.min(J, Number((O == null ? void 0 : O.radiusPx) || 0.5)));
    !Number.isFinite(O == null ? void 0 : O.x) || !Number.isFinite(O == null ? void 0 : O.y) || !Number.isFinite(oe) || (te.beginPath(), te.arc(Number(O.x || 0), Number(O.y || 0), oe, 0, Math.PI * 2), te.fill());
  }
  function he(te, O, J, oe, ge = {}) {
    if (!te || !Array.isArray(O) || !O.length) return;
    const ve = Math.max(oe.w, oe.h) * 0.25;
    te.save(), re(te, J, ge);
    const I = (ae) => pe(te, ae, ve);
    if (O.length === 1) {
      I(O[0]), te.restore();
      return;
    }
    for (let ae = 0; ae < O.length - 1; ae += 1) {
      const y = O[ae], S = O[ae + 1];
      if (!y || !S) continue;
      const V = Number(y.x || 0), Y = Number(y.y || 0), x = Number(S.x || 0), M = Number(S.y || 0), L = Math.max(0.5, Math.min(ve, Number(y.radiusPx || 0.5))), k = Math.max(0.5, Math.min(ve, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(V) || !Number.isFinite(Y) || !Number.isFinite(x) || !Number.isFinite(M) || !Number.isFinite(L) || !Number.isFinite(k)) continue;
      const N = x - V, C = M - Y, B = Math.hypot(N, C);
      if (!Number.isFinite(B) || B < 1e-6) {
        I(y);
        continue;
      }
      if (B > Math.max(oe.w, oe.h) * 0.5) continue;
      const X = Math.max(0.5, Math.min(L, k)), ie = Math.max(0.35, Math.min(X * 0.4, 2.25)), $ = Math.max(1, Math.ceil(B / ie));
      for (let se = 0; se <= $; se += 1) {
        const Se = se / $;
        I({
          x: Rn(V, x, Se),
          y: Rn(Y, M, Se),
          radiusPx: Rn(L, k, Se)
        });
      }
    }
    I(O[O.length - 1]), te.restore();
  }
  function me(te, O, J, oe) {
    he(te, O, J, oe, { preview: !1 });
  }
  function Z(te, O, J, oe, ge) {
    var ae, y, S, V;
    if (!te || !Array.isArray(O) || O.length < 3) return;
    const ve = "u", I = "v";
    if (te.save(), String((J == null ? void 0 : J.layerKind) || "") === "mask")
      te.fillStyle = "rgba(255,255,255,1)";
    else if (String((J == null ? void 0 : J.toolKind) || "") === "eraser")
      te.globalCompositeOperation = "destination-out", te.fillStyle = "rgba(0,0,0,1)";
    else {
      const Y = (J == null ? void 0 : J.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      te.fillStyle = `rgba(${Math.round(Number(Y.r || 0) * 255)}, ${Math.round(Number(Y.g || 0) * 255)}, ${Math.round(Number(Y.b || 0) * 255)}, ${Number(Y.a ?? 1)})`;
    }
    te.beginPath(), te.moveTo(Number(((ae = O[0]) == null ? void 0 : ae[ve]) || 0) * oe.w, Number(((y = O[0]) == null ? void 0 : y[I]) || 0) * oe.h);
    for (let Y = 1; Y < O.length; Y += 1)
      te.lineTo(Number(((S = O[Y]) == null ? void 0 : S[ve]) || 0) * oe.w, Number(((V = O[Y]) == null ? void 0 : V[I]) || 0) * oe.h);
    te.closePath(), te.fill(), te.restore();
  }
  function w(te) {
    const O = (te == null ? void 0 : te.geometry) || null;
    return O ? String(O.geometryKind || "") === "lasso_fill" ? Array.isArray(O.points) ? O.points : [] : Array.isArray(O.processedPoints) && O.processedPoints.length ? O.processedPoints : Array.isArray(O.rawPoints) && O.rawPoints.length ? O.rawPoints : Array.isArray(O.points) ? O.points : [] : [];
  }
  function K(te, O) {
    const J = w(te);
    return !Array.isArray(J) || !J.length ? [] : J.map((oe) => ({
      x: Number((oe == null ? void 0 : oe.u) || 0) * Number((O == null ? void 0 : O.w) || 1),
      y: Number((oe == null ? void 0 : oe.v) || 0) * Number((O == null ? void 0 : O.h) || 1),
      radiusPx: G(te, oe, Number((O == null ? void 0 : O.w) || 1), Number((O == null ? void 0 : O.h) || 1))
    }));
  }
  function de(te, O, J = null) {
    var ae, y, S, V;
    if (!(te != null && te.ctx) || !O) return !1;
    const oe = J || { w: Number(((ae = te.canvas) == null ? void 0 : ae.width) || 0), h: Number(((y = te.canvas) == null ? void 0 : y.height) || 0) }, ge = String((O == null ? void 0 : O.toolKind) || "") === "eraser" ? {
      ...O,
      layerKind: "mask",
      toolKind: String(((S = O == null ? void 0 : O.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : O;
    if (String(((V = O == null ? void 0 : O.geometry) == null ? void 0 : V.geometryKind) || "") === "lasso_fill")
      return Z(te.ctx, w(ge), ge, oe), !0;
    const I = K(ge, oe);
    return I.length ? (me(te.ctx, I, ge, oe), !0) : !1;
  }
  function q(te, O, J, oe = 8) {
    const ge = new Uint8Array(O * J), ve = [], I = new Int32Array(O * J), ae = new Int32Array(O * J);
    for (let y = 0; y < J; y += 1)
      for (let S = 0; S < O; S += 1) {
        const V = y * O + S;
        if (ge[V] || te[V] <= oe) continue;
        let Y = 0, x = 0;
        I[x] = S, ae[x] = y, x += 1, ge[V] = 1;
        const M = [];
        let L = S, k = y, N = S, C = y;
        for (; Y < x; ) {
          const B = I[Y], X = ae[Y];
          Y += 1, M.push({ x: B, y: X }), B < L && (L = B), X < k && (k = X), B > N && (N = B), X > C && (C = X);
          const ie = [
            [(B - 1 + O) % O, X],
            [(B + 1) % O, X],
            [B, X - 1],
            [B, X + 1]
          ];
          for (const [$, se] of ie) {
            if (se < 0 || se >= J) continue;
            const Se = se * O + $;
            ge[Se] || te[Se] <= oe || (ge[Se] = 1, I[x] = $, ae[x] = se, x += 1);
          }
        }
        ve.push({ pixels: M, minX: L, minY: k, maxX: N, maxY: C });
      }
    return ve;
  }
  function ue(te, O) {
    const J = [...new Set((Array.isArray(te == null ? void 0 : te.pixels) ? te.pixels : []).map((y) => Number((y == null ? void 0 : y.x) || 0)).filter((y) => Number.isFinite(y)))].sort((y, S) => y - S);
    if (!J.length) return null;
    if (J.length === 1)
      return { startX: J[0], widthPx: 1 };
    let oe = -1, ge = 0;
    for (let y = 0; y < J.length; y += 1) {
      const S = J[y], Y = (y === J.length - 1 ? J[0] + O : J[y + 1]) - S - 1;
      Y > oe && (oe = Y, ge = y);
    }
    const ve = (J[(ge + 1) % J.length] + O) % O;
    let I = 1 / 0, ae = -1 / 0;
    for (const y of J) {
      const S = (y - ve + O) % O;
      I = Math.min(I, S), ae = Math.max(ae, S);
    }
    return {
      startX: ve,
      widthPx: Math.max(1, ae - I + 1)
    };
  }
  function Pe(te, O, J = {}) {
    var S;
    const oe = Number((te == null ? void 0 : te.width) || 0), ge = Number((te == null ? void 0 : te.height) || 0), ve = (S = te == null ? void 0 : te.getContext) == null ? void 0 : S.call(te, "2d");
    if (!ve || oe < 1 || ge < 1) return [];
    const I = ve.getImageData(0, 0, oe, ge), ae = new Uint8Array(oe * ge);
    for (let V = 0; V < ae.length; V += 1) ae[V] = I.data[V * 4 + 3];
    return q(ae, oe, ge, 8).map((V, Y) => {
      const x = ue(V, oe);
      if (!x) return null;
      const M = Number(x.widthPx || 0), L = V.maxY - V.minY + 1, k = Number(x.startX || 0), N = un({ label: "editor.lasso-fill" });
      N.width = M, N.height = L;
      const C = N.getContext("2d");
      if (!C) return null;
      const B = C.createImageData(M, L);
      return V.pixels.forEach(({ x: X, y: ie }) => {
        const $ = (ie * oe + X) * 4, se = (Number(X || 0) - k + oe) % oe, Se = ((ie - V.minY) * M + se) * 4;
        B.data[Se + 0] = I.data[$ + 0], B.data[Se + 1] = I.data[$ + 1], B.data[Se + 2] = I.data[$ + 2], B.data[Se + 3] = I.data[$ + 3];
      }), C.putImageData(B, 0, 0), {
        id: Di("raster"),
        type: "raster_frozen",
        layerKind: O === "mask" ? "mask" : "paint",
        z_index: Number((J == null ? void 0 : J.z_index) || 0) + Y * 1e-3,
        locked: (J == null ? void 0 : J.locked) === !0,
        bbox: {
          u0: 0,
          v0: V.minY / ge,
          u1: M / oe,
          v1: (V.maxY + 1) / ge
        },
        rasterDataUrl: N.toDataURL("image/png"),
        transform: {
          du: k / oe,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(te) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: a,
        shortestWrappedDelta: s
      } = te);
    },
    processFreehandPoints: c,
    createRasterSurface: m,
    getPaintingRevisionKey: b,
    getPaintingCompositeRevisionKey: v,
    getDisplayPaintRevisionKey: F,
    refreshPaintEngineRevisionCache: P,
    markObjectVisualsDirty: W,
    markPaintStrokeVisualsDirty: R,
    markPaintCompositeVisualsDirty: ee,
    rebuildPaintEngineIfNeeded: ne,
    getDesiredPaintTargetDescriptor: le,
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
  function m(ne, le = null) {
    var E;
    if (ne && typeof ne == "object" && !Array.isArray(ne)) return ne;
    if (Array.isArray(ne) && ne.length > 0) {
      const G = ne[0];
      if (G && typeof G == "object" && !Array.isArray(G)) return G;
    }
    if (Array.isArray(le) && le.length > 0) {
      const G = (E = le[0]) == null ? void 0 : E.parsed_state;
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
  function b(ne, le, E) {
    const G = Math.max(1, Number(le || 1)), re = Math.max(1, Number(E || 1)), pe = Ee(Number(ne || 30), 0.1, 179) * pr, he = 2 * Math.atan(Math.tan(pe * 0.5) * (re / G));
    return Ee(he * hi, 0.1, 179);
  }
  function v(ne) {
    const le = String(ne || "").trim();
    if (!le) return null;
    try {
      const E = JSON.parse(le);
      if (!E || typeof E != "object" || String(E.kind || "") !== "pano_sticker_state") return null;
      const G = E.version;
      let re = null;
      if (typeof G == "number" && Number.isInteger(G) ? re = G : typeof G == "string" && /^\d+$/.test(G) && (re = Number.parseInt(G, 10)), re !== 1) return null;
      const pe = E.pose;
      if (!pe || typeof pe != "object") return null;
      const he = Number(pe.yaw_deg), me = Number(pe.pitch_deg), Z = Number(pe.roll_deg), w = Number(pe.hFOV_deg);
      if (![he, me, Z, w].every((ue) => Number.isFinite(ue))) return null;
      let K = ((he + 180) % 360 + 360) % 360 - 180;
      Object.is(K, -0) && (K = 0);
      const de = {
        yaw_deg: K,
        pitch_deg: Ee(me, -89.9, 89.9),
        roll_deg: Z,
        hFOV_deg: Ee(w, 0.1, 179)
      }, q = Number(E.source_aspect);
      return Number.isFinite(q) && q > 0 && (de.source_aspect = q), de;
    } catch {
      return null;
    }
  }
  function F(ne) {
    const le = Number(ne == null ? void 0 : ne.yaw_deg), E = Number(ne == null ? void 0 : ne.pitch_deg), G = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg)), re = Number(ne == null ? void 0 : ne.hFOV_deg), pe = gi(ne);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(le) ? le : 0),
        pitch_deg: Ee(Number.isFinite(E) ? E : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(G) ? G : 0,
        hFOV_deg: Ee(Number.isFinite(re) ? re : 90, 0.1, 179)
      },
      source_aspect: pe
    };
  }
  function U(ne) {
    var me;
    if (!ne || typeof ne != "object") return F(null);
    const le = Number(ne == null ? void 0 : ne.yaw_deg), E = Number(ne == null ? void 0 : ne.pitch_deg), G = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg)), re = Number(ne == null ? void 0 : ne.hFOV_deg), pe = Number(ne == null ? void 0 : ne.vFOV_deg);
    let he = 1;
    if (Number.isFinite(re) && Number.isFinite(pe)) {
      const Z = Ee(re, 0.1, 179) * pr, w = Ee(pe, 0.1, 179) * pr, K = Math.tan(w * 0.5);
      if (Math.abs(K) > 1e-6) {
        const de = Math.tan(Z * 0.5) / K;
        Number.isFinite(de) && de > 0 && (he = de);
      }
    }
    if (ne != null && ne.asset_id && ((me = o == null ? void 0 : o.assets) != null && me[ne.asset_id])) {
      const Z = o.assets[ne.asset_id], w = Number((Z == null ? void 0 : Z.w) || 0), K = Number((Z == null ? void 0 : Z.h) || 0);
      w > 0 && K > 0 && (he = w / K);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(le) ? le : 0),
        pitch_deg: Ee(Number.isFinite(E) ? E : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(G) ? G : 0,
        hFOV_deg: Ee(Number.isFinite(re) ? re : 30, 0.1, 179)
      },
      source_aspect: he
    };
  }
  function H(ne) {
    return t.linkedValue(n, ne);
  }
  function D(ne, le, E) {
    const G = ne && typeof ne == "object" ? {
      yaw_deg: Number(ne.yaw_deg || 0),
      pitch_deg: Number(ne.pitch_deg || 0),
      roll_deg: Number(ne.rot_deg ?? ne.roll_deg ?? 0),
      hFOV_deg: Number(ne.hFOV_deg || 30)
    } : v(le);
    if (G) {
      const he = Number((E == null ? void 0 : E.naturalWidth) || (E == null ? void 0 : E.width) || G.source_aspect || 1), me = Number((E == null ? void 0 : E.naturalHeight) || (E == null ? void 0 : E.height) || 1);
      return {
        yaw_deg: Number(G.yaw_deg || 0),
        pitch_deg: Number(G.pitch_deg || 0),
        hFOV_deg: Number(G.hFOV_deg || 30),
        vFOV_deg: b(G.hFOV_deg, he, me),
        rot_deg: Number(G.roll_deg || 0)
      };
    }
    const re = Number((E == null ? void 0 : E.naturalWidth) || (E == null ? void 0 : E.width) || 1), pe = Number((E == null ? void 0 : E.naturalHeight) || (E == null ? void 0 : E.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: b(30, re, pe),
      rot_deg: 0
    };
  }
  function P() {
    const ne = l(() => {
      Ar(n, "image-loaded");
    }), le = en(n, "external-sticker") ? m(d("pano_sticker_input_pose"), null) : null;
    return Fm(o, Om(n, { pose: le, image: ne }));
  }
  function W() {
    var me;
    const ne = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === "sticker_image") : -1, le = ne >= 0 ? ((me = n.getInputLink(ne)) == null ? void 0 : me.id) ?? null : null, E = l(() => {
      Ar(n, "image-loaded");
    }), G = m(d("pano_sticker_input_pose"), null), re = H("sticker_state"), pe = t.externalStateHash(n, re), he = le == null ? null : D(G, re, E);
    return Em(o, {
      connected: le != null,
      linkId: le,
      stateHash: pe,
      pose: he,
      imageWidth: Number((E == null ? void 0 : E.naturalWidth) || (E == null ? void 0 : E.width) || 0),
      imageHeight: Number((E == null ? void 0 : E.naturalHeight) || (E == null ? void 0 : E.height) || 0)
    });
  }
  function R(ne = "sync") {
    if (a !== "stickers" || i) return;
    const le = n.__panoSceneStateV2 ? P() : W();
    if (le.changed) {
      const E = o.stickers.find(u);
      o.stickers = le.state.stickers, o.active = le.state.active, E && r.selectedId === E.id && !o.stickers.some((G) => G.id === E.id) && (r.selectedId = null, r.selectedIds = []), s(), p(), f();
    }
    c();
  }
  function ee() {
    const ne = Array.isArray(o.stickers) ? o.stickers : [], le = [];
    for (const E of ne)
      u(E) && (E.visible = !1, le.push(E));
    return le;
  }
  return {
    connect(ne) {
      ({
        commitAndRefreshNode: s,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: d,
        isExternalSticker: u,
        requestDraw: c,
        updateSelectionMenu: f,
        updateSidePanel: p
      } = ne);
    },
    computeStickerVFov: b,
    buildCanonicalCutoutStickerState: F,
    buildCanonicalSelectedStickerState: U,
    reconcileExternalStickerFromInputs: R,
    collectExternalStickersForClearAll: ee
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
    Math.abs(Su(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((a, s) => a - e.position[s])) / Math.max(r, 1e-6), o = Math.min(1, n / LP + i / VP);
  return Math.round(Do(TP, DP, o));
}
function zP(e, t, r) {
  const n = RP(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Do(i, t.position[o], n)),
    yaw_deg: Rt(e.yaw_deg + Su(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Do(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Do(e.hFOV_deg, t.hFOV_deg, n),
    distance: Do(e.distance, t.distance, n)
  };
}
function jP(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Su(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
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
  let p, m, b, v, F, U, H, D, P, W = null;
  function R(k, N = null) {
    const C = K();
    H(() => {
      i.viewTransition = HP(C, k, performance.now(), { scale: ge(), end: N });
    }), !i.viewTransition && N && ee(N), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, D(), F({ localOnly: !0, reason: ft.VIEW });
  }
  function ee(k) {
    Z(Pc({ ...me(), moved: k.moved }, k.mode, de())), s.backgroundDirty = !0;
  }
  function ne() {
    i.viewTransition && (i.viewTransition = null, D());
  }
  function le(k, N) {
    R({ ...K(), yaw_deg: k, pitch_deg: N });
  }
  function E() {
    return !c || ue() && !v();
  }
  function G() {
    return i.mode === "pano" && re();
  }
  function re() {
    return u && fv({ sceneLinked: l && !!Ku(a).scene, files: U(), stickers: d.stickers });
  }
  function pe() {
    return i.spaceMode === "6dof" && G();
  }
  function he() {
    var k, N, C;
    return aS((C = (N = (k = t.ui) == null ? void 0 : k.settings) == null ? void 0 : N.getSettingValue) == null ? void 0 : C.call(N, Xm));
  }
  function me() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function Z(k) {
    i.spaceMode = k.mode, i.viewPosition = k.position, i.viewMoved = k.moved;
  }
  function w(k) {
    var C;
    const N = WP(i.spaceMode, i.viewTransition, k);
    if (N !== "keep") {
      if (N === "return") {
        R({ ...K(), position: de(), distance: ((C = J()) == null ? void 0 : C.radius) || Jn }, { mode: k, moved: !1 });
        return;
      }
      ne(), Z(Pc({ ...me(), position: K().position }, k, de())), s.backgroundDirty = !0, D(), F({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function K() {
    var C;
    const k = i.viewMoved ? i.viewDistance : ((C = J()) == null ? void 0 : C.radius) || Jn, N = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: k };
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
  function te(k) {
    return k.visible && to(k.clip, i.frame);
  }
  function O() {
    return Cu(d.camera, i.frame);
  }
  function J() {
    var N;
    const k = p();
    return ((N = k.space ?? k.content) == null ? void 0 : N.sphere) ?? null;
  }
  function oe(k) {
    i.viewPosition = k.position, i.viewYaw = k.yaw_deg, i.viewPitch = k.pitch_deg, i.viewDistance = k.distance, i.viewMoved = !0, s.backgroundDirty = !0, F({ localOnly: !0, reason: ft.VIEW });
  }
  function ge() {
    var k;
    return ((k = J()) == null ? void 0 : k.radius) || Jn;
  }
  function ve() {
    var se;
    const k = p().space, N = m(), C = i.worldSelectedId || i.selectedId, B = N.stickers.findIndex((Se) => Se.id === C), X = B < 0 ? null : {
      sticker: N.stickers[B],
      value: sl(N, i.frame).stickers[B],
      plane: k.stickers.find((Se) => Se.id === C) ?? null,
      item: ((se = k.sticker) == null ? void 0 : se.id) === C && k.sticker.url ? { kind: k.sticker.kind, box: o.sceneBox(k.sticker.url) } : null
    }, ie = b() ? x() : bv(J(), X);
    if (!ie) return;
    const $ = K();
    i.viewDistance = $.distance, i.viewMoved = !0, R(Qh($, ie, n.width, n.height));
  }
  function I(k) {
    return o.pickSurface(L(), k.x, k.y, n.width, n.height);
  }
  function ae(k, N) {
    var C;
    return Nc(k, N, i.viewMoved ? null : (C = J()) == null ? void 0 : C.center, ge());
  }
  function y() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function S(k, N) {
    const C = performance.now(), B = { x: k.x, y: k.y, time: C, key: o.contentRevision(), view: y() };
    if (!qh(W, B)) {
      const ie = I(k);
      W = { ...B, cost: performance.now() - C, hit: ie };
    }
    const X = K();
    oe(Zh(X, ae(X, W.hit), N, ge())), W.view = y(), W.wheelTime = C;
  }
  function V(k, N, C) {
    const B = K();
    i.interaction = k === "orbit" ? { kind: "space_orbit", last: N, pivot: ae(B, I(N)) } : { kind: "space_pan", last: N, depth: Yh(B, ge()) }, P(N), n.setPointerCapture(C);
  }
  function Y(k) {
    return k * 0.2;
  }
  function x() {
    return { center: O().position, radius: Y(ge()) };
  }
  function M(k, N) {
    const { yaw_deg: C, pitch_deg: B } = rm(k.position, N);
    return { ...k, yaw_deg: C, pitch_deg: B };
  }
  function L() {
    return Hu(K(), n.width, n.height, J());
  }
  return {
    connect(k) {
      ({
        editorViewInput: p,
        editorViewSceneState: m,
        isCameraSelected: b,
        isErpCamera: v,
        requestDraw: F,
        sceneFiles: U,
        startAnimation: H,
        syncFloatingViewButtonState: D,
        updateCursor: P
      } = k);
    },
    transitionView: R,
    applyViewTransitionEnd: ee,
    cancelViewTransition: ne,
    turnViewTo: le,
    cameraPreviewShown: E,
    isSpaceView: G,
    hasSpaceContent: re,
    isFreeSpaceView: pe,
    viewControls: he,
    spaceModeState: me,
    applySpaceMode: Z,
    setSpaceMode: w,
    spaceViewState: K,
    spaceOrigin: de,
    hasCamera: q,
    cameraShoots: ue,
    paintingShown: Pe,
    sceneStickerShown: te,
    cutoutCamera: O,
    contentSphere: J,
    setSpaceView: oe,
    spaceScale: ge,
    frameSpaceContent: ve,
    zoomSpaceAt: S,
    startSpaceDrag: V,
    currentSpaceCamera: L,
    cameraFrustumLength: Y,
    cameraSphere: x,
    lookingAt: M
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
  let c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe = { revision: -1, sceneState: null }, ge = null;
  function ve() {
    return ge || (ge = y()), ge;
  }
  function I() {
    ge = null;
  }
  function ae() {
    return oe.sceneState;
  }
  function y() {
    const $ = P(), se = f(), Se = { ...s.assets };
    for (const Q of l ? [] : s.stickers) {
      const we = String((Q == null ? void 0 : Q.asset_id) || "");
      we && !Se[we] && i.has(we) && (Se[we] = { type: "comfy_image", filename: we });
    }
    const Me = l ? s.stickers.map((Q) => re(Q) ? { ...Q, source: { kind: "file", filename: ue(Q) } } : Q) : s.stickers;
    oe.revision !== a.stateRevision && (oe = { revision: a.stateRevision, sceneState: dr({ ...s, stickers: Me, assets: Se, painting: null }) }), l && S(oe.sceneState);
    const fe = sl(oe.sceneState, r.frame), be = he ? H() : null, _e = (Q) => {
      if (l && !Q.visible) return null;
      if (he && le(Q)) return be;
      const we = R(Q);
      return we ? { media: we, revision: W(we) } : null;
    }, h = cm(oe.sceneState, r.frame, s.stickers, { media: _e, paintLayers: se, evaluated: fe }), z = $ && ($ === u || $ === d) ? u.dataset.panoSrc : $, A = ne($) ? { media: $, revision: W($), coverage: Pn(s.coverage), source: z } : null, _ = ee(), g = lv(w(), _, K());
    g.mode !== r.spaceMode && b(), c(g);
    const j = _ ? V(oe.sceneState, fe, _e) : null, ce = G() ? { ...j, ...Y(j) } : null;
    return { background: A, layers: h, space: ce, content: j };
  }
  function S($) {
    const se = new Map(s.stickers.map((Se) => [Se.id, Se.clip]));
    $.scene.clip = { ...s.scene.clip };
    for (const Se of $.stickers) {
      const Me = se.get(Se.id);
      Me && (Se.clip = { ...Me });
    }
  }
  function V($, se, Se) {
    const Me = me(), fe = nm(Me, se.scene), be = fe != null && fe.url ? n.sceneBox(fe.url) : null, _e = be && Ic(fe.kind, be), h = q(), z = pv(h, $, se), A = z != null && z.url ? n.sceneBox(z.url) : null, _ = A ? [{ box: Ic(z.kind, A), value: z.value }] : [], g = Lv($, r.frame, s.stickers, { media: Se, evaluated: se }), j = Oc(gv(se, _e, g, _));
    return {
      evaluated: se,
      sceneUrls: Me ? Me.urls.filter(Boolean) : [],
      scene: fe,
      stickerUrls: hv(h, $),
      sticker: z,
      stickers: g,
      sphere: j
    };
  }
  function Y($) {
    var Se;
    const se = ((Se = $.sphere) == null ? void 0 : Se.radius) || Jn;
    return {
      gizmo: M() ? N() : x($.evaluated),
      grid: r.showGrid && !r.fullscreen ? Av(se) : null,
      lines: m() ? k(se) : []
    };
  }
  function x($) {
    const se = Z(), Se = $.stickers.find((Me) => Me.id === (se == null ? void 0 : se.id));
    return !J(se) || !(Se != null && Se.active) ? null : { mode: r.gizmoMode, transform: Cc(Se) };
  }
  function M() {
    return m() && r.selectedId === dl;
  }
  let L = { revision: -1, span: -1, segments: [] };
  function k($) {
    const se = te();
    (L.revision !== a.stateRevision || L.span !== se) && (L = { revision: a.stateRevision, span: se, segments: Ev(Ov(s, se)) });
    const { segments: Se } = L, Me = Se.length ? [{ segments: Se, color: YM }] : [];
    if (!E()) return Me;
    const fe = M() ? hg : UM;
    return [...Me, { segments: im(F(), p($)), color: fe }];
  }
  function N() {
    return !E() || !M() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Cc({ ...F(), scale: 1 }) };
  }
  function C() {
    const { background: $, layers: se, space: Se } = ve(), Me = t.width, fe = t.height, be = U({ x: 0, y: 0, w: Me, h: fe });
    let _e = !1;
    return !$ && !se.length && !Se ? (n.clear(460551), _e = n.ready) : (n.clear(), _e = !!n.render({
      rect: be,
      camera: Se ? Hu(de(), Me, fe, Se.sphere) : v(),
      background: $,
      layers: se,
      space: Se
    })), Pe(), (r.worldSelectedId || M() || pe()) && O(), _e;
  }
  function B($) {
    const { content: se } = ve();
    return !se || !$.position ? Wo($) : em(Wo($), $.position, D(), se.sphere);
  }
  function X($, se, Se, Me = null) {
    const { background: fe, layers: be, content: _e } = ve();
    if (!fe && !be.length && !_e) return null;
    const h = _e && se.position ? _e : null;
    return n.render({ rect: $, camera: B(se), background: fe, layers: be, space: h, owner: Se, clearColor: Me });
  }
  function ie($) {
    return n.clear(460551), !!n.renderUnwrap({ rect: U($), ...ve() });
  }
  return {
    connect($) {
      ({
        applySpaceMode: c,
        buildEditorViewPaintLayers: f,
        cameraFrustumLength: p,
        cameraShoots: m,
        cancelViewTransition: b,
        currentViewCamera: v,
        cutoutCamera: F,
        deviceRect: U,
        followPortSticker: H,
        frameViewDistance: D,
        getConnectedErpImage: P,
        getMediaRevisionToken: W,
        getStickerImage: R,
        hasSpaceContent: ee,
        isDecodedImageReady: ne,
        isExternalSticker: le,
        isFreeSpaceView: E,
        isSpaceView: G,
        isUploadingSticker: re,
        isWorldMenuShown: pe,
        portVideo: he,
        sceneFiles: me,
        selectedWorldSticker: Z,
        spaceModeState: w,
        spaceOrigin: K,
        spaceViewState: de,
        stickerFiles: q,
        stickerImageKey: ue,
        syncFloatingViewButtonState: Pe,
        timelineSpanFrames: te,
        updateSelectionMenu: O,
        worldStickerEditable: J
      } = $);
    },
    editorViewInput: ve,
    endEditorViewFrame: I,
    editorViewSceneState: ae,
    isCameraSelected: M,
    renderEditorView: C,
    shotViewCamera: B,
    drawEditorViewShot: X,
    renderEditorViewUnwrap: ie
  };
}
function vg(e, t = !1) {
  const r = Ee(gi(e), 0.05, 20), n = t ? 320 : 220;
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
    const W = Math.round(Number(P.clientWidth || n.clientWidth || 0)), R = Math.round(Number(P.clientHeight || n.clientHeight || 0));
    return Math.abs(W - Number(D.width || 0)) <= 1 && Math.abs(R - Number(D.height || 0)) <= 1;
  }
  function b(D, P) {
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
    const R = vg(W, !!i.outputPreviewExpanded);
    l.cameraPreview.width = R.width, l.cameraPreview.height = R.height;
    const ee = window.devicePixelRatio || 1, ne = Math.max(1, R.width * ee), le = Math.max(1, R.height * ee), E = Math.min(1, t.width / ne, t.height / le), G = { width: Math.max(1, Math.floor(ne * E)), height: Math.max(1, Math.floor(le * E)) }, re = [...P].some((me) => me !== ft.VIEW && me !== ft.OVERLAY), pe = !p || p.width !== G.width || p.height !== G.height || re;
    if (D && pe) {
      const me = u({ x: 0, y: t.height - G.height, w: G.width, h: G.height }, W, "camera_preview");
      p = me ? G : null, me && H(me);
    }
    if (!p) {
      l.cameraPreview.ready = !1, l.cameraPreview.label = f() ? "Loading preview" : "Connect ERP image", l.cameraPreview.settled = !1;
      return;
    }
    const he = m(R);
    l.cameraPreview.ready = !0, l.cameraPreview.label = he ? "" : "Loading preview", l.cameraPreview.settled = he && o.pendingStableLayoutFrames <= 0 && o.hasPresentedFrame;
  }
  function v() {
    p = null;
  }
  let F = 0, U = !1;
  function H(D) {
    const P = ++F;
    createImageBitmap(D.canvas, D.x, D.y, D.width, D.height).then((W) => {
      var R;
      if (P !== F || !o.running) {
        W.close();
        return;
      }
      (R = r.getContext("bitmaprenderer")) == null || R.transferFromImageBitmap(W);
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
    drawCutoutOutputPreview: b,
    forgetCameraPreviewFrame: v
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
  let c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe, ge, ve, I, ae, y;
  function S(fe) {
    const be = r.width, _e = r.height, h = ee();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, be, _e), J(), fe && (s.backgroundDirty = !ve(h)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let A = 0; A <= 16; A += 1) {
        const _ = h.x + h.w * A / 16;
        n.beginPath(), n.moveTo(_, h.y), n.lineTo(_, h.y + h.h), n.stroke();
      }
      for (let A = 0; A <= 8; A += 1) {
        const _ = h.y + h.h * A / 8;
        n.beginPath(), n.moveTo(h.x, _), n.lineTo(h.x + h.w, _), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(h.x, h.y + h.h / 2), n.lineTo(h.x + h.w, h.y + h.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const z = h.y + h.h * 0.57;
      n.fillText("Left", h.x + h.w * 0.25, z), n.fillText("Front", h.x + h.w * 0.5, z), n.fillText("Right", h.x + h.w * 0.75, z), n.fillText("Back", h.x + 38, z), n.fillText("Back", h.x + h.w - 38, z);
    }
  }
  function V(fe, be, _e = 1) {
    let h = !1;
    n.strokeStyle = be, n.lineWidth = _e, n.beginPath();
    for (const z of fe) {
      const A = ue(z);
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
    if (n.clearRect(0, 0, be, _e), J(), fe && (s.backgroundDirty = !ge()), i.showGrid && !i.fullscreen && b().space)
      x();
    else if (i.showGrid && !i.fullscreen) {
      for (let z = -180; z <= 180; z += 15) {
        const A = [];
        for (let _ = -89; _ <= 89; _ += 4) A.push(wn(z, _));
        V(A, "#3f3f46", z % 90 === 0 ? 1.3 : 1);
      }
      for (let z = -75; z <= 75; z += 15) {
        const A = [];
        for (let _ = -180; _ <= 180; _ += 4) A.push(wn(_, z));
        V(A, z === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", z === 0 ? 1.5 : 1);
      }
      const h = [
        { name: "Left", dir: wn(-90, 0) },
        { name: "Front", dir: wn(0, 0) },
        { name: "Right", dir: wn(90, 0) },
        { name: "Back", dir: wn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", h.forEach((z) => {
        const A = ue(z.dir);
        A && n.fillText(z.name, A.x, A.y + 24);
      });
    }
  }
  function x() {
    const fe = Hu(y(), r.width, r.height, f()), be = ia(fe, [0, 0, 0], r.width, r.height);
    be && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", be.x, be.y - 12));
  }
  function M(fe, be) {
    const _e = q(fe), h = wn(Number(_e.yaw_deg || 0), Number(_e.pitch_deg || 0)), z = i.mode === "unwrap" ? Pe(h) : null, A = z ? z.x : null, _ = i.mode === "pano" ? 28 : 20, g = [
      I(fe, 0, _, A),
      I(fe, 1, _, A),
      I(fe, 2, _, A),
      I(fe, 3, _, A)
    ];
    Zu(n, g, { selected: be });
  }
  function L(fe, be = []) {
    if (!(!fe || !Array.isArray(be) || be.length < 4)) {
      fe.beginPath(), fe.moveTo(be[0].x, be[0].y);
      for (let _e = 1; _e < 4; _e += 1) fe.lineTo(be[_e].x, be[_e].y);
      fe.closePath();
    }
  }
  function k(fe, be, _e) {
    const h = Array.isArray(fe == null ? void 0 : fe.corners) ? fe.corners : [];
    if (h.length < 4) return;
    const z = Ee(Number((fe == null ? void 0 : fe.visibilityAlpha) ?? 1), 0, 1);
    if (z <= 0.01) return;
    const A = n.globalAlpha;
    n.globalAlpha = A * z;
    const _ = _e ? "rgba(255, 116, 116, 0.96)" : be ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = _e ? "rgba(255, 89, 89, 0.08)" : be ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", j = be ? 3.2 : 2.6;
    L(n, h), n.fillStyle = g, n.fill(), n.strokeStyle = _, n.lineWidth = j, n.stroke(), n.save(), n.strokeStyle = _, n.lineWidth = be ? 3.2 : 2.6, n.lineCap = "round";
    const ce = Array.isArray(fe == null ? void 0 : fe.edgeMidpoints) && fe.edgeMidpoints.length >= 4 ? fe.edgeMidpoints : [
      { edge: "top", x: (h[0].x + h[1].x) * 0.5, y: (h[0].y + h[1].y) * 0.5 },
      { edge: "right", x: (h[1].x + h[2].x) * 0.5, y: (h[1].y + h[2].y) * 0.5 },
      { edge: "bottom", x: (h[2].x + h[3].x) * 0.5, y: (h[2].y + h[3].y) * 0.5 },
      { edge: "left", x: (h[3].x + h[0].x) * 0.5, y: (h[3].y + h[0].y) * 0.5 }
    ], Q = { top: "bottom", right: "left", bottom: "top", left: "right" }, we = be ? 12 : 9;
    ce.forEach((xe) => {
      const ye = ce.find((Ae) => (Ae == null ? void 0 : Ae.edge) === Q[xe == null ? void 0 : xe.edge]) || {
        x: (h[0].x + h[1].x + h[2].x + h[3].x) * 0.25,
        y: (h[0].y + h[1].y + h[2].y + h[3].y) * 0.25
      }, Ce = ye.x - xe.x, Oe = ye.y - xe.y, Re = Math.hypot(Ce, Oe) || 1;
      n.beginPath(), n.moveTo(xe.x, xe.y), n.lineTo(xe.x + Ce / Re * we, xe.y + Oe / Re * we), n.stroke();
    }), n.restore(), n.globalAlpha = A;
  }
  function N(fe, be, _e, h) {
    const z = Ee(Number((be == null ? void 0 : be.visibilityAlpha) ?? 1), 0, 1);
    if (z <= 0.01) return;
    if (Z(fe)) {
      k(be, _e, h);
      return;
    }
    if (w(fe)) {
      const _ = n.globalAlpha;
      n.globalAlpha = _ * R(fe) * z, i.mode === "frame" ? (n.strokeStyle = _e ? "rgba(250, 250, 250, 0.9)" : h ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = _e ? 2 : 1, L(n, be.corners), n.stroke()) : M(fe, _e), n.globalAlpha = _;
      return;
    }
    const A = n.globalAlpha;
    n.globalAlpha = A * z, n.fillStyle = _e ? "rgba(0, 112, 243, 0.24)" : h ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", L(n, be.corners), n.fill(), n.strokeStyle = _e ? "rgba(255, 255, 255, 1)" : h ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = _e ? 2.8 : 1.9, L(n, be.corners), n.stroke(), n.globalAlpha = A;
  }
  function C(fe, be, _e) {
    if (w(fe)) {
      Ym(n, be, { accent: _e });
      return;
    }
    const h = !(Z(fe) && le());
    n.fillStyle = _e, h && be.corners.forEach((z) => {
      n.beginPath(), n.arc(z.x, z.y, 6.5, 0, Math.PI * 2), n.fill();
    }), h && Z(fe) && (n.strokeStyle = _e, n.lineCap = "round", n.lineWidth = 4, be.edgeMidpoints.forEach((z) => {
      var we, xe, T, ye;
      const A = (((we = z.b) == null ? void 0 : we.x) ?? z.x) - (((xe = z.a) == null ? void 0 : xe.x) ?? z.x), _ = (((T = z.b) == null ? void 0 : T.y) ?? z.y) - (((ye = z.a) == null ? void 0 : ye.y) ?? z.y), g = Math.hypot(A, _) || 1, j = A / g, ce = _ / g, Q = 10;
      n.beginPath(), n.moveTo(z.x - j * Q, z.y - ce * Q), n.lineTo(z.x + j * Q, z.y + ce * Q), n.stroke();
    }), n.lineCap = "butt"), K(fe) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(be.rotateStemBase.x, be.rotateStemBase.y), n.lineTo(be.rotateHandle.x, be.rotateHandle.y), n.stroke(), n.fillStyle = _e, n.beginPath(), n.arc(be.rotateHandle.x, be.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function B() {
    var A;
    const fe = i.mode === "frame" ? [] : W(), be = fe.length > 1, _e = l ? F() : D(), h = _e.map((_) => `${String((_ == null ? void 0 : _.id) || "")}:${Z(_) ? "frame" : Number((_ == null ? void 0 : _.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== _e || i._sortedItemsCache.orderKey !== h) && (i._sortedItemsCache = {
      src: _e,
      orderKey: h,
      sorted: [..._e]
    });
    const z = i._sortedItemsCache.sorted;
    for (const _ of z) {
      const g = i.mode !== "frame" && !be && pe(_);
      if (i.mode === "frame" && !g) continue;
      const j = w(_), ce = Z(_), Q = re(_);
      if (!j && !ce || me(_) && !ae(_)) continue;
      const we = de(_);
      if (u !== "stickers" && !we.visible)
        continue;
      const xe = Ee(Number((we == null ? void 0 : we.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const T = ce && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= T, N(_, we, g, Q), g && we.visible) {
        const ye = Q ? "#ff4d4f" : j && E(_) ? "#f59e0b" : "#0070f3", Ce = n.globalAlpha;
        n.globalAlpha = Ce * xe, C(_, we, ye), n.globalAlpha = Ce;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !v() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const _ = i.cutoutPanoFrameVisual, g = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= g, k(_.geom, _.selected, _.locked), _.selected && C(
        _.item,
        _.geom,
        _.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (be) {
      const _ = P(fe);
      if (_ != null && _.visible) {
        const g = c(fe) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(_.corners[0].x, _.corners[0].y);
        for (let j = 1; j < _.corners.length; j += 1) n.lineTo(_.corners[j].x, _.corners[j].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = g, _.corners.forEach((j) => {
          n.beginPath(), n.arc(j.x, j.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      fe.forEach((_) => {
        if (!K(_) && !he(_)) return;
        const g = de(_);
        if (!(g != null && g.visible)) return;
        const j = re(_) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(g.corners[0].x, g.corners[0].y);
        for (let ce = 1; ce < g.corners.length; ce += 1) n.lineTo(g.corners[ce].x, g.corners[ce].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = j, g.corners.forEach((ce) => {
          n.beginPath(), n.arc(ce.x, ce.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((A = i.interaction) == null ? void 0 : A.kind) === "marquee_select") {
      const _ = oe(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(_.x0, _.y0, _.x1 - _.x0, _.y1 - _.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function X(fe) {
    const be = v(), _e = U(be);
    if (!be || !_e)
      return n.clearRect(0, 0, r.width, r.height), fe && o.clear(657930), !1;
    const h = { x: _e.x, y: _e.y, w: _e.w, h: _e.h }, { rect: z, shot: A } = sm(be, _e, { width: r.width, height: r.height }), _ = ie(h);
    if (n.clearRect(0, 0, r.width, r.height), fe) {
      o.clear(657930);
      const g = p(z), j = !!m(g, A, void 0, 657930);
      j || o.clear(1118481, g), s.backgroundDirty = !j;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(h.x, h.y, h.w, h.h, _), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = hg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(h.x + 1, h.y + 1, h.w - 2, h.h - 2, Math.max(0, _ - 1)), n.stroke(), n.restore(), !0;
  }
  function ie(fe) {
    const be = Math.max(1e-6, Number(s.frameCanvasScale || 1));
    return Math.min(a * be, Number((fe == null ? void 0 : fe.w) || 0) * 0.5, Number((fe == null ? void 0 : fe.h) || 0) * 0.5);
  }
  function $() {
    var j, ce;
    if (((j = i.interaction) == null ? void 0 : j.kind) !== "paint_lasso_fill") return;
    const fe = i.interaction.stroke, be = (ce = fe == null ? void 0 : fe.geometry) == null ? void 0 : ce.points;
    let _e;
    if (i.mode === "frame") {
      const Q = v(), we = H(Q);
      _e = te(be, Q, we);
    } else
      _e = O(be);
    if (!Array.isArray(_e) || _e.length < 3) return;
    const h = String((fe == null ? void 0 : fe.layerKind) || "") === "mask", z = (fe == null ? void 0 : fe.color) || { r: 1, g: 0.25, b: 0.25 }, A = Math.round(Number(z.r || 0) * 255), _ = Math.round(Number(z.g || 0) * 255), g = Math.round(Number(z.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(_e[0].x || 0), Number(_e[0].y || 0));
    for (let Q = 1; Q < _e.length; Q++) n.lineTo(Number(_e[Q].x || 0), Number(_e[Q].y || 0));
    n.closePath(), h ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${A},${_},${g},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function se() {
    const fe = i.frameRollOverlayVisual, be = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(fe != null && fe.shot) || be <= 1e-4) return;
    const _e = H(fe.shot);
    if (!_e) return;
    const h = { x: _e.x + _e.w * 0.5, y: _e.y + _e.h * 0.5 }, z = Number(fe.shot.roll_deg ?? fe.shot.rot_deg ?? 0) * pr, A = Math.hypot(_e.w, _e.h) * 0.55, _ = Math.cos(z) * A, g = Math.sin(z) * A;
    n.save(), n.globalAlpha *= be, n.beginPath(), n.rect(_e.x, _e.y, _e.w, _e.h), n.clip(), n.translate(h.x, h.y), n.rotate(z);
    const j = Math.max(12, Math.min(_e.w, _e.h) / 6);
    n.beginPath();
    for (let ce = -A; ce <= A; ce += j)
      n.moveTo(ce, -A), n.lineTo(ce, A);
    for (let ce = -A; ce <= A; ce += j)
      n.moveTo(-A, ce), n.lineTo(A, ce);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(h.x - _, h.y - g), n.lineTo(h.x + _, h.y + g), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Se() {
    return !l || !v() || t && G() || d && !ne() ? 0 : JM;
  }
  function Me() {
    const fe = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (fe <= 1e-4 || !l || i.mode !== "pano") return;
    const be = v(), _e = be ? de(be) : null, h = Array.isArray(_e == null ? void 0 : _e.corners) && _e.corners.length >= 4 ? _e.corners.map((_) => ({ x: Number(_.x || 0), y: Number(_.y || 0) })) : null;
    _e != null && _e.visible && h && (i.cutoutPanoDimCorners = h), be && (_e != null && _e.visible) && h && (i.cutoutPanoFrameVisual = {
      item: be,
      geom: _e,
      selected: pe(be),
      locked: re(be)
    });
    const z = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, A = _e != null && _e.visible ? h : z ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${fe})`, n.beginPath(), n.rect(0, 0, r.width, r.height), A.length >= 4) {
      n.moveTo(A[0].x, A[0].y);
      for (let _ = 1; _ < 4; _ += 1) n.lineTo(A[_].x, A[_].y);
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
        editorViewInput: b,
        getActiveCutoutShot: v,
        getCutoutSelectableItemsForDisplay: F,
        getFrameViewLayout: U,
        getFrameViewRect: H,
        getList: D,
        getMultiSelectionGeom: P,
        getSelectedItems: W,
        getStickerDisplayAlpha: R,
        getUnwrapRect: ee,
        isCameraSelected: ne,
        isErpCamera: le,
        isExternalSticker: E,
        isFreeSpaceView: G,
        isItemLocked: re,
        isItemSelected: pe,
        isRasterObjectItem: he,
        isSceneSticker: me,
        isShotItem: Z,
        isStickerItem: w,
        isStrokeGroupItem: K,
        objectGeom: de,
        poseOf: q,
        projectDir: ue,
        projectDirUnwrap: Pe,
        projectErpLassoPointsToFrameRect: te,
        projectLassoPointsToCurrentView: O,
        rebuildPaintEngineIfNeeded: J,
        rectFromPoints: oe,
        renderEditorView: ge,
        renderEditorViewUnwrap: ve,
        sampleStickerEdge: I,
        sceneStickerShown: ae,
        spaceViewState: y
      } = fe);
    },
    drawGridUnwrap: S,
    drawGridPano: Y,
    drawObjects: B,
    drawFrameViewBackground: X,
    drawLassoOutlineOverlay: $,
    drawFrameRollOverlay: se,
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
    uiState: b,
    viewController: v
  } = e;
  let F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O = () => {
  };
  function J(ie = /* @__PURE__ */ new Set()) {
    le();
    const $ = l.backgroundDirty;
    u && (w(), U($, ie)), i.mode === "frame" ? (l.frameSafeRect = me(), P($)) : i.mode === "unwrap" ? R($) : W($), H(), ne(), q(), ee(), D(), b.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && te(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), u && b.cameraPreview && (b.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const se = pe();
    b.stageStatus = se.status, b.stageStatusDetail = se.detail, se.status === Un ? (c == null || c.removeAttribute("data-stage-ready"), c == null || c.setAttribute("data-stage-loading-kind", se.detail)) : (c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind"));
  }
  function oe(ie = i.interaction) {
    if (m !== "stickers" || i.mode !== "pano") return !1;
    const $ = String((ie == null ? void 0 : ie.kind) || "");
    return $ === "move" || $ === "scale" || $ === "scale_x" || $ === "scale_y" || $ === "rotate" ? !0 : $ === "move_multi" ? Array.isArray(ie == null ? void 0 : ie.stickerSnapshots) && ie.stickerSnapshots.length > 0 : !1;
  }
  function ge() {
    return !!i.interaction || !!p.drag;
  }
  function ve() {
    l.nodePreviewPending = !1, a.__panoLiveStateOverride = f, a.__panoLiveStateVersion = Number(a.__panoLiveStateVersion || 0) + 1, a.__panoLivePaintSurface = re();
  }
  function I(ie = {}) {
    var h, z, A, _, g, j, ce, Q;
    const $ = ie.reason ?? ft.STATE, se = !!ie.localOnly, Se = ie.externalSync === !0, Me = String(ie.cause || ""), fe = String(((h = i.interaction) == null ? void 0 : h.kind) || "");
    (!se || fe === "view" || fe === "pan_frame" || oe() || !!i.viewTransition || Me === "mode" || Me === "frame_view" || Me === "cutout_frame") && (l.backgroundDirty = !0), se && he() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!se || Me === "selection" || Me === "mode" || Me === "cutout_frame") && (ue(), Pe()), ge() ? l.nodePreviewPending = !0 : ve(), Se && ((A = (z = a.__panoDomPreview) == null ? void 0 : z.requestDraw) == null || A.call(z), (_ = a.setDirtyCanvas) == null || _.call(a, !0, !1)), Se && !se && ((j = (g = a.graph) == null ? void 0 : g.setDirtyCanvas) == null || j.call(g, !0, !0), (Q = (ce = t == null ? void 0 : t.canvas) == null ? void 0 : ce.setDirty) == null || Q.call(ce, !0, !0)), d.requestDraw($);
  }
  function ae() {
    const ie = n.getBoundingClientRect(), $ = Math.max(2, Math.round(ie.width)), se = Math.max(2, Math.round(ie.height)), Se = window.devicePixelRatio || 1, Me = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== $ || n.height !== se) && (n.width = $, n.height = se);
    const fe = Fv(ie.width || $, ie.height || se, Se, window.innerWidth || ie.width, window.innerHeight || ie.height);
    return o.resize(fe.width, fe.height), [n.width, n.height, r.width, r.height].join("x") === Me ? !1 : (l.backgroundDirty = !0, l.dirty = !0, u && y(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function y(ie) {
    ie(), d.wake();
  }
  function S() {
    return !!i.viewTransition || !!v.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ge();
  }
  function V(ie = performance.now(), $ = /* @__PURE__ */ new Set()) {
    var be;
    l.nodePreviewPending && !ge() && ve(), $.forEach((_e) => l.reasons.add(_e)), $.size && (l.dirty = !0), [...$].some((_e) => _e !== ft.OVERLAY) && (l.backgroundDirty = !0), K(), l.lastTickTs > 0 ? Math.max(1e-3, (ie - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = ie;
    const se = i.mode === "frame" && ((be = i.interaction) == null ? void 0 : be.kind) === "roll_frame" ? i.interaction : null;
    se != null && se.shot && (i.frameRollOverlayVisual = { shot: se.shot });
    const Se = se ? 1 : 0;
    if (Math.abs(Se - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Se, i.frameRollOverlayStartTs = ie), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Se) > 1e-6) {
      const _e = Ee(
        (ie - Number(i.frameRollOverlayStartTs || ie)) / ZM,
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
    if (Math.abs(Me - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = Me, i.cutoutPanoDimStartTs = ie), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Me) > 1e-6) {
      const _e = Ee(
        (ie - Number(i.cutoutPanoDimStartTs || ie)) / Wf,
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
    if (Math.abs(fe - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = fe, i.cutoutPanoFrameStartTs = ie), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - fe) > 1e-6) {
      const _e = Ee(
        (ie - Number(i.cutoutPanoFrameStartTs || ie)) / Wf,
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
      const _e = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), h = Ee((ie - Number(i.outputPreviewAnimStartTs || 0)) / _e, 0, 1), A = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? nP(h) : iP(h);
      i.outputPreviewAnim = Rn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, A), l.dirty = !0, h >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: _e, done: h } = GP(i.viewTransition, ie);
      if (i.viewPosition = _e.position, i.viewYaw = _e.yaw_deg, i.viewPitch = _e.pitch_deg, i.viewFov = _e.hFOV_deg, i.viewDistance = _e.distance, h) {
        const { end: z } = i.viewTransition;
        i.viewTransition = null, z && F(z), de();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, v.stepInertia(ie) && (i.viewInertia.vx = Number(v.state.inertia.vx || 0), i.viewInertia.vy = Number(v.state.inertia.vy || 0), i.viewInertia.active = !!v.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const _e = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), J(_e);
    }
  }
  function Y(ie) {
    try {
      ie();
    } catch ($) {
      const se = String(($ == null ? void 0 : $.stack) || ($ == null ? void 0 : $.message) || $ || "unknown editor frame error");
      l.tickErrorSignature !== se && (l.tickErrorSignature = se, console.error("[PanoramaStickers] editor frame failed", $)), b.stageStatus = $n, b.stageStatusDetail = "frame", c == null || c.setAttribute("data-stage-ready", ""), c == null || c.removeAttribute("data-stage-loading-kind");
    }
  }
  function x(ie = performance.now(), $ = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const se = nb();
    Y(() => V(ie, $)), rb(se);
  }
  function M() {
    !l.running || !ae() || Y(() => {
      l.dirty = !1, J(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const L = new ResizeObserver(M);
  let k = null;
  function N() {
    k == null || k.removeEventListener("change", C), k = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), k.addEventListener("change", C);
  }
  function C() {
    N(), M();
  }
  function B() {
    O = tb("editor", () => {
      var ie;
      return {
        type: m,
        readOnly: s,
        mode: i.mode,
        interaction: ((ie = i.interaction) == null ? void 0 : ie.kind) ?? null,
        timelineDrag: !!p.drag,
        playing: !!Z.playing
      };
    });
  }
  function X() {
    O(), l.running = !1, d.stop(), L.disconnect(), k.removeEventListener("change", C);
  }
  return {
    connect(ie) {
      ({
        applyViewTransitionEnd: F,
        drawCutoutOutputPreview: U,
        drawCutoutPanoPassepartout: H,
        drawFrameRollOverlay: D,
        drawFrameViewBackground: P,
        drawGridPano: W,
        drawGridUnwrap: R,
        drawLassoOutlineOverlay: ee,
        drawObjects: ne,
        endEditorViewFrame: le,
        getActiveCutoutShot: E,
        getCutoutPanoDimTarget: G,
        getSharedLivePaintSurface: re,
        getStageImageStatus: pe,
        isPaintCompositeInteraction: he,
        measureFrameSafeRect: me,
        playback: Z,
        rebuildPaintEngineIfNeeded: w,
        syncCutoutShot: K,
        syncFloatingViewButtonState: de,
        syncFrameRollKnob: q,
        syncLookAtFrameButtonState: ue,
        syncViewToggleState: Pe,
        updateSelectionMenu: te
      } = ie);
    },
    requestDraw: I,
    syncCanvasSize: ae,
    startAnimation: y,
    editorAnimating: S,
    tick: x,
    stageResizeObserver: L,
    watchPixelRatio: N,
    sampleEditorDiagnostics: B,
    stopRenderLoop: X
  };
}
function Fi(e, t, r, n) {
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
  const c = ((H = t.find((P) => i(e.paintColor, P.color))) == null ? void 0 : H.id) || "", f = !c, p = o(e.customPaintColor), m = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), b = s(e.primaryTool === "paint" ? e.paintTool : e.maskTool), v = e.brushSizes[b] ?? 10, F = l(), U = Array.from({ length: 8 }, (P, W) => e.customPaintHistory[W] || null);
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
    sizeValue: v,
    sizeText: String(v),
    sizeFill: `${Math.max(0, Math.min(100, (v - 1) / 119 * 100))}%`,
    sizeDisabled: F,
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
function rc(e) {
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
const Ji = "erp", iN = ["1:1", "4:3", "3:2", "16:9"];
function _g(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...iN.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: Ji, label: Number(r) === 180 ? "180°" : "360°", active: e === Ji }] : []
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
  cameraDeletable: b = !1,
  erpChoice: v = !1,
  coverage: F = 360
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
        choices: _g(l, { erp: v, coverage: F })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: p.rotate_90, disabled: l === Ji }
    ], m ? b && U.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete }) : U.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? p.lock_open : p.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: p.delete, disabled: !!s }
    );
  return Sg(i.corners, U);
}
const Yf = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function sN({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1, deletable: i = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = n ? Yf.filter((s) => s.cameraTip) : Yf;
  return Sg([...e, ...o], [
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
  let b;
  return p <= f ? b = Math.max(p, 14) : m >= 14 ? b = Math.min(m, f) : b = Math.min(Math.max(p, 14), f), { left: c, top: b };
}
function Sg(e, t) {
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
const wg = "painting";
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
  const p = (U, H, D, P, W, R, { keyable: ee = !0, hideable: ne = !0 } = {}) => {
    const le = (E) => (r == null ? void 0 : r.owner) === U && r.lane === E ? r.frames.map((G) => G + R) : [];
    return {
      id: U,
      label: D,
      icon: P,
      clip: W,
      selected: U === n,
      hideable: ne,
      visible: H.visible,
      keyable: ee,
      open: ee && o.has(U),
      keys: m1(H).map((E) => ({ frame: E.frame + R, full: E.full })),
      selectedFrames: le(null),
      lanes: (ee ? ro(H) : []).map((E) => ({
        key: `${U}:${E}`,
        lane: E,
        label: uN[E],
        frames: H[E].keyframes.map((G) => G.frame + R),
        selectedFrames: le(E)
      }))
    };
  }, m = u ? e.stickers : [], b = m.filter((U) => U.placement === "sky").sort((U, H) => H.z_index - U.z_index), v = m.filter((U) => U.placement === "world"), F = ({ start: U, in: H, duration: D }) => ({ clip: { start: U, end: D === null ? null : U + D }, offset: U - H });
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
      ...[...b, ...v].map((U) => {
        const { clip: H, offset: D } = F(U.clip);
        return p(U.id, U, Mc(U), ze.image, H, D);
      }),
      ...u && (cN(e.painting) || !e.painting_visible) ? [{
        id: wg,
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
        const { clip: U, offset: H } = F(e.scene.clip);
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
    type: b,
    uiState: v
  } = e;
  let F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe, ge, ve, I, ae, y, S = 0;
  function V() {
    v.toolButtons.forEach(($) => {
      const se = $.attr === "data-tool-mode", Se = $.attr === "data-paint-tool", Me = $.attr === "data-mask-tool";
      $.active = se ? $.value === r.primaryTool : Se ? $.key === r.paintTool : Me ? $.key === r.maskTool : !1, $.pressed = $.active ? "true" : $.pressed == null ? null : "false";
    });
  }
  function Y() {
    if (m && Fi(v.toolButtons, "value", "add-camera", { disabled: re() }), b !== "cutout") return;
    const $ = H();
    Fi(v.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: $ ? "Look At Frame" : "Add Frame",
      tip: $ ? "Look at frame" : "Add frame",
      icon: $ ? ze.camera : ze.plus_circle
    });
  }
  function x() {
    const $ = tN({
      spaceView: ue(),
      spaceMode: Ks(r.spaceMode, r.viewTransition),
      readOnly: d,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    v.space && Object.assign(v.space, $.space);
    for (const [se, Se] of Object.entries($.buttons)) Fi(v.floatingButtons, "action", se, Se);
  }
  function M() {
    var Se;
    const $ = nN({ hasShot: !!H(), erp: me(), hidden: re() && !U(), studio: m });
    r.mode === "frame" && $.disabled && (m ? te(H()) : r.mode = "pano"), r.outputPreviewRect = null, v.viewButtons.forEach((Me) => {
      const fe = Me.key === r.mode;
      Me.pressed = fe ? "true" : "false", Me.visible = !(Me.key === "frame" && !f), Me.key === "frame" ? Object.assign(Me, $) : Me.disabled = !1;
    });
    const se = f && r.mode === "frame" ? H() : null;
    v.frameRail.visible = !!se, v.frameRail.disabled = d || (se == null ? void 0 : se.locked) === !0, v.frameRollKnob.visible = !!se && !d && se.locked !== !0, v.frameRollKnob.disabled = d || (se == null ? void 0 : se.locked) === !0, v.frameRollKnob.rollDeg = Number((se == null ? void 0 : se.roll_deg) ?? (se == null ? void 0 : se.rot_deg) ?? 0), v.frameRollKnob.displayValue = Ki(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((Se = r.interaction) == null ? void 0 : Se.kind) === "roll_frame", v.frameRollKnob.armed = !!se && r.altModifier === !0, v.frameRail.rollKnob = v.frameRollKnob, v.frameRail.aspectLabel = se ? Pr(se) : "", v.frameRail.aspectChoices = _g(se ? String(Pr(se)) : null, { erp: m, coverage: p.coverage }), se || (v.frameRail.aspectOpen = !1), v.outputPreviewToggle.visible = b === "cutout" && r.mode !== "frame" && !!H(), f && v.cameraPreview && (v.cameraPreview.visible = r.mode !== "frame" && F(), v.cameraPreview.expanded = !!r.outputPreviewExpanded, v.cameraPreview.settled = v.cameraPreview.settled === !0 && u.pendingStableLayoutFrames <= 0 && u.hasPresentedFrame), x(), K() ? ae(r.pointerPos) : oe(r.mode === "pano" ? "grab" : "default");
  }
  function L() {
    var se;
    const $ = r.mode === "frame" ? H() : null;
    v.frameRollKnob.visible = !!$ && !d && $.locked !== !0, v.frameRollKnob.rollDeg = Number(($ == null ? void 0 : $.roll_deg) ?? ($ == null ? void 0 : $.rot_deg) ?? 0), v.frameRollKnob.displayValue = Ki(v.frameRollKnob.rollDeg), v.frameRollKnob.dragging = ((se = r.interaction) == null ? void 0 : se.kind) === "roll_frame", v.frameRollKnob.armed = !!$ && r.altModifier === !0;
  }
  function k() {
    V();
    const $ = JP({
      editor: r,
      swatches: pl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: sr,
      colorsApproximatelyEqual: Ws,
      rgb01ToHsv: Zc,
      hsv01ToRgb: Jc,
      getBrushPresetIdForTool: D,
      isActiveLassoTool: he
    });
    if (Object.assign(v.paintDock, $), I(), !$.visible) {
      i && (i.hidden = !0);
      return;
    }
    S && (clearTimeout(S), S = 0), o && (!$.colorEnabled && i && !i.hidden && (S = window.setTimeout(() => {
      i.hidden = !0, v.paintDock.colorPopOpen = !1, S = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", $.pickerHueColor), i.style.setProperty("--picker-sat", $.pickerSat), i.style.setProperty("--picker-val", $.pickerVal), i.style.setProperty("--picker-hue", $.pickerHue)), a && (a.style.left = $.pickerSvLeft, a.style.top = $.pickerSvTop), s && (s.style.left = $.pickerHueLeft));
  }
  function N() {
    const $ = O(f && r.mode === "frame" ? H() : ee());
    $ && (r.panelLastValues = {
      yaw_deg: Number($.yaw_deg || 0),
      pitch_deg: Number($.pitch_deg || 0),
      hFOV_deg: Number($.hFOV_deg || (b === "stickers" ? 30 : 90)),
      vFOV_deg: Number($.vFOV_deg || (b === "stickers" ? 30 : 60)),
      rot_deg: Number($.rot_deg || 0),
      roll_deg: Number($.roll_deg || 0),
      aspect_id: Pr($)
    }, C());
  }
  function C() {
    ge(), ve(), X();
  }
  function B() {
    const $ = f && r.mode === "frame" ? H() : null;
    return [...ne(), J(), $].some((se) => de(se) ? Is(se) : q(se) && re() && Is(p.camera));
  }
  function X() {
    if (n) return;
    p.ui_settings = p.ui_settings || {};
    const $ = XP(p.ui_settings);
    if (l) {
      v.sidePanel = ZP({
        coverage: p.coverage,
        uiSettings: $,
        normalizeCoverageValue: Pn
      });
      return;
    }
    const se = ee(), Se = f && r.mode === "frame" ? H() : null, Me = Se || se, fe = Se ? [Se] : ne(), be = Se ? "shot" : le();
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
      }, de(Me) && (r.panelLastValues.opacity = pi(Me, r.frame).opacity * 100);
    }
    const _e = r.panelLastValues || (b === "stickers" || be === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), h = be === "stroke" ? null : Me, z = J(), A = t && (be === "shot" || be === "frame") && pe(), _ = z ? q1(z, r.frame) : A ? { ...h, ...B1(p.camera, r.frame), vFOV_deg: h.vFOV_deg } : de(h) ? r.panelLastValues : h || _e, g = z ? y(z) : !!h && !w(h);
    r.panelWasEnabled = g, Y();
    let j = null;
    if (Se) {
      const xe = G({ item: Se, kind: "shot", label: "Frame" });
      j = {
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
    } else if (b === "stickers" || b === "cutout") {
      const xe = [{
        id: "",
        label: b === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (b === "stickers") {
        const Ce = H();
        Ce && xe.push({ id: Ce.id, label: "Camera", icon: E("frame"), item: Ce, kind: "frame" }), R().forEach((Oe, Re) => {
          var Ye, $e;
          if (!Oe || de(Oe) && !Oe.visible) return;
          const Ae = c ? Mc(Oe) : Z(Oe) ? String(Oe.id || sd) : String((($e = (Ye = p.assets) == null ? void 0 : Ye[Oe.asset_id]) == null ? void 0 : $e.name) || Oe.asset_id || Oe.id), Ve = `${Re + 1}. ${Ae}${Z(Oe) && Pe(Oe) ? " (hidden)" : ""}`, je = G({ item: Oe, label: Ve, kind: "image" });
          xe.push({ id: Oe.id, label: je.label, icon: je.icon, item: Oe, kind: "image" });
        });
      } else
        P().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const Oe = G(Ce);
          xe.push({ id: Ce.item.id, label: Oe.label, icon: Oe.icon, item: Ce.item, kind: Ce.kind });
        });
      const T = (h == null ? void 0 : h.id) || "", ye = z ? { label: Mc(z), icon: ze.globe } : xe.find((Ce) => Ce.id === T) || xe[0];
      j = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: ye.label,
        currentIcon: ye.icon || null,
        items: xe.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === T
        }))
      };
    }
    const ce = [], Q = (xe, T, ye, Ce, Oe) => {
      const Re = Ee(Number(_[xe] || 0), ye, Ce);
      ce.push({
        key: xe,
        label: T,
        min: ye,
        max: Ce,
        step: Oe,
        value: Re,
        displayValue: Ki(Re),
        fillPct: Ee((Re - ye) / Math.max(1e-6, Ce - ye) * 100, 0, 100),
        enabled: g && !d
      });
    }, we = [];
    if (z) {
      for (const [xe, T] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const ye = rc(_[xe]);
        Q(xe, T, -ye, ye, 0.01);
      }
      Q("yaw_deg", "Yaw", -180, 180, 0.1), Q("pitch_deg", "Pitch", -90, 90, 0.1), Q("roll_deg", "Roll", -180, 180, 0.1), Q("scale", "Scale", pg, rc(_.scale), 0.01), Q("opacity", "Opacity", 0, 100, 1);
    } else if (fe.length > 1)
      we.push(`Selected objects: ${fe.length}`), we.push("Multi-selection supports z-order and delete.");
    else {
      const xe = be === "shot" || be === "frame";
      if (A)
        for (const [T, ye] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = rc(_[T]);
          Q(T, ye, -Ce, Ce, 0.01);
        }
      Q("yaw_deg", "Yaw", -180, 180, 0.1), Q("pitch_deg", "Pitch", -90, 90, 0.1), Q(be === "image" || b === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Q("hFOV_deg", "H FOV", 1, 179, 0.1), Q("vFOV_deg", "V FOV", 1, 179, 0.1), xe && ce.forEach((T) => {
        T.enabled = T.enabled && rN(T.key, { erp: me() });
      }), c && !xe && Q("opacity", "Opacity", 0, 100, 1);
    }
    v.sidePanel = oN({
      coverage: p.coverage,
      readOnly: d,
      selectionPicker: j,
      enabled: g,
      selectedKind: z ? "world" : be,
      selectedItems: fe,
      params: ce,
      notes: we,
      uiSettings: $,
      normalizeCoverageValue: Pn
    });
  }
  function ie() {
    const { canUndo: $, canRedo: se } = W();
    Fi(v.toolButtons, "value", "undo", { disabled: !$ }), Fi(v.toolButtons, "value", "redo", { disabled: !se });
  }
  return {
    connect($) {
      ({
        cameraPreviewShown: F,
        cameraShoots: U,
        getActiveCutoutShot: H,
        getBrushPresetIdForTool: D,
        getCutoutInspectorItems: P,
        getHistoryCapabilities: W,
        getList: R,
        getSelected: ee,
        getSelectedItems: ne,
        getSelectedKind: le,
        getSelectionItemIcon: E,
        getSelectionItemLabelData: G,
        hasCamera: re,
        hasSpaceContent: pe,
        isActiveLassoTool: he,
        isErpCamera: me,
        isExternalSticker: Z,
        isItemLocked: w,
        isPaintCursorEnabled: K,
        isSceneSticker: de,
        isShotItem: q,
        isSpaceView: ue,
        isStickerHidden: Pe,
        leaveFrameView: te,
        poseOf: O,
        selectedWorldSticker: J,
        setCanvasCursor: oe,
        syncCutoutShot: ge,
        syncTimeline: ve,
        syncVideoTransportVisibility: I,
        updateCursor: ae,
        worldStickerEditable: y
      } = $);
    },
    syncLookAtFrameButtonState: Y,
    syncFloatingViewButtonState: x,
    syncViewToggleState: M,
    syncFrameRollKnob: L,
    syncPaintUi: k,
    syncSidePanelControls: N,
    updateSidePanel: C,
    inspectorTimed: B,
    syncSidePanelModel: X,
    syncUndoRedoButtons: ie
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
  let b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re;
  function pe() {
    if (!l || o) return;
    const y = me(), S = u.selection, V = S && Z(S.owner);
    if (S) {
      const Y = V ? w(S) : [];
      S.frames = S.frames.filter((x) => Y.some((M) => V[M].keyframes.some((L) => L.frame === x))), S.frames.length || (u.selection = null);
    }
    f.timeline = dN(s, {
      span: y,
      selection: u.selection,
      selectedId: n.worldSelectedId || n.selectedId,
      expanded: u.expanded ?? he(),
      openRows: u.openRows,
      audio: Pe() && f.videoTransport.hasAudio ? { muted: p.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: m(i) !== null || zv(i, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: F(),
      cameraHideable: d,
      stickers: !r,
      scene: a && !!Ku(i).scene,
      sceneLocked: !!t
    }), f.easing = u.selection ? fN(V, w(u.selection), u.selection.frames, K(u.selection.owner)) : null;
  }
  function he() {
    return M1(s, { cameraOnly: r, camera: d });
  }
  function me(y = null) {
    if (t != null && t.frames) return t.frames;
    const S = s.timeline.fps, V = s.stickers.find(H), Y = V ? v() : null, x = Math.max(
      f.videoTransport.ready ? Math.round(Number(f.videoTransport.duration || 0) * S) : 0,
      Y ? wm(V.clip, S, Y.meta) : 0
    );
    return Lh(s, { minimum: Math.round(S * 5), frames: x, openClip: y, camera: r && !t || d });
  }
  function Z(y) {
    return y === "camera" ? F() ? s.camera : null : y === "scene" ? a ? s.scene : null : s.stickers.find((S) => S.id === y) || null;
  }
  function w(y) {
    return y.lane ? [y.lane] : ro(Z(y.owner));
  }
  function K(y) {
    if (y === "camera") return 0;
    const { clip: S } = Z(y);
    return S.start - S.in;
  }
  function de(y) {
    return `${to(y, n.frame)}:${y.start - y.in}`;
  }
  function q(y) {
    const S = Z(y);
    return !!S && S.locked !== !0;
  }
  function ue(y) {
    const S = Math.max(0, Math.round(y));
    if (S === n.frame) return;
    le(), n.frame = S, c.frame.value = S, le();
    const V = [n.selectedId, n.worldSelectedId];
    ee(), D(), V[0] !== n.selectedId || V[1] !== n.worldSelectedId ? re() : U() && E(), G(), ne({ reason: ft.PLAYHEAD });
  }
  function Pe() {
    return p instanceof HTMLVideoElement && !!p.getAttribute("src");
  }
  function te(y) {
    R(), P.seek(y);
  }
  function O() {
    l && P.stop();
  }
  function J() {
    R(), P.toggle();
  }
  function oe() {
    le(), D(), re(), G(), ne();
  }
  function ge() {
    W(), b(), oe();
  }
  function ve() {
    const { selection: y } = u;
    q(y.owner) && (O(), y1(Z(y.owner), w(y), y.frames, n.frame - K(y.owner)), u.selection = null, ge());
  }
  function I(y) {
    const S = no(y);
    if (S === null || S === s.timeline.fps) return;
    O();
    const V = Math.round(n.frame * S / s.timeline.fps);
    z1(s, S), u.selection = null, P.seek(V), ge();
  }
  function ae() {
    const y = m(i);
    y !== null && y !== s.timeline.fps && I(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: b,
        getPortMedia: v,
        hasCamera: F,
        inspectorTimed: U,
        isExternalSticker: H,
        markObjectVisualsDirty: D,
        playback: P,
        pushHistory: W,
        refreshModalVideoSource: R,
        releaseHiddenSelection: ee,
        requestDraw: ne,
        syncCutoutShot: le,
        syncSidePanelModel: E,
        updateSelectionMenu: G,
        updateSidePanel: re
      } = y);
    },
    syncTimeline: pe,
    timelineTimed: he,
    timelineSpanFrames: me,
    timelineOwner: Z,
    selectedLanes: w,
    timelineOffset: K,
    clipView: de,
    timelineEditable: q,
    setTimelineFrame: ue,
    jumpTimelineTo: te,
    stopTimelinePlayback: O,
    togglePlayback: J,
    refreshTimelineEdit: oe,
    commitTimelineEdit: ge,
    deleteSelectedKeyframes: ve,
    changeTimelineFps: I,
    applyVideoTimelineFps: ae
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
  let d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K;
  function de(q) {
    if (!(n || !o)) {
      if (q.type === "seek") {
        if (q.phase === "move") {
          s.scrubFrame = q.frame, t.request("seek");
          return;
        }
        t.cancel(), q.phase === "start" && F(), v.seek(q.frame);
        return;
      }
      if (q.type === "play") {
        me();
        return;
      }
      if (q.type === "mute") {
        Z(), le();
        return;
      }
      if (q.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? he()), s.selection = null, le();
        return;
      }
      if (q.type === "toggle-row") {
        s.openRows.has(q.id) ? s.openRows.delete(q.id) : s.openRows.add(q.id), le();
        return;
      }
      if (q.type === "toggle-visible") {
        if (q.id === wg) i.painting_visible = !i.painting_visible;
        else {
          const ue = re(q.id);
          if (!ue || q.id === "camera" && !a) return;
          ue.visible = !ue.visible;
        }
        H(), f();
        return;
      }
      if (q.type === "select-row") {
        const ue = i.stickers.find((Pe) => Pe.id === q.id);
        if (ue && !ue.visible || q.id === "camera" && !d()) return;
        ue && !to(ue.clip, r.frame) && b(ue.clip.start), (ue == null ? void 0 : ue.placement) === "world" ? P(ue.id) : q.id === "camera" ? R(p()) : R(m().find((Pe) => Pe.id === q.id) || null), ne(), s.selection = null, K(), w(), D();
        return;
      }
      if (q.type === "select-keys") {
        const ue = G(q.owner), Pe = q.frames.map((J) => J - ue), te = s.selection, O = (te == null ? void 0 : te.owner) === q.owner && te.lane === q.lane;
        if (q.additive && O) {
          const J = new Set(te.frames);
          for (const oe of Pe)
            J.has(oe) ? J.delete(oe) : J.add(oe);
          te.frames = [...J].sort((oe, ge) => oe - ge);
        } else
          s.selection = Pe.length ? { owner: q.owner, lane: q.lane, frames: Pe } : null;
        le();
        return;
      }
      if (q.type === "move-keys") {
        const ue = s.selection;
        if (!ue || !E(ue.owner)) return;
        const Pe = re(ue.owner), te = W(ue);
        if (q.phase === "start") {
          ee(), s.drag = { keyframes: te.map((oe) => structuredClone(Pe[oe].keyframes)), frames: ue.frames };
          return;
        }
        const { drag: O } = s;
        if (!(O != null && O.keyframes)) return;
        te.forEach((oe, ge) => {
          Pe[oe].keyframes = structuredClone(O.keyframes[ge]);
        });
        const J = b1(Pe, te, O.frames, q.delta, -G(ue.owner));
        if (ue.frames = O.frames.map((oe) => oe + J), q.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, J ? f() : U();
        return;
      }
      if (q.type === "clip") {
        const ue = q.id === "scene" ? re("scene") : i.stickers.find((J) => J.id === q.id);
        if (!ue || ue.locked) return;
        if (q.phase === "start") {
          ee(), s.drag = { clip: { ...ue.clip }, span: pe(ue.clip) };
          return;
        }
        const { drag: Pe } = s;
        if (!(Pe != null && Pe.clip)) return;
        const te = Pe.clip, O = c(ue.clip);
        if (ue.clip = { ...te }, q.delta && q.mode === "move" ? S1(ue.clip, q.delta) : q.delta && q.mode === "start" ? w1(ue.clip, te.start + q.delta) : q.delta && x1(ue.clip, (te.duration === null ? Pe.span : te.start + te.duration) + q.delta, Pe.span), q.phase !== "end") {
          t.request("timeline"), c(ue.clip) !== O && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, H(), JSON.stringify(ue.clip) !== JSON.stringify(te) ? f() : U();
        return;
      }
      if (q.type === "key-row") {
        if (q.owner === "scene" || !E(q.owner)) return;
        ee(), h1(re(q.owner), r.frame - G(q.owner)), f();
        return;
      }
      if (q.type === "fps") {
        const ue = N1(q.fps);
        if (ue === null || ue === i.timeline.fps || l.timeline.fpsLocked) {
          le();
          return;
        }
        u(ue);
        return;
      }
      if (q.type === "length") {
        const ue = C1(q.length);
        if (ue === void 0 || ue === i.timeline.length) {
          le();
          return;
        }
        ee(), i.timeline.length = ue, f();
        return;
      }
      if (q.type === "easing") {
        const ue = s.selection;
        if (!ue || !E(ue.owner)) return;
        ee(), _1(re(ue.owner), W(ue), ue.frames, q.easing), q.commit ? f() : U();
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
        jumpTimelineTo: b,
        playback: v,
        refreshModalVideoSource: F,
        refreshTimelineEdit: U,
        releaseHiddenSelection: H,
        requestDraw: D,
        selectWorldSticker: P,
        selectedLanes: W,
        setSelectedItem: R,
        stopTimelinePlayback: ee,
        syncFloatingViewButtonState: ne,
        syncTimeline: le,
        timelineEditable: E,
        timelineOffset: G,
        timelineOwner: re,
        timelineSpanFrames: pe,
        timelineTimed: he,
        togglePlayback: me,
        toggleVideoMuted: Z,
        updateSelectionMenu: w,
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
    s || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", a && (l.output_preset = c(Number(l.output_preset || 2048))), i && (l.coverage = Pn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), b(), o.setDirtyCanvas(!0, !0));
  }
  function b() {
    var P;
    if (s) return;
    f(), Kh(l), l.coverage = Pn(l.coverage), Wh(o, l.active);
    const D = Bh(o, l);
    d && !Uh(o, D, String(d.value ?? ""), { rebased: n }) && (d.value = D, (P = d.callback) == null || P.call(d, D));
  }
  function v() {
    l.ui_settings = mP(l.ui_settings), s || b();
  }
  function F() {
    var D;
    s || (b(), (D = o.setDirtyCanvas) == null || D.call(o, !0, !0));
  }
  function U() {
    s || u() && p().catch((D) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", D);
    });
  }
  function H(D = {}) {
    var R, ee, ne, le, E, G, re, pe, he;
    const P = D.syncPreview !== !1, W = D.syncGraph !== !1;
    P && ((ee = (R = o.__panoPreviewNodeRuntime) == null ? void 0 : R.requestDraw) == null || ee.call(R), (le = (ne = o.__panoDomPreview) == null ? void 0 : ne.requestDraw) == null || le.call(ne), (E = o.setDirtyCanvas) == null || E.call(o, !0, !1)), W && ((re = (G = o.graph) == null ? void 0 : G.setDirtyCanvas) == null || re.call(G, !0, !0), (he = (pe = t == null ? void 0 : t.canvas) == null ? void 0 : pe.setDirty) == null || he.call(pe, !0, !0));
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
    commitState: b,
    persistUiSettings: v,
    commitAndRefreshNode: F,
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
  let d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe;
  function ge(Y, x, M = "Clear") {
    return new Promise((L) => {
      l.confirmDialog = {
        visible: !0,
        title: String(Y || ""),
        text: String(x || ""),
        confirmLabel: String(M || "Confirm"),
        resolve: L
      };
    });
  }
  async function ve() {
    var M, L;
    if (n || !await ge(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    o.painting = eo(null), me();
    const x = c();
    if (s === "stickers")
      o.stickers = i ? o.stickers.filter((k) => k.placement === "world" || x.includes(k)) : x, i || (o.assets = {}), r.selectedId = ((M = x[0]) == null ? void 0 : M.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = ((L = x[0]) == null ? void 0 : L.id) || null, w();
    else {
      const k = L1(o.shots, o.active.selected_shot_id);
      o.stickers = x, o.assets = {}, o.shots = k.shots, r.selectedId = k.selectedShotId, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = null, o.active.selected_shot_id = k.selectedShotId, !k.selectedShotId && r.mode === "frame" && (r.mode = "pano"), r.cutoutAspectOpen = !1, w();
    }
    K(), f(), J(), O(), de();
  }
  async function I(Y) {
    var N, C, B, X;
    if (n) return;
    const x = Y === "mask" ? "mask" : "paint", M = x === "mask" ? "Mask" : "Paint", L = U(x);
    if (!(!L.length && !(((N = r.interaction) == null ? void 0 : N.kind) === "draw" && ((C = r.interaction) == null ? void 0 : C.layerKind) === x) || !await ge(
      `Clear ${M}`,
      `This will remove all ${x} strokes in the current node.`,
      `Clear ${M}`
    ))) {
      if (((B = r.interaction) == null ? void 0 : B.kind) === "draw" && ((X = r.interaction) == null ? void 0 : X.layerKind) === x) {
        const ie = m(r.interaction);
        ie && r.paintEngine.cancelActiveStroke(ie), r.interaction = null;
      }
      L.length = 0, o.painting.raster_objects = H().filter((ie) => String((ie == null ? void 0 : ie.layerKind) || "paint") !== x), x === "paint" && (F().length = 0), me(), K(), f(), J(), O(), te(), de();
    }
  }
  function ae() {
    if (n) return;
    const Y = D();
    if (!Y || !E(Y) || W(Y) || i && re(Y)) return;
    let x;
    i ? x = ev(Y, ri("st"), v()) : (x = JSON.parse(JSON.stringify(Y)), x.id = ri("st"), x.yaw_deg = Rt((x.yaw_deg || 0) + 8), x.z_index = v()), o.stickers.push(x), o.active.selected_sticker_id = x.id, r.selectedId = x.id, r.selectedIds = [x.id], pe(), K(), f(), O(), J(), de();
  }
  function y() {
    const Y = q();
    return Y ? (oe(Y) && (ue(), Z1(o, Y.id), u(), pe(), K(), f(), J(), O(), Pe(), de()), !0) : !1;
  }
  function S() {
    var M, L, k, N, C;
    if (n || t) return;
    const Y = P(), x = D();
    if (!(!x && Y.length === 0) && !Y.some((B) => R(B))) {
      if (ue(), Y.length > 1) {
        const B = new Set(Y.filter(($) => G($)).map(($) => String($.actionGroupId || $.id || ""))), X = new Set(Y.filter(($) => ee($)).map(($) => Z($.rasterObjectId || $.id || ""))), ie = new Set(Y.filter(E).map(($) => String($.id || "")));
        B.size > 0 && (o.painting.paint.strokes = (Array.isArray((L = (M = o.painting) == null ? void 0 : M.paint) == null ? void 0 : L.strokes) ? o.painting.paint.strokes : []).filter(($) => !B.has(String(($ == null ? void 0 : $.actionGroupId) || ""))), o.painting.groups = F().filter(($) => !B.has(String(($ == null ? void 0 : $.actionGroupId) || ($ == null ? void 0 : $.id) || ""))), me()), X.size > 0 && (o.painting.raster_objects = H().filter(($) => !X.has(String(($ == null ? void 0 : $.id) || ""))), he()), ie.size > 0 && (o.stickers = (Array.isArray(o.stickers) ? o.stickers : []).filter(($) => ie.has(String(($ == null ? void 0 : $.id) || "")) ? W($) ? (le($) || ($.visible = !1), !0) : !1 : !0), w(), pe()), r.selectedId = null, r.selectedIds = [], K(), f(), J(), O(), de();
        return;
      }
      if (G(x)) {
        const B = String(x.actionGroupId || x.id || "").trim();
        o.painting.paint.strokes = (Array.isArray((N = (k = o.painting) == null ? void 0 : k.paint) == null ? void 0 : N.strokes) ? o.painting.paint.strokes : []).filter((X) => String((X == null ? void 0 : X.actionGroupId) || "").trim() !== B), o.painting.groups = F().filter((X) => String((X == null ? void 0 : X.actionGroupId) || (X == null ? void 0 : X.id) || "").trim() !== B), me(), r.selectedId = null, r.selectedIds = [], K(), f(), J(), O(), de();
        return;
      }
      if (ee(x)) {
        const B = Z(x.rasterObjectId || x.id || "");
        o.painting.raster_objects = H().filter((X) => String((X == null ? void 0 : X.id) || "").trim() !== B), he(), r.selectedId = null, r.selectedIds = [], K(), f(), J(), O(), de();
        return;
      }
      if (a && ne(x)) {
        p();
        return;
      }
      if (s === "stickers" || E(x)) {
        if (W(x)) {
          if (le(x)) return;
          x.visible = !1, pe(), K(), f(), J(), O(), de();
          return;
        }
        o.stickers = o.stickers.filter((B) => B.id !== x.id), w(), pe(), r.selectedId = ((C = b()[0]) == null ? void 0 : C.id) || null, r.selectedIds = r.selectedId ? [r.selectedId] : [], o.active.selected_sticker_id = r.selectedId, K(), f(), J(), O(), de();
        return;
      }
      d();
    }
  }
  function V() {
    r.primaryTool !== "cursor" && (r.primaryTool = "cursor", te(), J());
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
        getList: b,
        getNextStickerZIndex: v,
        getPaintingGroupList: F,
        getPaintingLayerList: U,
        getRasterObjectList: H,
        getSelected: D,
        getSelectedItems: P,
        isExternalSticker: W,
        isItemLocked: R,
        isRasterObjectItem: ee,
        isShotItem: ne,
        isStickerHidden: le,
        isStickerItem: E,
        isStrokeGroupItem: G,
        isUploadingSticker: re,
        markObjectVisualsDirty: pe,
        markPaintCompositeVisualsDirty: he,
        markPaintStrokeVisualsDirty: me,
        parseRasterObjectSelectionId: Z,
        pruneUnusedAssets: w,
        pushHistory: K,
        requestDraw: de,
        selectedWorldSticker: q,
        stopTimelinePlayback: ue,
        syncFloatingViewButtonState: Pe,
        syncPaintUi: te,
        updateSelectionMenu: O,
        updateSidePanel: J,
        worldStickerEditable: oe
      } = Y);
    },
    clearAll: ve,
    clearPaintingLayer: I,
    duplicateSelected: ae,
    deleteSelectedWorldSticker: y,
    deleteSelected: S,
    forceCursorTool: V
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
  let b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K;
  function de(N) {
    return nd(N == null ? void 0 : N.dataTransfer);
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
      Z(), await ge(N);
      return;
    }
    const C = ri("asset"), B = Eo(l, `add:${C}`, async () => {
      try {
        const { image: X } = await Oo(N);
        s.set(C, X);
        const ie = ri("st");
        f.stickers.push({
          id: ie,
          asset_id: C,
          yaw_deg: o.viewYaw,
          pitch_deg: o.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: F(30, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1)),
          rot_deg: 0,
          z_index: P()
        }), pe(f.stickers[f.stickers.length - 1]), D(), K(), w(), G();
        const $ = await ni(N, {
          fetchApi: (Me, fe) => t.fetchApi(Me, fe)
        });
        if (!(Array.isArray(f.stickers) ? f.stickers : []).filter((Me) => String((Me == null ? void 0 : Me.asset_id) || "") === C).length) return;
        f.assets[C] = $, ue(), E(), v(), K(), w(), G();
      } catch (X) {
        delete f.assets[C], s.delete(C);
        const ie = Array.isArray(f.stickers) ? f.stickers : [], $ = ie.filter((se) => String((se == null ? void 0 : se.asset_id) || "") === C);
        throw $.length && (f.stickers = ie.filter((se) => String((se == null ? void 0 : se.asset_id) || "") !== C), $.some((se) => String((se == null ? void 0 : se.id) || "") === String(o.selectedId || "")) && pe(null), K(), w(), G(), v()), X;
      }
    });
    try {
      await B;
    } catch {
    }
  }
  function te() {
    var N;
    d || p !== "stickers" && p !== "cutout" || (N = m == null ? void 0 : m.openImagePicker) == null || N.call(m, "add");
  }
  function O() {
    var N;
    d || !u || (N = m == null ? void 0 : m.openImagePicker) == null || N.call(m, "add-world");
  }
  async function J(N) {
    d || !u || !Yn(N) || (Z(), await ge(N, "world"));
  }
  function oe() {
    const N = { x: r.width / 2, y: r.height / 2 }, C = ee() ? a.pick(H(), N.x, N.y, r.width, r.height) : null;
    return wv(he(), C, U());
  }
  async function ge(N, C = "sky") {
    const B = ri("st"), X = Eo(l, `add:${B}`, async () => {
      const { image: ie } = await Oo(N), $ = {
        yaw_deg: o.viewYaw,
        pitch_deg: o.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: F(30, Number(ie.naturalWidth || ie.width || 1), Number(ie.naturalHeight || ie.height || 1)),
        rot_deg: 0
      }, se = { kind: "file", filename: "" }, Se = C === "world" ? Q1(B, se, oe()) : Ru(B, se, $, P());
      s.set(me(Se), ie), f.stickers.push(Se), C === "world" ? re(B) : pe(Se), D(), K(), w(), G();
      try {
        const Me = await ni(N, {
          fetchApi: (be, _e) => t.fetchApi(be, _e)
        }), fe = f.stickers.find((be) => be.id === B);
        if (!fe) return;
        fe.source = rs(Me), s.set(me(fe), ie), E(), v();
      } catch (Me) {
        throw f.stickers = f.stickers.filter((fe) => fe.id !== B), o.selectedId === B && pe(null), o.worldSelectedId === B && b(), E(), v(), Me;
      } finally {
        K(), w(), G();
      }
    });
    try {
      await X;
    } catch {
    }
  }
  async function ve(N, C) {
    const B = Eo(l, `replace:${C}:${ri("asset")}`, async () => {
      const { image: X } = await Oo(N), ie = await ni(N, {
        fetchApi: (se, Se) => t.fetchApi(se, Se)
      }), $ = f.stickers.find((se) => se.id === C);
      if ($) {
        $.source = rs(ie), $.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const se of [$.size.value, ...$.size.keyframes.map((Se) => Se.value)])
          se.vFOV_deg = F(se.hFOV_deg, Number(X.naturalWidth || X.width || 1), Number(X.naturalHeight || X.height || 1));
        s.set(me($), X), le(), E(), v(), K(), w(), G();
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
    if (!C || !ne(C) || R(C) || !Yn(N)) return;
    if (u) {
      await ve(N, C.id);
      return;
    }
    const B = String(C.id || ""), X = ri("asset"), ie = Eo(l, `replace:${B}:${X}`, async () => {
      var be;
      const $ = (Array.isArray(f.stickers) ? f.stickers : []).find((_e) => String((_e == null ? void 0 : _e.id) || "") === B) || null;
      if (!$ || !ne($) || R($)) return;
      const se = String($.asset_id || ""), Se = se ? rn(((be = f.assets) == null ? void 0 : be[se]) || null) : null, Me = Number($.vFOV_deg || 0), fe = $.crop && typeof $.crop == "object" ? { ...$.crop } : null;
      try {
        const { image: _e } = await Oo(N);
        s.set(X, _e), $.asset_id = X, $.vFOV_deg = F(
          Number($.hFOV_deg || 30),
          Number(_e.naturalWidth || _e.width || 1),
          Number(_e.naturalHeight || _e.height || 1)
        ), $.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, le(), K(), w(), G();
        const h = await ni(N, {
          fetchApi: (A, _) => t.fetchApi(A, _)
        }), z = (Array.isArray(f.stickers) ? f.stickers : []).find((A) => String((A == null ? void 0 : A.id) || "") === B) || null;
        if (!z || String(z.asset_id || "") !== X) return;
        f.assets[X] = h, ue(), E(), v(), K(), w(), G();
      } catch (_e) {
        delete f.assets[X], s.delete(X);
        const h = (Array.isArray(f.stickers) ? f.stickers : []).find((z) => String((z == null ? void 0 : z.id) || "") === B) || null;
        throw h && String(h.asset_id || "") === X && (se && Se && (f.assets[se] = Se), h.asset_id = se, h.vFOV_deg = Me, h.crop = fe ? { ...fe } : null), le(), v(), K(), w(), G(), _e;
      }
    });
    try {
      await ie;
    } catch {
    }
  }
  function ae() {
    var C;
    if (d) return;
    const N = W();
    !N || !ne(N) || R(N) || (C = m == null ? void 0 : m.openImagePicker) == null || C.call(m, "replace");
  }
  async function y() {
    if (d || p !== "stickers") return;
    if (u) {
      await S();
      return;
    }
    const N = f.assets && typeof f.assets == "object" ? f.assets : {}, C = Object.entries(N).filter(([, X]) => {
      const ie = String((X == null ? void 0 : X.type) || "").toLowerCase(), $ = String((X == null ? void 0 : X.value) || "");
      return ie === "dataurl" && $.startsWith("data:image");
    });
    if (!C.length) return;
    let B = !1;
    for (const [X, ie] of C)
      try {
        const $ = String((ie == null ? void 0 : ie.value) || "");
        if (!$) continue;
        const se = await fetch($).then((_e) => _e.blob()), Se = String(se.type || "image/png").split("/")[1] || "png", Me = String((ie == null ? void 0 : ie.name) || `${X}.${Se}`), fe = new File([se], Me, { type: se.type || "image/png" }), be = await ni(fe, {
          fetchApi: (_e, h) => t.fetchApi(_e, h)
        });
        f.assets[X] = {
          ...be,
          w: Number((ie == null ? void 0 : ie.w) || 0),
          h: Number((ie == null ? void 0 : ie.h) || 0)
        }, B = !0;
      } catch {
      }
    B && (v(), G());
  }
  async function S() {
    let N = !1;
    for (const C of f.stickers) {
      const B = C.source.data_url;
      if (B)
        try {
          const X = await fetch(B).then((Se) => Se.blob()), ie = String(X.type || "image/png").split("/")[1] || "png", $ = new File([X], `${C.id}.${ie}`, { type: X.type || "image/png" }), se = await ni($, {
            fetchApi: (Se, Me) => t.fetchApi(Se, Me)
          });
          C.source = rs(se), N = !0;
        } catch {
        }
    }
    N && (v(), G());
  }
  function V(N) {
    p !== "stickers" && p !== "cutout" || d || (N.preventDefault(), q(!0));
  }
  function Y(N) {
    var X;
    if (p !== "stickers" && p !== "cutout" || d) return;
    N.preventDefault(), N.stopPropagation(), i.depth = 0, q(!1);
    const B = Array.from(((X = N.dataTransfer) == null ? void 0 : X.files) || []).find((ie) => Yn(ie));
    B && Pe(B);
  }
  function x(N) {
    p !== "stickers" && p !== "cutout" || d || de(N) && (i.depth += 1, q(!0), N.preventDefault());
  }
  function M(N) {
    p !== "stickers" && p !== "cutout" || d || (!i.active && de(N) && q(!0), i.active && N.preventDefault());
  }
  function L(N) {
    if (p !== "stickers" && p !== "cutout" || d || !i.active) return;
    i.depth = Math.max(0, i.depth - 1);
    const C = Number(N.clientX) <= 0 && Number(N.clientY) <= 0;
    (i.depth === 0 || C) && q(!1);
  }
  function k(N) {
    p !== "stickers" && p !== "cutout" || d || (i.depth = 0, q(!1), de(N) && N.preventDefault());
  }
  return {
    connect(N) {
      ({
        clearWorldSelection: b,
        commitAndRefreshNode: v,
        computeStickerVFov: F,
        contentSphere: U,
        currentSpaceCamera: H,
        forceCursorTool: D,
        getNextStickerZIndex: P,
        getSelected: W,
        isExternalSticker: R,
        isSpaceView: ee,
        isStickerItem: ne,
        markObjectVisualsDirty: le,
        pushHistory: E,
        requestDraw: G,
        selectWorldSticker: re,
        setSelectedItem: pe,
        spaceViewState: he,
        stickerImageKey: me,
        stopTimelinePlayback: Z,
        updateSelectionMenu: w,
        updateSidePanel: K
      } = N);
    },
    addImageStickerFromFile: Pe,
    addImageSticker: te,
    addWorldImageSticker: O,
    addWorldStickerFromFile: J,
    replaceSelectedImageFromFile: I,
    replaceSelectedImage: ae,
    migrateLegacyEmbeddedAssets: y,
    pruneUnusedAssets: ue,
    setDropCue: q,
    onCanvasDragOver: V,
    onCanvasDrop: Y,
    onWindowDragEnter: x,
    onWindowDragOver: M,
    onWindowDragLeave: L,
    onWindowDrop: k
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
    uiState: b
  } = e;
  let v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe, ge, ve, I, ae, y, S = a;
  function V(_, g) {
    var Q;
    const j = (Q = R().space) == null ? void 0 : Q.gizmo;
    if (re() && j && y("hover", g) !== null && y("down", g))
      return i.interaction = { kind: "world_gizmo", camera: !0, mode: j.mode, start: j.transform, base: W(), changed: !1 }, r.setPointerCapture(_.pointerId), ve(g), !0;
    const ce = im(W(), F(ue()));
    return Iv(P(), ce, g, r.width, r.height) ? (re() || (q(se()), ae(), I(), K()), i.interaction = { kind: "world_select" }, r.setPointerCapture(_.pointerId), !0) : !1;
  }
  function Y() {
    if (s || m !== "cutout") return;
    const _ = se();
    if (_) {
      q(_), i.mode = "pano", n && pe() ? oe(Qh(Z(Pe(), _.position), H(), r.width, r.height)) : ge(Rt(Number(_.yaw_deg || 0)), Ee(Number(_.pitch_deg || 0), -89.9, 89.9)), ae(), I(), K({ cause: "cutout_frame" });
      return;
    }
    const g = fh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Rt(Number(i.viewYaw || 0)),
      pitchDeg: Number(i.viewPitch || 0),
      viewFovDeg: Number(i.viewFov || 90)
    });
    c.shots = [g], q(g), ee(), i.mode = "pano", w(), D(), ae(), I(), K({ cause: "cutout_frame" });
  }
  function x() {
    s || !f || le() || (te(), c.camera = G1(Pe()), ie(), q(se()), ee(), w(), D(), ae(), I(), K({ cause: "cutout_frame" }));
  }
  function M() {
    te(), c.camera = null, q(null), ie(), w(), D(), ae(), I(), K({ cause: "cutout_frame" });
  }
  function L(_, g) {
    f && he(_) && (c.camera.projection = g === Ji ? "erp" : "perspective", g === Ji) || C(_, g);
  }
  function k() {
    s || m !== "cutout" || (c.shots = [], i.selectedId = null, i.selectedIds = [], i.mode === "frame" && (i.mode = "pano"), i.cutoutAspectOpen = !1, c.active.selected_shot_id = null, w(), D(), ae(), I(), K());
  }
  function N(_, g) {
    const j = l.frameSafeRect;
    if (!_ || !j || i.mode !== "frame") return !1;
    const ce = Xc * fi(j, _), Q = Mu(ku(j, g), ce);
    return _.hFOV_deg = Q.hFOV_deg, _.vFOV_deg = Q.vFOV_deg, !0;
  }
  function C(_, g) {
    if (!_ || _.locked === !0) return;
    const j = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, ce = (() => {
      const T = String(_.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(T)) {
        const [Oe, Re] = T.split(":").map((Ae) => Number(Ae));
        if (Number.isFinite(Oe) && Number.isFinite(Re)) return Oe >= Re;
      }
      const ye = Number(_.hFOV_deg || 64), Ce = Number(_.vFOV_deg || 40);
      return Math.abs(ye - Ce) > 1e-6 ? ye >= Ce : gi(_) >= 1;
    })();
    let [Q, we] = j[String(g)] || j["1:1"];
    Q >= we !== ce && ([Q, we] = [we, Q]);
    const xe = Q / we;
    if (!N(_, xe)) {
      const T = Ee(Number(_.vFOV_deg || 40), 1, 179);
      _.vFOV_deg = T, _.hFOV_deg = es(T, xe);
    }
    _.aspect_id = `${Q}:${we}`;
  }
  function B(_, g, j) {
    if (!_ || _.locked === !0) return !1;
    const ce = oa(g, j);
    if (!ce) return !1;
    const Q = ce.ratio;
    if (!N(_, Q)) {
      const we = Ee(Number(_.vFOV_deg || 40), 1, 179);
      _.vFOV_deg = we, _.hFOV_deg = es(we, Q);
    }
    return _.aspect_id = ce.label, !0;
  }
  function X(_) {
    if (!_ || _.locked === !0) return;
    const g = String(_.aspect_id || "").trim(), j = Wr(_), ce = j.tanHalfX / Math.max(1e-12, j.tanHalfY), Q = 1 / Math.max(1e-12, ce);
    if (!N(_, Q)) {
      const we = Ee(Number(_.vFOV_deg || 60), 1, 179);
      _.vFOV_deg = we, _.hFOV_deg = es(we, Q);
    }
    if (/^\d+:\d+$/.test(g)) {
      const [we, xe] = g.split(":");
      _.aspect_id = `${xe}:${we}`;
    } else
      _.aspect_id = ci(_);
  }
  function ie(_ = !0) {
    var ce, Q;
    if (!t) return;
    const g = S;
    if (!U()) {
      S = null, (ce = c.shots) != null && ce.length && (c.shots = []), g && $(g, null);
      return;
    }
    const j = (Q = c.shots) == null ? void 0 : Q[0];
    _ && j && S && K1(c.camera, i.frame, j, S), S = jh(c.camera, i.frame), j ? Object.assign(j, S, { position: [...S.position] }) : c.shots = [{ ...S, position: [...S.position] }], g || $(null, S);
  }
  function $(_, g) {
    var we, xe;
    !g && i.mode === "frame" && me(_);
    const j = (g == null ? void 0 : g.position) ?? [0, 0, 0];
    if (((xe = (we = i.viewTransition) == null ? void 0 : we.end) == null ? void 0 : xe.mode) === "3dof") {
      oe({ ...Pe(), position: j }, i.viewTransition.end);
      return;
    }
    if (i.mode !== "pano" || i.spaceMode !== "3dof" || !E()) return;
    const ce = (_ == null ? void 0 : _.position) ?? [0, 0, 0];
    if (ce.every((T, ye) => T === j[ye])) return;
    const Q = { ...Pe(), position: ce };
    v({ mode: "6dof", position: ce, moved: !0 }), i.viewDistance = Q.distance, oe({ ...Q, position: j }, { mode: "3dof", moved: !1 });
  }
  function se() {
    if (!d) return null;
    const _ = Array.isArray(c.shots) ? c.shots : [];
    if (!_.length) return null;
    const g = String(c.active.selected_shot_id || "");
    return _.find((j) => String((j == null ? void 0 : j.id) || "") === g) || _[0] || null;
  }
  function Se(_, g, j = {}) {
    var we;
    if ((_ == null ? void 0 : _.kind) !== "roll_frame" || !_.shot) return;
    _.accumulatedRad += ch(g, _.lastAngle), _.lastAngle = g;
    const ce = uh(_.start.roll_deg, _.accumulatedRad, {
      shiftKey: j.shiftKey,
      altKey: _.altStarted ? !1 : j.altKey
    });
    _.shot.roll_deg = ce, _.changed = _.changed || Math.abs(_.accumulatedRad) > 1e-9;
    const Q = (((we = b.sidePanel) == null ? void 0 : we.params) || []).find((xe) => xe.key === "roll_deg");
    Q && (Q.value = ce, Q.displayValue = Ki(ce), Q.fillPct = (ce + 180) / 360 * 100), O(), be(_), K({ localOnly: !0 });
  }
  function Me(_, g, j = {}) {
    var we;
    if ((_ == null ? void 0 : _.kind) !== "roll_frame" || !_.shot || !_.rollGesture) return;
    const ce = Gm(_.rollGesture, g, j);
    if (!ce) return;
    _.rollGesture = ce.gesture, _.center = ce.gesture.center, _.lastAngle = ce.gesture.lastAngle, _.accumulatedRad = ce.gesture.accumulatedRad, _.shot.roll_deg = ce.rollDeg, _.changed = _.changed || Math.abs(ce.gesture.accumulatedRad) > 1e-9;
    const Q = (((we = b.sidePanel) == null ? void 0 : we.params) || []).find((xe) => xe.key === "roll_deg");
    Q && (Q.value = ce.rollDeg, Q.displayValue = Ki(ce.rollDeg), Q.fillPct = (ce.rollDeg + 180) / 360 * 100), O(), be(_), K({ localOnly: !0 });
  }
  function fe(_, g) {
    const j = de(_);
    return Math.atan2(j.y - g.y, j.x - g.x);
  }
  function be(_) {
    var xe, T;
    if ((_ == null ? void 0 : _.kind) !== "roll_frame" || !_.shot) return;
    p.timer && (clearTimeout(p.timer), p.timer = 0), p.target = null;
    const g = ne(_.shot), j = (xe = r.getBoundingClientRect) == null ? void 0 : xe.call(r), ce = (T = u.getBoundingClientRect) == null ? void 0 : T.call(u);
    if (!g || !j || !ce || r.width <= 0 || r.height <= 0) return;
    const Q = j.width / r.width, we = j.height / r.height;
    b.tooltip.text = `${Ki(_.shot.roll_deg)}°`, b.tooltip.left = j.left - ce.left + (g.x + g.w * 0.5) * Q, b.tooltip.top = j.top - ce.top + (g.y + g.h * 0.5) * we + 12, b.tooltip.variant = "roll", b.tooltip.visible = !0;
  }
  function _e(_) {
    var we;
    if (_.button !== 0 || s || i.mode !== "frame") return;
    const g = se();
    if (!g || g.locked === !0) return;
    const j = ne(g);
    if (!j) return;
    const ce = { x: j.x + j.w * 0.5, y: j.y + j.h * 0.5 }, Q = fe(_, ce);
    i.interaction = {
      kind: "roll_frame",
      shot: g,
      center: ce,
      lastAngle: Q,
      accumulatedRad: 0,
      start: { roll_deg: Number(g.roll_deg ?? g.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (we = o.setPointerCapture) == null || we.call(o, _.pointerId), _.preventDefault(), O(), be(i.interaction), K({ localOnly: !0 });
  }
  function h(_) {
    var g;
    ((g = i.interaction) == null ? void 0 : g.kind) !== "roll_frame" || i.interaction.source !== "knob" || Se(
      i.interaction,
      fe(_, i.interaction.center),
      _
    );
  }
  function z() {
    const _ = i.interaction;
    (_ == null ? void 0 : _.kind) !== "roll_frame" || _.source !== "knob" || (_.changed && (w(), D(), ae()), i.interaction = null, G(), J(), O(), K());
  }
  function A(_) {
    const g = i.mode === "frame" && !s ? se() : null;
    !g || g.locked === !0 || Math.abs(Number(g.roll_deg ?? g.rot_deg ?? 0)) <= 1e-9 || (g.roll_deg = 0, w(), D(), ae(), O(), K(), _.preventDefault());
  }
  return {
    connect(_) {
      ({
        applySpaceMode: v,
        cameraFrustumLength: F,
        cameraShoots: U,
        cameraSphere: H,
        commitAndRefreshNode: D,
        currentSpaceCamera: P,
        cutoutCamera: W,
        editorViewInput: R,
        forceCursorTool: ee,
        getFrameViewRect: ne,
        hasCamera: le,
        hasSpaceContent: E,
        hideTooltip: G,
        isCameraSelected: re,
        isFreeSpaceView: pe,
        isShotItem: he,
        leaveFrameView: me,
        lookingAt: Z,
        pushHistory: w,
        requestDraw: K,
        screenPos: de,
        setSelectedItem: q,
        spaceScale: ue,
        spaceViewState: Pe,
        stopTimelinePlayback: te,
        syncFrameRollKnob: O,
        syncViewToggleState: J,
        transitionView: oe,
        turnViewTo: ge,
        updateCursor: ve,
        updateSelectionMenu: I,
        updateSidePanel: ae,
        worldGizmoPointer: y
      } = _);
    },
    addCutoutFrame: Y,
    addStudioCamera: x,
    deleteStudioCamera: M,
    setShotAspect: L,
    clearCutoutFrame: k,
    applyCutoutAspectCustom: B,
    rotateCutoutAspect90: X,
    syncCutoutShot: ie,
    getActiveCutoutShot: se,
    startCameraPress: V,
    applySharedRollInteractionPoint: Me,
    onFrameRollKnobPointerDown: _e,
    onFrameRollKnobPointerMove: h,
    finishKnobRoll: z,
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
  let b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he = null;
  function me(M) {
    if (n.mode = "pano", !M) return;
    v();
    const L = E().distance;
    n.viewYaw = Rt(M.yaw_deg), n.viewPitch = Ee(M.pitch_deg, -89.9, 89.9), n.viewFov = Ee(M.hFOV_deg, 35, 140), n.spaceMode === "6dof" && b({ mode: "6dof", position: [...M.position], moved: !0 }), n.viewDistance = L, u.backgroundDirty = !0;
  }
  function Z() {
    var be, _e, h, z, A;
    if (!r) return null;
    const M = (be = r.getBoundingClientRect) == null ? void 0 : be.call(r), L = Number((M == null ? void 0 : M.width) || 0) > 0 ? r.width / M.width : 1, k = Number((M == null ? void 0 : M.height) || 0) > 0 ? r.height / M.height : 1;
    u.frameCanvasScale = Math.min(L, k);
    let N = 24, C = 24;
    const B = Math.max(N + 1, r.width - 24);
    let X = Math.max(C + 1, r.height - 24);
    const ie = (_e = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : _e.call(f), $ = (h = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : h.call(s);
    let se = 24;
    ie && M && ie.width > 0 && ie.height > 0 && (se = Math.max(se, (ie.right - M.left) * L + Gf)), $ && M && $.width > 0 && $.height > 0 && ((z = p.frameRail) == null ? void 0 : z.visible) === !0 && (se = Math.max(se, (M.right - $.left) * L + Gf)), N = Math.max(N, se);
    const Se = Math.min(B, r.width - se);
    let Me = 24;
    const fe = (A = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : A.call(a);
    if (fe && M && fe.width > 0 && fe.height > 0 && (Me = Math.max(Me, (fe.bottom - M.top) * k + Ql)), [l, m].forEach((_) => {
      var ce;
      if (!_ || !M) return;
      const g = getComputedStyle(_);
      if (g.display === "none" || g.visibility === "hidden" || Number(g.opacity) <= 0) return;
      const j = (ce = _.getBoundingClientRect) == null ? void 0 : ce.call(_);
      !j || j.width <= 0 || j.height <= 0 || (Me = Math.max(Me, (M.bottom - j.top) * k + Ql));
    }), o && M) {
      const _ = getComputedStyle(o);
      _.display !== "none" && _.visibility !== "hidden" && Number(_.opacity) > 0 && (Me = Math.max(Me, (XM + Ql) * k));
    }
    return C = Math.max(C, Me), X = Math.max(C + 1, Math.min(X, r.height - Me)), {
      x: N,
      y: C,
      w: Math.max(1, Se - N),
      h: Math.max(1, X - C)
    };
  }
  function w(M = H()) {
    if (!M || !r) return null;
    const L = u.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Tb(L, M, Xc * fi(L, M));
  }
  function K(M = H()) {
    const L = w(M);
    return L ? { x: L.x, y: L.y, w: L.w, h: L.h } : null;
  }
  function de() {
    return c && !!H();
  }
  function q(M, L) {
    const k = H();
    if (!k || k.locked === !0) return !1;
    const N = Number(L) > 0, C = hh(k, L);
    if (!C) return !1;
    if (N) {
      const B = Xc * fi(
        u.frameSafeRect || { w: r.width, h: r.height },
        C
      ), X = Pu({ width: r.width, height: r.height }, B);
      if (X.halfW < r.width * 0.5 - 1e-6 || X.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return k.hFOV_deg = C.hFOV_deg, k.vFOV_deg = C.vFOV_deg, ue(), pe(), !0;
  }
  function ue() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, R(), F(), pe());
    }, 180);
  }
  function Pe() {
    return t && n.mode === "frame" && D();
  }
  function te() {
    const M = H(), L = w(M);
    return M && L ? sm(M, L, { width: r.width, height: r.height }) : null;
  }
  function O() {
    var M;
    return ((M = U()) == null ? void 0 : M.radius) || Jn;
  }
  function J(M) {
    const { position: L, yaw_deg: k, pitch_deg: N, roll_deg: C, hFOV_deg: B } = M.shot;
    return { position: L, yaw_deg: k, pitch_deg: N, roll_deg: C, hFOV_deg: B, distance: O() };
  }
  function oe(M, L) {
    const { rect: k } = M;
    return i.pickSurface(ne(M.shot), L.x - k.x, L.y - k.y, k.w, k.h);
  }
  function ge(M, L, k) {
    return Nc(L, oe(M, k), null, le());
  }
  function ve(M) {
    return JSON.stringify([J(M), M.rect]);
  }
  function I(M) {
    const L = H();
    L.position = [...M.position], L.yaw_deg = M.yaw_deg, L.pitch_deg = M.pitch_deg;
  }
  function ae(M, L) {
    const k = H();
    !k || d || k.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: k,
      last: M,
      start: { yaw_deg: Number(k.yaw_deg || 0), pitch_deg: Number(k.pitch_deg || 0) },
      changed: !1
    }, re(M), r.setPointerCapture(L));
  }
  function y(M, L, k) {
    const N = te();
    if (!N || d) return;
    const C = J(N);
    n.interaction = M === "orbit" ? { kind: "frame_orbit", last: L, pivot: ge(N, C, L), changed: !1 } : { kind: "frame_pan", last: L, depth: Yh(C, le()), changed: !1 }, re(L), r.setPointerCapture(k);
  }
  function S(M, L) {
    const k = te();
    if (!k) return;
    const N = J(k), C = L.x - M.last.x, B = L.y - M.last.y;
    I(M.kind === "frame_pan" ? Jh(N, C, B, k.rect.w, k.rect.h, M.depth) : Xh(N, C, B, r.height, M.pivot)), M.changed = M.changed || C !== 0 || B !== 0, M.last = L, ee({ localOnly: !0, cause: "frame_view" });
  }
  function V(M, L) {
    const k = te();
    if (!k || d) return;
    const N = J(k), C = performance.now(), B = { x: M.x, y: M.y, time: C, key: i.contentRevision(), view: ve(k) };
    if (!qh(he, B)) {
      const X = oe(k, M);
      he = { ...B, cost: performance.now() - C, hit: X };
    }
    I(Zh(N, Nc(N, he.hit, null, le()), L, le())), he.view = ve(te() ?? k), he.wheelTime = C, ue(), pe(), ee({ localOnly: !0, cause: "frame_view" });
  }
  function Y() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, R(), F(), pe(), !0) : !1;
  }
  function x() {
    const M = n.interaction;
    if (!(M != null && M.shot) || !M.start || M.kind !== "pan_frame" && M.kind !== "roll_frame") return !1;
    const L = M.kind === "roll_frame";
    return M.kind === "pan_frame" ? (M.shot.yaw_deg = M.start.yaw_deg, M.shot.pitch_deg = M.start.pitch_deg) : M.shot.roll_deg = M.start.roll_deg, L && P(), n.interaction = null, W(), G(), pe(), re(n.pointerPos), ee({ localOnly: !0 }), !0;
  }
  return {
    connect(M) {
      ({
        applySpaceMode: b,
        cancelViewTransition: v,
        commitAndRefreshNode: F,
        contentSphere: U,
        getActiveCutoutShot: H,
        hasSpaceContent: D,
        hideTooltip: P,
        invalidateLivePaintPreviewCaches: W,
        pushHistory: R,
        requestDraw: ee,
        shotViewCamera: ne,
        spaceScale: le,
        spaceViewState: E,
        syncViewToggleState: G,
        updateCursor: re,
        updateSidePanel: pe
      } = M);
    },
    leaveFrameView: me,
    measureFrameSafeRect: Z,
    getFrameViewLayout: w,
    getFrameViewRect: K,
    supportsFramePainting: de,
    zoomFrameViewAt: q,
    isFreeFrameView: Pe,
    frameContext: te,
    frameViewDistance: O,
    frameSpaceView: J,
    frameTarget: ge,
    startPanFrame: ae,
    startFrameDrag: y,
    dragFrame: S,
    zoomFrameAt: V,
    flushFrameWheelCommit: Y,
    cancelFrameCameraGesture: x
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
  let a, s, l, d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee = 0;
  function ne() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function le() {
    return String(ne() || "") === "lasso_fill";
  }
  function E() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function G(I, ae) {
    const y = Number(ae || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function re(I) {
    const ae = String(I || "").trim();
    return ae === "eraser" ? xr : Sn[ae] ? ae : t.activeBrushPresetId || xr;
  }
  function pe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (E() || R());
  }
  function he() {
    var I;
    return pe() && ((I = t.pointerPos) == null ? void 0 : I.inside) === !0;
  }
  function me(I, ae = !0) {
    const y = Number((I == null ? void 0 : I.x) || 0), S = Number((I == null ? void 0 : I.y) || 0), V = ae !== !1, Y = t.pointerPos || { x: 0, y: 0, inside: !1 }, x = Y.inside !== V || Math.abs(Y.x - y) > 0.01 || Math.abs(Y.y - S) > 0.01;
    return t.pointerPos = { x: y, y: S, inside: V }, x;
  }
  function Z() {
    var N, C;
    if (!he()) return null;
    const I = t.primaryTool === "mask" ? "mask" : "paint", ae = I === "mask" ? t.maskTool : t.paintTool, y = re(ae), S = Sn[y] || Sn[xr], V = Number(t.brushSizes[y] ?? 10), Y = Math.max(1, V) * Math.max(0.1, Number(S.sizeScale ?? 1)), x = Math.max(3, Y * 0.5), M = I === "mask" ? ae === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : ae === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : En(t.paintColor), L = I === "mask" ? ae === "lasso_fill" ? 0.18 : 0.2 : ae === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(M.a ?? 1) * 0.3), 0.16, 0.52), k = I === "mask" ? 0.95 : ae === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(M.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: I,
      toolKind: ae,
      preset: S,
      radius: x,
      fillStyle: sr(M, L),
      strokeStyle: sr(M, k),
      x: Number(((N = t.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((C = t.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: x,
      hotspotY: x
    };
  }
  function w() {
    var B, X, ie;
    const I = Z();
    if (!r) return;
    if (!I) {
      r.style.display = "none";
      return;
    }
    let ae = I.radius * 2, y = I.radius * 2, S = "999px", V = 0, Y = I.fillStyle, x = "1px solid rgba(222, 222, 222, 0.72)", M = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const L = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let N = Number(I.hotspotX ?? ae * 0.5), C = Number(I.hotspotY ?? y * 0.5);
    if (I.toolKind === "lasso_fill")
      ae = Gs, y = Gs, S = "0", x = "0", M = "none", N = QM, C = eP, Y = sP(I.fillStyle, k, L);
    else if (I.layerKind === "mask")
      Y = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (I.toolKind === "marker") {
      const $ = Math.max(1, Number(((B = I.preset) == null ? void 0 : B.aspect) ?? 1));
      ae = Math.max(10, I.radius * 2 * $), y = Math.max(6, I.radius * 2), S = `${Math.min(6, y * 0.42)}px`, V = Number(((ie = (X = I.preset) == null ? void 0 : X.angle) == null ? void 0 : ie.value) || 0) * hi;
    } else I.toolKind === "brush" ? Y = `radial-gradient(circle at 50% 50%, ${I.strokeStyle} 0%, ${I.fillStyle} 45%, rgba(0,0,0,0) 100%)` : I.toolKind === "eraser" && (Y = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(ae)}px`, r.style.height = `${Math.round(y)}px`, r.style.borderRadius = S, r.style.border = x, r.style.boxShadow = M, r.style.background = Y, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(I.x - N)}px, ${Math.round(I.y - C)}px) rotate(${V}deg)`;
  }
  function K() {
    var Me;
    if (!n || !i) return;
    const I = t.primaryTool === "mask" ? "mask" : "paint", ae = I === "mask" ? t.maskTool : t.paintTool;
    if (ae === "lasso_fill") return;
    const y = re(ae), S = Sn[y] || Sn[xr], V = Number(t.brushSizes[y] ?? 10), Y = Math.max(1, V) * Math.max(0.1, Number(S.sizeScale ?? 1)), x = Math.max(6, Y * 0.5), M = ae === "eraser", L = I === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : M ? { r: 1, g: 1, b: 1, a: 0.22 } : En(t.paintColor), k = I === "mask" ? sr(L, 0.22) : M ? "rgba(255,255,255,0.14)" : sr(L, Ee(Math.max(0.18, Number(L.a ?? 1) * 0.34), 0.18, 0.56)), N = I === "mask" ? sr(L, 0.96) : M ? "rgba(255,255,255,0.72)" : sr(L, Ee(Math.max(0.56, Number(L.a ?? 1) * 0.96), 0.56, 1));
    let C = x * 2, B = x * 2, X = "999px", ie = 0, $ = k;
    const se = "rgba(222, 222, 222, 0.72)", Se = "rgba(52, 52, 52, 0.72)";
    if (I === "mask")
      $ = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (ae === "marker") {
      const fe = Math.max(1, Number((S == null ? void 0 : S.aspect) ?? 1));
      C = Math.max(16, x * 2 * fe), B = Math.max(10, x * 2), X = `${Math.min(8, B * 0.42)}px`, ie = Number(((Me = S == null ? void 0 : S.angle) == null ? void 0 : Me.value) || 0) * hi;
    } else ae === "brush" ? $ = `radial-gradient(circle at 50% 50%, ${N} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : ae === "lasso_fill" ? (C = Math.max(18, x * 1.8), B = C, $ = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : M && ($ = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(C)}px`, i.style.height = `${Math.round(B)}px`, i.style.borderRadius = X, i.style.background = $, i.style.border = `1px solid ${se}`, i.style.boxShadow = `0 0 0 1px ${Se}`, i.style.transform = `rotate(${ie}deg)`, ee && (clearTimeout(ee), ee = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function de() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), ee && clearTimeout(ee), ee = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), ee = 0;
    }, 180));
  }
  function q(I, ae, y, S) {
    const V = re(ae), Y = Sn[V] || Sn[xr], x = t.brushSizes[V] ?? 10, M = Math.max(1, x) * Math.max(0.1, Y.sizeScale ?? 1), L = G(S, M), k = y.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), N = {
      id: Di(I),
      actionGroupId: Di("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: ae,
      size: M,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: L.radiusModel,
      radiusValue: L.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((C) => ({ ...C })),
        points: k.map((C) => ({ ...C }))
      }
    };
    return Hf(N, Y), t.mode, Number(Y.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function ue(I, ae, y, S) {
    const V = y.map((L) => ({
      ...L,
      t: Number((L == null ? void 0 : L.t) || 0),
      widthScale: Number.isFinite(Number(L == null ? void 0 : L.widthScale)) ? Math.max(0, Number(L.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(L == null ? void 0 : L.pressureLike)) ? Math.max(0, Number(L.pressureLike)) : 1
    })), Y = re(ae), x = Sn[Y] || Sn[xr], M = {
      id: Di(I),
      actionGroupId: Di("ag"),
      targetSpace: S && typeof S == "object" ? { ...S, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: ae,
      size: 10,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: V.map((L) => ({ ...L }))
      }
    };
    return Hf(M, x), t.mode, Number(x.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), { ...M.targetSpace }, M;
  }
  function Pe(I) {
    const ae = o.painting || (o.painting = eo(null)), y = ae[I] || (ae[I] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function te(I, ae, y = performance.now()) {
    let S;
    if (t.mode === "frame") {
      const k = f();
      if (!k || (S = W(ae, k, y), !S)) return !1;
    } else
      S = P(ae, y);
    if (!S) return !1;
    const V = I.stroke.geometry.rawPoints || I.stroke.geometry.points, Y = I.stroke.geometry.points, x = V[V.length - 1];
    if (x) {
      const k = Math.abs(Number(S.u ?? S.x ?? 0) - Number(x.u ?? x.x ?? 0)), N = Math.abs(Number(S.v ?? S.y ?? 0) - Number(x.v ?? x.y ?? 0));
      if (k < 15e-4 && N < 15e-4) return !1;
    }
    const M = {
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    V.push({ ...M }), Y.push({ ...M });
    const L = p(I);
    if (L) {
      const k = t.paintEngine.ensureTarget(L);
      t.paintEngine.appendStrokePoint(k, Number(M.u ?? 0), Number(M.v ?? 0), I.stroke);
    }
    return !0;
  }
  function O(I, ae, y = performance.now()) {
    var x, M;
    let S;
    if (t.mode === "frame") {
      const L = f();
      if (!L) return !1;
      S = W(ae, L, y);
    } else
      S = P(ae, y);
    const V = (M = (x = I == null ? void 0 : I.stroke) == null ? void 0 : x.geometry) == null ? void 0 : M.points;
    if (!S || !Array.isArray(V)) return !1;
    const Y = V[V.length - 1];
    if (Y) {
      const L = Math.abs(Number(S.u ?? S.x ?? 0) - Number(Y.u ?? Y.x ?? 0)), k = Math.abs(Number(S.v ?? S.y ?? 0) - Number(Y.v ?? Y.y ?? 0));
      if (L < 15e-4 && k < 15e-4) return !1;
    }
    return V.push({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function J(I) {
    var fe, be, _e, h, z;
    const ae = (I == null ? void 0 : I.stroke) || null;
    if (!ae || (I == null ? void 0 : I.layerKind) !== "paint" || String((ae == null ? void 0 : ae.toolKind) || "") !== "eraser") return !1;
    D();
    const y = p(), S = d(y.width, y.height);
    if (!H(S, ae, { w: y.width, h: y.height })) return !1;
    const V = ((be = (fe = S.ctx) == null ? void 0 : fe.getImageData(0, 0, y.width, y.height)) == null ? void 0 : be.data) || null;
    if (!V) return !1;
    const Y = new Map(b().map((A) => [String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "").trim(), A ? { ...A } : null])), x = [], M = [], L = [...v().filter((A) => String((A == null ? void 0 : A.layerKind) || "paint") !== "paint")];
    let k = !1, N = m().reduce((A, _) => Math.max(A, Number((_ == null ? void 0 : _.z_index) || 0)), -1) + 1;
    function C(A, _, g, j = 8) {
      let ce = _, Q = g, we = -1, xe = -1;
      for (let T = 0; T < g; T += 1)
        for (let ye = 0; ye < _; ye += 1)
          A[(T * _ + ye) * 4 + 3] <= j || (ye < ce && (ce = ye), T < Q && (Q = T), ye > we && (we = ye), T > xe && (xe = T));
      return we < ce || xe < Q ? null : { minX: ce, minY: Q, maxX: we, maxY: xe };
    }
    const B = C(V, y.width, y.height, 8);
    if (!B) return !1;
    function X(A, _) {
      return !A || !_ ? !1 : !(A.maxX < _.minX || _.maxX < A.minX || A.maxY < _.minY || _.maxY < A.minY);
    }
    function ie(A, _) {
      const g = u((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "", "paint", _);
      if (!g) return null;
      const j = g.centerUv.u - g.halfW, ce = g.centerUv.u + g.halfW, Q = g.centerUv.v - g.halfH, we = g.centerUv.v + g.halfH, xe = y.width, T = y.height;
      return {
        minX: Math.floor((j % 1 + 1) % 1 * xe),
        maxX: Math.ceil((ce % 1 + 1) % 1 * xe),
        minY: Math.floor(Ee(Q, 0, 1) * T),
        maxY: Math.ceil(Ee(we, 0, 1) * T),
        wraps: ce - j >= 1 || j < 0 || ce > 1
      };
    }
    function $(A) {
      const _ = (A == null ? void 0 : A.bbox) || null;
      if (!_) return null;
      const g = (A == null ? void 0 : A.transform) || {}, j = y.width, ce = y.height, Q = Number(_.u0 || 0) + Number(g.du || 0), we = Number(_.u1 || 0) + Number(g.du || 0), xe = Number(_.v0 || 0) + Number(g.dv || 0), T = Number(_.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((Q % 1 + 1) % 1 * j),
        maxX: Math.ceil((we % 1 + 1) % 1 * j),
        minY: Math.floor(Ee(xe, 0, 1) * ce),
        maxY: Math.ceil(Ee(T, 0, 1) * ce),
        wraps: we - Q >= 1 || Q < 0 || we > 1
      };
    }
    function se(A) {
      return A ? A.wraps ? X(B, { minX: 0, maxX: A.maxX, minY: A.minY, maxY: A.maxY }) || X(B, { minX: A.minX, maxX: y.width - 1, minY: A.minY, maxY: A.maxY }) : X(B, A) : !0;
    }
    function Se(A) {
      if (!A) return { touched: !1, canvas: null };
      const _ = d(y.width, y.height, { readback: !0 });
      _.ctx.drawImage(A, 0, 0);
      const g = _.ctx.getImageData(0, 0, y.width, y.height);
      _.ctx.save(), _.ctx.globalCompositeOperation = "destination-out", _.ctx.drawImage(S.canvas, 0, 0), _.ctx.restore();
      const j = _.ctx.getImageData(0, 0, y.width, y.height);
      for (let ce = 0; ce < y.width * y.height; ce += 1) {
        if (V[ce * 4 + 3] <= 8) continue;
        const we = g.data[ce * 4 + 3], xe = j.data[ce * 4 + 3];
        if (we > xe)
          return { touched: !0, canvas: _.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Me(A, _, g) {
      const j = Number(g == null ? void 0 : g.z_index), ce = l(A, _, g).map((Q, we) => ({
        ...Q,
        z_index: Number.isFinite(j) ? j + we * 1e-3 : N + we * 1e-3
      }));
      return ce.length && (N = Math.max(N, ...ce.map((Q) => Number((Q == null ? void 0 : Q.z_index) || 0))) + 1), ce;
    }
    for (const A of b()) {
      const _ = String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "").trim();
      if (!_) continue;
      const g = F(_, "paint");
      if (!se(ie(A, g))) {
        M.push(A), x.push(...g);
        continue;
      }
      const j = ((h = (_e = t.paintEngine) == null ? void 0 : _e.getGroupTarget) == null ? void 0 : h.call(_e, _)) || null, ce = ((z = j == null ? void 0 : j.committedPaint) == null ? void 0 : z.canvas) || null;
      if (!ce) {
        M.push(A), x.push(...g);
        continue;
      }
      const Q = Se(ce);
      if (!Q.touched || !Q.canvas) {
        M.push(A), x.push(...g);
        continue;
      }
      k = !0;
      const we = Me(Q.canvas, "paint", Y.get(_) || A || {});
      L.push(...we);
    }
    for (const A of v().filter((_) => String((_ == null ? void 0 : _.layerKind) || "paint") === "paint")) {
      if (!se($(A))) {
        L.push(A);
        continue;
      }
      const _ = a(A, null);
      if (!_) {
        L.push(A);
        continue;
      }
      const g = Se(_);
      if (!g.touched || !g.canvas) {
        L.push(A);
        continue;
      }
      k = !0;
      const j = Me(g.canvas, "paint", A);
      L.push(...j);
    }
    return k ? (o.painting.paint.strokes = x, o.painting.groups = M.sort((A, _) => Number((A == null ? void 0 : A.z_index) || 0) - Number((_ == null ? void 0 : _.z_index) || 0)), o.painting.raster_objects = L.sort((A, _) => Number((A == null ? void 0 : A.z_index) || 0) - Number((_ == null ? void 0 : _.z_index) || 0)), s({ preservePanelValues: !1 }), !0) : !1;
  }
  function oe(I) {
    var x, M, L, k, N;
    if ((((M = (x = I.stroke) == null ? void 0 : x.geometry) == null ? void 0 : M.rawPoints) || ((k = (L = I.stroke) == null ? void 0 : L.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      ve(I);
      const C = p(I);
      C && (String(((N = I.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(C) : t.paintEngine.commitActiveStroke(I.stroke, C)), I._hasCommittedSegments = !0;
    }
    const y = I.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, V = q(I.layerKind, y.toolKind, [], S);
    V.actionGroupId = y.actionGroupId, I.stroke = V;
    const Y = p(I);
    Y && t.paintEngine.beginStroke(V, Y);
  }
  function ge(I) {
    var x, M;
    if ((((M = (x = I.stroke) == null ? void 0 : x.geometry) == null ? void 0 : M.points) || []).length >= 3) {
      ve(I);
      const L = p(I);
      L && t.paintEngine.commitActiveStroke(I.stroke, L), I._hasCommittedSegments = !0;
    }
    const y = I.stroke, S = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, V = ue(I.layerKind, y.toolKind, [], S);
    V.actionGroupId = y.actionGroupId, I.stroke = V;
    const Y = p(I);
    Y && t.paintEngine.beginStroke(V, Y);
  }
  function ve(I) {
    var Y, x, M, L;
    const ae = ((Y = I == null ? void 0 : I.stroke) == null ? void 0 : Y.geometry) || null;
    if (!ae) return !1;
    const y = String(((x = I == null ? void 0 : I.stroke) == null ? void 0 : x.toolKind) || "pen");
    if (I.layerKind === "paint" && y === "eraser")
      return ae.geometryKind !== "lasso_fill" && (ae.processedPoints = U(ae.rawPoints || ae.points || [], I.stroke.targetSpace, !0)), J(I);
    const S = I.layerKind === "paint" && y !== "eraser";
    if (ae.geometryKind === "lasso_fill")
      return (Array.isArray(ae.points) ? ae.points : []).length < 3 ? !1 : (S && c((M = I.stroke) == null ? void 0 : M.actionGroupId), Pe(I.layerKind).push(I.stroke), !0);
    const V = ae.rawPoints || ae.points || [];
    return V.length < 1 ? !1 : (ae.processedPoints = U(V, I.stroke.targetSpace, !0), S && c((L = I.stroke) == null ? void 0 : L.actionGroupId), Pe(I.layerKind).push(I.stroke), !0);
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
        getPaintingGroupList: b,
        getRasterObjectList: v,
        getStrokeGroupStrokes: F,
        processFreehandPoints: U,
        rasterizeStrokeToSurface: H,
        rebuildPaintEngineIfNeeded: D,
        screenPosToErpPoint: P,
        screenPosToFrameAsErpPoint: W,
        supportsFramePainting: R
      } = I);
    },
    isActiveLassoTool: le,
    supportsErpPainting: E,
    getBrushPresetIdForTool: re,
    isPaintCursorEnabled: pe,
    isActivePaintCursorVisible: he,
    setPointerPos: me,
    syncPaintCursorElement: w,
    showPaintSizePreview: K,
    hidePaintSizePreview: de,
    buildFreehandStrokeRecord: q,
    buildLassoFillStrokeRecord: ue,
    getPaintingLayerList: Pe,
    appendPaintPoint: te,
    appendLassoPoint: O,
    _segmentFrameStroke: oe,
    _segmentFrameLassoFill: ge,
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
  let o, a, s, l, d, u, c, f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E;
  function G(w) {
    var de;
    if (n && t.mode === "frame") {
      const q = a(), ue = l(q);
      if (!q || !ue || !(Number((w == null ? void 0 : w.x) || 0) >= Number(ue.x || 0) && Number((w == null ? void 0 : w.x) || 0) <= Number(ue.x || 0) + Number(ue.w || 0) && Number((w == null ? void 0 : w.y) || 0) >= Number(ue.y || 0) && Number((w == null ? void 0 : w.y) || 0) <= Number(ue.y || 0) + Number(ue.h || 0))) return null;
      const te = ee(w, q, performance.now()), O = te ? o(te) : null;
      if (O)
        for (const oe of s()) {
          if (!H(oe)) continue;
          const ge = E(oe, O);
          if (ge && Number(ge.x) >= 0 && Number(ge.x) <= 1 && Number(ge.y) >= 0 && Number(ge.y) <= 1) {
            const ve = R(oe);
            if (ve != null && ve.visible) return { item: oe, geom: ve };
          }
        }
      const J = d(!1).slice().sort((oe, ge) => Number((ge == null ? void 0 : ge.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0));
      for (const oe of J) {
        if (oe.type === "strokeGroup") {
          const I = f(W("paint", oe.actionGroupId || oe.id || ""));
          if (!I) continue;
          const ae = R(I);
          if (!(ae != null && ae.visible)) continue;
          const y = Array.isArray(ae.strokePaths) ? ae.strokePaths : [];
          for (const S of y) {
            const V = Array.isArray(S == null ? void 0 : S.points) ? S.points : [];
            if (!V.length) continue;
            if (S.closed && V.length >= 3 && Vr(w, V)) return { item: I, geom: ae };
            const Y = Math.max(8, Number((S == null ? void 0 : S.lineWidth) || 0) * 0.5 + 6);
            for (let x = 0; x < V.length - 1; x += 1)
              if (nc(w, V[x], V[x + 1]) <= Y * Y) return { item: I, geom: ae };
            if (V.length === 1 && To(w, V[0]) <= Y * Y) return { item: I, geom: ae };
          }
          continue;
        }
        if (oe.type === "rasterObject") {
          const I = u(P(((de = oe.item) == null ? void 0 : de.id) || oe.id || ""));
          if (!I) continue;
          const ae = R(I);
          if (p(I, ae, w, te)) return { item: I, geom: ae };
          continue;
        }
        const ge = oe.item;
        if (!ge || !H(ge) || !O) continue;
        const ve = E(ge, O);
        if (ve && Number(ve.x) >= 0 && Number(ve.x) <= 1 && Number(ve.y) >= 0 && Number(ve.y) <= 1) {
          const I = R(ge);
          if (I != null && I.visible) return { item: ge, geom: I };
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
        const Pe = R(q);
        if (!(Pe != null && Pe.visible)) continue;
        const te = Array.isArray(Pe.strokePaths) ? Pe.strokePaths : [];
        for (const O of te) {
          const J = Array.isArray(O == null ? void 0 : O.points) ? O.points : [];
          if (!J.length) continue;
          if (O.closed && J.length >= 3 && Vr(w, J)) return { item: q, geom: Pe };
          const oe = Math.max(8, Number((O == null ? void 0 : O.lineWidth) || 0) * 0.5 + 6);
          for (let ge = 0; ge < J.length - 1; ge += 1)
            if (nc(w, J[ge], J[ge + 1]) <= oe * oe) return { item: q, geom: Pe };
          if (J.length === 1 && To(w, J[0]) <= oe * oe) return { item: q, geom: Pe };
        }
        continue;
      }
      if (F(q)) {
        const Pe = R(q);
        if (!(Pe != null && Pe.visible)) continue;
        if (p(q, Pe, w)) return { item: q, geom: Pe };
        continue;
      }
      const ue = R(q);
      if (ue.visible && Vr(w, ue.corners))
        return { item: q, geom: ue };
    }
    return null;
  }
  function re(w, K, de = null) {
    if (!w || !w.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (H(de)) return Rc(w, K);
    if (w.kind === "strokeGroup") {
      const q = w.corners.findIndex((Pe) => To(Pe, K) <= 121);
      if (q >= 0) {
        const Pe = w.corners[q], te = Pe.x - w.center.x, O = Pe.y - w.center.y, J = te * O >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: J };
      }
      const ue = Array.isArray(w.strokePaths) ? w.strokePaths : [];
      for (const Pe of ue) {
        const te = Array.isArray(Pe == null ? void 0 : Pe.points) ? Pe.points : [];
        if (Pe.closed && te.length >= 3 && Vr(K, te)) return { kind: "move", cursor: "default" };
        const O = Math.max(8, Number((Pe == null ? void 0 : Pe.lineWidth) || 0) * 0.5 + 6);
        for (let J = 0; J < te.length - 1; J += 1)
          if (nc(K, te[J], te[J + 1]) <= O * O) return { kind: "move", cursor: "default" };
      }
      return Vr(K, w.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (w.kind === "rasterObject") {
      const q = w.corners.findIndex((ue) => To(ue, K) <= 121);
      if (q >= 0) {
        const ue = w.corners[q], Pe = ue.x - w.center.x, te = ue.y - w.center.y, O = Pe * te >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: q, cursor: O };
      }
      return Vr(K, w.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return U_(w, K, {
      edges: i === "cutout" || U(de),
      resize: !(U(de) && b()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function pe(w, K) {
    return {
      x0: Math.min(Number((w == null ? void 0 : w.x) || 0), Number((K == null ? void 0 : K.x) || 0)),
      y0: Math.min(Number((w == null ? void 0 : w.y) || 0), Number((K == null ? void 0 : K.y) || 0)),
      x1: Math.max(Number((w == null ? void 0 : w.x) || 0), Number((K == null ? void 0 : K.x) || 0)),
      y1: Math.max(Number((w == null ? void 0 : w.y) || 0), Number((K == null ? void 0 : K.y) || 0))
    };
  }
  function he(w, K) {
    return !!w && !!K && Number(K.x) >= Number(w.x0) && Number(K.x) <= Number(w.x1) && Number(K.y) >= Number(w.y0) && Number(K.y) <= Number(w.y1);
  }
  function me(w, K) {
    if (!w || !(K != null && K.visible) || !Array.isArray(K.corners)) return !1;
    if (K.corners.some((ue) => he(w, ue))) return !0;
    const de = (Number(w.x0) + Number(w.x1)) * 0.5, q = (Number(w.y0) + Number(w.y1)) * 0.5;
    return !!Vr({ x: de, y: q }, K.corners);
  }
  function Z(w) {
    if (le(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ne("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ne("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ne("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ne("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ne("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ne(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ne("grabbing") : ne("default");
      return;
    }
    if (m()) {
      ne("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ne(qM);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ne("default");
        return;
      }
      ne("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ne("default");
      return;
    }
    if (t.gizmoAxis) {
      ne("grab");
      return;
    }
    const K = c(), de = K ? R(K) : null, q = K ? v(K) : !1, ue = q ? { kind: "none", cursor: "default" } : re(de, w, K);
    if (!q && ue.kind !== "none") {
      ne(ue.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && G(w)) {
      ne("default");
      return;
    }
    ne(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(w) {
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
        isErpCamera: b,
        isItemLocked: v,
        isRasterObjectItem: F,
        isShotItem: U,
        isStickerItem: H,
        isStrokeGroupItem: D,
        makeRasterObjectSelectionId: P,
        makeStrokeGroupSelectionId: W,
        objectGeom: R,
        screenPosToFrameAsErpPoint: ee,
        setCanvasCursor: ne,
        syncPaintCursorElement: le,
        worldDirToFrameLocalPoint: E
      } = w);
    },
    hitObjectAt: G,
    handleHit: re,
    rectFromPoints: pe,
    rectIntersectsGeom: me,
    updateCursor: Z
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
  let p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe = !1;
  function he() {
    return pe;
  }
  function me() {
    if (!o) return;
    if (pe = !1, n.mode === "frame") {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || P() && ee()) {
      const O = Z();
      pe = O.visible, w(O);
      return;
    }
    const q = U(), ue = H();
    if (!q && ue.length === 0 || n.interaction) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Pe = D(), te = aN({
      type: c,
      selected: q,
      selectedItems: ue,
      selectedKind: Pe,
      geom: ue.length > 1 ? F(ue) : re(q),
      allLocked: p(ue),
      anyLocked: ue.some((O) => ne(O)),
      selectedLocked: ne(q),
      activeAspect: le(q) && W() ? Ji : Pr(q),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: R,
      isStickerHidden: G,
      canRestoreSelectedToInitial: m,
      iconSet: ze,
      cameraShot: t,
      cameraDeletable: l,
      erpChoice: l,
      coverage: s.coverage
    });
    w(te);
  }
  function Z() {
    const q = E() && !n.interaction ? v().space : null;
    if (!(q != null && q.gizmo)) return { visible: !1 };
    const ue = b(), Pe = q.stickers.find((oe) => oe.id === n.worldSelectedId), O = (Pe ? Gu(Pe) : [q.gizmo.transform.position]).map((oe) => ia(ue, oe, r.width, r.height)).filter(Boolean), J = Nv(ue, q.gizmo.transform.position, q.gizmo.mode, r.width, r.height);
    return sN({ corners: O, gizmoBox: J, gizmoMode: q.gizmo.mode, camera: P(), deletable: l && P() });
  }
  function w(q) {
    var J, oe;
    if (!q.visible) {
      f.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ue = (ge, ve) => lN(q.anchor, ge, ve, r.width, r.height), Pe = Math.max(1, Number(((J = n.menuSize) == null ? void 0 : J.w) || 220)), te = Math.max(1, Number(((oe = n.menuSize) == null ? void 0 : oe.h) || 40)), O = ue(Pe, te);
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
      const ge = o.getBoundingClientRect(), ve = Math.round(Number((ge == null ? void 0 : ge.width) || 0)) || 220, I = Math.round(Number((ge == null ? void 0 : ge.height) || 0)) || 40;
      n.menuSize = { w: ve, h: I, measured: !0 };
      const ae = ue(ve, I);
      ae && (f.selectionMenu.left = ae.left, f.selectionMenu.top = ae.top);
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
      var x, M;
      if (d.target !== Pe || !u || !(Pe != null && Pe.isConnected)) return;
      const te = a.getBoundingClientRect(), O = Pe.getBoundingClientRect(), J = 8, oe = 12, ge = Math.round(Number(((x = u.getBoundingClientRect()) == null ? void 0 : x.width) || 0)) || 100, ve = Math.round(Number(((M = u.getBoundingClientRect()) == null ? void 0 : M.height) || 0)) || 24, I = !!Pe.closest(".pano-floating-left"), ae = !!Pe.closest(".pano-frame-rail"), y = !!Pe.closest(".pano-paint-footer") || !!Pe.closest(".pano-paint-color-float");
      let S = "", V = O.left - te.left + O.width * 0.5 - ge * 0.5, Y = O.top - te.top - ve - oe;
      if (Pe.closest(".pano-floating-top") && (Y = O.bottom - te.top + oe), I)
        S = "tool-rail", V = O.right - te.left + 10, Y = O.top - te.top + O.height * 0.5 - ve * 0.5, V = Ee(V, J, Math.max(J, te.width - ge - J)), Y = Ee(Y, J, Math.max(J, te.height - ve - J));
      else if (ae)
        S = "frame-rail", V = O.left - te.left - ge - 10, Y = O.top - te.top + O.height * 0.5 - ve * 0.5, V = Ee(V, J, Math.max(J, te.width - ge - J)), Y = Ee(Y, J, Math.max(J, te.height - ve - J));
      else if (y) {
        S = "footer";
        const L = Pe.closest(".pano-paint-footer"), k = L ? L.getBoundingClientRect() : O;
        V = k.left - te.left + k.width * 0.5 - ge * 0.5, Y = k.bottom - te.top + 5, V = Ee(V, J, Math.max(J, te.width - ge - J)), Y = Math.max(J, Y);
      }
      V = Ee(V, J, Math.max(J, te.width - ge - J)), Y = Math.max(J, Y), f.tooltip.left = V, f.tooltip.top = Y, f.tooltip.variant = S, f.tooltip.visible = !0;
    });
  }
  return {
    connect(q) {
      ({
        areAllSelectedItemsLocked: p,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: b,
        editorViewInput: v,
        getMultiSelectionGeom: F,
        getSelected: U,
        getSelectedItems: H,
        getSelectedKind: D,
        isCameraSelected: P,
        isErpCamera: W,
        isExternalSticker: R,
        isFreeSpaceView: ee,
        isItemLocked: ne,
        isShotItem: le,
        isSpaceView: E,
        isStickerHidden: G,
        objectGeom: re
      } = q);
    },
    isWorldMenuShown: he,
    updateSelectionMenu: me,
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
    viewController: b
  } = e;
  let v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe, ge, ve, I, ae, y, S, V, Y, x, M, L, k, N, C, B, X, ie, $, se, Se, Me, fe, be, _e, h, z, A, _, g, j, ce, Q, we, xe, T, ye, Ce, Oe, Re, Ae, Ve, je, Ye, $e, He, _t, Nt, ht, St, Nn, mn, gn, Bt, We, Cn, An, er, oo, pa, ha, ao, so, lo, ma, bi, co, ga, ya, ba, uo, Tr, It, Kn, tr, fo, In, va, _a, Sa, gr = null;
  function wa(Ie) {
    p.selection && (p.selection = null, uo());
    const Fe = He(Ie);
    gr = Fe, gn(Fe, !0), re(), b.state.inertia.active = !1, b.state.inertia.vx = 0, b.state.inertia.vy = 0;
    const ke = _e(), mt = be(), ot = ke || mt ? sS(fo(), Ie) : null;
    if (mt && ot) {
      Ie.preventDefault(), ot === "look" ? ao(Fe, Ie.pointerId) : ha(ot, Fe, Ie.pointerId);
      return;
    }
    if (ot === "look") {
      Ie.preventDefault();
      const Be = _t(Ie);
      n.interaction = { kind: "view", last: Be, lastTs: performance.now() }, b.startDrag(Be.x, Be.y, Ie.pointerId, performance.now()), It(Fe), t.setPointerCapture(Ie.pointerId);
      return;
    }
    if (ot) {
      Ie.preventDefault(), so(ot, Fe, Ie.pointerId);
      return;
    }
    if ((ke || mt) && Ie.button !== 0) {
      Ie.preventDefault();
      return;
    }
    if (Ie.button === 1) {
      if (Ie.preventDefault(), n.mode === "frame") {
        const Be = oe();
        if (!Be || s || Be.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Be,
          last: Fe,
          start: {
            yaw_deg: Number(Be.yaw_deg || 0),
            pitch_deg: Number(Be.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Be = n.mode === "unwrap" ? Fe : _t(Ie);
        n.interaction = { kind: "view", last: Be, lastTs: performance.now() }, b.startDrag(Be.x, Be.y, Ie.pointerId, performance.now());
      }
      It(Fe), t.setPointerCapture(Ie.pointerId);
      return;
    }
    if (Ie.button !== 0) return;
    if (n.mode === "frame" && (Ie.altKey || Ie.shiftKey) && !s) {
      const Be = oe(), Ge = y(Be);
      if (!Be || Be.locked === !0 || !Ge) return;
      const Je = Hm({
        frame: Ge,
        point: Fe,
        startRollDeg: Number(Be.roll_deg ?? Be.rot_deg ?? 0),
        shiftKey: Ie.shiftKey,
        altKey: Ie.altKey,
        allowAlt: !0
      });
      if (!Je) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Be,
        center: Je.center,
        lastAngle: Je.lastAngle,
        accumulatedRad: Je.accumulatedRad,
        rollGesture: Je,
        start: { roll_deg: Number(Be.roll_deg ?? Be.rot_deg ?? 0) },
        changed: !1,
        altStarted: Je.source === "alt",
        source: Je.source
      }, t.setPointerCapture(Ie.pointerId), Ie.preventDefault(), ya(), $e({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      ao(Fe, Ie.pointerId), Ie.preventDefault();
      return;
    }
    if (s) {
      n.mode === "pano" && mo(Ie, Fe);
      return;
    }
    if (a && !a.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ma() || bi())) {
      if (!ye()) return;
      lo();
      const Be = n.primaryTool === "mask" ? "mask" : "paint", Ge = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Je = n.mode === "frame" && bi() ? oe() : null, Ut = { kind: "ERP_GLOBAL" }, wt = Je ? ht(Fe, Je, performance.now()) : Nt(Fe, performance.now());
      if (!wt) {
        It(Fe);
        return;
      }
      n.interaction = {
        kind: Ge === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Be,
        _livePreviewToken: Di("live"),
        stroke: Ge === "lasso_fill" ? le(Be, Ge, [wt], Ut) : ne(Be, Ge, [wt], Ut)
      }, Me();
      const yr = ge(n.interaction);
      if (yr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, yr), n.interaction.kind === "paint_stroke") {
          const vi = n.paintEngine.ensureTarget(yr), _i = Number((wt == null ? void 0 : wt.u) ?? (wt == null ? void 0 : wt.x) ?? 0), Si = Number((wt == null ? void 0 : wt.v) ?? (wt == null ? void 0 : wt.y) ?? 0);
          n.paintEngine.appendStrokePoint(vi, _i, Si, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, yr);
      It(Fe), t.setPointerCapture(Ie.pointerId), $e();
      return;
    }
    const gt = C(), Ue = N(), Xe = gt.length > 1 ? V(gt) : Ue ? T(Ue) : null;
    if (n.primaryTool === "cursor" && (Ie.ctrlKey || Ie.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Fe, current: Fe }, It(Fe), t.setPointerCapture(Ie.pointerId), $e({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && E() && _e() && pa(Ie, Fe) || n.primaryTool === "cursor" && d && g() && xa(Ie, Fe)) return;
    if (gt.length > 1 && (Xe != null && Xe.visible)) {
      if ((gt.some((Ge) => h(Ge)) ? { kind: "none" } : $(Xe, Fe)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: gt.map((Ge) => Ge),
          offset: { x: Fe.x - Xe.center.x, y: Fe.y - Xe.center.y },
          startCenter: { x: Xe.center.x, y: Xe.center.y },
          stickerSnapshots: gt.filter((Ge) => j(Ge)).map((Ge) => ({
            id: String(Ge.id || ""),
            yaw_deg: Number(Re(Ge).yaw_deg || 0),
            pitch_deg: Number(Re(Ge).pitch_deg || 0),
            center: (() => {
              var Ut, wt;
              const Je = T(Ge);
              return Je != null && Je.visible ? { x: Number(((Ut = Je.center) == null ? void 0 : Ut.x) || 0), y: Number(((wt = Je.center) == null ? void 0 : wt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })()
          })),
          strokeSnapshots: gt.filter((Ge) => ce(Ge)).map((Ge) => ({
            id: String(Ge.actionGroupId || Ge.id || ""),
            layerKind: String(Ge.layerKind || "paint"),
            snapshot: rn(X(Ge.actionGroupId, Ge.layerKind)),
            frameSnapshot: rn(ue(Ge.actionGroupId, Ge.layerKind)),
            center: (() => {
              var Ut, wt;
              const Je = T(Ge);
              return Je != null && Je.visible ? { x: Number(((Ut = Je.center) == null ? void 0 : Ut.x) || 0), y: Number(((wt = Je.center) == null ? void 0 : wt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: B(Ge.actionGroupId, Ge.layerKind)
          })),
          rasterSnapshots: gt.filter((Ge) => z(Ge)).map((Ge) => ({
            id: Ce(Ge.rasterObjectId || Ge.id || ""),
            snapshot: rn(M().find((Je) => String((Je == null ? void 0 : Je.id) || "") === Ce(Ge.rasterObjectId || Ge.id || ""))),
            center: (() => {
              var Ut, wt;
              const Je = T(Ge);
              return Je != null && Je.visible ? { x: Number(((Ut = Je.center) == null ? void 0 : Ut.x) || 0), y: Number(((wt = Je.center) == null ? void 0 : wt.y) || 0) } : { x: Fe.x, y: Fe.y };
            })(),
            centerUv: x(Ge)
          }))
        }, It(Fe), t.setPointerCapture(Ie.pointerId);
        return;
      }
    } else if (Ue && (Xe != null && Xe.visible)) {
      const Be = h(Ue) ? { kind: "none" } : $(Xe, Fe, Ue);
      if (Be.kind === "scale") {
        n.interaction = ce(Ue) ? {
          kind: "scale_stroke_group",
          item: Ue,
          center: Xe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Xe.center.x, Fe.y - Xe.center.y)),
          snapshot: rn(X(Ue.actionGroupId, Ue.layerKind)),
          frameSnapshot: rn(ue(Ue.actionGroupId, Ue.layerKind)),
          cursor: Be.cursor
        } : z(Ue) ? {
          kind: "scale_raster_object",
          item: Ue,
          center: Xe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Xe.center.x, Fe.y - Xe.center.y)),
          snapshot: rn(M().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === Ce(Ue.rasterObjectId || Ue.id || ""))),
          cursor: Be.cursor
        } : {
          kind: "scale",
          item: Ue,
          center: Xe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Xe.center.x, Fe.y - Xe.center.y)),
          startHFOV: Number(Re(Ue).hFOV_deg || 20),
          startVFOV: Number(Re(Ue).vFOV_deg || 20),
          cursor: Be.cursor
        }, It(Fe), t.setPointerCapture(Ie.pointerId);
        return;
      }
      if (Be.kind === "scale_x" || Be.kind === "scale_y") {
        n.interaction = {
          kind: Be.kind,
          item: Ue,
          center: Xe.center,
          startDist: Math.max(1, Math.hypot(Fe.x - Xe.center.x, Fe.y - Xe.center.y)),
          startHFOV: Number(Re(Ue).hFOV_deg || 20),
          startVFOV: Number(Re(Ue).vFOV_deg || 20),
          cursor: Be.cursor,
          edge: Be.edge
        }, It(Fe), t.setPointerCapture(Ie.pointerId);
        return;
      }
      if (Be.kind === "rotate") {
        n.interaction = ce(Ue) ? {
          kind: "rotate_stroke_group",
          item: Ue,
          center: Xe.center,
          startAng: Math.atan2(Fe.y - Xe.center.y, Fe.x - Xe.center.x),
          snapshot: rn(X(Ue.actionGroupId, Ue.layerKind)),
          frameSnapshot: rn(ue(Ue.actionGroupId, Ue.layerKind))
        } : {
          kind: "rotate",
          item: Ue,
          center: Xe.center,
          startRot: Number(Re(Ue).rot_deg || Re(Ue).roll_deg || 0),
          startAng: Math.atan2(Fe.y - Xe.center.y, Fe.x - Xe.center.x)
        }, It(Fe), t.setPointerCapture(Ie.pointerId);
        return;
      }
      if (Be.kind === "move") {
        if (ce(Ue)) {
          const Ge = n.mode === "frame" ? (() => {
            const Je = oe();
            return Je ? ht(Fe, Je, performance.now()) : null;
          })() : Nt(Fe, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Ue,
            startUv: Ge,
            snapshot: rn(X(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: rn(ue(Ue.actionGroupId, Ue.layerKind))
          }, It(Fe), t.setPointerCapture(Ie.pointerId);
          return;
        }
        if (z(Ue)) {
          const Ge = n.mode === "frame" ? (() => {
            const Je = oe();
            return Je ? ht(Fe, Je, performance.now()) : null;
          })() : Nt(Fe, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Ue,
            startUv: Ge,
            snapshot: rn(M().find((Je) => String((Je == null ? void 0 : Je.id) || "") === Ce(Ue.rasterObjectId || Ue.id || "")))
          }, It(Fe), t.setPointerCapture(Ie.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Ue,
          offset: { x: Fe.x - Xe.center.x, y: Fe.y - Xe.center.y }
        }, It(Fe), t.setPointerCapture(Ie.pointerId);
        return;
      }
    }
    const et = Se(Fe);
    if (et) {
      const Be = n.selectedId !== et.item.id;
      if (Be && n.selectedId && (Ae(), Z()), Bt(et.item), u && Be && (n.cutoutAspectOpen = !1), Be && tr(), Kn(), $e(), h(et.item)) {
        It(Fe);
        return;
      }
      n.interaction = {
        kind: ce(et.item) ? "move_stroke_group" : z(et.item) ? "move_raster_object" : "move",
        item: et.item,
        offset: { x: Fe.x - et.geom.center.x, y: Fe.y - et.geom.center.y },
        startUv: ce(et.item) || z(et.item) ? n.mode === "frame" ? (() => {
          const Ge = oe();
          return Ge ? ht(Fe, Ge, performance.now()) : null;
        })() : Nt(Fe, performance.now()) : null,
        snapshot: ce(et.item) ? rn(X(et.item.actionGroupId, et.item.layerKind)) : z(et.item) ? rn(M().find((Ge) => String((Ge == null ? void 0 : Ge.id) || "") === Ce(et.item.rasterObjectId || et.item.id || ""))) : null,
        frameSnapshot: ce(et.item) ? rn(ue(et.item.actionGroupId, et.item.layerKind)) : null
      }, It(Fe), t.setPointerCapture(Ie.pointerId);
      return;
    }
    const Bn = !!n.selectedId;
    Bn && (Ae(), Z()), pe(), Bn && tr(), Kn(), $e(), n.mode === "pano" && mo(Ie, Fe);
  }
  function Dr(Ie, Fe) {
    return i.gizmoPointer(Ie, w(), Fe.x, Fe.y, t.width, t.height);
  }
  function xa(Ie, Fe) {
    var Xe;
    const ke = (Xe = q().space) == null ? void 0 : Xe.gizmo;
    if (ke && Dr("hover", Fe) !== null && Dr("down", Fe))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: pi(mn(), n.frame),
        changed: !1
      }, t.setPointerCapture(Ie.pointerId), It(Fe), !0;
    const mt = C(), ot = N(), gt = mt.length > 1 ? mt.some((et) => h(et)) ? "none" : $(V(mt), Fe).kind : ot && !h(ot) ? $(T(ot), Fe, ot).kind : "none";
    if (gt !== "none" && gt !== "move") return !1;
    const Ue = i.pickSticker(w(), Fe.x, Fe.y, t.width, t.height);
    return c.stickers.some((et) => et.id === Ue && et.placement === "world") ? (n.worldSelectedId !== Ue && (n.selectedId && (Ae(), Z()), Nn(Ue), tr(), Kn(), ga(), $e()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Ie.pointerId), !0) : !1;
  }
  function po(Ie) {
    var mt;
    const ke = !!(n.worldSelectedId || fe()) && n.primaryTool === "cursor" && g() && !!((mt = q().space) != null && mt.gizmo) ? Dr("hover", Ie) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, $e({ localOnly: !0, reason: ft.VIEW }));
  }
  function ka(Ie, Fe) {
    const ke = Dr("move", Fe);
    if (ke && Ie.camera) {
      for (const [ot, gt] of Object.entries(lf(Ie.mode, Ie.base, Ie.start, ke))) ln(c.camera, ot, n.frame, gt);
      co(), Ie.changed = !0, r.request("sidePanel"), $e({ localOnly: !0 });
      return;
    }
    const mt = c.stickers.find((ot) => ot.id === Ie.id);
    !ke || !mt || (J1(mt, n.frame, lf(Ie.mode, Ie.base, Ie.start, ke)), Ie.changed = !0, Q(), r.request("sidePanel"), $e({ localOnly: !0 }));
  }
  function ho(Ie) {
    n.interaction = null, n.gizmoAxis = null, Ie.kind === "world_gizmo" && (Dr("up", n.pointerPos), l.backgroundDirty = !0, Ie.changed && (Ae(), he(), tr())), It(n.pointerPos), $e();
  }
  function mo(Ie, Fe) {
    if (_e()) {
      const mt = fo().emptyLeft;
      mt && so(mt, Fe, Ie.pointerId);
      return;
    }
    const ke = _t(Ie);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, b.startDrag(ke.x, ke.y, Ie.pointerId, performance.now()), It(Fe), t.setPointerCapture(Ie.pointerId);
  }
  function Ma(Ie, Fe) {
    if (!f || !Oe.playing || (Oe.stop(), Ie.kind === "frame_pan")) return;
    if (Ie.kind === "frame_orbit") {
      const ot = Pe();
      ot && (Ie.pivot = J(ot, O(ot), Fe));
      return;
    }
    if (Ie.kind === "world_gizmo") {
      const ot = c.stickers.find((gt) => gt.id === Ie.id);
      Ie.camera ? Ie.base = K() : ot && (Ie.base = pi(ot, n.frame));
      return;
    }
    if (Ie.kind === "move_multi") {
      const ot = V(Ie.items);
      if (!(ot != null && ot.visible)) return;
      Ie.offset = { x: Fe.x - ot.center.x, y: Fe.y - ot.center.y }, Ie.startCenter = { x: ot.center.x, y: ot.center.y };
      for (const gt of Ie.stickerSnapshots) {
        const Ue = Ie.items.find((et) => String((et == null ? void 0 : et.id) || "") === gt.id), Xe = Ue ? T(Ue) : null;
        Xe != null && Xe.visible && (gt.yaw_deg = Number(Re(Ue).yaw_deg || 0), gt.pitch_deg = Number(Re(Ue).pitch_deg || 0), gt.center = { x: Xe.center.x, y: Xe.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Ie.kind)) return;
    const ke = T(Ie.item);
    if (!(ke != null && ke.visible)) return;
    const mt = Re(Ie.item);
    if (Ie.kind === "move") {
      Ie.offset = { x: Fe.x - ke.center.x, y: Fe.y - ke.center.y };
      return;
    }
    if (Ie.center = ke.center, Ie.kind === "rotate") {
      Ie.startRot = Number(mt.rot_deg || mt.roll_deg || 0), Ie.startAng = Math.atan2(Fe.y - ke.center.y, Fe.x - ke.center.x);
      return;
    }
    Ie.startDist = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)), Ie.startHFOV = Number(mt.hFOV_deg || 20), Ie.startVFOV = Number(mt.vFOV_deg || 20);
  }
  function ml(Ie) {
    var mt, ot, gt, Ue, Xe, et, Bn, Be, Ge, Je, Ut, wt, yr, vi, _i, Si, yo, Na, Ca, Aa, bo, Ia;
    const Fe = He(Ie);
    if (gn(Fe, !0), !n.interaction) {
      po(Fe), It(Fe);
      return;
    }
    It(Fe);
    const ke = n.interaction;
    if (gr && (Fe.x !== gr.x || Fe.y !== gr.y)) {
      const at = gr;
      gr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Ma(ke, at);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        ka(ke, Fe);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const at = typeof Ie.getCoalescedEvents == "function" ? Ie.getCoalescedEvents() : [Ie];
        let lt = !1;
        at.forEach((dt) => {
          const pt = He(dt);
          if (n.mode === "frame") {
            const tn = oe(), Wt = tn ? y(tn) : null;
            if (Wt) {
              const Xt = (pt.x - Wt.x) / Math.max(1, Wt.w), Ct = (pt.y - Wt.y) / Math.max(1, Wt.h);
              if (!(Xt >= 0 && Xt <= 1 && Ct >= 0 && Ct <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, F(ke));
            }
          }
          H(ke, pt, performance.now()) && (lt = !0);
        }), lt && $e({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const at = typeof Ie.getCoalescedEvents == "function" ? Ie.getCoalescedEvents() : [Ie];
        let lt = !1;
        if (at.forEach((dt) => {
          const pt = He(dt);
          if (n.mode === "frame") {
            const tn = oe(), Wt = tn ? y(tn) : null;
            if (Wt) {
              const Xt = (pt.x - Wt.x) / Math.max(1, Wt.w), Ct = (pt.y - Wt.y) / Math.max(1, Wt.h);
              if (!(Xt >= 0 && Xt <= 1 && Ct >= 0 && Ct <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, v(ke));
            }
          }
          U(ke, pt, performance.now()) && (lt = !0);
        }), lt) {
          const dt = ge(ke);
          dt && n.paintEngine.updateActiveStroke(ke.stroke, dt), $e({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const at = performance.now(), lt = n.mode === "unwrap" ? Fe : _t(Ie);
        b.moveDrag(lt.x, lt.y, n.mode === "unwrap" ? "unwrap" : "pano", at), ke.lastTs = at, ke.last = lt, $e({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        de(ke, Fe);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const at = er();
        Cn(ke.kind === "space_pan" ? Jh(at, Fe.x - ke.last.x, Fe.y - ke.last.y, t.width, t.height, ke.depth) : Xh(at, Fe.x - ke.last.x, Fe.y - ke.last.y, t.height, ke.pivot)), ke.last = Fe;
        return;
      }
      if (ke.kind === "pan_frame") {
        const at = ae(ke.shot);
        if (!at || !ke.shot) return;
        const lt = Fe.x - ke.last.x, dt = Fe.y - ke.last.y, pt = Wm(ke.shot, {
          dx: lt,
          dy: dt,
          focalPx: at.focalPx,
          invertX: ((mt = c.ui_settings) == null ? void 0 : mt.invert_view_x) === !0,
          invertY: ((ot = c.ui_settings) == null ? void 0 : ot.invert_view_y) === !0
        });
        ke.shot.yaw_deg = pt.yaw_deg, ke.shot.pitch_deg = pt.pitch_deg, ke.changed = ke.changed || Math.abs(lt) > 0 || Math.abs(dt) > 0, ke.last = Fe, $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        W(ke, Fe, Ie);
        return;
      }
      if (ke.kind === "move") {
        const at = Fe.x - ke.offset.x, lt = Fe.y - ke.offset.y;
        if (n.mode === "frame" && u) {
          const dt = oe(), pt = y(dt);
          if (!dt || !pt) return;
          const tn = {
            x: Ee((at - pt.x) / Math.max(1, pt.w), 0, 1),
            y: Ee((lt - pt.y) / Math.max(1, pt.h), 0, 1)
          }, Wt = te(dt, tn);
          if (!Wt) return;
          const Xt = Wa(Wt);
          In(ke.item, { yaw_deg: Xt.yaw, pitch_deg: Xt.pitch });
        } else if (n.mode === "unwrap") {
          const dt = ie(), pt = Ee((at - dt.x) / Math.max(dt.w, 1), 0, 1), tn = Ee((lt - dt.y) / Math.max(dt.h, 1), 0, 1);
          In(ke.item, { yaw_deg: Rt(pt * 360 - 180), pitch_deg: Ee(90 - tn * 180, -90, 90) });
        } else {
          const dt = St(at, lt), pt = Wa(dt);
          In(ke.item, { yaw_deg: pt.yaw, pitch_deg: pt.pitch });
        }
        j(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const at = n.mode === "frame" ? (() => {
          const pt = oe();
          return pt ? ht(Fe, pt, performance.now()) : null;
        })() : Nt(Fe, performance.now());
        if (!at || !ke.startUv) return;
        const lt = An(Number(at.u || 0), Number(ke.startUv.u || 0)), dt = Number(at.v || 0) - Number(ke.startUv.v || 0);
        R((gt = ke.item) == null ? void 0 : gt.actionGroupId, lt, dt, ke.snapshot, (Ue = ke.item) == null ? void 0 : Ue.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const at = n.mode === "frame" ? (() => {
          const pt = oe();
          return pt ? ht(Fe, pt, performance.now()) : null;
        })() : Nt(Fe, performance.now());
        if (!at || !ke.startUv) return;
        const lt = An(Number(at.u || 0), Number(ke.startUv.u || 0)), dt = Number(at.v || 0) - Number(ke.startUv.v || 0);
        D(((Xe = ke.item) == null ? void 0 : Xe.rasterObjectId) || ((et = ke.item) == null ? void 0 : et.id) || "", lt, dt, ke.snapshot) && (we(), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const lt = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        P(((Bn = ke.item) == null ? void 0 : Bn.rasterObjectId) || ((Be = ke.item) == null ? void 0 : Be.id) || "", lt, ke.snapshot) && (we(), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const at = Fe.x - Number(((Ge = ke.offset) == null ? void 0 : Ge.x) || 0), lt = Fe.y - Number(((Je = ke.offset) == null ? void 0 : Je.y) || 0);
        let dt = !1, pt = !1, tn = !1;
        const Wt = at - Number(((Ut = ke.startCenter) == null ? void 0 : Ut.x) || at), Xt = lt - Number(((wt = ke.startCenter) == null ? void 0 : wt.y) || lt);
        for (const Ct of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const Tt = (m === "cutout" ? ve() : S()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(Ct.id || ""));
          if (!Tt || !j(Tt)) continue;
          const Qt = {
            x: Number(((yr = Ct.center) == null ? void 0 : yr.x) || 0) + Wt,
            y: Number(((vi = Ct.center) == null ? void 0 : vi.y) || 0) + Xt
          };
          if (n.mode === "frame" && u) {
            const Ft = oe(), De = y(Ft);
            if (!Ft || !De) continue;
            const qe = {
              x: Ee((Qt.x - De.x) / Math.max(1, De.w), 0, 1),
              y: Ee((Qt.y - De.y) / Math.max(1, De.h), 0, 1)
            }, yn = te(Ft, qe);
            if (!yn) continue;
            const Jt = Wa(yn);
            In(Tt, { yaw_deg: Jt.yaw, pitch_deg: Jt.pitch });
          } else if (n.mode === "unwrap") {
            const Ft = ie(), De = Ee((Qt.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), qe = Ee((Qt.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
            In(Tt, { yaw_deg: Rt(De * 360 - 180), pitch_deg: Ee(90 - qe * 180, -90, 90) });
          } else {
            const Ft = St(Qt.x, Qt.y), De = Wa(Ft);
            In(Tt, { yaw_deg: De.yaw, pitch_deg: De.pitch });
          }
          dt = !0;
        }
        for (const Ct of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const Tt = {
            x: Number(((_i = Ct.center) == null ? void 0 : _i.x) || 0) + Wt,
            y: Number(((Si = Ct.center) == null ? void 0 : Si.y) || 0) + Xt
          }, Qt = n.mode === "frame" ? (() => {
            const De = oe();
            return De ? ht(Tt, De, performance.now()) : null;
          })() : Nt(Tt, performance.now()), Ft = Ct.centerUv || null;
          if (Qt && Ft) {
            const De = An(Number(Qt.u || 0), Number(Ft.u || 0)), qe = Number(Qt.v || 0) - Number(Ft.v || 0);
            R(Ct.id, De, qe, Ct.snapshot, Ct.layerKind, Ct.frameSnapshot) && (dt = !0, pt = !0);
          }
        }
        for (const Ct of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const Tt = {
            x: Number(((yo = Ct.center) == null ? void 0 : yo.x) || 0) + Wt,
            y: Number(((Na = Ct.center) == null ? void 0 : Na.y) || 0) + Xt
          }, Qt = n.mode === "frame" ? (() => {
            const De = oe();
            return De ? ht(Tt, De, performance.now()) : null;
          })() : Nt(Tt, performance.now()), Ft = Ct.centerUv || null;
          if (Qt && Ft) {
            const De = An(Number(Qt.u || 0), Number(Ft.u || 0)), qe = Number(Qt.v || 0) - Number(Ft.v || 0);
            D(Ct.id, De, qe, Ct.snapshot) && (dt = !0, tn = !0);
          }
        }
        dt && (pt ? xe({ rebuildPaintEngine: !1 }) : tn ? we() : Q(), $e({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const lt = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        ee((Ca = ke.item) == null ? void 0 : Ca.actionGroupId, lt, 0, ke.snapshot, (Aa = ke.item) == null ? void 0 : Aa.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let at = (Math.atan2(Fe.y - ke.center.y, Fe.x - ke.center.x) - Number(ke.startAng || 0)) * hi;
        Ie.shiftKey && (at = Math.round(at / 45) * 45), ee((bo = ke.item) == null ? void 0 : bo.actionGroupId, 1, at, ke.snapshot, (Ia = ke.item) == null ? void 0 : Ia.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), $e({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Fe, $e({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const lt = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / ke.startDist;
        In(ke.item, { hFOV_deg: Ee(ke.startHFOV * lt, 1, 179), vFOV_deg: Ee(ke.startVFOV * lt, 1, 179) }), A(ke.item) || (ke.item.aspect_id = ci(ke.item)), j(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const lt = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / ke.startDist;
        In(ke.item, { hFOV_deg: Ee(ke.startHFOV * lt, 1, 179) }), A(ke.item) || (ke.item.aspect_id = ci(ke.item)), j(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const lt = Math.max(1, Math.hypot(Fe.x - ke.center.x, Fe.y - ke.center.y)) / ke.startDist;
        In(ke.item, { vFOV_deg: Ee(ke.startVFOV * lt, 1, 179) }), A(ke.item) || (ke.item.aspect_id = ci(ke.item)), j(ke.item) && Q(), $e({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let lt = (Math.atan2(Fe.y - ke.center.y, Fe.x - ke.center.x) - ke.startAng) * hi, dt = ke.startRot - lt;
        Ie.shiftKey && (dt = Math.round(dt / 45) * 45), In(ke.item, { [j(ke.item) ? "rot_deg" : "roll_deg"]: dt }), j(ke.item) && Q(), $e({ localOnly: !0 });
      }
    }
  }
  function gl() {
    var Fe, ke, mt, ot, gt, Ue, Xe;
    const Ie = n.interaction;
    if (!((Ie == null ? void 0 : Ie.kind) === "roll_frame" && Ie.source === "knob")) {
      if ((Ie == null ? void 0 : Ie.kind) === "space_pan" || (Ie == null ? void 0 : Ie.kind) === "space_orbit") {
        n.interaction = null, It(n.pointerPos), Kn();
        return;
      }
      if ((Ie == null ? void 0 : Ie.kind) === "world_select" || (Ie == null ? void 0 : Ie.kind) === "world_gizmo") {
        ho(Ie);
        return;
      }
      if (((Fe = n.interaction) == null ? void 0 : Fe.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        Me();
        const et = me(n.interaction), Bn = !!n.interaction._hasCommittedSegments;
        if (et || Bn) {
          xe();
          const Be = String(((mt = n.interaction.stroke) == null ? void 0 : mt.actionGroupId) || "").trim();
          if (Be) {
            const Je = Y().find((Ut) => String((Ut == null ? void 0 : Ut.actionGroupId) || "") === Be);
            Je && (Je.frame = null);
          }
          const Ge = ge(n.interaction);
          Ge && (et ? String(((ot = n.interaction.stroke) == null ? void 0 : ot.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ge), Ye()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ge) : n.paintEngine.cancelActiveStroke(Ge)), Ae(), Z(), tr(), Kn(), o.setDirtyCanvas(!0, !0), $e();
        } else {
          const Be = ge(n.interaction);
          Be && n.paintEngine.cancelActiveStroke(Be);
        }
      } else if (((gt = n.interaction) == null ? void 0 : gt.kind) === "marquee_select") {
        const et = Ve(n.interaction.start, n.interaction.current), Be = [
          ...m === "cutout" ? I().filter((Ge) => !_(Ge)) : [...S()],
          ...k(),
          ...L()
        ].filter((Ge) => je(et, T(Ge)));
        We(Be, ((Ue = Be[Be.length - 1]) == null ? void 0 : Ue.id) || null), u && Be.length && (n.cutoutAspectOpen = !1), tr(), Kn(), $e();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Xe = n.interaction) == null ? void 0 : Xe.kind))
        n.interaction.changed && (Ae(), he(), tr());
      else if (n.interaction && n.interaction.kind !== "view") {
        let et = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (et = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (et = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (et = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (et = !0), et && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : we()), Ae(), Z(), o.setDirtyCanvas(!0, !0), ba(), Kn(), $e();
      }
      n.interaction = null, (Ie == null ? void 0 : Ie.kind) === "roll_frame" && se(), Me(), Ie && Ie.kind === "view" && oo(() => b.endDrag(performance.now())), Tr(), Kn(), It(n.pointerPos), $e();
    }
  }
  function Pa() {
    var Ie, Fe, ke, mt, ot;
    if (!G()) {
      if (((Ie = n.interaction) == null ? void 0 : Ie.kind) === "world_select" || ((Fe = n.interaction) == null ? void 0 : Fe.kind) === "world_gizmo") {
        ho(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && oo(() => b.endDrag(performance.now())), ((mt = n.interaction) == null ? void 0 : mt.kind) === "paint_stroke" || ((ot = n.interaction) == null ? void 0 : ot.kind) === "paint_lasso_fill") {
        Me();
        const gt = ge(n.interaction);
        gt && n.paintEngine.cancelActiveStroke(gt);
      }
      n.interaction = null, Me(), Tr(), It(n.pointerPos), $e({ localOnly: !0 });
    }
  }
  function go(Ie) {
    const Fe = He(Ie), ke = gn(Fe, !0);
    n.interaction || (It(Fe), ke && n.mode === "frame" && n.primaryTool === "cursor" && $e({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function yl(Ie) {
    if (n.mode === "frame") {
      const Fe = He(Ie), ke = Ss(Ie);
      ke && lo(), ke && be() ? va(Fe, -ke) : ke && _a(Fe, ke) && $e({ localOnly: !0 }), Ie.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (re(), _e()) {
        const Fe = Ss(Ie);
        Fe && Sa(He(Ie), -Fe);
      } else b.applyWheelEvent(Ie) && $e({ localOnly: !0, reason: ft.VIEW });
      Ie.preventDefault();
    }
  }
  return {
    connect(Ie) {
      ({
        _segmentFrameLassoFill: v,
        _segmentFrameStroke: F,
        appendLassoPoint: U,
        appendPaintPoint: H,
        applyRasterObjectOffset: D,
        applyRasterObjectTransform: P,
        applySharedRollInteractionPoint: W,
        applyStrokeGroupOffset: R,
        applyStrokeGroupTransform: ee,
        buildFreehandStrokeRecord: ne,
        buildLassoFillStrokeRecord: le,
        cameraShoots: E,
        cancelFrameCameraGesture: G,
        cancelViewTransition: re,
        clearSelection: pe,
        commitAndRefreshNode: he,
        commitPaintInteraction: me,
        commitState: Z,
        currentSpaceCamera: w,
        cutoutCamera: K,
        dragFrame: de,
        editorViewInput: q,
        ensureGroupFrame: ue,
        frameContext: Pe,
        frameLocalPointToWorldDir: te,
        frameSpaceView: O,
        frameTarget: J,
        getActiveCutoutShot: oe,
        getActivePaintTargetDescriptor: ge,
        getCutoutSelectableItems: ve,
        getCutoutSelectableItemsForHit: I,
        getFrameViewLayout: ae,
        getFrameViewRect: y,
        getList: S,
        getMultiSelectionGeom: V,
        getPaintingGroupList: Y,
        getRasterObjectCenterUv: x,
        getRasterObjectList: M,
        getSelectableRasterObjectItems: L,
        getSelectableStrokeGroupItems: k,
        getSelected: N,
        getSelectedItems: C,
        getStrokeGroupCenterUv: B,
        getStrokeGroupStrokes: X,
        getUnwrapRect: ie,
        handleHit: $,
        hideTooltip: se,
        hitObjectAt: Se,
        invalidateLivePaintPreviewCaches: Me,
        isCameraSelected: fe,
        isFreeFrameView: be,
        isFreeSpaceView: _e,
        isItemLocked: h,
        isRasterObjectItem: z,
        isSceneSticker: A,
        isShotItem: _,
        isSpaceView: g,
        isStickerItem: j,
        isStrokeGroupItem: ce,
        markObjectVisualsDirty: Q,
        markPaintCompositeVisualsDirty: we,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: T,
        paintingShown: ye,
        parseRasterObjectSelectionId: Ce,
        playback: Oe,
        poseOf: Re,
        pushHistory: Ae,
        rectFromPoints: Ve,
        rectIntersectsGeom: je,
        refreshPaintEngineRevisionCache: Ye,
        requestDraw: $e,
        screenPos: He,
        screenPosCss: _t,
        screenPosToErpPoint: Nt,
        screenPosToFrameAsErpPoint: ht,
        screenToWorldDir: St,
        selectWorldSticker: Nn,
        selectedWorldSticker: mn,
        setPointerPos: gn,
        setSelectedItem: Bt,
        setSelectedItems: We,
        setSpaceView: Cn,
        shortestWrappedDelta: An,
        spaceViewState: er,
        startAnimation: oo,
        startCameraPress: pa,
        startFrameDrag: ha,
        startPanFrame: ao,
        startSpaceDrag: so,
        stopTimelinePlayback: lo,
        supportsErpPainting: ma,
        supportsFramePainting: bi,
        syncCutoutShot: co,
        syncFloatingViewButtonState: ga,
        syncFrameRollKnob: ya,
        syncSidePanelControls: ba,
        syncTimeline: uo,
        syncViewToggleState: Tr,
        updateCursor: It,
        updateSelectionMenu: Kn,
        updateSidePanel: tr,
        viewControls: fo,
        writePose: In,
        zoomFrameAt: va,
        zoomFrameViewAt: _a,
        zoomSpaceAt: Sa
      } = Ie);
    },
    onCanvasPointerDown: wa,
    worldGizmoPointer: Dr,
    hoverWorldGizmo: po,
    onCanvasPointerMove: ml,
    onCanvasPointerUp: gl,
    onCanvasPointerCancel: Pa,
    onCanvasMouseMove: go,
    onCanvasWheel: yl
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
  let f, p, m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te;
  function O(ve, I, ae = !1) {
    var L;
    Z();
    const y = s && n.mode === "frame" ? F() : null, S = y || D(), V = y ? "shot" : W(), Y = he();
    if (Y && !Pe(Y) || !Y && (!S || V === "stroke" || R(S))) return;
    const x = (((L = c.sidePanel) == null ? void 0 : L.params) || []).find((k) => k.key === ve);
    if (!x || x.enabled === !1) return;
    let M = Number(I);
    if (Number.isNaN(M) && (M = 0), (Y || t) && jM.has(ve) ? M = ve === "scale" ? Math.max(M, pg) : M : M = Ee(M, Number(x.min), Number(x.max)), ve === "yaw_deg" && (M = Rt(M)), !Y && t && ve.startsWith("position_")) {
      K(), U1(l.camera, n.frame, ve, M), ue(), pe(), ae && re();
      return;
    }
    if (Y) {
      X1(Y, n.frame, ve, M), le(), ue(), pe(), ae && re();
      return;
    }
    ve === "opacity" ? Y1(S, n.frame, M / 100) : te(S, { [ve]: M }), s && !ee(S) && (ve === "hFOV_deg" || ve === "vFOV_deg") && (S.aspect_id = ci(S)), ue(), pe(), ae && re();
  }
  async function J(ve) {
    var y, S, V, Y, x, M, L;
    const I = ve.target.closest("[data-action]");
    if (!I) return;
    const ae = String(I.getAttribute("data-action") || "");
    if (ae === "coverage-set") {
      const k = Pn(I.getAttribute("data-coverage"));
      if (k === Pn(l.coverage)) return;
      l.coverage = k, n.coverage = k, r && (r.value = String(k)), o ? a.backgroundDirty = !0 : (v(), w({
        syncPreview: u !== "cutout",
        syncGraph: u !== "cutout"
      })), ue(), q(), pe();
      return;
    }
    if (ae === "toggle-selection-picker") {
      if ((S = (y = c.sidePanel) == null ? void 0 : y.selectionPicker) != null && S.disabled) return;
      c.sidePanel.selectionPicker.open = !c.sidePanel.selectionPicker.open;
      return;
    }
    if (ae === "select-picker-item") {
      c.sidePanel.selectionPicker.open = !1;
      const k = String(I.getAttribute("data-selection-id") || "");
      let N = null;
      if (k && (u === "stickers" ? N = [...H(), ...d ? l.shots : []].find((C) => String((C == null ? void 0 : C.id) || "") === k) || null : N = ((V = U().find((C) => {
        var B;
        return String(((B = C == null ? void 0 : C.item) == null ? void 0 : B.id) || "") === k;
      })) == null ? void 0 : V.item) || null), me(N || null), N && !ne(N)) {
        const C = G(N);
        de(Rt(Number(C.yaw_deg || 0)), Ee(Number(C.pitch_deg || 0), -89.9, 89.9));
      }
      ue(), q(), pe();
      return;
    }
    if (ae === "copy-state-inline") {
      const k = D(), N = W();
      if (!k || N === "stroke" || P().length > 1) return;
      const C = JSON.stringify(s && N !== "image" ? p(k) : m(G(k)));
      try {
        await navigator.clipboard.writeText(C), (Y = c.sidePanel) != null && Y.copyStateButton && (c.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = c.sidePanel) != null && B.copyStateButton && (c.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (ae === "set-invert-x") {
      l.ui_settings.invert_view_x = I.getAttribute("data-value") === "1", E(), ue(), (x = i.setDirtyCanvas) == null || x.call(i, !0, !0), pe();
      return;
    }
    if (ae === "set-invert-y") {
      l.ui_settings.invert_view_y = I.getAttribute("data-value") === "1", E(), ue(), (M = i.setDirtyCanvas) == null || M.call(i, !0, !0), pe();
      return;
    }
    if (ae === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, E(), ue(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), pe();
      return;
    }
    if (ae === "close-preview") {
      b();
      return;
    }
    if (ae === "cancel-close") {
      b();
      return;
    }
    ae === "save-close" && (f(), b());
  }
  function oe(ve) {
    const I = ve.target.closest("[data-action='param-input']");
    I && O(String(I.getAttribute("data-param-key") || ""), I.value, !1);
  }
  function ge(ve) {
    const I = ve.target.closest("[data-action='param-input']");
    I && O(String(I.getAttribute("data-param-key") || ""), I.value, !0);
  }
  return {
    connect(ve) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: p,
        buildCanonicalSelectedStickerState: m,
        closeEditor: b,
        commitState: v,
        getActiveCutoutShot: F,
        getCutoutInspectorItems: U,
        getList: H,
        getSelected: D,
        getSelectedItems: P,
        getSelectedKind: W,
        isItemLocked: R,
        isSceneSticker: ee,
        isStrokeGroupItem: ne,
        markObjectVisualsDirty: le,
        persistUiSettings: E,
        poseOf: G,
        pushHistory: re,
        requestDraw: pe,
        selectedWorldSticker: he,
        setSelectedItem: me,
        stopTimelinePlayback: Z,
        syncCoverageChangeToNodePreviews: w,
        syncCutoutShot: K,
        turnViewTo: de,
        updateSelectionMenu: q,
        updateSidePanel: ue,
        worldStickerEditable: Pe,
        writePose: te
      } = ve);
    },
    onSidePanelClick: J,
    onSidePanelInput: oe,
    onSidePanelChange: ge
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
  let m, b, v, F, U, H, D, P, W, R, ee, ne, le, E, G, re, pe, he, me, Z, w, K, de, q, ue, Pe, te, O, J, oe, ge, ve, I, ae, y, S, V, Y, x, M, L, k, N, C, B, X, ie, $, se, Se, Me;
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
    const Ae = [
      En(t.customPaintColor),
      ...t.customPaintHistory.filter((Ve) => !Ws(Ve, t.customPaintColor))
    ];
    t.customPaintHistory = Ae.slice(0, 8), t.customPaintSessionStart = null;
  }, be = (Ae = !1) => {
    !i || i.hidden || (Ae ? fe() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, _e = () => {
    i && (i.hidden && (t.customPaintSessionStart = En(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function h() {
    x();
  }
  function z(Ae) {
    var St, Nn, mn, gn, Bt;
    if ((Nn = (St = Ae.target) == null ? void 0 : St.matches) != null && Nn.call(St, "[data-confirm-overlay]")) {
      const We = (mn = f.confirmDialog) == null ? void 0 : mn.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, We == null || We(!1);
      return;
    }
    const Ve = Ae.target.closest("[data-space-mode]");
    if (Ve) {
      ae(Ve.getAttribute("data-space-mode"));
      return;
    }
    const je = Ae.target.closest("[data-gizmo-mode]");
    if (je) {
      t.gizmoMode = je.getAttribute("data-gizmo-mode"), d.backgroundDirty = !0, se(), O({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Ye = Ae.target.closest("[data-view]");
    if (Ye) {
      if (Ye.getAttribute("aria-disabled") === "true") return;
      const We = t.mode;
      t.mode = String(Ye.getAttribute("data-view") || "pano"), u && t.mode === "frame" && (We !== "frame" && (d.frameSafeRect = null), Se(), se()), E(), N(), O();
      return;
    }
    const $e = Ae.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if ($e && !s) {
      if ($e.matches("[data-tool-mode]")) {
        const We = String($e.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = We, (We === "paint" || We === "mask") && W({ preservePanelValues: !0 }), M(), Se(), se(), O();
        return;
      }
      if ($e.matches("[data-tool-ui-action]")) {
        const We = String($e.getAttribute("data-tool-ui-action") || "");
        if ((We === "undo" || We === "redo") && $e.disabled) return;
        We === "undo" ? J(-1) : We === "redo" ? J(1) : We === "clear" ? D() : We === "add" || We === "add-image" ? b() : We === "add-world" ? F() : We === "add-or-look" ? m() : We === "add-camera" && v();
        return;
      }
      if ($e.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const We = String($e.getAttribute("data-paint-tool") || "pen");
        t.paintTool = We, W({ preservePanelValues: !0 }), Sn[We] && (t.activeBrushPresetId = We), M(), Se(), se(), O();
        return;
      }
      if ($e.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String($e.getAttribute("data-mask-tool") || "pen"), W({ preservePanelValues: !0 }), M(), Se(), se(), O();
        return;
      }
      if ($e.matches("[data-paint-layer-clear-current]")) {
        const We = String($e.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        P(We);
        return;
      }
      if ($e.matches("[data-paint-color-swatch]")) {
        const We = pl.find((Cn) => Cn.id === $e.getAttribute("data-paint-color-swatch"));
        if (!We) return;
        t.paintColor = En(We.color), be(!0), M();
        return;
      }
      if ($e.matches("[data-paint-color-custom]")) {
        Ae.preventDefault(), Ae.stopPropagation(), i && !i.hidden ? be(!0) : _e(), M();
        return;
      }
    }
    const He = String(((gn = $e == null ? void 0 : $e.getAttribute) == null ? void 0 : gn.call($e, "data-action")) || "");
    if (He === "video-play-toggle") {
      if (Ae.preventDefault(), Ae.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      Me.resumeAfterScrub = !1, C();
      return;
    }
    if (He === "video-audio-toggle") {
      Ae.preventDefault(), Ae.stopPropagation(), ie(), typeof ($e == null ? void 0 : $e.blur) == "function" && $e.blur();
      return;
    }
    if (He === "video-loop-toggle") {
      if (Ae.preventDefault(), Ae.stopPropagation(), !(p instanceof HTMLVideoElement)) return;
      const We = !f.videoTransport.loop;
      f.videoTransport.loop = We, p.loop = We, k({
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
        const We = t.mode === "frame" ? re() : null;
        if (!We || We.locked === !0) return;
        I(We, String($e.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, L(), ue(), R(), N(), Se(), se(), O();
        return;
      }
      if (He === "frame-aspect-custom") {
        const We = t.mode === "frame" ? re() : null, Cn = $e.getAttribute("data-custom-width"), An = $e.getAttribute("data-custom-height");
        if (!We || !U(We, Cn, An)) return;
        f.frameRail.aspectOpen = !1, L(), ue(), R(), N(), O();
        return;
      }
      if (He === "frame-rotate-90") {
        const We = t.mode === "frame" ? re() : null;
        if (!We || We.locked === !0) return;
        ge(We), f.frameRail.aspectOpen = !1, L(), ue(), R(), N(), O();
        return;
      }
      if (He === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, se(), O();
        return;
      }
      if (He === "aspect-set") {
        const We = he();
        if (!We) return;
        const Cn = String($e.getAttribute("data-aspect") || "1:1");
        I(We, Cn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), ue(), R(), se(), O();
        return;
      }
      if (He === "rotate-90") {
        const We = he();
        if (!We || w()) return;
        ge(We), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), ue(), R(), se(), O();
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
        le();
        return;
      }
      if (He === "replace-image") {
        te();
        return;
      }
      if (He === "toggle-lock") {
        X();
        return;
      }
      if (He === "back-initial") {
        oe();
        return;
      }
      if (He === "toggle-visible") {
        B();
        return;
      }
      if (He === "delete") {
        ne();
        return;
      }
    }
    if (He === "reset-view") {
      if (t.mode === "frame") return;
      $(
        { position: V(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Bt = ee()) == null ? void 0 : Bt.radius) || Jn },
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
      Ae.preventDefault(), Ae.stopPropagation(), Ce();
      return;
    }
    if (He === "toggle-output-preview-size") {
      Ae.preventDefault(), Ae.stopPropagation();
      const We = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = We, Y(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = We ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Re(), O();
      return;
    }
    const _t = Ae.target.closest("[data-paint-history-index]");
    if (!_t) return;
    const Nt = Number(_t.getAttribute("data-paint-history-index")), ht = t.customPaintHistory[Nt];
    ht && (t.customPaintColor = En(ht), t.paintColor = En(ht), M());
  }
  function A(Ae) {
    const Ve = Ae.target.closest("[data-video-seek]");
    if (Ve) {
      if (!(p instanceof HTMLVideoElement)) return;
      de.playing && (Me.resumeAfterScrub = !0), de.seek(ti(Number(Ve.value || 0), q()));
      return;
    }
    const je = Ae.target.closest("[data-video-volume]");
    if (je) {
      if (!(p instanceof HTMLVideoElement)) return;
      const He = Ee(Number(je.value || 0), 0, 1);
      p.volume = He, p.muted = He <= 1e-4, k({
        hasAudio: f.videoTransport.hasAudio,
        muted: p.muted,
        volume: He
      });
      return;
    }
    const Ye = Ae.target.closest("[data-paint-size-slider]");
    if (Ye) {
      if (Ye.disabled) return;
      const He = Math.max(1, Math.min(120, Math.round(Number(Ye.value)))), _t = pe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[_t] = He, M(), y();
      return;
    }
    const $e = Ae.target.closest("[data-paint-alpha-slider]");
    if ($e) {
      const He = { ...t.customPaintColor, a: Ee(Number($e.value) / 100, 0, 1) };
      t.customPaintColor = En(He), t.paintColor = En(He), M();
    }
  }
  function _(Ae) {
    var Ve;
    if (Ae.target.closest("[data-video-seek]")) {
      if (!(p instanceof HTMLVideoElement)) return;
      Me.resumeAfterScrub && de.play(), Me.resumeAfterScrub = !1;
      return;
    }
    if (Ae.target.closest("[data-video-volume]")) {
      typeof ((Ve = Ae.target) == null ? void 0 : Ve.blur) == "function" && Ae.target.blur();
      return;
    }
    Ae.target.closest("[data-paint-size-slider]") && me();
  }
  function g(Ae) {
    const Ve = Ae.target.closest("[data-tip]");
    !Ve || !l.contains(Ve) || c.target !== Ve && (c.target = Ve, c.timer && clearTimeout(c.timer), c.timer = window.setTimeout(() => {
      c.target === Ve && S(Ve);
    }, 220));
  }
  function j(Ae) {
    var Ye, $e;
    const Ve = Ae.target.closest("[data-tip]");
    !Ve || c.target !== Ve || (Ae.relatedTarget instanceof Element ? ($e = (Ye = Ae.relatedTarget).closest) == null ? void 0 : $e.call(Ye, "[data-tip]") : null) === Ve || Z();
  }
  function ce(Ae, Ve) {
    var Nt;
    if (!o) return;
    const je = o.getBoundingClientRect(), Ye = Ee((Ae - je.left) / Math.max(1, je.width), 0, 1), $e = 1 - Ee((Ve - je.top) / Math.max(1, je.height), 0, 1), He = Zc(t.customPaintColor), _t = { ...Jc(He.h, Ye, $e), a: Number(((Nt = t.customPaintColor) == null ? void 0 : Nt.a) ?? 1) };
    t.customPaintColor = En(_t), t.paintColor = En(_t), M();
  }
  function Q(Ae) {
    var He;
    if (!a) return;
    const Ve = a.getBoundingClientRect(), je = Ee((Ae - Ve.left) / Math.max(1, Ve.width), 0, 1), Ye = Zc(t.customPaintColor), $e = { ...Jc(je, Ye.s, Ye.v), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = En($e), t.paintColor = En($e), M();
  }
  function we(Ae, Ve) {
    const je = Ae.pointerId;
    Ve(Ae);
    const Ye = (He) => {
      He.pointerId === je && Ve(He);
    }, $e = (He) => {
      He.pointerId === je && (window.removeEventListener("pointermove", Ye), window.removeEventListener("pointerup", $e), window.removeEventListener("pointercancel", $e));
    };
    window.addEventListener("pointermove", Ye), window.addEventListener("pointerup", $e), window.addEventListener("pointercancel", $e);
  }
  function xe() {
    const Ae = !!t.fullscreen;
    Fi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ae ? ze.fullscreen_close : ze.fullscreen,
      label: Ae ? "Exit Fullscreen" : "Fullscreen",
      tip: Ae ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function T(Ae) {
    const Ve = !!Ae;
    t.fullscreen !== Ve && (t.fullscreen = Ve, l.classList.toggle("pano-modal-fullscreen", Ve), Ve ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), h(), xe(), Pe(), O());
  }
  function ye() {
    return document.fullscreenElement === n;
  }
  async function Ce() {
    var Ae, Ve;
    try {
      if (!document.fullscreenEnabled) {
        T(!t.fullscreen);
        return;
      }
      ye() ? await ((Ve = document.exitFullscreen) == null ? void 0 : Ve.call(document)) : await ((Ae = n.requestFullscreen) == null ? void 0 : Ae.call(n));
    } catch {
      T(!t.fullscreen);
    }
  }
  function Oe() {
    document.fullscreenEnabled && T(ye());
  }
  function Re() {
    const Ae = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ae ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = Ae ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ae ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ae) {
      ({
        addCutoutFrame: m,
        addImageSticker: b,
        addStudioCamera: v,
        addWorldImageSticker: F,
        applyCutoutAspectCustom: U,
        bringSelectedToFront: H,
        clearAll: D,
        clearPaintingLayer: P,
        clearSelection: W,
        commitAndRefreshNode: R,
        contentSphere: ee,
        deleteSelected: ne,
        duplicateSelected: le,
        forceCursorTool: E,
        frameSpaceContent: G,
        getActiveCutoutShot: re,
        getBrushPresetIdForTool: pe,
        getSelected: he,
        hidePaintSizePreview: me,
        hideTooltip: Z,
        isErpCamera: w,
        isFreeSpaceView: K,
        playback: de,
        playbackFps: q,
        pushHistory: ue,
        queueVideoTransportLayout: Pe,
        replaceSelectedImage: te,
        requestDraw: O,
        restoreHistory: J,
        restoreSelectedToInitialPose: oe,
        rotateCutoutAspect90: ge,
        sendSelectedToBack: ve,
        setShotAspect: I,
        setSpaceMode: ae,
        showPaintSizePreview: y,
        showTooltipFor: S,
        spaceOrigin: V,
        startAnimation: Y,
        syncFloatingViewButtonState: x,
        syncPaintUi: M,
        syncSidePanelControls: L,
        syncVideoTransportState: k,
        syncViewToggleState: N,
        togglePlayback: C,
        toggleSelectedExternalStickerVisibility: B,
        toggleSelectedLock: X,
        toggleVideoMuted: ie,
        transitionView: $,
        updateSelectionMenu: se,
        updateSidePanel: Se,
        videoState: Me
      } = Ae);
    },
    closePaintColorPop: be,
    syncGridToggleButton: h,
    onRootClick: z,
    onRootInput: A,
    onRootChange: _,
    onRootPointerOver: g,
    onRootPointerOut: j,
    updatePaintColorFromSv: ce,
    updatePaintColorFromHue: Q,
    bindDrag: we,
    syncFullscreenButton: xe,
    setFullscreenState: T,
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
  let s, l, d, u, c, f, p, m, b, v, F, U;
  function H(E) {
    var G, re, pe, he, me;
    if (E.key === "Escape") {
      if (s()) {
        E.preventDefault(), E.stopPropagation(), (G = E.stopImmediatePropagation) == null || G.call(E);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        E.preventDefault(), E.stopPropagation(), (re = E.stopImmediatePropagation) == null || re.call(E), (pe = document.exitFullscreen) == null || pe.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        E.preventDefault(), E.stopPropagation(), (he = E.stopImmediatePropagation) == null || he.call(E), b(!1);
        return;
      }
      E.preventDefault(), E.stopPropagation(), (me = E.stopImmediatePropagation) == null || me.call(E), l();
    }
  }
  function D(E) {
    const G = String(E.key || ""), re = String(E.code || ""), pe = Number(E.keyCode || 0);
    if (!(G === "Delete" || re === "Delete" || pe === 46) && !(G === "Backspace" || re === "Backspace" || pe === 8)) return;
    const Z = E.target, w = ((Z == null ? void 0 : Z.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || Z != null && Z.isContentEditable) return;
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
    const re = ((G == null ? void 0 : G.tagName) || "").toUpperCase();
    return re === "INPUT" ? !zM.has(String(G.type || "text").toLowerCase()) : re !== "TEXTAREA" && re !== "SELECT" && !(G != null && G.isContentEditable);
  }
  function W(E) {
    P(E) && (E.preventDefault(), E.stopPropagation(), E.repeat || F());
  }
  function R(E) {
    P(E) && (E.preventDefault(), E.stopPropagation());
  }
  function ee(E) {
    const G = !!(E.ctrlKey || E.metaKey), re = !!E.altKey;
    t.marqueeModifier === G && t.altModifier === re || (t.marqueeModifier = G, t.altModifier = re, v(), U(t.pointerPos));
  }
  function ne() {
    t.marqueeModifier = !1, t.altModifier = !1, v(), U(t.pointerPos);
  }
  function le(E) {
    if (n || !E.ctrlKey && !E.metaKey) return;
    const G = String(E.key || "").toLowerCase(), re = String(E.code || "");
    if (G !== "z" && re !== "KeyZ") return;
    const pe = E.target, he = ((pe == null ? void 0 : pe.tagName) || "").toUpperCase();
    if (he === "INPUT" || he === "TEXTAREA" || pe != null && pe.isContentEditable) return;
    const { canUndo: me, canRedo: Z } = f();
    E.shiftKey && !Z || !E.shiftKey && !me || (m(E.shiftKey ? 1 : -1), E.preventDefault(), E.stopPropagation());
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
        setFullscreenState: b,
        syncFrameRollKnob: v,
        togglePlayback: F,
        updateCursor: U
      } = E);
    },
    onEscClose: H,
    onDeleteKey: D,
    onSpaceKey: W,
    onSpaceKeyUp: R,
    onModifierKeyChange: ee,
    onWindowBlur: ne,
    onUndoRedoKey: le
  };
}
const qf = /* @__PURE__ */ new Map(), Zn = _m({
  app: qn,
  api: sn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: qc,
    markImageFailed: fg,
    markImageLoading: ug,
    markImageReady: dg
  }
});
function Xf(e) {
  if (!en(e, "background") || !en(e, "external-sticker")) return null;
  const t = Zn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? no(t[0]) : null;
}
function CN(e) {
  if (!en(e, "background")) return null;
  const [t] = Zn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [r] = Zn.uiValue(e, "pano_timeline_frames") || [], [n] = Zn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(r) > 0 ? Number(r) : null, coverage: Pn(n) };
}
const AN = Zn.assetSource, IN = Zn.source, EN = Zn.uiImage, ON = Zn.invalidateUiImage, Jf = Zn.loadPreferredExactLinkedImage;
async function FN(e, t, r = {}) {
  var Qt, Ft;
  await Jm(e, { tolerateOperationFailure: !0 }), Zn.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, a = uP(e, t);
  await ed();
  const s = Ba(e, "output_preset"), l = Ba(e, "coverage"), d = Ba(e, "bg_color"), u = Ba(e, $M), c = () => {
    const De = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Jf(
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
  }, m = e.__panoSceneStateV2 === !0, b = t === "stickers" && m, v = t === "cutout" && m, F = b && e.__panoStudio === !0, U = v || F, H = t === "cutout" || F, D = v ? CN(e) : null, P = (m ? $h : Rh)(String((u == null ? void 0 : u.value) || ""), {
    outputPreset: p(2048),
    backgroundColor: String((d == null ? void 0 : d.value) || "#00ff00"),
    coverage: D ? D.coverage : Pn(l == null ? void 0 : l.value),
    sharedUiSettings: hP(),
    active: Gh(e),
    fps: m ? Xf(e) : null,
    scene: (D == null ? void 0 : D.state) ?? null,
    camera: v
  });
  e.__panoLiveStateOverride = P, e.__panoLiveStateVersion = 0;
  let W = null;
  U ? (W = P.camera && (!F || P.camera.visible !== !1) ? jh(P.camera, 0) : null, P.shots = W ? [{ ...W, position: [...W.position] }] : [], P.active.selected_shot_id = W && v ? dl : null) : t === "cutout" && (P.shots = Array.isArray(P.shots) ? P.shots.slice(0, 1) : [], P.shots.length || (P.active.selected_shot_id = null));
  const R = t === "cutout" ? (() => {
    var yn;
    const De = Array.isArray(P.shots) ? P.shots : [], qe = String(((yn = P == null ? void 0 : P.active) == null ? void 0 : yn.selected_shot_id) || "");
    return De.find((Jt) => String((Jt == null ? void 0 : Jt.id) || "") === qe) || De[0] || null;
  })() : null, ee = R ? vg(R, !1) : { width: 220, height: 132 }, ne = cg(F ? "studio" : t), le = /* @__PURE__ */ Zi({
    stageStatus: Un,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (ne.viewButtons || []).map((De) => ({ ...De, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Qt = ne.spaceButtons) != null && Qt.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: ne.spaceButtons, frame: ne.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (ne.toolButtons || []).map((De) => ({
      ...De,
      disabled: !1,
      ...De.key === "add-world" ? { visible: b } : {},
      ...v && tP.has(De.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(ne.floatingButtons || []).map((De) => ({ ...De, disabled: !1 })),
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
      width: ee.width,
      height: ee.height,
      label: R ? "Loading preview" : "Add Frame to preview"
    }
  }), E = { frame: /* @__PURE__ */ fs(0), playing: /* @__PURE__ */ fs(!1) }, G = document.createElement("div");
  document.body.appendChild(G);
  const re = ({ intent: De, file: qe } = {}) => {
    if (Yn(qe)) {
      if (De === "add") {
        Oe(qe);
        return;
      }
      if (De === "add-world") {
        Re(qe);
        return;
      }
      De === "replace" && yl(qe);
    }
  }, pe = ({ intent: De } = {}) => {
  }, he = gu(VM, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: a,
    shellPreset: ne,
    paintSwatches: pl.map((De) => ({
      id: De.id,
      label: De.label,
      cssColor: sr(De.color, 1)
    })),
    uiState: le,
    playhead: E,
    onClose: () => {
      Ct();
    },
    onTimeline: (De) => Dr(De),
    onImageFileSelected: re,
    onImageFileCancelled: pe
  });
  let me = null;
  try {
    me = he.mount(G);
  } catch (De) {
    try {
      he.unmount();
    } catch {
    }
    throw G.remove(), De;
  }
  const Z = G.querySelector(".pano-modal-overlay"), w = G.querySelector(".pano-modal"), K = w == null ? void 0 : w.querySelector("[data-stage-overlay]"), de = w == null ? void 0 : w.querySelector("[data-stage-background]"), q = w == null ? void 0 : w.querySelector(".pano-stage-wrap"), ue = ((Ft = me == null ? void 0 : me.getPaintOverlayRefs) == null ? void 0 : Ft.call(me)) || {}, Pe = ue.cursor || null, te = ue.sizePreview || null, O = ue.sizeSample || null;
  if (!Z || !w || !K || !de || !q || !Pe || !te || !O)
    throw he.unmount(), G.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const J = K.getContext("2d"), oe = w.querySelector("[data-side]"), ge = w.querySelector("[data-video-element]"), ve = w.querySelector("[data-port-video-element]");
  Il(K, "editor.stage-overlay"), Il(de, "editor.stage-background"), Wd(ge, "editor.video"), Wd(ve, "editor.port-video");
  const I = w.querySelector(".pano-floating-right"), ae = w.querySelector(".pano-floating-top"), y = w.querySelector("[data-tool-rail]"), S = w.querySelector("[data-frame-rail]"), V = w.querySelector("[data-frame-roll-knob]"), Y = w.querySelector("[data-paint-dock]"), x = w.querySelector(".pano-video-transport"), M = w.querySelector("[data-selection-menu]"), L = w.querySelector("[data-tooltip]"), k = w.querySelector("[data-camera-preview-host]"), N = w.querySelector("[data-camera-preview-canvas]");
  Il(N, "editor.camera-preview");
  const C = w.querySelector("[data-paint-color-row]"), B = w.querySelector("[data-paint-color-pop]"), X = w.querySelector("[data-paint-color-sv]"), ie = w.querySelector("[data-paint-color-sv-cursor]"), $ = w.querySelector("[data-paint-hue-strip]"), se = w.querySelector("[data-paint-hue-handle]");
  q == null || q.removeAttribute("data-stage-ready"), q == null || q.setAttribute("data-stage-loading-kind", "boot"), K.style.opacity = "1", de.style.opacity = "0", i && (oe == null || oe.remove(), w.classList.add("pano-modal-readonly")), w.addEventListener("pointerdown", () => j.wake(), !0), w.addEventListener("pointerdown", (De) => {
    var qe;
    De.target.closest("[data-frame-roll-knob]") || gn(), !De.target.closest(".pano-picker") && (De.target.closest("[data-paint-color-row]") || (w.querySelectorAll(".pano-picker-pop").forEach((yn) => {
      yn.hidden = !0;
    }), $e(!0), H && Me.cutoutAspectOpen && !De.target.closest(".pano-aspect-popover") && !De.target.closest("[data-action='aspect']") && (Me.cutoutAspectOpen = !1, Me.menuMode = "", Me.menuSize.measured = !1, Aa(), Ie()), (qe = le.frameRail) != null && qe.aspectOpen && !De.target.closest(".pano-frame-aspect-control") && (le.frameRail.aspectOpen = !1)));
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
    paintEngine: _u(),
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
  const be = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), A = un({ label: "editor.still" });
  A.__panoFrameIdx = 0;
  const _ = un({ label: "editor.port-still" });
  _.__panoFrameIdx = 0;
  const g = {
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
  }, j = Lw({
    requestAnimationFrame: (De) => requestAnimationFrame(De),
    cancelAnimationFrame: (De) => cancelAnimationFrame(De),
    draw: (De, qe) => _i(De, qe),
    animating: () => _t()
  }), ce = Tw({
    requestFrame: (De) => j.requestFrame(De),
    cancelFrame: (De) => j.cancelFrame(De),
    tasks: {
      seek: () => ml.seek(fe.scrubFrame),
      timeline: () => yr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        et(), Ie({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => bo()
    }
  }), Q = Vv({
    canvas: de,
    onReady: () => {
      Xe(), Ie({ reason: ft.CONTEXT });
    },
    onFailed: () => Ie(),
    onUpdate: () => Ie({ localOnly: !0, reason: ft.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      St(), Xe(), Ie({ reason: ft.CONTEXT });
    }
  }), we = Number.parseFloat(
    getComputedStyle(w).getPropertyValue("--pano-float-radius")
  ) || 10, xe = (De) => {
    const qe = String(De || "default");
    K.style.cursor !== qe && (K.style.cursor = qe);
  }, T = {
    timer: 0,
    target: null
  }, ye = {
    active: !1,
    depth: 0
  }, Ce = wu({
    getView: () => ({ yaw: Me.viewYaw, pitch: Me.viewPitch, fov: Me.viewFov }),
    setView: (De) => {
      Me.viewYaw = Rt(Number(De.yaw || 0)), Me.viewPitch = Ee(Number(De.pitch || 0), -89.9, 89.9), Me.viewFov = Ee(Number(De.fov || Me.viewFov || 100), 35, 140);
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
    getUnwrapRect: () => Nn(),
    onInteraction: () => j.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Oe,
    addWorldStickerFromFile: Re,
    applyInitialCutoutFocus: Ae,
    applyVideoTimelineFps: Ve,
    bindDrag: je,
    cancelFrameCameraGesture: Ye,
    closePaintColorPop: $e,
    commitState: He,
    editorAnimating: _t,
    finishKnobRoll: Nt,
    flushFrameWheelCommit: ht,
    forgetCameraPreviewFrame: St,
    getUnwrapRect: Nn,
    hidePaintSizePreview: mn,
    hideTooltip: gn,
    hoverWorldGizmo: Bt,
    isFreeFrameView: We,
    isFreeSpaceView: Cn,
    migrateLegacyEmbeddedAssets: An,
    onCanvasDragOver: er,
    onCanvasDrop: oo,
    onCanvasMouseMove: pa,
    onCanvasPointerCancel: ha,
    onCanvasPointerDown: ao,
    onCanvasPointerMove: so,
    onCanvasPointerUp: lo,
    onCanvasWheel: ma,
    onDeleteKey: bi,
    onEscClose: co,
    onFrameRollKnobDoubleClick: ga,
    onFrameRollKnobPointerDown: ya,
    onFrameRollKnobPointerMove: ba,
    onFullscreenChange: uo,
    onModifierKeyChange: Tr,
    onRootChange: It,
    onRootClick: Kn,
    onRootInput: tr,
    onRootPointerOut: fo,
    onRootPointerOver: In,
    onSidePanelChange: va,
    onSidePanelClick: _a,
    onSidePanelInput: Sa,
    onSpaceKey: gr,
    onSpaceKeyUp: wa,
    onTimelineAction: Dr,
    onUndoRedoKey: xa,
    onWindowBlur: po,
    onWindowDragEnter: ka,
    onWindowDragLeave: ho,
    onWindowDragOver: mo,
    onWindowDrop: Ma,
    playback: ml,
    pushHistory: gl,
    reconcileExternalStickerFromInputs: Pa,
    refreshModalVideoSource: go,
    replaceSelectedImageFromFile: yl,
    requestDraw: Ie,
    sampleEditorDiagnostics: Fe,
    setDropCue: ke,
    setPointerPos: mt,
    stageResizeObserver: ot,
    stickerCornerOrderSanity: gt,
    stopRenderLoop: Ue,
    syncCanvasSize: Xe,
    syncCutoutShot: et,
    syncFullscreenButton: Bn,
    syncGridToggleButton: Be,
    syncLookAtFrameButtonState: Ge,
    syncOutputPreviewToggleButton: Je,
    syncPaintUi: Ut,
    syncPaintingLayerAsync: wt,
    syncTimeline: yr,
    syncUndoRedoButtons: vi,
    tick: _i,
    triggerBackgroundPersistenceOnClose: Si,
    updateCursor: yo,
    updatePaintColorFromHue: Na,
    updatePaintColorFromSv: Ca,
    updateSelectionMenu: Aa,
    updateSidePanel: bo,
    videoCleanupFns: Ia,
    viewControls: at,
    watchPixelRatio: lt
  } = bP({
    api: sn,
    app: qn,
    backgroundCanvas: de,
    bgWidget: d,
    cameraV2: U,
    canvas: K,
    capture: D,
    closeEditor: Ct,
    comfyMedia: Zn,
    coverageWidget: l,
    ctx: J,
    cutoutPreviewCanvas: N,
    cutoutPreviewHost: k,
    cutoutV2: v,
    dragCue: ye,
    dragFrames: ce,
    editor: Me,
    editorView: Q,
    floatingRightEl: I,
    floatingTopEl: ae,
    frameGateCssRadius: we,
    frameRailEl: S,
    frameRollKnobEl: V,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: W,
    loadPreferredExactLinkedImage: Jf,
    mediaAssetSource: AN,
    mediaSource: IN,
    mediaUiImage: EN,
    node: e,
    overlay: Z,
    paintColorPop: B,
    paintColorRow: C,
    paintColorSv: X,
    paintColorSvCursor: ie,
    paintCursorEl: Pe,
    paintDockEl: Y,
    paintHueHandle: se,
    paintHueStrip: $,
    paintSizePreviewEl: te,
    paintSizePreviewSampleEl: O,
    portStillCanvas: _,
    portVideoEl: ve,
    presetWidget: s,
    previewMode: o,
    rasterErpCanvasCache: z,
    rasterImageAlphaCache: h,
    rasterImageCache: _e,
    readOnly: n,
    resolveEditorOutputPresetWidth: p,
    root: w,
    runtime: g,
    sceneV2: b,
    scheduler: j,
    selectionMenu: M,
    setCanvasCursor: xe,
    shotEditor: H,
    stageWrap: q,
    state: P,
    stateV2: m,
    stateWidget: u,
    stillCanvas: A,
    studio: F,
    timeline: fe,
    timelinePlayhead: E,
    toolRailEl: y,
    tooltip: T,
    tooltipEl: L,
    type: t,
    uiState: le,
    videoEl: ge,
    videoTimelineFps: Xf,
    videoTransportEl: x,
    viewController: Ce,
    vueModal: me
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
  gt(), ot.observe(K), lt();
  const dt = () => He();
  n || (e.__panoFlushStateBeforeQueue = dt), V == null || V.addEventListener("pointerdown", ya), V == null || V.addEventListener("pointermove", ba), V == null || V.addEventListener("pointerup", Nt), V == null || V.addEventListener("pointercancel", () => Ye()), V == null || V.addEventListener("lostpointercapture", () => {
    var De;
    ((De = Me.interaction) == null ? void 0 : De.source) === "knob" && Ye();
  }), V == null || V.addEventListener("dblclick", ga), K.onpointerdown = ao, K.onpointermove = so, K.onpointerup = lo, K.onpointercancel = ha, K.onlostpointercapture = () => {
    Ye();
  }, K.onauxclick = (De) => {
    De.button === 1 && De.preventDefault();
  }, K.oncontextmenu = (De) => {
    (Cn() || We()) && lS(at(), 2) && De.preventDefault();
  }, K.onmousemove = pa, K.onpointerleave = () => {
    Me.interaction || Bt({ x: -1e6, y: -1e6 });
  }, K.onmouseleave = () => {
    mt(Me.pointerPos, !1), yo(Me.pointerPos), Me.mode === "frame" && Me.primaryTool === "cursor" && Ie({ localOnly: !0, reason: ft.OVERLAY });
  }, K.onwheel = ma, K.ondragover = er, K.ondrop = oo, window.addEventListener("dragenter", ka, !0), window.addEventListener("dragover", mo, !0), window.addEventListener("dragleave", ho, !0), window.addEventListener("drop", Ma, !0), oe == null || oe.addEventListener("click", _a), oe == null || oe.addEventListener("input", Sa), oe == null || oe.addEventListener("change", va), Be(), w.addEventListener("click", Kn), w.addEventListener("input", tr), w.addEventListener("change", It), w.addEventListener("pointerup", (De) => {
    var qe;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((qe = De.target) == null ? void 0 : qe.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && mn();
  }), w.addEventListener("pointercancel", (De) => {
    var qe;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((qe = De.target) == null ? void 0 : qe.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && mn();
  }), w.addEventListener("focusout", (De) => {
    De.target.closest("[data-paint-size-slider]") && mn();
  }), w.addEventListener("pointerover", In), w.addEventListener("pointerout", fo), w.addEventListener("pointerdown", (De) => {
    De.target.closest("[data-frame-roll-knob]") || gn();
  }), X && (X.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), je(De, (qe) => Ca(qe.clientX, qe.clientY));
  }), $ && ($.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), je(De, (qe) => Na(qe.clientX));
  }), w.addEventListener("click", (De) => {
    var Ur;
    const qe = De.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!qe) return;
    const yn = qe.getAttribute("data-action") === "confirm-accept", Jt = (Ur = le.confirmDialog) == null ? void 0 : Ur.resolve;
    le.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Jt == null || Jt(yn);
  }), document.addEventListener("fullscreenchange", uo), Bn(), Je();
  const pt = e.onConnectionsChange;
  let tn = null, Wt = () => {
  };
  !n && t === "stickers" && (Wt = qm(e, (De = "sync") => {
    De === "executed" && (ON(be, Hs), go(), b && Ve()), Pa(De);
  }, { editor: !0 }), tn = function(...qe) {
    typeof pt == "function" && pt.apply(this, qe), go(), Ar(this, "connections");
  }, e.onConnectionsChange = tn), !n && !v && qf.set(String(e.id ?? "0"), () => wt());
  let Xt = null;
  async function Ct() {
    return Xt || (Xt = (async () => {
      var De, qe, yn, Jt, Ur, wi, xi, ld;
      return qf.delete(String(e.id ?? "0")), ht(), n || He(), document.fullscreenElement === Z && ((De = document.exitFullscreen) == null || De.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", uo), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === dt && (e.__panoFlushStateBeforeQueue = null), (yn = (qe = e.__panoDomPreview) == null ? void 0 : qe.requestDraw) == null || yn.call(qe), (Ur = (Jt = e.graph) == null ? void 0 : Jt.setDirtyCanvas) == null || Ur.call(Jt, !0, !0), (ld = (xi = (wi = qn) == null ? void 0 : wi.canvas) == null ? void 0 : xi.setDirty) == null || ld.call(xi, !0, !0), gn(), ce.cancel(), Ue(), ge instanceof HTMLVideoElement && ge.pause(), Ia.forEach((xg) => {
        try {
          xg();
        } catch {
        }
      }), Q.dispose(), ke(!1), window.removeEventListener("keydown", co, !0), window.removeEventListener("keydown", bi, !0), window.removeEventListener("keydown", gr, !0), window.removeEventListener("keyup", wa, !0), window.removeEventListener("keydown", Tr, !0), window.removeEventListener("keyup", Tr, !0), window.removeEventListener("blur", po), window.removeEventListener("keydown", xa, !0), window.removeEventListener("dragenter", ka, !0), window.removeEventListener("dragover", mo, !0), window.removeEventListener("dragleave", ho, !0), window.removeEventListener("drop", Ma, !0), !n && t === "stickers" && (e.onConnectionsChange === tn && (e.onConnectionsChange = pt), Wt()), he.unmount(), G.remove(), Si(), Xt = null, !0;
    })().catch((De) => (console.error("[PanoramaCutoutSync] closeEditor failed", De), Xt = null, !1)), Xt);
  }
  window.addEventListener("keydown", co, !0), window.addEventListener("keydown", bi, !0), window.addEventListener("keydown", gr, !0), window.addEventListener("keyup", wa, !0), window.addEventListener("keydown", Tr, !0), window.addEventListener("keyup", Tr, !0), window.addEventListener("blur", po), window.addEventListener("keydown", xa, !0), Z.addEventListener("pointerdown", (De) => {
    De.target === Z && Ct();
  });
  function Tt(De, qe, { rollbackState: yn = !1 } = {}) {
    let Jt = "";
    try {
      yn && (Jt = JSON.stringify(P)), qe();
    } catch (Ur) {
      if (Jt)
        try {
          const wi = JSON.parse(Jt);
          Object.keys(P).forEach((xi) => delete P[xi]), Object.assign(P, wi), n || He();
        } catch (wi) {
          console.error(`[PanoramaStickers] editor boot step "${De}" rollback failed`, wi);
        }
      le.stageWarningDetail = `boot:${De}`, console.error(`[PanoramaStickers] editor boot step "${De}" failed`, Ur);
    }
  }
  Tt("cutout-focus", Ae), !n && t === "stickers" && Tt("external-sticker-sync", () => Pa("open"), { rollbackState: !0 }), An().catch((De) => {
    le.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', De);
  }), Tt("history", gl), Tt("undo-redo", vi), Tt("paint-ui", Ut), Tt("side-panel", bo), Tt("look-at-frame", Ge), Tt("video-source", go), Tt("canvas-size", Xe), Tt("cursor", () => yo(Me.pointerPos)), Ie(), Fe();
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
